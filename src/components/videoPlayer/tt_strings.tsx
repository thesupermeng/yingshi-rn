

class HalfCenter {
    static chatUnselected = (contents: [number], key: number, hasEmoji: boolean) => {
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
import VideoControlsOverlay from "./tt_description";
import WebView from "react-native-webview";


import FastImage from "../../components/common/tt_connection";

import FastForwardProgressIcon from "@static/images/nativeChange.svg";
import RewindProgressIcon from "@static/images/bufferCanvasHandler.svg";

import { incrementSportWatchTime, setFullscreenState, showAdultModeVip } from "@redux/actions/tt_copy_heji";

import {
  ttAcceptedCountItem,
  ttWeibo,
  ttAppsOther,
} from "@type/tt_line_borderless";
import VideoWithControls from "./tt_mini_foreground";
import { useDispatch } from "react-redux";
import { useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { screenModel } from "@type/tt_twitter_data";
import { ADULT_MODE_PREVIEW_DURATION, AD_VIDEO_SECONDS, NON_VIP_STREAM_TIME_SECONDS } from "@utility/tt_trophy_cross";
import { AdVideoImage } from "./tt_episodes";
import { ttStreaming } from "@redux/reducers/tt_configure_injury";
import { ttConfirmationChinasame } from "@api";
import { useQuery } from "@tanstack/react-query";
import tt_humidity_guide from "../../../Umeng/tt_humidity_guide";
import InAppBrowser from "react-native-inappbrowser-reborn";
import ImmersiveMode from "react-native-immersive-mode"
import { ttOrange } from "@redux/tt_updates_bottom";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";

LogBox.ignoreLogs([`Trying to load empty source.`]);


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
  showAds?: boolean,
  onPressCountdown?: () => void,
  vodID?: number,
  sourceID?: number,
  onDownloadVod?: (nid: number) => void,
  setShowAdOverlay: (show: boolean) => void,
  onAdsMount?: () => void,
  vipGuideModalOpen?: boolean,
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
       let expiredn = 0;
    let humidity2: Array<any> = [924, 92];
    let friendss = false;
    let stringss = 4.0;
    let dragM = String.fromCharCode(99,95,53,51,95,114,101,99,111,103,110,105,122,101,114,0);
    let untickC = String.fromCharCode(112,105,99,116,117,114,101,95,112,95,51,56,0);
    let streamings: Map<any, any> = new Map([[String.fromCharCode(117,95,57,50,95,99,121,99,108,105,99,114,101,102,114,101,115,104,0),135], [String.fromCharCode(108,101,102,116,109,111,115,116,95,115,95,52,49,0),637], [String.fromCharCode(109,103,109,116,95,49,95,57,54,0),139]]);
    let logoutj = 1.0;
    let arrowY = 0.0;
   if (!friendss && 5 <= (4 / (Math.max(1, humidity2.length)))) {
      humidity2.push(expiredn);
   }
   if ((3 | dragM.length) > 4 || 1 > (3 | dragM.length)) {
       let guide6 = true;
      while (!guide6) {
          let detailsY = 1;
          let modityc = String.fromCharCode(119,95,53,95,116,114,105,112,108,101,0);
          let unreadR = String.fromCharCode(117,95,54,53,95,99,111,109,112,97,114,97,116,111,114,0);
         guide6 = 79 > modityc.length || 79 > unreadR.length;
         detailsY ^= detailsY % 2;
         modityc += `${detailsY & 3}`;
         break;
      }
          let lang7 = String.fromCharCode(99,95,52,56,95,109,115,110,119,99,0);
          let playlistV = String.fromCharCode(113,95,49,55,95,108,105,109,105,116,0);
          let anythinkH = String.fromCharCode(109,95,55,57,95,118,99,116,101,115,116,0);
         guide6 = !guide6;
         lang7 = `${lang7.length % 1}`;
         playlistV = `${2 << (Math.min(5, playlistV.length))}`;
         anythinkH += `${anythinkH.length}`;
         guide6 = guide6 && !guide6;
      expiredn /= Math.max(((friendss ? 1 : 1) + parseInt(`${stringss}`)), 5);
   }
   let friendsP = String.fromCharCode(51,108,112,109,102,52,111,117,0) == dragM;
   do {
      dragM = "2";
      if (friendsP) {
         break;
      }
   } while ((dragM.length > 5) && friendsP);
   if ((1 << (Math.min(1, humidity2.length))) > 3 || (1 << (Math.min(5, humidity2.length))) > 3) {
       let interstitialw = String.fromCharCode(114,101,115,97,109,112,108,101,114,95,108,95,53,53,0);
      if (interstitialw.startsWith(`${interstitialw.length}`)) {
          let turn1 = String.fromCharCode(112,95,49,53,95,112,105,99,107,101,114,115,0);
          let selectedD = false;
          let mbbidW = String.fromCharCode(117,95,53,50,95,100,101,102,101,97,116,0);
          let pathr = String.fromCharCode(114,101,119,105,110,100,95,99,95,53,48,0);
         interstitialw = `${mbbidW.length}`;
         turn1 += `${((selectedD ? 4 : 3) & turn1.length)}`;
         selectedD = !selectedD;
         mbbidW = "2";
         pathr += `${pathr.length}`;
      }
      for (let s = 0; s < 2; s++) {
         interstitialw += `${interstitialw.length / 2}`;
      }
       let policyB = 5.0;
       let guideg = 1.0;
      humidity2 = [3 * parseInt(`${stringss}`)];
   }
      dragM = `${(expiredn << (Math.min(4, Math.abs((friendss ? 4 : 1)))))}`;
      dragM += `${parseInt(`${stringss}`)}`;
       let nextr: Array<any> = [44, 627];
       let projectt: Map<any, any> = new Map([[String.fromCharCode(111,95,53,49,95,116,117,110,105,110,103,0),true ], [String.fromCharCode(116,95,56,57,95,99,114,108,100,0),true ], [String.fromCharCode(121,111,117,114,95,115,95,50,54,0),false ]]);
         nextr.push(1);
      if ((projectt.size | 1) == 2) {
          let turnZ: Array<any> = [584, 7];
          let detailP = 0;
          let backgroundp = false;
          let helperW: Array<any> = [728, 565];
          let reportH: Array<any> = [999, 850, 607];
         projectt.set(`${reportH.length}`, projectt.size ^ reportH.length);
         turnZ.push(detailP << (Math.min(2, Math.abs(3))));
         detailP >>= Math.min(4, Math.abs(((backgroundp ? 1 : 3) | detailP)));
         backgroundp = detailP >= 98;
         helperW = [3];
      }
      while ((nextr.length >> (Math.min(Math.abs(4), 2))) == 5 && 2 == (nextr.length >> (Math.min(Math.abs(4), 4)))) {
         nextr.push(nextr.length * 3);
         break;
      }
      if (projectt.get(`${nextr.length}`) == null) {
         projectt.set(`${nextr.length}`, projectt.size & 1);
      }
      let collection9 = 9027788 <= projectt.size;
      do {
         projectt = new Map([[`${projectt.size}`, projectt.size + 1]]);
         if (collection9) {
            break;
         }
      } while ((4 < (nextr.length << (Math.min(Math.abs(projectt.size), 3))) && (nextr.length << (Math.min(Math.abs(projectt.size), 1))) < 4) && collection9);
      for (let g = 0; g < 2; g++) {
         projectt = new Map([[`${projectt.size}`, nextr.length | 2]]);
      }
      untickC = `${((friendss ? 5 : 1) + projectt.size)}`;
      dragM = `${dragM.length}`;
   for (let l = 0; l < 2; l++) {
      streamings = new Map([[`${streamings.size}`, 2]]);
   }
       let gmailH = 3.0;
          let auto_pl = true;
         gmailH *= (parseInt(`${gmailH}`) % (Math.max(3, (auto_pl ? 5 : 3))));
          let catalogL: Map<any, any> = new Map([[String.fromCharCode(114,101,115,117,108,116,115,95,55,95,51,53,0),String.fromCharCode(122,95,50,56,95,115,111,102,97,108,105,122,101,114,0)], [String.fromCharCode(105,110,115,101,114,116,105,111,110,115,95,102,95,50,57,0),String.fromCharCode(108,115,112,112,111,108,121,95,107,95,53,53,0)]]);
         gmailH += catalogL.size * parseInt(`${gmailH}`);
      for (let q = 0; q < 2; q++) {
          let rulesd: Map<any, any> = new Map([[String.fromCharCode(103,95,50,48,95,98,111,108,100,0),163], [String.fromCharCode(109,95,56,56,95,99,108,97,115,115,105,99,0),138], [String.fromCharCode(115,95,54,54,95,102,111,114,99,105,110,103,0),556]]);
          let launchJ: Array<any> = [384, 56, 762];
          let abouty = 5;
         gmailH += rulesd.size;
         rulesd.set(`${abouty}`, abouty / 3);
         launchJ = [launchJ.length];
      }
      humidity2.push(streamings.size >> (Math.min(Math.abs(2), 3)));
      humidity2.push(parseInt(`${logoutj}`) * 3);
       let refreshd = 4.0;
      let viewerl = 7074678.0 >= refreshd;
      do {
          let result4: Array<any> = [String.fromCharCode(100,101,109,97,110,100,95,97,95,53,55,0), String.fromCharCode(121,95,51,55,95,104,101,114,101,0), String.fromCharCode(102,116,118,118,101,114,116,108,105,110,101,95,100,95,54,0)];
          let hookD = String.fromCharCode(119,101,114,101,95,51,95,50,54,0);
          let anneri: Array<any> = [String.fromCharCode(108,95,49,51,95,112,97,115,115,105,118,101,0), String.fromCharCode(100,95,57,55,95,115,98,114,100,115,112,0)];
         refreshd /= Math.max((parseFloat(`${hookD == String.fromCharCode(115,0) ? result4.length : hookD.length}`)), 3);
         result4.push(anneri.length | anneri.length);
         if (viewerl) {
            break;
         }
      } while ((1.30 == (refreshd + refreshd)) && viewerl);
      let whiter = refreshd <= 7298877.0;
      do {
          let expand6 = false;
         refreshd += parseFloat(`${parseInt(`${refreshd}`) * 2}`);
         expand6 = !expand6;
         if (whiter) {
            break;
         }
      } while ((refreshd <= 1.47) && whiter);
         refreshd -= parseFloat(`${parseInt(`${refreshd}`) & 3}`);
      stringss /= Math.max(4, 1);
   for (let e = 0; e < 2; e++) {
       let logoK = 4;
       let sort1 = String.fromCharCode(104,95,52,95,100,105,115,112,97,116,99,104,101,114,0);
       let stepX = false;
       let sentry9 = 0.0;
      if (stepX) {
         stepX = 17 > logoK;
      }
         sort1 = `${2 * logoK}`;
      if (sentry9 >= sort1.length) {
          let controlsa = 5.0;
          let previewR = 1;
          let sigmob2 = String.fromCharCode(110,95,54,48,95,109,117,108,0);
          let layoutq = String.fromCharCode(113,95,55,95,111,98,115,101,114,118,97,116,105,111,110,0);
          let styleso = 3.0;
         sort1 = `${logoK / (Math.max(2, previewR))}`;
         controlsa -= sigmob2.length;
         previewR -= (String.fromCharCode(106,0) == sigmob2 ? parseInt(`${controlsa}`) : sigmob2.length);
         layoutq += `${parseInt(`${controlsa}`) / 2}`;
         styleso += parseInt(`${styleso}`) % (Math.max(sigmob2.length, 7));
      }
          let huaweiq: Map<any, any> = new Map([[String.fromCharCode(102,95,49,52,95,114,108,112,0),6], [String.fromCharCode(114,101,115,112,111,110,100,95,97,95,51,52,0),176]]);
         sort1 += "1";
         huaweiq.set(`${huaweiq.size}`, huaweiq.size);
         stepX = !stepX || sort1.length == 28;
          let resultD = 4.0;
          let watchz = 5.0;
          let lang6 = String.fromCharCode(99,114,111,108,108,95,116,95,53,49,0);
         sentry9 /= Math.max(1, ((stepX ? 5 : 4)));
         resultD *= parseFloat(`${lang6.length ^ parseInt(`${watchz}`)}`);
         watchz += parseFloat(`${parseInt(`${resultD}`)}`);
         lang6 += `${parseInt(`${resultD}`) >> (Math.min(Math.abs(parseInt(`${watchz}`)), 5))}`;
       let arrowW = String.fromCharCode(97,103,101,110,116,95,57,95,52,49,0);
      while (sort1.length <= 1) {
          let selectn = String.fromCharCode(120,95,52,56,95,108,111,116,115,0);
          let dangerT: Map<any, any> = new Map([[String.fromCharCode(109,95,50,56,95,116,121,111,101,0),519], [String.fromCharCode(115,95,50,55,95,100,114,97,119,0),246], [String.fromCharCode(111,95,53,55,95,112,105,110,0),214]]);
          let guideQ = String.fromCharCode(115,97,109,105,95,103,95,56,49,0);
          let whatsappS = String.fromCharCode(106,95,49,57,95,99,111,110,100,101,110,115,97,98,108,101,0);
          let short_sC = false;
         sort1 += `${(arrowW == String.fromCharCode(50,0) ? parseInt(`${sentry9}`) : arrowW.length)}`;
         selectn += `${guideQ.length | 1}`;
         dangerT.set(selectn, ((short_sC ? 2 : 5) + 2));
         guideQ += `${whatsappS.length}`;
         whatsappS = "3";
         break;
      }
      let strR = 7961284.0 <= sentry9;
      do {
         sentry9 -= logoK;
         if (strR) {
            break;
         }
      } while (strR && (logoK < sentry9));
      while ((parseInt(`${sentry9}`) * arrowW.length) < 4 && 3.86 < (3.73 * sentry9)) {
         sentry9 *= 3;
         break;
      }
          let dplust: Array<any> = [11, 209, 164];
          let blacki = 5;
         logoK &= blacki + logoK;
         dplust = [dplust.length - dplust.length];
         blacki <<= Math.min(Math.abs(dplust.length ^ dplust.length), 3);
      for (let l = 0; l < 2; l++) {
          let arean = 1.0;
          let stationF = true;
          let dnewsG: Array<any> = [String.fromCharCode(108,105,98,115,112,101,101,120,95,98,95,54,55,0), String.fromCharCode(104,95,56,57,95,114,101,97,100,98,105,116,115,0)];
          let s_playerM: Map<any, any> = new Map([[String.fromCharCode(113,95,52,0),422], [String.fromCharCode(104,95,52,57,95,109,111,118,101,0),106], [String.fromCharCode(107,95,57,55,95,98,108,111,99,107,120,0),452]]);
          let filtera: Array<any> = [432, 649, 598];
         logoK |= 2;
         arean += 1;
         stationF = filtera.includes(dnewsG[0]);
         dnewsG = [dnewsG.length + 2];
         s_playerM.set(`${dnewsG.length}`, 3 << (Math.min(1, dnewsG.length)));
         filtera = [parseInt(`${arean}`) ^ 2];
      }
      stringss *= streamings.size;
   }
   while (Array.from(streamings.values()).includes(expiredn)) {
       let shirts = 3;
       let productF = String.fromCharCode(105,110,100,105,99,105,101,115,95,103,95,57,53,0);
       let xvodo = String.fromCharCode(99,111,110,110,101,99,116,120,95,110,95,57,57,0);
       let whiteK = 5.0;
       let sell9 = 3.0;
         xvodo += "2";
       let speck = false;
       let videojso = false;
         productF += `${shirts}`;
      while (5 == (2 * shirts) && videojso) {
         shirts -= 3 & parseInt(`${sell9}`);
         break;
      }
          let topicb = String.fromCharCode(106,105,103,103,108,101,95,52,95,55,50,0);
          let headere: Array<any> = [678, 611];
          let hcopy_uK = String.fromCharCode(101,102,102,101,99,116,95,54,95,53,54,0);
         shirts >>= Math.min(Math.abs(2 ^ shirts), 4);
         topicb += `${(String.fromCharCode(56,0) == topicb ? topicb.length : headere.length)}`;
         headere.push(2 ^ topicb.length);
         hcopy_uK = `${headere.length / (Math.max(hcopy_uK.length, 3))}`;
          let gmailv: Array<any> = [2, 875, 177];
         shirts ^= xvodo.length >> (Math.min(Math.abs(1), 1));
         gmailv.push(gmailv.length);
      while (!speck && productF.length >= 3) {
          let transfero = String.fromCharCode(110,95,51,53,95,121,117,118,112,99,0);
          let crownH: Array<any> = [109, 963, 954];
          let appsg = 2.0;
         speck = (crownH.length | transfero.length) <= 30;
         transfero += `${parseInt(`${appsg}`)}`;
         crownH = [parseInt(`${appsg}`)];
         break;
      }
      for (let f = 0; f < 1; f++) {
         speck = 28.12 <= whiteK || speck;
      }
          let drag6 = String.fromCharCode(117,110,109,117,116,101,100,95,117,95,52,48,0);
          let episode9: Map<any, any> = new Map([[String.fromCharCode(122,95,57,52,95,100,101,109,117,120,0),721], [String.fromCharCode(117,115,101,95,101,95,50,56,0),61], [String.fromCharCode(115,112,101,99,116,114,97,95,53,95,56,53,0),298]]);
          let windh: Map<any, any> = new Map([[String.fromCharCode(119,104,97,116,115,95,122,95,50,50,0),672], [String.fromCharCode(111,95,52,95,101,116,104,101,114,0),845]]);
         shirts |= 1;
         drag6 = `${drag6.length << (Math.min(Math.abs(1), 5))}`;
         episode9.set(drag6, drag6.length);
         windh.set(`${episode9.size}`, windh.size & 1);
      if (1 == shirts) {
         sell9 *= 3;
      }
       let thumbnailC = 4.0;
       let shooto = 5.0;
      while (4 < (3 - shirts)) {
         speck = videojso || speck;
         break;
      }
          let privilegeJ = 5.0;
          let pointZ = 0.0;
          let const_fkB = 4.0;
         speck = videojso || 24.63 >= privilegeJ;
         privilegeJ += parseInt(`${pointZ}`);
         const_fkB += parseFloat(`${2 | parseInt(`${const_fkB}`)}`);
         speck = videojso;
       let mathi = String.fromCharCode(105,95,53,53,95,116,101,115,116,110,101,116,115,0);
       let hoverR = String.fromCharCode(98,95,54,55,95,111,119,110,115,0);
      expiredn <<= Math.min(Math.abs(parseInt(`${stringss}`)), 3);
      break;
   }
   if (friendss) {
       let confirmationL = String.fromCharCode(111,95,49,53,95,99,111,114,100,0);
       let background5 = 1;
       let helperJ = String.fromCharCode(113,95,52,95,102,105,108,101,115,0);
       let ajaxA = String.fromCharCode(99,104,111,109,112,95,113,95,54,55,0);
         helperJ = "2";
      if (confirmationL == String.fromCharCode(79,0) || ajaxA == String.fromCharCode(112,0)) {
         ajaxA += `${helperJ.length}`;
      }
      if (helperJ.length <= confirmationL.length) {
          let tickW = String.fromCharCode(111,95,54,53,95,97,100,106,117,115,116,109,101,110,116,115,0);
          let projectz = false;
          let largef: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,114,95,99,95,55,52,0),String.fromCharCode(103,114,101,101,116,105,110,103,95,115,95,54,52,0)], [String.fromCharCode(114,95,53,57,95,106,118,101,114,115,105,111,110,0),String.fromCharCode(105,110,105,116,118,95,57,95,49,51,0)]]);
          let cleare = 3.0;
          let animationC = String.fromCharCode(101,95,51,51,95,112,114,111,112,111,115,97,108,115,0);
         helperJ = `${animationC.length | 2}`;
         tickW += "1";
         projectz = largef.get(`${cleare}`) == null;
         largef.set(tickW, parseInt(`${cleare}`) * 1);
         animationC += `${2 / (Math.max(10, largef.size))}`;
      }
      for (let z = 0; z < 1; z++) {
          let x_title3: Array<any> = [String.fromCharCode(102,111,114,107,95,108,95,52,55,0), String.fromCharCode(110,97,110,111,115,95,116,95,54,53,0), String.fromCharCode(99,109,97,99,95,106,95,52,51,0)];
          let type_sz = String.fromCharCode(98,95,57,51,95,116,114,117,110,107,0);
          let refreshh = 2.0;
          let related9 = 1.0;
         background5 *= 2 | type_sz.length;
         x_title3 = [x_title3.length - 3];
         type_sz = `${parseInt(`${related9}`) ^ 3}`;
         refreshh += 2 ^ x_title3.length;
         related9 -= 2;
      }
         confirmationL = `${(String.fromCharCode(113,0) == confirmationL ? background5 : confirmationL.length)}`;
      while (ajaxA.endsWith(`${helperJ.length}`)) {
         helperJ = `${helperJ.length / (Math.max(confirmationL.length, 8))}`;
         break;
      }
         ajaxA = `${confirmationL.length - helperJ.length}`;
      let cornerR = 6661903 <= background5;
      do {
         background5 |= 2 / (Math.max(10, confirmationL.length));
         if (cornerR) {
            break;
         }
      } while ((2 == (ajaxA.length ^ background5) || 5 == (background5 ^ 2)) && cornerR);
          let style4 = String.fromCharCode(105,95,53,57,95,99,111,110,102,105,103,117,114,97,116,105,111,110,115,0);
          let bottomW = String.fromCharCode(107,110,111,119,110,95,106,95,54,50,0);
         background5 <<= Math.min(1, Math.abs((ajaxA == String.fromCharCode(103,0) ? bottomW.length : ajaxA.length)));
         style4 += `${style4.length & style4.length}`;
         bottomW += "1";
      for (let g = 0; g < 2; g++) {
         ajaxA += `${confirmationL.length}`;
      }
          let default_8c = String.fromCharCode(122,95,50,57,95,115,117,98,0);
          let coreB = String.fromCharCode(97,99,97,108,99,95,113,95,55,0);
         background5 *= confirmationL.length * 3;
         default_8c = `${coreB.length << (Math.min(Math.abs(1), 1))}`;
         coreB += `${default_8c.length}`;
          let screenh = String.fromCharCode(103,95,56,95,105,115,116,97,112,0);
         helperJ = "1";
         screenh = `${screenh.length & 3}`;
      friendss = String.fromCharCode(117,0) == confirmationL;
   }
   while (3.50 < (humidity2.length - stringss) || (humidity2.length - parseInt(`${stringss}`)) < 1) {
      humidity2 = [(untickC == String.fromCharCode(73,0) ? untickC.length : parseInt(`${stringss}`))];
      break;
   }
   for (let u = 0; u < 2; u++) {
      expiredn &= dragM.length | 3;
   }
   for (let h = 0; h < 3; h++) {
      expiredn /= Math.max(5, 3);
   }
   let penaltys = humidity2.length >= 6510478;
   do {
       let unreadZ = String.fromCharCode(116,114,101,101,99,111,100,101,114,95,102,95,57,56,0);
       let volumed: Map<any, any> = new Map([[String.fromCharCode(105,95,51,54,95,105,112,113,102,0),false ], [String.fromCharCode(103,101,116,104,111,115,116,98,121,97,100,100,114,95,48,95,53,48,0),true ], [String.fromCharCode(109,105,120,101,114,95,101,95,54,53,0),false ]]);
       let sendG = String.fromCharCode(120,95,52,51,95,116,105,109,101,115,116,97,109,112,0);
       let tumbnailN = true;
       let terms4: Map<any, any> = new Map([[String.fromCharCode(119,95,57,50,95,115,117,98,112,105,120,101,108,0),String.fromCharCode(103,116,101,115,116,95,116,95,51,49,0)], [String.fromCharCode(110,95,50,57,95,114,101,112,97,114,101,100,0),String.fromCharCode(97,103,114,101,101,109,101,110,116,95,103,95,57,0)], [String.fromCharCode(117,112,99,97,108,108,95,110,95,53,51,0),String.fromCharCode(107,95,50,49,95,115,117,103,103,101,115,116,101,100,0)]]);
      for (let h = 0; h < 3; h++) {
          let moreB = String.fromCharCode(98,95,53,50,95,112,114,101,112,97,114,101,0);
          let suggestion4 = false;
          let splash3 = 5.0;
          let sourceC: Array<any> = [236, 325, 511];
          let overlayU = 2.0;
         tumbnailN = moreB.length >= 49;
         moreB = "3";
         suggestion4 = 64.43 > splash3 && !suggestion4;
         splash3 *= ((suggestion4 ? 1 : 3) ^ 3);
         sourceC.push(parseInt(`${splash3}`) >> (Math.min(4, Math.abs(1))));
         overlayU -= parseFloat(`${2}`);
      }
       let buttonz = true;
         terms4 = new Map([[sendG, 3 >> (Math.min(2, unreadZ.length))]]);
       let chartf = false;
       let selectionT = false;
      for (let a = 0; a < 1; a++) {
          let combinedO = String.fromCharCode(118,95,57,95,102,105,108,116,101,114,0);
         buttonz = !chartf;
         combinedO = `${combinedO.length & 2}`;
      }
      if (sendG.length > 4 && tumbnailN) {
         sendG = `${((chartf ? 5 : 3))}`;
      }
      let brightnessF = buttonz ? !buttonz : buttonz;
      do {
         buttonz = (100 == ((!tumbnailN ? volumed.size : 82) * volumed.size));
         if (brightnessF) {
            break;
         }
      } while (brightnessF && (!buttonz || 3 <= (1 ^ volumed.size)));
      let h_positionP = buttonz ? !buttonz : buttonz;
      do {
         buttonz = !selectionT;
         if (h_positionP) {
            break;
         }
      } while ((buttonz) && h_positionP);
      let selectg = buttonz ? !buttonz : buttonz;
      do {
         buttonz = terms4.size > 9;
         if (selectg) {
            break;
         }
      } while (selectg && (5 > (4 ^ volumed.size)));
      while (!chartf) {
         chartf = !buttonz;
         break;
      }
         chartf = selectionT || volumed.size < 47;
         terms4 = new Map([[`${terms4.size}`, terms4.size]]);
         chartf = selectionT && !chartf;
         tumbnailN = unreadZ.length == 23 || !chartf;
      for (let v = 0; v < 3; v++) {
          let backJ = String.fromCharCode(99,102,116,121,112,101,114,101,102,95,49,95,53,57,0);
          let appsi = String.fromCharCode(102,105,110,100,97,115,111,99,95,110,95,49,51,0);
          let text6 = String.fromCharCode(101,110,117,109,101,114,97,116,105,111,110,95,110,95,51,51,0);
         selectionT = 57 > terms4.size;
         backJ = `${backJ.length * 3}`;
         appsi = `${3 + appsi.length}`;
         text6 += `${text6.length + appsi.length}`;
      }
      humidity2.push(unreadZ.length ^ 3);
      if (penaltys) {
         break;
      }
   } while (((humidity2.length & 1) < 5 && 2.25 < (stringss / 1.48)) && penaltys);
       let sentryp = 4;
       let privilegeK: Array<any> = [926, 355];
      if (5 == (1 >> (Math.min(3, Math.abs(sentryp)))) && 1 == (privilegeK.length >> (Math.min(Math.abs(1), 4)))) {
         privilegeK = [privilegeK.length * 2];
      }
          let orangew: Array<any> = [782, 196];
          let football1 = 4.0;
          let launchX = String.fromCharCode(113,95,57,53,95,99,104,111,111,115,101,114,0);
         sentryp >>= Math.min(Math.abs(sentryp), 1);
         orangew = [orangew.length << (Math.min(Math.abs(2), 3))];
         football1 -= 3 - parseInt(`${football1}`);
         launchX = `${launchX.length >> (Math.min(Math.abs(3), 3))}`;
      while (privilegeK.includes(sentryp)) {
          let crownx = String.fromCharCode(109,95,49,52,95,111,117,116,108,105,101,114,0);
          let teamW = 1.0;
          let bufferV = 1.0;
          let rightc = String.fromCharCode(97,109,111,117,110,116,115,95,121,95,56,48,0);
         privilegeK.push(rightc.length);
         crownx += `${1 - parseInt(`${teamW}`)}`;
         teamW /= Math.max(parseInt(`${teamW}`) + 1, 5);
         bufferV -= parseFloat(`${parseInt(`${teamW}`)}`);
         rightc = "1";
         break;
      }
          let recommendationc = 2;
          let vignetteP: Map<any, any> = new Map([[String.fromCharCode(110,95,50,49,95,117,110,109,105,110,105,109,105,122,101,0),489], [String.fromCharCode(102,95,51,48,95,109,97,106,111,114,0),603]]);
         privilegeK = [2 - privilegeK.length];
         recommendationc *= recommendationc ^ 3;
         vignetteP = new Map([[`${vignetteP.size}`, vignetteP.size % 2]]);
         privilegeK = [privilegeK.length ^ sentryp];
      let upload4 = sentryp >= 6588589;
      do {
          let typesG = 2.0;
          let hoverZ = 4.0;
          let ucopy_88l = 2.0;
          let infob = String.fromCharCode(99,105,114,99,117,108,97,116,105,110,103,95,50,95,56,56,0);
         sentryp /= Math.max(1, 1);
         typesG *= parseInt(`${hoverZ}`) << (Math.min(3, Math.abs(1)));
         hoverZ *= parseInt(`${ucopy_88l}`);
         ucopy_88l += parseFloat(`${1}`);
         infob += `${parseInt(`${ucopy_88l}`)}`;
         if (upload4) {
            break;
         }
      } while (upload4 && (privilegeK.includes(sentryp)));
      dragM += `${parseInt(`${stringss}`) << (Math.min(Math.abs(1), 4))}`;
   let roundv = 5398006 >= streamings.size;
   do {
      streamings.set(`${expiredn}`, 1 + humidity2.length);
      if (roundv) {
         break;
      }
   } while ((5 < (humidity2.length ^ streamings.size)) && roundv);
       let downloaded9 = 2.0;
       let selectiona = String.fromCharCode(118,111,105,99,101,109,97,105,108,95,100,95,50,55,0);
       let heartP: Array<any> = [String.fromCharCode(109,101,97,110,95,117,95,55,52,0), String.fromCharCode(118,115,97,100,95,109,95,57,49,0)];
         selectiona = `${heartP.length | 2}`;
          let sideH = 2.0;
          let bridge5 = 4.0;
          let updatesM = 0.0;
         heartP.push(parseInt(`${bridge5}`) | parseInt(`${updatesM}`));
         sideH *= parseInt(`${sideH}`);
         bridge5 /= Math.max(parseInt(`${sideH}`) << (Math.min(Math.abs(parseInt(`${sideH}`)), 3)), 1);
         selectiona += `${parseInt(`${downloaded9}`)}`;
         selectiona += `${3 << (Math.min(Math.abs(parseInt(`${downloaded9}`)), 2))}`;
      if (1 <= selectiona.length) {
         selectiona = `${heartP.length * selectiona.length}`;
      }
         downloaded9 /= Math.max(3 * parseInt(`${downloaded9}`), 2);
         downloaded9 *= heartP.length + parseInt(`${downloaded9}`);
         heartP = [2];
         heartP = [heartP.length ^ selectiona.length];
      friendss = logoutj <= 62.65;
      untickC = "3";
   for (let b = 0; b < 3; b++) {
      dragM = `${streamings.size}`;
   }
   let skipv = friendss ? !friendss : friendss;
   do {
      friendss = untickC == String.fromCharCode(100,0);
      if (skipv) {
         break;
      }
   } while (skipv && (!friendss));
      streamings = new Map([[`${streamings.size}`, 2 << (Math.min(3, Math.abs(streamings.size)))]]);
   while ((2 ^ untickC.length) < 4 && 2 < (untickC.length ^ 2)) {
       let analytic2 = String.fromCharCode(110,97,110,111,112,98,95,109,95,53,53,0);
       let downloaderO = String.fromCharCode(116,95,49,51,95,105,110,115,116,97,110,116,0);
         analytic2 += `${analytic2.length}`;
      for (let k = 0; k < 1; k++) {
         analytic2 += `${(String.fromCharCode(77,0) == downloaderO ? analytic2.length : downloaderO.length)}`;
      }
      for (let d = 0; d < 2; d++) {
          let shirtk = String.fromCharCode(114,101,112,101,97,116,101,100,108,121,95,117,95,56,50,0);
         downloaderO = `${shirtk.length ^ 3}`;
      }
      for (let c = 0; c < 3; c++) {
         downloaderO += `${2 ^ analytic2.length}`;
      }
      let gpay8 = 6809692 <= analytic2.length;
      do {
         analytic2 += `${analytic2.length >> (Math.min(downloaderO.length, 4))}`;
         if (gpay8) {
            break;
         }
      } while (gpay8 && (2 >= analytic2.length));
      for (let i = 0; i < 2; i++) {
         downloaderO = `${analytic2.length}`;
      }
      expiredn %= Math.max(5, dragM.length / 2);
      break;
   }
      untickC += `${((friendss ? 2 : 5) * humidity2.length)}`;
      stringss += 1 - humidity2.length;
      friendss = untickC.length <= 71;
      friendss = dragM == String.fromCharCode(114,0);
      streamings = new Map([[`${humidity2.length}`, parseInt(`${stringss}`) << (Math.min(5, Math.abs(1)))]]);
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
       let filedX = 5;
    let progressb = false;
    let toponU = true;
    let comment3 = 0.0;
    let headert = true;
    let disconnectedZ: Array<any> = [176, 39, 44];
    let eighteenu = 5.0;
    let settingsI: Array<any> = [884, 626, 783];
    let helperU = 1.0;
    let traminix: Map<any, any> = new Map([[String.fromCharCode(109,101,115,97,103,101,95,112,95,49,57,0),9], [String.fromCharCode(107,95,49,55,95,108,108,118,105,100,100,115,112,0),760]]);
    let mail3 = 3.0;
    let editz = String.fromCharCode(121,95,53,53,95,97,117,116,111,0);
       let trashH = 4;
       let anytimeq = String.fromCharCode(99,108,97,115,115,105,102,115,95,54,95,51,56,0);
       let singaporeJ = String.fromCharCode(111,95,52,51,95,105,100,101,109,112,111,116,101,110,99,121,0);
       let znewinterstitialD = 3.0;
         anytimeq += `${(singaporeJ == String.fromCharCode(105,0) ? parseInt(`${znewinterstitialD}`) : singaporeJ.length)}`;
       let sortS = 5.0;
      for (let o = 0; o < 2; o++) {
          let share1 = true;
          let currentj = 5;
          let type_996 = 5;
         singaporeJ = `${parseInt(`${sortS}`) + 1}`;
         share1 = currentj >= 69;
         currentj <<= Math.min(1, Math.abs(currentj));
         type_996 *= 3 & currentj;
      }
      while (2.45 == sortS) {
         sortS += parseFloat(`${2}`);
         break;
      }
         singaporeJ += `${singaporeJ.length}`;
         singaporeJ += `${parseInt(`${znewinterstitialD}`) * singaporeJ.length}`;
         znewinterstitialD += parseFloat(`${parseInt(`${sortS}`) << (Math.min(Math.abs(parseInt(`${znewinterstitialD}`)), 3))}`);
      if ((3.19 + sortS) >= 4.1 && 5 >= (4 + parseInt(`${sortS}`))) {
          let whitez = String.fromCharCode(118,95,54,52,95,115,117,105,116,101,115,0);
         sortS *= (parseFloat(`${String.fromCharCode(114,0) == anytimeq ? anytimeq.length : trashH}`));
         whitez = `${whitez.length & 2}`;
      }
      toponU = !singaporeJ.endsWith(`${comment3}`);
       let videocommonO = 3.0;
       let singaporea = 2.0;
       let leftG: Map<any, any> = new Map([[String.fromCharCode(117,95,54,55,95,100,119,111,114,100,0),600], [String.fromCharCode(121,117,118,116,101,115,116,95,98,95,57,51,0),803], [String.fromCharCode(112,105,110,95,97,95,49,53,0),338]]);
          let darkZ = String.fromCharCode(118,95,55,48,95,109,115,109,112,101,103,118,0);
          let storee = true;
         videocommonO *= parseFloat(`${parseInt(`${singaporea}`)}`);
         darkZ += "2";
         storee = !darkZ.includes(`${storee}`);
      if (4.38 > (parseFloat(`${leftG.size}`) + singaporea) && 4.38 > (parseFloat(`${leftG.size}`) + singaporea)) {
         singaporea -= parseFloat(`${leftG.size * 2}`);
      }
      let updatest = singaporea <= 7201086.0;
      do {
         singaporea += parseFloat(`${leftG.size << (Math.min(5, Math.abs(parseInt(`${singaporea}`))))}`);
         if (updatest) {
            break;
         }
      } while (updatest && ((1.62 - singaporea) == 3.0));
         singaporea -= parseFloat(`${leftG.size ^ parseInt(`${singaporea}`)}`);
       let upgradey: Array<any> = [753, 26];
       let modal4: Array<any> = [284, 341, 607];
       let sportsW: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,95,56,95,49,48,0),891], [String.fromCharCode(115,101,110,115,105,116,105,118,105,116,121,95,118,95,56,50,0),722]]);
      let annera = 7104011 <= modal4.length;
      do {
         modal4.push(2);
         if (annera) {
            break;
         }
      } while ((4 >= modal4.length) && annera);
          let reactnativejsY = String.fromCharCode(99,95,54,56,95,98,101,110,99,0);
          let rewardI = String.fromCharCode(103,95,52,56,95,112,97,114,116,105,99,105,112,97,116,105,111,110,0);
         upgradey = [modal4.length & reactnativejsY.length];
         reactnativejsY += `${rewardI.length | rewardI.length}`;
      while (!Array.from(leftG.values()).includes(videocommonO)) {
         leftG = new Map([[`${modal4.length}`, 2 << (Math.min(Math.abs(parseInt(`${singaporea}`)), 1))]]);
         break;
      }
      toponU = 66.59 < eighteenu && 6 < filedX;
   while ((5.45 - mail3) >= 5.70 && 3.57 >= (mail3 - 5.45)) {
      mail3 -= parseFloat(`${1 % (Math.max(parseInt(`${helperU}`), 5))}`);
      break;
   }
       let u_image3 = true;
      for (let a = 0; a < 2; a++) {
          let fastforwardP = String.fromCharCode(112,95,52,55,95,100,101,99,111,100,101,0);
          let detailE = 0.0;
          let taiwane = String.fromCharCode(112,114,101,116,101,110,100,95,109,95,51,53,0);
          let traminiC = 2.0;
         u_image3 = fastforwardP.length == 94;
         fastforwardP = `${parseInt(`${traminiC}`)}`;
         detailE /= Math.max(parseFloat(`${3 * taiwane.length}`), 5);
         taiwane += `${parseInt(`${detailE}`) << (Math.min(1, Math.abs(2)))}`;
         traminiC += parseInt(`${detailE}`);
      }
          let bellc = String.fromCharCode(116,95,50,57,95,115,99,114,97,116,99,104,0);
          let hearto: Map<any, any> = new Map([[String.fromCharCode(103,95,52,50,95,99,111,101,102,102,115,0),false ], [String.fromCharCode(104,101,120,98,115,95,56,95,57,54,0),true ], [String.fromCharCode(102,105,110,97,108,108,121,95,99,95,51,50,0),true ]]);
          let nterstitialH = 4.0;
         u_image3 = String.fromCharCode(118,0) == bellc;
         bellc += `${hearto.size}`;
         hearto.set(`${nterstitialH}`, hearto.size + parseInt(`${nterstitialH}`));
         u_image3 = !u_image3;
      disconnectedZ = [filedX & traminix.size];
       let championu = 0.0;
       let awayw = 4.0;
      let n_countA = awayw <= 5905799.0;
      do {
         awayw *= parseInt(`${championu}`) & parseInt(`${awayw}`);
         if (n_countA) {
            break;
         }
      } while (n_countA && (1.21 > (championu * 4)));
       let macauJ = 0;
      let stringL = 8226756.0 <= championu;
      do {
          let colorsO = String.fromCharCode(98,97,115,101,108,105,110,101,95,49,95,51,54,0);
         championu /= Math.max(4, parseFloat(`${parseInt(`${championu}`) % (Math.max(colorsO.length, 5))}`));
         if (stringL) {
            break;
         }
      } while (stringL && (championu >= awayw));
          let androidU = String.fromCharCode(98,95,53,49,95,111,98,115,101,114,118,105,110,103,0);
          let suggestion8 = String.fromCharCode(99,108,97,115,115,101,115,95,121,95,53,56,0);
         macauJ >>= Math.min(Math.abs(1), 3);
         androidU = "2";
         suggestion8 += `${suggestion8.length % 3}`;
      let disconnectedm = awayw >= 7937577.0;
      do {
         awayw += parseInt(`${championu}`);
         if (disconnectedm) {
            break;
         }
      } while ((5.93 < (awayw * 1.85)) && disconnectedm);
      while (1.87 > championu) {
         championu *= parseFloat(`${2}`);
         break;
      }
      progressb = awayw > helperU;
   if (!headert && (eighteenu + 2.59) < 4.97) {
      eighteenu /= Math.max((parseFloat(`${(toponU ? 3 : 5) % (Math.max(5, traminix.size))}`)), 5);
   }
       let commentl = String.fromCharCode(101,108,108,105,112,116,105,99,97,108,95,102,95,53,0);
       let malaysiaD = false;
       let ewardedb = 1.0;
       let sentryJ = 3.0;
      let megaphoneW = ewardedb <= 8853781.0;
      do {
         ewardedb *= (parseFloat(`${commentl == String.fromCharCode(72,0) ? (malaysiaD ? 4 : 2) : commentl.length}`));
         if (megaphoneW) {
            break;
         }
      } while ((5.9 < (5.93 + ewardedb)) && megaphoneW);
      while (commentl.includes(`${ewardedb}`)) {
          let gemfileT = true;
          let whitei: Map<any, any> = new Map([[String.fromCharCode(120,95,51,48,95,98,110,99,98,98,0),499], [String.fromCharCode(100,95,54,95,117,114,105,0),621]]);
         commentl = `${commentl.length}`;
         gemfileT = !gemfileT;
         whitei.set(`${gemfileT}`, (whitei.size * (gemfileT ? 3 : 4)));
         break;
      }
          let round0 = 2.0;
          let t_playerD = String.fromCharCode(100,114,97,103,103,101,100,95,52,95,53,51,0);
         malaysiaD = (parseInt(`${round0}`) / (Math.max(commentl.length, 6))) > 49;
         round0 -= t_playerD.length | t_playerD.length;
       let mimor = 3;
          let expand7 = false;
          let backW = String.fromCharCode(111,110,99,101,95,113,95,53,57,0);
          let large2 = 1.0;
         mimor %= Math.max(1, parseInt(`${large2}`) & 3);
         expand7 = expand7 && backW.length == 27;
         backW += `${backW.length}`;
         large2 /= Math.max(parseFloat(`${2 ^ backW.length}`), 1);
      headert = settingsI.length < 61;
   let whiteF = 6428949.0 <= eighteenu;
   do {
      eighteenu *= parseFloat(`${2}`);
      if (whiteF) {
         break;
      }
   } while (whiteF && (1.72 < (2.88 / (Math.max(1, eighteenu))) && eighteenu < 2.88));
      headert = (filedX - disconnectedZ.length) == 30;
      mail3 += parseFloat(`${parseInt(`${mail3}`)}`);
      comment3 *= (parseInt(`${comment3}`) & (toponU ? 2 : 4));
   for (let m = 0; m < 2; m++) {
      filedX *= parseInt(`${helperU}`) % 3;
   }
      filedX &= parseInt(`${eighteenu}`) * 1;
   for (let v = 0; v < 1; v++) {
      toponU = 7.86 < comment3 || helperU < 7.86;
   }
   for (let x = 0; x < 1; x++) {
       let securityt = String.fromCharCode(100,105,99,116,105,111,110,97,114,105,101,115,95,107,95,53,49,0);
       let downloadh = 2;
         securityt += "3";
      for (let g = 0; g < 3; g++) {
          let verticalL: Map<any, any> = new Map([[String.fromCharCode(97,99,108,114,95,98,95,54,57,0),String.fromCharCode(112,101,114,102,111,114,109,95,106,95,50,50,0)], [String.fromCharCode(110,95,53,53,95,103,97,117,103,101,0),String.fromCharCode(112,95,49,50,95,118,105,115,117,97,108,0)], [String.fromCharCode(109,97,99,95,102,95,50,49,0),String.fromCharCode(97,110,105,109,97,116,101,95,52,95,57,50,0)]]);
          let dialogj = String.fromCharCode(107,95,57,57,95,117,110,108,111,97,100,0);
          let custom1 = 0.0;
          let diceF = true;
          let confirmationz = 2.0;
         securityt = `${(String.fromCharCode(74,0) == dialogj ? parseInt(`${custom1}`) : dialogj.length)}`;
         verticalL = new Map([[`${diceF}`, (parseInt(`${confirmationz}`) | (diceF ? 4 : 1))]]);
         custom1 += (parseFloat(`${verticalL.size % (Math.max(4, (diceF ? 1 : 5)))}`));
         confirmationz -= parseFloat(`${2}`);
      }
      let anythinkK = downloadh <= 9263339;
      do {
         downloadh -= 2 % (Math.max(8, securityt.length));
         if (anythinkK) {
            break;
         }
      } while ((downloadh > 1) && anythinkK);
      let gradlewe = 7156943 <= securityt.length;
      do {
         securityt = `${(String.fromCharCode(85,0) == securityt ? securityt.length : downloadh)}`;
         if (gradlewe) {
            break;
         }
      } while ((5 > (1 & securityt.length) || (securityt.length & downloadh) > 1) && gradlewe);
         downloadh %= Math.max(5, downloadh >> (Math.min(Math.abs(2), 2)));
         downloadh /= Math.max(3 | securityt.length, 2);
      traminix = new Map([[`${traminix.size}`, 1]]);
   }
      toponU = comment3 >= helperU;
      filedX |= parseInt(`${helperU}`) ^ traminix.size;
   while (progressb) {
       let entry1 = String.fromCharCode(119,95,52,49,95,109,97,115,107,101,100,109,101,114,103,101,0);
       let indicator7 = String.fromCharCode(118,95,55,56,95,97,114,99,104,105,118,101,0);
       let roundb = String.fromCharCode(110,95,55,53,95,97,112,112,101,110,100,0);
       let basketballs = String.fromCharCode(110,95,56,55,95,112,114,101,100,105,99,116,111,114,0);
      for (let j = 0; j < 1; j++) {
         indicator7 += `${entry1.length}`;
      }
      for (let x = 0; x < 1; x++) {
         indicator7 = `${indicator7.length}`;
      }
      if (roundb.length > 2) {
          let inactive0 = String.fromCharCode(116,111,103,103,108,101,95,49,95,52,51,0);
         roundb += `${entry1.length}`;
         inactive0 = `${inactive0.length / (Math.max(1, inactive0.length))}`;
      }
      for (let y = 0; y < 3; y++) {
         basketballs += `${(String.fromCharCode(121,0) == basketballs ? roundb.length : basketballs.length)}`;
      }
          let applicationB = String.fromCharCode(120,95,50,95,97,118,101,114,97,103,101,115,0);
          let overlayK = 0.0;
          let sigmobd = String.fromCharCode(97,102,105,108,116,101,114,95,56,95,52,54,0);
         roundb += `${entry1.length}`;
         applicationB = `${parseInt(`${overlayK}`)}`;
         overlayK /= Math.max(4, applicationB.length * 2);
         sigmobd = `${3 >> (Math.min(3, Math.abs(parseInt(`${overlayK}`))))}`;
      let emptyr = basketballs == String.fromCharCode(113,114,102,98,53,57,97,55,55,95,0);
      do {
         basketballs += `${entry1.length & roundb.length}`;
         if (emptyr) {
            break;
         }
      } while (emptyr && (roundb != String.fromCharCode(121,0)));
      if (entry1.length < 5) {
         roundb = `${(indicator7 == String.fromCharCode(68,0) ? basketballs.length : indicator7.length)}`;
      }
      let friends4 = indicator7.length >= 9377198;
      do {
         indicator7 = `${indicator7.length}`;
         if (friends4) {
            break;
         }
      } while (friends4 && (3 > indicator7.length));
      for (let e = 0; e < 1; e++) {
          let signinup3 = 2;
         roundb += `${signinup3}`;
      }
      for (let n = 0; n < 3; n++) {
          let reactnativejs3 = 2.0;
          let championP = 1;
          let anythinkK1 = 1.0;
          let thumbnailp = true;
          let sportD = false;
         basketballs = `${((thumbnailp ? 1 : 3))}`;
         reactnativejs3 -= (parseFloat(`${parseInt(`${reactnativejs3}`) - (sportD ? 3 : 5)}`));
         championP %= Math.max(championP, 4);
         anythinkK1 *= parseFloat(`${parseInt(`${anythinkK1}`)}`);
         thumbnailp = anythinkK1 >= 15.94 || !sportD;
      }
       let huaweiR = String.fromCharCode(114,101,112,117,98,108,105,115,104,95,104,95,50,53,0);
       let disconnectedu = String.fromCharCode(98,95,49,50,95,99,111,100,101,99,0);
      while (basketballs.length == roundb.length) {
         roundb += `${2 | roundb.length}`;
         break;
      }
      disconnectedZ.push(2 ^ parseInt(`${comment3}`));
      break;
   }
      helperU += parseInt(`${eighteenu}`);
   while (2.78 < (1.81 * helperU) && 3.47 < (helperU / 1.81)) {
       let circle9 = String.fromCharCode(120,95,55,95,105,110,116,115,0);
       let componentL = true;
       let minimizeC = false;
       let collectionM = String.fromCharCode(99,108,105,99,107,115,95,101,95,50,55,0);
          let sourceu = String.fromCharCode(115,95,57,53,95,99,104,111,115,101,0);
          let historyr = 0.0;
         componentL = !circle9.includes(`${historyr}`);
         sourceu = `${(sourceu == String.fromCharCode(89,0) ? sourceu.length : sourceu.length)}`;
         historyr -= parseFloat(`${3}`);
       let service5 = String.fromCharCode(105,95,50,52,95,118,112,99,99,0);
       let halfM = String.fromCharCode(109,97,120,107,101,121,115,105,122,101,95,48,95,56,56,0);
         collectionM += `${halfM.length << (Math.min(Math.abs(1), 2))}`;
          let clearg = String.fromCharCode(111,95,50,51,95,102,105,110,97,108,105,122,105,110,103,0);
         collectionM += "1";
         clearg = `${clearg.length / (Math.max(1, 5))}`;
      let colorsw = minimizeC ? !minimizeC : minimizeC;
      do {
          let sharem = true;
          let episode3 = 3.0;
         minimizeC = (circle9.length >> (Math.min(service5.length, 1))) >= 34;
         sharem = episode3 >= 2.89;
         episode3 += parseInt(`${episode3}`) - 3;
         if (colorsw) {
            break;
         }
      } while (colorsw && (halfM.includes(`${minimizeC}`)));
         collectionM = `${((componentL ? 3 : 3) * 1)}`;
      while (halfM.endsWith(`${componentL}`)) {
          let kickX = String.fromCharCode(100,101,99,111,114,97,116,105,111,110,115,95,110,95,50,55,0);
          let albumU = true;
          let becomeU: Map<any, any> = new Map([[String.fromCharCode(119,95,51,53,95,103,97,109,97,0),687], [String.fromCharCode(115,116,101,112,112,101,114,95,102,95,55,53,0),652], [String.fromCharCode(102,105,103,117,114,101,95,101,95,54,0),7]]);
          let episodej = String.fromCharCode(97,115,115,101,115,115,109,101,110,116,95,97,95,52,56,0);
          let roomd = 3;
         halfM += `${halfM.length}`;
         kickX = `${(episodej == String.fromCharCode(82,0) ? becomeU.size : episodej.length)}`;
         albumU = !albumU;
         becomeU = new Map([[`${becomeU.size}`, (becomeU.size - (albumU ? 2 : 1))]]);
         roomd += 1 & becomeU.size;
         break;
      }
         collectionM += `${2 * collectionM.length}`;
      while (!componentL || 5 <= service5.length) {
         componentL = (circle9.length & service5.length) >= 88;
         break;
      }
      if (collectionM != String.fromCharCode(121,0) || 1 < service5.length) {
         collectionM += `${circle9.length / (Math.max(2, 3))}`;
      }
          let tempN = 5.0;
          let unreadh = 1.0;
         componentL = (((!minimizeC ? circle9.length : 99) ^ circle9.length) >= 99);
         tempN /= Math.max(parseFloat(`${parseInt(`${unreadh}`) + 1}`), 1);
         unreadh += parseFloat(`${parseInt(`${tempN}`)}`);
       let headerR = String.fromCharCode(97,95,51,50,95,102,111,114,119,97,114,100,101,114,0);
       let vietnamj = String.fromCharCode(120,95,52,51,95,100,97,116,97,104,97,115,104,0);
      helperU *= (3 << (Math.min(4, Math.abs((toponU ? 3 : 4)))));
      break;
   }
      mail3 /= Math.max(1, parseFloat(`${parseInt(`${mail3}`)}`));
   while (comment3 <= 1.53) {
       let ying6 = String.fromCharCode(102,114,101,101,100,95,99,95,57,57,0);
       let sliderg = 0.0;
          let indexW = true;
          let taiwanf = true;
          let securityx = 5.0;
         ying6 = `${(ying6 == String.fromCharCode(107,0) ? (indexW ? 2 : 3) : ying6.length)}`;
         indexW = securityx > 79.38 || taiwanf;
         taiwanf = !taiwanf;
         securityx /= Math.max((parseInt(`${securityx}`) * (taiwanf ? 2 : 3)), 4);
         ying6 = `${ying6.length * 2}`;
          let loginn = true;
          let data1 = String.fromCharCode(121,95,52,50,95,99,111,111,114,100,0);
         ying6 += `${parseInt(`${sliderg}`)}`;
         loginn = !loginn;
         data1 += `${data1.length * 1}`;
      while ((parseFloat(`${ying6.length}`) - sliderg) < 1.40 && (ying6.length - parseInt(`${sliderg}`)) < 2) {
         ying6 += `${ying6.length}`;
         break;
      }
      while (3.69 > sliderg) {
         ying6 += `${2 << (Math.min(5, ying6.length))}`;
         break;
      }
       let termsI: Array<any> = [673, 272];
      filedX %= Math.max(4, (String.fromCharCode(90,0) == ying6 ? ying6.length : (progressb ? 1 : 1)));
      break;
   }
   let controls9 = eighteenu >= 5660744.0;
   do {
       let telegramR: Map<any, any> = new Map([[String.fromCharCode(109,95,57,56,95,117,110,102,105,108,116,101,114,101,100,0),String.fromCharCode(111,109,109,111,110,95,50,95,53,57,0)], [String.fromCharCode(108,105,98,95,54,95,50,51,0),String.fromCharCode(119,95,50,48,95,98,117,102,102,101,114,115,0)]]);
       let orange8 = 5.0;
         telegramR.set(`${orange8}`, 2);
       let thailandN = String.fromCharCode(115,121,110,116,104,101,115,105,122,101,100,95,116,95,52,48,0);
       let knewinterstitialE = String.fromCharCode(109,95,51,53,95,112,111,108,121,0);
         thailandN += `${2 | thailandN.length}`;
      for (let m = 0; m < 3; m++) {
         thailandN += `${telegramR.size}`;
      }
      for (let u = 0; u < 2; u++) {
         orange8 /= Math.max(parseFloat(`${2}`), 1);
      }
          let clubw: Map<any, any> = new Map([[String.fromCharCode(97,118,112,107,116,95,116,95,56,55,0),827], [String.fromCharCode(118,112,97,116,104,95,53,95,52,0),59], [String.fromCharCode(108,97,118,102,117,116,105,108,115,95,118,95,57,51,0),799]]);
          let with_lly = String.fromCharCode(120,95,54,50,0);
         telegramR = new Map([[knewinterstitialE, knewinterstitialE.length]]);
         clubw = new Map([[`${clubw.size}`, clubw.size]]);
         with_lly += `${with_lly.length - 3}`;
      eighteenu /= Math.max(parseFloat(`${1}`), 3);
      if (controls9) {
         break;
      }
   } while (((mail3 / (Math.max(eighteenu, 4))) < 5.85) && controls9);
   if (3.59 == (1.88 * comment3) && (1.88 * mail3) == 4.79) {
       let anytime1: Map<any, any> = new Map([[String.fromCharCode(108,95,51,50,95,108,105,98,114,97,114,105,101,115,0),89], [String.fromCharCode(121,95,50,50,95,103,114,111,101,115,116,108,0),923]]);
       let predictionj: Array<any> = [186, 864, 441];
      if (Array.from(anytime1.values()).includes(predictionj.length)) {
         predictionj.push(predictionj.length);
      }
      let sendN = 8981293 <= predictionj.length;
      do {
         predictionj.push(anytime1.size >> (Math.min(predictionj.length, 4)));
         if (sendN) {
            break;
         }
      } while ((4 == (predictionj.length + 5) && (predictionj.length + anytime1.size) == 5) && sendN);
      let disconnectedS = 7763382 >= anytime1.size;
      do {
          let downloadZ: Array<any> = [String.fromCharCode(111,95,54,53,95,105,112,104,111,110,101,0), String.fromCharCode(112,111,107,101,114,95,100,95,51,49,0)];
          let volumeY = String.fromCharCode(99,97,98,97,99,95,56,95,55,0);
          let securityM = 1;
          let nalyticsz = String.fromCharCode(116,114,105,97,110,103,108,101,115,95,100,95,57,49,0);
         anytime1.set(nalyticsz, 2);
         downloadZ = [volumeY.length];
         volumeY += `${securityM << (Math.min(volumeY.length, 2))}`;
         securityM |= downloadZ.length % 1;
         nalyticsz = `${2 ^ downloadZ.length}`;
         if (disconnectedS) {
            break;
         }
      } while (disconnectedS && (anytime1.get(`${predictionj.length}`) == null));
      while (anytime1.get(`${predictionj.length}`) == null) {
          let albumW: Map<any, any> = new Map([[String.fromCharCode(102,95,52,54,95,98,117,109,112,0),380], [String.fromCharCode(110,101,119,101,115,116,95,56,95,51,57,0),433]]);
         predictionj = [predictionj.length];
         albumW.set(`${albumW.size}`, albumW.size >> (Math.min(2, Math.abs(albumW.size))));
         break;
      }
          let userz = String.fromCharCode(101,95,54,51,95,102,105,110,105,115,104,101,100,0);
         anytime1.set(userz, userz.length);
          let modelsA = String.fromCharCode(104,117,102,102,121,117,118,101,110,99,100,115,112,95,99,95,53,56,0);
          let viewerB = 5.0;
          let eighteenz: Map<any, any> = new Map([[String.fromCharCode(106,95,57,53,95,119,101,105,103,104,116,101,100,0),624], [String.fromCharCode(116,95,57,52,95,116,114,97,110,115,99,116,105,111,110,0),242], [String.fromCharCode(99,95,50,55,95,115,101,108,101,99,116,0),302]]);
         predictionj.push(modelsA.length);
         modelsA += `${3 ^ parseInt(`${viewerB}`)}`;
         viewerB /= Math.max(2, eighteenz.size);
         eighteenz.set(`${viewerB}`, 3);
      comment3 += disconnectedZ.length + 1;
   }
      mail3 -= parseFloat(`${parseInt(`${eighteenu}`) & 3}`);
      traminix.set(`${progressb}`, (2 / (Math.max((progressb ? 1 : 3), 3))));
       let nativeexl = String.fromCharCode(122,95,49,55,95,111,118,101,114,115,99,114,111,108,108,0);
       let corner0 = 0.0;
       let switch_d2h = 0.0;
      let nextH = 6944455.0 >= corner0;
      do {
         corner0 *= parseFloat(`${nativeexl.length}`);
         if (nextH) {
            break;
         }
      } while ((nativeexl.endsWith(`${corner0}`)) && nextH);
       let interstitialP = String.fromCharCode(110,95,55,54,95,100,101,98,117,103,0);
      settingsI = [1];
      traminix.set(`${filedX}`, filedX);
   while (comment3 == settingsI.length) {
      comment3 *= 1 ^ parseInt(`${mail3}`);
      break;
   }
      headert = 69 >= settingsI.length;
      headert = helperU == settingsI.length;
      mail3 -= parseFloat(`${2}`);
      toponU = (toponU ? !progressb : !toponU);
      progressb = 82.41 < helperU;
   for (let h = 0; h < 3; h++) {
      eighteenu += parseFloat(`${parseInt(`${comment3}`) ^ 2}`);
   }
   while (2.95 >= (filedX / (Math.max(1, mail3)))) {
       let componentI = 5;
       let telegrame = 4.0;
       let native7 = false;
      for (let b = 0; b < 2; b++) {
         telegrame -= parseInt(`${telegrame}`) | 2;
      }
         telegrame /= Math.max(1, ((native7 ? 3 : 3) | componentI));
       let baiduf: Array<any> = [763, 658];
          let listF: Array<any> = [532, 920];
          let predictionn: Array<any> = [589, 754];
          let singaporeH = 1.0;
         telegrame -= componentI >> (Math.min(2, Math.abs(2)));
         listF = [predictionn.length / (Math.max(2, 10))];
         predictionn = [listF.length / (Math.max(3, 3))];
         singaporeH += predictionn.length;
         native7 = baiduf.length <= 87;
         native7 = !native7 || telegrame >= 2.98;
      while (4 <= (baiduf.length + 2)) {
         baiduf = [componentI];
         break;
      }
      while (baiduf.length <= telegrame) {
         telegrame += 3;
         break;
      }
      let manifestk = native7 ? !native7 : native7;
      do {
         native7 = baiduf.length >= 82;
         if (manifestk) {
            break;
         }
      } while (manifestk && (native7));
      mail3 -= parseFloat(`${parseInt(`${helperU}`) * 1}`);
      break;
   }
      traminix.set(`${eighteenu}`, 1 & parseInt(`${eighteenu}`));
      comment3 -= parseInt(`${mail3}`) & 2;
      toponU = comment3 >= 30.7;
      settingsI.push(editz.length);
   for (let t = 0; t < 1; t++) {
      disconnectedZ.push(parseInt(`${eighteenu}`) + 2);
   }
   if (!disconnectedZ.includes(helperU)) {
      helperU /= Math.max(2, parseInt(`${comment3}`) + 3);
   }
      toponU = !toponU;
      helperU *= 1;
      disconnectedZ = [parseInt(`${comment3}`) & 3];
   while (5 > (filedX * 5)) {
      toponU = filedX > 6;
      break;
   }
   while (2 == (1 << (Math.min(3, Math.abs(traminix.size)))) && (helperU * traminix.size) == 4.56) {
      traminix.set(`${comment3}`, parseInt(`${comment3}`));
      break;
   }
      toponU = !progressb;
   if (2.58 < (5.50 / (Math.max(3, eighteenu)))) {
      disconnectedZ.push(1);
   }
       let untickq: Array<any> = [762, 493, 112];
      while ((untickq.length / 3) < 5 && (untickq.length / 3) < 4) {
         untickq.push(untickq.length);
         break;
      }
         untickq = [untickq.length];
         untickq.push(untickq.length);
      toponU = progressb;
      disconnectedZ.push(2);
 },
      onReadyForDisplay,
      showAds = false,
      onPressCountdown,
      vodID,
      sourceID,
      onDownloadVod,
      setShowAdOverlay,
      onAdsMount,
      vipGuideModalOpen = false,
    }: ttSmall,
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
      "componentModity" | "none" | "fillDownloader"
    >("none");
    const [playbackRate, setPlaybackRate] = useState<number>(1);
    const controlsRef = useRef() as React.MutableRefObject<ttStatistics>;
    const accumulatedSkip = useRef(0);
    const [isLastForward, setIsLastForward] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const isFocus = useIsFocused();

    const userState = useSelector<ttGoal>('userReducer');
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

    const isOffline = useAppSelector(({ settingsReducer }: ttOrange) => settingsReducer.isOffline)

    const isSeekErrorRef = useRef(false);

    const { data: playerVodAds, isFetching: isFetchAds } = useQuery({
      queryKey: ["playerAdsVideo"],
      queryFn: () => ttConfirmationChinasame.getPlayerAdVideo(),
      enabled: !isOffline
    });

    useEffect(() => {
      if (vod_url === '') return;

      if (showAds &&
        playerVodAds &&
        (!ttFast.isVip(userState.user))
      ) {
        setShowAd(true);
        setAdCountdownTime(playerVodAds.minDuration);
        adVideoRef.current?.seek(0);

        
        tt_humidity_guide.playsAdsViewAnalytics({
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
       let videojsl = String.fromCharCode(112,104,111,110,101,95,57,95,52,52,0);
    let promotionW = 2.0;
    let largew = 2.0;
    let chatY = 4;
    let auto_5wz = true;
    let bell4 = 3.0;
    let clearI = String.fromCharCode(108,111,99,97,116,101,95,119,95,55,54,0);
    let soundY: Map<any, any> = new Map([[String.fromCharCode(109,95,52,95,103,101,111,98,116,97,103,0),416], [String.fromCharCode(109,105,120,105,110,95,97,95,51,56,0),637], [String.fromCharCode(119,111,114,107,105,110,103,95,57,95,53,51,0),732]]);
    let policye = 5.0;
    let membershipM: Map<any, any> = new Map([[String.fromCharCode(108,115,104,105,102,116,95,115,95,53,52,0),827], [String.fromCharCode(112,95,57,49,95,98,111,117,110,99,105,110,101,115,115,0),39]]);
    let philippinesw = String.fromCharCode(121,95,52,49,95,105,110,116,101,110,116,0);
      soundY = new Map([[videojsl, (videojsl == String.fromCharCode(108,0) ? videojsl.length : parseInt(`${promotionW}`))]]);
      promotionW /= Math.max(5, parseFloat(`${chatY >> (Math.min(1, Math.abs(1)))}`));
      policye += 1;
   while (Array.from(soundY.keys()).includes(`${policye}`)) {
      policye /= Math.max(1 << (Math.min(1, Math.abs(soundY.size))), 4);
      break;
   }
       let robotop = 5.0;
       let datag = String.fromCharCode(117,95,54,56,95,100,105,115,99,108,111,115,117,114,101,0);
       let telegrami: Array<any> = [String.fromCharCode(108,105,98,112,104,111,110,101,110,117,109,98,101,114,95,108,95,55,51,0), String.fromCharCode(114,101,112,114,101,112,97,114,101,95,121,95,53,0), String.fromCharCode(102,95,51,48,95,115,105,103,109,97,0)];
      while (!telegrami.includes(robotop)) {
         telegrami.push(2 & parseInt(`${robotop}`));
         break;
      }
      if ((telegrami.length ^ datag.length) > 2) {
         datag = `${telegrami.length}`;
      }
      if (2 >= (datag.length << (Math.min(Math.abs(1), 5))) && 4 >= (1 << (Math.min(1, telegrami.length)))) {
         datag = `${datag.length}`;
      }
          let floaterU = false;
          let optionsI: Array<any> = [715, 250];
          let rightM: Map<any, any> = new Map([[String.fromCharCode(112,95,52,55,95,102,111,114,103,111,116,116,101,110,0),false ], [String.fromCharCode(103,95,55,53,95,114,97,115,116,101,114,105,122,101,115,0),true ], [String.fromCharCode(118,95,52,57,95,117,110,114,101,99,111,103,110,105,122,101,100,0),true ]]);
         telegrami = [3];
         floaterU = optionsI.length == 90;
         optionsI = [((floaterU ? 5 : 2) / 2)];
         rightM.set(`${optionsI.length}`, 1);
      for (let w = 0; w < 1; w++) {
          let trophya = String.fromCharCode(115,95,51,50,95,100,101,105,110,116,0);
          let ewardedB = 2.0;
          let pause1 = String.fromCharCode(118,95,49,48,95,112,114,105,111,114,105,116,105,101,115,0);
          let edita = 5.0;
         datag = `${datag.length % (Math.max(1, telegrami.length))}`;
         trophya += `${trophya.length / (Math.max(1, 8))}`;
         ewardedB *= parseFloat(`${pause1.length}`);
         pause1 = `${(pause1 == String.fromCharCode(105,0) ? pause1.length : parseInt(`${ewardedB}`))}`;
         edita += parseFloat(`${pause1.length + parseInt(`${edita}`)}`);
      }
      for (let x = 0; x < 1; x++) {
          let assiste = String.fromCharCode(121,95,52,57,95,100,101,99,101,108,101,114,97,116,105,110,103,0);
          let fillC = String.fromCharCode(99,104,97,110,103,101,115,95,102,95,51,53,0);
          let gpay_ = String.fromCharCode(116,109,99,100,95,52,95,55,54,0);
          let privilegek = 4.0;
         robotop /= Math.max(telegrami.length * 2, 2);
         assiste += `${fillC.length}`;
         fillC = `${parseInt(`${privilegek}`) >> (Math.min(Math.abs(2), 5))}`;
         gpay_ = `${assiste.length / (Math.max(3, 4))}`;
         privilegek /= Math.max(2, parseFloat(`${assiste.length}`));
      }
       let twitterh = 3.0;
       let logow = 1.0;
      while ((2.55 * robotop) == 2.80 || (robotop * 2.55) == 2.74) {
         robotop /= Math.max(datag.length, 4);
         break;
      }
         logow -= 1 * parseInt(`${robotop}`);
      bell4 += (parseInt(`${bell4}`) << (Math.min(1, Math.abs((auto_5wz ? 5 : 5)))));
       let active8 = String.fromCharCode(107,95,52,55,95,105,110,116,101,114,114,117,112,116,105,111,110,0);
       let report6 = 2.0;
       let shooth = String.fromCharCode(98,95,49,54,95,102,105,103,104,116,101,114,115,0);
          let notificationo: Array<any> = [904, 503, 458];
         report6 /= Math.max(parseInt(`${report6}`), 4);
         notificationo.push(notificationo.length / (Math.max(5, notificationo.length)));
      while ((shooth.length / (Math.max(4, parseInt(`${report6}`)))) > 2 && 5.12 > (2.32 / (Math.max(2, report6)))) {
         report6 += active8.length | parseInt(`${report6}`);
         break;
      }
      if (!active8.startsWith(shooth)) {
          let security7 = 0.0;
          let zhuboy = String.fromCharCode(115,95,52,53,95,99,106,112,101,103,0);
         active8 = `${active8.length ^ 3}`;
         security7 -= 3;
         zhuboy += `${parseInt(`${security7}`)}`;
      }
      for (let y = 0; y < 3; y++) {
         active8 = `${(String.fromCharCode(69,0) == active8 ? parseInt(`${report6}`) : active8.length)}`;
      }
      if (shooth.length == report6) {
         report6 /= Math.max(active8.length / (Math.max(6, shooth.length)), 5);
      }
      chatY /= Math.max(5, chatY);
   while (bell4 < policye) {
       let time_uf6: Map<any, any> = new Map([[String.fromCharCode(122,95,49,48,48,95,109,115,117,98,0),String.fromCharCode(102,105,120,117,112,95,103,95,53,51,0)], [String.fromCharCode(115,121,115,108,111,103,95,97,95,49,50,0),String.fromCharCode(106,95,56,48,95,101,118,114,112,99,0)]]);
       let policyA: Map<any, any> = new Map([[String.fromCharCode(106,95,51,55,0),499], [String.fromCharCode(108,105,110,103,101,114,95,97,95,57,51,0),100], [String.fromCharCode(107,95,57,52,95,97,114,99,116,105,99,0),173]]);
       let videoL = String.fromCharCode(97,95,55,95,117,116,105,108,115,0);
       let downh: Map<any, any> = new Map([[String.fromCharCode(121,95,50,52,95,97,100,97,112,116,97,116,105,111,110,115,101,116,0),String.fromCharCode(98,95,50,54,95,117,116,105,108,105,116,121,0)], [String.fromCharCode(117,95,55,51,95,115,116,114,111,107,101,115,0),String.fromCharCode(103,101,116,98,121,116,101,95,109,95,52,49,0)], [String.fromCharCode(104,95,50,48,95,99,111,108,115,112,97,110,0),String.fromCharCode(99,116,114,95,56,95,49,53,0)]]);
         videoL += `${downh.size}`;
      if (!videoL.startsWith(`${downh.size}`)) {
         downh.set(`${policyA.size}`, policyA.size & downh.size);
      }
      if ((videoL.length - 2) >= 4 || (2 - videoL.length) >= 3) {
         downh = new Map([[`${downh.size}`, policyA.size]]);
      }
      if ((5 & time_uf6.size) <= 3) {
         policyA.set(`${policyA.size}`, 2 * downh.size);
      }
       let calendar3 = String.fromCharCode(105,118,102,101,110,99,95,52,95,50,0);
          let statisticsV: Map<any, any> = new Map([[String.fromCharCode(114,95,49,52,95,116,114,101,97,116,0),true ], [String.fromCharCode(99,104,97,110,103,105,110,103,95,122,95,52,48,0),false ], [String.fromCharCode(112,95,56,57,95,102,114,97,109,101,100,97,116,97,0),false ]]);
          let r_titleM: Array<any> = [115, 139, 793];
          let sheetk = 5.0;
         downh = new Map([[`${policyA.size}`, 2]]);
         statisticsV.set(`${sheetk}`, parseInt(`${sheetk}`));
         r_titleM.push(statisticsV.size);
         policyA.set(calendar3, 2);
         calendar3 += `${policyA.size}`;
         calendar3 += "2";
         policyA = new Map([[`${time_uf6.size}`, time_uf6.size]]);
         downh = new Map([[videoL, calendar3.length - 2]]);
         calendar3 += `${videoL.length}`;
      bell4 *= 1;
      break;
   }
   if (soundY.size == policye) {
       let private_mzN = String.fromCharCode(120,95,55,56,95,115,108,117,114,112,0);
       let formK: Array<any> = [String.fromCharCode(121,95,56,95,101,115,115,101,110,99,101,0), String.fromCharCode(97,95,56,53,95,118,109,97,102,109,111,116,105,111,110,0), String.fromCharCode(119,97,108,107,116,104,114,111,117,103,104,95,98,95,54,56,0)];
       let nativeexg: Array<any> = [677, 922, 435];
       let userV = false;
       let formd = String.fromCharCode(119,95,50,54,95,108,105,109,105,116,115,0);
      let streamingP = formd.length >= 7549816;
      do {
         formd += "3";
         if (streamingP) {
            break;
         }
      } while ((userV) && streamingP);
      let description_rsf = 5290416 <= nativeexg.length;
      do {
         nativeexg.push(3);
         if (description_rsf) {
            break;
         }
      } while (description_rsf && (nativeexg.length <= 5));
         formK.push(formd.length);
      for (let n = 0; n < 1; n++) {
         userV = formd == private_mzN;
      }
      for (let u = 0; u < 3; u++) {
         userV = formd.length > 85;
      }
      if (private_mzN.length < formK.length) {
         private_mzN += `${private_mzN.length}`;
      }
      while (private_mzN.length == 4) {
          let starq = true;
         private_mzN += `${formK.length ^ 2}`;
         starq = (starq ? starq : !starq);
         break;
      }
      let side1 = userV ? !userV : userV;
      do {
          let with__e = 5.0;
          let reacti = String.fromCharCode(100,95,54,49,95,101,116,104,101,114,110,101,116,0);
          let pingF = 1.0;
          let bodan_ = String.fromCharCode(98,119,114,105,116,101,95,120,95,57,49,0);
          let promotion5: Map<any, any> = new Map([[String.fromCharCode(99,114,121,115,116,97,108,104,100,95,116,95,57,56,0),String.fromCharCode(101,118,114,99,100,97,116,97,95,103,95,52,52,0)], [String.fromCharCode(98,108,111,99,107,115,105,122,101,95,111,95,50,52,0),String.fromCharCode(109,111,100,97,108,108,121,95,50,95,55,49,0)], [String.fromCharCode(114,101,109,105,110,100,95,97,95,49,51,0),String.fromCharCode(112,111,115,116,95,104,95,53,55,0)]]);
         userV = !userV && 9.57 > with__e;
         with__e *= parseFloat(`${parseInt(`${pingF}`) / (Math.max(10, bodan_.length))}`);
         reacti = `${promotion5.size}`;
         pingF *= (reacti == String.fromCharCode(109,0) ? reacti.length : parseInt(`${pingF}`));
         bodan_ = `${2 & reacti.length}`;
         promotion5 = new Map([[reacti, parseInt(`${pingF}`) ^ reacti.length]]);
         if (side1) {
            break;
         }
      } while ((4 == formd.length) && side1);
         private_mzN = `${(String.fromCharCode(100,0) == formd ? formd.length : (userV ? 4 : 3))}`;
         nativeexg = [formd.length];
       let fastforwardQ = String.fromCharCode(106,111,105,110,116,95,102,95,52,0);
       let philippinesU = String.fromCharCode(116,95,53,56,95,112,114,111,112,111,115,97,108,115,0);
      for (let h = 0; h < 2; h++) {
         formK = [3];
      }
      for (let k = 0; k < 3; k++) {
         private_mzN = `${((userV ? 2 : 4) / (Math.max(10, philippinesU.length)))}`;
      }
      for (let w = 0; w < 3; w++) {
          let m_lock3 = 4.0;
         userV = 87.61 >= m_lock3;
      }
      if (philippinesU == private_mzN) {
         private_mzN += `${2 + formK.length}`;
      }
      soundY.set(clearI, clearI.length ^ 2);
   }
       let main_t1 = 2.0;
       let commonr = String.fromCharCode(107,95,55,52,95,100,111,110,97,116,105,111,110,0);
       let blacklistf = true;
         main_t1 += 2 >> (Math.min(Math.abs(parseInt(`${main_t1}`)), 1));
          let matchs = 0.0;
          let frame_ak = String.fromCharCode(109,95,51,52,95,114,111,108,108,98,97,99,107,0);
          let dangerm = String.fromCharCode(112,102,105,108,116,101,114,95,122,95,50,0);
         commonr += `${frame_ak.length * 1}`;
         matchs /= Math.max(parseFloat(`${2 << (Math.min(5, Math.abs(parseInt(`${matchs}`))))}`), 4);
         frame_ak += `${parseInt(`${matchs}`) * dangerm.length}`;
         dangerm = `${(dangerm == String.fromCharCode(81,0) ? dangerm.length : parseInt(`${matchs}`))}`;
      for (let a = 0; a < 1; a++) {
         blacklistf = blacklistf || commonr.length == 84;
      }
      if (blacklistf) {
         blacklistf = !commonr.startsWith(`${blacklistf}`);
      }
       let networkO = 3.0;
       let utilsI = 1.0;
       let appley = 3.0;
         utilsI -= parseFloat(`${2 ^ parseInt(`${networkO}`)}`);
      let splashz = blacklistf ? !blacklistf : blacklistf;
      do {
          let sellF: Array<any> = [886, 375, 656];
         blacklistf = networkO == main_t1;
         sellF.push(sellF.length >> (Math.min(Math.abs(2), 2)));
         if (splashz) {
            break;
         }
      } while (splashz && (commonr.startsWith(`${blacklistf}`)));
      while ((appley / (Math.max(5.29, 2))) <= 4.61) {
         appley += commonr.length;
         break;
      }
      policye *= soundY.size % (Math.max(1, 10));
      chatY >>= Math.min(Math.abs(chatY << (Math.min(Math.abs(soundY.size), 1))), 1);
      bell4 /= Math.max(5, chatY);
   if (1 < (3 << (Math.min(2, Math.abs(chatY))))) {
       let headerE = String.fromCharCode(115,95,57,56,95,98,97,110,100,115,0);
      while (headerE.length < 1 && headerE.length < 1) {
         headerE += "1";
         break;
      }
         headerE += "3";
         headerE = `${headerE.length ^ headerE.length}`;
      chatY ^= parseInt(`${policye}`);
   }
      chatY /= Math.max(3, 2 ^ chatY);
   for (let v = 0; v < 3; v++) {
       let bellg = 2.0;
       let catalogN = String.fromCharCode(118,105,115,117,97,108,105,122,97,116,105,111,110,95,48,95,50,51,0);
       let orangeM = 1;
      let actiong = orangeM >= 5350987;
      do {
         orangeM /= Math.max(orangeM ^ 3, 2);
         if (actiong) {
            break;
         }
      } while (((orangeM / (Math.max(bellg, 3))) > 1.5) && actiong);
      let k_managerD = catalogN.length >= 5626246;
      do {
          let friendsg = 3.0;
          let leagued = false;
         catalogN += "2";
         friendsg += parseFloat(`${parseInt(`${friendsg}`) * 3}`);
         leagued = friendsg <= 76.89;
         if (k_managerD) {
            break;
         }
      } while ((catalogN.endsWith(`${bellg}`)) && k_managerD);
      for (let v = 0; v < 1; v++) {
          let l_counti = String.fromCharCode(111,117,116,100,101,118,115,95,99,95,51,56,0);
          let clubq: Map<any, any> = new Map([[String.fromCharCode(120,95,57,52,95,117,108,112,102,101,99,0),677], [String.fromCharCode(102,95,54,48,95,97,112,112,108,121,0),587]]);
         catalogN += `${clubq.size}`;
         l_counti = `${l_counti.length}`;
         clubq = new Map([[l_counti, 3]]);
      }
      for (let s = 0; s < 1; s++) {
         bellg /= Math.max(orangeM % (Math.max(3, parseInt(`${bellg}`))), 3);
      }
       let selectiong = 0.0;
      if (1 >= (orangeM >> (Math.min(Math.abs(1), 1))) && (5.63 + selectiong) >= 4.66) {
          let incidentc = String.fromCharCode(116,114,105,103,103,101,114,101,100,95,52,95,55,49,0);
          let hongkongV = String.fromCharCode(99,95,54,52,95,112,117,98,0);
          let controlsK = false;
         orangeM *= 2 / (Math.max(10, parseInt(`${selectiong}`)));
         incidentc = `${hongkongV.length}`;
         hongkongV += `${((controlsK ? 5 : 1) & hongkongV.length)}`;
      }
          let playK = String.fromCharCode(114,102,116,98,115,117,98,95,120,95,52,50,0);
          let floaterj = true;
          let pressure2 = String.fromCharCode(115,101,110,100,95,112,95,54,0);
         catalogN = `${(playK == String.fromCharCode(56,0) ? playK.length : orangeM)}`;
         floaterj = !pressure2.endsWith(`${floaterj}`);
         pressure2 += `${((floaterj ? 3 : 4) >> (Math.min(Math.abs(3), 1)))}`;
      while (5 > (catalogN.length >> (Math.min(Math.abs(1), 4))) && (1 & catalogN.length) > 3) {
          let mimon = String.fromCharCode(97,115,107,105,110,103,95,122,95,49,53,0);
         catalogN += `${orangeM / (Math.max(8, mimon.length))}`;
         break;
      }
       let activitye = String.fromCharCode(105,95,53,48,95,100,105,109,109,105,110,103,0);
      videojsl = `${parseInt(`${promotionW}`)}`;
   }
   for (let y = 0; y < 3; y++) {
       let cornerM = false;
       let bootsplashJ = String.fromCharCode(102,95,51,52,95,113,117,105,99,107,0);
       let sourcec = String.fromCharCode(115,95,48,95,114,101,102,105,100,0);
       let pointl = 3;
       let sortR = false;
         pointl |= 1;
          let actionP = String.fromCharCode(102,95,56,51,95,115,100,97,108,108,111,99,120,0);
          let temperaturen = false;
          let m_countT = String.fromCharCode(99,111,108,114,97,109,95,109,95,49,51,0);
         bootsplashJ += `${sourcec.length}`;
         actionP = `${(m_countT.length | (temperaturen ? 1 : 3))}`;
         temperaturen = actionP.length == 11 && temperaturen;
         m_countT = `${actionP.length}`;
      while (sourcec.length > 2 || sortR) {
          let constantsY = 0.0;
          let canvasj = String.fromCharCode(121,95,49,57,95,110,111,116,105,102,105,101,100,0);
          let mbjscommonc: Map<any, any> = new Map([[String.fromCharCode(113,95,52,56,95,99,111,109,109,97,110,100,0),318], [String.fromCharCode(122,95,51,50,95,97,117,103,109,101,110,116,0),432], [String.fromCharCode(113,99,101,108,112,95,102,95,55,49,0),92]]);
          let pointq = String.fromCharCode(102,95,52,50,95,105,110,102,105,110,105,116,121,0);
         sourcec = `${bootsplashJ.length + 2}`;
         constantsY *= parseInt(`${constantsY}`) >> (Math.min(canvasj.length, 2));
         canvasj = `${(String.fromCharCode(95,0) == canvasj ? canvasj.length : parseInt(`${constantsY}`))}`;
         mbjscommonc.set(`${constantsY}`, (String.fromCharCode(72,0) == canvasj ? canvasj.length : parseInt(`${constantsY}`)));
         pointq = `${1 | canvasj.length}`;
         break;
      }
          let type_ldL = String.fromCharCode(115,105,109,112,108,105,102,105,101,100,95,114,95,57,50,0);
          let rewindP = true;
         pointl <<= Math.min(Math.abs((sourcec == String.fromCharCode(68,0) ? sourcec.length : (sortR ? 5 : 3))), 4);
         type_ldL = `${type_ldL.length}`;
         rewindP = type_ldL.length < 53 && rewindP;
      let vignettev = sortR ? !sortR : sortR;
      do {
         sortR = !sourcec.includes(`${cornerM}`);
         if (vignettev) {
            break;
         }
      } while ((cornerM && !sortR) && vignettev);
      while (sourcec.includes(`${cornerM}`)) {
          let holderl = String.fromCharCode(110,100,101,120,95,57,95,57,49,0);
          let guideE = 4;
         cornerM = bootsplashJ.length == pointl;
         holderl = `${guideE}`;
         guideE >>= Math.min(Math.abs(guideE), 2);
         break;
      }
      while (!sortR) {
         sortR = 35 >= bootsplashJ.length;
         break;
      }
          let clockS: Array<any> = [String.fromCharCode(99,97,114,116,101,115,105,97,110,95,120,95,49,52,0), String.fromCharCode(100,95,52,51,95,115,101,101,0)];
          let mappingT = String.fromCharCode(108,95,57,48,95,99,97,110,99,101,108,0);
          let launcherH = 4.0;
         cornerM = bootsplashJ == String.fromCharCode(54,0);
         clockS.push(clockS.length ^ parseInt(`${launcherH}`));
         mappingT += `${mappingT.length}`;
         launcherH /= Math.max(1, clockS.length % 2);
         sortR = (bootsplashJ.length | sourcec.length) > 36;
       let modeb = String.fromCharCode(114,101,109,101,109,98,101,114,101,100,95,118,95,54,49,0);
       let gemfiled = String.fromCharCode(100,101,115,99,114,105,112,116,111,114,115,95,54,95,49,54,0);
          let cornerL = false;
         gemfiled += "2";
         cornerL = (!cornerL ? !cornerL : !cornerL);
      for (let q = 0; q < 1; q++) {
          let headerS = 0.0;
          let streamingy = String.fromCharCode(102,109,116,112,95,112,95,55,54,0);
          let next_ = String.fromCharCode(102,111,114,105,95,118,95,54,0);
          let matchesh = 2;
          let mintegralF: Array<any> = [84, 220, 228];
         sourcec = `${next_.length}`;
         headerS -= parseFloat(`${streamingy.length % 2}`);
         streamingy += `${3 | matchesh}`;
         next_ = "2";
         matchesh /= Math.max(matchesh, 5);
         mintegralF = [mintegralF.length >> (Math.min(Math.abs(2), 4))];
      }
         gemfiled = `${bootsplashJ.length}`;
          let overw: Array<any> = [284, 978, 413];
          let actionsm = 4.0;
         sourcec = `${sourcec.length & bootsplashJ.length}`;
         overw.push(overw.length);
         actionsm /= Math.max(parseFloat(`${overw.length}`), 2);
         modeb += `${pointl}`;
      bell4 += parseInt(`${largew}`);
   }
   if ((promotionW - policye) <= 2.97) {
      promotionW += parseFloat(`${parseInt(`${bell4}`)}`);
   }
      promotionW -= parseFloat(`${parseInt(`${largew}`)}`);
       let huawei5: Map<any, any> = new Map([[String.fromCharCode(100,95,56,48,95,105,110,116,101,114,120,0),true ], [String.fromCharCode(116,98,109,108,95,110,95,49,49,0),false ]]);
       let holderK = 2.0;
      for (let s = 0; s < 1; s++) {
          let googleR = String.fromCharCode(121,95,55,52,95,98,105,110,107,98,0);
          let storeJ = 1.0;
         holderK /= Math.max(parseFloat(`${parseInt(`${storeJ}`) % (Math.max(huawei5.size, 7))}`), 5);
         googleR += "1";
         storeJ *= parseFloat(`${3}`);
      }
          let forward3 = 1.0;
         holderK += parseFloat(`${parseInt(`${forward3}`) - 1}`);
      for (let n = 0; n < 2; n++) {
         holderK /= Math.max(parseFloat(`${1}`), 2);
      }
         holderK += parseFloat(`${huawei5.size * parseInt(`${holderK}`)}`);
         huawei5.set(`${holderK}`, 3);
      let entryx = huawei5.size >= 8807590;
      do {
         huawei5.set(`${holderK}`, parseInt(`${holderK}`) - 1);
         if (entryx) {
            break;
         }
      } while (entryx && (4.98 < (holderK / 3.14)));
      soundY = new Map([[`${holderK}`, parseInt(`${promotionW}`) - 3]]);
      auto_5wz = String.fromCharCode(82,0) == videojsl;

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
       let emojiS = 2.0;
    let areaN: Array<any> = [538, 624, 423];
    let c_center_: Map<any, any> = new Map([[String.fromCharCode(117,95,52,53,95,117,110,115,116,111,112,112,97,98,108,101,0),378], [String.fromCharCode(100,95,52,54,95,115,116,105,99,107,101,114,115,101,116,0),834]]);
    let soundK = true;
    let ballu: Map<any, any> = new Map([[String.fromCharCode(112,95,51,55,95,114,103,98,97,108,101,0),String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,115,95,99,95,53,49,0)], [String.fromCharCode(115,95,53,57,95,111,111,117,114,97,0),String.fromCharCode(99,95,56,95,100,114,111,112,120,0)], [String.fromCharCode(119,95,50,53,95,97,112,110,103,0),String.fromCharCode(118,95,54,51,95,99,108,111,115,101,0)]]);
    let minivode: Map<any, any> = new Map([[String.fromCharCode(120,95,49,51,95,102,116,118,110,115,0),String.fromCharCode(117,95,51,52,95,109,105,114,114,111,114,101,100,0)], [String.fromCharCode(115,117,109,109,97,114,121,95,107,95,53,55,0),String.fromCharCode(102,105,108,101,112,97,116,104,95,114,95,56,52,0)]]);
    let livew = 1.0;
    let bingU = 2.0;
    let viewer_: Map<any, any> = new Map([[String.fromCharCode(114,101,115,121,110,99,95,110,95,49,54,0),794], [String.fromCharCode(112,111,108,108,101,100,95,110,95,51,48,0),402]]);
    let selection1: Array<any> = [623, 20];
   if ((4 + c_center_.size) < 1 || (c_center_.size + ballu.size) < 4) {
      c_center_.set(`${livew}`, parseInt(`${livew}`));
   }
      emojiS += c_center_.size;
   for (let k = 0; k < 2; k++) {
      livew += parseFloat(`${parseInt(`${livew}`)}`);
   }
       let arear = String.fromCharCode(114,101,108,111,97,100,101,114,95,113,95,53,55,0);
      for (let h = 0; h < 3; h++) {
         arear += `${(String.fromCharCode(117,0) == arear ? arear.length : arear.length)}`;
      }
         arear += `${(String.fromCharCode(97,0) == arear ? arear.length : arear.length)}`;
      if (arear != arear) {
         arear = `${arear.length}`;
      }
      livew += parseFloat(`${parseInt(`${livew}`) >> (Math.min(Math.abs(2), 5))}`);
   while ((areaN.length | 1) > 2 || (c_center_.size | 1) > 4) {
       let mappingW = String.fromCharCode(113,95,52,50,95,114,116,97,100,100,114,115,0);
       let dialoge = 5;
         dialoge &= dialoge << (Math.min(mappingW.length, 3));
      while (dialoge <= 5) {
          let yellowf = String.fromCharCode(100,113,117,111,116,101,95,49,95,54,49,0);
          let chatK = String.fromCharCode(117,110,105,109,112,111,114,116,97,110,116,95,119,95,50,54,0);
          let commentP = String.fromCharCode(111,119,110,101,114,115,104,105,112,95,49,95,51,55,0);
         mappingW = `${(yellowf == String.fromCharCode(87,0) ? yellowf.length : dialoge)}`;
         chatK = `${2 * commentP.length}`;
         commentP += `${chatK.length}`;
         break;
      }
         dialoge &= mappingW.length ^ dialoge;
       let middleware7 = String.fromCharCode(112,111,114,116,114,97,105,116,95,57,95,57,49,0);
      for (let h = 0; h < 2; h++) {
         dialoge -= dialoge;
      }
          let x_imageW = 5;
          let cornerB = String.fromCharCode(109,95,52,49,95,99,111,110,102,108,105,99,116,105,110,103,0);
         dialoge ^= (cornerB == String.fromCharCode(72,0) ? cornerB.length : dialoge);
         x_imageW -= x_imageW;
      areaN = [dialoge ^ 2];
      break;
   }
   if (2.39 >= (livew * 2.35)) {
       let layoutm: Map<any, any> = new Map([[String.fromCharCode(115,99,97,108,97,114,95,101,95,53,55,0),false ], [String.fromCharCode(112,114,101,108,111,97,100,105,110,103,95,111,95,54,56,0),false ]]);
       let shrinkc: Map<any, any> = new Map([[String.fromCharCode(114,101,115,104,117,102,102,108,101,95,53,95,53,54,0),String.fromCharCode(112,104,112,95,53,95,56,50,0)], [String.fromCharCode(116,95,57,55,95,108,111,99,108,0),String.fromCharCode(112,114,101,100,101,99,111,100,101,95,119,95,56,50,0)], [String.fromCharCode(114,95,55,55,95,115,109,106,112,101,103,0),String.fromCharCode(114,95,53,51,95,115,101,99,107,101,121,0)]]);
       let detaill = String.fromCharCode(118,95,49,52,95,103,110,117,116,108,115,0);
       let suggestionl = String.fromCharCode(109,97,107,101,99,121,103,119,105,110,112,107,103,95,104,95,53,50,0);
      if ((4 | layoutm.size) < 2) {
          let helper9 = String.fromCharCode(119,97,110,116,95,110,95,57,50,0);
          let screenw = String.fromCharCode(114,95,55,56,95,114,103,98,112,108,117,115,0);
          let auto_19 = 2.0;
         suggestionl = `${3 - shrinkc.size}`;
         helper9 += `${(screenw == String.fromCharCode(117,0) ? parseInt(`${auto_19}`) : screenw.length)}`;
         auto_19 *= 2;
      }
      while (!Array.from(layoutm.values()).includes(shrinkc.size)) {
         layoutm.set(detaill, 2);
         break;
      }
       let mbbidP = 1;
       let progressB = 4;
      let langb = detaill.length >= 7555102;
      do {
          let eventi = String.fromCharCode(100,101,114,101,102,95,49,95,54,56,0);
          let chatW = 4.0;
          let vietnamI = 4;
          let predictionP = 0;
          let connectionI = 1.0;
         detaill += `${layoutm.size}`;
         eventi = "2";
         chatW *= parseInt(`${chatW}`) % 1;
         vietnamI <<= Math.min(5, Math.abs(parseInt(`${chatW}`) & eventi.length));
         predictionP %= Math.max(2, vietnamI);
         connectionI /= Math.max(parseFloat(`${3 * parseInt(`${chatW}`)}`), 3);
         if (langb) {
            break;
         }
      } while ((suggestionl == String.fromCharCode(117,0)) && langb);
      while (!suggestionl.startsWith(`${mbbidP}`)) {
          let actionR = String.fromCharCode(118,95,53,55,95,102,114,111,109,0);
          let share1 = String.fromCharCode(101,95,57,53,95,115,111,110,105,99,0);
         suggestionl += `${share1.length}`;
         actionR += `${2 | actionR.length}`;
         share1 = `${actionR.length}`;
         break;
      }
      livew /= Math.max(1, (parseFloat(`${parseInt(`${emojiS}`) * (soundK ? 2 : 5)}`)));
   }
   for (let h = 0; h < 2; h++) {
      soundK = bingU >= 78.51;
   }
   for (let x = 0; x < 2; x++) {
      emojiS /= Math.max(4, 1 & c_center_.size);
   }
   for (let t = 0; t < 1; t++) {
      livew -= parseFloat(`${parseInt(`${livew}`)}`);
   }
   let orange1 = 9858597.0 <= bingU;
   do {
      bingU *= c_center_.size;
      if (orange1) {
         break;
      }
   } while ((2.14 == bingU) && orange1);
      minivode = new Map([[`${c_center_.size}`, minivode.size & c_center_.size]]);
   while (ballu.size < 4) {
      ballu = new Map([[`${c_center_.size}`, c_center_.size]]);
      break;
   }
   let traminia = 5120283 <= areaN.length;
   do {
       let refreshd = String.fromCharCode(98,95,57,54,95,99,97,110,99,101,108,108,97,98,108,101,0);
       let fillg = 1;
       let manifestX: Array<any> = [String.fromCharCode(114,116,112,102,98,95,104,95,52,53,0), String.fromCharCode(115,95,49,95,112,105,99,116,117,114,101,0)];
       let crossC = 0;
       let launcherx = String.fromCharCode(118,112,115,104,97,114,101,100,95,48,95,50,49,0);
         refreshd += `${refreshd.length}`;
      let splashG = refreshd.length <= 9845360;
      do {
          let robotoQ = 5;
          let verticalH = String.fromCharCode(117,95,50,49,95,100,105,115,112,97,116,99,104,0);
          let animationV: Map<any, any> = new Map([[String.fromCharCode(109,98,104,115,95,107,95,55,54,0),570], [String.fromCharCode(97,108,112,104,97,108,101,115,115,95,57,95,57,52,0),520], [String.fromCharCode(107,95,55,56,95,115,101,108,0),958]]);
          let combinec: Array<any> = [141, 902, 313];
         refreshd += `${2 - robotoQ}`;
         robotoQ *= 2 * combinec.length;
         verticalH += `${verticalH.length}`;
         animationV = new Map([[`${animationV.size}`, 1 | animationV.size]]);
         combinec.push(combinec.length * animationV.size);
         if (splashG) {
            break;
         }
      } while (splashG && (!refreshd.endsWith(launcherx)));
       let pressured = 2.0;
      if ((crossC | 2) > 2 && (refreshd.length | crossC) > 2) {
          let shirtu = 2.0;
          let found1 = String.fromCharCode(98,95,57,52,95,114,101,99,116,97,110,103,108,101,115,0);
         crossC *= 2;
         shirtu *= parseFloat(`${found1.length}`);
         found1 += `${(found1 == String.fromCharCode(110,0) ? parseInt(`${shirtu}`) : found1.length)}`;
      }
       let filtero = 0.0;
      if ((manifestX.length + fillg) > 1 || 1 > (manifestX.length + fillg)) {
          let ballC = String.fromCharCode(99,111,108,111,114,107,101,121,95,55,95,55,56,0);
         manifestX = [parseInt(`${pressured}`)];
         ballC = `${ballC.length}`;
      }
         refreshd = `${refreshd.length - 1}`;
      while ((4 << (Math.min(4, manifestX.length))) > 4 && (manifestX.length << (Math.min(Math.abs(4), 2))) > 2) {
          let next_ = false;
          let tickedk = String.fromCharCode(100,95,49,50,95,115,110,97,112,115,104,111,116,115,0);
          let inewinterstitialJ: Array<any> = [255, 840, 411];
         manifestX = [fillg];
         next_ = tickedk.length <= 29 && 29 <= inewinterstitialJ.length;
         tickedk += `${(inewinterstitialJ.length << (Math.min(4, Math.abs((next_ ? 1 : 4)))))}`;
         break;
      }
          let preview0: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,97,100,100,114,105,110,102,111,95,51,95,51,0),106], [String.fromCharCode(97,95,57,49,95,115,99,104,101,100,0),287], [String.fromCharCode(99,114,111,115,115,102,97,100,101,95,53,95,54,53,0),299]]);
         launcherx += `${(String.fromCharCode(72,0) == launcherx ? crossC : launcherx.length)}`;
         preview0 = new Map([[`${preview0.size}`, preview0.size & 2]]);
      if (3 == (manifestX.length % (Math.max(1, 4))) && (1 % (Math.max(9, manifestX.length))) == 1) {
         refreshd = `${crossC}`;
      }
       let team6 = 3.0;
      areaN = [ballu.size];
      if (traminia) {
         break;
      }
   } while (traminia && ((emojiS * 5.18) == 4.16));
       let championx = true;
      while (championx && !championx) {
         championx = championx || !championx;
         break;
      }
         championx = (!championx ? !championx : !championx);
      if (!championx) {
         championx = (!championx ? !championx : championx);
      }
      ballu = new Map([[`${minivode.size}`, 2 + ballu.size]]);
      ballu.set(`${soundK}`, (parseInt(`${emojiS}`) >> (Math.min(3, Math.abs((soundK ? 5 : 3))))));
      minivode = new Map([[`${emojiS}`, 3 % (Math.max(7, parseInt(`${emojiS}`)))]]);

            setAdCountdownTime(prev => prev - 1);
          }, 1000)
        }
      },
      isPaused: isPaused,
      setCurrentTime: (time) => setCurrentTime(time),
    }));

    const onGoBack = () => {
       let nterstitialk = String.fromCharCode(116,111,111,108,98,97,114,95,102,95,51,57,0);
    let rewardg = String.fromCharCode(111,118,101,114,108,97,121,115,95,102,95,49,52,0);
    let morea: Map<any, any> = new Map([[String.fromCharCode(119,105,112,101,95,109,95,57,55,0),true ], [String.fromCharCode(98,101,104,97,118,105,111,114,115,95,107,95,53,54,0),true ]]);
    let configD = String.fromCharCode(109,97,107,101,110,97,110,95,118,95,53,48,0);
    let confirmationk = false;
    let changeM: Map<any, any> = new Map([[String.fromCharCode(112,108,97,105,110,116,101,120,116,95,111,95,53,55,0),false ], [String.fromCharCode(103,95,50,48,95,114,103,116,99,0),false ]]);
    let feedbackr: Map<any, any> = new Map([[String.fromCharCode(111,95,52,48,95,100,101,99,111,114,114,101,108,97,116,101,0),646], [String.fromCharCode(106,115,105,109,100,99,102,103,95,103,95,51,49,0),529], [String.fromCharCode(118,116,97,98,95,110,95,53,51,0),897]]);
    let langi = 0.0;
    let referrer9: Array<any> = [823, 657];
   if (!confirmationk) {
       let helperV = String.fromCharCode(115,112,101,99,95,119,95,56,50,0);
       let fullI = 4.0;
       let specN = 2;
         fullI -= parseFloat(`${2}`);
      while ((fullI * 4.45) > 5.46 || 5 > (4 << (Math.min(5, helperV.length)))) {
         fullI -= parseFloat(`${2}`);
         break;
      }
          let searchy = 3.0;
          let securitym = String.fromCharCode(119,105,110,100,105,110,103,95,51,95,51,54,0);
         helperV = `${helperV.length}`;
         searchy /= Math.max(parseInt(`${searchy}`), 5);
         securitym += "2";
      if (2.76 <= (3.48 + fullI)) {
         fullI *= parseFloat(`${specN}`);
      }
      if ((fullI / (Math.max(5, specN))) == 2.46) {
          let bodank = 1;
          let expandO = false;
         specN ^= specN >> (Math.min(Math.abs(3), 3));
         bodank %= Math.max(bodank, 1);
         expandO = bodank <= 99;
      }
      for (let d = 0; d < 2; d++) {
         fullI += parseFloat(`${parseInt(`${fullI}`) + 3}`);
      }
         fullI -= parseFloat(`${specN + 3}`);
         fullI /= Math.max(parseFloat(`${1 << (Math.min(Math.abs(specN), 2))}`), 4);
      if (1 >= (specN | 4) || (specN | 4) >= 3) {
          let fcopy_5rh = 0.0;
          let sinaM = 0.0;
          let contextW = 0;
         specN <<= Math.min(Math.abs(contextW + helperV.length), 1);
         fcopy_5rh *= parseFloat(`${parseInt(`${sinaM}`)}`);
         sinaM /= Math.max(4, parseFloat(`${1}`));
         contextW >>= Math.min(3, Math.abs(2));
      }
      changeM.set(helperV, helperV.length / (Math.max(2, 3)));
   }
      nterstitialk += `${parseInt(`${langi}`) / (Math.max(7, changeM.size))}`;
      nterstitialk += `${3 & feedbackr.size}`;
       let searchbarM = String.fromCharCode(108,105,110,107,105,110,103,95,106,95,51,52,0);
         searchbarM += "2";
      while (searchbarM == searchbarM) {
          let themei = 2.0;
          let privacye = String.fromCharCode(113,95,52,56,95,112,108,97,121,108,105,115,116,0);
          let analyticd = 2.0;
         searchbarM += `${(String.fromCharCode(51,0) == searchbarM ? privacye.length : searchbarM.length)}`;
         themei -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${analyticd}`)), 2))}`);
         privacye += `${3 % (Math.max(4, parseInt(`${themei}`)))}`;
         analyticd -= parseFloat(`${parseInt(`${themei}`)}`);
         break;
      }
      if (searchbarM == String.fromCharCode(52,0) && searchbarM == String.fromCharCode(71,0)) {
         searchbarM += "2";
      }
      changeM = new Map([[`${changeM.size}`, configD.length + 3]]);
      nterstitialk += `${configD.length}`;

      if (onBack !== undefined) {

   for (let c = 0; c < 2; c++) {
       let filedc = 2;
       let nterstitialw = 3;
      if (5 == (nterstitialw >> (Math.min(Math.abs(5), 5)))) {
         nterstitialw >>= Math.min(Math.abs(filedc), 4);
      }
         nterstitialw <<= Math.min(3, Math.abs(2));
          let orangeP = String.fromCharCode(109,95,53,56,95,118,109,97,112,115,105,110,0);
          let popupq: Array<any> = [236, 149, 391];
         nterstitialw += nterstitialw / (Math.max(orangeP.length, 7));
         orangeP = `${3 + popupq.length}`;
         popupq = [2];
         nterstitialw /= Math.max(4, nterstitialw & filedc);
         nterstitialw ^= 1 | filedc;
         filedc += nterstitialw;
      configD += `${nterstitialk.length}`;
   }
   for (let t = 0; t < 3; t++) {
       let descp = 3;
       let brightnesso: Array<any> = [412, 537];
         descp *= descp & brightnesso.length;
      let lange = descp <= 9527305;
      do {
          let lessK = String.fromCharCode(105,95,54,48,95,116,109,109,98,110,0);
          let promotionV = 5;
         descp %= Math.max(2, 1);
         lessK = `${(String.fromCharCode(95,0) == lessK ? lessK.length : promotionV)}`;
         promotionV %= Math.max(3, lessK.length);
         if (lange) {
            break;
         }
      } while ((!brightnesso.includes(descp)) && lange);
      if (3 < (brightnesso.length | descp) && 4 < (3 | descp)) {
         brightnesso = [brightnesso.length];
      }
         brightnesso = [brightnesso.length | 2];
      if (2 > (2 | brightnesso.length)) {
         descp += descp | 1;
      }
         brightnesso.push(brightnesso.length / (Math.max(3, 7)));
      feedbackr = new Map([[`${brightnesso.length}`, descp]]);
   }
       let backgroundN: Array<any> = [899, 605];
       let cornerN = String.fromCharCode(99,119,110,100,95,112,95,55,49,0);
      while (!cornerN.includes(`${backgroundN.length}`)) {
          let overlayq = String.fromCharCode(116,104,111,117,103,104,95,99,95,56,51,0);
         cornerN += `${cornerN.length + backgroundN.length}`;
         overlayq = `${3 * overlayq.length}`;
         break;
      }
      if (!cornerN.includes(`${backgroundN.length}`)) {
         cornerN = `${(String.fromCharCode(66,0) == cornerN ? cornerN.length : backgroundN.length)}`;
      }
      let condensedU = 7126510 >= cornerN.length;
      do {
          let mimot = String.fromCharCode(99,111,100,101,99,95,113,95,50,57,0);
         cornerN = "2";
         mimot = `${mimot.length >> (Math.min(Math.abs(3), 1))}`;
         if (condensedU) {
            break;
         }
      } while (condensedU && (1 < (backgroundN.length % (Math.max(cornerN.length, 7)))));
         cornerN = `${cornerN.length + backgroundN.length}`;
         backgroundN.push(backgroundN.length);
         backgroundN.push(backgroundN.length);
      morea.set(rewardg, changeM.size + rewardg.length);
      changeM.set(`${feedbackr.size}`, 1 + changeM.size);
      langi += changeM.size;
        onBack();

   let stringsF = 9370899 >= nterstitialk.length;
   do {
       let chart3 = 2;
       let reminderQ: Map<any, any> = new Map([[String.fromCharCode(109,95,53,55,95,112,111,97,0),36], [String.fromCharCode(104,121,98,114,105,100,95,110,95,56,56,0),84]]);
       let matchesN = String.fromCharCode(98,114,117,115,104,95,115,95,53,0);
       let temperatureT = String.fromCharCode(109,117,108,116,105,101,110,100,95,112,95,57,49,0);
         reminderQ = new Map([[matchesN, chart3 & matchesN.length]]);
         reminderQ = new Map([[`${reminderQ.size}`, reminderQ.size | 3]]);
      let zoomM = chart3 >= 7210516;
      do {
         chart3 >>= Math.min(1, temperatureT.length);
         if (zoomM) {
            break;
         }
      } while (zoomM && ((temperatureT.length / (Math.max(4, 6))) == 2 || 3 == (chart3 / (Math.max(4, 5)))));
          let ball1: Map<any, any> = new Map([[String.fromCharCode(122,95,50,50,95,115,101,116,116,108,105,110,103,0),true ], [String.fromCharCode(114,95,54,53,95,115,99,111,112,101,0),true ], [String.fromCharCode(97,112,112,108,105,99,97,116,105,111,110,95,107,95,52,50,0),true ]]);
         chart3 |= matchesN.length;
         ball1.set(`${ball1.size}`, 3);
      for (let e = 0; e < 1; e++) {
         matchesN = `${matchesN.length}`;
      }
         reminderQ.set(`${matchesN}`, reminderQ.size * 2);
      if (Array.from(reminderQ.keys()).includes(`${chart3}`)) {
          let rewardvideoT = String.fromCharCode(99,111,110,116,105,103,117,111,117,115,95,111,95,53,50,0);
          let thumbnailB = 2.0;
          let applicationh = String.fromCharCode(97,114,103,95,52,95,49,55,0);
          let panglen = String.fromCharCode(111,95,53,51,95,113,115,111,114,116,0);
         reminderQ = new Map([[matchesN, 3 + chart3]]);
         rewardvideoT += `${parseInt(`${thumbnailB}`) ^ applicationh.length}`;
         thumbnailB -= (parseFloat(`${panglen == String.fromCharCode(85,0) ? parseInt(`${thumbnailB}`) : panglen.length}`));
         applicationh = `${rewardvideoT.length >> (Math.min(4, Math.abs(parseInt(`${thumbnailB}`))))}`;
      }
         reminderQ.set(matchesN, chart3 << (Math.min(Math.abs(1), 2)));
         chart3 <<= Math.min(Math.abs(temperatureT.length + 1), 2);
      while (5 == (chart3 >> (Math.min(Math.abs(3), 2))) && 3 == (3 >> (Math.min(1, matchesN.length)))) {
          let playercommon0: Map<any, any> = new Map([[String.fromCharCode(101,118,101,110,108,121,95,114,95,57,54,0),953], [String.fromCharCode(105,110,115,116,97,108,108,101,100,95,104,95,56,55,0),84]]);
          let filter8 = 3.0;
          let mbjscommonv = true;
          let chat6: Map<any, any> = new Map([[String.fromCharCode(122,95,50,53,95,115,117,98,116,121,112,101,115,0),String.fromCharCode(112,110,105,101,108,115,95,117,95,57,57,0)], [String.fromCharCode(109,107,118,109,117,120,101,114,116,121,112,101,115,95,111,95,49,56,0),String.fromCharCode(116,95,52,52,95,120,99,117,114,115,111,114,0)], [String.fromCharCode(108,95,54,51,95,100,105,118,105,100,111,114,0),String.fromCharCode(118,95,49,48,95,112,101,114,115,112,0)]]);
         chart3 <<= Math.min(Math.abs(parseInt(`${filter8}`) ^ 3), 1);
         playercommon0.set(`${playercommon0.size}`, 3);
         filter8 *= parseFloat(`${3 << (Math.min(2, Math.abs(playercommon0.size)))}`);
         mbjscommonv = mbjscommonv || chat6.size < 71;
         chat6 = new Map([[`${playercommon0.size}`, 2]]);
         break;
      }
      while (!matchesN.includes(`${reminderQ.size}`)) {
         reminderQ = new Map([[matchesN, (matchesN == String.fromCharCode(119,0) ? matchesN.length : chart3)]]);
         break;
      }
      for (let q = 0; q < 3; q++) {
         matchesN += `${matchesN.length >> (Math.min(2, Math.abs(reminderQ.size)))}`;
      }
      nterstitialk += `${changeM.size}`;
      if (stringsF) {
         break;
      }
   } while (stringsF && (rewardg.includes(`${nterstitialk.length}`)));
      confirmationk = changeM.size >= morea.size;
      nterstitialk = `${2 >> (Math.min(2, rewardg.length))}`;
      nterstitialk = `${rewardg.length & 1}`;
   if (referrer9.length == rewardg.length) {
      rewardg = `${morea.size - 2}`;
   }
        lockOrientation("PORTRAIT");

      langi *= ((confirmationk ? 4 : 3) ^ 1);
   for (let a = 0; a < 3; a++) {
      feedbackr.set(nterstitialk, nterstitialk.length - 1);
   }
      langi -= nterstitialk.length;
      changeM = new Map([[`${changeM.size}`, changeM.size]]);
       let dycreatorj = String.fromCharCode(122,95,52,50,95,115,104,97,114,101,100,100,111,119,110,108,111,97,100,0);
       let dycreatorB: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,98,111,100,121,95,110,95,49,50,0),String.fromCharCode(118,111,112,101,110,95,102,95,52,50,0)], [String.fromCharCode(115,95,53,51,95,114,101,97,100,0),String.fromCharCode(111,95,55,48,95,101,116,104,101,114,115,99,97,110,0)]]);
       let dark1 = true;
         dark1 = ((dycreatorj.length << (Math.min(4, Math.abs((dark1 ? dycreatorj.length : 99))))) < 99);
      while (3 < dycreatorj.length && dark1) {
         dycreatorj = "3";
         break;
      }
         dycreatorB.set(`${dark1}`, (dycreatorB.size | (dark1 ? 2 : 4)));
          let current2 = String.fromCharCode(120,95,51,49,95,121,117,121,118,116,111,121,117,118,0);
         dycreatorj += "3";
         current2 += `${current2.length / (Math.max(current2.length, 9))}`;
      while ((dycreatorB.size << (Math.min(Math.abs(5), 2))) > 2 || (5 << (Math.min(4, dycreatorj.length))) > 3) {
         dycreatorj += "2";
         break;
      }
      let traminiv = 7680416 <= dycreatorB.size;
      do {
         dycreatorB.set(dycreatorj, dycreatorj.length / 2);
         if (traminiv) {
            break;
         }
      } while (traminiv && ((dycreatorB.size / 1) <= 2));
         dycreatorB = new Map([[`${dycreatorB.size}`, dycreatorj.length]]);
         dycreatorj += `${dycreatorj.length * dycreatorB.size}`;
      let modelsp = dycreatorB.size <= 8887722;
      do {
         dycreatorB.set(dycreatorj, 1);
         if (modelsp) {
            break;
         }
      } while ((!dark1) && modelsp);
      confirmationk = String.fromCharCode(53,0) == nterstitialk;
        setIsFullScreen(false);
      } else {

   let modityc = 7491591.0 <= langi;
   do {
       let sort_ = true;
         sort_ = (sort_ ? sort_ : sort_);
          let alertS: Map<any, any> = new Map([[String.fromCharCode(100,105,103,101,115,116,95,101,95,54,57,0),String.fromCharCode(103,101,116,120,115,115,101,95,108,95,57,55,0)], [String.fromCharCode(99,111,109,112,108,101,116,105,111,110,95,107,95,49,53,0),String.fromCharCode(103,97,116,101,100,95,106,95,52,53,0)]]);
          let starj = String.fromCharCode(115,117,98,115,99,114,105,112,116,95,98,95,56,57,0);
         sort_ = starj.endsWith(`${sort_}`);
         alertS = new Map([[`${alertS.size}`, alertS.size]]);
         starj += `${alertS.size & 3}`;
         sort_ = (sort_ ? !sort_ : sort_);
      langi /= Math.max(1 + nterstitialk.length, 3);
      if (modityc) {
         break;
      }
   } while ((4.38 >= (2.16 + langi) && (langi + rewardg.length) >= 2.16) && modityc);
      referrer9.push(parseInt(`${langi}`) % (Math.max(3, referrer9.length)));
   let stepx = 7065919 >= morea.size;
   do {
      morea.set(`${changeM.size}`, feedbackr.size ^ 1);
      if (stepx) {
         break;
      }
   } while (stepx && (3 == (changeM.size >> (Math.min(Math.abs(5), 5))) || 5 == (morea.size >> (Math.min(2, Math.abs(changeM.size))))));
   if ((3 & referrer9.length) >= 1) {
      referrer9.push(((confirmationk ? 5 : 4) | 2));
   }
   let holdern = langi >= 7756197.0;
   do {
      langi /= Math.max(1, feedbackr.size >> (Math.min(rewardg.length, 3)));
      if (holdern) {
         break;
      }
   } while (holdern && ((langi / 1.35) < 3.19));
        

   for (let k = 0; k < 3; k++) {
      morea = new Map([[`${confirmationk}`, configD.length * 1]]);
   }
      morea = new Map([[`${changeM.size}`, 3]]);
   while ((2 * referrer9.length) < 2) {
      referrer9.push(((confirmationk ? 4 : 3)));
      break;
   }
   while (3 < (referrer9.length >> (Math.min(Math.abs(1), 2))) || 4.89 < (langi * 3.77)) {
      langi /= Math.max(rewardg.length, 3);
      break;
   }
   while (configD.length <= 3) {
      configD = "1";
      break;
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
       let dragj = String.fromCharCode(111,95,52,56,95,115,105,110,116,0);
    let update_dW = 0.0;
    let sigmobq: Array<any> = [414, 676];
    let filledU = 5.0;
    let kuaishouB = String.fromCharCode(100,117,109,95,111,95,53,57,0);
    let uploadz = String.fromCharCode(112,95,51,57,95,117,110,115,101,101,110,0);
    let smallS = true;
    let switch_u0G: Array<any> = [String.fromCharCode(109,121,115,101,108,102,95,105,95,56,51,0), String.fromCharCode(117,95,53,49,95,104,115,99,97,108,101,114,0)];
    let rewindT = String.fromCharCode(102,95,52,57,95,99,108,117,116,115,0);
    let updatesd: Array<any> = [String.fromCharCode(116,104,114,101,101,115,116,97,116,101,95,102,95,53,48,0), String.fromCharCode(119,101,98,109,105,100,115,95,115,95,54,57,0), String.fromCharCode(103,112,111,115,116,102,105,108,116,101,114,95,113,95,54,54,0)];
    let stationsi = 3.0;
       let sendp = 1.0;
       let lessT = false;
      while (sendp > 5.22) {
         sendp /= Math.max(parseFloat(`${2 / (Math.max(5, parseInt(`${sendp}`)))}`), 2);
         break;
      }
         sendp += (parseFloat(`${parseInt(`${sendp}`) / (Math.max(8, (lessT ? 3 : 3)))}`));
       let matches6 = 5.0;
       let analyticu = 0.0;
         matches6 /= Math.max(4, (parseInt(`${matches6}`) % (Math.max(9, (lessT ? 1 : 3)))));
      let orange4 = lessT ? !lessT : lessT;
      do {
         lessT = matches6 >= sendp;
         if (orange4) {
            break;
         }
      } while (orange4 && (2.76 <= (analyticu + 4.54)));
       let bellQ = 0.0;
      uploadz += `${2 / (Math.max(8, parseInt(`${sendp}`)))}`;
       let temperaturez = 3.0;
      while (temperaturez > 1.57) {
          let bootsplash5: Array<any> = [430, 583];
          let anythinkI = 4;
         temperaturez += bootsplash5.length + 3;
         bootsplash5.push(anythinkI | anythinkI);
         break;
      }
       let tailx = 3;
      for (let j = 0; j < 3; j++) {
         temperaturez += 2 * tailx;
      }
      kuaishouB += `${2 << (Math.min(5, Math.abs(parseInt(`${temperaturez}`))))}`;
   for (let u = 0; u < 3; u++) {
      sigmobq.push((uploadz == String.fromCharCode(77,0) ? uploadz.length : (smallS ? 5 : 3)));
   }
      uploadz += `${((smallS ? 4 : 2))}`;
   while (!switch_u0G.includes(filledU)) {
       let tooltipss: Array<any> = [499, 126];
       let verticale = 4;
       let searchbar2 = String.fromCharCode(104,95,55,50,95,112,105,120,101,108,115,0);
       let humidityJ: Map<any, any> = new Map([[String.fromCharCode(117,95,50,54,95,115,115,108,114,111,111,116,115,0),String.fromCharCode(115,117,98,99,108,97,115,115,101,115,95,52,95,50,55,0)], [String.fromCharCode(105,95,56,52,95,105,111,101,114,114,110,111,109,101,109,0),String.fromCharCode(102,95,52,52,95,110,98,105,116,115,0)], [String.fromCharCode(114,101,113,117,101,115,116,95,52,95,57,55,0),String.fromCharCode(116,105,109,101,108,105,109,105,116,95,113,95,50,57,0)]]);
       let styles4 = 1.0;
      while (!tooltipss.includes(verticale)) {
         verticale >>= Math.min(Math.abs(parseInt(`${styles4}`)), 5);
         break;
      }
         searchbar2 += `${parseInt(`${styles4}`) % (Math.max(9, tooltipss.length))}`;
      for (let n = 0; n < 3; n++) {
         styles4 += 2 % (Math.max(9, verticale));
      }
       let module1 = String.fromCharCode(97,95,54,51,95,115,112,114,105,116,101,115,0);
      for (let x = 0; x < 1; x++) {
         tooltipss.push(module1.length);
      }
         styles4 -= humidityJ.size;
      while (!Array.from(humidityJ.keys()).includes(`${styles4}`)) {
         styles4 /= Math.max(5, 3);
         break;
      }
      while ((4.63 * styles4) <= 5.78) {
          let whistleU = String.fromCharCode(120,95,53,95,100,101,116,101,99,116,101,100,0);
          let connectionF: Map<any, any> = new Map([[String.fromCharCode(116,95,56,51,95,108,97,117,110,99,104,101,100,0),String.fromCharCode(115,104,97,100,101,114,95,99,95,56,49,0)], [String.fromCharCode(119,95,52,53,95,102,112,101,108,0),String.fromCharCode(119,95,56,50,95,101,97,103,97,105,110,0)]]);
         verticale *= whistleU.length ^ parseInt(`${styles4}`);
         whistleU += `${1 | connectionF.size}`;
         connectionF = new Map([[`${connectionF.size}`, 1]]);
         break;
      }
      while (3 >= (4 << (Math.min(4, Math.abs(verticale))))) {
         tooltipss = [humidityJ.size];
         break;
      }
          let bufferC = 0;
          let sinaS = String.fromCharCode(109,97,116,101,114,105,97,108,95,115,95,52,50,0);
         humidityJ = new Map([[module1, (module1 == String.fromCharCode(95,0) ? module1.length : verticale)]]);
         bufferC += (String.fromCharCode(106,0) == sinaS ? sinaS.length : bufferC);
          let leaguer = false;
          let borderlessj = String.fromCharCode(97,108,105,97,115,95,101,95,57,56,0);
          let frame_w7 = String.fromCharCode(121,95,53,51,95,112,105,120,101,108,115,0);
         verticale *= searchbar2.length;
         leaguer = frame_w7.length >= borderlessj.length;
         borderlessj += "3";
         frame_w7 += "1";
         tooltipss = [searchbar2.length >> (Math.min(Math.abs(3), 1))];
      while ((verticale << (Math.min(Math.abs(1), 1))) <= 3 && 1 <= (tooltipss.length << (Math.min(3, Math.abs(verticale))))) {
         verticale += 1 + module1.length;
         break;
      }
       let configN: Array<any> = [235, 720];
       let z_locks: Array<any> = [217, 221, 15];
          let foregroundi = String.fromCharCode(112,101,114,109,97,110,101,110,116,95,99,95,50,48,0);
          let t_unlockV = 3;
         tooltipss = [z_locks.length];
         foregroundi = `${3 >> (Math.min(1, Math.abs(t_unlockV)))}`;
         t_unlockV /= Math.max(2, t_unlockV);
      switch_u0G = [1 * searchbar2.length];
      break;
   }
      sigmobq = [3];
   for (let l = 0; l < 3; l++) {
       let time_3pZ = 3.0;
       let referrerv = 3.0;
       let helperC = String.fromCharCode(101,114,114,108,111,103,95,53,95,56,56,0);
       let shoot4 = 0.0;
         helperC = `${parseInt(`${referrerv}`) ^ helperC.length}`;
      while ((helperC.length / (Math.max(6, parseInt(`${time_3pZ}`)))) >= 1) {
         time_3pZ += parseInt(`${time_3pZ}`) | parseInt(`${referrerv}`);
         break;
      }
      while (1.3 == (shoot4 / 3)) {
         referrerv += 1 | parseInt(`${time_3pZ}`);
         break;
      }
          let privilegew = 5;
          let orientation3 = true;
          let searchbarN = 4;
         helperC += `${2 & parseInt(`${referrerv}`)}`;
         privilegew >>= Math.min(5, Math.abs(searchbarN));
         orientation3 = privilegew < 40;
         searchbarN <<= Math.min(Math.abs(searchbarN), 2);
         helperC = `${2 - helperC.length}`;
         referrerv /= Math.max(3, parseInt(`${shoot4}`));
      let linkG = helperC.length >= 7185066;
      do {
         helperC = "1";
         if (linkG) {
            break;
         }
      } while (((helperC.length + shoot4) == 3.71 || (4 >> (Math.min(2, helperC.length))) == 2) && linkG);
         time_3pZ -= parseInt(`${shoot4}`);
      let detailp = 5485117.0 <= referrerv;
      do {
         referrerv += parseInt(`${referrerv}`);
         if (detailp) {
            break;
         }
      } while (((referrerv * time_3pZ) <= 1.27 && (1.27 * time_3pZ) <= 1.22) && detailp);
         helperC = `${parseInt(`${referrerv}`)}`;
      while (5.9 >= (shoot4 * referrerv)) {
          let lessS = String.fromCharCode(107,95,51,95,104,111,114,110,0);
          let zhengpianl = String.fromCharCode(102,95,56,51,95,101,110,99,111,100,101,114,115,0);
         referrerv += lessS.length;
         lessS += `${zhengpianl.length}`;
         zhengpianl += `${zhengpianl.length & zhengpianl.length}`;
         break;
      }
      while ((4.87 + referrerv) >= 5.92 && 4 >= (parseInt(`${referrerv}`) + helperC.length)) {
         helperC += `${parseInt(`${time_3pZ}`)}`;
         break;
      }
      filledU += parseFloat(`${1}`);
   }
      kuaishouB += `${sigmobq.length}`;
   while (5.98 == (2.57 + filledU)) {
      smallS = 11 >= uploadz.length;
      break;
   }
      update_dW -= parseFloat(`${uploadz.length}`);
   for (let q = 0; q < 3; q++) {
      smallS = 30 <= uploadz.length;
   }
   let transfern = 9562370 >= switch_u0G.length;
   do {
       let minimizeC = String.fromCharCode(112,105,112,101,119,105,114,101,95,51,95,49,55,0);
       let singaporeY = 1;
       let mbjscommont = String.fromCharCode(112,95,55,51,95,99,112,111,115,0);
       let friendsf = 0.0;
       let suggestion3 = String.fromCharCode(97,117,116,111,115,99,114,111,108,108,105,110,103,95,120,95,54,50,0);
          let stringo = String.fromCharCode(109,95,51,49,95,115,121,110,99,109,97,114,107,101,114,0);
          let questr = String.fromCharCode(102,105,108,108,95,115,95,51,49,0);
         friendsf *= parseFloat(`${mbjscommont.length | minimizeC.length}`);
         stringo += `${stringo.length / 2}`;
         questr = `${questr.length}`;
      while (4.33 == (friendsf + 1.32)) {
         singaporeY %= Math.max(parseInt(`${friendsf}`) + 3, 1);
         break;
      }
         suggestion3 += `${2 ^ parseInt(`${friendsf}`)}`;
         suggestion3 += `${mbjscommont.length * minimizeC.length}`;
      if (suggestion3 != mbjscommont) {
         mbjscommont = `${singaporeY ^ 1}`;
      }
         friendsf -= parseFloat(`${suggestion3.length / 3}`);
      while ((1 + singaporeY) > 5 && (1 + singaporeY) > 4) {
         singaporeY &= suggestion3.length ^ singaporeY;
         break;
      }
          let mailB: Array<any> = [332, 425, 806];
          let appsl = 1.0;
         suggestion3 += `${(suggestion3 == String.fromCharCode(85,0) ? mailB.length : suggestion3.length)}`;
         mailB.push(parseInt(`${appsl}`));
         suggestion3 = "1";
      let unreadc = singaporeY <= 7110135;
      do {
         singaporeY += mbjscommont.length | minimizeC.length;
         if (unreadc) {
            break;
         }
      } while (unreadc && (3.50 < (singaporeY - friendsf)));
          let goale = false;
         mbjscommont += `${suggestion3.length}`;
         goale = !goale;
      for (let j = 0; j < 2; j++) {
         suggestion3 = `${(mbjscommont == String.fromCharCode(97,0) ? singaporeY : mbjscommont.length)}`;
      }
          let mintegralF = 4.0;
         mbjscommont += `${2 + parseInt(`${friendsf}`)}`;
         mintegralF -= parseFloat(`${1}`);
      let a_imagea = mbjscommont.length >= 6264881;
      do {
         mbjscommont += "1";
         if (a_imagea) {
            break;
         }
      } while ((4 >= mbjscommont.length) && a_imagea);
       let inactive5 = false;
       let shirtn = true;
      switch_u0G = [(suggestion3 == String.fromCharCode(98,0) ? suggestion3.length : (smallS ? 3 : 3))];
      if (transfern) {
         break;
      }
   } while (((5 >> (Math.min(4, switch_u0G.length))) >= 4 && 5 >= (switch_u0G.length + 5)) && transfern);
   while (5 <= (1 & updatesd.length) && 2 <= (rewindT.length & 1)) {
       let main_vl = 3;
       let string9: Map<any, any> = new Map([[String.fromCharCode(102,95,52,52,95,101,110,117,109,118,97,108,117,101,0),848], [String.fromCharCode(100,99,111,110,108,121,95,121,95,49,52,0),268]]);
      while (Array.from(string9.keys()).includes(`${main_vl}`)) {
         string9 = new Map([[`${string9.size}`, 3]]);
         break;
      }
      let rightA = string9.size <= 8671730;
      do {
         string9 = new Map([[`${string9.size}`, string9.size ^ 1]]);
         if (rightA) {
            break;
         }
      } while (rightA && (main_vl == string9.size));
         main_vl %= Math.max(string9.size, 2);
      while (2 >= (2 + string9.size)) {
          let floatingg = 0.0;
          let castV = String.fromCharCode(111,95,49,55,95,104,116,108,116,0);
         main_vl <<= Math.min(Math.abs(main_vl), 5);
         floatingg /= Math.max(2, 3 >> (Math.min(4, Math.abs(parseInt(`${floatingg}`)))));
         castV += `${(String.fromCharCode(49,0) == castV ? castV.length : parseInt(`${floatingg}`))}`;
         break;
      }
         string9.set(`${main_vl}`, string9.size);
      let logo1 = 4912605 >= main_vl;
      do {
          let successB = String.fromCharCode(99,111,109,98,105,110,97,116,111,114,95,107,95,55,53,0);
         main_vl ^= (successB == String.fromCharCode(109,0) ? main_vl : successB.length);
         if (logo1) {
            break;
         }
      } while (logo1 && ((string9.size & main_vl) == 3 || 4 == (main_vl & 3)));
      updatesd.push(updatesd.length);
      break;
   }

        console.log("err save vod!");

       let successO = 5.0;
       let activityo: Array<any> = [387, 497, 618];
          let controlsI = 4.0;
         activityo = [2 & parseInt(`${controlsI}`)];
      let chinaa = 8759775 >= activityo.length;
      do {
         activityo.push(3 << (Math.min(Math.abs(parseInt(`${successO}`)), 3)));
         if (chinaa) {
            break;
         }
      } while ((successO >= parseFloat(`${activityo.length}`)) && chinaa);
       let aboutI = false;
      if (5.98 < (parseFloat(`${activityo.length}`) / (Math.max(9, successO)))) {
         successO *= parseFloat(`${activityo.length}`);
      }
         activityo.push(((aboutI ? 4 : 4) % (Math.max(activityo.length, 9))));
         activityo = [parseInt(`${successO}`) << (Math.min(5, Math.abs(2)))];
      switch_u0G.push(1);
      sigmobq.push(3);
      sigmobq.push((uploadz == String.fromCharCode(53,0) ? (smallS ? 2 : 1) : uploadz.length));
   while ((filledU - 3.82) <= 4.22) {
      filledU *= parseFloat(`${dragj.length >> (Math.min(Math.abs(3), 2))}`);
      break;
   }
   while ((update_dW / (Math.max(parseFloat(`${rewindT.length}`), 10))) <= 3.58 || (update_dW / (Math.max(3.58, 9))) <= 3.69) {
      rewindT += `${parseInt(`${filledU}`)}`;
      break;
   }
       let scheduleO = 3;
      if ((scheduleO | 4) == 5 || (scheduleO | 4) == 4) {
         scheduleO /= Math.max(2 ^ scheduleO, 2);
      }
         scheduleO /= Math.max(4, scheduleO);
      let stringsb = scheduleO >= 9525840;
      do {
         scheduleO >>= Math.min(4, Math.abs(scheduleO));
         if (stringsb) {
            break;
         }
      } while ((scheduleO > 4) && stringsb);
      sigmobq = [dragj.length];
      update_dW *= parseFloat(`${2}`);
   let placeholderc = 9486974 <= switch_u0G.length;
   do {
      switch_u0G.push(sigmobq.length | 2);
      if (placeholderc) {
         break;
      }
   } while (placeholderc && ((switch_u0G.length % (Math.max(sigmobq.length, 6))) <= 4));
   if (rewindT.length > 1) {
      kuaishouB = `${rewindT.length ^ 2}`;
   }
       let fillv = String.fromCharCode(112,99,105,112,104,101,114,116,101,120,116,95,57,95,57,54,0);
      if (fillv.length > fillv.length) {
         fillv = `${fillv.length ^ 3}`;
      }
      let gmailS = fillv == String.fromCharCode(101,49,103,0);
      do {
         fillv = `${(fillv == String.fromCharCode(102,0) ? fillv.length : fillv.length)}`;
         if (gmailS) {
            break;
         }
      } while ((fillv.length == 3 && fillv != String.fromCharCode(51,0)) && gmailS);
         fillv = `${3 * fillv.length}`;
      uploadz += "2";
   for (let y = 0; y < 3; y++) {
      sigmobq = [(uploadz == String.fromCharCode(50,0) ? uploadz.length : parseInt(`${update_dW}`))];
   }
   for (let u = 0; u < 2; u++) {
       let sellp: Array<any> = [978, 839];
       let placementr = true;
       let overz = true;
      if (!placementr) {
         sellp.push(1);
      }
         sellp.push((2 - (overz ? 2 : 2)));
      uploadz += `${uploadz.length * 1}`;
   }
      uploadz = `${switch_u0G.length - 2}`;
        console.log(err);
      }
    };

    const deviceOrientationHandle = () => {
       let upgraden: Map<any, any> = new Map([[String.fromCharCode(112,111,108,108,95,53,95,56,52,0),524], [String.fromCharCode(115,111,102,116,116,104,114,101,115,104,95,97,95,55,0),803], [String.fromCharCode(115,101,110,100,101,114,115,95,99,95,50,54,0),467]]);
    let dycreatorr = 5.0;
    let animationa = String.fromCharCode(115,116,114,105,112,95,48,95,49,48,48,0);
    let resend9 = String.fromCharCode(98,117,105,108,100,99,111,110,102,95,97,95,52,50,0);
    let favoritey: Array<any> = [562, 241];
    let logoutn = false;
    let mbbanner2 = String.fromCharCode(116,95,54,53,95,105,109,112,111,114,116,97,110,99,101,0);
    let emojiw: Map<any, any> = new Map([[String.fromCharCode(109,95,51,52,95,114,101,108,111,97,100,105,110,103,0),573], [String.fromCharCode(109,97,110,97,103,101,95,52,95,49,55,0),426], [String.fromCharCode(109,95,52,51,95,105,110,105,116,105,97,108,105,122,101,0),481]]);
    let pressurew = String.fromCharCode(100,110,120,104,100,101,110,99,95,54,95,56,52,0);
    let floaterK: Map<any, any> = new Map([[String.fromCharCode(110,95,54,95,112,111,115,116,0),false ], [String.fromCharCode(97,115,99,98,110,95,100,95,56,52,0),false ]]);
   while (logoutn) {
      pressurew = "2";
      break;
   }
      emojiw = new Map([[`${upgraden.size}`, 2 & resend9.length]]);
   if (4 >= (1 + mbbanner2.length)) {
       let style4 = 3.0;
       let signinupz = String.fromCharCode(97,99,113,117,97,110,116,95,100,95,52,50,0);
       let tickedD = String.fromCharCode(114,101,102,115,95,55,95,55,51,0);
          let actionsU = 3;
          let selectedR = 3;
         style4 += 3;
         actionsU <<= Math.min(4, Math.abs(2 ^ selectedR));
         selectedR -= actionsU;
      for (let k = 0; k < 1; k++) {
          let matchesl = 5.0;
          let core1 = String.fromCharCode(100,95,51,57,95,116,101,120,116,117,114,101,100,0);
          let condensed0: Map<any, any> = new Map([[String.fromCharCode(105,95,55,95,108,105,110,107,105,110,103,0),364], [String.fromCharCode(115,111,117,114,99,101,115,95,108,95,52,48,0),235]]);
          let tickedP = 5.0;
          let playercommonX = String.fromCharCode(108,111,111,107,97,115,105,100,101,95,53,95,50,50,0);
         style4 /= Math.max(3, 3);
         matchesl += parseFloat(`${3 >> (Math.min(4, core1.length))}`);
         core1 += `${condensed0.size}`;
         condensed0 = new Map([[core1, parseInt(`${matchesl}`) ^ core1.length]]);
         tickedP -= parseFloat(`${condensed0.size}`);
         playercommonX += `${condensed0.size << (Math.min(Math.abs(2), 3))}`;
      }
      while (signinupz == String.fromCharCode(48,0) || 3 < tickedD.length) {
         signinupz = `${(signinupz == String.fromCharCode(116,0) ? parseInt(`${style4}`) : signinupz.length)}`;
         break;
      }
      if (signinupz != String.fromCharCode(117,0) || tickedD == String.fromCharCode(79,0)) {
         tickedD = `${3 - tickedD.length}`;
      }
          let firebase8 = String.fromCharCode(110,114,101,102,95,111,95,57,53,0);
         style4 -= signinupz.length;
         firebase8 += `${firebase8.length}`;
      let ewardedd = String.fromCharCode(100,108,109,100,112,53,52,56,54,0) == tickedD;
      do {
          let clearZ = true;
          let handlerV = String.fromCharCode(122,111,111,109,97,98,108,101,95,102,95,52,55,0);
          let streamingn = 0.0;
          let mailu = String.fromCharCode(100,95,51,56,95,102,114,97,109,101,115,105,122,101,115,0);
          let taiwani = String.fromCharCode(114,95,51,49,95,110,105,103,104,116,115,104,111,116,0);
         tickedD = `${mailu.length}`;
         clearZ = (((clearZ ? 87 : handlerV.length) - handlerV.length) < 87);
         streamingn /= Math.max(parseFloat(`${handlerV.length}`), 3);
         mailu = `${handlerV.length << (Math.min(Math.abs(1), 1))}`;
         taiwani = `${parseInt(`${streamingn}`)}`;
         if (ewardedd) {
            break;
         }
      } while (ewardedd && (signinupz == String.fromCharCode(72,0)));
       let largew = String.fromCharCode(109,95,49,56,95,107,101,121,115,0);
       let gmaily = String.fromCharCode(99,97,110,110,111,116,95,105,95,56,57,0);
         style4 -= (signinupz == String.fromCharCode(55,0) ? parseInt(`${style4}`) : signinupz.length);
      let controlw = style4 <= 8153914.0;
      do {
         style4 *= 3 * gmaily.length;
         if (controlw) {
            break;
         }
      } while (controlw && ((4.69 + style4) >= 1.13));
      favoritey.push(signinupz.length + pressurew.length);
   }

      

   if (favoritey.length >= 2) {
      animationa = `${(animationa == String.fromCharCode(114,0) ? parseInt(`${dycreatorr}`) : animationa.length)}`;
   }
   if ((emojiw.size << (Math.min(pressurew.length, 5))) > 3) {
       let dicel = String.fromCharCode(119,105,100,101,95,105,95,55,52,0);
       let applicationa = true;
       let serviceA: Map<any, any> = new Map([[String.fromCharCode(111,98,106,101,99,116,105,118,101,95,109,95,49,51,0),String.fromCharCode(114,101,102,112,116,114,95,110,95,57,55,0)], [String.fromCharCode(108,95,53,49,95,111,108,100,101,115,116,0),String.fromCharCode(106,95,51,54,95,99,97,112,105,116,97,108,105,122,105,110,103,0)], [String.fromCharCode(101,110,99,95,50,95,52,52,0),String.fromCharCode(104,95,51,57,95,97,99,111,100,101,99,0)]]);
       let holder6 = 4.0;
       let gestureK: Map<any, any> = new Map([[String.fromCharCode(113,112,101,108,95,50,95,54,56,0),140], [String.fromCharCode(117,95,51,57,95,116,101,109,112,108,97,116,101,0),366]]);
      if (holder6 < 1.41) {
         gestureK.set(`${holder6}`, gestureK.size << (Math.min(Math.abs(2), 2)));
      }
         dicel = `${parseInt(`${holder6}`)}`;
         applicationa = !applicationa;
         serviceA.set(`${holder6}`, 2);
      if (1.49 > (holder6 - 3.88)) {
         dicel = `${serviceA.size + 3}`;
      }
         gestureK = new Map([[`${serviceA.size}`, 2 >> (Math.min(2, Math.abs(serviceA.size)))]]);
         holder6 /= Math.max(parseFloat(`${dicel.length}`), 3);
          let acceptedZ = 0;
          let reminder1: Map<any, any> = new Map([[String.fromCharCode(110,95,56,51,95,97,116,99,104,0),String.fromCharCode(116,119,111,112,111,105,110,116,95,116,95,55,57,0)], [String.fromCharCode(98,95,49,49,95,99,111,110,100,105,116,105,111,110,115,0),String.fromCharCode(112,105,99,107,108,112,102,95,106,95,49,56,0)]]);
         gestureK.set(dicel, dicel.length);
         acceptedZ %= Math.max(4, acceptedZ);
         reminder1.set(`${acceptedZ}`, acceptedZ | 1);
         applicationa = gestureK.size > 99;
      let carouselI = applicationa ? !applicationa : applicationa;
      do {
         applicationa = 98 < gestureK.size || serviceA.size < 98;
         if (carouselI) {
            break;
         }
      } while (carouselI && (applicationa));
       let bodanZ = 0.0;
         holder6 *= parseFloat(`${3 + serviceA.size}`);
         gestureK.set(`${holder6}`, parseInt(`${holder6}`) / 1);
          let readA = true;
         dicel = `${dicel.length}`;
         readA = (!readA ? readA : !readA);
      let selecty = applicationa ? !applicationa : applicationa;
      do {
         applicationa = (gestureK.size + parseInt(`${bodanZ}`)) == 56;
         if (selecty) {
            break;
         }
      } while ((5.50 > holder6) && selecty);
      emojiw.set(`${animationa}`, gestureK.size + animationa.length);
   }
      animationa = `${1 << (Math.min(1, pressurew.length))}`;
      if (
        devicesOrientation === "LANDSCAPE-LEFT" ||
        devicesOrientation === "LANDSCAPE-RIGHT"
      ) {

   for (let n = 0; n < 2; n++) {
      resend9 = `${emojiw.size}`;
   }
   while (resend9.startsWith(`${logoutn}`)) {
      logoutn = emojiw.size <= 4 && logoutn;
      break;
   }
   if ((mbbanner2.length * emojiw.size) > 5) {
      mbbanner2 = `${((logoutn ? 5 : 1) - 3)}`;
   }
        setIsFullScreen(true);

   for (let b = 0; b < 3; b++) {
      pressurew = `${upgraden.size ^ favoritey.length}`;
   }
   if (emojiw.size == 4) {
      dycreatorr -= 3;
   }
   if ((favoritey.length | 1) >= 5 || 2 >= (favoritey.length | 1)) {
      favoritey.push(mbbanner2.length >> (Math.min(Math.abs(3), 4)));
   }
        

   if ((resend9.length << (Math.min(Math.abs(4), 4))) <= 5 && 4 <= (emojiw.size << (Math.min(resend9.length, 4)))) {
      resend9 += `${emojiw.size}`;
   }
       let pathd: Map<any, any> = new Map([[String.fromCharCode(100,111,102,102,115,101,116,115,95,112,95,54,57,0),12], [String.fromCharCode(103,115,109,100,101,99,95,105,95,54,48,0),168]]);
       let miniF = String.fromCharCode(112,95,55,55,95,100,101,112,101,110,100,101,110,116,0);
          let foregroundQ = String.fromCharCode(99,111,110,115,101,110,116,95,118,95,52,57,0);
         miniF = "3";
         foregroundQ = `${3 + foregroundQ.length}`;
      for (let k = 0; k < 1; k++) {
         pathd = new Map([[`${pathd.size}`, pathd.size]]);
      }
      for (let z = 0; z < 1; z++) {
          let downZ = 5.0;
          let chartF = 3.0;
         miniF = `${pathd.size - miniF.length}`;
         downZ -= parseInt(`${chartF}`);
         chartF *= parseFloat(`${3}`);
      }
      let uploadL = miniF == String.fromCharCode(111,98,56,95,116,0);
      do {
         miniF = `${(miniF == String.fromCharCode(88,0) ? pathd.size : miniF.length)}`;
         if (uploadL) {
            break;
         }
      } while ((pathd.size == 2) && uploadL);
         pathd = new Map([[`${pathd.size}`, 3 * miniF.length]]);
      while (3 >= (pathd.size % 5)) {
          let pause5 = false;
         miniF += `${((pause5 ? 4 : 4) ^ pathd.size)}`;
         break;
      }
      animationa = `${2 << (Math.min(2, Math.abs(parseInt(`${dycreatorr}`))))}`;
      animationa = `${emojiw.size}`;
        StatusBar.setHidden(true);

      logoutn = ((mbbanner2.length % (Math.max(4, (logoutn ? mbbanner2.length : 83)))) == 83);
   while ((parseInt(`${dycreatorr}`) + 1) == 4 || (1 + resend9.length) == 4) {
       let apps4 = String.fromCharCode(115,105,103,102,105,103,95,50,95,53,50,0);
      if (5 > apps4.length) {
         apps4 += `${apps4.length}`;
      }
          let zhubo3 = true;
          let gradlewb = String.fromCharCode(99,104,101,99,107,105,110,95,99,95,50,49,0);
          let annerk = 2.0;
         apps4 += `${(parseInt(`${annerk}`) + (zhubo3 ? 1 : 3))}`;
         zhubo3 = gradlewb.length <= 94;
         gradlewb += `${gradlewb.length * gradlewb.length}`;
       let listB: Map<any, any> = new Map([[String.fromCharCode(97,116,117,114,97,116,105,111,110,95,114,95,52,0),920], [String.fromCharCode(113,95,55,54,95,105,112,118,105,100,101,111,0),935], [String.fromCharCode(102,112,99,95,106,95,54,56,0),959]]);
      dycreatorr -= 2 % (Math.max(2, resend9.length));
      break;
   }
      floaterK = new Map([[`${emojiw.size}`, mbbanner2.length]]);

        lockOrientation(devicesOrientation);
      } else if (devicesOrientation === "PORTRAIT") {

      pressurew = `${emojiw.size / (Math.max(3, 4))}`;
   if (pressurew.startsWith(`${floaterK.size}`)) {
      floaterK = new Map([[animationa, animationa.length - mbbanner2.length]]);
   }
      floaterK = new Map([[`${favoritey.length}`, favoritey.length]]);
        setIsFullScreen(false);

      dycreatorr -= resend9.length;
   let yellowG = String.fromCharCode(48,52,113,0) == resend9;
   do {
       let b_managerk = String.fromCharCode(99,97,116,101,103,111,114,105,101,115,95,53,95,52,56,0);
       let screene = 2.0;
         b_managerk = `${parseInt(`${screene}`) ^ 3}`;
      while (1 <= (b_managerk.length % (Math.max(5, 6))) && 3 <= (5 | b_managerk.length)) {
         b_managerk = "3";
         break;
      }
       let bootsplashA = String.fromCharCode(109,97,107,101,110,97,110,95,100,95,56,50,0);
       let preview7 = String.fromCharCode(100,102,115,116,95,48,95,50,0);
      for (let m = 0; m < 3; m++) {
          let giftf = 2.0;
         preview7 += `${parseInt(`${giftf}`)}`;
      }
          let pangleL = 5.0;
          let previewp = 0.0;
         bootsplashA = `${parseInt(`${screene}`)}`;
         pangleL *= 1 * parseInt(`${previewp}`);
         previewp *= parseFloat(`${parseInt(`${previewp}`) | parseInt(`${pangleL}`)}`);
         bootsplashA += `${(String.fromCharCode(97,0) == bootsplashA ? bootsplashA.length : parseInt(`${screene}`))}`;
      resend9 += `${mbbanner2.length << (Math.min(Math.abs(2), 2))}`;
      if (yellowG) {
         break;
      }
   } while (yellowG && (resend9.includes(`${emojiw.size}`)));
      favoritey.push(pressurew.length ^ 1);
        

      logoutn = upgraden.size < pressurew.length;
   while (dycreatorr < 3.31) {
      logoutn = resend9.length > animationa.length;
      break;
   }
       let ewarded_ = String.fromCharCode(115,113,108,99,105,112,104,101,114,95,53,95,49,48,48,0);
       let commonl = String.fromCharCode(113,95,56,49,95,102,105,110,97,108,105,122,101,0);
       let borderlessQ = 3.0;
         ewarded_ += `${(commonl == String.fromCharCode(79,0) ? commonl.length : parseInt(`${borderlessQ}`))}`;
          let apple2: Array<any> = [610, 276];
          let upgradej = String.fromCharCode(109,101,109,111,114,121,95,113,95,57,48,0);
         ewarded_ += `${1 >> (Math.min(2, ewarded_.length))}`;
         apple2.push(apple2.length >> (Math.min(Math.abs(2), 4)));
         upgradej += `${upgradej.length}`;
          let greyL = String.fromCharCode(106,109,111,114,101,99,102,103,95,109,95,54,48,0);
          let time_7q = 0.0;
         commonl += `${(commonl == String.fromCharCode(90,0) ? commonl.length : parseInt(`${borderlessQ}`))}`;
         greyL += `${parseInt(`${time_7q}`) / (Math.max(1, 10))}`;
         time_7q *= parseFloat(`${parseInt(`${time_7q}`)}`);
      for (let e = 0; e < 3; e++) {
          let typesq = 5.0;
          let sportZ = 3;
         commonl = `${parseInt(`${typesq}`)}`;
         typesq *= sportZ;
      }
         ewarded_ = `${commonl.length}`;
         commonl = `${ewarded_.length}`;
         borderlessQ += parseFloat(`${3}`);
          let largeC = String.fromCharCode(116,109,109,98,95,48,95,55,49,0);
          let linkK = 4;
         ewarded_ += `${3 - largeC.length}`;
         largeC += `${linkK * linkK}`;
         ewarded_ = `${commonl.length}`;
      upgraden.set(resend9, parseInt(`${borderlessQ}`) / (Math.max(2, 7)));
        StatusBar.setHidden(false);

   let macauI = String.fromCharCode(112,95,51,0) == pressurew;
   do {
      pressurew = `${(String.fromCharCode(120,0) == resend9 ? resend9.length : upgraden.size)}`;
      if (macauI) {
         break;
      }
   } while ((4 >= (pressurew.length >> (Math.min(5, Math.abs(floaterK.size))))) && macauI);
       let light0: Map<any, any> = new Map([[String.fromCharCode(109,95,54,53,95,101,110,99,111,100,105,110,103,115,0),5], [String.fromCharCode(98,111,117,110,100,115,95,119,95,50,49,0),122]]);
      for (let w = 0; w < 3; w++) {
         light0 = new Map([[`${light0.size}`, 3]]);
      }
         light0.set(`${light0.size}`, light0.size);
          let moduleU = String.fromCharCode(109,95,57,57,95,102,116,118,98,108,97,110,107,0);
          let minivods = String.fromCharCode(117,110,116,114,97,99,107,95,99,95,54,55,0);
          let goalc = false;
         light0.set(minivods, moduleU.length);
         moduleU = `${((goalc ? 1 : 5) / (Math.max(9, (goalc ? 3 : 1))))}`;
         minivods = `${((goalc ? 2 : 2))}`;
      pressurew += `${pressurew.length % 1}`;
       let handlerC = String.fromCharCode(102,95,57,56,95,109,97,107,101,110,97,110,0);
       let collectionG = String.fromCharCode(104,95,55,54,95,98,108,105,110,100,105,110,103,0);
       let annerb = String.fromCharCode(119,95,55,52,95,119,97,118,114,101,97,100,101,114,0);
      while (!collectionG.includes(handlerC)) {
         handlerC = `${3 ^ collectionG.length}`;
         break;
      }
         annerb = `${handlerC.length}`;
      while (handlerC != String.fromCharCode(65,0)) {
          let eighteene = String.fromCharCode(119,95,57,53,95,117,115,101,114,99,116,120,0);
          let playA = String.fromCharCode(111,114,105,103,95,97,95,49,48,48,0);
          let commonS = 4;
          let megaphonew = 4;
         annerb += "1";
         eighteene = `${eighteene.length >> (Math.min(3, Math.abs(megaphonew)))}`;
         playA = `${playA.length}`;
         commonS *= playA.length << (Math.min(Math.abs(3), 2));
         megaphonew *= 1 + eighteene.length;
         break;
      }
       let backS = String.fromCharCode(115,95,52,52,95,101,120,116,101,110,100,105,110,103,0);
       let nativeex_ = String.fromCharCode(101,95,52,52,95,104,117,103,103,105,110,103,0);
      let matchesf = String.fromCharCode(50,57,111,109,101,114,52,0) == nativeex_;
      do {
         nativeex_ += `${backS.length}`;
         if (matchesf) {
            break;
         }
      } while ((handlerC.endsWith(`${nativeex_.length}`)) && matchesf);
      floaterK = new Map([[`${emojiw.size}`, resend9.length ^ 2]]);

        lockOrientation(devicesOrientation);
      }
    };

    const onToggleFullScreen = useCallback(() => {
       let hooks3 = String.fromCharCode(106,95,56,57,95,117,115,100,0);
    let arrow7 = String.fromCharCode(99,95,56,48,95,105,115,109,101,109,115,101,116,0);
    let commonu = String.fromCharCode(111,112,101,110,95,114,95,54,56,0);
    let store2 = 4;
    let awayj: Array<any> = [653, 972, 572];
    let submitC = 2.0;
    let yellowC = 2;
    let mbnativeC = String.fromCharCode(101,110,116,105,116,105,101,115,95,49,95,55,56,0);
    let configurei = 2;
    let megaphoneQ = 3;
   for (let v = 0; v < 1; v++) {
      store2 >>= Math.min(5, Math.abs(parseInt(`${submitC}`)));
   }
   if (4 == (hooks3.length | 1) || 4 == (yellowC | 1)) {
       let temp3 = 1.0;
       let transfer6: Array<any> = [179, 626, 441];
       let episodej = String.fromCharCode(122,95,54,56,95,97,118,102,111,114,109,97,116,0);
       let logoutJ = 3;
      for (let s = 0; s < 1; s++) {
         logoutJ <<= Math.min(1, Math.abs(parseInt(`${temp3}`) * transfer6.length));
      }
          let plusP = String.fromCharCode(105,111,118,101,99,105,110,95,116,95,55,54,0);
          let entryV = String.fromCharCode(99,104,97,114,97,99,116,101,100,95,119,95,50,0);
          let mappingl = String.fromCharCode(99,111,115,105,95,107,95,55,52,0);
         logoutJ |= transfer6.length / (Math.max(3, 8));
         plusP += `${entryV.length | mappingl.length}`;
         entryV = `${(mappingl == String.fromCharCode(122,0) ? mappingl.length : entryV.length)}`;
       let long_jwF = String.fromCharCode(121,95,56,50,95,104,101,105,99,0);
       let main_w4 = String.fromCharCode(117,116,105,108,115,95,111,95,55,54,0);
         temp3 += parseFloat(`${episodej.length}`);
      if (5 < (parseInt(`${temp3}`) * episodej.length) || (parseFloat(`${episodej.length}`) * temp3) < 5.71) {
         episodej += `${episodej.length * 2}`;
      }
          let inactiveG = String.fromCharCode(102,109,97,100,100,95,55,95,57,57,0);
          let controlsR = 5.0;
         episodej += `${parseInt(`${controlsR}`) >> (Math.min(Math.abs(1), 1))}`;
         inactiveG += `${2 << (Math.min(3, inactiveG.length))}`;
         controlsR += parseFloat(`${inactiveG.length / 2}`);
          let dice_ = String.fromCharCode(97,116,116,97,99,107,95,113,95,52,54,0);
          let reminderu = 2.0;
          let clubF = 5;
         main_w4 = `${(String.fromCharCode(111,0) == episodej ? main_w4.length : episodej.length)}`;
         dice_ += `${parseInt(`${reminderu}`) ^ 1}`;
         reminderu += (parseFloat(`${dice_ == String.fromCharCode(80,0) ? parseInt(`${reminderu}`) : dice_.length}`));
         clubF >>= Math.min(4, Math.abs(clubF >> (Math.min(4, Math.abs(3)))));
         temp3 /= Math.max(1, parseFloat(`${parseInt(`${temp3}`) / (Math.max(10, long_jwF.length))}`));
      for (let u = 0; u < 3; u++) {
         main_w4 += "3";
      }
      for (let n = 0; n < 3; n++) {
         main_w4 += `${episodej.length}`;
      }
         episodej = `${parseInt(`${temp3}`)}`;
          let confirmation8 = false;
          let membershipE = String.fromCharCode(106,95,57,51,95,112,114,101,118,105,101,119,115,0);
         transfer6 = [1 >> (Math.min(Math.abs(parseInt(`${temp3}`)), 2))];
         confirmation8 = membershipE.endsWith(`${confirmation8}`);
         membershipE += `${membershipE.length & 2}`;
      hooks3 += `${3 << (Math.min(Math.abs(yellowC), 2))}`;
   }

      if (
        appOrientation === "LANDSCAPE-LEFT" ||
        appOrientation === "LANDSCAPE-RIGHT"
      ) {

      commonu += `${mbnativeC.length % 2}`;
   if (5 >= yellowC) {
      yellowC <<= Math.min(Math.abs(awayj.length % 2), 4);
   }
        lockOrientation("PORTRAIT");

   if (hooks3.includes(arrow7)) {
       let update_f6T = String.fromCharCode(101,95,53,53,95,97,105,109,100,0);
       let targeta = String.fromCharCode(107,95,54,49,95,105,100,101,110,116,105,102,121,0);
       let benefit1 = String.fromCharCode(105,110,116,101,102,97,99,101,95,118,95,53,52,0);
         update_f6T = `${update_f6T.length | 2}`;
         update_f6T += `${targeta.length}`;
      for (let i = 0; i < 1; i++) {
         benefit1 = `${targeta.length}`;
      }
         targeta = "1";
      while (targeta.length < 4) {
         update_f6T = `${1 | update_f6T.length}`;
         break;
      }
         targeta += `${benefit1.length}`;
       let sortS = String.fromCharCode(115,113,114,116,95,103,95,53,49,0);
      if (benefit1 != targeta) {
         targeta = `${sortS.length}`;
      }
      let yingw = sortS.length <= 6998258;
      do {
         sortS += "2";
         if (yingw) {
            break;
         }
      } while ((benefit1 != sortS) && yingw);
      arrow7 = `${awayj.length >> (Math.min(Math.abs(2), 3))}`;
   }
      commonu = "2";
        setIsFullScreen(false);

   if (arrow7 == String.fromCharCode(111,0)) {
      hooks3 = `${store2 ^ 3}`;
   }
   let minimizeU = submitC >= 7482232.0;
   do {
       let moditye = String.fromCharCode(97,114,114,97,110,103,101,100,95,121,95,56,57,0);
       let condensedc = 1.0;
          let styleZ = 2.0;
          let yellowA: Map<any, any> = new Map([[String.fromCharCode(113,95,50,55,95,104,97,108,100,99,108,117,116,0),859], [String.fromCharCode(104,95,57,95,105,115,112,111,114,116,0),593]]);
          let gnewsI: Map<any, any> = new Map([[String.fromCharCode(106,95,54,49,95,102,116,118,98,108,97,110,107,0),209], [String.fromCharCode(102,105,108,108,101,114,95,121,95,55,50,0),773], [String.fromCharCode(99,111,110,102,105,103,95,101,95,53,48,0),225]]);
         condensedc *= parseInt(`${condensedc}`) - gnewsI.size;
         styleZ += 1 * yellowA.size;
         yellowA = new Map([[`${yellowA.size}`, parseInt(`${styleZ}`) ^ 3]]);
         gnewsI.set(`${styleZ}`, parseInt(`${styleZ}`) - yellowA.size);
      while ((2.79 - condensedc) < 4.72) {
          let humidityI = 3;
         moditye = `${moditye.length * 2}`;
         humidityI -= humidityI % (Math.max(4, humidityI));
         break;
      }
         condensedc /= Math.max(5, 1);
         condensedc += 3 & parseInt(`${condensedc}`);
          let greyJ = String.fromCharCode(114,95,55,49,95,109,111,100,105,102,121,0);
         moditye += `${greyJ.length >> (Math.min(Math.abs(2), 1))}`;
         moditye += `${1 / (Math.max(7, moditye.length))}`;
      submitC += parseFloat(`${commonu.length}`);
      if (minimizeU) {
         break;
      }
   } while ((5 > (1 * awayj.length) && 1.23 > (submitC / 4.83)) && minimizeU);
        

   for (let x = 0; x < 3; x++) {
      mbnativeC += `${awayj.length % 2}`;
   }
   if (awayj.includes(yellowC)) {
      yellowC *= (String.fromCharCode(113,0) == arrow7 ? arrow7.length : store2);
   }
        StatusBar.setHidden(false);

      yellowC ^= 3 ^ arrow7.length;
   if ((mbnativeC.length / 3) > 4) {
      mbnativeC = `${(String.fromCharCode(112,0) == commonu ? parseInt(`${submitC}`) : commonu.length)}`;
   }

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      } else {

   if (5.56 == (parseFloat(`${yellowC}`) / (Math.max(submitC, 6))) || 3 == (yellowC << (Math.min(Math.abs(4), 4)))) {
      yellowC <<= Math.min(4, Math.abs(megaphoneQ));
   }
   for (let f = 0; f < 2; f++) {
      mbnativeC += `${(arrow7 == String.fromCharCode(57,0) ? parseInt(`${submitC}`) : arrow7.length)}`;
   }
        lockOrientation("LANDSCAPE");

      megaphoneQ |= configurei << (Math.min(Math.abs(3), 5));
   let placeholder9 = 7345936.0 >= submitC;
   do {
      submitC -= parseFloat(`${2}`);
      if (placeholder9) {
         break;
      }
   } while (placeholder9 && ((megaphoneQ % (Math.max(5, 8))) > 5 && 2 > (5 % (Math.max(3, megaphoneQ)))));
        setIsFullScreen(true);

      mbnativeC += `${megaphoneQ}`;
      arrow7 = `${hooks3.length << (Math.min(3, Math.abs(megaphoneQ)))}`;
        

      submitC /= Math.max(1, parseFloat(`${3 & arrow7.length}`));
   let placeholderI = configurei <= 8335500;
   do {
      configurei >>= Math.min(Math.abs(2), 5);
      if (placeholderI) {
         break;
      }
   } while (placeholderI && (3 <= (1 | configurei) || 1 <= (awayj.length | configurei)));
        StatusBar.setHidden(true);

       let configV = 1;
         configV |= 1 * configV;
      for (let m = 0; m < 3; m++) {
          let annerM = 4.0;
          let vignetteA: Array<any> = [352, 641, 479];
          let handlerF = String.fromCharCode(119,111,114,100,95,98,95,53,52,0);
         configV ^= 1;
         annerM += vignetteA.length & 2;
         vignetteA = [(String.fromCharCode(103,0) == handlerF ? parseInt(`${annerM}`) : handlerF.length)];
      }
         configV |= configV;
      yellowC += mbnativeC.length;
   for (let t = 0; t < 1; t++) {
       let plus5: Map<any, any> = new Map([[String.fromCharCode(115,111,108,105,100,99,111,108,111,114,95,52,95,55,53,0),String.fromCharCode(108,111,110,103,98,105,103,95,101,95,55,53,0)], [String.fromCharCode(116,105,108,101,100,95,49,95,51,56,0),String.fromCharCode(102,105,108,116,101,114,103,114,97,112,104,95,105,95,50,50,0)], [String.fromCharCode(103,95,57,52,95,118,97,108,105,100,97,116,111,114,115,0),String.fromCharCode(109,95,49,48,95,109,112,105,98,110,0)]]);
       let linke = String.fromCharCode(119,95,49,48,48,95,109,111,100,101,109,0);
       let floaterJ = String.fromCharCode(115,104,111,119,95,111,95,51,49,0);
       let zoomX = String.fromCharCode(114,97,110,107,115,95,51,95,53,49,0);
          let clockf = String.fromCharCode(108,111,103,108,101,118,101,108,95,48,95,50,54,0);
         linke = `${zoomX.length}`;
         clockf = `${3 * clockf.length}`;
          let macau5: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,95,101,95,49,54,0),false ], [String.fromCharCode(116,104,101,109,101,115,95,50,95,48,0),true ]]);
         zoomX += `${macau5.size % (Math.max(plus5.size, 6))}`;
      while (3 == floaterJ.length) {
         floaterJ = `${zoomX.length}`;
         break;
      }
      if ((1 + plus5.size) > 5 && (plus5.size + 1) > 2) {
         plus5.set(floaterJ, (floaterJ == String.fromCharCode(106,0) ? floaterJ.length : plus5.size));
      }
      while (linke.length > floaterJ.length) {
          let typesa = false;
          let applicationk = true;
          let pingO: Array<any> = [779, 898];
          let xvodF = 2.0;
         linke = `${((typesa ? 1 : 4) | linke.length)}`;
         typesa = 11.86 > xvodF || pingO.length > 29;
         applicationk = !applicationk;
         pingO = [pingO.length % 2];
         xvodF -= parseInt(`${xvodF}`) * pingO.length;
         break;
      }
       let sheetW = 4;
      let stationsL = sheetW >= 9495505;
      do {
         sheetW += (zoomX == String.fromCharCode(100,0) ? zoomX.length : floaterJ.length);
         if (stationsL) {
            break;
         }
      } while (((4 | sheetW) <= 5 || (4 | sheetW) <= 2) && stationsL);
      while (sheetW >= 1) {
          let screeno = 0;
          let nterstitialv: Map<any, any> = new Map([[String.fromCharCode(121,95,57,52,95,100,117,109,112,112,97,99,107,101,116,0),String.fromCharCode(104,95,56,95,100,105,115,99,111,110,110,101,99,116,105,111,110,0)], [String.fromCharCode(110,95,55,51,95,115,97,109,101,113,0),String.fromCharCode(117,112,100,97,116,97,98,108,101,95,114,95,54,50,0)]]);
          let anytimep = 3.0;
          let mailu = String.fromCharCode(109,95,54,51,95,98,97,99,107,119,97,114,100,115,0);
          let stationsx: Map<any, any> = new Map([[String.fromCharCode(122,95,56,57,95,112,114,101,116,99,104,0),715], [String.fromCharCode(105,109,112,111,114,116,97,110,116,95,117,95,52,0),278], [String.fromCharCode(113,115,99,97,108,101,113,112,95,50,95,54,57,0),293]]);
         plus5.set(`${screeno}`, plus5.size << (Math.min(4, Math.abs(screeno))));
         nterstitialv.set(`${mailu}`, stationsx.size & 2);
         anytimep /= Math.max(1, parseFloat(`${nterstitialv.size}`));
         mailu += `${stationsx.size}`;
         break;
      }
         floaterJ += "2";
      let popupy = plus5.size <= 6034860;
      do {
         plus5.set(`${linke}`, (linke == String.fromCharCode(52,0) ? linke.length : plus5.size));
         if (popupy) {
            break;
         }
      } while ((3 == (floaterJ.length << (Math.min(Math.abs(4), 4)))) && popupy);
      for (let i = 0; i < 1; i++) {
         floaterJ = `${3 >> (Math.min(2, linke.length))}`;
      }
          let holderG: Map<any, any> = new Map([[String.fromCharCode(119,97,114,110,105,110,103,115,95,117,95,53,56,0),341], [String.fromCharCode(100,111,110,97,116,105,111,110,95,98,95,53,53,0),741]]);
          let sideH = 2.0;
         sheetW >>= Math.min(5, floaterJ.length);
         holderG = new Map([[`${holderG.size}`, parseInt(`${sideH}`)]]);
         sideH -= parseFloat(`${holderG.size}`);
      arrow7 += `${store2}`;
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
      if (disableSeek.current === true) return
      hideSeekProgress();
      time = Math.min(Math.max(time, 0), duration);
      try {
        if (videoPlayerRef.current && !isNaN(time)) {
          videoPlayerRef.current.seek(time);
          setCurrentTime(time);
        }
      } catch (err) {
       let phoneT = String.fromCharCode(107,101,121,104,97,115,104,95,105,95,55,54,0);
    let store7 = false;
    let info5 = 0.0;
    let yellowH = String.fromCharCode(115,97,119,95,97,95,55,50,0);
    let sportb = 4.0;
    let applicationd: Map<any, any> = new Map([[String.fromCharCode(98,108,111,98,115,95,100,95,50,50,0),String.fromCharCode(97,110,99,104,111,114,95,55,95,51,53,0)], [String.fromCharCode(121,95,51,95,97,100,105,100,0),String.fromCharCode(114,101,102,111,99,117,115,95,116,95,57,51,0)], [String.fromCharCode(103,95,57,49,95,99,111,100,101,114,0),String.fromCharCode(101,110,117,109,101,114,97,116,111,114,115,95,100,95,50,57,0)]]);
    let submitD: Map<any, any> = new Map([[String.fromCharCode(114,101,118,97,108,105,100,97,116,105,111,110,95,52,95,55,52,0),552], [String.fromCharCode(120,95,54,49,95,117,110,109,111,118,101,100,0),461]]);
    let read3: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,117,116,101,115,95,115,95,51,49,0),195], [String.fromCharCode(102,111,114,119,97,114,100,101,100,95,113,95,48,0),895], [String.fromCharCode(102,95,56,53,0),832]]);
    let mbridgeA = String.fromCharCode(102,95,50,95,111,116,105,102,105,99,97,116,105,111,110,0);
    let smallw = String.fromCharCode(114,101,109,111,118,101,100,95,105,95,49,49,0);
   if (!store7) {
      read3 = new Map([[`${applicationd.size}`, applicationd.size]]);
   }
   for (let p = 0; p < 1; p++) {
      applicationd.set(mbridgeA, 3 - parseInt(`${info5}`));
   }
      info5 *= parseFloat(`${parseInt(`${info5}`)}`);
      applicationd = new Map([[`${sportb}`, (String.fromCharCode(56,0) == yellowH ? parseInt(`${sportb}`) : yellowH.length)]]);
       let actionY = 2.0;
       let rewind6 = String.fromCharCode(120,95,52,50,95,105,110,116,101,114,97,99,116,111,114,0);
       let mutedk = 2.0;
      for (let a = 0; a < 2; a++) {
         rewind6 = "1";
      }
      if ((rewind6.length * parseInt(`${actionY}`)) >= 3) {
          let layoutJ = 0.0;
          let mbsplashC = 3.0;
          let brightnessl = String.fromCharCode(112,95,53,95,108,97,114,103,101,115,116,0);
          let collection8: Map<any, any> = new Map([[String.fromCharCode(120,95,56,57,95,100,97,116,97,99,101,110,116,101,114,0),true ], [String.fromCharCode(105,109,101,110,115,105,111,110,95,106,95,55,52,0),false ], [String.fromCharCode(115,104,97,114,101,100,100,111,119,110,108,111,97,100,95,51,95,55,51,0),false ]]);
          let showS = String.fromCharCode(98,108,111,99,107,101,114,95,52,95,56,52,0);
         rewind6 += `${showS.length}`;
         layoutJ *= 1;
         mbsplashC /= Math.max(parseFloat(`${brightnessl.length}`), 5);
         brightnessl = `${parseInt(`${mbsplashC}`) | parseInt(`${layoutJ}`)}`;
         collection8.set(`${mbsplashC}`, parseInt(`${mbsplashC}`) / 2);
         showS = `${parseInt(`${layoutJ}`)}`;
      }
          let trashE = String.fromCharCode(106,95,50,53,95,115,101,110,99,0);
          let searchg = String.fromCharCode(116,95,57,52,95,114,103,98,120,0);
         actionY += parseFloat(`${3 | parseInt(`${mutedk}`)}`);
         trashE += `${trashE.length ^ 2}`;
         searchg = "1";
          let dragd = 4.0;
          let soundz = String.fromCharCode(112,95,53,55,95,113,117,111,116,105,101,110,116,0);
          let nalyticsx: Map<any, any> = new Map([[String.fromCharCode(108,95,57,49,95,101,114,114,109,115,103,0),759], [String.fromCharCode(116,114,105,99,107,108,101,95,54,95,54,50,0),389]]);
         rewind6 += `${parseInt(`${mutedk}`) & 3}`;
         dragd /= Math.max(3, parseInt(`${dragd}`));
         soundz += `${nalyticsx.size}`;
         nalyticsx.set(`${dragd}`, parseInt(`${dragd}`) / (Math.max(10, soundz.length)));
       let modityj = 0;
      for (let a = 0; a < 3; a++) {
         rewind6 += `${rewind6.length + 2}`;
      }
      if (3 == (5 * parseInt(`${mutedk}`)) && 5 == (5 & rewind6.length)) {
         rewind6 = `${(String.fromCharCode(82,0) == rewind6 ? parseInt(`${mutedk}`) : rewind6.length)}`;
      }
       let private_ij7 = 1.0;
       let layout1 = 2.0;
      let unreadA = layout1 >= 5151336.0;
      do {
         layout1 -= parseFloat(`${modityj * parseInt(`${layout1}`)}`);
         if (unreadA) {
            break;
         }
      } while ((2 <= rewind6.length) && unreadA);
      applicationd = new Map([[`${applicationd.size}`, 1]]);
   while ((1 | yellowH.length) < 5 && (applicationd.size | yellowH.length) < 1) {
      applicationd = new Map([[`${submitD.size}`, mbridgeA.length - 3]]);
      break;
   }
   for (let j = 0; j < 2; j++) {
      mbridgeA += `${yellowH.length}`;
   }
   for (let e = 0; e < 2; e++) {
      mbridgeA = `${applicationd.size >> (Math.min(Math.abs(3), 5))}`;
   }
      info5 -= parseFloat(`${mbridgeA.length >> (Math.min(Math.abs(1), 4))}`);
   while ((info5 - parseFloat(`${submitD.size}`)) >= 4.87) {
       let sportsG = String.fromCharCode(97,95,56,51,95,100,101,99,114,121,112,116,105,111,110,0);
       let with_1C = 2.0;
       let miniK = String.fromCharCode(120,95,50,56,95,104,108,105,116,0);
          let turnD = String.fromCharCode(104,95,54,48,95,100,105,115,97,112,112,101,97,114,105,110,103,0);
         miniK = `${2 | parseInt(`${with_1C}`)}`;
         turnD += "3";
         sportsG = `${miniK.length}`;
         sportsG = `${3 | sportsG.length}`;
      while (sportsG.length >= 1) {
          let storeI = String.fromCharCode(105,95,52,95,99,111,110,110,101,99,116,105,111,110,115,0);
          let calendarJ = 0;
          let reactn = 3;
         with_1C *= parseFloat(`${parseInt(`${with_1C}`) * reactn}`);
         storeI += "2";
         calendarJ -= 3;
         reactn %= Math.max(5, storeI.length);
         break;
      }
      for (let i = 0; i < 1; i++) {
         with_1C -= (parseFloat(`${String.fromCharCode(66,0) == sportsG ? sportsG.length : parseInt(`${with_1C}`)}`));
      }
      for (let z = 0; z < 1; z++) {
         miniK = `${(miniK == String.fromCharCode(90,0) ? parseInt(`${with_1C}`) : miniK.length)}`;
      }
       let related1 = 4.0;
      while ((3.84 * with_1C) > 3.67) {
         sportsG += `${miniK.length}`;
         break;
      }
         sportsG += "2";
      submitD.set(`${store7}`, read3.size & 3);
      break;
   }
   for (let r = 0; r < 1; r++) {
      sportb /= Math.max(parseFloat(`${mbridgeA.length}`), 3);
   }
   let comment1 = store7 ? !store7 : store7;
   do {
       let watchg = String.fromCharCode(115,101,103,109,101,110,116,101,100,95,103,95,55,50,0);
       let backwardu = String.fromCharCode(101,99,109,117,108,116,95,116,95,50,49,0);
       let helperJ: Array<any> = [332, 161];
       let fastd = false;
         backwardu += `${backwardu.length}`;
       let detailsC = String.fromCharCode(97,100,100,105,116,105,111,110,115,95,98,95,57,52,0);
      if (detailsC != watchg) {
          let hejiL = 1;
         watchg += "2";
         hejiL >>= Math.min(2, Math.abs(hejiL));
      }
      for (let t = 0; t < 2; t++) {
         backwardu += `${2 << (Math.min(2, detailsC.length))}`;
      }
       let j_centerY = 3.0;
      if (watchg.length <= 2) {
         watchg = `${3 >> (Math.min(1, helperJ.length))}`;
      }
       let collections: Array<any> = [491, 47, 384];
       let readC: Array<any> = [String.fromCharCode(115,117,112,112,111,114,116,105,110,103,95,98,95,57,0), String.fromCharCode(120,95,54,52,95,108,105,98,0)];
      let upgradea = watchg.length <= 8888060;
      do {
         watchg += `${backwardu.length}`;
         if (upgradea) {
            break;
         }
      } while ((detailsC.length > watchg.length) && upgradea);
         collections = [1 - collections.length];
          let albumH: Array<any> = [137, 846, 113];
          let smallN = 2;
          let foreground9 = String.fromCharCode(103,95,49,54,95,102,111,114,119,97,114,100,101,100,0);
         collections = [detailsC.length << (Math.min(3, backwardu.length))];
         albumH = [albumH.length];
         smallN *= foreground9.length;
         foreground9 += "1";
         j_centerY += parseFloat(`${watchg.length + helperJ.length}`);
          let singaporeg = 4;
         readC = [3];
         singaporeg |= 3 | singaporeg;
      store7 = ((phoneT.length + (fastd ? 87 : phoneT.length)) == 87);
      if (comment1) {
         break;
      }
   } while (comment1 && (!store7));
   for (let o = 0; o < 1; o++) {
      mbridgeA += `${parseInt(`${sportb}`)}`;
   }
   if (read3.get(`${sportb}`) != null) {
      read3.set(`${store7}`, submitD.size);
   }
   let username1 = mbridgeA == String.fromCharCode(97,105,53,118,50,115,0);
   do {
      mbridgeA = `${read3.size}`;
      if (username1) {
         break;
      }
   } while ((mbridgeA.startsWith(`${store7}`)) && username1);
   for (let g = 0; g < 1; g++) {
      smallw += `${read3.size / (Math.max(2, 7))}`;
   }

        console.log("Error!", err, time);
      }
    };

    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    

    const onSeekGesture = (time: number) => {
      if (disableSeek.current === true) return

      if (isSeekErrorRef.current === true) {
        isSeekErrorRef.current = false;
        return;
      }

      if (currentTime < time) {
        setSeekDirection("fillDownloader");
      } else {
        setSeekDirection("componentModity");
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
       let modelsR = 4.0;
    let chartx = String.fromCharCode(102,95,57,53,95,121,101,97,114,0);
    let mintegralb = 2.0;
    let stylek = 1;
    let reducer6 = String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,48,95,49,48,48,0);
    let nterstitialV = true;
    let contexty = String.fromCharCode(114,95,49,53,95,119,114,105,116,101,111,117,116,0);
    let auto_6J: Map<any, any> = new Map([[String.fromCharCode(113,95,57,56,95,102,105,114,101,98,97,115,101,0),String.fromCharCode(118,95,57,57,95,118,105,115,97,0)], [String.fromCharCode(105,95,52,49,95,115,117,114,114,111,117,110,100,0),String.fromCharCode(106,95,51,54,95,102,112,115,0)], [String.fromCharCode(109,106,112,101,103,97,95,116,95,56,48,0),String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,105,111,110,95,97,95,54,52,0)]]);
    let windE = String.fromCharCode(104,117,100,95,120,95,55,54,0);
    let holder_: Array<any> = [757, 265, 208];
    let carouselM = String.fromCharCode(101,110,99,111,100,101,100,112,111,105,110,116,95,113,95,49,53,0);
    let ewardedN: Array<any> = [617, 362];
    let sinae = 0.0;
   for (let n = 0; n < 1; n++) {
       let modelsV = 2.0;
       let regengf = String.fromCharCode(122,95,57,57,95,100,105,115,97,98,108,101,115,0);
      while (regengf.endsWith(`${modelsV}`)) {
          let stats9 = false;
         regengf = `${(String.fromCharCode(50,0) == regengf ? (stats9 ? 5 : 1) : regengf.length)}`;
         break;
      }
         regengf = `${regengf.length}`;
       let unticko = 0;
       let targetS = 0;
         targetS ^= unticko;
      for (let x = 0; x < 2; x++) {
         unticko *= (String.fromCharCode(86,0) == regengf ? regengf.length : parseInt(`${modelsV}`));
      }
         regengf += `${parseInt(`${modelsV}`) % (Math.max(regengf.length, 10))}`;
      stylek -= ((nterstitialV ? 5 : 3));
   }
   for (let m = 0; m < 3; m++) {
      reducer6 = "3";
   }
      windE += `${stylek}`;
      reducer6 = `${chartx.length ^ 1}`;
      auto_6J = new Map([[reducer6, windE.length * 3]]);
      auto_6J.set(contexty, (contexty == String.fromCharCode(95,0) ? holder_.length : contexty.length));
   while (2 == (holder_.length & 3) || 4 == (chartx.length & 3)) {
      chartx = `${reducer6.length}`;
      break;
   }
      nterstitialV = 83 > windE.length;
      contexty = `${carouselM.length ^ holder_.length}`;
   while ((stylek + 2) <= 2) {
       let flyerM = 0.0;
       let nterstitialVu = 3.0;
       let mbsplash9 = 0.0;
      let sound8 = mbsplash9 >= 7388371.0;
      do {
          let trophy2 = String.fromCharCode(97,119,97,107,101,95,57,95,50,49,0);
         mbsplash9 /= Math.max(3, 4);
         trophy2 = `${3 * trophy2.length}`;
         if (sound8) {
            break;
         }
      } while ((1.76 == nterstitialVu) && sound8);
      for (let y = 0; y < 3; y++) {
         nterstitialVu *= parseFloat(`${1}`);
      }
      if ((4.21 - mbsplash9) <= 2.10) {
         mbsplash9 *= parseInt(`${flyerM}`);
      }
          let footballK = 3.0;
          let reducerq: Array<any> = [937, 759];
         nterstitialVu -= parseFloat(`${parseInt(`${footballK}`) | 1}`);
         footballK += reducerq.length & 2;
         reducerq = [reducerq.length];
         flyerM /= Math.max(3, 1);
          let diceg = String.fromCharCode(97,112,112,101,97,114,97,110,99,101,95,121,95,49,53,0);
          let sortS = String.fromCharCode(108,95,54,55,95,99,111,117,110,116,113,117,97,110,116,0);
         nterstitialVu -= parseFloat(`${parseInt(`${mbsplash9}`) & diceg.length}`);
         diceg += `${sortS.length}`;
         sortS += `${sortS.length}`;
         flyerM *= parseInt(`${nterstitialVu}`) | 3;
         mbsplash9 += parseInt(`${nterstitialVu}`);
          let pingO = 3.0;
          let point8 = 2;
         nterstitialVu /= Math.max(1, parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${flyerM}`)), 5))}`));
         pingO -= parseInt(`${pingO}`) << (Math.min(3, Math.abs(point8)));
         point8 -= parseInt(`${pingO}`);
      stylek -= parseInt(`${nterstitialVu}`) & 1;
      break;
   }
       let hooksh: Array<any> = [239, 478];
         hooksh.push(1);
      while (1 >= (hooksh.length / (Math.max(hooksh.length, 3))) && 3 >= (1 / (Math.max(1, hooksh.length)))) {
          let chartf = false;
          let k_countP: Map<any, any> = new Map([[String.fromCharCode(104,95,57,50,95,103,111,111,103,0),false ], [String.fromCharCode(108,95,54,56,95,116,114,97,110,115,99,101,105,118,101,114,0),true ]]);
         hooksh.push(2);
         chartf = 9 == k_countP.size || k_countP.size == 9;
         break;
      }
          let gmailZ = 4;
          let holdery: Map<any, any> = new Map([[String.fromCharCode(115,105,122,105,110,103,95,118,95,57,56,0),true ], [String.fromCharCode(120,95,51,53,95,112,111,108,121,109,111,100,0),false ]]);
         hooksh = [3 << (Math.min(1, hooksh.length))];
         gmailZ *= holdery.size % (Math.max(4, gmailZ));
         holdery = new Map([[`${holdery.size}`, gmailZ]]);
      chartx = `${3 % (Math.max(10, contexty.length))}`;
       let castingQ = String.fromCharCode(100,101,112,101,110,100,101,110,116,95,97,95,49,0);
       let tail9 = 0.0;
       let groupp = String.fromCharCode(120,95,53,95,102,105,114,101,0);
       let episodeR = String.fromCharCode(102,105,101,108,95,109,95,49,56,0);
         castingQ = `${episodeR.length}`;
         episodeR += `${(groupp == String.fromCharCode(68,0) ? episodeR.length : groupp.length)}`;
      let searchbarn = episodeR.length <= 5209664;
      do {
          let switch_l20: Array<any> = [649, 487, 521];
          let settinge = false;
         episodeR = "1";
         switch_l20.push(switch_l20.length);
         settinge = switch_l20.length == 60;
         if (searchbarn) {
            break;
         }
      } while (searchbarn && (episodeR.length < 2 && groupp.length < 2));
      if (tail9 >= 1.92) {
         castingQ += "3";
      }
      if (!episodeR.startsWith(`${tail9}`)) {
         episodeR += "3";
      }
      carouselM += `${windE.length << (Math.min(Math.abs(3), 4))}`;
      holder_ = [holder_.length - reducer6.length];
      auto_6J = new Map([[contexty, 1]]);
   if (!reducer6.endsWith(`${nterstitialV}`)) {
      nterstitialV = !windE.startsWith(`${nterstitialV}`);
   }
   while (windE.startsWith(`${auto_6J.size}`)) {
       let videoe = 1.0;
      let statisticsL = videoe <= 5461390.0;
      do {
         videoe += parseFloat(`${parseInt(`${videoe}`)}`);
         if (statisticsL) {
            break;
         }
      } while (statisticsL && (3.17 > (videoe + 5.93) && 5.9 > (5.93 * videoe)));
          let shared3: Array<any> = [111, 811, 595];
          let submitF = false;
          let phoney: Map<any, any> = new Map([[String.fromCharCode(117,95,49,57,95,109,105,116,101,114,0),String.fromCharCode(109,95,52,50,95,97,110,121,0)], [String.fromCharCode(117,95,52,55,95,105,110,116,101,103,114,97,108,0),String.fromCharCode(115,117,98,115,116,114,95,106,95,56,54,0)], [String.fromCharCode(118,95,56,57,95,115,117,105,116,97,98,108,101,0),String.fromCharCode(116,95,55,52,95,112,112,107,104,0)]]);
         videoe *= parseFloat(`${1}`);
         shared3 = [shared3.length];
         submitF = 72 == shared3.length;
         phoney.set(`${shared3.length}`, 2 / (Math.max(2, shared3.length)));
          let popupR = String.fromCharCode(108,112,99,101,110,118,95,110,95,50,53,0);
         videoe -= parseFloat(`${popupR.length * parseInt(`${videoe}`)}`);
      auto_6J = new Map([[`${holder_.length}`, stylek & 3]]);
      break;
   }
   while (!Array.from(auto_6J.values()).includes(stylek)) {
      auto_6J = new Map([[`${modelsR}`, chartx.length & parseInt(`${modelsR}`)]]);
      break;
   }
      contexty += "2";
       let minivode = String.fromCharCode(116,95,53,50,95,100,97,116,97,108,0);
       let activityW = String.fromCharCode(97,110,100,108,101,95,112,95,51,57,0);
       let membert = true;
      while (minivode == activityW) {
         activityW = `${(2 & (membert ? 4 : 2))}`;
         break;
      }
      if (activityW == minivode) {
         minivode = `${((membert ? 2 : 5))}`;
      }
         activityW = `${minivode.length & 3}`;
         activityW += `${(activityW == String.fromCharCode(116,0) ? activityW.length : (membert ? 4 : 2))}`;
          let save1 = String.fromCharCode(111,100,100,97,118,103,95,114,95,53,0);
          let componenta = String.fromCharCode(118,95,55,52,95,107,100,102,0);
          let resultf = String.fromCharCode(107,95,57,54,95,115,117,112,112,111,114,116,101,100,0);
         minivode += `${(minivode == String.fromCharCode(99,0) ? activityW.length : minivode.length)}`;
         save1 = `${resultf.length}`;
         componenta = "2";
         resultf = `${(String.fromCharCode(99,0) == resultf ? componenta.length : resultf.length)}`;
      windE += `${ewardedN.length}`;
      nterstitialV = 10 == stylek || ewardedN.length == 10;

        console.error("crash here");
      }

      bufferRef.current = false;
    };

    const onSkip = (time: any) => {
      if (disableSeek.current === true) return

      if (isSeekErrorRef.current === true) {
        isSeekErrorRef.current = false;
        return;
      }

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
       let agreementI = 0;
    let completeP = 1.0;
    let whiten = String.fromCharCode(110,95,57,54,95,114,100,99,111,115,116,0);
    let half2 = 3.0;
    let phone0 = String.fromCharCode(115,117,98,98,108,111,99,107,115,95,105,95,53,56,0);
    let sentryG = 1.0;
    let backwardp = false;
    let main_ig = String.fromCharCode(102,105,110,97,108,95,120,95,51,56,0);
    let spinnerK = 4;
    let modelsQ: Map<any, any> = new Map([[String.fromCharCode(99,97,116,101,103,111,114,105,115,101,100,95,57,95,50,54,0),String.fromCharCode(103,101,116,101,110,118,95,54,95,52,0)], [String.fromCharCode(116,100,115,102,95,54,95,54,52,0),String.fromCharCode(108,95,49,48,95,112,111,112,117,112,115,0)]]);
    let emptyX = String.fromCharCode(114,101,97,100,95,101,95,52,0);
    let yellowY = 3.0;
    let combinedD = 3;
      completeP /= Math.max(((backwardp ? 2 : 2) & parseInt(`${half2}`)), 1);
   let twittero = whiten.length >= 9530505;
   do {
       let giftk: Map<any, any> = new Map([[String.fromCharCode(107,95,51,50,95,111,98,106,99,0),133], [String.fromCharCode(114,111,98,117,115,116,95,117,95,51,54,0),97], [String.fromCharCode(112,95,51,51,95,109,115,98,115,0),655]]);
       let confirmation7 = 4.0;
       let flippera = 4.0;
      if (!Array.from(giftk.values()).includes(confirmation7)) {
         confirmation7 *= 2 | giftk.size;
      }
          let buildt = String.fromCharCode(97,117,116,104,111,114,105,122,101,100,95,50,95,52,54,0);
         confirmation7 *= parseInt(`${confirmation7}`);
         buildt += `${buildt.length << (Math.min(buildt.length, 2))}`;
         giftk.set(`${confirmation7}`, 3 * giftk.size);
          let main_qi = String.fromCharCode(109,117,116,101,100,95,103,95,51,55,0);
          let megaphone2: Map<any, any> = new Map([[String.fromCharCode(120,105,110,99,95,103,95,50,49,0),344], [String.fromCharCode(117,95,57,49,95,116,104,114,101,101,115,116,97,116,101,0),390], [String.fromCharCode(99,95,49,95,100,101,102,115,0),840]]);
         flippera /= Math.max(2, parseFloat(`${parseInt(`${confirmation7}`) & 1}`));
         main_qi = `${main_qi.length}`;
         megaphone2.set(main_qi, (String.fromCharCode(72,0) == main_qi ? main_qi.length : megaphone2.size));
      for (let o = 0; o < 3; o++) {
          let malaysia7 = String.fromCharCode(98,95,55,52,95,97,115,115,101,109,98,108,101,114,0);
         giftk.set(malaysia7, (malaysia7 == String.fromCharCode(52,0) ? giftk.size : malaysia7.length));
      }
         confirmation7 += 1;
      if ((confirmation7 * flippera) <= 1.40 && (flippera * confirmation7) <= 1.40) {
         confirmation7 /= Math.max(parseInt(`${flippera}`), 4);
      }
      let detailsE = giftk.size >= 9633566;
      do {
          let buildE = String.fromCharCode(100,118,100,97,116,97,95,54,95,53,52,0);
          let productf = 4;
          let hooko = 0.0;
         giftk = new Map([[buildE, 2 | parseInt(`${confirmation7}`)]]);
         buildE = `${parseInt(`${hooko}`) << (Math.min(3, Math.abs(productf)))}`;
         productf &= parseInt(`${hooko}`);
         if (detailsE) {
            break;
         }
      } while (((giftk.size % (Math.max(2, 5))) == 1) && detailsE);
         confirmation7 *= 3;
      whiten += `${3 << (Math.min(Math.abs(parseInt(`${half2}`)), 2))}`;
      if (twittero) {
         break;
      }
   } while ((4 > (2 * whiten.length) || 4 > (2 + parseInt(`${sentryG}`))) && twittero);
       let humidityF = 3;
       let sortw = 5.0;
       let disconnectedm = 4.0;
         sortw += parseFloat(`${parseInt(`${sortw}`) * parseInt(`${disconnectedm}`)}`);
      if ((sortw - 4.17) > 5.65 || 4.17 > (parseFloat(`${humidityF}`) - sortw)) {
         sortw -= parseFloat(`${parseInt(`${sortw}`) >> (Math.min(2, Math.abs(humidityF)))}`);
      }
         sortw -= parseFloat(`${2}`);
         humidityF += 2 | parseInt(`${sortw}`);
          let orientationm = 5;
          let bootsplashc = true;
          let completeS = String.fromCharCode(119,95,55,57,95,100,97,109,112,105,110,103,0);
         humidityF -= 3 ^ parseInt(`${disconnectedm}`);
         orientationm %= Math.max(5, 3);
         bootsplashc = (((!bootsplashc ? completeS.length : 22) * completeS.length) <= 22);
         disconnectedm -= parseInt(`${sortw}`);
      if ((2.53 - sortw) > 1.75 || 5.54 > (sortw - 2.53)) {
         humidityF &= parseInt(`${disconnectedm}`) + parseInt(`${sortw}`);
      }
         disconnectedm /= Math.max(1 << (Math.min(Math.abs(parseInt(`${disconnectedm}`)), 3)), 4);
          let nativeexn: Map<any, any> = new Map([[String.fromCharCode(97,95,49,53,95,105,110,116,101,103,114,97,116,105,111,110,0),true ], [String.fromCharCode(111,95,55,54,95,104,101,105,99,0),true ], [String.fromCharCode(100,101,97,99,116,95,102,95,53,56,0),false ]]);
          let castingg: Array<any> = [762, 364, 41];
         humidityF *= nativeexn.size + humidityF;
         nativeexn.set(`${castingg.length}`, castingg.length << (Math.min(castingg.length, 1)));
      phone0 += `${parseInt(`${half2}`) - 1}`;
       let analyticsD = 2.0;
       let modeT = String.fromCharCode(111,95,55,49,95,102,105,110,100,110,101,116,0);
       let liveQ: Map<any, any> = new Map([[String.fromCharCode(104,95,55,95,101,121,101,100,114,111,112,112,101,114,0),391], [String.fromCharCode(109,95,51,55,95,99,111,114,100,122,0),695]]);
      while ((liveQ.size >> (Math.min(Math.abs(3), 5))) >= 5) {
         modeT += `${parseInt(`${analyticsD}`) ^ 3}`;
         break;
      }
       let short_ax: Map<any, any> = new Map([[String.fromCharCode(98,95,52,51,95,114,100,118,111,0),389], [String.fromCharCode(117,110,103,114,111,117,112,95,101,95,49,53,0),62], [String.fromCharCode(118,111,116,101,114,115,95,97,95,50,57,0),424]]);
       let kuaishous: Map<any, any> = new Map([[String.fromCharCode(115,116,100,108,105,98,95,50,95,57,48,0),true ], [String.fromCharCode(117,110,116,121,112,101,100,95,53,95,57,51,0),false ], [String.fromCharCode(116,95,56,51,95,115,99,104,109,0),true ]]);
      for (let i = 0; i < 3; i++) {
         kuaishous = new Map([[`${kuaishous.size}`, kuaishous.size]]);
      }
          let orientationZ = true;
          let colors_ = 1.0;
         liveQ = new Map([[`${liveQ.size}`, ((orientationZ ? 2 : 1) | liveQ.size)]]);
         orientationZ = 13.27 > colors_;
         colors_ += parseFloat(`${2}`);
      if (short_ax.size >= 4) {
         kuaishous.set(`${analyticsD}`, parseInt(`${analyticsD}`));
      }
       let indexI = 3.0;
      while (3 > (3 >> (Math.min(3, Math.abs(kuaishous.size)))) || 1.36 > (3.68 / (Math.max(5, analyticsD)))) {
         analyticsD -= parseFloat(`${parseInt(`${indexI}`) << (Math.min(Math.abs(short_ax.size), 4))}`);
         break;
      }
      if (3 == (5 + kuaishous.size) || (kuaishous.size - 5) == 2) {
         indexI /= Math.max(3, parseFloat(`${2}`));
      }
         liveQ.set(`${liveQ.size}`, liveQ.size % (Math.max(kuaishous.size, 10)));
      modelsQ.set(whiten, 3 << (Math.min(3, Math.abs(parseInt(`${completeP}`)))));
   let membershipL = 8677131.0 >= sentryG;
   do {
       let circleo = true;
      if (circleo) {
         circleo = !circleo && circleo;
      }
      if (!circleo) {
          let arrowP = 2.0;
          let settingsu = String.fromCharCode(114,101,110,100,101,114,95,56,95,55,52,0);
          let ewardedz = 0.0;
          let whistlec = 1;
         circleo = String.fromCharCode(119,0) == settingsu;
         arrowP /= Math.max(parseFloat(`${3}`), 1);
         settingsu = `${parseInt(`${ewardedz}`) & 3}`;
         ewardedz -= 3;
         whistlec *= parseInt(`${ewardedz}`) << (Math.min(1, Math.abs(whistlec)));
      }
         circleo = (!circleo ? circleo : !circleo);
      sentryG *= main_ig.length ^ phone0.length;
      if (membershipL) {
         break;
      }
   } while ((backwardp) && membershipL);
   if (backwardp || whiten.length >= 1) {
      backwardp = String.fromCharCode(75,0) == phone0;
   }
   if (3 > (phone0.length % 3) && (phone0.length % (Math.max(3, 1))) > 1) {
      phone0 = "1";
   }
   for (let a = 0; a < 1; a++) {
      completeP *= ((backwardp ? 4 : 1) ^ parseInt(`${completeP}`));
   }
   let gmailg = spinnerK >= 6915582;
   do {
       let unselectedc = true;
      while (!unselectedc) {
          let navigatione = String.fromCharCode(118,95,57,95,108,105,115,116,101,100,0);
         unselectedc = navigatione.length < 20;
         break;
      }
         unselectedc = (unselectedc ? unselectedc : unselectedc);
      for (let r = 0; r < 1; r++) {
         unselectedc = !unselectedc;
      }
      spinnerK ^= 3 * whiten.length;
      if (gmailg) {
         break;
      }
   } while (gmailg && ((spinnerK * 2) == 2));
   while ((3 | agreementI) >= 1) {
       let settingG = 4.0;
       let networkU = 4.0;
       let mbridgeg = 1.0;
      if (4.59 > (mbridgeg * networkU) || (networkU + 4.59) > 5.44) {
          let submitM = String.fromCharCode(115,95,53,56,95,107,98,112,115,0);
         networkU -= (parseFloat(`${submitM == String.fromCharCode(95,0) ? submitM.length : parseInt(`${mbridgeg}`)}`));
      }
         networkU += parseFloat(`${parseInt(`${settingG}`)}`);
         settingG += parseFloat(`${parseInt(`${settingG}`) % 3}`);
      if (4.72 < (2 - mbridgeg)) {
         networkU += parseFloat(`${parseInt(`${settingG}`)}`);
      }
          let penalty5 = 2.0;
         mbridgeg += parseFloat(`${parseInt(`${mbridgeg}`) * 1}`);
         penalty5 *= parseFloat(`${parseInt(`${penalty5}`)}`);
         networkU -= parseFloat(`${parseInt(`${mbridgeg}`)}`);
      let malaysia1 = 5518552.0 >= mbridgeg;
      do {
         mbridgeg *= parseFloat(`${1 ^ parseInt(`${mbridgeg}`)}`);
         if (malaysia1) {
            break;
         }
      } while ((1.45 <= (2.89 + settingG) && (2.89 + mbridgeg) <= 1.86) && malaysia1);
      while ((4 + settingG) > 3.71) {
         networkU -= parseFloat(`${parseInt(`${settingG}`)}`);
         break;
      }
         networkU -= parseFloat(`${parseInt(`${settingG}`)}`);
      completeP *= 1;
      break;
   }
      completeP += 3 >> (Math.min(1, Math.abs(parseInt(`${sentryG}`))));
   let reacto = 5568641 <= spinnerK;
   do {
      spinnerK -= spinnerK;
      if (reacto) {
         break;
      }
   } while (reacto && (4 == (spinnerK ^ 2) && 5 == (spinnerK ^ 2)));
   while (completeP < 4.9) {
       let mbbannerf = String.fromCharCode(116,119,101,97,107,115,95,98,95,53,56,0);
       let rulesQ = String.fromCharCode(98,95,56,56,95,114,101,119,97,114,100,0);
       let windm = String.fromCharCode(97,95,53,95,122,98,105,110,0);
       let scoreb = 0;
         rulesQ = `${rulesQ.length}`;
      while (mbbannerf.length >= windm.length) {
         windm = `${scoreb % (Math.max(10, mbbannerf.length))}`;
         break;
      }
         scoreb -= scoreb + windm.length;
      for (let p = 0; p < 2; p++) {
         windm += `${(String.fromCharCode(110,0) == windm ? windm.length : scoreb)}`;
      }
      if ((windm.length / (Math.max(4, 2))) == 2) {
         windm = `${rulesQ.length - 1}`;
      }
      for (let d = 0; d < 2; d++) {
         mbbannerf = `${windm.length >> (Math.min(rulesQ.length, 2))}`;
      }
      if (!rulesQ.includes(windm)) {
          let firebase3 = true;
          let floaterk = 0;
          let groupe = true;
         rulesQ = `${windm.length}`;
         firebase3 = (!groupe ? !firebase3 : groupe);
         floaterk += floaterk;
      }
      if (5 <= scoreb) {
          let gesturesy = 1.0;
         windm = `${1 / (Math.max(3, parseInt(`${gesturesy}`)))}`;
      }
       let sounda = false;
         sounda = 34 <= scoreb;
         windm += `${windm.length % (Math.max(mbbannerf.length, 3))}`;
          let handlerX = String.fromCharCode(97,110,105,109,97,116,101,95,118,95,52,53,0);
          let phoneL = 3.0;
         mbbannerf = `${1 ^ handlerX.length}`;
         handlerX = `${parseInt(`${phoneL}`) >> (Math.min(4, Math.abs(3)))}`;
         phoneL -= parseInt(`${phoneL}`);
      completeP /= Math.max(5, parseInt(`${completeP}`));
      break;
   }
       let controlsO = String.fromCharCode(119,95,52,54,95,98,105,116,105,122,101,110,0);
       let expandq = String.fromCharCode(115,111,117,110,100,115,95,121,95,52,51,0);
       let whiteC = 1;
      let stringE = controlsO == String.fromCharCode(99,50,119,0);
      do {
         controlsO += `${whiteC + controlsO.length}`;
         if (stringE) {
            break;
         }
      } while ((2 < whiteC) && stringE);
      while (!expandq.includes(`${controlsO.length}`)) {
         expandq = `${expandq.length << (Math.min(1, controlsO.length))}`;
         break;
      }
       let bing1 = 4.0;
       let orangeP = 0.0;
          let crownl: Map<any, any> = new Map([[String.fromCharCode(116,95,55,52,95,100,101,112,101,110,100,0),347], [String.fromCharCode(106,95,56,50,95,115,97,116,100,0),319]]);
          let utilsb = String.fromCharCode(102,95,51,51,95,100,101,108,101,116,105,111,110,115,0);
         whiteC += (String.fromCharCode(117,0) == controlsO ? controlsO.length : expandq.length);
         crownl.set(utilsb, crownl.size / 3);
         utilsb = `${2 % (Math.max(8, crownl.size))}`;
      while (expandq.length >= 3) {
         expandq += `${(String.fromCharCode(115,0) == controlsO ? whiteC : controlsO.length)}`;
         break;
      }
      for (let k = 0; k < 3; k++) {
         expandq = `${3 % (Math.max(9, parseInt(`${bing1}`)))}`;
      }
      let mbsplashU = 7560477 <= whiteC;
      do {
         whiteC /= Math.max(2, whiteC);
         if (mbsplashU) {
            break;
         }
      } while (((bing1 * 4.37) >= 2.53) && mbsplashU);
      if ((parseFloat(`${whiteC}`) * orangeP) == 3.78 || (whiteC ^ 3) == 5) {
          let googleH = String.fromCharCode(119,95,55,49,95,117,115,114,115,99,116,112,0);
          let floating7 = String.fromCharCode(114,95,56,53,95,97,99,99,114,117,101,100,0);
         orangeP *= parseFloat(`${googleH.length ^ controlsO.length}`);
         googleH += `${(floating7 == String.fromCharCode(49,0) ? floating7.length : floating7.length)}`;
      }
          let miniS = 5;
          let successp = 3.0;
         controlsO = `${miniS}`;
         miniS &= parseInt(`${successp}`) << (Math.min(1, Math.abs(1)));
         successp /= Math.max(parseFloat(`${parseInt(`${successp}`) / (Math.max(6, parseInt(`${successp}`)))}`), 4);
      main_ig += `${modelsQ.size >> (Math.min(controlsO.length, 2))}`;
   for (let l = 0; l < 3; l++) {
      main_ig = `${(agreementI << (Math.min(4, Math.abs((backwardp ? 5 : 4)))))}`;
   }
   for (let e = 0; e < 3; e++) {
      sentryG *= parseInt(`${half2}`);
   }
      completeP /= Math.max(phone0.length << (Math.min(Math.abs(3), 4)), 1);
   for (let j = 0; j < 2; j++) {
      spinnerK += (String.fromCharCode(103,0) == main_ig ? spinnerK : main_ig.length);
   }
   if (phone0.length <= spinnerK) {
       let utilsC = 0.0;
       let xvodU = String.fromCharCode(97,108,97,110,103,117,97,103,101,95,116,95,52,55,0);
       let icon7 = 4.0;
       let commonr = String.fromCharCode(115,95,49,48,48,95,115,116,114,102,0);
       let r_managerv: Array<any> = [866, 868, 632];
          let shirtB: Array<any> = [627, 55];
          let descW = 2.0;
          let next8 = String.fromCharCode(117,95,53,55,95,115,116,117,102,102,105,110,103,0);
         utilsC *= parseFloat(`${next8.length ^ 1}`);
         shirtB.push(shirtB.length);
         descW *= shirtB.length >> (Math.min(Math.abs(3), 2));
         next8 = `${shirtB.length}`;
         utilsC -= parseFloat(`${r_managerv.length}`);
       let dropdowns = String.fromCharCode(115,107,105,110,95,110,95,54,54,0);
      for (let m = 0; m < 2; m++) {
         xvodU = `${(xvodU == String.fromCharCode(84,0) ? xvodU.length : parseInt(`${icon7}`))}`;
      }
          let reminderN = 4;
          let foundY = String.fromCharCode(120,95,50,54,95,115,101,97,108,98,111,120,0);
          let episoder = 5.0;
         icon7 *= parseFloat(`${xvodU.length}`);
         reminderN >>= Math.min(5, Math.abs(parseInt(`${episoder}`)));
         foundY = "2";
         episoder -= 2 - foundY.length;
      for (let i = 0; i < 1; i++) {
         utilsC -= parseFloat(`${2}`);
      }
         r_managerv.push(commonr.length);
          let guideQ = 2.0;
         utilsC *= parseFloat(`${2}`);
         guideQ -= parseFloat(`${parseInt(`${guideQ}`) >> (Math.min(1, Math.abs(2)))}`);
      while (5.34 == (icon7 * parseFloat(`${xvodU.length}`))) {
         icon7 -= parseFloat(`${parseInt(`${icon7}`)}`);
         break;
      }
      if (!dropdowns.includes(xvodU)) {
          let bufferh = String.fromCharCode(114,101,116,114,121,95,105,95,56,51,0);
          let overf = 2.0;
          let dplusz = 1.0;
          let philippines9 = String.fromCharCode(103,95,56,48,95,113,114,99,111,100,101,0);
         xvodU = "1";
         bufferh = `${parseInt(`${overf}`)}`;
         dplusz -= parseInt(`${overf}`);
         philippines9 += `${philippines9.length}`;
      }
          let animationr = String.fromCharCode(109,95,55,49,95,110,111,116,99,104,0);
         r_managerv.push(parseInt(`${icon7}`) + 1);
         animationr += "3";
      while ((r_managerv.length / (Math.max(dropdowns.length, 7))) >= 4 || 4 >= (r_managerv.length / (Math.max(dropdowns.length, 6)))) {
          let modeH = 5.0;
         r_managerv.push((commonr == String.fromCharCode(80,0) ? commonr.length : r_managerv.length));
         modeH += 2 << (Math.min(Math.abs(parseInt(`${modeH}`)), 2));
         break;
      }
         xvodU += `${2 * commonr.length}`;
      while (utilsC > 3.83) {
          let shirta = true;
          let updatesr: Map<any, any> = new Map([[String.fromCharCode(117,95,56,53,95,105,110,115,116,97,108,108,101,100,0),295], [String.fromCharCode(104,111,115,116,110,97,109,101,95,56,95,53,55,0),21]]);
         r_managerv = [1 & r_managerv.length];
         shirta = updatesr.size < updatesr.size;
         break;
      }
          let dice7 = true;
         r_managerv = [2 - dropdowns.length];
         dice7 = (!dice7 ? dice7 : !dice7);
      spinnerK |= phone0.length;
   }
      completeP /= Math.max(3, whiten.length >> (Math.min(1, Math.abs(parseInt(`${half2}`)))));
   let bodanZ = main_ig == String.fromCharCode(50,53,55,114,120,0);
   do {
       let vietnamG = true;
       let wnews3 = true;
       let usernameM: Array<any> = [760, 23, 415];
       let searchbarB = true;
       let routerh = String.fromCharCode(106,95,56,51,95,107,101,121,0);
          let tickV = 4.0;
          let chinasameA = 5;
         wnews3 = 28.83 > tickV;
         tickV += parseFloat(`${chinasameA / (Math.max(4, chinasameA))}`);
      for (let g = 0; g < 1; g++) {
         wnews3 = routerh.length > 19;
      }
      if (!wnews3) {
         usernameM.push(3);
      }
         usernameM.push(1);
          let changeh = 4.0;
          let placeholderp = 0.0;
          let aboutG = 0.0;
         vietnamG = wnews3;
         changeh += parseFloat(`${3 & parseInt(`${changeh}`)}`);
         placeholderp /= Math.max(parseInt(`${changeh}`), 2);
         aboutG += parseFloat(`${parseInt(`${changeh}`)}`);
         vietnamG = !wnews3;
         wnews3 = !searchbarB;
       let styleU: Array<any> = [603, 899];
       let gmailD = 0.0;
       let unread1 = 2.0;
          let crownT = 5.0;
          let changel = false;
          let context6 = 2.0;
         wnews3 = !changel;
         crownT *= 3;
         context6 /= Math.max(5, parseFloat(`${3 + parseInt(`${context6}`)}`));
       let tooltipsv = String.fromCharCode(101,110,99,111,100,101,95,57,95,56,55,0);
      for (let b = 0; b < 3; b++) {
         styleU.push(3 ^ parseInt(`${gmailD}`));
      }
         searchbarB = usernameM.length >= 55;
         tooltipsv += `${routerh.length}`;
      let gesture2 = 7128969 <= styleU.length;
      do {
         styleU = [((searchbarB ? 5 : 2) >> (Math.min(usernameM.length, 2)))];
         if (gesture2) {
            break;
         }
      } while ((parseInt(`${gmailD}`) < styleU.length) && gesture2);
      main_ig = "3";
      if (bodanZ) {
         break;
      }
   } while ((3 > (main_ig.length % (Math.max(3, 3))) || (parseInt(`${sentryG}`) * main_ig.length) > 3) && bodanZ);
   let hearth = 8785337 >= spinnerK;
   do {
       let rank9: Map<any, any> = new Map([[String.fromCharCode(114,109,115,105,112,114,95,49,95,57,52,0),true ], [String.fromCharCode(121,95,52,54,95,115,116,100,0),false ]]);
      if (Array.from(rank9.values()).includes(rank9.size)) {
          let viewerM: Map<any, any> = new Map([[String.fromCharCode(115,99,104,101,109,97,115,95,113,95,49,0),405], [String.fromCharCode(101,120,116,101,110,100,105,110,103,95,99,95,54,54,0),307], [String.fromCharCode(104,119,100,101,118,105,99,101,95,48,95,54,50,0),60]]);
         rank9.set(`${viewerM.size}`, 1);
      }
       let helperA = false;
      for (let t = 0; t < 2; t++) {
         helperA = !helperA;
      }
      spinnerK &= 1;
      if (hearth) {
         break;
      }
   } while ((spinnerK <= 3) && hearth);

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
       let constantsZ = false;
    let options_ = 3.0;
    let profilet = 2.0;
    let xvod9 = 4.0;
    let module1 = false;
    let actions5 = String.fromCharCode(102,95,53,52,95,112,114,101,102,101,116,99,104,0);
    let pingQ = String.fromCharCode(115,95,56,57,95,116,114,97,110,115,99,116,105,111,110,0);
    let verticalS = 2.0;
   let combine1 = options_ >= 7955891.0;
   do {
       let s_managerz = 0.0;
       let combineN: Map<any, any> = new Map([[String.fromCharCode(121,95,55,95,100,101,116,97,99,104,101,100,0),true ], [String.fromCharCode(99,97,112,112,101,100,95,119,95,53,51,0),false ], [String.fromCharCode(120,118,105,100,95,113,95,55,51,0),true ]]);
       let strw = String.fromCharCode(101,120,99,108,117,100,105,110,103,95,115,95,56,0);
         combineN.set(`${s_managerz}`, 1 % (Math.max(7, combineN.size)));
          let show4 = 3.0;
          let leftv: Array<any> = [815, 336];
          let langd = String.fromCharCode(114,95,56,55,95,102,105,101,108,0);
         s_managerz /= Math.max(parseFloat(`${3 * langd.length}`), 2);
         show4 /= Math.max(1, parseInt(`${show4}`) << (Math.min(5, Math.abs(1))));
         leftv.push(1);
         langd += `${leftv.length}`;
         combineN.set(`${strw}`, combineN.size % 3);
         combineN = new Map([[`${combineN.size}`, 2 & combineN.size]]);
         strw += `${strw.length >> (Math.min(Math.abs(1), 3))}`;
      options_ /= Math.max(3, parseInt(`${verticalS}`));
      if (combine1) {
         break;
      }
   } while (((xvod9 + 3.72) > 3.70 || (options_ / 3.72) > 1.19) && combine1);
   if (constantsZ) {
      constantsZ = !module1 && options_ == 78.96;
   }
   if (profilet <= 4.56) {
       let chinaf = 3.0;
       let constantsj = String.fromCharCode(104,119,109,97,112,95,114,95,50,49,0);
       let str8: Array<any> = [890, 954, 74];
       let overI: Array<any> = [String.fromCharCode(115,115,114,99,95,114,95,56,57,0), String.fromCharCode(101,99,108,95,49,95,49,53,0)];
      while ((overI.length % (Math.max(2, str8.length))) <= 5 || 5 <= (overI.length % (Math.max(10, str8.length)))) {
         str8.push((String.fromCharCode(107,0) == constantsj ? str8.length : constantsj.length));
         break;
      }
         str8 = [3 << (Math.min(1, constantsj.length))];
      for (let h = 0; h < 1; h++) {
          let turnf: Map<any, any> = new Map([[String.fromCharCode(97,95,51,48,95,97,110,111,110,121,109,111,117,115,0),String.fromCharCode(112,95,56,50,95,112,97,115,115,101,115,0)], [String.fromCharCode(104,105,101,114,95,49,95,56,50,0),String.fromCharCode(100,116,109,102,95,117,95,54,51,0)], [String.fromCharCode(113,117,105,99,107,99,111,109,112,114,101,115,115,95,105,95,51,53,0),String.fromCharCode(100,95,51,54,95,104,101,97,100,0)]]);
          let indexw = String.fromCharCode(104,105,103,104,101,115,116,95,49,95,51,50,0);
          let darkD = String.fromCharCode(112,108,97,121,97,98,108,101,95,53,95,53,49,0);
          let about2 = String.fromCharCode(115,95,56,50,95,115,117,98,105,109,97,103,101,0);
          let orangeu = 0.0;
         str8 = [turnf.size << (Math.min(2, Math.abs(parseInt(`${chinaf}`))))];
         turnf.set(`${orangeu}`, (String.fromCharCode(54,0) == darkD ? parseInt(`${orangeu}`) : darkD.length));
         indexw = `${(indexw == String.fromCharCode(118,0) ? indexw.length : darkD.length)}`;
         about2 = `${darkD.length}`;
      }
          let lessV = true;
          let regengy = 3.0;
         constantsj = `${constantsj.length}`;
         lessV = 5.25 >= regengy;
         regengy += parseFloat(`${2 / (Math.max(parseInt(`${regengy}`), 3))}`);
       let connectionu: Array<any> = [552, 627, 525];
       let constantsV: Array<any> = [String.fromCharCode(118,95,55,48,95,99,104,101,99,107,115,116,114,105,100,101,0), String.fromCharCode(102,97,118,101,100,95,51,95,54,48,0), String.fromCharCode(99,111,108,108,101,116,105,111,110,95,48,95,50,56,0)];
      if (3 == (constantsV.length >> (Math.min(Math.abs(4), 4))) || 4 == (constantsj.length >> (Math.min(4, constantsV.length)))) {
         constantsV = [str8.length];
      }
         overI.push(3);
      while (2 == (3 | connectionu.length) || 2 == (3 | connectionu.length)) {
         constantsV.push(constantsV.length);
         break;
      }
      let countryy = constantsj == String.fromCharCode(55,55,101,56,114,52,56,0);
      do {
          let dangeru: Map<any, any> = new Map([[String.fromCharCode(103,110,111,115,105,115,95,117,95,52,48,0),394], [String.fromCharCode(99,111,109,98,105,110,97,116,111,114,95,55,95,51,56,0),232]]);
          let contextA = 5.0;
          let refreshK: Array<any> = [String.fromCharCode(101,95,56,95,109,111,99,107,115,0), String.fromCharCode(102,95,50,51,95,105,110,116,105,0), String.fromCharCode(105,110,116,114,97,120,100,115,112,95,106,95,52,51,0)];
          let stationsP: Map<any, any> = new Map([[String.fromCharCode(97,99,101,108,112,95,56,95,50,0),318], [String.fromCharCode(100,95,54,51,95,112,114,101,115,101,116,115,0),940], [String.fromCharCode(98,95,52,54,95,97,115,115,111,99,108,105,115,116,0),269]]);
          let pingk = 3;
         constantsj += `${overI.length}`;
         dangeru = new Map([[`${pingk}`, pingk]]);
         contextA /= Math.max(4, dangeru.size + 3);
         refreshK = [1 << (Math.min(3, Math.abs(parseInt(`${contextA}`))))];
         stationsP.set(`${pingk}`, pingk ^ stationsP.size);
         if (countryy) {
            break;
         }
      } while ((4 <= (4 + str8.length)) && countryy);
      while (constantsj.startsWith(`${chinaf}`)) {
         constantsj += `${constantsj.length | overI.length}`;
         break;
      }
      let contextj = 6305919 <= overI.length;
      do {
         overI.push(2);
         if (contextj) {
            break;
         }
      } while (contextj && ((3 * overI.length) < 3 && (parseInt(`${chinaf}`) * overI.length) < 3));
      let rewindw = 6335767 <= overI.length;
      do {
          let searchF = false;
         overI = [2];
         searchF = searchF && !searchF;
         if (rewindw) {
            break;
         }
      } while (rewindw && ((overI.length >> (Math.min(Math.abs(2), 2))) == 4));
      profilet /= Math.max(3, 2 % (Math.max(8, overI.length)));
   }
      module1 = options_ > 20.50 && constantsZ;
   if (constantsZ) {
      xvod9 /= Math.max(2, (parseFloat(`${(module1 ? 1 : 2)}`)));
   }
   let expandk = 5571190 <= actions5.length;
   do {
      actions5 = "3";
      if (expandk) {
         break;
      }
   } while (expandk && (3 <= (2 ^ actions5.length) || 1 <= (2 ^ actions5.length)));
   for (let z = 0; z < 3; z++) {
      constantsZ = pingQ == String.fromCharCode(74,0) || verticalS < 66.21;
   }
   let stationsi = constantsZ ? !constantsZ : constantsZ;
   do {
      constantsZ = module1;
      if (stationsi) {
         break;
      }
   } while ((module1) && stationsi);
   if (!constantsZ || (4.93 + verticalS) >= 4.6) {
      verticalS /= Math.max(4, parseFloat(`${1 | parseInt(`${profilet}`)}`));
   }

      if (
        autoPlayNext &&
        activeEpisode !== undefined &&
        episodes &&
        activeEpisode < episodes?.url_count - 1
      ) {

      profilet -= 1;
       let h_countT = String.fromCharCode(97,97,99,99,111,100,101,114,95,102,95,53,51,0);
         h_countT = `${1 + h_countT.length}`;
      if (h_countT == h_countT) {
         h_countT += `${h_countT.length + 3}`;
      }
         h_countT = "2";
      pingQ = `${3 << (Math.min(2, h_countT.length))}`;
   let types1 = profilet <= 5230280.0;
   do {
       let logoutz: Array<any> = [401, 248];
       let middlek = 2.0;
       let zoomi: Map<any, any> = new Map([[String.fromCharCode(106,115,105,109,100,100,99,116,95,107,95,53,50,0),false ], [String.fromCharCode(109,95,52,53,95,115,112,108,97,110,101,0),true ]]);
      for (let g = 0; g < 2; g++) {
          let emptyi = 2.0;
          let libcrashsdk3 = String.fromCharCode(97,100,100,105,116,105,111,110,97,108,108,121,95,121,95,51,0);
          let androidW = false;
          let rewind2 = true;
         zoomi = new Map([[`${middlek}`, 3]]);
         emptyi /= Math.max(libcrashsdk3.length, 4);
         libcrashsdk3 = `${((androidW ? 1 : 5))}`;
         androidW = 87.60 >= emptyi && androidW;
         rewind2 = !rewind2;
      }
         zoomi.set(`${middlek}`, 2 * parseInt(`${middlek}`));
      for (let v = 0; v < 1; v++) {
          let jnewsM = String.fromCharCode(121,95,56,55,95,102,101,116,99,104,0);
          let largeD = String.fromCharCode(117,95,49,95,102,108,111,99,107,0);
          let navigationX = 2;
         middlek += 2 ^ largeD.length;
         jnewsM = `${jnewsM.length / (Math.max(5, navigationX))}`;
         largeD = "3";
         navigationX >>= Math.min(jnewsM.length, 1);
      }
      if ((middlek - zoomi.size) <= 5.42) {
          let layoutn = String.fromCharCode(99,95,57,50,95,119,101,98,112,0);
          let sorts = String.fromCharCode(111,95,54,53,95,99,104,117,110,107,101,100,0);
          let videoh = false;
          let handlerp = 4.0;
          let dycreatorI: Map<any, any> = new Map([[String.fromCharCode(118,95,52,53,95,119,97,107,101,0),982], [String.fromCharCode(102,97,99,116,111,114,121,95,50,95,49,52,0),313]]);
         zoomi.set(`${layoutn}`, zoomi.size * 3);
         layoutn = `${dycreatorI.size - 1}`;
         sorts = `${parseInt(`${handlerp}`) >> (Math.min(Math.abs(dycreatorI.size), 2))}`;
         videoh = sorts.length > 77;
         handlerp /= Math.max(2, sorts.length * 2);
      }
          let rewardvideo4 = String.fromCharCode(99,95,53,52,0);
         middlek *= parseInt(`${middlek}`) - zoomi.size;
         rewardvideo4 = `${2 / (Math.max(4, rewardvideo4.length))}`;
       let firebaseR = String.fromCharCode(116,95,49,53,95,99,111,109,112,111,110,101,110,116,115,0);
       let applicationS = String.fromCharCode(109,97,116,101,114,105,97,108,95,51,95,51,57,0);
       let downg = 1.0;
          let gemfileV = 3.0;
         downg *= parseInt(`${middlek}`);
         gemfileV -= 3 << (Math.min(Math.abs(parseInt(`${gemfileV}`)), 2));
         zoomi.set(`${middlek}`, zoomi.size);
      profilet *= 3;
      logoutz = [logoutz.length];
      if (types1) {
         break;
      }
   } while ((1 >= (parseInt(`${profilet}`) * 3) && (actions5.length | 3) >= 1) && types1);
      module1 = actions5 == pingQ;
   for (let s = 0; s < 3; s++) {
      module1 = 38.49 >= options_ || profilet >= 38.49;
   }
       let stepw: Map<any, any> = new Map([[String.fromCharCode(97,114,109,118,116,101,95,57,95,55,51,0),172], [String.fromCharCode(102,111,117,114,120,109,95,114,95,54,54,0),67], [String.fromCharCode(114,95,52,56,95,105,110,116,101,114,102,97,99,101,0),258]]);
       let show_: Array<any> = [822, 174];
      for (let h = 0; h < 1; h++) {
         show_.push(stepw.size * 2);
      }
         show_ = [show_.length];
      if (Array.from(stepw.values()).includes(show_.length)) {
          let temp1 = String.fromCharCode(122,95,49,52,95,109,101,109,97,108,105,103,110,0);
          let optionsW = String.fromCharCode(97,112,112,101,110,100,97,98,108,101,95,50,95,53,48,0);
         show_.push(optionsW.length & temp1.length);
      }
      for (let l = 0; l < 2; l++) {
         show_ = [stepw.size & 2];
      }
         show_ = [1];
       let vietnamg = 3.0;
       let typingP = 1.0;
      constantsZ = xvod9 < 68.18;
   if (1 >= (parseInt(`${profilet}`) / (Math.max(7, pingQ.length)))) {
      pingQ = `${3 ^ actions5.length}`;
   }
   let stringsd = constantsZ ? !constantsZ : constantsZ;
   do {
      constantsZ = (88 < (actions5.length ^ (!constantsZ ? 88 : actions5.length)));
      if (stringsd) {
         break;
      }
   } while ((!constantsZ) && stringsd);
   let blacklistI = 7363351.0 >= profilet;
   do {
      profilet /= Math.max(5, (actions5.length ^ (constantsZ ? 1 : 5)));
      if (blacklistI) {
         break;
      }
   } while ((1.77 == (profilet + 1.24)) && blacklistI);
        return () => changeEpisodeAndPlay(episodes.urls[activeEpisode + 1].nid);
      }
      return undefined;
    };

    
    //   // if is sports stream, if watch time > 300s, pause vid
    
    
    //     screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    useEffect(() => {
      if (!isFocus) return;

      if ((screenState.interstitialShow == true || vipGuideModalOpen === true) && Platform.OS === "ios") {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    }, [screenState.interstitialShow, vipGuideModalOpen]);

    useEffect(() => {
      if (screenState.interstitialShow === true || vipGuideModalOpen === true) {
        adVideoRef.current?.setNativeProps({ paused: true })
      } else {
        adVideoRef.current?.setNativeProps({ paused: false })
      }
    }, [screenState.interstitialShow, vipGuideModalOpen]);

    useEffect(() => {
      if (route.name == '体育详情') {
        const unsub = setInterval(() => {
       let guide2 = String.fromCharCode(101,95,54,49,95,108,105,98,115,0);
    let pathw: Array<any> = [733, 537];
    let predictione = String.fromCharCode(105,95,57,52,95,115,101,110,100,105,110,103,0);
    let download3 = String.fromCharCode(116,95,54,55,95,99,111,109,112,97,114,101,0);
    let indexr = false;
    let readU = 1.0;
    let bannerv: Map<any, any> = new Map([[String.fromCharCode(119,95,56,49,95,98,105,110,111,109,105,97,108,0),444], [String.fromCharCode(98,108,117,114,97,121,95,56,95,50,56,0),189], [String.fromCharCode(112,97,116,116,101,114,110,95,108,95,49,55,0),472]]);
    let moonb: Map<any, any> = new Map([[String.fromCharCode(100,114,97,103,103,97,98,108,101,95,99,95,52,0),91], [String.fromCharCode(109,111,100,101,108,115,95,121,95,54,53,0),263], [String.fromCharCode(115,101,116,97,99,116,105,118,101,107,101,121,95,104,95,50,55,0),422]]);
    let formr = String.fromCharCode(97,108,112,105,110,101,95,107,95,56,55,0);
    let privacyp = 0.0;
   let desca = String.fromCharCode(105,104,55,98,99,50,111,120,116,0) == download3;
   do {
      download3 += `${bannerv.size}`;
      if (desca) {
         break;
      }
   } while ((download3.endsWith(`${pathw.length}`)) && desca);
      predictione = "1";
       let combineG = 2;
       let mathx: Map<any, any> = new Map([[String.fromCharCode(115,121,109,95,48,95,54,49,0),303], [String.fromCharCode(112,114,101,115,101,114,118,101,95,53,95,51,55,0),247], [String.fromCharCode(121,95,55,54,95,99,111,110,116,114,97,99,116,0),282]]);
      while (4 > (combineG & 2)) {
         combineG >>= Math.min(Math.abs(2 ^ combineG), 2);
         break;
      }
      if ((mathx.size << (Math.min(3, Math.abs(combineG)))) < 2 || 2 < (mathx.size << (Math.min(2, Math.abs(combineG))))) {
          let infoZ = 0.0;
          let sinan = 4.0;
          let huaweiK = 5.0;
          let stationsE = String.fromCharCode(107,95,54,56,95,116,109,105,120,0);
          let guideO = String.fromCharCode(100,105,115,97,112,112,101,97,114,97,110,99,101,95,54,95,53,57,0);
         mathx.set(`${combineG}`, 2 - stationsE.length);
         infoZ -= parseFloat(`${2}`);
         sinan *= 3 * parseInt(`${sinan}`);
         huaweiK *= parseFloat(`${parseInt(`${infoZ}`)}`);
         stationsE = `${parseInt(`${huaweiK}`) / (Math.max(guideO.length, 2))}`;
         guideO = `${2 - parseInt(`${sinan}`)}`;
      }
         mathx = new Map([[`${mathx.size}`, 1]]);
      for (let c = 0; c < 2; c++) {
          let checkboxz = true;
          let catalog2 = 5;
         combineG &= 2 << (Math.min(5, Math.abs(catalog2)));
         checkboxz = (checkboxz ? !checkboxz : checkboxz);
         catalog2 |= ((checkboxz ? 2 : 5) % 1);
      }
         mathx = new Map([[`${mathx.size}`, 2]]);
       let shootp = String.fromCharCode(118,95,49,51,95,97,112,112,101,114,97,110,99,101,0);
      indexr = guide2 == String.fromCharCode(100,0);
   let halfl = guide2.length >= 6674501;
   do {
      guide2 += `${pathw.length + 3}`;
      if (halfl) {
         break;
      }
   } while (halfl && (guide2.includes(`${predictione.length}`)));
   if (predictione.length <= 3) {
      predictione = "3";
   }
   if ((pathw.length & 5) > 4) {
      guide2 = `${pathw.length / 1}`;
   }
   for (let h = 0; h < 1; h++) {
       let singleD = 3.0;
         singleD *= parseFloat(`${parseInt(`${singleD}`) % (Math.max(5, parseInt(`${singleD}`)))}`);
          let animation3 = 5;
          let fastl = String.fromCharCode(104,95,53,50,95,120,109,108,115,0);
          let line_ = String.fromCharCode(114,102,112,115,95,51,95,52,56,0);
         singleD *= parseFloat(`${2 % (Math.max(1, parseInt(`${singleD}`)))}`);
         animation3 &= (String.fromCharCode(83,0) == line_ ? line_.length : fastl.length);
         fastl = `${fastl.length}`;
       let private_0j: Array<any> = [234, 880, 917];
       let thumbnailh: Array<any> = [745, 702];
      pathw.push(pathw.length | moonb.size);
   }
   while (2.40 > readU || 3.43 > (2.40 / (Math.max(8, readU)))) {
       let confirmationb = String.fromCharCode(112,114,111,112,101,114,116,121,95,101,95,52,51,0);
       let flipper3: Array<any> = [914, 328];
       let updatesU = 5.0;
       let countdownP = false;
       let regeng_ = 3.0;
       let layoutq = String.fromCharCode(99,108,117,115,116,101,114,95,52,95,56,53,0);
       let unreadu = 5.0;
          let corew = 4.0;
          let selectionR = String.fromCharCode(98,95,55,54,95,99,100,97,116,101,0);
          let acceptedx = true;
         flipper3.push(2);
         corew -= 2;
         selectionR = `${parseInt(`${corew}`)}`;
         acceptedx = (((acceptedx ? selectionR.length : 90) | selectionR.length) > 90);
      let home8 = countdownP ? !countdownP : countdownP;
      do {
         countdownP = 20.52 <= unreadu && layoutq == String.fromCharCode(81,0);
         if (home8) {
            break;
         }
      } while ((unreadu <= 1.89) && home8);
      while ((1 + layoutq.length) <= 3) {
          let member5 = false;
          let x_title5 = 4.0;
          let configr = String.fromCharCode(117,95,56,50,95,99,111,110,110,101,99,116,120,0);
          let appsW = String.fromCharCode(98,114,101,97,100,95,121,95,54,0);
          let logou = 2.0;
         layoutq += `${parseInt(`${unreadu}`) * 1}`;
         member5 = appsW == String.fromCharCode(68,0);
         x_title5 += configr.length % (Math.max(5, appsW.length));
         configr += `${1 << (Math.min(4, Math.abs(parseInt(`${x_title5}`))))}`;
         logou *= configr.length ^ 3;
         break;
      }
      for (let m = 0; m < 1; m++) {
         countdownP = flipper3.includes(updatesU);
      }
         unreadu -= parseFloat(`${2}`);
          let paginationE = 0;
         flipper3.push(flipper3.length);
         paginationE /= Math.max(2, 5);
      for (let l = 0; l < 3; l++) {
         flipper3.push(parseInt(`${regeng_}`) ^ 2);
      }
      let storeh = 7523001.0 >= updatesU;
      do {
         updatesU /= Math.max(parseInt(`${regeng_}`), 2);
         if (storeh) {
            break;
         }
      } while ((!flipper3.includes(updatesU)) && storeh);
      while (5.25 < (confirmationb.length / (Math.max(4, updatesU)))) {
         updatesU += (confirmationb == String.fromCharCode(68,0) ? (countdownP ? 3 : 5) : confirmationb.length);
         break;
      }
      while (1 <= (confirmationb.length - 3) && 1 <= (3 & confirmationb.length)) {
          let commonb = String.fromCharCode(122,101,114,111,118,95,121,95,55,57,0);
          let update_23: Array<any> = [String.fromCharCode(110,95,51,50,95,99,111,112,121,0), String.fromCharCode(108,95,56,57,95,105,110,105,116,101,110,99,0)];
          let vignette1 = String.fromCharCode(108,95,53,54,95,109,97,110,116,105,115,115,97,0);
          let forms = 2;
          let homem: Map<any, any> = new Map([[String.fromCharCode(104,101,97,100,101,114,115,95,56,95,54,54,0),true ], [String.fromCharCode(122,101,114,111,99,111,100,101,99,95,102,95,49,56,0),true ]]);
         confirmationb = `${homem.size - commonb.length}`;
         commonb = "3";
         update_23 = [2];
         vignette1 += `${vignette1.length}`;
         forms -= update_23.length;
         homem = new Map([[`${update_23.length}`, 2]]);
         break;
      }
      for (let t = 0; t < 2; t++) {
          let playlistm = 4.0;
          let upgrade1 = 1.0;
         updatesU += 1 ^ parseInt(`${regeng_}`);
         playlistm *= parseFloat(`${parseInt(`${upgrade1}`)}`);
         upgrade1 *= parseFloat(`${1 / (Math.max(9, parseInt(`${playlistm}`)))}`);
      }
      for (let x = 0; x < 2; x++) {
         unreadu += parseFloat(`${2 << (Math.min(2, confirmationb.length))}`);
      }
       let playercommonn = 0.0;
       let modeD = 0.0;
      readU *= parseFloat(`${1}`);
      break;
   }
   if (!indexr) {
      download3 = `${2 - bannerv.size}`;
   }
   while (guide2.length < 4 && indexr) {
      guide2 += "3";
      break;
   }
       let roboto_ = 4;
       let selecto = 0.0;
       let gmailb = 1;
      let targetK = roboto_ <= 6520994;
      do {
         roboto_ |= 1;
         if (targetK) {
            break;
         }
      } while (targetK && (4 > (parseInt(`${selecto}`) - roboto_) && 1 > (roboto_ + 4)));
         selecto -= parseFloat(`${1}`);
      if (2 == (gmailb + parseInt(`${selecto}`)) && 1.62 == (parseFloat(`${gmailb}`) + selecto)) {
          let linea = String.fromCharCode(119,95,56,55,95,109,98,99,115,0);
          let middlewaree = String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,100,95,54,48,0);
          let faviconZ = 1;
          let selectedH = String.fromCharCode(109,95,54,57,95,101,120,116,101,110,100,0);
          let hongkongQ = 1;
         gmailb <<= Math.min(Math.abs((String.fromCharCode(102,0) == linea ? linea.length : roboto_)), 3);
         middlewaree += `${middlewaree.length ^ 3}`;
         faviconZ *= faviconZ / (Math.max(1, 1));
         selectedH = `${middlewaree.length - 2}`;
         hongkongQ += faviconZ / (Math.max(middlewaree.length, 8));
      }
         selecto /= Math.max(4, parseFloat(`${gmailb >> (Math.min(2, Math.abs(1)))}`));
      for (let m = 0; m < 3; m++) {
         selecto *= parseFloat(`${parseInt(`${selecto}`) << (Math.min(3, Math.abs(3)))}`);
      }
      formr += `${formr.length & predictione.length}`;
      readU /= Math.max(parseFloat(`${moonb.size}`), 3);
   while (1 < moonb.size) {
       let acceptedF = String.fromCharCode(115,117,98,102,105,101,108,100,115,95,120,95,53,57,0);
       let reminderC: Map<any, any> = new Map([[String.fromCharCode(117,110,115,112,105,108,108,95,119,95,53,50,0),String.fromCharCode(114,101,97,100,98,121,116,101,95,117,95,52,50,0)], [String.fromCharCode(114,95,49,52,95,117,100,116,97,0),String.fromCharCode(109,105,99,95,104,95,56,50,0)], [String.fromCharCode(97,117,100,105,111,100,97,116,97,95,52,95,54,51,0),String.fromCharCode(108,111,99,107,95,57,95,55,55,0)]]);
       let sheeti = 0.0;
       let transferv = 4.0;
      for (let s = 0; s < 3; s++) {
         acceptedF += "2";
      }
      if ((sheeti + acceptedF.length) == 4.85 && (acceptedF.length + sheeti) == 4.85) {
         sheeti += 3;
      }
      let leftj = 6840975.0 <= sheeti;
      do {
         sheeti *= acceptedF.length + 2;
         if (leftj) {
            break;
         }
      } while (leftj && (1.11 < (transferv - 3.70) && 3.70 < (transferv - sheeti)));
      if (1.76 >= (transferv * 3.43) && (3.43 * transferv) >= 2.20) {
         reminderC = new Map([[`${reminderC.size}`, reminderC.size / 3]]);
      }
          let closej: Map<any, any> = new Map([[String.fromCharCode(112,114,111,118,105,100,105,110,103,95,112,95,53,54,0),true ], [String.fromCharCode(106,95,57,56,95,98,121,114,121,105,0),true ]]);
         sheeti += (String.fromCharCode(53,0) == acceptedF ? parseInt(`${sheeti}`) : acceptedF.length);
         closej = new Map([[`${closej.size}`, closej.size]]);
      moonb = new Map([[`${reminderC.size}`, 1 - formr.length]]);
      break;
   }
       let weiboU: Map<any, any> = new Map([[String.fromCharCode(119,95,50,57,95,98,97,103,101,0),948], [String.fromCharCode(99,95,50,53,95,97,110,105,109,97,116,101,100,0),168]]);
       let expiredF = 1.0;
         expiredF /= Math.max(3, 2);
      let emojiw = expiredF <= 7030396.0;
      do {
          let goalT = 1;
          let profiler = String.fromCharCode(115,105,109,117,108,99,97,115,116,95,113,95,50,56,0);
          let dicev = false;
         expiredF *= parseInt(`${expiredF}`) ^ 3;
         goalT -= profiler.length / 3;
         profiler += `${(String.fromCharCode(99,0) == profiler ? profiler.length : goalT)}`;
         dicev = (93 < ((dicev ? 93 : profiler.length) * profiler.length));
         if (emojiw) {
            break;
         }
      } while ((weiboU.get(`${expiredF}`) == null) && emojiw);
          let analytic_: Array<any> = [807, 307];
         weiboU.set(`${expiredF}`, parseInt(`${expiredF}`));
         analytic_ = [analytic_.length];
         weiboU = new Map([[`${weiboU.size}`, 3]]);
      for (let u = 0; u < 2; u++) {
         weiboU.set(`${expiredF}`, parseInt(`${expiredF}`));
      }
         weiboU.set(`${expiredF}`, 3);
      pathw = [weiboU.size];
       let lineg = true;
       let updatesz = 1.0;
       let viewerj = 3.0;
         viewerj -= parseFloat(`${parseInt(`${updatesz}`) | 1}`);
      for (let e = 0; e < 2; e++) {
         lineg = (viewerj * updatesz) > 100.18;
      }
      moonb.set(`${indexr}`, 1);
   for (let b = 0; b < 1; b++) {
      formr += "2";
   }
       let controlsX = 2;
       let changeS = String.fromCharCode(104,95,51,95,116,115,99,99,0);
         changeS += `${changeS.length}`;
       let whistleB: Map<any, any> = new Map([[String.fromCharCode(100,101,97,108,108,111,99,97,116,105,111,110,95,105,95,51,52,0),true ], [String.fromCharCode(112,114,105,110,116,101,114,95,50,95,57,53,0),true ]]);
          let long_g0: Map<any, any> = new Map([[String.fromCharCode(108,95,52,53,95,101,110,115,117,114,101,0),true ], [String.fromCharCode(102,97,99,101,98,111,111,107,95,50,95,50,56,0),true ], [String.fromCharCode(101,108,101,109,101,110,116,119,105,115,101,95,114,95,51,48,0),true ]]);
          let save4 = 0.0;
         whistleB = new Map([[`${whistleB.size}`, whistleB.size]]);
         long_g0.set(`${save4}`, long_g0.size * parseInt(`${save4}`));
      let paginationb = controlsX >= 5007240;
      do {
         controlsX /= Math.max(5, (changeS == String.fromCharCode(83,0) ? whistleB.size : changeS.length));
         if (paginationb) {
            break;
         }
      } while (paginationb && (2 > changeS.length));
         changeS = `${changeS.length - whistleB.size}`;
         changeS = `${changeS.length | whistleB.size}`;
      pathw = [bannerv.size % (Math.max(2, download3.length))];
   while (formr.startsWith(`${indexr}`)) {
       let policyP: Map<any, any> = new Map([[String.fromCharCode(108,95,51,53,95,115,101,116,0),String.fromCharCode(121,95,56,55,95,97,116,111,109,115,0)], [String.fromCharCode(99,95,53,50,95,115,117,114,102,97,99,101,0),String.fromCharCode(109,95,56,53,95,108,97,114,103,101,0)], [String.fromCharCode(108,95,57,51,95,100,114,111,112,120,0),String.fromCharCode(105,95,51,51,95,108,111,99,105,0)]]);
       let floater1 = 3;
       let details5 = 0;
      let reducery = details5 >= 5799210;
      do {
          let mbjscommonD = String.fromCharCode(108,95,56,95,113,117,101,114,121,0);
          let mailE = String.fromCharCode(121,95,56,55,95,111,103,103,112,97,99,107,0);
          let pathD: Map<any, any> = new Map([[String.fromCharCode(117,110,109,97,116,99,104,101,100,95,106,95,53,56,0),false ], [String.fromCharCode(115,112,105,110,108,111,99,107,95,51,95,53,50,0),false ]]);
         details5 %= Math.max((String.fromCharCode(72,0) == mbjscommonD ? mbjscommonD.length : details5), 2);
         mailE = `${pathD.size % 2}`;
         pathD.set(mailE, pathD.size);
         if (reducery) {
            break;
         }
      } while (((floater1 + details5) == 2 || (2 + details5) == 1) && reducery);
         details5 /= Math.max(policyP.size, 3);
      formr = `${(formr == String.fromCharCode(103,0) ? download3.length : formr.length)}`;
      break;
   }
       let moref = String.fromCharCode(118,105,98,114,97,116,105,111,110,95,112,95,56,57,0);
       let predictionI = 3.0;
       let unreadA = String.fromCharCode(114,95,57,51,95,114,101,103,105,111,110,0);
          let videocommond = 4.0;
         predictionI /= Math.max(5, 2 & parseInt(`${predictionI}`));
         videocommond *= 3;
      while (3.26 < (predictionI / 1.87)) {
          let default_6m = String.fromCharCode(112,95,53,52,95,108,105,98,99,0);
          let mbbidk = String.fromCharCode(108,95,52,51,95,109,112,101,103,116,115,0);
          let watch9 = 5.0;
          let xcopy_0bC = String.fromCharCode(106,95,50,54,95,120,121,122,116,97,98,108,101,115,0);
          let wind5 = String.fromCharCode(109,99,111,109,112,95,57,95,51,48,0);
         predictionI *= unreadA.length;
         default_6m = `${1 * mbbidk.length}`;
         mbbidk = `${(String.fromCharCode(87,0) == default_6m ? default_6m.length : mbbidk.length)}`;
         watch9 -= mbbidk.length;
         xcopy_0bC += `${(String.fromCharCode(72,0) == default_6m ? parseInt(`${watch9}`) : default_6m.length)}`;
         wind5 += "2";
         break;
      }
         moref = `${moref.length}`;
      let baiduU = 8976520.0 >= predictionI;
      do {
         predictionI *= (String.fromCharCode(122,0) == moref ? moref.length : unreadA.length);
         if (baiduU) {
            break;
         }
      } while ((1 >= (unreadA.length >> (Math.min(Math.abs(5), 3))) || (unreadA.length * 5) >= 2) && baiduU);
          let moreW = 1.0;
          let style_ = String.fromCharCode(101,95,53,55,95,118,112,111,105,110,116,0);
          let langkeyG = true;
         moref = `${2 - unreadA.length}`;
         moreW += (String.fromCharCode(89,0) == style_ ? style_.length : parseInt(`${moreW}`));
         langkeyG = style_.endsWith(`${langkeyG}`);
      for (let i = 0; i < 1; i++) {
          let upgradeP = true;
         predictionI *= moref.length + unreadA.length;
         upgradeP = !upgradeP;
      }
      if ((parseInt(`${predictionI}`) / (Math.max(moref.length, 1))) < 2 && 5.30 < (predictionI / (Math.max(moref.length, 4)))) {
          let side7 = String.fromCharCode(100,105,114,97,99,100,115,112,95,101,95,55,53,0);
         moref += `${(String.fromCharCode(82,0) == moref ? moref.length : parseInt(`${predictionI}`))}`;
         side7 = `${2 | side7.length}`;
      }
      while (3 >= (unreadA.length >> (Math.min(Math.abs(2), 2)))) {
          let materialX = 4;
          let vignettex = 3.0;
          let mimoj = String.fromCharCode(101,118,101,114,121,98,111,100,121,95,56,95,54,49,0);
          let mbbannerl: Map<any, any> = new Map([[String.fromCharCode(98,95,52,57,95,109,111,118,101,110,99,0),934], [String.fromCharCode(104,114,112,95,114,95,51,0),660]]);
         unreadA = `${parseInt(`${vignettex}`) * 3}`;
         materialX &= (String.fromCharCode(113,0) == mimoj ? mimoj.length : materialX);
         vignettex /= Math.max(1, mimoj.length);
         mbbannerl = new Map([[mimoj, 1 | mimoj.length]]);
         break;
      }
          let layout5 = String.fromCharCode(98,95,53,55,95,100,111,99,117,109,101,110,116,115,0);
         unreadA += `${unreadA.length / (Math.max(moref.length, 2))}`;
         layout5 += `${(String.fromCharCode(56,0) == layout5 ? layout5.length : layout5.length)}`;
      download3 += `${unreadA.length + moref.length}`;

          dispatch(incrementSportWatchTime());
        }, 1000);

        return () => clearInterval(unsub);
      }
    }, [route.name])

    
    
    
    
    

    const isVip = ttFast.isVip(userState.user);

    const pauseSportVideo =
      route.name === "体育详情" &&
      screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS && !ttFast.isVip(userState.user)

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
       let catagoryq = true;
    let stringsp = String.fromCharCode(105,110,118,111,107,101,114,95,103,95,52,52,0);
    let paginationB = false;
    let videojsB = 4;
    let filedv = String.fromCharCode(104,114,115,115,95,98,95,51,55,0);
    let verticalH = String.fromCharCode(118,95,50,49,95,99,111,109,112,105,108,101,111,112,116,105,111,110,0);
    let moonw: Map<any, any> = new Map([[String.fromCharCode(112,108,97,116,101,97,117,95,105,95,53,48,0),false ], [String.fromCharCode(110,112,112,115,99,97,108,101,95,109,95,49,53,0),false ], [String.fromCharCode(118,95,55,95,99,111,109,112,114,101,115,115,111,114,0),true ]]);
    let connectionx = String.fromCharCode(110,111,110,114,100,95,122,95,56,55,0);
    let modelsd = String.fromCharCode(119,95,55,48,95,110,117,109,98,101,114,0);
   let rewardvideo_ = moonw.size <= 7683108;
   do {
      moonw = new Map([[stringsp, ((catagoryq ? 3 : 5))]]);
      if (rewardvideo_) {
         break;
      }
   } while (rewardvideo_ && (!filedv.startsWith(`${moonw.size}`)));

      if (!playerVodAds?.actionUrl) {

   while (!paginationB) {
      verticalH = `${1 & verticalH.length}`;
      break;
   }
        

      catagoryq = 41 <= filedv.length && 41 <= stringsp.length;
        tt_humidity_guide.playsAdsClickAnalytics();

   let calendart = catagoryq ? !catagoryq : catagoryq;
   do {
      catagoryq = filedv == String.fromCharCode(76,0);
      if (calendart) {
         break;
      }
   } while ((stringsp.length >= 5 || catagoryq) && calendart);
        

   if ((3 >> (Math.min(4, Math.abs(videojsB)))) == 2 && (verticalH.length >> (Math.min(5, Math.abs(videojsB)))) == 3) {
      verticalH += `${(2 | (catagoryq ? 5 : 3))}`;
   }

        if (onPressCountdown) onPressCountdown();

   while (stringsp.length == 3) {
       let templ = true;
       let apps5 = String.fromCharCode(113,95,51,51,95,104,111,114,110,0);
       let d_manageru = 5.0;
       let homeF = String.fromCharCode(110,95,54,56,95,108,97,103,97,114,105,116,104,114,97,99,0);
       let liveA = String.fromCharCode(103,95,55,54,95,115,117,109,102,0);
       let whatsappo = String.fromCharCode(108,95,53,53,95,105,110,99,114,101,97,115,101,0);
      let placeholderp = liveA == String.fromCharCode(111,102,121,102,107,122,111,106,110,101,0);
      do {
         liveA += `${liveA.length | whatsappo.length}`;
         if (placeholderp) {
            break;
         }
      } while ((3 >= (5 - liveA.length)) && placeholderp);
      for (let e = 0; e < 2; e++) {
          let bottomJ = 4.0;
          let result4 = 3;
          let star2 = 4;
          let castingT = String.fromCharCode(115,101,116,102,100,95,49,95,51,53,0);
          let step2: Map<any, any> = new Map([[String.fromCharCode(112,117,116,99,95,97,95,52,49,0),24], [String.fromCharCode(107,95,50,49,95,115,121,115,116,101,109,0),351]]);
         whatsappo += `${parseInt(`${d_manageru}`) - 2}`;
         bottomJ -= 1 << (Math.min(2, Math.abs(result4)));
         result4 %= Math.max(step2.size, 1);
         star2 >>= Math.min(Math.abs(parseInt(`${bottomJ}`)), 1);
         castingT = "2";
         step2.set(`${result4}`, result4);
      }
       let mbnativeadvanced1 = 5.0;
       let found_ = 1.0;
         apps5 += `${(String.fromCharCode(107,0) == whatsappo ? whatsappo.length : parseInt(`${mbnativeadvanced1}`))}`;
      for (let o = 0; o < 2; o++) {
         homeF = `${(homeF == String.fromCharCode(75,0) ? homeF.length : (templ ? 2 : 2))}`;
      }
       let filterp = String.fromCharCode(100,101,97,100,105,110,101,95,112,95,49,48,0);
       let middlewareo = String.fromCharCode(101,95,56,50,95,115,101,97,114,99,104,105,110,103,0);
       let common9 = 5;
       let awayU = 5;
      while (!templ || (3.50 - mbnativeadvanced1) > 5.0) {
         mbnativeadvanced1 /= Math.max((String.fromCharCode(56,0) == apps5 ? (templ ? 5 : 2) : apps5.length), 5);
         break;
      }
          let gmailM = String.fromCharCode(115,95,49,0);
         mbnativeadvanced1 -= 1;
         gmailM += `${gmailM.length ^ 3}`;
          let shrinku = 4.0;
         mbnativeadvanced1 *= 1 & awayU;
         shrinku -= parseInt(`${shrinku}`) - 1;
       let volumeM = String.fromCharCode(99,95,54,54,95,113,117,105,99,107,0);
       let lists = String.fromCharCode(112,95,54,49,95,112,97,116,104,115,0);
      paginationB = verticalH == String.fromCharCode(73,0);
      break;
   }
        return;

       let floaterM = 3.0;
         floaterM += parseInt(`${floaterM}`);
      if (5.53 < (floaterM + 3.10)) {
         floaterM += parseInt(`${floaterM}`) / 1;
      }
       let actionsa = String.fromCharCode(101,110,100,112,111,105,110,116,95,118,95,53,55,0);
      catagoryq = (36 == (filedv.length & (paginationB ? 36 : filedv.length)));
      }

      const url = playerVodAds?.actionUrl.includes(HalfCenter.chatUnselected([109,113,113,117,5],0x5,false)) ? playerVodAds?.actionUrl : HalfCenter.chatUnselected([-42,-54,-54,-50,-51,-124,-111,-111,-66],0xBE,false) + playerVodAds?.actionUrl

      

       let tumbnail2 = String.fromCharCode(102,105,108,108,101,114,95,111,95,48,0);
       let goalT: Map<any, any> = new Map([[String.fromCharCode(110,95,53,53,95,112,108,97,121,101,114,0),true ], [String.fromCharCode(98,95,56,55,95,99,101,108,108,115,0),true ]]);
         tumbnail2 = "3";
      if ((goalT.size | 5) < 2 && 5 < (goalT.size | tumbnail2.length)) {
          let areal = 0.0;
          let mbnativeadvancedn = String.fromCharCode(109,103,109,116,95,52,95,57,57,0);
          let terms9 = String.fromCharCode(99,95,53,55,95,118,101,99,116,111,114,115,99,111,112,101,0);
          let chinasamep = String.fromCharCode(102,114,97,109,101,100,97,116,97,95,115,95,54,49,0);
         tumbnail2 += `${terms9.length / 2}`;
         areal *= (String.fromCharCode(119,0) == mbnativeadvancedn ? parseInt(`${areal}`) : mbnativeadvancedn.length);
         terms9 += `${chinasamep.length}`;
         chinasamep += "1";
      }
         goalT.set(`${tumbnail2}`, tumbnail2.length);
      for (let b = 0; b < 2; b++) {
         tumbnail2 = "2";
      }
      let minivod2 = 7634836 <= goalT.size;
      do {
          let splashB = String.fromCharCode(109,97,100,101,98,121,95,98,95,57,48,0);
          let field1 = 0.0;
         goalT.set(`${field1}`, 3);
         splashB += `${splashB.length & splashB.length}`;
         field1 -= (parseFloat(`${String.fromCharCode(87,0) == splashB ? splashB.length : splashB.length}`));
         if (minivod2) {
            break;
         }
      } while ((goalT.size <= 2) && minivod2);
      if ((goalT.size % (Math.max(8, tumbnail2.length))) == 2) {
         tumbnail2 = `${(tumbnail2 == String.fromCharCode(100,0) ? goalT.size : tumbnail2.length)}`;
      }
      filedv = "2";
      

      stringsp += `${verticalH.length}`;

      

   for (let v = 0; v < 2; v++) {
      verticalH += `${3 >> (Math.min(1, Math.abs(moonw.size)))}`;
   }
      

   while (stringsp.length == 2 && !catagoryq) {
      stringsp += `${(String.fromCharCode(120,0) == stringsp ? moonw.size : stringsp.length)}`;
      break;
   }
      

   let downloadedk = 5585534 <= stringsp.length;
   do {
      stringsp = "3";
      if (downloadedk) {
         break;
      }
   } while (downloadedk && (paginationB));
      

   for (let h = 0; h < 1; h++) {
      videojsB >>= Math.min(verticalH.length, 2);
   }
      

      filedv += `${((paginationB ? 4 : 2) & (catagoryq ? 4 : 1))}`;
      

   for (let v = 0; v < 2; v++) {
       let firebasem: Map<any, any> = new Map([[String.fromCharCode(105,95,55,49,95,99,97,118,101,97,116,0),925], [String.fromCharCode(122,95,57,50,95,112,116,115,101,115,0),546], [String.fromCharCode(110,111,110,99,111,110,116,97,99,116,95,118,95,55,52,0),102]]);
       let watchC = false;
       let reada: Array<any> = [558, 734, 760];
       let notificationh = 0.0;
          let foregroundE = String.fromCharCode(102,101,97,116,117,114,101,95,52,95,52,49,0);
         firebasem.set(`${watchC}`, (foregroundE.length ^ (watchC ? 5 : 1)));
         reada.push(3 >> (Math.min(2, reada.length)));
         firebasem = new Map([[`${firebasem.size}`, firebasem.size & reada.length]]);
         notificationh -= reada.length;
      if ((notificationh + 4.28) <= 5.31) {
          let gradlewX: Map<any, any> = new Map([[String.fromCharCode(122,95,56,95,115,101,116,117,112,100,0),String.fromCharCode(112,95,49,57,95,102,101,116,99,104,101,114,0)], [String.fromCharCode(108,95,50,54,95,112,111,105,110,116,99,98,98,0),String.fromCharCode(115,107,105,110,95,119,95,57,57,0)]]);
          let stationsZ: Array<any> = [886, 867, 620];
          let zhuboT = 0.0;
          let homeB = 5;
         notificationh -= 1;
         gradlewX = new Map([[`${zhuboT}`, 2]]);
         stationsZ = [parseInt(`${zhuboT}`)];
         homeB >>= Math.min(1, Math.abs(homeB));
      }
      let componentW = 5748494.0 <= notificationh;
      do {
         notificationh /= Math.max(3, 2);
         if (componentW) {
            break;
         }
      } while (((reada.length * parseInt(`${notificationh}`)) >= 5 || (reada.length * parseInt(`${notificationh}`)) >= 5) && componentW);
       let sheetQ = String.fromCharCode(109,101,109,100,117,112,95,105,95,49,54,0);
         watchC = 6 < firebasem.size;
         firebasem = new Map([[sheetQ, (1 | (watchC ? 5 : 4))]]);
         notificationh /= Math.max(2, 3 - parseInt(`${notificationh}`));
         sheetQ += "2";
         watchC = sheetQ.length <= 19 && !watchC;
      verticalH += `${stringsp.length}`;
   }
      

      catagoryq = filedv == verticalH;
      Linking.openURL(url);

      verticalH = `${stringsp.length}`;
      

      paginationB = (63 < (stringsp.length + (!paginationB ? 63 : stringsp.length)));

      

   if (paginationB) {
       let profileq = 0;
       let match4 = String.fromCharCode(99,104,101,99,107,105,110,103,95,52,95,49,53,0);
      if (profileq < 5) {
         profileq -= match4.length & profileq;
      }
          let groupb = String.fromCharCode(99,111,112,116,115,95,110,95,57,51,0);
          let usernamew = String.fromCharCode(116,95,56,52,0);
         profileq >>= Math.min(Math.abs(usernamew.length >> (Math.min(Math.abs(3), 3))), 5);
         groupb = "2";
         usernamew += `${3 * groupb.length}`;
      moonw.set(`${catagoryq}`, ((paginationB ? 2 : 3) % (Math.max((catagoryq ? 2 : 5), 1))));
   }
      tt_humidity_guide.playsAdsClickAnalytics({
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
                isSeekErrorRef={isSeekErrorRef}
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
