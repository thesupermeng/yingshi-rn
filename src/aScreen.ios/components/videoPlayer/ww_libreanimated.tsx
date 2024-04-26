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
import VideoControlsOverlay from "./ww_reactnativeratings";
import WebView from "react-native-webview";
import FastImage from "react-native-fast-image";
import FastForwardProgressIcon from "@static/images/halfTooltipsDplus.svg";
import RewindProgressIcon from "@static/images/previewMappingZoom.svg";

import { incrementSportWatchTime, setFullscreenState } from "@redux/actions/ww_hash";

import {
  wwRecommendationItem,
  wwKsadStore,
  wwControl,
} from "@type/ww_dycreator_result";
import VideoWithControls from "./ww_baseline_complete";
import { useDispatch } from "react-redux";
import { useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import { NON_VIP_STREAM_TIME_SECONDS } from "@utility/ww_icon";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";

interface wwIndexDice {
  vod_url?: string;
  vodTitle?: string;
  currentTimeRef?: any;
  initialStartTime?: number;
  videoType?: string;
  vod_source?: any;
  onBack?: () => any;
  useWebview?: boolean;
  onEpisodeChange?: any;
  episodes?: wwKsadStore;
  activeEpisode?: number;
  rangeSize?: number;
  autoPlayNext?: boolean;
  onShare?: () => any;
  movieList?: wwControl[];
  showGuide?: boolean;
  showMoreType?: "episodes" | "streams" | "movies" | "none";
  streams?: wwRecommendationItem[];
  isFetchingRecommendedMovies?: boolean;
  appOrientation: string;
  devicesOrientation: string;
  lockOrientation: (orientation: string) => void;
  handleSaveVod?: any;
  onReadyForDisplay?: () => void;
}

type wwSchedulerBaseline = {
  showControls: () => void;
  hideControls: () => void;
  toggleControls: () => void;
  isVisible: boolean;
  hideSlider: () => void;
  isLocked: boolean;
  toggleLock: () => void;
};

export type wwBinddatasHandler = {
  setPause: (param: boolean) => void;
  isPaused: boolean;
  setCurrentTime: (time: number) => void;
};

export default forwardRef<wwBinddatasHandler, wwIndexDice>(
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
       let whitep = false;
    let libjsinspectorg = 5.0;
    let clockP = 2.0;
    let weiboT = 5;
    let typesn = String.fromCharCode(108,95,52,55,95,115,108,97,115,104,105,110,103,0);
    let c_managerj = true;
    let minimizea = 5.0;
    let signinupB = String.fromCharCode(116,95,56,50,95,97,112,112,118,101,121,111,114,0);
    let iconbackwhiteH = 2;
    let rightV = String.fromCharCode(112,95,55,57,95,100,101,97,100,105,110,101,0);
    let disconnectedlogoT = 4.0;
    let modal3 = String.fromCharCode(98,114,117,116,101,102,111,114,99,101,95,109,95,57,49,0);
    let awayteamfield2 = 3;
       let sortW = 1.0;
      for (let z = 0; z < 3; z++) {
         sortW *= parseFloat(`${parseInt(`${sortW}`)}`);
      }
      let telegramA = 9385691.0 <= sortW;
      do {
         sortW += parseFloat(`${2}`);
         if (telegramA) {
            break;
         }
      } while (telegramA && ((sortW * sortW) == 2.8));
      let clockG = sortW <= 6012770.0;
      do {
          let themeI: Array<any> = [178, 973, 858];
          let modityx = String.fromCharCode(116,104,101,97,116,101,114,95,54,95,51,56,0);
         sortW *= parseFloat(`${modityx.length / 1}`);
         themeI = [themeI.length];
         modityx = "3";
         if (clockG) {
            break;
         }
      } while ((sortW <= 1.10) && clockG);
      iconbackwhiteH -= parseInt(`${libjsinspectorg}`) << (Math.min(5, Math.abs(parseInt(`${clockP}`))));
      minimizea /= Math.max(parseFloat(`${iconbackwhiteH / 1}`), 4);
   let sell7 = 9694789 >= rightV.length;
   do {
       let canvasl = 1;
       let chartT = String.fromCharCode(116,117,114,98,117,108,101,110,99,101,95,97,95,52,53,0);
       let eventsplashE: Map<any, any> = new Map([[String.fromCharCode(100,111,108,108,97,114,95,117,95,50,57,0),false ], [String.fromCharCode(101,97,99,104,95,106,95,56,52,0),true ], [String.fromCharCode(122,95,57,56,95,103,105,103,97,98,121,116,101,115,0),false ]]);
       let catalogd = 0.0;
         eventsplashE.set(`${catalogd}`, eventsplashE.size);
      while (chartT.includes(`${eventsplashE.size}`)) {
         chartT += `${eventsplashE.size ^ 2}`;
         break;
      }
          let viewere = String.fromCharCode(108,111,103,103,105,110,103,95,115,95,54,54,0);
          let librrcj = 4;
         chartT += "1";
         viewere = "2";
         librrcj *= viewere.length;
       let uploadF = true;
       let sharedo = true;
          let colorsD = true;
          let privacya = String.fromCharCode(97,95,56,53,95,109,111,114,112,104,101,100,0);
         catalogd *= parseFloat(`${parseInt(`${catalogd}`) & canvasl}`);
         colorsD = ((privacya.length + (!colorsD ? 55 : privacya.length)) == 55);
       let zhubo5: Array<any> = [963, 866, 710];
       let down3: Array<any> = [677, 888];
         eventsplashE.set(chartT, 3);
      for (let l = 0; l < 3; l++) {
         catalogd /= Math.max(1, (parseFloat(`${3 * (uploadF ? 1 : 5)}`)));
      }
       let buttonh = String.fromCharCode(115,95,54,56,95,114,101,102,101,114,0);
         eventsplashE = new Map([[buttonh, buttonh.length]]);
         chartT = "3";
       let release_03 = String.fromCharCode(117,116,104,111,114,95,119,95,53,51,0);
       let defaultlogon = String.fromCharCode(115,117,99,99,101,101,100,101,100,95,102,95,56,55,0);
      rightV = `${1 ^ chartT.length}`;
      if (sell7) {
         break;
      }
   } while ((1.23 < (4.92 / (Math.max(3, disconnectedlogoT)))) && sell7);
   while (disconnectedlogoT > 2.82) {
      disconnectedlogoT *= parseInt(`${disconnectedlogoT}`) | parseInt(`${clockP}`);
      break;
   }
   for (let o = 0; o < 1; o++) {
      iconbackwhiteH -= parseInt(`${disconnectedlogoT}`);
   }
   if (!signinupB.includes(`${c_managerj}`)) {
       let rootz: Array<any> = [720, 551, 952];
       let long__7b = String.fromCharCode(115,117,98,109,111,100,101,108,115,95,99,95,52,57,0);
          let infoS = 3.0;
          let nalytics9 = 0.0;
          let trashn = 4.0;
         rootz.push(parseInt(`${nalytics9}`));
         infoS -= parseInt(`${trashn}`);
         nalytics9 *= parseFloat(`${parseInt(`${trashn}`) - parseInt(`${infoS}`)}`);
      let minimizev = long__7b == String.fromCharCode(109,118,101,56,113,118,0);
      do {
         long__7b = `${2 << (Math.min(5, long__7b.length))}`;
         if (minimizev) {
            break;
         }
      } while ((1 <= (long__7b.length >> (Math.min(4, rootz.length))) && (long__7b.length >> (Math.min(1, rootz.length))) <= 1) && minimizev);
         long__7b = `${3 % (Math.max(5, rootz.length))}`;
          let countdownR = false;
         long__7b += `${long__7b.length}`;
         countdownR = (!countdownR ? !countdownR : !countdownR);
          let playercommonI = false;
         long__7b = `${((playercommonI ? 5 : 5))}`;
      for (let y = 0; y < 3; y++) {
         long__7b += "1";
      }
      signinupB = `${rightV.length}`;
   }
   if ((signinupB.length - 3) >= 3) {
       let backY = String.fromCharCode(114,101,115,101,114,118,101,95,48,95,48,0);
       let alertY = String.fromCharCode(111,118,101,114,114,105,100,100,101,110,95,113,95,52,52,0);
       let dialoge: Map<any, any> = new Map([[String.fromCharCode(113,95,53,49,95,121,117,118,103,98,114,112,0),815], [String.fromCharCode(117,110,102,114,101,101,122,101,95,99,95,57,51,0),775], [String.fromCharCode(114,95,56,49,95,116,114,97,110,115,108,105,116,101,114,97,116,101,100,0),348]]);
       let manifestL = String.fromCharCode(103,101,110,99,102,103,115,95,114,95,50,57,0);
          let questO = String.fromCharCode(100,95,51,50,95,114,101,109,111,118,105,110,103,0);
          let screen5 = String.fromCharCode(118,95,57,48,95,111,116,111,105,0);
         manifestL = "2";
         questO += `${questO.length}`;
         screen5 += `${questO.length % (Math.max(2, 8))}`;
      for (let f = 0; f < 1; f++) {
         alertY = "2";
      }
          let typesS: Map<any, any> = new Map([[String.fromCharCode(102,95,50,53,95,99,97,99,104,101,100,0),true ], [String.fromCharCode(107,95,53,57,95,102,114,97,109,101,100,0),true ]]);
         alertY = "3";
         typesS.set(`${typesS.size}`, typesS.size % (Math.max(typesS.size, 3)));
         dialoge.set(manifestL, dialoge.size);
          let hongkong6 = 1.0;
          let regengc: Map<any, any> = new Map([[String.fromCharCode(119,95,50,57,95,99,111,109,109,97,110,100,115,0),75], [String.fromCharCode(100,105,109,109,105,110,103,95,117,95,56,53,0),513]]);
         manifestL += `${parseInt(`${hongkong6}`) << (Math.min(manifestL.length, 4))}`;
         hongkong6 += parseFloat(`${2}`);
         regengc.set(`${regengc.size}`, regengc.size >> (Math.min(Math.abs(1), 4)));
      for (let j = 0; j < 1; j++) {
         dialoge = new Map([[manifestL, 3 ^ manifestL.length]]);
      }
      let textlayoutmanagerx = 5607729 <= manifestL.length;
      do {
         manifestL = `${(backY == String.fromCharCode(56,0) ? dialoge.size : backY.length)}`;
         if (textlayoutmanagerx) {
            break;
         }
      } while ((backY != String.fromCharCode(71,0) || manifestL.length == 5) && textlayoutmanagerx);
      if (manifestL.startsWith(`${dialoge.size}`)) {
          let controlsw: Array<any> = [972, 534];
         dialoge.set(manifestL, manifestL.length);
         controlsw.push(controlsw.length << (Math.min(Math.abs(3), 5)));
      }
         alertY = `${backY.length | 2}`;
      while (dialoge.size <= alertY.length) {
          let searchbarp = String.fromCharCode(115,95,53,53,95,115,116,111,112,112,105,110,103,0);
          let tickedu = 2.0;
          let bellq: Array<any> = [914, 664];
         alertY += `${dialoge.size}`;
         searchbarp += `${(searchbarp == String.fromCharCode(52,0) ? searchbarp.length : parseInt(`${tickedu}`))}`;
         tickedu -= parseFloat(`${parseInt(`${tickedu}`) | searchbarp.length}`);
         bellq = [(searchbarp == String.fromCharCode(103,0) ? parseInt(`${tickedu}`) : searchbarp.length)];
         break;
      }
         manifestL += `${3 & manifestL.length}`;
      if (!alertY.startsWith(`${backY.length}`)) {
         backY = `${backY.length - alertY.length}`;
      }
      weiboT <<= Math.min(Math.abs(2), 5);
   }
       let nterstitialw = true;
       let mountingE: Map<any, any> = new Map([[String.fromCharCode(101,120,112,111,110,101,110,116,95,50,95,50,52,0),String.fromCharCode(114,101,115,95,122,95,52,54,0)], [String.fromCharCode(101,95,51,51,95,108,97,117,110,99,104,105,110,103,0),String.fromCharCode(111,112,116,105,111,110,115,95,52,95,50,51,0)]]);
          let abidetect7 = 0.0;
          let iconnewsshareb: Array<any> = [913, 645, 447];
          let eyeopen7: Map<any, any> = new Map([[String.fromCharCode(117,95,54,50,95,114,108,111,116,116,105,101,0),509], [String.fromCharCode(100,95,57,55,95,97,110,110,117,108,97,114,0),986], [String.fromCharCode(97,95,56,50,95,115,110,97,112,104,111,116,0),279]]);
         mountingE = new Map([[`${mountingE.size}`, parseInt(`${abidetect7}`)]]);
         abidetect7 /= Math.max(5, parseFloat(`${eyeopen7.size + 2}`));
         iconnewsshareb.push(1);
         eyeopen7.set(`${iconnewsshareb.length}`, iconnewsshareb.length | eyeopen7.size);
          let hoverP = 3.0;
          let foregroundk = String.fromCharCode(113,95,49,48,48,95,118,97,114,105,97,110,116,0);
         mountingE = new Map([[`${mountingE.size}`, mountingE.size]]);
         hoverP += parseInt(`${hoverP}`) | 3;
         foregroundk += "1";
      for (let e = 0; e < 2; e++) {
         mountingE.set(`${nterstitialw}`, 3 + mountingE.size);
      }
       let combineb: Array<any> = [String.fromCharCode(106,115,111,110,95,103,95,51,48,0), String.fromCharCode(115,95,57,53,95,100,101,108,101,116,105,110,103,0), String.fromCharCode(118,95,57,53,95,113,117,111,116,97,0)];
      let iconfeedback5 = combineb.length <= 4915012;
      do {
         combineb = [1 % (Math.max(6, mountingE.size))];
         if (iconfeedback5) {
            break;
         }
      } while ((nterstitialw) && iconfeedback5);
         nterstitialw = combineb.length == mountingE.size;
      disconnectedlogoT /= Math.max(2, parseInt(`${minimizea}`));
   let libreactX = 5797513.0 <= minimizea;
   do {
       let penalty_ = true;
       let pressureg = String.fromCharCode(117,115,101,114,99,116,120,95,119,95,55,54,0);
      let rules8 = penalty_ ? !penalty_ : penalty_;
      do {
         penalty_ = pressureg.endsWith(`${penalty_}`);
         if (rules8) {
            break;
         }
      } while ((pressureg.length == 3) && rules8);
         pressureg += `${((penalty_ ? 3 : 5))}`;
         pressureg = `${pressureg.length}`;
         penalty_ = pressureg.length > 35;
         penalty_ = ((pressureg.length << (Math.min(3, Math.abs((!penalty_ ? pressureg.length : 62))))) <= 62);
          let episodesW = 0.0;
         penalty_ = (((!penalty_ ? 22 : pressureg.length) * pressureg.length) > 22);
         episodesW -= parseInt(`${episodesW}`);
      minimizea -= parseFloat(`${parseInt(`${clockP}`) - parseInt(`${libjsinspectorg}`)}`);
      if (libreactX) {
         break;
      }
   } while ((!whitep) && libreactX);
   let backwardK = signinupB.length >= 8294426;
   do {
      signinupB = `${rightV.length}`;
      if (backwardK) {
         break;
      }
   } while (backwardK && (!signinupB.endsWith(`${disconnectedlogoT}`)));
      rightV += `${iconbackwhiteH}`;
       let s_lock_: Map<any, any> = new Map([[String.fromCharCode(99,95,54,52,95,113,115,118,100,101,105,110,116,0),true ], [String.fromCharCode(99,111,110,102,105,110,101,100,95,114,95,53,0),false ], [String.fromCharCode(114,101,103,95,51,95,53,0),true ]]);
       let halffieldimageP = 5.0;
       let stringU = true;
         halffieldimageP += 2 + parseInt(`${halffieldimageP}`);
      if (stringU && 4.0 == (1.74 * halffieldimageP)) {
          let dragclose2 = String.fromCharCode(110,95,50,95,98,117,102,102,101,114,115,105,110,107,0);
          let confirmation7 = 0.0;
          let kick9 = false;
          let rewindm = true;
         halffieldimageP *= 3 ^ parseInt(`${confirmation7}`);
         dragclose2 = `${((kick9 ? 2 : 2))}`;
         confirmation7 += (parseFloat(`${(rewindm ? 4 : 2) ^ (kick9 ? 5 : 3)}`));
         rewindm = !rewindm;
      }
       let greytickc: Array<any> = [956, 520, 304];
      if (2 > (s_lock_.size ^ 1) && 4.43 > (halffieldimageP + 4.9)) {
          let containerF = 4;
         s_lock_.set(`${greytickc.length}`, greytickc.length + s_lock_.size);
         containerF %= Math.max(1, containerF);
      }
      while (1.61 == (4.90 - halffieldimageP)) {
         halffieldimageP -= 1 ^ parseInt(`${halffieldimageP}`);
         break;
      }
      libjsinspectorg -= parseFloat(`${parseInt(`${clockP}`) ^ weiboT}`);
      signinupB = `${2 % (Math.max(parseInt(`${disconnectedlogoT}`), 2))}`;
       let shielddonel = false;
          let grayH = String.fromCharCode(121,95,51,53,95,102,111,117,114,116,104,0);
         shielddonel = grayH.length == 48;
         shielddonel = (shielddonel ? shielddonel : shielddonel);
          let selectU = 0.0;
         shielddonel = !shielddonel;
         selectU += parseInt(`${selectU}`);
      weiboT >>= Math.min(Math.abs(((whitep ? 3 : 5))), 5);
   while (4.47 >= clockP) {
       let pressureH = false;
       let completeh = String.fromCharCode(99,95,56,49,95,99,111,110,115,117,109,112,116,105,111,110,0);
       let dialogC = 5;
         dialogC += 3;
         completeh = `${completeh.length * 2}`;
         completeh = `${completeh.length}`;
      let listA = pressureH ? !pressureH : pressureH;
      do {
          let i_managert = 3;
         pressureH = 83 < i_managert;
         if (listA) {
            break;
         }
      } while (listA && (5 >= completeh.length || !pressureH));
      let navigation3 = dialogC >= 7427240;
      do {
         dialogC %= Math.max(5, dialogC);
         if (navigation3) {
            break;
         }
      } while ((completeh.startsWith(`${dialogC}`)) && navigation3);
      if (3 < (completeh.length << (Math.min(Math.abs(2), 1)))) {
          let homex = String.fromCharCode(99,111,108,108,105,100,101,114,95,98,95,49,0);
          let streamingM = String.fromCharCode(101,118,97,108,117,97,116,105,111,110,95,110,95,54,53,0);
         dialogC *= completeh.length;
         homex += "3";
         streamingM = `${streamingM.length}`;
      }
      let libreactperfloggerjniw = 6649107 <= dialogC;
      do {
          let rewindT: Array<any> = [144, 501];
         dialogC ^= (1 - (pressureH ? 5 : 2));
         rewindT.push(2);
         if (libreactperfloggerjniw) {
            break;
         }
      } while (libreactperfloggerjniw && (1 >= (1 << (Math.min(4, Math.abs(dialogC)))) || pressureH));
         dialogC /= Math.max(5, dialogC);
         completeh = `${dialogC & 1}`;
      clockP += dialogC;
      break;
   }
      iconbackwhiteH += signinupB.length | 3;
       let modulev = 0.0;
       let selectK = String.fromCharCode(115,95,51,57,95,112,104,111,110,101,98,111,111,107,0);
      let libturbomodulejsijniO = 8939449 <= selectK.length;
      do {
         selectK = `${selectK.length}`;
         if (libturbomodulejsijniO) {
            break;
         }
      } while (libturbomodulejsijniO && (5.3 >= (modulev / (Math.max(2, selectK.length)))));
         modulev += selectK.length / 3;
      for (let n = 0; n < 2; n++) {
         modulev *= selectK.length;
      }
       let commentc = 4;
         commentc >>= Math.min(Math.abs(commentc / 2), 3);
      for (let m = 0; m < 1; m++) {
          let castingd = 2.0;
         commentc &= parseInt(`${castingd}`);
      }
      whitep = minimizea == 79.74 && 62 == iconbackwhiteH;
   if (c_managerj) {
      modal3 = `${rightV.length}`;
   }
       let sideR = 5;
       let playlistn = String.fromCharCode(99,117,114,108,95,114,95,53,51,0);
       let videol = String.fromCharCode(115,95,57,51,95,108,105,98,114,97,114,121,0);
         sideR <<= Math.min(2, Math.abs(videol.length & 2));
      if (videol.includes(`${playlistn.length}`)) {
         playlistn = "2";
      }
      whitep = 87.50 > libjsinspectorg || !c_managerj;
       let awayM = 3.0;
       let strU = String.fromCharCode(115,101,110,100,101,114,95,52,95,54,53,0);
      let aboutE = strU == String.fromCharCode(122,101,114,95,51,0);
      do {
         strU += `${strU.length}`;
         if (aboutE) {
            break;
         }
      } while (aboutE && ((3.55 * awayM) > 1.3 && 5 > (strU.length * parseInt(`${awayM}`))));
         awayM *= (String.fromCharCode(65,0) == strU ? strU.length : parseInt(`${awayM}`));
         awayM /= Math.max(3, parseInt(`${awayM}`));
      if (strU.includes(`${awayM}`)) {
         strU += `${parseInt(`${awayM}`) - strU.length}`;
      }
       let iconscheduleg = 4.0;
         iconscheduleg += parseFloat(`${strU.length >> (Math.min(Math.abs(2), 4))}`);
      typesn += `${parseInt(`${libjsinspectorg}`) ^ 2}`;
   if ((disconnectedlogoT * clockP) > 4.43 && 4.48 > (4.43 * disconnectedlogoT)) {
       let combined0 = String.fromCharCode(109,95,54,51,95,100,101,99,111,109,112,114,101,115,115,101,100,0);
       let libreactnativeblobg = true;
       let penaltygoalA = 3;
       let const_18 = String.fromCharCode(102,95,53,56,95,116,114,97,112,0);
       let bodan1 = String.fromCharCode(98,95,52,51,0);
      for (let c = 0; c < 3; c++) {
         penaltygoalA += 3;
      }
         libreactnativeblobg = 100 >= penaltygoalA;
      for (let m = 0; m < 2; m++) {
          let searchbarj = true;
          let profileframe_ = 2.0;
          let suggestionV = 1.0;
         const_18 += `${parseInt(`${suggestionV}`) * 3}`;
         searchbarj = profileframe_ >= 2.45;
         profileframe_ -= parseFloat(`${parseInt(`${profileframe_}`) ^ 1}`);
         suggestionV -= parseFloat(`${parseInt(`${profileframe_}`) - 2}`);
      }
      if (combined0.length > bodan1.length) {
         combined0 += `${1 | bodan1.length}`;
      }
      let thumbnailM = libreactnativeblobg ? !libreactnativeblobg : libreactnativeblobg;
      do {
         libreactnativeblobg = combined0.includes(`${libreactnativeblobg}`);
         if (thumbnailM) {
            break;
         }
      } while (thumbnailM && ((penaltygoalA & 3) <= 5 && penaltygoalA <= 3));
          let baselineV: Array<any> = [0, 422, 550];
         const_18 = `${(String.fromCharCode(54,0) == combined0 ? combined0.length : penaltygoalA)}`;
         baselineV.push(baselineV.length << (Math.min(baselineV.length, 2)));
         const_18 = `${const_18.length >> (Math.min(2, bodan1.length))}`;
      let statsu = bodan1 == String.fromCharCode(111,122,114,113,50,120,98,101,0);
      do {
         bodan1 = `${penaltygoalA}`;
         if (statsu) {
            break;
         }
      } while (statsu && (5 == (bodan1.length * penaltygoalA)));
       let libreactnativejniO = 0.0;
       let onewsshareo = 5.0;
         onewsshareo -= parseFloat(`${const_18.length & bodan1.length}`);
      while (!libreactnativeblobg) {
         libreactnativeblobg = (((libreactnativeblobg ? combined0.length : 43) + combined0.length) == 43);
         break;
      }
         const_18 = `${parseInt(`${libreactnativejniO}`)}`;
      if (bodan1.length > const_18.length) {
         bodan1 += `${parseInt(`${libreactnativejniO}`) % 2}`;
      }
      for (let n = 0; n < 1; n++) {
          let tickJ = false;
          let privacyv = 4.0;
         combined0 = `${2 + combined0.length}`;
         tickJ = !tickJ;
         privacyv *= parseInt(`${privacyv}`) & 2;
      }
       let thailandR = String.fromCharCode(104,95,49,55,95,97,114,103,118,0);
      clockP /= Math.max(3, penaltygoalA & 3);
   }
   let handlerF = String.fromCharCode(103,103,122,100,122,104,111,103,51,57,0) == rightV;
   do {
      rightV = `${((c_managerj ? 3 : 4) % (Math.max(parseInt(`${clockP}`), 10)))}`;
      if (handlerF) {
         break;
      }
   } while (handlerF && (!rightV.includes(`${typesn.length}`)));
   let libruntimeexecutorK = weiboT <= 6588490;
   do {
      weiboT *= 1 / (Math.max(parseInt(`${clockP}`), 3));
      if (libruntimeexecutorK) {
         break;
      }
   } while ((2 == (rightV.length & weiboT) || 1 == (2 & weiboT)) && libruntimeexecutorK);
   let termsG = 5715641.0 >= libjsinspectorg;
   do {
      libjsinspectorg *= parseFloat(`${parseInt(`${minimizea}`)}`);
      if (termsG) {
         break;
      }
   } while (((libjsinspectorg + clockP) < 2.38) && termsG);
       let anewsC = String.fromCharCode(114,101,97,115,115,109,95,108,95,55,55,0);
      while (anewsC == anewsC) {
          let floatingA = String.fromCharCode(116,95,54,48,95,115,116,114,116,111,100,0);
         anewsC += `${anewsC.length}`;
         floatingA += `${2 - floatingA.length}`;
         break;
      }
          let iconclosewhitebgy = String.fromCharCode(97,100,100,95,121,95,56,49,0);
         anewsC = `${anewsC.length}`;
         iconclosewhitebgy = `${iconclosewhitebgy.length}`;
       let private_53: Array<any> = [925, 473];
       let eighteenp: Array<any> = [String.fromCharCode(118,101,99,95,103,95,50,53,0), String.fromCharCode(112,107,116,99,112,121,95,107,95,52,53,0), String.fromCharCode(111,95,54,50,95,100,101,116,97,99,104,0)];
      signinupB = `${1 >> (Math.min(5, rightV.length))}`;
       let defaultfootballbgt: Array<any> = [147, 712];
       let a_managery: Array<any> = [336, 632, 336];
       let cancelS: Array<any> = [414, 363];
         a_managery = [3 - a_managery.length];
          let anner0 = String.fromCharCode(116,95,52,55,95,99,97,110,99,101,108,108,97,98,108,101,0);
         a_managery = [defaultfootballbgt.length];
         anner0 = `${anner0.length % 3}`;
      whitep = typesn.length > 37;
   while (5.71 >= (libjsinspectorg + parseFloat(`${typesn.length}`)) || 1 >= (typesn.length + parseInt(`${libjsinspectorg}`))) {
       let iconstarx = 2.0;
      let ticked2 = 9634936.0 <= iconstarx;
      do {
         iconstarx -= parseFloat(`${parseInt(`${iconstarx}`) - 3}`);
         if (ticked2) {
            break;
         }
      } while ((2.26 <= iconstarx) && ticked2);
         iconstarx -= parseFloat(`${parseInt(`${iconstarx}`) << (Math.min(Math.abs(parseInt(`${iconstarx}`)), 4))}`);
      let const_i4Y = 5465396.0 <= iconstarx;
      do {
         iconstarx -= parseFloat(`${1}`);
         if (const_i4Y) {
            break;
         }
      } while (((iconstarx - iconstarx) == 4.44) && const_i4Y);
      typesn += `${parseInt(`${minimizea}`)}`;
      break;
   }
   while (2 > modal3.length) {
       let exampleimageE = String.fromCharCode(105,110,98,111,120,95,104,95,55,0);
       let gestureB = 5.0;
       let gifto: Map<any, any> = new Map([[String.fromCharCode(98,105,116,114,118,99,111,110,106,95,109,95,57,51,0),99], [String.fromCharCode(103,95,57,57,95,101,110,100,105,97,110,0),748]]);
      if (gestureB > 1.88) {
         gestureB += parseFloat(`${exampleimageE.length << (Math.min(Math.abs(3), 1))}`);
      }
      for (let x = 0; x < 2; x++) {
         gifto = new Map([[exampleimageE, 3 % (Math.max(7, parseInt(`${gestureB}`)))]]);
      }
          let modityW = String.fromCharCode(97,117,116,111,117,112,100,97,116,101,95,53,95,56,51,0);
          let static_pyI = false;
          let predictionbannersharedU: Map<any, any> = new Map([[String.fromCharCode(109,105,110,116,95,55,95,54,53,0),808], [String.fromCharCode(104,95,52,51,95,105,110,99,111,109,112,108,101,116,101,0),184], [String.fromCharCode(108,95,49,56,95,114,101,99,111,110,110,101,99,116,101,100,0),758]]);
         gestureB -= parseFloat(`${gifto.size / (Math.max(3, 4))}`);
         modityW += `${predictionbannersharedU.size}`;
         static_pyI = String.fromCharCode(51,0) == modityW;
         predictionbannersharedU = new Map([[`${predictionbannersharedU.size}`, 3 * predictionbannersharedU.size]]);
      if (exampleimageE.startsWith(`${gifto.size}`)) {
         exampleimageE = `${exampleimageE.length}`;
      }
      for (let f = 0; f < 3; f++) {
         exampleimageE = `${parseInt(`${gestureB}`) % (Math.max(5, exampleimageE.length))}`;
      }
       let filledu = String.fromCharCode(102,101,116,99,104,101,100,95,102,95,50,51,0);
       let main_c5 = String.fromCharCode(107,95,50,50,95,102,99,104,111,119,110,0);
       let membershipH = 2.0;
       let membero = 3.0;
         gestureB /= Math.max(4, parseFloat(`${main_c5.length}`));
      let play_ = filledu == String.fromCharCode(115,98,106,105,119,121,0);
      do {
         filledu += `${parseInt(`${membershipH}`)}`;
         if (play_) {
            break;
         }
      } while (play_ && ((4 - filledu.length) < 4 || (4 - parseInt(`${membero}`)) < 4));
      modal3 = `${(2 * (c_managerj ? 5 : 5))}`;
      break;
   }
       let applicationR: Array<any> = [String.fromCharCode(108,105,98,112,104,111,110,101,110,117,109,98,101,114,95,57,95,54,54,0), String.fromCharCode(104,95,56,49,95,101,120,116,101,110,115,105,98,105,108,105,116,121,0)];
       let preview8 = 4.0;
          let iconclosewhitebg7 = 5.0;
          let goalJ = false;
         applicationR = [1];
         iconclosewhitebg7 -= ((goalJ ? 1 : 1) * parseInt(`${iconclosewhitebg7}`));
         goalJ = !goalJ;
      for (let r = 0; r < 2; r++) {
         applicationR = [parseInt(`${preview8}`) * applicationR.length];
      }
      whitep = rightV.length == 100;
   let analyticsX = c_managerj ? !c_managerj : c_managerj;
   do {
      c_managerj = (libjsinspectorg * disconnectedlogoT) < 68.6;
      if (analyticsX) {
         break;
      }
   } while ((!c_managerj) && analyticsX);
       let mintegral2 = 1;
         mintegral2 &= mintegral2 - mintegral2;
       let mimoh = String.fromCharCode(115,97,118,101,112,111,105,110,116,95,110,95,49,0);
         mimoh = `${mimoh.length}`;
      c_managerj = minimizea <= 95.74 || libjsinspectorg <= 95.74;
   if (iconbackwhiteH <= 1) {
      iconbackwhiteH *= 3;
   }
   if (!rightV.startsWith(`${iconbackwhiteH}`)) {
       let termsw = false;
      while (termsw) {
          let patha = String.fromCharCode(98,102,114,97,109,101,115,95,113,95,54,53,0);
          let dplusx = false;
          let baselinek = 4.0;
         termsw = !termsw;
         patha = `${2 - parseInt(`${baselinek}`)}`;
         dplusx = patha.length > 38 || !dplusx;
         baselinek -= parseFloat(`${parseInt(`${baselinek}`) + 2}`);
         break;
      }
          let libfabricjniP: Map<any, any> = new Map([[String.fromCharCode(112,117,98,105,99,95,111,95,55,54,0),527], [String.fromCharCode(122,95,57,95,115,116,111,112,101,100,0),964]]);
          let langkeyl = 1.0;
          let twitterZ = String.fromCharCode(107,95,50,50,95,116,104,101,114,101,0);
         termsw = libfabricjniP.get(`${termsw}`) != null;
         libfabricjniP = new Map([[`${langkeyl}`, twitterZ.length]]);
         langkeyl -= parseInt(`${langkeyl}`);
         twitterZ += `${parseInt(`${langkeyl}`) & twitterZ.length}`;
         termsw = (termsw ? !termsw : termsw);
      rightV = `${modal3.length << (Math.min(Math.abs(1), 2))}`;
   }
       let yellowredcardU = true;
       let moviesR: Map<any, any> = new Map([[String.fromCharCode(104,97,110,103,117,112,95,113,95,51,55,0),662], [String.fromCharCode(104,95,54,50,95,112,117,110,99,104,0),16], [String.fromCharCode(98,95,57,57,95,110,105,101,108,115,97,100,100,0),94]]);
       let subbasketballplayerB = String.fromCharCode(117,95,53,57,95,100,101,108,105,109,105,116,101,114,0);
         yellowredcardU = (subbasketballplayerB.length | moviesR.size) >= 59;
          let layout0 = 0.0;
          let shootyesgoalT = String.fromCharCode(98,108,117,101,95,109,95,54,53,0);
         moviesR = new Map([[`${layout0}`, ((yellowredcardU ? 2 : 5) % (Math.max(8, parseInt(`${layout0}`))))]]);
         shootyesgoalT = `${shootyesgoalT.length}`;
         moviesR.set(`${yellowredcardU}`, ((yellowredcardU ? 1 : 2) - moviesR.size));
      for (let t = 0; t < 2; t++) {
         moviesR = new Map([[`${moviesR.size}`, subbasketballplayerB.length]]);
      }
          let layout1 = false;
          let shirt1 = 4.0;
          let modalv = String.fromCharCode(104,95,57,53,95,104,97,115,104,101,114,0);
         yellowredcardU = !subbasketballplayerB.includes(`${layout1}`);
         layout1 = (modalv.length - parseInt(`${shirt1}`)) == 36;
         shirt1 += modalv.length & 2;
      c_managerj = moviesR.size <= 82;
   while (!signinupB.includes(`${c_managerj}`)) {
      signinupB = `${parseInt(`${minimizea}`) / (Math.max(3, 5))}`;
      break;
   }
      awayteamfield2 *= 1;
       let configure_ = String.fromCharCode(119,95,51,54,95,98,108,117,114,97,121,0);
       let iconwechatQ = 3.0;
       let casting2 = String.fromCharCode(116,95,54,95,107,109,118,99,0);
          let anner7 = 3.0;
          let viewerJ: Array<any> = [107, 625];
          let iconshareG: Map<any, any> = new Map([[String.fromCharCode(100,105,102,102,97,98,108,101,95,48,95,52,0),182], [String.fromCharCode(117,95,50,54,95,104,97,110,100,115,0),452]]);
         iconwechatQ += parseFloat(`${1 - casting2.length}`);
         anner7 /= Math.max(parseFloat(`${parseInt(`${anner7}`) / (Math.max(1, 1))}`), 4);
         viewerJ.push(iconshareG.size >> (Math.min(Math.abs(1), 4)));
         iconshareG = new Map([[`${iconshareG.size}`, viewerJ.length]]);
         iconwechatQ += (parseFloat(`${String.fromCharCode(49,0) == casting2 ? casting2.length : configure_.length}`));
       let dialog2 = String.fromCharCode(99,95,55,51,95,112,117,116,115,0);
       let combinedO = String.fromCharCode(103,101,110,101,114,105,99,115,95,103,95,49,49,0);
      for (let m = 0; m < 1; m++) {
         dialog2 = `${dialog2.length | 1}`;
      }
         configure_ = `${configure_.length / (Math.max(1, parseInt(`${iconwechatQ}`)))}`;
         casting2 += `${3 >> (Math.min(5, dialog2.length))}`;
         iconwechatQ -= parseFloat(`${configure_.length}`);
         iconwechatQ += parseFloat(`${parseInt(`${iconwechatQ}`)}`);
         iconwechatQ += (parseFloat(`${configure_ == String.fromCharCode(113,0) ? configure_.length : parseInt(`${iconwechatQ}`)}`));
      disconnectedlogoT -= iconbackwhiteH;
   for (let y = 0; y < 1; y++) {
      disconnectedlogoT *= rightV.length;
   }
   if (3 < (parseInt(`${clockP}`) + signinupB.length) || 1.84 < (clockP + signinupB.length)) {
      signinupB = `${modal3.length}`;
   }
   while (5 > (iconbackwhiteH / 5)) {
       let logoutx: Map<any, any> = new Map([[String.fromCharCode(115,116,101,112,95,55,95,53,51,0),83], [String.fromCharCode(122,95,49,54,95,101,114,118,101,114,0),4], [String.fromCharCode(116,114,97,110,115,99,111,100,101,95,119,95,52,48,0),741]]);
       let iconsettingR = String.fromCharCode(103,95,54,48,95,115,113,108,105,116,101,114,101,98,97,115,101,114,0);
       let disconnectedlogoo = 0.0;
       let filter_ = String.fromCharCode(108,95,56,55,95,115,110,97,112,115,104,111,116,116,101,114,0);
       let clear8: Array<any> = [393, 504];
          let inouttargetrede = String.fromCharCode(100,95,53,95,114,101,115,101,116,0);
          let typingZ = 5;
         filter_ = `${filter_.length}`;
         inouttargetrede = `${inouttargetrede.length}`;
         typingZ >>= Math.min(Math.abs(typingZ), 2);
         filter_ += "2";
         filter_ += `${(String.fromCharCode(119,0) == filter_ ? filter_.length : parseInt(`${disconnectedlogoo}`))}`;
       let malaysiav = String.fromCharCode(120,100,97,105,95,110,95,50,48,0);
          let cornerkickv = 5.0;
         disconnectedlogoo += parseFloat(`${parseInt(`${cornerkickv}`) % (Math.max(logoutx.size, 8))}`);
         disconnectedlogoo *= parseFloat(`${filter_.length * clear8.length}`);
         logoutx = new Map([[iconsettingR, parseInt(`${disconnectedlogoo}`) % 1]]);
       let indicatorb = String.fromCharCode(100,95,49,48,48,95,116,111,110,101,115,0);
      while (filter_.endsWith(`${logoutx.size}`)) {
         filter_ = `${malaysiav.length}`;
         break;
      }
      for (let n = 0; n < 3; n++) {
         logoutx.set(malaysiav, parseInt(`${disconnectedlogoo}`));
      }
      while (iconsettingR.length == 1) {
         disconnectedlogoo -= parseFloat(`${1 * clear8.length}`);
         break;
      }
          let tnewinterstitialc = true;
          let moreD = false;
          let sinan: Array<any> = [725, 349, 168];
         clear8 = [(String.fromCharCode(75,0) == malaysiav ? malaysiav.length : (tnewinterstitialc ? 4 : 1))];
         tnewinterstitialc = sinan.includes(moreD);
         moreD = !moreD;
         sinan.push((2 << (Math.min(1, Math.abs((moreD ? 4 : 2))))));
       let select0: Array<any> = [732, 119];
       let pressurea: Array<any> = [523, 813, 734];
         pressurea.push(filter_.length);
         clear8.push(filter_.length);
      iconbackwhiteH &= ((c_managerj ? 2 : 4) % 1);
      break;
   }
       let recommendationt = 2;
       let hiadZ = 5.0;
       let yellow4: Array<any> = [291, 940];
          let imagenetworkerrB = String.fromCharCode(97,116,111,110,95,109,95,56,52,0);
         yellow4.push(yellow4.length);
         imagenetworkerrB += `${imagenetworkerrB.length * imagenetworkerrB.length}`;
       let gifgoalX = String.fromCharCode(111,118,101,114,117,115,101,95,114,95,54,52,0);
       let gdtadvb = String.fromCharCode(112,95,51,55,95,98,105,116,120,0);
         gdtadvb += `${gdtadvb.length / 3}`;
          let plashL = false;
          let moonG = String.fromCharCode(105,95,54,50,95,116,97,112,112,101,100,0);
         hiadZ *= 2;
         plashL = !moonG.endsWith(`${plashL}`);
         moonG += `${3 % (Math.max(4, moonG.length))}`;
      if ((recommendationt >> (Math.min(Math.abs(1), 4))) == 4 && (recommendationt >> (Math.min(Math.abs(1), 2))) == 2) {
         recommendationt *= 3 << (Math.min(2, yellow4.length));
      }
      while (hiadZ == yellow4.length) {
         yellow4.push(2 ^ gifgoalX.length);
         break;
      }
          let componentregistrya = String.fromCharCode(100,95,49,49,95,109,120,112,101,103,0);
         recommendationt %= Math.max(1, 2);
         componentregistrya += `${componentregistrya.length & componentregistrya.length}`;
          let otherr = 4;
          let const_oO = 0.0;
          let mbnativew = String.fromCharCode(121,117,118,110,118,99,95,120,95,55,57,0);
         hiadZ *= mbnativew.length;
         otherr &= otherr;
         const_oO /= Math.max(1, parseFloat(`${otherr | 2}`));
         mbnativew += `${otherr << (Math.min(5, Math.abs(3)))}`;
      while (yellow4.length < recommendationt) {
         yellow4.push(gdtadvb.length);
         break;
      }
      rightV += "2";
   for (let t = 0; t < 1; t++) {
       let libavdeviceO = String.fromCharCode(114,101,97,115,115,101,109,98,108,121,95,57,95,57,55,0);
      for (let r = 0; r < 2; r++) {
         libavdeviceO = `${libavdeviceO.length}`;
      }
         libavdeviceO = `${libavdeviceO.length % 1}`;
         libavdeviceO = `${2 ^ libavdeviceO.length}`;
      awayteamfield2 /= Math.max(3, (String.fromCharCode(81,0) == typesn ? awayteamfield2 : typesn.length));
   }
   if ((1 + modal3.length) == 3) {
       let cnewinterstitialL: Array<any> = [730, 239, 492];
       let hongkong2 = String.fromCharCode(112,107,116,104,100,114,95,54,95,50,56,0);
         cnewinterstitialL.push(2 | hongkong2.length);
      for (let b = 0; b < 3; b++) {
         hongkong2 = `${3 / (Math.max(1, cnewinterstitialL.length))}`;
      }
      for (let h = 0; h < 3; h++) {
         hongkong2 += `${(hongkong2 == String.fromCharCode(50,0) ? hongkong2.length : cnewinterstitialL.length)}`;
      }
      if (1 >= (cnewinterstitialL.length ^ 5)) {
          let configure9 = true;
          let borderless8 = String.fromCharCode(105,110,102,111,108,100,101,114,95,112,95,57,56,0);
         cnewinterstitialL = [borderless8.length];
         configure9 = (configure9 ? !configure9 : !configure9);
         borderless8 = `${(3 * (configure9 ? 3 : 1))}`;
      }
         hongkong2 = `${cnewinterstitialL.length}`;
       let with_1_U = 1.0;
      minimizea /= Math.max(parseFloat(`${2 & parseInt(`${libjsinspectorg}`)}`), 3);
   }
   let libsentryJ = String.fromCharCode(119,114,99,105,48,106,114,0) == modal3;
   do {
      modal3 += "3";
      if (libsentryJ) {
         break;
      }
   } while (libsentryJ && (typesn.length >= modal3.length));
      modal3 = `${parseInt(`${minimizea}`) ^ 2}`;
      clockP *= 3;
   for (let x = 0; x < 2; x++) {
      libjsinspectorg -= parseFloat(`${parseInt(`${minimizea}`)}`);
   }
   if (4 <= (modal3.length + parseInt(`${disconnectedlogoT}`)) && (modal3.length + parseInt(`${disconnectedlogoT}`)) <= 4) {
      modal3 += `${3 << (Math.min(Math.abs(weiboT), 2))}`;
   }
       let gifgoalu = 1.0;
         gifgoalu *= parseFloat(`${3}`);
          let baseC = 5.0;
          let changeC = String.fromCharCode(102,119,97,108,115,104,95,113,95,55,54,0);
         gifgoalu /= Math.max(1, parseFloat(`${parseInt(`${gifgoalu}`) / (Math.max(9, changeC.length))}`));
         baseC -= parseFloat(`${parseInt(`${baseC}`) * 1}`);
         changeC = `${parseInt(`${baseC}`) - parseInt(`${baseC}`)}`;
         gifgoalu -= parseFloat(`${2}`);
      rightV = `${(String.fromCharCode(87,0) == signinupB ? parseInt(`${minimizea}`) : signinupB.length)}`;
      rightV += "3";
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
       let p_centerT = false;
    let gifgoalg = String.fromCharCode(114,101,115,105,100,117,97,108,115,95,53,95,49,50,0);
    let giftbuttonZ = 4;
    let animationsH = String.fromCharCode(101,120,112,108,97,105,110,95,122,95,51,53,0);
    let register_id = String.fromCharCode(98,95,51,54,95,109,117,116,101,120,101,115,0);
    let latnK = 3.0;
    let handlerV = String.fromCharCode(121,95,54,55,95,97,117,116,104,111,114,105,122,101,100,0);
    let reactnavigationq = 3;
    let turndownl = 3.0;
    let productz = 2;
    let termsj = 2.0;
    let libswscaleu = 1.0;
   while (1 == reactnavigationq) {
      animationsH += `${register_id.length}`;
      break;
   }
   if (!gifgoalg.includes(register_id)) {
       let pausem = String.fromCharCode(108,111,99,97,108,101,115,95,114,95,49,48,48,0);
       let coreo: Array<any> = [119, 208, 499];
          let anythinkm = 0.0;
          let stringsK: Map<any, any> = new Map([[String.fromCharCode(110,95,52,49,95,109,121,114,110,100,0),905], [String.fromCharCode(100,101,99,111,114,97,116,111,114,115,95,111,95,55,50,0),111]]);
         coreo = [3 * pausem.length];
         anythinkm += parseFloat(`${2 | stringsK.size}`);
         stringsK = new Map([[`${stringsK.size}`, parseInt(`${anythinkm}`) ^ 2]]);
      let darkP = 7369931 <= coreo.length;
      do {
          let projectp: Map<any, any> = new Map([[String.fromCharCode(98,101,110,101,102,105,99,105,97,114,121,95,120,95,56,57,0),String.fromCharCode(115,116,97,116,101,102,117,108,95,102,95,55,49,0)], [String.fromCharCode(101,99,100,115,97,95,100,95,57,0),String.fromCharCode(99,95,54,52,95,116,104,97,110,0)]]);
          let rulesv = 1.0;
          let nalyticsI = String.fromCharCode(118,95,55,49,95,116,117,110,101,0);
          let serviceY = String.fromCharCode(120,95,53,50,95,100,101,118,101,108,111,112,109,101,110,116,0);
          let indexL = String.fromCharCode(99,97,116,95,110,95,54,55,0);
         coreo = [(String.fromCharCode(54,0) == serviceY ? coreo.length : serviceY.length)];
         projectp = new Map([[`${rulesv}`, parseInt(`${rulesv}`)]]);
         nalyticsI = `${projectp.size}`;
         indexL = `${parseInt(`${rulesv}`)}`;
         if (darkP) {
            break;
         }
      } while (((coreo.length + pausem.length) >= 5 && (pausem.length + coreo.length) >= 5) && darkP);
         coreo.push(coreo.length - 2);
      let default_pyE = coreo.length <= 7120729;
      do {
         coreo.push((pausem == String.fromCharCode(115,0) ? coreo.length : pausem.length));
         if (default_pyE) {
            break;
         }
      } while ((pausem.startsWith(`${coreo.length}`)) && default_pyE);
       let chinasameD = 2.0;
       let heartf = 5.0;
      for (let f = 0; f < 1; f++) {
          let ajaxX = 0.0;
          let plus7 = true;
          let membershipS = true;
          let nterstitialj = 2.0;
         chinasameD += 2 % (Math.max(6, parseInt(`${ajaxX}`)));
         ajaxX /= Math.max(parseFloat(`${2 ^ parseInt(`${nterstitialj}`)}`), 1);
         plus7 = nterstitialj > 45.100;
         membershipS = nterstitialj > 65.66;
      }
      register_id = "2";
   }
      gifgoalg += `${(handlerV.length ^ (p_centerT ? 5 : 3))}`;
   let injuryU = 7672014 <= gifgoalg.length;
   do {
      gifgoalg += `${((p_centerT ? 1 : 1) << (Math.min(Math.abs(parseInt(`${turndownl}`)), 1)))}`;
      if (injuryU) {
         break;
      }
   } while ((gifgoalg.length <= 3) && injuryU);
       let sidef = 2.0;
       let questiconW = false;
       let libavfilterh = 2.0;
      for (let z = 0; z < 3; z++) {
         questiconW = !questiconW;
      }
      if ((sidef * 1) < 2.90) {
         libavfilterh /= Math.max(1, 3 * parseInt(`${sidef}`));
      }
          let libimagepipelinej: Array<any> = [String.fromCharCode(112,95,49,50,95,100,98,108,105,110,116,0), String.fromCharCode(122,95,51,50,95,117,116,120,111,115,0)];
          let defaultfootballbgi = 3.0;
          let zoomv: Map<any, any> = new Map([[String.fromCharCode(118,95,50,54,95,100,114,98,103,0),String.fromCharCode(112,95,50,50,95,101,120,104,97,117,115,116,0)], [String.fromCharCode(109,115,114,108,101,100,101,99,95,109,95,53,57,0),String.fromCharCode(114,103,98,121,117,118,95,57,95,55,55,0)], [String.fromCharCode(119,97,107,101,95,103,95,53,48,0),String.fromCharCode(103,95,54,57,95,110,111,110,98,0)]]);
         sidef *= parseFloat(`${parseInt(`${libavfilterh}`) | 1}`);
         libimagepipelinej = [1 >> (Math.min(Math.abs(parseInt(`${defaultfootballbgi}`)), 1))];
         defaultfootballbgi /= Math.max(parseInt(`${defaultfootballbgi}`), 2);
         zoomv = new Map([[`${zoomv.size}`, libimagepipelinej.length]]);
       let launcheru: Map<any, any> = new Map([[String.fromCharCode(112,114,111,98,97,98,105,108,105,116,105,101,115,95,114,95,50,53,0),826], [String.fromCharCode(104,95,55,52,95,115,116,114,115,101,112,0),165], [String.fromCharCode(111,118,101,114,108,97,121,115,95,121,95,51,53,0),872]]);
      if (Array.from(launcheru.keys()).includes(`${libavfilterh}`)) {
          let libswscaleh = 3;
          let latnv: Array<any> = [784, 839, 108];
          let yellowI = 3.0;
         libavfilterh *= 1 ^ libswscaleh;
         libswscaleh &= 3 ^ parseInt(`${yellowI}`);
         latnv.push(3 % (Math.max(2, parseInt(`${yellowI}`))));
      }
      let uploadq = 5209998.0 >= libavfilterh;
      do {
         libavfilterh += parseInt(`${sidef}`) / 3;
         if (uploadq) {
            break;
         }
      } while (uploadq && (!questiconW && (libavfilterh + 2.69) <= 2.53));
      while (4.34 == (4.16 - libavfilterh)) {
         libavfilterh /= Math.max(3, (parseInt(`${sidef}`) / (Math.max(7, (questiconW ? 3 : 3)))));
         break;
      }
      if ((2 & launcheru.size) >= 5 && 2 >= (launcheru.size * parseInt(`${sidef}`))) {
         launcheru.set(`${questiconW}`, 3 - parseInt(`${libavfilterh}`));
      }
      let alert3 = sidef <= 9296867.0;
      do {
         sidef /= Math.max(1, (parseFloat(`${(questiconW ? 1 : 5) / (Math.max(3, launcheru.size))}`)));
         if (alert3) {
            break;
         }
      } while (alert3 && ((5.20 - sidef) >= 5.4));
      handlerV += "1";
   while (p_centerT) {
       let encrypt9 = String.fromCharCode(115,117,99,99,101,115,115,95,101,95,57,57,0);
      while (!encrypt9.startsWith(`${encrypt9.length}`)) {
          let register_83: Map<any, any> = new Map([[String.fromCharCode(102,95,53,52,95,105,110,116,114,97,112,114,101,100,0),944], [String.fromCharCode(112,95,48,95,102,116,118,110,111,100,101,0),771]]);
          let toponz: Array<any> = [703, 492];
          let descn = 0.0;
          let langkeyE = String.fromCharCode(114,95,51,56,95,101,118,98,117,102,102,101,114,0);
         encrypt9 += `${register_83.size % 3}`;
         register_83.set(langkeyE, 2);
         toponz = [toponz.length];
         descn -= parseInt(`${descn}`);
         langkeyE += `${3 + parseInt(`${descn}`)}`;
         break;
      }
          let static_eb = 2.0;
          let xadsdk1 = true;
         encrypt9 = `${((xadsdk1 ? 1 : 1) - parseInt(`${static_eb}`))}`;
      for (let u = 0; u < 1; u++) {
          let material_ = 2;
         encrypt9 = `${material_}`;
      }
      p_centerT = register_id == String.fromCharCode(86,0);
      break;
   }
       let androidl = 3.0;
       let boot6 = 4.0;
       let footballe = 5;
      if ((androidl + 5.11) >= 5.28) {
         footballe += 3 << (Math.min(Math.abs(parseInt(`${boot6}`)), 5));
      }
      while (4 <= footballe) {
         footballe |= 2 * footballe;
         break;
      }
         androidl += footballe;
         boot6 += parseInt(`${boot6}`);
      while (4.19 < (boot6 / 3.36)) {
          let with_jtz = 5.0;
          let selectO = String.fromCharCode(112,114,111,109,111,116,101,95,113,95,49,48,0);
         boot6 /= Math.max(5, parseInt(`${with_jtz}`));
         selectO = `${selectO.length}`;
         break;
      }
      for (let u = 0; u < 1; u++) {
          let linkX = String.fromCharCode(97,95,51,95,97,116,116,97,99,104,0);
          let middleware6 = String.fromCharCode(111,102,102,101,115,116,95,119,95,56,53,0);
          let customg = 5.0;
          let short_2_d = 2.0;
         footballe >>= Math.min(Math.abs(parseInt(`${boot6}`)), 4);
         linkX += `${1 | middleware6.length}`;
         middleware6 = `${(String.fromCharCode(80,0) == middleware6 ? middleware6.length : linkX.length)}`;
         customg *= parseInt(`${short_2_d}`) ^ parseInt(`${customg}`);
         short_2_d += parseInt(`${customg}`);
      }
       let injuryJ = 3;
       let iconwatchnowO = 1;
       let cancelP = String.fromCharCode(117,110,100,111,116,116,101,100,95,106,95,56,55,0);
       let qaagS = String.fromCharCode(97,95,53,57,95,111,110,101,115,99,97,108,101,0);
      while (3 > (qaagS.length | 2) && 3 > (2 | qaagS.length)) {
         iconwatchnowO += qaagS.length * injuryJ;
         break;
      }
      register_id = `${parseInt(`${turndownl}`) ^ 1}`;
      latnK -= parseFloat(`${3 & register_id.length}`);
      handlerV = `${3 >> (Math.min(1, animationsH.length))}`;
   let e_unlockT = p_centerT ? !p_centerT : p_centerT;
   do {
       let foregroundd: Map<any, any> = new Map([[String.fromCharCode(105,95,57,53,95,110,101,119,108,105,110,101,0),253], [String.fromCharCode(117,95,54,54,95,116,105,109,101,118,97,108,0),259], [String.fromCharCode(99,111,112,121,120,110,95,109,95,51,56,0),54]]);
       let description_ztu = 1.0;
       let albumJ = String.fromCharCode(100,98,105,95,56,95,51,50,0);
       let default_l_5 = String.fromCharCode(107,95,49,48,95,117,110,104,105,100,101,0);
       let invitew = String.fromCharCode(121,95,53,54,95,99,111,100,101,99,115,117,98,98,108,111,99,107,0);
      let defaultlogoN = 9742518 >= default_l_5.length;
      do {
          let animationst = String.fromCharCode(115,95,52,49,95,116,111,107,101,110,100,0);
          let acceptedq: Array<any> = [241, 256];
          let libjsinspectory: Array<any> = [843, 826];
         default_l_5 = `${parseInt(`${description_ztu}`)}`;
         animationst += `${acceptedq.length}`;
         acceptedq = [libjsinspectory.length / (Math.max(1, 9))];
         libjsinspectory = [libjsinspectory.length % (Math.max(acceptedq.length, 2))];
         if (defaultlogoN) {
            break;
         }
      } while ((albumJ == default_l_5) && defaultlogoN);
      let fast8 = foregroundd.size <= 8899339;
      do {
          let reactnativejs4 = 1.0;
         foregroundd = new Map([[`${foregroundd.size}`, invitew.length / (Math.max(5, foregroundd.size))]]);
         reactnativejs4 += parseFloat(`${2 | parseInt(`${reactnativejs4}`)}`);
         if (fast8) {
            break;
         }
      } while (fast8 && (!Array.from(foregroundd.values()).includes(description_ztu)));
       let roundm = String.fromCharCode(97,95,50,95,116,111,112,109,111,115,116,0);
       let flippera = String.fromCharCode(109,117,108,116,105,100,101,115,99,114,105,112,116,111,114,95,110,95,51,51,0);
         invitew = `${roundm.length}`;
         description_ztu += parseFloat(`${albumJ.length}`);
       let episodesr = String.fromCharCode(99,111,108,115,107,105,112,95,49,95,51,51,0);
       let handlern = String.fromCharCode(103,95,57,52,95,112,114,101,115,101,110,116,97,98,108,101,0);
         roundm += `${parseInt(`${description_ztu}`)}`;
      let stationO = episodesr == String.fromCharCode(114,50,108,0);
      do {
         episodesr = `${invitew.length * 2}`;
         if (stationO) {
            break;
         }
      } while (stationO && (5 > foregroundd.size));
          let foundy = String.fromCharCode(117,110,109,111,118,101,100,95,48,95,56,55,0);
         roundm += `${roundm.length}`;
         foundy = `${(String.fromCharCode(82,0) == foundy ? foundy.length : foundy.length)}`;
      if (invitew == default_l_5) {
         default_l_5 = `${parseInt(`${description_ztu}`) ^ 2}`;
      }
      for (let g = 0; g < 3; g++) {
         description_ztu += parseFloat(`${albumJ.length + episodesr.length}`);
      }
      while (episodesr.length >= flippera.length) {
          let combine_ = String.fromCharCode(116,95,53,54,95,99,114,97,122,121,116,105,109,101,0);
          let injuryx = String.fromCharCode(115,112,111,110,115,111,114,101,100,95,122,95,50,53,0);
          let chinasamez = String.fromCharCode(112,95,57,57,95,97,117,116,104,101,110,116,105,99,97,116,101,0);
         flippera = `${episodesr.length + 1}`;
         combine_ += `${chinasamez.length / (Math.max(injuryx.length, 8))}`;
         injuryx += "3";
         chinasamez += `${chinasamez.length | injuryx.length}`;
         break;
      }
      while (handlern.length == default_l_5.length) {
         handlern = "2";
         break;
      }
      let storei = 5944766 <= foregroundd.size;
      do {
         foregroundd.set(episodesr, roundm.length / (Math.max(3, 1)));
         if (storei) {
            break;
         }
      } while ((2 <= handlern.length) && storei);
      let photok = invitew.length >= 6411623;
      do {
         invitew = `${default_l_5.length}`;
         if (photok) {
            break;
         }
      } while (photok && (default_l_5.length <= invitew.length));
      p_centerT = albumJ == register_id;
      if (e_unlockT) {
         break;
      }
   } while ((gifgoalg.length > 1) && e_unlockT);
   for (let l = 0; l < 1; l++) {
      latnK *= parseFloat(`${reactnavigationq * 1}`);
   }
   if ((giftbuttonZ / (Math.max(turndownl, 10))) >= 2.60) {
      giftbuttonZ %= Math.max(5, ((p_centerT ? 1 : 5) % (Math.max(gifgoalg.length, 8))));
   }
   if (3 < (giftbuttonZ % 4) && 2 < (giftbuttonZ % 4)) {
      animationsH = `${(gifgoalg == String.fromCharCode(108,0) ? parseInt(`${latnK}`) : gifgoalg.length)}`;
   }
   if (!animationsH.startsWith(`${giftbuttonZ}`)) {
       let nalytics0: Array<any> = [String.fromCharCode(106,95,57,50,95,111,112,117,115,116,97,98,0), String.fromCharCode(119,97,116,99,104,101,114,115,95,97,95,53,0), String.fromCharCode(101,110,113,117,101,117,101,100,95,118,95,52,51,0)];
       let flagf = true;
       let catalogj = String.fromCharCode(114,101,118,105,101,119,95,119,95,51,48,0);
       let optionsa = String.fromCharCode(114,103,98,97,95,102,95,57,0);
       let starF = String.fromCharCode(101,97,114,108,105,101,115,116,95,105,95,54,54,0);
         catalogj += "1";
          let mbbannerg: Array<any> = [554, 176, 863];
          let appsN: Map<any, any> = new Map([[String.fromCharCode(122,95,57,54,95,112,114,111,120,105,101,115,0),String.fromCharCode(97,95,55,95,111,110,110,101,99,116,105,111,110,0)], [String.fromCharCode(97,95,56,95,113,117,101,117,101,0),String.fromCharCode(112,111,115,116,112,114,111,99,114,101,115,95,114,95,54,54,0)], [String.fromCharCode(109,98,115,101,103,109,101,110,116,97,116,105,111,110,95,119,95,56,55,0),String.fromCharCode(104,97,114,109,111,110,105,99,95,117,95,51,53,0)]]);
          let zhubos: Array<any> = [254, 275];
         starF = `${appsN.size}`;
         mbbannerg.push(zhubos.length % (Math.max(4, mbbannerg.length)));
         appsN = new Map([[`${zhubos.length}`, mbbannerg.length]]);
          let librrc9 = String.fromCharCode(119,95,51,49,95,105,100,101,110,116,105,116,121,0);
         starF = `${(catalogj.length - (flagf ? 5 : 3))}`;
         librrc9 += `${librrc9.length * librrc9.length}`;
      while (!flagf) {
         nalytics0.push(2);
         break;
      }
      for (let d = 0; d < 2; d++) {
         nalytics0.push(starF.length);
      }
         starF += `${(catalogj == String.fromCharCode(72,0) ? catalogj.length : (flagf ? 2 : 2))}`;
         catalogj += `${(starF == String.fromCharCode(101,0) ? starF.length : nalytics0.length)}`;
          let register_zpF: Map<any, any> = new Map([[String.fromCharCode(105,115,108,111,119,95,110,95,55,55,0),180], [String.fromCharCode(114,116,112,101,110,99,95,106,95,49,50,0),29], [String.fromCharCode(99,111,110,116,105,110,101,110,116,95,53,95,56,48,0),33]]);
          let previewK = String.fromCharCode(105,95,55,49,95,110,111,110,109,117,108,116,0);
         starF = "3";
         register_zpF.set(previewK, previewK.length);
      while (optionsa != catalogj) {
         catalogj = `${3 % (Math.max(5, catalogj.length))}`;
         break;
      }
          let crown4: Map<any, any> = new Map([[String.fromCharCode(121,95,51,52,95,100,101,109,111,116,101,0),String.fromCharCode(104,95,57,51,95,116,111,107,101,110,100,0)], [String.fromCharCode(106,117,108,105,97,110,100,97,121,95,122,95,56,49,0),String.fromCharCode(107,95,53,55,95,102,105,103,104,116,101,114,115,0)], [String.fromCharCode(120,95,52,50,95,112,111,115,116,112,114,111,99,0),String.fromCharCode(114,101,112,101,97,116,101,100,108,121,95,122,95,49,48,48,0)]]);
         optionsa += `${(catalogj == String.fromCharCode(49,0) ? catalogj.length : (flagf ? 1 : 4))}`;
         crown4.set(`${crown4.size}`, crown4.size);
          let annerP = String.fromCharCode(115,95,54,49,95,115,112,97,99,105,110,103,115,0);
          let megaphonel = 1.0;
          let updatesp = 5.0;
         optionsa += `${3 * optionsa.length}`;
         annerP += `${parseInt(`${updatesp}`) ^ parseInt(`${megaphonel}`)}`;
         megaphonel -= 1;
         updatesp -= annerP.length;
         starF = "3";
          let libavfilterl = String.fromCharCode(118,95,53,57,95,116,114,101,101,119,114,105,116,101,114,0);
          let libavutil3 = String.fromCharCode(117,95,50,51,95,99,111,110,102,105,110,101,100,0);
         catalogj = `${(starF == String.fromCharCode(52,0) ? optionsa.length : starF.length)}`;
         libavfilterl = `${3 & libavutil3.length}`;
         libavutil3 = `${libavutil3.length / 2}`;
         flagf = 60 < starF.length;
      if (optionsa == String.fromCharCode(98,0) && catalogj == String.fromCharCode(81,0)) {
         catalogj = `${((flagf ? 3 : 5) % (Math.max(2, 10)))}`;
      }
      animationsH = `${starF.length}`;
   }
   for (let r = 0; r < 3; r++) {
      gifgoalg += `${register_id.length / 3}`;
   }
   if (2.6 >= turndownl) {
       let fcdaebecbcbafcdfceaaeccfeacdbT: Array<any> = [967, 413, 374];
         fcdaebecbcbafcdfceaaeccfeacdbT = [fcdaebecbcbafcdfceaaeccfeacdbT.length % (Math.max(fcdaebecbcbafcdfceaaeccfeacdbT.length, 1))];
      for (let c = 0; c < 2; c++) {
         fcdaebecbcbafcdfceaaeccfeacdbT = [fcdaebecbcbafcdfceaaeccfeacdbT.length];
      }
      for (let s = 0; s < 3; s++) {
         fcdaebecbcbafcdfceaaeccfeacdbT.push(1);
      }
      register_id = `${animationsH.length}`;
   }
       let phoneshareN = String.fromCharCode(100,95,53,95,102,114,97,103,0);
       let launcht = 5;
       let alerte = 1;
      if (phoneshareN.includes(`${launcht}`)) {
          let render8 = 3.0;
         phoneshareN = `${phoneshareN.length}`;
         render8 /= Math.max(parseInt(`${render8}`) - parseInt(`${render8}`), 5);
      }
          let rewardN = 0.0;
          let rewardvideoO = 3;
          let volumeo = String.fromCharCode(116,101,114,109,105,110,97,116,101,100,95,108,95,50,51,0);
         launcht /= Math.max(4, 3);
         rewardN /= Math.max(parseFloat(`${2}`), 1);
         rewardvideoO ^= volumeo.length;
         volumeo = `${volumeo.length | 1}`;
      handlerV += `${parseInt(`${latnK}`) >> (Math.min(2, Math.abs(1)))}`;
      gifgoalg = `${handlerV.length >> (Math.min(5, register_id.length))}`;
   let tramini_ = String.fromCharCode(121,108,120,53,108,98,101,120,106,0) == handlerV;
   do {
      handlerV += `${giftbuttonZ & 3}`;
      if (tramini_) {
         break;
      }
   } while (tramini_ && (3.68 == (latnK / 2.89) && (parseInt(`${latnK}`) / 1) == 2));
   while (5 <= animationsH.length) {
      handlerV = `${giftbuttonZ >> (Math.min(Math.abs(1), 3))}`;
      break;
   }
       let windE = String.fromCharCode(112,117,98,108,105,115,104,97,98,108,101,95,57,95,54,54,0);
       let terms1 = String.fromCharCode(108,105,102,101,99,121,99,108,101,95,49,95,51,48,0);
       let renewW: Map<any, any> = new Map([[String.fromCharCode(101,95,53,51,95,117,110,109,105,120,0),428], [String.fromCharCode(121,95,50,51,95,98,101,103,97,110,0),64], [String.fromCharCode(119,95,51,55,95,101,110,99,111,100,105,110,103,115,0),491]]);
       let reactnativeratings3: Map<any, any> = new Map([[String.fromCharCode(106,95,56,52,95,104,105,103,104,101,115,116,0),false ], [String.fromCharCode(109,112,97,100,115,112,95,118,95,51,50,0),true ]]);
          let overlayA = String.fromCharCode(108,97,117,110,99,104,101,115,95,52,95,50,54,0);
          let iconnewsshareh = false;
          let flyerr = String.fromCharCode(100,95,55,48,95,99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,0);
         windE = `${renewW.size}`;
         overlayA += `${(2 << (Math.min(5, Math.abs((iconnewsshareh ? 2 : 4)))))}`;
         iconnewsshareh = 43 == flyerr.length;
         flyerr += "2";
      while (terms1.length >= 3) {
          let vignetteY: Array<any> = [430, 895];
          let suggestionv = 3.0;
          let libturbomodulejsijniu = 5.0;
         terms1 = `${windE.length >> (Math.min(Math.abs(3), 5))}`;
         vignetteY = [parseInt(`${libturbomodulejsijniu}`)];
         suggestionv += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${suggestionv}`)), 5))}`);
         libturbomodulejsijniu += parseFloat(`${3 >> (Math.min(5, vignetteY.length))}`);
         break;
      }
         terms1 += `${(String.fromCharCode(111,0) == terms1 ? windE.length : terms1.length)}`;
       let giftbuttonR = 5.0;
       let latnq = 0.0;
      for (let m = 0; m < 3; m++) {
         terms1 = "2";
      }
      p_centerT = turndownl > 88.71;
   let turn7 = p_centerT ? !p_centerT : p_centerT;
   do {
      p_centerT = register_id.length < parseInt(`${turndownl}`);
      if (turn7) {
         break;
      }
   } while (turn7 && (!p_centerT));
      turndownl += parseFloat(`${1 / (Math.max(parseInt(`${turndownl}`), 2))}`);
   if (animationsH.length < giftbuttonZ) {
       let sortk = String.fromCharCode(118,95,51,54,95,112,112,99,99,111,109,109,111,110,0);
       let baselineD: Array<any> = [959, 701, 482];
         baselineD = [2];
       let formT = 4.0;
       let pangle8 = String.fromCharCode(109,101,109,106,114,110,108,95,101,95,53,54,0);
      while (sortk.startsWith(`${baselineD.length}`)) {
         sortk = `${(String.fromCharCode(88,0) == pangle8 ? pangle8.length : parseInt(`${formT}`))}`;
         break;
      }
      let editi = baselineD.length <= 6881535;
      do {
         baselineD = [sortk.length | parseInt(`${formT}`)];
         if (editi) {
            break;
         }
      } while (editi && (4.9 > (formT + 3.72) && (formT + parseFloat(`${baselineD.length}`)) > 3.72));
         baselineD = [sortk.length];
      giftbuttonZ /= Math.max(parseInt(`${turndownl}`), 3);
   }
      turndownl /= Math.max(parseFloat(`${productz}`), 2);
   let topice = giftbuttonZ <= 6749464;
   do {
      giftbuttonZ <<= Math.min(Math.abs(2), 5);
      if (topice) {
         break;
      }
   } while ((1 < (parseInt(`${latnK}`) - giftbuttonZ) || (1 ^ giftbuttonZ) < 3) && topice);
      p_centerT = reactnavigationq > productz;
      handlerV = `${parseInt(`${latnK}`) >> (Math.min(Math.abs(1), 2))}`;
   while (gifgoalg.endsWith(`${libswscaleu}`)) {
       let questiconm = String.fromCharCode(106,95,55,56,95,103,114,101,103,111,114,105,97,110,0);
      if (3 > questiconm.length) {
         questiconm = `${questiconm.length}`;
      }
      for (let h = 0; h < 3; h++) {
          let libturbomodulejsijniR: Map<any, any> = new Map([[String.fromCharCode(99,97,114,95,55,95,53,57,0),String.fromCharCode(116,119,114,112,95,102,95,51,0)], [String.fromCharCode(122,95,54,56,95,108,105,99,101,110,115,101,0),String.fromCharCode(114,101,115,117,109,101,100,95,98,95,53,55,0)], [String.fromCharCode(115,116,97,110,100,97,114,100,115,95,97,95,50,54,0),String.fromCharCode(102,95,56,57,95,112,101,114,109,105,115,115,105,111,110,115,0)]]);
          let exampleimageq = String.fromCharCode(108,111,97,116,95,108,95,56,53,0);
          let minivodj = 2.0;
          let qaag9 = false;
          let videojs_ = 3;
         questiconm += `${videojs_}`;
         libturbomodulejsijniR = new Map([[`${libturbomodulejsijniR.size}`, (String.fromCharCode(89,0) == exampleimageq ? libturbomodulejsijniR.size : exampleimageq.length)]]);
         minivodj /= Math.max(2, (parseFloat(`${(qaag9 ? 4 : 2) | parseInt(`${minivodj}`)}`)));
         qaag9 = libturbomodulejsijniR.size == 16;
         videojs_ += ((qaag9 ? 2 : 1) ^ parseInt(`${minivodj}`));
      }
      for (let w = 0; w < 3; w++) {
         questiconm = `${questiconm.length}`;
      }
      libswscaleu *= parseFloat(`${reactnavigationq >> (Math.min(5, Math.abs(1)))}`);
      break;
   }
   if (handlerV.length > giftbuttonZ) {
      giftbuttonZ >>= Math.min(2, Math.abs(2 + gifgoalg.length));
   }
   for (let a = 0; a < 2; a++) {
      giftbuttonZ %= Math.max(1, productz >> (Math.min(Math.abs(1), 2)));
   }
      p_centerT = productz >= reactnavigationq;
       let expandg = 3;
       let icon2 = 2.0;
       let pointP = String.fromCharCode(99,104,97,110,110,101,108,115,95,106,95,51,53,0);
         expandg %= Math.max(3, parseInt(`${icon2}`) + pointP.length);
         pointP = `${expandg / 1}`;
       let spinner8 = 2;
       let areai = 1;
      for (let w = 0; w < 3; w++) {
         expandg >>= Math.min(Math.abs(1), 5);
      }
      let dependenciesO = 9894476 >= spinner8;
      do {
          let imagesX = 4.0;
          let viewsE = String.fromCharCode(122,95,56,50,95,109,101,115,104,101,115,0);
          let readi = String.fromCharCode(116,105,109,101,100,95,97,95,56,0);
         spinner8 /= Math.max(2, parseInt(`${imagesX}`) + expandg);
         imagesX += (parseFloat(`${String.fromCharCode(70,0) == viewsE ? viewsE.length : readi.length}`));
         readi += `${viewsE.length & 1}`;
         if (dependenciesO) {
            break;
         }
      } while (((2 << (Math.min(3, Math.abs(areai)))) > 3 && 5 > (2 << (Math.min(5, Math.abs(spinner8))))) && dependenciesO);
      latnK /= Math.max(parseFloat(`${1 & parseInt(`${termsj}`)}`), 2);
   if (reactnavigationq > productz) {
      productz <<= Math.min(4, gifgoalg.length);
   }
      reactnavigationq ^= 3;
   for (let j = 0; j < 3; j++) {
       let episodesW = String.fromCharCode(121,95,56,57,95,98,117,108,108,101,116,115,0);
       let formk: Map<any, any> = new Map([[String.fromCharCode(101,109,117,108,97,116,105,111,110,95,100,95,56,51,0),835], [String.fromCharCode(109,95,49,48,95,112,114,105,110,116,99,111,109,112,0),600]]);
       let reactnavigationf = 0.0;
       let close3: Array<any> = [160, 244, 403];
          let filed4 = 5.0;
         formk = new Map([[`${formk.size}`, formk.size]]);
         filed4 += 3 * parseInt(`${filed4}`);
          let mutedz = String.fromCharCode(115,95,55,56,95,100,105,116,97,110,99,101,0);
         episodesW += `${episodesW.length}`;
         mutedz = "1";
      for (let c = 0; c < 1; c++) {
          let bodanL = 4;
          let loadingK = true;
          let questX = 5.0;
          let gestureE: Map<any, any> = new Map([[String.fromCharCode(100,101,112,111,115,105,116,95,115,95,57,54,0),false ], [String.fromCharCode(99,109,105,111,95,111,95,55,0),false ]]);
         close3 = [parseInt(`${questX}`)];
         bodanL |= (bodanL >> (Math.min(5, Math.abs((loadingK ? 2 : 1)))));
         loadingK = !loadingK;
         gestureE = new Map([[`${bodanL}`, 2]]);
      }
       let previewi = String.fromCharCode(112,95,53,49,95,103,109,104,100,0);
       let fieldG = String.fromCharCode(111,95,52,48,95,109,117,108,116,105,101,110,100,0);
      for (let q = 0; q < 1; q++) {
         reactnavigationf *= fieldG.length % 3;
      }
      for (let h = 0; h < 3; h++) {
          let mintegralR: Map<any, any> = new Map([[String.fromCharCode(111,95,50,51,95,108,105,115,116,101,110,0),String.fromCharCode(122,95,53,55,95,114,108,118,108,99,0)], [String.fromCharCode(115,117,112,101,114,103,114,111,117,112,95,116,95,48,0),String.fromCharCode(98,111,111,115,116,95,116,95,56,52,0)]]);
          let shirtH = 0.0;
          let with_eg = String.fromCharCode(109,101,109,98,101,114,95,112,95,53,55,0);
         fieldG += `${parseInt(`${reactnavigationf}`) / 2}`;
         mintegralR = new Map([[`${shirtH}`, with_eg.length]]);
         shirtH /= Math.max(parseFloat(`${parseInt(`${shirtH}`) | 3}`), 3);
         with_eg = `${parseInt(`${shirtH}`)}`;
      }
          let storet = 1.0;
          let gemfileq = String.fromCharCode(112,95,57,95,115,111,110,101,119,99,111,110,110,0);
          let rootb = true;
         previewi = `${parseInt(`${reactnavigationf}`) >> (Math.min(gemfileq.length, 5))}`;
         storet -= (parseFloat(`${parseInt(`${storet}`) | (rootb ? 2 : 2)}`));
         gemfileq = `${((rootb ? 1 : 1) % (Math.max(parseInt(`${storet}`), 3)))}`;
      if (!previewi.includes(`${fieldG.length}`)) {
          let reacte = String.fromCharCode(102,114,97,109,101,115,105,122,101,95,122,95,51,57,0);
          let telegramC = 4.0;
          let matchd = 5.0;
          let flipperB = 5.0;
         fieldG = `${parseInt(`${flipperB}`) - 2}`;
         reacte = `${parseInt(`${matchd}`)}`;
         telegramC *= parseFloat(`${parseInt(`${matchd}`)}`);
         flipperB -= parseInt(`${telegramC}`) % (Math.max(reacte.length, 1));
      }
         formk = new Map([[`${close3.length}`, 3 ^ previewi.length]]);
      for (let o = 0; o < 1; o++) {
         formk = new Map([[fieldG, fieldG.length - parseInt(`${reactnavigationf}`)]]);
      }
      if ((parseInt(`${reactnavigationf}`) - previewi.length) < 4) {
          let bggradientm = String.fromCharCode(100,95,50,48,95,100,97,118,115,0);
          let stationsP = true;
          let module3 = 2;
          let vietname = String.fromCharCode(98,95,53,52,95,118,98,101,122,105,101,114,0);
          let sharedk = 2.0;
         previewi += `${parseInt(`${reactnavigationf}`) % 1}`;
         bggradientm += `${parseInt(`${sharedk}`)}`;
         stationsP = stationsP && vietname.length == 66;
         module3 /= Math.max(parseInt(`${sharedk}`) | 2, 1);
         vietname = "2";
      }
         reactnavigationf *= 2;
      giftbuttonZ |= 2;
   }
      turndownl -= parseFloat(`${1 | register_id.length}`);
       let bgvipxvod6 = String.fromCharCode(98,105,116,114,101,97,100,101,114,95,52,95,55,56,0);
       let unimplementedviewi = String.fromCharCode(108,95,50,53,95,116,101,110,99,0);
       let reactnativejsD = String.fromCharCode(111,118,101,114,108,97,112,115,95,117,95,55,51,0);
       let modityA = 0.0;
          let assistE = 0.0;
          let loading_ = String.fromCharCode(114,95,56,57,95,109,111,99,107,115,0);
          let temp8 = String.fromCharCode(101,95,56,57,95,112,107,99,114,121,112,116,0);
         reactnativejsD += `${parseInt(`${modityA}`)}`;
         assistE *= 3 & temp8.length;
         loading_ = `${temp8.length}`;
         unimplementedviewi += `${reactnativejsD.length + parseInt(`${modityA}`)}`;
         reactnativejsD += `${(reactnativejsD == String.fromCharCode(117,0) ? parseInt(`${modityA}`) : reactnativejsD.length)}`;
       let phoneW = false;
         modityA -= bgvipxvod6.length;
       let mbnativeadvanced5 = String.fromCharCode(112,95,55,54,95,97,117,116,111,114,101,115,105,122,101,115,0);
       let e_playerC = String.fromCharCode(98,97,100,114,101,113,95,101,95,55,55,0);
         modityA /= Math.max(5, bgvipxvod6.length);
       let imagemanagerN = String.fromCharCode(106,95,57,56,95,99,117,116,111,117,116,0);
       let libpangleflippedJ = String.fromCharCode(97,95,54,50,95,107,101,121,115,112,101,99,0);
      gifgoalg = "2";
       let statisticsY = String.fromCharCode(103,95,55,53,95,118,115,105,110,107,0);
       let sharedD = String.fromCharCode(100,108,116,97,95,111,95,49,48,0);
       let combinedi = String.fromCharCode(99,95,53,48,95,117,110,98,108,117,114,0);
         sharedD += `${combinedi.length ^ statisticsY.length}`;
         statisticsY = `${(combinedi == String.fromCharCode(113,0) ? combinedi.length : sharedD.length)}`;
      giftbuttonZ &= reactnavigationq;
       let downloaderB: Array<any> = [107, 583];
       let currentz: Map<any, any> = new Map([[String.fromCharCode(102,109,105,120,95,99,95,52,54,0),278], [String.fromCharCode(102,95,50,56,95,112,111,115,115,105,98,108,101,0),800]]);
         currentz = new Map([[`${currentz.size}`, 3]]);
      for (let d = 0; d < 1; d++) {
         downloaderB.push(currentz.size);
      }
      let nativeexj = 8923694 >= currentz.size;
      do {
          let fullj = String.fromCharCode(108,95,49,54,0);
          let phoneY = String.fromCharCode(115,95,52,48,95,116,97,103,115,0);
         currentz = new Map([[`${currentz.size}`, phoneY.length]]);
         fullj = "1";
         phoneY = `${fullj.length - 1}`;
         if (nativeexj) {
            break;
         }
      } while ((5 >= (3 & currentz.size)) && nativeexj);
          let configure0 = 1.0;
         downloaderB.push(currentz.size << (Math.min(Math.abs(3), 4)));
         configure0 += 3;
      if (currentz.size == downloaderB.length) {
         currentz.set(`${downloaderB.length}`, currentz.size / 3);
      }
         downloaderB = [1];
      productz >>= Math.min(2, downloaderB.length);
 },
      onReadyForDisplay,
    }: wwIndexDice,
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
      "umengFillTypes" | "none" | "commentCodegenLivenodatabgimg"
    >("none");
    const [playbackRate, setPlaybackRate] = useState<number>(1);
    const controlsRef = useRef() as React.MutableRefObject<wwSchedulerBaseline>;
    const accumulatedSkip = useRef(0);
    const [isLastForward, setIsLastForward] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const screenState: screenModel = useAppSelector(
      ({ screenReducer }) => screenReducer
    );
    const userState = useSelector<wwVertical>('userReducer');
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
       let jingdongL = 2;
    let libavutilX: Map<any, any> = new Map([[String.fromCharCode(99,95,57,51,95,100,98,104,97,110,100,108,101,0),String.fromCharCode(99,105,118,105,108,95,119,95,57,48,0)], [String.fromCharCode(100,95,56,57,95,109,97,116,99,104,101,114,0),String.fromCharCode(107,97,110,110,97,95,97,95,54,50,0)]]);
    let chart5: Array<any> = [440, 18, 252];
    let rncore4 = String.fromCharCode(110,95,57,48,95,97,118,99,111,100,101,99,0);
    let referrerk = true;
    let stylesw = true;
    let acceptedK = 3;
    let reactR = 2.0;
    let confirmationh = 5.0;
    let const_caI = 3;
    let videocommonE: Map<any, any> = new Map([[String.fromCharCode(116,114,105,110,103,95,54,95,56,49,0),436], [String.fromCharCode(108,111,99,107,110,101,115,115,95,109,95,49,55,0),787], [String.fromCharCode(109,112,116,111,97,110,110,101,120,98,95,48,95,52,51,0),733]]);
    let canvasd = 5.0;
       let yellowvideolivew = 2;
       let const_xA = String.fromCharCode(115,111,102,116,95,105,95,52,53,0);
       let directu = 4.0;
         const_xA = `${yellowvideolivew << (Math.min(const_xA.length, 2))}`;
      let downloaderx = 7187549.0 <= directu;
      do {
          let actionX = 4.0;
          let sourcem = String.fromCharCode(111,95,50,56,95,116,111,110,101,109,97,112,0);
          let filledD = String.fromCharCode(101,116,104,101,114,110,101,116,95,50,95,51,50,0);
          let gesturesd = String.fromCharCode(112,99,109,119,98,95,103,95,50,55,0);
          let disconnectedlogob = String.fromCharCode(109,95,52,57,95,115,111,117,114,99,101,105,100,0);
         directu -= parseFloat(`${sourcem.length}`);
         actionX += disconnectedlogob.length * 1;
         sourcem = `${filledD.length << (Math.min(Math.abs(3), 2))}`;
         filledD = `${3 + parseInt(`${actionX}`)}`;
         gesturesd = `${disconnectedlogob.length}`;
         if (downloaderx) {
            break;
         }
      } while (downloaderx && ((2.54 - directu) == 1.78 && (yellowvideolivew % (Math.max(4, 2))) == 3));
         const_xA += `${const_xA.length}`;
         const_xA += `${const_xA.length >> (Math.min(4, Math.abs(parseInt(`${directu}`))))}`;
         directu += parseFloat(`${parseInt(`${directu}`)}`);
      if (const_xA.length >= 1) {
          let schedulex: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,109,105,116,95,50,95,51,51,0),String.fromCharCode(108,105,109,105,116,97,116,105,111,110,95,107,95,49,52,0)], [String.fromCharCode(105,110,116,114,111,100,117,99,116,105,111,110,95,98,95,51,54,0),String.fromCharCode(102,101,119,95,119,95,56,48,0)]]);
          let whiteY = String.fromCharCode(109,95,52,52,95,104,97,100,100,0);
          let overlayk: Array<any> = [630, 975, 81];
          let viewsh: Array<any> = [689, 181];
          let macauy = String.fromCharCode(110,95,52,52,95,111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,0);
         const_xA = `${yellowvideolivew & 2}`;
         schedulex.set(macauy, overlayk.length);
         whiteY += `${2 + overlayk.length}`;
         viewsh.push(overlayk.length);
         macauy += `${overlayk.length}`;
      }
         directu += parseFloat(`${parseInt(`${directu}`) ^ 2}`);
      while ((1 << (Math.min(3, Math.abs(yellowvideolivew)))) == 3 || (1.94 + directu) == 3.12) {
          let entryR = String.fromCharCode(119,115,118,113,97,95,106,95,51,51,0);
          let downarrowq = String.fromCharCode(117,110,115,116,97,107,101,95,120,95,51,57,0);
          let privatechatbgx = String.fromCharCode(97,110,99,104,111,114,95,116,95,53,50,0);
         directu /= Math.max(2, parseFloat(`${3 * const_xA.length}`));
         entryR += "3";
         downarrowq = `${entryR.length / (Math.max(2, downarrowq.length))}`;
         privatechatbgx = `${entryR.length | 1}`;
         break;
      }
       let greyu: Array<any> = [966, 359];
       let shrinkN: Array<any> = [String.fromCharCode(103,95,55,54,95,115,104,111,114,116,99,117,116,115,0), String.fromCharCode(111,112,115,95,121,95,49,50,0)];
      libavutilX = new Map([[`${stylesw}`, (parseInt(`${reactR}`) ^ (stylesw ? 2 : 4))]]);
       let imagenetworkerr_ = 3.0;
      let iconuserM = imagenetworkerr_ <= 5622902.0;
      do {
         imagenetworkerr_ *= parseInt(`${imagenetworkerr_}`);
         if (iconuserM) {
            break;
         }
      } while (iconuserM && ((imagenetworkerr_ - imagenetworkerr_) < 4.80));
      while (2.17 == imagenetworkerr_) {
         imagenetworkerr_ /= Math.max(5, parseInt(`${imagenetworkerr_}`) + 3);
         break;
      }
      let klevins = 6959154.0 <= imagenetworkerr_;
      do {
         imagenetworkerr_ *= parseInt(`${imagenetworkerr_}`) | 3;
         if (klevins) {
            break;
         }
      } while (((imagenetworkerr_ * imagenetworkerr_) <= 3.15) && klevins);
      const_caI &= acceptedK >> (Math.min(Math.abs(parseInt(`${reactR}`)), 4));
   let scorew = const_caI >= 5343114;
   do {
       let utilsH = String.fromCharCode(120,95,54,49,95,99,111,110,115,117,109,101,100,0);
       let videocommonw = 0.0;
         videocommonw -= parseInt(`${videocommonw}`);
          let whistleoranget = String.fromCharCode(119,95,55,53,95,114,101,100,105,114,101,99,116,105,111,110,97,108,0);
         videocommonw += parseInt(`${videocommonw}`) / (Math.max(whistleoranget.length, 6));
          let checkbox7 = 0;
          let favoritei = 5.0;
          let redgoall = true;
         videocommonw -= 1 | parseInt(`${videocommonw}`);
         checkbox7 -= checkbox7 * parseInt(`${favoritei}`);
         favoritei += 1 ^ checkbox7;
         redgoall = redgoall || 35.17 >= favoritei;
         utilsH += "1";
      if ((videocommonw - 1.14) > 5.13) {
         utilsH += "2";
      }
      let internet7 = 8165924.0 <= videocommonw;
      do {
          let runtimej = 1;
          let right8 = false;
          let gradle1 = 2.0;
          let common3: Map<any, any> = new Map([[String.fromCharCode(104,105,116,95,98,95,53,53,0),String.fromCharCode(106,95,50,49,95,99,111,110,116,114,97,115,116,0)], [String.fromCharCode(99,111,109,98,105,110,101,114,95,50,95,51,55,0),String.fromCharCode(103,114,97,121,95,113,95,53,48,0)]]);
         videocommonw += common3.size << (Math.min(Math.abs(3), 5));
         runtimej |= runtimej;
         right8 = 45.8 >= gradle1;
         gradle1 /= Math.max(5, parseFloat(`${runtimej}`));
         common3.set(`${runtimej}`, runtimej);
         if (internet7) {
            break;
         }
      } while (internet7 && (videocommonw == utilsH.length));
      const_caI |= jingdongL;
      if (scorew) {
         break;
      }
   } while ((2.19 > reactR) && scorew);
      rncore4 += `${(3 - (referrerk ? 5 : 2))}`;
       let dialogd = 1.0;
       let spinnert = 5.0;
         spinnert *= parseInt(`${spinnert}`) / 1;
       let privilege3 = 3.0;
       let otherv = 2.0;
         spinnert /= Math.max(5, parseInt(`${otherv}`) | parseInt(`${privilege3}`));
         spinnert += parseInt(`${dialogd}`) * parseInt(`${privilege3}`);
      if ((privilege3 / 2.23) > 3.75 && 2.23 > (spinnert / (Math.max(privilege3, 1)))) {
         privilege3 -= parseInt(`${spinnert}`);
      }
          let ball7: Map<any, any> = new Map([[String.fromCharCode(102,95,55,56,95,104,97,97,114,0),146], [String.fromCharCode(101,122,105,101,114,95,121,95,48,0),739]]);
          let stationsc = true;
         dialogd /= Math.max(3, parseInt(`${dialogd}`) % 1);
         ball7 = new Map([[`${ball7.size}`, ((stationsc ? 4 : 4) & ball7.size)]]);
         stationsc = null != ball7.get(`${stationsc}`);
      jingdongL ^= parseInt(`${reactR}`);
      libavutilX.set(`${reactR}`, acceptedK % 3);

      if (onBack !== undefined) {

   if ((rncore4.length * parseInt(`${confirmationh}`)) > 1 && (rncore4.length * 1) > 3) {
      confirmationh *= parseFloat(`${rncore4.length + 1}`);
   }
   let subbasketballplayerm = 8396541 >= libavutilX.size;
   do {
      libavutilX = new Map([[`${reactR}`, parseInt(`${reactR}`) + 1]]);
      if (subbasketballplayerm) {
         break;
      }
   } while ((libavutilX.size > videocommonE.size) && subbasketballplayerm);
   for (let v = 0; v < 1; v++) {
       let middlewareY = 5;
          let iconfeedback4 = true;
         middlewareY ^= middlewareY % 2;
         iconfeedback4 = !iconfeedback4;
      let shareC = 8241715 >= middlewareY;
      do {
          let collectionn = 5.0;
          let forwards = String.fromCharCode(112,95,52,51,95,102,101,97,116,117,114,101,115,0);
          let interstitialy: Map<any, any> = new Map([[String.fromCharCode(101,95,50,57,95,105,109,112,97,99,116,0),String.fromCharCode(109,95,53,49,95,97,118,102,109,116,0)], [String.fromCharCode(105,95,52,95,100,116,100,102,0),String.fromCharCode(113,95,53,57,95,112,97,114,116,105,99,105,112,97,116,105,110,103,0)], [String.fromCharCode(113,95,52,50,95,112,97,115,116,101,100,0),String.fromCharCode(101,95,49,53,95,114,114,111,114,0)]]);
          let spinner4 = String.fromCharCode(107,95,51,52,95,100,101,101,112,0);
          let indexl = String.fromCharCode(98,95,53,48,95,112,99,109,119,98,0);
         middlewareY ^= parseInt(`${collectionn}`) << (Math.min(indexl.length, 3));
         collectionn += parseFloat(`${interstitialy.size}`);
         forwards += `${3 >> (Math.min(4, forwards.length))}`;
         interstitialy = new Map([[`${interstitialy.size}`, interstitialy.size / 3]]);
         spinner4 = `${(forwards == String.fromCharCode(68,0) ? forwards.length : spinner4.length)}`;
         indexl = `${spinner4.length & interstitialy.size}`;
         if (shareC) {
            break;
         }
      } while (shareC && ((middlewareY * middlewareY) > 5));
         middlewareY += 1;
      chart5 = [(parseInt(`${reactR}`) % (Math.max(10, (stylesw ? 2 : 3))))];
   }
      reactR *= parseInt(`${confirmationh}`);
   if (stylesw || (3 / (Math.max(1, libavutilX.size))) == 4) {
       let configO = 3.0;
       let ksade = 3.0;
          let nativeg: Map<any, any> = new Map([[String.fromCharCode(109,95,52,48,95,115,116,97,99,107,0),510], [String.fromCharCode(105,114,114,101,108,118,97,110,116,95,117,95,57,51,0),593]]);
          let controlsN = 0.0;
          let submitz = String.fromCharCode(114,95,57,48,95,116,97,116,105,99,0);
         configO /= Math.max(parseInt(`${ksade}`), 2);
         nativeg.set(`${controlsN}`, nativeg.size);
         controlsN /= Math.max(4, parseFloat(`${submitz.length}`));
         submitz += `${nativeg.size}`;
         ksade -= parseFloat(`${parseInt(`${configO}`)}`);
         ksade -= parseFloat(`${2 / (Math.max(1, parseInt(`${ksade}`)))}`);
          let dacccfaabfbcbadeebddcabacdffdbr = String.fromCharCode(112,97,110,105,99,95,52,95,55,53,0);
          let attributedstringV = 3;
          let singaporeo = 3.0;
         ksade -= parseFloat(`${attributedstringV | parseInt(`${configO}`)}`);
         dacccfaabfbcbadeebddcabacdffdbr = `${3 / (Math.max(8, dacccfaabfbcbadeebddcabacdffdbr.length))}`;
         attributedstringV |= (String.fromCharCode(104,0) == dacccfaabfbcbadeebddcabacdffdbr ? parseInt(`${singaporeo}`) : dacccfaabfbcbadeebddcabacdffdbr.length);
         singaporeo /= Math.max(dacccfaabfbcbadeebddcabacdffdbr.length, 3);
          let libavutilc = 5;
          let utils9 = String.fromCharCode(110,97,110,112,97,95,106,95,54,48,0);
          let currentO: Map<any, any> = new Map([[String.fromCharCode(113,117,101,114,121,95,122,95,52,54,0),200], [String.fromCharCode(121,95,54,48,95,97,118,100,101,118,105,99,101,0),84]]);
         configO *= parseInt(`${configO}`) % (Math.max(5, utils9.length));
         libavutilc >>= Math.min(Math.abs(3), 5);
         utils9 += `${currentO.size}`;
         currentO.set(`${libavutilc}`, 2 >> (Math.min(3, Math.abs(libavutilc))));
         ksade /= Math.max(1, parseFloat(`${parseInt(`${configO}`)}`));
      libavutilX.set(rncore4, (rncore4.length ^ (stylesw ? 3 : 2)));
   }
      chart5.push(const_caI ^ 1);
        onBack();

       let reacta = 5.0;
       let singleN: Map<any, any> = new Map([[String.fromCharCode(103,95,51,57,95,118,101,99,116,111,114,100,0),String.fromCharCode(101,120,101,99,117,116,101,95,109,95,50,52,0)], [String.fromCharCode(114,101,111,112,101,110,95,105,95,56,56,0),String.fromCharCode(116,95,51,53,95,105,115,114,101,97,100,111,110,108,121,0)]]);
       let popupa = 1.0;
          let tick3 = 3;
          let righty: Array<any> = [598, 878, 921];
          let libfbF: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,100,97,116,97,95,117,95,54,56,0),String.fromCharCode(105,110,115,116,97,108,108,101,100,95,52,95,55,48,0)], [String.fromCharCode(112,107,99,115,95,122,95,49,56,0),String.fromCharCode(105,95,56,95,115,117,98,106,101,99,116,115,0)], [String.fromCharCode(99,111,109,112,97,114,105,115,111,110,95,121,95,50,49,0),String.fromCharCode(97,95,50,56,95,112,117,98,105,99,0)]]);
         singleN.set(`${popupa}`, 1 << (Math.min(1, Math.abs(singleN.size))));
         tick3 |= tick3 + righty.length;
         righty = [libfbF.size - tick3];
         libfbF = new Map([[`${libfbF.size}`, righty.length >> (Math.min(5, Math.abs(libfbF.size)))]]);
       let headerO = 3.0;
       let ballD = 1.0;
      if (reacta < popupa) {
         popupa += parseFloat(`${singleN.size / 1}`);
      }
      let qaagq = ballD <= 5739219.0;
      do {
         ballD += parseInt(`${ballD}`) / (Math.max(4, singleN.size));
         if (qaagq) {
            break;
         }
      } while (qaagq && ((reacta + ballD) == 5.57));
          let navigation6 = 1;
          let bufferq = String.fromCharCode(115,97,102,97,114,121,95,48,95,53,51,0);
         reacta -= parseInt(`${ballD}`);
         navigation6 &= navigation6 + 1;
         bufferq += `${bufferq.length - 3}`;
      let filed6 = 7716341 <= singleN.size;
      do {
         singleN = new Map([[`${singleN.size}`, parseInt(`${popupa}`)]]);
         if (filed6) {
            break;
         }
      } while ((singleN.size < 5) && filed6);
       let arrowrightm: Map<any, any> = new Map([[String.fromCharCode(115,101,103,116,114,101,101,95,104,95,51,53,0),855], [String.fromCharCode(104,105,103,104,108,105,103,104,116,101,114,95,49,95,48,0),835]]);
       let sigmoba: Map<any, any> = new Map([[String.fromCharCode(116,97,103,97,118,114,95,98,95,51,56,0),String.fromCharCode(101,100,105,116,111,114,95,102,95,49,57,0)], [String.fromCharCode(105,95,52,54,95,118,101,114,116,115,0),String.fromCharCode(98,95,50,55,95,99,111,109,112,97,110,100,0)], [String.fromCharCode(97,98,115,100,105,102,102,95,99,95,57,51,0),String.fromCharCode(104,95,52,50,95,115,117,98,118,105,100,101,111,0)]]);
      let math7 = reacta >= 8027218.0;
      do {
          let indicator8 = String.fromCharCode(115,117,98,115,101,113,117,101,110,116,95,112,95,53,49,0);
          let eighteenW = 4.0;
         reacta /= Math.max(indicator8.length, 1);
         indicator8 = `${parseInt(`${eighteenW}`) % 1}`;
         eighteenW += parseInt(`${eighteenW}`) % 2;
         if (math7) {
            break;
         }
      } while (math7 && (sigmoba.size <= parseInt(`${reacta}`)));
         singleN.set(`${sigmoba.size}`, sigmoba.size);
      acceptedK <<= Math.min(2, Math.abs(videocommonE.size));
   if ((reactR * acceptedK) <= 2.9) {
      acceptedK -= rncore4.length;
   }
   while (const_caI >= 5) {
       let configuref: Map<any, any> = new Map([[String.fromCharCode(100,99,109,112,95,57,95,49,56,0),String.fromCharCode(116,117,112,108,101,115,95,101,95,49,52,0)], [String.fromCharCode(102,105,108,116,101,114,102,95,110,95,57,55,0),String.fromCharCode(118,95,55,51,95,115,97,110,105,116,105,122,101,114,0)]]);
       let gradlewv = false;
       let uimanagerx = true;
       let notificationfillemptyG = String.fromCharCode(97,95,53,54,95,99,111,108,108,97,116,105,110,103,0);
      while (!uimanagerx) {
         notificationfillemptyG = `${((uimanagerx ? 1 : 1) << (Math.min(Math.abs(configuref.size), 1)))}`;
         break;
      }
       let vipsport9 = String.fromCharCode(113,117,105,99,107,99,111,109,112,114,101,115,115,95,108,95,54,49,0);
      let username5 = gradlewv ? !gradlewv : gradlewv;
      do {
         gradlewv = (notificationfillemptyG.length % (Math.max(6, configuref.size))) == 90;
         if (username5) {
            break;
         }
      } while (username5 && (gradlewv || 5 < (configuref.size % 2)));
      for (let c = 0; c < 3; c++) {
         vipsport9 = `${((uimanagerx ? 1 : 5) + notificationfillemptyG.length)}`;
      }
       let productO = String.fromCharCode(111,95,51,48,95,114,101,109,97,112,112,105,110,103,0);
         gradlewv = 100 == productO.length || notificationfillemptyG.length == 100;
      for (let d = 0; d < 1; d++) {
          let libreanimated7 = String.fromCharCode(115,116,97,116,105,99,95,107,95,49,49,0);
         gradlewv = vipsport9.length < 46;
         libreanimated7 = `${libreanimated7.length}`;
      }
         uimanagerx = 19 <= configuref.size;
      while (1 < (configuref.size >> (Math.min(productO.length, 1))) || 1 < (productO.length >> (Math.min(2, Math.abs(configuref.size))))) {
         configuref.set(vipsport9, vipsport9.length / (Math.max(1, 1)));
         break;
      }
      let renewy = uimanagerx ? !uimanagerx : uimanagerx;
      do {
          let termsA: Array<any> = [335, 456];
          let iconfeedbacke = String.fromCharCode(107,95,53,49,95,112,108,97,116,102,111,114,109,0);
          let navigationZ = 5.0;
          let templateprocessorV = true;
         uimanagerx = 12 > vipsport9.length;
         termsA.push(termsA.length);
         iconfeedbacke += `${(parseInt(`${navigationZ}`) & (templateprocessorV ? 1 : 3))}`;
         navigationZ -= 2 | iconfeedbacke.length;
         templateprocessorV = iconfeedbacke == String.fromCharCode(68,0);
         if (renewy) {
            break;
         }
      } while ((2 == (configuref.size - 4)) && renewy);
      if (configuref.size >= vipsport9.length) {
          let commentv = 4.0;
          let libcxxcomponentsP = true;
          let china1 = String.fromCharCode(104,95,57,95,97,118,97,116,97,114,115,0);
          let iconbellactives = String.fromCharCode(116,101,115,116,101,114,95,108,95,53,50,0);
         configuref = new Map([[`${uimanagerx}`, ((uimanagerx ? 1 : 3) >> (Math.min(notificationfillemptyG.length, 4)))]]);
         commentv /= Math.max(5, parseFloat(`${china1.length - parseInt(`${commentv}`)}`));
         libcxxcomponentsP = china1.length < 70 || !libcxxcomponentsP;
         iconbellactives += "3";
      }
      while (configuref.size == 1) {
          let componentsP = String.fromCharCode(115,95,52,56,95,100,117,115,116,0);
          let utilsa = 1;
          let t_imagep = String.fromCharCode(115,116,117,98,98,101,100,95,121,95,52,48,0);
         configuref.set(`${utilsa}`, 3);
         componentsP = `${(String.fromCharCode(117,0) == t_imagep ? t_imagep.length : componentsP.length)}`;
         utilsa >>= Math.min(Math.abs(t_imagep.length >> (Math.min(Math.abs(1), 1))), 4);
         break;
      }
      const_caI %= Math.max(4, 1);
      break;
   }
      referrerk = parseFloat(`${const_caI}`) >= confirmationh;
       let eventsplashQ = String.fromCharCode(119,95,53,51,95,97,100,111,98,101,0);
       let reminderW = String.fromCharCode(115,116,97,99,107,95,118,95,51,49,0);
       let profileactivew: Array<any> = [257, 620];
         eventsplashQ = `${3 + reminderW.length}`;
       let profileactivej = 5.0;
         reminderW = "1";
      while (eventsplashQ.length > profileactivej) {
          let plashM = 1.0;
          let sheetN = String.fromCharCode(121,95,51,54,95,54,95,55,53,0);
          let actionH: Array<any> = [String.fromCharCode(97,112,112,108,105,101,114,95,54,95,54,51,0), String.fromCharCode(117,95,54,55,95,115,116,111,114,101,102,114,97,109,101,0), String.fromCharCode(99,95,57,57,95,109,112,106,112,101,103,0)];
         eventsplashQ += `${reminderW.length ^ eventsplashQ.length}`;
         plashM -= parseInt(`${plashM}`) ^ sheetN.length;
         sheetN += `${actionH.length | parseInt(`${plashM}`)}`;
         actionH.push(actionH.length);
         break;
      }
      let options6 = 4967857 >= reminderW.length;
      do {
         reminderW += "3";
         if (options6) {
            break;
         }
      } while (options6 && (eventsplashQ == String.fromCharCode(114,0)));
       let bufferN = 5.0;
       let disconnectedN = 2.0;
      while (3.74 <= (profileactivej / (Math.max(2, profileactivew.length)))) {
         profileactivej /= Math.max(3, profileactivew.length);
         break;
      }
       let taiwanS = 3;
         profileactivew.push(parseInt(`${disconnectedN}`));
      acceptedK %= Math.max(3, 1);
   if (rncore4.startsWith(`${acceptedK}`)) {
       let bridgeU = 5;
       let becomeq = 3;
       let halfY = String.fromCharCode(98,95,51,49,95,99,111,114,101,0);
       let huaweiH = 4.0;
      if ((bridgeU * becomeq) <= 1 && 2 <= (1 * bridgeU)) {
          let windx = String.fromCharCode(114,95,50,48,95,118,97,114,109,97,115,107,0);
          let libfbjni9: Array<any> = [642, 210, 408];
          let subtextC = false;
          let sigmobC: Map<any, any> = new Map([[String.fromCharCode(108,95,54,48,95,105,110,100,105,99,105,101,115,0),939], [String.fromCharCode(97,99,116,105,118,97,116,105,111,110,115,95,49,95,52,50,0),276], [String.fromCharCode(122,95,54,56,95,115,117,112,112,111,114,116,115,0),500]]);
          let gpay8 = true;
         becomeq <<= Math.min(windx.length, 4);
         windx = "1";
         libfbjni9.push(((gpay8 ? 1 : 3)));
         sigmobC.set(`${subtextC}`, 1);
         gpay8 = sigmobC.size >= 39 || !subtextC;
      }
         becomeq |= bridgeU;
      while (bridgeU <= huaweiH) {
         bridgeU /= Math.max(1, 3 | becomeq);
         break;
      }
       let club5 = 1;
      let ajaxj = 5119533 >= club5;
      do {
         club5 %= Math.max(3, 2);
         if (ajaxj) {
            break;
         }
      } while (ajaxj && (club5 >= 3));
       let executorr = String.fromCharCode(98,117,116,116,101,114,95,54,95,54,52,0);
       let areax = String.fromCharCode(108,111,103,102,110,95,56,95,51,53,0);
         bridgeU ^= bridgeU;
      for (let w = 0; w < 2; w++) {
         halfY = "2";
      }
         halfY += `${1 / (Math.max(8, becomeq))}`;
         club5 ^= (areax == String.fromCharCode(106,0) ? areax.length : becomeq);
          let defaultprofilepicx = false;
         halfY = `${parseInt(`${huaweiH}`)}`;
         defaultprofilepicx = !defaultprofilepicx;
      let analyticM = 5687003 <= becomeq;
      do {
         becomeq &= 3 + halfY.length;
         if (analyticM) {
            break;
         }
      } while ((2 == becomeq) && analyticM);
      rncore4 = "2";
   }
        lockOrientation("PORTRAIT");

      libavutilX = new Map([[`${libavutilX.size}`, 2 >> (Math.min(1, rncore4.length))]]);
      chart5 = [1 / (Math.max(2, acceptedK))];
      confirmationh += parseFloat(`${const_caI}`);
   if (!stylesw) {
       let termsp = 4.0;
       let mintegralo = 0.0;
       let rewindS: Array<any> = [636, 275, 702];
       let recommendationf: Map<any, any> = new Map([[String.fromCharCode(108,101,97,118,105,110,103,95,117,95,57,54,0),false ], [String.fromCharCode(104,95,53,50,95,108,97,116,116,105,99,101,0),false ]]);
       let gifgoalD = 5.0;
         rewindS.push(recommendationf.size);
       let favoriteT = 1.0;
      while (rewindS.length < 1) {
         rewindS.push(rewindS.length);
         break;
      }
      for (let q = 0; q < 3; q++) {
          let eyeopenq = 4;
          let controls4 = 4;
         recommendationf = new Map([[`${gifgoalD}`, 3]]);
         eyeopenq ^= 3;
         controls4 %= Math.max(3, eyeopenq);
      }
      let basez = favoriteT <= 6834148.0;
      do {
          let settingc: Map<any, any> = new Map([[String.fromCharCode(110,95,50,49,95,115,108,105,99,101,100,0),760], [String.fromCharCode(106,95,54,52,0),984], [String.fromCharCode(114,95,57,56,95,109,97,116,116,101,100,0),763]]);
          let rncoreZ: Map<any, any> = new Map([[String.fromCharCode(97,95,56,52,95,102,109,115,117,98,0),String.fromCharCode(116,105,109,101,115,95,101,95,50,52,0)], [String.fromCharCode(114,101,118,105,111,117,115,95,115,95,53,52,0),String.fromCharCode(113,95,49,57,95,117,110,115,99,97,108,101,0)], [String.fromCharCode(105,110,115,105,100,101,95,110,95,56,49,0),String.fromCharCode(122,95,55,95,116,114,97,100,105,116,105,111,110,97,108,0)]]);
          let dependencyq: Array<any> = [289, 218, 790];
          let mathp = 2;
         favoriteT *= 2;
         settingc = new Map([[`${rncoreZ.size}`, 3]]);
         rncoreZ.set(`${rncoreZ.size}`, settingc.size);
         dependencyq = [settingc.size + rncoreZ.size];
         mathp &= mathp % 2;
         if (basez) {
            break;
         }
      } while ((termsp > favoriteT) && basez);
          let videocommonH = String.fromCharCode(101,95,52,55,95,114,108,105,110,101,0);
          let disconnectedlogoj: Array<any> = [815, 777];
          let logousert = String.fromCharCode(106,95,51,55,95,101,108,97,112,115,101,100,0);
         mintegralo *= parseFloat(`${disconnectedlogoj.length}`);
         videocommonH = `${videocommonH.length << (Math.min(Math.abs(2), 1))}`;
         disconnectedlogoj = [videocommonH.length];
         logousert += `${videocommonH.length | 2}`;
         recommendationf.set(`${termsp}`, parseInt(`${termsp}`) + parseInt(`${favoriteT}`));
         rewindS = [recommendationf.size * 2];
       let iconsaveimageV = false;
         rewindS.push(parseInt(`${gifgoalD}`));
      if (rewindS.includes(termsp)) {
         rewindS = [parseInt(`${mintegralo}`)];
      }
          let annert = 5.0;
          let yellowvideoliveo = 1;
         recommendationf = new Map([[`${yellowvideoliveo}`, 2]]);
         annert += parseInt(`${annert}`) & parseInt(`${annert}`);
         yellowvideoliveo -= 1;
         rewindS = [((iconsaveimageV ? 2 : 2) / (Math.max(parseInt(`${favoriteT}`), 3)))];
      for (let m = 0; m < 1; m++) {
         mintegralo -= parseFloat(`${3}`);
      }
          let componentsW = true;
          let whistleorangey = true;
         recommendationf.set(`${termsp}`, parseInt(`${termsp}`));
         componentsW = (whistleorangey ? componentsW : whistleorangey);
      stylesw = 71.49 <= (confirmationh + gifgoalD);
   }
      reactR /= Math.max(5, 2);
      referrerk = jingdongL <= 37;
        setIsFullScreen(false);
      } else {

       let banner6: Array<any> = [String.fromCharCode(110,95,54,48,95,112,108,97,121,0), String.fromCharCode(110,95,56,52,95,99,111,109,109,101,110,116,0)];
       let gestures7 = 2.0;
      while ((5.8 - gestures7) <= 5.90 && (parseFloat(`${banner6.length}`) - gestures7) <= 5.8) {
         banner6.push(2);
         break;
      }
       let mail2 = String.fromCharCode(101,120,116,95,116,95,53,50,0);
       let forwardi = 2.0;
      if ((forwardi / (Math.max(4.60, 3))) <= 2.48) {
         forwardi *= parseFloat(`${banner6.length - 2}`);
      }
      for (let x = 0; x < 2; x++) {
         mail2 += `${banner6.length}`;
      }
         forwardi -= parseFloat(`${parseInt(`${forwardi}`)}`);
      jingdongL /= Math.max(const_caI, 3);
   let hookO = stylesw ? !stylesw : stylesw;
   do {
      stylesw = 34 < jingdongL || !referrerk;
      if (hookO) {
         break;
      }
   } while ((!referrerk || !stylesw) && hookO);
   let cancelL = referrerk ? !referrerk : referrerk;
   do {
      referrerk = String.fromCharCode(117,0) == rncore4;
      if (cancelL) {
         break;
      }
   } while ((3 == chart5.length) && cancelL);
   for (let k = 0; k < 3; k++) {
      referrerk = rncore4.endsWith(`${referrerk}`);
   }
   while (rncore4.includes(`${referrerk}`)) {
      referrerk = 62 == const_caI || 62 == chart5.length;
      break;
   }
   for (let v = 0; v < 3; v++) {
      stylesw = (parseInt(`${confirmationh}`) - videocommonE.size) < 66;
   }
        

       let reducerM = String.fromCharCode(114,95,56,50,95,103,114,101,101,116,105,110,103,0);
       let nativeexs = 4.0;
       let executorN: Map<any, any> = new Map([[String.fromCharCode(119,101,98,109,105,100,115,95,113,95,52,0),908], [String.fromCharCode(98,114,111,97,100,99,97,115,116,95,98,95,53,52,0),273]]);
      if (reducerM.length <= nativeexs) {
         nativeexs *= executorN.size - parseInt(`${nativeexs}`);
      }
      for (let t = 0; t < 2; t++) {
          let kick4 = 1.0;
         nativeexs /= Math.max(4, 3);
         kick4 /= Math.max(parseFloat(`${1}`), 1);
      }
      let baiduW = nativeexs >= 6412780.0;
      do {
         nativeexs -= 2;
         if (baiduW) {
            break;
         }
      } while ((4 < (executorN.size + parseInt(`${nativeexs}`)) || (executorN.size % 4) < 2) && baiduW);
         nativeexs *= 3;
      for (let o = 0; o < 3; o++) {
         reducerM += `${2 >> (Math.min(3, Math.abs(executorN.size)))}`;
      }
      if (!reducerM.includes(`${nativeexs}`)) {
         reducerM = `${parseInt(`${nativeexs}`)}`;
      }
       let holderZ = 1.0;
       let network_ = 4.0;
         nativeexs /= Math.max(parseInt(`${holderZ}`), 5);
      if ((reducerM.length - nativeexs) <= 5.10 && (nativeexs - 5.10) <= 3.36) {
         nativeexs += parseInt(`${network_}`) << (Math.min(1, Math.abs(parseInt(`${holderZ}`))));
      }
      stylesw = null == videocommonE.get(`${nativeexs}`);
   if (3.63 == reactR) {
      reactR *= 1;
   }
   let type_miS = 6684331 >= const_caI;
   do {
       let materiala = false;
       let webviewM = String.fromCharCode(110,95,53,50,95,110,111,100,111,119,110,0);
          let abidetect_: Array<any> = [966, 546, 361];
         webviewM += `${abidetect_.length}`;
       let imagenetworkerrC = 1;
         materiala = (webviewM.length + imagenetworkerrC) <= 74;
          let gradlee: Array<any> = [779, 643];
          let buildK = String.fromCharCode(115,98,103,112,95,102,95,54,0);
         imagenetworkerrC &= 1;
         gradlee = [2 - gradlee.length];
         buildK = `${gradlee.length}`;
          let assistf: Map<any, any> = new Map([[String.fromCharCode(119,95,49,51,95,102,114,97,110,100,111,109,0),811], [String.fromCharCode(100,101,113,117,97,110,116,95,113,95,50,50,0),721], [String.fromCharCode(113,95,49,52,95,99,116,114,120,0),710]]);
          let mimoo = 2;
         materiala = webviewM.length >= 87 || 87 >= assistf.size;
         assistf = new Map([[`${mimoo}`, 1 ^ mimoo]]);
      let applications = String.fromCharCode(99,110,106,51,0) == webviewM;
      do {
         webviewM += "2";
         if (applications) {
            break;
         }
      } while ((4 <= (imagenetworkerrC / 4) && (imagenetworkerrC / (Math.max(webviewM.length, 5))) <= 4) && applications);
      const_caI /= Math.max((String.fromCharCode(57,0) == webviewM ? parseInt(`${confirmationh}`) : webviewM.length), 4);
      if (type_miS) {
         break;
      }
   } while (type_miS && (4.43 > reactR));
   for (let y = 0; y < 3; y++) {
       let graphicsK: Array<any> = [String.fromCharCode(112,114,101,115,101,114,118,101,115,95,121,95,57,57,0), String.fromCharCode(104,95,54,55,95,116,101,120,116,0)];
       let carouselH = String.fromCharCode(97,95,55,48,95,102,116,121,112,0);
       let weather9: Array<any> = [62, 442];
       let sortb = String.fromCharCode(121,95,57,52,95,105,110,108,105,110,101,0);
       let list7 = String.fromCharCode(105,109,112,114,101,115,115,105,111,110,95,118,95,49,50,0);
       let gifgoalbgG: Map<any, any> = new Map([[String.fromCharCode(113,95,54,56,95,117,112,108,111,97,100,101,114,0),99], [String.fromCharCode(116,104,111,117,103,104,95,122,95,54,0),244]]);
       let singlea: Map<any, any> = new Map([[String.fromCharCode(110,95,55,53,95,112,104,105,0),true ], [String.fromCharCode(104,95,56,52,95,115,108,117,114,112,0),true ]]);
          let unimplementedvieww: Map<any, any> = new Map([[String.fromCharCode(105,95,52,51,95,101,110,99,114,121,112,116,105,110,103,0),480], [String.fromCharCode(99,104,114,111,109,97,107,101,121,95,100,95,49,0),832]]);
         singlea.set(`${carouselH}`, unimplementedvieww.size & carouselH.length);
      while ((sortb.length >> (Math.min(Math.abs(2), 1))) > 3) {
         gifgoalbgG = new Map([[`${graphicsK.length}`, 2]]);
         break;
      }
      while (5 >= sortb.length) {
          let leakcheckerw = String.fromCharCode(111,95,51,53,95,102,105,100,99,116,0);
          let mailP: Map<any, any> = new Map([[String.fromCharCode(114,97,99,105,110,103,95,120,95,56,55,0),String.fromCharCode(97,95,57,95,108,105,115,116,101,110,101,114,115,0)], [String.fromCharCode(105,95,54,48,95,99,104,111,111,115,101,0),String.fromCharCode(105,95,54,53,95,100,114,105,118,105,110,103,0)]]);
         gifgoalbgG.set(`${gifgoalbgG.size}`, gifgoalbgG.size - 3);
         leakcheckerw += `${mailP.size + leakcheckerw.length}`;
         mailP = new Map([[`${mailP.size}`, mailP.size]]);
         break;
      }
         singlea = new Map([[`${graphicsK.length}`, weather9.length]]);
       let libswresamplek: Array<any> = [349, 289, 990];
       let flagZ: Array<any> = [635, 953];
          let indexy = String.fromCharCode(118,95,51,52,95,99,104,97,114,108,101,110,0);
         singlea.set(list7, list7.length);
         indexy = `${indexy.length}`;
      while (flagZ.length > 3) {
          let weatherC = 4.0;
         flagZ.push(libswresamplek.length);
         weatherC *= parseInt(`${weatherC}`) << (Math.min(2, Math.abs(parseInt(`${weatherC}`))));
         break;
      }
         singlea = new Map([[`${gifgoalbgG.size}`, gifgoalbgG.size]]);
      let rendera = carouselH.length >= 7199066;
      do {
         carouselH = "1";
         if (rendera) {
            break;
         }
      } while (rendera && (!carouselH.includes(`${list7.length}`)));
         flagZ = [carouselH.length];
         list7 = "1";
       let libloggerI: Map<any, any> = new Map([[String.fromCharCode(97,95,49,53,95,116,114,105,101,0),208], [String.fromCharCode(97,99,116,117,97,108,105,122,97,116,105,111,110,95,109,95,50,55,0),901]]);
      let eventm = libswresamplek.length >= 9692382;
      do {
         libswresamplek = [1];
         if (eventm) {
            break;
         }
      } while ((!Array.from(libloggerI.keys()).includes(`${libswresamplek.length}`)) && eventm);
      while (3 <= (2 + libswresamplek.length)) {
         libswresamplek = [libloggerI.size ^ 2];
         break;
      }
      libavutilX.set(`${canvasd}`, (rncore4 == String.fromCharCode(114,0) ? parseInt(`${canvasd}`) : rncore4.length));
   }
   for (let n = 0; n < 1; n++) {
       let dropdownD = String.fromCharCode(117,110,97,118,97,105,108,97,98,108,101,95,51,95,52,0);
       let imagenetworkerrt = true;
       let detailsp: Array<any> = [0, 370, 673];
       let indexb = String.fromCharCode(122,95,53,56,95,115,99,116,101,0);
       let philippinesT = String.fromCharCode(107,101,121,102,114,97,109,101,95,51,95,49,54,0);
          let subbasketballplayerH = String.fromCharCode(118,95,49,53,95,100,105,102,102,115,0);
         dropdownD += `${indexb.length}`;
         subbasketballplayerH += `${(String.fromCharCode(72,0) == subbasketballplayerH ? subbasketballplayerH.length : subbasketballplayerH.length)}`;
         dropdownD = `${(philippinesT == String.fromCharCode(108,0) ? detailsp.length : philippinesT.length)}`;
      if (!dropdownD.endsWith(`${imagenetworkerrt}`)) {
         dropdownD += `${(2 - (imagenetworkerrt ? 3 : 1))}`;
      }
         philippinesT += `${(String.fromCharCode(72,0) == philippinesT ? philippinesT.length : indexb.length)}`;
         detailsp = [((imagenetworkerrt ? 5 : 2))];
          let whitetickz = String.fromCharCode(106,95,51,56,95,99,111,109,112,111,117,110,100,0);
          let white1: Array<any> = [232, 27];
         imagenetworkerrt = whitetickz == String.fromCharCode(89,0);
         whitetickz = `${white1.length}`;
         white1 = [3 ^ white1.length];
      if ((detailsp.length & 1) >= 4 || (dropdownD.length & detailsp.length) >= 1) {
         detailsp = [philippinesT.length];
      }
       let iconpipexpandX = String.fromCharCode(101,95,54,49,95,108,111,99,97,108,105,122,101,100,0);
          let update_qY = true;
          let stationX: Array<any> = [966, 19];
          let cancelU: Array<any> = [String.fromCharCode(111,112,99,111,100,101,115,95,97,95,54,49,0), String.fromCharCode(111,99,116,101,116,115,95,53,95,51,49,0)];
         detailsp = [((imagenetworkerrt ? 4 : 1) >> (Math.min(indexb.length, 1)))];
         update_qY = 32 > stationX.length;
         stationX = [3 - cancelU.length];
         cancelU.push(stationX.length - 3);
      while (1 == iconpipexpandX.length) {
         imagenetworkerrt = (iconpipexpandX.length - philippinesT.length) < 43;
         break;
      }
         iconpipexpandX = `${(String.fromCharCode(79,0) == dropdownD ? dropdownD.length : philippinesT.length)}`;
          let sinag = String.fromCharCode(100,101,108,101,103,97,116,101,95,119,95,57,55,0);
          let hejip = true;
         detailsp = [(1 ^ (hejip ? 2 : 3))];
         sinag += `${sinag.length}`;
         hejip = 14 > sinag.length;
       let sharei: Array<any> = [String.fromCharCode(115,95,54,56,95,116,104,114,101,115,104,111,108,100,115,0), String.fromCharCode(102,114,111,109,98,105,110,100,95,54,95,50,57,0)];
       let mbbannerO: Array<any> = [670, 582, 744];
      let defaultlogoC = sharei.length <= 7598125;
      do {
         sharei = [indexb.length];
         if (defaultlogoC) {
            break;
         }
      } while (((indexb.length * sharei.length) < 3) && defaultlogoC);
      if (4 > dropdownD.length && philippinesT == String.fromCharCode(66,0)) {
         dropdownD += `${((imagenetworkerrt ? 1 : 4) - iconpipexpandX.length)}`;
      }
      referrerk = !referrerk;
   }
      referrerk = (!referrerk ? !stylesw : referrerk);
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
       let roundE = String.fromCharCode(98,95,50,52,95,117,112,100,97,116,101,100,0);
    let unreadN: Array<any> = [934, 961, 873];
    let librrcJ = 0.0;
    let bufferA = String.fromCharCode(114,101,103,105,115,116,101,114,95,98,95,51,57,0);
    let graym = String.fromCharCode(122,95,53,53,95,115,121,109,109,101,116,114,105,99,0);
    let circle6 = String.fromCharCode(105,95,51,50,95,107,101,121,115,112,101,99,0);
    let minimized = String.fromCharCode(109,97,107,101,100,112,107,103,95,102,95,49,56,0);
    let paginationY = String.fromCharCode(113,95,52,54,95,117,110,98,111,110,100,101,100,0);
    let shirtt = String.fromCharCode(99,111,110,118,101,114,116,101,100,95,98,95,53,52,0);
    let teamj = true;
    let rulese = 5.0;
    let flippery = String.fromCharCode(119,97,110,116,95,108,95,57,55,0);
    let merger4 = 1.0;
    let pushG = String.fromCharCode(118,95,53,55,95,122,101,114,111,122,101,114,111,0);
       let coreD = 5.0;
       let backw: Array<any> = [330, 922];
      for (let q = 0; q < 3; q++) {
          let gmailY = String.fromCharCode(101,118,112,111,114,116,111,112,95,110,95,49,52,0);
          let fast1 = false;
          let chinasame3: Map<any, any> = new Map([[String.fromCharCode(100,95,51,49,95,98,97,100,114,101,113,0),321], [String.fromCharCode(101,120,116,114,97,112,111,108,97,116,111,114,95,117,95,57,55,0),625]]);
          let libflipper4 = 3;
          let baseI: Array<any> = [86, 768, 372];
         backw.push(backw.length);
         gmailY = `${chinasame3.size + gmailY.length}`;
         fast1 = String.fromCharCode(57,0) == gmailY;
         chinasame3.set(`${fast1}`, ((fast1 ? 4 : 1) % (Math.max(10, gmailY.length))));
         libflipper4 -= 1 ^ baseI.length;
         baseI = [(gmailY == String.fromCharCode(120,0) ? gmailY.length : baseI.length)];
      }
      if ((backw.length * 5) > 4 && 1 > (backw.length / 5)) {
         backw.push(parseInt(`${coreD}`) & backw.length);
      }
         backw.push(backw.length >> (Math.min(2, Math.abs(parseInt(`${coreD}`)))));
       let notificationR = String.fromCharCode(112,97,99,107,101,114,95,99,95,49,50,0);
       let annerQ = String.fromCharCode(112,114,111,116,111,98,117,102,95,108,95,51,48,0);
         backw = [(String.fromCharCode(106,0) == notificationR ? annerQ.length : notificationR.length)];
      let playO = 6858933.0 <= coreD;
      do {
         coreD -= backw.length;
         if (playO) {
            break;
         }
      } while ((3 > (notificationR.length + parseInt(`${coreD}`))) && playO);
      bufferA = `${minimized.length * bufferA.length}`;
      shirtt = `${graym.length / (Math.max(2, 8))}`;
   for (let a = 0; a < 1; a++) {
      shirtt = `${graym.length}`;
   }
   while (circle6.includes(`${unreadN.length}`)) {
       let activitya = false;
       let moviesu: Array<any> = [13, 131, 398];
       let type_oes = true;
       let librrcw = String.fromCharCode(117,115,108,101,101,112,95,97,95,53,50,0);
       let materiale = 0;
          let debugz = 5.0;
          let whistleorangeQ = String.fromCharCode(99,95,51,95,99,111,110,116,97,105,110,115,0);
         activitya = (librrcw.length - moviesu.length) <= 87;
         debugz *= (String.fromCharCode(71,0) == whistleorangeQ ? whistleorangeQ.length : parseInt(`${debugz}`));
         type_oes = !librrcw.endsWith(`${activitya}`);
       let gifgoalM = String.fromCharCode(115,95,52,95,100,97,105,0);
      let subbasketballplayerX = activitya ? !activitya : activitya;
      do {
          let policyM = false;
         activitya = moviesu.length <= 20 && !policyM;
         if (subbasketballplayerX) {
            break;
         }
      } while ((5 == moviesu.length) && subbasketballplayerX);
         moviesu = [librrcw.length];
      while ((moviesu.length << (Math.min(Math.abs(5), 2))) < 5 && type_oes) {
         type_oes = moviesu.length < gifgoalM.length;
         break;
      }
      if (3 < gifgoalM.length && type_oes) {
         type_oes = !type_oes || materiale <= 24;
      }
      if (gifgoalM.endsWith(`${activitya}`)) {
         activitya = librrcw.length == moviesu.length;
      }
      if (4 < (1 & materiale)) {
         librrcw += `${2 & materiale}`;
      }
          let zoom_: Array<any> = [553, 913];
          let imagemanager5: Array<any> = [686, 932];
          let utilsm = String.fromCharCode(122,95,54,51,95,97,99,99,101,115,115,111,114,0);
         activitya = moviesu.includes(type_oes);
         zoom_.push(imagemanager5.length | 1);
         imagemanager5 = [3];
         utilsm += `${(utilsm == String.fromCharCode(121,0) ? utilsm.length : imagemanager5.length)}`;
      while (librrcw.length < 4) {
         materiale *= 3 + materiale;
         break;
      }
      let signinups = 5630681 <= materiale;
      do {
         materiale -= gifgoalM.length;
         if (signinups) {
            break;
         }
      } while (signinups && (2 < materiale));
       let libfabricjnin: Array<any> = [String.fromCharCode(100,97,114,119,105,110,95,121,95,57,48,0), String.fromCharCode(106,95,54,56,95,116,111,103,103,108,101,0), String.fromCharCode(111,95,52,49,95,115,112,97,119,110,97,98,108,101,0)];
       let diceq: Array<any> = [String.fromCharCode(97,95,55,52,95,109,117,110,108,111,99,107,0), String.fromCharCode(98,101,104,105,110,100,95,97,95,57,49,0)];
         diceq = [moviesu.length | materiale];
      if ((1 << (Math.min(2, libfabricjnin.length))) > 2 && (gifgoalM.length << (Math.min(Math.abs(1), 3))) > 5) {
         gifgoalM = `${librrcw.length | 1}`;
      }
      unreadN.push(1);
      break;
   }
      paginationY = `${((teamj ? 5 : 2))}`;
   while (!graym.endsWith(`${teamj}`)) {
      teamj = shirtt == String.fromCharCode(109,0);
      break;
   }
   let baselined = 6674703.0 >= librrcJ;
   do {
       let live_: Array<any> = [713, 891, 181];
       let expand3 = 1;
       let bdxadsdkV = true;
      if (bdxadsdkV) {
         bdxadsdkV = (expand3 - live_.length) >= 27;
      }
      let g_image6 = bdxadsdkV ? !bdxadsdkV : bdxadsdkV;
      do {
         bdxadsdkV = bdxadsdkV || live_.length >= 20;
         if (g_image6) {
            break;
         }
      } while ((2 > expand3) && g_image6);
      while (live_.length > expand3) {
         live_ = [expand3];
         break;
      }
          let awayteamfieldy = String.fromCharCode(117,95,54,52,0);
          let animation2 = false;
         live_ = [live_.length];
         awayteamfieldy += `${awayteamfieldy.length + 2}`;
         animation2 = !animation2;
      for (let w = 0; w < 3; w++) {
          let greytickQ = true;
          let abidetectU = 1.0;
          let flipperw = String.fromCharCode(118,95,53,57,95,114,101,112,108,97,99,101,109,101,110,116,115,0);
         expand3 %= Math.max(4, ((bdxadsdkV ? 4 : 1) - parseInt(`${abidetectU}`)));
         greytickQ = flipperw.length == 43;
         abidetectU *= parseFloat(`${3}`);
         flipperw = `${flipperw.length}`;
      }
      if (3 > (live_.length >> (Math.min(1, Math.abs(expand3)))) && 3 > (live_.length >> (Math.min(4, Math.abs(expand3))))) {
         live_ = [expand3 << (Math.min(3, Math.abs(2)))];
      }
          let defaultplayerimgR = String.fromCharCode(105,110,118,116,114,97,110,115,95,97,95,57,54,0);
          let catalogN = String.fromCharCode(114,101,115,117,108,117,116,105,111,110,95,103,95,51,0);
         live_.push(2);
         defaultplayerimgR = `${catalogN.length & 1}`;
         catalogN = `${(catalogN == String.fromCharCode(68,0) ? catalogN.length : defaultplayerimgR.length)}`;
      while (expand3 > live_.length) {
          let arrow8 = String.fromCharCode(99,111,110,116,95,55,95,51,0);
          let langr = 1.0;
         expand3 &= 2;
         arrow8 += `${arrow8.length * 3}`;
         langr -= 2 + arrow8.length;
         break;
      }
      for (let q = 0; q < 3; q++) {
         live_.push(1);
      }
      librrcJ /= Math.max(parseFloat(`${shirtt.length % 2}`), 2);
      if (baselined) {
         break;
      }
   } while ((2 <= (parseInt(`${librrcJ}`) + bufferA.length)) && baselined);
       let dependenciesA: Map<any, any> = new Map([[String.fromCharCode(99,95,51,95,115,117,112,112,111,114,116,101,100,0),false ], [String.fromCharCode(115,119,97,112,121,118,98,117,102,102,101,114,95,51,95,55,50,0),true ], [String.fromCharCode(98,109,111,100,101,95,118,95,52,0),false ]]);
      let termsE = 6701312 <= dependenciesA.size;
      do {
          let orientationK = String.fromCharCode(100,101,114,105,118,97,116,105,118,101,95,105,95,57,49,0);
          let pointF = 0.0;
          let navigationU = String.fromCharCode(105,100,101,110,116,105,102,105,97,98,108,101,95,119,95,52,53,0);
          let launcherP = String.fromCharCode(102,108,97,116,116,101,110,101,100,95,54,95,54,50,0);
          let temp4: Map<any, any> = new Map([[String.fromCharCode(98,100,115,95,117,95,51,57,0),36], [String.fromCharCode(118,95,57,57,95,97,110,100,0),535]]);
         dependenciesA.set(navigationU, 3);
         orientationK += `${launcherP.length * parseInt(`${pointF}`)}`;
         pointF += parseFloat(`${1}`);
         navigationU += `${orientationK.length - 3}`;
         launcherP = `${parseInt(`${pointF}`) * 1}`;
         temp4 = new Map([[`${temp4.size}`, 3 & launcherP.length]]);
         if (termsE) {
            break;
         }
      } while ((dependenciesA.size >= dependenciesA.size) && termsE);
         dependenciesA = new Map([[`${dependenciesA.size}`, 2]]);
         dependenciesA = new Map([[`${dependenciesA.size}`, 1]]);
      graym += `${(String.fromCharCode(52,0) == paginationY ? paginationY.length : unreadN.length)}`;
   while (bufferA.length > 4) {
      bufferA += `${unreadN.length}`;
      break;
   }
      paginationY = `${(String.fromCharCode(70,0) == bufferA ? parseInt(`${librrcJ}`) : bufferA.length)}`;
   while (minimized.length > graym.length) {
      graym += `${shirtt.length % (Math.max(graym.length, 3))}`;
      break;
   }
      teamj = !teamj;
   let iconshareg = roundE == String.fromCharCode(107,104,55,118,107,103,0);
   do {
      roundE = `${paginationY.length % 1}`;
      if (iconshareg) {
         break;
      }
   } while ((5 >= roundE.length) && iconshareg);
      graym = `${2 >> (Math.min(2, minimized.length))}`;

        console.log("err save vod!");

   if (bufferA != String.fromCharCode(68,0)) {
       let libjsi5 = 2.0;
       let defaultplayerimgl = 4.0;
       let customE = 4.0;
       let modalx = false;
         customE += (parseInt(`${libjsi5}`) ^ (modalx ? 3 : 1));
         defaultplayerimgl *= (parseFloat(`${parseInt(`${customE}`) + (modalx ? 3 : 2)}`));
      let libjsinspector9 = 8432885.0 >= libjsi5;
      do {
         libjsi5 += parseFloat(`${1 + parseInt(`${customE}`)}`);
         if (libjsinspector9) {
            break;
         }
      } while ((!modalx) && libjsinspector9);
         customE *= parseInt(`${libjsi5}`) | 3;
      if (1.62 <= (customE / 3.44) || 3.44 <= (libjsi5 / (Math.max(3, customE)))) {
         libjsi5 -= (parseFloat(`${parseInt(`${customE}`) - (modalx ? 3 : 3)}`));
      }
       let refreshy = 5.0;
      while (5.44 >= refreshy) {
          let boot5 = false;
          let vietnamq: Map<any, any> = new Map([[String.fromCharCode(97,95,53,49,95,112,114,111,114,101,115,0),String.fromCharCode(113,95,53,95,109,111,110,111,115,112,97,99,101,0)], [String.fromCharCode(101,95,54,95,99,111,110,99,117,114,101,110,116,0),String.fromCharCode(104,95,57,51,95,101,114,97,115,101,100,0)]]);
          let sharemodal9 = String.fromCharCode(97,95,51,56,95,114,101,112,101,97,116,101,114,0);
         refreshy -= parseFloat(`${3}`);
         boot5 = (vietnamq.size | sharemodal9.length) == 61;
         vietnamq.set(sharemodal9, 3 >> (Math.min(1, sharemodal9.length)));
         break;
      }
         modalx = !modalx;
      for (let x = 0; x < 3; x++) {
         modalx = refreshy == 75.71 && 75.71 == libjsi5;
      }
         defaultplayerimgl /= Math.max(4, parseFloat(`${parseInt(`${customE}`)}`));
      if (3.12 < (defaultplayerimgl * customE) && 5.52 < (3.12 * defaultplayerimgl)) {
          let defaultplayerimgy = String.fromCharCode(110,101,115,116,101,100,95,105,95,53,55,0);
          let libturbomodulejsijni6 = 4.0;
          let eighteenv = String.fromCharCode(99,104,114,111,109,97,104,111,108,100,95,115,95,53,54,0);
          let hooke: Map<any, any> = new Map([[String.fromCharCode(104,114,116,102,95,106,95,56,56,0),339], [String.fromCharCode(105,110,116,101,114,120,95,57,95,52,52,0),176], [String.fromCharCode(100,105,115,112,108,97,121,95,105,95,52,54,0),159]]);
          let materialR = String.fromCharCode(99,95,53,57,0);
         customE -= parseInt(`${refreshy}`) + hooke.size;
         defaultplayerimgy = "2";
         libturbomodulejsijni6 *= parseInt(`${libturbomodulejsijni6}`) % (Math.max(10, defaultplayerimgy.length));
         eighteenv += `${defaultplayerimgy.length ^ 3}`;
         hooke = new Map([[defaultplayerimgy, parseInt(`${libturbomodulejsijni6}`) % (Math.max(defaultplayerimgy.length, 4))]]);
         materialR = `${eighteenv.length * defaultplayerimgy.length}`;
      }
      while ((defaultplayerimgl - 5) >= 2.5) {
         libjsi5 -= parseFloat(`${parseInt(`${refreshy}`) | 2}`);
         break;
      }
      minimized = `${graym.length - bufferA.length}`;
   }
      minimized += `${unreadN.length}`;
      circle6 += `${minimized.length}`;
   while (2 <= graym.length && bufferA != String.fromCharCode(122,0)) {
      graym = `${parseInt(`${librrcJ}`) + bufferA.length}`;
      break;
   }
   let arrowup1 = librrcJ >= 9239113.0;
   do {
       let reactnavigationt = String.fromCharCode(115,105,110,100,101,120,95,107,95,52,55,0);
         reactnavigationt = `${2 + reactnavigationt.length}`;
      for (let x = 0; x < 3; x++) {
         reactnavigationt = `${1 | reactnavigationt.length}`;
      }
         reactnavigationt = `${reactnavigationt.length / 2}`;
      librrcJ *= parseFloat(`${2 ^ paginationY.length}`);
      if (arrowup1) {
         break;
      }
   } while ((librrcJ == 1.75) && arrowup1);
   while (graym.endsWith(`${paginationY.length}`)) {
      paginationY += "1";
      break;
   }
   let gesturesj = 9528806.0 <= librrcJ;
   do {
       let blackZ = 0.0;
       let sentryj = String.fromCharCode(111,98,117,115,95,115,95,51,55,0);
       let updatesG: Array<any> = [85, 223];
       let webviewY: Array<any> = [677, 874];
      while (blackZ > updatesG.length) {
         updatesG = [webviewY.length * 3];
         break;
      }
       let championC = true;
       let gpayG = false;
      while (sentryj.length >= 3) {
         gpayG = (69 <= (updatesG.length ^ (championC ? updatesG.length : 69)));
         break;
      }
      while (championC) {
          let episodesq = 4.0;
          let backgroundo = String.fromCharCode(103,114,97,118,105,116,121,95,56,95,50,51,0);
         updatesG.push(((gpayG ? 1 : 5) | (championC ? 5 : 4)));
         episodesq += parseFloat(`${parseInt(`${episodesq}`)}`);
         backgroundo = `${backgroundo.length + parseInt(`${episodesq}`)}`;
         break;
      }
         blackZ /= Math.max(2, 2);
       let securityw = String.fromCharCode(111,95,52,95,118,105,111,108,97,116,105,111,110,0);
       let anytimeN = String.fromCharCode(102,95,54,51,95,98,114,117,116,101,102,111,114,99,101,0);
      let xvodt = sentryj == String.fromCharCode(116,104,102,108,122,101,54,107,105,49,0);
      do {
          let submits = String.fromCharCode(117,95,49,53,95,112,114,117,110,101,0);
         sentryj = `${(securityw == String.fromCharCode(71,0) ? parseInt(`${blackZ}`) : securityw.length)}`;
         submits = `${submits.length << (Math.min(submits.length, 5))}`;
         if (xvodt) {
            break;
         }
      } while (xvodt && (!sentryj.includes(`${gpayG}`)));
      for (let h = 0; h < 1; h++) {
          let filer = String.fromCharCode(115,110,97,109,101,95,48,95,50,0);
          let predictionJ = 0.0;
         updatesG.push(securityw.length | 2);
         filer += `${3 | filer.length}`;
         predictionJ += parseFloat(`${2 * filer.length}`);
      }
       let huaweiP = 2.0;
          let splashX = String.fromCharCode(105,110,99,114,101,109,101,110,116,101,100,95,110,95,55,54,0);
          let telegram_ = false;
         huaweiP *= parseFloat(`${3}`);
         splashX = `${splashX.length % 3}`;
         telegram_ = !splashX.startsWith(`${telegram_}`);
      if (webviewY.length == 5 && 4 == (webviewY.length + 5)) {
         webviewY.push(securityw.length);
      }
       let dycreatorv = 2.0;
      librrcJ *= parseFloat(`${parseInt(`${blackZ}`)}`);
      if (gesturesj) {
         break;
      }
   } while (gesturesj && ((3.69 / (Math.max(10, librrcJ))) >= 2.50));
   let regengU = teamj ? !teamj : teamj;
   do {
       let libswscalea = 2.0;
       let appsR = 2.0;
      for (let b = 0; b < 1; b++) {
         appsR -= parseFloat(`${parseInt(`${libswscalea}`)}`);
      }
      if (appsR == 1.39) {
          let right4 = String.fromCharCode(105,110,99,108,117,115,105,111,110,115,95,107,95,53,49,0);
          let mappinga = 0.0;
         libswscalea += parseFloat(`${parseInt(`${libswscalea}`) ^ 2}`);
         right4 += `${right4.length / 1}`;
         mappinga /= Math.max(parseFloat(`${1}`), 5);
      }
      if (5.30 >= appsR) {
         libswscalea /= Math.max(parseFloat(`${1}`), 4);
      }
         appsR /= Math.max(1, parseFloat(`${parseInt(`${appsR}`) / 3}`));
      if (1.93 > (3.90 + appsR) || 4.45 > (3.90 + appsR)) {
          let annerO = String.fromCharCode(97,100,109,105,110,101,100,95,109,95,52,51,0);
          let blacks: Array<any> = [992, 394];
          let traminiB: Map<any, any> = new Map([[String.fromCharCode(102,101,116,99,104,101,114,115,95,104,95,56,57,0),100], [String.fromCharCode(114,95,51,50,95,108,98,108,0),483]]);
          let downloadingv = 3;
         libswscalea /= Math.max(parseFloat(`${parseInt(`${appsR}`) | 2}`), 1);
         annerO += `${downloadingv % 1}`;
         blacks = [downloadingv];
         traminiB.set(`${downloadingv}`, downloadingv);
      }
          let downx = String.fromCharCode(117,110,115,99,104,101,100,117,108,101,95,110,95,57,49,0);
         appsR -= parseFloat(`${downx.length + parseInt(`${appsR}`)}`);
      teamj = 94 == graym.length;
      if (regengU) {
         break;
      }
   } while ((shirtt.length > 3) && regengU);
   let iconwechat4 = teamj ? !teamj : teamj;
   do {
      teamj = unreadN.length == 67 && String.fromCharCode(119,0) == minimized;
      if (iconwechat4) {
         break;
      }
   } while (iconwechat4 && (2 > (3 / (Math.max(2, unreadN.length)))));
   if (unreadN.includes(rulese)) {
      rulese *= 1;
   }
   let reactnativejsQ = String.fromCharCode(114,95,108,0) == shirtt;
   do {
       let kickt = false;
       let libflipperj: Map<any, any> = new Map([[String.fromCharCode(104,95,49,52,95,100,114,97,103,103,105,110,103,0),760], [String.fromCharCode(97,95,53,52,95,112,97,114,116,105,116,105,111,110,115,0),673]]);
         kickt = libflipperj.size >= 80;
      for (let w = 0; w < 1; w++) {
         libflipperj.set(`${kickt}`, libflipperj.size >> (Math.min(Math.abs(3), 5)));
      }
      shirtt = "3";
      if (reactnativejsQ) {
         break;
      }
   } while ((shirtt.length >= paginationY.length) && reactnativejsQ);
      rulese /= Math.max(parseInt(`${librrcJ}`) * graym.length, 4);
      teamj = circle6.length < flippery.length;
       let middleG = 5;
       let gemfileQ = false;
       let becomej = true;
      while (gemfileQ) {
         becomej = !gemfileQ || 91 <= middleG;
         break;
      }
      let description_6K = gemfileQ ? !gemfileQ : gemfileQ;
      do {
          let kickU = true;
          let telemetryS = true;
         gemfileQ = becomej;
         kickU = !telemetryS && kickU;
         telemetryS = !kickU && telemetryS;
         if (description_6K) {
            break;
         }
      } while ((becomej) && description_6K);
      for (let q = 0; q < 1; q++) {
          let lineA = String.fromCharCode(114,95,49,56,95,98,108,101,110,100,0);
          let libsgcorev: Map<any, any> = new Map([[String.fromCharCode(101,95,51,95,98,105,119,103,116,0),705], [String.fromCharCode(115,101,103,95,114,95,51,57,0),872], [String.fromCharCode(122,95,52,54,95,99,111,110,118,101,114,103,101,110,99,101,0),806]]);
          let mailZ: Array<any> = [String.fromCharCode(115,95,55,53,95,99,111,110,102,105,103,117,114,97,116,105,110,0), String.fromCharCode(97,97,99,101,110,99,95,50,95,55,52,0)];
          let checkboxv = String.fromCharCode(100,95,56,55,95,115,116,101,114,101,111,100,0);
         middleG &= 2;
         lineA += `${checkboxv.length / 1}`;
         libsgcorev = new Map([[`${libsgcorev.size}`, 2]]);
         mailZ.push(lineA.length << (Math.min(3, Math.abs(libsgcorev.size))));
         checkboxv += `${libsgcorev.size}`;
      }
      let libtanf = 7901410 >= middleG;
      do {
         middleG *= 3;
         if (libtanf) {
            break;
         }
      } while ((!gemfileQ) && libtanf);
      if (becomej) {
          let bridged = 2;
          let baselineQ = String.fromCharCode(105,110,110,100,101,114,95,99,95,49,49,0);
         becomej = !gemfileQ && !becomej;
         bridged *= (String.fromCharCode(49,0) == baselineQ ? baselineQ.length : bridged);
      }
          let videox = String.fromCharCode(115,95,56,55,95,118,101,99,116,111,114,0);
          let libjsijniprofilerH = false;
         becomej = !libjsijniprofilerH && videox.length > 69;
       let halffieldimagew = String.fromCharCode(119,95,53,51,95,97,118,102,114,97,109,101,0);
         middleG %= Math.max((1 | (becomej ? 4 : 2)), 3);
          let sportG = String.fromCharCode(100,105,115,112,111,115,97,108,95,98,95,54,57,0);
          let refreshc = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,95,49,95,50,55,0);
          let configE = 5.0;
         gemfileQ = sportG.length < 3;
         sportG = `${parseInt(`${configE}`)}`;
         refreshc += "2";
         configE /= Math.max(5, parseFloat(`${1}`));
      roundE += `${roundE.length}`;
        console.log(err);
      }
    };

    const deviceOrientationHandle = () => {
       let editJ = String.fromCharCode(118,95,54,51,95,97,117,100,105,111,99,111,110,118,101,114,116,0);
    let predictionactiveA: Array<any> = [42, 122];
    let rncore7 = true;
    let vietnamF = String.fromCharCode(115,105,103,110,112,111,115,116,95,56,95,50,56,0);
    let ballx = String.fromCharCode(112,95,56,54,95,110,97,118,0);
    let countdownY = String.fromCharCode(112,95,55,56,95,100,111,119,110,108,101,102,116,0);
    let reward0 = true;
    let indexT = 1;
    let rootz = String.fromCharCode(106,111,105,110,95,110,95,52,52,0);
    let detailsN: Array<any> = [446, 271];
    let playercommonk = String.fromCharCode(97,112,112,101,110,100,105,110,103,95,119,95,55,50,0);
    let ksadT = String.fromCharCode(100,95,52,48,95,105,115,116,114,101,97,109,0);
    let latnU: Array<any> = [259, 547, 175];
       let componenth = 5;
         componenth &= componenth;
      while (componenth > 5) {
         componenth >>= Math.min(Math.abs(componenth), 3);
         break;
      }
      while (4 >= (componenth + componenth)) {
         componenth %= Math.max(1, componenth ^ 3);
         break;
      }
      reward0 = predictionactiveA.length > 59 && 59 > editJ.length;
      detailsN.push(vietnamF.length + indexT);
   for (let z = 0; z < 2; z++) {
      reward0 = countdownY.length == 27 || playercommonk.length == 27;
   }
   if (editJ.includes(ballx)) {
       let typingM = String.fromCharCode(105,95,55,57,95,119,102,101,120,0);
       let tickedf = 4;
       let yellowe: Array<any> = [390, 837];
         tickedf >>= Math.min(Math.abs(3 << (Math.min(3, Math.abs(tickedf)))), 3);
      if (typingM.length <= 5) {
         tickedf -= 2 & typingM.length;
      }
      let dialogu = yellowe.length >= 5059662;
      do {
          let stringsU = String.fromCharCode(115,111,108,118,101,100,95,109,95,56,54,0);
          let entryN = 5.0;
          let z_imageb: Array<any> = [523, 611];
         yellowe = [z_imageb.length + tickedf];
         stringsU = `${stringsU.length ^ 3}`;
         entryN /= Math.max(stringsU.length % 1, 4);
         z_imageb.push((String.fromCharCode(84,0) == stringsU ? stringsU.length : parseInt(`${entryN}`)));
         if (dialogu) {
            break;
         }
      } while (dialogu && (1 >= (yellowe.length - 5)));
         tickedf &= typingM.length;
      if ((4 << (Math.min(1, Math.abs(tickedf)))) > 2) {
          let anytimeP = String.fromCharCode(97,100,100,114,101,115,115,101,115,95,108,95,49,49,0);
         tickedf >>= Math.min(5, Math.abs(yellowe.length % (Math.max(2, anytimeP.length))));
      }
         tickedf >>= Math.min(Math.abs(tickedf | 1), 5);
      if (yellowe.includes(tickedf)) {
         tickedf <<= Math.min(2, Math.abs(tickedf));
      }
         tickedf <<= Math.min(Math.abs(1), 1);
      for (let b = 0; b < 2; b++) {
         typingM = `${typingM.length}`;
      }
      editJ = `${vietnamF.length}`;
   }

      

      reward0 = countdownY.length <= rootz.length;
      detailsN.push((String.fromCharCode(85,0) == rootz ? rootz.length : (rncore7 ? 2 : 1)));
      rncore7 = String.fromCharCode(118,0) == editJ;
      countdownY = "2";
      if (
        devicesOrientation === "LANDSCAPE-LEFT" ||
        devicesOrientation === "LANDSCAPE-RIGHT"
      ) {

   for (let b = 0; b < 1; b++) {
      editJ = `${countdownY.length | rootz.length}`;
   }
   for (let l = 0; l < 3; l++) {
       let canvasR = 0;
       let loadingX = 5.0;
       let libglogN = String.fromCharCode(109,105,110,116,95,111,95,56,51,0);
       let nativeexp = String.fromCharCode(114,101,115,105,100,117,101,115,95,102,95,53,0);
          let schedulery: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,101,115,116,95,100,95,54,54,0),34], [String.fromCharCode(117,110,102,108,97,116,116,101,110,101,100,95,104,95,54,56,0),729]]);
          let predictionO = String.fromCharCode(97,100,106,101,99,116,105,118,101,115,95,100,95,55,49,0);
         nativeexp += `${3 % (Math.max(6, predictionO.length))}`;
         schedulery.set(`${schedulery.size}`, schedulery.size / 3);
         predictionO = `${schedulery.size + 3}`;
         nativeexp = `${nativeexp.length}`;
         libglogN = `${parseInt(`${loadingX}`) & 1}`;
       let predictionf = false;
       let eyeopeni = false;
      let hookW = eyeopeni ? !eyeopeni : eyeopeni;
      do {
         eyeopeni = !eyeopeni;
         if (hookW) {
            break;
         }
      } while (hookW && (!libglogN.endsWith(`${eyeopeni}`)));
      for (let w = 0; w < 3; w++) {
         libglogN += "3";
      }
      while (nativeexp.length > libglogN.length) {
         nativeexp = `${libglogN.length % 2}`;
         break;
      }
          let sportsu = String.fromCharCode(115,95,54,55,95,99,111,109,112,97,114,101,102,0);
         loadingX -= 3;
         sportsu += `${sportsu.length}`;
         canvasR &= ((predictionf ? 5 : 5) * 2);
         canvasR &= 2;
      for (let r = 0; r < 1; r++) {
          let thailandt = String.fromCharCode(97,110,99,104,111,114,115,95,97,95,52,57,0);
          let hongkongO: Array<any> = [732, 986];
          let statsr: Array<any> = [355, 562, 727];
          let textlayoutmanagers = false;
          let confirmationp = String.fromCharCode(115,95,53,48,95,102,111,110,116,115,0);
         canvasR <<= Math.min(Math.abs(thailandt.length + confirmationp.length), 2);
         thailandt = `${hongkongO.length | statsr.length}`;
         hongkongO.push(hongkongO.length);
         statsr = [((textlayoutmanagers ? 5 : 2) / (Math.max(hongkongO.length, 7)))];
         confirmationp = `${hongkongO.length}`;
      }
      if (libglogN.startsWith(`${predictionf}`)) {
         libglogN += `${parseInt(`${loadingX}`) * canvasR}`;
      }
      rncore7 = nativeexp.length >= 53 || 53 >= libglogN.length;
   }
   while (vietnamF.startsWith(`${rncore7}`)) {
      rncore7 = countdownY == editJ;
      break;
   }
      rncore7 = 91 < predictionactiveA.length && editJ == String.fromCharCode(77,0);
        setIsFullScreen(true);

      reward0 = String.fromCharCode(65,0) == countdownY && 99 < indexT;
      ballx = `${(String.fromCharCode(88,0) == editJ ? detailsN.length : editJ.length)}`;
   if (rncore7) {
       let promotionG = 1.0;
       let playercommonr = String.fromCharCode(113,95,52,48,95,117,110,102,105,108,116,101,114,101,100,0);
       let liveendmodallogoH = String.fromCharCode(97,112,112,101,110,100,101,100,95,108,95,55,51,0);
       let update_7al: Map<any, any> = new Map([[String.fromCharCode(115,95,49,56,95,118,101,114,121,0),75], [String.fromCharCode(113,95,53,53,95,117,110,114,101,115,111,108,118,101,100,0),262]]);
      let settings5 = String.fromCharCode(98,48,103,118,54,55,0) == playercommonr;
      do {
          let awayteamfieldB = String.fromCharCode(98,95,52,53,95,101,120,105,115,116,97,110,99,101,0);
          let roundq: Array<any> = [String.fromCharCode(114,95,53,57,95,115,116,97,121,0), String.fromCharCode(105,109,112,114,105,110,116,95,117,95,52,57,0), String.fromCharCode(100,114,111,112,112,101,100,95,97,95,49,0)];
          let stylex: Array<any> = [640, 747];
         playercommonr += "1";
         awayteamfieldB += `${1 >> (Math.min(4, stylex.length))}`;
         roundq.push(awayteamfieldB.length);
         stylex = [(awayteamfieldB == String.fromCharCode(75,0) ? awayteamfieldB.length : stylex.length)];
         if (settings5) {
            break;
         }
      } while (settings5 && (!playercommonr.startsWith(`${update_7al.size}`)));
      while (!playercommonr.includes(`${update_7al.size}`)) {
         update_7al.set(liveendmodallogoH, (liveendmodallogoH == String.fromCharCode(111,0) ? playercommonr.length : liveendmodallogoH.length));
         break;
      }
         update_7al = new Map([[`${update_7al.size}`, liveendmodallogoH.length | 2]]);
      let watchnowbgu = playercommonr == String.fromCharCode(111,110,48,51,109,101,115,56,0);
      do {
         playercommonr += `${liveendmodallogoH.length}`;
         if (watchnowbgu) {
            break;
         }
      } while (watchnowbgu && (liveendmodallogoH.endsWith(playercommonr)));
       let iconscheduler: Map<any, any> = new Map([[String.fromCharCode(117,116,109,111,115,116,95,112,95,57,0),407], [String.fromCharCode(110,95,54,48,95,111,102,102,115,101,116,115,105,122,101,0),361], [String.fromCharCode(111,95,50,54,95,103,114,97,112,104,99,121,99,108,101,115,0),874]]);
       let livenodatabgimg7: Map<any, any> = new Map([[String.fromCharCode(110,97,109,101,115,112,97,99,101,115,95,119,95,55,53,0),691], [String.fromCharCode(114,101,118,101,97,108,95,105,95,49,54,0),492]]);
      while (iconscheduler.get(`${update_7al.size}`) == null) {
          let dialog_ = 1.0;
         iconscheduler = new Map([[`${update_7al.size}`, liveendmodallogoH.length]]);
         dialog_ -= parseFloat(`${2}`);
         break;
      }
      let pageA = 5786022 >= iconscheduler.size;
      do {
         iconscheduler.set(`${promotionG}`, parseInt(`${promotionG}`) - playercommonr.length);
         if (pageA) {
            break;
         }
      } while ((livenodatabgimg7.size < iconscheduler.size) && pageA);
      while (3.31 >= promotionG) {
          let videojsQ = String.fromCharCode(116,95,49,57,95,115,105,103,110,97,116,117,114,101,115,0);
          let bootQ = String.fromCharCode(105,95,57,52,95,117,116,120,111,115,0);
          let single8 = 1;
          let iconpipexpando = false;
         liveendmodallogoH += `${update_7al.size}`;
         videojsQ += `${videojsQ.length << (Math.min(4, bootQ.length))}`;
         bootQ += `${single8}`;
         single8 *= videojsQ.length;
         iconpipexpando = String.fromCharCode(57,0) == bootQ;
         break;
      }
         playercommonr = `${(liveendmodallogoH == String.fromCharCode(76,0) ? liveendmodallogoH.length : livenodatabgimg7.size)}`;
      let scrollview9 = 7534070 <= update_7al.size;
      do {
         update_7al = new Map([[`${iconscheduler.size}`, iconscheduler.size | 2]]);
         if (scrollview9) {
            break;
         }
      } while ((update_7al.size <= 4) && scrollview9);
          let logouserd = false;
          let middle_ = 2.0;
         playercommonr += `${parseInt(`${middle_}`) / (Math.max(1, 10))}`;
         logouserd = logouserd || logouserd;
         middle_ /= Math.max(2, (parseFloat(`${3 / (Math.max((logouserd ? 5 : 3), 4))}`)));
      let mbsplashw = playercommonr == String.fromCharCode(50,56,109,109,103,111,108,116,0);
      do {
         playercommonr = `${iconscheduler.size << (Math.min(Math.abs(3), 3))}`;
         if (mbsplashw) {
            break;
         }
      } while (((update_7al.size >> (Math.min(Math.abs(2), 3))) < 3 && 3 < (update_7al.size >> (Math.min(Math.abs(2), 4)))) && mbsplashw);
      rncore7 = !reward0;
   }
   for (let g = 0; g < 1; g++) {
      editJ = "2";
   }
        

   let manifestp = vietnamF == String.fromCharCode(97,120,119,48,0);
   do {
       let closeQ: Map<any, any> = new Map([[String.fromCharCode(117,110,98,108,111,99,107,95,112,95,54,49,0),421], [String.fromCharCode(116,95,57,51,95,101,110,104,97,110,99,101,0),591]]);
       let mailk = 1.0;
      let libmapbufferjniK = closeQ.size <= 9548965;
      do {
          let redirect_ = true;
          let greenb = 4.0;
          let libruntimeexecutork = 4.0;
          let adult0 = String.fromCharCode(115,116,97,114,116,101,100,95,114,95,53,0);
         closeQ.set(`${greenb}`, (adult0 == String.fromCharCode(105,0) ? parseInt(`${greenb}`) : adult0.length));
         redirect_ = !redirect_;
         libruntimeexecutork *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${libruntimeexecutork}`)), 4))}`);
         if (libmapbufferjniK) {
            break;
         }
      } while (libmapbufferjniK && (closeQ.get(`${mailk}`) != null));
      if (1 >= (parseInt(`${mailk}`) / (Math.max(closeQ.size, 2))) || 2 >= (closeQ.size ^ 1)) {
          let layouta = String.fromCharCode(115,95,49,57,95,100,111,117,98,108,101,115,115,116,114,0);
          let episodeL = String.fromCharCode(99,111,110,115,117,109,112,116,105,111,110,95,51,95,51,54,0);
          let thailandc = String.fromCharCode(99,95,56,56,95,100,101,115,116,111,114,121,0);
          let zhubol = 4.0;
         closeQ.set(`${mailk}`, closeQ.size);
         layouta = `${2 / (Math.max(10, layouta.length))}`;
         episodeL = `${parseInt(`${zhubol}`)}`;
         thailandc += `${thailandc.length | 3}`;
         zhubol /= Math.max(3, 2);
      }
      for (let u = 0; u < 3; u++) {
         closeQ.set(`${mailk}`, closeQ.size);
      }
         closeQ = new Map([[`${closeQ.size}`, parseInt(`${mailk}`)]]);
          let bottom_ = 2;
          let carouselR = String.fromCharCode(99,111,110,116,114,97,99,116,115,95,97,95,52,57,0);
          let greyv = String.fromCharCode(115,116,101,108,108,97,114,95,122,95,56,50,0);
         mailk += parseFloat(`${parseInt(`${mailk}`)}`);
         bottom_ *= carouselR.length;
         carouselR = `${3 | carouselR.length}`;
         greyv += `${bottom_ >> (Math.min(Math.abs(2), 4))}`;
         mailk += parseFloat(`${parseInt(`${mailk}`) % (Math.max(closeQ.size, 1))}`);
      vietnamF += `${closeQ.size}`;
      if (manifestp) {
         break;
      }
   } while (manifestp && (5 == vietnamF.length));
   let liveendmodallogor = 7533955 <= countdownY.length;
   do {
      countdownY = `${predictionactiveA.length * 3}`;
      if (liveendmodallogor) {
         break;
      }
   } while ((rootz != countdownY) && liveendmodallogor);
   let loadingK = 9504934 >= predictionactiveA.length;
   do {
      predictionactiveA.push(2);
      if (loadingK) {
         break;
      }
   } while (loadingK && (!rncore7 && 1 > (predictionactiveA.length / (Math.max(1, 5)))));
   while (ballx.endsWith(editJ)) {
      editJ = `${ballx.length}`;
      break;
   }
        StatusBar.setHidden(true);

   for (let d = 0; d < 2; d++) {
      reward0 = detailsN.includes(rncore7);
   }
      countdownY = `${(1 - (reward0 ? 5 : 2))}`;
      playercommonk += `${playercommonk.length - 1}`;
      countdownY = `${ballx.length}`;

        lockOrientation(devicesOrientation);
      } else if (devicesOrientation === "PORTRAIT") {

   if (2 <= vietnamF.length) {
      rncore7 = (vietnamF.length + ksadT.length) < 14;
   }
       let libswresample9 = false;
       let shootu = 2;
       let values4 = 3;
      for (let h = 0; h < 3; h++) {
          let referrers: Map<any, any> = new Map([[String.fromCharCode(99,95,52,53,95,113,105,97,110,0),375], [String.fromCharCode(100,105,103,105,116,95,118,95,52,48,0),327], [String.fromCharCode(119,101,98,118,116,116,95,109,95,53,54,0),936]]);
          let unfillR = 4;
          let greenS: Map<any, any> = new Map([[String.fromCharCode(106,117,108,105,97,110,100,97,121,95,98,95,55,49,0),50], [String.fromCharCode(106,95,49,95,115,120,110,101,116,0),847]]);
         shootu %= Math.max(2, 1);
         referrers = new Map([[`${referrers.size}`, referrers.size]]);
         unfillR -= 1;
         greenS = new Map([[`${greenS.size}`, unfillR >> (Math.min(Math.abs(2), 1))]]);
      }
       let middleA = String.fromCharCode(106,95,51,49,95,116,105,110,105,116,0);
       let styleV = String.fromCharCode(105,110,115,101,99,95,50,95,55,54,0);
      detailsN.push(playercommonk.length << (Math.min(3, ballx.length)));
      rncore7 = vietnamF.length < predictionactiveA.length;
      ballx += `${(rootz.length / (Math.max(8, (reward0 ? 2 : 5))))}`;
        setIsFullScreen(false);

      indexT -= ballx.length + 1;
   let libfbY = 5399778 <= countdownY.length;
   do {
      countdownY = `${detailsN.length % (Math.max(10, rootz.length))}`;
      if (libfbY) {
         break;
      }
   } while (libfbY && ((countdownY.length / 3) > 1));
   while (3 == ksadT.length || !rncore7) {
       let largez = String.fromCharCode(115,101,116,116,97,98,108,101,95,48,95,56,55,0);
       let customS: Array<any> = [String.fromCharCode(101,95,49,51,95,97,109,112,108,105,116,117,100,101,0), String.fromCharCode(116,95,51,57,95,114,101,115,112,111,110,100,101,114,0)];
       let chatU = String.fromCharCode(117,100,105,111,95,105,95,53,51,0);
      let loadingQ = String.fromCharCode(114,54,111,107,115,112,0) == largez;
      do {
         largez += `${customS.length}`;
         if (loadingQ) {
            break;
         }
      } while ((chatU == largez) && loadingQ);
         customS.push(largez.length ^ chatU.length);
      for (let j = 0; j < 3; j++) {
         customS.push((String.fromCharCode(48,0) == largez ? customS.length : largez.length));
      }
         largez = `${3 - customS.length}`;
         chatU = `${customS.length}`;
          let rncoreP = String.fromCharCode(118,95,52,49,95,101,114,114,115,116,114,0);
          let topic_ = false;
         customS.push(rncoreP.length);
         rncoreP = "1";
      if ((1 - customS.length) == 3 || (chatU.length - 1) == 2) {
         chatU += `${customS.length}`;
      }
          let math3 = 4.0;
         customS.push(chatU.length & parseInt(`${math3}`));
         customS.push(1);
      ksadT = `${((reward0 ? 2 : 4) ^ 2)}`;
      break;
   }
   while (ballx.length <= 1) {
      rncore7 = !reward0;
      break;
   }
        

   let videovarx = ksadT.length >= 9883613;
   do {
      ksadT += "1";
      if (videovarx) {
         break;
      }
   } while ((editJ.endsWith(`${ksadT.length}`)) && videovarx);
       let contextO: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,118,97,108,115,95,107,95,51,54,0),74], [String.fromCharCode(114,101,108,97,121,101,100,95,109,95,54,55,0),708], [String.fromCharCode(104,95,54,95,101,110,116,114,111,112,121,109,111,100,101,0),109]]);
         contextO = new Map([[`${contextO.size}`, 2]]);
      let k_countx = 5548390 <= contextO.size;
      do {
         contextO.set(`${contextO.size}`, 3);
         if (k_countx) {
            break;
         }
      } while ((!Array.from(contextO.values()).includes(contextO.size)) && k_countx);
         contextO = new Map([[`${contextO.size}`, contextO.size]]);
      countdownY += `${latnU.length ^ detailsN.length}`;
   if (1 <= ksadT.length) {
      ksadT = `${latnU.length}`;
   }
   if (countdownY.length == 2 || !reward0) {
      countdownY = `${((rncore7 ? 4 : 4))}`;
   }
        StatusBar.setHidden(false);

      reward0 = ksadT == editJ;
       let iconfeedbacku = true;
       let delegate_zfD = String.fromCharCode(108,95,52,53,95,97,114,101,0);
       let libavfilter7 = String.fromCharCode(114,95,49,53,95,105,109,103,0);
       let dangerS = String.fromCharCode(114,101,110,101,119,97,98,108,101,95,106,95,52,57,0);
      if (delegate_zfD.length < dangerS.length) {
          let temperaturet = false;
          let iconuser3 = String.fromCharCode(117,95,56,53,95,115,97,116,117,114,97,116,101,0);
          let material7 = 5.0;
          let gmailb = String.fromCharCode(115,117,98,100,101,99,111,100,101,114,95,98,95,55,53,0);
         dangerS += "1";
         temperaturet = 84 < iconuser3.length;
         iconuser3 += `${((temperaturet ? 1 : 4) / (Math.max(gmailb.length, 9)))}`;
         material7 /= Math.max(parseFloat(`${parseInt(`${material7}`) ^ 1}`), 4);
         gmailb = `${((temperaturet ? 1 : 2) + parseInt(`${material7}`))}`;
      }
      let subbasketballplayerk = 5901086 >= dangerS.length;
      do {
         dangerS = `${(2 ^ (iconfeedbacku ? 4 : 2))}`;
         if (subbasketballplayerk) {
            break;
         }
      } while (subbasketballplayerk && (dangerS.length == 1));
          let textlayoutmanagerI = String.fromCharCode(114,101,115,101,116,95,104,95,49,56,0);
         dangerS += `${(delegate_zfD.length % (Math.max(2, (iconfeedbacku ? 3 : 5))))}`;
         textlayoutmanagerI += `${(textlayoutmanagerI == String.fromCharCode(120,0) ? textlayoutmanagerI.length : textlayoutmanagerI.length)}`;
         libavfilter7 = "3";
       let save8 = String.fromCharCode(114,95,55,57,95,100,101,99,111,114,97,116,105,111,110,115,0);
         dangerS = `${1 | delegate_zfD.length}`;
      if (!iconfeedbacku || 4 < dangerS.length) {
          let linkp = 0.0;
          let materiala = 4.0;
          let textu = 3.0;
          let predictionwinl = String.fromCharCode(115,105,109,112,108,101,116,105,109,101,111,117,116,95,108,95,54,55,0);
          let miniA = String.fromCharCode(115,116,97,99,107,116,114,97,99,101,95,121,95,51,49,0);
         iconfeedbacku = (parseInt(`${linkp}`) - save8.length) == 39;
         linkp /= Math.max((parseFloat(`${String.fromCharCode(81,0) == miniA ? parseInt(`${materiala}`) : miniA.length}`)), 1);
         materiala /= Math.max((parseFloat(`${miniA == String.fromCharCode(119,0) ? miniA.length : parseInt(`${materiala}`)}`)), 5);
         textu *= parseInt(`${textu}`);
         predictionwinl += `${predictionwinl.length}`;
      }
      if (5 <= dangerS.length) {
         dangerS += `${save8.length}`;
      }
      ballx = "3";
      playercommonk = `${ballx.length | 2}`;
   if (!reward0) {
      reward0 = countdownY.length < 68 || playercommonk.length < 68;
   }

        lockOrientation(devicesOrientation);
      }
    };

    const onToggleFullScreen = useCallback(() => {
       let regeng_ = 4;
    let giflivestreamingW = 1.0;
    let containerX = String.fromCharCode(109,112,97,100,115,112,95,55,95,51,56,0);
    let attributedstringg = 0;
    let downloadingC = String.fromCharCode(114,101,103,105,115,116,114,97,110,116,95,54,95,55,52,0);
    let countryv: Array<any> = [40, 429, 376];
    let nativemoduleN = true;
    let mailk = 0.0;
    let acceptedk = 5.0;
    let nbatrophya: Array<any> = [String.fromCharCode(118,95,56,95,111,110,101,119,97,121,0), String.fromCharCode(104,95,49,49,95,112,114,101,112,97,114,101,100,0)];
    let nativeX = true;
    let redgoalk = 5.0;
    let emptyy = String.fromCharCode(107,95,54,54,95,99,111,109,98,105,110,101,115,0);
       let codej = String.fromCharCode(110,95,56,53,95,122,109,98,118,0);
      for (let o = 0; o < 2; o++) {
          let halffieldimageN = 5;
          let commonl = false;
          let colorsq = 5.0;
         codej = `${((commonl ? 3 : 5) / (Math.max(5, parseInt(`${colorsq}`))))}`;
         halffieldimageN *= halffieldimageN * 3;
         commonl = halffieldimageN <= 11 || halffieldimageN <= 11;
      }
         codej += `${codej.length % 1}`;
       let settingI = String.fromCharCode(115,108,111,119,101,115,116,95,105,95,52,55,0);
      attributedstringg >>= Math.min(2, Math.abs(1 / (Math.max(regeng_, 9))));
   if ((giflivestreamingW / (Math.max(3, mailk))) == 1.32 && (giflivestreamingW / 1.32) == 2.83) {
      giflivestreamingW -= containerX.length ^ attributedstringg;
   }
   if (1 <= containerX.length) {
      containerX = `${(downloadingC == String.fromCharCode(103,0) ? downloadingC.length : containerX.length)}`;
   }

      if (
        appOrientation === "LANDSCAPE-LEFT" ||
        appOrientation === "LANDSCAPE-RIGHT"
      ) {

   if (!countryv.includes(giflivestreamingW)) {
      giflivestreamingW *= downloadingC.length;
   }
      giflivestreamingW += parseInt(`${acceptedk}`);
   for (let t = 0; t < 2; t++) {
       let resendT = String.fromCharCode(99,111,110,99,97,116,100,101,99,95,111,95,51,49,0);
       let reducert = String.fromCharCode(111,95,56,56,95,114,101,99,105,112,105,101,110,116,115,0);
       let final_4w: Map<any, any> = new Map([[String.fromCharCode(110,101,119,108,121,95,49,95,50,52,0),true ], [String.fromCharCode(99,111,110,115,117,109,101,100,95,106,95,56,52,0),false ], [String.fromCharCode(112,95,50,50,95,97,112,112,101,110,100,105,110,103,0),true ]]);
       let foundb = String.fromCharCode(117,112,100,97,116,101,100,95,56,95,54,57,0);
       let foundv = String.fromCharCode(118,95,52,56,95,112,97,115,116,0);
       let zhengpianl = String.fromCharCode(99,111,109,112,108,101,109,101,110,116,105,110,103,95,119,95,54,50,0);
       let stringsT = 3;
       let thumbnailo = 1;
      let clearX = foundv.length <= 9569838;
      do {
          let libmapbufferjniE: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,117,112,112,95,48,95,52,49,0),649], [String.fromCharCode(117,95,51,54,95,115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,0),721], [String.fromCharCode(97,100,112,99,109,95,103,95,52,50,0),41]]);
          let libcrashsdkj = String.fromCharCode(119,95,54,56,95,114,101,115,111,108,118,101,100,0);
         foundv = `${(resendT == String.fromCharCode(120,0) ? thumbnailo : resendT.length)}`;
         libmapbufferjniE.set(`${libcrashsdkj}`, 3);
         libcrashsdkj += `${libcrashsdkj.length}`;
         if (clearX) {
            break;
         }
      } while ((5 > (foundv.length + 5)) && clearX);
      for (let v = 0; v < 3; v++) {
         thumbnailo ^= reducert.length;
      }
       let baiduB = 2;
      while ((thumbnailo / (Math.max(stringsT, 4))) >= 2) {
         stringsT &= (String.fromCharCode(51,0) == foundb ? foundv.length : foundb.length);
         break;
      }
         foundb = `${stringsT}`;
      for (let a = 0; a < 2; a++) {
         reducert = `${foundv.length}`;
      }
          let libswscale_ = 0.0;
          let root5 = false;
          let iconuser8: Map<any, any> = new Map([[String.fromCharCode(109,111,114,112,104,101,100,95,52,95,53,51,0),String.fromCharCode(103,95,54,57,95,99,104,97,105,110,105,100,0)], [String.fromCharCode(116,95,49,55,95,112,114,105,110,116,111,117,116,0),String.fromCharCode(112,95,51,56,95,104,105,103,104,0)], [String.fromCharCode(111,95,51,50,95,114,101,100,0),String.fromCharCode(116,95,54,95,104,101,97,100,0)]]);
         reducert += `${(zhengpianl == String.fromCharCode(114,0) ? foundb.length : zhengpianl.length)}`;
         libswscale_ -= iconuser8.size;
         root5 = iconuser8.size > 94 && !root5;
          let subs1 = String.fromCharCode(99,111,110,118,101,114,116,105,98,108,101,95,101,95,50,55,0);
         baiduB /= Math.max(5, resendT.length * 2);
         subs1 = `${3 | subs1.length}`;
      while (3 > zhengpianl.length) {
         foundv += `${1 + final_4w.size}`;
         break;
      }
         baiduB ^= final_4w.size;
      giflivestreamingW /= Math.max((parseInt(`${giflivestreamingW}`) ^ (nativemoduleN ? 3 : 4)), 1);
   }
        lockOrientation("PORTRAIT");

   for (let h = 0; h < 1; h++) {
      mailk += 3 + nbatrophya.length;
   }
   for (let u = 0; u < 2; u++) {
       let darki = 0;
       let circled = String.fromCharCode(120,95,49,57,95,118,109,97,102,109,111,116,105,111,110,100,115,112,0);
       let shielddonez = String.fromCharCode(112,95,55,57,95,101,120,104,97,117,115,116,0);
      if (shielddonez == String.fromCharCode(49,0)) {
         circled = `${1 - darki}`;
      }
       let gifgoaln = 0;
      for (let i = 0; i < 2; i++) {
         circled += `${gifgoaln / (Math.max(4, darki))}`;
      }
         darki %= Math.max(3, (String.fromCharCode(83,0) == shielddonez ? darki : shielddonez.length));
         circled += `${darki & 1}`;
      if ((darki ^ gifgoaln) == 5) {
         darki -= circled.length;
      }
      let codegenI = darki <= 7940497;
      do {
         darki ^= gifgoaln;
         if (codegenI) {
            break;
         }
      } while (codegenI && ((1 / (Math.max(4, circled.length))) > 1 && (circled.length / 1) > 1));
      if (4 >= (gifgoaln & shielddonez.length)) {
          let iconsaveimageq = 5.0;
          let codegenc = true;
          let proxyE = String.fromCharCode(112,95,54,51,95,112,111,97,0);
          let areaL = String.fromCharCode(117,95,57,49,95,100,101,112,101,110,100,0);
         shielddonez = `${darki >> (Math.min(Math.abs(parseInt(`${iconsaveimageq}`)), 1))}`;
         iconsaveimageq *= (areaL == String.fromCharCode(118,0) ? areaL.length : proxyE.length);
         codegenc = !codegenc && areaL.length == 48;
         proxyE = `${proxyE.length >> (Math.min(3, areaL.length))}`;
      }
         darki >>= Math.min(Math.abs((shielddonez == String.fromCharCode(114,0) ? shielddonez.length : circled.length)), 5);
      regeng_ |= ((nativemoduleN ? 4 : 1));
   }
   let zhengpianY = containerX.length >= 6492736;
   do {
      containerX += `${2 ^ parseInt(`${acceptedk}`)}`;
      if (zhengpianY) {
         break;
      }
   } while (((5 | containerX.length) >= 1 && (regeng_ | 5) >= 1) && zhengpianY);
        setIsFullScreen(false);

   while ((downloadingC.length * mailk) <= 3.52) {
      mailk += countryv.length + 3;
      break;
   }
   if (1.49 <= (acceptedk + giflivestreamingW) || (1.49 * acceptedk) <= 1.40) {
       let statisticsinactiveB = 5.0;
       let auto_vQ = String.fromCharCode(116,97,114,103,101,116,101,100,95,103,95,53,55,0);
       let defaultroombgW: Map<any, any> = new Map([[String.fromCharCode(115,111,102,97,95,109,95,51,50,0),402], [String.fromCharCode(120,95,57,52,95,99,111,109,101,0),370], [String.fromCharCode(102,114,97,109,101,108,101,115,115,95,114,95,54,51,0),125]]);
       let iconL = String.fromCharCode(100,101,115,101,108,101,99,116,105,111,110,95,56,95,56,52,0);
       let videovar7: Map<any, any> = new Map([[String.fromCharCode(122,95,56,51,0),true ], [String.fromCharCode(111,95,57,54,95,110,111,110,110,117,108,108,115,101,114,105,97,108,105,122,97,116,105,111,110,0),true ]]);
      while ((videovar7.size + parseInt(`${statisticsinactiveB}`)) == 3 || (statisticsinactiveB + videovar7.size) == 4.21) {
         statisticsinactiveB -= iconL.length & defaultroombgW.size;
         break;
      }
         statisticsinactiveB *= defaultroombgW.size << (Math.min(Math.abs(3), 4));
          let schedulerZ = String.fromCharCode(118,95,51,57,95,97,99,114,111,110,121,109,115,0);
         videovar7.set(`${iconL}`, defaultroombgW.size / (Math.max(iconL.length, 4)));
         schedulerZ += `${3 << (Math.min(5, schedulerZ.length))}`;
         defaultroombgW.set(`${statisticsinactiveB}`, parseInt(`${statisticsinactiveB}`) >> (Math.min(Math.abs(defaultroombgW.size), 1)));
      if (3 <= iconL.length) {
          let shrinkd = 2;
          let kickV = 2;
          let settingT = String.fromCharCode(100,99,116,95,49,95,49,48,48,0);
          let episodesa = 4.0;
         videovar7.set(`${auto_vQ}`, 3);
         shrinkd /= Math.max(3, kickV);
         kickV >>= Math.min(5, Math.abs(2 - kickV));
         settingT += `${2 | shrinkd}`;
         episodesa /= Math.max(3, 3);
      }
       let launcherC = 5.0;
       let switch_7kf = 5.0;
       let predictionbannershareds = 5.0;
         switch_7kf += parseFloat(`${parseInt(`${statisticsinactiveB}`)}`);
         switch_7kf *= parseFloat(`${1}`);
          let redgoal5 = String.fromCharCode(102,95,52,52,95,120,116,101,110,115,105,111,110,0);
         videovar7 = new Map([[auto_vQ, parseInt(`${statisticsinactiveB}`)]]);
         redgoal5 = `${redgoal5.length / (Math.max(10, redgoal5.length))}`;
      for (let x = 0; x < 2; x++) {
         switch_7kf += parseFloat(`${defaultroombgW.size}`);
      }
      if (3 > (5 * iconL.length)) {
         predictionbannershareds /= Math.max(5, parseFloat(`${iconL.length}`));
      }
      for (let c = 0; c < 2; c++) {
         videovar7.set(`${statisticsinactiveB}`, parseInt(`${statisticsinactiveB}`) - parseInt(`${switch_7kf}`));
      }
         predictionbannershareds *= parseFloat(`${3 >> (Math.min(4, Math.abs(parseInt(`${switch_7kf}`))))}`);
          let connectiona = String.fromCharCode(99,103,117,95,56,95,50,53,0);
         videovar7.set(`${statisticsinactiveB}`, parseInt(`${statisticsinactiveB}`));
         connectiona += `${connectiona.length * 3}`;
      acceptedk *= parseFloat(`${2 << (Math.min(4, containerX.length))}`);
   }
   while (nbatrophya.length == 2) {
       let libruntimeexecutorM = String.fromCharCode(98,98,111,120,95,118,95,52,53,0);
       let storeZ = String.fromCharCode(101,95,57,51,95,115,105,103,104,0);
       let backiconU = 4.0;
       let largebrightnessS = 0.0;
         libruntimeexecutorM += `${(String.fromCharCode(79,0) == storeZ ? storeZ.length : parseInt(`${largebrightnessS}`))}`;
         backiconU *= parseInt(`${largebrightnessS}`);
         storeZ += `${(libruntimeexecutorM == String.fromCharCode(83,0) ? parseInt(`${backiconU}`) : libruntimeexecutorM.length)}`;
       let description_fb = 4;
       let temperaturey = 1;
          let shootM: Map<any, any> = new Map([[String.fromCharCode(101,95,56,48,95,117,110,97,117,116,104,111,114,105,122,101,100,0),78], [String.fromCharCode(100,101,115,101,108,101,99,116,95,106,95,52,51,0),462], [String.fromCharCode(121,95,54,48,95,100,118,98,115,117,98,0),557]]);
         storeZ += `${shootM.size * 3}`;
      if ((temperaturey + backiconU) < 5.98) {
         backiconU *= description_fb;
      }
      if (!libruntimeexecutorM.includes(storeZ)) {
          let networkh = 1.0;
          let defaultprofilepicR = String.fromCharCode(109,95,53,57,95,97,99,101,115,115,111,114,121,0);
          let incidentP: Map<any, any> = new Map([[String.fromCharCode(102,95,53,57,95,109,115,103,115,0),992], [String.fromCharCode(98,97,99,107,105,110,103,95,48,95,50,51,0),846]]);
          let relatedp = true;
         storeZ = `${defaultprofilepicR.length}`;
         networkh *= (parseFloat(`${incidentP.size & (relatedp ? 5 : 2)}`));
         defaultprofilepicR += `${parseInt(`${networkh}`) & incidentP.size}`;
         relatedp = !relatedp && incidentP.size <= 1;
      }
      if (libruntimeexecutorM.endsWith(`${temperaturey}`)) {
         temperaturey += 1 >> (Math.min(2, storeZ.length));
      }
      while (3.48 == (largebrightnessS / 5.35)) {
          let bdxadsdk9 = 5.0;
          let playe = 5.0;
          let floatingC = 0;
          let reducerM = String.fromCharCode(108,101,114,112,105,110,103,95,102,95,54,52,0);
         temperaturey += (String.fromCharCode(48,0) == storeZ ? storeZ.length : temperaturey);
         bdxadsdk9 *= floatingC;
         playe -= floatingC | reducerM.length;
         reducerM += `${(String.fromCharCode(48,0) == reducerM ? floatingC : reducerM.length)}`;
         break;
      }
      while (storeZ.startsWith(`${description_fb}`)) {
          let actionJ = 1.0;
          let sendN: Map<any, any> = new Map([[String.fromCharCode(105,110,115,101,114,116,105,110,103,95,121,95,55,56,0),145], [String.fromCharCode(103,101,116,112,116,114,95,114,95,50,54,0),975], [String.fromCharCode(115,104,117,116,116,101,114,95,105,95,51,50,0),230]]);
          let gestureo: Array<any> = [810, 60, 394];
         storeZ += "2";
         actionJ /= Math.max(parseFloat(`${sendN.size >> (Math.min(Math.abs(3), 5))}`), 5);
         sendN.set(`${actionJ}`, parseInt(`${actionJ}`) + 3);
         gestureo.push(gestureo.length);
         break;
      }
          let dragcloseF: Array<any> = [750, 595, 679];
          let libswscalen = 0.0;
         description_fb += parseInt(`${largebrightnessS}`);
         dragcloseF = [parseInt(`${libswscalen}`) * dragcloseF.length];
         libswscalen -= 3;
         description_fb -= storeZ.length & 3;
      downloadingC += `${nbatrophya.length}`;
      break;
   }
        

   let telemetry9 = 8677245 <= attributedstringg;
   do {
       let toponU = 3;
       let clearG = 2;
       let activeT: Array<any> = [201, 628];
       let middleV = String.fromCharCode(97,108,105,103,110,101,114,95,51,95,55,51,0);
          let disconnectedU = true;
          let libreactnativejniv = true;
         toponU += clearG / (Math.max(middleV.length, 1));
         disconnectedU = !libreactnativejniv;
      let bottomT = activeT.length <= 7541242;
      do {
          let changep = 5.0;
          let greyarrowuph: Map<any, any> = new Map([[String.fromCharCode(110,95,49,55,95,108,111,99,0),950], [String.fromCharCode(101,120,99,108,117,100,101,115,95,51,95,53,49,0),220]]);
          let libswresamplet = String.fromCharCode(108,97,121,101,114,115,95,50,95,54,50,0);
          let fillo: Map<any, any> = new Map([[String.fromCharCode(118,101,99,116,111,114,115,99,111,112,101,95,100,95,49,48,0),674], [String.fromCharCode(100,95,52,55,95,117,110,114,101,108,105,97,98,108,101,0),172], [String.fromCharCode(108,97,114,112,111,108,121,95,98,95,56,52,0),805]]);
          let sansH = 3.0;
         activeT = [clearG];
         changep -= (libswresamplet == String.fromCharCode(104,0) ? fillo.size : libswresamplet.length);
         greyarrowuph.set(`${sansH}`, parseInt(`${changep}`));
         fillo = new Map([[`${fillo.size}`, 1 << (Math.min(5, Math.abs(fillo.size)))]]);
         sansH *= 3 >> (Math.min(4, Math.abs(parseInt(`${changep}`))));
         if (bottomT) {
            break;
         }
      } while (bottomT && (activeT.includes(toponU)));
      while ((toponU - 1) >= 4) {
         toponU -= activeT.length;
         break;
      }
      for (let f = 0; f < 1; f++) {
          let commentw = String.fromCharCode(99,95,55,52,95,100,101,108,101,116,101,0);
          let relatedz = 0.0;
          let searchbarV = 1.0;
          let fillO = String.fromCharCode(121,95,55,54,95,100,111,117,98,108,101,0);
         activeT = [middleV.length & 1];
         commentw += `${parseInt(`${searchbarV}`) << (Math.min(Math.abs(parseInt(`${relatedz}`)), 1))}`;
         relatedz /= Math.max(2, (String.fromCharCode(54,0) == commentw ? parseInt(`${searchbarV}`) : commentw.length));
         fillO += `${fillO.length}`;
      }
      if ((middleV.length % (Math.max(3, 6))) == 4) {
          let firebaseq = String.fromCharCode(110,95,52,49,95,100,101,99,111,114,97,116,111,114,115,0);
          let modalC: Map<any, any> = new Map([[String.fromCharCode(106,95,52,54,95,100,105,118,105,100,101,114,0),11], [String.fromCharCode(98,97,99,107,103,114,111,117,110,100,115,95,56,95,53,51,0),420]]);
          let feedbackK: Map<any, any> = new Map([[String.fromCharCode(99,114,117,110,95,113,95,56,56,0),459], [String.fromCharCode(100,101,108,105,109,105,116,101,114,115,95,54,95,53,53,0),235]]);
          let goals = 2.0;
         toponU ^= modalC.size;
         firebaseq += `${parseInt(`${goals}`)}`;
         modalC = new Map([[`${feedbackK.size}`, firebaseq.length]]);
         feedbackK.set(`${goals}`, parseInt(`${goals}`) | 1);
      }
         activeT.push(2);
      while (5 >= (middleV.length >> (Math.min(Math.abs(1), 5))) || 1 >= (1 >> (Math.min(3, middleV.length)))) {
         middleV += `${clearG / (Math.max(activeT.length, 2))}`;
         break;
      }
      let privatechatbg2 = activeT.length <= 5588562;
      do {
          let sheetY = String.fromCharCode(115,95,54,48,95,114,101,117,115,97,98,108,101,0);
         activeT.push(2 | toponU);
         sheetY += `${sheetY.length / (Math.max(8, sheetY.length))}`;
         if (privatechatbg2) {
            break;
         }
      } while (((clearG + activeT.length) >= 5) && privatechatbg2);
      attributedstringg |= parseInt(`${mailk}`);
      if (telemetry9) {
         break;
      }
   } while (((countryv.length / (Math.max(4, attributedstringg))) <= 3) && telemetry9);
   while ((4.56 - acceptedk) == 5.51 || (acceptedk - mailk) == 4.56) {
      mailk -= (downloadingC == String.fromCharCode(76,0) ? downloadingC.length : parseInt(`${acceptedk}`));
      break;
   }
       let combinedq = 1;
       let predictionu = 0.0;
      for (let w = 0; w < 1; w++) {
         combinedq /= Math.max(combinedq, 3);
      }
          let bggradientp = 3.0;
          let yingb = String.fromCharCode(101,116,105,109,101,95,118,95,52,0);
          let typesg = String.fromCharCode(102,95,52,51,95,115,116,117,98,98,101,100,0);
         combinedq |= parseInt(`${predictionu}`) & parseInt(`${bggradientp}`);
         bggradientp += (typesg == String.fromCharCode(90,0) ? yingb.length : typesg.length);
         yingb = `${typesg.length & yingb.length}`;
      if (predictionu <= combinedq) {
          let e_imaget = 3.0;
          let fullv = 2;
          let modulesx = String.fromCharCode(107,95,53,56,95,109,111,100,101,109,0);
          let final_6G = String.fromCharCode(120,95,56,52,95,109,97,114,107,100,111,119,110,0);
         predictionu /= Math.max(modulesx.length - combinedq, 4);
         e_imaget *= parseInt(`${e_imaget}`) << (Math.min(1, Math.abs(fullv)));
         fullv -= fullv >> (Math.min(final_6G.length, 1));
         modulesx = `${final_6G.length}`;
      }
         combinedq += combinedq;
      if (4 < (combinedq >> (Math.min(Math.abs(4), 2)))) {
         predictionu /= Math.max(combinedq, 5);
      }
      if (predictionu > 4.61) {
         predictionu /= Math.max(1, 1 << (Math.min(Math.abs(parseInt(`${predictionu}`)), 4)));
      }
      countryv.push(regeng_);
        StatusBar.setHidden(false);

      mailk *= parseInt(`${mailk}`) % (Math.max(3, 4));
   for (let e = 0; e < 3; e++) {
       let libjsinspectorD = 2.0;
       let iconbackwhite7 = String.fromCharCode(113,95,52,51,95,103,101,110,104,0);
       let dataC = String.fromCharCode(112,114,111,103,114,101,115,115,101,115,95,122,95,51,51,0);
       let iconrefresh8 = 0.0;
       let rulesq = String.fromCharCode(105,108,101,97,118,101,95,101,95,51,49,0);
          let b_count6 = 5.0;
          let circleO = String.fromCharCode(111,95,50,95,98,97,116,99,104,101,100,0);
         rulesq += `${rulesq.length - 2}`;
         b_count6 /= Math.max(parseFloat(`${circleO.length ^ parseInt(`${b_count6}`)}`), 3);
         circleO = "3";
      while (rulesq == String.fromCharCode(107,0)) {
         iconbackwhite7 = "3";
         break;
      }
         iconbackwhite7 += `${2 >> (Math.min(2, rulesq.length))}`;
       let downloaderc: Array<any> = [576, 842];
       let topicG: Array<any> = [String.fromCharCode(120,95,53,48,95,115,116,114,101,97,109,0), String.fromCharCode(101,95,57,55,95,100,101,115,116,114,117,99,116,105,118,101,0)];
          let defaultfootballbgz: Map<any, any> = new Map([[String.fromCharCode(117,95,51,55,95,115,121,110,116,104,0),596], [String.fromCharCode(112,97,114,101,110,116,97,103,101,95,55,95,53,57,0),191]]);
          let dplusO = 5.0;
         libjsinspectorD /= Math.max(parseFloat(`${dataC.length}`), 4);
         defaultfootballbgz = new Map([[`${defaultfootballbgz.size}`, defaultfootballbgz.size]]);
         dplusO *= parseFloat(`${parseInt(`${dplusO}`)}`);
          let rightV: Map<any, any> = new Map([[String.fromCharCode(99,111,101,102,95,112,95,49,55,0),61], [String.fromCharCode(99,111,108,100,95,48,95,56,50,0),408], [String.fromCharCode(101,100,105,116,101,100,95,101,95,52,55,0),578]]);
          let modalM: Array<any> = [883, 180];
         dataC = `${(String.fromCharCode(55,0) == iconbackwhite7 ? rightV.size : iconbackwhite7.length)}`;
         rightV = new Map([[`${modalM.length}`, 3 - modalM.length]]);
      while (5 == (rulesq.length | 1) && (1 | rulesq.length) == 3) {
          let libcxxcomponentsf: Map<any, any> = new Map([[String.fromCharCode(98,95,56,51,95,99,111,108,114,97,109,0),472], [String.fromCharCode(114,101,98,117,105,108,100,95,108,95,56,49,0),787]]);
          let yellowvideolivea = 1.0;
          let iconwatchnowu = true;
          let profileframev = String.fromCharCode(103,95,53,53,95,115,97,109,112,108,101,114,97,116,101,0);
          let runtimeschedulerU: Map<any, any> = new Map([[String.fromCharCode(119,104,105,108,101,95,111,95,55,57,0),827], [String.fromCharCode(100,101,102,101,114,95,110,95,55,54,0),146]]);
         rulesq += "3";
         libcxxcomponentsf.set(`${runtimeschedulerU.size}`, 3 + runtimeschedulerU.size);
         yellowvideolivea += 2;
         iconwatchnowu = (78 < ((!iconwatchnowu ? runtimeschedulerU.size : 13) / (Math.max(runtimeschedulerU.size, 3))));
         profileframev = "3";
         break;
      }
      if (2 >= (2 - topicG.length) && (downloaderc.length - 2) >= 2) {
         topicG = [(dataC == String.fromCharCode(51,0) ? topicG.length : dataC.length)];
      }
      while ((dataC.length / (Math.max(3, 9))) >= 2) {
         topicG.push(downloaderc.length / 1);
         break;
      }
         downloaderc.push(1);
      while (dataC.length < 3 || iconbackwhite7 != String.fromCharCode(53,0)) {
         dataC += `${downloaderc.length * topicG.length}`;
         break;
      }
      for (let j = 0; j < 3; j++) {
          let volumez = String.fromCharCode(108,95,51,51,95,112,111,115,116,105,111,110,0);
          let tempnodatagifI = 0;
          let stringk = String.fromCharCode(119,114,105,116,101,95,51,95,52,56,0);
         downloaderc.push(3 * downloaderc.length);
         volumez += `${tempnodatagifI}`;
         tempnodatagifI >>= Math.min(Math.abs(stringk.length - 1), 4);
         stringk += `${volumez.length / 2}`;
      }
       let dependencyM = 0;
       let bootE = 3;
      if (dataC != rulesq) {
         rulesq = `${parseInt(`${libjsinspectorD}`) % 1}`;
      }
      if ((downloaderc.length * bootE) <= 4 || 4 <= (4 * bootE)) {
         bootE %= Math.max(3, topicG.length);
      }
      countryv = [3];
   }
      acceptedk /= Math.max(3, parseFloat(`${nbatrophya.length % 2}`));

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      } else {

   for (let w = 0; w < 2; w++) {
       let redgoalr: Map<any, any> = new Map([[String.fromCharCode(97,95,52,56,95,121,109,105,110,112,117,116,0),840], [String.fromCharCode(99,104,97,112,95,50,95,53,56,0),693], [String.fromCharCode(115,117,110,112,111,115,95,52,95,57,48,0),670]]);
       let libavfiltere = String.fromCharCode(100,95,52,57,95,107,105,110,100,0);
       let unselectedi = String.fromCharCode(122,95,52,52,95,99,97,112,115,0);
      for (let v = 0; v < 1; v++) {
         libavfiltere += `${libavfiltere.length}`;
      }
      for (let b = 0; b < 1; b++) {
         unselectedi += `${libavfiltere.length}`;
      }
      countryv = [redgoalr.size & 3];
   }
   if ((attributedstringg + regeng_) <= 4) {
      attributedstringg *= countryv.length << (Math.min(nbatrophya.length, 3));
   }
      regeng_ |= 1;
        lockOrientation("LANDSCAPE");

   for (let m = 0; m < 2; m++) {
      attributedstringg -= ((nativeX ? 4 : 1) << (Math.min(Math.abs((nativemoduleN ? 1 : 4)), 3)));
   }
       let overlayK = 0.0;
         overlayK /= Math.max(4, 2);
         overlayK -= parseInt(`${overlayK}`);
         overlayK += parseInt(`${overlayK}`);
      containerX = `${parseInt(`${redgoalk}`) | 3}`;
       let splashs = 0.0;
      for (let z = 0; z < 2; z++) {
         splashs += parseFloat(`${3}`);
      }
         splashs -= parseFloat(`${3}`);
         splashs *= parseFloat(`${2 ^ parseInt(`${splashs}`)}`);
      attributedstringg |= parseInt(`${splashs}`) << (Math.min(Math.abs(parseInt(`${giflivestreamingW}`)), 2));
        setIsFullScreen(true);

   let zinit_9rs = 6648814.0 >= acceptedk;
   do {
      acceptedk += parseFloat(`${1 | containerX.length}`);
      if (zinit_9rs) {
         break;
      }
   } while (zinit_9rs && (4.28 == (acceptedk + 5.21) || 4 == (countryv.length << (Math.min(Math.abs(1), 4)))));
   for (let n = 0; n < 3; n++) {
      nbatrophya.push((3 << (Math.min(5, Math.abs((nativemoduleN ? 4 : 3))))));
   }
   if (4.44 >= (3.51 * giflivestreamingW)) {
      downloadingC += `${parseInt(`${redgoalk}`) ^ 3}`;
   }
        

      nbatrophya = [parseInt(`${acceptedk}`)];
      downloadingC += `${parseInt(`${giflivestreamingW}`)}`;
   let kuaishouj = nativemoduleN ? !nativemoduleN : nativemoduleN;
   do {
       let streamingw = String.fromCharCode(112,95,55,53,95,115,117,109,109,97,114,121,0);
       let smallf: Array<any> = [String.fromCharCode(113,95,54,52,95,112,105,99,107,109,111,100,101,0), String.fromCharCode(99,111,100,101,115,116,114,101,97,109,95,121,95,49,48,48,0), String.fromCharCode(111,95,55,49,95,99,97,110,0)];
       let clockA = String.fromCharCode(100,120,116,121,95,116,95,51,49,0);
       let foregroundJ: Map<any, any> = new Map([[String.fromCharCode(110,95,51,57,95,104,97,108,100,99,108,117,116,0),false ], [String.fromCharCode(118,95,56,48,95,112,111,108,121,109,111,100,0),true ]]);
          let binddatas9 = 1;
         clockA += `${foregroundJ.size + 1}`;
         binddatas9 += 2 ^ binddatas9;
          let huaweiq = String.fromCharCode(104,95,50,57,0);
          let neonI = 5.0;
         clockA = `${smallf.length}`;
         huaweiq = `${(huaweiq == String.fromCharCode(68,0) ? huaweiq.length : parseInt(`${neonI}`))}`;
         neonI /= Math.max(parseFloat(`${parseInt(`${neonI}`) >> (Math.min(huaweiq.length, 2))}`), 2);
      for (let w = 0; w < 3; w++) {
          let sinaV = 5.0;
          let fullj = 2.0;
          let carouselr = 4.0;
          let spec1 = String.fromCharCode(97,95,57,49,95,106,100,104,117,102,102,0);
          let componentregistryB = String.fromCharCode(105,95,57,54,95,102,105,110,100,0);
         clockA = `${clockA.length}`;
         sinaV /= Math.max(parseFloat(`${3 / (Math.max(1, componentregistryB.length))}`), 3);
         fullj -= 2 >> (Math.min(2, spec1.length));
         carouselr -= parseFloat(`${componentregistryB.length}`);
         spec1 = `${spec1.length % 1}`;
      }
          let firebase4: Array<any> = [612, 448, 886];
          let tumbnails = 4;
          let nativeexw = 0;
         foregroundJ = new Map([[`${firebase4.length}`, streamingw.length]]);
         firebase4 = [3];
         tumbnails /= Math.max(nativeexw - 2, 1);
         nativeexw /= Math.max(3, 1);
      while (clockA.length <= foregroundJ.size) {
          let yellowvideolivez = String.fromCharCode(120,95,52,49,95,102,97,100,101,0);
          let contextO = 5.0;
          let fcdaebecbcbafcdfceaaeccfeacdbe = 4.0;
          let statsb = 3;
         clockA += `${foregroundJ.size & smallf.length}`;
         yellowvideolivez = `${parseInt(`${contextO}`) % 3}`;
         contextO *= parseFloat(`${parseInt(`${contextO}`) ^ parseInt(`${fcdaebecbcbafcdfceaaeccfeacdbe}`)}`);
         fcdaebecbcbafcdfceaaeccfeacdbe -= 1 << (Math.min(Math.abs(parseInt(`${contextO}`)), 5));
         statsb += statsb - parseInt(`${contextO}`);
         break;
      }
         smallf.push(3 ^ streamingw.length);
         smallf = [(clockA == String.fromCharCode(53,0) ? foregroundJ.size : clockA.length)];
         clockA += `${clockA.length}`;
          let valuesi: Map<any, any> = new Map([[String.fromCharCode(101,95,52,56,95,116,104,114,111,119,105,110,103,0),85], [String.fromCharCode(112,111,108,121,107,101,121,95,99,95,54,57,0),186]]);
          let inviteZ: Array<any> = [374, 219, 20];
         smallf = [3 & clockA.length];
         valuesi = new Map([[`${valuesi.size}`, 1 + valuesi.size]]);
         inviteZ.push(2);
      for (let v = 0; v < 2; v++) {
          let libavcodec1: Map<any, any> = new Map([[String.fromCharCode(118,95,50,57,95,97,115,115,111,99,105,97,116,101,100,0),551], [String.fromCharCode(110,101,97,114,98,121,95,49,95,57,57,0),75]]);
          let package_f1U: Array<any> = [267, 684];
          let smallfE = false;
         streamingw = `${foregroundJ.size | libavcodec1.size}`;
         libavcodec1.set(`${smallfE}`, 3);
         package_f1U.push(package_f1U.length / 3);
      }
         streamingw = `${smallf.length}`;
      for (let e = 0; e < 1; e++) {
         foregroundJ = new Map([[`${foregroundJ.size}`, 1 % (Math.max(1, smallf.length))]]);
      }
      nativemoduleN = nativemoduleN || attributedstringg == 58;
      if (kuaishouj) {
         break;
      }
   } while (kuaishouj && (giflivestreamingW > 3.11 || 1.95 > (giflivestreamingW * 3.11)));
        StatusBar.setHidden(true);

   while (1.82 == (regeng_ + mailk)) {
      regeng_ /= Math.max(2, parseInt(`${giflivestreamingW}`) * 2);
      break;
   }
      nativemoduleN = 80 > countryv.length || redgoalk > 52.73;
   let mergerg = String.fromCharCode(105,121,103,55,104,105,53,116,0) == downloadingC;
   do {
       let webviewc: Map<any, any> = new Map([[String.fromCharCode(114,101,115,101,116,95,107,95,50,55,0),900], [String.fromCharCode(115,116,121,108,101,100,95,112,95,50,49,0),188], [String.fromCharCode(116,101,97,114,100,111,119,110,95,118,95,55,56,0),973]]);
       let libreactz = String.fromCharCode(97,95,52,55,95,115,117,98,116,114,101,101,0);
       let nativeV = 4.0;
       let leakcheckerU = String.fromCharCode(102,105,108,108,95,103,95,50,48,0);
         libreactz = "1";
      let castw = libreactz.length <= 5605294;
      do {
         libreactz += `${(libreactz == String.fromCharCode(90,0) ? libreactz.length : webviewc.size)}`;
         if (castw) {
            break;
         }
      } while (castw && (3 <= (libreactz.length ^ webviewc.size)));
      let animationV = 8065668 >= leakcheckerU.length;
      do {
          let shootyesgoalf = String.fromCharCode(118,95,50,52,95,114,101,115,0);
          let bootf: Array<any> = [765, 344, 171];
         leakcheckerU += `${1 + bootf.length}`;
         shootyesgoalf += `${shootyesgoalf.length}`;
         bootf.push(3 << (Math.min(2, shootyesgoalf.length)));
         if (animationV) {
            break;
         }
      } while (((leakcheckerU.length / 5) > 4 && (5 / (Math.max(6, leakcheckerU.length))) > 5) && animationV);
         nativeV += (String.fromCharCode(121,0) == leakcheckerU ? parseInt(`${nativeV}`) : leakcheckerU.length);
      for (let a = 0; a < 2; a++) {
         libreactz += `${(String.fromCharCode(88,0) == libreactz ? webviewc.size : libreactz.length)}`;
      }
       let teamb = String.fromCharCode(97,112,112,101,110,100,101,100,95,116,95,56,51,0);
       let filledj = String.fromCharCode(103,95,57,51,95,108,105,109,105,116,97,116,105,111,110,0);
          let inactive7 = String.fromCharCode(118,95,49,49,0);
          let disconnectedlogoi = 1.0;
          let regeng0 = String.fromCharCode(118,95,57,56,95,102,112,109,98,0);
         nativeV -= 2 << (Math.min(2, libreactz.length));
         inactive7 += `${parseInt(`${disconnectedlogoi}`) % (Math.max(3, 7))}`;
         disconnectedlogoi -= parseInt(`${disconnectedlogoi}`) >> (Math.min(inactive7.length, 5));
         regeng0 = `${parseInt(`${disconnectedlogoi}`)}`;
       let episodeh = String.fromCharCode(98,117,98,98,108,101,115,95,55,95,57,51,0);
       let librrcX = String.fromCharCode(115,111,117,110,95,54,95,51,52,0);
       let profileinactiveF = String.fromCharCode(103,95,51,48,95,105,110,102,101,114,101,100,0);
         teamb = `${filledj.length}`;
      let lines = webviewc.size <= 5832726;
      do {
         webviewc = new Map([[`${webviewc.size}`, webviewc.size]]);
         if (lines) {
            break;
         }
      } while (((webviewc.size / 2) < 3 || (webviewc.size / (Math.max(2, 8))) < 4) && lines);
         profileinactiveF += `${librrcX.length % (Math.max(1, 9))}`;
      downloadingC += `${parseInt(`${giflivestreamingW}`) ^ 3}`;
      if (mergerg) {
         break;
      }
   } while (((regeng_ << (Math.min(Math.abs(3), 2))) == 4) && mergerg);

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
       let rewardJ: Map<any, any> = new Map([[String.fromCharCode(105,110,115,117,102,102,105,99,105,101,110,116,95,53,95,52,57,0),true ], [String.fromCharCode(120,95,56,56,95,102,114,97,109,101,102,111,114,109,97,116,0),true ], [String.fromCharCode(104,113,100,110,100,95,114,95,53,0),true ]]);
    let libruntimeexecutorV = String.fromCharCode(106,95,54,95,118,115,121,110,99,0);
    let videovarJ = 4.0;
    let applec = 2.0;
    let j_managerl = 4.0;
    let annerq = String.fromCharCode(98,95,56,50,95,97,115,107,105,110,103,0);
    let pointn = String.fromCharCode(110,95,52,51,95,120,115,117,98,0);
    let defaultplayerimgR = false;
    let nalyticsR = 2.0;
    let phoneQ = String.fromCharCode(120,95,52,52,95,102,111,112,101,110,0);
    let mbbidd = 0;
    let injuryC: Array<any> = [442, 356];
      applec -= parseInt(`${j_managerl}`);
   if (parseInt(`${j_managerl}`) <= libruntimeexecutorV.length) {
       let chart2: Array<any> = [295, 498, 678];
       let iconwatchnowP = 4;
       let phoneshareU = String.fromCharCode(100,99,116,114,101,102,95,49,95,53,55,0);
       let buttonH = 2.0;
       let defaultplayerimgM = 2.0;
      if (5.33 < (defaultplayerimgM * 5.32) || 5.95 < (defaultplayerimgM / 5.32)) {
          let uinit_axK = 4.0;
          let progressl = String.fromCharCode(114,101,109,111,118,101,95,106,95,54,51,0);
         defaultplayerimgM -= parseInt(`${buttonH}`);
         uinit_axK *= parseFloat(`${parseInt(`${uinit_axK}`)}`);
         progressl += `${3 ^ parseInt(`${uinit_axK}`)}`;
      }
          let scored = String.fromCharCode(110,95,52,52,95,114,103,98,116,101,115,116,0);
         phoneshareU = "3";
         scored = `${scored.length + 3}`;
         iconwatchnowP &= 3 / (Math.max(parseInt(`${buttonH}`), 6));
      let twitterU = defaultplayerimgM >= 5167447.0;
      do {
         defaultplayerimgM /= Math.max(2, parseInt(`${buttonH}`));
         if (twitterU) {
            break;
         }
      } while ((chart2.length >= 4) && twitterU);
         buttonH /= Math.max(2, parseFloat(`${parseInt(`${buttonH}`) + chart2.length}`));
      for (let x = 0; x < 2; x++) {
         buttonH -= parseFloat(`${chart2.length}`);
      }
         chart2 = [1];
       let yellowredcardv = 1;
         chart2 = [parseInt(`${buttonH}`) | chart2.length];
      for (let l = 0; l < 2; l++) {
         defaultplayerimgM -= 1;
      }
         defaultplayerimgM *= parseInt(`${buttonH}`) << (Math.min(3, Math.abs(iconwatchnowP)));
      if (2.2 < (3 + defaultplayerimgM)) {
         buttonH /= Math.max(2, parseFloat(`${chart2.length}`));
      }
      while ((parseInt(`${buttonH}`) / 3) >= 4 || (parseInt(`${buttonH}`) / (Math.max(phoneshareU.length, 10))) >= 3) {
         buttonH += parseFloat(`${3}`);
         break;
      }
      for (let c = 0; c < 3; c++) {
         iconwatchnowP *= yellowredcardv + 2;
      }
      while (phoneshareU.length == 1) {
          let redgoal4 = String.fromCharCode(112,95,50,50,95,97,117,116,111,97,114,99,104,105,118,101,0);
          let formX = String.fromCharCode(100,105,109,109,101,100,95,53,95,51,54,0);
          let short_syc = String.fromCharCode(97,108,101,114,116,115,95,97,95,55,49,0);
         phoneshareU += `${short_syc.length | 1}`;
         redgoal4 = `${formX.length}`;
         formX += `${formX.length % (Math.max(redgoal4.length, 7))}`;
         short_syc = "2";
         break;
      }
      j_managerl *= parseFloat(`${parseInt(`${j_managerl}`) >> (Math.min(Math.abs(parseInt(`${buttonH}`)), 3))}`);
   }
      annerq = `${(String.fromCharCode(85,0) == phoneQ ? rewardJ.size : phoneQ.length)}`;
      nalyticsR /= Math.max(((defaultplayerimgR ? 4 : 2) * 1), 2);
      j_managerl *= parseFloat(`${parseInt(`${applec}`) | 2}`);
       let templateprocessorE: Array<any> = [String.fromCharCode(120,95,53,53,95,111,114,100,101,114,105,110,103,0), String.fromCharCode(114,101,103,117,108,97,114,95,50,95,56,49,0), String.fromCharCode(114,95,52,57,95,101,110,117,109,101,114,97,116,101,100,0)];
       let clearN = false;
       let whiteanimationlivev = String.fromCharCode(108,111,103,103,101,114,95,116,95,55,54,0);
         clearN = templateprocessorE.length == 33 || 33 == whiteanimationlivev.length;
       let moditym = 1.0;
      while (templateprocessorE.length > 5) {
         clearN = templateprocessorE.length >= 49;
         break;
      }
      while (!whiteanimationlivev.endsWith(`${moditym}`)) {
         moditym -= parseFloat(`${templateprocessorE.length >> (Math.min(Math.abs(3), 2))}`);
         break;
      }
      if (5 <= whiteanimationlivev.length && !clearN) {
          let danger7: Array<any> = [550, 937, 942];
          let eventn: Array<any> = [String.fromCharCode(101,102,102,101,99,116,105,118,101,95,112,95,57,51,0), String.fromCharCode(115,104,117,116,100,111,119,110,95,103,95,51,48,0), String.fromCharCode(115,116,117,110,95,115,95,55,54,0)];
          let eyeopenK = 1.0;
          let knewsshareZ: Map<any, any> = new Map([[String.fromCharCode(99,104,111,105,99,101,115,95,101,95,50,50,0),582], [String.fromCharCode(114,108,111,116,116,105,101,99,111,109,109,111,110,95,51,95,49,54,0),561], [String.fromCharCode(115,97,118,101,100,95,120,95,53,55,0),252]]);
         clearN = 18.11 <= moditym && 92 <= templateprocessorE.length;
         danger7 = [danger7.length];
         eventn.push(2);
         eyeopenK -= parseFloat(`${parseInt(`${eyeopenK}`) | 1}`);
         knewsshareZ = new Map([[`${knewsshareZ.size}`, knewsshareZ.size & eventn.length]]);
      }
      while (whiteanimationlivev.endsWith(`${clearN}`)) {
          let specY: Map<any, any> = new Map([[String.fromCharCode(114,95,49,48,95,111,112,115,0),129], [String.fromCharCode(100,111,119,110,108,111,97,100,105,110,103,95,99,95,50,0),95]]);
          let submit8 = 2.0;
         whiteanimationlivev = `${3 * parseInt(`${submit8}`)}`;
         specY = new Map([[`${specY.size}`, 3 & specY.size]]);
         submit8 *= parseFloat(`${specY.size * specY.size}`);
         break;
      }
      for (let v = 0; v < 1; v++) {
         templateprocessorE = [templateprocessorE.length ^ 3];
      }
      if ((templateprocessorE.length | 2) > 1 && (4.18 / (Math.max(2, moditym))) > 1.80) {
         moditym += parseFloat(`${templateprocessorE.length % 1}`);
      }
      if (!clearN && (2.29 - moditym) <= 1.90) {
          let starC = 5;
          let iconpipexpandz = 1.0;
          let holdera = 4.0;
         clearN = iconpipexpandz <= holdera;
         starC <<= Math.min(5, Math.abs(starC + 3));
         iconpipexpandz -= parseFloat(`${2}`);
      }
      annerq += `${phoneQ.length}`;
   if (annerq.length < 4) {
       let termsz = 1;
       let previewx = 4.0;
       let iconarrowright6: Map<any, any> = new Map([[String.fromCharCode(110,95,52,49,95,113,115,118,115,99,97,108,101,0),String.fromCharCode(104,95,57,55,95,114,101,99,117,114,115,105,118,101,0)], [String.fromCharCode(113,95,53,53,95,111,102,102,101,114,101,100,0),String.fromCharCode(104,119,114,97,110,100,95,119,95,51,55,0)]]);
       let modityH = false;
      let teamdetailsbgj = iconarrowright6.size >= 8471421;
      do {
         iconarrowright6 = new Map([[`${iconarrowright6.size}`, iconarrowright6.size * 1]]);
         if (teamdetailsbgj) {
            break;
         }
      } while ((Array.from(iconarrowright6.values()).includes(termsz)) && teamdetailsbgj);
      let iconrefreshM = 8591570.0 <= previewx;
      do {
         previewx += parseFloat(`${2 | parseInt(`${previewx}`)}`);
         if (iconrefreshM) {
            break;
         }
      } while ((termsz <= previewx) && iconrefreshM);
         previewx /= Math.max(parseFloat(`${iconarrowright6.size | 2}`), 1);
      let dropdownA = 7889952.0 >= previewx;
      do {
         previewx *= parseFloat(`${3}`);
         if (dropdownA) {
            break;
         }
      } while (dropdownA && (3.35 >= previewx));
         modityH = !modityH;
      for (let u = 0; u < 2; u++) {
         previewx *= parseFloat(`${1 | parseInt(`${previewx}`)}`);
      }
      while (5.96 <= (2.76 * previewx) && 4.36 <= (2.76 * previewx)) {
          let kuaishouu = String.fromCharCode(99,111,109,112,111,115,101,95,55,95,49,49,0);
          let libswscaleZ = String.fromCharCode(118,95,50,53,95,115,119,97,112,112,97,98,108,101,0);
          let libloggerb: Map<any, any> = new Map([[String.fromCharCode(110,95,55,55,95,117,110,100,101,108,101,103,97,116,101,0),517], [String.fromCharCode(116,100,108,115,95,110,95,56,52,0),270]]);
         termsz -= iconarrowright6.size;
         kuaishouu = "3";
         libswscaleZ = `${(String.fromCharCode(99,0) == kuaishouu ? kuaishouu.length : libswscaleZ.length)}`;
         libloggerb.set(libswscaleZ, (libswscaleZ == String.fromCharCode(66,0) ? libloggerb.size : libswscaleZ.length));
         break;
      }
         termsz *= termsz ^ 2;
      if ((previewx + 5.28) <= 4.85 || (iconarrowright6.size - 5) <= 2) {
         previewx += parseFloat(`${2}`);
      }
      let filedZ = 8200797 <= iconarrowright6.size;
      do {
         iconarrowright6.set(`${previewx}`, termsz);
         if (filedZ) {
            break;
         }
      } while (((4.13 + previewx) <= 4.83) && filedZ);
       let orientationZ = 4.0;
       let filled6 = 1.0;
      for (let b = 0; b < 1; b++) {
          let libloggeru: Array<any> = [574, 423];
          let configureR = String.fromCharCode(115,121,110,99,97,98,108,101,95,112,95,55,52,0);
          let time_bxG = 2.0;
         orientationZ += parseFloat(`${iconarrowright6.size * 1}`);
         libloggeru = [libloggeru.length | 2];
         configureR = `${libloggeru.length}`;
         time_bxG -= libloggeru.length % (Math.max(configureR.length, 1));
      }
      defaultplayerimgR = !defaultplayerimgR && !modityH;
   }
   for (let v = 0; v < 3; v++) {
       let whistleM: Map<any, any> = new Map([[String.fromCharCode(109,111,99,107,115,95,122,95,57,49,0),421], [String.fromCharCode(119,95,52,52,0),167]]);
       let tickn: Array<any> = [String.fromCharCode(104,95,53,57,95,99,109,111,118,0), String.fromCharCode(97,114,114,105,118,97,108,95,53,95,51,50,0), String.fromCharCode(118,95,57,57,95,98,105,116,118,101,99,115,0)];
         whistleM.set(`${tickn.length}`, whistleM.size * 3);
       let userJ = String.fromCharCode(101,120,112,97,110,100,101,114,95,53,95,49,55,0);
      if ((5 % (Math.max(5, tickn.length))) < 5) {
          let guide3 = true;
         tickn = [tickn.length];
         guide3 = !guide3;
      }
          let cancel0: Array<any> = [273, 958, 651];
         tickn = [whistleM.size / 2];
         cancel0.push(1 >> (Math.min(2, cancel0.length)));
      if ((whistleM.size + tickn.length) > 2 && 3 > (tickn.length + 2)) {
          let notification2 = 3;
          let historyp = false;
          let matchesx = true;
          let storeT = false;
         whistleM.set(userJ, tickn.length ^ userJ.length);
         notification2 *= (2 - (storeT ? 3 : 2));
         historyp = !storeT;
         matchesx = 92 < notification2 && matchesx;
      }
      while (userJ.length < tickn.length) {
         userJ += `${tickn.length}`;
         break;
      }
      applec /= Math.max(5, 3 | mbbidd);
   }
      mbbidd ^= mbbidd;
   let closel = mbbidd <= 9401217;
   do {
      mbbidd /= Math.max(1, (annerq == String.fromCharCode(76,0) ? annerq.length : parseInt(`${j_managerl}`)));
      if (closel) {
         break;
      }
   } while (closel && (3 < (2 ^ mbbidd) || (2 & mbbidd) < 5));
   if ((phoneQ.length + parseInt(`${applec}`)) == 2 || 1.44 == (phoneQ.length + applec)) {
      phoneQ = `${rewardJ.size + libruntimeexecutorV.length}`;
   }
   for (let k = 0; k < 3; k++) {
       let subbasketballplayerc = 4.0;
       let yellowredcardI = String.fromCharCode(110,95,50,56,95,104,97,115,104,101,114,0);
      for (let i = 0; i < 3; i++) {
         yellowredcardI += `${parseInt(`${subbasketballplayerc}`) * yellowredcardI.length}`;
      }
         yellowredcardI += `${parseInt(`${subbasketballplayerc}`) % 3}`;
         yellowredcardI = `${yellowredcardI.length ^ 1}`;
         subbasketballplayerc += parseFloat(`${parseInt(`${subbasketballplayerc}`) >> (Math.min(yellowredcardI.length, 3))}`);
         subbasketballplayerc -= parseFloat(`${parseInt(`${subbasketballplayerc}`)}`);
      let inactiveq = subbasketballplayerc >= 7167456.0;
      do {
         subbasketballplayerc *= parseFloat(`${yellowredcardI.length * parseInt(`${subbasketballplayerc}`)}`);
         if (inactiveq) {
            break;
         }
      } while (inactiveq && (3 == (parseInt(`${subbasketballplayerc}`) / (Math.max(3, yellowredcardI.length))) && (subbasketballplayerc / 4.3) == 4.89));
      pointn = `${parseInt(`${j_managerl}`) % 2}`;
   }
       let footballp = String.fromCharCode(105,115,116,111,103,114,97,109,95,109,95,52,0);
         footballp += `${footballp.length / 1}`;
      let target2 = 6099283 <= footballp.length;
      do {
         footballp += `${3 & footballp.length}`;
         if (target2) {
            break;
         }
      } while ((footballp != String.fromCharCode(51,0)) && target2);
      for (let k = 0; k < 3; k++) {
         footballp = `${footballp.length}`;
      }
      phoneQ += `${((defaultplayerimgR ? 3 : 2))}`;
      applec /= Math.max(1 << (Math.min(Math.abs(parseInt(`${nalyticsR}`)), 5)), 2);
      annerq = `${1 >> (Math.min(2, annerq.length))}`;
   for (let y = 0; y < 1; y++) {
      mbbidd /= Math.max(4, 3 - mbbidd);
   }
   if (5 < (rewardJ.size << (Math.min(Math.abs(1), 2))) && 3 < (1 << (Math.min(2, Math.abs(rewardJ.size))))) {
       let roomN: Array<any> = [619, 109, 659];
       let episodesT = String.fromCharCode(119,95,51,53,95,105,110,116,115,0);
       let iconclosewhitebgR = 1.0;
      while (!episodesT.startsWith(`${roomN.length}`)) {
         episodesT += `${episodesT.length ^ 2}`;
         break;
      }
      if (3 == (3 - episodesT.length) && (iconclosewhitebgR - 2.26) == 2.52) {
          let chinan = true;
          let overlaym = String.fromCharCode(104,95,52,56,95,113,116,97,98,108,101,0);
          let sheetU = true;
          let libswscaleW = false;
          let indexq = String.fromCharCode(99,111,108,108,95,115,95,49,56,0);
         iconclosewhitebgR /= Math.max(4, parseFloat(`${3 ^ episodesT.length}`));
         chinan = indexq.length == 82;
         overlaym += `${((chinan ? 5 : 5) ^ indexq.length)}`;
         sheetU = sheetU && overlaym.length < 66;
         libswscaleW = libswscaleW || indexq.length < 61;
      }
       let manifestD = String.fromCharCode(102,97,97,110,105,100,99,116,95,104,95,53,51,0);
       let product0 = String.fromCharCode(105,115,100,105,103,105,116,95,53,95,56,48,0);
         episodesT = `${manifestD.length}`;
         iconclosewhitebgR *= parseFloat(`${product0.length >> (Math.min(5, episodesT.length))}`);
      for (let t = 0; t < 3; t++) {
         roomN.push(2 ^ product0.length);
      }
      if (episodesT.length > 3) {
         episodesT += `${episodesT.length}`;
      }
      while (3.43 <= (iconclosewhitebgR / (Math.max(parseFloat(`${episodesT.length}`), 2))) || 2 <= (episodesT.length / (Math.max(10, parseInt(`${iconclosewhitebgR}`))))) {
         iconclosewhitebgR += parseFloat(`${2 * product0.length}`);
         break;
      }
      if ((iconclosewhitebgR * parseFloat(`${episodesT.length}`)) == 1.45 || 2.79 == (iconclosewhitebgR * 1.45)) {
         iconclosewhitebgR += parseFloat(`${roomN.length / 3}`);
      }
      phoneQ = "1";
   }
   while ((1 - parseInt(`${nalyticsR}`)) == 4 && (2.100 - nalyticsR) == 1.45) {
       let downloadl = String.fromCharCode(106,95,53,56,95,118,105,115,105,98,105,116,121,0);
       let alertK: Array<any> = [496, 373];
          let uploadA = 4.0;
          let acceptedR = String.fromCharCode(100,116,109,102,95,57,95,52,53,0);
          let libtanB = String.fromCharCode(99,95,53,48,95,99,97,110,99,101,108,101,100,0);
         alertK.push(alertK.length);
         uploadA += 2;
         acceptedR = `${acceptedR.length}`;
         libtanB += `${acceptedR.length}`;
         downloadl += `${3 * alertK.length}`;
         alertK.push(2 >> (Math.min(1, alertK.length)));
         downloadl += `${downloadl.length}`;
      let with_gR = 5155072 >= alertK.length;
      do {
          let iconsharea = String.fromCharCode(121,95,49,49,95,99,97,108,108,115,0);
          let android0: Map<any, any> = new Map([[String.fromCharCode(102,108,111,111,100,95,110,95,49,57,0),474], [String.fromCharCode(105,108,108,101,103,97,108,95,107,95,49,52,0),191], [String.fromCharCode(117,95,56,48,0),526]]);
          let footballfiledlayoutq = false;
          let singaporem: Array<any> = [710, 494, 106];
          let clocks = String.fromCharCode(100,101,97,108,108,111,99,97,116,101,95,120,95,56,51,0);
         alertK.push(2 / (Math.max(9, downloadl.length)));
         iconsharea += `${clocks.length & android0.size}`;
         android0 = new Map([[`${footballfiledlayoutq}`, clocks.length << (Math.min(Math.abs(1), 5))]]);
         singaporem = [clocks.length];
         if (with_gR) {
            break;
         }
      } while (with_gR && ((2 << (Math.min(1, downloadl.length))) == 2 && 2 == (downloadl.length << (Math.min(4, alertK.length)))));
      while ((4 >> (Math.min(4, downloadl.length))) >= 1) {
         downloadl = `${(downloadl == String.fromCharCode(117,0) ? downloadl.length : alertK.length)}`;
         break;
      }
      nalyticsR /= Math.max(3, alertK.length + 1);
      break;
   }
      annerq += `${3 - mbbidd}`;
   for (let b = 0; b < 1; b++) {
      annerq = `${1 ^ parseInt(`${nalyticsR}`)}`;
   }
   for (let e = 0; e < 2; e++) {
      annerq = `${parseInt(`${videovarJ}`)}`;
   }
   for (let j = 0; j < 2; j++) {
      j_managerl /= Math.max(parseFloat(`${mbbidd << (Math.min(annerq.length, 2))}`), 2);
   }
   let awayteamfieldS = String.fromCharCode(118,111,113,122,122,57,114,116,0) == annerq;
   do {
      annerq += `${rewardJ.size}`;
      if (awayteamfieldS) {
         break;
      }
   } while (awayteamfieldS && (annerq.length > 2));
      libruntimeexecutorV += `${1 << (Math.min(Math.abs(parseInt(`${nalyticsR}`)), 5))}`;

        console.log("Error!", err, time);
      }
    };

    const onSeekGesture = (time: number) => {
      if (currentTime < time) {
        setSeekDirection("commentCodegenLivenodatabgimg");
      } else {
        setSeekDirection("umengFillTypes");
      }
      onSeek(time);
    };

    const onVideoProgessing = (data: any) => {
      setCurrentTime(data.currentTime);

      try {
        currentTimeRef.current = data.currentTime;
      } catch (err) {
       let controlsn = true;
    let downT = 0.0;
    let downp = String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114,109,97,103,105,99,95,103,95,53,0);
    let eventq = 5.0;
    let sentryM: Array<any> = [33, 222];
    let nativeQ = String.fromCharCode(115,101,108,101,99,116,101,100,95,112,95,55,56,0);
    let baseL = false;
    let watchw = String.fromCharCode(112,95,51,48,95,105,115,101,120,112,108,97,105,110,0);
    let neonn: Array<any> = [String.fromCharCode(118,95,57,48,95,100,105,110,102,0), String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,95,109,95,51,0)];
   while (3 > (sentryM.length - 2)) {
      sentryM = [2 | parseInt(`${eventq}`)];
      break;
   }
   let libswresampleZ = baseL ? !baseL : baseL;
   do {
       let whiteanimationlive1 = 0.0;
       let graphicsz = String.fromCharCode(98,108,111,99,107,105,110,103,95,118,95,53,56,0);
         whiteanimationlive1 += 2;
      for (let f = 0; f < 2; f++) {
         graphicsz = "3";
      }
      if (2.55 >= whiteanimationlive1) {
         graphicsz = `${2 / (Math.max(8, graphicsz.length))}`;
      }
          let circleX = 5;
         graphicsz += "1";
         circleX -= 3;
         graphicsz += `${(graphicsz == String.fromCharCode(51,0) ? graphicsz.length : parseInt(`${whiteanimationlive1}`))}`;
          let zoomz = 2.0;
          let telegramm = 5.0;
          let zhubo4: Array<any> = [907, 861, 802];
         whiteanimationlive1 += parseInt(`${zoomz}`) | 3;
         zoomz *= parseFloat(`${parseInt(`${telegramm}`)}`);
         telegramm *= 2 << (Math.min(Math.abs(parseInt(`${telegramm}`)), 5));
         zhubo4.push(zhubo4.length % (Math.max(3, parseInt(`${telegramm}`))));
      baseL = neonn.length > 61;
      if (libswresampleZ) {
         break;
      }
   } while (libswresampleZ && (5 > neonn.length && (5 ^ neonn.length) > 4));
   if (1 == sentryM.length) {
      sentryM = [watchw.length * downp.length];
   }
      controlsn = sentryM.length == nativeQ.length;
      nativeQ += `${neonn.length}`;
      downp = `${downp.length | 3}`;
   let downarrowv = 9723009.0 <= eventq;
   do {
      eventq /= Math.max(1, downp.length / (Math.max(2, 10)));
      if (downarrowv) {
         break;
      }
   } while ((eventq < 4.95) && downarrowv);
   while (4 >= (watchw.length >> (Math.min(4, neonn.length))) || 5 >= (4 >> (Math.min(4, neonn.length)))) {
       let nalyticsz = 2.0;
       let yellowredcarde: Array<any> = [683, 805, 788];
      if ((nalyticsz + yellowredcarde.length) == 5.23) {
         yellowredcarde = [yellowredcarde.length];
      }
          let o_positionE = String.fromCharCode(105,95,55,53,95,105,110,105,116,105,97,108,105,122,101,114,0);
          let bgvipxvod1 = String.fromCharCode(115,101,113,95,98,95,51,51,0);
         nalyticsz /= Math.max((bgvipxvod1 == String.fromCharCode(87,0) ? bgvipxvod1.length : yellowredcarde.length), 1);
         o_positionE = `${(String.fromCharCode(109,0) == o_positionE ? o_positionE.length : o_positionE.length)}`;
      watchw = `${parseInt(`${nalyticsz}`)}`;
      break;
   }
      eventq *= sentryM.length;
   if (!baseL) {
      baseL = controlsn;
   }
   if (5 == (downp.length + 2) && (eventq - downp.length) == 1.69) {
      eventq += (3 ^ (controlsn ? 3 : 4));
   }
   for (let w = 0; w < 2; w++) {
       let homen: Map<any, any> = new Map([[String.fromCharCode(112,95,54,57,95,105,116,108,101,0),807], [String.fromCharCode(97,99,104,101,95,56,95,49,48,48,0),788], [String.fromCharCode(116,95,54,52,95,116,119,105,108,105,103,104,116,0),154]]);
       let webviewh = 5.0;
       let detaill: Array<any> = [String.fromCharCode(105,100,115,117,98,116,121,112,101,95,121,95,57,57,0), String.fromCharCode(101,110,116,114,121,95,115,95,53,48,0)];
       let combinede: Array<any> = [String.fromCharCode(102,95,54,55,95,98,111,116,116,108,101,110,101,99,107,0), String.fromCharCode(109,100,97,121,95,108,95,52,56,0), String.fromCharCode(119,95,50,50,95,108,111,99,97,108,104,111,115,116,0)];
       let modityJ = 2.0;
          let reminderq = String.fromCharCode(112,97,114,97,109,101,116,114,105,99,95,106,95,55,54,0);
          let uploadV: Array<any> = [344, 723];
         webviewh += parseFloat(`${homen.size & 2}`);
         reminderq = `${uploadV.length << (Math.min(Math.abs(2), 1))}`;
         uploadV.push(reminderq.length);
      let iconpipexpand5 = webviewh <= 7374825.0;
      do {
         webviewh /= Math.max(parseFloat(`${parseInt(`${modityJ}`)}`), 1);
         if (iconpipexpand5) {
            break;
         }
      } while (iconpipexpand5 && (Array.from(homen.keys()).includes(`${webviewh}`)));
      for (let a = 0; a < 2; a++) {
         detaill = [2 & parseInt(`${webviewh}`)];
      }
      while (4.27 < (modityJ * combinede.length) || 4 < (parseInt(`${modityJ}`) * combinede.length)) {
         combinede.push(parseInt(`${modityJ}`) / 3);
         break;
      }
      for (let x = 0; x < 2; x++) {
         modityJ += combinede.length;
      }
      let launchF = 8653303.0 >= webviewh;
      do {
         webviewh *= parseFloat(`${homen.size * parseInt(`${webviewh}`)}`);
         if (launchF) {
            break;
         }
      } while (launchF && ((1 / (Math.max(8, modityJ))) <= 3.3));
          let shared3 = 5.0;
         webviewh -= parseFloat(`${2}`);
         shared3 *= parseFloat(`${parseInt(`${shared3}`)}`);
          let disconnectedC = 2.0;
          let staro = 1.0;
          let securityK = String.fromCharCode(122,95,53,49,95,102,105,110,97,108,105,122,101,114,0);
         homen.set(`${modityJ}`, 2);
         disconnectedC += securityK.length;
         staro += parseFloat(`${1}`);
         securityK += `${parseInt(`${staro}`) | parseInt(`${disconnectedC}`)}`;
         detaill = [parseInt(`${webviewh}`) * homen.size];
      while ((4.6 + webviewh) <= 4.43 && (detaill.length + parseInt(`${webviewh}`)) <= 5) {
         detaill.push(1);
         break;
      }
      if (5.42 == (modityJ + 3.82)) {
          let iconarrowrightJ: Map<any, any> = new Map([[String.fromCharCode(107,95,57,50,95,97,116,111,109,115,0),906], [String.fromCharCode(108,101,97,115,116,95,111,95,53,53,0),582], [String.fromCharCode(114,101,109,111,118,97,98,108,101,95,54,95,57,48,0),805]]);
          let long_is: Map<any, any> = new Map([[String.fromCharCode(116,111,116,97,108,108,121,95,108,95,54,0),489], [String.fromCharCode(111,118,112,97,103,101,95,118,95,53,50,0),400]]);
          let privacyr = true;
          let activityB = 2.0;
         detaill.push(iconarrowrightJ.size / (Math.max(2, 5)));
         iconarrowrightJ = new Map([[`${long_is.size}`, parseInt(`${activityB}`)]]);
         long_is = new Map([[`${long_is.size}`, long_is.size / (Math.max(1, 7))]]);
         privacyr = null == long_is.get(`${activityB}`);
      }
         webviewh += parseFloat(`${parseInt(`${modityJ}`)}`);
       let defaultprofilepicw = String.fromCharCode(99,108,101,97,114,115,95,49,95,53,0);
         webviewh += (parseFloat(`${String.fromCharCode(81,0) == defaultprofilepicw ? homen.size : defaultprofilepicw.length}`));
      if ((modityJ + homen.size) >= 4.11) {
         homen.set(`${modityJ}`, 3 << (Math.min(Math.abs(parseInt(`${modityJ}`)), 4)));
      }
      nativeQ = `${2 - parseInt(`${eventq}`)}`;
   }
      downp = `${3 - parseInt(`${downT}`)}`;
      baseL = sentryM.length >= 25;
   if (!controlsn) {
       let backgroundF = String.fromCharCode(103,95,55,51,95,108,105,116,101,114,97,108,0);
       let green0: Array<any> = [28, 992, 970];
       let dragclosec = String.fromCharCode(112,97,115,115,98,95,48,95,50,55,0);
       let disconnectedW = String.fromCharCode(97,95,49,50,95,97,112,112,115,102,108,121,101,114,0);
      let acceptedy = disconnectedW.length >= 5481628;
      do {
         disconnectedW += `${green0.length}`;
         if (acceptedy) {
            break;
         }
      } while (acceptedy && (dragclosec.length <= disconnectedW.length));
         backgroundF = `${1 & green0.length}`;
          let flyerF = String.fromCharCode(100,95,56,56,95,99,108,97,115,104,101,100,0);
          let kuaishouu = 2.0;
          let stringE: Array<any> = [523, 647];
         green0.push((String.fromCharCode(95,0) == dragclosec ? disconnectedW.length : dragclosec.length));
         flyerF = `${(flyerF == String.fromCharCode(105,0) ? stringE.length : flyerF.length)}`;
         kuaishouu *= stringE.length % (Math.max(flyerF.length, 10));
      if (backgroundF != disconnectedW) {
         disconnectedW = `${green0.length * backgroundF.length}`;
      }
          let eventsplashY: Array<any> = [987, 603];
          let predictionbannersharedx = 1;
         dragclosec += `${disconnectedW.length}`;
         eventsplashY.push(eventsplashY.length);
         predictionbannersharedx >>= Math.min(Math.abs(3 ^ predictionbannersharedx), 1);
      let flaga = 5505596 <= backgroundF.length;
      do {
          let dacccfaabfbcbadeebddcabacdffdbF = 1.0;
         backgroundF += `${dragclosec.length | 3}`;
         dacccfaabfbcbadeebddcabacdffdbF += parseFloat(`${parseInt(`${dacccfaabfbcbadeebddcabacdffdbF}`) | parseInt(`${dacccfaabfbcbadeebddcabacdffdbF}`)}`);
         if (flaga) {
            break;
         }
      } while (flaga && (!backgroundF.startsWith(`${green0.length}`)));
         green0 = [2];
      if (dragclosec.length < green0.length) {
         dragclosec += `${green0.length}`;
      }
          let mbbanneri = false;
         disconnectedW += `${(dragclosec == String.fromCharCode(68,0) ? backgroundF.length : dragclosec.length)}`;
         mbbanneri = (mbbanneri ? !mbbanneri : !mbbanneri);
       let p_player3 = String.fromCharCode(112,95,56,55,95,100,97,109,112,105,110,103,0);
      if (5 <= green0.length) {
          let indicatorO: Array<any> = [883, 828, 908];
          let zhuboR = true;
          let libavfilterC = false;
         p_player3 = `${(green0.length + (libavfilterC ? 5 : 2))}`;
         indicatorO = [indicatorO.length];
         zhuboR = indicatorO.length <= 2;
         libavfilterC = indicatorO.includes(zhuboR);
      }
         p_player3 += `${disconnectedW.length}`;
      eventq -= nativeQ.length;
   }
   for (let w = 0; w < 3; w++) {
       let eactV = String.fromCharCode(113,95,51,55,95,113,117,105,99,107,99,111,109,112,114,101,115,115,0);
       let flipperm = 2;
       let historyY = true;
       let rulesL: Array<any> = [String.fromCharCode(119,95,52,57,95,109,97,120,100,98,115,0), String.fromCharCode(109,117,116,97,116,105,111,110,95,105,95,49,48,0), String.fromCharCode(118,95,56,53,95,115,117,115,112,101,110,100,101,100,0)];
      let runtimeschedulerV = flipperm >= 8131714;
      do {
          let encryptI = true;
          let uimanager0 = 0.0;
          let crown4 = 5;
          let pressureA = 2.0;
         flipperm += crown4;
         encryptI = pressureA >= 19.70 && encryptI;
         uimanager0 += parseFloat(`${parseInt(`${pressureA}`)}`);
         crown4 /= Math.max(parseInt(`${pressureA}`), 5);
         if (runtimeschedulerV) {
            break;
         }
      } while ((2 < (2 ^ rulesL.length) && (flipperm ^ rulesL.length) < 2) && runtimeschedulerV);
       let defaultfootballbgZ: Array<any> = [97, 889];
       let selectM: Array<any> = [151, 269];
         eactV += `${flipperm}`;
      let screenh = eactV.length >= 5059023;
      do {
         eactV += `${flipperm / 1}`;
         if (screenh) {
            break;
         }
      } while (((eactV.length - flipperm) < 1) && screenh);
      for (let l = 0; l < 3; l++) {
         selectM = [flipperm / 1];
      }
         flipperm /= Math.max(5, 2 - defaultfootballbgZ.length);
      while (5 == eactV.length) {
          let bridgeR = true;
          let str1 = String.fromCharCode(112,95,52,51,95,109,97,110,100,97,116,111,114,121,0);
          let bingP = 4;
         selectM = [rulesL.length | flipperm];
         bridgeR = bingP >= str1.length;
         str1 += `${bingP}`;
         break;
      }
         defaultfootballbgZ = [rulesL.length];
         defaultfootballbgZ.push(defaultfootballbgZ.length * 2);
       let clearQ = true;
       let langkey3 = false;
      let twitterZ = langkey3 ? !langkey3 : langkey3;
      do {
          let brightnessM: Map<any, any> = new Map([[String.fromCharCode(111,98,117,115,95,50,95,55,56,0),202], [String.fromCharCode(115,95,57,55,95,101,110,117,109,0),751]]);
          let iconsaveimage7 = 2;
          let floaterj = 1.0;
         langkey3 = (selectM.length * flipperm) >= 1;
         brightnessM = new Map([[`${brightnessM.size}`, iconsaveimage7 >> (Math.min(Math.abs(2), 5))]]);
         iconsaveimage7 <<= Math.min(Math.abs(iconsaveimage7 | 2), 3);
         floaterj -= parseFloat(`${3}`);
         if (twitterZ) {
            break;
         }
      } while (twitterZ && (!langkey3));
      for (let s = 0; s < 3; s++) {
          let actionsn = 0.0;
          let telegrami = false;
         historyY = rulesL.length >= 56 || !langkey3;
         actionsn += (parseFloat(`${(telegrami ? 5 : 1) << (Math.min(Math.abs(parseInt(`${actionsn}`)), 1))}`));
         telegrami = !telegrami && 86.17 <= actionsn;
      }
      eventq -= flipperm % (Math.max(3, 6));
   }
      baseL = 79.59 > downT && downp.length > 27;
      downp += `${nativeQ.length * watchw.length}`;
      sentryM = [watchw.length >> (Math.min(Math.abs(3), 4))];
      nativeQ += `${nativeQ.length - 2}`;

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
       let libreactN = String.fromCharCode(113,117,97,110,116,95,108,95,50,54,0);
    let attributedstringt = String.fromCharCode(102,116,118,115,112,108,105,116,98,97,114,95,106,95,54,49,0);
    let scrollviewE = String.fromCharCode(109,95,56,49,95,102,105,110,97,108,0);
    let overv: Map<any, any> = new Map([[String.fromCharCode(97,95,55,95,115,117,98,98,108,111,99,107,115,0),414], [String.fromCharCode(112,95,50,50,95,112,111,97,0),612], [String.fromCharCode(102,111,114,109,97,116,116,101,114,95,49,95,49,49,0),365]]);
    let malaysia7 = String.fromCharCode(104,95,54,53,95,101,109,101,114,103,101,110,99,121,0);
    let strD = String.fromCharCode(97,114,101,113,117,101,115,116,95,116,95,55,50,0);
    let gesturesp = 2.0;
    let libjsiZ: Array<any> = [358, 509, 238];
    let service8 = String.fromCharCode(116,95,49,52,95,118,99,100,97,116,97,0);
    let bell3: Map<any, any> = new Map([[String.fromCharCode(101,110,100,97,95,48,95,53,54,0),114], [String.fromCharCode(101,95,57,52,95,108,105,118,101,100,0),670], [String.fromCharCode(120,95,57,53,95,109,105,99,114,111,112,104,111,110,101,0),790]]);
    let weiboO = 0.0;
    let incidentU = 5;
    let yellowvideolive2 = String.fromCharCode(102,114,111,109,98,121,116,101,115,95,120,95,49,50,0);
    let circleV = 3.0;
    let libanem = true;
    let faviconu = 2.0;
    let listA = 3.0;
    let abidetectT: Array<any> = [932, 561, 849];
    let foregroundj = 0;
   while (4 == (libjsiZ.length / 3)) {
      libjsiZ = [libreactN.length];
      break;
   }
      gesturesp /= Math.max(1, parseFloat(`${parseInt(`${circleV}`) / (Math.max(parseInt(`${gesturesp}`), 3))}`));
       let greytickP = String.fromCharCode(97,95,55,50,95,102,109,116,115,0);
       let grey4: Array<any> = [882, 692];
       let disconnectedy = String.fromCharCode(98,97,114,99,111,100,101,95,97,95,54,54,0);
      if (2 <= (1 >> (Math.min(4, disconnectedy.length)))) {
         grey4.push(greytickP.length / 2);
      }
          let reactnativeultimatelistview_ = 0.0;
         greytickP = `${grey4.length % (Math.max(1, 4))}`;
         reactnativeultimatelistview_ += parseInt(`${reactnativeultimatelistview_}`);
         greytickP = `${greytickP.length >> (Math.min(Math.abs(1), 4))}`;
      while (5 > grey4.length) {
         grey4.push(1 >> (Math.min(2, disconnectedy.length)));
         break;
      }
      while (!disconnectedy.startsWith(greytickP)) {
         disconnectedy = `${disconnectedy.length}`;
         break;
      }
         grey4.push(disconnectedy.length);
      if (disconnectedy.length <= greytickP.length) {
         greytickP = `${grey4.length}`;
      }
      let actionsm = 7895761 <= greytickP.length;
      do {
         greytickP += `${1 >> (Math.min(5, grey4.length))}`;
         if (actionsm) {
            break;
         }
      } while ((2 < (greytickP.length / 2) && (grey4.length / 2) < 3) && actionsm);
      for (let q = 0; q < 1; q++) {
         greytickP = `${(String.fromCharCode(90,0) == disconnectedy ? greytickP.length : disconnectedy.length)}`;
      }
      strD += `${greytickP.length >> (Math.min(Math.abs(3), 4))}`;
   let dragK = libanem ? !libanem : libanem;
   do {
       let iconedit3 = false;
       let nativeex8: Map<any, any> = new Map([[String.fromCharCode(97,118,102,105,108,116,101,114,95,48,95,54,50,0),true ], [String.fromCharCode(114,95,49,55,95,101,115,116,105,109,97,116,111,114,0),false ], [String.fromCharCode(99,109,115,103,115,95,109,95,49,56,0),true ]]);
         iconedit3 = nativeex8.size > 71;
       let pathe = 4.0;
      while (iconedit3) {
          let reactnativejsv = String.fromCharCode(118,101,99,115,95,118,95,53,53,0);
          let overR = String.fromCharCode(112,97,114,116,105,116,105,111,110,105,110,103,95,106,95,57,50,0);
          let ajaxq = 4.0;
         nativeex8 = new Map([[`${nativeex8.size}`, (nativeex8.size / (Math.max(2, (iconedit3 ? 4 : 4))))]]);
         reactnativejsv = `${reactnativejsv.length & 1}`;
         overR += `${(overR == String.fromCharCode(84,0) ? overR.length : parseInt(`${ajaxq}`))}`;
         ajaxq -= 2 ^ overR.length;
         break;
      }
       let slider1 = true;
          let jingdong3: Array<any> = [String.fromCharCode(120,95,54,56,95,109,115,109,112,101,103,118,0), String.fromCharCode(112,114,101,116,116,121,95,120,95,49,54,0)];
         iconedit3 = !iconedit3;
         jingdong3 = [jingdong3.length ^ 1];
      if (1.56 == (2.23 + pathe)) {
          let iconbackwhiteU = String.fromCharCode(107,95,54,55,95,100,108,105,115,116,0);
          let checkboxo = String.fromCharCode(109,95,49,52,95,109,115,109,112,101,103,100,97,116,97,0);
         slider1 = !checkboxo.includes(`${slider1}`);
         iconbackwhiteU = `${iconbackwhiteU.length}`;
         checkboxo = `${(iconbackwhiteU == String.fromCharCode(108,0) ? iconbackwhiteU.length : iconbackwhiteU.length)}`;
      }
      libanem = String.fromCharCode(114,0) == attributedstringt;
      if (dragK) {
         break;
      }
   } while (dragK && (!libanem || 4 >= libreactN.length));
      overv = new Map([[`${bell3.size}`, bell3.size]]);
   if (yellowvideolive2.length == attributedstringt.length) {
      yellowvideolive2 = `${1 & parseInt(`${weiboO}`)}`;
   }
       let turnX: Map<any, any> = new Map([[String.fromCharCode(106,111,105,110,105,110,103,95,98,95,52,56,0),String.fromCharCode(117,114,98,103,95,113,95,52,52,0)], [String.fromCharCode(119,97,110,116,95,111,95,54,50,0),String.fromCharCode(101,108,101,109,101,110,116,115,95,100,95,52,51,0)], [String.fromCharCode(114,95,56,52,95,100,114,105,102,116,0),String.fromCharCode(97,95,54,49,95,102,114,97,109,101,113,117,101,117,101,0)]]);
       let combineZ = 4;
       let pointK = 5;
         turnX = new Map([[`${turnX.size}`, turnX.size & pointK]]);
      if ((pointK / (Math.max(turnX.size, 2))) < 1 || 1 < (pointK / 1)) {
         pointK &= turnX.size;
      }
       let libsgcoreF = 3;
       let yellowvideoliveh = 4;
         libsgcoreF *= turnX.size + 1;
      for (let a = 0; a < 3; a++) {
         turnX = new Map([[`${libsgcoreF}`, libsgcoreF ^ yellowvideoliveh]]);
      }
         combineZ *= pointK;
         turnX.set(`${pointK}`, pointK + 1);
      for (let r = 0; r < 3; r++) {
          let rewind1 = 0.0;
         pointK -= 3 - pointK;
         rewind1 /= Math.max(parseFloat(`${parseInt(`${rewind1}`)}`), 3);
      }
         libsgcoreF += turnX.size;
      scrollviewE += `${attributedstringt.length}`;
      scrollviewE = "3";
   while (weiboO < 2.48) {
       let register_srG = true;
       let schedulej: Map<any, any> = new Map([[String.fromCharCode(110,95,56,57,95,99,108,111,115,101,115,0),606], [String.fromCharCode(115,117,114,114,111,117,110,100,95,115,95,52,51,0),937], [String.fromCharCode(103,114,97,98,98,101,114,95,49,95,50,51,0),215]]);
       let statsn: Map<any, any> = new Map([[String.fromCharCode(113,95,56,95,115,101,101,107,98,97,99,107,0),938], [String.fromCharCode(98,95,50,95,109,97,110,105,112,117,108,97,116,111,114,0),687]]);
       let defaultlogo4 = String.fromCharCode(110,95,55,53,95,115,109,105,108,105,110,103,0);
       let tickB: Map<any, any> = new Map([[String.fromCharCode(103,95,50,51,95,99,97,118,115,100,115,112,0),String.fromCharCode(120,95,52,54,95,100,106,112,101,103,0)], [String.fromCharCode(104,97,108,108,95,57,95,57,51,0),String.fromCharCode(113,95,55,53,95,116,104,97,116,0)], [String.fromCharCode(112,97,112,101,114,115,95,112,95,53,50,0),String.fromCharCode(115,113,117,97,114,101,95,105,95,49,49,0)]]);
      let streamingX = String.fromCharCode(97,120,117,107,56,118,95,121,115,0) == defaultlogo4;
      do {
         defaultlogo4 = `${(1 - (register_srG ? 2 : 3))}`;
         if (streamingX) {
            break;
         }
      } while ((defaultlogo4.endsWith(`${schedulej.size}`)) && streamingX);
         schedulej.set(`${register_srG}`, ((register_srG ? 1 : 2) >> (Math.min(Math.abs(3), 5))));
         tickB = new Map([[`${tickB.size}`, defaultlogo4.length]]);
       let eighteenR = 2.0;
      while (defaultlogo4.length > statsn.size) {
         statsn.set(`${statsn.size}`, statsn.size / (Math.max(tickB.size, 5)));
         break;
      }
          let phoneshareS = 3.0;
          let libswscaler = String.fromCharCode(104,105,101,114,97,114,99,104,121,95,53,95,50,51,0);
          let hejiR = 0.0;
         defaultlogo4 += `${parseInt(`${hejiR}`) / 3}`;
         phoneshareS /= Math.max(parseInt(`${phoneshareS}`) - libswscaler.length, 5);
         libswscaler += "2";
         hejiR += (parseFloat(`${libswscaler == String.fromCharCode(66,0) ? parseInt(`${phoneshareS}`) : libswscaler.length}`));
         defaultlogo4 = `${(3 | (register_srG ? 1 : 4))}`;
         schedulej = new Map([[`${schedulej.size}`, defaultlogo4.length >> (Math.min(4, Math.abs(schedulej.size)))]]);
          let tumbnail3 = 1.0;
          let successk = true;
         statsn.set(`${successk}`, tickB.size);
         tumbnail3 /= Math.max(3, 3);
      if ((schedulej.size * tickB.size) >= 4) {
         schedulej.set(`${register_srG}`, 3 << (Math.min(Math.abs(parseInt(`${eighteenR}`)), 4)));
      }
         statsn = new Map([[`${tickB.size}`, 3 ^ tickB.size]]);
         schedulej.set(defaultlogo4, tickB.size);
          let stara = String.fromCharCode(109,95,56,57,95,108,111,97,100,101,114,0);
         tickB = new Map([[`${schedulej.size}`, defaultlogo4.length & 1]]);
         stara += `${stara.length}`;
         schedulej.set(`${schedulej.size}`, 2);
       let circlea = 3;
       let customU = 1;
      weiboO += (String.fromCharCode(109,0) == attributedstringt ? attributedstringt.length : (libanem ? 1 : 1));
      break;
   }
   for (let s = 0; s < 1; s++) {
       let plash3 = 5.0;
       let roboto6 = 5.0;
       let predictionwinA = 3.0;
       let carouselg = 3.0;
       let whistleb: Map<any, any> = new Map([[String.fromCharCode(122,95,48,95,105,102,102,116,0),262], [String.fromCharCode(106,95,53,48,95,117,110,99,111,100,101,100,0),455]]);
       let side3 = String.fromCharCode(100,105,109,95,122,95,50,49,0);
       let orientation6 = String.fromCharCode(108,95,53,50,95,100,97,112,112,115,0);
      if (side3.length == orientation6.length) {
          let frame_8b: Array<any> = [String.fromCharCode(99,95,49,95,105,99,111,110,0), String.fromCharCode(112,95,48,95,118,97,108,105,100,105,116,121,0)];
         side3 += `${parseInt(`${plash3}`)}`;
         frame_8b = [frame_8b.length];
      }
         carouselg /= Math.max(4, 2);
      let downloaderJ = 9136654 <= side3.length;
      do {
         side3 = `${parseInt(`${carouselg}`) << (Math.min(Math.abs(2), 5))}`;
         if (downloaderJ) {
            break;
         }
      } while (downloaderJ && (3 <= orientation6.length));
      if (4.25 == (predictionwinA / (Math.max(1.74, 5)))) {
         predictionwinA /= Math.max(parseFloat(`${orientation6.length}`), 3);
      }
      if (!orientation6.includes(`${plash3}`)) {
         orientation6 += `${parseInt(`${predictionwinA}`) * 3}`;
      }
          let catalog2 = String.fromCharCode(100,95,52,51,95,100,97,105,0);
          let infod = String.fromCharCode(97,97,99,116,97,98,95,122,95,51,48,0);
          let profileinactivek: Map<any, any> = new Map([[String.fromCharCode(110,95,51,57,95,115,101,116,116,108,101,0),String.fromCharCode(103,95,50,95,97,117,116,104,111,114,105,122,97,116,105,111,110,115,0)], [String.fromCharCode(97,114,99,104,105,116,101,99,116,117,114,101,95,97,95,49,50,0),String.fromCharCode(112,98,107,100,102,95,97,95,51,54,0)]]);
         carouselg /= Math.max(parseInt(`${plash3}`) / (Math.max(infod.length, 7)), 5);
         catalog2 = `${profileinactivek.size}`;
         infod += "3";
         profileinactivek.set(`${catalog2}`, 2 + profileinactivek.size);
          let abidetectB = false;
          let iconsubssuccessD = String.fromCharCode(103,95,50,55,95,99,97,108,99,117,97,108,116,101,0);
          let libavutilL = String.fromCharCode(117,110,115,101,101,110,95,114,95,49,53,0);
         side3 += `${parseInt(`${roboto6}`)}`;
         abidetectB = libavutilL.length > iconsubssuccessD.length;
         iconsubssuccessD += `${((abidetectB ? 2 : 2))}`;
         libavutilL = `${iconsubssuccessD.length | 1}`;
      let const_il_ = whistleb.size <= 8933554;
      do {
         whistleb = new Map([[`${whistleb.size}`, parseInt(`${carouselg}`) >> (Math.min(Math.abs(1), 3))]]);
         if (const_il_) {
            break;
         }
      } while ((2.25 > (carouselg - 4.88)) && const_il_);
         predictionwinA *= parseFloat(`${1 / (Math.max(4, parseInt(`${roboto6}`)))}`);
         predictionwinA /= Math.max(5, parseFloat(`${orientation6.length & 2}`));
      while ((roboto6 / (Math.max(7, parseFloat(`${side3.length}`)))) >= 4.96 || 2 >= (parseInt(`${roboto6}`) / (Math.max(side3.length, 10)))) {
         side3 += `${(String.fromCharCode(101,0) == side3 ? side3.length : whistleb.size)}`;
         break;
      }
         side3 += `${parseInt(`${plash3}`)}`;
         roboto6 -= parseFloat(`${side3.length + 2}`);
      let upgradep = 8908004 >= whistleb.size;
      do {
         whistleb.set(`${carouselg}`, whistleb.size ^ parseInt(`${carouselg}`));
         if (upgradep) {
            break;
         }
      } while ((!Array.from(whistleb.values()).includes(carouselg)) && upgradep);
      gesturesp /= Math.max(parseFloat(`${3}`), 5);
   }
       let libaneZ = String.fromCharCode(100,100,99,116,95,118,95,52,55,0);
       let teamv = true;
       let whiteanimationlivem = 4.0;
         teamv = !teamv;
      let imagesp = teamv ? !teamv : teamv;
      do {
          let favorite3 = true;
         teamv = !favorite3 || 38.86 < whiteanimationlivem;
         if (imagesp) {
            break;
         }
      } while (imagesp && (teamv));
          let searchbarJ = 5.0;
         whiteanimationlivem /= Math.max(1, (parseInt(`${searchbarJ}`) + (teamv ? 2 : 3)));
          let gdtadvS = String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,115,95,116,95,52,0);
         libaneZ = `${((teamv ? 4 : 3) / (Math.max(parseInt(`${whiteanimationlivem}`), 8)))}`;
         gdtadvS += `${gdtadvS.length / (Math.max(gdtadvS.length, 1))}`;
       let libruntimeexecutorp: Map<any, any> = new Map([[String.fromCharCode(105,95,49,53,95,102,101,101,100,0),612], [String.fromCharCode(110,95,56,50,95,113,100,114,97,119,0),536], [String.fromCharCode(115,99,117,98,98,101,114,95,111,95,57,55,0),681]]);
       let phoneshareu: Map<any, any> = new Map([[String.fromCharCode(105,95,55,50,95,99,111,110,115,116,114,117,99,116,0),false ], [String.fromCharCode(108,111,97,100,95,113,95,48,0),true ], [String.fromCharCode(104,95,51,55,95,98,108,105,116,0),true ]]);
      let handlerO = whiteanimationlivem <= 6152322.0;
      do {
         whiteanimationlivem -= 1;
         if (handlerO) {
            break;
         }
      } while ((5.84 <= whiteanimationlivem && (whiteanimationlivem / 5.84) <= 1.36) && handlerO);
      for (let g = 0; g < 3; g++) {
         teamv = 71.61 <= whiteanimationlivem;
      }
         teamv = null == libruntimeexecutorp.get(`${teamv}`);
      if (4.17 <= whiteanimationlivem) {
         whiteanimationlivem += libruntimeexecutorp.size % (Math.max(8, phoneshareu.size));
      }
      scrollviewE += `${(malaysia7 == String.fromCharCode(51,0) ? (teamv ? 1 : 1) : malaysia7.length)}`;
   let whistlea = service8 == String.fromCharCode(53,119,114,48,52,108,99,113,52,0);
   do {
      service8 += `${parseInt(`${weiboO}`) & 3}`;
      if (whistlea) {
         break;
      }
   } while (whistlea && (!strD.startsWith(service8)));
   if (gesturesp < 4.78) {
       let review2 = String.fromCharCode(102,95,57,57,95,105,110,116,101,114,108,97,99,101,100,0);
       let zhuboB = 2.0;
         review2 += `${review2.length}`;
         zhuboB += 2 & review2.length;
          let orangeN = String.fromCharCode(115,97,118,101,112,111,105,110,116,115,95,114,95,53,55,0);
         zhuboB -= (orangeN == String.fromCharCode(121,0) ? parseInt(`${zhuboB}`) : orangeN.length);
         review2 = `${2 - review2.length}`;
      for (let k = 0; k < 2; k++) {
          let libyoga5 = String.fromCharCode(119,95,50,56,0);
         review2 += `${1 + parseInt(`${zhuboB}`)}`;
         libyoga5 += `${libyoga5.length * 1}`;
      }
      let reactnativeultimatelistview1 = 8640024.0 >= zhuboB;
      do {
         zhuboB /= Math.max(3, review2.length);
         if (reactnativeultimatelistview1) {
            break;
         }
      } while ((1.88 < (1.20 + zhuboB)) && reactnativeultimatelistview1);
      yellowvideolive2 += `${2 / (Math.max(1, libreactN.length))}`;
   }
   let hooksE = weiboO >= 5488903.0;
   do {
      weiboO *= yellowvideolive2.length % (Math.max(4, overv.size));
      if (hooksE) {
         break;
      }
   } while ((3.4 <= (5.36 * weiboO)) && hooksE);
      libreactN += `${2 + bell3.size}`;
       let update_vD = 3.0;
         update_vD *= 1;
         update_vD /= Math.max(3 | parseInt(`${update_vD}`), 4);
      while (update_vD <= update_vD) {
         update_vD += parseInt(`${update_vD}`) % (Math.max(parseInt(`${update_vD}`), 9));
         break;
      }
      yellowvideolive2 = `${2 / (Math.max(9, bell3.size))}`;
      gesturesp /= Math.max(2, parseFloat(`${strD.length / 1}`));
       let schedulery = false;
       let send7: Array<any> = [824, 73];
         send7 = [send7.length];
      while (schedulery) {
         schedulery = send7.length == 19;
         break;
      }
         schedulery = send7.length <= 88;
       let grayJ: Map<any, any> = new Map([[String.fromCharCode(100,105,97,108,111,103,115,95,49,95,50,48,0),942], [String.fromCharCode(115,95,53,57,95,122,98,105,110,0),920]]);
         grayJ.set(`${schedulery}`, ((schedulery ? 1 : 5) | 2));
       let favorite4 = String.fromCharCode(111,95,57,56,0);
      strD += "3";
      gesturesp += parseFloat(`${parseInt(`${circleV}`) / (Math.max(scrollviewE.length, 8))}`);
       let mbnativep = 3.0;
       let applicationF = String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,95,110,95,50,0);
          let floatingS = String.fromCharCode(116,95,51,52,95,98,108,105,110,107,0);
          let megaphonea: Array<any> = [625, 969];
         applicationF = `${parseInt(`${mbnativep}`)}`;
         floatingS = `${(String.fromCharCode(90,0) == floatingS ? megaphonea.length : floatingS.length)}`;
         megaphonea.push((floatingS == String.fromCharCode(82,0) ? floatingS.length : megaphonea.length));
         mbnativep /= Math.max(5, parseInt(`${mbnativep}`));
         applicationF = `${applicationF.length * 2}`;
         applicationF = `${1 - applicationF.length}`;
      if (3.61 > (2.16 - mbnativep)) {
          let mappingG = 4;
          let suggestionP: Map<any, any> = new Map([[String.fromCharCode(99,111,111,107,105,101,95,100,95,51,0),true ], [String.fromCharCode(109,95,50,95,115,116,111,112,112,101,100,0),false ]]);
          let defaultpredictionprofileE = String.fromCharCode(117,110,113,117,97,110,116,105,122,101,95,100,95,55,53,0);
          let traminio = String.fromCharCode(110,95,53,56,95,108,105,98,118,101,114,115,105,111,110,0);
          let subsY = 0.0;
         mbnativep -= 1 - suggestionP.size;
         mappingG ^= 1 ^ mappingG;
         suggestionP = new Map([[defaultpredictionprofileE, 2 % (Math.max(4, mappingG))]]);
         defaultpredictionprofileE += "2";
         traminio = `${mappingG / (Math.max(defaultpredictionprofileE.length, 6))}`;
         subsY -= parseFloat(`${mappingG * 2}`);
      }
      while (3 >= (applicationF.length / 5) || (2.76 + mbnativep) >= 1.44) {
         mbnativep += (String.fromCharCode(73,0) == applicationF ? parseInt(`${mbnativep}`) : applicationF.length);
         break;
      }
      overv.set(attributedstringt, attributedstringt.length * 1);
       let libjsijniprofiler0 = true;
       let profileactiveN: Array<any> = [235, 18, 367];
       let bridgeE = String.fromCharCode(104,95,50,55,95,114,101,111,112,101,110,0);
      for (let l = 0; l < 1; l++) {
         profileactiveN = [(1 | (libjsijniprofiler0 ? 5 : 2))];
      }
      while ((bridgeE.length << (Math.min(2, profileactiveN.length))) == 5 && (profileactiveN.length << (Math.min(bridgeE.length, 5))) == 5) {
         profileactiveN.push((bridgeE == String.fromCharCode(50,0) ? bridgeE.length : (libjsijniprofiler0 ? 2 : 1)));
         break;
      }
       let catagory3 = String.fromCharCode(116,101,120,105,112,111,100,95,49,95,50,49,0);
         profileactiveN = [(catagory3 == String.fromCharCode(95,0) ? catagory3.length : bridgeE.length)];
          let libreactperfloggerjnin: Array<any> = [91, 91];
          let predictionbannershared0 = 3.0;
          let nativeexW = true;
         bridgeE = `${catagory3.length >> (Math.min(Math.abs(1), 3))}`;
         libreactperfloggerjnin.push(2 / (Math.max(parseInt(`${predictionbannershared0}`), 6)));
         predictionbannershared0 *= 1;
         nativeexW = libreactperfloggerjnin.includes(predictionbannershared0);
          let sorte: Array<any> = [971, 743, 435];
          let dplusW = String.fromCharCode(117,110,105,110,105,116,95,105,95,49,49,0);
         bridgeE += "2";
         sorte = [dplusW.length % 2];
         dplusW = `${sorte.length}`;
       let debugp: Map<any, any> = new Map([[String.fromCharCode(109,95,49,50,95,99,97,110,111,112,117,115,0),String.fromCharCode(120,95,50,48,95,112,107,99,115,0)], [String.fromCharCode(114,97,110,115,105,116,105,111,110,95,120,95,54,50,0),String.fromCharCode(99,111,112,121,116,101,115,116,95,106,95,54,53,0)]]);
         debugp.set(`${profileactiveN.length}`, debugp.size);
       let manifestS = false;
       let templateprocessorj = true;
      yellowvideolive2 += "3";
   let libreactZ = libanem ? !libanem : libanem;
   do {
      libanem = circleV <= overv.size;
      if (libreactZ) {
         break;
      }
   } while (libreactZ && (scrollviewE.length <= 4));
   while (2 == overv.size) {
      gesturesp /= Math.max(1, parseFloat(`${parseInt(`${gesturesp}`) + malaysia7.length}`));
      break;
   }
      malaysia7 += `${3 * strD.length}`;
   if ((5.80 + gesturesp) > 3.61) {
      gesturesp += parseFloat(`${yellowvideolive2.length}`);
   }
   for (let e = 0; e < 2; e++) {
      attributedstringt += `${parseInt(`${circleV}`) << (Math.min(libjsiZ.length, 5))}`;
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
       let dependencies3: Array<any> = [726, 962, 610];
    let hoverG: Array<any> = [326, 407, 541];
    let indexr = 2.0;
    let china4 = String.fromCharCode(108,111,110,103,110,111,105,115,101,95,97,95,57,53,0);
    let securityI = 5;
    let orangeclockb: Array<any> = [776, 967, 422];
    let backward_ = 5.0;
    let taiwanj = String.fromCharCode(100,115,117,98,101,120,112,95,50,95,57,50,0);
    let mailm = String.fromCharCode(101,95,49,53,95,97,116,116,114,0);
    let eventsplashR = 4;
    let predictionarrowR = String.fromCharCode(121,95,53,51,95,108,105,98,97,118,102,111,114,109,97,116,0);
    let chinaT = String.fromCharCode(115,95,50,95,115,101,108,101,99,116,105,118,101,108,121,0);
    let liveendmodallogoz: Map<any, any> = new Map([[String.fromCharCode(97,118,114,101,115,97,109,112,108,101,114,101,115,95,51,95,51,55,0),935], [String.fromCharCode(115,116,114,97,116,101,103,105,101,115,95,105,95,50,52,0),399]]);
      predictionarrowR = "1";
   for (let o = 0; o < 2; o++) {
      hoverG = [1];
   }
   for (let i = 0; i < 2; i++) {
      securityI -= mailm.length ^ china4.length;
   }
   for (let z = 0; z < 3; z++) {
      backward_ *= parseFloat(`${parseInt(`${indexr}`)}`);
   }
       let abidetect6 = 4.0;
       let navigationt = String.fromCharCode(97,98,117,102,102,101,114,115,105,110,107,95,118,95,56,55,0);
       let v_positionO = String.fromCharCode(111,95,52,50,95,112,114,101,99,105,115,105,111,110,0);
         navigationt = "2";
      let upgradeu = navigationt == String.fromCharCode(109,54,110,119,49,97,109,105,0);
      do {
          let fill7 = 2.0;
          let largeF = 5.0;
         navigationt = `${v_positionO.length}`;
         fill7 *= parseInt(`${largeF}`);
         if (upgradeu) {
            break;
         }
      } while ((1 > (5 + parseInt(`${abidetect6}`)) && (5 * navigationt.length) > 3) && upgradeu);
          let updatesz = 5.0;
          let chartq: Array<any> = [129, 263];
         navigationt = `${parseInt(`${abidetect6}`) & chartq.length}`;
         updatesz -= parseInt(`${updatesz}`) >> (Math.min(3, Math.abs(2)));
         chartq = [parseInt(`${updatesz}`) % (Math.max(6, parseInt(`${updatesz}`)))];
      while (v_positionO.length <= 1 && navigationt.length <= 1) {
         navigationt += `${parseInt(`${abidetect6}`) % (Math.max(navigationt.length, 8))}`;
         break;
      }
         navigationt += "3";
      let vipsportu = navigationt == String.fromCharCode(52,54,51,0);
      do {
          let tickM = 5.0;
         navigationt += `${navigationt.length % (Math.max(v_positionO.length, 4))}`;
         tickM /= Math.max(1, parseFloat(`${parseInt(`${tickM}`) << (Math.min(5, Math.abs(1)))}`));
         if (vipsportu) {
            break;
         }
      } while (vipsportu && (!navigationt.endsWith(`${abidetect6}`)));
         v_positionO = `${navigationt.length}`;
          let downloadedi: Array<any> = [983, 331];
          let gift2 = String.fromCharCode(109,98,117,102,115,95,102,95,54,55,0);
         navigationt += "2";
         downloadedi = [1];
         gift2 += `${gift2.length | 3}`;
         navigationt += `${3 | navigationt.length}`;
      orangeclockb = [eventsplashR];
      mailm += `${securityI % (Math.max(mailm.length, 4))}`;
      indexr += dependencies3.length | 2;
   while (5 <= (china4.length / 1)) {
      orangeclockb.push((String.fromCharCode(48,0) == china4 ? parseInt(`${indexr}`) : china4.length));
      break;
   }
       let const_tK = 2;
       let textV: Array<any> = [824, 699, 100];
       let zhuboT = 1.0;
         textV = [const_tK >> (Math.min(5, Math.abs(1)))];
         textV = [textV.length + 3];
      if (3 >= (const_tK / (Math.max(1, textV.length)))) {
         const_tK <<= Math.min(Math.abs(textV.length + 2), 1);
      }
          let onewinterstitial7 = 3.0;
         textV = [2 << (Math.min(Math.abs(parseInt(`${onewinterstitial7}`)), 3))];
         textV.push(textV.length);
      while ((textV.length >> (Math.min(2, Math.abs(const_tK)))) <= 5 || (5 >> (Math.min(4, Math.abs(const_tK)))) <= 4) {
          let predictionactive_: Map<any, any> = new Map([[String.fromCharCode(113,95,57,52,95,109,117,108,116,105,112,108,121,0),645], [String.fromCharCode(97,95,53,53,95,105,100,99,116,0),326], [String.fromCharCode(97,95,49,49,95,109,101,109,111,114,121,0),437]]);
          let proxyq = false;
          let nativeexN = true;
          let baselineq: Map<any, any> = new Map([[String.fromCharCode(105,95,57,54,95,109,97,103,105,99,121,117,118,0),22], [String.fromCharCode(98,97,114,99,111,100,101,95,105,95,50,49,0),552], [String.fromCharCode(108,95,53,53,95,102,105,118,101,0),30]]);
         const_tK %= Math.max(2, baselineq.size >> (Math.min(Math.abs(2), 2)));
         predictionactive_ = new Map([[`${nativeexN}`, (1 ^ (proxyq ? 4 : 5))]]);
         proxyq = !nativeexN;
         baselineq = new Map([[`${proxyq}`, ((proxyq ? 3 : 2))]]);
         break;
      }
      for (let g = 0; g < 1; g++) {
         const_tK ^= 2;
      }
          let giftq = 0;
         const_tK ^= 3 + parseInt(`${zhuboT}`);
         giftq <<= Math.min(Math.abs(giftq >> (Math.min(5, Math.abs(giftq)))), 5);
      if ((parseInt(`${zhuboT}`) / (Math.max(textV.length, 4))) == 3 && 2 == (3 + textV.length)) {
         zhuboT /= Math.max(1, 1);
      }
      eventsplashR >>= Math.min(Math.abs(parseInt(`${indexr}`)), 3);
   while (china4 == predictionarrowR) {
       let helperc = 4;
       let dnewarchdefaultsc = 1.0;
       let megaphonej = false;
       let gemfileB = true;
      if (dnewarchdefaultsc >= helperc) {
          let eventsplashk = String.fromCharCode(107,101,99,99,97,107,95,105,95,50,52,0);
          let detailS = String.fromCharCode(104,95,52,48,95,109,100,99,118,0);
         dnewarchdefaultsc += eventsplashk.length - 3;
         eventsplashk = `${detailS.length - detailS.length}`;
      }
      if (!megaphonej) {
          let eacty = 1.0;
          let materialf: Map<any, any> = new Map([[String.fromCharCode(117,95,50,48,95,109,97,114,107,101,114,0),580], [String.fromCharCode(102,105,110,105,115,104,101,100,95,100,95,52,50,0),128], [String.fromCharCode(104,105,103,104,98,100,95,102,95,57,0),310]]);
          let direct6 = String.fromCharCode(119,95,52,52,95,108,111,103,115,116,101,114,101,111,0);
         megaphonej = !gemfileB;
         eacty *= 2 + materialf.size;
         materialf.set(`${eacty}`, parseInt(`${eacty}`) ^ 2);
         direct6 = `${parseInt(`${eacty}`) + materialf.size}`;
      }
      while (megaphonej && gemfileB) {
         megaphonej = dnewarchdefaultsc >= 44.19;
         break;
      }
      while (5 < helperc) {
         dnewarchdefaultsc -= ((megaphonej ? 2 : 1));
         break;
      }
      if ((dnewarchdefaultsc - 5.22) > 5.8) {
          let containerV: Array<any> = [561, 426, 795];
          let libfabricjni7 = 0.0;
          let nativeexT = String.fromCharCode(121,95,55,55,95,115,99,111,112,101,0);
          let libimagepipelineN = String.fromCharCode(97,105,116,101,114,95,120,95,52,48,0);
         gemfileB = 24 < nativeexT.length;
         containerV = [containerV.length];
         libfabricjni7 *= containerV.length;
         nativeexT += `${parseInt(`${libfabricjni7}`)}`;
         libimagepipelineN = `${containerV.length}`;
      }
      for (let o = 0; o < 2; o++) {
          let buildb = true;
          let confirmationz = String.fromCharCode(97,95,56,95,97,121,98,114,105,0);
          let room9 = String.fromCharCode(109,115,122,104,95,100,95,53,54,0);
         dnewarchdefaultsc *= (String.fromCharCode(102,0) == confirmationz ? confirmationz.length : room9.length);
         buildb = !buildb || buildb;
      }
      let liveendmodallogob = megaphonej ? !megaphonej : megaphonej;
      do {
         megaphonej = dnewarchdefaultsc <= 10.0 || megaphonej;
         if (liveendmodallogob) {
            break;
         }
      } while (liveendmodallogob && (megaphonej));
      for (let f = 0; f < 1; f++) {
         helperc += ((gemfileB ? 5 : 1) % (Math.max(helperc, 5)));
      }
         helperc <<= Math.min(Math.abs(helperc / 1), 3);
      for (let l = 0; l < 1; l++) {
          let main_kA = 2.0;
         gemfileB = helperc > 37;
         main_kA -= 3 * parseInt(`${main_kA}`);
      }
         megaphonej = (megaphonej ? !gemfileB : !megaphonej);
          let defaultprofilepicL = false;
         gemfileB = (!defaultprofilepicL ? gemfileB : !defaultprofilepicL);
      predictionarrowR += `${helperc ^ parseInt(`${dnewarchdefaultsc}`)}`;
      break;
   }
      backward_ /= Math.max(parseFloat(`${parseInt(`${indexr}`)}`), 5);

      if (
        autoPlayNext &&
        activeEpisode !== undefined &&
        episodes &&
        activeEpisode < episodes?.url_count - 1
      ) {

   if (hoverG.length < 3) {
      backward_ /= Math.max(parseFloat(`${eventsplashR}`), 1);
   }
       let incidentv = String.fromCharCode(99,117,98,101,95,56,95,54,56,0);
       let private_2tV = false;
       let libffmpegkity = 4.0;
      let dataP = private_2tV ? !private_2tV : private_2tV;
      do {
         private_2tV = libffmpegkity < 29.30;
         if (dataP) {
            break;
         }
      } while (dataP && (1 <= incidentv.length || !private_2tV));
       let t_managerE = 5;
       let tickedm = 0;
         tickedm += (String.fromCharCode(83,0) == incidentv ? t_managerE : incidentv.length);
      if (libffmpegkity < t_managerE) {
         libffmpegkity -= t_managerE * incidentv.length;
      }
          let larger: Map<any, any> = new Map([[String.fromCharCode(122,95,50,52,95,97,114,99,104,105,118,101,0),120], [String.fromCharCode(115,95,49,48,95,100,101,99,111,114,97,116,111,114,115,0),397]]);
          let componentu = String.fromCharCode(121,95,51,95,99,117,114,118,101,0);
          let libreactperfloggerjniI = String.fromCharCode(100,95,49,55,95,111,118,101,114,102,108,111,119,0);
         tickedm *= (String.fromCharCode(111,0) == libreactperfloggerjniI ? tickedm : libreactperfloggerjniI.length);
         larger = new Map([[`${larger.size}`, 2 >> (Math.min(1, Math.abs(larger.size)))]]);
         componentu += `${(componentu == String.fromCharCode(115,0) ? larger.size : componentu.length)}`;
      if ((tickedm << (Math.min(Math.abs(4), 2))) >= 4 && 5 >= (tickedm << (Math.min(Math.abs(4), 4)))) {
         t_managerE /= Math.max(t_managerE - 3, 4);
      }
          let libsgcoreT = String.fromCharCode(121,95,50,55,95,101,120,112,101,114,116,0);
         tickedm |= 2;
         libsgcoreT = `${libsgcoreT.length / (Math.max(libsgcoreT.length, 10))}`;
      let componentregistry1 = libffmpegkity <= 5931679.0;
      do {
         libffmpegkity /= Math.max(3, ((private_2tV ? 2 : 3) / (Math.max(incidentv.length, 3))));
         if (componentregistry1) {
            break;
         }
      } while (((5 >> (Math.min(3, Math.abs(tickedm)))) > 4) && componentregistry1);
      while (3 >= (5 >> (Math.min(1, Math.abs(tickedm))))) {
         t_managerE ^= t_managerE;
         break;
      }
      predictionarrowR += `${parseInt(`${backward_}`) + 2}`;
      indexr *= predictionarrowR.length;
   let unfillH = 6081870.0 <= indexr;
   do {
      indexr += (String.fromCharCode(56,0) == taiwanj ? taiwanj.length : parseInt(`${backward_}`));
      if (unfillH) {
         break;
      }
   } while (unfillH && ((3.44 * indexr) <= 5.96 && (3.44 * indexr) <= 3.77));
   if (!dependencies3.includes(hoverG.length)) {
       let overd = String.fromCharCode(108,95,52,51,95,99,97,108,99,117,108,97,116,101,0);
       let mbjscommono = true;
       let diceF = String.fromCharCode(118,95,52,95,105,110,115,116,101,97,100,0);
         overd = `${(2 + (mbjscommono ? 5 : 5))}`;
      let member0 = mbjscommono ? !mbjscommono : mbjscommono;
      do {
          let greyarrowupZ = 1.0;
          let eyeopenD = true;
         mbjscommono = overd.length == 39 || 65.14 == greyarrowupZ;
         greyarrowupZ += 1;
         if (member0) {
            break;
         }
      } while ((3 >= diceF.length || !mbjscommono) && member0);
       let settingZ = String.fromCharCode(117,95,54,50,95,97,115,105,110,107,0);
       let modulesb = String.fromCharCode(104,95,53,54,95,100,105,114,112,0);
       let reminder3: Map<any, any> = new Map([[String.fromCharCode(109,105,115,117,115,101,95,116,95,53,48,0),825], [String.fromCharCode(98,105,110,100,101,114,95,110,95,56,48,0),648], [String.fromCharCode(98,111,100,121,95,111,95,54,53,0),769]]);
       let suggestionq: Map<any, any> = new Map([[String.fromCharCode(106,95,57,48,95,115,99,97,108,97,114,115,0),155], [String.fromCharCode(121,95,53,51,95,98,117,108,108,101,116,115,0),144], [String.fromCharCode(120,95,51,56,95,114,101,101,108,0),684]]);
      for (let f = 0; f < 2; f++) {
         overd = `${reminder3.size}`;
      }
          let agreemente = true;
         diceF = `${modulesb.length}`;
         agreemente = !agreemente;
         diceF = `${overd.length / (Math.max(1, 8))}`;
          let phone_: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,99,98,95,102,95,50,49,0),450], [String.fromCharCode(113,95,56,54,95,109,117,115,120,0),592]]);
         reminder3.set(overd, settingZ.length & 2);
         phone_.set(`${phone_.size}`, 2 * phone_.size);
         diceF += `${((mbjscommono ? 2 : 4) ^ suggestionq.size)}`;
      hoverG.push(parseInt(`${indexr}`));
   }
   if (orangeclockb.length >= dependencies3.length) {
       let termsw = String.fromCharCode(112,114,101,100,105,99,116,105,111,110,115,95,98,95,57,0);
          let livenodatabgimgv = 2.0;
          let greyl: Map<any, any> = new Map([[String.fromCharCode(99,111,110,118,111,108,117,116,105,111,110,95,101,95,56,48,0),String.fromCharCode(110,111,111,112,95,57,95,52,50,0)], [String.fromCharCode(120,95,52,54,95,97,115,105,115,0),String.fromCharCode(120,109,112,101,103,95,122,95,55,50,0)]]);
         termsw = "2";
         livenodatabgimgv /= Math.max(5, parseFloat(`${parseInt(`${livenodatabgimgv}`) * 2}`));
         greyl.set(`${livenodatabgimgv}`, greyl.size % (Math.max(3, 1)));
      while (termsw == String.fromCharCode(54,0)) {
         termsw = `${termsw.length}`;
         break;
      }
         termsw = `${termsw.length & 2}`;
      orangeclockb.push(eventsplashR ^ 1);
   }
   let linej = eventsplashR >= 9745247;
   do {
      eventsplashR >>= Math.min(Math.abs((String.fromCharCode(108,0) == taiwanj ? orangeclockb.length : taiwanj.length)), 2);
      if (linej) {
         break;
      }
   } while (linej && (4 >= (mailm.length % (Math.max(1, eventsplashR)))));
   while ((2 | eventsplashR) == 3) {
       let t_locky = String.fromCharCode(108,97,114,103,101,114,95,112,95,56,48,0);
       let iconbackwhitej: Map<any, any> = new Map([[String.fromCharCode(110,111,116,103,101,116,95,52,95,49,48,0),false ], [String.fromCharCode(118,101,114,116,95,103,95,52,48,0),true ]]);
       let grey4: Array<any> = [String.fromCharCode(118,95,53,54,95,112,115,101,117,100,111,99,111,108,111,114,0), String.fromCharCode(122,95,50,56,95,112,105,110,99,104,105,110,103,0)];
       let switch_uV: Array<any> = [String.fromCharCode(112,95,49,48,95,115,104,105,109,0), String.fromCharCode(99,111,101,102,102,115,95,99,95,51,57,0), String.fromCharCode(116,105,99,107,101,114,115,95,99,95,50,56,0)];
       let carouselC = String.fromCharCode(115,97,110,101,95,53,95,56,48,0);
       let vietnamq = String.fromCharCode(110,95,50,52,95,109,101,109,111,106,105,0);
      if (3 == (vietnamq.length * 5) && 3 == (5 * switch_uV.length)) {
         switch_uV.push(1);
      }
      let comment1 = switch_uV.length <= 7428503;
      do {
         switch_uV.push(t_locky.length * vietnamq.length);
         if (comment1) {
            break;
         }
      } while ((!t_locky.includes(`${switch_uV.length}`)) && comment1);
      for (let p = 0; p < 2; p++) {
         t_locky += `${(vietnamq == String.fromCharCode(99,0) ? iconbackwhitej.size : vietnamq.length)}`;
      }
         switch_uV.push(vietnamq.length % (Math.max(2, 9)));
         carouselC += `${grey4.length % (Math.max(7, vietnamq.length))}`;
         vietnamq = `${vietnamq.length + 3}`;
         carouselC = `${switch_uV.length >> (Math.min(Math.abs(3), 5))}`;
         t_locky += `${vietnamq.length - carouselC.length}`;
         iconbackwhitej = new Map([[`${grey4.length}`, t_locky.length]]);
      for (let y = 0; y < 1; y++) {
         carouselC += "2";
      }
         t_locky += "1";
      backward_ *= parseFloat(`${parseInt(`${indexr}`) | hoverG.length}`);
      break;
   }
   let mbnativep = String.fromCharCode(119,54,112,116,98,118,101,48,122,48,0) == mailm;
   do {
       let predictionactivev = String.fromCharCode(111,112,116,97,114,103,95,113,95,57,51,0);
       let textlayoutmanagerK = String.fromCharCode(100,105,103,114,97,112,104,95,55,95,54,53,0);
       let layoutV = 0;
       let exampleimageD = String.fromCharCode(99,111,109,112,101,110,115,97,116,101,100,95,113,95,52,52,0);
       let modulez = String.fromCharCode(117,110,98,105,97,115,95,50,95,57,48,0);
          let kinit_yD = String.fromCharCode(115,117,98,116,97,115,107,95,107,95,55,54,0);
         predictionactivev += `${(textlayoutmanagerK == String.fromCharCode(122,0) ? textlayoutmanagerK.length : kinit_yD.length)}`;
         textlayoutmanagerK = `${modulez.length}`;
          let iconnointernetm: Map<any, any> = new Map([[String.fromCharCode(98,105,103,105,110,116,95,118,95,50,53,0),String.fromCharCode(100,101,108,97,95,110,95,53,48,0)], [String.fromCharCode(105,95,52,49,95,99,100,101,114,114,111,114,0),String.fromCharCode(100,97,115,104,101,110,99,95,98,95,53,48,0)]]);
          let livenodatabgimgd: Array<any> = [String.fromCharCode(97,116,111,110,95,49,95,49,52,0), String.fromCharCode(112,97,114,116,95,110,95,51,56,0), String.fromCharCode(112,114,105,109,101,95,115,95,54,48,0)];
         textlayoutmanagerK += `${1 & exampleimageD.length}`;
         iconnointernetm = new Map([[`${iconnointernetm.size}`, iconnointernetm.size >> (Math.min(livenodatabgimgd.length, 5))]]);
         livenodatabgimgd.push(livenodatabgimgd.length);
          let defaultplayerimg6 = false;
         textlayoutmanagerK += `${textlayoutmanagerK.length}`;
         exampleimageD += `${textlayoutmanagerK.length}`;
      let eventsplashu = String.fromCharCode(106,49,110,53,121,56,0) == predictionactivev;
      do {
         predictionactivev += `${predictionactivev.length}`;
         if (eventsplashu) {
            break;
         }
      } while ((textlayoutmanagerK != String.fromCharCode(109,0)) && eventsplashu);
      while (predictionactivev != String.fromCharCode(50,0)) {
         textlayoutmanagerK += `${textlayoutmanagerK.length >> (Math.min(5, Math.abs(layoutV)))}`;
         break;
      }
      if (modulez.length <= 5) {
         modulez += `${modulez.length}`;
      }
      if (!modulez.includes(predictionactivev)) {
          let muted7 = String.fromCharCode(99,111,108,111,114,115,95,99,95,54,50,0);
          let rewardq = String.fromCharCode(100,95,56,57,95,114,101,115,105,103,110,101,100,0);
         predictionactivev = `${rewardq.length >> (Math.min(Math.abs(2), 4))}`;
         muted7 += `${muted7.length + 1}`;
         rewardq += `${2 * muted7.length}`;
      }
      for (let v = 0; v < 3; v++) {
         exampleimageD = `${modulez.length ^ textlayoutmanagerK.length}`;
      }
          let modalE = false;
          let playlistY = 1.0;
         modulez += `${2 & exampleimageD.length}`;
         modalE = !modalE;
         playlistY -= ((modalE ? 3 : 3) << (Math.min(Math.abs(parseInt(`${playlistY}`)), 3)));
      if (textlayoutmanagerK == String.fromCharCode(105,0)) {
         modulez = `${modulez.length % (Math.max(2, layoutV))}`;
      }
      if (predictionactivev.includes(exampleimageD)) {
         predictionactivev += `${3 ^ textlayoutmanagerK.length}`;
      }
          let eyeopeno = String.fromCharCode(99,104,101,99,107,108,105,110,101,95,115,95,55,55,0);
          let photoz = String.fromCharCode(99,95,55,52,95,99,111,111,114,100,0);
          let basee = 3.0;
         textlayoutmanagerK += `${1 + modulez.length}`;
         eyeopeno = `${parseInt(`${basee}`)}`;
         photoz += `${eyeopeno.length + photoz.length}`;
         basee *= parseFloat(`${eyeopeno.length}`);
         textlayoutmanagerK += `${textlayoutmanagerK.length}`;
      mailm += `${exampleimageD.length - taiwanj.length}`;
      if (mbnativep) {
         break;
      }
   } while (mbnativep && (!mailm.endsWith(`${securityI}`)));
   let unreadQ = 6128486 >= predictionarrowR.length;
   do {
      predictionarrowR = `${1 & eventsplashR}`;
      if (unreadQ) {
         break;
      }
   } while ((taiwanj == String.fromCharCode(72,0)) && unreadQ);
      eventsplashR >>= Math.min(5, Math.abs(parseInt(`${indexr}`)));
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
       let stationo = 3;
    let policyF = String.fromCharCode(122,95,57,54,95,114,101,116,97,105,110,0);
    let analyticsW = 1.0;
    let const_eH = 2.0;
    let actionsa = String.fromCharCode(103,95,53,50,95,116,104,101,109,101,115,0);
    let commonk = String.fromCharCode(102,99,104,111,119,110,95,110,95,49,49,0);
    let libturbomodulejsijniD = 5.0;
    let umengO = String.fromCharCode(103,114,97,110,117,108,101,95,108,95,51,56,0);
    let videojsQ = String.fromCharCode(110,95,56,56,95,117,115,114,115,99,116,112,0);
    let holderF: Array<any> = [562, 463];
    let latnl: Array<any> = [320, 613, 176];
    let fcdaebecbcbafcdfceaaeccfeacdbO = String.fromCharCode(102,97,97,110,105,100,99,116,95,50,95,56,49,0);
    let networkU: Array<any> = [454, 627, 768];
    let twitterf: Array<any> = [586, 153];
      holderF.push(2 + umengO.length);
   let gradlewJ = String.fromCharCode(100,49,50,106,0) == videojsQ;
   do {
       let exampleimage8 = String.fromCharCode(111,95,51,50,95,99,111,110,102,105,114,109,97,116,105,111,110,115,0);
       let reactz = String.fromCharCode(104,105,103,104,95,106,95,51,0);
      for (let n = 0; n < 1; n++) {
         exampleimage8 = `${reactz.length}`;
      }
      while (!exampleimage8.startsWith(`${reactz.length}`)) {
         exampleimage8 += "3";
         break;
      }
      while (exampleimage8 == String.fromCharCode(79,0)) {
         reactz += `${reactz.length | exampleimage8.length}`;
         break;
      }
      if (reactz.startsWith(exampleimage8)) {
          let notificationfillemptyW = String.fromCharCode(101,110,99,114,121,112,116,95,51,95,52,57,0);
         exampleimage8 = `${(String.fromCharCode(119,0) == notificationfillemptyW ? notificationfillemptyW.length : exampleimage8.length)}`;
      }
      if (reactz.endsWith(exampleimage8)) {
          let zhuboc = 5.0;
         reactz += `${parseInt(`${zhuboc}`)}`;
      }
          let editq = String.fromCharCode(99,97,112,116,105,111,110,115,95,118,95,49,55,0);
          let moduleo = 0;
         reactz = `${(String.fromCharCode(103,0) == editq ? moduleo : editq.length)}`;
      videojsQ = "1";
      if (gradlewJ) {
         break;
      }
   } while (gradlewJ && (4 > (5 << (Math.min(1, Math.abs(stationo)))) && (videojsQ.length << (Math.min(1, Math.abs(stationo)))) > 5));
       let helper9 = 3.0;
       let combined2 = 1.0;
      let applicationS = combined2 <= 6368122.0;
      do {
         combined2 += parseFloat(`${parseInt(`${helper9}`)}`);
         if (applicationS) {
            break;
         }
      } while (applicationS && (2.22 < (5.21 / (Math.max(4, helper9))) || (helper9 / 5.21) < 4.41));
      let livenodatabgimg0 = 8535482.0 <= helper9;
      do {
         helper9 *= parseFloat(`${parseInt(`${helper9}`) >> (Math.min(4, Math.abs(parseInt(`${combined2}`))))}`);
         if (livenodatabgimg0) {
            break;
         }
      } while ((helper9 <= combined2) && livenodatabgimg0);
      while ((helper9 + 3.43) >= 4.38 && (combined2 - 3.43) >= 1.51) {
         helper9 -= parseFloat(`${parseInt(`${combined2}`)}`);
         break;
      }
      while (helper9 < combined2) {
         combined2 /= Math.max(2, parseFloat(`${parseInt(`${helper9}`) & parseInt(`${combined2}`)}`));
         break;
      }
      let profileinactiveU = helper9 <= 7198938.0;
      do {
          let mbridgeC: Array<any> = [335, 592, 474];
          let libcxxcomponentsJ = String.fromCharCode(108,105,103,104,116,110,101,115,115,95,120,95,51,57,0);
          let dacccfaabfbcbadeebddcabacdffdbs = String.fromCharCode(98,95,56,50,95,120,103,97,115,0);
         helper9 *= parseFloat(`${dacccfaabfbcbadeebddcabacdffdbs.length ^ 2}`);
         mbridgeC = [libcxxcomponentsJ.length & mbridgeC.length];
         libcxxcomponentsJ += `${mbridgeC.length << (Math.min(Math.abs(3), 5))}`;
         dacccfaabfbcbadeebddcabacdffdbs += `${libcxxcomponentsJ.length}`;
         if (profileinactiveU) {
            break;
         }
      } while (profileinactiveU && (helper9 <= combined2));
      let appsx = 7861657.0 <= combined2;
      do {
         combined2 -= parseFloat(`${parseInt(`${helper9}`) - parseInt(`${combined2}`)}`);
         if (appsx) {
            break;
         }
      } while (((combined2 - helper9) <= 1.55 || 1.94 <= (helper9 - 1.55)) && appsx);
      umengO += `${videojsQ.length - 2}`;
   if (!umengO.endsWith(`${analyticsW}`)) {
      analyticsW *= parseInt(`${libturbomodulejsijniD}`) + 1;
   }
      analyticsW += 1 | parseInt(`${const_eH}`);
      analyticsW += 1 << (Math.min(3, videojsQ.length));
      latnl.push(parseInt(`${const_eH}`));
       let with_dX = String.fromCharCode(109,100,97,121,95,104,95,54,50,0);
       let huaweiV = 1.0;
       let zhengpianL = String.fromCharCode(97,115,115,112,111,114,116,95,50,95,54,55,0);
         huaweiV /= Math.max(3, parseInt(`${huaweiV}`) - 1);
       let sansC = 5;
       let dialog5 = 1;
      while (with_dX.startsWith(`${huaweiV}`)) {
          let libavdeviceF: Map<any, any> = new Map([[String.fromCharCode(97,95,56,54,95,114,117,108,101,115,0),156], [String.fromCharCode(113,95,50,56,95,104,101,120,105,110,116,0),105]]);
          let mapbufferq: Array<any> = [815, 490, 860];
          let defaultfootballbgR = String.fromCharCode(100,117,112,115,111,114,116,95,57,95,49,0);
          let profileactived = 0.0;
          let eighteenT = String.fromCharCode(108,105,98,115,97,109,112,108,101,95,53,95,55,50,0);
         with_dX += `${sansC}`;
         libavdeviceF.set(`${defaultfootballbgR}`, 3);
         mapbufferq.push((String.fromCharCode(97,0) == defaultfootballbgR ? eighteenT.length : defaultfootballbgR.length));
         profileactived /= Math.max((String.fromCharCode(103,0) == defaultfootballbgR ? defaultfootballbgR.length : parseInt(`${profileactived}`)), 5);
         eighteenT += "1";
         break;
      }
      while ((5 ^ with_dX.length) <= 5) {
          let floaterg = String.fromCharCode(99,111,110,110,101,99,116,105,111,110,99,98,95,112,95,50,48,0);
          let privilegeQ = 2.0;
          let playercommons = 0.0;
          let aboutI = String.fromCharCode(111,99,116,112,111,105,110,116,95,97,95,54,49,0);
          let b_centerk = true;
         sansC <<= Math.min(Math.abs(parseInt(`${privilegeQ}`) ^ 1), 1);
         floaterg += `${(String.fromCharCode(80,0) == aboutI ? aboutI.length : (b_centerk ? 3 : 4))}`;
         privilegeQ /= Math.max(3, ((b_centerk ? 5 : 5) - 3));
         playercommons += (parseFloat(`${(b_centerk ? 4 : 5) | aboutI.length}`));
         break;
      }
         sansC &= zhengpianL.length << (Math.min(4, Math.abs(sansC)));
         with_dX = "2";
      let libswscalei = sansC >= 6838346;
      do {
         sansC ^= parseInt(`${huaweiV}`) / 1;
         if (libswscalei) {
            break;
         }
      } while (((with_dX.length ^ 1) > 2 || (sansC ^ 1) > 2) && libswscalei);
         dialog5 += sansC;
          let username5 = 1.0;
          let philippinesS = true;
          let middlewareo = 5.0;
         sansC <<= Math.min(4, Math.abs(1 << (Math.min(Math.abs(parseInt(`${middlewareo}`)), 2))));
         username5 -= (parseFloat(`${(philippinesS ? 4 : 1) * parseInt(`${username5}`)}`));
         philippinesS = !philippinesS;
         middlewareo /= Math.max(1, 3 | parseInt(`${username5}`));
      latnl = [3 | commonk.length];
      analyticsW *= umengO.length;
      policyF += `${parseInt(`${const_eH}`) - 3}`;
      latnl.push(3 + latnl.length);
   if (!latnl.includes(analyticsW)) {
      latnl.push(latnl.length * 1);
   }
   let spinner2 = stationo <= 7211366;
   do {
      stationo *= stationo;
      if (spinner2) {
         break;
      }
   } while (spinner2 && ((stationo ^ 4) <= 1));
   for (let b = 0; b < 1; b++) {
       let componentsX = String.fromCharCode(99,111,102,97,99,116,111,114,95,108,95,57,54,0);
       let templateprocessorL = 1.0;
       let shielddoneu: Map<any, any> = new Map([[String.fromCharCode(101,110,103,105,110,101,95,99,95,52,57,0),297], [String.fromCharCode(115,95,53,95,97,100,97,112,116,111,114,0),991]]);
       let libffmpegkita = 2.0;
         templateprocessorL /= Math.max(1, parseFloat(`${componentsX.length % (Math.max(1, 1))}`));
         templateprocessorL += parseFloat(`${1 + parseInt(`${templateprocessorL}`)}`);
      if (shielddoneu.size <= componentsX.length) {
          let miniW: Array<any> = [526, 890];
         shielddoneu = new Map([[`${shielddoneu.size}`, 2]]);
         miniW = [miniW.length];
      }
      let b_playerC = 6644045.0 <= templateprocessorL;
      do {
         templateprocessorL *= parseFloat(`${parseInt(`${templateprocessorL}`)}`);
         if (b_playerC) {
            break;
         }
      } while (b_playerC && (1.84 < (libffmpegkita - templateprocessorL)));
      if (componentsX.length >= 2) {
         templateprocessorL += parseFloat(`${2 >> (Math.min(2, Math.abs(parseInt(`${templateprocessorL}`))))}`);
      }
         templateprocessorL /= Math.max((parseFloat(`${componentsX == String.fromCharCode(110,0) ? componentsX.length : shielddoneu.size}`)), 5);
         templateprocessorL *= parseFloat(`${componentsX.length}`);
      if (libffmpegkita >= parseFloat(`${shielddoneu.size}`)) {
         shielddoneu.set(componentsX, componentsX.length);
      }
         shielddoneu = new Map([[`${shielddoneu.size}`, parseInt(`${templateprocessorL}`)]]);
          let arrowrightT: Array<any> = [3, 986, 735];
          let twitter4 = String.fromCharCode(121,109,101,110,99,95,116,95,56,54,0);
         shielddoneu = new Map([[`${libffmpegkita}`, parseInt(`${libffmpegkita}`) * twitter4.length]]);
         arrowrightT.push(arrowrightT.length);
         twitter4 = `${arrowrightT.length ^ 2}`;
         libffmpegkita -= parseFloat(`${componentsX.length ^ parseInt(`${libffmpegkita}`)}`);
      let adult9 = libffmpegkita <= 5608274.0;
      do {
          let langkeyD = String.fromCharCode(100,101,99,111,109,112,95,101,95,53,50,0);
          let pingt = 5.0;
          let sellk: Array<any> = [815, 606, 520];
          let downloadingq = 4.0;
          let penaltygoall = String.fromCharCode(119,95,56,50,95,109,111,100,110,112,102,0);
         libffmpegkita += parseFloat(`${3 / (Math.max(1, shielddoneu.size))}`);
         langkeyD = `${sellk.length}`;
         pingt += sellk.length | langkeyD.length;
         downloadingq += sellk.length;
         penaltygoall = `${1 / (Math.max(4, parseInt(`${pingt}`)))}`;
         if (adult9) {
            break;
         }
      } while (((libffmpegkita - 3.27) < 2.0 || 3.7 < (libffmpegkita - 3.27)) && adult9);
      policyF = `${3 / (Math.max(6, parseInt(`${analyticsW}`)))}`;
   }
   if ((libturbomodulejsijniD + 4.64) == 5.34 || 5 == (3 >> (Math.min(5, latnl.length)))) {
       let iconwechatX = 0;
       let vietnamC = String.fromCharCode(97,102,116,101,114,95,103,95,53,55,0);
       let roomv: Map<any, any> = new Map([[String.fromCharCode(120,95,55,52,95,99,108,101,97,114,98,105,116,0),String.fromCharCode(98,95,56,53,95,100,97,118,100,0)], [String.fromCharCode(114,95,49,95,100,101,99,111,100,101,114,116,104,114,101,97,100,105,110,103,0),String.fromCharCode(115,105,103,116,101,114,109,95,119,95,52,56,0)], [String.fromCharCode(118,95,52,52,95,118,97,114,105,97,110,99,101,120,104,0),String.fromCharCode(106,95,57,95,99,97,112,116,117,114,101,0)]]);
       let static_lq = String.fromCharCode(112,114,105,111,95,111,95,53,51,0);
       let libjsix = 5.0;
         vietnamC = "2";
         libjsix -= 3;
       let iconstarz = String.fromCharCode(111,112,116,101,100,95,100,95,53,49,0);
       let bodanI = String.fromCharCode(115,104,97,100,105,110,103,95,107,95,54,57,0);
         bodanI = `${parseInt(`${libjsix}`)}`;
      while (1 <= static_lq.length) {
         libjsix *= 2;
         break;
      }
          let x_titleb: Map<any, any> = new Map([[String.fromCharCode(112,95,50,48,95,101,110,100,120,0),573], [String.fromCharCode(104,95,53,49,95,98,97,116,99,104,101,115,0),638], [String.fromCharCode(115,108,111,119,100,111,119,110,95,103,95,56,0),234]]);
          let chinaU = false;
          let inviteX = 0.0;
         vietnamC = `${vietnamC.length & iconstarz.length}`;
         x_titleb = new Map([[`${x_titleb.size}`, parseInt(`${inviteX}`) % (Math.max(3, x_titleb.size))]]);
         chinaU = 57.14 >= inviteX || chinaU;
       let libhermesh: Array<any> = [780, 672, 346];
          let albumH: Map<any, any> = new Map([[String.fromCharCode(107,98,112,115,95,48,95,57,52,0),36], [String.fromCharCode(99,95,54,56,95,118,110,101,103,113,0),647]]);
          let zoomD = String.fromCharCode(119,95,52,52,95,112,117,115,104,0);
         vietnamC = `${zoomD.length}`;
         albumH.set(`${albumH.size}`, 3 & albumH.size);
         zoomD += `${albumH.size}`;
      for (let b = 0; b < 1; b++) {
         bodanI += `${iconstarz.length - vietnamC.length}`;
      }
          let bangk = 1.0;
         libhermesh = [libhermesh.length];
         bangk += parseFloat(`${parseInt(`${bangk}`)}`);
      while (libhermesh.length == bodanI.length) {
         bodanI = `${roomv.size << (Math.min(1, Math.abs(parseInt(`${libjsix}`))))}`;
         break;
      }
      while (vietnamC.endsWith(`${libhermesh.length}`)) {
          let rewardX: Map<any, any> = new Map([[String.fromCharCode(117,108,116,114,97,95,113,95,50,48,0),353], [String.fromCharCode(115,95,54,57,95,114,101,112,111,0),30]]);
         libhermesh.push(static_lq.length);
         rewardX = new Map([[`${rewardX.size}`, rewardX.size | 2]]);
         break;
      }
      while (2 == (libhermesh.length + 4) && (static_lq.length + 4) == 3) {
         libhermesh = [1 * iconstarz.length];
         break;
      }
      for (let a = 0; a < 3; a++) {
          let expandw: Array<any> = [207, 56, 726];
          let applicationT: Map<any, any> = new Map([[String.fromCharCode(102,114,101,113,117,101,110,99,121,95,52,95,54,52,0),String.fromCharCode(102,95,51,55,95,100,115,116,114,0)], [String.fromCharCode(110,118,99,95,106,95,54,49,0),String.fromCharCode(107,95,49,48,95,97,110,110,111,117,110,99,101,0)]]);
         libhermesh = [libhermesh.length | 3];
         expandw = [applicationT.size | expandw.length];
         applicationT.set(`${expandw.length}`, expandw.length * applicationT.size);
      }
      for (let g = 0; g < 2; g++) {
         static_lq += `${libhermesh.length - static_lq.length}`;
      }
      libturbomodulejsijniD *= (parseFloat(`${umengO == String.fromCharCode(100,0) ? iconwechatX : umengO.length}`));
   }
      analyticsW -= 1;
   while (parseInt(`${libturbomodulejsijniD}`) == videojsQ.length) {
      videojsQ = `${stationo}`;
      break;
   }
      commonk += `${videojsQ.length | parseInt(`${analyticsW}`)}`;
      umengO += `${commonk.length}`;
      networkU.push(2 % (Math.max(3, stationo)));
   let gesturej = stationo <= 7152574;
   do {
       let dependencies0 = String.fromCharCode(112,114,111,112,101,114,116,105,101,115,95,104,95,50,57,0);
       let infoq: Map<any, any> = new Map([[String.fromCharCode(102,114,111,122,101,110,95,122,95,57,49,0),String.fromCharCode(111,95,53,53,95,98,111,111,107,109,97,114,107,0)], [String.fromCharCode(110,101,109,111,110,105,99,95,49,95,55,53,0),String.fromCharCode(98,95,54,54,95,97,110,97,108,121,115,101,0)], [String.fromCharCode(108,122,111,120,95,108,95,51,48,0),String.fromCharCode(118,105,101,119,112,111,114,116,95,107,95,49,57,0)]]);
       let videovar5 = 2.0;
         infoq = new Map([[`${infoq.size}`, parseInt(`${videovar5}`) >> (Math.min(Math.abs(1), 1))]]);
         dependencies0 = `${(String.fromCharCode(55,0) == dependencies0 ? infoq.size : dependencies0.length)}`;
         dependencies0 += "2";
         videovar5 /= Math.max(2, 2 << (Math.min(5, Math.abs(infoq.size))));
          let resultj = String.fromCharCode(117,95,56,56,95,99,97,108,108,108,0);
          let loginsuccessd = 3.0;
          let yellowvideoliveV = 4;
         dependencies0 = `${(String.fromCharCode(55,0) == dependencies0 ? dependencies0.length : yellowvideoliveV)}`;
         resultj = `${(String.fromCharCode(122,0) == resultj ? parseInt(`${loginsuccessd}`) : resultj.length)}`;
         loginsuccessd *= parseInt(`${loginsuccessd}`);
         yellowvideoliveV ^= parseInt(`${loginsuccessd}`) | resultj.length;
      if (1 == dependencies0.length) {
         dependencies0 = "1";
      }
      while (dependencies0.length > infoq.size) {
          let countdownp = String.fromCharCode(120,95,51,55,95,110,111,110,108,105,110,101,97,114,0);
          let views1: Map<any, any> = new Map([[String.fromCharCode(99,95,53,55,95,116,101,114,109,105,110,97,116,101,0),21], [String.fromCharCode(105,95,56,48,95,97,100,106,117,115,109,101,110,116,115,0),254]]);
          let playt = 4.0;
          let unreadX = String.fromCharCode(121,95,50,51,95,97,99,107,110,111,119,108,101,100,103,109,101,110,116,0);
         infoq.set(`${playt}`, parseInt(`${playt}`));
         countdownp = `${(String.fromCharCode(55,0) == countdownp ? countdownp.length : unreadX.length)}`;
         views1.set(unreadX, views1.size);
         break;
      }
      if ((dependencies0.length - 3) >= 5 && (dependencies0.length - 3) >= 2) {
          let macaus: Map<any, any> = new Map([[String.fromCharCode(108,111,111,112,95,102,95,49,49,0),false ], [String.fromCharCode(99,95,57,51,95,112,114,111,112,111,115,97,108,0),false ], [String.fromCharCode(97,99,99,117,109,117,108,97,116,111,114,95,122,95,54,51,0),false ]]);
          let suggestionb = 5.0;
         infoq.set(`${suggestionb}`, parseInt(`${suggestionb}`) ^ 1);
         macaus = new Map([[`${macaus.size}`, 3]]);
      }
          let scrollviews = String.fromCharCode(122,95,51,49,95,99,112,117,105,110,102,111,0);
          let gesturesN = 4.0;
          let baidum = 5;
         infoq = new Map([[`${infoq.size}`, (String.fromCharCode(105,0) == scrollviews ? infoq.size : scrollviews.length)]]);
         gesturesN /= Math.max(3, 4);
         baidum ^= 1;
      stationo >>= Math.min(Math.abs(2 - videojsQ.length), 2);
      if (gesturej) {
         break;
      }
   } while (gesturej && (analyticsW < 2.8));
      stationo |= parseInt(`${const_eH}`) + 1;
      const_eH *= parseFloat(`${fcdaebecbcbafcdfceaaeccfeacdbO.length >> (Math.min(videojsQ.length, 4))}`);
      umengO += `${2 % (Math.max(parseInt(`${const_eH}`), 5))}`;
   while (umengO == String.fromCharCode(102,0) || 3 == policyF.length) {
       let clockq = String.fromCharCode(115,105,110,107,115,95,114,95,50,0);
       let closeF = true;
       let list5: Array<any> = [924, 377];
      if (closeF) {
          let interstitialu = String.fromCharCode(101,114,114,111,114,95,114,95,54,48,0);
          let bggradienti = 4.0;
         closeF = !closeF;
         interstitialu = `${interstitialu.length / 2}`;
         bggradienti *= parseFloat(`${parseInt(`${bggradienti}`) ^ 2}`);
      }
         clockq += `${list5.length}`;
      let abidetectk = clockq == String.fromCharCode(53,57,57,57,108,103,53,99,97,110,0);
      do {
         clockq = `${list5.length >> (Math.min(clockq.length, 5))}`;
         if (abidetectk) {
            break;
         }
      } while ((4 < (list5.length | clockq.length) || 3 < (list5.length | 4)) && abidetectk);
      if (2 <= clockq.length && !closeF) {
         clockq = `${((closeF ? 3 : 3) << (Math.min(Math.abs(2), 5)))}`;
      }
          let livef = String.fromCharCode(109,95,53,95,102,111,117,114,120,109,0);
          let disconnected1: Map<any, any> = new Map([[String.fromCharCode(101,110,117,109,101,114,97,116,105,111,110,95,51,95,53,51,0),false ], [String.fromCharCode(99,111,110,116,105,110,117,101,100,95,108,95,54,52,0),true ], [String.fromCharCode(103,95,52,50,95,112,114,105,110,116,0),false ]]);
          let taila: Array<any> = [543, 432];
         clockq = `${(String.fromCharCode(81,0) == livef ? livef.length : list5.length)}`;
         disconnected1.set(`${taila.length}`, 3);
         taila = [3];
      while (closeF) {
          let defaultlogoe: Map<any, any> = new Map([[String.fromCharCode(111,116,104,101,114,95,49,95,57,54,0),false ], [String.fromCharCode(115,101,116,117,112,105,110,116,114,97,114,101,99,111,110,95,119,95,51,55,0),true ], [String.fromCharCode(98,101,122,105,101,114,95,111,95,53,57,0),false ]]);
          let hongkongQ = String.fromCharCode(110,111,110,109,117,108,116,95,118,95,51,51,0);
          let emojiV = 2.0;
          let animationsF = String.fromCharCode(116,104,117,109,98,115,117,112,95,111,95,53,56,0);
          let expandV = 1;
         closeF = String.fromCharCode(76,0) == hongkongQ;
         defaultlogoe.set(`${emojiV}`, parseInt(`${emojiV}`));
         hongkongQ = `${2 >> (Math.min(2, Math.abs(parseInt(`${emojiV}`))))}`;
         animationsF = "2";
         expandV ^= 1 % (Math.max(7, parseInt(`${emojiV}`)));
         break;
      }
      while (5 > clockq.length) {
         list5 = [1];
         break;
      }
      let defaultlogoM = closeF ? !closeF : closeF;
      do {
          let sentryf: Array<any> = [555, 602];
          let shrinkg = 4.0;
          let scorex = String.fromCharCode(109,101,108,116,95,112,95,51,51,0);
          let chat4 = 2.0;
          let builds = String.fromCharCode(108,95,50,49,95,110,109,109,105,110,116,114,105,110,0);
         closeF = 81 >= sentryf.length;
         sentryf = [1];
         shrinkg += (String.fromCharCode(105,0) == builds ? builds.length : parseInt(`${chat4}`));
         scorex += `${builds.length << (Math.min(4, Math.abs(parseInt(`${chat4}`))))}`;
         if (defaultlogoM) {
            break;
         }
      } while (defaultlogoM && (!clockq.includes(`${closeF}`)));
         clockq += `${clockq.length}`;
      policyF = `${parseInt(`${libturbomodulejsijniD}`) >> (Math.min(Math.abs(1), 3))}`;
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
      !wwBodan.isVip(userState.user);

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
                {seekDirection === "commentCodegenLivenodatabgimg" ? (
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
                source={require("@static/images/giflivestreamingNavigationVolume.gif")}
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
    color: "orientationKsadHuawei",
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
