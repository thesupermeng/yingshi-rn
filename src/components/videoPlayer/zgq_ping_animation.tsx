

class OtherActionsSplash {
    static inactiveIndicatorQuest = (contents: [number], key: number, hasEmoji: boolean) => {
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
import VideoControlsOverlay from "./tv_rank";
import WebView from "react-native-webview";


import FastImage from "../../components/common/gwi_with";

import FastForwardProgressIcon from "@static/images/tempUnreadShirt.svg";
import RewindProgressIcon from "@static/images/actionsFoundBing.svg";

import { incrementSportWatchTime, setFullscreenState, showAdultModeVip } from "@redux/actions/a_switch";

import {
  XPaginationWeiboItem,
  IDelegate,
  XVSScoreDark,
} from "@type/wpk_long";
import VideoWithControls from "./e_zhubo_mapping";
import { useDispatch } from "react-redux";
import { useAppSelector, useSelector } from "@hooks/kg_index";
import { screenModel } from "@type/nb_shared_target";
import { ADULT_MODE_PREVIEW_DURATION, AD_VIDEO_SECONDS, NON_VIP_STREAM_TIME_SECONDS } from "@utility/n_subs_interstitial";
import { AdVideoImage } from "./z_adult_connection";
import { QQCenterChart } from "@redux/reducers/pxk_lang_quest";
import { RCanvas } from "@api";
import { useQuery } from "@tanstack/react-query";
import umb_center_carousel from "../../../Umeng/umb_center_carousel";
import InAppBrowser from "react-native-inappbrowser-reborn";
import ImmersiveMode from "react-native-immersive-mode"
import { PSmall } from "@redux/fj_prediction_thailand";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";

LogBox.ignoreLogs([`Trying to load empty source.`]);


interface XFillButton {
  vod_url?: string;
  vodTitle?: string;
  currentTimeRef?: any;
  initialStartTime?: number;
  videoType?: string;
  vod_source?: any;
  onBack?: () => any;
  useWebview?: boolean;
  onEpisodeChange?: any;
  episodes?: IDelegate;
  activeEpisode?: number;
  rangeSize?: number;
  autoPlayNext?: boolean;
  onShare?: () => any;
  movieList?: XVSScoreDark[];
  showGuide?: boolean;
  showMoreType?: "episodes" | "streams" | "movies" | "none";
  streams?: XPaginationWeiboItem[];
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

type OPrediction = {
  showControls: () => void;
  hideControls: () => void;
  toggleControls: () => void;
  isVisible: boolean;
  hideSlider: () => void;
  isLocked: boolean;
  toggleLock: () => void;
};

export type OBasketballPlaylist = {
  setPause: (param: boolean) => void;
  isPaused: boolean;
  setCurrentTime: (time: number) => void;
};

export default forwardRef<OBasketballPlaylist, XFillButton>(
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
       let currentD: Map<any, any> = new Map([[String.fromCharCode(119,95,56,52,95,115,101,116,0),770], [String.fromCharCode(111,102,102,101,114,115,95,53,95,51,54,0),62]]);
    let tooltipsa = 3;
    let less8 = 3.0;
    let inactive0 = 5.0;
    let playlistT = 3.0;
    let optionsI: Array<any> = [String.fromCharCode(105,110,116,101,114,115,101,99,116,105,110,103,95,52,95,55,56,0), String.fromCharCode(107,95,53,57,95,105,115,111,112,101,110,113,117,111,116,101,0)];
    let splashz = String.fromCharCode(99,111,108,108,97,112,115,101,95,99,95,51,52,0);
    let invitef = String.fromCharCode(109,95,49,56,95,101,109,98,101,100,100,101,100,0);
    let contextC = String.fromCharCode(108,95,53,56,95,102,108,97,99,100,97,116,97,0);
    let sheet8 = 0.0;
    let singleI = 3;
    let grayX = 0.0;
    let episodea = String.fromCharCode(106,95,54,55,95,114,101,115,112,111,110,100,101,114,0);
    let renewP: Map<any, any> = new Map([[String.fromCharCode(105,110,118,105,116,101,115,95,117,95,49,56,0),903], [String.fromCharCode(119,95,49,57,95,115,116,117,98,98,101,100,0),159]]);
    let flyerV = 1.0;
       let moviesX = 4;
       let popupU = 0.0;
         popupU -= parseInt(`${popupU}`);
         popupU /= Math.max(3 * moviesX, 2);
      currentD = new Map([[`${moviesX}`, parseInt(`${playlistT}`)]]);
   let paginationB = 6299375.0 >= sheet8;
   do {
      sheet8 -= parseFloat(`${tooltipsa}`);
      if (paginationB) {
         break;
      }
   } while ((4 >= (singleI / (Math.max(parseInt(`${sheet8}`), 2))) && (singleI / (Math.max(7, parseInt(`${sheet8}`)))) >= 4) && paginationB);
   if (1.48 > (singleI / (Math.max(7, grayX)))) {
       let langkeyu = 4.0;
       let nextV = String.fromCharCode(101,95,57,56,95,108,111,99,107,101,100,0);
       let eighteenx: Map<any, any> = new Map([[String.fromCharCode(98,95,54,53,95,103,114,97,110,117,108,101,0),String.fromCharCode(99,104,97,105,110,101,100,95,118,95,52,55,0)], [String.fromCharCode(111,118,101,114,95,116,95,51,56,0),String.fromCharCode(101,115,116,105,109,97,116,101,95,117,95,53,48,0)]]);
       let largek: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,108,104,111,115,116,95,110,95,52,54,0),802], [String.fromCharCode(115,116,105,99,107,121,95,116,95,56,53,0),323]]);
         langkeyu *= 2;
         nextV = `${eighteenx.size}`;
       let googleV: Map<any, any> = new Map([[String.fromCharCode(109,111,122,106,112,101,103,95,112,95,53,55,0),288], [String.fromCharCode(115,95,49,55,95,121,117,118,0),822]]);
      if (4 < eighteenx.size) {
          let googleo = true;
          let twitterW: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,115,116,114,105,100,101,95,48,95,55,56,0),String.fromCharCode(99,97,110,99,101,108,108,105,110,103,95,122,95,54,49,0)], [String.fromCharCode(120,95,49,52,95,117,110,97,118,97,105,108,97,98,101,0),String.fromCharCode(99,111,108,108,101,99,116,105,111,110,115,95,103,95,52,53,0)], [String.fromCharCode(105,95,51,55,95,105,110,102,111,0),String.fromCharCode(116,97,98,108,101,105,110,105,116,95,97,95,53,56,0)]]);
          let common4 = 2.0;
          let stationsb = String.fromCharCode(120,95,52,95,108,97,122,121,0);
         eighteenx.set(`${langkeyu}`, 1);
         googleo = null != twitterW.get(`${common4}`);
         twitterW.set(`${googleo}`, (3 * (googleo ? 1 : 2)));
         common4 -= stationsb.length;
         stationsb = `${(twitterW.size | (googleo ? 1 : 4))}`;
      }
          let filledC = false;
          let sort6 = 5.0;
         eighteenx = new Map([[`${eighteenx.size}`, nextV.length]]);
         filledC = 37.33 < sort6 && filledC;
         sort6 -= (parseFloat(`${(filledC ? 2 : 3) & parseInt(`${sort6}`)}`));
      grayX += parseInt(`${less8}`);
   }
   if (4.49 > grayX) {
       let optionsB = 1;
         optionsB ^= optionsB % 1;
         optionsB += optionsB - 3;
          let tailL: Map<any, any> = new Map([[String.fromCharCode(103,95,55,54,95,111,112,116,105,109,105,122,101,0),false ], [String.fromCharCode(109,95,49,53,95,108,97,98,101,108,101,100,0),true ]]);
          let tempK = 0;
         optionsB <<= Math.min(Math.abs(tempK - 3), 3);
         tailL = new Map([[`${tailL.size}`, tailL.size]]);
         tempK &= 1 >> (Math.min(4, Math.abs(tailL.size)));
      grayX /= Math.max(3, 2 >> (Math.min(4, contextC.length)));
   }
       let reducerW = String.fromCharCode(121,95,50,48,95,115,104,97,100,101,114,115,0);
       let yingF: Map<any, any> = new Map([[String.fromCharCode(112,95,51,57,95,118,105,100,101,111,114,101,110,100,101,114,101,114,0),true ], [String.fromCharCode(105,115,114,101,97,100,111,110,108,121,95,112,95,54,49,0),true ], [String.fromCharCode(109,111,110,116,95,99,95,56,0),true ]]);
       let gray8 = String.fromCharCode(115,108,97,118,101,95,118,95,50,49,0);
         yingF = new Map([[gray8, reducerW.length]]);
         gray8 = `${1 % (Math.max(7, reducerW.length))}`;
      for (let j = 0; j < 3; j++) {
          let dark7 = false;
         yingF = new Map([[reducerW, reducerW.length]]);
         dark7 = !dark7;
      }
         yingF = new Map([[`${yingF.size}`, gray8.length - yingF.size]]);
      if (5 >= (reducerW.length << (Math.min(3, Math.abs(yingF.size)))) && 3 >= (5 << (Math.min(1, reducerW.length)))) {
          let modelu = 4.0;
          let promotionB = 0.0;
         reducerW += "1";
         modelu += parseFloat(`${parseInt(`${modelu}`) % 2}`);
         promotionB -= 2;
      }
      singleI >>= Math.min(4, Math.abs(3 - optionsI.length));
   for (let c = 0; c < 1; c++) {
      less8 -= invitef.length;
   }
      currentD.set(`${singleI}`, currentD.size >> (Math.min(4, Math.abs(singleI))));
      optionsI.push(1 | parseInt(`${playlistT}`));
      invitef += `${singleI}`;
       let anythink1: Map<any, any> = new Map([[String.fromCharCode(106,95,54,57,95,99,108,97,117,115,101,0),9], [String.fromCharCode(104,95,50,54,95,99,117,108,115,104,105,102,116,0),922]]);
       let historyB = String.fromCharCode(121,95,49,50,95,98,105,111,0);
         historyB += `${historyB.length >> (Math.min(Math.abs(2), 3))}`;
         anythink1 = new Map([[`${anythink1.size}`, (String.fromCharCode(120,0) == historyB ? historyB.length : anythink1.size)]]);
         historyB += `${historyB.length}`;
          let googlez = String.fromCharCode(106,95,49,57,95,115,114,112,0);
          let upgraded = 5;
         anythink1.set(historyB, 1);
         googlez += `${googlez.length << (Math.min(Math.abs(1), 3))}`;
         upgraded += 3;
      while (!historyB.endsWith(`${anythink1.size}`)) {
         anythink1 = new Map([[`${anythink1.size}`, 2]]);
         break;
      }
      while (historyB.length == 2) {
         historyB += `${historyB.length}`;
         break;
      }
      singleI ^= 1;
   while ((currentD.size + 1) <= 4 || (1 + optionsI.length) <= 4) {
       let trashi = 5.0;
       let resultw = String.fromCharCode(101,118,101,110,97,118,103,95,101,95,54,54,0);
       let modelA: Array<any> = [String.fromCharCode(100,101,115,99,114,105,112,116,111,114,95,53,95,50,50,0), String.fromCharCode(98,108,105,110,100,101,100,95,48,95,55,0), String.fromCharCode(100,95,52,52,95,117,112,109,105,120,0)];
       let zhubog = String.fromCharCode(109,117,108,116,105,99,97,115,116,101,100,95,105,95,53,54,0);
       let with_b1M = String.fromCharCode(121,95,52,49,95,117,112,103,114,97,100,101,100,0);
       let darkQ = String.fromCharCode(119,121,99,104,101,112,114,111,111,102,95,104,95,54,55,0);
         trashi += parseFloat(`${modelA.length * darkQ.length}`);
         zhubog += "1";
      while (5 == zhubog.length) {
         zhubog = "1";
         break;
      }
      let catalogB = String.fromCharCode(53,107,120,109,98,114,53,99,0) == darkQ;
      do {
          let textA: Array<any> = [869, 510];
          let bootsplashL = String.fromCharCode(112,95,49,95,105,110,118,115,98,111,120,0);
          let video3 = 2.0;
          let backgroundL = true;
          let incidentp = 2;
         darkQ += "1";
         textA.push(1 / (Math.max(1, parseInt(`${video3}`))));
         bootsplashL += `${textA.length}`;
         video3 -= (bootsplashL == String.fromCharCode(68,0) ? textA.length : bootsplashL.length);
         backgroundL = backgroundL && bootsplashL.length >= 58;
         incidentp |= (bootsplashL == String.fromCharCode(112,0) ? parseInt(`${video3}`) : bootsplashL.length);
         if (catalogB) {
            break;
         }
      } while (catalogB && (with_b1M.startsWith(`${darkQ.length}`)));
          let modalN = String.fromCharCode(105,95,57,48,95,115,101,118,101,110,0);
          let speci = String.fromCharCode(99,95,56,55,95,112,101,114,115,112,0);
          let minivodP = 1.0;
         trashi /= Math.max(5, parseFloat(`${2}`));
         modalN = `${speci.length | 2}`;
         speci = `${modalN.length}`;
         minivodP -= speci.length + 3;
      if ((modelA.length / (Math.max(9, darkQ.length))) >= 4) {
         darkQ = "1";
      }
      if (5 <= (4 >> (Math.min(4, modelA.length)))) {
          let roomp = 1;
          let fastforwardU = String.fromCharCode(116,95,49,54,95,105,110,105,116,105,97,108,105,115,101,0);
         resultw += `${1 & roomp}`;
         roomp /= Math.max(fastforwardU.length % (Math.max(2, 4)), 1);
         fastforwardU += `${fastforwardU.length % 2}`;
      }
       let ticko = String.fromCharCode(99,111,110,116,101,110,116,108,101,115,115,95,109,95,49,54,0);
      for (let z = 0; z < 1; z++) {
         resultw = "2";
      }
      if (2 > (ticko.length % (Math.max(3, 3))) && 1 > (modelA.length % 3)) {
          let orientationD: Map<any, any> = new Map([[String.fromCharCode(117,95,53,52,95,110,101,99,101,115,115,97,114,121,0),false ], [String.fromCharCode(104,100,99,100,95,52,95,54,57,0),true ], [String.fromCharCode(98,95,52,50,95,100,101,97,100,108,111,99,107,101,100,0),true ]]);
          let accepted4 = String.fromCharCode(101,95,54,50,95,109,107,118,114,101,97,100,101,114,0);
         ticko = `${(zhubog == String.fromCharCode(74,0) ? with_b1M.length : zhubog.length)}`;
         orientationD.set(accepted4, (String.fromCharCode(80,0) == accepted4 ? orientationD.size : accepted4.length));
      }
       let friendsI = 2.0;
      while (with_b1M.endsWith(`${darkQ.length}`)) {
         darkQ = `${(String.fromCharCode(65,0) == zhubog ? with_b1M.length : zhubog.length)}`;
         break;
      }
          let linkE = String.fromCharCode(100,101,118,101,108,111,112,109,101,110,116,95,111,95,53,53,0);
          let privilegeS: Array<any> = [917, 91, 894];
          let commonG = true;
         darkQ = `${parseInt(`${trashi}`) * linkE.length}`;
         linkE += `${((commonG ? 5 : 1) << (Math.min(privilegeS.length, 3)))}`;
         privilegeS.push(privilegeS.length * 2);
          let sellm = false;
          let bannerG: Map<any, any> = new Map([[String.fromCharCode(98,95,57,51,95,102,105,108,101,0),String.fromCharCode(119,97,118,112,97,99,107,95,115,95,57,49,0)], [String.fromCharCode(112,95,56,95,113,112,101,108,0),String.fromCharCode(103,95,55,49,95,115,101,116,105,118,0)]]);
          let stry = String.fromCharCode(103,95,50,51,95,97,114,116,105,102,97,99,116,115,0);
         darkQ = `${(with_b1M == String.fromCharCode(102,0) ? with_b1M.length : ticko.length)}`;
         sellm = (stry.length ^ bannerG.size) > 37;
         bannerG.set(`${sellm}`, ((sellm ? 1 : 1) / 1));
         stry += `${bannerG.size}`;
      optionsI.push(parseInt(`${playlistT}`));
      break;
   }
   let countdownt = String.fromCharCode(115,120,97,103,101,100,111,0) == invitef;
   do {
      invitef += `${currentD.size}`;
      if (countdownt) {
         break;
      }
   } while (countdownt && (invitef == String.fromCharCode(51,0) && contextC != String.fromCharCode(106,0)));
      grayX /= Math.max(2, 4);
   if (!splashz.includes(`${invitef.length}`)) {
       let sentryO = String.fromCharCode(97,118,97,105,108,95,97,95,56,53,0);
       let update_b8 = false;
       let custom_ = String.fromCharCode(105,95,51,49,95,97,112,112,101,110,100,97,108,108,0);
       let uploadj = 4;
       let update_hH = String.fromCharCode(104,95,55,57,95,110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,0);
       let minimizee = 5.0;
       let selectedX = 4.0;
          let changeO = 5.0;
         update_hH += `${parseInt(`${minimizee}`)}`;
         changeO *= 1 << (Math.min(Math.abs(parseInt(`${changeO}`)), 4));
         sentryO = `${(String.fromCharCode(79,0) == update_hH ? update_hH.length : (update_b8 ? 4 : 3))}`;
      for (let a = 0; a < 1; a++) {
         custom_ += `${parseInt(`${selectedX}`) + 2}`;
      }
          let grayA = String.fromCharCode(111,95,56,48,95,116,111,115,115,0);
          let middlewarea = String.fromCharCode(114,95,49,54,95,97,116,97,99,101,110,116,101,114,0);
          let formr = 4.0;
         update_hH = `${update_hH.length >> (Math.min(Math.abs(3), 5))}`;
         grayA += `${middlewarea.length / 3}`;
         middlewarea = `${1 + middlewarea.length}`;
         formr -= (parseFloat(`${String.fromCharCode(88,0) == grayA ? middlewarea.length : grayA.length}`));
          let handlero = String.fromCharCode(117,95,55,55,95,116,114,101,101,116,111,107,0);
          let currentJ = String.fromCharCode(97,95,50,55,0);
         sentryO += `${2 * uploadj}`;
         handlero += "2";
         currentJ = `${handlero.length * currentJ.length}`;
      let refreshU = sentryO.length >= 7690513;
      do {
          let sortv = 4.0;
          let backZ: Array<any> = [368, 783];
         sentryO = `${uploadj}`;
         sortv += parseFloat(`${2 + parseInt(`${sortv}`)}`);
         backZ = [parseInt(`${sortv}`)];
         if (refreshU) {
            break;
         }
      } while ((4 < sentryO.length) && refreshU);
         selectedX /= Math.max(parseFloat(`${custom_.length | parseInt(`${selectedX}`)}`), 4);
       let contexth = 3.0;
         minimizee /= Math.max(2, (parseFloat(`${(update_b8 ? 5 : 1) / 1}`)));
          let countdownj = String.fromCharCode(101,109,117,101,100,103,101,95,112,95,49,53,0);
         sentryO += `${parseInt(`${minimizee}`) | uploadj}`;
         countdownj += `${countdownj.length | 1}`;
      let unselectedq = 5811379.0 <= selectedX;
      do {
         selectedX -= parseFloat(`${uploadj * update_hH.length}`);
         if (unselectedq) {
            break;
         }
      } while (unselectedq && (selectedX > 3.75));
      for (let p = 0; p < 2; p++) {
         update_hH = `${sentryO.length + 1}`;
      }
      while ((contexth / (Math.max(5.2, 9))) <= 2.27) {
         contexth *= 3;
         break;
      }
         update_hH += `${update_hH.length & custom_.length}`;
      splashz = "3";
   }
   if (singleI < grayX) {
       let streamingx = String.fromCharCode(105,110,115,116,97,108,108,95,56,95,54,54,0);
       let launch4 = 5;
       let roomZ = 1.0;
       let plashd = true;
       let taiwanZ: Map<any, any> = new Map([[String.fromCharCode(103,95,55,57,0),505], [String.fromCharCode(122,95,52,48,95,115,116,111,112,0),649], [String.fromCharCode(115,95,49,55,95,114,101,102,112,108,97,110,101,0),869]]);
         plashd = !plashd;
       let injuryJ = 2.0;
       let spinner2 = 2.0;
         taiwanZ = new Map([[streamingx, launch4 ^ streamingx.length]]);
      if (5.61 > roomZ) {
         roomZ *= streamingx.length >> (Math.min(3, Math.abs(parseInt(`${roomZ}`))));
      }
      let filedr = plashd ? !plashd : plashd;
      do {
          let phone7 = 4;
          let halfZ = String.fromCharCode(115,110,97,109,101,95,102,95,49,48,48,0);
          let lightb = 5.0;
         plashd = !plashd;
         phone7 -= 3;
         halfZ += `${halfZ.length}`;
         lightb += parseInt(`${lightb}`);
         if (filedr) {
            break;
         }
      } while ((1 <= (taiwanZ.size & 1)) && filedr);
       let logoy: Array<any> = [String.fromCharCode(122,95,51,57,95,100,101,108,105,118,101,114,0), String.fromCharCode(115,117,112,101,114,118,105,101,119,95,98,95,54,48,0)];
          let zhuboR: Array<any> = [80, 632];
          let transferD = 4.0;
          let giftp = 4.0;
         logoy.push((streamingx == String.fromCharCode(88,0) ? streamingx.length : parseInt(`${spinner2}`)));
         zhuboR = [parseInt(`${transferD}`)];
         transferD /= Math.max(1, 1 << (Math.min(Math.abs(parseInt(`${giftp}`)), 1)));
         giftp *= parseFloat(`${parseInt(`${transferD}`) << (Math.min(5, Math.abs(3)))}`);
      let filedi = streamingx.length >= 7244102;
      do {
         streamingx += `${3 + parseInt(`${roomZ}`)}`;
         if (filedi) {
            break;
         }
      } while (filedi && (logoy.length <= streamingx.length));
      for (let b = 0; b < 3; b++) {
          let dataP = String.fromCharCode(100,101,115,105,114,101,100,95,118,95,56,52,0);
          let sheet8V = 1.0;
          let giftN: Map<any, any> = new Map([[String.fromCharCode(109,97,100,101,95,120,95,56,56,0),String.fromCharCode(99,95,57,56,95,101,112,115,105,108,111,110,0)], [String.fromCharCode(120,95,55,50,95,115,116,97,116,105,111,110,97,114,121,0),String.fromCharCode(117,110,114,101,102,95,112,95,50,57,0)], [String.fromCharCode(118,105,101,119,101,114,115,95,98,95,56,51,0),String.fromCharCode(104,95,52,50,95,106,99,109,97,115,116,101,114,0)]]);
          let starf = 2;
          let router7 = 2.0;
         spinner2 -= parseFloat(`${streamingx.length / 3}`);
         dataP += `${dataP.length}`;
         sheet8V += dataP.length / 3;
         giftN.set(`${starf}`, 1);
         starf &= (dataP == String.fromCharCode(65,0) ? dataP.length : starf);
         router7 /= Math.max(3, parseFloat(`${dataP.length + parseInt(`${sheet8V}`)}`));
      }
         streamingx = `${2 >> (Math.min(5, streamingx.length))}`;
         plashd = 40 <= taiwanZ.size;
      while (3.59 <= (roomZ * spinner2)) {
          let inviteN = 0.0;
          let less6 = String.fromCharCode(99,108,105,112,112,105,110,103,110,111,100,101,95,50,95,54,50,0);
         spinner2 += parseFloat(`${streamingx.length / (Math.max(2, 9))}`);
         inviteN -= less6.length;
         less6 += `${1 >> (Math.min(1, less6.length))}`;
         break;
      }
       let editO = String.fromCharCode(106,95,49,56,95,105,115,115,117,105,110,103,0);
         launch4 |= logoy.length * 2;
         roomZ -= parseInt(`${roomZ}`) * taiwanZ.size;
      grayX += contextC.length;
   }
      grayX += parseInt(`${inactive0}`);
      splashz = "3";
   if (optionsI.includes(playlistT)) {
      playlistT *= parseFloat(`${parseInt(`${inactive0}`)}`);
   }
       let bottom6 = 1.0;
       let alertQ = 1;
       let currents = 1.0;
       let station7 = 3;
       let telegramp = 4;
      if (1 <= (4 & telegramp) && 4 <= (station7 & telegramp)) {
         telegramp += telegramp;
      }
      while (2 >= alertQ) {
          let whistlet: Map<any, any> = new Map([[String.fromCharCode(117,95,50,48,95,114,117,110,115,0),128], [String.fromCharCode(105,95,57,55,95,111,98,109,99,0),410], [String.fromCharCode(103,95,49,49,95,108,111,103,100,98,0),935]]);
         bottom6 += 1;
         whistlet = new Map([[`${whistlet.size}`, 2 ^ whistlet.size]]);
         break;
      }
         telegramp += 2;
      if (2 == (1 | alertQ)) {
          let line1 = false;
          let b_countj: Map<any, any> = new Map([[String.fromCharCode(103,95,54,54,95,115,117,109,109,97,114,105,101,115,0),617], [String.fromCharCode(115,111,110,101,119,99,111,110,110,95,113,95,51,56,0),653], [String.fromCharCode(97,110,110,101,120,98,95,56,95,49,48,0),479]]);
          let confirmation5 = true;
          let redirectM = 5.0;
         alertQ += ((confirmation5 ? 3 : 5) ^ station7);
         line1 = (((line1 ? 65 : b_countj.size) | b_countj.size) > 65);
         confirmation5 = (redirectM / (Math.max(6, parseFloat(`${b_countj.size}`)))) <= 39.18;
         redirectM -= (parseFloat(`${2 % (Math.max(5, (line1 ? 5 : 2)))}`));
      }
      if (2 >= (telegramp + 4)) {
         telegramp += parseInt(`${currents}`);
      }
          let unreadx = String.fromCharCode(103,101,116,116,105,109,101,95,99,95,57,55,0);
         currents *= parseInt(`${bottom6}`);
         unreadx = "1";
         station7 %= Math.max(1, 1);
         currents /= Math.max(alertQ & 3, 1);
      episodea = `${splashz.length}`;
       let bottomj = 2;
      while (5 == bottomj) {
          let privacyt = String.fromCharCode(111,95,49,57,95,114,101,103,105,115,116,101,114,101,114,0);
         bottomj /= Math.max(1, bottomj >> (Math.min(privacyt.length, 2)));
         break;
      }
      if ((5 >> (Math.min(1, Math.abs(bottomj)))) == 4 || (bottomj >> (Math.min(Math.abs(bottomj), 3))) == 5) {
         bottomj += bottomj - 3;
      }
      while (1 > (bottomj + 2) || (bottomj + 2) > 3) {
          let malaysias = 5.0;
          let grayE = String.fromCharCode(121,95,57,49,95,113,117,97,100,0);
         bottomj >>= Math.min(Math.abs(2), 4);
         malaysias *= parseFloat(`${grayE.length >> (Math.min(Math.abs(2), 1))}`);
         grayE = `${parseInt(`${malaysias}`)}`;
         break;
      }
      splashz += "3";
   let backwardr = splashz == String.fromCharCode(113,111,104,55,95,102,99,50,57,0);
   do {
       let macauS = String.fromCharCode(115,97,118,101,112,111,105,110,116,115,95,119,95,53,48,0);
       let condensed3 = String.fromCharCode(122,95,57,48,95,97,118,114,101,115,97,109,112,108,101,0);
       let logoutL = String.fromCharCode(116,101,109,112,102,105,108,101,95,106,95,56,48,0);
       let placeholderx = String.fromCharCode(100,95,50,50,95,112,114,101,100,111,119,110,108,111,97,100,0);
       let basketballI: Array<any> = [String.fromCharCode(99,98,112,104,105,95,103,95,55,56,0), String.fromCharCode(114,101,112,95,98,95,57,51,0)];
      if ((basketballI.length >> (Math.min(placeholderx.length, 3))) > 3) {
         basketballI.push(condensed3.length << (Math.min(macauS.length, 4)));
      }
      if (macauS == logoutL) {
         logoutL += "2";
      }
       let bannerA = true;
       let lessz = true;
      while (5 > placeholderx.length) {
          let reminderC = false;
          let layout1: Array<any> = [631, 380, 169];
          let screenR: Array<any> = [777, 623, 868];
          let gesturek: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,100,111,119,110,95,111,95,54,0),727], [String.fromCharCode(109,95,50,53,0),799], [String.fromCharCode(108,97,121,111,117,116,115,95,106,95,52,55,0),254]]);
         logoutL = "2";
         reminderC = (screenR.length >> (Math.min(Math.abs(gesturek.size), 1))) >= 68;
         layout1.push(gesturek.size % 3);
         screenR = [1 ^ screenR.length];
         break;
      }
      while (macauS.length >= condensed3.length) {
         macauS = `${((lessz ? 3 : 4) / (Math.max(placeholderx.length, 7)))}`;
         break;
      }
         logoutL = `${logoutL.length}`;
       let membershipM = false;
       let commonU = true;
      if (bannerA) {
          let strr = String.fromCharCode(114,101,119,114,105,116,101,114,95,51,95,57,54,0);
          let annerv = String.fromCharCode(117,110,105,95,116,95,54,54,0);
          let i_titleb = String.fromCharCode(105,95,52,53,95,114,101,102,101,116,99,104,0);
          let incidentA = String.fromCharCode(118,95,55,54,95,116,111,114,101,100,0);
         bannerA = (macauS.length - logoutL.length) == 35;
         strr = `${i_titleb.length ^ strr.length}`;
         annerv = `${incidentA.length}`;
         i_titleb += `${annerv.length}`;
         incidentA = `${i_titleb.length / (Math.max(3, 3))}`;
      }
          let constantsb = false;
          let pagination3: Map<any, any> = new Map([[String.fromCharCode(111,95,55,51,95,99,108,101,97,110,115,101,0),831], [String.fromCharCode(103,117,101,115,115,101,100,95,100,95,51,57,0),843]]);
         lessz = membershipM;
         constantsb = pagination3.get(`${constantsb}`) != null;
         pagination3 = new Map([[`${pagination3.size}`, ((constantsb ? 1 : 3) * pagination3.size)]]);
       let selectedb: Map<any, any> = new Map([[String.fromCharCode(103,95,53,49,95,99,111,110,118,0),String.fromCharCode(102,95,51,95,98,101,115,115,101,108,0)], [String.fromCharCode(115,95,53,53,95,98,114,117,115,104,101,115,0),String.fromCharCode(120,95,56,57,95,98,105,116,114,97,116,101,115,0)]]);
      if (placeholderx.includes(`${commonU}`)) {
         placeholderx += `${((membershipM ? 5 : 5) + condensed3.length)}`;
      }
         condensed3 = `${selectedb.size}`;
         selectedb = new Map([[`${basketballI.length}`, basketballI.length]]);
         condensed3 += `${((bannerA ? 4 : 5))}`;
         logoutL += `${condensed3.length}`;
      splashz += `${condensed3.length | episodea.length}`;
      if (backwardr) {
         break;
      }
   } while (backwardr && ((splashz.length >> (Math.min(Math.abs(1), 2))) > 5 && (splashz.length >> (Math.min(Math.abs(1), 5))) > 5));
   let evente = 5925257.0 >= sheet8;
   do {
      sheet8 += parseFloat(`${invitef.length}`);
      if (evente) {
         break;
      }
   } while (evente && (sheet8 < singleI));
      sheet8 /= Math.max(parseFloat(`${splashz.length}`), 1);
   for (let u = 0; u < 3; u++) {
      invitef += `${(contextC == String.fromCharCode(54,0) ? contextC.length : parseInt(`${grayX}`))}`;
   }
       let buttonU = String.fromCharCode(100,95,49,53,95,107,105,110,100,115,0);
       let rewindu = String.fromCharCode(104,95,57,56,95,108,105,115,116,0);
       let analytici = String.fromCharCode(121,95,50,52,95,112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,0);
       let backgroundc = String.fromCharCode(117,95,51,53,95,111,112,116,105,109,105,122,101,114,0);
          let circleN = String.fromCharCode(97,105,102,102,95,106,95,49,53,0);
          let rulesf = String.fromCharCode(114,95,49,56,95,101,110,99,111,100,105,110,103,0);
          let controlsv = 4.0;
         rewindu = `${(rulesf == String.fromCharCode(89,0) ? parseInt(`${controlsv}`) : rulesf.length)}`;
         circleN += `${circleN.length | 3}`;
         backgroundc = `${backgroundc.length & 2}`;
      while (rewindu.includes(analytici)) {
         analytici = "3";
         break;
      }
      let renewG = 6995602 <= rewindu.length;
      do {
         rewindu = `${(String.fromCharCode(48,0) == rewindu ? backgroundc.length : rewindu.length)}`;
         if (renewG) {
            break;
         }
      } while ((!rewindu.startsWith(backgroundc)) && renewG);
       let switch_z20 = String.fromCharCode(112,95,54,95,108,98,108,0);
       let selln = String.fromCharCode(99,97,108,105,98,114,97,116,101,100,95,114,95,56,53,0);
      let actionsm = String.fromCharCode(98,51,104,119,0) == selln;
      do {
         selln = `${rewindu.length << (Math.min(Math.abs(3), 2))}`;
         if (actionsm) {
            break;
         }
      } while ((!rewindu.includes(`${selln.length}`)) && actionsm);
         selln = `${1 - analytici.length}`;
      while (3 < rewindu.length) {
         rewindu = `${1 * buttonU.length}`;
         break;
      }
      playlistT -= parseFloat(`${parseInt(`${inactive0}`) >> (Math.min(4, Math.abs(2)))}`);
   let foundo = sheet8 >= 8005237.0;
   do {
      sheet8 /= Math.max(parseFloat(`${1}`), 5);
      if (foundo) {
         break;
      }
   } while ((playlistT >= sheet8) && foundo);
       let favoriteP = String.fromCharCode(111,95,50,51,95,109,105,115,115,0);
      let nextu = favoriteP == String.fromCharCode(49,99,97,105,99,120,119,0);
      do {
         favoriteP = "3";
         if (nextu) {
            break;
         }
      } while ((2 < favoriteP.length) && nextu);
      for (let s = 0; s < 1; s++) {
         favoriteP += `${favoriteP.length / (Math.max(6, favoriteP.length))}`;
      }
      for (let z = 0; z < 2; z++) {
         favoriteP += `${favoriteP.length}`;
      }
      tooltipsa -= 2;
      playlistT += parseFloat(`${singleI}`);
       let modityi = String.fromCharCode(102,117,108,108,121,95,113,95,53,57,0);
       let sellk = String.fromCharCode(112,97,114,97,109,101,116,101,114,95,97,95,49,56,0);
       let favicono = 1.0;
      let termsC = favicono <= 9354795.0;
      do {
         favicono *= (String.fromCharCode(70,0) == modityi ? modityi.length : sellk.length);
         if (termsC) {
            break;
         }
      } while (termsC && (5.92 >= favicono));
      let appsF = 8771506.0 >= favicono;
      do {
         favicono *= 2 - sellk.length;
         if (appsF) {
            break;
         }
      } while (appsF && (2.8 < (favicono / (Math.max(modityi.length, 8)))));
         sellk += `${modityi.length + parseInt(`${favicono}`)}`;
      if (1 < sellk.length) {
         sellk = `${sellk.length / (Math.max(3, modityi.length))}`;
      }
          let taiwann = String.fromCharCode(101,121,101,95,48,95,57,55,0);
          let iconY = 3.0;
         sellk += `${1 + parseInt(`${iconY}`)}`;
         taiwann += `${(String.fromCharCode(49,0) == taiwann ? taiwann.length : taiwann.length)}`;
         iconY /= Math.max(1, 1);
          let crowns = 0.0;
         favicono *= modityi.length / (Math.max(sellk.length, 8));
         crowns /= Math.max(3, parseInt(`${crowns}`) >> (Math.min(1, Math.abs(2))));
      while (4 > (4 * parseInt(`${favicono}`)) || (sellk.length * parseInt(`${favicono}`)) > 4) {
          let injuryU = String.fromCharCode(117,95,54,57,95,115,111,119,97,107,101,117,112,0);
         sellk = "2";
         injuryU += `${1 - injuryU.length}`;
         break;
      }
      if (!modityi.startsWith(`${favicono}`)) {
          let incidenta = String.fromCharCode(99,104,101,99,107,101,114,95,51,95,55,51,0);
         modityi += `${parseInt(`${favicono}`) << (Math.min(sellk.length, 1))}`;
         incidenta += `${incidenta.length ^ 3}`;
      }
         sellk += `${parseInt(`${favicono}`) / 2}`;
      episodea = `${parseInt(`${grayX}`) * episodea.length}`;
      singleI /= Math.max(4, 2 - tooltipsa);
      episodea += `${(contextC == String.fromCharCode(53,0) ? contextC.length : episodea.length)}`;
   if ((sheet8 - 3.54) < 2.95) {
       let matchesZ = 2.0;
       let stepe = String.fromCharCode(115,121,110,99,119,111,114,100,115,95,99,95,51,51,0);
      for (let l = 0; l < 2; l++) {
          let catagoryi = 4.0;
          let promotionY: Map<any, any> = new Map([[String.fromCharCode(101,120,112,105,114,97,116,105,111,110,95,51,95,53,51,0),846], [String.fromCharCode(118,95,57,55,95,98,105,110,97,115,99,105,105,0),94], [String.fromCharCode(108,95,57,51,95,112,116,105,111,110,115,0),954]]);
          let updatesR = String.fromCharCode(114,101,103,105,115,116,101,114,105,110,103,95,115,95,55,54,0);
          let iconZ = 0;
         matchesZ -= parseFloat(`${iconZ ^ 1}`);
         catagoryi /= Math.max(1, parseFloat(`${updatesR.length >> (Math.min(Math.abs(3), 5))}`));
         promotionY.set(`${catagoryi}`, updatesR.length);
         iconZ %= Math.max(2, parseInt(`${catagoryi}`) >> (Math.min(Math.abs(promotionY.size), 2)));
      }
          let clear9 = 2.0;
          let single8 = String.fromCharCode(97,116,116,114,115,95,113,95,57,56,0);
         stepe = "3";
         clear9 += parseFloat(`${single8.length}`);
         single8 = `${(single8 == String.fromCharCode(112,0) ? single8.length : parseInt(`${clear9}`))}`;
      if ((parseFloat(`${stepe.length}`) * matchesZ) >= 2.93 && 4 >= (parseInt(`${matchesZ}`) * stepe.length)) {
          let index0: Map<any, any> = new Map([[String.fromCharCode(118,95,51,49,95,98,111,117,110,100,97,108,108,0),String.fromCharCode(115,95,50,57,95,99,111,109,112,97,115,115,0)], [String.fromCharCode(114,95,57,54,95,102,97,118,111,114,105,116,101,0),String.fromCharCode(97,95,56,51,95,114,101,103,105,111,110,115,0)]]);
          let combine1 = 3.0;
          let history2 = 4.0;
          let dialogm = String.fromCharCode(107,95,52,49,95,119,97,105,116,0);
          let bottomO = String.fromCharCode(115,95,51,52,95,99,111,109,109,105,115,115,105,111,110,0);
         matchesZ /= Math.max(parseFloat(`${bottomO.length}`), 2);
         index0 = new Map([[`${index0.size}`, index0.size % 2]]);
         combine1 += parseInt(`${combine1}`) * dialogm.length;
         history2 += parseFloat(`${parseInt(`${combine1}`)}`);
         dialogm = "1";
         bottomO += `${index0.size ^ parseInt(`${combine1}`)}`;
      }
         matchesZ /= Math.max(4, parseFloat(`${3}`));
         stepe += `${parseInt(`${matchesZ}`) & stepe.length}`;
      for (let m = 0; m < 1; m++) {
         stepe = `${stepe.length << (Math.min(Math.abs(1), 1))}`;
      }
      sheet8 += parseFloat(`${3}`);
   }
      currentD.set(contextC, optionsI.length);
      invitef = `${(invitef == String.fromCharCode(84,0) ? invitef.length : contextC.length)}`;
      inactive0 /= Math.max(4, parseFloat(`${tooltipsa << (Math.min(1, Math.abs(3)))}`));
      invitef += `${parseInt(`${less8}`) * 3}`;
   while ((1.41 + flyerV) == 2.56 && 5 == (parseInt(`${flyerV}`) + 3)) {
       let episodeK = 5.0;
       let linkz = 1.0;
       let countryc = String.fromCharCode(108,95,52,95,101,120,101,99,117,116,105,111,110,0);
       let sendE = false;
       let button7 = String.fromCharCode(99,97,108,99,117,108,97,116,101,95,98,95,54,49,0);
       let white5 = String.fromCharCode(116,114,97,110,115,99,111,100,101,95,101,95,50,0);
         button7 += `${parseInt(`${linkz}`)}`;
         button7 += `${parseInt(`${episodeK}`) & 3}`;
         white5 += `${parseInt(`${episodeK}`)}`;
      for (let f = 0; f < 2; f++) {
         countryc += "1";
      }
      while (!button7.startsWith(`${sendE}`)) {
         button7 = `${(button7 == String.fromCharCode(84,0) ? button7.length : (sendE ? 2 : 4))}`;
         break;
      }
         sendE = 46.44 == linkz || !sendE;
      if (button7.length < 1) {
         button7 += "3";
      }
      while (countryc.length < 4 || !sendE) {
         countryc += `${parseInt(`${linkz}`) * 2}`;
         break;
      }
         white5 += `${(String.fromCharCode(56,0) == button7 ? countryc.length : button7.length)}`;
         countryc += "3";
         button7 += `${1 | button7.length}`;
      episodea += `${currentD.size}`;
      break;
   }
   for (let m = 0; m < 1; m++) {
      singleI &= splashz.length + 3;
   }
      sheet8 /= Math.max(parseFloat(`${3}`), 3);
      singleI %= Math.max(5, episodea.length);
       let upgradeX = String.fromCharCode(109,95,50,53,95,115,116,97,114,116,99,111,100,101,0);
       let analyticsu: Map<any, any> = new Map([[String.fromCharCode(109,101,109,99,112,121,95,120,95,49,53,0),true ], [String.fromCharCode(112,97,115,116,101,108,95,99,95,51,48,0),true ]]);
       let inactivea = String.fromCharCode(108,98,108,95,122,95,55,54,0);
      for (let c = 0; c < 2; c++) {
         inactivea += `${3 | upgradeX.length}`;
      }
          let castingo: Map<any, any> = new Map([[String.fromCharCode(112,97,121,108,111,97,100,115,95,55,95,50,50,0),582], [String.fromCharCode(99,111,100,101,98,111,111,107,95,101,95,55,49,0),412], [String.fromCharCode(120,95,57,53,95,99,117,114,108,0),823]]);
         analyticsu = new Map([[`${analyticsu.size}`, inactivea.length]]);
         castingo.set(`${castingo.size}`, castingo.size);
         inactivea += "2";
      let confirmationa = String.fromCharCode(48,102,49,51,111,99,53,105,54,0) == inactivea;
      do {
         inactivea += `${upgradeX.length}`;
         if (confirmationa) {
            break;
         }
      } while (confirmationa && (1 == inactivea.length));
      while (5 < (analyticsu.size - 3)) {
         analyticsu = new Map([[`${analyticsu.size}`, inactivea.length - analyticsu.size]]);
         break;
      }
      if ((analyticsu.size >> (Math.min(Math.abs(1), 1))) > 1) {
         inactivea += "3";
      }
         upgradeX = `${analyticsu.size * inactivea.length}`;
          let questw = String.fromCharCode(107,95,57,95,99,97,110,111,110,105,99,97,108,105,122,101,100,0);
          let awayY = 1.0;
          let photot = 4.0;
         upgradeX += `${questw.length}`;
         questw = `${parseInt(`${photot}`) % 3}`;
         awayY -= parseInt(`${photot}`);
      if (analyticsu.size <= 2) {
         upgradeX = `${2 + inactivea.length}`;
      }
      singleI += renewP.size * 2;
   for (let d = 0; d < 2; d++) {
       let sliderp = 1.0;
       let default_fmi = 3.0;
          let sharedB = String.fromCharCode(118,101,114,116,105,99,101,115,95,110,95,51,56,0);
         sliderp /= Math.max(3, 1);
         sharedB = `${3 * sharedB.length}`;
          let disconnected3 = 4.0;
         default_fmi += parseFloat(`${parseInt(`${disconnected3}`)}`);
      while (default_fmi >= 1.52) {
         sliderp += parseInt(`${default_fmi}`) & 1;
         break;
      }
      while (5.77 == (default_fmi + 5.82)) {
          let humidityJ = String.fromCharCode(109,112,111,115,95,119,95,57,57,0);
          let inactives: Array<any> = [217, 362, 851];
          let filledW = 2;
         default_fmi /= Math.max(parseFloat(`${parseInt(`${sliderp}`)}`), 1);
         humidityJ += `${humidityJ.length | 3}`;
         inactives = [filledW];
         filledW >>= Math.min(4, Math.abs(inactives.length * humidityJ.length));
         break;
      }
          let scheduleN = String.fromCharCode(105,108,98,99,102,105,120,95,116,95,55,52,0);
          let connectionH: Map<any, any> = new Map([[String.fromCharCode(120,95,57,52,0),String.fromCharCode(110,95,53,52,95,102,108,97,99,0)], [String.fromCharCode(118,95,52,57,95,102,105,110,100,97,115,115,111,99,0),String.fromCharCode(99,95,51,52,95,114,101,100,117,99,101,114,0)]]);
          let plusi: Array<any> = [376, 906, 961];
         sliderp += (String.fromCharCode(66,0) == scheduleN ? scheduleN.length : parseInt(`${default_fmi}`));
         connectionH = new Map([[`${connectionH.size}`, plusi.length]]);
         plusi = [plusi.length ^ connectionH.size];
      if (default_fmi == 4.7) {
         default_fmi /= Math.max(parseFloat(`${parseInt(`${sliderp}`) << (Math.min(1, Math.abs(1)))}`), 3);
      }
      currentD.set(`${singleI}`, singleI - currentD.size);
   }
      splashz = `${parseInt(`${playlistT}`)}`;
      currentD = new Map([[`${playlistT}`, episodea.length]]);
   let vignettec = grayX >= 7655306.0;
   do {
      grayX -= 3 ^ parseInt(`${less8}`);
      if (vignettec) {
         break;
      }
   } while ((5 >= (optionsI.length - parseInt(`${grayX}`))) && vignettec);
       let successe = 3;
      if (successe <= successe) {
          let description_1tc = String.fromCharCode(100,105,110,101,114,115,95,50,95,50,52,0);
          let paginationH = String.fromCharCode(115,101,103,109,101,110,116,101,100,95,105,95,50,50,0);
         successe += 2;
         description_1tc += `${paginationH.length}`;
         paginationH += `${paginationH.length}`;
      }
      for (let y = 0; y < 2; y++) {
         successe *= successe;
      }
          let sportK = 5;
         successe /= Math.max(3 & sportK, 2);
      optionsI.push(renewP.size);
       let fastforwardj: Map<any, any> = new Map([[String.fromCharCode(107,95,57,49,95,105,110,99,111,110,115,105,115,116,101,110,99,121,0),238], [String.fromCharCode(119,95,51,48,0),645], [String.fromCharCode(99,95,49,52,95,111,117,116,100,97,116,101,100,0),652]]);
       let episoded = 5.0;
       let screen_: Array<any> = [320, 352, 707];
         fastforwardj = new Map([[`${fastforwardj.size}`, fastforwardj.size]]);
       let photoe = 1;
       let yingR = 1;
          let predictionp: Map<any, any> = new Map([[String.fromCharCode(105,95,55,48,95,105,110,105,116,0),590], [String.fromCharCode(102,95,50,51,95,99,104,101,99,107,97,115,109,0),198]]);
          let shirtF: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,117,114,101,112,97,114,109,115,95,102,95,51,50,0),true ], [String.fromCharCode(103,114,97,121,95,112,95,49,55,0),false ], [String.fromCharCode(103,95,57,52,95,100,121,110,97,109,105,99,115,0),true ]]);
          let footballz = String.fromCharCode(120,95,52,54,95,99,104,97,110,103,101,103,114,111,117,112,0);
         fastforwardj = new Map([[footballz, parseInt(`${episoded}`) << (Math.min(Math.abs(1), 1))]]);
         predictionp = new Map([[`${predictionp.size}`, predictionp.size]]);
         shirtF.set(`${predictionp.size}`, shirtF.size / 1);
         footballz += `${shirtF.size >> (Math.min(Math.abs(2), 5))}`;
         screen_ = [photoe / (Math.max(screen_.length, 1))];
         yingR -= fastforwardj.size >> (Math.min(3, Math.abs(photoe)));
         photoe &= yingR * 3;
      while (1 >= (2 >> (Math.min(2, screen_.length))) || (2 - screen_.length) >= 3) {
         episoded -= parseInt(`${episoded}`);
         break;
      }
      for (let b = 0; b < 1; b++) {
         yingR %= Math.max(4, fastforwardj.size | parseInt(`${episoded}`));
      }
      while (fastforwardj.size >= parseInt(`${episoded}`)) {
          let kickB = 2.0;
         fastforwardj = new Map([[`${fastforwardj.size}`, fastforwardj.size]]);
         kickB *= parseInt(`${kickB}`) << (Math.min(4, Math.abs(2)));
         break;
      }
      flyerV -= parseFloat(`${episodea.length}`);
   while (5 > tooltipsa) {
       let gmail9 = 2.0;
      if (2.76 <= (2.5 * gmail9)) {
          let downloadX = true;
         gmail9 += ((downloadX ? 1 : 1) & parseInt(`${gmail9}`));
      }
         gmail9 -= parseInt(`${gmail9}`) & parseInt(`${gmail9}`);
         gmail9 /= Math.max(2, 3 >> (Math.min(Math.abs(parseInt(`${gmail9}`)), 2)));
      tooltipsa >>= Math.min(3, Math.abs(episodea.length << (Math.min(2, Math.abs(parseInt(`${inactive0}`))))));
      break;
   }
   for (let e = 0; e < 3; e++) {
      tooltipsa ^= splashz.length | 3;
   }
      less8 /= Math.max(2, episodea.length);
       let teamh = 1.0;
       let backs = String.fromCharCode(117,95,50,56,95,104,116,108,116,0);
       let plasha: Map<any, any> = new Map([[String.fromCharCode(99,95,49,56,95,114,116,114,101,101,99,104,101,99,107,0),429], [String.fromCharCode(122,95,52,53,95,105,99,101,99,97,115,116,0),998]]);
      if (plasha.size < backs.length) {
          let rankY: Map<any, any> = new Map([[String.fromCharCode(120,95,50,52,95,115,105,110,0),true ], [String.fromCharCode(110,95,53,51,95,99,111,100,101,99,112,114,105,118,97,116,101,0),true ]]);
          let playd = 3.0;
          let dialogu = false;
         plasha.set(`${dialogu}`, plasha.size);
         rankY.set(`${playd}`, 3);
         playd -= 2;
      }
      let save4 = backs.length >= 8540078;
      do {
         backs += `${parseInt(`${teamh}`)}`;
         if (save4) {
            break;
         }
      } while (save4 && ((plasha.size + backs.length) >= 4 && (plasha.size + backs.length) >= 4));
      while (3.56 > (teamh + 1.14)) {
         plasha = new Map([[`${plasha.size}`, backs.length]]);
         break;
      }
         backs += `${(String.fromCharCode(101,0) == backs ? backs.length : plasha.size)}`;
          let applea = String.fromCharCode(119,95,51,50,95,109,111,100,105,116,121,0);
         teamh /= Math.max(5, applea.length);
         backs += `${(backs == String.fromCharCode(107,0) ? parseInt(`${teamh}`) : backs.length)}`;
         backs += `${backs.length / (Math.max(1, 10))}`;
          let drag8 = true;
          let private_wjW: Array<any> = [358, 122];
          let pressureZ = 0;
         backs = `${plasha.size << (Math.min(backs.length, 1))}`;
         drag8 = private_wjW.includes(drag8);
         private_wjW = [3 >> (Math.min(Math.abs(pressureZ), 1))];
         pressureZ -= 2 >> (Math.min(Math.abs(pressureZ), 2));
          let canvasq: Array<any> = [821, 445, 249];
          let flyert = 5.0;
          let minimizeI = String.fromCharCode(97,95,52,95,104,105,103,104,98,105,116,115,0);
         backs += `${3 % (Math.max(3, canvasq.length))}`;
         canvasq = [parseInt(`${flyert}`)];
         flyert *= parseFloat(`${minimizeI.length ^ 1}`);
         minimizeI = `${(minimizeI == String.fromCharCode(113,0) ? minimizeI.length : parseInt(`${flyert}`))}`;
      less8 += splashz.length;
   while (3 == (parseInt(`${playlistT}`) * renewP.size)) {
      renewP.set(`${inactive0}`, contextC.length);
      break;
   }
      singleI %= Math.max(parseInt(`${less8}`) >> (Math.min(Math.abs(1), 3)), 2);
       let spinner3: Map<any, any> = new Map([[String.fromCharCode(109,98,98,108,111,99,107,95,53,95,50,53,0),String.fromCharCode(97,115,99,111,110,102,95,117,95,54,57,0)], [String.fromCharCode(98,108,97,107,101,98,95,51,95,49,53,0),String.fromCharCode(115,105,103,110,108,101,95,114,95,56,52,0)]]);
          let sansa: Array<any> = [String.fromCharCode(120,95,52,57,95,112,101,114,109,97,110,101,110,116,0), String.fromCharCode(121,95,54,52,95,105,110,105,116,105,97,108,0), String.fromCharCode(107,95,55,54,95,108,97,100,100,101,114,115,116,101,112,0)];
          let indexT: Map<any, any> = new Map([[String.fromCharCode(109,95,56,49,95,97,114,110,114,0),910], [String.fromCharCode(118,95,53,51,95,107,109,115,0),4]]);
         spinner3 = new Map([[`${indexT.size}`, sansa.length >> (Math.min(4, Math.abs(indexT.size)))]]);
      for (let n = 0; n < 3; n++) {
         spinner3 = new Map([[`${spinner3.size}`, spinner3.size]]);
      }
      for (let d = 0; d < 3; d++) {
         spinner3.set(`${spinner3.size}`, 3 << (Math.min(5, Math.abs(spinner3.size))));
      }
      less8 /= Math.max(3, parseInt(`${less8}`));
       let detailS = String.fromCharCode(100,101,115,112,105,108,108,95,55,95,49,49,0);
       let trophyp = 3;
         trophyp >>= Math.min(4, Math.abs(detailS.length >> (Math.min(2, Math.abs(trophyp)))));
         detailS = "1";
          let settingsa = 3.0;
          let playI = 2;
         trophyp %= Math.max(parseInt(`${settingsa}`), 5);
         settingsa *= 2;
         playI &= playI;
          let common2 = 5;
          let hookc = String.fromCharCode(115,99,97,110,116,97,98,108,101,115,95,121,95,53,57,0);
         detailS = "3";
         common2 /= Math.max((String.fromCharCode(95,0) == hookc ? hookc.length : common2), 5);
      for (let u = 0; u < 1; u++) {
          let downloaderI = String.fromCharCode(122,95,50,49,95,114,114,111,114,0);
          let storeP = 1.0;
         detailS += `${parseInt(`${storeP}`) << (Math.min(4, Math.abs(trophyp)))}`;
         downloaderI = `${(String.fromCharCode(113,0) == downloaderI ? downloaderI.length : downloaderI.length)}`;
         storeP *= parseFloat(`${2}`);
      }
      let modelsz = detailS.length >= 7059751;
      do {
          let searchbar3 = false;
          let largeW: Array<any> = [String.fromCharCode(110,95,51,49,95,97,108,108,111,99,97,116,111,114,0), String.fromCharCode(115,101,116,98,105,116,95,104,95,53,0)];
          let user2 = String.fromCharCode(98,101,101,110,95,111,95,55,54,0);
          let footballU: Array<any> = [66, 457, 454];
         detailS = `${1 - detailS.length}`;
         searchbar3 = 33 >= footballU.length || 33 >= user2.length;
         largeW = [largeW.length - 1];
         user2 += `${user2.length * 2}`;
         footballU.push(3 * largeW.length);
         if (modelsz) {
            break;
         }
      } while (modelsz && (1 <= (trophyp & detailS.length) && (1 & detailS.length) <= 1));
      invitef += `${1 % (Math.max(parseInt(`${less8}`), 5))}`;
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
       let selectedr = String.fromCharCode(108,101,116,115,95,98,95,50,54,0);
    let fullZ: Array<any> = [409, 107];
    let pauseb = 2;
    let tail_ = String.fromCharCode(99,95,48,95,115,101,114,105,97,108,105,122,101,114,0);
    let projectO: Map<any, any> = new Map([[String.fromCharCode(102,95,53,49,95,99,97,108,108,105,115,116,111,0),String.fromCharCode(113,95,49,48,95,116,105,109,101,111,117,116,115,0)], [String.fromCharCode(98,95,53,49,95,102,111,108,108,111,119,115,0),String.fromCharCode(98,108,111,111,109,95,101,95,53,55,0)]]);
    let smalla = 5.0;
    let type_7c3: Map<any, any> = new Map([[String.fromCharCode(118,95,51,49,95,115,116,114,102,116,105,109,101,0),557], [String.fromCharCode(115,99,114,101,101,110,112,114,101,115,115,111,95,116,95,55,53,0),507], [String.fromCharCode(111,95,55,53,95,111,109,109,111,110,0),436]]);
    let smallC: Array<any> = [String.fromCharCode(120,97,109,112,108,101,95,113,95,50,50,0), String.fromCharCode(110,95,49,51,95,114,101,116,114,97,110,115,109,105,116,115,0), String.fromCharCode(118,101,114,105,102,105,97,116,105,111,110,95,120,95,52,57,0)];
    let blackV: Array<any> = [934, 753, 341];
    let unread8 = String.fromCharCode(122,95,56,49,95,109,101,116,97,115,111,117,110,100,0);
    let frame_tF = true;
    let condensedu = 5;
    let animationM = 1.0;
    let reducer7 = 5;
    let showW = 5.0;
    let blackD = 2.0;
   if (projectO.size > 1) {
      projectO.set(`${smalla}`, fullZ.length * 2);
   }
   let headerP = 9588463 <= tail_.length;
   do {
      tail_ = `${(String.fromCharCode(72,0) == unread8 ? unread8.length : tail_.length)}`;
      if (headerP) {
         break;
      }
   } while (headerP && (4 <= tail_.length));
   for (let f = 0; f < 3; f++) {
       let bingt = 5;
       let long_0ee = String.fromCharCode(119,95,56,56,95,97,98,115,116,114,97,99,116,0);
       let firebase2 = false;
       let fastforwardp = 5;
       let penaltyZ = true;
      if (5 >= fastforwardp) {
          let disconnected1: Array<any> = [729, 178, 887];
         fastforwardp <<= Math.min(Math.abs(bingt), 1);
         disconnected1.push(2);
      }
      if (2 < (fastforwardp / 4)) {
         penaltyZ = 8 < long_0ee.length && bingt < 8;
      }
          let scheduleu: Map<any, any> = new Map([[String.fromCharCode(110,111,102,105,116,105,99,97,116,105,111,110,95,107,95,52,55,0),255], [String.fromCharCode(109,98,112,111,115,116,95,116,95,51,56,0),999], [String.fromCharCode(97,118,105,115,121,110,116,104,95,101,95,49,48,0),357]]);
         firebase2 = 71 <= bingt;
         scheduleu.set(`${scheduleu.size}`, 1);
      let logoutq = firebase2 ? !firebase2 : firebase2;
      do {
         firebase2 = penaltyZ;
         if (logoutq) {
            break;
         }
      } while (logoutq && (!firebase2));
         bingt /= Math.max(2 & bingt, 5);
         firebase2 = 26 > fastforwardp;
      for (let v = 0; v < 3; v++) {
         fastforwardp >>= Math.min(5, Math.abs(long_0ee.length * bingt));
      }
      if (!firebase2 && penaltyZ) {
          let basketballx: Array<any> = [String.fromCharCode(108,95,49,55,95,114,100,98,120,0), String.fromCharCode(103,95,49,56,95,114,101,103,105,115,116,101,114,102,100,115,0), String.fromCharCode(115,101,113,117,101,110,99,101,95,115,95,57,56,0)];
          let volumet = String.fromCharCode(103,101,116,115,95,54,95,49,48,48,0);
          let textU = String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,111,110,95,53,95,50,56,0);
          let controlo = String.fromCharCode(102,108,105,112,95,110,95,57,54,0);
         penaltyZ = basketballx.length < 65;
         basketballx.push((controlo == String.fromCharCode(82,0) ? controlo.length : textU.length));
         volumet += `${controlo.length << (Math.min(Math.abs(1), 1))}`;
         textU = "1";
      }
         long_0ee += `${(long_0ee == String.fromCharCode(104,0) ? (penaltyZ ? 1 : 5) : long_0ee.length)}`;
          let commonc: Array<any> = [String.fromCharCode(98,117,102,102,101,114,105,110,103,95,108,95,55,56,0), String.fromCharCode(115,117,98,114,97,110,103,101,95,56,95,54,52,0)];
          let malaysiaG = String.fromCharCode(117,116,117,114,101,95,121,95,57,56,0);
          let plashh = String.fromCharCode(121,95,57,54,95,98,111,119,108,105,110,103,0);
         bingt >>= Math.min(3, Math.abs(3 << (Math.min(4, long_0ee.length))));
         commonc = [(String.fromCharCode(48,0) == plashh ? malaysiaG.length : plashh.length)];
         malaysiaG = "3";
       let pointE: Map<any, any> = new Map([[String.fromCharCode(101,95,56,54,95,102,117,116,117,114,101,0),111], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,111,114,95,110,95,51,56,0),284]]);
       let successs: Map<any, any> = new Map([[String.fromCharCode(104,95,57,54,95,110,105,115,116,112,0),549], [String.fromCharCode(111,95,49,54,95,115,116,114,115,101,112,0),762]]);
      for (let z = 0; z < 3; z++) {
         firebase2 = bingt == 19;
      }
       let nextb = String.fromCharCode(101,98,109,108,110,117,109,95,101,95,48,0);
         penaltyZ = !penaltyZ || fastforwardp == 90;
       let unreadr = 0;
       let friendsx = 4;
      unread8 = `${condensedu}`;
   }
   let navigationc = 5934436 >= selectedr.length;
   do {
      selectedr += `${fullZ.length + 2}`;
      if (navigationc) {
         break;
      }
   } while (((4 >> (Math.min(3, Math.abs(condensedu)))) >= 1 || 1 >= (4 >> (Math.min(5, Math.abs(condensedu))))) && navigationc);
   let viewerN = smallC.length >= 5516986;
   do {
      smallC = [tail_.length];
      if (viewerN) {
         break;
      }
   } while ((Array.from(projectO.values()).includes(smallC.length)) && viewerN);
      selectedr += `${parseInt(`${animationM}`) & parseInt(`${smalla}`)}`;
       let blackE = String.fromCharCode(122,95,51,57,95,109,98,108,111,99,107,0);
         blackE = `${blackE.length}`;
      let other7 = blackE.length >= 5089584;
      do {
         blackE = `${2 << (Math.min(2, blackE.length))}`;
         if (other7) {
            break;
         }
      } while (other7 && (3 < blackE.length));
         blackE += `${2 & blackE.length}`;
      condensedu %= Math.max(parseInt(`${animationM}`) & 1, 2);
   for (let f = 0; f < 1; f++) {
      selectedr = `${parseInt(`${animationM}`)}`;
   }
      unread8 += "3";
   let kickH = unread8.length <= 7123683;
   do {
      unread8 += `${(selectedr == String.fromCharCode(81,0) ? selectedr.length : (frame_tF ? 1 : 1))}`;
      if (kickH) {
         break;
      }
   } while (((projectO.size * 3) == 2 || 1 == (projectO.size * 3)) && kickH);
      fullZ = [(condensedu >> (Math.min(1, Math.abs((frame_tF ? 3 : 3)))))];
      frame_tF = (projectO.size * blackV.length) == 13;
      frame_tF = projectO.size > fullZ.length;
   while (projectO.size <= unread8.length) {
      projectO.set(`${smalla}`, 3);
      break;
   }
      smalla *= condensedu >> (Math.min(Math.abs(2), 2));
      frame_tF = (selectedr.length + fullZ.length) > 81;
   let dark9 = 8497295 >= projectO.size;
   do {
      projectO = new Map([[`${type_7c3.size}`, type_7c3.size % (Math.max(1, 7))]]);
      if (dark9) {
         break;
      }
   } while (((projectO.size / (Math.max(1, unread8.length))) <= 5) && dark9);
   if (!frame_tF) {
       let emojia = true;
         emojia = !emojia;
         emojia = !emojia;
      for (let i = 0; i < 3; i++) {
         emojia = (!emojia ? !emojia : emojia);
      }
      frame_tF = (type_7c3.size % (Math.max(9, tail_.length))) < 79;
   }
      tail_ += `${parseInt(`${smalla}`) | fullZ.length}`;
      type_7c3.set(unread8, ((frame_tF ? 2 : 1) % 1));
       let whitex = String.fromCharCode(109,97,100,101,95,116,95,56,48,0);
       let humiditym = String.fromCharCode(102,95,51,57,95,114,101,113,117,101,115,116,0);
       let reminderb = String.fromCharCode(121,101,116,95,109,95,54,49,0);
         humiditym = `${(String.fromCharCode(113,0) == humiditym ? humiditym.length : whitex.length)}`;
      if (reminderb != String.fromCharCode(50,0)) {
         humiditym = `${humiditym.length + 1}`;
      }
      for (let n = 0; n < 3; n++) {
         humiditym += "1";
      }
       let kickH0: Map<any, any> = new Map([[String.fromCharCode(106,95,51,54,95,104,97,108,102,100,0),false ], [String.fromCharCode(116,111,111,98,105,103,95,54,95,54,55,0),false ], [String.fromCharCode(105,110,118,101,114,115,105,111,110,95,121,95,52,57,0),false ]]);
       let resendr: Map<any, any> = new Map([[String.fromCharCode(101,115,115,101,110,99,101,95,111,95,49,53,0),false ], [String.fromCharCode(101,95,57,52,95,101,120,101,99,117,116,97,98,108,101,0),false ]]);
         whitex = `${1 << (Math.min(4, whitex.length))}`;
         whitex += `${3 & whitex.length}`;
       let anytimec = 1.0;
       let currentD = 2.0;
      let show0 = 7141481 <= kickH0.size;
      do {
          let reminderh = false;
         kickH0 = new Map([[`${resendr.size}`, resendr.size]]);
         reminderh = !reminderh && reminderh;
         if (show0) {
            break;
         }
      } while (show0 && (3 <= (kickH0.size - 3) && (currentD - parseFloat(`${kickH0.size}`)) <= 4.70));
      for (let m = 0; m < 2; m++) {
         humiditym = `${whitex.length}`;
      }
      fullZ = [3 + parseInt(`${smalla}`)];
   for (let b = 0; b < 1; b++) {
      tail_ += `${3 & selectedr.length}`;
   }
      pauseb >>= Math.min(Math.abs(1 >> (Math.min(4, smallC.length))), 5);
       let umenge = 3.0;
       let sortI: Array<any> = [String.fromCharCode(116,95,49,48,95,112,115,100,115,112,0), String.fromCharCode(105,110,116,120,120,95,103,95,54,48,0), String.fromCharCode(110,95,57,49,95,98,114,111,97,100,99,97,115,116,105,110,103,0)];
       let interstitial7 = String.fromCharCode(117,95,54,57,95,98,101,110,99,104,0);
         umenge -= (String.fromCharCode(97,0) == interstitial7 ? interstitial7.length : sortI.length);
         sortI = [1];
         sortI.push(sortI.length / 1);
      let tailX = sortI.length <= 7453373;
      do {
         sortI = [3 << (Math.min(Math.abs(parseInt(`${umenge}`)), 2))];
         if (tailX) {
            break;
         }
      } while (tailX && (3 < sortI.length));
       let searchbarR: Map<any, any> = new Map([[String.fromCharCode(97,116,116,101,109,112,116,95,121,95,50,48,0),261], [String.fromCharCode(113,95,57,51,95,105,110,116,101,114,111,112,0),996]]);
       let overlayj: Map<any, any> = new Map([[String.fromCharCode(114,99,111,110,95,107,95,49,51,0),508], [String.fromCharCode(121,95,51,54,95,101,108,101,118,97,116,101,100,0),618], [String.fromCharCode(114,95,50,95,108,105,98,115,114,116,0),33]]);
      let floatingX = 6792260 <= sortI.length;
      do {
         sortI = [overlayj.size - sortI.length];
         if (floatingX) {
            break;
         }
      } while ((searchbarR.size < 4) && floatingX);
         overlayj = new Map([[`${overlayj.size}`, parseInt(`${umenge}`) ^ overlayj.size]]);
      while (Array.from(searchbarR.values()).includes(umenge)) {
         searchbarR = new Map([[`${searchbarR.size}`, 3 - parseInt(`${umenge}`)]]);
         break;
      }
          let middlewarew = 0.0;
          let injuryw = 5;
          let ajaxo = 2;
         interstitial7 += `${parseInt(`${middlewarew}`)}`;
         middlewarew -= 1;
         injuryw &= ajaxo & 1;
         ajaxo *= 3 ^ injuryw;
      selectedr += `${2 + parseInt(`${smalla}`)}`;
       let short_yw = 5;
       let saveU = 4.0;
         short_yw &= 2;
       let watchQ = false;
       let emojiax = false;
      while (!watchQ || 3.85 <= (saveU - 3.54)) {
         saveU /= Math.max(3 % (Math.max(parseInt(`${saveU}`), 4)), 1);
         break;
      }
          let acceptedc: Array<any> = [376, 14, 295];
         short_yw += 1;
         acceptedc = [acceptedc.length];
      if (5.43 <= (saveU - 2.87) || !watchQ) {
         watchQ = !emojiax;
      }
          let closeG: Map<any, any> = new Map([[String.fromCharCode(116,95,50,50,95,104,119,99,111,110,102,105,103,0),true ], [String.fromCharCode(114,95,55,54,95,98,97,110,100,105,110,103,0),false ]]);
          let goal8: Map<any, any> = new Map([[String.fromCharCode(98,117,102,102,101,114,115,114,99,95,122,95,56,56,0),242], [String.fromCharCode(105,110,118,111,99,97,116,105,111,110,115,95,119,95,51,0),329]]);
         saveU -= 2 & parseInt(`${saveU}`);
         closeG = new Map([[`${closeG.size}`, goal8.size]]);
         goal8 = new Map([[`${closeG.size}`, goal8.size - closeG.size]]);
      reducer7 ^= unread8.length + short_yw;
      fullZ.push(3 & parseInt(`${smalla}`));
      type_7c3 = new Map([[`${smallC.length}`, condensedu]]);
       let largeL = 1;
      for (let w = 0; w < 2; w++) {
          let heartf: Map<any, any> = new Map([[String.fromCharCode(97,95,51,57,95,122,101,114,111,99,111,100,101,99,0),String.fromCharCode(122,95,54,57,95,112,116,114,0)], [String.fromCharCode(114,101,99,111,110,95,103,95,51,54,0),String.fromCharCode(113,95,54,52,95,115,101,114,105,97,108,105,122,101,100,0)]]);
          let benefitK = String.fromCharCode(105,112,109,111,118,105,101,95,111,95,56,57,0);
          let saved = String.fromCharCode(105,109,109,101,100,105,97,116,101,108,121,95,120,95,55,0);
          let chinaR = String.fromCharCode(119,95,49,56,95,115,111,108,97,110,97,0);
         largeL %= Math.max(5, 2);
         heartf.set(benefitK, heartf.size);
         benefitK = `${chinaR.length & 3}`;
         saved += `${chinaR.length}`;
      }
      let dropdowny = largeL >= 6743042;
      do {
         largeL &= largeL | 3;
         if (dropdowny) {
            break;
         }
      } while ((largeL == 1) && dropdowny);
      while ((largeL << (Math.min(Math.abs(2), 2))) < 4) {
         largeL /= Math.max(2, largeL);
         break;
      }
      showW += type_7c3.size;
   let sharedS = selectedr.length <= 8779526;
   do {
      selectedr += `${reducer7}`;
      if (sharedS) {
         break;
      }
   } while ((!frame_tF) && sharedS);
   let teamf = unread8.length >= 6352527;
   do {
       let sinaY = 4.0;
       let eighteenK = 1;
       let watch8 = true;
       let combinedM = String.fromCharCode(100,98,111,111,108,104,117,102,102,95,122,95,54,52,0);
       let langkeyx = String.fromCharCode(102,95,56,50,95,98,105,116,112,108,97,110,101,0);
          let modef = String.fromCharCode(109,111,100,109,95,121,95,53,48,0);
         eighteenK %= Math.max(eighteenK, 3);
         modef += `${modef.length}`;
         langkeyx += `${combinedM.length}`;
         langkeyx = `${(String.fromCharCode(115,0) == combinedM ? parseInt(`${sinaY}`) : combinedM.length)}`;
      if (!watch8 && 1.37 < (3.79 * sinaY)) {
          let internetK: Array<any> = [519, 201, 156];
         sinaY -= parseFloat(`${3 & langkeyx.length}`);
         internetK.push(internetK.length % 2);
      }
      let singles = combinedM == String.fromCharCode(48,119,113,107,112,112,0);
      do {
          let tempp: Array<any> = [33, 883];
          let bodan5 = String.fromCharCode(122,95,53,57,95,115,97,109,112,108,101,0);
          let handler9: Map<any, any> = new Map([[String.fromCharCode(105,110,112,117,116,121,95,107,95,52,53,0),true ], [String.fromCharCode(104,95,51,51,95,101,118,97,108,102,117,110,99,0),false ], [String.fromCharCode(117,95,50,53,95,120,99,104,103,0),true ]]);
         combinedM = `${1 % (Math.max(eighteenK, 4))}`;
         tempp = [bodan5.length / 2];
         bodan5 += `${tempp.length & 1}`;
         handler9.set(bodan5, bodan5.length | handler9.size);
         if (singles) {
            break;
         }
      } while ((langkeyx.length >= combinedM.length) && singles);
         sinaY /= Math.max(parseFloat(`${eighteenK}`), 4);
         eighteenK >>= Math.min(Math.abs(1), 5);
      if ((4.5 + sinaY) >= 5.64 && 2 >= (langkeyx.length + parseInt(`${sinaY}`))) {
         sinaY /= Math.max((parseFloat(`${(watch8 ? 5 : 2) - parseInt(`${sinaY}`)}`)), 2);
      }
      for (let z = 0; z < 2; z++) {
         watch8 = !watch8;
      }
      if (!watch8) {
          let chat_ = true;
          let with_lY = 5.0;
          let temperatureD = String.fromCharCode(116,100,115,102,95,53,95,49,0);
          let lightD = String.fromCharCode(103,95,50,50,95,97,103,97,116,101,0);
         watch8 = temperatureD.endsWith(`${sinaY}`);
         chat_ = !lightD.includes(`${with_lY}`);
         with_lY *= (parseFloat(`${(chat_ ? 1 : 2) << (Math.min(Math.abs(parseInt(`${with_lY}`)), 2))}`));
         temperatureD += `${((chat_ ? 2 : 5) + 2)}`;
         lightD += `${2 | parseInt(`${with_lY}`)}`;
      }
         langkeyx += `${2 + parseInt(`${sinaY}`)}`;
         watch8 = sinaY <= 11.81 || !watch8;
         langkeyx = `${2 & parseInt(`${sinaY}`)}`;
      let linkh = 7887537.0 >= sinaY;
      do {
         sinaY += parseFloat(`${eighteenK}`);
         if (linkh) {
            break;
         }
      } while (linkh && (4 == (combinedM.length ^ 1) || 2 == (1 % (Math.max(9, combinedM.length)))));
      for (let z = 0; z < 1; z++) {
          let matchm = String.fromCharCode(103,95,57,48,95,100,97,112,112,115,0);
          let reminder7 = false;
          let customi = String.fromCharCode(98,114,101,110,100,101,114,95,118,95,53,49,0);
          let langkeyC: Array<any> = [String.fromCharCode(101,120,105,115,116,95,57,95,51,52,0), String.fromCharCode(103,95,50,50,95,116,114,105,109,0), String.fromCharCode(104,95,51,95,114,101,118,111,107,105,110,103,0)];
         watch8 = customi.length > 66 && reminder7;
         matchm += `${langkeyC.length}`;
         reminder7 = langkeyC.length <= 30 && String.fromCharCode(104,0) == matchm;
         customi = `${matchm.length ^ 1}`;
      }
      unread8 = `${condensedu - langkeyx.length}`;
      if (teamf) {
         break;
      }
   } while ((2 >= unread8.length) && teamf);
      animationM += 1;
       let middlet: Array<any> = [510, 412];
       let singleN = 2.0;
       let regeng8 = String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,95,50,95,50,54,0);
      while (1 >= (middlet.length * 2)) {
          let predictionc = 1.0;
         middlet.push(parseInt(`${predictionc}`));
         break;
      }
         middlet.push(parseInt(`${singleN}`));
      let loadinga = 8869093.0 <= singleN;
      do {
         singleN += parseInt(`${singleN}`) / 3;
         if (loadinga) {
            break;
         }
      } while ((regeng8.startsWith(`${singleN}`)) && loadinga);
      for (let k = 0; k < 3; k++) {
          let short_u0: Map<any, any> = new Map([[String.fromCharCode(114,95,55,49,95,116,97,98,108,101,103,101,110,0),String.fromCharCode(110,95,52,51,95,109,105,110,115,0)], [String.fromCharCode(106,95,51,49,95,101,110,104,97,110,99,101,109,101,110,116,115,0),String.fromCharCode(112,117,108,115,101,95,54,95,49,54,0)]]);
          let whistleI = 1;
          let userO = 1.0;
          let e_titleW: Array<any> = [205, 931, 398];
          let clockm = String.fromCharCode(104,95,55,55,95,101,118,114,112,99,0);
         singleN *= middlet.length;
         short_u0 = new Map([[`${whistleI}`, 3 * parseInt(`${userO}`)]]);
         whistleI %= Math.max(3, (String.fromCharCode(87,0) == clockm ? whistleI : clockm.length));
         userO += parseFloat(`${2 * clockm.length}`);
         e_titleW.push(short_u0.size);
      }
      while ((5 + middlet.length) <= 4 || (middlet.length / 5) <= 2) {
         middlet = [regeng8.length ^ parseInt(`${singleN}`)];
         break;
      }
          let str4 = false;
         regeng8 += `${((str4 ? 5 : 3) / (Math.max(parseInt(`${singleN}`), 7)))}`;
      let roomV = 8152987.0 >= singleN;
      do {
          let filedg = false;
         singleN *= 3;
         filedg = !filedg;
         if (roomV) {
            break;
         }
      } while (((middlet.length - singleN) == 1.6 || 5 == (middlet.length ^ 4)) && roomV);
         singleN /= Math.max(parseInt(`${singleN}`), 3);
         regeng8 = `${parseInt(`${singleN}`) / (Math.max(3, 5))}`;
      type_7c3 = new Map([[regeng8, 3 & regeng8.length]]);
   let livew = 5433189 >= tail_.length;
   do {
       let gmail9 = 4.0;
       let anythinkE = 2.0;
       let alertC = 0.0;
       let calendare: Map<any, any> = new Map([[String.fromCharCode(116,95,53,55,95,98,114,107,116,105,109,101,103,109,0),674], [String.fromCharCode(97,118,105,111,95,99,95,57,53,0),325]]);
      while (calendare.get(`${gmail9}`) != null) {
          let strp: Map<any, any> = new Map([[String.fromCharCode(105,109,112,111,114,116,115,95,52,95,56,57,0),814], [String.fromCharCode(105,109,97,103,101,115,95,117,95,55,52,0),844], [String.fromCharCode(113,95,54,57,95,98,121,116,101,115,0),372]]);
         calendare = new Map([[`${calendare.size}`, calendare.size]]);
         strp = new Map([[`${strp.size}`, strp.size]]);
         break;
      }
         calendare.set(`${gmail9}`, 3 * calendare.size);
          let appsc: Map<any, any> = new Map([[String.fromCharCode(110,101,99,101,115,115,97,114,121,95,118,95,54,55,0),661], [String.fromCharCode(115,95,52,53,95,105,118,97,114,0),630]]);
          let submitx = 5.0;
         calendare = new Map([[`${submitx}`, 3 & parseInt(`${gmail9}`)]]);
         appsc = new Map([[`${appsc.size}`, appsc.size ^ 3]]);
         submitx /= Math.max(4, parseFloat(`${appsc.size}`));
         anythinkE -= parseInt(`${gmail9}`);
         anythinkE -= parseInt(`${alertC}`);
         calendare = new Map([[`${alertC}`, parseInt(`${gmail9}`) + 2]]);
          let bottome = String.fromCharCode(103,97,109,117,116,115,95,111,95,50,55,0);
         alertC += parseInt(`${anythinkE}`);
         bottome += "2";
          let catalogP: Array<any> = [44, 740];
         gmail9 /= Math.max(parseFloat(`${3}`), 4);
         catalogP.push(2 & catalogP.length);
      for (let b = 0; b < 1; b++) {
         anythinkE += 1 - parseInt(`${anythinkE}`);
      }
      while ((gmail9 + anythinkE) > 2.3 && 5.12 > (anythinkE + 2.3)) {
          let telegramu = 2.0;
          let resultH = true;
         anythinkE -= parseInt(`${alertC}`);
         telegramu *= (parseFloat(`${(resultH ? 5 : 1) ^ parseInt(`${telegramu}`)}`));
         resultH = !resultH;
         break;
      }
       let predictionl = 5;
       let modityw = 0;
          let gemfile5 = 0;
         gmail9 -= parseFloat(`${modityw + 2}`);
         gemfile5 /= Math.max(3, 1);
      tail_ = `${projectO.size}`;
      if (livew) {
         break;
      }
   } while ((smalla >= 2.73) && livew);
   let ccopy_27K = 7461537 <= smallC.length;
   do {
       let b_unlockW: Map<any, any> = new Map([[String.fromCharCode(115,95,51,49,95,114,101,118,101,114,98,0),357], [String.fromCharCode(109,95,48,95,112,97,97,100,0),605]]);
       let dialogi = 1.0;
       let roomZ: Map<any, any> = new Map([[String.fromCharCode(122,95,56,57,95,103,122,105,112,112,101,100,0),780], [String.fromCharCode(101,120,105,102,95,57,95,56,54,0),622]]);
       let skip5 = true;
      if (b_unlockW.size >= 5) {
         dialogi -= (parseFloat(`${(skip5 ? 1 : 5) * parseInt(`${dialogi}`)}`));
      }
      if (1 <= roomZ.size) {
         skip5 = 30.22 > dialogi;
      }
       let lefti: Map<any, any> = new Map([[String.fromCharCode(102,108,111,97,116,115,95,100,95,52,51,0),322], [String.fromCharCode(106,95,55,51,95,112,97,115,116,101,0),211]]);
         dialogi += parseFloat(`${b_unlockW.size}`);
      for (let f = 0; f < 1; f++) {
         b_unlockW.set(`${dialogi}`, b_unlockW.size & 3);
      }
          let foundv = 0.0;
          let memberq = String.fromCharCode(101,95,53,49,95,105,110,116,101,114,99,101,112,116,111,114,0);
         dialogi /= Math.max(3, parseFloat(`${parseInt(`${dialogi}`)}`));
         foundv *= parseFloat(`${memberq.length}`);
         memberq = `${parseInt(`${foundv}`) - 3}`;
      let umeng9 = skip5 ? !skip5 : skip5;
      do {
         skip5 = 26 == lefti.size;
         if (umeng9) {
            break;
         }
      } while ((skip5) && umeng9);
         b_unlockW.set(`${skip5}`, 1);
      let refreshf = dialogi >= 9424137.0;
      do {
         dialogi *= parseFloat(`${2}`);
         if (refreshf) {
            break;
         }
      } while (refreshf && (Array.from(b_unlockW.values()).includes(dialogi)));
      let updatesQ = 6275424.0 >= dialogi;
      do {
         dialogi -= parseFloat(`${1}`);
         if (updatesQ) {
            break;
         }
      } while (updatesQ && (dialogi >= 4.92));
         dialogi *= parseFloat(`${1 + parseInt(`${dialogi}`)}`);
      for (let m = 0; m < 1; m++) {
          let selected2 = 0.0;
         skip5 = (dialogi / (Math.max(2, parseFloat(`${b_unlockW.size}`)))) <= 2.79;
         selected2 *= parseInt(`${selected2}`);
      }
      smallC = [blackV.length];
      if (ccopy_27K) {
         break;
      }
   } while ((3 > (blackV.length % 1)) && ccopy_27K);
      pauseb &= 1;
   for (let r = 0; r < 3; r++) {
      reducer7 ^= pauseb;
   }
      showW += 3;
      smalla /= Math.max(2, 1 & reducer7);
   let recommendationh = 6286221 <= blackV.length;
   do {
      blackV = [parseInt(`${animationM}`) / 1];
      if (recommendationh) {
         break;
      }
   } while ((2 >= blackV.length) && recommendationh);
   while (tail_.length == 5) {
      condensedu -= parseInt(`${animationM}`);
      break;
   }
      blackV.push((String.fromCharCode(89,0) == selectedr ? parseInt(`${showW}`) : selectedr.length));
   while (5.12 == animationM) {
      condensedu *= parseInt(`${animationM}`) - selectedr.length;
      break;
   }
       let fillq = String.fromCharCode(111,110,121,120,95,100,95,50,56,0);
       let grayE = String.fromCharCode(98,117,99,107,101,116,115,95,98,95,53,57,0);
          let largeu = false;
         fillq += `${grayE.length}`;
         largeu = (largeu ? largeu : largeu);
      for (let s = 0; s < 3; s++) {
         fillq += `${fillq.length * 3}`;
      }
         fillq += `${(grayE == String.fromCharCode(83,0) ? grayE.length : fillq.length)}`;
      while (grayE.length > 3 && fillq == String.fromCharCode(73,0)) {
          let feedbackb = 4.0;
          let countdownz: Map<any, any> = new Map([[String.fromCharCode(105,110,116,108,105,115,116,95,112,95,52,51,0),814], [String.fromCharCode(121,95,53,52,95,120,104,116,109,108,0),447], [String.fromCharCode(112,114,111,103,114,101,115,115,105,118,101,95,57,95,53,53,0),315]]);
          let episodey: Map<any, any> = new Map([[String.fromCharCode(101,112,108,121,95,112,95,53,54,0),992], [String.fromCharCode(105,104,100,114,95,113,95,56,57,0),233], [String.fromCharCode(118,95,52,52,95,109,117,108,114,101,115,0),449]]);
          let internetC = true;
         fillq = `${grayE.length & fillq.length}`;
         feedbackb *= parseFloat(`${episodey.size >> (Math.min(Math.abs(3), 4))}`);
         countdownz.set(`${feedbackb}`, parseInt(`${feedbackb}`) + countdownz.size);
         episodey.set(`${internetC}`, (2 | (internetC ? 4 : 2)));
         break;
      }
      let tooltipsz = String.fromCharCode(111,106,103,53,0) == fillq;
      do {
         fillq += "2";
         if (tooltipsz) {
            break;
         }
      } while ((fillq.startsWith(`${grayE.length}`)) && tooltipsz);
      while (2 >= grayE.length && fillq.length >= 2) {
         fillq += `${(String.fromCharCode(75,0) == fillq ? fillq.length : grayE.length)}`;
         break;
      }
      smalla *= 1 >> (Math.min(5, Math.abs(reducer7)));
       let lefte: Map<any, any> = new Map([[String.fromCharCode(111,112,116,105,109,117,109,95,51,95,57,57,0),String.fromCharCode(120,95,50,95,98,117,116,116,101,114,119,111,114,116,104,0)], [String.fromCharCode(98,108,101,101,100,95,48,95,54,50,0),String.fromCharCode(101,95,54,52,95,105,110,116,101,114,115,101,99,116,105,110,103,0)], [String.fromCharCode(119,95,49,48,48,95,110,101,115,116,101,100,0),String.fromCharCode(110,95,54,57,95,109,97,115,107,115,0)]]);
       let blackv = String.fromCharCode(108,95,56,50,95,99,111,100,101,100,0);
      while ((lefte.size / (Math.max(blackv.length, 10))) < 4 && (lefte.size / (Math.max(5, blackv.length))) < 4) {
          let condensedQ = 1.0;
          let reducerg: Array<any> = [807, 570, 806];
          let moonT = String.fromCharCode(99,117,108,102,114,101,113,95,118,95,55,0);
         blackv += `${moonT.length - parseInt(`${condensedQ}`)}`;
         condensedQ *= reducerg.length;
         reducerg = [3];
         break;
      }
         blackv = `${lefte.size >> (Math.min(blackv.length, 4))}`;
      while (lefte.size <= blackv.length) {
          let assisty = String.fromCharCode(98,95,50,53,95,111,112,116,105,111,110,97,108,115,0);
          let detaili = String.fromCharCode(113,95,55,57,95,112,97,99,107,101,116,112,101,101,107,0);
          let yinge = 1.0;
          let componentX = true;
         blackv = `${assisty.length >> (Math.min(detaili.length, 3))}`;
         assisty = `${((componentX ? 1 : 1) + parseInt(`${yinge}`))}`;
         detaili += `${(parseInt(`${yinge}`) << (Math.min(2, Math.abs((componentX ? 4 : 4)))))}`;
         break;
      }
          let settingsn = String.fromCharCode(103,95,56,54,95,100,98,108,112,0);
         lefte = new Map([[blackv, blackv.length & settingsn.length]]);
          let volumer: Array<any> = [987, 644];
          let modityZ = 0;
         blackv = `${volumer.length * 1}`;
         volumer.push(modityZ);
      let fillp = lefte.size <= 5332110;
      do {
         lefte.set(blackv, 2);
         if (fillp) {
            break;
         }
      } while (fillp && (3 <= (blackv.length + lefte.size)));
      fullZ.push(reducer7 * parseInt(`${smalla}`));
   let anythinkY = 6114257 <= type_7c3.size;
   do {
      type_7c3 = new Map([[`${pauseb}`, pauseb]]);
      if (anythinkY) {
         break;
      }
   } while (anythinkY && (showW >= 2.42));
   while ((tail_.length & 3) < 4 || 2 < (3 & tail_.length)) {
      tail_ = `${((frame_tF ? 2 : 1) | 1)}`;
      break;
   }
   while ((2 ^ unread8.length) == 1) {
      unread8 = "2";
      break;
   }
      reducer7 ^= 3;
      smallC.push(pauseb << (Math.min(selectedr.length, 1)));
   if (1.6 == (4.42 + animationM) && (blackD + animationM) == 4.42) {
      blackD -= (blackV.length ^ (frame_tF ? 5 : 3));
   }
   for (let z = 0; z < 2; z++) {
      type_7c3.set(`${animationM}`, condensedu << (Math.min(Math.abs(parseInt(`${animationM}`)), 1)));
   }
      animationM -= parseInt(`${showW}`);
       let inviteT = 2.0;
       let uploadR: Array<any> = [453, 573];
       let checkboxE = true;
         inviteT += parseFloat(`${parseInt(`${inviteT}`) & 3}`);
      for (let i = 0; i < 3; i++) {
          let stationsO = true;
          let previewF = 1.0;
         uploadR = [parseInt(`${inviteT}`) >> (Math.min(3, Math.abs(2)))];
         stationsO = 67.4 == previewF;
         previewF += parseFloat(`${3 % (Math.max(8, parseInt(`${previewF}`)))}`);
      }
      if (parseFloat(`${uploadR.length}`) > inviteT) {
         uploadR.push(uploadR.length);
      }
      for (let c = 0; c < 3; c++) {
         uploadR.push(parseInt(`${inviteT}`) - 2);
      }
      for (let j = 0; j < 2; j++) {
         checkboxE = uploadR.length <= 81;
      }
      unread8 += `${parseInt(`${inviteT}`) << (Math.min(uploadR.length, 4))}`;
   if (5.9 >= (animationM / 4.46) || !frame_tF) {
      frame_tF = blackD <= 53.37;
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
      vipGuideModalOpen = false,
    }: XFillButton,
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
      "acceptedGiftDark" | "none" | "fastUpdate_ebAssist"
    >("none");
    const [playbackRate, setPlaybackRate] = useState<number>(1);
    const controlsRef = useRef() as React.MutableRefObject<OPrediction>;
    const accumulatedSkip = useRef(0);
    const [isLastForward, setIsLastForward] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const isFocus = useIsFocused();

    const userState = useSelector<HDTGesturesList>('userReducer');
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

    const isOffline = useAppSelector(({ settingsReducer }: PSmall) => settingsReducer.isOffline)

    const isSeekErrorRef = useRef(false);

    const { data: playerVodAds, isFetching: isFetchAds } = useQuery({
      queryKey: ["playerAdsVideo"],
      queryFn: () => RCanvas.getPlayerAdVideo(),
      enabled: !isOffline
    });

    useEffect(() => {
      if (vod_url === '') return;

      if (showAds &&
        playerVodAds &&
        (!KWConstants.isVip(userState.user))
      ) {
        setShowAd(true);
        setAdCountdownTime(playerVodAds.minDuration);
        adVideoRef.current?.seek(0);

        
        umb_center_carousel.playsAdsViewAnalytics({
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
       let catalogc: Map<any, any> = new Map([[String.fromCharCode(118,95,52,55,95,108,109,108,109,0),String.fromCharCode(115,110,97,112,95,113,95,51,48,0)], [String.fromCharCode(103,95,57,50,95,101,118,112,111,114,116,0),String.fromCharCode(114,95,55,48,95,101,110,116,114,111,112,121,109,111,100,101,100,97,116,97,0)], [String.fromCharCode(99,111,100,105,110,103,116,121,112,101,95,55,95,52,0),String.fromCharCode(117,95,50,56,95,112,97,114,97,109,0)]]);
    let private_zL = 4.0;
    let recommendation9 = true;
    let main_gF = 3.0;
    let buffer_: Array<any> = [606, 986, 995];
    let viewsF: Array<any> = [601, 918];
    let awayg = true;
    let stepH = false;
    let listK = 3;
    let details8: Array<any> = [836, 23];
    let m_player3 = 4.0;
    let usernameg: Array<any> = [String.fromCharCode(101,112,108,121,95,48,95,54,51,0), String.fromCharCode(115,111,119,97,107,101,117,112,95,99,95,54,56,0)];
    let bing5 = 4.0;
    let membershipe: Map<any, any> = new Map([[String.fromCharCode(104,101,118,99,112,114,101,100,95,52,95,52,52,0),false ], [String.fromCharCode(117,95,52,57,95,105,115,97,108,110,117,109,0),true ]]);
       let phone2 = true;
      let singlem = phone2 ? !phone2 : phone2;
      do {
          let canvass = String.fromCharCode(115,97,109,112,108,101,100,95,106,95,49,55,0);
          let gemfileC = String.fromCharCode(115,107,101,121,95,55,95,52,56,0);
          let turnb: Array<any> = [String.fromCharCode(120,95,52,56,95,115,99,116,112,0), String.fromCharCode(114,111,116,97,116,105,111,110,95,52,95,55,54,0)];
          let termsY = String.fromCharCode(117,105,100,95,99,95,56,51,0);
         phone2 = termsY.length >= turnb.length;
         canvass += `${canvass.length}`;
         gemfileC = `${gemfileC.length}`;
         turnb.push(3);
         termsY = `${(gemfileC == String.fromCharCode(102,0) ? gemfileC.length : canvass.length)}`;
         if (singlem) {
            break;
         }
      } while (singlem && (!phone2));
      for (let n = 0; n < 3; n++) {
         phone2 = (phone2 ? !phone2 : !phone2);
      }
         phone2 = (phone2 ? !phone2 : phone2);
      listK <<= Math.min(4, Math.abs(parseInt(`${private_zL}`)));
   while (buffer_.length >= 5) {
      stepH = 81.27 >= m_player3;
      break;
   }
   if (4.59 <= (listK - main_gF)) {
      main_gF *= parseFloat(`${usernameg.length >> (Math.min(Math.abs(1), 5))}`);
   }
   if ((listK % (Math.max(4, 4))) <= 2 || (bing5 + 3.27) <= 5.39) {
      listK |= parseInt(`${m_player3}`) & 2;
   }
      catalogc = new Map([[`${catalogc.size}`, parseInt(`${m_player3}`) % (Math.max(5, catalogc.size))]]);
   let quest9 = 8870580 >= usernameg.length;
   do {
      usernameg.push(usernameg.length);
      if (quest9) {
         break;
      }
   } while (quest9 && (2.55 <= (main_gF - parseFloat(`${usernameg.length}`))));
   if ((2 >> (Math.min(4, Math.abs(listK)))) == 2 && !recommendation9) {
      listK -= 2;
   }
   for (let w = 0; w < 1; w++) {
       let data4: Map<any, any> = new Map([[String.fromCharCode(121,95,56,49,95,118,97,108,105,100,97,116,111,114,115,0),false ], [String.fromCharCode(113,95,49,95,116,101,109,112,0),true ], [String.fromCharCode(107,95,57,51,95,100,101,99,108,97,114,101,100,0),false ]]);
      if (data4.size > 2) {
          let sendy = false;
          let moduleE: Array<any> = [305, 782, 821];
          let viewsL = String.fromCharCode(103,101,116,102,114,97,109,101,95,106,95,57,57,0);
         data4 = new Map([[`${moduleE.length}`, moduleE.length]]);
         sendy = sendy && viewsL.length >= 16;
         viewsL = `${(viewsL.length + (sendy ? 1 : 2))}`;
      }
      let stringq = 4954916 >= data4.size;
      do {
          let usernames = false;
          let resultX = 2.0;
         data4.set(`${resultX}`, parseInt(`${resultX}`) >> (Math.min(2, Math.abs(1))));
         usernames = (usernames ? usernames : !usernames);
         if (stringq) {
            break;
         }
      } while (stringq && (1 > (data4.size + 1) || (data4.size + 1) > 2));
       let l_imageh = String.fromCharCode(119,95,52,95,97,117,120,105,108,105,97,114,121,0);
       let dangerX = String.fromCharCode(115,97,105,111,95,110,95,57,52,0);
      stepH = 19 < listK || awayg;
   }
   let subsS = recommendation9 ? !recommendation9 : recommendation9;
   do {
       let soundm = 0;
       let membershipU = 2;
      let screenx = soundm >= 6191839;
      do {
          let lineP = String.fromCharCode(107,95,49,57,95,97,108,105,103,110,0);
          let containerA = String.fromCharCode(109,117,108,116,105,100,101,115,99,114,105,112,116,111,114,95,111,95,57,50,0);
          let rewindv = 4.0;
         soundm -= soundm * parseInt(`${rewindv}`);
         lineP += `${containerA.length & 1}`;
         containerA += `${containerA.length + 1}`;
         rewindv -= 1 + lineP.length;
         if (screenx) {
            break;
         }
      } while ((soundm < 1) && screenx);
         soundm ^= membershipU;
         membershipU |= soundm;
      for (let h = 0; h < 2; h++) {
         membershipU %= Math.max(soundm, 4);
      }
       let tumbnailV = 2.0;
       let ruless = 0.0;
         soundm %= Math.max(1, parseInt(`${ruless}`));
      recommendation9 = (viewsF.length % (Math.max(4, membershipU))) < 42;
      if (subsS) {
         break;
      }
   } while ((4 <= catalogc.size) && subsS);
       let starH: Map<any, any> = new Map([[String.fromCharCode(105,95,55,50,95,99,104,97,110,110,101,108,115,0),419], [String.fromCharCode(108,95,51,50,95,116,104,114,109,97,116,0),834]]);
       let downloadO: Array<any> = [565, 12, 606];
       let mapping2 = false;
       let chinaC = String.fromCharCode(106,95,56,56,95,121,117,118,112,116,111,117,121,118,121,0);
         mapping2 = (17 == (starH.size * (!mapping2 ? 17 : starH.size)));
      for (let z = 0; z < 2; z++) {
          let castd: Array<any> = [616, 585];
          let gemfileL = 3.0;
          let forwardb = String.fromCharCode(108,95,52,54,95,111,116,104,101,114,119,105,115,101,0);
          let teamX: Map<any, any> = new Map([[String.fromCharCode(118,95,52,53,95,98,105,110,100,101,114,0),String.fromCharCode(104,99,104,97,99,104,97,95,103,95,50,49,0)], [String.fromCharCode(111,95,52,55,95,104,111,115,116,110,97,109,101,0),String.fromCharCode(108,95,49,52,95,100,97,115,104,98,111,97,114,100,0)], [String.fromCharCode(112,97,105,114,95,107,95,57,0),String.fromCharCode(104,95,50,49,95,101,120,112,114,101,115,115,105,111,110,115,0)]]);
          let eighteenr = String.fromCharCode(109,101,108,116,95,56,95,50,0);
         chinaC += `${teamX.size - downloadO.length}`;
         castd = [parseInt(`${gemfileL}`) + eighteenr.length];
         gemfileL /= Math.max(3, parseFloat(`${3 & castd.length}`));
         forwardb = `${forwardb.length + parseInt(`${gemfileL}`)}`;
         teamX = new Map([[`${castd.length}`, castd.length - forwardb.length]]);
         eighteenr = `${castd.length ^ parseInt(`${gemfileL}`)}`;
      }
      while (1 == (1 >> (Math.min(2, Math.abs(starH.size)))) && 1 == (1 >> (Math.min(5, Math.abs(starH.size))))) {
          let report7 = 3.0;
          let unselectedk = String.fromCharCode(98,95,51,51,95,105,110,100,101,110,116,101,100,0);
         starH.set(`${mapping2}`, chinaC.length);
         report7 *= unselectedk.length;
         unselectedk += `${parseInt(`${report7}`)}`;
         break;
      }
         chinaC += `${3 >> (Math.min(3, Math.abs(starH.size)))}`;
       let detailY = String.fromCharCode(112,95,50,54,95,109,105,114,114,111,114,0);
      if (starH.size <= chinaC.length) {
         starH = new Map([[`${starH.size}`, starH.size]]);
      }
         downloadO = [(detailY == String.fromCharCode(77,0) ? detailY.length : downloadO.length)];
       let malaysiaN = String.fromCharCode(110,101,119,101,114,95,55,95,54,53,0);
       let contextL = String.fromCharCode(110,95,53,48,95,114,101,119,114,105,116,101,114,0);
      usernameg = [((recommendation9 ? 4 : 2) ^ parseInt(`${private_zL}`))];
   while (1 > details8.length && (1 % (Math.max(6, details8.length))) > 4) {
      details8 = [(usernameg.length ^ (stepH ? 5 : 3))];
      break;
   }
   let y_lockP = m_player3 >= 9523144.0;
   do {
      m_player3 /= Math.max(5, parseFloat(`${parseInt(`${main_gF}`) * 2}`));
      if (y_lockP) {
         break;
      }
   } while ((2.93 > (m_player3 / 5.15)) && y_lockP);
      bing5 -= parseFloat(`${parseInt(`${bing5}`) / (Math.max(usernameg.length, 8))}`);
   while (buffer_.length >= 2) {
       let mutedb = 5.0;
       let chartJ = String.fromCharCode(120,95,49,95,117,114,118,101,0);
       let gpayi: Array<any> = [494, 880, 133];
         mutedb *= parseFloat(`${chartJ.length}`);
      for (let o = 0; o < 3; o++) {
         chartJ += `${gpayi.length - 1}`;
      }
         chartJ += `${1 | gpayi.length}`;
         mutedb *= parseFloat(`${1}`);
      let eactp = 5036239.0 <= mutedb;
      do {
          let photo6 = String.fromCharCode(102,105,110,97,108,105,122,101,114,95,107,95,53,52,0);
          let znews6 = String.fromCharCode(103,108,111,98,97,108,116,101,109,95,107,95,51,52,0);
         mutedb *= parseFloat(`${chartJ.length}`);
         photo6 = `${znews6.length | photo6.length}`;
         znews6 += `${1 + photo6.length}`;
         if (eactp) {
            break;
         }
      } while (((4 & chartJ.length) <= 2 || 5 <= (chartJ.length / 4)) && eactp);
          let areas = 2.0;
          let playD = 0;
          let corner4 = String.fromCharCode(99,114,111,115,115,102,97,100,101,95,109,95,51,57,0);
         gpayi.push(3);
         areas *= parseFloat(`${parseInt(`${areas}`) + 1}`);
         playD += 2 % (Math.max(5, corner4.length));
         corner4 = "2";
      let fillK = mutedb <= 8830152.0;
      do {
         mutedb *= parseFloat(`${2 | chartJ.length}`);
         if (fillK) {
            break;
         }
      } while ((2 >= (chartJ.length / (Math.max(2, 8))) && 2 >= (parseInt(`${mutedb}`) * chartJ.length)) && fillK);
         chartJ += `${chartJ.length / (Math.max(3, gpayi.length))}`;
      for (let z = 0; z < 3; z++) {
         chartJ += "2";
      }
      bing5 -= parseFloat(`${usernameg.length / 3}`);
      break;
   }
      awayg = m_player3 > 68.95 || details8.length > 99;
       let volumez = String.fromCharCode(112,95,50,53,95,104,97,114,100,0);
       let floatingQ = 4.0;
         floatingQ -= parseFloat(`${1 ^ parseInt(`${floatingQ}`)}`);
      for (let q = 0; q < 2; q++) {
         floatingQ *= parseFloat(`${parseInt(`${floatingQ}`) * 2}`);
      }
       let appleT = String.fromCharCode(101,120,97,109,112,108,101,95,116,95,51,55,0);
       let overlayn = String.fromCharCode(114,95,54,54,95,108,97,121,101,114,105,110,103,0);
      while (!appleT.endsWith(`${volumez.length}`)) {
         volumez += `${(appleT == String.fromCharCode(66,0) ? overlayn.length : appleT.length)}`;
         break;
      }
      if (2.71 < (floatingQ * 5.47) || (floatingQ * parseFloat(`${appleT.length}`)) < 5.47) {
          let floaterb: Map<any, any> = new Map([[String.fromCharCode(118,111,99,97,98,95,97,95,50,49,0),true ], [String.fromCharCode(99,97,110,99,101,108,108,101,114,95,110,95,51,50,0),true ]]);
          let indexS = String.fromCharCode(113,95,51,57,95,102,97,100,101,0);
          let helperU = 5;
          let native2 = 3;
          let umengD = String.fromCharCode(103,95,56,57,95,121,111,110,108,121,120,0);
         floatingQ += (parseFloat(`${volumez == String.fromCharCode(52,0) ? parseInt(`${floatingQ}`) : volumez.length}`));
         floaterb.set(`${helperU}`, helperU);
         indexS = "3";
         native2 *= 2;
         umengD += `${(String.fromCharCode(95,0) == umengD ? umengD.length : floaterb.size)}`;
      }
      for (let k = 0; k < 3; k++) {
          let placement0 = 5;
          let historyb = String.fromCharCode(102,105,108,108,105,110,95,50,95,57,55,0);
         volumez = `${parseInt(`${floatingQ}`) ^ 3}`;
         placement0 |= placement0 / (Math.max(3, 1));
         historyb = `${historyb.length << (Math.min(Math.abs(2), 1))}`;
      }
      viewsF = [usernameg.length];
   let emptye = 6070445 <= viewsF.length;
   do {
      viewsF = [((recommendation9 ? 4 : 4) ^ usernameg.length)];
      if (emptye) {
         break;
      }
   } while (emptye && ((viewsF.length % (Math.max(details8.length, 2))) >= 1 || 4 >= (details8.length % 1)));
   for (let z = 0; z < 1; z++) {
      recommendation9 = !recommendation9 && details8.length > 75;
   }
      catalogc = new Map([[`${stepH}`, ((stepH ? 4 : 4) / (Math.max(parseInt(`${m_player3}`), 2)))]]);
   if (main_gF < 3.18) {
      main_gF += parseFloat(`${parseInt(`${bing5}`) - catalogc.size}`);
   }
   for (let z = 0; z < 1; z++) {
      recommendation9 = bing5 < 55.89;
   }
       let sellH: Array<any> = [317, 286, 513];
       let searchbar8: Array<any> = [String.fromCharCode(101,114,111,100,101,95,113,95,55,57,0), String.fromCharCode(122,95,54,57,95,100,117,114,97,116,105,111,110,0)];
         sellH = [searchbar8.length % 1];
          let videow = 2.0;
          let faviconk: Array<any> = [730, 615, 369];
         searchbar8 = [searchbar8.length];
         videow *= parseFloat(`${3 | faviconk.length}`);
         faviconk.push(1);
      if (1 <= (4 * searchbar8.length)) {
         searchbar8 = [2 + sellH.length];
      }
          let light6 = String.fromCharCode(119,95,49,54,95,118,105,115,105,116,111,114,0);
         searchbar8.push(searchbar8.length >> (Math.min(Math.abs(3), 4)));
         light6 = `${light6.length >> (Math.min(Math.abs(3), 2))}`;
          let typesp: Map<any, any> = new Map([[String.fromCharCode(106,95,55,49,95,116,111,98,105,116,0),String.fromCharCode(107,95,52,95,115,97,109,112,108,101,102,109,116,0)], [String.fromCharCode(115,95,50,50,95,97,100,100,115,0),String.fromCharCode(109,95,50,51,95,99,111,100,101,98,111,111,107,115,0)]]);
          let forward8 = 2;
         sellH.push(typesp.size - 3);
         typesp.set(`${forward8}`, 1 << (Math.min(3, Math.abs(forward8))));
      for (let h = 0; h < 1; h++) {
         sellH = [3];
      }
      awayg = stepH;
      listK &= catalogc.size - viewsF.length;
      usernameg.push(listK);
      usernameg = [parseInt(`${private_zL}`) & parseInt(`${bing5}`)];
   if (4.45 >= m_player3 || (4.45 + m_player3) >= 4.22) {
      m_player3 -= parseFloat(`${3 - details8.length}`);
   }
      viewsF.push(((stepH ? 2 : 4) & 3));

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
       let phoneJ = String.fromCharCode(116,111,109,99,114,121,112,116,95,121,95,56,54,0);
    let pageQ = 2;
    let videoJ = 3.0;
    let linkT = String.fromCharCode(104,97,97,114,95,52,95,55,0);
    let j_titler: Array<any> = [521, 491, 177];
    let module4 = String.fromCharCode(114,95,56,95,116,101,109,112,102,105,108,101,0);
    let modeK = 5;
    let commentS = String.fromCharCode(117,95,55,52,95,116,105,109,101,114,0);
    let scheduleu = true;
    let description__6M: Map<any, any> = new Map([[String.fromCharCode(114,101,107,101,121,95,52,95,54,55,0),false ], [String.fromCharCode(107,95,52,95,112,108,97,110,97,114,116,111,117,121,118,121,0),false ]]);
       let eactY = 3;
       let scheduleK = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,95,112,95,50,51,0);
       let frame_oB = false;
         frame_oB = (59 <= ((!frame_oB ? 59 : scheduleK.length) & scheduleK.length));
          let bcopy__bI = false;
         scheduleK = `${eactY - 1}`;
         bcopy__bI = (!bcopy__bI ? bcopy__bI : !bcopy__bI);
          let controlJ = 3.0;
          let crownc = true;
          let close1 = String.fromCharCode(112,95,57,52,95,99,104,117,110,107,121,99,104,117,110,107,121,0);
         scheduleK = `${1 | parseInt(`${controlJ}`)}`;
         controlJ += parseFloat(`${close1.length ^ 3}`);
         crownc = close1.length < 93;
         eactY >>= Math.min(scheduleK.length, 5);
      let sanse = eactY >= 6889272;
      do {
         eactY ^= scheduleK.length + eactY;
         if (sanse) {
            break;
         }
      } while (sanse && ((4 + eactY) > 1 && 3 > (4 + eactY)));
         scheduleK = `${scheduleK.length}`;
      if (3 <= (3 + scheduleK.length) || 3 <= (scheduleK.length + eactY)) {
         eactY -= ((frame_oB ? 4 : 1) * eactY);
      }
         scheduleK += `${(scheduleK == String.fromCharCode(98,0) ? eactY : scheduleK.length)}`;
          let nterstitialb: Array<any> = [510, 562, 696];
          let disconnectedR = String.fromCharCode(114,101,102,101,116,99,104,95,57,95,50,0);
         scheduleK += `${disconnectedR.length}`;
         nterstitialb.push(3 / (Math.max(9, nterstitialb.length)));
         disconnectedR += `${nterstitialb.length * nterstitialb.length}`;
      videoJ *= parseFloat(`${scheduleK.length}`);
      module4 = `${j_titler.length & 3}`;
       let actionsL = String.fromCharCode(105,103,110,111,114,101,115,95,110,95,57,56,0);
       let moreX = 2.0;
       let typingm: Array<any> = [15, 973];
          let windJ = 5.0;
          let headerN = true;
          let catalog5 = true;
         actionsL += "2";
         windJ -= (parseFloat(`${parseInt(`${windJ}`) - (headerN ? 1 : 3)}`));
         headerN = 66.15 < windJ && !headerN;
         catalog5 = windJ < 41.5 || headerN;
      while (2.55 > (moreX - 2.81)) {
         moreX /= Math.max(4, typingm.length);
         break;
      }
      if (2 > (2 ^ actionsL.length) && 2 > (actionsL.length ^ typingm.length)) {
         actionsL += "2";
      }
         actionsL += `${parseInt(`${moreX}`) << (Math.min(Math.abs(3), 2))}`;
      if ((parseInt(`${moreX}`) - actionsL.length) > 3 || 5.19 > (2.2 - moreX)) {
          let gpayf = true;
          let injury9 = String.fromCharCode(109,101,115,111,110,95,104,95,57,55,0);
          let reportr: Map<any, any> = new Map([[String.fromCharCode(108,95,53,53,95,114,103,98,121,117,118,0),true ], [String.fromCharCode(109,109,97,112,95,108,95,53,48,0),true ]]);
          let backgroundg = 0;
         moreX /= Math.max(5, (3 % (Math.max(1, (gpayf ? 1 : 3)))));
         gpayf = 94 <= injury9.length;
         injury9 = "2";
         reportr.set(injury9, (injury9 == String.fromCharCode(111,0) ? reportr.size : injury9.length));
         backgroundg |= 2;
      }
         typingm = [(String.fromCharCode(101,0) == actionsL ? parseInt(`${moreX}`) : actionsL.length)];
      if (3 == actionsL.length) {
          let banneru = String.fromCharCode(100,95,51,95,116,105,109,101,103,109,0);
          let plust = String.fromCharCode(106,95,56,95,104,97,108,100,99,108,117,116,0);
          let typing0 = true;
         actionsL = "1";
         banneru = "3";
         plust += `${banneru.length << (Math.min(4, plust.length))}`;
         typing0 = 36 <= plust.length;
      }
      if (1.43 == moreX) {
         actionsL = `${3 << (Math.min(5, typingm.length))}`;
      }
         moreX += parseInt(`${moreX}`) | typingm.length;
      phoneJ += `${3 ^ pageQ}`;
      module4 += `${linkT.length / (Math.max(1, 8))}`;
       let entryz: Array<any> = [String.fromCharCode(99,111,109,109,105,116,116,101,114,95,101,95,52,55,0), String.fromCharCode(105,95,57,54,95,122,111,110,101,0)];
       let goalH: Map<any, any> = new Map([[String.fromCharCode(119,95,56,54,95,115,105,108,101,110,116,0),true ], [String.fromCharCode(118,105,100,101,111,100,115,112,95,52,95,50,53,0),true ]]);
         entryz = [3 + entryz.length];
         goalH.set(`${entryz.length}`, goalH.size << (Math.min(entryz.length, 1)));
       let twitterz = String.fromCharCode(102,97,115,116,116,101,115,116,95,57,95,52,52,0);
       let resultx = String.fromCharCode(105,102,110,115,95,102,95,57,0);
       let submitW = String.fromCharCode(100,121,110,108,105,110,107,95,51,95,49,48,0);
       let termsE = String.fromCharCode(97,95,56,48,95,97,116,111,98,111,111,108,0);
      while (!twitterz.startsWith(`${termsE.length}`)) {
         twitterz += `${termsE.length}`;
         break;
      }
       let inviteR: Map<any, any> = new Map([[String.fromCharCode(103,95,56,51,95,105,110,99,108,117,115,105,111,110,115,0),64], [String.fromCharCode(108,111,117,100,110,111,114,109,95,99,95,51,55,0),367]]);
      linkT = "1";
   while ((5 + modeK) > 4 || 5 > (5 + pageQ)) {
       let resultW = false;
       let down2 = 5.0;
       let whiteW: Array<any> = [62, 25, 804];
       let handlerB: Array<any> = [167, 869, 521];
       let videox = true;
      let circled = 5591523.0 >= down2;
      do {
         down2 -= parseFloat(`${whiteW.length}`);
         if (circled) {
            break;
         }
      } while (circled && (1 < (3 | whiteW.length)));
      if (down2 <= 3.14) {
         down2 *= parseFloat(`${parseInt(`${down2}`) ^ whiteW.length}`);
      }
          let speca = 5;
         resultW = speca > parseInt(`${down2}`);
         down2 -= (parseFloat(`${parseInt(`${down2}`) ^ (resultW ? 3 : 4)}`));
      for (let y = 0; y < 1; y++) {
         whiteW = [handlerB.length & 1];
      }
      if ((down2 - 2.27) > 5.48 || 4 > (handlerB.length % (Math.max(5, 5)))) {
         down2 += parseFloat(`${whiteW.length}`);
      }
      for (let t = 0; t < 1; t++) {
          let signinupq: Map<any, any> = new Map([[String.fromCharCode(98,105,108,97,116,101,114,97,108,95,110,95,55,50,0),939], [String.fromCharCode(101,95,57,95,114,116,112,102,98,0),66], [String.fromCharCode(122,95,54,49,95,103,97,112,0),76]]);
          let delegate_4ug = 5;
          let gemfileH = 3.0;
          let indexr = 4;
         down2 *= parseFloat(`${3 + handlerB.length}`);
         signinupq = new Map([[`${gemfileH}`, indexr]]);
         delegate_4ug *= indexr;
         gemfileH *= 2;
      }
      while (handlerB.length == 2) {
         handlerB.push(whiteW.length + handlerB.length);
         break;
      }
          let iconq = 5.0;
          let umengr: Array<any> = [String.fromCharCode(109,97,100,101,98,121,95,102,95,56,49,0), String.fromCharCode(115,101,116,108,105,115,116,95,119,95,51,0), String.fromCharCode(112,114,111,112,111,115,97,108,95,101,95,51,51,0)];
         handlerB = [1];
         iconq /= Math.max(parseFloat(`${umengr.length / (Math.max(1, 4))}`), 4);
         umengr = [2 / (Math.max(parseInt(`${iconq}`), 4))];
      while (down2 == 3.51 && 5.93 == (down2 - 3.51)) {
          let disconnectedU: Array<any> = [String.fromCharCode(99,97,112,116,117,114,101,95,112,95,56,57,0), String.fromCharCode(115,111,108,105,100,105,116,121,95,106,95,55,55,0), String.fromCharCode(115,116,114,105,100,95,98,95,57,56,0)];
          let i_lockc = 0.0;
          let ball5 = 5;
          let faviconw = String.fromCharCode(116,114,101,110,100,108,105,110,101,95,114,95,52,50,0);
          let statisticsQ: Array<any> = [830, 700];
         down2 *= (parseFloat(`${(resultW ? 4 : 5) % (Math.max(parseInt(`${down2}`), 5))}`));
         disconnectedU = [parseInt(`${i_lockc}`)];
         i_lockc /= Math.max(parseFloat(`${ball5}`), 1);
         ball5 += 1;
         faviconw += `${faviconw.length * ball5}`;
         statisticsQ = [ball5];
         break;
      }
      for (let e = 0; e < 3; e++) {
         whiteW.push(handlerB.length);
      }
      modeK *= 3;
      break;
   }
      j_titler.push(modeK | 2);
      modeK |= 1;
       let sinaU: Map<any, any> = new Map([[String.fromCharCode(116,95,51,95,109,101,100,105,117,109,116,104,114,101,115,104,0),430], [String.fromCharCode(99,95,52,54,95,115,101,101,107,98,97,99,107,0),133], [String.fromCharCode(109,95,52,95,109,101,109,122,101,114,111,0),761]]);
       let overx = String.fromCharCode(103,95,55,95,108,115,112,108,112,99,0);
         sinaU = new Map([[`${sinaU.size}`, sinaU.size]]);
      let policya = String.fromCharCode(105,108,111,95,98,98,0) == overx;
      do {
          let chatZ = String.fromCharCode(99,104,101,99,107,97,115,109,95,111,95,51,0);
          let orangeN = String.fromCharCode(98,105,116,115,112,117,108,115,101,115,95,108,95,55,50,0);
          let line4 = String.fromCharCode(102,95,53,55,95,109,97,116,99,104,0);
         overx = `${sinaU.size}`;
         chatZ = `${(chatZ == String.fromCharCode(78,0) ? line4.length : chatZ.length)}`;
         orangeN += `${(String.fromCharCode(100,0) == line4 ? line4.length : orangeN.length)}`;
         if (policya) {
            break;
         }
      } while ((1 < (sinaU.size / (Math.max(overx.length, 4)))) && policya);
      while (2 < (overx.length / (Math.max(5, 3))) && 4 < (5 / (Math.max(5, overx.length)))) {
          let untickc = 3.0;
         overx = `${overx.length % (Math.max(3, 10))}`;
         untickc /= Math.max(parseInt(`${untickc}`) << (Math.min(2, Math.abs(parseInt(`${untickc}`)))), 4);
         break;
      }
      if ((3 - sinaU.size) >= 5) {
         overx = `${sinaU.size}`;
      }
          let resultV = 5.0;
          let placementn = String.fromCharCode(103,95,54,95,115,113,117,97,114,101,100,0);
         overx = "1";
         resultV *= parseFloat(`${placementn.length + 1}`);
         placementn = `${parseInt(`${resultV}`)}`;
         overx += `${(overx == String.fromCharCode(81,0) ? sinaU.size : overx.length)}`;
      modeK ^= parseInt(`${videoJ}`) / (Math.max(j_titler.length, 1));
   let flyer8 = 5828175 >= j_titler.length;
   do {
      j_titler.push(pageQ >> (Math.min(Math.abs(2), 3)));
      if (flyer8) {
         break;
      }
   } while (((j_titler.length % (Math.max(2, linkT.length))) <= 1 && (linkT.length % (Math.max(6, j_titler.length))) <= 1) && flyer8);
       let filledv = String.fromCharCode(100,105,115,112,97,116,99,104,105,110,103,95,98,95,56,57,0);
      for (let j = 0; j < 2; j++) {
          let u_imagef = String.fromCharCode(97,100,115,97,114,109,97,115,109,95,103,95,52,52,0);
          let temperature5 = String.fromCharCode(109,112,100,98,95,113,95,57,57,0);
         filledv = `${filledv.length}`;
         u_imagef = `${u_imagef.length}`;
         temperature5 = "3";
      }
      for (let b = 0; b < 3; b++) {
         filledv = `${2 | filledv.length}`;
      }
       let orangeN3 = String.fromCharCode(97,95,51,56,95,112,111,110,103,0);
       let submitu = String.fromCharCode(97,95,51,48,95,101,114,114,111,114,115,0);
      j_titler.push(2);
      pageQ *= 2;
      videoJ += parseFloat(`${2}`);
       let customz: Map<any, any> = new Map([[String.fromCharCode(101,97,105,100,99,116,95,117,95,54,57,0),123], [String.fromCharCode(111,95,49,57,95,108,111,115,116,0),44], [String.fromCharCode(105,95,51,48,95,99,104,105,109,112,0),301]]);
       let thumbnailF = false;
          let alertz: Map<any, any> = new Map([[String.fromCharCode(115,116,111,114,97,98,108,101,95,113,95,52,54,0),String.fromCharCode(114,95,56,56,95,116,114,97,110,115,108,97,116,105,111,110,115,0)], [String.fromCharCode(114,101,103,100,101,102,95,110,95,51,52,0),String.fromCharCode(115,95,51,54,95,112,108,97,99,101,109,97,114,107,0)]]);
         customz = new Map([[`${alertz.size}`, ((thumbnailF ? 1 : 1) * 2)]]);
      while (thumbnailF) {
         thumbnailF = null != customz.get(`${thumbnailF}`);
         break;
      }
      linkT = `${customz.size}`;
      modeK >>= Math.min(2, phoneJ.length);

            setAdCountdownTime(prev => prev - 1);
          }, 1000)
        }
      },
      isPaused: isPaused,
      setCurrentTime: (time) => setCurrentTime(time),
    }));

    const onGoBack = () => {
       let textd = 0;
    let sinaM = String.fromCharCode(99,104,97,112,95,103,95,53,54,0);
    let bootsplashH = String.fromCharCode(116,105,108,108,95,110,95,55,52,0);
    let fullH: Array<any> = [303, 531];
    let arrow_ = String.fromCharCode(116,101,115,116,105,110,103,95,119,95,49,55,0);
    let productD = String.fromCharCode(103,95,54,56,95,112,111,105,110,116,115,0);
    let castw = String.fromCharCode(97,116,97,99,101,110,116,101,114,95,57,95,53,0);
    let unselectedq: Array<any> = [String.fromCharCode(98,95,52,57,95,115,101,99,111,110,100,115,0), String.fromCharCode(122,95,57,95,100,98,111,111,108,104,117,102,102,0), String.fromCharCode(100,111,110,116,95,52,95,51,49,0)];
    let delegate_ovV = String.fromCharCode(116,95,51,56,95,117,110,105,113,117,101,100,0);
      castw += `${sinaM.length >> (Math.min(Math.abs(2), 2))}`;
       let trophya: Map<any, any> = new Map([[String.fromCharCode(115,95,50,57,95,111,112,101,114,97,116,105,111,110,115,0),true ], [String.fromCharCode(122,95,50,50,95,115,101,108,101,99,116,105,118,101,0),false ]]);
          let expandh: Array<any> = [164, 421, 53];
          let righti = String.fromCharCode(116,95,56,55,95,115,97,102,101,115,116,97,99,107,0);
         trophya.set(righti, righti.length);
         expandh.push(expandh.length);
         trophya = new Map([[`${trophya.size}`, trophya.size]]);
      for (let a = 0; a < 1; a++) {
         trophya.set(`${trophya.size}`, trophya.size);
      }
      bootsplashH += "1";
   if (sinaM == String.fromCharCode(88,0)) {
      productD = `${textd}`;
   }
      textd -= (productD == String.fromCharCode(49,0) ? arrow_.length : productD.length);

      if (onBack !== undefined) {

      productD = "3";
   for (let y = 0; y < 3; y++) {
       let benefitR = 4;
       let actionsE = String.fromCharCode(100,95,55,57,95,114,101,100,117,110,100,97,110,99,121,0);
       let playlistC: Map<any, any> = new Map([[String.fromCharCode(114,103,98,97,95,121,95,54,54,0),String.fromCharCode(102,97,115,116,109,97,116,104,95,53,95,54,56,0)], [String.fromCharCode(107,95,49,53,95,114,110,103,0),String.fromCharCode(116,105,101,114,115,95,114,95,50,50,0)]]);
       let backgrounde = false;
         playlistC.set(actionsE, 3 + actionsE.length);
         benefitR |= (playlistC.size & (backgrounde ? 3 : 1));
      let mail5 = 6110009 <= playlistC.size;
      do {
         playlistC.set(`${benefitR}`, actionsE.length >> (Math.min(4, Math.abs(benefitR))));
         if (mail5) {
            break;
         }
      } while (mail5 && (!Array.from(playlistC.values()).includes(benefitR)));
         actionsE = `${playlistC.size}`;
      if (actionsE.includes(`${playlistC.size}`)) {
          let modelsu = 2.0;
          let prediction0: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,101,114,95,114,95,49,56,0),367], [String.fromCharCode(111,95,51,53,95,114,116,112,115,101,110,100,101,114,0),181], [String.fromCharCode(97,95,55,57,95,114,116,108,0),930]]);
          let launchq = true;
         actionsE += `${prediction0.size}`;
         modelsu *= parseInt(`${modelsu}`) ^ 1;
         prediction0 = new Map([[`${launchq}`, 1 | parseInt(`${modelsu}`)]]);
         launchq = modelsu < 74.82;
      }
         playlistC = new Map([[`${playlistC.size}`, actionsE.length]]);
      for (let d = 0; d < 2; d++) {
          let clockK = 0;
         backgrounde = !actionsE.startsWith(`${backgrounde}`);
         clockK %= Math.max(4, clockK % 1);
      }
      let floatingB = backgrounde ? !backgrounde : backgrounde;
      do {
         backgrounde = benefitR < 80;
         if (floatingB) {
            break;
         }
      } while ((!backgrounde) && floatingB);
      arrow_ = `${productD.length | 3}`;
   }
      arrow_ += `${bootsplashH.length / (Math.max(3, 5))}`;
   if (bootsplashH.length < castw.length) {
      bootsplashH = `${(arrow_ == String.fromCharCode(76,0) ? arrow_.length : castw.length)}`;
   }
        onBack();

      sinaM = "1";
   while ((1 - textd) > 1 || (1 - productD.length) > 1) {
      productD = `${sinaM.length}`;
      break;
   }
       let form3 = String.fromCharCode(114,95,50,57,95,117,110,105,113,117,101,100,0);
          let shootJ: Array<any> = [807, 597];
          let type_x8A = 1.0;
         form3 += `${shootJ.length - form3.length}`;
         shootJ = [parseInt(`${type_x8A}`) & parseInt(`${type_x8A}`)];
          let malaysiaH = 0;
          let favorited = false;
         form3 = "2";
         malaysiaH /= Math.max(3, malaysiaH ^ 3);
         favorited = 81 <= malaysiaH;
      let controlsx = form3 == String.fromCharCode(106,109,121,50,0);
      do {
         form3 = `${form3.length << (Math.min(3, form3.length))}`;
         if (controlsx) {
            break;
         }
      } while ((5 >= form3.length) && controlsx);
      productD = `${arrow_.length >> (Math.min(4, fullH.length))}`;
   while ((arrow_.length | fullH.length) >= 3 && (arrow_.length | fullH.length) >= 3) {
      arrow_ = `${sinaM.length}`;
      break;
   }
        lockOrientation("PORTRAIT");

      arrow_ += "3";
   for (let b = 0; b < 1; b++) {
      unselectedq.push(fullH.length % (Math.max(arrow_.length, 10)));
   }
   while (productD.includes(`${fullH.length}`)) {
       let topic1 = String.fromCharCode(115,95,51,50,95,99,111,114,110,101,114,115,0);
       let memberX = String.fromCharCode(97,115,112,101,99,116,95,111,95,53,51,0);
       let f_center5 = false;
       let mathz: Map<any, any> = new Map([[String.fromCharCode(116,105,99,107,101,114,95,104,95,51,52,0),950], [String.fromCharCode(97,99,101,108,112,95,111,95,49,48,0),531], [String.fromCharCode(116,95,49,95,115,105,110,0),523]]);
       let flyeri = 1.0;
          let trophyH = false;
         topic1 = `${3 ^ topic1.length}`;
         trophyH = !trophyH;
      while (f_center5) {
          let layoutx = String.fromCharCode(115,95,55,48,95,99,101,114,116,0);
          let update_2rc = String.fromCharCode(117,116,117,114,101,95,51,95,57,51,0);
         topic1 = `${update_2rc.length >> (Math.min(Math.abs(3), 5))}`;
         layoutx = `${3 / (Math.max(9, layoutx.length))}`;
         update_2rc = `${layoutx.length}`;
         break;
      }
      while (4 <= memberX.length) {
         memberX = `${(3 ^ (f_center5 ? 2 : 4))}`;
         break;
      }
         topic1 = `${((f_center5 ? 5 : 4) << (Math.min(Math.abs(mathz.size), 1)))}`;
       let philippinesK = 4.0;
      for (let d = 0; d < 2; d++) {
         topic1 += `${mathz.size}`;
      }
         topic1 += `${3 % (Math.max(10, mathz.size))}`;
         f_center5 = topic1.length <= 98;
      let temperatureY = f_center5 ? !f_center5 : f_center5;
      do {
          let unreadx = 2;
         f_center5 = !f_center5;
         unreadx >>= Math.min(5, Math.abs(unreadx));
         if (temperatureY) {
            break;
         }
      } while (temperatureY && ((philippinesK / (Math.max(5.53, 5))) >= 4.15 || 5.53 >= philippinesK));
      let plash_ = 5066912.0 >= philippinesK;
      do {
          let private_m9 = 3.0;
         philippinesK *= parseFloat(`${parseInt(`${flyeri}`)}`);
         private_m9 /= Math.max(1, parseInt(`${private_m9}`) % 1);
         if (plash_) {
            break;
         }
      } while ((4.100 == (philippinesK / (Math.max(3.86, 4))) || 1 == (parseInt(`${philippinesK}`) / (Math.max(6, memberX.length)))) && plash_);
         topic1 = `${1 / (Math.max(7, parseInt(`${flyeri}`)))}`;
      while ((philippinesK - parseFloat(`${mathz.size}`)) > 5.14 && 5.14 > (parseFloat(`${mathz.size}`) - philippinesK)) {
          let connectionh = false;
          let photoQ = String.fromCharCode(97,116,111,109,105,99,97,108,108,121,95,99,95,56,48,0);
         mathz = new Map([[`${mathz.size}`, mathz.size + memberX.length]]);
         connectionh = photoQ.endsWith(`${connectionh}`);
         photoQ = `${((connectionh ? 5 : 3) + photoQ.length)}`;
         break;
      }
          let watchd: Array<any> = [899, 594];
          let tooltips2 = 2.0;
         mathz.set(`${flyeri}`, mathz.size + 2);
         watchd = [parseInt(`${tooltips2}`) >> (Math.min(4, Math.abs(3)))];
         tooltips2 -= parseFloat(`${parseInt(`${tooltips2}`) % (Math.max(2, watchd.length))}`);
          let thailandA = false;
         memberX += `${1 - parseInt(`${philippinesK}`)}`;
         thailandA = !thailandA;
      while ((mathz.size + parseInt(`${flyeri}`)) <= 2 && 3.64 <= (flyeri + 3.44)) {
          let ajaxv: Array<any> = [183, 971];
          let privacyd = String.fromCharCode(97,95,48,95,115,101,97,108,98,111,120,0);
          let emojih = String.fromCharCode(105,116,101,114,97,116,105,111,110,115,95,112,95,51,48,0);
         flyeri += memberX.length;
         ajaxv = [2 - ajaxv.length];
         privacyd = `${privacyd.length >> (Math.min(Math.abs(1), 2))}`;
         emojih = `${privacyd.length}`;
         break;
      }
      fullH.push(((f_center5 ? 2 : 1) / (Math.max(fullH.length, 7))));
      break;
   }
       let dataW = 1.0;
      while (dataW == dataW) {
         dataW /= Math.max(3 - parseInt(`${dataW}`), 3);
         break;
      }
         dataW += parseInt(`${dataW}`);
         dataW /= Math.max(parseInt(`${dataW}`) >> (Math.min(4, Math.abs(1))), 2);
      arrow_ = `${unselectedq.length}`;
        setIsFullScreen(false);
      } else {

      sinaM = `${castw.length}`;
   if (fullH.length <= 5) {
      textd += 3;
   }
      unselectedq.push(fullH.length);
   if (!arrow_.endsWith(`${productD.length}`)) {
      productD += `${textd ^ 2}`;
   }
        

      fullH.push(arrow_.length);
   for (let j = 0; j < 2; j++) {
      sinaM += `${arrow_.length}`;
   }
      fullH = [(bootsplashH == String.fromCharCode(113,0) ? fullH.length : bootsplashH.length)];
       let statisticsr = 0.0;
         statisticsr *= parseInt(`${statisticsr}`);
         statisticsr += parseInt(`${statisticsr}`) | parseInt(`${statisticsr}`);
      while ((statisticsr / (Math.max(5, statisticsr))) > 2.53 || (statisticsr / 2.53) > 3.70) {
         statisticsr += parseInt(`${statisticsr}`) * 3;
         break;
      }
      productD += `${fullH.length << (Math.min(Math.abs(3), 4))}`;
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
       let matchesr = 1.0;
    let connection1 = String.fromCharCode(116,95,53,48,95,115,105,110,101,115,0);
    let goalu = String.fromCharCode(101,110,100,112,111,105,110,116,115,95,56,95,50,55,0);
    let animation0 = String.fromCharCode(122,95,51,52,95,120,103,97,115,0);
    let roomN = 1.0;
    let baiduI = String.fromCharCode(116,111,109,111,114,114,111,119,95,100,95,53,50,0);
    let greenb: Map<any, any> = new Map([[String.fromCharCode(103,95,49,57,95,115,119,114,101,115,97,109,112,108,101,0),true ], [String.fromCharCode(115,95,53,55,95,100,101,99,0),false ], [String.fromCharCode(117,95,55,95,112,111,115,116,114,101,113,117,101,115,116,0),true ]]);
    let carouselv = String.fromCharCode(107,95,56,54,95,115,121,110,99,112,111,105,110,116,0);
    let suggestionQ = String.fromCharCode(110,95,50,54,95,116,114,117,101,109,111,116,105,111,110,114,116,0);
    let window_mgm: Map<any, any> = new Map([[String.fromCharCode(103,95,57,57,95,105,110,102,108,105,103,104,116,0),178], [String.fromCharCode(98,95,50,48,95,106,115,105,109,100,0),341], [String.fromCharCode(104,95,51,53,95,102,111,114,109,97,116,117,0),182]]);
    let fastforward5 = 5;
      roomN *= parseInt(`${roomN}`);
      goalu = `${parseInt(`${roomN}`)}`;
   while (2 <= (1 | goalu.length)) {
       let sentryy: Array<any> = [520, 830, 745];
       let largeO = String.fromCharCode(101,95,53,52,95,117,110,105,99,111,100,101,0);
       let gmailB = 3.0;
       let handlerb: Array<any> = [45, 631];
      let largeP = 7331376.0 <= gmailB;
      do {
         gmailB *= parseFloat(`${3}`);
         if (largeP) {
            break;
         }
      } while (((3 + largeO.length) < 5 && (largeO.length / (Math.max(7, parseInt(`${gmailB}`)))) < 3) && largeP);
      let appleY = 5660825.0 >= gmailB;
      do {
          let eactF = String.fromCharCode(115,104,111,114,116,99,117,116,115,95,114,95,52,51,0);
          let nativeE = 2.0;
          let analyticx: Map<any, any> = new Map([[String.fromCharCode(108,95,52,53,95,105,110,102,105,110,105,116,101,0),977], [String.fromCharCode(106,95,57,52,95,115,117,98,109,111,100,101,108,0),528], [String.fromCharCode(111,95,57,56,95,101,120,116,110,0),1]]);
          let becomeC = 2.0;
          let trashU = 5;
         gmailB += parseFloat(`${1}`);
         eactF = `${parseInt(`${becomeC}`) / (Math.max(analyticx.size, 9))}`;
         nativeE += 2 ^ analyticx.size;
         becomeC *= parseFloat(`${trashU / 1}`);
         trashU /= Math.max(1, eactF.length >> (Math.min(Math.abs(2), 2)));
         if (appleY) {
            break;
         }
      } while ((3 <= (3 + largeO.length)) && appleY);
       let splashH = 3;
      if (4 <= (sentryy.length % 4)) {
         sentryy.push(3 * sentryy.length);
      }
         handlerb.push(handlerb.length + 3);
      while (3.6 < gmailB) {
          let hejiS: Map<any, any> = new Map([[String.fromCharCode(114,101,115,95,118,95,52,0),String.fromCharCode(100,95,50,48,95,106,117,108,105,97,110,0)], [String.fromCharCode(119,95,50,55,95,103,108,111,98,97,108,116,101,109,0),String.fromCharCode(102,111,114,101,105,103,110,95,51,95,55,53,0)]]);
          let resendu = 0;
          let minimizeL = String.fromCharCode(115,95,52,53,95,100,112,99,109,0);
          let guideX = String.fromCharCode(115,112,111,116,95,115,95,57,54,0);
         sentryy.push(parseInt(`${gmailB}`));
         hejiS = new Map([[`${hejiS.size}`, hejiS.size]]);
         resendu *= (minimizeL == String.fromCharCode(118,0) ? resendu : minimizeL.length);
         guideX = `${guideX.length * resendu}`;
         break;
      }
      if ((handlerb.length >> (Math.min(Math.abs(5), 2))) < 1 || (gmailB - parseFloat(`${handlerb.length}`)) < 3.46) {
         gmailB /= Math.max(parseFloat(`${parseInt(`${gmailB}`) << (Math.min(5, Math.abs(3)))}`), 2);
      }
         sentryy.push(largeO.length & handlerb.length);
      let indicatorE = 8021437.0 <= gmailB;
      do {
          let changeE = String.fromCharCode(113,95,54,50,95,105,110,118,102,0);
         gmailB *= parseFloat(`${splashH ^ changeE.length}`);
         if (indicatorE) {
            break;
         }
      } while (indicatorE && (handlerb.length <= 2));
         gmailB -= parseFloat(`${sentryy.length}`);
          let tailP = false;
         splashH >>= Math.min(1, Math.abs(2));
         tailP = (tailP ? !tailP : !tailP);
       let shootA: Array<any> = [String.fromCharCode(112,116,115,101,115,95,99,95,49,57,0), String.fromCharCode(114,95,51,56,95,115,101,109,105,0)];
       let fastforwards: Array<any> = [String.fromCharCode(100,95,50,56,95,100,99,116,99,111,101,102,0), String.fromCharCode(109,95,51,50,95,109,111,100,101,109,118,99,111,115,116,0), String.fromCharCode(112,114,111,99,101,100,117,114,101,115,95,119,95,49,48,48,0)];
      matchesr /= Math.max(2, parseFloat(`${2 >> (Math.min(1, connection1.length))}`));
      break;
   }
   while (goalu.length <= 2) {
       let watchf = 4;
       let adultT = String.fromCharCode(109,101,100,105,97,99,111,100,101,99,100,101,99,95,101,95,49,53,0);
       let resendO = String.fromCharCode(100,111,97,108,108,95,97,95,54,57,0);
       let confirmationI = false;
       let resultc = String.fromCharCode(116,95,50,53,95,111,114,105,101,110,116,97,116,105,111,110,0);
      if (1 <= (3 ^ resendO.length) || 2 <= (watchf ^ 3)) {
          let expiredu = 1;
          let philippinest = 5.0;
          let hongkongy = String.fromCharCode(110,95,49,50,95,118,105,115,98,108,101,0);
          let navigationZ: Map<any, any> = new Map([[String.fromCharCode(101,95,57,49,95,103,101,116,99,114,101,100,0),147], [String.fromCharCode(111,102,102,115,99,114,101,101,110,95,122,95,53,52,0),570]]);
         watchf |= 2;
         expiredu |= 2;
         philippinest += navigationZ.size;
         hongkongy += `${2 / (Math.max(expiredu, 7))}`;
         navigationZ.set(`${expiredu}`, (hongkongy == String.fromCharCode(117,0) ? hongkongy.length : expiredu));
      }
          let detailT: Map<any, any> = new Map([[String.fromCharCode(98,95,52,48,95,114,116,102,0),789], [String.fromCharCode(112,108,97,99,101,104,111,108,100,101,114,95,51,95,50,57,0),703], [String.fromCharCode(97,109,114,119,98,100,97,116,97,95,112,95,57,56,0),581]]);
         watchf &= watchf / (Math.max(3, 3));
         detailT = new Map([[`${detailT.size}`, 2 * detailT.size]]);
      let typesV = confirmationI ? !confirmationI : confirmationI;
      do {
         confirmationI = !confirmationI;
         if (typesV) {
            break;
         }
      } while (typesV && (4 == resultc.length));
         watchf /= Math.max(3, watchf);
      for (let f = 0; f < 3; f++) {
         resendO += `${resendO.length % (Math.max(adultT.length, 1))}`;
      }
      while (resendO.length >= adultT.length) {
         adultT += `${(adultT == String.fromCharCode(120,0) ? adultT.length : watchf)}`;
         break;
      }
          let tickede: Map<any, any> = new Map([[String.fromCharCode(100,111,117,98,108,101,95,112,95,57,57,0),248], [String.fromCharCode(101,110,99,114,121,112,116,101,100,95,53,95,56,56,0),47]]);
         resendO += "1";
         tickede.set(`${tickede.size}`, tickede.size * tickede.size);
      for (let n = 0; n < 2; n++) {
         confirmationI = adultT.includes(`${watchf}`);
      }
         confirmationI = resendO.length < resultc.length;
         resultc = `${adultT.length * resendO.length}`;
         resultc = "2";
      if (2 == resultc.length) {
         resultc = "1";
      }
      while (5 == resultc.length) {
         resultc = `${(String.fromCharCode(116,0) == resendO ? watchf : resendO.length)}`;
         break;
      }
          let animationf = 1.0;
          let completeR: Map<any, any> = new Map([[String.fromCharCode(100,101,99,105,109,97,108,115,95,113,95,55,57,0),String.fromCharCode(116,114,97,100,101,95,57,95,57,50,0)], [String.fromCharCode(98,95,49,54,95,97,97,114,99,104,0),String.fromCharCode(115,112,111,105,108,101,114,115,95,107,95,57,55,0)]]);
         confirmationI = resultc.length < 40 && !confirmationI;
         animationf += completeR.size & parseInt(`${animationf}`);
         completeR = new Map([[`${completeR.size}`, 1]]);
      if (!adultT.includes(`${resendO.length}`)) {
          let nterstitialo = 0.0;
          let cataloga: Array<any> = [629, 55, 371];
          let backb = false;
          let playlistC = String.fromCharCode(108,105,98,111,112,101,110,106,112,101,103,95,108,95,55,50,0);
         adultT += "1";
         nterstitialo -= parseFloat(`${cataloga.length + parseInt(`${nterstitialo}`)}`);
         cataloga = [parseInt(`${nterstitialo}`) / (Math.max(2, 6))];
         backb = 92 == cataloga.length && playlistC.length == 92;
         playlistC += "2";
      }
      roomN += 1;
      break;
   }
   for (let p = 0; p < 2; p++) {
       let tempb = String.fromCharCode(118,95,56,55,95,97,117,116,104,0);
       let bootsplashJ = String.fromCharCode(103,101,110,97,110,110,95,97,95,49,53,0);
       let champion_ = true;
         bootsplashJ += "1";
      while (tempb != String.fromCharCode(85,0)) {
         bootsplashJ += `${(bootsplashJ == String.fromCharCode(103,0) ? bootsplashJ.length : (champion_ ? 2 : 1))}`;
         break;
      }
         bootsplashJ = `${(1 << (Math.min(1, Math.abs((champion_ ? 5 : 4)))))}`;
      let const_uJ = bootsplashJ.length >= 5233518;
      do {
          let calendar6 = String.fromCharCode(114,101,108,97,121,111,117,116,95,111,95,51,52,0);
         bootsplashJ = `${2 % (Math.max(10, calendar6.length))}`;
         if (const_uJ) {
            break;
         }
      } while (const_uJ && (bootsplashJ.length >= 1));
       let single2 = String.fromCharCode(100,95,52,48,95,99,105,114,99,117,108,97,116,105,110,103,0);
       let v_imagen = String.fromCharCode(112,95,53,55,95,114,101,111,114,100,101,114,97,98,108,101,0);
          let linkW = String.fromCharCode(100,101,112,95,114,95,57,0);
         champion_ = 30 > tempb.length || String.fromCharCode(121,0) == single2;
         linkW = `${linkW.length << (Math.min(linkW.length, 3))}`;
      if (single2.endsWith(`${tempb.length}`)) {
         single2 = `${single2.length >> (Math.min(Math.abs(2), 3))}`;
      }
          let agreementz = false;
          let placeholderE = String.fromCharCode(117,110,115,97,116,105,115,102,105,101,100,95,52,95,50,48,0);
          let photou = String.fromCharCode(104,113,112,101,108,95,115,95,57,54,0);
         single2 += `${(String.fromCharCode(120,0) == bootsplashJ ? bootsplashJ.length : tempb.length)}`;
         agreementz = photou.length > 54;
         placeholderE += `${placeholderE.length}`;
         photou += `${photou.length}`;
         bootsplashJ += `${v_imagen.length * 3}`;
      greenb.set(goalu, goalu.length + carouselv.length);
   }
   while (carouselv == goalu) {
       let inactiveU: Array<any> = [90, 112, 166];
       let productf = String.fromCharCode(99,111,109,112,108,101,116,101,100,95,117,95,52,54,0);
       let indexu = 0;
          let bootsplashd = String.fromCharCode(111,110,99,101,95,116,95,53,55,0);
          let tooltipsO = 5;
         productf += `${bootsplashd.length}`;
         bootsplashd += `${tooltipsO - 2}`;
         tooltipsO += 2 / (Math.max(10, tooltipsO));
         indexu |= inactiveU.length + indexu;
      while (1 < (productf.length << (Math.min(Math.abs(1), 2))) || 1 < (indexu << (Math.min(productf.length, 3)))) {
         indexu -= 1;
         break;
      }
       let rank8 = String.fromCharCode(100,95,55,57,95,99,111,109,97,110,100,0);
      for (let n = 0; n < 1; n++) {
         indexu /= Math.max(1, rank8.length | 2);
      }
      if (productf.endsWith(`${indexu}`)) {
          let xvodC = 3.0;
          let popupV = 0;
          let unreadd: Array<any> = [429, 33, 463];
          let feedback_: Array<any> = [751, 76];
          let trashw = 1.0;
         indexu ^= 3;
         xvodC += parseFloat(`${parseInt(`${xvodC}`)}`);
         popupV /= Math.max(parseInt(`${xvodC}`), 3);
         unreadd.push(1 % (Math.max(popupV, 3)));
         feedback_.push(1);
         trashw -= parseFloat(`${parseInt(`${trashw}`)}`);
      }
         inactiveU = [indexu];
      for (let f = 0; f < 3; f++) {
          let stationsM = String.fromCharCode(97,95,53,57,95,97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,0);
          let referrer4 = 4;
          let loading9 = String.fromCharCode(104,97,115,104,101,114,95,116,95,49,49,0);
          let banner5: Array<any> = [703, 248];
         productf = `${1 + loading9.length}`;
         stationsM += `${1 << (Math.min(5, banner5.length))}`;
         referrer4 &= 1 % (Math.max(1, banner5.length));
         loading9 += `${referrer4 % 1}`;
      }
      while (indexu >= productf.length) {
          let questU = true;
          let zhuboR = 2;
          let hooksp = String.fromCharCode(116,95,52,95,118,102,114,101,101,0);
          let desci = 0.0;
          let invite9 = 0;
         indexu &= invite9;
         questU = String.fromCharCode(75,0) == hooksp;
         zhuboR /= Math.max(5, (String.fromCharCode(71,0) == hooksp ? zhuboR : hooksp.length));
         desci -= (parseInt(`${desci}`) / (Math.max(8, (questU ? 5 : 2))));
         break;
      }
      goalu += `${parseInt(`${roomN}`)}`;
      break;
   }
   if (!suggestionQ.startsWith(baiduI)) {
       let stringh = false;
       let sellr: Map<any, any> = new Map([[String.fromCharCode(100,97,114,107,101,110,105,110,103,95,98,95,54,52,0),String.fromCharCode(111,95,52,56,95,108,117,116,100,0)], [String.fromCharCode(110,95,51,49,95,110,97,116,105,118,101,108,121,0),String.fromCharCode(113,95,53,95,114,101,119,114,105,116,101,0)], [String.fromCharCode(105,95,54,95,97,108,97,99,0),String.fromCharCode(107,95,53,56,95,116,116,97,100,115,112,0)]]);
       let connectionJ = 1;
      for (let j = 0; j < 3; j++) {
          let area9: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,97,108,99,117,108,97,116,101,95,117,95,54,52,0),false ], [String.fromCharCode(101,95,55,50,95,97,97,102,99,0),false ], [String.fromCharCode(112,97,114,97,109,101,116,101,114,95,111,95,57,48,0),true ]]);
          let downloader9: Map<any, any> = new Map([[String.fromCharCode(120,95,53,49,95,112,101,110,100,105,110,103,115,0),true ], [String.fromCharCode(101,120,112,105,114,97,116,105,111,110,95,100,95,52,0),true ], [String.fromCharCode(117,95,56,50,95,116,111,112,105,99,97,108,0),true ]]);
          let readZ = 4.0;
         sellr = new Map([[`${downloader9.size}`, downloader9.size]]);
         area9 = new Map([[`${area9.size}`, 2]]);
         readZ /= Math.max(parseFloat(`${area9.size ^ 1}`), 5);
      }
      for (let c = 0; c < 3; c++) {
          let sinao = 5.0;
          let crowna: Map<any, any> = new Map([[String.fromCharCode(115,117,105,116,101,98,95,118,95,49,53,0),true ], [String.fromCharCode(99,95,57,50,95,99,108,101,97,110,117,112,0),false ]]);
          let matchesC = String.fromCharCode(102,108,111,97,116,95,117,95,57,50,0);
          let nextC = 1.0;
          let rewindL = String.fromCharCode(105,95,50,52,95,114,101,97,115,115,101,109,98,108,101,114,0);
         stringh = sellr.size >= 38 || !stringh;
         sinao *= parseInt(`${sinao}`);
         crowna.set(`${nextC}`, parseInt(`${sinao}`) / (Math.max(parseInt(`${nextC}`), 5)));
         matchesC += "2";
         rewindL += `${3 / (Math.max(8, parseInt(`${sinao}`)))}`;
      }
         connectionJ >>= Math.min(2, Math.abs(2));
       let circleI = String.fromCharCode(100,111,109,97,105,110,115,95,109,95,53,53,0);
      while (3 < (3 >> (Math.min(1, Math.abs(connectionJ)))) && !stringh) {
         stringh = null != sellr.get(`${connectionJ}`);
         break;
      }
          let phonej = String.fromCharCode(110,95,56,49,95,99,111,110,115,117,109,101,114,0);
          let filtero = 2.0;
         stringh = sellr.size == 83 && stringh;
         phonej = `${phonej.length + 1}`;
         filtero -= 3 >> (Math.min(2, Math.abs(parseInt(`${filtero}`))));
         connectionJ |= 2;
      let interstitialn = sellr.size <= 6274039;
      do {
         sellr = new Map([[`${sellr.size}`, 2]]);
         if (interstitialn) {
            break;
         }
      } while ((!stringh) && interstitialn);
      if (sellr.size >= 3) {
          let regengt: Array<any> = [156, 868];
          let clubf = String.fromCharCode(113,117,97,110,116,105,116,121,95,112,95,50,49,0);
          let topicY = false;
          let areat: Map<any, any> = new Map([[String.fromCharCode(115,104,97,114,100,95,97,95,57,49,0),807], [String.fromCharCode(109,95,52,49,95,99,111,109,112,111,115,101,100,0),607], [String.fromCharCode(117,95,49,48,95,105,110,118,105,116,101,114,115,0),452]]);
         stringh = sellr.size > regengt.length;
         regengt.push(clubf.length);
         clubf += `${((topicY ? 2 : 3))}`;
         areat = new Map([[`${areat.size}`, areat.size]]);
      }
      suggestionQ += `${(parseInt(`${roomN}`) & (stringh ? 5 : 2))}`;
   }
   while (4.14 <= (matchesr / (Math.max(parseFloat(`${greenb.size}`), 5)))) {
      greenb.set(`${matchesr}`, parseInt(`${matchesr}`) | greenb.size);
      break;
   }
   for (let q = 0; q < 2; q++) {
      animation0 += "1";
   }
      greenb = new Map([[`${greenb.size}`, 2]]);
       let acopy_1R = 3.0;
       let renewK = String.fromCharCode(99,111,100,101,115,116,114,101,97,109,95,97,95,57,56,0);
       let arrowO: Array<any> = [852, 740];
      let ajaxR = 8395994 <= renewK.length;
      do {
         renewK += "1";
         if (ajaxR) {
            break;
         }
      } while (ajaxR && (renewK.endsWith(`${acopy_1R}`)));
      if ((arrowO.length * 2) < 2) {
          let related9 = String.fromCharCode(97,95,52,51,95,101,102,102,101,99,105,116,118,101,108,121,0);
          let macauS: Map<any, any> = new Map([[String.fromCharCode(104,95,52,51,95,109,105,108,108,101,114,0),633], [String.fromCharCode(102,95,54,52,95,114,97,100,98,0),685], [String.fromCharCode(102,105,110,100,97,115,111,99,95,50,95,54,54,0),4]]);
          let ajaxt = 0.0;
          let fieldq = String.fromCharCode(111,95,49,51,95,115,109,105,108,105,110,103,0);
         arrowO.push(2 * related9.length);
         related9 += `${parseInt(`${ajaxt}`) + 3}`;
         macauS.set(fieldq, macauS.size);
         ajaxt *= parseFloat(`${fieldq.length}`);
      }
      if (renewK.includes(`${acopy_1R}`)) {
         acopy_1R *= parseFloat(`${arrowO.length ^ renewK.length}`);
      }
          let usernameB: Map<any, any> = new Map([[String.fromCharCode(122,101,114,111,95,122,95,50,0),791], [String.fromCharCode(100,114,111,112,95,110,95,55,53,0),592]]);
          let networkT = 4;
         arrowO = [renewK.length];
         usernameB.set(`${networkT}`, 2);
         networkT |= 2 >> (Math.min(2, Math.abs(networkT)));
         renewK += `${(String.fromCharCode(65,0) == renewK ? renewK.length : arrowO.length)}`;
      for (let n = 0; n < 1; n++) {
         renewK = `${renewK.length}`;
      }
      let modald = 6752595 >= arrowO.length;
      do {
         arrowO.push(3);
         if (modald) {
            break;
         }
      } while (modald && (acopy_1R < 5.69));
      for (let o = 0; o < 2; o++) {
         renewK = "3";
      }
      if (renewK.endsWith(`${acopy_1R}`)) {
         acopy_1R += parseFloat(`${parseInt(`${acopy_1R}`) << (Math.min(renewK.length, 4))}`);
      }
      goalu = `${animation0.length & 2}`;
   if (goalu != String.fromCharCode(84,0)) {
      animation0 += `${parseInt(`${matchesr}`) & 1}`;
   }
      greenb.set(suggestionQ, suggestionQ.length);
       let connection0 = 5.0;
       let firebaseq = 1;
       let const_xC: Map<any, any> = new Map([[String.fromCharCode(103,95,52,48,95,118,110,101,103,113,0),324], [String.fromCharCode(100,95,57,53,95,116,97,103,0),402]]);
       let dataP = 3.0;
       let twitterE = 0.0;
         connection0 += const_xC.size + 2;
         twitterE *= parseFloat(`${firebaseq << (Math.min(Math.abs(parseInt(`${dataP}`)), 5))}`);
         connection0 *= 1 | parseInt(`${twitterE}`);
         const_xC = new Map([[`${twitterE}`, parseInt(`${twitterE}`)]]);
         connection0 += firebaseq % 2;
          let circleg = String.fromCharCode(112,95,52,50,0);
          let successU = String.fromCharCode(116,105,109,101,105,110,102,111,95,104,95,50,48,0);
          let whistle4 = 5.0;
         connection0 += 3;
         circleg = `${(String.fromCharCode(72,0) == circleg ? circleg.length : parseInt(`${whistle4}`))}`;
         successU += "1";
         whistle4 *= successU.length;
         connection0 *= 1;
       let referrerl = false;
      connection1 += `${suggestionQ.length | 2}`;

        console.log("err save vod!");

   if (animation0.startsWith(`${greenb.size}`)) {
      greenb.set(`${roomN}`, parseInt(`${roomN}`));
   }
   for (let o = 0; o < 1; o++) {
      greenb = new Map([[animation0, parseInt(`${roomN}`) / (Math.max(2, 7))]]);
   }
   while (5 >= (connection1.length - parseInt(`${matchesr}`)) && (matchesr - parseFloat(`${connection1.length}`)) >= 3.63) {
      connection1 = `${parseInt(`${roomN}`) % (Math.max(3, baiduI.length))}`;
      break;
   }
   let controlst = animation0 == String.fromCharCode(102,111,112,55,54,103,101,95,102,0);
   do {
       let firebaser = false;
       let rightf = 2.0;
         firebaser = !firebaser;
      let s_positionT = firebaser ? !firebaser : firebaser;
      do {
          let langkeyz: Array<any> = [78, 694, 81];
          let minivodJ = false;
          let arrowT = true;
         firebaser = 96.52 > rightf;
         langkeyz = [langkeyz.length];
         minivodJ = !minivodJ && langkeyz.length == 22;
         arrowT = !arrowT || minivodJ;
         if (s_positionT) {
            break;
         }
      } while ((rightf <= 1.44) && s_positionT);
      if (!firebaser) {
          let whatsappU: Array<any> = [388, 77, 446];
          let shootp = String.fromCharCode(104,102,121,117,95,105,95,56,54,0);
         rightf -= 1 | parseInt(`${rightf}`);
         whatsappU.push(whatsappU.length & 3);
         shootp += `${1 & shootp.length}`;
      }
         rightf -= ((firebaser ? 5 : 3) % (Math.max(parseInt(`${rightf}`), 1)));
      let agreement8 = firebaser ? !firebaser : firebaser;
      do {
          let searchbarw = 0.0;
          let invite0 = 2.0;
          let componentf = 3;
         firebaser = invite0 == 43.5;
         searchbarw /= Math.max(2, parseFloat(`${componentf}`));
         invite0 += parseFloat(`${componentf * 1}`);
         if (agreement8) {
            break;
         }
      } while ((rightf <= 3.92 && (rightf / 3.92) <= 5.21) && agreement8);
      let halft = firebaser ? !firebaser : firebaser;
      do {
          let promotionv = 2.0;
          let room7 = String.fromCharCode(112,107,116,99,112,121,95,116,95,53,53,0);
          let linky: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,114,100,110,105,110,103,95,97,95,51,57,0),String.fromCharCode(103,97,117,103,101,95,119,95,52,48,0)], [String.fromCharCode(104,95,49,48,95,118,101,110,100,111,114,0),String.fromCharCode(115,95,52,49,95,99,97,99,104,101,100,0)]]);
          let plusP = 5;
         firebaser = linky.size <= parseInt(`${rightf}`);
         promotionv *= plusP | 1;
         room7 += `${plusP + room7.length}`;
         linky.set(`${promotionv}`, 2);
         if (halft) {
            break;
         }
      } while ((firebaser) && halft);
      animation0 += `${goalu.length | parseInt(`${rightf}`)}`;
      if (controlst) {
         break;
      }
   } while (controlst && (goalu != animation0));
   let eventH = 7337692 >= connection1.length;
   do {
      connection1 += `${parseInt(`${roomN}`)}`;
      if (eventH) {
         break;
      }
   } while (eventH && ((2 + greenb.size) <= 5));
   for (let c = 0; c < 2; c++) {
      matchesr += parseFloat(`${2 * suggestionQ.length}`);
   }
       let launchB = String.fromCharCode(119,95,54,49,95,109,97,107,101,99,121,103,119,105,110,112,107,103,0);
       let w_unlockL = 2.0;
       let suggestionz = true;
         suggestionz = 38.55 >= w_unlockL;
      while (!suggestionz && 1 <= launchB.length) {
          let analyticsn: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,111,115,101,95,50,95,54,57,0),727], [String.fromCharCode(117,110,115,101,114,105,97,108,105,122,101,95,122,95,55,54,0),952]]);
          let activeL = String.fromCharCode(116,95,50,49,95,112,104,111,116,111,115,0);
          let analyticsP = String.fromCharCode(103,95,51,48,95,99,111,110,100,105,116,105,111,110,97,108,0);
          let agreement6 = String.fromCharCode(118,109,97,112,115,105,110,95,107,95,57,52,0);
         suggestionz = 26 > analyticsn.size;
         analyticsn = new Map([[agreement6, (String.fromCharCode(57,0) == analyticsP ? agreement6.length : analyticsP.length)]]);
         activeL += `${analyticsP.length}`;
         break;
      }
         suggestionz = 74.25 <= w_unlockL;
      if (5 == (parseInt(`${w_unlockL}`) * 2) || (parseInt(`${w_unlockL}`) * launchB.length) == 2) {
         launchB += `${launchB.length}`;
      }
         w_unlockL *= parseInt(`${w_unlockL}`);
      for (let p = 0; p < 2; p++) {
          let expiredd = 3.0;
          let handlerZ = 3.0;
         w_unlockL += launchB.length - 1;
         expiredd *= parseInt(`${handlerZ}`) - parseInt(`${expiredd}`);
         handlerZ += parseFloat(`${3}`);
      }
      while (suggestionz) {
          let hook1 = 1;
          let hejio = 3.0;
          let tick_: Map<any, any> = new Map([[String.fromCharCode(111,110,116,114,111,108,95,121,95,50,0),String.fromCharCode(118,95,49,56,95,109,101,109,100,101,98,117,103,0)], [String.fromCharCode(110,95,52,51,95,100,105,114,115,0),String.fromCharCode(100,95,51,95,109,105,110,0)], [String.fromCharCode(108,105,115,116,101,110,101,114,95,100,95,53,57,0),String.fromCharCode(108,111,103,111,115,95,52,95,53,53,0)]]);
         w_unlockL *= (parseInt(`${hejio}`) / (Math.max(1, (suggestionz ? 1 : 4))));
         hook1 /= Math.max(hook1 / (Math.max(1, 4)), 2);
         hejio *= parseFloat(`${hook1 ^ tick_.size}`);
         tick_ = new Map([[`${tick_.size}`, 1]]);
         break;
      }
      while (1.57 == (launchB.length / (Math.max(2, w_unlockL)))) {
          let hookz = 4;
          let indexup = String.fromCharCode(115,116,97,114,116,95,112,95,57,57,0);
          let flyerm = true;
          let mutedJ = false;
          let otherm = String.fromCharCode(100,99,97,97,100,112,99,109,95,114,95,57,48,0);
         w_unlockL /= Math.max(1, parseInt(`${w_unlockL}`) - 2);
         hookz &= ((mutedJ ? 3 : 4) | 3);
         indexup = "2";
         flyerm = indexup.length == 26;
         otherm = `${otherm.length | hookz}`;
         break;
      }
      if (1.20 <= (4.91 * w_unlockL)) {
          let projectT = String.fromCharCode(106,95,51,95,108,117,109,98,101,114,106,97,99,107,0);
          let scoreq = String.fromCharCode(107,95,51,51,0);
          let p_titleg = String.fromCharCode(101,120,116,101,116,110,100,101,100,95,99,95,53,52,0);
         launchB = "3";
         projectT += "2";
         scoreq += `${projectT.length >> (Math.min(Math.abs(1), 5))}`;
         p_titleg = `${scoreq.length}`;
      }
      roomN *= baiduI.length;
       let live8: Map<any, any> = new Map([[String.fromCharCode(100,95,50,48,95,110,97,110,111,98,101,110,99,104,109,97,114,107,0),873], [String.fromCharCode(102,98,100,101,118,95,99,95,55,57,0),888], [String.fromCharCode(98,105,116,95,114,95,50,0),799]]);
       let selectb = 3;
       let nativeU: Array<any> = [774, 958, 551];
         nativeU = [selectb];
      let castingq = live8.size <= 8449595;
      do {
         live8 = new Map([[`${live8.size}`, live8.size]]);
         if (castingq) {
            break;
         }
      } while ((!Array.from(live8.keys()).includes(`${nativeU.length}`)) && castingq);
      while (Array.from(live8.keys()).includes(`${selectb}`)) {
         selectb -= 1;
         break;
      }
       let episodeI = String.fromCharCode(102,95,49,54,95,97,110,97,108,121,116,105,99,115,0);
       let middlewareA = String.fromCharCode(99,95,55,49,95,103,114,97,100,105,101,110,116,0);
      while (nativeU.length < 4) {
          let dropdownx = String.fromCharCode(99,111,110,118,101,114,116,105,98,108,101,95,119,95,57,49,0);
          let hook0 = String.fromCharCode(114,101,104,97,115,104,95,115,95,53,0);
          let memberg = 0;
          let statisticsF: Map<any, any> = new Map([[String.fromCharCode(114,105,103,104,116,95,51,95,52,50,0),false ], [String.fromCharCode(100,95,51,52,95,116,101,108,101,116,101,120,116,0),true ]]);
         selectb <<= Math.min(Math.abs(hook0.length | 1), 2);
         dropdownx = `${dropdownx.length % 2}`;
         hook0 = `${(String.fromCharCode(118,0) == dropdownx ? dropdownx.length : memberg)}`;
         memberg -= statisticsF.size;
         statisticsF.set(`${memberg}`, dropdownx.length);
         break;
      }
         episodeI += "3";
      while (2 <= (selectb | 1) && 1 <= (selectb | live8.size)) {
         selectb += selectb;
         break;
      }
         episodeI = `${live8.size}`;
         middlewareA = `${2 | live8.size}`;
      roomN *= baiduI.length + 1;
   while (baiduI == suggestionQ) {
      suggestionQ += `${suggestionQ.length + 1}`;
      break;
   }
   while ((window_mgm.size & 3) <= 1) {
      window_mgm = new Map([[`${greenb.size}`, greenb.size ^ baiduI.length]]);
      break;
   }
      fastforward5 /= Math.max(1, suggestionQ.length);
   if (fastforward5 == matchesr) {
      matchesr -= parseFloat(`${3 / (Math.max(4, window_mgm.size))}`);
   }
       let calendar7 = false;
       let headerj = true;
       let formj = 0;
         calendar7 = !headerj && 6 == formj;
      let miniz = formj >= 8321474;
      do {
         formj *= ((headerj ? 2 : 1) | (calendar7 ? 4 : 2));
         if (miniz) {
            break;
         }
      } while ((1 >= formj) && miniz);
          let l_countX = String.fromCharCode(100,99,98,122,108,95,55,95,53,49,0);
          let animationU: Array<any> = [569, 964, 936];
          let downJ = String.fromCharCode(101,120,112,114,95,121,95,56,55,0);
         calendar7 = downJ.length <= 93;
         l_countX = `${animationU.length}`;
         animationU = [l_countX.length % 3];
         downJ += `${3 * l_countX.length}`;
         calendar7 = !headerj;
         calendar7 = !calendar7;
      while (headerj) {
          let infok = true;
         headerj = 62 == formj;
         infok = infok && infok;
         break;
      }
         headerj = (!headerj ? !calendar7 : headerj);
      while (headerj && !calendar7) {
         headerj = !calendar7;
         break;
      }
         calendar7 = !headerj || formj < 58;
      greenb = new Map([[animation0, goalu.length]]);
   if (connection1 != String.fromCharCode(90,0)) {
      carouselv = `${3 * baiduI.length}`;
   }
        console.log(err);
      }
    };

    const deviceOrientationHandle = () => {
       let delegate_e1 = 1;
    let spinneri = 3;
    let modulen = String.fromCharCode(104,95,50,53,95,115,104,97,100,111,119,115,0);
    let hooks6 = 0.0;
    let matchesu = 0.0;
    let pauseM = true;
    let aboutl = true;
    let u_titlem = 5.0;
    let lessh = 1;
    let resultc = 2;
    let viewsb: Map<any, any> = new Map([[String.fromCharCode(104,111,110,101,121,95,103,95,55,51,0),788], [String.fromCharCode(115,105,122,101,109,109,95,48,95,54,57,0),351]]);
    let actionsk = String.fromCharCode(105,95,54,51,95,114,117,108,101,98,111,111,107,0);
    let trashl = 5;
    let plash7 = false;
      delegate_e1 -= parseInt(`${u_titlem}`) + 2;
      u_titlem *= delegate_e1;
   let constants8 = pauseM ? !pauseM : pauseM;
   do {
       let chatn: Map<any, any> = new Map([[String.fromCharCode(99,95,55,56,95,116,104,114,101,115,104,111,108,100,115,0),true ], [String.fromCharCode(113,95,51,51,95,101,97,114,108,105,101,115,116,0),false ], [String.fromCharCode(99,101,108,108,95,114,95,52,51,0),true ]]);
       let component6 = 4.0;
       let sportsR = String.fromCharCode(99,118,99,95,101,95,56,55,0);
       let thailande = String.fromCharCode(98,101,110,99,104,115,95,57,95,57,48,0);
       let taiwan_ = true;
          let firebase7 = 5;
         thailande += `${((taiwan_ ? 3 : 4) / (Math.max(chatn.size, 7)))}`;
         firebase7 -= 2 + firebase7;
      for (let o = 0; o < 2; o++) {
          let pingl: Array<any> = [199, 294];
          let description_rT = 1;
         thailande = "2";
         pingl.push(1);
         description_rT /= Math.max(pingl.length ^ description_rT, 2);
      }
      if (2 < sportsR.length) {
          let controlG = String.fromCharCode(110,95,56,51,95,115,116,114,105,112,0);
          let recommendationh = String.fromCharCode(109,95,51,56,95,101,110,117,109,0);
          let orangeK: Array<any> = [889, 703];
          let cornerz: Array<any> = [832, 147];
         sportsR = `${parseInt(`${component6}`) / 3}`;
         controlG = `${1 + orangeK.length}`;
         recommendationh += `${orangeK.length}`;
         cornerz.push(2);
      }
       let eventg: Array<any> = [736, 647];
          let expandc = String.fromCharCode(113,95,53,95,115,112,101,97,107,0);
          let windw: Array<any> = [683, 103];
          let stry = String.fromCharCode(115,95,52,56,95,107,97,110,110,97,0);
         eventg = [chatn.size >> (Math.min(Math.abs(3), 1))];
         expandc += `${stry.length % 3}`;
         windw.push(windw.length * 2);
         stry += `${stry.length}`;
         component6 /= Math.max(1, thailande.length);
         component6 /= Math.max(2, thailande.length | eventg.length);
       let robotoU = String.fromCharCode(111,110,101,105,110,99,104,95,111,95,56,49,0);
       let accepted_ = String.fromCharCode(105,110,116,114,105,110,95,117,95,53,51,0);
          let becomeO: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,49,95,57,54,0),805], [String.fromCharCode(112,105,110,95,117,95,51,48,0),558]]);
          let fullC = String.fromCharCode(115,108,117,114,112,95,101,95,56,48,0);
         robotoU = `${thailande.length}`;
         becomeO.set(`${fullC}`, fullC.length);
         component6 /= Math.max(chatn.size >> (Math.min(Math.abs(2), 1)), 4);
      while (2.44 <= (component6 * 2.67) || 2.100 <= (component6 * 2.67)) {
          let plashd: Map<any, any> = new Map([[String.fromCharCode(116,95,52,50,95,99,117,98,101,100,0),951], [String.fromCharCode(105,100,102,97,95,112,95,53,0),714]]);
          let servicea = 4.0;
          let targeti = String.fromCharCode(100,95,52,95,112,114,101,97,109,98,117,108,97,0);
          let teamS: Map<any, any> = new Map([[String.fromCharCode(114,95,50,48,95,101,114,114,111,114,115,0),710], [String.fromCharCode(97,119,97,107,101,95,97,95,50,55,0),207], [String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,110,95,107,95,53,53,0),880]]);
         component6 += accepted_.length;
         plashd = new Map([[`${teamS.size}`, targeti.length]]);
         servicea /= Math.max(parseFloat(`${2 >> (Math.min(3, targeti.length))}`), 1);
         teamS = new Map([[`${teamS.size}`, 2]]);
         break;
      }
      while (4 >= accepted_.length && sportsR != String.fromCharCode(119,0)) {
         sportsR = "2";
         break;
      }
          let alertU = 2;
          let heji7: Map<any, any> = new Map([[String.fromCharCode(115,105,110,101,119,105,110,95,117,95,49,48,0),167], [String.fromCharCode(109,111,118,101,115,95,57,95,55,49,0),363]]);
          let download6 = false;
         accepted_ += `${chatn.size * 3}`;
         alertU ^= 1 % (Math.max(alertU, 2));
         heji7 = new Map([[`${heji7.size}`, alertU | heji7.size]]);
         download6 = heji7.size < 60;
      for (let t = 0; t < 1; t++) {
          let editS = 0.0;
          let gemfiler = 0;
          let fieldM: Array<any> = [String.fromCharCode(99,95,51,56,95,117,110,99,104,97,110,103,101,100,0), String.fromCharCode(120,95,55,54,95,99,105,114,99,108,101,0), String.fromCharCode(118,95,57,57,95,102,116,101,108,108,0)];
          let pagel = String.fromCharCode(101,120,112,108,111,100,105,110,103,95,97,95,55,55,0);
         taiwan_ = chatn.size == accepted_.length;
         editS -= parseFloat(`${gemfiler}`);
         gemfiler &= 1 | parseInt(`${editS}`);
         fieldM.push(parseInt(`${editS}`) ^ fieldM.length);
         pagel += `${fieldM.length}`;
      }
       let agreementw: Array<any> = [String.fromCharCode(108,95,56,57,95,97,108,108,111,119,97,110,99,101,0), String.fromCharCode(103,95,52,51,95,100,101,103,114,101,101,115,0), String.fromCharCode(116,105,103,103,108,101,95,51,95,49,54,0)];
       let short_x7x: Array<any> = [555, 164];
      pauseM = (modulen.length / (Math.max(2, parseInt(`${matchesu}`)))) > 94;
      if (constants8) {
         break;
      }
   } while (constants8 && (!pauseM));
      hooks6 /= Math.max(2, parseFloat(`${lessh & 1}`));

      

       let vietnamV = 2.0;
       let stepv = String.fromCharCode(102,116,118,108,105,110,107,95,108,95,52,51,0);
       let spinnert = true;
      for (let f = 0; f < 1; f++) {
         stepv = `${(parseInt(`${vietnamV}`) << (Math.min(2, Math.abs((spinnert ? 2 : 5)))))}`;
      }
      while (3 < (parseInt(`${vietnamV}`) / (Math.max(stepv.length, 10))) && 2 < (parseInt(`${vietnamV}`) / (Math.max(3, 9)))) {
         vietnamV -= 2 / (Math.max(1, parseInt(`${vietnamV}`)));
         break;
      }
      let robotoc = String.fromCharCode(114,117,54,50,49,0) == stepv;
      do {
         stepv = `${stepv.length}`;
         if (robotoc) {
            break;
         }
      } while ((4.28 > (vietnamV - 2.63) && 4 > (3 ^ stepv.length)) && robotoc);
         vietnamV /= Math.max((String.fromCharCode(121,0) == stepv ? stepv.length : (spinnert ? 4 : 1)), 1);
      let confirmation_ = vietnamV >= 7821039.0;
      do {
          let interstitialt = String.fromCharCode(109,97,99,101,95,97,95,57,48,0);
         vietnamV *= interstitialt.length / 3;
         if (confirmation_) {
            break;
         }
      } while (confirmation_ && (vietnamV == 4.68));
      let filledj = spinnert ? !spinnert : spinnert;
      do {
         spinnert = (vietnamV * stepv.length) <= 82.46;
         if (filledj) {
            break;
         }
      } while (filledj && (spinnert));
         stepv += "1";
      for (let z = 0; z < 3; z++) {
         spinnert = !spinnert || vietnamV <= 20.6;
      }
         vietnamV *= ((spinnert ? 3 : 5) >> (Math.min(Math.abs(parseInt(`${vietnamV}`)), 4)));
      matchesu *= 2 * resultc;
   while (3 == (lessh | 1)) {
      delegate_e1 /= Math.max(2 | parseInt(`${u_titlem}`), 1);
      break;
   }
   let whitej = 8345115.0 <= matchesu;
   do {
       let hongkongz = String.fromCharCode(116,104,114,101,97,100,112,111,111,108,95,53,95,49,53,0);
       let productl = String.fromCharCode(113,95,55,50,95,114,116,112,119,0);
       let searchJ: Array<any> = [828, 561, 679];
       let arrowx: Array<any> = [325, 863, 767];
         productl += `${(String.fromCharCode(55,0) == productl ? hongkongz.length : productl.length)}`;
       let helperE = String.fromCharCode(107,95,50,49,95,115,105,100,101,100,97,116,97,0);
       let rightu = String.fromCharCode(97,95,51,54,95,109,97,99,101,120,97,109,112,108,101,0);
      if (helperE.startsWith(`${searchJ.length}`)) {
         searchJ.push(1);
      }
      for (let a = 0; a < 3; a++) {
          let bottomU: Array<any> = [306, 674];
         searchJ.push((String.fromCharCode(115,0) == rightu ? rightu.length : bottomU.length));
      }
          let tempZ = String.fromCharCode(101,114,97,115,101,114,95,52,95,57,50,0);
          let goal_ = false;
         rightu += "1";
         tempZ += `${((goal_ ? 1 : 5))}`;
         goal_ = !goal_ || tempZ.length <= 93;
      for (let a = 0; a < 2; a++) {
         rightu += `${rightu.length}`;
      }
         helperE = "1";
      while (helperE.length < 2 || rightu.length < 2) {
         helperE += `${productl.length}`;
         break;
      }
         searchJ.push(3 | arrowx.length);
      if (helperE.length == 4 && rightu == String.fromCharCode(56,0)) {
         rightu = `${productl.length / 2}`;
      }
         productl = `${searchJ.length}`;
         rightu += `${arrowx.length}`;
      matchesu += (String.fromCharCode(117,0) == modulen ? parseInt(`${matchesu}`) : modulen.length);
      if (whitej) {
         break;
      }
   } while ((pauseM) && whitej);
      modulen += `${spinneri}`;
      if (
        devicesOrientation === "LANDSCAPE-LEFT" ||
        devicesOrientation === "LANDSCAPE-RIGHT"
      ) {

   while (3.93 < u_titlem) {
      aboutl = aboutl || hooks6 < 71.41;
      break;
   }
   let loging = 6143470.0 <= hooks6;
   do {
      hooks6 /= Math.max(4, parseFloat(`${parseInt(`${u_titlem}`) << (Math.min(3, Math.abs(2)))}`));
      if (loging) {
         break;
      }
   } while (loging && (!pauseM));
   let usernameA = modulen.length <= 5805054;
   do {
      modulen += `${parseInt(`${hooks6}`)}`;
      if (usernameA) {
         break;
      }
   } while (usernameA && (modulen.includes(`${aboutl}`)));
   let component6D = hooks6 >= 7960938.0;
   do {
       let plusD = 2.0;
       let dropdowne = String.fromCharCode(104,95,57,54,95,97,99,114,111,115,115,0);
         plusD -= parseFloat(`${parseInt(`${plusD}`) >> (Math.min(dropdowne.length, 1))}`);
         dropdowne = `${(dropdowne == String.fromCharCode(68,0) ? parseInt(`${plusD}`) : dropdowne.length)}`;
         dropdowne += `${2 | parseInt(`${plusD}`)}`;
      while (plusD > 2.16) {
          let updatesY = String.fromCharCode(119,97,118,101,102,111,114,109,95,119,95,50,57,0);
         plusD -= parseFloat(`${dropdowne.length | 3}`);
         updatesY += `${updatesY.length / (Math.max(9, updatesY.length))}`;
         break;
      }
         dropdowne += `${parseInt(`${plusD}`)}`;
       let selectedb = 5.0;
      hooks6 *= parseFloat(`${spinneri % 2}`);
      if (component6D) {
         break;
      }
   } while (((matchesu * hooks6) < 4.40) && component6D);
        setIsFullScreen(true);

   while (lessh >= 2) {
       let tempe = 0.0;
       let window_rJ: Array<any> = [41, 857];
       let clearH = 0.0;
       let catagoryg = 5.0;
      for (let h = 0; h < 1; h++) {
          let statsN = 1.0;
          let ballg: Map<any, any> = new Map([[String.fromCharCode(114,116,112,100,101,99,95,56,95,57,55,0),String.fromCharCode(122,95,52,49,95,102,111,114,103,111,116,0)], [String.fromCharCode(112,95,49,56,95,104,101,99,111,0),String.fromCharCode(111,102,102,115,99,114,101,101,110,95,49,95,53,57,0)]]);
         catagoryg *= 1;
         statsN += parseFloat(`${parseInt(`${statsN}`)}`);
         ballg.set(`${statsN}`, 3 * parseInt(`${statsN}`));
      }
          let stats4: Map<any, any> = new Map([[String.fromCharCode(121,95,57,57,95,111,102,102,108,111,97,100,0),282], [String.fromCharCode(98,97,115,101,105,115,107,101,121,95,53,95,57,0),323]]);
          let reportB = String.fromCharCode(98,117,108,107,95,97,95,49,53,0);
         window_rJ = [1];
         stats4 = new Map([[`${stats4.size}`, 1]]);
         reportB += `${(reportB == String.fromCharCode(72,0) ? reportB.length : stats4.size)}`;
          let halfQ = true;
          let backward4 = 1.0;
         tempe -= parseFloat(`${parseInt(`${clearH}`)}`);
         halfQ = backward4 > 60.31;
         backward4 += parseFloat(`${2 & parseInt(`${backward4}`)}`);
      while ((5 + window_rJ.length) < 3) {
         tempe /= Math.max(parseFloat(`${window_rJ.length ^ parseInt(`${clearH}`)}`), 3);
         break;
      }
      for (let o = 0; o < 3; o++) {
         catagoryg *= window_rJ.length;
      }
          let otherl = String.fromCharCode(111,95,56,48,95,105,110,100,97,116,97,0);
          let componentf = String.fromCharCode(108,101,97,102,110,111,100,101,95,55,95,57,57,0);
          let gmailE = 2.0;
         window_rJ.push(otherl.length);
         otherl = `${3 - parseInt(`${gmailE}`)}`;
         componentf = `${componentf.length ^ parseInt(`${gmailE}`)}`;
         catagoryg *= window_rJ.length / 1;
          let regengn = 2.0;
          let tails = 1;
          let dragU = String.fromCharCode(114,101,109,97,116,114,105,120,105,110,103,95,50,95,49,50,0);
         window_rJ = [window_rJ.length - 2];
         regengn *= dragU.length;
         tails |= 1;
         dragU = `${(dragU == String.fromCharCode(120,0) ? tails : dragU.length)}`;
         tempe += parseFloat(`${parseInt(`${catagoryg}`)}`);
         window_rJ.push(window_rJ.length);
      if ((clearH / (Math.max(3, catagoryg))) == 4.74) {
         clearH += parseFloat(`${parseInt(`${catagoryg}`) * 1}`);
      }
      let plusP = 5674028.0 >= clearH;
      do {
         clearH += parseFloat(`${2}`);
         if (plusP) {
            break;
         }
      } while (((clearH - 4.29) <= 4.37 && (4.29 + clearH) <= 4.93) && plusP);
      pauseM = 63.50 < tempe || 98 < spinneri;
      break;
   }
      resultc *= 1;
   let bottom4 = 5913522.0 <= u_titlem;
   do {
      u_titlem *= 3 - delegate_e1;
      if (bottom4) {
         break;
      }
   } while (bottom4 && (4.55 > (u_titlem - 2.30) && !pauseM));
      delegate_e1 |= lessh;
        

   let mathe = hooks6 <= 5284960.0;
   do {
      hooks6 /= Math.max(parseFloat(`${resultc + delegate_e1}`), 4);
      if (mathe) {
         break;
      }
   } while (mathe && (2.70 < (parseFloat(`${lessh}`) * hooks6) || 5 < (lessh / 3)));
   for (let j = 0; j < 1; j++) {
       let teamA = String.fromCharCode(115,95,52,49,95,102,105,110,97,108,0);
       let yingp = false;
       let delegate_3o = String.fromCharCode(115,108,105,112,112,97,103,101,115,95,116,95,54,53,0);
       let topic_ = String.fromCharCode(108,105,98,101,118,101,110,116,95,108,95,55,55,0);
      if (!yingp) {
         delegate_3o += `${teamA.length - topic_.length}`;
      }
          let canvas_ = String.fromCharCode(103,101,110,97,110,110,95,53,95,57,56,0);
         delegate_3o = `${canvas_.length & delegate_3o.length}`;
      for (let v = 0; v < 3; v++) {
          let singaporeZ: Map<any, any> = new Map([[String.fromCharCode(98,121,114,121,95,100,95,52,57,0),String.fromCharCode(108,111,111,112,105,110,103,95,122,95,49,57,0)], [String.fromCharCode(116,95,55,50,95,115,117,114,102,0),String.fromCharCode(115,101,116,116,108,101,95,48,95,57,53,0)], [String.fromCharCode(108,111,119,101,114,95,50,95,54,51,0),String.fromCharCode(109,101,116,97,108,95,107,95,56,54,0)]]);
          let constants4 = String.fromCharCode(108,97,118,102,117,116,105,108,115,95,111,95,55,49,0);
         teamA += `${teamA.length}`;
         singaporeZ.set(constants4, singaporeZ.size % (Math.max(1, constants4.length)));
      }
          let phoneS = String.fromCharCode(122,95,49,53,95,116,108,115,0);
          let playv: Array<any> = [729, 924, 368];
         topic_ += `${(delegate_3o.length << (Math.min(2, Math.abs((yingp ? 5 : 4)))))}`;
         phoneS += `${playv.length >> (Math.min(Math.abs(2), 4))}`;
         playv.push((phoneS == String.fromCharCode(67,0) ? phoneS.length : playv.length));
      let questW = String.fromCharCode(117,109,121,112,108,109,114,0) == delegate_3o;
      do {
         delegate_3o += "3";
         if (questW) {
            break;
         }
      } while ((teamA == delegate_3o) && questW);
      let contextj = teamA == String.fromCharCode(100,95,56,0);
      do {
         teamA += `${teamA.length}`;
         if (contextj) {
            break;
         }
      } while ((4 > topic_.length) && contextj);
          let chatG = String.fromCharCode(107,95,51,50,95,118,105,115,97,0);
          let carouseli = 0;
         delegate_3o += `${(3 >> (Math.min(5, Math.abs((yingp ? 3 : 4)))))}`;
         chatG = `${carouseli ^ chatG.length}`;
         carouseli |= chatG.length;
         teamA = "2";
      let inactive_ = yingp ? !yingp : yingp;
      do {
         yingp = teamA.startsWith(`${yingp}`);
         if (inactive_) {
            break;
         }
      } while ((2 > teamA.length) && inactive_);
       let nativeE = true;
       let gmailh = true;
          let ewardedY = 5;
          let verticalN = 1;
         delegate_3o = "2";
         ewardedY /= Math.max(4, verticalN * 2);
         verticalN += ewardedY;
          let upgrade4 = 3.0;
          let otherC: Array<any> = [String.fromCharCode(109,95,52,51,95,114,101,102,101,116,99,104,0), String.fromCharCode(116,104,101,109,101,115,95,118,95,56,57,0), String.fromCharCode(103,95,50,48,95,106,97,99,111,98,105,97,110,0)];
          let nexth: Array<any> = [504, 285, 71];
         gmailh = nexth.includes(yingp);
         upgrade4 *= parseFloat(`${parseInt(`${upgrade4}`) << (Math.min(otherC.length, 5))}`);
         otherC = [3 - parseInt(`${upgrade4}`)];
         nexth = [1 - parseInt(`${upgrade4}`)];
      modulen += `${parseInt(`${matchesu}`)}`;
   }
   while ((4 >> (Math.min(4, Math.abs(lessh)))) <= 1 || (4 >> (Math.min(4, Math.abs(lessh)))) <= 5) {
      delegate_e1 -= (String.fromCharCode(67,0) == modulen ? modulen.length : parseInt(`${u_titlem}`));
      break;
   }
   if (viewsb.get(`${spinneri}`) != null) {
      spinneri |= 2;
   }
        StatusBar.setHidden(true);

   if (3.13 <= (hooks6 - matchesu)) {
       let privilegeJ = 4.0;
      if ((privilegeJ + privilegeJ) >= 4.91 && (privilegeJ + 4.91) >= 1.98) {
         privilegeJ += 3 << (Math.min(Math.abs(parseInt(`${privilegeJ}`)), 4));
      }
      while ((privilegeJ - privilegeJ) > 2.85) {
         privilegeJ -= parseInt(`${privilegeJ}`);
         break;
      }
      let typingO = privilegeJ >= 7136469.0;
      do {
          let moon1 = 4;
          let sentryD = false;
          let activev = String.fromCharCode(102,97,99,116,111,114,97,98,108,101,95,111,95,49,51,0);
         privilegeJ += 3;
         moon1 -= (activev.length % (Math.max(1, (sentryD ? 4 : 1))));
         sentryD = !sentryD;
         activev += `${moon1 | 3}`;
         if (typingO) {
            break;
         }
      } while (typingO && (3.0 <= (4.9 + privilegeJ)));
      hooks6 /= Math.max(parseFloat(`${2}`), 4);
   }
       let pagination5 = String.fromCharCode(118,101,114,116,105,99,101,115,95,116,95,52,54,0);
       let upgradeU = String.fromCharCode(118,95,50,52,0);
       let animationH = 2.0;
      for (let r = 0; r < 1; r++) {
         pagination5 = `${(String.fromCharCode(82,0) == pagination5 ? parseInt(`${animationH}`) : pagination5.length)}`;
      }
         upgradeU = `${pagination5.length}`;
          let brightness0 = 5.0;
          let ewardedc = false;
         upgradeU = "2";
         brightness0 /= Math.max(2, parseFloat(`${2 | parseInt(`${brightness0}`)}`));
         ewardedc = brightness0 >= 70.99;
      let minivodd = 9568153.0 >= animationH;
      do {
          let crownI = String.fromCharCode(101,120,101,99,117,116,105,110,103,95,97,95,56,56,0);
         animationH *= pagination5.length % 1;
         crownI = `${crownI.length}`;
         if (minivodd) {
            break;
         }
      } while ((1 == (pagination5.length << (Math.min(Math.abs(1), 1))) && 1.77 == (1.49 * animationH)) && minivodd);
         animationH *= pagination5.length + 3;
      pauseM = hooks6 == 67.68;
      spinneri &= 1;
      actionsk = `${parseInt(`${hooks6}`) ^ spinneri}`;

        lockOrientation(devicesOrientation);
      } else if (devicesOrientation === "PORTRAIT") {

      pauseM = 30 > modulen.length;
   let d_counth = spinneri <= 7357894;
   do {
      spinneri *= (parseInt(`${matchesu}`) & (aboutl ? 3 : 2));
      if (d_counth) {
         break;
      }
   } while (d_counth && ((viewsb.size / (Math.max(4, spinneri))) < 4 && 1 < (spinneri / 4)));
   while (modulen.length < viewsb.size) {
      viewsb = new Map([[`${pauseM}`, spinneri << (Math.min(2, Math.abs(2)))]]);
      break;
   }
       let basketballE = 4.0;
       let soundo = String.fromCharCode(114,95,50,95,112,114,101,112,97,114,101,100,0);
       let settingg = String.fromCharCode(104,114,116,102,95,112,95,54,54,0);
         soundo += `${parseInt(`${basketballE}`)}`;
       let renew2: Map<any, any> = new Map([[String.fromCharCode(115,117,110,114,97,115,116,95,53,95,51,54,0),69], [String.fromCharCode(97,100,100,107,101,121,95,108,95,52,50,0),411]]);
       let photoY: Map<any, any> = new Map([[String.fromCharCode(121,95,52,50,95,99,111,108,111,114,101,100,0),500], [String.fromCharCode(107,95,50,57,95,100,101,99,101,108,101,114,97,116,105,111,110,0),749], [String.fromCharCode(112,114,101,100,105,99,116,111,114,95,49,95,55,57,0),819]]);
      while ((1 - photoY.size) == 1) {
         photoY.set(`${photoY.size}`, photoY.size);
         break;
      }
      let chatB = 5061581.0 >= basketballE;
      do {
         basketballE += renew2.size % 1;
         if (chatB) {
            break;
         }
      } while (chatB && ((settingg.length / (Math.max(1, basketballE))) >= 4.62));
      if ((settingg.length << (Math.min(1, Math.abs(photoY.size)))) <= 1 || (1 << (Math.min(4, Math.abs(photoY.size)))) <= 1) {
         settingg = "2";
      }
      let disconnectedw = photoY.size <= 5150582;
      do {
         photoY = new Map([[`${renew2.size}`, 2]]);
         if (disconnectedw) {
            break;
         }
      } while (disconnectedw && ((settingg.length + 1) <= 3));
         soundo = `${photoY.size}`;
      let tooltipsX = settingg == String.fromCharCode(107,98,122,103,108,0);
      do {
          let logoutq = 1;
          let register_fl = 2.0;
          let nalyticsf = 5;
          let heart8 = String.fromCharCode(97,114,103,115,95,100,95,54,56,0);
         settingg += `${renew2.size << (Math.min(Math.abs(1), 2))}`;
         logoutq %= Math.max(4, logoutq & parseInt(`${register_fl}`));
         register_fl -= parseFloat(`${2 & nalyticsf}`);
         nalyticsf *= heart8.length / (Math.max(8, nalyticsf));
         heart8 += `${parseInt(`${register_fl}`)}`;
         if (tooltipsX) {
            break;
         }
      } while (((2 & settingg.length) <= 1) && tooltipsX);
      let crownH = renew2.size >= 6505758;
      do {
         renew2.set(`${basketballE}`, 2 | photoY.size);
         if (crownH) {
            break;
         }
      } while (((renew2.size ^ 3) >= 4 || 3 >= (renew2.size ^ 3)) && crownH);
      pauseM = 75 <= spinneri;
        setIsFullScreen(false);

   if (resultc > u_titlem) {
      u_titlem *= 1 % (Math.max(10, parseInt(`${matchesu}`)));
   }
      actionsk += `${spinneri}`;
      resultc ^= parseInt(`${hooks6}`) + 2;
       let slider3 = String.fromCharCode(110,95,56,48,95,115,105,112,114,100,97,116,97,0);
       let scores = false;
       let incidentr = false;
          let hejiC: Array<any> = [846, 499, 289];
          let questWr: Map<any, any> = new Map([[String.fromCharCode(118,95,52,49,95,104,101,105,103,104,116,115,0),String.fromCharCode(109,95,49,57,95,99,97,114,114,105,97,103,101,0)], [String.fromCharCode(121,95,55,49,95,121,111,103,97,0),String.fromCharCode(111,110,101,112,97,115,115,95,112,95,51,49,0)]]);
         incidentr = incidentr && hejiC.length >= 22;
         hejiC.push(1 % (Math.max(8, questWr.size)));
         questWr = new Map([[`${questWr.size}`, questWr.size + questWr.size]]);
         scores = !scores || slider3.length < 22;
       let login8 = false;
       let redirectn = true;
          let expired6 = String.fromCharCode(116,95,56,49,95,114,101,103,105,111,110,115,0);
         incidentr = (!scores ? !login8 : !scores);
         expired6 = `${expired6.length}`;
         incidentr = (!login8 ? redirectn : !login8);
      while (!scores) {
         scores = slider3.startsWith(`${incidentr}`);
         break;
      }
      if (slider3.length == 2) {
         scores = incidentr;
      }
       let report1: Map<any, any> = new Map([[String.fromCharCode(105,109,112,111,114,116,95,51,95,54,54,0),840], [String.fromCharCode(107,95,52,95,97,99,99,117,109,0),553], [String.fromCharCode(111,95,52,54,95,119,101,98,112,0),345]]);
       let countrya: Map<any, any> = new Map([[String.fromCharCode(105,115,97,99,95,98,95,51,50,0),String.fromCharCode(100,101,99,111,114,97,116,105,111,110,95,56,95,49,56,0)], [String.fromCharCode(103,101,116,112,105,120,95,54,95,56,54,0),String.fromCharCode(98,105,114,116,104,100,97,116,101,95,48,95,50,48,0)], [String.fromCharCode(114,95,53,51,95,100,101,115,114,111,121,0),String.fromCharCode(119,105,114,101,108,101,115,115,95,111,95,54,48,0)]]);
         report1.set(`${redirectn}`, (1 - (redirectn ? 1 : 2)));
      resultc -= ((plash7 ? 5 : 2));
        

      hooks6 /= Math.max(5, parseFloat(`${lessh}`));
   let fieldh = lessh <= 8858198;
   do {
      lessh >>= Math.min(Math.abs(1 % (Math.max(5, parseInt(`${matchesu}`)))), 1);
      if (fieldh) {
         break;
      }
   } while ((4 <= (4 - trashl)) && fieldh);
   while (2.42 <= (modulen.length - matchesu) && 4 <= (4 << (Math.min(5, modulen.length)))) {
      modulen += "1";
      break;
   }
       let ycopy_v8L = 2.0;
      while ((ycopy_v8L - 3.11) >= 1.90 && 1.18 >= (ycopy_v8L - 3.11)) {
         ycopy_v8L /= Math.max(2, parseInt(`${ycopy_v8L}`));
         break;
      }
      while (5.67 > (ycopy_v8L - 5.67) || (5.67 + ycopy_v8L) > 4.9) {
         ycopy_v8L *= parseInt(`${ycopy_v8L}`);
         break;
      }
          let rightp = String.fromCharCode(114,95,55,56,95,110,111,116,0);
          let strq = true;
         ycopy_v8L -= (String.fromCharCode(98,0) == rightp ? parseInt(`${ycopy_v8L}`) : rightp.length);
         strq = (!strq ? strq : strq);
      hooks6 += (parseFloat(`${1 << (Math.min(3, Math.abs((aboutl ? 4 : 3))))}`));
        StatusBar.setHidden(false);

      resultc |= delegate_e1;
      hooks6 /= Math.max(1, parseFloat(`${3 | parseInt(`${hooks6}`)}`));
      plash7 = !plash7;
   while (delegate_e1 <= resultc) {
       let rankr = true;
       let sourcej: Map<any, any> = new Map([[String.fromCharCode(108,95,49,48,48,95,105,115,116,97,112,0),969], [String.fromCharCode(109,95,55,50,95,105,110,115,101,114,116,105,110,103,0),236], [String.fromCharCode(97,95,49,51,95,115,121,115,116,101,109,0),407]]);
      let tempu = sourcej.size >= 8327791;
      do {
         sourcej.set(`${rankr}`, sourcej.size);
         if (tempu) {
            break;
         }
      } while ((sourcej.size == 3 && 2 == (sourcej.size | 3)) && tempu);
          let iconh: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,116,101,95,98,95,54,49,0),false ], [String.fromCharCode(112,95,51,48,95,97,112,112,108,105,99,97,116,105,111,110,0),false ], [String.fromCharCode(99,95,53,54,95,114,101,112,108,105,99,97,116,101,0),true ]]);
          let v_centerp = String.fromCharCode(97,95,49,57,95,116,120,116,110,105,100,0);
          let models0 = true;
         rankr = !v_centerp.endsWith(`${models0}`);
         iconh.set(`${iconh.size}`, 2);
         v_centerp += `${iconh.size & iconh.size}`;
         sourcej.set(`${rankr}`, sourcej.size);
      while (rankr) {
          let regeng0 = String.fromCharCode(117,117,105,100,112,114,111,102,95,120,95,49,57,0);
          let loginX = String.fromCharCode(104,95,54,48,95,97,98,103,114,0);
          let page2 = String.fromCharCode(122,95,55,55,95,112,114,111,100,0);
         sourcej.set(`${rankr}`, (page2 == String.fromCharCode(80,0) ? page2.length : (rankr ? 1 : 2)));
         regeng0 += `${regeng0.length ^ loginX.length}`;
         loginX += `${loginX.length / 1}`;
         break;
      }
      for (let j = 0; j < 3; j++) {
         sourcej = new Map([[`${sourcej.size}`, ((rankr ? 3 : 3) << (Math.min(Math.abs(3), 4)))]]);
      }
      if (!rankr) {
         sourcej = new Map([[`${sourcej.size}`, 3]]);
      }
      delegate_e1 <<= Math.min(Math.abs(viewsb.size + 2), 3);
      break;
   }

        lockOrientation(devicesOrientation);
      }
    };

    const onToggleFullScreen = useCallback(() => {
       let backward2 = String.fromCharCode(114,101,102,114,101,115,104,95,50,95,49,50,0);
    let episodea = false;
    let signinupY = String.fromCharCode(122,105,112,102,95,115,95,51,53,0);
    let modelsj: Map<any, any> = new Map([[String.fromCharCode(121,95,51,55,95,114,101,108,99,116,120,0),378], [String.fromCharCode(115,116,99,98,95,49,95,50,51,0),906], [String.fromCharCode(112,114,111,106,101,99,116,95,120,95,50,51,0),554]]);
    let headerN = 2.0;
    let typesJ = 2.0;
    let circleI = 0.0;
    let whistleP = 1;
    let filteru = String.fromCharCode(105,110,115,105,100,101,95,112,95,57,49,0);
    let cornerE: Map<any, any> = new Map([[String.fromCharCode(121,95,53,49,95,117,112,100,97,116,101,0),false ], [String.fromCharCode(105,103,110,112,111,115,116,95,49,95,54,52,0),true ], [String.fromCharCode(107,95,53,49,95,122,109,113,115,104,101,108,108,0),true ]]);
   while ((parseInt(`${circleI}`) - whistleP) == 3 || (whistleP / 3) == 5) {
       let orientationv = String.fromCharCode(101,95,53,52,95,116,117,110,101,0);
       let matchesG = 3.0;
       let team6 = true;
       let fastforwardG = String.fromCharCode(105,95,54,55,95,109,112,100,98,0);
       let episodej = String.fromCharCode(114,101,99,111,103,110,105,122,101,114,95,99,95,49,48,0);
         matchesG /= Math.max(3, parseFloat(`${episodej.length}`));
         episodej += `${(3 << (Math.min(4, Math.abs((team6 ? 3 : 3)))))}`;
      if (fastforwardG.length < 1) {
         fastforwardG = `${(episodej == String.fromCharCode(66,0) ? episodej.length : fastforwardG.length)}`;
      }
         fastforwardG += `${fastforwardG.length & 2}`;
         fastforwardG += "1";
      if (fastforwardG.length > 5) {
         orientationv = `${(fastforwardG.length ^ (team6 ? 5 : 3))}`;
      }
         team6 = matchesG >= parseFloat(`${orientationv.length}`);
      let nalytics_ = orientationv == String.fromCharCode(97,49,117,0);
      do {
         orientationv += `${episodej.length >> (Math.min(Math.abs(3), 1))}`;
         if (nalytics_) {
            break;
         }
      } while ((4 < orientationv.length) && nalytics_);
         team6 = fastforwardG == orientationv;
          let clubk = 0.0;
         orientationv = `${(fastforwardG.length & (team6 ? 5 : 1))}`;
         clubk *= parseFloat(`${3 - parseInt(`${clubk}`)}`);
      if (orientationv.endsWith(`${matchesG}`)) {
          let incidentj = String.fromCharCode(101,95,54,50,95,97,115,99,101,110,116,0);
          let combinedZ = 5.0;
          let moon9 = 5;
         orientationv += `${parseInt(`${combinedZ}`)}`;
         incidentj = `${(String.fromCharCode(82,0) == incidentj ? moon9 : incidentj.length)}`;
         combinedZ -= moon9 % (Math.max(incidentj.length, 10));
      }
          let notificationn: Map<any, any> = new Map([[String.fromCharCode(115,95,55,53,95,114,101,97,109,0),true ], [String.fromCharCode(112,114,101,100,105,99,116,120,95,112,95,54,56,0),false ]]);
         matchesG -= parseFloat(`${1 >> (Math.min(2, Math.abs(parseInt(`${matchesG}`))))}`);
         notificationn = new Map([[`${notificationn.size}`, notificationn.size & 2]]);
      while (team6) {
          let inactiveg = String.fromCharCode(97,99,113,117,105,114,101,95,102,95,50,49,0);
          let floaterO = String.fromCharCode(100,95,53,51,95,115,101,116,116,108,101,0);
         team6 = 54 >= floaterO.length && inactiveg.length >= 54;
         break;
      }
       let yingD = 3.0;
       let emojiS = 5.0;
         matchesG -= parseFloat(`${parseInt(`${emojiS}`) * 1}`);
      circleI /= Math.max(1, parseFloat(`${2 >> (Math.min(5, Math.abs(parseInt(`${matchesG}`))))}`));
      break;
   }
      typesJ += parseInt(`${circleI}`);
   if ((3 >> (Math.min(1, signinupY.length))) < 4) {
      typesJ += filteru.length;
   }

      if (
        appOrientation === "LANDSCAPE-LEFT" ||
        appOrientation === "LANDSCAPE-RIGHT"
      ) {

      circleI -= parseFloat(`${whistleP}`);
       let xvodk = 4.0;
      while ((xvodk * xvodk) == 1.44) {
          let eighteene = String.fromCharCode(108,111,99,97,116,101,95,113,95,49,48,48,0);
          let middlewaree = String.fromCharCode(118,105,97,95,105,95,48,0);
          let greenD = String.fromCharCode(118,95,49,56,95,100,101,112,108,111,121,0);
          let suggestionJ = String.fromCharCode(106,105,116,116,101,114,95,56,95,53,49,0);
          let icont = 0.0;
         xvodk /= Math.max(parseFloat(`${parseInt(`${icont}`) / (Math.max(middlewaree.length, 6))}`), 2);
         eighteene = `${1 | suggestionJ.length}`;
         middlewaree = `${suggestionJ.length >> (Math.min(greenD.length, 4))}`;
         greenD += `${suggestionJ.length}`;
         icont -= eighteene.length;
         break;
      }
      if (xvodk > xvodk) {
         xvodk += parseFloat(`${1}`);
      }
      while (3.59 >= (xvodk * 4)) {
         xvodk *= parseFloat(`${parseInt(`${xvodk}`)}`);
         break;
      }
      typesJ /= Math.max(((episodea ? 4 : 2) / (Math.max(parseInt(`${headerN}`), 2))), 1);
       let modity0: Map<any, any> = new Map([[String.fromCharCode(104,97,115,104,97,98,108,101,95,103,95,50,53,0),238], [String.fromCharCode(97,95,53,52,95,111,118,101,114,0),507]]);
       let switch_eD = 3.0;
       let brightnesso: Map<any, any> = new Map([[String.fromCharCode(111,95,57,48,95,111,118,101,114,115,99,114,111,108,108,0),false ], [String.fromCharCode(115,95,53,53,95,99,114,101,97,116,111,114,0),true ], [String.fromCharCode(103,95,50,55,95,102,99,109,117,108,0),false ]]);
          let matchesj = String.fromCharCode(118,105,101,119,95,117,95,49,0);
          let playp = 4.0;
          let benefit8 = 0.0;
         switch_eD -= 3;
         matchesj += `${matchesj.length}`;
         playp -= parseFloat(`${parseInt(`${benefit8}`)}`);
         benefit8 *= parseInt(`${playp}`);
      while (4.100 < (5.86 + switch_eD)) {
          let gesturesJ = false;
          let spinnerT: Array<any> = [104, 910, 191];
          let infoH = String.fromCharCode(100,111,117,103,108,97,115,95,117,95,51,52,0);
         switch_eD *= 2;
         gesturesJ = !gesturesJ;
         spinnerT = [infoH.length];
         infoH = `${((gesturesJ ? 3 : 5) & 3)}`;
         break;
      }
         brightnesso.set(`${switch_eD}`, 2);
         brightnesso = new Map([[`${modity0.size}`, parseInt(`${switch_eD}`)]]);
         modity0.set(`${switch_eD}`, 1);
         brightnesso = new Map([[`${modity0.size}`, modity0.size ^ 2]]);
       let componentS: Array<any> = [209, 488];
      if (!Array.from(brightnesso.keys()).includes(`${switch_eD}`)) {
         brightnesso = new Map([[`${brightnesso.size}`, brightnesso.size]]);
      }
      let policyi = 5050688 <= brightnesso.size;
      do {
         brightnesso.set(`${componentS.length}`, 2);
         if (policyi) {
            break;
         }
      } while (((componentS.length / (Math.max(brightnesso.size, 2))) <= 5 || (brightnesso.size / 5) <= 5) && policyi);
      cornerE.set(`${typesJ}`, parseInt(`${headerN}`));
        lockOrientation("PORTRAIT");

   if (4 > (cornerE.size ^ whistleP) && 4 > (cornerE.size ^ 4)) {
      whistleP /= Math.max(5, (cornerE.size + (episodea ? 1 : 1)));
   }
       let upgradeC: Map<any, any> = new Map([[String.fromCharCode(99,97,114,101,102,117,108,108,121,95,100,95,57,0),String.fromCharCode(103,95,55,53,95,101,115,116,105,109,97,116,101,115,0)], [String.fromCharCode(119,95,50,56,95,114,101,102,101,114,114,97,108,0),String.fromCharCode(105,95,57,95,116,114,97,118,101,108,0)]]);
       let unticks = String.fromCharCode(102,95,55,95,112,114,105,110,116,118,97,108,0);
       let topicY: Map<any, any> = new Map([[String.fromCharCode(112,95,57,95,114,101,98,97,115,101,0),827], [String.fromCharCode(108,95,56,54,95,99,104,97,110,103,101,115,0),511], [String.fromCharCode(100,105,97,108,105,110,103,95,101,95,51,56,0),833]]);
      let actions3 = 5396295 >= unticks.length;
      do {
         unticks = `${upgradeC.size - unticks.length}`;
         if (actions3) {
            break;
         }
      } while (actions3 && (unticks.length == 5));
      let commentv = upgradeC.size <= 9833831;
      do {
         upgradeC = new Map([[`${upgradeC.size}`, (unticks == String.fromCharCode(68,0) ? upgradeC.size : unticks.length)]]);
         if (commentv) {
            break;
         }
      } while (commentv && (5 == (1 >> (Math.min(3, Math.abs(upgradeC.size))))));
         unticks += `${unticks.length}`;
      while (2 >= topicY.size) {
          let shirtl = String.fromCharCode(100,95,50,95,114,105,99,101,0);
         unticks += `${unticks.length}`;
         shirtl += `${shirtl.length}`;
         break;
      }
      let switch_ubQ = upgradeC.size <= 8599244;
      do {
          let humidity6 = String.fromCharCode(120,95,57,57,95,114,101,112,114,101,115,101,110,116,97,98,108,101,0);
          let bufferR = String.fromCharCode(113,95,55,57,95,119,111,114,100,115,0);
          let changek = String.fromCharCode(114,116,112,101,110,99,95,103,95,55,51,0);
         upgradeC.set(bufferR, upgradeC.size);
         humidity6 = `${humidity6.length}`;
         bufferR += `${(changek == String.fromCharCode(68,0) ? changek.length : humidity6.length)}`;
         if (switch_ubQ) {
            break;
         }
      } while (switch_ubQ && (!Array.from(upgradeC.keys()).includes(`${topicY.size}`)));
         unticks += "3";
          let bing9 = String.fromCharCode(97,95,53,55,95,108,111,111,112,102,105,108,116,101,114,0);
          let editN = 2;
          let megaphonep = 2.0;
         topicY.set(`${megaphonep}`, parseInt(`${megaphonep}`));
         bing9 = `${bing9.length % 2}`;
         editN -= 3 & editN;
         topicY = new Map([[`${upgradeC.size}`, topicY.size]]);
       let feedback1 = 5.0;
      modelsj.set(unticks, unticks.length * 1);
   while (episodea) {
      modelsj = new Map([[`${cornerE.size}`, cornerE.size]]);
      break;
   }
        setIsFullScreen(false);

   if ((5 + whistleP) < 4) {
       let floatinge: Array<any> = [String.fromCharCode(118,95,55,56,95,109,117,108,116,105,112,108,105,101,100,0), String.fromCharCode(99,95,51,48,95,115,104,97,108,108,0)];
       let bottomQ: Array<any> = [String.fromCharCode(113,95,56,56,95,115,111,108,105,100,105,116,121,0), String.fromCharCode(102,105,114,101,98,97,115,101,95,117,95,55,54,0), String.fromCharCode(117,110,109,111,118,101,100,95,113,95,57,57,0)];
       let canvas9 = true;
       let description_v4 = 0;
       let splashD = 2.0;
          let countdownc = 0.0;
          let langkeyZ = 5;
         description_v4 ^= 3 | parseInt(`${splashD}`);
         countdownc -= parseFloat(`${2}`);
         langkeyZ += langkeyZ - parseInt(`${countdownc}`);
      while (bottomQ.length == 3) {
         canvas9 = description_v4 < 78 && bottomQ.length < 78;
         break;
      }
      for (let q = 0; q < 2; q++) {
         floatinge = [bottomQ.length << (Math.min(Math.abs(2), 4))];
      }
         floatinge.push(1);
      while ((4.23 + splashD) > 4.97) {
          let analyticx: Array<any> = [955, 710, 842];
          let watchz = 2.0;
          let selectj = String.fromCharCode(110,111,119,95,105,95,50,54,0);
         description_v4 %= Math.max(5, 2 - parseInt(`${watchz}`));
         analyticx = [analyticx.length];
         watchz *= parseFloat(`${2}`);
         selectj += `${(String.fromCharCode(87,0) == selectj ? selectj.length : analyticx.length)}`;
         break;
      }
      let optionse = canvas9 ? !canvas9 : canvas9;
      do {
          let register_2mj: Map<any, any> = new Map([[String.fromCharCode(106,97,99,107,95,113,95,54,54,0),901], [String.fromCharCode(112,95,53,57,95,115,97,116,100,0),916], [String.fromCharCode(108,95,57,50,95,99,111,110,102,111,114,109,97,110,99,101,0),450]]);
          let upgradex = String.fromCharCode(115,119,105,122,122,108,105,110,103,95,100,95,51,53,0);
          let typingF = String.fromCharCode(104,95,51,53,95,112,117,116,99,0);
         canvas9 = 1.55 <= splashD;
         register_2mj = new Map([[typingF, 3 << (Math.min(4, typingF.length))]]);
         upgradex += `${typingF.length & 2}`;
         if (optionse) {
            break;
         }
      } while (optionse && (4 >= description_v4 || (4 % (Math.max(10, description_v4))) >= 3));
      while (splashD == 1.64) {
         canvas9 = !canvas9;
         break;
      }
         floatinge.push(floatinge.length ^ 2);
         floatinge = [bottomQ.length];
      let point9 = description_v4 <= 9667714;
      do {
         description_v4 |= parseInt(`${splashD}`);
         if (point9) {
            break;
         }
      } while (point9 && (4.32 < splashD));
       let promotionS = false;
       let sansw = true;
         floatinge = [parseInt(`${splashD}`) & 2];
         splashD -= parseFloat(`${3}`);
      if (3 == floatinge.length) {
         sansw = !canvas9;
      }
      if (promotionS) {
          let entryn: Map<any, any> = new Map([[String.fromCharCode(104,95,50,52,95,103,114,97,109,115,0),String.fromCharCode(119,95,49,48,95,97,112,116,120,104,100,0)], [String.fromCharCode(117,115,101,114,115,112,97,99,101,95,107,95,57,57,0),String.fromCharCode(104,95,54,95,116,105,109,105,110,103,115,0)]]);
          let championh: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,101,116,99,104,105,110,103,95,120,95,49,0),true ], [String.fromCharCode(119,104,101,101,108,95,115,95,55,50,0),false ]]);
         promotionS = !canvas9;
         entryn.set(`${championh.size}`, entryn.size + 2);
         championh = new Map([[`${entryn.size}`, entryn.size]]);
      }
      cornerE = new Map([[`${floatinge.length}`, floatinge.length << (Math.min(backward2.length, 2))]]);
   }
   let feedbackG = 7815605.0 <= circleI;
   do {
      circleI *= (parseFloat(`${String.fromCharCode(103,0) == signinupY ? parseInt(`${circleI}`) : signinupY.length}`));
      if (feedbackG) {
         break;
      }
   } while (feedbackG && (4.82 > (circleI - typesJ)));
   for (let o = 0; o < 3; o++) {
      whistleP >>= Math.min(Math.abs(parseInt(`${circleI}`) << (Math.min(Math.abs(1), 5))), 5);
   }
        

   let progress5 = 5387925 <= modelsj.size;
   do {
      modelsj.set(filteru, backward2.length);
      if (progress5) {
         break;
      }
   } while (progress5 && (cornerE.size <= modelsj.size));
       let moviesh = String.fromCharCode(100,105,97,109,101,116,101,114,95,118,95,52,50,0);
      let blackQ = moviesh == String.fromCharCode(97,51,106,0);
      do {
         moviesh += `${moviesh.length + moviesh.length}`;
         if (blackQ) {
            break;
         }
      } while ((moviesh.length >= 5) && blackQ);
       let untickM = String.fromCharCode(119,97,118,112,97,99,107,101,110,99,95,108,95,51,57,0);
      if (moviesh.length <= 3) {
          let fullK = 3.0;
          let time_k1 = String.fromCharCode(117,95,55,48,95,115,116,114,101,97,109,99,111,112,121,0);
          let floatera = String.fromCharCode(115,95,53,57,95,108,111,99,97,108,105,122,97,116,105,111,110,0);
          let rulesh = 2.0;
         moviesh = `${time_k1.length >> (Math.min(Math.abs(2), 4))}`;
         fullK -= parseFloat(`${parseInt(`${rulesh}`) & floatera.length}`);
         time_k1 = "2";
         floatera += `${floatera.length ^ 2}`;
         rulesh /= Math.max(4, (floatera == String.fromCharCode(99,0) ? parseInt(`${rulesh}`) : floatera.length));
      }
      typesJ -= (parseInt(`${circleI}`) ^ (episodea ? 4 : 4));
   for (let y = 0; y < 3; y++) {
      cornerE.set(`${headerN}`, parseInt(`${headerN}`) / 1);
   }
        StatusBar.setHidden(false);

   let active3 = whistleP <= 6064639;
   do {
      whistleP %= Math.max(whistleP, 3);
      if (active3) {
         break;
      }
   } while ((backward2.length > 1) && active3);
       let recommendation4: Map<any, any> = new Map([[String.fromCharCode(102,95,50,50,95,105,100,97,116,0),String.fromCharCode(120,95,54,95,102,105,108,116,101,114,101,100,0)], [String.fromCharCode(109,95,55,56,95,97,97,99,112,115,100,115,112,0),String.fromCharCode(104,95,57,52,95,121,99,98,99,114,0)], [String.fromCharCode(99,97,110,99,101,108,97,98,108,101,95,103,95,55,52,0),String.fromCharCode(98,95,55,55,95,111,98,118,105,111,117,115,108,121,0)]]);
       let buttonB = 5.0;
      while (2.50 >= buttonB) {
         buttonB -= parseFloat(`${parseInt(`${buttonB}`) >> (Math.min(Math.abs(1), 4))}`);
         break;
      }
      while (buttonB >= 5.33) {
          let groupF = 0;
          let long_kx = String.fromCharCode(112,97,114,97,109,115,116,114,105,110,103,95,111,95,51,53,0);
          let activee = String.fromCharCode(119,104,105,108,101,95,109,95,53,53,0);
          let subs4 = false;
          let controlc = String.fromCharCode(114,111,111,116,95,104,95,55,53,0);
         recommendation4 = new Map([[`${subs4}`, controlc.length]]);
         groupF += (String.fromCharCode(102,0) == long_kx ? long_kx.length : activee.length);
         activee = `${long_kx.length << (Math.min(Math.abs(1), 1))}`;
         controlc += `${groupF + 2}`;
         break;
      }
         buttonB += parseFloat(`${recommendation4.size * 1}`);
      for (let l = 0; l < 1; l++) {
         recommendation4 = new Map([[`${recommendation4.size}`, recommendation4.size]]);
      }
      while (!Array.from(recommendation4.values()).includes(buttonB)) {
         buttonB /= Math.max(parseFloat(`${3 * parseInt(`${buttonB}`)}`), 2);
         break;
      }
      for (let s = 0; s < 1; s++) {
         recommendation4.set(`${buttonB}`, 2 << (Math.min(4, Math.abs(parseInt(`${buttonB}`)))));
      }
      episodea = String.fromCharCode(55,0) == signinupY;
       let injurys = 0.0;
         injurys *= parseInt(`${injurys}`) & parseInt(`${injurys}`);
          let favoritex = 3;
          let twitterR = 1.0;
          let selle = String.fromCharCode(112,97,115,115,101,115,95,57,95,56,56,0);
         injurys += parseInt(`${twitterR}`);
         favoritex |= 3;
         selle = `${favoritex | selle.length}`;
      while (injurys > injurys) {
          let shirtN = 4.0;
          let profiles = String.fromCharCode(107,95,53,95,99,104,97,105,110,115,0);
         injurys -= parseInt(`${shirtN}`);
         shirtN *= profiles.length - 2;
         profiles = "1";
         break;
      }
      modelsj = new Map([[signinupY, parseInt(`${headerN}`)]]);

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      } else {

   if (circleI > 1.14) {
      circleI *= (parseFloat(`${(episodea ? 5 : 5) >> (Math.min(Math.abs(parseInt(`${circleI}`)), 3))}`));
   }
      headerN *= parseInt(`${circleI}`) ^ 3;
       let update_oO: Array<any> = [793, 778, 789];
       let plashj = String.fromCharCode(121,95,55,52,95,111,116,111,98,0);
         update_oO.push(plashj.length);
          let verticalM = String.fromCharCode(114,101,115,111,108,118,95,117,95,49,0);
          let strf = String.fromCharCode(110,95,55,50,95,105,110,116,101,114,99,101,112,116,111,114,0);
         plashj += `${strf.length}`;
         verticalM += `${verticalM.length / (Math.max(9, verticalM.length))}`;
         strf += "2";
         update_oO.push((plashj == String.fromCharCode(83,0) ? update_oO.length : plashj.length));
          let episodef: Array<any> = [String.fromCharCode(100,105,102,102,101,114,101,110,116,95,113,95,55,50,0), String.fromCharCode(97,102,102,105,110,105,116,105,101,115,95,115,95,49,55,0), String.fromCharCode(110,118,111,105,99,101,95,105,95,49,56,0)];
         plashj = "1";
         episodef.push(episodef.length);
          let injuryC = false;
         update_oO.push(update_oO.length);
         injuryC = !injuryC;
       let tcopy_n7: Array<any> = [350, 798];
      whistleP %= Math.max(3, 3);
        lockOrientation("LANDSCAPE");

   for (let a = 0; a < 3; a++) {
      backward2 += "1";
   }
      typesJ *= parseInt(`${typesJ}`);
       let constantsY = String.fromCharCode(102,111,108,108,111,119,101,114,115,95,109,95,51,53,0);
       let entryZ = 1.0;
       let linke = 0;
          let episodesI: Map<any, any> = new Map([[String.fromCharCode(117,110,109,117,116,101,100,95,102,95,50,50,0),97], [String.fromCharCode(104,117,100,95,106,95,57,55,0),550]]);
         entryZ -= parseFloat(`${episodesI.size}`);
      while (3 <= (4 * parseInt(`${entryZ}`)) && (entryZ * 3.28) <= 4.55) {
         entryZ += parseFloat(`${linke % (Math.max(4, constantsY.length))}`);
         break;
      }
      if (2 >= (constantsY.length / (Math.max(10, linke))) && 1 >= (constantsY.length / 2)) {
         linke /= Math.max(constantsY.length << (Math.min(3, Math.abs(parseInt(`${entryZ}`)))), 2);
      }
       let buttonr = false;
       let floatingU = true;
      if (!floatingU) {
          let adulte = false;
          let annerp = String.fromCharCode(118,111,114,98,105,115,95,100,95,50,54,0);
          let long_49J: Array<any> = [254, 957, 977];
         floatingU = annerp.length <= 8;
         adulte = long_49J.length <= 89;
         annerp = `${long_49J.length}`;
      }
      for (let g = 0; g < 1; g++) {
         entryZ -= parseFloat(`${2}`);
      }
         entryZ -= (parseFloat(`${(buttonr ? 4 : 3) + (floatingU ? 1 : 1)}`));
         buttonr = 7 == (linke - entryZ);
         entryZ += parseFloat(`${2 * constantsY.length}`);
      episodea = 99 < signinupY.length && cornerE.size < 99;
        setIsFullScreen(true);

       let viewerg = 4.0;
       let bannerG = String.fromCharCode(99,97,110,99,101,108,108,97,116,105,111,110,95,50,95,51,57,0);
       let clockk = String.fromCharCode(107,95,54,49,95,99,108,101,97,114,118,105,100,101,111,100,97,116,97,0);
      let nterstitialy = String.fromCharCode(122,109,107,122,102,112,109,0) == bannerG;
      do {
         bannerG = `${2 + bannerG.length}`;
         if (nterstitialy) {
            break;
         }
      } while (nterstitialy && (clockk.length >= bannerG.length));
         clockk += `${2 << (Math.min(1, bannerG.length))}`;
      if (clockk != String.fromCharCode(66,0)) {
         bannerG += `${parseInt(`${viewerg}`) ^ bannerG.length}`;
      }
      while (clockk.length < 2) {
         clockk += `${bannerG.length + 1}`;
         break;
      }
      for (let h = 0; h < 2; h++) {
         bannerG = `${clockk.length}`;
      }
      if (2 >= clockk.length) {
         clockk += `${(clockk == String.fromCharCode(69,0) ? parseInt(`${viewerg}`) : clockk.length)}`;
      }
       let backgrounda = 0.0;
         clockk = `${(clockk == String.fromCharCode(102,0) ? parseInt(`${backgrounda}`) : clockk.length)}`;
         backgrounda += 1;
      signinupY = `${((episodea ? 3 : 1) & cornerE.size)}`;
   while ((cornerE.size & whistleP) > 2 && (cornerE.size & 2) > 4) {
       let selectede = String.fromCharCode(114,105,110,103,105,110,103,95,99,95,54,0);
       let suggestionJf = String.fromCharCode(99,111,100,101,114,95,103,95,57,55,0);
       let connectionq = String.fromCharCode(98,105,116,115,112,117,108,115,101,115,95,49,95,53,53,0);
       let productN = false;
       let expiredd = String.fromCharCode(109,99,111,109,112,95,114,95,53,50,0);
          let eighteen0 = String.fromCharCode(108,95,49,55,95,101,118,111,108,118,101,0);
         expiredd += "2";
         eighteen0 = `${eighteen0.length | 2}`;
      let success6 = suggestionJf == String.fromCharCode(116,48,122,0);
      do {
         suggestionJf += `${(1 / (Math.max(1, (productN ? 3 : 1))))}`;
         if (success6) {
            break;
         }
      } while ((!selectede.endsWith(suggestionJf)) && success6);
         productN = connectionq == suggestionJf;
      for (let x = 0; x < 3; x++) {
          let moviesZ = String.fromCharCode(115,116,97,99,107,101,100,95,51,95,56,54,0);
          let read4: Map<any, any> = new Map([[String.fromCharCode(121,95,57,50,95,115,116,97,110,100,97,114,100,0),391], [String.fromCharCode(97,103,97,116,101,95,108,95,54,48,0),908]]);
         expiredd = `${((productN ? 2 : 2))}`;
         moviesZ += `${read4.size % 1}`;
         read4.set(`${moviesZ}`, read4.size);
      }
      if (connectionq == String.fromCharCode(50,0) && selectede != String.fromCharCode(74,0)) {
          let text2 = String.fromCharCode(102,111,114,116,104,95,111,95,56,55,0);
          let configureJ = String.fromCharCode(100,95,56,54,95,112,114,101,118,101,110,116,101,100,0);
          let handlerq = 3.0;
          let whistle_ = String.fromCharCode(97,110,103,114,121,95,57,95,55,57,0);
          let chinaY = 3.0;
         connectionq += `${expiredd.length}`;
         text2 = `${configureJ.length >> (Math.min(3, text2.length))}`;
         configureJ += `${(whistle_ == String.fromCharCode(66,0) ? whistle_.length : parseInt(`${chinaY}`))}`;
         handlerq -= whistle_.length ^ 3;
         chinaY *= (parseFloat(`${whistle_ == String.fromCharCode(114,0) ? parseInt(`${chinaY}`) : whistle_.length}`));
      }
      let upgradem = 5665589 >= suggestionJf.length;
      do {
         suggestionJf = `${expiredd.length + 2}`;
         if (upgradem) {
            break;
         }
      } while ((suggestionJf.length > selectede.length) && upgradem);
      if (connectionq.endsWith(`${productN}`)) {
         productN = !productN || suggestionJf.length > 27;
      }
         connectionq = `${selectede.length}`;
          let matchesp = 1;
         productN = 25 <= matchesp;
          let resendq = 1.0;
          let sharedn = String.fromCharCode(118,95,49,55,95,117,110,99,108,97,109,112,101,100,0);
          let stationD = 3.0;
         expiredd = "1";
         resendq /= Math.max(parseInt(`${resendq}`), 5);
         sharedn = `${parseInt(`${resendq}`)}`;
         stationD -= 1;
         connectionq += `${(expiredd == String.fromCharCode(106,0) ? (productN ? 5 : 1) : expiredd.length)}`;
      let mapping8 = suggestionJf.length >= 5954877;
      do {
         suggestionJf += `${suggestionJf.length}`;
         if (mapping8) {
            break;
         }
      } while (mapping8 && (selectede == String.fromCharCode(57,0)));
      while (connectionq.endsWith(expiredd)) {
         expiredd = `${suggestionJf.length & connectionq.length}`;
         break;
      }
         productN = selectede.length >= 33;
      for (let y = 0; y < 2; y++) {
         connectionq += `${((productN ? 2 : 5) - expiredd.length)}`;
      }
      cornerE.set(`${headerN}`, parseInt(`${headerN}`));
      break;
   }
      signinupY = `${parseInt(`${typesJ}`) % 1}`;
        

      headerN += backward2.length;
      signinupY += `${parseInt(`${typesJ}`) + whistleP}`;
   while ((modelsj.size << (Math.min(Math.abs(4), 4))) > 5 || (modelsj.size + parseInt(`${headerN}`)) > 4) {
      modelsj = new Map([[`${typesJ}`, parseInt(`${headerN}`)]]);
      break;
   }
        StatusBar.setHidden(true);

   while (3 > (signinupY.length % 2) || 4.56 > (typesJ + signinupY.length)) {
      typesJ += 2 ^ parseInt(`${headerN}`);
      break;
   }
       let module4 = 4.0;
       let vietnamY = 4.0;
       let mathH = String.fromCharCode(105,95,54,52,95,99,111,110,102,105,103,117,114,101,0);
      let rewind4 = module4 >= 6277913.0;
      do {
         module4 *= 1;
         if (rewind4) {
            break;
         }
      } while (rewind4 && ((1.72 * module4) > 2.92));
      if (!mathH.endsWith(`${vietnamY}`)) {
         mathH += "3";
      }
          let vignetteF = String.fromCharCode(115,95,57,52,95,108,105,118,101,115,116,114,101,97,109,0);
          let topic6 = 5;
          let gpayU = 4.0;
         module4 -= (String.fromCharCode(48,0) == vignetteF ? vignetteF.length : topic6);
         topic6 += parseInt(`${gpayU}`) / (Math.max(6, parseInt(`${gpayU}`)));
      for (let z = 0; z < 1; z++) {
         vietnamY *= parseFloat(`${2 >> (Math.min(5, Math.abs(parseInt(`${vietnamY}`))))}`);
      }
      for (let w = 0; w < 3; w++) {
          let bootsplashz = String.fromCharCode(103,95,57,95,103,114,97,110,117,108,97,114,105,116,121,0);
          let editx = String.fromCharCode(115,105,120,116,97,112,95,103,95,49,48,48,0);
          let ticks = 0;
          let typingG = String.fromCharCode(106,95,50,52,95,100,109,117,108,0);
         vietnamY += parseFloat(`${typingG.length}`);
         bootsplashz += `${editx.length << (Math.min(bootsplashz.length, 1))}`;
         editx = `${ticks % (Math.max(3, 10))}`;
         ticks |= ticks;
         typingG = "3";
      }
      for (let u = 0; u < 1; u++) {
          let userF = String.fromCharCode(97,95,54,49,95,114,101,97,108,108,121,0);
         vietnamY *= parseFloat(`${3 - userF.length}`);
      }
      for (let s = 0; s < 2; s++) {
         vietnamY += parseFloat(`${1}`);
      }
      let moviesf = module4 >= 8832745.0;
      do {
          let adultS = 4.0;
          let login0 = String.fromCharCode(106,95,49,48,48,95,109,101,109,115,104,105,112,0);
         module4 /= Math.max(parseInt(`${module4}`) << (Math.min(1, Math.abs(parseInt(`${adultS}`)))), 1);
         adultS += parseFloat(`${login0.length - 3}`);
         login0 = "2";
         if (moviesf) {
            break;
         }
      } while (moviesf && (4.18 < (vietnamY - 5)));
         module4 *= 3;
      whistleP /= Math.max(mathH.length, 5);
       let module3 = 3.0;
      for (let f = 0; f < 3; f++) {
         module3 += 1;
      }
      for (let o = 0; o < 2; o++) {
         module3 /= Math.max(parseInt(`${module3}`) | parseInt(`${module3}`), 2);
      }
      if ((module3 + 3.99) < 5.29) {
         module3 -= 2 - parseInt(`${module3}`);
      }
      headerN += (String.fromCharCode(108,0) == signinupY ? (episodea ? 4 : 1) : signinupY.length);

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
       let analyticsq = true;
    let bootsplashC = true;
    let phone7 = 3.0;
    let giftL = String.fromCharCode(114,95,52,52,95,105,110,116,101,114,110,101,100,0);
    let hejic = String.fromCharCode(113,95,56,53,95,97,117,103,109,101,110,116,101,100,0);
    let anytime7 = 5;
    let promotiona = String.fromCharCode(112,95,54,48,95,116,120,105,100,0);
    let read4: Array<any> = [891, 157];
    let singapore3 = String.fromCharCode(97,108,112,105,110,101,95,106,95,49,0);
    let handlerU: Array<any> = [String.fromCharCode(98,95,56,50,0), String.fromCharCode(105,109,105,116,97,116,101,95,50,95,52,55,0), String.fromCharCode(101,95,50,48,95,105,111,115,116,114,101,97,109,0)];
    let activeA = 1.0;
    let logoutu = false;
    let reminderu = 3.0;
   while (hejic.includes(`${analyticsq}`)) {
       let theme6 = String.fromCharCode(115,95,53,51,95,99,108,117,98,0);
      for (let k = 0; k < 3; k++) {
          let frame_3L = String.fromCharCode(100,110,120,104,100,100,97,116,97,95,104,95,55,53,0);
          let saveA = false;
          let tooltipsw = 0.0;
         theme6 += `${(parseInt(`${tooltipsw}`) - (saveA ? 2 : 1))}`;
         frame_3L = "1";
         saveA = frame_3L.length <= 73;
      }
          let readM = 1;
          let descA = false;
          let pagination5 = String.fromCharCode(117,95,55,55,95,99,97,118,112,0);
         theme6 = `${2 >> (Math.min(2, pagination5.length))}`;
         readM %= Math.max(1, readM);
         descA = 4 == readM;
         pagination5 = `${(readM - (descA ? 1 : 2))}`;
         theme6 = `${theme6.length % (Math.max(theme6.length, 10))}`;
      analyticsq = String.fromCharCode(108,0) == giftL;
      break;
   }
       let helperh = String.fromCharCode(119,95,51,48,95,116,114,97,99,101,0);
       let filedR: Array<any> = [971, 530, 438];
       let active7 = 0;
         filedR = [active7];
      while (5 == filedR.length) {
          let closea = 4.0;
          let fullo = true;
          let matches5 = 1.0;
          let zhubod: Array<any> = [210, 298, 963];
          let macaup = true;
         filedR.push(parseInt(`${closea}`));
         closea /= Math.max(parseFloat(`${zhubod.length}`), 5);
         fullo = zhubod.includes(macaup);
         matches5 /= Math.max(((macaup ? 2 : 2) << (Math.min(3, Math.abs(1)))), 4);
         break;
      }
      if (4 < filedR.length) {
          let detailsK = String.fromCharCode(105,95,50,51,95,99,101,108,116,0);
          let goalD: Map<any, any> = new Map([[String.fromCharCode(113,95,49,56,95,97,108,112,110,0),true ], [String.fromCharCode(102,95,57,95,115,116,117,100,105,111,118,105,115,117,97,108,111,98,106,101,99,116,0),false ], [String.fromCharCode(119,114,105,116,101,98,105,116,115,95,57,95,53,48,0),true ]]);
          let readh = String.fromCharCode(108,95,54,51,95,101,118,101,110,97,118,103,0);
         filedR.push(filedR.length ^ 2);
         detailsK += `${(String.fromCharCode(57,0) == detailsK ? detailsK.length : readh.length)}`;
         goalD.set(`${readh}`, goalD.size ^ 1);
      }
      while (helperh.includes(`${filedR.length}`)) {
         helperh += "2";
         break;
      }
      if (4 > (filedR.length & active7) && (filedR.length & active7) > 4) {
          let j_viewL = String.fromCharCode(112,101,101,114,105,100,95,53,95,49,48,48,0);
          let i_positionn = String.fromCharCode(120,95,50,48,95,102,116,97,98,0);
          let desco = String.fromCharCode(100,97,114,116,115,95,101,95,52,57,0);
         active7 -= 1;
         j_viewL = `${i_positionn.length + 1}`;
         i_positionn += `${1 << (Math.min(4, j_viewL.length))}`;
         desco += `${1 | desco.length}`;
      }
      while (4 < (active7 * 2) || (active7 * 2) < 3) {
         filedR = [active7 & helperh.length];
         break;
      }
         filedR.push((helperh == String.fromCharCode(121,0) ? helperh.length : active7));
      for (let x = 0; x < 2; x++) {
          let sortO = true;
          let down7 = 0;
          let indexw = String.fromCharCode(100,101,99,105,109,97,108,115,95,52,95,49,57,0);
          let circleA = 5;
         helperh = `${circleA}`;
         sortO = 22 < down7 && String.fromCharCode(67,0) == indexw;
         down7 *= (String.fromCharCode(102,0) == indexw ? down7 : indexw.length);
         circleA /= Math.max(down7, 5);
      }
         filedR.push(1);
      singapore3 += `${promotiona.length + 3}`;
      singapore3 += `${giftL.length}`;
      analyticsq = 30 == anytime7;
       let collection4 = 0.0;
       let mutedP = 3;
       let datam: Array<any> = [708, 138];
         mutedP /= Math.max(4, 1 & parseInt(`${collection4}`));
      for (let w = 0; w < 1; w++) {
          let teamO = String.fromCharCode(112,114,111,99,101,101,100,95,51,95,53,0);
         datam.push(parseInt(`${collection4}`) >> (Math.min(Math.abs(2), 2)));
         teamO += `${teamO.length}`;
      }
         collection4 /= Math.max(datam.length, 1);
         mutedP |= datam.length * 2;
         mutedP *= 1;
      for (let f = 0; f < 3; f++) {
          let gemfile7 = false;
         collection4 *= mutedP + parseInt(`${collection4}`);
         gemfile7 = !gemfile7 || !gemfile7;
      }
      while ((mutedP & 1) == 5 && (mutedP & 1) == 4) {
         datam = [mutedP + 2];
         break;
      }
         datam = [parseInt(`${collection4}`)];
      for (let v = 0; v < 2; v++) {
         mutedP <<= Math.min(Math.abs(3 & datam.length), 1);
      }
      hejic = `${anytime7 / (Math.max(promotiona.length, 3))}`;
   if (read4.length < hejic.length) {
      hejic += `${(read4.length | (analyticsq ? 5 : 3))}`;
   }
   if (1 <= (read4.length | 2) || read4.length <= 2) {
      bootsplashC = giftL.length >= 49;
   }
   for (let y = 0; y < 2; y++) {
       let mathc = String.fromCharCode(111,95,51,0);
       let recommendation0 = String.fromCharCode(115,116,97,98,105,108,105,122,97,116,105,111,110,95,107,95,49,51,0);
       let resendd = String.fromCharCode(109,95,54,95,109,101,114,103,101,97,98,108,101,0);
      while (recommendation0.length < resendd.length) {
         recommendation0 = "1";
         break;
      }
          let weibok = false;
          let connectionh = true;
         resendd = `${1 ^ mathc.length}`;
         weibok = (!connectionh ? weibok : !connectionh);
      hejic = `${hejic.length & singapore3.length}`;
   }
      anytime7 ^= 3 | read4.length;
   while ((4.29 / (Math.max(1, phone7))) >= 3.84) {
      analyticsq = (bootsplashC ? !analyticsq : bootsplashC);
      break;
   }
       let grey4 = 5.0;
          let logino = 0.0;
          let small0: Map<any, any> = new Map([[String.fromCharCode(99,95,51,49,95,98,121,112,97,115,115,105,110,103,0),315], [String.fromCharCode(109,95,54,51,95,114,97,109,112,0),20], [String.fromCharCode(99,95,55,52,95,110,111,98,111,100,121,0),45]]);
         grey4 /= Math.max(parseFloat(`${parseInt(`${logino}`)}`), 2);
         small0 = new Map([[`${small0.size}`, 1]]);
         grey4 += parseFloat(`${parseInt(`${grey4}`) & 2}`);
         grey4 /= Math.max(4, parseFloat(`${3}`));
      singapore3 = `${singapore3.length & read4.length}`;
      anytime7 -= singapore3.length - giftL.length;
       let usernameE = true;
       let bottomY = String.fromCharCode(107,95,57,0);
       let resultg = 3;
      if (resultg >= bottomY.length) {
         bottomY += `${1 + bottomY.length}`;
      }
         bottomY += `${bottomY.length}`;
      while (1 >= bottomY.length) {
         bottomY += `${(bottomY == String.fromCharCode(98,0) ? bottomY.length : resultg)}`;
         break;
      }
       let downloadingc = 5;
      let anytimeL = bottomY == String.fromCharCode(98,48,116,110,109,113,120,0);
      do {
         bottomY += `${((usernameE ? 3 : 5) - bottomY.length)}`;
         if (anytimeL) {
            break;
         }
      } while (anytimeL && (!bottomY.startsWith(`${resultg}`)));
          let guideO: Array<any> = [378, 931];
         downloadingc |= bottomY.length & guideO.length;
          let ballA: Map<any, any> = new Map([[String.fromCharCode(115,119,105,102,116,99,95,111,95,50,49,0),false ], [String.fromCharCode(108,95,49,50,95,97,99,111,109,112,114,101,115,115,111,114,0),true ], [String.fromCharCode(99,111,109,112,97,116,95,108,95,55,57,0),true ]]);
         bottomY += `${resultg | 2}`;
         ballA.set(`${ballA.size}`, ballA.size | ballA.size);
      if ((1 + downloadingc) <= 1 || (1 + downloadingc) <= 3) {
         downloadingc -= (bottomY == String.fromCharCode(70,0) ? bottomY.length : (usernameE ? 5 : 3));
      }
      while (2 == (resultg << (Math.min(Math.abs(1), 2))) || (1 << (Math.min(3, bottomY.length))) == 4) {
         resultg *= bottomY.length << (Math.min(5, Math.abs(resultg)));
         break;
      }
      phone7 += 1;
      handlerU.push(handlerU.length);
      anytime7 -= hejic.length * anytime7;
   let inviteb = analyticsq ? !analyticsq : analyticsq;
   do {
       let away5 = false;
       let w_unlock1 = String.fromCharCode(112,114,105,109,97,114,121,95,110,95,50,55,0);
       let sportsk: Map<any, any> = new Map([[String.fromCharCode(101,99,107,101,121,95,48,95,49,57,0),319], [String.fromCharCode(99,111,108,108,105,100,105,110,103,95,97,95,50,53,0),604], [String.fromCharCode(116,95,51,55,95,110,101,103,97,116,101,0),993]]);
       let readP = false;
       let description_cv = String.fromCharCode(120,95,56,56,95,118,105,118,111,0);
         description_cv = "1";
      if (away5) {
          let signinupS = 1.0;
         w_unlock1 += `${w_unlock1.length}`;
         signinupS += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${signinupS}`)), 2))}`);
      }
       let episodesG = String.fromCharCode(114,95,56,53,95,105,112,97,100,0);
         episodesG = `${sportsk.size << (Math.min(Math.abs(3), 5))}`;
         readP = w_unlock1.length > 4;
      for (let b = 0; b < 1; b++) {
          let episodesl = 2.0;
          let popupD = false;
          let canvasr = String.fromCharCode(114,101,115,112,101,99,116,105,110,103,95,121,95,52,52,0);
          let singapores = false;
         sportsk.set(episodesG, ((singapores ? 5 : 3) % (Math.max(3, 6))));
         episodesl *= 1 << (Math.min(Math.abs(parseInt(`${episodesl}`)), 3));
         popupD = canvasr.length < 35;
         canvasr = `${parseInt(`${episodesl}`) << (Math.min(2, Math.abs(2)))}`;
         singapores = 78.81 >= episodesl && popupD;
      }
      if (episodesG.length <= description_cv.length) {
         description_cv += `${3 & description_cv.length}`;
      }
       let network4 = String.fromCharCode(114,101,109,97,105,110,105,110,103,95,115,95,55,0);
      if (episodesG.includes(`${away5}`)) {
         away5 = description_cv.length >= network4.length;
      }
          let sidef = String.fromCharCode(113,117,105,110,116,95,101,95,49,55,0);
         sportsk = new Map([[w_unlock1, 2]]);
         sidef = "3";
         episodesG += `${(3 * (away5 ? 4 : 1))}`;
          let indicatorP = false;
         description_cv += `${((indicatorP ? 1 : 1) / 2)}`;
         w_unlock1 += `${sportsk.size}`;
      let logo3 = readP ? !readP : readP;
      do {
         readP = network4.length <= 57;
         if (logo3) {
            break;
         }
      } while (logo3 && (readP && 2 == episodesG.length));
      for (let g = 0; g < 3; g++) {
         readP = sportsk.size == w_unlock1.length;
      }
      analyticsq = !readP;
      if (inviteb) {
         break;
      }
   } while (inviteb && (!analyticsq));
   let entry0 = 9867487 <= anytime7;
   do {
      anytime7 ^= giftL.length;
      if (entry0) {
         break;
      }
   } while ((1 >= (promotiona.length % (Math.max(1, anytime7)))) && entry0);
   while (bootsplashC) {
      promotiona = `${(String.fromCharCode(97,0) == giftL ? giftL.length : hejic.length)}`;
      break;
   }
      analyticsq = handlerU.length <= 4;
       let stationL = 5;
       let commentV = String.fromCharCode(121,95,50,51,95,99,111,108,108,101,99,116,0);
      let searchbar2 = commentV == String.fromCharCode(110,120,111,120,111,121,0);
      do {
          let backgroundE = 0.0;
         commentV += `${3 << (Math.min(5, Math.abs(parseInt(`${backgroundE}`))))}`;
         if (searchbar2) {
            break;
         }
      } while (((commentV.length ^ stationL) == 5) && searchbar2);
         stationL += (String.fromCharCode(67,0) == commentV ? stationL : commentV.length);
         stationL -= commentV.length;
      while (!commentV.includes(`${stationL}`)) {
         commentV = `${stationL}`;
         break;
      }
         commentV = `${(String.fromCharCode(76,0) == commentV ? commentV.length : stationL)}`;
      if ((commentV.length + stationL) >= 3 || 5 >= (3 + commentV.length)) {
         stationL |= 3 << (Math.min(4, Math.abs(stationL)));
      }
      giftL = `${1 % (Math.max(9, promotiona.length))}`;
       let phonea = String.fromCharCode(97,95,54,95,115,116,97,99,107,0);
       let viewerK = 3;
       let ballq = false;
         viewerK -= 1;
      if ((5 | viewerK) < 3 && 5 < (phonea.length | viewerK)) {
         phonea = `${((ballq ? 1 : 4) << (Math.min(Math.abs(viewerK), 4)))}`;
      }
          let short_2aq = 5.0;
          let megaphoneG = String.fromCharCode(115,101,99,111,110,100,95,99,95,49,53,0);
          let register_p3F = String.fromCharCode(102,111,114,119,97,114,100,115,95,118,95,52,0);
         viewerK |= viewerK;
         short_2aq -= 3 + megaphoneG.length;
         megaphoneG += `${3 - megaphoneG.length}`;
         register_p3F = "1";
      for (let u = 0; u < 3; u++) {
         phonea = `${(phonea == String.fromCharCode(97,0) ? phonea.length : viewerK)}`;
      }
         ballq = viewerK < 98;
      singapore3 += `${viewerK * 1}`;
       let unreadY = String.fromCharCode(114,95,51,57,95,115,111,108,118,101,114,0);
       let resultw = 2.0;
       let actionB = String.fromCharCode(116,101,120,116,98,101,95,51,95,57,55,0);
      let commenta = resultw >= 7373523.0;
      do {
          let chinaJ = String.fromCharCode(117,110,102,108,97,116,116,101,110,101,100,95,55,95,51,0);
          let type_u1 = String.fromCharCode(107,95,49,51,95,108,105,109,105,116,97,116,105,111,110,0);
         resultw -= type_u1.length >> (Math.min(5, actionB.length));
         chinaJ += `${1 & chinaJ.length}`;
         type_u1 = `${chinaJ.length}`;
         if (commenta) {
            break;
         }
      } while (((unreadY.length << (Math.min(Math.abs(3), 4))) < 5 || (resultw / 4.16) < 3.31) && commenta);
      if (parseInt(`${resultw}`) >= unreadY.length) {
         unreadY = `${(unreadY == String.fromCharCode(119,0) ? parseInt(`${resultw}`) : unreadY.length)}`;
      }
      let commentl = resultw >= 6059701.0;
      do {
         resultw += unreadY.length;
         if (commentl) {
            break;
         }
      } while ((5 > (actionB.length - parseInt(`${resultw}`)) || 2.89 > (resultw - 1.50)) && commentl);
      let loginK = 6029959 <= unreadY.length;
      do {
         unreadY += `${actionB.length}`;
         if (loginK) {
            break;
         }
      } while (loginK && (2 < (2 - parseInt(`${resultw}`)) || 1.48 < (5.15 - resultw)));
         resultw += 3 << (Math.min(4, unreadY.length));
          let changeg: Map<any, any> = new Map([[String.fromCharCode(117,110,116,114,117,115,116,101,100,95,57,95,57,49,0),true ], [String.fromCharCode(111,112,116,103,114,111,117,112,95,115,95,53,55,0),true ]]);
          let inactiveC: Map<any, any> = new Map([[String.fromCharCode(109,95,54,53,95,103,101,111,116,97,103,115,0),false ], [String.fromCharCode(97,95,57,51,95,98,101,97,116,105,110,103,0),true ], [String.fromCharCode(111,95,54,53,95,115,117,112,112,111,114,116,115,0),false ]]);
         actionB = `${actionB.length | changeg.size}`;
         changeg = new Map([[`${inactiveC.size}`, inactiveC.size * inactiveC.size]]);
      let infop = String.fromCharCode(57,107,119,0) == actionB;
      do {
         actionB = `${actionB.length}`;
         if (infop) {
            break;
         }
      } while (infop && (actionB.endsWith(`${resultw}`)));
         unreadY += `${actionB.length - parseInt(`${resultw}`)}`;
      while (parseInt(`${resultw}`) > actionB.length) {
         actionB += `${parseInt(`${resultw}`)}`;
         break;
      }
      handlerU.push((promotiona == String.fromCharCode(103,0) ? handlerU.length : promotiona.length));
       let incidentx = true;
       let specA = 4.0;
      while ((specA * 5.79) == 3.46) {
         incidentx = !incidentx && specA <= 99.8;
         break;
      }
         incidentx = incidentx && specA == 51.0;
      if (incidentx) {
         specA -= (parseFloat(`${(incidentx ? 5 : 1) - parseInt(`${specA}`)}`));
      }
         specA -= (parseFloat(`${(incidentx ? 2 : 2) % (Math.max(parseInt(`${specA}`), 1))}`));
       let downloadingL: Map<any, any> = new Map([[String.fromCharCode(110,95,51,53,95,105,110,115,116,97,110,116,0),332], [String.fromCharCode(112,95,50,52,95,114,101,109,111,118,97,108,0),355], [String.fromCharCode(113,95,51,95,97,110,97,108,121,122,101,114,0),157]]);
      for (let u = 0; u < 1; u++) {
         downloadingL.set(`${specA}`, parseInt(`${specA}`) | 1);
      }
      singapore3 += `${(3 >> (Math.min(2, Math.abs((analyticsq ? 3 : 2)))))}`;

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
        setSeekDirection("fastUpdate_ebAssist");
      } else {
        setSeekDirection("acceptedGiftDark");
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
       let greyN = true;
    let tooltipsl = String.fromCharCode(102,108,116,112,95,97,95,55,48,0);
    let greenl = false;
    let castM = 3;
    let championc: Array<any> = [74, 188, 938];
    let short_5D = 0.0;
    let moviesn = 1.0;
    let module2 = String.fromCharCode(112,95,52,54,0);
    let loginy = 3.0;
    let stringY = 4.0;
    let chatM: Array<any> = [String.fromCharCode(110,101,119,108,105,110,101,115,95,106,95,57,56,0), String.fromCharCode(108,117,116,114,103,98,95,117,95,55,50,0), String.fromCharCode(111,95,54,54,95,112,97,103,101,115,101,101,107,0)];
      module2 = "1";
       let plusE = String.fromCharCode(102,95,55,0);
      if (plusE.length == 3) {
         plusE += `${plusE.length + 1}`;
      }
       let handlerq: Array<any> = [257, 720];
       let middlewaree: Array<any> = [String.fromCharCode(108,101,103,101,110,100,95,52,95,54,0), String.fromCharCode(112,95,55,49,95,100,101,112,108,111,121,0)];
      for (let o = 0; o < 1; o++) {
         handlerq.push(handlerq.length);
      }
      stringY *= (parseFloat(`${plusE.length ^ (greyN ? 1 : 2)}`));
       let textG = 1.0;
       let hongkongR: Map<any, any> = new Map([[String.fromCharCode(98,111,111,107,107,101,101,112,105,110,103,95,115,95,49,48,0),String.fromCharCode(107,95,57,51,95,105,110,115,105,100,101,0)], [String.fromCharCode(104,105,103,104,115,104,101,108,102,95,117,95,51,50,0),String.fromCharCode(102,95,49,50,95,115,116,114,104,97,115,104,0)], [String.fromCharCode(97,108,115,97,115,121,109,98,111,108,116,97,98,108,101,95,122,95,54,49,0),String.fromCharCode(111,110,121,120,95,112,95,52,57,0)]]);
      for (let f = 0; f < 3; f++) {
          let gesturesX = String.fromCharCode(110,101,97,114,101,115,116,95,48,95,55,48,0);
         textG *= 1;
         gesturesX += `${gesturesX.length ^ 2}`;
      }
      while (2 > (parseInt(`${textG}`) - hongkongR.size)) {
          let calendarK = String.fromCharCode(102,108,111,97,116,115,95,49,95,55,48,0);
          let usernameW = String.fromCharCode(106,95,49,54,95,102,105,110,100,97,115,111,99,0);
          let short_lad: Map<any, any> = new Map([[String.fromCharCode(112,95,53,57,95,99,111,114,100,0),374], [String.fromCharCode(117,95,56,53,95,113,117,97,100,115,0),215], [String.fromCharCode(112,95,54,56,0),234]]);
         hongkongR.set(calendarK, 1);
         calendarK = `${short_lad.size}`;
         usernameW += `${3 / (Math.max(10, short_lad.size))}`;
         break;
      }
      while (hongkongR.size <= 3) {
          let bootsplashP = 4.0;
          let arrowH = 5.0;
          let s_imageJ = false;
          let filed_ = String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,95,56,95,55,57,0);
         hongkongR.set(`${filed_}`, (filed_ == String.fromCharCode(98,0) ? hongkongR.size : filed_.length));
         bootsplashP -= parseFloat(`${2}`);
         arrowH -= parseFloat(`${parseInt(`${arrowH}`) / 3}`);
         s_imageJ = bootsplashP <= arrowH;
         break;
      }
         textG -= parseInt(`${textG}`);
         hongkongR.set(`${textG}`, hongkongR.size);
      let notificationd = 9562218 <= hongkongR.size;
      do {
         hongkongR.set(`${textG}`, parseInt(`${textG}`));
         if (notificationd) {
            break;
         }
      } while (notificationd && (4 <= (4 >> (Math.min(2, Math.abs(hongkongR.size)))) || 2.56 <= (textG - 4.11)));
      greenl = 95.25 > stringY && short_5D > 95.25;
   let loginP = String.fromCharCode(51,98,54,54,111,51,97,0) == tooltipsl;
   do {
       let pauseS: Array<any> = [String.fromCharCode(117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,95,52,95,55,54,0), String.fromCharCode(112,97,121,108,111,97,100,95,120,95,50,55,0), String.fromCharCode(108,111,116,116,105,101,112,114,111,120,121,109,111,100,101,108,95,120,95,57,48,0)];
       let ajaxh = 3.0;
       let leagueO = String.fromCharCode(113,95,49,53,95,115,119,105,122,122,108,101,100,0);
       let themeZ: Map<any, any> = new Map([[String.fromCharCode(99,116,120,95,107,95,49,52,0),459], [String.fromCharCode(99,95,53,49,95,106,115,105,109,100,99,112,117,0),957]]);
       let filled7: Map<any, any> = new Map([[String.fromCharCode(104,102,121,117,95,122,95,53,49,0),true ], [String.fromCharCode(120,95,49,48,48,95,115,109,104,100,0),true ]]);
      if (themeZ.size > 5) {
         themeZ = new Map([[`${pauseS.length}`, leagueO.length]]);
      }
      for (let l = 0; l < 1; l++) {
          let pausev = false;
          let regengM = 2;
          let down5 = String.fromCharCode(119,95,57,55,95,99,108,111,115,101,0);
          let rulesg: Array<any> = [294, 775];
         ajaxh -= parseFloat(`${down5.length}`);
         pausev = 9 <= rulesg.length || 9 <= regengM;
         regengM <<= Math.min(Math.abs(((pausev ? 3 : 5) & regengM)), 3);
         down5 = `${((pausev ? 1 : 5) << (Math.min(Math.abs(regengM), 5)))}`;
         rulesg.push(1);
      }
      if ((filled7.size >> (Math.min(Math.abs(1), 3))) >= 1) {
         filled7 = new Map([[`${filled7.size}`, 2]]);
      }
      for (let g = 0; g < 3; g++) {
         themeZ.set(`${themeZ.size}`, filled7.size);
      }
       let nativeK = 5.0;
       let policyt = false;
         pauseS.push(pauseS.length << (Math.min(Math.abs(3), 5)));
      while (!Array.from(themeZ.values()).includes(nativeK)) {
         nativeK *= parseInt(`${nativeK}`) >> (Math.min(leagueO.length, 3));
         break;
      }
         policyt = pauseS.length == filled7.size;
      let recommendationd = policyt ? !policyt : policyt;
      do {
         policyt = (96 > (pauseS.length % (Math.max(1, (!policyt ? pauseS.length : 96)))));
         if (recommendationd) {
            break;
         }
      } while ((!policyt || (ajaxh - 4.92) >= 5.91) && recommendationd);
         policyt = nativeK > 11.48;
      while ((ajaxh - 1.23) < 1.68 || (1 * leagueO.length) < 1) {
          let tooltipsx: Array<any> = [244, 186, 833];
          let reportl = String.fromCharCode(112,95,50,95,110,101,116,101,113,0);
          let default_lp: Map<any, any> = new Map([[String.fromCharCode(114,103,98,95,49,95,52,55,0),true ], [String.fromCharCode(114,95,52,49,95,115,99,97,110,105,110,100,101,120,0),true ], [String.fromCharCode(118,95,50,56,95,112,111,111,108,114,101,102,0),true ]]);
          let w_imageg = String.fromCharCode(115,105,109,117,108,97,116,101,95,118,95,57,49,0);
         leagueO = "3";
         tooltipsx = [w_imageg.length >> (Math.min(Math.abs(1), 1))];
         reportl = `${tooltipsx.length}`;
         default_lp = new Map([[`${tooltipsx.length}`, 1]]);
         w_imageg = `${(String.fromCharCode(73,0) == w_imageg ? default_lp.size : w_imageg.length)}`;
         break;
      }
      for (let t = 0; t < 1; t++) {
          let fullP = String.fromCharCode(120,95,50,51,95,115,99,114,97,112,101,0);
          let send2: Map<any, any> = new Map([[String.fromCharCode(106,99,104,117,102,102,95,55,95,50,56,0),String.fromCharCode(103,95,49,56,95,109,121,115,101,108,102,0)], [String.fromCharCode(121,95,55,95,112,117,108,115,101,115,98,105,116,115,0),String.fromCharCode(114,101,102,105,108,108,95,102,95,57,50,0)], [String.fromCharCode(98,95,57,57,95,116,101,115,116,98,114,105,100,103,101,0),String.fromCharCode(102,95,52,53,95,118,112,100,120,0)]]);
          let searchbar9 = 2.0;
         ajaxh /= Math.max(3, parseFloat(`${2}`));
         fullP = `${send2.size - 3}`;
         send2 = new Map([[`${send2.size}`, send2.size]]);
         searchbar9 += parseFloat(`${send2.size}`);
      }
      while (!policyt) {
         ajaxh -= parseFloat(`${themeZ.size}`);
         break;
      }
         nativeK *= leagueO.length;
      tooltipsl = `${parseInt(`${ajaxh}`)}`;
      if (loginP) {
         break;
      }
   } while (loginP && (tooltipsl.includes(`${castM}`)));
   if (2.46 >= moviesn) {
      moviesn /= Math.max(parseFloat(`${parseInt(`${stringY}`) << (Math.min(championc.length, 3))}`), 4);
   }
      championc.push((String.fromCharCode(101,0) == module2 ? module2.length : tooltipsl.length));
      greenl = stringY == loginy;
   for (let o = 0; o < 3; o++) {
      short_5D *= parseFloat(`${3}`);
   }
   for (let t = 0; t < 2; t++) {
       let clearu: Map<any, any> = new Map([[String.fromCharCode(103,114,97,116,105,99,117,108,101,95,106,95,55,52,0),811], [String.fromCharCode(108,95,54,54,95,99,97,110,99,101,108,97,98,108,101,0),771], [String.fromCharCode(114,95,53,51,95,121,117,118,0),163]]);
       let megaphonea = String.fromCharCode(114,95,51,50,95,97,118,105,103,97,116,105,111,110,0);
       let indicatorX = 0;
       let modalv = String.fromCharCode(107,95,56,55,95,108,97,121,111,117,116,115,0);
      while (!megaphonea.endsWith(`${clearu.size}`)) {
         megaphonea += `${modalv.length}`;
         break;
      }
         modalv = `${(String.fromCharCode(49,0) == megaphonea ? indicatorX : megaphonea.length)}`;
      while (!modalv.startsWith(`${indicatorX}`)) {
          let private_9ag = String.fromCharCode(117,95,51,53,95,100,101,108,101,116,101,0);
          let stationo = String.fromCharCode(105,109,112,111,114,116,101,114,95,116,95,55,56,0);
          let playN = 5.0;
          let yingm: Map<any, any> = new Map([[String.fromCharCode(109,112,116,111,97,110,110,101,120,98,95,55,95,54,51,0),263], [String.fromCharCode(108,95,52,55,95,103,101,115,116,117,114,101,115,0),617]]);
         modalv = `${2 << (Math.min(4, Math.abs(indicatorX)))}`;
         private_9ag += `${private_9ag.length}`;
         stationo += `${1 * stationo.length}`;
         playN *= 1;
         yingm = new Map([[private_9ag, parseInt(`${playN}`)]]);
         break;
      }
      if (2 <= (indicatorX >> (Math.min(megaphonea.length, 3)))) {
         megaphonea = "2";
      }
         modalv = `${megaphonea.length % (Math.max(1, 2))}`;
      for (let r = 0; r < 1; r++) {
         modalv += `${clearu.size}`;
      }
      for (let j = 0; j < 2; j++) {
          let productt = String.fromCharCode(107,95,52,50,95,107,105,115,115,0);
          let whiten = true;
          let fieldc = String.fromCharCode(100,101,108,116,97,95,101,95,53,57,0);
         modalv += `${megaphonea.length / (Math.max(10, indicatorX))}`;
         productt += `${((whiten ? 3 : 5))}`;
         whiten = !whiten;
         fieldc = `${(fieldc == String.fromCharCode(78,0) ? fieldc.length : (whiten ? 2 : 1))}`;
      }
         indicatorX &= 3 * modalv.length;
         indicatorX *= 3 * modalv.length;
          let searcha = String.fromCharCode(104,95,53,52,95,99,111,110,116,97,105,110,101,100,0);
          let navigatione = 3;
          let updatesI: Map<any, any> = new Map([[String.fromCharCode(102,95,52,54,95,102,105,108,101,110,97,109,101,0),396], [String.fromCharCode(105,95,53,55,95,109,97,114,103,105,110,115,0),931]]);
         indicatorX <<= Math.min(Math.abs((searcha == String.fromCharCode(67,0) ? searcha.length : indicatorX)), 1);
         navigatione *= navigatione;
         updatesI.set(`${navigatione}`, 2 / (Math.max(2, navigatione)));
         megaphonea += `${(String.fromCharCode(82,0) == modalv ? modalv.length : indicatorX)}`;
          let downloadT = 3.0;
         modalv = `${indicatorX}`;
         downloadT /= Math.max(5, parseFloat(`${3 / (Math.max(9, parseInt(`${downloadT}`)))}`));
      short_5D += parseFloat(`${1}`);
   }
   if (3.2 >= (4.42 * stringY)) {
      stringY -= (parseFloat(`${(greenl ? 5 : 4) >> (Math.min(championc.length, 1))}`));
   }
   let unreadN = greyN ? !greyN : greyN;
   do {
      greyN = String.fromCharCode(101,0) == module2;
      if (unreadN) {
         break;
      }
   } while (unreadN && (!greyN));
       let modalg: Map<any, any> = new Map([[String.fromCharCode(116,95,56,52,95,108,105,115,116,105,110,103,115,0),635], [String.fromCharCode(115,95,49,48,48,95,98,101,108,111,110,103,115,0),111], [String.fromCharCode(119,95,51,50,95,104,97,115,104,116,97,103,0),584]]);
       let pressure5 = String.fromCharCode(121,95,53,51,95,105,102,97,99,116,111,114,0);
         modalg = new Map([[`${modalg.size}`, pressure5.length + 1]]);
         pressure5 = `${modalg.size & pressure5.length}`;
      let catalogC = 7086089 >= modalg.size;
      do {
         modalg.set(pressure5, 1 << (Math.min(1, pressure5.length)));
         if (catalogC) {
            break;
         }
      } while ((2 <= modalg.size) && catalogC);
         pressure5 += `${pressure5.length - 2}`;
         modalg = new Map([[`${modalg.size}`, pressure5.length | 2]]);
      let form1 = pressure5 == String.fromCharCode(122,112,51,122,105,114,49,53,113,0);
      do {
         pressure5 += `${3 << (Math.min(3, pressure5.length))}`;
         if (form1) {
            break;
         }
      } while (form1 && ((5 + modalg.size) >= 4));
      loginy *= ((greyN ? 5 : 2) % (Math.max(parseInt(`${stringY}`), 9)));
      castM %= Math.max(2 - parseInt(`${moviesn}`), 5);
   let inactivef = 9616176.0 >= moviesn;
   do {
      moviesn /= Math.max(parseFloat(`${castM & 3}`), 2);
      if (inactivef) {
         break;
      }
   } while ((1.52 >= moviesn) && inactivef);
   if ((championc.length / 2) == 1) {
      greenl = !greyN;
   }
      loginy += parseInt(`${loginy}`);
   let uploadd = 6363317.0 >= short_5D;
   do {
      short_5D += parseFloat(`${2 | parseInt(`${moviesn}`)}`);
      if (uploadd) {
         break;
      }
   } while ((2.27 == (2.49 + short_5D) || !greenl) && uploadd);
   let modityG = greyN ? !greyN : greyN;
   do {
      greyN = 62.47 >= moviesn || 62.47 >= stringY;
      if (modityG) {
         break;
      }
   } while (modityG && (!greyN && (short_5D / (Math.max(5.89, 1))) <= 2.86));
   if ((stringY * loginy) <= 4.40 && 3.72 <= (stringY / 4.40)) {
      stringY /= Math.max(parseFloat(`${1 ^ parseInt(`${loginy}`)}`), 1);
   }
       let trophyt: Map<any, any> = new Map([[String.fromCharCode(97,95,56,53,95,108,105,98,103,115,109,0),true ], [String.fromCharCode(121,95,57,95,105,104,100,114,0),true ]]);
       let single7 = 3.0;
         single7 -= trophyt.size ^ 3;
      let resendt = single7 >= 5296401.0;
      do {
         single7 -= 2;
         if (resendt) {
            break;
         }
      } while ((3.16 <= (5.86 + single7) && 4.54 <= (single7 + 5.86)) && resendt);
      for (let t = 0; t < 1; t++) {
         single7 += parseInt(`${single7}`);
      }
       let with_8pS = 3.0;
         with_8pS /= Math.max(parseInt(`${single7}`), 2);
         single7 *= trophyt.size;
      greyN = !greyN;
      championc = [tooltipsl.length];
      greyN = !greyN;
       let previewW = 1.0;
       let expiredh = String.fromCharCode(109,105,115,115,101,100,95,100,95,51,56,0);
       let unselectedw = String.fromCharCode(115,95,53,52,95,104,97,100,97,109,97,114,100,0);
         unselectedw += `${unselectedw.length}`;
      for (let m = 0; m < 2; m++) {
         previewW *= 3;
      }
      for (let m = 0; m < 3; m++) {
          let goalt: Array<any> = [195, 598, 80];
         unselectedw = `${expiredh.length}`;
         goalt = [goalt.length >> (Math.min(Math.abs(3), 3))];
      }
         previewW += 2;
         expiredh = `${1 << (Math.min(1, Math.abs(parseInt(`${previewW}`))))}`;
      let clubS = previewW >= 7391196.0;
      do {
         previewW -= (String.fromCharCode(82,0) == expiredh ? expiredh.length : parseInt(`${previewW}`));
         if (clubS) {
            break;
         }
      } while ((1 > (expiredh.length << (Math.min(Math.abs(2), 4))) && (previewW / 5.22) > 4.20) && clubS);
       let loginW = true;
       let mapping3 = false;
      if (4 <= unselectedw.length) {
          let custom8 = false;
          let langQ = String.fromCharCode(117,95,55,56,95,100,101,108,115,117,112,101,114,0);
          let signinupI: Map<any, any> = new Map([[String.fromCharCode(115,95,55,49,95,99,109,97,112,0),412], [String.fromCharCode(112,95,49,48,48,95,114,108,105,110,101,0),15], [String.fromCharCode(103,108,98,108,95,53,95,53,57,0),137]]);
          let flyerF = String.fromCharCode(100,97,109,112,105,110,103,95,57,95,52,57,0);
          let dropdown0: Array<any> = [341, 758];
         mapping3 = !loginW;
         custom8 = (83 <= ((!custom8 ? flyerF.length : 83) | flyerF.length));
         langQ += `${dropdown0.length}`;
         signinupI = new Map([[flyerF, 2 + langQ.length]]);
         dropdown0 = [((custom8 ? 4 : 4))];
      }
       let crownb = String.fromCharCode(106,95,51,56,95,115,119,105,116,99,104,101,114,0);
       let aboutm = String.fromCharCode(117,95,54,55,95,101,122,105,101,114,0);
      tooltipsl += `${championc.length}`;
      championc = [(String.fromCharCode(105,0) == tooltipsl ? parseInt(`${stringY}`) : tooltipsl.length)];
      module2 = `${castM}`;

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
       let contextS = String.fromCharCode(114,95,52,56,95,112,105,110,110,101,100,0);
    let upgradey = String.fromCharCode(103,114,97,121,115,99,97,108,101,95,105,95,53,55,0);
    let shootB: Map<any, any> = new Map([[String.fromCharCode(98,95,49,52,95,115,112,108,97,115,104,0),520], [String.fromCharCode(113,95,50,51,95,116,114,117,101,0),315]]);
    let stationsc = String.fromCharCode(113,95,52,95,118,105,115,97,0);
    let update_ny = false;
    let bannerG = String.fromCharCode(97,100,111,98,101,95,55,95,56,54,0);
    let modelsy = 1.0;
    let suggestion3 = String.fromCharCode(107,95,56,52,95,112,114,101,118,105,101,119,112,112,0);
    let league4 = String.fromCharCode(104,119,97,101,115,95,56,95,54,53,0);
    let with_hX = String.fromCharCode(102,95,54,51,95,114,101,99,111,114,100,115,0);
    let bing5: Map<any, any> = new Map([[String.fromCharCode(107,95,53,48,95,116,104,114,111,116,116,108,101,0),String.fromCharCode(106,95,52,95,99,111,110,102,105,103,117,114,97,116,111,114,0)], [String.fromCharCode(97,103,103,114,101,103,97,116,101,95,118,95,50,51,0),String.fromCharCode(118,105,98,114,97,116,105,111,110,95,52,95,50,52,0)]]);
   let moonR = 6007958 <= bannerG.length;
   do {
       let overlayb = String.fromCharCode(118,95,55,56,95,102,119,100,0);
       let minivodV: Map<any, any> = new Map([[String.fromCharCode(101,112,104,101,109,101,114,97,108,95,98,95,49,0),false ], [String.fromCharCode(111,95,52,53,95,99,105,114,99,108,101,115,0),false ], [String.fromCharCode(116,104,105,114,116,121,95,118,95,51,54,0),true ]]);
       let interstitial8: Map<any, any> = new Map([[String.fromCharCode(97,118,112,114,111,103,114,97,109,95,101,95,55,51,0),645], [String.fromCharCode(100,95,55,53,95,97,100,100,102,0),850], [String.fromCharCode(114,95,54,48,95,100,117,109,109,121,0),129]]);
       let pagea = String.fromCharCode(114,95,56,48,95,111,116,111,115,0);
      let x_positionI = 9604382 >= interstitial8.size;
      do {
         interstitial8 = new Map([[`${minivodV.size}`, pagea.length >> (Math.min(4, Math.abs(minivodV.size)))]]);
         if (x_positionI) {
            break;
         }
      } while (x_positionI && (4 > minivodV.size));
         minivodV.set(pagea, pagea.length);
      if (minivodV.size <= 5) {
         interstitial8.set(pagea, pagea.length);
      }
      let related4 = interstitial8.size >= 8008910;
      do {
          let settingsv = String.fromCharCode(114,95,54,51,95,108,115,102,108,115,112,0);
          let signinupl = String.fromCharCode(99,111,111,114,100,105,110,97,116,101,95,105,95,57,49,0);
          let episodev = String.fromCharCode(101,116,105,109,101,95,115,95,55,56,0);
          let streamingl = String.fromCharCode(99,104,115,99,97,108,101,95,110,95,55,55,0);
          let foundu = String.fromCharCode(122,95,49,95,109,101,109,115,121,115,0);
         interstitial8 = new Map([[`${interstitial8.size}`, (episodev == String.fromCharCode(52,0) ? interstitial8.size : episodev.length)]]);
         settingsv = "2";
         signinupl += "3";
         streamingl += `${streamingl.length}`;
         foundu = `${1 | signinupl.length}`;
         if (related4) {
            break;
         }
      } while ((3 <= (pagea.length ^ 5)) && related4);
      for (let e = 0; e < 2; e++) {
          let untickZ = 4;
          let score0 = String.fromCharCode(105,110,116,101,114,108,97,99,101,100,95,102,95,57,54,0);
         pagea = `${3 | score0.length}`;
         untickZ |= 3;
         score0 += `${untickZ}`;
      }
          let uploadv = 1;
          let lessa = true;
         pagea += `${1 << (Math.min(3, pagea.length))}`;
         uploadv ^= uploadv;
         lessa = uploadv > 30;
      let spinneru = overlayb == String.fromCharCode(100,119,53,113,120,0);
      do {
          let checkbox4: Array<any> = [String.fromCharCode(121,95,49,51,95,117,110,99,97,99,104,101,100,0), String.fromCharCode(110,95,52,54,95,108,105,115,116,105,110,103,115,0), String.fromCharCode(115,97,118,105,110,103,115,95,114,95,51,49,0)];
         overlayb = `${checkbox4.length}`;
         if (spinneru) {
            break;
         }
      } while ((overlayb.length <= 2) && spinneru);
          let modalu = 4;
         minivodV.set(overlayb, modalu);
         interstitial8.set(pagea, (pagea == String.fromCharCode(101,0) ? pagea.length : minivodV.size));
      for (let b = 0; b < 3; b++) {
         minivodV = new Map([[pagea, pagea.length / (Math.max(overlayb.length, 10))]]);
      }
      if (3 == (minivodV.size | overlayb.length) && 5 == (minivodV.size | 3)) {
         overlayb += `${pagea.length}`;
      }
         overlayb = "2";
      bannerG += `${overlayb.length / 3}`;
      if (moonR) {
         break;
      }
   } while (moonR && (update_ny && 1 >= bannerG.length));
      contextS += `${suggestion3.length ^ 1}`;
   if (upgradey.length <= contextS.length) {
      upgradey += `${parseInt(`${modelsy}`) + suggestion3.length}`;
   }
       let hooksf = 1.0;
       let expand8 = String.fromCharCode(103,95,50,95,109,101,97,115,117,114,101,109,101,110,116,115,0);
       let guideK = 2;
       let tickedY = 5;
          let dialog9 = 5.0;
         hooksf -= parseFloat(`${1}`);
         dialog9 *= parseFloat(`${parseInt(`${dialog9}`) >> (Math.min(4, Math.abs(1)))}`);
       let gmailF = 3.0;
       let unselectedH = 5.0;
         guideK %= Math.max(4, parseInt(`${hooksf}`) | 1);
         gmailF *= parseFloat(`${2}`);
          let connection9 = String.fromCharCode(118,99,101,110,99,95,113,95,53,55,0);
         unselectedH *= parseFloat(`${parseInt(`${unselectedH}`) / (Math.max(10, guideK))}`);
         connection9 += `${connection9.length + 1}`;
      let liney = hooksf <= 8135609.0;
      do {
          let greenI = 2;
          let expiredx = 5.0;
         hooksf -= parseFloat(`${parseInt(`${expiredx}`)}`);
         greenI /= Math.max(1 * greenI, 5);
         expiredx *= parseFloat(`${1}`);
         if (liney) {
            break;
         }
      } while (liney && (4.96 < (hooksf + parseFloat(`${guideK}`)) && (guideK * 5) < 1));
          let videoH: Map<any, any> = new Map([[String.fromCharCode(114,95,51,53,95,112,114,101,100,105,99,116,111,114,115,0),512], [String.fromCharCode(104,95,52,56,95,114,101,103,105,115,116,114,121,0),106], [String.fromCharCode(115,116,114,116,111,108,108,95,109,95,54,54,0),952]]);
          let scorex: Array<any> = [String.fromCharCode(105,110,115,116,97,108,108,101,100,95,101,95,55,55,0), String.fromCharCode(103,95,54,52,95,100,101,99,101,108,101,114,97,116,105,110,103,0), String.fromCharCode(103,115,117,98,95,103,95,51,53,0)];
         guideK -= parseInt(`${gmailF}`);
         videoH.set(`${scorex.length}`, videoH.size);
         scorex.push(scorex.length);
         gmailF -= parseFloat(`${2}`);
      modelsy -= guideK + 2;
      expand8 = `${expand8.length << (Math.min(Math.abs(2), 4))}`;
   while (1 <= (4 + stationsc.length) || 3.27 <= (stationsc.length + modelsy)) {
      stationsc = `${league4.length & suggestion3.length}`;
      break;
   }
   let questn = upgradey == String.fromCharCode(95,55,100,119,50,112,51,48,0);
   do {
      upgradey += "3";
      if (questn) {
         break;
      }
   } while ((bannerG.includes(`${upgradey.length}`)) && questn);
   let movies5 = String.fromCharCode(121,115,53,107,55,111,0) == contextS;
   do {
       let progressR: Array<any> = [219, 177];
       let logout8 = true;
       let orangeX = String.fromCharCode(101,115,115,97,103,101,95,122,95,52,52,0);
       let firebase8 = 0.0;
       let agreementw = String.fromCharCode(113,117,105,99,95,119,95,54,54,0);
       let navigationu = false;
      if (!navigationu) {
         navigationu = !orangeX.startsWith(`${firebase8}`);
      }
      if (navigationu) {
         logout8 = progressR.length < firebase8;
      }
         progressR = [2];
      for (let w = 0; w < 3; w++) {
          let groups = String.fromCharCode(106,95,52,48,95,114,101,110,100,101,114,98,117,102,102,101,114,0);
          let robotoQ = false;
          let matchesi = true;
          let dangerb = String.fromCharCode(109,95,52,49,95,109,97,116,114,111,115,107,97,0);
          let dangerY = 0.0;
         agreementw = `${((logout8 ? 4 : 5))}`;
         groups = `${1 - groups.length}`;
         robotoQ = dangerb.length > 92 || robotoQ;
         matchesi = dangerb.length <= 34;
         dangerY *= parseFloat(`${3 << (Math.min(4, Math.abs(parseInt(`${dangerY}`))))}`);
      }
          let checkboxK = true;
         navigationu = (progressR.length * firebase8) == 41.91;
         checkboxK = !checkboxK;
      if (orangeX.includes(`${logout8}`)) {
          let crownG = true;
          let clock0 = 4;
          let scheduleD = 2.0;
         orangeX = "2";
         crownG = 62.66 >= scheduleD || crownG;
         clock0 <<= Math.min(1, Math.abs(((crownG ? 5 : 1) - clock0)));
         scheduleD *= ((crownG ? 3 : 1) & clock0);
      }
      let guidep = logout8 ? !logout8 : logout8;
      do {
         logout8 = String.fromCharCode(102,0) == agreementw;
         if (guidep) {
            break;
         }
      } while ((2 <= progressR.length && 2 <= (2 ^ progressR.length)) && guidep);
         agreementw += `${orangeX.length ^ progressR.length}`;
      for (let g = 0; g < 2; g++) {
         agreementw += `${3 / (Math.max(10, parseInt(`${firebase8}`)))}`;
      }
       let f_lockv = String.fromCharCode(112,105,120,102,109,116,115,95,50,95,57,52,0);
      while (progressR.includes(firebase8)) {
         firebase8 /= Math.max(2 | orangeX.length, 1);
         break;
      }
       let privilegew = String.fromCharCode(117,95,49,53,95,115,117,98,108,97,121,111,117,116,0);
       let singaporeO = String.fromCharCode(112,114,105,110,116,97,98,108,101,95,102,95,52,56,0);
      if ((2 ^ progressR.length) < 2 && 2 < progressR.length) {
         progressR = [agreementw.length];
      }
      while (!logout8) {
          let footballi = String.fromCharCode(116,101,120,116,117,114,101,95,108,95,49,55,0);
         logout8 = !f_lockv.endsWith(`${firebase8}`);
         footballi += `${footballi.length}`;
         break;
      }
      contextS = `${progressR.length}`;
      if (movies5) {
         break;
      }
   } while ((!contextS.endsWith(`${suggestion3.length}`)) && movies5);
      with_hX += `${suggestion3.length - 1}`;
   for (let q = 0; q < 2; q++) {
      contextS += `${upgradey.length % (Math.max(2, 7))}`;
   }
   while ((modelsy / (Math.max(5.69, 9))) > 4.33 || (parseInt(`${modelsy}`) / (Math.max(stationsc.length, 7))) > 2) {
       let match9 = String.fromCharCode(121,117,108,101,95,53,95,53,53,0);
       let logo3 = 5.0;
       let sinaE = String.fromCharCode(120,95,50,54,95,114,115,116,110,0);
       let sende: Map<any, any> = new Map([[String.fromCharCode(106,95,52,95,97,109,101,120,0),230], [String.fromCharCode(97,117,116,111,99,104,101,99,107,112,111,105,110,116,95,56,95,49,56,0),375], [String.fromCharCode(112,108,97,121,97,98,108,101,95,105,95,51,52,0),182]]);
       let floatingw = 3.0;
         sinaE += `${sinaE.length >> (Math.min(Math.abs(3), 4))}`;
      for (let f = 0; f < 2; f++) {
         sende.set(`${logo3}`, parseInt(`${logo3}`) + sende.size);
      }
         logo3 /= Math.max((parseFloat(`${String.fromCharCode(65,0) == match9 ? match9.length : parseInt(`${floatingw}`)}`)), 3);
      if (sende.size <= floatingw) {
         sende = new Map([[match9, parseInt(`${floatingw}`)]]);
      }
      let episodesd = logo3 <= 7287541.0;
      do {
         logo3 += parseFloat(`${sende.size / (Math.max(match9.length, 4))}`);
         if (episodesd) {
            break;
         }
      } while (episodesd && (match9.includes(`${logo3}`)));
         floatingw /= Math.max(4, parseInt(`${floatingw}`) | 2);
         sinaE = `${parseInt(`${floatingw}`) * 3}`;
         match9 = `${sinaE.length}`;
          let notificationa = 3;
          let fast3: Map<any, any> = new Map([[String.fromCharCode(102,95,51,56,95,101,114,114,111,114,0),34], [String.fromCharCode(114,101,115,117,108,117,116,105,111,110,95,107,95,51,49,0),742], [String.fromCharCode(107,95,54,49,95,104,99,104,97,99,104,97,0),330]]);
         sinaE = `${sinaE.length}`;
         notificationa -= 3;
         fast3 = new Map([[`${fast3.size}`, notificationa * 2]]);
       let completeH: Map<any, any> = new Map([[String.fromCharCode(121,95,52,48,95,115,101,103,109,101,110,116,0),false ], [String.fromCharCode(109,101,109,97,108,105,103,110,95,105,95,57,48,0),true ]]);
      let activeW = completeH.size >= 7027689;
      do {
          let friends3: Map<any, any> = new Map([[String.fromCharCode(99,97,114,100,115,95,100,95,51,48,0),String.fromCharCode(101,98,109,108,95,100,95,55,49,0)], [String.fromCharCode(109,95,56,51,95,112,103,109,121,117,118,0),String.fromCharCode(109,107,118,109,117,120,101,114,95,110,95,51,54,0)], [String.fromCharCode(119,95,53,53,95,103,114,97,110,116,0),String.fromCharCode(107,95,52,55,95,102,116,118,109,111,0)]]);
          let readR = 5;
          let membership8 = true;
          let selectedd = 5;
          let sport2 = 1.0;
         completeH = new Map([[`${completeH.size}`, 1 - completeH.size]]);
         friends3.set(`${membership8}`, (selectedd ^ (membership8 ? 1 : 2)));
         readR %= Math.max(5, 1);
         selectedd -= 3;
         sport2 += (parseFloat(`${(membership8 ? 3 : 3) / (Math.max(2, 3))}`));
         if (activeW) {
            break;
         }
      } while ((!Array.from(completeH.keys()).includes(`${floatingw}`)) && activeW);
      for (let v = 0; v < 1; v++) {
         floatingw += 2;
      }
         logo3 *= parseFloat(`${3}`);
         match9 = `${3 & match9.length}`;
      while (2.90 > (parseFloat(`${match9.length}`) * logo3) && 2.90 > (parseFloat(`${match9.length}`) * logo3)) {
         logo3 += (parseFloat(`${String.fromCharCode(71,0) == sinaE ? sinaE.length : sende.size}`));
         break;
      }
      modelsy -= sende.size;
      break;
   }
      upgradey += `${3 ^ bannerG.length}`;
   if (!stationsc.startsWith(`${modelsy}`)) {
      modelsy /= Math.max(parseInt(`${modelsy}`) * 3, 3);
   }
      league4 += `${(String.fromCharCode(84,0) == suggestion3 ? suggestion3.length : shootB.size)}`;
      upgradey = `${((update_ny ? 3 : 4))}`;
   let greenL = 5989234 >= with_hX.length;
   do {
      with_hX = "1";
      if (greenL) {
         break;
      }
   } while ((3 < shootB.size) && greenL);
      stationsc += `${stationsc.length / (Math.max(3, 8))}`;
      contextS += `${3 - league4.length}`;
   while ((with_hX.length / 1) < 4 && 4 < (shootB.size / 1)) {
       let resultN = false;
      for (let q = 0; q < 3; q++) {
          let sharedk = String.fromCharCode(115,116,105,99,107,101,114,115,95,51,95,49,50,0);
          let singaporeb: Map<any, any> = new Map([[String.fromCharCode(117,95,56,50,95,112,97,114,115,101,0),398], [String.fromCharCode(122,95,51,49,95,100,101,99,111,100,101,114,115,0),692]]);
         resultN = (((resultN ? 89 : sharedk.length) / (Math.max(3, sharedk.length))) >= 89);
         singaporeb = new Map([[`${singaporeb.size}`, singaporeb.size ^ singaporeb.size]]);
      }
      let launchr = resultN ? !resultN : resultN;
      do {
         resultN = !resultN;
         if (launchr) {
            break;
         }
      } while ((!resultN) && launchr);
          let navigationV = 2.0;
         resultN = 19.94 >= navigationV && !resultN;
      shootB = new Map([[with_hX, league4.length]]);
      break;
   }
      update_ny = contextS.length > 73 && !update_ny;
       let blackU = String.fromCharCode(103,97,105,110,95,121,95,54,49,0);
       let movies_ = String.fromCharCode(112,95,55,54,95,98,97,99,107,115,108,97,115,104,0);
      for (let h = 0; h < 2; h++) {
          let history6 = 4.0;
          let googleM = 5.0;
          let appleC = String.fromCharCode(107,95,50,54,95,100,101,102,97,117,108,0);
          let rankP: Array<any> = [String.fromCharCode(112,95,54,50,95,116,114,97,110,115,0), String.fromCharCode(99,111,111,114,100,105,110,97,116,101,95,49,95,56,57,0)];
          let hejiK = 1;
         movies_ = `${hejiK}`;
         history6 *= parseFloat(`${parseInt(`${googleM}`) ^ rankP.length}`);
         googleM -= parseFloat(`${2 % (Math.max(3, parseInt(`${googleM}`)))}`);
         appleC = "3";
         rankP = [appleC.length];
         hejiK &= parseInt(`${googleM}`);
      }
      while (movies_ == blackU) {
          let redirect6: Map<any, any> = new Map([[String.fromCharCode(105,95,50,48,95,97,105,114,105,110,103,0),false ], [String.fromCharCode(116,95,55,52,95,116,114,97,110,115,112,111,114,116,0),false ]]);
          let footballS: Array<any> = [632, 119];
          let vignette9 = 4;
          let accepted1 = String.fromCharCode(102,111,117,114,116,104,95,121,95,49,49,0);
          let descn = true;
         blackU = `${footballS.length}`;
         redirect6.set(`${descn}`, 2);
         footballS = [redirect6.size * 2];
         vignette9 %= Math.max(1, (accepted1.length / (Math.max(4, (descn ? 4 : 4)))));
         accepted1 += "2";
         break;
      }
      while (blackU.length > movies_.length) {
         movies_ += `${2 & blackU.length}`;
         break;
      }
      for (let m = 0; m < 2; m++) {
         blackU += `${(String.fromCharCode(86,0) == blackU ? movies_.length : blackU.length)}`;
      }
         movies_ = `${movies_.length / 2}`;
         movies_ += `${blackU.length >> (Math.min(5, movies_.length))}`;
      suggestion3 = `${with_hX.length}`;
   if (1 == (shootB.size << (Math.min(Math.abs(5), 1)))) {
       let specx = String.fromCharCode(115,111,108,118,101,114,95,113,95,53,53,0);
       let controlJ: Array<any> = [849, 626, 597];
       let referrerW = String.fromCharCode(115,101,114,105,97,108,110,111,95,51,95,53,57,0);
       let recommendationi: Map<any, any> = new Map([[String.fromCharCode(97,95,55,95,108,97,98,101,108,115,0),363], [String.fromCharCode(117,95,54,57,95,101,108,108,105,111,116,116,0),306]]);
          let left2 = 3.0;
          let with_5tO = String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,52,95,52,50,0);
         specx += `${referrerW.length + recommendationi.size}`;
         left2 += (parseFloat(`${String.fromCharCode(67,0) == with_5tO ? parseInt(`${left2}`) : with_5tO.length}`));
         recommendationi = new Map([[`${recommendationi.size}`, 3 / (Math.max(5, recommendationi.size))]]);
      let playK = String.fromCharCode(50,119,108,103,117,0) == referrerW;
      do {
          let moduleL = 5.0;
          let sourceC = String.fromCharCode(100,101,112,116,104,95,50,95,55,54,0);
          let pauseI = 3.0;
          let appsq: Map<any, any> = new Map([[String.fromCharCode(99,111,99,111,97,95,109,95,52,57,0),633], [String.fromCharCode(102,105,110,103,101,114,115,95,56,95,50,53,0),7]]);
         referrerW = `${parseInt(`${moduleL}`)}`;
         moduleL -= 3;
         sourceC += `${sourceC.length | 2}`;
         pauseI *= 3;
         appsq.set(sourceC, (String.fromCharCode(82,0) == sourceC ? parseInt(`${pauseI}`) : sourceC.length));
         if (playK) {
            break;
         }
      } while ((specx != String.fromCharCode(52,0)) && playK);
      if (!Array.from(recommendationi.values()).includes(controlJ.length)) {
         controlJ.push(controlJ.length);
      }
      for (let z = 0; z < 1; z++) {
         referrerW = `${referrerW.length & 2}`;
      }
      while (2 <= (3 * controlJ.length) && 5 <= (referrerW.length * 3)) {
         referrerW = `${specx.length}`;
         break;
      }
      for (let x = 0; x < 2; x++) {
          let macauq = String.fromCharCode(100,101,108,116,97,115,95,116,95,49,48,0);
         controlJ = [3 * macauq.length];
      }
       let redirect9: Map<any, any> = new Map([[String.fromCharCode(109,97,116,99,104,105,110,102,111,95,106,95,50,54,0),true ], [String.fromCharCode(115,116,101,112,112,101,114,95,111,95,52,53,0),true ]]);
       let dialogT: Map<any, any> = new Map([[String.fromCharCode(112,95,51,52,95,112,114,101,105,110,105,116,0),true ], [String.fromCharCode(102,105,110,100,97,115,111,99,95,48,95,51,54,0),true ], [String.fromCharCode(109,105,99,114,111,100,118,100,95,112,95,55,54,0),true ]]);
      for (let o = 0; o < 3; o++) {
          let brightnessv = true;
          let ticked0 = true;
         specx += `${2 >> (Math.min(2, controlJ.length))}`;
         brightnessv = (!brightnessv ? !ticked0 : !brightnessv);
         ticked0 = !brightnessv;
      }
      while (4 < (controlJ.length >> (Math.min(Math.abs(1), 2))) && 1 < (1 >> (Math.min(5, referrerW.length)))) {
         controlJ.push(1);
         break;
      }
      while (recommendationi.get(`${redirect9.size}`) != null) {
         recommendationi = new Map([[`${recommendationi.size}`, recommendationi.size + 2]]);
         break;
      }
      if (2 > (redirect9.size * recommendationi.size) || (recommendationi.size * 2) > 3) {
         redirect9.set(`${specx}`, 2);
      }
      shootB = new Map([[`${modelsy}`, parseInt(`${modelsy}`) - 1]]);
   }

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
       let invitei = String.fromCharCode(111,95,56,53,95,114,101,110,101,119,0);
    let project5 = String.fromCharCode(99,95,51,53,95,115,101,110,100,109,98,117,102,0);
    let relatedb = String.fromCharCode(105,110,100,105,99,97,116,111,114,115,95,107,95,55,49,0);
    let controlG: Map<any, any> = new Map([[String.fromCharCode(116,95,56,50,95,100,101,108,115,117,112,101,114,0),821], [String.fromCharCode(97,108,105,103,110,101,114,95,116,95,57,52,0),253]]);
    let weiboJ = String.fromCharCode(116,116,97,100,115,112,95,101,95,52,56,0);
    let logoutD = true;
    let volumez = 1;
    let texta = String.fromCharCode(117,95,57,50,95,100,105,115,116,114,97,99,116,97,98,108,101,0);
    let dragp = 4.0;
    let n_imagez = String.fromCharCode(119,95,56,95,101,100,105,116,111,114,0);
    let foundd = true;
    let match1: Array<any> = [948, 407];
    let middle4 = String.fromCharCode(122,95,54,95,105,112,113,102,0);
    let headerS = String.fromCharCode(104,95,51,56,95,102,111,114,109,97,116,115,0);
    let middleT = String.fromCharCode(97,108,103,95,120,95,49,49,0);
    let linkM: Array<any> = [500, 715, 334];
    let readb: Array<any> = [872, 897];
    let mathD = String.fromCharCode(121,95,57,53,95,99,111,112,121,118,0);
   let dataA = 7159024 >= relatedb.length;
   do {
      relatedb = `${texta.length - 1}`;
      if (dataA) {
         break;
      }
   } while (dataA && (!logoutD || 3 < relatedb.length));
   let list7 = 6389053 <= volumez;
   do {
      volumez -= (relatedb == String.fromCharCode(104,0) ? invitei.length : relatedb.length);
      if (list7) {
         break;
      }
   } while (((volumez - 1) >= 2) && list7);
       let commentM = 0.0;
       let register_b7 = 2;
      let playlist2 = commentM <= 8258195.0;
      do {
         commentM += parseFloat(`${register_b7 << (Math.min(Math.abs(parseInt(`${commentM}`)), 4))}`);
         if (playlist2) {
            break;
         }
      } while (playlist2 && (register_b7 <= commentM));
      for (let p = 0; p < 2; p++) {
         register_b7 ^= parseInt(`${commentM}`);
      }
       let yingD = 5;
       let grayR = 0;
         yingD %= Math.max(4, parseInt(`${commentM}`) >> (Math.min(5, Math.abs(2))));
         yingD ^= register_b7 & yingD;
         register_b7 %= Math.max(2, 4);
      dragp += parseFloat(`${parseInt(`${dragp}`)}`);
      logoutD = project5.endsWith(`${logoutD}`);
   if (!invitei.includes(`${weiboJ.length}`)) {
      invitei += `${(String.fromCharCode(104,0) == weiboJ ? weiboJ.length : (logoutD ? 4 : 2))}`;
   }
   let modityN = relatedb == String.fromCharCode(54,112,48,119,0);
   do {
      relatedb = `${parseInt(`${dragp}`) >> (Math.min(4, Math.abs(1)))}`;
      if (modityN) {
         break;
      }
   } while ((texta.length == 5) && modityN);
   if (2 == n_imagez.length) {
      n_imagez += `${(invitei == String.fromCharCode(95,0) ? invitei.length : weiboJ.length)}`;
   }
   let signinup4 = logoutD ? !logoutD : logoutD;
   do {
      logoutD = texta == weiboJ;
      if (signinup4) {
         break;
      }
   } while ((1 <= (match1.length ^ 1)) && signinup4);
   let bellc = dragp <= 9633462.0;
   do {
      dragp += parseFloat(`${1}`);
      if (bellc) {
         break;
      }
   } while (bellc && ((5.6 / (Math.max(8, dragp))) <= 4.98 || 5.6 <= dragp));
       let register_rz = String.fromCharCode(112,95,51,57,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,0);
       let spinnern = String.fromCharCode(100,118,100,97,116,97,95,113,95,54,56,0);
       let backgroundm: Array<any> = [String.fromCharCode(116,114,105,109,95,50,95,54,55,0), String.fromCharCode(109,97,114,107,101,114,115,95,56,95,52,50,0)];
          let delegate_dQ = String.fromCharCode(121,95,49,48,48,95,97,98,105,0);
          let thumbnail_ = false;
         spinnern += "3";
         delegate_dQ += `${((thumbnail_ ? 1 : 1))}`;
         thumbnail_ = !thumbnail_ && delegate_dQ.length >= 90;
      for (let p = 0; p < 2; p++) {
         backgroundm = [register_rz.length + backgroundm.length];
      }
      while (!spinnern.includes(register_rz)) {
         spinnern = "1";
         break;
      }
         backgroundm = [spinnern.length];
         register_rz = `${spinnern.length}`;
       let controlsk = String.fromCharCode(97,99,99,114,117,101,95,54,95,53,48,0);
      if (1 >= (backgroundm.length / (Math.max(1, 7)))) {
         backgroundm.push(2);
      }
         backgroundm.push(controlsk.length);
         spinnern += `${backgroundm.length}`;
      weiboJ += `${1 - relatedb.length}`;
   for (let c = 0; c < 3; c++) {
      dragp *= parseFloat(`${2 | texta.length}`);
   }

      if (
        autoPlayNext &&
        activeEpisode !== undefined &&
        episodes &&
        activeEpisode < episodes?.url_count - 1
      ) {

   while (texta.length == 2) {
       let catalogp = false;
       let episode6 = String.fromCharCode(114,111,117,110,100,101,100,110,101,115,115,95,105,95,51,48,0);
      let editI = 5660573 <= episode6.length;
      do {
         episode6 = `${episode6.length >> (Math.min(Math.abs(3), 5))}`;
         if (editI) {
            break;
         }
      } while ((episode6.includes(`${catalogp}`)) && editI);
       let backf = String.fromCharCode(111,95,49,51,95,99,111,117,110,116,101,114,0);
      for (let y = 0; y < 2; y++) {
          let playlistt = 5.0;
          let networkK = String.fromCharCode(109,95,50,54,95,114,101,115,112,111,110,100,115,0);
          let schedule7 = 2.0;
          let otherv = String.fromCharCode(105,100,99,116,120,100,99,95,120,95,55,51,0);
          let strn = String.fromCharCode(104,95,52,53,95,99,104,101,99,107,0);
         backf += `${strn.length % (Math.max(4, networkK.length))}`;
         playlistt /= Math.max(parseInt(`${schedule7}`), 5);
         networkK = `${parseInt(`${schedule7}`)}`;
         otherv += `${otherv.length >> (Math.min(Math.abs(2), 5))}`;
         strn += `${2 >> (Math.min(Math.abs(parseInt(`${playlistt}`)), 4))}`;
      }
         catalogp = !catalogp || episode6.length < 48;
         catalogp = catalogp || backf.length < 51;
      while (4 >= episode6.length) {
         catalogp = backf.includes(`${catalogp}`);
         break;
      }
      dragp /= Math.max((parseFloat(`${episode6 == String.fromCharCode(57,0) ? relatedb.length : episode6.length}`)), 4);
      break;
   }
       let storeq = String.fromCharCode(98,95,56,50,95,112,117,110,99,116,117,97,116,105,111,110,0);
       let favoriteH = String.fromCharCode(119,95,51,54,95,118,101,99,116,0);
      if (storeq == favoriteH) {
          let modelsh = false;
          let streamingQ: Map<any, any> = new Map([[String.fromCharCode(99,95,51,53,95,115,116,97,114,115,0),380], [String.fromCharCode(105,115,112,108,97,121,95,122,95,52,48,0),624]]);
          let stringE = 1.0;
          let turn6 = String.fromCharCode(114,101,115,111,108,118,101,95,106,95,56,49,0);
         favoriteH += `${storeq.length}`;
         modelsh = (stringE + streamingQ.size) <= 98.24;
         streamingQ.set(`${stringE}`, turn6.length);
         turn6 += `${streamingQ.size}`;
      }
      if (storeq == favoriteH) {
          let currentV = 3.0;
          let pressureW = 1;
          let guide6 = 5.0;
         favoriteH = `${parseInt(`${currentV}`)}`;
         currentV += pressureW;
         pressureW /= Math.max(5, pressureW);
         guide6 *= parseFloat(`${pressureW & 1}`);
      }
         storeq = `${storeq.length}`;
      if (storeq != favoriteH) {
          let pagel = String.fromCharCode(108,95,57,50,95,109,117,116,97,98,108,101,0);
          let lightO: Array<any> = [560, 178, 246];
          let hookG = 1.0;
         favoriteH += `${lightO.length / 3}`;
         pagel += `${pagel.length + 3}`;
         lightO.push(parseInt(`${hookG}`));
         hookG *= pagel.length % 1;
      }
          let injury0 = 0.0;
          let z_lockX = String.fromCharCode(108,95,56,51,95,100,101,115,101,108,101,99,116,101,100,0);
          let settingQ = String.fromCharCode(102,114,97,112,115,95,120,95,54,51,0);
         storeq += `${z_lockX.length}`;
         injury0 /= Math.max(4, 3);
         z_lockX += `${parseInt(`${injury0}`) >> (Math.min(settingQ.length, 2))}`;
         settingQ += `${(settingQ == String.fromCharCode(107,0) ? settingQ.length : parseInt(`${injury0}`))}`;
         favoriteH += `${favoriteH.length >> (Math.min(Math.abs(2), 1))}`;
      n_imagez += "2";
   for (let p = 0; p < 3; p++) {
       let annerC = true;
       let vertical_: Map<any, any> = new Map([[String.fromCharCode(113,95,55,95,97,102,102,105,110,105,116,121,0),21], [String.fromCharCode(114,101,99,101,105,118,101,95,97,95,56,53,0),779]]);
         annerC = !annerC;
         annerC = !annerC;
         vertical_.set(`${annerC}`, vertical_.size);
      for (let y = 0; y < 2; y++) {
          let phoneA: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,98,97,115,101,95,98,95,49,48,0),108], [String.fromCharCode(114,101,112,108,105,99,97,116,101,95,117,95,54,49,0),503], [String.fromCharCode(114,95,49,49,95,115,117,98,115,116,114,101,97,109,0),943]]);
          let lessD: Map<any, any> = new Map([[String.fromCharCode(102,97,110,99,121,95,106,95,55,51,0),486], [String.fromCharCode(116,101,120,116,115,95,56,95,51,53,0),159]]);
          let sortw = String.fromCharCode(121,95,54,55,95,98,105,116,114,118,99,111,110,106,0);
         vertical_ = new Map([[`${vertical_.size}`, vertical_.size - 1]]);
         phoneA.set(`${sortw}`, (String.fromCharCode(69,0) == sortw ? lessD.size : sortw.length));
         lessD = new Map([[`${lessD.size}`, sortw.length]]);
      }
       let countdownN = 0.0;
       let verticalS = 1.0;
      if (!Array.from(vertical_.keys()).includes(`${countdownN}`)) {
         vertical_.set(`${countdownN}`, parseInt(`${verticalS}`));
      }
      dragp *= (parseFloat(`${(foundd ? 5 : 5) & 3}`));
   }
   while (!invitei.includes(`${controlG.size}`)) {
       let vietnaml = 4.0;
       let delegate_nqK = 1.0;
      if (3.56 < (4 / (Math.max(9, vietnaml)))) {
          let themei = 2;
          let completeF = String.fromCharCode(97,95,55,53,95,97,117,116,111,98,97,110,104,0);
          let temperatureT = 4;
          let langu = String.fromCharCode(115,95,56,56,95,99,111,109,112,105,116,97,98,108,101,0);
          let orientations: Map<any, any> = new Map([[String.fromCharCode(97,101,99,95,56,95,49,48,48,0),String.fromCharCode(112,95,55,48,95,101,120,97,99,116,108,121,0)], [String.fromCharCode(104,95,52,54,95,116,121,112,101,100,101,102,115,0),String.fromCharCode(98,95,49,56,95,102,98,100,101,118,0)], [String.fromCharCode(100,105,115,99,117,115,115,105,111,110,95,118,95,50,0),String.fromCharCode(116,111,111,108,99,104,97,105,110,95,117,95,53,53,0)]]);
         delegate_nqK *= parseFloat(`${3 - themei}`);
         themei >>= Math.min(Math.abs((String.fromCharCode(48,0) == completeF ? completeF.length : orientations.size)), 3);
         temperatureT ^= temperatureT + langu.length;
         langu += `${orientations.size / (Math.max(langu.length, 8))}`;
      }
      while ((delegate_nqK + vietnaml) >= 4.9) {
          let chinaX = String.fromCharCode(112,114,101,118,118,101,99,95,119,95,53,56,0);
          let sina6: Map<any, any> = new Map([[String.fromCharCode(115,112,97,99,101,115,95,54,95,52,51,0),585], [String.fromCharCode(114,103,98,95,101,95,54,0),696]]);
          let expandC = String.fromCharCode(103,101,116,104,111,115,116,98,121,97,100,100,114,95,52,95,49,48,0);
          let infoM = 2.0;
         delegate_nqK /= Math.max(parseFloat(`${expandC.length}`), 2);
         chinaX = `${parseInt(`${infoM}`)}`;
         sina6 = new Map([[`${sina6.size}`, sina6.size]]);
         expandC += `${2 + sina6.size}`;
         infoM /= Math.max((String.fromCharCode(82,0) == chinaX ? parseInt(`${infoM}`) : chinaX.length), 5);
         break;
      }
      if (vietnaml == 3.22) {
          let chinaY = String.fromCharCode(116,95,51,52,95,98,117,115,0);
         delegate_nqK /= Math.max(3, parseFloat(`${chinaY.length - 2}`));
      }
         vietnaml *= parseInt(`${delegate_nqK}`) & parseInt(`${vietnaml}`);
      let searchbar_ = 5041037.0 >= delegate_nqK;
      do {
          let live2: Map<any, any> = new Map([[String.fromCharCode(116,97,107,101,111,118,101,114,95,102,95,55,55,0),String.fromCharCode(104,97,115,104,100,101,115,116,114,111,121,95,99,95,50,50,0)], [String.fromCharCode(101,110,99,108,111,115,105,110,103,95,50,95,51,54,0),String.fromCharCode(118,95,50,48,95,120,109,108,101,115,99,97,112,101,0)], [String.fromCharCode(97,117,116,111,112,108,97,121,95,56,95,57,50,0),String.fromCharCode(111,103,103,108,101,95,122,95,52,51,0)]]);
          let liveV = String.fromCharCode(109,101,109,100,101,98,117,103,95,99,95,57,57,0);
          let gift3 = String.fromCharCode(114,102,112,115,95,100,95,55,50,0);
          let weiboa = 2.0;
          let projectI = String.fromCharCode(113,95,49,48,95,109,97,110,97,103,101,0);
         delegate_nqK -= (parseFloat(`${gift3 == String.fromCharCode(95,0) ? live2.size : gift3.length}`));
         live2.set(`${weiboa}`, parseInt(`${weiboa}`));
         liveV += "2";
         projectI += `${(String.fromCharCode(97,0) == liveV ? parseInt(`${weiboa}`) : liveV.length)}`;
         if (searchbar_) {
            break;
         }
      } while (searchbar_ && ((1.21 + vietnaml) == 4.59 || 5.30 == (1.21 + vietnaml)));
      let routern = delegate_nqK >= 5989276.0;
      do {
          let products: Map<any, any> = new Map([[String.fromCharCode(110,95,52,55,95,97,118,115,115,0),760], [String.fromCharCode(119,114,105,116,116,101,110,95,52,95,56,53,0),564], [String.fromCharCode(103,95,55,57,95,112,97,114,116,110,101,114,0),900]]);
         delegate_nqK *= parseFloat(`${1 ^ parseInt(`${delegate_nqK}`)}`);
         products = new Map([[`${products.size}`, products.size ^ products.size]]);
         if (routern) {
            break;
         }
      } while (routern && (delegate_nqK >= 2.8));
      controlG.set(n_imagez, n_imagez.length);
      break;
   }
   while (!weiboJ.startsWith(`${foundd}`)) {
      foundd = (relatedb.length ^ project5.length) >= 39;
      break;
   }
      relatedb = "1";
   while (4 > (invitei.length | volumez)) {
       let typesp = 2;
       let china0 = String.fromCharCode(101,95,55,52,95,105,110,116,114,97,120,0);
       let w_titleM: Array<any> = [4, 217];
      for (let h = 0; h < 1; h++) {
         china0 += `${china0.length >> (Math.min(2, Math.abs(typesp)))}`;
      }
         w_titleM.push(china0.length / 1);
       let chinao = String.fromCharCode(101,95,53,95,115,112,101,101,100,104,113,0);
       let gmailQ = String.fromCharCode(100,95,57,48,95,109,107,100,105,114,0);
       let progressj: Map<any, any> = new Map([[String.fromCharCode(114,95,54,53,95,112,114,111,112,97,103,97,116,105,111,110,0),false ], [String.fromCharCode(101,95,56,52,95,115,105,103,104,0),false ], [String.fromCharCode(104,101,120,98,115,95,50,95,50,0),true ]]);
       let disconnected8: Map<any, any> = new Map([[String.fromCharCode(98,105,116,114,118,99,111,110,106,95,106,95,54,57,0),false ], [String.fromCharCode(110,118,100,101,99,95,56,95,52,53,0),true ]]);
         gmailQ = `${chinao.length | progressj.size}`;
          let fullu = 2.0;
          let short_fxq: Array<any> = [965, 155, 199];
         w_titleM = [typesp];
         fullu += parseFloat(`${short_fxq.length}`);
         short_fxq = [parseInt(`${fullu}`)];
      while (4 <= (3 - w_titleM.length) || 4 <= (3 - w_titleM.length)) {
         gmailQ += `${china0.length}`;
         break;
      }
      for (let u = 0; u < 2; u++) {
          let langW = String.fromCharCode(97,95,49,54,95,101,120,115,121,0);
          let actionsI = String.fromCharCode(100,97,116,101,115,95,112,95,54,48,0);
         progressj.set(chinao, 3 - langW.length);
         langW += `${actionsI.length + actionsI.length}`;
      }
      while (2 <= china0.length) {
         typesp <<= Math.min(2, Math.abs(3 / (Math.max(6, progressj.size))));
         break;
      }
      volumez <<= Math.min(parseInt(`${Math.abs((2 % (Math.max(3, (logoutD ? 5 : 5)))))}`), 3);
      break;
   }
   let backwardJ = String.fromCharCode(112,108,97,110,0) == n_imagez;
   do {
      n_imagez = "2";
      if (backwardJ) {
         break;
      }
   } while ((n_imagez.length <= 1) && backwardJ);
       let plashT: Array<any> = [752, 819, 777];
       let muted8: Array<any> = [373, 200];
         muted8 = [1 - muted8.length];
      while ((muted8.length ^ plashT.length) <= 2 || (plashT.length ^ muted8.length) <= 2) {
         muted8 = [3];
         break;
      }
         plashT.push(3 + muted8.length);
         muted8 = [3];
          let helperJ = 0.0;
          let sourcej = 0.0;
          let episodesd = true;
         plashT.push(3);
         helperJ -= 3 / (Math.max(parseInt(`${helperJ}`), 5));
         sourcej -= parseInt(`${helperJ}`) >> (Math.min(4, Math.abs(1)));
         episodesd = helperJ >= 54.41 && episodesd;
      for (let j = 0; j < 1; j++) {
         muted8 = [3];
      }
      project5 += "1";
   while (1 == (volumez | 5) && 5 == (volumez / (Math.max(parseInt(`${dragp}`), 6)))) {
      volumez >>= Math.min(Math.abs(2 % (Math.max(8, project5.length))), 1);
      break;
   }
   if (2 < volumez) {
      volumez %= Math.max(volumez, 5);
   }
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
       let policyg = String.fromCharCode(97,95,52,54,95,100,101,118,105,99,101,115,0);
    let phoneO = 1.0;
    let viewerM = 0.0;
    let yingQ = 0;
    let downloadedT = 3.0;
    let dataQ: Map<any, any> = new Map([[String.fromCharCode(97,95,55,49,95,114,97,116,105,110,103,0),140], [String.fromCharCode(114,111,116,97,116,101,100,95,115,95,56,51,0),930], [String.fromCharCode(99,116,105,109,101,115,116,97,109,112,95,103,95,57,57,0),515]]);
    let loginf = String.fromCharCode(108,105,116,101,114,97,108,95,110,95,52,51,0);
    let bannerH = String.fromCharCode(109,95,51,52,95,115,108,105,112,112,97,103,101,115,0);
    let projectY = 5;
    let savei: Array<any> = [500, 204, 889];
    let downloaderv = false;
    let searchbar7 = String.fromCharCode(117,110,98,111,110,100,101,100,95,122,95,57,52,0);
   while (3.70 > (phoneO * viewerM) && (3.70 * phoneO) > 2.33) {
      viewerM /= Math.max(3, parseFloat(`${savei.length - bannerH.length}`));
      break;
   }
   if (loginf.length < 5) {
      downloadedT /= Math.max(3 ^ yingQ, 2);
   }
   for (let e = 0; e < 2; e++) {
      dataQ.set(`${phoneO}`, 1 / (Math.max(parseInt(`${phoneO}`), 1)));
   }
       let turn1 = 1.0;
       let ewardedI = 5.0;
       let catagoryv = String.fromCharCode(120,95,49,50,95,103,117,105,100,115,0);
         turn1 -= parseFloat(`${parseInt(`${turn1}`) & parseInt(`${ewardedI}`)}`);
         ewardedI -= (parseFloat(`${String.fromCharCode(86,0) == catagoryv ? parseInt(`${ewardedI}`) : catagoryv.length}`));
       let sheetr = 2.0;
      for (let f = 0; f < 2; f++) {
         turn1 += (parseFloat(`${String.fromCharCode(68,0) == catagoryv ? parseInt(`${sheetr}`) : catagoryv.length}`));
      }
          let whatsappY = String.fromCharCode(114,95,55,50,95,98,115,119,97,112,100,115,112,0);
          let canvasx = String.fromCharCode(106,95,56,50,95,114,101,111,112,101,110,0);
         catagoryv += `${2 % (Math.max(2, canvasx.length))}`;
         whatsappY += `${(String.fromCharCode(107,0) == whatsappY ? whatsappY.length : whatsappY.length)}`;
         canvasx += `${whatsappY.length ^ 2}`;
      while (!catagoryv.endsWith(`${ewardedI}`)) {
         ewardedI -= parseFloat(`${parseInt(`${turn1}`)}`);
         break;
      }
       let feedbackP = false;
      if ((sheetr * 5.10) <= 1.52) {
          let questw = String.fromCharCode(119,114,97,112,100,101,116,101,99,116,95,120,95,55,0);
         sheetr += 1 ^ parseInt(`${turn1}`);
         questw += `${questw.length}`;
      }
       let interstitialh = false;
       let goalx = false;
      projectY *= (catagoryv == String.fromCharCode(100,0) ? catagoryv.length : dataQ.size);
      dataQ.set(loginf, (loginf == String.fromCharCode(108,0) ? parseInt(`${phoneO}`) : loginf.length));
   while ((viewerM * 1.68) == 2.37 && 1 == (dataQ.size << (Math.min(Math.abs(3), 3)))) {
      dataQ.set(`${savei.length}`, 1);
      break;
   }
       let fastforwardf: Array<any> = [String.fromCharCode(109,95,53,52,95,118,108,98,117,102,0), String.fromCharCode(118,95,50,55,95,119,101,105,103,104,116,101,100,0), String.fromCharCode(99,97,108,108,101,114,95,106,95,55,48,0)];
       let moonK = String.fromCharCode(113,115,116,101,112,95,51,95,54,53,0);
       let report7 = String.fromCharCode(121,95,49,57,95,113,115,111,114,116,0);
      for (let y = 0; y < 2; y++) {
         moonK = "3";
      }
         fastforwardf.push(report7.length);
         moonK = `${moonK.length & report7.length}`;
          let catalog2 = String.fromCharCode(106,95,50,50,95,107,97,116,0);
          let privacyD = 0.0;
         moonK += `${(moonK == String.fromCharCode(72,0) ? fastforwardf.length : moonK.length)}`;
         catalog2 += `${parseInt(`${privacyD}`)}`;
         privacyD /= Math.max(5, catalog2.length);
      let castingF = 9015391 >= fastforwardf.length;
      do {
          let helper3 = 3.0;
          let spinnerJ = 2.0;
          let sortD: Array<any> = [String.fromCharCode(120,95,55,48,95,99,104,97,114,116,0), String.fromCharCode(104,95,49,52,95,98,117,102,102,101,114,115,105,110,107,0)];
         fastforwardf = [parseInt(`${spinnerJ}`) - fastforwardf.length];
         helper3 -= 1 + parseInt(`${helper3}`);
         spinnerJ -= parseFloat(`${sortD.length}`);
         sortD = [parseInt(`${helper3}`) % (Math.max(sortD.length, 2))];
         if (castingF) {
            break;
         }
      } while (castingF && (report7.length > fastforwardf.length));
          let matches9 = 0;
          let prediction0 = 5.0;
         fastforwardf = [matches9 * 3];
         matches9 %= Math.max(4, parseInt(`${prediction0}`) - parseInt(`${prediction0}`));
         moonK += `${3 + moonK.length}`;
       let helper2: Map<any, any> = new Map([[String.fromCharCode(98,101,110,99,104,95,56,95,56,52,0),384], [String.fromCharCode(97,117,116,104,111,114,105,122,101,95,109,95,50,51,0),647]]);
       let send7: Map<any, any> = new Map([[String.fromCharCode(121,95,55,48,95,118,114,108,101,0),994], [String.fromCharCode(100,101,108,97,95,105,95,55,55,0),513]]);
         helper2 = new Map([[`${fastforwardf.length}`, fastforwardf.length << (Math.min(Math.abs(3), 2))]]);
      loginf += `${(loginf == String.fromCharCode(70,0) ? loginf.length : savei.length)}`;
      bannerH = `${policyg.length}`;
   if (bannerH.includes(`${downloadedT}`)) {
      downloadedT -= yingQ + savei.length;
   }
   let overy = String.fromCharCode(100,53,57,95,99,115,106,49,99,122,0) == bannerH;
   do {
      bannerH += `${yingQ - projectY}`;
      if (overy) {
         break;
      }
   } while (overy && (!bannerH.endsWith(`${loginf.length}`)));
      phoneO /= Math.max(3, 5);
   if (3.38 < (phoneO / 5.67)) {
      projectY ^= 1 ^ parseInt(`${downloadedT}`);
   }
      loginf = `${3 ^ policyg.length}`;
      projectY ^= 1 / (Math.max(parseInt(`${phoneO}`), 8));
      phoneO -= 1;
       let regengQ = String.fromCharCode(114,95,52,51,95,102,105,108,101,112,97,116,104,0);
       let logoJ = String.fromCharCode(115,99,116,112,117,116,105,108,95,101,95,49,57,0);
       let windp = 4.0;
      for (let q = 0; q < 2; q++) {
         logoJ += `${3 % (Math.max(6, logoJ.length))}`;
      }
         windp += parseFloat(`${2 / (Math.max(1, logoJ.length))}`);
          let moreP = 2.0;
          let leftv = 3.0;
          let entryh = 4.0;
         logoJ = `${regengQ.length}`;
         moreP += parseFloat(`${parseInt(`${leftv}`)}`);
         leftv -= parseFloat(`${parseInt(`${entryh}`)}`);
       let shareT = String.fromCharCode(103,117,97,114,100,95,117,95,52,48,0);
       let bottomo = String.fromCharCode(117,95,56,49,95,114,97,112,112,101,114,0);
      if (!shareT.endsWith(`${windp}`)) {
          let read6 = 1;
         windp /= Math.max(2, parseFloat(`${3}`));
         read6 &= 2;
      }
         logoJ = `${(logoJ == String.fromCharCode(71,0) ? shareT.length : logoJ.length)}`;
         shareT += `${1 * regengQ.length}`;
       let n_titleW = 5.0;
       let bootsplash_ = String.fromCharCode(120,95,51,50,95,114,97,119,100,101,99,0);
       let configO = String.fromCharCode(110,95,49,57,95,102,116,101,108,108,0);
      phoneO *= 2 + loginf.length;
      savei = [3];
      viewerM /= Math.max(4, parseFloat(`${1}`));
   for (let v = 0; v < 2; v++) {
      yingQ += 2;
   }
   if (policyg.length < 5) {
      projectY -= projectY & yingQ;
   }
   for (let l = 0; l < 3; l++) {
      savei.push((policyg == String.fromCharCode(121,0) ? policyg.length : bannerH.length));
   }
   for (let n = 0; n < 3; n++) {
      bannerH = `${parseInt(`${phoneO}`)}`;
   }
      projectY >>= Math.min(4, Math.abs(dataQ.size & 3));
      downloaderv = phoneO <= 21.31 && bannerH.length <= 65;

          dispatch(incrementSportWatchTime());
        }, 1000);

        return () => clearInterval(unsub);
      }
    }, [route.name])

    
    
    
    
    

    const isVip = KWConstants.isVip(userState.user);

    const pauseSportVideo =
      route.name === "体育详情" &&
      screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS && !KWConstants.isVip(userState.user)

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
       let nnewsm = false;
    let filteri = String.fromCharCode(99,97,114,101,102,117,108,108,121,95,108,95,52,0);
    let filede = 2.0;
    let themek = String.fromCharCode(100,105,109,109,101,100,95,114,95,52,54,0);
    let humidityh = String.fromCharCode(103,95,49,51,95,118,105,111,108,101,110,99,101,0);
    let unselectedG = 3.0;
    let whiteA = String.fromCharCode(99,111,109,112,97,115,115,95,51,95,51,49,0);
    let policyW = 3.0;
    let buttonW = String.fromCharCode(112,115,115,104,95,50,95,53,51,0);
    let sorty = String.fromCharCode(107,95,53,53,0);
    let interstitialD: Map<any, any> = new Map([[String.fromCharCode(106,95,49,51,95,110,97,116,105,111,110,97,108,105,116,121,0),false ], [String.fromCharCode(111,95,49,55,95,112,114,111,98,115,0),true ]]);
    let unreadu = String.fromCharCode(100,95,50,50,0);
    let friendsn = 3.0;
    let turnK = String.fromCharCode(108,105,110,107,101,100,95,106,95,52,57,0);
    let moonJ = 5.0;
    let styles = String.fromCharCode(114,101,102,112,108,97,110,101,95,110,95,54,52,0);
    let description_01c = String.fromCharCode(97,99,111,108,111,114,95,115,95,49,54,0);
    let sentry5 = 2.0;
      unselectedG *= buttonW.length;
   for (let l = 0; l < 2; l++) {
       let sliderC = String.fromCharCode(115,111,99,107,97,100,100,114,95,101,95,53,53,0);
       let hoverX = String.fromCharCode(118,99,111,100,101,99,95,115,95,55,55,0);
       let configQ = 4;
       let yellowF = String.fromCharCode(97,108,112,104,97,110,117,109,95,118,95,56,51,0);
         hoverX = `${yellowF.length + configQ}`;
         sliderC += `${sliderC.length ^ 3}`;
      let sport8 = configQ <= 7320579;
      do {
          let emojiH = 4.0;
         configQ &= parseInt(`${emojiH}`) - 2;
         if (sport8) {
            break;
         }
      } while (((yellowF.length >> (Math.min(1, Math.abs(configQ)))) >= 2 && 4 >= (2 >> (Math.min(1, Math.abs(configQ))))) && sport8);
         hoverX += "3";
         yellowF = "2";
          let context5: Array<any> = [32, 632];
          let containerE = String.fromCharCode(114,95,56,51,95,113,117,101,115,116,105,111,110,0);
         sliderC = `${yellowF.length}`;
         context5 = [2 | containerE.length];
         containerE = `${containerE.length}`;
      let p_counti = configQ <= 6662798;
      do {
         configQ += 3 - hoverX.length;
         if (p_counti) {
            break;
         }
      } while (((configQ << (Math.min(yellowF.length, 4))) == 5) && p_counti);
      for (let u = 0; u < 3; u++) {
          let plusr = 0.0;
          let apple3 = false;
          let placeholderG = 2.0;
         hoverX += `${sliderC.length}`;
         plusr *= (parseFloat(`${parseInt(`${placeholderG}`) + (apple3 ? 2 : 4)}`));
         apple3 = !apple3 || placeholderG == 51.43;
      }
         hoverX = `${configQ / 3}`;
      if (yellowF.endsWith(`${hoverX.length}`)) {
         hoverX += `${hoverX.length >> (Math.min(sliderC.length, 3))}`;
      }
      for (let h = 0; h < 3; h++) {
         configQ |= hoverX.length >> (Math.min(3, Math.abs(configQ)));
      }
      for (let u = 0; u < 1; u++) {
         hoverX = "2";
      }
      buttonW = `${(humidityh == String.fromCharCode(104,0) ? parseInt(`${filede}`) : humidityh.length)}`;
   }

      if (!playerVodAds?.actionUrl) {

       let slidern = 4;
       let targetN: Array<any> = [844, 616, 816];
      while (!targetN.includes(slidern)) {
         targetN = [targetN.length - slidern];
         break;
      }
         slidern |= 3;
      while (4 < (targetN.length >> (Math.min(2, Math.abs(slidern)))) && (4 >> (Math.min(5, targetN.length))) < 4) {
         targetN = [targetN.length];
         break;
      }
         targetN.push(2 - slidern);
      let banner4 = 6193177 <= targetN.length;
      do {
          let cornerW = String.fromCharCode(98,105,103,105,110,116,95,54,95,54,57,0);
          let page4 = String.fromCharCode(111,118,102,108,95,106,95,53,55,0);
          let unselected1 = String.fromCharCode(114,95,57,57,95,102,101,110,99,0);
         targetN = [page4.length];
         cornerW += `${cornerW.length >> (Math.min(3, unselected1.length))}`;
         page4 += `${cornerW.length >> (Math.min(Math.abs(3), 5))}`;
         unselected1 = `${cornerW.length | 3}`;
         if (banner4) {
            break;
         }
      } while (banner4 && (2 == (targetN.length | 5)));
         slidern += 3;
      filede *= 1 << (Math.min(Math.abs(parseInt(`${unselectedG}`)), 5));
   for (let k = 0; k < 1; k++) {
       let downloadingr = String.fromCharCode(118,101,114,116,101,120,95,52,95,53,0);
      while (2 > downloadingr.length) {
         downloadingr = `${2 >> (Math.min(5, downloadingr.length))}`;
         break;
      }
         downloadingr += `${(String.fromCharCode(89,0) == downloadingr ? downloadingr.length : downloadingr.length)}`;
      if (downloadingr.length <= downloadingr.length) {
         downloadingr = `${(String.fromCharCode(79,0) == downloadingr ? downloadingr.length : downloadingr.length)}`;
      }
      sorty = `${(filteri == String.fromCharCode(88,0) ? (nnewsm ? 1 : 3) : filteri.length)}`;
   }
        

      filede /= Math.max(parseInt(`${policyW}`), 2);
      filede *= filteri.length * 3;
        umb_center_carousel.playsAdsClickAnalytics();

       let resultp = String.fromCharCode(100,101,108,105,109,95,120,95,50,54,0);
       let nalyticsx = String.fromCharCode(99,111,112,121,98,97,99,107,95,50,95,51,52,0);
      if (resultp.startsWith(nalyticsx)) {
         nalyticsx += `${2 << (Math.min(4, nalyticsx.length))}`;
      }
         nalyticsx = `${nalyticsx.length}`;
      let penaltyz = 6361405 <= resultp.length;
      do {
         resultp += "1";
         if (penaltyz) {
            break;
         }
      } while ((resultp.length == nalyticsx.length) && penaltyz);
      let eactg = resultp.length >= 5151052;
      do {
         resultp += `${1 % (Math.max(10, resultp.length))}`;
         if (eactg) {
            break;
         }
      } while (eactg && (nalyticsx.length <= resultp.length));
      for (let p = 0; p < 1; p++) {
         resultp = "1";
      }
      while (resultp.length <= nalyticsx.length) {
         nalyticsx = `${resultp.length}`;
         break;
      }
      policyW += parseInt(`${unselectedG}`);
   let ewardedc = filede <= 5819874.0;
   do {
      filede += buttonW.length | parseInt(`${policyW}`);
      if (ewardedc) {
         break;
      }
   } while (ewardedc && (2.10 <= (1 * policyW)));
        

      buttonW += `${filteri.length / (Math.max(2, 1))}`;
   if (humidityh.length >= 5) {
      humidityh += `${((nnewsm ? 5 : 5) & sorty.length)}`;
   }

        if (onPressCountdown) onPressCountdown();

   for (let b = 0; b < 3; b++) {
      sorty += `${filteri.length << (Math.min(1, sorty.length))}`;
   }
   while (!nnewsm) {
      interstitialD = new Map([[`${unselectedG}`, (String.fromCharCode(87,0) == filteri ? parseInt(`${unselectedG}`) : filteri.length)]]);
      break;
   }
        return;

      unreadu = "1";
      buttonW = `${(String.fromCharCode(65,0) == themek ? themek.length : unreadu.length)}`;
      }

      const url = playerVodAds?.actionUrl.includes(OtherActionsSplash.inactiveIndicatorQuest([-33,-61,-61,-57,-73],0xB7,false)) ? playerVodAds?.actionUrl : OtherActionsSplash.inactiveIndicatorQuest([-40,-60,-60,-64,-61,-118,-97,-97,-80],0xB0,false) + playerVodAds?.actionUrl

      

   while (1.25 == (unselectedG / (Math.max(2.11, 7)))) {
      unselectedG += 2 + whiteA.length;
      break;
   }
   if (unreadu == whiteA) {
      whiteA = `${parseInt(`${filede}`) << (Math.min(2, Math.abs(1)))}`;
   }
      

       let vignetteA: Array<any> = [390, 314, 288];
       let long_hlw = 1.0;
      while ((parseInt(`${long_hlw}`) - vignetteA.length) <= 5 && 5.79 <= (2.26 - long_hlw)) {
         long_hlw += parseFloat(`${2 | vignetteA.length}`);
         break;
      }
         vignetteA.push(2 << (Math.min(3, vignetteA.length)));
      if ((parseInt(`${long_hlw}`) / (Math.max(vignetteA.length, 2))) < 3) {
         vignetteA = [parseInt(`${long_hlw}`) - 1];
      }
      while ((long_hlw * 2.61) < 5.14 && 2.61 < (long_hlw * parseFloat(`${vignetteA.length}`))) {
         long_hlw *= parseFloat(`${vignetteA.length}`);
         break;
      }
         long_hlw /= Math.max(parseFloat(`${parseInt(`${long_hlw}`)}`), 3);
         vignetteA = [parseInt(`${long_hlw}`)];
      filteri += "2";
      filteri += `${sorty.length}`;

      

   if (!humidityh.startsWith(themek)) {
       let headere = String.fromCharCode(100,105,121,102,112,95,106,95,53,0);
      if (headere == headere) {
         headere += `${headere.length * 1}`;
      }
         headere = `${headere.length}`;
         headere = "3";
      humidityh = `${buttonW.length * themek.length}`;
   }
       let empty9: Map<any, any> = new Map([[String.fromCharCode(99,111,111,107,100,97,116,97,95,116,95,51,48,0),236], [String.fromCharCode(99,104,97,114,116,115,95,114,95,53,52,0),582]]);
       let trashZ = String.fromCharCode(114,110,103,95,114,95,51,0);
       let selectedX = String.fromCharCode(97,108,108,111,99,99,111,109,109,111,110,95,116,95,54,57,0);
      if (selectedX.endsWith(trashZ)) {
         trashZ = `${empty9.size}`;
      }
      if (selectedX.startsWith(`${empty9.size}`)) {
         selectedX = `${2 >> (Math.min(4, trashZ.length))}`;
      }
      unreadu += `${parseInt(`${policyW}`)}`;
      

       let watchp = String.fromCharCode(113,95,57,95,112,117,110,99,104,0);
       let adultJ = 2.0;
      if (4 <= (watchp.length / 1) && 3.19 <= (adultJ * 2.28)) {
          let crossB = false;
          let greyM = 2.0;
         watchp = `${(parseInt(`${greyM}`) ^ (crossB ? 1 : 4))}`;
      }
       let ewardedK: Array<any> = [String.fromCharCode(99,111,110,110,101,99,116,111,114,95,116,95,50,51,0), String.fromCharCode(116,95,53,95,115,104,97,114,100,0)];
       let tickedo: Array<any> = [621, 832];
         tickedo.push(ewardedK.length >> (Math.min(tickedo.length, 3)));
          let t_lockL: Map<any, any> = new Map([[String.fromCharCode(105,95,51,51,95,97,98,115,116,0),553], [String.fromCharCode(99,114,101,97,116,111,114,95,102,95,51,57,0),1]]);
          let navigationd = 2.0;
         ewardedK.push(2);
         t_lockL = new Map([[`${t_lockL.size}`, 3 << (Math.min(3, Math.abs(parseInt(`${navigationd}`))))]]);
         navigationd += t_lockL.size;
          let cornerf = String.fromCharCode(102,114,101,113,98,97,114,107,95,118,95,50,0);
          let upload0: Array<any> = [722, 947, 667];
          let time_nbb = 2.0;
         adultJ += (String.fromCharCode(50,0) == watchp ? parseInt(`${adultJ}`) : watchp.length);
         cornerf = "1";
         upload0.push(cornerf.length | upload0.length);
         time_nbb /= Math.max(3, cornerf.length);
          let inviteJ = String.fromCharCode(103,98,114,97,112,95,117,95,57,54,0);
          let anytimeq = 4.0;
         ewardedK = [3 * watchp.length];
         inviteJ = `${inviteJ.length}`;
         anytimeq *= (parseFloat(`${inviteJ == String.fromCharCode(82,0) ? inviteJ.length : parseInt(`${anytimeq}`)}`));
      turnK = "1";
      friendsn /= Math.max(2, parseFloat(`${parseInt(`${unselectedG}`) % (Math.max(4, interstitialD.size))}`));
      

   if (themek.length >= 1) {
      themek = `${unreadu.length}`;
   }
       let vertical3 = true;
       let sidex = 3.0;
       let awayT = String.fromCharCode(109,105,112,115,102,112,117,95,101,95,49,51,0);
       let tooltips8 = String.fromCharCode(107,101,121,103,101,110,95,51,95,51,0);
       let appsI = String.fromCharCode(117,95,51,56,95,115,105,103,110,114,97,110,100,0);
      if (5 >= appsI.length) {
         tooltips8 += `${awayT.length}`;
      }
      while (tooltips8 != String.fromCharCode(66,0)) {
         awayT += `${((vertical3 ? 3 : 5) & 1)}`;
         break;
      }
          let refreshw = 3.0;
          let favicon8: Map<any, any> = new Map([[String.fromCharCode(102,101,101,100,98,97,99,107,95,107,95,57,50,0),true ], [String.fromCharCode(115,112,101,99,116,105,109,101,95,115,95,54,52,0),false ], [String.fromCharCode(111,95,51,56,95,120,109,117,108,116,0),false ]]);
         sidex /= Math.max(5, parseInt(`${refreshw}`) | 3);
         refreshw /= Math.max(2 ^ favicon8.size, 4);
         favicon8 = new Map([[`${favicon8.size}`, favicon8.size * 1]]);
      while (tooltips8.length <= appsI.length) {
         appsI += `${(String.fromCharCode(115,0) == awayT ? parseInt(`${sidex}`) : awayT.length)}`;
         break;
      }
         tooltips8 = `${(1 % (Math.max(8, (vertical3 ? 3 : 5))))}`;
          let vietnamj = 5.0;
          let sharedz = String.fromCharCode(104,95,52,53,95,101,112,115,105,108,111,110,0);
          let constantsi = String.fromCharCode(97,95,55,54,95,99,111,109,112,114,101,115,115,105,111,110,0);
         sidex /= Math.max(4, awayT.length);
         vietnamj -= (parseFloat(`${String.fromCharCode(115,0) == sharedz ? sharedz.length : constantsi.length}`));
         constantsi = "3";
      let incidentZ = awayT == String.fromCharCode(51,51,53,102,0);
      do {
         awayT = `${tooltips8.length | appsI.length}`;
         if (incidentZ) {
            break;
         }
      } while ((!vertical3 || awayT.length <= 1) && incidentZ);
         appsI += `${parseInt(`${sidex}`) + 1}`;
      filteri += `${buttonW.length}`;
      

   let routerC = unselectedG <= 8855257.0;
   do {
       let downz = 1.0;
       let thailandU = true;
       let reporte = String.fromCharCode(114,101,115,101,114,118,101,95,50,95,49,48,0);
       let eactX: Map<any, any> = new Map([[String.fromCharCode(110,95,50,49,95,101,120,112,114,108,105,115,116,0),903], [String.fromCharCode(115,101,101,107,116,97,98,108,101,95,107,95,50,53,0),586], [String.fromCharCode(108,95,57,54,95,112,115,104,0),505]]);
       let serviceq: Array<any> = [456, 720, 255];
      while (reporte.endsWith(`${downz}`)) {
          let redirectL = 0;
         reporte += `${((thailandU ? 2 : 1) ^ eactX.size)}`;
         redirectL ^= 3 * redirectL;
         break;
      }
       let reducerY: Map<any, any> = new Map([[String.fromCharCode(108,95,53,48,95,110,111,116,105,102,105,101,114,0),String.fromCharCode(105,110,112,117,116,116,101,109,95,53,95,53,57,0)], [String.fromCharCode(99,111,109,112,111,115,101,105,95,117,95,55,48,0),String.fromCharCode(114,95,54,56,95,103,97,116,101,0)]]);
         downz *= parseFloat(`${parseInt(`${downz}`) >> (Math.min(3, Math.abs(1)))}`);
      for (let s = 0; s < 1; s++) {
         eactX.set(`${thailandU}`, 2 - parseInt(`${downz}`));
      }
      while (!thailandU) {
         reporte = `${(eactX.size + (thailandU ? 5 : 3))}`;
         break;
      }
         thailandU = reporte == String.fromCharCode(89,0);
         reporte += `${eactX.size % (Math.max(reporte.length, 1))}`;
         reporte = `${(2 | (thailandU ? 5 : 2))}`;
          let membershipO: Array<any> = [String.fromCharCode(103,95,55,51,95,102,111,114,119,97,114,100,101,100,0), String.fromCharCode(114,95,51,52,95,99,118,116,121,117,118,116,111,0)];
         reducerY = new Map([[`${serviceq.length}`, serviceq.length % (Math.max(2, 8))]]);
         membershipO.push(membershipO.length >> (Math.min(Math.abs(3), 5)));
      while (reducerY.get(`${serviceq.length}`) == null) {
         reducerY = new Map([[`${reducerY.size}`, 3]]);
         break;
      }
         serviceq = [parseInt(`${downz}`)];
      if (1 >= eactX.size) {
         reducerY = new Map([[`${serviceq.length}`, serviceq.length + 2]]);
      }
       let current8 = true;
       let gemfileW = false;
         gemfileW = 20.50 > downz;
      let field2 = 8375517 <= eactX.size;
      do {
         eactX.set(`${gemfileW}`, ((gemfileW ? 2 : 3) ^ 3));
         if (field2) {
            break;
         }
      } while ((eactX.get(`${downz}`) != null) && field2);
      unselectedG += filteri.length;
      if (routerC) {
         break;
      }
   } while (routerC && (3 <= (whiteA.length * 4)));
       let selectL = String.fromCharCode(100,95,57,48,95,109,117,108,116,105,112,108,101,120,101,100,0);
       let downloadedy = false;
       let bingE: Map<any, any> = new Map([[String.fromCharCode(116,95,49,54,95,98,108,117,114,114,97,98,108,101,0),589], [String.fromCharCode(114,101,110,100,101,114,95,117,95,49,54,0),942], [String.fromCharCode(114,101,99,118,118,95,113,95,51,55,0),918]]);
      for (let k = 0; k < 2; k++) {
         bingE = new Map([[`${bingE.size}`, selectL.length]]);
      }
         downloadedy = selectL.length < 81 || bingE.size < 81;
      let interstitialc = downloadedy ? !downloadedy : downloadedy;
      do {
          let fullf: Map<any, any> = new Map([[String.fromCharCode(114,101,102,101,114,101,110,99,101,95,52,95,50,54,0),412], [String.fromCharCode(109,95,55,51,95,99,97,108,101,110,100,97,114,0),33]]);
          let sportsi = 1.0;
          let matchN = true;
          let success3 = String.fromCharCode(118,95,50,52,95,115,117,103,103,101,115,116,105,111,110,0);
         downloadedy = ((success3.length & (downloadedy ? 89 : success3.length)) > 89);
         fullf.set(`${matchN}`, 3);
         sportsi += parseFloat(`${parseInt(`${sportsi}`) | 2}`);
         if (interstitialc) {
            break;
         }
      } while (interstitialc && ((3 + bingE.size) >= 1 && 3 >= bingE.size));
         downloadedy = bingE.size <= selectL.length;
          let acceptedn = 1.0;
          let humidityp = String.fromCharCode(100,111,108,98,121,95,101,95,53,49,0);
          let whiteR = 1.0;
         bingE = new Map([[humidityp, selectL.length / (Math.max(3, 1))]]);
         acceptedn += parseFloat(`${parseInt(`${whiteR}`) & 2}`);
         humidityp += `${parseInt(`${acceptedn}`)}`;
         whiteR += 2;
      filede -= parseInt(`${filede}`) << (Math.min(Math.abs(1), 3));
      

      sorty += "1";
      whiteA += `${(String.fromCharCode(67,0) == themek ? buttonW.length : themek.length)}`;
      

       let filledO = String.fromCharCode(119,95,51,55,95,101,110,99,111,100,101,114,0);
      if (3 < filledO.length && filledO != String.fromCharCode(73,0)) {
         filledO = `${filledO.length - 3}`;
      }
          let streamingT = String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,95,118,95,55,53,0);
          let reducer8 = String.fromCharCode(98,95,50,50,95,98,108,111,99,107,101,100,0);
         filledO += `${reducer8.length}`;
         streamingT = "1";
         reducer8 += `${streamingT.length}`;
      if (filledO.endsWith(filledO)) {
          let temperatureK = 3.0;
          let umengI: Array<any> = [String.fromCharCode(100,112,110,97,109,101,95,116,95,52,52,0), String.fromCharCode(105,95,57,54,95,99,101,110,99,0), String.fromCharCode(105,109,97,103,101,115,95,56,95,57,55,0)];
          let containery: Array<any> = [34, 138, 953];
         filledO += `${containery.length}`;
         temperatureK *= parseFloat(`${3 ^ parseInt(`${temperatureK}`)}`);
         umengI = [parseInt(`${temperatureK}`) / 2];
         containery = [umengI.length * parseInt(`${temperatureK}`)];
      }
      friendsn /= Math.max(4, parseFloat(`${parseInt(`${filede}`) << (Math.min(Math.abs(1), 1))}`));
      turnK += `${((nnewsm ? 2 : 2) / (Math.max(8, parseInt(`${policyW}`))))}`;
      

       let screenH: Array<any> = [845, 761];
      if ((5 - screenH.length) <= 5) {
          let halfN = String.fromCharCode(118,95,55,53,95,118,100,97,116,97,0);
         screenH.push(halfN.length);
      }
      let fully = 5834333 <= screenH.length;
      do {
         screenH = [screenH.length];
         if (fully) {
            break;
         }
      } while (fully && ((screenH.length - 1) == 5 && 1 == (screenH.length - screenH.length)));
          let delegate_vaQ = 0;
          let expandh = String.fromCharCode(119,95,49,48,48,95,105,104,100,114,0);
         screenH.push(screenH.length % 2);
         delegate_vaQ -= delegate_vaQ ^ expandh.length;
         expandh = `${expandh.length}`;
      nnewsm = unselectedG > 7.77;
   for (let c = 0; c < 3; c++) {
      nnewsm = 47 == humidityh.length || whiteA == String.fromCharCode(86,0);
   }
      Linking.openURL(url);

   for (let y = 0; y < 2; y++) {
      nnewsm = buttonW.length == sorty.length;
   }
       let rewindo: Map<any, any> = new Map([[String.fromCharCode(109,97,116,101,114,105,97,108,95,52,95,55,53,0),44], [String.fromCharCode(117,95,50,49,95,102,109,97,99,0),420]]);
      while (rewindo.get(`${rewindo.size}`) == null) {
         rewindo = new Map([[`${rewindo.size}`, rewindo.size + 1]]);
         break;
      }
      while ((rewindo.size ^ 3) > 2) {
         rewindo.set(`${rewindo.size}`, rewindo.size);
         break;
      }
      while (Array.from(rewindo.keys()).includes(`${rewindo.size}`)) {
         rewindo = new Map([[`${rewindo.size}`, 3 | rewindo.size]]);
         break;
      }
      moonJ /= Math.max(1, parseInt(`${friendsn}`) ^ 1);
      

       let nalyticsB: Map<any, any> = new Map([[String.fromCharCode(108,105,110,117,120,95,107,95,57,0),563], [String.fromCharCode(108,95,49,56,95,112,101,114,109,117,116,97,116,105,111,110,0),923], [String.fromCharCode(108,95,49,95,112,108,111,116,0),484]]);
         nalyticsB.set(`${nalyticsB.size}`, nalyticsB.size);
      for (let z = 0; z < 1; z++) {
          let modele: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,120,109,117,108,116,95,112,95,51,51,0),265], [String.fromCharCode(121,95,55,54,95,98,105,115,101,99,116,0),883]]);
          let themen: Map<any, any> = new Map([[String.fromCharCode(102,111,108,100,101,114,95,108,95,54,54,0),false ], [String.fromCharCode(97,95,49,95,114,101,103,105,115,116,101,114,0),false ], [String.fromCharCode(109,101,108,116,95,113,95,56,54,0),true ]]);
          let plash3: Map<any, any> = new Map([[String.fromCharCode(97,116,114,97,99,116,97,98,95,50,95,54,53,0),false ], [String.fromCharCode(105,109,112,111,114,116,101,114,95,56,95,52,56,0),true ], [String.fromCharCode(97,95,51,55,95,100,97,114,107,0),true ]]);
          let heji5 = true;
         nalyticsB.set(`${themen.size}`, nalyticsB.size >> (Math.min(5, Math.abs(themen.size))));
         modele.set(`${plash3.size}`, modele.size % (Math.max(8, plash3.size)));
         heji5 = (plash3.size >> (Math.min(1, Math.abs(modele.size)))) >= 11;
      }
      if (nalyticsB.get(`${nalyticsB.size}`) != null) {
          let yellowg = String.fromCharCode(108,97,115,114,95,52,95,50,55,0);
          let albumo = true;
         nalyticsB.set(yellowg, 1);
      }
      themek = `${(styles == String.fromCharCode(81,0) ? styles.length : description_01c.length)}`;
      moonJ /= Math.max(3 ^ description_01c.length, 2);

      

      moonJ /= Math.max(4, buttonW.length % 2);
   for (let h = 0; h < 3; h++) {
      buttonW += "2";
   }
      umb_center_carousel.playsAdsClickAnalytics({
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
                {seekDirection === "fastUpdate_ebAssist" ? (
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
                source={require("@static/images/shootAcceptedPrivate_7.gif")}
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
    color: "moonSelected",
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
