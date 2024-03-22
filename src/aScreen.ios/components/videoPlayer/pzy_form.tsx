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
import VideoControlsOverlay from "./tv_rank";
import WebView from "react-native-webview";
import FastImage from "react-native-fast-image";
import FastForwardProgressIcon from "@static/images/tempUnreadShirt.svg";
import RewindProgressIcon from "@static/images/actionsFoundBing.svg";

import { incrementSportWatchTime, setFullscreenState } from "@redux/actions/a_switch";

import {
  XPaginationWeiboItem,
  IDelegate,
  XVSScoreDark,
} from "@type/wpk_long";
import VideoWithControlsMin from "./es_untick";


import { useDispatch } from "react-redux";
import { useAppSelector, useSelector } from "@hooks/kg_index";
import { screenModel } from "@type/nb_shared_target";
import { NON_VIP_STREAM_TIME_SECONDS } from "@utility/n_subs_interstitial";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";

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
       let downloadedU: Map<any, any> = new Map([[String.fromCharCode(115,112,101,99,105,102,105,101,114,115,95,56,95,53,57,0),String.fromCharCode(115,116,114,116,97,103,95,111,95,52,51,0)], [String.fromCharCode(99,108,97,115,115,105,102,105,101,114,95,49,95,54,0),String.fromCharCode(101,95,53,95,97,108,108,121,117,118,0)]]);
    let blacklist9: Map<any, any> = new Map([[String.fromCharCode(104,97,110,100,108,101,100,95,106,95,53,57,0),true ], [String.fromCharCode(108,95,53,48,95,100,100,99,116,0),true ]]);
    let plashb = false;
    let watchw = 3.0;
    let phoneA = 2.0;
    let placementD = String.fromCharCode(112,108,97,110,97,114,120,95,105,95,49,51,0);
    let point5 = String.fromCharCode(120,95,49,52,95,112,117,108,115,101,115,98,105,116,115,0);
    let successz = 1;
    let downloadi = true;
    let auto_8x: Map<any, any> = new Map([[String.fromCharCode(115,101,112,105,97,95,111,95,53,52,0),814], [String.fromCharCode(119,95,56,48,95,98,111,117,110,100,115,0),452]]);
    let hongkongl: Map<any, any> = new Map([[String.fromCharCode(121,95,57,95,101,118,105,99,101,0),758], [String.fromCharCode(99,95,51,50,95,119,97,114,110,0),11], [String.fromCharCode(119,105,115,101,95,114,95,57,51,0),470]]);
    let modalv = 2.0;
    let stationsI = String.fromCharCode(115,113,114,116,110,101,103,95,57,95,55,52,0);
    let fastforwardp = String.fromCharCode(112,114,101,100,120,108,95,103,95,54,0);
    let googley = true;
    let streamingv = 1.0;
    let sliderI = 3.0;
   while (plashb || downloadi) {
      plashb = point5 == String.fromCharCode(106,0);
      break;
   }
   while (plashb) {
      plashb = blacklist9.get(`${successz}`) != null;
      break;
   }
       let modityg = true;
       let match9: Map<any, any> = new Map([[String.fromCharCode(106,95,56,49,95,99,97,118,115,100,115,112,0),false ], [String.fromCharCode(100,95,52,52,95,109,105,120,105,110,115,0),true ], [String.fromCharCode(97,95,55,50,95,97,117,116,111,117,112,100,97,116,101,0),false ]]);
      while (!modityg) {
         match9.set(`${modityg}`, match9.size % 2);
         break;
      }
          let modelsx = 2;
          let promotionJ = String.fromCharCode(120,95,50,57,95,120,99,108,105,0);
         match9.set(`${modityg}`, 2 << (Math.min(4, Math.abs(match9.size))));
         modelsx ^= modelsx / (Math.max(9, promotionJ.length));
         promotionJ = `${promotionJ.length << (Math.min(3, Math.abs(modelsx)))}`;
         modityg = match9.get(`${modityg}`) != null;
       let friendsu = 5.0;
         match9 = new Map([[`${match9.size}`, parseInt(`${friendsu}`)]]);
          let update_8gP: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,114,97,105,110,101,100,95,121,95,51,57,0),688], [String.fromCharCode(115,99,97,108,101,115,95,107,95,55,57,0),140]]);
          let yingP = String.fromCharCode(117,110,105,116,121,95,57,95,52,52,0);
          let downloadq = 2;
         friendsu -= parseFloat(`${update_8gP.size ^ parseInt(`${friendsu}`)}`);
         update_8gP = new Map([[`${downloadq}`, 3 * downloadq]]);
         yingP = `${downloadq}`;
      watchw -= hongkongl.size;
      hongkongl = new Map([[`${watchw}`, parseInt(`${watchw}`) ^ parseInt(`${phoneA}`)]]);
   if ((modalv - parseFloat(`${point5.length}`)) < 4.37 && 1 < (point5.length / (Math.max(1, 9)))) {
      modalv *= parseFloat(`${auto_8x.size}`);
   }
   let viewerU = downloadedU.size <= 7035496;
   do {
       let baiduq = 2;
       let nterstitialb: Map<any, any> = new Map([[String.fromCharCode(118,95,57,52,95,99,105,110,97,117,100,105,111,0),62], [String.fromCharCode(121,95,56,53,95,114,101,118,97,108,105,100,97,116,101,0),456], [String.fromCharCode(111,95,56,49,95,105,110,111,100,101,115,0),470]]);
       let dropdownR: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,115,115,105,110,103,95,107,95,51,56,0),false ], [String.fromCharCode(119,95,49,49,95,109,117,120,0),true ], [String.fromCharCode(120,95,56,49,95,119,101,98,109,101,110,99,0),true ]]);
       let edit6: Map<any, any> = new Map([[String.fromCharCode(119,95,48,95,109,105,120,105,110,0),false ], [String.fromCharCode(120,95,50,53,0),false ]]);
      for (let o = 0; o < 2; o++) {
         dropdownR = new Map([[`${nterstitialb.size}`, nterstitialb.size]]);
      }
         edit6 = new Map([[`${nterstitialb.size}`, nterstitialb.size | 2]]);
      for (let i = 0; i < 3; i++) {
         dropdownR.set(`${edit6.size}`, 3);
      }
       let main_xk = String.fromCharCode(107,95,56,55,95,105,97,100,115,116,120,0);
       let orientationh = String.fromCharCode(115,95,53,51,95,109,117,116,97,116,101,0);
      if (4 <= (orientationh.length ^ 4) && (orientationh.length ^ nterstitialb.size) <= 4) {
          let hooksm = 2.0;
          let verticalu = String.fromCharCode(97,100,116,115,116,111,97,115,99,95,111,95,51,51,0);
          let main_gX = String.fromCharCode(109,111,110,116,104,95,121,95,49,51,0);
         nterstitialb.set(main_gX, parseInt(`${hooksm}`) / (Math.max(10, main_gX.length)));
         hooksm += (parseFloat(`${String.fromCharCode(76,0) == verticalu ? verticalu.length : verticalu.length}`));
      }
      let hongkongk = main_xk.length <= 7257016;
      do {
         main_xk += `${3 & dropdownR.size}`;
         if (hongkongk) {
            break;
         }
      } while ((orientationh == main_xk) && hongkongk);
      for (let d = 0; d < 1; d++) {
          let taiwanu = String.fromCharCode(98,114,111,107,101,110,95,102,95,54,57,0);
          let fast0 = 2.0;
         main_xk += "2";
         taiwanu += `${2 << (Math.min(2, Math.abs(parseInt(`${fast0}`))))}`;
         fast0 += taiwanu.length;
      }
         dropdownR.set(`${nterstitialb.size}`, 1);
      downloadedU.set(`${successz}`, auto_8x.size * successz);
      baiduq -= 3 ^ baiduq;
      if (viewerU) {
         break;
      }
   } while (viewerU && (downloadi));
      blacklist9.set(`${plashb}`, blacklist9.size);
   for (let f = 0; f < 2; f++) {
       let analytick = 0.0;
       let forml = 3;
       let canvasg = false;
       let albumu = true;
         analytick += ((canvasg ? 1 : 5) >> (Math.min(Math.abs(forml), 5)));
         analytick -= ((canvasg ? 1 : 3) ^ parseInt(`${analytick}`));
      while (albumu) {
         albumu = !albumu && forml == 15;
         break;
      }
      while ((forml * analytick) > 2.76) {
         forml &= parseInt(`${analytick}`);
         break;
      }
      for (let o = 0; o < 1; o++) {
         forml ^= 2;
      }
      auto_8x = new Map([[`${hongkongl.size}`, 2]]);
   }
      auto_8x = new Map([[`${successz}`, successz / (Math.max(7, parseInt(`${watchw}`)))]]);
   for (let j = 0; j < 1; j++) {
      downloadi = (auto_8x.size << (Math.min(5, Math.abs(blacklist9.size)))) < 89;
   }
   if (1.64 == phoneA) {
      watchw /= Math.max(blacklist9.size ^ hongkongl.size, 4);
   }
       let register_a4D = String.fromCharCode(99,111,110,116,97,99,116,95,108,95,49,51,0);
       let trashb = String.fromCharCode(99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,95,57,95,50,57,0);
      if (trashb == register_a4D) {
          let resendv: Map<any, any> = new Map([[String.fromCharCode(99,111,114,114,101,99,116,105,110,103,95,52,95,56,55,0),90], [String.fromCharCode(100,97,118,115,95,115,95,56,54,0),452], [String.fromCharCode(100,105,114,101,99,116,105,111,110,97,108,95,104,95,52,52,0),492]]);
         register_a4D += `${register_a4D.length >> (Math.min(Math.abs(1), 5))}`;
         resendv.set(`${resendv.size}`, resendv.size);
      }
      let greenh = register_a4D == String.fromCharCode(109,51,100,107,102,105,0);
      do {
         register_a4D = `${register_a4D.length}`;
         if (greenh) {
            break;
         }
      } while (greenh && (trashb == register_a4D));
          let register_a0c = true;
          let m_countA: Map<any, any> = new Map([[String.fromCharCode(99,95,56,54,95,117,110,115,101,110,116,0),true ], [String.fromCharCode(109,95,53,49,95,97,108,108,111,99,97,116,111,114,115,0),true ], [String.fromCharCode(114,101,115,97,109,112,95,113,95,52,54,0),false ]]);
          let linkm = String.fromCharCode(112,95,55,56,95,104,111,108,101,0);
         register_a4D = `${(String.fromCharCode(55,0) == linkm ? linkm.length : m_countA.size)}`;
         register_a0c = !register_a0c;
         m_countA = new Map([[`${register_a0c}`, ((register_a0c ? 3 : 1) / (Math.max(8, (register_a0c ? 3 : 1))))]]);
         trashb += `${trashb.length}`;
      let gmailu = register_a4D.length <= 7008077;
      do {
         register_a4D += `${trashb.length}`;
         if (gmailu) {
            break;
         }
      } while (gmailu && (trashb != String.fromCharCode(113,0)));
       let rewind0 = 0;
      placementD += `${downloadedU.size % (Math.max(placementD.length, 6))}`;
       let confirmationf = 2.0;
       let detailF = String.fromCharCode(115,105,103,110,114,97,110,100,95,108,95,52,57,0);
      if (1 <= (parseInt(`${confirmationf}`) / (Math.max(detailF.length, 2)))) {
         detailF = `${(detailF == String.fromCharCode(52,0) ? parseInt(`${confirmationf}`) : detailF.length)}`;
      }
       let signinupn = String.fromCharCode(113,95,53,48,95,115,101,110,100,109,98,117,102,0);
         detailF = `${(String.fromCharCode(107,0) == detailF ? detailF.length : signinupn.length)}`;
      let actione = detailF == String.fromCharCode(102,104,119,108,0);
      do {
         detailF = `${parseInt(`${confirmationf}`) >> (Math.min(Math.abs(2), 1))}`;
         if (actione) {
            break;
         }
      } while (actione && (signinupn != String.fromCharCode(50,0)));
          let agreementD = String.fromCharCode(109,97,116,99,104,101,95,114,95,54,50,0);
          let a_countw: Map<any, any> = new Map([[String.fromCharCode(117,112,108,111,97,100,95,115,95,49,48,0),114], [String.fromCharCode(113,108,111,103,115,95,108,95,57,52,0),750]]);
          let temperaturee: Array<any> = [131, 10];
         signinupn = `${signinupn.length >> (Math.min(detailF.length, 3))}`;
         agreementD = "1";
         a_countw = new Map([[`${a_countw.size}`, temperaturee.length - a_countw.size]]);
         temperaturee.push((String.fromCharCode(82,0) == agreementD ? agreementD.length : a_countw.size));
         signinupn += `${detailF.length - parseInt(`${confirmationf}`)}`;
      blacklist9.set(`${downloadi}`, 1 ^ point5.length);
   let statsy = String.fromCharCode(118,117,101,112,56,98,108,106,112,0) == placementD;
   do {
       let icon3 = 2;
       let relatedd = String.fromCharCode(99,111,109,112,97,114,105,115,111,110,95,51,95,53,57,0);
         icon3 += relatedd.length;
         relatedd += `${icon3 * relatedd.length}`;
       let catalog0 = 3.0;
      while (relatedd.length > 3) {
         relatedd += `${icon3}`;
         break;
      }
       let actionsz = 3.0;
       let zhubo8 = 1.0;
          let long_dch = false;
          let downloader7 = false;
         catalog0 += parseFloat(`${1 / (Math.max(10, parseInt(`${catalog0}`)))}`);
         long_dch = long_dch && !downloader7;
         downloader7 = downloader7 || !long_dch;
      placementD = `${2 ^ parseInt(`${phoneA}`)}`;
      if (statsy) {
         break;
      }
   } while (statsy && (placementD.length <= downloadedU.size));
   for (let v = 0; v < 2; v++) {
      placementD = `${downloadedU.size & 2}`;
   }
      downloadedU = new Map([[`${successz}`, 1 | successz]]);
      plashb = 11.70 < phoneA && plashb;
       let serviceB: Map<any, any> = new Map([[String.fromCharCode(117,110,107,105,99,107,95,100,95,53,56,0),String.fromCharCode(109,112,111,115,95,99,95,49,51,0)], [String.fromCharCode(115,95,53,53,95,110,117,109,115,0),String.fromCharCode(118,95,56,52,95,108,105,103,104,116,110,101,115,115,0)], [String.fromCharCode(97,118,102,111,114,109,97,116,95,116,95,51,49,0),String.fromCharCode(97,112,112,108,121,95,99,95,56,0)]]);
       let telegramV = 1;
      let questC = 7542899 >= telegramV;
      do {
          let aboutH = String.fromCharCode(109,95,56,56,95,118,97,114,105,110,116,115,0);
          let groupv = 3.0;
          let textU = String.fromCharCode(109,97,114,107,101,114,115,95,51,95,52,56,0);
         telegramV <<= Math.min(5, Math.abs(1 | serviceB.size));
         aboutH = `${aboutH.length / 1}`;
         groupv += parseFloat(`${1}`);
         textU = `${textU.length}`;
         if (questC) {
            break;
         }
      } while ((serviceB.size <= 4) && questC);
         telegramV -= serviceB.size & 1;
         serviceB.set(`${telegramV}`, telegramV);
      while (Array.from(serviceB.keys()).includes(`${telegramV}`)) {
         serviceB.set(`${telegramV}`, 3 ^ serviceB.size);
         break;
      }
      let awayO = serviceB.size <= 6242452;
      do {
         serviceB = new Map([[`${serviceB.size}`, telegramV]]);
         if (awayO) {
            break;
         }
      } while (awayO && ((telegramV ^ serviceB.size) == 4 && 2 == (4 ^ telegramV)));
      if (!Array.from(serviceB.keys()).includes(`${telegramV}`)) {
          let gpaym = String.fromCharCode(101,110,99,111,100,101,105,110,116,114,97,95,97,95,52,0);
          let thumbnailE = 0.0;
          let math3 = String.fromCharCode(107,95,50,50,95,99,111,108,108,97,112,115,101,0);
          let notificationK = String.fromCharCode(108,95,52,57,95,112,105,120,108,101,116,0);
         telegramV &= 1;
         gpaym = `${gpaym.length / (Math.max(2, 9))}`;
         thumbnailE /= Math.max(2, (parseFloat(`${String.fromCharCode(51,0) == math3 ? math3.length : notificationK.length}`)));
         notificationK = `${math3.length}`;
      }
      hongkongl.set(`${fastforwardp}`, 1 & fastforwardp.length);
   while (1 <= (successz ^ 4)) {
       let styleB = false;
       let assistG = false;
      while (!styleB) {
         styleB = !assistG;
         break;
      }
          let pressureH = 5;
          let pressureHo = String.fromCharCode(112,115,115,104,95,97,95,57,0);
          let filledP = String.fromCharCode(114,95,48,95,103,114,101,103,111,114,105,97,110,0);
         assistG = filledP.includes(`${styleB}`);
         pressureH /= Math.max(1, pressureH);
         pressureHo += "1";
         filledP += `${pressureH + 2}`;
         assistG = (!styleB ? !assistG : !styleB);
          let malaysiaU = 2.0;
          let pageR = 5.0;
         assistG = 44.99 >= (malaysiaU * pageR);
          let liveO = String.fromCharCode(108,97,116,101,110,99,121,95,120,95,57,52,0);
          let dark3 = false;
          let borderlessw = String.fromCharCode(114,101,99,111,109,112,111,115,101,95,50,95,53,0);
         assistG = (((!styleB ? 92 : borderlessw.length) + borderlessw.length) > 92);
         liveO = `${(String.fromCharCode(105,0) == liveO ? liveO.length : (dark3 ? 3 : 1))}`;
         dark3 = (((!dark3 ? liveO.length : 32) % (Math.max(liveO.length, 5))) >= 32);
          let areai = false;
          let volume1 = 0.0;
          let weiboW: Map<any, any> = new Map([[String.fromCharCode(116,114,117,101,115,112,101,101,99,104,95,53,95,56,49,0),950], [String.fromCharCode(119,95,57,49,95,100,105,115,109,105,115,115,101,100,0),73], [String.fromCharCode(120,95,55,53,95,97,99,99,101,112,116,97,98,108,101,0),273]]);
         assistG = styleB;
         areai = parseInt(`${volume1}`) <= weiboW.size;
         volume1 -= parseFloat(`${weiboW.size}`);
      successz *= parseInt(`${modalv}`) & 3;
      break;
   }
      plashb = 82 > placementD.length;
      point5 += `${successz / (Math.max(9, point5.length))}`;
   let bing_ = 7422885 >= successz;
   do {
      successz += placementD.length;
      if (bing_) {
         break;
      }
   } while (bing_ && (1.15 < (4.95 * modalv)));
      googley = (downloadedU.size ^ auto_8x.size) >= 52;
       let liveg: Array<any> = [String.fromCharCode(120,95,52,52,95,100,117,109,112,105,110,103,0), String.fromCharCode(97,95,53,53,95,100,101,98,117,103,98,111,120,0)];
      let penaltyj = 8408578 <= liveg.length;
      do {
          let refreshW = 0.0;
          let gemfilef = true;
          let catalogb = 3.0;
         liveg = [liveg.length << (Math.min(1, Math.abs(parseInt(`${refreshW}`))))];
         refreshW /= Math.max(4, parseInt(`${catalogb}`) % 2);
         gemfilef = !gemfilef && catalogb < 43.14;
         if (penaltyj) {
            break;
         }
      } while (penaltyj && (4 > liveg.length));
      if (liveg.length == 4) {
          let downloadF = 0.0;
          let rightD = String.fromCharCode(110,95,52,54,95,102,111,114,103,111,116,116,101,110,0);
          let vignette5: Array<any> = [String.fromCharCode(98,111,114,100,101,114,108,101,115,115,95,105,95,48,0), String.fromCharCode(122,95,54,48,95,97,100,115,0), String.fromCharCode(110,95,55,50,95,99,111,108,111,114,115,0)];
         liveg = [parseInt(`${downloadF}`) * 1];
         downloadF -= rightD.length;
         rightD = `${rightD.length}`;
         vignette5.push((String.fromCharCode(122,0) == rightD ? vignette5.length : rightD.length));
      }
         liveg.push(liveg.length);
      downloadedU.set(`${liveg.length}`, auto_8x.size ^ liveg.length);
       let selectionS = 3;
       let containera = true;
      if (!containera && (3 >> (Math.min(4, Math.abs(selectionS)))) < 4) {
          let alertb: Array<any> = [667, 319, 530];
          let nextW = String.fromCharCode(110,111,116,104,101,108,100,95,50,95,55,53,0);
          let areaD = 3;
          let launchp = String.fromCharCode(97,118,102,114,97,109,101,95,52,95,54,48,0);
         containera = 18 == launchp.length && alertb.length == 18;
         alertb = [nextW.length];
         nextW += `${(nextW == String.fromCharCode(80,0) ? areaD : nextW.length)}`;
         areaD |= nextW.length + 2;
         launchp = `${areaD}`;
      }
         selectionS %= Math.max(3, selectionS);
      fastforwardp = `${successz ^ parseInt(`${modalv}`)}`;
       let background3: Map<any, any> = new Map([[String.fromCharCode(100,114,97,119,97,98,108,101,95,122,95,57,54,0),296], [String.fromCharCode(103,95,56,55,95,108,105,115,116,0),866]]);
      for (let d = 0; d < 1; d++) {
          let update_nS: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,108,97,121,105,110,103,95,106,95,51,56,0),116], [String.fromCharCode(122,95,50,54,95,114,101,97,114,0),968]]);
          let kick3: Array<any> = [122, 476, 441];
          let popupM = false;
          let chinaI = 1.0;
         background3.set(`${popupM}`, 1 ^ background3.size);
         update_nS.set(`${kick3.length}`, update_nS.size - kick3.length);
         chinaI += parseInt(`${chinaI}`);
      }
         background3.set(`${background3.size}`, 3);
         background3 = new Map([[`${background3.size}`, background3.size]]);
      downloadedU.set(`${modalv}`, hongkongl.size);
      watchw -= blacklist9.size % 3;
       let combinedC = true;
      while (combinedC) {
          let actionsy = String.fromCharCode(100,95,55,57,95,98,105,110,100,105,110,103,115,0);
          let updatesa = String.fromCharCode(97,99,111,108,111,114,95,106,95,56,54,0);
          let containers = 0.0;
          let mutedw = 2;
          let placeholderZ = 3.0;
         combinedC = (65 == ((!combinedC ? 65 : actionsy.length) << (Math.min(actionsy.length, 5))));
         updatesa = `${parseInt(`${containers}`) | 1}`;
         containers *= 2;
         mutedw *= mutedw;
         placeholderZ -= parseFloat(`${parseInt(`${containers}`)}`);
         break;
      }
       let save9: Array<any> = [771, 4, 378];
       let castingQ: Array<any> = [771, 309, 887];
         castingQ.push((1 & (combinedC ? 1 : 1)));
      successz ^= parseInt(`${watchw}`) * 1;
   for (let p = 0; p < 1; p++) {
      plashb = blacklist9.size <= 92;
   }
   while (fastforwardp.length <= 3) {
      fastforwardp = "1";
      break;
   }
   let logoutc = watchw >= 6771597.0;
   do {
       let handler7: Map<any, any> = new Map([[String.fromCharCode(99,114,101,97,116,101,100,95,110,95,50,53,0),String.fromCharCode(118,95,52,49,95,100,111,109,105,110,97,110,116,0)], [String.fromCharCode(116,101,115,116,115,95,115,95,55,55,0),String.fromCharCode(107,95,55,0)]]);
       let fast3 = false;
       let singaporez = 2.0;
          let taiwano = 0;
         fast3 = !fast3 || singaporez < 21.66;
         taiwano /= Math.max(taiwano, 4);
         handler7.set(`${fast3}`, 2 + parseInt(`${singaporez}`));
      while (handler7.size < 4) {
         fast3 = (singaporez + parseFloat(`${handler7.size}`)) == 25.69;
         break;
      }
      if ((4 ^ handler7.size) <= 2) {
          let detailT = 0.0;
          let hover2 = String.fromCharCode(105,110,116,101,114,99,101,112,116,95,103,95,50,51,0);
          let filed5: Array<any> = [625, 937, 888];
          let rewindQ = false;
         handler7 = new Map([[`${handler7.size}`, ((fast3 ? 3 : 3) ^ 1)]]);
         detailT += parseFloat(`${parseInt(`${detailT}`) << (Math.min(2, Math.abs(1)))}`);
         hover2 = `${(parseInt(`${detailT}`) & (rewindQ ? 3 : 2))}`;
         filed5.push(parseInt(`${detailT}`));
         rewindQ = parseInt(`${detailT}`) >= filed5.length;
      }
      for (let v = 0; v < 2; v++) {
          let statisticsa = false;
          let moon4 = String.fromCharCode(100,105,109,105,115,115,95,52,95,53,54,0);
         fast3 = handler7.size == 51;
         statisticsa = ((moon4.length + (!statisticsa ? 54 : moon4.length)) >= 54);
      }
      while (5.89 < singaporez && (singaporez - 5.89) < 3.48) {
         fast3 = (82 < (handler7.size % (Math.max(1, (fast3 ? 82 : handler7.size)))));
         break;
      }
         fast3 = 78 > handler7.size || singaporez > 44.2;
      let fieldZ = singaporez >= 5568277.0;
      do {
         singaporez *= (parseFloat(`${parseInt(`${singaporez}`) * (fast3 ? 4 : 1)}`));
         if (fieldZ) {
            break;
         }
      } while ((4.1 >= (1.13 + singaporez) && (handler7.size + 3) >= 4) && fieldZ);
         singaporez /= Math.max((parseFloat(`${(fast3 ? 3 : 3) & parseInt(`${singaporez}`)}`)), 2);
      watchw -= 3;
      if (logoutc) {
         break;
      }
   } while ((watchw < 2.65 && (2.65 * watchw) < 2.71) && logoutc);
   while (3.100 == (4.98 + modalv)) {
       let control0 = String.fromCharCode(110,95,53,52,95,99,111,110,110,101,99,116,0);
       let expiredY = String.fromCharCode(112,95,52,50,95,114,103,116,99,0);
       let layoutN = String.fromCharCode(99,104,114,111,109,97,109,99,95,54,95,56,0);
       let agreementR = String.fromCharCode(107,117,107,105,95,105,95,56,51,0);
       let userA = 4.0;
         expiredY = `${(layoutN == String.fromCharCode(122,0) ? layoutN.length : agreementR.length)}`;
      for (let m = 0; m < 1; m++) {
         expiredY += `${agreementR.length}`;
      }
         control0 = `${layoutN.length >> (Math.min(1, control0.length))}`;
      if (control0.length < 4) {
         control0 += `${control0.length | 1}`;
      }
      let dragy = String.fromCharCode(102,54,54,112,111,112,106,0) == layoutN;
      do {
         layoutN = `${control0.length}`;
         if (dragy) {
            break;
         }
      } while (dragy && (layoutN.length >= expiredY.length));
         layoutN += `${control0.length | expiredY.length}`;
       let text9 = 1;
       let statisticsX = 3;
      for (let e = 0; e < 2; e++) {
         expiredY = "2";
      }
         agreementR += `${expiredY.length & 3}`;
      let predictiond = expiredY.length >= 7700135;
      do {
         expiredY += `${text9}`;
         if (predictiond) {
            break;
         }
      } while (predictiond && (expiredY.length >= agreementR.length));
         userA += parseFloat(`${expiredY.length}`);
      while (!control0.startsWith(layoutN)) {
          let pingk = 1;
          let filedV: Array<any> = [String.fromCharCode(119,101,98,112,95,109,95,50,49,0), String.fromCharCode(99,111,108,108,97,112,115,101,95,117,95,50,49,0), String.fromCharCode(109,97,116,116,101,95,116,95,57,0)];
          let indicator3 = 2.0;
          let productQ = 5;
          let moduleL = 2;
         layoutN = `${parseInt(`${indicator3}`) << (Math.min(3, Math.abs(pingk)))}`;
         pingk -= productQ;
         filedV = [1];
         indicator3 *= parseFloat(`${productQ << (Math.min(1, Math.abs(1)))}`);
         moduleL %= Math.max(productQ / (Math.max(9, filedV.length)), 5);
         break;
      }
      for (let v = 0; v < 3; v++) {
          let recommendationw = String.fromCharCode(98,111,120,101,100,95,99,95,55,0);
          let sheet5 = 2;
          let productm: Map<any, any> = new Map([[String.fromCharCode(121,95,53,55,95,97,117,116,111,112,108,97,121,105,110,103,0),String.fromCharCode(100,95,54,52,0)], [String.fromCharCode(111,118,101,114,119,114,105,116,101,95,107,95,53,57,0),String.fromCharCode(107,95,48,95,115,101,116,114,97,110,103,101,0)]]);
         statisticsX *= sheet5;
         recommendationw += `${(String.fromCharCode(71,0) == recommendationw ? recommendationw.length : productm.size)}`;
         sheet5 /= Math.max(1, 1 >> (Math.min(5, recommendationw.length)));
         productm = new Map([[`${productm.size}`, 3]]);
      }
       let statsn = String.fromCharCode(102,114,97,109,101,112,97,99,107,95,118,95,53,49,0);
      for (let x = 0; x < 1; x++) {
         userA /= Math.max(4, parseFloat(`${layoutN.length ^ 2}`));
      }
      fastforwardp += "3";
      break;
   }
      googley = String.fromCharCode(97,0) == point5;
       let spinner1 = 0.0;
       let previewq = 3.0;
       let bingQ: Map<any, any> = new Map([[String.fromCharCode(103,95,54,48,95,97,114,111,117,110,100,0),289], [String.fromCharCode(116,105,116,108,101,98,97,114,95,57,95,50,55,0),714]]);
         previewq *= parseInt(`${previewq}`);
      while (3.21 > (spinner1 * parseFloat(`${bingQ.size}`))) {
         spinner1 += parseFloat(`${1}`);
         break;
      }
         bingQ.set(`${previewq}`, 2 * parseInt(`${previewq}`));
         spinner1 *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${spinner1}`)), 2))}`);
          let typingx: Array<any> = [141, 551];
         bingQ = new Map([[`${previewq}`, parseInt(`${previewq}`)]]);
         typingx = [typingx.length];
         previewq *= 3 | bingQ.size;
          let mappingT = 3;
         previewq *= mappingT;
       let apple9: Array<any> = [905, 460];
       let pageL: Array<any> = [252, 441];
         apple9.push(parseInt(`${spinner1}`) % 2);
      googley = !googley;
      fastforwardp = "3";
      placementD = `${stationsI.length}`;
       let native7 = 0.0;
       let teamg = true;
         teamg = !teamg;
      for (let s = 0; s < 3; s++) {
         teamg = !teamg;
      }
          let viewer8: Array<any> = [289, 718];
          let thailandm = 4.0;
          let nterstitialk = 5.0;
         native7 -= parseFloat(`${parseInt(`${thailandm}`) & 2}`);
         viewer8.push(viewer8.length + 1);
         thailandm *= parseInt(`${nterstitialk}`) - 2;
         nterstitialk /= Math.max(2, parseFloat(`${viewer8.length}`));
         native7 -= (parseFloat(`${parseInt(`${native7}`) - (teamg ? 2 : 1)}`));
         native7 -= (parseFloat(`${(teamg ? 3 : 1) - parseInt(`${native7}`)}`));
      let hejia = native7 <= 6912429.0;
      do {
          let ballT = 0;
          let soundt = String.fromCharCode(99,112,120,95,114,95,52,54,0);
          let greenO = String.fromCharCode(104,101,97,100,108,105,110,101,95,97,95,51,52,0);
          let guide1 = String.fromCharCode(117,95,53,52,95,115,117,112,101,114,118,105,101,119,0);
         native7 *= (parseFloat(`${greenO == String.fromCharCode(109,0) ? parseInt(`${native7}`) : greenO.length}`));
         ballT -= 1 - guide1.length;
         soundt += "3";
         guide1 += `${soundt.length + guide1.length}`;
         if (hejia) {
            break;
         }
      } while (hejia && (!teamg));
      streamingv *= parseFloat(`${2 >> (Math.min(2, Math.abs(successz)))}`);
   let jnews3 = stationsI == String.fromCharCode(108,51,119,101,104,0);
   do {
      stationsI += `${point5.length}`;
      if (jnews3) {
         break;
      }
   } while ((point5 != String.fromCharCode(115,0)) && jnews3);
      googley = streamingv == phoneA;
      placementD += `${downloadedU.size}`;
   for (let h = 0; h < 3; h++) {
      hongkongl = new Map([[`${blacklist9.size}`, 1 >> (Math.min(1, Math.abs(blacklist9.size)))]]);
   }
      downloadedU.set(`${modalv}`, 1 % (Math.max(9, auto_8x.size)));
   while (plashb && (blacklist9.size | 3) == 3) {
      plashb = 50 <= successz && modalv <= 29.8;
      break;
   }
       let episodeE: Array<any> = [60, 994];
       let gpayG = 1;
         episodeE = [episodeE.length];
         gpayG %= Math.max(2, gpayG & 2);
          let catagoryO: Map<any, any> = new Map([[String.fromCharCode(116,114,97,100,101,95,51,95,57,50,0),String.fromCharCode(99,111,108,108,101,99,116,95,117,95,55,57,0)], [String.fromCharCode(118,108,99,111,100,101,99,95,55,95,48,0),String.fromCharCode(119,95,51,55,95,112,114,111,109,105,110,101,110,116,0)]]);
          let smallc = false;
          let ajaxP = 5;
         gpayG <<= Math.min(1, Math.abs(3 ^ ajaxP));
         catagoryO.set(`${smallc}`, 2);
         ajaxP ^= catagoryO.size;
      if (episodeE.length == gpayG) {
         gpayG |= episodeE.length ^ gpayG;
      }
         episodeE = [gpayG];
      if (5 < (gpayG | episodeE.length) || 1 < (5 | gpayG)) {
         episodeE = [1];
      }
      googley = null == hongkongl.get(`${streamingv}`);
   if (fastforwardp.length >= stationsI.length) {
      stationsI = `${successz / (Math.max(blacklist9.size, 1))}`;
   }
      modalv -= parseFloat(`${1}`);
   while (placementD.length < 4) {
       let detailP = String.fromCharCode(115,95,49,57,95,112,114,105,110,116,99,111,109,112,0);
      while (!detailP.includes(detailP)) {
         detailP += `${detailP.length & 3}`;
         break;
      }
         detailP = `${detailP.length}`;
      let signinupU = detailP.length <= 5449911;
      do {
         detailP += `${detailP.length - detailP.length}`;
         if (signinupU) {
            break;
         }
      } while (signinupU && (detailP.length >= 2));
      placementD += `${successz}`;
      break;
   }
   let bodan5 = 5963295.0 <= streamingv;
   do {
       let relatede = 2.0;
       let leagueB = 5.0;
       let loadinga: Map<any, any> = new Map([[String.fromCharCode(110,95,55,50,95,111,112,99,111,100,101,0),596], [String.fromCharCode(114,101,115,105,122,101,100,95,98,95,49,53,0),555]]);
         loadinga = new Map([[`${loadinga.size}`, parseInt(`${leagueB}`) % 1]]);
         loadinga.set(`${leagueB}`, 1 | parseInt(`${relatede}`));
      while ((leagueB - 3.67) <= 3.8 && 3 <= (loadinga.size * 4)) {
         leagueB -= parseInt(`${relatede}`);
         break;
      }
          let containerP = String.fromCharCode(102,95,51,55,95,118,99,104,113,0);
          let sinaD: Array<any> = [String.fromCharCode(111,95,50,57,0), String.fromCharCode(100,95,53,55,95,112,116,104,114,101,97,100,0)];
         loadinga = new Map([[`${relatede}`, 1]]);
         containerP = `${containerP.length >> (Math.min(4, sinaD.length))}`;
         sinaD = [sinaD.length << (Math.min(containerP.length, 2))];
      let catagoryB = leagueB <= 8539882.0;
      do {
         leagueB += parseInt(`${leagueB}`) + 1;
         if (catagoryB) {
            break;
         }
      } while ((3.17 == (3.28 + leagueB) || (3.28 - relatede) == 4.0) && catagoryB);
      while (relatede <= leagueB) {
          let refreshC = String.fromCharCode(100,95,55,53,95,99,111,109,112,97,114,97,116,111,114,0);
          let controlsQ: Map<any, any> = new Map([[String.fromCharCode(117,95,57,49,95,115,108,105,100,105,110,103,0),291], [String.fromCharCode(103,95,53,52,95,100,101,97,99,116,105,118,97,116,105,111,110,0),339]]);
          let indicatorM = 2.0;
          let circleP: Map<any, any> = new Map([[String.fromCharCode(116,97,100,100,95,113,95,54,50,0),372], [String.fromCharCode(115,95,52,95,115,101,114,105,97,108,105,115,101,100,0),692]]);
         leagueB *= controlsQ.size + loadinga.size;
         refreshC = `${circleP.size}`;
         controlsQ.set(refreshC, (refreshC == String.fromCharCode(73,0) ? refreshC.length : circleP.size));
         indicatorM += parseFloat(`${refreshC.length}`);
         break;
      }
         leagueB /= Math.max(5, parseInt(`${relatede}`));
       let pingB = String.fromCharCode(99,95,54,51,95,116,120,116,111,98,106,0);
       let google3 = String.fromCharCode(102,114,97,109,101,113,117,101,117,101,95,50,95,54,49,0);
         google3 += `${pingB.length ^ 3}`;
      streamingv *= parseFloat(`${placementD.length << (Math.min(Math.abs(1), 2))}`);
      if (bodan5) {
         break;
      }
   } while (bodan5 && (Array.from(downloadedU.keys()).includes(`${streamingv}`)));
   let half8 = modalv >= 5286939.0;
   do {
      modalv -= parseFloat(`${1}`);
      if (half8) {
         break;
      }
   } while (half8 && (point5.startsWith(`${modalv}`)));
   if ((blacklist9.size % (Math.max(5, 2))) >= 4 || 3.61 >= (modalv + 4.59)) {
       let sortV = String.fromCharCode(110,115,101,103,109,101,110,116,115,95,116,95,51,57,0);
       let const_fi = String.fromCharCode(113,95,52,57,95,109,117,108,116,105,112,108,121,105,110,103,0);
       let regeng6 = 1.0;
       let fastforwarda = 3;
       let ewardedV: Array<any> = [612, 207];
         regeng6 += parseFloat(`${fastforwarda >> (Math.min(Math.abs(1), 5))}`);
         const_fi += `${ewardedV.length ^ parseInt(`${regeng6}`)}`;
         ewardedV.push(const_fi.length);
         ewardedV = [ewardedV.length];
       let memberT = 0.0;
       let showO = 3.0;
      while (showO == 5.80) {
         showO -= const_fi.length / 1;
         break;
      }
      while ((2.75 + showO) == 3.69 || 1.2 == (showO + 2.75)) {
          let project3 = String.fromCharCode(101,95,54,95,99,104,101,99,107,0);
          let feedbackl: Map<any, any> = new Map([[String.fromCharCode(108,105,109,105,116,101,114,95,106,95,56,57,0),String.fromCharCode(98,117,102,115,112,97,99,101,95,112,95,56,56,0)], [String.fromCharCode(117,108,116,114,97,119,105,100,101,95,57,95,56,56,0),String.fromCharCode(101,95,51,56,95,101,114,105,97,108,105,122,97,116,105,111,110,0)], [String.fromCharCode(99,97,108,108,98,97,99,107,95,48,95,54,51,0),String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,115,95,100,95,56,0)]]);
         showO /= Math.max(4, feedbackl.size >> (Math.min(Math.abs(1), 1)));
         project3 += `${(String.fromCharCode(101,0) == project3 ? project3.length : project3.length)}`;
         feedbackl = new Map([[project3, project3.length]]);
         break;
      }
      modalv *= parseFloat(`${2 + parseInt(`${phoneA}`)}`);
      sortV = `${sortV.length % 3}`;
   }
   for (let h = 0; h < 2; h++) {
       let fillb: Map<any, any> = new Map([[String.fromCharCode(112,111,115,115,105,98,108,121,95,53,95,57,0),633], [String.fromCharCode(106,95,52,51,95,101,108,115,100,101,99,0),966], [String.fromCharCode(101,110,118,105,114,111,110,109,101,110,116,95,120,95,49,49,0),340]]);
          let moviesi = String.fromCharCode(98,105,116,101,120,97,99,116,95,53,95,56,0);
         fillb = new Map([[`${fillb.size}`, (moviesi == String.fromCharCode(53,0) ? moviesi.length : fillb.size)]]);
      if (4 < (fillb.size + 2) || (fillb.size + 2) < 4) {
         fillb = new Map([[`${fillb.size}`, fillb.size]]);
      }
         fillb = new Map([[`${fillb.size}`, 1 * fillb.size]]);
      stationsI += `${(placementD == String.fromCharCode(83,0) ? parseInt(`${phoneA}`) : placementD.length)}`;
   }
   let selectF = 7137712 >= placementD.length;
   do {
      placementD += `${point5.length}`;
      if (selectF) {
         break;
      }
   } while ((4 >= (parseInt(`${phoneA}`) - placementD.length) || 3.87 >= (placementD.length - phoneA)) && selectF);
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
       let gpayb = 2.0;
    let friends0: Array<any> = [966, 131, 835];
    let closef = 1;
    let uploadJ = 2;
    let ying5: Array<any> = [771, 499];
    let orientationm = 0.0;
    let read0: Map<any, any> = new Map([[String.fromCharCode(109,97,103,101,95,102,95,57,56,0),String.fromCharCode(111,114,100,101,114,95,108,95,51,51,0)], [String.fromCharCode(100,95,55,56,95,109,105,100,116,111,110,101,115,0),String.fromCharCode(98,95,51,57,95,103,111,116,0)], [String.fromCharCode(118,97,108,105,100,105,116,121,95,115,95,50,57,0),String.fromCharCode(114,101,102,100,117,112,101,95,103,95,52,51,0)]]);
    let goalS: Map<any, any> = new Map([[String.fromCharCode(114,95,56,52,95,101,116,104,0),86], [String.fromCharCode(100,101,115,114,111,121,95,53,95,51,55,0),711], [String.fromCharCode(114,95,55,95,111,118,102,108,0),824]]);
   while ((2 - ying5.length) < 1 && (ying5.length * parseInt(`${orientationm}`)) < 2) {
      orientationm *= parseFloat(`${2 & parseInt(`${gpayb}`)}`);
      break;
   }
   while (2 >= (read0.size | uploadJ) && (2 | read0.size) >= 4) {
      uploadJ &= 3;
      break;
   }
   for (let l = 0; l < 1; l++) {
       let middleware0 = String.fromCharCode(102,95,56,48,95,102,114,101,113,117,101,110,116,0);
         middleware0 += `${middleware0.length}`;
         middleware0 += `${2 * middleware0.length}`;
      for (let d = 0; d < 1; d++) {
          let collection9 = String.fromCharCode(99,111,112,105,101,115,95,113,95,55,57,0);
         middleware0 = `${collection9.length}`;
      }
      closef |= friends0.length & middleware0.length;
   }
      goalS.set(`${uploadJ}`, 1 & uploadJ);
   while (1 <= (closef & ying5.length) && 5 <= (1 & closef)) {
      ying5 = [2 | uploadJ];
      break;
   }
      gpayb -= parseFloat(`${ying5.length >> (Math.min(5, Math.abs(closef)))}`);
   for (let q = 0; q < 1; q++) {
      uploadJ /= Math.max(5, 1 << (Math.min(2, Math.abs(read0.size))));
   }
   let options5 = uploadJ <= 5427027;
   do {
      uploadJ %= Math.max(3, parseInt(`${gpayb}`));
      if (options5) {
         break;
      }
   } while ((read0.get(`${uploadJ}`) != null) && options5);
   let canvasw = 9198263.0 >= orientationm;
   do {
       let ajaxE = true;
       let downloadedD = String.fromCharCode(114,101,116,114,105,101,118,101,100,95,104,95,52,57,0);
       let storeB = String.fromCharCode(117,110,99,108,101,115,95,118,95,51,0);
       let photoy = String.fromCharCode(98,114,105,100,103,105,110,103,95,49,95,54,53,0);
         downloadedD += `${1 * photoy.length}`;
      let modityZ = ajaxE ? !ajaxE : ajaxE;
      do {
          let paginationh = String.fromCharCode(98,108,97,107,101,98,95,57,95,55,54,0);
          let xvodL = true;
          let windT = true;
          let hooks3 = 0.0;
         ajaxE = (27 < ((ajaxE ? storeB.length : 27) - storeB.length));
         paginationh += "3";
         xvodL = !xvodL;
         windT = !windT;
         hooks3 *= (parseFloat(`${paginationh == String.fromCharCode(109,0) ? (xvodL ? 1 : 4) : paginationh.length}`));
         if (modityZ) {
            break;
         }
      } while (modityZ && (storeB.length >= 1));
      let recommendationx = storeB.length >= 7905176;
      do {
         storeB += "2";
         if (recommendationx) {
            break;
         }
      } while (recommendationx && (downloadedD == String.fromCharCode(55,0)));
         downloadedD += `${(downloadedD == String.fromCharCode(83,0) ? storeB.length : downloadedD.length)}`;
         downloadedD = `${(String.fromCharCode(82,0) == downloadedD ? photoy.length : downloadedD.length)}`;
         downloadedD = `${downloadedD.length}`;
      if (downloadedD.length <= 4 && ajaxE) {
         ajaxE = downloadedD.length <= 95 || 95 <= storeB.length;
      }
      let membership4 = String.fromCharCode(100,122,108,122,57,53,0) == storeB;
      do {
         storeB = `${storeB.length >> (Math.min(Math.abs(3), 1))}`;
         if (membership4) {
            break;
         }
      } while (membership4 && (4 < storeB.length));
       let weiboE = 4.0;
       let formi = 4.0;
      let k_image9 = weiboE <= 7047550.0;
      do {
         weiboE *= storeB.length;
         if (k_image9) {
            break;
         }
      } while ((3.80 <= (4.9 - weiboE)) && k_image9);
         formi *= 1 >> (Math.min(4, Math.abs(parseInt(`${formi}`))));
      for (let l = 0; l < 3; l++) {
         storeB = `${downloadedD.length}`;
      }
      orientationm += parseFloat(`${storeB.length ^ goalS.size}`);
      if (canvasw) {
         break;
      }
   } while ((1 > (5 >> (Math.min(2, Math.abs(closef))))) && canvasw);
      read0 = new Map([[`${read0.size}`, ying5.length - read0.size]]);
   if (5.31 >= (orientationm * parseFloat(`${friends0.length}`)) || 3.17 >= (5.31 * orientationm)) {
       let movies4: Map<any, any> = new Map([[String.fromCharCode(118,111,119,101,108,95,102,95,57,57,0),508], [String.fromCharCode(105,95,52,52,95,115,101,113,117,101,110,116,105,97,108,0),818]]);
       let grayK: Array<any> = [887, 835];
       let contexte = 4;
       let gemfileo = false;
       let morev = String.fromCharCode(107,95,53,48,95,114,101,116,114,97,110,115,109,105,115,115,105,111,110,0);
          let rulesf = String.fromCharCode(115,102,114,97,109,101,95,118,95,56,48,0);
          let z_imageZ = 5;
         movies4 = new Map([[`${grayK.length}`, 1 ^ morev.length]]);
         rulesf += `${(rulesf == String.fromCharCode(111,0) ? rulesf.length : z_imageZ)}`;
         z_imageZ |= (rulesf == String.fromCharCode(48,0) ? rulesf.length : z_imageZ);
       let edito = 3.0;
         morev = `${parseInt(`${edito}`)}`;
          let floatera = String.fromCharCode(120,95,51,54,95,101,100,105,116,111,114,0);
          let sidey: Array<any> = [744, 14, 181];
          let forwardX = 4.0;
         movies4 = new Map([[`${gemfileo}`, (floatera.length << (Math.min(2, Math.abs((gemfileo ? 1 : 4)))))]]);
         floatera = `${1 % (Math.max(parseInt(`${forwardX}`), 10))}`;
         sidey.push(1 & parseInt(`${forwardX}`));
      if ((parseInt(`${edito}`) * grayK.length) <= 1) {
          let carouselL = String.fromCharCode(111,118,101,114,119,114,105,116,101,95,114,95,49,0);
          let floating2 = 0;
          let transfer5 = 3.0;
         grayK.push((parseInt(`${edito}`) << (Math.min(1, Math.abs((gemfileo ? 1 : 2))))));
         carouselL = `${floating2 / (Math.max(2, 3))}`;
         floating2 /= Math.max(floating2 ^ carouselL.length, 4);
         transfer5 += (String.fromCharCode(71,0) == carouselL ? carouselL.length : floating2);
      }
      for (let r = 0; r < 1; r++) {
         gemfileo = morev.length >= 55;
      }
       let catalogw = String.fromCharCode(109,115,101,99,115,95,115,95,51,49,0);
       let loading8: Map<any, any> = new Map([[String.fromCharCode(108,95,49,56,95,97,116,114,97,99,112,108,117,115,0),String.fromCharCode(116,105,103,103,108,101,95,104,95,55,52,0)], [String.fromCharCode(101,110,103,105,110,101,95,118,95,54,54,0),String.fromCharCode(102,109,105,120,95,57,95,53,48,0)]]);
          let hookJ = String.fromCharCode(118,95,51,51,0);
          let refreshg: Map<any, any> = new Map([[String.fromCharCode(108,111,110,103,109,117,108,97,119,95,120,95,57,49,0),true ], [String.fromCharCode(100,95,53,52,95,101,115,116,105,109,97,116,105,110,103,0),true ]]);
          let favoriteo = String.fromCharCode(112,105,99,116,117,114,101,115,95,102,95,57,55,0);
         movies4 = new Map([[`${loading8.size}`, catalogw.length]]);
         hookJ = `${(String.fromCharCode(97,0) == hookJ ? refreshg.size : hookJ.length)}`;
         refreshg.set(favoriteo, favoriteo.length | refreshg.size);
          let slider7 = 4;
          let background_ = String.fromCharCode(105,115,115,95,120,95,54,48,0);
         movies4.set(background_, background_.length);
         slider7 += slider7 ^ 2;
      if (5 > movies4.size) {
          let countryJ = String.fromCharCode(116,95,56,51,95,102,111,111,116,101,114,0);
          let carouselg: Map<any, any> = new Map([[String.fromCharCode(109,101,97,115,117,114,101,100,95,101,95,52,48,0),true ], [String.fromCharCode(120,95,53,53,95,102,101,97,116,117,114,101,100,0),false ]]);
         gemfileo = loading8.size == 38 && gemfileo;
         countryJ = `${(countryJ == String.fromCharCode(57,0) ? countryJ.length : carouselg.size)}`;
         carouselg = new Map([[`${carouselg.size}`, countryJ.length / 1]]);
      }
         grayK.push(((gemfileo ? 3 : 5) << (Math.min(Math.abs(contexte), 1))));
         movies4.set(`${grayK.length}`, grayK.length >> (Math.min(4, Math.abs(loading8.size))));
         morev = `${2 % (Math.max(5, catalogw.length))}`;
         catalogw = `${2 & parseInt(`${edito}`)}`;
      friends0.push(uploadJ);
   }
   for (let q = 0; q < 1; q++) {
       let fastZ = 3;
       let greyn = 1.0;
       let link6: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,114,105,110,105,116,95,49,95,53,48,0),false ], [String.fromCharCode(109,101,115,97,103,101,95,103,95,50,50,0),true ], [String.fromCharCode(117,116,102,116,111,95,109,95,56,57,0),true ]]);
       let redirectR = false;
      let mutedz = 8389465 >= link6.size;
      do {
         link6 = new Map([[`${greyn}`, fastZ]]);
         if (mutedz) {
            break;
         }
      } while ((redirectR) && mutedz);
          let dataZ = String.fromCharCode(110,95,53,51,95,103,101,116,112,0);
          let soundC = 2.0;
         link6.set(`${redirectR}`, (String.fromCharCode(120,0) == dataZ ? (redirectR ? 2 : 1) : dataZ.length));
         soundC /= Math.max(1, parseFloat(`${parseInt(`${soundC}`)}`));
      let blacklistd = 6945794 <= link6.size;
      do {
         link6.set(`${fastZ}`, 1);
         if (blacklistd) {
            break;
         }
      } while (blacklistd && (link6.get(`${fastZ}`) == null));
      for (let s = 0; s < 1; s++) {
         fastZ &= 1;
      }
      let tnewsG = greyn >= 8726007.0;
      do {
          let roomT = String.fromCharCode(112,95,53,52,95,98,114,97,110,100,0);
         greyn *= parseFloat(`${1 & fastZ}`);
         roomT = `${roomT.length}`;
         if (tnewsG) {
            break;
         }
      } while (tnewsG && ((3 - link6.size) == 1 || 5 == (link6.size + 3)));
       let usert = String.fromCharCode(115,110,97,112,115,104,111,116,116,101,114,95,115,95,49,50,0);
       let activeu = String.fromCharCode(117,110,115,101,110,116,95,54,95,52,50,0);
          let quest2 = 0;
          let combineB = String.fromCharCode(113,109,97,116,95,53,95,49,50,0);
          let downZ = String.fromCharCode(119,95,50,52,95,115,115,114,99,0);
         redirectR = String.fromCharCode(56,0) == activeu;
         quest2 -= (downZ == String.fromCharCode(122,0) ? quest2 : downZ.length);
         combineB = `${(combineB == String.fromCharCode(104,0) ? combineB.length : quest2)}`;
       let m_lockK = 1.0;
       let filedT: Map<any, any> = new Map([[String.fromCharCode(101,95,53,56,95,114,101,109,111,118,101,103,114,97,105,110,0),String.fromCharCode(99,95,51,55,95,109,105,110,114,0)], [String.fromCharCode(97,108,103,111,114,105,116,104,109,95,99,95,49,0),String.fromCharCode(119,95,55,49,95,109,117,108,116,105,112,108,105,101,100,0)]]);
       let header4: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,118,105,101,119,95,99,95,54,48,0),false ], [String.fromCharCode(114,101,115,105,100,117,101,95,116,95,55,55,0),false ], [String.fromCharCode(105,112,118,95,57,95,57,56,0),false ]]);
         activeu += `${link6.size >> (Math.min(3, Math.abs(header4.size)))}`;
          let annerO = false;
          let modityP = false;
          let baiduz = String.fromCharCode(106,95,55,54,95,110,117,109,98,101,114,115,0);
         fastZ &= 3 & header4.size;
         annerO = baiduz.endsWith(`${modityP}`);
         modityP = baiduz.length < 4;
       let scheduleV = 5;
       let productY = 2;
      friends0 = [goalS.size | read0.size];
   }
      gpayb *= parseFloat(`${1 >> (Math.min(3, Math.abs(read0.size)))}`);
   while ((ying5.length - parseInt(`${orientationm}`)) <= 5) {
       let indicatorR: Array<any> = [String.fromCharCode(111,115,115,108,95,114,95,55,53,0), String.fromCharCode(118,105,98,114,97,110,99,101,95,51,95,56,50,0)];
       let chatk = String.fromCharCode(107,109,118,99,95,106,95,52,53,0);
       let whistled = String.fromCharCode(114,101,97,99,116,105,111,110,115,95,98,95,53,50,0);
         whistled = `${whistled.length}`;
      for (let v = 0; v < 1; v++) {
          let matches1 = true;
          let googlea = String.fromCharCode(121,95,57,49,95,100,111,109,97,105,110,0);
          let controlsW = 4;
          let const_exo: Map<any, any> = new Map([[String.fromCharCode(115,116,114,116,97,103,95,56,95,55,54,0),String.fromCharCode(109,111,100,110,112,102,95,114,95,57,55,0)], [String.fromCharCode(99,114,101,97,116,101,95,114,95,49,50,0),String.fromCharCode(115,118,97,103,95,50,95,51,49,0)]]);
          let internetd = 3.0;
         indicatorR.push(((matches1 ? 2 : 1) % (Math.max(2, const_exo.size))));
         matches1 = 33 < (internetd - controlsW);
         googlea += `${googlea.length / (Math.max(1, controlsW))}`;
         const_exo = new Map([[`${internetd}`, controlsW >> (Math.min(Math.abs(parseInt(`${internetd}`)), 1))]]);
      }
       let liver: Array<any> = [71, 804, 962];
         whistled += `${chatk.length}`;
      let rightt = indicatorR.length >= 7794197;
      do {
         indicatorR.push(chatk.length);
         if (rightt) {
            break;
         }
      } while (rightt && (3 >= indicatorR.length));
         chatk = "1";
          let friendsF = String.fromCharCode(104,115,99,114,111,108,108,95,119,95,50,49,0);
         indicatorR = [indicatorR.length % 1];
         friendsF = `${friendsF.length + 1}`;
      if (!whistled.startsWith(`${chatk.length}`)) {
         whistled += `${whistled.length}`;
      }
      for (let x = 0; x < 2; x++) {
         chatk += `${whistled.length ^ liver.length}`;
      }
      orientationm -= parseFloat(`${chatk.length}`);
      break;
   }
   if (goalS.get(`${friends0.length}`) == null) {
      friends0 = [2];
   }
       let fullF = String.fromCharCode(115,105,110,95,112,95,53,55,0);
         fullF = "2";
         fullF = `${fullF.length * fullF.length}`;
         fullF += `${(String.fromCharCode(51,0) == fullF ? fullF.length : fullF.length)}`;
      friends0.push(goalS.size);
      ying5 = [ying5.length];
       let clockc = 5.0;
       let league7 = String.fromCharCode(122,95,51,50,95,98,111,117,110,100,0);
      while (4 == (3 * league7.length) || 4 == (league7.length << (Math.min(Math.abs(3), 1)))) {
          let upgradeV: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,95,50,95,56,56,0),243], [String.fromCharCode(119,95,50,48,95,115,121,110,99,97,98,108,101,0),50], [String.fromCharCode(110,95,56,55,95,110,111,116,105,102,121,105,110,103,0),942]]);
          let spinnerf = 0.0;
          let const_bok = String.fromCharCode(97,95,54,54,95,99,97,108,99,117,108,97,116,101,100,0);
          let episodek = 5;
         league7 = `${(String.fromCharCode(71,0) == league7 ? parseInt(`${clockc}`) : league7.length)}`;
         upgradeV = new Map([[const_bok, parseInt(`${spinnerf}`)]]);
         spinnerf -= 2;
         const_bok = "3";
         episodek += upgradeV.size;
         break;
      }
         league7 = `${2 ^ league7.length}`;
      while ((5.21 - clockc) < 4.29 && (5.21 - clockc) < 3.47) {
         clockc -= parseFloat(`${3}`);
         break;
      }
          let commentz = true;
         clockc += (parseFloat(`${String.fromCharCode(118,0) == league7 ? league7.length : (commentz ? 5 : 3)}`));
         clockc -= (parseFloat(`${String.fromCharCode(48,0) == league7 ? parseInt(`${clockc}`) : league7.length}`));
         league7 += `${league7.length}`;
      closef /= Math.max(2, 3);
      goalS = new Map([[`${friends0.length}`, friends0.length]]);
       let wind6 = String.fromCharCode(97,99,116,105,118,97,116,101,100,95,113,95,54,0);
       let hooksx = 2.0;
       let typingU: Map<any, any> = new Map([[String.fromCharCode(112,105,100,95,56,95,52,50,0),false ], [String.fromCharCode(119,114,105,116,101,95,52,95,51,53,0),false ]]);
         hooksx /= Math.max(typingU.size ^ wind6.length, 3);
       let downloaderU: Array<any> = [661, 659, 1000];
         typingU = new Map([[wind6, parseInt(`${hooksx}`)]]);
         downloaderU = [wind6.length | 2];
       let leftR = false;
          let brightness8: Map<any, any> = new Map([[String.fromCharCode(98,111,120,95,110,95,57,56,0),126], [String.fromCharCode(115,116,97,98,108,101,95,104,95,53,50,0),284], [String.fromCharCode(109,97,100,101,98,121,95,48,95,57,56,0),634]]);
          let blackh: Array<any> = [String.fromCharCode(100,111,99,117,109,101,110,116,97,116,105,111,110,95,97,95,57,52,0), String.fromCharCode(101,110,99,111,100,101,114,95,110,95,50,52,0), String.fromCharCode(120,95,52,53,95,112,101,97,107,0)];
          let reporto: Array<any> = [String.fromCharCode(117,110,115,116,97,107,101,95,50,95,53,48,0), String.fromCharCode(114,95,54,56,95,105,110,100,101,102,105,110,105,116,101,108,121,0)];
         wind6 = `${downloaderU.length}`;
         brightness8.set(`${blackh.length}`, blackh.length % (Math.max(3, 5)));
         reporto = [blackh.length];
      while (leftR) {
          let selection3 = true;
          let subsk = false;
          let header2 = 0;
          let heart0 = String.fromCharCode(97,95,55,51,95,109,101,116,97,108,0);
          let downloadp: Map<any, any> = new Map([[String.fromCharCode(97,99,107,115,95,109,95,53,56,0),false ], [String.fromCharCode(107,95,50,95,115,116,111,112,0),false ]]);
         leftR = heart0.length < 73 || 73 < wind6.length;
         selection3 = !selection3;
         subsk = 63 > header2;
         header2 -= header2 >> (Math.min(1, Math.abs(1)));
         heart0 += `${downloadp.size}`;
         downloadp = new Map([[`${selection3}`, ((selection3 ? 1 : 1) & (subsk ? 3 : 4))]]);
         break;
      }
      for (let q = 0; q < 1; q++) {
         hooksx /= Math.max(4, 3 + parseInt(`${hooksx}`));
      }
         hooksx *= 1 << (Math.min(Math.abs(parseInt(`${hooksx}`)), 4));
      gpayb *= parseFloat(`${wind6.length >> (Math.min(Math.abs(1), 3))}`);
       let modelq = 0.0;
       let configure_ = 2.0;
         modelq += parseInt(`${configure_}`) | 1;
      while (1.15 <= (configure_ / (Math.max(modelq, 9)))) {
         modelq += parseInt(`${configure_}`);
         break;
      }
         configure_ *= 3;
         configure_ += parseInt(`${modelq}`);
      while (modelq == 3.52) {
          let thumbnail2 = 2.0;
          let logoutS = 5;
          let submitJ = String.fromCharCode(110,95,50,54,95,108,111,110,103,109,117,108,97,119,0);
         configure_ -= logoutS;
         thumbnail2 += (submitJ == String.fromCharCode(120,0) ? submitJ.length : parseInt(`${thumbnail2}`));
         logoutS &= submitJ.length;
         break;
      }
         modelq -= 3;
      ying5 = [parseInt(`${configure_}`) ^ 2];
      closef -= 2 * read0.size;
   let logout8 = ying5.length <= 9712448;
   do {
      ying5 = [ying5.length];
      if (logout8) {
         break;
      }
   } while (logout8 && (parseFloat(`${ying5.length}`) > orientationm));
   while (2 == (5 / (Math.max(7, ying5.length))) || (friends0.length / 5) == 3) {
      ying5 = [read0.size % (Math.max(ying5.length, 10))];
      break;
   }
   let trophy1 = 6694902 >= friends0.length;
   do {
       let referrerz = true;
       let middleb: Array<any> = [399, 807, 354];
       let mapping0 = 5.0;
       let analytic5 = String.fromCharCode(109,97,116,116,101,95,107,95,50,53,0);
       let malaysiaQ = false;
      while (referrerz) {
         analytic5 += `${(String.fromCharCode(55,0) == analytic5 ? analytic5.length : parseInt(`${mapping0}`))}`;
         break;
      }
      if ((parseFloat(`${middleb.length}`) + mapping0) == 2.26) {
         middleb = [((malaysiaQ ? 3 : 4) << (Math.min(Math.abs(parseInt(`${mapping0}`)), 5)))];
      }
      let customT = String.fromCharCode(118,117,52,122,107,109,101,106,0) == analytic5;
      do {
         analytic5 = `${((malaysiaQ ? 5 : 3))}`;
         if (customT) {
            break;
         }
      } while (customT && (5 >= (analytic5.length * middleb.length) || 5 >= (analytic5.length * middleb.length)));
      if ((3.52 - mapping0) < 4.98 && 4 < (middleb.length | 3)) {
         middleb.push(analytic5.length);
      }
          let paginationB = String.fromCharCode(114,95,51,50,95,105,110,116,101,102,97,99,101,0);
          let downloadR = String.fromCharCode(115,117,99,99,101,115,115,102,117,108,95,107,95,50,52,0);
         referrerz = analytic5.length > 31 || !malaysiaQ;
         paginationB = `${paginationB.length}`;
         downloadR = `${downloadR.length}`;
      if (3 == (analytic5.length << (Math.min(Math.abs(3), 5))) || (middleb.length << (Math.min(Math.abs(3), 2))) == 4) {
          let combineJ = String.fromCharCode(108,105,115,116,95,49,95,54,52,0);
          let regengr = String.fromCharCode(114,101,99,97,108,99,95,49,95,52,49,0);
          let hooku = 3.0;
          let corner5 = 4.0;
          let active4 = 1.0;
         analytic5 += `${parseInt(`${corner5}`) / 2}`;
         combineJ = `${combineJ.length}`;
         regengr = `${parseInt(`${active4}`)}`;
         hooku /= Math.max(5, parseFloat(`${parseInt(`${hooku}`)}`));
         corner5 += regengr.length;
         active4 -= regengr.length % (Math.max(combineJ.length, 3));
      }
      let editN = 6379321 >= middleb.length;
      do {
         middleb = [3];
         if (editN) {
            break;
         }
      } while ((malaysiaQ) && editN);
         mapping0 += (parseFloat(`${(referrerz ? 5 : 2) % 1}`));
         referrerz = !referrerz;
      if (!referrerz) {
          let humidityo = String.fromCharCode(99,98,117,102,95,102,95,55,55,0);
          let starU = 5.0;
          let emoji7: Array<any> = [135, 112];
         mapping0 -= parseFloat(`${parseInt(`${starU}`) << (Math.min(middleb.length, 3))}`);
         humidityo += `${humidityo.length % (Math.max(1, 2))}`;
         starU /= Math.max(5, 1);
         emoji7.push(emoji7.length);
      }
       let nalyticsn = String.fromCharCode(97,108,101,114,116,115,95,103,95,56,57,0);
      while (nalyticsn.startsWith(`${mapping0}`)) {
         mapping0 /= Math.max(3, parseFloat(`${1 | parseInt(`${mapping0}`)}`));
         break;
      }
         referrerz = (((!referrerz ? middleb.length : 16) >> (Math.min(middleb.length, 2))) > 16);
      if (!nalyticsn.includes(`${mapping0}`)) {
          let notificationb = String.fromCharCode(103,105,103,97,103,114,111,117,112,95,119,95,51,0);
          let expiredO = String.fromCharCode(117,95,56,54,95,115,119,115,99,97,108,101,0);
         nalyticsn += `${2 ^ expiredO.length}`;
         notificationb += `${notificationb.length}`;
         expiredO = `${notificationb.length >> (Math.min(Math.abs(3), 3))}`;
      }
      let actionC = mapping0 >= 9160061.0;
      do {
         mapping0 /= Math.max(parseFloat(`${nalyticsn.length}`), 1);
         if (actionC) {
            break;
         }
      } while ((mapping0 <= 3.98) && actionC);
      friends0 = [((malaysiaQ ? 5 : 3))];
      if (trophy1) {
         break;
      }
   } while (((2 | closef) == 5 || (2 | friends0.length) == 2) && trophy1);
   let reminderA = read0.size >= 6975673;
   do {
      read0 = new Map([[`${read0.size}`, 3]]);
      if (reminderA) {
         break;
      }
   } while ((read0.get(`${orientationm}`) != null) && reminderA);
   if ((closef & uploadJ) > 5 && 1 > (5 & uploadJ)) {
       let homeP = String.fromCharCode(114,101,116,117,114,110,105,110,103,95,122,95,52,51,0);
       let sinav = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,104,95,57,50,0);
         sinav += `${sinav.length % (Math.max(1, homeP.length))}`;
      while (sinav.endsWith(`${homeP.length}`)) {
         homeP += `${2 % (Math.max(9, sinav.length))}`;
         break;
      }
      uploadJ /= Math.max(4, uploadJ << (Math.min(3, Math.abs(3))));
   }
   if ((5.49 / (Math.max(3, orientationm))) < 3.66) {
      friends0 = [goalS.size * 1];
   }
   while ((1 << (Math.min(4, ying5.length))) == 1) {
      friends0.push(parseInt(`${orientationm}`));
      break;
   }
      uploadJ -= 1 - closef;
   while (4 <= closef) {
      closef += parseInt(`${orientationm}`) | 1;
      break;
   }
   for (let f = 0; f < 1; f++) {
      friends0 = [3];
   }
   let bingf = 9076222 >= ying5.length;
   do {
       let tickeds: Array<any> = [544, 354, 629];
       let emptyz = false;
          let regengp = String.fromCharCode(116,111,109,105,99,95,97,95,54,56,0);
          let flyer6 = String.fromCharCode(105,116,108,101,95,122,95,56,57,0);
         tickeds.push(tickeds.length);
         regengp += `${flyer6.length}`;
         flyer6 += `${regengp.length}`;
       let viewsi = 5.0;
      let yellowd = viewsi <= 9356526.0;
      do {
         viewsi += (tickeds.length % (Math.max(3, (emptyz ? 4 : 2))));
         if (yellowd) {
            break;
         }
      } while (yellowd && (!emptyz));
       let dragh = 5.0;
      for (let a = 0; a < 1; a++) {
         tickeds = [3];
      }
      for (let i = 0; i < 3; i++) {
          let vignette5: Array<any> = [String.fromCharCode(117,95,51,57,95,97,108,103,111,0), String.fromCharCode(119,95,50,49,95,118,108,105,110,101,0), String.fromCharCode(112,97,115,115,112,104,114,97,115,101,95,104,95,51,0)];
          let type_cfo: Map<any, any> = new Map([[String.fromCharCode(113,95,51,54,95,101,120,105,115,116,105,110,103,0),7], [String.fromCharCode(111,95,54,54,95,97,99,117,116,111,102,102,0),223]]);
          let fullB = 2;
         viewsi -= parseInt(`${dragh}`);
         vignette5.push(vignette5.length);
         type_cfo = new Map([[`${vignette5.length}`, 1]]);
         fullB -= vignette5.length;
      }
      ying5 = [1];
      if (bingf) {
         break;
      }
   } while ((3 <= (friends0.length % (Math.max(1, 7))) && 5 <= (1 % (Math.max(8, ying5.length)))) && bingf);
      gpayb -= parseFloat(`${closef}`);
      uploadJ /= Math.max(3, closef);
      goalS = new Map([[`${goalS.size}`, goalS.size]]);
   let downloadingy = uploadJ <= 7575816;
   do {
       let downloadY: Map<any, any> = new Map([[String.fromCharCode(97,110,105,109,97,108,115,95,122,95,53,54,0),String.fromCharCode(110,95,49,52,95,110,112,112,116,114,97,110,115,112,111,115,101,0)], [String.fromCharCode(115,101,112,97,114,97,116,111,114,95,103,95,50,49,0),String.fromCharCode(99,97,116,101,103,111,114,105,115,101,100,95,120,95,51,48,0)]]);
       let nterstitialp = String.fromCharCode(98,110,109,112,105,95,122,95,55,55,0);
       let heartl = String.fromCharCode(119,95,56,95,116,97,103,99,111,109,112,97,114,101,0);
       let crown0: Map<any, any> = new Map([[String.fromCharCode(115,101,113,117,101,110,99,101,115,95,57,95,55,0),443], [String.fromCharCode(113,95,53,54,95,99,111,101,114,99,101,0),854], [String.fromCharCode(119,105,100,103,101,116,95,114,95,50,54,0),7]]);
       let episode6 = 4.0;
         heartl += `${heartl.length}`;
      while (1 < (5 | nterstitialp.length) && (5.10 * episode6) < 4.52) {
         nterstitialp += `${downloadY.size / (Math.max(1, 3))}`;
         break;
      }
      if (!nterstitialp.startsWith(`${heartl.length}`)) {
         heartl += `${crown0.size / (Math.max(8, parseInt(`${episode6}`)))}`;
      }
      let recommendations = crown0.size <= 7253473;
      do {
         crown0.set(`${nterstitialp}`, downloadY.size + 1);
         if (recommendations) {
            break;
         }
      } while (recommendations && (3.40 <= (parseFloat(`${crown0.size}`) - episode6) && 4.52 <= (3.40 - episode6)));
         nterstitialp = `${crown0.size | parseInt(`${episode6}`)}`;
      let weiboP = crown0.size <= 9736573;
      do {
          let eighteen_ = String.fromCharCode(101,110,117,109,101,114,97,116,101,95,106,95,56,50,0);
         crown0.set(heartl, 2);
         eighteen_ = `${3 / (Math.max(5, eighteen_.length))}`;
         if (weiboP) {
            break;
         }
      } while (weiboP && (Array.from(crown0.keys()).includes(`${downloadY.size}`)));
       let clubf = true;
       let gesturew = false;
      if (clubf) {
         clubf = null != downloadY.get(`${clubf}`);
      }
       let circleA: Array<any> = [506, 930, 736];
      while (clubf) {
          let xvodp = 4;
          let gestureV = String.fromCharCode(116,95,55,51,95,108,101,103,97,99,121,0);
         clubf = circleA.includes(xvodp);
         xvodp -= gestureV.length;
         gestureV += `${gestureV.length}`;
         break;
      }
      let userx = clubf ? !clubf : clubf;
      do {
          let room_ = String.fromCharCode(115,117,98,116,114,101,101,115,95,56,95,57,51,0);
         clubf = !clubf;
         room_ = "3";
         if (userx) {
            break;
         }
      } while ((downloadY.size == 1) && userx);
      for (let a = 0; a < 2; a++) {
         gesturew = heartl.length < 66;
      }
      for (let k = 0; k < 2; k++) {
         crown0 = new Map([[heartl, heartl.length * 3]]);
      }
         heartl = `${heartl.length}`;
      while (!nterstitialp.includes(`${downloadY.size}`)) {
         downloadY = new Map([[`${downloadY.size}`, downloadY.size >> (Math.min(3, Math.abs(crown0.size)))]]);
         break;
      }
      uploadJ |= friends0.length;
      if (downloadingy) {
         break;
      }
   } while ((!ying5.includes(uploadJ)) && downloadingy);
 },
      onReadyForDisplay,
    }: XFillButton,
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
      "acceptedGiftDark" | "none" | "fastUpdate_ebAssist"
    >("none");
    const [playbackRate, setPlaybackRate] = useState<number>(1);
    const controlsRef = useRef() as React.MutableRefObject<OPrediction>;
    const accumulatedSkip = useRef(0);
    const [isLastForward, setIsLastForward] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const screenState: screenModel = useAppSelector(
      ({ screenReducer }) => screenReducer
    );
    const userState = useSelector<HDTGesturesList>('userReducer');
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
       let gemfile4 = String.fromCharCode(112,114,111,98,101,114,95,102,95,52,55,0);
    let paginatione = 1.0;
    let data7: Array<any> = [795, 547];
    let loadingi = String.fromCharCode(110,105,100,115,110,95,52,95,53,48,0);
    let helperE: Map<any, any> = new Map([[String.fromCharCode(107,95,52,55,95,115,117,98,115,101,116,0),true ], [String.fromCharCode(107,95,57,54,95,109,97,110,117,97,108,108,121,0),true ]]);
    let collectiony = String.fromCharCode(115,105,102,102,95,107,95,51,54,0);
    let navigationT = 5;
    let dropdownP = 5;
    let analytic8 = String.fromCharCode(121,114,121,105,95,52,95,49,53,0);
    let modulec: Array<any> = [811, 806];
    let tooltipsX = false;
    let routerH = String.fromCharCode(107,95,51,54,95,114,101,97,116,116,97,99,104,0);
   if ((1 ^ navigationT) <= 3 || 3 <= (dropdownP ^ 1)) {
      dropdownP <<= Math.min(Math.abs(loadingi.length + collectiony.length), 3);
   }
   for (let v = 0; v < 3; v++) {
       let referrer1 = true;
       let listT = 2;
       let bufferS = 1;
       let auto_l3W = String.fromCharCode(115,104,97,100,111,119,95,118,95,57,53,0);
       let ewarded4: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,101,114,109,95,51,95,54,53,0),313], [String.fromCharCode(108,95,57,55,95,100,101,99,101,108,101,114,97,116,101,100,0),757]]);
          let serviceb = 0.0;
         ewarded4.set(`${listT}`, bufferS + listT);
         serviceb -= parseFloat(`${parseInt(`${serviceb}`)}`);
          let buttonw = String.fromCharCode(99,104,111,111,115,101,114,95,110,95,50,54,0);
          let containerB = String.fromCharCode(98,97,100,103,101,115,95,50,95,51,50,0);
         ewarded4 = new Map([[`${referrer1}`, auto_l3W.length]]);
         buttonw = `${1 << (Math.min(3, containerB.length))}`;
         containerB += "2";
       let modalB = String.fromCharCode(99,97,118,112,95,102,95,56,50,0);
      if (referrer1) {
          let playlistG = 5.0;
          let guideQ = 3;
          let areaZ = false;
         ewarded4 = new Map([[`${guideQ}`, 3]]);
         playlistG -= (parseFloat(`${(areaZ ? 1 : 5) % (Math.max(parseInt(`${playlistG}`), 7))}`));
         guideQ |= parseInt(`${playlistG}`) | 3;
         areaZ = areaZ && playlistG >= 65.85;
      }
         bufferS %= Math.max(1, 3 * ewarded4.size);
          let humidityi = String.fromCharCode(100,95,50,55,95,117,110,109,97,110,97,103,101,100,0);
          let disconnectedR = String.fromCharCode(107,95,49,57,95,97,115,109,100,101,102,115,0);
          let pluss: Array<any> = [277, 878, 4];
         auto_l3W += `${disconnectedR.length}`;
         humidityi += `${3 & humidityi.length}`;
         disconnectedR += `${humidityi.length | 2}`;
         pluss = [pluss.length ^ 2];
          let downZ = 2;
          let downloaderL = String.fromCharCode(109,105,120,95,57,95,52,54,0);
         referrer1 = 53 >= bufferS && !referrer1;
         downZ <<= Math.min(Math.abs(3), 5);
         downloaderL += `${2 / (Math.max(5, downloaderL.length))}`;
      if (!referrer1) {
         bufferS *= 1;
      }
      let animationa = 8249866 <= listT;
      do {
          let shareT = String.fromCharCode(106,95,49,57,95,111,115,115,108,0);
          let plashi = String.fromCharCode(112,108,97,110,101,115,95,116,95,49,49,0);
          let icony: Array<any> = [691, 363, 599];
         listT %= Math.max(((referrer1 ? 1 : 5) | auto_l3W.length), 2);
         shareT = "1";
         plashi += "3";
         icony = [icony.length];
         if (animationa) {
            break;
         }
      } while (((5 + listT) > 4) && animationa);
      while ((ewarded4.size * 1) < 2 && 1 < (1 * ewarded4.size)) {
         modalB = `${auto_l3W.length / (Math.max(modalB.length, 5))}`;
         break;
      }
      if (!modalB.includes(`${bufferS}`)) {
         modalB = `${((referrer1 ? 1 : 1) / 2)}`;
      }
         ewarded4 = new Map([[`${ewarded4.size}`, modalB.length]]);
      while ((auto_l3W.length & 4) < 3) {
         listT >>= Math.min(Math.abs(ewarded4.size * 2), 5);
         break;
      }
         ewarded4.set(auto_l3W, (String.fromCharCode(48,0) == auto_l3W ? auto_l3W.length : (referrer1 ? 1 : 2)));
      if (4 > (auto_l3W.length - 1)) {
         auto_l3W += `${2 >> (Math.min(3, auto_l3W.length))}`;
      }
      gemfile4 += `${parseInt(`${paginatione}`)}`;
   }
      loadingi += `${(String.fromCharCode(66,0) == gemfile4 ? gemfile4.length : dropdownP)}`;
      loadingi += `${helperE.size}`;
       let paginationp = String.fromCharCode(120,120,104,97,115,104,95,57,95,56,57,0);
         paginationp += `${paginationp.length}`;
         paginationp += `${(paginationp == String.fromCharCode(85,0) ? paginationp.length : paginationp.length)}`;
         paginationp += `${paginationp.length / 3}`;
      helperE = new Map([[`${helperE.size}`, 1]]);

      if (onBack !== undefined) {

       let watchf = true;
       let ball9 = false;
         watchf = !ball9 && !watchf;
      while (!ball9 && !watchf) {
         ball9 = (!ball9 ? !watchf : !ball9);
         break;
      }
      if (!watchf) {
          let custom_ = false;
          let castingK = 1.0;
         ball9 = watchf;
         custom_ = !custom_;
         castingK += parseFloat(`${3 / (Math.max(4, parseInt(`${castingK}`)))}`);
      }
          let largeN = String.fromCharCode(98,95,53,56,95,114,101,102,99,111,117,110,116,101,114,0);
          let matchess: Array<any> = [String.fromCharCode(105,109,112,108,95,99,95,54,56,0), String.fromCharCode(118,95,57,56,95,112,114,101,102,105,120,101,115,0), String.fromCharCode(106,95,51,52,95,115,99,104,110,111,114,114,0)];
         ball9 = watchf || matchess.length < 31;
         largeN += `${largeN.length / (Math.max(2, 7))}`;
         matchess.push(largeN.length);
          let googleC = 4;
          let trashH = String.fromCharCode(97,97,99,101,110,99,95,103,95,52,56,0);
          let storer = String.fromCharCode(97,95,53,51,95,101,120,112,111,114,116,0);
         watchf = googleC == 10;
         googleC -= storer.length * trashH.length;
         trashH += `${storer.length}`;
         ball9 = (ball9 ? !watchf : ball9);
      gemfile4 = `${loadingi.length / (Math.max(1, 4))}`;
   if ((loadingi.length >> (Math.min(1, Math.abs(dropdownP)))) < 2 && (loadingi.length >> (Math.min(3, Math.abs(dropdownP)))) < 2) {
       let floaterR = String.fromCharCode(119,95,51,50,95,112,114,111,100,117,99,101,114,0);
       let ballT = 4.0;
      while (parseInt(`${ballT}`) <= floaterR.length) {
         floaterR = `${floaterR.length}`;
         break;
      }
         ballT *= parseInt(`${ballT}`) - floaterR.length;
       let dialogC = 4.0;
       let charti = 1.0;
         ballT -= parseInt(`${charti}`);
      let button6 = 6256757.0 <= ballT;
      do {
          let submitZ = 1;
          let settingsu: Array<any> = [700, 729, 329];
          let tumbnailN = String.fromCharCode(99,95,53,50,95,109,97,114,103,105,110,0);
         ballT += (tumbnailN == String.fromCharCode(77,0) ? submitZ : tumbnailN.length);
         submitZ &= settingsu.length & 3;
         settingsu.push(1 & settingsu.length);
         if (button6) {
            break;
         }
      } while (button6 && (ballT > 2.84));
         charti += parseFloat(`${parseInt(`${ballT}`) % (Math.max(floaterR.length, 6))}`);
      loadingi += `${1 << (Math.min(5, Math.abs(parseInt(`${paginatione}`))))}`;
   }
   while (data7.length <= 2) {
      paginatione *= parseFloat(`${dropdownP << (Math.min(collectiony.length, 1))}`);
      break;
   }
       let becomeK = 4;
       let downloadedg = false;
       let rightZ = 1;
         becomeK %= Math.max(rightZ, 1);
      let editP = downloadedg ? !downloadedg : downloadedg;
      do {
         downloadedg = !downloadedg;
         if (editP) {
            break;
         }
      } while ((1 > (1 << (Math.min(2, Math.abs(becomeK))))) && editP);
      while (rightZ <= 1) {
          let rulesB: Array<any> = [203, 907, 655];
          let shirt2 = true;
          let megaphoneg: Array<any> = [String.fromCharCode(100,95,49,55,95,99,111,101,102,102,105,99,105,101,110,116,115,0), String.fromCharCode(103,95,49,48,48,95,98,97,103,101,0)];
          let megaphoneK = String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,108,95,50,50,0);
         becomeK >>= Math.min(Math.abs(3), 1);
         rulesB = [1 ^ megaphoneg.length];
         shirt2 = megaphoneg.length >= 69 && megaphoneK.length >= 69;
         megaphoneK += `${1 + megaphoneg.length}`;
         break;
      }
      while ((rightZ * 4) > 2) {
          let policyJ = true;
          let updatesw = 1;
          let gpayA = 3;
          let previewb = String.fromCharCode(114,95,55,49,95,111,112,101,114,97,116,105,110,103,0);
         becomeK %= Math.max(previewb.length, 1);
         policyJ = 10 <= updatesw;
         updatesw |= 2 - gpayA;
         gpayA |= ((policyJ ? 3 : 5) + updatesw);
         previewb = `${updatesw - 1}`;
         break;
      }
         rightZ /= Math.max(rightZ, 1);
      data7 = [data7.length];
      dropdownP <<= Math.min(Math.abs(1 ^ helperE.size), 1);
        onBack();

      data7 = [parseInt(`${paginatione}`) >> (Math.min(Math.abs(1), 3))];
      data7 = [3 - parseInt(`${paginatione}`)];
       let fieldR = String.fromCharCode(99,95,55,51,95,112,105,120,101,108,0);
       let a_lockN = String.fromCharCode(119,95,49,57,95,121,117,118,109,112,101,103,0);
       let friends0 = true;
         fieldR += `${a_lockN.length}`;
         a_lockN += `${((friends0 ? 4 : 5) * 3)}`;
       let appleG = 3.0;
      while (fieldR.startsWith(a_lockN)) {
          let bellC = String.fromCharCode(109,111,116,105,111,110,95,51,95,49,51,0);
          let time_o6 = false;
         fieldR += `${a_lockN.length}`;
         bellC = `${((time_o6 ? 4 : 3) * bellC.length)}`;
         time_o6 = time_o6 || bellC.length > 3;
         break;
      }
      let redirecty = fieldR == String.fromCharCode(56,112,122,105,0);
      do {
         fieldR = `${((friends0 ? 1 : 1) >> (Math.min(a_lockN.length, 4)))}`;
         if (redirecty) {
            break;
         }
      } while (redirecty && (fieldR.length > 4));
      data7.push(2);
   let userM = 5930669 <= dropdownP;
   do {
      dropdownP >>= Math.min(5, Math.abs(parseInt(`${paginatione}`) % (Math.max(data7.length, 6))));
      if (userM) {
         break;
      }
   } while ((4 == (dropdownP / 2) || 5 == (2 / (Math.max(2, analytic8.length)))) && userM);
      dropdownP += (String.fromCharCode(109,0) == analytic8 ? dropdownP : analytic8.length);
        lockOrientation("PORTRAIT");

   if (analytic8.length == collectiony.length) {
      analytic8 = `${parseInt(`${paginatione}`) >> (Math.min(1, Math.abs(1)))}`;
   }
   let gpay1 = 9659398 >= dropdownP;
   do {
      dropdownP -= data7.length;
      if (gpay1) {
         break;
      }
   } while (gpay1 && ((dropdownP % 2) < 1 || 2 < (dropdownP % (Math.max(4, navigationT)))));
   while ((data7.length * parseInt(`${paginatione}`)) < 3) {
      data7.push(helperE.size);
      break;
   }
   for (let m = 0; m < 1; m++) {
      loadingi = "3";
   }
   while (gemfile4.startsWith(`${dropdownP}`)) {
      gemfile4 += `${gemfile4.length / (Math.max(1, collectiony.length))}`;
      break;
   }
        setIsFullScreen(false);
      } else {

   let frame_z_5 = analytic8 == String.fromCharCode(51,95,106,0);
   do {
      analytic8 += `${gemfile4.length}`;
      if (frame_z_5) {
         break;
      }
   } while ((analytic8.startsWith(`${loadingi.length}`)) && frame_z_5);
   let sliderx = 7018312 <= navigationT;
   do {
      navigationT >>= Math.min(collectiony.length, 5);
      if (sliderx) {
         break;
      }
   } while ((2 >= (2 * navigationT) && 3 >= (navigationT * 2)) && sliderx);
      navigationT += analytic8.length << (Math.min(Math.abs(2), 4));
   while (gemfile4.endsWith(analytic8)) {
      gemfile4 += `${loadingi.length}`;
      break;
   }
   let malaysia9 = data7.length >= 5909339;
   do {
      data7 = [parseInt(`${paginatione}`) * 3];
      if (malaysia9) {
         break;
      }
   } while (malaysia9 && (1 == collectiony.length));
        

      collectiony += "3";
      data7 = [(String.fromCharCode(105,0) == loadingi ? loadingi.length : gemfile4.length)];
       let navigationG = 5.0;
       let downloaded1 = String.fromCharCode(120,106,112,101,103,95,101,95,57,56,0);
         navigationG *= parseFloat(`${parseInt(`${navigationG}`)}`);
      for (let t = 0; t < 2; t++) {
          let usernameY = String.fromCharCode(115,121,109,98,111,108,95,52,95,50,54,0);
          let specv: Array<any> = [479, 701, 634];
          let tickedc: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,114,115,99,111,114,101,95,108,95,55,50,0),861], [String.fromCharCode(97,119,97,105,116,95,121,95,49,57,0),235], [String.fromCharCode(106,95,55,53,95,114,101,99,111,103,110,105,122,101,114,115,0),717]]);
          let logind = String.fromCharCode(99,95,55,53,95,99,111,109,109,105,116,116,101,100,0);
         navigationG *= parseFloat(`${logind.length >> (Math.min(usernameY.length, 5))}`);
         usernameY = `${specv.length}`;
         specv.push(tickedc.size % 3);
         tickedc.set(`${specv.length}`, tickedc.size & specv.length);
         logind += `${tickedc.size}`;
      }
         navigationG -= parseFloat(`${parseInt(`${navigationG}`)}`);
      for (let h = 0; h < 1; h++) {
         downloaded1 = `${3 + downloaded1.length}`;
      }
      while ((4 >> (Math.min(4, downloaded1.length))) <= 3 || (4 + downloaded1.length) <= 2) {
          let analyticv = true;
         navigationG += parseFloat(`${parseInt(`${navigationG}`) + downloaded1.length}`);
         analyticv = analyticv || !analyticv;
         break;
      }
      if ((5 % (Math.max(1, downloaded1.length))) == 2 && 3 == (5 ^ downloaded1.length)) {
          let const_gjW: Map<any, any> = new Map([[String.fromCharCode(116,95,55,52,95,109,101,115,97,103,101,0),728], [String.fromCharCode(116,95,49,48,48,95,116,101,110,99,0),941]]);
          let acceptedb = String.fromCharCode(102,95,54,55,95,116,120,116,0);
          let icong = 4;
          let actionY: Map<any, any> = new Map([[String.fromCharCode(115,95,51,53,95,97,99,99,117,109,0),String.fromCharCode(101,95,51,48,95,97,115,111,99,105,100,0)], [String.fromCharCode(97,95,50,51,0),String.fromCharCode(114,95,49,50,95,97,117,116,111,100,101,108,101,116,101,0)]]);
         downloaded1 += `${1 & downloaded1.length}`;
         const_gjW.set(`${const_gjW.size}`, 2 & actionY.size);
         acceptedb += `${(acceptedb == String.fromCharCode(83,0) ? acceptedb.length : const_gjW.size)}`;
         icong *= actionY.size;
      }
      collectiony = `${helperE.size}`;
      navigationT -= 1;
   for (let a = 0; a < 1; a++) {
      paginatione *= parseFloat(`${1 * modulec.length}`);
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
       let analyticsz = String.fromCharCode(118,95,56,57,95,102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,0);
    let pressureI = String.fromCharCode(104,95,57,57,95,117,112,108,111,97,100,97,98,108,101,0);
    let container2 = 2.0;
    let condensed5 = String.fromCharCode(100,101,106,117,100,100,101,114,95,103,95,50,0);
    let cast_ = String.fromCharCode(102,116,115,121,121,95,107,95,57,49,0);
    let areav = 1;
    let aboutp = String.fromCharCode(111,112,117,115,108,97,99,105,110,103,95,121,95,55,57,0);
    let group7 = 2.0;
    let private_keA = 2.0;
    let containerg: Array<any> = [String.fromCharCode(109,95,54,52,95,97,100,100,114,0), String.fromCharCode(108,95,55,52,95,105,110,116,101,114,108,101,97,118,105,110,103,0), String.fromCharCode(107,95,49,57,95,97,97,100,0)];
    let matchr = String.fromCharCode(115,105,103,110,112,111,115,116,95,98,95,51,48,0);
       let aboutd = true;
       let searchbark = String.fromCharCode(117,95,57,54,95,112,114,111,112,115,0);
       let configuret = String.fromCharCode(103,95,53,56,95,116,114,101,97,116,0);
         configuret += `${(1 >> (Math.min(1, Math.abs((aboutd ? 1 : 2)))))}`;
      if (configuret.includes(`${aboutd}`)) {
         aboutd = searchbark.length == 34 || !aboutd;
      }
      let backr = aboutd ? !aboutd : aboutd;
      do {
          let stepx = String.fromCharCode(115,95,57,57,95,112,105,110,99,104,0);
         aboutd = configuret.length == stepx.length;
         if (backr) {
            break;
         }
      } while (backr && (configuret.length < 2));
      while (searchbark.length > 3 || aboutd) {
         searchbark += `${configuret.length | searchbark.length}`;
         break;
      }
      for (let v = 0; v < 2; v++) {
         configuret += `${1 | searchbark.length}`;
      }
         configuret = `${((aboutd ? 4 : 3) * searchbark.length)}`;
      if (searchbark.length >= 4) {
          let chartw = true;
          let moviesd: Array<any> = [968, 8, 538];
          let bootsplash0 = 2.0;
          let l_countU = String.fromCharCode(114,95,56,51,95,105,115,97,108,110,117,109,0);
          let minimizeP = String.fromCharCode(102,95,52,49,95,115,105,122,101,100,0);
         searchbark += `${parseInt(`${bootsplash0}`)}`;
         chartw = minimizeP.length >= l_countU.length;
         moviesd = [l_countU.length % (Math.max(1, 8))];
         bootsplash0 -= (String.fromCharCode(82,0) == l_countU ? (chartw ? 5 : 5) : l_countU.length);
         minimizeP = `${l_countU.length}`;
      }
      if (!configuret.includes(`${aboutd}`)) {
         configuret += `${((aboutd ? 1 : 3))}`;
      }
      while (!configuret.startsWith(`${aboutd}`)) {
         configuret = `${((aboutd ? 1 : 3))}`;
         break;
      }
      analyticsz += `${areav | aboutp.length}`;
   if (condensed5.length >= 1) {
      condensed5 = `${2 - cast_.length}`;
   }
   for (let t = 0; t < 3; t++) {
      private_keA /= Math.max(3, 5);
   }
   for (let h = 0; h < 3; h++) {
       let chartr = String.fromCharCode(109,95,56,56,95,105,110,118,97,108,105,100,97,116,101,100,0);
       let settingsA: Array<any> = [586, 646, 976];
       let progressH = String.fromCharCode(104,95,54,55,95,116,111,109,111,114,114,111,119,0);
       let rightV = 1.0;
       let untick7 = 2.0;
          let backgroundy = 0.0;
          let membershipO = 2.0;
          let fastforwardb: Array<any> = [String.fromCharCode(101,118,101,114,121,98,111,100,121,95,117,95,57,55,0), String.fromCharCode(119,95,53,55,95,116,114,117,110,99,97,116,105,111,110,0), String.fromCharCode(97,112,112,101,110,100,95,48,95,51,52,0)];
         progressH = `${(chartr == String.fromCharCode(68,0) ? chartr.length : progressH.length)}`;
         backgroundy *= parseFloat(`${2}`);
         membershipO -= 2 ^ parseInt(`${backgroundy}`);
         fastforwardb.push(2 / (Math.max(9, parseInt(`${membershipO}`))));
         progressH += `${chartr.length}`;
         rightV += parseFloat(`${settingsA.length}`);
       let untickT = String.fromCharCode(121,95,50,51,95,115,117,99,99,101,115,115,111,114,0);
       let cornerN = String.fromCharCode(112,97,99,107,101,116,104,101,97,100,101,114,95,98,95,50,49,0);
      while (3 > (4 >> (Math.min(4, progressH.length)))) {
          let c_lockz = 4.0;
          let vignette5: Array<any> = [934, 138, 839];
          let tailZ: Map<any, any> = new Map([[String.fromCharCode(116,95,57,53,95,105,110,118,105,115,105,98,108,101,0),String.fromCharCode(116,111,110,101,109,97,112,95,51,95,54,57,0)], [String.fromCharCode(110,95,51,53,95,108,111,116,116,105,101,107,101,121,112,97,116,104,0),String.fromCharCode(99,95,57,54,95,98,121,116,101,0)]]);
          let langO = String.fromCharCode(98,114,105,100,103,101,95,117,95,49,50,0);
         rightV -= parseFloat(`${chartr.length ^ tailZ.size}`);
         c_lockz *= vignette5.length & parseInt(`${c_lockz}`);
         vignette5.push(langO.length);
         tailZ = new Map([[`${vignette5.length}`, vignette5.length]]);
         langO += `${2 - parseInt(`${c_lockz}`)}`;
         break;
      }
         rightV -= parseFloat(`${cornerN.length}`);
      while (3 >= (settingsA.length + parseInt(`${untick7}`)) && (parseInt(`${untick7}`) + settingsA.length) >= 3) {
         untick7 *= parseInt(`${untick7}`);
         break;
      }
       let blackg = 2.0;
       let componentY = 1.0;
      if ((progressH.length & 1) < 1) {
         componentY -= untickT.length;
      }
          let paginationh = String.fromCharCode(115,101,103,100,97,116,97,95,97,95,55,52,0);
         blackg *= parseInt(`${componentY}`) | 2;
         paginationh = `${paginationh.length}`;
         untick7 += parseInt(`${componentY}`);
      let long_oen = blackg <= 8653911.0;
      do {
          let backward3 = String.fromCharCode(113,119,111,114,100,95,109,95,57,51,0);
         blackg /= Math.max(chartr.length, 1);
         backward3 = `${backward3.length % (Math.max(2, 10))}`;
         if (long_oen) {
            break;
         }
      } while (((blackg - 5.18) == 2.52 || 4 == (5 - parseInt(`${blackg}`))) && long_oen);
      for (let t = 0; t < 2; t++) {
          let popupA = String.fromCharCode(116,95,57,56,0);
          let iconH: Map<any, any> = new Map([[String.fromCharCode(114,95,50,55,95,117,116,120,111,0),String.fromCharCode(101,95,49,48,48,95,114,101,100,101,108,105,118,101,114,121,0)], [String.fromCharCode(113,95,51,55,95,115,101,114,105,97,108,105,122,101,100,0),String.fromCharCode(112,114,111,98,115,95,98,95,56,54,0)], [String.fromCharCode(120,95,55,50,95,117,110,97,115,115,105,103,110,101,100,0),String.fromCharCode(106,95,56,54,95,111,110,115,101,116,0)]]);
          let aboutD = String.fromCharCode(99,111,114,114,101,99,116,101,100,95,106,95,57,54,0);
         chartr = "3";
         popupA += `${(String.fromCharCode(76,0) == popupA ? iconH.size : popupA.length)}`;
         iconH.set(`${aboutD}`, (String.fromCharCode(74,0) == aboutD ? iconH.size : aboutD.length));
      }
         blackg /= Math.max(3, 3 + parseInt(`${componentY}`));
      while (parseInt(`${blackg}`) < chartr.length) {
         chartr += `${3 >> (Math.min(Math.abs(parseInt(`${blackg}`)), 3))}`;
         break;
      }
      cast_ = `${pressureI.length >> (Math.min(3, Math.abs(parseInt(`${private_keA}`))))}`;
   }
      condensed5 = `${1 >> (Math.min(1, analyticsz.length))}`;
   for (let s = 0; s < 3; s++) {
      private_keA /= Math.max(condensed5.length, 4);
   }
      container2 += parseFloat(`${3}`);
      group7 *= parseFloat(`${parseInt(`${private_keA}`)}`);
       let injurye = String.fromCharCode(106,95,55,95,54,95,53,56,0);
       let disconnectedF = 1.0;
       let orangei: Map<any, any> = new Map([[String.fromCharCode(121,95,53,55,95,108,97,122,121,0),107], [String.fromCharCode(107,95,52,57,95,114,101,115,112,111,110,115,101,115,0),727], [String.fromCharCode(119,95,52,51,95,105,110,104,105,98,105,116,0),972]]);
         disconnectedF *= parseFloat(`${2 >> (Math.min(4, injurye.length))}`);
         disconnectedF += parseFloat(`${parseInt(`${disconnectedF}`)}`);
         orangei.set(`${disconnectedF}`, orangei.size);
      let penalty8 = 7841887.0 >= disconnectedF;
      do {
         disconnectedF /= Math.max(3, parseFloat(`${1 ^ injurye.length}`));
         if (penalty8) {
            break;
         }
      } while (penalty8 && (injurye.includes(`${disconnectedF}`)));
         disconnectedF /= Math.max(parseFloat(`${2 ^ injurye.length}`), 4);
         orangei = new Map([[injurye, (injurye == String.fromCharCode(97,0) ? parseInt(`${disconnectedF}`) : injurye.length)]]);
      for (let s = 0; s < 3; s++) {
         disconnectedF -= parseFloat(`${injurye.length / 1}`);
      }
         disconnectedF /= Math.max(5, parseFloat(`${1}`));
      while (disconnectedF <= 2.0) {
         orangei.set(injurye, 3 | orangei.size);
         break;
      }
      group7 /= Math.max(2, parseFloat(`${parseInt(`${private_keA}`) * 3}`));
   while (group7 <= parseFloat(`${analyticsz.length}`)) {
      analyticsz += `${areav % 3}`;
      break;
   }
   if (pressureI.endsWith(`${container2}`)) {
      pressureI += `${cast_.length & 1}`;
   }
      container2 += parseFloat(`${parseInt(`${container2}`)}`);
      condensed5 = `${(String.fromCharCode(50,0) == cast_ ? cast_.length : pressureI.length)}`;
       let collectionp: Array<any> = [27, 101, 549];
       let sliderY = String.fromCharCode(112,117,116,110,117,109,112,97,115,115,101,115,95,56,95,57,57,0);
      while (5 > (sliderY.length * 1)) {
          let short_h4c = String.fromCharCode(118,95,55,53,95,99,111,108,105,110,101,97,114,0);
          let brightnessu = 2.0;
          let nexto = false;
          let memberX: Array<any> = [590, 44, 907];
         collectionp = [short_h4c.length];
         short_h4c = `${((nexto ? 4 : 3) ^ 3)}`;
         brightnessu *= ((nexto ? 1 : 5) + memberX.length);
         memberX.push(memberX.length - 2);
         break;
      }
          let xvod2 = String.fromCharCode(100,101,99,111,114,97,116,101,95,108,95,55,55,0);
         sliderY = `${sliderY.length % 3}`;
         xvod2 += "1";
      while (!sliderY.startsWith(`${collectionp.length}`)) {
         sliderY += `${1 - sliderY.length}`;
         break;
      }
      let readB = collectionp.length <= 7430197;
      do {
         collectionp.push((sliderY == String.fromCharCode(57,0) ? sliderY.length : collectionp.length));
         if (readB) {
            break;
         }
      } while (((collectionp.length / (Math.max(sliderY.length, 1))) >= 2 || (collectionp.length / 2) >= 5) && readB);
       let volumeh = String.fromCharCode(115,119,105,116,99,104,97,98,108,101,95,55,95,54,49,0);
       let termsk = String.fromCharCode(117,95,55,48,95,115,105,110,113,105,0);
          let z_titlex = String.fromCharCode(108,115,98,115,95,121,95,53,55,0);
          let sideN: Map<any, any> = new Map([[String.fromCharCode(118,109,104,100,95,112,95,55,49,0),540], [String.fromCharCode(108,95,53,55,95,114,101,117,112,108,111,97,100,0),317], [String.fromCharCode(102,116,118,112,108,97,115,116,110,111,100,101,95,113,95,57,0),726]]);
          let selected2 = String.fromCharCode(102,95,55,51,95,118,112,120,100,101,99,0);
         volumeh = `${sliderY.length ^ selected2.length}`;
         z_titlex += `${z_titlex.length}`;
         sideN = new Map([[`${sideN.size}`, sideN.size % (Math.max(z_titlex.length, 7))]]);
         selected2 += "3";
      areav &= pressureI.length ^ 2;

        console.log("err save vod!");

      aboutp += "3";
      group7 += parseFloat(`${condensed5.length % 3}`);
   if ((parseFloat(`${cast_.length}`) * group7) < 1.32 || 4 < (cast_.length * 1)) {
       let orangey = String.fromCharCode(120,109,108,115,95,110,95,51,49,0);
       let collectionE = 3;
       let data2 = String.fromCharCode(100,101,118,101,108,111,112,101,114,95,122,95,56,54,0);
         collectionE |= collectionE;
       let bingD = String.fromCharCode(107,95,52,52,95,97,121,98,114,0);
       let searchbar1 = true;
          let viewerR = String.fromCharCode(114,101,102,114,101,115,104,95,57,95,49,51,0);
          let gpayF = String.fromCharCode(112,111,115,116,112,114,111,99,114,101,115,95,100,95,50,53,0);
         orangey += `${collectionE}`;
         viewerR = `${3 << (Math.min(4, viewerR.length))}`;
         gpayF += `${gpayF.length}`;
       let membershipp = 1.0;
       let roomV = 0.0;
         searchbar1 = !data2.startsWith(`${membershipp}`);
         collectionE <<= Math.min(3, Math.abs(collectionE));
         data2 = `${bingD.length | 2}`;
       let enewsS = String.fromCharCode(99,95,50,95,113,112,101,108,0);
       let mappingW = String.fromCharCode(115,108,105,100,95,117,95,54,50,0);
      cast_ += `${condensed5.length | areav}`;
   }
   if ((3 - areav) > 5 && 3 > (areav % 3)) {
      group7 /= Math.max(parseFloat(`${2 | pressureI.length}`), 1);
   }
      pressureI += `${areav}`;
   let profileg = private_keA >= 9527082.0;
   do {
      private_keA += pressureI.length % 3;
      if (profileg) {
         break;
      }
   } while ((2.95 < (private_keA + 4.10)) && profileg);
   if (4 < (1 - condensed5.length) || 1 < (containerg.length - condensed5.length)) {
      condensed5 = `${parseInt(`${private_keA}`) - 1}`;
   }
   if (pressureI.length > 2) {
       let anythinkl: Map<any, any> = new Map([[String.fromCharCode(105,95,49,52,95,106,111,105,110,101,114,0),835], [String.fromCharCode(121,95,51,55,95,97,100,118,97,110,99,101,0),130], [String.fromCharCode(100,95,51,50,95,100,97,112,112,0),816]]);
       let topicO = true;
       let backl = 3.0;
       let indexz = String.fromCharCode(105,95,51,55,95,99,97,99,104,101,102,108,117,115,104,0);
       let main_lZ = 0.0;
      let yellowt = backl <= 6835485.0;
      do {
         backl /= Math.max(parseFloat(`${parseInt(`${backl}`) & 2}`), 1);
         if (yellowt) {
            break;
         }
      } while ((1.87 >= (main_lZ * 5)) && yellowt);
          let customu: Array<any> = [446, 912, 127];
         topicO = main_lZ == parseFloat(`${anythinkl.size}`);
         customu.push(customu.length << (Math.min(5, customu.length)));
      while (4.79 == main_lZ) {
         backl /= Math.max(5, parseFloat(`${anythinkl.size}`));
         break;
      }
       let networkk = 2.0;
       let upgradeC = 3.0;
      let combinedc = 8583236.0 >= networkk;
      do {
          let placementD = 3.0;
          let filled7 = String.fromCharCode(105,115,115,117,101,114,115,95,102,95,54,55,0);
          let modity7 = 2.0;
          let profilen = String.fromCharCode(112,107,99,114,121,112,116,95,104,95,56,53,0);
          let userq = true;
         networkk -= parseFloat(`${1 - parseInt(`${backl}`)}`);
         placementD += filled7.length;
         filled7 = "3";
         modity7 += ((userq ? 3 : 2) & parseInt(`${modity7}`));
         profilen = `${filled7.length}`;
         userq = !userq;
         if (combinedc) {
            break;
         }
      } while (combinedc && (main_lZ >= networkk));
      for (let q = 0; q < 2; q++) {
         anythinkl.set(`${main_lZ}`, anythinkl.size);
      }
      if (main_lZ >= upgradeC) {
          let yingv = String.fromCharCode(104,95,57,48,95,99,104,97,105,110,101,100,0);
          let current7 = String.fromCharCode(98,95,57,48,95,110,117,109,115,0);
          let whatsappN = true;
          let private_v4U = String.fromCharCode(101,95,51,53,95,109,101,97,110,0);
         upgradeC *= (parseFloat(`${2 % (Math.max(3, (whatsappN ? 3 : 5)))}`));
         yingv = "1";
         current7 += `${yingv.length % 3}`;
         whatsappN = 17 < current7.length;
         private_v4U = `${current7.length}`;
      }
      for (let k = 0; k < 2; k++) {
         anythinkl.set(`${backl}`, parseInt(`${main_lZ}`));
      }
          let orientationZ = String.fromCharCode(101,110,104,97,110,99,101,109,101,110,116,115,95,108,95,51,57,0);
          let langw: Array<any> = [534, 827];
          let miniQ = 1.0;
         backl -= parseFloat(`${parseInt(`${main_lZ}`) + 1}`);
         orientationZ = `${parseInt(`${miniQ}`)}`;
         langw = [orientationZ.length + 3];
         miniQ -= 3;
      let animationH = topicO ? !topicO : topicO;
      do {
          let windI = String.fromCharCode(100,101,115,105,114,101,100,95,103,95,49,54,0);
          let qcopy_n0Q = String.fromCharCode(122,95,53,95,116,112,99,0);
          let l_centerV: Map<any, any> = new Map([[String.fromCharCode(106,95,50,52,95,99,111,117,110,116,105,110,103,0),false ], [String.fromCharCode(119,95,56,53,95,98,105,110,111,109,105,97,108,0),false ], [String.fromCharCode(109,118,114,101,102,95,55,95,57,56,0),false ]]);
         topicO = backl > parseFloat(`${indexz.length}`);
         windI = `${qcopy_n0Q.length * l_centerV.size}`;
         qcopy_n0Q = `${l_centerV.size * 2}`;
         if (animationH) {
            break;
         }
      } while (animationH && (indexz.includes(`${topicO}`)));
      if (networkk <= 3.80) {
         networkk /= Math.max((parseFloat(`${(topicO ? 5 : 3) % (Math.max(parseInt(`${main_lZ}`), 8))}`)), 3);
      }
         networkk += parseFloat(`${parseInt(`${upgradeC}`)}`);
         networkk += (parseFloat(`${parseInt(`${main_lZ}`) ^ (topicO ? 4 : 5)}`));
         main_lZ += parseFloat(`${parseInt(`${backl}`) ^ 2}`);
      for (let s = 0; s < 3; s++) {
         backl /= Math.max(2, (parseFloat(`${(topicO ? 5 : 3) % 3}`)));
      }
      pressureI = `${3 ^ analyticsz.length}`;
   }
   for (let i = 0; i < 3; i++) {
      container2 /= Math.max(5, (parseFloat(`${aboutp == String.fromCharCode(68,0) ? areav : aboutp.length}`)));
   }
   while (cast_ == String.fromCharCode(48,0)) {
       let clubc: Array<any> = [String.fromCharCode(102,114,101,101,122,101,95,52,95,53,50,0), String.fromCharCode(98,110,104,101,120,95,103,95,51,54,0)];
       let middlewareh = false;
       let popupz = false;
      while (!popupz || (clubc.length >> (Math.min(Math.abs(2), 4))) < 4) {
          let tickedv = 4.0;
         clubc = [(parseInt(`${tickedv}`) << (Math.min(1, Math.abs((middlewareh ? 1 : 4)))))];
         break;
      }
       let membershipx = String.fromCharCode(108,105,98,97,118,102,105,108,116,101,114,95,116,95,54,54,0);
      while (!middlewareh && membershipx.length > 2) {
         middlewareh = 78 <= membershipx.length;
         break;
      }
         popupz = membershipx.length < 42 || popupz;
         membershipx = `${membershipx.length}`;
         popupz = ((clubc.length << (Math.min(1, Math.abs((middlewareh ? clubc.length : 64))))) <= 64);
      while (2 == clubc.length) {
         clubc = [3];
         break;
      }
      while (middlewareh) {
         middlewareh = !middlewareh;
         break;
      }
      while ((clubc.length & 1) == 5) {
          let pausee = 0;
          let weiboU: Array<any> = [659, 758];
          let dice9 = 5.0;
          let pressureB = 5.0;
         popupz = membershipx == String.fromCharCode(82,0);
         pausee -= 2 / (Math.max(5, parseInt(`${pressureB}`)));
         weiboU.push(parseInt(`${pressureB}`) | weiboU.length);
         dice9 *= parseFloat(`${parseInt(`${dice9}`)}`);
         break;
      }
      condensed5 += `${3 & parseInt(`${group7}`)}`;
      break;
   }
   while (1 >= areav) {
      areav %= Math.max(2, pressureI.length);
      break;
   }
   while (cast_.length >= pressureI.length) {
      pressureI = `${analyticsz.length / 3}`;
      break;
   }
      cast_ = `${pressureI.length}`;
      private_keA *= condensed5.length / 2;
        console.log(err);
      }
    };

    const deviceOrientationHandle = () => {
       let homez = String.fromCharCode(109,95,54,54,95,100,99,115,116,114,0);
    let notificationC = 3;
    let firebaseZ: Array<any> = [String.fromCharCode(111,95,50,53,95,109,98,109,111,100,101,0), String.fromCharCode(106,95,51,50,95,105,110,116,112,0)];
    let yingo = String.fromCharCode(99,97,108,108,111,117,116,95,122,95,50,55,0);
    let zhengpianw = String.fromCharCode(102,95,51,52,95,115,116,111,114,97,98,108,101,0);
    let iconC = 1.0;
    let custom1 = String.fromCharCode(120,95,57,53,95,97,115,105,115,0);
    let completeq = 1.0;
    let langkeyD = 2.0;
   let downloading3 = iconC >= 6868263.0;
   do {
      iconC /= Math.max(1, parseFloat(`${zhengpianw.length % (Math.max(8, custom1.length))}`));
      if (downloading3) {
         break;
      }
   } while (downloading3 && ((notificationC & 3) > 2 && 4.75 > (1.49 - iconC)));
   if ((homez.length << (Math.min(4, firebaseZ.length))) == 2) {
      firebaseZ.push(2);
   }

      

      iconC += parseFloat(`${notificationC / (Math.max(8, homez.length))}`);
       let storec = 3.0;
       let wind9 = 1.0;
       let internetM = String.fromCharCode(119,95,51,49,95,99,111,110,115,116,113,112,0);
          let recommendation3 = 1.0;
          let hookC: Map<any, any> = new Map([[String.fromCharCode(112,114,111,109,111,116,101,100,95,113,95,51,54,0),String.fromCharCode(117,109,111,116,105,111,110,95,122,95,57,51,0)], [String.fromCharCode(106,95,54,48,95,97,114,99,104,105,116,101,99,116,117,114,101,0),String.fromCharCode(117,95,51,50,95,116,111,116,97,108,0)], [String.fromCharCode(99,108,97,115,115,101,115,95,108,95,52,54,0),String.fromCharCode(115,118,97,103,95,53,95,50,54,0)]]);
         wind9 += parseFloat(`${hookC.size}`);
         recommendation3 *= parseInt(`${recommendation3}`) | parseInt(`${recommendation3}`);
         hookC = new Map([[`${recommendation3}`, 3]]);
          let mutedG = String.fromCharCode(113,95,57,53,95,99,101,110,116,101,114,105,110,103,0);
          let fullp = 3.0;
         wind9 /= Math.max(2, parseFloat(`${mutedG.length ^ 3}`));
         mutedG = "3";
         fullp -= parseFloat(`${parseInt(`${fullp}`)}`);
      for (let x = 0; x < 3; x++) {
         storec /= Math.max(3, 1 / (Math.max(6, parseInt(`${storec}`))));
      }
          let windP = 4;
          let temperatureA = String.fromCharCode(109,95,56,55,95,109,101,116,104,111,100,0);
          let calendar4 = 3.0;
         wind9 += parseFloat(`${temperatureA.length}`);
         windP += windP >> (Math.min(Math.abs(parseInt(`${calendar4}`)), 3));
         temperatureA += `${parseInt(`${calendar4}`) - windP}`;
      while (storec < wind9) {
         storec *= 1 | internetM.length;
         break;
      }
       let contextx: Map<any, any> = new Map([[String.fromCharCode(113,95,52,55,95,108,101,114,112,102,0),689], [String.fromCharCode(115,95,51,50,95,114,101,118,97,108,105,100,97,116,105,111,110,0),626]]);
         internetM = `${internetM.length * 3}`;
      for (let z = 0; z < 2; z++) {
          let tooltipsB = 5.0;
          let bannere = 5.0;
         storec += parseInt(`${bannere}`);
         tooltipsB *= parseFloat(`${parseInt(`${tooltipsB}`)}`);
         bannere /= Math.max(4, parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${tooltipsB}`)), 5))}`));
      }
          let screenj: Map<any, any> = new Map([[String.fromCharCode(120,95,52,48,95,102,108,97,103,115,0),true ], [String.fromCharCode(105,95,52,56,95,114,101,115,105,122,97,98,108,101,0),true ], [String.fromCharCode(98,105,114,116,104,100,97,116,101,95,121,95,55,48,0),true ]]);
          let fastforwardB = String.fromCharCode(100,111,119,110,115,104,105,102,116,95,48,95,55,52,0);
         wind9 -= parseFloat(`${2}`);
         screenj.set(fastforwardB, screenj.size + 2);
         fastforwardB += `${(fastforwardB == String.fromCharCode(74,0) ? screenj.size : fastforwardB.length)}`;
      firebaseZ = [parseInt(`${storec}`) * 2];
      if (
        devicesOrientation === "LANDSCAPE-LEFT" ||
        devicesOrientation === "LANDSCAPE-RIGHT"
      ) {

      homez += `${parseInt(`${iconC}`)}`;
      notificationC &= notificationC;
        setIsFullScreen(true);

      yingo = `${(String.fromCharCode(76,0) == custom1 ? custom1.length : notificationC)}`;
   for (let n = 0; n < 1; n++) {
      zhengpianw = "1";
   }
        

   while (zhengpianw == String.fromCharCode(113,0)) {
      homez = `${yingo.length - 2}`;
      break;
   }
      notificationC |= 1 * yingo.length;
        StatusBar.setHidden(true);

   if (custom1.includes(`${iconC}`)) {
       let goalG = String.fromCharCode(115,108,97,118,101,95,116,95,51,0);
       let launch0 = 4.0;
       let singaporeB: Array<any> = [193, 323, 278];
      let typesq = singaporeB.length <= 5502082;
      do {
         singaporeB = [goalG.length];
         if (typesq) {
            break;
         }
      } while (((singaporeB.length * parseInt(`${launch0}`)) < 1 && (5.84 * launch0) < 2.83) && typesq);
      while (4 < (goalG.length & 5)) {
         launch0 *= parseInt(`${launch0}`);
         break;
      }
         singaporeB = [parseInt(`${launch0}`) * 3];
      if (singaporeB.length > parseInt(`${launch0}`)) {
          let combined7: Map<any, any> = new Map([[String.fromCharCode(100,111,99,115,95,48,95,51,48,0),696], [String.fromCharCode(117,110,115,101,116,95,115,95,50,0),198]]);
          let pingn = false;
          let humidity1 = 1;
         singaporeB = [((pingn ? 4 : 2) / (Math.max(9, humidity1)))];
         combined7.set(`${combined7.size}`, combined7.size - combined7.size);
         pingn = combined7.size < combined7.size;
      }
      let rewindh = goalG.length >= 8200471;
      do {
          let hooksF = 1;
          let lightz = String.fromCharCode(110,95,57,52,95,97,118,103,120,0);
          let emptyw = String.fromCharCode(116,97,112,116,105,99,95,116,95,55,49,0);
          let applel = 3.0;
         goalG += `${goalG.length - 2}`;
         hooksF &= lightz.length | 2;
         lightz += `${hooksF & lightz.length}`;
         emptyw += `${(emptyw == String.fromCharCode(86,0) ? emptyw.length : parseInt(`${applel}`))}`;
         applel /= Math.max(hooksF, 4);
         if (rewindh) {
            break;
         }
      } while (rewindh && ((launch0 / 5.78) >= 3.96 || (launch0 / (Math.max(goalG.length, 8))) >= 5.78));
      let basketballY = String.fromCharCode(101,51,50,111,122,50,98,56,118,48,0) == goalG;
      do {
         goalG += `${parseInt(`${launch0}`) ^ goalG.length}`;
         if (basketballY) {
            break;
         }
      } while (basketballY && (3.1 >= (2.67 - launch0) && 3.49 >= (launch0 - 2.67)));
         launch0 /= Math.max(2, 2 / (Math.max(5, goalG.length)));
         launch0 += parseInt(`${launch0}`) ^ 1;
      let nterstitial8 = goalG == String.fromCharCode(111,53,121,111,0);
      do {
          let bellO: Array<any> = [336, 625, 904];
          let overt = String.fromCharCode(110,111,116,105,99,101,115,95,53,95,55,48,0);
          let tooltipsg = 3.0;
          let bufferF = 1;
         goalG += `${2 - bellO.length}`;
         bellO = [2 + bufferF];
         overt += "2";
         tooltipsg -= overt.length >> (Math.min(1, Math.abs(parseInt(`${tooltipsg}`))));
         bufferF ^= parseInt(`${tooltipsg}`) - 2;
         if (nterstitial8) {
            break;
         }
      } while ((4 == (goalG.length - parseInt(`${launch0}`)) || 4 == (parseInt(`${launch0}`) - goalG.length)) && nterstitial8);
      iconC -= parseFloat(`${parseInt(`${iconC}`)}`);
   }
   if (homez.startsWith(`${custom1.length}`)) {
       let brightnessS = 4.0;
       let footballQ: Array<any> = [122, 663];
       let completef: Map<any, any> = new Map([[String.fromCharCode(109,95,50,55,95,105,110,116,108,105,115,116,0),false ], [String.fromCharCode(99,95,55,57,95,110,112,97,116,99,104,101,115,0),true ], [String.fromCharCode(107,110,111,98,95,48,95,48,0),false ]]);
         completef = new Map([[`${completef.size}`, parseInt(`${brightnessS}`)]]);
      while (4 > (parseInt(`${brightnessS}`) - footballQ.length)) {
          let carousels = String.fromCharCode(100,115,100,112,99,109,95,120,95,54,48,0);
          let routerE = String.fromCharCode(116,111,107,101,110,116,120,95,112,95,56,0);
          let controls_ = 0.0;
          let background2 = true;
         footballQ.push(carousels.length % (Math.max(4, parseInt(`${controls_}`))));
         carousels += `${routerE.length}`;
         routerE += "2";
         controls_ /= Math.max(((background2 ? 4 : 4) * routerE.length), 3);
         break;
      }
      for (let t = 0; t < 3; t++) {
          let progressI = 0;
          let verticalU = false;
         completef.set(`${progressI}`, 1 << (Math.min(4, Math.abs(completef.size))));
         progressI &= ((verticalU ? 1 : 4));
      }
      while ((completef.size - footballQ.length) < 1 && 2 < (1 - footballQ.length)) {
         completef = new Map([[`${completef.size}`, completef.size >> (Math.min(Math.abs(1), 4))]]);
         break;
      }
         footballQ.push(parseInt(`${brightnessS}`));
      if (2.54 > (brightnessS / 5.41)) {
          let white9: Map<any, any> = new Map([[String.fromCharCode(102,116,115,105,115,115,112,97,99,101,95,111,95,50,56,0),String.fromCharCode(116,101,108,95,49,95,51,50,0)], [String.fromCharCode(121,95,54,49,95,119,114,105,116,97,98,108,101,0),String.fromCharCode(115,104,97,114,101,95,104,95,54,55,0)], [String.fromCharCode(112,97,114,97,108,108,97,120,95,98,95,53,54,0),String.fromCharCode(112,97,114,101,110,116,95,112,95,57,51,0)]]);
         footballQ = [footballQ.length ^ 3];
         white9.set(`${white9.size}`, white9.size);
      }
         completef.set(`${footballQ.length}`, footballQ.length ^ completef.size);
          let selectionm = String.fromCharCode(111,95,53,95,115,100,112,0);
          let floaterc = String.fromCharCode(99,111,109,112,97,110,121,95,113,95,52,54,0);
          let castingE = String.fromCharCode(109,95,53,53,95,116,111,109,105,99,0);
         brightnessS -= footballQ.length * selectionm.length;
         selectionm += `${castingE.length}`;
         floaterc = `${castingE.length + 3}`;
         brightnessS /= Math.max(1, parseInt(`${brightnessS}`) & completef.size);
      custom1 += `${parseInt(`${brightnessS}`) % (Math.max(custom1.length, 10))}`;
   }

        lockOrientation(devicesOrientation);
      } else if (devicesOrientation === "PORTRAIT") {

   while (firebaseZ.length > yingo.length) {
      firebaseZ.push((String.fromCharCode(116,0) == zhengpianw ? parseInt(`${iconC}`) : zhengpianw.length));
      break;
   }
   if ((iconC * parseFloat(`${notificationC}`)) > 1.2 && 4 > (1 * notificationC)) {
      iconC *= parseFloat(`${2 * homez.length}`);
   }
        setIsFullScreen(false);

   for (let j = 0; j < 1; j++) {
      notificationC %= Math.max(homez.length, 4);
   }
       let plashp = 0.0;
       let analyticsf = 3;
       let clock6 = String.fromCharCode(115,95,52,52,95,109,97,114,107,105,110,103,115,0);
          let gmailr: Array<any> = [898, 903];
          let loginm = String.fromCharCode(97,95,54,53,95,115,117,98,108,97,121,111,117,116,0);
         analyticsf *= (String.fromCharCode(115,0) == clock6 ? clock6.length : gmailr.length);
         gmailr = [2];
         loginm = `${3 + loginm.length}`;
          let controlsu = String.fromCharCode(100,95,51,57,95,103,114,101,97,116,101,115,116,0);
          let default_6u: Array<any> = [484, 263];
          let feedbackp = false;
         plashp *= (parseFloat(`${String.fromCharCode(106,0) == clock6 ? default_6u.length : clock6.length}`));
         controlsu += `${((feedbackp ? 3 : 2) - 1)}`;
         default_6u.push(2 - controlsu.length);
      if ((4 + analyticsf) == 2) {
         clock6 = `${(clock6 == String.fromCharCode(55,0) ? analyticsf : clock6.length)}`;
      }
         plashp -= parseFloat(`${analyticsf}`);
         clock6 += `${analyticsf}`;
       let main_dq = 5.0;
       let iconz = 5.0;
      let common4 = main_dq >= 5158123.0;
      do {
         main_dq *= parseInt(`${plashp}`) >> (Math.min(4, Math.abs(parseInt(`${main_dq}`))));
         if (common4) {
            break;
         }
      } while ((2.87 > (main_dq + iconz) || (2.87 + main_dq) > 5.21) && common4);
         analyticsf <<= Math.min(5, Math.abs(1 + analyticsf));
          let matches2 = String.fromCharCode(104,95,54,55,95,115,121,110,99,97,98,108,101,0);
         main_dq *= parseInt(`${plashp}`) - analyticsf;
         matches2 += `${matches2.length}`;
      notificationC &= 2;
        

   if (notificationC >= homez.length) {
       let uploadK = String.fromCharCode(100,95,57,54,95,115,119,105,116,99,104,97,98,108,101,0);
       let plusK = true;
       let pingH: Array<any> = [970, 29];
       let switch_dbi: Map<any, any> = new Map([[String.fromCharCode(114,101,115,97,109,112,95,115,95,51,52,0),true ], [String.fromCharCode(97,95,55,49,95,102,105,101,108,100,0),true ], [String.fromCharCode(120,95,55,53,95,111,112,101,110,109,112,116,0),false ]]);
       let vietnamj: Map<any, any> = new Map([[String.fromCharCode(108,95,50,56,95,109,115,101,99,115,0),String.fromCharCode(106,95,52,49,95,116,106,117,116,105,108,0)], [String.fromCharCode(108,111,119,101,114,95,101,95,53,49,0),String.fromCharCode(108,105,98,106,112,101,103,116,117,114,98,111,95,54,95,56,48,0)]]);
         vietnamj = new Map([[`${switch_dbi.size}`, switch_dbi.size + uploadK.length]]);
      let catalogD = 9469096 >= switch_dbi.size;
      do {
          let sheetm = String.fromCharCode(111,95,55,57,95,99,111,110,102,105,103,117,114,97,116,105,111,110,0);
          let clockA: Map<any, any> = new Map([[String.fromCharCode(116,95,54,52,95,105,110,100,101,120,97,98,108,101,0),String.fromCharCode(110,95,49,52,95,109,97,110,116,105,115,115,97,115,0)], [String.fromCharCode(115,95,50,55,95,109,115,103,115,109,0),String.fromCharCode(111,99,99,117,114,114,101,110,99,101,115,95,120,95,56,0)], [String.fromCharCode(119,114,105,116,97,98,108,101,95,103,95,49,49,0),String.fromCharCode(97,110,116,105,97,108,105,97,115,105,110,103,95,104,95,55,56,0)]]);
          let blackx: Array<any> = [409, 430, 883];
         switch_dbi.set(`${sheetm}`, (String.fromCharCode(51,0) == sheetm ? sheetm.length : vietnamj.size));
         clockA.set(`${blackx.length}`, clockA.size);
         blackx = [blackx.length];
         if (catalogD) {
            break;
         }
      } while ((4 >= (switch_dbi.size & 1)) && catalogD);
      while ((vietnamj.size >> (Math.min(Math.abs(4), 3))) >= 5 && 4 >= vietnamj.size) {
         plusK = String.fromCharCode(74,0) == uploadK;
         break;
      }
      let minivods = vietnamj.size <= 7748999;
      do {
         vietnamj = new Map([[`${vietnamj.size}`, pingH.length | vietnamj.size]]);
         if (minivods) {
            break;
         }
      } while (minivods && (2 > (4 << (Math.min(4, Math.abs(switch_dbi.size)))) || (4 << (Math.min(1, Math.abs(switch_dbi.size)))) > 5));
      while ((switch_dbi.size % 4) >= 3) {
         plusK = uploadK == String.fromCharCode(78,0);
         break;
      }
      if (!plusK) {
         uploadK = `${(2 * (plusK ? 2 : 5))}`;
      }
      while (uploadK.length > 5) {
          let footballt = String.fromCharCode(109,95,54,53,95,107,110,111,98,0);
          let watch0 = true;
          let progressX: Map<any, any> = new Map([[String.fromCharCode(111,95,50,50,0),String.fromCharCode(115,111,108,118,101,95,115,95,56,56,0)], [String.fromCharCode(105,110,116,105,95,106,95,53,49,0),String.fromCharCode(98,111,117,110,100,95,105,95,56,57,0)], [String.fromCharCode(101,95,53,56,95,97,108,97,114,109,0),String.fromCharCode(110,95,49,55,95,112,97,115,115,112,104,114,97,115,101,0)]]);
         pingH = [footballt.length - 3];
         footballt += `${progressX.size & 2}`;
         watch0 = progressX.size >= 10;
         break;
      }
      let filterB = switch_dbi.size <= 6133834;
      do {
          let default__9p = String.fromCharCode(105,95,51,48,95,107,98,100,119,105,110,0);
         switch_dbi.set(`${switch_dbi.size}`, vietnamj.size / 2);
         default__9p = `${(String.fromCharCode(119,0) == default__9p ? default__9p.length : default__9p.length)}`;
         if (filterB) {
            break;
         }
      } while (filterB && (!uploadK.endsWith(`${switch_dbi.size}`)));
      notificationC %= Math.max(3, (zhengpianw.length ^ (plusK ? 1 : 1)));
   }
   let short_oW = 7661696 >= yingo.length;
   do {
      yingo = `${custom1.length | zhengpianw.length}`;
      if (short_oW) {
         break;
      }
   } while ((2.49 <= (langkeyD * yingo.length) && 2.49 <= (yingo.length * langkeyD)) && short_oW);
        StatusBar.setHidden(false);

      iconC *= parseFloat(`${parseInt(`${langkeyD}`)}`);
       let soundU: Array<any> = [620, 700, 450];
       let borderless6: Map<any, any> = new Map([[String.fromCharCode(98,95,52,55,95,116,109,112,108,0),438], [String.fromCharCode(120,95,51,52,95,102,105,108,116,101,114,105,110,103,0),918]]);
       let styleW = String.fromCharCode(110,111,110,98,108,111,99,107,105,110,103,95,98,95,57,55,0);
         styleW = `${soundU.length}`;
      for (let q = 0; q < 3; q++) {
         styleW += `${soundU.length}`;
      }
      while (borderless6.size <= styleW.length) {
          let smalln: Map<any, any> = new Map([[String.fromCharCode(103,95,51,51,95,97,100,97,112,116,101,114,0),String.fromCharCode(108,95,53,48,95,97,115,121,110,99,104,114,111,110,111,117,115,108,121,0)], [String.fromCharCode(103,95,54,50,95,105,112,104,111,110,101,0),String.fromCharCode(115,105,110,103,117,108,97,114,95,57,95,53,52,0)]]);
         borderless6.set(`${soundU.length}`, 2);
         smalln = new Map([[`${smalln.size}`, smalln.size ^ 2]]);
         break;
      }
         soundU.push(soundU.length << (Math.min(Math.abs(2), 1)));
         borderless6 = new Map([[`${borderless6.size}`, borderless6.size >> (Math.min(soundU.length, 2))]]);
         soundU = [borderless6.size / 1];
      while (borderless6.size > styleW.length) {
         styleW += `${styleW.length << (Math.min(Math.abs(3), 4))}`;
         break;
      }
          let infoO = String.fromCharCode(110,95,55,55,95,101,110,116,114,105,101,115,0);
          let submitN = 2.0;
          let favoriteN = String.fromCharCode(119,101,98,115,111,99,107,101,116,95,102,95,53,50,0);
         soundU = [styleW.length];
         infoO += `${parseInt(`${submitN}`) - 3}`;
         submitN -= 1;
         favoriteN += `${2 * infoO.length}`;
         soundU = [soundU.length];
      zhengpianw += `${parseInt(`${langkeyD}`)}`;

        lockOrientation(devicesOrientation);
      }
    };

    const onToggleFullScreen = useCallback(() => {
       let fullO: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,114,97,105,110,101,100,95,55,95,48,0),false ], [String.fromCharCode(122,95,52,54,95,100,109,97,99,0),true ], [String.fromCharCode(112,105,99,109,101,109,115,101,116,95,122,95,50,53,0),false ]]);
    let xvodH = 2;
    let renewi: Array<any> = [String.fromCharCode(121,111,110,108,121,120,95,55,95,48,0), String.fromCharCode(107,95,53,52,95,100,111,116,116,101,100,0)];
    let paginationW = String.fromCharCode(112,101,114,115,112,95,50,95,53,0);
    let sortU = 3.0;
    let basketballC = String.fromCharCode(116,95,51,52,95,115,101,108,101,99,116,0);
    let controla = String.fromCharCode(104,111,115,116,112,111,114,116,102,105,108,101,95,117,95,49,49,0);
    let score1 = String.fromCharCode(108,115,112,108,112,99,95,104,95,50,50,0);
    let skipm = String.fromCharCode(108,105,98,99,101,108,116,95,110,95,49,57,0);
    let megaphoneF = true;
    let moded = String.fromCharCode(115,99,111,112,101,115,95,122,95,57,51,0);
    let fillc = false;
    let tempb = 1.0;
    let w_playerM: Map<any, any> = new Map([[String.fromCharCode(121,95,51,49,95,100,101,109,97,116,101,114,105,97,108,105,122,101,0),278], [String.fromCharCode(115,117,98,100,101,99,111,100,101,114,95,49,95,53,48,0),157], [String.fromCharCode(118,111,119,101,108,115,95,100,95,53,55,0),644]]);
    let minivodr = 3.0;
    let play8R = String.fromCharCode(108,95,51,50,95,119,97,115,0);
    let selectw = String.fromCharCode(98,111,119,108,105,110,103,95,114,95,48,0);
    let trophy_ = 1.0;
   if (1.61 >= (xvodH - sortU)) {
      xvodH %= Math.max(fullO.size, 1);
   }
      fillc = (fullO.size % (Math.max(score1.length, 7))) == 74;
       let text2 = String.fromCharCode(117,110,114,101,102,99,111,117,110,116,95,54,95,50,55,0);
       let default_loH = 1;
       let untickb = 1;
      for (let l = 0; l < 1; l++) {
         untickb ^= text2.length - default_loH;
      }
         text2 = `${text2.length | default_loH}`;
      while (4 >= untickb) {
          let cornerr: Map<any, any> = new Map([[String.fromCharCode(120,95,49,49,95,116,105,102,102,0),false ], [String.fromCharCode(107,95,49,57,95,101,108,115,0),true ]]);
          let side3 = String.fromCharCode(97,95,56,95,114,111,117,110,100,101,100,110,101,115,115,0);
          let shirty: Map<any, any> = new Map([[String.fromCharCode(114,95,50,54,95,115,97,109,112,108,101,114,101,100,117,99,116,105,111,110,0),107], [String.fromCharCode(101,95,49,48,48,95,111,117,116,102,105,108,101,115,0),751], [String.fromCharCode(108,95,52,48,95,112,105,101,0),497]]);
          let subs1 = String.fromCharCode(107,95,57,52,95,99,111,114,100,122,0);
         text2 += `${cornerr.size ^ side3.length}`;
         cornerr = new Map([[`${shirty.size}`, (String.fromCharCode(111,0) == subs1 ? subs1.length : shirty.size)]]);
         side3 += "3";
         break;
      }
      let switch_0Q = text2 == String.fromCharCode(111,116,111,51,57,102,101,112,114,121,0);
      do {
         text2 = `${text2.length}`;
         if (switch_0Q) {
            break;
         }
      } while ((1 == untickb) && switch_0Q);
       let typing6 = String.fromCharCode(118,95,50,55,95,110,111,110,110,117,108,108,115,99,104,101,109,101,115,0);
      let windf = text2.length <= 6834118;
      do {
          let lineZ = String.fromCharCode(115,116,114,97,116,101,103,105,101,115,95,115,95,56,51,0);
          let config2: Map<any, any> = new Map([[String.fromCharCode(102,97,115,116,95,57,95,50,49,0),644], [String.fromCharCode(118,95,57,50,95,115,116,97,107,101,100,0),457]]);
          let verticalr = true;
         text2 = `${typing6.length}`;
         lineZ += "2";
         config2 = new Map([[`${config2.size}`, lineZ.length ^ config2.size]]);
         verticalr = lineZ.length <= 37;
         if (windf) {
            break;
         }
      } while (windf && (text2.length > typing6.length));
       let list6 = 0;
       let dialogx: Array<any> = [271, 563];
       let componentG = String.fromCharCode(108,95,49,56,95,101,105,112,0);
       let philippinesl = String.fromCharCode(109,95,57,48,95,99,97,116,99,104,0);
      sortU -= (parseFloat(`${(fillc ? 2 : 2) << (Math.min(Math.abs(2), 2))}`));

      if (
        appOrientation === "LANDSCAPE-LEFT" ||
        appOrientation === "LANDSCAPE-RIGHT"
      ) {

   if (!moded.endsWith(`${megaphoneF}`)) {
      moded += `${renewi.length}`;
   }
   if (skipm.startsWith(`${paginationW.length}`)) {
      skipm += `${(renewi.length + (megaphoneF ? 2 : 3))}`;
   }
      paginationW = `${(3 >> (Math.min(5, Math.abs((megaphoneF ? 5 : 2)))))}`;
        lockOrientation("PORTRAIT");

   for (let s = 0; s < 3; s++) {
       let reducer9 = String.fromCharCode(115,95,56,52,95,115,117,98,98,108,111,99,107,0);
      if (!reducer9.includes(`${reducer9.length}`)) {
         reducer9 = `${reducer9.length >> (Math.min(Math.abs(3), 4))}`;
      }
         reducer9 += "2";
       let room0 = String.fromCharCode(108,95,56,55,0);
       let componentY = String.fromCharCode(112,95,53,49,95,101,120,97,109,112,108,101,0);
      sortU += parseFloat(`${fullO.size}`);
   }
       let cleart: Map<any, any> = new Map([[String.fromCharCode(99,95,50,48,95,116,104,114,101,101,100,111,115,116,114,0),356], [String.fromCharCode(98,95,56,95,101,97,114,108,121,0),538], [String.fromCharCode(110,95,55,48,95,110,109,118,106,111,105,110,116,115,97,100,99,111,115,116,0),814]]);
       let changen: Array<any> = [704, 166, 634];
          let bufferW = 1.0;
         cleart = new Map([[`${cleart.size}`, 1]]);
         bufferW += parseFloat(`${parseInt(`${bufferW}`)}`);
       let native9 = String.fromCharCode(105,95,49,54,95,109,105,103,114,97,116,101,100,0);
       let mailH = String.fromCharCode(108,105,98,118,112,120,95,121,95,56,56,0);
      let expired7 = changen.length >= 8045059;
      do {
         changen = [cleart.size % 3];
         if (expired7) {
            break;
         }
      } while (expired7 && (native9.startsWith(`${changen.length}`)));
         mailH = `${native9.length}`;
         native9 = `${changen.length}`;
          let gray3 = 5.0;
         changen.push(native9.length >> (Math.min(Math.abs(1), 3)));
         gray3 += parseFloat(`${2 ^ parseInt(`${gray3}`)}`);
      paginationW = `${3 ^ controla.length}`;
   for (let e = 0; e < 3; e++) {
      xvodH %= Math.max((String.fromCharCode(81,0) == paginationW ? (fillc ? 4 : 1) : paginationW.length), 1);
   }
        setIsFullScreen(false);

      paginationW += `${parseInt(`${sortU}`)}`;
   for (let b = 0; b < 3; b++) {
       let sell0 = String.fromCharCode(119,97,108,108,112,97,112,101,114,115,95,48,95,55,0);
       let comment3 = 3.0;
       let floatingi = 4.0;
       let liveK = true;
      for (let d = 0; d < 3; d++) {
          let update_mH = 5.0;
         comment3 += (sell0 == String.fromCharCode(116,0) ? sell0.length : parseInt(`${comment3}`));
         update_mH += parseInt(`${update_mH}`) ^ 3;
      }
      let telegramd = String.fromCharCode(98,95,104,0) == sell0;
      do {
          let albumX: Array<any> = [840, 171, 491];
         sell0 += `${parseInt(`${floatingi}`) + 3}`;
         albumX = [albumX.length - albumX.length];
         if (telegramd) {
            break;
         }
      } while ((4 >= sell0.length) && telegramd);
         sell0 += `${parseInt(`${floatingi}`)}`;
      for (let r = 0; r < 3; r++) {
         comment3 /= Math.max(parseInt(`${comment3}`) % 2, 1);
      }
       let awayQ = 4.0;
          let thumbnailC = 4.0;
          let placeholderl: Array<any> = [128, 670];
         liveK = 8.34 > comment3;
         thumbnailC *= parseFloat(`${parseInt(`${thumbnailC}`) % (Math.max(placeholderl.length, 3))}`);
         placeholderl.push(parseInt(`${thumbnailC}`));
          let expandG = String.fromCharCode(117,95,51,56,95,100,105,115,112,97,116,99,104,101,100,0);
         sell0 += `${parseInt(`${awayQ}`) + 2}`;
         expandG += `${expandG.length}`;
          let becomeZ = true;
          let condensed5 = 5;
          let downloaderm = 4.0;
         floatingi += parseFloat(`${parseInt(`${downloaderm}`) >> (Math.min(5, Math.abs(3)))}`);
         becomeZ = condensed5 >= 38;
         condensed5 ^= 3 - condensed5;
         downloaderm += parseFloat(`${condensed5 - 3}`);
         sell0 = `${((liveK ? 4 : 4) >> (Math.min(Math.abs(parseInt(`${awayQ}`)), 2)))}`;
         liveK = awayQ >= 37.86;
         awayQ *= parseFloat(`${1}`);
          let rewindy: Array<any> = [String.fromCharCode(104,95,53,56,95,104,100,99,100,0), String.fromCharCode(101,95,54,53,95,102,102,116,112,97,99,107,0), String.fromCharCode(120,95,57,51,95,100,105,114,101,99,116,105,111,110,115,0)];
          let textE = String.fromCharCode(115,95,50,57,95,118,105,101,119,0);
         liveK = parseInt(`${awayQ}`) < rewindy.length;
         rewindy = [textE.length + 3];
         textE += `${textE.length}`;
      xvodH &= moded.length;
   }
      megaphoneF = !fillc || controla.length >= 95;
        

   let router6 = 9460726 <= paginationW.length;
   do {
      paginationW += `${parseInt(`${sortU}`) - 1}`;
      if (router6) {
         break;
      }
   } while (router6 && (!paginationW.includes(`${xvodH}`)));
   let goalj = 7354416 >= basketballC.length;
   do {
       let membert: Map<any, any> = new Map([[String.fromCharCode(99,97,116,97,112,117,108,116,95,112,95,49,49,0),false ], [String.fromCharCode(112,104,111,110,101,95,98,95,51,54,0),true ]]);
       let bellB = String.fromCharCode(104,95,53,49,95,109,97,116,114,111,115,107,97,0);
       let dark8 = String.fromCharCode(113,95,55,53,95,102,117,110,99,116,105,111,110,115,0);
      while ((membert.size + 2) <= 3 || (2 + membert.size) <= 3) {
         membert = new Map([[`${membert.size}`, dark8.length & membert.size]]);
         break;
      }
      for (let e = 0; e < 2; e++) {
         membert.set(bellB, membert.size);
      }
      while (dark8.length >= 3) {
         dark8 = `${bellB.length * 2}`;
         break;
      }
      while (dark8.endsWith(bellB)) {
         dark8 = `${membert.size}`;
         break;
      }
          let borderless8 = String.fromCharCode(121,97,108,101,95,121,95,50,52,0);
          let leaguek = 0;
         dark8 = `${dark8.length >> (Math.min(2, borderless8.length))}`;
         borderless8 = `${leaguek >> (Math.min(Math.abs(1), 4))}`;
         leaguek |= leaguek;
         bellB += `${bellB.length << (Math.min(Math.abs(2), 4))}`;
       let data0 = String.fromCharCode(97,95,56,55,95,99,111,118,114,0);
       let cross6 = String.fromCharCode(116,97,103,103,105,110,103,95,50,95,56,55,0);
       let constantsd: Map<any, any> = new Map([[String.fromCharCode(114,95,57,52,95,109,111,118,101,0),624], [String.fromCharCode(120,95,57,50,95,117,117,105,100,117,115,109,116,0),157]]);
         data0 += "1";
      basketballC += `${moded.length | paginationW.length}`;
      if (goalj) {
         break;
      }
   } while ((5 > basketballC.length) && goalj);
      sortU += parseFloat(`${skipm.length}`);
        StatusBar.setHidden(false);

       let actionsz: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,105,122,101,100,95,121,95,57,48,0),String.fromCharCode(106,95,53,52,95,108,111,99,107,97,98,108,101,0)], [String.fromCharCode(105,112,99,95,57,95,54,51,0),String.fromCharCode(115,101,116,115,97,114,95,115,95,53,0)], [String.fromCharCode(107,95,54,95,99,104,101,99,107,109,97,114,107,115,0),String.fromCharCode(102,95,53,54,95,109,105,99,114,111,115,111,102,116,0)]]);
       let inactiveS: Map<any, any> = new Map([[String.fromCharCode(115,117,98,109,105,116,116,101,100,95,106,95,51,48,0),521], [String.fromCharCode(101,97,115,121,95,48,95,54,52,0),530], [String.fromCharCode(97,95,51,52,95,115,117,105,116,97,98,108,101,0),48]]);
       let hookh = 0;
         hookh >>= Math.min(4, Math.abs(inactiveS.size));
      if (2 < hookh) {
          let orangek = String.fromCharCode(98,95,55,53,95,99,104,101,99,107,0);
          let overb = 4.0;
          let apps1 = 1;
          let type_bS: Map<any, any> = new Map([[String.fromCharCode(109,107,118,119,114,105,116,101,114,95,114,95,55,53,0),String.fromCharCode(106,95,54,50,95,100,101,99,114,101,109,101,110,116,0)], [String.fromCharCode(115,121,110,99,109,97,114,107,101,114,95,101,95,54,53,0),String.fromCharCode(109,97,108,108,111,99,95,122,95,55,53,0)]]);
          let cornerS: Map<any, any> = new Map([[String.fromCharCode(121,95,50,50,95,105,110,102,0),false ], [String.fromCharCode(115,110,105,112,112,101,116,95,100,95,49,54,0),false ]]);
         hookh <<= Math.min(Math.abs(apps1), 4);
         orangek = "3";
         overb /= Math.max(parseFloat(`${parseInt(`${overb}`) ^ type_bS.size}`), 3);
         apps1 ^= 3 & cornerS.size;
         type_bS.set(`${orangek}`, (orangek == String.fromCharCode(111,0) ? orangek.length : cornerS.size));
      }
      if (Array.from(inactiveS.keys()).includes(`${hookh}`)) {
         hookh *= hookh;
      }
         actionsz = new Map([[`${inactiveS.size}`, 2 | hookh]]);
      let ping4 = 9072813 <= inactiveS.size;
      do {
          let saveP = String.fromCharCode(109,98,117,102,115,95,103,95,54,55,0);
          let resultd = 0.0;
          let singles = 0.0;
          let logoutC: Map<any, any> = new Map([[String.fromCharCode(113,95,51,48,95,119,101,98,114,116,99,0),String.fromCharCode(114,95,55,54,95,111,115,116,114,101,97,109,0)], [String.fromCharCode(115,107,101,121,108,105,115,116,95,55,95,50,0),String.fromCharCode(98,95,56,51,95,115,107,105,112,112,101,100,0)], [String.fromCharCode(111,95,49,52,95,104,101,118,99,100,115,112,0),String.fromCharCode(110,95,53,95,98,108,111,99,107,105,101,0)]]);
         inactiveS = new Map([[`${singles}`, saveP.length]]);
         saveP = `${parseInt(`${resultd}`)}`;
         resultd -= parseFloat(`${logoutC.size}`);
         singles /= Math.max(parseFloat(`${parseInt(`${resultd}`) * logoutC.size}`), 3);
         if (ping4) {
            break;
         }
      } while (ping4 && (1 == (inactiveS.size << (Math.min(2, Math.abs(hookh)))) && (1 << (Math.min(3, Math.abs(hookh)))) == 3));
      xvodH ^= renewi.length << (Math.min(3, Math.abs(inactiveS.size)));
   let previewv = megaphoneF ? !megaphoneF : megaphoneF;
   do {
       let closep = String.fromCharCode(105,110,116,101,108,95,108,95,54,49,0);
       let muteda = 1.0;
       let megaphoneZ = String.fromCharCode(103,117,116,116,101,114,95,98,95,51,0);
      while (closep == megaphoneZ) {
         megaphoneZ = `${megaphoneZ.length}`;
         break;
      }
         closep = `${parseInt(`${muteda}`) - 2}`;
         megaphoneZ = `${(closep == String.fromCharCode(102,0) ? parseInt(`${muteda}`) : closep.length)}`;
      let stats8 = closep.length <= 5493730;
      do {
          let commonJ = String.fromCharCode(113,95,52,50,95,116,114,97,100,105,116,105,111,110,97,108,0);
          let m_view4: Array<any> = [283, 635];
          let index5 = String.fromCharCode(115,104,105,109,109,101,114,95,52,95,56,49,0);
         closep = `${3 << (Math.min(2, Math.abs(parseInt(`${muteda}`))))}`;
         commonJ = "1";
         m_view4.push(m_view4.length);
         index5 += `${(String.fromCharCode(57,0) == index5 ? index5.length : m_view4.length)}`;
         if (stats8) {
            break;
         }
      } while ((!closep.endsWith(`${muteda}`)) && stats8);
      for (let q = 0; q < 3; q++) {
          let liveK5 = false;
          let phoneY = 1.0;
          let tempT = String.fromCharCode(115,95,57,57,95,108,105,98,97,118,102,105,108,116,101,114,0);
          let rankp = 5.0;
         muteda *= parseFloat(`${2}`);
         liveK5 = tempT.length < 24;
         phoneY /= Math.max((parseFloat(`${tempT == String.fromCharCode(66,0) ? tempT.length : parseInt(`${rankp}`)}`)), 2);
         rankp += parseFloat(`${tempT.length}`);
      }
       let backwardF = 0.0;
       let inactiveJ: Map<any, any> = new Map([[String.fromCharCode(112,97,100,95,101,95,50,55,0),true ], [String.fromCharCode(99,111,118,101,114,97,103,101,95,53,95,54,56,0),true ]]);
       let themeX: Map<any, any> = new Map([[String.fromCharCode(99,95,49,48,95,97,117,116,111,114,101,118,101,114,115,101,100,0),272], [String.fromCharCode(122,95,55,49,95,110,117,108,108,112,97,99,107,101,116,0),381]]);
      while (3.66 >= (5.12 * muteda)) {
         closep = `${closep.length - 2}`;
         break;
      }
         themeX.set(`${backwardF}`, closep.length % 1);
      megaphoneF = (basketballC.length - moded.length) > 60;
      if (previewv) {
         break;
      }
   } while ((!megaphoneF) && previewv);
   for (let o = 0; o < 3; o++) {
      skipm += `${basketballC.length}`;
   }

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      } else {

      controla = `${parseInt(`${sortU}`) / 3}`;
       let goalG = 3.0;
       let uploadL = 0.0;
      if (5.50 > (2.17 - uploadL)) {
         uploadL *= 3 % (Math.max(parseInt(`${uploadL}`), 2));
      }
          let formH: Map<any, any> = new Map([[String.fromCharCode(114,101,115,105,122,105,110,103,95,112,95,55,54,0),454], [String.fromCharCode(109,111,115,97,105,99,95,117,95,52,50,0),601], [String.fromCharCode(112,111,116,105,115,105,111,110,95,99,95,49,0),199]]);
          let otherX: Array<any> = [String.fromCharCode(114,100,118,111,95,50,95,51,48,0), String.fromCharCode(102,95,56,51,95,104,101,120,98,110,0), String.fromCharCode(115,114,116,99,112,95,116,95,56,56,0)];
         uploadL *= formH.size;
         formH = new Map([[`${otherX.length}`, otherX.length]]);
       let penaltyP = String.fromCharCode(107,115,101,116,95,118,95,52,49,0);
      if (2.72 < (goalG - 3.87)) {
         goalG += penaltyP.length;
      }
          let logok = String.fromCharCode(98,108,111,99,107,105,110,103,95,106,95,54,55,0);
          let frame_yu = 5.0;
         penaltyP += "2";
         logok += `${logok.length * 3}`;
         frame_yu /= Math.max(3, parseInt(`${frame_yu}`));
         penaltyP += `${penaltyP.length}`;
      skipm = `${paginationW.length >> (Math.min(Math.abs(3), 1))}`;
      fillc = 65.35 <= tempb;
        lockOrientation("LANDSCAPE");

   let rewindm = 5666597.0 >= tempb;
   do {
       let overlayx = String.fromCharCode(117,112,100,97,116,101,100,95,52,95,56,55,0);
       let headerj = 4.0;
       let invite9 = String.fromCharCode(102,95,52,53,95,97,99,116,111,114,115,0);
       let episodeY = String.fromCharCode(99,101,108,102,95,99,95,57,53,0);
          let moduleE = false;
          let carouselC = 2.0;
          let indexM: Array<any> = [672, 196];
         episodeY = `${episodeY.length}`;
         moduleE = indexM.length >= carouselC;
         carouselC += 2 + parseInt(`${carouselC}`);
         indexM = [(parseInt(`${carouselC}`) | (moduleE ? 4 : 3))];
         episodeY += `${(overlayx == String.fromCharCode(65,0) ? overlayx.length : parseInt(`${headerj}`))}`;
      for (let p = 0; p < 2; p++) {
         episodeY += `${episodeY.length ^ invite9.length}`;
      }
       let hovert = String.fromCharCode(110,95,56,49,95,102,97,105,108,101,100,0);
      let main_fM = hovert.length >= 5375991;
      do {
          let starE = String.fromCharCode(112,95,53,53,95,116,105,109,105,110,103,115,97,102,101,0);
         hovert = `${parseInt(`${headerj}`) / 3}`;
         starE += `${starE.length | starE.length}`;
         if (main_fM) {
            break;
         }
      } while ((!overlayx.includes(`${hovert.length}`)) && main_fM);
      while ((4.80 - headerj) == 5.15) {
         headerj -= (String.fromCharCode(108,0) == overlayx ? hovert.length : overlayx.length);
         break;
      }
       let lessk = 4;
       let aboutP = String.fromCharCode(111,95,51,53,95,114,101,118,111,107,101,100,0);
       let rules8 = String.fromCharCode(108,111,119,112,97,115,115,95,117,95,49,0);
      while (1 <= overlayx.length) {
          let helper8 = 5;
         overlayx += `${invite9.length >> (Math.min(3, hovert.length))}`;
         helper8 <<= Math.min(5, Math.abs(1));
         break;
      }
      while (episodeY != rules8) {
         rules8 = `${episodeY.length | 2}`;
         break;
      }
         rules8 = `${parseInt(`${headerj}`)}`;
      for (let g = 0; g < 2; g++) {
         hovert += `${parseInt(`${headerj}`)}`;
      }
      tempb /= Math.max(1, (parseFloat(`${paginationW == String.fromCharCode(52,0) ? paginationW.length : controla.length}`)));
      if (rewindm) {
         break;
      }
   } while (rewindm && ((5.82 + tempb) == 3.49 || (w_playerM.size - 3) == 4));
   while (megaphoneF) {
      moded = `${score1.length << (Math.min(5, Math.abs(w_playerM.size)))}`;
      break;
   }
   for (let a = 0; a < 2; a++) {
       let frame_fx = 1.0;
       let pressureC: Array<any> = [571, 20, 416];
       let untickV = false;
       let selectedj = 0;
       let basketballZ = 5;
      if (3 <= (pressureC.length * 3) && (basketballZ * pressureC.length) <= 3) {
          let strX: Array<any> = [625, 227, 196];
          let resultC = String.fromCharCode(110,97,109,101,95,50,95,48,0);
          let trash9: Map<any, any> = new Map([[String.fromCharCode(116,101,108,101,103,114,97,95,103,95,52,55,0),260], [String.fromCharCode(103,95,57,95,99,114,111,115,115,102,97,100,101,0),105], [String.fromCharCode(112,112,99,99,111,109,109,111,110,95,50,95,57,0),988]]);
         basketballZ &= trash9.size + resultC.length;
         strX.push(1);
         resultC = `${strX.length}`;
      }
          let combinedq = String.fromCharCode(105,110,115,101,110,115,105,116,105,118,101,95,115,95,57,53,0);
          let videoJ = String.fromCharCode(106,95,55,48,95,115,121,110,116,97,120,0);
         frame_fx /= Math.max(1, ((untickV ? 4 : 3)));
         combinedq = `${combinedq.length + videoJ.length}`;
         videoJ = `${(videoJ == String.fromCharCode(83,0) ? videoJ.length : combinedq.length)}`;
       let prediction4 = 2.0;
       let pingy = 0.0;
         untickV = (parseInt(`${prediction4}`) - pressureC.length) <= 23;
      while (prediction4 > 5.85) {
         prediction4 += ((untickV ? 5 : 3) ^ selectedj);
         break;
      }
         frame_fx *= pressureC.length;
      if ((selectedj & 2) >= 4) {
         selectedj |= parseInt(`${prediction4}`);
      }
      for (let u = 0; u < 3; u++) {
         pressureC = [parseInt(`${pingy}`) | 2];
      }
      let statisticsR = basketballZ <= 8880912;
      do {
         basketballZ *= 3 + parseInt(`${prediction4}`);
         if (statisticsR) {
            break;
         }
      } while ((1 > (3 | basketballZ)) && statisticsR);
         selectedj += 2;
      for (let p = 0; p < 3; p++) {
         basketballZ -= parseInt(`${pingy}`) >> (Math.min(1, Math.abs(3)));
      }
         selectedj /= Math.max(2, ((untickV ? 2 : 4) >> (Math.min(Math.abs(parseInt(`${frame_fx}`)), 5))));
      if (prediction4 > 3.40) {
          let moonB = 5.0;
          let hearts = String.fromCharCode(115,116,114,117,99,116,117,114,101,95,103,95,52,51,0);
         frame_fx -= parseInt(`${prediction4}`) % 3;
         moonB += parseFloat(`${hearts.length}`);
         hearts = `${parseInt(`${moonB}`) | 2}`;
      }
         pressureC = [selectedj - 2];
         selectedj -= (parseInt(`${frame_fx}`) / (Math.max(9, (untickV ? 2 : 4))));
      xvodH <<= Math.min(Math.abs(renewi.length >> (Math.min(1, Math.abs(xvodH)))), 4);
   }
        setIsFullScreen(true);

       let play8 = String.fromCharCode(114,101,109,105,120,95,57,95,55,52,0);
      for (let h = 0; h < 1; h++) {
         play8 = `${play8.length}`;
      }
      for (let q = 0; q < 3; q++) {
         play8 += `${play8.length / 1}`;
      }
         play8 += `${play8.length}`;
      sortU += (parseFloat(`${parseInt(`${sortU}`) | (megaphoneF ? 4 : 2)}`));
      controla = `${controla.length}`;
   if ((sortU + 5.42) < 4.56 || fillc) {
       let delegate_pgm: Map<any, any> = new Map([[String.fromCharCode(109,95,53,55,95,111,102,102,101,114,115,0),String.fromCharCode(112,115,115,104,95,120,95,54,52,0)], [String.fromCharCode(115,116,97,114,115,95,50,95,53,54,0),String.fromCharCode(116,104,114,101,101,115,116,97,116,101,95,51,95,54,49,0)]]);
       let headerI = String.fromCharCode(117,95,52,52,95,112,117,116,105,110,116,0);
       let downloading_ = 1;
       let eighteenC = 5;
       let station3 = 2;
          let greenq = String.fromCharCode(117,95,50,48,95,112,114,111,103,114,101,115,115,0);
          let pagen = String.fromCharCode(99,114,101,97,116,105,118,101,95,112,95,55,50,0);
         station3 ^= greenq.length;
         greenq = `${pagen.length}`;
         pagen = "2";
       let star8: Array<any> = [120, 327];
      while (1 == (downloading_ % (Math.max(2, station3))) || 1 == (downloading_ % (Math.max(station3, 5)))) {
          let eventG: Array<any> = [890, 227];
          let macauV = 3;
          let catagoryY = String.fromCharCode(102,95,51,52,95,115,115,105,109,118,0);
          let awayX: Array<any> = [705, 706];
         station3 >>= Math.min(4, Math.abs(star8.length * station3));
         eventG.push(2 | eventG.length);
         macauV -= 3;
         catagoryY = `${eventG.length}`;
         awayX.push((String.fromCharCode(102,0) == catagoryY ? catagoryY.length : eventG.length));
         break;
      }
      while (2 >= (2 << (Math.min(5, Math.abs(downloading_)))) && (2 << (Math.min(5, Math.abs(downloading_)))) >= 3) {
          let v_titleY = 3.0;
         delegate_pgm.set(`${eighteenC}`, eighteenC % (Math.max(9, station3)));
         v_titleY *= parseFloat(`${parseInt(`${v_titleY}`) + parseInt(`${v_titleY}`)}`);
         break;
      }
      let predictionh = 8003975 <= star8.length;
      do {
          let bodanD = String.fromCharCode(121,95,57,56,95,117,115,101,0);
          let guide2 = 5.0;
          let dropdownY = String.fromCharCode(122,95,51,52,95,115,101,109,97,112,104,111,114,101,0);
          let chartu = 1.0;
         star8 = [2 / (Math.max(9, station3))];
         bodanD += `${(String.fromCharCode(77,0) == bodanD ? parseInt(`${guide2}`) : bodanD.length)}`;
         guide2 /= Math.max(5, parseFloat(`${2 >> (Math.min(3, bodanD.length))}`));
         dropdownY += `${(bodanD == String.fromCharCode(68,0) ? parseInt(`${chartu}`) : bodanD.length)}`;
         chartu *= parseFloat(`${bodanD.length % 2}`);
         if (predictionh) {
            break;
         }
      } while (predictionh && (3 > (star8.length / (Math.max(delegate_pgm.size, 6))) && (delegate_pgm.size / 3) > 1));
      if (2 > delegate_pgm.size) {
         headerI += `${star8.length | 3}`;
      }
         headerI = `${3 / (Math.max(4, downloading_))}`;
      let long_g20 = 9273094 <= downloading_;
      do {
         downloading_ <<= Math.min(1, Math.abs(delegate_pgm.size));
         if (long_g20) {
            break;
         }
      } while (((2 / (Math.max(6, delegate_pgm.size))) > 3) && long_g20);
      fillc = paginationW == score1;
   }
        

   while (score1.startsWith(`${tempb}`)) {
      tempb -= (parseFloat(`${(fillc ? 4 : 1)}`));
      break;
   }
      fullO.set(`${fillc}`, 1);
   while (2 > (w_playerM.size ^ paginationW.length) || 3 > (2 ^ w_playerM.size)) {
      w_playerM = new Map([[skipm, 1 - moded.length]]);
      break;
   }
        StatusBar.setHidden(true);

      controla += "3";
   if (3 >= xvodH) {
      moded = `${basketballC.length & 3}`;
   }
      fullO = new Map([[score1, score1.length]]);

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
       let pointo: Array<any> = [991, 277];
    let twitterO = 1;
    let launchY = false;
    let smally = String.fromCharCode(97,115,115,111,99,105,97,116,101,95,49,95,51,57,0);
    let fieldo = false;
    let rewind6 = String.fromCharCode(113,95,55,52,95,108,105,98,118,112,120,0);
    let a_lock3 = String.fromCharCode(97,99,114,111,110,121,109,115,95,53,95,49,57,0);
    let fieldc = 4;
      smally += `${twitterO}`;
   for (let s = 0; s < 3; s++) {
      fieldo = smally.length < rewind6.length;
   }
      launchY = !launchY && !fieldo;
      twitterO *= pointo.length - smally.length;
   if (launchY) {
      launchY = a_lock3 == smally;
   }
       let show_ = String.fromCharCode(119,95,52,54,95,114,100,98,120,0);
       let kickU: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,115,116,101,114,102,100,115,95,116,95,54,57,0),831], [String.fromCharCode(112,111,115,116,114,101,113,117,101,115,116,95,52,95,49,56,0),101], [String.fromCharCode(109,95,50,56,95,111,112,101,110,115,115,108,0),873]]);
       let sendx = String.fromCharCode(103,102,105,110,116,95,51,95,54,49,0);
       let gemfileR = String.fromCharCode(109,97,120,98,117,114,115,116,95,49,95,56,57,0);
       let chart7 = String.fromCharCode(98,95,49,52,95,114,101,102,114,101,115,104,0);
      while (sendx.length == gemfileR.length) {
          let firebase8 = 5.0;
          let string2 = String.fromCharCode(115,111,114,101,99,118,109,115,103,95,105,95,55,0);
          let indicatorx: Map<any, any> = new Map([[String.fromCharCode(102,95,48,95,104,111,108,108,111,119,0),true ], [String.fromCharCode(114,95,56,48,95,98,114,107,116,105,109,101,103,109,0),false ], [String.fromCharCode(115,112,101,99,116,105,109,101,95,97,95,55,56,0),true ]]);
          let tickedY: Array<any> = [601, 122];
         sendx = "1";
         firebase8 *= string2.length;
         string2 += `${3 & string2.length}`;
         indicatorx = new Map([[`${indicatorx.size}`, string2.length ^ 1]]);
         tickedY.push(3 ^ indicatorx.size);
         break;
      }
      while ((chart7.length & kickU.size) == 4 || 4 == (kickU.size & chart7.length)) {
          let with_20E = String.fromCharCode(112,114,101,100,120,95,54,95,55,49,0);
         kickU.set(`${sendx}`, 1);
         with_20E += `${with_20E.length << (Math.min(Math.abs(2), 4))}`;
         break;
      }
         gemfileR = `${(String.fromCharCode(105,0) == show_ ? gemfileR.length : show_.length)}`;
         sendx = `${(gemfileR == String.fromCharCode(81,0) ? show_.length : gemfileR.length)}`;
      for (let m = 0; m < 3; m++) {
         gemfileR = `${(sendx == String.fromCharCode(76,0) ? sendx.length : kickU.size)}`;
      }
          let entry9 = 0.0;
         show_ += "3";
         entry9 /= Math.max(2, 1);
      for (let h = 0; h < 3; h++) {
         gemfileR = `${gemfileR.length << (Math.min(Math.abs(1), 3))}`;
      }
      let filterg = gemfileR == String.fromCharCode(108,103,119,55,97,51,0);
      do {
         gemfileR += `${gemfileR.length}`;
         if (filterg) {
            break;
         }
      } while (filterg && (gemfileR.startsWith(sendx)));
      a_lock3 += "3";
       let penaltyT: Map<any, any> = new Map([[String.fromCharCode(114,101,118,97,108,105,100,97,116,105,111,110,95,55,95,53,48,0),550], [String.fromCharCode(105,115,97,108,110,117,109,95,55,95,49,48,0),22], [String.fromCharCode(114,111,98,111,108,101,99,116,114,105,99,95,50,95,49,0),327]]);
       let collectionN = String.fromCharCode(116,97,98,108,101,112,114,105,110,116,95,117,95,57,57,0);
       let formk = true;
          let layoutT = 4.0;
         collectionN = `${2 + collectionN.length}`;
         layoutT -= parseFloat(`${parseInt(`${layoutT}`) << (Math.min(Math.abs(parseInt(`${layoutT}`)), 5))}`);
      for (let e = 0; e < 2; e++) {
          let aboutu = String.fromCharCode(114,101,112,108,97,121,101,100,95,48,95,52,0);
         collectionN = `${(2 << (Math.min(2, Math.abs((formk ? 5 : 4)))))}`;
         aboutu = `${aboutu.length % 2}`;
      }
      while (collectionN.length > 2) {
          let register_xvS: Map<any, any> = new Map([[String.fromCharCode(106,95,54,54,95,107,98,105,116,0),667], [String.fromCharCode(114,101,102,101,116,99,104,95,118,95,53,56,0),244], [String.fromCharCode(112,97,103,101,110,111,95,50,95,55,54,0),325]]);
         penaltyT = new Map([[`${register_xvS.size}`, collectionN.length]]);
         break;
      }
      for (let p = 0; p < 1; p++) {
         collectionN += `${collectionN.length}`;
      }
          let analyticsp = String.fromCharCode(103,95,51,51,95,116,114,117,110,99,97,116,101,0);
          let detailo = String.fromCharCode(108,95,57,95,120,109,117,108,116,105,112,108,101,0);
         formk = ((analyticsp.length >> (Math.min(5, Math.abs((!formk ? 93 : analyticsp.length))))) < 93);
         detailo += `${detailo.length}`;
      for (let e = 0; e < 1; e++) {
         collectionN = `${penaltyT.size}`;
      }
         collectionN = `${penaltyT.size}`;
      if ((penaltyT.size ^ 4) > 2 && 4 > (4 ^ collectionN.length)) {
         collectionN = `${((formk ? 3 : 2) / (Math.max(penaltyT.size, 7)))}`;
      }
       let umengs = String.fromCharCode(114,95,50,55,95,101,116,104,111,100,0);
      a_lock3 += `${(String.fromCharCode(89,0) == rewind6 ? rewind6.length : fieldc)}`;
   let r_imaget = pointo.length >= 5978420;
   do {
      pointo.push(fieldc / 2);
      if (r_imaget) {
         break;
      }
   } while ((5 == (a_lock3.length | pointo.length) || 5 == (pointo.length | a_lock3.length)) && r_imaget);
   while (!pointo.includes(twitterO)) {
      twitterO |= 1 | fieldc;
      break;
   }
       let projectT = 5.0;
       let livej: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,112,101,114,102,114,97,109,101,95,100,95,57,57,0),809], [String.fromCharCode(97,95,56,50,95,99,111,110,116,111,108,108,101,114,0),195]]);
          let championM = String.fromCharCode(108,95,51,50,0);
          let nalyticse = 1.0;
          let header5 = 1;
         projectT -= parseFloat(`${3}`);
         championM += `${header5 ^ 2}`;
         nalyticse -= championM.length - 2;
         header5 >>= Math.min(3, Math.abs((championM == String.fromCharCode(50,0) ? header5 : championM.length)));
         livej.set(`${projectT}`, livej.size / 2);
         projectT *= parseFloat(`${1 ^ livej.size}`);
          let currenta: Array<any> = [583, 412, 267];
          let splash8 = 2;
          let productu = String.fromCharCode(101,95,57,48,95,109,98,117,118,101,114,114,111,114,0);
         projectT -= parseFloat(`${livej.size - 1}`);
         currenta.push(2);
         splash8 *= splash8;
         productu += `${splash8}`;
         livej.set(`${projectT}`, 3 ^ parseInt(`${projectT}`));
       let heartQ = String.fromCharCode(99,111,108,111,110,95,119,95,49,52,0);
      a_lock3 += `${(String.fromCharCode(103,0) == smally ? smally.length : (launchY ? 5 : 5))}`;
      a_lock3 += `${((fieldo ? 3 : 4) << (Math.min(Math.abs(1), 1)))}`;
   let membershipv = String.fromCharCode(48,120,118,55,98,101,97,106,121,104,0) == smally;
   do {
       let aread: Array<any> = [858, 308];
       let downb = 5.0;
       let eighteenI = String.fromCharCode(98,121,116,101,115,116,114,105,110,103,95,55,95,54,50,0);
       let inactiveU = String.fromCharCode(98,97,99,107,100,114,111,112,95,48,95,49,49,0);
       let mutedr = 3;
         mutedr ^= 2 | aread.length;
          let fastforwardZ: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,101,110,100,95,120,95,53,48,0),178], [String.fromCharCode(101,110,106,105,110,95,98,95,51,52,0),34]]);
          let buttonW: Map<any, any> = new Map([[String.fromCharCode(115,111,117,110,100,115,95,104,95,56,51,0),89], [String.fromCharCode(114,97,110,100,111,109,105,122,101,95,57,95,57,57,0),231]]);
         downb *= aread.length;
         fastforwardZ.set(`${buttonW.size}`, fastforwardZ.size);
         buttonW = new Map([[`${buttonW.size}`, fastforwardZ.size * 2]]);
      while (1 == eighteenI.length || inactiveU != String.fromCharCode(86,0)) {
          let scheduley = String.fromCharCode(111,95,56,48,95,118,101,114,108,97,121,0);
          let fastforwardw: Map<any, any> = new Map([[String.fromCharCode(110,95,56,51,95,120,111,114,101,100,0),String.fromCharCode(100,101,99,111,100,101,120,95,99,95,54,52,0)], [String.fromCharCode(122,95,54,49,95,115,116,105,99,107,0),String.fromCharCode(111,102,102,115,101,116,115,105,122,101,95,49,95,49,50,0)]]);
          let backA: Map<any, any> = new Map([[String.fromCharCode(118,99,120,112,114,111,106,95,97,95,53,49,0),String.fromCharCode(100,105,97,103,110,111,115,116,105,99,95,117,95,50,52,0)], [String.fromCharCode(119,95,51,49,95,113,116,112,97,108,101,116,116,101,0),String.fromCharCode(102,114,97,109,101,112,111,111,108,95,116,95,56,51,0)], [String.fromCharCode(97,118,115,116,114,105,110,103,95,104,95,52,53,0),String.fromCharCode(98,111,110,106,111,117,114,95,104,95,49,0)]]);
         eighteenI += `${eighteenI.length}`;
         scheduley = "2";
         fastforwardw = new Map([[`${fastforwardw.size}`, fastforwardw.size]]);
         backA = new Map([[`${backA.size}`, backA.size]]);
         break;
      }
         inactiveU += `${aread.length}`;
       let serviceH = 1.0;
       let foundy = 2.0;
      if (3 < (5 & eighteenI.length) || (5 & eighteenI.length) < 4) {
         eighteenI += `${parseInt(`${downb}`) & aread.length}`;
      }
          let animationP: Array<any> = [61, 407];
         aread = [inactiveU.length];
         animationP.push(animationP.length);
      let formu = downb >= 8329439.0;
      do {
          let inactiveK: Array<any> = [78, 289];
          let scheduleU = 3.0;
          let productR: Map<any, any> = new Map([[String.fromCharCode(119,95,54,49,95,112,111,115,116,101,114,0),String.fromCharCode(99,104,97,114,115,101,116,95,122,95,49,56,0)], [String.fromCharCode(101,120,112,111,110,101,110,116,105,97,108,95,50,95,57,52,0),String.fromCharCode(115,95,57,95,120,107,101,101,112,0)], [String.fromCharCode(99,108,97,115,115,101,115,95,121,95,52,48,0),String.fromCharCode(99,95,52,54,95,102,117,122,122,121,0)]]);
         downb /= Math.max(5, 1 & parseInt(`${serviceH}`));
         inactiveK = [parseInt(`${scheduleU}`)];
         scheduleU += parseFloat(`${parseInt(`${scheduleU}`)}`);
         productR.set(`${scheduleU}`, 3);
         if (formu) {
            break;
         }
      } while ((!inactiveU.endsWith(`${downb}`)) && formu);
         eighteenI = `${mutedr | parseInt(`${foundy}`)}`;
      for (let n = 0; n < 2; n++) {
          let canvasq = 4.0;
         eighteenI = `${inactiveU.length}`;
         canvasq -= parseInt(`${canvasq}`);
      }
      for (let l = 0; l < 1; l++) {
         foundy /= Math.max(5, parseInt(`${serviceH}`));
      }
      smally += `${aread.length}`;
      if (membershipv) {
         break;
      }
   } while ((!launchY) && membershipv);
       let quest2: Array<any> = [302, 9, 676];
       let gmailW: Map<any, any> = new Map([[String.fromCharCode(116,103,115,95,111,95,57,0),true ], [String.fromCharCode(97,95,53,55,95,99,97,108,99,117,108,97,116,101,0),true ], [String.fromCharCode(116,114,101,101,116,111,107,95,50,95,57,56,0),true ]]);
       let detail6 = String.fromCharCode(113,95,53,49,95,122,112,98,105,113,117,97,100,115,0);
       let eighteenz = String.fromCharCode(116,114,97,110,115,95,103,95,57,52,0);
      while (2 >= (4 - eighteenz.length)) {
          let confirmationt = 5;
          let floatingI = String.fromCharCode(116,97,107,100,115,112,95,111,95,52,57,0);
         quest2.push(gmailW.size);
         confirmationt %= Math.max(3, confirmationt + 1);
         floatingI = `${floatingI.length}`;
         break;
      }
      let yingh = 6424990 <= quest2.length;
      do {
         quest2.push(quest2.length);
         if (yingh) {
            break;
         }
      } while (yingh && ((quest2.length % (Math.max(7, eighteenz.length))) < 4 && 4 < (eighteenz.length % 4)));
      for (let r = 0; r < 1; r++) {
          let commonQ: Array<any> = [String.fromCharCode(107,95,52,56,95,118,97,108,117,101,100,0), String.fromCharCode(99,111,109,112,97,114,101,95,122,95,52,52,0)];
          let yellow0 = String.fromCharCode(115,113,108,105,116,101,114,98,117,95,108,95,52,56,0);
          let componentb = 2.0;
          let projectQ = 0.0;
         eighteenz += "3";
         commonQ = [commonQ.length];
         yellow0 += `${parseInt(`${componentb}`) >> (Math.min(commonQ.length, 5))}`;
         componentb -= parseFloat(`${commonQ.length}`);
         projectQ /= Math.max(1, parseFloat(`${parseInt(`${componentb}`)}`));
      }
      while (1 > detail6.length) {
         detail6 = `${eighteenz.length}`;
         break;
      }
          let hookY = 2;
         gmailW.set(eighteenz, 1);
         hookY |= 2;
      smally = `${twitterO}`;
   while ((pointo.length & 3) <= 2 || 3 <= (fieldc & 3)) {
       let navigationK = 0.0;
       let groupK = 4;
         navigationK -= groupK + parseInt(`${navigationK}`);
       let common9 = String.fromCharCode(102,95,57,49,95,112,108,97,121,0);
       let empty2 = String.fromCharCode(98,95,55,48,95,115,116,111,112,0);
      for (let m = 0; m < 1; m++) {
         navigationK /= Math.max(1, 2 * common9.length);
      }
       let disconnected1: Array<any> = [216, 144];
       let sortm: Array<any> = [232, 898];
      for (let j = 0; j < 1; j++) {
         groupK %= Math.max(3 * parseInt(`${navigationK}`), 4);
      }
      while (!empty2.endsWith(`${navigationK}`)) {
          let gmailu: Map<any, any> = new Map([[String.fromCharCode(102,97,97,110,105,100,99,116,95,114,95,57,57,0),String.fromCharCode(120,95,54,51,95,103,111,116,111,0)], [String.fromCharCode(114,101,99,111,118,101,114,95,117,95,57,52,0),String.fromCharCode(117,108,116,114,97,95,99,95,50,50,0)]]);
          let constantsh = 1;
          let chartU = 0;
          let brightness0: Array<any> = [693, 825, 877];
         navigationK += brightness0.length;
         gmailu = new Map([[`${constantsh}`, constantsh | 3]]);
         chartU %= Math.max(gmailu.size, 1);
         brightness0 = [gmailu.size >> (Math.min(Math.abs(1), 1))];
         break;
      }
      fieldc ^= twitterO & 2;
      break;
   }
   if ((1 | twitterO) >= 4) {
      fieldo = (a_lock3.length << (Math.min(rewind6.length, 3))) <= 95;
   }
   let fullF = 7915887 <= fieldc;
   do {
      fieldc ^= pointo.length << (Math.min(smally.length, 1));
      if (fullF) {
         break;
      }
   } while (fullF && (4 >= (5 + fieldc)));
   if (4 > (4 + rewind6.length) || (rewind6.length + 4) > 4) {
      rewind6 = `${((fieldo ? 5 : 5) + pointo.length)}`;
   }

        console.log("Error!", err, time);
      }
    };

    const onSeekGesture = (time: number) => {
      if (currentTime < time) {
        setSeekDirection("fastUpdate_ebAssist");
      } else {
        setSeekDirection("acceptedGiftDark");
      }
      onSeek(time);
    };

    const onVideoProgessing = (data: any) => {
      setCurrentTime(data.currentTime);

      try {
        currentTimeRef.current = data.currentTime;
      } catch (err) {
       let report0 = String.fromCharCode(102,97,105,108,117,114,101,115,95,99,95,52,56,0);
    let phoneY: Map<any, any> = new Map([[String.fromCharCode(111,99,115,112,105,100,95,120,95,49,55,0),false ], [String.fromCharCode(115,111,114,116,95,51,95,52,48,0),true ], [String.fromCharCode(99,95,50,95,103,101,116,105,110,116,0),false ]]);
    let cast9 = String.fromCharCode(116,95,57,50,95,114,101,97,110,97,108,121,122,101,0);
    let linkC = 2.0;
    let detailN = String.fromCharCode(105,109,97,103,101,115,95,116,95,54,55,0);
    let dragg = String.fromCharCode(99,95,53,50,95,98,105,110,116,101,120,116,0);
    let time_03: Map<any, any> = new Map([[String.fromCharCode(97,95,52,50,95,100,111,116,0),String.fromCharCode(108,95,52,95,100,114,105,118,101,0)], [String.fromCharCode(100,95,55,55,95,100,99,109,112,0),String.fromCharCode(113,119,111,114,100,95,49,95,57,50,0)], [String.fromCharCode(111,95,52,49,95,104,111,110,101,0),String.fromCharCode(116,95,55,95,105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,0)]]);
    let const_gyk = String.fromCharCode(97,115,99,101,110,100,101,114,95,55,95,50,54,0);
    let animationt = 1.0;
    let referrer0: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,101,116,95,101,95,55,48,0),518], [String.fromCharCode(116,101,115,116,105,109,103,97,114,105,95,116,95,56,0),943], [String.fromCharCode(116,97,112,112,105,110,103,95,49,95,52,51,0),732]]);
       let appsO: Array<any> = [355, 274, 676];
       let interstitiald: Array<any> = [277, 922, 924];
      let transferl = 8377434 >= interstitiald.length;
      do {
         interstitiald.push(1);
         if (transferl) {
            break;
         }
      } while (transferl && (interstitiald.length >= appsO.length));
          let settingp = String.fromCharCode(97,108,103,111,114,95,50,95,57,50,0);
          let membery = 5.0;
          let emojim: Array<any> = [679, 336];
         interstitiald = [emojim.length];
         settingp += `${parseInt(`${membery}`) | 2}`;
         membery /= Math.max(parseFloat(`${settingp.length | 1}`), 2);
         emojim.push(settingp.length);
       let sort7 = String.fromCharCode(108,95,54,57,95,114,105,115,101,0);
       let type_m3 = String.fromCharCode(116,105,116,108,101,115,95,56,95,50,50,0);
      while (3 == (2 * sort7.length) || (sort7.length * appsO.length) == 2) {
          let logoQ: Array<any> = [1, 884];
          let expiredF: Map<any, any> = new Map([[String.fromCharCode(97,110,105,109,97,116,101,100,95,111,95,51,50,0),true ], [String.fromCharCode(99,95,50,56,95,111,114,116,104,111,103,111,110,97,108,105,122,101,0),true ], [String.fromCharCode(97,95,49,49,95,104,101,97,100,105,110,103,0),true ]]);
          let nativeB = String.fromCharCode(106,95,49,55,95,109,117,108,116,105,112,108,121,105,110,103,0);
         appsO.push(2);
         logoQ.push(nativeB.length);
         expiredF.set(`${logoQ.length}`, 1 >> (Math.min(2, Math.abs(expiredF.size))));
         nativeB += `${2 * logoQ.length}`;
         break;
      }
      let playR = 8001660 >= sort7.length;
      do {
          let profileZ = String.fromCharCode(104,95,56,50,95,115,112,101,99,116,114,117,109,0);
          let favoriteC: Array<any> = [751, 311, 711];
          let disconnected8: Array<any> = [646, 25, 920];
         sort7 += `${3 * interstitiald.length}`;
         profileZ = `${favoriteC.length & 1}`;
         favoriteC = [favoriteC.length % (Math.max(2, 3))];
         disconnected8 = [favoriteC.length % 2];
         if (playR) {
            break;
         }
      } while (playR && (!sort7.startsWith(`${interstitiald.length}`)));
         sort7 = "1";
      dragg = `${dragg.length}`;
   if ((time_03.size % (Math.max(dragg.length, 9))) >= 3) {
      time_03.set(detailN, parseInt(`${linkC}`));
   }
      report0 += `${parseInt(`${linkC}`)}`;
      phoneY.set(dragg, 1);
   for (let h = 0; h < 3; h++) {
      linkC /= Math.max(3, report0.length << (Math.min(Math.abs(3), 2)));
   }
       let awaya = false;
       let termsa = String.fromCharCode(97,108,108,111,99,97,116,111,114,115,95,120,95,50,48,0);
         termsa += `${termsa.length ^ 2}`;
      for (let f = 0; f < 3; f++) {
          let agreementy: Array<any> = [String.fromCharCode(99,95,54,51,95,102,101,109,97,108,101,0), String.fromCharCode(113,95,49,57,95,101,120,112,108,105,99,105,116,108,121,0)];
          let banner4 = 4;
          let controls8: Array<any> = [789, 49];
          let resultM: Map<any, any> = new Map([[String.fromCharCode(98,117,116,116,111,110,115,95,117,95,52,54,0),true ], [String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,95,122,95,51,49,0),false ]]);
         termsa += `${agreementy.length >> (Math.min(Math.abs(3), 4))}`;
         agreementy = [banner4 >> (Math.min(Math.abs(3), 4))];
         banner4 *= controls8.length;
         controls8.push(2 + resultM.size);
         resultM = new Map([[`${controls8.length}`, 1 + controls8.length]]);
      }
          let signinupl = 4;
         termsa += `${termsa.length % 3}`;
         signinupl ^= 3 + signinupl;
         termsa = `${termsa.length * 3}`;
         termsa = `${((awaya ? 1 : 4) % (Math.max(termsa.length, 2)))}`;
         awaya = termsa.length < 98;
      dragg = `${parseInt(`${linkC}`) ^ cast9.length}`;
   for (let j = 0; j < 3; j++) {
       let promotion_ = String.fromCharCode(109,115,122,104,95,120,95,51,53,0);
       let firebaseu = 1.0;
       let injuryg: Map<any, any> = new Map([[String.fromCharCode(104,113,100,110,100,95,110,95,49,0),String.fromCharCode(109,95,52,57,95,117,110,114,101,118,101,114,115,101,100,0)], [String.fromCharCode(98,101,103,97,110,95,102,95,54,56,0),String.fromCharCode(120,95,50,55,95,105,110,100,97,116,97,0)]]);
       let rulesF: Array<any> = [50, 775];
      while (2 < (injuryg.size / (Math.max(5, 3))) || (injuryg.size / (Math.max(5, 7))) < 3) {
          let plusE: Array<any> = [String.fromCharCode(116,95,57,53,0), String.fromCharCode(106,95,54,51,95,119,97,115,116,101,100,0), String.fromCharCode(103,115,109,100,101,99,95,49,95,54,55,0)];
          let modityX = 1;
         injuryg = new Map([[`${plusE.length}`, 2]]);
         plusE = [modityX];
         break;
      }
         promotion_ = `${parseInt(`${firebaseu}`)}`;
      let resendW = firebaseu >= 7306553.0;
      do {
         firebaseu *= parseFloat(`${injuryg.size}`);
         if (resendW) {
            break;
         }
      } while (resendW && ((firebaseu / 5.88) >= 1.87 || (parseInt(`${firebaseu}`) / 5) >= 1));
      let renewt = injuryg.size >= 5651114;
      do {
         injuryg = new Map([[`${injuryg.size}`, injuryg.size / (Math.max(rulesF.length, 2))]]);
         if (renewt) {
            break;
         }
      } while ((3 > (injuryg.size ^ 2) || 1 > (rulesF.length ^ 2)) && renewt);
         injuryg.set(`${firebaseu}`, parseInt(`${firebaseu}`) | 3);
       let register_xr_ = String.fromCharCode(97,95,54,57,95,101,114,97,115,105,110,103,0);
       let tcopy_6eF = String.fromCharCode(110,95,55,95,112,111,108,105,99,121,0);
       let sendN = String.fromCharCode(116,114,97,110,115,108,97,116,101,95,109,95,48,0);
       let statsT = String.fromCharCode(109,95,55,52,95,105,110,102,111,115,0);
      if (!tcopy_6eF.includes(`${register_xr_.length}`)) {
         register_xr_ += `${(String.fromCharCode(81,0) == promotion_ ? parseInt(`${firebaseu}`) : promotion_.length)}`;
      }
          let shrinks = String.fromCharCode(99,95,53,53,95,110,116,104,0);
          let membershipP = String.fromCharCode(122,95,54,48,95,111,110,121,120,0);
         register_xr_ = `${injuryg.size + tcopy_6eF.length}`;
         shrinks += `${membershipP.length}`;
         membershipP += `${shrinks.length}`;
       let overY: Map<any, any> = new Map([[String.fromCharCode(103,95,57,48,95,100,113,99,111,101,102,102,0),974], [String.fromCharCode(115,117,112,101,114,102,114,97,109,101,95,122,95,50,55,0),646]]);
      while (statsT.length >= 1 || promotion_ == String.fromCharCode(66,0)) {
         promotion_ = "2";
         break;
      }
      if ((injuryg.size - 5) >= 3 && 2 >= (injuryg.size - 5)) {
         overY = new Map([[`${rulesF.length}`, 3]]);
      }
      cast9 += `${promotion_.length & 2}`;
   }
   let circleJ = cast9.length <= 6596356;
   do {
       let memberh = String.fromCharCode(116,95,53,52,95,119,97,118,101,102,111,114,109,97,116,101,120,0);
       let brightnessm = String.fromCharCode(107,101,121,119,111,114,100,115,95,105,95,56,55,0);
       let membershipK = 4;
         membershipK += (brightnessm == String.fromCharCode(118,0) ? brightnessm.length : memberh.length);
         membershipK ^= (brightnessm == String.fromCharCode(119,0) ? brightnessm.length : membershipK);
         brightnessm = `${brightnessm.length + 1}`;
       let feedbackm = 0.0;
       let theme6 = 5.0;
          let splashA = String.fromCharCode(102,95,50,95,109,121,114,110,100,0);
          let anythinkf = 2;
          let currenth = 0.0;
         membershipK <<= Math.min(splashA.length, 3);
         splashA = `${3 + anythinkf}`;
         anythinkf &= parseInt(`${currenth}`);
         currenth += 2 << (Math.min(Math.abs(anythinkf), 1));
      let guide8 = brightnessm.length <= 7227125;
      do {
         brightnessm += `${memberh.length}`;
         if (guide8) {
            break;
         }
      } while ((brightnessm.length < 4) && guide8);
      for (let c = 0; c < 2; c++) {
         theme6 += parseFloat(`${parseInt(`${feedbackm}`)}`);
      }
      if ((2.35 * feedbackm) == 5.76) {
         brightnessm += `${membershipK ^ 3}`;
      }
         membershipK |= 2;
      cast9 = "2";
      if (circleJ) {
         break;
      }
   } while ((!cast9.endsWith(`${phoneY.size}`)) && circleJ);
      report0 += `${(String.fromCharCode(86,0) == detailN ? detailN.length : const_gyk.length)}`;
   while (3 == (parseInt(`${linkC}`) + const_gyk.length) || 2 == (const_gyk.length ^ 3)) {
       let championr = String.fromCharCode(108,105,110,103,101,114,95,120,95,51,57,0);
       let submit7 = 1;
       let stationsJ = String.fromCharCode(105,110,115,116,97,108,108,95,50,95,53,0);
       let sellT = String.fromCharCode(110,105,99,101,108,121,95,113,95,50,55,0);
      while (submit7 == 5) {
         stationsJ = `${sellT.length}`;
         break;
      }
         sellT = `${2 ^ stationsJ.length}`;
      for (let z = 0; z < 2; z++) {
         stationsJ += `${(sellT == String.fromCharCode(102,0) ? sellT.length : stationsJ.length)}`;
      }
      while (stationsJ.includes(`${submit7}`)) {
         submit7 &= championr.length;
         break;
      }
          let nalytics7: Map<any, any> = new Map([[String.fromCharCode(120,95,51,95,101,118,100,110,115,0),152], [String.fromCharCode(122,95,54,54,95,97,116,116,97,99,107,0),322], [String.fromCharCode(102,102,97,116,95,109,95,56,48,0),211]]);
          let nativeH = 2;
          let sharedw = String.fromCharCode(108,105,103,104,116,95,118,95,53,54,0);
         championr = `${stationsJ.length / (Math.max(2, 7))}`;
         nalytics7.set(`${nativeH}`, nalytics7.size);
         nativeH %= Math.max(1, 1 << (Math.min(2, Math.abs(nativeH))));
         sharedw += `${nalytics7.size}`;
      for (let e = 0; e < 3; e++) {
         championr += `${sellT.length}`;
      }
      let circleo = String.fromCharCode(52,51,111,113,102,121,56,53,0) == championr;
      do {
         championr = `${(sellT == String.fromCharCode(109,0) ? sellT.length : submit7)}`;
         if (circleo) {
            break;
         }
      } while (circleo && (4 < championr.length));
      while (sellT.length == stationsJ.length) {
         stationsJ += "2";
         break;
      }
          let notificationG = String.fromCharCode(119,97,118,101,108,101,116,95,121,95,56,54,0);
         sellT = `${championr.length * submit7}`;
         notificationG += `${notificationG.length - 1}`;
      for (let a = 0; a < 1; a++) {
          let taiwanc = String.fromCharCode(112,108,97,105,110,116,101,120,116,95,120,95,52,54,0);
          let subsu = String.fromCharCode(105,95,54,54,95,112,101,114,109,117,116,101,0);
          let sharedW = 1.0;
          let modee = false;
          let google9 = String.fromCharCode(103,95,55,57,95,99,111,110,110,101,99,116,101,100,0);
         submit7 &= ((modee ? 5 : 4) * taiwanc.length);
         taiwanc = `${(subsu == String.fromCharCode(116,0) ? parseInt(`${sharedW}`) : subsu.length)}`;
         sharedW /= Math.max(parseFloat(`${1}`), 4);
         modee = (parseInt(`${sharedW}`) - subsu.length) > 88;
         google9 += `${parseInt(`${sharedW}`) % (Math.max(google9.length, 1))}`;
      }
         sellT = `${championr.length}`;
         submit7 %= Math.max(championr.length ^ sellT.length, 4);
      const_gyk += `${const_gyk.length}`;
      break;
   }
       let macaum = true;
       let sliderA = 2.0;
         sliderA /= Math.max(5, parseFloat(`${parseInt(`${sliderA}`) >> (Math.min(4, Math.abs(3)))}`));
          let robotoH: Array<any> = [904, 298];
          let thumbnailH: Map<any, any> = new Map([[String.fromCharCode(104,95,55,54,95,111,102,102,115,99,114,101,101,110,0),42], [String.fromCharCode(117,95,53,51,95,118,102,114,101,101,0),458], [String.fromCharCode(105,95,51,56,95,99,111,109,109,97,110,100,0),422]]);
         sliderA *= parseFloat(`${1 ^ robotoH.length}`);
         robotoH = [thumbnailH.size << (Math.min(3, Math.abs(thumbnailH.size)))];
         sliderA /= Math.max(2, (parseFloat(`${parseInt(`${sliderA}`) & (macaum ? 2 : 5)}`)));
      for (let t = 0; t < 3; t++) {
          let trophyH = String.fromCharCode(99,115,119,97,112,95,122,95,50,0);
          let homee = 5.0;
          let abouth = 2;
          let readx = 0;
         sliderA /= Math.max(5, parseFloat(`${parseInt(`${sliderA}`) / 3}`));
         trophyH = `${1 * trophyH.length}`;
         homee *= 3 << (Math.min(5, Math.abs(abouth)));
         abouth &= trophyH.length;
         readx |= abouth;
      }
          let halfq = 5.0;
          let backz = false;
          let gray6: Map<any, any> = new Map([[String.fromCharCode(109,95,54,56,95,100,101,99,111,114,114,101,108,97,116,105,111,110,0),790], [String.fromCharCode(99,109,111,118,95,49,95,51,51,0),407]]);
         macaum = 15 <= gray6.size;
         halfq += ((backz ? 5 : 3) >> (Math.min(Math.abs(parseInt(`${halfq}`)), 5)));
         backz = halfq == 45.27;
         gray6 = new Map([[`${backz}`, ((backz ? 1 : 1) >> (Math.min(Math.abs(parseInt(`${halfq}`)), 3)))]]);
      let whatsappe = 8638135.0 >= sliderA;
      do {
         sliderA += parseFloat(`${3 / (Math.max(parseInt(`${sliderA}`), 2))}`);
         if (whatsappe) {
            break;
         }
      } while ((sliderA <= 2.18 && (2.18 * sliderA) <= 5.22) && whatsappe);
      cast9 += `${(cast9 == String.fromCharCode(52,0) ? time_03.size : cast9.length)}`;
   if (!const_gyk.startsWith(`${time_03.size}`)) {
      const_gyk = `${dragg.length}`;
   }
      cast9 += `${detailN.length}`;
   let uploadE = cast9 == String.fromCharCode(121,116,121,109,115,97,105,115,56,0);
   do {
      cast9 += `${const_gyk.length}`;
      if (uploadE) {
         break;
      }
   } while (uploadE && ((2 >> (Math.min(3, cast9.length))) == 5 && (time_03.size >> (Math.min(Math.abs(2), 3))) == 2));
       let groupn = 1.0;
       let themej = String.fromCharCode(119,101,108,115,95,121,95,49,0);
       let championb: Array<any> = [951, 723];
         themej = `${championb.length * parseInt(`${groupn}`)}`;
         themej = "1";
       let selectedW = 2;
       let untickV = 2;
      let moonJ = 7236566 <= untickV;
      do {
         untickV >>= Math.min(5, Math.abs(2 << (Math.min(Math.abs(selectedW), 4))));
         if (moonJ) {
            break;
         }
      } while ((selectedW >= 2) && moonJ);
      if ((2 - selectedW) >= 4) {
         untickV %= Math.max(4, championb.length & 2);
      }
      for (let t = 0; t < 2; t++) {
         themej += "2";
      }
      if ((championb.length << (Math.min(Math.abs(4), 2))) == 2 && (championb.length << (Math.min(3, Math.abs(untickV)))) == 4) {
         untickV *= (String.fromCharCode(74,0) == themej ? themej.length : parseInt(`${groupn}`));
      }
      let sportb = untickV <= 5535706;
      do {
         untickV -= selectedW;
         if (sportb) {
            break;
         }
      } while ((untickV == 3) && sportb);
         themej += `${(themej == String.fromCharCode(95,0) ? themej.length : championb.length)}`;
      time_03 = new Map([[`${phoneY.size}`, parseInt(`${linkC}`)]]);
      cast9 += `${parseInt(`${linkC}`)}`;
      const_gyk += `${1 << (Math.min(4, Math.abs(time_03.size)))}`;

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
       let pause1 = 4.0;
    let projectE = 2;
    let storec = 2.0;
    let type_iz = 5.0;
    let assistm: Array<any> = [901, 377];
    let paginationo = String.fromCharCode(102,95,52,57,95,121,117,118,114,103,98,97,0);
    let mathV = String.fromCharCode(115,117,98,118,105,101,119,101,114,95,107,95,51,57,0);
    let updatest = String.fromCharCode(106,95,56,53,95,105,110,105,116,105,97,108,105,122,101,0);
   while ((type_iz - assistm.length) < 3.1 && (type_iz - 3.1) < 5.11) {
      type_iz += (mathV == String.fromCharCode(87,0) ? mathV.length : parseInt(`${type_iz}`));
      break;
   }
       let indicatorx = String.fromCharCode(114,101,108,97,116,105,118,101,95,100,95,48,0);
       let reminderV = String.fromCharCode(109,95,57,48,95,110,101,115,116,0);
      for (let s = 0; s < 2; s++) {
         reminderV = `${(indicatorx == String.fromCharCode(111,0) ? indicatorx.length : reminderV.length)}`;
      }
         indicatorx = "2";
         indicatorx += `${(String.fromCharCode(48,0) == indicatorx ? reminderV.length : indicatorx.length)}`;
         reminderV = `${(String.fromCharCode(118,0) == indicatorx ? reminderV.length : indicatorx.length)}`;
         indicatorx += "1";
         indicatorx = `${3 * indicatorx.length}`;
      updatest = `${(paginationo == String.fromCharCode(119,0) ? paginationo.length : updatest.length)}`;
      pause1 /= Math.max(2, 3);
   if (updatest.length >= 1) {
      pause1 -= updatest.length + paginationo.length;
   }
      type_iz /= Math.max(1, (String.fromCharCode(121,0) == paginationo ? parseInt(`${pause1}`) : paginationo.length));
   while ((2 - assistm.length) <= 1 || 2 <= (2 | assistm.length)) {
       let catagoryx = String.fromCharCode(111,110,110,101,99,116,105,111,110,95,102,95,52,56,0);
         catagoryx = `${1 * catagoryx.length}`;
         catagoryx = `${catagoryx.length | catagoryx.length}`;
       let notificationc = String.fromCharCode(100,95,52,56,0);
       let referrerb = String.fromCharCode(119,95,53,51,95,108,111,111,107,97,104,101,97,100,0);
      pause1 /= Math.max(3, updatest.length - 3);
      break;
   }
       let activeZ = String.fromCharCode(115,101,116,117,112,105,110,116,114,97,114,101,99,111,110,95,121,95,57,48,0);
       let floatingX = true;
       let hejiU = 0.0;
          let sheetv = 3.0;
         floatingX = 20.97 == hejiU;
         sheetv += parseInt(`${sheetv}`) + parseInt(`${sheetv}`);
         activeZ += `${activeZ.length}`;
         hejiU += ((floatingX ? 1 : 3));
         floatingX = hejiU == 33.79;
      for (let h = 0; h < 2; h++) {
         floatingX = activeZ.length > 86 || floatingX;
      }
      if (activeZ.length > 1 && !floatingX) {
         floatingX = activeZ.length > 30;
      }
         activeZ += `${((floatingX ? 5 : 4) << (Math.min(activeZ.length, 1)))}`;
      while ((hejiU / (Math.max(1.69, 10))) < 5.70 || hejiU < 1.69) {
         floatingX = !floatingX && 34.18 >= hejiU;
         break;
      }
      for (let q = 0; q < 2; q++) {
          let frame_kuU = true;
          let listI = 2;
          let orangeS = 2.0;
          let buffero: Map<any, any> = new Map([[String.fromCharCode(117,95,51,55,95,99,111,110,110,101,99,116,105,111,110,0),String.fromCharCode(105,102,102,116,95,54,95,50,49,0)], [String.fromCharCode(109,101,109,110,95,51,95,50,57,0),String.fromCharCode(100,105,115,112,108,97,121,95,113,95,56,48,0)], [String.fromCharCode(105,95,54,49,95,110,111,104,119,0),String.fromCharCode(117,95,50,56,95,99,111,110,116,97,105,110,105,110,103,0)]]);
          let popupU = false;
         floatingX = (activeZ.length << (Math.min(5, Math.abs(listI)))) <= 66;
         frame_kuU = 66.96 == orangeS;
         listI /= Math.max(5, buffero.size);
         orangeS -= buffero.size;
         popupU = buffero.size < 44;
      }
      updatest = `${(String.fromCharCode(82,0) == paginationo ? paginationo.length : parseInt(`${storec}`))}`;
       let favoriteI = String.fromCharCode(102,95,50,51,95,100,101,102,105,110,101,0);
       let modulel: Map<any, any> = new Map([[String.fromCharCode(100,101,115,101,108,101,99,116,101,100,95,111,95,57,54,0),982], [String.fromCharCode(107,95,53,50,95,115,116,114,110,105,99,109,112,0),467]]);
       let megaphonef = String.fromCharCode(113,95,55,48,95,101,99,100,115,97,0);
         modulel.set(megaphonef, 3 * modulel.size);
          let moonS = String.fromCharCode(121,95,55,54,95,98,105,110,116,114,101,101,0);
          let placeholders: Map<any, any> = new Map([[String.fromCharCode(114,101,115,101,114,118,101,100,95,121,95,57,49,0),845], [String.fromCharCode(118,95,54,53,95,98,121,114,121,105,0),685]]);
         megaphonef = `${(favoriteI == String.fromCharCode(80,0) ? megaphonef.length : favoriteI.length)}`;
         moonS = `${moonS.length % 1}`;
         placeholders.set(`${moonS}`, 1);
          let whiteo: Map<any, any> = new Map([[String.fromCharCode(100,114,105,118,101,114,115,95,120,95,55,48,0),278], [String.fromCharCode(100,117,112,108,105,99,97,116,101,100,95,118,95,55,49,0),475]]);
          let bottomA = String.fromCharCode(100,95,49,48,48,95,100,105,115,112,108,97,99,101,109,101,110,116,0);
         modulel.set(megaphonef, 2);
         whiteo = new Map([[`${whiteo.size}`, 1 << (Math.min(3, Math.abs(whiteo.size)))]]);
         bottomA = `${bottomA.length * 3}`;
       let filter4 = 3.0;
       let albumM = 0.0;
          let mappingY = 2.0;
          let changef = false;
         megaphonef = "3";
         mappingY -= (parseFloat(`${(changef ? 5 : 1) / (Math.max(parseInt(`${mappingY}`), 7))}`));
         changef = 62.11 == mappingY || !changef;
         megaphonef = "3";
         modulel.set(`${filter4}`, 3 >> (Math.min(2, Math.abs(modulel.size))));
         favoriteI += `${(String.fromCharCode(100,0) == megaphonef ? megaphonef.length : parseInt(`${filter4}`))}`;
         megaphonef = `${favoriteI.length}`;
      type_iz /= Math.max(assistm.length, 2);
       let searchI = 5.0;
      for (let l = 0; l < 2; l++) {
         searchI += parseInt(`${searchI}`) >> (Math.min(1, Math.abs(3)));
      }
      let with_dq9 = searchI <= 5587742.0;
      do {
         searchI *= 3;
         if (with_dq9) {
            break;
         }
      } while (with_dq9 && (4.17 >= (searchI * 4.92)));
      while ((searchI / (Math.max(1.86, 1))) >= 3.40 && 1.86 >= (searchI / (Math.max(searchI, 1)))) {
         searchI *= parseInt(`${searchI}`) << (Math.min(4, Math.abs(3)));
         break;
      }
      type_iz += parseInt(`${storec}`);
      projectE &= mathV.length | paginationo.length;
      assistm = [assistm.length ^ paginationo.length];
      paginationo += `${mathV.length >> (Math.min(updatest.length, 4))}`;
       let privilegeu = 2.0;
      for (let z = 0; z < 1; z++) {
         privilegeu -= parseInt(`${privilegeu}`) << (Math.min(1, Math.abs(1)));
      }
      let customa = 9163701.0 >= privilegeu;
      do {
          let sansp: Map<any, any> = new Map([[String.fromCharCode(114,95,53,53,95,114,101,99,101,105,118,101,114,0),false ], [String.fromCharCode(110,95,49,48,95,99,97,109,112,97,105,103,110,0),false ], [String.fromCharCode(111,95,52,52,95,119,114,105,116,101,97,98,108,101,0),false ]]);
         privilegeu -= 1 >> (Math.min(5, Math.abs(sansp.size)));
         if (customa) {
            break;
         }
      } while (((4.21 * privilegeu) == 3.65 && 2.97 == (4.21 * privilegeu)) && customa);
         privilegeu *= 1;
      type_iz += 3 >> (Math.min(1, paginationo.length));
   if (updatest.includes(`${projectE}`)) {
      updatest += `${3 & parseInt(`${storec}`)}`;
   }
      storec /= Math.max(3, parseFloat(`${parseInt(`${storec}`) % 1}`));
      paginationo = "2";
   let baiduP = paginationo == String.fromCharCode(103,117,49,56,119,116,51,0);
   do {
       let muted4 = String.fromCharCode(106,95,54,56,95,99,97,108,99,119,0);
       let nalyticsh = String.fromCharCode(107,95,52,53,95,100,101,102,97,117,108,116,99,111,101,102,99,111,117,110,116,115,0);
       let filedj: Array<any> = [339, 938, 654];
         nalyticsh += `${muted4.length << (Math.min(Math.abs(3), 2))}`;
      if ((filedj.length - 5) == 5 || 5 == (nalyticsh.length - filedj.length)) {
         nalyticsh = `${1 & muted4.length}`;
      }
      let albumb = 6233344 <= muted4.length;
      do {
         muted4 += `${nalyticsh.length << (Math.min(1, muted4.length))}`;
         if (albumb) {
            break;
         }
      } while ((!nalyticsh.includes(muted4)) && albumb);
         muted4 = `${nalyticsh.length}`;
          let circles = 2;
          let gpay9 = String.fromCharCode(97,109,112,108,105,102,121,95,99,95,56,57,0);
          let user9 = String.fromCharCode(107,95,52,54,95,110,111,110,110,117,108,108,111,117,116,0);
         nalyticsh += `${gpay9.length}`;
         circles -= 3 % (Math.max(5, user9.length));
         gpay9 += `${user9.length}`;
         muted4 = `${nalyticsh.length - 1}`;
       let componentv = true;
       let gpayp = true;
         nalyticsh = `${(nalyticsh == String.fromCharCode(76,0) ? (gpayp ? 2 : 1) : nalyticsh.length)}`;
      let transfert = String.fromCharCode(101,101,49,97,0) == muted4;
      do {
         muted4 += `${((gpayp ? 4 : 4))}`;
         if (transfert) {
            break;
         }
      } while ((componentv && 4 < muted4.length) && transfert);
      paginationo += `${parseInt(`${type_iz}`) / (Math.max(1, 10))}`;
      if (baiduP) {
         break;
      }
   } while ((5 == (paginationo.length % (Math.max(2, 8)))) && baiduP);
       let arrowh = false;
      if (!arrowh) {
         arrowh = !arrowh && arrowh;
      }
          let tooltipsl: Array<any> = [530, 646, 190];
          let confirmation1 = 1;
          let taiwan_ = String.fromCharCode(114,111,119,115,95,122,95,51,57,0);
         arrowh = tooltipsl.length > 62 || !arrowh;
         tooltipsl.push(confirmation1 % (Math.max(taiwan_.length, 10)));
         confirmation1 -= (taiwan_ == String.fromCharCode(65,0) ? confirmation1 : taiwan_.length);
         arrowh = (arrowh ? arrowh : arrowh);
      projectE *= 1 & paginationo.length;
   let networkG = mathV.length <= 5440132;
   do {
      mathV = "1";
      if (networkG) {
         break;
      }
   } while (networkG && (!mathV.endsWith(`${projectE}`)));
   for (let m = 0; m < 3; m++) {
      type_iz -= parseInt(`${type_iz}`);
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
       let login4 = String.fromCharCode(118,95,54,51,95,117,112,112,101,114,99,97,115,101,0);
    let main_oE = String.fromCharCode(99,102,104,100,95,113,95,54,51,0);
    let dialogJ = String.fromCharCode(103,101,116,112,105,120,95,57,95,52,52,0);
    let trashD = String.fromCharCode(114,101,119,114,105,116,116,101,110,95,50,95,56,0);
    let home1 = String.fromCharCode(103,95,57,53,95,102,105,110,103,101,114,112,114,105,110,116,0);
    let ewardedg = String.fromCharCode(100,105,103,101,115,116,95,99,95,49,48,48,0);
    let connectionx: Map<any, any> = new Map([[String.fromCharCode(115,117,110,118,101,114,95,113,95,56,0),934], [String.fromCharCode(100,95,57,49,95,115,116,114,0),220]]);
    let viewerE = String.fromCharCode(110,99,98,99,95,102,95,55,53,0);
    let suggestiond: Array<any> = [String.fromCharCode(104,95,57,51,95,115,112,108,105,116,115,0), String.fromCharCode(120,95,51,48,0)];
    let privacyv = 0.0;
    let greyM = 4.0;
    let sheete = 2.0;
    let moreB = String.fromCharCode(118,105,109,101,111,95,113,95,56,52,0);
    let chartw: Array<any> = [792, 196];
       let update_tdK: Array<any> = [String.fromCharCode(104,95,53,48,95,99,104,97,114,97,99,116,101,114,115,0), String.fromCharCode(114,101,110,100,101,114,101,114,115,95,115,95,57,50,0), String.fromCharCode(100,111,117,98,108,101,115,115,116,114,95,97,95,52,50,0)];
      while (1 >= (update_tdK.length + update_tdK.length) || (1 + update_tdK.length) >= 3) {
         update_tdK.push(update_tdK.length);
         break;
      }
      let bootsplashC = update_tdK.length <= 7598226;
      do {
          let eactI = 2.0;
          let launchV: Array<any> = [721, 51];
          let yingu = String.fromCharCode(100,114,97,119,116,101,120,116,95,121,95,49,55,0);
          let modeM = String.fromCharCode(115,104,111,114,116,101,110,95,114,95,52,55,0);
          let topicV = true;
         update_tdK.push(launchV.length);
         eactI += parseInt(`${eactI}`);
         launchV = [2];
         yingu = `${parseInt(`${eactI}`) + 1}`;
         modeM = `${modeM.length}`;
         topicV = !modeM.endsWith(`${topicV}`);
         if (bootsplashC) {
            break;
         }
      } while (bootsplashC && (2 >= (5 >> (Math.min(5, update_tdK.length))) && 3 >= (update_tdK.length >> (Math.min(Math.abs(5), 1)))));
          let paginationN: Array<any> = [539, 664];
          let middle7 = 3;
          let desco: Array<any> = [427, 308];
         update_tdK.push(desco.length);
         paginationN.push(paginationN.length - 1);
         middle7 &= paginationN.length;
         desco.push(1 / (Math.max(7, middle7)));
      privacyv += parseFloat(`${2}`);
   for (let v = 0; v < 3; v++) {
      dialogJ += `${viewerE.length >> (Math.min(login4.length, 2))}`;
   }
      dialogJ += `${parseInt(`${privacyv}`) << (Math.min(2, Math.abs(3)))}`;
      connectionx = new Map([[main_oE, (main_oE == String.fromCharCode(67,0) ? parseInt(`${privacyv}`) : main_oE.length)]]);
      login4 += `${(String.fromCharCode(78,0) == login4 ? home1.length : login4.length)}`;
   let private_x1i = 7838934.0 >= privacyv;
   do {
      privacyv *= parseFloat(`${viewerE.length >> (Math.min(1, home1.length))}`);
      if (private_x1i) {
         break;
      }
   } while ((privacyv == parseFloat(`${suggestiond.length}`)) && private_x1i);
   for (let c = 0; c < 2; c++) {
       let savet = 2;
      for (let r = 0; r < 3; r++) {
         savet /= Math.max(2, savet / (Math.max(9, savet)));
      }
      let hejin = savet >= 9674523;
      do {
         savet *= 2 << (Math.min(2, Math.abs(savet)));
         if (hejin) {
            break;
         }
      } while (hejin && ((savet >> (Math.min(Math.abs(savet), 1))) == 4 && (savet >> (Math.min(Math.abs(4), 5))) == 3));
      for (let n = 0; n < 1; n++) {
         savet %= Math.max(3, savet);
      }
      viewerE = `${3 ^ dialogJ.length}`;
   }
   let emojir = suggestiond.length <= 5455720;
   do {
      suggestiond.push(connectionx.size);
      if (emojir) {
         break;
      }
   } while ((5 == (suggestiond.length | 2) || 2 == (main_oE.length | suggestiond.length)) && emojir);
   let guideY = String.fromCharCode(118,105,120,49,50,0) == dialogJ;
   do {
      dialogJ = `${parseInt(`${privacyv}`)}`;
      if (guideY) {
         break;
      }
   } while ((dialogJ.length > 4) && guideY);
      main_oE = "1";
      greyM *= parseFloat(`${login4.length}`);
       let senda = 5.0;
      while ((1.32 / (Math.max(1, senda))) <= 5.72 && 1.32 <= (senda - senda)) {
         senda -= parseFloat(`${3 / (Math.max(9, parseInt(`${senda}`)))}`);
         break;
      }
      for (let x = 0; x < 1; x++) {
          let yingr = String.fromCharCode(112,95,52,51,95,113,117,111,116,101,100,0);
          let rulesU = true;
         senda *= (parseFloat(`${(rulesU ? 2 : 1) | parseInt(`${senda}`)}`));
         yingr = `${yingr.length % 1}`;
         rulesU = 38 == yingr.length && String.fromCharCode(88,0) == yingr;
      }
      if (1.47 >= (senda - 3.73) || (senda - 3.73) >= 1.95) {
          let s_count4: Array<any> = [1000, 608];
         senda /= Math.max(parseFloat(`${3 / (Math.max(4, s_count4.length))}`), 2);
      }
      connectionx.set(`${sheete}`, 1);

      if (
        autoPlayNext &&
        activeEpisode !== undefined &&
        episodes &&
        activeEpisode < episodes?.url_count - 1
      ) {

   while ((trashD.length % (Math.max(7, suggestiond.length))) <= 3) {
      trashD += `${main_oE.length}`;
      break;
   }
      login4 += `${viewerE.length * 3}`;
   let episodesc = 6079321 >= trashD.length;
   do {
       let networkM = String.fromCharCode(97,95,56,48,95,111,112,101,114,97,116,105,111,110,115,0);
       let textz = 4;
       let ticked1: Array<any> = [615, 485];
       let setting5 = String.fromCharCode(120,99,104,103,95,108,95,57,0);
       let aboutz = 1;
       let memberf = 2;
         aboutz <<= Math.min(Math.abs(memberf | 1), 3);
         ticked1.push(memberf + 2);
          let borderless4 = 3.0;
          let albumK = String.fromCharCode(117,95,52,49,95,112,105,120,101,108,98,117,102,102,101,114,0);
         networkM = "2";
         borderless4 -= parseFloat(`${3}`);
         albumK += `${parseInt(`${borderless4}`)}`;
          let favicon5 = String.fromCharCode(119,95,49,50,95,118,101,114,116,115,0);
         ticked1.push(ticked1.length << (Math.min(setting5.length, 3)));
         favicon5 = `${favicon5.length / (Math.max(4, favicon5.length))}`;
      let cornerK = memberf >= 9318018;
      do {
         memberf += networkM.length;
         if (cornerK) {
            break;
         }
      } while (cornerK && (!setting5.startsWith(`${memberf}`)));
       let frame_6kO = 3.0;
         setting5 += `${ticked1.length}`;
      while ((2 << (Math.min(3, Math.abs(memberf)))) <= 5) {
         memberf <<= Math.min(Math.abs((String.fromCharCode(67,0) == setting5 ? setting5.length : parseInt(`${frame_6kO}`))), 1);
         break;
      }
      while ((textz ^ memberf) == 3 || (memberf ^ 3) == 2) {
         textz |= 3;
         break;
      }
         memberf &= (setting5 == String.fromCharCode(72,0) ? parseInt(`${frame_6kO}`) : setting5.length);
      for (let e = 0; e < 3; e++) {
          let loading2 = true;
         textz |= parseInt(`${frame_6kO}`) + 2;
         loading2 = !loading2;
      }
      trashD += `${connectionx.size * 2}`;
      if (episodesc) {
         break;
      }
   } while (((trashD.length - 3) > 2 || (trashD.length + parseInt(`${greyM}`)) > 3) && episodesc);
       let hongkongm = String.fromCharCode(102,114,97,109,101,114,97,116,101,95,113,95,53,56,0);
         hongkongm += `${(String.fromCharCode(67,0) == hongkongm ? hongkongm.length : hongkongm.length)}`;
      let readr = 9544516 <= hongkongm.length;
      do {
          let stylei = 2.0;
          let mathc = 1;
         hongkongm += "1";
         stylei += 3 + mathc;
         mathc -= mathc;
         if (readr) {
            break;
         }
      } while (readr && (2 > hongkongm.length));
      while (4 == hongkongm.length && 4 == hongkongm.length) {
         hongkongm += `${(String.fromCharCode(52,0) == hongkongm ? hongkongm.length : hongkongm.length)}`;
         break;
      }
      main_oE += `${(String.fromCharCode(113,0) == trashD ? parseInt(`${sheete}`) : trashD.length)}`;
   while ((1 | dialogJ.length) == 1 && (2.4 * sheete) == 3.34) {
      dialogJ = "2";
      break;
   }
   let sheetZ = main_oE == String.fromCharCode(110,56,116,119,101,116,107,104,0);
   do {
       let thailandj = true;
       let time_u5 = 5;
       let signinupe = String.fromCharCode(97,95,54,53,95,97,102,102,105,110,105,116,105,101,115,0);
      while (!thailandj) {
         time_u5 &= 3;
         break;
      }
      for (let r = 0; r < 2; r++) {
         time_u5 <<= Math.min(3, parseInt(`${Math.abs(((thailandj ? 3 : 3) % (Math.max(time_u5, 4))))}`));
      }
      let iconS = 6141714 <= time_u5;
      do {
         time_u5 += 1 ^ signinupe.length;
         if (iconS) {
            break;
         }
      } while (iconS && (1 <= (3 << (Math.min(3, Math.abs(time_u5))))));
      for (let c = 0; c < 3; c++) {
         thailandj = (39 > ((thailandj ? signinupe.length : 39) & signinupe.length));
      }
          let selectL = 3;
         signinupe = `${signinupe.length}`;
         selectL /= Math.max(2, selectL & 1);
          let fillP = false;
         thailandj = signinupe.endsWith(`${time_u5}`);
         fillP = (!fillP ? !fillP : fillP);
      if (signinupe.length <= time_u5) {
          let telegrame = 2.0;
          let models = 5.0;
          let yellowX = 5;
          let aboutI: Map<any, any> = new Map([[String.fromCharCode(108,97,121,111,117,116,115,95,51,95,57,49,0),String.fromCharCode(107,101,121,110,97,109,101,95,111,95,57,57,0)], [String.fromCharCode(107,95,50,55,95,115,104,111,117,108,100,0),String.fromCharCode(105,95,53,48,95,98,107,116,114,0)], [String.fromCharCode(112,101,115,113,95,120,95,52,0),String.fromCharCode(108,95,49,56,0)]]);
          let selectiony = String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,115,95,99,95,56,0);
         signinupe += `${3 % (Math.max(3, selectiony.length))}`;
         telegrame /= Math.max(1, 2);
         models -= parseInt(`${models}`) / (Math.max(aboutI.size, 4));
         yellowX /= Math.max(parseInt(`${models}`), 3);
         aboutI = new Map([[`${telegrame}`, 3 + parseInt(`${telegrame}`)]]);
         selectiony += `${parseInt(`${models}`) & 1}`;
      }
      if (2 > time_u5) {
          let gemfileN: Array<any> = [441, 569];
         time_u5 /= Math.max(time_u5, 5);
         gemfileN.push(gemfileN.length ^ gemfileN.length);
      }
      if (time_u5 <= 5 || (5 & time_u5) <= 2) {
         thailandj = time_u5 < signinupe.length;
      }
      main_oE += "3 - time_u5";
      if (sheetZ) {
         break;
      }
   } while (((greyM + parseFloat(`${main_oE.length}`)) > 1.95) && sheetZ);
       let middleB = String.fromCharCode(102,114,101,113,95,102,95,53,53,0);
       let downj = 4.0;
         middleB += `${parseInt(`${downj}`) - 3}`;
       let plash_ = String.fromCharCode(114,105,110,103,116,111,110,101,95,111,95,50,56,0);
         downj += (middleB == String.fromCharCode(66,0) ? middleB.length : plash_.length);
      while (!middleB.endsWith(`${downj}`)) {
          let actioni = String.fromCharCode(112,95,53,49,95,100,97,116,97,114,0);
          let download5 = 5.0;
          let backwardp = true;
          let updatesM = String.fromCharCode(114,95,56,51,95,97,114,99,104,105,118,105,110,103,0);
         downj -= plash_.length;
         actioni += `${2 << (Math.min(Math.abs(parseInt(`${download5}`)), 5))}`;
         download5 -= updatesM.length;
         backwardp = (actioni.length << (Math.min(updatesM.length, 2))) == 14;
         break;
      }
         plash_ += "1";
          let memberE = 1;
          let sina1 = 1.0;
         plash_ += "3";
         memberE |= memberE;
         sina1 /= Math.max(2, parseFloat(`${parseInt(`${sina1}`) / 2}`));
      connectionx.set(middleB, viewerE.length);
       let stationsi = String.fromCharCode(103,101,116,115,105,103,99,116,120,110,111,95,50,95,51,55,0);
       let terms6: Map<any, any> = new Map([[String.fromCharCode(100,95,57,50,95,103,97,109,101,0),true ], [String.fromCharCode(115,117,98,112,97,114,116,105,116,105,111,110,95,109,95,53,53,0),false ], [String.fromCharCode(119,95,51,49,95,108,111,99,97,108,105,122,97,116,105,111,110,0),false ]]);
       let currentg = 1.0;
          let gemfiler = false;
          let moduleh = 0.0;
         currentg -= parseFloat(`${1 ^ stationsi.length}`);
         gemfiler = 92.4 > moduleh;
         moduleh -= parseFloat(`${parseInt(`${moduleh}`)}`);
         terms6.set(stationsi, parseInt(`${currentg}`));
      let buttonw = 7261940 >= terms6.size;
      do {
         terms6.set(`${currentg}`, terms6.size << (Math.min(Math.abs(1), 3)));
         if (buttonw) {
            break;
         }
      } while (buttonw && ((5 + stationsi.length) <= 2 && (5 + stationsi.length) <= 4));
      if (terms6.get(`${currentg}`) != null) {
         terms6 = new Map([[`${terms6.size}`, terms6.size]]);
      }
      while (3 < terms6.size) {
          let nterstitialY = 1;
          let umengD = 4.0;
         terms6 = new Map([[`${terms6.size}`, (String.fromCharCode(111,0) == stationsi ? stationsi.length : terms6.size)]]);
         nterstitialY >>= Math.min(Math.abs(nterstitialY / (Math.max(parseInt(`${umengD}`), 4))), 5);
         umengD -= parseFloat(`${3}`);
         break;
      }
      home1 = `${ewardedg.length}`;
      login4 += `${trashD.length}`;
      ewardedg = `${(String.fromCharCode(109,0) == home1 ? home1.length : parseInt(`${sheete}`))}`;
   let pressurex = 6694341 <= suggestiond.length;
   do {
       let fullI = String.fromCharCode(115,100,101,115,95,108,95,50,54,0);
       let submits = String.fromCharCode(106,95,54,49,95,112,97,105,114,105,110,103,115,0);
       let default_0Q = String.fromCharCode(99,111,110,116,114,97,105,110,116,115,95,56,95,56,54,0);
       let servicem = 3.0;
       let hooksf: Array<any> = [406, 733, 162];
      let sortv = hooksf.length <= 6852928;
      do {
         hooksf = [hooksf.length >> (Math.min(submits.length, 2))];
         if (sortv) {
            break;
         }
      } while ((hooksf.includes(servicem)) && sortv);
         submits += `${submits.length}`;
         hooksf.push((default_0Q == String.fromCharCode(110,0) ? parseInt(`${servicem}`) : default_0Q.length));
         servicem /= Math.max(submits.length >> (Math.min(Math.abs(3), 1)), 5);
         submits += `${fullI.length % 2}`;
         submits += `${default_0Q.length & hooksf.length}`;
      for (let a = 0; a < 2; a++) {
         servicem -= 3;
      }
         submits += `${(String.fromCharCode(50,0) == submits ? hooksf.length : submits.length)}`;
      let gestureI = submits.length >= 6832403;
      do {
         submits += `${(submits == String.fromCharCode(54,0) ? submits.length : hooksf.length)}`;
         if (gestureI) {
            break;
         }
      } while (gestureI && ((hooksf.length % (Math.max(submits.length, 1))) > 4 && 5 > (4 % (Math.max(3, submits.length)))));
         fullI = "3";
         hooksf.push(submits.length % (Math.max(3, 5)));
      let emojiR = String.fromCharCode(103,53,111,98,104,53,120,0) == submits;
      do {
          let episodes8 = String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,95,48,95,49,55,0);
          let episodeA = String.fromCharCode(105,110,99,114,109,101,114,103,101,95,115,95,54,54,0);
          let firebaseS = String.fromCharCode(100,111,110,97,116,101,95,57,95,54,56,0);
          let listl = 4;
          let schedule0 = 4.0;
         submits += "1";
         episodes8 += `${2 % (Math.max(5, episodes8.length))}`;
         episodeA += `${listl}`;
         firebaseS = `${parseInt(`${schedule0}`)}`;
         listl -= episodeA.length;
         schedule0 *= episodes8.length << (Math.min(2, episodeA.length));
         if (emojiR) {
            break;
         }
      } while (emojiR && ((submits.length << (Math.min(Math.abs(4), 3))) <= 5 || 4 <= (submits.length << (Math.min(1, hooksf.length)))));
          let expiredI = String.fromCharCode(97,118,105,111,95,103,95,55,55,0);
         servicem /= Math.max(3, submits.length);
         expiredI += `${2 + expiredI.length}`;
          let apple9: Map<any, any> = new Map([[String.fromCharCode(104,111,108,100,95,106,95,55,57,0),true ], [String.fromCharCode(114,97,114,105,116,121,95,48,95,56,0),true ], [String.fromCharCode(100,111,109,97,105,110,115,95,100,95,57,51,0),true ]]);
         hooksf = [(String.fromCharCode(50,0) == submits ? submits.length : hooksf.length)];
         apple9.set(`${apple9.size}`, apple9.size - apple9.size);
         default_0Q += `${default_0Q.length}`;
      suggestiond = [(String.fromCharCode(122,0) == main_oE ? parseInt(`${sheete}`) : main_oE.length)];
      if (pressurex) {
         break;
      }
   } while (pressurex && (1.72 == (sheete / (Math.max(8, suggestiond.length))) || (sheete / (Math.max(1.72, 6))) == 4.77));
   for (let g = 0; g < 1; g++) {
       let activeF = true;
       let stationsM = String.fromCharCode(122,95,50,57,95,104,97,114,109,111,110,105,99,0);
      while (!activeF && 1 > stationsM.length) {
         activeF = stationsM.length < 29;
         break;
      }
          let lightV = String.fromCharCode(118,95,49,56,95,112,114,111,112,0);
         activeF = !activeF;
         lightV = `${1 - lightV.length}`;
       let moonZ = false;
      let blackY = 7421241 <= stationsM.length;
      do {
         stationsM += "1";
         if (blackY) {
            break;
         }
      } while (blackY && (4 > stationsM.length || !moonZ));
       let long_gI = 0;
       let y_positionc = 0;
         y_positionc %= Math.max(3, stationsM.length);
      sheete /= Math.max(ewardedg.length, 1);
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
       let vignette6 = String.fromCharCode(101,95,52,54,95,117,110,105,120,0);
    let floaterY = String.fromCharCode(103,95,53,49,95,99,97,99,104,101,115,105,122,101,0);
    let customw = String.fromCharCode(118,95,53,53,95,115,117,98,116,105,116,108,101,115,0);
    let m_playerM = String.fromCharCode(108,95,52,53,95,99,116,120,105,100,120,105,110,99,0);
    let interstitialA = String.fromCharCode(102,95,49,56,95,98,108,117,101,116,111,111,116,104,0);
    let faviconX = String.fromCharCode(102,97,97,110,100,99,116,95,115,95,54,57,0);
    let preview7 = String.fromCharCode(109,95,55,48,95,97,110,100,108,101,0);
    let assistd: Array<any> = [205, 874];
       let moonm = 5.0;
       let castingn: Array<any> = [988, 315, 451];
         castingn.push(3);
      for (let a = 0; a < 3; a++) {
         moonm /= Math.max(parseFloat(`${3}`), 3);
      }
         moonm /= Math.max(parseFloat(`${castingn.length}`), 1);
      while (!castingn.includes(moonm)) {
         castingn = [castingn.length << (Math.min(2, Math.abs(parseInt(`${moonm}`))))];
         break;
      }
      while (moonm == 4.43) {
          let fieldX = String.fromCharCode(121,95,54,55,95,103,108,107,0);
          let const_bE: Map<any, any> = new Map([[String.fromCharCode(115,101,101,107,98,97,99,107,95,122,95,52,49,0),775], [String.fromCharCode(101,95,57,51,95,112,114,101,108,111,97,100,101,100,0),917]]);
          let signinupW = true;
         castingn = [castingn.length * 2];
         fieldX += `${const_bE.size}`;
         const_bE.set(fieldX, (3 - (signinupW ? 4 : 3)));
         signinupW = (const_bE.size & fieldX.length) > 52;
         break;
      }
         castingn = [2 * castingn.length];
      vignette6 = `${(String.fromCharCode(122,0) == vignette6 ? vignette6.length : customw.length)}`;
      interstitialA += `${customw.length}`;
       let untick4 = 3.0;
          let field3 = String.fromCharCode(97,108,116,95,118,95,54,49,0);
          let championD = String.fromCharCode(115,111,102,97,108,105,122,101,114,95,109,95,53,56,0);
         untick4 += parseFloat(`${1 ^ field3.length}`);
         field3 += "2";
         championD += `${championD.length}`;
      for (let w = 0; w < 2; w++) {
         untick4 /= Math.max(parseFloat(`${parseInt(`${untick4}`)}`), 2);
      }
         untick4 -= parseFloat(`${parseInt(`${untick4}`) - 2}`);
      m_playerM += `${vignette6.length}`;
      vignette6 = `${faviconX.length}`;
      interstitialA += `${interstitialA.length}`;
   while (vignette6.length > 1) {
       let sportsg: Map<any, any> = new Map([[String.fromCharCode(109,97,115,107,101,100,95,103,95,53,54,0),String.fromCharCode(117,110,99,104,97,110,103,101,100,95,104,95,50,55,0)], [String.fromCharCode(101,95,52,49,95,99,111,110,110,101,99,116,111,114,0),String.fromCharCode(116,95,57,57,95,99,104,97,110,103,101,104,0)]]);
       let scheduleX: Array<any> = [449, 891];
       let math9: Array<any> = [442, 566, 289];
       let modityr = 4;
       let h_position_: Array<any> = [138, 192];
         sportsg = new Map([[`${sportsg.size}`, sportsg.size * 2]]);
      while (3 > modityr) {
         h_position_ = [sportsg.size / (Math.max(3, 5))];
         break;
      }
      if (5 == (modityr / 2)) {
         modityr ^= modityr;
      }
      let areaO = h_position_.length >= 6014452;
      do {
         h_position_.push(1 + sportsg.size);
         if (areaO) {
            break;
         }
      } while ((!scheduleX.includes(h_position_.length)) && areaO);
         sportsg.set(`${math9.length}`, 2);
         modityr <<= Math.min(Math.abs(h_position_.length ^ modityr), 3);
          let componentt = String.fromCharCode(99,95,51,52,95,99,104,101,99,107,105,110,103,0);
          let halft = 2.0;
         h_position_.push(modityr % (Math.max(2, sportsg.size)));
         componentt = `${parseInt(`${halft}`) << (Math.min(componentt.length, 5))}`;
         halft /= Math.max(3, parseFloat(`${componentt.length}`));
      if (sportsg.get(`${modityr}`) == null) {
         modityr >>= Math.min(3, scheduleX.length);
      }
      if ((math9.length & sportsg.size) == 5 && 1 == (5 & math9.length)) {
         sportsg = new Map([[`${scheduleX.length}`, 2 - scheduleX.length]]);
      }
      let indexS = modityr <= 5899283;
      do {
         modityr |= scheduleX.length;
         if (indexS) {
            break;
         }
      } while (indexS && ((sportsg.size & 4) == 3 && (modityr & 4) == 3));
          let screenN = String.fromCharCode(111,95,57,57,95,112,101,114,109,105,115,115,105,111,110,115,0);
          let reducerB = 3.0;
          let righth: Array<any> = [String.fromCharCode(117,95,50,49,95,105,109,112,108,101,109,101,110,116,97,116,105,111,110,0), String.fromCharCode(100,95,56,51,95,106,117,115,116,105,102,105,101,100,0)];
         math9.push(2 | h_position_.length);
         screenN = "1";
         reducerB -= parseFloat(`${screenN.length}`);
         righth.push(2);
      if (1 < (2 ^ scheduleX.length) || (math9.length ^ scheduleX.length) < 2) {
         math9.push(modityr);
      }
          let previewh = String.fromCharCode(112,111,115,105,116,105,111,110,95,98,95,50,52,0);
          let upgradeJ: Array<any> = [272, 782];
          let shrinkt = 3;
         sportsg.set(previewh, 3 << (Math.min(1, h_position_.length)));
         previewh += `${2 ^ upgradeJ.length}`;
         upgradeJ.push(1);
         shrinkt <<= Math.min(Math.abs(shrinkt & upgradeJ.length), 1);
         h_position_ = [2];
      while (Array.from(sportsg.keys()).includes(`${scheduleX.length}`)) {
          let giftZ = String.fromCharCode(116,95,52,54,95,109,97,107,101,119,116,0);
          let textj = 2;
         scheduleX.push(2 >> (Math.min(3, Math.abs(textj))));
         giftZ = "2";
         textj += giftZ.length;
         break;
      }
      floaterY += "1";
      break;
   }
   while ((5 >> (Math.min(2, assistd.length))) <= 5 || 2 <= (5 >> (Math.min(3, preview7.length)))) {
       let moonZ: Array<any> = [602, 250];
       let kickF = String.fromCharCode(111,95,53,54,95,116,101,114,109,105,110,97,116,101,100,0);
         kickF += "2";
         moonZ.push(moonZ.length + 2);
      for (let l = 0; l < 3; l++) {
         moonZ.push(kickF.length);
      }
      if (moonZ.length < kickF.length) {
         kickF += "1";
      }
      while (kickF.length < 2) {
         moonZ.push(2);
         break;
      }
      while (kickF.length < moonZ.length) {
         moonZ.push((String.fromCharCode(52,0) == kickF ? moonZ.length : kickF.length));
         break;
      }
      assistd.push(2 >> (Math.min(1, preview7.length)));
      break;
   }
   let heji_ = 6402424 <= assistd.length;
   do {
      assistd.push(assistd.length);
      if (heji_) {
         break;
      }
   } while (heji_ && (assistd.length >= 3));
      interstitialA = `${(vignette6 == String.fromCharCode(57,0) ? floaterY.length : vignette6.length)}`;
   let comment9 = floaterY == String.fromCharCode(103,100,121,0);
   do {
      floaterY += `${vignette6.length}`;
      if (comment9) {
         break;
      }
   } while ((customw != floaterY) && comment9);
   while (floaterY.length <= preview7.length) {
       let sharedQ: Array<any> = [675, 998, 216];
          let servicez: Array<any> = [332, 522, 366];
          let control4 = String.fromCharCode(97,114,109,111,110,121,95,115,95,52,56,0);
         sharedQ.push(1 / (Math.max(4, servicez.length)));
         servicez.push((String.fromCharCode(121,0) == control4 ? control4.length : control4.length));
         sharedQ = [3];
      if ((sharedQ.length - 4) == 4) {
         sharedQ.push(sharedQ.length);
      }
      preview7 = `${(String.fromCharCode(72,0) == floaterY ? floaterY.length : interstitialA.length)}`;
      break;
   }
   for (let w = 0; w < 1; w++) {
      floaterY = `${faviconX.length}`;
   }
   while (faviconX == String.fromCharCode(112,0)) {
       let langN = 3.0;
       let networka = String.fromCharCode(115,112,108,97,115,104,95,106,95,57,51,0);
       let agreementk = String.fromCharCode(103,95,56,57,95,116,112,101,108,0);
       let stationy = String.fromCharCode(100,95,52,54,95,116,97,98,108,101,115,0);
      let minivodo = String.fromCharCode(105,48,103,0) == networka;
      do {
         networka += `${parseInt(`${langN}`)}`;
         if (minivodo) {
            break;
         }
      } while ((5.27 < langN) && minivodo);
         stationy = "2";
          let listv: Array<any> = [879, 129, 20];
          let tickedu = 1.0;
         langN /= Math.max(parseFloat(`${stationy.length << (Math.min(4, listv.length))}`), 5);
         listv = [parseInt(`${tickedu}`) >> (Math.min(3, Math.abs(3)))];
         tickedu /= Math.max(parseFloat(`${parseInt(`${tickedu}`)}`), 2);
      if ((langN - 4.91) < 3.83) {
          let hejiO: Map<any, any> = new Map([[String.fromCharCode(113,95,56,55,95,99,111,112,121,114,105,103,104,116,0),true ], [String.fromCharCode(97,95,52,51,0),true ], [String.fromCharCode(113,117,97,100,114,97,116,105,99,95,109,95,49,56,0),true ]]);
          let danger7 = String.fromCharCode(114,98,115,112,95,112,95,52,54,0);
          let orangeW: Map<any, any> = new Map([[String.fromCharCode(100,101,97,108,108,111,99,97,116,105,111,110,95,108,95,55,0),true ], [String.fromCharCode(122,95,55,53,95,115,117,98,115,116,105,116,117,116,101,0),true ]]);
          let fastforward2 = 2.0;
         networka = `${networka.length}`;
         hejiO.set(danger7, orangeW.size - 1);
         danger7 += `${danger7.length / (Math.max(3, 2))}`;
         orangeW = new Map([[`${orangeW.size}`, (danger7 == String.fromCharCode(105,0) ? danger7.length : orangeW.size)]]);
         fastforward2 *= orangeW.size << (Math.min(3, Math.abs(parseInt(`${fastforward2}`))));
      }
      if (agreementk == String.fromCharCode(85,0) || stationy != String.fromCharCode(99,0)) {
          let fastforwardA = String.fromCharCode(100,111,119,110,115,116,114,101,97,109,95,115,95,49,53,0);
          let phoneo = String.fromCharCode(99,111,100,101,99,99,116,108,95,49,95,48,0);
          let floatingJ: Map<any, any> = new Map([[String.fromCharCode(122,95,52,54,95,98,105,103,100,105,97,0),952], [String.fromCharCode(97,95,50,51,95,120,99,116,101,115,116,0),975], [String.fromCharCode(105,95,55,54,95,117,116,116,101,114,97,110,99,101,0),88]]);
          let starv = String.fromCharCode(116,95,55,51,95,108,97,117,110,99,104,0);
          let m_positionv = String.fromCharCode(110,111,114,109,97,108,105,115,101,95,114,95,52,52,0);
         agreementk += `${starv.length}`;
         fastforwardA += `${fastforwardA.length}`;
         phoneo = `${floatingJ.size}`;
         floatingJ.set(m_positionv, (String.fromCharCode(118,0) == m_positionv ? m_positionv.length : phoneo.length));
         starv += `${3 & m_positionv.length}`;
      }
      let miniT = String.fromCharCode(111,56,111,95,108,107,0) == stationy;
      do {
         stationy += `${(String.fromCharCode(77,0) == stationy ? stationy.length : agreementk.length)}`;
         if (miniT) {
            break;
         }
      } while ((networka != String.fromCharCode(103,0)) && miniT);
      while (agreementk.includes(`${stationy.length}`)) {
          let register_yka = String.fromCharCode(102,114,97,109,101,115,121,110,99,95,122,95,50,50,0);
          let private_ga = String.fromCharCode(114,101,100,115,112,97,114,107,95,54,95,56,52,0);
          let policy9 = String.fromCharCode(118,105,115,105,116,95,121,95,54,57,0);
          let logoutj = String.fromCharCode(117,110,105,111,110,95,98,95,53,51,0);
         stationy += `${parseInt(`${langN}`) << (Math.min(private_ga.length, 5))}`;
         register_yka += `${register_yka.length % 3}`;
         private_ga += `${policy9.length}`;
         policy9 += `${logoutj.length << (Math.min(policy9.length, 5))}`;
         logoutj += `${(register_yka == String.fromCharCode(98,0) ? policy9.length : register_yka.length)}`;
         break;
      }
          let uploadx = 4.0;
         langN -= parseFloat(`${2}`);
         uploadx += parseFloat(`${parseInt(`${uploadx}`) - parseInt(`${uploadx}`)}`);
      for (let k = 0; k < 2; k++) {
          let halfT = 5;
         langN += (parseFloat(`${agreementk == String.fromCharCode(89,0) ? agreementk.length : halfT}`));
      }
      for (let i = 0; i < 1; i++) {
         agreementk += `${(agreementk == String.fromCharCode(109,0) ? networka.length : agreementk.length)}`;
      }
         stationy += `${(String.fromCharCode(118,0) == stationy ? agreementk.length : stationy.length)}`;
      while (agreementk.length >= 3) {
         stationy = `${agreementk.length / (Math.max(2, 10))}`;
         break;
      }
      customw += `${3 * assistd.length}`;
      break;
   }
   for (let f = 0; f < 1; f++) {
      faviconX += `${(String.fromCharCode(82,0) == customw ? customw.length : m_playerM.length)}`;
   }
   let showB = customw.length <= 8422779;
   do {
      customw = `${vignette6.length}`;
      if (showB) {
         break;
      }
   } while ((m_playerM != String.fromCharCode(98,0)) && showB);
       let b_playerM: Map<any, any> = new Map([[String.fromCharCode(101,95,56,49,95,114,115,116,114,105,112,0),911], [String.fromCharCode(111,95,49,55,95,116,100,115,99,0),204], [String.fromCharCode(114,95,51,55,95,116,104,101,116,97,0),92]]);
         b_playerM.set(`${b_playerM.size}`, b_playerM.size >> (Math.min(Math.abs(2), 5)));
      if ((b_playerM.size >> (Math.min(1, Math.abs(b_playerM.size)))) >= 3 || (b_playerM.size >> (Math.min(Math.abs(b_playerM.size), 4))) >= 3) {
         b_playerM = new Map([[`${b_playerM.size}`, 2 << (Math.min(3, Math.abs(b_playerM.size)))]]);
      }
      for (let a = 0; a < 2; a++) {
         b_playerM.set(`${b_playerM.size}`, b_playerM.size ^ b_playerM.size);
      }
      preview7 = `${customw.length << (Math.min(floaterY.length, 2))}`;
   if (floaterY.endsWith(interstitialA)) {
      interstitialA += `${interstitialA.length & 3}`;
   }
   if (floaterY.length == 1) {
      floaterY = `${faviconX.length | preview7.length}`;
   }

          dispatch(incrementSportWatchTime());
        }, 1000);

        return () => clearInterval(unsub);
      }
    }, [route.name])

    const pauseSportVideo =
      route.name === "体育详情" &&
      screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS &&
      !KWConstants.isVip(userState.user);

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
