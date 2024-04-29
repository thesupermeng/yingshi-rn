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
import VideoWithControlsMin from "./tt_service_animation";


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
       let kickO = String.fromCharCode(102,97,105,108,105,110,103,0);
    let skipu = String.fromCharCode(115,117,112,112,111,114,116,115,0);
    let mutedv = 0.0;
    let sharec = 1.0;
    let videoB = String.fromCharCode(114,105,110,103,116,111,110,101,95,104,95,56,52,0);
    let debugO = 3.0;
    let gray1: Array<any> = [156, 174];
    let entryc: Map<any, any> = new Map([[String.fromCharCode(117,110,108,111,99,107,101,100,0),String.fromCharCode(113,117,97,110,116,0)], [String.fromCharCode(103,114,101,121,0),String.fromCharCode(102,115,121,110,99,0)]]);
    let update_wjy: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,101,100,0),759], [String.fromCharCode(101,115,100,115,0),27], [String.fromCharCode(97,112,112,114,101,99,105,97,116,101,100,104,0),315]]);
    let otherC = false;
    let brightnessJ = String.fromCharCode(109,111,109,101,110,116,117,109,0);
    let hejiX = String.fromCharCode(112,95,51,52,95,116,101,114,109,105,110,97,116,101,100,0);
    let episode2 = 5.0;
    let basketballu = String.fromCharCode(100,105,97,103,95,109,95,51,51,0);
    let nextp: Map<any, any> = new Map([[String.fromCharCode(99,95,57,57,95,99,111,115,0),253], [String.fromCharCode(116,114,97,110,115,112,97,114,101,110,99,121,95,113,95,53,48,0),796], [String.fromCharCode(119,114,105,116,101,120,0),460]]);
      skipu += `${1 * parseInt(`${debugO}`)}`;
       let friends7 = String.fromCharCode(109,101,116,114,105,99,115,95,101,95,51,54,0);
       let streamingN = 3;
       let megaphoneh: Array<any> = [147, 500];
       let unselectedw: Array<any> = [909, 675];
      if (friends7.endsWith(`${unselectedw.length}`)) {
          let umengU: Array<any> = [314, 300];
          let playercommonP = false;
          let source_ = 1;
          let previewj = String.fromCharCode(111,112,101,114,97,116,111,114,115,0);
         unselectedw.push(source_ * 2);
         umengU.push(((playercommonP ? 1 : 2)));
         playercommonP = playercommonP || umengU.length < 16;
         source_ /= Math.max(2, ((playercommonP ? 1 : 4) + 2));
         previewj = `${((playercommonP ? 4 : 2) - previewj.length)}`;
      }
         megaphoneh = [streamingN];
      let gradleV = 4963411 <= megaphoneh.length;
      do {
         megaphoneh = [unselectedw.length >> (Math.min(3, megaphoneh.length))];
         if (gradleV) {
            break;
         }
      } while (gradleV && (friends7.startsWith(`${megaphoneh.length}`)));
          let turn0 = 3.0;
          let filterm = String.fromCharCode(103,95,52,52,95,105,110,118,105,116,101,0);
         streamingN %= Math.max(2, megaphoneh.length / (Math.max(1, 8)));
         turn0 -= filterm.length;
         filterm += `${filterm.length * 2}`;
          let tempj: Array<any> = [String.fromCharCode(122,108,105,98,112,114,105,109,101,95,48,95,53,55,0), String.fromCharCode(115,121,110,116,104,101,115,105,122,101,114,0), String.fromCharCode(97,115,115,111,99,95,116,95,49,54,0)];
          let infoN = 1;
          let progressz = String.fromCharCode(114,111,117,116,101,114,0);
         streamingN *= streamingN >> (Math.min(Math.abs(3), 3));
         tempj.push(infoN | progressz.length);
         infoN ^= infoN % (Math.max(tempj.length, 1));
         progressz = `${3 | progressz.length}`;
      sharec -= parseFloat(`${kickO.length}`);
      skipu += `${videoB.length >> (Math.min(5, kickO.length))}`;
   let inactiveA = otherC ? !otherC : otherC;
   do {
      otherC = kickO.length == 80;
      if (inactiveA) {
         break;
      }
   } while ((!otherC) && inactiveA);
      mutedv *= gray1.length;
   if ((update_wjy.size * 4) >= 4 && 1 >= (4 * kickO.length)) {
      update_wjy.set(`${gray1.length}`, update_wjy.size >> (Math.min(gray1.length, 4)));
   }
      mutedv -= 3 / (Math.max(1, videoB.length));
   let const_fyc = debugO >= 6790604.0;
   do {
      debugO -= parseInt(`${sharec}`);
      if (const_fyc) {
         break;
      }
   } while (const_fyc && (!Array.from(update_wjy.values()).includes(debugO)));
   while (skipu.length > gray1.length) {
      gray1.push(2);
      break;
   }
   while (4 >= (update_wjy.size >> (Math.min(Math.abs(3), 4))) || (3 >> (Math.min(3, Math.abs(entryc.size)))) >= 5) {
      update_wjy = new Map([[kickO, kickO.length >> (Math.min(skipu.length, 2))]]);
      break;
   }
   if (gray1.length > 4) {
      entryc.set(`${mutedv}`, parseInt(`${mutedv}`) ^ 3);
   }
   let friendsM = 5324298.0 <= debugO;
   do {
      debugO += 1;
      if (friendsM) {
         break;
      }
   } while (friendsM && (2 > (4 * videoB.length) && 2 > (videoB.length >> (Math.min(Math.abs(4), 3)))));
      update_wjy.set(`${sharec}`, parseInt(`${sharec}`) << (Math.min(1, Math.abs(1))));
   if ((5.5 * sharec) < 2.89 && 1 < (entryc.size * 4)) {
      entryc = new Map([[`${update_wjy.size}`, update_wjy.size]]);
   }
   let suggestionb = String.fromCharCode(103,57,100,109,49,114,55,55,49,0) == videoB;
   do {
      videoB += `${parseInt(`${debugO}`) / (Math.max(8, parseInt(`${sharec}`)))}`;
      if (suggestionb) {
         break;
      }
   } while (suggestionb && ((videoB.length / (Math.max(9, gray1.length))) == 2));
   let middlei = 9594531.0 >= mutedv;
   do {
      mutedv /= Math.max(parseInt(`${debugO}`) | parseInt(`${sharec}`), 3);
      if (middlei) {
         break;
      }
   } while (middlei && (mutedv <= sharec));
      update_wjy = new Map([[`${mutedv}`, 2]]);
   if (4 <= (brightnessJ.length | 2)) {
      gray1.push(2 + kickO.length);
   }
      sharec /= Math.max(parseFloat(`${3 ^ skipu.length}`), 2);
      videoB += `${skipu.length >> (Math.min(3, Math.abs(entryc.size)))}`;
   for (let r = 0; r < 3; r++) {
       let tickedE: Map<any, any> = new Map([[String.fromCharCode(114,97,112,105,100,106,115,111,110,95,107,95,50,50,0),444], [String.fromCharCode(99,111,110,116,97,105,110,97,98,108,101,0),435]]);
       let resultt: Array<any> = [370, 517, 911];
       let questk = 1.0;
         resultt = [3];
      let completeO = tickedE.size <= 6344323;
      do {
         tickedE.set(`${questk}`, 1 << (Math.min(5, resultt.length)));
         if (completeO) {
            break;
         }
      } while ((Array.from(tickedE.values()).includes(resultt.length)) && completeO);
          let mbbidn = 0.0;
          let currenth = 0.0;
          let firebasep = String.fromCharCode(116,95,53,51,95,98,112,115,0);
         resultt.push(parseInt(`${currenth}`));
         mbbidn -= (String.fromCharCode(87,0) == firebasep ? parseInt(`${mbbidn}`) : firebasep.length);
         resultt = [parseInt(`${questk}`)];
         questk /= Math.max(1, 5);
          let f_countC = false;
         questk *= tickedE.size;
         f_countC = !f_countC && f_countC;
      if (questk > 4.56) {
         questk *= 3;
      }
         questk += tickedE.size | 2;
         tickedE = new Map([[`${tickedE.size}`, tickedE.size / 3]]);
      episode2 *= parseFloat(`${parseInt(`${mutedv}`) % (Math.max(tickedE.size, 7))}`);
   }
   if (videoB.startsWith(`${gray1.length}`)) {
      videoB += `${(String.fromCharCode(117,0) == hejiX ? update_wjy.size : hejiX.length)}`;
   }
   let mbnativeA = 8723248 <= nextp.size;
   do {
      nextp.set(`${episode2}`, parseInt(`${episode2}`));
      if (mbnativeA) {
         break;
      }
   } while (mbnativeA && (3 < (kickO.length & nextp.size)));
       let libcrashsdkI = 1;
       let pageq: Array<any> = [328, 0];
       let y_imageP = 2.0;
         y_imageP -= parseFloat(`${1 % (Math.max(9, parseInt(`${y_imageP}`)))}`);
         pageq.push(parseInt(`${y_imageP}`) + 1);
      if (5 < (5 % (Math.max(5, pageq.length))) && 4.100 < (y_imageP - 5.46)) {
          let popupR = String.fromCharCode(97,115,101,108,101,99,116,95,56,95,53,52,0);
          let gemfileF = String.fromCharCode(110,111,114,109,0);
          let skipR: Map<any, any> = new Map([[String.fromCharCode(116,98,109,108,95,108,95,51,56,0),347], [String.fromCharCode(115,97,118,105,110,103,115,0),148], [String.fromCharCode(99,95,49,50,95,105,110,100,105,99,101,115,0),547]]);
         y_imageP *= parseFloat(`${skipR.size}`);
         popupR += `${popupR.length & gemfileF.length}`;
         gemfileF = `${popupR.length ^ 1}`;
         skipR = new Map([[gemfileF, popupR.length | gemfileF.length]]);
      }
      let halfW = 7309106 >= pageq.length;
      do {
          let bannerj = 5.0;
          let chartm = 3.0;
         pageq.push(parseInt(`${y_imageP}`));
         bannerj -= 1;
         chartm -= parseFloat(`${3}`);
         if (halfW) {
            break;
         }
      } while ((pageq.length == 1) && halfW);
          let accepted9 = String.fromCharCode(113,117,101,117,101,95,111,95,54,51,0);
         pageq = [parseInt(`${y_imageP}`) << (Math.min(2, Math.abs(2)))];
         accepted9 += `${(String.fromCharCode(82,0) == accepted9 ? accepted9.length : accepted9.length)}`;
      for (let k = 0; k < 1; k++) {
          let gpay4 = String.fromCharCode(105,110,100,101,111,100,97,116,97,95,49,95,55,50,0);
         y_imageP /= Math.max(parseFloat(`${pageq.length % 3}`), 1);
         gpay4 = `${gpay4.length}`;
      }
         y_imageP += parseFloat(`${parseInt(`${y_imageP}`)}`);
          let windd: Map<any, any> = new Map([[String.fromCharCode(109,115,103,115,109,100,101,99,95,53,95,49,52,0),String.fromCharCode(102,97,118,105,99,111,110,0)], [String.fromCharCode(115,105,109,112,108,101,116,105,109,101,111,117,116,95,113,95,54,55,0),String.fromCharCode(105,95,57,54,95,99,111,112,105,101,115,0)]]);
         pageq.push(3 & parseInt(`${y_imageP}`));
         windd = new Map([[`${windd.size}`, windd.size]]);
       let brightnessB = String.fromCharCode(110,112,117,116,0);
       let tumbnail0 = String.fromCharCode(98,114,111,97,100,99,97,115,116,105,110,103,95,52,95,53,51,0);
      episode2 *= parseFloat(`${basketballu.length - 2}`);
      libcrashsdkI -= libcrashsdkI - libcrashsdkI;
   while ((sharec - parseFloat(`${skipu.length}`)) == 1.53) {
      skipu += `${gray1.length}`;
      break;
   }
      update_wjy.set(`${sharec}`, update_wjy.size);
   while (otherC) {
      otherC = 95.43 == sharec;
      break;
   }
       let floatingE: Map<any, any> = new Map([[String.fromCharCode(97,99,116,117,97,108,108,121,0),842], [String.fromCharCode(100,119,111,114,100,95,113,95,55,50,0),496]]);
       let detailsG = 0.0;
       let descR: Array<any> = [String.fromCharCode(106,95,54,57,95,108,111,119,101,115,116,0), String.fromCharCode(112,111,105,110,116,0), String.fromCharCode(105,110,100,101,112,101,110,100,101,110,116,0)];
       let pathM = false;
       let streamingf = false;
      for (let c = 0; c < 2; c++) {
         detailsG -= (parseFloat(`${descR.length >> (Math.min(4, Math.abs((pathM ? 5 : 3))))}`));
      }
      for (let n = 0; n < 3; n++) {
         detailsG /= Math.max(1, parseFloat(`${floatingE.size >> (Math.min(4, Math.abs(parseInt(`${detailsG}`))))}`));
      }
         detailsG /= Math.max(parseFloat(`${floatingE.size}`), 5);
      let nativec = 8241802.0 >= detailsG;
      do {
          let auto_jj = String.fromCharCode(107,95,54,48,95,113,117,97,108,105,116,121,0);
          let completeu = 4.0;
          let details1 = String.fromCharCode(99,111,109,98,95,115,95,52,53,0);
          let videocommonn = String.fromCharCode(101,98,117,114,95,118,95,53,49,0);
         detailsG /= Math.max(2, parseFloat(`${3}`));
         auto_jj += `${videocommonn.length - 3}`;
         completeu += parseInt(`${completeu}`);
         details1 += `${(String.fromCharCode(88,0) == videocommonn ? videocommonn.length : auto_jj.length)}`;
         if (nativec) {
            break;
         }
      } while (((4.28 / (Math.max(6, detailsG))) == 4.43) && nativec);
       let current1 = 3.0;
       let currentD = 5.0;
       let d_managera: Map<any, any> = new Map([[String.fromCharCode(109,117,120,101,114,115,0),819], [String.fromCharCode(115,116,97,114,116,109,97,114,107,101,114,0),652], [String.fromCharCode(100,101,108,111,103,111,0),156]]);
       let roomR: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,114,97,116,111,114,115,95,50,95,57,54,0),true ], [String.fromCharCode(98,105,116,118,101,99,115,95,117,95,57,48,0),false ]]);
      if ((floatingE.size - current1) > 1.25) {
         floatingE.set(`${current1}`, parseInt(`${current1}`));
      }
      let playl = currentD <= 9890802.0;
      do {
          let playercommonK = String.fromCharCode(112,97,114,115,101,114,0);
         currentD -= ((streamingf ? 1 : 5) / (Math.max(parseInt(`${current1}`), 9)));
         playercommonK = `${playercommonK.length >> (Math.min(Math.abs(3), 4))}`;
         if (playl) {
            break;
         }
      } while ((2.24 > (currentD + current1) && 5.12 > (current1 + 2.24)) && playl);
      nextp.set(videoB, parseInt(`${mutedv}`));
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
       let v_playerL = true;
    let statisticsT: Map<any, any> = new Map([[String.fromCharCode(115,109,117,115,104,0),String.fromCharCode(111,118,101,114,108,97,121,105,110,103,0)], [String.fromCharCode(97,110,105,109,95,102,95,56,55,0),String.fromCharCode(116,105,109,101,108,105,110,101,115,0)]]);
    let brightness4 = String.fromCharCode(115,101,114,118,101,114,95,49,95,55,53,0);
    let relatedZ = 5;
    let rulesa = 1;
    let layoutF = String.fromCharCode(97,112,112,114,111,118,101,100,0);
    let tumbnailM = false;
    let descY = String.fromCharCode(108,104,115,0);
    let videocommonb = 4.0;
    let firebasey: Map<any, any> = new Map([[String.fromCharCode(102,111,117,114,105,101,114,0),590], [String.fromCharCode(116,101,120,116,95,117,95,55,57,0),154]]);
       let activey = false;
       let arrowX = String.fromCharCode(100,117,114,98,105,110,0);
       let profilej = 3.0;
       let prediction9 = 4.0;
      if (3.93 < (prediction9 / (Math.max(1, profilej)))) {
          let rankr = 1;
          let countryz = 3.0;
          let googlee = String.fromCharCode(97,95,53,52,95,114,116,97,100,100,114,115,0);
          let shirtl = 5;
         prediction9 += parseFloat(`${parseInt(`${prediction9}`)}`);
         rankr ^= parseInt(`${countryz}`);
         countryz /= Math.max(3, googlee.length & 1);
         googlee = `${googlee.length + parseInt(`${countryz}`)}`;
         shirtl -= rankr;
      }
          let photoM = 4.0;
          let const_8ce = 1;
          let analyticsz = false;
         activey = 59.67 <= photoM;
         photoM -= parseFloat(`${const_8ce * 1}`);
         const_8ce += const_8ce + 2;
         analyticsz = !analyticsz;
         arrowX += `${arrowX.length << (Math.min(1, Math.abs(parseInt(`${prediction9}`))))}`;
         prediction9 /= Math.max(3, parseFloat(`${arrowX.length % (Math.max(1, 8))}`));
      if (!arrowX.endsWith(`${activey}`)) {
         arrowX += `${((activey ? 5 : 1) % (Math.max(parseInt(`${prediction9}`), 8)))}`;
      }
      descY = "1";
      layoutF = "3";
   while (4 < rulesa) {
      rulesa *= 3 * statisticsT.size;
      break;
   }
   let greenU = relatedZ <= 9301890;
   do {
       let indexQ = 4.0;
       let emptyh = 5.0;
       let ajaxi = String.fromCharCode(115,112,105,110,110,105,110,103,0);
       let long_lvO = false;
      if (4 > ajaxi.length) {
         ajaxi = `${2 | parseInt(`${indexQ}`)}`;
      }
      while (!long_lvO) {
         emptyh += ((long_lvO ? 3 : 2) * parseInt(`${emptyh}`));
         break;
      }
          let currentD = true;
          let colorso = 2.0;
         long_lvO = indexQ > 9.94;
         currentD = 31.15 > colorso;
         colorso *= parseInt(`${colorso}`) - 3;
         emptyh += 3;
      if (5.95 <= (indexQ + emptyh) && (indexQ + 5.95) <= 5.58) {
         emptyh -= 1;
      }
      while (ajaxi.endsWith(`${emptyh}`)) {
         emptyh -= parseInt(`${indexQ}`) + 1;
         break;
      }
         indexQ /= Math.max(3 << (Math.min(2, ajaxi.length)), 3);
      for (let c = 0; c < 3; c++) {
         ajaxi = `${(String.fromCharCode(68,0) == ajaxi ? parseInt(`${emptyh}`) : ajaxi.length)}`;
      }
         indexQ += parseInt(`${indexQ}`) | 3;
         long_lvO = 52.44 >= indexQ;
      if (long_lvO || ajaxi.length <= 3) {
          let bellQ: Map<any, any> = new Map([[String.fromCharCode(105,109,99,100,97,116,97,0),false ], [String.fromCharCode(118,101,114,98,111,115,101,0),true ]]);
          let logoutR = String.fromCharCode(102,105,114,115,116,108,121,95,109,95,51,0);
          let robotoa = 0.0;
         long_lvO = String.fromCharCode(81,0) == ajaxi || emptyh >= 1.20;
         bellQ = new Map([[`${bellQ.size}`, 2 & parseInt(`${robotoa}`)]]);
         logoutR = `${3 + bellQ.size}`;
         robotoa -= parseInt(`${robotoa}`);
      }
          let stationsR = String.fromCharCode(111,95,54,57,95,99,111,109,98,105,110,101,114,0);
          let resendu = String.fromCharCode(105,95,54,57,95,115,116,97,114,116,109,97,114,107,101,114,0);
         emptyh *= ((long_lvO ? 5 : 3) ^ parseInt(`${emptyh}`));
         stationsR += `${(String.fromCharCode(99,0) == stationsR ? stationsR.length : resendu.length)}`;
         resendu = `${stationsR.length}`;
      relatedZ &= ((tumbnailM ? 2 : 5));
      if (greenU) {
         break;
      }
   } while ((layoutF.endsWith(`${relatedZ}`)) && greenU);
   let gemfileV = tumbnailM ? !tumbnailM : tumbnailM;
   do {
      tumbnailM = rulesa > 85 && tumbnailM;
      if (gemfileV) {
         break;
      }
   } while ((tumbnailM) && gemfileV);
      brightness4 = `${descY.length}`;
   for (let f = 0; f < 3; f++) {
       let configY = String.fromCharCode(98,111,120,98,108,117,114,95,54,95,50,51,0);
       let relatedi: Map<any, any> = new Map([[String.fromCharCode(115,117,98,112,97,116,104,115,0),true ], [String.fromCharCode(115,111,114,116,101,100,0),false ]]);
       let helperw = String.fromCharCode(115,119,105,116,99,104,97,98,108,101,0);
         relatedi = new Map([[`${relatedi.size}`, 3 * relatedi.size]]);
      while (configY.length >= helperw.length) {
         configY += `${(String.fromCharCode(67,0) == helperw ? helperw.length : relatedi.size)}`;
         break;
      }
         configY = `${helperw.length}`;
         relatedi.set(helperw, 3 - helperw.length);
      for (let b = 0; b < 2; b++) {
         relatedi.set(configY, configY.length);
      }
       let watch8 = 1.0;
       let greenz = 4.0;
      for (let j = 0; j < 3; j++) {
          let private_ibg: Array<any> = [598, 686];
         watch8 *= private_ibg.length >> (Math.min(Math.abs(2), 1));
      }
       let plusg = String.fromCharCode(116,95,52,50,95,105,100,101,110,116,0);
          let zoomy = 1.0;
         watch8 /= Math.max(1, parseInt(`${watch8}`));
         zoomy -= parseInt(`${zoomy}`) << (Math.min(Math.abs(parseInt(`${zoomy}`)), 2));
      descY += `${configY.length | 2}`;
   }
      layoutF += "1";
   while (!v_playerL) {
      layoutF += `${descY.length}`;
      break;
   }
   while (descY.length > 2) {
      tumbnailM = !tumbnailM || rulesa > 81;
      break;
   }
   if (4 < (1 * descY.length)) {
       let videojsa = String.fromCharCode(112,117,108,108,0);
       let statisticsY: Array<any> = [260, 175];
      let topic6 = String.fromCharCode(112,112,108,105,105,98,98,108,104,0) == videojsa;
      do {
         videojsa += `${videojsa.length}`;
         if (topic6) {
            break;
         }
      } while ((5 > (statisticsY.length >> (Math.min(videojsa.length, 1))) || 5 > (videojsa.length >> (Math.min(Math.abs(5), 4)))) && topic6);
          let becomeH = String.fromCharCode(100,101,99,111,100,101,102,114,97,109,101,0);
          let handlerd = 4;
          let sportz = 0.0;
         statisticsY.push(1);
         becomeH = `${becomeH.length}`;
         handlerd ^= (becomeH == String.fromCharCode(81,0) ? parseInt(`${sportz}`) : becomeH.length);
         sportz -= 1 | handlerd;
          let kickU = String.fromCharCode(111,95,53,95,109,111,100,97,108,0);
          let buttonG: Array<any> = [649, 535];
         videojsa += `${videojsa.length - kickU.length}`;
         kickU += "2";
         buttonG.push(3);
          let friends7 = String.fromCharCode(100,101,99,101,108,101,114,97,116,105,111,110,0);
         statisticsY = [friends7.length / (Math.max(3, statisticsY.length))];
      while (videojsa.length == statisticsY.length) {
         videojsa += `${(String.fromCharCode(95,0) == videojsa ? statisticsY.length : videojsa.length)}`;
         break;
      }
      while (1 <= (3 ^ videojsa.length) || 3 <= (videojsa.length ^ 3)) {
         videojsa = `${videojsa.length}`;
         break;
      }
      descY = `${layoutF.length | 3}`;
   }
      descY += "3";
   let videojsE = brightness4.length >= 5325218;
   do {
       let recommendationj: Array<any> = [306, 348, 981];
       let chartJ = 1.0;
       let analyticsp = 5;
         recommendationj.push(analyticsp);
       let darkS = 1.0;
       let gradleu = 3.0;
      for (let c = 0; c < 2; c++) {
         gradleu /= Math.max(analyticsp << (Math.min(1, Math.abs(3))), 5);
      }
       let hongkongf: Map<any, any> = new Map([[String.fromCharCode(97,95,49,53,95,121,117,118,114,103,98,97,0),250], [String.fromCharCode(100,117,114,98,0),530], [String.fromCharCode(114,101,118,101,114,116,0),928]]);
         darkS *= analyticsp;
         chartJ -= parseFloat(`${parseInt(`${darkS}`)}`);
      while (Array.from(hongkongf.keys()).includes(`${recommendationj.length}`)) {
         recommendationj = [analyticsp];
         break;
      }
         hongkongf = new Map([[`${gradleu}`, parseInt(`${darkS}`) ^ 2]]);
      let gesturesq = darkS >= 8698154.0;
      do {
         darkS /= Math.max(2, parseInt(`${gradleu}`));
         if (gesturesq) {
            break;
         }
      } while (((chartJ / (Math.max(darkS, 10))) <= 3.74) && gesturesq);
      brightness4 += `${brightness4.length}`;
      if (videojsE) {
         break;
      }
   } while ((brightness4.length < 4) && videojsE);
      brightness4 = "3";
   if (layoutF.length <= 5) {
      tumbnailM = String.fromCharCode(113,0) == brightness4;
   }
   let rankt = 5464490 <= statisticsT.size;
   do {
      statisticsT.set(brightness4, brightness4.length >> (Math.min(Math.abs(1), 1)));
      if (rankt) {
         break;
      }
   } while ((1 >= (brightness4.length / 2) || (brightness4.length / 2) >= 3) && rankt);
   for (let o = 0; o < 2; o++) {
      relatedZ ^= ((tumbnailM ? 2 : 5));
   }
   let vignette0 = tumbnailM ? !tumbnailM : tumbnailM;
   do {
      tumbnailM = layoutF.startsWith(`${relatedZ}`);
      if (vignette0) {
         break;
      }
   } while (vignette0 && (tumbnailM));
      rulesa -= brightness4.length;
   while ((4 + descY.length) == 4 || 3 == (rulesa + 4)) {
      rulesa %= Math.max(5, relatedZ | 2);
      break;
   }
   if ((3 % (Math.max(1, brightness4.length))) < 5 || (3 % (Math.max(10, brightness4.length))) < 2) {
       let mintegralG = true;
       let signinupQ = String.fromCharCode(99,104,97,114,116,0);
       let typesf = String.fromCharCode(116,111,110,101,0);
      let turn5 = signinupQ.length <= 6506192;
      do {
         signinupQ = `${((mintegralG ? 5 : 4))}`;
         if (turn5) {
            break;
         }
      } while ((signinupQ.endsWith(typesf)) && turn5);
      for (let z = 0; z < 1; z++) {
         typesf = `${signinupQ.length}`;
      }
       let singleE = 1.0;
         signinupQ += `${signinupQ.length}`;
      while (typesf == signinupQ) {
          let time_n_V = 5.0;
          let filled1 = String.fromCharCode(102,95,51,52,95,100,105,109,109,105,110,103,0);
          let basketballQ = 0.0;
          let downloadC: Map<any, any> = new Map([[String.fromCharCode(117,95,50,52,95,114,101,116,114,121,0),String.fromCharCode(121,95,49,51,95,100,101,115,99,114,0)], [String.fromCharCode(103,97,109,117,116,115,0),String.fromCharCode(99,111,110,116,97,105,110,101,114,115,0)], [String.fromCharCode(114,101,102,100,117,112,101,0),String.fromCharCode(118,105,98,114,97,116,101,0)]]);
          let eventm = 5.0;
         signinupQ += `${parseInt(`${basketballQ}`)}`;
         time_n_V += parseFloat(`${filled1.length & downloadC.size}`);
         filled1 += `${parseInt(`${time_n_V}`)}`;
         basketballQ += 3 >> (Math.min(4, Math.abs(downloadC.size)));
         eventm += (filled1 == String.fromCharCode(99,0) ? parseInt(`${eventm}`) : filled1.length);
         break;
      }
         singleE -= typesf.length;
      while (4 > typesf.length) {
          let minivoda = false;
          let contexts: Array<any> = [String.fromCharCode(105,110,116,101,114,108,101,97,118,105,110,103,0), String.fromCharCode(121,111,110,108,121,0), String.fromCharCode(105,115,112,108,97,121,0)];
         signinupQ = `${((mintegralG ? 1 : 1) + contexts.length)}`;
         minivoda = !minivoda;
         contexts = [((minivoda ? 3 : 2) >> (Math.min(5, Math.abs(3))))];
         break;
      }
          let backgroundx: Array<any> = [603, 314, 796];
          let dropdownh = String.fromCharCode(101,118,97,108,117,97,116,101,0);
         signinupQ = `${(String.fromCharCode(108,0) == dropdownh ? backgroundx.length : dropdownh.length)}`;
      while (!mintegralG) {
          let sendv = false;
          let filei = true;
          let line_ = 3.0;
          let circleI = 1.0;
         mintegralG = line_ >= 45.100 || 66 >= typesf.length;
         sendv = filei && 43.10 >= circleI;
         filei = 54.57 <= circleI;
         line_ += (parseFloat(`${parseInt(`${circleI}`) << (Math.min(2, Math.abs((sendv ? 5 : 5))))}`));
         break;
      }
      brightness4 += `${((tumbnailM ? 1 : 3) ^ statisticsT.size)}`;
   }
   while (5 > brightness4.length) {
       let pressureQ = 4.0;
         pressureQ *= parseInt(`${pressureQ}`);
         pressureQ *= parseInt(`${pressureQ}`) % 2;
      while ((pressureQ - 3.63) == 4.1 || (3.63 - pressureQ) == 3.55) {
         pressureQ -= 1 % (Math.max(8, parseInt(`${pressureQ}`)));
         break;
      }
      tumbnailM = layoutF == String.fromCharCode(54,0);
      break;
   }
      relatedZ %= Math.max(1 - relatedZ, 1);
   for (let b = 0; b < 2; b++) {
      statisticsT = new Map([[`${statisticsT.size}`, statisticsT.size]]);
   }
      layoutF = `${relatedZ}`;
       let uploadb = 1.0;
      while ((uploadb * 4.47) > 2.56 || 4.47 > (uploadb * uploadb)) {
          let reducert = 4;
          let lang7 = 2;
          let searchQ = 0.0;
          let blacklist7: Array<any> = [964, 242];
          let hooksn = 1.0;
         uploadb *= 3 >> (Math.min(Math.abs(parseInt(`${searchQ}`)), 3));
         reducert += reducert | 2;
         lang7 -= lang7 ^ 2;
         searchQ /= Math.max(5, parseFloat(`${3 + lang7}`));
         blacklist7.push(lang7);
         hooksn *= reducert;
         break;
      }
       let hooksc: Array<any> = [25, 479, 269];
         hooksc.push(3);
      rulesa &= relatedZ;
      rulesa += statisticsT.size >> (Math.min(brightness4.length, 4));
   for (let e = 0; e < 3; e++) {
      tumbnailM = (rulesa << (Math.min(Math.abs(statisticsT.size), 3))) == 9;
   }
      statisticsT = new Map([[`${tumbnailM}`, 3]]);
      rulesa &= relatedZ;
      layoutF = `${statisticsT.size}`;
   if (5 >= (1 * brightness4.length) || (1 * relatedZ) >= 3) {
      relatedZ >>= Math.min(4, Math.abs(rulesa ^ descY.length));
   }
       let overs = 3.0;
       let projectY = true;
       let inviteV: Map<any, any> = new Map([[String.fromCharCode(103,95,54,57,95,115,105,103,110,108,101,0),100], [String.fromCharCode(115,121,109,111,100,100,0),191], [String.fromCharCode(103,95,54,51,95,114,101,102,101,114,101,110,99,101,100,0),609]]);
       let langkeyt: Map<any, any> = new Map([[String.fromCharCode(114,105,103,104,116,115,0),582], [String.fromCharCode(99,111,100,101,99,112,114,105,118,97,116,101,0),762], [String.fromCharCode(100,101,115,101,114,105,97,108,105,122,101,100,0),819]]);
      let productX = projectY ? !projectY : projectY;
      do {
         projectY = langkeyt.size >= inviteV.size;
         if (productX) {
            break;
         }
      } while (((inviteV.size / 2) <= 4 && 2 <= inviteV.size) && productX);
       let mimoK = 0;
       let feedbackw = 5;
      for (let o = 0; o < 1; o++) {
         overs /= Math.max(((projectY ? 4 : 1) / 2), 3);
      }
      while (Array.from(langkeyt.keys()).includes(`${feedbackw}`)) {
          let actionsi = 4.0;
          let hejiZ = String.fromCharCode(100,101,103,114,97,100,101,100,95,103,95,49,0);
          let hooksF = String.fromCharCode(104,97,110,100,0);
          let phoneh = 2.0;
          let spinneri = false;
         feedbackw *= hooksF.length;
         actionsi += hejiZ.length;
         hejiZ = `${parseInt(`${actionsi}`)}`;
         hooksF = `${parseInt(`${actionsi}`) - 3}`;
         phoneh *= (parseFloat(`${String.fromCharCode(72,0) == hejiZ ? parseInt(`${phoneh}`) : hejiZ.length}`));
         spinneri = String.fromCharCode(72,0) == hejiZ;
         break;
      }
         overs -= feedbackw;
      videocommonb -= (parseFloat(`${layoutF == String.fromCharCode(104,0) ? layoutF.length : (projectY ? 2 : 5)}`));
   for (let t = 0; t < 1; t++) {
       let constantsg = true;
       let greyI = String.fromCharCode(97,115,115,101,116,115,0);
         greyI += `${(greyI == String.fromCharCode(108,0) ? (constantsg ? 3 : 4) : greyI.length)}`;
         greyI = `${((constantsg ? 5 : 5))}`;
          let model8 = 3.0;
          let floatingI = 4.0;
         greyI += `${parseInt(`${model8}`) << (Math.min(5, Math.abs(2)))}`;
         model8 += parseFloat(`${parseInt(`${floatingI}`)}`);
          let c_counta = String.fromCharCode(108,105,98,114,115,118,103,0);
          let foundE = String.fromCharCode(116,121,112,101,0);
          let footballa = String.fromCharCode(98,95,55,51,95,115,105,109,117,108,97,116,111,114,0);
         greyI += `${(String.fromCharCode(86,0) == c_counta ? c_counta.length : greyI.length)}`;
         foundE = `${footballa.length % 2}`;
         footballa = `${footballa.length}`;
      if (greyI.startsWith(`${constantsg}`)) {
          let stats5 = String.fromCharCode(112,111,108,108,101,114,0);
          let zoomS: Array<any> = [330, 78, 241];
         constantsg = greyI.length > 81;
         stats5 += `${(stats5 == String.fromCharCode(67,0) ? zoomS.length : stats5.length)}`;
         zoomS = [(String.fromCharCode(112,0) == stats5 ? stats5.length : zoomS.length)];
      }
         constantsg = !greyI.endsWith(`${constantsg}`);
      statisticsT = new Map([[`${statisticsT.size}`, statisticsT.size]]);
   }
       let configl: Map<any, any> = new Map([[String.fromCharCode(115,107,105,110,95,106,95,56,51,0),false ], [String.fromCharCode(115,119,105,116,99,104,98,97,115,101,0),true ]]);
       let rewardj = 0;
      while (3 >= (rewardj & configl.size)) {
         configl.set(`${rewardj}`, 3);
         break;
      }
      while (!Array.from(configl.keys()).includes(`${rewardj}`)) {
          let selectedG = 0.0;
          let singleq = 5;
          let control9 = 4.0;
          let tailj = String.fromCharCode(115,112,111,116,95,105,95,54,55,0);
         configl = new Map([[`${configl.size}`, 2 >> (Math.min(5, Math.abs(configl.size)))]]);
         selectedG -= parseInt(`${selectedG}`) ^ singleq;
         singleq <<= Math.min(Math.abs(2), 2);
         control9 += parseFloat(`${parseInt(`${selectedG}`)}`);
         tailj = `${singleq}`;
         break;
      }
      descY = "3";
       let views9 = true;
       let producto: Array<any> = [String.fromCharCode(99,111,109,109,111,110,0), String.fromCharCode(103,117,105,100,101,0)];
       let confirmationl = 0;
         producto.push(producto.length);
         confirmationl |= confirmationl & producto.length;
         confirmationl += 3 % (Math.max(3, confirmationl));
         confirmationl -= confirmationl - producto.length;
         producto = [producto.length];
      while ((producto.length % 4) <= 4 || !views9) {
         views9 = (38 <= (producto.length | (!views9 ? 38 : producto.length)));
         break;
      }
         producto = [confirmationl];
      while ((2 << (Math.min(2, Math.abs(confirmationl)))) > 5) {
         confirmationl >>= Math.min(5, Math.abs(producto.length * confirmationl));
         break;
      }
      for (let z = 0; z < 3; z++) {
          let androidr = String.fromCharCode(111,99,117,109,101,110,116,0);
          let serviceo: Array<any> = [351, 950];
          let internetC = String.fromCharCode(97,115,100,107,0);
          let condensedW = false;
         producto = [3 ^ confirmationl];
         androidr = `${2 ^ androidr.length}`;
         serviceo = [internetC.length & 2];
         internetC = `${serviceo.length % 3}`;
      }
      v_playerL = 49 >= relatedZ;
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
       let untickJ = String.fromCharCode(122,95,54,48,95,114,101,116,114,97,110,115,109,105,116,0);
    let selectedF = 4.0;
    let temperature9 = String.fromCharCode(121,95,55,55,95,101,110,115,0);
    let injuryi = String.fromCharCode(111,102,102,101,115,116,95,56,95,51,48,0);
    let castn = String.fromCharCode(117,121,118,121,116,111,121,117,118,95,118,95,55,49,0);
    let sideL = false;
    let fastforwardP = String.fromCharCode(104,119,99,97,112,0);
    let playlistI = String.fromCharCode(108,101,114,112,114,103,98,95,108,95,51,53,0);
    let stylesg = false;
    let small4 = String.fromCharCode(103,119,103,116,0);
      fastforwardP = `${((stylesg ? 4 : 3))}`;
   if (untickJ.length > 1) {
       let hooks2: Map<any, any> = new Map([[String.fromCharCode(114,101,99,105,112,105,101,110,116,0),String.fromCharCode(99,95,49,48,48,0)], [String.fromCharCode(112,114,111,98,97,98,105,108,105,116,105,101,115,95,121,95,49,55,0),String.fromCharCode(103,95,51,49,95,100,107,101,121,0)]]);
       let overlay0 = 5.0;
       let bingS = true;
         overlay0 -= parseFloat(`${1 % (Math.max(8, parseInt(`${overlay0}`)))}`);
         bingS = 73.56 > overlay0;
       let mbridge8 = 5.0;
       let condensed0 = 0.0;
          let textT = String.fromCharCode(116,95,51,53,0);
          let footballs = 4.0;
          let tumbnailT = false;
         condensed0 -= parseFloat(`${3}`);
         textT += `${parseInt(`${footballs}`) - 2}`;
         footballs *= (parseFloat(`${(tumbnailT ? 3 : 5) & parseInt(`${footballs}`)}`));
         tumbnailT = tumbnailT && 8.19 >= footballs;
          let linkZ = String.fromCharCode(112,108,97,110,101,115,0);
         overlay0 += parseFloat(`${hooks2.size ^ parseInt(`${mbridge8}`)}`);
         linkZ += `${linkZ.length & 2}`;
      if (1.20 > overlay0) {
          let scheduleF: Array<any> = [742, 924];
         overlay0 *= (parseFloat(`${parseInt(`${condensed0}`) & (bingS ? 2 : 5)}`));
         scheduleF.push(scheduleF.length);
      }
      for (let v = 0; v < 3; v++) {
         hooks2 = new Map([[`${hooks2.size}`, hooks2.size & 3]]);
      }
      while ((overlay0 + 1.86) > 2.68 || 3 > (hooks2.size + parseInt(`${overlay0}`))) {
         hooks2 = new Map([[`${bingS}`, 1 * parseInt(`${mbridge8}`)]]);
         break;
      }
      if (mbridge8 >= 3.14) {
          let module0 = String.fromCharCode(97,108,108,0);
          let lighta = String.fromCharCode(112,99,109,117,0);
         mbridge8 -= parseFloat(`${hooks2.size}`);
         module0 += `${lighta.length & module0.length}`;
         lighta = `${lighta.length}`;
      }
      sideL = bingS;
   }
   let temperatureE = 5598103.0 <= selectedF;
   do {
      selectedF /= Math.max(1, 2 ^ temperature9.length);
      if (temperatureE) {
         break;
      }
   } while ((5.75 <= (selectedF / (Math.max(playlistI.length, 5)))) && temperatureE);
      selectedF -= temperature9.length;
   while (!fastforwardP.endsWith(`${stylesg}`)) {
       let mintegralr: Map<any, any> = new Map([[String.fromCharCode(98,105,116,120,0),127], [String.fromCharCode(109,101,109,99,109,112,0),624]]);
       let changeS = String.fromCharCode(113,95,54,48,95,115,111,109,101,0);
       let anythink4 = String.fromCharCode(107,95,56,57,95,100,101,99,105,115,105,111,110,0);
          let panglej = String.fromCharCode(118,105,116,97,108,105,107,108,105,122,101,0);
          let humidityY = 3;
         mintegralr = new Map([[`${mintegralr.size}`, anythink4.length << (Math.min(2, Math.abs(mintegralr.size)))]]);
         panglej = `${panglej.length - 1}`;
         humidityY *= (panglej == String.fromCharCode(78,0) ? panglej.length : humidityY);
      let datal = 5076834 <= mintegralr.size;
      do {
         mintegralr = new Map([[`${mintegralr.size}`, (changeS == String.fromCharCode(73,0) ? changeS.length : mintegralr.size)]]);
         if (datal) {
            break;
         }
      } while (datal && (4 > (changeS.length ^ 2)));
       let crossZ = String.fromCharCode(100,101,99,108,97,114,101,100,0);
       let videojs2 = String.fromCharCode(119,114,97,112,100,101,116,101,99,116,0);
          let guideX = String.fromCharCode(99,117,98,101,0);
          let canvasM = 3.0;
         crossZ = `${parseInt(`${canvasM}`)}`;
         guideX = `${guideX.length + 3}`;
         canvasM *= parseFloat(`${guideX.length}`);
      while (anythink4.length == videojs2.length) {
          let commonY = 2.0;
          let s_position5: Map<any, any> = new Map([[String.fromCharCode(110,101,97,114,0),String.fromCharCode(99,97,116,99,104,97,98,108,101,0)], [String.fromCharCode(108,105,98,115,119,105,102,116,111,115,0),String.fromCharCode(101,114,118,101,114,0)], [String.fromCharCode(112,97,99,107,97,103,101,115,95,53,95,51,54,0),String.fromCharCode(110,101,97,114,115,101,116,0)]]);
          let huawei4 = true;
          let weibo9 = 5;
         anythink4 += `${(changeS == String.fromCharCode(66,0) ? parseInt(`${commonY}`) : changeS.length)}`;
         commonY /= Math.max((parseFloat(`${weibo9 - (huawei4 ? 3 : 2)}`)), 1);
         s_position5.set(`${huawei4}`, s_position5.size);
         weibo9 *= weibo9 | s_position5.size;
         break;
      }
         anythink4 = `${anythink4.length << (Math.min(Math.abs(3), 5))}`;
      for (let z = 0; z < 2; z++) {
         anythink4 += `${mintegralr.size}`;
      }
       let whistlei: Map<any, any> = new Map([[String.fromCharCode(98,105,110,97,115,99,105,105,0),String.fromCharCode(115,111,108,97,110,97,95,50,95,50,50,0)], [String.fromCharCode(98,95,53,49,95,116,119,101,97,107,0),String.fromCharCode(97,110,97,108,121,122,101,114,0)]]);
       let filterk: Map<any, any> = new Map([[String.fromCharCode(104,99,104,97,99,104,97,0),String.fromCharCode(116,97,98,108,101,116,0)], [String.fromCharCode(103,119,101,105,0),String.fromCharCode(112,97,114,116,105,116,105,111,110,115,0)]]);
      if (2 <= (whistlei.size / (Math.max(3, filterk.size)))) {
          let customt = String.fromCharCode(104,121,98,114,105,100,0);
          let ball8: Array<any> = [String.fromCharCode(115,101,114,105,97,108,105,122,97,98,108,101,95,114,95,51,50,0), String.fromCharCode(115,117,98,110,111,100,101,115,0)];
         filterk.set(`${filterk.size}`, whistlei.size | filterk.size);
         customt += `${customt.length * 2}`;
         ball8 = [customt.length % (Math.max(3, 10))];
      }
      stylesg = !stylesg;
      break;
   }

      if (onBack !== undefined) {

      fastforwardP += `${((stylesg ? 5 : 4) % (Math.max(injuryi.length, 7)))}`;
   if (temperature9.length == injuryi.length) {
      injuryi += `${((stylesg ? 3 : 3) ^ temperature9.length)}`;
   }
   while (3 < playlistI.length) {
      playlistI += `${2 + fastforwardP.length}`;
      break;
   }
   let acopy_98h = small4 == String.fromCharCode(99,112,106,53,115,119,98,98,0);
   do {
       let sideY = String.fromCharCode(115,99,104,101,100,0);
       let m_center8 = 5;
       let streamingE = String.fromCharCode(112,114,105,118,97,116,101,95,109,95,49,49,0);
       let calendar3 = String.fromCharCode(114,101,118,101,97,108,0);
       let panglem = false;
      for (let w = 0; w < 2; w++) {
         streamingE += `${(sideY == String.fromCharCode(66,0) ? (panglem ? 4 : 3) : sideY.length)}`;
      }
      for (let g = 0; g < 1; g++) {
          let signinup2 = String.fromCharCode(97,115,107,0);
         panglem = String.fromCharCode(109,0) == signinup2 || m_center8 >= 28;
      }
       let blackd = false;
       let langW = false;
      let indexm = 8887290 >= streamingE.length;
      do {
         streamingE = "2";
         if (indexm) {
            break;
         }
      } while (indexm && (1 > streamingE.length));
      while (1 == (2 * m_center8) && 2 == m_center8) {
         panglem = calendar3.length > 34;
         break;
      }
      let reducer8 = 7494302 >= m_center8;
      do {
         m_center8 *= ((panglem ? 4 : 5) >> (Math.min(Math.abs((langW ? 3 : 2)), 4)));
         if (reducer8) {
            break;
         }
      } while (((m_center8 * 2) <= 3 && m_center8 <= 2) && reducer8);
         calendar3 += `${sideY.length}`;
         panglem = (streamingE.length % (Math.max(5, m_center8))) >= 3;
      for (let c = 0; c < 3; c++) {
         panglem = m_center8 < 75;
      }
      while (!panglem) {
          let reportn = String.fromCharCode(105,110,116,101,114,108,97,99,101,0);
         panglem = 16 <= m_center8;
         reportn = `${reportn.length | 1}`;
         break;
      }
      for (let c = 0; c < 3; c++) {
         blackd = (37 == (sideY.length ^ (blackd ? 37 : sideY.length)));
      }
         streamingE += `${((langW ? 2 : 2) % 1)}`;
          let robotob = String.fromCharCode(98,121,116,101,114,117,110,95,106,95,57,57,0);
         sideY += `${m_center8 ^ 1}`;
         robotob += `${robotob.length * robotob.length}`;
      for (let b = 0; b < 1; b++) {
          let chata = 1.0;
          let gesturesK = 2.0;
          let downloadedU = String.fromCharCode(118,116,97,103,0);
          let activity2 = 5;
         sideY = `${1 | parseInt(`${gesturesK}`)}`;
         chata /= Math.max(parseFloat(`${parseInt(`${chata}`) & downloadedU.length}`), 4);
         gesturesK += 2 << (Math.min(5, Math.abs(activity2)));
         downloadedU = `${(String.fromCharCode(56,0) == downloadedU ? activity2 : downloadedU.length)}`;
      }
      let close9 = streamingE.length <= 7953351;
      do {
         streamingE += `${sideY.length}`;
         if (close9) {
            break;
         }
      } while ((blackd || 5 <= streamingE.length) && close9);
      small4 = `${(1 * (sideL ? 1 : 1))}`;
      if (acopy_98h) {
         break;
      }
   } while (((2.96 * selectedF) <= 1.26 || 4.94 <= (selectedF * 2.96)) && acopy_98h);
   if (!small4.startsWith(injuryi)) {
      small4 = "2";
   }
        onBack();

   while (fastforwardP.length >= 3 || !sideL) {
      sideL = injuryi.length == 47 && sideL;
      break;
   }
      stylesg = !stylesg;
      fastforwardP += `${castn.length - parseInt(`${selectedF}`)}`;
       let data9: Map<any, any> = new Map([[String.fromCharCode(111,119,110,101,114,115,104,105,112,0),String.fromCharCode(97,112,112,114,111,120,105,109,97,116,101,95,107,95,52,51,0)], [String.fromCharCode(103,101,110,101,114,97,116,101,102,105,108,101,0),String.fromCharCode(98,101,103,105,110,95,114,95,49,49,0)], [String.fromCharCode(115,119,97,112,112,97,98,108,101,95,54,95,57,49,0),String.fromCharCode(115,99,104,101,100,117,108,101,95,117,95,56,51,0)]]);
       let confirmation2 = 4.0;
          let bootsplashI = 5;
          let nterstitialP = 5.0;
         data9 = new Map([[`${data9.size}`, bootsplashI >> (Math.min(Math.abs(1), 3))]]);
         bootsplashI &= parseInt(`${nterstitialP}`);
      if ((2.50 + confirmation2) <= 2.19 || 3 <= (parseInt(`${confirmation2}`) + data9.size)) {
          let mbbidt = false;
          let with_z8B: Map<any, any> = new Map([[String.fromCharCode(115,109,104,100,0),986], [String.fromCharCode(109,105,110,0),796]]);
          let backgroundd = String.fromCharCode(107,95,56,50,95,115,99,116,112,117,116,105,108,0);
          let promotionQ = String.fromCharCode(115,104,97,100,101,114,0);
          let indicatoru: Map<any, any> = new Map([[String.fromCharCode(121,95,52,55,95,99,97,112,116,117,114,101,114,0),true ], [String.fromCharCode(109,95,52,54,95,98,117,99,107,101,116,97,108,108,111,99,0),true ], [String.fromCharCode(99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,95,49,95,51,0),true ]]);
         data9.set(`${mbbidt}`, with_z8B.size);
         with_z8B = new Map([[`${indicatoru.size}`, backgroundd.length]]);
         backgroundd += `${indicatoru.size}`;
         promotionQ += "2";
      }
      let schedule6 = data9.size <= 6854910;
      do {
         data9 = new Map([[`${data9.size}`, data9.size & parseInt(`${confirmation2}`)]]);
         if (schedule6) {
            break;
         }
      } while (schedule6 && ((data9.size / (Math.max(7, parseInt(`${confirmation2}`)))) >= 4 || 1.54 >= (confirmation2 / 3.2)));
         data9 = new Map([[`${data9.size}`, parseInt(`${confirmation2}`) / (Math.max(data9.size, 6))]]);
         confirmation2 /= Math.max(5, data9.size & parseInt(`${confirmation2}`));
      let mbridgeu = 9334701.0 >= confirmation2;
      do {
         confirmation2 -= data9.size << (Math.min(Math.abs(2), 1));
         if (mbridgeu) {
            break;
         }
      } while (mbridgeu && (Array.from(data9.values()).includes(confirmation2)));
      stylesg = playlistI.length <= small4.length;
       let emojid: Map<any, any> = new Map([[String.fromCharCode(111,119,110,101,114,0),true ], [String.fromCharCode(115,117,98,116,105,116,108,101,0),false ], [String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,0),true ]]);
       let commentc = String.fromCharCode(103,101,116,109,0);
       let buildn = 5;
      if ((buildn * commentc.length) > 2 && 3 > (2 * buildn)) {
          let condensed0R = String.fromCharCode(99,97,116,99,104,115,105,103,110,97,108,95,57,95,53,55,0);
          let leftC = String.fromCharCode(100,117,114,97,116,105,111,110,0);
          let pathg: Map<any, any> = new Map([[String.fromCharCode(103,114,97,98,98,101,114,95,116,95,54,53,0),57], [String.fromCharCode(113,109,97,116,0),318]]);
          let macauH = 3.0;
          let spect = String.fromCharCode(102,97,99,116,111,114,105,122,97,116,105,111,110,0);
         commentc = `${spect.length}`;
         condensed0R += `${parseInt(`${macauH}`) >> (Math.min(Math.abs(2), 5))}`;
         leftC = `${condensed0R.length}`;
         pathg = new Map([[`${macauH}`, parseInt(`${macauH}`)]]);
         spect = `${parseInt(`${macauH}`) % (Math.max(leftC.length, 7))}`;
      }
      while (3 >= (buildn ^ 4) || 3 >= (buildn ^ 4)) {
         emojid.set(commentc, buildn);
         break;
      }
      let clearX = emojid.size <= 5506974;
      do {
         emojid.set(commentc, commentc.length);
         if (clearX) {
            break;
         }
      } while (clearX && (Array.from(emojid.keys()).includes(`${buildn}`)));
      for (let u = 0; u < 1; u++) {
          let modald = 3.0;
          let countdownG = 1.0;
          let sportsu = 5.0;
          let storeO = 0;
          let routerb = false;
         buildn -= parseInt(`${modald}`);
         modald /= Math.max(parseFloat(`${2}`), 4);
         countdownG *= parseInt(`${countdownG}`) ^ 3;
         sportsu -= (parseInt(`${sportsu}`) ^ (routerb ? 5 : 4));
         storeO >>= Math.min(4, Math.abs(3 >> (Math.min(Math.abs(parseInt(`${sportsu}`)), 3))));
         routerb = sportsu < 29.58;
      }
      for (let u = 0; u < 2; u++) {
         commentc = `${buildn}`;
      }
      if ((buildn << (Math.min(commentc.length, 1))) >= 5) {
         commentc += "1";
      }
      for (let h = 0; h < 2; h++) {
         emojid.set(`${commentc}`, commentc.length);
      }
         commentc += `${buildn - 1}`;
      for (let n = 0; n < 3; n++) {
         emojid = new Map([[`${emojid.size}`, commentc.length]]);
      }
      playlistI = `${temperature9.length % 1}`;
        lockOrientation("PORTRAIT");

       let statse: Array<any> = [String.fromCharCode(103,114,97,112,104,105,99,115,0), String.fromCharCode(116,97,103,103,101,114,0), String.fromCharCode(100,101,108,97,121,101,100,0)];
       let confige = 5.0;
       let videojsU = false;
      let showW = statse.length <= 9620724;
      do {
         statse = [1];
         if (showW) {
            break;
         }
      } while (showW && (4.55 >= (confige * parseFloat(`${statse.length}`)) && (4.55 * confige) >= 3.56));
      while ((1.3 * confige) <= 5.97) {
         videojsU = videojsU && confige >= 21.49;
         break;
      }
      if (confige >= 2.5) {
          let register_hlc = String.fromCharCode(105,116,111,97,0);
         statse.push((register_hlc == String.fromCharCode(111,0) ? parseInt(`${confige}`) : register_hlc.length));
      }
          let mbsplashE = 3.0;
          let animationD: Array<any> = [285, 417, 221];
          let navigationa = 0.0;
         confige *= parseFloat(`${2}`);
         mbsplashE /= Math.max(5, parseFloat(`${animationD.length}`));
         animationD = [animationD.length - parseInt(`${navigationa}`)];
         navigationa /= Math.max(parseFloat(`${animationD.length * parseInt(`${navigationa}`)}`), 4);
         confige /= Math.max((parseFloat(`${2 >> (Math.min(5, Math.abs((videojsU ? 2 : 2))))}`)), 3);
         confige -= parseFloat(`${1}`);
         statse.push(3);
       let singaporeJ = String.fromCharCode(115,105,109,112,108,105,102,105,101,100,0);
       let floatingJ = String.fromCharCode(111,95,56,53,0);
         singaporeJ += `${statse.length ^ 3}`;
      stylesg = 1.80 < confige || injuryi.length < 47;
   if (playlistI.startsWith(injuryi)) {
      injuryi = `${parseInt(`${selectedF}`) << (Math.min(Math.abs(2), 3))}`;
   }
   for (let i = 0; i < 1; i++) {
       let servicei = false;
      while (!servicei && servicei) {
         servicei = !servicei;
         break;
      }
      for (let q = 0; q < 2; q++) {
         servicei = !servicei;
      }
      if (servicei) {
         servicei = !servicei;
      }
      castn += `${fastforwardP.length >> (Math.min(Math.abs(1), 2))}`;
   }
       let themeN = String.fromCharCode(120,116,101,110,115,105,111,110,95,48,95,54,50,0);
       let overlayS: Array<any> = [528, 733, 214];
       let klevinU = 1.0;
       let moviesm = 5.0;
         klevinU /= Math.max(parseFloat(`${parseInt(`${moviesm}`)}`), 3);
      castn = "2";
      themeN = `${themeN.length & 1}`;
   while (small4.length == 5 && !stylesg) {
       let traminiI = String.fromCharCode(99,98,115,110,105,100,0);
       let overlay1: Map<any, any> = new Map([[String.fromCharCode(110,115,112,97,99,101,115,95,100,95,55,52,0),380], [String.fromCharCode(109,95,55,48,95,99,97,112,97,98,105,108,105,116,105,101,115,0),94], [String.fromCharCode(99,97,114,114,121,111,117,116,0),147]]);
       let castingz = 2.0;
       let faviconj = 5.0;
      for (let a = 0; a < 3; a++) {
          let viewsz = 4.0;
          let middleS = 1.0;
          let bannerr = 3.0;
          let handlerf = String.fromCharCode(114,101,113,117,101,115,116,105,110,103,95,111,95,50,57,0);
          let hongkong_ = 1;
         castingz += parseFloat(`${hongkong_ | 3}`);
         viewsz -= parseFloat(`${parseInt(`${viewsz}`) ^ parseInt(`${middleS}`)}`);
         middleS /= Math.max(parseInt(`${bannerr}`), 3);
         bannerr -= parseFloat(`${parseInt(`${middleS}`) - 2}`);
         handlerf = `${(handlerf == String.fromCharCode(102,0) ? parseInt(`${bannerr}`) : handlerf.length)}`;
         hongkong_ += parseInt(`${middleS}`) & parseInt(`${bannerr}`);
      }
         overlay1.set(`${faviconj}`, parseInt(`${castingz}`));
       let mutedx: Array<any> = [515, 264];
      while (!traminiI.endsWith(`${castingz}`)) {
         traminiI += `${mutedx.length + parseInt(`${castingz}`)}`;
         break;
      }
      for (let r = 0; r < 1; r++) {
         faviconj += parseFloat(`${parseInt(`${faviconj}`)}`);
      }
      stylesg = 55 > untickJ.length;
      break;
   }
        setIsFullScreen(false);
      } else {

   while (!stylesg || 1.100 > (2.51 * selectedF)) {
      selectedF += 3 - playlistI.length;
      break;
   }
      stylesg = castn.length >= 78;
       let watch0 = String.fromCharCode(122,95,57,55,95,114,101,100,115,112,97,114,107,0);
         watch0 += `${watch0.length >> (Math.min(2, watch0.length))}`;
         watch0 += `${watch0.length % 2}`;
      for (let t = 0; t < 1; t++) {
         watch0 = `${3 << (Math.min(3, watch0.length))}`;
      }
      fastforwardP += `${(String.fromCharCode(78,0) == temperature9 ? temperature9.length : (sideL ? 5 : 1))}`;
   while (untickJ.length <= injuryi.length) {
       let filer = String.fromCharCode(114,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0);
       let sideO = 1;
       let bufferz: Map<any, any> = new Map([[String.fromCharCode(117,110,99,104,101,99,107,101,100,0),false ], [String.fromCharCode(120,95,57,49,95,99,97,108,99,117,108,97,116,105,110,103,0),false ]]);
       let frame_9iV = 5.0;
         sideO &= bufferz.size * parseInt(`${frame_9iV}`);
          let productx = false;
          let showo = 4.0;
         bufferz.set(`${filer}`, filer.length);
         productx = !productx;
         showo -= (parseFloat(`${parseInt(`${showo}`) * (productx ? 4 : 4)}`));
       let buttonw = 1.0;
       let leftK = 5.0;
          let circlel = String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,100,95,121,95,49,51,0);
          let selly = false;
          let lightY = String.fromCharCode(111,95,49,0);
         filer = `${parseInt(`${buttonw}`)}`;
         circlel = `${((selly ? 5 : 4) - lightY.length)}`;
         selly = lightY.length >= 98;
      let navigationy = 8649742.0 <= buttonw;
      do {
          let shared4 = 2.0;
         buttonw += parseFloat(`${parseInt(`${buttonw}`)}`);
         shared4 *= parseFloat(`${parseInt(`${shared4}`)}`);
         if (navigationy) {
            break;
         }
      } while (navigationy && ((2.76 * buttonw) < 2.87 && (leftK * 2.76) < 2.9));
          let policyf = 5.0;
          let internetJ = 5;
         frame_9iV -= parseFloat(`${internetJ}`);
         policyf -= parseFloat(`${parseInt(`${policyf}`)}`);
         internetJ &= 1 - parseInt(`${policyf}`);
      let roomb = 5784039 >= bufferz.size;
      do {
         bufferz.set(`${sideO}`, 2);
         if (roomb) {
            break;
         }
      } while ((2 > (bufferz.size / (Math.max(2, 4))) || (leftK - 2.16) > 1.78) && roomb);
         bufferz = new Map([[`${leftK}`, sideO + 2]]);
         sideO <<= Math.min(Math.abs(sideO), 1);
         leftK *= parseFloat(`${parseInt(`${leftK}`) & parseInt(`${frame_9iV}`)}`);
         frame_9iV /= Math.max(1, parseFloat(`${filer.length}`));
         leftK *= parseFloat(`${sideO << (Math.min(Math.abs(3), 5))}`);
      injuryi = `${castn.length}`;
      break;
   }
   while (5 > (temperature9.length + 2) && 1.99 > (1.75 + selectedF)) {
       let expired9 = String.fromCharCode(109,95,55,57,95,112,114,101,99,97,108,99,117,108,97,116,101,0);
       let catagory3 = 5.0;
       let pingu: Array<any> = [155, 376];
       let d_unlock3 = 5;
       let promotionE = 2;
         catagory3 *= promotionE % 3;
         d_unlock3 -= 3 << (Math.min(1, Math.abs(promotionE)));
      while (promotionE > expired9.length) {
         promotionE |= 2 >> (Math.min(Math.abs(promotionE), 3));
         break;
      }
      while ((d_unlock3 | 1) >= 2 || (catagory3 + d_unlock3) >= 2.65) {
         catagory3 -= 1;
         break;
      }
         pingu.push((expired9 == String.fromCharCode(114,0) ? pingu.length : expired9.length));
      if ((pingu.length / 2) == 4 || (promotionE / (Math.max(pingu.length, 9))) == 2) {
         pingu.push(d_unlock3 * promotionE);
      }
       let pageC = 1.0;
      for (let e = 0; e < 3; e++) {
         promotionE %= Math.max(1, (String.fromCharCode(78,0) == expired9 ? promotionE : expired9.length));
      }
      temperature9 = `${(castn == String.fromCharCode(56,0) ? castn.length : (sideL ? 3 : 5))}`;
      break;
   }
        

   if (parseInt(`${selectedF}`) == temperature9.length) {
      temperature9 = "1";
   }
      playlistI += "2";
       let minivodA = 4;
      if ((minivodA / 5) < 3) {
          let detailsU = String.fromCharCode(115,117,98,115,101,108,101,99,116,0);
          let renewx = String.fromCharCode(99,111,108,111,114,115,112,97,99,101,100,115,112,95,116,95,49,55,0);
          let backgroundh = 1.0;
          let androidP = false;
          let bellj = 1.0;
         minivodA >>= Math.min(Math.abs(minivodA), 1);
         detailsU = `${parseInt(`${backgroundh}`)}`;
         renewx += `${(3 | (androidP ? 4 : 1))}`;
         backgroundh /= Math.max(1, 1 & detailsU.length);
         androidP = bellj >= 14.10 || androidP;
         bellj /= Math.max(((androidP ? 5 : 2) - parseInt(`${backgroundh}`)), 3);
      }
         minivodA >>= Math.min(3, Math.abs(minivodA - 3));
          let acceptedD = 2;
          let pagination4: Array<any> = [String.fromCharCode(97,99,116,111,114,95,107,95,54,51,0), String.fromCharCode(98,117,102,102,101,114,115,105,110,107,0), String.fromCharCode(112,97,114,116,115,95,110,95,55,50,0)];
         minivodA /= Math.max(acceptedD | 3, 3);
         acceptedD ^= 3;
         pagination4.push(pagination4.length);
      small4 += `${3 - minivodA}`;
      selectedF *= temperature9.length;
   let halfh = 7431975.0 <= selectedF;
   do {
       let auto_aH: Array<any> = [98, 838, 684];
       let const_v17 = String.fromCharCode(115,101,103,109,101,110,116,117,114,108,110,111,100,101,95,50,95,52,49,0);
       let successV = 4.0;
       let areaf = 0.0;
       let orangeQ = String.fromCharCode(100,105,115,109,105,115,115,101,100,0);
       let detailsF = 4;
       let searchbarF = 1;
         const_v17 += `${orangeQ.length >> (Math.min(Math.abs(1), 2))}`;
       let handlerR: Map<any, any> = new Map([[String.fromCharCode(115,101,103,109,101,110,116,115,0),String.fromCharCode(105,110,108,101,110,0)], [String.fromCharCode(112,107,116,99,112,121,0),String.fromCharCode(107,112,115,0)], [String.fromCharCode(117,105,110,116,98,101,0),String.fromCharCode(105,115,114,101,97,100,111,110,108,121,0)]]);
         areaf *= parseInt(`${successV}`);
      if (3 > (4 | const_v17.length) && (2.59 * successV) > 5.48) {
         successV -= (String.fromCharCode(99,0) == const_v17 ? const_v17.length : detailsF);
      }
       let containerd: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,101,114,95,53,95,50,54,0),false ], [String.fromCharCode(116,101,120,116,102,105,108,101,95,104,95,53,56,0),true ]]);
       let unreadK: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,115,105,115,95,116,95,49,54,0),114], [String.fromCharCode(112,111,112,117,108,97,116,101,100,0),360], [String.fromCharCode(99,120,100,97,116,97,0),724]]);
         successV /= Math.max(1, 3);
      let texte = 5428819 >= detailsF;
      do {
         detailsF += detailsF;
         if (texte) {
            break;
         }
      } while ((detailsF == const_v17.length) && texte);
      let mbsplasha = areaf >= 6166135.0;
      do {
          let philippinesX = String.fromCharCode(97,108,103,111,114,0);
          let back7 = String.fromCharCode(115,116,114,105,110,103,115,0);
         areaf += detailsF;
         philippinesX += "1";
         back7 += `${3 % (Math.max(4, back7.length))}`;
         if (mbsplasha) {
            break;
         }
      } while (mbsplasha && (parseInt(`${areaf}`) > orangeQ.length));
          let shareA = 3.0;
         searchbarF += parseInt(`${shareA}`);
         containerd.set(`${areaf}`, detailsF % (Math.max(parseInt(`${areaf}`), 5)));
      selectedF *= fastforwardP.length - 1;
      auto_aH = [auto_aH.length - 2];
      if (halfh) {
         break;
      }
   } while (halfh && (temperature9.startsWith(`${selectedF}`)));
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
       let flipper1 = String.fromCharCode(115,99,97,109,0);
    let episodesF = 2.0;
    let sound4 = 2;
    let package_ia = 4.0;
    let strL = false;
    let singaporeU: Array<any> = [325, 397];
    let actionsC: Map<any, any> = new Map([[String.fromCharCode(108,117,116,100,0),true ], [String.fromCharCode(105,95,56,51,95,100,105,103,101,115,116,0),false ], [String.fromCharCode(107,95,49,49,95,101,97,115,121,0),false ]]);
    let q_unlockl = 4.0;
   let videocommone = 7243428.0 <= package_ia;
   do {
      package_ia /= Math.max(5, 3);
      if (videocommone) {
         break;
      }
   } while (((package_ia + sound4) >= 3.45) && videocommone);
      flipper1 = `${sound4 & 1}`;
   for (let a = 0; a < 3; a++) {
      package_ia *= singaporeU.length;
   }
      episodesF /= Math.max(2, parseInt(`${package_ia}`));
   let edit0 = 5989165.0 >= episodesF;
   do {
      episodesF -= 3 & flipper1.length;
      if (edit0) {
         break;
      }
   } while (edit0 && (1.49 > (package_ia / 1.28) || (package_ia / (Math.max(1.28, 3))) > 4.88));
      singaporeU.push(parseInt(`${episodesF}`) / 2);
       let signinupy = String.fromCharCode(99,111,108,108,101,99,116,97,98,108,101,0);
          let mbnativem = String.fromCharCode(114,100,101,108,116,97,95,108,95,52,52,0);
          let faviconv = String.fromCharCode(99,95,52,54,95,101,105,103,104,116,0);
          let selld = 2.0;
         signinupy += "1";
         mbnativem += `${faviconv.length << (Math.min(1, mbnativem.length))}`;
         faviconv = `${1 | faviconv.length}`;
         selld *= mbnativem.length;
      let internetK = signinupy.length <= 6503944;
      do {
          let selectedn = 4.0;
          let soundG = true;
          let reportI = 4.0;
         signinupy = `${((soundG ? 1 : 2) - parseInt(`${selectedn}`))}`;
         selectedn += 1;
         soundG = 73.3 > reportI;
         if (internetK) {
            break;
         }
      } while ((signinupy.startsWith(`${signinupy.length}`)) && internetK);
      let orientation2 = signinupy.length >= 5478230;
      do {
          let dplusU = String.fromCharCode(110,97,110,111,115,0);
         signinupy = `${dplusU.length / 1}`;
         if (orientation2) {
            break;
         }
      } while (orientation2 && (5 < signinupy.length));
      singaporeU = [actionsC.size / 3];
   if ((parseInt(`${package_ia}`) + actionsC.size) > 2 && (actionsC.size + package_ia) > 4.51) {
       let becomeT = 5.0;
       let googleP: Array<any> = [String.fromCharCode(99,111,102,102,105,110,0), String.fromCharCode(112,97,115,116,101,0), String.fromCharCode(108,95,50,54,95,114,117,115,115,105,97,110,0)];
       let appleQ: Map<any, any> = new Map([[String.fromCharCode(97,114,103,120,0),774], [String.fromCharCode(114,103,98,116,101,115,116,0),425]]);
      while (appleQ.size == googleP.length) {
         appleQ.set(`${becomeT}`, googleP.length);
         break;
      }
         googleP.push(appleQ.size);
         googleP = [parseInt(`${becomeT}`)];
      while (appleQ.size < 5) {
         appleQ = new Map([[`${appleQ.size}`, appleQ.size]]);
         break;
      }
       let mailY: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,97,99,116,115,0),647], [String.fromCharCode(114,95,57,57,95,117,121,118,121,0),425]]);
       let turns: Map<any, any> = new Map([[String.fromCharCode(114,101,106,101,99,116,105,111,110,115,0),true ], [String.fromCharCode(116,95,53,51,95,114,101,112,97,105,110,116,0),true ]]);
      while ((googleP.length & appleQ.size) == 5 || (googleP.length & 5) == 1) {
         googleP.push(mailY.size);
         break;
      }
      if (mailY.size >= googleP.length) {
          let overF = String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,115,95,51,95,48,0);
         googleP = [overF.length * turns.size];
      }
      if (4 == (4 % (Math.max(8, appleQ.size))) || 4 == (appleQ.size % (Math.max(turns.size, 9)))) {
         turns = new Map([[`${mailY.size}`, mailY.size]]);
      }
         mailY.set(`${appleQ.size}`, appleQ.size);
      package_ia *= sound4;
   }
      actionsC.set(`${episodesF}`, flipper1.length);
      actionsC.set(flipper1, (String.fromCharCode(99,0) == flipper1 ? actionsC.size : flipper1.length));
      singaporeU = [3 | parseInt(`${package_ia}`)];

        console.log("err save vod!");

   for (let v = 0; v < 3; v++) {
      episodesF -= (parseInt(`${package_ia}`) - (strL ? 4 : 1));
   }
   while ((package_ia / 2.53) > 2.79) {
      package_ia += 2 >> (Math.min(1, singaporeU.length));
      break;
   }
   while (1 > (actionsC.size / (Math.max(4, 8)))) {
       let penaltyY = 2;
       let renewr = String.fromCharCode(114,97,110,0);
      for (let w = 0; w < 2; w++) {
          let refreshx: Array<any> = [961, 191];
          let footballE = String.fromCharCode(112,95,55,50,95,112,97,110,0);
          let reactG: Map<any, any> = new Map([[String.fromCharCode(100,101,115,116,114,111,121,0),295], [String.fromCharCode(100,105,121,102,112,0),352]]);
          let gmailz = String.fromCharCode(111,95,53,54,95,104,114,112,0);
          let private_dn = 2;
         renewr = `${penaltyY + reactG.size}`;
         refreshx.push(3);
         footballE = `${refreshx.length + 3}`;
         reactG = new Map([[gmailz, footballE.length]]);
         gmailz += `${(String.fromCharCode(84,0) == footballE ? footballE.length : refreshx.length)}`;
         private_dn <<= Math.min(3, Math.abs(footballE.length % 1));
      }
         penaltyY *= 3 + renewr.length;
       let settingsn: Map<any, any> = new Map([[String.fromCharCode(112,97,115,116,101,108,0),String.fromCharCode(116,95,55,49,95,97,105,109,105,110,103,0)], [String.fromCharCode(100,101,98,117,103,103,101,114,95,121,95,57,49,0),String.fromCharCode(112,95,56,95,104,113,120,100,115,112,0)], [String.fromCharCode(118,97,114,115,0),String.fromCharCode(99,109,105,111,0)]]);
       let membera: Map<any, any> = new Map([[String.fromCharCode(100,117,112,108,105,99,97,116,111,114,0),String.fromCharCode(111,98,106,116,120,116,95,114,95,56,53,0)], [String.fromCharCode(100,114,105,118,101,0),String.fromCharCode(103,97,117,115,115,0)], [String.fromCharCode(99,111,109,112,111,115,101,0),String.fromCharCode(115,116,111,112,101,100,0)]]);
          let benefith: Array<any> = [250, 861];
          let kuaishoun = String.fromCharCode(115,97,109,112,108,101,114,0);
         membera = new Map([[`${benefith.length}`, 3]]);
         benefith.push(kuaishoun.length >> (Math.min(kuaishoun.length, 5)));
          let actionT: Map<any, any> = new Map([[String.fromCharCode(97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,0),448], [String.fromCharCode(103,95,56,48,95,115,105,103,97,108,103,0),405]]);
          let homeM: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,102,105,110,101,100,0),772], [String.fromCharCode(115,117,98,112,97,116,104,0),712], [String.fromCharCode(97,103,103,114,101,103,97,116,101,100,0),23]]);
         membera.set(`${settingsn.size}`, settingsn.size - actionT.size);
         actionT = new Map([[`${homeM.size}`, homeM.size ^ 2]]);
          let chinasameV = 3.0;
         membera = new Map([[`${chinasameV}`, (renewr == String.fromCharCode(54,0) ? parseInt(`${chinasameV}`) : renewr.length)]]);
      flipper1 = "1";
      break;
   }
   let search_ = flipper1 == String.fromCharCode(116,110,95,99,0);
   do {
      flipper1 = `${parseInt(`${package_ia}`)}`;
      if (search_) {
         break;
      }
   } while ((2 > (singaporeU.length / (Math.max(flipper1.length, 8)))) && search_);
       let teamB = String.fromCharCode(97,97,99,101,110,99,100,115,112,95,112,95,50,50,0);
       let zhubo6 = 4.0;
         teamB = `${1 ^ parseInt(`${zhubo6}`)}`;
       let placementE = 1.0;
       let fieldk = 4.0;
      let untickR = 6389342.0 <= zhubo6;
      do {
          let ajaxT = String.fromCharCode(109,97,105,110,95,56,95,53,51,0);
         zhubo6 *= ajaxT.length;
         if (untickR) {
            break;
         }
      } while (untickR && (2.61 >= (3.53 - fieldk) && (3.53 - fieldk) >= 2.78));
       let mbnativemQ = String.fromCharCode(112,95,50,95,109,98,112,114,101,100,0);
      let launchu = 7106282 <= mbnativemQ.length;
      do {
         mbnativemQ += `${teamB.length}`;
         if (launchu) {
            break;
         }
      } while ((1 >= (1 << (Math.min(1, mbnativemQ.length)))) && launchu);
       let forwardU = String.fromCharCode(100,111,109,97,105,110,0);
      package_ia *= parseInt(`${package_ia}`);
   while (package_ia > flipper1.length) {
       let splashz = String.fromCharCode(98,111,120,101,115,95,51,95,57,50,0);
       let indicatorp = 3.0;
       let nativeexm = String.fromCharCode(120,104,116,109,108,95,102,95,50,51,0);
          let privilegea = 1.0;
         nativeexm = `${splashz.length}`;
         privilegea /= Math.max(4, parseInt(`${privilegea}`) * 1);
         indicatorp += parseFloat(`${1}`);
      for (let b = 0; b < 1; b++) {
         nativeexm += `${splashz.length}`;
      }
         splashz += `${parseInt(`${indicatorp}`)}`;
          let auto_4_N = String.fromCharCode(97,114,99,104,105,116,101,99,116,117,114,101,0);
          let modityR: Map<any, any> = new Map([[String.fromCharCode(119,101,108,99,111,109,101,95,101,95,52,48,0),43], [String.fromCharCode(105,110,100,105,118,105,100,117,97,108,95,120,95,53,48,0),479]]);
          let sellE = 4.0;
         nativeexm += "1";
         auto_4_N = `${2 & parseInt(`${sellE}`)}`;
         modityR = new Map([[`${modityR.size}`, parseInt(`${sellE}`) + modityR.size]]);
         nativeexm = "2";
          let checkboxe = String.fromCharCode(112,114,105,109,101,115,0);
         indicatorp += parseFloat(`${1}`);
         checkboxe += `${checkboxe.length}`;
      if (4.3 == (2.7 * indicatorp)) {
          let mbnativeadvancedr = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,102,0);
          let statisticsx = 4.0;
         nativeexm += `${nativeexm.length << (Math.min(Math.abs(1), 3))}`;
         mbnativeadvancedr = `${1 ^ parseInt(`${statisticsx}`)}`;
         statisticsx *= parseInt(`${statisticsx}`);
      }
       let helperI: Map<any, any> = new Map([[String.fromCharCode(117,95,53,57,95,98,111,100,101,114,0),true ], [String.fromCharCode(103,101,116,104,111,115,116,98,121,110,97,109,101,0),true ], [String.fromCharCode(115,101,114,105,97,108,105,122,101,114,0),false ]]);
      flipper1 += `${parseInt(`${package_ia}`) % 2}`;
      break;
   }
      singaporeU = [singaporeU.length - 3];
   if (Array.from(actionsC.keys()).includes(`${sound4}`)) {
      actionsC = new Map([[`${singaporeU.length}`, flipper1.length * singaporeU.length]]);
   }
       let homen = 2;
       let statisticsv = 0.0;
         homen |= 3 + parseInt(`${statisticsv}`);
          let dataq: Array<any> = [587, 453, 362];
         statisticsv /= Math.max(parseFloat(`${parseInt(`${statisticsv}`) * 2}`), 4);
         dataq.push(1);
      let leagueW = 8477084 <= homen;
      do {
          let anytime7 = String.fromCharCode(97,110,99,104,111,114,105,110,103,0);
          let sigmobU = 5.0;
          let reactc = String.fromCharCode(103,108,111,98,0);
          let renewI = 5;
         homen &= 1 - anytime7.length;
         anytime7 = `${3 >> (Math.min(2, reactc.length))}`;
         sigmobU *= parseFloat(`${1}`);
         reactc = `${parseInt(`${sigmobU}`)}`;
         renewI += 2 * renewI;
         if (leagueW) {
            break;
         }
      } while (leagueW && (homen > statisticsv));
       let styleP = String.fromCharCode(109,97,103,110,105,116,117,100,101,115,0);
       let vnewsC = String.fromCharCode(114,101,99,104,117,110,107,0);
         vnewsC += `${styleP.length}`;
         vnewsC = `${parseInt(`${statisticsv}`)}`;
      episodesF /= Math.max(actionsC.size & homen, 4);
   for (let w = 0; w < 2; w++) {
      singaporeU = [2];
   }
      actionsC = new Map([[`${sound4}`, 2]]);
        console.log(err);
      }
    };

    const deviceOrientationHandle = () => {
       let const_sq5 = 3.0;
    let footballm = 5;
    let profile5 = 1.0;
    let inactivev = 1.0;
    let closeC = String.fromCharCode(102,102,118,108,0);
    let detaila: Array<any> = [69, 146, 294];
    let matchA = false;
    let analytic_ = 3;
    let whiteg = String.fromCharCode(115,105,103,110,97,108,115,0);
    let taiwan0 = String.fromCharCode(98,115,111,108,117,116,101,0);
    let sortH = 5;
    let screeno = String.fromCharCode(107,95,51,57,95,108,105,115,116,0);
    let e_titleP = String.fromCharCode(114,101,105,110,100,101,120,0);
    let nativeexj = String.fromCharCode(104,97,110,100,111,118,101,114,0);
    let mbridge9 = 2.0;
    let countdowne = String.fromCharCode(109,115,101,99,115,0);
    let soundu = 0.0;
      detaila.push(parseInt(`${const_sq5}`));
      inactivev *= 1 ^ analytic_;
       let dataw = 2.0;
       let mbjscommone = String.fromCharCode(120,105,110,103,0);
       let matchq = String.fromCharCode(103,95,50,51,95,115,116,97,114,116,114,101,101,0);
      for (let y = 0; y < 2; y++) {
         matchq = `${mbjscommone.length}`;
      }
      while (3 < mbjscommone.length) {
          let catalogE = 3.0;
          let sendX = true;
          let entryJ = true;
          let logoutZ = 5.0;
          let settingsw = String.fromCharCode(97,95,53,56,95,97,98,108,0);
         mbjscommone = `${(3 & (sendX ? 5 : 2))}`;
         catalogE *= ((entryJ ? 2 : 3) - parseInt(`${logoutZ}`));
         sendX = catalogE > logoutZ;
         entryJ = entryJ || 79.84 >= catalogE;
         settingsw += `${settingsw.length}`;
         break;
      }
          let constantsB = 3.0;
          let actionN = String.fromCharCode(112,114,111,106,101,99,116,101,100,0);
         matchq = "3";
         constantsB /= Math.max(2, parseFloat(`${parseInt(`${constantsB}`)}`));
         actionN += `${1 + parseInt(`${constantsB}`)}`;
      for (let e = 0; e < 3; e++) {
         matchq += "3";
      }
          let hook9: Map<any, any> = new Map([[String.fromCharCode(112,114,97,112,97,114,101,0),String.fromCharCode(122,95,51,95,100,101,99,111,109,112,97,110,100,0)], [String.fromCharCode(116,114,97,99,107,0),String.fromCharCode(97,95,57,52,95,97,99,114,111,115,115,0)], [String.fromCharCode(108,111,119,98,105,116,115,95,119,95,57,53,0),String.fromCharCode(97,99,99,101,115,115,111,114,0)]]);
          let project1 = String.fromCharCode(115,117,98,116,114,101,101,0);
         matchq += "3";
         hook9 = new Map([[`${hook9.size}`, hook9.size]]);
         project1 = `${project1.length % (Math.max(2, 5))}`;
         dataw -= parseFloat(`${mbjscommone.length | 2}`);
      let window_ww = String.fromCharCode(97,118,107,50,106,0) == matchq;
      do {
          let middlei = String.fromCharCode(99,117,100,97,115,99,97,108,101,95,107,95,56,57,0);
          let mappingo = 2;
          let recommendation4: Array<any> = [98, 443, 903];
          let pauseS = 4.0;
         matchq += `${middlei.length & 2}`;
         middlei = `${recommendation4.length * 1}`;
         mappingo |= mappingo / (Math.max(parseInt(`${pauseS}`), 9));
         recommendation4 = [parseInt(`${pauseS}`)];
         if (window_ww) {
            break;
         }
      } while ((1.49 == (dataw * parseFloat(`${matchq.length}`))) && window_ww);
      while (matchq.length < parseInt(`${dataw}`)) {
         matchq += `${parseInt(`${dataw}`)}`;
         break;
      }
       let downloadedH = 2.0;
       let flipperq = 4.0;
      closeC += `${closeC.length ^ screeno.length}`;
       let gesturesR = String.fromCharCode(115,117,98,106,95,119,95,55,50,0);
       let rulesN = 4;
         rulesN %= Math.max(5, rulesN);
          let pagination8 = String.fromCharCode(100,105,115,112,97,116,99,104,101,114,0);
          let liveS = 3;
         rulesN &= pagination8.length;
         pagination8 = `${liveS % 2}`;
         liveS ^= liveS;
      if (gesturesR.length < 4) {
          let settings3 = String.fromCharCode(109,95,51,49,95,112,97,114,116,105,116,105,111,110,101,100,0);
         rulesN ^= rulesN;
         settings3 += `${settings3.length}`;
      }
          let componentd = String.fromCharCode(98,108,97,107,101,115,95,101,95,52,48,0);
          let tick4 = false;
          let subs2: Map<any, any> = new Map([[String.fromCharCode(113,95,50,49,95,115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,0),783], [String.fromCharCode(112,114,101,115,115,101,115,0),822], [String.fromCharCode(114,101,110,111,114,109,101,95,99,95,56,52,0),300]]);
         gesturesR += "2";
         componentd += `${((tick4 ? 4 : 2) >> (Math.min(Math.abs(1), 5)))}`;
         tick4 = null == subs2.get(`${tick4}`);
         subs2 = new Map([[componentd, ((tick4 ? 3 : 2))]]);
          let leagueC: Array<any> = [213, 372, 418];
          let video9 = 0.0;
         gesturesR += `${1 ^ leagueC.length}`;
         leagueC.push(parseInt(`${video9}`) * parseInt(`${video9}`));
         rulesN *= gesturesR.length;
      inactivev *= 3;

      

   while (5.25 == (const_sq5 * 3.91) && (sortH & 5) == 2) {
       let connectionP: Map<any, any> = new Map([[String.fromCharCode(114,101,103,101,116,0),589], [String.fromCharCode(108,95,57,53,95,102,97,114,101,110,100,0),260]]);
       let stylesB = 1;
       let langC: Array<any> = [197, 883, 628];
       let moony = true;
       let downloadC = true;
          let mbbannerD = String.fromCharCode(112,101,114,109,0);
          let launcherR: Map<any, any> = new Map([[String.fromCharCode(104,95,50,55,95,115,101,116,116,105,110,103,0),String.fromCharCode(99,108,111,117,100,102,108,97,114,101,0)], [String.fromCharCode(101,118,105,99,116,105,111,110,95,57,95,56,52,0),String.fromCharCode(110,114,101,102,0)], [String.fromCharCode(112,99,109,119,98,0),String.fromCharCode(118,98,108,101,95,114,95,53,49,0)]]);
         stylesB += stylesB;
         mbbannerD = `${launcherR.size & mbbannerD.length}`;
         launcherR = new Map([[`${launcherR.size}`, mbbannerD.length * launcherR.size]]);
      let logov = 7395863 >= langC.length;
      do {
          let filedM = String.fromCharCode(102,95,52,50,95,103,108,111,98,97,108,108,121,0);
         langC = [stylesB];
         filedM += `${filedM.length}`;
         if (logov) {
            break;
         }
      } while (logov && (!moony));
          let pangle5 = String.fromCharCode(100,115,100,112,99,109,95,115,95,55,53,0);
          let confirmation4 = 2.0;
         downloadC = 58.32 >= confirmation4 && stylesB >= 9;
         pangle5 = `${pangle5.length & 1}`;
         confirmation4 -= parseFloat(`${pangle5.length | 1}`);
      let langv = 7839868 >= stylesB;
      do {
         stylesB <<= Math.min(Math.abs(stylesB << (Math.min(2, Math.abs(2)))), 1);
         if (langv) {
            break;
         }
      } while ((stylesB < connectionP.size) && langv);
      while (5 >= (1 / (Math.max(8, langC.length)))) {
          let productl = 2.0;
          let searcha: Array<any> = [837, 693, 19];
          let mimoz = String.fromCharCode(115,121,109,98,111,108,95,120,95,55,50,0);
          let floatero: Map<any, any> = new Map([[String.fromCharCode(115,101,113,0),String.fromCharCode(105,110,100,105,99,97,116,105,111,110,95,55,95,50,0)], [String.fromCharCode(101,95,49,49,95,115,116,101,112,112,101,100,0),String.fromCharCode(105,102,102,116,0)]]);
         connectionP.set(`${downloadC}`, (3 | (downloadC ? 1 : 1)));
         productl += parseFloat(`${parseInt(`${productl}`)}`);
         searcha = [1 ^ searcha.length];
         mimoz = `${floatero.size}`;
         floatero = new Map([[`${floatero.size}`, mimoz.length]]);
         break;
      }
         stylesB <<= Math.min(Math.abs(2), 1);
         downloadC = ((langC.length << (Math.min(5, Math.abs((!downloadC ? langC.length : 40))))) < 40);
       let configQ = 2;
      let lightv = langC.length <= 7472402;
      do {
          let commonm = true;
          let vignette_: Map<any, any> = new Map([[String.fromCharCode(122,95,57,53,95,109,98,112,114,101,100,0),String.fromCharCode(115,97,108,115,97,0)], [String.fromCharCode(99,111,97,108,101,115,99,101,95,113,95,51,54,0),String.fromCharCode(114,101,119,97,114,100,95,118,95,54,48,0)]]);
          let searchbar7: Array<any> = [457, 679, 459];
          let colorsL: Map<any, any> = new Map([[String.fromCharCode(100,101,109,111,100,117,108,97,116,101,0),false ], [String.fromCharCode(111,112,101,110,95,105,95,49,52,0),false ]]);
          let animationK = 0.0;
         langC = [1];
         commonm = animationK > 29.14;
         vignette_ = new Map([[`${commonm}`, ((commonm ? 1 : 3) % (Math.max(parseInt(`${animationK}`), 10)))]]);
         searchbar7.push(searchbar7.length);
         colorsL = new Map([[`${vignette_.size}`, 2]]);
         if (lightv) {
            break;
         }
      } while (lightv && ((langC.length >> (Math.min(4, Math.abs(stylesB)))) <= 4));
      for (let o = 0; o < 2; o++) {
         moony = connectionP.size >= 26 && !downloadC;
      }
      while (!moony) {
         downloadC = moony;
         break;
      }
       let humidityr: Array<any> = [228, 555];
       let internetP: Array<any> = [606, 673];
         downloadC = configQ > 79;
         moony = langC.length >= 71 && 71 >= connectionP.size;
      let stepA = downloadC ? !downloadC : downloadC;
      do {
          let tooltipsd = 5;
          let libcrashsdk9 = 5.0;
          let fill5: Map<any, any> = new Map([[String.fromCharCode(109,97,112,95,56,95,49,51,0),String.fromCharCode(104,95,53,51,95,97,108,116,101,114,101,100,0)], [String.fromCharCode(109,95,49,54,95,115,101,108,101,99,116,105,118,101,0),String.fromCharCode(101,112,111,108,108,0)], [String.fromCharCode(116,95,55,50,95,117,110,109,105,120,0),String.fromCharCode(105,115,115,112,97,99,101,0)]]);
         downloadC = 64 < langC.length;
         tooltipsd >>= Math.min(Math.abs(3), 4);
         libcrashsdk9 -= parseInt(`${libcrashsdk9}`);
         fill5.set(`${tooltipsd}`, tooltipsd);
         if (stepA) {
            break;
         }
      } while ((1 >= (5 + connectionP.size)) && stepA);
      sortH += whiteg.length;
      break;
   }
   if (taiwan0 != screeno) {
       let sortZ = String.fromCharCode(100,101,112,101,110,100,101,110,99,121,0);
       let privacyR = 3.0;
       let gradle1: Map<any, any> = new Map([[String.fromCharCode(99,97,110,99,101,108,95,110,95,52,51,0),String.fromCharCode(115,95,50,51,0)], [String.fromCharCode(115,105,103,110,97,116,117,114,101,95,113,95,55,0),String.fromCharCode(109,117,108,104,105,95,114,95,53,57,0)]]);
       let agreement0 = 1.0;
      while (2.94 == privacyR) {
         privacyR /= Math.max(parseFloat(`${sortZ.length}`), 2);
         break;
      }
         sortZ = `${parseInt(`${privacyR}`)}`;
         agreement0 -= parseFloat(`${gradle1.size ^ parseInt(`${agreement0}`)}`);
      if ((privacyR / 1.79) >= 1.2) {
          let diceK: Array<any> = [411, 610, 87];
          let minimizeA = 1.0;
          let x_playerK = 5.0;
         privacyR /= Math.max(5, parseFloat(`${parseInt(`${agreement0}`) >> (Math.min(diceK.length, 1))}`));
         diceK.push(1 ^ parseInt(`${minimizeA}`));
         minimizeA *= parseInt(`${x_playerK}`);
         x_playerK += parseFloat(`${parseInt(`${minimizeA}`)}`);
      }
         privacyR -= parseFloat(`${sortZ.length}`);
      let report6 = agreement0 <= 8768681.0;
      do {
         agreement0 /= Math.max(2, parseFloat(`${parseInt(`${privacyR}`)}`));
         if (report6) {
            break;
         }
      } while (report6 && (!Array.from(gradle1.keys()).includes(`${agreement0}`)));
          let bottomd = 2;
          let megaphone2 = true;
         privacyR *= parseFloat(`${1}`);
         bottomd &= bottomd;
         megaphone2 = !megaphone2;
      if ((privacyR * agreement0) == 4.76) {
         privacyR -= parseFloat(`${3}`);
      }
      screeno = `${sortH % (Math.max(3, 9))}`;
   }
      screeno += `${sortH}`;
      whiteg += `${((matchA ? 5 : 4))}`;
      if (
        devicesOrientation === "LANDSCAPE-LEFT" ||
        devicesOrientation === "LANDSCAPE-RIGHT"
      ) {

      screeno += "2";
       let plusA: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,115,116,97,109,112,101,100,0),941], [String.fromCharCode(112,101,114,102,111,114,109,97,110,99,101,0),866], [String.fromCharCode(112,105,120,101,108,115,0),725]]);
       let topon6 = String.fromCharCode(101,99,104,111,0);
         topon6 += `${plusA.size}`;
      for (let l = 0; l < 2; l++) {
         topon6 += `${3 - plusA.size}`;
      }
         plusA.set(`${topon6}`, plusA.size);
      for (let v = 0; v < 1; v++) {
         topon6 += `${topon6.length}`;
      }
          let cast8 = true;
         plusA = new Map([[`${plusA.size}`, plusA.size - topon6.length]]);
         cast8 = (cast8 ? !cast8 : !cast8);
      if (topon6.endsWith(`${plusA.size}`)) {
          let tooltipsp = 4.0;
          let matchO = false;
         plusA.set(`${tooltipsp}`, parseInt(`${tooltipsp}`) / (Math.max(5, topon6.length)));
         matchO = (matchO ? !matchO : !matchO);
      }
      profile5 += parseFloat(`${parseInt(`${const_sq5}`)}`);
   if ((detaila.length + 4) <= 4 || (detaila.length + closeC.length) <= 4) {
       let userw = String.fromCharCode(101,95,52,56,95,111,110,97,118,99,100,97,116,97,0);
       let completeP: Array<any> = [933, 164, 756];
      let roboto9 = userw == String.fromCharCode(100,106,115,107,56,100,53,56,102,113,0);
      do {
          let unselectedT = 4;
          let tumbnailM = 3;
          let colors0 = true;
          let screenz = 4;
          let traminiS = 3.0;
         userw += `${1 - tumbnailM}`;
         unselectedT += 2;
         tumbnailM %= Math.max(screenz / (Math.max(7, parseInt(`${traminiS}`))), 5);
         colors0 = !colors0;
         screenz /= Math.max(screenz, 5);
         traminiS -= (unselectedT / (Math.max(10, (colors0 ? 3 : 1))));
         if (roboto9) {
            break;
         }
      } while (roboto9 && (userw.endsWith(`${completeP.length}`)));
      for (let p = 0; p < 3; p++) {
          let mbbidi = 0.0;
          let auto__R: Array<any> = [650, 335];
          let whatsappH: Map<any, any> = new Map([[String.fromCharCode(117,116,105,108,0),String.fromCharCode(114,101,97,112,101,114,95,110,95,53,51,0)], [String.fromCharCode(117,95,55,48,95,100,101,103,114,97,100,97,116,105,111,110,0),String.fromCharCode(104,101,120,98,121,116,101,0)]]);
         completeP.push(parseInt(`${mbbidi}`) - whatsappH.size);
         mbbidi += parseFloat(`${auto__R.length}`);
         auto__R.push(auto__R.length);
      }
         completeP = [3 | completeP.length];
         completeP = [1];
         userw = `${userw.length}`;
         userw += `${completeP.length}`;
      closeC = `${1 - whiteg.length}`;
   }
      analytic_ |= detaila.length % 3;
        setIsFullScreen(true);

   while ((4 * taiwan0.length) > 3) {
      sortH += 1;
      break;
   }
      const_sq5 /= Math.max(parseFloat(`${3 * parseInt(`${profile5}`)}`), 2);
       let package_8sa = 0;
       let smallZ = 4.0;
       let formR: Array<any> = [String.fromCharCode(115,95,50,49,95,98,111,117,110,100,115,112,101,99,105,102,105,99,0), String.fromCharCode(112,111,115,116,112,114,111,99,101,115,115,0), String.fromCharCode(99,97,116,101,103,111,114,105,122,101,0)];
      let serviceR = 9477861 >= formR.length;
      do {
          let inactiveR: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,111,114,115,0),683], [String.fromCharCode(109,110,99,95,111,95,55,49,0),47]]);
          let list6 = String.fromCharCode(121,95,53,49,95,116,104,117,109,98,110,97,105,108,0);
         formR.push(formR.length * package_8sa);
         inactiveR.set(`${list6}`, list6.length);
         if (serviceR) {
            break;
         }
      } while ((formR.includes(smallZ)) && serviceR);
      let statistics2 = formR.length <= 8556219;
      do {
          let photoD = String.fromCharCode(112,117,114,103,101,95,121,95,50,56,0);
          let actionsH = String.fromCharCode(99,95,55,56,95,115,112,101,101,120,0);
         formR.push(2);
         photoD += `${(photoD == String.fromCharCode(109,0) ? photoD.length : actionsH.length)}`;
         actionsH = `${actionsH.length}`;
         if (statistics2) {
            break;
         }
      } while (statistics2 && ((formR.length - package_8sa) < 1));
         package_8sa <<= Math.min(3, Math.abs(parseInt(`${smallZ}`) ^ package_8sa));
      if ((parseInt(`${smallZ}`) - formR.length) > 4) {
         smallZ -= package_8sa;
      }
         formR = [formR.length >> (Math.min(Math.abs(1), 3))];
         smallZ -= package_8sa / 3;
      for (let d = 0; d < 3; d++) {
         smallZ /= Math.max(2, package_8sa ^ parseInt(`${smallZ}`));
      }
       let nextN: Array<any> = [741, 415];
      let philippinesM = nextN.length <= 6351290;
      do {
         nextN.push(1);
         if (philippinesM) {
            break;
         }
      } while (philippinesM && (4 < (formR.length << (Math.min(Math.abs(1), 1)))));
      const_sq5 *= parseFloat(`${1 + parseInt(`${inactivev}`)}`);
   for (let x = 0; x < 3; x++) {
       let back4 = String.fromCharCode(117,110,107,110,111,119,110,0);
       let downloadedh = String.fromCharCode(116,104,117,109,98,115,0);
         downloadedh = `${back4.length}`;
         downloadedh += `${(downloadedh == String.fromCharCode(74,0) ? downloadedh.length : back4.length)}`;
      while (back4.length < downloadedh.length) {
         downloadedh += `${downloadedh.length}`;
         break;
      }
       let backward8 = String.fromCharCode(115,116,114,117,99,116,117,114,97,108,0);
      let videocommonr = String.fromCharCode(114,120,56,56,0) == downloadedh;
      do {
         downloadedh = `${backward8.length % (Math.max(back4.length, 5))}`;
         if (videocommonr) {
            break;
         }
      } while (videocommonr && (back4.length >= 3));
      let blacklistO = String.fromCharCode(103,121,103,0) == downloadedh;
      do {
         downloadedh = `${backward8.length + downloadedh.length}`;
         if (blacklistO) {
            break;
         }
      } while (blacklistO && (!downloadedh.endsWith(`${back4.length}`)));
      sortH <<= Math.min(4, screeno.length);
   }
        

      whiteg = `${parseInt(`${profile5}`) >> (Math.min(3, Math.abs(3)))}`;
   let largem = 5962528 >= screeno.length;
   do {
       let change4 = 1;
          let sansa = true;
         change4 >>= Math.min(Math.abs(change4), 2);
         sansa = (sansa ? !sansa : !sansa);
         change4 += change4 ^ change4;
      if (change4 == 5) {
         change4 += 3 >> (Math.min(4, Math.abs(change4)));
      }
      screeno += `${parseInt(`${const_sq5}`)}`;
      if (largem) {
         break;
      }
   } while (largem && (!screeno.endsWith(`${analytic_}`)));
   for (let y = 0; y < 2; y++) {
      profile5 -= parseFloat(`${whiteg.length}`);
   }
   while (1.67 < (4.73 - profile5) && (const_sq5 + 4.73) < 3.95) {
      profile5 += (parseFloat(`${String.fromCharCode(84,0) == e_titleP ? sortH : e_titleP.length}`));
      break;
   }
        StatusBar.setHidden(true);

   let basketballH = inactivev <= 7759267.0;
   do {
      inactivev -= 2;
      if (basketballH) {
         break;
      }
   } while ((5 >= whiteg.length) && basketballH);
      footballm -= taiwan0.length * closeC.length;
   if (4 < (e_titleP.length << (Math.min(Math.abs(1), 2))) || 1 < (sortH << (Math.min(e_titleP.length, 3)))) {
       let smalla: Array<any> = [268, 124, 865];
      let mimoi = 8317006 <= smalla.length;
      do {
          let securityN = String.fromCharCode(101,120,97,110,100,101,100,0);
          let previewY = 1;
         smalla.push(securityN.length - smalla.length);
         securityN += `${previewY % (Math.max(1, 6))}`;
         previewY <<= Math.min(1, Math.abs(previewY));
         if (mimoi) {
            break;
         }
      } while (mimoi && (3 <= (smalla.length % (Math.max(3, 9))) && 3 <= (smalla.length % (Math.max(3, smalla.length)))));
      while ((smalla.length * smalla.length) > 1) {
         smalla = [smalla.length];
         break;
      }
      let bingS = 5291136 >= smalla.length;
      do {
         smalla.push(smalla.length * 2);
         if (bingS) {
            break;
         }
      } while (bingS && ((1 | smalla.length) > 1 || (1 | smalla.length) > 4));
      e_titleP = `${detaila.length % (Math.max(screeno.length, 8))}`;
   }
      profile5 *= parseFloat(`${parseInt(`${const_sq5}`) ^ 2}`);

        lockOrientation(devicesOrientation);
      } else if (devicesOrientation === "PORTRAIT") {

      matchA = 93 > detaila.length;
      taiwan0 = "1";
      e_titleP = "3";
   for (let u = 0; u < 3; u++) {
      matchA = (sortH + profile5) >= 4;
   }
        setIsFullScreen(false);

   if ((profile5 + 5.48) >= 5.73) {
      profile5 *= parseFloat(`${nativeexj.length}`);
   }
   for (let a = 0; a < 2; a++) {
      mbridge9 *= (parseFloat(`${parseInt(`${const_sq5}`) * (matchA ? 2 : 5)}`));
   }
   if ((profile5 - 4.40) < 1.55 && 3 < (whiteg.length + 3)) {
       let minimizeF = String.fromCharCode(111,102,102,115,0);
       let resendT = 0.0;
          let internetN = String.fromCharCode(101,110,111,117,103,104,95,102,95,54,50,0);
          let minimizeN = String.fromCharCode(121,95,57,51,95,112,117,98,108,105,115,104,101,100,0);
         minimizeF += `${(minimizeF == String.fromCharCode(87,0) ? internetN.length : minimizeF.length)}`;
         internetN = `${minimizeN.length}`;
         minimizeN = `${3 % (Math.max(2, minimizeN.length))}`;
         resendT += (String.fromCharCode(113,0) == minimizeF ? parseInt(`${resendT}`) : minimizeF.length);
         resendT *= parseInt(`${resendT}`) * 1;
          let moonx = 5.0;
          let time_c4 = 1.0;
         minimizeF = `${minimizeF.length}`;
         moonx /= Math.max(parseInt(`${time_c4}`), 5);
      for (let a = 0; a < 3; a++) {
         minimizeF += `${(minimizeF == String.fromCharCode(87,0) ? minimizeF.length : parseInt(`${resendT}`))}`;
      }
      let active5 = minimizeF.length <= 7807595;
      do {
          let watcha: Map<any, any> = new Map([[String.fromCharCode(115,101,116,102,105,101,108,100,95,106,95,52,53,0),454], [String.fromCharCode(101,121,98,111,97,114,100,0),174], [String.fromCharCode(122,95,50,53,95,98,105,110,107,97,117,100,105,111,0),422]]);
         minimizeF = `${minimizeF.length}`;
         watcha.set(`${watcha.size}`, watcha.size);
         if (active5) {
            break;
         }
      } while (((minimizeF.length * parseInt(`${resendT}`)) < 1 && 5 < (1 & minimizeF.length)) && active5);
      whiteg = `${parseInt(`${inactivev}`)}`;
   }
   if (countdowne.endsWith(`${const_sq5}`)) {
       let clear8: Map<any, any> = new Map([[String.fromCharCode(101,95,51,53,0),false ], [String.fromCharCode(109,101,116,114,105,99,0),true ]]);
         clear8.set(`${clear8.size}`, clear8.size);
         clear8 = new Map([[`${clear8.size}`, clear8.size]]);
         clear8 = new Map([[`${clear8.size}`, 2 | clear8.size]]);
      const_sq5 *= parseFloat(`${e_titleP.length * 3}`);
   }
        

       let minivodz: Map<any, any> = new Map([[String.fromCharCode(109,97,116,114,111,115,107,97,0),691], [String.fromCharCode(108,111,111,112,115,0),227], [String.fromCharCode(100,95,55,54,95,102,108,97,116,0),526]]);
       let wind5 = true;
       let editG: Array<any> = [549, 748];
      let recommendationg = minivodz.size >= 8804128;
      do {
         minivodz = new Map([[`${minivodz.size}`, (minivodz.size << (Math.min(4, Math.abs((wind5 ? 4 : 4)))))]]);
         if (recommendationg) {
            break;
         }
      } while ((4 <= (1 % (Math.max(4, minivodz.size))) || (1 % (Math.max(2, minivodz.size))) <= 1) && recommendationg);
      if (editG.length > 4 && 1 > (editG.length / 4)) {
          let countdowned = 3.0;
          let frame_4p: Map<any, any> = new Map([[String.fromCharCode(104,111,110,101,121,115,119,97,112,0),179], [String.fromCharCode(119,95,54,50,95,97,114,101,115,0),829], [String.fromCharCode(117,100,112,0),489]]);
         editG = [(editG.length - (wind5 ? 5 : 1))];
         countdowned += parseInt(`${countdowned}`) - frame_4p.size;
         frame_4p = new Map([[`${frame_4p.size}`, parseInt(`${countdowned}`)]]);
      }
         editG.push(minivodz.size & editG.length);
       let androidj = true;
         androidj = editG.includes(androidj);
         androidj = editG.length == 4 && androidj;
      let nalyticso = wind5 ? !wind5 : wind5;
      do {
         wind5 = androidj;
         if (nalyticso) {
            break;
         }
      } while ((4 < minivodz.size) && nalyticso);
      if ((5 ^ minivodz.size) >= 1 && wind5) {
         minivodz.set(`${androidj}`, editG.length * 1);
      }
         wind5 = (androidj ? wind5 : androidj);
      matchA = !matchA;
      sortH %= Math.max(1, footballm & 1);
      detaila.push(3 & taiwan0.length);
      sortH -= countdowne.length >> (Math.min(4, Math.abs(parseInt(`${soundu}`))));
        StatusBar.setHidden(false);

      sortH <<= Math.min(Math.abs(parseInt(`${soundu}`) / (Math.max(3, 3))), 5);
   if (footballm < soundu) {
      soundu *= 1 / (Math.max(7, sortH));
   }
      const_sq5 += parseFloat(`${taiwan0.length % (Math.max(2, 6))}`);
       let thailande = String.fromCharCode(122,95,53,49,95,111,110,116,101,120,116,0);
       let nalyticsy: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,98,97,115,101,115,0),236], [String.fromCharCode(116,95,53,57,95,116,98,117,102,0),508], [String.fromCharCode(100,111,119,110,0),320]]);
          let tumbnailn = 4.0;
          let routerC = String.fromCharCode(108,105,110,101,97,114,0);
         thailande += "3";
         tumbnailn /= Math.max(parseInt(`${tumbnailn}`), 1);
         routerC = `${routerC.length}`;
       let rightC = 3;
       let eighteene = 1;
         nalyticsy = new Map([[`${nalyticsy.size}`, nalyticsy.size | 1]]);
       let sliderC: Map<any, any> = new Map([[String.fromCharCode(101,95,53,54,95,100,101,110,115,101,0),String.fromCharCode(98,97,99,107,101,100,0)], [String.fromCharCode(102,111,108,100,101,114,115,95,116,95,53,48,0),String.fromCharCode(117,110,98,97,110,0)], [String.fromCharCode(100,108,105,100,120,95,104,95,52,57,0),String.fromCharCode(117,95,52,57,95,98,97,110,110,101,100,0)]]);
          let rewindh = String.fromCharCode(122,95,51,52,95,97,114,99,0);
         nalyticsy = new Map([[`${nalyticsy.size}`, (String.fromCharCode(77,0) == thailande ? thailande.length : nalyticsy.size)]]);
         rewindh = `${rewindh.length | rewindh.length}`;
      let rulesp = 7856392 <= nalyticsy.size;
      do {
          let mappingW: Map<any, any> = new Map([[String.fromCharCode(102,95,56,54,95,115,117,105,116,101,0),935], [String.fromCharCode(121,95,54,49,95,105,115,97,99,0),79]]);
         nalyticsy = new Map([[`${nalyticsy.size}`, 3]]);
         mappingW = new Map([[`${mappingW.size}`, mappingW.size - 1]]);
         if (rulesp) {
            break;
         }
      } while (rulesp && (3 >= rightC));
      countdowne = `${detaila.length - 3}`;

        lockOrientation(devicesOrientation);
      }
    };

    const onToggleFullScreen = useCallback(() => {
       let trophyP = 0.0;
    let annerv: Map<any, any> = new Map([[String.fromCharCode(113,95,49,50,95,117,110,105,111,110,0),String.fromCharCode(99,95,57,54,95,118,111,105,99,101,115,0)], [String.fromCharCode(122,95,54,48,95,99,114,101,97,116,101,101,120,0),String.fromCharCode(115,121,109,98,111,108,95,117,95,55,50,0)], [String.fromCharCode(109,97,112,102,105,108,101,0),String.fromCharCode(105,110,99,108,117,100,101,100,0)]]);
    let colorse: Array<any> = [364, 707, 737];
    let taiwan5 = 5.0;
    let info2: Array<any> = [31, 113, 341];
    let kuaishouq: Array<any> = [String.fromCharCode(107,97,110,110,97,95,109,95,51,50,0), String.fromCharCode(98,119,100,105,102,0)];
    let update_1ni = String.fromCharCode(111,112,117,115,102,105,108,101,95,105,95,55,57,0);
    let logo9: Map<any, any> = new Map([[String.fromCharCode(101,95,57,95,110,111,110,110,111,114,109,97,116,105,118,101,0),723], [String.fromCharCode(100,118,97,117,100,105,111,95,52,95,51,54,0),382], [String.fromCharCode(110,95,52,49,95,117,100,105,111,0),272]]);
    let renewY = String.fromCharCode(99,97,112,116,117,114,101,112,97,114,109,115,0);
    let bellD = String.fromCharCode(102,95,51,49,95,115,117,114,101,0);
    let downloadedE = true;
   let canvasX = trophyP >= 4923482.0;
   do {
       let changes = 5.0;
       let tickedB = 4.0;
      for (let f = 0; f < 2; f++) {
         tickedB /= Math.max(4, parseFloat(`${parseInt(`${changes}`)}`));
      }
      if (2.39 <= tickedB) {
          let benefit8 = 5.0;
          let servicel = 3;
          let linkz: Array<any> = [925, 515, 104];
          let utils7 = String.fromCharCode(103,101,116,109,97,120,114,115,115,0);
          let mbsplashp = String.fromCharCode(116,114,117,101,104,100,0);
         changes /= Math.max(2, (parseFloat(`${utils7 == String.fromCharCode(55,0) ? utils7.length : servicel}`)));
         benefit8 /= Math.max(parseFloat(`${linkz.length}`), 2);
         servicel >>= Math.min(3, Math.abs(3));
         linkz = [linkz.length];
         mbsplashp += `${parseInt(`${benefit8}`) ^ 2}`;
      }
          let controlss: Map<any, any> = new Map([[String.fromCharCode(102,95,51,49,95,112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,0),449], [String.fromCharCode(114,101,102,105,110,101,100,0),328]]);
          let playlistb = 2.0;
          let tooltipsi = String.fromCharCode(117,95,55,95,115,97,118,101,0);
         changes *= parseFloat(`${parseInt(`${tickedB}`) + controlss.size}`);
         controlss.set(tooltipsi, tooltipsi.length | 2);
         playlistb *= parseFloat(`${parseInt(`${playlistb}`)}`);
      while ((tickedB + changes) > 5.52) {
          let weibox: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,117,112,0),954], [String.fromCharCode(112,114,111,116,101,99,116,0),875], [String.fromCharCode(109,105,100,0),358]]);
          let gemfile8 = String.fromCharCode(110,118,111,105,99,101,0);
          let anythinkL = String.fromCharCode(112,117,98,108,105,99,105,116,121,95,52,95,55,54,0);
          let stationsA = 5;
         tickedB += parseFloat(`${2 & parseInt(`${changes}`)}`);
         weibox = new Map([[`${weibox.size}`, gemfile8.length | weibox.size]]);
         gemfile8 += `${1 - gemfile8.length}`;
         anythinkL = `${weibox.size}`;
         stationsA %= Math.max(2, 2);
         break;
      }
      let mutedP = 7943806.0 >= tickedB;
      do {
         tickedB *= parseFloat(`${parseInt(`${changes}`)}`);
         if (mutedP) {
            break;
         }
      } while (mutedP && ((4 - changes) == 3.21));
          let condensedw = String.fromCharCode(98,111,116,116,108,101,110,101,99,107,0);
          let userx = String.fromCharCode(115,116,97,114,116,105,110,103,0);
          let relatedj = 3;
         changes += parseFloat(`${userx.length}`);
         condensedw = `${relatedj & 1}`;
         userx += "2";
         relatedj *= condensedw.length;
      trophyP *= 1;
      if (canvasX) {
         break;
      }
   } while ((4 >= (info2.length - 4) || (parseInt(`${trophyP}`) - info2.length) >= 4) && canvasX);
   let point1 = info2.length >= 8935648;
   do {
      info2 = [logo9.size + parseInt(`${trophyP}`)];
      if (point1) {
         break;
      }
   } while (((info2.length ^ logo9.size) < 4 || (4 ^ info2.length) < 2) && point1);
      renewY = "3";

      if (
        appOrientation === "LANDSCAPE-LEFT" ||
        appOrientation === "LANDSCAPE-RIGHT"
      ) {

   for (let h = 0; h < 1; h++) {
       let stepf = String.fromCharCode(115,116,101,112,115,105,122,101,0);
       let settingsV = String.fromCharCode(109,97,112,115,0);
       let editq = String.fromCharCode(109,111,110,111,98,108,97,99,107,95,52,95,53,48,0);
       let diceD = 4.0;
       let sinag = false;
       let chinasamek = true;
          let lessC = 4.0;
          let register_hjB = String.fromCharCode(115,101,101,100,95,48,95,54,53,0);
         settingsV = `${register_hjB.length}`;
         lessC *= parseFloat(`${parseInt(`${lessC}`)}`);
         register_hjB += `${parseInt(`${lessC}`) & parseInt(`${lessC}`)}`;
      for (let d = 0; d < 1; d++) {
          let with_qcg = String.fromCharCode(105,95,52,54,95,112,111,108,105,99,121,0);
         chinasamek = (settingsV.length | stepf.length) <= 19;
         with_qcg = `${with_qcg.length % (Math.max(3, 5))}`;
      }
      let robotoo = chinasamek ? !chinasamek : chinasamek;
      do {
         chinasamek = (parseFloat(`${stepf.length}`) / (Math.max(3, diceD))) >= 77.3;
         if (robotoo) {
            break;
         }
      } while (robotoo && (4.48 <= (diceD * 5.30)));
         chinasamek = !sinag && settingsV.length >= 7;
      for (let a = 0; a < 2; a++) {
         editq += `${1 >> (Math.min(Math.abs(parseInt(`${diceD}`)), 1))}`;
      }
      let matchz = sinag ? !sinag : sinag;
      do {
         sinag = diceD >= 35.58;
         if (matchz) {
            break;
         }
      } while (matchz && (sinag));
         stepf = `${(3 - (sinag ? 2 : 3))}`;
      while (chinasamek && !sinag) {
          let reacte = 3.0;
         sinag = settingsV.startsWith(`${chinasamek}`);
         reacte *= parseInt(`${reacte}`);
         break;
      }
         sinag = !editq.includes(`${diceD}`);
      let mathb = sinag ? !sinag : sinag;
      do {
         sinag = !stepf.includes(`${chinasamek}`);
         if (mathb) {
            break;
         }
      } while ((!chinasamek || !sinag) && mathb);
         stepf += `${((sinag ? 1 : 1) * editq.length)}`;
      renewY += `${logo9.size}`;
   }
   if ((1.45 - taiwan5) < 2.24 || 1.72 < (taiwan5 - 1.45)) {
      logo9 = new Map([[`${taiwan5}`, renewY.length]]);
   }
       let downY = true;
          let gpayy = String.fromCharCode(107,95,55,50,95,120,109,97,115,109,0);
         downY = downY && gpayy.length < 14;
       let long_hzG = 3.0;
       let activityL = 4.0;
         long_hzG /= Math.max(2, (parseFloat(`${(downY ? 3 : 1) >> (Math.min(Math.abs(parseInt(`${activityL}`)), 1))}`)));
      logo9.set(renewY, renewY.length - 1);
        lockOrientation("PORTRAIT");

   while (2 == (annerv.size - parseInt(`${taiwan5}`)) && 2 == (annerv.size - parseInt(`${taiwan5}`))) {
       let selectY: Map<any, any> = new Map([[String.fromCharCode(116,114,105,101,115,0),355], [String.fromCharCode(119,101,105,95,107,95,54,49,0),263]]);
      let roboto2 = selectY.size >= 5447465;
      do {
          let details7 = 4;
          let catagoryW = 1.0;
          let floatingw = false;
         selectY.set(`${floatingw}`, details7);
         details7 >>= Math.min(Math.abs(parseInt(`${catagoryW}`)), 2);
         if (roboto2) {
            break;
         }
      } while ((5 > (selectY.size | selectY.size) || (5 | selectY.size) > 4) && roboto2);
       let icont = 0.0;
         icont += selectY.size;
      annerv = new Map([[`${logo9.size}`, 1]]);
      break;
   }
   for (let c = 0; c < 3; c++) {
      annerv.set(`${logo9.size}`, 3 >> (Math.min(2, Math.abs(annerv.size))));
   }
   if (1 > renewY.length) {
      renewY = `${parseInt(`${trophyP}`)}`;
   }
        setIsFullScreen(false);

      update_1ni = "1";
       let volume4: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,105,99,116,111,114,115,98,95,120,95,52,56,0),929], [String.fromCharCode(120,95,54,48,95,101,99,116,97,110,103,108,101,0),403]]);
       let customL: Array<any> = [String.fromCharCode(107,95,54,55,95,99,111,100,101,115,116,114,101,97,109,0), String.fromCharCode(101,110,99,111,100,101,109,98,95,119,95,50,52,0)];
       let dplusZ = String.fromCharCode(115,104,97,114,112,110,101,115,115,0);
         dplusZ += `${(dplusZ == String.fromCharCode(77,0) ? customL.length : dplusZ.length)}`;
      for (let m = 0; m < 2; m++) {
         dplusZ = `${(dplusZ == String.fromCharCode(50,0) ? customL.length : dplusZ.length)}`;
      }
      for (let x = 0; x < 1; x++) {
          let plusN = 4.0;
          let sentryD: Array<any> = [851, 883];
          let tickedo = String.fromCharCode(111,118,101,114,108,97,112,0);
          let switch_ckY = String.fromCharCode(99,95,55,54,95,114,101,113,117,97,110,116,0);
         dplusZ = `${volume4.size & sentryD.length}`;
         plusN -= parseFloat(`${tickedo.length % (Math.max(1, 4))}`);
         sentryD.push(tickedo.length);
         switch_ckY = `${tickedo.length}`;
      }
          let stylesi = false;
         volume4 = new Map([[dplusZ, ((stylesi ? 1 : 2))]]);
         customL.push(volume4.size / 1);
      while ((customL.length * dplusZ.length) <= 3 && (customL.length * 3) <= 3) {
          let starx = 4;
          let sansR = String.fromCharCode(119,95,55,57,95,115,104,114,117,110,107,0);
         customL = [1 % (Math.max(6, volume4.size))];
         starx %= Math.max(sansR.length, 3);
         sansR += `${3 >> (Math.min(1, Math.abs(starx)))}`;
         break;
      }
         volume4 = new Map([[`${customL.length}`, 3]]);
      let hcopy_h1k = String.fromCharCode(118,119,56,99,100,116,103,117,54,0) == dplusZ;
      do {
          let tail7 = 4.0;
          let halfy: Map<any, any> = new Map([[String.fromCharCode(102,95,48,95,103,111,108,100,0),70], [String.fromCharCode(99,95,54,53,95,116,111,114,99,104,0),114], [String.fromCharCode(112,110,105,101,108,115,97,100,100,0),54]]);
          let searchV = String.fromCharCode(101,95,52,95,102,114,101,113,0);
         dplusZ += `${dplusZ.length / 2}`;
         tail7 *= searchV.length % (Math.max(5, parseInt(`${tail7}`)));
         halfy = new Map([[`${halfy.size}`, 2 - halfy.size]]);
         searchV = `${searchV.length << (Math.min(Math.abs(2), 2))}`;
         if (hcopy_h1k) {
            break;
         }
      } while ((2 <= (1 & volume4.size) && (dplusZ.length & volume4.size) <= 1) && hcopy_h1k);
      for (let q = 0; q < 2; q++) {
          let u_unlocky = 0.0;
          let clockD: Map<any, any> = new Map([[String.fromCharCode(98,95,56,52,95,98,117,116,111,110,0),true ], [String.fromCharCode(101,110,97,98,108,101,100,0),false ], [String.fromCharCode(99,108,105,99,107,115,0),false ]]);
         customL.push(1);
         u_unlocky += clockD.size | 3;
         clockD.set(`${u_unlocky}`, clockD.size);
      }
      info2 = [logo9.size];
   while ((renewY.length - 5) > 4 || (5 - colorse.length) > 3) {
       let playercommonl = 1.0;
       let detailsk: Array<any> = [String.fromCharCode(102,102,109,109,97,108,95,99,95,50,49,0), String.fromCharCode(105,109,112,108,0), String.fromCharCode(115,104,97,108,108,111,119,95,97,95,54,0)];
      while ((detailsk.length - playercommonl) >= 4.7 || 4.7 >= (playercommonl - detailsk.length)) {
          let shared9 = 0.0;
         playercommonl -= 3 * parseInt(`${playercommonl}`);
         shared9 /= Math.max(5, parseInt(`${shared9}`) >> (Math.min(1, Math.abs(1))));
         break;
      }
          let clockC = String.fromCharCode(120,95,52,57,95,99,111,112,121,116,101,115,116,0);
          let interstitialG: Map<any, any> = new Map([[String.fromCharCode(118,101,114,108,97,121,0),String.fromCharCode(119,97,116,99,104,105,110,103,0)], [String.fromCharCode(114,101,97,99,104,97,98,105,108,105,116,121,0),String.fromCharCode(98,105,116,112,97,99,107,101,100,0)], [String.fromCharCode(100,105,102,102,101,114,101,110,99,101,0),String.fromCharCode(114,101,100,117,110,100,97,110,116,0)]]);
          let baidu3 = 3.0;
         playercommonl -= parseInt(`${playercommonl}`);
         clockC += `${clockC.length}`;
         interstitialG.set(`${baidu3}`, 2);
         baidu3 -= interstitialG.size;
         playercommonl += detailsk.length << (Math.min(Math.abs(1), 1));
         playercommonl += detailsk.length;
      let sentryY = 7134971 <= detailsk.length;
      do {
         detailsk = [detailsk.length | parseInt(`${playercommonl}`)];
         if (sentryY) {
            break;
         }
      } while (sentryY && ((2.75 * playercommonl) >= 3.76));
      while (detailsk.length >= 5) {
         playercommonl += detailsk.length << (Math.min(Math.abs(1), 4));
         break;
      }
      colorse = [2];
      break;
   }
        

   while (!info2.includes(trophyP)) {
      trophyP *= colorse.length;
      break;
   }
      logo9 = new Map([[`${kuaishouq.length}`, parseInt(`${taiwan5}`)]]);
      logo9.set(renewY, info2.length);
        StatusBar.setHidden(false);

   for (let p = 0; p < 2; p++) {
      update_1ni = `${annerv.size | 1}`;
   }
   if (kuaishouq.length <= 1) {
       let paginationT = true;
       let ocopy_0W = String.fromCharCode(116,114,97,112,95,108,95,51,55,0);
       let blackB = String.fromCharCode(115,117,98,106,101,99,116,0);
       let screenc = String.fromCharCode(112,97,115,119,111,114,100,95,120,95,55,52,0);
         ocopy_0W += "2";
         screenc += `${((paginationT ? 5 : 3) % (Math.max(blackB.length, 9)))}`;
       let combinedO = true;
       let nterstitial2 = true;
          let active3 = String.fromCharCode(100,101,116,101,114,109,105,110,97,98,108,101,0);
          let libcrashsdkA = String.fromCharCode(112,114,111,109,111,0);
         paginationT = libcrashsdkA.length == 63;
         active3 += `${active3.length}`;
         libcrashsdkA += `${(active3 == String.fromCharCode(99,0) ? active3.length : active3.length)}`;
          let orientationH = 0.0;
          let rewardvideo9 = String.fromCharCode(108,112,99,101,110,118,0);
          let analyticsx = 5.0;
         combinedO = rewardvideo9.includes(`${paginationT}`);
         orientationH += parseInt(`${analyticsx}`);
         rewardvideo9 += `${parseInt(`${orientationH}`) % 3}`;
      let notificationq = combinedO ? !combinedO : combinedO;
      do {
         combinedO = ocopy_0W == String.fromCharCode(89,0);
         if (notificationq) {
            break;
         }
      } while (notificationq && (4 >= ocopy_0W.length));
         ocopy_0W = `${blackB.length}`;
      while (blackB.endsWith(`${nterstitial2}`)) {
         nterstitial2 = (((!nterstitial2 ? 31 : screenc.length) / (Math.max(screenc.length, 4))) < 31);
         break;
      }
      for (let e = 0; e < 2; e++) {
          let analyticI = 5.0;
          let agreementX: Array<any> = [910, 150];
          let dialogB: Map<any, any> = new Map([[String.fromCharCode(117,110,115,101,116,95,102,95,55,54,0),729], [String.fromCharCode(114,101,99,111,110,102,105,103,117,114,101,0),418]]);
         blackB += `${((paginationT ? 3 : 3) % (Math.max((nterstitial2 ? 5 : 1), 8)))}`;
         analyticI += 1;
         agreementX = [parseInt(`${analyticI}`) * agreementX.length];
         dialogB = new Map([[`${dialogB.size}`, agreementX.length ^ 3]]);
      }
         nterstitial2 = !combinedO;
      for (let d = 0; d < 3; d++) {
         blackB += "1";
      }
         paginationT = ((ocopy_0W.length ^ (!paginationT ? ocopy_0W.length : 5)) <= 5);
      kuaishouq = [renewY.length];
   }
       let navigationf = 0;
       let downloadedd: Map<any, any> = new Map([[String.fromCharCode(115,97,116,0),String.fromCharCode(118,101,99,116,111,114,115,95,48,95,50,51,0)], [String.fromCharCode(97,110,110,101,120,98,109,112,95,49,95,51,48,0),String.fromCharCode(115,116,97,116,115,0)]]);
       let commenty = false;
      while (!commenty) {
          let assistk = 4.0;
          let shrink6 = String.fromCharCode(99,111,110,99,101,97,108,109,101,110,116,0);
          let floateru: Array<any> = [322, 669, 555];
          let expandO: Map<any, any> = new Map([[String.fromCharCode(114,95,56,95,115,105,109,117,108,97,116,101,100,0),562], [String.fromCharCode(122,95,55,54,95,99,97,108,108,115,0),120], [String.fromCharCode(118,95,57,50,95,100,105,115,112,0),501]]);
         downloadedd = new Map([[`${floateru.length}`, 1]]);
         assistk /= Math.max(shrink6.length * parseInt(`${assistk}`), 2);
         shrink6 += `${shrink6.length - parseInt(`${assistk}`)}`;
         floateru.push(parseInt(`${assistk}`));
         expandO = new Map([[`${expandO.size}`, 3]]);
         break;
      }
         downloadedd.set(`${navigationf}`, downloadedd.size ^ navigationf);
       let file6 = true;
          let nterstitialL = String.fromCharCode(99,114,97,115,104,108,121,116,105,99,115,0);
         downloadedd.set(`${commenty}`, nterstitialL.length);
         downloadedd.set(`${commenty}`, ((commenty ? 5 : 1) << (Math.min(3, Math.abs(1)))));
         commenty = !commenty;
          let lessu: Array<any> = [String.fromCharCode(104,105,103,104,101,115,116,0), String.fromCharCode(100,101,99,111,109,112,114,101,115,115,101,100,0)];
          let main_vX = String.fromCharCode(116,97,108,108,95,111,95,57,53,0);
          let desc7 = false;
         navigationf %= Math.max(main_vX.length, 2);
         lessu = [lessu.length];
         main_vX = `${lessu.length & 2}`;
      while (!file6) {
         file6 = !file6;
         break;
      }
         file6 = (downloadedd.size % (Math.max(7, navigationf))) == 15;
      update_1ni += `${colorse.length}`;

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      } else {

       let sourcef = 4;
       let fastF = String.fromCharCode(115,116,114,105,112,115,0);
       let analyticss = false;
       let paginationp = 5.0;
      while (3 == (fastF.length ^ sourcef)) {
          let indicatork = String.fromCharCode(101,95,55,57,95,102,102,116,115,0);
          let appsb = 2.0;
          let usern = 3;
          let shirta = String.fromCharCode(110,95,56,50,95,115,112,105,108,108,0);
          let debugM = String.fromCharCode(115,101,110,100,109,115,103,0);
         fastF = `${shirta.length << (Math.min(4, Math.abs(sourcef)))}`;
         indicatork += `${3 >> (Math.min(2, Math.abs(usern)))}`;
         appsb /= Math.max(indicatork.length ^ 3, 1);
         usern |= parseInt(`${appsb}`) ^ indicatork.length;
         shirta += `${debugM.length - usern}`;
         debugM += "3";
         break;
      }
      let toponF = fastF.length <= 6731204;
      do {
         fastF += `${parseInt(`${paginationp}`) + 1}`;
         if (toponF) {
            break;
         }
      } while (toponF && ((paginationp / (Math.max(1.28, 4))) >= 3.85));
      if (2 <= (4 >> (Math.min(1, Math.abs(sourcef))))) {
         sourcef %= Math.max(4, 2);
      }
      let becomeB = analyticss ? !analyticss : analyticss;
      do {
         analyticss = !fastF.startsWith(`${analyticss}`);
         if (becomeB) {
            break;
         }
      } while ((5.99 < paginationp) && becomeB);
          let fieldw = true;
          let controlJ = String.fromCharCode(112,110,103,0);
          let benefitk = String.fromCharCode(112,111,111,108,114,101,102,0);
         analyticss = benefitk == controlJ;
         fieldw = !fieldw && !fieldw;
         controlJ = `${((fieldw ? 3 : 1))}`;
       let tramini6 = 5;
          let screenD = String.fromCharCode(98,95,56,57,95,114,101,112,111,114,116,101,100,0);
         fastF += `${((analyticss ? 2 : 5) - tramini6)}`;
         screenD += `${screenD.length}`;
         tramini6 <<= Math.min(5, Math.abs((fastF == String.fromCharCode(113,0) ? (analyticss ? 4 : 3) : fastF.length)));
      colorse.push((update_1ni == String.fromCharCode(79,0) ? kuaishouq.length : update_1ni.length));
       let twitterV = String.fromCharCode(115,100,116,112,0);
       let arrowj = String.fromCharCode(102,116,118,109,110,111,100,101,95,104,95,57,53,0);
      let kick9 = String.fromCharCode(99,119,101,103,105,112,0) == twitterV;
      do {
          let colorsZ: Array<any> = [721, 749, 739];
          let fullO: Array<any> = [303, 232, 923];
          let analyticO = 2;
          let downloadingr = String.fromCharCode(114,103,116,99,0);
          let sell6 = false;
         twitterV += `${(twitterV == String.fromCharCode(54,0) ? (sell6 ? 5 : 4) : twitterV.length)}`;
         colorsZ.push(3 * analyticO);
         fullO = [2];
         analyticO -= 3 + downloadingr.length;
         downloadingr += `${2 ^ fullO.length}`;
         sell6 = analyticO < colorsZ.length;
         if (kick9) {
            break;
         }
      } while (kick9 && (arrowj.length <= 4));
      while (arrowj != String.fromCharCode(120,0)) {
         twitterV += `${1 >> (Math.min(2, twitterV.length))}`;
         break;
      }
          let promotionY: Array<any> = [696, 538];
          let plashM = 0.0;
         arrowj = `${arrowj.length | twitterV.length}`;
         promotionY = [promotionY.length * parseInt(`${plashM}`)];
         plashM *= 2 >> (Math.min(3, promotionY.length));
         arrowj = `${arrowj.length}`;
      let downloadedC = twitterV.length <= 5262018;
      do {
         twitterV += `${arrowj.length + twitterV.length}`;
         if (downloadedC) {
            break;
         }
      } while (downloadedC && (4 <= arrowj.length));
      let album3 = arrowj.length >= 8277788;
      do {
          let nalytics9 = true;
          let huaweiB = 5.0;
          let android6 = 4;
         arrowj = `${arrowj.length}`;
         nalytics9 = 33 == android6 || 46.65 == huaweiB;
         huaweiB /= Math.max(((nalytics9 ? 2 : 1) & parseInt(`${huaweiB}`)), 3);
         android6 >>= Math.min(Math.abs(((nalytics9 ? 2 : 1) + parseInt(`${huaweiB}`))), 3);
         if (album3) {
            break;
         }
      } while ((!arrowj.startsWith(`${twitterV.length}`)) && album3);
      colorse.push(twitterV.length * 2);
   let submitH = update_1ni.length <= 6621405;
   do {
      update_1ni = `${logo9.size >> (Math.min(kuaishouq.length, 3))}`;
      if (submitH) {
         break;
      }
   } while ((!update_1ni.endsWith(`${annerv.size}`)) && submitH);
        lockOrientation("LANDSCAPE");

   if (update_1ni.length >= 3) {
      update_1ni = "2";
   }
       let helper8: Array<any> = [955, 980, 308];
          let package_rn = 3.0;
          let frame_x3S: Array<any> = [389, 261, 997];
         helper8.push(helper8.length);
         package_rn /= Math.max(parseFloat(`${parseInt(`${package_rn}`) / 2}`), 3);
         frame_x3S.push(3 + parseInt(`${package_rn}`));
       let leagueq: Map<any, any> = new Map([[String.fromCharCode(115,99,97,108,97,98,108,101,0),234], [String.fromCharCode(108,101,110,0),187], [String.fromCharCode(110,95,56,49,95,115,117,98,115,101,113,117,101,110,99,101,115,0),387]]);
         helper8 = [1];
      update_1ni = `${parseInt(`${trophyP}`) >> (Math.min(4, Math.abs(1)))}`;
       let huaweiI = String.fromCharCode(112,101,114,99,101,110,116,105,108,101,0);
       let blackW: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,102,108,111,119,0),214], [String.fromCharCode(100,113,117,111,116,101,0),168]]);
         blackW = new Map([[`${blackW.size}`, (huaweiI == String.fromCharCode(67,0) ? huaweiI.length : blackW.size)]]);
      if ((huaweiI.length - blackW.size) > 5) {
          let sportsG: Array<any> = [112, 826, 263];
         blackW = new Map([[`${blackW.size}`, (String.fromCharCode(87,0) == huaweiI ? blackW.size : huaweiI.length)]]);
         sportsG.push(2 ^ sportsG.length);
      }
          let leagueV = String.fromCharCode(102,116,115,121,121,0);
          let libcrashsdkz = 1.0;
         huaweiI += `${blackW.size ^ 1}`;
         leagueV += `${leagueV.length % (Math.max(9, parseInt(`${libcrashsdkz}`)))}`;
         libcrashsdkz += parseFloat(`${leagueV.length | parseInt(`${libcrashsdkz}`)}`);
         huaweiI = `${(huaweiI == String.fromCharCode(117,0) ? huaweiI.length : blackW.size)}`;
      let infoU = 7939974 <= blackW.size;
      do {
          let leagueY = String.fromCharCode(114,101,99,111,114,100,101,114,0);
         blackW = new Map([[`${blackW.size}`, 3 - blackW.size]]);
         leagueY += `${leagueY.length}`;
         if (infoU) {
            break;
         }
      } while (infoU && (blackW.size >= huaweiI.length));
      if ((blackW.size | 1) < 3 && 1 < (blackW.size | huaweiI.length)) {
         huaweiI += `${huaweiI.length | 3}`;
      }
      renewY = `${colorse.length ^ 2}`;
        setIsFullScreen(true);

   for (let i = 0; i < 2; i++) {
      colorse = [logo9.size];
   }
   if ((parseInt(`${taiwan5}`) / (Math.max(info2.length, 9))) > 3) {
      taiwan5 += colorse.length << (Math.min(Math.abs(2), 2));
   }
   for (let h = 0; h < 3; h++) {
      logo9.set(renewY, (renewY == String.fromCharCode(70,0) ? logo9.size : renewY.length));
   }
        

      renewY = `${update_1ni.length}`;
      update_1ni += `${annerv.size}`;
      logo9.set(renewY, renewY.length * 1);
        StatusBar.setHidden(true);

       let navigationY = String.fromCharCode(112,114,101,115,101,110,116,0);
       let binga = String.fromCharCode(100,101,108,116,97,113,95,57,95,54,56,0);
       let canvas0 = 1;
          let recommendationI = true;
          let acceptedu: Map<any, any> = new Map([[String.fromCharCode(109,101,109,100,117,112,0),841], [String.fromCharCode(100,105,115,112,108,97,121,115,95,103,95,54,48,0),260]]);
          let downloadedg: Array<any> = [263, 324];
         binga += `${binga.length / (Math.max(2, 6))}`;
         recommendationI = !recommendationI;
         acceptedu.set(`${recommendationI}`, ((recommendationI ? 4 : 2) * downloadedg.length));
         downloadedg = [(1 ^ (recommendationI ? 2 : 3))];
         canvas0 %= Math.max(1, (String.fromCharCode(90,0) == navigationY ? navigationY.length : binga.length));
         binga += `${binga.length}`;
      for (let f = 0; f < 1; f++) {
         binga = `${3 >> (Math.min(3, binga.length))}`;
      }
          let calendard = 3.0;
          let agreementZ: Array<any> = [708, 943];
          let q_playerO = 5;
         navigationY = `${parseInt(`${calendard}`)}`;
         calendard *= agreementZ.length;
         agreementZ = [1 ^ q_playerO];
         q_playerO %= Math.max(3, q_playerO);
       let customf = 2.0;
      while (!navigationY.includes(`${canvas0}`)) {
         navigationY += "2";
         break;
      }
      let readi = customf >= 5473361.0;
      do {
         customf /= Math.max(binga.length, 4);
         if (readi) {
            break;
         }
      } while (readi && ((parseInt(`${customf}`) / (Math.max(3, 8))) < 2 || 2.0 < (customf / 1.78)));
       let settingsI = 2.0;
      kuaishouq = [1 ^ navigationY.length];
   let googlei = colorse.length <= 7482734;
   do {
      colorse.push(1 * parseInt(`${trophyP}`));
      if (googlei) {
         break;
      }
   } while (((logo9.size ^ 1) > 2) && googlei);
   if (taiwan5 < kuaishouq.length) {
      kuaishouq = [(renewY == String.fromCharCode(79,0) ? annerv.size : renewY.length)];
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
       let readN = 2;
    let gray2 = String.fromCharCode(101,103,117,108,97,114,0);
    let ruleso: Map<any, any> = new Map([[String.fromCharCode(98,101,110,105,103,110,0),488], [String.fromCharCode(105,111,115,0),122]]);
    let debugB = String.fromCharCode(119,95,50,50,95,97,99,116,105,118,97,116,105,111,110,115,0);
    let actionsq = String.fromCharCode(98,111,100,105,101,115,95,111,95,51,0);
    let roomY = String.fromCharCode(115,116,114,105,99,109,112,0);
    let twitterb = 2.0;
    let crown6 = String.fromCharCode(115,105,103,110,105,102,105,99,97,110,116,0);
    let internetR = String.fromCharCode(98,95,57,51,95,102,117,122,122,101,114,0);
    let gestureb: Map<any, any> = new Map([[String.fromCharCode(121,111,110,108,121,120,95,113,95,51,57,0),String.fromCharCode(115,95,51,53,95,99,114,101,97,116,101,101,120,0)], [String.fromCharCode(115,116,114,105,112,95,51,95,56,55,0),String.fromCharCode(117,105,110,116,98,101,95,116,95,54,56,0)]]);
    let overH = String.fromCharCode(99,95,54,56,95,101,120,116,114,97,100,97,116,97,112,115,101,116,115,0);
    let short_jwl: Array<any> = [888, 62];
    let historyG: Map<any, any> = new Map([[String.fromCharCode(116,95,50,56,95,117,110,119,114,97,112,0),959], [String.fromCharCode(112,111,115,101,0),378]]);
       let reducerc = 5.0;
       let fieldr = 3.0;
       let member3 = false;
         reducerc /= Math.max(parseFloat(`${parseInt(`${fieldr}`) << (Math.min(5, Math.abs(2)))}`), 3);
      while (1.0 == (5.21 * fieldr) && 4.32 == (5.21 - fieldr)) {
          let chatS = false;
         fieldr /= Math.max(2, parseFloat(`${parseInt(`${fieldr}`) | 1}`));
         chatS = (chatS ? !chatS : chatS);
         break;
      }
         reducerc /= Math.max(3, parseFloat(`${2 | parseInt(`${fieldr}`)}`));
      let photoy = member3 ? !member3 : member3;
      do {
          let weiboF: Map<any, any> = new Map([[String.fromCharCode(98,105,116,118,101,99,95,50,95,52,55,0),703], [String.fromCharCode(108,95,50,53,95,98,105,116,105,122,101,110,0),188], [String.fromCharCode(114,103,98,116,111,121,118,0),755]]);
          let analyticw = true;
          let grayU = String.fromCharCode(113,117,97,100,115,95,56,95,55,48,0);
          let sharef = String.fromCharCode(118,103,108,111,98,97,108,95,102,95,56,56,0);
         member3 = sharef.length >= parseInt(`${reducerc}`);
         weiboF.set(`${analyticw}`, (2 + (analyticw ? 4 : 5)));
         grayU += `${grayU.length}`;
         sharef = "1";
         if (photoy) {
            break;
         }
      } while ((reducerc <= 3.29) && photoy);
      if (member3) {
         member3 = 80.78 == reducerc;
      }
         reducerc -= parseFloat(`${1 / (Math.max(6, parseInt(`${fieldr}`)))}`);
         member3 = !member3;
      if (fieldr > 3.8) {
          let suggestion_: Array<any> = [327, 446, 343];
          let common6 = 1.0;
         fieldr += parseFloat(`${parseInt(`${reducerc}`)}`);
         suggestion_.push(parseInt(`${common6}`));
         common6 /= Math.max(3, parseFloat(`${parseInt(`${common6}`) + suggestion_.length}`));
      }
      for (let y = 0; y < 2; y++) {
          let stats4 = 4.0;
         reducerc -= parseFloat(`${parseInt(`${reducerc}`) * 1}`);
         stats4 *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${stats4}`)), 3))}`);
      }
      roomY = `${(String.fromCharCode(49,0) == gray2 ? parseInt(`${reducerc}`) : gray2.length)}`;
      actionsq += `${gray2.length}`;
   while (parseInt(`${twitterb}`) <= roomY.length) {
      roomY += `${crown6.length}`;
      break;
   }
      debugB = `${(roomY == String.fromCharCode(87,0) ? roomY.length : parseInt(`${twitterb}`))}`;
   if (debugB.length >= 1) {
      actionsq += `${(String.fromCharCode(73,0) == gray2 ? readN : gray2.length)}`;
   }
   while (!gray2.includes(`${crown6.length}`)) {
      gray2 += "1";
      break;
   }
      roomY = `${parseInt(`${twitterb}`)}`;
       let modev = 2;
          let downT = 0.0;
          let update_il: Array<any> = [398, 805, 454];
         modev %= Math.max(update_il.length, 5);
         downT *= parseInt(`${downT}`);
         update_il = [parseInt(`${downT}`)];
      for (let v = 0; v < 1; v++) {
          let bridgeq = 3.0;
          let roomc: Array<any> = [70, 269];
          let privacy_ = false;
          let screenS = String.fromCharCode(99,111,110,116,97,99,116,95,98,95,51,55,0);
         modev *= parseInt(`${bridgeq}`) & 1;
         bridgeq += parseFloat(`${screenS.length / (Math.max(3, roomc.length))}`);
         roomc.push(screenS.length);
         privacy_ = screenS.length < roomc.length;
      }
       let whiteS = 0;
       let rankX = 4;
      roomY += `${debugB.length}`;
   while (debugB != actionsq) {
      actionsq = `${3 + readN}`;
      break;
   }
   if ((readN ^ 4) <= 5 && (gray2.length ^ 4) <= 4) {
      gray2 += `${2 / (Math.max(8, parseInt(`${twitterb}`)))}`;
   }
   let robotoJ = 7428667 >= readN;
   do {
       let sheetM = String.fromCharCode(105,95,50,51,95,99,112,108,115,99,97,108,101,115,0);
       let toponx = String.fromCharCode(100,101,99,105,109,97,108,115,0);
       let containerL = false;
       let bottom8 = true;
       let styleI = true;
      while (bottom8) {
          let orangef: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,97,110,109,105,115,115,105,111,110,0),682], [String.fromCharCode(119,101,98,112,97,103,101,0),396], [String.fromCharCode(117,108,111,110,103,0),169]]);
          let tumbnailM = String.fromCharCode(103,95,57,52,95,119,97,108,108,0);
          let long_fl8: Array<any> = [279, 194, 489];
          let albumd = true;
          let x_lockn: Map<any, any> = new Map([[String.fromCharCode(119,95,49,48,48,95,109,98,116,114,101,101,0),984], [String.fromCharCode(100,95,53,95,100,101,103,114,97,100,97,116,105,111,110,0),853], [String.fromCharCode(99,114,111,119,100,105,110,0),179]]);
         bottom8 = null != x_lockn.get(`${containerL}`);
         orangef = new Map([[`${orangef.size}`, long_fl8.length]]);
         tumbnailM += `${tumbnailM.length * 1}`;
         long_fl8 = [tumbnailM.length * 2];
         albumd = long_fl8.length == 33;
         x_lockn = new Map([[`${orangef.size}`, 3]]);
         break;
      }
         styleI = !bottom8;
       let reminderZ = 5;
         reminderZ |= (2 + (containerL ? 5 : 3));
      let refreshz = bottom8 ? !bottom8 : bottom8;
      do {
         bottom8 = !bottom8;
         if (refreshz) {
            break;
         }
      } while ((bottom8) && refreshz);
          let agreements = 3.0;
          let stylec = String.fromCharCode(110,105,108,115,0);
          let firebaser = 0.0;
         styleI = String.fromCharCode(102,0) == sheetM || 98 > toponx.length;
         agreements *= (stylec == String.fromCharCode(78,0) ? parseInt(`${firebaser}`) : stylec.length);
         firebaser *= parseFloat(`${parseInt(`${agreements}`)}`);
      let hooksH = reminderZ >= 6261267;
      do {
         reminderZ &= 3;
         if (hooksH) {
            break;
         }
      } while ((styleI) && hooksH);
      for (let c = 0; c < 1; c++) {
         reminderZ -= 3;
      }
      readN -= crown6.length;
      if (robotoJ) {
         break;
      }
   } while (robotoJ && ((1 % (Math.max(10, readN))) <= 2));
   let helperq = readN <= 5268525;
   do {
       let canvash = String.fromCharCode(102,102,112,114,111,98,101,0);
       let roundX = 0;
       let blackA: Array<any> = [385, 897];
       let splashR = false;
      let entryW = 9297335 <= roundX;
      do {
         roundX >>= Math.min(Math.abs(1), 4);
         if (entryW) {
            break;
         }
      } while ((canvash.length >= roundX) && entryW);
      while (4 == (1 * roundX) || (canvash.length * 1) == 1) {
         roundX &= roundX;
         break;
      }
      if ((roundX * 3) > 1) {
         roundX %= Math.max(2, 3 % (Math.max(7, canvash.length)));
      }
         blackA.push(3 * canvash.length);
       let videocommon8 = String.fromCharCode(109,101,109,99,109,112,95,98,95,49,0);
       let flipperF = String.fromCharCode(115,95,53,52,0);
         videocommon8 = `${(String.fromCharCode(88,0) == videocommon8 ? blackA.length : videocommon8.length)}`;
      for (let m = 0; m < 1; m++) {
          let actionsU = String.fromCharCode(116,104,101,110,0);
          let pointI: Array<any> = [665, 917];
          let actions_: Array<any> = [String.fromCharCode(120,95,53,54,95,115,117,98,116,114,97,99,116,0), String.fromCharCode(104,95,56,51,95,105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,0), String.fromCharCode(100,101,115,116,95,121,95,52,52,0)];
          let roundi = 5.0;
         flipperF += `${actionsU.length}`;
         actionsU = "2";
         pointI.push(3 << (Math.min(Math.abs(parseInt(`${roundi}`)), 4)));
         actions_.push(2 << (Math.min(5, actions_.length)));
         roundi -= parseFloat(`${parseInt(`${roundi}`) | pointI.length}`);
      }
         roundX <<= Math.min(canvash.length, 3);
          let sliderm: Array<any> = [327, 453];
          let gesturesS = String.fromCharCode(99,95,49,49,95,112,114,111,112,101,114,121,0);
         roundX *= roundX - blackA.length;
         sliderm.push(gesturesS.length);
         gesturesS += `${3 << (Math.min(3, gesturesS.length))}`;
      let calendarR = splashR ? !splashR : splashR;
      do {
         splashR = !videocommon8.endsWith(`${splashR}`);
         if (calendarR) {
            break;
         }
      } while (calendarR && (splashR));
       let catagoryP = true;
       let gradle1 = true;
       let promotion1 = String.fromCharCode(111,112,116,105,111,110,97,108,108,121,0);
       let entryh = String.fromCharCode(114,116,114,101,101,100,101,112,116,104,0);
      readN >>= Math.min(Math.abs(readN), 2);
      if (helperq) {
         break;
      }
   } while (((readN / (Math.max(4, debugB.length))) < 5) && helperq);
   while ((gestureb.size % (Math.max(2, 8))) < 4 || (internetR.length % 2) < 1) {
      internetR = `${debugB.length}`;
      break;
   }
   if ((internetR.length >> (Math.min(5, Math.abs(gestureb.size)))) == 3 || (internetR.length >> (Math.min(Math.abs(3), 2))) == 5) {
      gestureb = new Map([[`${readN}`, (String.fromCharCode(101,0) == gray2 ? readN : gray2.length)]]);
   }
      twitterb += parseFloat(`${3}`);
   while (actionsq.startsWith(`${gray2.length}`)) {
      actionsq = "1";
      break;
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
       let fast0 = false;
    let screenY: Map<any, any> = new Map([[String.fromCharCode(97,95,55,51,95,105,115,110,97,110,0),991], [String.fromCharCode(108,111,119,112,97,115,115,0),256], [String.fromCharCode(113,95,55,55,95,97,99,99,101,115,115,105,110,103,0),437]]);
    let searchB = 0.0;
    let videoR = 3.0;
    let updatesR = String.fromCharCode(115,105,102,116,95,53,95,51,56,0);
    let navigationr: Array<any> = [String.fromCharCode(115,97,105,122,95,97,95,55,49,0), String.fromCharCode(106,95,51,54,95,114,101,103,101,120,112,0), String.fromCharCode(99,111,112,121,95,103,95,53,49,0)];
    let g_lockL = 4;
    let sina5 = String.fromCharCode(119,95,49,53,95,115,116,100,111,117,116,0);
   if (!fast0) {
      updatesR = "1";
   }
   while (2 == (navigationr.length - 1) || 5 == (1 - screenY.size)) {
      screenY.set(`${fast0}`, ((fast0 ? 1 : 3) >> (Math.min(Math.abs(g_lockL), 1))));
      break;
   }
       let auto_zc8 = String.fromCharCode(116,97,112,95,108,95,50,57,0);
       let default_6tC: Map<any, any> = new Map([[String.fromCharCode(101,95,55,54,95,115,105,103,116,101,114,109,0),464], [String.fromCharCode(104,115,118,97,95,104,95,54,48,0),466], [String.fromCharCode(108,111,99,97,108,116,105,109,101,95,49,95,55,55,0),587]]);
       let profileu = String.fromCharCode(114,101,99,114,101,97,116,101,0);
         auto_zc8 += `${profileu.length - 3}`;
         default_6tC = new Map([[auto_zc8, 2 ^ auto_zc8.length]]);
       let minivodu = 1;
       let transfern = 3;
      while (5 < (5 & transfern) && (transfern & 5) < 5) {
         transfern ^= minivodu;
         break;
      }
      for (let n = 0; n < 1; n++) {
         minivodu %= Math.max(default_6tC.size, 1);
      }
          let hookx = 4;
         profileu += `${profileu.length}`;
         hookx -= hookx + 2;
         profileu += `${(profileu == String.fromCharCode(95,0) ? minivodu : profileu.length)}`;
         profileu += `${minivodu}`;
      if (minivodu >= transfern) {
          let notificationp = String.fromCharCode(101,95,53,53,95,115,117,112,101,114,103,114,111,117,112,0);
         minivodu <<= Math.min(1, Math.abs(3 + profileu.length));
         notificationp += `${(notificationp == String.fromCharCode(66,0) ? notificationp.length : notificationp.length)}`;
      }
      screenY.set(profileu, 2);
       let shootL = String.fromCharCode(97,108,115,97,115,121,109,98,111,108,116,97,98,108,101,0);
       let dplusz = String.fromCharCode(101,110,99,114,121,112,116,105,111,110,0);
      let auto_m5 = String.fromCharCode(119,53,55,55,117,109,97,0) == shootL;
      do {
         shootL += "1";
         if (auto_m5) {
            break;
         }
      } while (auto_m5 && (dplusz == String.fromCharCode(114,0)));
      let panglet = shootL == String.fromCharCode(116,107,53,104,50,50,120,57,0);
      do {
         shootL += `${(dplusz == String.fromCharCode(84,0) ? dplusz.length : shootL.length)}`;
         if (panglet) {
            break;
         }
      } while ((dplusz.length <= shootL.length) && panglet);
         dplusz = `${shootL.length}`;
          let largen = true;
          let leagued = String.fromCharCode(106,95,49,53,95,115,108,105,99,101,100,0);
          let catalogl = String.fromCharCode(102,95,56,52,95,103,101,116,115,116,114,0);
         shootL = `${catalogl.length >> (Math.min(leagued.length, 1))}`;
         largen = !largen || !largen;
         leagued += `${((largen ? 2 : 5) ^ (largen ? 3 : 2))}`;
      let combinedz = 7261108 <= dplusz.length;
      do {
          let foregroundV = String.fromCharCode(117,95,49,51,95,116,101,108,108,97,114,0);
          let bootsplashR = String.fromCharCode(103,95,54,57,95,114,97,100,97,114,0);
          let filterR = String.fromCharCode(97,95,53,54,0);
          let actionsg = true;
          let searchbar5 = String.fromCharCode(104,99,104,114,111,109,97,0);
         dplusz += `${bootsplashR.length | 2}`;
         foregroundV += "1";
         bootsplashR += `${foregroundV.length}`;
         filterR += `${((actionsg ? 3 : 3))}`;
         searchbar5 = `${((actionsg ? 4 : 3) % (Math.max(2, 10)))}`;
         if (combinedz) {
            break;
         }
      } while ((2 < dplusz.length) && combinedz);
      for (let o = 0; o < 2; o++) {
          let filled5 = String.fromCharCode(112,114,111,118,105,100,101,114,0);
          let update__04: Map<any, any> = new Map([[String.fromCharCode(115,95,52,53,95,102,108,97,99,100,97,116,97,0),914], [String.fromCharCode(114,101,97,100,102,117,108,108,95,99,95,53,56,0),312]]);
         dplusz = `${2 + shootL.length}`;
         filled5 = `${update__04.size}`;
         update__04 = new Map([[`${update__04.size}`, update__04.size]]);
      }
      navigationr = [3];
   if (1.28 == (3.97 * searchB)) {
      searchB *= parseInt(`${searchB}`) & 3;
   }
   if ((searchB * 2.99) < 2.13 || (2.99 * searchB) < 4.52) {
       let modeb = 0.0;
       let animationD = 0.0;
       let videocommonm: Array<any> = [651, 243];
       let emojiV = 1.0;
      for (let n = 0; n < 1; n++) {
         modeb /= Math.max(2, parseFloat(`${3}`));
      }
          let humidityc = true;
          let stationz = String.fromCharCode(106,95,50,51,95,106,117,109,112,0);
          let viewery = String.fromCharCode(97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,0);
         modeb *= parseFloat(`${2}`);
         humidityc = stationz.length <= 9 || humidityc;
         stationz = `${((humidityc ? 3 : 2))}`;
         viewery = `${((humidityc ? 4 : 1) + 1)}`;
      let fileP = 6984677 <= videocommonm.length;
      do {
         videocommonm.push(videocommonm.length);
         if (fileP) {
            break;
         }
      } while (fileP && ((emojiV / (Math.max(6, videocommonm.length))) <= 3.64));
      let goalw = 5812823.0 <= animationD;
      do {
          let logoo = 5;
          let expired6: Map<any, any> = new Map([[String.fromCharCode(101,120,99,108,117,100,101,115,0),false ], [String.fromCharCode(112,95,50,54,95,97,108,114,101,97,100,121,0),true ]]);
         animationD /= Math.max(parseInt(`${modeb}`), 5);
         logoo &= logoo / 1;
         expired6.set(`${logoo}`, 1);
         if (goalw) {
            break;
         }
      } while (((animationD / (Math.max(4.72, 8))) > 3.49 && 4 > (videocommonm.length / 1)) && goalw);
          let homeI = String.fromCharCode(98,105,116,101,120,97,99,116,95,101,95,51,51,0);
         videocommonm = [(homeI == String.fromCharCode(50,0) ? homeI.length : parseInt(`${emojiV}`))];
         emojiV += videocommonm.length % (Math.max(2, 3));
         emojiV /= Math.max(parseInt(`${modeb}`) % 3, 1);
       let controlv: Map<any, any> = new Map([[String.fromCharCode(104,95,56,52,95,114,101,109,111,116,101,108,121,0),373], [String.fromCharCode(115,104,101,101,114,118,105,100,101,111,100,97,116,97,0),443]]);
       let successU: Map<any, any> = new Map([[String.fromCharCode(109,105,110,109,97,120,95,119,95,50,48,0),false ], [String.fromCharCode(121,95,53,50,95,109,117,108,116,105,102,114,97,109,101,0),false ]]);
      if ((controlv.size / (Math.max(5, 3))) >= 4 || (animationD - 3.13) >= 2.29) {
          let friendsx: Map<any, any> = new Map([[String.fromCharCode(108,105,109,105,116,101,114,0),537], [String.fromCharCode(105,95,54,56,95,117,110,115,112,105,108,108,0),789], [String.fromCharCode(108,114,111,110,100,95,56,95,49,0),652]]);
          let ewardedB: Array<any> = [619, 295, 293];
         animationD /= Math.max(4, videocommonm.length ^ 3);
         friendsx = new Map([[`${friendsx.size}`, friendsx.size + ewardedB.length]]);
         ewardedB.push(friendsx.size);
      }
          let untickQ = String.fromCharCode(116,115,99,99,0);
         emojiV -= videocommonm.length | 3;
         untickQ = `${(untickQ == String.fromCharCode(51,0) ? untickQ.length : untickQ.length)}`;
      for (let j = 0; j < 2; j++) {
         videocommonm = [parseInt(`${animationD}`)];
      }
         controlv.set(`${modeb}`, videocommonm.length ^ 3);
      g_lockL %= Math.max(2, updatesR.length + parseInt(`${searchB}`));
   }
       let dangerZ = String.fromCharCode(109,111,110,111,115,112,97,99,101,0);
       let description_lw = String.fromCharCode(102,101,116,99,104,105,110,103,0);
       let temperatureh = String.fromCharCode(111,117,116,112,117,116,95,51,95,52,55,0);
          let episodes1 = true;
         description_lw += `${temperatureh.length >> (Math.min(dangerZ.length, 1))}`;
         episodes1 = episodes1 || episodes1;
         description_lw += `${temperatureh.length / 2}`;
         dangerZ = `${dangerZ.length >> (Math.min(description_lw.length, 1))}`;
      while (3 == temperatureh.length) {
         temperatureh = "2";
         break;
      }
         description_lw += `${3 & dangerZ.length}`;
         temperatureh += `${temperatureh.length - 2}`;
      let robotoQ = 8242058 <= description_lw.length;
      do {
         description_lw = `${3 * temperatureh.length}`;
         if (robotoQ) {
            break;
         }
      } while (robotoQ && (!dangerZ.endsWith(`${description_lw.length}`)));
       let modity4 = String.fromCharCode(104,113,112,101,108,0);
      if (modity4.length >= 5) {
          let launchO = String.fromCharCode(111,95,51,57,95,114,101,109,97,112,112,105,110,103,0);
         temperatureh += `${launchO.length}`;
      }
      updatesR += `${g_lockL}`;
   while (updatesR.length <= 4 || !fast0) {
      updatesR += `${parseInt(`${videoR}`) >> (Math.min(2, Math.abs(3)))}`;
      break;
   }
      fast0 = (searchB / (Math.max(4, screenY.size))) >= 21.84;
      updatesR = `${screenY.size & parseInt(`${searchB}`)}`;
       let mbnativeadvancedY = 0.0;
         mbnativeadvancedY -= parseFloat(`${parseInt(`${mbnativeadvancedY}`)}`);
      while (mbnativeadvancedY >= mbnativeadvancedY) {
         mbnativeadvancedY /= Math.max(1, parseFloat(`${1 + parseInt(`${mbnativeadvancedY}`)}`));
         break;
      }
         mbnativeadvancedY /= Math.max(4, parseFloat(`${1 | parseInt(`${mbnativeadvancedY}`)}`));
      g_lockL >>= Math.min(Math.abs(g_lockL & navigationr.length), 4);
      fast0 = screenY.size == 32;
       let settingsb = 1;
       let leftn = 4.0;
       let ewardedB7 = 2.0;
      while ((ewardedB7 + leftn) < 1.25) {
         leftn += parseInt(`${ewardedB7}`);
         break;
      }
      let customo = 5485089.0 >= leftn;
      do {
          let popupA = 5.0;
          let build_: Array<any> = [177, 250, 504];
          let windd = 5.0;
          let logoutZ = 5.0;
          let combinedn = 1.0;
         leftn += 1 - parseInt(`${logoutZ}`);
         popupA *= build_.length;
         build_ = [parseInt(`${combinedn}`) * build_.length];
         windd += parseInt(`${combinedn}`);
         logoutZ += parseInt(`${combinedn}`);
         if (customo) {
            break;
         }
      } while ((1.3 > (leftn - ewardedB7) && (ewardedB7 - leftn) > 1.3) && customo);
       let catalogz = 4;
       let megaphoneL = 3;
      while (leftn == ewardedB7) {
          let splashm = 0.0;
         ewardedB7 *= 2;
         splashm -= 1;
         break;
      }
      for (let w = 0; w < 2; w++) {
         ewardedB7 *= parseInt(`${leftn}`);
      }
         settingsb &= megaphoneL;
      while (1.50 > (leftn * 1.18)) {
          let videojsu: Array<any> = [String.fromCharCode(111,112,115,0), String.fromCharCode(109,117,116,97,116,105,111,110,0), String.fromCharCode(110,95,50,48,95,110,99,111,109,105,110,103,0)];
         megaphoneL %= Math.max(settingsb >> (Math.min(1, Math.abs(catalogz))), 2);
         videojsu.push(videojsu.length);
         break;
      }
      if (3 == (megaphoneL / 5) || 5 == (catalogz / (Math.max(2, megaphoneL)))) {
         catalogz &= 2;
      }
      for (let h = 0; h < 3; h++) {
         megaphoneL ^= megaphoneL / 1;
      }
      videoR /= Math.max(parseInt(`${ewardedB7}`) - 3, 3);
      videoR -= 1 | navigationr.length;
       let gesture4 = String.fromCharCode(104,95,51,50,95,116,97,98,0);
       let windW = 1.0;
         windW -= parseInt(`${windW}`);
      if ((gesture4.length - windW) < 4.90 || 2 < (gesture4.length % 1)) {
          let bottomK = 3;
         gesture4 = `${gesture4.length}`;
         bottomK <<= Math.min(Math.abs(bottomK + 2), 4);
      }
         gesture4 += `${(gesture4 == String.fromCharCode(83,0) ? parseInt(`${windW}`) : gesture4.length)}`;
          let splashl = String.fromCharCode(115,108,111,112,101,95,49,95,51,56,0);
         windW -= 3 * gesture4.length;
         splashl = `${splashl.length}`;
         windW *= (gesture4 == String.fromCharCode(112,0) ? parseInt(`${windW}`) : gesture4.length);
          let phonep: Array<any> = [752, 25];
         windW *= phonep.length;
      screenY.set(`${fast0}`, (2 | (fast0 ? 3 : 4)));
      videoR /= Math.max(4, navigationr.length - parseInt(`${searchB}`));
      screenY = new Map([[`${navigationr.length}`, updatesR.length % (Math.max(5, navigationr.length))]]);
   if (1 >= (screenY.size * 2)) {
       let combinedm = String.fromCharCode(112,97,115,116,95,111,95,57,52,0);
       let commentF = String.fromCharCode(116,101,97,114,100,111,119,110,95,108,95,54,50,0);
       let yellowD: Array<any> = [String.fromCharCode(100,95,55,48,95,112,97,115,116,0), String.fromCharCode(103,95,57,56,95,114,101,103,101,120,112,0)];
       let downloadedF: Array<any> = [111, 715, 828];
       let lessN = String.fromCharCode(100,111,99,105,100,0);
       let utilsm = String.fromCharCode(98,95,50,95,105,115,97,99,102,105,120,0);
      while (2 < (5 << (Math.min(4, downloadedF.length))) || 3 < (5 << (Math.min(1, commentF.length)))) {
         downloadedF.push(utilsm.length & lessN.length);
         break;
      }
      for (let y = 0; y < 2; y++) {
         utilsm = `${utilsm.length >> (Math.min(Math.abs(1), 5))}`;
      }
         yellowD.push(commentF.length);
      for (let s = 0; s < 1; s++) {
         combinedm = `${combinedm.length >> (Math.min(4, yellowD.length))}`;
      }
      searchB -= navigationr.length % 1;
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
       let interstitialJ: Array<any> = [String.fromCharCode(97,112,111,115,0), String.fromCharCode(114,97,116,105,111,115,0)];
    let gradlev = 3.0;
    let crossJ: Array<any> = [String.fromCharCode(107,95,56,57,95,104,119,97,99,99,101,108,0), String.fromCharCode(98,105,114,116,104,100,97,116,101,0), String.fromCharCode(103,114,101,103,0)];
    let usernamec = String.fromCharCode(111,97,117,116,104,0);
    let collectionS = String.fromCharCode(105,95,55,55,95,116,115,101,113,0);
    let questZ = String.fromCharCode(99,105,112,104,101,114,98,121,110,97,109,101,0);
    let popupV = String.fromCharCode(101,95,49,95,100,105,115,115,111,108,118,101,0);
    let blacklistZ = 5.0;
    let trashJ: Map<any, any> = new Map([[String.fromCharCode(109,101,109,111,114,121,115,116,114,101,97,109,0),49], [String.fromCharCode(101,95,55,51,95,104,111,114,110,0),390], [String.fromCharCode(102,105,110,116,95,120,95,54,50,0),334]]);
    let home2: Array<any> = [209, 935];
    let megaphoneS = String.fromCharCode(111,95,49,48,48,95,112,97,114,97,109,115,0);
    let traminif = 1.0;
    let privilegeR = String.fromCharCode(102,114,97,99,0);
    let relatedk: Map<any, any> = new Map([[String.fromCharCode(100,111,117,98,108,101,95,104,95,55,48,0),String.fromCharCode(111,115,116,104,114,101,97,100,115,95,119,95,55,52,0)], [String.fromCharCode(105,95,54,95,99,117,114,115,111,114,115,116,114,101,97,109,119,114,97,112,112,101,114,0),String.fromCharCode(117,110,116,121,112,101,100,0)]]);
    let reducer5 = String.fromCharCode(117,95,54,52,95,108,115,112,112,111,108,121,102,0);
    let type_w1e = 5.0;
    let clearQ = 0.0;
      home2 = [crossJ.length];
       let whistleo = 2.0;
       let linkb = false;
         linkb = !linkb;
      while ((4.85 * whistleo) >= 5.63) {
         whistleo += (parseFloat(`${(linkb ? 5 : 3) - parseInt(`${whistleo}`)}`));
         break;
      }
          let zoomo = String.fromCharCode(114,105,110,103,105,110,103,0);
          let termsc = 0.0;
          let resultg = String.fromCharCode(110,111,109,105,110,97,116,101,0);
         linkb = zoomo.length < resultg.length;
         zoomo += `${parseInt(`${termsc}`) + 3}`;
         termsc += 1;
          let orientationg = 4;
         whistleo += parseFloat(`${1 / (Math.max(3, parseInt(`${whistleo}`)))}`);
         orientationg += orientationg / (Math.max(orientationg, 5));
      let yelloww = whistleo >= 5255989.0;
      do {
          let countdownH: Map<any, any> = new Map([[String.fromCharCode(101,99,104,111,95,109,95,57,48,0),751], [String.fromCharCode(99,117,115,116,111,109,105,122,101,0),632]]);
          let reminderq = true;
          let applicationI = 3.0;
          let commonw = String.fromCharCode(118,115,117,98,113,95,54,95,50,53,0);
         whistleo *= parseFloat(`${parseInt(`${applicationI}`) / (Math.max(2, 5))}`);
         countdownH.set(`${reminderq}`, 2 | countdownH.size);
         applicationI /= Math.max(2, ((reminderq ? 3 : 1) | countdownH.size));
         commonw = `${((reminderq ? 1 : 5))}`;
         if (yelloww) {
            break;
         }
      } while ((linkb || (whistleo - 1.74) > 4.30) && yelloww);
      for (let c = 0; c < 3; c++) {
         whistleo *= parseFloat(`${parseInt(`${whistleo}`) - 2}`);
      }
      usernamec = `${crossJ.length}`;
      gradlev /= Math.max(2 >> (Math.min(4, privilegeR.length)), 5);
      privilegeR += `${(String.fromCharCode(65,0) == popupV ? parseInt(`${traminif}`) : popupV.length)}`;
      collectionS += `${parseInt(`${blacklistZ}`) | home2.length}`;
      trashJ = new Map([[`${home2.length}`, 2]]);
   while (1 <= crossJ.length) {
      collectionS = `${questZ.length & 2}`;
      break;
   }
      privilegeR += `${trashJ.size}`;
       let benefitr = 1;
       let firebasea = String.fromCharCode(115,117,98,109,111,100,101,108,115,95,119,95,54,52,0);
       let reactu = 3;
      while ((5 * firebasea.length) == 3 && 5 == (reactu * firebasea.length)) {
          let bannerL = String.fromCharCode(121,95,50,49,95,109,97,116,99,104,105,110,102,111,0);
         firebasea = `${reactu}`;
         bannerL += `${(String.fromCharCode(102,0) == bannerL ? bannerL.length : bannerL.length)}`;
         break;
      }
      if ((firebasea.length % 1) >= 1 || (1 % (Math.max(9, firebasea.length))) >= 4) {
         firebasea += `${reactu | 2}`;
      }
          let save9 = String.fromCharCode(97,100,100,107,101,121,0);
          let regengM = String.fromCharCode(116,98,109,108,95,56,95,54,55,0);
         firebasea += "2";
         save9 += `${save9.length >> (Math.min(regengM.length, 2))}`;
         regengM += `${save9.length * 2}`;
          let current1: Array<any> = [String.fromCharCode(115,117,112,112,114,101,115,115,101,100,0), String.fromCharCode(99,95,49,50,95,116,105,112,0), String.fromCharCode(99,111,100,105,110,103,116,121,112,101,95,103,95,53,50,0)];
          let buttonW = String.fromCharCode(108,115,102,112,111,108,121,0);
          let eighteenR: Map<any, any> = new Map([[String.fromCharCode(103,95,52,49,95,100,101,109,117,120,101,114,0),485], [String.fromCharCode(116,105,110,121,0),236], [String.fromCharCode(114,101,112,117,98,108,105,115,104,0),847]]);
         benefitr ^= buttonW.length;
         current1.push(3);
         buttonW = `${current1.length}`;
         eighteenR.set(`${current1.length}`, eighteenR.size);
         benefitr %= Math.max(1, 2 + benefitr);
      if (4 < (benefitr ^ firebasea.length)) {
         firebasea += `${firebasea.length % 3}`;
      }
          let resendM = 0.0;
          let faviconS = String.fromCharCode(120,95,50,55,95,119,111,114,107,105,110,103,0);
         benefitr -= faviconS.length >> (Math.min(5, Math.abs(parseInt(`${resendM}`))));
         reactu -= benefitr;
         benefitr += benefitr - 1;
      trashJ = new Map([[`${interstitialJ.length}`, interstitialJ.length - usernamec.length]]);
      questZ += `${(privilegeR == String.fromCharCode(48,0) ? relatedk.size : privilegeR.length)}`;
   for (let z = 0; z < 1; z++) {
      trashJ = new Map([[`${relatedk.size}`, relatedk.size - popupV.length]]);
   }
       let crossf = String.fromCharCode(101,110,115,117,114,101,0);
         crossf += `${crossf.length >> (Math.min(Math.abs(3), 5))}`;
      while (crossf.length == crossf.length) {
         crossf += "2";
         break;
      }
       let videocommonY = String.fromCharCode(108,95,49,56,95,105,110,118,105,116,97,116,105,111,110,115,0);
      questZ = `${collectionS.length}`;
       let unselected3 = 5.0;
       let iconP: Map<any, any> = new Map([[String.fromCharCode(117,110,108,105,110,107,101,100,95,114,95,51,54,0),776], [String.fromCharCode(104,95,51,53,95,109,105,115,115,0),72]]);
       let layout7 = 5.0;
         unselected3 /= Math.max(parseFloat(`${iconP.size}`), 1);
      for (let b = 0; b < 1; b++) {
          let resend7: Array<any> = [String.fromCharCode(116,95,53,52,0), String.fromCharCode(115,116,100,111,117,116,95,105,95,52,56,0)];
          let flipperh: Array<any> = [String.fromCharCode(115,116,121,108,101,0), String.fromCharCode(102,111,108,100,101,114,115,95,48,95,57,55,0)];
          let animationI = String.fromCharCode(114,101,112,108,97,121,101,114,0);
         layout7 -= flipperh.length;
         resend7 = [(String.fromCharCode(77,0) == animationI ? animationI.length : resend7.length)];
         flipperh.push(resend7.length);
      }
      for (let c = 0; c < 1; c++) {
          let dycreator3 = true;
          let promotionu = 2.0;
         layout7 += ((dycreator3 ? 3 : 4) - parseInt(`${promotionu}`));
      }
       let taiwanP = 0.0;
       let twitterp = String.fromCharCode(110,111,116,105,102,105,101,115,0);
       let crossn = String.fromCharCode(112,95,55,48,95,104,114,115,115,0);
      let mbnativel = crossn == String.fromCharCode(119,108,105,120,48,54,52,104,51,0);
      do {
          let result3 = 5.0;
         crossn += `${parseInt(`${unselected3}`) >> (Math.min(Math.abs(parseInt(`${taiwanP}`)), 4))}`;
         result3 += 1 | parseInt(`${result3}`);
         if (mbnativel) {
            break;
         }
      } while (((4.70 + unselected3) > 3.91) && mbnativel);
         taiwanP += (parseFloat(`${String.fromCharCode(78,0) == twitterp ? parseInt(`${layout7}`) : twitterp.length}`));
      if (layout7 >= taiwanP) {
         taiwanP += parseFloat(`${2 * parseInt(`${layout7}`)}`);
      }
          let awayv = 3.0;
         taiwanP -= parseFloat(`${parseInt(`${unselected3}`)}`);
         awayv /= Math.max(2, 1 - parseInt(`${awayv}`));
      megaphoneS = `${trashJ.size >> (Math.min(Math.abs(2), 3))}`;
   let yellowp = gradlev >= 9062344.0;
   do {
       let annerx = String.fromCharCode(115,105,103,110,101,100,0);
       let playlistu: Array<any> = [660, 212];
       let animationF: Array<any> = [492, 63];
       let trasht = 3.0;
          let sendO = 1;
          let vignetteC = String.fromCharCode(116,95,55,52,95,116,114,105,108,105,110,101,97,114,0);
         trasht += animationF.length;
         sendO -= 1;
         vignetteC += `${vignetteC.length}`;
      while ((4 & playlistu.length) <= 4 || 4 <= (parseInt(`${trasht}`) * playlistu.length)) {
          let refreshW = 1;
         trasht *= refreshW;
         break;
      }
      while (annerx.includes(`${trasht}`)) {
         trasht += 1 >> (Math.min(Math.abs(parseInt(`${trasht}`)), 3));
         break;
      }
      let regeng0 = 7426753 >= playlistu.length;
      do {
          let championc = String.fromCharCode(109,95,48,95,117,110,115,101,110,116,0);
          let countryK = false;
          let expiredX = String.fromCharCode(109,117,115,120,0);
          let foregroundD = String.fromCharCode(109,97,107,101,0);
         playlistu.push(championc.length);
         championc = "3";
         countryK = !countryK;
         expiredX = `${((countryK ? 1 : 4))}`;
         foregroundD += `${((countryK ? 1 : 5))}`;
         if (regeng0) {
            break;
         }
      } while (regeng0 && (3 <= annerx.length));
          let thumbnaily = String.fromCharCode(97,117,100,105,111,0);
         trasht -= animationF.length + 3;
         thumbnaily += "2";
      let halfi = 5841891.0 <= trasht;
      do {
         trasht += 3;
         if (halfi) {
            break;
         }
      } while (halfi && ((trasht / (Math.max(2, animationF.length))) > 2.64 && 1 > (animationF.length / (Math.max(2, parseInt(`${trasht}`))))));
          let lessW = 1.0;
          let tempx = String.fromCharCode(111,119,110,108,111,97,100,0);
         trasht *= (annerx == String.fromCharCode(122,0) ? annerx.length : parseInt(`${lessW}`));
         lessW *= tempx.length ^ tempx.length;
          let langkeyT = 5;
          let reportY = false;
         animationF.push(3 << (Math.min(4, animationF.length)));
         langkeyT ^= 2;
         reportY = !reportY;
      let reportv = 8436373 <= playlistu.length;
      do {
         playlistu.push(parseInt(`${trasht}`));
         if (reportv) {
            break;
         }
      } while ((annerx.length >= playlistu.length) && reportv);
      while (3.92 > (trasht / 4.64)) {
          let saveW = 5.0;
         annerx += `${playlistu.length}`;
         saveW *= 3 << (Math.min(Math.abs(parseInt(`${saveW}`)), 5));
         break;
      }
       let filedX: Map<any, any> = new Map([[String.fromCharCode(111,95,52,53,95,114,103,98,112,108,117,115,0),157], [String.fromCharCode(99,109,97,112,0),593], [String.fromCharCode(115,112,114,105,116,101,115,95,117,95,52,52,0),553]]);
      while (!annerx.startsWith(`${filedX.size}`)) {
         annerx = "2";
         break;
      }
      gradlev += collectionS.length | 2;
      if (yellowp) {
         break;
      }
   } while (yellowp && (parseInt(`${gradlev}`) < megaphoneS.length));
       let taiwanK = false;
       let modeQ: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,110,110,101,99,116,0),355], [String.fromCharCode(115,104,97,95,97,95,55,56,0),836], [String.fromCharCode(97,95,57,95,112,112,107,104,0),68]]);
      while (modeQ.size == 3 || (3 ^ modeQ.size) == 4) {
         taiwanK = modeQ.size > 71;
         break;
      }
      let dropdownO = taiwanK ? !taiwanK : taiwanK;
      do {
         taiwanK = !taiwanK;
         if (dropdownO) {
            break;
         }
      } while (dropdownO && (modeQ.size < 1 || (1 << (Math.min(2, Math.abs(modeQ.size)))) < 2));
      if (1 >= (4 | modeQ.size)) {
         taiwanK = ((modeQ.size ^ (taiwanK ? 38 : modeQ.size)) < 38);
      }
          let telegramt = true;
          let statisticsb = 5.0;
          let zhuboV = 2.0;
         modeQ = new Map([[`${modeQ.size}`, (modeQ.size + (telegramt ? 4 : 5))]]);
         telegramt = 1.37 <= (zhuboV - statisticsb);
         statisticsb -= parseInt(`${zhuboV}`);
      while (4 == modeQ.size && 3 == (modeQ.size - 4)) {
         modeQ = new Map([[`${modeQ.size}`, modeQ.size]]);
         break;
      }
         taiwanK = !taiwanK;
      collectionS = `${(parseInt(`${blacklistZ}`) | (taiwanK ? 3 : 5))}`;
      megaphoneS = `${home2.length & 3}`;
   let analyticso = 6674936 >= home2.length;
   do {
      home2.push(popupV.length);
      if (analyticso) {
         break;
      }
   } while (analyticso && (4 >= (5 >> (Math.min(1, home2.length))) || (home2.length >> (Math.min(Math.abs(5), 5))) >= 4));
   let pressure4 = 7043787.0 <= blacklistZ;
   do {
      blacklistZ -= parseFloat(`${3}`);
      if (pressure4) {
         break;
      }
   } while (((blacklistZ / (Math.max(5.20, 9))) >= 5.87) && pressure4);
       let selectionE = 5;
       let vieweri: Array<any> = [46, 959];
       let mappingb: Array<any> = [777, 389];
         selectionE += selectionE;
      let minivodo = selectionE <= 8626602;
      do {
         selectionE -= vieweri.length & mappingb.length;
         if (minivodo) {
            break;
         }
      } while ((1 < mappingb.length) && minivodo);
         selectionE |= selectionE;
      if (vieweri.length > selectionE) {
          let thailanda = String.fromCharCode(119,97,108,108,112,97,112,101,114,115,0);
          let resendW: Array<any> = [922, 812, 193];
         selectionE /= Math.max(1, 5);
         thailanda = "2";
         resendW = [3 ^ resendW.length];
      }
      while ((3 * vieweri.length) < 4 && 4 < (3 * mappingb.length)) {
         mappingb = [selectionE / 3];
         break;
      }
       let switch_75v = 1.0;
          let indicatorc = 5.0;
          let filter8 = 2.0;
          let down0: Map<any, any> = new Map([[String.fromCharCode(98,95,54,56,95,116,101,114,109,115,0),693], [String.fromCharCode(97,110,116,105,97,108,105,97,115,101,100,0),322]]);
         selectionE += parseInt(`${filter8}`);
         indicatorc /= Math.max(4, parseFloat(`${3}`));
         down0.set(`${indicatorc}`, 3);
      let mbjscommonI = selectionE >= 7165807;
      do {
         selectionE <<= Math.min(Math.abs(selectionE), 3);
         if (mbjscommonI) {
            break;
         }
      } while (((3 - mappingb.length) <= 4 || (3 - selectionE) <= 4) && mbjscommonI);
      if (1 == (5 - selectionE) || 5 == (selectionE / (Math.max(parseInt(`${switch_75v}`), 2)))) {
         selectionE -= 3 & parseInt(`${switch_75v}`);
      }
      privilegeR += "1";
      traminif /= Math.max(parseFloat(`${1 + usernamec.length}`), 2);
      home2.push(megaphoneS.length);
      gradlev /= Math.max(4, 3 | privilegeR.length);
      reducer5 = "2";
      popupV += `${usernamec.length}`;

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
       let upgradef = String.fromCharCode(114,101,115,105,103,110,105,110,103,0);
    let productB = String.fromCharCode(116,112,101,108,100,115,112,0);
    let short_1q: Array<any> = [500, 279];
    let detailo: Map<any, any> = new Map([[String.fromCharCode(97,100,100,95,112,95,52,50,0),true ], [String.fromCharCode(101,110,116,114,111,112,121,0),false ]]);
    let service4: Array<any> = [93, 152];
    let bingd = 5;
    let shooth = String.fromCharCode(112,114,111,103,114,97,109,95,98,95,51,49,0);
    let zhengpian5 = 1.0;
    let mintegralZ = String.fromCharCode(104,111,116,105,122,111,110,116,108,95,109,95,54,50,0);
    let lnewinterstitialu: Map<any, any> = new Map([[String.fromCharCode(108,95,56,48,95,97,110,105,109,97,116,105,111,110,115,0),562], [String.fromCharCode(97,112,97,99,107,101,116,95,114,95,54,54,0),98]]);
    let configured = 3;
    let chinasameZ = 5.0;
    let hookU = 4.0;
   while ((chinasameZ * 1.30) >= 3.67 || 1 >= (3 & service4.length)) {
       let dangerr = String.fromCharCode(115,99,104,101,100,117,108,101,100,0);
       let away2: Array<any> = [91, 375];
         dangerr += `${away2.length}`;
         dangerr = `${1 & away2.length}`;
         dangerr = `${dangerr.length}`;
          let phoneH = String.fromCharCode(114,116,112,119,0);
          let bannerA = 1;
         away2 = [2];
         phoneH += `${bannerA}`;
         bannerA %= Math.max(4, 2);
          let downloadingH = 2.0;
          let users = 4.0;
          let confirmationX: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,114,97,99,116,111,114,0),String.fromCharCode(115,95,57,57,95,106,112,101,103,105,110,116,0)], [String.fromCharCode(100,111,116,108,111,99,107,95,50,95,54,52,0),String.fromCharCode(112,111,115,115,105,98,108,101,0)], [String.fromCharCode(101,120,116,114,97,100,97,116,97,0),String.fromCharCode(115,111,114,101,99,101,105,118,101,95,116,95,55,54,0)]]);
         away2.push(1);
         downloadingH /= Math.max(parseFloat(`${parseInt(`${users}`)}`), 1);
         users *= parseFloat(`${3}`);
         confirmationX.set(`${downloadingH}`, confirmationX.size);
      for (let r = 0; r < 1; r++) {
         dangerr += `${away2.length / (Math.max(4, dangerr.length))}`;
      }
      chinasameZ /= Math.max(3, parseFloat(`${bingd / 2}`));
      break;
   }
       let placementw: Map<any, any> = new Map([[String.fromCharCode(100,95,53,55,95,102,105,114,101,0),96], [String.fromCharCode(116,101,120,116,117,114,101,115,95,55,95,49,48,0),749], [String.fromCharCode(102,99,109,117,108,0),695]]);
       let condensedD: Array<any> = [896, 838];
      let thumbnailq = placementw.size <= 9197093;
      do {
         placementw = new Map([[`${placementw.size}`, placementw.size]]);
         if (thumbnailq) {
            break;
         }
      } while (thumbnailq && ((condensedD.length >> (Math.min(Math.abs(1), 1))) <= 3 || 1 <= (1 >> (Math.min(2, condensedD.length)))));
      while (placementw.size == 3) {
         placementw = new Map([[`${placementw.size}`, condensedD.length % 2]]);
         break;
      }
         condensedD = [condensedD.length];
       let downloaded2 = String.fromCharCode(109,95,50,54,95,98,112,117,116,115,0);
       let logoutV = String.fromCharCode(113,95,50,52,95,101,116,104,114,101,97,100,105,110,103,0);
          let playp = String.fromCharCode(108,111,115,116,95,53,95,52,53,0);
          let gesturesZ = String.fromCharCode(114,95,54,52,0);
          let faviconY: Map<any, any> = new Map([[String.fromCharCode(103,95,55,48,95,100,101,115,99,112,114,105,112,116,105,111,110,0),String.fromCharCode(115,105,122,101,100,0)], [String.fromCharCode(100,101,115,101,108,101,99,116,101,100,0),String.fromCharCode(105,110,116,101,114,105,116,101,109,0)], [String.fromCharCode(115,115,105,109,0),String.fromCharCode(116,114,97,102,102,105,99,0)]]);
         logoutV += `${playp.length % (Math.max(3, 6))}`;
         playp = `${gesturesZ.length >> (Math.min(Math.abs(3), 5))}`;
         gesturesZ = "2";
         faviconY.set(`${gesturesZ}`, faviconY.size ^ gesturesZ.length);
      if (placementw.size < logoutV.length) {
         logoutV += `${condensedD.length / (Math.max(9, placementw.size))}`;
      }
      chinasameZ += parseFloat(`${mintegralZ.length}`);
   for (let d = 0; d < 3; d++) {
       let gradlewW = String.fromCharCode(116,112,105,100,95,99,95,50,50,0);
       let schedule7 = String.fromCharCode(115,117,98,108,97,121,101,114,115,95,55,95,53,48,0);
       let strG = false;
       let buttonB = String.fromCharCode(103,109,111,99,107,95,119,95,50,49,0);
       let arrowF: Map<any, any> = new Map([[String.fromCharCode(98,95,56,48,95,99,111,109,112,108,101,116,101,100,0),false ], [String.fromCharCode(116,97,103,115,116,114,95,117,95,49,48,48,0),true ], [String.fromCharCode(115,116,97,116,101,109,101,110,116,115,95,100,95,57,50,0),true ]]);
      for (let t = 0; t < 2; t++) {
          let becomeC = String.fromCharCode(105,110,100,101,110,116,0);
          let gifts = 5.0;
          let light8 = true;
          let sigmobf = 3;
         arrowF.set(`${gifts}`, parseInt(`${gifts}`) % (Math.max(becomeC.length, 1)));
         becomeC += "1";
         light8 = 88 <= sigmobf || !light8;
         sigmobf &= 3 % (Math.max(sigmobf, 2));
      }
      while (gradlewW.includes(`${arrowF.size}`)) {
          let matches4 = 5.0;
          let launcherf = false;
         gradlewW += `${3 + parseInt(`${matches4}`)}`;
         matches4 -= parseFloat(`${1}`);
         break;
      }
       let malaysiay: Map<any, any> = new Map([[String.fromCharCode(115,117,110,114,105,115,101,115,101,116,0),String.fromCharCode(101,95,52,49,95,112,108,97,116,102,111,114,109,0)], [String.fromCharCode(98,105,110,100,120,0),String.fromCharCode(117,95,55,51,95,101,120,112,105,114,121,0)]]);
         malaysiay.set(gradlewW, ((strG ? 1 : 4)));
          let stringf = String.fromCharCode(109,106,112,101,103,95,116,95,50,49,0);
         buttonB = `${2 + stringf.length}`;
       let canvasn = 0;
       let regengm = 2;
      while (!Array.from(arrowF.values()).includes(regengm)) {
         regengm *= ((strG ? 3 : 5));
         break;
      }
      let linky = 7794970 >= arrowF.size;
      do {
         arrowF = new Map([[`${strG}`, ((strG ? 5 : 3) >> (Math.min(Math.abs(3), 1)))]]);
         if (linky) {
            break;
         }
      } while (linky && (!strG && (arrowF.size + 5) > 5));
      let handlern = gradlewW == String.fromCharCode(56,118,95,49,114,0);
      do {
          let bottomc: Array<any> = [998, 177];
          let zhengpianP: Map<any, any> = new Map([[String.fromCharCode(119,95,54,51,95,100,105,103,101,115,116,115,0),String.fromCharCode(106,95,53,52,95,119,109,118,100,97,116,97,0)], [String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,0),String.fromCharCode(114,101,115,111,108,118,0)]]);
          let detailsJ = String.fromCharCode(105,110,105,116,0);
         gradlewW = `${regengm}`;
         bottomc.push(1);
         zhengpianP.set(`${bottomc.length}`, bottomc.length * 3);
         detailsJ = `${zhengpianP.size}`;
         if (handlern) {
            break;
         }
      } while ((5 <= gradlewW.length || strG) && handlern);
         strG = schedule7.length == arrowF.size;
         gradlewW += `${arrowF.size}`;
         buttonB = `${malaysiay.size}`;
         canvasn |= 2;
       let downloadS = String.fromCharCode(101,95,49,53,95,97,116,116,97,99,104,0);
      for (let o = 0; o < 1; o++) {
         buttonB = `${buttonB.length - 1}`;
      }
      bingd >>= Math.min(Math.abs(3 << (Math.min(2, Math.abs(parseInt(`${zhengpian5}`))))), 2);
   }
      service4 = [mintegralZ.length];
      mintegralZ = `${shooth.length / (Math.max(1, parseInt(`${zhengpian5}`)))}`;
   for (let u = 0; u < 3; u++) {
       let livew = 3.0;
         livew += parseFloat(`${3 % (Math.max(parseInt(`${livew}`), 4))}`);
      let combineC = 6775499.0 >= livew;
      do {
         livew /= Math.max(parseFloat(`${parseInt(`${livew}`)}`), 4);
         if (combineC) {
            break;
         }
      } while ((1.73 >= (2.30 - livew) && (2.30 - livew) >= 2.87) && combineC);
          let settingi: Array<any> = [159, 951, 180];
         livew += parseFloat(`${settingi.length}`);
      configured *= parseInt(`${livew}`);
   }
   for (let n = 0; n < 1; n++) {
      short_1q.push(3 + parseInt(`${chinasameZ}`));
   }
      shooth += `${upgradef.length}`;
      chinasameZ += parseFloat(`${service4.length * short_1q.length}`);
       let mbsplashj = String.fromCharCode(112,97,115,116,101,108,95,99,95,53,57,0);
      let sansG = mbsplashj == String.fromCharCode(112,120,95,99,0);
      do {
         mbsplashj = "1";
         if (sansG) {
            break;
         }
      } while (sansG && (2 < mbsplashj.length || mbsplashj.length < 2));
      if (mbsplashj.length > 4) {
         mbsplashj += `${(mbsplashj == String.fromCharCode(57,0) ? mbsplashj.length : mbsplashj.length)}`;
      }
      while (mbsplashj.endsWith(`${mbsplashj.length}`)) {
         mbsplashj += `${mbsplashj.length}`;
         break;
      }
      zhengpian5 *= parseFloat(`${bingd | shooth.length}`);

      if (
        autoPlayNext &&
        activeEpisode !== undefined &&
        episodes &&
        activeEpisode < episodes?.url_count - 1
      ) {

      detailo = new Map([[productB, upgradef.length]]);
   while (2 == (bingd / (Math.max(2, 6))) || 1 == (2 / (Math.max(5, bingd)))) {
       let delegate_vq = String.fromCharCode(108,105,98,118,112,120,95,56,95,56,48,0);
         delegate_vq += `${delegate_vq.length << (Math.min(5, delegate_vq.length))}`;
          let userL: Array<any> = [274, 462, 789];
          let pingM = false;
         delegate_vq = `${delegate_vq.length}`;
         userL = [1];
         pingM = userL.length <= 7;
      let halfC = 5667290 <= delegate_vq.length;
      do {
         delegate_vq += "1";
         if (halfC) {
            break;
         }
      } while (halfC && (delegate_vq.length > 4));
      productB += `${productB.length}`;
      break;
   }
   let firebaseq = bingd >= 6826211;
   do {
       let gestures_ = String.fromCharCode(121,95,57,56,95,97,100,116,115,116,111,97,115,99,0);
      let configU = gestures_.length >= 5373693;
      do {
         gestures_ = `${gestures_.length % (Math.max(3, 5))}`;
         if (configU) {
            break;
         }
      } while ((gestures_.startsWith(gestures_)) && configU);
          let anytimep = String.fromCharCode(106,95,49,50,95,109,97,110,97,103,101,115,0);
         gestures_ = `${1 + anytimep.length}`;
          let policyk = String.fromCharCode(98,95,53,54,0);
         gestures_ += `${policyk.length}`;
      bingd -= 2;
      if (firebaseq) {
         break;
      }
   } while (firebaseq && ((4 & bingd) > 2 || (4 & lnewinterstitialu.size) > 3));
   while (2.37 < (3.40 + zhengpian5) || 3.46 < (zhengpian5 + 3.40)) {
       let i_player_: Array<any> = [403, 228];
       let blackm = 5;
          let updatesd = String.fromCharCode(119,95,56,53,0);
          let forwardC = 2.0;
         i_player_ = [1];
         updatesd += `${parseInt(`${forwardC}`) % 3}`;
         forwardC *= parseFloat(`${parseInt(`${forwardC}`) % (Math.max(6, updatesd.length))}`);
         blackm |= 3 * blackm;
      zhengpian5 /= Math.max(3, parseFloat(`${bingd % (Math.max(parseInt(`${chinasameZ}`), 5))}`));
      break;
   }
   while (bingd > productB.length) {
      bingd |= service4.length >> (Math.min(1, Math.abs(configured)));
      break;
   }
   if ((1 * detailo.size) <= 4 || 1 <= (detailo.size * 1)) {
      lnewinterstitialu = new Map([[mintegralZ, parseInt(`${zhengpian5}`) / (Math.max(1, 4))]]);
   }
   let buildD = 6209857 >= short_1q.length;
   do {
       let cornerd = 0.0;
       let megaphoneA = 3.0;
       let moreq = 4;
      while ((cornerd / 3.63) > 1.19) {
          let unselectedi = 1;
          let changer = String.fromCharCode(99,101,110,116,101,114,0);
          let filedY: Array<any> = [639, 979, 297];
          let internetd = 3.0;
         moreq |= parseInt(`${cornerd}`) / 3;
         unselectedi |= filedY.length >> (Math.min(Math.abs(3), 3));
         changer += `${2 + parseInt(`${internetd}`)}`;
         filedY = [3];
         internetd += parseFloat(`${unselectedi | parseInt(`${internetd}`)}`);
         break;
      }
         moreq <<= Math.min(4, Math.abs(parseInt(`${megaphoneA}`) ^ parseInt(`${cornerd}`)));
          let sidem: Map<any, any> = new Map([[String.fromCharCode(117,110,114,101,103,105,115,116,101,114,0),String.fromCharCode(110,97,103,108,101,0)], [String.fromCharCode(109,95,53,52,95,97,120,105,115,0),String.fromCharCode(115,116,97,116,105,115,116,105,99,95,112,95,57,50,0)], [String.fromCharCode(109,95,52,57,95,103,102,105,110,116,0),String.fromCharCode(120,95,51,55,95,118,101,108,111,99,105,116,121,0)]]);
          let sortl = 5;
          let fastforwardd = String.fromCharCode(101,115,115,101,110,99,101,95,100,95,54,53,0);
         megaphoneA -= parseFloat(`${parseInt(`${megaphoneA}`) >> (Math.min(1, Math.abs(moreq)))}`);
         sidem = new Map([[fastforwardd, sortl | 3]]);
         sortl /= Math.max(4, (String.fromCharCode(48,0) == fastforwardd ? sidem.size : fastforwardd.length));
         megaphoneA *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${megaphoneA}`)), 4))}`);
         moreq -= moreq;
      short_1q = [2];
      if (buildD) {
         break;
      }
   } while ((2 < (short_1q.length / 5)) && buildD);
      service4.push((upgradef == String.fromCharCode(75,0) ? upgradef.length : productB.length));
   while ((configured & 5) == 5 || (configured % 5) == 3) {
       let wind_ = 4.0;
       let championW = String.fromCharCode(98,100,108,116,0);
       let with_gt = String.fromCharCode(105,95,53,55,95,112,115,110,114,104,118,115,0);
       let untick7 = String.fromCharCode(98,95,51,48,95,101,120,112,111,110,101,110,116,0);
         with_gt += `${(String.fromCharCode(76,0) == with_gt ? untick7.length : with_gt.length)}`;
         championW = `${untick7.length}`;
      let groupM = untick7 == String.fromCharCode(117,113,102,100,113,101,117,56,0);
      do {
          let catagoryt: Map<any, any> = new Map([[String.fromCharCode(104,105,110,116,101,100,0),true ], [String.fromCharCode(114,103,98,110,95,56,95,53,49,0),false ], [String.fromCharCode(101,95,52,48,95,109,100,101,99,0),false ]]);
          let searchbarN = String.fromCharCode(122,111,111,109,101,100,95,53,95,54,53,0);
          let filed0: Array<any> = [71, 524, 52];
          let mini3 = String.fromCharCode(101,110,104,97,110,99,101,100,95,99,95,57,48,0);
         untick7 = `${with_gt.length - championW.length}`;
         catagoryt = new Map([[`${filed0.length}`, filed0.length]]);
         searchbarN = "2";
         mini3 = `${mini3.length}`;
         if (groupM) {
            break;
         }
      } while ((2.54 > (parseFloat(`${untick7.length}`) + wind_) || (4 - untick7.length) > 4) && groupM);
         championW = `${untick7.length}`;
         with_gt += `${(String.fromCharCode(66,0) == championW ? untick7.length : championW.length)}`;
       let mbnativeadvancedU = false;
       let hearta = false;
          let crownh = 4.0;
          let connectionv: Map<any, any> = new Map([[String.fromCharCode(118,95,57,95,116,114,101,110,100,108,105,110,101,0),922], [String.fromCharCode(106,95,49,54,95,99,104,97,116,115,0),589]]);
         mbnativeadvancedU = mbnativeadvancedU && hearta;
         crownh *= 1 & parseInt(`${crownh}`);
         connectionv.set(`${crownh}`, parseInt(`${crownh}`));
      if (!mbnativeadvancedU) {
          let infoa = String.fromCharCode(117,110,112,97,99,107,108,111,0);
          let clockg = 1;
          let nativeexe = 5;
          let streaming6 = String.fromCharCode(112,111,105,110,116,101,114,115,95,52,95,54,49,0);
          let package_6K = 1.0;
         with_gt += `${parseInt(`${package_6K}`)}`;
         infoa = `${nativeexe << (Math.min(Math.abs(1), 1))}`;
         clockg -= 2 | clockg;
         nativeexe %= Math.max(5, clockg | streaming6.length);
         streaming6 = `${infoa.length}`;
         package_6K -= parseFloat(`${infoa.length % (Math.max(9, clockg))}`);
      }
          let splashA = 4.0;
         with_gt += "2";
         splashA *= parseInt(`${splashA}`);
          let constantsK: Array<any> = [911, 66];
         with_gt = `${(String.fromCharCode(84,0) == championW ? parseInt(`${wind_}`) : championW.length)}`;
         constantsK = [constantsK.length | constantsK.length];
         mbnativeadvancedU = untick7.startsWith(`${hearta}`);
      if (mbnativeadvancedU && !hearta) {
          let router8: Array<any> = [350, 740, 543];
          let statsX = 1;
         hearta = String.fromCharCode(77,0) == untick7;
         router8.push(3 * router8.length);
         statsX ^= router8.length;
      }
      chinasameZ += parseFloat(`${3}`);
      break;
   }
   for (let l = 0; l < 2; l++) {
      zhengpian5 += parseFloat(`${upgradef.length & 2}`);
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
       let confirmationP = String.fromCharCode(121,95,55,51,95,109,112,108,97,110,101,0);
    let langkeyF: Map<any, any> = new Map([[String.fromCharCode(99,121,117,118,0),63], [String.fromCharCode(113,95,49,51,95,98,101,99,97,117,115,101,0),998]]);
    let filterA = 3.0;
    let activeo = String.fromCharCode(102,95,49,56,95,99,114,111,115,115,111,118,101,114,0);
    let firebasei = 5.0;
    let promotionC = 5;
    let videocommona = String.fromCharCode(118,105,115,105,98,105,108,105,116,121,0);
    let refreshJ = String.fromCharCode(108,95,53,48,95,99,108,111,115,101,100,0);
    let floaterx = 0.0;
    let reactnativejsD: Array<any> = [476, 51, 548];
       let acceptedu = String.fromCharCode(104,95,49,51,95,114,101,115,116,114,105,99,116,105,111,110,115,0);
         acceptedu += `${(acceptedu == String.fromCharCode(85,0) ? acceptedu.length : acceptedu.length)}`;
         acceptedu += `${acceptedu.length}`;
      if (!acceptedu.endsWith(acceptedu)) {
         acceptedu = `${(acceptedu == String.fromCharCode(121,0) ? acceptedu.length : acceptedu.length)}`;
      }
      langkeyF = new Map([[refreshJ, 3]]);
      langkeyF.set(`${filterA}`, (String.fromCharCode(67,0) == refreshJ ? refreshJ.length : parseInt(`${filterA}`)));
      langkeyF = new Map([[`${firebasei}`, videocommona.length ^ parseInt(`${firebasei}`)]]);
   let downloadingn = activeo == String.fromCharCode(118,48,54,118,99,118,95,106,100,51,0);
   do {
       let filledV = String.fromCharCode(108,105,109,105,116,101,100,0);
       let referrerl = String.fromCharCode(108,105,98,118,111,114,98,105,115,0);
       let condensed7 = String.fromCharCode(112,97,114,115,101,114,115,0);
       let whatsapp2 = String.fromCharCode(97,95,51,57,95,112,114,105,111,114,105,116,121,113,0);
      while (3 > referrerl.length) {
         whatsapp2 += "2";
         break;
      }
       let favorite8 = String.fromCharCode(115,116,97,98,105,108,105,122,101,0);
      while (condensed7 != String.fromCharCode(51,0)) {
         favorite8 += `${condensed7.length ^ 1}`;
         break;
      }
          let bodanm = 4.0;
          let soundG = String.fromCharCode(119,95,51,49,95,119,111,114,100,0);
          let annerL = 0.0;
         referrerl += `${whatsapp2.length >> (Math.min(Math.abs(2), 5))}`;
         bodanm /= Math.max(3, 3 | parseInt(`${annerL}`));
         soundG += `${parseInt(`${annerL}`) | soundG.length}`;
       let p_viewx: Map<any, any> = new Map([[String.fromCharCode(99,95,55,49,95,109,112,101,103,97,117,100,105,111,100,101,99,104,101,97,100,101,114,0),486], [String.fromCharCode(119,95,54,50,95,117,110,115,97,118,101,0),806], [String.fromCharCode(99,105,114,99,0),16]]);
       let showy: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,114,114,111,114,95,116,95,56,48,0),99], [String.fromCharCode(116,100,115,102,0),829], [String.fromCharCode(112,114,111,120,105,101,115,95,51,95,57,56,0),133]]);
      let iconD = condensed7.length >= 7711058;
      do {
         condensed7 = `${p_viewx.size}`;
         if (iconD) {
            break;
         }
      } while ((3 == (3 % (Math.max(9, condensed7.length))) && (3 % (Math.max(5, showy.size))) == 4) && iconD);
      while (1 <= showy.size) {
          let hongkongV: Map<any, any> = new Map([[String.fromCharCode(115,104,111,114,116,101,115,116,0),String.fromCharCode(114,101,98,117,99,107,101,116,0)], [String.fromCharCode(116,117,110,101,95,98,95,52,51,0),String.fromCharCode(113,95,53,95,115,105,110,113,105,0)], [String.fromCharCode(97,116,116,97,99,104,109,101,110,116,0),String.fromCharCode(114,101,115,105,115,116,97,110,99,101,95,55,95,49,53,0)]]);
         p_viewx = new Map([[favorite8, favorite8.length | referrerl.length]]);
         hongkongV.set(`${hongkongV.size}`, hongkongV.size);
         break;
      }
         p_viewx.set(whatsapp2, 1 ^ whatsapp2.length);
         p_viewx = new Map([[favorite8, referrerl.length | 2]]);
          let becomeI = String.fromCharCode(120,112,101,114,105,109,101,110,116,97,108,0);
         condensed7 += `${becomeI.length}`;
      if (filledV.startsWith(`${p_viewx.size}`)) {
         filledV = "2";
      }
      while (2 == referrerl.length) {
         referrerl = `${filledV.length % 2}`;
         break;
      }
      activeo += `${whatsapp2.length + parseInt(`${filterA}`)}`;
      if (downloadingn) {
         break;
      }
   } while ((confirmationP.length == 2) && downloadingn);
   let winda = promotionC <= 9151460;
   do {
      promotionC %= Math.max(parseInt(`${firebasei}`), 5);
      if (winda) {
         break;
      }
   } while (winda && (langkeyF.get(`${promotionC}`) != null));
       let sheetw = 1;
       let nalyticsv = String.fromCharCode(112,99,109,98,0);
      while (1 >= (nalyticsv.length % (Math.max(4, 9)))) {
         sheetw >>= Math.min(1, Math.abs((nalyticsv == String.fromCharCode(55,0) ? sheetw : nalyticsv.length)));
         break;
      }
         sheetw /= Math.max(1, sheetw - 3);
       let greyk = String.fromCharCode(116,95,51,53,95,101,113,117,97,116,97,98,108,101,0);
       let combinedq = String.fromCharCode(112,97,114,115,105,110,103,95,97,95,56,54,0);
         sheetw |= (greyk == String.fromCharCode(114,0) ? greyk.length : sheetw);
         combinedq += `${greyk.length}`;
         greyk = `${greyk.length}`;
      confirmationP += `${confirmationP.length}`;
   while ((promotionC - videocommona.length) <= 1 && 3 <= (promotionC - 1)) {
      promotionC |= 3 ^ parseInt(`${filterA}`);
      break;
   }
   if (2.78 > (floaterx * firebasei) && 2.78 > (floaterx * firebasei)) {
      floaterx *= activeo.length;
   }
   for (let n = 0; n < 2; n++) {
       let tailQ = String.fromCharCode(115,95,51,0);
       let nextS: Array<any> = [435, 736, 42];
       let malaysiaS = 5.0;
       let promotion1: Array<any> = [990, 272];
         malaysiaS += nextS.length;
         tailQ = "3";
      for (let i = 0; i < 1; i++) {
         promotion1.push(nextS.length);
      }
         nextS.push((tailQ == String.fromCharCode(116,0) ? tailQ.length : nextS.length));
      while ((nextS.length % (Math.max(4, tailQ.length))) > 5 || 4 > (nextS.length % 5)) {
         tailQ += `${(String.fromCharCode(103,0) == tailQ ? nextS.length : tailQ.length)}`;
         break;
      }
      while (1 == (nextS.length * 1)) {
          let submitc: Array<any> = [String.fromCharCode(112,111,115,105,116,105,111,110,115,95,49,95,56,51,0), String.fromCharCode(114,101,102,99,111,117,110,116,101,100,0)];
          let redirecti = 3.0;
          let leagueG = String.fromCharCode(122,95,54,51,95,114,101,118,105,101,119,115,0);
          let aboutW = 5.0;
          let crossL = String.fromCharCode(101,108,101,109,101,110,116,115,0);
         nextS.push(tailQ.length);
         submitc = [parseInt(`${aboutW}`) * 1];
         redirecti += parseInt(`${redirecti}`);
         leagueG = `${submitc.length}`;
         aboutW /= Math.max(submitc.length | 1, 1);
         crossL += `${3 << (Math.min(5, Math.abs(parseInt(`${aboutW}`))))}`;
         break;
      }
      let footballQ = 5501874.0 >= malaysiaS;
      do {
         malaysiaS -= promotion1.length;
         if (footballQ) {
            break;
         }
      } while (footballQ && (4.33 <= malaysiaS));
         promotion1.push(3);
      if (nextS.length > tailQ.length) {
          let uploadv = String.fromCharCode(115,104,101,101,116,0);
          let becomem = 3;
          let orientation2 = String.fromCharCode(114,116,112,112,114,111,116,111,95,104,95,57,52,0);
         tailQ = `${becomem}`;
         uploadv = "1";
         becomem <<= Math.min(4, Math.abs(3));
         orientation2 += `${orientation2.length}`;
      }
      if (malaysiaS == promotion1.length) {
         malaysiaS *= 1 - promotion1.length;
      }
          let downj: Map<any, any> = new Map([[String.fromCharCode(118,95,48,95,97,117,116,104,111,114,0),428], [String.fromCharCode(109,97,107,101,109,97,99,112,107,103,95,112,95,52,52,0),697]]);
         nextS = [2];
         downj.set(`${downj.size}`, downj.size);
      while (5 <= (4 ^ nextS.length) && (nextS.length - malaysiaS) <= 2.75) {
         malaysiaS += parseInt(`${malaysiaS}`);
         break;
      }
      activeo = `${promotion1.length}`;
   }
   while ((3 >> (Math.min(1, confirmationP.length))) < 1 && 1 < (3 >> (Math.min(1, confirmationP.length)))) {
      promotionC >>= Math.min(3, Math.abs(1));
      break;
   }
      refreshJ = "2";
   while ((1 << (Math.min(1, Math.abs(langkeyF.size)))) > 5 && 2.1 > (floaterx / (Math.max(2.98, 2)))) {
      langkeyF.set(`${floaterx}`, parseInt(`${filterA}`));
      break;
   }
      refreshJ += `${parseInt(`${filterA}`) >> (Math.min(Math.abs(parseInt(`${floaterx}`)), 1))}`;
      firebasei -= refreshJ.length % (Math.max(1, 4));
   if (2 <= (langkeyF.size / (Math.max(refreshJ.length, 1)))) {
       let chartv: Map<any, any> = new Map([[String.fromCharCode(102,114,101,113,115,95,121,95,52,51,0),919], [String.fromCharCode(111,95,50,49,0),946], [String.fromCharCode(103,112,116,111,112,116,115,0),501]]);
       let zoomF = true;
       let downt = String.fromCharCode(108,95,51,95,97,100,106,117,115,116,101,114,0);
       let catalogS = String.fromCharCode(101,95,53,48,95,97,110,109,114,0);
          let floater7 = 4;
          let s_managerx = String.fromCharCode(108,95,53,51,95,119,119,119,0);
         downt = `${chartv.size + floater7}`;
         floater7 &= s_managerx.length;
         s_managerx += `${s_managerx.length}`;
      let white2 = 8668544 >= downt.length;
      do {
         downt = `${downt.length}`;
         if (white2) {
            break;
         }
      } while (white2 && (2 >= downt.length));
      while (3 > catalogS.length || zoomF) {
         zoomF = chartv.size == 71;
         break;
      }
          let mbsplashb = 2;
          let stats3 = String.fromCharCode(107,95,52,57,95,100,101,99,111,100,101,114,115,0);
          let guider = true;
         downt = `${((guider ? 1 : 3))}`;
         mbsplashb /= Math.max((String.fromCharCode(81,0) == stats3 ? mbsplashb : stats3.length), 3);
         guider = stats3 == String.fromCharCode(90,0);
         chartv = new Map([[`${chartv.size}`, chartv.size ^ 2]]);
      let predictionu = catalogS == String.fromCharCode(118,111,107,104,107,109,0);
      do {
          let pingO = String.fromCharCode(115,97,109,112,108,101,114,95,49,95,55,48,0);
          let paginationL = 1;
          let gemfilen = String.fromCharCode(119,101,97,107,95,117,95,49,56,0);
          let pressureU = 2.0;
          let flyer8 = String.fromCharCode(104,95,56,56,95,114,111,108,108,105,110,103,0);
         catalogS = `${(paginationL | (zoomF ? 3 : 5))}`;
         pingO += `${parseInt(`${pressureU}`) << (Math.min(flyer8.length, 1))}`;
         paginationL &= flyer8.length & 1;
         gemfilen = `${gemfilen.length & parseInt(`${pressureU}`)}`;
         if (predictionu) {
            break;
         }
      } while (predictionu && (!catalogS.includes(`${chartv.size}`)));
         chartv.set(downt, 3);
         chartv = new Map([[`${zoomF}`, downt.length]]);
      langkeyF.set(`${floaterx}`, parseInt(`${floaterx}`) % 2);
   }
   for (let g = 0; g < 1; g++) {
       let routerK = true;
      for (let b = 0; b < 1; b++) {
          let umengR = 4;
          let viewerM = false;
          let moduleq: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,105,109,103,97,114,105,95,101,95,55,56,0),String.fromCharCode(115,112,101,99,116,114,97,0)], [String.fromCharCode(111,112,99,111,100,101,115,95,105,95,53,53,0),String.fromCharCode(115,95,57,50,95,103,101,116,99,114,101,100,0)]]);
          let greenh = String.fromCharCode(101,95,57,55,95,116,104,114,101,97,100,101,100,0);
          let fastforward8 = String.fromCharCode(115,101,116,115,111,99,107,111,112,116,95,53,95,50,0);
         routerK = 37 <= fastforward8.length;
         umengR /= Math.max(2, (String.fromCharCode(108,0) == greenh ? moduleq.size : greenh.length));
         viewerM = 89 >= umengR;
         moduleq = new Map([[`${moduleq.size}`, (moduleq.size >> (Math.min(4, Math.abs((viewerM ? 2 : 2)))))]]);
         fastforward8 += `${umengR | 3}`;
      }
       let gradleu: Array<any> = [String.fromCharCode(114,101,115,117,108,116,105,110,103,95,105,95,54,57,0), String.fromCharCode(98,105,116,120,95,115,95,56,49,0)];
          let membershipM: Array<any> = [String.fromCharCode(122,95,57,56,95,97,108,112,104,97,108,101,115,115,0), String.fromCharCode(117,95,54,52,95,114,101,110,111,114,109,0), String.fromCharCode(116,99,112,95,121,95,54,48,0)];
         routerK = (100 <= (gradleu.length ^ (!routerK ? gradleu.length : 100)));
         membershipM = [membershipM.length];
      activeo += "3";
   }

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
