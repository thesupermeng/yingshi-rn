

class RoomStats {
    static libreanimatedHelperLogoInterne = (contents: [number], key: number, hasEmoji: boolean) => {
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
import VideoControlsOverlay from "./yys_gradle";
import WebView from "react-native-webview";


import FastImage from "../../components/common/yys_vertical_collection";

import FastForwardProgressIcon from "@static/images/liveRecommendation.svg";
import RewindProgressIcon from "@static/images/directTheme.svg";

import { incrementSportWatchTime, setFullscreenState, showAdultModeVip } from "@redux/actions/yys_runtimescheduler";

import {
  yys_StyleItem,
  yys_Libreact,
  yys_Bing,
} from "@type/yys_libzeus";
import VideoWithControls from "./yys_libcrashsdk_switch";
import { useDispatch } from "react-redux";
import { useAppSelector, useSelector } from "@hooks/yys_frame";
import { screenModel } from "@type/yys_service_setting";
import { ADULT_MODE_PREVIEW_DURATION, AD_VIDEO_SECONDS, NON_VIP_STREAM_TIME_SECONDS } from "@utility/yys_ajax_switch";
import { AdVideoImage } from "./yys_types_uimanager";
import { yys_BorderlessLibruntimeexecutor } from "@redux/reducers/yys_full";
import { yys_Downloader } from "@api";
import { useQuery } from "@tanstack/react-query";
import yys_event_common from "../../../Umeng/yys_event_common";
import InAppBrowser from "react-native-inappbrowser-reborn";
import ImmersiveMode from "react-native-immersive-mode"
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";

LogBox.ignoreLogs([`Trying to load empty source.`]);


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
  showAds?: boolean,
  onPressCountdown?: () => void,
  vodID?: number,
  sourceID?: number,
  onDownloadVod?: (nid: number) => void,
  setShowAdOverlay: (show: boolean) => void,
  onAdsMount?: () => void,
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
       let nterstitial6 = String.fromCharCode(98,97,110,100,0);
    let team7: Array<any> = [208, 520, 102];
    let delegate_rtp = String.fromCharCode(119,109,97,100,97,116,97,0);
    let aboutE = false;
    let gift_ = 5;
    let libswscales = 3;
    let componentregistryv = String.fromCharCode(112,115,102,98,0);
    let buildC = String.fromCharCode(104,108,115,112,108,97,121,108,105,115,116,0);
    let mode4: Array<any> = [549, 543];
    let uimanagerI: Map<any, any> = new Map([[String.fromCharCode(119,105,108,108,0),true ], [String.fromCharCode(97,114,112,101,100,0),true ], [String.fromCharCode(117,115,101,114,115,0),true ]]);
    let imagemanagerf = String.fromCharCode(100,105,115,116,114,105,99,116,0);
    let neonQ = String.fromCharCode(116,97,103,103,101,114,0);
    let countdown6 = 1;
      mode4.push(3 / (Math.max(9, team7.length)));
      componentregistryv += `${team7.length >> (Math.min(Math.abs(2), 2))}`;
   let refreshV = 8776673 >= team7.length;
   do {
       let episodez = 4.0;
       let libyogaM: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,105,110,103,0),169], [String.fromCharCode(104,105,115,116,0),686], [String.fromCharCode(115,101,97,114,99,104,97,98,108,101,0),204]]);
      if (Array.from(libyogaM.keys()).includes(`${episodez}`)) {
          let crownW = String.fromCharCode(111,103,103,112,97,99,107,0);
         episodez /= Math.max(3, parseInt(`${episodez}`) / (Math.max(8, crownW.length)));
      }
      let benefit0 = libyogaM.size <= 7195240;
      do {
         libyogaM.set(`${episodez}`, 1 & libyogaM.size);
         if (benefit0) {
            break;
         }
      } while ((libyogaM.size < episodez) && benefit0);
         libyogaM = new Map([[`${libyogaM.size}`, 3]]);
      while ((libyogaM.size + episodez) == 4.55 || 4.55 == (episodez + libyogaM.size)) {
         libyogaM.set(`${episodez}`, parseInt(`${episodez}`));
         break;
      }
      for (let i = 0; i < 3; i++) {
          let mbridgeJ: Map<any, any> = new Map([[String.fromCharCode(105,100,99,105,110,0),true ], [String.fromCharCode(115,101,108,101,99,116,105,110,103,0),false ]]);
         libyogaM.set(`${episodez}`, libyogaM.size);
         mbridgeJ.set(`${mbridgeJ.size}`, mbridgeJ.size - mbridgeJ.size);
      }
      let libswresampleY = 5769715 >= libyogaM.size;
      do {
         libyogaM = new Map([[`${libyogaM.size}`, 2 >> (Math.min(1, Math.abs(parseInt(`${episodez}`))))]]);
         if (libswresampleY) {
            break;
         }
      } while (libswresampleY && (5 >= (4 ^ libyogaM.size) || 1 >= (4 / (Math.max(1, libyogaM.size)))));
      team7 = [gift_ >> (Math.min(Math.abs(2), 1))];
      if (refreshV) {
         break;
      }
   } while ((team7.length < libswscales) && refreshV);
   for (let p = 0; p < 1; p++) {
      componentregistryv = `${gift_ * 2}`;
   }
   while (componentregistryv.length <= 4) {
       let nalyticsN = String.fromCharCode(100,121,110,98,117,102,0);
      while (nalyticsN.endsWith(`${nalyticsN.length}`)) {
         nalyticsN += "1";
         break;
      }
      if (!nalyticsN.startsWith(nalyticsN)) {
         nalyticsN = `${3 << (Math.min(4, nalyticsN.length))}`;
      }
         nalyticsN = `${nalyticsN.length + nalyticsN.length}`;
      componentregistryv += `${buildC.length / (Math.max(1, 10))}`;
      break;
   }
       let pangle6 = false;
       let renewW = 2.0;
      for (let i = 0; i < 3; i++) {
         renewW -= (parseFloat(`${(pangle6 ? 4 : 1) + parseInt(`${renewW}`)}`));
      }
          let anner7 = 5;
         renewW *= parseFloat(`${anner7}`);
          let footballv = 4.0;
          let cancelv = 0;
          let anner2 = 3.0;
         pangle6 = !pangle6;
         footballv *= parseFloat(`${3 / (Math.max(parseInt(`${anner2}`), 9))}`);
         cancelv -= parseInt(`${footballv}`) % 2;
         anner2 /= Math.max(1, parseFloat(`${parseInt(`${anner2}`) & cancelv}`));
         pangle6 = renewW <= 92.3 && pangle6;
      let leagueE = pangle6 ? !pangle6 : pangle6;
      do {
         pangle6 = !pangle6;
         if (leagueE) {
            break;
         }
      } while (leagueE && (!pangle6));
       let middleC = true;
      componentregistryv = `${componentregistryv.length}`;
      buildC += `${buildC.length * nterstitial6.length}`;
   if (1 > (1 ^ componentregistryv.length) || (gift_ ^ 1) > 2) {
       let photoX = String.fromCharCode(101,120,116,101,114,105,111,114,0);
       let cornerG: Array<any> = [String.fromCharCode(97,117,116,111,114,101,102,114,101,115,104,0), String.fromCharCode(106,115,105,109,100,99,112,117,0)];
       let station9: Array<any> = [308, 13, 740];
          let langp: Array<any> = [651, 628, 145];
          let champion5 = String.fromCharCode(97,118,115,116,114,105,110,103,0);
          let whiteu: Array<any> = [977, 482, 543];
         station9.push(photoX.length * whiteu.length);
         langp.push((String.fromCharCode(52,0) == champion5 ? champion5.length : langp.length));
         whiteu.push(2 ^ langp.length);
         station9.push(1 ^ photoX.length);
      for (let n = 0; n < 2; n++) {
         station9 = [cornerG.length / (Math.max(photoX.length, 9))];
      }
      for (let n = 0; n < 2; n++) {
         cornerG = [cornerG.length | station9.length];
      }
      while (1 <= (cornerG.length * photoX.length)) {
         cornerG.push(2 >> (Math.min(5, cornerG.length)));
         break;
      }
      let mintegralM = 8990916 <= station9.length;
      do {
         station9 = [1 >> (Math.min(1, station9.length))];
         if (mintegralM) {
            break;
         }
      } while (mintegralM && ((station9.length % (Math.max(cornerG.length, 5))) <= 4 && (station9.length % (Math.max(cornerG.length, 5))) <= 4));
         cornerG = [(String.fromCharCode(67,0) == photoX ? cornerG.length : photoX.length)];
      for (let l = 0; l < 1; l++) {
         photoX = `${station9.length}`;
      }
      while (photoX.endsWith(`${cornerG.length}`)) {
         cornerG.push(station9.length);
         break;
      }
      gift_ <<= Math.min(Math.abs(2), 1);
   }
       let minivodX: Map<any, any> = new Map([[String.fromCharCode(112,117,116,98,121,116,101,0),104], [String.fromCharCode(117,95,55,55,95,117,110,105,111,110,101,100,0),187]]);
          let projectD = 0.0;
          let areaI = true;
         minivodX.set(`${areaI}`, (minivodX.size + (areaI ? 5 : 2)));
         projectD *= parseFloat(`${parseInt(`${projectD}`)}`);
         minivodX = new Map([[`${minivodX.size}`, 2 & minivodX.size]]);
      let optionsw = minivodX.size >= 8088966;
      do {
         minivodX.set(`${minivodX.size}`, minivodX.size);
         if (optionsw) {
            break;
         }
      } while (optionsw && (2 < (minivodX.size * minivodX.size) && (2 * minivodX.size) < 3));
      gift_ *= 1 - minivodX.size;
      nterstitial6 = "1";
   if (!componentregistryv.includes(nterstitial6)) {
      componentregistryv += `${buildC.length & delegate_rtp.length}`;
   }
      team7.push(nterstitial6.length);
   if (2 == buildC.length || aboutE) {
       let windg = String.fromCharCode(102,98,100,101,118,0);
      if (windg == String.fromCharCode(111,0)) {
         windg += `${windg.length & 3}`;
      }
       let s_positionb = String.fromCharCode(98,121,116,101,105,110,0);
       let nativemoduleE = String.fromCharCode(118,111,116,101,0);
      if (nativemoduleE.length == s_positionb.length) {
         nativemoduleE = `${s_positionb.length / 2}`;
      }
      buildC += "2";
   }
   for (let x = 0; x < 1; x++) {
       let libjsinspectorQ = 3.0;
       let mbbidu: Map<any, any> = new Map([[String.fromCharCode(115,117,98,108,97,121,101,114,0),711], [String.fromCharCode(102,111,114,99,105,110,103,0),216], [String.fromCharCode(102,97,99,116,111,114,115,0),263]]);
       let flyerz = 0;
       let xadsdk1 = String.fromCharCode(108,105,98,116,103,118,111,105,112,0);
      for (let f = 0; f < 1; f++) {
         xadsdk1 += "3";
      }
      if (!xadsdk1.includes(`${flyerz}`)) {
         xadsdk1 += `${mbbidu.size & flyerz}`;
      }
         flyerz += 3;
       let libhermesF = 4.0;
       let lineC = 3.0;
          let grayN = false;
         xadsdk1 += `${parseInt(`${libjsinspectorQ}`) + 1}`;
         grayN = !grayN;
         libhermesF /= Math.max(2, parseInt(`${libhermesF}`) + parseInt(`${libjsinspectorQ}`));
       let downloader3 = String.fromCharCode(98,111,111,116,0);
         xadsdk1 = `${2 | mbbidu.size}`;
      if ((2.13 * libjsinspectorQ) > 1.67) {
         libjsinspectorQ /= Math.max(1, parseFloat(`${2 ^ parseInt(`${libhermesF}`)}`));
      }
       let assistg = true;
      let tumbnailc = String.fromCharCode(113,109,107,108,57,102,0) == xadsdk1;
      do {
          let resultQ: Map<any, any> = new Map([[String.fromCharCode(112,110,103,100,115,112,0),44], [String.fromCharCode(111,112,116,105,111,110,0),741]]);
          let splashs: Array<any> = [743, 978, 660];
         xadsdk1 = `${3 * splashs.length}`;
         resultQ.set(`${resultQ.size}`, 3 * resultQ.size);
         splashs.push(resultQ.size);
         if (tumbnailc) {
            break;
         }
      } while (tumbnailc && (2 < (xadsdk1.length - flyerz) || (2 - xadsdk1.length) < 4));
         flyerz <<= Math.min(Math.abs(parseInt(`${libhermesF}`)), 5);
      team7.push(flyerz);
   }
   if (!aboutE) {
      gift_ %= Math.max(componentregistryv.length & nterstitial6.length, 4);
   }
      gift_ += 3 / (Math.max(1, gift_));
      componentregistryv = `${nterstitial6.length ^ libswscales}`;
      mode4.push(delegate_rtp.length - componentregistryv.length);
      delegate_rtp += `${gift_ / 1}`;
       let templateprocessorP = 5;
       let libjsinspectorU = String.fromCharCode(115,108,105,112,112,97,103,101,0);
       let libruntimeexecutorJ = String.fromCharCode(112,97,99,107,101,116,104,101,97,100,101,114,0);
         libjsinspectorU += `${libruntimeexecutorJ.length % 1}`;
      while (4 == libruntimeexecutorJ.length) {
         libjsinspectorU = `${libjsinspectorU.length}`;
         break;
      }
      if ((templateprocessorP | libjsinspectorU.length) >= 4) {
          let xvod0: Map<any, any> = new Map([[String.fromCharCode(115,99,114,101,101,110,115,0),966], [String.fromCharCode(105,110,115,101,99,0),178]]);
          let libavcodeck: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,116,111,0),687], [String.fromCharCode(105,110,99,108,117,115,105,111,110,0),481]]);
          let sheetG = true;
          let mergerB: Map<any, any> = new Map([[String.fromCharCode(116,117,110,110,101,108,105,110,103,0),945], [String.fromCharCode(98,115,105,122,101,0),298]]);
          let telegram9 = 2.0;
         templateprocessorP -= (libruntimeexecutorJ.length + (sheetG ? 1 : 2));
         xvod0 = new Map([[`${xvod0.size}`, mergerB.size]]);
         libavcodeck = new Map([[`${xvod0.size}`, mergerB.size ^ 2]]);
         sheetG = 11 >= libavcodeck.size;
         telegram9 += parseInt(`${telegram9}`);
      }
         libruntimeexecutorJ = `${(libjsinspectorU == String.fromCharCode(75,0) ? templateprocessorP : libjsinspectorU.length)}`;
      if (libruntimeexecutorJ == String.fromCharCode(87,0)) {
         libjsinspectorU = "2";
      }
         libjsinspectorU = `${libruntimeexecutorJ.length}`;
      let frame_z_m = String.fromCharCode(53,109,53,95,0) == libjsinspectorU;
      do {
         libjsinspectorU += "1";
         if (frame_z_m) {
            break;
         }
      } while (frame_z_m && (libruntimeexecutorJ.includes(`${libjsinspectorU.length}`)));
         templateprocessorP -= libjsinspectorU.length;
         templateprocessorP >>= Math.min(5, libjsinspectorU.length);
      mode4 = [templateprocessorP];
      delegate_rtp = `${delegate_rtp.length}`;
   while ((team7.length - uimanagerI.size) == 3) {
      uimanagerI = new Map([[`${mode4.length}`, mode4.length]]);
      break;
   }
   if (buildC.length > 1) {
       let benefitX = String.fromCharCode(114,111,116,97,116,105,110,103,0);
       let rounds = 1.0;
       let areaX = 4;
       let frame_tT: Map<any, any> = new Map([[String.fromCharCode(105,111,115,0),203], [String.fromCharCode(115,101,108,101,99,116,111,114,0),272], [String.fromCharCode(115,101,114,105,97,108,105,122,105,110,103,0),730]]);
       let floatinga = 3;
         frame_tT = new Map([[`${rounds}`, parseInt(`${rounds}`)]]);
      for (let r = 0; r < 3; r++) {
         frame_tT.set(`${areaX}`, areaX >> (Math.min(Math.abs(2), 1)));
      }
       let assist9 = true;
       let gmailW = true;
         gmailW = (parseInt(`${rounds}`) - benefitX.length) > 56;
         rounds += 1;
      while (4 > (3 / (Math.max(3, areaX))) && 3 > (areaX / (Math.max(frame_tT.size, 5)))) {
         frame_tT.set(`${assist9}`, ((assist9 ? 2 : 3) + parseInt(`${rounds}`)));
         break;
      }
      for (let r = 0; r < 1; r++) {
         assist9 = floatinga == areaX;
      }
      while (benefitX.length >= 5) {
         gmailW = 77.1 > rounds && assist9;
         break;
      }
         gmailW = frame_tT.size <= 93;
       let e_managerc = String.fromCharCode(104,113,100,115,112,0);
          let b_lockw = false;
          let countdownr = 3;
          let hookZ = String.fromCharCode(105,100,101,110,116,105,102,101,114,0);
         frame_tT = new Map([[`${rounds}`, areaX << (Math.min(1, Math.abs(3)))]]);
         b_lockw = countdownr < 49;
         countdownr += (hookZ == String.fromCharCode(48,0) ? hookZ.length : countdownr);
      for (let n = 0; n < 3; n++) {
          let moonR = String.fromCharCode(97,102,102,105,110,101,0);
          let utilsU = String.fromCharCode(116,111,109,99,114,121,112,116,0);
          let application4 = 4;
         e_managerc = `${1 | frame_tT.size}`;
         moonR += `${application4 % 1}`;
         utilsU = "2";
         application4 -= utilsU.length >> (Math.min(5, Math.abs(application4)));
      }
       let unselectedm: Map<any, any> = new Map([[String.fromCharCode(98,117,115,0),true ], [String.fromCharCode(119,95,57,49,0),true ], [String.fromCharCode(116,111,108,101,114,97,110,99,101,0),true ]]);
       let libtanY: Map<any, any> = new Map([[String.fromCharCode(105,109,108,116,0),true ], [String.fromCharCode(112,101,97,107,0),false ], [String.fromCharCode(115,99,97,110,115,116,97,116,117,115,0),true ]]);
      while (1 > (benefitX.length << (Math.min(Math.abs(5), 4)))) {
          let modityO = String.fromCharCode(114,111,119,107,101,121,0);
          let teamZ: Array<any> = [728, 347, 424];
          let draga = String.fromCharCode(118,112,100,97,116,97,0);
         benefitX = `${((assist9 ? 2 : 5) - e_managerc.length)}`;
         modityO = `${teamZ.length}`;
         teamZ.push(1);
         draga += `${draga.length | modityO.length}`;
         break;
      }
      for (let y = 0; y < 2; y++) {
         unselectedm.set(benefitX, parseInt(`${rounds}`) >> (Math.min(Math.abs(1), 5)));
      }
      mode4.push(uimanagerI.size);
   }
       let aboutf = false;
         aboutf = !aboutf;
      for (let s = 0; s < 2; s++) {
         aboutf = (aboutf ? !aboutf : !aboutf);
      }
       let goalx = String.fromCharCode(99,111,109,112,111,115,101,0);
       let calendarQ = String.fromCharCode(116,121,112,101,0);
      buildC += `${team7.length >> (Math.min(Math.abs(3), 2))}`;
      libswscales += 3;
       let sort0 = String.fromCharCode(116,105,109,101,108,105,110,101,115,0);
       let backgroundU = false;
       let runtimes = 5.0;
      for (let m = 0; m < 2; m++) {
         backgroundU = sort0.length >= 24;
      }
       let control2 = 4.0;
       let showI = 0.0;
         backgroundU = 18.10 <= (control2 + runtimes);
      for (let g = 0; g < 2; g++) {
         control2 += parseInt(`${runtimes}`) | 2;
      }
      for (let u = 0; u < 3; u++) {
         runtimes *= 3 >> (Math.min(Math.abs(parseInt(`${runtimes}`)), 3));
      }
         control2 /= Math.max(parseInt(`${showI}`) >> (Math.min(4, Math.abs(2))), 2);
      let neonR = 6600944.0 <= control2;
      do {
          let arrowU = 1;
          let upgradeV = String.fromCharCode(118,97,97,99,97,108,99,117,108,97,116,105,111,110,0);
          let controlg = 1.0;
          let fastforwardH = String.fromCharCode(108,115,112,102,108,112,99,0);
         control2 += arrowU;
         arrowU |= parseInt(`${controlg}`) - 1;
         upgradeV = "3";
         controlg /= Math.max(5, parseFloat(`${upgradeV.length}`));
         fastforwardH += `${2 ^ fastforwardH.length}`;
         if (neonR) {
            break;
         }
      } while ((!backgroundU || 2.91 == (control2 / (Math.max(5.37, 1)))) && neonR);
      if (runtimes > control2) {
         runtimes *= 2;
      }
          let videoO = false;
         backgroundU = sort0.length <= 12;
         videoO = !videoO;
      delegate_rtp = `${componentregistryv.length}`;
   while ((team7.length << (Math.min(Math.abs(3), 4))) < 3 || 2 < (3 << (Math.min(2, team7.length)))) {
      delegate_rtp += "1";
      break;
   }
   while (componentregistryv.length < team7.length) {
      team7.push(uimanagerI.size * buildC.length);
      break;
   }
   while (uimanagerI.size <= 4) {
      buildC += `${delegate_rtp.length}`;
      break;
   }
   let fast8 = String.fromCharCode(95,50,113,49,0) == neonQ;
   do {
      neonQ = `${(String.fromCharCode(50,0) == buildC ? buildC.length : mode4.length)}`;
      if (fast8) {
         break;
      }
   } while ((buildC.length == neonQ.length) && fast8);
   for (let k = 0; k < 2; k++) {
      nterstitial6 += "3";
   }
   while (componentregistryv.length <= delegate_rtp.length) {
      componentregistryv = `${neonQ.length >> (Math.min(Math.abs(3), 3))}`;
      break;
   }
   if (4 >= (team7.length << (Math.min(Math.abs(2), 1))) || aboutE) {
      aboutE = ((uimanagerI.size ^ (!aboutE ? 64 : uimanagerI.size)) < 64);
   }
   while (5 >= buildC.length && aboutE) {
      aboutE = 30 == uimanagerI.size || mode4.length == 30;
      break;
   }
       let expiredt: Map<any, any> = new Map([[String.fromCharCode(97,110,110,101,120,98,109,112,0),858], [String.fromCharCode(116,105,109,101,111,117,116,0),451], [String.fromCharCode(99,97,114,114,121,0),569]]);
      let fillQ = expiredt.size >= 8706744;
      do {
         expiredt.set(`${expiredt.size}`, expiredt.size);
         if (fillQ) {
            break;
         }
      } while (fillQ && (expiredt.size <= 1));
          let leakcheckerp = String.fromCharCode(117,110,105,120,0);
         expiredt.set(`${leakcheckerp}`, expiredt.size);
      if ((expiredt.size + 4) <= 4) {
         expiredt = new Map([[`${expiredt.size}`, 2 / (Math.max(5, expiredt.size))]]);
      }
      aboutE = componentregistryv.length == team7.length;
      buildC += `${3 % (Math.max(libswscales, 8))}`;
   while ((3 << (Math.min(5, neonQ.length))) >= 4 || (countdown6 << (Math.min(Math.abs(3), 5))) >= 1) {
      countdown6 /= Math.max(3 - team7.length, 2);
      break;
   }
       let stringsn = 3.0;
      if ((stringsn / 2.51) < 1.34 && (2.51 / (Math.max(1, stringsn))) < 5.40) {
         stringsn *= 3 | parseInt(`${stringsn}`);
      }
      for (let o = 0; o < 2; o++) {
         stringsn -= 2;
      }
      for (let g = 0; g < 1; g++) {
         stringsn *= parseInt(`${stringsn}`);
      }
      mode4.push(imagemanagerf.length);
      libswscales ^= libswscales;
      gift_ -= 1 + buildC.length;
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
       let basketball4 = String.fromCharCode(114,101,110,100,101,114,101,114,0);
    let colorso = true;
    let shirt5 = String.fromCharCode(114,101,108,99,116,120,0);
    let expandu = 2.0;
    let mbnativeY = String.fromCharCode(108,97,117,110,99,104,101,115,0);
    let libflipperW = String.fromCharCode(102,108,111,111,114,0);
    let frame_7j = 2.0;
    let bellY = 3.0;
    let short_tO = String.fromCharCode(115,105,109,117,108,99,97,115,116,0);
    let result5 = String.fromCharCode(101,120,112,105,114,101,0);
    let applicationk = String.fromCharCode(117,115,100,0);
    let minivodr: Map<any, any> = new Map([[String.fromCharCode(119,111,114,100,108,105,115,116,0),false ], [String.fromCharCode(112,114,101,99,101,110,99,101,0),false ]]);
       let moditys = true;
       let sharedC = String.fromCharCode(115,97,109,112,108,101,114,0);
         moditys = (((moditys ? sharedC.length : 95) & sharedC.length) >= 95);
         sharedC += `${(1 ^ (moditys ? 3 : 2))}`;
      for (let s = 0; s < 2; s++) {
          let pausez = 5;
          let renewj = 3.0;
          let sellE = false;
          let orientation7 = String.fromCharCode(116,116,97,101,110,99,0);
         moditys = (((!moditys ? 76 : orientation7.length) & orientation7.length) >= 76);
         pausez %= Math.max((parseInt(`${renewj}`) + (sellE ? 1 : 5)), 1);
         renewj -= ((sellE ? 4 : 3) / (Math.max(parseInt(`${renewj}`), 1)));
      }
      for (let w = 0; w < 3; w++) {
         sharedC = `${sharedC.length}`;
      }
         sharedC = `${((moditys ? 2 : 1) - sharedC.length)}`;
      if (!moditys && 2 == sharedC.length) {
         sharedC += `${(String.fromCharCode(56,0) == sharedC ? (moditys ? 1 : 2) : sharedC.length)}`;
      }
      expandu -= 3;
       let photoK = String.fromCharCode(111,112,116,105,111,110,97,108,0);
       let reactc = String.fromCharCode(114,101,115,111,117,114,99,101,115,0);
         reactc += "1";
         reactc = `${photoK.length}`;
         photoK += `${photoK.length - 2}`;
          let huaweii = String.fromCharCode(102,102,109,97,108,0);
         photoK += "1";
         huaweii += `${huaweii.length}`;
       let type_tv = 1.0;
       let castingj = 2.0;
       let editS = 5.0;
      mbnativeY += `${mbnativeY.length}`;
   for (let j = 0; j < 2; j++) {
       let descr: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,115,115,0),true ], [String.fromCharCode(116,114,97,110,115,99,111,100,101,0),true ]]);
       let collection_ = 4;
          let latn8: Array<any> = [291, 634];
         descr = new Map([[`${descr.size}`, descr.size]]);
         latn8.push(latn8.length / 3);
      if (!Array.from(descr.keys()).includes(`${collection_}`)) {
         descr.set(`${collection_}`, descr.size);
      }
      if (descr.get(`${collection_}`) != null) {
          let libavdeviceW = String.fromCharCode(98,111,117,110,99,105,110,101,115,115,0);
         collection_ -= descr.size;
         libavdeviceW = "3";
      }
      if (!Array.from(descr.keys()).includes(`${collection_}`)) {
         descr.set(`${collection_}`, 3 >> (Math.min(3, Math.abs(descr.size))));
      }
         descr = new Map([[`${descr.size}`, 1 * collection_]]);
         descr = new Map([[`${descr.size}`, collection_ << (Math.min(Math.abs(3), 3))]]);
      short_tO = `${shirt5.length}`;
   }
      shirt5 += `${((colorso ? 1 : 2) + 3)}`;
       let combineI: Map<any, any> = new Map([[String.fromCharCode(116,97,117,0),String.fromCharCode(99,104,101,99,107,97,115,109,0)], [String.fromCharCode(103,114,97,112,104,105,99,115,0),String.fromCharCode(97,117,100,0)], [String.fromCharCode(101,110,113,117,101,117,101,100,0),String.fromCharCode(97,117,116,111,115,99,114,111,108,108,105,110,103,0)]]);
      while (!Array.from(combineI.values()).includes(combineI.size)) {
         combineI.set(`${combineI.size}`, 3);
         break;
      }
          let configM = String.fromCharCode(97,118,99,99,0);
          let favoriteR = String.fromCharCode(112,114,111,103,114,101,115,105,118,101,0);
         combineI.set(`${configM}`, (String.fromCharCode(77,0) == configM ? configM.length : combineI.size));
         favoriteR += `${favoriteR.length % (Math.max(2, 2))}`;
      for (let g = 0; g < 1; g++) {
         combineI = new Map([[`${combineI.size}`, 3 ^ combineI.size]]);
      }
      shirt5 = `${shirt5.length - parseInt(`${bellY}`)}`;
   for (let w = 0; w < 2; w++) {
      bellY -= parseFloat(`${shirt5.length ^ 3}`);
   }
       let other1: Map<any, any> = new Map([[String.fromCharCode(100,100,114,97,110,103,101,0),286], [String.fromCharCode(116,104,101,97,116,101,114,0),534]]);
       let containerx: Array<any> = [847, 670];
       let classesq = String.fromCharCode(116,111,110,103,117,101,0);
      if ((1 | other1.size) == 1) {
          let bannerA: Map<any, any> = new Map([[String.fromCharCode(119,101,108,115,0),true ], [String.fromCharCode(112,101,114,105,111,100,105,99,97,108,108,121,0),false ]]);
          let libavutild = 0;
          let vietnamT: Map<any, any> = new Map([[String.fromCharCode(101,103,97,99,121,0),843], [String.fromCharCode(117,110,102,114,101,101,122,101,0),152]]);
          let videojsB = 3.0;
         other1 = new Map([[`${bannerA.size}`, (String.fromCharCode(104,0) == classesq ? classesq.length : bannerA.size)]]);
         libavutild += 3;
         vietnamT = new Map([[`${vietnamT.size}`, vietnamT.size]]);
         videojsB /= Math.max(parseFloat(`${parseInt(`${videojsB}`)}`), 5);
      }
      for (let c = 0; c < 3; c++) {
         other1.set(`${classesq}`, classesq.length);
      }
         other1.set(classesq, 2 & classesq.length);
       let libswscalep = String.fromCharCode(115,113,117,97,114,101,115,0);
      while ((1 | other1.size) >= 2 && (libswscalep.length | other1.size) >= 1) {
         other1.set(classesq, (String.fromCharCode(83,0) == classesq ? libswscalep.length : classesq.length));
         break;
      }
          let condensed_ = String.fromCharCode(97,118,117,105,0);
         classesq += `${other1.size - classesq.length}`;
         condensed_ += `${condensed_.length + condensed_.length}`;
         containerx = [3];
      if ((classesq.length - 5) >= 4) {
         containerx = [other1.size];
      }
      if (classesq.length == 2) {
         libswscalep = `${libswscalep.length}`;
      }
      mbnativeY = `${(libflipperW == String.fromCharCode(53,0) ? result5.length : libflipperW.length)}`;
      frame_7j /= Math.max(1, 1);
      shirt5 += `${parseInt(`${bellY}`)}`;
   if (!short_tO.includes(result5)) {
       let recommendationt = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,0);
       let classess: Map<any, any> = new Map([[String.fromCharCode(108,117,109,98,101,114,106,97,99,107,0),259], [String.fromCharCode(105,110,112,99,98,0),61]]);
         recommendationt = `${2 >> (Math.min(5, Math.abs(classess.size)))}`;
      let networkv = classess.size >= 5306276;
      do {
         classess = new Map([[`${classess.size}`, recommendationt.length ^ classess.size]]);
         if (networkv) {
            break;
         }
      } while ((3 >= (classess.size / (Math.max(1, 4))) || 1 >= (classess.size / (Math.max(recommendationt.length, 10)))) && networkv);
      let register_jE = recommendationt == String.fromCharCode(104,109,119,51,0);
      do {
          let philippinese: Array<any> = [181, 565, 84];
          let listw = String.fromCharCode(99,100,102,116,0);
          let smallf: Map<any, any> = new Map([[String.fromCharCode(111,114,100,101,114,116,121,112,101,0),968], [String.fromCharCode(112,111,119,0),400], [String.fromCharCode(114,108,118,108,99,0),383]]);
          let login9 = false;
          let libavcodecU: Array<any> = [String.fromCharCode(115,105,100,101,115,0), String.fromCharCode(108,117,104,110,0)];
         recommendationt += `${((login9 ? 2 : 2) >> (Math.min(Math.abs(3), 5)))}`;
         philippinese = [1];
         listw += "1";
         smallf.set(listw, 3);
         login9 = listw == String.fromCharCode(73,0);
         libavcodecU = [smallf.size];
         if (register_jE) {
            break;
         }
      } while ((recommendationt.length < classess.size) && register_jE);
      for (let c = 0; c < 2; c++) {
         recommendationt = `${recommendationt.length}`;
      }
      if (recommendationt.length == 5) {
          let neons: Map<any, any> = new Map([[String.fromCharCode(97,98,111,118,101,0),false ], [String.fromCharCode(99,111,110,116,101,110,116,0),false ]]);
         recommendationt += `${recommendationt.length * 1}`;
         neons.set(`${neons.size}`, 2);
      }
      while (recommendationt.endsWith(`${classess.size}`)) {
         recommendationt += `${2 << (Math.min(5, Math.abs(classess.size)))}`;
         break;
      }
      short_tO = "1";
   }
   if (basketball4 == libflipperW) {
       let readd = true;
         readd = !readd;
          let heartM = String.fromCharCode(102,108,105,112,0);
          let libffmpegkite = 0;
          let completeY = String.fromCharCode(116,105,109,115,116,97,109,112,0);
         readd = (completeY.length ^ libffmpegkite) == 36;
         heartM = `${heartM.length << (Math.min(Math.abs(2), 3))}`;
         libffmpegkite <<= Math.min(Math.abs(1 ^ heartM.length), 3);
      while (readd) {
         readd = (readd ? readd : !readd);
         break;
      }
      libflipperW += `${(parseInt(`${bellY}`) | (colorso ? 1 : 3))}`;
   }
      frame_7j /= Math.max(((colorso ? 2 : 1)), 1);
      libflipperW = `${2 >> (Math.min(Math.abs(parseInt(`${expandu}`)), 4))}`;
      bellY *= parseFloat(`${mbnativeY.length << (Math.min(Math.abs(2), 3))}`);
   let telemetryh = expandu >= 6353959.0;
   do {
      expandu *= libflipperW.length;
      if (telemetryh) {
         break;
      }
   } while ((2.54 < (expandu - 3.92)) && telemetryh);
       let yingk = String.fromCharCode(110,101,101,100,101,100,0);
         yingk = `${yingk.length / (Math.max(3, 4))}`;
       let forwardQ = String.fromCharCode(97,98,111,114,116,97,98,108,101,0);
      if (forwardQ == String.fromCharCode(65,0)) {
         yingk += `${1 << (Math.min(2, forwardQ.length))}`;
      }
      frame_7j *= (result5 == String.fromCharCode(70,0) ? result5.length : mbnativeY.length);
       let promotionx: Map<any, any> = new Map([[String.fromCharCode(112,115,97,0),true ], [String.fromCharCode(111,110,101,115,0),false ], [String.fromCharCode(115,117,98,114,101,115,117,108,116,0),true ]]);
       let libpangleflippedh = String.fromCharCode(101,112,115,105,108,111,110,0);
       let logoutx = String.fromCharCode(119,101,98,115,111,99,107,101,116,0);
      for (let j = 0; j < 1; j++) {
          let referrerZ = 2.0;
         libpangleflippedh += `${(logoutx == String.fromCharCode(104,0) ? promotionx.size : logoutx.length)}`;
         referrerZ *= parseFloat(`${parseInt(`${referrerZ}`) >> (Math.min(2, Math.abs(2)))}`);
      }
          let filter3 = String.fromCharCode(100,97,115,104,98,111,97,114,100,0);
         libpangleflippedh += `${promotionx.size}`;
         filter3 = `${filter3.length % 2}`;
      if ((2 << (Math.min(5, Math.abs(promotionx.size)))) >= 1) {
         logoutx = "1";
      }
      let tickx = libpangleflippedh.length >= 6001303;
      do {
         libpangleflippedh = `${logoutx.length | promotionx.size}`;
         if (tickx) {
            break;
         }
      } while ((libpangleflippedh.length == promotionx.size) && tickx);
      let orangey = String.fromCharCode(100,112,54,0) == logoutx;
      do {
          let projectg = String.fromCharCode(102,108,97,116,0);
          let team4: Array<any> = [100, 961, 763];
          let editQ = 1;
          let overC: Map<any, any> = new Map([[String.fromCharCode(99,101,108,116,0),false ], [String.fromCharCode(99,104,101,99,107,98,111,120,0),true ]]);
          let gradlewP = 0;
         logoutx += `${projectg.length}`;
         projectg = `${editQ * 1}`;
         team4.push(1 - overC.size);
         editQ &= team4.length & editQ;
         overC = new Map([[`${team4.length}`, editQ + team4.length]]);
         gradlewP += 3;
         if (orangey) {
            break;
         }
      } while (orangey && ((2 / (Math.max(8, logoutx.length))) < 5));
         promotionx.set(libpangleflippedh, 3 >> (Math.min(5, libpangleflippedh.length)));
         logoutx += `${(String.fromCharCode(117,0) == logoutx ? libpangleflippedh.length : logoutx.length)}`;
         libpangleflippedh += `${1 | promotionx.size}`;
         libpangleflippedh += `${promotionx.size - libpangleflippedh.length}`;
      result5 += `${(libpangleflippedh.length - (colorso ? 4 : 2))}`;
      colorso = 70 == basketball4.length || bellY == 17.92;
      bellY -= parseFloat(`${3}`);
   if (!shirt5.includes(`${expandu}`)) {
       let sportsK = String.fromCharCode(100,101,98,97,110,100,0);
       let editz = 5;
          let favoriteX = 2;
         sportsK += `${3 >> (Math.min(2, Math.abs(favoriteX)))}`;
          let crownu: Map<any, any> = new Map([[String.fromCharCode(108,111,97,100,0),785], [String.fromCharCode(99,111,100,101,115,116,114,101,97,109,0),442]]);
          let founda = String.fromCharCode(117,116,116,101,114,97,110,99,101,0);
          let strk = 4.0;
         sportsK += `${crownu.size}`;
         crownu.set(`${strk}`, 1);
         founda += `${parseInt(`${strk}`)}`;
      if (!sportsK.endsWith(`${editz}`)) {
         sportsK = `${sportsK.length % 2}`;
      }
         sportsK = `${sportsK.length}`;
       let resultS: Map<any, any> = new Map([[String.fromCharCode(101,122,111,115,0),712], [String.fromCharCode(115,111,110,111,0),267], [String.fromCharCode(102,116,118,109,108,97,115,116,110,111,100,101,0),655]]);
       let feedbackH: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,109,97,114,107,0),true ], [String.fromCharCode(120,112,97,116,104,0),false ]]);
         editz /= Math.max(3 * sportsK.length, 4);
      expandu *= basketball4.length - sportsK.length;
   }
       let comments = String.fromCharCode(100,101,99,111,100,101,114,0);
       let libmapbufferjni9: Array<any> = [726, 539];
          let mimoJ: Map<any, any> = new Map([[String.fromCharCode(117,99,109,112,0),731], [String.fromCharCode(98,115,102,115,0),815]]);
          let vignetteg = false;
         comments = `${comments.length & mimoJ.size}`;
         mimoJ = new Map([[`${vignetteg}`, 3]]);
          let delegate_r3r = 3.0;
          let matchD: Array<any> = [675, 454, 711];
          let activityc = true;
         comments = `${1 ^ parseInt(`${delegate_r3r}`)}`;
         delegate_r3r -= 2 ^ matchD.length;
         matchD.push(3 << (Math.min(2, matchD.length)));
         comments = `${comments.length}`;
         comments = `${comments.length / (Math.max(2, 6))}`;
       let referrerA = 2.0;
          let signinupa: Map<any, any> = new Map([[String.fromCharCode(108,111,119,101,114,0),793], [String.fromCharCode(111,114,105,0),266]]);
         referrerA += comments.length | libmapbufferjni9.length;
         signinupa.set(`${signinupa.size}`, signinupa.size | 1);
      short_tO = `${((colorso ? 4 : 3))}`;
      libflipperW = `${result5.length}`;
      short_tO = `${result5.length}`;
      expandu -= (1 | (colorso ? 1 : 1));
   while (5.81 < (expandu / 5)) {
      frame_7j /= Math.max(4, 3);
      break;
   }
   let refreshq = colorso ? !colorso : colorso;
   do {
      colorso = 51.6 == expandu;
      if (refreshq) {
         break;
      }
   } while ((3 < short_tO.length && !colorso) && refreshq);
   while (!shirt5.startsWith(`${expandu}`)) {
      expandu *= parseInt(`${frame_7j}`);
      break;
   }
       let libavcodecr = 2;
       let launcherl = String.fromCharCode(112,105,112,101,0);
       let stations0 = String.fromCharCode(119,97,108,107,116,104,114,111,117,103,104,0);
         stations0 = `${(launcherl == String.fromCharCode(57,0) ? libavcodecr : launcherl.length)}`;
      while (!launcherl.startsWith(`${libavcodecr}`)) {
          let guide7 = String.fromCharCode(109,101,116,104,111,100,115,0);
         launcherl += "3";
         guide7 = `${guide7.length}`;
         break;
      }
      for (let m = 0; m < 1; m++) {
         launcherl = `${stations0.length * libavcodecr}`;
      }
       let favoritei = String.fromCharCode(114,111,117,110,100,110,101,115,115,0);
          let drag4: Map<any, any> = new Map([[String.fromCharCode(97,108,112,104,97,98,101,116,115,0),String.fromCharCode(117,110,114,101,102,99,111,117,110,116,0)], [String.fromCharCode(109,101,115,115,97,103,101,115,0),String.fromCharCode(97,110,103,101,0)]]);
          let countryD = String.fromCharCode(110,101,105,103,104,98,111,117,114,0);
          let soundB = 1;
         favoritei = `${countryD.length % (Math.max(1, launcherl.length))}`;
         drag4.set(`${soundB}`, soundB);
         countryD = `${drag4.size - 3}`;
      if (launcherl.includes(`${stations0.length}`)) {
         launcherl += `${favoritei.length}`;
      }
         stations0 = `${favoritei.length % 2}`;
          let buttonI = String.fromCharCode(101,110,99,111,100,101,109,118,0);
          let libfbjniV = String.fromCharCode(100,121,110,108,105,110,107,0);
          let redirecty = String.fromCharCode(104,119,109,97,112,0);
         stations0 = `${3 + buttonI.length}`;
         buttonI += "1";
         libfbjniV += `${redirecty.length / (Math.max(libfbjniV.length, 5))}`;
         redirecty = `${3 % (Math.max(6, redirecty.length))}`;
       let mutedk: Array<any> = [175, 251];
      short_tO = `${shirt5.length << (Math.min(short_tO.length, 4))}`;
      shirt5 = "1";
   let codegenc = 9256987.0 >= expandu;
   do {
      expandu *= applicationk.length / 1;
      if (codegenc) {
         break;
      }
   } while (codegenc && (colorso));
       let direct8 = false;
       let inactiveI: Map<any, any> = new Map([[String.fromCharCode(113,95,53,95,118,116,101,110,99,0),384], [String.fromCharCode(117,112,115,97,109,112,108,101,0),36]]);
      for (let c = 0; c < 2; c++) {
         direct8 = !direct8;
      }
         direct8 = direct8 || inactiveI.size > 74;
      while ((3 * inactiveI.size) < 2 || direct8) {
         direct8 = inactiveI.get(`${direct8}`) != null;
         break;
      }
         direct8 = !direct8 || inactiveI.size >= 47;
          let libzeus3 = 5.0;
         inactiveI.set(`${libzeus3}`, 3);
       let networkC = 3.0;
       let bdxadsdkR = 1.0;
      applicationk += `${short_tO.length << (Math.min(2, Math.abs(parseInt(`${frame_7j}`))))}`;
      short_tO += `${applicationk.length}`;
      short_tO = `${shirt5.length}`;
   if (shirt5.length <= 2 || !colorso) {
       let libflipperJ = 1.0;
       let streamingR = 4.0;
         streamingR -= parseFloat(`${parseInt(`${libflipperJ}`) % 1}`);
         libflipperJ /= Math.max(3, parseInt(`${streamingR}`));
      while ((libflipperJ - streamingR) >= 4.33) {
         streamingR += parseFloat(`${parseInt(`${libflipperJ}`) / 2}`);
         break;
      }
      let with__c = 8170954.0 >= streamingR;
      do {
          let rewindi = String.fromCharCode(108,111,111,112,101,120,105,116,0);
          let iconF: Map<any, any> = new Map([[String.fromCharCode(116,116,97,99,104,109,101,110,116,0),127], [String.fromCharCode(114,111,117,116,105,110,101,115,0),194], [String.fromCharCode(105,110,116,101,114,114,117,112,116,0),800]]);
          let traminiF: Map<any, any> = new Map([[String.fromCharCode(115,117,112,111,114,116,101,100,0),427], [String.fromCharCode(109,111,114,112,104,101,100,0),172], [String.fromCharCode(98,101,122,101,108,0),307]]);
          let moonU = String.fromCharCode(104,97,108,116,0);
          let appleC = 4.0;
         streamingR *= parseFloat(`${parseInt(`${libflipperJ}`) - 2}`);
         rewindi += `${traminiF.size | iconF.size}`;
         iconF = new Map([[rewindi, moonU.length + 1]]);
         traminiF.set(`${traminiF.size}`, iconF.size & traminiF.size);
         moonU = `${3 | traminiF.size}`;
         appleC /= Math.max(3, 3);
         if (with__c) {
            break;
         }
      } while ((2.87 < libflipperJ) && with__c);
      let info3 = streamingR <= 6124529.0;
      do {
         streamingR *= parseFloat(`${parseInt(`${libflipperJ}`) / 3}`);
         if (info3) {
            break;
         }
      } while (info3 && ((libflipperJ - 5.32) <= 1.19 || 4.98 <= (streamingR - 5.32)));
      for (let u = 0; u < 1; u++) {
         streamingR -= parseFloat(`${parseInt(`${libflipperJ}`)}`);
      }
      colorso = result5 == String.fromCharCode(87,0);
   }
      result5 = `${parseInt(`${expandu}`) / 2}`;
   for (let a = 0; a < 2; a++) {
      short_tO = "3";
   }
   let graphQ = 8501075 >= mbnativeY.length;
   do {
       let qaag5: Map<any, any> = new Map([[String.fromCharCode(105,119,97,108,115,104,0),121], [String.fromCharCode(97,116,99,104,0),50]]);
       let playercommon2 = 3;
          let sinaN = 3;
          let yellowg = false;
          let viewer7 = String.fromCharCode(115,97,118,101,112,111,105,110,116,115,0);
         qaag5.set(`${sinaN}`, sinaN / (Math.max(playercommon2, 1)));
         yellowg = !yellowg;
         viewer7 = "1";
      let whitew = qaag5.size <= 7017244;
      do {
         qaag5 = new Map([[`${qaag5.size}`, qaag5.size]]);
         if (whitew) {
            break;
         }
      } while ((qaag5.get(`${playercommon2}`) == null) && whitew);
       let untickd = String.fromCharCode(118,105,115,105,98,108,101,0);
       let qaagP = String.fromCharCode(101,98,117,108,97,115,0);
         qaagP = `${untickd.length}`;
      if ((qaag5.size >> (Math.min(1, Math.abs(playercommon2)))) < 2) {
          let cancelM = String.fromCharCode(115,99,97,110,116,97,98,108,101,0);
          let pause_: Array<any> = [305, 882];
         playercommon2 <<= Math.min(5, Math.abs(3));
         cancelM = `${cancelM.length}`;
         pause_.push(pause_.length % (Math.max(1, 8)));
      }
      while ((playercommon2 * 3) > 5 && (qaag5.size * 3) > 2) {
          let flyerO: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,110,101,100,0),664], [String.fromCharCode(101,120,99,108,117,115,105,111,110,115,0),299]]);
          let toponi = String.fromCharCode(104,95,54,53,0);
          let textinputg: Array<any> = [String.fromCharCode(105,110,99,114,101,97,115,101,0), String.fromCharCode(97,99,107,110,111,119,108,101,100,103,109,101,110,116,0), String.fromCharCode(102,111,114,109,97,116,0)];
         qaag5 = new Map([[`${playercommon2}`, 2 + playercommon2]]);
         flyerO = new Map([[`${flyerO.size}`, toponi.length >> (Math.min(5, Math.abs(flyerO.size)))]]);
         toponi = `${flyerO.size - 2}`;
         textinputg = [2];
         break;
      }
      mbnativeY = `${(String.fromCharCode(70,0) == short_tO ? basketball4.length : short_tO.length)}`;
      if (graphQ) {
         break;
      }
   } while (graphQ && ((minivodr.size / (Math.max(4, 5))) <= 1 && 4 <= (minivodr.size / (Math.max(mbnativeY.length, 2)))));
   if (4 == shirt5.length) {
      shirt5 = `${libflipperW.length}`;
   }
   if (!basketball4.includes(`${colorso}`)) {
      colorso = applicationk == String.fromCharCode(122,0);
   }
      expandu /= Math.max(applicationk.length % (Math.max(2, 1)), 2);
       let w_imagey: Map<any, any> = new Map([[String.fromCharCode(99,117,114,114,114,101,110,116,0),219], [String.fromCharCode(111,117,116,108,105,101,114,0),495], [String.fromCharCode(114,101,115,117,108,116,115,0),280]]);
       let progressq = 4;
      let whatsappg = w_imagey.size >= 5160944;
      do {
         w_imagey.set(`${progressq}`, w_imagey.size);
         if (whatsappg) {
            break;
         }
      } while (((w_imagey.size * progressq) >= 3 && (w_imagey.size * 3) >= 2) && whatsappg);
         w_imagey.set(`${progressq}`, w_imagey.size);
      if (1 >= w_imagey.size) {
          let scheduleD: Map<any, any> = new Map([[String.fromCharCode(97,99,99,117,109,0),String.fromCharCode(108,97,122,121,95,101,95,53,52,0)], [String.fromCharCode(115,116,114,112,116,105,109,101,0),String.fromCharCode(105,103,110,111,114,101,115,0)], [String.fromCharCode(97,116,111,109,105,99,97,108,108,121,0),String.fromCharCode(105,110,115,101,114,116,101,100,0)]]);
          let libsentryt = 4.0;
         w_imagey = new Map([[`${w_imagey.size}`, w_imagey.size]]);
         scheduleD.set(`${libsentryt}`, 1);
         libsentryt += parseFloat(`${parseInt(`${libsentryt}`) % (Math.max(4, scheduleD.size))}`);
      }
      let mbridge3 = w_imagey.size <= 5492331;
      do {
         w_imagey.set(`${progressq}`, 2);
         if (mbridge3) {
            break;
         }
      } while ((Array.from(w_imagey.values()).includes(progressq)) && mbridge3);
          let nnewsw = 1;
          let regengY = 2.0;
         w_imagey = new Map([[`${progressq}`, 3]]);
         nnewsw /= Math.max(1, parseInt(`${regengY}`));
         regengY += parseFloat(`${nnewsw / (Math.max(4, parseInt(`${regengY}`)))}`);
      let confirmationz = progressq <= 6361538;
      do {
         progressq %= Math.max(2 & w_imagey.size, 4);
         if (confirmationz) {
            break;
         }
      } while (confirmationz && (Array.from(w_imagey.values()).includes(progressq)));
      minivodr = new Map([[applicationk, (applicationk == String.fromCharCode(68,0) ? progressq : applicationk.length)]]);
   if (minivodr.get(`${expandu}`) != null) {
       let twitter7: Array<any> = [742, 349];
       let bootsplashs = 5;
      if ((3 ^ twitter7.length) >= 5 && 4 >= (bootsplashs ^ 3)) {
         bootsplashs <<= Math.min(Math.abs(3), 2);
      }
      let controls6 = bootsplashs >= 7453174;
      do {
         bootsplashs %= Math.max(3 | bootsplashs, 1);
         if (controls6) {
            break;
         }
      } while (controls6 && (!twitter7.includes(bootsplashs)));
         bootsplashs /= Math.max(4, bootsplashs >> (Math.min(twitter7.length, 3)));
         bootsplashs -= twitter7.length;
          let logoutl = 4.0;
          let textinputT = String.fromCharCode(97,115,102,114,116,112,0);
         twitter7.push(bootsplashs * parseInt(`${logoutl}`));
         logoutl /= Math.max(4, (textinputT == String.fromCharCode(81,0) ? textinputT.length : textinputT.length));
      if (bootsplashs > twitter7.length) {
          let applicationn = 2.0;
          let z_center8: Map<any, any> = new Map([[String.fromCharCode(98,117,105,108,100,99,111,110,102,0),649], [String.fromCharCode(99,111,108,111,114,109,97,116,114,105,120,0),665], [String.fromCharCode(106,99,111,110,102,105,103,105,110,116,0),57]]);
          let fillP: Map<any, any> = new Map([[String.fromCharCode(106,117,115,116,105,102,121,0),949], [String.fromCharCode(111,108,100,0),402]]);
         bootsplashs /= Math.max(3, bootsplashs ^ parseInt(`${applicationn}`));
         applicationn *= fillP.size >> (Math.min(2, Math.abs(z_center8.size)));
         z_center8.set(`${fillP.size}`, z_center8.size | fillP.size);
      }
      expandu /= Math.max(mbnativeY.length, 2);
   }
   let upgradeD = colorso ? !colorso : colorso;
   do {
       let selection6 = 1.0;
       let singlel = String.fromCharCode(98,117,105,108,100,105,110,103,0);
       let settings5 = String.fromCharCode(99,111,108,111,110,115,0);
      if ((selection6 / (Math.max(parseFloat(`${settings5.length}`), 1))) >= 3.18 || (selection6 / (Math.max(3.18, 8))) >= 4.87) {
         settings5 = `${parseInt(`${selection6}`) << (Math.min(Math.abs(1), 3))}`;
      }
      if ((parseInt(`${selection6}`) + singlel.length) >= 1) {
          let halfb = String.fromCharCode(115,116,114,115,101,112,0);
         singlel = `${singlel.length}`;
         halfb = `${halfb.length}`;
      }
      while (!settings5.endsWith(`${selection6}`)) {
          let verticaly = false;
          let attributedstringc = true;
          let sorth: Map<any, any> = new Map([[String.fromCharCode(106,99,111,110,102,105,103,0),true ], [String.fromCharCode(105,110,116,101,114,112,111,108,97,116,97,98,108,101,0),false ]]);
          let pointe = 3.0;
         settings5 += `${((attributedstringc ? 2 : 3) + (verticaly ? 2 : 5))}`;
         verticaly = (pointe + parseFloat(`${sorth.size}`)) < 91.68;
         attributedstringc = parseInt(`${pointe}`) <= sorth.size;
         break;
      }
      for (let e = 0; e < 3; e++) {
         settings5 = `${singlel.length & parseInt(`${selection6}`)}`;
      }
      for (let p = 0; p < 3; p++) {
          let bdxadsdkp = 3.0;
         settings5 += `${singlel.length % (Math.max(settings5.length, 8))}`;
         bdxadsdkp *= parseInt(`${bdxadsdkp}`) / 3;
      }
       let libtanf: Map<any, any> = new Map([[String.fromCharCode(115,99,97,108,101,0),469], [String.fromCharCode(101,120,101,99,0),995]]);
      while (singlel != settings5) {
         settings5 = `${libtanf.size & 2}`;
         break;
      }
       let confirmationQ = 2.0;
      while (confirmationQ > parseFloat(`${singlel.length}`)) {
          let layoutc: Map<any, any> = new Map([[String.fromCharCode(99,100,108,109,115,0),622], [String.fromCharCode(99,111,110,102,0),631], [String.fromCharCode(120,95,53,49,95,119,116,118,102,105,108,101,0),777]]);
          let teamE = String.fromCharCode(103,114,97,112,104,0);
          let acceptedG = String.fromCharCode(114,97,100,105,120,0);
          let gpaya = String.fromCharCode(109,97,120,106,0);
         confirmationQ += parseFloat(`${parseInt(`${confirmationQ}`) | 3}`);
         layoutc = new Map([[`${layoutc.size}`, layoutc.size >> (Math.min(teamE.length, 4))]]);
         teamE = `${1 / (Math.max(10, layoutc.size))}`;
         acceptedG += `${layoutc.size / (Math.max(acceptedG.length, 6))}`;
         gpaya += `${(teamE == String.fromCharCode(75,0) ? teamE.length : acceptedG.length)}`;
         break;
      }
      colorso = libflipperW == String.fromCharCode(75,0);
      if (upgradeD) {
         break;
      }
   } while ((4.23 <= (bellY - 1.3) || !colorso) && upgradeD);
   if ((mbnativeY.length / (Math.max(7, expandu))) > 3.27) {
       let selectr = String.fromCharCode(100,101,110,111,105,115,101,0);
       let topony = 5;
       let orientationk = String.fromCharCode(118,105,115,97,0);
         topony *= selectr.length | 3;
         topony /= Math.max(selectr.length / 2, 5);
         selectr += `${orientationk.length << (Math.min(Math.abs(1), 4))}`;
      if ((selectr.length | topony) > 3) {
          let middle0 = String.fromCharCode(98,111,100,121,0);
          let umengw = 2.0;
         selectr += `${selectr.length | orientationk.length}`;
         middle0 += `${(String.fromCharCode(102,0) == middle0 ? parseInt(`${umengw}`) : middle0.length)}`;
         umengw -= middle0.length;
      }
          let photoP = String.fromCharCode(119,97,116,99,104,101,100,0);
          let ticked_ = 1;
         orientationk = `${1 & photoP.length}`;
         photoP = `${ticked_}`;
      mbnativeY += `${mbnativeY.length << (Math.min(Math.abs(3), 2))}`;
   }
   while (!short_tO.includes(`${bellY}`)) {
       let manifest8 = String.fromCharCode(109,101,100,105,117,109,0);
       let projectp = String.fromCharCode(109,101,115,97,103,101,0);
       let topicn = 3.0;
       let constantsQ = String.fromCharCode(100,105,97,108,111,103,0);
       let flyerM: Array<any> = [760, 97, 528];
       let rewardH = String.fromCharCode(100,101,99,108,97,114,101,0);
       let policyy = String.fromCharCode(109,105,110,105,109,117,109,0);
      while ((1 % (Math.max(3, flyerM.length))) > 3 || (flyerM.length % 1) > 3) {
         manifest8 = `${3 | projectp.length}`;
         break;
      }
          let imagemanagerP = String.fromCharCode(101,113,117,97,108,0);
         rewardH = `${projectp.length}`;
         imagemanagerP += `${2 >> (Math.min(1, imagemanagerP.length))}`;
         flyerM = [policyy.length | constantsQ.length];
      let sigmobi = projectp == String.fromCharCode(52,112,114,101,53,110,53,0);
      do {
         projectp = `${(String.fromCharCode(86,0) == manifest8 ? flyerM.length : manifest8.length)}`;
         if (sigmobi) {
            break;
         }
      } while (sigmobi && (policyy.includes(`${projectp.length}`)));
       let bootsplashN: Map<any, any> = new Map([[String.fromCharCode(115,107,101,121,0),231], [String.fromCharCode(115,116,114,111,107,101,100,0),359]]);
          let popup_ = String.fromCharCode(100,101,108,116,97,0);
          let whiteL = String.fromCharCode(112,114,111,112,0);
         manifest8 += `${rewardH.length}`;
         popup_ = `${(String.fromCharCode(119,0) == popup_ ? popup_.length : whiteL.length)}`;
         whiteL += "1";
      for (let z = 0; z < 3; z++) {
          let armvad = 4;
         projectp += `${bootsplashN.size}`;
         armvad -= armvad;
      }
      let skip9 = constantsQ.length >= 5317612;
      do {
         constantsQ = `${rewardH.length}`;
         if (skip9) {
            break;
         }
      } while ((constantsQ.startsWith(`${flyerM.length}`)) && skip9);
      if (!constantsQ.endsWith(policyy)) {
         constantsQ += "3";
      }
       let launchh: Array<any> = [505, 340, 271];
      let sharedK = rewardH.length <= 8782466;
      do {
         rewardH = `${flyerM.length % 1}`;
         if (sharedK) {
            break;
         }
      } while (sharedK && (!rewardH.includes(`${bootsplashN.size}`)));
         projectp += `${bootsplashN.size % 3}`;
          let animationw = String.fromCharCode(103,117,97,114,97,110,116,101,101,115,95,120,95,49,0);
          let bottomV = String.fromCharCode(100,101,113,117,97,110,116,0);
          let episodesi = String.fromCharCode(109,97,105,108,0);
         bootsplashN = new Map([[policyy, bottomV.length & 2]]);
         animationw += `${(String.fromCharCode(66,0) == episodesi ? episodesi.length : animationw.length)}`;
         bottomV = "3";
          let merger7: Array<any> = [294, 293, 530];
          let feedbackq = true;
          let libavcodecj = String.fromCharCode(104,111,116,111,0);
         launchh = [libavcodecj.length];
         merger7.push(((feedbackq ? 5 : 1) - 1));
         feedbackq = !feedbackq;
         libavcodecj += "3";
      short_tO = `${basketball4.length}`;
      break;
   }
 },
      onReadyForDisplay,
      showAds = false,
      onPressCountdown,
      vodID,
      sourceID,
      onDownloadVod,
      setShowAdOverlay,
      onAdsMount,
    }: yys_ConfigureUimanager,
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
      "libreactnativejniProfile" | "none" | "valuesLangConstants"
    >("none");
    const [playbackRate, setPlaybackRate] = useState<number>(1);
    const controlsRef = useRef() as React.MutableRefObject<yys_FilledAlert>;
    const accumulatedSkip = useRef(0);
    const [isLastForward, setIsLastForward] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const isFocus = useIsFocused();

    const userState = useSelector<yys_HejiCricket>('userReducer');
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
    const adCountdownIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const [showAd, setShowAd] = useState(false);
    const [adCountdownTime, setAdCountdownTime] = useState(AD_VIDEO_SECONDS);

    const isOffline = useAppSelector(({ settingsReducer }: yys_MintegralLibavdevice) => settingsReducer.isOffline)

    const { data: playerVodAds, isFetching: isFetchAds } = useQuery({
      queryKey: ["playerAdsVideo"],
      queryFn: () => yys_Downloader.getPlayerAdVideo(),
      enabled: !isOffline
    });

    useEffect(() => {
      if (vod_url === '') return;

      if (showAds &&
        playerVodAds &&
        (!yys_RelatedTooltips.isVip(userState.user))
      ) {
        setShowAd(true);
        setAdCountdownTime(playerVodAds.minDuration);
        adVideoRef.current?.seek(0);

        
        yys_event_common.playsAdsViewAnalytics({
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
      if (adCountdownIntervalRef.current === null) {
        adCountdownIntervalRef.current = setInterval(() => {
       let cancels = String.fromCharCode(99,111,109,109,105,116,116,101,114,0);
    let baiduP = String.fromCharCode(114,97,112,104,105,99,115,0);
    let shirtq = 5.0;
    let mutedW: Array<any> = [799, 621, 622];
    let anythink_ = String.fromCharCode(112,114,101,102,101,114,115,0);
    let pageb = String.fromCharCode(104,105,103,104,105,103,104,116,0);
    let neonc = String.fromCharCode(115,101,113,117,101,110,99,101,0);
    let attributedstringW: Array<any> = [289, 956, 142];
    let collectionF: Array<any> = [String.fromCharCode(117,105,110,116,98,101,0), String.fromCharCode(99,104,97,110,103,101,100,104,0), String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,115,0)];
    let calendar9 = String.fromCharCode(102,102,118,108,0);
    let starY = 3;
    let heartU = 3.0;
    let w_managerC = String.fromCharCode(97,108,112,105,110,101,0);
    let sina8 = 3.0;
    let linex = String.fromCharCode(115,116,114,105,114,101,112,108,97,99,101,0);
    let stylei = String.fromCharCode(105,110,108,105,110,101,100,0);
   let ballb = String.fromCharCode(116,57,115,120,120,48,110,101,112,113,0) == neonc;
   do {
      neonc += `${cancels.length}`;
      if (ballb) {
         break;
      }
   } while (((attributedstringW.length % (Math.max(neonc.length, 2))) >= 3 && 2 >= (neonc.length % 3)) && ballb);
       let roomQ = String.fromCharCode(99,111,110,102,105,110,101,100,0);
         roomQ += `${roomQ.length + 1}`;
       let sportsW = String.fromCharCode(116,114,97,110,115,112,0);
          let less_ = String.fromCharCode(118,99,111,100,101,99,0);
          let confirmatione = String.fromCharCode(115,105,109,117,108,97,116,111,114,0);
          let animationsw = String.fromCharCode(108,111,111,107,117,112,0);
         roomQ += `${2 - roomQ.length}`;
         less_ += "3";
         confirmatione += `${animationsw.length}`;
         animationsw = `${confirmatione.length}`;
      pageb = `${(pageb == String.fromCharCode(122,0) ? pageb.length : anythink_.length)}`;
      collectionF = [attributedstringW.length];
   while (5 == (attributedstringW.length >> (Math.min(baiduP.length, 4))) || 2 == (5 >> (Math.min(5, baiduP.length)))) {
      attributedstringW.push(neonc.length);
      break;
   }
   while (3 > (2 % (Math.max(4, mutedW.length))) && 1 > (anythink_.length % (Math.max(2, 1)))) {
      mutedW.push((String.fromCharCode(79,0) == cancels ? mutedW.length : cancels.length));
      break;
   }
   for (let h = 0; h < 2; h++) {
      baiduP = `${(neonc == String.fromCharCode(48,0) ? calendar9.length : neonc.length)}`;
   }
      cancels = "1";
   let servicea = 5391239 <= starY;
   do {
      starY %= Math.max(mutedW.length, 3);
      if (servicea) {
         break;
      }
   } while ((1 > (attributedstringW.length % (Math.max(6, starY))) || (starY % (Math.max(attributedstringW.length, 6))) > 1) && servicea);
      starY &= collectionF.length;
   for (let w = 0; w < 2; w++) {
      heartU *= parseFloat(`${1}`);
   }
      collectionF.push((baiduP == String.fromCharCode(121,0) ? parseInt(`${heartU}`) : baiduP.length));
      baiduP = `${anythink_.length / (Math.max(5, mutedW.length))}`;
   if (2 <= cancels.length) {
      neonc += `${1 << (Math.min(5, Math.abs(parseInt(`${shirtq}`))))}`;
   }
   for (let c = 0; c < 2; c++) {
       let navigationb: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,101,100,0),880], [String.fromCharCode(115,101,115,115,105,111,110,115,0),378], [String.fromCharCode(101,112,111,99,104,0),669]]);
       let commentK = String.fromCharCode(102,105,110,100,0);
       let orangep: Map<any, any> = new Map([[String.fromCharCode(99,104,97,110,103,105,110,103,0),861], [String.fromCharCode(111,114,97,110,103,101,0),787]]);
         orangep = new Map([[`${navigationb.size}`, commentK.length + navigationb.size]]);
         navigationb = new Map([[`${navigationb.size}`, commentK.length / 2]]);
         commentK = `${navigationb.size ^ commentK.length}`;
          let configV = String.fromCharCode(117,115,101,114,110,97,109,101,0);
         orangep = new Map([[`${orangep.size}`, navigationb.size ^ 3]]);
         configV += `${1 << (Math.min(1, configV.length))}`;
      for (let k = 0; k < 3; k++) {
         orangep.set(commentK, navigationb.size);
      }
      if (5 == (orangep.size ^ navigationb.size) || (orangep.size ^ navigationb.size) == 5) {
         orangep = new Map([[`${orangep.size}`, 2]]);
      }
      if (navigationb.size <= commentK.length) {
         commentK += `${commentK.length}`;
      }
      let networku = 7403744 >= navigationb.size;
      do {
          let unreadx = 2.0;
          let bell0 = String.fromCharCode(99,111,110,102,105,103,117,114,97,116,111,114,0);
          let bingO: Array<any> = [668, 615];
          let logout_ = 2.0;
         navigationb = new Map([[`${unreadx}`, commentK.length ^ 2]]);
         unreadx -= bingO.length;
         bell0 += `${(String.fromCharCode(87,0) == bell0 ? parseInt(`${logout_}`) : bell0.length)}`;
         bingO = [bell0.length];
         logout_ /= Math.max(4, parseFloat(`${parseInt(`${logout_}`) / (Math.max(bingO.length, 3))}`));
         if (networku) {
            break;
         }
      } while ((2 < (4 ^ commentK.length)) && networku);
      let rootz = commentK.length <= 7836480;
      do {
         commentK = `${navigationb.size}`;
         if (rootz) {
            break;
         }
      } while (((orangep.size - 3) < 3) && rootz);
      cancels += `${starY}`;
   }
   for (let l = 0; l < 2; l++) {
      w_managerC += `${2 >> (Math.min(1, pageb.length))}`;
   }
   if ((pageb.length - 2) == 2 && 2 == (mutedW.length - pageb.length)) {
       let formk = 5;
       let libruntimeexecutor8 = 5;
      for (let q = 0; q < 1; q++) {
         libruntimeexecutor8 *= libruntimeexecutor8 * 1;
      }
          let viewerd = false;
         formk >>= Math.min(Math.abs((libruntimeexecutor8 & (viewerd ? 4 : 2))), 2);
          let annerp = 3;
          let userY = 4.0;
          let circlem = 1.0;
         formk *= 1 - libruntimeexecutor8;
         annerp ^= annerp;
         userY /= Math.max(parseFloat(`${annerp % 2}`), 5);
         circlem += 2;
         formk <<= Math.min(3, Math.abs(libruntimeexecutor8));
         libruntimeexecutor8 *= libruntimeexecutor8 - formk;
      if ((1 & libruntimeexecutor8) > 2 && (libruntimeexecutor8 & formk) > 1) {
          let applicationu = 5.0;
          let brightness0 = String.fromCharCode(98,111,100,105,101,115,0);
          let searchC: Map<any, any> = new Map([[String.fromCharCode(110,101,119,101,114,0),true ], [String.fromCharCode(98,108,101,110,100,109,111,100,101,0),true ], [String.fromCharCode(104,101,118,99,100,101,99,0),true ]]);
          let libavcodecK = String.fromCharCode(97,114,99,116,105,99,0);
          let bannerh: Array<any> = [String.fromCharCode(113,117,97,110,116,120,0), String.fromCharCode(102,105,110,103,101,114,0)];
         libruntimeexecutor8 %= Math.max((brightness0 == String.fromCharCode(52,0) ? parseInt(`${applicationu}`) : brightness0.length), 2);
         applicationu += searchC.size;
         searchC = new Map([[`${searchC.size}`, searchC.size >> (Math.min(libavcodecK.length, 3))]]);
         libavcodecK = `${1 >> (Math.min(1, bannerh.length))}`;
         bannerh = [searchC.size + 2];
      }
      pageb = `${parseInt(`${heartU}`) / (Math.max(anythink_.length, 4))}`;
   }
   for (let y = 0; y < 1; y++) {
       let final_69 = String.fromCharCode(97,110,97,108,121,122,101,114,0);
       let verticalV = 1.0;
       let yellowu = String.fromCharCode(115,116,114,115,116,97,114,116,0);
       let more_ = false;
      let cancelZ = more_ ? !more_ : more_;
      do {
         more_ = (final_69.length >> (Math.min(yellowu.length, 5))) <= 58;
         if (cancelZ) {
            break;
         }
      } while ((yellowu.length <= 5) && cancelZ);
         more_ = String.fromCharCode(71,0) == final_69 || 90.78 == verticalV;
         yellowu = "1";
         more_ = 89 <= final_69.length && verticalV <= 46.42;
         more_ = yellowu.length == 87;
         more_ = 70.58 <= verticalV;
          let libavformatT = String.fromCharCode(116,104,105,114,116,121,0);
         more_ = libavformatT.includes(`${more_}`);
      let private__p_ = 7361471.0 <= verticalV;
      do {
          let listN = 3.0;
          let disconnectedz = true;
         verticalV -= 3 >> (Math.min(Math.abs(parseInt(`${listN}`)), 1));
         listN -= 1;
         if (private__p_) {
            break;
         }
      } while (((verticalV - yellowu.length) <= 1.62) && private__p_);
      for (let p = 0; p < 3; p++) {
         more_ = verticalV == final_69.length;
      }
      let bingf = 8750279 <= final_69.length;
      do {
          let lefte = String.fromCharCode(97,114,103,115,0);
          let whistleB = false;
          let paginationK = 1;
         final_69 += `${(String.fromCharCode(67,0) == lefte ? lefte.length : (more_ ? 4 : 5))}`;
         whistleB = paginationK >= 49;
         paginationK += ((whistleB ? 5 : 3) | paginationK);
         if (bingf) {
            break;
         }
      } while (bingf && (!final_69.startsWith(`${verticalV}`)));
          let modelA = 0.0;
          let taiwan0 = 4;
          let historye = String.fromCharCode(101,110,99,111,100,101,0);
         more_ = (modelA * taiwan0) < 5;
         modelA -= parseFloat(`${2 * historye.length}`);
         taiwan0 += historye.length % (Math.max(4, historye.length));
         yellowu += `${parseInt(`${verticalV}`) ^ 2}`;
      calendar9 += `${3 % (Math.max(parseInt(`${shirtq}`), 8))}`;
   }
   while (starY < neonc.length) {
      starY ^= 1 - w_managerC.length;
      break;
   }
       let q_countW = 0.0;
       let confirmation9 = String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,98,108,101,0);
       let arrowj = 3.0;
         confirmation9 += `${parseInt(`${arrowj}`)}`;
      let gpayx = q_countW >= 5386674.0;
      do {
         q_countW /= Math.max((confirmation9 == String.fromCharCode(80,0) ? confirmation9.length : parseInt(`${arrowj}`)), 1);
         if (gpayx) {
            break;
         }
      } while (((4.21 - q_countW) > 4.63 && (parseInt(`${q_countW}`) - 2) > 1) && gpayx);
         confirmation9 += `${confirmation9.length << (Math.min(3, Math.abs(parseInt(`${arrowj}`))))}`;
         confirmation9 = "1";
      if (4 > (parseInt(`${arrowj}`) / (Math.max(3, confirmation9.length))) && 4 > (confirmation9.length / (Math.max(4, 10)))) {
         confirmation9 += `${parseInt(`${q_countW}`) / (Math.max(confirmation9.length, 9))}`;
      }
          let dice_: Map<any, any> = new Map([[String.fromCharCode(109,98,117,102,115,0),813], [String.fromCharCode(111,112,101,110,115,115,108,118,0),331]]);
         confirmation9 = `${dice_.size >> (Math.min(Math.abs(1), 4))}`;
         arrowj /= Math.max(parseFloat(`${parseInt(`${q_countW}`)}`), 4);
      if (5 < (confirmation9.length % (Math.max(4, 2))) || 1 < (confirmation9.length / 4)) {
         confirmation9 += `${(String.fromCharCode(120,0) == confirmation9 ? parseInt(`${arrowj}`) : confirmation9.length)}`;
      }
      while (q_countW >= 1.79) {
         q_countW -= 1;
         break;
      }
      pageb = `${collectionF.length}`;

          setAdCountdownTime(prev => prev - 1);
        }, 1000)
      }

      return () => {
        if (adCountdownIntervalRef.current) {
          clearInterval(adCountdownIntervalRef.current);
          adCountdownIntervalRef.current = null;
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
          adCountdownIntervalRef.current = null;
        } else if (pauseVideo === false && showAd) {
          adCountdownIntervalRef.current = setInterval(() => {
       let gesturesP = String.fromCharCode(111,114,119,97,114,100,101,100,0);
    let area1 = 1;
    let rootU = false;
    let infod: Array<any> = [804, 752];
    let adultF = String.fromCharCode(105,114,100,102,116,95,121,95,54,54,0);
    let filledl = 4.0;
    let unimplementedviewW = 1.0;
    let eactA = String.fromCharCode(100,105,115,112,97,116,99,104,105,110,103,0);
    let bing7 = false;
    let libzeusr: Array<any> = [879, 784, 352];
    let const_b3V = 1;
    let sheetH = String.fromCharCode(104,101,97,100,105,110,103,0);
    let wnewsF = false;
      area1 += (parseInt(`${unimplementedviewW}`) & (bing7 ? 5 : 3));
      libzeusr = [3 ^ const_b3V];
   if (!libzeusr.includes(const_b3V)) {
      libzeusr = [(String.fromCharCode(66,0) == gesturesP ? gesturesP.length : (bing7 ? 5 : 5))];
   }
   for (let b = 0; b < 2; b++) {
      rootU = !bing7;
   }
      libzeusr.push(parseInt(`${unimplementedviewW}`) << (Math.min(4, Math.abs(3))));
   let videojsJ = unimplementedviewW <= 8606053.0;
   do {
      unimplementedviewW += parseFloat(`${eactA.length / (Math.max(5, libzeusr.length))}`);
      if (videojsJ) {
         break;
      }
   } while (videojsJ && ((unimplementedviewW / 3.5) >= 4.59 || (3 >> (Math.min(3, Math.abs(area1)))) >= 5));
   let crossf = bing7 ? !bing7 : bing7;
   do {
      bing7 = eactA == String.fromCharCode(53,0);
      if (crossf) {
         break;
      }
   } while (crossf && (5.63 > (filledl + 1.51) || filledl > 1.51));
       let combinedp = String.fromCharCode(99,111,110,115,116,115,0);
       let controlsh = 3.0;
       let memberv = String.fromCharCode(114,101,103,105,115,116,101,114,115,0);
         combinedp += "2";
      if (1 <= combinedp.length) {
          let policy1 = true;
          let coreH = String.fromCharCode(114,101,113,117,105,114,101,115,0);
          let wind5: Map<any, any> = new Map([[String.fromCharCode(107,110,111,99,107,111,117,116,0),426], [String.fromCharCode(120,120,104,97,115,104,0),284], [String.fromCharCode(116,111,112,105,99,97,108,0),108]]);
          let header6 = 5.0;
          let sinaU = 2.0;
         combinedp = `${combinedp.length - 3}`;
         policy1 = sinaU > 41.86;
         coreH += `${3 / (Math.max(4, coreH.length))}`;
         wind5 = new Map([[`${header6}`, parseInt(`${header6}`) ^ parseInt(`${sinaU}`)]]);
      }
      if (memberv != combinedp) {
         combinedp += `${combinedp.length << (Math.min(3, Math.abs(parseInt(`${controlsh}`))))}`;
      }
          let libfollyj = String.fromCharCode(117,110,109,117,116,101,100,0);
          let overI = false;
         memberv += `${((overI ? 5 : 1))}`;
         libfollyj += `${3 % (Math.max(8, libfollyj.length))}`;
         overI = (libfollyj.length | libfollyj.length) <= 62;
       let foundv = 3.0;
       let anythink0 = 5.0;
      let gradleV = 5491621 >= memberv.length;
      do {
         memberv = `${(memberv == String.fromCharCode(95,0) ? memberv.length : parseInt(`${controlsh}`))}`;
         if (gradleV) {
            break;
         }
      } while ((4.10 <= (5.47 * controlsh) || 1 <= (memberv.length / 1)) && gradleV);
       let description__0S = String.fromCharCode(113,117,97,108,105,102,105,101,114,115,0);
       let ajaxD = String.fromCharCode(105,110,112,117,116,116,101,109,0);
       let taiwan9 = String.fromCharCode(102,116,118,115,112,108,105,116,98,97,114,0);
      for (let x = 0; x < 1; x++) {
         description__0S = `${memberv.length ^ parseInt(`${anythink0}`)}`;
      }
      rootU = infod.includes(controlsh);
       let currentD: Array<any> = [971, 231, 544];
       let networka = 1.0;
       let becomeF = 2.0;
      if (networka > becomeF) {
          let expandu = String.fromCharCode(100,105,102,102,101,114,101,110,116,0);
          let n_viewY = 1.0;
          let overv = 3;
          let select0 = String.fromCharCode(112,114,101,99,105,115,101,0);
          let private_llq = 4;
         networka *= private_llq | 2;
         expandu = `${3 * select0.length}`;
         n_viewY /= Math.max(parseFloat(`${select0.length}`), 2);
         overv %= Math.max(5, overv >> (Math.min(select0.length, 1)));
         private_llq -= select0.length * overv;
      }
          let sentryZ: Array<any> = [String.fromCharCode(108,97,118,102,117,116,105,108,115,0), String.fromCharCode(112,101,114,115,111,110,0)];
          let libreactperfloggerjnij = 1.0;
         becomeF += parseFloat(`${3 & parseInt(`${networka}`)}`);
         sentryZ.push(sentryZ.length - parseInt(`${libreactperfloggerjnij}`));
         libreactperfloggerjnij -= parseFloat(`${1}`);
         networka -= currentD.length * 1;
         currentD = [parseInt(`${becomeF}`)];
       let adultI = String.fromCharCode(100,120,116,121,115,0);
         networka += parseInt(`${becomeF}`);
      let mintegralZ = networka >= 6504876.0;
      do {
          let recommendation4 = String.fromCharCode(105,109,97,103,101,115,0);
         networka += 2 + recommendation4.length;
         if (mintegralZ) {
            break;
         }
      } while ((1.79 <= (4.96 / (Math.max(2, becomeF))) || (4.96 / (Math.max(5, becomeF))) <= 3.27) && mintegralZ);
         currentD.push(adultI.length / 3);
         currentD.push((adultI == String.fromCharCode(70,0) ? parseInt(`${networka}`) : adultI.length));
      const_b3V /= Math.max(4, parseInt(`${networka}`));
       let downloaderD = false;
       let mbbanner7 = 1;
          let corem: Array<any> = [719, 283, 590];
         downloaderD = 41 < mbbanner7 || downloaderD;
         corem.push(1 << (Math.min(1, corem.length)));
      for (let a = 0; a < 3; a++) {
         downloaderD = mbbanner7 == 65;
      }
          let typing0 = 0.0;
         downloaderD = !downloaderD;
         typing0 *= parseFloat(`${parseInt(`${typing0}`)}`);
          let mbbidW = 4.0;
          let result0 = 4.0;
          let editE = 3.0;
         mbbanner7 *= parseInt(`${result0}`);
         mbbidW /= Math.max(parseFloat(`${parseInt(`${mbbidW}`) >> (Math.min(Math.abs(parseInt(`${editE}`)), 3))}`), 3);
         editE /= Math.max(parseFloat(`${parseInt(`${mbbidW}`)}`), 1);
       let chatU = String.fromCharCode(114,115,116,110,0);
       let sharez = String.fromCharCode(115,116,117,100,105,111,0);
      if (sharez.length <= 1 && downloaderD) {
          let nextY = String.fromCharCode(105,110,116,114,105,110,115,105,99,0);
         downloaderD = mbbanner7 >= 44;
         nextY = `${nextY.length % (Math.max(1, 2))}`;
      }
      const_b3V += (parseInt(`${filledl}`) - (rootU ? 5 : 2));
       let feedbackI: Map<any, any> = new Map([[String.fromCharCode(99,108,97,109,112,0),true ], [String.fromCharCode(97,101,99,109,0),true ]]);
       let plus_ = true;
      if (3 < feedbackI.size) {
         plus_ = (62 <= (feedbackI.size >> (Math.min(1, Math.abs((plus_ ? 62 : feedbackI.size))))));
      }
         feedbackI.set(`${plus_}`, (2 ^ (plus_ ? 1 : 5)));
         plus_ = !plus_;
      while (plus_) {
         feedbackI.set(`${plus_}`, ((plus_ ? 4 : 1) << (Math.min(Math.abs(feedbackI.size), 4))));
         break;
      }
      while (plus_ && 3 > (feedbackI.size - 2)) {
         feedbackI = new Map([[`${feedbackI.size}`, 1]]);
         break;
      }
      if (!plus_) {
         feedbackI.set(`${plus_}`, 2 << (Math.min(3, Math.abs(feedbackI.size))));
      }
      const_b3V /= Math.max(3, parseInt(`${unimplementedviewW}`));
      infod.push(parseInt(`${unimplementedviewW}`));
   while (4.30 < (unimplementedviewW / (Math.max(filledl, 1))) && 3.78 < (unimplementedviewW / 4.30)) {
      filledl /= Math.max(parseFloat(`${eactA.length + 1}`), 2);
      break;
   }
      const_b3V >>= Math.min(Math.abs((String.fromCharCode(90,0) == gesturesP ? gesturesP.length : const_b3V)), 2);
      area1 -= (adultF == String.fromCharCode(83,0) ? infod.length : adultF.length);
   for (let i = 0; i < 1; i++) {
      bing7 = !bing7;
   }
   while (infod.length >= 2) {
      infod = [libzeusr.length];
      break;
   }
      bing7 = 34.90 < filledl;
       let attributedstringg = 0.0;
          let tickeda: Map<any, any> = new Map([[String.fromCharCode(122,111,110,101,115,0),false ], [String.fromCharCode(97,112,112,114,111,118,101,114,0),true ], [String.fromCharCode(101,120,112,101,99,116,0),true ]]);
          let armvaG = String.fromCharCode(115,112,100,105,102,0);
          let guideV: Map<any, any> = new Map([[String.fromCharCode(115,101,101,107,98,97,99,107,0),String.fromCharCode(114,101,109,105,120,105,110,103,0)], [String.fromCharCode(104,105,103,104,108,105,103,116,104,101,100,0),String.fromCharCode(109,109,115,104,0)]]);
         attributedstringg += parseFloat(`${guideV.size}`);
         tickeda = new Map([[`${tickeda.size}`, (String.fromCharCode(81,0) == armvaG ? armvaG.length : tickeda.size)]]);
         guideV = new Map([[`${tickeda.size}`, armvaG.length]]);
         attributedstringg /= Math.max(2, parseFloat(`${3 / (Math.max(10, parseInt(`${attributedstringg}`)))}`));
      let philippines5 = attributedstringg >= 9558215.0;
      do {
         attributedstringg *= parseFloat(`${parseInt(`${attributedstringg}`) % 3}`);
         if (philippines5) {
            break;
         }
      } while ((1.44 == (attributedstringg / (Math.max(5.54, 3))) || (attributedstringg - 5.54) == 5.56) && philippines5);
      rootU = infod.length > 40;
      infod.push(parseInt(`${unimplementedviewW}`) << (Math.min(libzeusr.length, 2)));
      const_b3V /= Math.max(5, const_b3V);
   while ((libzeusr.length >> (Math.min(Math.abs(1), 2))) <= 1 && 1 <= (adultF.length >> (Math.min(3, libzeusr.length)))) {
      libzeusr = [1];
      break;
   }
      const_b3V <<= Math.min(Math.abs(parseInt(`${unimplementedviewW}`) * 2), 5);
   for (let k = 0; k < 2; k++) {
      const_b3V <<= Math.min(5, sheetH.length);
   }
      rootU = bing7;

            setAdCountdownTime(prev => prev - 1);
          }, 1000)
        }
      },
      isPaused: isPaused,
      setCurrentTime: (time) => setCurrentTime(time),
    }));

    const onGoBack = () => {
       let signinupx: Array<any> = [701, 726];
    let rewindq = true;
    let zoomh = 5.0;
    let greyT = String.fromCharCode(105,110,100,101,110,116,0);
    let auto_ix = 2;
    let carousel2 = String.fromCharCode(115,105,122,101,115,0);
    let scrollviewc = 1;
    let viewsa = String.fromCharCode(111,103,103,0);
    let pagination8 = String.fromCharCode(100,105,97,103,111,110,97,108,0);
    let dialogk = 2.0;
    let grayx = String.fromCharCode(115,112,97,114,115,101,0);
    let libjsinspectorN = String.fromCharCode(97,116,116,105,98,117,116,101,0);
       let libfbS: Array<any> = [922, 511, 939];
       let moons: Map<any, any> = new Map([[String.fromCharCode(102,105,108,108,0),292], [String.fromCharCode(104,105,115,116,111,103,114,97,109,0),977], [String.fromCharCode(97,112,112,101,114,97,110,99,101,0),855]]);
       let blacki: Array<any> = [412, 800];
         moons = new Map([[`${moons.size}`, 3 >> (Math.min(1, Math.abs(moons.size)))]]);
      for (let g = 0; g < 2; g++) {
         blacki.push(moons.size >> (Math.min(Math.abs(2), 4)));
      }
         blacki = [2];
         moons.set(`${libfbS.length}`, libfbS.length);
      if (3 <= (3 / (Math.max(8, moons.size))) || 3 <= (blacki.length / (Math.max(moons.size, 8)))) {
         blacki = [blacki.length >> (Math.min(2, Math.abs(moons.size)))];
      }
          let sigmob3 = false;
         libfbS.push(blacki.length);
         sigmob3 = !sigmob3;
      let arrowy = 7203461 <= libfbS.length;
      do {
         libfbS = [2 | libfbS.length];
         if (arrowy) {
            break;
         }
      } while (arrowy && ((libfbS.length >> (Math.min(Math.abs(1), 2))) >= 1));
         moons = new Map([[`${moons.size}`, libfbS.length]]);
         moons = new Map([[`${moons.size}`, 3]]);
      zoomh += 1 * parseInt(`${dialogk}`);
      scrollviewc /= Math.max(5, (String.fromCharCode(103,0) == greyT ? auto_ix : greyT.length));
      signinupx.push(greyT.length | parseInt(`${dialogk}`));
   for (let s = 0; s < 2; s++) {
       let libcrashsdkb = 3.0;
      if (libcrashsdkb <= 3.10) {
         libcrashsdkb -= 1;
      }
       let stationsm = false;
       let tailA = false;
         stationsm = libcrashsdkb > 16.34;
      carousel2 += `${signinupx.length ^ parseInt(`${libcrashsdkb}`)}`;
   }
   if (viewsa.length > 5) {
       let type_81K = String.fromCharCode(118,105,115,105,116,111,114,0);
       let runtimev = 4;
       let final_eH = false;
       let ewardedO: Array<any> = [359, 69, 786];
      while ((runtimev % (Math.max(type_81K.length, 2))) < 3 && 3 < (runtimev % (Math.max(type_81K.length, 10)))) {
         runtimev ^= type_81K.length / 1;
         break;
      }
          let libglogo = String.fromCharCode(104,97,98,108,101,0);
         final_eH = libglogo.length <= 1 || !final_eH;
         type_81K = `${((final_eH ? 5 : 3) >> (Math.min(ewardedO.length, 1)))}`;
      while (!final_eH) {
         final_eH = ewardedO.length == 47 && type_81K == String.fromCharCode(66,0);
         break;
      }
      for (let e = 0; e < 3; e++) {
         final_eH = 63 < ewardedO.length;
      }
         runtimev -= 1;
      let buttonS = final_eH ? !final_eH : final_eH;
      do {
         final_eH = runtimev < 3 && !final_eH;
         if (buttonS) {
            break;
         }
      } while ((!final_eH) && buttonS);
          let whistlef = String.fromCharCode(112,105,120,108,101,116,0);
          let mbbidM: Array<any> = [891, 813];
          let videoj: Array<any> = [String.fromCharCode(97,108,114,101,97,100,121,0), String.fromCharCode(112,97,115,115,102,0)];
         type_81K = `${3 - runtimev}`;
         whistlef += "3";
         mbbidM.push(videoj.length);
         videoj.push(3 | videoj.length);
         runtimev &= 1;
          let philippines0: Array<any> = [421, 386, 650];
          let philippinesW = false;
          let type_atV = String.fromCharCode(100,101,99,105,115,105,111,110,0);
         ewardedO.push(ewardedO.length & runtimev);
         philippines0.push((3 + (philippinesW ? 1 : 2)));
         philippinesW = philippines0.length > type_atV.length;
         type_atV = "2";
          let lives = false;
          let math2 = 1.0;
          let bannerA: Array<any> = [String.fromCharCode(118,101,114,116,115,0), String.fromCharCode(98,121,116,101,108,101,110,0), String.fromCharCode(101,98,109,108,0)];
         runtimev -= 1 << (Math.min(1, type_81K.length));
         lives = !lives;
         math2 /= Math.max(parseFloat(`${parseInt(`${math2}`) >> (Math.min(5, Math.abs(1)))}`), 2);
         bannerA.push(bannerA.length);
         final_eH = ewardedO.length <= 2;
      signinupx = [pagination8.length];
   }
      greyT += `${scrollviewc * 2}`;

      if (onBack !== undefined) {

      pagination8 += "1";
      pagination8 = `${signinupx.length}`;
   let ewardedt = 7109005 >= auto_ix;
   do {
       let libpangleflippedC: Map<any, any> = new Map([[String.fromCharCode(97,115,110,0),true ], [String.fromCharCode(121,101,97,114,0),true ]]);
      while (!Array.from(libpangleflippedC.keys()).includes(`${libpangleflippedC.size}`)) {
         libpangleflippedC.set(`${libpangleflippedC.size}`, libpangleflippedC.size * 3);
         break;
      }
      for (let l = 0; l < 2; l++) {
         libpangleflippedC.set(`${libpangleflippedC.size}`, libpangleflippedC.size);
      }
         libpangleflippedC = new Map([[`${libpangleflippedC.size}`, libpangleflippedC.size]]);
      auto_ix %= Math.max(4, ((rewindq ? 1 : 3)));
      if (ewardedt) {
         break;
      }
   } while (ewardedt && (pagination8.length < auto_ix));
       let fileb = true;
       let p_unlocks = 5;
      if (2 > p_unlocks) {
          let libjsiQ = String.fromCharCode(101,115,116,105,109,97,116,101,115,0);
          let moviesd = String.fromCharCode(116,111,116,97,108,115,0);
          let borderlessd = 1.0;
          let gemfilep = 2.0;
         p_unlocks /= Math.max(1, parseInt(`${borderlessd}`));
         libjsiQ = `${libjsiQ.length}`;
         moviesd += `${2 + parseInt(`${gemfilep}`)}`;
         gemfilep -= parseFloat(`${2 & libjsiQ.length}`);
      }
      if (p_unlocks == 3) {
         fileb = p_unlocks < 10;
      }
      while (!fileb) {
         p_unlocks %= Math.max(((fileb ? 2 : 5) / (Math.max(10, p_unlocks))), 4);
         break;
      }
      if (3 >= (p_unlocks >> (Math.min(Math.abs(2), 1)))) {
         fileb = !fileb;
      }
      if (!fileb) {
         fileb = !fileb || 93 <= p_unlocks;
      }
          let crownK = String.fromCharCode(97,112,112,97,114,101,110,116,0);
          let unimplementedviewi = false;
          let cricket1: Array<any> = [910, 781, 430];
         fileb = !unimplementedviewi;
         crownK += `${crownK.length}`;
         unimplementedviewi = 92 <= crownK.length || 92 <= cricket1.length;
         cricket1.push(crownK.length);
      scrollviewc += 1 << (Math.min(2, Math.abs(parseInt(`${dialogk}`))));
       let matchm = true;
       let interstitiald = false;
          let currentE: Array<any> = [437, 710];
         interstitiald = currentE.includes(interstitiald);
         matchm = !interstitiald;
      let stringsP = interstitiald ? !interstitiald : interstitiald;
      do {
         interstitiald = !matchm;
         if (stringsP) {
            break;
         }
      } while ((matchm) && stringsP);
       let listx = 0.0;
      while ((5.28 * listx) > 5.39) {
         matchm = !interstitiald;
         break;
      }
       let gradlex = String.fromCharCode(97,99,99,101,115,115,111,114,0);
      scrollviewc ^= parseInt(`${zoomh}`) + 1;
      auto_ix -= parseInt(`${zoomh}`) - auto_ix;
        onBack();

   while ((signinupx.length + 2) > 3 || 3 > (2 + auto_ix)) {
      auto_ix -= parseInt(`${zoomh}`);
      break;
   }
   if (grayx.length == 4) {
      grayx += `${(greyT == String.fromCharCode(99,0) ? greyT.length : signinupx.length)}`;
   }
   while ((viewsa.length << (Math.min(Math.abs(1), 5))) >= 1 && 1 >= (1 << (Math.min(5, Math.abs(scrollviewc))))) {
      scrollviewc += viewsa.length & pagination8.length;
      break;
   }
      pagination8 += `${grayx.length}`;
       let latnS: Array<any> = [678, 375, 960];
       let actions2 = String.fromCharCode(109,98,116,114,101,101,0);
          let xvod_ = 2.0;
          let internetN = String.fromCharCode(98,97,100,114,101,113,0);
         latnS.push(internetN.length + 1);
         xvod_ /= Math.max(5, 3);
         internetN = `${parseInt(`${xvod_}`) ^ 1}`;
         latnS.push(actions2.length);
      viewsa = `${(String.fromCharCode(57,0) == carousel2 ? carousel2.length : latnS.length)}`;
   while (rewindq && 4.44 < (zoomh / 3.63)) {
       let rewardvideo9 = true;
       let becomeZ = String.fromCharCode(110,116,112,0);
       let bufferB = String.fromCharCode(112,117,114,103,101,0);
      while (!bufferB.includes(`${becomeZ.length}`)) {
         bufferB += `${((rewardvideo9 ? 2 : 5) % 3)}`;
         break;
      }
          let areaP = false;
          let penaltyK = 4.0;
         becomeZ = `${bufferB.length + parseInt(`${penaltyK}`)}`;
         areaP = !areaP;
         penaltyK += (parseFloat(`${(areaP ? 5 : 1)}`));
      while (becomeZ.length < 5 && rewardvideo9) {
          let orangev = String.fromCharCode(118,116,97,103,0);
          let interstitialD: Array<any> = [648, 421, 18];
          let x_positionz = 1.0;
          let rewardf = true;
         becomeZ = `${1 * bufferB.length}`;
         orangev += `${1 * parseInt(`${x_positionz}`)}`;
         interstitialD.push(3 + parseInt(`${x_positionz}`));
         rewardf = String.fromCharCode(89,0) == orangev && 19 == interstitialD.length;
         break;
      }
      let mbbanner3 = rewardvideo9 ? !rewardvideo9 : rewardvideo9;
      do {
         rewardvideo9 = !becomeZ.startsWith(`${rewardvideo9}`);
         if (mbbanner3) {
            break;
         }
      } while ((!rewardvideo9) && mbbanner3);
      for (let p = 0; p < 1; p++) {
         bufferB = `${becomeZ.length}`;
      }
      while (2 >= bufferB.length) {
         bufferB += `${bufferB.length - becomeZ.length}`;
         break;
      }
       let control9 = false;
      if (becomeZ.includes(`${rewardvideo9}`)) {
          let referrer9: Map<any, any> = new Map([[String.fromCharCode(105,110,118,111,108,118,101,100,0),72], [String.fromCharCode(100,105,115,112,108,97,121,101,100,0),394], [String.fromCharCode(115,117,112,101,114,115,99,114,105,112,116,0),229]]);
          let confirmationQ = 3.0;
          let androidE: Map<any, any> = new Map([[String.fromCharCode(99,101,110,116,101,114,105,110,103,0),true ], [String.fromCharCode(99,108,111,115,101,99,98,0),true ], [String.fromCharCode(114,118,100,97,116,97,0),true ]]);
         becomeZ = `${becomeZ.length}`;
         referrer9.set(`${androidE.size}`, 3 ^ referrer9.size);
         confirmationQ += 3;
         androidE = new Map([[`${referrer9.size}`, androidE.size]]);
      }
         bufferB = "1";
      zoomh += signinupx.length - 1;
      break;
   }
        lockOrientation("PORTRAIT");

   for (let d = 0; d < 3; d++) {
      dialogk += parseFloat(`${1}`);
   }
      auto_ix |= 1 << (Math.min(1, viewsa.length));
   for (let e = 0; e < 3; e++) {
      pagination8 = `${(greyT.length & (rewindq ? 3 : 3))}`;
   }
      dialogk /= Math.max(5, parseFloat(`${auto_ix}`));
   while (viewsa.length == 5) {
       let typingS: Map<any, any> = new Map([[String.fromCharCode(114,101,102,105,110,101,0),true ], [String.fromCharCode(104,95,54,51,95,109,97,105,110,98,117,110,100,108,101,0),true ], [String.fromCharCode(111,103,103,108,101,0),false ]]);
       let umengs = 0.0;
      let small7 = umengs <= 5111368.0;
      do {
         umengs -= typingS.size - 1;
         if (small7) {
            break;
         }
      } while ((Array.from(typingS.keys()).includes(`${umengs}`)) && small7);
      for (let s = 0; s < 2; s++) {
         umengs -= parseInt(`${umengs}`);
      }
      let const_nws = typingS.size <= 4950266;
      do {
          let crownA = 2;
          let saveo = true;
          let dplusw = String.fromCharCode(112,117,116,110,117,109,112,97,115,115,101,115,0);
          let borderlessL = String.fromCharCode(99,104,97,110,103,101,114,0);
         typingS = new Map([[`${crownA}`, (borderlessL == String.fromCharCode(116,0) ? crownA : borderlessL.length)]]);
         saveo = !saveo;
         dplusw = `${(dplusw == String.fromCharCode(73,0) ? dplusw.length : (saveo ? 3 : 3))}`;
         if (const_nws) {
            break;
         }
      } while (const_nws && (typingS.get(`${umengs}`) == null));
          let dplus5 = String.fromCharCode(114,103,98,97,108,101,0);
         typingS = new Map([[`${typingS.size}`, typingS.size & dplus5.length]]);
         umengs += 2;
      for (let d = 0; d < 1; d++) {
         typingS = new Map([[`${typingS.size}`, typingS.size % (Math.max(3, 2))]]);
      }
      scrollviewc *= pagination8.length << (Math.min(greyT.length, 4));
      break;
   }
      pagination8 = `${1 - parseInt(`${zoomh}`)}`;
        setIsFullScreen(false);
      } else {

      greyT = `${3 << (Math.min(1, pagination8.length))}`;
   let watcho = 8413726.0 >= zoomh;
   do {
       let catagoryG = 3.0;
       let filterO = String.fromCharCode(112,97,114,101,110,116,104,101,115,105,115,0);
       let detailsQ = String.fromCharCode(110,101,105,103,104,98,111,114,115,0);
       let auto_cA = String.fromCharCode(118,101,114,116,0);
       let unimplementedviewo = 0.0;
         detailsQ += `${parseInt(`${unimplementedviewo}`) >> (Math.min(Math.abs(1), 4))}`;
      if (4 < (parseInt(`${catagoryG}`) - 4) && 4 < (4 >> (Math.min(2, filterO.length)))) {
         filterO += `${(String.fromCharCode(106,0) == detailsQ ? detailsQ.length : filterO.length)}`;
      }
      if (3 == (detailsQ.length + parseInt(`${unimplementedviewo}`)) && (3 >> (Math.min(1, detailsQ.length))) == 3) {
         unimplementedviewo += parseFloat(`${detailsQ.length}`);
      }
      while (filterO.includes(`${catagoryG}`)) {
         catagoryG += parseFloat(`${2 & parseInt(`${unimplementedviewo}`)}`);
         break;
      }
      let countdownJ = 5556741.0 <= unimplementedviewo;
      do {
         unimplementedviewo /= Math.max(parseFloat(`${auto_cA.length / 3}`), 1);
         if (countdownJ) {
            break;
         }
      } while ((1.36 > (unimplementedviewo + catagoryG)) && countdownJ);
      let termsL = unimplementedviewo >= 5510546.0;
      do {
         unimplementedviewo -= parseFloat(`${2}`);
         if (termsL) {
            break;
         }
      } while (termsL && (5.4 <= (2.80 * unimplementedviewo)));
       let codegenr = true;
       let leftq = true;
      if (4 < auto_cA.length) {
         auto_cA += `${(auto_cA == String.fromCharCode(104,0) ? parseInt(`${unimplementedviewo}`) : auto_cA.length)}`;
      }
         codegenr = catagoryG < 85.15 && filterO.length < 63;
         leftq = !codegenr;
       let plashJ: Array<any> = [315, 85];
       let notification5: Array<any> = [648, 468, 705];
      let mutedE = auto_cA == String.fromCharCode(105,112,119,51,53,104,55,104,116,122,0);
      do {
         auto_cA += `${((leftq ? 5 : 4) * parseInt(`${catagoryG}`))}`;
         if (mutedE) {
            break;
         }
      } while (mutedE && (auto_cA.endsWith(`${notification5.length}`)));
       let gradlewH = 5;
       let dropdowna = 1;
         plashJ = [plashJ.length];
      let libmapbufferjniM = 6574431.0 >= catagoryG;
      do {
         catagoryG *= parseFloat(`${plashJ.length}`);
         if (libmapbufferjniM) {
            break;
         }
      } while (libmapbufferjniM && (2 >= notification5.length));
      zoomh -= ((rewindq ? 2 : 3));
      if (watcho) {
         break;
      }
   } while (watcho && ((zoomh - 5.52) < 4.40));
   if (viewsa.length == grayx.length) {
      grayx = `${parseInt(`${dialogk}`) - pagination8.length}`;
   }
   let dropdownV = 8845854.0 >= dialogk;
   do {
      dialogk /= Math.max(3, parseFloat(`${signinupx.length}`));
      if (dropdownV) {
         break;
      }
   } while (dropdownV && (3.24 <= (dialogk + scrollviewc)));
      greyT = `${viewsa.length}`;
      signinupx = [greyT.length];
        

   let leagueb = 7575537.0 <= zoomh;
   do {
      zoomh /= Math.max(greyT.length * 2, 3);
      if (leagueb) {
         break;
      }
   } while (leagueb && ((zoomh / 1.47) > 1.53));
   for (let t = 0; t < 1; t++) {
      rewindq = !rewindq;
   }
   let filled3 = String.fromCharCode(117,97,105,121,95,54,119,122,98,0) == libjsinspectorN;
   do {
      libjsinspectorN = `${((rewindq ? 5 : 3))}`;
      if (filled3) {
         break;
      }
   } while (((libjsinspectorN.length / 2) <= 5 && 1 <= (libjsinspectorN.length / (Math.max(2, 2)))) && filled3);
      libjsinspectorN = `${grayx.length}`;
   while (auto_ix >= 2 && 3 >= (auto_ix / 2)) {
       let footballo = false;
       let default_hb9 = String.fromCharCode(120,121,119,104,0);
       let redirectu = 0;
       let stationsF = false;
       let chartZ = 2.0;
      for (let p = 0; p < 1; p++) {
         footballo = 40.100 > chartZ || stationsF;
      }
         chartZ /= Math.max(2, parseFloat(`${redirectu / (Math.max(3, default_hb9.length))}`));
      while (!stationsF) {
         footballo = redirectu > 57;
         break;
      }
      if (footballo) {
          let gesture3 = String.fromCharCode(98,105,116,114,101,100,117,99,116,105,111,110,0);
          let logo6 = String.fromCharCode(98,97,100,103,101,115,0);
         chartZ += parseFloat(`${1}`);
         gesture3 = `${gesture3.length / (Math.max(1, 5))}`;
         logo6 = `${gesture3.length / (Math.max(7, logo6.length))}`;
      }
         stationsF = 93.65 > chartZ && 45 > redirectu;
         stationsF = redirectu == parseInt(`${chartZ}`);
          let entry_ = 1.0;
         redirectu %= Math.max(1, 5);
         entry_ *= parseInt(`${entry_}`) ^ 2;
         redirectu ^= 2 % (Math.max(parseInt(`${chartZ}`), 2));
         footballo = default_hb9.endsWith(`${chartZ}`);
      while (redirectu > default_hb9.length) {
          let thailand9: Array<any> = [724, 548, 108];
          let rootK = true;
          let sinaD = 0;
          let cancelZ = true;
         redirectu <<= Math.min(Math.abs(thailand9.length ^ redirectu), 4);
         thailand9.push(3);
         rootK = sinaD > 84;
         sinaD /= Math.max(((rootK ? 4 : 5) * (cancelZ ? 3 : 4)), 4);
         cancelZ = !cancelZ;
         break;
      }
      while (default_hb9.startsWith(`${footballo}`)) {
         default_hb9 += `${parseInt(`${chartZ}`) / (Math.max(4, default_hb9.length))}`;
         break;
      }
      auto_ix ^= parseInt(`${zoomh}`);
      break;
   }
       let colorsz = 1.0;
       let floaterk = String.fromCharCode(105,112,108,99,111,110,118,107,101,114,110,101,108,0);
       let hookT = 5.0;
         colorsz += parseFloat(`${parseInt(`${hookT}`)}`);
      for (let v = 0; v < 2; v++) {
          let turnB: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,101,0),String.fromCharCode(113,122,98,105,110,0)], [String.fromCharCode(109,117,108,116,105,112,108,101,114,115,0),String.fromCharCode(103,101,116,112,0)]]);
         floaterk = `${parseInt(`${hookT}`)}`;
         turnB = new Map([[`${turnB.size}`, turnB.size]]);
      }
      while (!floaterk.startsWith(`${colorsz}`)) {
         colorsz += parseFloat(`${floaterk.length}`);
         break;
      }
         floaterk += `${parseInt(`${hookT}`) & floaterk.length}`;
      if (1 <= (1 | floaterk.length)) {
          let formW = String.fromCharCode(99,111,110,115,116,97,110,116,115,0);
         floaterk = `${parseInt(`${colorsz}`)}`;
         formW = `${formW.length >> (Math.min(formW.length, 2))}`;
      }
      if (hookT > 3.65) {
         colorsz -= parseFloat(`${parseInt(`${colorsz}`)}`);
      }
      for (let s = 0; s < 2; s++) {
          let nativeU = 1;
         hookT /= Math.max(4, 1 % (Math.max(5, nativeU)));
      }
         hookT += parseInt(`${colorsz}`) << (Math.min(1, Math.abs(1)));
         colorsz += parseFloat(`${parseInt(`${colorsz}`) - parseInt(`${hookT}`)}`);
      carousel2 = `${auto_ix ^ greyT.length}`;
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

            if (Platform.OS === "android") {
              navigation.setOptions({ orientation: "portrait" });
            }
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
       let editJ: Array<any> = [700, 393];
    let d_counto: Array<any> = [671, 306];
    let pressure0: Map<any, any> = new Map([[String.fromCharCode(120,95,53,53,95,101,114,97,115,101,114,0),475], [String.fromCharCode(118,115,102,114,97,109,101,0),235], [String.fromCharCode(115,117,98,116,105,116,108,101,115,0),883]]);
    let adultA = false;
    let main_p4: Array<any> = [955, 435];
    let verticali = 1;
    let catalogX = 1.0;
    let configm = true;
    let themeD = 5;
    let dark0 = String.fromCharCode(117,110,105,0);
   if (pressure0.size <= 2) {
      d_counto.push(((adultA ? 3 : 3) | parseInt(`${catalogX}`)));
   }
   for (let c = 0; c < 1; c++) {
      verticali -= pressure0.size;
   }
   for (let t = 0; t < 2; t++) {
      configm = !adultA;
   }
       let watch2 = 2;
       let stationr: Map<any, any> = new Map([[String.fromCharCode(98,105,116,101,0),String.fromCharCode(121,117,118,97,0)], [String.fromCharCode(112,105,110,107,0),String.fromCharCode(118,115,117,98,113,0)]]);
       let time_znt: Map<any, any> = new Map([[String.fromCharCode(118,111,105,99,101,0),5], [String.fromCharCode(98,97,115,105,115,0),573]]);
          let changeQ: Array<any> = [949, 581];
          let models7 = true;
          let editu = true;
         watch2 |= 3 * watch2;
         changeQ.push((1 << (Math.min(Math.abs((editu ? 1 : 2)), 4))));
         models7 = ((changeQ.length | (models7 ? changeQ.length : 85)) == 85);
         editu = models7 && editu;
      for (let b = 0; b < 1; b++) {
         watch2 &= time_znt.size >> (Math.min(5, Math.abs(stationr.size)));
      }
      if (watch2 > 4) {
          let invitew = String.fromCharCode(111,99,99,117,114,114,101,110,99,101,115,0);
         watch2 ^= time_znt.size ^ stationr.size;
         invitew = `${invitew.length | 2}`;
      }
         time_znt = new Map([[`${stationr.size}`, stationr.size]]);
      while (stationr.size > time_znt.size) {
          let pangleo = 5;
          let s_managerb = 0.0;
          let page9 = 3;
          let componentB = 2.0;
         stationr.set(`${s_managerb}`, pangleo << (Math.min(5, Math.abs(2))));
         pangleo *= parseInt(`${componentB}`) % 1;
         s_managerb *= page9 << (Math.min(Math.abs(parseInt(`${componentB}`)), 4));
         page9 %= Math.max(3, 5);
         break;
      }
       let unimplementedviewL = false;
      for (let x = 0; x < 1; x++) {
         stationr.set(`${stationr.size}`, time_znt.size);
      }
          let form7: Map<any, any> = new Map([[String.fromCharCode(97,108,103,111,114,105,116,104,109,0),269], [String.fromCharCode(106,100,109,97,115,116,101,114,0),246]]);
          let pointb = String.fromCharCode(110,105,109,97,116,105,111,110,0);
         stationr.set(`${stationr.size}`, 2);
         form7.set(pointb, pointb.length | 2);
      if (stationr.size == watch2) {
          let rewind2 = String.fromCharCode(116,114,97,110,115,99,101,105,118,101,114,115,0);
          let settingT = 0.0;
          let mbnativeG = 4.0;
          let animationsI = String.fromCharCode(99,108,97,115,104,101,100,0);
         stationr = new Map([[`${mbnativeG}`, watch2]]);
         rewind2 += `${parseInt(`${settingT}`)}`;
         settingT -= parseFloat(`${animationsI.length >> (Math.min(1, Math.abs(parseInt(`${settingT}`))))}`);
         mbnativeG += (rewind2 == String.fromCharCode(55,0) ? rewind2.length : parseInt(`${settingT}`));
         animationsI = `${parseInt(`${settingT}`) % 1}`;
      }
      adultA = (stationr.size - editJ.length) == 85;
   if (!adultA) {
      adultA = main_p4.length == 30 && !configm;
   }
   while (4 > main_p4.length) {
      adultA = (verticali / (Math.max(catalogX, 1))) <= 64;
      break;
   }
   if (configm) {
      main_p4 = [2 - main_p4.length];
   }
   if (adultA) {
       let rewardvideof = 0.0;
       let manifestv = 4;
       let directJ = 3;
      if ((4 * manifestv) >= 3 && 5 >= (manifestv ^ 4)) {
         manifestv &= 3 + manifestv;
      }
       let infol = String.fromCharCode(100,101,114,105,118,97,116,105,118,101,0);
       let suggestionv = String.fromCharCode(99,114,97,115,104,0);
      let modeh = manifestv >= 5099597;
      do {
         manifestv += 3 ^ directJ;
         if (modeh) {
            break;
         }
      } while (modeh && (5 < directJ));
          let libsgcoreW: Map<any, any> = new Map([[String.fromCharCode(112,111,108,121,109,101,115,104,0),491], [String.fromCharCode(111,109,101,103,97,0),335]]);
          let schedulev = String.fromCharCode(118,101,114,105,102,105,99,97,116,105,111,110,0);
          let default__ta: Array<any> = [378, 59, 695];
         suggestionv = `${schedulev.length << (Math.min(Math.abs(2), 2))}`;
         libsgcoreW.set(`${default__ta.length}`, 2);
         schedulev = `${2 + default__ta.length}`;
         infol = `${1 - parseInt(`${rewardvideof}`)}`;
      if ((manifestv + rewardvideof) < 3.42 && 3 < (2 - manifestv)) {
          let vignetteO = 5;
          let securityH = String.fromCharCode(97,95,56,95,111,111,108,98,97,114,0);
          let ballA = 3.0;
          let editr = 5.0;
         manifestv >>= Math.min(4, Math.abs(manifestv + 1));
         vignetteO <<= Math.min(4, Math.abs(parseInt(`${editr}`)));
         securityH = `${parseInt(`${editr}`) / 3}`;
         ballA += parseInt(`${ballA}`) ^ securityH.length;
      }
         suggestionv = `${directJ / 2}`;
      for (let w = 0; w < 1; w++) {
         manifestv *= infol.length >> (Math.min(Math.abs(2), 5));
      }
         infol += `${parseInt(`${rewardvideof}`)}`;
      main_p4 = [3];
   }
   while ((4 - verticali) < 1 && 4 < (main_p4.length - verticali)) {
      verticali /= Math.max(3, main_p4.length);
      break;
   }
   if (!adultA) {
      adultA = (54 == (pressure0.size * (!adultA ? 54 : pressure0.size)));
   }
      verticali <<= Math.min(3, Math.abs(editJ.length / (Math.max(2, 10))));
   for (let c = 0; c < 3; c++) {
       let styleV = String.fromCharCode(97,108,97,99,100,115,112,0);
       let control4: Array<any> = [770, 428];
       let volumeM = true;
         volumeM = (((volumeM ? control4.length : 21) % (Math.max(control4.length, 2))) > 21);
         styleV += `${((volumeM ? 4 : 5) << (Math.min(control4.length, 2)))}`;
      for (let a = 0; a < 2; a++) {
         volumeM = (23 > ((!volumeM ? control4.length : 23) * control4.length));
      }
      if (4 > (4 / (Math.max(3, control4.length)))) {
         volumeM = (styleV.length - control4.length) > 79;
      }
      if (control4.length < 2 || (control4.length + 2) < 1) {
         control4 = [3];
      }
      let viewerv = volumeM ? !volumeM : volumeM;
      do {
         volumeM = control4.length < 96 || styleV.length < 96;
         if (viewerv) {
            break;
         }
      } while (((control4.length << (Math.min(Math.abs(1), 1))) <= 2 || !volumeM) && viewerv);
      for (let o = 0; o < 1; o++) {
          let scrollviewc = 1.0;
         control4 = [(String.fromCharCode(116,0) == styleV ? styleV.length : parseInt(`${scrollviewc}`))];
      }
          let libswresamples = 3.0;
          let clockf = String.fromCharCode(97,117,116,104,114,111,114,105,122,97,116,105,111,110,0);
         styleV = `${styleV.length}`;
         libswresamples -= parseFloat(`${parseInt(`${libswresamples}`)}`);
         clockf = `${clockf.length}`;
      for (let g = 0; g < 2; g++) {
          let iinit_sL = String.fromCharCode(99,111,109,112,97,116,0);
          let bridgen: Map<any, any> = new Map([[String.fromCharCode(98,117,102,108,101,110,0),false ], [String.fromCharCode(116,114,97,106,101,99,116,111,114,121,0),false ], [String.fromCharCode(112,97,114,97,109,99,104,97,110,103,101,0),false ]]);
          let valuesm = String.fromCharCode(101,109,111,106,105,0);
          let downloadedu = String.fromCharCode(105,110,112,117,116,0);
         control4 = [(String.fromCharCode(104,0) == valuesm ? control4.length : valuesm.length)];
         iinit_sL = `${(downloadedu == String.fromCharCode(66,0) ? downloadedu.length : bridgen.size)}`;
         bridgen.set(`${downloadedu}`, 3);
      }
      pressure0 = new Map([[`${catalogX}`, verticali]]);
   }

        console.log("err save vod!");

       let scrollviewl = 2.0;
         scrollviewl /= Math.max(parseFloat(`${parseInt(`${scrollviewl}`)}`), 4);
      if (4.33 <= scrollviewl) {
          let homeX = String.fromCharCode(105,109,112,114,101,115,115,105,111,110,115,0);
          let clearP = String.fromCharCode(116,111,97,115,116,0);
          let final_5_R = String.fromCharCode(99,112,117,102,108,97,103,115,0);
          let descm: Array<any> = [835, 8, 558];
          let nativemodules = 4;
         scrollviewl /= Math.max(5, parseFloat(`${clearP.length << (Math.min(Math.abs(2), 1))}`));
         homeX += `${homeX.length}`;
         clearP += "1";
         final_5_R = "1";
         descm = [final_5_R.length];
         nativemodules >>= Math.min(Math.abs(descm.length % 1), 3);
      }
      while ((scrollviewl + 2.76) >= 2.33 && (2.76 + scrollviewl) >= 1.8) {
         scrollviewl += parseFloat(`${parseInt(`${scrollviewl}`) + parseInt(`${scrollviewl}`)}`);
         break;
      }
      editJ = [2 ^ verticali];
   while (main_p4.includes(themeD)) {
      themeD -= 1 & d_counto.length;
      break;
   }
      d_counto = [1];
      adultA = (themeD * editJ.length) < 63;
      configm = d_counto.length == pressure0.size;
   if ((2 + main_p4.length) < 3 && !adultA) {
      main_p4.push(d_counto.length ^ 1);
   }
      pressure0.set(`${d_counto.length}`, d_counto.length % (Math.max(9, pressure0.size)));
   let orangex = main_p4.length >= 7895069;
   do {
       let modev = false;
       let settingh = 0.0;
       let eact2 = 5;
      let eactL = eact2 <= 6062830;
      do {
          let yingT = String.fromCharCode(101,120,101,99,117,116,105,110,103,0);
          let humidityG = String.fromCharCode(115,108,111,112,101,0);
         eact2 <<= Math.min(5, Math.abs(2 - parseInt(`${settingh}`)));
         yingT += `${yingT.length}`;
         humidityG += `${yingT.length | 2}`;
         if (eactL) {
            break;
         }
      } while ((!modev) && eactL);
         settingh /= Math.max(parseFloat(`${parseInt(`${settingh}`) << (Math.min(5, Math.abs(1)))}`), 1);
         settingh += parseFloat(`${2 - parseInt(`${settingh}`)}`);
         modev = eact2 < parseInt(`${settingh}`);
         modev = !modev;
      while (!modev) {
         eact2 |= parseInt(`${settingh}`) * 3;
         break;
      }
         eact2 <<= Math.min(4, Math.abs(3));
      for (let q = 0; q < 3; q++) {
          let robotoN = 2;
          let lessN = String.fromCharCode(110,101,108,108,121,109,111,115,101,114,0);
          let runtimeschedulerN = 3;
          let currentj = 1.0;
          let megaphoneW: Array<any> = [String.fromCharCode(115,117,109,0), String.fromCharCode(112,111,115,116,98,111,120,0)];
         settingh *= parseFloat(`${parseInt(`${settingh}`)}`);
         robotoN *= 3 | parseInt(`${currentj}`);
         lessN += `${runtimeschedulerN + 1}`;
         runtimeschedulerN -= 1 + robotoN;
         currentj /= Math.max(3, 1);
         megaphoneW.push(robotoN | 1);
      }
         settingh -= parseFloat(`${2 ^ parseInt(`${settingh}`)}`);
      main_p4 = [3 / (Math.max(1, parseInt(`${catalogX}`)))];
      if (orangex) {
         break;
      }
   } while (orangex && (3 <= (4 & main_p4.length) && (catalogX - parseFloat(`${main_p4.length}`)) <= 2.54));
   if (!editJ.includes(d_counto.length)) {
      d_counto = [((adultA ? 3 : 3) * 3)];
   }
   let redirectR = 8887716 <= pressure0.size;
   do {
       let animationsS: Array<any> = [509, 363];
       let skip_ = String.fromCharCode(109,97,114,107,115,0);
       let default_ng_ = String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,0);
         animationsS.push(default_ng_.length);
      for (let q = 0; q < 2; q++) {
          let attributedstringf = String.fromCharCode(100,101,102,101,114,0);
          let materialq: Array<any> = [String.fromCharCode(113,116,114,108,101,0), String.fromCharCode(99,117,108,115,104,105,102,116,0)];
         default_ng_ += `${default_ng_.length}`;
         attributedstringf += "1";
         materialq.push((attributedstringf == String.fromCharCode(51,0) ? attributedstringf.length : materialq.length));
      }
      pressure0 = new Map([[`${editJ.length}`, 2]]);
      if (redirectR) {
         break;
      }
   } while ((4 < (d_counto.length - pressure0.size) || (4 - d_counto.length) < 4) && redirectR);
       let descN = 5.0;
       let native8 = String.fromCharCode(116,97,115,107,0);
       let reminderz: Map<any, any> = new Map([[String.fromCharCode(105,110,118,111,99,97,116,105,111,110,0),541], [String.fromCharCode(102,99,117,110,112,117,98,108,105,115,104,0),13], [String.fromCharCode(99,111,115,113,105,0),132]]);
      for (let i = 0; i < 3; i++) {
         native8 += `${native8.length}`;
      }
         reminderz = new Map([[`${reminderz.size}`, (native8 == String.fromCharCode(95,0) ? reminderz.size : native8.length)]]);
      let transferK = native8 == String.fromCharCode(107,51,105,95,99,107,0);
      do {
         native8 = `${native8.length}`;
         if (transferK) {
            break;
         }
      } while (transferK && ((descN - parseFloat(`${native8.length}`)) >= 2.99 && 2 >= (native8.length / 4)));
         reminderz.set(`${native8}`, native8.length % 2);
      for (let t = 0; t < 1; t++) {
         descN /= Math.max(2, parseFloat(`${native8.length}`));
      }
      if (3.61 > descN) {
         descN -= parseFloat(`${2}`);
      }
      let penaltyk = 7645886.0 <= descN;
      do {
         descN *= parseFloat(`${1}`);
         if (penaltyk) {
            break;
         }
      } while (penaltyk && ((reminderz.size & 2) < 5));
         native8 = `${reminderz.size}`;
         reminderz.set(native8, native8.length);
      pressure0.set(native8, native8.length);
       let modelu: Map<any, any> = new Map([[String.fromCharCode(102,105,114,115,116,0),String.fromCharCode(107,101,121,115,112,101,99,0)], [String.fromCharCode(115,121,115,108,111,103,0),String.fromCharCode(112,112,99,99,111,109,109,111,110,0)], [String.fromCharCode(112,97,100,100,105,110,103,0),String.fromCharCode(115,99,101,101,110,0)]]);
         modelu.set(`${modelu.size}`, 3);
      for (let q = 0; q < 2; q++) {
          let final_yn = String.fromCharCode(101,114,118,101,114,0);
          let bingz = String.fromCharCode(112,97,114,97,108,108,101,108,0);
          let neonk: Array<any> = [474, 140, 30];
          let libpangleflippedX = 1.0;
          let gmailS = 4.0;
         modelu = new Map([[`${gmailS}`, (final_yn == String.fromCharCode(81,0) ? parseInt(`${gmailS}`) : final_yn.length)]]);
         bingz = `${parseInt(`${libpangleflippedX}`) | 2}`;
         neonk = [(String.fromCharCode(76,0) == bingz ? neonk.length : bingz.length)];
         libpangleflippedX += parseFloat(`${bingz.length}`);
      }
         modelu = new Map([[`${modelu.size}`, 1]]);
      dark0 += `${parseInt(`${catalogX}`) ^ editJ.length}`;
        console.log(err);
      }
    };

    const deviceOrientationHandle = () => {
       let minimizeq = String.fromCharCode(110,111,110,122,101,114,111,0);
    let updatese: Array<any> = [String.fromCharCode(112,111,108,105,99,101,0), String.fromCharCode(101,120,99,105,116,97,116,105,111,110,0), String.fromCharCode(101,118,101,114,121,98,111,100,121,0)];
    let viewsp: Map<any, any> = new Map([[String.fromCharCode(116,105,99,107,115,0),String.fromCharCode(109,118,100,97,116,97,0)], [String.fromCharCode(114,101,103,101,120,0),String.fromCharCode(98,108,111,119,102,105,115,104,0)], [String.fromCharCode(115,99,104,101,100,117,108,101,100,0),String.fromCharCode(105,100,99,116,120,0)]]);
    let plashK = String.fromCharCode(112,97,99,107,101,114,95,50,95,50,51,0);
    let sigmobw: Array<any> = [253, 469, 652];
    let projectU = 2.0;
    let smalll = 0;
    let assistP = 5.0;
    let colorsZ: Map<any, any> = new Map([[String.fromCharCode(115,117,98,112,111,105,110,116,0),658], [String.fromCharCode(105,110,99,114,109,101,114,103,101,0),81], [String.fromCharCode(100,101,99,114,121,112,116,0),50]]);
    let foregroundp = true;
    let r_position3 = String.fromCharCode(112,117,116,105,110,116,0);
    let chinasamew = 4;
   for (let m = 0; m < 3; m++) {
       let appsF = 4.0;
       let circlet = String.fromCharCode(118,101,110,117,101,115,0);
      if (circlet.endsWith(`${appsF}`)) {
          let shootp: Array<any> = [710, 384];
          let setting_: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,111,108,108,101,114,95,115,95,54,0),649], [String.fromCharCode(107,101,121,98,117,102,0),657]]);
         circlet += "3";
         shootp = [setting_.size - shootp.length];
         setting_.set(`${shootp.length}`, setting_.size);
      }
         circlet = `${(circlet == String.fromCharCode(71,0) ? circlet.length : parseInt(`${appsF}`))}`;
       let libfbjniq = 1;
          let settingsX = String.fromCharCode(110,111,114,109,97,108,0);
          let drag6 = 2.0;
         libfbjniq += 2 | settingsX.length;
         settingsX += `${parseInt(`${drag6}`) - 3}`;
         drag6 += parseFloat(`${parseInt(`${drag6}`) * 1}`);
      for (let a = 0; a < 1; a++) {
         circlet += "2";
      }
         appsF += circlet.length << (Math.min(1, Math.abs(libfbjniq)));
      minimizeq = `${parseInt(`${projectU}`) & sigmobw.length}`;
   }
      viewsp = new Map([[`${colorsZ.size}`, 1]]);
      projectU /= Math.max(4, parseFloat(`${viewsp.size}`));

      

       let buildI: Array<any> = [783, 281];
          let leagueP = 3;
          let shirtX: Array<any> = [545, 908, 406];
         buildI = [3];
         leagueP ^= 3 | leagueP;
         shirtX.push(leagueP);
         buildI = [buildI.length ^ 1];
         buildI = [3 | buildI.length];
      viewsp.set(`${foregroundp}`, minimizeq.length % (Math.max(2, 4)));
       let readd: Array<any> = [580, 141, 172];
       let reducerO = true;
         readd = [(1 - (reducerO ? 4 : 1))];
         readd.push(1);
         reducerO = (((reducerO ? readd.length : 18) & readd.length) <= 18);
      for (let i = 0; i < 1; i++) {
          let placeholderh = String.fromCharCode(97,99,99,117,109,117,108,97,116,111,114,0);
          let buttonK = String.fromCharCode(115,105,103,110,105,102,105,99,97,110,99,101,0);
          let pingo = String.fromCharCode(108,101,118,101,108,115,0);
         readd.push(readd.length >> (Math.min(placeholderh.length, 5)));
         placeholderh = `${buttonK.length ^ 3}`;
         buttonK += `${(String.fromCharCode(72,0) == pingo ? pingo.length : buttonK.length)}`;
      }
       let friendsD = String.fromCharCode(100,101,118,105,100,101,0);
       let libtano = String.fromCharCode(115,104,105,102,116,0);
         reducerO = friendsD == String.fromCharCode(111,0);
      viewsp = new Map([[`${readd.length}`, plashK.length]]);
   while (foregroundp) {
       let libreactnativejniD: Array<any> = [245, 700, 357];
       let catalog2 = String.fromCharCode(114,105,99,104,0);
       let libyogah = String.fromCharCode(112,108,97,121,97,98,108,101,0);
       let buildj = 2.0;
       let libyoga3: Map<any, any> = new Map([[String.fromCharCode(104,111,116,0),218], [String.fromCharCode(115,98,111,120,0),214], [String.fromCharCode(116,111,112,109,111,115,116,0),566]]);
      if (libyogah == String.fromCharCode(119,0) && catalog2 == String.fromCharCode(53,0)) {
         catalog2 += `${libyogah.length % (Math.max(2, 5))}`;
      }
         catalog2 += `${libyogah.length / (Math.max(2, libreactnativejniD.length))}`;
      if (!Array.from(libyoga3.keys()).includes(`${libreactnativejniD.length}`)) {
         libyoga3 = new Map([[`${libyoga3.size}`, libreactnativejniD.length - libyoga3.size]]);
      }
      let libtanU = String.fromCharCode(51,101,119,54,50,0) == libyogah;
      do {
         libyogah += `${libyogah.length % 1}`;
         if (libtanU) {
            break;
         }
      } while ((libyogah.length == catalog2.length) && libtanU);
       let penaltyO = 0.0;
       let catalogE = 5.0;
       let libswscalep: Array<any> = [433, 670];
       let cancelE: Array<any> = [975, 163];
         libyogah = `${libyogah.length}`;
         libyogah = "1";
      let mbjscommonl = String.fromCharCode(110,121,50,53,97,56,52,95,106,0) == libyogah;
      do {
          let emptyC = 3;
          let tickedD = 2.0;
          let libturbomodulejsijni_ = String.fromCharCode(100,111,119,110,108,111,97,100,101,114,0);
         libyogah = `${libreactnativejniD.length}`;
         emptyC *= libturbomodulejsijni_.length;
         tickedD += 3 + parseInt(`${tickedD}`);
         libturbomodulejsijni_ = `${parseInt(`${tickedD}`) + 1}`;
         if (mbjscommonl) {
            break;
         }
      } while ((1 == (libyogah.length * parseInt(`${catalogE}`)) || (libyogah.length * parseInt(`${catalogE}`)) == 1) && mbjscommonl);
      while (5.87 <= buildj) {
          let searchp = String.fromCharCode(115,101,114,105,97,108,105,122,101,114,0);
          let mimok = String.fromCharCode(105,110,112,117,116,115,0);
          let klevin4 = 4.0;
         buildj -= parseFloat(`${cancelE.length / 3}`);
         searchp += `${parseInt(`${klevin4}`)}`;
         mimok += `${mimok.length}`;
         klevin4 += parseFloat(`${1}`);
         break;
      }
      for (let q = 0; q < 1; q++) {
          let mapbufferF = 1;
          let footballL = true;
         libswscalep.push(cancelE.length * 1);
         mapbufferF ^= 2;
         footballL = mapbufferF <= 96 || footballL;
      }
          let champion2 = 0;
         catalog2 = `${2 * libswscalep.length}`;
         champion2 ^= champion2;
      while (!libreactnativejniD.includes(catalogE)) {
         catalogE /= Math.max(1, parseFloat(`${1}`));
         break;
      }
      for (let u = 0; u < 3; u++) {
          let expiredm = 5.0;
          let complete3: Array<any> = [9, 856];
          let hongkongS = 3.0;
          let fadfdeebbbfdabbbabdadfaaddaai = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,100,0);
         catalog2 = `${parseInt(`${catalogE}`)}`;
         expiredm -= parseFloat(`${fadfdeebbbfdabbbabdadfaaddaai.length}`);
         complete3.push(1 - parseInt(`${hongkongS}`));
         hongkongS *= parseInt(`${hongkongS}`) << (Math.min(Math.abs(2), 5));
         fadfdeebbbfdabbbabdadfaaddaai = `${parseInt(`${expiredm}`) - 3}`;
      }
      let overlayx = libswscalep.length >= 6211137;
      do {
          let klevin_ = String.fromCharCode(102,99,111,100,101,0);
          let show4: Array<any> = [String.fromCharCode(115,111,117,110,100,0), String.fromCharCode(114,101,99,112,0)];
          let stringso = 5.0;
          let reminderA = 5;
         libswscalep.push(catalog2.length % 2);
         klevin_ += `${parseInt(`${stringso}`) & show4.length}`;
         show4 = [3 | show4.length];
         stringso /= Math.max(parseFloat(`${3 ^ parseInt(`${stringso}`)}`), 2);
         reminderA -= parseInt(`${stringso}`) / (Math.max(show4.length, 7));
         if (overlayx) {
            break;
         }
      } while (((2 % (Math.max(9, libswscalep.length))) <= 2 || (libswscalep.length % (Math.max(cancelE.length, 3))) <= 2) && overlayx);
      foregroundp = minimizeq.length >= colorsZ.size;
      break;
   }
      if (
        devicesOrientation === "LANDSCAPE-LEFT" ||
        devicesOrientation === "LANDSCAPE-RIGHT"
      ) {

       let mergerV = String.fromCharCode(99,104,117,110,107,121,99,104,117,110,107,121,0);
       let snewarchdefaultsW = 3.0;
       let libjsinspectore = 3.0;
          let mbjscommone = String.fromCharCode(120,95,49,48,0);
          let typingN = 0.0;
          let megaphoneg: Map<any, any> = new Map([[String.fromCharCode(118,101,114,115,105,111,110,0),434], [String.fromCharCode(117,110,100,101,114,115,99,111,114,101,0),295]]);
         libjsinspectore /= Math.max(parseFloat(`${3 ^ mergerV.length}`), 5);
         mbjscommone = `${mbjscommone.length * megaphoneg.size}`;
         typingN -= parseInt(`${typingN}`);
         megaphoneg = new Map([[`${megaphoneg.size}`, 3 / (Math.max(10, megaphoneg.size))]]);
      while ((mergerV.length & 4) >= 5) {
          let gradlewb: Map<any, any> = new Map([[String.fromCharCode(116,111,111,108,116,105,112,115,0),false ], [String.fromCharCode(99,111,114,110,101,114,0),false ], [String.fromCharCode(97,115,115,112,111,114,116,0),true ]]);
          let banner6 = 1;
          let mountingn: Array<any> = [String.fromCharCode(100,105,112,111,115,97,98,108,101,0), String.fromCharCode(120,102,97,99,101,0)];
          let hongkongF = String.fromCharCode(116,111,117,99,104,101,115,0);
         mergerV += `${banner6 << (Math.min(Math.abs(gradlewb.size), 5))}`;
         gradlewb = new Map([[`${mountingn.length}`, hongkongF.length]]);
         banner6 ^= 3;
         mountingn.push(mountingn.length << (Math.min(Math.abs(3), 1)));
         hongkongF += `${mountingn.length & 3}`;
         break;
      }
      let redirectt = 8983482 >= mergerV.length;
      do {
         mergerV += `${(String.fromCharCode(110,0) == mergerV ? parseInt(`${libjsinspectore}`) : mergerV.length)}`;
         if (redirectt) {
            break;
         }
      } while (((mergerV.length - parseInt(`${snewarchdefaultsW}`)) >= 5) && redirectt);
          let diceG: Array<any> = [922, 861, 182];
          let relatedG = 3.0;
         mergerV += `${parseInt(`${libjsinspectore}`) + 2}`;
         diceG = [diceG.length / (Math.max(1, 2))];
         relatedG *= parseFloat(`${diceG.length & 3}`);
         mergerV = `${parseInt(`${libjsinspectore}`) >> (Math.min(5, Math.abs(1)))}`;
      for (let e = 0; e < 3; e++) {
          let libpangleflipped0 = true;
         mergerV += `${parseInt(`${snewarchdefaultsW}`)}`;
         libpangleflipped0 = (!libpangleflipped0 ? !libpangleflipped0 : !libpangleflipped0);
      }
      while (4.93 <= (mergerV.length + snewarchdefaultsW) && (parseInt(`${snewarchdefaultsW}`) + mergerV.length) <= 1) {
         snewarchdefaultsW += parseInt(`${snewarchdefaultsW}`) % (Math.max(mergerV.length, 2));
         break;
      }
      for (let s = 0; s < 1; s++) {
         snewarchdefaultsW += (mergerV == String.fromCharCode(87,0) ? parseInt(`${snewarchdefaultsW}`) : mergerV.length);
      }
          let mbsplashT = 3;
          let libreactnativeblobg = String.fromCharCode(110,101,99,101,115,115,97,114,121,0);
          let ballX: Array<any> = [String.fromCharCode(97,100,106,117,115,116,0), String.fromCharCode(114,103,101,110,0)];
         snewarchdefaultsW -= ballX.length;
         mbsplashT -= mbsplashT - 3;
         libreactnativeblobg = `${libreactnativeblobg.length | mbsplashT}`;
         ballX = [2];
      r_position3 = `${1 ^ parseInt(`${assistP}`)}`;
   while (updatese.length < parseInt(`${projectU}`)) {
      projectU -= parseFloat(`${2}`);
      break;
   }
   if ((projectU - 4.57) > 3.29 && 4 > (4 - r_position3.length)) {
       let launchs = 5;
       let indexy = true;
       let favorite5 = 3.0;
         indexy = launchs > 88 && favorite5 > 33.36;
         launchs *= 2;
         launchs %= Math.max(2, launchs | 3);
      if (2.5 == (5.79 + favorite5) || 1.72 == (favorite5 + 5.79)) {
         launchs <<= Math.min(4, parseInt(`${Math.abs((launchs << (Math.min(4, Math.abs((indexy ? 3 : 3))))))}`));
      }
      for (let d = 0; d < 1; d++) {
         launchs &= 3 | parseInt(`${favorite5}`);
      }
       let goalE = 4.0;
       let typesV = 0.0;
      for (let c = 0; c < 2; c++) {
         typesV /= Math.max(parseFloat(`${parseInt(`${favorite5}`) & 3}`), 5);
      }
       let projectr: Map<any, any> = new Map([[String.fromCharCode(115,100,107,0),452], [String.fromCharCode(100,101,116,97,105,108,115,0),997], [String.fromCharCode(107,109,115,103,114,97,98,0),879]]);
       let playl: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,97,120,98,108,111,99,107,0),514], [String.fromCharCode(112,117,110,99,104,0),667], [String.fromCharCode(115,101,108,101,99,116,111,112,0),997]]);
       let libcrashsdkS: Array<any> = [641, 941];
       let dplusJ: Array<any> = [807, 956];
      r_position3 += `${3 & colorsZ.size}`;
   }
        setIsFullScreen(true);

       let with_7_k = String.fromCharCode(105,110,115,116,97,110,116,105,97,116,101,0);
       let useri = false;
         with_7_k += `${((useri ? 2 : 1))}`;
      let n_imagew = useri ? !useri : useri;
      do {
          let mbjscommonm = false;
          let fillb = String.fromCharCode(98,108,97,109,101,100,0);
         useri = (mbjscommonm ? useri : !mbjscommonm);
         fillb = `${fillb.length & 2}`;
         if (n_imagew) {
            break;
         }
      } while ((with_7_k.length >= 2 || useri) && n_imagew);
      for (let e = 0; e < 1; e++) {
          let modelb = String.fromCharCode(120,109,112,101,103,0);
          let match5 = 1.0;
          let a_managerN = String.fromCharCode(110,111,116,99,104,101,100,0);
          let overT: Array<any> = [15, 546, 742];
         useri = (with_7_k.length ^ modelb.length) > 83;
         modelb = `${3 % (Math.max(9, a_managerN.length))}`;
         match5 -= a_managerN.length >> (Math.min(3, overT.length));
         overT = [overT.length & 2];
      }
       let chartw: Map<any, any> = new Map([[String.fromCharCode(98,111,111,116,115,116,114,97,112,0),731], [String.fromCharCode(102,105,108,101,0),764]]);
      if (with_7_k.length > 1 || !useri) {
         with_7_k += "2";
      }
      let headerw = useri ? !useri : useri;
      do {
          let matches2: Array<any> = [String.fromCharCode(99,102,101,110,99,115,116,114,95,112,95,52,55,0), String.fromCharCode(115,101,110,115,105,116,105,118,105,116,121,0), String.fromCharCode(100,114,111,112,111,102,102,0)];
         useri = chartw.size == 32;
         matches2.push(3 ^ matches2.length);
         if (headerw) {
            break;
         }
      } while (((chartw.size | 3) <= 4 && 3 <= chartw.size) && headerw);
      projectU /= Math.max(parseFloat(`${minimizeq.length}`), 2);
   if (!r_position3.includes(`${colorsZ.size}`)) {
      colorsZ = new Map([[`${viewsp.size}`, parseInt(`${assistP}`) / 1]]);
   }
       let downloado: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,116,101,100,0),String.fromCharCode(100,101,99,111,114,97,116,105,111,110,0)], [String.fromCharCode(119,97,114,110,105,110,103,115,0),String.fromCharCode(112,111,115,105,116,105,118,101,0)], [String.fromCharCode(116,114,101,97,116,0),String.fromCharCode(98,112,117,116,115,0)]]);
       let libhermesQ = String.fromCharCode(109,101,109,111,0);
          let sourcez = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,0);
         libhermesQ = `${libhermesQ.length}`;
         sourcez = `${sourcez.length}`;
         downloado = new Map([[`${downloado.size}`, libhermesQ.length]]);
      let searchbarf = libhermesQ.length <= 7559612;
      do {
          let questT = 2.0;
          let borderlessZ = String.fromCharCode(113,117,97,110,116,105,116,121,0);
          let lived = false;
          let selectioni = 0.0;
          let confirmationr = String.fromCharCode(116,114,97,105,116,115,0);
         libhermesQ += `${3 << (Math.min(1, libhermesQ.length))}`;
         questT *= 3 ^ parseInt(`${selectioni}`);
         borderlessZ += `${(borderlessZ == String.fromCharCode(115,0) ? borderlessZ.length : (lived ? 3 : 4))}`;
         lived = borderlessZ.length >= 90;
         selectioni *= parseInt(`${selectioni}`);
         confirmationr += `${parseInt(`${selectioni}`) - 1}`;
         if (searchbarf) {
            break;
         }
      } while (searchbarf && (libhermesQ.length > downloado.size));
      if (1 == libhermesQ.length) {
          let libruntimeexecutorD = 5.0;
          let bodanw = 0;
         libhermesQ = `${libhermesQ.length}`;
         libruntimeexecutorD *= 1 - parseInt(`${libruntimeexecutorD}`);
         bodanw &= bodanw + 2;
      }
          let optionsc: Array<any> = [String.fromCharCode(99,111,110,102,105,114,109,0), String.fromCharCode(115,117,98,109,105,116,116,101,100,0)];
          let mbnativeadvancedz = String.fromCharCode(102,111,114,105,0);
          let phoneN = String.fromCharCode(99,104,97,114,0);
         libhermesQ = `${(libhermesQ == String.fromCharCode(68,0) ? libhermesQ.length : phoneN.length)}`;
         optionsc = [optionsc.length];
         mbnativeadvancedz += `${optionsc.length / (Math.max(9, mbnativeadvancedz.length))}`;
         phoneN += "3";
      let textlayoutmanagerp = String.fromCharCode(106,122,106,0) == libhermesQ;
      do {
         libhermesQ += `${(String.fromCharCode(69,0) == libhermesQ ? downloado.size : libhermesQ.length)}`;
         if (textlayoutmanagerp) {
            break;
         }
      } while ((2 > (downloado.size << (Math.min(Math.abs(1), 1)))) && textlayoutmanagerp);
      viewsp = new Map([[`${viewsp.size}`, 1]]);
        

   let executorL = foregroundp ? !foregroundp : foregroundp;
   do {
       let pingq = String.fromCharCode(115,117,98,112,111,105,110,116,101,114,0);
       let custom8 = String.fromCharCode(100,105,97,108,108,105,110,103,0);
       let auto_5R = 5;
       let redirectc: Map<any, any> = new Map([[String.fromCharCode(112,114,111,100,117,99,101,114,95,119,95,50,56,0),true ], [String.fromCharCode(103,101,116,108,97,100,100,114,115,0),false ]]);
       let securityt = true;
      let libfb2 = 9324539 >= pingq.length;
      do {
         pingq += `${((securityt ? 1 : 1))}`;
         if (libfb2) {
            break;
         }
      } while ((5 > (4 ^ auto_5R) && 4 > (auto_5R ^ pingq.length)) && libfb2);
      while (custom8 != String.fromCharCode(85,0)) {
          let const_s2t: Array<any> = [294, 308, 433];
         pingq += `${auto_5R}`;
         const_s2t.push(const_s2t.length);
         break;
      }
      let eighteenu = pingq.length >= 5665695;
      do {
         pingq += `${(2 & (securityt ? 4 : 1))}`;
         if (eighteenu) {
            break;
         }
      } while (eighteenu && ((4 >> (Math.min(3, pingq.length))) == 4 && (4 >> (Math.min(1, Math.abs(auto_5R)))) == 4));
       let bdxadsdkx = 2.0;
      let detailu = securityt ? !securityt : securityt;
      do {
         securityt = 75 > auto_5R && String.fromCharCode(100,0) == custom8;
         if (detailu) {
            break;
         }
      } while ((!securityt) && detailu);
         custom8 = `${redirectc.size % (Math.max(5, custom8.length))}`;
         bdxadsdkx += parseFloat(`${1 / (Math.max(9, parseInt(`${bdxadsdkx}`)))}`);
         custom8 = `${redirectc.size}`;
      let detailsd = custom8 == String.fromCharCode(99,100,118,54,0);
      do {
         custom8 += `${auto_5R - 2}`;
         if (detailsd) {
            break;
         }
      } while (detailsd && (4 > (auto_5R - 2) || 5 > (2 - custom8.length)));
          let imagemanagerk = String.fromCharCode(117,110,98,111,110,100,0);
          let configO = 0;
         securityt = 6 < pingq.length;
         imagemanagerk += `${1 | imagemanagerk.length}`;
         configO &= imagemanagerk.length;
          let navigation0 = 2.0;
         auto_5R ^= ((securityt ? 3 : 4) / (Math.max(parseInt(`${navigation0}`), 8)));
          let drag5: Array<any> = [209, 40];
          let suggestion4 = String.fromCharCode(105,110,112,108,105,99,105,116,101,108,121,0);
          let subsf = String.fromCharCode(108,97,110,103,117,97,103,101,115,0);
         redirectc.set(suggestion4, suggestion4.length - drag5.length);
         drag5 = [1];
      if ((auto_5R & 1) <= 2 && (auto_5R + parseInt(`${bdxadsdkx}`)) <= 1) {
         auto_5R *= ((securityt ? 3 : 5) - custom8.length);
      }
       let pointY = String.fromCharCode(101,110,99,111,100,105,110,103,115,0);
       let backwardn = String.fromCharCode(114,101,101,108,0);
          let orangeV: Map<any, any> = new Map([[String.fromCharCode(103,114,111,119,116,104,0),706], [String.fromCharCode(112,101,114,112,101,110,100,105,99,117,108,97,114,0),499]]);
          let screen_ = 3.0;
         pingq += `${custom8.length}`;
         orangeV = new Map([[`${orangeV.size}`, parseInt(`${screen_}`) ^ orangeV.size]]);
         screen_ += parseFloat(`${1}`);
      foregroundp = pingq.length >= 44;
      if (executorL) {
         break;
      }
   } while (executorL && ((colorsZ.size - 4) > 2 || colorsZ.size > 4));
   while (3 >= updatese.length) {
       let sportsB = 4.0;
       let lighti: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,114,97,116,101,95,117,95,53,53,0),371], [String.fromCharCode(112,114,111,99,99,101,115,115,0),19]]);
       let singaporeA: Map<any, any> = new Map([[String.fromCharCode(100,111,99,116,111,116,97,108,0),561], [String.fromCharCode(97,100,97,112,116,101,114,115,0),713]]);
       let libmapbufferjnij = String.fromCharCode(118,108,98,117,102,0);
      let long_xg = 6418738 <= lighti.size;
      do {
         lighti.set(libmapbufferjnij, 1 >> (Math.min(2, Math.abs(parseInt(`${sportsB}`)))));
         if (long_xg) {
            break;
         }
      } while (long_xg && (libmapbufferjnij.includes(`${lighti.size}`)));
      let faviconD = libmapbufferjnij.length <= 8826397;
      do {
         libmapbufferjnij = `${(String.fromCharCode(120,0) == libmapbufferjnij ? singaporeA.size : libmapbufferjnij.length)}`;
         if (faviconD) {
            break;
         }
      } while (faviconD && (2 > (2 ^ lighti.size)));
      let libreactperfloggerjniD = libmapbufferjnij.length <= 6602974;
      do {
         libmapbufferjnij += `${(String.fromCharCode(79,0) == libmapbufferjnij ? singaporeA.size : libmapbufferjnij.length)}`;
         if (libreactperfloggerjniD) {
            break;
         }
      } while ((singaporeA.size > 1) && libreactperfloggerjniD);
      if (lighti.get(`${singaporeA.size}`) == null) {
          let targetc: Map<any, any> = new Map([[String.fromCharCode(103,101,115,116,117,114,101,115,0),585], [String.fromCharCode(109,117,108,116,0),663], [String.fromCharCode(102,111,117,114,116,104,0),292]]);
          let transfer9 = 1.0;
         lighti.set(`${transfer9}`, 2);
         targetc.set(`${targetc.size}`, 3);
         transfer9 += targetc.size;
      }
      while (!Array.from(lighti.values()).includes(sportsB)) {
         sportsB += parseFloat(`${singaporeA.size | 2}`);
         break;
      }
      if (5 >= (5 - libmapbufferjnij.length) && 5 >= (lighti.size - libmapbufferjnij.length)) {
          let humidityR: Map<any, any> = new Map([[String.fromCharCode(115,99,114,111,108,108,105,110,103,0),989], [String.fromCharCode(115,116,97,114,116,109,97,114,107,101,114,0),646]]);
          let matchO = String.fromCharCode(100,105,115,112,108,97,121,115,0);
          let shootd = String.fromCharCode(99,98,115,110,105,100,0);
          let container8 = true;
         lighti = new Map([[libmapbufferjnij, (libmapbufferjnij.length | (container8 ? 5 : 1))]]);
         humidityR = new Map([[shootd, matchO.length & 1]]);
         matchO = `${humidityR.size << (Math.min(Math.abs(3), 2))}`;
         shootd = "3";
         container8 = shootd.length > matchO.length;
      }
         singaporeA.set(`${sportsB}`, singaporeA.size + 1);
      let floatingQ = lighti.size >= 9608920;
      do {
         lighti = new Map([[`${singaporeA.size}`, 2 << (Math.min(1, Math.abs(singaporeA.size)))]]);
         if (floatingQ) {
            break;
         }
      } while (floatingQ && (lighti.get(`${sportsB}`) == null));
      let submitw = libmapbufferjnij == String.fromCharCode(103,100,112,120,0);
      do {
         libmapbufferjnij = `${singaporeA.size}`;
         if (submitw) {
            break;
         }
      } while (submitw && (4 <= (libmapbufferjnij.length * parseInt(`${sportsB}`)) && (1.28 * sportsB) <= 2.71));
          let string2 = 3;
         lighti.set(libmapbufferjnij, singaporeA.size % (Math.max(2, 1)));
         string2 *= string2 / 2;
      if ((libmapbufferjnij.length % 1) >= 4 && (libmapbufferjnij.length % 1) >= 1) {
         lighti = new Map([[`${singaporeA.size}`, 2 / (Math.max(7, singaporeA.size))]]);
      }
       let page6 = false;
       let rules2 = false;
      assistP += lighti.size / (Math.max(r_position3.length, 4));
      break;
   }
   let armvaz = foregroundp ? !foregroundp : foregroundp;
   do {
      foregroundp = 64.44 > assistP && 33 > r_position3.length;
      if (armvaz) {
         break;
      }
   } while (armvaz && (r_position3.length == 1 || foregroundp));
        StatusBar.setHidden(true);

   for (let w = 0; w < 1; w++) {
      plashK = `${parseInt(`${projectU}`) % (Math.max(updatese.length, 1))}`;
   }
   while (3 < plashK.length || 3 < minimizeq.length) {
      minimizeq += `${((foregroundp ? 5 : 2) + viewsp.size)}`;
      break;
   }
       let userh = 2.0;
       let modityE = String.fromCharCode(112,114,101,100,105,99,116,111,114,0);
       let termsQ = 4.0;
         userh -= parseFloat(`${modityE.length}`);
       let style3 = 3.0;
          let upgradeu = String.fromCharCode(105,104,100,114,0);
         termsQ -= parseFloat(`${upgradeu.length}`);
         termsQ += parseFloat(`${modityE.length}`);
         modityE = "2";
       let taiwand = String.fromCharCode(100,105,114,101,99,116,105,111,110,97,108,0);
      if ((style3 * 5.91) > 1.95 || 5.91 > (termsQ * style3)) {
         termsQ /= Math.max(parseFloat(`${modityE.length}`), 5);
      }
         userh /= Math.max(parseFloat(`${modityE.length}`), 2);
          let f_unlocks = 4;
          let textlayoutmanagero: Map<any, any> = new Map([[String.fromCharCode(103,101,116,97,115,115,111,99,105,100,0),169], [String.fromCharCode(102,117,115,101,0),397]]);
         style3 *= (parseFloat(`${String.fromCharCode(102,0) == taiwand ? taiwand.length : parseInt(`${userh}`)}`));
         f_unlocks &= 2 << (Math.min(2, Math.abs(f_unlocks)));
         textlayoutmanagero.set(`${f_unlocks}`, 2 / (Math.max(3, textlayoutmanagero.size)));
      minimizeq = `${viewsp.size << (Math.min(plashK.length, 4))}`;

        lockOrientation(devicesOrientation);
      } else if (devicesOrientation === "PORTRAIT") {

   for (let a = 0; a < 1; a++) {
      assistP += sigmobw.length;
   }
   if ((smalll % (Math.max(colorsZ.size, 4))) < 5 || 1 < (colorsZ.size % 5)) {
      smalll |= 2;
   }
      projectU -= parseFloat(`${plashK.length | r_position3.length}`);
        setIsFullScreen(false);

   while (colorsZ.size < 4) {
      smalll &= viewsp.size;
      break;
   }
       let libreanimated7 = String.fromCharCode(101,97,99,115,0);
       let libswresampleZ = 1.0;
       let loadingc = 5;
         libreanimated7 += `${loadingc << (Math.min(1, Math.abs(2)))}`;
         libreanimated7 += `${2 << (Math.min(Math.abs(loadingc), 3))}`;
         libreanimated7 += "2";
      if (loadingc >= 3) {
         libswresampleZ *= parseFloat(`${1}`);
      }
         loadingc >>= Math.min(3, Math.abs(2));
          let fadfdeebbbfdabbbabdadfaaddaay = String.fromCharCode(109,117,120,0);
          let gestures5 = 4;
          let windh = 3;
         libreanimated7 += `${(libreanimated7 == String.fromCharCode(88,0) ? fadfdeebbbfdabbbabdadfaaddaay.length : libreanimated7.length)}`;
         fadfdeebbbfdabbbabdadfaaddaay = `${1 & windh}`;
         gestures5 *= gestures5 << (Math.min(Math.abs(3), 3));
         windh <<= Math.min(3, Math.abs(3));
          let mbbidY = String.fromCharCode(116,114,105,99,107,108,101,0);
          let specZ: Array<any> = [114, 877];
          let rewindq = 2.0;
         loadingc += parseInt(`${libswresampleZ}`) / (Math.max(3, 8));
         mbbidY = `${3 & parseInt(`${rewindq}`)}`;
         specZ.push(3 + specZ.length);
         rewindq /= Math.max(5, specZ.length % (Math.max(5, parseInt(`${rewindq}`))));
      let castS = loadingc >= 5064081;
      do {
         loadingc &= loadingc;
         if (castS) {
            break;
         }
      } while (((libswresampleZ / 2.73) < 4.99) && castS);
         libswresampleZ += parseFloat(`${libreanimated7.length << (Math.min(Math.abs(3), 3))}`);
      assistP += 2 / (Math.max(3, minimizeq.length));
   for (let h = 0; h < 1; h++) {
      sigmobw.push(2);
   }
        

       let largek = true;
       let button6 = String.fromCharCode(106,95,56,95,97,98,115,108,0);
      if (largek) {
          let tickK = String.fromCharCode(97,95,53,51,95,119,97,108,108,0);
          let telemetryR = String.fromCharCode(99,108,101,97,114,118,105,100,101,111,100,97,116,97,0);
          let shrinkJ = false;
          let p_managerG = String.fromCharCode(115,110,100,105,111,0);
          let downloading5: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,116,105,110,103,0),296], [String.fromCharCode(99,109,100,117,116,105,108,115,0),510]]);
         button6 += "3";
         tickK = `${downloading5.size << (Math.min(Math.abs(3), 2))}`;
         telemetryR = `${downloading5.size / (Math.max(2, 8))}`;
         shrinkJ = !shrinkJ;
         p_managerG = `${p_managerG.length}`;
      }
         button6 += `${(String.fromCharCode(69,0) == button6 ? button6.length : (largek ? 1 : 1))}`;
          let notificationc = false;
         largek = notificationc;
      for (let o = 0; o < 1; o++) {
         button6 = `${(2 >> (Math.min(3, Math.abs((largek ? 2 : 1)))))}`;
      }
         button6 += `${(1 & (largek ? 4 : 3))}`;
          let slider7: Array<any> = [String.fromCharCode(99,104,101,99,107,112,111,105,110,116,0), String.fromCharCode(102,97,99,116,95,49,95,54,56,0)];
         largek = button6.length == 81;
         slider7.push(2);
      updatese.push(((largek ? 5 : 5) + r_position3.length));
      colorsZ.set(`${projectU}`, parseInt(`${projectU}`));
      viewsp.set(`${updatese.length}`, viewsp.size);
        StatusBar.setHidden(false);

   while ((5 | viewsp.size) > 5 && 3 > (5 | viewsp.size)) {
      minimizeq += `${viewsp.size | 3}`;
      break;
   }
   if (foregroundp) {
       let selectionP: Map<any, any> = new Map([[String.fromCharCode(116,117,108,115,105,0),395], [String.fromCharCode(115,121,115,114,97,110,100,0),35]]);
       let sigmob5: Array<any> = [String.fromCharCode(112,97,114,101,110,116,115,0), String.fromCharCode(115,117,98,116,101,114,109,0)];
       let downloadK: Map<any, any> = new Map([[String.fromCharCode(101,120,116,115,107,0),188], [String.fromCharCode(119,105,100,101,115,99,114,101,101,110,0),736], [String.fromCharCode(102,114,97,109,101,119,111,114,107,0),338]]);
       let libhermesH: Map<any, any> = new Map([[String.fromCharCode(115,117,98,102,105,101,108,100,115,0),211], [String.fromCharCode(114,101,102,0),898]]);
       let subsS = String.fromCharCode(102,97,105,108,0);
         selectionP = new Map([[`${selectionP.size}`, selectionP.size]]);
         subsS += "1";
      let sliderM = 6620777 <= selectionP.size;
      do {
          let redirectg: Map<any, any> = new Map([[String.fromCharCode(97,115,115,105,103,110,109,101,110,116,0),982], [String.fromCharCode(104,97,118,101,0),851]]);
          let downloaded7 = 1;
         selectionP = new Map([[`${selectionP.size}`, selectionP.size]]);
         redirectg.set(`${downloaded7}`, 1 + redirectg.size);
         downloaded7 *= 2;
         if (sliderM) {
            break;
         }
      } while ((5 <= (1 & downloadK.size) || (downloadK.size & selectionP.size) <= 1) && sliderM);
      while (4 == (selectionP.size << (Math.min(Math.abs(3), 5)))) {
          let targetg = 5;
          let borderlessI = 3.0;
         subsS = `${subsS.length}`;
         targetg <<= Math.min(2, Math.abs(3 ^ targetg));
         borderlessI -= parseFloat(`${parseInt(`${borderlessI}`)}`);
         break;
      }
      let redirectw = 7312538 <= selectionP.size;
      do {
          let time_fg = false;
          let update_he = false;
          let homef = String.fromCharCode(104,115,118,97,0);
          let relatedB: Array<any> = [943, 994, 506];
         selectionP.set(subsS, selectionP.size + subsS.length);
         time_fg = relatedB.length <= 99 && time_fg;
         update_he = homef.length >= 75 && !update_he;
         homef = `${(String.fromCharCode(73,0) == homef ? homef.length : (update_he ? 4 : 4))}`;
         relatedB = [3];
         if (redirectw) {
            break;
         }
      } while ((4 <= (selectionP.size & 5)) && redirectw);
       let leakchecker_ = 2.0;
       let s_position2 = 3.0;
      for (let o = 0; o < 2; o++) {
         leakchecker_ += parseFloat(`${sigmob5.length}`);
      }
       let detailsT = true;
          let placeholderk = 5.0;
          let humidityRJ = String.fromCharCode(114,101,103,114,101,115,115,0);
         detailsT = placeholderk < 72.96 && humidityRJ == String.fromCharCode(106,0);
         selectionP = new Map([[`${libhermesH.size}`, 2]]);
          let activityE: Array<any> = [238, 637, 432];
         subsS += `${selectionP.size % (Math.max(libhermesH.size, 10))}`;
         activityE.push(activityE.length >> (Math.min(2, activityE.length)));
          let rightQ = String.fromCharCode(99,105,110,118,105,100,101,111,0);
          let transferm = String.fromCharCode(115,117,105,116,101,98,0);
          let mbridgeO = false;
         subsS += "3";
         rightQ += `${rightQ.length + transferm.length}`;
         transferm = `${((mbridgeO ? 3 : 4) * transferm.length)}`;
         mbridgeO = (rightQ.length | transferm.length) > 96;
      if (!detailsT) {
          let animationsD = 0;
          let qaagp: Array<any> = [String.fromCharCode(105,108,101,97,118,101,0), String.fromCharCode(106,115,116,121,112,101,0)];
         detailsT = animationsD == selectionP.size;
         animationsD += 2;
         qaagp.push(qaagp.length / (Math.max(qaagp.length, 5)));
      }
          let ewardedF = false;
          let promotionH = String.fromCharCode(104,114,115,115,0);
         s_position2 /= Math.max(3, parseFloat(`${3}`));
         ewardedF = promotionH.startsWith(`${ewardedF}`);
         promotionH = `${(String.fromCharCode(110,0) == promotionH ? (ewardedF ? 2 : 4) : promotionH.length)}`;
         libhermesH = new Map([[`${downloadK.size}`, downloadK.size]]);
      foregroundp = parseFloat(`${downloadK.size}`) <= projectU;
   }
       let rewindb: Map<any, any> = new Map([[String.fromCharCode(114,95,50,53,95,109,97,112,0),415], [String.fromCharCode(117,115,108,101,101,112,0),608]]);
          let c_titleN = false;
          let giftu = String.fromCharCode(111,117,116,0);
         rewindb = new Map([[`${rewindb.size}`, rewindb.size]]);
         c_titleN = 87 <= giftu.length;
         giftu = `${(String.fromCharCode(106,0) == giftu ? giftu.length : giftu.length)}`;
      if (!Array.from(rewindb.keys()).includes(`${rewindb.size}`)) {
         rewindb.set(`${rewindb.size}`, rewindb.size);
      }
         rewindb = new Map([[`${rewindb.size}`, rewindb.size]]);
      sigmobw = [sigmobw.length];

        lockOrientation(devicesOrientation);
      }
    };

    const onToggleFullScreen = useCallback(() => {
       let chinaa = 2.0;
    let libavformatE = String.fromCharCode(105,110,99,114,101,109,101,110,116,115,0);
    let mbbidd = String.fromCharCode(119,101,105,0);
    let episodew: Array<any> = [209, 3, 871];
    let assistG = 0.0;
    let libfb1 = 4;
    let finit_5df = 5.0;
    let formy = 4.0;
    let fastforwardX = 1;
    let launch7 = String.fromCharCode(104,97,115,104,116,97,98,108,101,0);
    let reducerU: Array<any> = [297, 795];
      libfb1 %= Math.max(2, parseInt(`${finit_5df}`) % 3);
   let textp = chinaa <= 7123892.0;
   do {
      chinaa *= 2;
      if (textp) {
         break;
      }
   } while (((1.78 - chinaa) > 3.8 || (4 >> (Math.min(3, episodew.length))) > 1) && textp);
   if (3 <= (2 * fastforwardX)) {
       let untick3 = true;
       let catalogm = 4;
       let success6 = String.fromCharCode(99,111,118,101,114,101,100,0);
       let cricket8 = String.fromCharCode(100,105,115,99,117,115,115,105,111,110,0);
       let tickk = String.fromCharCode(117,110,105,110,116,101,114,112,114,101,116,101,100,0);
          let overk = String.fromCharCode(115,116,114,116,121,112,101,0);
         untick3 = ((success6.length ^ (untick3 ? success6.length : 23)) <= 23);
         overk = `${overk.length}`;
         untick3 = 30 >= cricket8.length;
      let abidetectz = success6 == String.fromCharCode(54,57,107,105,0);
      do {
         success6 += `${catalogm ^ cricket8.length}`;
         if (abidetectz) {
            break;
         }
      } while ((success6.length == 3 && !untick3) && abidetectz);
      let sans0 = 6917633 <= catalogm;
      do {
         catalogm /= Math.max(success6.length - 1, 1);
         if (sans0) {
            break;
         }
      } while (sans0 && (catalogm > 5));
         success6 = `${1 >> (Math.min(3, tickk.length))}`;
          let rewardQ = 4.0;
          let weiboB: Array<any> = [302, 137, 685];
          let collection5 = true;
         success6 = `${2 & tickk.length}`;
         rewardQ /= Math.max(parseFloat(`${parseInt(`${rewardQ}`) / 1}`), 4);
         weiboB = [weiboB.length];
         collection5 = !collection5;
       let taiwanY = String.fromCharCode(117,110,97,118,97,105,108,97,98,108,101,0);
       let live0 = String.fromCharCode(109,115,122,104,0);
       let libswresampleJ = false;
       let humidityE = true;
         humidityE = taiwanY.length < 44;
         cricket8 += `${(taiwanY == String.fromCharCode(80,0) ? success6.length : taiwanY.length)}`;
         untick3 = live0.includes(`${libswresampleJ}`);
      let active8 = libswresampleJ ? !libswresampleJ : libswresampleJ;
      do {
          let submitL: Array<any> = [469, 218];
          let feedbackr = String.fromCharCode(114,105,110,103,116,111,110,101,0);
          let calendar4: Map<any, any> = new Map([[String.fromCharCode(110,111,99,104,97,110,103,101,0),861], [String.fromCharCode(99,102,102,116,105,0),752], [String.fromCharCode(116,114,101,101,119,114,105,116,101,114,0),834]]);
          let penaltyz = 3;
          let abidetectA = String.fromCharCode(117,110,114,101,109,111,118,97,98,108,101,0);
         libswresampleJ = cricket8.length > 51;
         submitL.push((abidetectA == String.fromCharCode(85,0) ? penaltyz : abidetectA.length));
         feedbackr += `${(String.fromCharCode(95,0) == feedbackr ? submitL.length : feedbackr.length)}`;
         calendar4.set(feedbackr, 3 ^ submitL.length);
         penaltyz /= Math.max(feedbackr.length, 1);
         if (active8) {
            break;
         }
      } while (active8 && (2 == tickk.length));
         humidityE = (tickk.length | live0.length) == 28;
         cricket8 = `${(success6 == String.fromCharCode(73,0) ? (untick3 ? 2 : 1) : success6.length)}`;
      assistG += parseFloat(`${mbbidd.length}`);
   }

      if (
        appOrientation === "LANDSCAPE-LEFT" ||
        appOrientation === "LANDSCAPE-RIGHT"
      ) {

   if ((1 % (Math.max(8, fastforwardX))) > 4 && 2.3 > (finit_5df - 1.24)) {
      finit_5df += parseInt(`${formy}`) - 2;
   }
      fastforwardX <<= Math.min(Math.abs(parseInt(`${assistG}`) * episodew.length), 4);
       let bdxadsdko = true;
         bdxadsdko = (bdxadsdko ? !bdxadsdko : bdxadsdko);
       let floatingH = String.fromCharCode(114,101,113,117,101,115,116,0);
       let progressZ = String.fromCharCode(99,111,100,101,99,115,0);
       let with_j_U = String.fromCharCode(119,101,108,115,101,110,99,100,101,109,111,0);
       let temperaturer = String.fromCharCode(100,105,115,99,111,118,101,114,121,0);
      fastforwardX |= parseInt(`${assistG}`);
        lockOrientation("PORTRAIT");

       let unreadx = 3.0;
       let tickeda: Array<any> = [903, 186];
          let langJ = String.fromCharCode(97,116,101,120,105,116,0);
         tickeda = [1 >> (Math.min(1, tickeda.length))];
         langJ += `${langJ.length}`;
         unreadx *= parseFloat(`${2 - tickeda.length}`);
      while (unreadx > 1.71) {
          let networkh = String.fromCharCode(99,111,110,116,101,120,116,115,0);
          let libavutilR = String.fromCharCode(100,101,99,108,97,114,101,100,0);
         tickeda.push((networkh == String.fromCharCode(57,0) ? networkh.length : tickeda.length));
         libavutilR = `${3 / (Math.max(6, libavutilR.length))}`;
         break;
      }
      if (2.39 <= unreadx) {
         unreadx /= Math.max(parseFloat(`${2}`), 4);
      }
         unreadx += parseFloat(`${parseInt(`${unreadx}`) | 2}`);
         tickeda.push(parseInt(`${unreadx}`) * 1);
      mbbidd = `${libavformatE.length}`;
   for (let z = 0; z < 2; z++) {
      assistG -= parseFloat(`${2}`);
   }
   let lightq = 6082012.0 <= formy;
   do {
      formy /= Math.max(episodew.length, 3);
      if (lightq) {
         break;
      }
   } while ((!episodew.includes(formy)) && lightq);
        setIsFullScreen(false);

      launch7 = `${1 ^ parseInt(`${formy}`)}`;
   let playercommonf = String.fromCharCode(48,113,97,120,51,56,52,110,98,49,0) == mbbidd;
   do {
      mbbidd = `${1 * fastforwardX}`;
      if (playercommonf) {
         break;
      }
   } while (playercommonf && (!mbbidd.includes(libavformatE)));
   while (5 <= episodew.length) {
       let nterstitialo = 0.0;
      for (let t = 0; t < 2; t++) {
         nterstitialo *= parseFloat(`${parseInt(`${nterstitialo}`) & parseInt(`${nterstitialo}`)}`);
      }
         nterstitialo -= parseFloat(`${parseInt(`${nterstitialo}`)}`);
         nterstitialo -= parseFloat(`${parseInt(`${nterstitialo}`) << (Math.min(Math.abs(parseInt(`${nterstitialo}`)), 2))}`);
      episodew = [parseInt(`${nterstitialo}`)];
      break;
   }
        

       let circleP = 3.0;
       let zoomZ = String.fromCharCode(98,108,111,99,107,101,100,0);
      while ((parseInt(`${circleP}`) / (Math.max(zoomZ.length, 7))) <= 2 && (2 & zoomZ.length) <= 3) {
          let mimoP = false;
          let updatesz = String.fromCharCode(119,105,110,100,111,119,101,100,95,119,95,54,51,0);
          let flyerh = String.fromCharCode(115,95,52,49,0);
          let file3 = true;
          let unimplementedviewz: Map<any, any> = new Map([[String.fromCharCode(100,101,115,116,111,114,121,0),true ], [String.fromCharCode(102,105,116,116,101,100,0),true ]]);
         circleP += flyerh.length;
         mimoP = !file3;
         updatesz = `${unimplementedviewz.size}`;
         flyerh = `${updatesz.length}`;
         unimplementedviewz.set(`${file3}`, unimplementedviewz.size);
         break;
      }
      let libreactperfloggerjnic = circleP <= 7200805.0;
      do {
         circleP += 2;
         if (libreactperfloggerjnic) {
            break;
         }
      } while (libreactperfloggerjnic && ((parseInt(`${circleP}`) * 1) > 2 || 5.26 > (circleP * 5.4)));
         zoomZ += `${zoomZ.length >> (Math.min(1, Math.abs(parseInt(`${circleP}`))))}`;
         circleP += parseInt(`${circleP}`);
       let watchz: Map<any, any> = new Map([[String.fromCharCode(115,104,111,119,105,110,103,0),false ], [String.fromCharCode(99,97,114,100,104,111,108,100,101,114,0),false ]]);
      if (3 == (watchz.size + 5)) {
          let thailandU = String.fromCharCode(97,101,118,97,108,0);
          let mounting3 = 5.0;
         zoomZ += `${3 | parseInt(`${mounting3}`)}`;
         thailandU = `${thailandU.length | thailandU.length}`;
         mounting3 *= (parseFloat(`${String.fromCharCode(111,0) == thailandU ? thailandU.length : thailandU.length}`));
      }
      finit_5df -= 2;
      finit_5df += 2 * parseInt(`${chinaa}`);
      libavformatE = `${libfb1 / 2}`;
        StatusBar.setHidden(false);

   if (2 >= launch7.length) {
       let relatedR = String.fromCharCode(121,105,101,108,100,0);
       let frame_t0I = 5;
      for (let b = 0; b < 2; b++) {
         frame_t0I <<= Math.min(5, Math.abs(frame_t0I));
      }
         frame_t0I |= frame_t0I;
      if (!relatedR.endsWith(`${frame_t0I}`)) {
          let str7 = false;
          let helperz = String.fromCharCode(100,111,119,110,119,97,114,100,0);
         relatedR += `${relatedR.length}`;
         str7 = helperz.length == 31;
         helperz = `${(3 + (str7 ? 2 : 1))}`;
      }
      for (let b = 0; b < 3; b++) {
         frame_t0I -= 2;
      }
         relatedR += `${relatedR.length >> (Math.min(Math.abs(1), 1))}`;
      while ((4 | frame_t0I) < 4 && (frame_t0I | relatedR.length) < 4) {
          let updatesl = String.fromCharCode(116,101,114,109,105,110,97,116,101,100,0);
          let darkX: Map<any, any> = new Map([[String.fromCharCode(98,111,117,110,100,97,108,108,0),941], [String.fromCharCode(114,95,53,53,95,97,118,97,108,97,110,99,104,101,0),173]]);
          let borderlessN = 4.0;
          let filledL = String.fromCharCode(97,114,109,116,104,0);
          let modelsz = String.fromCharCode(102,116,118,108,97,115,116,110,111,100,101,0);
         relatedR = "1";
         updatesl = "1";
         darkX = new Map([[`${darkX.size}`, (updatesl == String.fromCharCode(71,0) ? darkX.size : updatesl.length)]]);
         borderlessN /= Math.max(parseFloat(`${darkX.size | parseInt(`${borderlessN}`)}`), 4);
         filledL = `${modelsz.length}`;
         modelsz += `${(String.fromCharCode(74,0) == modelsz ? filledL.length : modelsz.length)}`;
         break;
      }
      launch7 += `${frame_t0I % (Math.max(libavformatE.length, 2))}`;
   }
   while ((formy / 3.4) >= 1.96 || (assistG / 3.4) >= 5.69) {
      formy *= 3;
      break;
   }
   while (launch7.endsWith(`${finit_5df}`)) {
      launch7 += `${parseInt(`${chinaa}`) >> (Math.min(libavformatE.length, 4))}`;
      break;
   }

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      } else {

       let fullW: Map<any, any> = new Map([[String.fromCharCode(103,101,116,112,97,100,100,114,115,0),969], [String.fromCharCode(112,114,111,102,114,101,115,115,0),647]]);
       let hejiP = false;
       let cnewarchdefaultsc = String.fromCharCode(114,101,103,105,115,116,101,114,105,110,103,0);
          let container_ = String.fromCharCode(102,111,117,114,99,99,115,0);
          let activeH: Array<any> = [346, 755, 504];
          let libavcodec2 = String.fromCharCode(101,110,116,114,121,112,111,105,110,116,0);
         hejiP = !hejiP;
         container_ += `${(container_ == String.fromCharCode(79,0) ? activeH.length : container_.length)}`;
         activeH = [libavcodec2.length >> (Math.min(container_.length, 1))];
         libavcodec2 += `${1 ^ activeH.length}`;
      if (cnewarchdefaultsc.length < 4 && hejiP) {
          let androide = String.fromCharCode(115,101,99,107,101,121,0);
          let collection4 = String.fromCharCode(97,117,116,111,114,111,116,97,116,105,111,110,0);
         cnewarchdefaultsc += `${((hejiP ? 2 : 3))}`;
         androide += `${1 << (Math.min(2, androide.length))}`;
         collection4 = `${androide.length >> (Math.min(collection4.length, 1))}`;
      }
      for (let g = 0; g < 2; g++) {
         fullW.set(`${hejiP}`, (2 << (Math.min(5, Math.abs((hejiP ? 2 : 2))))));
      }
         fullW.set(`${cnewarchdefaultsc}`, fullW.size | cnewarchdefaultsc.length);
      for (let n = 0; n < 1; n++) {
          let settingsc = 0.0;
          let nterstitial8 = true;
         fullW = new Map([[`${fullW.size}`, fullW.size >> (Math.min(Math.abs(3), 3))]]);
         settingsc /= Math.max(1, parseInt(`${settingsc}`) - 1);
         nterstitial8 = 11.42 < (settingsc / (Math.max(settingsc, 2)));
      }
       let libpangleflipped3 = String.fromCharCode(111,95,54,95,102,114,105,101,110,100,0);
      let reactm = cnewarchdefaultsc.length >= 8469985;
      do {
         cnewarchdefaultsc += `${(libpangleflipped3 == String.fromCharCode(109,0) ? libpangleflipped3.length : (hejiP ? 5 : 4))}`;
         if (reactm) {
            break;
         }
      } while ((5 <= cnewarchdefaultsc.length) && reactm);
      while (3 == cnewarchdefaultsc.length) {
         cnewarchdefaultsc += `${(libpangleflipped3 == String.fromCharCode(101,0) ? libpangleflipped3.length : (hejiP ? 2 : 5))}`;
         break;
      }
      if (cnewarchdefaultsc == libpangleflipped3) {
          let profileR = 3.0;
          let componentregistryY = 4.0;
          let gemfileg: Map<any, any> = new Map([[String.fromCharCode(111,108,100,101,114,0),false ], [String.fromCharCode(100,101,98,108,111,99,107,0),false ]]);
         libpangleflipped3 = `${((hejiP ? 2 : 5) % (Math.max(1, 9)))}`;
         profileR += parseInt(`${profileR}`);
         componentregistryY += parseFloat(`${1 % (Math.max(7, gemfileg.size))}`);
         gemfileg.set(`${componentregistryY}`, parseInt(`${componentregistryY}`));
      }
      libavformatE += `${parseInt(`${finit_5df}`) * 3}`;
      mbbidd += `${parseInt(`${assistG}`) % 3}`;
   for (let v = 0; v < 2; v++) {
       let themeB: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,111,117,110,100,0),429], [String.fromCharCode(102,108,105,99,0),719], [String.fromCharCode(99,97,116,101,103,111,114,105,122,101,0),793]]);
       let windE: Array<any> = [821, 524, 118];
       let catalog2 = 4.0;
         windE.push(windE.length);
      for (let y = 0; y < 3; y++) {
          let umengy = 5.0;
          let whatsappr: Map<any, any> = new Map([[String.fromCharCode(114,111,116,114,0),18], [String.fromCharCode(112,114,101,99,101,100,101,110,99,101,0),552], [String.fromCharCode(114,101,115,105,100,117,97,108,0),903]]);
          let telemetryQ = 0.0;
          let borderless0 = 1.0;
         catalog2 /= Math.max(themeB.size / (Math.max(3, 6)), 5);
         umengy /= Math.max(1, parseFloat(`${parseInt(`${umengy}`) * 3}`));
         whatsappr = new Map([[`${telemetryQ}`, parseInt(`${telemetryQ}`) % 3]]);
         borderless0 *= parseFloat(`${parseInt(`${umengy}`)}`);
      }
         windE.push(1 >> (Math.min(5, Math.abs(themeB.size))));
      for (let a = 0; a < 2; a++) {
          let volumeI: Array<any> = [926, 98, 959];
         catalog2 += 2;
         volumeI = [volumeI.length];
      }
         themeB.set(`${catalog2}`, 2 | themeB.size);
         catalog2 += windE.length << (Math.min(2, Math.abs(themeB.size)));
      let downl = catalog2 >= 6557790.0;
      do {
         catalog2 /= Math.max(2, 3);
         if (downl) {
            break;
         }
      } while (downl && (windE.length >= parseInt(`${catalog2}`)));
      if (windE.length >= 2) {
         themeB = new Map([[`${themeB.size}`, themeB.size]]);
      }
          let roots = String.fromCharCode(99,111,108,108,97,112,115,101,95,52,95,53,49,0);
          let bcopy_k0 = 5.0;
         catalog2 += windE.length;
         roots = `${(String.fromCharCode(90,0) == roots ? roots.length : parseInt(`${bcopy_k0}`))}`;
         bcopy_k0 *= parseFloat(`${parseInt(`${bcopy_k0}`)}`);
      formy += 2 * parseInt(`${formy}`);
   }
        lockOrientation("LANDSCAPE");

       let line_ = String.fromCharCode(98,111,114,105,110,103,115,115,108,0);
       let confirmationW = 3.0;
       let downH = true;
      while (!downH && line_.length <= 4) {
          let liblogger5 = 0.0;
          let libpangleflippeds = 1.0;
          let with_n1b: Array<any> = [985, 780, 739];
         downH = libpangleflippeds < 98.14 && 98.14 < liblogger5;
         liblogger5 -= with_n1b.length - 1;
         libpangleflippeds /= Math.max(4, 2);
         break;
      }
      let relatedc = line_ == String.fromCharCode(98,104,114,98,111,101,98,95,0);
      do {
          let grey4 = 1.0;
          let tempm: Map<any, any> = new Map([[String.fromCharCode(115,117,114,101,0),148], [String.fromCharCode(115,111,114,116,105,110,103,0),780], [String.fromCharCode(101,108,108,105,111,116,116,95,110,95,55,56,0),75]]);
          let favoritew: Array<any> = [String.fromCharCode(106,100,99,111,101,102,99,116,0), String.fromCharCode(108,111,119,0)];
          let giftq = String.fromCharCode(102,112,99,0);
          let heartO = String.fromCharCode(112,97,116,99,104,0);
         line_ = `${((downH ? 2 : 5) + 3)}`;
         grey4 *= tempm.size * 3;
         tempm = new Map([[`${grey4}`, (String.fromCharCode(122,0) == giftq ? giftq.length : parseInt(`${grey4}`))]]);
         favoritew.push((String.fromCharCode(89,0) == giftq ? tempm.size : giftq.length));
         heartO += `${favoritew.length}`;
         if (relatedc) {
            break;
         }
      } while ((3.45 < (2.61 + confirmationW) && 2 < (3 << (Math.min(1, line_.length)))) && relatedc);
      for (let b = 0; b < 2; b++) {
         downH = downH && confirmationW >= 23.70;
      }
      for (let u = 0; u < 1; u++) {
          let gradleC = 4.0;
          let gray9: Map<any, any> = new Map([[String.fromCharCode(97,116,114,97,99,116,97,98,0),877], [String.fromCharCode(111,102,102,101,114,0),709]]);
          let interstitialY = String.fromCharCode(102,97,109,105,108,121,0);
          let remindern: Map<any, any> = new Map([[String.fromCharCode(104,95,57,52,0),419], [String.fromCharCode(103,114,97,121,97,0),9], [String.fromCharCode(112,111,115,105,116,105,111,110,0),605]]);
         line_ += `${remindern.size}`;
         gradleC *= gray9.size ^ 1;
         gray9.set(`${interstitialY}`, interstitialY.length - gray9.size);
         remindern.set(interstitialY, 2 % (Math.max(9, interstitialY.length)));
      }
      while (!downH) {
         confirmationW /= Math.max((parseFloat(`${String.fromCharCode(49,0) == line_ ? parseInt(`${confirmationW}`) : line_.length}`)), 2);
         break;
      }
      let topich = confirmationW >= 7085845.0;
      do {
         confirmationW /= Math.max(parseFloat(`${parseInt(`${confirmationW}`) << (Math.min(1, Math.abs(3)))}`), 3);
         if (topich) {
            break;
         }
      } while ((downH) && topich);
      let nativek = confirmationW >= 9571453.0;
      do {
          let klevinU = 0;
          let thailandJ: Array<any> = [String.fromCharCode(107,95,49,95,98,121,114,121,0), String.fromCharCode(108,111,115,101,0), String.fromCharCode(102,97,115,116,101,115,116,0)];
          let neona = 5.0;
         confirmationW += parseFloat(`${parseInt(`${neona}`)}`);
         klevinU %= Math.max(2, 2 - klevinU);
         thailandJ.push(thailandJ.length);
         neona *= parseFloat(`${thailandJ.length | 1}`);
         if (nativek) {
            break;
         }
      } while (nativek && (confirmationW >= 3.77 || 3.75 >= (confirmationW + 3.77)));
      let imagemanager2 = line_.length >= 8322048;
      do {
          let singleH = true;
          let connectiony = true;
          let leaguec: Map<any, any> = new Map([[String.fromCharCode(98,95,49,49,95,113,117,101,115,116,105,111,110,115,0),false ], [String.fromCharCode(104,97,115,104,116,97,103,0),false ]]);
          let encryptx = false;
          let robotoG = 2.0;
         line_ = `${leaguec.size}`;
         singleH = robotoG > 61.61;
         connectiony = encryptx && !singleH;
         leaguec.set(`${encryptx}`, ((singleH ? 2 : 1)));
         robotoG /= Math.max(3, (parseFloat(`${(encryptx ? 1 : 4)}`)));
         if (imagemanager2) {
            break;
         }
      } while ((confirmationW == 3.42) && imagemanager2);
      while (confirmationW == 1.90) {
         confirmationW /= Math.max(2, parseFloat(`${1}`));
         break;
      }
      chinaa += 2;
   while (4.3 > formy) {
      fastforwardX >>= Math.min(5, Math.abs(parseInt(`${finit_5df}`) % (Math.max(episodew.length, 2))));
      break;
   }
       let type_l8: Map<any, any> = new Map([[String.fromCharCode(114,101,97,99,104,0),854], [String.fromCharCode(108,108,100,98,105,110,105,116,0),134]]);
       let sinaI: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,97,116,117,114,101,115,0),String.fromCharCode(110,101,116,0)], [String.fromCharCode(100,114,97,119,0),String.fromCharCode(109,101,115,115,97,103,101,0)], [String.fromCharCode(114,103,116,99,0),String.fromCharCode(112,97,116,104,0)]]);
      for (let l = 0; l < 1; l++) {
          let private_mx = false;
          let redirectL: Map<any, any> = new Map([[String.fromCharCode(97,108,98,117,109,115,0),56], [String.fromCharCode(101,120,104,97,117,115,116,105,118,101,0),372]]);
          let gradlewr: Array<any> = [660, 811, 455];
          let canvas_: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,103,110,105,122,101,0),458], [String.fromCharCode(116,101,115,116,98,105,116,0),421]]);
          let kickp = 5.0;
         type_l8.set(`${gradlewr.length}`, canvas_.size - gradlewr.length);
         private_mx = null != redirectL.get(`${private_mx}`);
         redirectL = new Map([[`${redirectL.size}`, 3 + parseInt(`${kickp}`)]]);
         canvas_.set(`${private_mx}`, redirectL.size);
         kickp /= Math.max(2, parseFloat(`${parseInt(`${kickp}`) | redirectL.size}`));
      }
         type_l8.set(`${sinaI.size}`, 1);
      for (let r = 0; r < 2; r++) {
         sinaI = new Map([[`${type_l8.size}`, 2]]);
      }
         sinaI = new Map([[`${sinaI.size}`, 2]]);
      while (Array.from(sinaI.values()).includes(type_l8.size)) {
         sinaI = new Map([[`${sinaI.size}`, sinaI.size]]);
         break;
      }
         type_l8.set(`${sinaI.size}`, type_l8.size ^ sinaI.size);
      libfb1 %= Math.max(4, fastforwardX / (Math.max(sinaI.size, 5)));
        setIsFullScreen(true);

   let rewindc = 5775366 <= episodew.length;
   do {
      episodew = [parseInt(`${finit_5df}`)];
      if (rewindc) {
         break;
      }
   } while (((2 | fastforwardX) >= 1 || 2 >= (fastforwardX | episodew.length)) && rewindc);
      chinaa /= Math.max((String.fromCharCode(102,0) == libavformatE ? parseInt(`${assistG}`) : libavformatE.length), 3);
      assistG *= parseFloat(`${3}`);
        

   let animationu = episodew.length >= 8827906;
   do {
      episodew.push(3);
      if (animationu) {
         break;
      }
   } while ((5 == (5 / (Math.max(10, libavformatE.length)))) && animationu);
   while (launch7 == String.fromCharCode(83,0) || libavformatE != String.fromCharCode(79,0)) {
      libavformatE = "2";
      break;
   }
   if (3 <= fastforwardX) {
       let imagemanagerH = String.fromCharCode(101,110,104,97,110,99,101,0);
       let rulesJ: Map<any, any> = new Map([[String.fromCharCode(97,97,99,112,115,0),String.fromCharCode(104,97,112,116,105,99,0)], [String.fromCharCode(109,105,103,114,97,116,105,111,110,0),String.fromCharCode(97,99,99,0)]]);
          let qcopy_t7 = String.fromCharCode(119,97,118,114,101,97,100,101,114,0);
         imagemanagerH += `${rulesJ.size}`;
         qcopy_t7 += `${qcopy_t7.length}`;
       let moreY: Array<any> = [String.fromCharCode(119,95,49,48,48,0), String.fromCharCode(114,101,119,97,114,100,0)];
       let plashG: Array<any> = [597, 411];
       let gmailu: Array<any> = [29, 614];
          let directc = 1;
          let libavdevice8 = String.fromCharCode(110,111,110,115,101,99,117,114,101,95,120,95,55,54,0);
          let pagec = String.fromCharCode(99,111,110,116,97,105,110,105,110,103,0);
         plashG.push(3 % (Math.max(7, directc)));
         directc <<= Math.min(Math.abs(3), 1);
         libavdevice8 = `${pagec.length}`;
         pagec = `${libavdevice8.length}`;
          let gesturex = 0.0;
          let spinnerF = 3;
          let containert = 5;
         rulesJ.set(`${containert}`, 3);
         gesturex -= parseFloat(`${spinnerF - parseInt(`${gesturex}`)}`);
         spinnerF <<= Math.min(3, Math.abs(spinnerF / (Math.max(parseInt(`${gesturex}`), 5))));
         containert <<= Math.min(Math.abs(parseInt(`${gesturex}`)), 5);
       let matchesw: Array<any> = [243, 826, 486];
      launch7 = `${libavformatE.length << (Math.min(mbbidd.length, 1))}`;
   }
        StatusBar.setHidden(true);

      fastforwardX >>= Math.min(Math.abs(parseInt(`${assistG}`) + mbbidd.length), 3);
      assistG += parseFloat(`${2}`);
       let sansf = 2;
       let placementv = 3;
         sansf &= placementv;
      for (let h = 0; h < 1; h++) {
          let customt = 2.0;
          let profileD = String.fromCharCode(98,111,120,112,108,111,116,0);
         placementv ^= parseInt(`${customt}`);
         customt *= (parseFloat(`${String.fromCharCode(95,0) == profileD ? profileD.length : profileD.length}`));
      }
      while ((2 & placementv) > 2) {
         sansf |= 2 * sansf;
         break;
      }
      if (5 <= (5 ^ sansf)) {
          let banners = false;
          let textinputf = String.fromCharCode(116,97,114,103,97,0);
          let libjsijniprofilero: Map<any, any> = new Map([[String.fromCharCode(99,95,52,50,0),40], [String.fromCharCode(116,114,105,112,108,101,0),586], [String.fromCharCode(116,97,103,103,105,110,103,0),744]]);
          let crownj: Array<any> = [299, 819, 117];
         placementv <<= Math.min(Math.abs(2), 4);
         banners = textinputf.length > 11;
         textinputf += "2";
         libjsijniprofilero = new Map([[`${libjsijniprofilero.size}`, crownj.length << (Math.min(3, Math.abs(libjsijniprofilero.size)))]]);
         crownj.push(2);
      }
         placementv &= sansf;
      if (placementv == sansf) {
         sansf |= placementv * sansf;
      }
      fastforwardX ^= 3 * episodew.length;

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
       let gestures6 = 5.0;
    let lineo: Map<any, any> = new Map([[String.fromCharCode(117,110,115,99,104,101,100,117,108,101,0),String.fromCharCode(97,118,101,114,97,103,101,0)], [String.fromCharCode(110,101,108,108,121,95,102,95,57,54,0),String.fromCharCode(110,119,105,115,101,0)]]);
    let singaporeD = false;
    let selectedk: Map<any, any> = new Map([[String.fromCharCode(100,101,99,114,101,102,0),248], [String.fromCharCode(110,111,115,99,97,108,101,0),497]]);
    let imagemanager6 = 5.0;
    let termsC: Array<any> = [238, 519];
    let feedback9 = 0.0;
    let delegate_j2o = true;
    let awayS = true;
       let rightF: Array<any> = [398, 506];
       let vinit_iI = String.fromCharCode(105,109,103,0);
       let listi: Map<any, any> = new Map([[String.fromCharCode(117,95,49,51,0),false ], [String.fromCharCode(115,116,97,99,107,101,100,0),true ], [String.fromCharCode(112,114,101,118,105,101,119,101,100,0),true ]]);
      let thumbnail3 = String.fromCharCode(95,50,57,112,49,115,103,0) == vinit_iI;
      do {
         vinit_iI += "3";
         if (thumbnail3) {
            break;
         }
      } while (thumbnail3 && (listi.size < 5));
      for (let s = 0; s < 1; s++) {
          let friendsS = true;
          let incidentc = String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,0);
          let projecth = 5;
         listi = new Map([[`${listi.size}`, listi.size]]);
         friendsS = !friendsS;
         incidentc = `${incidentc.length}`;
         projecth -= projecth;
      }
      if ((vinit_iI.length << (Math.min(Math.abs(2), 1))) >= 1 && 5 >= (2 << (Math.min(1, vinit_iI.length)))) {
         vinit_iI = `${vinit_iI.length >> (Math.min(1, Math.abs(listi.size)))}`;
      }
      let libjsijniprofiler8 = listi.size <= 5427428;
      do {
         listi = new Map([[`${rightF.length}`, rightF.length]]);
         if (libjsijniprofiler8) {
            break;
         }
      } while (libjsijniprofiler8 && ((listi.size % (Math.max(1, vinit_iI.length))) == 4 && 3 == (vinit_iI.length % 4)));
         rightF = [3];
      let mappingZ = rightF.length <= 8163894;
      do {
         rightF.push(2);
         if (mappingZ) {
            break;
         }
      } while (mappingZ && (5 <= (1 | rightF.length)));
          let libhermes4 = false;
          let nativemoduleC: Array<any> = [759, 895];
          let anythinkH = String.fromCharCode(121,109,111,100,101,0);
         listi.set(vinit_iI, 2);
         libhermes4 = 71 >= nativemoduleC.length;
         nativemoduleC.push((String.fromCharCode(112,0) == anythinkH ? nativemoduleC.length : anythinkH.length));
         rightF = [listi.size];
         vinit_iI = `${listi.size}`;
      imagemanager6 /= Math.max(parseFloat(`${vinit_iI.length | 3}`), 4);
       let regengZ: Array<any> = [701, 747, 149];
      while ((regengZ.length + 4) >= 4 || 1 >= (4 + regengZ.length)) {
         regengZ = [regengZ.length & regengZ.length];
         break;
      }
      for (let h = 0; h < 3; h++) {
         regengZ.push(3);
      }
          let settingW = String.fromCharCode(112,101,114,102,111,114,109,0);
         regengZ.push(settingW.length);
      lineo = new Map([[`${selectedk.size}`, selectedk.size % (Math.max(1, 9))]]);
   if (5 > (selectedk.size / (Math.max(1, 10))) && (1 & selectedk.size) > 5) {
       let home7 = String.fromCharCode(111,110,102,105,103,117,114,97,116,105,111,110,0);
       let whistles = 0;
      for (let j = 0; j < 3; j++) {
          let placementB: Map<any, any> = new Map([[String.fromCharCode(120,109,108,115,0),true ], [String.fromCharCode(97,108,116,101,114,101,100,0),false ], [String.fromCharCode(108,105,98,97,118,100,101,118,105,99,101,0),false ]]);
          let mbnativeadvancedO = 2;
          let flyery = String.fromCharCode(109,117,116,101,0);
         whistles %= Math.max(1 + mbnativeadvancedO, 5);
         placementB = new Map([[`${placementB.size}`, flyery.length * 3]]);
         mbnativeadvancedO += placementB.size;
         flyery = `${flyery.length >> (Math.min(5, Math.abs(placementB.size)))}`;
      }
          let colorsU = true;
          let minivodB = String.fromCharCode(115,117,103,103,101,115,116,105,111,110,0);
          let roomR: Map<any, any> = new Map([[String.fromCharCode(117,118,118,101,114,116,105,99,97,108,0),777], [String.fromCharCode(103,117,101,115,115,101,100,0),860], [String.fromCharCode(100,111,119,110,108,111,97,100,97,98,108,101,0),964]]);
         home7 = "1";
         colorsU = roomR.size > 56;
         minivodB = "3";
         roomR = new Map([[`${roomR.size}`, roomR.size]]);
         home7 = "1";
       let rulesS: Array<any> = [405, 864, 938];
          let modeI = String.fromCharCode(115,101,116,115,97,114,95,116,95,57,0);
         whistles /= Math.max(3, 4);
         modeI = `${modeI.length / 3}`;
      let gesturesf = home7.length <= 8618730;
      do {
         home7 = `${whistles}`;
         if (gesturesf) {
            break;
         }
      } while (((home7.length << (Math.min(2, Math.abs(whistles)))) <= 4) && gesturesf);
      feedback9 -= parseFloat(`${parseInt(`${feedback9}`) % (Math.max(home7.length, 4))}`);
   }
       let ksadr = String.fromCharCode(100,99,97,100,101,99,0);
       let popupL: Array<any> = [243, 803, 605];
      while (ksadr.includes(`${popupL.length}`)) {
          let round2 = 5.0;
          let sentryU = 2.0;
         ksadr = `${ksadr.length ^ popupL.length}`;
         round2 *= parseFloat(`${parseInt(`${sentryU}`) & parseInt(`${round2}`)}`);
         sentryU *= parseFloat(`${3 + parseInt(`${sentryU}`)}`);
         break;
      }
          let trashr = String.fromCharCode(105,110,100,101,120,101,115,0);
          let videoD: Array<any> = [381, 651, 827];
         ksadr = `${trashr.length}`;
         trashr = `${2 + videoD.length}`;
         videoD = [2 * videoD.length];
         ksadr = `${popupL.length ^ ksadr.length}`;
         ksadr += `${(ksadr == String.fromCharCode(106,0) ? popupL.length : ksadr.length)}`;
      for (let f = 0; f < 1; f++) {
          let applicationS = String.fromCharCode(118,109,97,102,109,111,116,105,111,110,100,115,112,0);
          let neonl: Array<any> = [547, 947, 173];
          let redirectu = String.fromCharCode(108,105,118,101,109,111,100,101,0);
          let dplusz = String.fromCharCode(97,100,115,97,114,109,97,115,109,0);
         ksadr = "1";
         applicationS += "2";
         neonl = [(redirectu == String.fromCharCode(101,0) ? redirectu.length : neonl.length)];
         dplusz += `${applicationS.length}`;
      }
      for (let l = 0; l < 2; l++) {
         ksadr += "1";
      }
      singaporeD = (((!singaporeD ? selectedk.size : 46) | selectedk.size) <= 55);
   if (4 < lineo.size && 2 < (4 - lineo.size)) {
      singaporeD = selectedk.size <= termsC.length;
   }
      selectedk.set(`${feedback9}`, parseInt(`${feedback9}`));
   let clock7 = 5519407.0 <= feedback9;
   do {
       let rulesv = String.fromCharCode(119,114,97,112,100,101,116,101,99,116,0);
       let sidex = String.fromCharCode(112,111,97,0);
       let analyticC = 5.0;
       let untickJ = 4.0;
       let uimanagerZ = 4.0;
         rulesv += `${1 << (Math.min(1, rulesv.length))}`;
      if ((parseInt(`${uimanagerZ}`) / (Math.max(4, rulesv.length))) >= 5 && 5 >= (parseInt(`${uimanagerZ}`) / (Math.max(5, rulesv.length)))) {
         rulesv = `${parseInt(`${analyticC}`) ^ parseInt(`${uimanagerZ}`)}`;
      }
      if (4 > (parseInt(`${untickJ}`) - 5) || 2.66 > (3.50 - untickJ)) {
         sidex += `${rulesv.length}`;
      }
          let submit4 = true;
          let side9: Array<any> = [891, 318, 822];
          let memberW = false;
         analyticC -= parseFloat(`${3}`);
         submit4 = side9.includes(submit4);
         side9 = [((submit4 ? 5 : 4) * side9.length)];
         memberW = !submit4 || side9.length >= 27;
         rulesv = `${parseInt(`${untickJ}`)}`;
      while (1.11 < (2.25 * untickJ) || (2.25 * untickJ) < 4.89) {
          let gpayP = String.fromCharCode(97,114,98,105,116,114,97,114,121,0);
          let mimoY = false;
          let cancelj: Map<any, any> = new Map([[String.fromCharCode(118,97,114,108,101,110,0),String.fromCharCode(116,97,110,103,101,110,116,0)], [String.fromCharCode(105,110,99,108,117,115,105,111,110,115,0),String.fromCharCode(99,117,114,115,111,114,115,116,114,101,97,109,119,114,97,112,112,101,114,0)]]);
          let common6 = String.fromCharCode(99,111,110,100,105,116,105,111,110,95,121,95,56,48,0);
          let matchesi = String.fromCharCode(112,117,114,103,101,95,53,95,51,54,0);
         untickJ += (String.fromCharCode(79,0) == common6 ? common6.length : matchesi.length);
         gpayP = `${((mimoY ? 4 : 3) ^ 1)}`;
         mimoY = !mimoY;
         cancelj = new Map([[`${cancelj.size}`, gpayP.length]]);
         matchesi += `${gpayP.length}`;
         break;
      }
      let time_lhE = untickJ <= 9507564.0;
      do {
          let downloaderM: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,0),751], [String.fromCharCode(112,114,107,0),772], [String.fromCharCode(112,97,114,116,0),899]]);
          let chartj = String.fromCharCode(115,117,98,115,116,114,0);
          let bootsplashr = true;
          let libjsiV = String.fromCharCode(112,114,101,116,101,110,100,0);
         untickJ -= (parseInt(`${analyticC}`) | (bootsplashr ? 1 : 3));
         downloaderM.set(libjsiV, libjsiV.length / 2);
         chartj = `${(chartj == String.fromCharCode(49,0) ? downloaderM.size : chartj.length)}`;
         bootsplashr = libjsiV.length < 16;
         if (time_lhE) {
            break;
         }
      } while (time_lhE && (3.2 <= untickJ));
         untickJ += (rulesv == String.fromCharCode(118,0) ? parseInt(`${untickJ}`) : rulesv.length);
         uimanagerZ += parseFloat(`${sidex.length | 2}`);
      for (let p = 0; p < 3; p++) {
         sidex = `${(rulesv == String.fromCharCode(120,0) ? parseInt(`${uimanagerZ}`) : rulesv.length)}`;
      }
      while (sidex.includes(`${analyticC}`)) {
          let sinaZ = 3;
          let launchb = String.fromCharCode(112,97,114,116,105,97,108,0);
          let enewarchdefaultsw = 2.0;
          let promotions = String.fromCharCode(109,97,114,107,101,114,0);
         analyticC -= parseFloat(`${parseInt(`${untickJ}`)}`);
         sinaZ ^= sinaZ & launchb.length;
         launchb = `${promotions.length >> (Math.min(Math.abs(2), 5))}`;
         enewarchdefaultsw += parseFloat(`${launchb.length}`);
         promotions = `${promotions.length}`;
         break;
      }
      feedback9 -= parseFloat(`${parseInt(`${untickJ}`) >> (Math.min(termsC.length, 1))}`);
      if (clock7) {
         break;
      }
   } while ((!singaporeD) && clock7);
   let android6 = 9039479 >= termsC.length;
   do {
      termsC.push(parseInt(`${gestures6}`) << (Math.min(Math.abs(lineo.size), 5)));
      if (android6) {
         break;
      }
   } while (((imagemanager6 - 1.53) <= 4.33 && (imagemanager6 - parseFloat(`${termsC.length}`)) <= 1.53) && android6);
       let sharedm = 5.0;
       let encryptr = String.fromCharCode(101,118,101,110,116,0);
      let commentP = String.fromCharCode(51,107,100,52,97,115,113,57,107,122,0) == encryptr;
      do {
         encryptr += `${parseInt(`${sharedm}`)}`;
         if (commentP) {
            break;
         }
      } while (((2 - encryptr.length) < 5) && commentP);
      let eventG = 7530624.0 <= sharedm;
      do {
         sharedm *= parseFloat(`${encryptr.length}`);
         if (eventG) {
            break;
         }
      } while ((encryptr.length >= 1) && eventG);
      while ((parseFloat(`${encryptr.length}`) * sharedm) > 2.71) {
         encryptr += "2";
         break;
      }
      for (let r = 0; r < 1; r++) {
          let topicz = 4.0;
         encryptr = `${parseInt(`${sharedm}`) | 3}`;
         topicz *= parseFloat(`${parseInt(`${topicz}`) & parseInt(`${topicz}`)}`);
      }
      while (sharedm < parseFloat(`${encryptr.length}`)) {
          let splashq: Map<any, any> = new Map([[String.fromCharCode(112,114,101,104,101,97,116,0),String.fromCharCode(115,121,110,116,104,101,115,105,122,101,0)], [String.fromCharCode(99,108,97,105,109,115,0),String.fromCharCode(112,108,111,116,0)], [String.fromCharCode(115,118,101,99,116,111,114,0),String.fromCharCode(103,101,110,101,114,97,116,101,0)]]);
          let arrowv = String.fromCharCode(116,114,99,0);
         sharedm *= (parseFloat(`${String.fromCharCode(103,0) == arrowv ? splashq.size : arrowv.length}`));
         break;
      }
         encryptr = `${(encryptr == String.fromCharCode(99,0) ? encryptr.length : parseInt(`${sharedm}`))}`;
      imagemanager6 += parseFloat(`${encryptr.length % (Math.max(6, selectedk.size))}`);
      delegate_j2o = delegate_j2o || feedback9 < 10.65;
   while (!delegate_j2o) {
      delegate_j2o = selectedk.size <= lineo.size;
      break;
   }
   for (let p = 0; p < 2; p++) {
       let default_hyi: Map<any, any> = new Map([[String.fromCharCode(102,111,108,108,111,119,115,0),679], [String.fromCharCode(102,112,117,116,115,95,101,95,53,48,0),770]]);
       let overlayi = String.fromCharCode(111,112,101,110,101,114,0);
         default_hyi = new Map([[`${default_hyi.size}`, overlayi.length]]);
      while (overlayi.length == default_hyi.size) {
          let values1 = String.fromCharCode(97,99,100,101,99,0);
          let relatedi = 3.0;
         overlayi += `${default_hyi.size ^ overlayi.length}`;
         values1 = `${values1.length}`;
         relatedi -= 2 + values1.length;
         break;
      }
         overlayi = `${default_hyi.size}`;
          let gesturesO = true;
          let filed2 = String.fromCharCode(101,115,99,97,112,101,115,0);
         overlayi += `${(String.fromCharCode(77,0) == filed2 ? (gesturesO ? 4 : 1) : filed2.length)}`;
          let entryx = String.fromCharCode(110,101,115,116,0);
         default_hyi = new Map([[`${default_hyi.size}`, default_hyi.size * 1]]);
         entryx = `${entryx.length}`;
      for (let u = 0; u < 2; u++) {
         overlayi += `${overlayi.length}`;
      }
      gestures6 += (parseFloat(`${parseInt(`${gestures6}`) & (singaporeD ? 1 : 3)}`));
   }
   if (4 <= (lineo.size + 1) || delegate_j2o) {
       let lightY = false;
       let projectd = 3;
       let gmaild = String.fromCharCode(108,111,97,100,105,110,103,0);
       let description_5ym = false;
      let libswscaler = 8537046 >= gmaild.length;
      do {
         gmaild = `${1 * projectd}`;
         if (libswscaler) {
            break;
         }
      } while (libswscaler && ((projectd & gmaild.length) < 4 || (projectd & gmaild.length) < 4));
      for (let e = 0; e < 1; e++) {
          let libimagepipelinew: Array<any> = [626, 589];
          let humidityT = false;
          let splash0: Array<any> = [210, 169];
         description_5ym = gmaild.length < 17;
         libimagepipelinew.push(3);
         humidityT = libimagepipelinew.length >= 19 && splash0.length >= 19;
         splash0 = [(3 % (Math.max(4, (humidityT ? 3 : 4))))];
      }
          let aboutM = 3;
          let libreactnativeblobA: Map<any, any> = new Map([[String.fromCharCode(98,101,99,104,0),646], [String.fromCharCode(121,95,53,55,95,114,101,97,100,108,110,0),359], [String.fromCharCode(117,116,99,0),243]]);
          let sinaq = String.fromCharCode(116,104,105,114,100,0);
         lightY = !sinaq.startsWith(`${lightY}`);
         aboutM &= aboutM;
         libreactnativeblobA.set(`${aboutM}`, libreactnativeblobA.size << (Math.min(5, Math.abs(aboutM))));
         sinaq = `${aboutM | libreactnativeblobA.size}`;
      if (gmaild.length < 4 && !description_5ym) {
          let point3 = 5;
          let downloadc = 0;
          let sharedK = 1.0;
         description_5ym = point3 == parseInt(`${sharedK}`);
         point3 %= Math.max(3, downloadc * 2);
         downloadc >>= Math.min(2, Math.abs(2 ^ downloadc));
      }
         gmaild = "3";
         gmaild = `${projectd}`;
      if ((2 << (Math.min(1, Math.abs(projectd)))) == 3) {
          let unselectedN = true;
          let update_rv = 0.0;
          let backgroundU = String.fromCharCode(110,97,109,101,115,101,114,118,101,114,115,95,119,95,54,48,0);
          let tickY = String.fromCharCode(102,105,110,100,95,120,95,49,52,0);
         projectd /= Math.max(5, (gmaild.length >> (Math.min(1, Math.abs((description_5ym ? 1 : 3))))));
         unselectedN = tickY == backgroundU;
         update_rv *= parseInt(`${update_rv}`);
         backgroundU += `${tickY.length}`;
      }
      if ((projectd >> (Math.min(Math.abs(5), 5))) > 4 || (projectd >> (Math.min(Math.abs(5), 2))) > 5) {
         projectd *= 1;
      }
      if (3 == gmaild.length) {
          let libfabricjniV = String.fromCharCode(116,105,112,115,0);
         projectd &= ((description_5ym ? 4 : 4));
         libfabricjniV += `${libfabricjniV.length * libfabricjniV.length}`;
      }
         lightY = !lightY;
      for (let t = 0; t < 2; t++) {
          let catalogs = String.fromCharCode(101,110,117,109,101,114,97,116,101,0);
          let y_center8 = 0.0;
         projectd >>= Math.min(4, parseInt(`${Math.abs(((lightY ? 3 : 3) / (Math.max(1, parseInt(`${y_center8}`)))))}`));
         catalogs += `${catalogs.length * 1}`;
         y_center8 -= catalogs.length;
      }
          let orangem = false;
          let untickm = 5.0;
         description_5ym = 75 <= projectd;
         orangem = 100.9 >= untickm && orangem;
         untickm += (parseFloat(`${(orangem ? 5 : 1) | parseInt(`${untickm}`)}`));
      lineo = new Map([[`${delegate_j2o}`, 2]]);
   }
      lineo.set(`${imagemanager6}`, 1 - selectedk.size);
      termsC = [selectedk.size];
      delegate_j2o = 42.94 < gestures6 || awayS;

        console.log("Error!", err, time);
      }
    };

    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    

    const onSeekGesture = (time: number) => {
      if (disableSeek.current === true) return
      if (currentTime < time) {
        setSeekDirection("valuesLangConstants");
      } else {
        setSeekDirection("libreactnativejniProfile");
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
       let desc3 = 4.0;
    let stepP = 1.0;
    let logouto = 5.0;
    let downloadz = String.fromCharCode(111,112,112,111,115,105,116,101,0);
    let configx = 0.0;
    let indicator3 = String.fromCharCode(109,115,101,120,0);
    let predictiond = String.fromCharCode(112,111,108,121,0);
    let memberE = 4.0;
    let klevinq = 3.0;
    let green4 = String.fromCharCode(111,112,101,110,115,115,108,95,51,95,51,56,0);
    let libjsijniprofilerY: Map<any, any> = new Map([[String.fromCharCode(98,114,97,110,99,104,0),true ], [String.fromCharCode(97,98,115,120,95,108,95,55,54,0),false ], [String.fromCharCode(115,105,103,105,108,108,0),true ]]);
    let moviesL = 0.0;
    let watchv = String.fromCharCode(112,115,110,114,120,0);
    let sportT = false;
   let nextm = klevinq <= 5785340.0;
   do {
      klevinq -= parseInt(`${memberE}`);
      if (nextm) {
         break;
      }
   } while (nextm && (3.5 > (3.93 / (Math.max(1, memberE))) || 1.12 > (3.93 * klevinq)));
       let backgroundq = String.fromCharCode(102,105,110,100,101,112,0);
       let modalz = String.fromCharCode(98,97,99,107,98,114,111,117,110,100,0);
       let filterB = String.fromCharCode(101,108,101,109,101,110,116,119,105,115,101,0);
          let libjsinspectorv = 2;
          let handlerB = 5.0;
          let greyw = String.fromCharCode(99,111,108,114,97,109,0);
         filterB += `${(modalz == String.fromCharCode(56,0) ? modalz.length : greyw.length)}`;
         libjsinspectorv %= Math.max(parseInt(`${handlerB}`) + libjsinspectorv, 2);
         handlerB *= 1 + libjsinspectorv;
         greyw += `${libjsinspectorv % 3}`;
       let turnn = 2;
       let delegate_d9h = 2;
         modalz += `${delegate_d9h << (Math.min(Math.abs(3), 2))}`;
         turnn >>= Math.min(5, Math.abs(backgroundq.length << (Math.min(modalz.length, 1))));
      if (!filterB.includes(backgroundq)) {
         backgroundq += `${modalz.length}`;
      }
      if (backgroundq == modalz) {
         modalz += `${backgroundq.length ^ modalz.length}`;
      }
          let sliderk = String.fromCharCode(103,95,51,51,95,100,108,114,114,0);
          let progressg = true;
          let iconf = String.fromCharCode(98,99,109,112,0);
         filterB += `${backgroundq.length - 2}`;
         sliderk += `${iconf.length * 1}`;
         progressg = 81 >= sliderk.length;
         iconf = `${sliderk.length / 2}`;
          let typingj = 5;
          let productg = String.fromCharCode(107,109,115,0);
          let hongkongX = String.fromCharCode(115,117,112,112,111,114,116,0);
         turnn /= Math.max(1, productg.length);
         typingj += (String.fromCharCode(110,0) == hongkongX ? hongkongX.length : typingj);
         productg = `${3 + typingj}`;
          let faviconQ = String.fromCharCode(99,111,110,115,116,114,97,105,110,116,0);
          let carouselz = 3.0;
          let logoutu = 3.0;
         filterB = `${modalz.length - 3}`;
         faviconQ = `${1 << (Math.min(2, Math.abs(parseInt(`${carouselz}`))))}`;
         carouselz += parseFloat(`${parseInt(`${carouselz}`) >> (Math.min(faviconQ.length, 5))}`);
         logoutu *= 3 + faviconQ.length;
      memberE -= (predictiond == String.fromCharCode(117,0) ? parseInt(`${memberE}`) : predictiond.length);
       let projectn: Array<any> = [741, 379];
       let shared5 = 2;
       let libglogS = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,115,0);
         libglogS = `${shared5 & 2}`;
         libglogS = `${projectn.length | 2}`;
      if (libglogS.length == projectn.length) {
         projectn.push(3);
      }
      while (!projectn.includes(shared5)) {
          let gmailU = String.fromCharCode(117,105,110,116,108,101,0);
          let latn7 = String.fromCharCode(99,111,111,107,100,97,116,97,0);
          let libgloga = String.fromCharCode(97,99,102,102,0);
          let target3 = String.fromCharCode(115,97,118,101,109,101,100,105,97,0);
          let loadingI: Map<any, any> = new Map([[String.fromCharCode(112,95,54,55,95,116,114,105,97,108,115,0),552], [String.fromCharCode(100,105,109,101,110,115,105,111,110,0),670]]);
         projectn = [libgloga.length | shared5];
         gmailU += `${target3.length - gmailU.length}`;
         latn7 += `${gmailU.length / (Math.max(2, 7))}`;
         libgloga += "2";
         target3 += `${2 / (Math.max(4, latn7.length))}`;
         loadingI = new Map([[target3, latn7.length]]);
         break;
      }
      for (let b = 0; b < 2; b++) {
         shared5 -= 3;
      }
         projectn.push(projectn.length);
      if (5 < (projectn.length % 1) && 1 < (shared5 % 1)) {
         projectn = [libglogS.length >> (Math.min(Math.abs(2), 4))];
      }
         projectn.push(libglogS.length + shared5);
      while (projectn.length > 2) {
          let fullD = 0.0;
         shared5 -= 3 >> (Math.min(4, libglogS.length));
         fullD /= Math.max(parseInt(`${fullD}`), 3);
         break;
      }
      logouto /= Math.max(parseInt(`${configx}`), 4);
   let latnP = indicator3 == String.fromCharCode(98,103,55,49,0);
   do {
       let eighteenB = String.fromCharCode(100,97,112,112,0);
      for (let k = 0; k < 2; k++) {
         eighteenB += `${eighteenB.length}`;
      }
      while (!eighteenB.endsWith(`${eighteenB.length}`)) {
         eighteenB = `${3 ^ eighteenB.length}`;
         break;
      }
         eighteenB += `${eighteenB.length & 3}`;
      indicator3 += `${parseInt(`${configx}`)}`;
      if (latnP) {
         break;
      }
   } while ((4.68 < (desc3 - 4.70)) && latnP);
      klevinq /= Math.max(2, 2);
      downloadz += "3";
   let buildO = String.fromCharCode(100,114,49,119,53,57,0) == green4;
   do {
      green4 = `${indicator3.length ^ green4.length}`;
      if (buildO) {
         break;
      }
   } while ((5.41 >= desc3) && buildO);
   for (let r = 0; r < 3; r++) {
       let large0 = String.fromCharCode(105,100,97,116,0);
       let closeE = String.fromCharCode(117,110,112,97,99,107,0);
      while (closeE == String.fromCharCode(112,0)) {
         large0 += "1";
         break;
      }
      let xadsdkX = closeE.length >= 6129170;
      do {
         closeE += `${closeE.length - 1}`;
         if (xadsdkX) {
            break;
         }
      } while ((4 >= large0.length) && xadsdkX);
      for (let e = 0; e < 3; e++) {
         large0 += `${2 << (Math.min(1, closeE.length))}`;
      }
         large0 = `${large0.length}`;
       let a_lockp = String.fromCharCode(105,110,100,101,110,116,101,100,0);
      for (let k = 0; k < 3; k++) {
         a_lockp = `${closeE.length}`;
      }
      desc3 += 2;
   }
   if ((logouto / 4.97) == 4.16 || 3.71 == (4.97 - logouto)) {
       let completeJ = String.fromCharCode(116,97,107,101,110,0);
       let umeng3 = true;
      while (!completeJ.includes(`${umeng3}`)) {
         umeng3 = completeJ.length >= 30;
         break;
      }
         umeng3 = completeJ.startsWith(`${umeng3}`);
          let phoneu: Array<any> = [123, 985, 323];
         completeJ += `${phoneu.length}`;
         completeJ = `${(completeJ.length - (umeng3 ? 2 : 5))}`;
         completeJ += `${completeJ.length}`;
      while (!completeJ.endsWith(`${umeng3}`)) {
         completeJ = `${completeJ.length}`;
         break;
      }
      logouto *= indicator3.length | predictiond.length;
   }
       let configurev = 3;
       let subs5 = String.fromCharCode(108,101,110,118,108,99,0);
      if (1 <= (configurev << (Math.min(Math.abs(2), 5))) && (2 << (Math.min(3, Math.abs(configurev)))) <= 5) {
         subs5 += `${configurev >> (Math.min(subs5.length, 2))}`;
      }
         subs5 = `${subs5.length % 2}`;
         configurev &= configurev | 1;
      while (subs5.includes(`${configurev}`)) {
          let macau2 = String.fromCharCode(103,110,111,0);
          let diced = 0.0;
          let shootR = 4.0;
          let hookl = String.fromCharCode(105,101,101,101,0);
          let launchK = 2.0;
         configurev %= Math.max(2, subs5.length & 2);
         macau2 = `${macau2.length * parseInt(`${diced}`)}`;
         diced /= Math.max(2, parseFloat(`${parseInt(`${launchK}`)}`));
         shootR -= parseInt(`${shootR}`) >> (Math.min(3, Math.abs(1)));
         hookl += `${hookl.length % (Math.max(macau2.length, 5))}`;
         launchK *= (parseFloat(`${macau2 == String.fromCharCode(82,0) ? parseInt(`${shootR}`) : macau2.length}`));
         break;
      }
      let photoH = configurev >= 5529339;
      do {
         configurev -= subs5.length;
         if (photoH) {
            break;
         }
      } while (photoH && (1 > configurev));
      while (!subs5.includes(`${configurev}`)) {
         configurev ^= subs5.length;
         break;
      }
      libjsijniprofilerY = new Map([[`${libjsijniprofilerY.size}`, (subs5 == String.fromCharCode(100,0) ? libjsijniprofilerY.size : subs5.length)]]);
      downloadz += `${1 / (Math.max(5, parseInt(`${desc3}`)))}`;
      indicator3 = `${3 / (Math.max(8, parseInt(`${stepP}`)))}`;
       let typesh = 1.0;
       let liveV = String.fromCharCode(97,118,101,114,97,103,101,115,95,111,95,50,56,0);
       let acceptedw = String.fromCharCode(112,114,111,116,111,99,111,108,115,0);
      if (2.17 >= (1.74 - typesh)) {
         typesh -= parseFloat(`${liveV.length % (Math.max(8, parseInt(`${typesh}`)))}`);
      }
          let m_positionM = String.fromCharCode(110,101,117,116,114,97,108,0);
          let combined7 = String.fromCharCode(100,105,118,105,100,101,0);
         liveV += "2";
         m_positionM += `${(String.fromCharCode(68,0) == combined7 ? m_positionM.length : combined7.length)}`;
          let settingQ: Array<any> = [184, 266];
          let edita: Map<any, any> = new Map([[String.fromCharCode(116,105,110,105,116,0),true ], [String.fromCharCode(99,104,114,111,109,97,104,111,108,100,0),false ], [String.fromCharCode(117,110,97,118,97,105,108,97,98,101,0),true ]]);
         acceptedw += `${1 + settingQ.length}`;
         settingQ.push(edita.size + 3);
         edita = new Map([[`${edita.size}`, 2]]);
      let customx = acceptedw.length >= 6416049;
      do {
          let frame_hQ = String.fromCharCode(103,105,103,97,98,121,116,101,115,0);
          let nextu: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,101,114,109,95,108,95,50,49,0),String.fromCharCode(116,101,108,101,103,114,97,0)], [String.fromCharCode(97,114,99,104,0),String.fromCharCode(118,95,53,57,95,108,97,112,108,97,99,101,0)], [String.fromCharCode(109,117,116,97,116,105,110,103,0),String.fromCharCode(104,105,115,116,111,114,105,101,115,0)]]);
         acceptedw = `${nextu.size}`;
         frame_hQ += `${3 >> (Math.min(4, frame_hQ.length))}`;
         nextu.set(frame_hQ, (frame_hQ == String.fromCharCode(87,0) ? frame_hQ.length : frame_hQ.length));
         if (customx) {
            break;
         }
      } while (customx && (liveV == String.fromCharCode(115,0)));
      for (let m = 0; m < 3; m++) {
         typesh -= parseFloat(`${2}`);
      }
      while (liveV.startsWith(acceptedw)) {
          let splashK = String.fromCharCode(114,101,99,111,110,105,110,116,101,114,0);
          let mbsplashW: Map<any, any> = new Map([[String.fromCharCode(99,118,99,0),145], [String.fromCharCode(108,105,115,116,101,110,105,110,103,0),66], [String.fromCharCode(105,110,100,101,102,105,110,105,116,101,108,121,0),918]]);
          let libavutilP: Array<any> = [389, 694, 907];
         liveV += `${libavutilP.length}`;
         splashK += "3";
         mbsplashW = new Map([[`${mbsplashW.size}`, splashK.length]]);
         libavutilP.push(3);
         break;
      }
       let expand2: Array<any> = [202, 192, 392];
          let regengO = String.fromCharCode(100,101,99,108,0);
          let p_countG = String.fromCharCode(110,101,103,111,116,105,97,116,101,100,0);
         acceptedw = `${acceptedw.length}`;
         regengO = `${regengO.length}`;
         p_countG += `${p_countG.length + 3}`;
      for (let r = 0; r < 1; r++) {
         expand2 = [parseInt(`${typesh}`) << (Math.min(5, Math.abs(3)))];
      }
      libjsijniprofilerY.set(`${logouto}`, parseInt(`${logouto}`) * parseInt(`${desc3}`));
   let cinit_8fQ = downloadz.length <= 7429652;
   do {
       let downq = 4.0;
      for (let k = 0; k < 3; k++) {
          let componentA = false;
         downq *= (parseFloat(`${parseInt(`${downq}`) ^ (componentA ? 5 : 3)}`));
      }
      while (downq > downq) {
          let maths = String.fromCharCode(109,112,101,103,118,105,100,101,111,0);
          let armvaD: Map<any, any> = new Map([[String.fromCharCode(100,101,115,101,108,101,99,116,0),809], [String.fromCharCode(115,117,98,109,111,100,117,108,101,0),200], [String.fromCharCode(101,118,114,99,0),901]]);
          let statione = 5;
          let trophyW = 3;
          let update_4W = 5.0;
         downq /= Math.max(5, parseFloat(`${statione >> (Math.min(3, Math.abs(trophyW)))}`));
         maths = `${armvaD.size & 2}`;
         armvaD.set(`${update_4W}`, armvaD.size - parseInt(`${update_4W}`));
         statione /= Math.max((String.fromCharCode(72,0) == maths ? maths.length : armvaD.size), 1);
         trophyW %= Math.max(5, armvaD.size | 2);
         break;
      }
       let libreactg: Array<any> = [718, 621];
      downloadz += `${(String.fromCharCode(111,0) == indicator3 ? green4.length : indicator3.length)}`;
      if (cinit_8fQ) {
         break;
      }
   } while ((!downloadz.startsWith(`${desc3}`)) && cinit_8fQ);
      moviesL /= Math.max(downloadz.length, 4);
   for (let s = 0; s < 2; s++) {
       let clockw: Map<any, any> = new Map([[String.fromCharCode(108,117,109,98,101,114,106,97,99,107,95,103,95,57,48,0),357], [String.fromCharCode(104,117,102,102,109,97,110,0),880]]);
       let t_center7 = String.fromCharCode(99,108,101,97,114,98,105,116,0);
         t_center7 += "2";
       let delegate_zu1 = 1.0;
      let streamingH = String.fromCharCode(104,110,105,95,97,111,56,108,121,0) == t_center7;
      do {
         t_center7 += `${parseInt(`${delegate_zu1}`)}`;
         if (streamingH) {
            break;
         }
      } while ((2.36 <= delegate_zu1) && streamingH);
       let moduleE: Map<any, any> = new Map([[String.fromCharCode(99,111,109,101,0),632], [String.fromCharCode(98,105,116,112,108,97,110,101,0),380], [String.fromCharCode(109,117,108,116,105,112,97,114,116,0),263]]);
         moduleE = new Map([[`${moduleE.size}`, t_center7.length]]);
      let const_908 = 4966566.0 >= delegate_zu1;
      do {
          let libreactperfloggerjni9: Array<any> = [867, 558];
          let fileK = String.fromCharCode(97,108,108,111,119,101,100,0);
          let alertK = String.fromCharCode(103,101,116,105,110,116,0);
         delegate_zu1 += parseFloat(`${clockw.size}`);
         libreactperfloggerjni9 = [alertK.length];
         fileK = `${fileK.length ^ alertK.length}`;
         if (const_908) {
            break;
         }
      } while ((moduleE.size == 3) && const_908);
      memberE /= Math.max(1, 5);
   }
       let forwardO = String.fromCharCode(99,97,99,104,101,102,108,117,115,104,0);
          let step2 = String.fromCharCode(99,104,101,99,107,105,110,0);
          let productu = String.fromCharCode(114,101,115,99,104,101,100,117,108,101,0);
         forwardO += `${step2.length}`;
         step2 += `${(String.fromCharCode(54,0) == productu ? productu.length : productu.length)}`;
      while (forwardO.length == 1) {
          let s_position4: Array<any> = [585, 256, 639];
          let register_guC = 4.0;
          let active4: Map<any, any> = new Map([[String.fromCharCode(103,101,116,100,105,103,105,116,0),680], [String.fromCharCode(115,101,99,116,105,110,115,0),940], [String.fromCharCode(121,95,51,50,95,112,114,111,100,117,99,116,102,0),493]]);
          let showV = 0.0;
          let switch__aQ = String.fromCharCode(119,114,105,116,116,101,110,0);
         forwardO += `${switch__aQ.length / (Math.max(forwardO.length, 6))}`;
         s_position4 = [s_position4.length - 1];
         register_guC /= Math.max(parseFloat(`${parseInt(`${register_guC}`) | 2}`), 4);
         active4.set(`${register_guC}`, 2 * parseInt(`${register_guC}`));
         showV -= s_position4.length;
         switch__aQ = `${parseInt(`${register_guC}`) / 3}`;
         break;
      }
      let smallr = 9693729 >= forwardO.length;
      do {
         forwardO += `${forwardO.length & forwardO.length}`;
         if (smallr) {
            break;
         }
      } while (smallr && (forwardO != String.fromCharCode(54,0) && forwardO != String.fromCharCode(112,0)));
      indicator3 += "2";
   let orange5 = configx <= 5762973.0;
   do {
      configx -= parseFloat(`${3}`);
      if (orange5) {
         break;
      }
   } while (orange5 && (4 == (2 ^ indicator3.length) || (2 - indicator3.length) == 4));
   if (3.85 <= moviesL) {
       let launchG = 3.0;
       let h_unlockk = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,97,116,97,0);
       let zhuboh = 4;
       let greene = false;
       let vietnam8 = 5;
         greene = 96 >= zhuboh;
         h_unlockk = `${((greene ? 4 : 5) ^ vietnam8)}`;
      let area_ = greene ? !greene : greene;
      do {
          let floaterc = String.fromCharCode(102,117,110,99,116,105,111,110,95,98,95,56,55,0);
          let invite4: Map<any, any> = new Map([[String.fromCharCode(108,111,103,105,99,0),String.fromCharCode(105,95,49,53,95,115,99,97,108,97,114,112,114,111,100,117,99,116,0)], [String.fromCharCode(106,95,52,49,0),String.fromCharCode(109,97,106,111,114,0)], [String.fromCharCode(99,112,117,105,100,95,56,95,50,56,0),String.fromCharCode(117,110,108,105,110,107,0)]]);
          let chinal = false;
          let settingsT = 5.0;
         greene = invite4.get(`${chinal}`) != null;
         floaterc += `${(floaterc == String.fromCharCode(56,0) ? parseInt(`${settingsT}`) : floaterc.length)}`;
         invite4.set(floaterc, parseInt(`${settingsT}`) / (Math.max(4, floaterc.length)));
         chinal = String.fromCharCode(100,0) == floaterc;
         if (area_) {
            break;
         }
      } while ((!h_unlockk.includes(`${greene}`)) && area_);
         h_unlockk += `${vietnam8}`;
      let infoB = greene ? !greene : greene;
      do {
         greene = String.fromCharCode(67,0) == h_unlockk;
         if (infoB) {
            break;
         }
      } while ((2 <= (vietnam8 >> (Math.min(Math.abs(3), 3))) && vietnam8 <= 3) && infoB);
         zhuboh <<= Math.min(Math.abs(parseInt(`${launchG}`)), 4);
      while (1.47 <= launchG) {
          let photoO = String.fromCharCode(114,101,112,101,97,116,101,114,0);
          let reducer4 = String.fromCharCode(114,116,112,112,114,111,116,111,0);
          let completex = String.fromCharCode(115,101,112,105,97,0);
          let goalU: Array<any> = [161, 230];
          let transferG: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,0),538], [String.fromCharCode(115,105,108,101,110,99,101,0),518]]);
         h_unlockk += `${zhuboh}`;
         photoO += `${completex.length << (Math.min(Math.abs(2), 1))}`;
         reducer4 = `${transferG.size * 1}`;
         completex = `${(String.fromCharCode(70,0) == completex ? completex.length : transferG.size)}`;
         goalU.push(3 - photoO.length);
         break;
      }
         vietnam8 ^= 2;
       let renewc = 1;
         h_unlockk += "3";
      for (let w = 0; w < 3; w++) {
         vietnam8 &= vietnam8 % 2;
      }
      let redirectA = 5910685 >= vietnam8;
      do {
          let headerw = String.fromCharCode(105,110,115,101,110,115,105,116,105,118,101,0);
          let mathE: Array<any> = [337, 4];
          let large_ = String.fromCharCode(98,111,111,116,104,0);
          let huaweiB = true;
          let taiwane = 2.0;
         vietnam8 |= (String.fromCharCode(120,0) == large_ ? mathE.length : large_.length);
         headerw = `${(2 | (huaweiB ? 2 : 2))}`;
         mathE.push((headerw.length / (Math.max(10, (huaweiB ? 2 : 2)))));
         taiwane -= parseInt(`${taiwane}`);
         if (redirectA) {
            break;
         }
      } while ((h_unlockk.includes(`${vietnam8}`)) && redirectA);
         launchG -= h_unlockk.length << (Math.min(1, Math.abs(parseInt(`${launchG}`))));
         renewc &= 2 >> (Math.min(3, h_unlockk.length));
      while (!h_unlockk.includes(`${vietnam8}`)) {
          let gesturesn: Array<any> = [437, 441];
          let delegate_6M = String.fromCharCode(97,118,100,101,118,105,99,101,0);
         vietnam8 /= Math.max(4, zhuboh);
         gesturesn = [gesturesn.length | delegate_6M.length];
         delegate_6M = "3";
         break;
      }
      moviesL += 3;
   }
   if ((stepP * 3.72) >= 3.81) {
      stepP += parseFloat(`${parseInt(`${logouto}`) - downloadz.length}`);
   }
   let attributedstringy = green4.length <= 5519770;
   do {
      green4 += `${libjsijniprofilerY.size + 3}`;
      if (attributedstringy) {
         break;
      }
   } while ((1 <= (green4.length ^ libjsijniprofilerY.size) && 4 <= (green4.length ^ 1)) && attributedstringy);
   if (4 >= (predictiond.length * parseInt(`${moviesL}`))) {
      predictiond = `${downloadz.length}`;
   }
       let signinupw: Map<any, any> = new Map([[String.fromCharCode(111,117,116,113,0),false ], [String.fromCharCode(104,101,97,100,101,114,0),true ], [String.fromCharCode(100,101,110,111,105,115,105,110,103,0),false ]]);
          let anytimes = false;
          let mimoK = String.fromCharCode(109,101,109,115,101,116,0);
          let mbbidu = 1.0;
         signinupw.set(mimoK, mimoK.length);
         anytimes = mbbidu > 92.70;
         mbbidu += parseFloat(`${2 * parseInt(`${mbbidu}`)}`);
          let backs = 3.0;
          let foundf = true;
          let fastforwardV = String.fromCharCode(103,119,103,116,0);
         signinupw.set(`${foundf}`, 1 % (Math.max(parseInt(`${backs}`), 3)));
         backs *= (fastforwardV == String.fromCharCode(54,0) ? fastforwardV.length : fastforwardV.length);
         foundf = fastforwardV.length == fastforwardV.length;
      for (let j = 0; j < 3; j++) {
         signinupw.set(`${signinupw.size}`, signinupw.size);
      }
      libjsijniprofilerY.set(`${stepP}`, parseInt(`${stepP}`) % (Math.max(green4.length, 4)));
   let screenb = 7074874.0 <= desc3;
   do {
       let detailsW = 4.0;
       let videojsX = 5.0;
       let dangerb = String.fromCharCode(99,114,101,100,101,110,116,105,97,108,115,0);
       let selectiong = String.fromCharCode(115,111,117,110,100,101,120,0);
       let models7 = 0;
         selectiong += `${selectiong.length & 2}`;
      if (3.60 < (5.78 - videojsX) || 5.78 < (detailsW - videojsX)) {
         detailsW *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${detailsW}`)), 5))}`);
      }
      let history_ = 9265464 >= dangerb.length;
      do {
          let update_ct1 = String.fromCharCode(116,100,101,99,111,100,101,0);
         dangerb += `${3 ^ selectiong.length}`;
         update_ct1 += `${update_ct1.length}`;
         if (history_) {
            break;
         }
      } while ((detailsW <= parseFloat(`${dangerb.length}`)) && history_);
      for (let o = 0; o < 3; o++) {
         videojsX += parseFloat(`${parseInt(`${detailsW}`)}`);
      }
       let stylesJ: Map<any, any> = new Map([[String.fromCharCode(99,111,101,102,102,115,112,0),false ], [String.fromCharCode(113,117,97,108,105,116,121,0),false ], [String.fromCharCode(101,121,101,0),false ]]);
       let orangeF: Map<any, any> = new Map([[String.fromCharCode(104,111,114,105,103,0),true ], [String.fromCharCode(119,104,116,120,0),false ], [String.fromCharCode(117,110,115,104,105,102,116,0),false ]]);
      while ((orangeF.size | stylesJ.size) > 1 || (orangeF.size | stylesJ.size) > 1) {
         orangeF.set(selectiong, (String.fromCharCode(51,0) == selectiong ? stylesJ.size : selectiong.length));
         break;
      }
         selectiong += `${(String.fromCharCode(79,0) == selectiong ? selectiong.length : dangerb.length)}`;
      while (detailsW == 5.3) {
         videojsX /= Math.max(2, parseFloat(`${parseInt(`${detailsW}`)}`));
         break;
      }
       let rewardvideot = String.fromCharCode(112,114,111,120,121,0);
       let settingx = String.fromCharCode(103,95,54,50,95,116,114,105,97,110,103,108,101,115,0);
         orangeF.set(`${selectiong}`, 2);
         rewardvideot = `${parseInt(`${videojsX}`)}`;
         detailsW /= Math.max(parseFloat(`${selectiong.length}`), 5);
      while (5 > (rewardvideot.length + orangeF.size) || (orangeF.size + rewardvideot.length) > 5) {
          let matchesE = 1;
          let bingZ = 2;
         rewardvideot += `${2 ^ parseInt(`${detailsW}`)}`;
         matchesE >>= Math.min(1, Math.abs(bingZ));
         break;
      }
         detailsW /= Math.max(2, parseFloat(`${settingx.length * rewardvideot.length}`));
      if ((rewardvideot.length | orangeF.size) < 3 && 2 < (orangeF.size | 3)) {
          let aboutD = 4.0;
         orangeF.set(selectiong, selectiong.length);
         aboutD /= Math.max(4, 1);
      }
      desc3 *= 1;
      if (screenb) {
         break;
      }
   } while (((logouto / (Math.max(1, 2))) > 5.78) && screenb);
       let refreshB = true;
       let sidet = 2.0;
      if ((sidet - 2.6) <= 2.64 || 2.6 <= sidet) {
         refreshB = !refreshB || 14.40 >= sidet;
      }
          let nalyticsN = 4;
          let downloader5 = String.fromCharCode(105,110,116,101,114,118,97,108,115,0);
         refreshB = (nalyticsN - sidet) < 10;
         nalyticsN >>= Math.min(5, downloader5.length);
         downloader5 += `${downloader5.length >> (Math.min(5, downloader5.length))}`;
      if (sidet >= 1.24 && 5.56 >= (1.24 + sidet)) {
         refreshB = !refreshB;
      }
         refreshB = !refreshB;
      while (sidet == 2.31 && 4.72 == (sidet + 2.31)) {
         sidet /= Math.max(parseInt(`${sidet}`) | 2, 4);
         break;
      }
         refreshB = 62.94 >= sidet;
      indicator3 = `${3 >> (Math.min(Math.abs(parseInt(`${stepP}`)), 5))}`;
      klevinq *= 1;

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
       let darks = String.fromCharCode(98,108,117,114,108,101,115,115,0);
    let selectz = true;
    let codegenF = true;
    let fastforwardU: Map<any, any> = new Map([[String.fromCharCode(97,112,115,0),String.fromCharCode(99,111,97,108,101,115,99,101,0)], [String.fromCharCode(117,110,114,101,115,111,108,118,97,98,108,101,0),String.fromCharCode(115,97,105,122,0)], [String.fromCharCode(99,111,111,114,100,115,0),String.fromCharCode(112,114,111,118,105,115,105,111,110,0)]]);
    let gpayU: Array<any> = [162, 648];
    let feedbackM: Map<any, any> = new Map([[String.fromCharCode(104,97,108,100,99,108,117,116,0),363], [String.fromCharCode(111,118,101,114,108,97,112,112,101,100,0),839]]);
    let moviesX: Array<any> = [879, 925];
    let tnewarchdefaultsp = 4.0;
    let fadfdeebbbfdabbbabdadfaaddaag = String.fromCharCode(97,119,97,105,116,105,110,103,0);
    let r_managerC = 2.0;
    let currentx = 4;
    let downloaderY = 4;
    let libreactO: Array<any> = [282, 680];
    let langD = String.fromCharCode(117,110,108,105,109,105,116,101,100,0);
   for (let d = 0; d < 1; d++) {
      tnewarchdefaultsp -= parseInt(`${r_managerC}`) | darks.length;
   }
   while (fastforwardU.size > 4) {
      fastforwardU.set(`${gpayU.length}`, fastforwardU.size);
      break;
   }
   while (tnewarchdefaultsp < 1.34) {
      tnewarchdefaultsp /= Math.max(fadfdeebbbfdabbbabdadfaaddaag.length, 3);
      break;
   }
   let muted1 = feedbackM.size <= 9893841;
   do {
      feedbackM = new Map([[`${gpayU.length}`, (3 ^ (selectz ? 5 : 5))]]);
      if (muted1) {
         break;
      }
   } while (muted1 && ((2 & feedbackM.size) >= 5 && 2 >= (feedbackM.size & fastforwardU.size)));
   if (5.96 == tnewarchdefaultsp) {
       let switch_mly = 1;
       let navigationw = 4.0;
       let umengY = 1.0;
         switch_mly *= 2 % (Math.max(switch_mly, 5));
      while (4.10 > (4.88 * navigationw) || 4.88 > (navigationw * umengY)) {
         navigationw /= Math.max(1, parseInt(`${umengY}`));
         break;
      }
         switch_mly &= switch_mly;
       let playercommon7 = 2.0;
       let libimagepipeline2 = 3.0;
         umengY -= parseFloat(`${2 / (Math.max(parseInt(`${playercommon7}`), 3))}`);
      let overX = libimagepipeline2 >= 9026629.0;
      do {
         libimagepipeline2 /= Math.max(parseFloat(`${3 % (Math.max(3, parseInt(`${navigationw}`)))}`), 3);
         if (overX) {
            break;
         }
      } while (((5 + navigationw) >= 5.58) && overX);
         playercommon7 -= parseFloat(`${parseInt(`${libimagepipeline2}`)}`);
       let tickedJ = String.fromCharCode(103,100,105,103,114,97,98,95,102,95,52,56,0);
       let main_nY = String.fromCharCode(114,101,109,97,105,110,100,101,114,0);
         switch_mly /= Math.max(3, tickedJ.length + 1);
      tnewarchdefaultsp *= 1 + parseInt(`${umengY}`);
   }
       let playercommonw = 2;
       let indexT = 3.0;
      while (indexT > 3.63) {
         indexT /= Math.max(4, parseFloat(`${playercommonw ^ parseInt(`${indexT}`)}`));
         break;
      }
      if (1.48 >= (1.9 + indexT) && 1.9 >= (indexT + parseFloat(`${playercommonw}`))) {
         indexT -= parseFloat(`${playercommonw & parseInt(`${indexT}`)}`);
      }
          let libzeusE = 4.0;
          let xnews0 = String.fromCharCode(110,105,115,116,112,0);
         playercommonw ^= xnews0.length;
         libzeusE += parseInt(`${libzeusE}`) >> (Math.min(4, Math.abs(1)));
         xnews0 += `${parseInt(`${libzeusE}`)}`;
         playercommonw >>= Math.min(Math.abs(3), 3);
      let grayL = playercommonw <= 7786202;
      do {
         playercommonw <<= Math.min(4, Math.abs(2 * playercommonw));
         if (grayL) {
            break;
         }
      } while (grayL && ((2 & playercommonw) >= 3));
          let neonv = String.fromCharCode(105,110,105,116,105,97,116,101,0);
         indexT += parseFloat(`${2 / (Math.max(parseInt(`${indexT}`), 7))}`);
         neonv = `${(neonv == String.fromCharCode(74,0) ? neonv.length : neonv.length)}`;
      fastforwardU = new Map([[`${fastforwardU.size}`, 2]]);
      selectz = (gpayU.length / (Math.max(2, parseInt(`${tnewarchdefaultsp}`)))) == 11;
      feedbackM = new Map([[`${feedbackM.size}`, fadfdeebbbfdabbbabdadfaaddaag.length]]);
      darks = `${feedbackM.size}`;
      codegenF = !darks.includes(`${codegenF}`);
   let orientation1 = codegenF ? !codegenF : codegenF;
   do {
      codegenF = 66 > moviesX.length;
      if (orientation1) {
         break;
      }
   } while ((5 < (4 / (Math.max(6, feedbackM.size)))) && orientation1);
   while (3 <= (5 & currentx) || (currentx / (Math.max(r_managerC, 8))) <= 1.39) {
      currentx %= Math.max(((selectz ? 3 : 2) % (Math.max(gpayU.length, 10))), 1);
      break;
   }
   while (1 < gpayU.length) {
       let libimagepipeliney: Map<any, any> = new Map([[String.fromCharCode(98,117,108,107,0),true ], [String.fromCharCode(110,97,118,0),true ], [String.fromCharCode(112,114,101,117,112,108,111,97,100,0),false ]]);
       let tickg = String.fromCharCode(105,95,52,51,95,118,97,108,117,101,0);
      let leakcheckerl = String.fromCharCode(97,97,119,98,48,120,118,0) == tickg;
      do {
          let weiboS = String.fromCharCode(99,111,114,114,101,99,116,105,110,103,0);
          let ynewarchdefaultsv = String.fromCharCode(97,114,101,116,104,101,114,101,0);
          let stationsN = 4.0;
          let checkbox9 = String.fromCharCode(106,117,115,116,105,102,105,101,100,0);
         tickg += "1";
         weiboS = `${parseInt(`${stationsN}`) - 3}`;
         ynewarchdefaultsv += `${2 - ynewarchdefaultsv.length}`;
         stationsN *= (ynewarchdefaultsv == String.fromCharCode(120,0) ? ynewarchdefaultsv.length : checkbox9.length);
         checkbox9 = `${parseInt(`${stationsN}`) % (Math.max(3, 3))}`;
         if (leakcheckerl) {
            break;
         }
      } while (((libimagepipeliney.size % (Math.max(5, 4))) > 2 && (tickg.length % (Math.max(5, 2))) > 5) && leakcheckerl);
          let contextC = 5;
          let tumbnail8 = 2.0;
          let nterstitialx = String.fromCharCode(99,102,116,109,100,108,95,114,95,54,53,0);
         tickg = `${tickg.length % (Math.max(nterstitialx.length, 1))}`;
         contextC <<= Math.min(Math.abs(2), 4);
         tumbnail8 /= Math.max(parseFloat(`${contextC}`), 2);
         nterstitialx = `${parseInt(`${tumbnail8}`)}`;
          let questJ = 5.0;
          let whistleF = String.fromCharCode(117,116,105,108,105,116,105,101,115,0);
          let arrowc: Array<any> = [806, 718];
         tickg = `${(String.fromCharCode(69,0) == whistleF ? arrowc.length : whistleF.length)}`;
         questJ /= Math.max(1, 2 << (Math.min(Math.abs(parseInt(`${questJ}`)), 1)));
         tickg += "3";
         tickg = `${libimagepipeliney.size}`;
         tickg += "3";
      gpayU.push(currentx % (Math.max(parseInt(`${r_managerC}`), 9)));
      break;
   }
      moviesX = [2 << (Math.min(1, Math.abs(feedbackM.size)))];
   let trophyr = tnewarchdefaultsp <= 8102575.0;
   do {
      tnewarchdefaultsp *= (darks == String.fromCharCode(99,0) ? darks.length : fastforwardU.size);
      if (trophyr) {
         break;
      }
   } while (((r_managerC * tnewarchdefaultsp) >= 2.3 || 2.3 >= (tnewarchdefaultsp * r_managerC)) && trophyr);
      gpayU.push(gpayU.length * 2);
   let libfollyz = 7735245 >= feedbackM.size;
   do {
      feedbackM = new Map([[`${r_managerC}`, parseInt(`${r_managerC}`) << (Math.min(4, Math.abs(1)))]]);
      if (libfollyz) {
         break;
      }
   } while (libfollyz && ((3.42 / (Math.max(2, tnewarchdefaultsp))) > 3.90));
      fadfdeebbbfdabbbabdadfaaddaag = `${((selectz ? 5 : 1) - feedbackM.size)}`;
   while (2 == fadfdeebbbfdabbbabdadfaaddaag.length) {
      darks += `${(fadfdeebbbfdabbbabdadfaaddaag == String.fromCharCode(85,0) ? fadfdeebbbfdabbbabdadfaaddaag.length : feedbackM.size)}`;
      break;
   }
      fadfdeebbbfdabbbabdadfaaddaag += `${feedbackM.size | 2}`;
      feedbackM = new Map([[`${selectz}`, 3 ^ darks.length]]);
   for (let d = 0; d < 2; d++) {
      currentx /= Math.max(5, feedbackM.size << (Math.min(4, Math.abs(fastforwardU.size))));
   }
   let green7 = 6074916.0 <= r_managerC;
   do {
      r_managerC /= Math.max(1, 5);
      if (green7) {
         break;
      }
   } while ((codegenF || 1.26 > (2.83 - r_managerC)) && green7);

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
       let backr: Array<any> = [920, 525];
    let listr: Array<any> = [130, 393, 311];
    let applicationB = true;
    let lightk = 3.0;
    let macauB = 3.0;
    let libreactperfloggerjni8 = false;
    let rulesb = true;
    let catalog7 = String.fromCharCode(101,120,112,111,115,117,114,101,0);
    let league6 = String.fromCharCode(101,121,98,111,97,114,100,0);
    let videoY = String.fromCharCode(111,118,101,114,97,108,108,0);
    let umengCz = 1.0;
   if (!rulesb) {
       let libjsinspectorV = String.fromCharCode(121,98,114,105,0);
       let private_88 = 5.0;
       let area6 = 5.0;
      while (5.96 <= (libjsinspectorV.length * private_88) || 5 <= (libjsinspectorV.length * parseInt(`${private_88}`))) {
          let other4 = true;
          let untickM = String.fromCharCode(112,105,99,107,101,114,115,95,113,95,49,53,0);
          let bootsplasha: Array<any> = [645, 705, 934];
          let matchY = String.fromCharCode(101,97,99,104,0);
          let cancelm: Map<any, any> = new Map([[String.fromCharCode(110,95,51,52,0),392], [String.fromCharCode(104,111,115,116,102,108,97,103,115,0),852], [String.fromCharCode(98,115,105,122,101,95,100,95,56,51,0),648]]);
         libjsinspectorV += `${libjsinspectorV.length}`;
         other4 = matchY == untickM;
         untickM += `${bootsplasha.length - 3}`;
         bootsplasha.push(matchY.length & 3);
         cancelm = new Map([[`${bootsplasha.length}`, untickM.length ^ 2]]);
         break;
      }
       let circleS = 0;
       let toponR = 0;
         libjsinspectorV = `${3 - circleS}`;
      if (5 >= (3 >> (Math.min(3, Math.abs(circleS)))) || 3 >= (circleS >> (Math.min(5, Math.abs(toponR))))) {
          let configx: Array<any> = [426, 22];
          let materialx = 5;
          let profilem = true;
          let binddatasI = 0;
         circleS |= 3 * parseInt(`${area6}`);
         configx = [binddatasI >> (Math.min(1, Math.abs(3)))];
         materialx -= binddatasI;
         profilem = materialx <= 59;
      }
       let hooksk = 2.0;
         toponR |= toponR | parseInt(`${hooksk}`);
      let nativen = toponR <= 9576416;
      do {
         toponR /= Math.max(2, 1);
         if (nativen) {
            break;
         }
      } while ((5.44 >= (hooksk * parseFloat(`${toponR}`)) && (5 >> (Math.min(3, Math.abs(toponR)))) >= 5) && nativen);
         libjsinspectorV += `${2 ^ circleS}`;
         libjsinspectorV += `${toponR}`;
      macauB *= listr.length;
   }
   if (listr.includes(lightk)) {
      listr = [parseInt(`${macauB}`) | 1];
   }
      macauB *= (String.fromCharCode(73,0) == league6 ? league6.length : parseInt(`${lightk}`));
   for (let k = 0; k < 3; k++) {
      league6 += `${parseInt(`${macauB}`) | 3}`;
   }
   if (catalog7.length < 5 && !rulesb) {
      catalog7 += `${2 << (Math.min(1, listr.length))}`;
   }
   while (!listr.includes(lightk)) {
      lightk += listr.length;
      break;
   }
      libreactperfloggerjni8 = (40 < ((!applicationB ? 40 : listr.length) ^ listr.length));
      catalog7 += `${1 - parseInt(`${lightk}`)}`;
      listr.push(listr.length);

      if (
        autoPlayNext &&
        activeEpisode !== undefined &&
        episodes &&
        activeEpisode < episodes?.url_count - 1
      ) {

   let mbsplash1 = rulesb ? !rulesb : rulesb;
   do {
       let nalyticsK: Map<any, any> = new Map([[String.fromCharCode(112,115,121,109,111,100,101,108,0),500], [String.fromCharCode(108,111,103,115,0),453]]);
       let completeT = 4.0;
       let latnP = 3;
       let long_me: Array<any> = [String.fromCharCode(105,115,115,117,105,110,103,0), String.fromCharCode(112,101,114,115,112,101,99,116,105,118,101,0), String.fromCharCode(97,112,99,109,0)];
         latnP |= latnP;
      let libavcodecn = 6768576 >= nalyticsK.size;
      do {
          let libavfilterI: Map<any, any> = new Map([[String.fromCharCode(99,108,117,115,116,101,114,95,49,95,50,56,0),String.fromCharCode(117,110,113,117,97,110,116,0)], [String.fromCharCode(110,101,116,101,114,114,110,111,0),String.fromCharCode(110,105,99,101,108,121,0)]]);
         nalyticsK = new Map([[`${libavfilterI.size}`, 3 ^ latnP]]);
         if (libavcodecn) {
            break;
         }
      } while ((!Array.from(nalyticsK.values()).includes(completeT)) && libavcodecn);
      while (5 <= (2 - latnP) || 1 <= (2 - latnP)) {
          let actions4 = 5.0;
          let charte = String.fromCharCode(110,111,110,110,117,108,108,98,117,102,102,101,114,0);
          let area6f = 1.0;
          let heartJ: Array<any> = [561, 836, 432];
          let episode0 = 1.0;
         nalyticsK = new Map([[`${completeT}`, parseInt(`${completeT}`)]]);
         actions4 /= Math.max(3, heartJ.length * parseInt(`${area6f}`));
         charte += `${parseInt(`${episode0}`)}`;
         area6f -= parseFloat(`${parseInt(`${actions4}`) / 2}`);
         heartJ.push(parseInt(`${area6f}`));
         episode0 -= heartJ.length;
         break;
      }
       let membership3: Map<any, any> = new Map([[String.fromCharCode(114,101,116,117,114,110,0),String.fromCharCode(116,103,101,116,0)], [String.fromCharCode(116,111,107,101,110,105,122,101,100,0),String.fromCharCode(107,97,105,115,101,114,0)], [String.fromCharCode(110,111,105,115,101,0),String.fromCharCode(100,97,109,112,105,110,103,0)]]);
      while ((1 + nalyticsK.size) <= 5) {
         latnP *= long_me.length;
         break;
      }
      for (let o = 0; o < 1; o++) {
         membership3 = new Map([[`${nalyticsK.size}`, 3]]);
      }
         completeT *= parseFloat(`${long_me.length}`);
      while (1 < long_me.length) {
          let changeJ = 5;
         long_me.push(2 * membership3.size);
         changeJ &= changeJ & changeJ;
         break;
      }
          let checkboxy: Array<any> = [263, 192];
          let suggestionq: Map<any, any> = new Map([[String.fromCharCode(99,95,51,57,95,119,101,98,0),382], [String.fromCharCode(112,97,110,101,108,115,0),145]]);
         membership3 = new Map([[`${membership3.size}`, membership3.size]]);
         checkboxy = [suggestionq.size / (Math.max(2, checkboxy.length))];
         suggestionq.set(`${checkboxy.length}`, 1 ^ checkboxy.length);
      while ((long_me.length % (Math.max(membership3.size, 9))) < 1 && 3 < (long_me.length % (Math.max(1, 10)))) {
          let reactu = 2.0;
          let benefitH: Map<any, any> = new Map([[String.fromCharCode(101,110,99,108,111,115,105,110,103,0),210], [String.fromCharCode(99,97,110,116,0),192]]);
          let configurec: Map<any, any> = new Map([[String.fromCharCode(109,99,100,99,0),87], [String.fromCharCode(109,112,105,98,110,0),238], [String.fromCharCode(116,105,107,101,114,0),959]]);
          let basketballT: Map<any, any> = new Map([[String.fromCharCode(115,116,97,116,105,111,110,97,114,121,95,117,95,54,57,0),395], [String.fromCharCode(109,117,108,116,105,112,108,105,99,97,116,105,111,110,0),56], [String.fromCharCode(109,112,101,103,118,108,99,95,122,95,52,57,0),570]]);
          let directz = true;
         membership3.set(`${directz}`, benefitH.size << (Math.min(Math.abs(1), 4)));
         reactu += basketballT.size;
         benefitH = new Map([[`${basketballT.size}`, 2 >> (Math.min(5, Math.abs(configurec.size)))]]);
         configurec.set(`${reactu}`, 2 + parseInt(`${reactu}`));
         break;
      }
          let roundb = false;
          let encryptH: Array<any> = [130, 457, 388];
         long_me.push(parseInt(`${completeT}`));
         roundb = encryptH.includes(roundb);
         encryptH = [3];
      for (let g = 0; g < 2; g++) {
         latnP &= 1;
      }
      rulesb = parseInt(`${macauB}`) <= long_me.length;
      if (mbsplash1) {
         break;
      }
   } while ((rulesb) && mbsplash1);
   while ((backr.length * 3) <= 1) {
      backr = [backr.length];
      break;
   }
       let knewarchdefaultsI = String.fromCharCode(113,95,53,55,0);
         knewarchdefaultsI += `${(String.fromCharCode(70,0) == knewarchdefaultsI ? knewarchdefaultsI.length : knewarchdefaultsI.length)}`;
      if (knewarchdefaultsI == String.fromCharCode(90,0)) {
          let nterstitialc: Array<any> = [802, 931];
          let mbridgeX: Map<any, any> = new Map([[String.fromCharCode(111,102,102,115,101,116,115,0),920], [String.fromCharCode(116,100,115,99,0),934]]);
          let reactnativejsW = String.fromCharCode(97,115,115,101,109,98,108,101,0);
          let modalL = String.fromCharCode(104,101,120,98,105,110,0);
          let belle = false;
         knewarchdefaultsI += `${nterstitialc.length}`;
         nterstitialc = [mbridgeX.size];
         mbridgeX = new Map([[`${mbridgeX.size}`, reactnativejsW.length << (Math.min(1, Math.abs(mbridgeX.size)))]]);
         reactnativejsW += `${mbridgeX.size}`;
         modalL += `${mbridgeX.size & modalL.length}`;
         belle = (reactnativejsW.length >> (Math.min(2, Math.abs(mbridgeX.size)))) > 42;
      }
      for (let x = 0; x < 3; x++) {
         knewarchdefaultsI += `${knewarchdefaultsI.length}`;
      }
      listr.push(3);
   for (let a = 0; a < 3; a++) {
      rulesb = applicationB;
   }
      catalog7 = `${parseInt(`${macauB}`) + 1}`;
      rulesb = 76 > listr.length && 95.23 > macauB;
      applicationB = lightk == 60.67 || libreactperfloggerjni8;
      videoY += `${(catalog7 == String.fromCharCode(116,0) ? catalog7.length : (applicationB ? 5 : 2))}`;
       let becomes = 0;
       let scoreM = 5.0;
      if ((1.56 + scoreM) == 3.84) {
         scoreM /= Math.max(5, parseFloat(`${parseInt(`${scoreM}`)}`));
      }
      let lighte = becomes <= 8570956;
      do {
          let combinedV = String.fromCharCode(109,97,120,0);
          let indicatorG = 2.0;
          let detailsv = String.fromCharCode(116,101,120,105,112,111,100,0);
         becomes <<= Math.min(1, Math.abs(parseInt(`${indicatorG}`) - 3));
         combinedV = "3";
         indicatorG += 1 % (Math.max(2, combinedV.length));
         detailsv += `${3 ^ detailsv.length}`;
         if (lighte) {
            break;
         }
      } while (lighte && (becomes < 1));
         scoreM /= Math.max(parseFloat(`${becomes ^ 2}`), 5);
      for (let e = 0; e < 3; e++) {
         becomes += becomes - 2;
      }
      while ((2.58 + scoreM) == 1.99 && (parseFloat(`${becomes}`) + scoreM) == 2.58) {
          let activea = String.fromCharCode(115,116,114,101,116,99,104,97,98,108,101,0);
          let fastforwardz = 0.0;
          let rootJ = 1.0;
         scoreM += parseFloat(`${activea.length - parseInt(`${scoreM}`)}`);
         activea += `${parseInt(`${fastforwardz}`) % (Math.max(parseInt(`${rootJ}`), 4))}`;
         fastforwardz += parseFloat(`${parseInt(`${rootJ}`)}`);
         break;
      }
      if (scoreM <= 3.75) {
         becomes >>= Math.min(Math.abs(1), 3);
      }
      macauB /= Math.max(parseInt(`${scoreM}`) & 3, 2);
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
       let unselectedL = String.fromCharCode(102,105,108,101,110,97,109,101,115,95,115,95,52,0);
    let anytimeG = 3;
    let libturbomodulejsijnil = 5.0;
    let settingsw = true;
    let graphl = 5.0;
    let champion9 = true;
    let pressureW = String.fromCharCode(116,119,111,102,105,115,104,0);
    let pointu = String.fromCharCode(107,95,52,53,95,100,105,97,108,111,103,0);
    let clockZ = 2.0;
    let leftw: Map<any, any> = new Map([[String.fromCharCode(100,111,108,98,121,0),35], [String.fromCharCode(115,117,98,115,101,103,109,101,110,116,0),514]]);
    let countryP = true;
    let colorsn: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,118,97,116,101,100,0),842], [String.fromCharCode(114,105,110,102,0),608]]);
    let libreactnativeblobB = 5.0;
    let adultD = String.fromCharCode(99,111,110,116,97,105,110,0);
    let ballU = 2.0;
    let ycopy_yb_ = false;
       let reactU = String.fromCharCode(115,99,104,101,100,117,108,101,0);
       let libavfilterA = String.fromCharCode(100,114,97,119,105,110,103,0);
      let toponq = reactU == String.fromCharCode(113,111,56,101,110,115,97,108,120,0);
      do {
         reactU += `${reactU.length}`;
         if (toponq) {
            break;
         }
      } while ((libavfilterA.length > reactU.length) && toponq);
          let entryx = String.fromCharCode(99,108,105,99,107,115,0);
          let adulth = 4.0;
          let animationsi: Map<any, any> = new Map([[String.fromCharCode(115,116,100,105,110,116,0),String.fromCharCode(117,102,102,101,114,0)], [String.fromCharCode(104,111,108,101,115,0),String.fromCharCode(115,101,109,105,99,111,108,111,110,0)], [String.fromCharCode(97,107,105,100,0),String.fromCharCode(100,120,116,121,0)]]);
         libavfilterA = `${entryx.length}`;
         entryx = `${animationsi.size + 3}`;
         adulth += parseFloat(`${parseInt(`${adulth}`)}`);
         animationsi.set(`${adulth}`, 2 + parseInt(`${adulth}`));
      for (let y = 0; y < 2; y++) {
         libavfilterA += `${libavfilterA.length % (Math.max(8, reactU.length))}`;
      }
          let changeI = String.fromCharCode(107,101,121,115,116,111,114,101,0);
          let proxyj = false;
          let gradlew_ = String.fromCharCode(97,99,99,101,115,115,105,98,105,108,105,116,121,95,118,95,54,50,0);
         libavfilterA += "1";
         changeI += `${((proxyj ? 3 : 2) | 2)}`;
         proxyj = !proxyj;
         gradlew_ += `${(gradlew_.length / (Math.max(7, (proxyj ? 1 : 5))))}`;
      let tickedD = reactU == String.fromCharCode(112,122,48,111,108,53,50,120,111,51,0);
      do {
          let countryE = 1.0;
          let foregroundC = 4.0;
          let condensedE = String.fromCharCode(112,108,97,99,101,109,97,114,107,0);
          let libmapbufferjniA = false;
          let recommendationM = 4;
         reactU += "3";
         countryE -= (condensedE.length + (libmapbufferjniA ? 1 : 3));
         foregroundC += parseFloat(`${1 | parseInt(`${foregroundC}`)}`);
         condensedE = `${parseInt(`${foregroundC}`) >> (Math.min(4, Math.abs(recommendationM)))}`;
         libmapbufferjniA = condensedE.endsWith(`${recommendationM}`);
         if (tickedD) {
            break;
         }
      } while (tickedD && (libavfilterA.length < 2));
      let nterstitialb = String.fromCharCode(119,109,118,95,103,0) == reactU;
      do {
         reactU += `${(String.fromCharCode(100,0) == reactU ? libavfilterA.length : reactU.length)}`;
         if (nterstitialb) {
            break;
         }
      } while ((!libavfilterA.startsWith(`${reactU.length}`)) && nterstitialb);
      libturbomodulejsijnil += parseFloat(`${2 - parseInt(`${clockZ}`)}`);
   let redirect3 = libturbomodulejsijnil <= 5403829.0;
   do {
       let championL = 3.0;
       let twitterF = String.fromCharCode(99,105,110,97,117,100,105,111,0);
       let libmapbufferjniQ: Array<any> = [84, 504, 281];
       let fillL = 4;
         championL *= parseFloat(`${libmapbufferjniQ.length % 2}`);
      for (let r = 0; r < 1; r++) {
         libmapbufferjniQ = [libmapbufferjniQ.length / 3];
      }
          let progressu = 4;
          let ecopy_kE: Array<any> = [String.fromCharCode(114,101,97,108,116,105,109,101,0), String.fromCharCode(100,101,108,101,116,105,111,110,0), String.fromCharCode(109,111,100,101,115,0)];
          let arrowy = String.fromCharCode(108,105,110,107,115,0);
         championL += parseFloat(`${libmapbufferjniQ.length}`);
         progressu /= Math.max(4, 2);
         ecopy_kE.push(ecopy_kE.length);
         arrowy = "2";
         libmapbufferjniQ.push(2 >> (Math.min(Math.abs(fillL), 2)));
         twitterF = `${twitterF.length | fillL}`;
      for (let d = 0; d < 2; d++) {
         twitterF += `${twitterF.length % 3}`;
      }
      for (let d = 0; d < 3; d++) {
          let forms = String.fromCharCode(115,117,114,112,114,105,115,101,100,0);
          let imagemanagerf = String.fromCharCode(100,105,115,99,97,114,100,0);
          let pause9 = true;
          let reward3: Array<any> = [583, 225];
          let sheetv = String.fromCharCode(115,118,113,101,110,99,0);
         libmapbufferjniQ.push(3 - sheetv.length);
         forms = `${(imagemanagerf == String.fromCharCode(52,0) ? reward3.length : imagemanagerf.length)}`;
         pause9 = forms.length >= 41;
         reward3.push(3 + imagemanagerf.length);
         sheetv = `${((pause9 ? 5 : 5) - reward3.length)}`;
      }
      if (libmapbufferjniQ.includes(championL)) {
         championL -= parseFloat(`${twitterF.length}`);
      }
         twitterF += "3";
      if (!twitterF.includes(`${fillL}`)) {
         twitterF += "3";
      }
         fillL |= libmapbufferjniQ.length;
       let final_0xZ = false;
       let searchu = false;
      libturbomodulejsijnil *= parseFloat(`${libmapbufferjniQ.length - pointu.length}`);
      if (redirect3) {
         break;
      }
   } while (redirect3 && ((1.53 + libturbomodulejsijnil) == 4.18));
   if (3.54 <= (libturbomodulejsijnil * 1.33) || champion9) {
       let configy = String.fromCharCode(105,110,116,114,97,120,100,115,112,95,104,95,57,56,0);
         configy += `${configy.length | configy.length}`;
         configy = `${configy.length << (Math.min(Math.abs(1), 4))}`;
      if (configy == String.fromCharCode(55,0) || configy != String.fromCharCode(48,0)) {
         configy = `${configy.length * configy.length}`;
      }
      libturbomodulejsijnil += (parseFloat(`${pointu.length & (champion9 ? 4 : 1)}`));
   }
      graphl *= parseFloat(`${pointu.length}`);
   while (graphl > 3.48 || 1.6 > (3.48 * graphl)) {
      graphl /= Math.max(parseFloat(`${1 << (Math.min(4, pointu.length))}`), 2);
      break;
   }
       let private_hjd = String.fromCharCode(114,97,110,115,102,111,114,109,101,114,0);
       let detail4 = true;
      let libreactnativeblob0 = detail4 ? !detail4 : detail4;
      do {
          let telegram6: Array<any> = [String.fromCharCode(97,108,108,111,99,97,116,111,114,0), String.fromCharCode(112,111,115,116,105,111,110,95,98,95,51,56,0), String.fromCharCode(109,97,103,121,0)];
          let stylesG = String.fromCharCode(115,97,98,101,114,0);
          let agreement1 = true;
         detail4 = !detail4;
         telegram6 = [telegram6.length];
         stylesG += `${(String.fromCharCode(55,0) == stylesG ? (agreement1 ? 2 : 5) : stylesG.length)}`;
         if (libreactnativeblob0) {
            break;
         }
      } while (libreactnativeblob0 && (private_hjd.endsWith(`${detail4}`)));
      while (private_hjd.length == 4) {
         private_hjd += `${private_hjd.length}`;
         break;
      }
      let hiadf = 4966262 <= private_hjd.length;
      do {
          let viewsL = 5.0;
          let kuaishoue = 4.0;
         private_hjd += `${1 / (Math.max(5, parseInt(`${viewsL}`)))}`;
         viewsL /= Math.max(3, parseInt(`${kuaishoue}`) >> (Math.min(3, Math.abs(parseInt(`${kuaishoue}`)))));
         if (hiadf) {
            break;
         }
      } while ((!detail4) && hiadf);
         private_hjd += `${((detail4 ? 3 : 2) & private_hjd.length)}`;
      for (let c = 0; c < 2; c++) {
         detail4 = (((!detail4 ? 83 : private_hjd.length) % (Math.max(2, private_hjd.length))) <= 83);
      }
         detail4 = ((private_hjd.length >> (Math.min(4, Math.abs((detail4 ? private_hjd.length : 36))))) >= 36);
      anytimeG += parseInt(`${graphl}`) | pressureW.length;
   while (pressureW.includes(`${countryP}`)) {
       let rootr = String.fromCharCode(105,95,51,50,95,116,114,97,105,110,0);
       let benefitt = 1.0;
       let savek = 3;
          let borderlessy = String.fromCharCode(114,111,119,115,107,105,112,0);
          let serviceR = 4.0;
          let pointv = 2.0;
         savek += 1 | parseInt(`${benefitt}`);
         borderlessy = `${parseInt(`${pointv}`) ^ parseInt(`${serviceR}`)}`;
         serviceR *= parseFloat(`${parseInt(`${pointv}`) * borderlessy.length}`);
          let libflipper2 = String.fromCharCode(112,114,101,100,105,99,116,105,111,110,115,0);
          let type_rbu = 5.0;
          let default_ue = false;
         savek /= Math.max(5, 3 / (Math.max(4, parseInt(`${type_rbu}`))));
         libflipper2 = `${libflipper2.length}`;
         type_rbu *= (1 & (default_ue ? 2 : 1));
          let mbnativeadvancedH: Map<any, any> = new Map([[String.fromCharCode(119,97,108,107,0),String.fromCharCode(110,101,105,103,104,98,111,114,105,110,103,0)], [String.fromCharCode(100,105,115,116,97,110,99,101,115,0),String.fromCharCode(101,109,115,99,114,105,112,116,101,110,0)], [String.fromCharCode(118,111,114,98,105,115,99,111,109,109,101,110,116,0),String.fromCharCode(100,121,110,97,109,105,99,115,0)]]);
          let dplusH: Array<any> = [55, 329, 714];
         benefitt -= 3 << (Math.min(5, rootr.length));
         mbnativeadvancedH = new Map([[`${mbnativeadvancedH.size}`, dplusH.length]]);
         dplusH = [3];
         benefitt *= 1 % (Math.max(8, parseInt(`${benefitt}`)));
      while (3 <= (savek % (Math.max(10, rootr.length)))) {
         savek >>= Math.min(Math.abs(savek * 3), 2);
         break;
      }
         rootr = `${savek}`;
         benefitt -= savek & parseInt(`${benefitt}`);
       let streamingC: Array<any> = [799, 198];
       let yellowa: Array<any> = [989, 241, 78];
       let chinasame3 = true;
      pressureW = `${((champion9 ? 2 : 3) % (Math.max(leftw.size, 10)))}`;
      break;
   }
   while (libturbomodulejsijnil >= 3.16) {
      anytimeG %= Math.max(1, parseInt(`${libreactnativeblobB}`));
      break;
   }
      graphl /= Math.max(5, parseFloat(`${leftw.size}`));
   for (let u = 0; u < 1; u++) {
       let libtanO: Array<any> = [445, 864, 597];
       let eighteenn: Array<any> = [49, 108, 467];
       let applicationz: Map<any, any> = new Map([[String.fromCharCode(104,97,118,101,101,118,101,110,116,115,0),true ], [String.fromCharCode(114,117,110,115,95,100,95,52,51,0),false ]]);
       let cancel1 = 0;
       let fadfdeebbbfdabbbabdadfaaddaax = String.fromCharCode(115,112,105,110,108,111,99,107,0);
       let time_wB = String.fromCharCode(108,97,118,117,0);
       let manifestm = String.fromCharCode(101,120,101,99,117,116,105,111,110,0);
      if (5 >= (4 - cancel1)) {
         time_wB = `${time_wB.length + 2}`;
      }
         applicationz.set(time_wB, 3 << (Math.min(5, time_wB.length)));
          let cancelV = 2.0;
          let accepted1 = String.fromCharCode(118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,0);
         cancel1 >>= Math.min(Math.abs(eighteenn.length % (Math.max(2, 9))), 1);
         cancelV /= Math.max(parseInt(`${cancelV}`), 4);
         accepted1 = `${accepted1.length}`;
         eighteenn = [3];
          let bootsplash9 = String.fromCharCode(117,110,112,97,99,107,101,100,0);
         applicationz.set(`${eighteenn.length}`, 3 + eighteenn.length);
         bootsplash9 = `${2 & bootsplash9.length}`;
         time_wB += `${applicationz.size}`;
      for (let m = 0; m < 2; m++) {
         cancel1 *= eighteenn.length;
      }
         manifestm += `${applicationz.size}`;
       let colorsx = 0;
         time_wB += "2";
         fadfdeebbbfdabbbabdadfaaddaax = `${fadfdeebbbfdabbbabdadfaaddaax.length ^ 3}`;
      if (5 > (4 | eighteenn.length) || (cancel1 | eighteenn.length) > 4) {
          let neonE = String.fromCharCode(111,95,55,55,95,102,116,118,112,110,111,100,101,0);
          let checkboxd = false;
         eighteenn = [libtanO.length * 3];
         neonE += `${(String.fromCharCode(101,0) == neonE ? neonE.length : (checkboxd ? 1 : 2))}`;
         checkboxd = neonE.length <= 78 || !checkboxd;
      }
         cancel1 &= colorsx;
       let actionsE = 3.0;
      unselectedL = `${parseInt(`${libreactnativeblobB}`)}`;
   }
   let gradlewg = settingsw ? !settingsw : settingsw;
   do {
      settingsw = String.fromCharCode(114,0) == adultD;
      if (gradlewg) {
         break;
      }
   } while ((1.26 <= graphl || (1.26 / (Math.max(2, graphl))) <= 5.51) && gradlewg);
   while (unselectedL.startsWith(`${anytimeG}`)) {
      unselectedL = `${adultD.length}`;
      break;
   }
       let detailsP = 4.0;
       let bridgex = 1.0;
       let orientationH = String.fromCharCode(116,105,110,116,101,100,0);
         orientationH = `${orientationH.length}`;
          let googleF = String.fromCharCode(101,108,108,105,112,116,105,99,0);
         bridgex -= parseFloat(`${1}`);
         googleF += `${googleF.length - 3}`;
         bridgex *= parseFloat(`${parseInt(`${bridgex}`) - 1}`);
      if (5.22 > (2.75 / (Math.max(4, bridgex)))) {
          let binddatas7 = 1;
         bridgex += parseFloat(`${parseInt(`${detailsP}`) << (Math.min(Math.abs(1), 1))}`);
         binddatas7 += 2 + binddatas7;
      }
         orientationH = `${orientationH.length ^ 3}`;
         bridgex += parseFloat(`${2}`);
      while (5.16 <= bridgex) {
         bridgex /= Math.max(parseFloat(`${parseInt(`${detailsP}`) + parseInt(`${bridgex}`)}`), 3);
         break;
      }
         bridgex *= parseFloat(`${orientationH.length >> (Math.min(3, Math.abs(parseInt(`${bridgex}`))))}`);
      for (let s = 0; s < 2; s++) {
          let searchk: Map<any, any> = new Map([[String.fromCharCode(115,95,51,51,95,116,104,101,109,101,115,0),89], [String.fromCharCode(115,112,101,99,105,102,105,101,114,0),194], [String.fromCharCode(99,111,111,114,100,105,110,97,116,101,115,0),571]]);
          let security7: Array<any> = [219, 883, 508];
          let singleU = 0.0;
          let mbsplashF = 2;
         bridgex -= parseFloat(`${parseInt(`${detailsP}`)}`);
         searchk.set(`${singleU}`, 1);
         security7.push(security7.length);
         singleU -= mbsplashF | 2;
         mbsplashF -= parseInt(`${singleU}`) ^ 1;
      }
      ballU -= parseFloat(`${colorsn.size ^ 3}`);
   for (let l = 0; l < 3; l++) {
       let libmapbufferjniN = 2.0;
       let libturbomodulejsijni7 = 5.0;
       let screenQ = 2;
       let contextp = String.fromCharCode(115,108,102,0);
       let videoW = String.fromCharCode(101,99,104,111,0);
         screenQ -= (contextp == String.fromCharCode(119,0) ? parseInt(`${libmapbufferjniN}`) : contextp.length);
         libturbomodulejsijni7 *= parseFloat(`${videoW.length + 3}`);
      while (4.2 > (screenQ * libmapbufferjniN)) {
         screenQ -= contextp.length;
         break;
      }
         libturbomodulejsijni7 += parseFloat(`${1 + parseInt(`${libturbomodulejsijni7}`)}`);
         libmapbufferjniN *= videoW.length;
      while (!contextp.startsWith(videoW)) {
         contextp = `${videoW.length}`;
         break;
      }
          let volumeu = String.fromCharCode(97,118,105,111,0);
          let videoh = 3.0;
          let condensed2 = String.fromCharCode(115,101,109,97,110,116,105,99,115,0);
         libmapbufferjniN *= volumeu.length;
         volumeu = `${parseInt(`${videoh}`) ^ 2}`;
         videoh -= parseInt(`${videoh}`);
         condensed2 = `${parseInt(`${videoh}`)}`;
         videoW = `${parseInt(`${libmapbufferjniN}`) << (Math.min(Math.abs(parseInt(`${libturbomodulejsijni7}`)), 2))}`;
       let logoV: Array<any> = [String.fromCharCode(115,99,114,117,98,98,105,110,103,0), String.fromCharCode(116,97,112,116,105,99,0)];
      while ((logoV.length % (Math.max(2, 10))) >= 5 && 2 >= (logoV.length % (Math.max(2, 4)))) {
         videoW = `${parseInt(`${libmapbufferjniN}`) >> (Math.min(contextp.length, 3))}`;
         break;
      }
         libturbomodulejsijni7 *= parseFloat(`${videoW.length}`);
         videoW += `${(String.fromCharCode(68,0) == videoW ? videoW.length : screenQ)}`;
      let playJ = contextp == String.fromCharCode(48,99,115,56,105,56,117,112,99,52,0);
      do {
         contextp = `${parseInt(`${libmapbufferjniN}`)}`;
         if (playJ) {
            break;
         }
      } while (playJ && (2 > (contextp.length % (Math.max(1, 1)))));
      for (let t = 0; t < 3; t++) {
         libmapbufferjniN += 1 - logoV.length;
      }
          let profileT = true;
          let libffmpegkitg = true;
          let pageN = String.fromCharCode(97,99,99,117,114,97,116,101,0);
         contextp = `${pageN.length % (Math.max(5, logoV.length))}`;
         profileT = (!libffmpegkitg ? !profileT : !libffmpegkitg);
         pageN = "1";
      clockZ -= 2;
   }
      countryP = 84 == pointu.length;
       let arrow6 = true;
       let switch_9l = String.fromCharCode(104,119,100,111,119,110,108,111,97,100,0);
       let flyer0 = true;
         flyer0 = switch_9l.length <= 83;
      for (let t = 0; t < 1; t++) {
          let gradlewU = 5;
         flyer0 = !flyer0;
         gradlewU ^= 2 * gradlewU;
      }
      while (!arrow6) {
          let custom2 = String.fromCharCode(107,95,55,51,95,102,111,114,119,97,114,100,115,0);
          let manifesta: Array<any> = [501, 754, 607];
         flyer0 = manifesta.length > 25 && arrow6;
         custom2 = `${custom2.length}`;
         manifesta.push(custom2.length);
         break;
      }
      while (switch_9l.startsWith(`${flyer0}`)) {
          let zhengpian9 = String.fromCharCode(119,97,116,101,114,109,97,114,107,115,0);
          let libfolly8: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,116,101,102,105,108,101,0),518], [String.fromCharCode(115,95,52,55,95,114,101,116,114,121,0),964], [String.fromCharCode(98,108,97,107,101,98,0),438]]);
         flyer0 = !arrow6;
         zhengpian9 = `${(zhengpian9 == String.fromCharCode(80,0) ? libfolly8.size : zhengpian9.length)}`;
         libfolly8.set(`${zhengpian9}`, zhengpian9.length);
         break;
      }
         switch_9l = `${((flyer0 ? 2 : 3) | 2)}`;
      if (switch_9l.includes(`${flyer0}`)) {
         flyer0 = !flyer0;
      }
          let langkey_: Map<any, any> = new Map([[String.fromCharCode(99,111,110,99,101,97,108,0),false ], [String.fromCharCode(110,100,111,116,115,0),false ]]);
          let qaagF: Array<any> = [649, 57, 926];
          let reactnativejst = String.fromCharCode(119,105,116,110,101,115,115,0);
         arrow6 = (50 > (switch_9l.length & (!flyer0 ? switch_9l.length : 50)));
         langkey_ = new Map([[`${langkey_.size}`, (reactnativejst == String.fromCharCode(122,0) ? langkey_.size : reactnativejst.length)]]);
         qaagF = [reactnativejst.length];
          let selecth = 3;
          let sheetH = String.fromCharCode(117,110,105,113,117,101,100,0);
         switch_9l += "2";
         selecth += (String.fromCharCode(102,0) == sheetH ? sheetH.length : selecth);
      if (flyer0 || switch_9l.length < 5) {
         switch_9l += `${((flyer0 ? 3 : 2) - 1)}`;
      }
      libreactnativeblobB -= 1;
      colorsn.set(`${clockZ}`, 1 % (Math.max(parseInt(`${clockZ}`), 2)));
   while (5.86 >= (libreactnativeblobB * 4.94) && (clockZ * 4.94) >= 5.41) {
      libreactnativeblobB /= Math.max(3, parseInt(`${libturbomodulejsijnil}`) << (Math.min(4, Math.abs(3))));
      break;
   }
      libturbomodulejsijnil /= Math.max(1, parseFloat(`${colorsn.size}`));
       let clubv = 4.0;
       let default_pY = String.fromCharCode(115,105,103,112,97,115,115,0);
       let unimplementedviewk: Map<any, any> = new Map([[String.fromCharCode(97,108,108,112,97,115,115,0),false ], [String.fromCharCode(99,117,116,101,115,116,0),true ]]);
      while ((clubv - 4.62) >= 2.8) {
          let shrinkZ = String.fromCharCode(105,100,97,116,97,0);
          let sinaM = String.fromCharCode(116,97,116,105,99,0);
          let button3 = 4.0;
          let bellr = String.fromCharCode(115,117,98,116,105,116,108,101,0);
         default_pY = `${default_pY.length}`;
         shrinkZ += `${1 << (Math.min(1, Math.abs(parseInt(`${button3}`))))}`;
         sinaM += `${1 * parseInt(`${button3}`)}`;
         bellr = `${bellr.length - 2}`;
         break;
      }
      if (4 < (default_pY.length << (Math.min(Math.abs(3), 4)))) {
          let trashv = true;
          let reactnativejsM = 4.0;
          let starz = 0.0;
          let topon5 = String.fromCharCode(97,116,116,0);
         default_pY += `${parseInt(`${starz}`) / 3}`;
         trashv = !trashv;
         reactnativejsM += 1;
         starz /= Math.max((parseFloat(`${1 / (Math.max(6, (trashv ? 3 : 3)))}`)), 5);
         topon5 = `${topon5.length | 1}`;
      }
         default_pY += `${default_pY.length - unimplementedviewk.size}`;
      for (let h = 0; h < 2; h++) {
         default_pY = `${parseInt(`${clubv}`)}`;
      }
         unimplementedviewk.set(`${clubv}`, unimplementedviewk.size);
      while ((2 >> (Math.min(2, Math.abs(unimplementedviewk.size)))) < 2 || 1 < (2 >> (Math.min(4, Math.abs(unimplementedviewk.size))))) {
         clubv += (parseFloat(`${default_pY == String.fromCharCode(95,0) ? default_pY.length : unimplementedviewk.size}`));
         break;
      }
         default_pY += `${unimplementedviewk.size}`;
         default_pY += `${default_pY.length << (Math.min(Math.abs(3), 5))}`;
       let selectionk = 0.0;
      clockZ /= Math.max(1, leftw.size >> (Math.min(1, Math.abs(parseInt(`${libturbomodulejsijnil}`)))));
   let floater3 = ballU <= 6243503.0;
   do {
       let pangleq = false;
       let activityP = 0;
       let ewardedi = true;
       let helpere = String.fromCharCode(114,116,115,112,99,111,100,101,115,0);
       let storeW: Array<any> = [889, 218, 775];
         pangleq = helpere.length >= storeW.length;
          let reminder6 = false;
          let libffmpegkit2 = 1;
         storeW = [2];
         reminder6 = libffmpegkit2 >= 65;
         libffmpegkit2 += libffmpegkit2;
      while ((4 / (Math.max(8, activityP))) == 2 || pangleq) {
         activityP |= (3 - (ewardedi ? 4 : 1));
         break;
      }
         helpere += `${((pangleq ? 5 : 2))}`;
      while (storeW.length >= 4) {
         storeW = [1];
         break;
      }
      let subso = 5359065 <= helpere.length;
      do {
         helpere += "2";
         if (subso) {
            break;
         }
      } while (((3 << (Math.min(1, storeW.length))) < 5 && 5 < (storeW.length << (Math.min(Math.abs(3), 5)))) && subso);
         pangleq = helpere.length >= storeW.length;
      if ((helpere.length / 5) >= 3 && (5 / (Math.max(1, helpere.length))) >= 2) {
         storeW = [(activityP | (pangleq ? 4 : 3))];
      }
      if (ewardedi) {
          let clockw: Array<any> = [866, 853, 977];
          let libfollyz: Array<any> = [String.fromCharCode(117,95,54,95,105,110,116,101,114,115,112,101,114,115,101,0), String.fromCharCode(101,116,101,114,110,105,116,121,0), String.fromCharCode(98,108,105,110,107,0)];
          let infoJ: Array<any> = [66, 821, 47];
         ewardedi = clockw.length == helpere.length;
         clockw.push(2 / (Math.max(3, libfollyz.length)));
         libfollyz = [libfollyz.length];
         infoJ.push(2 << (Math.min(4, infoJ.length)));
      }
      for (let o = 0; o < 1; o++) {
          let closec = 4.0;
          let executorO = true;
         activityP -= helpere.length;
         closec -= parseFloat(`${2 % (Math.max(parseInt(`${closec}`), 8))}`);
         executorO = closec == 91.25;
      }
         helpere = `${((pangleq ? 2 : 4))}`;
          let bdxadsdk4 = String.fromCharCode(114,101,97,99,104,101,100,0);
          let common8 = String.fromCharCode(115,104,97,114,112,110,101,115,115,95,116,95,52,53,0);
          let stationsN: Array<any> = [String.fromCharCode(118,112,99,99,0), String.fromCharCode(116,95,55,55,95,108,111,103,0), String.fromCharCode(118,97,108,105,100,97,116,111,114,115,0)];
         storeW.push(((pangleq ? 2 : 2) + 1));
         bdxadsdk4 = "3";
         common8 = `${stationsN.length * 3}`;
         stationsN = [1 + bdxadsdk4.length];
      for (let m = 0; m < 3; m++) {
          let logouta = 2.0;
          let internetF = 5.0;
          let mbbannerG = 3.0;
          let recommendationD = false;
         pangleq = helpere.length == mbbannerG;
         logouta /= Math.max(3 - parseInt(`${internetF}`), 2);
         internetF += (parseFloat(`${(recommendationD ? 3 : 5) * parseInt(`${internetF}`)}`));
         mbbannerG /= Math.max((parseInt(`${internetF}`) - (recommendationD ? 4 : 1)), 1);
      }
         ewardedi = (!pangleq ? ewardedi : pangleq);
      if (5 > (4 / (Math.max(1, storeW.length))) && !ewardedi) {
         ewardedi = helpere.length <= 49;
      }
      ballU /= Math.max(parseFloat(`${activityP * helpere.length}`), 4);
      if (floater3) {
         break;
      }
   } while (floater3 && ((ballU + 2.10) <= 1.53));
   if (colorsn.get(`${libreactnativeblobB}`) == null) {
      libreactnativeblobB -= 1 & adultD.length;
   }
   while (!countryP && 1.34 > (1.4 - libturbomodulejsijnil)) {
       let mergeri = false;
       let tumbnailn = true;
       let agreementt: Array<any> = [586, 43];
       let networkU: Map<any, any> = new Map([[String.fromCharCode(115,110,97,107,101,0),801], [String.fromCharCode(121,100,97,121,0),943]]);
       let humidityd = String.fromCharCode(103,101,116,108,98,108,111,99,107,105,110,99,0);
         agreementt.push(agreementt.length);
         networkU = new Map([[`${networkU.size}`, networkU.size]]);
      if (tumbnailn) {
         humidityd += `${agreementt.length ^ 2}`;
      }
      for (let g = 0; g < 3; g++) {
         tumbnailn = agreementt.length > 62;
      }
         tumbnailn = humidityd.length >= 46;
       let h_titleC: Map<any, any> = new Map([[String.fromCharCode(117,118,104,111,114,105,122,111,110,116,97,108,0),String.fromCharCode(98,114,107,116,105,109,101,103,109,0)], [String.fromCharCode(108,97,117,110,99,104,0),String.fromCharCode(99,97,110,111,110,0)], [String.fromCharCode(111,115,116,114,101,97,109,0),String.fromCharCode(119,97,116,99,104,105,110,103,0)]]);
         h_titleC.set(`${mergeri}`, 3);
          let connectionO = String.fromCharCode(115,112,101,99,116,114,97,108,0);
         mergeri = !tumbnailn;
         connectionO = `${connectionO.length >> (Math.min(Math.abs(2), 1))}`;
          let logoutJ = String.fromCharCode(108,101,109,111,110,95,56,95,49,53,0);
          let indicatort = 4.0;
         agreementt.push(agreementt.length * 2);
         logoutJ = `${logoutJ.length}`;
         indicatort *= parseFloat(`${1 - logoutJ.length}`);
      let regengc = tumbnailn ? !tumbnailn : tumbnailn;
      do {
         tumbnailn = !mergeri && networkU.size >= 13;
         if (regengc) {
            break;
         }
      } while ((!mergeri || tumbnailn) && regengc);
      while (mergeri) {
          let directr = 4;
          let type_pdm = String.fromCharCode(109,100,116,97,0);
          let statsE = 0.0;
          let cancelG = String.fromCharCode(115,121,110,99,97,98,108,101,0);
         mergeri = directr >= 43;
         directr -= type_pdm.length;
         type_pdm += `${parseInt(`${statsE}`)}`;
         statsE /= Math.max(cancelG.length, 1);
         cancelG = `${type_pdm.length << (Math.min(Math.abs(3), 1))}`;
         break;
      }
      if (1 < (agreementt.length + 5) || agreementt.length < 5) {
          let search_ = String.fromCharCode(99,111,110,116,105,110,117,97,108,0);
          let grey8 = String.fromCharCode(98,117,102,102,101,114,115,114,99,0);
          let matchesC = 2.0;
          let renewX: Array<any> = [755, 387, 63];
         agreementt = [3 + parseInt(`${matchesC}`)];
         search_ += `${2 - search_.length}`;
         grey8 += `${grey8.length}`;
         matchesC -= (parseFloat(`${String.fromCharCode(97,0) == search_ ? grey8.length : search_.length}`));
         renewX = [grey8.length + 3];
      }
       let giftZ = 3.0;
         h_titleC.set(`${mergeri}`, ((mergeri ? 3 : 1) >> (Math.min(Math.abs(2), 3))));
       let descl = String.fromCharCode(116,114,97,118,101,114,115,101,0);
       let unimplementedview_ = String.fromCharCode(113,108,111,103,115,0);
      libturbomodulejsijnil += parseFloat(`${parseInt(`${ballU}`) % 3}`);
      break;
   }
      clockZ *= parseInt(`${libturbomodulejsijnil}`);
      leftw = new Map([[`${countryP}`, (parseInt(`${libturbomodulejsijnil}`) >> (Math.min(5, Math.abs((countryP ? 2 : 3)))))]]);

          dispatch(incrementSportWatchTime());
        }, 1000);

        return () => clearInterval(unsub);
      }
    }, [route.name])

    
    
    
    
    

    const isVip = yys_RelatedTooltips.isVip(userState.user);

    const pauseSportVideo =
      route.name === "体育详情" &&
      screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS && !yys_RelatedTooltips.isVip(userState.user)

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
       let mintegrald = false;
    let basketball9 = String.fromCharCode(99,95,51,52,95,104,114,115,115,0);
    let floaterH = String.fromCharCode(105,100,119,116,0);
    let appleh = String.fromCharCode(119,105,110,101,114,114,110,111,0);
    let sinaL = String.fromCharCode(114,101,97,100,102,117,108,108,0);
    let hejiJ = String.fromCharCode(121,95,51,48,0);
    let canvasC = 4;
    let nnewinterstitialC = String.fromCharCode(116,105,108,101,0);
    let middle4 = String.fromCharCode(114,101,100,101,109,112,116,105,111,110,95,115,95,55,53,0);
    let aboutI = 1;
    let readG: Map<any, any> = new Map([[String.fromCharCode(109,101,109,97,108,105,103,110,0),165], [String.fromCharCode(112,117,98,105,99,0),974]]);
   for (let c = 0; c < 3; c++) {
       let nativeM = String.fromCharCode(114,101,112,111,0);
          let layoutr = 3.0;
          let greyo = true;
         nativeM = `${nativeM.length / (Math.max(2, 7))}`;
         layoutr += (parseFloat(`${parseInt(`${layoutr}`) & (greyo ? 1 : 3)}`));
         greyo = !greyo;
         nativeM = `${2 % (Math.max(1, nativeM.length))}`;
          let sortC = String.fromCharCode(109,97,116,114,105,120,102,0);
          let malaysiaG = 4;
          let filterg = 5;
         nativeM = `${(String.fromCharCode(67,0) == sortC ? filterg : sortC.length)}`;
         malaysiaG += malaysiaG | malaysiaG;
      floaterH += `${(middle4.length % (Math.max(10, (mintegrald ? 1 : 5))))}`;
   }
      floaterH += `${floaterH.length}`;

      if (!playerVodAds?.actionUrl) {

   while (nnewinterstitialC.length == 5) {
       let pingF: Array<any> = [122, 62, 12];
       let predictionJ = String.fromCharCode(112,114,97,103,109,97,0);
      let catalog7 = 7051019 >= pingF.length;
      do {
          let librrcR: Map<any, any> = new Map([[String.fromCharCode(115,97,116,117,114,97,116,105,111,110,0),711], [String.fromCharCode(102,105,108,108,101,114,0),427], [String.fromCharCode(112,114,101,98,117,102,0),353]]);
         pingF = [(predictionJ == String.fromCharCode(108,0) ? predictionJ.length : pingF.length)];
         librrcR = new Map([[`${librrcR.size}`, librrcR.size - 2]]);
         if (catalog7) {
            break;
         }
      } while (catalog7 && ((predictionJ.length | pingF.length) >= 2 || 2 >= (2 | pingF.length)));
         pingF.push(predictionJ.length ^ 2);
         pingF.push(predictionJ.length);
      for (let y = 0; y < 1; y++) {
         predictionJ += `${2 - predictionJ.length}`;
      }
         pingF = [2 ^ predictionJ.length];
         pingF.push(pingF.length & 3);
      middle4 += `${appleh.length & 1}`;
      break;
   }
   let telemetryG = String.fromCharCode(116,106,55,111,98,56,102,113,113,0) == basketball9;
   do {
      basketball9 = `${hejiJ.length ^ 3}`;
      if (telemetryG) {
         break;
      }
   } while ((floaterH != basketball9) && telemetryG);
        

      sinaL = `${floaterH.length * 3}`;
      middle4 += `${canvasC % (Math.max(2, 7))}`;
        yys_event_common.playsAdsClickAnalytics();

   for (let s = 0; s < 3; s++) {
       let langp = String.fromCharCode(112,111,119,116,97,98,108,101,0);
       let latnu = false;
       let runtimeschedulerc = 2;
       let loadingQ = String.fromCharCode(119,97,116,99,104,101,114,115,0);
       let linkM = 1.0;
          let libavcodecc = true;
          let liblogger6 = String.fromCharCode(97,99,116,117,97,108,108,121,0);
          let tooltipsK = 2.0;
         runtimeschedulerc |= 1;
         libavcodecc = tooltipsK > parseFloat(`${liblogger6.length}`);
         liblogger6 = `${parseInt(`${tooltipsK}`) * 3}`;
          let appsU: Array<any> = [387, 297, 866];
          let halfb = String.fromCharCode(115,121,110,116,104,101,115,105,122,101,100,0);
         latnu = String.fromCharCode(78,0) == langp;
         appsU = [(halfb == String.fromCharCode(82,0) ? halfb.length : appsU.length)];
      if (5 >= langp.length && latnu) {
         latnu = 89 >= loadingQ.length;
      }
          let nextR = true;
          let shows = String.fromCharCode(112,101,114,115,105,115,116,97,110,116,0);
         latnu = langp.length == 28 || String.fromCharCode(68,0) == shows;
         nextR = !nextR;
         shows = `${((nextR ? 3 : 4))}`;
         loadingQ = `${(runtimeschedulerc / (Math.max(7, (latnu ? 1 : 1))))}`;
         linkM /= Math.max(2, 3);
      if (5 >= (loadingQ.length * parseInt(`${linkM}`))) {
         linkM -= parseInt(`${linkM}`) | runtimeschedulerc;
      }
          let libswresampleK = 2;
         loadingQ += `${loadingQ.length | 1}`;
         libswresampleK /= Math.max(5, 1);
         loadingQ = "1";
      let backgroundA = latnu ? !latnu : latnu;
      do {
          let brightnesst = 5.0;
          let castingt = String.fromCharCode(110,102,116,0);
         latnu = langp.length <= 32;
         brightnesst += parseFloat(`${castingt.length | 3}`);
         castingt += `${castingt.length >> (Math.min(2, Math.abs(parseInt(`${brightnesst}`))))}`;
         if (backgroundA) {
            break;
         }
      } while ((5 <= loadingQ.length) && backgroundA);
      while ((linkM / 2.43) > 1.72) {
         linkM += 3;
         break;
      }
      for (let c = 0; c < 2; c++) {
         linkM -= (runtimeschedulerc << (Math.min(1, Math.abs((latnu ? 5 : 1)))));
      }
      while ((runtimeschedulerc % 3) == 3 && 3 == runtimeschedulerc) {
         latnu = String.fromCharCode(88,0) == loadingQ;
         break;
      }
      for (let b = 0; b < 2; b++) {
          let target4 = 4.0;
         langp = `${((latnu ? 2 : 1) - loadingQ.length)}`;
         target4 /= Math.max(parseInt(`${target4}`) << (Math.min(4, Math.abs(3))), 4);
      }
         loadingQ += `${runtimeschedulerc}`;
      nnewinterstitialC += `${nnewinterstitialC.length}`;
   }
   if (appleh.length <= 3) {
      floaterH += `${((mintegrald ? 3 : 2))}`;
   }
        

   let soundG = appleh.length >= 8188643;
   do {
      appleh = `${floaterH.length}`;
      if (soundG) {
         break;
      }
   } while ((floaterH != String.fromCharCode(67,0) || appleh.length <= 3) && soundG);
      middle4 = `${(middle4 == String.fromCharCode(52,0) ? middle4.length : floaterH.length)}`;

        if (onPressCountdown) onPressCountdown();

      basketball9 += `${middle4.length}`;
   while (mintegrald || 1 == middle4.length) {
      mintegrald = floaterH == String.fromCharCode(85,0);
      break;
   }
        return;

   let darkW = 5847750 <= canvasC;
   do {
      canvasC -= (String.fromCharCode(65,0) == sinaL ? sinaL.length : canvasC);
      if (darkW) {
         break;
      }
   } while (darkW && (2 <= (canvasC + 4) || (canvasC + sinaL.length) <= 4));
       let qaagX = 2.0;
       let favoritet: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,0),true ], [String.fromCharCode(109,97,116,99,104,101,100,0),false ]]);
       let hongkongl = String.fromCharCode(99,104,105,108,108,95,54,95,57,52,0);
       let promotionE = String.fromCharCode(116,101,115,116,111,114,105,103,0);
       let username3 = String.fromCharCode(106,95,57,50,0);
         promotionE = `${promotionE.length}`;
         username3 = `${parseInt(`${qaagX}`) * 2}`;
          let stringO: Map<any, any> = new Map([[String.fromCharCode(98,121,112,97,115,115,0),464], [String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,115,0),353]]);
         hongkongl = `${3 / (Math.max(7, parseInt(`${qaagX}`)))}`;
         stringO = new Map([[`${stringO.size}`, 2]]);
      let downloadedT = 6837543 >= favoritet.size;
      do {
         favoritet = new Map([[promotionE, (String.fromCharCode(68,0) == hongkongl ? hongkongl.length : promotionE.length)]]);
         if (downloadedT) {
            break;
         }
      } while (downloadedT && ((3 - favoritet.size) < 3));
      for (let r = 0; r < 1; r++) {
          let materialC = false;
          let pathJ = 5;
         favoritet.set(username3, favoritet.size + 3);
         materialC = !materialC || 37 >= pathJ;
         pathJ >>= Math.min(3, Math.abs(2));
      }
          let checkboxw = String.fromCharCode(99,111,110,116,97,99,116,115,0);
          let infoc = 5.0;
          let pressureV = 1.0;
         promotionE += "1";
         checkboxw = `${parseInt(`${pressureV}`)}`;
         infoc -= parseFloat(`${parseInt(`${pressureV}`)}`);
      let hookR = 7892522.0 <= qaagX;
      do {
         qaagX += 3;
         if (hookR) {
            break;
         }
      } while (hookR && (2.67 > (favoritet.size / (Math.max(7, qaagX))) && (3 << (Math.min(1, Math.abs(favoritet.size)))) > 5));
      if (promotionE.length <= 4) {
         username3 = `${hongkongl.length ^ 2}`;
      }
      canvasC &= appleh.length * hongkongl.length;
      }

      const url = playerVodAds?.actionUrl.includes(RoomStats.libreanimatedHelperLogoInterne([40,52,52,48,64],0x40,false)) ? playerVodAds?.actionUrl : RoomStats.libreanimatedHelperLogoInterne([122,102,102,98,97,40,61,61,18],0x12,false) + playerVodAds?.actionUrl

      

      mintegrald = String.fromCharCode(109,0) == floaterH;
      middle4 += `${(String.fromCharCode(66,0) == middle4 ? middle4.length : hejiJ.length)}`;
      

      hejiJ = `${(3 << (Math.min(5, Math.abs((mintegrald ? 5 : 3)))))}`;
   for (let i = 0; i < 1; i++) {
       let middlek = false;
       let crossi: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,108,97,121,105,110,103,95,97,95,52,54,0),String.fromCharCode(105,112,104,111,110,101,0)], [String.fromCharCode(101,109,117,108,97,116,101,100,0),String.fromCharCode(115,109,101,97,114,0)], [String.fromCharCode(118,105,115,105,98,105,108,105,116,105,101,115,0),String.fromCharCode(114,101,115,0)]]);
       let recommendationq = String.fromCharCode(97,100,109,105,110,115,0);
         crossi = new Map([[`${middlek}`, ((middlek ? 2 : 2))]]);
         crossi = new Map([[`${middlek}`, ((middlek ? 2 : 1))]]);
      let incidentt = 7725324 >= recommendationq.length;
      do {
          let nativemodulew: Map<any, any> = new Map([[String.fromCharCode(102,105,101,108,0),913], [String.fromCharCode(97,97,100,0),139]]);
          let update__xx = 2.0;
          let nextb: Array<any> = [98, 665, 134];
          let guided = 5.0;
          let libcrashsdkg = 1.0;
         recommendationq = "1";
         nativemodulew = new Map([[`${libcrashsdkg}`, parseInt(`${guided}`)]]);
         update__xx /= Math.max(2, 3 - parseInt(`${libcrashsdkg}`));
         nextb.push(1 ^ nextb.length);
         if (incidentt) {
            break;
         }
      } while (((recommendationq.length & crossi.size) >= 5 || 5 >= (5 & crossi.size)) && incidentt);
       let fileq: Map<any, any> = new Map([[String.fromCharCode(103,101,116,109,97,120,114,115,115,0),true ], [String.fromCharCode(100,120,116,111,114,121,0),false ]]);
          let flipperK = 3.0;
          let eighteen_ = 0.0;
          let circle4 = false;
         middlek = flipperK < 91.14 && !circle4;
         flipperK *= parseInt(`${eighteen_}`);
      while (4 >= (2 - crossi.size)) {
          let hiadW = String.fromCharCode(115,104,97,100,105,110,103,0);
          let nalyticsj: Map<any, any> = new Map([[String.fromCharCode(108,101,116,116,101,114,0),String.fromCharCode(116,115,97,110,0)], [String.fromCharCode(97,118,102,111,114,109,97,116,114,101,115,0),String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,0)]]);
         crossi.set(recommendationq, recommendationq.length);
         hiadW += `${2 & hiadW.length}`;
         nalyticsj = new Map([[`${nalyticsj.size}`, 1 << (Math.min(1, Math.abs(nalyticsj.size)))]]);
         break;
      }
         recommendationq = `${crossi.size - 1}`;
         recommendationq = `${3 - fileq.size}`;
      if ((2 << (Math.min(2, Math.abs(crossi.size)))) <= 4) {
         crossi.set(recommendationq, 3 + fileq.size);
      }
      canvasC %= Math.max(5, (String.fromCharCode(88,0) == middle4 ? canvasC : middle4.length));
   }

      

   for (let h = 0; h < 1; h++) {
      hejiJ = `${middle4.length}`;
   }
       let pointz = 2;
      let holderJ = pointz <= 6454303;
      do {
         pointz |= pointz % (Math.max(2, 8));
         if (holderJ) {
            break;
         }
      } while ((pointz > 1) && holderJ);
      while (1 >= (pointz ^ 1) && 2 >= (pointz ^ 1)) {
         pointz >>= Math.min(Math.abs(pointz & 3), 2);
         break;
      }
         pointz >>= Math.min(5, Math.abs(pointz));
      mintegrald = String.fromCharCode(98,0) == floaterH;
      

      appleh += "3";
   while (middle4.length >= 4) {
      middle4 = `${(basketball9 == String.fromCharCode(95,0) ? basketball9.length : nnewinterstitialC.length)}`;
      break;
   }
      

       let unselectedY = 0.0;
       let whistlei: Array<any> = [491, 879];
       let pause9 = false;
          let coreP = true;
         pause9 = coreP;
         whistlei = [3 * whistlei.length];
         pause9 = whistlei.length < 41 && 40.68 < unselectedY;
         whistlei = [1];
       let countdownt = 5;
       let lineW = 1;
          let manifestd = String.fromCharCode(102,119,114,105,116,101,0);
          let customt = 1.0;
         lineW &= parseInt(`${customt}`);
         manifestd = `${manifestd.length - manifestd.length}`;
         customt *= manifestd.length / (Math.max(4, manifestd.length));
          let middleD = false;
          let templateprocessorU: Array<any> = [667, 141];
         whistlei.push(3);
         middleD = templateprocessorU.length > 80;
         templateprocessorU = [((middleD ? 1 : 4) ^ 1)];
      for (let d = 0; d < 1; d++) {
         countdownt += parseInt(`${unselectedY}`);
      }
         lineW -= whistlei.length - parseInt(`${unselectedY}`);
      middle4 = "2";
       let philippinesR: Array<any> = [553, 230, 741];
       let turnR = 5;
      for (let d = 0; d < 2; d++) {
          let fastforwardo = 5.0;
          let countryZ = false;
          let l_unlockY = String.fromCharCode(101,118,101,114,121,111,110,101,0);
          let injuryw: Array<any> = [42, 986, 961];
         turnR <<= Math.min(2, Math.abs(3));
         fastforwardo /= Math.max(2, l_unlockY.length);
         countryZ = l_unlockY.length <= injuryw.length;
         injuryw.push(3 << (Math.min(1, injuryw.length)));
      }
       let vignetten = 2.0;
       let indexG = 0.0;
         turnR += parseInt(`${indexG}`) + 3;
          let utilsS: Map<any, any> = new Map([[String.fromCharCode(97,115,110,116,0),true ], [String.fromCharCode(111,112,99,111,100,101,0),true ], [String.fromCharCode(117,114,97,110,100,111,109,0),false ]]);
          let countdownX = 5.0;
          let libreanimatedl: Map<any, any> = new Map([[String.fromCharCode(101,108,115,116,95,104,95,52,57,0),238], [String.fromCharCode(117,112,116,105,109,101,0),480]]);
         vignetten += parseFloat(`${2 >> (Math.min(2, Math.abs(libreanimatedl.size)))}`);
         utilsS = new Map([[`${utilsS.size}`, 3]]);
         countdownX += parseFloat(`${utilsS.size | 3}`);
         libreanimatedl.set(`${countdownX}`, parseInt(`${countdownX}`) - utilsS.size);
         vignetten += parseFloat(`${parseInt(`${vignetten}`)}`);
         indexG -= parseFloat(`${turnR & parseInt(`${vignetten}`)}`);
      canvasC &= (middle4 == String.fromCharCode(49,0) ? middle4.length : appleh.length);
      philippinesR = [philippinesR.length >> (Math.min(3, philippinesR.length))];
      

       let green0: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,0),500], [String.fromCharCode(103,109,97,116,99,104,0),910], [String.fromCharCode(115,95,49,48,48,95,100,105,115,97,112,112,101,97,114,97,110,99,101,0),419]]);
         green0 = new Map([[`${green0.size}`, 2 - green0.size]]);
         green0.set(`${green0.size}`, 1);
          let selectionX = true;
         green0 = new Map([[`${green0.size}`, (green0.size >> (Math.min(1, Math.abs((selectionX ? 4 : 5)))))]]);
      floaterH = `${basketball9.length}`;
   let activityb = 7779827 >= middle4.length;
   do {
       let liveS = false;
       let fileU = String.fromCharCode(104,111,108,100,0);
          let regengT = 4;
         fileU = `${(1 & (liveS ? 1 : 5))}`;
         regengT *= regengT | 1;
      for (let m = 0; m < 1; m++) {
          let mathz = 3.0;
          let thailandS = String.fromCharCode(115,116,101,112,115,0);
         liveS = !liveS;
         mathz -= (parseFloat(`${thailandS == String.fromCharCode(105,0) ? thailandS.length : parseInt(`${mathz}`)}`));
      }
      for (let h = 0; h < 3; h++) {
         liveS = !fileU.includes(`${liveS}`);
      }
          let unreadt: Array<any> = [651, 715];
         liveS = fileU.length >= 1 || liveS;
         unreadt = [unreadt.length];
      while (fileU.length <= 1) {
         fileU = `${fileU.length << (Math.min(Math.abs(3), 2))}`;
         break;
      }
          let privilegeK: Map<any, any> = new Map([[String.fromCharCode(98,116,114,101,101,0),String.fromCharCode(97,118,111,105,100,0)], [String.fromCharCode(117,116,105,108,0),String.fromCharCode(115,116,111,114,97,98,108,101,0)]]);
          let membershipO = 5.0;
          let redirectv: Array<any> = [759, 782, 566];
         fileU += `${privilegeK.size}`;
         privilegeK.set(`${membershipO}`, redirectv.length);
         membershipO /= Math.max(5, parseInt(`${membershipO}`));
         redirectv = [redirectv.length ^ 3];
      middle4 = "2";
      if (activityb) {
         break;
      }
   } while (activityb && (floaterH != String.fromCharCode(111,0) || middle4.length <= 2));
      

      canvasC >>= Math.min(Math.abs(2), 5);
      appleh += `${(nnewinterstitialC == String.fromCharCode(54,0) ? hejiJ.length : nnewinterstitialC.length)}`;
      

       let combineda = 1.0;
       let sansB = 0.0;
       let mode5 = true;
      while ((2.87 * combineda) > 3.42) {
          let alertx = String.fromCharCode(102,105,120,0);
          let gesture3 = String.fromCharCode(97,114,103,120,0);
          let darki = true;
          let libreacth = 5.0;
          let tailn = String.fromCharCode(114,101,102,112,105,99,0);
         combineda -= gesture3.length;
         alertx += `${tailn.length}`;
         gesture3 += `${1 << (Math.min(Math.abs(parseInt(`${libreacth}`)), 5))}`;
         darki = !darki;
         libreacth += 1 ^ parseInt(`${libreacth}`);
         tailn = `${1 % (Math.max(parseInt(`${libreacth}`), 9))}`;
         break;
      }
         sansB *= parseFloat(`${parseInt(`${combineda}`) + 3}`);
      let commonD = sansB >= 9203632.0;
      do {
         sansB += parseFloat(`${1 + parseInt(`${sansB}`)}`);
         if (commonD) {
            break;
         }
      } while (commonD && (!mode5));
         combineda += parseInt(`${sansB}`) | 2;
      if (combineda >= 4.54) {
         combineda /= Math.max(1, parseInt(`${sansB}`));
      }
      let textC = sansB >= 7402431.0;
      do {
         sansB /= Math.max(parseFloat(`${parseInt(`${sansB}`) << (Math.min(4, Math.abs(1)))}`), 1);
         if (textC) {
            break;
         }
      } while (textC && ((sansB / 2.24) >= 4.69));
      let videoT = combineda >= 6056709.0;
      do {
          let rounde: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,0),693], [String.fromCharCode(98,103,112,104,99,104,101,99,107,0),3], [String.fromCharCode(119,109,118,100,97,116,97,0),133]]);
          let updatesE = String.fromCharCode(97,100,100,99,111,110,115,116,0);
          let telemetryX = String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,115,0);
          let gmailb = String.fromCharCode(112,111,114,116,101,114,0);
         combineda -= 3 << (Math.min(Math.abs(parseInt(`${sansB}`)), 5));
         rounde = new Map([[`${rounde.size}`, rounde.size / 3]]);
         updatesE += "1";
         telemetryX += `${2 / (Math.max(6, rounde.size))}`;
         gmailb += `${(gmailb == String.fromCharCode(74,0) ? telemetryX.length : gmailb.length)}`;
         if (videoT) {
            break;
         }
      } while (videoT && (combineda < 3.82));
         sansB /= Math.max(parseFloat(`${3 | parseInt(`${sansB}`)}`), 2);
          let changeV = String.fromCharCode(110,97,108,115,0);
         sansB += parseFloat(`${changeV.length | parseInt(`${sansB}`)}`);
      aboutI -= canvasC / (Math.max(8, aboutI));
      aboutI /= Math.max(3 - aboutI, 5);
      

      middle4 = `${aboutI % (Math.max(3, 9))}`;
      floaterH += `${aboutI}`;
      Linking.openURL(url);

   while (basketball9.endsWith(`${mintegrald}`)) {
       let thumbnail_ = String.fromCharCode(115,104,105,102,116,105,110,103,115,0);
       let fastW = 5.0;
       let libsgcoret = 5.0;
       let styler = String.fromCharCode(110,101,103,97,116,101,100,0);
       let hongkong0 = 1.0;
      if (styler.includes(`${fastW}`)) {
         styler = `${styler.length ^ 2}`;
      }
         thumbnail_ = `${(String.fromCharCode(55,0) == thumbnail_ ? parseInt(`${libsgcoret}`) : thumbnail_.length)}`;
      while (libsgcoret <= thumbnail_.length) {
         libsgcoret *= thumbnail_.length ^ 2;
         break;
      }
      while (2.70 > (hongkong0 / (Math.max(thumbnail_.length, 5))) && (2.70 / (Math.max(7, hongkong0))) > 1.57) {
         thumbnail_ += `${parseInt(`${fastW}`)}`;
         break;
      }
      let stationsH = 8827782.0 >= fastW;
      do {
         fastW -= 3;
         if (stationsH) {
            break;
         }
      } while (stationsH && ((styler.length ^ 2) <= 5 || 3 <= (parseInt(`${fastW}`) / 2)));
          let libhermesQ = String.fromCharCode(115,116,97,114,116,95,121,95,54,55,0);
          let stringsd = 0.0;
          let module8 = String.fromCharCode(105,116,120,102,109,0);
         hongkong0 += libhermesQ.length;
         libhermesQ += "2";
         stringsd -= parseFloat(`${3 ^ module8.length}`);
         module8 += `${parseInt(`${stringsd}`)}`;
      while ((hongkong0 * 3.55) > 5.18) {
         hongkong0 /= Math.max(parseInt(`${hongkong0}`) & parseInt(`${fastW}`), 3);
         break;
      }
      while ((hongkong0 / 1.15) >= 2.63 || 3.60 >= (fastW / 1.15)) {
         hongkong0 *= (styler == String.fromCharCode(85,0) ? parseInt(`${hongkong0}`) : styler.length);
         break;
      }
         fastW /= Math.max(3, 3);
      for (let q = 0; q < 3; q++) {
          let assistJ: Map<any, any> = new Map([[String.fromCharCode(99,111,111,107,100,97,116,97,95,97,95,54,51,0),String.fromCharCode(99,111,115,113,102,0)], [String.fromCharCode(104,101,105,99,0),String.fromCharCode(103,117,97,114,100,0)]]);
          let alertK: Map<any, any> = new Map([[String.fromCharCode(98,101,116,116,101,114,0),373], [String.fromCharCode(115,116,114,104,97,115,104,95,99,95,54,55,0),129]]);
          let gradle5 = false;
         fastW -= (thumbnail_ == String.fromCharCode(73,0) ? thumbnail_.length : parseInt(`${hongkong0}`));
         assistJ = new Map([[`${assistJ.size}`, assistJ.size]]);
         alertK.set(`${gradle5}`, assistJ.size);
      }
         fastW -= (String.fromCharCode(106,0) == thumbnail_ ? parseInt(`${libsgcoret}`) : thumbnail_.length);
         styler += `${parseInt(`${fastW}`) - 2}`;
      while ((1.95 + hongkong0) < 2.53 && 5 < (styler.length - 4)) {
          let usernamef: Array<any> = [String.fromCharCode(119,101,108,108,0), String.fromCharCode(103,101,110,101,114,97,103,101,0), String.fromCharCode(100,97,112,112,115,0)];
          let right4 = true;
         hongkong0 *= 2 << (Math.min(Math.abs(parseInt(`${hongkong0}`)), 1));
         usernamef = [usernamef.length];
         right4 = usernamef.includes(right4);
         break;
      }
      for (let n = 0; n < 1; n++) {
         libsgcoret -= 1 ^ thumbnail_.length;
      }
      for (let o = 0; o < 1; o++) {
         styler += "1";
      }
      basketball9 += "3";
      break;
   }
      hejiJ = `${hejiJ.length >> (Math.min(sinaL.length, 3))}`;
      

      hejiJ = `${(String.fromCharCode(71,0) == nnewinterstitialC ? nnewinterstitialC.length : (mintegrald ? 4 : 5))}`;
       let logine = String.fromCharCode(109,95,57,51,95,99,101,110,116,101,114,105,110,103,0);
       let viewerJ = String.fromCharCode(102,112,115,0);
       let greyP = false;
         logine += `${logine.length + 1}`;
      if (!viewerJ.includes(`${logine.length}`)) {
          let gesture3E = 3.0;
          let filledk: Map<any, any> = new Map([[String.fromCharCode(105,115,97,99,0),String.fromCharCode(105,110,104,105,98,105,116,115,0)], [String.fromCharCode(109,117,116,101,120,101,115,0),String.fromCharCode(115,99,97,110,120,0)]]);
          let subsk = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,101,100,0);
          let kickj: Array<any> = [293, 796, 895];
         viewerJ = `${logine.length / (Math.max(1, 8))}`;
         gesture3E += kickj.length * parseInt(`${gesture3E}`);
         filledk.set(`${gesture3E}`, 2);
         subsk += `${subsk.length + filledk.size}`;
         kickj = [subsk.length];
      }
          let starb = String.fromCharCode(115,105,110,113,102,0);
          let manifestX = String.fromCharCode(100,111,110,110,97,0);
          let colorsY: Map<any, any> = new Map([[String.fromCharCode(108,95,56,53,95,112,101,114,109,117,116,97,116,105,111,110,0),645], [String.fromCharCode(115,116,97,116,105,115,116,105,99,115,0),970]]);
         viewerJ += `${((greyP ? 1 : 3) % (Math.max(manifestX.length, 2)))}`;
         starb += "2";
         manifestX += `${colorsY.size}`;
         colorsY = new Map([[`${colorsY.size}`, starb.length * 1]]);
          let areai = false;
          let areaO: Map<any, any> = new Map([[String.fromCharCode(115,117,98,120,0),503], [String.fromCharCode(112,101,101,114,0),288]]);
          let buildz = String.fromCharCode(122,95,54,51,95,111,112,112,111,115,105,116,101,0);
         greyP = areaO.size == 54;
         areai = !areai;
         areaO = new Map([[`${areai}`, 1]]);
         buildz = `${buildz.length}`;
         greyP = logine.length < 4 || !greyP;
      let cricketn = 5597210 <= viewerJ.length;
      do {
         viewerJ += "1";
         if (cricketn) {
            break;
         }
      } while (cricketn && (logine.length > viewerJ.length));
      for (let o = 0; o < 3; o++) {
          let flipper4 = 2.0;
          let placementa = String.fromCharCode(100,105,97,103,114,97,109,0);
          let renewo: Map<any, any> = new Map([[String.fromCharCode(99,111,99,111,97,0),true ], [String.fromCharCode(114,95,56,54,95,99,97,114,100,97,110,111,0),true ]]);
         logine = `${(String.fromCharCode(80,0) == logine ? renewo.size : logine.length)}`;
         flipper4 += (parseFloat(`${String.fromCharCode(112,0) == placementa ? parseInt(`${flipper4}`) : placementa.length}`));
         renewo = new Map([[placementa, 3]]);
      }
      for (let s = 0; s < 3; s++) {
         logine = "2";
      }
      let details5 = viewerJ == String.fromCharCode(101,56,113,105,103,0);
      do {
          let libzeusY = 1;
          let form2 = 3;
          let libmapbufferjniD = String.fromCharCode(114,105,110,103,0);
         viewerJ = `${(String.fromCharCode(86,0) == viewerJ ? viewerJ.length : libmapbufferjniD.length)}`;
         libzeusY &= 2;
         form2 %= Math.max(libzeusY, 4);
         libmapbufferjniD = `${libzeusY << (Math.min(Math.abs(3), 5))}`;
         if (details5) {
            break;
         }
      } while (details5 && (!viewerJ.endsWith(`${logine.length}`)));
      hejiJ += `${readG.size | aboutI}`;

      

   for (let i = 0; i < 2; i++) {
      readG.set(`${hejiJ}`, readG.size);
   }
   while (2 < readG.size) {
       let rulesH: Array<any> = [148, 112];
       let libsgcoreb: Map<any, any> = new Map([[String.fromCharCode(119,104,101,101,108,0),String.fromCharCode(114,111,117,110,100,115,0)], [String.fromCharCode(115,117,98,115,101,115,115,105,111,110,0),String.fromCharCode(100,105,97,103,110,111,115,116,105,99,115,0)]]);
       let awayM = 4.0;
      while ((awayM / 3.36) >= 4.59) {
         rulesH = [3 - libsgcoreb.size];
         break;
      }
      while ((libsgcoreb.size | rulesH.length) < 4 || 2 < (4 | libsgcoreb.size)) {
         libsgcoreb = new Map([[`${rulesH.length}`, 1]]);
         break;
      }
          let schedulerG = String.fromCharCode(102,116,115,97,117,120,0);
          let catagorye = 3.0;
          let notificationQ = 2.0;
         libsgcoreb.set(`${awayM}`, 2);
         schedulerG = `${parseInt(`${catagorye}`)}`;
         notificationQ -= parseFloat(`${3}`);
         libsgcoreb = new Map([[`${libsgcoreb.size}`, rulesH.length]]);
         awayM *= parseFloat(`${rulesH.length}`);
      let runtimescheduler5 = 7737149 >= rulesH.length;
      do {
         rulesH = [2 + libsgcoreb.size];
         if (runtimescheduler5) {
            break;
         }
      } while (runtimescheduler5 && (4.21 == (awayM * parseFloat(`${rulesH.length}`)) || 4.21 == (parseFloat(`${rulesH.length}`) * awayM)));
      for (let p = 0; p < 1; p++) {
         awayM -= parseFloat(`${libsgcoreb.size >> (Math.min(rulesH.length, 3))}`);
      }
         awayM += parseFloat(`${3 >> (Math.min(1, Math.abs(libsgcoreb.size)))}`);
       let libreanimated_ = String.fromCharCode(97,110,116,105,97,108,105,97,115,101,100,0);
       let bottomB = String.fromCharCode(97,117,116,111,103,101,110,0);
      mintegrald = null != libsgcoreb.get(`${awayM}`);
      break;
   }
      yys_event_common.playsAdsClickAnalytics({
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
              onMount={onAdsMount}
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
