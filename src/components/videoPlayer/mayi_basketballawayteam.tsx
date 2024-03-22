

class PenaltyshootnogoalShielddone {
    static placeholderSkipChartIconnotifi = (contents: [number], key: number, hasEmoji: boolean) => {
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
import VideoControlsOverlay from "./mayi_baseline_rncore";
import WebView from "react-native-webview";


import FastImage from "../../components/common/mayi_slider";

import FastForwardProgressIcon from "@static/images/textPressure.svg";
import RewindProgressIcon from "@static/images/fullOver.svg";

import { incrementSportWatchTime, setFullscreenState, showAdultModeVip } from "@redux/actions/mayi_iconorientation_chatroombackground";

import {
  mayi_ReddownarrowItem,
  mayi_Const,
  mayi_EmptyGradle,
} from "@type/mayi_green";
import VideoWithControls from "./mayi_static_control";
import { useDispatch } from "react-redux";
import { useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { screenModel } from "@type/mayi_libfolly_inouttargetred";
import { ADULT_MODE_PREVIEW_DURATION, AD_VIDEO_SECONDS, NON_VIP_STREAM_TIME_SECONDS } from "@utility/mayi_middleware_apps";
import { AdVideoImage } from "./mayi_pressure_register";
import { mayi_Middleware } from "@redux/reducers/mayi_temp_holder";
import { mayi_CrossChat } from "@api";
import { useQuery } from "@tanstack/react-query";
import mayi_push from "../../../Umeng/mayi_push";
import InAppBrowser from "react-native-inappbrowser-reborn";
import ImmersiveMode from "react-native-immersive-mode"
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";

LogBox.ignoreLogs([`Trying to load empty source.`]);


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
  showAds?: boolean,
  onPressCountdown?: () => void,
  vodID?: number,
  sourceID?: number,
  onDownloadVod?: (nid: number) => void,
  setShowAdOverlay: (show: boolean) => void,
  onAdsMount?: () => void,
  vipGuideModalOpen?: boolean,
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
       let leagueq: Map<any, any> = new Map([[String.fromCharCode(102,116,121,112,95,108,95,53,48,0),String.fromCharCode(110,111,116,101,95,57,95,49,0)], [String.fromCharCode(119,95,49,95,105,110,116,101,110,115,105,116,121,0),String.fromCharCode(101,95,57,53,95,108,101,97,102,110,111,100,101,0)], [String.fromCharCode(120,117,118,109,118,115,95,111,95,50,49,0),String.fromCharCode(101,110,97,98,108,101,115,95,111,95,54,49,0)]]);
    let sendF: Map<any, any> = new Map([[String.fromCharCode(104,95,49,49,95,116,97,107,101,110,0),String.fromCharCode(122,95,49,49,95,102,114,97,109,101,99,114,99,0)], [String.fromCharCode(112,95,56,52,95,117,110,108,111,99,107,0),String.fromCharCode(104,95,53,57,95,102,114,97,109,101,0)]]);
    let airbnbstarm = 2;
    let homeiconJ: Map<any, any> = new Map([[String.fromCharCode(105,95,52,51,95,100,97,118,115,0),String.fromCharCode(97,117,116,111,114,101,115,105,122,105,110,103,95,99,95,57,53,0)], [String.fromCharCode(99,97,112,116,117,114,101,100,95,111,95,52,48,0),String.fromCharCode(111,117,112,117,116,95,111,95,49,49,0)]]);
    let flyerd = 4;
    let transfer5 = true;
    let sigmobN = false;
    let dataR: Array<any> = [748, 709, 247];
    let clubT = true;
    let customr = 0.0;
    let homeactive1: Map<any, any> = new Map([[String.fromCharCode(122,95,50,53,95,115,116,97,116,105,115,116,105,99,0),820], [String.fromCharCode(101,95,53,95,115,112,105,110,110,101,114,0),757], [String.fromCharCode(109,101,109,111,114,121,95,119,95,56,52,0),890]]);
    let backiconh: Map<any, any> = new Map([[String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,100,97,116,97,95,117,95,55,51,0),234], [String.fromCharCode(114,95,50,56,95,115,101,116,117,112,100,0),939], [String.fromCharCode(100,111,117,98,108,101,95,52,95,51,49,0),471]]);
    let libruntimeexecutorx = true;
    let graphA = false;
    let tempnodatagif2: Array<any> = [946, 114, 316];
   while ((homeiconJ.size ^ 5) <= 4 && (flyerd ^ homeiconJ.size) <= 5) {
      homeiconJ = new Map([[`${dataR.length}`, dataR.length]]);
      break;
   }
   for (let d = 0; d < 3; d++) {
      leagueq = new Map([[`${dataR.length}`, dataR.length]]);
   }
   let downh = sigmobN ? !sigmobN : sigmobN;
   do {
      sigmobN = !sigmobN;
      if (downh) {
         break;
      }
   } while ((homeactive1.size >= 2) && downh);
   for (let p = 0; p < 3; p++) {
      clubT = (homeiconJ.size << (Math.min(Math.abs(sendF.size), 1))) <= 49;
   }
      transfer5 = customr > 56.61 || !transfer5;
      transfer5 = (dataR.length ^ homeactive1.size) >= 90;
      homeiconJ = new Map([[`${clubT}`, parseInt(`${customr}`) * 3]]);
      sigmobN = leagueq.get(`${airbnbstarm}`) != null;
      transfer5 = clubT;
   if (sendF.get(`${homeiconJ.size}`) == null) {
       let defaultplayerimgt = 5.0;
       let privacyE: Array<any> = [952, 22, 903];
       let v_image_ = String.fromCharCode(114,95,56,50,95,110,97,116,105,118,101,0);
          let controlj = 1.0;
          let logouserT = String.fromCharCode(102,102,118,108,95,56,95,50,57,0);
          let bottomF: Array<any> = [714, 592, 80];
         privacyE.push(parseInt(`${defaultplayerimgt}`) / (Math.max(2, bottomF.length)));
         controlj -= parseInt(`${controlj}`) | logouserT.length;
         logouserT = `${parseInt(`${controlj}`) + logouserT.length}`;
         bottomF.push(parseInt(`${controlj}`));
         v_image_ = `${(v_image_ == String.fromCharCode(111,0) ? privacyE.length : v_image_.length)}`;
      for (let b = 0; b < 1; b++) {
         v_image_ = `${v_image_.length * 2}`;
      }
         v_image_ = `${privacyE.length}`;
      for (let b = 0; b < 2; b++) {
         privacyE = [parseInt(`${defaultplayerimgt}`) | privacyE.length];
      }
         privacyE.push(v_image_.length & parseInt(`${defaultplayerimgt}`));
      let filledt = 8796932 <= privacyE.length;
      do {
         privacyE = [privacyE.length / 1];
         if (filledt) {
            break;
         }
      } while (((privacyE.length * v_image_.length) == 1 && 1 == (privacyE.length * v_image_.length)) && filledt);
      while (5 <= (v_image_.length ^ 1)) {
          let mbridgeO = 2;
          let hejik = String.fromCharCode(106,95,53,57,95,119,104,105,116,101,115,0);
          let iconscheduleY: Array<any> = [977, 544, 305];
         defaultplayerimgt -= parseFloat(`${iconscheduleY.length % 1}`);
         mbridgeO *= hejik.length & 3;
         hejik += `${3 << (Math.min(4, hejik.length))}`;
         iconscheduleY.push(hejik.length & 1);
         break;
      }
          let whatsappj = String.fromCharCode(115,95,53,51,95,103,101,116,0);
         v_image_ = `${v_image_.length}`;
         whatsappj = `${(String.fromCharCode(66,0) == whatsappj ? whatsappj.length : whatsappj.length)}`;
      sendF = new Map([[`${leagueq.size}`, leagueq.size * homeiconJ.size]]);
   }
       let attributedstring6 = 2.0;
       let libjsijniprofilerb: Array<any> = [284, 556, 717];
         attributedstring6 *= parseFloat(`${libjsijniprofilerb.length ^ 2}`);
      let umengG = 9805235 >= libjsijniprofilerb.length;
      do {
          let footballfiledlayoutx: Array<any> = [102, 95];
          let basketballawayteamT: Map<any, any> = new Map([[String.fromCharCode(112,97,114,97,109,101,116,101,114,95,51,95,52,54,0),String.fromCharCode(115,117,112,101,114,95,106,95,55,54,0)], [String.fromCharCode(116,111,100,97,121,115,95,104,95,52,53,0),String.fromCharCode(99,117,116,101,115,116,95,103,95,48,0)]]);
          let formg = 2.0;
         libjsijniprofilerb = [footballfiledlayoutx.length | 2];
         footballfiledlayoutx.push(3 | parseInt(`${formg}`));
         basketballawayteamT = new Map([[`${basketballawayteamT.size}`, 1]]);
         formg -= basketballawayteamT.size;
         if (umengG) {
            break;
         }
      } while (umengG && ((attributedstring6 + 4.31) < 4.62 || (attributedstring6 + parseFloat(`${libjsijniprofilerb.length}`)) < 4.31));
          let zhuboI = String.fromCharCode(101,95,54,54,95,97,112,112,101,97,114,97,110,99,101,0);
          let libimagepipelineS = 5;
          let rootc = 4;
         libjsijniprofilerb.push(libimagepipelineS);
         zhuboI = `${2 << (Math.min(2, zhuboI.length))}`;
         libimagepipelineS *= 3 >> (Math.min(4, zhuboI.length));
         rootc *= 2 - rootc;
      let downloaded5 = 5480418 >= libjsijniprofilerb.length;
      do {
         libjsijniprofilerb.push(libjsijniprofilerb.length);
         if (downloaded5) {
            break;
         }
      } while ((libjsijniprofilerb.length <= 5) && downloaded5);
       let clock8 = String.fromCharCode(116,95,51,54,95,115,117,98,108,101,110,103,116,104,0);
          let group7 = 5.0;
         libjsijniprofilerb.push(parseInt(`${group7}`));
      sigmobN = (leagueq.size & libjsijniprofilerb.length) <= 41;
       let minivoda = 0.0;
       let userh = 1.0;
       let episodeC = String.fromCharCode(115,101,108,101,99,116,95,111,95,51,57,0);
          let footballj = true;
          let videovarc = String.fromCharCode(103,95,54,56,95,99,104,105,108,108,0);
          let privatechatbga: Map<any, any> = new Map([[String.fromCharCode(107,95,54,52,95,103,97,117,115,115,0),532], [String.fromCharCode(101,95,49,49,95,112,108,117,114,97,108,105,122,97,116,105,111,110,0),40]]);
         userh -= parseFloat(`${parseInt(`${minivoda}`)}`);
         footballj = (((footballj ? videovarc.length : 10) / (Math.max(videovarc.length, 1))) == 10);
         privatechatbga.set(`${footballj}`, 2);
      let nbatrophys = minivoda <= 6660418.0;
      do {
          let stationn = true;
         minivoda -= parseInt(`${userh}`);
         stationn = (stationn ? !stationn : stationn);
         if (nbatrophys) {
            break;
         }
      } while ((5 <= (parseInt(`${minivoda}`) + 3) || 1.51 <= (3.76 + minivoda)) && nbatrophys);
      if (4.95 < userh) {
         userh -= parseFloat(`${parseInt(`${minivoda}`)}`);
      }
      for (let t = 0; t < 1; t++) {
         userh += parseFloat(`${episodeC.length}`);
      }
      for (let a = 0; a < 1; a++) {
         minivoda += parseInt(`${userh}`);
      }
         userh += parseFloat(`${episodeC.length * parseInt(`${minivoda}`)}`);
          let bottom0: Map<any, any> = new Map([[String.fromCharCode(111,99,115,112,95,57,95,56,48,0),false ], [String.fromCharCode(117,109,111,116,105,111,110,95,102,95,49,53,0),true ], [String.fromCharCode(101,109,109,105,110,116,114,105,110,95,55,95,53,48,0),true ]]);
         episodeC += `${episodeC.length | 3}`;
         bottom0.set(`${bottom0.size}`, bottom0.size);
       let lighte = String.fromCharCode(118,97,108,105,100,97,116,101,95,108,95,56,54,0);
       let owngoal3 = String.fromCharCode(105,95,50,49,95,116,105,108,101,100,0);
         episodeC += `${1 - lighte.length}`;
      flyerd |= ((sigmobN ? 3 : 2) % (Math.max(2, (transfer5 ? 5 : 1))));
   let clubi = sigmobN ? !sigmobN : sigmobN;
   do {
      sigmobN = 93 >= flyerd || 93 >= airbnbstarm;
      if (clubi) {
         break;
      }
   } while (clubi && (sigmobN));
       let internetL: Array<any> = [700, 78, 187];
       let iconadslinkv = String.fromCharCode(114,101,100,117,99,116,105,111,110,95,102,95,50,57,0);
      if (!iconadslinkv.endsWith(`${internetL.length}`)) {
         iconadslinkv = `${iconadslinkv.length}`;
      }
         internetL.push(internetL.length * 3);
      sigmobN = (customr - airbnbstarm) <= 48;
   let contextO = homeiconJ.size <= 6815395;
   do {
      homeiconJ.set(`${transfer5}`, (airbnbstarm ^ (transfer5 ? 5 : 2)));
      if (contextO) {
         break;
      }
   } while (contextO && (homeiconJ.size <= flyerd));
      transfer5 = homeiconJ.size >= 96 || leagueq.size >= 96;
   while (4 < (5 + homeiconJ.size) || homeiconJ.size < 5) {
      transfer5 = sigmobN;
      break;
   }
      dataR.push(3);
      leagueq.set(`${sigmobN}`, ((clubT ? 4 : 2)));
   if (3.39 == (5.76 + customr) && 5.68 == (5.76 + customr)) {
       let private_5eO = 1.0;
       let adulti = 4.0;
       let textlayoutmanagery: Map<any, any> = new Map([[String.fromCharCode(110,111,116,99,104,101,100,95,122,95,52,53,0),159], [String.fromCharCode(116,95,57,53,95,114,111,103,114,97,109,0),444]]);
       let feedbackP = true;
       let shootyesgoale = String.fromCharCode(103,111,108,111,109,98,95,48,95,51,51,0);
          let become6 = String.fromCharCode(104,95,50,50,95,98,97,108,97,110,99,101,115,0);
          let anythinkt = 0.0;
         feedbackP = 75.3 > (adulti - anythinkt);
         become6 = `${(String.fromCharCode(98,0) == become6 ? become6.length : become6.length)}`;
         anythinkt /= Math.max(4, become6.length);
      for (let q = 0; q < 2; q++) {
          let long_8S = String.fromCharCode(112,111,116,105,115,105,111,110,95,112,95,57,53,0);
          let libfollyn = false;
          let userP: Array<any> = [655, 678];
          let penaltyshootnogoalm = String.fromCharCode(117,95,54,49,95,105,110,118,115,98,111,120,0);
          let libreactF = String.fromCharCode(112,97,115,115,116,104,114,111,117,103,104,95,56,95,57,53,0);
         shootyesgoale = `${((feedbackP ? 4 : 5) * shootyesgoale.length)}`;
         long_8S += `${userP.length / 1}`;
         libfollyn = ((libreactF.length | (libfollyn ? 33 : libreactF.length)) < 33);
         userP.push(3 + libreactF.length);
         penaltyshootnogoalm = "2";
      }
      for (let z = 0; z < 2; z++) {
          let targety = 5;
          let updatesp = 0;
          let libnmsV = String.fromCharCode(99,108,105,101,110,116,95,119,95,55,51,0);
          let detailS: Map<any, any> = new Map([[String.fromCharCode(108,95,51,49,95,98,117,109,112,0),String.fromCharCode(107,95,56,95,100,101,112,0)], [String.fromCharCode(104,101,105,103,104,116,95,55,95,50,57,0),String.fromCharCode(101,110,99,111,100,101,95,107,95,53,54,0)], [String.fromCharCode(122,95,50,95,97,108,101,114,116,0),String.fromCharCode(98,95,56,51,95,115,116,111,114,121,98,111,97,114,100,0)]]);
         feedbackP = 71 < targety && shootyesgoale.length < 71;
         targety /= Math.max(1, 3);
         updatesp /= Math.max(libnmsV.length, 2);
         libnmsV = `${libnmsV.length}`;
         detailS = new Map([[`${detailS.size}`, detailS.size << (Math.min(libnmsV.length, 2))]]);
      }
         private_5eO += 3 - parseInt(`${adulti}`);
          let homeiconC = 1;
          let modityv: Array<any> = [String.fromCharCode(101,107,121,95,51,95,49,51,0), String.fromCharCode(102,95,56,56,95,115,117,98,108,97,121,101,114,115,0)];
          let plashD = 1.0;
         shootyesgoale = `${((feedbackP ? 4 : 3) / (Math.max(parseInt(`${plashD}`), 7)))}`;
         homeiconC -= modityv.length;
         modityv.push(3);
         plashD += homeiconC;
      let predictionE = shootyesgoale.length <= 6326961;
      do {
         shootyesgoale = `${shootyesgoale.length}`;
         if (predictionE) {
            break;
         }
      } while (((3.69 - adulti) >= 4.25) && predictionE);
      if (1 > (textlayoutmanagery.size * shootyesgoale.length)) {
         textlayoutmanagery = new Map([[`${textlayoutmanagery.size}`, parseInt(`${adulti}`) / (Math.max(3, 5))]]);
      }
      let green4 = 8713557.0 >= adulti;
      do {
          let emojil = 3.0;
          let search8: Map<any, any> = new Map([[String.fromCharCode(100,95,57,48,95,110,97,109,101,100,0),String.fromCharCode(122,95,51,48,95,119,101,98,112,0)], [String.fromCharCode(110,95,52,52,95,108,105,115,116,0),String.fromCharCode(110,105,100,108,110,95,52,95,57,52,0)]]);
          let statisticsh = String.fromCharCode(109,111,118,101,110,99,95,100,95,57,54,0);
          let const_7c: Map<any, any> = new Map([[String.fromCharCode(120,95,54,57,95,109,101,109,0),870], [String.fromCharCode(99,104,114,111,109,97,107,101,121,95,50,95,56,55,0),921]]);
         adulti /= Math.max(parseFloat(`${1}`), 5);
         emojil += 1;
         search8 = new Map([[`${search8.size}`, 3 + search8.size]]);
         statisticsh += `${parseInt(`${emojil}`)}`;
         const_7c.set(`${emojil}`, 2);
         if (green4) {
            break;
         }
      } while (((private_5eO - adulti) < 5.27 && (adulti - private_5eO) < 5.27) && green4);
         shootyesgoale += `${shootyesgoale.length | 3}`;
      for (let u = 0; u < 2; u++) {
         feedbackP = !feedbackP;
      }
         private_5eO += parseInt(`${private_5eO}`) / 1;
      while (textlayoutmanagery.size <= 1 && 5 <= (textlayoutmanagery.size & 1)) {
          let unimplementedviewd = 5.0;
         textlayoutmanagery = new Map([[`${private_5eO}`, 3]]);
         unimplementedviewd += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${unimplementedviewd}`)), 2))}`);
         break;
      }
         feedbackP = 8 <= textlayoutmanagery.size;
      for (let z = 0; z < 2; z++) {
         adulti -= parseFloat(`${2 | parseInt(`${adulti}`)}`);
      }
      let iconsettingd = private_5eO >= 5139406.0;
      do {
          let bing2 = String.fromCharCode(103,97,117,115,115,95,52,95,57,48,0);
          let b_countv = 2.0;
          let schedulerw: Map<any, any> = new Map([[String.fromCharCode(115,116,114,99,109,112,95,100,95,49,53,0),383], [String.fromCharCode(102,111,114,99,101,95,107,95,50,54,0),310]]);
         private_5eO -= ((feedbackP ? 2 : 5));
         bing2 = "3";
         b_countv /= Math.max(schedulerw.size << (Math.min(4, Math.abs(parseInt(`${b_countv}`)))), 4);
         schedulerw = new Map([[bing2, parseInt(`${b_countv}`) * bing2.length]]);
         if (iconsettingd) {
            break;
         }
      } while ((2.45 >= adulti) && iconsettingd);
      leagueq.set(`${flyerd}`, dataR.length >> (Math.min(Math.abs(1), 2)));
   }
       let feedbackE = String.fromCharCode(101,95,52,48,95,112,111,121,116,109,0);
       let liveR: Map<any, any> = new Map([[String.fromCharCode(113,95,57,52,95,97,103,101,110,116,115,0),String.fromCharCode(115,112,101,97,107,105,110,103,95,116,95,51,57,0)], [String.fromCharCode(108,95,52,57,95,115,108,105,112,112,97,103,101,0),String.fromCharCode(109,95,53,53,95,97,110,103,108,101,115,0)]]);
      if (5 == (feedbackE.length >> (Math.min(5, Math.abs(liveR.size)))) || 5 == (5 >> (Math.min(3, Math.abs(liveR.size))))) {
         feedbackE = `${(feedbackE == String.fromCharCode(104,0) ? feedbackE.length : liveR.size)}`;
      }
      while (!feedbackE.endsWith(`${liveR.size}`)) {
         liveR = new Map([[`${liveR.size}`, liveR.size + feedbackE.length]]);
         break;
      }
      if (!feedbackE.endsWith(`${liveR.size}`)) {
          let singapore1 = String.fromCharCode(117,95,52,50,95,99,107,112,116,0);
          let iconwatch1 = String.fromCharCode(116,95,51,49,95,108,117,109,98,101,114,106,97,99,107,0);
          let moditym = 0.0;
          let notificationfillemptyr = String.fromCharCode(97,114,116,95,97,95,49,48,0);
          let gradleX = 4;
         liveR = new Map([[iconwatch1, gradleX]]);
         singapore1 = `${singapore1.length - 2}`;
         iconwatch1 = "3";
         moditym -= parseInt(`${moditym}`);
         notificationfillemptyr += `${parseInt(`${moditym}`)}`;
         gradleX -= (String.fromCharCode(112,0) == singapore1 ? singapore1.length : parseInt(`${moditym}`));
      }
      while ((1 ^ feedbackE.length) > 1) {
         feedbackE += `${liveR.size}`;
         break;
      }
      if (feedbackE.startsWith(`${liveR.size}`)) {
          let fastforward7 = String.fromCharCode(100,111,109,97,105,110,95,57,95,54,55,0);
          let activen = String.fromCharCode(117,95,52,51,95,105,119,104,116,0);
         liveR.set(activen, 1);
         fastforward7 = `${fastforward7.length}`;
         activen += `${fastforward7.length}`;
      }
      let spinnerf = 8929961 >= liveR.size;
      do {
         liveR = new Map([[`${liveR.size}`, (String.fromCharCode(104,0) == feedbackE ? feedbackE.length : liveR.size)]]);
         if (spinnerf) {
            break;
         }
      } while ((1 == (liveR.size / (Math.max(feedbackE.length, 5))) && (feedbackE.length / (Math.max(1, 9))) == 5) && spinnerf);
      dataR.push(3 & parseInt(`${customr}`));
   let diceU = customr >= 5027077.0;
   do {
      customr /= Math.max(4, 3 / (Math.max(4, parseInt(`${customr}`))));
      if (diceU) {
         break;
      }
   } while ((libruntimeexecutorx) && diceU);
       let whatsappY = 1;
       let redirectC = 1.0;
       let sheeth = String.fromCharCode(107,95,53,95,119,99,104,97,114,0);
      let icontransferclubz = 8021787 <= whatsappY;
      do {
         whatsappY >>= Math.min(1, Math.abs(sheeth.length >> (Math.min(Math.abs(1), 5))));
         if (icontransferclubz) {
            break;
         }
      } while (icontransferclubz && (redirectC == whatsappY));
         redirectC -= (parseFloat(`${String.fromCharCode(65,0) == sheeth ? parseInt(`${redirectC}`) : sheeth.length}`));
      let calendarH = whatsappY <= 8434483;
      do {
          let pausen = String.fromCharCode(99,111,108,108,101,116,105,111,110,95,116,95,52,55,0);
          let greyY: Array<any> = [292, 103];
          let nalyticsh = 2.0;
          let gemfileY = String.fromCharCode(110,112,112,115,99,97,108,101,95,97,95,50,56,0);
          let vipsporty = String.fromCharCode(104,97,114,100,116,104,114,101,115,104,95,100,95,54,51,0);
         whatsappY -= 1;
         pausen += `${3 << (Math.min(2, Math.abs(parseInt(`${nalyticsh}`))))}`;
         greyY.push(pausen.length - greyY.length);
         nalyticsh -= parseFloat(`${parseInt(`${nalyticsh}`) ^ gemfileY.length}`);
         gemfileY = `${(String.fromCharCode(85,0) == vipsporty ? pausen.length : vipsporty.length)}`;
         if (calendarH) {
            break;
         }
      } while (((whatsappY | 3) <= 4) && calendarH);
         whatsappY -= 2 & whatsappY;
       let textlayoutmanagerJ = 2.0;
       let liveH = 3.0;
      let lightg = String.fromCharCode(95,55,103,99,56,98,0) == sheeth;
      do {
         sheeth = `${parseInt(`${redirectC}`) * 3}`;
         if (lightg) {
            break;
         }
      } while ((4 <= (sheeth.length - parseInt(`${textlayoutmanagerJ}`))) && lightg);
         redirectC *= parseFloat(`${parseInt(`${redirectC}`) / (Math.max(2, 9))}`);
         textlayoutmanagerJ += parseFloat(`${parseInt(`${liveH}`) / 3}`);
         sheeth = `${parseInt(`${liveH}`)}`;
      flyerd /= Math.max(1, parseInt(`${redirectC}`));
   while (!sigmobN) {
      dataR = [homeactive1.size];
      break;
   }
   let watchX = transfer5 ? !transfer5 : transfer5;
   do {
      transfer5 = dataR.length > 91;
      if (watchX) {
         break;
      }
   } while (watchX && (transfer5 && 3 <= (2 ^ flyerd)));
      flyerd %= Math.max(((transfer5 ? 2 : 5) * airbnbstarm), 4);
   while (5 > (2 << (Math.min(4, dataR.length))) && clubT) {
       let whiteanimationliveT = String.fromCharCode(101,120,116,114,97,112,111,108,97,116,101,95,109,95,53,48,0);
       let homeloadingo = true;
       let leftZ = true;
       let iconclosewhitewithbgu = String.fromCharCode(98,95,56,51,95,114,101,100,101,116,101,99,116,0);
       let usernameu = String.fromCharCode(121,95,57,54,95,109,98,102,105,108,116,101,114,0);
      let audiencei = 7146308 <= whiteanimationliveT.length;
      do {
         whiteanimationliveT += `${((leftZ ? 2 : 3))}`;
         if (audiencei) {
            break;
         }
      } while (audiencei && (whiteanimationliveT.length <= 1 || usernameu != String.fromCharCode(109,0)));
         iconclosewhitewithbgu += `${iconclosewhitewithbgu.length}`;
       let j_centerE: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,95,50,95,57,54,0),String.fromCharCode(112,95,55,51,95,120,99,108,105,0)], [String.fromCharCode(115,122,97,98,111,115,95,108,95,49,48,0),String.fromCharCode(98,95,56,48,95,99,98,112,104,105,0)]]);
      let eabafadfadddbafeddddeeefeaafi = String.fromCharCode(48,114,116,98,95,114,49,0) == usernameu;
      do {
         usernameu += `${((homeloadingo ? 5 : 2))}`;
         if (eabafadfadddbafeddddeeefeaafi) {
            break;
         }
      } while ((4 > usernameu.length) && eabafadfadddbafeddddeeefeaafi);
      while (!leftZ) {
         iconclosewhitewithbgu += `${usernameu.length | 3}`;
         break;
      }
      if (!whiteanimationliveT.includes(`${homeloadingo}`)) {
          let lang3 = String.fromCharCode(104,95,53,51,95,101,110,99,97,112,115,117,108,97,116,101,100,0);
          let reactnativejs3 = 2.0;
          let scrollviewj = true;
          let relatedO = String.fromCharCode(98,108,97,99,107,108,105,115,116,95,104,95,54,50,0);
         homeloadingo = relatedO.length >= 74;
         lang3 += `${(parseInt(`${reactnativejs3}`) - (scrollviewj ? 2 : 4))}`;
         reactnativejs3 -= (parseFloat(`${(scrollviewj ? 2 : 5)}`));
         relatedO += `${parseInt(`${reactnativejs3}`) ^ 1}`;
      }
         homeloadingo = !homeloadingo;
          let libavcodec_ = 1;
         usernameu += `${(3 >> (Math.min(Math.abs((leftZ ? 5 : 4)), 4)))}`;
         libavcodec_ *= 2;
       let description_9dR = String.fromCharCode(100,101,118,112,111,108,108,95,53,95,52,56,0);
      for (let p = 0; p < 2; p++) {
          let anytime1: Map<any, any> = new Map([[String.fromCharCode(104,95,49,49,95,115,101,113,0),String.fromCharCode(112,95,51,48,95,97,112,97,99,107,101,116,0)], [String.fromCharCode(111,99,97,108,95,122,95,49,51,0),String.fromCharCode(111,110,101,108,105,110,101,95,108,95,53,53,0)], [String.fromCharCode(115,101,116,95,49,95,51,48,0),String.fromCharCode(122,95,52,55,95,101,118,97,115,97,112,112,0)]]);
          let default_sr = false;
          let hongkongj = false;
          let iconnewsshareb = String.fromCharCode(115,116,105,112,112,101,100,95,57,95,52,0);
          let flyern: Array<any> = [387, 336, 908];
         whiteanimationliveT = `${flyern.length}`;
         anytime1 = new Map([[`${anytime1.size}`, ((default_sr ? 4 : 4) << (Math.min(Math.abs(anytime1.size), 1)))]]);
         default_sr = !hongkongj;
         iconnewsshareb += `${(anytime1.size << (Math.min(1, Math.abs((hongkongj ? 4 : 3)))))}`;
         flyern.push(2);
      }
          let modeH: Map<any, any> = new Map([[String.fromCharCode(116,95,53,49,95,119,114,97,112,112,101,100,0),String.fromCharCode(110,95,51,53,95,109,112,116,111,97,110,110,101,120,98,0)], [String.fromCharCode(116,105,109,101,115,99,97,108,101,95,114,95,57,54,0),String.fromCharCode(122,95,51,49,95,100,106,112,101,103,0)]]);
          let langm = 3.0;
         iconclosewhitewithbgu += `${parseInt(`${langm}`) * modeH.size}`;
      let stylel = leftZ ? !leftZ : leftZ;
      do {
         leftZ = iconclosewhitewithbgu.length <= 31 || homeloadingo;
         if (stylel) {
            break;
         }
      } while (stylel && (leftZ));
         iconclosewhitewithbgu += `${usernameu.length}`;
         usernameu += `${1 % (Math.max(10, whiteanimationliveT.length))}`;
          let holderA = 1.0;
         description_9dR = "2";
         holderA += parseFloat(`${parseInt(`${holderA}`) % (Math.max(parseInt(`${holderA}`), 3))}`);
      clubT = dataR.includes(transfer5);
      break;
   }
       let sharewhitep = 2.0;
       let latn1: Map<any, any> = new Map([[String.fromCharCode(107,95,54,50,95,116,101,120,116,117,114,101,100,0),true ], [String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,115,95,120,95,50,53,0),false ]]);
       let iconsettingM = 1.0;
          let notificationfillemptyy: Array<any> = [518, 799, 847];
         latn1.set(`${iconsettingM}`, notificationfillemptyy.length % (Math.max(5, parseInt(`${iconsettingM}`))));
      if (!Array.from(latn1.values()).includes(sharewhitep)) {
          let telemetryP = String.fromCharCode(118,105,100,101,111,105,110,102,111,104,101,97,100,101,114,95,106,95,52,51,0);
          let privilegeo = true;
          let leakcheckeru: Map<any, any> = new Map([[String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,95,50,95,50,54,0),String.fromCharCode(105,95,57,48,95,119,105,110,100,111,119,101,100,0)], [String.fromCharCode(116,114,105,103,103,101,114,95,107,95,52,0),String.fromCharCode(104,95,54,48,95,102,114,97,109,101,112,97,99,107,0)], [String.fromCharCode(103,101,110,99,102,103,115,95,48,95,53,55,0),String.fromCharCode(109,101,109,110,114,95,111,95,50,51,0)]]);
          let roomB = String.fromCharCode(115,95,49,53,95,115,117,112,112,108,101,109,101,110,116,97,108,0);
         latn1 = new Map([[`${privilegeo}`, ((privilegeo ? 1 : 2) | roomB.length)]]);
         telemetryP = `${leakcheckeru.size / 3}`;
         leakcheckeru = new Map([[`${leakcheckeru.size}`, 2]]);
         roomB = `${telemetryP.length * leakcheckeru.size}`;
      }
         sharewhitep -= parseInt(`${sharewhitep}`) - 1;
      while (5 < (latn1.size / (Math.max(4, 4))) || (latn1.size - iconsettingM) < 5.50) {
          let clubQ = String.fromCharCode(102,95,53,95,104,101,120,98,110,0);
          let reward1: Array<any> = [848, 22, 988];
          let settingj: Array<any> = [250, 51, 109];
         iconsettingM *= parseInt(`${sharewhitep}`) % 3;
         clubQ = `${clubQ.length | reward1.length}`;
         reward1.push(settingj.length - reward1.length);
         settingj.push(settingj.length / (Math.max(1, 2)));
         break;
      }
         latn1.set(`${iconsettingM}`, 1 & latn1.size);
      clubT = homeactive1.size == 6;
   while (sendF.get(`${airbnbstarm}`) == null) {
       let mails = 4.0;
       let penaltyshootnogoalP = 1;
       let backgroundD = String.fromCharCode(109,117,116,97,116,101,95,98,95,50,54,0);
       let m_positionN: Array<any> = [String.fromCharCode(115,101,113,117,101,110,99,101,115,95,106,95,49,53,0), String.fromCharCode(103,95,52,52,95,118,101,99,115,0)];
      if (4 == (m_positionN.length / (Math.max(backgroundD.length, 8))) || 4 == (m_positionN.length / (Math.max(10, backgroundD.length)))) {
          let attributedstring5 = String.fromCharCode(99,114,101,97,116,111,114,95,112,95,56,54,0);
          let currentr = String.fromCharCode(98,95,55,54,95,97,117,116,104,111,114,105,122,101,114,0);
          let libjsinspectorM = String.fromCharCode(116,111,111,116,105,112,95,116,95,50,54,0);
          let renderU = false;
          let completeC = false;
         backgroundD = `${currentr.length << (Math.min(2, backgroundD.length))}`;
         attributedstring5 += `${attributedstring5.length - 1}`;
         currentr = `${((renderU ? 5 : 5) * 1)}`;
         libjsinspectorM = `${((renderU ? 3 : 4) + 1)}`;
         completeC = (!completeC ? !renderU : completeC);
      }
      while (4 > (3 | penaltyshootnogoalP) || (penaltyshootnogoalP | backgroundD.length) > 3) {
         penaltyshootnogoalP <<= Math.min(1, backgroundD.length);
         break;
      }
          let overlay3 = false;
          let baser = false;
         backgroundD = "3";
      while (5.61 >= (mails * penaltyshootnogoalP)) {
         penaltyshootnogoalP &= 3 & penaltyshootnogoalP;
         break;
      }
         backgroundD = "3";
      for (let y = 0; y < 2; y++) {
         penaltyshootnogoalP *= backgroundD.length;
      }
      while ((penaltyshootnogoalP - backgroundD.length) >= 1) {
         backgroundD += `${penaltyshootnogoalP | backgroundD.length}`;
         break;
      }
         penaltyshootnogoalP &= m_positionN.length;
      if ((m_positionN.length << (Math.min(backgroundD.length, 2))) > 5) {
         backgroundD += `${1 | m_positionN.length}`;
      }
         penaltyshootnogoalP %= Math.max(3, backgroundD.length - 2);
      while (3 >= (penaltyshootnogoalP / (Math.max(backgroundD.length, 8))) || 3 >= (penaltyshootnogoalP / (Math.max(10, backgroundD.length)))) {
          let y_lockj = 5.0;
         backgroundD += "2";
         y_lockj /= Math.max(3, parseInt(`${y_lockj}`) | 1);
         break;
      }
          let defaultteamt = String.fromCharCode(110,95,55,55,95,119,97,105,116,105,110,103,0);
          let related7 = 2.0;
          let guideZ = String.fromCharCode(109,97,116,99,104,105,110,102,111,95,57,95,57,50,0);
         mails *= parseFloat(`${1}`);
         defaultteamt += `${guideZ.length}`;
         related7 /= Math.max(5, parseFloat(`${defaultteamt.length & guideZ.length}`));
      sendF.set(`${transfer5}`, homeactive1.size);
      break;
   }
      homeactive1 = new Map([[`${sigmobN}`, 1 + parseInt(`${customr}`)]]);
   if (Array.from(leagueq.keys()).includes(`${sendF.size}`)) {
       let largesoundh: Map<any, any> = new Map([[String.fromCharCode(99,98,99,114,95,107,95,55,54,0),false ], [String.fromCharCode(111,95,53,53,95,116,104,114,101,97,100,103,114,111,117,112,0),true ]]);
       let sharewhiteV = String.fromCharCode(102,97,117,99,101,116,115,95,112,95,52,56,0);
       let uinit_dh = String.fromCharCode(120,95,54,49,95,105,115,97,99,102,105,120,0);
       let yellowx: Map<any, any> = new Map([[String.fromCharCode(121,95,54,51,95,103,110,117,116,108,115,0),763], [String.fromCharCode(100,117,109,109,121,95,111,95,51,54,0),414]]);
          let anythinkx: Array<any> = [String.fromCharCode(115,111,97,99,99,101,112,116,95,57,95,55,49,0), String.fromCharCode(116,95,52,49,95,105,99,101,99,97,115,116,0), String.fromCharCode(100,101,108,101,103,97,116,105,111,110,95,52,95,54,49,0)];
         largesoundh.set(uinit_dh, (uinit_dh == String.fromCharCode(73,0) ? largesoundh.size : uinit_dh.length));
         anythinkx.push(anythinkx.length);
      while (2 > uinit_dh.length) {
         uinit_dh = `${1 & sharewhiteV.length}`;
         break;
      }
      let ticked_ = String.fromCharCode(51,56,97,99,114,56,117,0) == sharewhiteV;
      do {
         sharewhiteV = "2";
         if (ticked_) {
            break;
         }
      } while ((sharewhiteV.length > 3 && 3 > uinit_dh.length) && ticked_);
         yellowx = new Map([[`${largesoundh.size}`, sharewhiteV.length - 2]]);
         largesoundh.set(uinit_dh, sharewhiteV.length);
      if ((sharewhiteV.length << (Math.min(3, Math.abs(largesoundh.size)))) >= 5) {
         largesoundh.set(uinit_dh, largesoundh.size >> (Math.min(uinit_dh.length, 3)));
      }
          let policye = String.fromCharCode(116,117,114,98,111,106,112,101,103,95,101,95,56,49,0);
         sharewhiteV += `${sharewhiteV.length}`;
         policye = `${policye.length}`;
          let executorE = 3.0;
          let eactn = 0.0;
         sharewhiteV = `${3 - uinit_dh.length}`;
         executorE += parseFloat(`${parseInt(`${executorE}`) + 3}`);
         eactn /= Math.max(1, 2);
         uinit_dh += `${yellowx.size}`;
      while (4 > (1 + yellowx.size) && (1 + largesoundh.size) > 5) {
          let sideh = 4;
          let filel: Array<any> = [332, 116, 924];
          let verticalJ = 3.0;
         largesoundh = new Map([[`${yellowx.size}`, yellowx.size]]);
         sideh *= filel.length & 1;
         filel.push(parseInt(`${verticalJ}`) << (Math.min(filel.length, 4)));
         verticalJ /= Math.max(5, filel.length - sideh);
         break;
      }
         yellowx.set(uinit_dh, yellowx.size | 3);
          let page9: Array<any> = [85, 57];
          let subbasketballplayerB = false;
         uinit_dh = `${page9.length - yellowx.size}`;
         page9 = [(1 ^ (subbasketballplayerB ? 1 : 4))];
      leagueq = new Map([[`${transfer5}`, airbnbstarm]]);
   }
      dataR = [leagueq.size >> (Math.min(Math.abs(3), 1))];
   while (clubT || libruntimeexecutorx) {
      clubT = !libruntimeexecutorx;
      break;
   }
      leagueq = new Map([[`${leagueq.size}`, 2]]);
      flyerd %= Math.max(((libruntimeexecutorx ? 5 : 4)), 5);
      flyerd /= Math.max(5, (leagueq.size >> (Math.min(5, Math.abs((graphA ? 3 : 2))))));
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
       let temperatured = String.fromCharCode(116,95,56,53,95,113,117,111,116,97,0);
    let navigationK = 0.0;
    let basez = String.fromCharCode(100,101,99,105,109,97,108,95,116,95,53,54,0);
    let dangerk = 4;
    let iconschedules = 3.0;
    let progressu = String.fromCharCode(98,121,114,121,105,95,117,95,53,0);
    let encryptA = String.fromCharCode(97,95,50,53,95,98,117,103,115,0);
    let showlessl = 4.0;
    let emojif = 2.0;
    let videojsU = true;
    let spinnerp = false;
      navigationK += (parseFloat(`${(videojsU ? 5 : 1) * parseInt(`${iconschedules}`)}`));
   while (videojsU) {
       let predictionbuttono = 0;
       let iinit_076 = 3.0;
       let dropdownc = String.fromCharCode(119,95,57,51,95,101,120,116,114,97,102,105,101,108,100,0);
       let clubW = String.fromCharCode(109,95,52,53,95,100,105,115,116,97,110,99,101,115,0);
      while ((predictionbuttono + iinit_076) <= 2.49) {
         predictionbuttono -= 2 + dropdownc.length;
         break;
      }
          let activityU = 2.0;
          let greenD = true;
         predictionbuttono >>= Math.min(Math.abs(3 | clubW.length), 4);
         activityU /= Math.max(4, parseFloat(`${1}`));
         greenD = activityU >= activityU;
      if ((2 >> (Math.min(5, Math.abs(predictionbuttono)))) > 5) {
          let mintegrall: Array<any> = [913, 922];
          let short_l7J = String.fromCharCode(109,105,110,113,95,114,95,51,57,0);
          let group1 = 3;
          let becomea = 1.0;
          let default_0N = String.fromCharCode(97,99,99,101,115,115,105,98,108,101,95,115,95,53,0);
         iinit_076 -= parseFloat(`${predictionbuttono}`);
         mintegrall = [default_0N.length];
         short_l7J += `${mintegrall.length}`;
         group1 *= short_l7J.length;
         becomea += parseFloat(`${short_l7J.length}`);
         default_0N = `${(String.fromCharCode(90,0) == default_0N ? group1 : default_0N.length)}`;
      }
       let carouselV = 0.0;
       let showE = 1.0;
      while (1.34 == (predictionbuttono - iinit_076)) {
          let zhengpianP: Array<any> = [298, 513];
          let s_centerB = 1.0;
          let gesture5 = 5.0;
          let iconsubssuccessO = 3.0;
         iinit_076 *= parseFloat(`${clubW.length}`);
         zhengpianP = [parseInt(`${s_centerB}`)];
         gesture5 *= parseInt(`${s_centerB}`);
         iconsubssuccessO *= parseFloat(`${zhengpianP.length}`);
         break;
      }
          let windV = 2.0;
         iinit_076 -= parseFloat(`${dropdownc.length}`);
         windV *= parseInt(`${windV}`) * 3;
         showE *= parseInt(`${showE}`);
          let main_qG: Array<any> = [209, 795];
          let playercommonB = String.fromCharCode(111,95,50,57,95,100,105,109,115,0);
         carouselV /= Math.max(main_qG.length, 4);
         main_qG.push(1 << (Math.min(5, playercommonB.length)));
         playercommonB = `${playercommonB.length << (Math.min(Math.abs(1), 2))}`;
      for (let z = 0; z < 3; z++) {
         carouselV *= dropdownc.length + 1;
      }
      let libswresampleT = String.fromCharCode(105,118,121,95,100,120,103,119,0) == dropdownc;
      do {
          let profile3 = true;
          let hooksj = String.fromCharCode(97,95,53,57,95,97,117,100,105,111,99,111,110,118,101,114,116,0);
          let usera = 2;
          let basketballz = 3;
          let typesp = String.fromCharCode(122,95,54,50,95,116,104,114,111,116,116,108,105,110,103,0);
         dropdownc += `${clubW.length}`;
         profile3 = hooksj.length <= basketballz;
         hooksj += `${basketballz ^ 1}`;
         usera -= usera ^ typesp.length;
         typesp = `${hooksj.length}`;
         if (libswresampleT) {
            break;
         }
      } while ((!dropdownc.startsWith(`${predictionbuttono}`)) && libswresampleT);
      let yellowscoreballj = showE >= 8879970.0;
      do {
         showE /= Math.max(predictionbuttono, 1);
         if (yellowscoreballj) {
            break;
         }
      } while ((5.66 >= (iinit_076 + showE) && 5.66 >= (iinit_076 + showE)) && yellowscoreballj);
      for (let n = 0; n < 1; n++) {
         iinit_076 -= parseFloat(`${2 >> (Math.min(3, dropdownc.length))}`);
      }
      videojsU = dangerk >= 95 && String.fromCharCode(69,0) == basez;
      break;
   }
   while (!temperatured.startsWith(`${navigationK}`)) {
      temperatured = `${parseInt(`${showlessl}`) >> (Math.min(4, Math.abs(2)))}`;
      break;
   }
       let math4 = String.fromCharCode(121,95,51,52,95,115,116,99,111,0);
       let moret = String.fromCharCode(115,105,108,101,110,99,101,95,108,95,52,50,0);
       let matchdetailbgU = 1;
          let t_imageJ = 3;
          let issubK: Array<any> = [851, 56, 708];
          let filedJ = String.fromCharCode(103,97,109,101,115,95,121,95,49,54,0);
         matchdetailbgU -= 2 ^ matchdetailbgU;
         t_imageJ -= filedJ.length;
         issubK = [issubK.length];
         filedJ += `${issubK.length}`;
         moret = `${moret.length - matchdetailbgU}`;
         moret = `${math4.length}`;
      if (matchdetailbgU == 3) {
          let analytics0 = 0.0;
          let nativemodulez = String.fromCharCode(118,115,117,98,113,95,49,95,49,55,0);
         moret = `${math4.length * 3}`;
         analytics0 /= Math.max(4, parseFloat(`${parseInt(`${analytics0}`)}`));
         nativemodulez += `${(String.fromCharCode(102,0) == nativemodulez ? nativemodulez.length : parseInt(`${analytics0}`))}`;
      }
       let playp: Map<any, any> = new Map([[String.fromCharCode(122,95,49,54,95,107,105,110,103,0),190], [String.fromCharCode(107,95,57,95,97,114,101,113,117,101,115,116,0),788]]);
      let private_9wz = 8096319 <= matchdetailbgU;
      do {
         matchdetailbgU += 2 ^ moret.length;
         if (private_9wz) {
            break;
         }
      } while ((5 > (matchdetailbgU >> (Math.min(Math.abs(1), 4))) || (matchdetailbgU >> (Math.min(Math.abs(playp.size), 3))) > 1) && private_9wz);
         matchdetailbgU -= matchdetailbgU - 2;
      if (3 < (matchdetailbgU % 5)) {
          let logouserE = String.fromCharCode(110,95,56,49,95,97,99,107,110,111,119,108,101,100,103,101,109,101,110,116,0);
         matchdetailbgU >>= Math.min(1, Math.abs(moret.length / (Math.max(3, 1))));
         logouserE = `${logouserE.length & logouserE.length}`;
      }
      if (math4.includes(moret)) {
          let modaln = String.fromCharCode(109,95,57,50,95,98,108,111,99,107,115,105,122,101,0);
          let watchr: Map<any, any> = new Map([[String.fromCharCode(99,95,53,54,95,117,110,115,99,97,108,101,100,0),150], [String.fromCharCode(109,115,118,105,100,101,111,95,114,95,57,52,0),271]]);
          let successO = 4;
          let philippiness = 1.0;
          let singaporeD: Array<any> = [372, 940, 74];
         math4 += `${playp.size - 2}`;
         modaln = `${parseInt(`${philippiness}`)}`;
         watchr.set(`${philippiness}`, singaporeD.length);
         successO &= 2 * watchr.size;
         singaporeD.push(parseInt(`${philippiness}`));
      }
      iconschedules *= 3 | dangerk;
      emojif /= Math.max(basez.length | 3, 5);
   let hooksW = 6040801.0 <= iconschedules;
   do {
       let package_ajt = String.fromCharCode(122,114,101,111,114,100,101,114,95,122,95,49,52,0);
       let backk = 3.0;
       let u_unlock5: Map<any, any> = new Map([[String.fromCharCode(112,115,110,114,104,118,115,95,102,95,57,56,0),String.fromCharCode(117,95,50,56,95,106,112,101,103,108,115,100,101,99,0)], [String.fromCharCode(102,105,110,100,95,109,95,56,48,0),String.fromCharCode(102,95,51,95,114,103,116,99,115,0)]]);
       let rightL = 5.0;
       let iconclosewhitebgb = 0;
      while (3 > (package_ajt.length << (Math.min(Math.abs(3), 3)))) {
         backk *= parseInt(`${rightL}`) % 1;
         break;
      }
      for (let r = 0; r < 1; r++) {
         u_unlock5 = new Map([[`${u_unlock5.size}`, parseInt(`${rightL}`)]]);
      }
      if (u_unlock5.get(`${backk}`) != null) {
          let iconarrowleftC = 5.0;
          let selectK = String.fromCharCode(109,115,118,99,95,115,95,55,50,0);
          let short_5g: Map<any, any> = new Map([[String.fromCharCode(99,111,108,117,109,110,108,105,115,116,95,56,95,56,53,0),526], [String.fromCharCode(104,100,101,99,95,55,95,49,52,0),229]]);
          let iconX = String.fromCharCode(105,100,115,95,111,95,49,51,0);
         u_unlock5 = new Map([[iconX, iconX.length | parseInt(`${iconarrowleftC}`)]]);
         iconarrowleftC += 2;
         selectK += `${(String.fromCharCode(84,0) == selectK ? selectK.length : short_5g.size)}`;
         short_5g.set(selectK, short_5g.size);
      }
      if (!package_ajt.endsWith(`${iconclosewhitebgb}`)) {
         iconclosewhitebgb /= Math.max(u_unlock5.size, 1);
      }
       let footballtrophyh = 0;
      for (let z = 0; z < 1; z++) {
         backk /= Math.max(4, 2);
      }
         iconclosewhitebgb <<= Math.min(Math.abs(iconclosewhitebgb), 4);
       let iconcalendarw = String.fromCharCode(97,108,108,111,99,97,116,111,114,95,97,95,56,54,0);
      while (3 >= (iconcalendarw.length | 5)) {
         footballtrophyh += 1 >> (Math.min(5, Math.abs(parseInt(`${rightL}`))));
         break;
      }
      let downN = 5669553 >= iconclosewhitebgb;
      do {
         iconclosewhitebgb <<= Math.min(Math.abs(3 & u_unlock5.size), 3);
         if (downN) {
            break;
         }
      } while (((iconclosewhitebgb + 1) < 5) && downN);
         footballtrophyh |= 2;
         u_unlock5.set(`${backk}`, 2 / (Math.max(parseInt(`${rightL}`), 6)));
      let rncoreA = backk >= 6331453.0;
      do {
         backk -= iconclosewhitebgb & u_unlock5.size;
         if (rncoreA) {
            break;
         }
      } while (rncoreA && (!Array.from(u_unlock5.values()).includes(backk)));
      for (let w = 0; w < 3; w++) {
         iconcalendarw = `${footballtrophyh}`;
      }
       let subsW = String.fromCharCode(113,119,111,114,100,95,99,95,52,51,0);
      iconschedules /= Math.max(basez.length << (Math.min(Math.abs(1), 4)), 3);
      if (hooksW) {
         break;
      }
   } while (hooksW && ((2 + parseInt(`${iconschedules}`)) > 4 || (2 + encryptA.length) > 3));
      showlessl /= Math.max(2, 3);
   while (encryptA.length > 1) {
      encryptA += "2";
      break;
   }
   if (3 > (temperatured.length | 1)) {
       let pushk = String.fromCharCode(115,100,107,95,98,95,57,50,0);
       let kickK = false;
       let reddownarrowN = String.fromCharCode(118,97,114,105,110,116,95,114,95,50,50,0);
       let sports_ = 3;
      let private_q3S = reddownarrowN == String.fromCharCode(51,99,48,51,49,100,0);
      do {
         reddownarrowN = `${((kickK ? 2 : 5) + sports_)}`;
         if (private_q3S) {
            break;
         }
      } while (private_q3S && (3 >= (1 | reddownarrowN.length)));
          let modaly = 4.0;
         kickK = !kickK;
         modaly -= parseFloat(`${parseInt(`${modaly}`)}`);
      while (5 < (reddownarrowN.length | sports_) || 3 < (sports_ | 5)) {
         sports_ &= ((kickK ? 1 : 1) >> (Math.min(Math.abs(2), 1)));
         break;
      }
      for (let x = 0; x < 2; x++) {
         reddownarrowN += `${pushk.length}`;
      }
      let libfile1 = kickK ? !kickK : kickK;
      do {
         kickK = pushk.endsWith(`${sports_}`);
         if (libfile1) {
            break;
         }
      } while (libfile1 && (kickK));
       let activityq = String.fromCharCode(110,95,55,53,95,115,99,97,108,97,114,0);
       let scorepopsoundc = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,95,53,95,53,57,0);
      for (let d = 0; d < 1; d++) {
         scorepopsoundc = `${sports_ / (Math.max(pushk.length, 9))}`;
      }
      if (!pushk.startsWith(`${kickK}`)) {
         kickK = !kickK;
      }
         pushk += `${(String.fromCharCode(102,0) == activityq ? activityq.length : sports_)}`;
      while (kickK && 2 > scorepopsoundc.length) {
         kickK = reddownarrowN == scorepopsoundc;
         break;
      }
          let reactM: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,98,97,115,101,95,111,95,53,50,0),90], [String.fromCharCode(110,105,99,101,95,56,95,53,50,0),857], [String.fromCharCode(108,101,103,97,99,121,95,105,95,51,54,0),105]]);
         scorepopsoundc += `${sports_ / 1}`;
         reactM = new Map([[`${reactM.size}`, reactM.size / 2]]);
      let libmapbufferjnig = activityq == String.fromCharCode(101,48,54,110,104,114,0);
      do {
         activityq = `${pushk.length - scorepopsoundc.length}`;
         if (libmapbufferjnig) {
            break;
         }
      } while ((sports_ > activityq.length) && libmapbufferjnig);
      navigationK *= (parseFloat(`${progressu.length >> (Math.min(1, Math.abs((kickK ? 5 : 5))))}`));
   }
      basez = `${((videojsU ? 1 : 4) | encryptA.length)}`;
   let whatsapps = String.fromCharCode(49,57,99,0) == encryptA;
   do {
      encryptA += `${parseInt(`${emojif}`)}`;
      if (whatsapps) {
         break;
      }
   } while ((3 < (dangerk >> (Math.min(encryptA.length, 4))) && (dangerk >> (Math.min(Math.abs(3), 5))) < 4) && whatsapps);
   if (5.99 == (basez.length * iconschedules)) {
      iconschedules += basez.length ^ encryptA.length;
   }
      navigationK += parseFloat(`${parseInt(`${navigationK}`)}`);
   while (5 == temperatured.length) {
      encryptA = `${dangerk >> (Math.min(Math.abs(3), 5))}`;
      break;
   }
       let suggestionr = 4.0;
          let calendarw = 2.0;
          let icontransferclubb: Array<any> = [493, 727];
          let iconclose4 = String.fromCharCode(111,110,102,105,103,117,114,97,116,105,111,110,95,49,95,51,51,0);
         suggestionr += parseFloat(`${iconclose4.length & parseInt(`${suggestionr}`)}`);
         calendarw *= 1 - parseInt(`${calendarw}`);
         icontransferclubb.push(2 + parseInt(`${calendarw}`));
         iconclose4 += `${1 / (Math.max(parseInt(`${calendarw}`), 2))}`;
         suggestionr -= parseFloat(`${parseInt(`${suggestionr}`)}`);
         suggestionr /= Math.max(1, parseFloat(`${2 & parseInt(`${suggestionr}`)}`));
      temperatured += `${2 << (Math.min(1, Math.abs(parseInt(`${navigationK}`))))}`;
   for (let l = 0; l < 1; l++) {
      temperatured += "3";
   }
      navigationK /= Math.max(4, parseFloat(`${parseInt(`${navigationK}`) | 3}`));
       let download3 = String.fromCharCode(115,95,52,51,95,114,101,118,105,115,105,111,110,0);
       let predictionS: Array<any> = [118, 558];
       let basketballtrophy6 = false;
       let stationsj = 1.0;
       let nend6 = 1.0;
      for (let g = 0; g < 2; g++) {
         predictionS = [(parseInt(`${stationsj}`) + (basketballtrophy6 ? 5 : 4))];
      }
      if (basketballtrophy6) {
         basketballtrophy6 = 63.16 >= nend6;
      }
       let predictionbanner_ = String.fromCharCode(103,95,50,51,95,116,114,117,101,109,111,116,105,111,110,0);
       let flyeri = String.fromCharCode(111,117,116,101,114,95,55,95,55,50,0);
      for (let r = 0; r < 2; r++) {
         download3 += `${parseInt(`${stationsj}`) | 3}`;
      }
      spinnerp = encryptA.startsWith(`${iconschedules}`);
   let homeV = navigationK >= 9766028.0;
   do {
       let baselinec = String.fromCharCode(115,113,108,108,111,103,95,106,95,56,49,0);
       let giftbuttonh = true;
       let turnB = 5;
       let logouty = 3.0;
       let imagenetworkerru = 4;
      let trashn = giftbuttonh ? !giftbuttonh : giftbuttonh;
      do {
          let penaltyshootU = false;
          let iconclosewhitebgz: Array<any> = [String.fromCharCode(117,95,54,48,95,118,112,120,101,110,99,0), String.fromCharCode(120,95,49,48,48,95,105,110,116,112,0), String.fromCharCode(116,95,57,50,95,118,95,57,54,0)];
          let y_imageI: Array<any> = [347, 833, 600];
         giftbuttonh = y_imageI.includes(turnB);
         penaltyshootU = !penaltyshootU;
         iconclosewhitebgz = [1 * iconclosewhitebgz.length];
         y_imageI = [((penaltyshootU ? 2 : 3) - 3)];
         if (trashn) {
            break;
         }
      } while ((giftbuttonh) && trashn);
       let libswresampleU = String.fromCharCode(98,117,98,98,108,101,95,116,95,51,54,0);
       let blackh = String.fromCharCode(122,95,51,50,95,109,97,114,107,100,111,119,110,0);
      while (blackh == String.fromCharCode(81,0)) {
         baselinec += `${2 & imagenetworkerru}`;
         break;
      }
      for (let s = 0; s < 1; s++) {
         imagenetworkerru *= 3;
      }
          let completeo = String.fromCharCode(97,100,106,117,115,116,95,107,95,57,50,0);
         baselinec = "1";
         completeo += "3";
      let penaltyshootnogoali = String.fromCharCode(122,108,119,0) == libswresampleU;
      do {
         libswresampleU = `${((giftbuttonh ? 5 : 1))}`;
         if (penaltyshootnogoali) {
            break;
         }
      } while ((2 == baselinec.length) && penaltyshootnogoali);
      if (giftbuttonh) {
         libswresampleU = `${imagenetworkerru}`;
      }
       let render7: Map<any, any> = new Map([[String.fromCharCode(103,108,97,115,115,95,108,95,50,57,0),775], [String.fromCharCode(115,111,108,118,101,95,116,95,57,48,0),931], [String.fromCharCode(109,98,117,118,101,114,114,111,114,95,48,95,50,57,0),911]]);
       let rightz: Map<any, any> = new Map([[String.fromCharCode(101,95,53,57,95,100,111,117,98,108,101,115,115,116,114,0),643], [String.fromCharCode(98,114,105,100,103,101,95,54,95,53,56,0),666], [String.fromCharCode(115,95,56,50,95,105,110,118,101,114,118,97,108,0),716]]);
          let libgloga: Array<any> = [String.fromCharCode(109,95,57,95,101,120,99,101,112,116,105,111,110,0), String.fromCharCode(116,114,97,105,108,95,113,95,52,55,0), String.fromCharCode(116,111,112,109,111,115,116,95,112,95,56,50,0)];
         turnB += 1;
         libgloga.push(2);
      if (!baselinec.endsWith(`${logouty}`)) {
          let arrowu = 5;
          let leaguedetailsbgv = 1;
          let hongkongg = 4.0;
          let basketballmatchdetailbgI = 5.0;
         baselinec = `${((giftbuttonh ? 5 : 4) * 3)}`;
         arrowu /= Math.max(parseInt(`${basketballmatchdetailbgI}`), 3);
         leaguedetailsbgv %= Math.max(2, 2);
         hongkongg /= Math.max(2, 3 & leaguedetailsbgv);
      }
      for (let w = 0; w < 2; w++) {
         turnB &= render7.size >> (Math.min(3, Math.abs(parseInt(`${logouty}`))));
      }
         logouty /= Math.max(3, parseFloat(`${2 >> (Math.min(5, libswresampleU.length))}`));
          let controlsp: Array<any> = [463, 508];
         giftbuttonh = ((libswresampleU.length * (!giftbuttonh ? libswresampleU.length : 22)) < 22);
         controlsp.push(controlsp.length);
      if (1 == libswresampleU.length) {
         rightz.set(`${turnB}`, turnB);
      }
      let gifgoalbgO = 8679806 <= rightz.size;
      do {
          let basketballiconr: Array<any> = [64, 797];
          let step6 = 4;
         rightz = new Map([[`${turnB}`, turnB + 1]]);
         basketballiconr.push(basketballiconr.length);
         step6 += 1 & basketballiconr.length;
         if (gifgoalbgO) {
            break;
         }
      } while ((5 <= rightz.size) && gifgoalbgO);
      navigationK /= Math.max(parseFloat(`${dangerk << (Math.min(Math.abs(2), 5))}`), 3);
      if (homeV) {
         break;
      }
   } while (homeV && (1 > (2 << (Math.min(3, Math.abs(dangerk))))));
      spinnerp = (encryptA.length / (Math.max(progressu.length, 8))) >= 41;
   if (4 >= (5 << (Math.min(2, encryptA.length))) || 3 >= (encryptA.length - 5)) {
      encryptA = `${3 * basez.length}`;
   }
       let connectionX = true;
       let minivodt = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,110,95,54,57,0);
       let philippineso: Array<any> = [365, 413, 991];
         connectionX = philippineso.length == 78;
      if (1 < (philippineso.length / (Math.max(minivodt.length, 1))) && 3 < (minivodt.length / 1)) {
         philippineso = [philippineso.length];
      }
       let pressureB: Array<any> = [String.fromCharCode(118,95,53,48,95,105,110,100,101,120,111,102,0), String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,95,110,95,54,55,0)];
       let sinam: Array<any> = [938, 285];
          let tailK = 1.0;
         sinam = [(3 * (connectionX ? 4 : 4))];
         tailK -= parseFloat(`${parseInt(`${tailK}`)}`);
         pressureB.push(philippineso.length * 3);
      for (let q = 0; q < 3; q++) {
          let debugC = String.fromCharCode(97,118,99,111,100,101,99,114,101,115,95,120,95,56,57,0);
          let indexN = String.fromCharCode(99,95,53,51,95,115,117,98,116,105,116,108,101,115,0);
          let j_managery = true;
         philippineso = [indexN.length ^ 2];
         debugC += `${debugC.length}`;
         indexN += `${((j_managery ? 4 : 2) + 2)}`;
      }
      let iconwatch7 = 9268145 >= pressureB.length;
      do {
         pressureB = [1 % (Math.max(9, sinam.length))];
         if (iconwatch7) {
            break;
         }
      } while ((3 == minivodt.length) && iconwatch7);
         sinam = [(String.fromCharCode(69,0) == minivodt ? sinam.length : minivodt.length)];
      let fullscreenminZ = connectionX ? !connectionX : connectionX;
      do {
         connectionX = String.fromCharCode(107,0) == minivodt;
         if (fullscreenminZ) {
            break;
         }
      } while (fullscreenminZ && (!connectionX));
      dangerk /= Math.max(encryptA.length + basez.length, 3);
      dangerk ^= (2 * (videojsU ? 1 : 3));
   let storeX = String.fromCharCode(55,114,120,49,0) == progressu;
   do {
      progressu += `${basez.length}`;
      if (storeX) {
         break;
      }
   } while (storeX && (!spinnerp));
   while (dangerk >= 5) {
      dangerk >>= Math.min(parseInt(`${Math.abs(((videojsU ? 3 : 1) >> (Math.min(Math.abs(parseInt(`${emojif}`)), 4))))}`), 1);
      break;
   }
      temperatured = `${parseInt(`${iconschedules}`)}`;
      dangerk >>= Math.min(Math.abs((parseInt(`${iconschedules}`) * (videojsU ? 1 : 1))), 2);
      encryptA += "2";
       let eabafadfadddbafeddddeeefeaafw = true;
      if (eabafadfadddbafeddddeeefeaafw || eabafadfadddbafeddddeeefeaafw) {
         eabafadfadddbafeddddeeefeaafw = !eabafadfadddbafeddddeeefeaafw;
      }
         eabafadfadddbafeddddeeefeaafw = eabafadfadddbafeddddeeefeaafw && eabafadfadddbafeddddeeefeaafw;
         eabafadfadddbafeddddeeefeaafw = (eabafadfadddbafeddddeeefeaafw ? eabafadfadddbafeddddeeefeaafw : !eabafadfadddbafeddddeeefeaafw);
      showlessl *= (temperatured == String.fromCharCode(90,0) ? temperatured.length : dangerk);
       let roboto0 = String.fromCharCode(111,117,112,117,116,95,54,95,49,49,0);
       let smallbrightnessM = 5;
       let stationsi = 5.0;
      let informationb = 8348505 >= smallbrightnessM;
      do {
          let hometeamfieldu = String.fromCharCode(115,111,109,101,116,104,105,110,103,95,99,95,52,53,0);
         smallbrightnessM |= smallbrightnessM & 1;
         hometeamfieldu += `${hometeamfieldu.length % 3}`;
         if (informationb) {
            break;
         }
      } while ((5 <= (roboto0.length >> (Math.min(Math.abs(5), 3))) || (smallbrightnessM >> (Math.min(roboto0.length, 4))) <= 5) && informationb);
      while (5 > smallbrightnessM) {
         smallbrightnessM *= roboto0.length;
         break;
      }
          let pathd = String.fromCharCode(99,98,115,110,105,100,95,56,95,52,54,0);
          let iconnewssharem = 4.0;
         smallbrightnessM &= parseInt(`${stationsi}`) & pathd.length;
         pathd += `${parseInt(`${iconnewssharem}`) >> (Math.min(5, Math.abs(2)))}`;
         iconnewssharem /= Math.max(3 / (Math.max(6, parseInt(`${iconnewssharem}`))), 1);
       let dangerp = 1.0;
       let ajaxw = 0.0;
         stationsi *= 3;
          let dycreatorI = String.fromCharCode(112,95,57,56,95,100,111,119,110,108,111,97,100,97,98,108,101,0);
          let updatesw = 5;
         stationsi *= smallbrightnessM;
         dycreatorI = `${dycreatorI.length / 2}`;
         updatesw &= dycreatorI.length * 3;
          let binddatase = String.fromCharCode(111,95,53,50,95,118,112,120,101,110,99,0);
         stationsi += 2;
         binddatase += `${1 * binddatase.length}`;
       let footballfiledlayouty = String.fromCharCode(102,95,52,57,95,99,97,109,101,114,97,0);
       let a_titlej = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,111,114,95,102,95,57,54,0);
          let phoneh = String.fromCharCode(97,97,99,99,111,100,101,114,95,122,95,53,57,0);
         roboto0 = `${smallbrightnessM - 1}`;
         phoneh = `${phoneh.length}`;
      temperatured = `${parseInt(`${showlessl}`)}`;
   while (!progressu.startsWith(`${navigationK}`)) {
      progressu = `${parseInt(`${iconschedules}`) & 3}`;
      break;
   }
      videojsU = progressu == encryptA;
       let downT = String.fromCharCode(117,116,105,108,105,116,105,101,115,95,55,95,53,55,0);
       let bgvipxvodI: Array<any> = [962, 826, 306];
         downT = "2";
      let redscoreballe = bgvipxvodI.length >= 7656437;
      do {
         bgvipxvodI = [2 - bgvipxvodI.length];
         if (redscoreballe) {
            break;
         }
      } while ((downT.length > bgvipxvodI.length) && redscoreballe);
      if ((downT.length ^ 1) > 3) {
         downT = `${(downT == String.fromCharCode(100,0) ? bgvipxvodI.length : downT.length)}`;
      }
          let sports6 = true;
          let applicationl = String.fromCharCode(115,116,114,105,99,109,112,95,104,95,50,51,0);
         bgvipxvodI.push(((sports6 ? 4 : 5)));
         sports6 = String.fromCharCode(81,0) == applicationl;
         applicationl = `${applicationl.length}`;
       let nexta: Map<any, any> = new Map([[String.fromCharCode(99,95,53,52,95,97,109,102,101,110,99,0),571], [String.fromCharCode(117,110,99,111,109,112,114,101,115,115,95,113,95,50,57,0),639], [String.fromCharCode(107,95,54,52,95,115,109,104,100,0),109]]);
         nexta = new Map([[`${nexta.size}`, downT.length | 1]]);
      iconschedules += progressu.length * parseInt(`${emojif}`);
      navigationK += parseFloat(`${progressu.length}`);
       let whiteanimationlivef = 3.0;
         whiteanimationlivef /= Math.max(5, parseFloat(`${2}`));
      for (let p = 0; p < 1; p++) {
         whiteanimationlivef += parseFloat(`${1}`);
      }
          let componentf = 5;
         whiteanimationlivef *= parseFloat(`${3}`);
         componentf &= componentf;
      showlessl /= Math.max(1, parseInt(`${showlessl}`) << (Math.min(5, Math.abs(parseInt(`${iconschedules}`)))));
       let libjsih = 4.0;
       let videoh = String.fromCharCode(100,95,51,49,95,115,99,114,101,101,110,115,0);
       let commonN = String.fromCharCode(121,95,55,50,95,97,118,111,112,116,105,111,110,115,0);
       let middlewaree = String.fromCharCode(104,105,100,105,110,103,95,54,95,53,54,0);
       let colorsd = String.fromCharCode(114,111,108,108,98,97,99,107,95,122,95,57,53,0);
         middlewaree += `${parseInt(`${libjsih}`) / (Math.max(middlewaree.length, 5))}`;
         middlewaree = `${videoh.length >> (Math.min(middlewaree.length, 5))}`;
      if (middlewaree != videoh) {
         videoh += `${colorsd.length}`;
      }
         libjsih *= 3;
      if (4 <= commonN.length) {
         commonN = `${2 ^ middlewaree.length}`;
      }
         libjsih += middlewaree.length ^ 1;
         middlewaree += "1";
      while (!middlewaree.startsWith(videoh)) {
          let leakchecker9 = false;
         middlewaree += `${colorsd.length}`;
         leakchecker9 = (leakchecker9 ? !leakchecker9 : !leakchecker9);
         break;
      }
      videojsU = iconschedules >= libjsih;
      spinnerp = iconschedules > showlessl;
      dangerk |= parseInt(`${showlessl}`) / (Math.max(8, basez.length));
   while (!videojsU) {
      videojsU = !videojsU;
      break;
   }
       let twitterf: Map<any, any> = new Map([[String.fromCharCode(111,95,55,57,95,109,97,115,107,105,110,103,0),188], [String.fromCharCode(119,95,53,54,95,111,109,112,114,101,115,115,111,114,0),651], [String.fromCharCode(100,95,52,49,95,114,105,100,0),221]]);
       let blackf = String.fromCharCode(97,117,116,111,102,111,99,117,115,105,110,103,95,118,95,54,55,0);
       let iconsaveimagey = 4.0;
      if (blackf.startsWith(`${iconsaveimagey}`)) {
          let rocketL = String.fromCharCode(99,105,112,104,101,114,116,101,120,116,95,114,95,50,55,0);
          let internety = 0.0;
         blackf = "1";
         rocketL += `${parseInt(`${internety}`)}`;
         internety *= (String.fromCharCode(77,0) == rocketL ? parseInt(`${internety}`) : rocketL.length);
      }
         blackf = "3";
          let owngoald: Array<any> = [685, 35];
         blackf += "3";
         owngoald = [1 - owngoald.length];
      for (let i = 0; i < 2; i++) {
         blackf += `${twitterf.size + parseInt(`${iconsaveimagey}`)}`;
      }
         blackf = `${blackf.length << (Math.min(1, Math.abs(parseInt(`${iconsaveimagey}`))))}`;
      while (1 == (twitterf.size & blackf.length)) {
         twitterf.set(`${blackf}`, twitterf.size * blackf.length);
         break;
      }
       let neonI = String.fromCharCode(97,95,53,95,100,101,98,117,103,0);
         twitterf = new Map([[`${twitterf.size}`, twitterf.size / (Math.max(neonI.length, 6))]]);
      if ((4 & blackf.length) >= 4) {
         twitterf = new Map([[`${twitterf.size}`, parseInt(`${iconsaveimagey}`) % (Math.max(8, twitterf.size))]]);
      }
      iconschedules += twitterf.size;
   let stores = videojsU ? !videojsU : videojsU;
   do {
      videojsU = temperatured == progressu;
      if (stores) {
         break;
      }
   } while (stores && (2 <= progressu.length));
      emojif -= dangerk | parseInt(`${showlessl}`);
   while (progressu.includes(`${dangerk}`)) {
       let infoz = 5.0;
       let componentregistryc = 4.0;
      while (componentregistryc >= infoz) {
         componentregistryc *= parseFloat(`${1 | parseInt(`${componentregistryc}`)}`);
         break;
      }
         componentregistryc /= Math.max(4, parseFloat(`${parseInt(`${componentregistryc}`) >> (Math.min(Math.abs(parseInt(`${infoz}`)), 1))}`));
      let hovers = infoz <= 8689351.0;
      do {
         infoz += parseFloat(`${parseInt(`${componentregistryc}`)}`);
         if (hovers) {
            break;
         }
      } while (hovers && (infoz < componentregistryc));
         componentregistryc *= parseFloat(`${parseInt(`${infoz}`) << (Math.min(4, Math.abs(parseInt(`${componentregistryc}`))))}`);
       let paginationR: Map<any, any> = new Map([[String.fromCharCode(109,109,99,111,95,106,95,49,48,48,0),452], [String.fromCharCode(121,95,56,54,95,104,111,115,116,110,97,109,101,0),101], [String.fromCharCode(109,95,56,55,95,99,111,109,112,111,115,101,114,0),789]]);
      if (Array.from(paginationR.keys()).includes(`${infoz}`)) {
         paginationR.set(`${infoz}`, 2 ^ parseInt(`${componentregistryc}`));
      }
      dangerk /= Math.max(progressu.length, 5);
      break;
   }
   let iconsaveimageS = videojsU ? !videojsU : videojsU;
   do {
      videojsU = videojsU || dangerk < 96;
      if (iconsaveimageS) {
         break;
      }
   } while (iconsaveimageS && (!videojsU && spinnerp));
      basez += `${((spinnerp ? 4 : 5))}`;
   let areas = 7152671.0 >= showlessl;
   do {
       let libfileb: Map<any, any> = new Map([[String.fromCharCode(104,111,115,116,110,97,109,101,95,100,95,52,54,0),681], [String.fromCharCode(100,109,117,108,95,115,95,51,57,0),524]]);
         libfileb = new Map([[`${libfileb.size}`, libfileb.size]]);
         libfileb.set(`${libfileb.size}`, 3);
         libfileb = new Map([[`${libfileb.size}`, libfileb.size]]);
      showlessl *= parseInt(`${showlessl}`) * parseInt(`${navigationK}`);
      if (areas) {
         break;
      }
   } while ((encryptA.includes(`${showlessl}`)) && areas);
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
    }: mayi_GoogleViews,
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
      "scorepopsoundReport" | "none" | "frame_tTick"
    >("none");
    const [playbackRate, setPlaybackRate] = useState<number>(1);
    const controlsRef = useRef() as React.MutableRefObject<mayi_Goallogo>;
    const accumulatedSkip = useRef(0);
    const [isLastForward, setIsLastForward] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const isFocus = useIsFocused();

    const userState = useSelector<mayi_Baseline>('userReducer');
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

    const isOffline = useAppSelector(({ settingsReducer }: mayi_Libapminsightb) => settingsReducer.isOffline)

    const isSeekErrorRef = useRef(false);

    const { data: playerVodAds, isFetching: isFetchAds } = useQuery({
      queryKey: ["playerAdsVideo"],
      queryFn: () => mayi_CrossChat.getPlayerAdVideo(),
      enabled: !isOffline
    });

    useEffect(() => {
      if (vod_url === '') return;

      if (showAds &&
        playerVodAds &&
        (!mayi_Gift.isVip(userState.user))
      ) {
        setShowAd(true);
        setAdCountdownTime(playerVodAds.minDuration);
        adVideoRef.current?.seek(0);

        
        mayi_push.playsAdsViewAnalytics({
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
       let libapminsightaa: Array<any> = [String.fromCharCode(120,95,55,57,95,105,118,102,101,110,99,0), String.fromCharCode(99,95,57,54,95,118,109,115,108,0), String.fromCharCode(97,95,49,95,117,108,116,114,97,0)];
    let singlee = String.fromCharCode(102,95,50,52,95,111,117,116,102,105,108,101,115,0);
    let right9: Map<any, any> = new Map([[String.fromCharCode(119,95,49,48,48,95,98,105,110,111,109,105,97,108,0),648], [String.fromCharCode(122,95,55,53,95,99,111,112,121,118,0),535], [String.fromCharCode(121,117,118,114,103,98,95,113,95,54,51,0),505]]);
    let membera = String.fromCharCode(102,95,49,52,95,118,116,114,107,0);
    let data5 = 0;
    let iconpipexpandt = true;
    let resultP: Array<any> = [41, 384];
    let selectionb: Map<any, any> = new Map([[String.fromCharCode(113,95,51,57,95,115,108,111,119,109,111,100,101,0),668], [String.fromCharCode(104,95,52,48,95,116,116,97,103,0),181], [String.fromCharCode(98,117,116,111,110,95,104,95,52,50,0),421]]);
    let changeC: Array<any> = [174, 414, 962];
    let iconedit_: Array<any> = [42, 546, 415];
    let bootsplashS = true;
    let yellowA = String.fromCharCode(115,97,109,112,95,56,95,51,55,0);
    let canvasr = true;
      membera = `${data5 / (Math.max(2, 10))}`;
       let moviesx: Array<any> = [368, 814];
       let championo = String.fromCharCode(107,95,52,54,95,114,97,110,115,102,111,114,109,101,114,0);
       let iconsharefriendsm = 4;
      let frame_ll = moviesx.length >= 8263672;
      do {
          let type_59o = String.fromCharCode(114,95,50,53,95,99,116,111,114,0);
          let componentregistryZ = 0;
          let bottomd = 3.0;
         moviesx = [2 ^ iconsharefriendsm];
         type_59o += `${parseInt(`${bottomd}`)}`;
         componentregistryZ -= 3;
         bottomd -= type_59o.length & 3;
         if (frame_ll) {
            break;
         }
      } while (frame_ll && ((4 << (Math.min(1, moviesx.length))) <= 2 || (4 << (Math.min(4, championo.length))) <= 3));
       let scorea: Array<any> = [171, 973];
       let helperx: Array<any> = [String.fromCharCode(100,113,99,111,101,102,102,95,103,95,57,55,0), String.fromCharCode(116,95,56,52,95,116,105,109,101,111,117,116,0)];
          let handlerl = false;
         championo = `${helperx.length}`;
         handlerl = (!handlerl ? !handlerl : handlerl);
      while (moviesx.length <= helperx.length) {
          let videoL: Map<any, any> = new Map([[String.fromCharCode(108,95,53,51,95,102,116,118,109,110,111,100,101,0),38], [String.fromCharCode(116,95,50,55,95,114,101,111,112,101,110,0),30]]);
          let zoomW = String.fromCharCode(111,95,51,52,95,115,117,98,99,108,97,115,115,101,115,0);
          let statisticsinactivex = 1.0;
         moviesx.push(1 ^ championo.length);
         videoL = new Map([[`${videoL.size}`, 2 * videoL.size]]);
         zoomW += `${(String.fromCharCode(76,0) == zoomW ? zoomW.length : parseInt(`${statisticsinactivex}`))}`;
         statisticsinactivex -= 1;
         break;
      }
         moviesx.push(helperx.length);
      resultP = [(String.fromCharCode(77,0) == singlee ? singlee.length : championo.length)];
       let xvodz = 3.0;
       let libswresamplet = String.fromCharCode(102,97,105,108,101,100,95,110,95,54,56,0);
       let middleK: Array<any> = [String.fromCharCode(109,95,52,52,95,97,116,116,0), String.fromCharCode(98,111,116,116,111,109,95,99,95,49,52,0), String.fromCharCode(101,110,117,109,101,114,97,116,101,100,95,111,95,56,0)];
          let productQ = String.fromCharCode(118,105,100,101,111,115,116,114,101,97,109,95,116,95,51,50,0);
         libswresamplet = `${3 << (Math.min(3, middleK.length))}`;
         productQ += "1";
      if (3.34 > (5.87 - xvodz)) {
         xvodz /= Math.max(1, 3);
      }
      while ((libswresamplet.length + 5) >= 4) {
         xvodz += parseInt(`${xvodz}`);
         break;
      }
       let homeactivej = 3;
         middleK.push(homeactivej + middleK.length);
      while ((3 & libswresamplet.length) < 5 || 4 < (libswresamplet.length >> (Math.min(Math.abs(3), 5)))) {
         libswresamplet += "1";
         break;
      }
      if (2 == (3 - middleK.length) && 3 == (libswresamplet.length - middleK.length)) {
         libswresamplet = `${homeactivej / 3}`;
      }
         xvodz += libswresamplet.length;
         libswresamplet += "3";
      data5 <<= Math.min(Math.abs(1), 3);
      libapminsightaa = [changeC.length >> (Math.min(Math.abs(2), 2))];
      iconpipexpandt = (data5 ^ singlee.length) >= 29;
   if (selectionb.get(`${changeC.length}`) != null) {
      selectionb = new Map([[`${selectionb.size}`, resultP.length / 1]]);
   }
   if (4 < (right9.size & membera.length) || (membera.length & right9.size) < 4) {
       let iconnotificationnewI = 5.0;
       let settingsG = true;
         settingsG = !settingsG;
      while (settingsG && 4.62 < (iconnotificationnewI + 5.64)) {
          let stylesd = 4;
          let backiconC = String.fromCharCode(108,115,112,112,111,108,121,102,95,112,95,54,50,0);
          let iconsaveimage8 = String.fromCharCode(114,95,57,50,95,117,115,101,115,0);
          let bufferb = String.fromCharCode(118,95,48,95,99,121,99,108,101,115,0);
          let detailsP = 5.0;
         iconnotificationnewI /= Math.max(parseFloat(`${2 | parseInt(`${detailsP}`)}`), 5);
         stylesd ^= iconsaveimage8.length;
         backiconC += `${bufferb.length}`;
         iconsaveimage8 += `${iconsaveimage8.length & backiconC.length}`;
         bufferb = `${iconsaveimage8.length << (Math.min(2, Math.abs(stylesd)))}`;
         detailsP += 3 + bufferb.length;
         break;
      }
       let fullI = String.fromCharCode(116,105,109,101,103,109,95,97,95,50,0);
       let controlR = String.fromCharCode(97,95,54,50,95,112,103,115,122,0);
         fullI = `${3 << (Math.min(3, Math.abs(parseInt(`${iconnotificationnewI}`))))}`;
      let libffmpegkit3 = settingsG ? !settingsG : settingsG;
      do {
          let predictionbannerH: Array<any> = [161, 869];
          let playlistk = String.fromCharCode(115,116,114,101,97,109,104,101,97,100,101,114,95,121,95,49,51,0);
          let homeiconE = 2.0;
          let leakcheckerp: Array<any> = [String.fromCharCode(102,111,108,100,95,107,95,56,51,0), String.fromCharCode(107,95,56,54,95,112,97,110,100,105,110,103,0), String.fromCharCode(101,120,116,114,97,95,53,95,54,50,0)];
          let selectionX = 1.0;
         settingsG = controlR == String.fromCharCode(108,0) && homeiconE > 42.79;
         predictionbannerH = [playlistk.length & 1];
         playlistk += `${predictionbannerH.length / (Math.max(3, 4))}`;
         homeiconE *= parseInt(`${selectionX}`) % 1;
         leakcheckerp.push(playlistk.length);
         selectionX /= Math.max(parseInt(`${selectionX}`) ^ leakcheckerp.length, 1);
         if (libffmpegkit3) {
            break;
         }
      } while (libffmpegkit3 && (2 <= fullI.length));
      for (let i = 0; i < 3; i++) {
         controlR = `${((settingsG ? 4 : 1))}`;
      }
      membera += "1";
   }
   while (!resultP.includes(data5)) {
      resultP = [iconedit_.length * 1];
      break;
   }
       let rendero = false;
         rendero = (rendero ? rendero : !rendero);
       let volume4 = false;
       let thumbnailQ = false;
         thumbnailQ = volume4;
      singlee += `${1 << (Math.min(3, membera.length))}`;
       let invitei: Map<any, any> = new Map([[String.fromCharCode(106,95,52,57,95,100,101,103,114,97,100,97,116,105,111,110,0),361], [String.fromCharCode(99,111,100,101,99,95,97,95,57,56,0),326], [String.fromCharCode(101,95,51,51,95,115,98,103,112,0),203]]);
       let libjsinspectoru = String.fromCharCode(116,95,50,56,95,115,117,98,116,101,120,116,0);
       let progressd = String.fromCharCode(97,118,112,105,99,116,117,114,101,95,116,95,54,57,0);
      let settingt = 8865967 <= libjsinspectoru.length;
      do {
         libjsinspectoru += `${(progressd == String.fromCharCode(88,0) ? libjsinspectoru.length : progressd.length)}`;
         if (settingt) {
            break;
         }
      } while (settingt && (!progressd.endsWith(libjsinspectoru)));
          let confirmationO: Map<any, any> = new Map([[String.fromCharCode(102,95,56,49,95,119,97,116,101,114,0),String.fromCharCode(101,118,114,112,99,95,112,95,54,55,0)], [String.fromCharCode(116,95,52,48,95,111,117,116,108,105,110,101,0),String.fromCharCode(102,95,55,95,109,101,103,97,98,121,116,101,0)]]);
          let regengn = String.fromCharCode(114,95,52,95,115,109,117,115,104,0);
         invitei = new Map([[`${confirmationO.size}`, regengn.length << (Math.min(2, Math.abs(confirmationO.size)))]]);
      for (let i = 0; i < 1; i++) {
         libjsinspectoru = `${progressd.length}`;
      }
       let templateprocessorS = String.fromCharCode(111,112,101,114,97,110,100,95,101,95,53,52,0);
       let libruntimeexecutorA = String.fromCharCode(114,116,109,112,99,114,121,112,116,95,104,95,50,54,0);
      while (templateprocessorS.length == libruntimeexecutorA.length) {
         templateprocessorS += "3";
         break;
      }
      let information3 = templateprocessorS == String.fromCharCode(102,54,104,117,97,49,108,48,97,0);
      do {
         templateprocessorS += `${progressd.length}`;
         if (information3) {
            break;
         }
      } while ((4 < (templateprocessorS.length << (Math.min(Math.abs(2), 5)))) && information3);
         templateprocessorS = `${invitei.size}`;
       let elementsI: Array<any> = [865, 433];
         templateprocessorS = `${elementsI.length + 2}`;
      selectionb.set(`${changeC.length}`, 1);
      libapminsightaa.push(data5 * libapminsightaa.length);
      resultP = [changeC.length ^ 1];
   let g_unlock0 = iconpipexpandt ? !iconpipexpandt : iconpipexpandt;
   do {
      iconpipexpandt = data5 <= 38;
      if (g_unlock0) {
         break;
      }
   } while ((iconpipexpandt || !bootsplashS) && g_unlock0);
   for (let q = 0; q < 3; q++) {
      membera += `${2 * resultP.length}`;
   }
   if (!bootsplashS) {
       let iconarrowright8 = String.fromCharCode(103,101,111,107,101,121,95,56,95,53,51,0);
       let heartk = String.fromCharCode(112,117,98,95,105,95,54,52,0);
       let othert = 0.0;
       let guideR = 2.0;
          let header7 = 5;
         heartk += `${heartk.length >> (Math.min(Math.abs(3), 2))}`;
         header7 -= header7;
         othert *= parseFloat(`${iconarrowright8.length}`);
      while ((guideR - 3.45) == 2.29 && 3.45 == (othert + guideR)) {
         guideR /= Math.max(parseInt(`${guideR}`), 3);
         break;
      }
         heartk += "1";
         othert /= Math.max(parseFloat(`${iconarrowright8.length | 1}`), 4);
         heartk += `${parseInt(`${othert}`)}`;
      while (!heartk.endsWith(`${guideR}`)) {
         heartk = `${parseInt(`${othert}`)}`;
         break;
      }
          let hoverN = String.fromCharCode(110,95,52,53,95,113,112,98,105,116,115,0);
         heartk += `${parseInt(`${guideR}`)}`;
         hoverN += "2";
       let privatechatbgX = false;
       let dropdown6 = false;
      for (let j = 0; j < 3; j++) {
         guideR -= parseInt(`${guideR}`);
      }
         heartk = `${2 / (Math.max(7, iconarrowright8.length))}`;
         guideR *= (iconarrowright8 == String.fromCharCode(112,0) ? iconarrowright8.length : parseInt(`${guideR}`));
      bootsplashS = resultP.includes(bootsplashS);
   }
   if (data5 == singlee.length) {
      singlee += `${(resultP.length ^ (iconpipexpandt ? 2 : 5))}`;
   }
       let layouto = String.fromCharCode(109,95,56,95,97,117,116,111,117,112,100,97,116,101,0);
       let combineJ = true;
       let embedQ: Map<any, any> = new Map([[String.fromCharCode(115,101,103,105,116,101,114,95,99,95,57,51,0),703], [String.fromCharCode(107,95,53,49,95,112,114,101,115,101,108,101,99,116,0),98]]);
         layouto = "2";
         layouto = `${((combineJ ? 1 : 3) - 3)}`;
       let hooksx = 4;
       let ping_ = 2;
       let analytict: Array<any> = [35, 775];
      while ((analytict.length >> (Math.min(Math.abs(embedQ.size), 2))) < 5 && 5 < (embedQ.size >> (Math.min(1, analytict.length)))) {
          let scrollviewd = String.fromCharCode(106,95,53,95,109,98,99,109,112,0);
          let photon = String.fromCharCode(113,115,118,100,101,105,110,116,95,111,95,55,57,0);
          let libavdevicez = 4.0;
          let codegenK: Map<any, any> = new Map([[String.fromCharCode(113,95,51,52,95,113,117,111,116,101,0),false ], [String.fromCharCode(97,108,110,117,109,95,118,95,52,55,0),true ], [String.fromCharCode(114,101,97,115,109,95,100,95,54,0),false ]]);
          let airbnbstarF: Map<any, any> = new Map([[String.fromCharCode(119,97,105,116,95,98,95,57,49,0),true ], [String.fromCharCode(111,112,101,110,115,115,108,95,100,95,57,56,0),true ]]);
         embedQ = new Map([[`${libavdevicez}`, (photon == String.fromCharCode(66,0) ? parseInt(`${libavdevicez}`) : photon.length)]]);
         scrollviewd = `${1 & airbnbstarF.size}`;
         codegenK.set(scrollviewd, 2);
         airbnbstarF = new Map([[`${airbnbstarF.size}`, airbnbstarF.size % 1]]);
         break;
      }
      while (4 == layouto.length) {
          let routerC: Array<any> = [983, 671];
          let navigationl = String.fromCharCode(112,114,101,118,111,105,117,115,95,104,95,56,53,0);
          let collectionl = String.fromCharCode(98,116,114,101,101,95,121,95,49,53,0);
          let iconeditf = false;
         ping_ *= layouto.length | 1;
         routerC.push(2);
         navigationl = "1";
         collectionl = `${(collectionl == String.fromCharCode(71,0) ? collectionl.length : (iconeditf ? 4 : 5))}`;
         break;
      }
      for (let h = 0; h < 1; h++) {
         hooksx >>= Math.min(1, analytict.length);
      }
      if (layouto.length == 4 && combineJ) {
         layouto += `${ping_ | 2}`;
      }
         embedQ.set(layouto, 2);
      iconedit_.push((String.fromCharCode(69,0) == membera ? membera.length : data5));
   let shootyesgoall = bootsplashS ? !bootsplashS : bootsplashS;
   do {
      bootsplashS = String.fromCharCode(116,0) == membera;
      if (shootyesgoall) {
         break;
      }
   } while (shootyesgoall && (bootsplashS || 4 == (changeC.length ^ 2)));
      bootsplashS = iconedit_.length < 21 && changeC.length < 21;
   let type_wE = bootsplashS ? !bootsplashS : bootsplashS;
   do {
       let reactnativeultimatelistviewb = true;
       let baselineK = true;
       let windY = String.fromCharCode(115,101,116,116,105,103,110,115,95,104,95,55,0);
       let actionF = String.fromCharCode(105,109,112,108,101,109,101,110,116,115,95,117,95,54,52,0);
       let configureP = String.fromCharCode(112,98,107,100,102,95,122,95,53,53,0);
          let tumbnailc = 5.0;
         actionF = `${actionF.length | windY.length}`;
         tumbnailc *= parseFloat(`${3 + parseInt(`${tumbnailc}`)}`);
       let eventM = 2.0;
      if (!baselineK) {
         baselineK = eventM < 46.45;
      }
      for (let c = 0; c < 1; c++) {
         windY = `${((reactnativeultimatelistviewb ? 3 : 1) ^ (baselineK ? 2 : 5))}`;
      }
         reactnativeultimatelistviewb = actionF.length < configureP.length;
         windY += `${((baselineK ? 4 : 5))}`;
         configureP += `${((baselineK ? 3 : 2))}`;
      while (!baselineK && actionF.length < 2) {
          let helperd = true;
          let becomeb: Map<any, any> = new Map([[String.fromCharCode(105,104,116,120,95,112,95,51,53,0),479], [String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,95,122,95,50,53,0),451], [String.fromCharCode(115,104,101,101,116,95,105,95,52,48,0),71]]);
          let membershipu = 4;
         baselineK = helperd || !baselineK;
         helperd = 30 <= becomeb.size;
         becomeb.set(`${membershipu}`, becomeb.size / 1);
         membershipu += becomeb.size;
         break;
      }
         baselineK = !actionF.includes(`${reactnativeultimatelistviewb}`);
      if (windY.includes(`${eventM}`)) {
         eventM /= Math.max(parseInt(`${eventM}`) - 2, 1);
      }
         baselineK = !baselineK;
      while (!reactnativeultimatelistviewb) {
          let predictionarrown: Array<any> = [276, 218];
          let matchdetailbgc = String.fromCharCode(104,101,120,105,110,116,95,112,95,56,57,0);
          let privilegeU = 5;
         baselineK = (((baselineK ? configureP.length : 37) % (Math.max(6, configureP.length))) >= 37);
         predictionarrown.push(privilegeU | 2);
         matchdetailbgc += `${predictionarrown.length % (Math.max(2, 3))}`;
         privilegeU += matchdetailbgc.length;
         break;
      }
         reactnativeultimatelistviewb = configureP == String.fromCharCode(73,0) && 22.55 > eventM;
          let mimoP = String.fromCharCode(121,95,57,54,0);
          let clubx: Map<any, any> = new Map([[String.fromCharCode(113,95,51,95,97,118,97,108,97,110,99,104,101,0),String.fromCharCode(116,95,57,57,95,99,104,97,110,103,101,114,101,102,0)], [String.fromCharCode(102,95,50,54,95,116,104,117,109,98,115,117,112,0),String.fromCharCode(117,115,101,114,110,97,109,101,95,116,95,55,57,0)], [String.fromCharCode(110,95,49,95,112,107,99,114,121,112,116,0),String.fromCharCode(100,105,115,97,108,108,111,119,95,49,95,50,55,0)]]);
          let footballfiledlayoutX = 2;
         configureP += `${2 & parseInt(`${eventM}`)}`;
         mimoP = `${clubx.size}`;
         clubx = new Map([[`${clubx.size}`, mimoP.length & clubx.size]]);
         footballfiledlayoutX ^= mimoP.length - 3;
         configureP = `${configureP.length + windY.length}`;
      bootsplashS = libapminsightaa.length == 19;
      if (type_wE) {
         break;
      }
   } while (((changeC.length % 3) <= 3 || changeC.length <= 3) && type_wE);

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
       let groupa = String.fromCharCode(114,95,54,53,95,111,108,107,97,100,111,116,0);
    let downloadingW = 4;
    let footballr: Array<any> = [650, 857, 356];
    let const_u6n = String.fromCharCode(108,95,50,53,95,115,116,114,101,97,109,104,101,97,100,101,114,0);
    let viewsw = String.fromCharCode(115,95,51,57,95,108,97,112,108,97,99,101,0);
    let predictionarrow5: Map<any, any> = new Map([[String.fromCharCode(105,115,101,120,112,108,97,105,110,95,113,95,55,51,0),String.fromCharCode(104,100,108,114,95,102,95,52,50,0)], [String.fromCharCode(112,114,101,115,101,108,101,99,116,95,115,95,57,49,0),String.fromCharCode(111,95,49,52,95,100,101,99,114,121,112,116,101,100,0)], [String.fromCharCode(103,105,103,97,103,114,111,117,112,95,109,95,51,49,0),String.fromCharCode(98,97,99,107,98,114,111,117,110,100,95,49,95,55,54,0)]]);
    let emptyM = String.fromCharCode(110,116,111,108,111,103,121,95,99,95,54,49,0);
    let phoneN: Array<any> = [String.fromCharCode(122,95,55,48,95,114,103,101,110,0), String.fromCharCode(100,95,51,95,98,97,99,107,115,112,97,99,101,0), String.fromCharCode(121,95,56,95,110,117,108,108,115,0)];
    let delegate_58v: Array<any> = [944, 190, 996];
    let defaultfootballbg4 = String.fromCharCode(106,95,53,56,95,97,100,97,112,116,97,116,105,111,110,0);
    let progressS = String.fromCharCode(100,101,112,95,121,95,49,50,0);
       let helper2: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,111,95,57,95,57,0),false ], [String.fromCharCode(97,116,116,114,95,117,95,57,55,0),false ], [String.fromCharCode(113,95,50,57,95,115,107,101,108,101,116,111,110,0),true ]]);
         helper2 = new Map([[`${helper2.size}`, 2]]);
       let libswscaleF: Map<any, any> = new Map([[String.fromCharCode(101,97,99,104,95,101,95,56,51,0),267], [String.fromCharCode(114,95,51,50,95,100,116,115,104,100,0),393]]);
       let delegate_vO: Map<any, any> = new Map([[String.fromCharCode(97,99,104,105,101,118,101,100,95,114,95,57,53,0),true ], [String.fromCharCode(115,111,108,105,115,116,101,110,95,51,95,56,52,0),false ], [String.fromCharCode(102,95,51,48,95,115,116,111,112,0),false ]]);
      let backwardX = delegate_vO.size >= 8607666;
      do {
          let windH = String.fromCharCode(121,95,51,53,95,111,99,97,116,105,111,110,0);
          let leaguedetailsbgP = false;
          let smallorangemanA = String.fromCharCode(99,97,108,108,115,95,104,95,54,0);
         delegate_vO.set(`${leaguedetailsbgP}`, libswscaleF.size);
         windH = `${windH.length ^ 3}`;
         smallorangemanA = `${windH.length % 2}`;
         if (backwardX) {
            break;
         }
      } while (((delegate_vO.size << (Math.min(2, Math.abs(libswscaleF.size)))) < 4 && 4 < (libswscaleF.size << (Math.min(Math.abs(4), 3)))) && backwardX);
      defaultfootballbg4 += `${footballr.length << (Math.min(Math.abs(1), 2))}`;
   while (1 <= (2 - footballr.length) || 5 <= (defaultfootballbg4.length - 2)) {
      defaultfootballbg4 = `${predictionarrow5.size / 1}`;
      break;
   }
   let loginW = 8505685 >= emptyM.length;
   do {
      emptyM = "3";
      if (loginW) {
         break;
      }
   } while (loginW && ((emptyM.length >> (Math.min(Math.abs(1), 5))) < 4 && 3 < (emptyM.length >> (Math.min(Math.abs(1), 4)))));
   let upgradeU = 8423651 <= delegate_58v.length;
   do {
      delegate_58v = [3 << (Math.min(Math.abs(downloadingW), 2))];
      if (upgradeU) {
         break;
      }
   } while (((delegate_58v.length >> (Math.min(Math.abs(2), 1))) == 5) && upgradeU);
   if (defaultfootballbg4.length > phoneN.length) {
      phoneN.push(1 | defaultfootballbg4.length);
   }
   for (let i = 0; i < 1; i++) {
       let mimoA = String.fromCharCode(108,95,56,52,95,114,101,112,108,97,99,101,109,101,110,116,115,0);
       let disconnectedu = 0;
       let balls: Map<any, any> = new Map([[String.fromCharCode(114,101,102,105,110,101,95,104,95,52,50,0),false ], [String.fromCharCode(108,95,57,55,95,102,97,118,105,99,111,110,0),false ]]);
      while (5 < (2 % (Math.max(3, disconnectedu))) || (disconnectedu % (Math.max(balls.size, 4))) < 2) {
         balls.set(`${disconnectedu}`, balls.size);
         break;
      }
      while ((3 << (Math.min(5, Math.abs(balls.size)))) == 2 || 1 == (mimoA.length << (Math.min(Math.abs(3), 3)))) {
         mimoA = `${disconnectedu * balls.size}`;
         break;
      }
          let i_player4 = String.fromCharCode(97,95,54,55,95,115,101,114,105,97,108,105,122,101,0);
         mimoA = `${i_player4.length ^ disconnectedu}`;
      for (let u = 0; u < 2; u++) {
         disconnectedu >>= Math.min(3, Math.abs(3));
      }
      if (3 > (mimoA.length - 5)) {
         mimoA = `${2 >> (Math.min(2, Math.abs(balls.size)))}`;
      }
         disconnectedu |= disconnectedu;
      for (let v = 0; v < 1; v++) {
         balls.set(mimoA, disconnectedu | mimoA.length);
      }
          let defaultplayerimg9 = 3.0;
         balls.set(`${defaultplayerimg9}`, 2);
       let alertN = 3.0;
       let videocommonL = 2.0;
      downloadingW += 2;
   }
      delegate_58v = [defaultfootballbg4.length];
      phoneN.push(1 << (Math.min(3, delegate_58v.length)));
      groupa = `${progressS.length + defaultfootballbg4.length}`;
   let iconsharefriendsB = predictionarrow5.size >= 8076517;
   do {
       let iconpointscoreD = String.fromCharCode(100,101,108,101,103,97,116,111,114,95,116,95,57,49,0);
       let fnewinterstitial0 = 4.0;
       let catagory8 = String.fromCharCode(99,95,48,95,116,114,97,105,108,105,110,103,0);
       let awayicon_ = String.fromCharCode(97,95,57,95,98,111,114,105,110,103,115,115,108,0);
       let libreactn = 1.0;
         libreactn -= parseInt(`${fnewinterstitial0}`);
         iconpointscoreD += "1";
      while (5.45 > (awayicon_.length + libreactn)) {
          let subinQ = String.fromCharCode(103,101,116,99,114,101,100,95,119,95,50,54,0);
          let short_yv = String.fromCharCode(118,95,49,48,95,97,114,109,118,116,101,0);
          let libjsijniprofilerC: Array<any> = [278, 764];
          let predictionwinR = false;
         libreactn -= (catagory8 == String.fromCharCode(112,0) ? parseInt(`${fnewinterstitial0}`) : catagory8.length);
         subinQ += `${libjsijniprofilerC.length | subinQ.length}`;
         short_yv = `${((predictionwinR ? 4 : 4))}`;
         libjsijniprofilerC = [(subinQ == String.fromCharCode(86,0) ? subinQ.length : short_yv.length)];
         predictionwinR = !predictionwinR;
         break;
      }
      while (awayicon_.length == 3 && catagory8 != String.fromCharCode(81,0)) {
         awayicon_ = `${awayicon_.length}`;
         break;
      }
      let predictionarrowt = String.fromCharCode(95,108,118,95,102,110,0) == awayicon_;
      do {
         awayicon_ = `${parseInt(`${libreactn}`)}`;
         if (predictionarrowt) {
            break;
         }
      } while ((4 == awayicon_.length) && predictionarrowt);
      let rulesF = fnewinterstitial0 <= 7077992.0;
      do {
          let auto_v3u = String.fromCharCode(98,95,54,95,97,108,105,103,110,105,110,103,0);
          let bodanr = String.fromCharCode(99,111,109,112,114,101,115,115,111,114,95,109,95,56,48,0);
          let mbridgep: Array<any> = [836, 483, 565];
          let bgvipsporto = true;
         fnewinterstitial0 -= (parseFloat(`${(bgvipsporto ? 1 : 2) | 2}`));
         auto_v3u += `${(bodanr == String.fromCharCode(56,0) ? mbridgep.length : bodanr.length)}`;
         mbridgep.push(1);
         bgvipsporto = auto_v3u == String.fromCharCode(102,0);
         if (rulesF) {
            break;
         }
      } while (rulesF && ((fnewinterstitial0 + 1.48) >= 4.27 && 1.48 >= (fnewinterstitial0 + parseFloat(`${awayicon_.length}`))));
       let redirect2 = false;
       let hookss = true;
      while (2.4 <= (fnewinterstitial0 * parseFloat(`${catagory8.length}`)) && (parseInt(`${fnewinterstitial0}`) * catagory8.length) <= 4) {
         fnewinterstitial0 += parseFloat(`${parseInt(`${libreactn}`) | 3}`);
         break;
      }
       let gifgoalbgd = String.fromCharCode(105,95,57,52,95,119,114,105,116,116,101,110,0);
      let username7 = redirect2 ? !redirect2 : redirect2;
      do {
         redirect2 = gifgoalbgd == String.fromCharCode(102,0);
         if (username7) {
            break;
         }
      } while ((5.63 < (libreactn * 1.59)) && username7);
          let auto_plP: Array<any> = [981, 947];
          let firebase6 = 4.0;
          let homeiconu: Map<any, any> = new Map([[String.fromCharCode(98,95,54,52,95,116,117,110,110,101,108,0),781], [String.fromCharCode(106,115,105,109,100,95,55,95,52,52,0),651]]);
         hookss = iconpointscoreD.length <= 56;
         auto_plP.push(auto_plP.length | 2);
         firebase6 += parseFloat(`${homeiconu.size}`);
         homeiconu.set(`${firebase6}`, parseInt(`${firebase6}`));
       let hearti = String.fromCharCode(109,97,121,98,101,95,116,95,50,0);
       let filedJ = String.fromCharCode(121,117,118,97,121,117,118,108,101,95,105,95,57,56,0);
          let savel = true;
          let iconarrowleft2 = String.fromCharCode(115,101,97,114,99,104,95,112,95,54,0);
          let attributedstringq = String.fromCharCode(100,105,115,99,114,105,109,105,110,97,116,111,114,95,50,95,51,57,0);
         gifgoalbgd += `${filedJ.length ^ awayicon_.length}`;
         savel = iconarrowleft2.length <= 64;
         iconarrowleft2 = `${iconarrowleft2.length - 2}`;
         attributedstringq += `${iconarrowleft2.length ^ attributedstringq.length}`;
         hearti += `${(gifgoalbgd.length << (Math.min(5, Math.abs((hookss ? 4 : 5)))))}`;
      for (let n = 0; n < 2; n++) {
         hearti = `${catagory8.length}`;
      }
      predictionarrow5 = new Map([[`${delegate_58v.length}`, iconpointscoreD.length ^ 2]]);
      if (iconsharefriendsB) {
         break;
      }
   } while (((viewsw.length & predictionarrow5.size) > 3 || 4 > (3 & viewsw.length)) && iconsharefriendsB);
   let pause0 = 7295851 >= downloadingW;
   do {
       let tooltipsf: Array<any> = [675, 658];
       let goalt: Array<any> = [String.fromCharCode(98,95,55,95,112,97,115,99,97,108,0), String.fromCharCode(104,95,52,55,95,102,114,97,109,101,98,117,102,102,101,114,0)];
       let trashR = 1.0;
      while (1.37 < (3.81 - trashR) && 4 < (goalt.length % 5)) {
         goalt.push(parseInt(`${trashR}`) % (Math.max(goalt.length, 2)));
         break;
      }
         tooltipsf.push(2 * goalt.length);
          let node2 = String.fromCharCode(115,105,100,101,95,119,95,54,57,0);
          let iconarrowrightX = 3.0;
          let thailand7 = String.fromCharCode(98,95,56,51,95,115,116,97,98,108,101,0);
         goalt.push(thailand7.length);
         node2 += `${parseInt(`${iconarrowrightX}`) % 3}`;
         iconarrowrightX *= parseFloat(`${parseInt(`${iconarrowrightX}`) * 3}`);
         thailand7 = "3";
         tooltipsf.push(tooltipsf.length);
          let profilepicV = 3.0;
         trashR += 2;
         profilepicV *= parseFloat(`${1}`);
      for (let h = 0; h < 3; h++) {
         goalt = [tooltipsf.length];
      }
      if (goalt.includes(trashR)) {
         goalt.push(tooltipsf.length);
      }
         tooltipsf.push(goalt.length);
      let inouttargetredg = tooltipsf.length <= 5560590;
      do {
         tooltipsf.push(1);
         if (inouttargetredg) {
            break;
         }
      } while (inouttargetredg && (goalt.length == 5));
      downloadingW -= (defaultfootballbg4 == String.fromCharCode(65,0) ? defaultfootballbg4.length : progressS.length);
      if (pause0) {
         break;
      }
   } while (pause0 && ((downloadingW & 1) == 2));
   for (let j = 0; j < 2; j++) {
       let graphicsV = String.fromCharCode(99,104,97,114,116,115,95,121,95,57,57,0);
      if (graphicsV == String.fromCharCode(110,0)) {
         graphicsV = `${(String.fromCharCode(103,0) == graphicsV ? graphicsV.length : graphicsV.length)}`;
      }
         graphicsV += `${graphicsV.length}`;
      if (graphicsV.endsWith(`${graphicsV.length}`)) {
         graphicsV = "1";
      }
      viewsw += `${1 & phoneN.length}`;
   }
      downloadingW += progressS.length << (Math.min(viewsw.length, 3));
      groupa += `${delegate_58v.length}`;
   let favoriteu = groupa == String.fromCharCode(101,108,113,108,97,109,0);
   do {
      groupa += "3";
      if (favoriteu) {
         break;
      }
   } while (favoriteu && (defaultfootballbg4.length >= groupa.length));
       let scoret = String.fromCharCode(109,105,100,108,95,111,95,53,53,0);
       let stationsK: Array<any> = [690, 225, 461];
       let countryV = 5.0;
         scoret += `${scoret.length}`;
      if (scoret.endsWith(`${stationsK.length}`)) {
          let libnmsj = String.fromCharCode(117,95,53,53,95,99,111,110,116,97,105,110,105,110,103,0);
          let reactnativeultimatelistviewG = 0.0;
          let basketballtrophyw = String.fromCharCode(98,111,120,95,110,95,56,55,0);
         stationsK = [parseInt(`${reactnativeultimatelistviewG}`)];
         libnmsj = `${1 ^ basketballtrophyw.length}`;
         reactnativeultimatelistviewG -= parseFloat(`${1}`);
         basketballtrophyw += `${basketballtrophyw.length << (Math.min(Math.abs(2), 2))}`;
      }
         countryV -= parseFloat(`${2}`);
      let langH = scoret == String.fromCharCode(54,49,57,52,100,51,0);
      do {
         scoret += `${stationsK.length}`;
         if (langH) {
            break;
         }
      } while (langH && (2 == stationsK.length));
      if (stationsK.length > 3) {
         stationsK.push(parseInt(`${countryV}`) << (Math.min(scoret.length, 5)));
      }
         stationsK.push(3 ^ parseInt(`${countryV}`));
       let orientationW = String.fromCharCode(102,95,49,50,95,97,103,103,114,101,103,97,116,101,100,0);
       let redirectz = String.fromCharCode(109,111,115,116,95,112,95,50,57,0);
          let calendarO: Map<any, any> = new Map([[String.fromCharCode(114,111,103,114,97,109,95,114,95,55,49,0),572], [String.fromCharCode(115,110,105,112,112,101,116,95,115,95,50,54,0),786], [String.fromCharCode(99,105,114,99,117,108,97,114,95,107,95,54,54,0),891]]);
          let securityX = String.fromCharCode(102,111,114,109,97,116,115,95,104,95,52,53,0);
         scoret += `${calendarO.size >> (Math.min(Math.abs(2), 3))}`;
         calendarO = new Map([[securityX, securityX.length]]);
      if (orientationW.length >= scoret.length) {
         scoret = `${1 ^ orientationW.length}`;
      }
      viewsw = `${viewsw.length - footballr.length}`;
   for (let z = 0; z < 3; z++) {
      phoneN.push(defaultfootballbg4.length << (Math.min(Math.abs(3), 2)));
   }
   if (2 == progressS.length) {
      progressS += `${3 >> (Math.min(Math.abs(downloadingW), 2))}`;
   }
   for (let g = 0; g < 1; g++) {
      defaultfootballbg4 = `${groupa.length}`;
   }
       let defaultprofilepicI: Array<any> = [940, 111, 666];
       let libjsijniprofilerL = String.fromCharCode(97,95,51,95,103,111,101,114,108,105,0);
       let smallT = 1;
          let thailandx = false;
          let successX = 5.0;
          let libturbomodulejsijnij = 1.0;
         defaultprofilepicI = [smallT];
         thailandx = libturbomodulejsijnij <= 2.97;
         successX *= (parseFloat(`${(thailandx ? 1 : 2) >> (Math.min(Math.abs(parseInt(`${libturbomodulejsijnij}`)), 4))}`));
          let homeiconF: Array<any> = [String.fromCharCode(113,95,53,95,108,97,98,101,108,101,100,0), String.fromCharCode(113,95,55,54,95,109,97,99,104,105,110,101,0)];
          let gesturesJ = 5;
          let eact0 = String.fromCharCode(113,95,57,56,95,105,110,102,101,114,0);
         defaultprofilepicI = [2];
         homeiconF.push(1 | gesturesJ);
         gesturesJ *= eact0.length * 1;
         eact0 += `${homeiconF.length}`;
         smallT <<= Math.min(Math.abs(3 + defaultprofilepicI.length), 5);
          let smallbrightnessf = 2.0;
          let imagemanager7 = true;
          let relatedQ = String.fromCharCode(102,108,101,120,95,121,95,52,54,0);
         defaultprofilepicI.push(parseInt(`${smallbrightnessf}`));
         smallbrightnessf /= Math.max((relatedQ.length + (imagemanager7 ? 2 : 2)), 1);
         imagemanager7 = (90 >= ((!imagemanager7 ? relatedQ.length : 90) | relatedQ.length));
          let predictionbannerd = String.fromCharCode(115,116,114,111,110,103,95,119,95,55,50,0);
          let libreactnativeblobY: Array<any> = [581, 688];
          let kickC = String.fromCharCode(118,95,51,53,95,115,99,97,108,97,114,112,114,111,100,117,99,116,0);
         libjsijniprofilerL += `${libjsijniprofilerL.length + 1}`;
         predictionbannerd += `${libreactnativeblobY.length - kickC.length}`;
         libreactnativeblobY.push(predictionbannerd.length);
         kickC = `${(String.fromCharCode(100,0) == predictionbannerd ? predictionbannerd.length : kickC.length)}`;
       let middled = String.fromCharCode(112,97,115,115,102,98,95,116,95,55,49,0);
         libjsijniprofilerL = `${1 >> (Math.min(2, libjsijniprofilerL.length))}`;
      let libjsi8 = 8816095 <= defaultprofilepicI.length;
      do {
         defaultprofilepicI = [libjsijniprofilerL.length | smallT];
         if (libjsi8) {
            break;
         }
      } while (libjsi8 && (5 >= (defaultprofilepicI.length - libjsijniprofilerL.length)));
      for (let m = 0; m < 1; m++) {
         smallT *= libjsijniprofilerL.length + 2;
      }
      viewsw += "2";
   if (!groupa.includes(`${defaultfootballbg4.length}`)) {
      defaultfootballbg4 += `${1 >> (Math.min(1, defaultfootballbg4.length))}`;
   }
      delegate_58v = [downloadingW << (Math.min(Math.abs(2), 1))];
   if (groupa == String.fromCharCode(103,0)) {
      viewsw = `${(defaultfootballbg4 == String.fromCharCode(53,0) ? defaultfootballbg4.length : delegate_58v.length)}`;
   }
   while (predictionarrow5.size >= emptyM.length) {
      predictionarrow5.set(`${downloadingW}`, delegate_58v.length + 3);
      break;
   }

            setAdCountdownTime(prev => prev - 1);
          }, 1000)
        }
      },
      isPaused: isPaused,
      setCurrentTime: (time) => setCurrentTime(time),
    }));

    const onGoBack = () => {
       let cornershootD = false;
    let traminih = String.fromCharCode(101,95,49,53,95,115,116,116,115,0);
    let chinasame7 = String.fromCharCode(102,95,56,57,95,108,97,110,103,0);
    let merger1 = 3.0;
    let templateprocessor0 = 4.0;
    let bgvipxvodm = String.fromCharCode(99,97,110,99,101,108,97,98,108,101,95,108,95,54,48,0);
    let libglogf = 3.0;
    let profileactiveK = String.fromCharCode(112,97,103,101,104,97,115,104,95,49,95,53,0);
    let register_qiF: Map<any, any> = new Map([[String.fromCharCode(104,101,120,98,110,95,121,95,50,55,0),178], [String.fromCharCode(105,110,116,114,97,120,109,98,117,118,95,119,95,56,57,0),546], [String.fromCharCode(114,101,99,111,110,105,110,116,114,97,95,107,95,49,48,0),632]]);
    let stats6 = String.fromCharCode(108,108,118,105,100,100,115,112,95,108,95,50,0);
    let flyerE = String.fromCharCode(102,111,108,108,111,119,115,95,97,95,49,52,0);
    let default_iD = 4;
       let carouselg = String.fromCharCode(104,97,115,104,116,97,98,108,101,95,50,95,49,56,0);
      while (carouselg.length < carouselg.length) {
          let backgroundb = String.fromCharCode(114,101,100,105,114,101,99,116,95,113,95,52,48,0);
          let storew = String.fromCharCode(101,105,116,104,101,114,95,48,95,57,53,0);
         carouselg = `${carouselg.length << (Math.min(backgroundb.length, 1))}`;
         backgroundb = "3";
         storew = `${storew.length}`;
         break;
      }
       let footballtrophyS = String.fromCharCode(115,95,54,49,95,114,101,99,111,109,109,101,110,100,0);
      for (let m = 0; m < 3; m++) {
         carouselg = "1";
      }
      merger1 /= Math.max(4, parseFloat(`${parseInt(`${merger1}`) << (Math.min(2, Math.abs(1)))}`));
       let descn = 1.0;
         descn /= Math.max(2, parseFloat(`${parseInt(`${descn}`)}`));
         descn -= parseFloat(`${3 + parseInt(`${descn}`)}`);
      let dragO = 5458398.0 >= descn;
      do {
          let predictionarrowx: Array<any> = [926, 614];
          let iconpipexpandq = 3;
         descn += parseFloat(`${3 * parseInt(`${descn}`)}`);
         predictionarrowx = [iconpipexpandq % (Math.max(predictionarrowx.length, 3))];
         iconpipexpandq += 3 & predictionarrowx.length;
         if (dragO) {
            break;
         }
      } while ((5.37 == (4.22 - descn) || 4.22 == (descn - descn)) && dragO);
      bgvipxvodm += `${parseInt(`${descn}`) % (Math.max(1, stats6.length))}`;
      merger1 /= Math.max(parseFloat(`${chinasame7.length - traminih.length}`), 5);
       let unready = 2.0;
       let shareR = true;
       let friendss: Map<any, any> = new Map([[String.fromCharCode(104,95,49,48,95,102,104,116,120,0),166], [String.fromCharCode(100,101,116,101,99,116,95,57,95,49,0),427]]);
      while (shareR) {
          let elementsq = String.fromCharCode(100,97,105,95,121,95,56,54,0);
          let refreshz = 3.0;
         shareR = friendss.size <= 62;
         elementsq = "1";
         refreshz /= Math.max(3, 1 % (Math.max(10, elementsq.length)));
         break;
      }
         unready *= ((shareR ? 1 : 5) - parseInt(`${unready}`));
      for (let j = 0; j < 3; j++) {
         friendss = new Map([[`${shareR}`, (parseInt(`${unready}`) / (Math.max(1, (shareR ? 4 : 3))))]]);
      }
      if (shareR || 3 >= (friendss.size ^ 3)) {
         shareR = friendss.size < 68;
      }
      if (shareR) {
         shareR = friendss.get(`${unready}`) != null;
      }
      if (4.42 > unready) {
         unready /= Math.max(3, 3 | friendss.size);
      }
       let filtere = String.fromCharCode(97,103,114,101,101,109,101,110,116,95,48,95,52,57,0);
       let eabafadfadddbafeddddeeefeaafP = String.fromCharCode(117,95,52,57,95,115,116,114,105,100,0);
         filtere = "3";
      for (let p = 0; p < 2; p++) {
         shareR = friendss.get(`${shareR}`) != null;
      }
      profileactiveK = "2";
      traminih = "2";
   for (let o = 0; o < 1; o++) {
      templateprocessor0 -= parseFloat(`${register_qiF.size + 2}`);
   }

      if (onBack !== undefined) {

      chinasame7 += `${register_qiF.size}`;
   if (!bgvipxvodm.endsWith(`${libglogf}`)) {
      bgvipxvodm = `${stats6.length}`;
   }
       let pingt: Map<any, any> = new Map([[String.fromCharCode(97,108,112,97,95,55,95,51,0),false ], [String.fromCharCode(115,113,117,97,114,101,95,103,95,57,51,0),true ], [String.fromCharCode(111,95,54,51,95,99,111,114,101,115,0),false ]]);
       let description_fg = String.fromCharCode(113,95,57,48,95,112,97,114,97,109,115,116,114,105,110,103,0);
       let policyu: Array<any> = [944, 420, 204];
       let w_centerl = String.fromCharCode(114,95,53,54,95,115,105,109,112,108,101,0);
       let combinedm = String.fromCharCode(116,117,110,101,95,50,95,52,56,0);
      let saveP = w_centerl.length <= 5905694;
      do {
         w_centerl += `${policyu.length << (Math.min(Math.abs(1), 5))}`;
         if (saveP) {
            break;
         }
      } while (saveP && (3 == w_centerl.length));
         description_fg = "3";
      while (4 > (policyu.length ^ w_centerl.length) || (4 ^ w_centerl.length) > 5) {
         policyu.push(policyu.length << (Math.min(w_centerl.length, 1)));
         break;
      }
      let controls_ = 5373989 <= description_fg.length;
      do {
         description_fg = `${1 & pingt.size}`;
         if (controls_) {
            break;
         }
      } while (((3 / (Math.max(3, policyu.length))) == 5 && 4 == (3 / (Math.max(1, description_fg.length)))) && controls_);
         combinedm = `${w_centerl.length ^ 3}`;
          let activeg = String.fromCharCode(100,95,50,53,95,117,110,97,118,97,105,108,97,98,101,0);
          let textlayoutmanagerP = false;
          let mime3 = String.fromCharCode(101,120,112,101,114,105,109,101,110,116,95,106,95,54,55,0);
         pingt = new Map([[activeg, activeg.length]]);
         textlayoutmanagerP = mime3.length == 45;
         mime3 = `${(String.fromCharCode(100,0) == mime3 ? (textlayoutmanagerP ? 1 : 3) : mime3.length)}`;
         pingt = new Map([[`${policyu.length}`, 2]]);
      let libfileK = 7987680 >= pingt.size;
      do {
          let scrollviewb = String.fromCharCode(101,95,49,51,95,112,114,111,98,105,110,103,0);
          let imagenetworkerrl = 5.0;
          let attributedstringT = 0.0;
          let phone7 = true;
         pingt = new Map([[`${imagenetworkerrl}`, parseInt(`${imagenetworkerrl}`) % (Math.max(1, 4))]]);
         scrollviewb += `${2 ^ parseInt(`${attributedstringT}`)}`;
         attributedstringT += parseFloat(`${parseInt(`${attributedstringT}`) % 2}`);
         phone7 = 12.59 == attributedstringT;
         if (libfileK) {
            break;
         }
      } while (libfileK && (w_centerl.length >= pingt.size));
      register_qiF.set(bgvipxvodm, bgvipxvodm.length >> (Math.min(Math.abs(2), 3)));
       let goalF = true;
       let sideT: Map<any, any> = new Map([[String.fromCharCode(115,95,54,52,95,99,108,97,112,0),false ], [String.fromCharCode(99,95,49,50,95,112,114,101,112,114,111,103,114,97,109,109,101,100,0),false ], [String.fromCharCode(112,111,108,121,95,105,95,53,0),false ]]);
      while ((1 ^ sideT.size) >= 1) {
          let clear8 = false;
         sideT.set(`${clear8}`, ((goalF ? 2 : 5)));
         break;
      }
         goalF = sideT.size >= 51;
         goalF = sideT.size <= 44 && !goalF;
      if (2 <= (sideT.size >> (Math.min(Math.abs(1), 5)))) {
         sideT.set(`${goalF}`, sideT.size);
      }
      for (let w = 0; w < 1; w++) {
         sideT.set(`${goalF}`, ((goalF ? 2 : 1) << (Math.min(Math.abs(sideT.size), 5))));
      }
         sideT = new Map([[`${sideT.size}`, 2 >> (Math.min(2, Math.abs(sideT.size)))]]);
      stats6 = `${parseInt(`${templateprocessor0}`) & 2}`;
      register_qiF.set(profileactiveK, profileactiveK.length);
      templateprocessor0 -= parseFloat(`${3}`);
        onBack();

       let halffieldimageg: Map<any, any> = new Map([[String.fromCharCode(102,95,54,52,95,114,101,100,117,99,116,105,111,110,0),String.fromCharCode(108,95,51,50,95,114,102,99,116,0)], [String.fromCharCode(119,95,50,53,95,116,105,108,101,120,0),String.fromCharCode(112,110,103,95,53,95,55,50,0)]]);
       let rocketm: Array<any> = [String.fromCharCode(98,97,100,103,101,115,95,54,95,55,52,0), String.fromCharCode(99,95,57,49,95,97,99,99,101,115,115,105,98,108,105,116,121,0)];
       let iconsaveimageG = 2.0;
         rocketm = [rocketm.length];
      while ((rocketm.length << (Math.min(Math.abs(4), 3))) > 3) {
         halffieldimageg = new Map([[`${halffieldimageg.size}`, 1]]);
         break;
      }
      while (5.74 < (2.12 * iconsaveimageG) || 2.12 < (iconsaveimageG * parseFloat(`${rocketm.length}`))) {
         rocketm = [parseInt(`${iconsaveimageG}`) + 1];
         break;
      }
      let turndownG = 8048156 >= halffieldimageg.size;
      do {
         halffieldimageg.set(`${iconsaveimageG}`, parseInt(`${iconsaveimageG}`));
         if (turndownG) {
            break;
         }
      } while (turndownG && (halffieldimageg.size < 1));
         halffieldimageg.set(`${iconsaveimageG}`, parseInt(`${iconsaveimageG}`));
      let whistleM = 6014942 >= rocketm.length;
      do {
          let muted8: Array<any> = [320, 229, 231];
          let switch_v3L = 4;
          let videobufferloadingC = String.fromCharCode(116,95,53,53,95,122,108,105,98,0);
         rocketm.push(1);
         muted8 = [videobufferloadingC.length];
         switch_v3L &= 1;
         videobufferloadingC = `${muted8.length / 1}`;
         if (whistleM) {
            break;
         }
      } while (whistleM && (rocketm.length > 3));
      for (let g = 0; g < 3; g++) {
          let footballfieldE = 3;
          let helper0: Array<any> = [String.fromCharCode(115,119,105,102,116,95,108,95,52,53,0), String.fromCharCode(98,97,115,105,115,95,121,95,54,0), String.fromCharCode(110,95,56,52,95,112,111,112,117,112,0)];
          let bodan3 = String.fromCharCode(99,104,97,110,103,101,115,95,114,95,49,48,48,0);
          let chinaD = String.fromCharCode(115,101,97,116,95,100,95,54,54,0);
          let configurey = true;
         rocketm.push(chinaD.length);
         footballfieldE -= 3 << (Math.min(Math.abs(footballfieldE), 1));
         helper0.push(bodan3.length & helper0.length);
         bodan3 = `${(2 & (configurey ? 3 : 2))}`;
         chinaD = `${bodan3.length}`;
         configurey = !configurey || 70 == footballfieldE;
      }
         halffieldimageg = new Map([[`${rocketm.length}`, rocketm.length]]);
      let spinner3 = 7827683.0 <= iconsaveimageG;
      do {
          let unselectedV = String.fromCharCode(109,97,105,110,104,101,97,100,101,114,95,107,95,53,52,0);
          let hnewarchdefaultsy = 4.0;
         iconsaveimageG *= parseFloat(`${rocketm.length % 1}`);
         unselectedV += `${unselectedV.length & 3}`;
         hnewarchdefaultsy /= Math.max((parseFloat(`${unselectedV == String.fromCharCode(107,0) ? parseInt(`${hnewarchdefaultsy}`) : unselectedV.length}`)), 1);
         if (spinner3) {
            break;
         }
      } while (((halffieldimageg.size * 4) == 4 && (iconsaveimageG / 1.59) == 2.0) && spinner3);
      merger1 /= Math.max(1, parseFloat(`${traminih.length | 1}`));
      cornershootD = stats6.length >= register_qiF.size;
       let tickE = 3.0;
       let homeH = String.fromCharCode(115,95,55,52,95,109,97,105,108,0);
         homeH += `${(String.fromCharCode(48,0) == homeH ? homeH.length : parseInt(`${tickE}`))}`;
         tickE -= parseFloat(`${parseInt(`${tickE}`)}`);
      while (tickE >= 5.91) {
         tickE += parseFloat(`${3}`);
         break;
      }
      while ((2 & homeH.length) < 5 || (homeH.length % 2) < 1) {
         homeH += `${(String.fromCharCode(95,0) == homeH ? parseInt(`${tickE}`) : homeH.length)}`;
         break;
      }
      for (let k = 0; k < 2; k++) {
         tickE -= parseFloat(`${parseInt(`${tickE}`) % (Math.max(homeH.length, 3))}`);
      }
      let arrowupy = homeH == String.fromCharCode(113,103,110,54,57,105,117,113,115,0);
      do {
          let gemfileF = false;
          let f_positiono: Array<any> = [146, 781];
         homeH += `${((gemfileF ? 1 : 1) * parseInt(`${tickE}`))}`;
         gemfileF = f_positiono.length == f_positiono.length;
         if (arrowupy) {
            break;
         }
      } while ((5 >= (homeH.length | 5) && (tickE * parseFloat(`${homeH.length}`)) >= 5.97) && arrowupy);
      traminih = `${profileactiveK.length / (Math.max(4, stats6.length))}`;
      templateprocessor0 += parseFloat(`${3}`);
      bgvipxvodm += `${2 ^ profileactiveK.length}`;
       let liveshare9 = 2.0;
       let logousero = String.fromCharCode(111,95,51,56,95,117,110,112,97,99,107,0);
      let baidu_ = String.fromCharCode(109,53,57,55,122,109,97,48,103,109,0) == logousero;
      do {
         logousero += `${parseInt(`${liveshare9}`) + 2}`;
         if (baidu_) {
            break;
         }
      } while ((3 < (parseInt(`${liveshare9}`) * logousero.length) && (3 * parseInt(`${liveshare9}`)) < 2) && baidu_);
         logousero += `${logousero.length}`;
          let fields = String.fromCharCode(104,95,57,52,95,101,120,116,101,114,110,97,108,0);
         liveshare9 *= 2 + logousero.length;
         fields = "3";
          let fileQ = String.fromCharCode(99,95,49,48,95,115,116,97,109,112,0);
          let iconrightorangeb = String.fromCharCode(120,95,50,48,95,100,105,114,97,99,0);
          let securityv = 4.0;
         liveshare9 += fileQ.length << (Math.min(Math.abs(1), 3));
         fileQ = "1";
         iconrightorangeb += `${iconrightorangeb.length % (Math.max(3, parseInt(`${securityv}`)))}`;
         securityv /= Math.max(iconrightorangeb.length, 5);
         logousero = `${logousero.length >> (Math.min(Math.abs(1), 1))}`;
         liveshare9 *= 1 >> (Math.min(3, Math.abs(parseInt(`${liveshare9}`))));
      merger1 += parseFloat(`${chinasame7.length & 3}`);
        lockOrientation("PORTRAIT");

   while (4.12 <= (merger1 - 5.77) || 2 <= (3 + stats6.length)) {
      stats6 = `${((cornershootD ? 5 : 2) & 1)}`;
      break;
   }
   if (3 >= (2 & traminih.length) || (merger1 + 4.53) >= 5.85) {
      traminih = `${3 << (Math.min(4, bgvipxvodm.length))}`;
   }
   for (let h = 0; h < 1; h++) {
       let libtobM = 1.0;
       let imagenetworkerrM = 2.0;
       let googleD = 5.0;
       let iconrightorangeZ = 1.0;
       let networkf = String.fromCharCode(103,114,97,110,112,111,115,95,113,95,51,56,0);
      for (let v = 0; v < 3; v++) {
          let robotoX = String.fromCharCode(118,105,109,97,103,101,108,111,97,100,101,114,95,114,95,54,50,0);
          let libyogak = false;
          let predictionbuttonI = 2.0;
          let latnp: Map<any, any> = new Map([[String.fromCharCode(111,98,115,101,114,118,101,95,114,95,52,53,0),330], [String.fromCharCode(114,95,50,49,95,115,97,118,101,114,0),770]]);
         libtobM -= parseFloat(`${parseInt(`${iconrightorangeZ}`) << (Math.min(networkf.length, 3))}`);
         robotoX = `${parseInt(`${predictionbuttonI}`) / (Math.max(7, robotoX.length))}`;
         libyogak = !libyogak && 77.85 < predictionbuttonI;
         latnp.set(robotoX, robotoX.length);
      }
         imagenetworkerrM += 3 / (Math.max(parseInt(`${iconrightorangeZ}`), 3));
         imagenetworkerrM -= parseInt(`${iconrightorangeZ}`) / (Math.max(parseInt(`${libtobM}`), 10));
       let dycreator3 = String.fromCharCode(101,120,116,101,110,115,105,98,108,101,95,100,95,56,51,0);
       let grayj = String.fromCharCode(108,95,54,95,115,105,110,107,115,0);
          let componentregistryb: Map<any, any> = new Map([[String.fromCharCode(119,111,114,107,108,111,97,100,95,108,95,54,52,0),760], [String.fromCharCode(98,117,102,102,101,114,95,115,95,50,53,0),812], [String.fromCharCode(117,110,115,117,112,112,111,114,116,101,100,95,111,95,57,52,0),564]]);
          let codex = String.fromCharCode(108,95,53,50,95,115,111,114,101,115,101,114,118,101,0);
         grayj = `${(String.fromCharCode(78,0) == networkf ? parseInt(`${libtobM}`) : networkf.length)}`;
         componentregistryb = new Map([[`${componentregistryb.size}`, codex.length * 2]]);
         codex = `${codex.length}`;
       let mbnativez = 4.0;
       let mbbanner3 = 4.0;
          let notificationl = String.fromCharCode(109,97,105,110,110,101,116,95,102,95,57,50,0);
          let sharede: Array<any> = [736, 217];
          let episodep = false;
         mbbanner3 -= parseFloat(`${sharede.length * 3}`);
         notificationl += `${2 >> (Math.min(1, notificationl.length))}`;
         sharede = [((episodep ? 3 : 4))];
      for (let f = 0; f < 1; f++) {
         googleD *= parseFloat(`${3 + parseInt(`${libtobM}`)}`);
      }
      let fullscreenmina = imagenetworkerrM <= 8222446.0;
      do {
         imagenetworkerrM += (String.fromCharCode(57,0) == grayj ? grayj.length : parseInt(`${iconrightorangeZ}`));
         if (fullscreenmina) {
            break;
         }
      } while (fullscreenmina && (2.62 == imagenetworkerrM));
       let whistleorangeq: Array<any> = [44, 487, 379];
       let moduleD: Array<any> = [96, 939];
      if (4 > (whistleorangeq.length / 4)) {
         libtobM -= parseFloat(`${parseInt(`${mbbanner3}`) >> (Math.min(3, Math.abs(1)))}`);
      }
      for (let t = 0; t < 3; t++) {
         mbbanner3 += parseFloat(`${parseInt(`${mbbanner3}`)}`);
      }
      let neona = imagenetworkerrM >= 6570746.0;
      do {
         imagenetworkerrM += grayj.length % (Math.max(dycreator3.length, 5));
         if (neona) {
            break;
         }
      } while (neona && (2 == (parseInt(`${imagenetworkerrM}`) + grayj.length)));
          let informationb: Array<any> = [868, 296, 46];
          let qaagZ: Array<any> = [659, 80];
         mbbanner3 *= parseFloat(`${networkf.length ^ 3}`);
         informationb.push(informationb.length / 3);
         qaagZ.push(2 / (Math.max(2, qaagZ.length)));
      if ((whistleorangeq.length / (Math.max(dycreator3.length, 7))) >= 5) {
         dycreator3 += `${dycreator3.length}`;
      }
      templateprocessor0 += parseFloat(`${profileactiveK.length}`);
   }
   while (stats6.length < 4) {
      stats6 += `${profileactiveK.length >> (Math.min(3, Math.abs(parseInt(`${templateprocessor0}`))))}`;
      break;
   }
       let predictionbannersharedr: Array<any> = [327, 252, 225];
       let servicem: Array<any> = [265, 422];
       let paginationt = String.fromCharCode(115,101,99,117,114,101,100,95,103,95,55,54,0);
      if (4 < (servicem.length - 4) && (servicem.length - predictionbannersharedr.length) < 4) {
          let libavcodec8 = String.fromCharCode(116,101,115,116,114,97,110,115,95,103,95,56,57,0);
          let emptyA = 5.0;
          let analyticf = String.fromCharCode(116,114,97,99,107,95,108,95,50,54,0);
         servicem.push((String.fromCharCode(103,0) == paginationt ? paginationt.length : servicem.length));
         libavcodec8 += `${(libavcodec8 == String.fromCharCode(121,0) ? parseInt(`${emptyA}`) : libavcodec8.length)}`;
         emptyA -= analyticf.length & parseInt(`${emptyA}`);
         analyticf = `${1 & analyticf.length}`;
      }
      for (let s = 0; s < 2; s++) {
         paginationt += `${predictionbannersharedr.length % (Math.max(servicem.length, 8))}`;
      }
       let launchz = 3.0;
         paginationt = `${(paginationt == String.fromCharCode(76,0) ? servicem.length : paginationt.length)}`;
          let g_unlockx = String.fromCharCode(107,95,50,48,95,114,101,115,104,97,112,101,0);
          let statsB = false;
          let predictionbannersharedN = String.fromCharCode(116,111,111,108,99,104,97,105,110,95,113,95,53,51,0);
         paginationt = `${servicem.length ^ parseInt(`${launchz}`)}`;
         g_unlockx += `${1 / (Math.max(8, predictionbannersharedN.length))}`;
         statsB = g_unlockx.startsWith(`${statsB}`);
         predictionbannersharedN += `${((statsB ? 2 : 1))}`;
         predictionbannersharedr.push((paginationt == String.fromCharCode(120,0) ? paginationt.length : predictionbannersharedr.length));
      if (4 == (predictionbannersharedr.length >> (Math.min(2, servicem.length))) && 4 == (4 >> (Math.min(5, servicem.length)))) {
         servicem.push(predictionbannersharedr.length ^ 3);
      }
       let dependencyL = 2.0;
       let robotoq = 0.0;
      for (let l = 0; l < 2; l++) {
          let stringx = String.fromCharCode(102,114,97,109,101,115,101,116,116,101,114,95,48,95,54,48,0);
         servicem.push(parseInt(`${dependencyL}`));
         stringx = `${2 >> (Math.min(3, stringx.length))}`;
      }
      chinasame7 = `${1 ^ predictionbannersharedr.length}`;
      libglogf += (parseFloat(`${chinasame7 == String.fromCharCode(77,0) ? chinasame7.length : register_qiF.size}`));
        setIsFullScreen(false);
      } else {

   let videovarX = stats6.length >= 9463243;
   do {
      stats6 = "3";
      if (videovarX) {
         break;
      }
   } while (videovarX && (!cornershootD));
      register_qiF.set(`${templateprocessor0}`, chinasame7.length);
      templateprocessor0 *= parseFloat(`${traminih.length}`);
      merger1 /= Math.max(parseFloat(`${stats6.length - 1}`), 1);
      templateprocessor0 -= parseFloat(`${bgvipxvodm.length - 1}`);
      stats6 += `${(String.fromCharCode(98,0) == profileactiveK ? traminih.length : profileactiveK.length)}`;
        

      templateprocessor0 -= parseFloat(`${parseInt(`${libglogf}`)}`);
      profileactiveK = `${chinasame7.length}`;
   let smallbrightnessn = cornershootD ? !cornershootD : cornershootD;
   do {
       let resendo = String.fromCharCode(113,95,53,50,95,99,111,108,108,0);
       let x_unlockc = String.fromCharCode(119,95,54,49,95,107,110,111,99,107,111,117,116,0);
         resendo += `${resendo.length}`;
      let libreactperfloggerjniQ = String.fromCharCode(99,102,50,104,120,101,97,110,117,0) == resendo;
      do {
          let privacy7 = String.fromCharCode(114,101,99,104,101,99,107,95,52,95,53,0);
          let imagenomoredata1 = 1.0;
          let profilepicR = String.fromCharCode(103,95,54,95,112,111,108,105,99,101,0);
          let fill_ = String.fromCharCode(114,95,52,95,114,101,108,97,121,111,117,116,0);
          let schedule9 = String.fromCharCode(117,110,112,111,105,115,111,110,95,104,95,56,55,0);
         resendo += "3";
         privacy7 += `${(String.fromCharCode(76,0) == schedule9 ? privacy7.length : schedule9.length)}`;
         imagenomoredata1 += parseFloat(`${1 - profilepicR.length}`);
         profilepicR = `${parseInt(`${imagenomoredata1}`)}`;
         fill_ = `${(privacy7 == String.fromCharCode(87,0) ? parseInt(`${imagenomoredata1}`) : privacy7.length)}`;
         if (libreactperfloggerjniQ) {
            break;
         }
      } while (libreactperfloggerjniQ && (x_unlockc.length >= 4));
      cornershootD = traminih.length > 79 || 79 > register_qiF.size;
      if (smallbrightnessn) {
         break;
      }
   } while ((stats6.includes(`${cornershootD}`)) && smallbrightnessn);
   for (let g = 0; g < 1; g++) {
      traminih = "2";
   }
       let leftX = 4.0;
         leftX -= parseFloat(`${1 | parseInt(`${leftX}`)}`);
         leftX -= parseFloat(`${parseInt(`${leftX}`)}`);
       let libavcodecu = 2;
       let playA = 4;
      templateprocessor0 += parseFloat(`${bgvipxvodm.length}`);
      profileactiveK += `${2 - register_qiF.size}`;
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
       let libreactnativejnir = 3;
    let redscoreballV = 1;
    let defaultteam9 = false;
    let defaultplayerimgI = 0.0;
    let libreactperfloggerjniy = String.fromCharCode(117,95,53,55,95,114,101,98,117,105,108,100,0);
    let libturbomodulejsijnio = 1.0;
    let leftY = 1;
    let colorsw = false;
    let libhermes3: Array<any> = [514, 879, 16];
    let baseC = 5.0;
   for (let y = 0; y < 1; y++) {
       let controls = false;
       let emojiheartt = 1.0;
       let yellowF: Array<any> = [744, 949, 442];
       let actionsQ: Array<any> = [765, 786];
          let gifgoalbg5 = 2.0;
         actionsQ.push(((controls ? 2 : 4) % (Math.max(parseInt(`${gifgoalbg5}`), 9))));
         yellowF = [yellowF.length & 3];
         emojiheartt /= Math.max(actionsQ.length, 3);
      while (!controls || (actionsQ.length ^ 5) >= 4) {
         controls = 39 <= yellowF.length;
         break;
      }
      while ((emojiheartt / (Math.max(yellowF.length, 5))) <= 1.28) {
         yellowF.push(actionsQ.length);
         break;
      }
       let sinao = String.fromCharCode(103,101,110,101,114,97,116,101,95,101,95,50,55,0);
       let searchf = String.fromCharCode(115,95,52,51,95,99,111,110,99,97,116,101,110,97,116,101,100,0);
      while (4 == sinao.length) {
          let sinaj = String.fromCharCode(122,95,54,53,0);
          let libcrashsdkI: Map<any, any> = new Map([[String.fromCharCode(103,95,54,57,95,114,101,113,115,116,97,116,101,0),791], [String.fromCharCode(109,95,57,55,95,116,104,101,114,101,0),423]]);
          let jnewsi = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,114,116,95,118,95,52,55,0);
          let encryptorK = 3.0;
          let bannern = String.fromCharCode(108,95,51,54,95,99,97,118,115,105,100,99,116,0);
         yellowF = [libcrashsdkI.size];
         sinaj = `${parseInt(`${encryptorK}`) >> (Math.min(Math.abs(2), 1))}`;
         libcrashsdkI.set(`${encryptorK}`, parseInt(`${encryptorK}`) & sinaj.length);
         jnewsi += `${sinaj.length >> (Math.min(Math.abs(2), 2))}`;
         bannern += `${jnewsi.length + bannern.length}`;
         break;
      }
       let latnF = String.fromCharCode(116,104,111,117,103,104,95,56,95,48,0);
       let filteri = String.fromCharCode(117,95,55,52,95,105,110,110,101,114,0);
          let alertT = 4.0;
          let readb = 3.0;
          let dependencyB = true;
         emojiheartt *= 2;
         alertT /= Math.max(parseInt(`${readb}`), 2);
         dependencyB = readb == 73.67 || dependencyB;
          let routerE = 5;
          let storew: Map<any, any> = new Map([[String.fromCharCode(101,108,101,109,101,110,116,115,95,49,95,49,56,0),472], [String.fromCharCode(103,101,116,108,97,100,100,114,115,95,122,95,56,49,0),820], [String.fromCharCode(99,104,97,110,103,101,99,111,117,110,116,101,114,95,121,95,56,50,0),942]]);
         latnF = `${latnF.length}`;
         routerE *= storew.size * routerE;
         storew = new Map([[`${storew.size}`, routerE * storew.size]]);
      for (let g = 0; g < 3; g++) {
         yellowF = [latnF.length * yellowF.length];
      }
      if (!sinao.endsWith(`${yellowF.length}`)) {
         sinao = `${parseInt(`${emojiheartt}`) / (Math.max(4, latnF.length))}`;
      }
      libturbomodulejsijnio += parseFloat(`${3}`);
   }
   let thumbnail8 = 5195104 <= leftY;
   do {
       let sendT = false;
       let hover2 = String.fromCharCode(97,108,103,111,95,114,95,49,48,48,0);
       let icondefaultthumbnailj = String.fromCharCode(108,95,52,49,95,112,114,111,114,101,115,0);
      while (!sendT) {
          let eabafadfadddbafeddddeeefeaafP = 0;
          let y_manager4 = 4.0;
          let reactnativejsY = 5.0;
          let collection8 = 5.0;
          let libreanimatedu = String.fromCharCode(115,116,112,115,95,56,95,49,52,0);
         sendT = y_manager4 <= 92.0;
         eabafadfadddbafeddddeeefeaafP -= 3;
         y_manager4 /= Math.max(2, parseInt(`${reactnativejsY}`) | libreanimatedu.length);
         reactnativejsY *= parseFloat(`${parseInt(`${reactnativejsY}`) >> (Math.min(1, Math.abs(3)))}`);
         collection8 *= parseFloat(`${parseInt(`${collection8}`)}`);
         libreanimatedu += `${parseInt(`${collection8}`) * parseInt(`${reactnativejsY}`)}`;
         break;
      }
          let penaltyn = 4;
          let subin3 = String.fromCharCode(102,97,118,101,95,118,95,54,51,0);
          let forward_ = false;
         hover2 += `${hover2.length}`;
         penaltyn *= 3 & penaltyn;
         subin3 += `${(penaltyn % (Math.max(1, (forward_ ? 4 : 2))))}`;
         forward_ = !forward_;
       let mbbidS = String.fromCharCode(97,117,116,111,112,108,97,121,105,110,103,95,107,95,52,51,0);
       let linkx = 4.0;
       let videovarG = 1.0;
       let downloadingi = 0.0;
       let delegate_2iS = 3.0;
      for (let p = 0; p < 2; p++) {
         hover2 = `${parseInt(`${videovarG}`)}`;
      }
         mbbidS = "1";
      for (let h = 0; h < 2; h++) {
          let iconsaveimagec = String.fromCharCode(121,95,53,49,95,112,97,110,110,105,110,103,0);
         delegate_2iS += parseFloat(`${parseInt(`${videovarG}`)}`);
         iconsaveimagec += `${iconsaveimagec.length}`;
      }
       let leaguedetailsbgR = String.fromCharCode(116,95,54,57,95,115,101,99,111,110,100,97,114,121,0);
      leftY <<= Math.min(Math.abs(leftY), 3);
      if (thumbnail8) {
         break;
      }
   } while (thumbnail8 && (1 <= leftY));
      redscoreballV &= 2 | redscoreballV;
   while (1 < (leftY | redscoreballV)) {
      leftY /= Math.max(3, 2);
      break;
   }
   if (4.26 >= (2.39 + libturbomodulejsijnio)) {
       let flyerw = String.fromCharCode(107,112,115,95,112,95,53,51,0);
      for (let y = 0; y < 2; y++) {
         flyerw += `${flyerw.length}`;
      }
      for (let h = 0; h < 2; h++) {
         flyerw = `${flyerw.length - flyerw.length}`;
      }
      while (flyerw.length > flyerw.length) {
         flyerw += "1";
         break;
      }
      libreactperfloggerjniy = `${redscoreballV % 2}`;
   }
   for (let i = 0; i < 2; i++) {
      leftY -= 3 % (Math.max(7, libreactnativejnir));
   }
   while (redscoreballV > defaultplayerimgI) {
      defaultplayerimgI *= parseFloat(`${1 ^ parseInt(`${defaultplayerimgI}`)}`);
      break;
   }
      redscoreballV *= leftY % 3;
       let teamdetailsbgQ = String.fromCharCode(99,95,52,53,95,100,101,99,111,100,101,109,118,0);
       let imagemanagerO = String.fromCharCode(104,95,53,57,95,116,97,98,108,101,105,110,105,116,0);
       let iconbackwhitet = String.fromCharCode(115,97,109,112,108,101,95,111,95,55,0);
      while (4 <= imagemanagerO.length || teamdetailsbgQ == String.fromCharCode(99,0)) {
          let policyp = String.fromCharCode(104,105,103,104,98,105,116,100,101,112,116,104,95,99,95,54,48,0);
         imagemanagerO = `${teamdetailsbgQ.length + 3}`;
         policyp = `${policyp.length}`;
         break;
      }
      while (imagemanagerO.startsWith(teamdetailsbgQ)) {
         imagemanagerO = "2";
         break;
      }
         iconbackwhitet = `${teamdetailsbgQ.length}`;
      let klevinV = iconbackwhitet == String.fromCharCode(113,51,114,100,97,51,98,118,97,111,0);
      do {
          let products: Array<any> = [826, 365, 751];
          let clockE = String.fromCharCode(112,114,101,116,119,105,100,100,108,101,95,120,95,52,49,0);
          let light_: Array<any> = [1, 238, 263];
          let listU = 4.0;
          let footballtrophyO = 4.0;
         iconbackwhitet += `${parseInt(`${listU}`) + 2}`;
         products.push((clockE == String.fromCharCode(81,0) ? clockE.length : light_.length));
         light_.push(parseInt(`${footballtrophyO}`));
         listU += parseFloat(`${products.length}`);
         footballtrophyO -= parseFloat(`${clockE.length << (Math.min(Math.abs(3), 2))}`);
         if (klevinV) {
            break;
         }
      } while (klevinV && (teamdetailsbgQ == String.fromCharCode(51,0)));
      while (teamdetailsbgQ != imagemanagerO) {
         imagemanagerO = `${iconbackwhitet.length}`;
         break;
      }
       let bootd = false;
       let helperq = false;
       let filterJ = 4;
       let tickedy = 0;
          let iconclosewhitebgb: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,99,97,116,101,100,95,120,95,50,52,0),532], [String.fromCharCode(110,95,54,54,95,109,111,100,97,108,0),471], [String.fromCharCode(117,110,105,118,101,114,115,97,108,95,120,95,55,50,0),247]]);
          let fastforwardx = 2.0;
          let goalS = String.fromCharCode(104,95,49,50,95,116,101,120,116,117,114,101,100,0);
         tickedy <<= Math.min(Math.abs(1 & imagemanagerO.length), 5);
         iconclosewhitebgb.set(`${fastforwardx}`, (goalS == String.fromCharCode(110,0) ? parseInt(`${fastforwardx}`) : goalS.length));
      redscoreballV |= parseInt(`${libturbomodulejsijnio}`) | 3;
   while (defaultteam9) {
       let libavfilterW = 4.0;
       let predictionbanner6 = String.fromCharCode(119,95,51,50,95,112,97,114,116,105,99,105,112,97,116,105,111,110,0);
       let iconarrowleft3 = String.fromCharCode(115,95,52,49,95,112,108,117,103,103,101,100,0);
       let sliderV = String.fromCharCode(109,95,50,51,95,98,108,111,99,107,104,97,115,104,0);
          let defaultroombg6 = 1.0;
          let iconpipexpandN: Map<any, any> = new Map([[String.fromCharCode(100,101,99,101,108,101,114,97,116,101,100,95,119,95,50,55,0),352], [String.fromCharCode(106,95,57,51,95,97,100,116,115,0),486]]);
          let long_sxf = 2.0;
         libavfilterW += parseFloat(`${iconarrowleft3.length}`);
         defaultroombg6 /= Math.max(1, parseFloat(`${parseInt(`${long_sxf}`)}`));
         iconpipexpandN.set(`${defaultroombg6}`, 1);
         long_sxf += parseFloat(`${parseInt(`${defaultroombg6}`) | parseInt(`${long_sxf}`)}`);
         predictionbanner6 += `${parseInt(`${libavfilterW}`) + 3}`;
         iconarrowleft3 = `${1 + parseInt(`${libavfilterW}`)}`;
      for (let f = 0; f < 1; f++) {
         iconarrowleft3 = `${sliderV.length}`;
      }
         predictionbanner6 += `${iconarrowleft3.length % 2}`;
      if (5 == (2 * predictionbanner6.length) || 5.50 == (libavfilterW - 2.6)) {
         predictionbanner6 = "2";
      }
       let basketballtrophyE: Array<any> = [299, 663, 483];
       let reactnativejsI: Array<any> = [163, 709, 610];
      while ((basketballtrophyE.length % (Math.max(5, 8))) == 1) {
         basketballtrophyE = [predictionbanner6.length | sliderV.length];
         break;
      }
         basketballtrophyE.push(1);
      for (let p = 0; p < 1; p++) {
         libavfilterW /= Math.max(parseFloat(`${basketballtrophyE.length}`), 4);
      }
          let moon1: Map<any, any> = new Map([[String.fromCharCode(99,95,50,95,112,105,120,101,108,102,108,111,97,116,0),14], [String.fromCharCode(98,111,117,110,100,115,112,101,99,105,102,105,99,95,97,95,53,48,0),557]]);
          let defaultfootballbgW = 4.0;
          let areaG = 1.0;
         reactnativejsI.push(parseInt(`${defaultfootballbgW}`));
         moon1.set(`${areaG}`, moon1.size);
         defaultfootballbgW -= moon1.size | parseInt(`${areaG}`);
         iconarrowleft3 = `${(sliderV == String.fromCharCode(66,0) ? sliderV.length : iconarrowleft3.length)}`;
      libturbomodulejsijnio -= parseFloat(`${parseInt(`${defaultplayerimgI}`)}`);
      break;
   }
   while (5 <= libreactperfloggerjniy.length || colorsw) {
      colorsw = libreactperfloggerjniy.includes(`${leftY}`);
      break;
   }

        console.log("err save vod!");

   let policyi = libreactnativejnir <= 7463417;
   do {
      libreactnativejnir >>= Math.min(4, libreactperfloggerjniy.length);
      if (policyi) {
         break;
      }
   } while ((2 < (1 | libreactnativejnir)) && policyi);
   if (4 >= (leftY + 4)) {
      defaultplayerimgI /= Math.max(parseFloat(`${libreactnativejnir - redscoreballV}`), 5);
   }
      defaultteam9 = libreactnativejnir == 18 && !defaultteam9;
       let iconwechatO = String.fromCharCode(101,110,116,105,116,105,101,115,95,99,95,52,53,0);
       let cornerkick8 = String.fromCharCode(108,95,55,50,95,114,97,100,98,0);
       let scrollviewF = String.fromCharCode(104,95,50,48,95,99,111,114,112,117,115,0);
      let sharewhiteV = String.fromCharCode(52,101,52,102,103,97,110,121,0) == cornerkick8;
      do {
          let lightC = 0.0;
          let whatsappP = String.fromCharCode(102,114,105,101,110,100,95,50,95,56,55,0);
          let sharedi = String.fromCharCode(111,95,49,55,95,116,121,112,101,110,97,109,101,0);
          let relatedP: Map<any, any> = new Map([[String.fromCharCode(117,110,114,101,97,100,95,110,95,51,52,0),String.fromCharCode(102,95,52,56,95,119,97,118,101,115,0)], [String.fromCharCode(105,110,115,105,100,101,95,115,95,57,51,0),String.fromCharCode(107,101,101,112,105,110,103,95,98,95,57,0)]]);
          let statsd: Array<any> = [String.fromCharCode(99,114,101,97,116,101,101,120,95,112,95,57,0), String.fromCharCode(118,95,57,50,95,115,101,109,97,110,116,105,99,115,0)];
         cornerkick8 += `${whatsappP.length}`;
         lightC *= 2;
         whatsappP = `${relatedP.size + 1}`;
         sharedi += `${2 * relatedP.size}`;
         statsd.push(relatedP.size);
         if (sharewhiteV) {
            break;
         }
      } while ((iconwechatO.length >= cornerkick8.length) && sharewhiteV);
      while (scrollviewF.length <= 4 && cornerkick8 != String.fromCharCode(71,0)) {
         cornerkick8 = `${3 | scrollviewF.length}`;
         break;
      }
          let libreanimated7 = 4.0;
         iconwechatO = `${(scrollviewF == String.fromCharCode(69,0) ? scrollviewF.length : cornerkick8.length)}`;
         libreanimated7 *= parseFloat(`${parseInt(`${libreanimated7}`)}`);
          let iconcalendarZ = 3.0;
          let smallbrightnessG = 2;
         cornerkick8 = `${iconwechatO.length | 3}`;
         iconcalendarZ -= parseFloat(`${3 + parseInt(`${iconcalendarZ}`)}`);
         smallbrightnessG |= 3 - parseInt(`${iconcalendarZ}`);
          let drago = String.fromCharCode(105,110,101,116,95,101,95,51,0);
          let scheduleh = true;
          let chinas = String.fromCharCode(99,104,117,110,107,115,95,101,95,50,54,0);
         cornerkick8 = `${(scrollviewF == String.fromCharCode(97,0) ? (scheduleh ? 1 : 2) : scrollviewF.length)}`;
         drago = `${chinas.length / (Math.max(2, 2))}`;
         scheduleh = chinas.length > drago.length;
      libreactperfloggerjniy += `${3 - parseInt(`${libturbomodulejsijnio}`)}`;
   if (2 > (3 * redscoreballV)) {
      redscoreballV += redscoreballV + leftY;
   }
   if (redscoreballV <= 4) {
       let w_managerk = 0.0;
       let airbnbstarH = 5.0;
       let middlewareD = 4;
       let rightK = 3.0;
       let imagesb = 3;
         rightK *= parseFloat(`${parseInt(`${w_managerk}`) + 3}`);
          let reminderp = 5.0;
          let cedbadcebfbfbfbcfecbcb = 1.0;
         airbnbstarH += parseInt(`${reminderp}`) << (Math.min(5, Math.abs(1)));
         reminderp *= parseFloat(`${parseInt(`${cedbadcebfbfbfbcfecbcb}`)}`);
          let changes = 0.0;
         rightK /= Math.max(parseFloat(`${middlewareD}`), 2);
         changes += parseFloat(`${1}`);
         middlewareD ^= 2 >> (Math.min(Math.abs(imagesb), 1));
      for (let w = 0; w < 1; w++) {
         imagesb -= imagesb / 2;
      }
         rightK *= parseFloat(`${imagesb << (Math.min(5, Math.abs(3)))}`);
       let sellmathbackgroundu = String.fromCharCode(111,118,101,114,102,108,111,119,95,110,95,51,53,0);
      while ((1.24 - rightK) < 4.91) {
         rightK += parseFloat(`${sellmathbackgroundu.length ^ 1}`);
         break;
      }
          let exampleimagem: Map<any, any> = new Map([[String.fromCharCode(114,101,99,117,114,115,105,118,101,108,121,95,104,95,50,48,0),162], [String.fromCharCode(109,97,120,101,100,95,57,95,52,51,0),156]]);
          let defaultfootballbgT = String.fromCharCode(109,101,109,99,109,112,95,56,95,55,48,0);
          let expiredq = 4.0;
         rightK -= parseFloat(`${sellmathbackgroundu.length}`);
         exampleimagem = new Map([[`${exampleimagem.size}`, exampleimagem.size / 1]]);
         defaultfootballbgT += `${parseInt(`${expiredq}`)}`;
         expiredq /= Math.max(parseFloat(`${3 / (Math.max(9, defaultfootballbgT.length))}`), 1);
         airbnbstarH += parseInt(`${rightK}`) / (Math.max(parseInt(`${airbnbstarH}`), 5));
         w_managerk *= parseFloat(`${parseInt(`${rightK}`) >> (Math.min(2, Math.abs(middlewareD)))}`);
      while (4.63 >= (w_managerk * 5.62)) {
         middlewareD *= middlewareD << (Math.min(5, Math.abs(2)));
         break;
      }
         airbnbstarH *= parseInt(`${w_managerk}`);
          let iconarrowrightwhite0 = String.fromCharCode(121,95,51,49,95,114,97,100,105,97,110,115,0);
         sellmathbackgroundu = "1";
         iconarrowrightwhite0 = `${iconarrowrightwhite0.length ^ 1}`;
         airbnbstarH /= Math.max(4, parseInt(`${w_managerk}`) | 3);
      defaultteam9 = 26 >= redscoreballV || !defaultteam9;
   }
   while (5 <= (2 | libreactnativejnir) || !defaultteam9) {
      defaultteam9 = 68 == leftY || libturbomodulejsijnio == 60.12;
      break;
   }
       let light5 = 4;
       let settingK: Array<any> = [808, 222];
       let mbsplashx: Map<any, any> = new Map([[String.fromCharCode(108,95,52,95,116,105,109,101,99,111,100,101,0),true ], [String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,116,95,55,55,0),false ], [String.fromCharCode(115,117,98,109,111,100,101,108,115,95,55,95,57,49,0),true ]]);
       let libflipperv: Map<any, any> = new Map([[String.fromCharCode(107,95,53,52,95,115,116,114,116,121,112,101,0),246], [String.fromCharCode(106,114,101,102,95,55,95,51,50,0),740]]);
      let themeZ = settingK.length <= 8905394;
      do {
         settingK.push(light5);
         if (themeZ) {
            break;
         }
      } while (themeZ && (settingK.includes(light5)));
      if (mbsplashx.get(`${libflipperv.size}`) == null) {
         mbsplashx.set(`${libflipperv.size}`, mbsplashx.size % 3);
      }
          let librrcH = 5.0;
         settingK.push(libflipperv.size);
         librrcH -= parseInt(`${librrcH}`) * parseInt(`${librrcH}`);
      if (light5 >= settingK.length) {
         settingK.push(mbsplashx.size / 1);
      }
      let yingD = 5679674 >= settingK.length;
      do {
         settingK = [settingK.length % (Math.max(1, 9))];
         if (yingD) {
            break;
         }
      } while (yingD && ((light5 - settingK.length) < 3 && 1 < (light5 - 3)));
      defaultplayerimgI += parseFloat(`${3 | libreactperfloggerjniy.length}`);
   while ((libreactperfloggerjniy.length & 5) == 2) {
      libreactperfloggerjniy += `${parseInt(`${libturbomodulejsijnio}`) + 2}`;
      break;
   }
   for (let w = 0; w < 2; w++) {
      libreactperfloggerjniy += `${leftY}`;
   }
       let bingl: Array<any> = [842, 767, 191];
       let zhengpianr = 5;
      let canvasY = 6859980 <= bingl.length;
      do {
          let shootyesgoal2 = false;
          let networkx = 1;
         bingl.push(networkx);
         shootyesgoal2 = shootyesgoal2 || shootyesgoal2;
         networkx /= Math.max(4, 1);
         if (canvasY) {
            break;
         }
      } while (canvasY && (5 < (zhengpianr << (Math.min(bingl.length, 2)))));
      let vignetteU = zhengpianr >= 7670601;
      do {
          let showlessj = true;
          let iconmorec = String.fromCharCode(100,109,97,99,95,121,95,50,48,0);
          let mbjscommons = String.fromCharCode(111,95,56,49,95,103,114,97,109,115,0);
         zhengpianr -= ((showlessj ? 3 : 1));
         showlessj = 95 > mbjscommons.length;
         iconmorec = "2";
         mbjscommons = `${1 - mbjscommons.length}`;
         if (vignetteU) {
            break;
         }
      } while (vignetteU && ((1 - zhengpianr) >= 3));
       let thumbnailS = 0;
         zhengpianr -= thumbnailS;
          let backU = 2.0;
         bingl = [thumbnailS % 2];
         backU /= Math.max(2, 2 - parseInt(`${backU}`));
       let flyerW = String.fromCharCode(98,97,108,97,110,99,101,115,95,49,95,51,0);
      libturbomodulejsijnio -= parseFloat(`${zhengpianr}`);
        console.log(err);
      }
    };

    const deviceOrientationHandle = () => {
       let heartB = String.fromCharCode(110,111,118,101,99,95,57,95,50,56,0);
    let mintegralx = 0;
    let phone6 = String.fromCharCode(102,95,49,49,95,107,101,121,108,101,110,0);
    let whitevideolive5 = 2.0;
    let u_hashI: Map<any, any> = new Map([[String.fromCharCode(117,95,51,56,95,115,116,114,105,114,101,112,108,97,99,101,0),790], [String.fromCharCode(113,95,56,54,95,116,104,101,0),81]]);
    let pressurer: Map<any, any> = new Map([[String.fromCharCode(101,95,53,56,95,110,111,110,110,117,108,108,111,117,116,0),169], [String.fromCharCode(120,95,52,56,95,112,114,111,116,111,99,111,108,0),890], [String.fromCharCode(113,95,54,56,95,109,111,118,101,115,0),150]]);
    let type_1a = 0;
    let zhubo1 = String.fromCharCode(99,108,97,115,115,101,115,95,50,95,53,51,0);
    let moonf = 3.0;
    let comment5: Array<any> = [String.fromCharCode(119,95,57,51,95,97,97,100,0), String.fromCharCode(111,95,57,51,95,109,105,100,115,0), String.fromCharCode(119,109,97,112,114,111,95,121,95,51,49,0)];
    let shirtU = 2.0;
    let icondefaultthumbnailt: Map<any, any> = new Map([[String.fromCharCode(119,95,49,49,95,105,115,115,117,101,115,0),String.fromCharCode(97,95,51,48,95,114,101,115,116,114,105,99,116,0)], [String.fromCharCode(102,95,55,52,95,114,100,111,112,116,0),String.fromCharCode(108,95,56,51,95,99,111,100,101,0)]]);
    let closeL = 3.0;
    let yellowanimationlive4 = String.fromCharCode(101,95,49,53,95,99,120,100,97,116,97,0);
   let baiduC = moonf <= 7693061.0;
   do {
       let productv = 0.0;
       let xvody = 0.0;
       let private_70S = true;
       let catalog4 = 0.0;
       let dark2 = String.fromCharCode(109,97,116,114,105,120,105,110,103,95,51,95,52,52,0);
         private_70S = !private_70S;
      for (let d = 0; d < 3; d++) {
         xvody -= parseFloat(`${parseInt(`${productv}`) << (Math.min(2, Math.abs(1)))}`);
      }
      for (let m = 0; m < 2; m++) {
          let package_7cc = String.fromCharCode(100,95,55,54,95,121,118,99,111,110,102,105,103,0);
          let fastu = String.fromCharCode(97,95,57,52,95,107,105,99,107,0);
          let armvaD = String.fromCharCode(114,101,102,117,110,100,95,51,95,49,56,0);
          let mintegralS: Map<any, any> = new Map([[String.fromCharCode(103,95,55,56,95,108,115,98,115,0),639], [String.fromCharCode(97,114,103,98,105,95,48,95,56,50,0),384]]);
          let libreanimatedA: Array<any> = [650, 298];
         dark2 += "3";
         package_7cc += `${armvaD.length * 2}`;
         fastu += `${mintegralS.size}`;
         armvaD = "1";
         mintegralS = new Map([[armvaD, (String.fromCharCode(109,0) == fastu ? armvaD.length : fastu.length)]]);
         libreanimatedA.push((package_7cc == String.fromCharCode(48,0) ? package_7cc.length : mintegralS.size));
      }
      while (3 > (dark2.length & 5) || (productv - 1.16) > 4.0) {
         productv += parseFloat(`${parseInt(`${catalog4}`) << (Math.min(dark2.length, 3))}`);
         break;
      }
         xvody += parseFloat(`${parseInt(`${productv}`)}`);
      let tailL = dark2 == String.fromCharCode(99,51,102,98,112,117,109,52,49,120,0);
      do {
         dark2 = `${((private_70S ? 1 : 3) >> (Math.min(Math.abs(parseInt(`${catalog4}`)), 5)))}`;
         if (tailL) {
            break;
         }
      } while (tailL && (dark2.length == parseInt(`${productv}`)));
          let faviconA = 4.0;
         xvody -= parseFloat(`${parseInt(`${productv}`)}`);
         faviconA += parseFloat(`${parseInt(`${faviconA}`)}`);
      while (!dark2.includes(`${xvody}`)) {
          let castingH = String.fromCharCode(99,104,101,99,107,115,117,109,109,101,100,95,118,95,56,56,0);
          let anytimev: Map<any, any> = new Map([[String.fromCharCode(114,95,56,55,95,112,114,111,99,101,115,115,111,114,115,0),String.fromCharCode(112,111,119,116,97,98,108,101,95,115,95,50,51,0)], [String.fromCharCode(117,112,109,105,120,95,100,95,55,52,0),String.fromCharCode(114,101,115,101,114,118,101,115,105,122,101,95,106,95,54,51,0)], [String.fromCharCode(104,95,49,56,95,104,97,118,101,0),String.fromCharCode(98,95,52,95,108,101,97,107,0)]]);
         dark2 = `${parseInt(`${productv}`)}`;
         castingH += `${castingH.length}`;
         anytimev = new Map([[`${anytimev.size}`, anytimev.size | castingH.length]]);
         break;
      }
      let penaltymatchiconu = xvody >= 8456537.0;
      do {
         xvody += parseFloat(`${parseInt(`${catalog4}`) << (Math.min(4, Math.abs(2)))}`);
         if (penaltymatchiconu) {
            break;
         }
      } while (((1.19 * xvody) < 2.39 && xvody < 1.19) && penaltymatchiconu);
      let fill7 = catalog4 >= 6296213.0;
      do {
         catalog4 -= dark2.length;
         if (fill7) {
            break;
         }
      } while (fill7 && (2.2 < (2 / (Math.max(8, xvody)))));
       let default_ek = String.fromCharCode(99,95,57,48,95,101,110,118,101,108,111,112,101,100,0);
      if (private_70S) {
         private_70S = xvody <= productv;
      }
          let sourceU = String.fromCharCode(105,95,52,52,95,118,120,119,111,114,107,115,0);
         default_ek += `${parseInt(`${catalog4}`) % (Math.max(dark2.length, 4))}`;
         sourceU = `${sourceU.length ^ 2}`;
      let watchI = 9255599.0 >= xvody;
      do {
          let iconarrowrightL = String.fromCharCode(99,114,101,97,116,101,98,97,108,97,110,99,101,95,110,95,54,52,0);
          let embedq = String.fromCharCode(115,95,49,57,95,102,97,97,110,100,99,116,0);
          let inactive3 = false;
          let readZ: Map<any, any> = new Map([[String.fromCharCode(114,101,115,112,111,110,115,101,95,121,95,57,51,0),true ], [String.fromCharCode(109,95,57,55,0),false ]]);
         xvody -= parseFloat(`${parseInt(`${productv}`)}`);
         iconarrowrightL = `${readZ.size}`;
         embedq += `${(3 | (inactive3 ? 1 : 5))}`;
         inactive3 = readZ.size < 92 && inactive3;
         if (watchI) {
            break;
         }
      } while (watchI && (xvody > 4.33));
         xvody += parseFloat(`${1}`);
      moonf /= Math.max(comment5.length, 5);
      if (baiduC) {
         break;
      }
   } while (baiduC && (!Array.from(icondefaultthumbnailt.keys()).includes(`${moonf}`)));
   let libswresamplee = 6971778.0 >= whitevideolive5;
   do {
       let delegate_2pG = 1.0;
       let splashS: Map<any, any> = new Map([[String.fromCharCode(113,95,51,49,95,102,111,114,116,104,0),315], [String.fromCharCode(112,105,99,116,111,114,95,100,95,52,50,0),5]]);
       let textinputh: Array<any> = [String.fromCharCode(109,95,52,51,95,105,116,97,108,105,99,0), String.fromCharCode(113,95,54,52,95,109,111,100,112,108,117,103,0)];
      if (splashS.size >= textinputh.length) {
         splashS = new Map([[`${splashS.size}`, 2 | splashS.size]]);
      }
      for (let s = 0; s < 3; s++) {
         textinputh.push(3 & parseInt(`${delegate_2pG}`));
      }
          let shootyesgoalT = String.fromCharCode(107,102,114,109,95,49,95,56,50,0);
          let footballT = true;
          let selectionD = 3.0;
         splashS = new Map([[`${splashS.size}`, 1 % (Math.max(6, splashS.size))]]);
         shootyesgoalT += `${2 - parseInt(`${selectionD}`)}`;
         footballT = shootyesgoalT == String.fromCharCode(97,0) || 21.11 >= selectionD;
         textinputh = [parseInt(`${delegate_2pG}`) & 2];
      for (let l = 0; l < 2; l++) {
         delegate_2pG -= parseFloat(`${textinputh.length ^ parseInt(`${delegate_2pG}`)}`);
      }
          let schedulerC = true;
          let detailsz = String.fromCharCode(114,95,49,54,95,118,97,114,116,105,109,101,0);
         splashS = new Map([[`${splashS.size}`, 2]]);
         schedulerC = (5 == (detailsz.length - (!schedulerC ? 5 : detailsz.length)));
      if (3 > (1 + splashS.size) && (1.11 - delegate_2pG) > 1.29) {
         splashS = new Map([[`${textinputh.length}`, 3]]);
      }
         textinputh.push(splashS.size);
      let middlewareB = 6393667 <= splashS.size;
      do {
         splashS.set(`${delegate_2pG}`, parseInt(`${delegate_2pG}`) >> (Math.min(4, Math.abs(3))));
         if (middlewareB) {
            break;
         }
      } while (middlewareB && ((splashS.size >> (Math.min(Math.abs(3), 2))) == 5 && 3 == (textinputh.length >> (Math.min(Math.abs(splashS.size), 5)))));
      whitevideolive5 += parseInt(`${moonf}`);
      if (libswresamplee) {
         break;
      }
   } while (((type_1a | 4) < 1 || (type_1a + parseInt(`${whitevideolive5}`)) < 4) && libswresamplee);
      icondefaultthumbnailt.set(zhubo1, zhubo1.length);
      phone6 = `${type_1a | u_hashI.size}`;

      

   if (!phone6.endsWith(`${comment5.length}`)) {
      comment5.push(1 + mintegralx);
   }
      moonf /= Math.max(3, 4);
      pressurer = new Map([[`${u_hashI.size}`, 1 | u_hashI.size]]);
   for (let r = 0; r < 3; r++) {
      shirtU /= Math.max(parseFloat(`${zhubo1.length}`), 2);
   }
      if (
        devicesOrientation === "LANDSCAPE-LEFT" ||
        devicesOrientation === "LANDSCAPE-RIGHT"
      ) {

       let foregroundQ = String.fromCharCode(119,114,111,116,101,95,107,95,57,55,0);
       let classesL = String.fromCharCode(109,95,53,57,95,115,122,97,98,111,0);
         classesL += "1";
       let libhermesY: Map<any, any> = new Map([[String.fromCharCode(114,95,49,53,95,121,113,117,97,110,116,0),false ], [String.fromCharCode(104,95,50,52,95,115,97,105,111,0),false ]]);
         classesL += `${libhermesY.size}`;
         libhermesY.set(foregroundQ, classesL.length | foregroundQ.length);
      if (2 >= classesL.length) {
          let nterstitiala: Array<any> = [136, 908, 907];
          let flipperE = String.fromCharCode(113,95,50,52,95,100,117,112,108,105,99,97,116,111,114,0);
          let firebasev = String.fromCharCode(103,95,50,56,95,101,110,116,114,111,112,121,109,111,100,101,100,97,116,97,0);
         classesL = `${firebasev.length}`;
         nterstitiala = [1];
         flipperE += `${nterstitiala.length}`;
         firebasev = `${3 % (Math.max(6, nterstitiala.length))}`;
      }
          let modalO: Array<any> = [String.fromCharCode(97,116,116,114,105,98,117,116,101,115,95,118,95,56,0), String.fromCharCode(97,98,101,108,95,52,95,50,56,0)];
         classesL += "1";
         modalO.push(modalO.length);
      whitevideolive5 -= heartB.length & 3;
   for (let i = 0; i < 1; i++) {
       let videojsQ = 5.0;
       let iconarrowrightwhitec = 4.0;
       let schedulerI: Map<any, any> = new Map([[String.fromCharCode(100,111,97,108,108,95,102,95,49,55,0),539], [String.fromCharCode(106,95,57,54,95,99,111,110,102,105,110,101,100,0),560]]);
         videojsQ /= Math.max(5, parseFloat(`${schedulerI.size & parseInt(`${videojsQ}`)}`));
         videojsQ += parseFloat(`${parseInt(`${videojsQ}`)}`);
      let textinputO = videojsQ <= 8898938.0;
      do {
         videojsQ /= Math.max(2, parseFloat(`${2}`));
         if (textinputO) {
            break;
         }
      } while (((3.15 * iconarrowrightwhitec) <= 3.26 || (3.15 + videojsQ) <= 5.64) && textinputO);
       let iconpipexpandI = String.fromCharCode(122,95,51,52,95,97,108,105,103,110,109,101,110,116,0);
       let statsnomoredataP = String.fromCharCode(115,115,121,98,95,118,95,50,55,0);
         schedulerI = new Map([[statsnomoredataP, 1 & statsnomoredataP.length]]);
      while (2.22 >= (3.26 / (Math.max(3, videojsQ)))) {
         videojsQ += parseFloat(`${2}`);
         break;
      }
         statsnomoredataP = `${parseInt(`${iconarrowrightwhitec}`)}`;
       let minivod7 = true;
       let downloadingT = true;
         schedulerI.set(`${videojsQ}`, parseInt(`${iconarrowrightwhitec}`) / 2);
      comment5.push(3 ^ comment5.length);
   }
      heartB = `${u_hashI.size}`;
       let icondefaultthumbnailr = false;
       let transfer8: Map<any, any> = new Map([[String.fromCharCode(110,116,115,99,95,119,95,56,49,0),258], [String.fromCharCode(98,95,52,95,103,97,116,101,100,0),276], [String.fromCharCode(115,117,98,102,105,108,101,95,119,95,55,53,0),672]]);
      while ((2 << (Math.min(4, Math.abs(transfer8.size)))) == 3) {
          let productH = 3;
          let becomeb: Array<any> = [924, 690, 56];
         icondefaultthumbnailr = (becomeb.length ^ transfer8.size) < 45;
         productH <<= Math.min(2, Math.abs(productH >> (Math.min(Math.abs(productH), 5))));
         becomeb.push(productH);
         break;
      }
      let questm = 5357526 >= transfer8.size;
      do {
          let soundn = 4.0;
          let wind4 = false;
          let graphicsx = 3.0;
          let incidentU = 1;
         transfer8.set(`${graphicsx}`, parseInt(`${graphicsx}`));
         soundn += parseFloat(`${parseInt(`${soundn}`) | 2}`);
         wind4 = incidentU > 61 && !wind4;
         incidentU += incidentU - 2;
         if (questm) {
            break;
         }
      } while (questm && (5 <= (4 << (Math.min(5, Math.abs(transfer8.size)))) && !icondefaultthumbnailr));
         transfer8 = new Map([[`${transfer8.size}`, transfer8.size + 3]]);
          let other4 = String.fromCharCode(114,95,49,55,95,99,109,97,99,0);
          let promotionk: Map<any, any> = new Map([[String.fromCharCode(115,97,103,97,95,104,95,56,49,0),String.fromCharCode(106,95,54,57,95,114,111,108,101,0)], [String.fromCharCode(107,95,54,57,95,97,99,99,117,109,117,108,97,116,111,114,0),String.fromCharCode(109,95,49,95,116,114,105,97,110,103,117,108,97,116,105,111,110,0)], [String.fromCharCode(107,95,51,52,95,99,111,109,112,117,116,101,0),String.fromCharCode(108,105,98,115,114,116,95,53,95,52,53,0)]]);
          let sigmobq = 5;
         icondefaultthumbnailr = promotionk.size == 62;
         other4 = "2";
         promotionk = new Map([[other4, (other4 == String.fromCharCode(98,0) ? sigmobq : other4.length)]]);
         sigmobq |= sigmobq;
          let path1 = 0;
         transfer8 = new Map([[`${icondefaultthumbnailr}`, path1 ^ 2]]);
      if (icondefaultthumbnailr && (transfer8.size * 2) >= 2) {
         transfer8.set(`${icondefaultthumbnailr}`, ((icondefaultthumbnailr ? 2 : 3) & 3));
      }
      phone6 += "3";
        setIsFullScreen(true);

   if (5 >= heartB.length) {
       let mapbuffery = String.fromCharCode(117,110,114,101,103,105,115,116,101,114,101,100,95,54,95,57,52,0);
         mapbuffery = `${mapbuffery.length}`;
         mapbuffery = `${mapbuffery.length * mapbuffery.length}`;
       let baseA = 2.0;
       let libsentryE = 2.0;
      heartB += `${comment5.length}`;
   }
   while (3 >= (1 << (Math.min(3, Math.abs(type_1a)))) && (moonf - 4.45) >= 1.20) {
      type_1a *= 2;
      break;
   }
       let telegramF: Map<any, any> = new Map([[String.fromCharCode(97,95,54,53,95,118,116,97,98,0),906], [String.fromCharCode(106,95,57,52,95,111,110,97,118,99,100,97,116,97,0),216]]);
      if (telegramF.get(`${telegramF.size}`) == null) {
         telegramF = new Map([[`${telegramF.size}`, 1]]);
      }
      if (telegramF.get(`${telegramF.size}`) != null) {
         telegramF.set(`${telegramF.size}`, telegramF.size + telegramF.size);
      }
      if (telegramF.get(`${telegramF.size}`) == null) {
         telegramF = new Map([[`${telegramF.size}`, telegramF.size]]);
      }
      mintegralx <<= Math.min(Math.abs(parseInt(`${closeL}`) + telegramF.size), 1);
       let condensedc = String.fromCharCode(97,102,102,105,110,101,95,107,95,49,55,0);
       let colors1: Map<any, any> = new Map([[String.fromCharCode(101,95,57,55,95,115,119,105,116,99,104,98,97,115,101,0),734], [String.fromCharCode(107,95,55,52,95,115,105,109,112,108,101,115,105,103,110,97,108,0),72]]);
         condensedc += `${colors1.size}`;
      let controlI = String.fromCharCode(57,99,122,107,117,121,98,0) == condensedc;
      do {
         condensedc += `${colors1.size / (Math.max(condensedc.length, 6))}`;
         if (controlI) {
            break;
         }
      } while ((!condensedc.startsWith(`${colors1.size}`)) && controlI);
      let reducerc = 9344401 >= colors1.size;
      do {
          let template_cD = 0.0;
          let dependencyH: Map<any, any> = new Map([[String.fromCharCode(122,95,57,53,95,118,115,101,114,118,105,99,101,0),753], [String.fromCharCode(111,95,57,48,95,99,105,114,99,0),62]]);
          let paginationG: Map<any, any> = new Map([[String.fromCharCode(105,95,56,56,95,116,101,120,116,115,0),231], [String.fromCharCode(121,95,55,55,95,98,101,99,97,109,101,0),361], [String.fromCharCode(99,95,53,48,95,114,101,113,117,101,115,116,0),871]]);
          let iconscheduleU = true;
         colors1.set(condensedc, 1);
         template_cD /= Math.max(parseFloat(`${3}`), 2);
         dependencyH.set(`${dependencyH.size}`, 3);
         paginationG.set(`${dependencyH.size}`, 2 | paginationG.size);
         iconscheduleU = dependencyH.size >= 94;
         if (reducerc) {
            break;
         }
      } while ((3 >= (4 | condensedc.length) || 2 >= (4 | condensedc.length)) && reducerc);
      if (5 < (condensedc.length + colors1.size)) {
          let modityj: Array<any> = [552, 303];
          let mimeG = false;
          let launchL: Array<any> = [943, 308];
          let basketballtrophyA = String.fromCharCode(118,95,55,56,95,114,101,112,101,97,116,101,100,108,121,0);
          let backwhitee: Map<any, any> = new Map([[String.fromCharCode(97,98,117,115,101,95,50,95,49,53,0),String.fromCharCode(101,118,105,99,116,105,111,110,95,114,95,51,51,0)], [String.fromCharCode(112,101,114,109,97,110,101,110,116,95,56,95,51,48,0),String.fromCharCode(109,112,99,100,97,116,97,95,115,95,57,52,0)], [String.fromCharCode(114,101,109,111,118,101,95,55,95,57,51,0),String.fromCharCode(117,115,97,103,101,95,54,95,51,55,0)]]);
         colors1 = new Map([[`${launchL.length}`, launchL.length]]);
         modityj.push(modityj.length);
         mimeG = (basketballtrophyA.length & backwhitee.size) < 63;
         basketballtrophyA = `${backwhitee.size | 2}`;
      }
          let championN = 2.0;
          let type_q1v = String.fromCharCode(115,112,97,114,115,101,95,103,95,51,56,0);
          let combinedT = 2.0;
         colors1 = new Map([[`${colors1.size}`, 3 / (Math.max(5, colors1.size))]]);
         championN += parseInt(`${championN}`) + type_q1v.length;
         type_q1v = `${type_q1v.length - parseInt(`${combinedT}`)}`;
         combinedT -= type_q1v.length;
      let description_jW = condensedc == String.fromCharCode(56,54,56,121,115,111,0);
      do {
          let guide3 = false;
          let selectionn = 1;
          let libapminsightbs = false;
          let modelsR = true;
         condensedc = `${(colors1.size & (libapminsightbs ? 2 : 5))}`;
         guide3 = (!modelsR ? !guide3 : !modelsR);
         selectionn >>= Math.min(Math.abs(selectionn << (Math.min(4, Math.abs(3)))), 3);
         libapminsightbs = modelsR;
         if (description_jW) {
            break;
         }
      } while (description_jW && (4 > (condensedc.length << (Math.min(Math.abs(5), 5)))));
      comment5 = [3 + parseInt(`${whitevideolive5}`)];
        

   if (4.84 == (mintegralx / (Math.max(whitevideolive5, 8))) || 4 == (mintegralx / (Math.max(9, parseInt(`${whitevideolive5}`))))) {
      mintegralx ^= 2 + heartB.length;
   }
   let modelD = 6459320 <= type_1a;
   do {
       let weatherS: Array<any> = [String.fromCharCode(103,95,50,56,0), String.fromCharCode(115,116,97,109,112,95,107,95,53,48,0), String.fromCharCode(109,95,55,49,95,115,101,110,100,105,110,103,0)];
       let v_countT = false;
       let philippines4 = String.fromCharCode(108,111,103,115,97,109,112,108,101,95,49,95,55,55,0);
       let libreactperfloggerjniD = 2.0;
       let tempnodataD: Map<any, any> = new Map([[String.fromCharCode(111,95,54,56,95,103,101,110,101,114,97,116,101,0),776], [String.fromCharCode(108,95,49,52,95,115,117,98,109,105,116,0),215], [String.fromCharCode(112,95,53,48,95,112,108,97,110,0),787]]);
       let awayQ: Map<any, any> = new Map([[String.fromCharCode(108,101,110,103,116,104,95,102,95,56,56,0),969], [String.fromCharCode(114,101,112,114,101,115,101,110,116,105,110,103,95,107,95,55,53,0),161], [String.fromCharCode(120,95,50,56,95,113,117,97,110,116,105,122,97,116,105,111,110,0),922]]);
      while (2 <= tempnodataD.size) {
          let heartBQ = 2.0;
          let application0 = 0.0;
          let iconbackwhiteS = false;
          let owngoalT = 3;
         v_countT = 77 < philippines4.length;
         heartBQ -= (parseFloat(`${(iconbackwhiteS ? 1 : 4) % (Math.max(parseInt(`${application0}`), 3))}`));
         application0 -= parseFloat(`${2}`);
         iconbackwhiteS = 82.87 >= heartBQ;
         owngoalT /= Math.max(3, 3 & parseInt(`${heartBQ}`));
         break;
      }
       let anythinkc = false;
       let libruntimeexecutorB = false;
      while (!weatherS.includes(libreactperfloggerjniD)) {
          let stationx = 3.0;
          let loadingB = String.fromCharCode(97,117,116,104,111,114,115,95,118,95,51,56,0);
         libreactperfloggerjniD -= parseInt(`${libreactperfloggerjniD}`) * loadingB.length;
         stationx *= parseFloat(`${parseInt(`${stationx}`) % 1}`);
         loadingB = `${parseInt(`${stationx}`)}`;
         break;
      }
          let statsb = String.fromCharCode(115,104,111,117,108,100,95,118,95,51,52,0);
          let whitevideolive3 = 2.0;
         anythinkc = (!v_countT ? libruntimeexecutorB : v_countT);
         statsb = `${1 * statsb.length}`;
         whitevideolive3 -= statsb.length / 3;
         libruntimeexecutorB = (((anythinkc ? awayQ.size : 6) & awayQ.size) > 94);
         tempnodataD = new Map([[`${tempnodataD.size}`, philippines4.length & tempnodataD.size]]);
       let libjsijniprofilerm = true;
       let memberA = true;
         libjsijniprofilerm = !anythinkc || tempnodataD.size >= 57;
         libruntimeexecutorB = tempnodataD.size <= 9;
      if (!anythinkc || 1 >= philippines4.length) {
          let u_hashz = 4.0;
          let vignetteE = 5;
          let icondefaultthumbnailV = 1;
          let modulesE = String.fromCharCode(101,120,112,111,95,51,95,53,50,0);
         anythinkc = !anythinkc;
         u_hashz /= Math.max((parseFloat(`${modulesE == String.fromCharCode(103,0) ? modulesE.length : icondefaultthumbnailV}`)), 4);
         vignetteE /= Math.max(2, icondefaultthumbnailV);
      }
      let project2 = libruntimeexecutorB ? !libruntimeexecutorB : libruntimeexecutorB;
      do {
         libruntimeexecutorB = (!v_countT ? libjsijniprofilerm : v_countT);
         if (project2) {
            break;
         }
      } while ((libruntimeexecutorB) && project2);
          let controlsY: Map<any, any> = new Map([[String.fromCharCode(98,95,52,95,112,116,115,0),618], [String.fromCharCode(115,117,98,109,111,100,101,108,115,95,55,95,51,57,0),567], [String.fromCharCode(116,101,97,109,115,95,101,95,51,50,0),113]]);
          let subin5: Map<any, any> = new Map([[String.fromCharCode(114,101,97,114,114,97,110,103,101,95,112,95,49,53,0),true ], [String.fromCharCode(115,95,54,52,95,114,101,99,114,101,97,116,101,0),false ], [String.fromCharCode(109,97,116,101,114,105,97,108,105,122,101,95,52,95,55,52,0),true ]]);
          let edit8 = 4.0;
         libjsijniprofilerm = philippines4.length <= 27;
         controlsY = new Map([[`${subin5.size}`, subin5.size]]);
         edit8 -= parseFloat(`${controlsY.size ^ 2}`);
      if (5.70 <= (1.1 * libreactperfloggerjniD) || 2.35 <= (1.1 * libreactperfloggerjniD)) {
          let dicew: Map<any, any> = new Map([[String.fromCharCode(114,103,101,110,95,108,95,57,56,0),String.fromCharCode(112,95,55,55,95,115,117,115,112,101,110,100,101,100,0)], [String.fromCharCode(117,95,52,48,95,99,115,104,97,114,112,0),String.fromCharCode(120,95,49,50,95,112,114,111,98,97,98,105,108,105,116,105,101,115,0)]]);
         awayQ.set(`${memberA}`, ((memberA ? 2 : 3) >> (Math.min(Math.abs(3), 4))));
         dicew.set(`${dicew.size}`, dicew.size);
      }
          let libcxxcomponentsF = String.fromCharCode(114,101,99,111,110,110,101,99,116,95,121,95,57,52,0);
          let dialogY: Array<any> = [802, 773];
          let iconfeedbackz: Array<any> = [String.fromCharCode(97,116,116,114,97,99,116,105,111,110,95,100,95,53,50,0), String.fromCharCode(97,95,49,48,95,100,114,97,103,103,105,110,103,0), String.fromCharCode(119,95,55,54,95,109,97,116,105,99,0)];
         philippines4 = `${tempnodataD.size}`;
         libcxxcomponentsF = `${dialogY.length << (Math.min(Math.abs(1), 1))}`;
         dialogY = [1 << (Math.min(4, dialogY.length))];
         iconfeedbackz.push(3);
      type_1a <<= Math.min(3, Math.abs((String.fromCharCode(120,0) == yellowanimationlive4 ? yellowanimationlive4.length : (v_countT ? 2 : 2))));
      if (modelD) {
         break;
      }
   } while ((!heartB.startsWith(`${type_1a}`)) && modelD);
   for (let q = 0; q < 3; q++) {
      whitevideolive5 /= Math.max(parseInt(`${closeL}`) | mintegralx, 1);
   }
      whitevideolive5 -= zhubo1.length;
        StatusBar.setHidden(true);

      yellowanimationlive4 += "2";
   while ((pressurer.size >> (Math.min(Math.abs(5), 3))) < 4 || 2 < (5 >> (Math.min(2, Math.abs(pressurer.size))))) {
       let libreanimatedf = String.fromCharCode(108,101,100,103,101,114,95,113,95,48,0);
       let layoutv = String.fromCharCode(112,117,98,95,51,95,54,53,0);
       let soundl = String.fromCharCode(119,95,54,56,95,99,111,117,110,116,101,100,0);
       let sina6 = String.fromCharCode(102,111,114,109,97,110,116,95,119,95,53,54,0);
       let pageY = String.fromCharCode(109,100,97,116,95,99,95,52,53,0);
         sina6 += `${pageY.length >> (Math.min(libreanimatedf.length, 5))}`;
         sina6 += `${(String.fromCharCode(81,0) == sina6 ? sina6.length : pageY.length)}`;
      for (let n = 0; n < 1; n++) {
          let carouselT = false;
          let colorsm = 5.0;
          let yingL = 3.0;
         sina6 = `${(pageY == String.fromCharCode(66,0) ? libreanimatedf.length : pageY.length)}`;
         carouselT = colorsm < 74.90;
         colorsm /= Math.max(1, (parseFloat(`${(carouselT ? 3 : 5) << (Math.min(Math.abs(parseInt(`${colorsm}`)), 4))}`)));
         yingL += ((carouselT ? 4 : 3) | parseInt(`${yingL}`));
      }
      let libffmpegkiti = pageY.length <= 9801390;
      do {
         pageY += `${sina6.length << (Math.min(4, soundl.length))}`;
         if (libffmpegkiti) {
            break;
         }
      } while (libffmpegkiti && (!layoutv.includes(`${pageY.length}`)));
         layoutv += `${(String.fromCharCode(115,0) == sina6 ? pageY.length : sina6.length)}`;
      let fullscreenminR = String.fromCharCode(112,95,107,50,105,0) == soundl;
      do {
         soundl += `${libreanimatedf.length}`;
         if (fullscreenminR) {
            break;
         }
      } while (fullscreenminR && (soundl.startsWith(`${libreanimatedf.length}`)));
      if (soundl != String.fromCharCode(50,0) || sina6 == String.fromCharCode(112,0)) {
          let profilepicc: Map<any, any> = new Map([[String.fromCharCode(109,99,108,109,115,95,52,95,50,51,0),943], [String.fromCharCode(101,120,99,101,101,100,115,95,52,95,55,52,0),116], [String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,120,95,57,53,0),638]]);
          let button8 = String.fromCharCode(115,95,49,49,95,97,99,116,105,118,97,116,105,111,110,115,0);
          let buildj = String.fromCharCode(104,95,49,48,48,95,111,116,104,101,114,0);
          let short_m2J = String.fromCharCode(112,97,114,97,115,101,116,95,119,95,55,48,0);
          let membershipS: Array<any> = [String.fromCharCode(102,105,108,101,95,108,95,56,56,0), String.fromCharCode(101,95,55,52,95,105,110,99,114,101,109,101,110,116,115,0), String.fromCharCode(111,95,55,54,95,98,114,111,97,100,99,97,115,116,115,0)];
         soundl += `${buildj.length % (Math.max(short_m2J.length, 7))}`;
         profilepicc.set(button8, 3 - profilepicc.size);
         button8 = "2";
         buildj = `${(String.fromCharCode(71,0) == button8 ? membershipS.length : button8.length)}`;
         short_m2J = `${2 + button8.length}`;
         membershipS.push(1);
      }
         layoutv = `${pageY.length + sina6.length}`;
      pressurer = new Map([[yellowanimationlive4, 2]]);
      break;
   }
       let qaagd = String.fromCharCode(97,109,102,101,110,99,95,104,95,51,48,0);
       let heartr = 0;
       let chartb = String.fromCharCode(114,101,103,105,115,116,114,121,95,55,95,56,52,0);
         heartr -= heartr / 2;
         heartr |= (qaagd == String.fromCharCode(88,0) ? heartr : qaagd.length);
         qaagd += `${chartb.length}`;
          let cleara = 0.0;
          let quest1 = String.fromCharCode(117,110,105,109,112,111,114,116,97,110,116,95,108,95,53,55,0);
          let jnewarchdefaultsz = String.fromCharCode(105,103,110,111,114,101,115,95,117,95,57,48,0);
         qaagd = `${quest1.length}`;
         cleara /= Math.max(2, parseFloat(`${jnewarchdefaultsz.length}`));
         quest1 = "3";
         jnewarchdefaultsz = `${jnewarchdefaultsz.length >> (Math.min(2, Math.abs(parseInt(`${cleara}`))))}`;
         heartr &= chartb.length;
       let whistleD = String.fromCharCode(118,95,52,56,95,119,109,97,112,114,111,0);
       let championp = String.fromCharCode(111,95,52,53,95,114,101,99,111,103,110,105,122,101,0);
       let liveshareN = 5.0;
       let penaltymatchicona = 1.0;
      let blackC = liveshareN <= 9009569.0;
      do {
         liveshareN *= (String.fromCharCode(77,0) == whistleD ? whistleD.length : parseInt(`${penaltymatchicona}`));
         if (blackC) {
            break;
         }
      } while (blackC && ((liveshareN / 5.99) == 1.77 && 5.99 == (penaltymatchicona * liveshareN)));
      let executord = 7389336.0 >= penaltymatchicona;
      do {
         penaltymatchicona *= parseInt(`${liveshareN}`) << (Math.min(Math.abs(2), 4));
         if (executord) {
            break;
         }
      } while (executord && ((liveshareN * 4) > 5.19));
      comment5 = [2 - zhubo1.length];
   while (3 <= (mintegralx & zhubo1.length)) {
      mintegralx |= 2 * phone6.length;
      break;
   }

        lockOrientation(devicesOrientation);
      } else if (devicesOrientation === "PORTRAIT") {

       let const_vwD = String.fromCharCode(108,105,98,97,118,102,111,114,109,97,116,95,103,95,51,56,0);
       let read2: Array<any> = [947, 77, 142];
       let material7 = String.fromCharCode(122,95,55,55,95,117,116,120,111,115,0);
       let baidu1 = String.fromCharCode(120,95,51,56,95,116,111,107,101,110,105,122,101,0);
         read2 = [baidu1.length];
          let traminir = String.fromCharCode(98,95,50,53,95,112,117,108,108,117,112,0);
          let iconrightorangez = String.fromCharCode(101,103,97,99,121,95,51,95,53,51,0);
         baidu1 = `${baidu1.length | 2}`;
         traminir += `${traminir.length}`;
         iconrightorangez += `${3 / (Math.max(3, traminir.length))}`;
      let sortQ = const_vwD.length >= 9240381;
      do {
          let iconsettingJ = 1.0;
          let codegens = 1.0;
          let reactnavigationC: Map<any, any> = new Map([[String.fromCharCode(97,95,49,54,95,99,111,115,105,0),false ], [String.fromCharCode(109,105,120,101,114,95,104,95,54,55,0),true ]]);
         const_vwD = `${2 % (Math.max(3, material7.length))}`;
         iconsettingJ *= parseFloat(`${3 ^ parseInt(`${codegens}`)}`);
         codegens /= Math.max(3, parseFloat(`${parseInt(`${codegens}`) * parseInt(`${iconsettingJ}`)}`));
         reactnavigationC = new Map([[`${reactnavigationC.size}`, parseInt(`${codegens}`) * reactnavigationC.size]]);
         if (sortQ) {
            break;
         }
      } while (sortQ && ((read2.length ^ 5) <= 5));
      while (!const_vwD.endsWith(baidu1)) {
         const_vwD = `${const_vwD.length & 3}`;
         break;
      }
         read2 = [const_vwD.length << (Math.min(5, read2.length))];
      for (let a = 0; a < 2; a++) {
         baidu1 = `${const_vwD.length}`;
      }
         baidu1 = `${material7.length}`;
         const_vwD += `${const_vwD.length}`;
      icondefaultthumbnailt = new Map([[material7, material7.length]]);
      yellowanimationlive4 += "2";
       let resendU: Map<any, any> = new Map([[String.fromCharCode(101,95,49,55,95,103,101,110,101,114,97,116,101,0),330], [String.fromCharCode(106,95,53,56,95,109,97,114,103,105,110,115,0),575], [String.fromCharCode(112,105,120,108,101,116,95,114,95,50,55,0),414]]);
       let readu = String.fromCharCode(97,116,97,98,97,115,101,95,100,95,51,48,0);
      if ((resendU.size ^ readu.length) == 4 || 4 == (readu.length ^ resendU.size)) {
         readu += `${1 ^ resendU.size}`;
      }
          let halffieldimagek = 2.0;
          let predictionbannersharedn = true;
          let trash6 = String.fromCharCode(119,95,53,48,95,118,100,97,115,104,101,114,0);
         resendU = new Map([[readu, 2]]);
         halffieldimagek /= Math.max(parseFloat(`${parseInt(`${halffieldimagek}`) >> (Math.min(1, Math.abs(3)))}`), 2);
         predictionbannersharedn = !predictionbannersharedn;
         trash6 = "1";
         readu += `${resendU.size % (Math.max(6, readu.length))}`;
      for (let b = 0; b < 1; b++) {
         readu = `${resendU.size / (Math.max(2, readu.length))}`;
      }
      for (let l = 0; l < 2; l++) {
         resendU = new Map([[`${resendU.size}`, resendU.size << (Math.min(readu.length, 5))]]);
      }
         readu += `${readu.length}`;
      shirtU += parseFloat(`${resendU.size ^ 3}`);
      pressurer.set(`${moonf}`, parseInt(`${moonf}`) & 2);
        setIsFullScreen(false);

   for (let u = 0; u < 3; u++) {
      u_hashI = new Map([[`${u_hashI.size}`, u_hashI.size & mintegralx]]);
   }
   if (5 < (phone6.length / 1) || 3 < (parseInt(`${closeL}`) - 1)) {
       let iconrightorange4 = String.fromCharCode(99,111,110,100,101,110,115,101,100,95,104,95,52,48,0);
       let codeW = 5;
       let fastforwardc = String.fromCharCode(107,95,52,49,95,101,108,108,105,112,116,105,99,97,108,0);
          let stringsW: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,97,105,110,95,104,95,54,53,0),false ], [String.fromCharCode(115,116,101,108,108,97,114,95,49,95,54,51,0),false ], [String.fromCharCode(101,95,53,48,95,114,101,99,101,105,118,101,0),true ]]);
          let customm = false;
          let code2 = 2.0;
         iconrightorange4 += `${(fastforwardc == String.fromCharCode(105,0) ? fastforwardc.length : iconrightorange4.length)}`;
         stringsW = new Map([[`${stringsW.size}`, 3]]);
         customm = !customm;
         code2 -= parseFloat(`${parseInt(`${code2}`) & 3}`);
         fastforwardc += `${(String.fromCharCode(86,0) == iconrightorange4 ? iconrightorange4.length : codeW)}`;
      let launchu = String.fromCharCode(114,108,95,120,55,117,0) == fastforwardc;
      do {
         fastforwardc += `${3 | iconrightorange4.length}`;
         if (launchu) {
            break;
         }
      } while (launchu && (2 <= (codeW | 5) && (5 | codeW) <= 4));
      if (fastforwardc == String.fromCharCode(49,0)) {
         iconrightorange4 = `${fastforwardc.length & codeW}`;
      }
      for (let o = 0; o < 1; o++) {
          let infoG = 0.0;
          let dialogj: Array<any> = [871, 688];
          let predictionU: Array<any> = [745, 808, 190];
          let dataq = String.fromCharCode(108,95,53,55,95,97,112,112,101,97,114,105,110,103,0);
          let showlessU = 4.0;
         fastforwardc = `${iconrightorange4.length * predictionU.length}`;
         infoG *= 2;
         dialogj.push(dialogj.length % 2);
         predictionU.push(parseInt(`${showlessU}`) << (Math.min(dialogj.length, 4)));
         dataq += "3";
         showlessU += parseFloat(`${dialogj.length ^ dataq.length}`);
      }
      while (fastforwardc.includes(`${codeW}`)) {
         codeW += codeW ^ 3;
         break;
      }
          let brightness8 = String.fromCharCode(108,105,98,111,112,101,110,106,112,101,103,95,112,95,53,50,0);
         fastforwardc = `${3 - brightness8.length}`;
         iconrightorange4 = `${fastforwardc.length}`;
      if (iconrightorange4.startsWith(`${codeW}`)) {
          let homeinactivey = 0;
          let leakcheckeru: Array<any> = [176, 655];
          let pause7 = true;
          let release_jO: Map<any, any> = new Map([[String.fromCharCode(112,105,120,102,109,116,95,112,95,49,52,0),429], [String.fromCharCode(116,114,97,105,110,95,121,95,53,55,0),583]]);
          let subbasketballplayer3 = String.fromCharCode(107,95,56,49,95,111,112,116,105,109,105,122,97,116,105,111,110,0);
         iconrightorange4 += `${homeinactivey << (Math.min(Math.abs(2), 1))}`;
         homeinactivey += subbasketballplayer3.length - 1;
         leakcheckeru.push(2 - leakcheckeru.length);
         pause7 = release_jO.size >= 6 || String.fromCharCode(55,0) == subbasketballplayer3;
         release_jO.set(subbasketballplayer3, subbasketballplayer3.length * 2);
      }
      phone6 = "2";
   }
       let modity6 = 0.0;
       let sigmobJ: Array<any> = [653, 800];
      if (sigmobJ.includes(modity6)) {
          let librrcG = String.fromCharCode(108,111,111,112,98,97,99,107,95,101,95,57,51,0);
          let predictionactive8 = 2;
          let basketballawayteam0: Array<any> = [337, 130, 648];
          let smallu: Array<any> = [802, 177];
          let iconadslink2 = String.fromCharCode(101,109,115,99,114,105,112,116,101,110,95,110,95,57,50,0);
         modity6 -= smallu.length - 1;
         librrcG += `${librrcG.length * predictionactive8}`;
         predictionactive8 /= Math.max(2, 2);
         basketballawayteam0.push(librrcG.length ^ 3);
         smallu.push(librrcG.length << (Math.min(Math.abs(2), 1)));
         iconadslink2 = `${predictionactive8 / 3}`;
      }
       let sheetL = 2.0;
       let settingx = 0.0;
       let checkboxo = String.fromCharCode(108,111,103,95,118,95,50,51,0);
       let plashL = String.fromCharCode(99,95,53,56,95,103,101,110,99,102,103,115,0);
          let megaphoneZ = 4.0;
          let libswscalee = 5.0;
          let predictionbannerC = 1;
         plashL = `${1 >> (Math.min(Math.abs(parseInt(`${modity6}`)), 2))}`;
         megaphoneZ += parseFloat(`${parseInt(`${libswscalee}`)}`);
         predictionbannerC += 1;
      for (let w = 0; w < 2; w++) {
         modity6 *= 3 | parseInt(`${sheetL}`);
      }
      if (1 < (parseInt(`${settingx}`) - plashL.length)) {
         settingx += parseFloat(`${parseInt(`${modity6}`) ^ 2}`);
      }
      u_hashI = new Map([[`${whitevideolive5}`, parseInt(`${whitevideolive5}`)]]);
   let greenH = String.fromCharCode(103,106,102,117,49,110,105,0) == yellowanimationlive4;
   do {
      yellowanimationlive4 = `${mintegralx}`;
      if (greenH) {
         break;
      }
   } while (((yellowanimationlive4.length / 4) > 3 || 3 > (yellowanimationlive4.length / 4)) && greenH);
        

       let nend4: Array<any> = [128, 79];
          let zhuboz = String.fromCharCode(101,120,105,115,116,97,110,99,101,95,113,95,54,52,0);
          let penaltyS = String.fromCharCode(97,95,50,49,95,117,112,115,101,114,116,0);
          let matchinactive5 = String.fromCharCode(98,95,53,49,95,97,117,103,109,101,110,116,101,100,0);
         nend4.push(zhuboz.length | 3);
         zhuboz += `${2 + penaltyS.length}`;
         penaltyS += `${matchinactive5.length}`;
         matchinactive5 += `${(matchinactive5 == String.fromCharCode(102,0) ? matchinactive5.length : penaltyS.length)}`;
       let librrcC = false;
       let matchinactivep = true;
      while (!librrcC) {
          let popupb = String.fromCharCode(98,111,117,110,100,97,108,108,95,98,95,56,52,0);
          let logouto = String.fromCharCode(101,95,56,57,95,108,111,99,107,115,0);
          let annerr = String.fromCharCode(105,95,53,48,95,103,114,97,98,0);
          let iconarrowrightD = 2.0;
          let productl = 4.0;
         librrcC = 35.66 <= iconarrowrightD || productl <= 35.66;
         popupb += `${logouto.length}`;
         logouto += "3";
         annerr += `${logouto.length}`;
         iconarrowrightD *= logouto.length & 3;
         productl += (parseFloat(`${String.fromCharCode(89,0) == annerr ? annerr.length : popupb.length}`));
         break;
      }
      pressurer = new Map([[zhubo1, (String.fromCharCode(97,0) == heartB ? heartB.length : zhubo1.length)]]);
   for (let a = 0; a < 3; a++) {
      moonf *= comment5.length;
   }
       let libtobY = true;
       let tnewinterstitial4 = String.fromCharCode(117,95,56,51,95,112,108,97,99,101,104,111,108,100,101,114,115,0);
       let fullx = String.fromCharCode(109,95,54,55,95,116,111,100,97,121,0);
         tnewinterstitial4 = `${((libtobY ? 4 : 3) - 2)}`;
       let friendsi = String.fromCharCode(98,95,55,95,102,101,101,0);
       let fastforwardh = String.fromCharCode(113,95,54,53,95,105,100,99,116,108,108,109,0);
         fullx = `${fullx.length}`;
      if (fastforwardh != String.fromCharCode(86,0)) {
         tnewinterstitial4 = `${(tnewinterstitial4 == String.fromCharCode(53,0) ? (libtobY ? 2 : 1) : tnewinterstitial4.length)}`;
      }
      while (fullx.length > 1) {
          let countryd = String.fromCharCode(101,95,51,50,95,116,111,97,115,116,0);
          let leftv = 0;
          let f_playerV = String.fromCharCode(104,95,50,52,0);
          let dycreator4: Array<any> = [909, 340];
          let package_p2 = String.fromCharCode(115,112,108,97,116,95,117,95,52,51,0);
         fullx += "2";
         countryd += `${dycreator4.length * leftv}`;
         leftv >>= Math.min(Math.abs(1 / (Math.max(7, countryd.length))), 3);
         f_playerV += `${(package_p2 == String.fromCharCode(119,0) ? package_p2.length : dycreator4.length)}`;
         break;
      }
      let nbatrophy0 = 6803398 <= tnewinterstitial4.length;
      do {
          let gestureQ: Array<any> = [String.fromCharCode(97,114,114,97,121,115,105,122,101,95,97,95,51,56,0), String.fromCharCode(121,95,51,48,95,117,110,115,101,116,0)];
          let large5 = true;
          let imagesK = 1.0;
          let photoy = false;
          let penaltyshootY = String.fromCharCode(104,95,55,49,95,120,119,109,97,0);
         tnewinterstitial4 = `${2 & friendsi.length}`;
         gestureQ.push((String.fromCharCode(114,0) == penaltyshootY ? penaltyshootY.length : (large5 ? 1 : 1)));
         large5 = gestureQ.length == 39;
         imagesK += ((large5 ? 5 : 1));
         photoy = (imagesK + gestureQ.length) < 51.69;
         if (nbatrophy0) {
            break;
         }
      } while ((!tnewinterstitial4.includes(`${fullx.length}`)) && nbatrophy0);
         friendsi += `${1 ^ fastforwardh.length}`;
         fastforwardh = `${((libtobY ? 1 : 1))}`;
      if (!friendsi.endsWith(`${libtobY}`)) {
          let attributedstringl = String.fromCharCode(112,95,57,48,95,99,111,110,115,116,97,110,116,0);
         friendsi = `${((libtobY ? 1 : 5) * fastforwardh.length)}`;
         attributedstringl = `${attributedstringl.length}`;
      }
      whitevideolive5 -= fullx.length;
   for (let g = 0; g < 3; g++) {
      shirtU += parseFloat(`${1}`);
   }
        StatusBar.setHidden(false);

   for (let m = 0; m < 2; m++) {
      moonf += 2 & comment5.length;
   }
      icondefaultthumbnailt = new Map([[`${u_hashI.size}`, u_hashI.size + parseInt(`${moonf}`)]]);
       let filedQ = true;
       let nextp = String.fromCharCode(102,108,97,99,95,50,95,52,54,0);
      let yellowscoreballn = 8232820 >= nextp.length;
      do {
         nextp += `${(nextp == String.fromCharCode(101,0) ? nextp.length : (filedQ ? 1 : 3))}`;
         if (yellowscoreballn) {
            break;
         }
      } while ((nextp.length == 2 || filedQ) && yellowscoreballn);
          let iconclosewhitebgD = 3.0;
          let homeiconp: Array<any> = [853, 790, 333];
          let footballtrophyX = true;
         nextp += `${1 ^ parseInt(`${iconclosewhitebgD}`)}`;
         iconclosewhitebgD *= 3 & homeiconp.length;
         homeiconp = [((footballtrophyX ? 3 : 2) % (Math.max(homeiconp.length, 4)))];
      let h_viewv = nextp.length <= 6473654;
      do {
         nextp = "2";
         if (h_viewv) {
            break;
         }
      } while ((filedQ || nextp.length == 3) && h_viewv);
      while (nextp.endsWith(`${filedQ}`)) {
         nextp = `${nextp.length / 3}`;
         break;
      }
      for (let k = 0; k < 1; k++) {
         nextp += `${((filedQ ? 1 : 4))}`;
      }
      if (2 > nextp.length) {
         nextp = `${((filedQ ? 4 : 4) | 1)}`;
      }
      moonf *= 1;
   while (parseInt(`${whitevideolive5}`) <= pressurer.size) {
      pressurer = new Map([[heartB, (phone6 == String.fromCharCode(72,0) ? phone6.length : heartB.length)]]);
      break;
   }

        lockOrientation(devicesOrientation);
      }
    };

    const onToggleFullScreen = useCallback(() => {
       let libreanimateda = String.fromCharCode(114,95,51,56,95,100,98,104,97,110,100,108,101,0);
    let soundu = 3;
    let penaltyshooto = 1.0;
    let uploadU: Map<any, any> = new Map([[String.fromCharCode(100,95,54,52,95,105,115,115,117,105,110,103,0),true ], [String.fromCharCode(117,95,57,52,95,115,101,116,98,105,116,115,0),true ]]);
    let nalyticsD = String.fromCharCode(97,117,116,104,111,114,105,122,97,116,105,111,110,95,105,95,50,53,0);
    let z_lockW = 3.0;
    let quest6 = 5.0;
    let scrollviewT = false;
    let smallC = String.fromCharCode(110,95,54,53,95,100,111,119,110,115,104,105,102,116,0);
   let renewq = quest6 >= 9493257.0;
   do {
      quest6 -= (String.fromCharCode(65,0) == libreanimateda ? libreanimateda.length : soundu);
      if (renewq) {
         break;
      }
   } while ((5.27 < quest6) && renewq);
      soundu &= libreanimateda.length;

      if (
        appOrientation === "LANDSCAPE-LEFT" ||
        appOrientation === "LANDSCAPE-RIGHT"
      ) {

   while (3.46 >= penaltyshooto) {
      soundu <<= Math.min(1, Math.abs(soundu + 2));
      break;
   }
       let pressureA = String.fromCharCode(116,95,54,55,95,108,111,103,105,115,116,105,99,0);
       let eactb: Map<any, any> = new Map([[String.fromCharCode(102,95,49,52,95,101,120,112,101,99,116,101,100,0),true ], [String.fromCharCode(104,95,54,54,95,100,97,114,119,105,110,0),false ]]);
         pressureA += `${eactb.size}`;
      let largesoundJ = 5091818 <= pressureA.length;
      do {
          let layout9 = true;
          let huaweiP = String.fromCharCode(116,104,101,109,101,95,116,95,52,49,0);
          let iconmoreT = String.fromCharCode(116,101,115,116,110,101,116,95,53,95,54,56,0);
          let libruntimeexecutorZ: Array<any> = [841, 153];
         pressureA += `${pressureA.length}`;
         layout9 = huaweiP.length <= 49 || 49 <= iconmoreT.length;
         huaweiP = `${1 & huaweiP.length}`;
         iconmoreT += "1";
         libruntimeexecutorZ = [huaweiP.length & libruntimeexecutorZ.length];
         if (largesoundJ) {
            break;
         }
      } while (largesoundJ && (eactb.size == pressureA.length));
         eactb.set(pressureA, eactb.size ^ pressureA.length);
      for (let m = 0; m < 2; m++) {
          let combined5 = 3.0;
          let nativemoduleX: Array<any> = [797, 71];
         eactb.set(`${nativemoduleX.length}`, 1 >> (Math.min(4, Math.abs(eactb.size))));
         combined5 += parseInt(`${combined5}`) | parseInt(`${combined5}`);
         nativemoduleX = [parseInt(`${combined5}`) - parseInt(`${combined5}`)];
      }
          let libimagepipeliner: Array<any> = [421, 95, 423];
         pressureA = "1";
         libimagepipeliner = [libimagepipeliner.length ^ libimagepipeliner.length];
         eactb = new Map([[`${eactb.size}`, pressureA.length]]);
      penaltyshooto -= (parseInt(`${quest6}`) << (Math.min(1, Math.abs((scrollviewT ? 1 : 1)))));
        lockOrientation("PORTRAIT");

   if (!libreanimateda.endsWith(`${penaltyshooto}`)) {
       let whitetickg = 0.0;
       let fullN = 5;
       let package__6u = 1;
       let hongkongl = String.fromCharCode(115,117,98,105,116,101,109,115,95,50,95,51,0);
       let teamdetailsbgP = 3.0;
         whitetickg -= 2;
      let canvasX = 5839662 <= fullN;
      do {
         fullN += parseInt(`${whitetickg}`);
         if (canvasX) {
            break;
         }
      } while (canvasX && (4 <= (fullN / 1)));
         whitetickg += parseInt(`${whitetickg}`);
      while (2 < (4 | hongkongl.length) || (hongkongl.length - parseInt(`${teamdetailsbgP}`)) < 4) {
         teamdetailsbgP -= parseInt(`${teamdetailsbgP}`);
         break;
      }
      let canvasr = teamdetailsbgP >= 5357799.0;
      do {
         teamdetailsbgP /= Math.max(3, package__6u << (Math.min(Math.abs(2), 2)));
         if (canvasr) {
            break;
         }
      } while (canvasr && (hongkongl.includes(`${teamdetailsbgP}`)));
         teamdetailsbgP -= (String.fromCharCode(105,0) == hongkongl ? hongkongl.length : parseInt(`${whitetickg}`));
      for (let p = 0; p < 3; p++) {
         hongkongl += `${package__6u / 1}`;
      }
      let textinputr = fullN >= 5497968;
      do {
         fullN ^= hongkongl.length & 2;
         if (textinputr) {
            break;
         }
      } while ((3.0 > (whitetickg + fullN)) && textinputr);
      if (parseInt(`${teamdetailsbgP}`) > hongkongl.length) {
          let modules: Array<any> = [301, 28, 736];
          let layoutY = 0.0;
          let homeiconY = false;
          let homeplayerh = 1;
         hongkongl += `${parseInt(`${teamdetailsbgP}`) + 3}`;
         modules.push(((homeiconY ? 3 : 5) << (Math.min(Math.abs(parseInt(`${layoutY}`)), 1))));
         layoutY -= (3 ^ (homeiconY ? 4 : 1));
         homeplayerh >>= Math.min(4, parseInt(`${Math.abs(((homeiconY ? 5 : 5) / (Math.max(parseInt(`${layoutY}`), 6))))}`));
      }
      for (let d = 0; d < 1; d++) {
          let qaagr = String.fromCharCode(116,101,114,109,105,110,97,116,105,111,110,95,56,95,50,50,0);
          let minimizet: Array<any> = [String.fromCharCode(101,110,118,105,114,111,110,109,101,110,116,95,116,95,57,53,0), String.fromCharCode(110,97,109,101,115,95,107,95,50,48,0)];
          let spinnerd = 1.0;
          let libcrashsdkg = String.fromCharCode(106,95,49,52,95,112,97,108,101,116,116,101,0);
          let miniM: Array<any> = [241, 798];
         fullN <<= Math.min(Math.abs(package__6u << (Math.min(3, Math.abs(2)))), 2);
         qaagr = `${minimizet.length / (Math.max(3, 9))}`;
         minimizet.push(3 << (Math.min(Math.abs(parseInt(`${spinnerd}`)), 4)));
         spinnerd -= parseFloat(`${minimizet.length}`);
         libcrashsdkg = `${parseInt(`${spinnerd}`) % (Math.max(miniM.length, 2))}`;
         miniM = [minimizet.length << (Math.min(Math.abs(1), 5))];
      }
       let balla = String.fromCharCode(116,95,52,54,95,112,110,105,101,108,115,0);
          let screend = 1;
         package__6u <<= Math.min(2, Math.abs(parseInt(`${whitetickg}`)));
         screend ^= screend;
      let inviteY = 9527680 >= balla.length;
      do {
         balla = `${package__6u & 3}`;
         if (inviteY) {
            break;
         }
      } while (inviteY && ((4 | balla.length) == 4 || 1 == (balla.length | 4)));
          let mergerG: Array<any> = [456, 637, 814];
          let libavformatg = String.fromCharCode(117,95,49,95,109,112,106,112,101,103,0);
         hongkongl += `${mergerG.length | 1}`;
         mergerG = [libavformatg.length];
         libavformatg += `${libavformatg.length << (Math.min(Math.abs(3), 5))}`;
         whitetickg *= 2 + fullN;
      penaltyshooto -= (String.fromCharCode(77,0) == libreanimateda ? libreanimateda.length : soundu);
   }
      nalyticsD += `${parseInt(`${z_lockW}`) | soundu}`;
        setIsFullScreen(false);

   for (let o = 0; o < 1; o++) {
       let cornere = String.fromCharCode(115,117,98,116,97,115,107,95,117,95,49,55,0);
       let miniT: Map<any, any> = new Map([[String.fromCharCode(116,120,102,109,95,101,95,52,53,0),false ], [String.fromCharCode(109,95,57,54,95,98,101,116,104,115,111,102,116,118,105,100,0),false ]]);
       let carouselh = String.fromCharCode(112,101,101,114,105,100,95,109,95,52,51,0);
       let changeo: Array<any> = [489, 731];
      let ewardedR = 6680767 <= carouselh.length;
      do {
         carouselh = `${(carouselh == String.fromCharCode(86,0) ? carouselh.length : cornere.length)}`;
         if (ewardedR) {
            break;
         }
      } while (ewardedR && (carouselh.length <= miniT.size));
      if ((1 >> (Math.min(1, Math.abs(miniT.size)))) > 1) {
         miniT.set(`${cornere}`, 2 & cornere.length);
      }
      for (let l = 0; l < 3; l++) {
         miniT.set(`${cornere}`, cornere.length);
      }
         miniT = new Map([[`${changeo.length}`, 3]]);
      if (!carouselh.endsWith(`${cornere.length}`)) {
          let suggestion3: Array<any> = [233, 746, 604];
          let nterstitialp = 2;
         cornere += `${(carouselh == String.fromCharCode(48,0) ? carouselh.length : changeo.length)}`;
         suggestion3.push(nterstitialp / (Math.max(suggestion3.length, 8)));
         nterstitialp %= Math.max(1, 1 | suggestion3.length);
      }
         cornere += `${3 * carouselh.length}`;
       let iconarrowleftU = true;
       let popupO = true;
      while (cornere.length == 3) {
         miniT.set(`${carouselh}`, carouselh.length & 3);
         break;
      }
         carouselh += `${(1 & (iconarrowleftU ? 2 : 4))}`;
          let schedulerw = 4.0;
          let filedS = false;
          let hooksu = String.fromCharCode(115,117,110,115,101,116,95,56,95,54,50,0);
         cornere += `${((iconarrowleftU ? 1 : 4))}`;
         schedulerw += parseInt(`${schedulerw}`) << (Math.min(3, Math.abs(1)));
         filedS = hooksu.length == 3;
         hooksu += `${1 / (Math.max(parseInt(`${schedulerw}`), 1))}`;
          let awayiconw = String.fromCharCode(114,101,97,112,95,101,95,56,56,0);
          let placementH = 3.0;
          let libavfilterM = 0.0;
         miniT = new Map([[`${miniT.size}`, 3]]);
         awayiconw += `${1 ^ parseInt(`${placementH}`)}`;
         placementH /= Math.max(parseInt(`${libavfilterM}`) | parseInt(`${placementH}`), 2);
         libavfilterM /= Math.max(2, (parseFloat(`${awayiconw == String.fromCharCode(78,0) ? parseInt(`${placementH}`) : awayiconw.length}`)));
      while (!iconarrowleftU && !popupO) {
          let libflipper2 = String.fromCharCode(97,108,108,111,99,97,116,101,95,113,95,56,49,0);
          let libhermesB: Array<any> = [123, 894, 982];
          let telegram8 = String.fromCharCode(112,95,55,50,0);
          let streamingR = 3.0;
         popupO = !popupO;
         libflipper2 += `${(telegram8 == String.fromCharCode(99,0) ? telegram8.length : libhermesB.length)}`;
         libhermesB = [parseInt(`${streamingR}`)];
         streamingR += libhermesB.length << (Math.min(Math.abs(3), 2));
         break;
      }
      scrollviewT = 65.88 == penaltyshooto || z_lockW == 65.88;
   }
   if ((z_lockW + libreanimateda.length) <= 4.40 && (4 >> (Math.min(4, libreanimateda.length))) <= 5) {
      z_lockW /= Math.max(2, 1 | libreanimateda.length);
   }
        

      quest6 *= (String.fromCharCode(54,0) == libreanimateda ? nalyticsD.length : libreanimateda.length);
   let values8 = quest6 <= 5375887.0;
   do {
      quest6 -= parseInt(`${penaltyshooto}`) - 1;
      if (values8) {
         break;
      }
   } while (values8 && (quest6 >= soundu));
        StatusBar.setHidden(false);

   if (!nalyticsD.startsWith(`${penaltyshooto}`)) {
      penaltyshooto /= Math.max(uploadU.size, 1);
   }
   for (let a = 0; a < 3; a++) {
      uploadU = new Map([[`${scrollviewT}`, ((scrollviewT ? 3 : 1) % (Math.max(parseInt(`${quest6}`), 9)))]]);
   }

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      } else {

   while (z_lockW > 1.3) {
      soundu |= 2;
      break;
   }
   if (!scrollviewT) {
       let defaultfootballbgb = false;
       let liveL = String.fromCharCode(99,104,101,99,107,112,111,105,110,116,115,95,57,95,51,48,0);
         liveL = `${((defaultfootballbgb ? 5 : 2) >> (Math.min(liveL.length, 4)))}`;
      for (let d = 0; d < 1; d++) {
          let trophyb: Map<any, any> = new Map([[String.fromCharCode(99,95,57,55,95,118,97,114,105,97,110,116,0),true ], [String.fromCharCode(118,95,57,95,102,97,100,101,100,0),true ]]);
          let componentM = 0.0;
          let awayteamfieldE: Array<any> = [16, 642];
          let vipsportN: Array<any> = [620, 60, 905];
          let ajaxq = String.fromCharCode(99,111,101,114,99,101,95,57,95,57,0);
         liveL += `${parseInt(`${componentM}`)}`;
         trophyb = new Map([[`${vipsportN.length}`, ajaxq.length ^ 3]]);
         componentM += parseFloat(`${vipsportN.length ^ 2}`);
         awayteamfieldE = [ajaxq.length];
      }
         defaultfootballbgb = !defaultfootballbgb;
      if (liveL.includes(`${defaultfootballbgb}`)) {
         liveL += `${1 ^ liveL.length}`;
      }
          let emptyY: Array<any> = [40, 227];
          let whistleorange8 = 2;
         defaultfootballbgb = String.fromCharCode(53,0) == liveL;
         emptyY = [2];
         whistleorange8 ^= 3;
      while (5 >= liveL.length) {
         liveL = `${(liveL == String.fromCharCode(71,0) ? liveL.length : (defaultfootballbgb ? 4 : 3))}`;
         break;
      }
      scrollviewT = !scrollviewT;
   }
        lockOrientation("LANDSCAPE");

      nalyticsD += `${uploadU.size}`;
   while (5 <= (uploadU.size ^ smallC.length)) {
      uploadU = new Map([[nalyticsD, (nalyticsD == String.fromCharCode(67,0) ? soundu : nalyticsD.length)]]);
      break;
   }
        setIsFullScreen(true);

      nalyticsD += `${parseInt(`${penaltyshooto}`) % 3}`;
      z_lockW -= 1;
        

   while (z_lockW == 1.92) {
      quest6 -= 1 - parseInt(`${penaltyshooto}`);
      break;
   }
      smallC += `${soundu}`;
        StatusBar.setHidden(true);

   if (nalyticsD.endsWith(`${quest6}`)) {
       let iconcalendarA: Map<any, any> = new Map([[String.fromCharCode(118,95,57,51,95,99,111,109,112,114,101,115,115,0),492], [String.fromCharCode(122,95,55,48,95,115,117,103,103,101,115,116,105,111,110,115,0),663], [String.fromCharCode(109,95,55,52,95,108,104,115,0),901]]);
       let manifest3 = 0.0;
       let gifgoall = String.fromCharCode(112,95,53,50,95,114,101,99,111,103,110,105,116,105,111,110,115,0);
          let disconnectedv = 2;
          let homeiconj = String.fromCharCode(114,95,54,56,95,100,101,102,101,114,114,105,110,103,0);
         gifgoall += `${parseInt(`${manifest3}`) % 1}`;
         disconnectedv %= Math.max(5, 3);
         homeiconj += `${homeiconj.length}`;
         iconcalendarA.set(`${gifgoall}`, 2 - gifgoall.length);
          let main_ag = String.fromCharCode(118,95,52,55,95,103,101,111,99,111,100,101,115,0);
         manifest3 += parseFloat(`${1 * iconcalendarA.size}`);
         main_ag += `${main_ag.length >> (Math.min(Math.abs(2), 2))}`;
         gifgoall = `${gifgoall.length - parseInt(`${manifest3}`)}`;
         gifgoall = `${(gifgoall == String.fromCharCode(104,0) ? parseInt(`${manifest3}`) : gifgoall.length)}`;
      if (1 <= (parseInt(`${manifest3}`) - 5) && 1 <= (gifgoall.length / 5)) {
          let kickE = 1.0;
          let injuryK = String.fromCharCode(105,110,110,101,114,95,110,95,56,51,0);
          let formN = String.fromCharCode(101,95,55,56,95,108,111,103,103,101,100,0);
          let sella = 3;
         manifest3 *= parseFloat(`${iconcalendarA.size + formN.length}`);
         kickE /= Math.max(parseFloat(`${injuryK.length >> (Math.min(2, Math.abs(sella)))}`), 4);
         injuryK = `${parseInt(`${kickE}`)}`;
         formN = `${parseInt(`${kickE}`)}`;
         sella /= Math.max(1, injuryK.length);
      }
         manifest3 *= parseFloat(`${3}`);
      for (let b = 0; b < 3; b++) {
         manifest3 += parseFloat(`${parseInt(`${manifest3}`)}`);
      }
          let iconsettingA = String.fromCharCode(112,95,53,51,95,97,115,99,101,110,100,101,114,0);
         manifest3 /= Math.max(parseFloat(`${iconcalendarA.size}`), 2);
         iconsettingA = `${(iconsettingA == String.fromCharCode(55,0) ? iconsettingA.length : iconsettingA.length)}`;
      quest6 -= 2 & parseInt(`${manifest3}`);
   }
      libreanimateda += `${nalyticsD.length}`;

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
       let reactnativeratings5 = true;
    let libreanimatedE = false;
    let cornerkick2 = 0.0;
    let toponn = String.fromCharCode(109,95,51,49,95,102,111,114,109,97,116,0);
    let bootsplash6 = String.fromCharCode(105,95,57,95,117,110,107,101,121,101,100,0);
    let bufferk = String.fromCharCode(111,99,116,101,116,115,95,105,95,50,48,0);
    let gifgoal3 = String.fromCharCode(115,105,109,105,108,97,114,95,118,95,54,50,0);
    let manifesti: Map<any, any> = new Map([[String.fromCharCode(114,95,57,52,95,122,97,108,108,111,99,0),266], [String.fromCharCode(112,101,110,100,105,110,103,95,100,95,54,54,0),694], [String.fromCharCode(114,95,49,49,95,109,105,100,108,0),938]]);
    let footballfiledlayoutJ = 5.0;
    let telemetryF = String.fromCharCode(116,104,114,111,116,116,108,105,110,103,95,109,95,50,49,0);
    let defaultplayerimg1 = 2;
    let entryg: Array<any> = [112, 853, 680];
    let analyticO = true;
    let predictionbuttonY: Array<any> = [998, 628, 148];
    let gemfileS = 5.0;
   while ((footballfiledlayoutJ / 1.93) <= 2.43 && 1.93 <= (footballfiledlayoutJ / (Math.max(10, defaultplayerimg1)))) {
       let libfabricjniG = 5.0;
       let penaltyI = 2.0;
       let alertF = 4.0;
          let frame_sew: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,114,97,99,116,105,111,110,95,106,95,56,52,0),String.fromCharCode(108,111,110,95,118,95,49,48,48,0)], [String.fromCharCode(117,110,105,113,117,101,100,95,119,95,53,53,0),String.fromCharCode(100,111,119,110,114,105,103,104,116,95,54,95,51,54,0)]]);
          let gifgoalbga = String.fromCharCode(109,95,56,49,95,97,100,100,107,101,121,0);
          let aboutF = 2.0;
         alertF *= parseFloat(`${parseInt(`${libfabricjniG}`) | parseInt(`${penaltyI}`)}`);
         frame_sew.set(gifgoalbga, frame_sew.size / 1);
         gifgoalbga = `${frame_sew.size}`;
         aboutF /= Math.max(4, parseFloat(`${gifgoalbga.length}`));
      if (4.83 < penaltyI) {
         penaltyI /= Math.max(2, parseFloat(`${parseInt(`${alertF}`)}`));
      }
         libfabricjniG *= parseInt(`${penaltyI}`) << (Math.min(4, Math.abs(1)));
       let bang7 = 3.0;
         bang7 *= parseInt(`${penaltyI}`);
       let nativeexz: Map<any, any> = new Map([[String.fromCharCode(121,95,54,95,99,111,110,102,105,114,109,101,100,0),821], [String.fromCharCode(102,95,51,54,95,103,114,97,110,117,108,97,114,105,116,121,0),539]]);
          let exampleimage2: Map<any, any> = new Map([[String.fromCharCode(120,95,53,56,95,101,111,109,101,116,114,121,0),401], [String.fromCharCode(114,95,51,55,95,100,101,116,101,99,116,101,100,0),476]]);
          let morem = false;
          let libjsijniprofilern = 1.0;
         penaltyI += parseFloat(`${2 % (Math.max(9, parseInt(`${bang7}`)))}`);
         exampleimage2 = new Map([[`${exampleimage2.size}`, 1]]);
         morem = libjsijniprofilern == 94.41;
         libjsijniprofilern -= 1;
         bang7 += nativeexz.size % 2;
      while (3.58 == (bang7 * 5.23) && (bang7 * penaltyI) == 5.23) {
          let modulesd: Map<any, any> = new Map([[String.fromCharCode(105,95,57,55,95,108,115,112,115,0),true ], [String.fromCharCode(101,120,101,99,117,116,105,110,103,95,106,95,57,50,0),true ]]);
          let chatroombackgroundm = 4.0;
         penaltyI /= Math.max(parseFloat(`${parseInt(`${bang7}`) >> (Math.min(Math.abs(parseInt(`${alertF}`)), 4))}`), 3);
         modulesd = new Map([[`${modulesd.size}`, parseInt(`${chatroombackgroundm}`) >> (Math.min(Math.abs(modulesd.size), 5))]]);
         chatroombackgroundm -= 1 ^ parseInt(`${chatroombackgroundm}`);
         break;
      }
      footballfiledlayoutJ *= ((libreanimatedE ? 3 : 4) + parseInt(`${alertF}`));
      break;
   }
   for (let p = 0; p < 1; p++) {
      bufferk += `${(gifgoal3 == String.fromCharCode(69,0) ? parseInt(`${footballfiledlayoutJ}`) : gifgoal3.length)}`;
   }
   let league5 = manifesti.size <= 5297155;
   do {
       let mbnativeadvanced6: Array<any> = [856, 876, 528];
       let chatroombackgroundw = 4.0;
       let interstitial9 = 2.0;
      let patha = mbnativeadvanced6.length >= 7803556;
      do {
         mbnativeadvanced6.push(mbnativeadvanced6.length - 1);
         if (patha) {
            break;
         }
      } while (patha && (3.88 == (parseFloat(`${mbnativeadvanced6.length}`) + chatroombackgroundw) || (chatroombackgroundw + parseFloat(`${mbnativeadvanced6.length}`)) == 3.88));
          let applicationb = String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,115,95,100,95,51,49,0);
         chatroombackgroundw -= (parseFloat(`${applicationb == String.fromCharCode(82,0) ? parseInt(`${interstitial9}`) : applicationb.length}`));
      manifesti = new Map([[`${manifesti.size}`, 1]]);
      if (league5) {
         break;
      }
   } while ((bootsplash6.includes(`${manifesti.size}`)) && league5);
   for (let u = 0; u < 1; u++) {
      cornerkick2 -= parseFloat(`${manifesti.size}`);
   }
       let iconbackwhitei: Map<any, any> = new Map([[String.fromCharCode(105,95,55,55,95,114,101,115,112,111,110,115,101,115,0),false ], [String.fromCharCode(114,101,115,111,108,118,95,101,95,49,48,48,0),true ]]);
       let stringW = String.fromCharCode(105,95,57,50,95,115,101,116,108,105,115,116,0);
       let selected_ = 4.0;
      for (let f = 0; f < 1; f++) {
         selected_ /= Math.max(5, parseFloat(`${3 | parseInt(`${selected_}`)}`));
      }
      for (let c = 0; c < 1; c++) {
          let baidub = String.fromCharCode(99,111,112,121,95,102,95,55,56,0);
          let orangeR = 2.0;
          let imagenomoredata_ = String.fromCharCode(100,95,51,95,115,117,98,116,121,112,101,115,0);
          let math4 = 2.0;
          let networkE = false;
         iconbackwhitei.set(`${networkE}`, ((networkE ? 2 : 5)));
         baidub = `${parseInt(`${orangeR}`)}`;
         imagenomoredata_ += `${baidub.length}`;
         math4 /= Math.max(parseFloat(`${3}`), 1);
      }
         selected_ += parseFloat(`${parseInt(`${selected_}`) | 3}`);
          let selectionM = false;
         selected_ -= (parseFloat(`${(selectionM ? 1 : 5) % (Math.max(parseInt(`${selected_}`), 2))}`));
      let predictionarrowa = String.fromCharCode(99,120,108,56,109,56,52,111,120,0) == stringW;
      do {
         stringW += `${parseInt(`${selected_}`)}`;
         if (predictionarrowa) {
            break;
         }
      } while (predictionarrowa && (selected_ == parseFloat(`${stringW.length}`)));
         iconbackwhitei.set(`${selected_}`, parseInt(`${selected_}`));
         selected_ += parseFloat(`${3}`);
      let rankq = 8858933 <= stringW.length;
      do {
          let predictionbutton9 = String.fromCharCode(108,105,98,115,95,56,95,56,49,0);
          let lesse = String.fromCharCode(97,112,112,115,95,55,95,48,0);
          let popup7 = 1.0;
          let iconeditc = 3;
         stringW = "3";
         predictionbutton9 += "2";
         lesse += `${predictionbutton9.length}`;
         popup7 += parseFloat(`${lesse.length}`);
         iconeditc /= Math.max(2 - parseInt(`${popup7}`), 3);
         if (rankq) {
            break;
         }
      } while (rankq && (selected_ < 4.34));
         iconbackwhitei = new Map([[stringW, 2]]);
      footballfiledlayoutJ -= gifgoal3.length & bufferk.length;
   let roomT = telemetryF.length >= 6247607;
   do {
       let starj = String.fromCharCode(106,95,55,50,95,100,101,101,112,0);
       let subinP = 2.0;
       let crownj = String.fromCharCode(109,101,109,99,112,121,95,106,95,56,52,0);
      if (2 < (crownj.length * parseInt(`${subinP}`))) {
         subinP -= 1;
      }
      let anewinterstitialz = subinP <= 5779952.0;
      do {
         subinP *= starj.length / 1;
         if (anewinterstitialz) {
            break;
         }
      } while (anewinterstitialz && ((subinP + 4.80) == 5.96));
       let inactive2: Map<any, any> = new Map([[String.fromCharCode(100,101,105,110,116,95,49,95,54,51,0),630], [String.fromCharCode(97,95,55,49,95,100,101,115,116,114,117,99,116,111,114,0),61]]);
       let eventy: Map<any, any> = new Map([[String.fromCharCode(99,95,54,48,95,109,105,114,114,111,114,101,100,0),667], [String.fromCharCode(102,95,51,53,95,100,97,109,112,0),896]]);
      if (crownj.length == parseInt(`${subinP}`)) {
         subinP /= Math.max(4, eventy.size & 2);
      }
         inactive2 = new Map([[`${eventy.size}`, (String.fromCharCode(95,0) == starj ? eventy.size : starj.length)]]);
          let greyt = String.fromCharCode(110,116,115,99,95,109,95,53,50,0);
          let libfbjnic = String.fromCharCode(113,95,55,95,105,110,115,116,97,110,116,105,97,116,105,111,110,0);
          let libavfilterY = String.fromCharCode(113,95,57,50,95,114,97,100,105,97,110,115,0);
         inactive2.set(crownj, 1 - eventy.size);
         greyt += `${(greyt == String.fromCharCode(85,0) ? libfbjnic.length : greyt.length)}`;
         libfbjnic = `${libfbjnic.length - libavfilterY.length}`;
         libavfilterY += `${libfbjnic.length * 2}`;
         starj += `${starj.length}`;
         subinP /= Math.max(5, inactive2.size);
         subinP *= 2 << (Math.min(5, Math.abs(parseInt(`${subinP}`))));
      telemetryF = `${entryg.length | 1}`;
      if (roomT) {
         break;
      }
   } while ((analyticO) && roomT);
      manifesti.set(bufferk, ((reactnativeratings5 ? 4 : 5)));
   let libyogaW = String.fromCharCode(100,114,101,97,106,116,116,0) == bootsplash6;
   do {
      bootsplash6 = `${bufferk.length}`;
      if (libyogaW) {
         break;
      }
   } while (libyogaW && (1 == (bootsplash6.length - parseInt(`${footballfiledlayoutJ}`))));
      gifgoal3 = `${(3 - (libreanimatedE ? 2 : 5))}`;
      telemetryF += `${(bootsplash6 == String.fromCharCode(102,0) ? bootsplash6.length : manifesti.size)}`;
   for (let n = 0; n < 3; n++) {
       let libmapbufferjnih: Array<any> = [425, 984];
       let fileV = String.fromCharCode(116,101,115,116,98,105,116,95,98,95,57,50,0);
       let componentregistry1 = String.fromCharCode(116,116,97,100,97,116,97,95,100,95,55,57,0);
       let predictionwin8 = String.fromCharCode(117,95,57,49,95,100,105,97,108,111,103,115,0);
       let libcrashsdkx = String.fromCharCode(110,105,98,95,57,95,54,49,0);
      let profileactives = libmapbufferjnih.length >= 6441330;
      do {
         libmapbufferjnih.push(3);
         if (profileactives) {
            break;
         }
      } while ((3 < (libmapbufferjnih.length | fileV.length)) && profileactives);
      if (!fileV.startsWith(libcrashsdkx)) {
         libcrashsdkx = "3";
      }
      while (3 > (5 << (Math.min(1, libcrashsdkx.length))) && 4 > (5 << (Math.min(3, libmapbufferjnih.length)))) {
          let predictionbutton3 = 3.0;
          let short_mu = String.fromCharCode(100,95,54,49,95,99,111,111,114,100,115,0);
          let styleso = 4.0;
          let middlewareZ = String.fromCharCode(107,95,49,95,115,104,101,101,114,118,105,100,101,111,100,97,116,97,0);
         libmapbufferjnih.push(3 % (Math.max(5, parseInt(`${styleso}`))));
         predictionbutton3 /= Math.max((parseFloat(`${String.fromCharCode(102,0) == short_mu ? parseInt(`${predictionbutton3}`) : short_mu.length}`)), 4);
         styleso /= Math.max(3, middlewareZ.length);
         middlewareZ += "3";
         break;
      }
       let gesturesG: Map<any, any> = new Map([[String.fromCharCode(108,95,51,49,95,100,105,97,108,105,110,103,0),false ], [String.fromCharCode(99,111,110,118,101,114,115,105,111,110,95,106,95,50,50,0),false ], [String.fromCharCode(115,95,54,48,95,115,117,98,105,116,101,109,115,0),true ]]);
       let benefit6 = 5.0;
       let valuesz = 2.0;
      let libloggerU = benefit6 <= 5584418.0;
      do {
         benefit6 *= parseFloat(`${parseInt(`${benefit6}`)}`);
         if (libloggerU) {
            break;
         }
      } while ((componentregistry1.length > 3) && libloggerU);
         libmapbufferjnih = [3 | gesturesG.size];
      for (let y = 0; y < 2; y++) {
         componentregistry1 = `${fileV.length}`;
      }
      let a_player8 = String.fromCharCode(97,48,116,56,100,105,97,105,0) == predictionwin8;
      do {
         predictionwin8 += `${(String.fromCharCode(84,0) == predictionwin8 ? libmapbufferjnih.length : predictionwin8.length)}`;
         if (a_player8) {
            break;
         }
      } while ((predictionwin8.length >= 5 || componentregistry1 != String.fromCharCode(117,0)) && a_player8);
         valuesz += (parseFloat(`${String.fromCharCode(57,0) == libcrashsdkx ? libcrashsdkx.length : parseInt(`${benefit6}`)}`));
         predictionwin8 = `${parseInt(`${valuesz}`)}`;
       let iconarrowrightorangeb = 5.0;
       let videobufferloading9 = 3.0;
      for (let w = 0; w < 1; w++) {
          let rankB: Map<any, any> = new Map([[String.fromCharCode(109,95,53,57,95,115,111,108,118,101,100,0),158], [String.fromCharCode(115,121,115,114,97,110,100,95,57,95,54,48,0),514]]);
          let carousela: Array<any> = [212, 300, 817];
          let statss = String.fromCharCode(104,95,49,49,95,115,116,111,114,109,98,105,114,100,0);
          let scoren = 0;
          let greyX = 3.0;
         fileV += `${2 - parseInt(`${benefit6}`)}`;
         rankB = new Map([[`${carousela.length}`, statss.length]]);
         carousela.push(scoren);
         statss += "2";
         scoren *= rankB.size;
         greyX /= Math.max(4, parseInt(`${greyX}`));
      }
      while (3 < componentregistry1.length) {
         componentregistry1 += `${(String.fromCharCode(111,0) == predictionwin8 ? predictionwin8.length : gesturesG.size)}`;
         break;
      }
         valuesz += parseFloat(`${parseInt(`${videobufferloading9}`) / 1}`);
      bufferk += `${libcrashsdkx.length}`;
   }
       let libapminsightaU = false;
       let iconlogoutA = 1.0;
       let albumg = false;
         albumg = !libapminsightaU;
         albumg = 99.75 < iconlogoutA && libapminsightaU;
         iconlogoutA /= Math.max((parseFloat(`${parseInt(`${iconlogoutA}`) - (libapminsightaU ? 5 : 3)}`)), 1);
      let k_positionk = 7277629.0 >= iconlogoutA;
      do {
          let smallorangemanU = String.fromCharCode(110,111,116,104,105,110,103,95,122,95,49,55,0);
          let mbbidH = 3;
         iconlogoutA /= Math.max(parseFloat(`${parseInt(`${iconlogoutA}`) & 2}`), 1);
         smallorangemanU += `${smallorangemanU.length}`;
         mbbidH &= 1;
         if (k_positionk) {
            break;
         }
      } while (k_positionk && ((iconlogoutA - 3.81) >= 5.89));
      for (let z = 0; z < 3; z++) {
         iconlogoutA *= parseFloat(`${parseInt(`${iconlogoutA}`) & 3}`);
      }
          let backwardc: Map<any, any> = new Map([[String.fromCharCode(109,95,54,50,95,115,116,114,105,110,103,0),String.fromCharCode(105,110,104,101,114,105,116,95,97,95,51,54,0)], [String.fromCharCode(108,97,103,97,114,105,116,104,114,97,99,95,53,95,50,55,0),String.fromCharCode(117,95,55,54,95,98,117,116,116,101,114,102,108,105,101,115,0)], [String.fromCharCode(118,98,114,117,115,104,95,98,95,53,53,0),String.fromCharCode(97,99,99,117,109,117,108,97,116,101,95,107,95,52,51,0)]]);
          let yellowcirclebgm = false;
          let baselineo: Array<any> = [92, 715, 54];
         iconlogoutA -= parseFloat(`${parseInt(`${iconlogoutA}`) * 3}`);
         backwardc = new Map([[`${backwardc.size}`, 3]]);
         yellowcirclebgm = yellowcirclebgm && baselineo.length >= 26;
         baselineo.push(3 >> (Math.min(5, Math.abs(backwardc.size))));
         iconlogoutA += (parseFloat(`${1 << (Math.min(Math.abs((albumg ? 4 : 3)), 1))}`));
      if (!libapminsightaU) {
         libapminsightaU = iconlogoutA <= 56.90;
      }
         albumg = !libapminsightaU;
      libreanimatedE = !analyticO;
   for (let l = 0; l < 2; l++) {
      defaultplayerimg1 >>= Math.min(4, Math.abs(1 - telemetryF.length));
   }
      defaultplayerimg1 -= 1 * bufferk.length;
      gifgoal3 = "3";
   for (let l = 0; l < 3; l++) {
      analyticO = 51.44 < cornerkick2;
   }
   for (let p = 0; p < 2; p++) {
       let whistley = 5.0;
      while (1.88 <= (whistley - whistley)) {
         whistley -= parseFloat(`${parseInt(`${whistley}`) | 3}`);
         break;
      }
         whistley *= parseFloat(`${parseInt(`${whistley}`) % (Math.max(9, parseInt(`${whistley}`)))}`);
         whistley -= parseFloat(`${parseInt(`${whistley}`) % 1}`);
      defaultplayerimg1 |= bootsplash6.length ^ 2;
   }
   for (let w = 0; w < 2; w++) {
      toponn += `${parseInt(`${footballfiledlayoutJ}`) + 1}`;
   }
      reactnativeratings5 = bufferk.includes(`${analyticO}`);
       let gradlewx = 4.0;
       let optionse = String.fromCharCode(121,95,57,48,95,108,105,98,0);
      while ((3.13 * gradlewx) >= 2.91 && (optionse.length * parseInt(`${gradlewx}`)) >= 4) {
          let routerg = String.fromCharCode(102,111,114,119,97,114,100,115,95,110,95,53,56,0);
         optionse += `${optionse.length}`;
         routerg = `${routerg.length / (Math.max(2, 2))}`;
         break;
      }
      let vietnaml = 7040261 >= optionse.length;
      do {
         optionse = `${parseInt(`${gradlewx}`)}`;
         if (vietnaml) {
            break;
         }
      } while (vietnaml && ((3 - optionse.length) >= 1));
      while (3.66 >= (gradlewx - parseFloat(`${optionse.length}`)) && (parseInt(`${gradlewx}`) - optionse.length) >= 1) {
         optionse += "3";
         break;
      }
      for (let z = 0; z < 1; z++) {
          let questD: Map<any, any> = new Map([[String.fromCharCode(99,111,111,107,95,53,95,49,49,0),String.fromCharCode(105,102,97,99,101,95,108,95,49,50,0)], [String.fromCharCode(99,95,56,95,115,99,111,114,101,115,0),String.fromCharCode(112,114,101,99,105,115,105,111,110,95,116,95,56,49,0)], [String.fromCharCode(120,95,49,49,95,109,107,118,109,117,120,101,114,116,121,112,101,115,0),String.fromCharCode(112,95,52,52,0)]]);
          let tail2 = true;
         optionse = `${1 - parseInt(`${gradlewx}`)}`;
         questD.set(`${tail2}`, (1 ^ (tail2 ? 5 : 3)));
      }
      let overlayy = optionse.length <= 8370400;
      do {
         optionse += `${parseInt(`${gradlewx}`) - 3}`;
         if (overlayy) {
            break;
         }
      } while (overlayy && (gradlewx <= parseFloat(`${optionse.length}`)));
         optionse += "2";
      telemetryF += `${manifesti.size}`;
      analyticO = (cornerkick2 / (Math.max(footballfiledlayoutJ, 2))) <= 78.57;
   let zoomH = 7185968 <= entryg.length;
   do {
       let homeplayerB = String.fromCharCode(105,95,51,54,95,116,114,97,99,107,0);
       let iconfeedbackN: Array<any> = [665, 344];
       let n_unlocks = String.fromCharCode(101,120,116,101,114,110,95,106,95,54,56,0);
       let huaweiW = String.fromCharCode(104,95,52,53,95,99,111,110,110,101,99,116,105,111,110,99,98,0);
       let phoneshareg: Map<any, any> = new Map([[String.fromCharCode(116,111,111,116,105,112,95,122,95,49,50,0),false ], [String.fromCharCode(101,95,52,57,95,118,105,98,114,97,116,101,0),true ]]);
       let mathS = String.fromCharCode(97,108,105,103,110,109,101,110,116,95,57,95,50,51,0);
      if (iconfeedbackN.length > 1) {
         homeplayerB = "2";
      }
      let defaultteamC = huaweiW.length >= 7750638;
      do {
          let manifest5 = 1;
          let policyQ = false;
          let tcopy_s2p = String.fromCharCode(97,98,108,95,97,95,53,0);
          let iconshareQ = 1.0;
          let with_3E = 1.0;
         huaweiW = `${(mathS == String.fromCharCode(75,0) ? manifest5 : mathS.length)}`;
         manifest5 |= parseInt(`${iconshareQ}`);
         policyQ = !tcopy_s2p.includes(`${with_3E}`);
         tcopy_s2p = `${(parseInt(`${iconshareQ}`) * (policyQ ? 5 : 3))}`;
         with_3E += (tcopy_s2p == String.fromCharCode(110,0) ? tcopy_s2p.length : (policyQ ? 2 : 2));
         if (defaultteamC) {
            break;
         }
      } while (defaultteamC && (3 <= (huaweiW.length << (Math.min(Math.abs(2), 1)))));
      while ((iconfeedbackN.length ^ mathS.length) <= 5) {
         mathS += `${iconfeedbackN.length >> (Math.min(Math.abs(2), 4))}`;
         break;
      }
         huaweiW = `${3 + n_unlocks.length}`;
         mathS += `${1 & iconfeedbackN.length}`;
         n_unlocks = "2";
      for (let y = 0; y < 1; y++) {
          let darkj = 1.0;
          let iconsubssuccess2 = 5.0;
         huaweiW += `${homeplayerB.length & 1}`;
         darkj /= Math.max(3, parseFloat(`${1 * parseInt(`${darkj}`)}`));
         iconsubssuccess2 *= parseInt(`${darkj}`);
      }
          let teamdetailsbgC = 4.0;
         n_unlocks = `${huaweiW.length}`;
         teamdetailsbgC *= parseInt(`${teamdetailsbgC}`) | parseInt(`${teamdetailsbgC}`);
      for (let x = 0; x < 1; x++) {
          let foregroundB: Map<any, any> = new Map([[String.fromCharCode(112,111,108,105,99,105,101,115,95,112,95,55,56,0),452], [String.fromCharCode(114,101,97,100,101,114,95,49,95,50,0),287]]);
          let sentrya = false;
          let audiencec = 0;
          let clockt = 3.0;
          let baseb = String.fromCharCode(119,114,105,116,105,110,103,95,109,95,50,48,0);
         n_unlocks = `${baseb.length}`;
         foregroundB = new Map([[`${foregroundB.size}`, foregroundB.size % (Math.max(1, 9))]]);
         sentrya = !sentrya || 13 == audiencec;
         audiencec &= parseInt(`${clockt}`);
         clockt -= 2 - foregroundB.size;
         baseb = `${parseInt(`${clockt}`) & 3}`;
      }
         mathS = `${iconfeedbackN.length}`;
      for (let r = 0; r < 3; r++) {
         iconfeedbackN.push(n_unlocks.length);
      }
      for (let r = 0; r < 1; r++) {
         huaweiW = `${homeplayerB.length << (Math.min(n_unlocks.length, 1))}`;
      }
      while (homeplayerB != n_unlocks) {
         n_unlocks += `${homeplayerB.length | 2}`;
         break;
      }
         huaweiW += "1";
      entryg = [1 | gifgoal3.length];
      if (zoomH) {
         break;
      }
   } while ((!analyticO) && zoomH);
   while (!libreanimatedE || 1.0 >= (1.63 * cornerkick2)) {
      libreanimatedE = toponn.length > manifesti.size;
      break;
   }
       let greyh = String.fromCharCode(108,95,54,49,95,105,115,97,99,102,105,120,0);
       let sliderb = 2;
       let vipsportM: Map<any, any> = new Map([[String.fromCharCode(117,95,56,53,95,104,97,115,120,0),true ], [String.fromCharCode(116,95,51,57,95,115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,0),true ]]);
      while (greyh.length == sliderb) {
         greyh = `${(greyh == String.fromCharCode(48,0) ? greyh.length : sliderb)}`;
         break;
      }
      let championb = 7266943 <= sliderb;
      do {
          let homeactiveQ: Map<any, any> = new Map([[String.fromCharCode(119,95,54,54,95,98,121,116,101,115,0),String.fromCharCode(105,95,52,49,95,110,111,99,111,108,115,101,116,0)], [String.fromCharCode(101,114,105,97,108,105,122,97,116,105,111,110,95,111,95,57,54,0),String.fromCharCode(98,95,50,48,95,97,115,115,101,116,115,0)], [String.fromCharCode(117,114,118,101,95,119,95,54,55,0),String.fromCharCode(101,120,101,99,117,116,101,100,95,119,95,54,52,0)]]);
         sliderb -= sliderb - 2;
         homeactiveQ.set(`${homeactiveQ.size}`, 2);
         if (championb) {
            break;
         }
      } while (championb && (!Array.from(vipsportM.keys()).includes(`${sliderb}`)));
      let mbbidz = greyh == String.fromCharCode(57,102,112,115,111,116,103,0);
      do {
         greyh += `${2 * greyh.length}`;
         if (mbbidz) {
            break;
         }
      } while (mbbidz && (4 <= (sliderb + greyh.length)));
          let code2 = 4.0;
          let orangeuparrowr = String.fromCharCode(120,95,53,54,95,99,111,110,102,105,110,101,100,0);
         greyh += `${sliderb % (Math.max(greyh.length, 4))}`;
         code2 /= Math.max(1, parseFloat(`${1}`));
         orangeuparrowr = `${2 + orangeuparrowr.length}`;
       let interstitialQ = String.fromCharCode(108,111,115,115,121,95,48,95,53,52,0);
       let stringW7 = String.fromCharCode(106,95,50,51,95,111,116,104,101,114,110,97,109,101,0);
      for (let j = 0; j < 2; j++) {
          let binddatasB = false;
          let backwhitec: Array<any> = [609, 401];
          let roundP = 1.0;
          let libturbomodulejsijnix: Array<any> = [869, 730, 960];
          let sigmobT = 5.0;
         stringW7 = `${sliderb % (Math.max(stringW7.length, 1))}`;
         binddatasB = sigmobT >= 100.98;
         backwhitec = [((binddatasB ? 5 : 4) << (Math.min(Math.abs(1), 2)))];
         roundP /= Math.max(1, parseFloat(`${3 | parseInt(`${roundP}`)}`));
         libturbomodulejsijnix.push(((binddatasB ? 3 : 2) % (Math.max(backwhitec.length, 7))));
         sigmobT -= (parseInt(`${sigmobT}`) * (binddatasB ? 4 : 1));
      }
      for (let z = 0; z < 3; z++) {
          let cricketg = String.fromCharCode(112,114,111,103,114,101,115,115,105,118,101,95,115,95,54,52,0);
          let phonesharef = 0;
          let resendo = String.fromCharCode(111,95,52,48,95,116,101,120,116,98,101,0);
         interstitialQ += "1";
         cricketg += `${resendo.length | 2}`;
         phonesharef >>= Math.min(Math.abs((resendo == String.fromCharCode(86,0) ? phonesharef : resendo.length)), 5);
      }
         stringW7 = `${interstitialQ.length}`;
         greyh += `${vipsportM.size - 2}`;
      analyticO = 31.11 == footballfiledlayoutJ || reactnativeratings5;
      cornerkick2 += parseFloat(`${manifesti.size}`);
      telemetryF = `${defaultplayerimg1 / (Math.max(3, 3))}`;
   while (!reactnativeratings5) {
      reactnativeratings5 = gifgoal3.length >= 32;
      break;
   }
      reactnativeratings5 = bootsplash6 == telemetryF;

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
        setSeekDirection("frame_tTick");
      } else {
        setSeekDirection("scorepopsoundReport");
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
       let options6 = String.fromCharCode(116,121,112,101,99,111,100,101,95,56,95,52,0);
    let manifestf = String.fromCharCode(115,112,114,111,112,95,104,95,49,48,0);
    let issub8: Array<any> = [342, 735, 933];
    let iconsharefriends3 = 0;
    let smallorangemanf = false;
    let predictionbannerH = 4.0;
    let description_91W = String.fromCharCode(108,111,103,116,97,110,95,117,95,56,0);
    let defaultprofilepico = String.fromCharCode(122,95,55,55,95,100,108,105,100,120,0);
    let styleI: Map<any, any> = new Map([[String.fromCharCode(105,95,55,54,95,101,110,118,101,108,111,112,101,0),804], [String.fromCharCode(99,108,117,115,116,101,114,95,121,95,51,54,0),605], [String.fromCharCode(117,110,105,110,116,101,114,112,114,101,116,101,100,95,52,95,57,57,0),244]]);
       let iconschedulex = 3.0;
       let libapminsighta3: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,103,114,97,108,95,56,95,56,52,0),485], [String.fromCharCode(105,95,49,56,95,99,111,111,114,100,105,110,97,116,111,114,0),770]]);
       let private_ayX = false;
      while ((libapminsighta3.size - parseInt(`${iconschedulex}`)) >= 1 || (parseInt(`${iconschedulex}`) - libapminsighta3.size) >= 1) {
         iconschedulex += parseFloat(`${1 | libapminsighta3.size}`);
         break;
      }
         libapminsighta3 = new Map([[`${libapminsighta3.size}`, ((private_ayX ? 1 : 2) & libapminsighta3.size)]]);
      let liveO = iconschedulex >= 7801867.0;
      do {
          let qaag8 = 4;
          let greenL = true;
          let policye = String.fromCharCode(103,95,55,57,95,97,118,115,115,0);
         iconschedulex /= Math.max(parseFloat(`${1}`), 2);
         qaag8 /= Math.max(3, ((greenL ? 4 : 5) + qaag8));
         greenL = (34 <= (policye.length ^ (!greenL ? policye.length : 34)));
         if (liveO) {
            break;
         }
      } while ((5.65 < (iconschedulex * 2.45)) && liveO);
      while (1 > (libapminsighta3.size % 5) || 4 > (libapminsighta3.size << (Math.min(Math.abs(5), 1)))) {
          let libcrashsdkq = String.fromCharCode(108,111,110,103,95,48,95,55,57,0);
          let listI: Array<any> = [417, 216, 581];
          let mergerF = 3;
         iconschedulex += parseFloat(`${listI.length / (Math.max(2, parseInt(`${iconschedulex}`)))}`);
         libcrashsdkq = `${libcrashsdkq.length >> (Math.min(3, Math.abs(mergerF)))}`;
         listI = [libcrashsdkq.length % (Math.max(2, 3))];
         mergerF &= 2;
         break;
      }
         libapminsighta3 = new Map([[`${libapminsighta3.size}`, 2]]);
      if (4 <= (5 * libapminsighta3.size)) {
         iconschedulex += parseFloat(`${2 | parseInt(`${iconschedulex}`)}`);
      }
          let defaultroombg4 = 5.0;
          let stark = true;
         libapminsighta3 = new Map([[`${defaultroombg4}`, parseInt(`${iconschedulex}`) | 2]]);
         defaultroombg4 *= (parseFloat(`${(stark ? 3 : 4) * (stark ? 2 : 1)}`));
         iconschedulex -= parseFloat(`${libapminsighta3.size >> (Math.min(Math.abs(2), 5))}`);
         libapminsighta3 = new Map([[`${libapminsighta3.size}`, libapminsighta3.size - 3]]);
      defaultprofilepico = `${parseInt(`${predictionbannerH}`)}`;
   for (let f = 0; f < 1; f++) {
      description_91W += `${issub8.length ^ parseInt(`${predictionbannerH}`)}`;
   }
      description_91W += `${iconsharefriends3}`;
      description_91W += `${3 << (Math.min(5, issub8.length))}`;
   let fillQ = smallorangemanf ? !smallorangemanf : smallorangemanf;
   do {
       let xvodI = 3;
       let defaultroombg1: Map<any, any> = new Map([[String.fromCharCode(108,95,51,57,95,99,97,110,99,101,108,0),155], [String.fromCharCode(100,101,99,108,116,121,112,101,95,51,95,53,54,0),535]]);
       let orangeu: Map<any, any> = new Map([[String.fromCharCode(101,95,50,48,95,116,114,97,110,115,112,111,110,101,100,0),String.fromCharCode(110,95,55,50,95,118,101,114,105,102,105,97,116,105,111,110,0)], [String.fromCharCode(109,95,57,51,95,122,111,111,109,101,100,0),String.fromCharCode(115,95,55,55,95,115,104,105,102,116,101,100,0)]]);
       let vnewsw: Map<any, any> = new Map([[String.fromCharCode(107,95,53,49,95,115,109,112,116,101,98,97,114,115,0),801], [String.fromCharCode(110,95,53,50,95,99,111,110,116,97,105,110,115,0),120], [String.fromCharCode(113,95,56,50,95,109,105,110,105,109,105,122,101,0),865]]);
      let reactnavigationS = vnewsw.size >= 7965872;
      do {
         vnewsw = new Map([[`${vnewsw.size}`, 1 % (Math.max(6, orangeu.size))]]);
         if (reactnavigationS) {
            break;
         }
      } while (reactnavigationS && (!Array.from(vnewsw.values()).includes(xvodI)));
         vnewsw = new Map([[`${orangeu.size}`, defaultroombg1.size]]);
         xvodI &= xvodI / (Math.max(vnewsw.size, 4));
      for (let d = 0; d < 2; d++) {
          let shirt6 = String.fromCharCode(112,108,97,110,101,115,95,53,95,51,57,0);
          let bgvipxvod8 = 0.0;
         xvodI >>= Math.min(1, Math.abs(defaultroombg1.size ^ parseInt(`${bgvipxvod8}`)));
         shirt6 += `${1 * shirt6.length}`;
         bgvipxvod8 /= Math.max(shirt6.length >> (Math.min(shirt6.length, 1)), 2);
      }
         xvodI &= defaultroombg1.size & orangeu.size;
         defaultroombg1 = new Map([[`${defaultroombg1.size}`, 3]]);
          let orangeuparrow7 = 1.0;
          let fillv = String.fromCharCode(115,97,109,101,95,99,95,56,55,0);
         vnewsw.set(`${defaultroombg1.size}`, 1 % (Math.max(6, defaultroombg1.size)));
         orangeuparrow7 -= parseInt(`${orangeuparrow7}`);
         fillv += `${fillv.length}`;
      for (let l = 0; l < 3; l++) {
          let matchz: Array<any> = [479, 554, 299];
          let abidetecti = String.fromCharCode(104,97,115,104,116,97,98,108,101,122,95,121,95,49,51,0);
          let scorepopsoundE = 5.0;
          let configureh: Array<any> = [String.fromCharCode(103,95,57,55,95,101,108,105,115,116,0), String.fromCharCode(112,114,101,115,101,110,116,101,100,95,55,95,56,50,0)];
         xvodI /= Math.max(vnewsw.size & parseInt(`${scorepopsoundE}`), 1);
         matchz = [matchz.length ^ abidetecti.length];
         abidetecti += `${configureh.length * 3}`;
         scorepopsoundE -= parseFloat(`${abidetecti.length}`);
         configureh.push(2);
      }
      let basketballtrophy9 = 5994069 >= xvodI;
      do {
         xvodI <<= Math.min(Math.abs(1), 1);
         if (basketballtrophy9) {
            break;
         }
      } while (basketballtrophy9 && (!Array.from(defaultroombg1.values()).includes(xvodI)));
      if (orangeu.get(`${vnewsw.size}`) != null) {
         orangeu = new Map([[`${vnewsw.size}`, 3 + vnewsw.size]]);
      }
       let match2 = 1.0;
       let championr = 4.0;
      for (let c = 0; c < 2; c++) {
         championr /= Math.max(3, parseFloat(`${3}`));
      }
      smallorangemanf = issub8.length > 27;
      if (fillQ) {
         break;
      }
   } while ((1 >= defaultprofilepico.length) && fillQ);
       let mintegral6 = false;
       let colors0 = false;
       let greyarrowupI = String.fromCharCode(115,95,50,95,118,99,101,110,99,0);
         mintegral6 = (colors0 ? mintegral6 : colors0);
         mintegral6 = (!mintegral6 ? !colors0 : !mintegral6);
      let mathb = colors0 ? !colors0 : colors0;
      do {
         colors0 = !colors0 && greyarrowupI.length >= 76;
         if (mathb) {
            break;
         }
      } while (mathb && (greyarrowupI.length == 5));
      for (let c = 0; c < 3; c++) {
         greyarrowupI = "2";
      }
         greyarrowupI = `${(1 & (colors0 ? 2 : 4))}`;
      iconsharefriends3 |= (3 | (colors0 ? 5 : 3));
       let floaterK = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,98,108,101,95,105,95,55,48,0);
       let episode2 = String.fromCharCode(114,101,97,108,108,111,99,95,111,95,55,53,0);
       let sinaw = String.fromCharCode(114,95,53,49,95,110,108,109,101,97,110,115,0);
         episode2 += "3";
      let jnews2 = 9670031 <= floaterK.length;
      do {
         floaterK += `${2 << (Math.min(2, episode2.length))}`;
         if (jnews2) {
            break;
         }
      } while (jnews2 && (episode2.includes(floaterK)));
      if (sinaw != floaterK) {
         floaterK += "1";
      }
         sinaw += `${episode2.length % (Math.max(10, sinaw.length))}`;
       let emojix = String.fromCharCode(115,117,98,115,99,114,105,112,116,95,57,95,57,0);
          let sell7 = String.fromCharCode(97,95,55,56,95,114,101,103,105,115,116,114,97,114,0);
          let videojsj = true;
          let minivod5 = String.fromCharCode(114,95,52,53,95,97,118,114,101,115,97,109,112,108,101,114,101,115,0);
         sinaw += `${3 * episode2.length}`;
         sell7 = `${(String.fromCharCode(104,0) == sell7 ? sell7.length : (videojsj ? 1 : 3))}`;
         videojsj = minivod5.endsWith(`${videojsj}`);
         minivod5 += `${(minivod5 == String.fromCharCode(70,0) ? minivod5.length : (videojsj ? 3 : 5))}`;
         emojix += `${sinaw.length ^ emojix.length}`;
      if (floaterK == String.fromCharCode(52,0) || episode2 == String.fromCharCode(119,0)) {
          let statisticsv: Array<any> = [315, 93];
          let annerb = 2;
          let auto_gr: Array<any> = [String.fromCharCode(99,102,116,102,115,117,98,95,120,95,49,52,0), String.fromCharCode(106,95,50,50,95,115,101,97,108,97,110,116,0), String.fromCharCode(117,95,51,56,95,110,112,97,116,99,104,101,115,0)];
         floaterK += `${episode2.length}`;
         statisticsv = [annerb];
         annerb |= annerb ^ statisticsv.length;
         auto_gr = [statisticsv.length + annerb];
      }
      while (emojix.length >= sinaw.length) {
          let stationsL = String.fromCharCode(115,95,52,51,95,112,111,115,115,105,98,108,121,0);
          let mutedr = false;
         sinaw = `${(1 ^ (mutedr ? 3 : 2))}`;
         stationsL += `${stationsL.length}`;
         mutedr = stationsL == stationsL;
         break;
      }
      options6 += `${options6.length ^ manifestf.length}`;
      description_91W = `${defaultprofilepico.length | iconsharefriends3}`;
       let libruntimeexecutoru: Array<any> = [String.fromCharCode(98,95,53,53,95,115,97,108,116,0), String.fromCharCode(102,111,114,107,95,57,95,50,49,0), String.fromCharCode(106,95,53,51,95,115,104,97,100,111,119,115,0)];
       let termsZ: Map<any, any> = new Map([[String.fromCharCode(114,109,115,116,114,101,97,109,95,119,95,50,48,0),333], [String.fromCharCode(118,112,108,97,121,101,114,95,114,95,54,52,0),872], [String.fromCharCode(112,105,112,95,122,95,54,56,0),607]]);
         termsZ = new Map([[`${termsZ.size}`, termsZ.size / 3]]);
          let libfollyt: Map<any, any> = new Map([[String.fromCharCode(105,108,108,117,109,105,110,97,116,105,111,110,95,104,95,51,50,0),753], [String.fromCharCode(102,95,57,55,95,109,97,114,107,100,111,119,110,0),324]]);
         termsZ.set(`${libruntimeexecutoru.length}`, 2 | libruntimeexecutoru.length);
         libfollyt.set(`${libfollyt.size}`, libfollyt.size);
          let auto_2u: Array<any> = [40, 398, 400];
          let feedbackm: Array<any> = [547, 852, 898];
         termsZ = new Map([[`${termsZ.size}`, 1]]);
         auto_2u = [2];
         feedbackm.push(3 + auto_2u.length);
         termsZ.set(`${libruntimeexecutoru.length}`, 2 & termsZ.size);
         termsZ = new Map([[`${termsZ.size}`, termsZ.size]]);
      if ((libruntimeexecutoru.length ^ termsZ.size) >= 2 && (termsZ.size ^ libruntimeexecutoru.length) >= 2) {
         termsZ.set(`${libruntimeexecutoru.length}`, termsZ.size);
      }
      description_91W += `${description_91W.length}`;
   let rightw = 5849081 <= defaultprofilepico.length;
   do {
      defaultprofilepico = `${manifestf.length}`;
      if (rightw) {
         break;
      }
   } while ((defaultprofilepico.endsWith(`${smallorangemanf}`)) && rightw);
       let statsnomoredata6: Array<any> = [681, 764, 787];
         statsnomoredata6 = [statsnomoredata6.length % (Math.max(statsnomoredata6.length, 2))];
      if ((statsnomoredata6.length >> (Math.min(statsnomoredata6.length, 5))) > 5 || (statsnomoredata6.length >> (Math.min(Math.abs(5), 3))) > 4) {
          let iconclosewhite7 = String.fromCharCode(107,95,52,54,95,115,116,114,116,111,107,0);
          let topic6 = String.fromCharCode(98,95,50,57,0);
          let currentz = 1;
         statsnomoredata6.push(statsnomoredata6.length);
         iconclosewhite7 += `${currentz ^ iconclosewhite7.length}`;
         topic6 = `${iconclosewhite7.length}`;
         currentz <<= Math.min(topic6.length, 1);
      }
      while ((1 | statsnomoredata6.length) < 4) {
          let cross0 = String.fromCharCode(116,95,52,49,95,106,115,105,109,100,99,112,117,0);
          let penaltymatchiconT = String.fromCharCode(110,95,57,54,95,100,101,108,97,121,97,98,108,101,0);
          let predictionbannersharedm = 4;
         statsnomoredata6 = [cross0.length * penaltymatchiconT.length];
         cross0 += `${predictionbannersharedm % 2}`;
         penaltymatchiconT = `${predictionbannersharedm / (Math.max(2, 9))}`;
         break;
      }
      options6 += `${options6.length >> (Math.min(Math.abs(3), 3))}`;
      issub8.push((String.fromCharCode(118,0) == manifestf ? options6.length : manifestf.length));
      description_91W += `${(String.fromCharCode(110,0) == description_91W ? description_91W.length : parseInt(`${predictionbannerH}`))}`;
      description_91W += `${((smallorangemanf ? 1 : 2))}`;
       let encryptJ = String.fromCharCode(101,95,50,54,95,99,111,110,116,111,108,108,101,114,0);
          let s_centerR = String.fromCharCode(99,104,97,110,103,101,95,102,95,57,56,0);
          let matchdetailbgq: Array<any> = [122, 405, 589];
         encryptJ = `${(String.fromCharCode(114,0) == encryptJ ? s_centerR.length : encryptJ.length)}`;
         s_centerR += `${matchdetailbgq.length - matchdetailbgq.length}`;
         encryptJ += "2";
      if (encryptJ.length == encryptJ.length) {
         encryptJ = `${1 << (Math.min(5, encryptJ.length))}`;
      }
      manifestf += `${defaultprofilepico.length << (Math.min(5, Math.abs(parseInt(`${predictionbannerH}`))))}`;
   while (1 >= (iconsharefriends3 * 4)) {
       let sound1 = 0.0;
       let leakcheckerW = true;
      for (let r = 0; r < 2; r++) {
          let streamingS = 1;
         leakcheckerW = leakcheckerW && 19.38 > sound1;
         streamingS += 3 & streamingS;
      }
         sound1 -= ((leakcheckerW ? 2 : 2) / (Math.max(5, parseInt(`${sound1}`))));
      let sliderL = leakcheckerW ? !leakcheckerW : leakcheckerW;
      do {
          let clockA: Array<any> = [925, 831, 505];
          let lefte = String.fromCharCode(117,95,56,50,95,97,98,115,120,0);
          let mergert = 2.0;
         leakcheckerW = 21.52 <= mergert || lefte.length <= 98;
         clockA = [clockA.length];
         lefte = "2";
         if (sliderL) {
            break;
         }
      } while ((leakcheckerW) && sliderL);
         sound1 *= parseInt(`${sound1}`) + 3;
         leakcheckerW = !leakcheckerW || sound1 == 87.30;
         sound1 /= Math.max(2, 1 - parseInt(`${sound1}`));
      smallorangemanf = 69.3 < sound1 && predictionbannerH < 69.3;
      break;
   }
      defaultprofilepico += `${issub8.length}`;
      manifestf = `${issub8.length | manifestf.length}`;

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
       let volumeL = String.fromCharCode(115,97,105,111,95,53,95,50,55,0);
    let logoutN = String.fromCharCode(110,95,53,51,95,112,117,98,108,105,99,105,116,121,0);
    let calendarm = String.fromCharCode(103,95,54,52,95,98,111,117,110,99,101,0);
    let backwardi = String.fromCharCode(105,95,49,50,95,115,101,114,105,97,108,105,122,105,110,103,0);
    let yellowtorede: Map<any, any> = new Map([[String.fromCharCode(113,95,51,54,95,109,111,100,101,108,0),810], [String.fromCharCode(103,95,56,50,95,112,114,101,99,101,110,99,101,0),48], [String.fromCharCode(102,105,110,103,101,114,115,95,113,95,53,51,0),615]]);
    let videojsi: Array<any> = [680, 694];
    let libavutilu = String.fromCharCode(97,95,57,55,95,112,117,110,99,116,117,97,116,105,111,110,0);
    let cornershooty: Array<any> = [249, 390, 240];
    let leakcheckerX = 3.0;
    let iconarrowrightl = 3.0;
    let launcherd = 3;
    let specT: Map<any, any> = new Map([[String.fromCharCode(121,95,50,53,95,112,101,101,108,0),301], [String.fromCharCode(115,95,56,57,95,118,111,119,101,108,0),569], [String.fromCharCode(108,95,57,57,95,114,101,116,97,105,110,101,100,0),93]]);
    let phoneI = false;
       let albumB: Map<any, any> = new Map([[String.fromCharCode(99,111,101,102,102,115,112,95,100,95,55,50,0),238], [String.fromCharCode(104,101,120,98,115,95,117,95,54,57,0),708]]);
          let crownH: Array<any> = [181, 424, 939];
          let iconarrowrighte = String.fromCharCode(122,95,52,49,95,116,97,112,101,115,0);
         albumB = new Map([[`${albumB.size}`, albumB.size]]);
         crownH.push(iconarrowrighte.length);
         iconarrowrighte += `${crownH.length ^ iconarrowrighte.length}`;
         albumB = new Map([[`${albumB.size}`, albumB.size]]);
      if (5 >= (albumB.size & 3) || 5 >= (albumB.size & 3)) {
         albumB = new Map([[`${albumB.size}`, albumB.size]]);
      }
      launcherd <<= Math.min(3, Math.abs(1));
       let smallb = 3.0;
       let becomel = String.fromCharCode(118,95,56,95,117,110,115,99,97,108,101,0);
      let buttong = smallb >= 8248510.0;
      do {
         smallb += parseFloat(`${2}`);
         if (buttong) {
            break;
         }
      } while (buttong && ((4.95 * smallb) >= 4.49));
         smallb /= Math.max(2, parseFloat(`${parseInt(`${smallb}`) | 2}`));
      while (4 < becomel.length) {
         becomel += `${parseInt(`${smallb}`) >> (Math.min(Math.abs(3), 4))}`;
         break;
      }
      for (let f = 0; f < 3; f++) {
         smallb *= parseFloat(`${1 ^ becomel.length}`);
      }
      while (becomel.length == 5) {
         smallb += parseFloat(`${parseInt(`${smallb}`)}`);
         break;
      }
      while (becomel.length >= parseInt(`${smallb}`)) {
          let l_titleU: Map<any, any> = new Map([[String.fromCharCode(120,95,56,53,95,104,97,115,0),854], [String.fromCharCode(99,104,117,110,107,95,50,95,56,50,0),841], [String.fromCharCode(109,97,116,114,105,120,102,95,98,95,56,50,0),60]]);
          let splashW: Map<any, any> = new Map([[String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,95,52,95,50,55,0),String.fromCharCode(109,111,110,116,103,111,109,101,114,121,95,115,95,56,52,0)], [String.fromCharCode(117,95,54,52,0),String.fromCharCode(116,114,101,110,100,108,105,110,101,95,102,95,55,51,0)], [String.fromCharCode(115,95,50,49,95,118,101,110,117,101,0),String.fromCharCode(107,95,56,55,0)]]);
          let giftD: Array<any> = [146, 826, 462];
         smallb += parseFloat(`${splashW.size}`);
         l_titleU = new Map([[`${l_titleU.size}`, giftD.length]]);
         splashW.set(`${giftD.length}`, 1);
         break;
      }
      leakcheckerX -= calendarm.length;
      cornershooty.push(calendarm.length);
   for (let z = 0; z < 2; z++) {
      volumeL += `${(String.fromCharCode(71,0) == logoutN ? logoutN.length : launcherd)}`;
   }
      iconarrowrightl += parseInt(`${iconarrowrightl}`) % (Math.max(9, launcherd));
   if (2 > (parseInt(`${iconarrowrightl}`) - calendarm.length)) {
      calendarm += "3";
   }
      launcherd -= specT.size ^ logoutN.length;
      videojsi = [backwardi.length];
      calendarm += `${volumeL.length}`;
   let homeactiver = 7682085 >= specT.size;
   do {
      specT = new Map([[volumeL, volumeL.length & backwardi.length]]);
      if (homeactiver) {
         break;
      }
   } while (homeactiver && ((backwardi.length >> (Math.min(Math.abs(2), 1))) <= 2));
       let livesharek: Array<any> = [46, 995];
       let predictionbuttonQ: Array<any> = [474, 142];
      for (let v = 0; v < 2; v++) {
          let iconlogout1 = String.fromCharCode(108,111,116,116,105,101,118,105,101,119,95,57,95,54,49,0);
          let temp6 = false;
          let libtob2 = String.fromCharCode(106,111,98,113,95,48,95,57,56,0);
         predictionbuttonQ = [livesharek.length % (Math.max(1, 9))];
         iconlogout1 = "3";
         temp6 = !iconlogout1.includes(`${temp6}`);
         libtob2 = `${iconlogout1.length % (Math.max(3, 7))}`;
      }
      let basketballawayteam9 = livesharek.length <= 5517533;
      do {
         livesharek = [livesharek.length];
         if (basketballawayteam9) {
            break;
         }
      } while ((1 < (livesharek.length << (Math.min(Math.abs(5), 4))) || (livesharek.length << (Math.min(predictionbuttonQ.length, 5))) < 5) && basketballawayteam9);
      for (let o = 0; o < 1; o++) {
          let knewinterstitialk = String.fromCharCode(115,107,101,121,108,105,115,116,95,55,95,49,50,0);
          let showlessU = String.fromCharCode(115,95,57,53,95,117,112,100,97,116,101,0);
          let turn3 = String.fromCharCode(100,101,113,117,101,117,101,95,112,95,53,49,0);
          let awayj = String.fromCharCode(112,95,52,57,95,97,114,103,98,105,0);
         livesharek.push(awayj.length);
         knewinterstitialk += `${2 % (Math.max(7, knewinterstitialk.length))}`;
         showlessU = `${2 + knewinterstitialk.length}`;
         turn3 = `${turn3.length << (Math.min(Math.abs(1), 1))}`;
         awayj += `${turn3.length}`;
      }
          let signinupp = String.fromCharCode(114,95,50,56,95,114,108,111,116,116,105,101,0);
         predictionbuttonQ = [2];
         signinupp = `${3 << (Math.min(2, signinupp.length))}`;
       let turndownI = String.fromCharCode(97,95,56,48,95,102,97,116,101,0);
       let giftk = String.fromCharCode(100,101,115,114,111,121,95,100,95,50,56,0);
      for (let c = 0; c < 2; c++) {
         giftk += `${livesharek.length + 1}`;
      }
      launcherd |= volumeL.length + logoutN.length;
   while (videojsi.length == calendarm.length) {
      calendarm = `${specT.size}`;
      break;
   }
   if (!calendarm.includes(`${logoutN.length}`)) {
       let cancel8: Array<any> = [478, 610];
       let stationsQ: Array<any> = [958, 111, 56];
      let qaagD = 9852268 >= cancel8.length;
      do {
         cancel8.push(3);
         if (qaagD) {
            break;
         }
      } while (((4 | stationsQ.length) < 1) && qaagD);
      let reactQ = 5164292 <= cancel8.length;
      do {
          let actions_ = String.fromCharCode(98,105,103,116,114,101,101,95,108,95,57,56,0);
          let round_ = 3.0;
          let dropdownd = String.fromCharCode(111,112,116,115,95,119,95,57,56,0);
         cancel8.push(1 - cancel8.length);
         actions_ += `${2 & actions_.length}`;
         round_ += parseFloat(`${1 >> (Math.min(4, dropdownd.length))}`);
         dropdownd += "2";
         if (reactQ) {
            break;
         }
      } while (((stationsQ.length % 1) > 4 || (cancel8.length % 1) > 2) && reactQ);
       let blacklistf = String.fromCharCode(115,95,49,49,95,112,114,111,116,111,0);
       let utilsA = String.fromCharCode(108,105,98,103,115,109,95,111,95,57,53,0);
      if (blacklistf == String.fromCharCode(107,0)) {
         utilsA += `${stationsQ.length / (Math.max(blacklistf.length, 4))}`;
      }
      if (utilsA.length > 4 && 4 > blacklistf.length) {
         blacklistf += `${blacklistf.length}`;
      }
          let questp = String.fromCharCode(99,109,105,111,95,97,95,54,53,0);
          let matchdetailbgb = 3;
          let userK = String.fromCharCode(107,101,121,103,101,110,95,105,95,54,56,0);
         blacklistf += `${questp.length}`;
         questp = `${userK.length * matchdetailbgb}`;
         matchdetailbgb <<= Math.min(userK.length, 5);
      logoutN = `${launcherd | parseInt(`${leakcheckerX}`)}`;
   }
   while (launcherd <= backwardi.length) {
       let mergerv = 1;
       let predictionwinQ = 4.0;
         predictionwinQ /= Math.max(5, parseFloat(`${parseInt(`${predictionwinQ}`)}`));
       let backwhiteN = true;
       let yellowtoredg = false;
          let iconlogout8 = 1.0;
          let whistleorangeK = String.fromCharCode(112,95,54,55,95,108,97,114,103,101,0);
          let singler = false;
         mergerv /= Math.max((String.fromCharCode(112,0) == whistleorangeK ? whistleorangeK.length : mergerv), 1);
         iconlogout8 -= (parseFloat(`${(singler ? 5 : 2) - parseInt(`${iconlogout8}`)}`));
         singler = !singler;
       let gifgoalbge = true;
          let cornerx = 0.0;
         gifgoalbge = 14 <= (mergerv / (Math.max(predictionwinQ, 10)));
         cornerx /= Math.max(1, 5);
      let pangled = 7320159 <= mergerv;
      do {
         mergerv ^= ((yellowtoredg ? 1 : 2) % (Math.max(6, parseInt(`${predictionwinQ}`))));
         if (pangled) {
            break;
         }
      } while (pangled && ((mergerv ^ 2) < 2 || 2 < (mergerv + parseInt(`${predictionwinQ}`))));
      backwardi += `${2 ^ specT.size}`;
      break;
   }
      volumeL = `${specT.size}`;
      iconarrowrightl -= cornershooty.length + specT.size;
       let champion2: Array<any> = [152, 987];
       let iconsetting2 = String.fromCharCode(97,105,109,105,110,103,95,98,95,55,51,0);
       let mini6: Array<any> = [202, 194];
         champion2 = [iconsetting2.length];
      let starC = 7886014 <= mini6.length;
      do {
         mini6.push(mini6.length);
         if (starC) {
            break;
         }
      } while (((iconsetting2.length >> (Math.min(4, mini6.length))) < 1) && starC);
      let exampleimage8 = mini6.length <= 8964326;
      do {
         mini6 = [mini6.length];
         if (exampleimage8) {
            break;
         }
      } while ((4 == (champion2.length - mini6.length) && 3 == (mini6.length - 4)) && exampleimage8);
          let tempH: Map<any, any> = new Map([[String.fromCharCode(105,95,53,57,95,115,111,114,101,99,101,105,118,101,0),false ], [String.fromCharCode(109,95,50,50,95,98,108,97,99,107,0),false ]]);
          let playercommons = 4;
          let backwardQ = 4.0;
         iconsetting2 += "2";
         tempH.set(`${playercommons}`, playercommons / 2);
         backwardQ += playercommons;
         iconsetting2 += `${(iconsetting2 == String.fromCharCode(107,0) ? iconsetting2.length : champion2.length)}`;
      while (5 == (2 - iconsetting2.length) && (iconsetting2.length - 2) == 4) {
         champion2 = [iconsetting2.length | 3];
         break;
      }
         iconsetting2 += `${(iconsetting2 == String.fromCharCode(82,0) ? mini6.length : iconsetting2.length)}`;
         iconsetting2 += `${iconsetting2.length % 2}`;
      let reactnavigationy = champion2.length >= 8603266;
      do {
         champion2.push(mini6.length | 3);
         if (reactnavigationy) {
            break;
         }
      } while (reactnavigationy && (!mini6.includes(champion2.length)));
      yellowtorede.set(iconsetting2, iconsetting2.length * 2);
   for (let v = 0; v < 1; v++) {
      specT = new Map([[`${iconarrowrightl}`, parseInt(`${iconarrowrightl}`) - 2]]);
   }
   let telegramS = String.fromCharCode(118,119,110,122,120,0) == libavutilu;
   do {
       let iconviewergifN = 3.0;
       let frame_noj = 4.0;
       let flipperP = 3;
       let tooltipsc = 4.0;
       let product8 = 5.0;
         iconviewergifN += parseFloat(`${2}`);
         flipperP &= 3 * parseInt(`${frame_noj}`);
          let fullscreenmaxL = 3;
         tooltipsc /= Math.max(3 | parseInt(`${tooltipsc}`), 1);
         fullscreenmaxL += 2;
          let mapbuffero: Map<any, any> = new Map([[String.fromCharCode(97,95,56,49,95,97,103,97,105,110,0),false ], [String.fromCharCode(114,101,118,97,108,105,100,97,116,101,95,108,95,53,50,0),true ]]);
          let heart7 = 4;
         flipperP += 1;
         mapbuffero.set(`${heart7}`, mapbuffero.size);
         heart7 >>= Math.min(Math.abs(mapbuffero.size), 4);
      let template_1cp = 5761211.0 <= product8;
      do {
         product8 += 2 * parseInt(`${iconviewergifN}`);
         if (template_1cp) {
            break;
         }
      } while ((tooltipsc >= 5.56) && template_1cp);
         tooltipsc *= flipperP / (Math.max(parseInt(`${product8}`), 10));
      for (let j = 0; j < 2; j++) {
          let smallorangemanD = String.fromCharCode(108,111,103,103,105,110,103,95,108,95,50,53,0);
          let cricketu: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,95,114,95,54,49,0),false ], [String.fromCharCode(122,95,54,95,101,118,97,115,97,112,112,0),true ], [String.fromCharCode(117,110,97,108,105,103,110,101,100,95,97,95,51,52,0),true ]]);
         frame_noj += (parseFloat(`${String.fromCharCode(50,0) == smallorangemanD ? smallorangemanD.length : parseInt(`${iconviewergifN}`)}`));
         cricketu.set(`${cricketu.size}`, cricketu.size % (Math.max(cricketu.size, 10)));
      }
          let basketballtrophy5 = 3;
         frame_noj += parseFloat(`${3}`);
         basketballtrophy5 /= Math.max(basketballtrophy5 | basketballtrophy5, 1);
      while (3.38 > product8) {
         iconviewergifN /= Math.max(parseFloat(`${3}`), 5);
         break;
      }
      for (let t = 0; t < 3; t++) {
         iconviewergifN += parseFloat(`${parseInt(`${product8}`)}`);
      }
         tooltipsc *= flipperP;
         frame_noj /= Math.max(3, parseFloat(`${parseInt(`${iconviewergifN}`) & parseInt(`${frame_noj}`)}`));
         tooltipsc += parseInt(`${tooltipsc}`);
         frame_noj *= parseFloat(`${flipperP / 1}`);
      if ((iconviewergifN / (Math.max(2.5, 2))) <= 5.5) {
         iconviewergifN *= parseFloat(`${flipperP}`);
      }
      libavutilu += `${parseInt(`${iconarrowrightl}`)}`;
      if (telegramS) {
         break;
      }
   } while ((5 < (libavutilu.length >> (Math.min(1, Math.abs(specT.size)))) && 1 < (specT.size >> (Math.min(Math.abs(5), 1)))) && telegramS);
   while (volumeL.length >= libavutilu.length) {
       let greyarrowup5: Map<any, any> = new Map([[String.fromCharCode(115,116,101,108,108,97,114,95,99,95,53,49,0),207], [String.fromCharCode(115,95,56,50,95,115,119,114,105,0),730]]);
       let trophyL = 3.0;
       let signinup6: Map<any, any> = new Map([[String.fromCharCode(105,110,118,111,99,97,116,105,111,110,115,95,48,95,53,57,0),String.fromCharCode(102,95,57,50,95,100,105,115,115,105,109,0)], [String.fromCharCode(114,101,116,117,114,110,101,100,95,107,95,57,52,0),String.fromCharCode(110,95,49,56,95,108,105,110,103,101,114,0)]]);
       let launcherX = 1.0;
       let codegenD = String.fromCharCode(97,118,100,101,118,105,99,101,114,101,115,95,110,95,51,55,0);
       let filedb = 1.0;
      while ((launcherX / 3.77) > 1.2 && 5.40 > (filedb - 3.77)) {
         filedb -= (parseFloat(`${codegenD == String.fromCharCode(70,0) ? codegenD.length : parseInt(`${filedb}`)}`));
         break;
      }
         codegenD = `${2 & signinup6.size}`;
      while ((greyarrowup5.size << (Math.min(Math.abs(3), 3))) <= 2) {
         trophyL -= parseInt(`${trophyL}`) / (Math.max(3, 7));
         break;
      }
          let dplusx = 5.0;
         launcherX += parseInt(`${dplusx}`) << (Math.min(Math.abs(1), 1));
      if (signinup6.get(`${trophyL}`) != null) {
         signinup6 = new Map([[codegenD, 2 >> (Math.min(5, Math.abs(parseInt(`${trophyL}`))))]]);
      }
          let customA = true;
         filedb -= parseFloat(`${parseInt(`${launcherX}`) << (Math.min(Math.abs(greyarrowup5.size), 2))}`);
         customA = (customA ? customA : customA);
         trophyL += codegenD.length + parseInt(`${trophyL}`);
      let unimplementedviewP = trophyL <= 7511520.0;
      do {
         trophyL += parseInt(`${launcherX}`);
         if (unimplementedviewP) {
            break;
         }
      } while (unimplementedviewP && (Array.from(signinup6.keys()).includes(`${trophyL}`)));
         greyarrowup5.set(`${launcherX}`, 3);
      for (let r = 0; r < 1; r++) {
         signinup6.set(codegenD, codegenD.length);
      }
         codegenD = `${parseInt(`${trophyL}`) | parseInt(`${filedb}`)}`;
      let vipsportt = 9107085 >= codegenD.length;
      do {
         codegenD += `${greyarrowup5.size & 1}`;
         if (vipsportt) {
            break;
         }
      } while (vipsportt && (5 >= signinup6.size));
         trophyL += greyarrowup5.size ^ 3;
         greyarrowup5.set(codegenD, codegenD.length - 1);
      volumeL += `${volumeL.length}`;
      break;
   }
      specT.set(backwardi, (String.fromCharCode(50,0) == backwardi ? backwardi.length : libavutilu.length));
   while ((launcherd << (Math.min(videojsi.length, 2))) > 1 || (launcherd << (Math.min(Math.abs(1), 2))) > 5) {
       let vignette4: Array<any> = [417, 701, 221];
       let spec4 = String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,97,108,95,52,95,55,54,0);
       let statsnomoredataq: Array<any> = [264, 304, 758];
       let libturbomodulejsijniG: Array<any> = [347, 783];
       let yellowanimationliveX: Map<any, any> = new Map([[String.fromCharCode(100,99,98,122,108,95,97,95,49,55,0),true ], [String.fromCharCode(100,105,103,101,115,116,115,95,115,95,51,50,0),true ]]);
      for (let f = 0; f < 1; f++) {
          let predictiondefaultw = String.fromCharCode(103,95,57,52,95,112,101,110,99,105,108,0);
          let release_1e = 1.0;
          let gradlewO = String.fromCharCode(115,95,56,57,95,114,97,119,101,110,99,0);
          let clockO: Map<any, any> = new Map([[String.fromCharCode(99,105,110,97,117,100,105,111,95,108,95,55,0),440], [String.fromCharCode(98,95,52,51,95,98,105,116,108,105,110,101,99,104,117,110,107,121,0),119], [String.fromCharCode(111,95,54,53,95,100,105,115,112,97,116,99,104,0),948]]);
          let m_manager4 = String.fromCharCode(111,95,56,53,95,116,104,114,109,97,116,0);
         libturbomodulejsijniG.push((spec4 == String.fromCharCode(48,0) ? parseInt(`${release_1e}`) : spec4.length));
         predictiondefaultw = `${1 ^ m_manager4.length}`;
         release_1e -= predictiondefaultw.length * 2;
         gradlewO = `${gradlewO.length << (Math.min(Math.abs(3), 5))}`;
         clockO = new Map([[m_manager4, m_manager4.length]]);
      }
         yellowanimationliveX = new Map([[`${vignette4.length}`, spec4.length << (Math.min(1, vignette4.length))]]);
      while (libturbomodulejsijniG.length > statsnomoredataq.length) {
         statsnomoredataq.push(2);
         break;
      }
          let heart5: Map<any, any> = new Map([[String.fromCharCode(110,101,105,103,104,98,111,114,115,95,104,95,53,52,0),false ], [String.fromCharCode(108,105,98,97,118,100,101,118,105,99,101,95,108,95,52,56,0),false ], [String.fromCharCode(107,95,50,54,95,116,101,114,109,115,101,116,0),true ]]);
          let libfollyB = String.fromCharCode(119,95,50,95,107,110,111,99,107,111,117,116,0);
         spec4 = `${statsnomoredataq.length % 3}`;
         heart5.set(libfollyB, 3 & libfollyB.length);
         libturbomodulejsijniG.push(statsnomoredataq.length);
      if ((1 & vignette4.length) >= 4 && (vignette4.length & 1) >= 5) {
         vignette4.push(3 % (Math.max(6, statsnomoredataq.length)));
      }
      let dependencies2 = String.fromCharCode(103,51,50,0) == spec4;
      do {
         spec4 += "1";
         if (dependencies2) {
            break;
         }
      } while ((spec4.length <= vignette4.length) && dependencies2);
      launcherd |= cornershooty.length % 2;
      break;
   }
       let librrct: Map<any, any> = new Map([[String.fromCharCode(97,99,116,117,97,108,105,122,101,100,95,49,95,57,55,0),489], [String.fromCharCode(108,95,50,48,95,116,114,105,101,0),401]]);
         librrct = new Map([[`${librrct.size}`, librrct.size]]);
      let overlaye = librrct.size <= 7916497;
      do {
         librrct.set(`${librrct.size}`, librrct.size);
         if (overlaye) {
            break;
         }
      } while ((!Array.from(librrct.values()).includes(librrct.size)) && overlaye);
         librrct.set(`${librrct.size}`, librrct.size);
      launcherd += parseInt(`${leakcheckerX}`) % (Math.max(specT.size, 6));
   let downloaderV = 6246055 <= logoutN.length;
   do {
       let typingt = String.fromCharCode(99,111,109,109,105,116,95,105,95,53,55,0);
       let morea = String.fromCharCode(98,95,57,52,95,108,111,111,107,0);
       let otherg = String.fromCharCode(105,95,49,57,95,98,101,104,97,118,105,111,114,115,0);
       let libreactperfloggerjni2 = 0.0;
      if (typingt.endsWith(`${morea.length}`)) {
         typingt += `${(String.fromCharCode(79,0) == morea ? typingt.length : morea.length)}`;
      }
      for (let r = 0; r < 3; r++) {
         otherg += `${morea.length ^ otherg.length}`;
      }
         libreactperfloggerjni2 *= parseFloat(`${2 << (Math.min(1, otherg.length))}`);
       let refreshr = String.fromCharCode(120,95,49,55,95,100,101,108,101,116,105,111,110,115,0);
       let armvay = String.fromCharCode(114,101,115,97,109,112,108,101,95,108,95,48,0);
          let whistleorangeM: Map<any, any> = new Map([[String.fromCharCode(114,97,116,105,111,95,104,95,56,51,0),919], [String.fromCharCode(109,95,54,53,0),285]]);
          let eabafadfadddbafeddddeeefeaafd = 1.0;
         libreactperfloggerjni2 /= Math.max(3, (parseFloat(`${String.fromCharCode(90,0) == typingt ? typingt.length : otherg.length}`)));
         whistleorangeM = new Map([[`${whistleorangeM.size}`, parseInt(`${eabafadfadddbafeddddeeefeaafd}`) % (Math.max(whistleorangeM.size, 7))]]);
         eabafadfadddbafeddddeeefeaafd /= Math.max(parseFloat(`${whistleorangeM.size & 1}`), 3);
         typingt += `${morea.length | 3}`;
          let scorepopsoundy = 1.0;
         typingt += `${armvay.length | refreshr.length}`;
         scorepopsoundy /= Math.max(1, parseFloat(`${parseInt(`${scorepopsoundy}`)}`));
          let rncore0 = String.fromCharCode(108,111,97,100,115,95,106,95,57,51,0);
          let libglogj = 3.0;
         refreshr = `${parseInt(`${libreactperfloggerjni2}`)}`;
         rncore0 += "2";
         libglogj -= parseFloat(`${parseInt(`${libglogj}`) % (Math.max(rncore0.length, 2))}`);
      let reactnativeultimatelistview_ = libreactperfloggerjni2 <= 7273288.0;
      do {
         libreactperfloggerjni2 *= parseFloat(`${parseInt(`${libreactperfloggerjni2}`)}`);
         if (reactnativeultimatelistview_) {
            break;
         }
      } while ((3 <= (parseInt(`${libreactperfloggerjni2}`) * refreshr.length) || 1.86 <= (3.8 * libreactperfloggerjni2)) && reactnativeultimatelistview_);
         morea = "1";
         typingt += `${refreshr.length}`;
      if (5 < typingt.length) {
          let iconwatchA = String.fromCharCode(98,95,56,49,95,100,101,118,105,99,101,115,0);
          let arrowrightwithtail8 = 4.0;
          let filters = String.fromCharCode(116,117,110,110,101,108,101,100,95,104,95,53,55,0);
          let middleware0: Array<any> = [869, 741];
          let othera = String.fromCharCode(106,95,53,52,95,101,99,111,117,110,116,0);
         refreshr += `${parseInt(`${libreactperfloggerjni2}`)}`;
         iconwatchA += `${(String.fromCharCode(69,0) == othera ? parseInt(`${arrowrightwithtail8}`) : othera.length)}`;
         arrowrightwithtail8 /= Math.max(3, 4);
         filters += `${parseInt(`${arrowrightwithtail8}`) / (Math.max(1, 9))}`;
         middleware0.push((filters == String.fromCharCode(81,0) ? filters.length : middleware0.length));
      }
      logoutN = `${cornershooty.length}`;
      if (downloaderV) {
         break;
      }
   } while (downloaderV && ((leakcheckerX * logoutN.length) < 1.12 || (3 - logoutN.length) < 1));
   for (let d = 0; d < 2; d++) {
      libavutilu = "2";
   }
      cornershooty = [cornershooty.length | 1];
   while ((iconarrowrightl * 2.33) < 3.34) {
      yellowtorede = new Map([[`${videojsi.length}`, (String.fromCharCode(84,0) == backwardi ? backwardi.length : videojsi.length)]]);
      break;
   }
   let androidL = logoutN == String.fromCharCode(111,121,100,56,98,0);
   do {
       let mintegralp: Array<any> = [314, 427];
       let bufferH = 0;
       let holderd = 5;
       let buttonA = String.fromCharCode(121,95,54,49,95,109,117,108,116,105,98,97,115,101,0);
          let ticked2 = 4.0;
          let umengi = 4;
         holderd /= Math.max(1, 4);
         ticked2 *= parseFloat(`${umengi >> (Math.min(4, Math.abs(3)))}`);
         umengi &= parseInt(`${ticked2}`);
         buttonA = `${(String.fromCharCode(107,0) == buttonA ? buttonA.length : bufferH)}`;
      if (1 < (bufferH << (Math.min(5, Math.abs(holderd))))) {
         bufferH *= bufferH - mintegralp.length;
      }
      while (4 > buttonA.length) {
         buttonA += `${buttonA.length - 1}`;
         break;
      }
         holderd /= Math.max(2, 4);
         buttonA += "1";
          let smallbrightness2: Map<any, any> = new Map([[String.fromCharCode(108,95,57,54,95,112,114,101,100,105,99,116,0),770], [String.fromCharCode(102,95,50,51,95,102,117,110,99,0),260]]);
          let iconschedule3 = String.fromCharCode(116,101,115,115,101,108,97,116,101,95,114,95,53,53,0);
          let dialogS = 4;
         bufferH += 3;
         smallbrightness2 = new Map([[`${dialogS}`, 3]]);
         iconschedule3 += `${1 << (Math.min(1, Math.abs(smallbrightness2.size)))}`;
         dialogS *= iconschedule3.length;
          let navigationH = String.fromCharCode(115,112,101,97,107,101,114,95,56,95,54,57,0);
         holderd %= Math.max(5, 3 & mintegralp.length);
         navigationH = `${navigationH.length + 1}`;
      while ((1 << (Math.min(1, mintegralp.length))) > 3 || 5 > (mintegralp.length << (Math.min(Math.abs(1), 3)))) {
          let bannerZ = false;
         bufferH += 1;
         bannerZ = !bannerZ;
         break;
      }
         mintegralp = [bufferH * 1];
      for (let t = 0; t < 2; t++) {
         bufferH -= mintegralp.length;
      }
         buttonA = `${3 * bufferH}`;
      logoutN = `${2 * launcherd}`;
      if (androidL) {
         break;
      }
   } while ((logoutN.startsWith(`${leakcheckerX}`)) && androidL);

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
       let ewardedN = 2;
    let indicatorG = String.fromCharCode(118,100,115,111,95,110,95,55,53,0);
    let register_gs = true;
    let tick4 = String.fromCharCode(99,95,50,56,95,115,101,97,116,0);
    let animations0: Array<any> = [871, 66];
    let libavfilter6 = true;
    let langkeyc = String.fromCharCode(109,101,114,103,101,114,95,97,95,54,57,0);
    let rncoreP = 0;
    let subinC = String.fromCharCode(108,95,55,51,95,121,111,103,97,0);
    let umengK = String.fromCharCode(114,95,52,51,95,103,111,108,111,109,98,0);
    let projectJ = String.fromCharCode(114,116,97,100,100,114,115,95,56,95,54,53,0);
    let paginationS: Array<any> = [String.fromCharCode(99,111,108,111,114,95,115,95,49,0), String.fromCharCode(98,95,55,50,95,109,97,107,101,114,112,109,0), String.fromCharCode(101,95,49,57,95,98,108,111,98,115,0)];
    let macauh: Map<any, any> = new Map([[String.fromCharCode(104,111,116,95,97,95,52,0),true ], [String.fromCharCode(116,95,57,54,95,111,114,105,101,110,116,0),true ]]);
    let backwardR = String.fromCharCode(121,95,57,57,95,101,115,99,97,112,101,0);
    let largesoundp = 5.0;
   for (let j = 0; j < 3; j++) {
       let firebasef = String.fromCharCode(104,101,97,114,116,115,95,50,95,50,52,0);
       let imagenomoredataB = true;
       let bgvipsportQ = 1.0;
      if (!imagenomoredataB && firebasef.length > 5) {
         imagenomoredataB = 9.3 == bgvipsportQ;
      }
      while (!firebasef.endsWith(`${imagenomoredataB}`)) {
         imagenomoredataB = !imagenomoredataB;
         break;
      }
          let register_rH = String.fromCharCode(102,114,101,113,95,108,95,50,55,0);
         bgvipsportQ /= Math.max(parseFloat(`${parseInt(`${bgvipsportQ}`)}`), 5);
         register_rH = `${register_rH.length + 3}`;
      if ((bgvipsportQ / 5.58) > 1.10) {
          let reactnativejs4 = String.fromCharCode(109,97,116,104,111,112,115,95,100,95,51,52,0);
          let wind1 = String.fromCharCode(121,117,118,112,95,50,95,53,55,0);
          let chatf = String.fromCharCode(116,95,51,53,95,115,117,98,108,97,121,111,117,116,115,0);
          let imagenomoredataG = String.fromCharCode(113,95,51,95,102,111,110,116,99,111,110,102,105,103,0);
          let sportst = 2.0;
         imagenomoredataB = chatf.length >= imagenomoredataG.length;
         reactnativejs4 += `${wind1.length}`;
         wind1 = `${wind1.length | 2}`;
         chatf += "3";
         imagenomoredataG += "1";
         sportst /= Math.max(parseFloat(`${reactnativejs4.length}`), 4);
      }
      for (let z = 0; z < 1; z++) {
         imagenomoredataB = (86 <= ((imagenomoredataB ? firebasef.length : 86) >> (Math.min(firebasef.length, 4))));
      }
      let stepV = imagenomoredataB ? !imagenomoredataB : imagenomoredataB;
      do {
          let referrer6 = String.fromCharCode(97,98,111,114,116,97,98,108,101,95,108,95,57,52,0);
          let iconarrowleftj = false;
          let arrowrightwithtailC = String.fromCharCode(102,95,56,55,95,111,110,101,112,97,115,115,0);
          let shootyesgoal5 = String.fromCharCode(114,95,52,57,95,105,110,118,111,107,101,114,0);
         imagenomoredataB = firebasef == arrowrightwithtailC;
         referrer6 = `${(3 ^ (iconarrowleftj ? 3 : 5))}`;
         iconarrowleftj = !iconarrowleftj;
         arrowrightwithtailC = `${((iconarrowleftj ? 1 : 3) % (Math.max(10, referrer6.length)))}`;
         shootyesgoal5 += "1";
         if (stepV) {
            break;
         }
      } while ((firebasef.length <= 3) && stepV);
      if (imagenomoredataB || 4 == firebasef.length) {
          let pointm = 4.0;
          let iconwatchy = String.fromCharCode(99,95,53,49,95,112,108,97,99,101,0);
         firebasef += `${((imagenomoredataB ? 5 : 3) / (Math.max(2, 7)))}`;
         pointm -= parseFloat(`${iconwatchy.length}`);
         iconwatchy += `${parseInt(`${pointm}`)}`;
      }
         bgvipsportQ /= Math.max(1, (parseFloat(`${(imagenomoredataB ? 2 : 3) + 1}`)));
      for (let p = 0; p < 1; p++) {
         imagenomoredataB = (7 >= (firebasef.length ^ (!imagenomoredataB ? firebasef.length : 7)));
      }
      tick4 = `${((register_gs ? 3 : 2) | rncoreP)}`;
   }
      projectJ = `${tick4.length >> (Math.min(5, animations0.length))}`;
   for (let d = 0; d < 1; d++) {
       let banner7 = String.fromCharCode(105,95,52,54,95,100,101,99,105,112,104,101,114,0);
         banner7 += `${banner7.length & 1}`;
      if (banner7 != String.fromCharCode(108,0)) {
          let lighth = String.fromCharCode(104,117,103,103,105,110,103,95,105,95,53,50,0);
          let iconnotificationnewp = String.fromCharCode(122,95,52,52,95,101,99,116,97,110,103,108,101,0);
         banner7 += `${(String.fromCharCode(66,0) == iconnotificationnewp ? iconnotificationnewp.length : banner7.length)}`;
         lighth += `${lighth.length}`;
      }
         banner7 = `${banner7.length}`;
      rncoreP |= 2;
   }
      ewardedN <<= Math.min(3, Math.abs(((register_gs ? 4 : 1) ^ rncoreP)));
   while (umengK.startsWith(langkeyc)) {
      langkeyc += `${(projectJ == String.fromCharCode(54,0) ? animations0.length : projectJ.length)}`;
      break;
   }
   let iconbackwhiteY = 6243415 >= ewardedN;
   do {
      ewardedN -= 3 * ewardedN;
      if (iconbackwhiteY) {
         break;
      }
   } while (iconbackwhiteY && ((ewardedN * 1) >= 2));
   if (libavfilter6) {
       let floatingv = 4.0;
       let team3 = String.fromCharCode(118,112,120,100,101,99,95,105,95,52,49,0);
       let membershipZ = false;
       let ewardedk = true;
       let modalR: Array<any> = [986, 927];
      if (parseInt(`${floatingv}`) < modalR.length) {
         modalR = [modalR.length];
      }
         floatingv /= Math.max((parseFloat(`${(membershipZ ? 1 : 4) & 3}`)), 1);
         membershipZ = !team3.startsWith(`${floatingv}`);
         team3 += "1";
      if (membershipZ && (modalR.length % 4) == 5) {
         membershipZ = team3.length <= 84;
      }
      for (let o = 0; o < 3; o++) {
          let iconshareG = 4.0;
          let tickedS = String.fromCharCode(108,95,56,50,95,100,105,115,112,108,97,121,0);
          let ballY = 3.0;
          let photom: Array<any> = [346, 472, 93];
          let minivodz = 2.0;
         modalR = [parseInt(`${minivodz}`) >> (Math.min(1, Math.abs(1)))];
         iconshareG += parseFloat(`${3}`);
         tickedS = "2";
         ballY += parseFloat(`${tickedS.length << (Math.min(4, Math.abs(parseInt(`${ballY}`))))}`);
         photom.push(parseInt(`${iconshareG}`));
         minivodz -= 1;
      }
      while (membershipZ) {
         floatingv *= parseFloat(`${3}`);
         break;
      }
         ewardedk = (((!membershipZ ? team3.length : 63) % (Math.max(team3.length, 3))) == 63);
       let predictiondefaultp = false;
       let tickedO = false;
         floatingv *= (parseFloat(`${(tickedO ? 1 : 1) ^ (membershipZ ? 4 : 3)}`));
          let thumbnailM = String.fromCharCode(100,101,98,108,111,99,107,105,110,103,95,54,95,50,55,0);
         floatingv /= Math.max((parseFloat(`${(ewardedk ? 2 : 1) & thumbnailM.length}`)), 1);
         ewardedk = (predictiondefaultp ? tickedO : predictiondefaultp);
         modalR = [parseInt(`${floatingv}`)];
       let nalyticsT = true;
       let fastforwardW = true;
      let plus0 = nalyticsT ? !nalyticsT : nalyticsT;
      do {
         nalyticsT = modalR.length >= 46;
         if (plus0) {
            break;
         }
      } while ((!nalyticsT) && plus0);
      libavfilter6 = 77 <= umengK.length;
   }
   let dependencyr = indicatorG == String.fromCharCode(49,120,50,111,119,98,0);
   do {
       let pathV = 5;
       let colorsN: Map<any, any> = new Map([[String.fromCharCode(116,95,53,48,95,115,101,114,105,97,108,110,111,0),538], [String.fromCharCode(112,97,121,108,111,97,100,95,97,95,51,52,0),142], [String.fromCharCode(99,104,101,99,107,101,100,95,50,95,50,56,0),47]]);
       let catalogd = String.fromCharCode(115,111,108,118,101,100,95,53,95,51,49,0);
       let libjsir = 4.0;
       let nativeJ: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,97,116,105,111,110,95,119,95,56,51,0),266], [String.fromCharCode(116,104,114,101,115,104,111,108,100,101,100,95,104,95,57,56,0),498], [String.fromCharCode(97,115,99,98,110,95,102,95,51,0),748]]);
          let sigmobh = 0.0;
         libjsir *= nativeJ.size | pathV;
         sigmobh /= Math.max(2, parseInt(`${sigmobh}`));
      if (4.32 > (libjsir + 3.65) || 1 > (nativeJ.size + 3)) {
         libjsir += 2;
      }
      if (2 > (colorsN.size * nativeJ.size) || 2 > (nativeJ.size * colorsN.size)) {
          let smallP = 1.0;
          let reddownarrowS = String.fromCharCode(109,117,108,116,105,98,97,115,101,95,118,95,51,57,0);
          let formL = 2.0;
          let projectl = String.fromCharCode(114,95,54,55,95,114,101,112,111,114,116,115,0);
         nativeJ.set(`${pathV}`, 1);
         smallP *= parseFloat(`${2 ^ projectl.length}`);
         reddownarrowS = `${parseInt(`${smallP}`) << (Math.min(reddownarrowS.length, 1))}`;
         formL *= (parseFloat(`${String.fromCharCode(120,0) == reddownarrowS ? reddownarrowS.length : parseInt(`${smallP}`)}`));
         projectl = `${projectl.length}`;
      }
         pathV <<= Math.min(4, Math.abs(nativeJ.size));
      if (!catalogd.includes(`${pathV}`)) {
         pathV >>= Math.min(Math.abs(2), 3);
      }
      if ((5.29 / (Math.max(8, libjsir))) < 4.14) {
          let arrowX = String.fromCharCode(108,97,110,100,109,105,110,101,115,95,52,95,57,54,0);
         catalogd = "2";
         arrowX += `${(String.fromCharCode(106,0) == arrowX ? arrowX.length : arrowX.length)}`;
      }
      while ((colorsN.size & 5) == 3 && (5 & colorsN.size) == 2) {
         colorsN = new Map([[catalogd, 3 >> (Math.min(5, Math.abs(parseInt(`${libjsir}`))))]]);
         break;
      }
      let binddatasQ = 5145220 >= pathV;
      do {
         pathV *= 2;
         if (binddatasQ) {
            break;
         }
      } while ((!Array.from(nativeJ.values()).includes(pathV)) && binddatasQ);
         catalogd += `${2 / (Math.max(8, parseInt(`${libjsir}`)))}`;
      if (1 < colorsN.size) {
         nativeJ.set(`${colorsN.size}`, nativeJ.size + 3);
      }
         colorsN = new Map([[`${nativeJ.size}`, 3]]);
         pathV <<= Math.min(5, catalogd.length);
      while ((catalogd.length / (Math.max(2, 8))) > 5) {
         colorsN.set(`${libjsir}`, 1);
         break;
      }
      if (2 > (1 - pathV)) {
         catalogd += `${nativeJ.size | parseInt(`${libjsir}`)}`;
      }
          let uimanagerB: Array<any> = [970, 574];
          let penaltymatchicon_ = String.fromCharCode(118,97,114,105,97,100,105,99,95,102,95,50,49,0);
          let graphics1 = true;
         nativeJ.set(penaltymatchicon_, 3 % (Math.max(8, pathV)));
         uimanagerB.push((3 - (graphics1 ? 4 : 1)));
         penaltymatchicon_ += "1";
      indicatorG = `${3 >> (Math.min(5, subinC.length))}`;
      if (dependencyr) {
         break;
      }
   } while ((subinC != indicatorG) && dependencyr);
   let encryptM = projectJ.length <= 9524530;
   do {
      projectJ += `${(projectJ == String.fromCharCode(89,0) ? animations0.length : projectJ.length)}`;
      if (encryptM) {
         break;
      }
   } while (encryptM && (3 >= (projectJ.length % 1) || 5 >= (projectJ.length % 1)));
      paginationS = [3 + animations0.length];
   let window_1U = 7728692 >= rncoreP;
   do {
      rncoreP *= 1;
      if (window_1U) {
         break;
      }
   } while (((subinC.length & 1) >= 1 || (subinC.length & rncoreP) >= 1) && window_1U);

      if (
        autoPlayNext &&
        activeEpisode !== undefined &&
        episodes &&
        activeEpisode < episodes?.url_count - 1
      ) {

   while (umengK.endsWith(projectJ)) {
      umengK += `${((register_gs ? 2 : 3) % 1)}`;
      break;
   }
   let loginZ = paginationS.length <= 5248578;
   do {
      paginationS = [langkeyc.length - 2];
      if (loginZ) {
         break;
      }
   } while (loginZ && (!paginationS.includes(ewardedN)));
   for (let m = 0; m < 1; m++) {
       let hooks2 = 4.0;
       let resultS = String.fromCharCode(115,95,50,48,95,112,114,105,110,116,0);
      if (4 >= (resultS.length ^ 1)) {
          let inactives = String.fromCharCode(115,119,97,112,112,97,98,108,101,95,118,95,50,54,0);
         resultS += `${parseInt(`${hooks2}`) + inactives.length}`;
      }
          let sellmathbackgroundG: Map<any, any> = new Map([[String.fromCharCode(103,95,49,48,48,95,114,101,97,108,108,111,99,0),775], [String.fromCharCode(114,95,51,95,103,97,109,109,97,0),846]]);
          let topon6 = String.fromCharCode(102,105,110,103,101,114,95,100,95,48,0);
         resultS += `${1 >> (Math.min(5, Math.abs(parseInt(`${hooks2}`))))}`;
         sellmathbackgroundG = new Map([[`${sellmathbackgroundG.size}`, 3]]);
         topon6 += `${2 / (Math.max(9, topon6.length))}`;
      if (3 >= (5 | resultS.length)) {
         resultS += `${parseInt(`${hooks2}`)}`;
      }
          let dycreatorp: Array<any> = [103, 630, 725];
          let shrink3 = 4.0;
          let philippinesb = true;
         resultS = `${1 >> (Math.min(Math.abs(parseInt(`${shrink3}`)), 2))}`;
         dycreatorp = [dycreatorp.length];
         shrink3 *= parseFloat(`${dycreatorp.length}`);
      for (let d = 0; d < 2; d++) {
          let homeinactivez = String.fromCharCode(122,99,111,110,118,111,108,118,101,95,102,95,56,53,0);
          let launchero = false;
          let regeng_ = String.fromCharCode(97,95,55,50,95,115,117,98,112,101,108,0);
         resultS = `${1 + regeng_.length}`;
         homeinactivez += `${1 + homeinactivez.length}`;
         launchero = (90 > ((launchero ? homeinactivez.length : 90) - homeinactivez.length));
         regeng_ = `${1 << (Math.min(4, homeinactivez.length))}`;
      }
       let umengN: Array<any> = [383, 880, 635];
      projectJ = `${((libavfilter6 ? 5 : 2) | animations0.length)}`;
   }
   while (langkeyc.startsWith(`${ewardedN}`)) {
       let checkboxt = false;
         checkboxt = (checkboxt ? !checkboxt : checkboxt);
         checkboxt = !checkboxt;
         checkboxt = (!checkboxt ? !checkboxt : !checkboxt);
      ewardedN *= 1;
      break;
   }
      langkeyc = "1";
      animations0.push(animations0.length | umengK.length);
   while (langkeyc.startsWith(`${macauh.size}`)) {
      macauh.set(langkeyc, umengK.length);
      break;
   }
       let greyQ = 1.0;
       let collectiono = String.fromCharCode(118,101,114,105,102,105,97,116,105,111,110,95,120,95,48,0);
       let gradlewW = 2;
      let librrc4 = greyQ <= 8511640.0;
      do {
         greyQ += parseFloat(`${collectiono.length}`);
         if (librrc4) {
            break;
         }
      } while (((greyQ - 4.62) >= 1.26) && librrc4);
      if ((gradlewW * collectiono.length) == 3) {
         collectiono = `${collectiono.length & 3}`;
      }
      while ((2 & collectiono.length) < 5) {
          let textlayoutmanagerG = String.fromCharCode(121,95,56,48,95,115,116,114,101,97,109,102,111,117,114,99,99,0);
          let whistleY: Array<any> = [557, 561];
         collectiono += `${collectiono.length + gradlewW}`;
         textlayoutmanagerG = `${whistleY.length & textlayoutmanagerG.length}`;
         whistleY.push(whistleY.length);
         break;
      }
      for (let i = 0; i < 3; i++) {
          let friendsd = 4.0;
         gradlewW += 1 + parseInt(`${friendsd}`);
      }
         greyQ -= parseFloat(`${collectiono.length}`);
      while (2 >= (collectiono.length * 1) || 4 >= (collectiono.length * 1)) {
         gradlewW ^= 3;
         break;
      }
          let redirectT = String.fromCharCode(112,108,111,116,116,101,114,95,113,95,57,49,0);
          let countryR = 3.0;
          let inouttargetredz = String.fromCharCode(99,111,110,116,111,117,114,115,95,116,95,57,53,0);
         collectiono += `${inouttargetredz.length / (Math.max(2, 9))}`;
         redirectT += `${redirectT.length >> (Math.min(1, Math.abs(parseInt(`${countryR}`))))}`;
         countryR += 3;
         inouttargetredz = `${(String.fromCharCode(84,0) == redirectT ? redirectT.length : parseInt(`${countryR}`))}`;
         gradlewW ^= parseInt(`${greyQ}`);
          let iconcalendarf = 0;
         gradlewW %= Math.max(iconcalendarf * parseInt(`${greyQ}`), 3);
      register_gs = 61 > macauh.size;
      libavfilter6 = ewardedN <= 16;
   for (let z = 0; z < 1; z++) {
      ewardedN += ((libavfilter6 ? 5 : 5));
   }
   for (let u = 0; u < 3; u++) {
      umengK += `${3 * paginationS.length}`;
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
       let gestures7 = 3.0;
    let shootyesgoald = String.fromCharCode(112,111,116,105,115,105,111,110,95,53,95,56,50,0);
    let overi = String.fromCharCode(102,95,54,48,95,111,114,105,103,105,110,0);
    let basea = 2;
    let defaultteamd = String.fromCharCode(100,101,114,101,102,95,121,95,53,53,0);
    let viewsT = 5.0;
    let icontransferclubV: Array<any> = [String.fromCharCode(112,101,97,99,104,95,100,95,49,49,0), String.fromCharCode(112,105,120,99,116,120,95,107,95,52,56,0), String.fromCharCode(108,95,50,57,95,118,105,100,101,111,104,100,114,0)];
    let tailv = String.fromCharCode(117,95,49,48,48,95,115,116,97,107,101,0);
    let predictionarrowj = String.fromCharCode(97,118,105,111,95,113,95,51,52,0);
    let mutedu = 3.0;
      icontransferclubV = [(tailv == String.fromCharCode(52,0) ? tailv.length : parseInt(`${viewsT}`))];
      gestures7 += parseFloat(`${3 % (Math.max(4, basea))}`);
   while (2 <= tailv.length || overi == String.fromCharCode(71,0)) {
      overi += "3";
      break;
   }
       let exampleimageG: Map<any, any> = new Map([[String.fromCharCode(102,102,112,108,97,121,95,52,95,55,53,0),140], [String.fromCharCode(114,95,56,50,95,115,101,116,116,105,109,101,111,117,116,0),558], [String.fromCharCode(110,117,109,115,95,118,95,51,55,0),101]]);
       let pressure0 = 1;
       let schedulerF = 3.0;
       let loginH: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,115,95,51,95,54,54,0),508], [String.fromCharCode(116,95,49,57,95,118,97,114,108,101,110,0),982]]);
       let nbatrophyl: Map<any, any> = new Map([[String.fromCharCode(117,114,97,110,100,111,109,95,52,95,50,56,0),708], [String.fromCharCode(115,101,110,100,118,95,117,95,52,53,0),708], [String.fromCharCode(118,101,114,116,101,120,95,110,95,52,55,0),11]]);
         schedulerF -= parseFloat(`${pressure0}`);
      while (loginH.size < exampleimageG.size) {
         exampleimageG.set(`${schedulerF}`, 1 | parseInt(`${schedulerF}`));
         break;
      }
          let streaming5 = String.fromCharCode(118,95,49,95,116,105,116,108,101,0);
         schedulerF *= parseFloat(`${streaming5.length ^ parseInt(`${schedulerF}`)}`);
      if (pressure0 < exampleimageG.size) {
         pressure0 *= exampleimageG.size;
      }
      for (let m = 0; m < 1; m++) {
         pressure0 /= Math.max(4, exampleimageG.size * parseInt(`${schedulerF}`));
      }
         nbatrophyl = new Map([[`${loginH.size}`, loginH.size]]);
      while ((loginH.size ^ 2) < 2 || (2 ^ loginH.size) < 5) {
         nbatrophyl = new Map([[`${loginH.size}`, 1]]);
         break;
      }
         loginH = new Map([[`${loginH.size}`, pressure0 << (Math.min(Math.abs(loginH.size), 5))]]);
      tailv = "2";
   for (let d = 0; d < 1; d++) {
      defaultteamd += `${basea << (Math.min(Math.abs(2), 4))}`;
   }
   while (shootyesgoald.includes(`${gestures7}`)) {
      gestures7 /= Math.max(4, parseFloat(`${tailv.length % (Math.max(1, 8))}`));
      break;
   }
   if (5 <= (overi.length ^ basea) || (basea ^ overi.length) <= 5) {
      overi += `${2 * overi.length}`;
   }
       let libglogI = 0.0;
       let iconI = 0.0;
       let controlsX = 5.0;
       let elementsy: Map<any, any> = new Map([[String.fromCharCode(104,97,115,104,100,101,115,116,114,111,121,95,48,95,51,54,0),String.fromCharCode(110,117,109,115,95,52,95,55,50,0)], [String.fromCharCode(117,95,50,48,95,97,101,118,97,108,0),String.fromCharCode(99,108,111,115,101,95,109,95,57,56,0)], [String.fromCharCode(102,105,110,97,108,105,122,105,110,103,95,54,95,52,53,0),String.fromCharCode(109,117,108,116,105,112,97,114,116,95,119,95,49,52,0)]]);
      while (2.29 >= iconI) {
          let subina = String.fromCharCode(98,117,99,107,101,116,115,95,113,95,52,56,0);
          let librrcT = 0.0;
          let kickz = String.fromCharCode(120,95,56,56,95,116,104,114,111,119,105,110,103,0);
          let templateprocessorU = String.fromCharCode(116,95,53,53,95,114,97,105,110,0);
          let librrcF = String.fromCharCode(102,105,120,115,116,114,105,100,101,95,57,95,49,0);
         controlsX /= Math.max(1, parseFloat(`${templateprocessorU.length}`));
         subina += `${kickz.length << (Math.min(Math.abs(2), 5))}`;
         librrcT /= Math.max(2, parseInt(`${librrcT}`) >> (Math.min(librrcF.length, 4)));
         kickz += `${subina.length}`;
         templateprocessorU += "1";
         librrcF += `${kickz.length}`;
         break;
      }
      let rankD = 8519588.0 <= controlsX;
      do {
         controlsX -= parseFloat(`${parseInt(`${iconI}`)}`);
         if (rankD) {
            break;
         }
      } while (rankD && (4.49 >= (controlsX - 4.25) && (elementsy.size - parseInt(`${controlsX}`)) >= 5));
          let resultL = 5.0;
          let checkbox0 = 5.0;
          let mimeh: Array<any> = [2, 560];
         controlsX -= parseFloat(`${elementsy.size}`);
         resultL -= parseFloat(`${parseInt(`${checkbox0}`)}`);
         checkbox0 += parseFloat(`${parseInt(`${checkbox0}`) | 3}`);
         mimeh = [parseInt(`${resultL}`)];
      for (let j = 0; j < 1; j++) {
         libglogI /= Math.max(1, parseFloat(`${elementsy.size}`));
      }
         iconI *= parseFloat(`${elementsy.size}`);
         elementsy.set(`${iconI}`, parseInt(`${libglogI}`) ^ 2);
         controlsX /= Math.max(parseFloat(`${parseInt(`${libglogI}`)}`), 1);
      for (let y = 0; y < 3; y++) {
         libglogI -= parseFloat(`${parseInt(`${iconI}`)}`);
      }
      defaultteamd = `${shootyesgoald.length ^ 3}`;
   while ((icontransferclubV.length >> (Math.min(shootyesgoald.length, 5))) <= 3 || 3 <= (3 >> (Math.min(5, icontransferclubV.length)))) {
      shootyesgoald += `${2 & overi.length}`;
      break;
   }
      defaultteamd += `${defaultteamd.length % (Math.max(tailv.length, 1))}`;
      shootyesgoald += `${3 - parseInt(`${gestures7}`)}`;
   for (let p = 0; p < 1; p++) {
      gestures7 -= parseFloat(`${basea | overi.length}`);
   }
   let searchbark = 9377130 >= icontransferclubV.length;
   do {
       let profilepicC = true;
       let catalogs = String.fromCharCode(118,95,54,95,105,110,100,101,120,97,98,108,101,0);
       let injuryH = true;
       let index3 = String.fromCharCode(115,101,97,114,99,104,101,100,95,54,95,52,56,0);
       let blackc = 1.0;
         profilepicC = catalogs == String.fromCharCode(57,0) || 1.35 < blackc;
      if (!injuryH || 2 < catalogs.length) {
          let basketballW = String.fromCharCode(112,95,51,95,115,116,101,109,109,101,114,0);
         catalogs = `${(String.fromCharCode(101,0) == index3 ? basketballW.length : index3.length)}`;
      }
      let countdownS = profilepicC ? !profilepicC : profilepicC;
      do {
          let bottomr = String.fromCharCode(106,95,53,55,95,115,104,97,114,101,100,0);
          let selectione: Map<any, any> = new Map([[String.fromCharCode(110,101,101,100,101,100,95,111,95,54,54,0),810], [String.fromCharCode(101,95,56,49,95,121,97,98,101,0),147]]);
          let submith = String.fromCharCode(111,95,56,57,95,101,109,117,108,97,116,101,0);
          let subinC = String.fromCharCode(117,95,54,57,95,110,105,108,115,0);
         profilepicC = 93 < selectione.size || String.fromCharCode(108,0) == submith;
         bottomr = `${(subinC == String.fromCharCode(81,0) ? subinC.length : bottomr.length)}`;
         selectione.set(bottomr, bottomr.length);
         submith = `${(String.fromCharCode(75,0) == bottomr ? bottomr.length : subinC.length)}`;
         if (countdownS) {
            break;
         }
      } while (countdownS && (!catalogs.endsWith(`${profilepicC}`)));
          let codegenu = String.fromCharCode(113,95,49,53,95,99,111,110,102,105,103,0);
          let iconarrowrightorange5: Array<any> = [394, 796, 471];
         injuryH = blackc <= 28.74 || codegenu.length <= 41;
         codegenu = `${2 * iconarrowrightorange5.length}`;
         iconarrowrightorange5 = [2 | iconarrowrightorange5.length];
      for (let w = 0; w < 1; w++) {
         index3 = `${parseInt(`${blackc}`)}`;
      }
      if (!profilepicC) {
          let calendarD = String.fromCharCode(115,116,114,101,97,109,95,55,95,50,53,0);
          let benefitQ = 1.0;
         index3 = `${calendarD.length}`;
         calendarD = "2";
         benefitQ /= Math.max(3, parseInt(`${benefitQ}`) >> (Math.min(3, Math.abs(parseInt(`${benefitQ}`)))));
      }
      while (catalogs.length < index3.length) {
         catalogs += `${3 ^ index3.length}`;
         break;
      }
          let malaysiaI = 3.0;
          let full3 = String.fromCharCode(112,114,111,98,115,95,52,95,55,51,0);
         blackc /= Math.max(parseInt(`${blackc}`) / (Math.max(parseInt(`${malaysiaI}`), 3)), 1);
         malaysiaI *= 2;
         full3 += `${full3.length}`;
       let vertical8 = String.fromCharCode(97,95,52,54,95,97,117,116,111,109,97,116,105,99,0);
       let icondefaultthumbnailD = String.fromCharCode(105,95,55,54,95,118,98,101,122,105,101,114,0);
      if (4 <= icondefaultthumbnailD.length) {
          let footballG = 0.0;
         vertical8 += `${parseInt(`${blackc}`) * 2}`;
         footballG += parseInt(`${footballG}`) ^ parseInt(`${footballG}`);
      }
      while (!injuryH) {
         profilepicC = String.fromCharCode(65,0) == index3;
         break;
      }
      for (let t = 0; t < 2; t++) {
         injuryH = !icondefaultthumbnailD.includes(`${profilepicC}`);
      }
      if ((parseInt(`${blackc}`) / (Math.max(8, index3.length))) > 5 && 4.1 > (blackc / 5.50)) {
          let moduleG = String.fromCharCode(104,119,97,99,99,101,108,95,100,95,51,56,0);
          let renderK = 0.0;
          let classesv = String.fromCharCode(97,95,52,50,0);
         blackc /= Math.max(1, 1 - icondefaultthumbnailD.length);
         moduleG += `${moduleG.length / (Math.max(classesv.length, 4))}`;
         renderK *= parseFloat(`${moduleG.length ^ classesv.length}`);
      }
       let icontransferclub1 = String.fromCharCode(118,95,55,50,95,99,97,109,101,108,0);
       let homeactiveJ = String.fromCharCode(99,95,52,53,95,114,101,102,101,114,101,110,101,0);
      let penaltyshootP = String.fromCharCode(105,56,116,115,0) == icontransferclub1;
      do {
         icontransferclub1 += `${icondefaultthumbnailD.length % 1}`;
         if (penaltyshootP) {
            break;
         }
      } while (penaltyshootP && (icontransferclub1.length <= vertical8.length));
      icontransferclubV.push((shootyesgoald == String.fromCharCode(52,0) ? overi.length : shootyesgoald.length));
      if (searchbark) {
         break;
      }
   } while (searchbark && (5 > icontransferclubV.length));
   let sliderj = 9204297 <= shootyesgoald.length;
   do {
      shootyesgoald += `${(defaultteamd == String.fromCharCode(111,0) ? defaultteamd.length : parseInt(`${gestures7}`))}`;
      if (sliderj) {
         break;
      }
   } while (sliderj && ((shootyesgoald.length ^ 3) < 2 && (shootyesgoald.length % 3) < 4));
       let cleara = 0.0;
      if ((1.85 * cleara) > 3.92 || (cleara * cleara) > 1.85) {
         cleara -= 1;
      }
      for (let s = 0; s < 1; s++) {
         cleara -= 3 >> (Math.min(Math.abs(parseInt(`${cleara}`)), 4));
      }
         cleara /= Math.max(parseInt(`${cleara}`), 2);
      overi = `${tailv.length * parseInt(`${viewsT}`)}`;
       let phone2: Map<any, any> = new Map([[String.fromCharCode(122,95,50,55,95,102,114,101,101,0),true ], [String.fromCharCode(120,95,50,49,95,101,121,99,104,97,105,110,0),true ]]);
       let libjsijniprofilerw = 2.0;
         phone2.set(`${libjsijniprofilerw}`, parseInt(`${libjsijniprofilerw}`) / (Math.max(phone2.size, 1)));
      if ((libjsijniprofilerw / 1.66) < 1.78) {
         phone2.set(`${libjsijniprofilerw}`, 2 | phone2.size);
      }
      while (!Array.from(phone2.keys()).includes(`${libjsijniprofilerw}`)) {
         libjsijniprofilerw -= 3;
         break;
      }
         libjsijniprofilerw /= Math.max(3, phone2.size);
      if (3 == phone2.size) {
         phone2.set(`${libjsijniprofilerw}`, parseInt(`${libjsijniprofilerw}`) * 3);
      }
          let activityB = String.fromCharCode(111,97,117,116,104,95,112,95,52,0);
          let sports9 = false;
         phone2.set(`${libjsijniprofilerw}`, parseInt(`${libjsijniprofilerw}`) % (Math.max(phone2.size, 4)));
         activityB = `${3 - activityB.length}`;
         sports9 = !sports9;
      shootyesgoald = `${1 & parseInt(`${libjsijniprofilerw}`)}`;
       let promotionS = String.fromCharCode(100,105,115,116,105,110,99,116,95,50,95,56,0);
       let championC = true;
          let iconqq5: Array<any> = [6, 260, 880];
          let crosst = String.fromCharCode(109,95,51,95,115,116,111,114,97,103,101,115,0);
         championC = iconqq5.length >= 32 || !championC;
         iconqq5 = [1];
         crosst += `${(String.fromCharCode(106,0) == crosst ? crosst.length : crosst.length)}`;
         promotionS += "1";
      for (let x = 0; x < 2; x++) {
          let pushU = String.fromCharCode(121,101,115,110,111,95,112,95,52,0);
          let thumbnaily = String.fromCharCode(115,116,114,108,105,107,101,95,118,95,56,54,0);
          let predictionbuttonr = String.fromCharCode(101,95,50,95,112,111,108,108,0);
          let issubX = String.fromCharCode(99,97,118,108,99,95,110,95,52,49,0);
         championC = thumbnaily.length >= pushU.length;
         pushU = `${issubX.length}`;
         thumbnaily = `${predictionbuttonr.length}`;
         predictionbuttonr = `${predictionbuttonr.length - 2}`;
         issubX = "2";
      }
       let minivod9: Map<any, any> = new Map([[String.fromCharCode(102,95,57,57,95,104,111,108,100,0),967], [String.fromCharCode(111,95,56,95,116,105,112,0),953], [String.fromCharCode(99,111,100,101,99,99,116,108,95,110,95,51,0),285]]);
      if (championC && promotionS.length > 4) {
          let short_x6h: Array<any> = [695, 984, 330];
          let liveshare6 = String.fromCharCode(109,117,108,116,105,98,97,115,101,95,100,95,52,53,0);
         championC = !championC && promotionS.length <= 96;
         short_x6h.push((liveshare6 == String.fromCharCode(71,0) ? liveshare6.length : short_x6h.length));
      }
       let relatedK = 0;
       let iconwatchnowN = 3;
      basea += basea / (Math.max(4, promotionS.length));
      defaultteamd += `${icontransferclubV.length}`;
       let changeu = false;
      while (!changeu) {
         changeu = !changeu;
         break;
      }
      if (!changeu) {
         changeu = !changeu;
      }
         changeu = changeu && !changeu;
      gestures7 -= parseFloat(`${2 << (Math.min(4, Math.abs(parseInt(`${viewsT}`))))}`);
      shootyesgoald = `${defaultteamd.length / 2}`;

          dispatch(incrementSportWatchTime());
        }, 1000);

        return () => clearInterval(unsub);
      }
    }, [route.name])

    
    
    
    
    

    const isVip = mayi_Gift.isVip(userState.user);

    const pauseSportVideo =
      route.name === "体育详情" &&
      screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS && !mayi_Gift.isVip(userState.user)

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
       let termsK: Map<any, any> = new Map([[String.fromCharCode(122,95,53,50,95,115,112,97,119,110,97,98,108,101,0),true ], [String.fromCharCode(99,114,99,99,95,103,95,55,0),false ], [String.fromCharCode(98,95,53,50,95,109,97,116,114,105,120,0),false ]]);
    let armvaL: Map<any, any> = new Map([[String.fromCharCode(104,97,109,98,117,114,103,101,114,95,97,95,51,50,0),936], [String.fromCharCode(120,95,52,95,115,99,97,108,101,109,111,100,101,0),503]]);
    let libavcodecg = 4.0;
    let basketballiconq = String.fromCharCode(113,95,52,52,95,121,117,118,121,97,0);
    let crossu = 2.0;
    let inviteg = 1.0;
    let loginB = String.fromCharCode(102,108,97,99,101,110,99,95,108,95,49,54,0);
    let cast1 = String.fromCharCode(115,101,114,105,97,108,108,121,95,113,95,56,57,0);
    let iconpointscoreW = String.fromCharCode(97,117,116,111,102,111,114,109,97,116,116,105,110,103,95,54,95,55,57,0);
    let push0 = false;
    let backiconY = 3.0;
    let iconclosep = 1.0;
    let iconwatchk = String.fromCharCode(112,111,115,116,105,110,103,95,122,95,53,48,0);
    let predictionbannersharedB = String.fromCharCode(110,95,54,55,95,111,97,101,112,0);
    let long_uki = true;
    let templateprocessors: Map<any, any> = new Map([[String.fromCharCode(119,95,54,50,95,114,111,117,110,100,110,101,115,115,0),465], [String.fromCharCode(114,101,99,101,105,112,116,115,95,113,95,54,52,0),566], [String.fromCharCode(115,116,105,108,108,95,57,95,52,55,0),8]]);
   let iconsaveimage2 = termsK.size >= 8904416;
   do {
       let with_qY = 5.0;
       let whitetickp = 1.0;
      let home5 = 7516359.0 >= whitetickp;
      do {
          let iconorientationc = String.fromCharCode(116,101,108,108,95,55,95,55,56,0);
          let basek = 4.0;
          let promotionP: Map<any, any> = new Map([[String.fromCharCode(100,95,49,56,95,109,111,100,101,108,115,0),189], [String.fromCharCode(116,105,109,105,110,103,115,95,110,95,50,0),822], [String.fromCharCode(118,95,48,95,103,114,97,118,105,116,121,0),525]]);
          let mbridge4 = String.fromCharCode(98,95,54,57,95,109,97,115,116,101,114,105,110,103,0);
         whitetickp -= parseFloat(`${iconorientationc.length / (Math.max(3, parseInt(`${basek}`)))}`);
         iconorientationc += `${(mbridge4 == String.fromCharCode(122,0) ? mbridge4.length : promotionP.size)}`;
         basek += parseFloat(`${mbridge4.length % 1}`);
         promotionP = new Map([[`${promotionP.size}`, 2 * promotionP.size]]);
         if (home5) {
            break;
         }
      } while ((3.78 < (with_qY - 5.86) && 3.56 < (5.86 - whitetickp)) && home5);
         whitetickp /= Math.max(5, parseFloat(`${parseInt(`${with_qY}`)}`));
          let manifestp = String.fromCharCode(105,95,52,57,95,115,112,97,99,101,115,0);
         whitetickp *= parseFloat(`${parseInt(`${with_qY}`)}`);
         manifestp = `${(manifestp == String.fromCharCode(75,0) ? manifestp.length : manifestp.length)}`;
      if ((with_qY / 3.22) <= 2.51 && (3.22 * whitetickp) <= 2.58) {
          let eabafadfadddbafeddddeeefeaafe = String.fromCharCode(110,95,51,57,95,104,111,115,116,115,0);
          let containerB = true;
         with_qY -= parseFloat(`${parseInt(`${with_qY}`) / (Math.max(4, parseInt(`${whitetickp}`)))}`);
         eabafadfadddbafeddddeeefeaafe = `${((containerB ? 5 : 3))}`;
         containerB = !containerB;
      }
      while (with_qY == whitetickp) {
         whitetickp /= Math.max(4, parseFloat(`${parseInt(`${with_qY}`)}`));
         break;
      }
       let libjsinspectorO: Map<any, any> = new Map([[String.fromCharCode(115,95,53,52,95,111,118,101,114,115,99,114,111,108,108,105,110,103,0),824], [String.fromCharCode(108,111,119,101,114,95,50,95,53,57,0),549], [String.fromCharCode(109,95,56,57,95,112,117,98,101,120,112,0),511]]);
       let reactnativeultimatelistviewR: Map<any, any> = new Map([[String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,100,97,116,97,95,109,95,56,51,0),414], [String.fromCharCode(108,115,112,102,108,112,99,95,101,95,54,55,0),888]]);
      termsK.set(`${inviteg}`, parseInt(`${inviteg}`) - parseInt(`${crossu}`));
      if (iconsaveimage2) {
         break;
      }
   } while (iconsaveimage2 && (iconpointscoreW.length >= 4));
       let becomep = false;
       let firebaseL: Array<any> = [415, 411, 832];
         firebaseL = [firebaseL.length];
       let defaultlogou: Array<any> = [843, 745];
       let adult0: Array<any> = [740, 128, 361];
      for (let w = 0; w < 3; w++) {
         becomep = (firebaseL.length ^ defaultlogou.length) >= 89;
      }
      for (let l = 0; l < 3; l++) {
          let circleB: Array<any> = [503, 294];
          let xnewinterstitialR: Map<any, any> = new Map([[String.fromCharCode(103,95,52,57,95,97,110,110,117,108,97,114,0),308], [String.fromCharCode(107,95,52,56,95,114,102,116,98,115,117,98,0),654]]);
         defaultlogou.push(((becomep ? 2 : 1) % (Math.max(1, 4))));
         circleB.push(xnewinterstitialR.size);
         xnewinterstitialR.set(`${circleB.length}`, circleB.length % 2);
      }
      let rewardT = defaultlogou.length <= 7573717;
      do {
          let mbsplashW: Map<any, any> = new Map([[String.fromCharCode(114,101,102,115,95,113,95,56,52,0),372], [String.fromCharCode(109,95,53,54,95,115,121,115,108,111,103,0),100], [String.fromCharCode(109,95,49,48,48,95,104,97,108,100,99,108,117,116,0),460]]);
          let sinas = 5.0;
          let iconarrowrightorangeL: Map<any, any> = new Map([[String.fromCharCode(102,95,50,56,95,102,117,110,99,0),String.fromCharCode(99,95,56,53,95,111,112,116,105,111,110,97,108,108,121,0)], [String.fromCharCode(108,95,50,52,95,108,105,98,120,118,105,100,0),String.fromCharCode(109,98,101,100,103,101,95,104,95,48,0)]]);
         defaultlogou = [defaultlogou.length << (Math.min(adult0.length, 4))];
         mbsplashW = new Map([[`${iconarrowrightorangeL.size}`, 2 * parseInt(`${sinas}`)]]);
         sinas += 2;
         iconarrowrightorangeL.set(`${mbsplashW.size}`, 1 ^ mbsplashW.size);
         if (rewardT) {
            break;
         }
      } while (rewardT && (!becomep));
         becomep = adult0.length == 94;
      cast1 += `${(String.fromCharCode(99,0) == cast1 ? cast1.length : armvaL.size)}`;

      if (!playerVodAds?.actionUrl) {

   for (let k = 0; k < 3; k++) {
       let pager = String.fromCharCode(108,95,56,56,95,99,111,108,108,101,99,116,105,98,108,101,115,0);
       let nodeR = String.fromCharCode(121,118,116,111,121,117,121,95,97,95,50,56,0);
          let diceD = String.fromCharCode(118,95,57,51,95,116,114,116,97,98,108,101,0);
         nodeR += `${pager.length}`;
         diceD = `${diceD.length >> (Math.min(Math.abs(2), 5))}`;
      while (!nodeR.includes(`${pager.length}`)) {
          let taila = String.fromCharCode(109,95,49,52,95,104,111,114,105,122,111,110,116,97,108,108,121,0);
          let m_positionG = 5.0;
          let iconuserP = true;
          let largesoundN = String.fromCharCode(104,95,56,54,95,108,105,98,99,111,100,101,99,0);
         pager = `${(String.fromCharCode(71,0) == nodeR ? largesoundN.length : nodeR.length)}`;
         taila += `${3 - parseInt(`${m_positionG}`)}`;
         m_positionG *= parseFloat(`${taila.length}`);
         iconuserP = taila.includes(`${m_positionG}`);
         largesoundN = `${2 << (Math.min(5, Math.abs(parseInt(`${m_positionG}`))))}`;
         break;
      }
       let libloggere: Map<any, any> = new Map([[String.fromCharCode(122,101,114,111,118,95,52,95,48,0),String.fromCharCode(100,101,99,101,108,101,114,97,116,105,110,103,95,108,95,52,55,0)], [String.fromCharCode(116,121,112,101,100,101,102,115,95,112,95,53,0),String.fromCharCode(111,118,97,108,95,109,95,50,0)], [String.fromCharCode(114,95,51,55,95,116,100,108,116,0),String.fromCharCode(121,95,57,55,95,97,99,99,101,115,115,0)]]);
      if (pager.length == 4) {
          let kuaishou_ = 0.0;
          let mbnativeH: Array<any> = [301, 430, 430];
          let libruntimeexecutorY = 0;
          let tempnodatagifR = String.fromCharCode(115,101,103,102,101,97,116,117,114,101,115,95,97,95,49,50,0);
          let stepS: Map<any, any> = new Map([[String.fromCharCode(109,97,99,114,111,95,111,95,55,55,0),226], [String.fromCharCode(116,95,49,49,95,102,114,101,101,100,111,109,0),800], [String.fromCharCode(121,95,50,50,95,119,105,108,100,99,97,114,100,0),186]]);
         pager = `${1 | parseInt(`${kuaishou_}`)}`;
         kuaishou_ *= parseFloat(`${3}`);
         mbnativeH = [stepS.size];
         libruntimeexecutorY /= Math.max(2, tempnodatagifR.length << (Math.min(4, Math.abs(stepS.size))));
         tempnodatagifR += "2";
      }
         nodeR = `${nodeR.length}`;
          let libflipperC = 0.0;
          let middlewareH = 1.0;
          let favoritel = false;
         nodeR += `${nodeR.length}`;
         libflipperC /= Math.max(parseInt(`${middlewareH}`) >> (Math.min(2, Math.abs(3))), 3);
         middlewareH -= 2 | parseInt(`${libflipperC}`);
         favoritel = libflipperC > 99.23;
      crossu *= 2;
   }
      termsK.set(`${armvaL.size}`, 1);
        

   while (basketballiconq.length > 1) {
      iconpointscoreW += "1";
      break;
   }
       let predictionactivee = String.fromCharCode(114,101,99,118,118,95,56,95,49,48,0);
       let elementsG = String.fromCharCode(111,95,49,48,95,115,116,111,114,101,102,114,97,109,101,0);
          let historyT = 5.0;
          let shrinkW = false;
         elementsG = `${2 >> (Math.min(3, elementsG.length))}`;
         historyT *= (parseFloat(`${parseInt(`${historyT}`) >> (Math.min(5, Math.abs((shrinkW ? 4 : 4))))}`));
         shrinkW = 51.81 < historyT;
          let cornerkicka = 4.0;
          let starA = 5.0;
         predictionactivee = `${2 | parseInt(`${starA}`)}`;
         cornerkicka -= parseFloat(`${parseInt(`${cornerkicka}`) * parseInt(`${cornerkicka}`)}`);
         starA += parseInt(`${cornerkicka}`) | parseInt(`${cornerkicka}`);
      if (5 == predictionactivee.length) {
         elementsG += `${elementsG.length}`;
      }
         predictionactivee += "3";
      let giftp = predictionactivee.length <= 8006341;
      do {
         predictionactivee += "2";
         if (giftp) {
            break;
         }
      } while (giftp && (5 <= predictionactivee.length));
      let iconarrowright7 = String.fromCharCode(106,101,97,101,0) == predictionactivee;
      do {
         predictionactivee = "1";
         if (iconarrowright7) {
            break;
         }
      } while (iconarrowright7 && (elementsG.endsWith(predictionactivee)));
      loginB += `${parseInt(`${backiconY}`) * 3}`;
        mayi_push.playsAdsClickAnalytics();

      inviteg -= parseInt(`${backiconY}`);
      crossu += cast1.length & basketballiconq.length;
        

   let telegramY = 6751192 >= loginB.length;
   do {
      loginB += `${(cast1.length + (push0 ? 3 : 5))}`;
      if (telegramY) {
         break;
      }
   } while (telegramY && (3 > (loginB.length / 5) || (loginB.length * parseInt(`${libavcodecg}`)) > 5));
      basketballiconq += `${3 % (Math.max(9, parseInt(`${crossu}`)))}`;

        if (onPressCountdown) onPressCountdown();

       let fastV = String.fromCharCode(119,95,52,51,95,99,99,105,116,116,0);
       let heji2: Array<any> = [119, 339, 964];
      let rncoreK = 5374986 <= heji2.length;
      do {
         heji2.push(fastV.length);
         if (rncoreK) {
            break;
         }
      } while ((heji2.length == 4) && rncoreK);
         fastV += `${heji2.length ^ 2}`;
         heji2.push(fastV.length);
      for (let l = 0; l < 2; l++) {
         fastV = `${fastV.length}`;
      }
      for (let u = 0; u < 1; u++) {
         heji2 = [(fastV == String.fromCharCode(120,0) ? heji2.length : fastV.length)];
      }
      let vertical1 = heji2.length >= 8734597;
      do {
         heji2.push(heji2.length << (Math.min(Math.abs(3), 5)));
         if (vertical1) {
            break;
         }
      } while (vertical1 && ((fastV.length >> (Math.min(Math.abs(5), 3))) > 2 && 4 > (heji2.length >> (Math.min(Math.abs(5), 3)))));
      crossu += cast1.length;
       let verticalb = String.fromCharCode(108,95,52,54,95,117,110,109,105,110,105,109,105,122,101,0);
         verticalb = "2";
      if (!verticalb.includes(verticalb)) {
         verticalb = `${verticalb.length}`;
      }
       let defaultfootballbgS = String.fromCharCode(120,95,56,51,95,114,116,114,101,101,110,111,100,101,0);
      libavcodecg -= parseFloat(`${armvaL.size - 1}`);
        return;

      libavcodecg -= parseFloat(`${termsK.size << (Math.min(cast1.length, 4))}`);
       let downloaderR = 1.0;
       let tailE = 4;
       let embedX = 5.0;
         tailE >>= Math.min(4, Math.abs(tailE % 3));
       let paginationB = String.fromCharCode(115,99,99,111,110,102,105,103,95,49,95,51,57,0);
       let goal8 = String.fromCharCode(101,95,56,54,95,112,114,101,116,101,110,100,0);
          let s_titleW = true;
         tailE ^= ((s_titleW ? 5 : 5) + tailE);
          let statisticsinactiveD = String.fromCharCode(113,95,49,56,95,109,111,118,101,109,101,110,116,0);
         paginationB = `${tailE / (Math.max(paginationB.length, 2))}`;
         statisticsinactiveD += `${statisticsinactiveD.length}`;
         goal8 += `${paginationB.length}`;
      if (!paginationB.endsWith(`${goal8.length}`)) {
         goal8 += `${tailE}`;
      }
      let bootA = downloaderR >= 7810583.0;
      do {
         downloaderR += parseFloat(`${tailE << (Math.min(Math.abs(parseInt(`${downloaderR}`)), 5))}`);
         if (bootA) {
            break;
         }
      } while ((5.88 > downloaderR) && bootA);
      if (goal8.length < 3) {
          let arrow8 = String.fromCharCode(105,110,99,108,117,100,101,115,95,52,95,49,54,0);
         goal8 = `${2 / (Math.max(parseInt(`${downloaderR}`), 8))}`;
         arrow8 += "3";
      }
      for (let j = 0; j < 3; j++) {
          let temp0 = 1.0;
          let footballl = String.fromCharCode(111,95,57,49,95,119,105,114,101,0);
          let helperW = 2;
         goal8 = `${3 / (Math.max(parseInt(`${temp0}`), 9))}`;
         temp0 += parseFloat(`${footballl.length}`);
         footballl += `${helperW / (Math.max(footballl.length, 3))}`;
         helperW &= 2;
      }
      termsK.set(`${downloaderR}`, 1 >> (Math.min(1, iconpointscoreW.length)));
      }

      const url = playerVodAds?.actionUrl.includes(PenaltyshootnogoalShielddone.placeholderSkipChartIconnotifi([66,94,94,90,42],0x2A,false)) ? playerVodAds?.actionUrl : PenaltyshootnogoalShielddone.placeholderSkipChartIconnotifi([41,53,53,49,50,123,110,110,65],0x41,false) + playerVodAds?.actionUrl

      

   let auto_72v = String.fromCharCode(107,115,104,50,56,49,104,104,51,0) == cast1;
   do {
      cast1 += `${(String.fromCharCode(105,0) == iconpointscoreW ? parseInt(`${iconclosep}`) : iconpointscoreW.length)}`;
      if (auto_72v) {
         break;
      }
   } while (auto_72v && (iconpointscoreW.startsWith(cast1)));
   let hoverF = 5584728 <= armvaL.size;
   do {
      armvaL = new Map([[`${push0}`, 1]]);
      if (hoverF) {
         break;
      }
   } while (hoverF && (1 == armvaL.size));
      

   if (cast1.endsWith(`${push0}`)) {
      push0 = basketballiconq.length >= 42;
   }
      iconclosep *= parseInt(`${inviteg}`) >> (Math.min(1, Math.abs(3)));

      

   let score0 = cast1 == String.fromCharCode(54,49,52,51,110,48,0);
   do {
      cast1 = `${(String.fromCharCode(122,0) == loginB ? parseInt(`${backiconY}`) : loginB.length)}`;
      if (score0) {
         break;
      }
   } while ((iconpointscoreW.length <= 1) && score0);
   for (let u = 0; u < 3; u++) {
      iconpointscoreW = `${parseInt(`${libavcodecg}`) ^ 3}`;
   }
      

      backiconY += parseFloat(`${termsK.size}`);
       let pathG = String.fromCharCode(112,117,116,99,95,122,95,56,57,0);
      let chinat = String.fromCharCode(104,55,113,112,115,57,0) == pathG;
      do {
         pathG += `${1 + pathG.length}`;
         if (chinat) {
            break;
         }
      } while ((!pathG.endsWith(`${pathG.length}`)) && chinat);
      let arrowrightwithtails = 8660709 <= pathG.length;
      do {
          let predictionwinR: Array<any> = [String.fromCharCode(120,95,52,53,95,115,116,117,102,102,110,100,0), String.fromCharCode(105,95,51,54,95,98,114,110,103,0)];
         pathG = `${pathG.length & predictionwinR.length}`;
         if (arrowrightwithtails) {
            break;
         }
      } while ((pathG.startsWith(`${pathG.length}`)) && arrowrightwithtails);
      if (5 < pathG.length) {
         pathG += `${(pathG == String.fromCharCode(72,0) ? pathG.length : pathG.length)}`;
      }
      crossu += iconpointscoreW.length;
      

   if (3 == cast1.length) {
      cast1 += `${parseInt(`${crossu}`) / (Math.max(basketballiconq.length, 10))}`;
   }
   if (4 > (2 & cast1.length) && (parseInt(`${inviteg}`) / 2) > 4) {
      cast1 = `${3 & parseInt(`${crossu}`)}`;
   }
      

      loginB += `${parseInt(`${inviteg}`) - 1}`;
      iconwatchk += `${parseInt(`${libavcodecg}`)}`;
      

   if (termsK.get(`${iconclosep}`) != null) {
      iconclosep += cast1.length % (Math.max(3, 10));
   }
      inviteg *= parseInt(`${crossu}`);
      

       let yingR = String.fromCharCode(98,114,97,99,107,101,116,115,95,53,95,57,48,0);
         yingR += `${(yingR == String.fromCharCode(49,0) ? yingR.length : yingR.length)}`;
         yingR += `${yingR.length}`;
          let fullscreenmint = String.fromCharCode(108,95,52,50,95,102,105,110,100,101,112,0);
          let closeb = false;
          let teaml = String.fromCharCode(101,95,51,50,95,105,115,97,99,102,105,120,0);
         yingR += `${((closeb ? 4 : 4) + 3)}`;
         fullscreenmint = `${teaml.length}`;
         closeb = fullscreenmint == teaml;
      backiconY -= parseFloat(`${iconwatchk.length}`);
   for (let z = 0; z < 3; z++) {
       let applep = 5.0;
       let security3 = 3.0;
         applep += parseFloat(`${parseInt(`${applep}`) >> (Math.min(2, Math.abs(3)))}`);
          let latn7: Map<any, any> = new Map([[String.fromCharCode(103,95,57,55,95,105,110,116,101,114,118,97,108,0),String.fromCharCode(115,105,100,101,95,48,95,50,49,0)], [String.fromCharCode(101,99,114,101,99,111,118,101,114,95,57,95,50,55,0),String.fromCharCode(115,95,50,52,95,105,102,97,100,100,114,115,0)]]);
          let logouserd = 0;
         security3 -= parseFloat(`${2}`);
         latn7 = new Map([[`${latn7.size}`, logouserd / 2]]);
         logouserd /= Math.max(3, latn7.size + 2);
         applep *= parseFloat(`${3}`);
         security3 /= Math.max(1, parseFloat(`${parseInt(`${applep}`)}`));
         applep += parseFloat(`${parseInt(`${security3}`)}`);
         security3 /= Math.max(parseFloat(`${parseInt(`${applep}`)}`), 2);
      armvaL = new Map([[predictionbannersharedB, (predictionbannersharedB == String.fromCharCode(76,0) ? parseInt(`${applep}`) : predictionbannersharedB.length)]]);
   }
      

   for (let c = 0; c < 3; c++) {
      push0 = String.fromCharCode(80,0) == loginB;
   }
      termsK.set(iconpointscoreW, 3);
      Linking.openURL(url);

       let awayh = 4.0;
       let leagueJ = false;
       let colorsp = 4.0;
      if (!leagueJ) {
         awayh /= Math.max((parseFloat(`${(leagueJ ? 1 : 3) << (Math.min(Math.abs(parseInt(`${colorsp}`)), 3))}`)), 5);
      }
      if (3.25 <= (5.99 + colorsp)) {
         leagueJ = awayh < 83.17;
      }
         colorsp *= parseFloat(`${2 / (Math.max(8, parseInt(`${colorsp}`)))}`);
      if (colorsp > awayh) {
          let minimizey = 2;
          let transferS = String.fromCharCode(98,114,101,97,100,99,114,117,109,98,115,95,111,95,56,55,0);
          let tickv = String.fromCharCode(115,95,52,56,95,104,105,103,104,112,111,114,116,0);
          let adultf = 5;
         awayh /= Math.max(parseFloat(`${tickv.length * parseInt(`${colorsp}`)}`), 1);
         minimizey |= adultf;
         transferS = `${(transferS == String.fromCharCode(76,0) ? minimizey : transferS.length)}`;
         tickv += `${minimizey & 2}`;
      }
       let telemetryX = String.fromCharCode(108,97,115,114,95,49,95,51,54,0);
       let greenk = String.fromCharCode(100,95,56,57,95,97,118,112,114,105,118,0);
      let register_o2 = awayh >= 5857330.0;
      do {
         awayh /= Math.max(4, parseFloat(`${parseInt(`${awayh}`) % 3}`));
         if (register_o2) {
            break;
         }
      } while (((1.71 * awayh) == 1.13) && register_o2);
       let const_1k = true;
       let gemfile2 = false;
       let episodesU: Map<any, any> = new Map([[String.fromCharCode(104,111,109,101,95,98,95,50,48,0),String.fromCharCode(109,95,49,48,95,112,97,115,116,101,98,111,97,114,100,0)], [String.fromCharCode(104,101,97,114,116,98,101,97,116,95,114,95,57,54,0),String.fromCharCode(106,111,98,115,95,107,95,52,53,0)], [String.fromCharCode(98,101,99,104,95,117,95,52,51,0),String.fromCharCode(98,108,111,99,107,100,99,95,55,95,57,56,0)]]);
      crossu += predictionbannersharedB.length + parseInt(`${inviteg}`);
       let paget = 3.0;
       let templateprocessorr = 4;
       let showc = String.fromCharCode(106,95,52,55,95,111,118,101,114,108,97,121,105,110,103,0);
         paget /= Math.max(parseInt(`${paget}`), 2);
      while (3 == (templateprocessorr & 3)) {
         templateprocessorr &= showc.length | parseInt(`${paget}`);
         break;
      }
      if (!showc.endsWith(`${templateprocessorr}`)) {
         templateprocessorr %= Math.max(templateprocessorr >> (Math.min(Math.abs(3), 3)), 1);
      }
      while ((showc.length ^ 2) <= 5 && 2 <= (parseInt(`${paget}`) + showc.length)) {
         showc = `${parseInt(`${paget}`) << (Math.min(1, Math.abs(3)))}`;
         break;
      }
          let shielddoney: Array<any> = [694, 775, 209];
         paget -= 2;
         shielddoney = [3];
      let annera = paget >= 9155278.0;
      do {
         paget *= 3 >> (Math.min(Math.abs(parseInt(`${paget}`)), 5));
         if (annera) {
            break;
         }
      } while (annera && (5 <= (1 >> (Math.min(5, showc.length)))));
      for (let z = 0; z < 3; z++) {
          let qaagA: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,99,112,114,105,118,97,116,101,95,115,95,49,56,0),String.fromCharCode(113,117,97,108,105,116,121,95,117,95,54,50,0)], [String.fromCharCode(121,117,121,118,116,111,121,117,118,95,121,95,48,0),String.fromCharCode(107,95,57,53,95,115,116,97,98,105,108,105,122,101,0)]]);
          let humidityn = 3.0;
         showc += `${showc.length}`;
         qaagA.set(`${humidityn}`, qaagA.size | 1);
         humidityn += 1 + qaagA.size;
      }
          let videobufferloadingd = 4.0;
         paget -= 1;
         videobufferloadingd -= parseFloat(`${3 % (Math.max(parseInt(`${videobufferloadingd}`), 4))}`);
      let controlsk = 9262601 <= templateprocessorr;
      do {
          let bgvipxvodY: Array<any> = [String.fromCharCode(100,101,108,105,109,95,49,95,57,48,0), String.fromCharCode(121,95,50,50,95,115,116,114,115,116,97,114,116,0)];
          let iconwatcho = String.fromCharCode(103,95,49,48,48,95,105,110,100,105,110,103,0);
          let mailt = String.fromCharCode(108,101,114,112,102,95,98,95,50,48,0);
          let firebasej = false;
          let assist2 = String.fromCharCode(112,114,101,115,115,95,51,95,56,57,0);
         templateprocessorr ^= bgvipxvodY.length;
         bgvipxvodY.push((assist2 == String.fromCharCode(54,0) ? (firebasej ? 5 : 3) : assist2.length));
         iconwatcho += `${assist2.length}`;
         mailt = `${(String.fromCharCode(118,0) == assist2 ? assist2.length : (firebasej ? 1 : 1))}`;
         if (controlsk) {
            break;
         }
      } while ((4.43 <= (paget + 3.46)) && controlsk);
      iconwatchk = `${parseInt(`${backiconY}`) / (Math.max(1, loginB.length))}`;
      

      iconclosep *= iconwatchk.length;
      iconclosep /= Math.max(4, (iconwatchk == String.fromCharCode(65,0) ? iconwatchk.length : termsK.size));

      

   let iconmoreQ = String.fromCharCode(103,112,107,95,104,111,95,100,55,0) == cast1;
   do {
      cast1 = "3";
      if (iconmoreQ) {
         break;
      }
   } while (iconmoreQ && (predictionbannersharedB.length < cast1.length));
      crossu += parseInt(`${iconclosep}`) & parseInt(`${inviteg}`);
      mayi_push.playsAdsClickAnalytics({
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
