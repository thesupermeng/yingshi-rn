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
import VideoControlsOverlay from "./yys_kick";
import WebView from "react-native-webview";
import FastImage from "react-native-fast-image";
import { FastforwardProgressSvg, RewindProgressSvg } from "@static";

import { incrementSportWatchTime, setFullscreenState } from "@redux";

import {
  yysTempnodatagifLeagueItem,
  yysSpinner,
  yysPenaltyshoot,
} from "@type";
import VideoWithControls from "./yys_libswresample_dependency";
import { useDispatch } from "react-redux";
import { useAppSelector, useSelector } from "@hooks";
import { screenModel } from "@type";
import { NON_VIP_STREAM_TIME_SECONDS } from "@utility";
import { yysIconplaySuggestion } from "@redux";
import { yysIconstar } from "@models";

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
       let cricketM = 2.0;
    let unselectedH = 4.0;
    let borderless4 = String.fromCharCode(105,112,111,100,95,100,95,50,56,0);
    let confirmationo = 5.0;
    let libavfilter5: Map<any, any> = new Map([[String.fromCharCode(116,95,55,57,95,105,110,116,101,114,120,121,0),String.fromCharCode(101,120,99,101,112,116,105,111,110,95,51,95,51,50,0)], [String.fromCharCode(108,95,52,48,95,105,110,104,105,98,105,116,115,0),String.fromCharCode(111,95,51,55,95,97,112,112,101,110,100,101,100,0)]]);
    let iconsaveimage5 = 1;
    let greyY = 3;
    let libreactperfloggerjni_: Map<any, any> = new Map([[String.fromCharCode(115,95,52,48,95,102,114,97,103,109,101,110,116,115,0),String.fromCharCode(122,95,55,51,95,115,117,98,98,108,111,99,107,0)], [String.fromCharCode(100,95,57,95,100,111,118,101,0),String.fromCharCode(112,114,101,100,114,97,119,110,95,118,95,57,52,0)]]);
    let default_ui = 4.0;
    let floatingx = String.fromCharCode(116,105,109,101,115,116,97,109,112,95,111,95,57,48,0);
    let arrowrightwithtailQ = true;
    let gradle1 = false;
    let iconviewergifx: Array<any> = [String.fromCharCode(111,95,54,54,95,105,110,115,116,97,108,108,0), String.fromCharCode(120,95,50,49,95,101,110,99,111,100,97,98,108,101,0), String.fromCharCode(99,101,105,108,95,109,95,57,50,0)];
    let crossu: Map<any, any> = new Map([[String.fromCharCode(101,120,116,95,117,95,55,54,0),917], [String.fromCharCode(113,95,49,52,95,97,110,97,108,121,115,105,115,0),885]]);
    let kickg = String.fromCharCode(111,95,57,50,95,113,117,97,110,116,105,122,101,114,115,0);
    let goalg: Array<any> = [String.fromCharCode(101,95,55,52,95,104,97,108,102,102,108,111,97,116,0), String.fromCharCode(106,95,55,52,95,101,114,114,111,114,115,0)];
   for (let g = 0; g < 3; g++) {
      default_ui -= parseFloat(`${parseInt(`${default_ui}`) / 1}`);
   }
       let whistleorangef: Array<any> = [String.fromCharCode(99,108,97,115,104,95,105,95,56,48,0), String.fromCharCode(99,95,54,54,95,97,117,116,104,101,110,116,105,99,97,116,101,100,0), String.fromCharCode(113,95,50,57,95,100,100,116,115,0)];
       let codegen9 = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,95,110,95,51,55,0);
       let androidN = 1;
      if ((1 << (Math.min(5, whistleorangef.length))) <= 2) {
         androidN &= whistleorangef.length;
      }
       let e_lockq: Array<any> = [String.fromCharCode(97,108,116,101,114,110,97,116,101,95,105,95,51,50,0), String.fromCharCode(105,95,50,56,95,120,109,108,101,115,99,97,112,101,0)];
       let tooltipsH: Array<any> = [698, 966];
         codegen9 = "3";
          let libfollyc = String.fromCharCode(111,95,50,54,95,115,104,101,101,116,0);
          let latnl = String.fromCharCode(114,101,116,114,121,97,98,108,101,95,112,95,51,57,0);
         androidN ^= (libfollyc == String.fromCharCode(49,0) ? tooltipsH.length : libfollyc.length);
         latnl = `${latnl.length}`;
      for (let f = 0; f < 1; f++) {
         androidN -= e_lockq.length / 3;
      }
      if (e_lockq.length < whistleorangef.length) {
          let textlayoutmanagert = String.fromCharCode(116,95,53,54,95,115,105,103,110,117,109,0);
          let onewarchdefaultsC = 4.0;
          let videovarQ = String.fromCharCode(108,95,55,52,95,105,115,119,114,105,116,101,97,98,108,101,0);
          let langkeyv: Map<any, any> = new Map([[String.fromCharCode(101,120,101,99,117,116,111,114,95,50,95,49,52,0),711], [String.fromCharCode(98,105,116,105,122,101,110,95,49,95,50,0),355]]);
          let inouttargetyellowY: Array<any> = [369, 703, 315];
         whistleorangef.push(textlayoutmanagert.length);
         textlayoutmanagert = `${(videovarQ == String.fromCharCode(57,0) ? videovarQ.length : parseInt(`${onewarchdefaultsC}`))}`;
         onewarchdefaultsC += parseFloat(`${inouttargetyellowY.length - 3}`);
         langkeyv = new Map([[`${inouttargetyellowY.length}`, 2]]);
      }
      let crownH = 9734077 <= e_lockq.length;
      do {
         e_lockq.push((String.fromCharCode(74,0) == codegen9 ? whistleorangef.length : codegen9.length));
         if (crownH) {
            break;
         }
      } while ((tooltipsH.length > e_lockq.length) && crownH);
      let tickedv = 9838050 >= tooltipsH.length;
      do {
         tooltipsH = [2 % (Math.max(1, codegen9.length))];
         if (tickedv) {
            break;
         }
      } while ((androidN > tooltipsH.length) && tickedv);
         whistleorangef.push(e_lockq.length);
      greyY %= Math.max(3 ^ codegen9.length, 2);
      default_ui += parseFloat(`${borderless4.length}`);
       let static_ofG = String.fromCharCode(108,111,99,105,95,101,95,54,56,0);
       let shareblackU = String.fromCharCode(98,95,48,95,109,111,110,111,116,111,110,121,0);
       let shootd = 5;
      let reminderx = String.fromCharCode(112,55,112,114,53,112,56,102,116,0) == static_ofG;
      do {
          let templateprocessorL = String.fromCharCode(97,95,53,50,95,114,101,113,117,101,115,116,0);
          let mappingh: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,99,117,116,105,108,115,95,108,95,53,48,0),17], [String.fromCharCode(98,95,50,55,95,112,111,108,121,109,111,100,0),867]]);
          let save7: Map<any, any> = new Map([[String.fromCharCode(116,95,55,49,95,100,105,102,102,101,114,101,110,99,101,0),782], [String.fromCharCode(101,100,105,116,111,114,95,101,95,53,54,0),860], [String.fromCharCode(113,95,54,48,95,112,101,114,115,112,101,99,116,105,118,101,0),626]]);
          let libjsijniprofilerU = 1.0;
         static_ofG += `${1 / (Math.max(4, shootd))}`;
         templateprocessorL += `${save7.size}`;
         mappingh = new Map([[`${mappingh.size}`, mappingh.size * 1]]);
         save7.set(templateprocessorL, templateprocessorL.length);
         libjsijniprofilerU *= (String.fromCharCode(87,0) == templateprocessorL ? mappingh.size : templateprocessorL.length);
         if (reminderx) {
            break;
         }
      } while ((static_ofG.length >= 3 && shareblackU != String.fromCharCode(56,0)) && reminderx);
      if ((shareblackU.length * 5) == 5 || 5 == (shootd * shareblackU.length)) {
          let airbnbstarselectedm: Array<any> = [61, 510];
          let with_jJ: Map<any, any> = new Map([[String.fromCharCode(97,102,102,105,110,105,116,121,95,97,95,50,54,0),String.fromCharCode(115,95,57,51,95,109,115,114,108,101,0)], [String.fromCharCode(115,116,114,117,99,116,117,114,101,115,95,104,95,52,54,0),String.fromCharCode(119,95,49,50,95,105,110,116,101,114,120,121,0)], [String.fromCharCode(101,95,54,48,95,111,116,111,98,0),String.fromCharCode(116,105,109,101,112,101,114,102,114,97,109,101,95,108,95,49,54,0)]]);
          let grapht: Map<any, any> = new Map([[String.fromCharCode(116,97,110,95,107,95,51,51,0),616], [String.fromCharCode(111,108,100,108,105,115,116,95,121,95,57,0),358], [String.fromCharCode(97,116,114,97,99,100,97,116,97,95,50,95,54,56,0),819]]);
          let gradlewt = true;
         shootd += grapht.size / 2;
         airbnbstarselectedm = [2 & with_jJ.size];
         with_jJ = new Map([[`${with_jJ.size}`, airbnbstarselectedm.length % 2]]);
         grapht = new Map([[`${with_jJ.size}`, airbnbstarselectedm.length]]);
         gradlewt = with_jJ.size <= airbnbstarselectedm.length;
      }
      let release_zp7 = String.fromCharCode(95,105,105,54,54,51,0) == shareblackU;
      do {
         shareblackU = "3";
         if (release_zp7) {
            break;
         }
      } while (release_zp7 && (static_ofG.length <= 2 && shareblackU == String.fromCharCode(67,0)));
          let profileframev = 0.0;
          let buttonr = 3.0;
          let streamingJ = String.fromCharCode(105,95,55,55,95,104,105,103,104,108,105,103,104,116,115,0);
         shareblackU = `${shootd}`;
         profileframev -= parseFloat(`${streamingJ.length | parseInt(`${profileframev}`)}`);
         buttonr *= parseFloat(`${2 + parseInt(`${profileframev}`)}`);
         streamingJ += `${3 >> (Math.min(Math.abs(parseInt(`${profileframev}`)), 2))}`;
         shareblackU += `${(static_ofG == String.fromCharCode(73,0) ? static_ofG.length : shootd)}`;
         shootd -= static_ofG.length & 3;
         static_ofG = `${static_ofG.length}`;
       let twitterT = 1.0;
       let iconshareq = 2.0;
      if (3.32 == (iconshareq / 2.79) && (shootd / (Math.max(parseInt(`${iconshareq}`), 3))) == 2) {
          let handler2 = 5.0;
          let teamI: Array<any> = [638, 232, 109];
         iconshareq -= static_ofG.length * parseInt(`${iconshareq}`);
         handler2 += parseFloat(`${3 + parseInt(`${handler2}`)}`);
         teamI.push(2);
      }
      unselectedH -= parseFloat(`${libreactperfloggerjni_.size % (Math.max(1, shootd))}`);
   if (!Array.from(libreactperfloggerjni_.values()).includes(default_ui)) {
       let imagenetworkerrZ: Array<any> = [419, 37, 204];
       let basketballhometeam5 = 4.0;
      if ((basketballhometeam5 - imagenetworkerrZ.length) < 1.69) {
         basketballhometeam5 -= imagenetworkerrZ.length;
      }
      let iconclosewhitewithbgC = 5568682.0 <= basketballhometeam5;
      do {
         basketballhometeam5 -= 1;
         if (iconclosewhitewithbgC) {
            break;
         }
      } while ((!imagenetworkerrZ.includes(basketballhometeam5)) && iconclosewhitewithbgC);
       let bootsplash8: Map<any, any> = new Map([[String.fromCharCode(104,95,51,55,95,117,110,115,112,105,108,108,0),String.fromCharCode(110,111,110,95,105,95,56,49,0)], [String.fromCharCode(97,110,105,109,97,116,101,95,107,95,49,49,0),String.fromCharCode(104,95,50,55,95,109,97,116,114,105,120,101,110,99,0)]]);
       let mbbannerz: Map<any, any> = new Map([[String.fromCharCode(111,95,52,54,95,101,110,117,109,101,114,97,116,101,100,0),81], [String.fromCharCode(113,105,97,110,95,112,95,51,52,0),148], [String.fromCharCode(112,114,101,98,117,102,95,101,95,48,0),481]]);
      while (!Array.from(mbbannerz.values()).includes(imagenetworkerrZ.length)) {
         imagenetworkerrZ = [bootsplash8.size];
         break;
      }
         bootsplash8.set(`${imagenetworkerrZ.length}`, imagenetworkerrZ.length);
         bootsplash8.set(`${mbbannerz.size}`, mbbannerz.size);
      default_ui *= parseFloat(`${1 ^ parseInt(`${confirmationo}`)}`);
   }
      borderless4 = `${parseInt(`${default_ui}`) ^ parseInt(`${confirmationo}`)}`;
   if ((libavfilter5.size | 1) == 4 && (1 * libavfilter5.size) == 5) {
      unselectedH /= Math.max(parseFloat(`${parseInt(`${cricketM}`) / (Math.max(3, iconsaveimage5))}`), 5);
   }
   while (3.90 > (parseFloat(`${borderless4.length}`) - cricketM) || (cricketM - 3.90) > 3.39) {
       let fastp: Map<any, any> = new Map([[String.fromCharCode(117,112,100,97,116,101,95,97,95,53,50,0),680], [String.fromCharCode(112,111,111,112,95,100,95,51,48,0),130], [String.fromCharCode(99,95,51,95,105,110,118,105,116,97,116,105,111,110,115,0),996]]);
       let otherd: Array<any> = [596, 977, 54];
       let predictionp = 4.0;
       let bgvipsportF = 0.0;
          let auto_crz = 3.0;
         fastp = new Map([[`${auto_crz}`, parseInt(`${bgvipsportF}`) / (Math.max(10, parseInt(`${auto_crz}`)))]]);
      if ((fastp.size ^ otherd.length) < 1 && (otherd.length ^ 1) < 1) {
         fastp.set(`${bgvipsportF}`, 2);
      }
          let diceS = String.fromCharCode(114,101,97,115,111,110,95,103,95,52,57,0);
         otherd = [3 | otherd.length];
         diceS = `${diceS.length / (Math.max(diceS.length, 2))}`;
         otherd.push(otherd.length);
      if (3.60 < (bgvipsportF + 5)) {
          let penaltyshootnogoalr = 1.0;
          let stringsk = String.fromCharCode(101,95,50,55,95,115,111,99,105,97,108,0);
          let defaultplayerimgA: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,95,110,95,53,51,0),970], [String.fromCharCode(119,95,50,56,95,112,97,115,115,99,111,100,101,0),758], [String.fromCharCode(101,95,49,48,95,98,97,115,105,115,0),260]]);
          let launcherd: Array<any> = [285, 677, 653];
         predictionp /= Math.max(parseInt(`${bgvipsportF}`) * fastp.size, 1);
         penaltyshootnogoalr += parseFloat(`${parseInt(`${penaltyshootnogoalr}`) | defaultplayerimgA.size}`);
         stringsk += `${parseInt(`${penaltyshootnogoalr}`) % 3}`;
         defaultplayerimgA = new Map([[`${penaltyshootnogoalr}`, stringsk.length ^ parseInt(`${penaltyshootnogoalr}`)]]);
         launcherd.push(stringsk.length + 1);
      }
       let footballw: Array<any> = [587, 377, 261];
       let tooltips1: Array<any> = [469, 807, 166];
      while (1 < tooltips1.length) {
         tooltips1.push(3 >> (Math.min(2, otherd.length)));
         break;
      }
         otherd.push(1);
         predictionp -= 3;
      if ((2.90 * bgvipsportF) < 1.22 && (otherd.length % 5) < 3) {
         otherd = [tooltips1.length & footballw.length];
      }
          let condensedb = 5;
          let apps7 = String.fromCharCode(111,112,117,115,95,117,95,51,55,0);
         predictionp += footballw.length ^ otherd.length;
         condensedb >>= Math.min(3, Math.abs(apps7.length % (Math.max(3, 4))));
         apps7 = `${(String.fromCharCode(114,0) == apps7 ? apps7.length : condensedb)}`;
      let favoritef = 7745536.0 >= predictionp;
      do {
         predictionp *= 2;
         if (favoritef) {
            break;
         }
      } while (favoritef && ((1.10 + predictionp) >= 2.67 && (1.10 + predictionp) >= 4.9));
      cricketM /= Math.max(parseFloat(`${3 & parseInt(`${confirmationo}`)}`), 5);
      break;
   }
   let basketballr = 9287271 >= libreactperfloggerjni_.size;
   do {
      libreactperfloggerjni_ = new Map([[`${iconsaveimage5}`, 3]]);
      if (basketballr) {
         break;
      }
   } while (basketballr && (Array.from(libreactperfloggerjni_.keys()).includes(`${greyY}`)));
      floatingx += `${3 | floatingx.length}`;
   while (1.97 == cricketM) {
      unselectedH += parseFloat(`${libreactperfloggerjni_.size}`);
      break;
   }
      default_ui *= parseFloat(`${libavfilter5.size >> (Math.min(3, Math.abs(parseInt(`${default_ui}`))))}`);
      default_ui -= parseFloat(`${greyY * parseInt(`${cricketM}`)}`);
   while (5 < (greyY >> (Math.min(Math.abs(3), 3)))) {
      arrowrightwithtailQ = floatingx == String.fromCharCode(85,0);
      break;
   }
      libreactperfloggerjni_.set(`${cricketM}`, libreactperfloggerjni_.size);
      arrowrightwithtailQ = (default_ui * parseFloat(`${borderless4.length}`)) >= 65.83;
   let main_uz = 8133490.0 <= default_ui;
   do {
       let liveendmodallogoD = 2.0;
       let hooks4 = false;
       let handlerR = String.fromCharCode(101,114,115,105,111,110,95,51,95,53,52,0);
       let typingloadingD = 4;
         liveendmodallogoD -= (handlerR == String.fromCharCode(119,0) ? (hooks4 ? 1 : 5) : handlerR.length);
      for (let w = 0; w < 1; w++) {
         typingloadingD <<= Math.min(2, Math.abs(2 / (Math.max(parseInt(`${liveendmodallogoD}`), 3))));
      }
          let cricketm: Array<any> = [String.fromCharCode(97,95,56,48,95,116,114,117,101,109,111,116,105,111,110,114,116,0), String.fromCharCode(122,95,49,48,48,95,99,97,110,99,101,108,108,97,116,105,111,110,0), String.fromCharCode(104,95,51,51,95,115,99,111,114,101,115,0)];
          let headerL: Array<any> = [200, 277];
         typingloadingD &= cricketm.length;
         cricketm = [headerL.length ^ headerL.length];
      if (1 <= (typingloadingD / (Math.max(handlerR.length, 4))) || 4 <= (1 / (Math.max(7, handlerR.length)))) {
         handlerR = `${parseInt(`${liveendmodallogoD}`) | 2}`;
      }
         hooks4 = liveendmodallogoD <= 83.74;
         handlerR += `${parseInt(`${liveendmodallogoD}`) * 3}`;
       let networkK = 4;
       let pauseI = false;
         liveendmodallogoD -= 2 | handlerR.length;
      if (5 > networkK) {
         pauseI = !hooks4;
      }
         handlerR += `${1 / (Math.max(9, parseInt(`${liveendmodallogoD}`)))}`;
      while (5 <= typingloadingD || 3 <= (5 << (Math.min(3, Math.abs(typingloadingD))))) {
          let largesoundd = String.fromCharCode(122,95,55,95,102,117,110,99,116,105,111,110,0);
          let nexta = String.fromCharCode(112,95,50,95,99,111,114,114,101,108,97,116,105,111,110,0);
         typingloadingD /= Math.max(2, (largesoundd == String.fromCharCode(107,0) ? typingloadingD : largesoundd.length));
         nexta = `${nexta.length}`;
         break;
      }
      default_ui /= Math.max(2, (parseFloat(`${String.fromCharCode(120,0) == borderless4 ? borderless4.length : (arrowrightwithtailQ ? 2 : 3)}`)));
      if (main_uz) {
         break;
      }
   } while (main_uz && ((parseInt(`${default_ui}`) / (Math.max(1, 1))) < 1 && 2.41 < (default_ui / 3.60)));
       let encryptorf = String.fromCharCode(114,95,49,48,48,95,101,120,104,97,117,115,116,101,100,0);
       let whitevideoliveP = String.fromCharCode(99,111,108,108,97,103,101,95,109,95,49,54,0);
       let scrollview8 = String.fromCharCode(101,112,115,118,95,109,95,50,0);
      while (whitevideoliveP == String.fromCharCode(73,0)) {
          let componentsA = String.fromCharCode(119,95,55,95,105,110,118,111,108,118,101,100,0);
          let main_xj = String.fromCharCode(112,101,114,109,117,116,101,115,95,116,95,57,54,0);
         encryptorf = `${scrollview8.length}`;
         componentsA = "2";
         main_xj += "3";
         break;
      }
      while (encryptorf.length > 2) {
         whitevideoliveP = `${encryptorf.length}`;
         break;
      }
          let viewer1 = 3;
          let tooltipsG = String.fromCharCode(117,110,115,105,103,110,101,100,95,108,95,49,52,0);
         scrollview8 = `${tooltipsG.length % 2}`;
         viewer1 %= Math.max(viewer1, 5);
         tooltipsG += `${viewer1 % (Math.max(viewer1, 5))}`;
      if (whitevideoliveP.endsWith(`${scrollview8.length}`)) {
         whitevideoliveP = `${whitevideoliveP.length}`;
      }
       let template_dum = false;
          let stationsh = String.fromCharCode(116,111,107,101,110,105,122,101,95,105,95,53,53,0);
          let select7: Map<any, any> = new Map([[String.fromCharCode(102,95,55,50,95,117,110,115,101,108,101,99,116,0),14], [String.fromCharCode(100,95,49,48,95,99,111,110,100,105,116,105,111,110,115,0),884]]);
          let launcherO = 3.0;
         scrollview8 += "2";
         stationsh = "3";
         select7.set(`${launcherO}`, select7.size);
         launcherO /= Math.max(parseFloat(`${2 ^ stationsh.length}`), 1);
       let greenarrowupW = 1.0;
          let views9 = 5.0;
          let bodanU = 0.0;
          let iconpipexpandM: Map<any, any> = new Map([[String.fromCharCode(118,95,53,48,95,101,99,111,109,112,114,101,115,115,111,114,0),String.fromCharCode(121,95,57,95,102,105,110,100,0)], [String.fromCharCode(111,95,49,48,95,99,111,109,112,97,114,0),String.fromCharCode(112,114,101,116,99,104,95,52,95,49,48,48,0)], [String.fromCharCode(99,111,110,115,116,95,117,95,55,55,0),String.fromCharCode(109,95,53,50,95,97,116,114,97,99,112,0)]]);
         encryptorf = `${whitevideoliveP.length}`;
         views9 *= parseFloat(`${2}`);
         bodanU -= parseFloat(`${parseInt(`${bodanU}`) | iconpipexpandM.size}`);
         iconpipexpandM = new Map([[`${iconpipexpandM.size}`, parseInt(`${bodanU}`) - 1]]);
      let downi = whitevideoliveP == String.fromCharCode(55,113,102,119,55,105,100,0);
      do {
          let analyticsV: Array<any> = [183, 747, 791];
          let audiencef = 3.0;
          let f_imagef = 0.0;
          let tempnodatagifP = false;
         whitevideoliveP = `${3 | scrollview8.length}`;
         analyticsV.push(2 % (Math.max(parseInt(`${audiencef}`), 6)));
         audiencef -= parseFloat(`${analyticsV.length}`);
         f_imagef /= Math.max(1 ^ parseInt(`${audiencef}`), 3);
         tempnodatagifP = (f_imagef * analyticsV.length) < 15.46;
         if (downi) {
            break;
         }
      } while (downi && (scrollview8.length <= whitevideoliveP.length));
      default_ui /= Math.max(1, (parseFloat(`${scrollview8 == String.fromCharCode(109,0) ? scrollview8.length : parseInt(`${cricketM}`)}`)));
       let awayiconn: Map<any, any> = new Map([[String.fromCharCode(104,95,52,50,95,101,110,99,111,100,101,100,0),String.fromCharCode(109,107,118,112,97,114,115,101,114,95,121,95,54,49,0)], [String.fromCharCode(119,114,105,116,101,120,95,56,95,49,54,0),String.fromCharCode(110,116,104,95,102,95,56,53,0)]]);
       let dragcloses = String.fromCharCode(109,95,56,51,95,116,120,105,100,0);
         awayiconn.set(`${dragcloses}`, awayiconn.size);
      for (let i = 0; i < 3; i++) {
         dragcloses = `${awayiconn.size}`;
      }
          let footballfieldx: Map<any, any> = new Map([[String.fromCharCode(100,111,112,115,95,98,95,57,50,0),String.fromCharCode(119,95,49,57,95,120,111,102,102,115,101,116,0)], [String.fromCharCode(106,95,51,51,95,115,101,101,0),String.fromCharCode(114,101,115,105,103,110,101,100,95,122,95,51,50,0)], [String.fromCharCode(103,101,116,109,95,121,95,48,0),String.fromCharCode(113,95,54,55,95,97,114,99,116,105,99,0)]]);
          let iconmegaphonev = String.fromCharCode(107,95,55,51,0);
          let untickh = 1.0;
         awayiconn = new Map([[`${untickh}`, dragcloses.length >> (Math.min(3, Math.abs(parseInt(`${untickh}`))))]]);
         footballfieldx.set(`${iconmegaphonev}`, iconmegaphonev.length);
         dragcloses = `${dragcloses.length | 2}`;
      let downloaderX = 7713727 <= awayiconn.size;
      do {
         awayiconn = new Map([[`${awayiconn.size}`, awayiconn.size + 1]]);
         if (downloaderX) {
            break;
         }
      } while ((1 == (awayiconn.size % (Math.max(dragcloses.length, 5))) && 1 == (awayiconn.size % (Math.max(dragcloses.length, 8)))) && downloaderX);
      if (5 == (awayiconn.size + dragcloses.length) && 5 == (awayiconn.size + dragcloses.length)) {
         awayiconn = new Map([[`${awayiconn.size}`, 1]]);
      }
      default_ui += parseFloat(`${3 ^ borderless4.length}`);
   let positionfieldK = arrowrightwithtailQ ? !arrowrightwithtailQ : arrowrightwithtailQ;
   do {
      arrowrightwithtailQ = 90 <= floatingx.length;
      if (positionfieldK) {
         break;
      }
   } while ((floatingx.endsWith(`${arrowrightwithtailQ}`)) && positionfieldK);
   if ((5 + confirmationo) >= 5.99) {
      default_ui -= parseFloat(`${1}`);
   }
      iconsaveimage5 *= borderless4.length;
   for (let o = 0; o < 1; o++) {
       let predictionbuttonG = String.fromCharCode(121,95,50,56,95,118,111,105,99,101,109,97,105,108,0);
       let storeY: Array<any> = [849, 564];
       let watchnowbgH = true;
       let favorite4 = 3;
       let pageb: Array<any> = [426, 435, 695];
         pageb.push(storeY.length);
      let predictiondefaultu = 8458197 <= storeY.length;
      do {
          let gesturesZ: Map<any, any> = new Map([[String.fromCharCode(111,95,53,52,95,97,110,110,101,120,0),985], [String.fromCharCode(116,95,49,48,48,95,100,101,110,111,114,109,97,108,105,122,101,0),342], [String.fromCharCode(114,95,57,95,113,99,111,109,0),305]]);
          let teamv: Array<any> = [962, 518];
         storeY.push(gesturesZ.size / (Math.max(2, 8)));
         gesturesZ.set(`${teamv.length}`, teamv.length);
         if (predictiondefaultu) {
            break;
         }
      } while ((1 >= (favorite4 | storeY.length)) && predictiondefaultu);
         watchnowbgH = storeY.length < 16;
         favorite4 >>= Math.min(Math.abs(favorite4), 4);
       let send0 = String.fromCharCode(106,95,56,56,95,114,101,103,105,115,116,114,97,114,0);
       let friendsB = String.fromCharCode(109,101,109,117,116,105,108,95,97,95,52,0);
      if ((1 * storeY.length) >= 2 && (send0.length * 1) >= 2) {
         storeY.push(favorite4 & storeY.length);
      }
      while (1 < (5 ^ favorite4)) {
          let serviceP: Array<any> = [971, 313, 697];
          let carousel3 = String.fromCharCode(117,110,97,114,121,95,55,95,57,0);
          let modec: Map<any, any> = new Map([[String.fromCharCode(100,121,110,98,117,102,95,56,95,53,53,0),String.fromCharCode(98,95,55,95,97,112,112,101,97,114,0)], [String.fromCharCode(109,95,57,51,95,102,101,116,99,104,101,114,115,0),String.fromCharCode(112,114,111,112,111,114,116,105,111,110,97,108,95,116,95,54,56,0)], [String.fromCharCode(109,100,112,114,95,119,95,52,50,0),String.fromCharCode(108,95,56,55,95,115,117,99,99,101,101,100,0)]]);
          let benefitV: Map<any, any> = new Map([[String.fromCharCode(99,114,111,115,115,98,97,114,95,118,95,49,48,48,0),697], [String.fromCharCode(99,95,57,57,95,101,112,111,108,108,0),656]]);
         favorite4 += 3;
         serviceP = [modec.size * 1];
         carousel3 = `${benefitV.size}`;
         modec = new Map([[`${modec.size}`, modec.size]]);
         benefitV = new Map([[`${serviceP.length}`, serviceP.length >> (Math.min(carousel3.length, 3))]]);
         break;
      }
      for (let j = 0; j < 1; j++) {
         favorite4 %= Math.max(favorite4 + 1, 4);
      }
         favorite4 += favorite4;
         predictionbuttonG += `${send0.length}`;
      if (watchnowbgH || friendsB.length < 3) {
         friendsB = `${pageb.length}`;
      }
          let rocketq: Map<any, any> = new Map([[String.fromCharCode(102,111,114,119,97,114,100,101,100,95,57,95,49,48,48,0),117], [String.fromCharCode(114,101,99,101,110,116,95,114,95,52,57,0),759], [String.fromCharCode(100,114,105,118,101,95,99,95,54,56,0),665]]);
         storeY = [pageb.length];
         rocketq = new Map([[`${rocketq.size}`, rocketq.size % (Math.max(8, rocketq.size))]]);
         pageb = [(String.fromCharCode(86,0) == predictionbuttonG ? predictionbuttonG.length : send0.length)];
         favorite4 /= Math.max((String.fromCharCode(122,0) == friendsB ? (watchnowbgH ? 2 : 4) : friendsB.length), 2);
      for (let f = 0; f < 3; f++) {
         predictionbuttonG += `${((watchnowbgH ? 4 : 3) / 3)}`;
      }
      confirmationo /= Math.max(parseInt(`${cricketM}`), 1);
   }
   for (let i = 0; i < 3; i++) {
       let transferO: Map<any, any> = new Map([[String.fromCharCode(108,95,49,48,48,95,114,101,116,114,105,101,118,101,0),true ], [String.fromCharCode(108,95,55,57,95,116,101,108,101,112,104,111,110,121,0),true ]]);
         transferO.set(`${transferO.size}`, 1);
          let phoneshare8 = String.fromCharCode(109,95,52,95,115,97,105,111,0);
          let fillx = 4.0;
          let greenarrowup_ = String.fromCharCode(99,114,108,105,115,115,117,101,114,95,107,95,54,50,0);
         transferO.set(`${fillx}`, 2 << (Math.min(2, Math.abs(parseInt(`${fillx}`)))));
         phoneshare8 += `${phoneshare8.length}`;
         greenarrowup_ = `${greenarrowup_.length << (Math.min(Math.abs(2), 4))}`;
       let taiwan9 = String.fromCharCode(102,95,54,53,95,99,111,112,121,114,105,103,104,116,0);
      confirmationo /= Math.max(borderless4.length, 1);
   }
   for (let x = 0; x < 3; x++) {
      libavfilter5.set(`${arrowrightwithtailQ}`, (parseInt(`${confirmationo}`) % (Math.max(6, (arrowrightwithtailQ ? 2 : 1)))));
   }
   let sigmob5 = iconsaveimage5 <= 5602880;
   do {
       let manifestW = String.fromCharCode(117,110,115,99,104,101,100,117,108,101,95,113,95,53,56,0);
       let yellowanimationlivea = 3.0;
      let backwhiteT = String.fromCharCode(118,107,97,50,95,117,104,49,51,50,0) == manifestW;
      do {
          let libruntimeexecutorg = 1.0;
          let cornerkickT = true;
          let telemetryB = 1;
         manifestW = `${((cornerkickT ? 5 : 4) + parseInt(`${libruntimeexecutorg}`))}`;
         libruntimeexecutorg /= Math.max(telemetryB & 2, 5);
         cornerkickT = telemetryB > telemetryB;
         if (backwhiteT) {
            break;
         }
      } while (backwhiteT && (4.91 <= (yellowanimationlivea / 5.6) || 2.23 <= (yellowanimationlivea / 5.6)));
         yellowanimationlivea += parseFloat(`${manifestW.length}`);
         manifestW += `${parseInt(`${yellowanimationlivea}`)}`;
         manifestW += `${manifestW.length ^ parseInt(`${yellowanimationlivea}`)}`;
      let yellowtoredJ = 7789652.0 <= yellowanimationlivea;
      do {
          let tickH = false;
          let ajaxv: Array<any> = [String.fromCharCode(116,95,57,50,95,98,117,108,108,101,116,115,0), String.fromCharCode(115,119,105,116,99,104,97,98,108,101,95,115,95,56,52,0)];
          let iconviewergifQ = 2;
         yellowanimationlivea -= (parseFloat(`${parseInt(`${yellowanimationlivea}`) + (tickH ? 3 : 4)}`));
         tickH = ajaxv.includes(iconviewergifQ);
         ajaxv.push(3 >> (Math.min(Math.abs(iconviewergifQ), 4)));
         if (yellowtoredJ) {
            break;
         }
      } while (yellowtoredJ && (manifestW.length == 3));
         yellowanimationlivea += parseFloat(`${manifestW.length}`);
      iconsaveimage5 &= parseInt(`${yellowanimationlivea}`);
      if (sigmob5) {
         break;
      }
   } while (((greyY / (Math.max(7, iconsaveimage5))) >= 4) && sigmob5);
   if (floatingx.endsWith(`${confirmationo}`)) {
      confirmationo *= 2;
   }
   if ((4.13 / (Math.max(6, cricketM))) < 2.20) {
       let serviceQ = true;
       let panglea = String.fromCharCode(107,95,48,95,115,112,108,105,116,0);
      while (1 >= panglea.length) {
         panglea = `${((serviceQ ? 4 : 1))}`;
         break;
      }
         panglea = `${panglea.length}`;
         panglea += `${((serviceQ ? 5 : 2) & panglea.length)}`;
          let basketballiconS = 2;
          let nativemoduleJ = 0;
          let hoverB = 1;
         panglea += "2";
         basketballiconS ^= 3;
         nativemoduleJ &= hoverB;
         serviceQ = panglea.length < 40;
         panglea += `${((serviceQ ? 1 : 2))}`;
      greyY >>= Math.min(4, Math.abs(3 >> (Math.min(3, Math.abs(iconsaveimage5)))));
   }
   let window_oxh = crossu.size >= 8772867;
   do {
      crossu = new Map([[`${iconviewergifx.length}`, 3]]);
      if (window_oxh) {
         break;
      }
   } while (((3 + floatingx.length) <= 4) && window_oxh);
   while (2.10 > (confirmationo + 2.31)) {
       let header8 = 0;
       let googlel = false;
       let tempnodataQ = 5.0;
       let long_xvx = String.fromCharCode(100,105,115,112,111,115,97,98,108,101,115,95,102,95,56,54,0);
       let bgvipxvods = 3.0;
         long_xvx = `${parseInt(`${bgvipxvods}`)}`;
          let bufferf = String.fromCharCode(106,95,55,50,95,111,102,111,114,109,97,116,0);
         long_xvx += "1";
         bufferf += `${bufferf.length << (Math.min(1, bufferf.length))}`;
       let sansO = 3.0;
       let target9 = 5.0;
      let episodesd = 8425361.0 <= sansO;
      do {
         sansO += parseFloat(`${parseInt(`${bgvipxvods}`)}`);
         if (episodesd) {
            break;
         }
      } while (episodesd && (4.3 >= (3.51 - sansO)));
      let iconfeedbackw = googlel ? !googlel : googlel;
      do {
         googlel = (tempnodataQ - bgvipxvods) > 92.52;
         if (iconfeedbackw) {
            break;
         }
      } while ((googlel) && iconfeedbackw);
      if (googlel) {
         target9 += parseFloat(`${parseInt(`${sansO}`) % 1}`);
      }
      while (tempnodataQ <= 3.88) {
         long_xvx = `${header8}`;
         break;
      }
          let airbnbstarselectedO = String.fromCharCode(109,105,100,95,108,95,49,48,48,0);
          let predictionbuttono = true;
         header8 <<= Math.min(Math.abs((airbnbstarselectedO.length & (predictionbuttono ? 4 : 1))), 3);
         sansO /= Math.max(5, parseFloat(`${1}`));
         sansO /= Math.max(parseFloat(`${3 - parseInt(`${tempnodataQ}`)}`), 5);
          let template_sb = String.fromCharCode(110,95,54,55,95,97,118,102,105,108,116,101,114,114,101,115,0);
          let windR = 1.0;
          let matchdetailbgy = String.fromCharCode(108,95,53,55,95,116,104,111,117,103,104,0);
         header8 += ((googlel ? 4 : 2) & parseInt(`${target9}`));
         template_sb = `${parseInt(`${windR}`) << (Math.min(matchdetailbgy.length, 4))}`;
         windR += (parseFloat(`${String.fromCharCode(68,0) == matchdetailbgy ? matchdetailbgy.length : parseInt(`${windR}`)}`));
          let notificationgrayV = true;
         target9 /= Math.max(parseFloat(`${parseInt(`${bgvipxvods}`) | 2}`), 3);
         notificationgrayV = (notificationgrayV ? !notificationgrayV : !notificationgrayV);
      for (let t = 0; t < 3; t++) {
          let orangeclockH = 3;
         sansO += parseFloat(`${parseInt(`${target9}`) ^ 2}`);
         orangeclockH += orangeclockH;
      }
      let largesoundy = header8 >= 5805384;
      do {
          let with_hY = String.fromCharCode(108,95,49,48,48,95,112,114,111,103,114,101,115,115,0);
          let typingloadingK: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,99,116,105,111,110,95,110,95,51,55,0),511], [String.fromCharCode(97,115,107,95,56,95,57,51,0),448], [String.fromCharCode(99,95,49,52,95,116,105,101,114,115,0),318]]);
          let viewsk = 3;
          let entryN = 5.0;
          let neonI: Map<any, any> = new Map([[String.fromCharCode(103,95,56,54,95,115,112,108,105,116,116,101,114,0),603], [String.fromCharCode(105,95,55,48,95,105,115,111,112,101,110,113,117,111,116,101,0),799]]);
         header8 *= parseInt(`${bgvipxvods}`);
         with_hY = `${with_hY.length ^ 3}`;
         typingloadingK = new Map([[`${neonI.size}`, neonI.size | viewsk]]);
         viewsk <<= Math.min(Math.abs(neonI.size), 2);
         entryN /= Math.max(3, parseFloat(`${3}`));
         if (largesoundy) {
            break;
         }
      } while (largesoundy && (2 < (3 & header8)));
      for (let d = 0; d < 3; d++) {
         tempnodataQ -= parseFloat(`${header8}`);
      }
      confirmationo += ((arrowrightwithtailQ ? 1 : 4) << (Math.min(Math.abs(parseInt(`${confirmationo}`)), 4)));
      break;
   }
   if (1 < (crossu.size % 1) && (libavfilter5.size % (Math.max(6, crossu.size))) < 1) {
      libavfilter5.set(`${gradle1}`, 3);
   }
   let guideV = libavfilter5.size >= 6180393;
   do {
      libavfilter5 = new Map([[`${crossu.size}`, libreactperfloggerjni_.size]]);
      if (guideV) {
         break;
      }
   } while (((libavfilter5.size << (Math.min(Math.abs(5), 2))) <= 1) && guideV);
      gradle1 = unselectedH < 92.79 && 21 < crossu.size;
   let bottom7 = arrowrightwithtailQ ? !arrowrightwithtailQ : arrowrightwithtailQ;
   do {
       let animationr = String.fromCharCode(108,105,118,101,115,116,114,101,97,109,95,49,95,54,50,0);
       let playercommonD = 2.0;
       let armvav = String.fromCharCode(118,95,50,48,95,97,112,105,0);
       let nativeexv: Array<any> = [687, 545];
         playercommonD -= animationr.length;
         animationr += `${parseInt(`${playercommonD}`) / (Math.max(2, animationr.length))}`;
      let iconsaveimage8 = nativeexv.length <= 6080011;
      do {
         nativeexv = [armvav.length];
         if (iconsaveimage8) {
            break;
         }
      } while (iconsaveimage8 && ((5 | armvav.length) < 3 || 5 < (nativeexv.length | armvav.length)));
      let iconcalendarr = playercommonD <= 9126499.0;
      do {
         playercommonD /= Math.max(parseInt(`${playercommonD}`), 2);
         if (iconcalendarr) {
            break;
         }
      } while ((armvav.length <= parseInt(`${playercommonD}`)) && iconcalendarr);
      if (animationr.length == 5) {
         playercommonD /= Math.max(nativeexv.length, 3);
      }
      for (let a = 0; a < 1; a++) {
         playercommonD *= animationr.length % 1;
      }
         playercommonD /= Math.max(1, armvav.length * 3);
         playercommonD *= parseInt(`${playercommonD}`) >> (Math.min(Math.abs(2), 4));
      let bellM = 7059100 >= nativeexv.length;
      do {
          let elements7 = 2.0;
         nativeexv = [parseInt(`${playercommonD}`) << (Math.min(3, Math.abs(3)))];
         elements7 *= parseFloat(`${parseInt(`${elements7}`) & parseInt(`${elements7}`)}`);
         if (bellM) {
            break;
         }
      } while (bellM && (5 >= (nativeexv.length + parseInt(`${playercommonD}`))));
      let sigmob2 = 7795276 >= animationr.length;
      do {
          let mbjscommon6 = true;
          let videocommony = String.fromCharCode(98,108,101,110,100,109,111,100,101,95,102,95,53,57,0);
         animationr += `${((mbjscommon6 ? 3 : 3) ^ nativeexv.length)}`;
         mbjscommon6 = 35 <= videocommony.length;
         videocommony += `${videocommony.length}`;
         if (sigmob2) {
            break;
         }
      } while ((3 <= (animationr.length + 4)) && sigmob2);
         armvav = "3";
         armvav = `${nativeexv.length / (Math.max(armvav.length, 2))}`;
      arrowrightwithtailQ = 83 == libreactperfloggerjni_.size;
      if (bottom7) {
         break;
      }
   } while (bottom7 && (3 < libreactperfloggerjni_.size));
      greyY >>= Math.min(Math.abs(1 - crossu.size), 5);
      floatingx += "1";
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
       let holder0 = String.fromCharCode(97,99,107,115,95,116,95,57,52,0);
    let dependencyQ = String.fromCharCode(119,97,116,99,104,101,114,95,120,95,52,51,0);
    let lineC = true;
    let backp = String.fromCharCode(108,105,98,97,118,100,101,118,105,99,101,95,106,95,56,56,0);
    let modalx = false;
    let penaltygoal5 = String.fromCharCode(119,97,114,110,95,109,95,54,56,0);
    let nextY = String.fromCharCode(101,113,117,105,118,97,108,101,110,116,95,120,95,53,51,0);
    let mbbannerc = 4.0;
    let editV = 5;
    let activeW: Array<any> = [43, 469, 876];
    let heartd = 4.0;
    let largesoundh = false;
    let tick1 = 3;
    let sliderQ: Array<any> = [647, 802, 676];
   if ((1 + holder0.length) > 4 || (holder0.length << (Math.min(Math.abs(1), 4))) > 2) {
      holder0 = `${(backp.length ^ (modalx ? 4 : 3))}`;
   }
      lineC = holder0.length >= 59;
      backp = `${1 % (Math.max(9, dependencyQ.length))}`;
   let codegenz = activeW.length >= 9822617;
   do {
       let full7 = 3.0;
       let abidetectA = true;
       let suggestionx = String.fromCharCode(99,95,50,57,95,112,114,101,116,116,121,0);
       let iconnotificationnewe = 2;
       let humidity0 = String.fromCharCode(99,97,108,99,117,108,97,116,101,100,95,111,95,52,49,0);
      while (suggestionx.length >= 4) {
         suggestionx += `${(suggestionx == String.fromCharCode(115,0) ? suggestionx.length : (abidetectA ? 4 : 2))}`;
         break;
      }
      for (let c = 0; c < 1; c++) {
         abidetectA = iconnotificationnewe < humidity0.length;
      }
         iconnotificationnewe += (humidity0.length | (abidetectA ? 5 : 4));
          let tempnodatagifH: Array<any> = [String.fromCharCode(99,97,114,100,104,111,108,100,101,114,95,117,95,51,52,0), String.fromCharCode(115,116,114,107,95,101,95,54,48,0), String.fromCharCode(118,95,51,53,95,99,111,114,111,117,116,105,110,101,0)];
          let sportw = true;
         abidetectA = 1.33 >= full7 || abidetectA;
         tempnodatagifH.push(((sportw ? 2 : 1) - 3));
         sportw = ((tempnodatagifH.length - (!sportw ? tempnodatagifH.length : 90)) >= 90);
         full7 -= humidity0.length % 3;
      for (let q = 0; q < 1; q++) {
          let flagA: Map<any, any> = new Map([[String.fromCharCode(113,95,57,52,95,112,111,108,105,99,105,101,115,0),500], [String.fromCharCode(116,100,115,99,95,56,95,52,56,0),810], [String.fromCharCode(118,97,105,108,97,98,105,108,105,116,121,95,113,95,56,56,0),987]]);
          let actionsC = false;
         iconnotificationnewe -= ((abidetectA ? 1 : 1) / (Math.max(1, 8)));
         flagA.set(`${actionsC}`, (flagA.size - (actionsC ? 1 : 3)));
      }
         iconnotificationnewe &= 2;
      let clockT = 6439937 <= iconnotificationnewe;
      do {
         iconnotificationnewe |= (String.fromCharCode(100,0) == suggestionx ? iconnotificationnewe : suggestionx.length);
         if (clockT) {
            break;
         }
      } while (clockT && ((iconnotificationnewe * parseInt(`${full7}`)) >= 4 && (2.17 * full7) >= 2.45));
      if ((2 | iconnotificationnewe) <= 3) {
         full7 -= parseInt(`${full7}`) * 1;
      }
         suggestionx += `${3 - humidity0.length}`;
         humidity0 += `${3 & humidity0.length}`;
         full7 += iconnotificationnewe & suggestionx.length;
         iconnotificationnewe <<= Math.min(4, Math.abs(1 >> (Math.min(4, Math.abs(parseInt(`${full7}`))))));
          let bang4 = String.fromCharCode(114,95,52,57,95,99,111,110,116,114,111,108,108,101,114,115,0);
         abidetectA = !suggestionx.includes(`${abidetectA}`);
         bang4 += `${bang4.length ^ 1}`;
          let animationo: Map<any, any> = new Map([[String.fromCharCode(99,97,112,105,116,97,108,115,95,52,95,53,52,0),72], [String.fromCharCode(112,111,115,116,102,105,108,116,101,114,95,113,95,57,54,0),256]]);
          let inactivel = 1;
          let leaguedetailsbgq = 0.0;
         abidetectA = 40.91 <= full7;
         animationo = new Map([[`${animationo.size}`, parseInt(`${leaguedetailsbgq}`)]]);
         inactivel |= 1 ^ animationo.size;
         leaguedetailsbgq -= animationo.size;
      activeW = [penaltygoal5.length];
      if (codegenz) {
         break;
      }
   } while (codegenz && (activeW.length < 2));
   if (3 < holder0.length) {
       let iconschedule0 = false;
       let utils4 = 3.0;
       let appsp = true;
       let iconwatchnow7: Map<any, any> = new Map([[String.fromCharCode(118,95,54,50,95,101,120,116,114,97,0),653], [String.fromCharCode(116,95,52,53,95,120,114,101,115,0),858], [String.fromCharCode(98,105,108,97,116,101,114,97,108,95,108,95,50,52,0),809]]);
      for (let p = 0; p < 2; p++) {
         iconwatchnow7 = new Map([[`${utils4}`, 3 + parseInt(`${utils4}`)]]);
      }
          let q_centert = 2.0;
         iconschedule0 = !iconschedule0;
         q_centert /= Math.max(5, 3);
          let homeinactiveC = String.fromCharCode(97,95,54,48,95,99,117,114,118,101,0);
         utils4 -= (parseFloat(`${1 >> (Math.min(Math.abs((appsp ? 3 : 1)), 5))}`));
         homeinactiveC = `${homeinactiveC.length % (Math.max(5, homeinactiveC.length))}`;
         utils4 += parseFloat(`${2}`);
      if (1 >= (iconwatchnow7.size / 4) && iconwatchnow7.size >= 4) {
         iconwatchnow7.set(`${appsp}`, 1);
      }
      for (let b = 0; b < 2; b++) {
          let dragcloseA = 5;
          let modelse = 3.0;
          let sortD = 2;
          let downK = 3.0;
         iconschedule0 = sortD > parseInt(`${modelse}`);
         dragcloseA |= 3 << (Math.min(Math.abs(dragcloseA), 5));
         modelse -= parseInt(`${downK}`);
         sortD /= Math.max(parseInt(`${downK}`) & dragcloseA, 4);
      }
       let gpayc = String.fromCharCode(98,105,116,114,101,118,95,108,95,52,52,0);
       let iconnewchatK = String.fromCharCode(99,112,117,105,110,102,111,95,57,95,48,0);
      let libglogy = 6432532 >= iconnewchatK.length;
      do {
         iconnewchatK += `${(String.fromCharCode(89,0) == iconnewchatK ? gpayc.length : iconnewchatK.length)}`;
         if (libglogy) {
            break;
         }
      } while ((iconnewchatK.length <= 3) && libglogy);
       let register__b9 = String.fromCharCode(111,95,52,57,95,100,114,97,103,0);
          let iconbackwhiteU = String.fromCharCode(100,101,108,105,109,105,116,101,114,95,119,95,53,49,0);
          let dplusm = 3.0;
          let basketballmatchdetailbgE: Array<any> = [993, 283, 689];
         iconschedule0 = !iconschedule0;
         iconbackwhiteU = `${iconbackwhiteU.length}`;
         dplusm /= Math.max(parseFloat(`${iconbackwhiteU.length * 2}`), 5);
         basketballmatchdetailbgE.push(1 % (Math.max(parseInt(`${dplusm}`), 5)));
      for (let o = 0; o < 3; o++) {
          let stylesU = false;
          let profileP = String.fromCharCode(109,117,108,104,105,95,110,95,51,52,0);
          let iconrightorange9 = String.fromCharCode(108,95,57,57,95,116,102,117,101,108,0);
          let reactk = String.fromCharCode(119,112,116,104,114,101,97,100,115,95,57,95,50,52,0);
         iconnewchatK += `${register__b9.length << (Math.min(Math.abs(1), 3))}`;
         stylesU = (reactk.length / (Math.max(3, profileP.length))) >= 63;
         profileP = `${2 - profileP.length}`;
         iconrightorange9 += `${reactk.length}`;
      }
          let defaultroombgE: Map<any, any> = new Map([[String.fromCharCode(98,108,101,110,100,109,111,100,101,95,101,95,56,57,0),560], [String.fromCharCode(97,95,50,56,95,114,117,98,121,0),942], [String.fromCharCode(115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,95,50,95,51,55,0),312]]);
         gpayc = `${(String.fromCharCode(112,0) == register__b9 ? register__b9.length : iconwatchnow7.size)}`;
         defaultroombgE = new Map([[`${defaultroombgE.size}`, defaultroombgE.size]]);
      holder0 = `${backp.length}`;
   }
      nextY = `${((modalx ? 2 : 1))}`;
      editV &= (1 >> (Math.min(5, Math.abs((modalx ? 3 : 2)))));
      penaltygoal5 = `${activeW.length}`;
       let unimplementedviewn = 3;
         unimplementedviewn ^= unimplementedviewn;
         unimplementedviewn ^= unimplementedviewn >> (Math.min(Math.abs(3), 1));
         unimplementedviewn <<= Math.min(3, Math.abs(unimplementedviewn ^ unimplementedviewn));
      lineC = holder0 == String.fromCharCode(57,0);
   if (5 < (4 - backp.length) || 3 < (4 * parseInt(`${heartd}`))) {
      heartd += (penaltygoal5 == String.fromCharCode(71,0) ? (lineC ? 3 : 2) : penaltygoal5.length);
   }
      mbbannerc -= 2;
       let modee: Array<any> = [796, 469];
          let greyarrowup5 = 0;
          let gradlewY = String.fromCharCode(97,95,54,49,95,117,116,105,108,0);
          let halfN = String.fromCharCode(97,115,100,107,95,105,95,53,57,0);
         modee.push((gradlewY == String.fromCharCode(115,0) ? gradlewY.length : greyarrowup5));
         greyarrowup5 -= halfN.length - 2;
      while (1 >= (modee.length / 3)) {
         modee.push(modee.length);
         break;
      }
      for (let u = 0; u < 2; u++) {
         modee = [modee.length];
      }
      editV ^= penaltygoal5.length;
      editV >>= Math.min(Math.abs((String.fromCharCode(120,0) == nextY ? nextY.length : parseInt(`${mbbannerc}`))), 3);
      activeW = [(backp == String.fromCharCode(122,0) ? parseInt(`${heartd}`) : backp.length)];
      modalx = 63 >= (heartd / (Math.max(7, editV)));
   for (let c = 0; c < 2; c++) {
       let wifirouterI = String.fromCharCode(97,118,99,111,100,101,99,114,101,115,95,117,95,56,49,0);
       let mbbidT = 3;
      if (2 >= (2 << (Math.min(4, wifirouterI.length))) || 1 >= (mbbidT << (Math.min(Math.abs(2), 2)))) {
         wifirouterI = `${wifirouterI.length}`;
      }
      for (let u = 0; u < 3; u++) {
         wifirouterI += `${(String.fromCharCode(56,0) == wifirouterI ? mbbidT : wifirouterI.length)}`;
      }
       let network3 = String.fromCharCode(100,105,109,105,115,115,95,56,95,57,54,0);
       let vertical6 = String.fromCharCode(107,101,121,112,97,116,104,115,95,99,95,56,48,0);
       let rncorez: Array<any> = [836, 393, 23];
       let whitetickX: Array<any> = [806, 404];
      for (let a = 0; a < 3; a++) {
         whitetickX.push(vertical6.length);
      }
         mbbidT ^= mbbidT / 3;
      dependencyQ += "2";
   }
      heartd += 2 + parseInt(`${heartd}`);
       let layoutI = 2.0;
       let usernamem: Array<any> = [String.fromCharCode(102,95,52,49,95,101,97,115,105,110,103,0), String.fromCharCode(106,95,48,95,114,101,99,116,97,110,103,117,108,97,114,0)];
         layoutI += 2;
      let roomX = 7644671.0 <= layoutI;
      do {
          let classesx = String.fromCharCode(102,104,116,120,95,101,95,51,54,0);
          let thumbnailX = 5;
          let libapminsighta3 = 3.0;
         layoutI -= usernamem.length & parseInt(`${layoutI}`);
         classesx += `${parseInt(`${libapminsighta3}`) - thumbnailX}`;
         thumbnailX /= Math.max(5, 1);
         libapminsighta3 *= 2;
         if (roomX) {
            break;
         }
      } while (roomX && (1 == (usernamem.length | 2) && (usernamem.length << (Math.min(Math.abs(2), 5))) == 1));
         layoutI *= parseInt(`${layoutI}`);
         layoutI -= usernamem.length << (Math.min(Math.abs(1), 3));
      for (let c = 0; c < 3; c++) {
          let qaag8 = String.fromCharCode(116,105,99,107,101,116,115,95,117,95,49,55,0);
          let videocommonx = 4.0;
         layoutI += 1 + qaag8.length;
         qaag8 += `${parseInt(`${videocommonx}`)}`;
      }
       let mbbanner6 = true;
      heartd += editV;
      penaltygoal5 = `${2 * nextY.length}`;
   while (lineC) {
       let sellmathbackgroundc = 1.0;
       let clearv = 1;
       let screenP = String.fromCharCode(105,95,52,49,95,102,97,99,101,115,0);
       let kuaishou8 = true;
       let containerT: Map<any, any> = new Map([[String.fromCharCode(109,95,56,53,95,99,111,110,116,105,110,101,110,116,0),false ], [String.fromCharCode(116,95,50,95,115,111,108,105,100,105,116,121,0),true ]]);
      let backz = 7485844 <= clearv;
      do {
         clearv ^= screenP.length;
         if (backz) {
            break;
         }
      } while ((3.14 == (sellmathbackgroundc + clearv)) && backz);
      let delegate_ju = sellmathbackgroundc <= 5056875.0;
      do {
         sellmathbackgroundc += parseFloat(`${clearv}`);
         if (delegate_ju) {
            break;
         }
      } while (delegate_ju && (sellmathbackgroundc == 5.14 || (5.14 / (Math.max(2, sellmathbackgroundc))) == 2.98));
      let mergerz = kuaishou8 ? !kuaishou8 : kuaishou8;
      do {
         kuaishou8 = (sellmathbackgroundc * clearv) >= 9;
         if (mergerz) {
            break;
         }
      } while ((5.82 >= sellmathbackgroundc || (sellmathbackgroundc - 5.82) >= 1.21) && mergerz);
         sellmathbackgroundc -= parseFloat(`${clearv ^ parseInt(`${sellmathbackgroundc}`)}`);
      let libffmpegkitZ = 7951974 >= clearv;
      do {
         clearv <<= Math.min(4, screenP.length);
         if (libffmpegkitZ) {
            break;
         }
      } while (libffmpegkitZ && (!kuaishou8));
         containerT.set(`${kuaishou8}`, ((kuaishou8 ? 3 : 3) | 1));
         kuaishou8 = (71 < ((kuaishou8 ? containerT.size : 17) % (Math.max(containerT.size, 3))));
         containerT.set(`${sellmathbackgroundc}`, 2);
          let reducerV = false;
         screenP = `${((kuaishou8 ? 5 : 5) % (Math.max(2, 9)))}`;
         reducerV = (reducerV ? reducerV : !reducerV);
         sellmathbackgroundc *= parseFloat(`${clearv}`);
          let brightness0 = String.fromCharCode(110,111,110,98,95,48,95,49,50,0);
          let modeW = 2.0;
         screenP = `${((kuaishou8 ? 1 : 2) * 1)}`;
         brightness0 = `${parseInt(`${modeW}`)}`;
         modeW /= Math.max(5, parseFloat(`${brightness0.length}`));
      while (!kuaishou8) {
          let cricketL = String.fromCharCode(116,111,111,116,105,112,95,104,95,49,0);
          let hookH = 2.0;
          let homeicon6 = false;
          let teamX = String.fromCharCode(119,105,110,100,111,119,115,95,122,95,57,52,0);
         kuaishou8 = 44 < screenP.length;
         cricketL += `${parseInt(`${hookH}`)}`;
         hookH -= 3 & parseInt(`${hookH}`);
         homeicon6 = (cricketL.length << (Math.min(teamX.length, 3))) >= 65;
         teamX = `${cricketL.length}`;
         break;
      }
       let bnewarchdefaultsc = String.fromCharCode(110,115,112,97,99,101,115,95,106,95,49,49,0);
      while (2 >= screenP.length && !kuaishou8) {
         kuaishou8 = (screenP.length * parseInt(`${sellmathbackgroundc}`)) == 6;
         break;
      }
       let chartH = 3.0;
       let libavfilterM = 0.0;
      modalx = !dependencyQ.includes(`${lineC}`);
      break;
   }
      mbbannerc *= 2 ^ editV;
   for (let t = 0; t < 3; t++) {
      mbbannerc -= 3;
   }
   for (let f = 0; f < 2; f++) {
      activeW.push(holder0.length - parseInt(`${heartd}`));
   }
      heartd -= 2 | editV;
       let nend1 = String.fromCharCode(112,95,57,55,95,114,105,110,103,116,111,110,101,0);
       let gesturel = false;
       let layoutl = String.fromCharCode(104,95,53,55,95,110,111,109,105,110,97,108,0);
       let gradlewk = String.fromCharCode(112,97,114,115,101,95,103,95,56,56,0);
       let mbbannerB = 1;
       let libapminsightbI = 2;
         gesturel = !gesturel;
      for (let f = 0; f < 2; f++) {
         gesturel = !gesturel;
      }
         libapminsightbI ^= 1;
         libapminsightbI ^= ((gesturel ? 5 : 4));
      lineC = holder0.length == nextY.length;
      nend1 = `${2 ^ nend1.length}`;
       let zoom7 = String.fromCharCode(120,95,53,95,98,111,111,107,109,97,114,107,0);
       let iconmorei = String.fromCharCode(114,95,54,48,95,104,97,118,101,101,118,101,110,116,115,0);
       let subinv = 3.0;
         iconmorei += `${iconmorei.length / 1}`;
          let anythinkV: Array<any> = [702, 160];
         iconmorei += `${2 * parseInt(`${subinv}`)}`;
         anythinkV = [anythinkV.length - anythinkV.length];
         iconmorei += `${1 + parseInt(`${subinv}`)}`;
      let weiboR = zoom7.length <= 7905565;
      do {
          let libsentryO = 0.0;
          let nativer = String.fromCharCode(98,111,120,95,50,95,55,48,0);
          let libfollyv = 1.0;
         zoom7 += `${iconmorei.length}`;
         libsentryO /= Math.max(4, parseFloat(`${nativer.length}`));
         nativer = `${parseInt(`${libfollyv}`)}`;
         if (weiboR) {
            break;
         }
      } while (weiboR && (2 <= (4 << (Math.min(5, zoom7.length)))));
      if (1 <= zoom7.length) {
         iconmorei += `${iconmorei.length / (Math.max(2, 2))}`;
      }
         zoom7 = `${(iconmorei == String.fromCharCode(115,0) ? iconmorei.length : parseInt(`${subinv}`))}`;
          let yellowanimationliveN = String.fromCharCode(121,95,56,95,97,116,116,114,97,99,116,105,111,110,0);
          let package_zbr = 2;
         subinv -= parseFloat(`${1}`);
         yellowanimationliveN += `${yellowanimationliveN.length}`;
         package_zbr += package_zbr + yellowanimationliveN.length;
         zoom7 += "1";
      for (let k = 0; k < 1; k++) {
         iconmorei = "1";
      }
      largesoundh = activeW.length >= penaltygoal5.length;
      lineC = 84.15 > heartd && lineC;
      largesoundh = modalx;
   for (let a = 0; a < 1; a++) {
       let launch3: Map<any, any> = new Map([[String.fromCharCode(114,95,55,56,0),71], [String.fromCharCode(111,118,101,114,104,101,97,100,95,56,95,51,48,0),226], [String.fromCharCode(99,111,110,102,111,114,109,97,110,99,101,95,114,95,53,48,0),976]]);
       let libfbjnis = 5.0;
       let applicationw = String.fromCharCode(121,95,57,50,95,100,101,97,99,116,105,118,97,116,101,0);
         libfbjnis *= 3;
      for (let y = 0; y < 3; y++) {
         launch3 = new Map([[`${launch3.size}`, 3 + launch3.size]]);
      }
       let matchdetailbgE = String.fromCharCode(97,95,56,48,95,112,114,101,115,101,110,99,101,115,0);
       let lineh = String.fromCharCode(99,110,97,109,101,95,49,95,51,50,0);
         lineh += `${launch3.size}`;
      if (4 >= lineh.length) {
         matchdetailbgE += `${launch3.size}`;
      }
       let libbufferZ = String.fromCharCode(108,111,111,107,97,115,105,100,101,95,100,95,55,49,0);
       let yingb = String.fromCharCode(115,116,114,105,107,101,116,104,114,111,117,103,104,95,55,95,54,52,0);
         libfbjnis /= Math.max(libbufferZ.length % (Math.max(lineh.length, 5)), 4);
       let push7 = 5;
       let codea = 4;
      while (4 >= libbufferZ.length) {
          let defaultroombgL = 3;
         libbufferZ = `${(String.fromCharCode(122,0) == matchdetailbgE ? matchdetailbgE.length : yingb.length)}`;
         defaultroombgL ^= defaultroombgL;
         break;
      }
      mbbannerc += activeW.length;
   }
   while (holder0.startsWith(`${editV}`)) {
      editV >>= Math.min(2, Math.abs(1));
      break;
   }
      holder0 = `${((largesoundh ? 5 : 3) & 3)}`;
      holder0 = `${(String.fromCharCode(65,0) == nextY ? (modalx ? 5 : 5) : nextY.length)}`;
       let huaweiE = String.fromCharCode(104,95,48,95,112,114,101,99,97,108,99,0);
       let statsnomoredataa: Map<any, any> = new Map([[String.fromCharCode(117,97,110,95,51,95,50,57,0),725], [String.fromCharCode(115,112,101,99,105,97,108,95,109,95,56,55,0),650], [String.fromCharCode(114,95,57,55,95,112,114,101,104,101,97,116,0),556]]);
         huaweiE = `${huaweiE.length}`;
      while (1 < (statsnomoredataa.size << (Math.min(huaweiE.length, 3)))) {
         statsnomoredataa.set(`${huaweiE}`, 2);
         break;
      }
      if (huaweiE.length < statsnomoredataa.size) {
         huaweiE = `${statsnomoredataa.size / (Math.max(huaweiE.length, 2))}`;
      }
      while (!huaweiE.includes(`${statsnomoredataa.size}`)) {
         huaweiE = `${(huaweiE == String.fromCharCode(116,0) ? huaweiE.length : statsnomoredataa.size)}`;
         break;
      }
      while (2 < (statsnomoredataa.size % (Math.max(huaweiE.length, 7))) && 2 < (huaweiE.length % (Math.max(8, statsnomoredataa.size)))) {
         huaweiE += `${statsnomoredataa.size}`;
         break;
      }
         statsnomoredataa.set(`${huaweiE}`, (huaweiE == String.fromCharCode(52,0) ? huaweiE.length : statsnomoredataa.size));
      backp = `${statsnomoredataa.size}`;
      heartd -= parseInt(`${mbbannerc}`);
   if (!lineC) {
      lineC = dependencyQ == String.fromCharCode(55,0) || 68 == holder0.length;
   }
   for (let u = 0; u < 3; u++) {
       let description__su = String.fromCharCode(101,95,49,54,95,101,120,99,101,112,116,105,111,110,0);
       let description_ox = 4.0;
      let rocketH = 8218028.0 >= description_ox;
      do {
         description_ox *= parseFloat(`${description__su.length / (Math.max(3, 2))}`);
         if (rocketH) {
            break;
         }
      } while (rocketH && (parseFloat(`${description__su.length}`) < description_ox));
      if (!description__su.endsWith(`${description_ox}`)) {
         description__su = "3";
      }
         description_ox /= Math.max(2, parseFloat(`${parseInt(`${description_ox}`)}`));
         description__su = `${2 >> (Math.min(5, description__su.length))}`;
      if (1 > (2 + description__su.length)) {
         description_ox += (parseFloat(`${description__su == String.fromCharCode(100,0) ? parseInt(`${description_ox}`) : description__su.length}`));
      }
      let informationL = String.fromCharCode(109,101,102,100,109,105,55,107,117,0) == description__su;
      do {
         description__su = `${description__su.length / (Math.max(3, 6))}`;
         if (informationL) {
            break;
         }
      } while ((2.12 < description_ox) && informationL);
      largesoundh = (82 < (description__su.length - (!lineC ? 82 : description__su.length)));
   }
   while (!largesoundh) {
      largesoundh = activeW.length == 74;
      break;
   }
       let skipF = String.fromCharCode(109,97,103,101,95,116,95,54,49,0);
          let networkH = 5.0;
          let iconlogouty: Array<any> = [String.fromCharCode(116,114,97,110,102,115,101,114,95,57,95,51,49,0), String.fromCharCode(108,95,49,52,95,116,119,105,100,100,108,101,0)];
          let iconbackwhite5: Map<any, any> = new Map([[String.fromCharCode(115,105,109,117,108,97,116,111,114,95,55,95,54,52,0),678], [String.fromCharCode(107,118,111,95,54,95,49,48,0),775]]);
         skipF += `${(String.fromCharCode(68,0) == skipF ? parseInt(`${networkH}`) : skipF.length)}`;
         networkH += iconbackwhite5.size;
         iconlogouty.push(iconbackwhite5.size);
      if (skipF == String.fromCharCode(97,0)) {
         skipF = `${(String.fromCharCode(52,0) == skipF ? skipF.length : skipF.length)}`;
      }
      if (skipF.length == skipF.length) {
         skipF = `${skipF.length}`;
      }
      backp = `${(skipF == String.fromCharCode(114,0) ? parseInt(`${heartd}`) : skipF.length)}`;
   for (let n = 0; n < 3; n++) {
      editV %= Math.max(2, parseInt(`${heartd}`) & 3);
   }
   if (!dependencyQ.includes(`${lineC}`)) {
       let iconmoreV: Map<any, any> = new Map([[String.fromCharCode(112,97,114,109,115,95,117,95,54,52,0),670], [String.fromCharCode(118,95,54,95,101,110,115,117,114,101,0),681], [String.fromCharCode(118,115,121,110,99,95,105,95,50,52,0),673]]);
       let moonZ = 1;
       let iconviewergifD = String.fromCharCode(97,99,104,101,95,113,95,55,48,0);
       let iconviewergifP: Map<any, any> = new Map([[String.fromCharCode(122,95,56,50,95,110,111,105,110,100,101,120,0),894], [String.fromCharCode(115,101,109,105,95,54,95,50,56,0),976], [String.fromCharCode(97,95,49,56,95,116,114,117,101,115,112,101,101,99,104,0),170]]);
       let collectionl = 4;
          let selectionJ = String.fromCharCode(98,117,109,112,95,53,95,51,54,0);
         moonZ -= 1;
         selectionJ += `${selectionJ.length % (Math.max(2, 1))}`;
      for (let u = 0; u < 1; u++) {
          let reactnativeratingsP = String.fromCharCode(100,95,50,50,95,115,111,117,110,100,0);
         iconviewergifP = new Map([[`${iconviewergifP.size}`, 3 & collectionl]]);
         reactnativeratingsP = `${reactnativeratingsP.length << (Math.min(reactnativeratingsP.length, 3))}`;
      }
          let update_f2 = 5;
          let libmapbufferjnir = 4.0;
          let thumbnailf = 1.0;
         iconviewergifP.set(`${collectionl}`, 3);
         update_f2 -= 2;
         libmapbufferjnir -= parseFloat(`${update_f2 * parseInt(`${thumbnailf}`)}`);
         thumbnailf *= parseInt(`${libmapbufferjnir}`);
         collectionl /= Math.max(2, 2);
         moonZ ^= 3;
       let chart_ = false;
       let basketballplayerplaceholderO = true;
         chart_ = iconviewergifD.endsWith(`${moonZ}`);
         chart_ = 55 > collectionl || iconviewergifD.length > 55;
      let basketballdetailsbg8 = basketballplayerplaceholderO ? !basketballplayerplaceholderO : basketballplayerplaceholderO;
      do {
         basketballplayerplaceholderO = 32 <= moonZ;
         if (basketballdetailsbg8) {
            break;
         }
      } while ((!basketballplayerplaceholderO) && basketballdetailsbg8);
          let refreshborderlessD = String.fromCharCode(101,115,99,97,112,101,100,95,113,95,49,57,0);
         collectionl <<= Math.min(4, Math.abs((iconviewergifP.size - (chart_ ? 1 : 2))));
         refreshborderlessD += `${2 + refreshborderlessD.length}`;
         moonZ += (iconviewergifD == String.fromCharCode(111,0) ? moonZ : iconviewergifD.length);
         collectionl <<= Math.min(3, Math.abs(iconviewergifP.size / 2));
       let pauseV = String.fromCharCode(102,117,110,99,116,105,111,110,95,99,95,51,51,0);
       let typesA = String.fromCharCode(101,95,55,51,95,115,117,112,112,111,114,116,0);
      while (!Array.from(iconviewergifP.values()).includes(collectionl)) {
         iconviewergifP = new Map([[`${iconmoreV.size}`, iconviewergifD.length]]);
         break;
      }
      let jinit__p = typesA == String.fromCharCode(101,106,102,102,53,108,0);
      do {
         typesA = `${((basketballplayerplaceholderO ? 1 : 4) % (Math.max(10, typesA.length)))}`;
         if (jinit__p) {
            break;
         }
      } while (jinit__p && (1 == typesA.length));
      lineC = 69 >= dependencyQ.length;
   }
      largesoundh = dependencyQ.length < 77;
      activeW.push(((modalx ? 2 : 5) | sliderQ.length));
   let huaweiM = sliderQ.length >= 5628721;
   do {
       let eventh = 4.0;
       let leftw = false;
       let source0: Map<any, any> = new Map([[String.fromCharCode(99,95,54,54,95,97,98,111,114,116,0),String.fromCharCode(115,95,51,57,95,102,114,101,101,116,121,112,101,0)], [String.fromCharCode(112,95,54,95,105,110,112,108,105,99,105,116,101,108,121,0),String.fromCharCode(105,95,55,56,95,112,111,111,108,0)]]);
       let greyp = String.fromCharCode(116,95,50,56,95,112,111,110,103,0);
       let moreW = String.fromCharCode(113,95,56,52,95,109,111,116,105,111,110,112,105,120,101,108,115,0);
      let regengD = source0.size >= 9495568;
      do {
         source0.set(greyp, source0.size % (Math.max(greyp.length, 2)));
         if (regengD) {
            break;
         }
      } while ((2 == (source0.size & 2)) && regengD);
         leftw = source0.size < 8 && leftw;
         greyp = `${greyp.length}`;
      if (!moreW.includes(`${leftw}`)) {
          let iconbackwhiter = String.fromCharCode(117,110,105,116,95,49,95,55,50,0);
         leftw = eventh == 44.66 && leftw;
         iconbackwhiter += `${iconbackwhiter.length | 3}`;
      }
         greyp += `${parseInt(`${eventh}`) << (Math.min(Math.abs(2), 5))}`;
         eventh += parseFloat(`${parseInt(`${eventh}`) << (Math.min(Math.abs(2), 3))}`);
      if (!Array.from(source0.values()).includes(eventh)) {
         eventh += parseFloat(`${3}`);
      }
         source0.set(greyp, (greyp == String.fromCharCode(75,0) ? greyp.length : parseInt(`${eventh}`)));
          let baiduadsC: Array<any> = [427, 23];
          let positionfieldD = true;
         moreW += `${baiduadsC.length * 1}`;
         baiduadsC = [1];
      if (moreW != String.fromCharCode(78,0)) {
          let vignetted = String.fromCharCode(114,95,49,48,95,109,105,115,99,0);
          let spec0 = false;
          let iconarrowrightwhiteq: Array<any> = [String.fromCharCode(116,114,97,110,115,112,111,114,116,95,109,95,52,50,0), String.fromCharCode(115,95,51,57,95,115,116,114,99,97,116,0)];
          let iconpipexpandP = 0.0;
         greyp += `${(vignetted == String.fromCharCode(88,0) ? vignetted.length : source0.size)}`;
         spec0 = iconpipexpandP > 61.10;
         iconarrowrightwhiteq.push(2 | parseInt(`${iconpipexpandP}`));
      }
         moreW = `${source0.size}`;
      for (let q = 0; q < 3; q++) {
         moreW = `${moreW.length % (Math.max(1, 6))}`;
      }
      if (5.65 < (eventh - parseFloat(`${moreW.length}`)) || 3.16 < (eventh - 5.65)) {
          let predictionbannersharedD: Map<any, any> = new Map([[String.fromCharCode(103,95,57,48,95,99,111,110,118,111,108,117,116,105,111,110,0),952], [String.fromCharCode(102,105,108,116,101,114,95,53,95,57,57,0),986]]);
          let penaltygoalI: Map<any, any> = new Map([[String.fromCharCode(112,101,101,108,95,122,95,57,51,0),true ], [String.fromCharCode(119,95,55,51,95,102,111,108,108,111,119,101,114,0),true ], [String.fromCharCode(119,101,101,107,100,97,121,95,109,95,55,50,0),false ]]);
          let latn8 = String.fromCharCode(120,95,54,56,95,116,97,105,108,0);
          let main_mp = String.fromCharCode(112,97,114,116,121,95,55,95,51,49,0);
          let basketballplayerplaceholderT = true;
         moreW += `${source0.size - greyp.length}`;
         predictionbannersharedD = new Map([[main_mp, (String.fromCharCode(69,0) == main_mp ? main_mp.length : (basketballplayerplaceholderT ? 3 : 4))]]);
         penaltygoalI = new Map([[main_mp, main_mp.length + 3]]);
         latn8 += "3";
      }
       let bgvipxvodY = String.fromCharCode(102,105,110,97,108,105,122,101,114,95,50,95,56,53,0);
       let libfileM = String.fromCharCode(119,95,51,50,95,98,105,103,117,105,110,116,0);
         greyp = `${source0.size}`;
      sliderQ = [((modalx ? 4 : 4))];
      if (huaweiM) {
         break;
      }
   } while ((3 >= (sliderQ.length << (Math.min(2, Math.abs(tick1)))) && 3 >= (tick1 << (Math.min(sliderQ.length, 4)))) && huaweiM);
 },
      onReadyForDisplay,
    }: yysIconarrowrightorangeStation,
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
      "dycreatorSuboutBoot" | "none" | "configChat"
    >("none");
    const [playbackRate, setPlaybackRate] = useState<number>(1);
    const controlsRef = useRef() as React.MutableRefObject<yysIconfeedback>;
    const accumulatedSkip = useRef(0);
    const [isLastForward, setIsLastForward] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const screenState: screenModel = useAppSelector(
      ({ screenReducer }) => screenReducer
    );
    const userState = useSelector<yysIconplaySuggestion>('userReducer');
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
       let username3 = String.fromCharCode(103,114,101,101,100,121,95,55,95,56,54,0);
    let f_hashg = 0.0;
    let kick9 = String.fromCharCode(109,95,49,95,109,109,115,104,0);
    let executorj = false;
    let halffieldimagec = 1.0;
    let greytickK = 5.0;
    let statsnomoredata1 = String.fromCharCode(107,95,56,52,95,97,108,105,103,110,105,110,103,0);
    let basketballmatchdetailbgh = true;
    let weiboB = 4.0;
    let gradleX = String.fromCharCode(105,95,49,48,95,115,101,103,119,105,116,0);
   if (5.88 <= halffieldimagec) {
       let basketballiconY: Map<any, any> = new Map([[String.fromCharCode(112,95,53,95,108,101,103,97,99,121,0),false ], [String.fromCharCode(98,101,105,110,103,95,121,95,51,52,0),true ]]);
       let penaltyY = 4.0;
       let iconnotificationneww = String.fromCharCode(113,117,97,108,105,102,105,101,114,115,95,50,95,50,52,0);
          let runtimeK: Map<any, any> = new Map([[String.fromCharCode(97,118,114,101,115,97,109,112,108,101,95,119,95,51,48,0),200], [String.fromCharCode(108,105,103,104,116,95,117,95,57,56,0),187], [String.fromCharCode(107,95,55,56,95,110,117,109,98,101,114,0),276]]);
          let soundT: Map<any, any> = new Map([[String.fromCharCode(110,105,108,115,95,106,95,55,49,0),635], [String.fromCharCode(101,95,53,53,95,116,114,97,110,115,102,101,114,97,98,108,101,0),482], [String.fromCharCode(104,95,55,49,95,112,97,114,101,110,0),876]]);
          let recommendationw = 3.0;
         penaltyY /= Math.max((String.fromCharCode(113,0) == iconnotificationneww ? iconnotificationneww.length : parseInt(`${penaltyY}`)), 4);
         runtimeK = new Map([[`${runtimeK.size}`, parseInt(`${recommendationw}`)]]);
         soundT = new Map([[`${runtimeK.size}`, runtimeK.size + soundT.size]]);
         recommendationw /= Math.max(parseInt(`${recommendationw}`) / 1, 1);
      while ((parseInt(`${penaltyY}`) / (Math.max(basketballiconY.size, 1))) < 3) {
         penaltyY *= (String.fromCharCode(105,0) == iconnotificationneww ? iconnotificationneww.length : parseInt(`${penaltyY}`));
         break;
      }
       let matchinactived: Array<any> = [784, 548, 218];
       let singaporeD = false;
      for (let h = 0; h < 2; h++) {
          let bufferC: Array<any> = [410, 409, 806];
          let iconbackwhiteU: Map<any, any> = new Map([[String.fromCharCode(111,95,55,55,95,101,97,103,97,105,110,0),740], [String.fromCharCode(118,103,108,111,98,97,108,95,48,95,54,57,0),923]]);
          let imagesW = 1.0;
         singaporeD = iconbackwhiteU.size >= 29 || singaporeD;
         bufferC = [2 & parseInt(`${imagesW}`)];
         iconbackwhiteU.set(`${imagesW}`, bufferC.length / (Math.max(7, parseInt(`${imagesW}`))));
      }
          let completeU = true;
          let defaultroombgJ: Array<any> = [124, 454];
         iconnotificationneww += `${matchinactived.length}`;
         completeU = defaultroombgJ.length > 56 && !completeU;
         defaultroombgJ = [defaultroombgJ.length];
      if (!iconnotificationneww.startsWith(`${singaporeD}`)) {
         singaporeD = 67.0 > penaltyY;
      }
         singaporeD = (basketballiconY.size / (Math.max(2, parseInt(`${penaltyY}`)))) > 17;
         penaltyY *= iconnotificationneww.length;
      username3 += "2";
   }
       let static_gon = String.fromCharCode(103,109,97,116,99,104,95,55,95,49,48,48,0);
          let sortP = String.fromCharCode(117,95,51,55,95,116,97,112,112,105,110,103,0);
          let appss = true;
         static_gon += `${(sortP == String.fromCharCode(120,0) ? static_gon.length : sortP.length)}`;
         appss = !appss;
      while (static_gon.length >= 4 || static_gon.length >= 4) {
         static_gon += `${static_gon.length * 1}`;
         break;
      }
          let action_ = String.fromCharCode(112,117,112,105,108,95,101,95,50,53,0);
         static_gon += `${static_gon.length}`;
         action_ += "3";
      kick9 = `${((basketballmatchdetailbgh ? 2 : 2) + parseInt(`${f_hashg}`))}`;
      halffieldimagec /= Math.max(parseFloat(`${parseInt(`${greytickK}`)}`), 2);
   for (let k = 0; k < 3; k++) {
       let javaH: Array<any> = [800, 249, 157];
       let taiwank = 1.0;
       let zhengpianW = 4;
         taiwank -= parseFloat(`${2}`);
      while ((taiwank + 3.100) <= 3.33) {
         javaH = [parseInt(`${taiwank}`) / 3];
         break;
      }
      let casting8 = 5363405.0 <= taiwank;
      do {
         taiwank += parseFloat(`${javaH.length}`);
         if (casting8) {
            break;
         }
      } while (casting8 && (4.44 < (taiwank + 4.79) || 3 < (zhengpianW | 1)));
          let main_fM = 5.0;
         taiwank *= parseFloat(`${3}`);
         main_fM -= parseFloat(`${parseInt(`${main_fM}`) / (Math.max(3, parseInt(`${main_fM}`)))}`);
         zhengpianW ^= parseInt(`${taiwank}`) + 1;
       let successK = String.fromCharCode(104,95,55,48,95,103,114,97,99,101,0);
       let singaporek = String.fromCharCode(116,95,57,51,95,118,105,97,98,108,101,0);
      while (1 > (singaporek.length / (Math.max(8, javaH.length)))) {
         singaporek += `${(String.fromCharCode(102,0) == successK ? successK.length : javaH.length)}`;
         break;
      }
      while (2 <= (successK.length / 2)) {
         taiwank += parseFloat(`${3 | javaH.length}`);
         break;
      }
         taiwank += parseFloat(`${parseInt(`${taiwank}`)}`);
      f_hashg /= Math.max(parseInt(`${greytickK}`) / 1, 1);
   }
      username3 = `${(String.fromCharCode(79,0) == username3 ? statsnomoredata1.length : username3.length)}`;

      if (onBack !== undefined) {

      greytickK /= Math.max(2, 2 * parseInt(`${halffieldimagec}`));
   if (kick9.length <= 2) {
      greytickK += 1 * kick9.length;
   }
   if (!statsnomoredata1.endsWith(`${executorj}`)) {
      executorj = executorj && f_hashg <= 6.61;
   }
      executorj = greytickK == 96.3;
   for (let r = 0; r < 3; r++) {
       let plashj = 2.0;
       let chatt = String.fromCharCode(97,97,99,116,97,98,95,101,95,56,51,0);
       let submitL = 2.0;
       let cornere: Array<any> = [258, 470];
       let baiduW = 4;
      while (1 < chatt.length) {
          let hongkongI = 3.0;
          let footballM = 1.0;
          let footballtrophyT = 2.0;
          let s_titleU = String.fromCharCode(103,95,57,57,95,99,108,101,97,114,0);
          let defaultteame = String.fromCharCode(101,95,53,48,95,115,117,103,103,101,115,116,101,100,0);
         chatt += `${chatt.length & baiduW}`;
         hongkongI -= parseFloat(`${parseInt(`${footballM}`) & defaultteame.length}`);
         footballM /= Math.max(2, (parseFloat(`${String.fromCharCode(105,0) == s_titleU ? parseInt(`${footballM}`) : s_titleU.length}`)));
         footballtrophyT *= parseFloat(`${3 >> (Math.min(4, Math.abs(parseInt(`${footballM}`))))}`);
         defaultteame += `${s_titleU.length}`;
         break;
      }
          let moonS = 0.0;
         baiduW &= parseInt(`${plashj}`) | 3;
         moonS /= Math.max(parseFloat(`${3}`), 1);
      if (2 == cornere.length) {
         cornere.push(cornere.length);
      }
      let collectionH = 4974585 <= cornere.length;
      do {
         cornere = [cornere.length];
         if (collectionH) {
            break;
         }
      } while (collectionH && (chatt.length >= 4));
      let time_dM = submitL >= 8124723.0;
      do {
         submitL /= Math.max(5, cornere.length - parseInt(`${plashj}`));
         if (time_dM) {
            break;
         }
      } while ((4.27 == plashj) && time_dM);
          let shirtq = true;
         baiduW *= 2;
         shirtq = !shirtq;
         cornere.push(2);
      if ((plashj - 1.61) < 4.47) {
         plashj += parseFloat(`${parseInt(`${plashj}`)}`);
      }
      for (let f = 0; f < 1; f++) {
         chatt = `${cornere.length}`;
      }
      let arrowup2 = 6409469.0 <= plashj;
      do {
         plashj -= parseFloat(`${3}`);
         if (arrowup2) {
            break;
         }
      } while ((plashj < 4.69) && arrowup2);
      if (chatt.length <= 1) {
          let adultC = String.fromCharCode(98,114,97,110,100,95,52,95,55,53,0);
         chatt += `${cornere.length / 3}`;
         adultC += `${(adultC == String.fromCharCode(50,0) ? adultC.length : adultC.length)}`;
      }
      for (let i = 0; i < 3; i++) {
          let mbridge_ = String.fromCharCode(122,95,56,51,95,108,111,119,101,114,99,97,115,101,100,0);
          let roundR = 4;
          let ruleso = String.fromCharCode(97,108,112,110,95,54,95,51,52,0);
          let areaw = 3.0;
          let headerl = String.fromCharCode(118,95,54,55,95,98,97,115,101,110,97,109,101,0);
         submitL += parseInt(`${plashj}`) & 1;
         mbridge_ = `${mbridge_.length}`;
         roundR &= mbridge_.length;
         ruleso = `${roundR}`;
         areaw /= Math.max(parseFloat(`${3}`), 4);
         headerl += `${parseInt(`${areaw}`) << (Math.min(ruleso.length, 5))}`;
      }
      let savet = cornere.length <= 5372120;
      do {
          let template_r09 = 4;
         cornere.push(2 >> (Math.min(Math.abs(parseInt(`${plashj}`)), 1)));
         template_r09 >>= Math.min(4, Math.abs(3));
         if (savet) {
            break;
         }
      } while ((!cornere.includes(submitL)) && savet);
      let libapminsightb6 = 8616559 <= cornere.length;
      do {
         cornere.push(baiduW << (Math.min(Math.abs(parseInt(`${plashj}`)), 4)));
         if (libapminsightb6) {
            break;
         }
      } while ((cornere.includes(plashj)) && libapminsightb6);
       let customa = String.fromCharCode(112,102,105,108,116,101,114,95,111,95,56,54,0);
      statsnomoredata1 = `${chatt.length / (Math.max(3, 2))}`;
   }
        onBack();

   for (let h = 0; h < 2; h++) {
       let modulej = false;
       let codegenO = String.fromCharCode(97,101,99,109,95,114,95,51,57,0);
       let dycreator8: Map<any, any> = new Map([[String.fromCharCode(99,95,56,49,95,115,98,108,111,103,0),String.fromCharCode(112,108,97,121,97,98,108,101,95,105,95,57,49,0)], [String.fromCharCode(107,95,54,51,95,115,100,107,0),String.fromCharCode(115,105,122,101,108,101,115,115,95,120,95,50,50,0)], [String.fromCharCode(100,112,116,114,115,95,111,95,55,55,0),String.fromCharCode(98,111,111,107,109,97,114,107,115,95,107,95,50,49,0)]]);
      if (modulej && 3 <= (3 ^ dycreator8.size)) {
         modulej = dycreator8.size < 25 || 25 < codegenO.length;
      }
         codegenO += `${dycreator8.size}`;
      for (let c = 0; c < 2; c++) {
         codegenO += `${((modulej ? 1 : 1) << (Math.min(Math.abs(2), 2)))}`;
      }
      if (modulej) {
         codegenO = `${(codegenO == String.fromCharCode(112,0) ? codegenO.length : (modulej ? 4 : 3))}`;
      }
         dycreator8.set(`${codegenO}`, codegenO.length);
         codegenO = `${codegenO.length}`;
          let floaterw = String.fromCharCode(118,95,51,51,95,112,114,101,118,118,101,99,0);
         codegenO = `${codegenO.length - 3}`;
         floaterw = `${floaterw.length}`;
          let libjsijniprofilerW = 1.0;
         codegenO += `${((modulej ? 1 : 5) ^ 2)}`;
         libjsijniprofilerW *= parseFloat(`${2}`);
         modulej = codegenO.length == dycreator8.size;
      statsnomoredata1 = `${parseInt(`${f_hashg}`) + 1}`;
   }
       let leakcheckerF = 2;
         leakcheckerF += leakcheckerF;
         leakcheckerF -= leakcheckerF - 3;
          let modal6 = String.fromCharCode(114,101,100,111,95,120,95,53,0);
          let borderless9 = 4;
          let reddownarrowb: Map<any, any> = new Map([[String.fromCharCode(120,95,57,49,95,99,106,112,101,103,0),325], [String.fromCharCode(109,111,118,101,99,98,95,109,95,54,51,0),351], [String.fromCharCode(113,112,113,115,99,97,108,101,95,118,95,51,49,0),979]]);
         leakcheckerF -= (modal6 == String.fromCharCode(50,0) ? leakcheckerF : modal6.length);
         borderless9 -= 2 << (Math.min(4, Math.abs(reddownarrowb.size)));
         reddownarrowb = new Map([[`${reddownarrowb.size}`, reddownarrowb.size]]);
      halffieldimagec /= Math.max(parseFloat(`${parseInt(`${weiboB}`)}`), 4);
      username3 += `${parseInt(`${greytickK}`) << (Math.min(3, Math.abs(parseInt(`${f_hashg}`))))}`;
       let navigationa = 3;
         navigationa += navigationa;
          let recommendationE = false;
          let customh = String.fromCharCode(101,120,112,111,115,117,114,101,95,98,95,56,54,0);
         navigationa -= customh.length / (Math.max(2, 8));
      if (4 > (navigationa >> (Math.min(Math.abs(navigationa), 2)))) {
          let refreshR = String.fromCharCode(115,111,110,105,99,95,52,95,55,56,0);
         navigationa ^= navigationa + refreshR.length;
      }
      statsnomoredata1 = "1";
   for (let q = 0; q < 1; q++) {
       let interstitialR = String.fromCharCode(114,101,100,111,95,48,95,55,53,0);
       let whiteanimationliveB = 4.0;
       let indicatory = false;
       let auto_m2: Map<any, any> = new Map([[String.fromCharCode(118,95,57,57,95,116,120,116,0),312], [String.fromCharCode(112,114,111,98,97,98,105,108,105,116,105,101,115,95,57,95,53,56,0),463], [String.fromCharCode(110,95,54,53,95,99,111,100,101,98,111,111,107,115,0),174]]);
       let iconuser_ = true;
         auto_m2 = new Map([[`${auto_m2.size}`, parseInt(`${whiteanimationliveB}`)]]);
       let iconarrowrightwhiteK = 3.0;
       let analyticsE = 2.0;
       let libapminsightaN = 4.0;
          let forwardl = 0.0;
          let predictionactive_ = String.fromCharCode(111,112,116,97,98,108,101,95,119,95,50,56,0);
         iconarrowrightwhiteK -= parseFloat(`${2}`);
         forwardl += parseFloat(`${predictionactive_.length - 3}`);
         predictionactive_ = `${3 & predictionactive_.length}`;
          let robotoG = String.fromCharCode(109,97,108,108,111,99,95,108,95,52,52,0);
          let minivodS: Array<any> = [String.fromCharCode(114,99,118,100,95,109,95,55,57,0), String.fromCharCode(105,110,116,101,114,110,101,100,95,98,95,55,54,0)];
          let benefitg = false;
         indicatory = !robotoG.endsWith(`${libapminsightaN}`);
         robotoG = `${3 * minivodS.length}`;
         minivodS = [minivodS.length];
         iconuser_ = 8.88 >= iconarrowrightwhiteK;
      while (1.11 > whiteanimationliveB) {
         indicatory = interstitialR.length < 69;
         break;
      }
      for (let w = 0; w < 1; w++) {
          let matchP = String.fromCharCode(106,95,53,49,95,104,101,105,103,104,116,115,0);
          let chatbotphotof = String.fromCharCode(98,95,56,56,95,117,110,119,114,97,112,0);
          let mutedE = 0.0;
          let type__8M = 5.0;
          let empty4 = 4.0;
         whiteanimationliveB -= parseInt(`${type__8M}`) & 3;
         matchP = `${parseInt(`${empty4}`)}`;
         chatbotphotof += `${parseInt(`${mutedE}`)}`;
         type__8M += parseInt(`${empty4}`) * 3;
      }
      for (let p = 0; p < 3; p++) {
          let libfabricjnio: Map<any, any> = new Map([[String.fromCharCode(107,95,49,50,95,109,97,116,104,101,109,97,116,105,99,115,0),758], [String.fromCharCode(115,101,109,105,99,111,108,111,110,95,103,95,52,52,0),388], [String.fromCharCode(99,95,51,57,95,112,114,101,115,101,116,115,0),362]]);
          let abidetectz = 5.0;
          let combinedc = String.fromCharCode(115,101,110,100,95,121,95,57,57,0);
          let borderlessn = true;
          let bufferj = 0.0;
         iconuser_ = !iconuser_;
         libfabricjnio = new Map([[`${libfabricjnio.size}`, combinedc.length]]);
         abidetectz -= (parseFloat(`${(borderlessn ? 4 : 3) % (Math.max(parseInt(`${abidetectz}`), 1))}`));
         combinedc += `${(libfabricjnio.size & (borderlessn ? 1 : 2))}`;
         bufferj += parseFloat(`${libfabricjnio.size + parseInt(`${abidetectz}`)}`);
      }
         libapminsightaN /= Math.max(3, (parseInt(`${whiteanimationliveB}`) << (Math.min(3, Math.abs((iconuser_ ? 4 : 5))))));
      while (3.75 == (analyticsE / 5.13) && 5.13 == (analyticsE / (Math.max(8, parseFloat(`${auto_m2.size}`))))) {
          let videobufferloadingW = String.fromCharCode(103,114,97,98,98,101,114,95,120,95,55,52,0);
          let libswscaleq = String.fromCharCode(99,111,110,100,101,110,115,101,100,95,120,95,55,48,0);
          let greyarrowupr = String.fromCharCode(121,117,118,109,112,101,103,95,111,95,53,53,0);
          let scheduleb = 4;
          let inactiveK = 2;
         analyticsE *= parseFloat(`${scheduleb >> (Math.min(Math.abs(parseInt(`${analyticsE}`)), 3))}`);
         videobufferloadingW += `${libswscaleq.length << (Math.min(Math.abs(3), 5))}`;
         libswscaleq = `${(videobufferloadingW == String.fromCharCode(102,0) ? videobufferloadingW.length : libswscaleq.length)}`;
         greyarrowupr = `${greyarrowupr.length}`;
         scheduleb *= 1;
         inactiveK <<= Math.min(videobufferloadingW.length, 5);
         break;
      }
          let mbjscommonP = 1.0;
          let footballfieldZ = String.fromCharCode(101,110,99,108,97,118,101,95,119,95,55,50,0);
         iconuser_ = iconarrowrightwhiteK < 58.37;
         mbjscommonP /= Math.max(1, parseFloat(`${2 - footballfieldZ.length}`));
         footballfieldZ = "3";
      while (!indicatory) {
          let switch_vaC: Map<any, any> = new Map([[String.fromCharCode(110,95,55,55,95,105,110,105,116,105,97,108,105,122,105,110,103,0),String.fromCharCode(100,101,110,105,97,108,95,105,95,52,57,0)], [String.fromCharCode(114,101,115,105,122,105,110,103,95,54,95,49,48,48,0),String.fromCharCode(104,95,51,51,95,101,110,99,111,100,101,115,0)], [String.fromCharCode(116,95,51,51,95,114,117,101,0),String.fromCharCode(113,95,57,49,95,99,111,108,111,114,102,117,108,0)]]);
          let scorepopsound4 = 0.0;
         indicatory = null != switch_vaC.get(`${iconuser_}`);
         switch_vaC = new Map([[`${scorepopsound4}`, 3 >> (Math.min(Math.abs(parseInt(`${scorepopsound4}`)), 2))]]);
         break;
      }
          let clubJ = true;
         analyticsE -= parseFloat(`${2 / (Math.max(1, interstitialR.length))}`);
         clubJ = clubJ && clubJ;
       let reducerf: Array<any> = [262, 803, 804];
      basketballmatchdetailbgh = interstitialR == String.fromCharCode(53,0) || auto_m2.size > 51;
   }
        lockOrientation("PORTRAIT");

       let langh = 1.0;
      let shrink6 = 6335428.0 >= langh;
      do {
         langh /= Math.max(4, parseFloat(`${2 | parseInt(`${langh}`)}`));
         if (shrink6) {
            break;
         }
      } while (shrink6 && (4.80 >= (langh + 5)));
      if (1.15 == (2.80 * langh) && 1.98 == (2.80 * langh)) {
         langh += parseFloat(`${1 % (Math.max(2, parseInt(`${langh}`)))}`);
      }
         langh -= parseFloat(`${3}`);
      kick9 = `${statsnomoredata1.length}`;
      statsnomoredata1 += `${parseInt(`${greytickK}`)}`;
       let eyeclose5 = String.fromCharCode(121,95,53,50,95,115,99,111,112,101,0);
       let about0 = String.fromCharCode(99,95,51,53,95,115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,0);
       let megaphoneu = String.fromCharCode(99,95,53,50,95,100,101,113,117,101,117,101,0);
      let shootnogoalG = 6196076 <= eyeclose5.length;
      do {
          let shielddone5 = String.fromCharCode(98,105,116,109,97,115,107,95,121,95,53,50,0);
          let libavdevice4 = 4.0;
          let chinasamen = String.fromCharCode(109,101,109,117,116,105,108,95,51,95,52,48,0);
         eyeclose5 = `${chinasamen.length}`;
         shielddone5 = `${parseInt(`${libavdevice4}`)}`;
         libavdevice4 += parseFloat(`${shielddone5.length}`);
         chinasamen += `${shielddone5.length}`;
         if (shootnogoalG) {
            break;
         }
      } while ((eyeclose5.length <= 1) && shootnogoalG);
       let predictionz = String.fromCharCode(102,108,111,97,116,95,57,95,50,52,0);
       let team3 = String.fromCharCode(104,95,57,55,95,115,99,97,108,101,0);
         team3 = `${(String.fromCharCode(82,0) == eyeclose5 ? team3.length : eyeclose5.length)}`;
      while (megaphoneu.length >= 2) {
         megaphoneu += `${3 & eyeclose5.length}`;
         break;
      }
      if (eyeclose5 != String.fromCharCode(65,0)) {
          let videojss = 1.0;
          let sigmobd: Array<any> = [943, 721, 37];
         about0 = `${predictionz.length - megaphoneu.length}`;
         videojss += sigmobd.length % 1;
         sigmobd = [parseInt(`${videojss}`) + sigmobd.length];
      }
      let redgoalB = megaphoneu == String.fromCharCode(115,107,95,109,55,97,50,101,113,53,0);
      do {
          let orientationI = 4.0;
          let auto_1uv: Array<any> = [150, 590];
         megaphoneu = `${eyeclose5.length / 3}`;
         orientationI += 2;
         auto_1uv = [auto_1uv.length];
         if (redgoalB) {
            break;
         }
      } while ((5 <= megaphoneu.length) && redgoalB);
      for (let r = 0; r < 1; r++) {
         eyeclose5 = `${predictionz.length}`;
      }
         predictionz += `${(String.fromCharCode(83,0) == eyeclose5 ? about0.length : eyeclose5.length)}`;
      for (let t = 0; t < 3; t++) {
          let plusr = 2.0;
          let neon6 = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,97,116,97,95,114,95,56,48,0);
          let topicj = String.fromCharCode(100,101,97,100,95,97,95,50,49,0);
          let rootK = String.fromCharCode(120,95,49,48,48,95,115,111,99,107,101,116,118,97,114,0);
          let hongkongX = 1.0;
         team3 = `${topicj.length}`;
         plusr += parseFloat(`${neon6.length}`);
         neon6 += `${parseInt(`${plusr}`)}`;
         topicj = `${neon6.length << (Math.min(Math.abs(2), 1))}`;
         rootK += `${parseInt(`${plusr}`)}`;
         hongkongX += parseFloat(`${parseInt(`${plusr}`)}`);
      }
      username3 += `${(1 | (basketballmatchdetailbgh ? 1 : 2))}`;
      greytickK += parseInt(`${greytickK}`) << (Math.min(Math.abs(parseInt(`${weiboB}`)), 4));
   while ((statsnomoredata1.length * parseInt(`${weiboB}`)) == 3) {
       let questiconS = 1;
       let componentl = String.fromCharCode(120,95,56,49,95,115,117,98,102,105,101,108,100,115,0);
       let viewsu: Array<any> = [String.fromCharCode(105,100,115,95,53,95,50,49,0), String.fromCharCode(109,95,53,51,95,97,114,99,0)];
       let yellowredcardi = String.fromCharCode(104,119,97,99,99,101,108,115,95,56,95,56,51,0);
         componentl = `${componentl.length / (Math.max(9, questiconS))}`;
         viewsu = [viewsu.length % (Math.max(4, yellowredcardi.length))];
      while (1 >= (4 & componentl.length)) {
         componentl = `${questiconS}`;
         break;
      }
         questiconS %= Math.max(5, yellowredcardi.length);
      for (let g = 0; g < 1; g++) {
          let containerO = 3.0;
          let sorth: Map<any, any> = new Map([[String.fromCharCode(118,95,55,50,95,115,101,97,108,0),821], [String.fromCharCode(120,95,56,56,95,115,101,116,116,105,109,101,111,117,116,0),439], [String.fromCharCode(114,97,100,105,117,115,95,49,95,51,51,0),511]]);
          let humidityg = String.fromCharCode(99,111,109,112,97,99,116,95,99,95,49,51,0);
          let type_sm3 = String.fromCharCode(108,95,56,52,95,110,117,109,98,101,114,115,0);
         viewsu.push(1);
         containerO /= Math.max(1, (String.fromCharCode(50,0) == type_sm3 ? sorth.size : type_sm3.length));
         sorth.set(`${type_sm3}`, 2 - sorth.size);
         humidityg = `${parseInt(`${containerO}`)}`;
      }
       let pressureQ = String.fromCharCode(104,95,57,48,95,102,97,115,116,0);
       let halffieldimageM = String.fromCharCode(112,114,101,118,105,101,119,95,55,95,55,57,0);
          let draga = String.fromCharCode(116,101,120,116,109,111,118,115,117,98,95,55,95,52,52,0);
         componentl = `${yellowredcardi.length}`;
         draga = `${draga.length % (Math.max(1, draga.length))}`;
       let libimagepipelinek = String.fromCharCode(106,95,53,57,95,102,108,97,99,101,110,99,0);
         pressureQ += `${viewsu.length}`;
       let bootsplashF: Array<any> = [String.fromCharCode(110,95,55,56,95,112,108,97,110,97,114,120,0), String.fromCharCode(105,110,112,111,115,95,99,95,54,56,0)];
       let thailands: Array<any> = [String.fromCharCode(113,95,56,51,95,108,111,99,97,108,108,121,0), String.fromCharCode(107,95,57,53,95,97,100,106,117,115,116,0)];
      let halfp = 7439025 <= viewsu.length;
      do {
          let usernameU = String.fromCharCode(107,95,56,56,95,116,111,111,108,98,111,120,0);
          let teamr = 3.0;
         viewsu = [pressureQ.length];
         usernameU = `${usernameU.length}`;
         teamr /= Math.max(usernameU.length, 5);
         if (halfp) {
            break;
         }
      } while (halfp && ((1 + thailands.length) < 3));
         componentl = "1";
      weiboB -= parseInt(`${weiboB}`);
      break;
   }
        setIsFullScreen(false);
      } else {

      basketballmatchdetailbgh = !basketballmatchdetailbgh;
      gradleX += `${((executorj ? 2 : 3) << (Math.min(Math.abs(parseInt(`${halffieldimagec}`)), 5)))}`;
   let clubi = weiboB <= 5908905.0;
   do {
       let langx: Map<any, any> = new Map([[String.fromCharCode(114,116,114,101,101,95,119,95,49,48,0),String.fromCharCode(112,114,101,114,101,108,101,97,115,101,95,49,95,54,53,0)], [String.fromCharCode(121,95,57,51,95,105,112,109,111,118,105,101,0),String.fromCharCode(100,101,99,108,105,110,101,100,95,120,95,57,54,0)], [String.fromCharCode(117,95,57,51,95,112,111,115,116,101,114,115,0),String.fromCharCode(103,95,50,51,95,103,101,116,115,105,103,99,116,120,110,111,0)]]);
       let java6 = String.fromCharCode(115,118,103,95,55,95,54,0);
       let penaltyshootF = String.fromCharCode(105,100,120,95,50,95,57,57,0);
       let awayh = 2.0;
         awayh -= langx.size;
      while (3 >= java6.length || penaltyshootF.length >= 3) {
         penaltyshootF += `${parseInt(`${awayh}`)}`;
         break;
      }
         penaltyshootF = `${penaltyshootF.length ^ 1}`;
      while (penaltyshootF != String.fromCharCode(97,0) || java6 != String.fromCharCode(97,0)) {
         java6 += "1";
         break;
      }
         java6 += `${penaltyshootF.length - 2}`;
          let qaag9 = String.fromCharCode(97,114,101,97,95,50,95,57,52,0);
         java6 = "3";
         qaag9 = `${qaag9.length | 1}`;
      while (1 > (parseInt(`${awayh}`) / (Math.max(penaltyshootF.length, 2))) || (penaltyshootF.length % 1) > 3) {
          let nativeexT = 1.0;
          let rightw: Map<any, any> = new Map([[String.fromCharCode(122,95,54,48,95,120,95,54,54,0),936], [String.fromCharCode(116,95,55,95,115,116,97,110,100,97,114,100,0),235], [String.fromCharCode(118,95,51,52,95,111,117,116,100,97,116,101,100,0),338]]);
          let latnI: Array<any> = [642, 654, 20];
          let libyogaP = 0.0;
         awayh += penaltyshootF.length;
         nativeexT /= Math.max(rightw.size, 1);
         rightw = new Map([[`${rightw.size}`, rightw.size >> (Math.min(Math.abs(2), 1))]]);
         latnI = [parseInt(`${libyogaP}`)];
         libyogaP += rightw.size;
         break;
      }
      if (1.95 <= (2.88 * awayh)) {
         penaltyshootF = `${langx.size}`;
      }
         penaltyshootF += `${langx.size % (Math.max(2, 3))}`;
         awayh -= parseInt(`${awayh}`);
      for (let s = 0; s < 1; s++) {
          let stylesl = 4;
          let searchL: Array<any> = [519, 645, 599];
          let feedbackn = 2;
          let gradlewA = String.fromCharCode(114,101,99,117,114,115,105,118,101,95,115,95,52,56,0);
          let tumbnailu: Map<any, any> = new Map([[String.fromCharCode(99,111,108,120,95,110,95,49,57,0),String.fromCharCode(100,101,109,117,120,101,114,115,95,48,95,53,51,0)], [String.fromCharCode(102,108,97,103,95,48,95,57,49,0),String.fromCharCode(102,95,57,57,95,97,117,116,104,111,114,105,122,97,116,105,111,110,115,0)], [String.fromCharCode(99,117,100,97,95,111,95,52,52,0),String.fromCharCode(116,104,105,99,107,110,101,115,115,95,52,95,53,55,0)]]);
         langx.set(`${feedbackn}`, feedbackn);
         stylesl ^= gradlewA.length;
         searchL = [3 >> (Math.min(2, gradlewA.length))];
         tumbnailu.set(`${stylesl}`, stylesl + 1);
      }
      let components0 = java6.length <= 8498248;
      do {
          let matchn: Map<any, any> = new Map([[String.fromCharCode(119,95,50,52,95,102,114,97,103,109,101,110,116,0),String.fromCharCode(104,95,50,52,95,111,110,101,119,97,121,0)], [String.fromCharCode(109,95,51,54,95,97,118,105,111,0),String.fromCharCode(121,117,118,121,97,95,54,95,56,55,0)], [String.fromCharCode(98,108,117,101,95,102,95,49,49,0),String.fromCharCode(115,95,55,52,95,97,115,115,101,109,98,108,121,0)]]);
         java6 += `${penaltyshootF.length % 1}`;
         matchn.set(`${matchn.size}`, matchn.size);
         if (components0) {
            break;
         }
      } while ((penaltyshootF != String.fromCharCode(54,0)) && components0);
      weiboB /= Math.max((String.fromCharCode(117,0) == kick9 ? gradleX.length : kick9.length), 3);
      if (clubi) {
         break;
      }
   } while (clubi && ((f_hashg - weiboB) < 4.38 || 2.88 < (f_hashg - 4.38)));
   for (let w = 0; w < 3; w++) {
      basketballmatchdetailbgh = kick9 == username3;
   }
       let downloadg = String.fromCharCode(122,95,49,95,103,114,97,121,115,99,97,108,101,0);
       let homeloadingV: Array<any> = [757, 103, 341];
      if (!downloadg.startsWith(`${homeloadingV.length}`)) {
          let greyarrowupS: Map<any, any> = new Map([[String.fromCharCode(115,116,114,108,105,107,101,95,99,95,51,57,0),974], [String.fromCharCode(101,116,104,101,114,116,117,112,108,105,115,95,110,95,51,49,0),227]]);
          let armva6 = String.fromCharCode(105,95,56,54,95,109,111,110,111,98,108,97,99,107,0);
          let listM = 1;
          let clockI = String.fromCharCode(115,116,105,99,107,101,114,112,97,99,107,95,99,95,57,48,0);
          let hoverB: Array<any> = [178, 759, 331];
         downloadg += "1";
         greyarrowupS.set(`${hoverB.length}`, greyarrowupS.size);
         armva6 += `${clockI.length}`;
         listM -= clockI.length;
         hoverB.push((String.fromCharCode(54,0) == clockI ? clockI.length : armva6.length));
      }
         downloadg += `${homeloadingV.length}`;
      let graphz = homeloadingV.length <= 6152825;
      do {
          let watchM: Map<any, any> = new Map([[String.fromCharCode(101,95,57,50,95,112,108,97,99,101,109,97,114,107,0),535], [String.fromCharCode(117,112,115,97,109,112,108,101,95,122,95,52,57,0),206]]);
         homeloadingV.push(homeloadingV.length);
         watchM = new Map([[`${watchM.size}`, watchM.size]]);
         if (graphz) {
            break;
         }
      } while (graphz && (4 >= (3 >> (Math.min(3, homeloadingV.length))) && (3 >> (Math.min(1, homeloadingV.length))) >= 5));
         downloadg = `${1 ^ homeloadingV.length}`;
      for (let d = 0; d < 1; d++) {
         homeloadingV.push(2 * downloadg.length);
      }
      if (downloadg.startsWith(`${homeloadingV.length}`)) {
         downloadg += `${downloadg.length * homeloadingV.length}`;
      }
      username3 += `${3 ^ kick9.length}`;
        

      gradleX += `${username3.length * parseInt(`${weiboB}`)}`;
   for (let p = 0; p < 1; p++) {
      username3 += `${((basketballmatchdetailbgh ? 1 : 3) >> (Math.min(username3.length, 1)))}`;
   }
   for (let f = 0; f < 3; f++) {
      basketballmatchdetailbgh = 36.86 == halffieldimagec && f_hashg == 36.86;
   }
      f_hashg += 3 | gradleX.length;
      kick9 = `${gradleX.length}`;
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
       let penaltyshoota = String.fromCharCode(117,105,110,116,108,101,95,54,95,54,0);
    let dependencyF = 3.0;
    let arrowup6 = true;
    let championD = String.fromCharCode(103,95,52,55,95,105,110,100,101,120,97,98,108,101,0);
    let imagewatchlive5 = 3.0;
    let libjsinspectorz: Array<any> = [String.fromCharCode(120,102,105,120,101,115,95,103,95,55,51,0), String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,105,110,103,95,54,95,54,52,0)];
    let encryptor2 = String.fromCharCode(114,101,99,101,105,118,105,110,103,95,103,95,51,51,0);
    let appleb = 1.0;
    let templateprocessora = String.fromCharCode(101,108,115,101,95,122,95,50,56,0);
    let redgoal7 = 4.0;
    let iconnointernetn = false;
    let upgrade1 = false;
    let dialogG = String.fromCharCode(115,95,49,56,95,112,114,105,109,97,108,105,116,121,0);
    let iconchatsendz = 1.0;
    let gpayZ = String.fromCharCode(117,95,56,50,95,114,97,110,115,112,111,114,116,0);
    let saveH: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,97,110,115,109,105,115,115,105,111,110,95,48,95,52,52,0),56], [String.fromCharCode(112,105,99,116,117,114,101,115,95,112,95,56,0),238], [String.fromCharCode(118,95,56,52,95,97,117,100,105,111,103,101,110,0),401]]);
    let completeM = String.fromCharCode(115,121,109,98,111,108,105,99,97,116,101,100,95,105,95,54,54,0);
   while (5.84 >= (5.85 * redgoal7) && 5.85 >= redgoal7) {
      redgoal7 -= 3 & parseInt(`${redgoal7}`);
      break;
   }
       let roomh = String.fromCharCode(102,105,116,95,53,95,51,56,0);
      let defaultpredictionprofileP = roomh == String.fromCharCode(102,105,55,0);
      do {
         roomh += `${3 % (Math.max(3, roomh.length))}`;
         if (defaultpredictionprofileP) {
            break;
         }
      } while ((roomh != roomh) && defaultpredictionprofileP);
         roomh += `${roomh.length}`;
       let yellowD = 5.0;
       let plusa = 1.0;
      imagewatchlive5 *= (parseFloat(`${(upgrade1 ? 1 : 2) | penaltyshoota.length}`));
   while (5.78 == redgoal7 || (5.78 * redgoal7) == 3.1) {
       let networkO = String.fromCharCode(102,95,53,49,95,97,99,114,111,110,121,109,115,0);
       let libglog3 = String.fromCharCode(105,115,116,111,103,114,97,109,95,106,95,57,0);
      while (libglog3 == networkO) {
          let checkboxL = String.fromCharCode(112,114,101,100,105,99,116,111,114,115,95,49,95,52,0);
          let crossF = 3;
          let policyE = false;
          let fastforwardE = 0.0;
          let loadingspinnerW: Array<any> = [String.fromCharCode(113,95,56,48,95,116,105,109,101,99,111,100,101,115,0), String.fromCharCode(113,95,57,55,95,112,105,120,101,108,102,111,114,109,97,116,0), String.fromCharCode(118,112,108,97,121,101,114,95,109,95,49,50,0)];
         networkO = "1";
         checkboxL += `${crossF}`;
         crossF ^= crossF;
         policyE = fastforwardE <= 92.1 || !policyE;
         fastforwardE += parseInt(`${fastforwardE}`) & loadingspinnerW.length;
         loadingspinnerW.push(parseInt(`${fastforwardE}`) >> (Math.min(loadingspinnerW.length, 3)));
         break;
      }
      for (let b = 0; b < 2; b++) {
          let holderB: Map<any, any> = new Map([[String.fromCharCode(100,95,54,95,103,101,116,109,97,120,114,115,115,0),399], [String.fromCharCode(114,101,99,104,117,110,107,95,52,95,57,50,0),937], [String.fromCharCode(102,108,97,115,104,115,118,95,114,95,51,54,0),214]]);
         libglog3 += `${networkO.length}`;
         holderB.set(`${holderB.size}`, 2);
      }
      for (let i = 0; i < 2; i++) {
         libglog3 = `${networkO.length}`;
      }
       let homeiconw = 5.0;
         homeiconw += parseFloat(`${libglog3.length}`);
      for (let q = 0; q < 2; q++) {
         libglog3 += `${parseInt(`${homeiconw}`)}`;
      }
      redgoal7 -= penaltyshoota.length;
      break;
   }
   for (let c = 0; c < 1; c++) {
      championD += `${dialogG.length | 3}`;
   }
   while (!dialogG.startsWith(penaltyshoota)) {
       let common9 = 1.0;
         common9 -= parseFloat(`${parseInt(`${common9}`)}`);
         common9 -= parseFloat(`${parseInt(`${common9}`) >> (Math.min(5, Math.abs(2)))}`);
      if (4.13 < (common9 - 1.87)) {
         common9 *= parseFloat(`${parseInt(`${common9}`)}`);
      }
      penaltyshoota = `${((upgrade1 ? 2 : 4) / (Math.max(parseInt(`${dependencyF}`), 3)))}`;
      break;
   }
   while ((dependencyF - parseFloat(`${encryptor2.length}`)) <= 1.33 && (encryptor2.length ^ 3) <= 2) {
      encryptor2 += `${1 * parseInt(`${redgoal7}`)}`;
      break;
   }
      encryptor2 += `${(parseInt(`${redgoal7}`) - (upgrade1 ? 3 : 4))}`;
   for (let k = 0; k < 1; k++) {
      arrowup6 = (appleb / (Math.max(championD.length, 6))) < 45.80;
   }
       let phoneshare_ = 1.0;
       let modald = 4;
       let playB: Map<any, any> = new Map([[String.fromCharCode(121,95,50,54,95,108,115,119,115,117,116,105,108,115,0),String.fromCharCode(100,95,54,52,95,114,101,115,105,122,97,98,108,101,0)], [String.fromCharCode(110,95,56,52,95,109,112,101,103,112,115,0),String.fromCharCode(122,95,55,53,95,108,111,110,103,105,116,117,100,101,0)], [String.fromCharCode(106,95,55,55,95,117,118,114,100,0),String.fromCharCode(121,111,117,95,120,95,56,48,0)]]);
          let projectX = 4;
          let rewind0 = String.fromCharCode(106,95,53,51,95,100,114,105,102,116,0);
          let greenV = String.fromCharCode(105,110,115,105,100,101,95,117,95,51,54,0);
         modald <<= Math.min(Math.abs(rewind0.length << (Math.min(Math.abs(1), 1))), 4);
         projectX >>= Math.min(5, greenV.length);
         rewind0 = "2";
         greenV += `${(String.fromCharCode(109,0) == greenV ? projectX : greenV.length)}`;
      let reactnavigationg = 6966017.0 >= phoneshare_;
      do {
         phoneshare_ /= Math.max(3, modald | 2);
         if (reactnavigationg) {
            break;
         }
      } while ((phoneshare_ > 5.6) && reactnavigationg);
       let bangv = String.fromCharCode(111,95,57,50,95,101,110,99,111,100,101,100,0);
       let reminderh = String.fromCharCode(117,95,57,48,95,112,114,101,98,117,102,0);
         modald *= modald;
         modald |= playB.size / 1;
      let yellowvideolive9 = 8146264 >= playB.size;
      do {
         playB.set(`${modald}`, 1 ^ modald);
         if (yellowvideolive9) {
            break;
         }
      } while (yellowvideolive9 && (reminderh.endsWith(`${playB.size}`)));
         phoneshare_ /= Math.max(3, bangv.length - 2);
       let calendarg: Map<any, any> = new Map([[String.fromCharCode(105,95,50,54,95,97,110,103,108,101,0),372], [String.fromCharCode(113,95,51,49,95,116,101,115,116,99,111,110,102,105,103,0),932], [String.fromCharCode(113,95,54,56,95,101,110,117,109,101,114,97,116,111,114,115,0),611]]);
         phoneshare_ -= (String.fromCharCode(48,0) == reminderh ? reminderh.length : bangv.length);
      dependencyF /= Math.max(parseFloat(`${parseInt(`${redgoal7}`)}`), 2);
   while (!arrowup6 && iconnointernetn) {
       let videojs4 = 5.0;
       let bgvipsportM = String.fromCharCode(111,95,51,55,95,99,104,97,112,116,101,114,115,0);
       let whistleorangel = String.fromCharCode(97,95,51,53,95,105,110,116,114,97,120,109,98,117,118,0);
       let iconpointscoreX: Array<any> = [875, 661, 898];
         iconpointscoreX.push(2 + whistleorangel.length);
       let runtimescheduleru: Map<any, any> = new Map([[String.fromCharCode(107,110,111,99,107,111,117,116,95,117,95,54,52,0),618], [String.fromCharCode(111,112,116,105,111,110,97,108,95,119,95,55,56,0),296]]);
       let sellU = 0.0;
       let grayn = 0.0;
      for (let f = 0; f < 3; f++) {
         sellU /= Math.max(parseInt(`${videojs4}`), 5);
      }
      if ((parseInt(`${grayn}`) / (Math.max(3, 3))) <= 4 || 4 <= (3 + whistleorangel.length)) {
          let libfbjni5: Array<any> = [800, 138, 90];
          let closeB: Array<any> = [497, 703];
         grayn /= Math.max(2 | whistleorangel.length, 5);
         libfbjni5 = [libfbjni5.length + closeB.length];
         closeB = [3 & libfbjni5.length];
      }
         whistleorangel = `${whistleorangel.length + bgvipsportM.length}`;
          let circleO = String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,115,95,102,95,53,51,0);
         sellU *= runtimescheduleru.size << (Math.min(Math.abs(3), 1));
         circleO = `${(String.fromCharCode(54,0) == circleO ? circleO.length : circleO.length)}`;
         videojs4 *= parseFloat(`${whistleorangel.length}`);
      for (let q = 0; q < 2; q++) {
         runtimescheduleru.set(`${grayn}`, parseInt(`${grayn}`) / 3);
      }
         grayn += (whistleorangel == String.fromCharCode(101,0) ? runtimescheduleru.size : whistleorangel.length);
          let unselected8 = String.fromCharCode(104,95,52,52,95,116,105,99,107,101,116,115,0);
         grayn /= Math.max(2, bgvipsportM.length);
         unselected8 += `${unselected8.length / 3}`;
      while ((4.16 - sellU) > 5.65 || 4.16 > (sellU - videojs4)) {
         sellU += 2 / (Math.max(7, parseInt(`${sellU}`)));
         break;
      }
      iconnointernetn = libjsinspectorz.length <= 89 || 89 <= iconpointscoreX.length;
      break;
   }
   while (!championD.includes(`${iconnointernetn}`)) {
      championD = `${parseInt(`${appleb}`) << (Math.min(dialogG.length, 4))}`;
      break;
   }
       let libfile4 = 0.0;
       let attributedstringS = 4;
       let defaultpredictionprofileS: Map<any, any> = new Map([[String.fromCharCode(99,95,52,50,95,115,104,111,119,115,0),String.fromCharCode(112,108,97,105,110,95,103,95,52,54,0)], [String.fromCharCode(105,95,54,52,95,100,105,115,112,111,115,97,98,108,101,0),String.fromCharCode(114,101,116,114,97,110,109,105,115,115,105,111,110,95,106,95,49,53,0)], [String.fromCharCode(103,114,111,117,110,100,95,56,95,53,52,0),String.fromCharCode(105,110,115,116,97,110,116,105,97,116,101,95,109,95,52,0)]]);
      while ((5 - attributedstringS) <= 5 && (attributedstringS - libfile4) <= 4.15) {
         libfile4 -= defaultpredictionprofileS.size;
         break;
      }
         libfile4 -= 1;
         attributedstringS <<= Math.min(Math.abs(1 ^ attributedstringS), 4);
      for (let m = 0; m < 1; m++) {
         libfile4 += attributedstringS - parseInt(`${libfile4}`);
      }
      let chatroombackgroundh = 6450682 >= attributedstringS;
      do {
         attributedstringS %= Math.max(2, attributedstringS / 2);
         if (chatroombackgroundh) {
            break;
         }
      } while (chatroombackgroundh && (4 < (1 % (Math.max(8, attributedstringS))) && (attributedstringS >> (Math.min(Math.abs(1), 2))) < 3));
         libfile4 -= defaultpredictionprofileS.size;
      while (5.81 > (2.20 * libfile4) && (attributedstringS << (Math.min(Math.abs(5), 1))) > 5) {
          let refreshf = 1.0;
          let icontransferclubd: Array<any> = [340, 759, 453];
          let eyeopenu = String.fromCharCode(116,105,99,107,95,109,95,49,56,0);
          let redirectW = String.fromCharCode(108,108,118,105,100,101,110,99,100,115,112,95,104,95,54,50,0);
          let sharej = 0.0;
         attributedstringS <<= Math.min(Math.abs(redirectW.length | attributedstringS), 2);
         refreshf *= parseFloat(`${eyeopenu.length << (Math.min(Math.abs(2), 4))}`);
         icontransferclubd = [parseInt(`${sharej}`) + 2];
         eyeopenu += `${eyeopenu.length}`;
         redirectW = `${3 - parseInt(`${refreshf}`)}`;
         sharej *= parseInt(`${sharej}`) & eyeopenu.length;
         break;
      }
         defaultpredictionprofileS = new Map([[`${defaultpredictionprofileS.size}`, defaultpredictionprofileS.size]]);
      let downF = 6428214.0 <= libfile4;
      do {
         libfile4 += 3;
         if (downF) {
            break;
         }
      } while (downF && ((attributedstringS * libfile4) == 3.13));
      libjsinspectorz = [encryptor2.length];
      dependencyF /= Math.max(3, parseFloat(`${parseInt(`${redgoal7}`)}`));
   while ((dependencyF * 4.38) <= 1.51 && !upgrade1) {
      upgrade1 = !iconnointernetn;
      break;
   }
   for (let l = 0; l < 2; l++) {
       let philippinesN = String.fromCharCode(97,110,103,108,101,115,95,117,95,56,50,0);
       let containerE = 3.0;
      for (let c = 0; c < 1; c++) {
          let favicona: Array<any> = [528, 677, 707];
          let malaysiaT = 4.0;
          let logoA = 2.0;
          let applem = 5.0;
         containerE /= Math.max(parseFloat(`${1}`), 4);
         favicona = [favicona.length];
         malaysiaT -= 1 + parseInt(`${malaysiaT}`);
         logoA += favicona.length;
         applem /= Math.max(2, parseInt(`${malaysiaT}`) - parseInt(`${applem}`));
      }
      if ((philippinesN.length * 5) == 5) {
         philippinesN = "1";
      }
       let catagory_ = 3;
         philippinesN += "1";
      if (parseInt(`${containerE}`) == philippinesN.length) {
          let storem = 2.0;
          let details0: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,101,115,116,95,122,95,49,0),104], [String.fromCharCode(102,95,54,49,95,114,101,115,111,108,118,101,100,0),90]]);
          let fastforwardk: Array<any> = [227, 432];
          let baiduR: Array<any> = [String.fromCharCode(100,95,52,53,95,100,97,116,97,0), String.fromCharCode(115,112,101,99,105,102,105,99,95,48,95,49,52,0), String.fromCharCode(100,95,52,49,95,97,109,102,101,110,99,0)];
         philippinesN = `${details0.size << (Math.min(Math.abs(1), 1))}`;
         storem *= fastforwardk.length;
         details0.set(`${storem}`, parseInt(`${storem}`) >> (Math.min(2, Math.abs(3))));
         fastforwardk.push(1);
         baiduR.push(fastforwardk.length & parseInt(`${storem}`));
      }
         containerE -= parseFloat(`${2 / (Math.max(6, philippinesN.length))}`);
      appleb /= Math.max(2, parseInt(`${imagewatchlive5}`) % 2);
   }
   let megaphone8 = upgrade1 ? !upgrade1 : upgrade1;
   do {
       let nextN = 4.0;
       let backiconmasks = 0.0;
       let gesturesL: Array<any> = [540, 801];
       let calendarI = String.fromCharCode(101,95,49,50,95,97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,115,0);
       let searchbarh = String.fromCharCode(114,101,116,97,105,110,95,101,95,52,55,0);
      if ((nextN + 1.31) > 3.25) {
         nextN -= 3 / (Math.max(1, searchbarh.length));
      }
      let librrcJ = calendarI.length >= 6111592;
      do {
          let login2 = String.fromCharCode(119,95,56,53,95,114,101,118,101,97,108,101,100,0);
          let hooks6 = false;
          let change_: Map<any, any> = new Map([[String.fromCharCode(119,95,54,95,115,112,97,119,110,97,98,108,101,0),198], [String.fromCharCode(98,95,52,54,95,99,111,110,116,105,110,117,101,0),104]]);
          let iconuserw: Array<any> = [96, 90];
          let libreactnativejniX = 2.0;
         calendarI += `${parseInt(`${backiconmasks}`) / (Math.max(1, 6))}`;
         login2 = `${iconuserw.length}`;
         hooks6 = 51.16 < libreactnativejniX;
         change_ = new Map([[`${hooks6}`, parseInt(`${libreactnativejniX}`) + 2]]);
         iconuserw = [((hooks6 ? 5 : 5) >> (Math.min(Math.abs(1), 3)))];
         if (librrcJ) {
            break;
         }
      } while ((calendarI.startsWith(`${searchbarh.length}`)) && librrcJ);
          let utilsF = String.fromCharCode(105,103,110,112,111,115,116,95,103,95,49,53,0);
         searchbarh = `${parseInt(`${nextN}`)}`;
         utilsF = `${utilsF.length & utilsF.length}`;
      for (let y = 0; y < 3; y++) {
         nextN /= Math.max(3, parseInt(`${nextN}`) ^ parseInt(`${backiconmasks}`));
      }
         nextN *= parseInt(`${nextN}`) % 1;
      while (3.65 >= backiconmasks) {
         calendarI = `${parseInt(`${nextN}`) ^ calendarI.length}`;
         break;
      }
       let foregroundn = 5.0;
       let predictionarrowt = 1.0;
       let historyY = 1.0;
      upgrade1 = iconnointernetn;
      if (megaphone8) {
         break;
      }
   } while (megaphone8 && (!iconnointernetn));
      redgoal7 /= Math.max((dialogG == String.fromCharCode(68,0) ? dialogG.length : championD.length), 3);

        console.log("err save vod!");

      championD += `${parseInt(`${iconchatsendz}`)}`;
      penaltyshoota += `${parseInt(`${dependencyF}`) * 1}`;
   if (championD.startsWith(`${iconchatsendz}`)) {
      iconchatsendz -= 2;
   }
      penaltyshoota = "3";
   while ((dialogG.length & 2) >= 5 || 1 >= (dialogG.length ^ 2)) {
      iconchatsendz /= Math.max(2, ((iconnointernetn ? 1 : 3)));
      break;
   }
      upgrade1 = penaltyshoota.length < 83 || iconchatsendz < 71.59;
   let popupL = arrowup6 ? !arrowup6 : arrowup6;
   do {
       let stringsv = String.fromCharCode(115,95,56,55,95,99,97,99,104,101,115,0);
       let hongkongO = false;
       let iconclosewhitewithbg4 = String.fromCharCode(100,101,116,101,99,116,105,110,103,95,122,95,50,48,0);
       let room0: Array<any> = [281, 159, 127];
         hongkongO = 93 == room0.length;
         iconclosewhitewithbg4 += `${iconclosewhitewithbg4.length & room0.length}`;
         hongkongO = room0.includes(hongkongO);
      let clockD = hongkongO ? !hongkongO : hongkongO;
      do {
          let actionsl = 0;
          let with_kK: Array<any> = [String.fromCharCode(118,112,100,97,116,97,95,120,95,54,49,0), String.fromCharCode(114,95,53,53,95,114,97,110,100,111,109,0)];
         hongkongO = stringsv == String.fromCharCode(73,0);
         actionsl /= Math.max(actionsl % (Math.max(1, with_kK.length)), 4);
         with_kK.push(1);
         if (clockD) {
            break;
         }
      } while ((!hongkongO) && clockD);
       let vipsportR: Array<any> = [283, 772];
      while ((room0.length + 5) == 3 || 4 == (5 + stringsv.length)) {
         stringsv += `${room0.length * 2}`;
         break;
      }
       let sharewhiteM = String.fromCharCode(110,111,114,111,117,110,100,95,120,95,55,48,0);
         iconclosewhitewithbg4 += `${room0.length}`;
       let mutedo = String.fromCharCode(115,116,101,112,115,105,122,101,95,55,95,57,51,0);
         mutedo += `${(2 % (Math.max(2, (hongkongO ? 4 : 5))))}`;
      if ((vipsportR.length / (Math.max(1, 5))) >= 4) {
          let questh = 1.0;
         vipsportR.push(2 >> (Math.min(1, stringsv.length)));
         questh *= parseFloat(`${parseInt(`${questh}`)}`);
      }
         mutedo = `${iconclosewhitewithbg4.length}`;
      arrowup6 = championD == String.fromCharCode(116,0);
      if (popupL) {
         break;
      }
   } while ((!encryptor2.endsWith(`${arrowup6}`)) && popupL);
       let philippinesx = String.fromCharCode(111,117,116,112,117,116,115,95,104,95,53,48,0);
       let iconqqv: Array<any> = [404, 43, 983];
      while ((philippinesx.length & iconqqv.length) >= 5 || (philippinesx.length & 5) >= 1) {
         philippinesx += `${(philippinesx == String.fromCharCode(105,0) ? iconqqv.length : philippinesx.length)}`;
         break;
      }
       let temperaturer: Map<any, any> = new Map([[String.fromCharCode(110,95,49,57,95,119,114,111,110,103,0),String.fromCharCode(117,110,99,111,110,102,105,114,109,101,100,95,118,95,52,52,0)], [String.fromCharCode(119,105,116,104,100,114,97,119,95,50,95,52,48,0),String.fromCharCode(120,95,49,56,0)]]);
          let condensedW = String.fromCharCode(115,116,97,107,101,95,112,95,53,56,0);
          let imagenomoredataS: Array<any> = [256, 359];
         iconqqv = [temperaturer.size | iconqqv.length];
         condensedW = `${condensedW.length}`;
         imagenomoredataS.push(condensedW.length - imagenomoredataS.length);
      if (philippinesx.length <= 4) {
         philippinesx += `${iconqqv.length * 1}`;
      }
      if (philippinesx.includes(`${iconqqv.length}`)) {
         iconqqv = [(String.fromCharCode(103,0) == philippinesx ? philippinesx.length : temperaturer.size)];
      }
          let notificationfilled7 = 0;
          let encrypt_ = String.fromCharCode(98,95,49,52,95,104,102,121,117,0);
         iconqqv.push(1);
         notificationfilled7 *= encrypt_.length;
         encrypt_ = "1";
      templateprocessora += `${((upgrade1 ? 5 : 4) | dialogG.length)}`;
   if (dependencyF > parseFloat(`${penaltyshoota.length}`)) {
       let suboutp = 2.0;
       let auto_ufM: Map<any, any> = new Map([[String.fromCharCode(100,95,49,48,48,95,115,115,114,99,0),169], [String.fromCharCode(117,95,51,57,95,101,110,113,117,101,117,101,0),401]]);
         auto_ufM = new Map([[`${auto_ufM.size}`, auto_ufM.size]]);
      if (auto_ufM.size <= parseInt(`${suboutp}`)) {
          let runtimeschedulerS = String.fromCharCode(105,104,116,120,95,118,95,57,52,0);
          let suggestionk: Map<any, any> = new Map([[String.fromCharCode(116,105,116,108,101,95,98,95,49,0),990], [String.fromCharCode(112,95,57,95,101,116,119,111,114,107,0),867]]);
          let cornershootF = String.fromCharCode(104,108,115,112,108,97,121,108,105,115,116,95,56,95,49,48,48,0);
          let nexth = 0.0;
         suboutp += parseFloat(`${suggestionk.size}`);
         runtimeschedulerS = `${1 - parseInt(`${nexth}`)}`;
         suggestionk = new Map([[cornershootF, 3 << (Math.min(3, cornershootF.length))]]);
         nexth *= parseFloat(`${parseInt(`${nexth}`) | cornershootF.length}`);
      }
          let orientationR = String.fromCharCode(112,95,54,55,95,103,108,121,112,104,115,0);
         auto_ufM.set(`${suboutp}`, 2);
         orientationR += `${1 ^ orientationR.length}`;
         auto_ufM = new Map([[`${auto_ufM.size}`, auto_ufM.size]]);
         suboutp /= Math.max(parseFloat(`${2}`), 4);
         suboutp += parseFloat(`${auto_ufM.size}`);
      penaltyshoota += `${auto_ufM.size}`;
   }
   for (let h = 0; h < 2; h++) {
      dialogG = `${parseInt(`${imagewatchlive5}`) << (Math.min(2, Math.abs(parseInt(`${dependencyF}`))))}`;
   }
   while (!iconnointernetn && templateprocessora.length < 3) {
      templateprocessora += `${parseInt(`${appleb}`)}`;
      break;
   }
      dialogG += `${parseInt(`${imagewatchlive5}`) & 1}`;
       let register_u6s = String.fromCharCode(104,95,57,48,95,114,101,112,108,97,121,0);
       let pangleG: Array<any> = [894, 710, 600];
      let filedH = String.fromCharCode(108,53,52,102,110,113,0) == register_u6s;
      do {
          let iconwatchj = false;
          let bing9 = String.fromCharCode(116,114,117,116,104,95,101,95,54,56,0);
          let typingloadingZ = true;
         register_u6s += `${(register_u6s.length & (iconwatchj ? 4 : 2))}`;
         iconwatchj = typingloadingZ;
         bing9 = "2";
         if (filedH) {
            break;
         }
      } while (((register_u6s.length + pangleG.length) == 2) && filedH);
      while ((1 ^ register_u6s.length) >= 3 || (1 ^ register_u6s.length) >= 2) {
         pangleG.push(pangleG.length);
         break;
      }
       let loginX = 5.0;
      if ((parseFloat(`${register_u6s.length}`) / (Math.max(6, loginX))) >= 1.25 || (register_u6s.length / (Math.max(7, parseInt(`${loginX}`)))) >= 3) {
         register_u6s += `${pangleG.length}`;
      }
      for (let g = 0; g < 3; g++) {
         register_u6s += `${pangleG.length}`;
      }
          let iconnewsshareB: Map<any, any> = new Map([[String.fromCharCode(105,95,50,54,95,116,111,107,101,110,116,120,0),true ], [String.fromCharCode(109,97,112,112,101,100,95,51,95,53,49,0),true ]]);
          let leakcheckerW: Array<any> = [520, 752, 127];
         register_u6s = `${leakcheckerW.length & iconnewsshareB.size}`;
      imagewatchlive5 -= parseFloat(`${parseInt(`${imagewatchlive5}`) / 1}`);
   if ((5 << (Math.min(1, championD.length))) <= 4) {
       let successH = 3;
       let googleq = String.fromCharCode(115,101,116,108,105,115,116,95,107,95,56,53,0);
      while (successH == googleq.length) {
         successH &= googleq.length << (Math.min(Math.abs(3), 5));
         break;
      }
          let trash0 = false;
          let invite3 = 0;
          let airbnbstarselectedR = 2.0;
         googleq += `${parseInt(`${airbnbstarselectedR}`) - 3}`;
         trash0 = !trash0;
         invite3 >>= Math.min(Math.abs(invite3), 3);
         airbnbstarselectedR -= (parseFloat(`${(trash0 ? 4 : 2) * invite3}`));
         googleq += `${successH << (Math.min(Math.abs(3), 5))}`;
      let streamingc = successH >= 7279880;
      do {
          let overt = 4;
          let serviceN = 1;
         successH >>= Math.min(Math.abs(2), 1);
         overt <<= Math.min(4, Math.abs(serviceN + 1));
         serviceN <<= Math.min(1, Math.abs(overt * 3));
         if (streamingc) {
            break;
         }
      } while (streamingc && (3 < (googleq.length / 3) && (googleq.length / 3) < 1));
         googleq += `${(String.fromCharCode(122,0) == googleq ? googleq.length : successH)}`;
          let libyogav = String.fromCharCode(109,95,53,55,95,102,119,104,116,0);
         successH <<= Math.min(3, Math.abs(2));
         libyogav += `${2 + libyogav.length}`;
      championD = `${3 - templateprocessora.length}`;
   }
   for (let c = 0; c < 3; c++) {
      libjsinspectorz.push(dialogG.length);
   }
      championD += `${2 >> (Math.min(2, penaltyshoota.length))}`;
      championD += `${2 / (Math.max(parseInt(`${iconchatsendz}`), 8))}`;
        console.log(err);
      }
    };

    const deviceOrientationHandle = () => {
       let notificationV = 2.0;
    let iconbelli: Map<any, any> = new Map([[String.fromCharCode(114,95,53,48,95,119,111,114,107,115,0),15], [String.fromCharCode(105,110,108,101,110,95,109,95,54,0),953], [String.fromCharCode(109,111,118,101,109,101,110,116,95,97,95,56,54,0),274]]);
    let chatroombackgroundh = 5.0;
    let stylep = String.fromCharCode(110,116,101,114,102,97,99,101,95,107,95,50,50,0);
    let emptyQ = false;
    let modeO = 3.0;
    let predictionloss3 = false;
    let penaltyQ = String.fromCharCode(116,95,57,95,114,97,110,0);
    let matchinactiveX: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,100,95,117,95,57,48,0),String.fromCharCode(99,97,110,111,110,105,99,97,108,95,120,95,56,48,0)], [String.fromCharCode(121,95,54,55,95,109,97,116,120,0),String.fromCharCode(99,95,53,56,95,115,109,112,116,101,98,97,114,115,0)]]);
    let dependencies7 = 4;
    let countryK = String.fromCharCode(115,101,116,114,97,110,103,101,95,114,95,55,52,0);
    let statisticsactiveH: Array<any> = [942, 806, 765];
    let largebrightnessW = String.fromCharCode(115,95,49,57,95,100,105,115,99,111,110,110,101,99,116,101,100,0);
    let macauN = String.fromCharCode(116,111,111,116,105,112,95,50,95,49,50,0);
    let baseT: Map<any, any> = new Map([[String.fromCharCode(113,115,99,97,108,101,98,105,116,115,95,105,95,57,55,0),410], [String.fromCharCode(104,95,49,49,95,115,122,97,98,111,115,0),173]]);
    let path3 = 4.0;
    let informationI = String.fromCharCode(117,112,112,101,114,95,55,95,55,0);
    let iconlogouto = 2;
    let dragclosea = 5.0;
      countryK = `${parseInt(`${notificationV}`)}`;
       let singleC = 5.0;
       let sellR = 2.0;
       let chinasame3 = String.fromCharCode(101,95,53,48,95,99,111,110,110,101,99,116,111,114,0);
         singleC += parseInt(`${sellR}`);
         sellR -= 1;
         sellR /= Math.max(4, parseInt(`${singleC}`));
         singleC -= parseInt(`${sellR}`) % 2;
         sellR *= parseInt(`${singleC}`) ^ parseInt(`${sellR}`);
       let libfbg = String.fromCharCode(99,121,99,108,101,99,108,111,99,107,95,112,95,50,48,0);
       let emojib = String.fromCharCode(99,97,99,104,101,100,107,101,121,115,95,102,95,57,57,0);
      while (!emojib.startsWith(`${libfbg.length}`)) {
         libfbg += `${emojib.length | 2}`;
         break;
      }
       let giflivestreaming7 = 0.0;
      let loginsuccessi = 5821505.0 <= sellR;
      do {
          let libfileW = 0.0;
          let iconviewergifn: Map<any, any> = new Map([[String.fromCharCode(104,95,56,95,97,112,105,99,0),String.fromCharCode(110,95,52,53,95,109,105,120,105,110,115,0)], [String.fromCharCode(121,95,53,54,95,109,101,114,103,101,0),String.fromCharCode(117,95,55,48,95,115,101,116,98,105,116,0)], [String.fromCharCode(100,119,111,114,100,95,48,95,55,0),String.fromCharCode(100,120,116,97,95,57,95,56,53,0)]]);
          let bellK: Map<any, any> = new Map([[String.fromCharCode(100,95,48,95,114,105,110,103,0),809], [String.fromCharCode(107,95,52,57,95,114,101,118,111,107,105,110,103,0),288], [String.fromCharCode(100,101,110,111,105,115,101,95,99,95,55,55,0),134]]);
         sellR /= Math.max(5, 3);
         libfileW -= parseFloat(`${1}`);
         iconviewergifn = new Map([[`${bellK.size}`, iconviewergifn.size / 2]]);
         bellK = new Map([[`${bellK.size}`, parseInt(`${libfileW}`) ^ 1]]);
         if (loginsuccessi) {
            break;
         }
      } while ((sellR <= 5.46) && loginsuccessi);
      chatroombackgroundh -= parseFloat(`${1}`);
   while (5.64 < (notificationV + 1.56)) {
      notificationV *= parseInt(`${modeO}`) % 3;
      break;
   }

      

      predictionloss3 = emptyQ;
   let shootnogoalZ = penaltyQ == String.fromCharCode(103,57,95,99,113,115,0);
   do {
      penaltyQ += `${(String.fromCharCode(102,0) == countryK ? countryK.length : dependencies7)}`;
      if (shootnogoalZ) {
         break;
      }
   } while (shootnogoalZ && (5 < penaltyQ.length));
      modeO -= (parseFloat(`${matchinactiveX.size - (emptyQ ? 4 : 5)}`));
      if (
        devicesOrientation === "LANDSCAPE-LEFT" ||
        devicesOrientation === "LANDSCAPE-RIGHT"
      ) {

      iconbelli.set(`${statisticsactiveH.length}`, statisticsactiveH.length);
      matchinactiveX.set(`${modeO}`, (parseInt(`${modeO}`) + (predictionloss3 ? 1 : 2)));
      largebrightnessW += "3";
        setIsFullScreen(true);

      dependencies7 >>= Math.min(Math.abs(dependencies7), 3);
       let graphL = 4;
       let m_countO = String.fromCharCode(114,95,49,51,95,115,101,115,115,111,110,0);
       let dplusA = 5.0;
          let libapminsightbp = 3.0;
          let loadingspinner8: Array<any> = [22, 395];
         m_countO = "2";
         libapminsightbp += 1 + loadingspinner8.length;
         loadingspinner8 = [3];
       let theme5: Array<any> = [String.fromCharCode(100,95,57,52,95,99,104,105,110,0), String.fromCharCode(112,95,50,95,116,114,101,102,0), String.fromCharCode(115,95,51,55,95,115,117,98,115,97,109,112,108,105,110,103,0)];
         theme5.push((m_countO == String.fromCharCode(117,0) ? graphL : m_countO.length));
         m_countO = `${parseInt(`${dplusA}`)}`;
          let time_kR = String.fromCharCode(108,95,50,50,95,99,111,110,102,0);
         graphL <<= Math.min(2, Math.abs(theme5.length / (Math.max(2, 4))));
         time_kR += `${time_kR.length & time_kR.length}`;
         theme5.push(1);
       let liblogger5 = 4.0;
       let whiteanimationlive1 = 3;
       let dependencyO = 1;
         whiteanimationlive1 %= Math.max(3, parseInt(`${liblogger5}`));
      emptyQ = 3 == largebrightnessW.length;
       let light4 = 3;
       let reactnativeratingsE: Map<any, any> = new Map([[String.fromCharCode(115,111,99,107,95,99,95,57,0),636], [String.fromCharCode(120,95,57,57,95,111,99,116,112,111,105,110,116,0),253]]);
      for (let f = 0; f < 2; f++) {
         reactnativeratingsE.set(`${light4}`, light4);
      }
          let defaultprofilepicb = 2.0;
         reactnativeratingsE = new Map([[`${defaultprofilepicb}`, light4 ^ parseInt(`${defaultprofilepicb}`)]]);
      let dycreatori = light4 >= 9816351;
      do {
         light4 *= reactnativeratingsE.size ^ light4;
         if (dycreatori) {
            break;
         }
      } while (dycreatori && (reactnativeratingsE.size == 1));
      let emojiheartM = reactnativeratingsE.size >= 8256223;
      do {
          let iconorientationH = String.fromCharCode(100,95,55,50,95,109,111,116,99,111,109,112,0);
          let canvasP: Map<any, any> = new Map([[String.fromCharCode(121,95,55,53,95,114,101,108,97,121,115,0),627], [String.fromCharCode(104,95,49,48,48,0),225]]);
          let mimeB = 2;
          let profileactiveq = 2.0;
          let libapminsightbpC: Array<any> = [454, 661, 543];
         reactnativeratingsE = new Map([[`${libapminsightbpC.length}`, (iconorientationH == String.fromCharCode(116,0) ? libapminsightbpC.length : iconorientationH.length)]]);
         canvasP.set(`${mimeB}`, canvasP.size);
         mimeB <<= Math.min(1, Math.abs(mimeB));
         profileactiveq /= Math.max(parseFloat(`${3}`), 4);
         if (emojiheartM) {
            break;
         }
      } while ((3 <= (2 & reactnativeratingsE.size) || (light4 & 2) <= 4) && emojiheartM);
      let owngoalq = reactnativeratingsE.size <= 8822528;
      do {
          let downloadeds = String.fromCharCode(102,108,111,111,100,95,111,95,50,56,0);
          let logo0 = 4.0;
          let playercommonK = String.fromCharCode(112,108,97,121,101,114,95,104,95,57,48,0);
          let xvodH: Map<any, any> = new Map([[String.fromCharCode(99,114,111,110,111,115,95,109,95,53,57,0),397], [String.fromCharCode(100,105,115,97,98,108,101,114,95,98,95,52,54,0),898], [String.fromCharCode(116,95,50,51,95,116,111,107,101,110,116,120,0),55]]);
          let orangeuparrowx = String.fromCharCode(105,95,57,50,95,103,115,116,114,105,110,103,0);
         reactnativeratingsE = new Map([[`${reactnativeratingsE.size}`, (downloadeds == String.fromCharCode(106,0) ? downloadeds.length : reactnativeratingsE.size)]]);
         logo0 += parseFloat(`${playercommonK.length ^ xvodH.size}`);
         playercommonK = `${xvodH.size}`;
         orangeuparrowx += "2";
         if (owngoalq) {
            break;
         }
      } while (owngoalq && (!Array.from(reactnativeratingsE.keys()).includes(`${light4}`)));
         reactnativeratingsE.set(`${light4}`, 2);
      penaltyQ += `${statisticsactiveH.length}`;
        

      countryK = `${largebrightnessW.length}`;
   for (let c = 0; c < 2; c++) {
      largebrightnessW = `${3 * largebrightnessW.length}`;
   }
   while (3 >= (iconbelli.size ^ 5) && iconbelli.size >= 5) {
       let untickJ = String.fromCharCode(117,95,52,50,95,100,117,112,108,105,99,97,116,111,114,0);
       let tooltipsR = String.fromCharCode(105,95,50,57,95,115,117,98,114,97,110,103,101,115,0);
      if (untickJ.startsWith(`${tooltipsR.length}`)) {
          let floater1 = String.fromCharCode(112,115,104,95,50,95,51,49,0);
          let zhuboe = 2;
          let selectE = 0;
          let episodesS = String.fromCharCode(98,115,116,114,97,99,116,95,120,95,54,0);
         untickJ = "1";
         floater1 = `${episodesS.length}`;
         zhuboe -= selectE << (Math.min(Math.abs(2), 2));
         selectE /= Math.max(2, zhuboe);
         episodesS += `${1 & zhuboe}`;
      }
       let dropdownM = 1.0;
         tooltipsR = `${parseInt(`${dropdownM}`)}`;
      while (untickJ.length >= 4) {
         dropdownM += parseFloat(`${parseInt(`${dropdownM}`) >> (Math.min(tooltipsR.length, 5))}`);
         break;
      }
      if ((dropdownM - parseFloat(`${tooltipsR.length}`)) > 3.52 && (tooltipsR.length << (Math.min(Math.abs(3), 1))) > 1) {
          let giftbutton8 = String.fromCharCode(100,101,118,101,108,111,112,109,101,110,116,95,52,95,53,56,0);
         tooltipsR = `${untickJ.length}`;
         giftbutton8 += `${giftbutton8.length}`;
      }
      for (let e = 0; e < 3; e++) {
         dropdownM -= parseFloat(`${parseInt(`${dropdownM}`) % 3}`);
      }
      emptyQ = baseT.size < 83 || notificationV < 79.74;
      break;
   }
        StatusBar.setHidden(true);

      notificationV *= largebrightnessW.length - baseT.size;
      chatroombackgroundh *= parseFloat(`${countryK.length}`);
       let fullL = 5.0;
       let referrerc = 2.0;
         fullL *= parseFloat(`${parseInt(`${referrerc}`) % 1}`);
         referrerc /= Math.max(parseInt(`${fullL}`), 3);
      if (fullL == referrerc) {
          let hooksB = 5;
          let downf = 3;
         referrerc *= downf;
         hooksB <<= Math.min(Math.abs(1), 4);
      }
         referrerc += parseInt(`${fullL}`);
         referrerc /= Math.max(1, parseInt(`${fullL}`));
         fullL += parseFloat(`${2}`);
      path3 += ((emptyQ ? 1 : 4) << (Math.min(Math.abs(parseInt(`${fullL}`)), 3)));

        lockOrientation(devicesOrientation);
      } else if (devicesOrientation === "PORTRAIT") {

      matchinactiveX.set(`${predictionloss3}`, parseInt(`${path3}`) / 2);
   if (!predictionloss3) {
      macauN = `${penaltyQ.length / (Math.max(3, 10))}`;
   }
   if (Array.from(baseT.values()).includes(statisticsactiveH.length)) {
      statisticsactiveH.push(parseInt(`${notificationV}`));
   }
        setIsFullScreen(false);

   let footballp = baseT.size >= 6646653;
   do {
      baseT.set(macauN, 2 + macauN.length);
      if (footballp) {
         break;
      }
   } while ((!Array.from(baseT.values()).includes(modeO)) && footballp);
   for (let v = 0; v < 1; v++) {
      iconbelli = new Map([[`${emptyQ}`, ((emptyQ ? 2 : 3) % (Math.max(5, parseInt(`${notificationV}`))))]]);
   }
      macauN = `${((emptyQ ? 2 : 5) ^ parseInt(`${path3}`))}`;
        

       let androidc = 5.0;
       let china4 = String.fromCharCode(116,111,111,108,98,97,114,95,121,95,57,0);
      while (1.53 < androidc) {
          let backwhiteV = 0.0;
          let shootyesgoalF = String.fromCharCode(122,95,57,55,95,99,97,108,99,117,97,108,116,101,0);
         androidc -= parseFloat(`${2 >> (Math.min(3, shootyesgoalF.length))}`);
         backwhiteV /= Math.max(4, parseInt(`${backwhiteV}`));
         shootyesgoalF += `${parseInt(`${backwhiteV}`)}`;
         break;
      }
      if ((china4.length - parseInt(`${androidc}`)) <= 1 || (china4.length - parseInt(`${androidc}`)) <= 1) {
         androidc /= Math.max(parseFloat(`${parseInt(`${androidc}`) >> (Math.min(china4.length, 4))}`), 3);
      }
      iconbelli.set(`${modeO}`, parseInt(`${chatroombackgroundh}`) * 2);
   let profileinactive_ = penaltyQ.length >= 9860431;
   do {
       let modelsM = 1.0;
          let predictionbuttonF = String.fromCharCode(99,105,116,121,95,114,95,50,52,0);
          let m_positionV = 4.0;
         modelsM /= Math.max(parseFloat(`${predictionbuttonF.length >> (Math.min(Math.abs(3), 5))}`), 2);
         predictionbuttonF = "2";
         m_positionV -= parseFloat(`${parseInt(`${m_positionV}`)}`);
      let backiconu = modelsM >= 9807199.0;
      do {
          let ccdfbdabcabbbedb_ = false;
          let eyeclosef = String.fromCharCode(100,95,50,51,95,101,110,99,111,100,101,115,0);
         modelsM /= Math.max(5, (parseFloat(`${(ccdfbdabcabbbedb_ ? 1 : 2) - parseInt(`${modelsM}`)}`)));
         ccdfbdabcabbbedb_ = eyeclosef.length > eyeclosef.length;
         if (backiconu) {
            break;
         }
      } while (backiconu && (modelsM > 3.94));
          let libswscalev = 0.0;
          let trashI: Map<any, any> = new Map([[String.fromCharCode(112,114,105,109,97,108,105,116,121,95,111,95,56,50,0),872], [String.fromCharCode(102,95,54,48,0),808]]);
          let refreshborderlesso: Map<any, any> = new Map([[String.fromCharCode(97,116,116,105,98,117,116,101,95,104,95,53,49,0),759], [String.fromCharCode(106,95,57,49,95,115,117,98,113,117,101,114,121,0),986], [String.fromCharCode(113,95,56,50,95,110,117,109,101,114,105,99,97,108,0),466]]);
         modelsM *= parseFloat(`${refreshborderlesso.size}`);
         libswscalev += parseFloat(`${parseInt(`${libswscalev}`) * 2}`);
         trashI = new Map([[`${trashI.size}`, 1 ^ parseInt(`${libswscalev}`)]]);
         refreshborderlesso = new Map([[`${trashI.size}`, parseInt(`${libswscalev}`) << (Math.min(Math.abs(trashI.size), 4))]]);
      penaltyQ = `${stylep.length}`;
      if (profileinactive_) {
         break;
      }
   } while (profileinactive_ && (parseInt(`${chatroombackgroundh}`) < penaltyQ.length));
   while (!predictionloss3 || (baseT.size / 4) < 2) {
       let stringsI = 2.0;
       let stats8 = true;
       let nativeC = 4.0;
       let datai: Array<any> = [467, 5];
         stats8 = 6.48 >= stringsI && !stats8;
         stats8 = !stats8;
      while (3 == (2 * datai.length)) {
          let icondefaultthumbnails = String.fromCharCode(116,95,57,49,95,114,101,97,108,108,121,0);
          let iconpipexpandD = 1;
          let chartP = 5.0;
          let iconadslinka: Map<any, any> = new Map([[String.fromCharCode(109,95,52,53,95,100,105,99,116,105,111,110,97,114,105,101,115,0),String.fromCharCode(100,112,99,109,95,122,95,53,54,0)], [String.fromCharCode(101,120,97,109,112,108,101,95,114,95,50,49,0),String.fromCharCode(101,95,57,53,95,112,111,105,110,116,101,114,0)], [String.fromCharCode(105,95,57,55,0),String.fromCharCode(106,95,49,52,0)]]);
          let crossv: Map<any, any> = new Map([[String.fromCharCode(102,117,116,101,120,95,50,95,56,52,0),292], [String.fromCharCode(97,95,55,48,95,112,108,117,114,97,108,115,0),932]]);
         datai.push(3);
         icondefaultthumbnails = "1";
         iconpipexpandD <<= Math.min(Math.abs(icondefaultthumbnails.length >> (Math.min(5, Math.abs(iconpipexpandD)))), 3);
         chartP /= Math.max(parseFloat(`${crossv.size}`), 3);
         iconadslinka = new Map([[`${crossv.size}`, crossv.size]]);
         break;
      }
      for (let r = 0; r < 3; r++) {
         stringsI *= ((stats8 ? 1 : 2) | parseInt(`${stringsI}`));
      }
      for (let j = 0; j < 1; j++) {
         stats8 = 95 >= datai.length;
      }
      if (stats8) {
         stats8 = nativeC < 30.67;
      }
      while (!stats8) {
          let iconbackwhitet: Map<any, any> = new Map([[String.fromCharCode(109,95,55,51,95,100,117,97,108,105,110,112,117,116,0),String.fromCharCode(103,95,49,52,95,107,101,121,115,116,111,114,101,0)], [String.fromCharCode(109,105,110,105,109,105,122,101,100,95,105,95,49,48,48,0),String.fromCharCode(118,95,50,51,95,100,101,115,99,112,114,105,112,116,105,111,110,0)]]);
          let imagesp = 2.0;
          let langA = String.fromCharCode(118,105,115,117,97,108,108,121,95,115,95,56,57,0);
          let iconsharefriendsa = true;
          let libjsinspectorZ = String.fromCharCode(110,95,55,54,95,112,97,115,116,101,98,111,97,114,100,0);
         nativeC += (parseFloat(`${(iconsharefriendsa ? 2 : 2)}`));
         iconbackwhitet.set(langA, parseInt(`${imagesp}`) >> (Math.min(langA.length, 5)));
         imagesp -= (parseFloat(`${String.fromCharCode(117,0) == langA ? iconbackwhitet.size : langA.length}`));
         iconsharefriendsa = iconbackwhitet.size < 58 || langA.length < 58;
         libjsinspectorZ = "1";
         break;
      }
         stringsI += parseInt(`${stringsI}`) >> (Math.min(Math.abs(parseInt(`${nativeC}`)), 1));
      baseT.set(`${stats8}`, 1 * macauN.length);
      break;
   }
        StatusBar.setHidden(false);

      stylep += `${2 & penaltyQ.length}`;
      iconbelli = new Map([[penaltyQ, (String.fromCharCode(53,0) == penaltyQ ? penaltyQ.length : (emptyQ ? 4 : 4))]]);
   for (let z = 0; z < 2; z++) {
      dependencies7 &= 2 + parseInt(`${notificationV}`);
   }

        lockOrientation(devicesOrientation);
      }
    };

    const onToggleFullScreen = useCallback(() => {
       let basketballhometeamr = String.fromCharCode(101,118,97,108,117,97,116,111,114,95,115,95,55,55,0);
    let popupO = 5.0;
    let upgradeQ: Array<any> = [891, 664];
    let selectedK = 4.0;
    let leagueX = String.fromCharCode(100,111,119,110,108,111,97,100,101,100,95,52,95,52,0);
    let imagewatchlives = 0.0;
    let detailsk = String.fromCharCode(97,109,114,119,98,95,121,95,53,51,0);
    let loginsuccesso = String.fromCharCode(115,104,97,114,105,110,103,95,98,95,55,51,0);
    let info1 = String.fromCharCode(111,112,101,110,101,100,95,52,95,50,52,0);
    let backgroundw = String.fromCharCode(117,95,53,48,95,115,111,97,108,108,111,99,0);
      basketballhometeamr += `${backgroundw.length + parseInt(`${imagewatchlives}`)}`;
   while (!basketballhometeamr.endsWith(`${upgradeQ.length}`)) {
       let w_hashV = 0;
       let roundR = String.fromCharCode(121,95,50,54,95,109,97,114,107,117,112,0);
       let historyW = true;
       let libswscaleY = String.fromCharCode(99,97,112,116,105,111,110,95,104,95,55,48,0);
       let selecteda = String.fromCharCode(103,108,105,116,99,104,95,115,95,56,49,0);
       let lessk = String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,115,95,115,95,49,57,0);
          let mimoL = String.fromCharCode(110,111,110,110,117,108,108,95,98,95,50,57,0);
          let layoutQ: Array<any> = [String.fromCharCode(112,95,54,57,95,111,118,101,114,114,105,100,101,110,0), String.fromCharCode(100,101,97,99,116,95,57,95,56,51,0)];
         libswscaleY += `${layoutQ.length}`;
         mimoL = `${1 / (Math.max(7, mimoL.length))}`;
         layoutQ.push(mimoL.length);
      while (roundR == String.fromCharCode(72,0)) {
         libswscaleY = `${libswscaleY.length}`;
         break;
      }
         w_hashV /= Math.max((roundR == String.fromCharCode(115,0) ? (historyW ? 3 : 4) : roundR.length), 1);
          let plusg = String.fromCharCode(99,95,49,48,95,101,100,105,116,0);
         w_hashV ^= ((historyW ? 4 : 1) - 1);
         plusg = `${plusg.length}`;
      for (let x = 0; x < 3; x++) {
         selecteda += `${libswscaleY.length}`;
      }
      for (let z = 0; z < 2; z++) {
         roundR += `${3 & roundR.length}`;
      }
      while ((libswscaleY.length + 1) == 4) {
         w_hashV -= 3;
         break;
      }
         roundR = `${selecteda.length >> (Math.min(Math.abs(2), 4))}`;
      for (let x = 0; x < 2; x++) {
         selecteda = `${roundR.length / (Math.max(lessk.length, 3))}`;
      }
          let trashD = String.fromCharCode(103,101,110,101,114,97,108,105,122,101,100,116,105,109,101,95,113,95,49,52,0);
         selecteda = `${lessk.length & roundR.length}`;
         trashD += `${trashD.length - trashD.length}`;
       let flipperR = String.fromCharCode(109,110,99,95,98,95,52,48,0);
      while (5 >= flipperR.length) {
         lessk = `${2 + selecteda.length}`;
         break;
      }
         w_hashV += lessk.length;
      let gradlew3 = flipperR.length <= 8390216;
      do {
         flipperR = `${lessk.length}`;
         if (gradlew3) {
            break;
         }
      } while (gradlew3 && (libswscaleY.length >= 3));
      basketballhometeamr = `${(String.fromCharCode(72,0) == leagueX ? leagueX.length : roundR.length)}`;
      break;
   }
   if (backgroundw.length <= 4 && loginsuccesso != String.fromCharCode(121,0)) {
       let bufferq: Array<any> = [252, 825, 416];
          let imagewatchlive9 = 2.0;
          let panglec = false;
         bufferq = [bufferq.length >> (Math.min(Math.abs(2), 1))];
         imagewatchlive9 -= parseFloat(`${parseInt(`${imagewatchlive9}`) ^ 3}`);
         panglec = !panglec;
      let emojiheartM = bufferq.length >= 4934673;
      do {
          let custom0: Array<any> = [253, 509, 328];
         bufferq.push(3);
         custom0 = [1];
         if (emojiheartM) {
            break;
         }
      } while (emojiheartM && (bufferq.length <= 2));
         bufferq = [3];
      loginsuccesso += `${bufferq.length}`;
   }

      if (
        appOrientation === "LANDSCAPE-LEFT" ||
        appOrientation === "LANDSCAPE-RIGHT"
      ) {

   if ((upgradeQ.length % 5) == 4 || 5 == (detailsk.length % (Math.max(7, upgradeQ.length)))) {
       let cornerkickd: Array<any> = [267, 980];
         cornerkickd = [cornerkickd.length - cornerkickd.length];
      while (3 <= (cornerkickd.length + 5) && (5 + cornerkickd.length) <= 2) {
         cornerkickd.push(cornerkickd.length % (Math.max(cornerkickd.length, 7)));
         break;
      }
      if (1 <= (cornerkickd.length ^ cornerkickd.length) || (cornerkickd.length ^ 1) <= 5) {
          let buttons = String.fromCharCode(115,99,116,101,95,121,95,50,50,0);
          let otherB = true;
          let configureA = String.fromCharCode(101,102,102,101,99,116,105,118,101,95,105,95,54,55,0);
          let libreactperfloggerjniX = String.fromCharCode(111,95,49,48,95,100,101,105,110,105,116,0);
          let dependencies2 = 1.0;
         cornerkickd = [(3 & (otherB ? 4 : 3))];
         buttons = `${1 - configureA.length}`;
         otherB = libreactperfloggerjniX.includes(`${dependencies2}`);
         configureA += `${buttons.length * configureA.length}`;
         libreactperfloggerjniX = "1";
         dependencies2 /= Math.max(4, 2 - parseInt(`${dependencies2}`));
      }
      upgradeQ = [3 & upgradeQ.length];
   }
      popupO /= Math.max(parseFloat(`${leagueX.length}`), 5);
   let topic5 = String.fromCharCode(108,48,117,118,0) == basketballhometeamr;
   do {
      basketballhometeamr = `${parseInt(`${selectedK}`) << (Math.min(5, Math.abs(2)))}`;
      if (topic5) {
         break;
      }
   } while ((basketballhometeamr.includes(`${loginsuccesso.length}`)) && topic5);
        lockOrientation("PORTRAIT");

   let baseI = 5151039 >= backgroundw.length;
   do {
       let runtimeT = 1;
      while (runtimeT <= runtimeT) {
         runtimeT *= 3;
         break;
      }
         runtimeT |= runtimeT ^ runtimeT;
      while (2 == (runtimeT + 4) && (runtimeT + runtimeT) == 4) {
         runtimeT /= Math.max(2, 1);
         break;
      }
      backgroundw = `${parseInt(`${popupO}`) + 2}`;
      if (baseI) {
         break;
      }
   } while (baseI && ((imagewatchlives * backgroundw.length) == 4.7));
   for (let h = 0; h < 2; h++) {
       let runtimeschedulerE = 3.0;
       let iconsharefriends7: Array<any> = [10, 50];
       let bggradientV: Array<any> = [173, 943];
       let libglogN: Array<any> = [708, 355];
       let mbnative8 = String.fromCharCode(97,118,111,112,116,105,111,110,115,95,50,95,57,57,0);
         libglogN.push(mbnative8.length & libglogN.length);
      if (1 < bggradientV.length) {
          let shootyesgoals = String.fromCharCode(115,112,105,108,108,95,49,95,54,56,0);
          let tailT = String.fromCharCode(100,101,116,101,114,109,105,110,105,115,116,105,99,95,49,95,51,57,0);
         libglogN.push(3 / (Math.max(9, mbnative8.length)));
         shootyesgoals = `${(String.fromCharCode(111,0) == shootyesgoals ? tailT.length : shootyesgoals.length)}`;
         tailT = `${shootyesgoals.length}`;
      }
      while (4 >= (mbnative8.length - parseInt(`${runtimeschedulerE}`)) && 4 >= (parseInt(`${runtimeschedulerE}`) - mbnative8.length)) {
         mbnative8 += `${mbnative8.length / 3}`;
         break;
      }
      if (!libglogN.includes(runtimeschedulerE)) {
         libglogN = [mbnative8.length];
      }
      let libloggerc = mbnative8 == String.fromCharCode(56,56,104,118,105,0);
      do {
         mbnative8 = `${bggradientV.length}`;
         if (libloggerc) {
            break;
         }
      } while (((parseInt(`${runtimeschedulerE}`) / (Math.max(mbnative8.length, 2))) >= 3 || (parseInt(`${runtimeschedulerE}`) / (Math.max(mbnative8.length, 2))) >= 3) && libloggerc);
          let service7: Array<any> = [934, 526, 940];
          let pointi = 0.0;
          let mathl = String.fromCharCode(112,97,115,116,101,100,95,116,95,52,56,0);
         bggradientV.push(bggradientV.length % (Math.max(3, 4)));
         service7 = [parseInt(`${pointi}`) - 3];
         pointi -= parseFloat(`${1 - parseInt(`${pointi}`)}`);
         mathl = `${parseInt(`${pointi}`)}`;
      let libfbjnib = 8096977.0 <= runtimeschedulerE;
      do {
          let fullscreenmaxd = 5.0;
         runtimeschedulerE /= Math.max(1, parseFloat(`${parseInt(`${runtimeschedulerE}`) / (Math.max(5, iconsharefriends7.length))}`));
         fullscreenmaxd += parseInt(`${fullscreenmaxd}`) | parseInt(`${fullscreenmaxd}`);
         if (libfbjnib) {
            break;
         }
      } while (libfbjnib && (parseFloat(`${libglogN.length}`) < runtimeschedulerE));
         runtimeschedulerE -= parseFloat(`${1 ^ iconsharefriends7.length}`);
         iconsharefriends7 = [2];
         iconsharefriends7.push(bggradientV.length % (Math.max(iconsharefriends7.length, 2)));
      if (bggradientV.length == 4) {
         mbnative8 = `${(mbnative8 == String.fromCharCode(71,0) ? libglogN.length : mbnative8.length)}`;
      }
      while (mbnative8.length >= 4) {
          let qaagD: Map<any, any> = new Map([[String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,56,95,53,52,0),29], [String.fromCharCode(110,95,54,56,95,114,108,109,0),180]]);
          let fullw: Array<any> = [878, 564, 179];
          let resend9 = String.fromCharCode(104,95,49,53,95,99,109,121,107,0);
          let optionsr = String.fromCharCode(109,95,57,95,101,110,103,105,110,101,0);
         iconsharefriends7.push(optionsr.length);
         qaagD.set(resend9, resend9.length % 2);
         fullw = [fullw.length];
         optionsr += `${qaagD.size}`;
         break;
      }
      if (mbnative8.length < libglogN.length) {
         libglogN = [mbnative8.length + 1];
      }
      for (let e = 0; e < 2; e++) {
          let othermatchdetailbgt = String.fromCharCode(118,95,54,51,95,116,114,97,110,115,102,111,114,109,0);
          let agreementZ = 1;
         mbnative8 = "1";
         othermatchdetailbgt = `${othermatchdetailbgt.length}`;
         agreementZ /= Math.max((othermatchdetailbgt == String.fromCharCode(103,0) ? othermatchdetailbgt.length : agreementZ), 1);
      }
      for (let u = 0; u < 1; u++) {
         iconsharefriends7 = [iconsharefriends7.length >> (Math.min(Math.abs(3), 5))];
      }
      popupO += parseFloat(`${leagueX.length >> (Math.min(Math.abs(2), 4))}`);
   }
       let selectionz: Map<any, any> = new Map([[String.fromCharCode(111,102,102,101,115,116,95,110,95,54,49,0),987], [String.fromCharCode(113,95,49,48,48,95,101,120,116,101,114,105,111,114,0),488], [String.fromCharCode(97,95,50,48,95,115,104,111,119,0),642]]);
       let clubF = String.fromCharCode(100,95,57,50,95,109,111,100,101,109,0);
       let fastforwardT = 2.0;
          let profilepicw = String.fromCharCode(98,95,51,51,95,103,97,105,110,115,0);
         selectionz = new Map([[profilepicw, profilepicw.length]]);
         fastforwardT -= parseFloat(`${clubF.length}`);
      let livenodatabgimgh = fastforwardT <= 5165588.0;
      do {
         fastforwardT += parseFloat(`${parseInt(`${fastforwardT}`)}`);
         if (livenodatabgimgh) {
            break;
         }
      } while (livenodatabgimgh && (2.16 > (parseFloat(`${selectionz.size}`) - fastforwardT) && 5 > (4 - selectionz.size)));
         clubF += "1";
          let release_2r: Map<any, any> = new Map([[String.fromCharCode(116,95,52,51,95,115,116,101,97,108,0),450], [String.fromCharCode(108,95,52,51,95,119,97,108,107,105,110,103,0),254]]);
         clubF += "1";
         release_2r = new Map([[`${release_2r.size}`, release_2r.size]]);
          let privatechatbgk: Map<any, any> = new Map([[String.fromCharCode(106,95,54,50,95,105,110,116,101,114,118,97,108,115,0),505], [String.fromCharCode(121,95,54,50,95,99,111,110,116,111,117,114,115,0),192], [String.fromCharCode(111,95,55,49,95,100,101,115,101,108,101,99,116,105,111,110,0),655]]);
         fastforwardT /= Math.max(3, parseFloat(`${privatechatbgk.size}`));
         fastforwardT /= Math.max(parseFloat(`${selectionz.size}`), 3);
      let upgrade3 = selectionz.size <= 9133227;
      do {
         selectionz = new Map([[`${selectionz.size}`, 2 & parseInt(`${fastforwardT}`)]]);
         if (upgrade3) {
            break;
         }
      } while (((fastforwardT - parseFloat(`${selectionz.size}`)) > 2.93 || 5 > (selectionz.size ^ 4)) && upgrade3);
          let whistleR = String.fromCharCode(109,115,103,115,95,119,95,57,56,0);
          let nalyticsO = 4.0;
         clubF += "1";
         whistleR += `${whistleR.length + parseInt(`${nalyticsO}`)}`;
         nalyticsO /= Math.max(4, parseFloat(`${whistleR.length}`));
      basketballhometeamr = `${detailsk.length}`;
        setIsFullScreen(false);

       let successq = 4;
      while ((successq & 5) >= 2) {
         successq &= successq;
         break;
      }
      let regengc = successq <= 9113892;
      do {
         successq += successq;
         if (regengc) {
            break;
         }
      } while (regengc && (3 < (successq & successq) || (successq & successq) < 3));
      for (let t = 0; t < 3; t++) {
         successq += 3;
      }
      detailsk = `${parseInt(`${popupO}`) % 1}`;
   while ((detailsk.length & 3) < 3) {
      popupO *= parseFloat(`${upgradeQ.length}`);
      break;
   }
      upgradeQ = [info1.length + basketballhometeamr.length];
        

   if (leagueX.includes(`${popupO}`)) {
      leagueX = `${upgradeQ.length}`;
   }
   if (5 > info1.length) {
       let interstitialT = String.fromCharCode(106,100,104,117,102,102,95,113,95,51,51,0);
       let result7 = String.fromCharCode(110,98,105,116,115,95,112,95,53,57,0);
      let componentregistryg = String.fromCharCode(112,116,55,106,113,53,112,55,111,107,0) == interstitialT;
      do {
         interstitialT = `${result7.length + 1}`;
         if (componentregistryg) {
            break;
         }
      } while (componentregistryg && (result7.length == 2));
         interstitialT = "3";
       let weibo5: Map<any, any> = new Map([[String.fromCharCode(99,97,114,101,116,95,122,95,49,53,0),String.fromCharCode(101,120,99,108,95,122,95,50,56,0)], [String.fromCharCode(98,95,57,48,95,119,101,105,103,104,116,120,0),String.fromCharCode(120,95,50,95,97,108,97,114,109,0)], [String.fromCharCode(120,95,54,50,95,114,102,102,116,98,0),String.fromCharCode(115,105,109,112,108,105,102,121,95,53,95,56,50,0)]]);
       let package_u0w: Map<any, any> = new Map([[String.fromCharCode(113,95,55,50,95,102,114,97,109,101,110,117,109,0),919], [String.fromCharCode(104,117,102,102,121,117,118,101,110,99,100,115,112,95,99,95,49,49,0),776], [String.fromCharCode(112,105,110,110,105,110,103,95,50,95,56,54,0),254]]);
       let weatherk = String.fromCharCode(105,116,101,114,97,116,111,114,95,107,95,56,51,0);
       let orangetick5 = String.fromCharCode(112,108,97,121,101,100,95,99,95,57,55,0);
      let iconwatchw = String.fromCharCode(109,109,105,0) == interstitialT;
      do {
         interstitialT = `${3 % (Math.max(6, weatherk.length))}`;
         if (iconwatchw) {
            break;
         }
      } while ((weatherk.endsWith(`${interstitialT.length}`)) && iconwatchw);
         result7 += `${weibo5.size}`;
      upgradeQ = [2];
   }
      imagewatchlives /= Math.max(detailsk.length, 3);
        StatusBar.setHidden(false);

       let libreactnativejni4 = false;
       let arrowupO = String.fromCharCode(107,95,50,57,95,99,111,115,116,115,0);
       let predictionactivej = 0.0;
         arrowupO = `${arrowupO.length}`;
          let teamt: Map<any, any> = new Map([[String.fromCharCode(111,102,102,95,117,95,52,48,0),true ], [String.fromCharCode(122,95,53,50,95,116,105,109,101,114,115,0),true ], [String.fromCharCode(98,95,55,55,95,100,101,99,111,100,101,0),false ]]);
          let iconcloseG = 1.0;
          let largebrightnesss = 1.0;
         libreactnativejni4 = arrowupO.length <= 42 || !libreactnativejni4;
         teamt.set(`${iconcloseG}`, 3);
         iconcloseG -= 3 >> (Math.min(Math.abs(parseInt(`${iconcloseG}`)), 1));
         largebrightnesss *= parseFloat(`${teamt.size}`);
      if (!libreactnativejni4) {
          let statistics9 = true;
         arrowupO += `${((statistics9 ? 4 : 2) / 2)}`;
      }
      for (let u = 0; u < 2; u++) {
         arrowupO = `${(arrowupO == String.fromCharCode(113,0) ? parseInt(`${predictionactivej}`) : arrowupO.length)}`;
      }
         arrowupO += `${parseInt(`${predictionactivej}`) * arrowupO.length}`;
      while (4 <= arrowupO.length) {
         libreactnativejni4 = 47 < arrowupO.length;
         break;
      }
         libreactnativejni4 = predictionactivej <= 23.45;
         arrowupO += `${((libreactnativejni4 ? 4 : 5))}`;
      while (2.15 >= (predictionactivej * 4.57) && (arrowupO.length * parseInt(`${predictionactivej}`)) >= 4) {
          let fullscreenmaxA = String.fromCharCode(102,95,57,52,95,121,98,121,114,0);
          let middlebrightnesst = String.fromCharCode(117,112,100,97,116,97,98,108,101,95,122,95,52,55,0);
          let selectedE: Array<any> = [125, 86, 997];
          let shirtm: Array<any> = [46, 181];
         arrowupO = `${selectedE.length}`;
         fullscreenmaxA += "3";
         middlebrightnesst = `${1 & fullscreenmaxA.length}`;
         selectedE.push(fullscreenmaxA.length);
         shirtm.push(fullscreenmaxA.length);
         break;
      }
      backgroundw += `${leagueX.length}`;
   let x_centerW = loginsuccesso.length <= 5608970;
   do {
      loginsuccesso = `${upgradeQ.length - info1.length}`;
      if (x_centerW) {
         break;
      }
   } while ((1 > backgroundw.length) && x_centerW);
   while (!loginsuccesso.includes(`${popupO}`)) {
      popupO += parseFloat(`${parseInt(`${imagewatchlives}`) / (Math.max(detailsk.length, 5))}`);
      break;
   }

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      } else {

       let action1 = 1.0;
       let plust = String.fromCharCode(104,95,53,56,95,97,108,108,111,119,105,0);
       let minimizez = false;
         minimizez = plust.length > 5;
          let backiconmaske: Map<any, any> = new Map([[String.fromCharCode(108,105,110,109,97,116,104,95,52,95,54,55,0),true ], [String.fromCharCode(98,111,117,110,100,97,114,121,95,48,95,49,53,0),false ], [String.fromCharCode(99,114,105,116,105,99,97,108,95,51,95,50,48,0),false ]]);
          let whistleorangeb = String.fromCharCode(120,95,54,56,95,100,111,119,110,108,105,110,107,0);
          let iconnewchatn = String.fromCharCode(110,95,57,52,95,118,105,100,101,111,115,116,114,101,97,109,0);
         action1 += (String.fromCharCode(50,0) == whistleorangeb ? backiconmaske.size : whistleorangeb.length);
         backiconmaske = new Map([[iconnewchatn, iconnewchatn.length]]);
         plust += `${parseInt(`${action1}`) >> (Math.min(1, Math.abs(3)))}`;
         plust += `${((minimizez ? 3 : 2) - parseInt(`${action1}`))}`;
      for (let f = 0; f < 3; f++) {
         action1 /= Math.max(1, ((minimizez ? 1 : 3)));
      }
      for (let g = 0; g < 2; g++) {
          let profileframel = 4;
          let index8 = true;
          let scrollviewU = String.fromCharCode(112,95,56,52,95,104,105,103,104,108,105,103,104,116,115,0);
          let updatesT: Map<any, any> = new Map([[String.fromCharCode(107,95,57,54,0),true ], [String.fromCharCode(120,95,49,48,48,95,103,111,112,115,0),false ], [String.fromCharCode(116,95,49,57,95,105,110,116,101,114,97,99,116,105,118,101,108,108,121,0),false ]]);
         plust += `${(1 & (index8 ? 4 : 5))}`;
         profileframel ^= 2 * scrollviewU.length;
         index8 = String.fromCharCode(56,0) == scrollviewU || 74 >= updatesT.size;
         updatesT.set(`${profileframel}`, profileframel - 3);
      }
       let defaultprofilepicn = String.fromCharCode(99,95,52,52,95,99,111,110,115,116,114,117,99,116,105,118,101,0);
       let defaultplayerimgA = String.fromCharCode(99,109,97,107,101,95,115,95,57,49,0);
       let vietnam6 = String.fromCharCode(113,95,55,54,95,112,111,111,112,0);
          let alertb: Array<any> = [253, 529];
          let umengV = 0.0;
         action1 /= Math.max(4, alertb.length + 3);
         alertb.push(2);
         umengV += parseFloat(`${parseInt(`${umengV}`)}`);
      loginsuccesso += "2";
      selectedK += 3 / (Math.max(9, upgradeQ.length));
      selectedK -= leagueX.length;
        lockOrientation("LANDSCAPE");

      upgradeQ.push(loginsuccesso.length);
   while (4 >= (basketballhometeamr.length % (Math.max(2, upgradeQ.length)))) {
       let auto_2jA = String.fromCharCode(115,99,104,117,110,99,107,95,54,95,49,55,0);
       let mapbufferE = String.fromCharCode(121,95,57,50,95,112,111,115,116,102,105,108,116,101,114,0);
       let mapbuffer7 = 4.0;
       let hometeamfieldc = 0;
         auto_2jA = `${hometeamfieldc / (Math.max(mapbufferE.length, 6))}`;
         hometeamfieldc |= 3;
          let overlayZ = String.fromCharCode(112,101,101,114,115,95,104,95,53,50,0);
         mapbufferE = `${hometeamfieldc & mapbufferE.length}`;
         overlayZ = `${overlayZ.length}`;
          let volumeO = true;
          let watche = String.fromCharCode(97,117,116,111,105,110,99,114,101,109,101,110,116,95,121,95,55,54,0);
          let kinit_2qW = String.fromCharCode(115,105,108,107,95,51,95,51,0);
         mapbufferE = `${1 << (Math.min(5, kinit_2qW.length))}`;
         volumeO = watche.length == 32;
         watche += `${((volumeO ? 3 : 5) ^ watche.length)}`;
         kinit_2qW += `${(String.fromCharCode(76,0) == watche ? (volumeO ? 2 : 3) : watche.length)}`;
          let libjsinspectorS = String.fromCharCode(100,95,51,55,95,100,114,105,118,101,114,115,0);
         mapbufferE = `${mapbufferE.length}`;
         libjsinspectorS += `${libjsinspectorS.length % (Math.max(6, libjsinspectorS.length))}`;
      if (mapbufferE != String.fromCharCode(108,0) || auto_2jA.length >= 3) {
         auto_2jA += `${(String.fromCharCode(50,0) == auto_2jA ? hometeamfieldc : auto_2jA.length)}`;
      }
         auto_2jA += "1";
          let binddatasv: Map<any, any> = new Map([[String.fromCharCode(115,95,50,56,95,111,116,104,101,114,119,105,115,101,0),924], [String.fromCharCode(115,111,102,116,95,122,95,54,50,0),977]]);
         mapbuffer7 -= mapbufferE.length;
         binddatasv = new Map([[`${binddatasv.size}`, 3 | binddatasv.size]]);
      let containerG = mapbuffer7 <= 5418784.0;
      do {
          let thumbnail6: Array<any> = [String.fromCharCode(121,95,51,54,95,109,117,110,109,97,112,0), String.fromCharCode(116,95,57,56,95,97,116,116,97,99,104,101,100,0)];
          let temperatureL = 1.0;
          let userv: Map<any, any> = new Map([[String.fromCharCode(115,95,56,50,95,115,116,101,112,119,105,115,101,0),String.fromCharCode(108,105,98,114,97,114,121,95,108,95,53,0)], [String.fromCharCode(98,95,52,54,95,104,97,112,113,97,0),String.fromCharCode(107,105,99,107,95,52,95,52,52,0)], [String.fromCharCode(114,95,57,55,95,99,97,116,97,112,117,108,116,0),String.fromCharCode(113,95,55,57,95,119,97,116,99,104,101,100,0)]]);
          let textlayoutmanagerj = String.fromCharCode(101,120,99,108,117,100,101,100,95,49,95,50,56,0);
          let release_pf: Array<any> = [518, 232, 509];
         mapbuffer7 -= parseInt(`${temperatureL}`);
         thumbnail6.push(2);
         userv.set(textlayoutmanagerj, release_pf.length);
         textlayoutmanagerj += `${1 >> (Math.min(4, textlayoutmanagerj.length))}`;
         release_pf.push(thumbnail6.length);
         if (containerG) {
            break;
         }
      } while (containerG && (4 < (hometeamfieldc << (Math.min(Math.abs(5), 5)))));
      for (let g = 0; g < 3; g++) {
          let gpay3 = 1.0;
          let libreactnativebloba = String.fromCharCode(102,95,49,49,95,98,114,111,107,101,110,0);
          let arrowselectdownr = String.fromCharCode(106,95,54,95,110,97,116,105,118,101,0);
          let modalH: Map<any, any> = new Map([[String.fromCharCode(109,95,56,56,95,107,101,121,112,97,116,104,0),true ], [String.fromCharCode(114,111,116,111,95,49,95,53,53,0),true ], [String.fromCharCode(115,105,103,105,100,95,108,95,50,55,0),true ]]);
         mapbuffer7 -= modalH.size / 2;
         gpay3 += 3;
         libreactnativebloba += `${parseInt(`${gpay3}`) / (Math.max(arrowselectdownr.length, 7))}`;
         arrowselectdownr += `${1 & arrowselectdownr.length}`;
         modalH.set(libreactnativebloba, libreactnativebloba.length);
      }
      if (!mapbufferE.endsWith(`${mapbuffer7}`)) {
          let castingl = 2;
         mapbuffer7 += (mapbufferE == String.fromCharCode(75,0) ? mapbufferE.length : parseInt(`${mapbuffer7}`));
         castingl /= Math.max(castingl, 5);
      }
          let textlayoutmanagerD = String.fromCharCode(100,95,54,54,95,115,99,114,97,112,101,0);
          let policy1 = 3.0;
         auto_2jA += `${2 >> (Math.min(Math.abs(hometeamfieldc), 5))}`;
         textlayoutmanagerD = `${textlayoutmanagerD.length}`;
         policy1 /= Math.max(3, textlayoutmanagerD.length);
      upgradeQ = [3];
      break;
   }
      selectedK *= parseInt(`${popupO}`);
        setIsFullScreen(true);

      leagueX += `${(String.fromCharCode(74,0) == basketballhometeamr ? basketballhometeamr.length : parseInt(`${selectedK}`))}`;
   if (3 == (info1.length * parseInt(`${imagewatchlives}`)) && (3 << (Math.min(1, info1.length))) == 4) {
       let backn = String.fromCharCode(101,95,49,49,95,109,117,114,109,117,114,0);
       let show7 = String.fromCharCode(120,112,116,97,98,108,101,95,97,95,51,57,0);
       let footballtrophyY = String.fromCharCode(109,105,120,101,114,95,109,95,52,56,0);
       let graphu = String.fromCharCode(117,110,111,114,100,101,114,101,100,95,97,95,50,0);
       let productP = 5;
         productP -= footballtrophyY.length + backn.length;
      let becomeo = footballtrophyY == String.fromCharCode(51,116,116,113,0);
      do {
         footballtrophyY = `${show7.length}`;
         if (becomeo) {
            break;
         }
      } while ((graphu.length < 5) && becomeo);
      if (show7.length >= 4) {
          let temperatureW = 4.0;
          let iconmoreo = String.fromCharCode(122,114,101,111,114,100,101,114,95,111,95,49,0);
          let dangerw = 0.0;
          let profileactiveu: Array<any> = [String.fromCharCode(106,95,51,52,95,109,97,99,104,105,110,101,0), String.fromCharCode(114,95,55,52,95,99,111,100,101,100,0)];
          let memberships: Array<any> = [429, 10, 449];
         backn = `${footballtrophyY.length}`;
         temperatureW -= memberships.length << (Math.min(5, Math.abs(parseInt(`${dangerw}`))));
         iconmoreo += `${memberships.length >> (Math.min(5, Math.abs(parseInt(`${temperatureW}`))))}`;
         dangerw /= Math.max(1, (iconmoreo == String.fromCharCode(120,0) ? iconmoreo.length : parseInt(`${dangerw}`)));
         profileactiveu = [memberships.length >> (Math.min(4, Math.abs(parseInt(`${temperatureW}`))))];
      }
      while (backn.endsWith(`${footballtrophyY.length}`)) {
         footballtrophyY += "1";
         break;
      }
         show7 += "1";
      let dycreatorp = String.fromCharCode(52,95,50,48,54,104,53,0) == footballtrophyY;
      do {
         footballtrophyY += `${backn.length}`;
         if (dycreatorp) {
            break;
         }
      } while ((3 <= graphu.length) && dycreatorp);
       let projectp: Map<any, any> = new Map([[String.fromCharCode(106,95,54,52,0),744], [String.fromCharCode(112,116,111,110,95,102,95,53,48,0),531], [String.fromCharCode(109,97,116,116,101,95,48,95,52,56,0),777]]);
         graphu = `${3 * productP}`;
      while (show7.startsWith(`${projectp.size}`)) {
          let minivodB: Array<any> = [411, 854, 626];
          let manifest8 = 0;
          let macauo = true;
         show7 += `${graphu.length}`;
         minivodB = [3];
         manifest8 |= minivodB.length;
         macauo = macauo || manifest8 > 93;
         break;
      }
      while (footballtrophyY.endsWith(`${show7.length}`)) {
         footballtrophyY += `${projectp.size << (Math.min(graphu.length, 1))}`;
         break;
      }
      while ((1 | productP) > 4 && 1 > (productP | show7.length)) {
         productP |= graphu.length;
         break;
      }
         projectp.set(backn, backn.length / (Math.max(2, 9)));
       let clearQ = String.fromCharCode(99,97,115,116,101,100,95,49,95,56,51,0);
         backn += `${graphu.length}`;
      let const_xpB = productP <= 5823290;
      do {
          let dnewarchdefaultsj = String.fromCharCode(118,95,55,53,95,116,101,120,116,109,111,118,115,117,98,0);
         productP %= Math.max(2, 3);
         dnewarchdefaultsj = `${dnewarchdefaultsj.length}`;
         if (const_xpB) {
            break;
         }
      } while ((graphu.startsWith(`${productP}`)) && const_xpB);
      info1 = `${info1.length}`;
   }
       let runtimeschedulerh = String.fromCharCode(102,117,110,99,115,95,122,95,51,54,0);
       let libjsiM = 2.0;
       let long_d1 = true;
      let imagesg = libjsiM <= 8398409.0;
      do {
         libjsiM += runtimeschedulerh.length;
         if (imagesg) {
            break;
         }
      } while ((runtimeschedulerh.length <= 1) && imagesg);
      let hookss = long_d1 ? !long_d1 : long_d1;
      do {
         long_d1 = runtimeschedulerh.includes(`${libjsiM}`);
         if (hookss) {
            break;
         }
      } while (hookss && ((3.43 * libjsiM) > 5.53));
         long_d1 = libjsiM <= 6.83 || runtimeschedulerh.length <= 90;
       let basev = String.fromCharCode(109,105,114,114,111,114,105,110,103,95,114,95,57,48,0);
       let promotionm = String.fromCharCode(97,117,116,111,100,101,108,101,116,101,95,108,95,52,51,0);
          let iconviewergifM = 3.0;
          let airbnbstarselectedC: Map<any, any> = new Map([[String.fromCharCode(120,112,114,118,95,105,95,52,48,0),134], [String.fromCharCode(106,95,56,95,112,116,105,111,110,115,0),430]]);
          let arrowselectdowns = 0;
         libjsiM *= airbnbstarselectedC.size;
         iconviewergifM -= arrowselectdowns;
         airbnbstarselectedC = new Map([[`${iconviewergifM}`, parseInt(`${iconviewergifM}`)]]);
         arrowselectdowns |= parseInt(`${iconviewergifM}`) << (Math.min(1, Math.abs(1)));
         basev = `${parseInt(`${libjsiM}`) >> (Math.min(basev.length, 1))}`;
       let friendss = 3;
         promotionm = `${promotionm.length}`;
      let basketball8 = friendss <= 8674394;
      do {
          let tempnodatagifV = 3;
          let short_3c3: Map<any, any> = new Map([[String.fromCharCode(97,98,108,95,48,95,57,50,0),565], [String.fromCharCode(113,95,56,51,95,101,116,105,109,101,0),878], [String.fromCharCode(105,95,51,52,95,102,111,110,116,115,0),587]]);
          let playlistv = 3.0;
          let libavutilR = 0.0;
          let plusk = false;
         friendss &= parseInt(`${playlistv}`);
         tempnodatagifV <<= Math.min(parseInt(`${Math.abs((parseInt(`${libavutilR}`) >> (Math.min(5, Math.abs((plusk ? 1 : 4))))))}`), 1);
         short_3c3.set(`${plusk}`, 2 & parseInt(`${libavutilR}`));
         playlistv /= Math.max(1 - tempnodatagifV, 5);
         if (basketball8) {
            break;
         }
      } while (((friendss << (Math.min(Math.abs(3), 3))) < 5) && basketball8);
      backgroundw += `${(String.fromCharCode(83,0) == leagueX ? detailsk.length : leagueX.length)}`;
        

   if (5.17 < selectedK) {
       let whiteanimationlive0 = 3.0;
       let mounting_: Map<any, any> = new Map([[String.fromCharCode(98,101,110,99,104,115,95,54,95,50,54,0),826], [String.fromCharCode(117,114,97,110,100,111,109,95,49,95,49,54,0),741]]);
       let awayteamfield8 = true;
       let iconarrowrightf = 2.0;
      let register_f1G = awayteamfield8 ? !awayteamfield8 : awayteamfield8;
      do {
          let overlayD = 4;
          let hejiN = String.fromCharCode(104,95,54,48,95,99,111,110,116,101,110,116,108,101,115,115,0);
          let halfl: Array<any> = [String.fromCharCode(105,95,53,95,107,109,115,0), String.fromCharCode(116,101,114,109,115,101,116,95,108,95,49,56,0), String.fromCharCode(99,95,49,48,48,95,98,105,108,105,110,101,97,114,0)];
         awayteamfield8 = String.fromCharCode(89,0) == hejiN && 2 == overlayD;
         overlayD /= Math.max(halfl.length * halfl.length, 1);
         hejiN = `${halfl.length}`;
         if (register_f1G) {
            break;
         }
      } while ((mounting_.size <= 4) && register_f1G);
       let iconpipexpandf = 1;
       let suboutb = 3;
         suboutb %= Math.max(suboutb << (Math.min(Math.abs(1), 5)), 2);
       let libruntimeexecutorz: Map<any, any> = new Map([[String.fromCharCode(99,95,53,54,95,119,114,105,116,101,99,111,112,121,0),String.fromCharCode(106,111,105,110,95,98,95,55,51,0)], [String.fromCharCode(114,95,55,57,95,109,101,114,103,101,97,98,108,101,0),String.fromCharCode(97,100,114,109,95,106,95,50,56,0)]]);
       let imageactionliveg: Map<any, any> = new Map([[String.fromCharCode(108,95,56,54,95,105,110,115,101,114,116,105,111,110,0),93], [String.fromCharCode(116,95,53,49,95,102,108,101,120,102,101,99,0),335]]);
       let robotow: Array<any> = [21, 896];
       let shrunkG: Array<any> = [979, 790];
         libruntimeexecutorz.set(`${imageactionliveg.size}`, libruntimeexecutorz.size);
      while (!awayteamfield8 || (iconpipexpandf >> (Math.min(Math.abs(1), 4))) == 4) {
         awayteamfield8 = (parseInt(`${iconarrowrightf}`) * mounting_.size) >= 10;
         break;
      }
         mounting_ = new Map([[`${whiteanimationlive0}`, parseInt(`${whiteanimationlive0}`)]]);
      while (4.23 >= whiteanimationlive0) {
          let middlesoundy = String.fromCharCode(105,95,54,56,95,108,111,110,103,105,116,117,100,101,0);
          let selectedp = true;
          let issub_ = String.fromCharCode(111,95,48,95,111,116,111,102,0);
          let pnewsC = String.fromCharCode(99,111,110,116,97,105,110,101,100,95,99,95,50,50,0);
         whiteanimationlive0 -= ((selectedp ? 1 : 4) % (Math.max(8, parseInt(`${iconarrowrightf}`))));
         middlesoundy = `${middlesoundy.length & issub_.length}`;
         selectedp = pnewsC == middlesoundy;
         issub_ = `${3 | middlesoundy.length}`;
         pnewsC += "2";
         break;
      }
         mounting_ = new Map([[`${imageactionliveg.size}`, 2 % (Math.max(1, mounting_.size))]]);
      let reactnativeultimatelistvieww = mounting_.size >= 6082436;
      do {
         mounting_ = new Map([[`${robotow.length}`, robotow.length]]);
         if (reactnativeultimatelistvieww) {
            break;
         }
      } while (reactnativeultimatelistvieww && (5 < mounting_.size));
          let goalB = String.fromCharCode(116,104,117,109,98,115,95,103,95,49,48,48,0);
          let iconmore5: Array<any> = [972, 570, 805];
          let awayteamfieldY = 5;
         imageactionliveg.set(`${libruntimeexecutorz.size}`, 1);
         goalB += `${goalB.length >> (Math.min(Math.abs(1), 5))}`;
         iconmore5 = [iconmore5.length * goalB.length];
         awayteamfieldY >>= Math.min(4, Math.abs(awayteamfieldY));
      leagueX = `${backgroundw.length * 3}`;
   }
   while (backgroundw.length == 1) {
      backgroundw += "3";
      break;
   }
   if (!basketballhometeamr.startsWith(`${info1.length}`)) {
      basketballhometeamr += `${1 << (Math.min(3, backgroundw.length))}`;
   }
        StatusBar.setHidden(true);

      loginsuccesso = `${backgroundw.length * 2}`;
       let questicon2 = 5.0;
       let scheduler: Map<any, any> = new Map([[String.fromCharCode(98,101,99,111,109,101,95,114,95,51,49,0),String.fromCharCode(100,101,116,97,105,108,101,100,95,122,95,55,53,0)], [String.fromCharCode(106,117,109,112,95,54,95,54,51,0),String.fromCharCode(97,95,54,53,95,99,111,114,112,117,115,0)]]);
          let weatherI = String.fromCharCode(113,95,57,95,122,101,114,111,0);
          let pathY = String.fromCharCode(114,101,115,112,95,107,95,56,49,0);
         scheduler = new Map([[`${scheduler.size}`, weatherI.length]]);
         weatherI += `${pathY.length * 3}`;
         pathY += `${pathY.length}`;
       let mbnativem = String.fromCharCode(114,101,102,108,101,99,116,95,97,95,50,50,0);
         scheduler.set(`${questicon2}`, 3);
          let runtime_ = String.fromCharCode(115,101,110,100,95,51,95,53,54,0);
         scheduler = new Map([[`${scheduler.size}`, scheduler.size << (Math.min(runtime_.length, 2))]]);
      let yellowtoredL = 7955593 <= scheduler.size;
      do {
          let neonR = String.fromCharCode(120,95,52,55,95,100,105,115,112,108,97,121,115,0);
         scheduler.set(mbnativem, parseInt(`${questicon2}`));
         neonR = `${neonR.length >> (Math.min(Math.abs(3), 1))}`;
         if (yellowtoredL) {
            break;
         }
      } while (yellowtoredL && ((scheduler.size & 3) > 4 || 5 > (3 & scheduler.size)));
      if (scheduler.get(`${questicon2}`) == null) {
          let context4 = String.fromCharCode(110,95,57,95,115,105,110,113,105,0);
          let internetK = String.fromCharCode(99,111,109,112,108,101,116,105,111,110,115,95,48,95,51,51,0);
          let headerY: Array<any> = [381, 797];
          let activityu = 0;
          let othermatchdetailbgtC = 3.0;
         questicon2 /= Math.max(parseFloat(`${headerY.length}`), 1);
         context4 = `${parseInt(`${othermatchdetailbgtC}`) % (Math.max(3, 3))}`;
         internetK += "2";
         headerY = [1 - activityu];
         activityu >>= Math.min(2, Math.abs(activityu));
         othermatchdetailbgtC -= 3;
      }
      imagewatchlives += leagueX.length % (Math.max(3, 1));
      selectedK -= 3 & detailsk.length;

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
       let clock4 = String.fromCharCode(112,97,114,115,101,95,50,95,49,53,0);
    let dropdowne = String.fromCharCode(115,109,111,111,116,104,108,121,95,108,95,56,56,0);
    let dplusa = String.fromCharCode(100,95,55,54,95,97,114,101,110,97,115,0);
    let moonL = String.fromCharCode(121,98,108,111,99,107,95,110,95,50,55,0);
    let mutedN = 4.0;
    let skipS = 4.0;
    let mbjscommona = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,95,51,95,51,54,0);
    let xvodV = 5.0;
    let redirectW: Map<any, any> = new Map([[String.fromCharCode(111,95,54,50,95,100,101,102,101,114,0),true ], [String.fromCharCode(112,95,50,52,95,108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,0),false ], [String.fromCharCode(112,111,108,121,108,105,110,101,95,114,95,49,57,0),false ]]);
    let tcopy_4W = String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,95,118,95,50,48,0);
    let malaysia5 = String.fromCharCode(105,95,50,49,95,103,101,110,102,105,108,101,115,0);
    let arrowrightf = 5;
    let acceptedf = 5.0;
   for (let t = 0; t < 2; t++) {
      xvodV -= 3;
   }
   while (3 > (2 >> (Math.min(2, moonL.length))) || 4 > (moonL.length >> (Math.min(Math.abs(2), 2)))) {
      moonL = `${clock4.length}`;
      break;
   }
      dropdowne += `${3 % (Math.max(7, dplusa.length))}`;
       let mbsplashB: Array<any> = [531, 337];
       let iconfeedbackV: Array<any> = [909, 5];
      if (mbsplashB.length < 3) {
         iconfeedbackV.push(3);
      }
      if ((mbsplashB.length | 4) > 4) {
         mbsplashB.push(2 - iconfeedbackV.length);
      }
      let alertt = iconfeedbackV.length <= 6073470;
      do {
         iconfeedbackV.push(3 << (Math.min(4, mbsplashB.length)));
         if (alertt) {
            break;
         }
      } while (((iconfeedbackV.length ^ 5) <= 1) && alertt);
       let floatingK = 3;
      for (let i = 0; i < 1; i++) {
         floatingK >>= Math.min(4, Math.abs(floatingK | iconfeedbackV.length));
      }
         floatingK >>= Math.min(3, Math.abs(mbsplashB.length << (Math.min(Math.abs(2), 3))));
      xvodV *= (dplusa == String.fromCharCode(53,0) ? dplusa.length : parseInt(`${mutedN}`));
   while (!dropdowne.endsWith(`${dplusa.length}`)) {
      dplusa = `${(String.fromCharCode(110,0) == dropdowne ? dropdowne.length : dplusa.length)}`;
      break;
   }
       let register__c = 2.0;
       let taiwanp: Map<any, any> = new Map([[String.fromCharCode(98,95,56,49,95,97,119,97,114,101,0),true ], [String.fromCharCode(122,95,53,51,95,112,101,114,115,105,115,116,101,100,0),true ]]);
      for (let m = 0; m < 3; m++) {
          let textlayoutmanager2 = true;
          let assistn = String.fromCharCode(102,95,52,95,103,109,111,99,107,0);
          let nendy = 2.0;
          let d_manager6 = 0;
          let subtextO = 3;
         taiwanp.set(`${register__c}`, 2);
         textlayoutmanager2 = assistn.length > 91 && textlayoutmanager2;
         assistn = `${2 << (Math.min(Math.abs(parseInt(`${nendy}`)), 4))}`;
         nendy -= (parseInt(`${nendy}`) - (textlayoutmanager2 ? 3 : 3));
         d_manager6 ^= assistn.length;
         subtextO <<= Math.min(Math.abs(2), 4);
      }
      if (Array.from(taiwanp.values()).includes(register__c)) {
          let classes1 = 5;
          let zhengpianv = String.fromCharCode(100,105,115,112,108,97,99,101,109,101,110,116,95,54,95,53,52,0);
          let penaltygoalu: Map<any, any> = new Map([[String.fromCharCode(112,111,115,105,116,105,111,110,95,114,95,49,56,0),162], [String.fromCharCode(121,95,50,50,95,112,114,101,115,115,105,110,103,0),250]]);
          let untickU = true;
          let bodany = String.fromCharCode(117,95,56,57,95,115,99,114,111,108,108,97,98,108,101,0);
         register__c += zhengpianv.length & penaltygoalu.size;
         classes1 %= Math.max(classes1, 4);
         zhengpianv = `${((untickU ? 4 : 1) >> (Math.min(Math.abs(classes1), 5)))}`;
         penaltygoalu = new Map([[`${classes1}`, ((untickU ? 2 : 2) - classes1)]]);
         bodany += `${classes1}`;
      }
      for (let y = 0; y < 3; y++) {
         register__c += taiwanp.size ^ parseInt(`${register__c}`);
      }
         taiwanp = new Map([[`${taiwanp.size}`, 3 & parseInt(`${register__c}`)]]);
      let iconsettingT = 8083772.0 <= register__c;
      do {
          let volumeA = String.fromCharCode(112,97,103,105,110,97,116,105,111,110,95,110,95,56,57,0);
          let pressuref = 1;
          let playlisti: Array<any> = [String.fromCharCode(103,97,116,104,101,114,95,108,95,55,49,0), String.fromCharCode(103,95,50,51,95,97,99,102,105,108,116,101,114,0)];
          let starB = true;
         register__c *= parseInt(`${register__c}`) << (Math.min(Math.abs(2), 2));
         volumeA = `${((starB ? 1 : 4) >> (Math.min(Math.abs(3), 5)))}`;
         pressuref /= Math.max(3, playlisti.length / (Math.max(volumeA.length, 3)));
         playlisti.push(pressuref);
         starB = 8 > pressuref || starB;
         if (iconsettingT) {
            break;
         }
      } while (iconsettingT && (parseInt(`${register__c}`) < taiwanp.size));
      while ((taiwanp.size - register__c) == 5.90 && (5.90 - register__c) == 3.30) {
         taiwanp.set(`${register__c}`, 1);
         break;
      }
      clock4 += `${1 ^ taiwanp.size}`;
   for (let n = 0; n < 1; n++) {
      clock4 = `${parseInt(`${mutedN}`) | 1}`;
   }
   let mbbannerJ = mbjscommona.length >= 7399336;
   do {
       let predictionactivep = 4;
       let indicatorK = 4.0;
         predictionactivep += predictionactivep / 3;
      for (let k = 0; k < 2; k++) {
         predictionactivep += 2 << (Math.min(Math.abs(predictionactivep), 3));
      }
       let iconcurrentmatchJ = String.fromCharCode(109,95,53,48,95,107,101,101,112,105,110,103,0);
       let streamingq = String.fromCharCode(99,95,51,52,95,115,108,105,99,101,0);
          let iconmegaphonev = String.fromCharCode(104,95,49,57,95,115,112,97,109,0);
          let handlerQ = String.fromCharCode(97,114,109,99,97,112,95,97,95,49,48,48,0);
          let upgraden = 0.0;
         indicatorK += (parseFloat(`${String.fromCharCode(97,0) == iconmegaphonev ? iconmegaphonev.length : predictionactivep}`));
         handlerQ = `${handlerQ.length / (Math.max(1, 5))}`;
         upgraden += parseFloat(`${parseInt(`${upgraden}`)}`);
         predictionactivep += predictionactivep | parseInt(`${indicatorK}`);
         predictionactivep &= predictionactivep / 2;
      mbjscommona = `${predictionactivep}`;
      if (mbbannerJ) {
         break;
      }
   } while (((parseInt(`${xvodV}`) - mbjscommona.length) < 2 || 2.2 < (xvodV - 3.62)) && mbbannerJ);
   let philippines4 = dropdowne.length <= 7908888;
   do {
       let middlebrightnessj = String.fromCharCode(112,95,57,53,95,104,101,118,99,0);
       let templateprocessorJ = String.fromCharCode(100,95,48,95,103,108,111,98,97,108,115,0);
         templateprocessorJ = `${templateprocessorJ.length | middlebrightnessj.length}`;
         templateprocessorJ += `${middlebrightnessj.length}`;
      dropdowne += `${middlebrightnessj.length}`;
      if (philippines4) {
         break;
      }
   } while (philippines4 && (parseInt(`${skipS}`) < dropdowne.length));
      mbjscommona = `${parseInt(`${skipS}`) & 2}`;
   while (xvodV >= 1.0) {
      xvodV /= Math.max(redirectW.size + moonL.length, 1);
      break;
   }
      xvodV -= 3;
       let unselected7 = 1.0;
       let runtimeA = 3.0;
       let unreadD = true;
       let ajaxB = true;
         runtimeA /= Math.max((parseFloat(`${parseInt(`${runtimeA}`) + (unreadD ? 5 : 5)}`)), 1);
         ajaxB = 2.26 == unselected7 || !ajaxB;
      if (ajaxB || unreadD) {
         unreadD = !unreadD;
      }
      let mapbufferY = unreadD ? !unreadD : unreadD;
      do {
         unreadD = !unreadD || unselected7 < 62.69;
         if (mapbufferY) {
            break;
         }
      } while ((!unreadD) && mapbufferY);
         unreadD = (ajaxB ? !unreadD : !ajaxB);
      skipS -= parseFloat(`${parseInt(`${skipS}`)}`);
   let libavfilterG = 7583303.0 <= mutedN;
   do {
       let defaultpredictionprofileW = 3.0;
       let javaJ = 3;
       let assistw = String.fromCharCode(100,95,51,95,121,117,108,101,0);
       let smallsoundl = 4.0;
       let yellowanimationlivei: Map<any, any> = new Map([[String.fromCharCode(115,99,97,110,116,97,98,108,101,95,54,95,51,0),String.fromCharCode(108,111,111,112,102,105,108,116,101,114,95,111,95,56,54,0)], [String.fromCharCode(105,115,116,97,112,95,100,95,49,54,0),String.fromCharCode(97,95,52,48,95,104,114,116,102,0)], [String.fromCharCode(121,97,100,105,102,95,121,95,56,49,0),String.fromCharCode(112,95,52,55,95,97,115,115,105,103,110,101,100,0)]]);
         javaJ <<= Math.min(Math.abs(parseInt(`${defaultpredictionprofileW}`)), 4);
          let downZ: Array<any> = [434, 734, 846];
          let utilsH = String.fromCharCode(121,95,55,52,95,99,111,99,103,0);
         yellowanimationlivei.set(`${smallsoundl}`, 1 >> (Math.min(5, utilsH.length)));
         downZ.push(downZ.length % 1);
         utilsH += `${downZ.length}`;
          let libjsinspectorP = String.fromCharCode(116,95,57,53,95,118,115,97,100,0);
          let coreu = 3;
          let contextF = 1.0;
         smallsoundl += (parseFloat(`${libjsinspectorP == String.fromCharCode(113,0) ? parseInt(`${defaultpredictionprofileW}`) : libjsinspectorP.length}`));
         coreu += 3;
         contextF += parseInt(`${contextF}`) << (Math.min(4, Math.abs(coreu)));
         defaultpredictionprofileW -= 2 - assistw.length;
      let eyeclosei = 6049648 <= javaJ;
      do {
         javaJ >>= Math.min(5, Math.abs(assistw.length & parseInt(`${smallsoundl}`)));
         if (eyeclosei) {
            break;
         }
      } while (eyeclosei && (3.89 == (defaultpredictionprofileW / 5.6)));
      let assistD = String.fromCharCode(118,115,115,0) == assistw;
      do {
         assistw = "2";
         if (assistD) {
            break;
         }
      } while (assistD && (!assistw.endsWith(`${yellowanimationlivei.size}`)));
          let spect = 3;
          let libjsijniprofilerf: Array<any> = [979, 365, 850];
         smallsoundl -= parseFloat(`${libjsijniprofilerf.length >> (Math.min(assistw.length, 1))}`);
         spect &= spect - spect;
         libjsijniprofilerf = [spect * spect];
          let selected5 = String.fromCharCode(105,95,52,95,116,105,108,116,0);
          let selectionz: Map<any, any> = new Map([[String.fromCharCode(106,95,51,49,95,104,97,110,100,108,101,0),253], [String.fromCharCode(105,95,49,52,95,115,117,98,112,97,116,104,115,0),778], [String.fromCharCode(116,95,52,54,95,99,111,111,114,100,105,110,97,116,101,0),461]]);
          let iconeyem = 1.0;
         assistw += `${parseInt(`${smallsoundl}`) >> (Math.min(selected5.length, 4))}`;
         selected5 = `${parseInt(`${iconeyem}`)}`;
         selectionz = new Map([[`${selectionz.size}`, parseInt(`${iconeyem}`)]]);
      while (3 <= assistw.length) {
          let downloadera = String.fromCharCode(107,95,51,48,95,99,111,100,101,98,108,111,99,107,115,0);
          let iconcalendarC = 2.0;
          let homeactiveQ = 2.0;
         assistw = `${javaJ}`;
         downloadera += `${downloadera.length - parseInt(`${iconcalendarC}`)}`;
         iconcalendarC /= Math.max(1, 3);
         homeactiveQ /= Math.max(2, parseFloat(`${downloadera.length}`));
         break;
      }
      if (5.72 == (4.46 * defaultpredictionprofileW) || 3.95 == (4.46 * defaultpredictionprofileW)) {
          let nativeex4 = 1.0;
          let release_or = String.fromCharCode(111,95,52,54,95,99,104,97,114,99,111,110,118,0);
         yellowanimationlivei.set(`${smallsoundl}`, parseInt(`${smallsoundl}`) >> (Math.min(release_or.length, 5)));
         nativeex4 *= parseFloat(`${parseInt(`${nativeex4}`) ^ 2}`);
         release_or += `${parseInt(`${nativeex4}`)}`;
      }
      while (assistw.length <= yellowanimationlivei.size) {
          let goalO = 1.0;
          let skipx = 1;
          let javay: Map<any, any> = new Map([[String.fromCharCode(101,110,115,117,114,101,100,95,102,95,54,51,0),964], [String.fromCharCode(116,111,115,115,95,49,95,50,51,0),652]]);
          let backgroundp = String.fromCharCode(105,95,56,95,105,113,109,102,0);
          let flipperM = String.fromCharCode(111,95,56,54,95,115,112,101,101,120,0);
         assistw += `${javay.size + parseInt(`${defaultpredictionprofileW}`)}`;
         goalO += backgroundp.length;
         skipx += 2 ^ parseInt(`${goalO}`);
         javay = new Map([[`${skipx}`, 2 - skipx]]);
         backgroundp = `${skipx + 3}`;
         flipperM += `${skipx >> (Math.min(Math.abs(3), 4))}`;
         break;
      }
      let orangeclockz = String.fromCharCode(50,115,121,0) == assistw;
      do {
         assistw += `${javaJ}`;
         if (orangeclockz) {
            break;
         }
      } while (((3 & assistw.length) < 1) && orangeclockz);
      if ((javaJ - defaultpredictionprofileW) >= 3.9) {
         javaJ >>= Math.min(Math.abs(1), 2);
      }
         smallsoundl -= parseFloat(`${parseInt(`${defaultpredictionprofileW}`)}`);
       let checkboxn: Array<any> = [265, 105];
       let become5: Array<any> = [379, 686];
      mutedN *= parseFloat(`${3}`);
      if (libavfilterG) {
         break;
      }
   } while (((parseInt(`${mutedN}`) - dropdowne.length) >= 1) && libavfilterG);
   while (4 <= clock4.length || dropdowne != String.fromCharCode(88,0)) {
      clock4 += "3";
      break;
   }
   if (3 < (dplusa.length | 4) && (parseInt(`${skipS}`) / 4) < 5) {
      dplusa += `${parseInt(`${mutedN}`)}`;
   }
   while (3 == (mbjscommona.length / 4) && (parseInt(`${xvodV}`) + mbjscommona.length) == 4) {
       let defaultprofilepicT = String.fromCharCode(105,95,50,49,95,101,120,112,97,110,100,97,98,108,101,0);
       let positionfieldI = 3.0;
         positionfieldI += (defaultprofilepicT == String.fromCharCode(83,0) ? parseInt(`${positionfieldI}`) : defaultprofilepicT.length);
      while (!defaultprofilepicT.endsWith(`${positionfieldI}`)) {
          let phonesharej = String.fromCharCode(112,95,52,57,95,100,105,115,99,111,118,101,114,0);
          let baselineM = false;
          let verticalU: Array<any> = [String.fromCharCode(115,112,101,108,108,95,57,95,48,0), String.fromCharCode(108,105,109,105,116,95,109,95,49,54,0), String.fromCharCode(113,95,49,48,95,101,120,108,117,100,101,100,0)];
          let fullscreenmax6 = String.fromCharCode(100,95,49,54,95,105,110,97,99,116,105,118,101,0);
          let window_82T: Map<any, any> = new Map([[String.fromCharCode(106,95,51,54,95,100,105,118,109,111,100,0),714], [String.fromCharCode(110,117,108,108,105,102,95,51,95,50,0),681], [String.fromCharCode(104,95,53,48,95,116,119,111,0),721]]);
         defaultprofilepicT = "2";
         phonesharej += `${verticalU.length | fullscreenmax6.length}`;
         baselineM = String.fromCharCode(103,0) == fullscreenmax6;
         verticalU = [1];
         window_82T = new Map([[`${baselineM}`, 2 - phonesharej.length]]);
         break;
      }
       let iconcurrentmatchw = true;
         positionfieldI *= 3 | parseInt(`${positionfieldI}`);
         defaultprofilepicT = `${(3 / (Math.max(6, (iconcurrentmatchw ? 2 : 2))))}`;
      let searchbar7 = 5102041.0 >= positionfieldI;
      do {
         positionfieldI *= 2;
         if (searchbar7) {
            break;
         }
      } while (searchbar7 && (5.67 < positionfieldI));
      mbjscommona += `${parseInt(`${mutedN}`)}`;
      break;
   }
   while ((skipS / (Math.max(2.37, 5))) >= 3.21) {
       let crownI = String.fromCharCode(103,95,51,48,95,99,104,101,99,107,109,97,114,107,0);
       let defaultbasketballbg0 = String.fromCharCode(111,110,116,114,111,108,95,107,95,50,0);
       let homeactive6 = true;
       let footballfieldF = String.fromCharCode(102,108,117,115,104,95,120,95,50,53,0);
       let clubx = 1.0;
      for (let t = 0; t < 3; t++) {
         crownI += `${parseInt(`${clubx}`)}`;
      }
          let settingi = String.fromCharCode(110,95,57,50,95,103,100,105,103,114,97,98,0);
          let belln = 3;
          let tempg = String.fromCharCode(121,95,49,51,95,114,97,110,100,111,109,0);
         defaultbasketballbg0 += `${belln * 1}`;
         settingi += `${(String.fromCharCode(100,0) == settingi ? tempg.length : settingi.length)}`;
         belln *= 2 ^ tempg.length;
         homeactive6 = !homeactive6;
       let full1 = 5.0;
       let modityY = 0.0;
         footballfieldF += `${parseInt(`${modityY}`)}`;
      let iconcloseB = 7680332 >= defaultbasketballbg0.length;
      do {
         defaultbasketballbg0 += `${parseInt(`${full1}`)}`;
         if (iconcloseB) {
            break;
         }
      } while (iconcloseB && (4 > crownI.length));
      let ccdfbdabcabbbedbM = crownI == String.fromCharCode(55,106,51,115,100,122,106,101,109,0);
      do {
          let gesturel: Map<any, any> = new Map([[String.fromCharCode(97,100,118,97,110,99,101,95,120,95,55,50,0),922], [String.fromCharCode(109,105,115,109,97,116,99,104,95,103,95,54,57,0),721]]);
          let pagination8 = 3.0;
          let commonh = 4;
         crownI = `${defaultbasketballbg0.length}`;
         gesturel = new Map([[`${pagination8}`, 1]]);
         pagination8 /= Math.max(parseFloat(`${commonh}`), 1);
         commonh *= commonh % 3;
         if (ccdfbdabcabbbedbM) {
            break;
         }
      } while ((1 > crownI.length) && ccdfbdabcabbbedbM);
         crownI += `${defaultbasketballbg0.length}`;
      let reactnativejs5 = crownI == String.fromCharCode(53,105,104,56,121,0);
      do {
          let pathw = 2.0;
          let arrowupG = 5.0;
          let iconlogoutp: Array<any> = [286, 835];
          let whiteanimationlivev = 2;
         crownI = `${crownI.length}`;
         pathw *= parseInt(`${arrowupG}`) + iconlogoutp.length;
         arrowupG /= Math.max(2, 1);
         iconlogoutp = [whiteanimationlivev << (Math.min(1, Math.abs(2)))];
         whiteanimationlivev ^= parseInt(`${arrowupG}`);
         if (reactnativejs5) {
            break;
         }
      } while ((crownI.includes(`${homeactive6}`)) && reactnativejs5);
      let defaultteamJ = homeactive6 ? !homeactive6 : homeactive6;
      do {
         homeactive6 = footballfieldF.length == 42;
         if (defaultteamJ) {
            break;
         }
      } while ((homeactive6) && defaultteamJ);
      for (let l = 0; l < 2; l++) {
         full1 /= Math.max(2, 3 % (Math.max(6, parseInt(`${modityY}`))));
      }
      if (clubx <= 4.55) {
         crownI = `${(String.fromCharCode(116,0) == footballfieldF ? (homeactive6 ? 4 : 4) : footballfieldF.length)}`;
      }
      let muted1 = footballfieldF == String.fromCharCode(56,110,52,120,0);
      do {
         footballfieldF = `${(String.fromCharCode(111,0) == defaultbasketballbg0 ? defaultbasketballbg0.length : footballfieldF.length)}`;
         if (muted1) {
            break;
         }
      } while ((footballfieldF.length <= modityY) && muted1);
         defaultbasketballbg0 += `${(crownI == String.fromCharCode(120,0) ? crownI.length : defaultbasketballbg0.length)}`;
         modityY += 1;
      skipS /= Math.max(parseFloat(`${mbjscommona.length ^ dropdowne.length}`), 2);
      break;
   }
   if (1.19 <= skipS) {
      dplusa = `${(String.fromCharCode(51,0) == dropdowne ? dropdowne.length : parseInt(`${skipS}`))}`;
   }
   let searchx = dplusa == String.fromCharCode(56,104,109,111,116,56,104,0);
   do {
      dplusa += `${parseInt(`${xvodV}`) - malaysia5.length}`;
      if (searchx) {
         break;
      }
   } while ((mutedN <= 5.20) && searchx);

        console.log("Error!", err, time);
      }
    };

    const onSeekGesture = (time: number) => {
      if (currentTime < time) {
        setSeekDirection("configChat");
      } else {
        setSeekDirection("dycreatorSuboutBoot");
      }
      onSeek(time);
    };

    const onVideoProgessing = (data: any) => {
      setCurrentTime(data.currentTime);

      try {
        currentTimeRef.current = data.currentTime;
      } catch (err) {
       let defaultteamA = String.fromCharCode(108,95,55,50,95,114,101,102,112,97,115,115,0);
    let orangedownarrow4 = true;
    let iconarrowrightblackF = String.fromCharCode(98,97,99,107,103,114,111,117,110,100,115,95,98,95,49,56,0);
    let weibom: Array<any> = [764, 443];
    let shootyesgoal8 = 4.0;
    let brightnessk = true;
    let foregroundY = true;
    let popupG: Map<any, any> = new Map([[String.fromCharCode(98,95,48,95,109,111,100,105,102,105,101,100,0),String.fromCharCode(116,95,55,50,95,115,111,108,118,101,114,0)], [String.fromCharCode(109,95,56,57,95,99,104,114,111,109,105,117,109,0),String.fromCharCode(107,95,56,49,95,112,114,101,101,109,112,116,105,118,101,0)], [String.fromCharCode(99,111,112,121,105,110,103,95,121,95,57,57,0),String.fromCharCode(108,95,49,95,109,106,112,101,103,100,101,99,0)]]);
    let roundj = 0;
    let iconarrowrightorangec = true;
    let informationR = String.fromCharCode(117,95,57,56,95,98,105,110,97,114,121,0);
    let mapbuffera: Array<any> = [String.fromCharCode(98,111,111,115,116,95,119,95,57,0), String.fromCharCode(99,111,109,112,97,116,105,98,105,108,105,116,121,95,51,95,53,50,0)];
    let backward0 = String.fromCharCode(115,95,57,51,95,116,111,111,108,98,97,114,0);
   let componentregistryS = String.fromCharCode(106,57,50,118,103,0) == defaultteamA;
   do {
       let iconclosewhitebgt: Array<any> = [String.fromCharCode(98,108,117,114,95,57,95,49,50,0), String.fromCharCode(110,95,56,53,95,103,101,116,104,111,115,116,98,121,110,97,109,101,0), String.fromCharCode(115,97,108,115,97,95,118,95,53,57,0)];
      let filed = 8010696 >= iconclosewhitebgt.length;
      do {
         iconclosewhitebgt.push(3);
         if (filed) {
            break;
         }
      } while (((5 & iconclosewhitebgt.length) > 3) && filed);
      for (let c = 0; c < 2; c++) {
          let storez = String.fromCharCode(114,101,117,112,108,111,97,100,101,100,95,56,95,49,49,0);
          let overlayM = String.fromCharCode(105,115,122,101,114,111,95,55,95,49,53,0);
          let descX = String.fromCharCode(102,95,54,54,95,115,116,97,116,105,115,116,105,99,0);
          let arrowselectdownV = 4.0;
         iconclosewhitebgt = [parseInt(`${arrowselectdownV}`) / (Math.max(6, overlayM.length))];
         storez = `${(String.fromCharCode(106,0) == descX ? storez.length : descX.length)}`;
         overlayM += `${descX.length}`;
         arrowselectdownV /= Math.max(3, 1);
      }
      while ((iconclosewhitebgt.length & iconclosewhitebgt.length) > 2 || (2 & iconclosewhitebgt.length) > 5) {
          let runtimeC = String.fromCharCode(118,95,53,53,95,99,111,109,109,117,110,105,99,97,116,105,111,110,0);
          let fast_ = 1.0;
         iconclosewhitebgt.push((String.fromCharCode(55,0) == runtimeC ? runtimeC.length : parseInt(`${fast_}`)));
         break;
      }
      defaultteamA += "3";
      if (componentregistryS) {
         break;
      }
   } while (componentregistryS && (weibom.length >= 2));
      informationR = `${roundj << (Math.min(5, Math.abs(3)))}`;
      brightnessk = !brightnessk;
   while (shootyesgoal8 == 1.35) {
       let smallH = 4;
       let searchbard: Array<any> = [276, 264, 26];
       let iconcloser = 3.0;
       let bggradient3 = 2.0;
          let iconnointernetK = String.fromCharCode(115,105,110,103,108,101,95,113,95,48,0);
         bggradient3 -= 3 & searchbard.length;
         iconnointernetK = `${iconnointernetK.length}`;
         searchbard.push(3);
      if (searchbard.length <= smallH) {
          let combined: Array<any> = [82, 673, 966];
          let halff: Array<any> = [534, 882, 590];
         searchbard = [smallH];
         combined.push(combined.length);
         halff.push(halff.length / 2);
      }
         searchbard = [searchbard.length];
          let orientationU = String.fromCharCode(117,95,51,50,95,115,116,111,114,109,98,105,114,100,0);
          let carouselO = 0.0;
         iconcloser *= parseFloat(`${parseInt(`${iconcloser}`) + orientationU.length}`);
         orientationU += `${parseInt(`${carouselO}`) ^ 2}`;
         carouselO -= 2;
       let upgradeC = String.fromCharCode(110,111,114,109,97,108,105,122,101,100,95,54,95,54,56,0);
       let dataT = String.fromCharCode(102,117,116,101,120,95,118,95,57,55,0);
         searchbard.push(parseInt(`${iconcloser}`) / (Math.max(2, 3)));
      for (let k = 0; k < 2; k++) {
          let entryV = String.fromCharCode(107,110,111,119,110,95,102,95,49,50,0);
         bggradient3 += 2;
         entryV += `${entryV.length >> (Math.min(Math.abs(1), 3))}`;
      }
          let yellowredcardB: Map<any, any> = new Map([[String.fromCharCode(110,95,50,55,95,101,120,99,108,0),false ], [String.fromCharCode(122,95,48,95,102,97,105,108,117,114,101,115,0),true ]]);
         searchbard = [dataT.length];
         yellowredcardB = new Map([[`${yellowredcardB.size}`, yellowredcardB.size]]);
          let componentsw: Map<any, any> = new Map([[String.fromCharCode(116,95,56,55,95,100,101,102,108,105,99,107,101,114,0),false ], [String.fromCharCode(114,97,112,104,105,99,115,95,57,95,56,54,0),false ]]);
          let settingsQ = String.fromCharCode(115,95,50,49,95,97,112,112,114,111,118,101,100,0);
          let baiduadsv: Map<any, any> = new Map([[String.fromCharCode(121,95,57,55,95,115,97,105,122,0),true ], [String.fromCharCode(111,95,56,51,95,118,116,97,103,0),true ]]);
         iconcloser *= parseFloat(`${settingsQ.length & 3}`);
         componentsw.set(`${baiduadsv.size}`, baiduadsv.size - componentsw.size);
         settingsQ += `${baiduadsv.size << (Math.min(Math.abs(componentsw.size), 4))}`;
      if ((1 & smallH) >= 3) {
          let predictions = String.fromCharCode(107,95,49,49,95,115,121,110,99,0);
          let becomeH = String.fromCharCode(114,95,55,95,112,114,111,98,105,110,103,0);
          let kick2 = 1.0;
         smallH |= searchbard.length | smallH;
         predictions = `${parseInt(`${kick2}`) / 2}`;
         becomeH = `${(String.fromCharCode(119,0) == becomeH ? predictions.length : becomeH.length)}`;
         kick2 -= parseFloat(`${predictions.length}`);
      }
         dataT += `${1 + smallH}`;
      shootyesgoal8 /= Math.max(3 - iconarrowrightblackF.length, 1);
      break;
   }
       let referrerb = 5.0;
      let typingT = 8845479.0 <= referrerb;
      do {
         referrerb -= parseFloat(`${parseInt(`${referrerb}`) / 1}`);
         if (typingT) {
            break;
         }
      } while (typingT && ((1.63 * referrerb) > 3.49 || (referrerb * referrerb) > 1.63));
         referrerb *= parseFloat(`${parseInt(`${referrerb}`) - 3}`);
      if (referrerb == referrerb) {
          let update_rO = String.fromCharCode(109,95,51,48,95,101,114,112,105,99,0);
         referrerb /= Math.max(parseFloat(`${parseInt(`${referrerb}`) / 1}`), 2);
         update_rO += `${update_rO.length}`;
      }
      shootyesgoal8 -= 3 | popupG.size;
   if (!defaultteamA.includes(`${orangedownarrow4}`)) {
      orangedownarrow4 = String.fromCharCode(98,0) == iconarrowrightblackF;
   }
      shootyesgoal8 -= (String.fromCharCode(99,0) == defaultteamA ? weibom.length : defaultteamA.length);
   for (let x = 0; x < 1; x++) {
      iconarrowrightorangec = informationR.length <= 28;
   }
      brightnessk = !brightnessk;
      brightnessk = weibom.length < 55 || 55 < popupG.size;
      informationR = `${((iconarrowrightorangec ? 2 : 2))}`;
       let notificationfilled8 = String.fromCharCode(120,95,55,53,95,105,110,100,97,116,97,0);
       let cricketT = 2.0;
          let largebrightnessm = true;
          let libreactnativeblobI = 0;
          let tempnodatagifi = 2.0;
         notificationfilled8 = `${(1 << (Math.min(5, Math.abs((largebrightnessm ? 4 : 3)))))}`;
         largebrightnessm = 34 > libreactnativeblobI;
         libreactnativeblobI >>= Math.min(Math.abs(parseInt(`${tempnodatagifi}`)), 4);
         tempnodatagifi -= parseFloat(`${libreactnativeblobI << (Math.min(3, Math.abs(1)))}`);
      while (!notificationfilled8.startsWith(`${cricketT}`)) {
         notificationfilled8 = `${2 >> (Math.min(3, Math.abs(parseInt(`${cricketT}`))))}`;
         break;
      }
          let videojsW = false;
          let videocommone: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,100,101,98,95,109,95,57,55,0),926], [String.fromCharCode(104,119,99,111,110,102,105,103,95,110,95,56,57,0),875], [String.fromCharCode(115,121,110,99,109,97,114,107,101,114,95,50,95,54,51,0),934]]);
         notificationfilled8 += "1";
         videojsW = videocommone.size > 37 || videojsW;
         videocommone.set(`${videojsW}`, 2);
      for (let n = 0; n < 1; n++) {
         cricketT += (notificationfilled8 == String.fromCharCode(100,0) ? parseInt(`${cricketT}`) : notificationfilled8.length);
      }
         cricketT /= Math.max(parseInt(`${cricketT}`) * 1, 5);
       let unimplementedviewt = String.fromCharCode(116,101,97,114,100,111,119,110,95,110,95,53,52,0);
      weibom = [(informationR == String.fromCharCode(88,0) ? informationR.length : parseInt(`${shootyesgoal8}`))];
   for (let e = 0; e < 2; e++) {
      shootyesgoal8 -= 2 << (Math.min(4, iconarrowrightblackF.length));
   }
   let crossh = iconarrowrightorangec ? !iconarrowrightorangec : iconarrowrightorangec;
   do {
      iconarrowrightorangec = (iconarrowrightblackF.length | mapbuffera.length) >= 13;
      if (crossh) {
         break;
      }
   } while ((!orangedownarrow4) && crossh);
   for (let h = 0; h < 1; h++) {
      orangedownarrow4 = (76 > ((!orangedownarrow4 ? 76 : mapbuffera.length) / (Math.max(9, mapbuffera.length))));
   }
   for (let v = 0; v < 2; v++) {
      informationR += `${2 << (Math.min(2, defaultteamA.length))}`;
   }
   for (let d = 0; d < 2; d++) {
       let vignetteE = String.fromCharCode(105,110,116,101,114,108,97,99,101,95,55,95,54,56,0);
       let owngoalA = String.fromCharCode(116,106,98,101,110,99,104,116,101,115,116,95,109,95,54,55,0);
       let arrowrightwithtailV: Array<any> = [577, 600];
       let borderlessf = String.fromCharCode(106,95,51,50,95,109,111,111,102,0);
       let livenodatabgimg0: Array<any> = [811, 29, 673];
      while (livenodatabgimg0.length <= 3) {
         vignetteE = "1";
         break;
      }
      for (let y = 0; y < 2; y++) {
         arrowrightwithtailV.push(borderlessf.length + livenodatabgimg0.length);
      }
      let dicelogo5 = livenodatabgimg0.length >= 9213308;
      do {
          let readH = String.fromCharCode(114,101,115,116,114,105,99,116,95,57,95,51,51,0);
          let cross5 = String.fromCharCode(108,105,109,105,116,101,100,95,99,95,56,56,0);
          let huaweif = 5;
          let basketballdetailsbgg = String.fromCharCode(115,116,111,119,95,111,95,55,51,0);
         livenodatabgimg0 = [vignetteE.length / 2];
         readH = "1";
         cross5 += `${basketballdetailsbgg.length}`;
         huaweif += basketballdetailsbgg.length;
         if (dicelogo5) {
            break;
         }
      } while ((3 > owngoalA.length) && dicelogo5);
         borderlessf = "3";
      let statisticsinactiveu = owngoalA == String.fromCharCode(101,97,51,107,120,105,50,111,0);
      do {
         owngoalA += `${borderlessf.length ^ 2}`;
         if (statisticsinactiveu) {
            break;
         }
      } while (statisticsinactiveu && ((4 | arrowrightwithtailV.length) > 4 || 4 > (owngoalA.length | 4)));
       let controlsh = String.fromCharCode(122,95,52,52,95,116,111,112,105,99,115,0);
       let fnewsshareN = String.fromCharCode(121,95,57,95,105,110,116,101,114,111,112,0);
      for (let z = 0; z < 1; z++) {
          let redcirclebgW: Array<any> = [452, 751, 657];
          let holderj = String.fromCharCode(119,95,49,49,95,109,118,99,111,117,110,116,0);
          let orientationh = String.fromCharCode(99,104,101,99,107,101,114,95,55,95,54,56,0);
         controlsh = `${livenodatabgimg0.length}`;
         redcirclebgW.push(2);
         holderj = "2";
         orientationh += `${(String.fromCharCode(101,0) == orientationh ? orientationh.length : holderj.length)}`;
      }
         owngoalA += `${livenodatabgimg0.length % (Math.max(2, 2))}`;
         livenodatabgimg0.push(livenodatabgimg0.length);
         fnewsshareN += `${fnewsshareN.length}`;
      for (let k = 0; k < 3; k++) {
          let reactnativeultimatelistviewT = 5;
          let type_2nN = false;
          let inewsJ: Map<any, any> = new Map([[String.fromCharCode(118,112,105,110,116,114,97,112,114,101,100,95,55,95,51,52,0),false ], [String.fromCharCode(114,95,56,56,0),true ]]);
         vignetteE = `${reactnativeultimatelistviewT}`;
         reactnativeultimatelistviewT *= inewsJ.size - 2;
         type_2nN = inewsJ.size <= 20;
      }
         controlsh += `${arrowrightwithtailV.length}`;
         arrowrightwithtailV = [owngoalA.length % (Math.max(1, vignetteE.length))];
      for (let o = 0; o < 2; o++) {
         livenodatabgimg0 = [controlsh.length * 2];
      }
          let icondefaultthumbnailY = 4.0;
         fnewsshareN = `${arrowrightwithtailV.length}`;
         icondefaultthumbnailY *= 2 * parseInt(`${icondefaultthumbnailY}`);
      defaultteamA = `${livenodatabgimg0.length}`;
   }
      mapbuffera.push(iconarrowrightblackF.length & 1);
       let bingC = String.fromCharCode(120,95,56,55,95,99,104,97,110,103,101,114,0);
       let iconsaveimage3 = String.fromCharCode(117,112,99,111,109,105,110,103,95,106,95,53,48,0);
      if (bingC.length == 4 && iconsaveimage3 == String.fromCharCode(71,0)) {
         iconsaveimage3 = "1";
      }
          let expireds = 0.0;
          let disconnected2 = String.fromCharCode(117,95,54,95,116,114,97,110,115,108,105,116,101,114,97,116,101,100,0);
         iconsaveimage3 += "1";
         expireds /= Math.max((disconnected2 == String.fromCharCode(121,0) ? disconnected2.length : parseInt(`${expireds}`)), 3);
      for (let b = 0; b < 3; b++) {
          let cancelc = String.fromCharCode(109,95,54,55,95,121,118,116,111,121,117,121,0);
         bingC += `${bingC.length}`;
         cancelc += `${cancelc.length}`;
      }
      for (let e = 0; e < 2; e++) {
         iconsaveimage3 += `${iconsaveimage3.length}`;
      }
      while (bingC.includes(`${iconsaveimage3.length}`)) {
         bingC = `${(iconsaveimage3 == String.fromCharCode(73,0) ? bingC.length : iconsaveimage3.length)}`;
         break;
      }
      while (bingC != String.fromCharCode(108,0) && iconsaveimage3.length == 1) {
          let disconnectedlogoR = 1;
          let reactnativejsh: Array<any> = [629, 928, 865];
          let routert = 0;
          let filed3 = 1.0;
         iconsaveimage3 += `${iconsaveimage3.length}`;
         disconnectedlogoR ^= reactnativejsh.length / 1;
         reactnativejsh = [3 - parseInt(`${filed3}`)];
         routert |= disconnectedlogoR & 1;
         filed3 *= disconnectedlogoR;
         break;
      }
      mapbuffera = [2 << (Math.min(3, weibom.length))];
   for (let k = 0; k < 2; k++) {
      defaultteamA += `${2 >> (Math.min(5, informationR.length))}`;
   }
      foregroundY = !foregroundY;
       let iconbellM = String.fromCharCode(108,105,98,118,111,114,98,105,115,95,106,95,52,49,0);
       let cornerkickQ = 2;
         cornerkickQ %= Math.max(iconbellM.length, 4);
      for (let j = 0; j < 3; j++) {
          let iconfeedbackr = 3.0;
          let liveendmodallogoa = 0;
          let yellowtored8 = String.fromCharCode(102,95,53,48,95,104,115,118,97,0);
         iconbellM = "2";
         iconfeedbackr -= 2 & liveendmodallogoa;
         liveendmodallogoa <<= Math.min(yellowtored8.length, 1);
         yellowtored8 += `${parseInt(`${iconfeedbackr}`)}`;
      }
      let orangedownarrowR = 6370582 <= cornerkickQ;
      do {
         cornerkickQ |= iconbellM.length;
         if (orangedownarrowR) {
            break;
         }
      } while ((5 < (iconbellM.length + 3) || 4 < (3 + iconbellM.length)) && orangedownarrowR);
       let action1 = String.fromCharCode(111,95,49,48,95,98,105,97,115,0);
         iconbellM = `${2 + cornerkickQ}`;
       let forward0 = String.fromCharCode(119,97,114,110,95,53,95,50,50,0);
      iconarrowrightblackF += `${weibom.length}`;
   while ((2 ^ popupG.size) < 2) {
      brightnessk = orangedownarrow4;
      break;
   }
   while (!iconarrowrightblackF.startsWith(`${shootyesgoal8}`)) {
      iconarrowrightblackF = `${informationR.length}`;
      break;
   }
      shootyesgoal8 *= (informationR.length ^ (brightnessk ? 1 : 5));
      orangedownarrow4 = defaultteamA.endsWith(`${orangedownarrow4}`);

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
       let defaultbasketballbgi = 4.0;
    let left3 = 2.0;
    let libreactnativejniR: Array<any> = [594, 986];
    let codegenB = true;
    let nterstitialO: Map<any, any> = new Map([[String.fromCharCode(118,105,101,119,95,50,95,54,54,0),43], [String.fromCharCode(107,95,57,55,95,102,105,108,116,101,114,0),598], [String.fromCharCode(106,95,55,55,95,115,111,117,110,100,115,0),13]]);
    let controlsr = String.fromCharCode(116,105,109,101,105,110,116,101,114,118,97,108,95,108,95,50,51,0);
    let traminie: Array<any> = [560, 332, 384];
    let photoh = 0.0;
    let activeX = String.fromCharCode(103,101,115,116,117,114,101,115,95,50,95,49,51,0);
    let chinaj = false;
    let mintegralf = String.fromCharCode(109,105,103,104,116,95,51,95,52,49,0);
    let libfbS = true;
   let default_hA = traminie.length >= 5102901;
   do {
       let iconwatch0 = String.fromCharCode(112,95,50,54,95,118,114,101,103,105,111,110,0);
      while (iconwatch0 != String.fromCharCode(118,0)) {
         iconwatch0 = `${(iconwatch0 == String.fromCharCode(67,0) ? iconwatch0.length : iconwatch0.length)}`;
         break;
      }
      for (let h = 0; h < 3; h++) {
         iconwatch0 = `${iconwatch0.length}`;
      }
         iconwatch0 = `${iconwatch0.length}`;
      traminie = [activeX.length];
      if (default_hA) {
         break;
      }
   } while (default_hA && (3 == traminie.length));
   for (let e = 0; e < 1; e++) {
       let dataR = 0;
       let binddatasI = false;
       let faviconA = 1.0;
       let indexw = String.fromCharCode(114,101,99,101,105,118,101,100,95,54,95,49,48,0);
       let upgradej = String.fromCharCode(116,114,97,105,108,101,114,95,117,95,54,53,0);
      if ((faviconA / 4.82) >= 5.11 && 2 >= (indexw.length / (Math.max(1, parseInt(`${faviconA}`))))) {
         faviconA /= Math.max(upgradej.length | indexw.length, 5);
      }
       let tickedK = String.fromCharCode(100,105,115,112,97,116,99,104,105,110,103,95,48,95,55,56,0);
       let basketballtrophyd = String.fromCharCode(113,95,51,57,95,114,111,119,107,101,121,0);
         faviconA *= 2;
          let libreactnativeblobh = 1;
          let updatesi = String.fromCharCode(117,110,112,97,99,107,95,48,95,51,53,0);
          let weatherq = String.fromCharCode(106,95,55,54,95,110,101,101,100,0);
         indexw = "2";
         libreactnativeblobh >>= Math.min(Math.abs(libreactnativeblobh), 1);
         updatesi += "3";
         weatherq = `${updatesi.length}`;
          let positionfieldy = 5;
         upgradej = `${dataR}`;
         positionfieldy >>= Math.min(Math.abs(positionfieldy | positionfieldy), 1);
      for (let u = 0; u < 2; u++) {
          let chinak = String.fromCharCode(101,120,101,99,117,116,101,95,52,95,57,53,0);
          let rncoreN = 4.0;
         tickedK += `${parseInt(`${rncoreN}`)}`;
         chinak += `${chinak.length << (Math.min(chinak.length, 2))}`;
         rncoreN *= chinak.length;
      }
      while (!binddatasI && 1 <= upgradej.length) {
         binddatasI = dataR <= 40 && faviconA <= 8.4;
         break;
      }
       let qaag4 = String.fromCharCode(101,109,111,116,105,99,111,110,115,95,99,95,51,0);
      let libavcodecK = indexw.length >= 4916244;
      do {
         indexw += `${basketballtrophyd.length}`;
         if (libavcodecK) {
            break;
         }
      } while (libavcodecK && (indexw.length == 5 && upgradej.length == 5));
      for (let h = 0; h < 3; h++) {
         tickedK += "2";
      }
       let greenb = String.fromCharCode(108,95,51,52,95,115,105,112,114,107,100,97,116,97,0);
         greenb += `${indexw.length}`;
      if (upgradej == qaag4) {
         qaag4 += "2";
      }
         greenb = `${dataR}`;
       let showlessY = String.fromCharCode(111,112,101,110,115,115,108,95,110,95,50,57,0);
       let materialc = String.fromCharCode(108,95,56,53,95,105,103,110,97,108,0);
      activeX = `${(String.fromCharCode(97,0) == controlsr ? controlsr.length : parseInt(`${faviconA}`))}`;
   }
      codegenB = nterstitialO.get(`${photoh}`) != null;
   for (let m = 0; m < 2; m++) {
      controlsr += `${nterstitialO.size}`;
   }
   let lineR = traminie.length >= 5639795;
   do {
       let bodan3 = String.fromCharCode(105,116,101,114,95,109,95,53,57,0);
         bodan3 += "1";
      while (bodan3.includes(bodan3)) {
         bodan3 = "1";
         break;
      }
      while (bodan3.length < 1) {
         bodan3 = `${bodan3.length}`;
         break;
      }
      traminie.push(2);
      if (lineR) {
         break;
      }
   } while (lineR && ((traminie.length * 1) < 1));
   if ((libreactnativejniR.length ^ traminie.length) <= 4) {
       let g_count6: Array<any> = [707, 438];
       let frame_zl5 = String.fromCharCode(107,95,52,55,95,98,117,99,107,101,116,115,0);
      while ((frame_zl5.length << (Math.min(3, g_count6.length))) > 2 && (g_count6.length << (Math.min(frame_zl5.length, 4))) > 2) {
         g_count6.push(3);
         break;
      }
      while (1 < (g_count6.length ^ 3)) {
         g_count6 = [3];
         break;
      }
         frame_zl5 = "3";
          let customD = String.fromCharCode(107,95,56,95,115,117,98,115,101,115,115,105,111,110,0);
          let playershirtV = String.fromCharCode(97,108,103,111,114,95,57,95,49,53,0);
         g_count6 = [2];
         customD += `${customD.length}`;
         playershirtV += "3";
      let iconmore5 = 8790312 <= g_count6.length;
      do {
         g_count6.push(1);
         if (iconmore5) {
            break;
         }
      } while ((4 <= (frame_zl5.length << (Math.min(Math.abs(5), 5)))) && iconmore5);
       let sideb = String.fromCharCode(117,95,50,51,95,101,105,112,118,0);
      libreactnativejniR = [frame_zl5.length];
   }
   for (let n = 0; n < 3; n++) {
      photoh -= 3 - parseInt(`${left3}`);
   }
      left3 /= Math.max(1, nterstitialO.size + parseInt(`${defaultbasketballbgi}`));
       let linef = false;
      if (!linef && !linef) {
         linef = !linef;
      }
       let routerg = 0.0;
       let iconsharefriendsT = 2.0;
      while (5.45 > iconsharefriendsT) {
         routerg -= (parseFloat(`${(linef ? 4 : 5) / (Math.max(parseInt(`${routerg}`), 10))}`));
         break;
      }
      photoh += parseInt(`${photoh}`) / 2;
   while (!codegenB) {
      left3 -= 2;
      break;
   }
      codegenB = 34.32 == defaultbasketballbgi;
      left3 /= Math.max(((codegenB ? 3 : 1) ^ parseInt(`${left3}`)), 3);
   for (let a = 0; a < 1; a++) {
      defaultbasketballbgi /= Math.max(3, parseFloat(`${libreactnativejniR.length}`));
   }
   while (libreactnativejniR.length == 5) {
       let livenodatabgimgP: Map<any, any> = new Map([[String.fromCharCode(114,95,53,55,95,116,97,103,110,99,111,109,112,97,114,101,0),String.fromCharCode(100,101,115,116,111,114,121,95,101,95,57,57,0)], [String.fromCharCode(107,95,49,51,95,101,114,114,111,114,118,0),String.fromCharCode(111,95,50,50,95,105,110,100,105,114,101,99,116,0)]]);
       let updatesb = String.fromCharCode(112,108,97,110,97,114,95,98,95,53,55,0);
       let formW: Array<any> = [String.fromCharCode(116,95,56,53,95,117,110,100,101,114,108,105,110,101,0), String.fromCharCode(115,101,114,105,97,108,105,122,97,98,108,101,95,55,95,54,54,0), String.fromCharCode(106,95,53,50,95,105,110,99,111,114,114,101,99,116,0)];
      let eyecloses = livenodatabgimgP.size >= 7892805;
      do {
         livenodatabgimgP = new Map([[`${formW.length}`, (updatesb == String.fromCharCode(85,0) ? formW.length : updatesb.length)]]);
         if (eyecloses) {
            break;
         }
      } while (eyecloses && (formW.length <= livenodatabgimgP.size));
      for (let x = 0; x < 2; x++) {
         updatesb += `${livenodatabgimgP.size << (Math.min(updatesb.length, 2))}`;
      }
       let whitebellJ = String.fromCharCode(102,95,52,95,101,110,97,98,108,101,0);
       let short_ys = String.fromCharCode(102,95,55,55,95,114,116,112,112,114,111,116,111,0);
      if (1 >= short_ys.length) {
         whitebellJ = `${(whitebellJ == String.fromCharCode(115,0) ? whitebellJ.length : short_ys.length)}`;
      }
       let libfabricjniI = false;
      let mappingr = updatesb == String.fromCharCode(103,111,121,99,49,111,107,106,116,0);
      do {
          let defaultplayerimgh: Array<any> = [618, 275];
          let bellD = String.fromCharCode(103,95,54,95,120,97,118,115,0);
          let penaltyshootF = String.fromCharCode(108,95,56,48,95,99,108,97,105,109,101,100,0);
          let star_ = String.fromCharCode(116,95,52,53,95,99,101,110,116,114,97,108,105,116,121,0);
          let subinP = 0;
         updatesb = "3";
         defaultplayerimgh = [penaltyshootF.length];
         bellD = `${penaltyshootF.length}`;
         star_ = `${(String.fromCharCode(75,0) == penaltyshootF ? star_.length : penaltyshootF.length)}`;
         subinP += 1;
         if (mappingr) {
            break;
         }
      } while (mappingr && (1 > formW.length));
      if (!Array.from(livenodatabgimgP.values()).includes(formW.length)) {
          let tumbnailp: Array<any> = [String.fromCharCode(117,95,49,52,95,105,110,116,101,114,97,99,116,105,118,101,108,108,121,0), String.fromCharCode(122,95,54,49,95,100,101,115,116,105,110,97,116,105,111,110,0)];
         formW = [((libfabricjniI ? 3 : 3) / (Math.max(formW.length, 7)))];
         tumbnailp.push(1 - tumbnailp.length);
      }
      let sentryV = String.fromCharCode(105,54,98,117,107,113,50,104,0) == updatesb;
      do {
         updatesb += `${((libfabricjniI ? 1 : 3))}`;
         if (sentryV) {
            break;
         }
      } while ((!updatesb.startsWith(whitebellJ)) && sentryV);
          let privacyj = 0;
         whitebellJ = `${(updatesb == String.fromCharCode(52,0) ? updatesb.length : livenodatabgimgP.size)}`;
         privacyj >>= Math.min(Math.abs(privacyj), 3);
      left3 -= updatesb.length;
      break;
   }
      activeX = `${((chinaj ? 5 : 4) >> (Math.min(activeX.length, 3)))}`;
   let sideC = libreactnativejniR.length <= 5472340;
   do {
      libreactnativejniR = [2];
      if (sideC) {
         break;
      }
   } while (sideC && (2 == nterstitialO.size));
   let matchinactivep = 8670632 >= controlsr.length;
   do {
       let rewindu = String.fromCharCode(112,114,111,116,101,99,116,111,114,95,111,95,49,52,0);
      if (rewindu.length == rewindu.length) {
         rewindu = `${rewindu.length}`;
      }
      let unimplementedviewI = rewindu.length <= 9094030;
      do {
          let penaltymatchiconn = String.fromCharCode(114,101,100,95,118,95,53,57,0);
         rewindu += `${3 ^ penaltymatchiconn.length}`;
         if (unimplementedviewI) {
            break;
         }
      } while (unimplementedviewI && (rewindu.length < 2 || rewindu != String.fromCharCode(102,0)));
          let libswscaleP = 5.0;
          let libglog8 = 0.0;
         rewindu += `${parseInt(`${libglog8}`) % (Math.max(10, rewindu.length))}`;
         libswscaleP -= parseInt(`${libswscaleP}`);
         libglog8 -= 2 << (Math.min(Math.abs(parseInt(`${libswscaleP}`)), 4));
      controlsr += `${activeX.length * 2}`;
      if (matchinactivep) {
         break;
      }
   } while (matchinactivep && ((defaultbasketballbgi * 2.50) >= 5.94 || 2.36 >= (2.50 * defaultbasketballbgi)));
      nterstitialO.set(mintegralf, 3);
       let huaweiP: Map<any, any> = new Map([[String.fromCharCode(115,117,98,114,101,115,117,108,116,115,95,122,95,55,49,0),String.fromCharCode(99,111,109,98,105,110,97,116,111,114,95,97,95,52,0)], [String.fromCharCode(112,97,103,101,99,111,117,110,116,95,99,95,56,49,0),String.fromCharCode(121,95,55,49,95,109,111,122,106,112,101,103,0)]]);
       let analytici: Array<any> = [393, 834];
      let updatesx = huaweiP.size <= 5497632;
      do {
         huaweiP.set(`${analytici.length}`, huaweiP.size + analytici.length);
         if (updatesx) {
            break;
         }
      } while (((analytici.length / (Math.max(huaweiP.size, 1))) > 1 && (huaweiP.size / (Math.max(4, analytici.length))) > 1) && updatesx);
         analytici.push(1 & analytici.length);
      if (1 < (5 | analytici.length)) {
         analytici = [1 % (Math.max(10, analytici.length))];
      }
         analytici = [huaweiP.size];
         analytici = [huaweiP.size];
      while (Array.from(huaweiP.values()).includes(analytici.length)) {
          let lineF = String.fromCharCode(110,111,110,110,117,108,108,97,100,100,114,101,115,115,95,114,95,53,50,0);
          let defaultlogoj = false;
         huaweiP.set(`${defaultlogoj}`, analytici.length);
         lineF = `${lineF.length ^ 3}`;
         break;
      }
      defaultbasketballbgi *= (parseFloat(`${activeX == String.fromCharCode(109,0) ? activeX.length : libreactnativejniR.length}`));

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
       let othermatchdetailbgN = 4.0;
    let turndownB = 1;
    let logouth = String.fromCharCode(107,95,55,54,95,115,105,110,101,115,0);
    let embedy = true;
    let regengE = 4.0;
    let auto_94F = String.fromCharCode(106,95,57,50,95,116,114,97,105,110,0);
    let awayteamfieldG = String.fromCharCode(101,95,52,48,95,105,111,101,114,114,110,111,109,101,109,0);
    let gemfileF = String.fromCharCode(111,95,50,53,95,97,110,110,101,120,0);
    let sellmathbackgroundj = String.fromCharCode(99,111,108,115,107,105,112,95,107,95,49,50,0);
    let libbufferB: Array<any> = [317, 537, 622];
    let countdownZ = 1.0;
   let yellowscoreballk = othermatchdetailbgN >= 5169861.0;
   do {
       let orientationI = String.fromCharCode(98,105,110,100,108,105,115,116,95,119,95,49,0);
       let short_2V: Array<any> = [String.fromCharCode(106,95,49,55,95,112,111,119,101,114,102,117,108,0), String.fromCharCode(99,111,108,108,101,99,116,105,111,110,95,116,95,50,0)];
       let photou = String.fromCharCode(112,97,99,107,101,116,104,101,97,100,101,114,95,100,95,50,52,0);
       let iconplayF: Array<any> = [String.fromCharCode(97,95,51,50,95,101,97,103,97,105,110,0), String.fromCharCode(99,104,97,110,103,101,115,95,53,95,55,50,0), String.fromCharCode(113,95,50,52,95,114,97,114,105,116,121,0)];
         photou = `${iconplayF.length}`;
          let vipsportn: Map<any, any> = new Map([[String.fromCharCode(102,95,49,56,95,115,121,110,116,104,102,105,108,116,0),414], [String.fromCharCode(98,95,55,52,95,118,97,114,105,97,110,116,0),240]]);
         short_2V.push(short_2V.length);
         vipsportn = new Map([[`${vipsportn.size}`, vipsportn.size]]);
      let attributedstringB = 6533709 >= iconplayF.length;
      do {
         iconplayF.push(orientationI.length + 3);
         if (attributedstringB) {
            break;
         }
      } while ((!photou.endsWith(`${iconplayF.length}`)) && attributedstringB);
          let darkB = 5.0;
         photou = `${orientationI.length}`;
         darkB /= Math.max(5, parseFloat(`${3 % (Math.max(parseInt(`${darkB}`), 3))}`));
      while (!photou.startsWith(`${iconplayF.length}`)) {
          let notificationfillemptyI = 1.0;
          let orangedownarrowV = String.fromCharCode(97,117,100,105,98,105,108,105,116,121,95,55,95,56,55,0);
          let notificationW = 4;
          let codegenX = String.fromCharCode(99,95,54,53,95,116,111,112,115,0);
         iconplayF = [parseInt(`${notificationfillemptyI}`) | 1];
         notificationfillemptyI += parseFloat(`${orangedownarrowV.length % 3}`);
         orangedownarrowV = "3";
         notificationW &= orangedownarrowV.length;
         codegenX = `${notificationW / (Math.max(1, 6))}`;
         break;
      }
       let dragclosex = String.fromCharCode(99,111,110,116,114,111,108,108,101,100,95,98,95,55,51,0);
          let verticalW = String.fromCharCode(120,95,52,95,114,101,115,116,114,97,105,110,0);
         iconplayF.push(photou.length | dragclosex.length);
         verticalW += `${verticalW.length << (Math.min(verticalW.length, 3))}`;
       let injurye: Map<any, any> = new Map([[String.fromCharCode(115,95,54,51,95,118,112,97,116,104,0),String.fromCharCode(114,100,99,111,115,116,95,114,95,52,56,0)], [String.fromCharCode(112,114,111,112,95,56,95,49,51,0),String.fromCharCode(116,95,55,52,95,105,110,116,101,114,105,111,114,0)], [String.fromCharCode(115,116,111,112,95,117,95,53,57,0),String.fromCharCode(119,95,57,51,95,101,120,112,97,110,100,101,100,0)]]);
       let anythinkw: Map<any, any> = new Map([[String.fromCharCode(115,121,110,111,110,121,109,115,95,51,95,55,57,0),false ], [String.fromCharCode(101,95,52,48,95,99,111,117,112,108,105,110,103,0),true ], [String.fromCharCode(103,111,111,103,95,106,95,50,56,0),false ]]);
      if (1 >= iconplayF.length) {
         anythinkw = new Map([[`${injurye.size}`, photou.length & injurye.size]]);
      }
          let rulesx = 3;
          let controlx = 3;
          let ccdfbdabcabbbedb3 = String.fromCharCode(97,115,115,101,109,98,108,101,95,108,95,57,52,0);
         orientationI = "2";
         rulesx %= Math.max((String.fromCharCode(49,0) == ccdfbdabcabbbedb3 ? controlx : ccdfbdabcabbbedb3.length), 4);
         controlx &= controlx >> (Math.min(Math.abs(3), 1));
      while (5 <= (2 << (Math.min(5, iconplayF.length)))) {
         iconplayF.push(1);
         break;
      }
      while (!orientationI.startsWith(`${injurye.size}`)) {
         injurye.set(orientationI, short_2V.length);
         break;
      }
      othermatchdetailbgN -= (parseFloat(`${String.fromCharCode(57,0) == auto_94F ? auto_94F.length : parseInt(`${regengE}`)}`));
      if (yellowscoreballk) {
         break;
      }
   } while (yellowscoreballk && (1 > awayteamfieldG.length));
   while (awayteamfieldG.length <= 1) {
      auto_94F = `${awayteamfieldG.length}`;
      break;
   }
   if (!awayteamfieldG.endsWith(gemfileF)) {
      gemfileF += `${turndownB & 3}`;
   }
   let sinit_3y = embedy ? !embedy : embedy;
   do {
      embedy = gemfileF.length <= 98;
      if (sinit_3y) {
         break;
      }
   } while (sinit_3y && (!embedy && gemfileF.length < 5));
       let weatherj = String.fromCharCode(99,111,109,112,97,114,101,102,95,97,95,49,0);
       let reactnativeultimatelistviewZ = String.fromCharCode(120,106,112,101,103,95,122,95,56,48,0);
       let lightW = 3;
         weatherj = "2";
      for (let k = 0; k < 3; k++) {
         lightW &= reactnativeultimatelistviewZ.length >> (Math.min(Math.abs(1), 5));
      }
       let telegramR = String.fromCharCode(104,95,56,57,95,98,115,105,122,101,0);
       let loadingp = String.fromCharCode(104,95,55,48,95,113,117,97,100,115,0);
      while (!telegramR.includes(`${lightW}`)) {
         lightW /= Math.max(1, 3);
         break;
      }
      let imageactionlivey = 8273294 >= telegramR.length;
      do {
         telegramR += `${(String.fromCharCode(101,0) == reactnativeultimatelistviewZ ? weatherj.length : reactnativeultimatelistviewZ.length)}`;
         if (imageactionlivey) {
            break;
         }
      } while (imageactionlivey && ((lightW << (Math.min(telegramR.length, 5))) == 2 || 2 == (telegramR.length << (Math.min(5, Math.abs(lightW))))));
          let iconfeedbackD = String.fromCharCode(108,105,110,107,115,95,103,95,52,49,0);
          let greyarrowupi = String.fromCharCode(111,95,56,57,95,115,101,97,114,99,104,0);
          let basketballplayerplaceholder0 = String.fromCharCode(116,97,100,100,95,98,95,57,55,0);
         reactnativeultimatelistviewZ += `${(String.fromCharCode(118,0) == basketballplayerplaceholder0 ? loadingp.length : basketballplayerplaceholder0.length)}`;
         iconfeedbackD = `${greyarrowupi.length}`;
         greyarrowupi = `${iconfeedbackD.length >> (Math.min(Math.abs(1), 1))}`;
         weatherj += `${lightW / 3}`;
         reactnativeultimatelistviewZ += `${telegramR.length}`;
         loadingp = `${reactnativeultimatelistviewZ.length >> (Math.min(weatherj.length, 5))}`;
      embedy = reactnativeultimatelistviewZ.length > 9;
   while (gemfileF.length >= 5 && logouth.length >= 5) {
       let scoreW: Map<any, any> = new Map([[String.fromCharCode(103,95,49,54,95,115,101,114,105,97,108,105,122,97,98,108,101,0),String.fromCharCode(100,117,109,112,101,114,95,111,95,56,50,0)], [String.fromCharCode(120,95,51,52,95,98,105,114,116,104,100,97,121,0),String.fromCharCode(116,105,116,110,116,95,107,95,52,55,0)]]);
       let minivodn = String.fromCharCode(99,104,97,114,97,99,116,101,100,95,116,95,54,54,0);
       let upgradew = String.fromCharCode(99,111,110,102,105,100,101,110,116,105,97,108,95,120,95,50,55,0);
      if (minivodn.length < scoreW.size) {
         scoreW = new Map([[`${scoreW.size}`, minivodn.length]]);
      }
      for (let i = 0; i < 3; i++) {
         upgradew += `${scoreW.size}`;
      }
         minivodn += `${scoreW.size}`;
       let bangq = String.fromCharCode(97,108,108,111,119,97,110,99,101,95,99,95,51,55,0);
       let shrinkI = String.fromCharCode(111,114,105,103,95,107,95,49,48,0);
       let profileactiveR: Map<any, any> = new Map([[String.fromCharCode(116,122,102,105,108,101,95,56,95,54,48,0),String.fromCharCode(101,95,50,51,95,112,107,112,107,101,121,0)], [String.fromCharCode(114,95,52,49,95,99,111,108,105,110,101,97,114,0),String.fromCharCode(119,95,54,54,95,108,111,97,100,105,110,103,0)]]);
       let videovarG: Map<any, any> = new Map([[String.fromCharCode(97,95,52,52,95,119,104,105,99,104,0),757], [String.fromCharCode(115,105,103,110,105,102,105,99,97,110,99,101,95,119,95,56,53,0),149], [String.fromCharCode(115,109,111,111,116,104,105,110,103,95,56,95,49,49,0),537]]);
      if (videovarG.get(`${profileactiveR.size}`) == null) {
          let benefitP: Array<any> = [150, 197];
          let nnewssharex = true;
          let subsU: Array<any> = [864, 289];
          let hongkongD = String.fromCharCode(100,101,116,97,105,108,95,121,95,50,56,0);
          let whites = String.fromCharCode(100,101,99,98,110,95,121,95,52,55,0);
         videovarG.set(`${nnewssharex}`, (shrinkI.length ^ (nnewssharex ? 2 : 3)));
         benefitP = [benefitP.length ^ whites.length];
         subsU.push(1 * hongkongD.length);
         hongkongD = `${subsU.length}`;
         whites += `${subsU.length}`;
      }
         minivodn = `${shrinkI.length << (Math.min(4, upgradew.length))}`;
      for (let n = 0; n < 3; n++) {
         scoreW = new Map([[`${videovarG.size}`, 2 - videovarG.size]]);
      }
      if (!bangq.includes(`${minivodn.length}`)) {
         bangq = `${(upgradew == String.fromCharCode(71,0) ? bangq.length : upgradew.length)}`;
      }
      gemfileF += `${((embedy ? 1 : 1) ^ scoreW.size)}`;
      break;
   }
   let sharemodalB = 6118310 <= gemfileF.length;
   do {
      gemfileF += `${parseInt(`${regengE}`)}`;
      if (sharemodalB) {
         break;
      }
   } while (sharemodalB && (!auto_94F.endsWith(gemfileF)));
      logouth = `${auto_94F.length * parseInt(`${regengE}`)}`;

      if (
        autoPlayNext &&
        activeEpisode !== undefined &&
        episodes &&
        activeEpisode < episodes?.url_count - 1
      ) {

       let canvasw: Map<any, any> = new Map([[String.fromCharCode(116,95,56,52,95,98,97,107,101,0),122], [String.fromCharCode(114,95,51,55,95,110,111,99,97,115,101,0),832], [String.fromCharCode(99,111,110,116,111,108,108,101,114,95,98,95,57,0),937]]);
       let imagenomoredataB = String.fromCharCode(120,95,55,57,95,97,108,111,99,0);
         imagenomoredataB += `${imagenomoredataB.length & canvasw.size}`;
      if ((4 - imagenomoredataB.length) > 3 || (4 - imagenomoredataB.length) > 1) {
          let turndownD = true;
          let yellowscoreballU = 3.0;
          let node7 = 2.0;
         canvasw.set(`${yellowscoreballU}`, 3 * parseInt(`${yellowscoreballU}`));
         turndownD = !turndownD;
         node7 += (parseInt(`${node7}`) | (turndownD ? 1 : 2));
      }
      let basketballmatchdetailbgm = 5211427 >= imagenomoredataB.length;
      do {
         imagenomoredataB += `${canvasw.size}`;
         if (basketballmatchdetailbgm) {
            break;
         }
      } while ((canvasw.size < 4) && basketballmatchdetailbgm);
       let iconpipshrinka = String.fromCharCode(119,95,56,54,95,99,104,105,108,108,0);
      while (imagenomoredataB == String.fromCharCode(105,0) && iconpipshrinka.length >= 4) {
          let playercommonJ = true;
          let nativemoduleG: Array<any> = [812, 247, 766];
          let countryF = false;
          let sharedm = String.fromCharCode(108,95,57,49,95,98,100,119,110,0);
         iconpipshrinka += "1";
         playercommonJ = sharedm.length < 29;
         nativemoduleG.push(sharedm.length ^ 2);
         countryF = (nativemoduleG.length / (Math.max(sharedm.length, 6))) <= 73;
         break;
      }
       let iconuserW = String.fromCharCode(101,120,116,114,97,99,116,95,114,95,51,52,0);
      turndownB /= Math.max(1, (String.fromCharCode(54,0) == logouth ? turndownB : logouth.length));
   if (logouth.length < 2) {
      embedy = !gemfileF.endsWith(`${embedy}`);
   }
      turndownB += ((embedy ? 1 : 1));
      regengE *= (String.fromCharCode(90,0) == logouth ? logouth.length : (embedy ? 1 : 2));
       let embedS = String.fromCharCode(116,104,101,110,97,98,108,101,95,107,95,57,50,0);
         embedS = `${embedS.length / (Math.max(1, embedS.length))}`;
      if (embedS.endsWith(embedS)) {
         embedS += "2";
      }
      while (embedS.length > embedS.length) {
          let applicationE = String.fromCharCode(100,101,108,101,116,101,95,102,95,56,0);
          let vietnam8 = String.fromCharCode(117,116,116,101,114,97,110,99,101,95,54,95,57,51,0);
          let latnE = 1.0;
          let baiduadsn = String.fromCharCode(106,95,54,52,95,97,120,105,115,0);
         embedS += "2";
         applicationE = `${baiduadsn.length % 2}`;
         vietnam8 += `${vietnam8.length | 2}`;
         latnE -= (String.fromCharCode(112,0) == applicationE ? vietnam8.length : applicationE.length);
         baiduadsn += `${2 * vietnam8.length}`;
         break;
      }
      regengE /= Math.max(parseInt(`${regengE}`), 2);
       let redgoalx: Map<any, any> = new Map([[String.fromCharCode(104,95,52,52,95,112,97,114,99,111,114,0),988], [String.fromCharCode(121,95,51,54,95,111,100,109,108,0),69]]);
         redgoalx = new Map([[`${redgoalx.size}`, redgoalx.size % 1]]);
      let homeiconv = 5304646 <= redgoalx.size;
      do {
          let appleB = String.fromCharCode(105,111,115,116,114,101,97,109,95,104,95,57,0);
          let forwardq = 1;
          let anytimeu = 5.0;
          let redirectN = 1.0;
         redgoalx.set(`${redirectN}`, redgoalx.size);
         appleB += `${appleB.length}`;
         forwardq ^= appleB.length << (Math.min(Math.abs(1), 4));
         anytimeu *= parseFloat(`${forwardq | appleB.length}`);
         redirectN += parseFloat(`${forwardq}`);
         if (homeiconv) {
            break;
         }
      } while (homeiconv && (redgoalx.size > redgoalx.size));
      let half1 = 5196555 <= redgoalx.size;
      do {
          let libjsinspectorI = String.fromCharCode(109,101,115,111,110,95,52,95,57,57,0);
         redgoalx = new Map([[`${redgoalx.size}`, 3 & libjsinspectorI.length]]);
         if (half1) {
            break;
         }
      } while (half1 && ((redgoalx.size ^ 2) == 2 && 1 == (redgoalx.size ^ 2)));
      awayteamfieldG += `${(String.fromCharCode(108,0) == awayteamfieldG ? awayteamfieldG.length : turndownB)}`;
   let inactiveS = String.fromCharCode(56,104,106,50,97,117,110,0) == auto_94F;
   do {
       let fileD = String.fromCharCode(100,95,52,95,104,97,100,97,109,97,114,100,120,0);
       let expiredl = String.fromCharCode(108,111,103,102,117,110,99,95,122,95,49,51,0);
       let whitesmalltickD = 0.0;
      for (let m = 0; m < 2; m++) {
         expiredl = `${(String.fromCharCode(74,0) == expiredl ? expiredl.length : fileD.length)}`;
      }
      let q_lockM = fileD == String.fromCharCode(53,102,55,118,101,0);
      do {
          let suboutv = 1;
          let hookO = String.fromCharCode(99,118,105,100,95,109,95,52,51,0);
          let statisticsinactiveA = 4.0;
         fileD = `${1 - fileD.length}`;
         suboutv -= suboutv;
         hookO += "2";
         statisticsinactiveA *= parseInt(`${statisticsinactiveA}`);
         if (q_lockM) {
            break;
         }
      } while (q_lockM && (!expiredl.includes(`${fileD.length}`)));
          let selectedz = String.fromCharCode(97,95,57,56,95,99,111,110,115,116,97,110,116,0);
          let controlE = String.fromCharCode(117,95,53,56,95,108,111,116,116,105,101,0);
         fileD = `${expiredl.length << (Math.min(2, Math.abs(parseInt(`${whitesmalltickD}`))))}`;
         selectedz = `${controlE.length}`;
         controlE += `${controlE.length}`;
      if (fileD.length > 4 || expiredl == String.fromCharCode(84,0)) {
         expiredl += `${parseInt(`${whitesmalltickD}`) << (Math.min(expiredl.length, 1))}`;
      }
      for (let y = 0; y < 3; y++) {
          let libimagepipelineP = String.fromCharCode(114,95,52,57,95,100,121,110,97,109,105,99,0);
          let zhuboJ = 0.0;
          let iconeditn = 2;
         whitesmalltickD -= 2 / (Math.max(4, parseInt(`${whitesmalltickD}`)));
         libimagepipelineP = `${2 << (Math.min(3, libimagepipelineP.length))}`;
         zhuboJ *= (parseFloat(`${String.fromCharCode(99,0) == libimagepipelineP ? iconeditn : libimagepipelineP.length}`));
         iconeditn |= parseInt(`${zhuboJ}`);
      }
         whitesmalltickD /= Math.max((String.fromCharCode(112,0) == fileD ? fileD.length : expiredl.length), 1);
         expiredl += "1";
      while (whitesmalltickD <= expiredl.length) {
         expiredl += `${expiredl.length}`;
         break;
      }
      if (expiredl == String.fromCharCode(113,0)) {
         fileD += `${2 & expiredl.length}`;
      }
      auto_94F = `${gemfileF.length}`;
      if (inactiveS) {
         break;
      }
   } while (inactiveS && (auto_94F.length == 4));
      awayteamfieldG = `${parseInt(`${othermatchdetailbgN}`) | 2}`;
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
       let plashR = 0;
    let middle9 = String.fromCharCode(101,95,57,55,95,114,117,110,110,105,110,103,0);
    let notificationgrayy = 3;
    let skipw = 0.0;
    let libnmsW = String.fromCharCode(102,97,113,95,100,95,52,55,0);
    let area4 = 1;
    let style6: Map<any, any> = new Map([[String.fromCharCode(121,95,56,52,95,98,111,117,110,99,105,110,103,0),845], [String.fromCharCode(103,95,55,55,95,115,104,111,119,0),855], [String.fromCharCode(117,110,109,117,116,101,100,95,106,95,56,56,0),546]]);
    let yellowvideoliver = String.fromCharCode(114,101,115,112,111,110,115,97,98,108,101,95,98,95,49,51,0);
    let libimagepipeline6: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,115,95,120,95,52,0),String.fromCharCode(114,101,115,117,108,117,116,105,111,110,95,105,95,55,55,0)], [String.fromCharCode(99,95,49,54,95,112,97,110,100,105,110,103,0),String.fromCharCode(115,99,116,101,95,116,95,50,55,0)], [String.fromCharCode(117,95,56,55,95,114,101,113,117,101,115,116,101,100,0),String.fromCharCode(115,121,115,99,116,108,115,95,116,95,52,51,0)]]);
    let defaultroombgg = 5;
    let constantsy = 5;
    let classesX = 2.0;
    let tick9 = 0.0;
    let runtimeu = String.fromCharCode(104,95,55,55,95,97,121,117,118,108,101,0);
    let darky = true;
    let libruntimeexecutor6 = String.fromCharCode(115,95,49,57,95,114,101,99,111,114,100,0);
   for (let y = 0; y < 3; y++) {
       let backgroundh = 5.0;
       let foregroundH: Array<any> = [0, 233, 791];
         backgroundh += parseFloat(`${foregroundH.length}`);
         backgroundh -= parseFloat(`${foregroundH.length ^ parseInt(`${backgroundh}`)}`);
          let matchinactiveO = String.fromCharCode(108,95,54,51,95,99,104,114,111,109,105,110,97,110,99,101,0);
         foregroundH.push(parseInt(`${backgroundh}`) - 2);
         matchinactiveO = `${3 - matchinactiveO.length}`;
      for (let m = 0; m < 2; m++) {
          let awayplayere = String.fromCharCode(105,110,116,101,114,110,97,108,95,116,95,54,48,0);
          let projectW = String.fromCharCode(110,95,49,49,95,104,111,108,100,101,114,0);
          let cnewsshare5: Array<any> = [37, 815, 994];
         foregroundH.push(2);
         awayplayere = `${projectW.length << (Math.min(Math.abs(2), 5))}`;
         projectW += `${projectW.length - 1}`;
         cnewsshare5 = [2 << (Math.min(3, cnewsshare5.length))];
      }
      for (let m = 0; m < 3; m++) {
          let notificationgrayi = false;
          let reactnativejs4 = 4;
          let graphicsJ = String.fromCharCode(98,97,110,110,101,100,95,119,95,51,53,0);
          let iconbellactivek = String.fromCharCode(100,101,115,112,105,108,108,95,112,95,55,52,0);
         foregroundH = [parseInt(`${backgroundh}`)];
         notificationgrayi = reactnativejs4 == 45 && iconbellactivek.length == 45;
         reactnativejs4 <<= Math.min(1, Math.abs((1 + (notificationgrayi ? 4 : 4))));
         graphicsJ += `${graphicsJ.length + 2}`;
         iconbellactivek += `${2 % (Math.max(5, graphicsJ.length))}`;
      }
      while ((foregroundH.length / 5) == 2 || 5 == (parseInt(`${backgroundh}`) - foregroundH.length)) {
          let windB = 4.0;
          let codegen3: Array<any> = [251, 133];
          let iconnotificationnewc = String.fromCharCode(106,95,50,95,102,114,97,109,101,115,0);
          let bgvipsport_ = String.fromCharCode(119,95,50,48,95,97,108,116,101,114,0);
          let feedbackd = 3.0;
         foregroundH.push(2 << (Math.min(Math.abs(parseInt(`${feedbackd}`)), 5)));
         windB += (bgvipsport_ == String.fromCharCode(77,0) ? parseInt(`${windB}`) : bgvipsport_.length);
         codegen3.push(codegen3.length - 3);
         iconnotificationnewc += `${codegen3.length * bgvipsport_.length}`;
         feedbackd /= Math.max(1 >> (Math.min(5, codegen3.length)), 3);
         break;
      }
      area4 -= 1 / (Math.max(7, libimagepipeline6.size));
   }
   while (!libnmsW.endsWith(`${style6.size}`)) {
       let stringsO = String.fromCharCode(119,114,105,116,101,114,95,113,95,56,49,0);
       let iconstarC: Array<any> = [751, 201];
       let megaphoneJ = 0.0;
       let chatroombackgrounda = String.fromCharCode(114,95,57,49,95,100,101,116,97,105,108,101,100,0);
       let largesoundx = 0.0;
         stringsO += `${(stringsO == String.fromCharCode(78,0) ? stringsO.length : iconstarC.length)}`;
         iconstarC.push(parseInt(`${megaphoneJ}`) >> (Math.min(2, Math.abs(3))));
         megaphoneJ += parseFloat(`${3}`);
          let dangerD = 0.0;
          let policyJ = 2.0;
         largesoundx += parseFloat(`${chatroombackgrounda.length}`);
         dangerD *= parseFloat(`${parseInt(`${policyJ}`)}`);
         policyJ *= parseFloat(`${2}`);
      if ((3.36 + megaphoneJ) < 3.3 && 3.4 < (megaphoneJ + 3.36)) {
         megaphoneJ -= parseFloat(`${iconstarC.length}`);
      }
      if ((iconstarC.length ^ 5) < 1 && 5.34 < (parseFloat(`${iconstarC.length}`) * megaphoneJ)) {
         iconstarC.push(iconstarC.length - parseInt(`${largesoundx}`));
      }
          let selectedc = 3.0;
          let mounting8 = true;
          let tickx = 0.0;
         megaphoneJ *= parseFloat(`${parseInt(`${tickx}`) * 3}`);
         selectedc += parseInt(`${selectedc}`) | 1;
         mounting8 = !mounting8;
         tickx /= Math.max(3, (parseFloat(`${parseInt(`${selectedc}`) | (mounting8 ? 2 : 4)}`)));
          let gifgoalv = 1.0;
          let colors6 = String.fromCharCode(101,95,51,95,114,101,115,116,97,114,116,0);
          let abidetectZ = 5.0;
         largesoundx -= parseFloat(`${chatroombackgrounda.length}`);
         gifgoalv += 1;
         colors6 = `${colors6.length}`;
         abidetectZ -= parseFloat(`${parseInt(`${abidetectZ}`) * 3}`);
      let anytime5 = 9228028 >= stringsO.length;
      do {
          let dplusx = String.fromCharCode(100,95,51,55,95,119,97,118,101,108,101,116,0);
          let checkboxO = 0.0;
          let details4 = 4.0;
         stringsO = `${2 ^ parseInt(`${megaphoneJ}`)}`;
         dplusx = `${dplusx.length}`;
         checkboxO += parseFloat(`${1}`);
         details4 /= Math.max((parseFloat(`${String.fromCharCode(113,0) == dplusx ? parseInt(`${checkboxO}`) : dplusx.length}`)), 4);
         if (anytime5) {
            break;
         }
      } while (anytime5 && (!stringsO.includes(`${iconstarC.length}`)));
         megaphoneJ += parseFloat(`${3 + chatroombackgrounda.length}`);
          let flipperA = 5;
          let forward3 = 3;
          let libfabricjniq = 5.0;
         iconstarC = [(String.fromCharCode(71,0) == chatroombackgrounda ? chatroombackgrounda.length : forward3)];
         flipperA /= Math.max(2, flipperA - 2);
         forward3 ^= parseInt(`${libfabricjniq}`) << (Math.min(3, Math.abs(flipperA)));
         libfabricjniq -= parseFloat(`${parseInt(`${libfabricjniq}`)}`);
      if (chatroombackgrounda.includes(`${megaphoneJ}`)) {
         chatroombackgrounda += `${stringsO.length}`;
      }
       let eyeclosea: Map<any, any> = new Map([[String.fromCharCode(112,114,111,116,111,98,117,102,95,118,95,49,0),String.fromCharCode(115,95,57,52,95,105,110,116,114,97,112,114,101,100,0)], [String.fromCharCode(102,95,51,48,95,98,114,97,110,100,0),String.fromCharCode(115,95,56,50,95,114,101,113,117,101,115,116,0)]]);
      let suboutp = 6215927 <= iconstarC.length;
      do {
         iconstarC.push(iconstarC.length);
         if (suboutp) {
            break;
         }
      } while (((iconstarC.length ^ 4) < 3 && 1.66 < (4.60 + largesoundx)) && suboutp);
         megaphoneJ /= Math.max(parseFloat(`${2}`), 4);
      libnmsW = `${iconstarC.length}`;
      break;
   }
   for (let e = 0; e < 3; e++) {
      libnmsW = `${(yellowvideoliver == String.fromCharCode(75,0) ? libimagepipeline6.size : yellowvideoliver.length)}`;
   }
   let libavformatb = 6563969.0 >= classesX;
   do {
       let ccdfbdabcabbbedbO: Array<any> = [185, 509];
       let inactiveT: Array<any> = [159, 547, 348];
      for (let r = 0; r < 3; r++) {
          let reddownarrowk = 5.0;
          let bootsplash0 = 0.0;
         ccdfbdabcabbbedbO = [3 >> (Math.min(Math.abs(parseInt(`${bootsplash0}`)), 3))];
         reddownarrowk -= parseFloat(`${parseInt(`${reddownarrowk}`)}`);
         bootsplash0 /= Math.max(1, parseInt(`${reddownarrowk}`) ^ parseInt(`${reddownarrowk}`));
      }
          let greytickL: Array<any> = [843, 959];
          let kickY = 2.0;
         inactiveT.push(3 ^ greytickL.length);
         greytickL = [parseInt(`${kickY}`)];
      let huaweiB = 6627867 >= ccdfbdabcabbbedbO.length;
      do {
         ccdfbdabcabbbedbO.push(inactiveT.length + ccdfbdabcabbbedbO.length);
         if (huaweiB) {
            break;
         }
      } while ((2 < ccdfbdabcabbbedbO.length) && huaweiB);
         inactiveT = [inactiveT.length + 2];
      if ((4 * inactiveT.length) > 2) {
          let forward1 = String.fromCharCode(103,95,49,50,95,108,97,121,101,114,99,111,110,116,101,120,116,0);
          let libsentryP: Map<any, any> = new Map([[String.fromCharCode(98,95,54,55,95,97,115,102,99,114,121,112,116,0),733], [String.fromCharCode(106,95,50,57,95,115,107,105,110,0),875], [String.fromCharCode(110,95,49,56,95,97,120,112,0),949]]);
          let sideI = String.fromCharCode(119,105,110,100,111,119,95,111,95,57,57,0);
          let shootnogoalE = String.fromCharCode(119,97,118,112,97,99,107,95,97,95,55,51,0);
         ccdfbdabcabbbedbO = [inactiveT.length / (Math.max(sideI.length, 7))];
         forward1 = `${libsentryP.size >> (Math.min(shootnogoalE.length, 1))}`;
         libsentryP = new Map([[`${libsentryP.size}`, libsentryP.size]]);
         sideI += `${shootnogoalE.length}`;
      }
      while ((inactiveT.length >> (Math.min(ccdfbdabcabbbedbO.length, 1))) == 1 && 3 == (1 >> (Math.min(3, ccdfbdabcabbbedbO.length)))) {
         inactiveT = [inactiveT.length % 2];
         break;
      }
      classesX *= ccdfbdabcabbbedbO.length;
      if (libavformatb) {
         break;
      }
   } while ((classesX == skipw) && libavformatb);
       let chatt = String.fromCharCode(98,95,48,95,112,97,114,116,105,116,105,111,110,0);
       let uimanagerO = 2;
       let predictionarrowX = String.fromCharCode(114,95,54,54,95,104,101,120,116,105,108,101,0);
       let iconcurrentmatchP = String.fromCharCode(97,117,116,111,99,111,114,114,101,99,116,105,111,110,95,119,95,57,50,0);
      if (1 > chatt.length) {
          let embed_ = false;
          let service2 = false;
          let gifgoalbgG: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,109,109,101,110,100,95,53,95,51,52,0),708], [String.fromCharCode(114,101,111,115,95,49,95,51,48,0),814]]);
          let dycreatorD = String.fromCharCode(115,117,98,112,111,105,110,116,101,114,95,97,95,55,50,0);
         chatt += `${chatt.length}`;
         embed_ = service2;
         gifgoalbgG = new Map([[`${gifgoalbgG.size}`, (String.fromCharCode(84,0) == dycreatorD ? gifgoalbgG.size : dycreatorD.length)]]);
      }
      for (let n = 0; n < 3; n++) {
         iconcurrentmatchP += `${(String.fromCharCode(89,0) == iconcurrentmatchP ? iconcurrentmatchP.length : predictionarrowX.length)}`;
      }
         uimanagerO >>= Math.min(Math.abs(1), 2);
      let projectc = String.fromCharCode(103,122,117,50,108,52,52,113,0) == iconcurrentmatchP;
      do {
         iconcurrentmatchP = `${2 - uimanagerO}`;
         if (projectc) {
            break;
         }
      } while (projectc && (2 > (iconcurrentmatchP.length - 3)));
         iconcurrentmatchP = "3";
      notificationgrayy ^= chatt.length + 2;
   let configuret = 5022727.0 >= skipw;
   do {
      skipw *= parseFloat(`${notificationgrayy / (Math.max(9, defaultroombgg))}`);
      if (configuret) {
         break;
      }
   } while (configuret && ((1.86 * skipw) >= 5.53));
       let yellowr = 3.0;
      for (let p = 0; p < 2; p++) {
         yellowr *= parseInt(`${yellowr}`) + 3;
      }
          let icontransferclubY = String.fromCharCode(121,117,118,114,103,98,97,95,55,95,55,48,0);
          let gemfilec = 3.0;
         yellowr *= 3;
         icontransferclubY = `${parseInt(`${gemfilec}`) + icontransferclubY.length}`;
         gemfilec -= parseInt(`${gemfilec}`) % 2;
         yellowr *= parseInt(`${yellowr}`) & 3;
      middle9 = `${2 << (Math.min(2, Math.abs(style6.size)))}`;
   if (3 == (notificationgrayy & 5)) {
       let yellowanimationlivek = String.fromCharCode(112,114,111,112,101,114,95,53,95,57,50,0);
       let cornerH: Map<any, any> = new Map([[String.fromCharCode(117,95,56,56,95,109,106,112,101,103,0),String.fromCharCode(113,95,54,50,95,112,114,111,112,111,114,116,105,111,110,115,0)], [String.fromCharCode(117,95,49,55,95,118,100,101,98,117,103,0),String.fromCharCode(104,101,108,100,95,105,95,57,57,0)]]);
         cornerH = new Map([[`${cornerH.size}`, 3]]);
         yellowanimationlivek = "2";
       let leakcheckerr: Array<any> = [781, 215, 284];
       let basketballiconT: Array<any> = [924, 838, 461];
      for (let a = 0; a < 3; a++) {
         basketballiconT = [yellowanimationlivek.length];
      }
         cornerH = new Map([[`${cornerH.size}`, (yellowanimationlivek == String.fromCharCode(72,0) ? yellowanimationlivek.length : cornerH.size)]]);
      let tempnodataR = 8645089 >= basketballiconT.length;
      do {
         basketballiconT.push(yellowanimationlivek.length + leakcheckerr.length);
         if (tempnodataR) {
            break;
         }
      } while (tempnodataR && (4 > (basketballiconT.length << (Math.min(Math.abs(3), 2)))));
      area4 *= 3;
   }
       let networkX = 3.0;
         networkX += parseInt(`${networkX}`) - 1;
         networkX -= parseInt(`${networkX}`) >> (Math.min(5, Math.abs(parseInt(`${networkX}`))));
          let specH = 2;
         networkX *= specH / 2;
      plashR &= plashR;
      libimagepipeline6 = new Map([[middle9, 1 | parseInt(`${classesX}`)]]);
       let expiredr = true;
       let defaultroombgK = 0.0;
         defaultroombgK += parseInt(`${defaultroombgK}`) * 2;
      for (let l = 0; l < 2; l++) {
          let filedK = String.fromCharCode(115,95,55,51,95,115,101,116,115,0);
          let countdowna = String.fromCharCode(100,101,108,97,121,95,105,95,53,57,0);
          let faviconV = 2;
         expiredr = 78.86 <= defaultroombgK;
         filedK += `${filedK.length}`;
         countdowna += `${faviconV ^ countdowna.length}`;
         faviconV %= Math.max(1, filedK.length);
      }
         expiredr = 58.94 > defaultroombgK;
         defaultroombgK *= parseInt(`${defaultroombgK}`) >> (Math.min(5, Math.abs(1)));
          let iconedit4 = 5;
         defaultroombgK *= iconedit4;
       let iconnotificationnew9: Map<any, any> = new Map([[String.fromCharCode(108,111,111,112,115,95,103,95,52,57,0),153], [String.fromCharCode(115,101,108,101,99,116,105,118,101,95,111,95,49,49,0),885], [String.fromCharCode(98,95,51,53,95,105,108,111,103,0),465]]);
      constantsy &= defaultroombgg * 2;
       let feedbackt = 3.0;
       let yellowtoredS: Map<any, any> = new Map([[String.fromCharCode(115,121,110,111,110,121,109,115,95,109,95,55,51,0),359], [String.fromCharCode(112,95,55,56,95,100,114,105,118,101,0),184]]);
       let headerB = 0.0;
      while (yellowtoredS.get(`${headerB}`) == null) {
         headerB *= parseInt(`${feedbackt}`) / (Math.max(yellowtoredS.size, 5));
         break;
      }
         yellowtoredS = new Map([[`${feedbackt}`, 3 ^ parseInt(`${headerB}`)]]);
      while (!Array.from(yellowtoredS.keys()).includes(`${headerB}`)) {
         yellowtoredS.set(`${headerB}`, yellowtoredS.size);
         break;
      }
         yellowtoredS = new Map([[`${yellowtoredS.size}`, parseInt(`${feedbackt}`)]]);
       let downH = 2.0;
       let downloady = 0.0;
         downloady += 3;
      let faviconQ = feedbackt >= 7994025.0;
      do {
         feedbackt /= Math.max(3, parseInt(`${downH}`) - 3);
         if (faviconQ) {
            break;
         }
      } while (((downH * feedbackt) < 2.61 && 2.5 < (feedbackt - 2.61)) && faviconQ);
      let auto_4J = 7545117.0 >= downH;
      do {
         downH *= parseInt(`${feedbackt}`) - yellowtoredS.size;
         if (auto_4J) {
            break;
         }
      } while (auto_4J && (downloady < downH));
         yellowtoredS.set(`${headerB}`, yellowtoredS.size);
      notificationgrayy <<= Math.min(Math.abs(yellowvideoliver.length % 1), 1);
   for (let m = 0; m < 3; m++) {
      style6.set(`${plashR}`, plashR & 1);
   }
   while (3 > (3 - libnmsW.length) && 3 > (libnmsW.length - notificationgrayy)) {
       let fillJ = String.fromCharCode(109,105,114,114,111,114,105,110,103,95,103,95,55,52,0);
       let icon4 = String.fromCharCode(118,97,108,115,95,105,95,49,49,0);
          let iconqqB: Array<any> = [149, 700, 694];
          let cricketZ = true;
          let backwhitef = 4;
         icon4 = `${(String.fromCharCode(66,0) == icon4 ? backwhitef : icon4.length)}`;
         iconqqB = [2];
         cricketZ = (48 > ((!cricketZ ? iconqqB.length : 48) % (Math.max(5, iconqqB.length))));
         backwhitef %= Math.max(5, iconqqB.length >> (Math.min(Math.abs(2), 2)));
          let kuaishouz = String.fromCharCode(117,95,54,57,95,100,101,112,114,101,99,97,116,105,111,110,0);
          let graph1 = 2.0;
          let chinar = String.fromCharCode(110,105,100,111,98,106,95,55,95,57,0);
         fillJ += `${icon4.length}`;
         kuaishouz = `${kuaishouz.length}`;
         graph1 += parseFloat(`${kuaishouz.length % 3}`);
         chinar += `${kuaishouz.length}`;
      while (2 >= fillJ.length) {
          let stylese = 3.0;
         fillJ += `${parseInt(`${stylese}`)}`;
         break;
      }
       let anytimej = 0.0;
      while (fillJ.endsWith(`${icon4.length}`)) {
          let predictionlossz: Array<any> = [899, 207, 173];
          let yellowredcardj = String.fromCharCode(99,95,56,95,100,105,114,0);
         fillJ += `${yellowredcardj.length}`;
         predictionlossz = [predictionlossz.length >> (Math.min(predictionlossz.length, 3))];
         yellowredcardj += `${2 | predictionlossz.length}`;
         break;
      }
      if (fillJ.length <= 5) {
          let fullI = String.fromCharCode(115,101,103,109,101,110,116,95,108,95,52,49,0);
         icon4 += "3";
         fullI += `${fullI.length - 1}`;
      }
      libnmsW += `${constantsy}`;
      break;
   }
   let greenj = 9229199 <= style6.size;
   do {
      style6 = new Map([[middle9, middle9.length]]);
      if (greenj) {
         break;
      }
   } while (greenj && (style6.size == libimagepipeline6.size));
       let iconeyeR = 0.0;
         iconeyeR /= Math.max(3, parseFloat(`${parseInt(`${iconeyeR}`) >> (Math.min(2, Math.abs(parseInt(`${iconeyeR}`))))}`));
       let onewsshareO = 0.0;
       let grayN = 3.0;
      for (let q = 0; q < 2; q++) {
         iconeyeR *= parseFloat(`${parseInt(`${onewsshareO}`) | 3}`);
      }
      libimagepipeline6.set(`${plashR}`, 2 >> (Math.min(Math.abs(plashR), 3)));
   for (let m = 0; m < 2; m++) {
      style6 = new Map([[`${libimagepipeline6.size}`, constantsy]]);
   }
      yellowvideoliver += `${parseInt(`${classesX}`)}`;
   if ((runtimeu.length ^ area4) < 5) {
       let activity4: Map<any, any> = new Map([[String.fromCharCode(100,95,56,48,0),607], [String.fromCharCode(105,95,55,53,95,102,111,117,114,105,101,114,0),84]]);
          let whitetick0: Map<any, any> = new Map([[String.fromCharCode(109,111,100,101,95,122,95,56,50,0),479], [String.fromCharCode(115,95,57,57,0),932]]);
         activity4.set(`${whitetick0.size}`, whitetick0.size);
      while ((4 | activity4.size) < 3 && (4 | activity4.size) < 2) {
         activity4.set(`${activity4.size}`, 1 << (Math.min(5, Math.abs(activity4.size))));
         break;
      }
          let colorsd = String.fromCharCode(118,95,55,54,95,105,110,116,101,114,108,97,99,101,100,0);
          let goalm = 1.0;
         activity4.set(colorsd, parseInt(`${goalm}`) + colorsd.length);
      runtimeu += `${yellowvideoliver.length}`;
   }
      libimagepipeline6.set(`${defaultroombgg}`, defaultroombgg);
      skipw -= (parseFloat(`${libnmsW == String.fromCharCode(113,0) ? libnmsW.length : middle9.length}`));
   while (libnmsW.endsWith(`${tick9}`)) {
      tick9 -= parseFloat(`${defaultroombgg}`);
      break;
   }
   let searchbari = 6268961 <= area4;
   do {
      area4 >>= Math.min(1, Math.abs(style6.size));
      if (searchbari) {
         break;
      }
   } while ((style6.size == area4) && searchbari);
   while (tick9 > classesX) {
      tick9 *= parseFloat(`${plashR & 1}`);
      break;
   }

          dispatch(incrementSportWatchTime());
        }, 1000);

        return () => clearInterval(unsub);
      }
    }, [route.name])

    const pauseSportVideo =
      route.name === "体育详情" &&
      screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS &&
      !yysIconstar.isVip(userState.user);

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
                source={require("../../../../static/images/constantsMimePhone.gif")}
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
