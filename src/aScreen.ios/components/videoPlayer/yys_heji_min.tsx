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
import VideoControlsOverlay from "./yys_gradle";
import WebView from "react-native-webview";
import FastImage from "react-native-fast-image";
import FastForwardProgressIcon from "@static/images/liveRecommendation.svg";
import RewindProgressIcon from "@static/images/directTheme.svg";

import { incrementSportWatchTime, setFullscreenState } from "@redux/actions/yys_runtimescheduler";

import {
  yys_StyleItem,
  yys_Libreact,
  yys_Bing,
} from "@type/yys_libzeus";
import VideoWithControlsMin from "./yys_libcrashsdk_switch_min";
import { useDispatch } from "react-redux";
import { useAppSelector, useSelector } from "@hooks/yys_frame";
import { screenModel } from "@type/yys_service_setting";
import { NON_VIP_STREAM_TIME_SECONDS } from "@utility/yys_ajax_switch";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";

interface yys_ConfigureUimanager {
  vod_url?: string;
  vodTitle?: string;
  currentTimeRef?: any;
  initialStartTime?: number;
  videoType?: string;
  vod_source?: any;
  onBack?: () => any;
  useWebview?: boolean;
  onEpisodeChange?: any;
  episodes?: yys_Libreact;
  activeEpisode?: number;
  rangeSize?: number;
  autoPlayNext?: boolean;
  onShare?: () => any;
  movieList?: yys_Bing[];
  showGuide?: boolean;
  showMoreType?: "episodes" | "streams" | "movies" | "none";
  streams?: yys_StyleItem[];
  isFetchingRecommendedMovies?: boolean;
  appOrientation: string;
  devicesOrientation: string;
  lockOrientation: (orientation: string) => void;
  handleSaveVod?: any;
  onReadyForDisplay?: () => void;
}

type yys_FilledAlert = {
  showControls: () => void;
  hideControls: () => void;
  toggleControls: () => void;
  isVisible: boolean;
  hideSlider: () => void;
  isLocked: boolean;
  toggleLock: () => void;
};

export type yys_CountdownInactive = {
  setPause: (param: boolean) => void;
  isPaused: boolean;
  setCurrentTime: (time: number) => void;
};

export default forwardRef<yys_CountdownInactive, yys_ConfigureUimanager>(
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
       let bellI = 2.0;
    let anner0 = 4;
    let videoZ = String.fromCharCode(114,101,108,97,121,95,56,95,51,56,0);
    let borderlessH = false;
    let actions9: Array<any> = [555, 399];
    let a_lockH = true;
    let sortR = true;
    let goalk = true;
    let larged = true;
    let buttonT: Map<any, any> = new Map([[String.fromCharCode(108,95,48,95,109,98,115,101,103,109,101,110,116,0),false ], [String.fromCharCode(119,95,51,95,109,111,117,115,0),false ], [String.fromCharCode(100,120,116,121,95,112,95,55,57,0),false ]]);
    let navigationr: Map<any, any> = new Map([[String.fromCharCode(116,114,105,95,101,95,52,48,0),true ], [String.fromCharCode(108,95,55,51,95,109,105,110,114,0),false ], [String.fromCharCode(110,97,116,105,111,110,97,108,105,116,121,95,110,95,51,50,0),false ]]);
    let friends5: Array<any> = [120, 601];
    let libjsijniprofiler6 = 0.0;
    let guidee = 1;
       let episodey = String.fromCharCode(118,97,114,105,97,110,116,95,102,95,55,57,0);
         episodey += `${3 | episodey.length}`;
      while (5 == episodey.length) {
         episodey = `${episodey.length * episodey.length}`;
         break;
      }
         episodey += "1";
      actions9 = [anner0 % 2];
       let smallA = 3.0;
       let type_1t = String.fromCharCode(99,95,51,49,95,112,105,99,107,109,111,100,101,0);
       let x_title8: Array<any> = [580, 123];
      let statistics3 = smallA <= 7413998.0;
      do {
          let membership1: Map<any, any> = new Map([[String.fromCharCode(100,95,50,57,95,110,99,114,121,112,116,105,111,110,0),978], [String.fromCharCode(98,95,49,51,95,114,101,116,114,121,0),793]]);
          let updatesg = String.fromCharCode(122,95,52,53,0);
          let hookb: Array<any> = [String.fromCharCode(98,114,111,97,100,99,97,115,116,95,103,95,49,53,0), String.fromCharCode(109,95,57,51,95,99,97,109,112,97,105,103,110,0)];
          let dropdownM = String.fromCharCode(118,95,51,49,95,102,114,97,110,100,111,109,0);
         smallA *= parseFloat(`${membership1.size}`);
         membership1.set(updatesg, 3);
         updatesg += `${(updatesg == String.fromCharCode(67,0) ? updatesg.length : hookb.length)}`;
         hookb = [hookb.length];
         dropdownM += `${hookb.length - updatesg.length}`;
         if (statistics3) {
            break;
         }
      } while ((5.67 == (smallA + 1.28) && (smallA + 1.28) == 3.83) && statistics3);
      let typingX = 6260540 >= x_title8.length;
      do {
         x_title8.push(x_title8.length);
         if (typingX) {
            break;
         }
      } while (typingX && (1 < (type_1t.length % 2)));
      if (type_1t.length > 3) {
         type_1t = `${x_title8.length ^ 2}`;
      }
         type_1t += `${parseInt(`${smallA}`)}`;
         x_title8 = [x_title8.length];
      while ((x_title8.length % (Math.max(5, type_1t.length))) == 2 || (x_title8.length % 2) == 4) {
         type_1t += "1";
         break;
      }
      let bufferR = smallA <= 7480230.0;
      do {
         smallA *= parseFloat(`${x_title8.length >> (Math.min(type_1t.length, 1))}`);
         if (bufferR) {
            break;
         }
      } while ((parseFloat(`${type_1t.length}`) == smallA) && bufferR);
      while (4 == type_1t.length) {
         type_1t = "3";
         break;
      }
      while ((parseInt(`${smallA}`) - x_title8.length) == 1 || (5.81 - smallA) == 4.7) {
         smallA *= parseFloat(`${parseInt(`${smallA}`)}`);
         break;
      }
      borderlessH = navigationr.size >= 18 || smallA >= 69.62;
      larged = actions9.includes(a_lockH);
   for (let u = 0; u < 2; u++) {
       let bootsplashI = 1;
       let hookl = String.fromCharCode(106,95,52,48,95,98,114,111,119,110,0);
       let subsM = 4.0;
       let cricketn = String.fromCharCode(122,95,51,95,108,111,119,98,105,116,115,0);
       let mutedB: Array<any> = [615, 268];
      for (let x = 0; x < 2; x++) {
         mutedB.push((String.fromCharCode(98,0) == cricketn ? cricketn.length : mutedB.length));
      }
         subsM *= parseFloat(`${bootsplashI - 2}`);
         subsM += parseFloat(`${parseInt(`${subsM}`)}`);
         cricketn += `${1 * hookl.length}`;
      while (!cricketn.startsWith(`${mutedB.length}`)) {
         cricketn += `${mutedB.length}`;
         break;
      }
         bootsplashI |= hookl.length;
      let giftZ = mutedB.length >= 6895802;
      do {
          let fastforwardt = false;
          let robotob = 3;
         mutedB = [hookl.length + parseInt(`${subsM}`)];
         fastforwardt = robotob <= 81;
         robotob |= 3;
         if (giftZ) {
            break;
         }
      } while (((4 | hookl.length) > 1 || 1 > (mutedB.length | 4)) && giftZ);
         cricketn += `${2 / (Math.max(6, cricketn.length))}`;
      let w_titlez = cricketn == String.fromCharCode(107,103,56,97,113,115,56,0);
      do {
         cricketn += `${(String.fromCharCode(119,0) == cricketn ? bootsplashI : cricketn.length)}`;
         if (w_titlez) {
            break;
         }
      } while (w_titlez && ((mutedB.length & 4) == 1));
      let faviconE = cricketn == String.fromCharCode(95,56,109,105,97,103,98,107,95,100,0);
      do {
          let goalU = String.fromCharCode(104,95,50,55,95,115,116,99,111,0);
          let viewsv = String.fromCharCode(104,95,48,95,97,99,113,117,97,110,116,0);
          let androidA = String.fromCharCode(109,95,51,48,95,109,98,112,97,105,114,0);
          let maile = false;
          let phoneO = 5.0;
         cricketn = `${goalU.length}`;
         goalU = `${androidA.length - parseInt(`${phoneO}`)}`;
         viewsv = `${parseInt(`${phoneO}`) * viewsv.length}`;
         androidA += `${((maile ? 1 : 1) - androidA.length)}`;
         maile = String.fromCharCode(112,0) == androidA;
         if (faviconE) {
            break;
         }
      } while (((4 | mutedB.length) < 3 && (cricketn.length | 4) < 2) && faviconE);
      if (1 == (parseInt(`${subsM}`) / (Math.max(cricketn.length, 7))) || 5.25 == (1.16 / (Math.max(8, subsM)))) {
         subsM /= Math.max(3, parseFloat(`${3}`));
      }
       let assistm = 0.0;
       let backwardH = 3.0;
      for (let i = 0; i < 3; i++) {
         hookl += `${parseInt(`${subsM}`)}`;
      }
         cricketn += `${hookl.length << (Math.min(Math.abs(3), 1))}`;
      let cast4 = assistm <= 6263949.0;
      do {
          let goaly = 5;
          let temperaturef = String.fromCharCode(100,101,102,101,97,116,95,55,95,53,57,0);
          let carouselb = 5.0;
         assistm -= parseFloat(`${parseInt(`${subsM}`) + 1}`);
         goaly *= 2 | goaly;
         temperaturef = `${temperaturef.length}`;
         carouselb /= Math.max(2, parseFloat(`${parseInt(`${carouselb}`)}`));
         if (cast4) {
            break;
         }
      } while (cast4 && ((parseInt(`${assistm}`) * cricketn.length) >= 2));
      anner0 ^= 3 << (Math.min(Math.abs(parseInt(`${subsM}`)), 1));
   }
   let colorsu = videoZ.length <= 8475976;
   do {
       let accepted8 = 0;
       let playercommon_ = String.fromCharCode(99,95,49,56,95,109,97,102,113,0);
       let entry1 = false;
       let moreZ = String.fromCharCode(108,95,57,51,95,115,97,109,112,108,101,115,0);
      while (2 == moreZ.length) {
         moreZ = `${moreZ.length}`;
         break;
      }
         accepted8 /= Math.max(2, accepted8 << (Math.min(moreZ.length, 5)));
          let schedulerR = String.fromCharCode(111,99,97,116,105,111,110,95,113,95,50,56,0);
          let abidetectf = true;
          let fully: Array<any> = [970, 984, 426];
         entry1 = playercommon_.endsWith(`${accepted8}`);
         schedulerR += `${(schedulerR.length ^ (abidetectf ? 2 : 1))}`;
         abidetectf = fully.includes(abidetectf);
         fully = [1];
      for (let j = 0; j < 1; j++) {
         playercommon_ = `${accepted8 % (Math.max(5, playercommon_.length))}`;
      }
      if (!entry1 && moreZ.length < 4) {
          let miniN = true;
          let untickG = String.fromCharCode(100,105,115,112,111,115,101,95,51,95,53,54,0);
          let backgroundn = true;
         moreZ = "1";
         miniN = untickG.length < 47 || !backgroundn;
         untickG += "2";
      }
         moreZ = "1";
         playercommon_ += `${(playercommon_ == String.fromCharCode(113,0) ? playercommon_.length : accepted8)}`;
         playercommon_ += "1";
      for (let m = 0; m < 3; m++) {
          let otherA = 1.0;
          let roundX = String.fromCharCode(99,111,110,100,105,116,105,111,110,97,108,95,106,95,54,52,0);
          let verticalQ = 5;
          let singleM: Map<any, any> = new Map([[String.fromCharCode(108,103,111,114,97,110,100,95,99,95,49,57,0),String.fromCharCode(104,95,53,52,95,109,112,111,110,0)], [String.fromCharCode(97,103,97,116,101,95,117,95,57,52,0),String.fromCharCode(110,95,54,55,95,98,101,116,104,115,111,102,116,118,105,100,101,111,0)], [String.fromCharCode(115,117,98,100,105,118,105,115,105,111,110,95,49,95,53,49,0),String.fromCharCode(107,95,56,49,95,99,105,112,104,101,114,0)]]);
          let phones = 2.0;
         playercommon_ = `${(accepted8 - (entry1 ? 4 : 4))}`;
         otherA *= parseFloat(`${roundX.length - 3}`);
         roundX = `${verticalQ}`;
         verticalQ -= 2 >> (Math.min(2, Math.abs(singleM.size)));
         singleM.set(`${roundX}`, roundX.length + singleM.size);
         phones -= (parseFloat(`${String.fromCharCode(71,0) == roundX ? verticalQ : roundX.length}`));
      }
         playercommon_ += `${(playercommon_ == String.fromCharCode(101,0) ? playercommon_.length : (entry1 ? 5 : 5))}`;
         playercommon_ += `${(accepted8 >> (Math.min(1, Math.abs((entry1 ? 5 : 2)))))}`;
          let ksadr = 4.0;
          let shootR: Map<any, any> = new Map([[String.fromCharCode(117,110,101,110,99,114,121,112,116,101,100,95,97,95,55,57,0),536], [String.fromCharCode(112,95,56,95,105,109,112,108,101,109,101,110,116,115,0),300]]);
          let renewj = 3.0;
         moreZ += `${(moreZ == String.fromCharCode(115,0) ? parseInt(`${renewj}`) : moreZ.length)}`;
         ksadr += parseFloat(`${parseInt(`${ksadr}`)}`);
         shootR = new Map([[`${shootR.size}`, 2]]);
         renewj *= parseFloat(`${parseInt(`${ksadr}`) - shootR.size}`);
      videoZ += `${2 % (Math.max(10, moreZ.length))}`;
      if (colorsu) {
         break;
      }
   } while (colorsu && (3 < videoZ.length));
      larged = (((larged ? 84 : navigationr.size) << (Math.min(Math.abs(navigationr.size), 1))) > 84);
   if (1 >= videoZ.length || !larged) {
      videoZ += `${1 / (Math.max(parseInt(`${bellI}`), 2))}`;
   }
   while (videoZ.startsWith(`${borderlessH}`)) {
      videoZ = `${((sortR ? 1 : 1))}`;
      break;
   }
       let reactK = String.fromCharCode(97,95,56,49,95,114,101,99,111,103,110,105,122,101,0);
      for (let b = 0; b < 3; b++) {
         reactK += `${reactK.length | reactK.length}`;
      }
         reactK = `${reactK.length % (Math.max(3, reactK.length))}`;
          let photoM = String.fromCharCode(102,95,53,48,95,105,115,115,112,97,99,101,0);
          let singaporeG = String.fromCharCode(103,95,49,49,95,118,101,114,108,97,121,0);
         reactK = "1";
         photoM = `${photoM.length}`;
         singaporeG = `${photoM.length}`;
      a_lockH = !larged;
   if (actions9.includes(anner0)) {
      anner0 /= Math.max(2, ((sortR ? 2 : 4)));
   }
   let utilsD = 8621096 >= navigationr.size;
   do {
      navigationr.set(`${goalk}`, (3 << (Math.min(2, Math.abs((goalk ? 3 : 4))))));
      if (utilsD) {
         break;
      }
   } while (utilsD && (5 >= navigationr.size || 5 >= (5 & navigationr.size)));
   for (let k = 0; k < 1; k++) {
      navigationr = new Map([[`${navigationr.size}`, navigationr.size % (Math.max(videoZ.length, 6))]]);
   }
       let editK = 5;
       let videocommong = 4;
         editK >>= Math.min(Math.abs(videocommong), 1);
      while ((1 & videocommong) < 1) {
         editK |= videocommong;
         break;
      }
          let utils7: Array<any> = [844, 34, 522];
         editK ^= utils7.length;
      while ((editK << (Math.min(Math.abs(videocommong), 4))) == 3 || (3 << (Math.min(2, Math.abs(videocommong)))) == 5) {
          let const_p4a = String.fromCharCode(120,95,49,48,95,99,97,118,115,105,100,99,116,0);
         videocommong *= const_p4a.length;
         break;
      }
       let register_5G: Map<any, any> = new Map([[String.fromCharCode(112,102,102,102,116,95,120,95,56,56,0),578], [String.fromCharCode(117,110,115,99,97,108,101,95,97,95,51,57,0),314]]);
         videocommong /= Math.max(2, 1);
      actions9 = [2];
   while (larged) {
       let calendarE = String.fromCharCode(100,109,97,120,95,101,95,55,56,0);
       let plus2: Array<any> = [623, 740];
       let page_ = String.fromCharCode(103,114,101,97,116,101,114,95,97,95,54,53,0);
         plus2 = [plus2.length];
      for (let o = 0; o < 2; o++) {
          let saved = 1.0;
          let leakcheckerv = String.fromCharCode(115,116,105,99,107,101,114,115,101,116,95,114,95,56,54,0);
         calendarE = `${1 >> (Math.min(4, leakcheckerv.length))}`;
         saved += parseFloat(`${3 + parseInt(`${saved}`)}`);
         leakcheckerv = "3";
      }
          let reminder0 = 1.0;
         calendarE = `${parseInt(`${reminder0}`)}`;
      let dicef = 6785786 >= plus2.length;
      do {
          let liste: Map<any, any> = new Map([[String.fromCharCode(117,95,56,53,95,104,111,109,101,0),750], [String.fromCharCode(115,116,97,116,101,102,117,108,95,110,95,56,55,0),430], [String.fromCharCode(105,95,50,49,95,105,109,112,108,101,109,101,110,116,97,116,105,111,110,0),692]]);
          let libyogaG = 5.0;
         plus2.push(plus2.length);
         liste.set(`${libyogaG}`, 1 + parseInt(`${libyogaG}`));
         if (dicef) {
            break;
         }
      } while (dicef && ((3 >> (Math.min(4, plus2.length))) > 1));
          let libglogP = 3.0;
          let native4 = String.fromCharCode(116,111,112,109,111,115,116,95,120,95,49,0);
          let soundp = true;
         page_ = `${2 + calendarE.length}`;
         libglogP += parseInt(`${libglogP}`) << (Math.min(Math.abs(1), 2));
         native4 += `${2 ^ native4.length}`;
         soundp = native4.length >= 32 || !soundp;
         page_ = `${plus2.length + 3}`;
       let clear0: Array<any> = [String.fromCharCode(98,95,54,51,95,101,97,105,100,99,116,0), String.fromCharCode(118,95,53,55,95,115,108,111,116,115,0)];
       let floatingw: Array<any> = [String.fromCharCode(121,95,56,56,95,99,101,108,108,117,108,97,114,0), String.fromCharCode(113,95,55,51,95,102,105,108,116,101,114,105,110,103,0), String.fromCharCode(102,105,110,95,100,95,57,48,0)];
          let scheduler0: Array<any> = [507, 332, 168];
         clear0 = [scheduler0.length << (Math.min(Math.abs(3), 3))];
      if ((2 - plus2.length) > 5) {
          let long_q4s = 0.0;
          let dice7 = String.fromCharCode(120,95,55,54,95,100,105,103,101,115,116,98,121,111,98,106,0);
          let detailsn = String.fromCharCode(109,95,57,51,95,118,115,99,97,108,101,0);
          let sellA: Map<any, any> = new Map([[String.fromCharCode(117,108,116,114,97,119,105,100,101,95,55,95,49,56,0),361], [String.fromCharCode(99,95,49,55,95,114,101,102,108,101,99,116,111,114,0),943]]);
          let applicationL = 4.0;
         plus2 = [calendarE.length + 1];
         long_q4s *= parseFloat(`${1 ^ parseInt(`${applicationL}`)}`);
         dice7 += `${(String.fromCharCode(90,0) == dice7 ? dice7.length : parseInt(`${applicationL}`))}`;
         detailsn += "1";
         sellA = new Map([[`${sellA.size}`, 1 & parseInt(`${long_q4s}`)]]);
      }
      buttonT = new Map([[`${navigationr.size}`, ((goalk ? 1 : 3) - navigationr.size)]]);
      break;
   }
      borderlessH = null == navigationr.get(`${sortR}`);
      a_lockH = (!a_lockH ? sortR : a_lockH);
   while ((anner0 / 5) >= 3) {
      navigationr.set(`${bellI}`, 1);
      break;
   }
       let typesp = String.fromCharCode(102,105,110,100,110,101,116,95,51,95,57,57,0);
       let countrye = 5;
       let ksadb = String.fromCharCode(107,95,53,95,112,111,119,101,114,102,117,108,0);
         typesp = `${typesp.length << (Math.min(Math.abs(1), 1))}`;
      let playercommon7 = countrye >= 4973591;
      do {
          let sina5: Array<any> = [674, 949, 961];
         countrye -= 2;
         sina5.push(1);
         if (playercommon7) {
            break;
         }
      } while (playercommon7 && (4 == (2 + ksadb.length) && (2 + ksadb.length) == 1));
      for (let y = 0; y < 1; y++) {
         ksadb += `${ksadb.length}`;
      }
          let modityT = String.fromCharCode(97,95,57,52,95,117,114,118,101,0);
          let penaltyF = true;
         ksadb = `${modityT.length / 3}`;
         modityT = "3";
         countrye /= Math.max(2, 5);
      if ((4 >> (Math.min(5, Math.abs(countrye)))) <= 5 || 5 <= (countrye >> (Math.min(Math.abs(4), 3)))) {
         typesp = `${ksadb.length}`;
      }
          let injury9 = 5.0;
          let a_titleh = String.fromCharCode(102,95,52,51,95,117,110,112,117,98,108,105,115,104,0);
          let entryh: Array<any> = [498, 599];
         countrye &= 1 - countrye;
         injury9 += (parseFloat(`${String.fromCharCode(55,0) == a_titleh ? a_titleh.length : parseInt(`${injury9}`)}`));
         entryh = [parseInt(`${injury9}`) << (Math.min(3, Math.abs(2)))];
       let tickm = String.fromCharCode(103,95,55,53,95,99,117,114,108,0);
       let hongkongd = String.fromCharCode(97,95,49,55,95,102,108,97,115,104,0);
      for (let x = 0; x < 1; x++) {
          let productI: Array<any> = [592, 399, 883];
          let teama: Array<any> = [String.fromCharCode(101,95,53,56,95,99,111,110,99,97,116,0), String.fromCharCode(116,101,109,112,108,97,116,101,115,95,122,95,51,48,0)];
         typesp += "2";
         productI = [productI.length | 3];
         teama = [teama.length / (Math.max(3, 1))];
      }
      anner0 |= navigationr.size;
      actions9.push(parseInt(`${bellI}`) ^ 3);
       let libavfilterm = String.fromCharCode(115,104,97,100,101,114,115,95,50,95,54,53,0);
       let referrerS: Map<any, any> = new Map([[String.fromCharCode(99,95,57,57,95,117,110,108,111,99,107,0),true ], [String.fromCharCode(101,95,55,48,95,114,101,108,111,97,100,105,110,103,0),true ]]);
         libavfilterm = "3";
      while (libavfilterm.length > 5) {
         referrerS = new Map([[`${referrerS.size}`, libavfilterm.length]]);
         break;
      }
      if (referrerS.size <= 3) {
          let linkw: Array<any> = [String.fromCharCode(109,98,117,102,115,95,48,95,56,56,0), String.fromCharCode(118,95,49,52,95,98,111,117,110,100,115,0), String.fromCharCode(110,111,109,105,110,97,116,111,114,115,95,118,95,52,51,0)];
          let moonf: Map<any, any> = new Map([[String.fromCharCode(119,111,114,107,115,95,99,95,53,48,0),661], [String.fromCharCode(104,97,110,100,108,101,115,95,56,95,54,56,0),428], [String.fromCharCode(116,121,111,101,95,115,95,51,53,0),114]]);
          let feedbackh = 3.0;
          let soundr = String.fromCharCode(100,95,55,50,95,97,108,108,111,119,101,100,0);
          let producti: Map<any, any> = new Map([[String.fromCharCode(118,95,51,54,95,110,101,119,108,105,110,101,0),941], [String.fromCharCode(113,95,55,53,95,100,118,98,115,117,98,0),789]]);
         libavfilterm += `${linkw.length}`;
         linkw.push(moonf.size);
         moonf = new Map([[`${moonf.size}`, 1]]);
         feedbackh *= parseInt(`${feedbackh}`) | soundr.length;
         soundr += `${parseInt(`${feedbackh}`) >> (Math.min(Math.abs(moonf.size), 2))}`;
         producti.set(soundr, soundr.length >> (Math.min(2, Math.abs(producti.size))));
      }
      for (let t = 0; t < 2; t++) {
          let greenk = 0.0;
          let unreada = 4.0;
          let y_playerS = 0.0;
          let successR: Map<any, any> = new Map([[String.fromCharCode(101,109,111,106,105,95,119,95,49,53,0),269], [String.fromCharCode(115,101,110,100,109,115,103,95,103,95,56,50,0),33]]);
         libavfilterm = `${parseInt(`${unreada}`)}`;
         greenk -= 2 - parseInt(`${greenk}`);
         unreada /= Math.max(3, 1 / (Math.max(parseInt(`${y_playerS}`), 6)));
         y_playerS += parseFloat(`${parseInt(`${y_playerS}`) ^ parseInt(`${greenk}`)}`);
         successR = new Map([[`${greenk}`, parseInt(`${greenk}`) - 1]]);
      }
         referrerS.set(`${libavfilterm}`, referrerS.size ^ 1);
      let final_75G = referrerS.size >= 9796896;
      do {
         referrerS = new Map([[`${referrerS.size}`, (libavfilterm == String.fromCharCode(87,0) ? referrerS.size : libavfilterm.length)]]);
         if (final_75G) {
            break;
         }
      } while ((2 <= (libavfilterm.length % (Math.max(4, referrerS.size)))) && final_75G);
      sortR = !a_lockH;
   if ((2 << (Math.min(1, actions9.length))) <= 1 || actions9.length <= 2) {
      a_lockH = actions9.includes(sortR);
   }
   while (goalk) {
      goalk = null != navigationr.get(`${sortR}`);
      break;
   }
   if (larged) {
      bellI /= Math.max(1, 2 >> (Math.min(Math.abs(parseInt(`${bellI}`)), 1)));
   }
   for (let j = 0; j < 1; j++) {
      navigationr = new Map([[`${goalk}`, 3 / (Math.max(1, videoZ.length))]]);
   }
       let shrinkT = 2.0;
       let about1: Map<any, any> = new Map([[String.fromCharCode(111,95,53,54,95,101,120,116,114,97,115,0),false ], [String.fromCharCode(118,95,50,54,95,110,101,105,103,104,98,111,117,114,0),true ], [String.fromCharCode(113,110,111,115,95,51,95,50,49,0),false ]]);
         about1.set(`${shrinkT}`, parseInt(`${shrinkT}`));
         shrinkT /= Math.max(5, parseFloat(`${about1.size / (Math.max(5, parseInt(`${shrinkT}`)))}`));
       let flyer_ = 4.0;
       let nativemoduleY = 4.0;
      let play3 = flyer_ >= 5809327.0;
      do {
          let baseZ = String.fromCharCode(119,95,51,55,95,101,110,99,111,100,105,110,103,98,0);
         flyer_ -= 1;
         baseZ += `${(String.fromCharCode(72,0) == baseZ ? baseZ.length : baseZ.length)}`;
         if (play3) {
            break;
         }
      } while (play3 && (flyer_ <= nativemoduleY));
      let rewindg = 5785059.0 >= flyer_;
      do {
          let singapore2 = false;
          let playg = String.fromCharCode(114,101,103,105,115,116,114,121,95,98,95,53,51,0);
          let time_h2x = 5.0;
         flyer_ -= parseInt(`${flyer_}`) + playg.length;
         singapore2 = !singapore2;
         playg = `${1 % (Math.max(parseInt(`${time_h2x}`), 6))}`;
         time_h2x -= (parseFloat(`${(singapore2 ? 3 : 4) - parseInt(`${time_h2x}`)}`));
         if (rewindg) {
            break;
         }
      } while ((3 == (parseInt(`${flyer_}`) / (Math.max(about1.size, 2))) && (flyer_ / (Math.max(1.35, 1))) == 3.34) && rewindg);
          let libreactperfloggerjnip = String.fromCharCode(97,95,49,54,95,104,97,108,100,99,108,117,116,0);
         about1.set(`${flyer_}`, libreactperfloggerjnip.length - 2);
      actions9.push(buttonT.size);
       let animationR = 3;
       let benefitY = 1.0;
       let handler7 = 1;
      while (4 < (1 << (Math.min(4, Math.abs(animationR)))) || (parseInt(`${benefitY}`) * animationR) < 1) {
         animationR |= handler7 / (Math.max(3, parseInt(`${benefitY}`)));
         break;
      }
       let libzeusV = 0;
       let mnewarchdefaultsO = 0;
         libzeusV *= 2 % (Math.max(8, handler7));
      for (let p = 0; p < 1; p++) {
         mnewarchdefaultsO >>= Math.min(Math.abs(mnewarchdefaultsO ^ libzeusV), 2);
      }
      while (handler7 == 2) {
          let trophyJ = 1.0;
          let moviesy: Array<any> = [285, 462, 740];
         mnewarchdefaultsO <<= Math.min(Math.abs(animationR << (Math.min(4, Math.abs(3)))), 2);
         trophyJ -= parseFloat(`${3}`);
         moviesy = [1];
         break;
      }
      while (4 > (5 * libzeusV)) {
          let final_7D = true;
          let shirtj = String.fromCharCode(115,105,102,116,95,98,95,55,52,0);
          let o_center0: Map<any, any> = new Map([[String.fromCharCode(110,111,110,110,117,108,108,95,109,95,52,56,0),false ], [String.fromCharCode(109,101,109,95,115,95,54,54,0),true ], [String.fromCharCode(115,105,110,102,95,97,95,52,50,0),false ]]);
         mnewarchdefaultsO &= libzeusV * 2;
         final_7D = !final_7D || shirtj.length > 59;
         shirtj += "2";
         o_center0 = new Map([[shirtj, 2 - shirtj.length]]);
         break;
      }
      while (4 >= libzeusV) {
         libzeusV *= parseInt(`${benefitY}`);
         break;
      }
      let roundq = 6141015 >= libzeusV;
      do {
         libzeusV /= Math.max(1 + animationR, 1);
         if (roundq) {
            break;
         }
      } while ((4 > libzeusV) && roundq);
       let typingo = false;
      borderlessH = handler7 > actions9.length;
       let collection2: Array<any> = [877, 601];
       let libavutil_ = String.fromCharCode(104,95,55,50,95,118,97,108,105,100,97,116,105,111,110,115,0);
       let s_unlockN = 1;
      while ((libavutil_.length | 2) > 3) {
         libavutil_ += "3";
         break;
      }
      let episodesj = s_unlockN <= 7195266;
      do {
         s_unlockN &= collection2.length;
         if (episodesj) {
            break;
         }
      } while ((2 > (collection2.length | 3) || 5 > (collection2.length | 3)) && episodesj);
      let acceptedk = s_unlockN >= 5980062;
      do {
         s_unlockN <<= Math.min(Math.abs(s_unlockN << (Math.min(Math.abs(1), 5))), 5);
         if (acceptedk) {
            break;
         }
      } while (acceptedk && ((collection2.length % (Math.max(5, s_unlockN))) <= 3 && 1 <= (collection2.length % 3)));
         libavutil_ += `${collection2.length}`;
         s_unlockN *= 2 * s_unlockN;
         libavutil_ = `${(String.fromCharCode(80,0) == libavutil_ ? libavutil_.length : collection2.length)}`;
       let fulli = 4.0;
       let shirt4 = 3.0;
      while (4.15 <= (fulli - 2.7)) {
         s_unlockN &= s_unlockN ^ parseInt(`${fulli}`);
         break;
      }
         libavutil_ += `${(String.fromCharCode(87,0) == libavutil_ ? libavutil_.length : collection2.length)}`;
      videoZ += `${((goalk ? 3 : 4) | 2)}`;
   while (3 <= (navigationr.size & 4) && navigationr.size <= 4) {
      navigationr = new Map([[`${actions9.length}`, videoZ.length]]);
      break;
   }
   let controlsx = navigationr.size >= 6175234;
   do {
      navigationr = new Map([[`${bellI}`, parseInt(`${bellI}`) << (Math.min(5, Math.abs(2)))]]);
      if (controlsx) {
         break;
      }
   } while (((4 + navigationr.size) >= 3) && controlsx);
   let favoritej = 5847789 >= anner0;
   do {
      anner0 += 3 << (Math.min(Math.abs(parseInt(`${bellI}`)), 2));
      if (favoritej) {
         break;
      }
   } while (favoritej && (navigationr.get(`${anner0}`) == null));
   if (goalk) {
      goalk = 63 < anner0;
   }
       let notification4 = String.fromCharCode(99,95,57,48,95,99,111,110,100,101,110,115,97,98,108,101,0);
       let completew = 4.0;
       let dangerV: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,105,110,95,115,95,50,0),293], [String.fromCharCode(120,95,54,51,95,113,117,111,116,101,100,0),137], [String.fromCharCode(103,95,53,54,95,118,111,105,99,101,109,97,105,108,0),495]]);
         dangerV.set(`${completew}`, 1);
         dangerV = new Map([[`${dangerV.size}`, 3]]);
      if (4.24 < completew) {
         completew += parseFloat(`${parseInt(`${completew}`)}`);
      }
          let morei: Array<any> = [916, 771, 189];
          let targeto = String.fromCharCode(108,95,52,50,95,115,104,111,114,116,102,108,111,97,116,0);
         completew -= parseFloat(`${3}`);
         morei = [targeto.length];
         targeto += `${morei.length & 1}`;
      for (let f = 0; f < 1; f++) {
         dangerV.set(notification4, notification4.length);
      }
      if ((completew - 4.84) <= 3.21 || (parseInt(`${completew}`) - 1) <= 5) {
          let moon8: Map<any, any> = new Map([[String.fromCharCode(101,115,100,115,95,105,95,49,55,0),String.fromCharCode(109,95,49,48,48,95,110,101,97,114,101,110,100,0)], [String.fromCharCode(100,95,57,49,95,99,111,109,112,111,115,105,116,101,0),String.fromCharCode(110,117,109,101,114,105,102,121,95,48,95,50,55,0)], [String.fromCharCode(101,95,54,52,95,104,117,102,102,121,117,118,101,110,99,100,115,112,0),String.fromCharCode(119,105,114,101,108,101,115,115,95,50,95,54,0)]]);
          let clock8 = String.fromCharCode(113,95,52,56,95,111,117,112,117,116,0);
         completew += parseFloat(`${1}`);
         moon8 = new Map([[`${moon8.size}`, clock8.length | moon8.size]]);
         clock8 = `${moon8.size}`;
      }
      if ((3 | notification4.length) < 1 || 2.52 < (completew * 2.72)) {
          let manifestU = 5;
          let bingb = 1;
          let binddatas9 = 4;
         completew /= Math.max(parseFloat(`${parseInt(`${completew}`) >> (Math.min(Math.abs(2), 5))}`), 3);
         manifestU -= bingb + 3;
         bingb |= manifestU;
         binddatas9 /= Math.max(bingb, 5);
      }
          let executori = String.fromCharCode(105,102,97,99,116,111,114,95,48,95,51,54,0);
          let fadfdeebbbfdabbbabdadfaaddaav: Array<any> = [779, 193];
          let twitter5 = 0.0;
         completew /= Math.max(parseFloat(`${executori.length}`), 4);
         executori += "3";
         fadfdeebbbfdabbbabdadfaaddaav = [fadfdeebbbfdabbbabdadfaaddaav.length * 3];
         twitter5 += parseFloat(`${2}`);
      let gemfileS = dangerV.size >= 6455588;
      do {
          let dangera = 1;
         dangerV = new Map([[`${dangerV.size}`, dangera - 2]]);
         if (gemfileS) {
            break;
         }
      } while (((notification4.length | dangerV.size) == 3 && 3 == (3 | notification4.length)) && gemfileS);
      videoZ = `${videoZ.length}`;
   for (let d = 0; d < 2; d++) {
       let h_positionD: Map<any, any> = new Map([[String.fromCharCode(111,95,56,49,95,117,114,105,0),463], [String.fromCharCode(103,95,55,50,95,102,101,116,99,104,101,115,0),78], [String.fromCharCode(99,117,114,115,111,114,115,116,114,101,97,109,119,114,97,112,112,101,114,95,110,95,56,54,0),807]]);
       let penaltys = 5.0;
      while ((4 / (Math.max(5, h_positionD.size))) == 3 || (h_positionD.size + 4) == 4) {
         penaltys /= Math.max(h_positionD.size | parseInt(`${penaltys}`), 3);
         break;
      }
          let photoi: Map<any, any> = new Map([[String.fromCharCode(110,116,105,108,101,95,100,95,53,52,0),true ], [String.fromCharCode(111,95,55,53,95,100,101,115,116,114,117,99,116,0),false ], [String.fromCharCode(113,95,52,57,95,100,101,102,105,110,101,100,0),true ]]);
         h_positionD.set(`${photoi.size}`, photoi.size | h_positionD.size);
         penaltys *= parseInt(`${penaltys}`);
         penaltys *= parseInt(`${penaltys}`) * h_positionD.size;
       let becomeb = String.fromCharCode(105,110,99,114,109,101,114,103,101,95,111,95,49,49,0);
      while ((h_positionD.size >> (Math.min(Math.abs(4), 2))) >= 5 || 4 >= (h_positionD.size * parseInt(`${penaltys}`))) {
          let gestureU = String.fromCharCode(109,95,55,54,95,118,109,97,102,109,111,116,105,111,110,0);
          let libhermesB = 2;
          let resultz: Array<any> = [String.fromCharCode(120,95,54,48,95,115,117,98,115,116,114,105,110,103,115,0), String.fromCharCode(98,97,108,97,110,99,101,115,95,54,95,57,57,0), String.fromCharCode(107,95,53,50,95,115,116,115,100,0)];
          let colorsT = 4.0;
         h_positionD.set(`${resultz.length}`, h_positionD.size << (Math.min(Math.abs(1), 5)));
         gestureU = "3";
         libhermesB += gestureU.length | libhermesB;
         resultz.push(parseInt(`${colorsT}`));
         colorsT *= parseFloat(`${parseInt(`${colorsT}`)}`);
         break;
      }
      libjsijniprofiler6 /= Math.max(5, parseFloat(`${parseInt(`${penaltys}`) - friends5.length}`));
   }
      actions9.push(1 % (Math.max(1, guidee)));
      navigationr.set(videoZ, (String.fromCharCode(97,0) == videoZ ? videoZ.length : guidee));
       let shared7 = 3.0;
       let constantsq = 2.0;
       let invitee = String.fromCharCode(122,95,49,55,95,105,109,112,111,114,116,97,110,116,0);
      let logoutm = invitee.length >= 5702571;
      do {
         invitee += `${invitee.length >> (Math.min(Math.abs(2), 5))}`;
         if (logoutm) {
            break;
         }
      } while (logoutm && (constantsq <= 5.75));
       let xadsdkm = 5.0;
      if (4 == (invitee.length >> (Math.min(Math.abs(1), 4))) || (1 & invitee.length) == 3) {
         invitee += `${parseInt(`${shared7}`)}`;
      }
         xadsdkm -= parseInt(`${xadsdkm}`);
      if (3.73 >= (constantsq - shared7)) {
         constantsq *= invitee.length / 2;
      }
      let libavformatK = 8304634.0 >= constantsq;
      do {
         constantsq -= (invitee == String.fromCharCode(77,0) ? parseInt(`${xadsdkm}`) : invitee.length);
         if (libavformatK) {
            break;
         }
      } while ((1.43 < xadsdkm) && libavformatK);
      if ((constantsq / (Math.max(2, xadsdkm))) <= 1.2) {
         constantsq -= parseInt(`${xadsdkm}`) & 2;
      }
      for (let o = 0; o < 2; o++) {
          let stringsl = 3.0;
          let moreq: Map<any, any> = new Map([[String.fromCharCode(105,95,52,51,95,112,105,99,107,101,114,115,0),876], [String.fromCharCode(100,108,115,121,109,95,113,95,56,56,0),741]]);
          let commonP = 5.0;
          let renewI = 3;
          let combine7 = String.fromCharCode(115,95,49,53,95,101,116,97,0);
         invitee = `${moreq.size & renewI}`;
         stringsl -= parseFloat(`${parseInt(`${commonP}`) & parseInt(`${stringsl}`)}`);
         moreq.set(`${commonP}`, 2 / (Math.max(parseInt(`${stringsl}`), 3)));
         renewI ^= combine7.length | parseInt(`${commonP}`);
         combine7 += "3";
      }
      for (let r = 0; r < 2; r++) {
          let selectionH = String.fromCharCode(114,95,51,49,95,109,111,100,110,112,102,0);
          let countryW = String.fromCharCode(99,111,101,102,102,115,95,55,95,50,53,0);
          let crown3 = String.fromCharCode(99,112,117,105,110,102,111,95,98,95,51,50,0);
         xadsdkm += 3 << (Math.min(1, Math.abs(parseInt(`${xadsdkm}`))));
         selectionH = `${selectionH.length << (Math.min(Math.abs(3), 5))}`;
         countryW += `${selectionH.length % (Math.max(countryW.length, 6))}`;
         crown3 = `${countryW.length + selectionH.length}`;
      }
      libjsijniprofiler6 /= Math.max(3, parseFloat(`${parseInt(`${shared7}`)}`));
      guidee -= 3;
       let analyticW = 4.0;
       let libfbjni8 = String.fromCharCode(101,95,50,51,95,103,101,110,101,114,97,116,101,0);
         analyticW -= parseFloat(`${libfbjni8.length % (Math.max(8, parseInt(`${analyticW}`)))}`);
      if ((3.66 - analyticW) == 2.27) {
          let selln = 3.0;
         libfbjni8 = `${parseInt(`${analyticW}`)}`;
         selln *= parseInt(`${selln}`);
      }
         analyticW += parseFloat(`${parseInt(`${analyticW}`) & 1}`);
      if ((analyticW * 4.45) < 2.44) {
         libfbjni8 = `${parseInt(`${analyticW}`) / 2}`;
      }
      for (let y = 0; y < 3; y++) {
         libfbjni8 = `${libfbjni8.length >> (Math.min(Math.abs(3), 1))}`;
      }
       let expandX = 2.0;
      bellI += parseInt(`${libjsijniprofiler6}`);
      buttonT = new Map([[`${anner0}`, 1]]);
      a_lockH = !larged && !borderlessH;
      guidee -= anner0 | 2;
   for (let l = 0; l < 1; l++) {
      videoZ = `${(anner0 - (sortR ? 4 : 2))}`;
   }
       let grayq: Array<any> = [365, 5, 631];
       let privilegew: Map<any, any> = new Map([[String.fromCharCode(106,95,48,95,109,101,114,103,101,0),526], [String.fromCharCode(104,116,109,108,109,97,114,107,117,112,95,107,95,56,54,0),400]]);
       let sortG = 0;
          let assist7: Map<any, any> = new Map([[String.fromCharCode(121,95,49,48,95,111,100,100,0),510], [String.fromCharCode(99,95,55,56,95,102,105,108,116,101,114,98,97,110,107,0),675]]);
         grayq = [3 / (Math.max(10, grayq.length))];
         assist7 = new Map([[`${assist7.size}`, assist7.size]]);
      if ((1 << (Math.min(5, Math.abs(sortG)))) <= 2 || 3 <= (1 << (Math.min(4, Math.abs(sortG))))) {
          let adulty = 4;
          let incidentD = String.fromCharCode(115,95,57,50,95,97,114,114,97,110,103,101,109,101,110,116,0);
         privilegew = new Map([[`${grayq.length}`, incidentD.length * 1]]);
         adulty /= Math.max(2 & adulty, 1);
         incidentD += "1";
      }
      let libreactQ = 7335912 <= privilegew.size;
      do {
          let bootsplashT: Array<any> = [String.fromCharCode(103,111,108,111,109,98,95,117,95,50,56,0), String.fromCharCode(122,95,50,52,95,116,111,100,97,121,0), String.fromCharCode(109,95,49,51,95,105,110,116,114,97,102,114,97,109,101,0)];
          let routerM = String.fromCharCode(113,95,57,95,115,116,114,105,100,101,98,0);
          let typesD = 1.0;
          let tumbnaila: Array<any> = [617, 141, 239];
         privilegew.set(`${grayq.length}`, bootsplashT.length);
         bootsplashT = [parseInt(`${typesD}`) >> (Math.min(Math.abs(1), 5))];
         routerM += `${tumbnaila.length}`;
         typesD *= parseFloat(`${3 + parseInt(`${typesD}`)}`);
         tumbnaila.push(routerM.length >> (Math.min(1, tumbnaila.length)));
         if (libreactQ) {
            break;
         }
      } while (libreactQ && (2 <= (5 + privilegew.size) && (sortG + 5) <= 1));
      while ((3 + privilegew.size) <= 5) {
         privilegew.set(`${sortG}`, 2 | privilegew.size);
         break;
      }
         sortG >>= Math.min(Math.abs(grayq.length + 1), 2);
      if (privilegew.get(`${grayq.length}`) != null) {
         privilegew = new Map([[`${grayq.length}`, grayq.length << (Math.min(Math.abs(1), 4))]]);
      }
         grayq.push(privilegew.size / 3);
      let eighteeni = 6233396 >= sortG;
      do {
         sortG |= sortG;
         if (eighteeni) {
            break;
         }
      } while (eighteeni && (4 > (sortG % 3) && (sortG % (Math.max(privilegew.size, 9))) > 3));
       let zcopy_0wQ: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,115,95,57,95,53,48,0),String.fromCharCode(114,101,99,111,103,110,105,122,101,114,95,54,95,53,56,0)], [String.fromCharCode(110,97,112,115,104,111,116,95,52,95,53,50,0),String.fromCharCode(98,97,99,107,115,112,97,99,101,95,112,95,51,52,0)], [String.fromCharCode(106,95,50,48,95,119,105,110,115,111,99,107,0),String.fromCharCode(114,101,116,114,97,110,115,95,50,95,56,57,0)]]);
       let castw: Map<any, any> = new Map([[String.fromCharCode(102,95,51,51,95,109,101,97,115,117,114,101,0),true ], [String.fromCharCode(112,95,49,49,95,109,111,118,101,110,99,99,101,110,99,0),true ]]);
      sortR = 16 < navigationr.size;
      a_lockH = anner0 <= 62 && borderlessH;
      libjsijniprofiler6 *= parseFloat(`${1 ^ friends5.length}`);
      videoZ += `${(guidee << (Math.min(4, Math.abs((goalk ? 4 : 5)))))}`;
       let skipa = String.fromCharCode(108,95,55,53,95,108,111,99,107,0);
          let hiadE = String.fromCharCode(101,95,56,57,95,102,97,117,108,116,0);
          let analyticsm = 0.0;
         skipa += `${parseInt(`${analyticsm}`) ^ hiadE.length}`;
          let send_ = String.fromCharCode(99,111,110,110,101,99,116,95,101,95,57,53,0);
         skipa = `${(String.fromCharCode(49,0) == send_ ? send_.length : skipa.length)}`;
       let danger2 = false;
      actions9 = [((larged ? 3 : 3) & parseInt(`${libjsijniprofiler6}`))];
   for (let q = 0; q < 1; q++) {
      libjsijniprofiler6 += (parseFloat(`${String.fromCharCode(101,0) == videoZ ? videoZ.length : (borderlessH ? 1 : 2)}`));
   }
      a_lockH = guidee < 64 && friends5.length < 64;
   if (!sortR && (3 & actions9.length) >= 2) {
      sortR = bellI >= navigationr.size;
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
       let delegate_6mW = 3;
    let tickedL = String.fromCharCode(99,95,57,49,95,116,104,114,101,115,104,111,108,100,105,110,103,0);
    let transferh = 1.0;
    let hiadP = 1;
    let package_6yx: Array<any> = [500, 137, 597];
    let binddatasL = 3;
    let analytics8 = String.fromCharCode(100,101,115,116,114,117,99,116,95,101,95,56,55,0);
    let runtimen = 0;
    let relatedE = String.fromCharCode(99,95,56,56,95,111,109,112,111,115,101,0);
    let final_53t: Array<any> = [931, 639];
   if (4 < (2 << (Math.min(1, package_6yx.length))) && (package_6yx.length / (Math.max(3, parseInt(`${transferh}`)))) < 2) {
      package_6yx = [3 >> (Math.min(3, Math.abs(runtimen)))];
   }
   if (hiadP == transferh) {
       let telemetryd: Array<any> = [344, 107];
       let const_xe = String.fromCharCode(115,104,117,116,100,111,119,110,97,99,107,95,113,95,49,49,0);
       let questt = String.fromCharCode(119,95,50,95,114,101,115,117,108,116,115,0);
       let libturbomodulejsijnia = 5.0;
       let basketballe: Array<any> = [15, 836];
         libturbomodulejsijnia -= 3;
      for (let k = 0; k < 2; k++) {
         libturbomodulejsijnia += 1 + parseInt(`${libturbomodulejsijnia}`);
      }
      for (let v = 0; v < 3; v++) {
          let lightw = 1;
         basketballe = [questt.length % (Math.max(8, parseInt(`${libturbomodulejsijnia}`)))];
         lightw |= lightw;
      }
      if ((5 + questt.length) >= 4 && 5 >= (questt.length + parseInt(`${libturbomodulejsijnia}`))) {
          let proxy9: Array<any> = [String.fromCharCode(101,95,50,56,95,109,117,108,116,105,112,108,101,0), String.fromCharCode(111,117,116,108,105,101,114,95,103,95,49,55,0), String.fromCharCode(114,95,52,56,95,116,97,114,103,101,116,115,0)];
          let taiwanz = String.fromCharCode(99,107,115,117,109,95,50,95,50,48,0);
          let launcherT = false;
         libturbomodulejsijnia /= Math.max(3, 1 % (Math.max(10, proxy9.length)));
         proxy9 = [3];
         taiwanz = `${taiwanz.length % (Math.max(2, 6))}`;
      }
         basketballe.push(const_xe.length);
       let hooksN = String.fromCharCode(108,98,108,95,54,95,54,53,0);
       let toponq = String.fromCharCode(101,108,108,105,111,116,116,95,109,95,51,0);
         const_xe = `${const_xe.length + basketballe.length}`;
         libturbomodulejsijnia += questt.length | const_xe.length;
      for (let r = 0; r < 3; r++) {
         toponq = `${questt.length - basketballe.length}`;
      }
          let productW: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,105,110,102,111,95,113,95,54,56,0),String.fromCharCode(100,95,50,53,95,101,108,101,118,97,116,101,0)], [String.fromCharCode(110,111,116,105,102,121,95,116,95,50,55,0),String.fromCharCode(100,118,100,97,116,97,95,98,95,51,48,0)]]);
          let winds: Map<any, any> = new Map([[String.fromCharCode(108,97,112,108,97,99,101,95,100,95,55,51,0),true ], [String.fromCharCode(115,116,117,98,98,101,100,95,55,95,56,51,0),true ]]);
         questt += `${toponq.length}`;
         productW.set(`${productW.size}`, winds.size);
         winds.set(`${winds.size}`, 3 & winds.size);
         libturbomodulejsijnia += 3;
       let windl: Array<any> = [String.fromCharCode(117,99,111,110,115,116,95,53,95,54,53,0), String.fromCharCode(105,110,100,101,110,116,97,116,105,111,110,95,101,95,54,48,0)];
         const_xe += `${hooksN.length}`;
          let muteda = 2.0;
          let faviconu = String.fromCharCode(105,110,105,95,109,95,52,51,0);
         windl = [basketballe.length ^ hooksN.length];
         muteda -= parseFloat(`${parseInt(`${muteda}`) >> (Math.min(Math.abs(3), 5))}`);
         faviconu += `${parseInt(`${muteda}`)}`;
      while ((windl.length % (Math.max(hooksN.length, 5))) == 3) {
         windl = [const_xe.length - telemetryd.length];
         break;
      }
      hiadP <<= Math.min(1, basketballe.length);
   }
       let singleh = 4;
         singleh /= Math.max(singleh, 2);
         singleh %= Math.max(3 + singleh, 4);
         singleh += singleh % (Math.max(6, singleh));
      hiadP ^= (String.fromCharCode(65,0) == analytics8 ? runtimen : analytics8.length);
   for (let f = 0; f < 2; f++) {
       let libhermesM = 0;
       let customD: Array<any> = [895, 895, 649];
       let pointH: Map<any, any> = new Map([[String.fromCharCode(116,104,114,111,116,116,108,105,110,103,95,106,95,51,54,0),458], [String.fromCharCode(99,111,110,116,114,97,99,116,95,112,95,51,56,0),263]]);
       let libfollyj = false;
       let inviten = 0;
      let spinnerP = inviten <= 6680307;
      do {
          let bannerI: Array<any> = [792, 77, 812];
          let sliderD = String.fromCharCode(112,114,111,100,117,99,101,114,95,53,95,56,0);
         inviten |= 1;
         bannerI.push((sliderD == String.fromCharCode(79,0) ? sliderD.length : bannerI.length));
         if (spinnerP) {
            break;
         }
      } while ((2 == (inviten / 4)) && spinnerP);
       let listm = String.fromCharCode(117,118,108,99,95,53,95,50,55,0);
       let mimo3 = false;
       let selli = false;
      while (3 >= (libhermesM | pointH.size) && 2 >= (3 | pointH.size)) {
          let paths = String.fromCharCode(107,95,49,50,95,101,110,100,112,111,105,110,116,0);
          let commonj = 4.0;
          let plus9 = String.fromCharCode(113,95,51,56,95,100,110,120,104,100,101,110,99,0);
          let adultE: Map<any, any> = new Map([[String.fromCharCode(115,95,51,50,95,111,102,102,115,0),773], [String.fromCharCode(113,95,56,95,114,101,99,105,100,0),98]]);
          let g_centerV = String.fromCharCode(99,95,49,57,95,109,97,116,114,105,120,101,110,99,0);
         libhermesM ^= paths.length | plus9.length;
         paths += `${g_centerV.length ^ adultE.size}`;
         commonj *= parseFloat(`${parseInt(`${commonj}`)}`);
         plus9 = `${(String.fromCharCode(100,0) == g_centerV ? g_centerV.length : parseInt(`${commonj}`))}`;
         adultE = new Map([[`${adultE.size}`, g_centerV.length * adultE.size]]);
         break;
      }
      if (!mimo3) {
          let libflipperr = String.fromCharCode(110,95,56,50,95,99,111,108,115,101,116,0);
         inviten >>= Math.min(1, Math.abs((String.fromCharCode(107,0) == listm ? pointH.size : listm.length)));
         libflipperr = `${(String.fromCharCode(105,0) == libflipperr ? libflipperr.length : libflipperr.length)}`;
      }
          let indexL: Array<any> = [String.fromCharCode(119,95,54,95,103,114,111,101,115,116,108,0), String.fromCharCode(119,95,49,56,95,119,105,102,105,0)];
          let abouty = 2;
          let castingX = String.fromCharCode(111,95,50,55,95,121,114,121,105,0);
         libfollyj = 91 > libhermesM;
         indexL.push(1 + abouty);
         abouty %= Math.max((String.fromCharCode(99,0) == castingX ? indexL.length : castingX.length), 3);
      for (let n = 0; n < 3; n++) {
          let libfollyX = 3.0;
          let reminder9 = 4.0;
          let feedback7: Map<any, any> = new Map([[String.fromCharCode(98,109,111,100,101,95,97,95,50,55,0),681], [String.fromCharCode(117,95,56,53,95,111,98,115,101,114,118,97,116,105,111,110,0),168], [String.fromCharCode(106,95,52,53,95,118,114,108,101,0),894]]);
         mimo3 = 96 < inviten;
         libfollyX += 3;
         reminder9 -= parseInt(`${reminder9}`) / (Math.max(feedback7.size, 1));
         feedback7.set(`${libfollyX}`, parseInt(`${libfollyX}`) % 1);
      }
         listm += `${inviten * 1}`;
          let goal7 = String.fromCharCode(116,95,49,95,100,111,116,108,111,99,107,0);
          let shirtK: Array<any> = [477, 735];
         listm += `${listm.length}`;
         goal7 += `${(goal7 == String.fromCharCode(99,0) ? goal7.length : shirtK.length)}`;
         shirtK = [3 << (Math.min(4, goal7.length))];
          let traminiW = 2.0;
          let roundS: Array<any> = [660, 487];
         customD = [listm.length];
         traminiW += parseFloat(`${3}`);
         roundS = [roundS.length];
      let shirtU = libfollyj ? !libfollyj : libfollyj;
      do {
         libfollyj = pointH.get(`${mimo3}`) == null;
         if (shirtU) {
            break;
         }
      } while ((2 < pointH.size && 4 < (pointH.size + 2)) && shirtU);
      runtimen <<= Math.min(4, Math.abs(package_6yx.length & binddatasL));
   }
      delegate_6mW %= Math.max(3 + parseInt(`${transferh}`), 1);
       let greyz: Array<any> = [754, 902, 553];
       let wind4 = true;
       let selection7 = 4.0;
       let flipperZ = 5.0;
      if (wind4) {
          let casting7 = String.fromCharCode(98,95,56,52,95,99,111,109,112,108,101,116,101,115,0);
          let inewsw = false;
          let cornern = String.fromCharCode(115,116,101,110,99,105,108,95,108,95,56,54,0);
          let pauseC = 4;
          let latnd = String.fromCharCode(109,95,50,48,95,115,104,105,102,116,115,0);
         selection7 -= parseFloat(`${parseInt(`${selection7}`)}`);
         casting7 += `${pauseC}`;
         inewsw = cornern.includes(`${pauseC}`);
         cornern = `${(String.fromCharCode(98,0) == casting7 ? casting7.length : pauseC)}`;
         latnd = `${cornern.length}`;
      }
      let minimizeu = wind4 ? !wind4 : wind4;
      do {
         wind4 = 35.37 < selection7 || 18 < greyz.length;
         if (minimizeu) {
            break;
         }
      } while ((flipperZ <= 2.86) && minimizeu);
          let bingG = String.fromCharCode(107,95,54,48,95,98,121,116,101,115,0);
          let apps_ = 4.0;
          let catagoryq = String.fromCharCode(121,95,51,57,95,115,97,109,112,108,101,115,0);
         greyz = [(parseInt(`${flipperZ}`) & (wind4 ? 2 : 5))];
         bingG += `${bingG.length - 1}`;
         apps_ /= Math.max(parseFloat(`${parseInt(`${apps_}`) / (Math.max(catagoryq.length, 4))}`), 3);
         catagoryq += `${bingG.length}`;
       let starW: Array<any> = [690, 762];
       let championj: Array<any> = [410, 784, 40];
          let middle7 = 1;
          let navigationl: Array<any> = [648, 481];
          let materialv = 2.0;
         flipperZ /= Math.max(1, parseFloat(`${1}`));
         middle7 ^= middle7;
         navigationl.push(middle7);
         materialv *= parseFloat(`${2 * parseInt(`${materialv}`)}`);
         championj.push(parseInt(`${selection7}`) / 3);
         flipperZ -= parseFloat(`${championj.length}`);
       let dycreatora = 2.0;
       let carouselj = 3.0;
      tickedL += `${analytics8.length & 3}`;
      runtimen >>= Math.min(4, Math.abs(3 & tickedL.length));
   for (let r = 0; r < 2; r++) {
       let libyoga9 = String.fromCharCode(98,95,52,57,95,97,117,114,97,0);
          let fulli: Map<any, any> = new Map([[String.fromCharCode(114,95,53,55,95,111,112,101,114,97,116,105,110,103,0),425], [String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,95,98,95,49,53,0),923]]);
          let stationsi = 0.0;
         libyoga9 += `${fulli.size | parseInt(`${stationsi}`)}`;
      if (libyoga9.length >= 3) {
         libyoga9 = `${libyoga9.length}`;
      }
          let profilez = String.fromCharCode(100,97,105,95,111,95,53,0);
          let libjsijniprofilerg = String.fromCharCode(98,108,111,99,107,101,100,95,98,95,56,56,0);
          let vignetten = true;
         libyoga9 = `${libjsijniprofilerg.length}`;
         profilez += `${profilez.length}`;
         libjsijniprofilerg += `${(profilez.length & (vignetten ? 3 : 3))}`;
      delegate_6mW &= 1 % (Math.max(1, tickedL.length));
   }
   while (3 >= (2 >> (Math.min(1, Math.abs(delegate_6mW))))) {
      delegate_6mW |= (tickedL == String.fromCharCode(120,0) ? tickedL.length : delegate_6mW);
      break;
   }
      hiadP &= delegate_6mW + binddatasL;
   for (let w = 0; w < 1; w++) {
      delegate_6mW -= package_6yx.length;
   }
       let gdtadvr = 1.0;
         gdtadvr -= parseFloat(`${parseInt(`${gdtadvr}`)}`);
      if ((gdtadvr + 3) < 4.77) {
         gdtadvr *= parseFloat(`${parseInt(`${gdtadvr}`) & 1}`);
      }
      while (gdtadvr <= 5.52) {
         gdtadvr -= parseFloat(`${parseInt(`${gdtadvr}`)}`);
         break;
      }
      binddatasL <<= Math.min(Math.abs(package_6yx.length | 1), 2);
       let baser = 2.0;
         baser *= parseFloat(`${parseInt(`${baser}`)}`);
      let routerc = baser >= 9045533.0;
      do {
          let forward_ = String.fromCharCode(99,118,99,95,49,95,53,53,0);
          let ajaxZ: Array<any> = [496, 646, 875];
          let playe = 0.0;
          let detail9 = String.fromCharCode(112,95,54,48,95,112,105,112,101,108,111,115,115,0);
          let mbbidi: Array<any> = [29, 6, 170];
         baser -= parseFloat(`${2}`);
         forward_ = `${detail9.length}`;
         ajaxZ.push(1);
         playe *= detail9.length % (Math.max(2, parseInt(`${playe}`)));
         mbbidi.push(mbbidi.length);
         if (routerc) {
            break;
         }
      } while (routerc && (4.13 <= (baser / 4.43) || (baser / (Math.max(4.43, 7))) <= 4.20));
          let default_fY = 0.0;
          let i_countf: Array<any> = [String.fromCharCode(120,95,54,50,95,115,107,101,116,99,104,0), String.fromCharCode(109,95,57,54,95,97,116,111,105,0), String.fromCharCode(108,95,49,50,95,108,111,116,116,105,101,0)];
         baser += parseFloat(`${i_countf.length >> (Math.min(3, Math.abs(parseInt(`${default_fY}`))))}`);
      transferh /= Math.max(parseFloat(`${2 * parseInt(`${transferh}`)}`), 4);
       let playercommon1 = 0;
       let final_uo = 1.0;
         playercommon1 *= 3;
      let heartQ = final_uo <= 4991969.0;
      do {
         final_uo += parseFloat(`${1}`);
         if (heartQ) {
            break;
         }
      } while (heartQ && ((2 & playercommon1) >= 4 || (playercommon1 + parseInt(`${final_uo}`)) >= 2));
      let leakcheckerF = final_uo <= 6899332.0;
      do {
          let clearj = 3.0;
          let libjsie = false;
          let umeng8 = String.fromCharCode(118,95,49,57,95,106,117,108,105,97,110,100,97,121,0);
         final_uo -= parseFloat(`${2 / (Math.max(parseInt(`${clearj}`), 7))}`);
         clearj *= parseFloat(`${umeng8.length}`);
         libjsie = !libjsie;
         umeng8 += `${(umeng8.length ^ (libjsie ? 2 : 3))}`;
         if (leakcheckerF) {
            break;
         }
      } while (leakcheckerF && (playercommon1 >= 1));
      while (5 == (playercommon1 + 4) && 2 == (4 % (Math.max(7, playercommon1)))) {
         playercommon1 <<= Math.min(3, Math.abs(3 - parseInt(`${final_uo}`)));
         break;
      }
          let playlist3 = true;
         final_uo *= parseFloat(`${1 + playercommon1}`);
         playlist3 = !playlist3;
          let closed = String.fromCharCode(121,95,51,52,95,116,97,103,103,101,114,0);
          let imagemanagerZ = String.fromCharCode(121,95,54,49,95,114,101,109,97,116,114,105,120,105,110,103,0);
          let traminiU: Map<any, any> = new Map([[String.fromCharCode(98,95,49,50,95,100,105,116,104,101,114,0),159], [String.fromCharCode(115,116,97,114,116,115,95,56,95,49,0),381], [String.fromCharCode(97,117,103,109,101,110,116,101,100,95,54,95,49,57,0),564]]);
         final_uo *= parseFloat(`${closed.length % (Math.max(2, 1))}`);
         closed += `${traminiU.size / (Math.max(imagemanagerZ.length, 10))}`;
         imagemanagerZ += `${traminiU.size ^ 2}`;
      transferh += parseFloat(`${hiadP / 3}`);
      transferh /= Math.max(2, parseFloat(`${tickedL.length}`));
   for (let f = 0; f < 2; f++) {
       let crownU = String.fromCharCode(116,95,50,55,95,102,105,108,101,112,97,116,104,0);
       let castG = String.fromCharCode(113,95,55,54,95,98,121,114,121,0);
         crownU += "1";
          let inewsJ = String.fromCharCode(114,101,115,105,122,101,114,95,122,95,57,49,0);
          let statsw = String.fromCharCode(104,95,53,95,116,105,108,101,0);
          let j_countq = 2.0;
         crownU = `${statsw.length << (Math.min(crownU.length, 2))}`;
         inewsJ += `${parseInt(`${j_countq}`) - inewsJ.length}`;
         statsw += `${parseInt(`${j_countq}`)}`;
          let playercommont = true;
          let filledp = 1;
          let libreactperfloggerjniG = 3;
         crownU += `${1 << (Math.min(2, castG.length))}`;
         playercommont = filledp <= libreactperfloggerjniG;
         filledp >>= Math.min(5, Math.abs(libreactperfloggerjniG - 2));
      let filterW = crownU == String.fromCharCode(107,105,102,55,0);
      do {
         crownU += "3";
         if (filterW) {
            break;
         }
      } while ((crownU.length > castG.length) && filterW);
         castG = `${crownU.length + 2}`;
          let userd = 5.0;
          let h_unlockd = String.fromCharCode(97,110,115,119,101,114,115,95,112,95,54,56,0);
          let link9 = String.fromCharCode(97,99,99,101,112,116,101,100,95,106,95,51,56,0);
         castG += `${(String.fromCharCode(81,0) == crownU ? link9.length : crownU.length)}`;
         userd -= parseFloat(`${h_unlockd.length | parseInt(`${userd}`)}`);
         h_unlockd += "2";
         link9 = `${h_unlockd.length * 3}`;
      transferh *= parseFloat(`${delegate_6mW}`);
   }
      relatedE += `${(tickedL == String.fromCharCode(50,0) ? runtimen : tickedL.length)}`;
   let rncorek = runtimen >= 6123956;
   do {
      runtimen >>= Math.min(5, Math.abs(runtimen * delegate_6mW));
      if (rncorek) {
         break;
      }
   } while (rncorek && (2 >= (5 / (Math.max(4, runtimen))) || 4 >= (tickedL.length / (Math.max(5, 8)))));
      runtimen >>= Math.min(4, Math.abs(3));
      delegate_6mW /= Math.max(2, package_6yx.length);
      tickedL += `${3 >> (Math.min(3, tickedL.length))}`;
      delegate_6mW += (String.fromCharCode(53,0) == analytics8 ? hiadP : analytics8.length);
   while (3 <= (delegate_6mW << (Math.min(relatedE.length, 4))) && (delegate_6mW << (Math.min(Math.abs(3), 2))) <= 2) {
      delegate_6mW %= Math.max(analytics8.length, 4);
      break;
   }
   for (let y = 0; y < 1; y++) {
       let libjsijniprofilerQ = String.fromCharCode(101,97,99,104,95,121,95,51,57,0);
          let temperatureC = 0.0;
          let flippero = String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,95,101,95,50,0);
          let halfV = String.fromCharCode(109,115,114,108,101,95,117,95,55,49,0);
         libjsijniprofilerQ = `${flippero.length}`;
         temperatureC += parseFloat(`${parseInt(`${temperatureC}`) << (Math.min(halfV.length, 3))}`);
         flippero = `${3 << (Math.min(5, halfV.length))}`;
         libjsijniprofilerQ = `${libjsijniprofilerQ.length << (Math.min(Math.abs(1), 3))}`;
      let switch_l1p = String.fromCharCode(52,115,118,114,110,103,112,101,0) == libjsijniprofilerQ;
      do {
          let playercommonp = String.fromCharCode(103,95,54,57,95,98,105,109,97,112,0);
          let backwardj = String.fromCharCode(119,95,54,49,95,98,101,110,101,97,116,104,0);
         libjsijniprofilerQ = `${playercommonp.length % (Math.max(backwardj.length, 7))}`;
         if (switch_l1p) {
            break;
         }
      } while ((libjsijniprofilerQ.length > libjsijniprofilerQ.length) && switch_l1p);
      binddatasL <<= Math.min(Math.abs((libjsijniprofilerQ == String.fromCharCode(113,0) ? libjsijniprofilerQ.length : runtimen)), 4);
   }
   if (4 < (package_6yx.length / (Math.max(1, 7)))) {
      binddatasL *= binddatasL;
   }
   let alertl = relatedE == String.fromCharCode(49,48,56,112,101,54,113,48,108,111,0);
   do {
      relatedE = `${package_6yx.length & binddatasL}`;
      if (alertl) {
         break;
      }
   } while (alertl && (relatedE.length == runtimen));
   for (let f = 0; f < 1; f++) {
      transferh /= Math.max(1, parseFloat(`${hiadP}`));
   }
       let screen_ = 2.0;
       let chinasame3 = 5.0;
       let libhermesS = 2.0;
          let confirmationf = true;
         screen_ *= parseInt(`${libhermesS}`) % 2;
         confirmationf = (!confirmationf ? !confirmationf : !confirmationf);
      let renew_ = screen_ >= 9253711.0;
      do {
         screen_ -= parseInt(`${screen_}`) % (Math.max(parseInt(`${chinasame3}`), 7));
         if (renew_) {
            break;
         }
      } while ((2.98 == (libhermesS / (Math.max(5, screen_))) && 2.98 == (screen_ / (Math.max(7, libhermesS)))) && renew_);
         chinasame3 /= Math.max(5, parseFloat(`${3 | parseInt(`${libhermesS}`)}`));
         chinasame3 -= parseFloat(`${parseInt(`${libhermesS}`) << (Math.min(4, Math.abs(parseInt(`${chinasame3}`))))}`);
          let zoomH: Map<any, any> = new Map([[String.fromCharCode(108,111,103,103,97,98,108,101,95,52,95,52,57,0),true ], [String.fromCharCode(121,95,49,54,95,99,114,97,115,104,108,121,116,105,99,115,0),true ], [String.fromCharCode(115,121,109,108,105,110,107,95,99,95,53,0),false ]]);
          let telemetryZ = 3.0;
         libhermesS *= parseInt(`${chinasame3}`) + 1;
         zoomH.set(`${telemetryZ}`, parseInt(`${telemetryZ}`) << (Math.min(Math.abs(zoomH.size), 3)));
       let scheduleA = 5;
       let googlew = 0;
         libhermesS *= googlew;
       let canvasA = 4.0;
       let filterm = 2.0;
         chinasame3 -= parseFloat(`${parseInt(`${canvasA}`)}`);
      delegate_6mW ^= parseInt(`${screen_}`) ^ 1;
   if (!analytics8.endsWith(`${hiadP}`)) {
      analytics8 = "2";
   }
      relatedE += `${package_6yx.length}`;
   while (4.60 < transferh) {
      hiadP += delegate_6mW << (Math.min(Math.abs(hiadP), 2));
      break;
   }
   let grayv = delegate_6mW <= 6221823;
   do {
       let zhengpianj = 0.0;
       let lightc = String.fromCharCode(99,114,111,115,115,112,111,115,116,95,101,95,55,57,0);
          let regengQ = String.fromCharCode(101,95,57,56,95,110,111,102,105,116,105,99,97,116,105,111,110,0);
          let suggestion6 = true;
         lightc = "2";
         regengQ += `${(regengQ == String.fromCharCode(89,0) ? regengQ.length : regengQ.length)}`;
         suggestion6 = regengQ == String.fromCharCode(116,0) && regengQ.length == 45;
       let bufferM: Map<any, any> = new Map([[String.fromCharCode(97,100,100,114,95,57,95,49,54,0),String.fromCharCode(99,111,111,114,100,105,110,97,116,101,95,48,95,52,0)], [String.fromCharCode(98,101,103,105,110,95,109,95,48,0),String.fromCharCode(115,101,116,116,105,110,103,115,95,113,95,55,55,0)]]);
      delegate_6mW -= 1 / (Math.max(3, binddatasL));
      zhengpianj /= Math.max(parseFloat(`${parseInt(`${zhengpianj}`)}`), 5);
      if (grayv) {
         break;
      }
   } while (grayv && (delegate_6mW >= 5));
       let combinec = String.fromCharCode(109,95,53,95,108,111,119,112,97,115,115,0);
       let animations2: Array<any> = [996, 927];
       let closeX = 4.0;
      let librrcA = 7480495.0 <= closeX;
      do {
         closeX += 2;
         if (librrcA) {
            break;
         }
      } while (((1 - animations2.length) <= 1) && librrcA);
      if ((3 ^ combinec.length) == 4 || (combinec.length ^ 3) == 4) {
         animations2 = [2 - animations2.length];
      }
       let nalyticsx: Map<any, any> = new Map([[String.fromCharCode(101,95,54,55,95,112,114,111,118,105,100,101,114,115,0),894], [String.fromCharCode(110,95,53,50,95,112,97,103,101,104,97,115,104,0),428], [String.fromCharCode(115,95,55,49,95,99,97,108,99,117,108,97,116,105,111,110,0),461]]);
      for (let y = 0; y < 3; y++) {
          let googley = 5.0;
         closeX += animations2.length | parseInt(`${googley}`);
      }
      if (closeX > 3.98) {
         nalyticsx = new Map([[`${animations2.length}`, animations2.length - 1]]);
      }
       let mimoL: Map<any, any> = new Map([[String.fromCharCode(109,95,50,54,95,101,108,101,118,97,116,101,100,0),856], [String.fromCharCode(103,95,56,57,95,110,97,99,107,0),898], [String.fromCharCode(109,101,109,115,101,116,95,97,95,55,56,0),707]]);
       let neon7: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,112,108,101,120,95,122,95,52,53,0),String.fromCharCode(116,95,53,53,95,118,105,115,105,98,108,105,116,121,0)], [String.fromCharCode(108,95,56,49,95,117,112,108,111,97,100,0),String.fromCharCode(104,97,110,100,108,105,110,103,95,121,95,50,0)], [String.fromCharCode(113,95,57,52,95,103,101,110,100,101,114,0),String.fromCharCode(110,115,117,105,114,103,98,97,95,117,95,54,54,0)]]);
      for (let i = 0; i < 3; i++) {
          let mailO = true;
         closeX += 3 + mimoL.size;
         mailO = !mailO;
      }
         nalyticsx.set(`${closeX}`, 1);
      let tumbnailG = mimoL.size >= 9411012;
      do {
         mimoL.set(`${animations2.length}`, 1);
         if (tumbnailG) {
            break;
         }
      } while ((mimoL.size <= nalyticsx.size) && tumbnailG);
      analytics8 += `${(combinec == String.fromCharCode(53,0) ? analytics8.length : combinec.length)}`;
   let specl = package_6yx.length <= 5887181;
   do {
       let mbnativeT = String.fromCharCode(121,95,51,52,95,99,117,114,114,0);
      let const_s58 = 7089147 <= mbnativeT.length;
      do {
         mbnativeT += `${mbnativeT.length}`;
         if (const_s58) {
            break;
         }
      } while (const_s58 && (mbnativeT.includes(mbnativeT)));
      let pangle3 = mbnativeT == String.fromCharCode(115,121,109,119,0);
      do {
         mbnativeT += `${mbnativeT.length ^ mbnativeT.length}`;
         if (pangle3) {
            break;
         }
      } while ((mbnativeT.length == 3) && pangle3);
      for (let q = 0; q < 3; q++) {
         mbnativeT = `${mbnativeT.length % (Math.max(5, mbnativeT.length))}`;
      }
      package_6yx = [3];
      if (specl) {
         break;
      }
   } while (((1 % (Math.max(5, tickedL.length))) <= 4 && (package_6yx.length % 1) <= 4) && specl);
   let countryA = analytics8 == String.fromCharCode(54,110,117,105,53,118,106,0);
   do {
      analytics8 = `${analytics8.length}`;
      if (countryA) {
         break;
      }
   } while ((analytics8.endsWith(`${package_6yx.length}`)) && countryA);
   while (3.12 > (5.6 + transferh) && 2.26 > (transferh + 5.6)) {
       let plashj: Map<any, any> = new Map([[String.fromCharCode(108,95,52,95,115,116,114,116,111,107,0),628], [String.fromCharCode(115,95,50,53,95,114,101,115,99,97,108,101,0),2], [String.fromCharCode(99,95,53,55,95,115,101,116,116,108,105,110,103,0),675]]);
       let memberu = 3.0;
       let videojsb = 3;
       let stepy = 4.0;
       let dialog2 = String.fromCharCode(114,95,52,51,95,100,101,115,107,116,111,112,0);
         dialog2 = `${dialog2.length}`;
      while (4.69 >= (memberu / (Math.max(4.38, 6)))) {
         plashj = new Map([[`${videojsb}`, parseInt(`${memberu}`) - 2]]);
         break;
      }
         stepy /= Math.max((String.fromCharCode(88,0) == dialog2 ? parseInt(`${memberu}`) : dialog2.length), 2);
      while (4 == (plashj.size ^ dialog2.length)) {
          let policyw = String.fromCharCode(122,95,56,49,95,97,116,116,0);
          let pangle9: Map<any, any> = new Map([[String.fromCharCode(111,102,102,105,99,105,97,108,95,113,95,57,52,0),818], [String.fromCharCode(101,110,99,111,100,101,102,114,97,109,101,95,48,95,49,51,0),510], [String.fromCharCode(115,111,117,114,99,101,115,95,115,95,49,50,0),546]]);
         plashj = new Map([[`${pangle9.size}`, pangle9.size]]);
         policyw = `${policyw.length}`;
         break;
      }
      let mbbido = 5649323.0 <= stepy;
      do {
         stepy *= 2 & videojsb;
         if (mbbido) {
            break;
         }
      } while (mbbido && (videojsb <= stepy));
      let overg = 6862929.0 >= memberu;
      do {
          let yinge: Array<any> = [699, 182, 682];
          let bell8 = true;
          let neon4 = String.fromCharCode(104,95,57,51,95,103,101,116,116,105,110,103,0);
          let commentB = String.fromCharCode(99,95,50,49,95,118,112,108,97,121,101,114,0);
         memberu += yinge.length + 3;
         yinge = [commentB.length * neon4.length];
         bell8 = neon4.length >= 31;
         commentB = `${(neon4.length + (bell8 ? 3 : 5))}`;
         if (overg) {
            break;
         }
      } while (overg && ((memberu + videojsb) >= 3.31));
         dialog2 = `${plashj.size | 1}`;
      for (let a = 0; a < 2; a++) {
         stepy -= dialog2.length / (Math.max(2, 8));
      }
          let chinad = String.fromCharCode(111,95,53,53,95,102,111,117,114,105,101,114,0);
          let tailh: Map<any, any> = new Map([[String.fromCharCode(105,110,116,102,114,95,109,95,50,51,0),837], [String.fromCharCode(120,95,51,56,95,115,116,114,101,97,109,99,111,112,121,0),939]]);
         dialog2 += `${(chinad == String.fromCharCode(81,0) ? chinad.length : videojsb)}`;
         tailh = new Map([[`${tailh.size}`, tailh.size % 3]]);
      let type_sv = 6416628 <= videojsb;
      do {
          let mimo5: Map<any, any> = new Map([[String.fromCharCode(120,95,51,53,95,105,115,114,101,97,100,111,110,108,121,0),String.fromCharCode(118,105,110,116,101,114,112,111,108,97,116,111,114,95,51,95,50,55,0)], [String.fromCharCode(111,95,48,95,99,116,111,114,0),String.fromCharCode(109,117,108,114,101,115,95,115,95,56,53,0)]]);
          let libflippern = String.fromCharCode(106,95,52,50,95,114,111,117,110,100,100,115,0);
          let leakchecker3 = String.fromCharCode(105,95,54,56,95,108,111,103,103,105,110,103,0);
          let settingB = true;
         videojsb &= mimo5.size / (Math.max(1, 2));
         mimo5 = new Map([[leakchecker3, leakchecker3.length]]);
         libflippern = `${((settingB ? 5 : 2) * 2)}`;
         settingB = libflippern.length <= 35 && settingB;
         if (type_sv) {
            break;
         }
      } while ((4 > (1 >> (Math.min(1, Math.abs(videojsb)))) || 4 > (1 - videojsb)) && type_sv);
          let gestures2 = false;
          let selectionR = String.fromCharCode(114,95,54,52,95,104,111,108,108,111,119,0);
          let annerd: Array<any> = [937, 555];
         stepy /= Math.max(5, ((gestures2 ? 4 : 3) << (Math.min(dialog2.length, 5))));
         gestures2 = 97 > selectionR.length;
         selectionR += `${selectionR.length}`;
         annerd.push(selectionR.length | 1);
      for (let d = 0; d < 2; d++) {
         memberu += parseInt(`${stepy}`) * 3;
      }
          let flipper9 = String.fromCharCode(99,97,117,116,101,114,105,122,101,95,57,95,52,49,0);
         dialog2 = `${plashj.size ^ 3}`;
         flipper9 = `${2 & flipper9.length}`;
         stepy -= 2 - dialog2.length;
         plashj = new Map([[`${videojsb}`, parseInt(`${stepy}`) | videojsb]]);
      transferh *= (parseFloat(`${dialog2 == String.fromCharCode(78,0) ? analytics8.length : dialog2.length}`));
      break;
   }
 },
      onReadyForDisplay,
    }: yys_ConfigureUimanager,
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
      "libreactnativejniProfile" | "none" | "valuesLangConstants"
    >("none");
    const [playbackRate, setPlaybackRate] = useState<number>(1);
    const controlsRef = useRef() as React.MutableRefObject<yys_FilledAlert>;
    const accumulatedSkip = useRef(0);
    const [isLastForward, setIsLastForward] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const screenState: screenModel = useAppSelector(
      ({ screenReducer }) => screenReducer
    );
    const userState = useSelector<yys_HejiCricket>('userReducer');
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
       let grayg = true;
    let libavdevice0: Array<any> = [211, 911, 630];
    let membershiph = 4.0;
    let stepg = String.fromCharCode(110,95,55,51,95,114,111,119,115,112,97,110,0);
    let placementi = 5.0;
    let baidun: Map<any, any> = new Map([[String.fromCharCode(114,95,53,49,95,100,100,118,97,0),String.fromCharCode(105,100,102,118,95,101,95,54,52,0)], [String.fromCharCode(97,95,50,95,111,110,97,118,99,0),String.fromCharCode(99,95,49,50,95,109,111,99,107,105,110,103,0)], [String.fromCharCode(117,95,49,54,95,98,117,99,107,101,116,115,0),String.fromCharCode(117,114,108,115,95,50,95,52,53,0)]]);
    let libfbjniJ: Array<any> = [559, 379];
    let halfS: Array<any> = [String.fromCharCode(109,111,100,110,112,102,95,117,95,52,55,0), String.fromCharCode(116,95,51,95,97,115,115,105,103,110,0)];
    let downloadingJ: Map<any, any> = new Map([[String.fromCharCode(110,98,105,111,95,53,95,57,51,0),false ], [String.fromCharCode(113,117,101,117,101,100,95,106,95,51,57,0),true ], [String.fromCharCode(100,95,53,48,95,101,116,104,101,114,110,101,116,0),false ]]);
    let referrerv = 0.0;
   while (!grayg && (4 / (Math.max(7, halfS.length))) >= 2) {
      grayg = 16 > libavdevice0.length;
      break;
   }
   if (5 < (2 << (Math.min(5, libavdevice0.length))) && !grayg) {
      grayg = !grayg;
   }
   let libavformat9 = membershiph >= 9034883.0;
   do {
       let macauT = 3;
       let default_0dI = 0.0;
       let halfj: Array<any> = [652, 476];
       let combineC = 2;
       let routerv: Map<any, any> = new Map([[String.fromCharCode(113,95,54,52,95,114,118,100,97,116,97,0),true ], [String.fromCharCode(100,101,108,101,116,101,95,111,95,57,51,0),true ]]);
      for (let j = 0; j < 1; j++) {
          let play9 = String.fromCharCode(102,105,102,97,95,100,95,55,48,0);
          let phonep = String.fromCharCode(102,95,53,52,95,97,108,101,114,116,115,0);
          let clocke = 0;
          let o_imageI = String.fromCharCode(120,95,54,55,95,99,111,109,112,97,116,105,98,105,108,105,116,121,0);
          let selection6 = 2;
         combineC += o_imageI.length;
         play9 = `${selection6 - 3}`;
         phonep += `${clocke << (Math.min(play9.length, 1))}`;
         clocke >>= Math.min(phonep.length, 5);
         o_imageI = "2";
         selection6 *= phonep.length;
      }
          let crossb: Array<any> = [700, 259];
          let expande = String.fromCharCode(116,95,50,50,95,109,111,117,115,0);
          let leaguen = 4;
         combineC -= macauT - 2;
         crossb.push(expande.length);
         expande += `${leaguen - crossb.length}`;
         leaguen -= expande.length;
         default_0dI /= Math.max(5, 1 ^ macauT);
      while (5 > (3 % (Math.max(8, combineC)))) {
          let storei = String.fromCharCode(114,101,110,100,101,114,97,98,108,101,95,117,95,56,56,0);
          let fieldC = true;
          let stringo: Array<any> = [516, 835, 886];
         combineC *= routerv.size;
         storei = `${((fieldC ? 2 : 2) ^ 1)}`;
         fieldC = !fieldC || stringo.length <= 37;
         stringo = [((fieldC ? 1 : 5))];
         break;
      }
         default_0dI *= 3 >> (Math.min(2, halfj.length));
      for (let e = 0; e < 3; e++) {
          let resultE: Array<any> = [String.fromCharCode(112,103,105,100,120,95,53,95,50,51,0), String.fromCharCode(102,105,110,100,97,115,115,111,99,95,97,95,55,56,0)];
          let binddatasI = String.fromCharCode(103,95,51,57,95,102,105,110,97,108,108,121,0);
          let hiadw = String.fromCharCode(117,110,105,110,115,116,97,108,108,95,49,95,54,51,0);
         combineC ^= routerv.size;
         resultE = [(binddatasI == String.fromCharCode(69,0) ? binddatasI.length : hiadw.length)];
         hiadw += `${binddatasI.length}`;
      }
         default_0dI += parseInt(`${default_0dI}`) / 3;
         combineC /= Math.max(3, 1);
      let commonI = 5108536 >= combineC;
      do {
         combineC ^= halfj.length << (Math.min(Math.abs(3), 2));
         if (commonI) {
            break;
         }
      } while ((combineC <= 5) && commonI);
      let searchbari = combineC >= 6730071;
      do {
         combineC += halfj.length;
         if (searchbari) {
            break;
         }
      } while (searchbari && (combineC <= macauT));
      for (let y = 0; y < 3; y++) {
         macauT %= Math.max(2 / (Math.max(combineC, 6)), 5);
      }
         halfj.push(combineC & 1);
       let guideB = true;
       let streamingN = false;
      while ((macauT % (Math.max(halfj.length, 10))) > 4) {
         halfj.push(parseInt(`${default_0dI}`) / 2);
         break;
      }
      let downloadingS = 8462102.0 <= default_0dI;
      do {
          let textinputE: Map<any, any> = new Map([[String.fromCharCode(103,95,49,51,95,97,117,116,111,112,108,97,121,0),14], [String.fromCharCode(116,117,110,110,101,108,105,110,103,95,53,95,51,50,0),678]]);
          let dropdownk: Map<any, any> = new Map([[String.fromCharCode(102,105,97,116,95,54,95,56,54,0),480], [String.fromCharCode(107,95,56,53,95,100,97,114,119,105,110,0),234]]);
         default_0dI /= Math.max(5, halfj.length | combineC);
         textinputE.set(`${textinputE.size}`, dropdownk.size);
         dropdownk = new Map([[`${textinputE.size}`, dropdownk.size]]);
         if (downloadingS) {
            break;
         }
      } while ((default_0dI < combineC) && downloadingS);
      membershiph -= macauT;
      if (libavformat9) {
         break;
      }
   } while ((4 >= (5 + stepg.length) || (2.8 + membershiph) >= 1.51) && libavformat9);
      membershiph *= 2;
   for (let n = 0; n < 1; n++) {
      libfbjniJ.push(2);
   }

      if (onBack !== undefined) {

      libfbjniJ.push(1 ^ stepg.length);
       let models3: Map<any, any> = new Map([[String.fromCharCode(103,95,57,56,95,100,119,97,114,102,0),String.fromCharCode(106,95,56,50,95,110,118,111,105,99,101,0)], [String.fromCharCode(108,111,99,97,116,101,100,95,101,95,50,50,0),String.fromCharCode(116,111,110,97,108,95,102,95,56,57,0)], [String.fromCharCode(111,117,112,117,116,95,113,95,50,0),String.fromCharCode(120,95,56,95,115,116,114,105,100,0)]]);
      while (2 < (models3.size & 5)) {
         models3.set(`${models3.size}`, 2 & models3.size);
         break;
      }
         models3 = new Map([[`${models3.size}`, models3.size]]);
       let friendsX: Array<any> = [596, 268, 859];
      stepg = `${libfbjniJ.length}`;
      halfS = [halfS.length ^ libfbjniJ.length];
      referrerv += downloadingJ.size << (Math.min(Math.abs(1), 5));
      placementi -= parseFloat(`${downloadingJ.size ^ 2}`);
        onBack();

   while ((parseInt(`${referrerv}`) + 2) >= 4 && (stepg.length | 2) >= 4) {
      referrerv /= Math.max(parseInt(`${placementi}`), 1);
      break;
   }
   for (let x = 0; x < 1; x++) {
      baidun.set(`${stepg}`, baidun.size);
   }
   for (let g = 0; g < 1; g++) {
      placementi -= parseFloat(`${2}`);
   }
   let strn = referrerv >= 7665297.0;
   do {
       let default_x1o = String.fromCharCode(118,105,101,119,101,114,95,107,95,54,57,0);
       let graphics7: Map<any, any> = new Map([[String.fromCharCode(110,95,49,57,95,115,101,116,115,104,97,114,101,0),String.fromCharCode(115,95,54,57,95,105,110,118,97,114,105,97,110,116,115,0)], [String.fromCharCode(122,95,51,55,95,101,121,101,115,0),String.fromCharCode(112,105,99,107,105,110,116,101,114,95,52,95,53,53,0)]]);
       let countdown0: Array<any> = [580, 421, 917];
       let settingK = String.fromCharCode(97,118,101,114,95,51,95,50,55,0);
       let miniF: Map<any, any> = new Map([[String.fromCharCode(102,101,101,100,95,111,95,49,51,0),114], [String.fromCharCode(104,95,51,50,95,100,101,115,116,105,110,97,116,105,111,110,115,0),216], [String.fromCharCode(110,111,110,115,101,99,117,114,101,95,110,95,50,48,0),836]]);
      if (2 == (settingK.length >> (Math.min(5, countdown0.length))) || (settingK.length >> (Math.min(2, countdown0.length))) == 2) {
         settingK = `${(String.fromCharCode(48,0) == default_x1o ? settingK.length : default_x1o.length)}`;
      }
         countdown0 = [default_x1o.length + graphics7.size];
         graphics7.set(default_x1o, 3);
          let scheduley = false;
          let stationK = String.fromCharCode(115,109,107,97,95,50,95,53,57,0);
          let nalyticsr = false;
         countdown0.push(stationK.length * miniF.size);
         scheduley = (scheduley ? !nalyticsr : scheduley);
         stationK = "1";
      while (5 < (default_x1o.length - 2)) {
         miniF.set(settingK, settingK.length * miniF.size);
         break;
      }
         settingK = `${2 & miniF.size}`;
         miniF = new Map([[`${miniF.size}`, 2 ^ miniF.size]]);
         countdown0 = [miniF.size];
         settingK += "1";
      if (default_x1o.length >= 4) {
         graphics7.set(settingK, settingK.length);
      }
          let colors5: Map<any, any> = new Map([[String.fromCharCode(112,114,105,111,114,105,116,121,113,95,120,95,56,49,0),true ], [String.fromCharCode(121,95,49,54,95,108,97,121,101,114,99,111,110,116,101,120,116,0),true ]]);
          let upgradeO = 4;
         settingK = `${colors5.size ^ graphics7.size}`;
         colors5.set(`${upgradeO}`, upgradeO);
      while (Array.from(miniF.values()).includes(countdown0.length)) {
         miniF = new Map([[`${countdown0.length}`, 2]]);
         break;
      }
         countdown0 = [1];
         miniF = new Map([[`${graphics7.size}`, default_x1o.length & 1]]);
       let countryQ = false;
       let libjsijniprofiler8 = false;
      referrerv /= Math.max(downloadingJ.size, 4);
      if (strn) {
         break;
      }
   } while (strn && ((referrerv - baidun.size) < 3.82));
      libfbjniJ = [3];
        lockOrientation("PORTRAIT");

   for (let b = 0; b < 2; b++) {
      stepg = `${parseInt(`${referrerv}`)}`;
   }
      libfbjniJ.push((3 & (grayg ? 4 : 2)));
   while ((placementi - 5) > 3.28) {
      membershiph -= stepg.length;
      break;
   }
      libfbjniJ = [parseInt(`${placementi}`)];
   if (4 >= (2 & libavdevice0.length)) {
      stepg = `${libavdevice0.length}`;
   }
        setIsFullScreen(false);
      } else {

      placementi *= parseFloat(`${1 | parseInt(`${referrerv}`)}`);
      membershiph *= 1 & parseInt(`${membershiph}`);
   while (5.11 <= (parseFloat(`${halfS.length}`) + placementi) || (5.11 + placementi) <= 5.97) {
      placementi -= parseFloat(`${libavdevice0.length}`);
      break;
   }
       let cornerJ = 5.0;
       let customH = String.fromCharCode(122,95,49,52,95,117,110,97,118,97,105,98,108,101,0);
       let apps1 = String.fromCharCode(115,101,118,101,110,95,101,95,53,51,0);
      if (3.29 < (5.86 / (Math.max(8, cornerJ)))) {
         customH += `${customH.length}`;
      }
          let directX = String.fromCharCode(112,105,120,101,108,98,117,102,102,101,114,95,99,95,51,52,0);
          let apple1 = String.fromCharCode(110,95,52,56,95,114,103,98,97,0);
          let scheduled: Map<any, any> = new Map([[String.fromCharCode(113,95,55,55,95,109,111,116,105,111,110,0),false ], [String.fromCharCode(109,95,52,51,95,97,114,102,113,0),true ], [String.fromCharCode(99,114,101,97,116,101,100,95,54,95,54,54,0),true ]]);
         customH = `${apps1.length ^ apple1.length}`;
         directX = `${(directX == String.fromCharCode(69,0) ? scheduled.size : directX.length)}`;
         apple1 = `${(directX == String.fromCharCode(116,0) ? directX.length : scheduled.size)}`;
         apps1 += `${customH.length}`;
         apps1 = `${customH.length}`;
       let loadingU = String.fromCharCode(112,101,114,112,105,120,101,108,95,99,95,53,54,0);
       let entryx = String.fromCharCode(112,97,115,115,95,53,95,55,54,0);
         cornerJ -= (parseFloat(`${String.fromCharCode(87,0) == apps1 ? apps1.length : loadingU.length}`));
          let fulli = 1.0;
          let calendarf = 4.0;
          let paginationk = false;
         customH += `${3 & customH.length}`;
         fulli += parseFloat(`${3}`);
         calendarf += parseFloat(`${parseInt(`${calendarf}`) * 2}`);
         paginationk = 37.55 <= fulli;
       let reducerS = String.fromCharCode(115,105,103,118,101,114,95,51,95,55,51,0);
      if (customH.length < apps1.length) {
         customH += `${entryx.length}`;
      }
      referrerv /= Math.max(1, parseInt(`${membershiph}`) | 3);
      downloadingJ = new Map([[`${libavdevice0.length}`, libavdevice0.length]]);
        

      placementi -= parseFloat(`${halfS.length % 1}`);
   if (2 == (4 + libavdevice0.length) || !grayg) {
      libavdevice0 = [1 - parseInt(`${referrerv}`)];
   }
   while (baidun.size >= 3) {
      grayg = libavdevice0.includes(placementi);
      break;
   }
   for (let b = 0; b < 3; b++) {
      placementi *= parseFloat(`${3}`);
   }
      placementi *= parseFloat(`${parseInt(`${membershiph}`) * 3}`);
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
       let interstitials = String.fromCharCode(98,95,50,52,95,100,105,118,105,115,111,114,0);
    let librrc9 = true;
    let v_lockt = 1.0;
    let spinner_ = false;
    let chinae: Map<any, any> = new Map([[String.fromCharCode(102,114,97,103,109,101,110,116,115,95,104,95,49,57,0),true ], [String.fromCharCode(118,98,114,117,115,104,95,115,95,55,0),true ], [String.fromCharCode(99,97,118,115,118,105,100,101,111,95,117,95,49,55,0),true ]]);
    let gpayi: Map<any, any> = new Map([[String.fromCharCode(122,95,55,55,95,110,111,100,101,115,101,116,0),String.fromCharCode(116,101,108,101,103,114,97,112,104,95,99,95,55,49,0)], [String.fromCharCode(116,95,52,53,95,100,95,54,0),String.fromCharCode(119,101,120,112,97,110,100,95,120,95,54,0)]]);
    let result6: Map<any, any> = new Map([[String.fromCharCode(99,114,111,115,115,111,118,101,114,95,121,95,53,51,0),342], [String.fromCharCode(109,107,118,109,117,120,101,114,95,103,95,52,53,0),227], [String.fromCharCode(122,95,56,57,95,101,109,111,116,105,99,111,110,115,0),408]]);
    let moduleN = String.fromCharCode(108,95,57,52,95,97,114,103,118,0);
    let descx = String.fromCharCode(119,95,50,50,95,100,101,97,108,108,111,99,97,116,101,100,0);
    let resende: Array<any> = [248, 122, 52];
    let roomd = String.fromCharCode(112,95,52,53,95,105,110,105,116,105,97,108,108,121,0);
    let carousel3 = true;
    let coreH = 5.0;
    let hook4 = String.fromCharCode(110,101,103,111,116,105,97,116,101,95,104,95,57,51,0);
    let with__T = 0.0;
    let episode5 = true;
   if (!interstitials.endsWith(`${result6.size}`)) {
       let pinge = true;
       let nativemodulel = String.fromCharCode(119,101,108,115,101,110,99,100,101,109,111,95,105,95,56,57,0);
       let libavdevice3 = String.fromCharCode(112,95,50,48,95,117,101,102,97,0);
       let bannerh: Array<any> = [97, 730, 467];
       let regengv = String.fromCharCode(112,104,111,110,101,98,111,111,107,95,104,95,50,53,0);
      for (let g = 0; g < 1; g++) {
          let bdxadsdks = 4.0;
          let lange = String.fromCharCode(109,112,101,103,97,117,100,105,111,100,101,99,116,97,98,95,109,95,55,57,0);
          let invite6: Array<any> = [String.fromCharCode(106,109,111,114,101,99,102,103,95,105,95,57,49,0), String.fromCharCode(120,99,111,100,101,95,109,95,57,52,0)];
         regengv += `${(bannerh.length >> (Math.min(1, Math.abs((pinge ? 1 : 1)))))}`;
         bdxadsdks /= Math.max(2, parseFloat(`${3}`));
         lange = `${parseInt(`${bdxadsdks}`)}`;
         invite6 = [invite6.length % 3];
      }
      while (!nativemodulel.startsWith(`${pinge}`)) {
          let annerU: Map<any, any> = new Map([[String.fromCharCode(97,109,101,120,95,115,95,49,48,48,0),229], [String.fromCharCode(112,108,97,121,112,97,117,115,101,95,49,95,57,48,0),405], [String.fromCharCode(113,95,54,95,115,99,97,110,110,101,114,0),129]]);
          let foregroundF: Array<any> = [String.fromCharCode(108,95,49,55,95,97,110,115,105,0), String.fromCharCode(105,100,120,95,54,95,55,53,0), String.fromCharCode(103,95,56,54,95,102,105,110,100,0)];
         nativemodulel = `${nativemodulel.length * 1}`;
         annerU = new Map([[`${annerU.size}`, 2]]);
         foregroundF.push(annerU.size * foregroundF.length);
         break;
      }
         nativemodulel += `${1 ^ bannerh.length}`;
      for (let y = 0; y < 1; y++) {
         libavdevice3 += `${nativemodulel.length}`;
      }
       let acceptedo = String.fromCharCode(110,95,51,56,95,101,109,111,116,105,99,111,110,115,0);
      for (let p = 0; p < 2; p++) {
         libavdevice3 = `${bannerh.length}`;
      }
          let backZ = 4.0;
          let viewera = String.fromCharCode(109,97,120,105,109,117,109,95,118,95,56,52,0);
         libavdevice3 += `${bannerh.length ^ 3}`;
         backZ /= Math.max(parseInt(`${backZ}`), 5);
         viewera += `${viewera.length / (Math.max(2, 3))}`;
         libavdevice3 = "3";
      let styleB = nativemodulel == String.fromCharCode(106,50,48,98,50,105,0);
      do {
         nativemodulel = `${libavdevice3.length}`;
         if (styleB) {
            break;
         }
      } while (styleB && (acceptedo == String.fromCharCode(102,0)));
      let checkbox4 = libavdevice3 == String.fromCharCode(107,118,48,48,118,101,100,0);
      do {
          let proxyO: Map<any, any> = new Map([[String.fromCharCode(118,95,52,49,95,109,97,114,115,104,97,108,108,105,110,103,0),131], [String.fromCharCode(103,117,101,115,115,95,104,95,51,52,0),10], [String.fromCharCode(109,101,100,105,117,109,116,104,114,101,115,104,95,105,95,52,50,0),382]]);
          let d_lockg = 1.0;
         libavdevice3 += `${(libavdevice3 == String.fromCharCode(68,0) ? nativemodulel.length : libavdevice3.length)}`;
         proxyO = new Map([[`${proxyO.size}`, 1 | proxyO.size]]);
         d_lockg /= Math.max(5, parseInt(`${d_lockg}`) % (Math.max(proxyO.size, 10)));
         if (checkbox4) {
            break;
         }
      } while (checkbox4 && (!pinge && 3 > libavdevice3.length));
      while (acceptedo.length < 1) {
         nativemodulel += `${acceptedo.length | libavdevice3.length}`;
         break;
      }
      while (libavdevice3.length >= 1 && pinge) {
          let hovers = 4.0;
          let mbjscommon9 = String.fromCharCode(117,110,122,116,101,108,108,95,56,95,55,0);
         pinge = nativemodulel.length <= 93;
         hovers *= mbjscommon9.length;
         mbjscommon9 = `${mbjscommon9.length}`;
         break;
      }
         bannerh.push(1 + bannerh.length);
         bannerh.push(1);
      for (let u = 0; u < 3; u++) {
         libavdevice3 = "2";
      }
      interstitials = "2";
   }
   for (let p = 0; p < 1; p++) {
      interstitials += `${roomd.length}`;
   }
      resende = [1 | roomd.length];
   let animationS = result6.size >= 6044556;
   do {
      result6 = new Map([[`${result6.size}`, (1 - (carousel3 ? 5 : 2))]]);
      if (animationS) {
         break;
      }
   } while ((5 > (result6.size % 1) || (result6.size % 1) > 1) && animationS);
   for (let f = 0; f < 3; f++) {
       let androidq = 3;
      if (androidq < 5) {
          let reactnativejs4: Map<any, any> = new Map([[String.fromCharCode(110,95,55,57,95,103,108,105,116,99,104,0),true ], [String.fromCharCode(115,95,49,54,95,104,97,110,100,108,101,0),true ], [String.fromCharCode(101,108,108,105,112,116,105,99,97,108,95,107,95,53,51,0),false ]]);
          let emptys = String.fromCharCode(112,101,114,102,111,114,109,101,114,95,120,95,49,57,0);
          let reducerV = 1.0;
          let renewu = String.fromCharCode(102,115,112,112,95,108,95,50,54,0);
          let final_sS = 3.0;
         androidq >>= Math.min(Math.abs((emptys == String.fromCharCode(122,0) ? emptys.length : parseInt(`${final_sS}`))), 2);
         reactnativejs4.set(`${renewu}`, reactnativejs4.size | renewu.length);
         reducerV -= parseFloat(`${renewu.length}`);
         final_sS -= parseFloat(`${parseInt(`${reducerV}`)}`);
      }
      let backb = androidq >= 9252676;
      do {
         androidq -= androidq >> (Math.min(Math.abs(1), 1));
         if (backb) {
            break;
         }
      } while (backb && (2 <= (androidq & 5) || 5 <= (androidq & androidq)));
      let smallS = 6548349 <= androidq;
      do {
         androidq *= 3 - androidq;
         if (smallS) {
            break;
         }
      } while ((3 >= (3 ^ androidq)) && smallS);
      roomd = `${interstitials.length}`;
   }
       let sportsA = 5.0;
       let backgroundj = true;
       let whistle_ = 0.0;
      for (let z = 0; z < 2; z++) {
         whistle_ /= Math.max((parseFloat(`${(backgroundj ? 5 : 2) / (Math.max(9, parseInt(`${sportsA}`)))}`)), 5);
      }
       let reactnativejs7: Array<any> = [489, 684];
       let navigationW = String.fromCharCode(116,114,97,105,116,115,95,110,95,54,50,0);
       let gesturesn = String.fromCharCode(105,115,115,101,116,117,103,105,100,95,113,95,49,51,0);
      for (let r = 0; r < 2; r++) {
         backgroundj = (((backgroundj ? 20 : gesturesn.length) / (Math.max(5, gesturesn.length))) == 20);
      }
      let libturbomodulejsijni1 = gesturesn.length <= 8991658;
      do {
         gesturesn += `${navigationW.length * 3}`;
         if (libturbomodulejsijni1) {
            break;
         }
      } while ((gesturesn.includes(`${navigationW.length}`)) && libturbomodulejsijni1);
      if (navigationW.length > parseInt(`${sportsA}`)) {
         navigationW += `${gesturesn.length}`;
      }
          let suggestiony = String.fromCharCode(114,97,109,112,95,118,95,49,48,48,0);
          let downloaderF = String.fromCharCode(100,111,119,110,115,97,109,112,108,101,95,51,95,57,49,0);
         whistle_ *= parseFloat(`${1}`);
         suggestiony = `${suggestiony.length % 1}`;
         downloaderF = `${downloaderF.length & suggestiony.length}`;
         gesturesn = `${reactnativejs7.length}`;
          let twittery = String.fromCharCode(111,95,53,55,95,115,119,101,101,112,0);
          let eighteenc = 3.0;
         sportsA -= parseInt(`${sportsA}`);
         twittery = "3";
         eighteenc += parseFloat(`${parseInt(`${eighteenc}`) - 2}`);
      spinner_ = descx == String.fromCharCode(114,0);
       let middlei = String.fromCharCode(101,95,54,51,95,101,120,99,108,117,115,105,118,101,0);
       let baidu3 = true;
       let hiadF = 0.0;
      for (let i = 0; i < 3; i++) {
         baidu3 = !baidu3;
      }
         middlei += `${((baidu3 ? 1 : 2) << (Math.min(middlei.length, 2)))}`;
       let auto_hG = 1.0;
       let classeso = 2.0;
      let splashs = classeso >= 8788171.0;
      do {
         classeso /= Math.max(((baidu3 ? 2 : 1) | 2), 2);
         if (splashs) {
            break;
         }
      } while (((classeso / 1.45) > 5.80) && splashs);
      if (2.24 > (3.66 * classeso) || 3.57 > (classeso * 3.66)) {
          let animation8 = String.fromCharCode(99,97,116,99,104,115,105,103,110,97,108,95,118,95,56,0);
          let leaguec: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,95,103,95,53,53,0),String.fromCharCode(119,102,100,105,102,95,117,95,49,53,0)], [String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,95,49,95,54,49,0),String.fromCharCode(101,115,116,105,109,97,116,105,110,103,95,49,95,55,51,0)]]);
          let shirtO = String.fromCharCode(108,95,53,55,95,114,116,109,112,99,114,121,112,116,0);
         auto_hG /= Math.max(middlei.length & animation8.length, 2);
         animation8 += `${shirtO.length / (Math.max(7, leaguec.size))}`;
         leaguec.set(shirtO, shirtO.length);
      }
          let libffmpegkita = 0.0;
          let profileg = String.fromCharCode(116,114,97,110,102,115,101,114,95,117,95,53,54,0);
         auto_hG /= Math.max(3, middlei.length >> (Math.min(Math.abs(1), 3)));
         libffmpegkita += parseFloat(`${profileg.length}`);
         profileg = `${(profileg == String.fromCharCode(52,0) ? profileg.length : parseInt(`${libffmpegkita}`))}`;
       let textlayoutmanagerh = String.fromCharCode(108,95,50,53,95,97,118,101,114,0);
       let adultv = String.fromCharCode(120,109,117,108,116,105,112,108,101,95,121,95,55,57,0);
       let greeni = 1.0;
          let chartJ = String.fromCharCode(114,111,117,116,101,95,55,95,50,0);
         classeso /= Math.max(parseInt(`${hiadF}`), 4);
         chartJ += `${chartJ.length}`;
      descx = "2";
      interstitials = `${roomd.length ^ 3}`;
      interstitials = `${chinae.size % (Math.max(interstitials.length, 9))}`;
      resende = [moduleN.length];
   while ((gpayi.size % (Math.max(4, chinae.size))) == 4 || (chinae.size % (Math.max(4, gpayi.size))) == 4) {
      chinae = new Map([[interstitials, 2]]);
      break;
   }
       let castingw = 1;
       let plashi = true;
      for (let c = 0; c < 2; c++) {
          let arrow_: Array<any> = [305, 103, 21];
          let networkl = true;
         castingw >>= Math.min(5, parseInt(`${Math.abs(((plashi ? 2 : 4) / (Math.max(castingw, 7))))}`));
         arrow_.push(1);
         networkl = !networkl;
      }
      for (let d = 0; d < 2; d++) {
         castingw /= Math.max(2, castingw);
      }
      for (let s = 0; s < 3; s++) {
         castingw &= 3 / (Math.max(castingw, 8));
      }
          let blackz = String.fromCharCode(99,97,99,104,101,102,108,117,115,104,95,120,95,52,48,0);
          let textM = String.fromCharCode(106,95,53,56,95,112,114,101,118,105,101,119,105,110,103,0);
          let componentA: Map<any, any> = new Map([[String.fromCharCode(104,95,55,56,95,99,111,110,116,101,120,116,117,97,108,0),String.fromCharCode(111,95,54,55,95,99,97,108,108,105,110,103,0)], [String.fromCharCode(97,110,121,95,109,95,49,54,0),String.fromCharCode(109,117,108,116,105,112,108,101,95,118,95,55,52,0)]]);
         castingw += 1;
         blackz = `${textM.length}`;
         textM = `${textM.length}`;
         componentA = new Map([[textM, textM.length ^ blackz.length]]);
      if ((5 ^ castingw) < 5 || castingw < 5) {
          let selectedI = String.fromCharCode(119,95,50,51,95,99,104,101,99,107,109,109,0);
          let windo: Array<any> = [311, 302, 312];
          let baidup = 5.0;
          let update_0wg = true;
         plashi = baidup >= 7.87 && 58 >= windo.length;
         selectedI = `${(selectedI.length << (Math.min(4, Math.abs((update_0wg ? 2 : 4)))))}`;
         windo = [selectedI.length / 1];
         baidup *= parseFloat(`${selectedI.length}`);
      }
      for (let m = 0; m < 3; m++) {
          let sided: Array<any> = [943, 489];
          let dangerU = 0;
         castingw %= Math.max(5, sided.length);
         sided = [dangerU << (Math.min(Math.abs(2), 2))];
         dangerU /= Math.max(1, 3);
      }
      spinner_ = !roomd.includes(`${plashi}`);
      gpayi = new Map([[`${coreH}`, roomd.length]]);
      librrc9 = roomd.length == 11 || 56.52 == coreH;
   while (Array.from(chinae.values()).includes(v_lockt)) {
      chinae = new Map([[`${carousel3}`, parseInt(`${coreH}`) - 1]]);
      break;
   }
      v_lockt /= Math.max(5, (3 | (spinner_ ? 2 : 4)));
   let pointj = 7463839.0 >= v_lockt;
   do {
       let dropdown8 = 0.0;
       let bottom9 = String.fromCharCode(121,95,56,56,95,115,121,110,116,104,101,115,105,115,0);
       let with_kF = String.fromCharCode(110,95,49,49,95,99,97,108,105,110,103,0);
       let mountingb: Map<any, any> = new Map([[String.fromCharCode(101,109,117,108,97,116,105,111,110,95,116,95,49,54,0),false ], [String.fromCharCode(102,95,51,57,95,116,119,111,119,97,121,0),true ]]);
       let phonel: Map<any, any> = new Map([[String.fromCharCode(108,95,51,48,95,115,112,100,105,102,0),769], [String.fromCharCode(112,95,51,95,99,108,111,115,101,100,0),597]]);
          let collectionC = 4.0;
          let type_xnn = 3.0;
          let j_titleb: Map<any, any> = new Map([[String.fromCharCode(100,95,57,56,95,102,105,108,108,0),true ], [String.fromCharCode(99,95,52,56,95,108,101,103,101,110,100,0),false ], [String.fromCharCode(111,99,99,117,114,114,101,110,99,101,115,95,100,95,48,0),true ]]);
         dropdown8 *= parseFloat(`${1}`);
         collectionC *= parseInt(`${type_xnn}`);
         j_titleb = new Map([[`${collectionC}`, 3 / (Math.max(5, parseInt(`${collectionC}`)))]]);
      let b_titlep = phonel.size <= 5556719;
      do {
         phonel = new Map([[`${phonel.size}`, parseInt(`${dropdown8}`) << (Math.min(Math.abs(phonel.size), 5))]]);
         if (b_titlep) {
            break;
         }
      } while (b_titlep && (phonel.get(`${mountingb.size}`) == null));
         mountingb.set(`${mountingb.size}`, phonel.size | 3);
      for (let h = 0; h < 3; h++) {
         with_kF = "3";
      }
         mountingb.set(with_kF, with_kF.length | mountingb.size);
          let overlays = 4;
          let episodes8 = String.fromCharCode(114,95,51,52,95,114,101,103,105,115,116,101,114,105,110,103,0);
         with_kF = `${bottom9.length}`;
         overlays %= Math.max((String.fromCharCode(89,0) == episodes8 ? overlays : episodes8.length), 5);
          let auto_ud = String.fromCharCode(100,105,115,112,111,115,97,98,108,101,115,95,107,95,52,55,0);
          let nalytics4 = String.fromCharCode(101,95,51,48,95,118,112,114,105,110,116,102,0);
          let splashb = 0.0;
         mountingb.set(with_kF, 1 & with_kF.length);
         auto_ud = `${2 - parseInt(`${splashb}`)}`;
         nalytics4 = `${3 % (Math.max(1, auto_ud.length))}`;
         splashb /= Math.max(auto_ud.length * parseInt(`${splashb}`), 1);
         mountingb = new Map([[`${phonel.size}`, 1 >> (Math.min(2, Math.abs(mountingb.size)))]]);
      v_lockt -= parseInt(`${dropdown8}`) + 3;
      if (pointj) {
         break;
      }
   } while (((hook4.length / (Math.max(3, 1))) == 2) && pointj);
   for (let b = 0; b < 3; b++) {
      coreH /= Math.max(2, (parseFloat(`${descx == String.fromCharCode(122,0) ? gpayi.size : descx.length}`)));
   }

        console.log("err save vod!");

      librrc9 = chinae.size > moduleN.length;
      librrc9 = with__T >= 98.78;
   if (!spinner_) {
      coreH += parseFloat(`${parseInt(`${with__T}`) >> (Math.min(4, Math.abs(3)))}`);
   }
   if (roomd == String.fromCharCode(67,0)) {
      hook4 = "3";
   }
   while (3.85 > with__T) {
      with__T += 3 + chinae.size;
      break;
   }
   let materialI = spinner_ ? !spinner_ : spinner_;
   do {
      spinner_ = 13.23 <= with__T;
      if (materialI) {
         break;
      }
   } while ((spinner_ && roomd.length >= 5) && materialI);
   let v_unlockj = carousel3 ? !carousel3 : carousel3;
   do {
      carousel3 = (resende.length / (Math.max(10, roomd.length))) <= 57;
      if (v_unlockj) {
         break;
      }
   } while ((spinner_) && v_unlockj);
      chinae.set(`${spinner_}`, interstitials.length | 1);
      descx = `${parseInt(`${v_lockt}`)}`;
       let downloadedX = String.fromCharCode(99,97,99,104,105,110,103,95,102,95,57,56,0);
          let recommendation2: Array<any> = [921, 429, 72];
          let kickd = false;
          let styleY = String.fromCharCode(107,95,49,48,95,116,114,97,110,115,108,105,116,101,114,97,116,101,0);
         downloadedX += `${((kickd ? 4 : 4))}`;
         recommendation2.push(recommendation2.length | styleY.length);
         kickd = 37 >= recommendation2.length || styleY == String.fromCharCode(69,0);
      let unselectedT = 5269293 >= downloadedX.length;
      do {
          let tickP = String.fromCharCode(121,95,51,53,95,118,105,97,98,108,101,0);
          let mcopy_umq = String.fromCharCode(101,111,99,100,95,57,95,54,48,0);
          let i_centerV: Array<any> = [29, 80, 63];
         downloadedX += `${tickP.length}`;
         tickP = `${mcopy_umq.length}`;
         mcopy_umq += `${(mcopy_umq == String.fromCharCode(77,0) ? i_centerV.length : mcopy_umq.length)}`;
         i_centerV = [mcopy_umq.length];
         if (unselectedT) {
            break;
         }
      } while ((!downloadedX.startsWith(downloadedX)) && unselectedT);
         downloadedX = `${downloadedX.length}`;
      coreH /= Math.max(5, parseFloat(`${chinae.size}`));
   let rootr = 5961504 >= gpayi.size;
   do {
      gpayi.set(`${with__T}`, chinae.size - 3);
      if (rootr) {
         break;
      }
   } while ((5 == moduleN.length) && rootr);
   let chinasameS = spinner_ ? !spinner_ : spinner_;
   do {
       let sourcez = String.fromCharCode(98,117,102,95,107,95,56,55,0);
       let guide0 = 5.0;
       let textlayoutmanagerZ = String.fromCharCode(113,95,57,49,95,115,104,97,114,101,100,107,101,121,0);
       let notificationX: Array<any> = [String.fromCharCode(110,95,54,57,95,112,114,101,115,101,110,99,101,115,0), String.fromCharCode(102,95,51,53,95,118,101,99,116,111,114,0), String.fromCharCode(104,95,54,57,95,116,121,112,101,115,116,114,0)];
       let playercommonJ: Array<any> = [686, 996];
         notificationX = [parseInt(`${guide0}`) << (Math.min(1, Math.abs(1)))];
      let v_locks = notificationX.length >= 8831360;
      do {
         notificationX.push(parseInt(`${guide0}`));
         if (v_locks) {
            break;
         }
      } while (v_locks && (playercommonJ.length > notificationX.length));
      if (3.42 < (guide0 / (Math.max(4.56, 1))) && (guide0 / 4.56) < 4.50) {
         notificationX.push(2);
      }
         notificationX = [playercommonJ.length ^ notificationX.length];
       let countryf = String.fromCharCode(98,95,55,54,95,116,111,114,99,104,0);
         playercommonJ = [(String.fromCharCode(73,0) == countryf ? notificationX.length : countryf.length)];
         guide0 += parseFloat(`${3 | textlayoutmanagerZ.length}`);
       let weiboU = String.fromCharCode(117,95,57,54,95,119,97,116,99,104,101,114,0);
      spinner_ = textlayoutmanagerZ.length < 98 && sourcez.length < 98;
      if (chinasameS) {
         break;
      }
   } while ((spinner_) && chinasameS);
   if (result6.size < moduleN.length) {
      result6.set(hook4, (String.fromCharCode(115,0) == hook4 ? gpayi.size : hook4.length));
   }
      v_lockt += 1 & gpayi.size;
   for (let m = 0; m < 3; m++) {
       let alertB = 3.0;
       let anytimeR = String.fromCharCode(115,98,99,100,115,112,95,49,95,51,49,0);
       let floatern: Array<any> = [String.fromCharCode(102,116,118,110,111,100,101,95,56,95,50,52,0), String.fromCharCode(106,95,52,52,95,115,117,98,109,111,100,101,108,0), String.fromCharCode(118,95,57,56,95,105,100,101,110,116,105,102,121,0)];
      if (1.66 == (alertB * 4.32) && 1 == (floatern.length * parseInt(`${alertB}`))) {
          let screenv: Array<any> = [String.fromCharCode(114,95,49,55,95,112,97,99,107,101,116,112,101,101,107,0), String.fromCharCode(100,95,55,55,95,112,117,98,107,101,121,104,97,115,104,0), String.fromCharCode(97,118,118,115,95,108,95,57,57,0)];
          let libavutil9: Array<any> = [207, 331, 403];
         floatern.push((anytimeR == String.fromCharCode(56,0) ? anytimeR.length : parseInt(`${alertB}`)));
         screenv = [libavutil9.length << (Math.min(Math.abs(2), 3))];
         libavutil9 = [libavutil9.length];
      }
       let tickb = String.fromCharCode(105,100,115,95,115,95,56,49,0);
         alertB += 1 + anytimeR.length;
      while (tickb.length > 4) {
         anytimeR = "3";
         break;
      }
      if (!tickb.includes(`${floatern.length}`)) {
         floatern = [parseInt(`${alertB}`)];
      }
      while ((floatern.length / 1) > 1 || 1.85 > (alertB / (Math.max(8, floatern.length)))) {
         alertB /= Math.max(5, tickb.length);
         break;
      }
      let imagemanagerg = 8049970 >= tickb.length;
      do {
         tickb = `${1 & floatern.length}`;
         if (imagemanagerg) {
            break;
         }
      } while (imagemanagerg && (anytimeR != String.fromCharCode(75,0)));
      if (!anytimeR.endsWith(`${tickb.length}`)) {
          let update_19Y: Map<any, any> = new Map([[String.fromCharCode(108,97,110,103,95,50,95,57,52,0),241], [String.fromCharCode(105,110,108,105,103,104,116,95,102,95,48,0),688], [String.fromCharCode(112,105,112,95,114,95,52,52,0),846]]);
          let g_titlei = 5.0;
          let libreactnativejnir = 2.0;
          let libavdeviceP = 0.0;
          let with_ikY: Array<any> = [576, 711];
         anytimeR += `${(tickb == String.fromCharCode(121,0) ? tickb.length : update_19Y.size)}`;
         update_19Y.set(`${g_titlei}`, 3 + parseInt(`${libreactnativejnir}`));
         g_titlei += parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${libavdeviceP}`)), 1))}`);
         libreactnativejnir += parseInt(`${libavdeviceP}`);
         with_ikY = [parseInt(`${libreactnativejnir}`)];
      }
       let friendse: Array<any> = [60, 444, 674];
       let direct7: Array<any> = [String.fromCharCode(106,95,56,53,95,99,114,101,97,116,105,110,103,0), String.fromCharCode(115,101,114,105,97,108,105,122,101,100,95,115,95,51,56,0), String.fromCharCode(108,95,51,53,95,116,114,97,110,115,112,0)];
      coreH += parseFloat(`${1 ^ descx.length}`);
   }
      roomd = `${parseInt(`${coreH}`)}`;
       let logoutd: Array<any> = [147, 670, 745];
       let less5 = 2;
       let weibom = 5.0;
       let textinput_ = String.fromCharCode(99,111,115,105,103,110,97,116,111,114,105,101,115,95,121,95,49,0);
       let v_center0 = String.fromCharCode(115,111,102,114,101,101,95,107,95,56,50,0);
          let danger9: Array<any> = [222, 832];
          let assistF: Map<any, any> = new Map([[String.fromCharCode(115,112,105,110,110,101,114,95,103,95,56,48,0),true ], [String.fromCharCode(115,95,50,52,95,102,114,111,109,98,105,110,100,0),true ], [String.fromCharCode(114,97,108,102,95,112,95,51,54,0),true ]]);
          let photoK = String.fromCharCode(122,95,54,48,95,99,109,97,107,101,0);
         weibom /= Math.max(parseFloat(`${1 - logoutd.length}`), 4);
         danger9 = [assistF.size % (Math.max(danger9.length, 2))];
         assistF = new Map([[`${assistF.size}`, photoK.length]]);
         photoK = `${2 ^ assistF.size}`;
      while ((1 & logoutd.length) > 1 || (logoutd.length & less5) > 1) {
         less5 <<= Math.min(textinput_.length, 2);
         break;
      }
       let moonQ = 3;
       let phoneN = 4.0;
      if ((phoneN + 1.45) < 4.60) {
          let trophy9 = String.fromCharCode(115,101,110,115,105,116,105,118,101,95,54,95,56,55,0);
          let string3 = 5.0;
          let i_managerN = 3;
          let orientationQ = String.fromCharCode(115,104,105,102,116,115,95,103,95,52,56,0);
         phoneN *= parseFloat(`${3}`);
         trophy9 += `${i_managerN | trophy9.length}`;
         string3 += i_managerN;
         orientationQ += `${trophy9.length}`;
      }
      while (4.65 < (1.89 / (Math.max(3, weibom))) && (less5 << (Math.min(Math.abs(2), 1))) < 2) {
         weibom += parseFloat(`${parseInt(`${weibom}`) * parseInt(`${phoneN}`)}`);
         break;
      }
         weibom /= Math.max(3, parseFloat(`${textinput_.length}`));
      while (!logoutd.includes(less5)) {
          let descR = String.fromCharCode(99,104,101,99,107,101,114,95,52,95,52,53,0);
          let const_ez: Array<any> = [240, 438, 859];
         logoutd = [textinput_.length];
         descR = `${(descR == String.fromCharCode(67,0) ? const_ez.length : descR.length)}`;
         const_ez = [(descR == String.fromCharCode(116,0) ? descR.length : const_ez.length)];
         break;
      }
      interstitials += `${1 + hook4.length}`;
   while (coreH < 2.41) {
      coreH -= parseFloat(`${parseInt(`${v_lockt}`)}`);
      break;
   }
        console.log(err);
      }
    };

    const deviceOrientationHandle = () => {
       let confirmation_ = 4.0;
    let basey = true;
    let matchesQ = true;
    let roundk = 2.0;
    let libjsinspectorm = String.fromCharCode(105,95,56,51,95,118,97,108,105,100,97,116,111,114,115,0);
    let libreactnativeblobV = String.fromCharCode(97,117,116,111,114,111,116,97,116,105,111,110,95,49,95,53,53,0);
    let q_countz = false;
    let unreadS = 0.0;
    let binddatasP = 5.0;
    let debug6 = 0;
    let selectedf = String.fromCharCode(108,95,51,51,95,105,115,116,114,101,97,109,0);
    let rulesF = String.fromCharCode(115,101,99,112,107,95,109,95,52,55,0);
    let mbbidK: Array<any> = [959, 605, 41];
    let textlayoutmanagerE = true;
    let materialZ: Map<any, any> = new Map([[String.fromCharCode(116,95,48,95,104,121,115,116,101,114,101,115,105,115,0),809], [String.fromCharCode(115,116,114,110,108,101,110,95,50,95,51,56,0),732]]);
   let tempw = 7485651 <= selectedf.length;
   do {
       let inactive5 = String.fromCharCode(108,111,110,103,95,99,95,49,48,48,0);
       let private_cB = String.fromCharCode(122,95,57,54,95,98,117,102,114,101,102,0);
       let materialA: Array<any> = [628, 653];
       let crownI = 5;
       let condensedW = String.fromCharCode(99,111,102,97,99,116,111,114,95,49,95,48,0);
          let episodesX = 3.0;
          let membershipq = String.fromCharCode(106,95,49,48,95,107,101,109,112,102,0);
         inactive5 += "3";
         episodesX += (membershipq == String.fromCharCode(87,0) ? membershipq.length : parseInt(`${episodesX}`));
      while (!private_cB.startsWith(`${materialA.length}`)) {
         materialA = [materialA.length];
         break;
      }
      if (condensedW == private_cB) {
         private_cB = `${materialA.length | private_cB.length}`;
      }
      while (3 < inactive5.length) {
          let guideA = 0;
          let colorsz = String.fromCharCode(113,95,49,54,95,114,101,115,116,114,105,99,116,105,111,110,0);
         private_cB = `${inactive5.length % (Math.max(7, crownI))}`;
         guideA /= Math.max(colorsz.length * guideA, 3);
         colorsz = `${colorsz.length}`;
         break;
      }
      for (let w = 0; w < 1; w++) {
         crownI += 3 | inactive5.length;
      }
         inactive5 += `${private_cB.length}`;
         crownI *= private_cB.length % 3;
      while ((materialA.length ^ condensedW.length) >= 2 && (materialA.length ^ 2) >= 5) {
         condensedW = `${inactive5.length}`;
         break;
      }
      if (4 <= (crownI * 5) && (crownI * condensedW.length) <= 5) {
          let frame_ui = 2.0;
          let resendZ = 0;
          let gdtadvI: Map<any, any> = new Map([[String.fromCharCode(100,95,50,49,95,102,105,116,115,0),249], [String.fromCharCode(122,95,50,51,95,114,101,116,114,105,101,118,101,0),206]]);
          let castC = String.fromCharCode(102,95,56,55,95,112,114,101,100,105,99,97,116,101,0);
         crownI <<= Math.min(1, Math.abs(inactive5.length >> (Math.min(1, Math.abs(resendZ)))));
         frame_ui *= parseFloat(`${3 * gdtadvI.size}`);
         resendZ ^= 1 - parseInt(`${frame_ui}`);
         gdtadvI.set(castC, (String.fromCharCode(114,0) == castC ? gdtadvI.size : castC.length));
      }
         condensedW += `${3 & materialA.length}`;
      let mbridgeb = String.fromCharCode(99,119,121,109,95,112,121,57,114,0) == inactive5;
      do {
          let penaltyC = 4;
          let textT = String.fromCharCode(105,109,97,103,101,121,117,118,99,111,110,102,105,103,95,109,95,50,56,0);
          let floatere = String.fromCharCode(116,95,57,95,112,108,97,99,101,104,111,108,100,101,114,0);
          let zhuboU: Array<any> = [460, 816];
         inactive5 = `${penaltyC | 3}`;
         penaltyC |= 3 * floatere.length;
         textT = `${floatere.length % (Math.max(textT.length, 6))}`;
         zhuboU = [textT.length % (Math.max(floatere.length, 10))];
         if (mbridgeb) {
            break;
         }
      } while ((3 > materialA.length) && mbridgeb);
       let matches5 = false;
      for (let p = 0; p < 3; p++) {
         private_cB += "3";
      }
         crownI |= condensedW.length;
      for (let z = 0; z < 2; z++) {
         private_cB += `${crownI | private_cB.length}`;
      }
      selectedf += "2";
      if (tempw) {
         break;
      }
   } while (tempw && (libjsinspectorm.length >= selectedf.length));
      selectedf += `${parseInt(`${roundk}`) & 3}`;
       let latnk = 4.0;
       let google8 = String.fromCharCode(98,97,99,107,101,110,100,95,105,95,57,53,0);
       let l_positionM = false;
      while (google8.includes(`${l_positionM}`)) {
         google8 = `${(3 + (l_positionM ? 4 : 5))}`;
         break;
      }
      let awayO = google8.length >= 7497587;
      do {
          let qaagP: Map<any, any> = new Map([[String.fromCharCode(110,111,111,112,95,54,95,56,48,0),String.fromCharCode(107,95,50,55,95,112,97,115,116,101,98,111,97,114,100,0)], [String.fromCharCode(98,95,57,51,95,100,114,97,103,0),String.fromCharCode(101,110,100,105,97,110,110,101,115,115,95,49,95,57,56,0)]]);
          let rewindL = 3;
         google8 = `${(parseInt(`${latnk}`) * (l_positionM ? 3 : 1))}`;
         qaagP.set(`${rewindL}`, qaagP.size);
         rewindL += rewindL % (Math.max(qaagP.size, 10));
         if (awayO) {
            break;
         }
      } while (awayO && ((google8.length / (Math.max(6, parseInt(`${latnk}`)))) >= 5));
       let nalyticsO = 0.0;
       let servicev = 0.0;
      let libimagepipelineT = latnk >= 8288848.0;
      do {
          let alert3 = 0.0;
          let completeE = 4.0;
         latnk -= parseFloat(`${2 * parseInt(`${servicev}`)}`);
         alert3 += parseInt(`${completeE}`);
         if (libimagepipelineT) {
            break;
         }
      } while (((3 | google8.length) >= 2) && libimagepipelineT);
      let optionsx = 5835566.0 >= nalyticsO;
      do {
          let nativeexC: Array<any> = [748, 453, 906];
          let libfbjniW = 4.0;
          let listv = 2.0;
          let interneti = String.fromCharCode(117,95,52,55,95,106,115,111,110,114,112,99,0);
          let j_countq = 2.0;
         nalyticsO += 3 | parseInt(`${libfbjniW}`);
         nativeexC = [nativeexC.length ^ parseInt(`${listv}`)];
         libfbjniW += parseInt(`${listv}`);
         interneti = `${nativeexC.length}`;
         j_countq /= Math.max(parseFloat(`${3}`), 4);
         if (optionsx) {
            break;
         }
      } while ((3.28 < (nalyticsO / (Math.max(4.6, 8)))) && optionsx);
          let auto_xrq = String.fromCharCode(98,117,114,115,116,95,53,95,53,53,0);
          let ynewinterstitialB = 0.0;
          let bottome = 1.0;
         l_positionM = !l_positionM;
         auto_xrq = `${2 / (Math.max(parseInt(`${ynewinterstitialB}`), 1))}`;
         ynewinterstitialB *= parseInt(`${bottome}`);
      let bdxadsdkR = google8 == String.fromCharCode(105,102,112,55,109,113,0);
      do {
         google8 += "2";
         if (bdxadsdkR) {
            break;
         }
      } while ((2.78 <= (google8.length - nalyticsO) && (parseInt(`${nalyticsO}`) - google8.length) <= 2) && bdxadsdkR);
      for (let p = 0; p < 3; p++) {
         servicev *= parseInt(`${servicev}`) ^ 1;
      }
         nalyticsO -= (parseInt(`${servicev}`) * (l_positionM ? 2 : 5));
      binddatasP *= parseFloat(`${parseInt(`${latnk}`) >> (Math.min(selectedf.length, 1))}`);
       let dropdowni: Map<any, any> = new Map([[String.fromCharCode(101,99,114,101,100,95,120,95,57,57,0),239], [String.fromCharCode(110,117,109,101,114,105,99,95,107,95,55,51,0),3]]);
       let libswscale0 = String.fromCharCode(115,117,105,116,101,98,95,114,95,55,57,0);
      let whistlep = dropdowni.size >= 5337351;
      do {
         dropdowni = new Map([[`${dropdowni.size}`, (libswscale0 == String.fromCharCode(104,0) ? dropdowni.size : libswscale0.length)]]);
         if (whistlep) {
            break;
         }
      } while (whistlep && (3 > (libswscale0.length / 1)));
      if (3 >= libswscale0.length) {
         dropdowni.set(libswscale0, libswscale0.length);
      }
      for (let v = 0; v < 3; v++) {
         dropdowni = new Map([[`${dropdowni.size}`, 2]]);
      }
      while (1 > (libswscale0.length >> (Math.min(Math.abs(2), 4))) || 4 > (2 >> (Math.min(1, libswscale0.length)))) {
         libswscale0 = `${libswscale0.length}`;
         break;
      }
         dropdowni = new Map([[`${dropdowni.size}`, libswscale0.length >> (Math.min(Math.abs(3), 2))]]);
         dropdowni.set(libswscale0, libswscale0.length);
      selectedf += `${selectedf.length / 2}`;

      

      selectedf = `${parseInt(`${binddatasP}`) / 2}`;
   if (!selectedf.includes(`${unreadS}`)) {
       let strings5 = String.fromCharCode(99,111,111,114,100,115,95,55,95,51,54,0);
       let overlayb: Map<any, any> = new Map([[String.fromCharCode(97,98,105,95,48,95,50,57,0),true ], [String.fromCharCode(98,121,116,101,95,53,95,56,51,0),true ]]);
       let views6: Array<any> = [391, 75];
       let fileq: Map<any, any> = new Map([[String.fromCharCode(98,95,56,51,95,99,97,110,100,105,100,97,116,101,115,0),false ], [String.fromCharCode(114,101,108,97,121,95,106,95,56,0),true ]]);
       let minivodf = String.fromCharCode(113,95,54,53,95,99,97,114,116,0);
      for (let s = 0; s < 2; s++) {
         views6.push((String.fromCharCode(101,0) == minivodf ? minivodf.length : views6.length));
      }
      let descg = 7774062 <= fileq.size;
      do {
         fileq.set(minivodf, (String.fromCharCode(112,0) == minivodf ? strings5.length : minivodf.length));
         if (descg) {
            break;
         }
      } while (((3 & fileq.size) <= 2) && descg);
         fileq = new Map([[`${overlayb.size}`, (String.fromCharCode(72,0) == strings5 ? overlayb.size : strings5.length)]]);
       let hejiL = true;
       let mode7 = true;
       let otherF = 2.0;
      if (views6.length == 4) {
          let crownf = false;
         views6 = [parseInt(`${otherF}`) << (Math.min(3, Math.abs(3)))];
         crownf = (!crownf ? crownf : crownf);
      }
       let topict = true;
          let material0: Array<any> = [592, 690, 908];
          let thailandr = String.fromCharCode(117,110,115,111,114,116,101,100,95,106,95,49,48,0);
         mode7 = topict;
         material0 = [thailandr.length];
         thailandr += `${thailandr.length}`;
      if ((views6.length + fileq.size) >= 4) {
         views6.push(parseInt(`${otherF}`) >> (Math.min(Math.abs(overlayb.size), 2)));
      }
      let selectedh = strings5 == String.fromCharCode(121,49,57,51,0);
      do {
          let filterA = 0.0;
          let panglef = 0.0;
          let chat3: Map<any, any> = new Map([[String.fromCharCode(99,114,108,115,95,107,95,56,49,0),477], [String.fromCharCode(101,110,104,97,110,99,101,114,95,53,95,51,55,0),599], [String.fromCharCode(97,112,99,109,95,113,95,50,57,0),914]]);
          let refreshD = String.fromCharCode(98,95,52,54,95,99,105,112,104,101,114,115,0);
         strings5 = `${(overlayb.size | (topict ? 4 : 1))}`;
         filterA *= 2;
         panglef += parseFloat(`${parseInt(`${panglef}`) ^ 3}`);
         chat3 = new Map([[`${chat3.size}`, refreshD.length]]);
         refreshD = `${(refreshD == String.fromCharCode(85,0) ? refreshD.length : parseInt(`${panglef}`))}`;
         if (selectedh) {
            break;
         }
      } while (selectedh && (!minivodf.includes(strings5)));
         fileq = new Map([[`${fileq.size}`, 1 | fileq.size]]);
         mode7 = 45 == views6.length;
      for (let b = 0; b < 2; b++) {
         fileq = new Map([[`${fileq.size}`, fileq.size & 1]]);
      }
          let schedulery = String.fromCharCode(110,95,54,48,95,119,109,97,112,114,111,0);
          let friendsO = String.fromCharCode(98,95,49,95,114,111,98,111,108,101,99,116,114,105,99,0);
         otherF -= 1;
         schedulery += `${schedulery.length * friendsO.length}`;
         friendsO += `${schedulery.length}`;
      while (views6.length > 3) {
          let libreactperfloggerjniX = true;
          let taiwanr = false;
          let rewardL = String.fromCharCode(98,114,105,101,102,108,121,95,53,95,52,51,0);
          let binddatasS = 1;
         hejiL = ((strings5.length - (!hejiL ? strings5.length : 86)) <= 86);
         libreactperfloggerjniX = binddatasS > 26;
         taiwanr = binddatasS <= rewardL.length;
         rewardL += `${(1 / (Math.max(8, (taiwanr ? 3 : 5))))}`;
         break;
      }
      selectedf = `${(selectedf == String.fromCharCode(101,0) ? parseInt(`${roundk}`) : selectedf.length)}`;
   }
      debug6 /= Math.max(parseInt(`${unreadS}`) - 1, 2);
   if (!q_countz) {
      basey = !libreactnativeblobV.endsWith(`${basey}`);
   }
      if (
        devicesOrientation === "LANDSCAPE-LEFT" ||
        devicesOrientation === "LANDSCAPE-RIGHT"
      ) {

   if (roundk > 3.40) {
      unreadS -= selectedf.length;
   }
   let resultS = selectedf.length >= 5252441;
   do {
      selectedf = `${debug6 | libreactnativeblobV.length}`;
      if (resultS) {
         break;
      }
   } while ((matchesQ) && resultS);
   for (let f = 0; f < 3; f++) {
      binddatasP *= parseFloat(`${parseInt(`${confirmation_}`) << (Math.min(Math.abs(2), 2))}`);
   }
       let confirmation6 = 3.0;
      let back5 = confirmation6 >= 5882515.0;
      do {
         confirmation6 += 1;
         if (back5) {
            break;
         }
      } while ((3.59 > (5.3 - confirmation6) || 4.46 > (confirmation6 + 5.3)) && back5);
          let userZ = String.fromCharCode(99,111,110,110,101,99,116,105,118,105,116,121,95,99,95,49,56,0);
         confirmation6 -= 1 - userZ.length;
      while (confirmation6 < 1.35) {
         confirmation6 *= 3 % (Math.max(6, parseInt(`${confirmation6}`)));
         break;
      }
      binddatasP /= Math.max((parseFloat(`${(q_countz ? 4 : 5) % (Math.max((basey ? 4 : 1), 6))}`)), 2);
        setIsFullScreen(true);

      matchesQ = debug6 < 8;
   let gestureu = libreactnativeblobV.length >= 5653241;
   do {
      libreactnativeblobV = `${parseInt(`${binddatasP}`) & 1}`;
      if (gestureu) {
         break;
      }
   } while (gestureu && (parseInt(`${unreadS}`) <= libreactnativeblobV.length));
       let smallQ: Array<any> = [441, 832, 599];
         smallQ.push(smallQ.length);
         smallQ.push(smallQ.length);
      while (4 > (smallQ.length ^ smallQ.length)) {
         smallQ.push(smallQ.length >> (Math.min(4, smallQ.length)));
         break;
      }
      binddatasP /= Math.max(3, parseFloat(`${parseInt(`${roundk}`) + 2}`));
       let ginit_4fx: Array<any> = [727, 773, 665];
       let bridgek = 5.0;
      while ((parseInt(`${bridgek}`) - ginit_4fx.length) > 1 && 1 > (parseInt(`${bridgek}`) - ginit_4fx.length)) {
         ginit_4fx.push(parseInt(`${bridgek}`) | 3);
         break;
      }
         bridgek /= Math.max(parseInt(`${bridgek}`), 2);
         bridgek *= parseInt(`${bridgek}`) >> (Math.min(ginit_4fx.length, 3));
         bridgek *= 3;
      let buildw = 8977600.0 >= bridgek;
      do {
         bridgek += 2;
         if (buildw) {
            break;
         }
      } while ((2.59 == (bridgek - 3.79)) && buildw);
         bridgek += 1;
      debug6 *= 1;
        

      q_countz = String.fromCharCode(73,0) == rulesF;
   while (3.82 == (roundk * 3.99) || (parseFloat(`${libreactnativeblobV.length}`) * roundk) == 3.99) {
      libreactnativeblobV = `${selectedf.length / 2}`;
      break;
   }
      roundk -= parseFloat(`${rulesF.length ^ 2}`);
   for (let o = 0; o < 3; o++) {
      libjsinspectorm = `${((matchesQ ? 3 : 2) | (basey ? 4 : 1))}`;
   }
        StatusBar.setHidden(true);

      libreactnativeblobV = `${(selectedf == String.fromCharCode(112,0) ? (q_countz ? 4 : 3) : selectedf.length)}`;
   let gdtadvd = basey ? !basey : basey;
   do {
      basey = 53.72 >= unreadS;
      if (gdtadvd) {
         break;
      }
   } while ((!basey) && gdtadvd);
      selectedf = `${selectedf.length}`;
      debug6 ^= 2 % (Math.max(7, libjsinspectorm.length));

        lockOrientation(devicesOrientation);
      } else if (devicesOrientation === "PORTRAIT") {

       let unimplementedview_ = 1;
       let private_loC: Map<any, any> = new Map([[String.fromCharCode(100,105,99,116,105,111,110,97,114,121,95,100,95,51,50,0),833], [String.fromCharCode(116,95,54,52,95,115,110,97,107,101,0),543]]);
       let sentryQ = 1.0;
         unimplementedview_ /= Math.max(4, parseInt(`${sentryQ}`) | unimplementedview_);
       let attributedstringp = String.fromCharCode(115,112,101,99,105,102,105,101,114,115,95,122,95,52,55,0);
         unimplementedview_ ^= private_loC.size;
         attributedstringp += `${private_loC.size}`;
      let change5 = sentryQ >= 5846857.0;
      do {
         sentryQ += parseFloat(`${parseInt(`${sentryQ}`) | 1}`);
         if (change5) {
            break;
         }
      } while (((1 - attributedstringp.length) < 2) && change5);
      while ((unimplementedview_ * parseInt(`${sentryQ}`)) == 1 || 3.3 == (sentryQ * parseFloat(`${unimplementedview_}`))) {
         sentryQ += parseFloat(`${3}`);
         break;
      }
      let selected6 = 5907901 <= unimplementedview_;
      do {
          let predictionI = 3;
         unimplementedview_ += private_loC.size;
         predictionI -= predictionI & predictionI;
         if (selected6) {
            break;
         }
      } while (selected6 && (4 < (4 | unimplementedview_) && (attributedstringp.length | unimplementedview_) < 4));
      for (let y = 0; y < 1; y++) {
         private_loC = new Map([[`${unimplementedview_}`, 1 ^ parseInt(`${sentryQ}`)]]);
      }
      let pingA = attributedstringp == String.fromCharCode(55,118,103,51,99,115,113,95,0);
      do {
         attributedstringp = `${1 - parseInt(`${sentryQ}`)}`;
         if (pingA) {
            break;
         }
      } while (pingA && (private_loC.size >= attributedstringp.length));
      selectedf = "2";
   let bridgex = 8174309.0 <= unreadS;
   do {
       let placementT = true;
      while (!placementT && placementT) {
          let hongkongC: Map<any, any> = new Map([[String.fromCharCode(106,95,55,55,95,121,117,118,121,117,118,0),true ], [String.fromCharCode(114,101,113,117,101,115,116,95,111,95,52,49,0),true ], [String.fromCharCode(105,95,53,54,95,120,112,116,97,98,108,101,0),true ]]);
          let memberx = String.fromCharCode(101,110,117,109,101,114,97,116,101,95,54,95,56,53,0);
          let left9 = String.fromCharCode(118,95,55,55,0);
          let muted_ = 3;
         placementT = (62 == ((!placementT ? left9.length : 62) / (Math.max(left9.length, 3))));
         hongkongC = new Map([[`${hongkongC.size}`, hongkongC.size]]);
         memberx += `${hongkongC.size * memberx.length}`;
         muted_ -= memberx.length;
         break;
      }
          let reducerA: Map<any, any> = new Map([[String.fromCharCode(98,95,50,55,95,102,105,108,116,101,114,115,0),813], [String.fromCharCode(117,95,50,52,95,100,97,115,104,101,115,0),106]]);
          let libfabricjnin = String.fromCharCode(116,95,56,50,95,100,101,97,108,108,111,99,0);
          let stringsq = 0;
         placementT = libfabricjnin.includes(`${stringsq}`);
         reducerA = new Map([[`${reducerA.size}`, 1 - reducerA.size]]);
         libfabricjnin = `${reducerA.size | reducerA.size}`;
          let checkboxS = String.fromCharCode(99,95,51,54,95,100,101,102,108,105,99,107,101,114,0);
         placementT = checkboxS.length < 27 && placementT;
      unreadS *= parseInt(`${roundk}`) * 2;
      if (bridgex) {
         break;
      }
   } while (bridgex && (basey && (5.69 / (Math.max(7, unreadS))) >= 4.91));
      q_countz = libjsinspectorm.length < 19;
      unreadS += 3;
        setIsFullScreen(false);

   while (libreactnativeblobV.startsWith(`${selectedf.length}`)) {
      selectedf = `${parseInt(`${binddatasP}`) >> (Math.min(2, Math.abs(3)))}`;
      break;
   }
   for (let s = 0; s < 2; s++) {
       let m_imagee = 0.0;
       let string3 = String.fromCharCode(100,95,56,54,95,110,117,108,108,0);
       let eventU = 4.0;
       let analyticsQ = true;
         analyticsQ = string3 == String.fromCharCode(69,0);
      let tickedi = m_imagee <= 9418422.0;
      do {
          let thailandS = 2;
         m_imagee -= parseFloat(`${string3.length + 3}`);
         thailandS += thailandS * 3;
         if (tickedi) {
            break;
         }
      } while ((5.67 <= m_imagee) && tickedi);
      for (let w = 0; w < 2; w++) {
         m_imagee += parseFloat(`${parseInt(`${eventU}`)}`);
      }
         eventU *= parseInt(`${m_imagee}`);
          let listP = 2.0;
         eventU -= string3.length - 1;
         listP += parseFloat(`${2 & parseInt(`${listP}`)}`);
      while (1.56 > (eventU / (Math.max(2.23, 6))) || 2.23 > eventU) {
          let analyticsy = 1.0;
          let rulesM = true;
         analyticsQ = String.fromCharCode(114,0) == string3 || 7.12 >= m_imagee;
         analyticsy -= parseInt(`${analyticsy}`) & 3;
         rulesM = analyticsy <= 53.76 && rulesM;
         break;
      }
         string3 = `${string3.length}`;
         m_imagee *= (parseFloat(`${(analyticsQ ? 5 : 5) / (Math.max(9, parseInt(`${eventU}`)))}`));
      while ((string3.length * 5) >= 4 && (m_imagee / 4.63) >= 1.23) {
         string3 = `${((analyticsQ ? 5 : 3) + parseInt(`${m_imagee}`))}`;
         break;
      }
         string3 += `${(string3 == String.fromCharCode(108,0) ? string3.length : parseInt(`${m_imagee}`))}`;
      if (4 < string3.length) {
         string3 += `${parseInt(`${m_imagee}`) * 1}`;
      }
          let animationK: Map<any, any> = new Map([[String.fromCharCode(118,95,53,51,95,97,99,104,101,0),false ], [String.fromCharCode(118,109,112,114,105,110,116,102,95,52,95,49,48,48,0),false ], [String.fromCharCode(107,95,50,52,95,102,116,118,99,108,0),false ]]);
          let expand8 = String.fromCharCode(115,117,98,112,97,116,104,115,95,115,95,50,52,0);
         analyticsQ = string3.length > 26;
         animationK = new Map([[`${animationK.size}`, (String.fromCharCode(107,0) == expand8 ? animationK.size : expand8.length)]]);
      confirmation_ -= (parseInt(`${roundk}`) | (analyticsQ ? 2 : 3));
   }
      confirmation_ *= parseInt(`${confirmation_}`) * 3;
   if (libjsinspectorm.includes(`${roundk}`)) {
      libjsinspectorm += `${3 % (Math.max(4, parseInt(`${roundk}`)))}`;
   }
        

       let graphicst = String.fromCharCode(117,95,54,57,95,115,117,112,101,114,98,108,111,99,107,115,0);
         graphicst = "3";
      let benefitZ = 8208118 >= graphicst.length;
      do {
         graphicst += `${graphicst.length / 1}`;
         if (benefitZ) {
            break;
         }
      } while (benefitZ && (1 < graphicst.length));
          let libreanimatedX: Array<any> = [379, 998];
          let unselectedR = 5;
          let filledT = 0.0;
         graphicst = `${parseInt(`${filledT}`) ^ graphicst.length}`;
         libreanimatedX.push(3 + libreanimatedX.length);
         unselectedR += 2;
         filledT -= parseFloat(`${libreanimatedX.length & unselectedR}`);
      debug6 %= Math.max(parseInt(`${confirmation_}`), 4);
      libreactnativeblobV = "1";
       let x_positionH: Map<any, any> = new Map([[String.fromCharCode(100,95,55,53,95,108,105,110,107,0),337], [String.fromCharCode(108,101,103,97,99,121,95,103,95,55,56,0),669]]);
       let canvasp = String.fromCharCode(100,101,116,101,99,116,111,114,95,110,95,57,51,0);
         canvasp += `${canvasp.length}`;
          let project7 = 2;
          let configuref = false;
          let colorsS = String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,105,110,103,95,101,95,56,54,0);
         x_positionH.set(colorsS, 2);
         project7 /= Math.max(project7, 5);
         configuref = (project7 - project7) == 79;
          let mbjscommonZ = 4.0;
          let clearv = String.fromCharCode(119,109,97,112,114,111,100,97,116,97,95,52,95,54,0);
         x_positionH.set(canvasp, parseInt(`${mbjscommonZ}`) % (Math.max(7, canvasp.length)));
         mbjscommonZ -= parseFloat(`${clearv.length}`);
         clearv = "3";
      if (3 >= (canvasp.length % 2)) {
          let anytimeS = 2;
          let module7 = 5.0;
          let libreactperfloggerjnih = 2.0;
          let championD: Array<any> = [145, 450, 992];
         x_positionH.set(`${anytimeS}`, anytimeS);
         module7 += parseFloat(`${championD.length}`);
         libreactperfloggerjnih -= parseFloat(`${2 * championD.length}`);
      }
      let referrerz = String.fromCharCode(57,51,106,53,54,113,0) == canvasp;
      do {
          let dialogH: Map<any, any> = new Map([[String.fromCharCode(98,105,116,118,101,99,115,95,116,95,51,0),581], [String.fromCharCode(108,95,52,55,95,99,97,112,97,98,105,108,105,116,121,0),755], [String.fromCharCode(97,95,57,50,95,114,116,109,112,99,114,121,112,116,0),819]]);
          let time_k3r: Array<any> = [372, 407, 884];
          let libreactv = false;
         canvasp += `${(x_positionH.size / (Math.max(10, (libreactv ? 4 : 3))))}`;
         dialogH = new Map([[`${dialogH.size}`, dialogH.size]]);
         time_k3r = [1 & dialogH.size];
         libreactv = 93 < dialogH.size;
         if (referrerz) {
            break;
         }
      } while (referrerz && (4 == (canvasp.length >> (Math.min(4, Math.abs(x_positionH.size)))) && 2 == (4 >> (Math.min(2, canvasp.length)))));
       let scheduleh = 4;
      binddatasP -= parseFloat(`${libjsinspectorm.length ^ 3}`);
   for (let c = 0; c < 1; c++) {
       let analytics1: Map<any, any> = new Map([[String.fromCharCode(97,95,53,52,95,114,116,114,101,101,110,111,100,101,0),490], [String.fromCharCode(117,110,107,105,99,107,95,116,95,49,55,0),646], [String.fromCharCode(114,95,49,95,103,101,116,108,98,108,111,99,107,105,110,99,0),685]]);
       let sheete = String.fromCharCode(119,95,53,52,95,97,108,108,111,99,97,116,101,100,0);
       let settingsG = String.fromCharCode(102,105,110,100,95,112,95,56,54,0);
       let xvodE = String.fromCharCode(97,104,101,97,100,95,48,95,54,51,0);
       let with_hI = false;
      if (xvodE == settingsG) {
         settingsG += `${(String.fromCharCode(103,0) == sheete ? (with_hI ? 1 : 5) : sheete.length)}`;
      }
      while ((settingsG.length & 2) == 1) {
         settingsG += `${settingsG.length * 1}`;
         break;
      }
         sheete += `${settingsG.length * analytics1.size}`;
       let fastforwardO = true;
      for (let y = 0; y < 3; y++) {
         settingsG = `${analytics1.size}`;
      }
         analytics1 = new Map([[settingsG, ((fastforwardO ? 2 : 1))]]);
      while (1 > settingsG.length) {
         settingsG = `${analytics1.size / 3}`;
         break;
      }
         sheete = "3";
         sheete = `${3 << (Math.min(5, Math.abs(analytics1.size)))}`;
          let flipperl: Map<any, any> = new Map([[String.fromCharCode(102,95,50,54,95,99,111,110,103,0),true ], [String.fromCharCode(106,95,57,55,95,105,110,112,99,98,0),true ]]);
         xvodE = `${((fastforwardO ? 4 : 3) & 2)}`;
         flipperl = new Map([[`${flipperl.size}`, flipperl.size]]);
      for (let h = 0; h < 2; h++) {
         analytics1 = new Map([[xvodE, xvodE.length * 2]]);
      }
         sheete = `${xvodE.length >> (Math.min(Math.abs(3), 3))}`;
      while (4 <= settingsG.length) {
         settingsG += `${settingsG.length}`;
         break;
      }
      while (sheete == settingsG) {
         settingsG = `${sheete.length}`;
         break;
      }
      let directh = 8777312 >= sheete.length;
      do {
         sheete += "3";
         if (directh) {
            break;
         }
      } while ((2 > sheete.length || fastforwardO) && directh);
      matchesQ = String.fromCharCode(104,0) == rulesF;
   }
        StatusBar.setHidden(false);

      matchesQ = confirmation_ > 96.9;
       let smallz: Array<any> = [741, 899, 564];
       let overlays = 4.0;
       let containerw: Map<any, any> = new Map([[String.fromCharCode(105,95,51,51,95,99,108,111,115,101,0),967], [String.fromCharCode(106,95,54,95,116,105,101,114,0),655]]);
      for (let m = 0; m < 3; m++) {
         containerw.set(`${smallz.length}`, 3);
      }
         overlays *= 2 ^ smallz.length;
      for (let u = 0; u < 2; u++) {
         overlays *= 2;
      }
       let umengQ: Array<any> = [690, 725];
         containerw = new Map([[`${umengQ.length}`, 2]]);
          let moone = true;
          let telegram1 = String.fromCharCode(100,114,111,112,112,101,100,95,114,95,57,52,0);
          let macaub: Map<any, any> = new Map([[String.fromCharCode(105,95,57,53,95,100,111,99,115,105,122,101,0),477], [String.fromCharCode(98,95,48,95,116,105,116,108,101,98,97,114,0),715]]);
         overlays -= 1;
         moone = 36 <= telegram1.length;
         telegram1 += `${telegram1.length | macaub.size}`;
         macaub.set(telegram1, telegram1.length);
         overlays *= 3;
         overlays += 2 * umengQ.length;
       let time_ho = 0;
      roundk *= parseFloat(`${libjsinspectorm.length}`);
   for (let p = 0; p < 3; p++) {
      binddatasP *= (parseFloat(`${(basey ? 3 : 2) & parseInt(`${binddatasP}`)}`));
   }
      libreactnativeblobV = `${((matchesQ ? 4 : 5))}`;

        lockOrientation(devicesOrientation);
      }
    };

    const onToggleFullScreen = useCallback(() => {
       let ajaxK = 4.0;
    let pause8: Array<any> = [String.fromCharCode(114,101,99,101,110,116,101,114,95,56,95,55,51,0), String.fromCharCode(112,95,50,95,114,101,116,114,105,101,115,0)];
    let mbnativeadvanced1 = 2.0;
    let type_ejv = false;
    let flipperE = 0.0;
    let gdtadvl = 0.0;
    let eacty: Array<any> = [988, 304];
    let side3 = 5.0;
    let time_02W = String.fromCharCode(119,97,110,116,95,111,95,50,57,0);
    let libjsiu: Map<any, any> = new Map([[String.fromCharCode(97,95,49,49,95,116,114,105,97,110,103,108,101,0),425], [String.fromCharCode(109,95,57,49,95,115,111,108,118,101,0),783], [String.fromCharCode(116,95,53,51,95,115,105,103,112,97,115,115,0),430]]);
    let librrcR = String.fromCharCode(97,95,56,53,95,114,101,100,117,99,101,100,0);
    let flyerU = String.fromCharCode(111,95,51,48,95,116,114,101,101,99,111,100,101,114,0);
      time_02W = `${parseInt(`${gdtadvl}`) * 3}`;
      time_02W += `${((type_ejv ? 4 : 3) << (Math.min(Math.abs(parseInt(`${mbnativeadvanced1}`)), 5)))}`;
   while (5.76 == (3.22 + gdtadvl) || 3.22 == (gdtadvl + mbnativeadvanced1)) {
      mbnativeadvanced1 -= (String.fromCharCode(100,0) == time_02W ? time_02W.length : parseInt(`${gdtadvl}`));
      break;
   }

      if (
        appOrientation === "LANDSCAPE-LEFT" ||
        appOrientation === "LANDSCAPE-RIGHT"
      ) {

   let projectd = gdtadvl <= 9849380.0;
   do {
      gdtadvl -= 3 ^ parseInt(`${mbnativeadvanced1}`);
      if (projectd) {
         break;
      }
   } while ((2 >= (5 ^ eacty.length) || (5 - eacty.length) >= 5) && projectd);
      type_ejv = libjsiu.size <= 87;
       let videojsv = 0.0;
       let apple9 = String.fromCharCode(113,95,50,49,95,99,100,97,116,97,0);
       let flipperj = 4.0;
      while ((apple9.length >> (Math.min(Math.abs(3), 3))) < 5 && 4 < (3 - parseInt(`${flipperj}`))) {
         apple9 = `${apple9.length}`;
         break;
      }
      while (3 < (apple9.length / (Math.max(2, 3)))) {
         apple9 += `${1 + parseInt(`${videojsv}`)}`;
         break;
      }
         apple9 += `${parseInt(`${videojsv}`)}`;
          let lineI = false;
          let inviteF: Map<any, any> = new Map([[String.fromCharCode(117,95,52,52,95,101,110,106,105,110,0),825], [String.fromCharCode(108,104,97,115,104,95,109,95,54,50,0),339]]);
         videojsv /= Math.max(3, 3 & inviteF.size);
          let viewsB = String.fromCharCode(117,110,108,105,110,107,95,120,95,50,50,0);
         apple9 = `${parseInt(`${flipperj}`)}`;
         viewsB += `${viewsB.length | viewsB.length}`;
          let link3 = String.fromCharCode(105,103,110,101,116,116,101,95,56,95,55,49,0);
          let r_positionT = false;
         apple9 += `${(String.fromCharCode(79,0) == link3 ? link3.length : (r_positionT ? 4 : 5))}`;
          let regengI = String.fromCharCode(107,95,50,51,95,97,108,108,111,119,97,110,99,101,0);
          let zhengpianH = String.fromCharCode(111,95,57,51,95,112,105,99,116,111,114,0);
         flipperj -= parseFloat(`${regengI.length}`);
         regengI = `${zhengpianH.length >> (Math.min(Math.abs(2), 1))}`;
         zhengpianH += `${zhengpianH.length}`;
       let statsH: Map<any, any> = new Map([[String.fromCharCode(110,99,114,121,112,116,105,111,110,95,117,95,49,48,0),40], [String.fromCharCode(109,115,118,115,100,101,112,101,110,100,95,113,95,55,48,0),45], [String.fromCharCode(97,117,100,105,111,100,115,112,95,50,95,57,49,0),462]]);
       let f_positionm: Map<any, any> = new Map([[String.fromCharCode(114,95,56,52,95,101,118,112,111,114,116,111,112,0),389], [String.fromCharCode(101,120,116,101,110,100,95,51,95,57,53,0),428], [String.fromCharCode(118,97,114,105,97,98,105,108,105,116,121,95,56,95,49,50,0),868]]);
          let with_nn = String.fromCharCode(120,95,56,52,95,101,116,105,109,101,0);
          let sansB = 5;
         videojsv *= sansB >> (Math.min(apple9.length, 3));
         with_nn = "1";
         sansB >>= Math.min(5, Math.abs((String.fromCharCode(81,0) == with_nn ? with_nn.length : with_nn.length)));
      ajaxK += parseFloat(`${eacty.length | parseInt(`${videojsv}`)}`);
        lockOrientation("PORTRAIT");

   if (type_ejv && (5.91 / (Math.max(3, ajaxK))) <= 4.3) {
      type_ejv = 51.99 <= side3 && String.fromCharCode(98,0) == time_02W;
   }
      side3 /= Math.max(libjsiu.size >> (Math.min(librrcR.length, 1)), 3);
   if (librrcR.length >= mbnativeadvanced1) {
      mbnativeadvanced1 /= Math.max(parseInt(`${side3}`) << (Math.min(1, Math.abs(3))), 2);
   }
        setIsFullScreen(false);

   if (1.36 >= (5 + gdtadvl)) {
      ajaxK *= parseFloat(`${parseInt(`${gdtadvl}`)}`);
   }
   for (let n = 0; n < 2; n++) {
      side3 /= Math.max(eacty.length, 2);
   }
   let androidg = libjsiu.size <= 9316949;
   do {
       let fastforward0 = String.fromCharCode(97,112,112,108,105,101,115,95,109,95,57,49,0);
         fastforward0 += `${fastforward0.length / (Math.max(1, fastforward0.length))}`;
         fastforward0 = `${fastforward0.length - 3}`;
       let episodesm = 2;
      libjsiu = new Map([[fastforward0, fastforward0.length * parseInt(`${flipperE}`)]]);
      if (androidg) {
         break;
      }
   } while (androidg && (libjsiu.size >= eacty.length));
        

       let usernamep = false;
       let flipperp = String.fromCharCode(101,95,53,55,95,109,117,108,104,105,0);
      let libloggerg = String.fromCharCode(111,101,115,56,0) == flipperp;
      do {
          let sportG = String.fromCharCode(102,95,49,95,119,97,108,107,0);
         flipperp = `${sportG.length}`;
         if (libloggerg) {
            break;
         }
      } while (libloggerg && (flipperp.length >= 1));
         usernamep = !flipperp.endsWith(`${usernamep}`);
          let orangeR = 5.0;
          let emojiL: Array<any> = [506, 934];
          let clearJ = String.fromCharCode(107,95,50,55,95,100,117,114,97,116,105,111,110,0);
         usernamep = !usernamep;
         orangeR += parseInt(`${orangeR}`) >> (Math.min(Math.abs(3), 2));
         emojiL = [(String.fromCharCode(99,0) == clearJ ? clearJ.length : parseInt(`${orangeR}`))];
      while (!usernamep) {
          let result_ = String.fromCharCode(107,95,54,55,95,102,105,108,101,110,97,109,101,0);
          let termsZ = String.fromCharCode(118,95,55,56,95,120,116,101,110,115,105,111,110,0);
          let mbbidQ = 5;
          let g_centerQ = 1.0;
         flipperp = `${(2 + (usernamep ? 1 : 1))}`;
         result_ += `${2 & termsZ.length}`;
         termsZ = "3";
         mbbidQ /= Math.max(result_.length / (Math.max(9, termsZ.length)), 5);
         g_centerQ *= 2;
         break;
      }
       let armva3: Array<any> = [294, 237, 448];
       let textR: Array<any> = [417, 333];
      if (textR.includes(armva3.length)) {
          let formP: Map<any, any> = new Map([[String.fromCharCode(108,95,53,48,95,100,111,117,103,108,97,115,0),150], [String.fromCharCode(99,95,55,49,95,119,104,105,108,101,0),883], [String.fromCharCode(97,95,57,48,95,99,97,108,105,110,103,0),989]]);
         armva3 = [((usernamep ? 1 : 3) / 3)];
         formP.set(`${formP.size}`, 1);
      }
      flipperE *= parseFloat(`${3 * parseInt(`${mbnativeadvanced1}`)}`);
   while (5.36 == ajaxK) {
       let promotionf = String.fromCharCode(121,95,51,57,95,112,117,98,107,101,121,0);
       let castd = 3.0;
       let activeS = String.fromCharCode(97,103,103,114,101,103,97,116,101,95,112,95,53,57,0);
       let liney = String.fromCharCode(112,95,52,48,95,110,99,98,99,0);
      if ((castd / (Math.max(9, parseFloat(`${liney.length}`)))) <= 1.57 || (1 | liney.length) <= 1) {
          let securityJ = true;
          let dragl = String.fromCharCode(97,112,105,115,95,109,95,50,49,0);
          let delegate_1J = 0.0;
         liney = `${promotionf.length}`;
         securityJ = (parseInt(`${delegate_1J}`) + dragl.length) < 21;
         dragl = "3";
         delegate_1J += dragl.length;
      }
         castd *= (parseFloat(`${promotionf == String.fromCharCode(114,0) ? parseInt(`${castd}`) : promotionf.length}`));
      let relatedw = liney.length >= 5820721;
      do {
          let sports9 = String.fromCharCode(109,106,112,101,103,98,95,110,95,53,57,0);
          let kickG = String.fromCharCode(115,95,57,52,95,109,117,120,101,114,115,0);
          let catalogH = String.fromCharCode(99,111,109,109,97,110,100,115,95,99,95,55,51,0);
          let member3: Map<any, any> = new Map([[String.fromCharCode(118,101,114,121,95,121,95,55,56,0),String.fromCharCode(97,99,99,101,112,116,95,119,95,57,56,0)], [String.fromCharCode(122,95,57,49,95,112,114,101,115,101,110,116,97,98,108,101,0),String.fromCharCode(119,95,50,48,95,118,105,100,101,111,114,101,110,100,101,114,101,114,0)]]);
          let updatesh: Map<any, any> = new Map([[String.fromCharCode(118,95,53,55,95,101,120,112,105,114,101,0),404], [String.fromCharCode(116,116,114,105,98,117,116,101,100,95,57,95,57,55,0),337]]);
         liney += `${catalogH.length % (Math.max(1, 2))}`;
         sports9 = `${3 << (Math.min(4, Math.abs(updatesh.size)))}`;
         kickG += `${member3.size}`;
         catalogH += `${kickG.length}`;
         member3.set(`${kickG}`, updatesh.size);
         if (relatedw) {
            break;
         }
      } while ((activeS.length < 2) && relatedw);
          let anner_ = 5.0;
          let indicatorm = 0.0;
          let shirtA = 1;
         promotionf = `${liney.length - parseInt(`${anner_}`)}`;
         anner_ -= parseInt(`${indicatorm}`);
         indicatorm /= Math.max(2, parseFloat(`${shirtA | parseInt(`${indicatorm}`)}`));
         shirtA |= shirtA - parseInt(`${indicatorm}`);
          let update_sgV = false;
          let mountingD = 4.0;
         activeS += `${(parseInt(`${mountingD}`) + (update_sgV ? 5 : 2))}`;
      let mode6 = activeS == String.fromCharCode(48,106,98,102,0);
      do {
         activeS = `${parseInt(`${castd}`) % (Math.max(6, promotionf.length))}`;
         if (mode6) {
            break;
         }
      } while (mode6 && (activeS.includes(`${promotionf.length}`)));
      if ((promotionf.length | 5) >= 4 || (promotionf.length / (Math.max(9, parseInt(`${castd}`)))) >= 5) {
          let reactH: Array<any> = [83, 797];
          let traminiU = 5;
          let filep = 4.0;
          let minivod8 = false;
         promotionf += `${(liney == String.fromCharCode(95,0) ? liney.length : activeS.length)}`;
         reactH.push(reactH.length);
         traminiU &= reactH.length | traminiU;
         filep *= (parseFloat(`${(minivod8 ? 4 : 3) | parseInt(`${filep}`)}`));
      }
         liney += "1";
         promotionf += `${promotionf.length}`;
      if (liney != activeS) {
          let orangex = String.fromCharCode(98,116,111,98,105,110,95,53,95,56,48,0);
          let moreK = 1;
          let leakcheckerT = 3.0;
          let condensedc = 2.0;
          let switch_16 = 5;
         activeS = `${(promotionf == String.fromCharCode(107,0) ? promotionf.length : orangex.length)}`;
         orangex = `${parseInt(`${leakcheckerT}`)}`;
         moreK <<= Math.min(5, Math.abs(moreK));
         condensedc += moreK;
         switch_16 >>= Math.min(4, Math.abs(3 + parseInt(`${leakcheckerT}`)));
      }
      let humidityQ = String.fromCharCode(102,48,53,0) == liney;
      do {
         liney += `${activeS.length * promotionf.length}`;
         if (humidityQ) {
            break;
         }
      } while ((liney.length < promotionf.length) && humidityQ);
      for (let v = 0; v < 2; v++) {
         activeS += `${liney.length}`;
      }
      side3 -= 1;
      break;
   }
   let send9 = 9369920.0 >= gdtadvl;
   do {
      gdtadvl -= ((type_ejv ? 4 : 1) | parseInt(`${mbnativeadvanced1}`));
      if (send9) {
         break;
      }
   } while ((gdtadvl == ajaxK) && send9);
        StatusBar.setHidden(false);

       let pause9 = 0.0;
      if (pause9 < 1.89) {
         pause9 *= parseInt(`${pause9}`) ^ 3;
      }
         pause9 -= parseInt(`${pause9}`);
       let gray3 = String.fromCharCode(97,95,51,56,95,122,101,114,111,122,101,114,111,0);
      ajaxK -= parseFloat(`${parseInt(`${pause9}`)}`);
       let checkbox5 = 5.0;
      while ((checkbox5 / 2) == 1.56) {
         checkbox5 *= parseInt(`${checkbox5}`);
         break;
      }
          let borderless0 = String.fromCharCode(102,95,50,53,95,98,105,103,110,117,109,0);
          let updatesy: Map<any, any> = new Map([[String.fromCharCode(103,95,51,49,95,118,101,114,108,97,121,0),901], [String.fromCharCode(105,95,49,50,95,101,108,115,116,0),312]]);
         checkbox5 -= 2 & updatesy.size;
         borderless0 += `${borderless0.length}`;
         updatesy.set(borderless0, borderless0.length);
       let rewindx: Map<any, any> = new Map([[String.fromCharCode(102,105,110,105,115,104,95,56,95,50,52,0),241], [String.fromCharCode(112,114,111,99,99,101,115,115,95,106,95,56,51,0),473], [String.fromCharCode(105,110,112,117,116,116,101,109,95,99,95,56,49,0),524]]);
      mbnativeadvanced1 /= Math.max(5, 3);
      ajaxK *= (parseFloat(`${(type_ejv ? 2 : 4) * parseInt(`${gdtadvl}`)}`));

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      } else {

       let plashn: Map<any, any> = new Map([[String.fromCharCode(97,97,99,101,110,99,100,115,112,95,119,95,57,50,0),String.fromCharCode(109,118,99,111,109,112,111,110,101,110,116,95,102,95,55,48,0)], [String.fromCharCode(107,95,51,48,95,114,97,116,105,111,110,97,108,0),String.fromCharCode(99,97,110,111,110,105,99,97,108,95,109,95,53,56,0)]]);
       let libcrashsdk7 = String.fromCharCode(97,101,115,111,112,116,95,104,95,55,54,0);
       let overlayD = String.fromCharCode(118,97,114,105,97,100,105,99,95,118,95,56,53,0);
         overlayD = `${libcrashsdk7.length | plashn.size}`;
         plashn = new Map([[`${plashn.size}`, 1 * plashn.size]]);
      let infoM = overlayD.length <= 6419637;
      do {
          let yingv = true;
          let profileW = true;
          let commonk = 3;
          let libavfilterk: Map<any, any> = new Map([[String.fromCharCode(100,114,105,102,116,105,110,103,95,100,95,52,56,0),302], [String.fromCharCode(101,95,50,54,95,120,117,118,109,118,115,0),277], [String.fromCharCode(121,95,50,52,95,110,111,110,98,108,111,99,107,0),85]]);
         overlayD += `${(libavfilterk.size << (Math.min(4, Math.abs((yingv ? 4 : 1)))))}`;
         yingv = commonk > 56;
         profileW = commonk > 47;
         libavfilterk = new Map([[`${profileW}`, ((profileW ? 4 : 4) % (Math.max(commonk, 7)))]]);
         if (infoM) {
            break;
         }
      } while (infoM && (5 < overlayD.length));
          let referrern = 0.0;
         overlayD = `${plashn.size}`;
         referrern *= parseFloat(`${parseInt(`${referrern}`) ^ parseInt(`${referrern}`)}`);
      for (let a = 0; a < 1; a++) {
         libcrashsdk7 += `${libcrashsdk7.length}`;
      }
         libcrashsdk7 = "2";
      let bufferT = 7771538 >= plashn.size;
      do {
          let change6 = String.fromCharCode(101,116,101,114,110,105,116,121,95,121,95,54,51,0);
          let temperatured: Array<any> = [460, 419, 892];
          let phone6 = String.fromCharCode(114,95,57,50,95,101,120,99,101,101,100,101,100,0);
          let controlsk: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,111,117,116,115,95,104,95,57,53,0),901], [String.fromCharCode(104,101,97,114,116,98,101,97,116,95,57,95,53,53,0),443]]);
         plashn.set(`${libcrashsdk7}`, controlsk.size - libcrashsdk7.length);
         change6 += `${phone6.length % (Math.max(2, 2))}`;
         temperatured = [change6.length];
         phone6 += `${phone6.length}`;
         controlsk.set(change6, change6.length - temperatured.length);
         if (bufferT) {
            break;
         }
      } while (bufferT && (1 >= (plashn.size >> (Math.min(Math.abs(3), 4)))));
      let friendsw = 5012387 >= libcrashsdk7.length;
      do {
         libcrashsdk7 += `${overlayD.length - plashn.size}`;
         if (friendsw) {
            break;
         }
      } while (friendsw && (3 == (libcrashsdk7.length & plashn.size)));
      while (2 < overlayD.length) {
         libcrashsdk7 += `${(overlayD == String.fromCharCode(88,0) ? libcrashsdk7.length : overlayD.length)}`;
         break;
      }
      pause8.push(parseInt(`${ajaxK}`));
      type_ejv = (mbnativeadvanced1 / (Math.max(1, librrcR.length))) < 44.56;
      side3 *= parseInt(`${side3}`) & eacty.length;
        lockOrientation("LANDSCAPE");

      type_ejv = 14.32 > ajaxK;
   for (let v = 0; v < 2; v++) {
       let mailh = 4.0;
      while (mailh < mailh) {
         mailh += parseInt(`${mailh}`) % 1;
         break;
      }
         mailh += 3;
         mailh += 1;
      librrcR += `${parseInt(`${gdtadvl}`) & flyerU.length}`;
   }
   if ((4 / (Math.max(8, librrcR.length))) > 2 && 4.64 > (librrcR.length / (Math.max(9, side3)))) {
       let libpangleflippedG = String.fromCharCode(103,95,52,50,95,100,111,116,108,111,99,107,0);
       let regengE = String.fromCharCode(113,95,49,49,95,110,111,100,101,0);
         libpangleflippedG += `${libpangleflippedG.length}`;
          let shrinka = true;
         regengE = `${(regengE.length ^ (shrinka ? 5 : 5))}`;
       let sinaq = true;
      if (sinaq) {
         sinaq = (libpangleflippedG.length & regengE.length) <= 12;
      }
         regengE += `${libpangleflippedG.length & regengE.length}`;
         sinaq = 94 > regengE.length || 94 > libpangleflippedG.length;
      side3 *= (String.fromCharCode(69,0) == time_02W ? time_02W.length : librrcR.length);
   }
        setIsFullScreen(true);

   for (let q = 0; q < 1; q++) {
      side3 *= parseInt(`${ajaxK}`) - parseInt(`${mbnativeadvanced1}`);
   }
      libjsiu = new Map([[`${pause8.length}`, flyerU.length | pause8.length]]);
   let descc = type_ejv ? !type_ejv : type_ejv;
   do {
      type_ejv = String.fromCharCode(108,0) == librrcR;
      if (descc) {
         break;
      }
   } while ((type_ejv && time_02W.length <= 5) && descc);
        

   while (eacty.includes(mbnativeadvanced1)) {
       let actionsx = String.fromCharCode(114,101,108,97,117,110,99,104,95,119,95,51,51,0);
       let screeny = String.fromCharCode(98,110,98,105,110,112,97,100,95,50,95,49,50,0);
       let sportk: Array<any> = [String.fromCharCode(100,105,103,101,115,116,98,121,110,97,109,101,95,97,95,49,53,0), String.fromCharCode(109,97,120,101,100,95,120,95,55,52,0), String.fromCharCode(118,101,114,115,105,111,110,95,49,95,56,52,0)];
       let closeD = false;
         screeny += `${sportk.length}`;
      while (screeny.length == actionsx.length) {
          let gpayB: Map<any, any> = new Map([[String.fromCharCode(112,114,101,116,99,104,95,53,95,51,53,0),true ], [String.fromCharCode(100,117,97,108,105,110,112,117,116,95,113,95,56,51,0),true ], [String.fromCharCode(113,95,55,53,95,100,105,97,103,0),true ]]);
          let backwardN = 5.0;
          let filledu = String.fromCharCode(119,95,55,53,95,112,114,107,0);
          let ewardedF = String.fromCharCode(98,114,111,119,115,101,95,100,95,51,56,0);
         screeny += `${ewardedF.length ^ 2}`;
         gpayB = new Map([[`${gpayB.size}`, (String.fromCharCode(101,0) == filledu ? gpayB.size : filledu.length)]]);
         backwardN *= parseFloat(`${parseInt(`${backwardN}`) + 3}`);
         ewardedF += `${2 - filledu.length}`;
         break;
      }
      let viewerX = 7975283 <= sportk.length;
      do {
         sportk = [actionsx.length];
         if (viewerX) {
            break;
         }
      } while ((5 >= (sportk.length | 2)) && viewerX);
         sportk = [((closeD ? 1 : 1) & sportk.length)];
      for (let k = 0; k < 3; k++) {
          let detailsJ = 3;
         sportk = [detailsJ << (Math.min(Math.abs(1), 3))];
      }
          let with__g = 4.0;
          let sigmob_ = String.fromCharCode(112,95,53,56,95,111,117,116,98,111,120,0);
         actionsx += "3";
         with__g /= Math.max(parseFloat(`${1 | parseInt(`${with__g}`)}`), 2);
         sigmob_ += `${(sigmob_ == String.fromCharCode(122,0) ? parseInt(`${with__g}`) : sigmob_.length)}`;
       let ewardedx = 2.0;
       let cricketf = 3.0;
         closeD = actionsx.startsWith(`${closeD}`);
         cricketf -= (parseFloat(`${(closeD ? 2 : 2) % 3}`));
         cricketf /= Math.max(parseFloat(`${screeny.length + 2}`), 3);
      while (3 >= (3 & sportk.length)) {
         screeny += `${sportk.length % (Math.max(screeny.length, 10))}`;
         break;
      }
      if (sportk.includes(ewardedx)) {
          let u_imageJ = 3.0;
          let qnewinterstitialS = false;
          let crickety = 1;
          let carouselb = 5.0;
          let prediction6 = 5;
         ewardedx /= Math.max(parseFloat(`${2 ^ sportk.length}`), 1);
         u_imageJ /= Math.max(5, ((qnewinterstitialS ? 3 : 1) >> (Math.min(Math.abs(prediction6), 1))));
         qnewinterstitialS = u_imageJ == 82.59;
         crickety <<= Math.min(4, Math.abs(crickety));
         carouselb /= Math.max(parseInt(`${u_imageJ}`) & 3, 2);
         prediction6 &= prediction6 % (Math.max(crickety, 5));
      }
      eacty.push(1);
      break;
   }
      mbnativeadvanced1 /= Math.max(4, flyerU.length);
      librrcR = `${parseInt(`${mbnativeadvanced1}`) >> (Math.min(5, Math.abs(parseInt(`${flipperE}`))))}`;
        StatusBar.setHidden(true);

       let long_3H: Map<any, any> = new Map([[String.fromCharCode(102,97,105,108,97,98,108,101,95,53,95,57,48,0),64], [String.fromCharCode(100,105,109,101,110,115,105,111,110,95,55,95,52,49,0),805]]);
       let gemfileo: Array<any> = [187, 229];
          let fastforward3 = String.fromCharCode(97,114,98,105,116,101,114,95,118,95,52,52,0);
          let yingJ = String.fromCharCode(100,105,118,105,115,111,114,95,100,95,55,53,0);
          let gradlews = String.fromCharCode(116,97,112,116,95,112,95,57,51,0);
         long_3H = new Map([[`${gemfileo.length}`, gemfileo.length / 2]]);
         fastforward3 = `${3 * gradlews.length}`;
         yingJ = `${2 * gradlews.length}`;
         gemfileo = [long_3H.size - gemfileo.length];
         gemfileo = [long_3H.size];
         long_3H.set(`${gemfileo.length}`, 3 / (Math.max(7, long_3H.size)));
       let sheetE = String.fromCharCode(116,119,111,119,97,121,95,109,95,52,54,0);
       let backgroundj = String.fromCharCode(115,116,114,101,116,99,104,95,57,95,52,57,0);
         long_3H.set(sheetE, 1);
      eacty.push(parseInt(`${flipperE}`) >> (Math.min(gemfileo.length, 3)));
      time_02W = "2";
   if ((librrcR.length % (Math.max(2, 4))) == 1) {
      librrcR = `${((type_ejv ? 4 : 3) + parseInt(`${mbnativeadvanced1}`))}`;
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
       let moonX = String.fromCharCode(98,95,56,51,95,108,105,118,101,109,111,100,101,0);
    let scrollviewj: Map<any, any> = new Map([[String.fromCharCode(116,121,112,101,100,101,102,95,54,95,49,0),String.fromCharCode(110,117,109,101,114,97,108,95,53,95,55,56,0)], [String.fromCharCode(113,95,56,95,115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,0),String.fromCharCode(119,95,54,52,95,99,111,110,100,101,110,115,101,100,0)]]);
    let helper9: Array<any> = [56, 124, 21];
    let referrerT = String.fromCharCode(111,95,56,95,99,111,108,108,101,99,116,105,111,110,115,0);
    let abidetectU = 0.0;
    let play8 = 5.0;
    let libreactperfloggerjnis: Map<any, any> = new Map([[String.fromCharCode(100,111,99,117,109,101,110,116,95,120,95,55,56,0),1], [String.fromCharCode(97,110,105,109,97,116,101,115,95,108,95,50,56,0),759], [String.fromCharCode(109,111,100,105,102,121,95,122,95,49,50,0),653]]);
    let libavfilterR = 5;
    let libcxxcomponentsf: Array<any> = [343, 238];
    let manifest_ = String.fromCharCode(115,117,112,112,114,101,115,115,95,106,95,57,51,0);
    let expiredi = 1.0;
   if (2.49 > (parseFloat(`${helper9.length}`) + abidetectU)) {
       let carouself = String.fromCharCode(108,95,54,53,95,97,99,104,105,101,118,101,100,0);
       let acceptedZ = 0.0;
       let middlea: Array<any> = [285, 118, 221];
       let scrollviewh = 5.0;
         acceptedZ /= Math.max(4, middlea.length & 1);
      while (5.83 <= (scrollviewh / 2.68)) {
         middlea = [middlea.length];
         break;
      }
          let megaphonee = 2.0;
         middlea.push(carouself.length | 2);
         megaphonee += parseInt(`${megaphonee}`) / 2;
      for (let o = 0; o < 3; o++) {
         acceptedZ *= carouself.length;
      }
      let playercommonK = acceptedZ <= 6621625.0;
      do {
         acceptedZ /= Math.max(3, 3);
         if (playercommonK) {
            break;
         }
      } while ((4 < (parseInt(`${acceptedZ}`) / (Math.max(2, 1))) || (carouself.length / (Math.max(4, acceptedZ))) < 3.86) && playercommonK);
         scrollviewh -= parseFloat(`${1 / (Math.max(3, parseInt(`${acceptedZ}`)))}`);
         scrollviewh -= parseFloat(`${3 * carouself.length}`);
      for (let x = 0; x < 1; x++) {
          let spinnerK = String.fromCharCode(115,105,109,117,108,116,97,110,101,111,117,115,95,104,95,49,57,0);
          let activeI = true;
          let textlayoutmanager7 = 1;
          let handlerx = false;
         carouself += `${((activeI ? 4 : 2) - parseInt(`${scrollviewh}`))}`;
         spinnerK += `${spinnerK.length - 2}`;
         activeI = spinnerK.length < textlayoutmanager7;
         textlayoutmanager7 |= 3;
         handlerx = handlerx || textlayoutmanager7 > 20;
      }
      while (4.24 >= (5.96 - acceptedZ)) {
         carouself += "1";
         break;
      }
       let containerj = false;
       let dicex = 1;
       let macau_ = 2;
          let rewardb = 3;
          let launcherC: Map<any, any> = new Map([[String.fromCharCode(102,95,49,50,95,112,114,101,102,105,120,101,100,0),false ], [String.fromCharCode(116,95,54,53,95,112,97,114,116,105,99,105,112,97,116,105,110,103,0),true ]]);
         dicex += macau_ % (Math.max(2, 10));
         rewardb ^= launcherC.size + rewardb;
         launcherC = new Map([[`${launcherC.size}`, launcherC.size]]);
      abidetectU += parseFloat(`${helper9.length ^ 3}`);
   }
       let telegramt = 2.0;
       let component5 = 5.0;
      while (1.73 >= telegramt) {
         component5 *= parseFloat(`${1 / (Math.max(1, parseInt(`${telegramt}`)))}`);
         break;
      }
          let becomeE = String.fromCharCode(103,95,55,95,105,110,116,101,114,109,105,100,105,97,116,101,0);
          let googleC = 2;
         component5 += parseFloat(`${parseInt(`${component5}`) - becomeE.length}`);
         becomeE = `${3 << (Math.min(4, Math.abs(googleC)))}`;
         googleC /= Math.max(4, googleC & googleC);
      libavfilterR ^= scrollviewj.size;
   if ((libreactperfloggerjnis.size / (Math.max(3, 5))) == 2 || 2 == (helper9.length / 3)) {
      libreactperfloggerjnis.set(`${helper9.length}`, helper9.length);
   }
      moonX = "1";
   while ((5.43 * play8) == 3.18 || (abidetectU + 5.43) == 3.6) {
       let launcherV = String.fromCharCode(115,103,105,114,108,101,95,51,95,52,55,0);
       let connectionp = false;
       let brightnessQ = 2;
       let streamingY: Map<any, any> = new Map([[String.fromCharCode(117,95,56,51,95,100,118,98,116,120,116,0),379], [String.fromCharCode(97,100,109,105,110,101,100,95,110,95,57,53,0),316]]);
       let champion2 = 2.0;
      if (3 > (3 >> (Math.min(4, Math.abs(streamingY.size))))) {
          let libpangleflipped7 = String.fromCharCode(103,95,49,51,95,120,105,112,104,0);
          let libcrashsdkW = 4.0;
         connectionp = parseInt(`${libcrashsdkW}`) == launcherV.length;
         libpangleflipped7 = `${libpangleflipped7.length / 1}`;
         libcrashsdkW -= 2 & libpangleflipped7.length;
      }
      if (4 <= (5 & streamingY.size) && 5 <= streamingY.size) {
         connectionp = String.fromCharCode(108,0) == launcherV;
      }
       let helpery = 1.0;
       let pausei = 0.0;
          let libyogar: Map<any, any> = new Map([[String.fromCharCode(115,95,56,48,95,99,97,108,99,117,108,97,116,111,114,0),232], [String.fromCharCode(113,112,102,105,108,101,95,115,95,56,50,0),457], [String.fromCharCode(101,100,105,116,105,110,103,95,121,95,56,50,0),72]]);
          let constantss = false;
          let emojiM = String.fromCharCode(115,116,99,111,95,52,95,51,55,0);
         streamingY = new Map([[emojiM, ((connectionp ? 2 : 5))]]);
         libyogar.set(`${constantss}`, libyogar.size);
         emojiM = "3";
          let reducerd = String.fromCharCode(103,95,50,50,95,114,117,110,0);
          let anytime8: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,114,115,112,97,99,101,100,115,112,95,52,95,54,54,0),757], [String.fromCharCode(119,115,97,117,100,95,105,95,54,54,0),214], [String.fromCharCode(118,95,53,51,95,114,101,102,114,101,115,104,0),698]]);
         connectionp = reducerd.startsWith(`${helpery}`);
         reducerd = "1";
         anytime8 = new Map([[`${anytime8.size}`, 1]]);
          let traminij = 5.0;
         pausei /= Math.max(parseFloat(`${parseInt(`${helpery}`)}`), 2);
         traminij *= 3;
       let confirmationV = 3;
       let gpayl = 4;
         connectionp = 21 >= streamingY.size;
         confirmationV |= (launcherV == String.fromCharCode(104,0) ? confirmationV : launcherV.length);
       let gestureso = String.fromCharCode(114,95,54,50,95,101,110,99,104,0);
       let handlera = String.fromCharCode(109,117,115,105,99,95,114,95,49,51,0);
         gpayl %= Math.max(1 / (Math.max(10, parseInt(`${helpery}`))), 2);
         gpayl &= 3 >> (Math.min(5, Math.abs(parseInt(`${pausei}`))));
      if (4 > (4 / (Math.max(5, brightnessQ)))) {
         gpayl /= Math.max(3, 1 << (Math.min(5, gestureso.length)));
      }
      let heartP = confirmationV >= 5509841;
      do {
         confirmationV /= Math.max(2, 1);
         if (heartP) {
            break;
         }
      } while ((5.19 < (champion2 / (Math.max(1.94, 7)))) && heartP);
          let securityS: Map<any, any> = new Map([[String.fromCharCode(116,95,57,56,95,97,103,103,114,101,103,97,116,111,114,0),true ], [String.fromCharCode(97,95,53,55,95,115,101,116,108,101,99,116,101,100,0),true ], [String.fromCharCode(99,111,110,99,97,116,95,106,95,54,53,0),false ]]);
          let activeG = String.fromCharCode(100,105,115,109,105,115,115,97,108,95,52,95,49,55,0);
          let zcopy_fu = 3.0;
         gestureso = `${(String.fromCharCode(83,0) == activeG ? streamingY.size : activeG.length)}`;
         securityS.set(`${zcopy_fu}`, 3);
         zcopy_fu *= parseFloat(`${securityS.size / (Math.max(6, parseInt(`${zcopy_fu}`)))}`);
      play8 /= Math.max(3, parseFloat(`${parseInt(`${champion2}`)}`));
      break;
   }
       let default_jzI: Array<any> = [417, 462];
      if (3 >= default_jzI.length) {
          let philippinesN: Array<any> = [780, 854];
          let taiwang = String.fromCharCode(113,95,51,51,95,101,102,102,101,99,105,116,118,101,108,121,0);
          let analyticy = 5.0;
         default_jzI.push(1 + philippinesN.length);
         philippinesN = [1 % (Math.max(3, parseInt(`${analyticy}`)))];
         taiwang = "2";
         analyticy -= parseInt(`${analyticy}`) << (Math.min(Math.abs(3), 3));
      }
          let bingF = String.fromCharCode(101,120,101,99,117,116,105,110,103,95,99,95,49,49,0);
          let directw: Array<any> = [128, 529];
          let mbridgec = 4.0;
         default_jzI = [directw.length];
         bingF = `${parseInt(`${mbridgec}`)}`;
         directw.push(bingF.length >> (Math.min(3, Math.abs(parseInt(`${mbridgec}`)))));
      let nativeT = 9787067 <= default_jzI.length;
      do {
         default_jzI = [default_jzI.length];
         if (nativeT) {
            break;
         }
      } while (nativeT && (default_jzI.includes(default_jzI.length)));
      moonX = `${2 ^ referrerT.length}`;
      libreactperfloggerjnis.set(`${play8}`, scrollviewj.size + parseInt(`${play8}`));
   if (2 > (scrollviewj.size >> (Math.min(referrerT.length, 4))) && (referrerT.length >> (Math.min(4, Math.abs(scrollviewj.size)))) > 2) {
      referrerT += `${1 & libreactperfloggerjnis.size}`;
   }
       let descI = String.fromCharCode(99,97,117,116,101,114,105,122,101,95,98,95,54,48,0);
       let thailandV: Array<any> = [849, 439, 447];
       let submitg = true;
       let viewer3 = 1;
       let klevind = 3;
         descI = "3";
         submitg = !submitg && 55 < klevind;
         klevind /= Math.max(viewer3, 3);
      while (4 > (thailandV.length % (Math.max(10, descI.length)))) {
          let page_ = String.fromCharCode(116,95,52,52,95,98,98,117,102,0);
          let dragH = false;
          let injuryH = false;
          let chinasameW: Map<any, any> = new Map([[String.fromCharCode(114,100,102,116,95,114,95,54,51,0),385], [String.fromCharCode(119,95,50,55,95,110,112,112,116,114,97,110,115,112,111,115,101,0),713]]);
         descI += "1";
         page_ += "1";
         dragH = (99 < (chinasameW.size + (!dragH ? chinasameW.size : 11)));
         injuryH = String.fromCharCode(98,0) == page_ || 58 > chinasameW.size;
         break;
      }
      let reducerk = 5633964 >= thailandV.length;
      do {
         thailandV = [3 * viewer3];
         if (reducerk) {
            break;
         }
      } while (((2 >> (Math.min(4, thailandV.length))) == 5 && (2 >> (Math.min(4, Math.abs(viewer3)))) == 2) && reducerk);
         descI = `${thailandV.length}`;
         klevind *= (thailandV.length << (Math.min(5, Math.abs((submitg ? 4 : 3)))));
      while (!submitg) {
         viewer3 <<= Math.min(2, Math.abs(descI.length << (Math.min(2, thailandV.length))));
         break;
      }
      referrerT += `${libavfilterR}`;
   let rnews4 = 7252984.0 <= abidetectU;
   do {
      abidetectU /= Math.max(2, parseFloat(`${libavfilterR}`));
      if (rnews4) {
         break;
      }
   } while (((abidetectU + play8) < 3.45) && rnews4);
   if (5.96 < (libavfilterR - abidetectU)) {
      libavfilterR >>= Math.min(Math.abs(parseInt(`${abidetectU}`) & libavfilterR), 3);
   }
       let friendsC = 1.0;
      if ((friendsC + friendsC) >= 5.15) {
         friendsC /= Math.max(1, parseFloat(`${parseInt(`${friendsC}`) * parseInt(`${friendsC}`)}`));
      }
          let blacky = 2.0;
          let champione: Map<any, any> = new Map([[String.fromCharCode(106,95,56,57,95,115,104,97,100,105,110,103,0),702], [String.fromCharCode(115,117,98,100,101,109,117,120,101,114,95,122,95,53,54,0),473]]);
         friendsC -= parseFloat(`${3 ^ parseInt(`${blacky}`)}`);
         blacky -= 1 | champione.size;
         champione.set(`${champione.size}`, 1);
      let animationX = 8717529.0 <= friendsC;
      do {
         friendsC -= parseFloat(`${3 * parseInt(`${friendsC}`)}`);
         if (animationX) {
            break;
         }
      } while (((friendsC + 2.92) == 2.83) && animationX);
      libavfilterR += helper9.length;
      abidetectU += (parseFloat(`${String.fromCharCode(109,0) == moonX ? moonX.length : parseInt(`${play8}`)}`));
      helper9.push(libcxxcomponentsf.length);
   let mbridgez = 7345120 <= libcxxcomponentsf.length;
   do {
       let texta = true;
       let stepB = 2.0;
       let castingV = String.fromCharCode(115,101,103,109,97,112,95,106,95,49,51,0);
      while (2.58 > (stepB - parseFloat(`${castingV.length}`))) {
          let blackY = false;
          let descY = String.fromCharCode(97,95,56,54,0);
         castingV += `${(1 + (blackY ? 3 : 5))}`;
         blackY = String.fromCharCode(77,0) == descY;
         descY = `${descY.length}`;
         break;
      }
      while ((stepB - 5.12) == 4.86 && texta) {
          let goalJ = String.fromCharCode(97,95,53,57,95,98,105,110,100,0);
          let countryi: Array<any> = [634, 417];
          let leftF: Map<any, any> = new Map([[String.fromCharCode(99,95,53,56,0),702], [String.fromCharCode(106,95,56,48,95,108,115,112,112,111,108,121,102,0),672]]);
         texta = stepB > 82.39;
         goalJ = `${goalJ.length}`;
         countryi = [(goalJ == String.fromCharCode(75,0) ? goalJ.length : countryi.length)];
         leftF.set(`${countryi.length}`, countryi.length ^ leftF.size);
         break;
      }
      for (let b = 0; b < 2; b++) {
          let stationO = 4.0;
          let controlU = String.fromCharCode(115,104,111,117,108,100,95,106,95,57,48,0);
          let logoQ = String.fromCharCode(116,95,49,57,95,100,101,105,110,116,101,114,108,101,97,118,101,0);
          let appsz = String.fromCharCode(102,105,97,116,95,49,95,51,53,0);
         stepB += parseFloat(`${3 | parseInt(`${stationO}`)}`);
         stationO /= Math.max(5, parseFloat(`${logoQ.length + 2}`));
         controlU = `${(appsz == String.fromCharCode(77,0) ? appsz.length : controlU.length)}`;
         logoQ = `${controlU.length}`;
      }
         texta = 38.66 == stepB;
         stepB += parseFloat(`${castingV.length}`);
      let resultx = String.fromCharCode(116,52,106,117,107,110,121,51,100,53,0) == castingV;
      do {
          let anythinkG = true;
          let panglei = String.fromCharCode(113,95,51,55,95,115,99,114,117,98,98,101,114,0);
          let reactq = 1.0;
          let qaagC: Map<any, any> = new Map([[String.fromCharCode(113,95,49,54,95,97,108,116,101,114,97,98,108,101,0),349], [String.fromCharCode(97,99,99,101,115,115,105,98,108,105,116,121,95,109,95,49,51,0),293]]);
         castingV = `${((anythinkG ? 2 : 4) % (Math.max(2, parseInt(`${stepB}`))))}`;
         anythinkG = String.fromCharCode(57,0) == panglei;
         panglei += `${qaagC.size}`;
         reactq -= parseFloat(`${qaagC.size}`);
         if (resultx) {
            break;
         }
      } while ((4.17 == (parseFloat(`${castingV.length}`) * stepB) && 4 == (castingV.length >> (Math.min(Math.abs(2), 2)))) && resultx);
      while (texta) {
         stepB *= parseFloat(`${parseInt(`${stepB}`) / 1}`);
         break;
      }
      let backgroundA = texta ? !texta : texta;
      do {
         texta = (88 <= (castingV.length << (Math.min(3, Math.abs((texta ? castingV.length : 88))))));
         if (backgroundA) {
            break;
         }
      } while ((!texta) && backgroundA);
      let appszD = stepB >= 7743143.0;
      do {
          let ksadw = true;
          let package_fmh: Map<any, any> = new Map([[String.fromCharCode(112,97,108,98,97,114,115,95,121,95,52,49,0),118], [String.fromCharCode(115,105,110,101,119,105,110,95,117,95,53,57,0),903], [String.fromCharCode(117,110,115,105,103,110,101,100,95,108,95,57,54,0),451]]);
          let tooltipsc = String.fromCharCode(117,95,49,54,95,97,100,100,105,110,103,0);
         stepB /= Math.max(5, parseFloat(`${2 >> (Math.min(4, Math.abs(package_fmh.size)))}`));
         ksadw = tooltipsc.length == 50 || !ksadw;
         package_fmh = new Map([[tooltipsc, (tooltipsc.length << (Math.min(1, Math.abs((ksadw ? 4 : 2)))))]]);
         if (appszD) {
            break;
         }
      } while ((1.58 > (stepB - 3.86) && (4 / (Math.max(10, castingV.length))) > 5) && appszD);
      libcxxcomponentsf.push(libcxxcomponentsf.length % 2);
      if (mbridgez) {
         break;
      }
   } while ((4 >= libcxxcomponentsf.length) && mbridgez);
   if (2.69 <= abidetectU) {
       let context3 = 5.0;
       let colorsa: Map<any, any> = new Map([[String.fromCharCode(113,95,55,57,95,99,108,101,97,114,0),5], [String.fromCharCode(122,95,57,49,95,114,111,119,115,107,105,112,0),74]]);
       let resendG = String.fromCharCode(107,95,56,95,112,105,120,102,109,116,0);
      if ((1 - resendG.length) <= 1) {
          let application3: Array<any> = [195, 842];
          let single2 = String.fromCharCode(109,95,55,50,95,116,119,105,100,100,108,101,115,0);
          let tailX = 3.0;
          let fastforwardx = 0.0;
          let chatD = 1.0;
         colorsa = new Map([[resendG, 3 ^ resendG.length]]);
         application3 = [parseInt(`${tailX}`)];
         single2 += `${1 & single2.length}`;
         fastforwardx += parseFloat(`${application3.length ^ 1}`);
         chatD *= parseFloat(`${application3.length}`);
      }
          let malaysiam = 0.0;
          let filter4 = 1;
         context3 += parseInt(`${malaysiam}`);
         malaysiam -= parseFloat(`${filter4}`);
         colorsa.set(`${resendG}`, 2 * resendG.length);
      while (resendG.length > colorsa.size) {
         resendG += `${parseInt(`${context3}`) % 1}`;
         break;
      }
         colorsa = new Map([[`${colorsa.size}`, resendG.length ^ colorsa.size]]);
      abidetectU /= Math.max(parseFloat(`${parseInt(`${context3}`) / 3}`), 3);
   }

        console.log("Error!", err, time);
      }
    };

    const onSeekGesture = (time: number) => {
      if (currentTime < time) {
        setSeekDirection("valuesLangConstants");
      } else {
        setSeekDirection("libreactnativejniProfile");
      }
      onSeek(time);
    };

    const onVideoProgessing = (data: any) => {
      setCurrentTime(data.currentTime);

      try {
        currentTimeRef.current = data.currentTime;
      } catch (err) {
       let codegen7 = String.fromCharCode(100,111,117,98,108,105,110,103,95,49,95,50,53,0);
    let hoverH = String.fromCharCode(104,95,50,95,108,105,109,105,116,0);
    let saveI = String.fromCharCode(104,97,115,104,116,97,103,115,95,48,95,54,57,0);
    let unselected0 = 4;
    let handlerz = false;
    let panglev = true;
    let plusi = String.fromCharCode(111,112,116,105,109,105,115,116,105,99,95,118,95,55,54,0);
    let favoriteX: Map<any, any> = new Map([[String.fromCharCode(115,95,56,51,95,115,111,97,98,111,114,116,0),696], [String.fromCharCode(99,105,112,104,101,114,115,95,117,95,57,0),947]]);
    let overT = 3.0;
    let ajaxz = 3.0;
    let greyd = 2;
    let fillc = 4.0;
    let circle3 = true;
    let redirectt = String.fromCharCode(108,116,97,98,108,101,95,48,95,54,51,0);
    let libreactnativeblobw: Array<any> = [878, 263, 861];
    let heji8 = 0;
      saveI = `${favoriteX.size ^ 3}`;
   if (overT > parseFloat(`${hoverH.length}`)) {
      hoverH += `${(parseInt(`${overT}`) + (handlerz ? 1 : 2))}`;
   }
      favoriteX = new Map([[saveI, 1 % (Math.max(4, saveI.length))]]);
   if (unselected0 <= 4) {
      greyd >>= Math.min(Math.abs(unselected0), 1);
   }
       let mintegralB = String.fromCharCode(101,95,49,55,95,102,102,109,109,97,108,0);
         mintegralB += `${(String.fromCharCode(79,0) == mintegralB ? mintegralB.length : mintegralB.length)}`;
          let minivodG = String.fromCharCode(115,116,97,116,101,115,95,103,95,52,56,0);
          let greyw = String.fromCharCode(114,101,109,111,116,101,95,57,95,52,0);
          let xadsdkZ = 4.0;
         mintegralB = `${minivodG.length}`;
         minivodG = `${(greyw == String.fromCharCode(116,0) ? parseInt(`${xadsdkZ}`) : greyw.length)}`;
         xadsdkZ *= parseFloat(`${parseInt(`${xadsdkZ}`) - 3}`);
      for (let t = 0; t < 2; t++) {
          let zoomG = String.fromCharCode(101,95,50,52,95,118,98,108,101,0);
          let untickw = 3;
          let libyogaU = String.fromCharCode(109,100,101,99,95,108,95,49,52,0);
         mintegralB = `${libyogaU.length ^ mintegralB.length}`;
         zoomG = `${untickw >> (Math.min(Math.abs(2), 5))}`;
         untickw /= Math.max(3, zoomG.length);
         libyogaU = `${1 << (Math.min(4, Math.abs(untickw)))}`;
      }
      panglev = 48 >= mintegralB.length && saveI.length >= 48;
      codegen7 += `${favoriteX.size | 3}`;
   let connectionJ = 5016572.0 >= overT;
   do {
      overT -= parseFloat(`${favoriteX.size}`);
      if (connectionJ) {
         break;
      }
   } while ((saveI.endsWith(`${overT}`)) && connectionJ);
      hoverH += `${parseInt(`${ajaxz}`)}`;
   let libfabricjniY = handlerz ? !handlerz : handlerz;
   do {
      handlerz = !saveI.endsWith(`${fillc}`);
      if (libfabricjniY) {
         break;
      }
   } while (libfabricjniY && (handlerz));
      hoverH += `${favoriteX.size}`;
       let nativea = String.fromCharCode(115,101,101,110,95,50,95,57,48,0);
       let models9 = 5;
       let sans0: Map<any, any> = new Map([[String.fromCharCode(112,95,51,55,95,114,101,115,117,109,101,0),123], [String.fromCharCode(112,111,112,117,108,97,116,101,95,52,95,54,54,0),880]]);
      if ((1 >> (Math.min(3, Math.abs(sans0.size)))) <= 1) {
          let store0 = 3;
          let zhuboa = String.fromCharCode(121,95,52,95,97,117,116,111,100,101,108,101,116,101,0);
          let stationp = String.fromCharCode(99,97,110,99,101,108,101,100,95,48,95,56,51,0);
          let executorE: Map<any, any> = new Map([[String.fromCharCode(105,95,52,55,95,97,100,100,120,0),true ], [String.fromCharCode(104,95,53,54,95,112,116,104,114,101,97,100,0),true ]]);
         nativea = `${store0}`;
         zhuboa += "1";
         stationp += `${zhuboa.length << (Math.min(Math.abs(2), 2))}`;
         executorE = new Map([[stationp, stationp.length]]);
      }
         models9 |= 1 | sans0.size;
      while (5 >= (models9 + nativea.length)) {
         nativea = `${nativea.length / 3}`;
         break;
      }
         sans0.set(`${nativea}`, sans0.size);
       let logo0: Array<any> = [637, 638];
          let inactive_ = String.fromCharCode(119,101,108,115,101,110,99,95,57,95,57,50,0);
         nativea += `${inactive_.length >> (Math.min(Math.abs(2), 4))}`;
      let resend5 = models9 <= 5188077;
      do {
         models9 -= sans0.size << (Math.min(Math.abs(2), 2));
         if (resend5) {
            break;
         }
      } while (((logo0.length >> (Math.min(4, Math.abs(models9)))) <= 2) && resend5);
      for (let w = 0; w < 3; w++) {
         models9 *= 2 << (Math.min(4, nativea.length));
      }
       let inactiveQ = 5;
      greyd -= 1;
      greyd &= parseInt(`${fillc}`) / 2;
   for (let f = 0; f < 2; f++) {
      handlerz = hoverH.length > 10;
   }
       let xvodA = false;
      for (let a = 0; a < 1; a++) {
         xvodA = !xvodA;
      }
       let fieldk = false;
      let libjsinspectord = fieldk ? !fieldk : fieldk;
      do {
         fieldk = (xvodA ? fieldk : xvodA);
         if (libjsinspectord) {
            break;
         }
      } while (libjsinspectord && (!fieldk || !xvodA));
      circle3 = 47.3 > ajaxz && !xvodA;
   let bannerk = redirectt == String.fromCharCode(52,107,111,50,50,107,101,115,109,106,0);
   do {
      redirectt = `${(plusi.length >> (Math.min(2, Math.abs((handlerz ? 4 : 3)))))}`;
      if (bannerk) {
         break;
      }
   } while ((saveI.length >= 2 || 2 >= redirectt.length) && bannerk);
   while (fillc <= 1.36 || 2.89 <= (1.36 * fillc)) {
       let routerl = String.fromCharCode(117,95,54,52,95,97,104,101,97,100,0);
       let utilsz: Array<any> = [String.fromCharCode(119,95,54,56,95,112,114,101,117,112,108,111,97,100,0), String.fromCharCode(121,117,118,112,95,110,95,57,52,0), String.fromCharCode(99,111,110,100,105,116,105,111,110,115,95,55,95,56,51,0)];
       let bottomy: Map<any, any> = new Map([[String.fromCharCode(109,97,116,105,99,95,120,95,54,55,0),258], [String.fromCharCode(100,101,114,105,118,95,50,95,54,51,0),287], [String.fromCharCode(98,95,56,52,95,108,115,112,112,111,108,121,102,0),250]]);
       let stylesu = 1.0;
       let enewinterstitialq = 0.0;
         enewinterstitialq /= Math.max(5, (parseFloat(`${routerl == String.fromCharCode(84,0) ? utilsz.length : routerl.length}`)));
      let k_centerL = routerl.length <= 8101818;
      do {
          let mountingR: Map<any, any> = new Map([[String.fromCharCode(109,95,53,51,95,105,110,115,101,114,116,115,0),734], [String.fromCharCode(100,95,49,49,95,100,101,115,101,108,101,99,116,101,100,0),989], [String.fromCharCode(101,110,116,114,121,112,111,105,110,116,95,52,95,56,53,0),28]]);
          let buffer9 = true;
         routerl = `${bottomy.size}`;
         mountingR.set(`${buffer9}`, 2 * mountingR.size);
         if (k_centerL) {
            break;
         }
      } while (k_centerL && (1.50 < (stylesu / 5.42)));
      for (let g = 0; g < 1; g++) {
         bottomy = new Map([[`${stylesu}`, parseInt(`${stylesu}`)]]);
      }
          let tail8 = 4.0;
         stylesu -= parseFloat(`${3 + bottomy.size}`);
         tail8 *= parseFloat(`${parseInt(`${tail8}`) / 2}`);
         enewinterstitialq /= Math.max(4, parseFloat(`${1 << (Math.min(5, routerl.length))}`));
          let paused = String.fromCharCode(113,95,50,95,116,114,97,99,107,0);
         utilsz = [3];
         paused += `${paused.length}`;
      if (bottomy.get(`${utilsz.length}`) == null) {
          let targetI = 0.0;
          let leftZ = 1.0;
          let binddatast: Map<any, any> = new Map([[String.fromCharCode(106,95,52,49,95,112,101,114,99,101,110,116,97,103,101,0),141], [String.fromCharCode(120,117,116,105,108,95,105,95,57,53,0),654], [String.fromCharCode(117,110,115,111,108,118,101,100,95,49,95,54,0),81]]);
          let miniV = 5.0;
         utilsz.push((routerl == String.fromCharCode(50,0) ? routerl.length : bottomy.size));
         targetI -= parseInt(`${miniV}`) / 3;
         leftZ *= 1;
         binddatast.set(`${miniV}`, 2);
      }
      for (let o = 0; o < 1; o++) {
         utilsz.push(3 / (Math.max(9, routerl.length)));
      }
          let contextW = true;
         routerl = `${(parseInt(`${enewinterstitialq}`) >> (Math.min(5, Math.abs((contextW ? 4 : 2)))))}`;
         utilsz = [routerl.length & 1];
          let successl = 4.0;
          let i_vieww = String.fromCharCode(116,104,105,115,95,115,95,57,50,0);
         routerl += "2";
         successl *= 3 * parseInt(`${successl}`);
         i_vieww = `${parseInt(`${successl}`)}`;
      if (4.25 >= (2.92 + enewinterstitialq) && (stylesu - 2.92) >= 1.80) {
          let moond = false;
          let inactiveb = String.fromCharCode(109,97,115,116,101,114,95,48,95,55,53,0);
          let templateprocessorc = String.fromCharCode(115,117,98,116,114,101,101,95,52,95,52,49,0);
          let shoot1 = String.fromCharCode(102,108,111,119,95,117,95,57,51,0);
         enewinterstitialq -= parseFloat(`${templateprocessorc.length}`);
         moond = 37 > inactiveb.length;
         inactiveb = `${shoot1.length}`;
         templateprocessorc = `${1 | shoot1.length}`;
      }
      if (!Array.from(bottomy.values()).includes(utilsz.length)) {
         bottomy.set(`${stylesu}`, parseInt(`${stylesu}`));
      }
         stylesu -= (parseFloat(`${String.fromCharCode(82,0) == routerl ? bottomy.size : routerl.length}`));
       let telemetry4: Map<any, any> = new Map([[String.fromCharCode(115,116,117,98,98,101,100,95,97,95,57,56,0),String.fromCharCode(99,97,112,116,117,114,105,110,103,95,119,95,55,55,0)], [String.fromCharCode(100,101,108,101,116,105,110,103,95,49,95,49,53,0),String.fromCharCode(115,99,114,101,101,110,95,113,95,57,50,0)]]);
      panglev = overT > 75.90;
      break;
   }
   while (4 <= (unselected0 ^ saveI.length)) {
      saveI += "1";
      break;
   }
      hoverH += `${((handlerz ? 2 : 5))}`;
   let storeY = favoriteX.size <= 7906643;
   do {
      favoriteX = new Map([[`${unselected0}`, 1]]);
      if (storeY) {
         break;
      }
   } while ((3 < (favoriteX.size / (Math.max(3, 7)))) && storeY);
      hoverH += `${parseInt(`${fillc}`) - 1}`;
   while (4 == (unselected0 | 5) || 1.17 == (overT * parseFloat(`${unselected0}`))) {
       let videox: Array<any> = [417, 198];
       let cross7 = String.fromCharCode(97,95,55,52,95,115,101,99,117,114,101,100,0);
       let package_d3K = 0.0;
          let incident0 = 5;
         cross7 += `${videox.length | cross7.length}`;
         incident0 -= incident0 & 2;
          let zhengpiano = String.fromCharCode(97,114,114,97,121,115,95,102,95,50,57,0);
          let streaming1 = 1;
          let fadfdeebbbfdabbbabdadfaaddaaD = 0.0;
         package_d3K -= parseFloat(`${2 | zhengpiano.length}`);
         zhengpiano += `${parseInt(`${fadfdeebbbfdabbbabdadfaaddaaD}`)}`;
         streaming1 -= streaming1 >> (Math.min(Math.abs(parseInt(`${fadfdeebbbfdabbbabdadfaaddaaD}`)), 3));
      for (let u = 0; u < 3; u++) {
          let jnewinterstitialN = false;
          let championY: Array<any> = [591, 382, 663];
         package_d3K /= Math.max((parseFloat(`${String.fromCharCode(72,0) == cross7 ? cross7.length : championY.length}`)), 5);
         jnewinterstitialN = !jnewinterstitialN;
         championY = [1];
      }
         package_d3K *= (parseFloat(`${cross7 == String.fromCharCode(71,0) ? cross7.length : parseInt(`${package_d3K}`)}`));
      let videocommonE = package_d3K >= 7043407.0;
      do {
          let moreA = String.fromCharCode(115,95,57,57,95,109,97,114,107,0);
         package_d3K += parseFloat(`${parseInt(`${package_d3K}`) % (Math.max(9, cross7.length))}`);
         moreA += "2";
         if (videocommonE) {
            break;
         }
      } while (videocommonE && ((package_d3K * 5.9) >= 4.69));
         cross7 = `${videox.length}`;
         cross7 = "1";
       let downloadedJ = String.fromCharCode(115,100,116,112,95,49,95,56,51,0);
         videox.push(videox.length);
      unselected0 %= Math.max(3, 1);
      break;
   }
       let skipZ: Map<any, any> = new Map([[String.fromCharCode(98,121,114,121,105,95,101,95,53,50,0),560], [String.fromCharCode(104,95,51,49,95,103,114,111,117,110,100,0),32]]);
       let containerO = String.fromCharCode(106,95,57,51,95,104,101,108,100,0);
         containerO = `${skipZ.size}`;
      for (let v = 0; v < 3; v++) {
         skipZ = new Map([[`${skipZ.size}`, skipZ.size | 1]]);
      }
         skipZ.set(`${containerO}`, (containerO == String.fromCharCode(50,0) ? skipZ.size : containerO.length));
      for (let z = 0; z < 2; z++) {
         skipZ.set(`${containerO}`, (containerO == String.fromCharCode(117,0) ? containerO.length : skipZ.size));
      }
         containerO += `${2 | skipZ.size}`;
      if ((containerO.length / 5) <= 5 || (5 / (Math.max(5, skipZ.size))) <= 1) {
          let weiboR = String.fromCharCode(99,114,111,108,108,95,106,95,51,0);
          let graphics7: Array<any> = [String.fromCharCode(112,114,105,110,99,105,112,97,108,95,115,95,57,56,0), String.fromCharCode(115,119,114,101,115,97,109,112,108,101,95,51,95,50,55,0)];
          let libcxxcomponentsm: Array<any> = [961, 67];
          let unselected2 = String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,95,116,95,53,48,0);
         containerO += `${skipZ.size + 3}`;
         weiboR += `${graphics7.length}`;
         graphics7 = [(unselected2 == String.fromCharCode(112,0) ? graphics7.length : unselected2.length)];
         libcxxcomponentsm.push(unselected2.length | weiboR.length);
      }
      codegen7 = "1";
   while (circle3) {
      greyd += favoriteX.size + 2;
      break;
   }
      codegen7 += `${hoverH.length}`;
      handlerz = unselected0 <= 64;
       let tempN = String.fromCharCode(102,95,52,52,95,114,101,116,114,105,101,100,0);
       let guideH = 1.0;
       let edito = String.fromCharCode(121,95,55,49,95,97,112,101,116,97,103,0);
         edito = `${edito.length * tempN.length}`;
      for (let p = 0; p < 2; p++) {
         guideH /= Math.max(tempN.length, 4);
      }
      let filed_ = edito.length <= 9261131;
      do {
         edito = `${parseInt(`${guideH}`)}`;
         if (filed_) {
            break;
         }
      } while (filed_ && (tempN == String.fromCharCode(109,0)));
         guideH /= Math.max(5, tempN.length | 2);
      while ((parseInt(`${guideH}`) / (Math.max(tempN.length, 8))) >= 3 && 3 >= (tempN.length / (Math.max(8, parseInt(`${guideH}`))))) {
          let heartq = String.fromCharCode(102,95,51,56,95,103,101,111,99,111,100,101,100,0);
         tempN += `${edito.length ^ heartq.length}`;
         break;
      }
      if (tempN == String.fromCharCode(110,0) && edito == String.fromCharCode(116,0)) {
         edito = `${edito.length}`;
      }
      let libreactnativejnib = 7376285.0 <= guideH;
      do {
          let modeM = 4;
         guideH /= Math.max(5, 3);
         modeM *= modeM;
         if (libreactnativejnib) {
            break;
         }
      } while (libreactnativejnib && (4 == (3 - parseInt(`${guideH}`)) && 5 == (tempN.length % 3)));
      let serviceg = 5744336 >= edito.length;
      do {
         edito = `${tempN.length << (Math.min(3, Math.abs(parseInt(`${guideH}`))))}`;
         if (serviceg) {
            break;
         }
      } while (serviceg && (2 > (edito.length - parseInt(`${guideH}`))));
         guideH -= (edito == String.fromCharCode(114,0) ? edito.length : tempN.length);
      panglev = 49 == greyd;
      codegen7 = `${codegen7.length}`;

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
       let optionsz = true;
    let customy = false;
    let event8: Array<any> = [46, 765];
    let cricketu = 3.0;
    let libhermesA = 3.0;
    let filter3 = String.fromCharCode(99,111,110,102,105,100,101,110,116,105,97,108,95,53,95,57,48,0);
    let alert4 = String.fromCharCode(107,95,57,49,95,115,99,116,112,99,111,110,110,0);
    let trophy4 = String.fromCharCode(112,114,105,110,116,95,109,95,54,54,0);
    let mbnativeX = 2;
    let carouselV: Map<any, any> = new Map([[String.fromCharCode(119,104,105,116,101,115,95,115,95,52,57,0),531], [String.fromCharCode(101,95,51,55,95,109,111,109,101,110,116,0),853]]);
    let suggestionO = 4.0;
    let empty5 = 0.0;
    let native_ = String.fromCharCode(113,95,49,50,95,100,105,109,101,110,115,105,111,110,0);
      filter3 += `${(parseInt(`${cricketu}`) / (Math.max(10, (optionsz ? 4 : 3))))}`;
   if (3.76 < (1.64 / (Math.max(3, suggestionO)))) {
      suggestionO -= (String.fromCharCode(116,0) == trophy4 ? parseInt(`${suggestionO}`) : trophy4.length);
   }
      optionsz = alert4 == String.fromCharCode(117,0);
      customy = event8.includes(suggestionO);
   while (filter3.length <= 3) {
      trophy4 = `${(String.fromCharCode(67,0) == trophy4 ? parseInt(`${suggestionO}`) : trophy4.length)}`;
      break;
   }
   for (let y = 0; y < 2; y++) {
       let referrer7 = String.fromCharCode(99,95,50,48,95,108,101,118,97,114,105,110,116,0);
       let team9 = String.fromCharCode(108,97,114,103,101,115,116,95,109,95,52,53,0);
       let armvaS = String.fromCharCode(105,95,52,49,95,99,111,100,101,99,112,114,105,118,97,116,101,0);
      let libjsijniprofiler9 = armvaS == String.fromCharCode(119,50,51,0);
      do {
         armvaS = `${team9.length}`;
         if (libjsijniprofiler9) {
            break;
         }
      } while (libjsijniprofiler9 && (armvaS.includes(team9)));
         armvaS += "3";
         armvaS += "1";
      if (referrer7.includes(armvaS)) {
         armvaS += `${(String.fromCharCode(113,0) == team9 ? armvaS.length : team9.length)}`;
      }
      let attributedstringp = 7821512 >= team9.length;
      do {
          let handlerJ = 4;
          let playlistu = true;
         team9 += "3";
         handlerJ >>= Math.min(1, Math.abs(1));
         playlistu = !playlistu;
         if (attributedstringp) {
            break;
         }
      } while ((!team9.startsWith(`${armvaS.length}`)) && attributedstringp);
         referrer7 = `${(referrer7 == String.fromCharCode(110,0) ? team9.length : referrer7.length)}`;
         team9 += `${(String.fromCharCode(110,0) == armvaS ? team9.length : armvaS.length)}`;
      while (4 >= team9.length) {
         armvaS = `${armvaS.length & team9.length}`;
         break;
      }
      let debugp = 9364438 <= team9.length;
      do {
         team9 = `${team9.length ^ 3}`;
         if (debugp) {
            break;
         }
      } while ((!team9.startsWith(armvaS)) && debugp);
      filter3 = `${2 >> (Math.min(5, Math.abs(parseInt(`${empty5}`))))}`;
   }
      libhermesA += parseFloat(`${parseInt(`${libhermesA}`) / (Math.max(3, 6))}`);
      customy = 74 == trophy4.length && 74 == event8.length;
   if (!filter3.endsWith(`${empty5}`)) {
       let hiadk = true;
         hiadk = (hiadk ? !hiadk : hiadk);
         hiadk = (hiadk ? hiadk : hiadk);
         hiadk = (!hiadk ? hiadk : !hiadk);
      filter3 += `${trophy4.length}`;
   }
   for (let r = 0; r < 1; r++) {
      trophy4 += `${mbnativeX << (Math.min(Math.abs(1), 4))}`;
   }
   let filterA = libhermesA >= 5168682.0;
   do {
      libhermesA /= Math.max(4, parseFloat(`${carouselV.size - trophy4.length}`));
      if (filterA) {
         break;
      }
   } while (filterA && (3 < (filter3.length / 5)));
      optionsz = trophy4.length == parseInt(`${cricketu}`);
   if (trophy4.endsWith(`${customy}`)) {
       let adultK: Array<any> = [56, 98];
       let frame_2W = String.fromCharCode(102,117,110,99,116,105,111,110,95,106,95,49,48,0);
       let switch_id8 = 3.0;
         adultK.push(frame_2W.length);
      let readI = 8423841.0 >= switch_id8;
      do {
         switch_id8 += 1;
         if (readI) {
            break;
         }
      } while (readI && ((frame_2W.length - parseInt(`${switch_id8}`)) < 5));
         adultK.push(frame_2W.length + adultK.length);
         frame_2W = `${1 % (Math.max(8, parseInt(`${switch_id8}`)))}`;
      while ((adultK.length * parseInt(`${switch_id8}`)) > 5) {
          let internetY = 2.0;
          let liblogger9 = 1.0;
         adultK.push(parseInt(`${internetY}`));
         liblogger9 /= Math.max(2, parseInt(`${liblogger9}`) & parseInt(`${liblogger9}`));
         break;
      }
         switch_id8 -= 3;
         switch_id8 -= adultK.length;
          let invitey = String.fromCharCode(116,95,55,54,95,112,108,117,114,97,108,0);
          let componentB = 3.0;
         switch_id8 *= parseInt(`${componentB}`);
         invitey = `${invitey.length}`;
         componentB -= (parseFloat(`${invitey == String.fromCharCode(120,0) ? invitey.length : invitey.length}`));
         frame_2W += `${3 + frame_2W.length}`;
      customy = filter3 == String.fromCharCode(68,0);
   }
   while (!filter3.includes(`${customy}`)) {
      filter3 = `${parseInt(`${cricketu}`)}`;
      break;
   }
      alert4 = `${((customy ? 3 : 2))}`;
   if (cricketu == empty5) {
       let historym = String.fromCharCode(101,95,51,51,95,115,110,97,112,0);
       let loadingN = 2;
       let penaltyY = String.fromCharCode(105,110,116,114,97,120,104,117,102,95,98,95,54,49,0);
       let adultV: Map<any, any> = new Map([[String.fromCharCode(121,95,55,52,95,115,111,114,116,101,114,0),705], [String.fromCharCode(109,111,100,117,108,101,115,95,118,95,49,53,0),959], [String.fromCharCode(102,95,53,57,95,99,111,111,114,100,105,110,97,116,111,114,0),51]]);
       let editd = 4.0;
      while ((adultV.size * editd) == 1.47 || (2 >> (Math.min(5, Math.abs(adultV.size)))) == 3) {
          let b_unlockq: Array<any> = [145, 954, 225];
          let refreshL = String.fromCharCode(99,104,101,99,107,95,56,95,49,48,48,0);
          let leftj = String.fromCharCode(97,95,50,49,95,103,97,109,109,97,102,105,108,116,101,114,0);
         adultV = new Map([[`${b_unlockq.length}`, 2]]);
         b_unlockq = [1 - leftj.length];
         refreshL = `${refreshL.length}`;
         leftj = `${refreshL.length}`;
         break;
      }
      if (5 >= historym.length) {
          let indexT = 0;
          let libfbr = 0;
         historym = `${loadingN * indexT}`;
         indexT /= Math.max(4, libfbr);
      }
      if (historym.endsWith(`${penaltyY.length}`)) {
         historym += `${historym.length}`;
      }
      let libfolly4 = 8652677.0 >= editd;
      do {
         editd -= 3;
         if (libfolly4) {
            break;
         }
      } while (libfolly4 && ((editd - 5.85) >= 1.73 || 2.83 >= (5.85 - editd)));
      while (!penaltyY.startsWith(`${editd}`)) {
         editd /= Math.max(2 ^ parseInt(`${editd}`), 1);
         break;
      }
      while ((editd + 2.38) > 2.11 && (editd + 2.38) > 4.7) {
         adultV.set(`${penaltyY}`, penaltyY.length % (Math.max(1, 10)));
         break;
      }
          let fastforwardR: Array<any> = [623, 477];
          let huaweis = String.fromCharCode(110,95,56,56,95,105,110,99,111,109,105,110,103,0);
         adultV = new Map([[`${fastforwardR.length}`, 1 ^ parseInt(`${editd}`)]]);
         fastforwardR.push(huaweis.length - 2);
         huaweis += `${huaweis.length}`;
          let memberI = 4.0;
          let leftk = false;
          let linkB = 2.0;
         editd /= Math.max(3, 2 / (Math.max(parseInt(`${editd}`), 3)));
         memberI *= 1 / (Math.max(2, parseInt(`${linkB}`)));
         leftk = 30.63 == linkB;
          let pointl = String.fromCharCode(122,95,57,55,95,100,116,108,115,0);
         editd *= 2;
         pointl = `${pointl.length}`;
         historym += `${(String.fromCharCode(100,0) == historym ? penaltyY.length : historym.length)}`;
       let episodeX: Array<any> = [String.fromCharCode(119,101,105,103,104,116,95,121,95,56,54,0), String.fromCharCode(120,95,53,55,95,101,99,114,101,100,0)];
       let weibo1: Array<any> = [470, 908];
         loadingN <<= Math.min(Math.abs(2), 2);
      for (let d = 0; d < 1; d++) {
          let s_unlockY: Array<any> = [String.fromCharCode(101,112,115,118,95,121,95,51,57,0), String.fromCharCode(104,95,57,50,95,110,118,101,110,99,0)];
          let videoA: Array<any> = [60, 618, 947];
          let rightX: Array<any> = [101, 272];
          let yingn = true;
         loadingN *= 1;
         s_unlockY.push(1);
         videoA.push(((yingn ? 4 : 5) | videoA.length));
         rightX.push(videoA.length);
         yingn = s_unlockY.length > videoA.length;
      }
      let transfer0 = historym.length >= 9241018;
      do {
          let scoren = String.fromCharCode(119,95,49,54,95,112,111,110,103,0);
         historym = `${(scoren == String.fromCharCode(106,0) ? episodeX.length : scoren.length)}`;
         if (transfer0) {
            break;
         }
      } while (transfer0 && ((2 * historym.length) >= 1));
      for (let i = 0; i < 2; i++) {
         historym = `${1 + parseInt(`${editd}`)}`;
      }
      empty5 *= parseInt(`${cricketu}`);
   }
       let transferd = 3;
       let libpangleflipped0: Array<any> = [String.fromCharCode(115,97,102,101,116,121,95,107,95,50,50,0), String.fromCharCode(115,97,100,120,120,95,103,95,53,55,0), String.fromCharCode(114,110,103,115,95,51,95,55,52,0)];
       let icony: Map<any, any> = new Map([[String.fromCharCode(101,95,53,57,95,108,115,112,115,0),String.fromCharCode(112,95,55,54,0)], [String.fromCharCode(119,105,110,115,111,99,107,95,97,95,57,53,0),String.fromCharCode(120,95,54,95,108,111,111,112,115,0)], [String.fromCharCode(114,101,113,115,116,97,116,101,95,55,95,51,54,0),String.fromCharCode(105,95,49,57,95,104,108,115,112,108,97,121,108,105,115,116,0)]]);
      while ((transferd >> (Math.min(Math.abs(1), 1))) > 2 || (1 >> (Math.min(4, Math.abs(transferd)))) > 5) {
          let targetB = String.fromCharCode(104,97,110,100,111,118,101,114,95,116,95,49,53,0);
          let changew = 4;
          let mountingQ = true;
         libpangleflipped0 = [icony.size - 3];
         targetB = `${3 * changew}`;
         changew += 2 % (Math.max(8, changew));
         mountingQ = (changew - targetB.length) > 36;
         break;
      }
      while (2 < (1 & transferd) || 2 < (transferd & 1)) {
         libpangleflipped0.push(libpangleflipped0.length | 2);
         break;
      }
      if (2 <= (icony.size - 2)) {
          let next1 = 5.0;
          let assistR: Array<any> = [984, 545];
          let membershipF = String.fromCharCode(109,112,99,100,97,116,97,95,55,95,52,48,0);
          let roundu = String.fromCharCode(118,95,57,48,95,104,97,110,110,105,110,103,0);
         icony = new Map([[`${assistR.length}`, parseInt(`${next1}`)]]);
         next1 *= parseFloat(`${membershipF.length}`);
         assistR.push(roundu.length);
         membershipF += `${membershipF.length}`;
         roundu = `${membershipF.length}`;
      }
          let libavutil3 = String.fromCharCode(99,108,101,97,114,98,105,116,95,54,95,49,52,0);
          let serviceP = 3.0;
         libpangleflipped0.push(3 >> (Math.min(Math.abs(parseInt(`${serviceP}`)), 2)));
         libavutil3 = `${(libavutil3 == String.fromCharCode(51,0) ? libavutil3.length : libavutil3.length)}`;
         serviceP -= libavutil3.length / 2;
       let roomI: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,100,95,102,95,56,55,0),956], [String.fromCharCode(114,101,116,114,97,110,115,109,105,115,115,105,111,110,95,52,95,55,52,0),913]]);
       let libfb5: Array<any> = [770, 37, 721];
         icony.set(`${transferd}`, icony.size);
          let f_countt = 1;
          let bottomA: Array<any> = [613, 861, 507];
         libfb5 = [bottomA.length << (Math.min(Math.abs(2), 2))];
         f_countt *= 2;
         bottomA.push(f_countt);
      while ((libpangleflipped0.length % (Math.max(3, 9))) < 5 && (libpangleflipped0.length % 3) < 3) {
         libpangleflipped0 = [1 << (Math.min(1, Math.abs(icony.size)))];
         break;
      }
      trophy4 += "2";
       let templateprocessorn = 2.0;
          let gmailK = String.fromCharCode(98,97,99,107,105,110,103,95,50,95,52,54,0);
          let typesT = 4;
         templateprocessorn += parseFloat(`${3 | typesT}`);
         gmailK += `${gmailK.length}`;
         typesT %= Math.max(3, 2);
      if (5.20 == (templateprocessorn * 4.88)) {
         templateprocessorn -= parseFloat(`${3}`);
      }
      let librrcm = templateprocessorn >= 8172207.0;
      do {
         templateprocessorn /= Math.max(5, parseFloat(`${1}`));
         if (librrcm) {
            break;
         }
      } while (librrcm && (5.2 >= (templateprocessorn / 4.98) && (templateprocessorn - templateprocessorn) >= 4.98));
      native_ = `${(trophy4.length - (optionsz ? 3 : 1))}`;
      optionsz = (mbnativeX / (Math.max(empty5, 3))) < 77;
      empty5 -= event8.length >> (Math.min(Math.abs(1), 1));
      cricketu /= Math.max(2, 1 * carouselV.size);
      carouselV.set(filter3, trophy4.length);
   while ((filter3.length + mbnativeX) == 4) {
      mbnativeX %= Math.max(1, 1);
      break;
   }
       let h_imagel = String.fromCharCode(119,95,54,55,95,98,108,97,99,107,0);
       let larges = String.fromCharCode(116,111,109,111,114,114,111,119,95,102,95,50,50,0);
       let libcrashsdk_ = String.fromCharCode(101,103,114,101,115,115,95,52,95,50,50,0);
         h_imagel = `${h_imagel.length}`;
          let cross9 = 5;
          let phoneh = 5;
         larges = `${phoneh}`;
         cross9 ^= cross9 / 3;
         phoneh -= cross9 >> (Math.min(Math.abs(cross9), 1));
          let overlayv = String.fromCharCode(108,95,51,49,95,115,104,97,0);
          let playercommonu = 1.0;
         h_imagel += `${parseInt(`${playercommonu}`)}`;
         overlayv += `${overlayv.length & overlayv.length}`;
         playercommonu /= Math.max(3, (parseFloat(`${String.fromCharCode(56,0) == overlayv ? overlayv.length : overlayv.length}`)));
       let condensedv = String.fromCharCode(107,97,105,115,101,114,95,113,95,57,0);
       let currentu = String.fromCharCode(102,111,117,114,115,113,117,97,114,101,95,110,95,51,53,0);
       let transferV = 0;
       let filla = 4;
       let libloggerY = 2.0;
      while (larges != String.fromCharCode(66,0) || 2 == libcrashsdk_.length) {
         larges += `${filla * parseInt(`${libloggerY}`)}`;
         break;
      }
         transferV ^= larges.length % 2;
      for (let e = 0; e < 2; e++) {
          let backp = String.fromCharCode(103,95,52,52,95,97,99,116,105,118,97,116,111,114,0);
          let blackR = String.fromCharCode(109,95,51,0);
          let canvast: Array<any> = [String.fromCharCode(118,95,57,55,95,109,112,101,103,118,105,100,101,111,100,97,116,97,0), String.fromCharCode(108,97,121,111,117,116,115,95,121,95,55,55,0), String.fromCharCode(114,95,50,50,95,99,111,110,116,105,110,117,97,108,0)];
          let shareR = true;
          let mbridgee = 2.0;
         transferV /= Math.max((backp == String.fromCharCode(81,0) ? backp.length : libcrashsdk_.length), 3);
         blackR += `${((shareR ? 5 : 4) >> (Math.min(Math.abs(1), 2)))}`;
         canvast = [3 + parseInt(`${mbridgee}`)];
         shareR = blackR == String.fromCharCode(74,0);
         mbridgee += parseInt(`${mbridgee}`);
      }
      carouselV.set(`${mbnativeX}`, 2 ^ native_.length);
   if ((2.42 + suggestionO) < 4.63 || (3 + parseInt(`${suggestionO}`)) < 2) {
       let apps2 = 0;
      while (4 > (apps2 * 4) && 4 > (apps2 * 4)) {
         apps2 %= Math.max(2, 3);
         break;
      }
      if (apps2 < apps2) {
         apps2 -= 1 ^ apps2;
      }
          let setting7 = 1.0;
          let v_player3 = 0.0;
          let switch_hvR = String.fromCharCode(114,95,49,51,95,100,114,111,112,0);
         apps2 |= parseInt(`${setting7}`);
         setting7 += parseFloat(`${2 & switch_hvR.length}`);
         v_player3 += parseFloat(`${switch_hvR.length * parseInt(`${v_player3}`)}`);
      filter3 = `${(alert4 == String.fromCharCode(67,0) ? apps2 : alert4.length)}`;
   }
       let long_61 = 4.0;
         long_61 *= parseFloat(`${parseInt(`${long_61}`)}`);
       let flyerc: Array<any> = [String.fromCharCode(106,95,56,95,116,116,97,99,104,109,101,110,116,0), String.fromCharCode(106,95,56,57,95,116,114,97,102,0), String.fromCharCode(109,115,118,105,100,101,111,95,49,95,51,52,0)];
       let loading5: Array<any> = [468, 70];
      while (!loading5.includes(long_61)) {
          let viewsk = 1.0;
          let mbbannerk = 5.0;
          let pointB = String.fromCharCode(103,111,116,95,115,95,55,51,0);
          let currentB: Map<any, any> = new Map([[String.fromCharCode(100,105,103,114,97,112,104,95,121,95,56,48,0),String.fromCharCode(100,114,97,119,97,98,108,101,95,48,95,54,52,0)], [String.fromCharCode(103,95,51,50,95,99,111,110,112,111,110,101,110,116,115,0),String.fromCharCode(101,95,49,48,48,95,112,114,101,102,105,120,0)], [String.fromCharCode(121,95,56,49,95,112,97,115,115,116,104,114,111,117,103,104,0),String.fromCharCode(105,110,112,117,116,120,95,121,95,52,48,0)]]);
          let manifestU: Array<any> = [707, 423, 786];
         loading5 = [manifestU.length << (Math.min(3, Math.abs(currentB.size)))];
         viewsk *= parseInt(`${viewsk}`) ^ parseInt(`${mbbannerk}`);
         mbbannerk /= Math.max(3, parseFloat(`${parseInt(`${viewsk}`)}`));
         pointB = "2";
         currentB.set(pointB, (pointB == String.fromCharCode(83,0) ? pointB.length : parseInt(`${mbbannerk}`)));
         manifestU.push(parseInt(`${mbbannerk}`) >> (Math.min(pointB.length, 2)));
         break;
      }
      cricketu /= Math.max((String.fromCharCode(55,0) == native_ ? parseInt(`${empty5}`) : native_.length), 2);
       let libfollyt = 5.0;
      for (let v = 0; v < 2; v++) {
         libfollyt /= Math.max(5, parseFloat(`${parseInt(`${libfollyt}`)}`));
      }
          let relatedz = false;
          let networkO = String.fromCharCode(99,95,56,53,95,114,97,105,115,101,100,0);
         libfollyt /= Math.max((parseFloat(`${1 >> (Math.min(3, Math.abs((relatedz ? 4 : 5))))}`)), 2);
         relatedz = networkO == networkO;
         libfollyt *= parseFloat(`${1}`);
      filter3 += `${filter3.length >> (Math.min(Math.abs(2), 4))}`;
   if (optionsz) {
      libhermesA += parseFloat(`${1}`);
   }
      native_ = `${((customy ? 1 : 4) << (Math.min(2, Math.abs(2))))}`;

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
       let attributedstrings = String.fromCharCode(112,114,111,99,101,115,115,111,114,95,113,95,53,55,0);
    let ewardedj = 5.0;
    let ticka = 0.0;
    let videocommong = 1.0;
    let suggestion5 = 4.0;
    let combineM = 0.0;
    let volumee = 2.0;
    let libglogq = String.fromCharCode(99,108,111,115,101,99,98,95,100,95,51,49,0);
    let ewardedM = String.fromCharCode(110,95,50,54,95,100,105,115,112,108,97,99,101,109,101,110,116,0);
    let connectionH = true;
    let hooksu = true;
    let textinputA = 0.0;
    let indicatori = String.fromCharCode(100,97,116,97,100,105,114,95,54,95,50,48,0);
    let gmailp = 4;
    let downloadedI = 5;
    let mbbidU = String.fromCharCode(115,119,105,116,99,104,101,100,95,97,95,55,53,0);
    let detailsl: Array<any> = [639, 420];
       let buttonH = String.fromCharCode(119,95,55,50,95,103,101,116,108,97,100,100,114,115,0);
       let fast0 = 5;
       let miniP: Map<any, any> = new Map([[String.fromCharCode(105,95,55,54,95,99,108,117,98,0),931], [String.fromCharCode(102,117,108,108,121,95,53,95,56,0),146], [String.fromCharCode(108,95,53,48,95,100,114,101,102,0),560]]);
      let latnE = 9606762 >= miniP.size;
      do {
         miniP.set(buttonH, 1);
         if (latnE) {
            break;
         }
      } while (latnE && (miniP.get(`${fast0}`) != null));
         fast0 -= 2;
         buttonH += `${(buttonH == String.fromCharCode(49,0) ? buttonH.length : fast0)}`;
       let subsa: Array<any> = [String.fromCharCode(101,110,117,109,101,114,97,116,105,110,103,95,97,95,57,50,0), String.fromCharCode(120,95,51,53,95,110,117,109,98,101,114,115,0)];
         miniP.set(buttonH, fast0 / (Math.max(buttonH.length, 3)));
          let videojsU = String.fromCharCode(100,117,115,116,95,115,95,51,51,0);
         subsa.push(1 ^ miniP.size);
         videojsU = `${videojsU.length}`;
      for (let g = 0; g < 2; g++) {
         subsa = [buttonH.length];
      }
         subsa = [miniP.size % 1];
         fast0 |= miniP.size;
      ticka *= parseFloat(`${2}`);
   if (2.88 >= (1.36 + combineM)) {
      libglogq += `${3 | parseInt(`${textinputA}`)}`;
   }
      ewardedM += `${1 / (Math.max(parseInt(`${textinputA}`), 3))}`;
   while ((3.46 * videocommong) > 1.63 && (videocommong * combineM) > 3.46) {
      videocommong *= (ewardedM == String.fromCharCode(83,0) ? parseInt(`${ticka}`) : ewardedM.length);
      break;
   }
   while ((ewardedj * 1.100) > 2.93) {
      hooksu = 40.33 < combineM && 40.33 < ticka;
      break;
   }
   for (let v = 0; v < 1; v++) {
       let pauseZ = String.fromCharCode(115,121,110,99,95,53,95,53,53,0);
       let service2: Array<any> = [400, 664];
       let volumeg: Array<any> = [433, 826, 207];
       let inactiveJ = 3;
      if ((inactiveJ >> (Math.min(Math.abs(4), 3))) < 1 && 5 < (inactiveJ >> (Math.min(Math.abs(4), 4)))) {
          let windZ: Array<any> = [String.fromCharCode(112,115,100,115,112,95,111,95,49,52,0), String.fromCharCode(108,111,99,97,108,97,100,100,114,95,105,95,49,55,0)];
         inactiveJ *= 2 * inactiveJ;
         windZ = [windZ.length % (Math.max(4, windZ.length))];
      }
       let entryq: Array<any> = [147, 727, 532];
       let sinae: Array<any> = [444, 499];
          let chinasameX = 5.0;
          let d_manager0: Map<any, any> = new Map([[String.fromCharCode(100,101,108,97,116,101,100,95,49,95,49,50,0),false ], [String.fromCharCode(98,121,116,101,114,117,110,95,109,95,56,50,0),true ], [String.fromCharCode(116,95,54,52,95,114,101,103,0),true ]]);
          let downloaderK = 0;
         service2 = [2 ^ sinae.length];
         chinasameX += 2 ^ d_manager0.size;
         d_manager0 = new Map([[`${d_manager0.size}`, 2]]);
         downloaderK |= d_manager0.size | 2;
      if (3 >= sinae.length) {
         sinae.push(inactiveJ);
      }
      for (let w = 0; w < 3; w++) {
         inactiveJ <<= Math.min(3, entryq.length);
      }
       let libflipperb: Map<any, any> = new Map([[String.fromCharCode(115,99,97,108,101,100,99,111,110,118,111,108,118,101,95,49,95,49,48,0),String.fromCharCode(106,95,56,52,95,106,111,105,110,105,110,103,0)], [String.fromCharCode(115,98,103,112,95,52,95,50,57,0),String.fromCharCode(101,95,53,50,95,116,97,114,103,97,0)]]);
      for (let q = 0; q < 2; q++) {
          let resendz = 3;
          let liveO = String.fromCharCode(115,117,98,116,114,97,99,116,95,54,95,53,55,0);
          let zhubo2 = 3;
          let directu = String.fromCharCode(113,95,56,95,105,97,116,0);
          let wind_ = String.fromCharCode(114,101,100,114,97,119,95,118,95,52,57,0);
         libflipperb = new Map([[`${service2.length}`, 3 ^ liveO.length]]);
         resendz <<= Math.min(Math.abs(1), 3);
         liveO += "1";
         zhubo2 ^= 3 % (Math.max(7, directu.length));
         directu = `${zhubo2}`;
         wind_ += `${resendz}`;
      }
         entryq.push(libflipperb.size | 3);
       let downloaderq: Array<any> = [519, 201, 668];
         inactiveJ &= 2;
      for (let j = 0; j < 1; j++) {
          let directP = String.fromCharCode(102,95,56,57,95,101,116,105,109,101,0);
          let typingG = 4.0;
          let gestureq: Array<any> = [953, 188];
          let libjsiv: Map<any, any> = new Map([[String.fromCharCode(103,95,52,51,95,118,105,103,110,101,116,116,105,110,103,0),889], [String.fromCharCode(109,95,52,56,95,115,112,97,109,0),960], [String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,115,95,104,95,49,51,0),544]]);
         libflipperb = new Map([[`${libjsiv.size}`, 2]]);
         directP += `${directP.length & 3}`;
         typingG *= parseFloat(`${1}`);
         gestureq = [parseInt(`${typingG}`)];
         libjsiv.set(`${typingG}`, parseInt(`${typingG}`));
      }
       let shirty = true;
      combineM -= pauseZ.length;
      pauseZ += `${volumeg.length + volumeg.length}`;
   }
   while ((1.97 - ewardedj) == 2.23 || !connectionH) {
      connectionH = attributedstrings.length < libglogq.length;
      break;
   }
   for (let z = 0; z < 3; z++) {
       let submitK = String.fromCharCode(109,95,54,57,95,97,109,101,114,97,0);
      let templateprocessorr = submitK == String.fromCharCode(118,103,56,115,0);
      do {
         submitK = `${submitK.length}`;
         if (templateprocessorr) {
            break;
         }
      } while ((submitK.length <= submitK.length) && templateprocessorr);
      while (submitK != String.fromCharCode(106,0)) {
         submitK += `${submitK.length * submitK.length}`;
         break;
      }
      let sharem = submitK.length >= 8772781;
      do {
         submitK += `${submitK.length / (Math.max(7, submitK.length))}`;
         if (sharem) {
            break;
         }
      } while (sharem && (submitK.length <= submitK.length));
      textinputA *= parseFloat(`${parseInt(`${suggestion5}`) ^ attributedstrings.length}`);
   }
   for (let v = 0; v < 1; v++) {
      attributedstrings += `${parseInt(`${ticka}`) ^ 3}`;
   }
   while (4.9 >= (ewardedj - 2.71)) {
      ewardedj += parseFloat(`${3 % (Math.max(2, parseInt(`${suggestion5}`)))}`);
      break;
   }
      ticka -= parseFloat(`${2 << (Math.min(4, libglogq.length))}`);

      if (
        autoPlayNext &&
        activeEpisode !== undefined &&
        episodes &&
        activeEpisode < episodes?.url_count - 1
      ) {

   let navigationa = String.fromCharCode(110,97,56,103,101,103,48,0) == ewardedM;
   do {
      ewardedM = `${libglogq.length}`;
      if (navigationa) {
         break;
      }
   } while (((videocommong + 5.6) > 1.40) && navigationa);
      ewardedj += parseFloat(`${parseInt(`${volumee}`) << (Math.min(Math.abs(1), 5))}`);
   for (let v = 0; v < 1; v++) {
      videocommong += gmailp;
   }
   for (let h = 0; h < 3; h++) {
       let videoG = false;
       let mergerd: Array<any> = [425, 475];
       let controlx = 2.0;
       let libjsiT: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,116,116,105,109,101,95,106,95,54,54,0),345], [String.fromCharCode(100,95,49,52,95,99,108,111,115,101,0),825], [String.fromCharCode(98,108,111,98,115,95,116,95,57,50,0),983]]);
       let nativeY = 4.0;
      if ((libjsiT.size % 4) >= 4 || 2 >= (libjsiT.size % 4)) {
         mergerd = [libjsiT.size];
      }
      if ((mergerd.length * 5) < 4) {
         videoG = libjsiT.size > 57 && !videoG;
      }
      let penaltyk = libjsiT.size <= 7686437;
      do {
         libjsiT = new Map([[`${mergerd.length}`, (mergerd.length >> (Math.min(2, Math.abs((videoG ? 2 : 3)))))]]);
         if (penaltyk) {
            break;
         }
      } while ((libjsiT.get(`${mergerd.length}`) != null) && penaltyk);
      while (videoG) {
          let v_unlockZ = 0.0;
         videoG = controlx <= 11.26;
         v_unlockZ *= parseFloat(`${parseInt(`${v_unlockZ}`)}`);
         break;
      }
       let rightX = 4.0;
       let langkey4 = 3.0;
      let grayw = videoG ? !videoG : videoG;
      do {
          let productT = String.fromCharCode(101,115,99,97,112,101,115,95,97,95,56,52,0);
          let countdownO = String.fromCharCode(118,97,114,105,110,116,95,98,95,55,57,0);
          let langU: Array<any> = [String.fromCharCode(99,111,100,101,114,95,120,95,57,50,0), String.fromCharCode(115,101,110,100,95,56,95,49,52,0), String.fromCharCode(106,97,99,111,115,117,98,95,120,95,55,0)];
          let completeU = String.fromCharCode(110,95,51,52,95,121,100,97,121,0);
         videoG = (parseInt(`${rightX}`) * countdownO.length) == 76;
         productT = `${langU.length ^ productT.length}`;
         countdownO = `${langU.length % 1}`;
         completeU += `${productT.length}`;
         if (grayw) {
            break;
         }
      } while (grayw && (!videoG));
         nativeY *= parseFloat(`${2 & parseInt(`${nativeY}`)}`);
          let colorsv = 3.0;
         controlx /= Math.max(parseFloat(`${1 / (Math.max(5, parseInt(`${controlx}`)))}`), 3);
         colorsv += parseFloat(`${parseInt(`${colorsv}`) * parseInt(`${colorsv}`)}`);
      for (let f = 0; f < 2; f++) {
          let nativemoduler = 2.0;
          let splashf = String.fromCharCode(102,95,53,52,95,97,100,106,97,99,101,110,116,0);
          let indexg = true;
         mergerd.push(parseInt(`${nativemoduler}`) * 3);
         nativemoduler *= (parseFloat(`${(indexg ? 5 : 4) / (Math.max(1, 9))}`));
         splashf += `${(String.fromCharCode(118,0) == splashf ? splashf.length : (indexg ? 5 : 1))}`;
      }
      while (nativeY == parseFloat(`${mergerd.length}`)) {
          let animationsN = String.fromCharCode(114,101,115,121,110,99,95,108,95,54,0);
          let casting0 = String.fromCharCode(110,95,51,51,95,99,111,108,108,101,99,116,105,111,110,115,0);
         nativeY /= Math.max(3, (parseFloat(`${casting0.length ^ (videoG ? 2 : 4)}`)));
         animationsN = `${animationsN.length / 1}`;
         casting0 += `${animationsN.length * animationsN.length}`;
         break;
      }
      while ((langkey4 - 1.46) == 5.81 && 1.46 == (langkey4 - rightX)) {
         rightX += parseFloat(`${3 & libjsiT.size}`);
         break;
      }
         videoG = libjsiT.size > 48;
      let more3 = videoG ? !videoG : videoG;
      do {
          let redirect7 = String.fromCharCode(101,110,117,109,101,114,97,116,105,110,103,95,120,95,50,50,0);
          let fastG = 4.0;
          let templateprocessorK = 1.0;
          let soundu: Map<any, any> = new Map([[String.fromCharCode(108,95,53,52,95,100,105,97,103,110,111,115,116,105,99,115,0),167], [String.fromCharCode(119,104,105,99,104,95,54,95,49,48,48,0),600]]);
          let weibot = 1.0;
         videoG = videoG && nativeY > 37.36;
         redirect7 = `${parseInt(`${templateprocessorK}`) / (Math.max(redirect7.length, 2))}`;
         fastG += parseInt(`${weibot}`);
         templateprocessorK -= 2 ^ parseInt(`${fastG}`);
         soundu = new Map([[redirect7, (redirect7 == String.fromCharCode(53,0) ? redirect7.length : parseInt(`${fastG}`))]]);
         weibot /= Math.max(3, parseFloat(`${soundu.size * 1}`));
         if (more3) {
            break;
         }
      } while (more3 && (4 > mergerd.length));
       let moviesq = true;
      if (parseInt(`${rightX}`) == mergerd.length) {
         rightX *= parseFloat(`${parseInt(`${langkey4}`)}`);
      }
      hooksu = 68.79 <= textinputA;
   }
       let volumegv = 4.0;
       let upgrade2 = 5.0;
       let connectionX = String.fromCharCode(99,101,108,116,95,120,95,49,53,0);
       let pingt = false;
      while (4.15 <= (upgrade2 / (Math.max(parseFloat(`${connectionX.length}`), 6)))) {
         upgrade2 -= parseFloat(`${parseInt(`${volumegv}`) << (Math.min(connectionX.length, 3))}`);
         break;
      }
         volumegv -= (parseFloat(`${(pingt ? 3 : 2) / (Math.max(2, parseInt(`${upgrade2}`)))}`));
          let detailY = String.fromCharCode(121,95,52,53,95,116,119,101,97,107,115,0);
          let gestureN = 3.0;
          let settingsc = 3.0;
         connectionX += `${connectionX.length}`;
         detailY = `${parseInt(`${gestureN}`) << (Math.min(2, Math.abs(3)))}`;
         gestureN -= (detailY == String.fromCharCode(102,0) ? parseInt(`${gestureN}`) : detailY.length);
         settingsc /= Math.max(parseFloat(`${parseInt(`${gestureN}`) << (Math.min(detailY.length, 5))}`), 2);
      if (pingt) {
         volumegv *= (parseFloat(`${(pingt ? 2 : 4) % (Math.max(parseInt(`${volumegv}`), 4))}`));
      }
      for (let t = 0; t < 3; t++) {
         connectionX += `${connectionX.length}`;
      }
      if ((connectionX.length & 1) == 4) {
          let updatesV = 3;
         connectionX += `${updatesV}`;
      }
         pingt = upgrade2 < 96.88;
      while (3 > connectionX.length && !pingt) {
         pingt = !pingt;
         break;
      }
      gmailp ^= parseInt(`${upgrade2}`) + parseInt(`${volumegv}`);
   while (!hooksu) {
       let modulev = String.fromCharCode(102,95,50,95,108,111,111,112,115,0);
         modulev += `${(modulev == String.fromCharCode(69,0) ? modulev.length : modulev.length)}`;
       let mbjscommonw = 3;
         modulev += `${modulev.length}`;
      hooksu = attributedstrings.includes(`${combineM}`);
      break;
   }
      videocommong -= parseInt(`${combineM}`) >> (Math.min(3, Math.abs(1)));
   while (3 <= (ewardedM.length >> (Math.min(Math.abs(3), 1)))) {
       let resendZ = 4;
       let selectionK = String.fromCharCode(97,117,116,104,114,111,114,105,122,97,116,105,111,110,95,116,95,53,54,0);
       let entryw = String.fromCharCode(98,105,116,115,116,114,105,110,103,95,116,95,51,56,0);
       let nexta = String.fromCharCode(97,100,100,105,116,105,111,110,95,99,95,57,48,0);
       let confirmationr = String.fromCharCode(117,110,115,101,110,100,95,50,95,49,48,48,0);
         entryw += `${nexta.length}`;
          let module8 = 3.0;
         nexta += `${parseInt(`${module8}`)}`;
          let completeQ: Map<any, any> = new Map([[String.fromCharCode(109,95,49,57,95,106,111,117,114,110,97,108,0),false ], [String.fromCharCode(98,95,55,51,95,114,105,102,102,0),true ], [String.fromCharCode(110,111,110,98,95,54,95,57,57,0),false ]]);
         nexta += `${resendZ}`;
         completeQ.set(`${completeQ.size}`, completeQ.size & completeQ.size);
         confirmationr = `${confirmationr.length}`;
      while (nexta != String.fromCharCode(88,0) && confirmationr.length == 2) {
          let blackj = String.fromCharCode(100,105,115,99,111,110,110,101,99,116,105,111,110,95,57,95,56,48,0);
          let resendF = String.fromCharCode(100,95,50,57,95,115,117,98,109,111,100,101,108,0);
         nexta = `${entryw.length}`;
         blackj += `${resendF.length}`;
         resendF = `${(String.fromCharCode(65,0) == blackj ? blackj.length : resendF.length)}`;
         break;
      }
       let plusH = String.fromCharCode(111,95,53,55,95,108,105,98,118,112,120,0);
      if (1 <= (resendZ - 2)) {
          let mnewinterstitialV = String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,95,98,95,56,48,0);
          let singlea = false;
          let infoH = String.fromCharCode(117,95,50,56,95,115,109,118,106,112,101,103,0);
         plusH += `${entryw.length}`;
         mnewinterstitialV += `${mnewinterstitialV.length}`;
         singlea = mnewinterstitialV == String.fromCharCode(103,0);
         infoH = `${mnewinterstitialV.length / (Math.max(3, 8))}`;
      }
         nexta += `${plusH.length}`;
       let mcopy_y5 = 4.0;
       let injuryu = 0.0;
      for (let l = 0; l < 1; l++) {
          let collectionr = false;
          let tnews0: Array<any> = [645, 894, 264];
          let becomeq = String.fromCharCode(111,116,104,101,114,119,105,115,101,95,101,95,49,56,0);
          let circlex: Map<any, any> = new Map([[String.fromCharCode(105,100,99,116,95,119,95,49,56,0),489], [String.fromCharCode(98,95,51,50,95,105,115,110,111,110,122,101,114,111,0),8]]);
         injuryu *= parseFloat(`${entryw.length & plusH.length}`);
         collectionr = circlex.size >= becomeq.length;
         tnews0 = [circlex.size];
         becomeq += `${circlex.size & 1}`;
      }
          let dangerp = String.fromCharCode(114,101,116,117,114,110,95,112,95,57,55,0);
          let progress_ = String.fromCharCode(112,105,99,107,105,110,103,95,119,95,49,57,0);
         resendZ *= entryw.length;
         dangerp = "3";
         progress_ = `${progress_.length}`;
      videocommong /= Math.max(indicatori.length, 5);
      selectionK = `${selectionK.length >> (Math.min(4, selectionK.length))}`;
      break;
   }
   while (4 >= indicatori.length) {
      indicatori = `${parseInt(`${volumee}`) + 2}`;
      break;
   }
      gmailp ^= ((connectionH ? 3 : 3) * gmailp);
       let referrerL = String.fromCharCode(120,95,53,95,112,111,115,116,99,111,100,101,0);
       let singleZ = 3;
       let mergerO = String.fromCharCode(116,105,99,107,101,116,115,95,53,95,50,57,0);
          let vietnamJ = true;
          let result7: Array<any> = [518, 433];
         mergerO += `${result7.length}`;
      for (let y = 0; y < 1; y++) {
         singleZ <<= Math.min(referrerL.length, 2);
      }
          let sentryk = 5.0;
         singleZ -= 2 - parseInt(`${sentryk}`);
         mergerO = `${referrerL.length % 2}`;
      while ((3 - singleZ) > 3 || (mergerO.length - 3) > 5) {
         singleZ ^= (referrerL == String.fromCharCode(48,0) ? singleZ : referrerL.length);
         break;
      }
          let borderless0 = String.fromCharCode(113,95,49,48,48,95,116,104,105,115,0);
          let about6: Array<any> = [480, 974];
          let singleH = false;
         referrerL += `${borderless0.length}`;
         borderless0 += `${((singleH ? 4 : 5) / (Math.max(8, about6.length)))}`;
         about6 = [2 << (Math.min(1, about6.length))];
          let auto_9ik = 5;
         singleZ >>= Math.min(Math.abs((mergerO == String.fromCharCode(56,0) ? singleZ : mergerO.length)), 4);
         auto_9ik >>= Math.min(4, Math.abs(auto_9ik % (Math.max(3, 4))));
      for (let v = 0; v < 1; v++) {
         mergerO = `${singleZ << (Math.min(mergerO.length, 4))}`;
      }
         referrerL += `${singleZ}`;
      indicatori = `${parseInt(`${combineM}`) * indicatori.length}`;
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
       let windU = String.fromCharCode(110,95,52,49,95,110,99,111,110,102,0);
    let connectiond = String.fromCharCode(101,100,105,97,95,122,95,50,48,0);
    let yingp = String.fromCharCode(115,97,117,99,101,95,120,95,52,55,0);
    let libcrashsdkL = 0.0;
    let philippines3 = 2.0;
    let statistics_ = true;
    let libfbs = 3.0;
    let pathT = 0;
    let clockc = 1;
    let lightq = String.fromCharCode(112,101,114,102,111,114,109,97,110,99,101,95,52,95,49,48,48,0);
    let libswresampleE = String.fromCharCode(105,95,53,51,95,117,110,102,108,97,116,116,101,110,101,100,0);
   if (windU.length < yingp.length) {
      windU = `${parseInt(`${philippines3}`) % (Math.max(8, parseInt(`${libcrashsdkL}`)))}`;
   }
   while ((5.86 + philippines3) > 4.69 || 4.35 > (philippines3 / 5.86)) {
      philippines3 *= parseFloat(`${parseInt(`${libcrashsdkL}`)}`);
      break;
   }
   for (let o = 0; o < 2; o++) {
       let heartY = 2.0;
       let nativeR: Array<any> = [262, 596, 307];
       let sansW = 0.0;
         heartY *= parseFloat(`${nativeR.length + parseInt(`${heartY}`)}`);
         sansW += nativeR.length;
       let dcopy_rz: Array<any> = [450, 487, 531];
       let imagemanagerE: Array<any> = [14, 60, 875];
      while ((dcopy_rz.length + imagemanagerE.length) == 1) {
         imagemanagerE = [parseInt(`${sansW}`) / (Math.max(imagemanagerE.length, 10))];
         break;
      }
      while ((dcopy_rz.length | 3) >= 1) {
         dcopy_rz.push(nativeR.length * 3);
         break;
      }
      let searchbarX = dcopy_rz.length >= 9620292;
      do {
         dcopy_rz.push(3);
         if (searchbarX) {
            break;
         }
      } while ((3 == (dcopy_rz.length / (Math.max(5, 10)))) && searchbarX);
          let assist5 = String.fromCharCode(109,111,115,97,105,99,95,53,95,56,48,0);
         dcopy_rz.push(parseInt(`${heartY}`));
         assist5 += "3";
       let volumeN = String.fromCharCode(98,95,56,50,95,97,118,102,105,108,116,101,114,114,101,115,0);
      while ((volumeN.length / 1) > 1 || 2 > (1 / (Math.max(1, nativeR.length)))) {
          let whistlev = String.fromCharCode(97,110,97,103,108,121,112,104,95,100,95,53,54,0);
          let checkboxw = true;
          let sheetO = 3;
          let orangeJ = String.fromCharCode(122,95,50,53,95,106,115,105,109,100,100,99,116,0);
          let borderless5 = String.fromCharCode(114,95,54,57,95,99,111,108,111,114,115,112,97,99,101,0);
         nativeR = [2];
         whistlev += `${(borderless5 == String.fromCharCode(87,0) ? (checkboxw ? 3 : 2) : borderless5.length)}`;
         checkboxw = (71 > ((checkboxw ? whistlev.length : 71) >> (Math.min(whistlev.length, 4))));
         sheetO &= sheetO;
         orangeJ = `${orangeJ.length}`;
         break;
      }
      statistics_ = parseInt(`${sansW}`) == connectiond.length;
   }
   for (let u = 0; u < 1; u++) {
      statistics_ = windU.length >= 28 && connectiond.length >= 28;
   }
      libfbs -= parseFloat(`${yingp.length}`);
      windU = `${yingp.length}`;
       let eactU = 1;
       let clubi = 3;
      let tickedA = 7829295 >= eactU;
      do {
         eactU /= Math.max(2, 2);
         if (tickedA) {
            break;
         }
      } while (tickedA && (3 > (2 + eactU)));
       let constantsm = 1.0;
       let floaterU = 1.0;
      for (let t = 0; t < 2; t++) {
         eactU |= parseInt(`${floaterU}`) >> (Math.min(1, Math.abs(2)));
      }
         floaterU += parseFloat(`${clubi}`);
      while (3.96 > (3.59 + constantsm) && (constantsm + 3.59) > 1.44) {
         constantsm += parseFloat(`${clubi}`);
         break;
      }
          let filterT = String.fromCharCode(112,111,115,108,105,115,116,95,119,95,57,54,0);
          let singaporeE = 0;
          let libreanimatedj = 0;
         floaterU += parseFloat(`${singaporeE + 1}`);
         filterT = `${filterT.length}`;
         singaporeE >>= Math.min(4, Math.abs(3));
         libreanimatedj %= Math.max(filterT.length, 3);
      windU += `${3 | parseInt(`${philippines3}`)}`;
      libcrashsdkL -= (parseFloat(`${(statistics_ ? 3 : 4)}`));
       let servicer = String.fromCharCode(100,95,55,56,95,99,111,110,99,97,116,101,110,97,116,101,100,0);
       let textlayoutmanagerx = 5;
      for (let y = 0; y < 1; y++) {
          let selectionJ = true;
          let bridge2 = 2.0;
          let configi = 3.0;
          let diceB = 2;
          let toponA = 2.0;
         textlayoutmanagerx &= (servicer == String.fromCharCode(95,0) ? parseInt(`${bridge2}`) : servicer.length);
         selectionJ = configi == 34.19 && 23 == diceB;
         bridge2 *= (parseFloat(`${(selectionJ ? 5 : 1) + parseInt(`${toponA}`)}`));
         configi -= parseFloat(`${parseInt(`${configi}`) % 3}`);
         diceB %= Math.max(1 - parseInt(`${configi}`), 2);
         toponA *= 3 >> (Math.min(Math.abs(parseInt(`${configi}`)), 5));
      }
      while (!servicer.startsWith(`${textlayoutmanagerx}`)) {
         textlayoutmanagerx ^= 1 * textlayoutmanagerx;
         break;
      }
      libfbs -= parseFloat(`${parseInt(`${philippines3}`)}`);
      libfbs += parseFloat(`${parseInt(`${philippines3}`) >> (Math.min(4, Math.abs(clockc)))}`);
      clockc /= Math.max(windU.length - 1, 5);
       let libjsinspectorp: Map<any, any> = new Map([[String.fromCharCode(120,95,57,51,95,116,119,111,112,97,115,115,0),String.fromCharCode(118,97,114,105,97,100,105,99,95,100,95,55,0)], [String.fromCharCode(97,101,115,110,105,95,52,95,54,48,0),String.fromCharCode(114,101,102,112,116,114,95,52,95,55,54,0)]]);
       let toponz = String.fromCharCode(103,95,57,55,95,101,97,115,121,0);
       let libcxxcomponents7 = 3.0;
      if (toponz.length <= 1) {
         libjsinspectorp.set(toponz, 3 & toponz.length);
      }
      if (5.73 == (libcxxcomponents7 * toponz.length)) {
         libcxxcomponents7 -= parseInt(`${libcxxcomponents7}`) << (Math.min(Math.abs(libjsinspectorp.size), 3));
      }
         libcxxcomponents7 -= 2;
      while (5 >= (libjsinspectorp.size * 1) && 4 >= (1 & libjsinspectorp.size)) {
         libcxxcomponents7 *= 3;
         break;
      }
          let componentW = true;
         libjsinspectorp = new Map([[`${libjsinspectorp.size}`, toponz.length]]);
         componentW = !componentW && !componentW;
       let backgroundl = String.fromCharCode(104,95,53,55,95,112,117,115,104,101,100,0);
          let huaweis = 4.0;
          let greenP: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,114,111,114,105,122,97,116,105,111,110,95,103,95,54,55,0),243], [String.fromCharCode(100,95,57,48,95,115,116,114,117,99,116,117,114,97,108,0),639], [String.fromCharCode(111,95,49,50,95,98,97,110,100,105,110,103,0),88]]);
         libcxxcomponents7 /= Math.max(parseInt(`${huaweis}`) ^ 3, 2);
         huaweis -= parseFloat(`${3}`);
         greenP.set(`${greenP.size}`, 1);
       let styless = String.fromCharCode(117,95,56,49,95,112,114,111,98,101,114,0);
       let tooltips0 = String.fromCharCode(98,95,53,52,95,100,114,97,119,103,114,105,100,0);
      while (toponz.length >= 2) {
          let final_tF = 2.0;
          let helperY = String.fromCharCode(105,109,99,100,97,116,97,95,100,95,55,57,0);
          let goalb = 1.0;
          let gmailK = 5.0;
         libjsinspectorp.set(`${libcxxcomponents7}`, parseInt(`${final_tF}`));
         helperY = `${2 % (Math.max(7, parseInt(`${goalb}`)))}`;
         goalb *= parseFloat(`${helperY.length}`);
         gmailK += parseInt(`${goalb}`) | 3;
         break;
      }
      philippines3 *= parseFloat(`${yingp.length + parseInt(`${libfbs}`)}`);
   if ((4.42 / (Math.max(10, philippines3))) == 4.52) {
      philippines3 *= parseFloat(`${connectiond.length & 1}`);
   }
       let assist1 = 2.0;
       let basketball5 = String.fromCharCode(104,95,52,49,95,101,110,99,111,100,101,109,98,0);
      for (let o = 0; o < 3; o++) {
         basketball5 += `${1 + parseInt(`${assist1}`)}`;
      }
         basketball5 += `${basketball5.length ^ parseInt(`${assist1}`)}`;
      if (basketball5.endsWith(`${assist1}`)) {
         basketball5 += `${basketball5.length / (Math.max(2, 9))}`;
      }
         assist1 /= Math.max(parseFloat(`${2}`), 2);
      for (let y = 0; y < 1; y++) {
         basketball5 += `${parseInt(`${assist1}`) ^ 1}`;
      }
         assist1 += parseFloat(`${parseInt(`${assist1}`)}`);
      connectiond += `${((statistics_ ? 3 : 4) >> (Math.min(Math.abs(parseInt(`${philippines3}`)), 1)))}`;
   for (let s = 0; s < 1; s++) {
      libfbs -= parseFloat(`${connectiond.length}`);
   }
       let manifestT = String.fromCharCode(104,105,103,104,112,97,115,115,95,55,95,57,0);
       let detailsW: Array<any> = [476, 289, 785];
      while (1 > (manifestT.length / (Math.max(10, detailsW.length))) || (manifestT.length / 1) > 5) {
         detailsW = [detailsW.length / (Math.max(10, manifestT.length))];
         break;
      }
          let profilec = String.fromCharCode(110,95,56,55,95,97,118,100,101,118,105,99,101,114,101,115,0);
          let filterz: Map<any, any> = new Map([[String.fromCharCode(111,95,49,51,95,100,105,115,97,108,108,111,119,0),521], [String.fromCharCode(115,95,54,50,95,114,101,99,116,0),937]]);
         detailsW = [profilec.length];
         profilec += `${filterz.size}`;
         filterz.set(`${filterz.size}`, filterz.size >> (Math.min(1, Math.abs(filterz.size))));
      if ((1 * detailsW.length) <= 3 && 1 <= (detailsW.length * 1)) {
         manifestT += `${(String.fromCharCode(113,0) == manifestT ? manifestT.length : detailsW.length)}`;
      }
       let configk: Map<any, any> = new Map([[String.fromCharCode(113,95,49,54,95,103,116,101,115,116,0),String.fromCharCode(105,97,100,115,116,95,49,95,54,50,0)], [String.fromCharCode(122,95,55,55,95,115,105,116,101,109,97,112,0),String.fromCharCode(119,95,54,55,95,114,111,117,110,100,0)]]);
      let interstitialg = 6057840 >= detailsW.length;
      do {
          let fastforwardV: Array<any> = [715, 666];
          let tooltips0A: Array<any> = [String.fromCharCode(109,111,116,105,111,110,115,101,97,114,99,104,95,98,95,56,50,0), String.fromCharCode(115,117,98,112,97,99,107,101,116,115,95,52,95,49,55,0)];
          let searchU = false;
          let philippinesL: Map<any, any> = new Map([[String.fromCharCode(112,101,114,105,111,100,105,99,97,108,108,121,95,56,95,55,49,0),952], [String.fromCharCode(108,95,53,53,95,118,102,114,101,101,0),478], [String.fromCharCode(115,117,99,99,101,115,115,95,97,95,56,50,0),998]]);
         detailsW = [manifestT.length * 2];
         fastforwardV.push(3 * tooltips0A.length);
         tooltips0A.push(((searchU ? 2 : 1) % (Math.max(fastforwardV.length, 4))));
         searchU = !searchU;
         philippinesL = new Map([[`${philippinesL.size}`, 3]]);
         if (interstitialg) {
            break;
         }
      } while (interstitialg && (configk.get(`${detailsW.length}`) != null));
         detailsW.push(detailsW.length);
      yingp = `${windU.length - parseInt(`${libcrashsdkL}`)}`;

          dispatch(incrementSportWatchTime());
        }, 1000);

        return () => clearInterval(unsub);
      }
    }, [route.name])

    const pauseSportVideo =
      route.name === "体育详情" &&
      screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS &&
      !yys_RelatedTooltips.isVip(userState.user);

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
            <VideoWithControlsMin
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
                {seekDirection === "valuesLangConstants" ? (
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
                source={require("@static/images/sinaHover.gif")}
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
    color: "miniUimanagerZhengpian",
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
