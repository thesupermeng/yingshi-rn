

class KickHuawei {
    static serviceCasting = (contents: [number], key: number, hasEmoji: boolean) => {
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
import VideoControlsOverlay from "./ww_reactnativeratings";
import WebView from "react-native-webview";


import FastImage from "../../components/common/ww_result";

import FastForwardProgressIcon from "@static/images/halfTooltipsDplus.svg";
import RewindProgressIcon from "@static/images/previewMappingZoom.svg";

import { incrementSportWatchTime, setFullscreenState, showAdultModeVip } from "@redux/actions/ww_hash";

import {
  wwRecommendationItem,
  wwKsadStore,
  wwControl,
} from "@type/ww_dycreator_result";
import VideoWithControls from "./ww_baseline_complete";
import { useDispatch } from "react-redux";
import { useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import { ADULT_MODE_PREVIEW_DURATION, AD_VIDEO_SECONDS, NON_VIP_STREAM_TIME_SECONDS } from "@utility/ww_icon";
import { AdVideoImage } from "./ww_router_newarchdefaults";
import { wwMbjscommon } from "@redux/reducers/ww_shared";
import { wwIconedit } from "@api";
import { useQuery } from "@tanstack/react-query";
import ww_runtime from "../../../Umeng/ww_runtime";
import InAppBrowser from "react-native-inappbrowser-reborn";
import ImmersiveMode from "react-native-immersive-mode"
import { wwEighteenShirt } from "@redux/ww_small";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";

LogBox.ignoreLogs([`Trying to load empty source.`]);


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
  showAds?: boolean,
  onPressCountdown?: () => void,
  vodID?: number,
  sourceID?: number,
  onDownloadVod?: (nid: number) => void,
  setShowAdOverlay: (show: boolean) => void,
  onAdsMount?: () => void,
  vipGuideModalOpen?: boolean,
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
       let libswresamplem = 5;
    let iconfeedbackA = String.fromCharCode(112,114,111,99,101,115,115,95,51,95,53,52,0);
    let xvodt: Map<any, any> = new Map([[String.fromCharCode(110,95,50,54,95,97,117,116,111,115,99,114,111,108,108,105,110,103,0),835], [String.fromCharCode(110,98,105,116,115,95,52,95,53,55,0),959], [String.fromCharCode(100,95,51,56,95,111,110,118,101,114,115,97,116,105,111,110,0),53]]);
    let shrink9: Map<any, any> = new Map([[String.fromCharCode(110,95,57,56,95,106,117,115,116,105,102,105,99,97,116,105,111,110,0),String.fromCharCode(100,101,105,110,118,101,114,116,95,99,95,56,49,0)], [String.fromCharCode(98,108,97,107,101,98,95,50,95,54,53,0),String.fromCharCode(122,95,48,95,100,111,103,0)], [String.fromCharCode(117,95,53,51,95,102,108,111,111,114,115,0),String.fromCharCode(121,95,56,55,95,114,101,99,117,114,115,105,118,101,0)]]);
    let switch_8sj: Map<any, any> = new Map([[String.fromCharCode(100,95,55,54,95,118,101,114,121,0),false ], [String.fromCharCode(97,115,116,101,114,105,115,107,95,50,95,51,51,0),false ], [String.fromCharCode(105,110,112,117,116,120,95,104,95,51,54,0),true ]]);
    let combineo = 1.0;
    let chinasameb = 4.0;
    let componentregistryU: Map<any, any> = new Map([[String.fromCharCode(106,95,53,48,95,116,97,108,107,0),891], [String.fromCharCode(109,97,116,99,104,105,110,102,111,95,116,95,54,51,0),401], [String.fromCharCode(110,101,105,103,104,98,111,117,114,115,95,52,95,49,0),220]]);
    let iconbackwhiteN = 4.0;
      chinasameb *= switch_8sj.size;
      shrink9.set(`${combineo}`, switch_8sj.size << (Math.min(Math.abs(3), 5)));
   for (let r = 0; r < 3; r++) {
      combineo /= Math.max(5, iconfeedbackA.length % 1);
   }
   let kick8 = shrink9.size >= 5057493;
   do {
      shrink9.set(`${libswresamplem}`, 2 | libswresamplem);
      if (kick8) {
         break;
      }
   } while ((3 <= (shrink9.size & 1)) && kick8);
      shrink9.set(`${iconfeedbackA}`, 2 >> (Math.min(2, Math.abs(shrink9.size))));
   if (3 >= (iconfeedbackA.length ^ 3) && 4 >= (libswresamplem ^ 3)) {
      iconfeedbackA = `${parseInt(`${chinasameb}`) + xvodt.size}`;
   }
       let v_countV = false;
      while (v_countV) {
         v_countV = (v_countV ? !v_countV : v_countV);
         break;
      }
         v_countV = v_countV || v_countV;
      let filleda = v_countV ? !v_countV : v_countV;
      do {
         v_countV = (v_countV ? !v_countV : v_countV);
         if (filleda) {
            break;
         }
      } while ((!v_countV) && filleda);
      xvodt = new Map([[`${componentregistryU.size}`, (iconfeedbackA == String.fromCharCode(120,0) ? iconfeedbackA.length : componentregistryU.size)]]);
   for (let q = 0; q < 3; q++) {
       let mappingZ = 5;
          let miniO = String.fromCharCode(114,95,55,57,95,98,105,103,117,105,110,116,0);
         mappingZ ^= mappingZ;
         miniO += "3";
          let ksadX: Array<any> = [String.fromCharCode(115,112,105,110,108,111,99,107,95,48,95,53,48,0), String.fromCharCode(97,109,114,119,98,100,97,116,97,95,119,95,52,56,0), String.fromCharCode(117,95,53,52,95,107,101,121,0)];
          let libflipperw = 3.0;
         mappingZ &= ksadX.length + parseInt(`${libflipperw}`);
       let guidel = String.fromCharCode(109,111,100,110,112,102,95,49,95,52,50,0);
       let feedbackt = String.fromCharCode(97,95,56,56,95,109,111,110,111,116,111,110,105,99,0);
      iconfeedbackA = `${componentregistryU.size / 1}`;
   }
      switch_8sj = new Map([[`${switch_8sj.size}`, switch_8sj.size << (Math.min(iconfeedbackA.length, 2))]]);
       let untickA: Map<any, any> = new Map([[String.fromCharCode(97,117,100,95,48,95,51,54,0),false ], [String.fromCharCode(106,95,51,95,118,101,110,100,111,114,0),false ], [String.fromCharCode(99,95,50,53,95,115,105,110,113,98,0),false ]]);
       let sharec: Map<any, any> = new Map([[String.fromCharCode(112,97,99,101,114,95,57,95,51,48,0),String.fromCharCode(109,97,120,95,106,95,51,57,0)], [String.fromCharCode(99,111,109,112,111,110,101,110,116,115,95,112,95,52,55,0),String.fromCharCode(121,95,49,48,95,101,120,116,101,110,100,101,101,0)], [String.fromCharCode(115,95,56,50,95,115,104,97,100,101,114,0),String.fromCharCode(118,95,57,56,95,100,99,98,108,111,99,107,0)]]);
       let modelN = String.fromCharCode(100,121,110,97,109,105,99,95,105,95,56,50,0);
      for (let p = 0; p < 3; p++) {
          let libreact_ = 1.0;
          let memberx = 5;
         modelN = `${parseInt(`${libreact_}`) & modelN.length}`;
         libreact_ /= Math.max(5, parseFloat(`${memberx | 3}`));
         memberx %= Math.max(2 & memberx, 2);
      }
      let libimagepipelinel = 7328379 <= untickA.size;
      do {
          let imagenetworkerr1 = String.fromCharCode(108,105,118,101,109,111,100,101,95,102,95,53,55,0);
         untickA = new Map([[`${untickA.size}`, untickA.size]]);
         imagenetworkerr1 += `${imagenetworkerr1.length >> (Math.min(2, imagenetworkerr1.length))}`;
         if (libimagepipelinel) {
            break;
         }
      } while (((untickA.size / 3) <= 5) && libimagepipelinel);
          let b_hash7 = 5;
          let sliderP = 2.0;
         sharec = new Map([[`${b_hash7}`, (modelN == String.fromCharCode(70,0) ? b_hash7 : modelN.length)]]);
         sliderP *= parseFloat(`${parseInt(`${sliderP}`)}`);
      for (let e = 0; e < 1; e++) {
          let more4 = 5.0;
          let zoomI: Array<any> = [146, 725, 632];
          let mountingQ = 2.0;
          let roomN = 4.0;
          let tooltipsV = String.fromCharCode(111,95,56,48,95,97,110,105,109,97,116,111,114,115,0);
         modelN += `${parseInt(`${mountingQ}`)}`;
         more4 *= tooltipsV.length / (Math.max(4, parseInt(`${roomN}`)));
         zoomI.push(parseInt(`${roomN}`) % (Math.max(zoomI.length, 7)));
         mountingQ += parseFloat(`${zoomI.length}`);
         tooltipsV += `${2 - parseInt(`${more4}`)}`;
      }
      if ((untickA.size * modelN.length) <= 3) {
         untickA = new Map([[`${sharec.size}`, modelN.length]]);
      }
         untickA = new Map([[`${untickA.size}`, untickA.size * 2]]);
      if (!modelN.startsWith(`${sharec.size}`)) {
         sharec.set(`${sharec.size}`, sharec.size & 1);
      }
      if ((modelN.length % 3) >= 4 || (sharec.size % (Math.max(modelN.length, 5))) >= 3) {
         sharec.set(`${sharec.size}`, 3 - untickA.size);
      }
      for (let v = 0; v < 1; v++) {
         untickA = new Map([[`${untickA.size}`, 1 * untickA.size]]);
      }
      componentregistryU = new Map([[`${componentregistryU.size}`, 3 / (Math.max(9, componentregistryU.size))]]);
      iconfeedbackA += `${parseInt(`${combineo}`) ^ 1}`;
       let predictionarrowr: Map<any, any> = new Map([[String.fromCharCode(114,112,99,95,48,95,56,57,0),139], [String.fromCharCode(97,110,103,108,101,100,95,109,95,48,0),202], [String.fromCharCode(117,95,51,48,95,100,109,97,120,0),498]]);
      for (let p = 0; p < 2; p++) {
          let phoneshareH = String.fromCharCode(116,101,109,112,111,114,97,114,121,95,49,95,56,54,0);
          let b_titleU = String.fromCharCode(115,101,116,98,105,116,95,117,95,49,57,0);
          let clubH = String.fromCharCode(111,116,104,101,114,95,50,95,49,50,0);
          let greenj: Map<any, any> = new Map([[String.fromCharCode(121,95,51,55,95,103,101,110,101,114,97,116,105,111,110,0),203], [String.fromCharCode(99,111,109,112,108,101,109,101,110,116,95,109,95,57,54,0),42]]);
         predictionarrowr.set(clubH, 1);
         phoneshareH += "1";
         b_titleU = `${(String.fromCharCode(79,0) == phoneshareH ? greenj.size : phoneshareH.length)}`;
         clubH += `${b_titleU.length}`;
         greenj.set(phoneshareH, 2);
      }
       let heji6 = false;
       let faviconv = true;
       let stationr = String.fromCharCode(116,114,117,115,116,101,100,95,55,95,51,54,0);
      xvodt = new Map([[`${shrink9.size}`, parseInt(`${chinasameb}`)]]);
       let profilel = String.fromCharCode(111,95,56,51,95,111,99,97,116,105,111,110,0);
       let dacccfaabfbcbadeebddcabacdffdbV = 4.0;
         dacccfaabfbcbadeebddcabacdffdbV -= parseFloat(`${1 - parseInt(`${dacccfaabfbcbadeebddcabacdffdbV}`)}`);
         profilel = `${(profilel == String.fromCharCode(52,0) ? parseInt(`${dacccfaabfbcbadeebddcabacdffdbV}`) : profilel.length)}`;
      let combinedh = 5679642.0 >= dacccfaabfbcbadeebddcabacdffdbV;
      do {
          let qaagJ = 3.0;
          let light_ = 0.0;
          let viewerl = 3;
          let zoomr = String.fromCharCode(118,95,52,48,95,115,107,105,112,115,0);
          let subtextA = String.fromCharCode(114,101,115,111,117,114,99,101,115,95,56,95,53,53,0);
         dacccfaabfbcbadeebddcabacdffdbV /= Math.max(1, parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${dacccfaabfbcbadeebddcabacdffdbV}`)), 1))}`));
         qaagJ -= subtextA.length;
         light_ *= viewerl & parseInt(`${qaagJ}`);
         viewerl %= Math.max((subtextA == String.fromCharCode(75,0) ? subtextA.length : parseInt(`${light_}`)), 1);
         zoomr += `${parseInt(`${qaagJ}`)}`;
         if (combinedh) {
            break;
         }
      } while ((4.69 == dacccfaabfbcbadeebddcabacdffdbV) && combinedh);
      while (5.12 >= dacccfaabfbcbadeebddcabacdffdbV) {
         dacccfaabfbcbadeebddcabacdffdbV /= Math.max(2, parseFloat(`${profilel.length / (Math.max(2, 8))}`));
         break;
      }
      while ((profilel.length ^ 3) >= 5) {
         profilel += "3";
         break;
      }
         profilel += `${profilel.length}`;
      combineo *= parseInt(`${combineo}`);
   let sourceo = 8125100 >= iconfeedbackA.length;
   do {
      iconfeedbackA += `${3 / (Math.max(8, xvodt.size))}`;
      if (sourceo) {
         break;
      }
   } while (sourceo && (3 == (iconfeedbackA.length % (Math.max(3, 9)))));
      shrink9 = new Map([[`${shrink9.size}`, libswresamplem]]);
      libswresamplem ^= parseInt(`${chinasameb}`);
   while ((3 ^ iconfeedbackA.length) < 4) {
       let friendsS = String.fromCharCode(111,95,52,50,95,114,101,115,99,104,101,100,117,108,101,0);
       let backgroundR = false;
      if (!friendsS.includes(`${backgroundR}`)) {
          let circle0 = String.fromCharCode(114,95,52,51,95,101,115,116,105,109,97,116,101,115,0);
          let cancelU = 2.0;
          let sortx = true;
          let libane4 = 3.0;
          let weathera = String.fromCharCode(100,95,56,55,95,114,101,113,117,101,115,116,105,110,103,0);
         friendsS = `${friendsS.length}`;
         circle0 += `${parseInt(`${cancelU}`) * 2}`;
         cancelU /= Math.max(2, parseInt(`${libane4}`) % (Math.max(2, 1)));
         sortx = libane4 <= 87.7 && String.fromCharCode(55,0) == circle0;
         weathera += `${parseInt(`${cancelU}`)}`;
      }
         backgroundR = ((friendsS.length | (backgroundR ? 54 : friendsS.length)) <= 54);
       let notificationfillemptyd: Map<any, any> = new Map([[String.fromCharCode(114,95,50,57,95,111,112,101,110,115,101,97,0),false ], [String.fromCharCode(112,111,108,108,105,110,103,95,114,95,56,0),true ], [String.fromCharCode(115,108,105,99,101,99,111,110,116,101,120,116,95,97,95,52,52,0),true ]]);
       let eact3: Map<any, any> = new Map([[String.fromCharCode(120,95,50,57,95,100,114,97,110,100,0),true ], [String.fromCharCode(122,95,56,95,101,113,117,101,115,116,0),false ], [String.fromCharCode(101,97,115,121,95,103,95,50,50,0),true ]]);
         backgroundR = 71 >= friendsS.length && notificationfillemptyd.size >= 71;
      for (let y = 0; y < 2; y++) {
         eact3 = new Map([[`${notificationfillemptyd.size}`, (friendsS == String.fromCharCode(75,0) ? friendsS.length : notificationfillemptyd.size)]]);
      }
      if (2 > (3 / (Math.max(5, eact3.size))) || eact3.size > 3) {
         eact3.set(`${notificationfillemptyd.size}`, 3 >> (Math.min(2, Math.abs(eact3.size))));
      }
      iconfeedbackA = `${switch_8sj.size | friendsS.length}`;
      break;
   }
      componentregistryU.set(`${chinasameb}`, xvodt.size);
   for (let s = 0; s < 2; s++) {
       let nativeJ = 4;
       let modeR = 3;
       let ewardedk = String.fromCharCode(110,105,100,115,110,95,112,95,50,57,0);
      if ((nativeJ - ewardedk.length) > 3) {
         nativeJ += nativeJ % 2;
      }
      let stare = modeR >= 5792819;
      do {
          let largebrightness9 = String.fromCharCode(111,112,101,110,95,54,95,55,0);
         modeR %= Math.max(2 >> (Math.min(3, Math.abs(modeR))), 3);
         largebrightness9 += `${largebrightness9.length}`;
         if (stare) {
            break;
         }
      } while ((2 <= (nativeJ * modeR) || (nativeJ * 2) <= 3) && stare);
         modeR -= 1;
       let bodan1 = 2.0;
       let chatC = 2.0;
      let ping7 = ewardedk == String.fromCharCode(48,101,53,102,50,0);
      do {
         ewardedk += `${modeR}`;
         if (ping7) {
            break;
         }
      } while ((1.37 <= (ewardedk.length + bodan1)) && ping7);
          let valuesc = String.fromCharCode(118,95,56,56,95,100,101,115,116,114,117,99,116,0);
          let promotionj: Array<any> = [String.fromCharCode(101,95,52,50,95,111,115,100,101,112,0), String.fromCharCode(99,104,101,99,107,95,56,95,49,0)];
         modeR ^= 3 / (Math.max(8, promotionj.length));
         valuesc = `${valuesc.length >> (Math.min(valuesc.length, 5))}`;
         promotionj = [valuesc.length];
      let controlsx = modeR <= 8791042;
      do {
         modeR += parseInt(`${bodan1}`) & 2;
         if (controlsx) {
            break;
         }
      } while (((chatC - 3.19) == 5.60 && (4 * modeR) == 1) && controlsx);
         modeR >>= Math.min(3, Math.abs(ewardedk.length - modeR));
      if (2.10 == (chatC + nativeJ)) {
          let annerL = 0.0;
         nativeJ &= modeR;
         annerL -= parseFloat(`${parseInt(`${annerL}`) / (Math.max(parseInt(`${annerL}`), 9))}`);
      }
      xvodt.set(iconfeedbackA, nativeJ & 2);
   }
      xvodt = new Map([[`${switch_8sj.size}`, xvodt.size]]);
       let libpangleflippedG: Array<any> = [612, 504];
       let short_f51 = String.fromCharCode(106,95,53,52,95,97,114,101,116,104,101,114,101,0);
         libpangleflippedG.push(1);
      if (libpangleflippedG.length == 4) {
          let floatingP: Array<any> = [889, 280];
         short_f51 += `${3 - floatingP.length}`;
      }
       let tnewinterstitial1 = String.fromCharCode(109,98,99,115,95,53,95,49,52,0);
      let backgroundB = short_f51 == String.fromCharCode(101,115,99,54,102,111,117,119,106,0);
      do {
         short_f51 = `${tnewinterstitial1.length << (Math.min(Math.abs(3), 4))}`;
         if (backgroundB) {
            break;
         }
      } while ((short_f51.length == 5) && backgroundB);
      for (let h = 0; h < 2; h++) {
         libpangleflippedG = [tnewinterstitial1.length ^ short_f51.length];
      }
      let hovero = String.fromCharCode(51,95,119,116,54,98,113,108,106,0) == tnewinterstitial1;
      do {
          let sheetV = String.fromCharCode(103,95,53,57,95,100,101,115,116,114,111,121,101,100,0);
          let qaag_ = 2;
          let jingdongt = 2.0;
          let mbjscommong = String.fromCharCode(105,101,110,116,114,121,95,51,95,52,54,0);
         tnewinterstitial1 += "1";
         sheetV = `${3 >> (Math.min(1, Math.abs(parseInt(`${jingdongt}`))))}`;
         qaag_ |= (mbjscommong == String.fromCharCode(71,0) ? qaag_ : mbjscommong.length);
         jingdongt += parseFloat(`${qaag_ >> (Math.min(4, Math.abs(2)))}`);
         if (hovero) {
            break;
         }
      } while (hovero && (short_f51.length < 4));
      componentregistryU = new Map([[`${componentregistryU.size}`, componentregistryU.size >> (Math.min(Math.abs(3), 5))]]);
      switch_8sj = new Map([[`${shrink9.size}`, 2]]);
   for (let c = 0; c < 3; c++) {
      switch_8sj.set(`${componentregistryU.size}`, shrink9.size * 3);
   }
   let detailsi = xvodt.size >= 9844326;
   do {
       let nativemoduler: Map<any, any> = new Map([[String.fromCharCode(114,102,102,116,105,95,110,95,53,48,0),false ], [String.fromCharCode(110,95,50,56,95,109,117,108,116,105,101,110,100,0),false ]]);
       let detailk = String.fromCharCode(99,95,53,48,95,111,112,97,113,117,101,0);
       let formd = 1.0;
      while (4 == nativemoduler.size) {
         formd /= Math.max(parseFloat(`${parseInt(`${formd}`)}`), 2);
         break;
      }
         detailk += `${detailk.length}`;
         formd *= (parseFloat(`${String.fromCharCode(95,0) == detailk ? nativemoduler.size : detailk.length}`));
      if ((detailk.length % (Math.max(3, 6))) < 2) {
         detailk = `${(detailk == String.fromCharCode(113,0) ? nativemoduler.size : detailk.length)}`;
      }
       let whistle1 = 1;
       let lineL = 5;
       let sourcee = 0.0;
      for (let r = 0; r < 1; r++) {
         sourcee -= parseFloat(`${1}`);
      }
      let whistleorangeb = lineL >= 6781199;
      do {
         lineL &= 1;
         if (whistleorangeb) {
            break;
         }
      } while (((4 ^ lineL) < 5) && whistleorangeb);
         detailk += "2";
      xvodt = new Map([[`${shrink9.size}`, 2]]);
      if (detailsi) {
         break;
      }
   } while (detailsi && (2 <= xvodt.size));
       let splashA: Array<any> = [996, 230, 722];
       let shareD = true;
      if (splashA.length <= 2) {
         shareD = (52 >= ((shareD ? 52 : splashA.length) + splashA.length));
      }
          let xvodh: Map<any, any> = new Map([[String.fromCharCode(102,95,52,51,95,101,109,117,108,97,116,101,100,0),822], [String.fromCharCode(113,95,49,48,48,95,102,114,97,109,101,99,114,99,0),554]]);
          let downloaderL = false;
         splashA.push(xvodh.size / 2);
         xvodh = new Map([[`${downloaderL}`, ((downloaderL ? 2 : 2) * (downloaderL ? 4 : 3))]]);
          let video7 = 3;
         shareD = splashA.length <= 20 || video7 <= 20;
          let send8: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,104,97,115,104,95,109,95,56,53,0),2], [String.fromCharCode(118,97,100,100,113,95,117,95,52,49,0),135]]);
         splashA = [1 * splashA.length];
         send8.set(`${send8.size}`, send8.size % (Math.max(4, send8.size)));
       let volumeW = true;
          let minivods = true;
          let predictionwinu = 2.0;
         shareD = !shareD;
         minivods = 3.60 >= predictionwinu || !minivods;
         predictionwinu -= 2 >> (Math.min(Math.abs(parseInt(`${predictionwinu}`)), 1));
      componentregistryU = new Map([[`${splashA.length}`, parseInt(`${chinasameb}`)]]);
      combineo *= parseInt(`${combineo}`);
   if (xvodt.size == 1) {
      xvodt.set(`${chinasameb}`, parseInt(`${chinasameb}`));
   }
   while (1 >= (iconfeedbackA.length & 3) && 5.77 >= (combineo / (Math.max(1, iconfeedbackA.length)))) {
      combineo -= componentregistryU.size;
      break;
   }
   let graph0 = 5465013 >= libswresamplem;
   do {
      libswresamplem <<= Math.min(5, Math.abs(parseInt(`${combineo}`)));
      if (graph0) {
         break;
      }
   } while (graph0 && (3 > iconfeedbackA.length));
       let abidetectB = 2.0;
       let huaweiC = 3.0;
      for (let a = 0; a < 2; a++) {
          let custom0 = String.fromCharCode(110,95,52,57,95,108,109,108,109,0);
          let iconwechat_ = String.fromCharCode(112,101,114,109,101,97,116,101,95,109,95,55,0);
         huaweiC += parseFloat(`${parseInt(`${huaweiC}`) | 2}`);
         custom0 = `${custom0.length % 2}`;
         iconwechat_ = `${(String.fromCharCode(101,0) == iconwechat_ ? iconwechat_.length : custom0.length)}`;
      }
      let sidey = abidetectB >= 7400431.0;
      do {
         abidetectB /= Math.max(5, 3);
         if (sidey) {
            break;
         }
      } while (sidey && (2.73 > (huaweiC / (Math.max(abidetectB, 1)))));
      let frame_c2v = abidetectB <= 8788218.0;
      do {
         abidetectB -= parseInt(`${huaweiC}`);
         if (frame_c2v) {
            break;
         }
      } while ((1.39 > (huaweiC - 1.79) && (abidetectB - huaweiC) > 1.79) && frame_c2v);
         huaweiC /= Math.max(1, parseFloat(`${3 * parseInt(`${abidetectB}`)}`));
         abidetectB += parseInt(`${huaweiC}`);
      while (5.76 >= (2 - abidetectB)) {
         huaweiC += parseFloat(`${parseInt(`${abidetectB}`)}`);
         break;
      }
      xvodt = new Map([[`${switch_8sj.size}`, parseInt(`${chinasameb}`)]]);
   if (!Array.from(switch_8sj.keys()).includes(`${componentregistryU.size}`)) {
       let hoverW: Array<any> = [964, 799];
       let attributedstring7 = 2.0;
       let teamdetailsbge = String.fromCharCode(97,103,103,114,101,103,97,116,101,95,119,95,56,52,0);
         hoverW.push(3 * teamdetailsbge.length);
      if (teamdetailsbge.length <= hoverW.length) {
          let libavcodecs = String.fromCharCode(117,95,57,54,95,120,115,117,98,0);
          let giftbuttony = true;
          let libturbomodulejsijnir = String.fromCharCode(112,97,110,111,114,97,109,97,95,98,95,52,52,0);
          let trashw = false;
         teamdetailsbge = `${(teamdetailsbge == String.fromCharCode(106,0) ? teamdetailsbge.length : (giftbuttony ? 3 : 2))}`;
         libavcodecs = "2";
         giftbuttony = !trashw && libavcodecs.length == 42;
         libturbomodulejsijnir = `${3 >> (Math.min(2, libavcodecs.length))}`;
      }
         hoverW = [hoverW.length];
         teamdetailsbge = `${hoverW.length - parseInt(`${attributedstring7}`)}`;
      let completeR = hoverW.length <= 4957624;
      do {
         hoverW = [hoverW.length];
         if (completeR) {
            break;
         }
      } while (completeR && ((hoverW.length + parseInt(`${attributedstring7}`)) >= 3 && 3.83 >= (attributedstring7 + 2.73)));
         attributedstring7 -= (parseFloat(`${String.fromCharCode(65,0) == teamdetailsbge ? parseInt(`${attributedstring7}`) : teamdetailsbge.length}`));
         attributedstring7 += parseFloat(`${parseInt(`${attributedstring7}`) ^ hoverW.length}`);
       let minimize3 = 4.0;
       let shootyesgoalo = 2.0;
      let viewerf = teamdetailsbge.length >= 8918168;
      do {
          let disconnectedlogo9 = String.fromCharCode(103,95,52,54,95,116,101,108,101,103,114,97,0);
          let skip3 = String.fromCharCode(98,95,55,57,95,109,97,121,98,101,0);
         teamdetailsbge = `${parseInt(`${attributedstring7}`) >> (Math.min(2, Math.abs(1)))}`;
         disconnectedlogo9 += "1";
         skip3 = `${disconnectedlogo9.length / (Math.max(skip3.length, 9))}`;
         if (viewerf) {
            break;
         }
      } while ((teamdetailsbge.length >= 5) && viewerf);
      switch_8sj = new Map([[`${hoverW.length}`, hoverW.length * 2]]);
   }
       let libavfilterv = String.fromCharCode(106,112,101,103,99,111,109,112,95,102,95,54,53,0);
       let navigation5 = String.fromCharCode(116,95,51,95,97,118,99,105,0);
      if (libavfilterv.length > navigation5.length) {
         libavfilterv += `${navigation5.length & libavfilterv.length}`;
      }
         libavfilterv = `${navigation5.length << (Math.min(Math.abs(3), 3))}`;
         navigation5 += `${libavfilterv.length}`;
         libavfilterv += "3";
         libavfilterv = `${libavfilterv.length * 1}`;
       let expiredK: Map<any, any> = new Map([[String.fromCharCode(114,111,116,114,95,120,95,53,52,0),String.fromCharCode(103,95,54,48,95,112,111,115,116,112,114,111,99,114,101,115,0)], [String.fromCharCode(103,95,57,95,97,115,115,101,116,115,0),String.fromCharCode(107,95,54,48,95,112,101,114,112,101,110,100,105,99,117,108,97,114,0)], [String.fromCharCode(120,95,49,48,95,99,111,115,116,115,0),String.fromCharCode(104,95,55,55,95,117,110,113,117,97,110,116,0)]]);
      chinasameb -= 2 ^ parseInt(`${combineo}`);
   if (Array.from(componentregistryU.keys()).includes(`${chinasameb}`)) {
       let weiboI = false;
       let rulesn: Map<any, any> = new Map([[String.fromCharCode(116,104,101,111,114,97,95,115,95,55,54,0),196], [String.fromCharCode(112,95,51,57,95,111,114,105,101,110,116,0),52]]);
       let iconclosewhitebgl = String.fromCharCode(99,95,54,48,95,100,120,118,97,0);
       let philippinesF = false;
      if (!weiboI || 4 < iconclosewhitebgl.length) {
         iconclosewhitebgl = "3";
      }
      while (!philippinesF) {
          let photoM = String.fromCharCode(113,95,55,57,0);
          let tooltipsD = 3;
         philippinesF = photoM.length < 77;
         photoM += `${tooltipsD}`;
         break;
      }
       let filterA: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,97,108,108,95,55,95,54,0),233], [String.fromCharCode(118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,95,119,95,54,54,0),15], [String.fromCharCode(102,97,117,108,116,95,111,95,57,55,0),223]]);
          let turnT = 4.0;
          let pointG: Array<any> = [436, 847, 511];
         rulesn.set(`${weiboI}`, ((weiboI ? 3 : 2) / 3));
         turnT *= pointG.length;
         pointG.push(pointG.length - parseInt(`${turnT}`));
      while (2 <= filterA.size) {
          let targetb = false;
         philippinesF = targetb;
         break;
      }
      while (iconclosewhitebgl.length >= 2 && !weiboI) {
         weiboI = (iconclosewhitebgl.length + rulesn.size) < 44;
         break;
      }
      for (let g = 0; g < 2; g++) {
         iconclosewhitebgl = "1";
      }
      let floaterJ = weiboI ? !weiboI : weiboI;
      do {
         weiboI = philippinesF;
         if (floaterJ) {
            break;
         }
      } while (((5 & filterA.size) == 2) && floaterJ);
      for (let w = 0; w < 1; w++) {
         iconclosewhitebgl = `${iconclosewhitebgl.length % 1}`;
      }
         philippinesF = (87 < (filterA.size | (!philippinesF ? 87 : filterA.size)));
         rulesn = new Map([[iconclosewhitebgl, 3]]);
      let borderlesst = philippinesF ? !philippinesF : philippinesF;
      do {
         philippinesF = String.fromCharCode(72,0) == iconclosewhitebgl;
         if (borderlesst) {
            break;
         }
      } while (borderlesst && (philippinesF));
      componentregistryU = new Map([[`${shrink9.size}`, 2 & iconclosewhitebgl.length]]);
   }
   for (let z = 0; z < 1; z++) {
       let libmapbufferjniJ = String.fromCharCode(97,95,51,53,95,109,118,99,111,109,112,111,110,101,110,116,0);
       let controlW = String.fromCharCode(121,95,57,57,95,100,111,119,110,115,97,109,112,108,105,110,103,0);
       let ying4 = String.fromCharCode(115,108,97,115,104,95,51,95,52,50,0);
       let mintegrali = String.fromCharCode(102,95,49,53,95,108,101,97,107,0);
      for (let h = 0; h < 2; h++) {
         ying4 = "1";
      }
      if (libmapbufferjniJ == String.fromCharCode(49,0)) {
          let dragclose2: Map<any, any> = new Map([[String.fromCharCode(112,95,55,95,116,114,97,102,0),String.fromCharCode(105,95,57,53,95,116,121,112,105,110,103,0)], [String.fromCharCode(110,97,114,114,111,119,95,57,95,51,53,0),String.fromCharCode(115,105,110,99,101,95,54,95,57,55,0)], [String.fromCharCode(106,95,52,53,95,99,105,112,104,101,114,116,101,120,116,0),String.fromCharCode(99,104,101,99,107,101,100,95,49,95,55,48,0)]]);
          let downloadG = String.fromCharCode(100,110,120,104,100,101,110,99,95,54,95,57,51,0);
         mintegrali += "2";
         dragclose2.set(downloadG, dragclose2.size + 2);
         downloadG = `${(downloadG == String.fromCharCode(122,0) ? dragclose2.size : downloadG.length)}`;
      }
      while (libmapbufferjniJ == String.fromCharCode(98,0)) {
          let episoden = String.fromCharCode(105,110,115,101,114,116,105,111,110,95,105,95,55,51,0);
          let libfollyr = String.fromCharCode(101,95,52,48,95,114,101,103,105,115,116,101,114,0);
         ying4 = `${(mintegrali == String.fromCharCode(102,0) ? episoden.length : mintegrali.length)}`;
         episoden += `${libfollyr.length - 2}`;
         libfollyr += `${libfollyr.length}`;
         break;
      }
      if (mintegrali != String.fromCharCode(82,0) && controlW != String.fromCharCode(106,0)) {
         mintegrali = `${controlW.length - libmapbufferjniJ.length}`;
      }
      if (libmapbufferjniJ.startsWith(`${controlW.length}`)) {
         libmapbufferjniJ += `${ying4.length + 2}`;
      }
         ying4 = "2";
       let configurei = 0.0;
       let holder9 = String.fromCharCode(115,101,108,102,105,101,95,105,95,54,54,0);
         holder9 = `${mintegrali.length}`;
         ying4 = `${(String.fromCharCode(69,0) == mintegrali ? mintegrali.length : libmapbufferjniJ.length)}`;
         holder9 = `${(String.fromCharCode(65,0) == libmapbufferjniJ ? parseInt(`${configurei}`) : libmapbufferjniJ.length)}`;
         libmapbufferjniJ = `${holder9.length % (Math.max(6, ying4.length))}`;
      componentregistryU = new Map([[iconfeedbackA, 3 + parseInt(`${iconbackwhiteN}`)]]);
   }
       let nativemoduleN = true;
      if (!nativemoduleN && nativemoduleN) {
         nativemoduleN = !nativemoduleN;
      }
       let chartC = String.fromCharCode(100,95,57,54,95,119,114,105,116,101,99,111,112,121,0);
       let gdtadvf = String.fromCharCode(105,95,55,50,95,112,114,111,118,105,100,105,110,103,0);
         gdtadvf += `${(chartC.length & (nativemoduleN ? 3 : 4))}`;
      componentregistryU.set(`${iconbackwhiteN}`, parseInt(`${iconbackwhiteN}`) + switch_8sj.size);
   let nativeu = componentregistryU.size <= 4982371;
   do {
       let searchN = String.fromCharCode(113,95,54,48,95,101,120,116,114,97,112,111,108,97,116,111,114,0);
       let tickedE = true;
          let emptyc = 2.0;
          let previewc = String.fromCharCode(102,99,104,111,119,110,95,55,95,51,51,0);
         tickedE = searchN.length < 100;
         emptyc *= parseFloat(`${previewc.length | parseInt(`${emptyc}`)}`);
         previewc = `${previewc.length}`;
          let albumD = String.fromCharCode(117,110,105,109,112,111,114,116,97,110,116,95,120,95,51,0);
          let reactz = String.fromCharCode(105,109,97,103,101,115,95,114,95,53,55,0);
         tickedE = searchN.startsWith(`${tickedE}`);
         albumD = `${reactz.length >> (Math.min(Math.abs(2), 5))}`;
         reactz += `${(albumD == String.fromCharCode(90,0) ? albumD.length : reactz.length)}`;
       let filedL: Map<any, any> = new Map([[String.fromCharCode(115,101,101,110,95,101,95,51,49,0),true ], [String.fromCharCode(102,95,49,49,95,112,105,110,0),false ], [String.fromCharCode(111,108,97,110,97,95,49,95,56,57,0),true ]]);
       let modelx = String.fromCharCode(108,95,55,55,95,116,114,97,99,107,0);
       let collectionK = String.fromCharCode(97,114,116,105,115,116,95,122,95,53,50,0);
          let defaultprofilepicj: Map<any, any> = new Map([[String.fromCharCode(117,95,56,52,95,116,105,109,101,0),892], [String.fromCharCode(102,95,53,56,95,109,100,99,116,0),187], [String.fromCharCode(114,101,100,117,99,101,114,95,102,95,53,57,0),316]]);
          let sinaJ = 1.0;
          let inouttargetredo = 5.0;
         searchN = `${1 + searchN.length}`;
         defaultprofilepicj.set(`${inouttargetredo}`, defaultprofilepicj.size - 2);
         sinaJ += parseInt(`${inouttargetredo}`);
         modelx += `${(collectionK == String.fromCharCode(116,0) ? collectionK.length : searchN.length)}`;
      componentregistryU = new Map([[`${libswresamplem}`, 3 % (Math.max(libswresamplem, 10))]]);
      if (nativeu) {
         break;
      }
   } while ((Array.from(componentregistryU.keys()).includes(`${combineo}`)) && nativeu);
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
       let cancelc: Array<any> = [540, 875, 582];
    let acceptedw: Array<any> = [170, 725];
    let iconnointernetD = String.fromCharCode(99,97,110,111,112,117,115,95,48,95,55,56,0);
    let libsentryn: Array<any> = [669, 222];
    let sheetj: Array<any> = [688, 659, 746];
    let halfV = String.fromCharCode(102,97,109,105,108,121,95,55,95,57,52,0);
    let canvasu: Map<any, any> = new Map([[String.fromCharCode(117,110,109,97,114,107,95,99,95,57,56,0),String.fromCharCode(104,95,51,49,95,99,111,110,116,97,99,116,115,0)], [String.fromCharCode(111,117,116,113,95,105,95,57,57,0),String.fromCharCode(98,101,110,105,103,110,95,104,95,56,49,0)], [String.fromCharCode(114,95,55,95,117,112,100,97,116,101,114,0),String.fromCharCode(112,111,115,108,105,115,116,95,57,95,53,55,0)]]);
    let rank4: Array<any> = [String.fromCharCode(101,95,55,50,95,117,110,109,97,116,99,104,101,100,0), String.fromCharCode(112,114,111,109,112,116,101,100,95,101,95,57,49,0), String.fromCharCode(107,95,52,95,114,101,103,117,108,97,114,0)];
    let controlsq: Array<any> = [352, 644, 694];
    let downarrowQ = 4;
    let fcdaebecbcbafcdfceaaeccfeacdbw = String.fromCharCode(106,95,50,57,95,116,101,114,109,115,101,116,0);
   while ((4 - sheetj.length) <= 2) {
      sheetj = [libsentryn.length];
      break;
   }
      acceptedw.push(2);
   let reviewd = 9607636 <= sheetj.length;
   do {
      sheetj = [sheetj.length];
      if (reviewd) {
         break;
      }
   } while ((5 == (sheetj.length - 5)) && reviewd);
      acceptedw = [2 / (Math.max(3, halfV.length))];
   let livenodatabgimg0 = 5332685 <= halfV.length;
   do {
      halfV += "1";
      if (livenodatabgimg0) {
         break;
      }
   } while (livenodatabgimg0 && (1 >= (2 & halfV.length) && 1 >= (2 & halfV.length)));
      libsentryn.push(canvasu.size);
   if ((sheetj.length / (Math.max(iconnointernetD.length, 8))) < 3) {
      sheetj = [3];
   }
      canvasu = new Map([[`${canvasu.size}`, 2]]);
       let securityM: Map<any, any> = new Map([[String.fromCharCode(117,115,101,99,95,52,95,51,57,0),627], [String.fromCharCode(102,108,105,99,95,103,95,50,50,0),296]]);
         securityM = new Map([[`${securityM.size}`, securityM.size]]);
      while (4 < (3 ^ securityM.size)) {
          let canvasI = 3.0;
          let utilsY = 0.0;
          let libyogaA: Map<any, any> = new Map([[String.fromCharCode(101,115,115,101,110,99,101,95,49,95,52,49,0),123], [String.fromCharCode(103,95,54,53,95,105,110,116,101,114,112,114,101,116,0),643], [String.fromCharCode(112,95,53,48,95,112,114,115,99,116,112,0),889]]);
          let diceU: Array<any> = [916, 594];
         securityM = new Map([[`${libyogaA.size}`, libyogaA.size + parseInt(`${canvasI}`)]]);
         canvasI *= parseInt(`${utilsY}`) << (Math.min(diceU.length, 2));
         utilsY -= parseInt(`${utilsY}`);
         diceU = [1];
         break;
      }
      for (let q = 0; q < 3; q++) {
          let reactnavigationV = 4;
          let ksadc = String.fromCharCode(115,121,109,98,111,108,105,99,97,116,101,95,97,95,54,55,0);
          let logoD: Array<any> = [String.fromCharCode(118,95,56,50,95,107,97,108,109,97,110,0), String.fromCharCode(97,117,116,111,99,108,101,97,114,95,100,95,50,57,0)];
         securityM.set(ksadc, ksadc.length);
         reactnavigationV /= Math.max(4, 1 + logoD.length);
         logoD.push(logoD.length);
      }
      rank4.push(libsentryn.length >> (Math.min(halfV.length, 3)));
       let with_6I: Map<any, any> = new Map([[String.fromCharCode(98,97,108,97,110,99,101,115,95,104,95,52,55,0),897], [String.fromCharCode(111,110,101,115,99,97,108,101,95,115,95,48,0),872], [String.fromCharCode(98,97,116,116,101,114,121,95,51,95,54,48,0),297]]);
       let leagueR = 3;
       let skipm = 3.0;
      while (with_6I.get(`${leagueR}`) != null) {
         leagueR &= leagueR - with_6I.size;
         break;
      }
         leagueR >>= Math.min(5, Math.abs(with_6I.size - leagueR));
      if ((leagueR ^ 2) <= 1 || 2 <= (leagueR / (Math.max(2, 6)))) {
         skipm += leagueR;
      }
      while (4.98 == (skipm * leagueR)) {
          let zhuboW: Map<any, any> = new Map([[String.fromCharCode(112,95,51,54,95,107,101,121,104,97,115,104,0),967], [String.fromCharCode(102,114,111,109,98,121,116,101,115,95,114,95,51,51,0),319]]);
          let collectionv = 1.0;
          let typesb = String.fromCharCode(117,95,55,49,95,105,110,115,116,97,110,99,101,0);
          let faviconL: Array<any> = [590, 103];
          let successf: Array<any> = [495, 70, 920];
         leagueR ^= parseInt(`${collectionv}`) - 2;
         zhuboW = new Map([[`${faviconL.length}`, 1]]);
         collectionv -= parseFloat(`${successf.length | typesb.length}`);
         typesb += `${zhuboW.size + 3}`;
         faviconL = [typesb.length & 2];
         successf = [typesb.length];
         break;
      }
          let videoG: Map<any, any> = new Map([[String.fromCharCode(114,101,115,111,108,118,105,110,103,95,110,95,52,54,0),true ], [String.fromCharCode(112,114,101,95,54,95,54,53,0),false ], [String.fromCharCode(112,108,117,114,97,108,115,95,98,95,55,55,0),true ]]);
          let commonW = String.fromCharCode(108,117,109,105,110,97,110,99,101,95,98,95,51,56,0);
          let streamingE = true;
         leagueR ^= videoG.size;
         videoG = new Map([[commonW, ((streamingE ? 2 : 5) % (Math.max(4, commonW.length)))]]);
         streamingE = !streamingE;
       let libavdevicex = 1.0;
      let iconwatchnowm = 7100905.0 <= skipm;
      do {
         skipm -= parseInt(`${skipm}`) | 2;
         if (iconwatchnowm) {
            break;
         }
      } while (iconwatchnowm && ((2.18 / (Math.max(4, libavdevicex))) < 1.60 && 2.7 < (2.18 / (Math.max(1, libavdevicex)))));
      for (let e = 0; e < 3; e++) {
         skipm += 1;
      }
      let reactnativeultimatelistview4 = 7792991.0 >= skipm;
      do {
         skipm /= Math.max(5, parseInt(`${skipm}`));
         if (reactnativeultimatelistview4) {
            break;
         }
      } while (((1.21 + skipm) == 1.35) && reactnativeultimatelistview4);
      libsentryn.push(libsentryn.length % 2);
   if ((halfV.length - cancelc.length) <= 3) {
      cancelc.push(rank4.length * sheetj.length);
   }
      iconnointernetD = `${halfV.length - libsentryn.length}`;
   if (!sheetj.includes(rank4.length)) {
      rank4 = [(String.fromCharCode(118,0) == iconnointernetD ? libsentryn.length : iconnointernetD.length)];
   }
      sheetj = [2];
      libsentryn = [sheetj.length];
      libsentryn.push((String.fromCharCode(105,0) == halfV ? halfV.length : cancelc.length));
   for (let f = 0; f < 2; f++) {
       let rewardvideoo = String.fromCharCode(100,105,118,105,115,111,114,95,111,95,54,52,0);
       let round9: Map<any, any> = new Map([[String.fromCharCode(115,115,101,116,95,56,95,55,57,0),260], [String.fromCharCode(114,95,54,48,95,114,111,117,110,100,100,115,0),14], [String.fromCharCode(108,95,54,53,95,114,97,112,104,105,99,115,0),217]]);
       let membership0: Array<any> = [766, 158, 619];
       let fast5: Map<any, any> = new Map([[String.fromCharCode(99,95,54,52,95,114,101,100,117,99,101,100,0),String.fromCharCode(116,95,54,53,95,116,111,103,103,108,101,0)], [String.fromCharCode(117,95,49,50,95,115,112,101,110,100,101,114,0),String.fromCharCode(103,114,97,98,98,101,114,95,97,95,54,50,0)], [String.fromCharCode(115,117,98,112,111,105,110,116,101,114,95,57,95,50,56,0),String.fromCharCode(99,111,110,116,97,105,110,101,100,95,52,95,53,49,0)]]);
       let helper7 = 1;
         rewardvideoo += "2";
      while (4 >= (helper7 - round9.size) || (helper7 - round9.size) >= 4) {
         helper7 ^= 3 & membership0.length;
         break;
      }
      while ((membership0.length % (Math.max(round9.size, 7))) >= 4) {
         round9 = new Map([[`${fast5.size}`, helper7]]);
         break;
      }
      if (Array.from(fast5.keys()).includes(`${helper7}`)) {
         fast5 = new Map([[`${fast5.size}`, fast5.size]]);
      }
         rewardvideoo = `${rewardvideoo.length}`;
      if (helper7 < 3) {
          let matchs = 1.0;
         fast5.set(`${matchs}`, 2);
      }
          let libavformatJ = 5.0;
          let iconschedulel = 3.0;
         helper7 /= Math.max(3 - helper7, 4);
         libavformatJ *= parseFloat(`${1}`);
         iconschedulel *= 1;
      for (let l = 0; l < 1; l++) {
         helper7 /= Math.max(1 + helper7, 5);
      }
          let expiredy: Map<any, any> = new Map([[String.fromCharCode(115,95,51,49,95,114,101,102,101,114,0),316], [String.fromCharCode(112,110,105,101,108,115,95,118,95,51,51,0),643], [String.fromCharCode(116,101,120,116,97,116,116,114,95,101,95,54,49,0),110]]);
          let area5 = String.fromCharCode(99,111,110,116,101,120,116,95,97,95,49,54,0);
         round9 = new Map([[`${expiredy.size}`, expiredy.size + rewardvideoo.length]]);
         area5 += "3";
          let acceptedE: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,105,122,101,114,95,56,95,54,0),150], [String.fromCharCode(114,105,110,103,98,97,99,107,95,110,95,56,53,0),348]]);
         membership0 = [2 >> (Math.min(1, membership0.length))];
         acceptedE = new Map([[`${acceptedE.size}`, 1 | acceptedE.size]]);
         membership0 = [1 * membership0.length];
      let nalyticsq = 5566335 <= fast5.size;
      do {
          let whiteanimationlivec = String.fromCharCode(108,105,110,107,115,95,48,95,50,50,0);
          let baiduR = String.fromCharCode(101,108,101,109,101,110,116,115,95,112,95,49,50,0);
          let navigation4 = 4.0;
         fast5.set(`${baiduR}`, fast5.size);
         whiteanimationlivec += `${whiteanimationlivec.length / (Math.max(3, 7))}`;
         baiduR += "3";
         navigation4 *= 2 * parseInt(`${navigation4}`);
         if (nalyticsq) {
            break;
         }
      } while (nalyticsq && (Array.from(fast5.keys()).includes(`${round9.size}`)));
      if ((4 >> (Math.min(3, rewardvideoo.length))) < 2) {
         helper7 >>= Math.min(membership0.length, 4);
      }
         round9.set(`${helper7}`, helper7);
         helper7 >>= Math.min(4, Math.abs(1 * helper7));
      rank4.push(rank4.length);
   }
       let predictionbannersharedR: Map<any, any> = new Map([[String.fromCharCode(112,111,115,105,116,105,118,101,95,115,95,51,56,0),251], [String.fromCharCode(116,95,49,57,95,108,109,100,98,0),588]]);
       let dacccfaabfbcbadeebddcabacdffdbP: Map<any, any> = new Map([[String.fromCharCode(99,111,117,110,116,101,114,95,99,95,49,49,0),468], [String.fromCharCode(106,95,55,55,95,112,111,115,105,116,105,111,110,115,0),735]]);
          let libswscaleV = String.fromCharCode(109,97,112,112,101,100,95,102,95,50,53,0);
          let overc = String.fromCharCode(108,95,50,54,95,114,111,120,121,0);
          let renderP = String.fromCharCode(102,97,116,101,95,57,95,54,52,0);
         dacccfaabfbcbadeebddcabacdffdbP = new Map([[`${predictionbannersharedR.size}`, 3 | overc.length]]);
         libswscaleV = `${(String.fromCharCode(104,0) == libswscaleV ? renderP.length : libswscaleV.length)}`;
         overc += `${libswscaleV.length}`;
         renderP += `${libswscaleV.length}`;
       let executor_ = String.fromCharCode(117,95,50,54,95,97,99,99,117,109,117,108,97,116,101,0);
      let giftbuttonJ = dacccfaabfbcbadeebddcabacdffdbP.size >= 6481244;
      do {
         dacccfaabfbcbadeebddcabacdffdbP.set(executor_, 3 >> (Math.min(4, Math.abs(dacccfaabfbcbadeebddcabacdffdbP.size))));
         if (giftbuttonJ) {
            break;
         }
      } while (giftbuttonJ && ((predictionbannersharedR.size | 5) <= 4 && (predictionbannersharedR.size | dacccfaabfbcbadeebddcabacdffdbP.size) <= 5));
      let floater4 = executor_ == String.fromCharCode(51,114,54,120,121,111,111,121,0);
      do {
         executor_ = `${3 | dacccfaabfbcbadeebddcabacdffdbP.size}`;
         if (floater4) {
            break;
         }
      } while ((executor_.endsWith(`${predictionbannersharedR.size}`)) && floater4);
      let mbridge0 = 5716691 >= executor_.length;
      do {
         executor_ = `${predictionbannersharedR.size % (Math.max(7, dacccfaabfbcbadeebddcabacdffdbP.size))}`;
         if (mbridge0) {
            break;
         }
      } while (mbridge0 && (2 <= (executor_.length | dacccfaabfbcbadeebddcabacdffdbP.size) && (dacccfaabfbcbadeebddcabacdffdbP.size | 2) <= 1));
      while (5 < (dacccfaabfbcbadeebddcabacdffdbP.size % (Math.max(executor_.length, 8))) && 4 < (5 % (Math.max(3, executor_.length)))) {
         executor_ = "3";
         break;
      }
      libsentryn = [acceptedw.length * libsentryn.length];
   for (let p = 0; p < 2; p++) {
       let shirts = false;
       let foundA = String.fromCharCode(105,110,116,101,114,115,101,99,116,95,107,95,55,48,0);
      if (foundA.endsWith(`${shirts}`)) {
         foundA = `${(foundA == String.fromCharCode(52,0) ? foundA.length : (shirts ? 3 : 2))}`;
      }
      let hongkongw = shirts ? !shirts : shirts;
      do {
         shirts = (((shirts ? foundA.length : 61) ^ foundA.length) <= 61);
         if (hongkongw) {
            break;
         }
      } while (hongkongw && (foundA.includes(`${shirts}`)));
       let videocommonW = String.fromCharCode(114,112,114,111,98,101,95,114,95,52,52,0);
         foundA += `${foundA.length | 1}`;
          let hoverZ = String.fromCharCode(99,111,109,112,97,116,95,49,95,53,51,0);
         shirts = hoverZ.endsWith(`${shirts}`);
      for (let y = 0; y < 1; y++) {
         videocommonW += `${((shirts ? 4 : 4) + videocommonW.length)}`;
      }
      acceptedw.push(sheetj.length);
   }
   while (1 == (rank4.length / 2)) {
      rank4.push((halfV == String.fromCharCode(119,0) ? cancelc.length : halfV.length));
      break;
   }
       let libreactnativeblobR = String.fromCharCode(107,95,57,48,95,108,111,111,112,105,110,103,0);
       let upgradeT: Map<any, any> = new Map([[String.fromCharCode(110,95,49,49,95,115,110,97,112,115,104,111,116,116,101,114,0),679], [String.fromCharCode(97,99,99,117,109,117,108,97,116,101,100,95,105,95,51,49,0),473]]);
       let macauI: Map<any, any> = new Map([[String.fromCharCode(121,95,54,55,95,114,111,117,110,100,0),68], [String.fromCharCode(103,97,105,110,115,95,105,95,52,49,0),237]]);
         libreactnativeblobR += `${macauI.size * libreactnativeblobR.length}`;
          let backgroundo = 3.0;
          let clockw: Array<any> = [String.fromCharCode(104,95,55,57,95,99,117,114,108,121,0), String.fromCharCode(98,108,99,107,95,120,95,49,57,0)];
         macauI.set(`${backgroundo}`, parseInt(`${backgroundo}`) * libreactnativeblobR.length);
         clockw.push(2 - clockw.length);
      if ((upgradeT.size << (Math.min(Math.abs(1), 1))) < 1) {
         upgradeT.set(`${upgradeT.size}`, upgradeT.size + 1);
      }
          let regengJ: Array<any> = [String.fromCharCode(108,95,54,48,95,101,110,99,111,100,101,114,115,0), String.fromCharCode(114,95,52,48,95,115,117,115,112,101,110,100,0)];
         upgradeT = new Map([[`${macauI.size}`, macauI.size]]);
         regengJ = [regengJ.length];
      while ((macauI.size << (Math.min(4, Math.abs(upgradeT.size)))) == 4 && 4 == (macauI.size << (Math.min(3, Math.abs(upgradeT.size))))) {
         macauI.set(`${libreactnativeblobR}`, libreactnativeblobR.length & 2);
         break;
      }
         libreactnativeblobR += `${macauI.size & upgradeT.size}`;
      let referreru = 9105932 <= macauI.size;
      do {
         macauI.set(`${libreactnativeblobR}`, (libreactnativeblobR == String.fromCharCode(87,0) ? macauI.size : libreactnativeblobR.length));
         if (referreru) {
            break;
         }
      } while (((1 + libreactnativeblobR.length) >= 4) && referreru);
      let specM = 8292174 <= macauI.size;
      do {
         macauI.set(libreactnativeblobR, macauI.size);
         if (specM) {
            break;
         }
      } while (specM && (3 >= (1 - upgradeT.size)));
         libreactnativeblobR += `${1 >> (Math.min(2, libreactnativeblobR.length))}`;
      libsentryn = [iconnointernetD.length];
   for (let p = 0; p < 1; p++) {
      canvasu = new Map([[`${canvasu.size}`, 1]]);
   }
   if (4 <= rank4.length) {
       let executorQ = String.fromCharCode(97,95,50,49,95,100,101,116,97,99,104,101,100,0);
       let actionsS = true;
       let gpayt: Map<any, any> = new Map([[String.fromCharCode(119,95,55,54,95,115,97,109,112,108,101,114,97,116,101,0),false ], [String.fromCharCode(113,95,49,50,95,116,95,56,0),false ]]);
       let g_managerl: Array<any> = [650, 97, 601];
       let episodes2: Array<any> = [648, 88];
      let footballfiledlayoutL = executorQ == String.fromCharCode(50,95,122,0);
      do {
         executorQ = `${executorQ.length}`;
         if (footballfiledlayoutL) {
            break;
         }
      } while (footballfiledlayoutL && (executorQ.endsWith(`${actionsS}`)));
       let eactO = String.fromCharCode(109,95,52,53,95,116,111,109,111,114,114,111,119,0);
       let armvah = 1.0;
       let uimanagerd = 2.0;
       let hongkong_ = 0;
       let flagD = 2;
      let cornerh = 8158895.0 >= uimanagerd;
      do {
         uimanagerd *= parseFloat(`${hongkong_ + flagD}`);
         if (cornerh) {
            break;
         }
      } while ((2.11 < (1.33 * uimanagerd)) && cornerh);
      while (2.17 > (uimanagerd + 4.90) || (armvah + uimanagerd) > 4.90) {
         uimanagerd -= parseFloat(`${gpayt.size}`);
         break;
      }
         uimanagerd /= Math.max(parseFloat(`${2 - parseInt(`${uimanagerd}`)}`), 2);
      while ((2 + hongkong_) >= 2) {
          let albumR = 0.0;
         hongkong_ >>= Math.min(Math.abs(parseInt(`${armvah}`) + 1), 2);
         albumR -= parseInt(`${albumR}`) & parseInt(`${albumR}`);
         break;
      }
       let playlisto = true;
      while (!playlisto) {
         playlisto = g_managerl.length <= episodes2.length;
         break;
      }
      let iconbackwhiteQ = 7284792 <= g_managerl.length;
      do {
          let favoritei = 1.0;
          let downY: Map<any, any> = new Map([[String.fromCharCode(101,113,117,97,116,97,98,108,101,95,49,95,51,49,0),82], [String.fromCharCode(100,101,98,97,110,100,95,119,95,52,49,0),388], [String.fromCharCode(115,95,52,52,95,104,109,97,99,105,100,0),956]]);
          let philippinesj = false;
          let annerp = String.fromCharCode(98,95,50,52,95,109,100,112,114,0);
          let dragL = String.fromCharCode(104,95,53,50,95,117,114,108,0);
         g_managerl.push(2);
         favoritei *= dragL.length;
         downY = new Map([[`${downY.size}`, downY.size]]);
         philippinesj = parseInt(`${favoritei}`) <= annerp.length;
         annerp += `${parseInt(`${favoritei}`)}`;
         dragL = `${downY.size}`;
         if (iconbackwhiteQ) {
            break;
         }
      } while (iconbackwhiteQ && (g_managerl.includes(flagD)));
      if ((g_managerl.length % (Math.max(4, 2))) < 2 && g_managerl.length < 4) {
         playlisto = flagD >= executorQ.length;
      }
       let application8: Map<any, any> = new Map([[String.fromCharCode(112,100,115,95,108,95,55,52,0),String.fromCharCode(102,111,114,95,107,95,57,54,0)], [String.fromCharCode(101,99,117,114,115,105,118,101,95,49,95,49,48,48,0),String.fromCharCode(97,108,116,101,114,95,97,95,54,54,0)]]);
       let googleB: Map<any, any> = new Map([[String.fromCharCode(110,105,108,115,95,114,95,50,53,0),String.fromCharCode(120,95,50,57,95,111,112,101,110,101,114,0)], [String.fromCharCode(108,95,53,50,95,114,116,99,119,101,98,0),String.fromCharCode(110,111,116,105,102,105,101,115,95,55,95,57,49,0)]]);
          let downloadedE: Map<any, any> = new Map([[String.fromCharCode(101,118,105,99,101,95,100,95,53,54,0),true ], [String.fromCharCode(114,95,56,55,95,99,111,110,110,101,99,116,120,0),true ], [String.fromCharCode(119,95,56,49,95,99,104,114,111,109,97,116,105,99,0),true ]]);
         googleB.set(`${armvah}`, 1 % (Math.max(parseInt(`${uimanagerd}`), 10)));
         downloadedE = new Map([[`${downloadedE.size}`, downloadedE.size]]);
         flagD += (String.fromCharCode(120,0) == eactO ? googleB.size : eactO.length);
      rank4 = [3 + sheetj.length];
   }
   for (let c = 0; c < 1; c++) {
       let iconscheduleg = 1.0;
         iconscheduleg += 1 - parseInt(`${iconscheduleg}`);
          let taiwans = true;
         iconscheduleg *= parseInt(`${iconscheduleg}`) / 1;
         taiwans = (taiwans ? !taiwans : taiwans);
          let volumen = 5;
         iconscheduleg *= 1 + volumen;
      acceptedw = [libsentryn.length & cancelc.length];
   }
   let iconbackwhite7 = sheetj.length >= 5172654;
   do {
       let mailJ = 2.0;
       let umeng7: Array<any> = [String.fromCharCode(100,101,108,101,103,97,116,111,114,95,97,95,56,56,0), String.fromCharCode(110,95,50,53,95,105,110,115,101,114,116,105,111,110,115,0)];
       let league2 = 5;
      while (mailJ == umeng7.length) {
          let scoreU = String.fromCharCode(112,101,114,102,111,114,109,97,110,99,101,95,122,95,54,52,0);
          let w_centerh = 2.0;
          let nativeexO: Array<any> = [233, 200, 428];
          let malaysiaX = String.fromCharCode(114,95,51,48,95,109,101,109,111,114,121,115,116,114,101,97,109,0);
          let philippinesx = false;
         mailJ *= nativeexO.length - league2;
         scoreU += "2";
         w_centerh -= malaysiaX.length;
         nativeexO.push(((philippinesx ? 5 : 5) ^ scoreU.length));
         malaysiaX += `${2 * parseInt(`${w_centerh}`)}`;
         break;
      }
         league2 /= Math.max(1, league2 << (Math.min(umeng7.length, 3)));
          let signinupO = String.fromCharCode(103,95,50,57,95,110,112,114,111,98,101,0);
          let libpangleflipped7 = String.fromCharCode(114,101,112,108,105,101,115,95,113,95,56,56,0);
          let referrerZ = String.fromCharCode(98,95,55,48,95,114,101,102,99,111,117,110,116,101,100,111,98,106,101,99,116,0);
         umeng7.push(parseInt(`${mailJ}`));
         signinupO += `${libpangleflipped7.length}`;
         libpangleflipped7 += "1";
         referrerZ += `${libpangleflipped7.length - referrerZ.length}`;
      for (let q = 0; q < 3; q++) {
         umeng7.push(parseInt(`${mailJ}`));
      }
         mailJ += umeng7.length;
      if (1 > league2) {
         league2 |= parseInt(`${mailJ}`) >> (Math.min(4, Math.abs(1)));
      }
          let libaneG = 1;
         league2 -= 3;
         libaneG ^= 3;
          let customL = 0.0;
          let orangeclockG: Array<any> = [String.fromCharCode(107,95,54,57,0), String.fromCharCode(112,95,49,49,95,101,120,114,100,115,112,0)];
         umeng7 = [league2];
         customL += parseFloat(`${1 - parseInt(`${customL}`)}`);
         orangeclockG.push(orangeclockG.length);
      for (let h = 0; h < 3; h++) {
         umeng7.push(league2 - 1);
      }
      sheetj = [canvasu.size % 3];
      if (iconbackwhite7) {
         break;
      }
   } while ((sheetj.length > rank4.length) && iconbackwhite7);
   let areag = String.fromCharCode(56,101,108,95,100,108,110,0) == halfV;
   do {
       let knewinterstitialZ = String.fromCharCode(113,95,55,54,95,112,114,101,115,101,110,116,97,98,108,101,0);
       let gradlew2 = String.fromCharCode(99,111,110,116,101,120,116,115,95,102,95,49,53,0);
       let mapbuffere = String.fromCharCode(115,116,101,112,115,105,122,101,95,57,95,52,53,0);
       let layoutV = String.fromCharCode(99,97,99,97,95,53,95,57,56,0);
       let libfollya = String.fromCharCode(119,101,98,109,101,110,99,95,55,95,56,51,0);
         mapbuffere = `${mapbuffere.length}`;
          let libtany = String.fromCharCode(100,105,115,99,97,114,100,101,100,95,119,95,57,50,0);
          let minih: Map<any, any> = new Map([[String.fromCharCode(116,95,50,57,95,98,111,116,116,111,109,0),314], [String.fromCharCode(100,95,54,52,95,97,100,106,117,115,116,101,114,0),93], [String.fromCharCode(97,98,115,116,95,51,95,53,50,0),17]]);
         gradlew2 += `${mapbuffere.length}`;
         libtany += `${(String.fromCharCode(97,0) == libtany ? minih.size : libtany.length)}`;
         minih.set(`${libtany}`, (String.fromCharCode(78,0) == libtany ? libtany.length : minih.size));
      for (let k = 0; k < 2; k++) {
         gradlew2 += `${libfollya.length << (Math.min(Math.abs(3), 1))}`;
      }
         gradlew2 = `${mapbuffere.length ^ 3}`;
      let libmapbufferjniB = 7611876 >= libfollya.length;
      do {
          let gray2 = String.fromCharCode(119,111,114,100,108,101,110,95,119,95,52,55,0);
          let appleU = 5.0;
          let executorW = 3.0;
          let roomD = String.fromCharCode(108,95,51,49,95,120,121,122,116,97,98,108,101,115,0);
          let defaultplayerimgF = 5;
         libfollya = "3";
         gray2 += `${gray2.length}`;
         appleU -= parseFloat(`${1}`);
         executorW *= parseFloat(`${gray2.length - 2}`);
         roomD = `${defaultplayerimgF + parseInt(`${appleU}`)}`;
         defaultplayerimgF /= Math.max((gray2 == String.fromCharCode(49,0) ? gray2.length : defaultplayerimgF), 4);
         if (libmapbufferjniB) {
            break;
         }
      } while ((5 >= layoutV.length) && libmapbufferjniB);
          let activityX: Map<any, any> = new Map([[String.fromCharCode(118,95,52,52,95,111,110,108,121,0),String.fromCharCode(114,103,98,120,95,109,95,54,49,0)], [String.fromCharCode(110,95,55,95,116,114,97,110,115,112,97,114,101,110,116,0),String.fromCharCode(104,95,57,50,95,111,112,101,110,0)]]);
          let lightP: Array<any> = [955, 966];
          let logo7 = String.fromCharCode(101,120,112,108,111,100,105,110,103,95,114,95,54,56,0);
         gradlew2 += "3";
         activityX.set(`${lightP.length}`, activityX.size + lightP.length);
         logo7 = `${(String.fromCharCode(108,0) == logo7 ? lightP.length : logo7.length)}`;
          let large3: Map<any, any> = new Map([[String.fromCharCode(114,112,99,115,95,103,95,52,54,0),604], [String.fromCharCode(119,95,56,51,95,115,117,98,115,116,114,101,97,109,0),17]]);
         mapbuffere = `${knewinterstitialZ.length}`;
         large3.set(`${large3.size}`, large3.size + large3.size);
       let darkw = 4.0;
          let rulesj = String.fromCharCode(112,114,101,100,105,99,116,105,118,101,95,101,95,49,54,0);
          let interstitial1 = 0;
         layoutV = `${knewinterstitialZ.length % (Math.max(layoutV.length, 7))}`;
         rulesj += `${rulesj.length - interstitial1}`;
         interstitial1 <<= Math.min(Math.abs(interstitial1 & rulesj.length), 1);
      for (let p = 0; p < 1; p++) {
          let indicatorr = 2.0;
          let specI = 4;
          let vipsportf = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,111,114,95,54,95,55,0);
          let watchnowbge: Map<any, any> = new Map([[String.fromCharCode(122,105,112,102,95,57,95,54,52,0),String.fromCharCode(116,114,105,109,95,120,95,51,54,0)], [String.fromCharCode(121,95,50,52,95,116,101,108,101,112,104,111,116,111,0),String.fromCharCode(109,102,114,97,95,53,95,54,54,0)], [String.fromCharCode(111,95,50,50,95,115,112,101,97,107,0),String.fromCharCode(102,111,114,101,103,114,111,117,110,100,95,99,95,51,57,0)]]);
         libfollya += "2";
         indicatorr -= 1;
         specI += vipsportf.length;
         vipsportf = `${2 | vipsportf.length}`;
         watchnowbge.set(`${indicatorr}`, specI);
      }
         darkw *= layoutV.length & parseInt(`${darkw}`);
       let iconsaveimageN = true;
      let shootyesgoalY = String.fromCharCode(120,95,50,0) == gradlew2;
      do {
         gradlew2 = `${(layoutV == String.fromCharCode(121,0) ? parseInt(`${darkw}`) : layoutV.length)}`;
         if (shootyesgoalY) {
            break;
         }
      } while ((4 < layoutV.length) && shootyesgoalY);
         iconsaveimageN = knewinterstitialZ == String.fromCharCode(75,0);
      for (let n = 0; n < 3; n++) {
         iconsaveimageN = String.fromCharCode(75,0) == knewinterstitialZ;
      }
      halfV += `${knewinterstitialZ.length}`;
      if (areag) {
         break;
      }
   } while (areag && ((3 >> (Math.min(3, halfV.length))) < 1 && (3 >> (Math.min(1, halfV.length))) < 3));
      rank4 = [acceptedw.length / 1];
      halfV += "2";
      canvasu = new Map([[`${sheetj.length}`, iconnointernetD.length >> (Math.min(5, sheetj.length))]]);
   for (let s = 0; s < 3; s++) {
       let currentW: Map<any, any> = new Map([[String.fromCharCode(107,109,101,97,110,115,95,50,95,54,49,0),String.fromCharCode(115,111,114,116,95,56,95,53,49,0)], [String.fromCharCode(101,120,116,101,110,115,105,98,108,101,95,116,95,54,56,0),String.fromCharCode(97,108,109,111,115,116,95,101,95,54,0)], [String.fromCharCode(101,99,114,101,99,111,118,101,114,95,53,95,51,50,0),String.fromCharCode(109,95,57,57,95,109,105,110,105,109,105,122,101,0)]]);
       let phoneshare0 = 5.0;
       let dices: Map<any, any> = new Map([[String.fromCharCode(108,95,55,52,95,115,105,110,99,0),705], [String.fromCharCode(104,95,54,55,95,101,112,104,101,109,101,114,97,108,0),640], [String.fromCharCode(107,95,54,53,95,104,97,110,100,108,101,0),890]]);
       let defaultfootballbgb = String.fromCharCode(109,95,54,51,95,115,108,105,99,101,0);
       let assist4 = 3.0;
         assist4 += parseInt(`${assist4}`);
      for (let e = 0; e < 1; e++) {
         currentW.set(`${assist4}`, parseInt(`${assist4}`) / (Math.max(10, dices.size)));
      }
      let routerj = 7529267 <= defaultfootballbgb.length;
      do {
         defaultfootballbgb = `${parseInt(`${assist4}`)}`;
         if (routerj) {
            break;
         }
      } while (routerj && (defaultfootballbgb.length == dices.size));
      if ((assist4 + phoneshare0) == 4.33) {
         assist4 /= Math.max(4, dices.size - 3);
      }
      while ((4.67 / (Math.max(7, assist4))) >= 4.44) {
          let adultK = 4.0;
         assist4 /= Math.max(currentW.size, 1);
         adultK *= parseInt(`${adultK}`);
         break;
      }
         defaultfootballbgb += `${dices.size ^ defaultfootballbgb.length}`;
         phoneshare0 += parseInt(`${phoneshare0}`) % (Math.max(dices.size, 1));
         dices = new Map([[`${dices.size}`, parseInt(`${assist4}`) / (Math.max(9, dices.size))]]);
          let dragcloseL = String.fromCharCode(111,95,49,53,95,115,116,99,98,0);
          let gemfilen = 0.0;
          let selectedY = 2.0;
         phoneshare0 /= Math.max(5, parseInt(`${assist4}`) % (Math.max(6, currentW.size)));
         dragcloseL += "3";
         gemfilen /= Math.max(4, parseFloat(`${parseInt(`${selectedY}`) % (Math.max(9, parseInt(`${gemfilen}`)))}`));
         selectedY *= parseFloat(`${1 - parseInt(`${selectedY}`)}`);
      if (3.91 >= (2 * phoneshare0)) {
         assist4 -= defaultfootballbgb.length;
      }
         assist4 *= 3 ^ parseInt(`${phoneshare0}`);
      if (3.48 == (phoneshare0 * assist4)) {
         assist4 += defaultfootballbgb.length >> (Math.min(1, Math.abs(currentW.size)));
      }
          let build5 = String.fromCharCode(115,101,110,115,111,114,95,121,95,50,57,0);
         dices.set(`${assist4}`, parseInt(`${assist4}`) | build5.length);
          let lessw = 3;
         defaultfootballbgb += `${dices.size >> (Math.min(defaultfootballbgb.length, 2))}`;
         lessw -= lessw << (Math.min(Math.abs(lessw), 2));
      for (let l = 0; l < 3; l++) {
         assist4 += 2 >> (Math.min(2, defaultfootballbgb.length));
      }
      libsentryn = [dices.size & acceptedw.length];
   }
      libsentryn = [iconnointernetD.length + halfV.length];
       let formF = 3;
       let backiconz = 2.0;
         backiconz /= Math.max(1 ^ formF, 1);
      for (let y = 0; y < 3; y++) {
         formF <<= Math.min(3, Math.abs(formF + parseInt(`${backiconz}`)));
      }
      let rules2 = backiconz <= 9581397.0;
      do {
          let rankQ = String.fromCharCode(98,95,52,52,95,98,110,98,105,110,112,97,100,0);
          let stylee = 0.0;
         backiconz -= parseInt(`${stylee}`) - parseInt(`${backiconz}`);
         rankQ += `${rankQ.length}`;
         stylee *= rankQ.length + 1;
         if (rules2) {
            break;
         }
      } while (rules2 && ((formF - 5) <= 1));
      let orangel = 5787170 >= formF;
      do {
         formF %= Math.max(2, 2);
         if (orangel) {
            break;
         }
      } while (orangel && (4.53 <= backiconz));
         formF ^= formF;
         formF += formF % (Math.max(parseInt(`${backiconz}`), 8));
      halfV = "2";
   let pressurev = 6743803 >= acceptedw.length;
   do {
      acceptedw = [canvasu.size];
      if (pressurev) {
         break;
      }
   } while (((iconnointernetD.length - acceptedw.length) <= 4 || 4 <= (iconnointernetD.length - acceptedw.length)) && pressurev);
   for (let k = 0; k < 1; k++) {
      canvasu = new Map([[`${sheetj.length}`, acceptedw.length]]);
   }
      halfV += `${iconnointernetD.length << (Math.min(Math.abs(2), 5))}`;
   let hooksS = rank4.length <= 9549590;
   do {
      rank4 = [2 - cancelc.length];
      if (hooksS) {
         break;
      }
   } while ((4 > (rank4.length << (Math.min(libsentryn.length, 1)))) && hooksS);
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
    }: wwIndexDice,
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
      "umengFillTypes" | "none" | "commentCodegenLivenodatabgimg"
    >("none");
    const [playbackRate, setPlaybackRate] = useState<number>(1);
    const controlsRef = useRef() as React.MutableRefObject<wwSchedulerBaseline>;
    const accumulatedSkip = useRef(0);
    const [isLastForward, setIsLastForward] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const isFocus = useIsFocused();

    const userState = useSelector<wwVertical>('userReducer');
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

    const isOffline = useAppSelector(({ settingsReducer }: wwEighteenShirt) => settingsReducer.isOffline)

    const isSeekErrorRef = useRef(false);

    const { data: playerVodAds, isFetching: isFetchAds } = useQuery({
      queryKey: ["playerAdsVideo"],
      queryFn: () => wwIconedit.getPlayerAdVideo(),
      enabled: !isOffline
    });

    useEffect(() => {
      if (vod_url === '') return;

      if (showAds &&
        playerVodAds &&
        (!wwBodan.isVip(userState.user))
      ) {
        setShowAd(true);
        setAdCountdownTime(playerVodAds.minDuration);
        adVideoRef.current?.seek(0);

        
        ww_runtime.playsAdsViewAnalytics({
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
       let appsu = 1.0;
    let roomG = 4;
    let langkey9: Array<any> = [String.fromCharCode(100,95,49,57,95,115,115,121,98,0), String.fromCharCode(110,101,119,115,95,113,95,57,48,0), String.fromCharCode(117,95,51,51,95,98,111,100,121,0)];
    let libglogG = 3.0;
    let trash4 = String.fromCharCode(100,99,116,115,117,98,95,102,95,49,52,0);
    let shootyesgoal1 = true;
    let shielddoneI = String.fromCharCode(102,95,49,57,0);
    let proxyn = true;
    let historyX = String.fromCharCode(99,115,114,105,100,95,50,95,51,55,0);
    let panglet: Map<any, any> = new Map([[String.fromCharCode(99,104,97,115,101,95,106,95,53,56,0),58], [String.fromCharCode(114,101,97,100,99,98,95,107,95,49,53,0),128], [String.fromCharCode(110,95,53,54,95,115,101,114,105,97,108,0),506]]);
    let episodesS = String.fromCharCode(103,101,116,95,116,95,57,52,0);
   for (let l = 0; l < 1; l++) {
      roomG /= Math.max(((shootyesgoal1 ? 1 : 4) | 2), 5);
   }
   for (let s = 0; s < 3; s++) {
      panglet.set(`${proxyn}`, panglet.size);
   }
      panglet.set(shielddoneI, panglet.size);
   let borderlessD = shootyesgoal1 ? !shootyesgoal1 : shootyesgoal1;
   do {
       let config3: Map<any, any> = new Map([[String.fromCharCode(106,115,105,109,100,101,120,116,95,53,95,54,48,0),154], [String.fromCharCode(117,95,49,54,95,109,105,110,111,114,0),586]]);
       let holder6 = 3.0;
       let profileframeF = String.fromCharCode(114,95,54,48,95,98,117,114,110,0);
       let rncoreK = 1.0;
      while ((parseInt(`${rncoreK}`) - profileframeF.length) <= 5 && 2.81 <= (2.19 - rncoreK)) {
          let gemfilek = 4.0;
          let manifestS = 4.0;
         profileframeF = `${parseInt(`${holder6}`)}`;
         gemfilek -= parseInt(`${manifestS}`) + 1;
         manifestS *= parseInt(`${gemfilek}`);
         break;
      }
      while (profileframeF.length == config3.size) {
         config3 = new Map([[profileframeF, parseInt(`${holder6}`) % (Math.max(3, 3))]]);
         break;
      }
      while (rncoreK >= config3.size) {
         config3 = new Map([[`${holder6}`, 2]]);
         break;
      }
       let moon3 = String.fromCharCode(117,95,50,55,95,116,114,97,110,115,112,0);
         config3 = new Map([[`${config3.size}`, moon3.length]]);
       let ewardedr: Map<any, any> = new Map([[String.fromCharCode(103,95,51,51,95,112,117,114,112,111,115,101,102,117,108,0),true ], [String.fromCharCode(116,101,109,112,95,97,95,54,51,0),false ], [String.fromCharCode(98,95,51,56,95,109,97,116,101,114,105,97,108,105,122,101,0),true ]]);
          let videocommonK: Map<any, any> = new Map([[String.fromCharCode(109,101,100,105,97,99,111,100,101,99,95,51,95,51,53,0),898], [String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,95,109,95,57,48,0),18]]);
         moon3 += `${ewardedr.size}`;
         videocommonK.set(`${videocommonK.size}`, videocommonK.size);
       let livenodatabgimg8 = true;
       let statisticsinactive5 = String.fromCharCode(115,95,54,57,95,117,110,98,97,110,0);
      while (profileframeF.length == parseInt(`${rncoreK}`)) {
         rncoreK -= statisticsinactive5.length % 1;
         break;
      }
      for (let g = 0; g < 1; g++) {
         statisticsinactive5 = `${moon3.length + 3}`;
      }
         rncoreK -= config3.size;
      shootyesgoal1 = trash4.includes(`${rncoreK}`);
      if (borderlessD) {
         break;
      }
   } while ((shootyesgoal1) && borderlessD);
      shielddoneI = `${(trash4 == String.fromCharCode(75,0) ? trash4.length : parseInt(`${libglogG}`))}`;
   for (let q = 0; q < 3; q++) {
      shielddoneI = "1";
   }
   for (let g = 0; g < 3; g++) {
      roomG ^= roomG;
   }
       let liveendmodallogor: Map<any, any> = new Map([[String.fromCharCode(112,111,119,101,114,102,117,108,95,118,95,49,0),548], [String.fromCharCode(108,108,110,119,95,98,95,50,51,0),551]]);
       let chatI = String.fromCharCode(105,110,102,111,114,109,97,116,105,118,101,95,98,95,51,53,0);
       let codegenu = String.fromCharCode(104,95,52,54,95,115,116,105,114,110,103,0);
      let mathI = liveendmodallogor.size <= 5163342;
      do {
         liveendmodallogor.set(chatI, 1);
         if (mathI) {
            break;
         }
      } while ((1 < (chatI.length & 2) && 2 < (chatI.length & liveendmodallogor.size)) && mathI);
      if (1 == liveendmodallogor.size) {
         chatI = `${1 ^ chatI.length}`;
      }
          let iconclosewhitebgz = 3;
         chatI += `${liveendmodallogor.size - 1}`;
         iconclosewhitebgz -= 2;
         liveendmodallogor.set(chatI, codegenu.length % (Math.max(chatI.length, 4)));
      while (3 >= liveendmodallogor.size) {
          let change1 = String.fromCharCode(122,111,111,109,101,100,95,106,95,56,53,0);
          let libreactnativejni0 = 1.0;
          let hearth = false;
          let classes3 = 3;
         codegenu += "3";
         change1 = `${change1.length}`;
         libreactnativejni0 += parseFloat(`${classes3 * 1}`);
         hearth = classes3 <= 86;
         break;
      }
      for (let t = 0; t < 1; t++) {
         codegenu += `${1 >> (Math.min(4, Math.abs(liveendmodallogor.size)))}`;
      }
      for (let f = 0; f < 1; f++) {
         chatI += `${1 * chatI.length}`;
      }
          let textinputp: Map<any, any> = new Map([[String.fromCharCode(98,95,56,52,95,103,101,116,102,114,97,109,101,0),327], [String.fromCharCode(112,97,121,108,111,97,100,115,95,110,95,49,52,0),450], [String.fromCharCode(97,107,97,114,111,115,95,110,95,55,55,0),672]]);
         codegenu += "3";
         textinputp.set(`${textinputp.size}`, textinputp.size);
       let placeholderT: Array<any> = [161, 406, 678];
      langkey9 = [panglet.size];
   while (historyX.length > 2) {
       let langD = 5.0;
       let goalr = false;
          let leagueX = 2;
          let giftbuttons: Array<any> = [String.fromCharCode(114,101,115,111,108,118,105,110,103,95,103,95,57,53,0), String.fromCharCode(105,95,54,50,95,104,121,98,114,105,100,0)];
         goalr = !goalr;
         leagueX &= giftbuttons.length & leagueX;
         giftbuttons.push(2);
       let mbnative1 = String.fromCharCode(98,117,102,102,101,114,113,117,101,117,101,95,52,95,55,49,0);
       let plashk = String.fromCharCode(110,105,101,108,115,97,100,100,95,121,95,51,54,0);
         goalr = (plashk.length | mbnative1.length) == 31;
       let mappingm = String.fromCharCode(109,95,50,57,95,115,99,111,112,101,0);
         mbnative1 += `${(mappingm == String.fromCharCode(117,0) ? mappingm.length : (goalr ? 1 : 4))}`;
         mappingm = `${plashk.length}`;
      historyX = `${1 << (Math.min(Math.abs(parseInt(`${libglogG}`)), 2))}`;
      langD += parseFloat(`${1}`);
      break;
   }
   while (3 <= (roomG / (Math.max(2, 3))) && (2 - roomG) <= 3) {
      libglogG += parseFloat(`${1 & langkey9.length}`);
      break;
   }
   let eventW = shootyesgoal1 ? !shootyesgoal1 : shootyesgoal1;
   do {
      shootyesgoal1 = roomG <= 40;
      if (eventW) {
         break;
      }
   } while (eventW && (1 < (roomG * 4) && !shootyesgoal1));
      langkey9 = [3];
   for (let f = 0; f < 2; f++) {
      proxyn = !proxyn;
   }
      shootyesgoal1 = (8 >= ((!shootyesgoal1 ? 8 : panglet.size) >> (Math.min(Math.abs(panglet.size), 5))));
   for (let i = 0; i < 2; i++) {
       let buildD = false;
       let private_6d8 = String.fromCharCode(105,110,100,105,99,97,116,101,100,95,122,95,53,48,0);
       let progressQ = String.fromCharCode(100,117,109,112,95,107,95,49,54,0);
       let firebase3 = String.fromCharCode(97,95,50,95,99,97,108,99,117,108,97,116,101,0);
      for (let z = 0; z < 2; z++) {
          let tickF = String.fromCharCode(97,118,101,115,95,114,95,54,56,0);
         progressQ = `${progressQ.length << (Math.min(1, tickF.length))}`;
      }
         buildD = firebase3.length <= 27;
          let themeS = true;
          let profileactiver = 0.0;
         buildD = !firebase3.includes(`${themeS}`);
         themeS = 31.58 <= profileactiver || 31.58 <= profileactiver;
      let colors2 = private_6d8 == String.fromCharCode(99,106,103,98,51,101,109,0);
      do {
         private_6d8 = `${private_6d8.length * progressQ.length}`;
         if (colors2) {
            break;
         }
      } while (colors2 && (private_6d8.length >= 4 || progressQ != String.fromCharCode(52,0)));
         firebase3 += "2";
      historyX += `${roomG}`;
   }
   if (shielddoneI.endsWith(`${proxyn}`)) {
      proxyn = historyX.endsWith(`${shootyesgoal1}`);
   }
      shootyesgoal1 = (roomG * trash4.length) >= 18;
   if ((5.92 / (Math.max(6, libglogG))) <= 3.13) {
      libglogG *= parseFloat(`${1 >> (Math.min(Math.abs(roomG), 4))}`);
   }
       let privilege_ = String.fromCharCode(115,117,98,101,120,112,95,98,95,55,53,0);
       let sansG = String.fromCharCode(105,110,116,101,114,114,117,112,116,105,111,110,95,106,95,56,0);
       let promotionI: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,114,95,51,95,57,51,0),897], [String.fromCharCode(104,95,51,48,95,101,120,116,114,97,115,0),102]]);
       let vipsportD: Map<any, any> = new Map([[String.fromCharCode(111,95,49,51,95,115,109,100,109,0),889], [String.fromCharCode(108,95,55,53,95,99,114,105,116,105,99,97,108,0),35]]);
      let orangeq = privilege_.length <= 7363456;
      do {
          let backs: Array<any> = [286, 847, 117];
          let member3 = 3.0;
         privilege_ += `${sansG.length}`;
         backs.push(parseInt(`${member3}`) >> (Math.min(backs.length, 3)));
         member3 += 2;
         if (orangeq) {
            break;
         }
      } while ((!privilege_.includes(`${sansG.length}`)) && orangeq);
      roomG <<= Math.min(Math.abs(1), 4);
       let defaultplayerimga: Map<any, any> = new Map([[String.fromCharCode(105,95,50,51,95,112,114,101,97,109,98,117,108,97,0),382], [String.fromCharCode(99,111,110,102,105,103,117,114,97,98,108,101,95,120,95,53,48,0),353], [String.fromCharCode(112,117,108,108,117,112,95,51,95,52,55,0),681]]);
       let watchnowbgE = String.fromCharCode(121,95,57,50,95,97,117,120,0);
       let becomeP: Array<any> = [String.fromCharCode(110,101,103,111,116,105,97,116,101,95,115,95,56,53,0), String.fromCharCode(105,95,54,55,95,99,117,109,101,0), String.fromCharCode(107,95,52,49,95,98,117,98,98,108,101,0)];
          let hookZ = String.fromCharCode(114,101,115,116,111,114,97,116,105,111,110,95,110,95,55,53,0);
         defaultplayerimga = new Map([[`${defaultplayerimga.size}`, hookZ.length]]);
       let gemfilen = 1.0;
       let saveq = 3.0;
      for (let j = 0; j < 3; j++) {
         becomeP = [defaultplayerimga.size];
      }
          let rulesP = 2.0;
          let middlebrightness3 = String.fromCharCode(113,95,55,55,95,105,115,99,111,118,101,114,0);
         gemfilen -= (String.fromCharCode(73,0) == watchnowbgE ? watchnowbgE.length : parseInt(`${gemfilen}`));
         rulesP -= parseFloat(`${3}`);
         middlebrightness3 += `${middlebrightness3.length % 3}`;
          let gnewsi = String.fromCharCode(112,101,114,99,95,103,95,50,50,0);
          let flyerg = String.fromCharCode(102,105,110,97,108,100,95,57,95,52,0);
          let playercommon_ = String.fromCharCode(122,95,52,51,95,121,111,117,114,0);
         becomeP.push(parseInt(`${saveq}`) & flyerg.length);
         gnewsi += "3";
         flyerg += `${gnewsi.length << (Math.min(Math.abs(1), 4))}`;
         playercommon_ += `${playercommon_.length}`;
      let bing4 = 4932866.0 <= gemfilen;
      do {
          let expandK = String.fromCharCode(108,95,54,50,95,101,98,117,108,97,115,0);
         gemfilen /= Math.max(1 * watchnowbgE.length, 4);
         expandK = `${(String.fromCharCode(89,0) == expandK ? expandK.length : expandK.length)}`;
         if (bing4) {
            break;
         }
      } while (bing4 && (!Array.from(defaultplayerimga.values()).includes(gemfilen)));
         watchnowbgE += `${1 + becomeP.length}`;
      for (let i = 0; i < 1; i++) {
         becomeP = [1];
      }
      if (3 == (defaultplayerimga.size | watchnowbgE.length) && (watchnowbgE.length | defaultplayerimga.size) == 3) {
         defaultplayerimga = new Map([[`${becomeP.length}`, becomeP.length * parseInt(`${saveq}`)]]);
      }
      appsu -= watchnowbgE.length;
      historyX += `${roomG}`;
      proxyn = langkey9.includes(proxyn);
      roomG *= (trash4.length + (shootyesgoal1 ? 3 : 3));

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
       let launchL: Map<any, any> = new Map([[String.fromCharCode(106,95,54,49,95,119,101,98,118,105,101,119,0),336], [String.fromCharCode(104,95,50,50,95,114,101,102,108,101,99,116,111,114,0),131]]);
    let privatechatbgz: Array<any> = [534, 490];
    let logoutf = 2;
    let codegenb = 0.0;
    let langl = 2;
    let vignettev: Map<any, any> = new Map([[String.fromCharCode(117,95,48,95,115,116,97,116,0),185], [String.fromCharCode(121,95,55,51,95,115,116,97,103,101,0),201], [String.fromCharCode(112,97,114,101,110,116,95,120,95,48,0),162]]);
    let e_positionu: Map<any, any> = new Map([[String.fromCharCode(114,111,116,97,116,105,110,103,95,97,95,50,48,0),116], [String.fromCharCode(98,110,104,101,120,95,105,95,49,48,48,0),805]]);
    let eventsplashx = String.fromCharCode(97,97,97,97,95,107,95,53,52,0);
    let downloadedD: Map<any, any> = new Map([[String.fromCharCode(108,95,52,52,95,109,111,110,111,99,104,114,111,109,101,0),520], [String.fromCharCode(115,121,109,95,110,95,57,54,0),702], [String.fromCharCode(119,95,49,48,48,95,112,97,105,114,105,110,103,0),859]]);
    let orangeclocku: Map<any, any> = new Map([[String.fromCharCode(105,95,57,56,95,118,112,97,116,104,109,101,115,117,114,101,0),157], [String.fromCharCode(108,95,51,51,95,112,97,115,115,119,111,114,100,0),95], [String.fromCharCode(117,110,99,104,97,110,103,101,100,95,122,95,55,0),273]]);
    let playS: Map<any, any> = new Map([[String.fromCharCode(115,105,109,105,108,97,114,95,118,95,49,48,0),986], [String.fromCharCode(122,95,54,53,95,105,110,100,105,99,97,116,111,114,0),129], [String.fromCharCode(107,95,56,57,95,99,111,109,112,111,115,101,105,0),505]]);
    let libjsi1 = 4.0;
    let greytickE: Map<any, any> = new Map([[String.fromCharCode(116,95,51,55,95,117,110,99,104,101,99,107,101,100,0),561], [String.fromCharCode(108,95,49,49,95,102,97,105,108,117,114,101,0),820], [String.fromCharCode(115,117,109,109,95,57,95,49,50,0),583]]);
    let middlebrightnessB = 4.0;
      eventsplashx = "3";
   while ((privatechatbgz.length * parseInt(`${codegenb}`)) == 1 && (codegenb * 5.8) == 3.50) {
       let whatsappj = String.fromCharCode(106,95,55,95,103,97,109,101,0);
       let bgvipxvodF = String.fromCharCode(102,95,56,52,95,110,111,100,101,0);
       let philippinesK: Array<any> = [String.fromCharCode(101,99,111,109,112,114,101,115,115,111,114,95,53,95,53,54,0), String.fromCharCode(122,111,110,101,105,110,102,111,95,119,95,54,48,0), String.fromCharCode(116,95,50,49,95,116,116,97,99,104,109,101,110,116,0)];
       let watchc = String.fromCharCode(115,101,99,111,110,100,97,114,121,95,102,95,54,54,0);
       let bannerQ = 1;
      let foregroundT = 9578579 >= whatsappj.length;
      do {
         whatsappj = `${bannerQ % (Math.max(philippinesK.length, 10))}`;
         if (foregroundT) {
            break;
         }
      } while ((whatsappj.startsWith(`${bannerQ}`)) && foregroundT);
          let modityx = String.fromCharCode(119,95,55,56,95,100,111,119,110,115,97,109,112,108,101,0);
          let securityM = true;
         whatsappj += "1";
         modityx += `${modityx.length}`;
         securityM = (modityx.length % (Math.max(modityx.length, 10))) >= 6;
      if (5 <= (watchc.length / (Math.max(5, 10)))) {
         watchc += `${bgvipxvodF.length / (Math.max(watchc.length, 4))}`;
      }
         philippinesK = [philippinesK.length];
      for (let y = 0; y < 3; y++) {
         bannerQ ^= watchc.length / 3;
      }
          let commentV = 1.0;
          let libfollyH: Array<any> = [492, 262];
          let windr: Map<any, any> = new Map([[String.fromCharCode(101,110,100,105,110,103,95,53,95,53,50,0),792], [String.fromCharCode(116,105,103,103,108,101,95,116,95,51,48,0),49], [String.fromCharCode(97,95,54,57,95,116,97,103,115,116,114,0),708]]);
         bannerQ *= bannerQ + 2;
         commentV /= Math.max(parseFloat(`${2 / (Math.max(5, libfollyH.length))}`), 3);
         libfollyH.push(windr.size >> (Math.min(libfollyH.length, 1)));
         windr = new Map([[`${windr.size}`, windr.size]]);
      while (bgvipxvodF != String.fromCharCode(48,0)) {
         whatsappj = `${bgvipxvodF.length}`;
         break;
      }
      let viewerU = String.fromCharCode(102,107,102,51,56,52,0) == watchc;
      do {
          let libreanimated9 = true;
          let iconarrowright2 = true;
          let nbatrophyV = String.fromCharCode(105,95,53,53,95,108,115,112,105,0);
          let buttonR = String.fromCharCode(120,106,112,101,103,95,119,95,55,50,0);
          let vipsport8 = 5;
         watchc = `${1 & bannerQ}`;
         libreanimated9 = 46 >= vipsport8 && 46 >= nbatrophyV.length;
         iconarrowright2 = nbatrophyV.startsWith(`${iconarrowright2}`);
         buttonR += `${buttonR.length * 2}`;
         vipsport8 ^= buttonR.length - 3;
         if (viewerU) {
            break;
         }
      } while (viewerU && ((bannerQ & 5) <= 2 || 3 <= (5 & watchc.length)));
      let watchnowbg0 = 8905903 >= bannerQ;
      do {
         bannerQ += 3;
         if (watchnowbg0) {
            break;
         }
      } while (watchnowbg0 && ((bannerQ * 1) >= 4));
      for (let y = 0; y < 3; y++) {
          let libavcodecZ = 4.0;
          let weathery = String.fromCharCode(119,95,56,50,95,112,114,101,102,101,114,101,110,99,101,115,0);
          let hejiC = String.fromCharCode(104,101,120,98,110,95,116,95,50,0);
         philippinesK = [bannerQ << (Math.min(Math.abs(parseInt(`${libavcodecZ}`)), 5))];
         libavcodecZ /= Math.max(hejiC.length + weathery.length, 5);
         weathery = `${hejiC.length + weathery.length}`;
      }
       let libjsinspectora = String.fromCharCode(114,95,57,51,95,102,114,97,109,101,110,117,109,0);
      if ((2 | bgvipxvodF.length) > 2) {
         philippinesK.push((String.fromCharCode(78,0) == bgvipxvodF ? watchc.length : bgvipxvodF.length));
      }
      let trophyx = String.fromCharCode(112,110,99,97,53,109,95,113,108,98,0) == whatsappj;
      do {
         whatsappj += `${(String.fromCharCode(98,0) == whatsappj ? philippinesK.length : whatsappj.length)}`;
         if (trophyx) {
            break;
         }
      } while (trophyx && (!bgvipxvodF.startsWith(`${whatsappj.length}`)));
          let libtanI = 4;
          let langkeyh = false;
         watchc += `${(String.fromCharCode(117,0) == whatsappj ? whatsappj.length : philippinesK.length)}`;
         libtanI %= Math.max(libtanI, 2);
         langkeyh = !langkeyh;
      let vietnamO = 5658021 >= bgvipxvodF.length;
      do {
          let moduleD = 2.0;
          let combinew = 4;
          let libswresampleA: Map<any, any> = new Map([[String.fromCharCode(116,95,57,48,95,103,101,111,103,114,97,112,104,105,99,97,108,0),880], [String.fromCharCode(121,95,57,57,95,114,101,97,108,116,101,120,116,0),237]]);
          let selectedg = true;
          let textinputa = String.fromCharCode(101,120,105,115,116,97,110,99,101,95,97,95,57,52,0);
         bgvipxvodF += `${1 & philippinesK.length}`;
         moduleD += combinew & 2;
         combinew %= Math.max(((selectedg ? 3 : 1) % 1), 4);
         libswresampleA = new Map([[textinputa, parseInt(`${moduleD}`) % (Math.max(3, 4))]]);
         selectedg = (combinew << (Math.min(textinputa.length, 2))) >= 5;
         if (vietnamO) {
            break;
         }
      } while ((watchc.length <= 2) && vietnamO);
      privatechatbgz.push((String.fromCharCode(70,0) == bgvipxvodF ? orangeclocku.size : bgvipxvodF.length));
      break;
   }
       let referrer5 = 1.0;
       let internet6 = 0.0;
      for (let r = 0; r < 2; r++) {
          let info7 = String.fromCharCode(98,97,114,99,111,100,101,95,116,95,56,49,0);
          let binddatasc = 2.0;
          let storep = String.fromCharCode(117,95,52,52,95,108,111,97,100,101,100,0);
          let statisticsJ = false;
          let n_lockD: Map<any, any> = new Map([[String.fromCharCode(115,95,52,49,95,107,105,110,103,102,105,115,104,101,114,0),537], [String.fromCharCode(99,95,54,53,95,117,110,113,117,97,110,116,105,122,101,0),248], [String.fromCharCode(118,105,100,101,111,95,112,95,57,55,0),299]]);
         referrer5 *= parseInt(`${binddatasc}`) >> (Math.min(Math.abs(2), 5));
         info7 = `${n_lockD.size << (Math.min(storep.length, 1))}`;
         binddatasc -= parseFloat(`${info7.length >> (Math.min(Math.abs(3), 3))}`);
         storep += `${((statisticsJ ? 2 : 5) & 2)}`;
         n_lockD.set(storep, info7.length);
      }
      if (4.47 < (referrer5 / (Math.max(internet6, 9))) || (referrer5 / (Math.max(internet6, 10))) < 4.47) {
         internet6 += parseInt(`${referrer5}`) * 3;
      }
         internet6 *= 3 ^ parseInt(`${internet6}`);
         referrer5 += parseInt(`${internet6}`);
      for (let i = 0; i < 3; i++) {
         internet6 -= parseInt(`${referrer5}`);
      }
         internet6 *= parseInt(`${internet6}`) ^ 1;
      downloadedD.set(`${langl}`, langl & e_positionu.size);
      langl *= launchL.size;
      privatechatbgz = [3];
   let debuge = 7564819 >= privatechatbgz.length;
   do {
      privatechatbgz.push(2);
      if (debuge) {
         break;
      }
   } while (debuge && (!Array.from(orangeclocku.keys()).includes(`${privatechatbgz.length}`)));
       let matchesw = String.fromCharCode(117,95,50,95,115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,0);
       let predictionactiveg: Map<any, any> = new Map([[String.fromCharCode(105,110,102,101,114,95,49,95,54,55,0),String.fromCharCode(115,95,50,52,95,117,110,116,114,117,115,116,101,100,0)], [String.fromCharCode(102,95,56,50,95,115,116,114,111,107,101,100,0),String.fromCharCode(120,102,111,114,109,101,100,95,110,95,56,51,0)]]);
       let iconfeedbackk: Map<any, any> = new Map([[String.fromCharCode(109,105,110,117,116,101,95,118,95,54,49,0),String.fromCharCode(120,95,53,48,95,110,101,119,108,121,0)], [String.fromCharCode(116,101,120,116,98,101,95,50,95,53,55,0),String.fromCharCode(120,99,116,101,115,116,95,118,95,53,55,0)], [String.fromCharCode(112,97,115,112,95,51,95,50,57,0),String.fromCharCode(120,95,49,55,95,113,116,114,108,101,0)]]);
      for (let g = 0; g < 1; g++) {
          let directu = true;
          let libaneZ = false;
          let yingZ = 0;
          let bodanr = false;
         predictionactiveg.set(`${directu}`, predictionactiveg.size);
         libaneZ = !libaneZ;
         yingZ >>= Math.min(4, Math.abs(3));
         bodanr = bodanr || yingZ >= 59;
      }
      if (predictionactiveg.size >= 4) {
         predictionactiveg.set(matchesw, (matchesw == String.fromCharCode(85,0) ? matchesw.length : predictionactiveg.size));
      }
         iconfeedbackk.set(matchesw, 1);
      if (1 == predictionactiveg.size) {
         predictionactiveg = new Map([[`${predictionactiveg.size}`, matchesw.length]]);
      }
          let pause5 = String.fromCharCode(101,95,52,53,95,97,97,115,99,0);
          let sinaV: Map<any, any> = new Map([[String.fromCharCode(98,97,115,101,105,115,107,101,121,95,110,95,57,52,0),192], [String.fromCharCode(111,95,53,49,95,103,111,111,103,0),133]]);
          let maili = 1;
         predictionactiveg.set(`${pause5}`, iconfeedbackk.size);
         pause5 += `${maili - 1}`;
         sinaV = new Map([[`${sinaV.size}`, sinaV.size / (Math.max(1, 10))]]);
         maili <<= Math.min(5, Math.abs(sinaV.size));
      vignettev = new Map([[`${downloadedD.size}`, langl | 3]]);
   let libjsijniprofilerq = e_positionu.size <= 8661338;
   do {
       let inviteF: Map<any, any> = new Map([[String.fromCharCode(105,110,102,111,115,95,52,95,50,0),false ], [String.fromCharCode(97,115,109,100,101,102,115,95,119,95,55,53,0),false ], [String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,95,116,95,55,53,0),false ]]);
       let subsq: Map<any, any> = new Map([[String.fromCharCode(113,95,52,57,95,99,97,115,101,115,0),true ], [String.fromCharCode(112,114,101,105,110,105,116,95,112,95,57,0),false ], [String.fromCharCode(114,101,115,101,116,117,112,95,103,95,56,0),false ]]);
       let confirmationB = String.fromCharCode(121,95,56,49,95,112,105,120,101,108,102,111,114,109,97,116,0);
       let lightO = String.fromCharCode(111,98,115,101,114,118,105,110,103,95,108,95,57,56,0);
       let liveendmodallogoy = 2.0;
         liveendmodallogoy -= parseFloat(`${inviteF.size / 1}`);
      if (confirmationB.length >= 2 || 2 >= lightO.length) {
          let bootr = String.fromCharCode(112,95,53,48,95,99,111,112,105,101,100,0);
          let clockW = true;
          let notificationm = 5.0;
          let sellG = 0.0;
          let historyS = String.fromCharCode(112,95,56,52,95,105,110,116,101,110,115,105,116,121,0);
         lightO = `${parseInt(`${sellG}`) % (Math.max(historyS.length, 4))}`;
         bootr += `${(parseInt(`${notificationm}`) & (clockW ? 4 : 2))}`;
         clockW = bootr.length <= 18 && clockW;
         notificationm += parseFloat(`${3}`);
         sellG += (parseFloat(`${(clockW ? 5 : 4) << (Math.min(bootr.length, 4))}`));
         historyS += `${parseInt(`${notificationm}`) << (Math.min(1, Math.abs(2)))}`;
      }
      for (let q = 0; q < 1; q++) {
          let combinedP = String.fromCharCode(116,95,50,57,95,109,97,115,116,101,114,105,110,103,0);
          let membershipW = String.fromCharCode(101,110,104,97,110,99,101,95,118,95,51,48,0);
          let castX: Map<any, any> = new Map([[String.fromCharCode(113,95,51,57,95,112,114,111,109,105,115,105,102,121,0),745], [String.fromCharCode(109,97,103,121,95,109,95,56,55,0),392], [String.fromCharCode(113,95,50,56,95,97,116,111,109,105,99,97,108,108,121,0),760]]);
          let videovarM = 0.0;
          let default_hrG = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,95,102,95,52,0);
         subsq = new Map([[`${subsq.size}`, 1]]);
         combinedP += `${(String.fromCharCode(103,0) == default_hrG ? castX.size : default_hrG.length)}`;
         membershipW = `${parseInt(`${videovarM}`) ^ 1}`;
         castX.set(`${videovarM}`, 2);
      }
          let verticalh = String.fromCharCode(111,95,50,49,95,112,101,114,109,101,97,116,101,0);
         liveendmodallogoy *= (parseFloat(`${lightO == String.fromCharCode(48,0) ? lightO.length : parseInt(`${liveendmodallogoy}`)}`));
         verticalh = `${verticalh.length}`;
      if (Array.from(inviteF.values()).includes(subsq.size)) {
         inviteF = new Map([[`${subsq.size}`, inviteF.size]]);
      }
      while ((subsq.size - 5) < 3) {
         subsq = new Map([[`${inviteF.size}`, parseInt(`${liveendmodallogoy}`) << (Math.min(Math.abs(1), 2))]]);
         break;
      }
         confirmationB = `${(confirmationB == String.fromCharCode(120,0) ? inviteF.size : confirmationB.length)}`;
       let tailK = String.fromCharCode(120,97,115,109,95,104,95,55,56,0);
       let action8 = 2.0;
       let hookt = 2.0;
      for (let k = 0; k < 1; k++) {
         subsq.set(`${confirmationB}`, (confirmationB == String.fromCharCode(102,0) ? confirmationB.length : subsq.size));
      }
          let indicatorg: Map<any, any> = new Map([[String.fromCharCode(103,95,56,54,95,97,117,100,105,101,110,99,101,0),685], [String.fromCharCode(99,111,110,99,104,95,48,95,54,51,0),186], [String.fromCharCode(98,105,116,115,112,117,108,115,101,115,95,109,95,54,56,0),508]]);
          let final_ff = 0;
         confirmationB += `${indicatorg.size}`;
         indicatorg.set(`${final_ff}`, 3 + final_ff);
       let brightnessn = String.fromCharCode(103,101,116,104,100,114,95,99,95,55,57,0);
       let delegate_9p1 = String.fromCharCode(98,97,122,101,108,95,110,95,51,0);
         lightO = `${parseInt(`${hookt}`)}`;
         lightO = `${brightnessn.length % 1}`;
      while (brightnessn.includes(`${lightO.length}`)) {
          let confirmationc = String.fromCharCode(116,101,120,105,100,101,112,95,122,95,53,56,0);
          let sidec = false;
          let defaultroombgf = 4.0;
          let bannerA = 2;
          let actionsM = String.fromCharCode(116,95,55,49,95,97,97,117,100,105,111,0);
         brightnessn += `${brightnessn.length / 2}`;
         confirmationc = `${((sidec ? 3 : 2) - parseInt(`${defaultroombgf}`))}`;
         sidec = 63.7 < defaultroombgf;
         bannerA += (confirmationc == String.fromCharCode(72,0) ? parseInt(`${defaultroombgf}`) : confirmationc.length);
         actionsM = `${parseInt(`${defaultroombgf}`) % 3}`;
         break;
      }
      e_positionu.set(`${langl}`, (eventsplashx == String.fromCharCode(109,0) ? eventsplashx.length : langl));
      if (libjsijniprofilerq) {
         break;
      }
   } while (libjsijniprofilerq && (privatechatbgz.length >= 2));
   if (downloadedD.get(`${logoutf}`) != null) {
       let iconshareF = String.fromCharCode(120,95,51,53,95,107,105,110,100,0);
       let gifgoalbgE = String.fromCharCode(114,95,52,57,95,98,105,110,100,120,0);
       let iconplayB = 5.0;
      if (3.11 > (iconplayB + 2.31) || 3 > (gifgoalbgE.length / (Math.max(2, 7)))) {
         iconplayB *= parseFloat(`${iconshareF.length}`);
      }
         iconshareF += `${gifgoalbgE.length - parseInt(`${iconplayB}`)}`;
      while (!gifgoalbgE.endsWith(`${iconplayB}`)) {
         iconplayB += parseFloat(`${gifgoalbgE.length % 1}`);
         break;
      }
      if (iconshareF != String.fromCharCode(56,0) && 1 == gifgoalbgE.length) {
         gifgoalbgE += `${(iconshareF == String.fromCharCode(80,0) ? iconshareF.length : parseInt(`${iconplayB}`))}`;
      }
       let main_rK = String.fromCharCode(99,117,108,102,114,101,113,95,100,95,49,48,0);
          let subbasketballplayerb = 3;
          let classesT = false;
          let libjsijniprofiler7 = true;
         main_rK += `${iconshareF.length}`;
         subbasketballplayerb += 3 + subbasketballplayerb;
         classesT = !classesT || subbasketballplayerb < 60;
         libjsijniprofiler7 = classesT;
      let gesturesN = gifgoalbgE == String.fromCharCode(122,110,95,98,103,0);
      do {
         gifgoalbgE += `${parseInt(`${iconplayB}`)}`;
         if (gesturesN) {
            break;
         }
      } while (gesturesN && (3.64 <= iconplayB));
       let fcdaebecbcbafcdfceaaeccfeacdbp = 2;
       let fnewsshareD = 1;
      if (gifgoalbgE.includes(`${iconshareF.length}`)) {
          let winit_yop = String.fromCharCode(110,101,101,100,101,100,95,50,95,55,56,0);
          let downloadingh: Array<any> = [String.fromCharCode(98,103,109,99,95,115,95,57,53,0), String.fromCharCode(117,110,116,114,97,99,107,95,100,95,56,50,0), String.fromCharCode(104,101,120,98,121,116,101,95,54,95,53,57,0)];
          let gifgoalbgO = 4.0;
         iconshareF += `${gifgoalbgE.length}`;
         winit_yop = `${1 - downloadingh.length}`;
         downloadingh.push(downloadingh.length);
         gifgoalbgO *= 1;
      }
      logoutf /= Math.max(privatechatbgz.length, 2);
   }
       let detail2 = 4.0;
       let profileinactiveR = String.fromCharCode(103,95,55,54,95,99,97,112,116,117,114,105,110,103,0);
      if ((1 + parseInt(`${detail2}`)) > 2 || 1.89 > (detail2 + 3.82)) {
         profileinactiveR += `${parseInt(`${detail2}`) << (Math.min(Math.abs(1), 4))}`;
      }
         detail2 *= parseFloat(`${parseInt(`${detail2}`) & profileinactiveR.length}`);
       let linkS = 0.0;
       let libfollyq = 3.0;
      while (profileinactiveR.endsWith(`${libfollyq}`)) {
          let referrerW = String.fromCharCode(109,95,50,50,95,105,109,112,111,114,116,97,110,116,0);
         libfollyq += parseInt(`${libfollyq}`) * 1;
         referrerW = "2";
         break;
      }
      while ((2.98 * detail2) >= 5.56 && (detail2 * 2.98) >= 5.49) {
         profileinactiveR = `${parseInt(`${linkS}`) ^ profileinactiveR.length}`;
         break;
      }
          let foundE: Array<any> = [945, 82];
          let catalogB = true;
         detail2 /= Math.max(3, (parseFloat(`${(catalogB ? 3 : 3) - 1}`)));
         foundE.push(2);
         catalogB = 84 < foundE.length;
      orangeclocku = new Map([[`${vignettev.size}`, parseInt(`${codegenb}`)]]);
   while (4 < (4 ^ orangeclocku.size) || 3 < (vignettev.size ^ 4)) {
       let arrowuph = 0.0;
       let flyer5: Map<any, any> = new Map([[String.fromCharCode(117,95,57,52,95,99,108,111,115,117,114,101,0),String.fromCharCode(118,95,54,56,95,115,117,98,106,111,117,114,110,97,108,0)], [String.fromCharCode(109,95,49,56,95,115,105,103,110,97,116,117,114,101,0),String.fromCharCode(110,115,117,105,95,109,95,56,55,0)], [String.fromCharCode(116,114,97,110,115,105,101,110,116,95,104,95,49,56,0),String.fromCharCode(110,95,55,53,95,115,97,116,100,120,0)]]);
      for (let t = 0; t < 2; t++) {
         flyer5.set(`${arrowuph}`, parseInt(`${arrowuph}`));
      }
         flyer5 = new Map([[`${flyer5.size}`, parseInt(`${arrowuph}`)]]);
      if ((flyer5.size ^ 3) >= 1) {
         flyer5 = new Map([[`${flyer5.size}`, parseInt(`${arrowuph}`)]]);
      }
          let leakcheckerL = false;
          let policyt = 5.0;
          let applicationo = 2.0;
         flyer5.set(`${policyt}`, 2 + flyer5.size);
         leakcheckerL = 73.77 == applicationo;
         policyt *= parseFloat(`${2 - parseInt(`${applicationo}`)}`);
         flyer5.set(`${arrowuph}`, flyer5.size - 1);
         arrowuph /= Math.max(flyer5.size, 3);
      vignettev = new Map([[`${launchL.size}`, eventsplashx.length]]);
      break;
   }
   while (codegenb < 2.2) {
      codegenb *= privatechatbgz.length - 3;
      break;
   }
      downloadedD = new Map([[`${privatechatbgz.length}`, 1]]);
   if (launchL.size < 5) {
      e_positionu = new Map([[`${vignettev.size}`, 1 * parseInt(`${codegenb}`)]]);
   }
   if (!Array.from(e_positionu.values()).includes(vignettev.size)) {
      e_positionu = new Map([[`${downloadedD.size}`, 3]]);
   }
   for (let h = 0; h < 1; h++) {
      logoutf -= vignettev.size;
   }
   while (logoutf <= 4) {
       let dependencyS = 1.0;
       let enewssharep: Array<any> = [String.fromCharCode(111,95,57,49,95,104,101,108,112,0), String.fromCharCode(99,114,101,100,101,110,116,105,97,108,115,95,118,95,53,56,0)];
      let maths = enewssharep.length <= 5363271;
      do {
         enewssharep.push(parseInt(`${dependencyS}`) >> (Math.min(3, Math.abs(2))));
         if (maths) {
            break;
         }
      } while (maths && ((5.67 - dependencyS) >= 2.47 || 5.67 >= (parseFloat(`${enewssharep.length}`) - dependencyS)));
          let manifestd = true;
          let greyarrowupW = String.fromCharCode(115,116,97,98,105,108,105,122,97,116,105,111,110,95,102,95,57,52,0);
         enewssharep.push(((manifestd ? 1 : 3) << (Math.min(Math.abs(parseInt(`${dependencyS}`)), 4))));
         manifestd = (greyarrowupW.length ^ greyarrowupW.length) < 68;
      for (let z = 0; z < 3; z++) {
         dependencyS /= Math.max(5, parseFloat(`${3}`));
      }
      let orientation0 = 7159377.0 <= dependencyS;
      do {
         dependencyS -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${dependencyS}`)), 5))}`);
         if (orientation0) {
            break;
         }
      } while (orientation0 && ((parseInt(`${dependencyS}`) + enewssharep.length) > 1));
      for (let c = 0; c < 3; c++) {
         dependencyS /= Math.max(5, parseFloat(`${enewssharep.length}`));
      }
      if (1 <= (5 - enewssharep.length) || (enewssharep.length % 5) <= 5) {
         enewssharep.push(enewssharep.length / (Math.max(1, parseInt(`${dependencyS}`))));
      }
      codegenb *= 1;
      break;
   }
   let fast8 = logoutf >= 6073926;
   do {
      logoutf >>= Math.min(Math.abs(parseInt(`${codegenb}`)), 3);
      if (fast8) {
         break;
      }
   } while ((!eventsplashx.startsWith(`${logoutf}`)) && fast8);
   for (let f = 0; f < 2; f++) {
      logoutf *= e_positionu.size;
   }
   for (let n = 0; n < 3; n++) {
      logoutf -= downloadedD.size + logoutf;
   }
   while (!eventsplashx.includes(`${downloadedD.size}`)) {
       let mapbuffer8: Map<any, any> = new Map([[String.fromCharCode(110,111,110,110,117,108,108,115,101,114,105,97,108,105,122,97,116,105,111,110,95,119,95,54,50,0),false ], [String.fromCharCode(101,110,100,112,111,105,110,116,115,95,108,95,57,0),false ], [String.fromCharCode(97,114,109,118,95,116,95,50,50,0),false ]]);
       let paginationQ: Array<any> = [453, 619];
       let unselected3 = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,100,95,118,95,56,57,0);
       let baseb = 0;
      let canvas1 = unselected3.length <= 8070693;
      do {
         unselected3 = "1";
         if (canvas1) {
            break;
         }
      } while (canvas1 && (unselected3.length > 1));
      for (let n = 0; n < 2; n++) {
         paginationQ = [(unselected3 == String.fromCharCode(84,0) ? baseb : unselected3.length)];
      }
      while ((paginationQ.length % (Math.max(unselected3.length, 7))) == 5) {
         unselected3 += `${baseb}`;
         break;
      }
      for (let c = 0; c < 1; c++) {
         unselected3 += `${baseb | unselected3.length}`;
      }
      let liver = mapbuffer8.size >= 5690937;
      do {
         mapbuffer8 = new Map([[`${paginationQ.length}`, 1 * unselected3.length]]);
         if (liver) {
            break;
         }
      } while (liver && (5 < (unselected3.length - mapbuffer8.size) || (mapbuffer8.size - unselected3.length) < 5));
          let handlerf = String.fromCharCode(100,101,109,117,120,101,114,95,113,95,56,49,0);
         unselected3 += `${mapbuffer8.size ^ baseb}`;
         handlerf += `${handlerf.length % (Math.max(handlerf.length, 6))}`;
       let faviconw = 3;
      while ((unselected3.length % 2) <= 3 && (baseb % 2) <= 2) {
          let telemetryy = 1.0;
          let jnews0 = String.fromCharCode(115,119,97,112,121,118,98,117,102,102,101,114,95,102,95,49,51,0);
          let videovar5 = 3.0;
         unselected3 = `${baseb | unselected3.length}`;
         telemetryy += parseFloat(`${parseInt(`${telemetryy}`)}`);
         jnews0 += `${parseInt(`${telemetryy}`)}`;
         videovar5 /= Math.max(2, parseInt(`${videovar5}`) << (Math.min(Math.abs(2), 3)));
         break;
      }
      if (unselected3.length >= mapbuffer8.size) {
         mapbuffer8.set(unselected3, (unselected3 == String.fromCharCode(48,0) ? baseb : unselected3.length));
      }
      for (let q = 0; q < 1; q++) {
         mapbuffer8.set(`${paginationQ.length}`, paginationQ.length);
      }
      for (let d = 0; d < 2; d++) {
         paginationQ = [3];
      }
          let watchnowbgB: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,109,112,111,115,101,105,95,116,95,53,53,0),true ], [String.fromCharCode(113,95,51,95,103,101,116,116,105,109,101,0),false ]]);
          let footballE = 1.0;
          let encrypt6 = 1.0;
         paginationQ = [parseInt(`${encrypt6}`)];
         watchnowbgB = new Map([[`${watchnowbgB.size}`, parseInt(`${footballE}`)]]);
         footballE += parseFloat(`${watchnowbgB.size & parseInt(`${footballE}`)}`);
      downloadedD = new Map([[`${orangeclocku.size}`, 3 + orangeclocku.size]]);
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
       let uploadb = 5.0;
    let colors8 = String.fromCharCode(99,100,106,112,101,103,95,108,95,55,56,0);
    let brightnessg: Map<any, any> = new Map([[String.fromCharCode(110,95,50,55,95,115,117,112,112,108,121,0),885], [String.fromCharCode(115,95,51,56,95,115,101,114,105,97,108,105,122,97,116,105,111,110,0),147]]);
    let rankF: Array<any> = [135, 749];
    let middlewareO = String.fromCharCode(97,114,111,117,110,100,95,117,95,48,0);
    let selectg = 0.0;
    let videovarD = String.fromCharCode(114,101,112,101,97,116,101,114,95,49,95,51,52,0);
    let turndownk = String.fromCharCode(112,95,50,52,95,112,111,115,116,98,111,120,0);
    let iconbackwhiter = String.fromCharCode(105,115,101,109,112,116,121,95,108,95,52,56,0);
      colors8 += `${rankF.length}`;
   for (let s = 0; s < 2; s++) {
      uploadb -= 2 | rankF.length;
   }
   if (brightnessg.get(`${rankF.length}`) != null) {
      rankF.push(2 ^ videovarD.length);
   }
       let fillX = 0.0;
          let iconstarU = true;
          let connectionG = 3.0;
         fillX -= parseFloat(`${3 * parseInt(`${fillX}`)}`);
         iconstarU = 53.41 < connectionG;
         connectionG += ((iconstarU ? 1 : 1) + parseInt(`${connectionG}`));
      for (let r = 0; r < 2; r++) {
         fillX /= Math.max(5, parseFloat(`${parseInt(`${fillX}`) * 2}`));
      }
       let countdownQ: Map<any, any> = new Map([[String.fromCharCode(112,95,55,57,95,97,119,97,107,101,0),741], [String.fromCharCode(97,114,102,113,95,122,95,48,0),26]]);
      colors8 += `${brightnessg.size}`;
   if (!videovarD.startsWith(`${rankF.length}`)) {
       let whatsapps = 4.0;
         whatsapps *= parseFloat(`${1}`);
      let hooksi = 9289558.0 >= whatsapps;
      do {
         whatsapps /= Math.max(2, parseFloat(`${parseInt(`${whatsapps}`) ^ parseInt(`${whatsapps}`)}`));
         if (hooksi) {
            break;
         }
      } while ((whatsapps == 2.16) && hooksi);
         whatsapps -= parseFloat(`${parseInt(`${whatsapps}`)}`);
      videovarD += `${parseInt(`${whatsapps}`)}`;
   }

      if (onBack !== undefined) {

   for (let s = 0; s < 1; s++) {
      rankF = [parseInt(`${uploadb}`)];
   }
      rankF = [1];
       let uimanagerG = String.fromCharCode(112,95,57,95,102,111,115,115,105,108,0);
       let setting6 = String.fromCharCode(104,111,116,111,95,107,95,55,53,0);
       let pressureG = String.fromCharCode(118,97,114,105,97,110,99,101,120,95,54,95,54,51,0);
      if (!pressureG.endsWith(setting6)) {
          let dialogK = String.fromCharCode(114,100,109,117,108,116,95,114,95,49,57,0);
          let iconrefresh1 = String.fromCharCode(109,98,114,116,104,114,101,97,100,95,111,95,51,0);
          let splashq = String.fromCharCode(97,108,115,101,95,108,95,53,0);
         setting6 += `${pressureG.length << (Math.min(setting6.length, 4))}`;
         dialogK = `${1 % (Math.max(6, iconrefresh1.length))}`;
         iconrefresh1 = `${iconrefresh1.length}`;
         splashq += `${splashq.length}`;
      }
          let loginC: Map<any, any> = new Map([[String.fromCharCode(115,95,57,51,95,102,111,114,99,105,110,103,0),String.fromCharCode(117,95,57,95,109,97,114,107,117,112,0)], [String.fromCharCode(104,95,56,95,103,97,117,115,115,105,97,110,105,105,114,100,0),String.fromCharCode(112,95,51,54,0)], [String.fromCharCode(119,95,55,56,95,104,115,99,114,111,108,108,0),String.fromCharCode(106,95,51,55,95,107,101,121,102,114,97,109,101,0)]]);
          let typese: Array<any> = [735, 958];
          let auto_2ys = String.fromCharCode(105,95,57,57,95,119,97,115,0);
         setting6 += `${typese.length}`;
         loginC = new Map([[`${loginC.size}`, auto_2ys.length]]);
         typese.push((auto_2ys == String.fromCharCode(52,0) ? loginC.size : auto_2ys.length));
      while (pressureG != setting6) {
          let static_nqG = String.fromCharCode(105,95,56,53,95,114,101,112,111,114,116,0);
          let reducerU = 0.0;
         setting6 = `${pressureG.length | 1}`;
         static_nqG += `${parseInt(`${reducerU}`) << (Math.min(static_nqG.length, 3))}`;
         reducerU /= Math.max(parseFloat(`${static_nqG.length / 1}`), 1);
         break;
      }
         setting6 = `${setting6.length ^ pressureG.length}`;
      if (pressureG != String.fromCharCode(82,0)) {
         setting6 = `${setting6.length}`;
      }
      for (let n = 0; n < 3; n++) {
          let typesB = String.fromCharCode(120,95,55,50,95,105,110,116,101,114,112,111,108,97,116,101,112,111,108,121,100,101,99,0);
          let shareds = false;
          let shareU = String.fromCharCode(117,95,49,55,95,100,101,97,99,116,105,118,97,116,105,111,110,0);
          let cancely: Map<any, any> = new Map([[String.fromCharCode(99,95,55,50,95,97,115,115,101,109,98,108,121,0),403], [String.fromCharCode(115,117,112,112,114,101,115,115,105,110,103,95,100,95,54,0),334]]);
          let c_managerv = false;
         pressureG = `${pressureG.length}`;
         typesB = `${shareU.length}`;
         shareds = (typesB.length >> (Math.min(shareU.length, 3))) >= 53;
         cancely.set(`${shareds}`, 3);
         c_managerv = typesB == String.fromCharCode(77,0);
      }
          let huaweia = 2;
          let nativeX = String.fromCharCode(115,105,109,117,108,97,116,105,111,110,95,50,95,49,57,0);
         uimanagerG += `${setting6.length / 2}`;
         huaweia /= Math.max(huaweia & 2, 3);
         nativeX = `${(nativeX == String.fromCharCode(107,0) ? nativeX.length : huaweia)}`;
      let dropdownC = String.fromCharCode(119,119,98,48,115,111,53,0) == uimanagerG;
      do {
         uimanagerG += `${(setting6 == String.fromCharCode(50,0) ? uimanagerG.length : setting6.length)}`;
         if (dropdownC) {
            break;
         }
      } while ((setting6.startsWith(`${uimanagerG.length}`)) && dropdownC);
      while (pressureG == uimanagerG) {
         uimanagerG += `${uimanagerG.length}`;
         break;
      }
      middlewareO = `${colors8.length}`;
      selectg *= parseInt(`${selectg}`) - 3;
      brightnessg = new Map([[colors8, parseInt(`${selectg}`)]]);
        onBack();

   for (let s = 0; s < 2; s++) {
      colors8 += `${brightnessg.size}`;
   }
      brightnessg = new Map([[videovarD, 3]]);
      videovarD = `${1 | brightnessg.size}`;
      middlewareO += `${3 & rankF.length}`;
   while (4.57 > (selectg / 2.19)) {
      selectg -= 3 << (Math.min(2, rankF.length));
      break;
   }
        lockOrientation("PORTRAIT");

   let guideL = middlewareO.length >= 8768160;
   do {
       let sentryi = String.fromCharCode(100,95,55,50,95,120,109,108,0);
      if (sentryi == sentryi) {
         sentryi = "1";
      }
          let albumL = false;
          let disconnectedlogoe = 5;
         sentryi += "3";
         albumL = (disconnectedlogoe << (Math.min(Math.abs(disconnectedlogoe), 5))) <= 54;
         sentryi = `${sentryi.length}`;
      middlewareO = `${turndownk.length}`;
      if (guideL) {
         break;
      }
   } while ((videovarD != middlewareO) && guideL);
      uploadb *= middlewareO.length;
   if (1 < (brightnessg.size ^ 2) || (2 * brightnessg.size) < 5) {
      brightnessg = new Map([[`${selectg}`, parseInt(`${uploadb}`) ^ parseInt(`${selectg}`)]]);
   }
      rankF = [1 - brightnessg.size];
      rankF.push(colors8.length);
        setIsFullScreen(false);
      } else {

       let ticky = String.fromCharCode(116,105,109,101,115,116,97,109,112,101,100,95,111,95,52,54,0);
       let libavformat_ = String.fromCharCode(117,95,51,55,95,97,110,116,105,99,111,108,108,97,112,115,101,0);
       let mbnativeW = String.fromCharCode(108,95,54,55,95,105,110,118,101,114,115,101,0);
      while (5 >= libavformat_.length) {
          let modulej = 1.0;
          let moviesW = String.fromCharCode(116,116,97,101,110,99,100,115,112,95,113,95,48,0);
          let xvodf = 5.0;
         libavformat_ = `${parseInt(`${modulej}`)}`;
         modulej -= (String.fromCharCode(86,0) == moviesW ? parseInt(`${xvodf}`) : moviesW.length);
         xvodf /= Math.max(1, parseFloat(`${1 | moviesW.length}`));
         break;
      }
      for (let x = 0; x < 2; x++) {
         ticky = "2";
      }
      while (libavformat_ != String.fromCharCode(85,0)) {
         mbnativeW = `${mbnativeW.length / (Math.max(ticky.length, 6))}`;
         break;
      }
         mbnativeW += "2";
         libavformat_ += "1";
         mbnativeW = `${mbnativeW.length}`;
          let kuaishou_ = 5;
          let singapore1: Array<any> = [804, 91, 56];
          let close6 = false;
         ticky += "1";
         kuaishou_ ^= 3;
         singapore1.push(2 << (Math.min(5, singapore1.length)));
         close6 = singapore1.includes(kuaishou_);
      if (mbnativeW == libavformat_) {
          let basej: Array<any> = [915, 966];
          let turndownu = 2.0;
          let mbsplashu = 0;
         libavformat_ = "2";
         basej = [parseInt(`${turndownu}`)];
         turndownu *= parseFloat(`${parseInt(`${turndownu}`) / 3}`);
         mbsplashu -= parseInt(`${turndownu}`);
      }
          let inouttargetredP = String.fromCharCode(115,97,116,95,109,95,53,51,0);
          let loadingq: Map<any, any> = new Map([[String.fromCharCode(102,95,48,95,101,118,97,108,117,97,116,101,0),true ], [String.fromCharCode(100,95,55,49,95,115,101,103,102,101,97,116,117,114,101,0),true ], [String.fromCharCode(116,119,111,112,97,115,115,95,114,95,57,53,0),false ]]);
          let videocommonf: Map<any, any> = new Map([[String.fromCharCode(99,95,49,57,95,98,97,107,101,0),831], [String.fromCharCode(112,95,55,49,95,99,108,111,115,101,0),67]]);
         libavformat_ += `${videocommonf.size}`;
         inouttargetredP = `${loadingq.size ^ inouttargetredP.length}`;
         loadingq.set(`${inouttargetredP}`, (inouttargetredP == String.fromCharCode(54,0) ? loadingq.size : inouttargetredP.length));
         videocommonf.set(inouttargetredP, loadingq.size);
      uploadb /= Math.max(5, parseInt(`${uploadb}`) | rankF.length);
      videovarD = "3";
      colors8 = `${2 >> (Math.min(5, turndownk.length))}`;
   for (let v = 0; v < 2; v++) {
       let watchnowbgo = 4.0;
       let philippines9 = String.fromCharCode(109,95,54,48,95,111,99,117,109,101,110,116,0);
       let dycreatord = String.fromCharCode(109,97,105,110,100,98,95,51,95,51,54,0);
          let unimplementedviewK = String.fromCharCode(112,95,50,48,95,104,111,117,114,115,0);
          let disconnectedlogop = 1.0;
         philippines9 = `${2 % (Math.max(4, unimplementedviewK.length))}`;
         unimplementedviewK = `${parseInt(`${disconnectedlogop}`)}`;
         philippines9 += "2";
      selectg *= parseInt(`${watchnowbgo}`) << (Math.min(4, Math.abs(2)));
   }
   for (let v = 0; v < 3; v++) {
       let remindert = 0;
      let penaltyh = remindert >= 8345707;
      do {
          let libimagepipelineg = String.fromCharCode(99,111,109,112,111,115,101,114,95,99,95,55,49,0);
          let robotoS = 3.0;
          let sinaj: Map<any, any> = new Map([[String.fromCharCode(105,95,54,55,95,100,101,115,99,0),211], [String.fromCharCode(118,100,112,97,117,95,108,95,53,55,0),232]]);
          let executorz = false;
         remindert >>= Math.min(Math.abs(sinaj.size | 3), 5);
         libimagepipelineg += `${(libimagepipelineg == String.fromCharCode(54,0) ? (executorz ? 3 : 5) : libimagepipelineg.length)}`;
         robotoS /= Math.max(((executorz ? 4 : 2) << (Math.min(Math.abs(parseInt(`${robotoS}`)), 4))), 2);
         sinaj = new Map([[`${robotoS}`, parseInt(`${robotoS}`)]]);
         if (penaltyh) {
            break;
         }
      } while (((remindert - remindert) >= 1) && penaltyh);
      if (remindert == 4) {
         remindert >>= Math.min(Math.abs(3 + remindert), 5);
      }
      for (let z = 0; z < 3; z++) {
          let with_eD = String.fromCharCode(114,101,103,105,115,116,114,97,116,105,111,110,95,111,95,52,52,0);
          let reviewf: Map<any, any> = new Map([[String.fromCharCode(116,95,50,56,95,108,105,98,107,118,97,122,97,97,114,0),12], [String.fromCharCode(101,95,55,50,95,97,99,99,114,117,101,0),293]]);
          let webviewA = String.fromCharCode(114,95,57,49,95,109,106,112,101,103,98,0);
          let unfillN = String.fromCharCode(116,95,51,56,95,99,108,97,115,115,105,102,115,0);
          let rewardvideoC = String.fromCharCode(105,99,101,95,101,95,50,51,0);
         remindert -= webviewA.length ^ 2;
         with_eD = "3";
         reviewf.set(rewardvideoC, 2);
         webviewA = `${rewardvideoC.length - unfillN.length}`;
         unfillN += "2";
      }
      uploadb -= turndownk.length;
   }
        

   let saveJ = String.fromCharCode(122,56,112,98,54,52,121,118,113,0) == colors8;
   do {
       let flagX = String.fromCharCode(120,95,57,57,95,115,105,110,107,115,0);
      let dataq = 9130816 <= flagX.length;
      do {
         flagX = `${(String.fromCharCode(114,0) == flagX ? flagX.length : flagX.length)}`;
         if (dataq) {
            break;
         }
      } while (dataq && (flagX == String.fromCharCode(104,0)));
      if (1 <= flagX.length) {
         flagX = `${flagX.length & flagX.length}`;
      }
         flagX += `${flagX.length >> (Math.min(flagX.length, 5))}`;
      colors8 += `${rankF.length ^ 1}`;
      if (saveJ) {
         break;
      }
   } while (saveJ && ((3.15 - uploadb) <= 1.12 && (uploadb - colors8.length) <= 3.15));
      uploadb += brightnessg.size;
       let complete7 = 2.0;
       let photoX = String.fromCharCode(115,95,50,50,95,100,105,115,112,108,97,99,101,109,101,110,116,0);
          let templateprocessorI = String.fromCharCode(115,118,113,101,110,99,95,112,95,57,49,0);
          let defaultfootballbgu = 3;
         photoX = `${parseInt(`${complete7}`) << (Math.min(Math.abs(3), 2))}`;
         templateprocessorI = `${defaultfootballbgu}`;
         defaultfootballbgu &= 1 % (Math.max(2, defaultfootballbgu));
      if ((4.95 - complete7) == 2.66) {
         photoX = "2";
      }
      while (photoX.endsWith(`${complete7}`)) {
          let latnT = 5.0;
          let become3 = 0.0;
          let updatess = 4.0;
          let projectc = 0;
          let fillD = 3;
         photoX = `${1 - photoX.length}`;
         latnT *= parseFloat(`${parseInt(`${become3}`) + 2}`);
         become3 -= 3;
         updatess += parseInt(`${become3}`);
         projectc /= Math.max(4, 1);
         fillD ^= projectc;
         break;
      }
          let taiwanK: Map<any, any> = new Map([[String.fromCharCode(99,95,55,49,95,115,117,112,112,114,101,115,115,105,110,103,0),737], [String.fromCharCode(110,95,57,48,95,114,101,97,115,115,109,0),660]]);
          let footballfields: Map<any, any> = new Map([[String.fromCharCode(107,95,54,49,95,115,109,97,114,116,0),547], [String.fromCharCode(112,104,97,115,101,115,95,118,95,55,53,0),626], [String.fromCharCode(98,95,51,57,95,114,101,99,111,114,100,105,110,103,99,111,110,110,0),244]]);
         photoX += `${taiwanK.size}`;
         taiwanK = new Map([[`${footballfields.size}`, footballfields.size]]);
          let whitep = 2;
         photoX += `${(String.fromCharCode(73,0) == photoX ? photoX.length : parseInt(`${complete7}`))}`;
         whitep /= Math.max(2, whitep);
      if (3 < (parseInt(`${complete7}`) + photoX.length)) {
          let formc = String.fromCharCode(97,108,97,110,103,117,97,103,101,95,53,95,51,49,0);
          let phonee = String.fromCharCode(100,105,114,95,98,95,50,53,0);
         photoX = `${3 ^ formc.length}`;
         formc = `${phonee.length}`;
         phonee += `${phonee.length | phonee.length}`;
      }
      uploadb /= Math.max(parseInt(`${uploadb}`) & 1, 1);
      brightnessg.set(colors8, colors8.length);
      videovarD += `${videovarD.length}`;
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
       let sinau = false;
    let traminio = String.fromCharCode(97,110,97,103,108,121,112,104,95,57,95,50,53,0);
    let models4: Array<any> = [211, 601];
    let libcrashsdkN = String.fromCharCode(118,95,57,57,95,97,99,114,111,110,121,109,0);
    let modelv = true;
    let webview5 = 4.0;
    let types7 = 2;
    let redirectm = 2;
    let reactnativeultimatelistviewH: Map<any, any> = new Map([[String.fromCharCode(100,112,116,114,115,95,111,95,52,51,0),true ], [String.fromCharCode(99,114,101,97,116,101,95,50,95,48,0),true ]]);
    let left3: Array<any> = [String.fromCharCode(118,105,98,114,97,116,101,95,55,95,53,57,0), String.fromCharCode(114,111,117,112,95,103,95,53,49,0), String.fromCharCode(119,114,105,116,101,99,104,101,99,107,95,104,95,50,51,0)];
   while (2 < left3.length && 1 < (2 >> (Math.min(1, left3.length)))) {
      left3.push(traminio.length + types7);
      break;
   }
   let temperatureI = 7876084 >= models4.length;
   do {
      models4 = [models4.length % 3];
      if (temperatureI) {
         break;
      }
   } while (temperatureI && (2 > (models4.length & traminio.length)));
   for (let e = 0; e < 3; e++) {
      libcrashsdkN = `${reactnativeultimatelistviewH.size * 1}`;
   }
   let yellowvideoliveL = 5550889 >= models4.length;
   do {
      models4 = [((modelv ? 4 : 4) & libcrashsdkN.length)];
      if (yellowvideoliveL) {
         break;
      }
   } while (yellowvideoliveL && ((2 & models4.length) == 4 && 3 == (reactnativeultimatelistviewH.size & 2)));
       let jingdongt = 0.0;
       let navigationE = 4;
       let fillu = 5.0;
       let injuryG = String.fromCharCode(109,97,103,110,105,116,117,100,101,115,95,108,95,54,51,0);
      let backwarda = injuryG == String.fromCharCode(95,116,57,52,100,112,0);
      do {
         injuryG += `${parseInt(`${fillu}`) % (Math.max(3, navigationE))}`;
         if (backwarda) {
            break;
         }
      } while ((2.52 > jingdongt) && backwarda);
          let changew = String.fromCharCode(109,97,114,107,105,110,103,115,95,104,95,57,53,0);
          let rulesh = String.fromCharCode(117,95,56,50,95,111,118,101,114,114,105,100,101,115,0);
          let sportS = 2.0;
         navigationE ^= (String.fromCharCode(48,0) == rulesh ? parseInt(`${jingdongt}`) : rulesh.length);
         changew += `${parseInt(`${sportS}`) | changew.length}`;
         sportS *= parseInt(`${sportS}`) | 3;
         navigationE -= parseInt(`${fillu}`) % (Math.max(parseInt(`${jingdongt}`), 9));
      if (injuryG.includes(`${fillu}`)) {
         fillu /= Math.max(1, parseFloat(`${3}`));
      }
         navigationE /= Math.max(5, 2 % (Math.max(4, navigationE)));
      let libfabricjni7 = jingdongt >= 6065428.0;
      do {
         jingdongt += parseInt(`${fillu}`);
         if (libfabricjni7) {
            break;
         }
      } while (libfabricjni7 && (jingdongt == 5.43));
       let malaysiaC = String.fromCharCode(122,95,57,54,95,100,97,114,116,115,0);
       let zoomT = String.fromCharCode(120,95,52,57,95,105,110,108,105,103,104,116,0);
      for (let y = 0; y < 2; y++) {
         fillu *= parseFloat(`${malaysiaC.length % (Math.max(1, 1))}`);
      }
      models4.push(1 << (Math.min(3, models4.length)));
       let telemetryx = String.fromCharCode(122,95,55,48,95,115,104,111,119,0);
       let yellowanimationliveI = String.fromCharCode(114,95,56,57,95,97,108,105,97,115,0);
       let i_lockY = String.fromCharCode(97,116,116,114,105,98,95,102,95,49,57,0);
         telemetryx = `${i_lockY.length % 2}`;
          let fastQ = String.fromCharCode(109,98,116,114,101,101,95,48,95,55,56,0);
          let frame_6j = 0;
          let updatesJ = String.fromCharCode(120,95,52,55,95,114,101,99,111,110,110,101,99,116,105,110,103,0);
         i_lockY = `${2 >> (Math.min(2, telemetryx.length))}`;
         fastQ += `${2 >> (Math.min(2, Math.abs(frame_6j)))}`;
         frame_6j >>= Math.min(Math.abs(frame_6j * updatesJ.length), 4);
         updatesJ += "3";
         i_lockY += `${yellowanimationliveI.length}`;
         telemetryx = `${yellowanimationliveI.length}`;
         telemetryx = "2";
      while (yellowanimationliveI.length < 2) {
          let window_m_: Map<any, any> = new Map([[String.fromCharCode(114,101,118,97,108,105,100,97,116,101,95,121,95,50,56,0),22], [String.fromCharCode(99,95,54,54,95,114,101,99,97,108,99,117,108,97,116,105,111,110,0),30], [String.fromCharCode(114,101,110,100,101,114,101,114,115,95,101,95,50,51,0),995]]);
          let vipsportX = 0;
          let libfbN = 3.0;
          let reactnavigationR = String.fromCharCode(109,95,50,54,95,109,105,110,105,109,97,0);
         telemetryx = "2";
         window_m_.set(`${libfbN}`, parseInt(`${libfbN}`) % 3);
         vipsportX %= Math.max(5, window_m_.size);
         reactnavigationR = `${window_m_.size}`;
         break;
      }
      let basketballb = String.fromCharCode(106,101,121,57,119,120,113,55,0) == yellowanimationliveI;
      do {
         yellowanimationliveI += `${i_lockY.length}`;
         if (basketballb) {
            break;
         }
      } while (basketballb && (i_lockY == String.fromCharCode(88,0)));
       let arrowup2 = 5.0;
      while (telemetryx.startsWith(`${arrowup2}`)) {
         arrowup2 += (parseFloat(`${i_lockY == String.fromCharCode(76,0) ? yellowanimationliveI.length : i_lockY.length}`));
         break;
      }
      reactnativeultimatelistviewH.set(traminio, reactnativeultimatelistviewH.size);
   if (3 >= (4 & libcrashsdkN.length)) {
      libcrashsdkN += `${traminio.length / (Math.max(4, parseInt(`${webview5}`)))}`;
   }
      types7 |= models4.length / 3;
   while (1.23 < (4.24 + webview5) && sinau) {
      sinau = left3.length >= parseInt(`${webview5}`);
      break;
   }
      reactnativeultimatelistviewH = new Map([[`${models4.length}`, models4.length - 1]]);
      sinau = 60 < redirectm;
      types7 <<= Math.min(models4.length, 5);
       let arrowrightk = 0.0;
      for (let g = 0; g < 1; g++) {
         arrowrightk *= parseInt(`${arrowrightk}`) | parseInt(`${arrowrightk}`);
      }
      while (4.23 > (arrowrightk * arrowrightk)) {
         arrowrightk -= 1;
         break;
      }
      if (4.31 > (arrowrightk / 3.53) || 5.7 > (3.53 / (Math.max(8, arrowrightk)))) {
         arrowrightk -= parseInt(`${arrowrightk}`);
      }
      traminio = `${redirectm}`;
   let inouttargetredJ = 7547464 >= left3.length;
   do {
      left3.push(parseInt(`${webview5}`));
      if (inouttargetredJ) {
         break;
      }
   } while (inouttargetredJ && (reactnativeultimatelistviewH.get(`${left3.length}`) == null));
   while (5 <= (4 + reactnativeultimatelistviewH.size) && (libcrashsdkN.length + 4) <= 5) {
      libcrashsdkN += "1 - types7";
      break;
   }
   while (3 <= (left3.length * 5) || (webview5 - 5.5) <= 3.54) {
      webview5 *= types7 - redirectm;
      break;
   }
      reactnativeultimatelistviewH.set(`${webview5}`, 1 - parseInt(`${webview5}`));

        console.log("err save vod!");

      types7 |= parseInt(`${webview5}`) - models4.length;
      left3.push(1);
      sinau = (redirectm - types7) < 80;
   let predictionbannersharede = 5808508 >= reactnativeultimatelistviewH.size;
   do {
      reactnativeultimatelistviewH.set(`${webview5}`, (parseInt(`${webview5}`) | (modelv ? 3 : 5)));
      if (predictionbannersharede) {
         break;
      }
   } while (predictionbannersharede && ((2 ^ reactnativeultimatelistviewH.size) <= 4 || 5 <= (2 << (Math.min(1, Math.abs(reactnativeultimatelistviewH.size))))));
       let success8 = String.fromCharCode(112,95,54,51,95,104,119,99,97,112,0);
       let previewM = 0.0;
       let changeg = String.fromCharCode(117,95,51,54,95,107,109,115,103,114,97,98,0);
         previewM *= changeg.length - 1;
      for (let m = 0; m < 2; m++) {
          let description_idf: Array<any> = [995, 829];
          let matchactiveI = 5.0;
         success8 += `${changeg.length}`;
         description_idf = [1 ^ parseInt(`${matchactiveI}`)];
         matchactiveI *= parseInt(`${matchactiveI}`);
      }
         changeg += `${success8.length / 2}`;
         previewM /= Math.max(5, success8.length & 2);
         changeg = `${changeg.length}`;
         previewM /= Math.max(3, parseInt(`${previewM}`) + success8.length);
      let combinex = 7632701.0 >= previewM;
      do {
         previewM /= Math.max(2, success8.length);
         if (combinex) {
            break;
         }
      } while (combinex && (1 == (success8.length / 2) && (previewM + success8.length) == 1.34));
      if (5.35 < previewM) {
          let fillj = String.fromCharCode(112,111,114,116,97,105,116,95,50,95,49,55,0);
          let playh = false;
          let abidetectm = String.fromCharCode(119,114,105,116,101,114,95,100,95,51,57,0);
         previewM += (3 << (Math.min(2, Math.abs((playh ? 2 : 3)))));
         fillj += `${fillj.length >> (Math.min(Math.abs(1), 2))}`;
         playh = abidetectm.length > 91 || 91 > fillj.length;
         abidetectm = `${fillj.length}`;
      }
      if (1 > success8.length) {
         success8 += "3";
      }
      traminio = `${reactnativeultimatelistviewH.size}`;
   if (libcrashsdkN.length >= 2) {
       let gifgoalbgf = 3.0;
       let attributedstringL = String.fromCharCode(109,95,57,54,95,99,105,114,99,117,108,97,116,105,110,103,0);
       let hongkongr: Array<any> = [513, 746, 733];
       let libpangleflippedJ = 1;
       let klevin7: Map<any, any> = new Map([[String.fromCharCode(120,95,52,57,95,104,117,102,102,121,117,118,101,110,99,100,115,112,0),true ], [String.fromCharCode(97,112,99,109,95,118,95,50,50,0),false ]]);
      for (let r = 0; r < 1; r++) {
         klevin7 = new Map([[`${libpangleflippedJ}`, (String.fromCharCode(105,0) == attributedstringL ? attributedstringL.length : libpangleflippedJ)]]);
      }
          let sharedR: Map<any, any> = new Map([[String.fromCharCode(101,120,97,110,100,101,100,95,48,95,54,57,0),687], [String.fromCharCode(98,95,53,48,95,115,116,114,101,97,109,97,98,108,101,0),541]]);
          let utilsl = String.fromCharCode(112,95,49,56,95,117,112,103,114,97,100,101,115,0);
          let profileframev: Map<any, any> = new Map([[String.fromCharCode(100,105,121,102,112,95,107,95,53,50,0),193], [String.fromCharCode(103,95,56,50,95,104,105,103,104,115,0),703]]);
         attributedstringL = `${attributedstringL.length}`;
         sharedR = new Map([[`${sharedR.size}`, utilsl.length << (Math.min(4, Math.abs(sharedR.size)))]]);
         utilsl += `${profileframev.size % (Math.max(6, sharedR.size))}`;
         profileframev = new Map([[`${sharedR.size}`, sharedR.size]]);
       let libjsijniprofilerL: Map<any, any> = new Map([[String.fromCharCode(111,95,52,53,95,115,97,108,115,97,0),String.fromCharCode(112,95,49,95,108,105,118,101,115,116,114,101,97,109,0)], [String.fromCharCode(107,95,55,56,95,108,105,98,112,111,115,116,112,114,111,99,0),String.fromCharCode(115,97,109,112,108,101,115,95,106,95,52,55,0)], [String.fromCharCode(103,95,50,57,95,100,121,110,97,114,114,97,121,0),String.fromCharCode(104,95,54,56,95,109,98,102,105,108,116,101,114,0)]]);
      for (let g = 0; g < 1; g++) {
         klevin7 = new Map([[`${hongkongr.length}`, hongkongr.length - 2]]);
      }
         libpangleflippedJ %= Math.max(libjsijniprofilerL.size, 1);
          let settingh = 2.0;
         attributedstringL = `${libpangleflippedJ % 2}`;
         settingh += 3 | parseInt(`${settingh}`);
          let specz = 4;
          let securityL = 1.0;
         hongkongr.push(3);
         specz <<= Math.min(4, Math.abs(specz << (Math.min(Math.abs(parseInt(`${securityL}`)), 4))));
         securityL /= Math.max(1, 3 | specz);
          let downarrowL: Array<any> = [830, 850];
         libpangleflippedJ <<= Math.min(Math.abs(3), 3);
         downarrowL = [downarrowL.length | downarrowL.length];
         gifgoalbgf *= parseFloat(`${2 * parseInt(`${gifgoalbgf}`)}`);
         attributedstringL = `${libpangleflippedJ}`;
      while (Array.from(libjsijniprofilerL.keys()).includes(`${gifgoalbgf}`)) {
         gifgoalbgf /= Math.max(3, parseFloat(`${1 << (Math.min(2, Math.abs(libjsijniprofilerL.size)))}`));
         break;
      }
      let episodeG = 9394119.0 <= gifgoalbgf;
      do {
         gifgoalbgf -= parseFloat(`${2 * hongkongr.length}`);
         if (episodeG) {
            break;
         }
      } while ((2.81 < (4.20 / (Math.max(2, gifgoalbgf)))) && episodeG);
         libjsijniprofilerL.set(`${libpangleflippedJ}`, 3);
       let expiredr = false;
       let roomW = String.fromCharCode(102,95,53,50,95,115,117,109,109,97,114,105,101,115,0);
       let yellowanimationliveQ = String.fromCharCode(112,114,115,99,116,112,95,114,95,56,55,0);
      left3.push(models4.length + redirectm);
   }
      reactnativeultimatelistviewH.set(`${sinau}`, models4.length);
   while (1 > traminio.length || modelv) {
       let shrinkw = true;
       let values_: Array<any> = [69, 549, 118];
       let react8 = 0.0;
         shrinkw = 80.74 <= react8;
      let themer = values_.length <= 8267402;
      do {
          let checkboxj: Map<any, any> = new Map([[String.fromCharCode(103,95,49,50,95,114,101,119,114,105,116,101,114,0),310], [String.fromCharCode(108,115,112,108,112,99,95,117,95,52,49,0),232], [String.fromCharCode(102,105,116,122,95,56,95,51,57,0),559]]);
         values_ = [checkboxj.size];
         if (themer) {
            break;
         }
      } while (themer && (shrinkw));
         values_.push(1 & values_.length);
      let dycreatorC = shrinkw ? !shrinkw : shrinkw;
      do {
          let const_k8: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,114,97,99,116,109,111,100,95,98,95,51,48,0),false ], [String.fromCharCode(99,111,108,108,97,112,115,105,110,103,95,121,95,54,53,0),false ]]);
          let thailand5 = String.fromCharCode(103,114,97,112,104,113,108,95,122,95,49,48,0);
          let stringsq: Array<any> = [297, 19, 647];
          let a_hashA = String.fromCharCode(118,95,57,48,95,115,117,112,101,114,118,105,101,119,0);
         shrinkw = (const_k8.size * a_hashA.length) >= 80;
         const_k8 = new Map([[`${stringsq.length}`, (String.fromCharCode(67,0) == thailand5 ? thailand5.length : stringsq.length)]]);
         a_hashA = `${stringsq.length % 2}`;
         if (dycreatorC) {
            break;
         }
      } while (dycreatorC && ((react8 * 3.71) > 5.18 && shrinkw));
      for (let g = 0; g < 3; g++) {
          let backx = String.fromCharCode(122,95,49,51,95,114,97,103,103,97,98,108,101,0);
          let selectB = String.fromCharCode(114,101,99,116,105,102,121,95,102,95,50,54,0);
          let profileinactiveu = 1.0;
         react8 -= 3;
         backx += `${parseInt(`${profileinactiveu}`) % 2}`;
         selectB = `${selectB.length}`;
         profileinactiveu /= Math.max(parseFloat(`${2}`), 5);
      }
          let trophyv = String.fromCharCode(101,95,56,49,95,99,111,109,112,97,116,105,98,105,108,105,116,121,0);
         values_ = [values_.length];
         trophyv = `${2 - trophyv.length}`;
      for (let a = 0; a < 1; a++) {
         values_ = [3];
      }
      if (5 < (values_.length / 4)) {
         values_ = [2 & values_.length];
      }
      while (shrinkw) {
         shrinkw = values_.length > 40;
         break;
      }
      modelv = reactnativeultimatelistviewH.size <= 37 && values_.length <= 37;
      break;
   }
   if (libcrashsdkN.length == redirectm) {
      redirectm *= traminio.length >> (Math.min(Math.abs(1), 4));
   }
      sinau = libcrashsdkN.length >= 29 || modelv;
      reactnativeultimatelistviewH.set(`${sinau}`, left3.length);
      libcrashsdkN = `${models4.length * reactnativeultimatelistviewH.size}`;
   while ((4 << (Math.min(1, Math.abs(types7)))) >= 2) {
       let gifgoalbgJ = 4.0;
       let textlayoutmanagerH = String.fromCharCode(110,95,49,95,109,98,97,102,102,0);
       let matchi: Map<any, any> = new Map([[String.fromCharCode(117,95,51,55,95,116,97,107,101,111,117,116,0),String.fromCharCode(114,95,49,54,95,99,111,110,110,101,99,116,105,111,110,115,0)], [String.fromCharCode(122,95,55,48,95,105,110,115,116,97,110,116,0),String.fromCharCode(118,95,51,50,95,105,100,108,101,0)], [String.fromCharCode(112,95,49,95,109,112,106,112,101,103,0),String.fromCharCode(97,95,56,53,95,99,111,109,109,105,116,0)]]);
       let libhermesd = String.fromCharCode(114,95,50,50,95,115,116,117,102,102,105,110,103,0);
       let unreada = String.fromCharCode(116,104,111,117,115,97,110,100,115,95,113,95,56,48,0);
      if (unreada.length < 3) {
          let profileu = 3.0;
          let nalytics8 = true;
          let giflivestreamingd = 4;
         libhermesd += `${textlayoutmanagerH.length}`;
         profileu *= parseFloat(`${3 | parseInt(`${profileu}`)}`);
         nalytics8 = !nalytics8 && profileu <= 40.22;
         giflivestreamingd *= giflivestreamingd / 2;
      }
         unreada += `${matchi.size / 2}`;
      let editn = 5555255 >= unreada.length;
      do {
          let confirmationP = true;
         unreada = `${(String.fromCharCode(54,0) == unreada ? unreada.length : (confirmationP ? 2 : 3))}`;
         if (editn) {
            break;
         }
      } while ((unreada.startsWith(`${libhermesd.length}`)) && editn);
      if ((libhermesd.length - matchi.size) > 1) {
          let fillm = true;
          let suggestionX = String.fromCharCode(105,95,50,95,97,110,103,101,0);
          let hejie = 4.0;
          let rewardy = false;
          let sinaq = String.fromCharCode(110,104,97,110,99,101,95,121,95,55,0);
         matchi.set(libhermesd, (3 / (Math.max(10, (rewardy ? 4 : 1)))));
         fillm = sinaq == String.fromCharCode(88,0) || 34.0 > hejie;
         suggestionX = `${parseInt(`${hejie}`)}`;
         rewardy = fillm;
         sinaq = `${parseInt(`${hejie}`)}`;
      }
         textlayoutmanagerH += "3";
         textlayoutmanagerH = `${unreada.length | 2}`;
          let adult0: Array<any> = [407, 657, 723];
          let teamdetailsbgP = 3.0;
          let nbatrophym = String.fromCharCode(99,95,57,56,95,99,104,111,111,115,105,110,103,0);
         textlayoutmanagerH += `${parseInt(`${teamdetailsbgP}`) + 3}`;
         adult0 = [3];
         teamdetailsbgP *= parseFloat(`${nbatrophym.length}`);
         nbatrophym = `${(String.fromCharCode(70,0) == nbatrophym ? adult0.length : nbatrophym.length)}`;
         unreada += "2";
       let downh = String.fromCharCode(114,101,109,111,116,101,108,121,95,48,95,51,56,0);
      while ((matchi.size & textlayoutmanagerH.length) <= 3 || (matchi.size & textlayoutmanagerH.length) <= 3) {
         matchi = new Map([[`${gifgoalbgJ}`, parseInt(`${gifgoalbgJ}`) / 1]]);
         break;
      }
      if (!textlayoutmanagerH.endsWith(`${matchi.size}`)) {
         matchi = new Map([[`${matchi.size}`, matchi.size * textlayoutmanagerH.length]]);
      }
      for (let g = 0; g < 1; g++) {
          let aboutr = String.fromCharCode(100,105,110,101,114,115,95,56,95,54,0);
          let dicep = String.fromCharCode(116,95,56,56,95,112,97,114,97,109,101,116,101,114,115,0);
          let with_z0Y = 0.0;
          let submitE = 2;
          let successf = 2.0;
         libhermesd = "1";
         aboutr = "1";
         dicep = `${aboutr.length * 3}`;
         with_z0Y -= dicep.length >> (Math.min(5, Math.abs(submitE)));
         submitE ^= aboutr.length + 1;
         successf += parseFloat(`${parseInt(`${with_z0Y}`) / (Math.max(dicep.length, 10))}`);
      }
      while (libhermesd != downh) {
          let logoutQ = String.fromCharCode(109,95,56,55,95,97,121,98,114,105,0);
          let membershipI = 3;
          let country9 = String.fromCharCode(100,95,54,51,95,99,111,110,116,111,117,114,115,0);
          let black3 = String.fromCharCode(120,95,54,54,95,97,99,116,117,97,108,105,122,97,116,105,111,110,0);
          let mbnativeadvancedI = 1.0;
         downh += `${unreada.length}`;
         logoutQ += `${membershipI | logoutQ.length}`;
         membershipI *= logoutQ.length;
         country9 += `${country9.length}`;
         black3 += `${(logoutQ == String.fromCharCode(95,0) ? logoutQ.length : membershipI)}`;
         mbnativeadvancedI /= Math.max(1, country9.length << (Math.min(Math.abs(2), 3)));
         break;
      }
      let libffmpegkitc = libhermesd.length <= 6702495;
      do {
         libhermesd = `${libhermesd.length | matchi.size}`;
         if (libffmpegkitc) {
            break;
         }
      } while ((libhermesd.length == downh.length) && libffmpegkitc);
      for (let x = 0; x < 3; x++) {
         unreada += `${1 * matchi.size}`;
      }
      types7 ^= parseInt(`${webview5}`) >> (Math.min(4, Math.abs(redirectm)));
      break;
   }
       let saveZ = true;
       let vietnamR = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,95,121,95,56,50,0);
       let libtanJ = String.fromCharCode(97,112,110,115,95,118,95,53,51,0);
          let resend7 = String.fromCharCode(98,97,110,100,95,113,95,50,0);
          let private_1n = String.fromCharCode(97,115,99,105,105,105,110,100,101,120,95,110,95,55,57,0);
         libtanJ += `${vietnamR.length * 3}`;
         resend7 = `${resend7.length}`;
         private_1n += `${resend7.length ^ private_1n.length}`;
         vietnamR += `${libtanJ.length}`;
      let release_hcf = vietnamR.length <= 5134431;
      do {
         vietnamR = `${(libtanJ == String.fromCharCode(110,0) ? (saveZ ? 4 : 1) : libtanJ.length)}`;
         if (release_hcf) {
            break;
         }
      } while (release_hcf && (libtanJ.length >= 2 && vietnamR.length >= 2));
      let settingy = saveZ ? !saveZ : saveZ;
      do {
         saveZ = !saveZ;
         if (settingy) {
            break;
         }
      } while ((saveZ) && settingy);
      while (3 > vietnamR.length) {
         vietnamR = "3";
         break;
      }
      for (let y = 0; y < 3; y++) {
         libtanJ += "1";
      }
      let overlayk = saveZ ? !saveZ : saveZ;
      do {
          let alertM = false;
          let clear2 = 4;
          let libreactnativejniT: Array<any> = [566, 86, 306];
         saveZ = vietnamR.length < libreactnativejniT.length;
         alertM = !alertM;
         clear2 -= 3 - clear2;
         libreactnativejniT = [clear2];
         if (overlayk) {
            break;
         }
      } while (overlayk && (!saveZ));
      while (libtanJ.length >= vietnamR.length) {
         vietnamR += `${1 % (Math.max(6, vietnamR.length))}`;
         break;
      }
         libtanJ = `${libtanJ.length ^ vietnamR.length}`;
      sinau = traminio.length > 85;
      reactnativeultimatelistviewH.set(`${sinau}`, (3 & (sinau ? 4 : 1)));
       let logout8 = 2.0;
       let rewind3 = 1;
      let m_managerQ = logout8 >= 6265442.0;
      do {
         logout8 -= parseInt(`${logout8}`);
         if (m_managerQ) {
            break;
         }
      } while ((1.39 < (1.54 + logout8) && 3 < (2 << (Math.min(2, Math.abs(rewind3))))) && m_managerQ);
      while (2 <= rewind3) {
          let descx = 2.0;
         logout8 -= parseInt(`${logout8}`) * rewind3;
         descx -= parseFloat(`${parseInt(`${descx}`) & parseInt(`${descx}`)}`);
         break;
      }
      for (let c = 0; c < 1; c++) {
          let disconnectedlogod: Array<any> = [499, 388, 273];
          let selectionn = 0.0;
          let dependenciesn = 4.0;
          let descxj = 2.0;
         rewind3 >>= Math.min(Math.abs(parseInt(`${selectionn}`)), 3);
         disconnectedlogod.push(parseInt(`${dependenciesn}`) & 3);
         dependenciesn *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${descxj}`)), 4))}`);
         descxj *= 1 % (Math.max(8, parseInt(`${dependenciesn}`)));
      }
       let typingV = String.fromCharCode(112,95,54,57,95,117,110,115,101,116,0);
       let networkx = String.fromCharCode(113,95,49,54,95,97,116,104,0);
       let constantsu = String.fromCharCode(112,114,117,110,101,95,107,95,49,56,0);
      if (constantsu.length == rewind3) {
         rewind3 *= 3 & parseInt(`${logout8}`);
      }
      left3 = [models4.length | 2];
       let context9 = String.fromCharCode(115,109,105,109,101,95,107,95,52,57,0);
         context9 = `${context9.length}`;
      let streamingi = String.fromCharCode(106,50,98,98,102,0) == context9;
      do {
         context9 = `${context9.length}`;
         if (streamingi) {
            break;
         }
      } while (streamingi && (4 > context9.length));
      for (let g = 0; g < 1; g++) {
         context9 = "2";
      }
      webview5 += reactnativeultimatelistviewH.size % (Math.max(traminio.length, 10));
        console.log(err);
      }
    };

    const deviceOrientationHandle = () => {
       let telemetryg = String.fromCharCode(116,111,111,108,98,111,120,95,105,95,49,54,0);
    let anythinkz = 5.0;
    let yellowanimationlive0 = String.fromCharCode(103,95,57,48,95,102,109,116,99,111,110,118,101,114,116,0);
    let userQ = String.fromCharCode(97,95,53,56,95,105,110,115,101,110,115,105,116,105,118,101,0);
    let zhuboY = String.fromCharCode(118,95,54,55,95,108,97,110,103,117,97,103,101,0);
    let brightness_ = String.fromCharCode(98,95,56,50,95,99,111,109,112,97,99,116,101,100,0);
    let launchera = String.fromCharCode(120,105,112,104,108,97,99,105,110,103,95,121,95,54,54,0);
    let gmailr = 0;
    let feedbackI = 2.0;
    let customv = String.fromCharCode(97,95,52,57,95,115,121,109,101,118,101,110,0);
    let giftbuttonB = String.fromCharCode(116,104,97,119,101,100,95,102,95,51,52,0);
   for (let h = 0; h < 2; h++) {
      zhuboY += `${userQ.length - 2}`;
   }
   while (telemetryg.length < zhuboY.length) {
      telemetryg = `${launchera.length - zhuboY.length}`;
      break;
   }
   for (let t = 0; t < 3; t++) {
       let root0 = 1.0;
       let whistleorange2: Map<any, any> = new Map([[String.fromCharCode(110,111,110,100,99,95,109,95,53,52,0),590], [String.fromCharCode(97,95,54,56,95,115,117,114,114,111,117,110,100,0),77], [String.fromCharCode(116,105,109,101,105,110,102,111,95,107,95,56,54,0),314]]);
       let animationsr = String.fromCharCode(114,95,54,54,95,108,105,98,118,101,114,115,105,111,110,0);
       let form8 = String.fromCharCode(119,95,54,95,115,121,110,99,104,114,111,110,111,117,115,108,121,0);
      while ((parseFloat(`${whistleorange2.size}`) * root0) >= 4.10) {
         root0 -= parseFloat(`${3}`);
         break;
      }
      let floatere = 6525350.0 <= root0;
      do {
         root0 *= parseFloat(`${form8.length - parseInt(`${root0}`)}`);
         if (floatere) {
            break;
         }
      } while (floatere && ((animationsr.length / (Math.max(4, 1))) >= 2));
         whistleorange2.set(`${root0}`, whistleorange2.size >> (Math.min(5, Math.abs(parseInt(`${root0}`)))));
      let indexG = whistleorange2.size <= 5458467;
      do {
         whistleorange2.set(animationsr, 1 + form8.length);
         if (indexG) {
            break;
         }
      } while ((whistleorange2.get(`${root0}`) != null) && indexG);
         root0 += parseFloat(`${parseInt(`${root0}`) ^ whistleorange2.size}`);
      let historyg = animationsr == String.fromCharCode(117,112,118,0);
      do {
         animationsr += `${2 >> (Math.min(5, form8.length))}`;
         if (historyg) {
            break;
         }
      } while (historyg && ((animationsr.length & 3) < 5 || 3 < (animationsr.length / (Math.max(3, parseInt(`${root0}`))))));
         form8 = `${(String.fromCharCode(90,0) == animationsr ? animationsr.length : parseInt(`${root0}`))}`;
      let colorsU = 7703276 <= whistleorange2.size;
      do {
          let playliste = true;
          let debugD = String.fromCharCode(101,95,52,95,119,101,108,115,101,110,99,0);
         whistleorange2 = new Map([[form8, 2 - form8.length]]);
         playliste = 58 < debugD.length || String.fromCharCode(113,0) == debugD;
         if (colorsU) {
            break;
         }
      } while (colorsU && (1 > (whistleorange2.size - parseInt(`${root0}`)) && (1 + whistleorange2.size) > 3));
      for (let t = 0; t < 1; t++) {
         root0 /= Math.max(parseFloat(`${form8.length << (Math.min(Math.abs(2), 2))}`), 3);
      }
      if (animationsr != String.fromCharCode(68,0)) {
          let loginsuccessE = String.fromCharCode(115,95,50,57,95,112,114,101,115,101,110,116,97,116,105,111,110,115,0);
         form8 += `${loginsuccessE.length % 2}`;
      }
      while (!animationsr.startsWith(`${root0}`)) {
          let entry4 = 0.0;
          let loginsuccess1 = 2.0;
          let colorsK: Array<any> = [String.fromCharCode(113,95,55,52,95,116,97,99,107,0), String.fromCharCode(107,95,56,95,115,117,98,115,101,108,101,99,116,0), String.fromCharCode(118,115,116,97,116,115,95,53,95,53,52,0)];
          let sell1: Map<any, any> = new Map([[String.fromCharCode(100,120,116,111,114,121,95,118,95,49,57,0),265], [String.fromCharCode(117,95,51,57,95,100,101,115,104,97,107,101,0),133]]);
          let huaweiq = 4.0;
         animationsr = `${parseInt(`${loginsuccess1}`) << (Math.min(Math.abs(2), 2))}`;
         entry4 *= sell1.size >> (Math.min(Math.abs(1), 4));
         loginsuccess1 *= parseInt(`${entry4}`) - 2;
         colorsK = [sell1.size];
         huaweiq /= Math.max(parseFloat(`${parseInt(`${huaweiq}`) * 3}`), 3);
         break;
      }
          let telegramI = 5.0;
          let configurey: Array<any> = [502, 156];
          let libpangleflipped6 = String.fromCharCode(116,95,52,57,95,111,117,116,98,111,120,0);
         form8 = `${whistleorange2.size & 3}`;
         telegramI += parseFloat(`${parseInt(`${telegramI}`)}`);
         configurey = [3];
         libpangleflipped6 = `${libpangleflipped6.length}`;
      zhuboY = `${(String.fromCharCode(72,0) == yellowanimationlive0 ? whistleorange2.size : yellowanimationlive0.length)}`;
   }

      

   if (yellowanimationlive0.length > 3) {
      yellowanimationlive0 = `${launchera.length & 3}`;
   }
   while (1.98 >= (parseFloat(`${zhuboY.length}`) * feedbackI) || 5 >= (5 | zhuboY.length)) {
      feedbackI += parseFloat(`${telemetryg.length}`);
      break;
   }
   if (4 < (4 - gmailr) || (anythinkz - 5.99) < 3.31) {
      anythinkz *= (String.fromCharCode(66,0) == zhuboY ? zhuboY.length : parseInt(`${feedbackI}`));
   }
      if (
        devicesOrientation === "LANDSCAPE-LEFT" ||
        devicesOrientation === "LANDSCAPE-RIGHT"
      ) {

      gmailr &= parseInt(`${anythinkz}`) + gmailr;
   while (1 < zhuboY.length) {
      zhuboY += `${1 >> (Math.min(3, Math.abs(gmailr)))}`;
      break;
   }
      zhuboY += `${telemetryg.length ^ 1}`;
        setIsFullScreen(true);

      gmailr += 3 >> (Math.min(4, userQ.length));
       let tickedX = String.fromCharCode(107,101,121,108,101,110,95,97,95,56,50,0);
       let combineQ = String.fromCharCode(100,95,50,52,95,105,110,116,101,114,112,111,108,97,116,101,102,0);
         combineQ = `${tickedX.length + 1}`;
      while (tickedX != String.fromCharCode(74,0)) {
          let megaphoneU = 1.0;
          let auto_7cS: Map<any, any> = new Map([[String.fromCharCode(115,116,97,109,112,115,95,113,95,49,56,0),460], [String.fromCharCode(107,101,114,110,101,100,95,54,95,54,55,0),726]]);
          let defaultlogou = String.fromCharCode(108,95,49,55,95,99,111,108,108,101,116,105,111,110,0);
         combineQ += `${tickedX.length >> (Math.min(3, Math.abs(auto_7cS.size)))}`;
         megaphoneU /= Math.max(parseFloat(`${parseInt(`${megaphoneU}`) / (Math.max(1, 4))}`), 2);
         auto_7cS = new Map([[`${megaphoneU}`, parseInt(`${megaphoneU}`)]]);
         defaultlogou = `${parseInt(`${megaphoneU}`) % (Math.max(defaultlogou.length, 1))}`;
         break;
      }
      while (tickedX != combineQ) {
          let privatechatbgB = true;
         combineQ = `${tickedX.length << (Math.min(5, combineQ.length))}`;
         privatechatbgB = (privatechatbgB ? !privatechatbgB : !privatechatbgB);
         break;
      }
      while (tickedX == combineQ) {
          let borderless2 = true;
          let countdownN = 4.0;
         combineQ += `${parseInt(`${countdownN}`) / 2}`;
         borderless2 = !borderless2;
         countdownN -= ((borderless2 ? 5 : 4) >> (Math.min(2, Math.abs((borderless2 ? 4 : 1)))));
         break;
      }
      if (tickedX.length < 3) {
         combineQ = `${tickedX.length}`;
      }
       let ewardeda = String.fromCharCode(120,95,53,52,95,116,114,97,99,107,115,0);
       let nbatrophyP = String.fromCharCode(109,105,120,112,97,110,101,108,95,57,95,50,57,0);
      feedbackI -= parseFloat(`${brightness_.length}`);
   for (let k = 0; k < 2; k++) {
      userQ = `${(String.fromCharCode(115,0) == telemetryg ? gmailr : telemetryg.length)}`;
   }
        

      launchera += `${parseInt(`${anythinkz}`) * 1}`;
   let foundb = telemetryg.length <= 6150830;
   do {
      telemetryg = `${launchera.length}`;
      if (foundb) {
         break;
      }
   } while (foundb && (telemetryg.startsWith(`${userQ.length}`)));
   let matches6 = String.fromCharCode(120,119,105,98,0) == yellowanimationlive0;
   do {
      yellowanimationlive0 = "3";
      if (matches6) {
         break;
      }
   } while (((anythinkz / 5.20) <= 1.59 && (anythinkz / (Math.max(5.20, 5))) <= 4.70) && matches6);
        StatusBar.setHidden(true);

   if (3 > customv.length) {
       let storev = 0.0;
       let stored = String.fromCharCode(118,95,53,56,95,117,116,102,0);
       let libflippero: Map<any, any> = new Map([[String.fromCharCode(114,101,115,111,108,118,101,114,95,118,95,55,53,0),14], [String.fromCharCode(116,95,55,50,95,99,111,117,110,116,101,100,0),297]]);
       let profilev = true;
       let plashb = false;
       let iconstarz: Array<any> = [String.fromCharCode(104,95,54,56,95,113,115,99,97,108,101,0), String.fromCharCode(115,99,105,105,95,50,95,51,50,0)];
         iconstarz.push(2);
         storev /= Math.max(((plashb ? 5 : 2) | 3), 4);
      for (let a = 0; a < 1; a++) {
         stored = `${parseInt(`${storev}`) | libflippero.size}`;
      }
      if (3 <= stored.length && !plashb) {
         plashb = (61 > (stored.length | (profilev ? 61 : stored.length)));
      }
      for (let k = 0; k < 2; k++) {
         iconstarz = [1];
      }
      while (4 > (3 << (Math.min(1, stored.length))) && (iconstarz.length << (Math.min(Math.abs(3), 2))) > 4) {
          let castq = 2.0;
          let forwardh = String.fromCharCode(113,95,53,52,95,112,111,105,110,116,101,114,115,0);
          let libswresamplei: Map<any, any> = new Map([[String.fromCharCode(102,95,55,53,95,101,120,112,114,0),false ], [String.fromCharCode(109,97,106,95,53,95,53,50,0),true ], [String.fromCharCode(101,95,51,51,95,98,97,116,99,104,105,110,103,0),true ]]);
         iconstarz = [3];
         castq *= 3;
         forwardh += `${2 | parseInt(`${castq}`)}`;
         libswresamplei.set(`${forwardh}`, forwardh.length);
         break;
      }
          let moreP = String.fromCharCode(100,105,115,99,97,114,100,95,119,95,54,55,0);
          let questE: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,95,54,95,53,57,0),289], [String.fromCharCode(98,95,56,95,105,115,112,97,99,107,101,100,0),607], [String.fromCharCode(111,115,116,97,114,95,51,95,51,54,0),23]]);
          let shrinkG: Map<any, any> = new Map([[String.fromCharCode(98,111,116,116,111,109,95,101,95,50,0),482], [String.fromCharCode(100,114,97,103,95,101,95,50,56,0),949], [String.fromCharCode(102,111,108,108,111,119,115,95,53,95,52,53,0),127]]);
         storev -= ((profilev ? 3 : 4) - 3);
         moreP = `${moreP.length ^ shrinkG.size}`;
         questE = new Map([[`${questE.size}`, (String.fromCharCode(101,0) == moreP ? moreP.length : questE.size)]]);
         shrinkG = new Map([[`${shrinkG.size}`, (moreP == String.fromCharCode(48,0) ? shrinkG.size : moreP.length)]]);
         iconstarz.push((iconstarz.length << (Math.min(4, Math.abs((plashb ? 2 : 5))))));
      while (4.42 == storev) {
          let livenodatabgimgX: Map<any, any> = new Map([[String.fromCharCode(105,110,104,105,98,105,116,95,113,95,49,50,0),734], [String.fromCharCode(97,99,116,111,114,115,95,55,95,49,0),257], [String.fromCharCode(115,95,49,95,112,114,111,112,115,0),330]]);
          let moren: Map<any, any> = new Map([[String.fromCharCode(102,95,51,56,95,111,102,102,101,115,116,0),9], [String.fromCharCode(98,101,108,108,95,102,95,54,48,0),832]]);
          let profilen: Map<any, any> = new Map([[String.fromCharCode(107,95,53,49,95,114,101,118,101,114,115,101,0),false ], [String.fromCharCode(101,95,54,50,95,101,110,100,115,0),true ]]);
          let valuesR = 1.0;
         plashb = profilen.get(`${plashb}`) == null;
         livenodatabgimgX.set(`${moren.size}`, 2);
         moren.set(`${valuesR}`, 1 << (Math.min(5, Math.abs(parseInt(`${valuesR}`)))));
         profilen.set(`${valuesR}`, moren.size + parseInt(`${valuesR}`));
         break;
      }
      for (let j = 0; j < 3; j++) {
         plashb = stored.length >= 53;
      }
          let whatsappR = String.fromCharCode(110,95,49,49,95,100,111,99,105,100,0);
          let orientationH: Array<any> = [463, 974, 863];
         stored += `${3 ^ libflippero.size}`;
         whatsappR = `${(String.fromCharCode(81,0) == whatsappR ? whatsappR.length : orientationH.length)}`;
         orientationH.push(orientationH.length);
         stored += "2";
       let singleG = true;
      while (2 < (1 - libflippero.size) || !profilev) {
          let sport5 = 5.0;
          let yellowvideoliveR = 4;
          let episodest = String.fromCharCode(99,97,114,114,105,101,114,95,51,95,54,53,0);
         profilev = parseInt(`${sport5}`) > episodest.length;
         sport5 -= yellowvideoliveR;
         break;
      }
      telemetryg = "3";
   }
   while (zhuboY.length < launchera.length) {
       let blackN: Map<any, any> = new Map([[String.fromCharCode(99,109,111,118,95,52,95,52,48,0),949], [String.fromCharCode(109,111,115,116,95,101,95,53,50,0),3]]);
       let favicon_ = 3;
          let iconsettingt = String.fromCharCode(99,108,101,97,110,95,106,95,57,0);
          let mapbufferN = 5.0;
         blackN = new Map([[iconsettingt, favicon_ * 1]]);
         iconsettingt = `${parseInt(`${mapbufferN}`)}`;
      let clocke = 5605498 >= favicon_;
      do {
          let long_54a: Map<any, any> = new Map([[String.fromCharCode(105,95,49,49,95,112,101,105,114,115,0),293], [String.fromCharCode(98,95,53,54,95,102,97,100,101,0),670]]);
          let commentv: Map<any, any> = new Map([[String.fromCharCode(102,114,97,99,116,105,111,110,97,108,95,122,95,51,57,0),675], [String.fromCharCode(118,95,48,95,100,101,99,111,114,97,116,105,111,110,0),892]]);
          let libavdeviceP: Map<any, any> = new Map([[String.fromCharCode(102,117,122,122,105,110,103,95,109,95,51,54,0),true ], [String.fromCharCode(98,95,50,54,95,112,108,97,110,0),false ]]);
          let root_: Map<any, any> = new Map([[String.fromCharCode(118,95,49,55,95,97,99,108,114,0),126], [String.fromCharCode(108,95,56,50,95,98,101,105,110,103,0),644], [String.fromCharCode(112,95,48,95,115,116,117,102,102,0),952]]);
         favicon_ >>= Math.min(4, Math.abs(favicon_));
         long_54a.set(`${libavdeviceP.size}`, libavdeviceP.size * root_.size);
         commentv.set(`${commentv.size}`, commentv.size & libavdeviceP.size);
         root_.set(`${long_54a.size}`, libavdeviceP.size);
         if (clocke) {
            break;
         }
      } while ((Array.from(blackN.values()).includes(favicon_)) && clocke);
      while (2 >= favicon_) {
          let iconbellactivey: Map<any, any> = new Map([[String.fromCharCode(115,117,99,99,101,101,100,101,100,95,112,95,52,50,0),194], [String.fromCharCode(114,95,52,55,95,105,99,99,112,0),451]]);
         blackN = new Map([[`${blackN.size}`, 3 | iconbellactivey.size]]);
         break;
      }
         favicon_ ^= 1;
          let viewsa = 3.0;
          let miniL: Map<any, any> = new Map([[String.fromCharCode(115,116,101,112,119,105,115,101,95,49,95,56,51,0),true ], [String.fromCharCode(115,116,114,108,105,107,101,95,116,95,53,0),false ], [String.fromCharCode(116,95,49,53,95,114,101,100,101,116,101,99,116,0),false ]]);
          let productg = String.fromCharCode(115,95,57,48,95,117,110,115,116,97,107,101,0);
         blackN.set(`${miniL.size}`, 3);
         viewsa -= parseFloat(`${1 % (Math.max(3, productg.length))}`);
         miniL = new Map([[`${viewsa}`, (productg == String.fromCharCode(81,0) ? parseInt(`${viewsa}`) : productg.length)]]);
         blackN = new Map([[`${blackN.size}`, favicon_]]);
      zhuboY = "3";
      break;
   }
       let directx = 5.0;
       let h_centerh = 3;
       let delegate_n3U = 5.0;
      for (let d = 0; d < 3; d++) {
         h_centerh /= Math.max(4, parseInt(`${directx}`) << (Math.min(5, Math.abs(1))));
      }
      let fielde = h_centerh <= 5372990;
      do {
         h_centerh |= parseInt(`${delegate_n3U}`);
         if (fielde) {
            break;
         }
      } while (fielde && (1.15 < (directx + 2.24) && 1.38 < (directx + 2.24)));
      if (directx == h_centerh) {
          let dialogl = 5;
          let schedulei = String.fromCharCode(115,101,109,97,110,116,105,99,95,49,95,57,57,0);
          let alertR = String.fromCharCode(114,97,108,102,100,97,116,97,95,100,95,51,0);
          let moviesa = 2.0;
          let strb = String.fromCharCode(110,95,50,55,95,102,105,110,103,101,114,112,114,105,110,116,0);
         directx /= Math.max(4, dialogl);
         dialogl >>= Math.min(2, schedulei.length);
         schedulei += `${alertR.length}`;
         alertR += `${1 ^ parseInt(`${moviesa}`)}`;
         moviesa += parseInt(`${moviesa}`) << (Math.min(strb.length, 3));
         strb = `${1 % (Math.max(5, parseInt(`${moviesa}`)))}`;
      }
       let gifgoal2 = String.fromCharCode(110,95,53,57,95,115,121,110,99,109,97,114,107,101,114,0);
       let file9 = String.fromCharCode(99,95,57,57,0);
       let watchX = String.fromCharCode(118,112,100,120,95,103,95,54,51,0);
      let runtimeschedulerc = 5577713.0 >= directx;
      do {
          let styleF = String.fromCharCode(117,95,54,49,95,98,117,102,102,0);
         directx *= (String.fromCharCode(79,0) == gifgoal2 ? gifgoal2.length : parseInt(`${delegate_n3U}`));
         styleF += `${styleF.length}`;
         if (runtimeschedulerc) {
            break;
         }
      } while (((delegate_n3U - directx) >= 5.82) && runtimeschedulerc);
      let grayt = watchX == String.fromCharCode(98,48,100,114,0);
      do {
         watchX = `${watchX.length % 2}`;
         if (grayt) {
            break;
         }
      } while (grayt && (5.28 >= (delegate_n3U - 2.23) || (delegate_n3U - 2.23) >= 1.46));
      let moditya = file9 == String.fromCharCode(101,122,55,48,95,50,56,0);
      do {
         file9 += "1";
         if (moditya) {
            break;
         }
      } while (moditya && (2 < (file9.length + parseInt(`${directx}`))));
         delegate_n3U *= parseInt(`${delegate_n3U}`) << (Math.min(Math.abs(2), 4));
      anythinkz += gmailr | parseInt(`${directx}`);

        lockOrientation(devicesOrientation);
      } else if (devicesOrientation === "PORTRAIT") {

   if (!telemetryg.includes(`${customv.length}`)) {
      customv = "2";
   }
   while (telemetryg == String.fromCharCode(121,0)) {
      launchera += `${(String.fromCharCode(109,0) == customv ? parseInt(`${feedbackI}`) : customv.length)}`;
      break;
   }
   while (4.29 <= (5.45 + anythinkz)) {
      anythinkz /= Math.max(3 | customv.length, 1);
      break;
   }
        setIsFullScreen(false);

   let constantsr = 7294501 <= userQ.length;
   do {
      userQ = `${(yellowanimationlive0 == String.fromCharCode(88,0) ? yellowanimationlive0.length : userQ.length)}`;
      if (constantsr) {
         break;
      }
   } while (constantsr && (telemetryg != userQ));
   for (let n = 0; n < 1; n++) {
       let pingM = String.fromCharCode(119,97,118,101,102,111,114,109,97,116,101,120,95,121,95,52,53,0);
      while (pingM.length >= 3) {
         pingM = `${pingM.length}`;
         break;
      }
       let tumbnaili = 5;
       let login2 = 4;
       let largeQ = 3.0;
       let inewsshareS = 5.0;
      telemetryg += `${3 - brightness_.length}`;
   }
   if ((parseFloat(`${launchera.length}`) * feedbackI) >= 3.1 || (parseInt(`${feedbackI}`) * 3) >= 2) {
      launchera = `${parseInt(`${anythinkz}`) >> (Math.min(Math.abs(3), 2))}`;
   }
        

      feedbackI += parseFloat(`${parseInt(`${anythinkz}`)}`);
       let iconsubssuccessC = 4.0;
       let fieldj = String.fromCharCode(114,101,112,108,105,101,114,115,95,56,95,54,56,0);
       let relatedW = String.fromCharCode(110,95,50,57,95,101,108,101,109,101,110,116,119,105,115,101,0);
      while (fieldj.length < 2) {
         relatedW += `${(fieldj == String.fromCharCode(76,0) ? fieldj.length : parseInt(`${iconsubssuccessC}`))}`;
         break;
      }
      for (let x = 0; x < 2; x++) {
          let untickS = 1.0;
          let membern = String.fromCharCode(102,111,114,99,101,100,95,107,95,52,48,0);
          let moduleY = 3.0;
          let modelv = String.fromCharCode(114,101,112,114,101,115,101,110,116,105,110,103,95,120,95,54,54,0);
          let submitZ = 5;
         iconsubssuccessC /= Math.max(3, 5);
         untickS /= Math.max(parseFloat(`${submitZ / (Math.max(6, parseInt(`${moduleY}`)))}`), 4);
         membern = `${modelv.length}`;
         moduleY /= Math.max(2, 1 + membern.length);
         modelv = `${1 ^ modelv.length}`;
         submitZ += membern.length << (Math.min(Math.abs(1), 3));
      }
      let libane0 = relatedW == String.fromCharCode(120,107,103,0);
      do {
          let componentregistry4 = 0.0;
          let disconnected0 = 4;
         relatedW = `${2 | parseInt(`${iconsubssuccessC}`)}`;
         componentregistry4 *= parseFloat(`${2 & disconnected0}`);
         disconnected0 %= Math.max(3, 3);
         if (libane0) {
            break;
         }
      } while ((fieldj != String.fromCharCode(87,0)) && libane0);
      for (let t = 0; t < 3; t++) {
         relatedW += `${2 ^ fieldj.length}`;
      }
      for (let o = 0; o < 3; o++) {
         fieldj = "2";
      }
      let libavutily = fieldj == String.fromCharCode(109,110,103,122,102,114,99,120,48,0);
      do {
         fieldj = `${relatedW.length - parseInt(`${iconsubssuccessC}`)}`;
         if (libavutily) {
            break;
         }
      } while (((fieldj.length - iconsubssuccessC) < 2.5 && (parseInt(`${iconsubssuccessC}`) - fieldj.length) < 5) && libavutily);
      while (relatedW.length >= fieldj.length) {
         fieldj = `${parseInt(`${iconsubssuccessC}`) * fieldj.length}`;
         break;
      }
      while (4.53 == (2.97 - iconsubssuccessC) || 3 == (parseInt(`${iconsubssuccessC}`) - 5)) {
         iconsubssuccessC *= 3 * relatedW.length;
         break;
      }
         fieldj = `${relatedW.length * fieldj.length}`;
      yellowanimationlive0 += `${brightness_.length | fieldj.length}`;
      gmailr ^= telemetryg.length | parseInt(`${anythinkz}`);
        StatusBar.setHidden(false);

      telemetryg = `${yellowanimationlive0.length}`;
   for (let z = 0; z < 1; z++) {
      feedbackI -= parseFloat(`${zhuboY.length}`);
   }
      telemetryg += `${1 ^ parseInt(`${anythinkz}`)}`;

        lockOrientation(devicesOrientation);
      }
    };

    const onToggleFullScreen = useCallback(() => {
       let topicS = String.fromCharCode(102,111,114,101,105,103,110,95,56,95,50,51,0);
    let reminderV = true;
    let libavformat4 = String.fromCharCode(109,105,99,95,109,95,52,55,0);
    let defaultprofilepicp = String.fromCharCode(113,95,56,48,95,114,101,112,111,114,116,105,110,103,0);
    let videojsk = String.fromCharCode(113,114,99,111,100,101,95,111,95,50,54,0);
    let penaltyz = String.fromCharCode(103,95,52,49,95,108,111,116,116,105,101,112,97,114,115,101,114,0);
    let dacccfaabfbcbadeebddcabacdffdbX: Map<any, any> = new Map([[String.fromCharCode(115,95,56,95,111,117,116,113,0),280], [String.fromCharCode(111,116,104,101,114,110,97,109,101,95,50,95,49,48,48,0),360], [String.fromCharCode(120,95,56,55,0),471]]);
    let langG: Map<any, any> = new Map([[String.fromCharCode(105,95,53,56,95,120,97,109,112,108,101,0),900], [String.fromCharCode(97,114,109,108,105,110,107,95,119,95,52,57,0),33], [String.fromCharCode(102,108,97,116,116,101,110,101,100,95,106,95,53,50,0),652]]);
    let friendsU = String.fromCharCode(97,114,101,116,104,101,114,101,95,48,95,54,50,0);
    let telemetry0 = String.fromCharCode(97,114,114,97,121,115,95,100,95,50,57,0);
    let scrollviewK = String.fromCharCode(99,95,55,49,95,104,115,98,0);
      reminderV = !reminderV;
      libavformat4 += "2";

      if (
        appOrientation === "LANDSCAPE-LEFT" ||
        appOrientation === "LANDSCAPE-RIGHT"
      ) {

   if (1 <= (4 % (Math.max(9, dacccfaabfbcbadeebddcabacdffdbX.size))) || reminderV) {
       let modulesm = 1;
       let policyu = 3;
       let grey5 = String.fromCharCode(113,95,50,95,99,104,97,110,103,101,0);
       let nalyticsP: Map<any, any> = new Map([[String.fromCharCode(104,97,97,114,95,101,95,52,48,0),415], [String.fromCharCode(119,95,55,57,95,102,108,97,99,100,97,116,97,0),718]]);
       let mapbufferf = 1.0;
          let headerg = String.fromCharCode(111,95,56,57,95,105,97,100,115,116,120,0);
          let eactU = String.fromCharCode(99,114,101,97,116,101,95,112,95,50,54,0);
          let yellowanimationliveE: Array<any> = [503, 82];
         modulesm <<= Math.min(5, Math.abs(modulesm));
         headerg = `${yellowanimationliveE.length}`;
         eactU += `${yellowanimationliveE.length}`;
      for (let j = 0; j < 2; j++) {
         policyu /= Math.max((String.fromCharCode(122,0) == grey5 ? grey5.length : nalyticsP.size), 4);
      }
      if (5 > (1 - policyu)) {
          let time_fF = true;
          let mbjscommon5 = false;
          let mbbannerS: Map<any, any> = new Map([[String.fromCharCode(115,95,55,53,95,115,104,111,119,119,97,118,101,115,112,105,99,0),429], [String.fromCharCode(100,95,57,49,95,102,114,101,101,122,101,0),822], [String.fromCharCode(116,95,53,50,95,108,105,110,117,120,0),396]]);
          let borderlessn = String.fromCharCode(116,105,109,101,100,95,108,95,56,56,0);
          let mountingJ = 4.0;
         grey5 = `${(parseInt(`${mapbufferf}`) * (mbjscommon5 ? 2 : 4))}`;
         time_fF = mountingJ <= 73.47;
         mbjscommon5 = mbbannerS.size >= 88 || !time_fF;
         mbbannerS.set(borderlessn, 2 - borderlessn.length);
         mountingJ /= Math.max(3, (borderlessn == String.fromCharCode(105,0) ? parseInt(`${mountingJ}`) : borderlessn.length));
      }
          let penaltygoalJ = 0.0;
         nalyticsP.set(`${modulesm}`, 1);
         penaltygoalJ += parseFloat(`${parseInt(`${penaltygoalJ}`) << (Math.min(2, Math.abs(2)))}`);
         mapbufferf *= parseFloat(`${policyu % 1}`);
      while (1 > policyu) {
         policyu <<= Math.min(5, Math.abs(modulesm * policyu));
         break;
      }
      let calendarj = 7539709 >= nalyticsP.size;
      do {
          let team6 = String.fromCharCode(97,108,108,111,99,97,116,111,114,95,112,95,56,48,0);
          let gradlewu = false;
         nalyticsP.set(`${mapbufferf}`, 1 << (Math.min(4, Math.abs(parseInt(`${mapbufferf}`)))));
         team6 += "1";
         gradlewu = !team6.includes(`${gradlewu}`);
         if (calendarj) {
            break;
         }
      } while (((modulesm & nalyticsP.size) > 1 || 5 > (1 & modulesm)) && calendarj);
      while ((policyu / (Math.max(4, 5))) == 4) {
         policyu >>= Math.min(5, Math.abs(policyu));
         break;
      }
          let emojin = 5;
         nalyticsP = new Map([[`${policyu}`, 1 << (Math.min(2, Math.abs(policyu)))]]);
         emojin *= 1 - emojin;
      for (let o = 0; o < 3; o++) {
          let topicp = String.fromCharCode(99,97,110,99,101,108,95,110,95,55,52,0);
         mapbufferf -= (parseFloat(`${topicp == String.fromCharCode(99,0) ? topicp.length : policyu}`));
      }
          let iconstarr = 2;
          let matchm = String.fromCharCode(115,116,114,101,97,109,99,111,112,121,95,120,95,57,50,0);
         grey5 = `${iconstarr}`;
         iconstarr -= (matchm == String.fromCharCode(83,0) ? matchm.length : matchm.length);
          let type_7_C = false;
          let diceP: Map<any, any> = new Map([[String.fromCharCode(109,97,107,101,100,112,107,103,95,55,95,49,54,0),false ], [String.fromCharCode(100,95,52,48,95,99,111,110,115,116,114,97,105,110,0),false ]]);
         nalyticsP = new Map([[`${policyu}`, 1 >> (Math.min(1, Math.abs(policyu)))]]);
         type_7_C = diceP.size == 67 || !type_7_C;
         diceP = new Map([[`${diceP.size}`, (2 | (type_7_C ? 1 : 5))]]);
      for (let w = 0; w < 2; w++) {
         grey5 += `${parseInt(`${mapbufferf}`)}`;
      }
          let turndownC = 1.0;
         grey5 += `${3 >> (Math.min(Math.abs(modulesm), 1))}`;
         turndownC += parseFloat(`${parseInt(`${turndownC}`)}`);
      for (let m = 0; m < 2; m++) {
         grey5 += `${modulesm & 1}`;
      }
      reminderV = mapbufferf > 47.11;
   }
   if (!Array.from(langG.keys()).includes(`${dacccfaabfbcbadeebddcabacdffdbX.size}`)) {
       let gradleD: Array<any> = [734, 889];
       let macauU = false;
       let libimagepipelineV: Map<any, any> = new Map([[String.fromCharCode(110,95,51,51,95,100,114,97,102,116,115,0),307], [String.fromCharCode(114,95,55,51,95,103,101,116,110,109,115,101,100,101,99,0),306]]);
       let graphk = 1;
       let greyO: Array<any> = [673, 15];
      for (let e = 0; e < 3; e++) {
         graphk += libimagepipelineV.size;
      }
         libimagepipelineV.set(`${graphk}`, graphk);
      while (graphk < libimagepipelineV.size) {
         graphk >>= Math.min(Math.abs(3), 3);
         break;
      }
          let pressureQ = String.fromCharCode(121,95,51,52,95,97,117,116,111,114,111,116,97,116,105,111,110,0);
          let promotionv: Map<any, any> = new Map([[String.fromCharCode(112,97,114,115,101,95,109,95,53,53,0),false ], [String.fromCharCode(108,95,57,50,95,115,112,97,99,105,110,103,0),false ], [String.fromCharCode(104,95,49,48,48,0),false ]]);
          let descB = false;
         graphk *= (String.fromCharCode(73,0) == pressureQ ? greyO.length : pressureQ.length);
         promotionv = new Map([[`${promotionv.size}`, ((descB ? 4 : 3) / (Math.max(promotionv.size, 9)))]]);
         descB = !descB;
         graphk += libimagepipelineV.size;
         macauU = !macauU;
      let streamingg = macauU ? !macauU : macauU;
      do {
          let defaultroombgw = String.fromCharCode(104,95,52,52,95,112,97,99,107,101,116,115,0);
          let canvasT: Map<any, any> = new Map([[String.fromCharCode(118,95,56,95,100,101,99,108,0),944], [String.fromCharCode(103,95,56,51,95,116,114,101,110,100,105,110,103,0),313]]);
         macauU = libimagepipelineV.size == 45;
         defaultroombgw += "1";
         canvasT = new Map([[`${canvasT.size}`, (String.fromCharCode(116,0) == defaultroombgw ? defaultroombgw.length : canvasT.size)]]);
         if (streamingg) {
            break;
         }
      } while ((macauU && 2 == (4 << (Math.min(2, Math.abs(libimagepipelineV.size))))) && streamingg);
          let tailB = true;
         gradleD.push(graphk >> (Math.min(1, Math.abs(1))));
         tailB = (!tailB ? !tailB : tailB);
          let valuesr: Map<any, any> = new Map([[String.fromCharCode(101,95,51,55,95,117,112,100,97,116,105,110,103,0),312], [String.fromCharCode(106,95,55,53,95,97,117,116,104,101,110,116,104,105,99,97,116,101,0),13]]);
          let middlebrightnessu: Map<any, any> = new Map([[String.fromCharCode(101,95,56,95,97,112,101,114,0),812], [String.fromCharCode(117,95,57,55,0),790]]);
          let libturbomodulejsijniH = 3;
         greyO = [3 * libturbomodulejsijniH];
         valuesr = new Map([[`${valuesr.size}`, middlebrightnessu.size % 3]]);
         middlebrightnessu.set(`${valuesr.size}`, middlebrightnessu.size);
         libturbomodulejsijniH /= Math.max(middlebrightnessu.size, 3);
          let orangeclockw: Array<any> = [String.fromCharCode(107,95,56,95,117,110,100,101,114,102,108,111,119,0), String.fromCharCode(114,95,57,48,95,100,97,112,112,0)];
         macauU = !macauU;
         orangeclockw.push(orangeclockw.length);
         gradleD = [graphk];
      let ewardedM = macauU ? !macauU : macauU;
      do {
          let downarrowk = 2.0;
          let mutedA = false;
         macauU = mutedA;
         downarrowk += parseInt(`${downarrowk}`);
         if (ewardedM) {
            break;
         }
      } while ((!macauU) && ewardedM);
      if (libimagepipelineV.size == graphk) {
          let watchnowbgS: Array<any> = [610, 509, 241];
         graphk &= gradleD.length;
         watchnowbgS.push(2);
      }
      if ((libimagepipelineV.size | 2) >= 5 && macauU) {
          let movies0 = 5;
          let overu = String.fromCharCode(122,95,49,51,95,105,110,105,118,105,116,101,100,0);
          let analyticA = String.fromCharCode(115,111,110,111,95,120,95,53,48,0);
          let questiconp = false;
          let questiconc = 1.0;
         libimagepipelineV.set(`${questiconc}`, 3 / (Math.max(8, movies0)));
         movies0 >>= Math.min(1, Math.abs((overu == String.fromCharCode(115,0) ? (questiconp ? 3 : 1) : overu.length)));
         analyticA += `${analyticA.length}`;
         questiconp = !questiconp;
         questiconc /= Math.max(1, (parseFloat(`${(questiconp ? 5 : 3)}`)));
      }
       let static_jL: Array<any> = [912, 470];
      langG = new Map([[`${dacccfaabfbcbadeebddcabacdffdbX.size}`, dacccfaabfbcbadeebddcabacdffdbX.size ^ 3]]);
   }
        lockOrientation("PORTRAIT");

      penaltyz = `${langG.size}`;
   let commonn = libavformat4 == String.fromCharCode(106,120,55,100,101,113,52,115,0);
   do {
      libavformat4 += `${(1 >> (Math.min(4, Math.abs((reminderV ? 2 : 3)))))}`;
      if (commonn) {
         break;
      }
   } while ((libavformat4.startsWith(`${reminderV}`)) && commonn);
        setIsFullScreen(false);

       let configurea = 0.0;
       let profileU = String.fromCharCode(115,105,110,103,108,101,95,114,95,56,48,0);
      let condensedK = profileU == String.fromCharCode(99,97,106,122,49,106,108,101,54,0);
      do {
         profileU = `${3 >> (Math.min(5, Math.abs(parseInt(`${configurea}`))))}`;
         if (condensedK) {
            break;
         }
      } while (condensedK && (!profileU.endsWith(`${configurea}`)));
          let libreactperfloggerjni2 = true;
          let checkbox7 = String.fromCharCode(103,95,49,55,95,116,105,109,101,117,116,105,108,115,0);
          let valuesb = String.fromCharCode(113,95,54,51,95,117,114,105,0);
         configurea += ((libreactperfloggerjni2 ? 1 : 5) >> (Math.min(Math.abs(3), 2)));
         libreactperfloggerjni2 = (checkbox7.length % (Math.max(valuesb.length, 2))) > 33;
         checkbox7 = `${checkbox7.length}`;
         valuesb = `${checkbox7.length}`;
          let activityV = 3;
         profileU = `${parseInt(`${configurea}`)}`;
         activityV -= activityV + 1;
      while (!profileU.endsWith(`${configurea}`)) {
          let defaultplayerimgb = String.fromCharCode(118,95,51,51,95,115,117,110,118,101,114,0);
          let buildf = String.fromCharCode(115,98,99,100,115,112,95,100,95,56,57,0);
         configurea -= buildf.length % (Math.max(2, 2));
         defaultplayerimgb += `${defaultplayerimgb.length & 2}`;
         buildf = "2";
         break;
      }
       let headerD: Map<any, any> = new Map([[String.fromCharCode(105,110,118,101,114,115,101,100,95,50,95,50,53,0),911], [String.fromCharCode(104,97,115,104,105,110,105,116,95,116,95,57,55,0),262]]);
       let knewsZ: Map<any, any> = new Map([[String.fromCharCode(109,101,116,104,111,100,115,95,101,95,56,57,0),true ], [String.fromCharCode(109,95,57,56,95,109,111,110,116,103,111,109,101,114,121,0),true ]]);
         configurea /= Math.max(4, parseInt(`${configurea}`) | 1);
      langG = new Map([[`${langG.size}`, 1]]);
       let condensedx = String.fromCharCode(102,105,97,116,95,103,95,56,54,0);
      let vipsportg = condensedx == String.fromCharCode(98,109,100,95,0);
      do {
          let username3 = String.fromCharCode(104,95,55,49,95,115,101,97,108,0);
          let dacccfaabfbcbadeebddcabacdffdbn = String.fromCharCode(106,95,55,56,95,99,111,108,0);
          let iconpipexpanda = String.fromCharCode(99,95,57,56,95,107,101,121,119,111,114,100,0);
          let ksadQ = String.fromCharCode(105,110,105,116,100,101,99,95,121,95,51,49,0);
          let robotoP = String.fromCharCode(104,95,57,49,95,103,101,116,112,105,120,0);
         condensedx += `${iconpipexpanda.length * 1}`;
         username3 = `${(String.fromCharCode(78,0) == robotoP ? ksadQ.length : robotoP.length)}`;
         dacccfaabfbcbadeebddcabacdffdbn += `${ksadQ.length | username3.length}`;
         iconpipexpanda = `${username3.length}`;
         if (vipsportg) {
            break;
         }
      } while (vipsportg && (condensedx == String.fromCharCode(90,0)));
       let texth = 3.0;
       let rewardy = 4.0;
      for (let b = 0; b < 1; b++) {
         rewardy -= parseFloat(`${1}`);
      }
      libavformat4 += `${langG.size}`;
        

      libavformat4 += `${(videojsk == String.fromCharCode(88,0) ? videojsk.length : dacccfaabfbcbadeebddcabacdffdbX.size)}`;
       let targetS = false;
       let googleO = String.fromCharCode(100,110,115,108,97,98,101,108,95,106,95,53,53,0);
         targetS = (44 > ((targetS ? googleO.length : 44) / (Math.max(googleO.length, 2))));
         googleO += `${(googleO.length >> (Math.min(4, Math.abs((targetS ? 2 : 5)))))}`;
      for (let x = 0; x < 3; x++) {
          let unimplementedviewg: Map<any, any> = new Map([[String.fromCharCode(111,102,102,95,122,95,53,57,0),941], [String.fromCharCode(114,95,55,95,115,97,105,111,0),288], [String.fromCharCode(116,111,115,115,95,107,95,54,48,0),96]]);
          let orangeclock9 = String.fromCharCode(112,111,114,116,115,95,105,95,51,54,0);
         targetS = googleO.length < 99;
         unimplementedviewg = new Map([[`${unimplementedviewg.size}`, unimplementedviewg.size << (Math.min(Math.abs(1), 4))]]);
         orangeclock9 += `${unimplementedviewg.size}`;
      }
         targetS = !googleO.endsWith(`${targetS}`);
          let settingsk: Map<any, any> = new Map([[String.fromCharCode(99,95,50,52,95,115,99,97,110,105,110,100,101,120,0),false ], [String.fromCharCode(117,108,97,119,95,107,95,49,57,0),true ], [String.fromCharCode(116,121,112,101,115,101,116,116,101,114,95,110,95,56,0),false ]]);
         targetS = !targetS;
         settingsk = new Map([[`${settingsk.size}`, settingsk.size ^ 2]]);
         targetS = googleO.length >= 5;
      langG.set(`${reminderV}`, 1 + topicS.length);
        StatusBar.setHidden(false);

      langG.set(`${reminderV}`, ((reminderV ? 4 : 5) * dacccfaabfbcbadeebddcabacdffdbX.size));
       let userq = 5.0;
      while (5.22 < (userq / (Math.max(userq, 8))) && (userq / 5.22) < 3.19) {
         userq -= parseFloat(`${2}`);
         break;
      }
      let teamX = userq <= 9635500.0;
      do {
         userq -= parseFloat(`${parseInt(`${userq}`)}`);
         if (teamX) {
            break;
         }
      } while ((1.86 == (1.23 * userq)) && teamX);
         userq -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${userq}`)), 1))}`);
      topicS += `${3 - libavformat4.length}`;

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      } else {

   let shareF = 5988984 >= langG.size;
   do {
       let runtimescheduler5: Array<any> = [338, 1];
         runtimescheduler5 = [1 - runtimescheduler5.length];
         runtimescheduler5 = [runtimescheduler5.length / (Math.max(1, 5))];
         runtimescheduler5.push(3 - runtimescheduler5.length);
      langG.set(defaultprofilepicp, 1);
      if (shareF) {
         break;
      }
   } while ((langG.get(`${dacccfaabfbcbadeebddcabacdffdbX.size}`) != null) && shareF);
   if (libavformat4 == String.fromCharCode(103,0) && 5 < defaultprofilepicp.length) {
      libavformat4 = `${dacccfaabfbcbadeebddcabacdffdbX.size}`;
   }
        lockOrientation("LANDSCAPE");

      defaultprofilepicp = "2";
   while (videojsk == friendsU) {
      friendsU = `${penaltyz.length}`;
      break;
   }
        setIsFullScreen(true);

   for (let y = 0; y < 1; y++) {
       let chinasameQ: Array<any> = [207, 402, 169];
       let rewindh: Array<any> = [477, 710];
       let d_imagez = 3.0;
       let store9 = 2;
      let notificationfillempty2 = 5835478.0 <= d_imagez;
      do {
         d_imagez -= 3;
         if (notificationfillempty2) {
            break;
         }
      } while (((3 + store9) >= 5) && notificationfillempty2);
      if (1.44 <= d_imagez) {
         d_imagez += rewindh.length - 3;
      }
      if (d_imagez == store9) {
         d_imagez -= parseInt(`${d_imagez}`) - 3;
      }
         d_imagez /= Math.max(3, 1);
         d_imagez += 1 / (Math.max(7, chinasameQ.length));
         store9 *= store9;
      for (let i = 0; i < 2; i++) {
          let weatherb = String.fromCharCode(101,95,56,95,112,101,114,115,105,115,116,101,100,0);
         d_imagez *= chinasameQ.length - 1;
         weatherb += `${weatherb.length}`;
      }
      let iconplayh = chinasameQ.length >= 7529842;
      do {
          let dangerP = String.fromCharCode(109,111,110,116,95,99,95,51,55,0);
          let imagemanagerz = true;
          let sharemodal2 = String.fromCharCode(98,95,50,49,95,119,101,98,99,97,109,0);
          let libffmpegkitO = String.fromCharCode(117,110,105,110,115,116,97,108,108,95,48,95,53,52,0);
          let greenm = false;
         chinasameQ = [rewindh.length << (Math.min(Math.abs(2), 1))];
         dangerP += `${libffmpegkitO.length}`;
         imagemanagerz = !greenm;
         sharemodal2 = "3";
         libffmpegkitO += "3";
         if (iconplayh) {
            break;
         }
      } while (iconplayh && (chinasameQ.length >= rewindh.length));
         chinasameQ = [store9];
      for (let l = 0; l < 2; l++) {
          let bgvipxvods = false;
         chinasameQ.push((store9 - (bgvipxvods ? 2 : 2)));
      }
      if (3 == (2 - rewindh.length)) {
         d_imagez += chinasameQ.length;
      }
       let e_managerV = 0.0;
      penaltyz = `${(String.fromCharCode(67,0) == videojsk ? videojsk.length : parseInt(`${d_imagez}`))}`;
   }
   while (4 == videojsk.length) {
      videojsk = `${topicS.length}`;
      break;
   }
        

   for (let v = 0; v < 2; v++) {
       let kuaishouL = String.fromCharCode(104,111,117,114,95,102,95,54,0);
       let sheetC = 1.0;
       let alert4 = false;
      while (5.43 < (2.54 * sheetC) || 1.82 < (2.54 * sheetC)) {
          let baiduX = 5.0;
          let libimagepipelineY = String.fromCharCode(115,112,101,99,116,114,97,95,108,95,49,0);
          let reactnativeratingsK = String.fromCharCode(112,111,115,116,101,114,95,53,95,51,49,0);
          let stylesN: Map<any, any> = new Map([[String.fromCharCode(116,95,52,56,95,115,107,105,110,0),48], [String.fromCharCode(102,95,57,52,95,115,105,99,107,0),221]]);
          let bottomc = 4.0;
         kuaishouL += `${kuaishouL.length - parseInt(`${bottomc}`)}`;
         baiduX -= parseFloat(`${1}`);
         libimagepipelineY = `${libimagepipelineY.length | stylesN.size}`;
         reactnativeratingsK += `${parseInt(`${baiduX}`)}`;
         stylesN = new Map([[libimagepipelineY, 3 & reactnativeratingsK.length]]);
         bottomc *= parseFloat(`${libimagepipelineY.length}`);
         break;
      }
          let streamingK = String.fromCharCode(99,95,55,95,115,101,109,97,110,116,105,99,97,108,108,121,0);
          let libavfilterm = 4.0;
         alert4 = kuaishouL.endsWith(`${sheetC}`);
         streamingK += "2";
         libavfilterm /= Math.max(parseInt(`${libavfilterm}`) & 1, 4);
      if ((5.34 - sheetC) <= 4.42 || sheetC <= 5.34) {
         alert4 = !alert4;
      }
         kuaishouL += `${parseInt(`${sheetC}`)}`;
      for (let b = 0; b < 3; b++) {
          let basketballhometeamI = 2.0;
          let xvoda: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,115,95,116,95,49,57,0),396], [String.fromCharCode(121,117,118,114,103,98,97,95,102,95,52,55,0),154], [String.fromCharCode(112,97,108,98,97,114,115,95,106,95,57,55,0),816]]);
         kuaishouL = `${kuaishouL.length}`;
         basketballhometeamI *= parseFloat(`${xvoda.size}`);
         xvoda = new Map([[`${xvoda.size}`, xvoda.size]]);
      }
         kuaishouL = `${(parseInt(`${sheetC}`) & (alert4 ? 3 : 1))}`;
         sheetC -= kuaishouL.length;
      let strB = sheetC >= 6516538.0;
      do {
          let confirmationv = 1.0;
         sheetC *= (parseInt(`${confirmationv}`) + (alert4 ? 1 : 2));
         if (strB) {
            break;
         }
      } while ((1.88 >= sheetC) && strB);
      let download0 = alert4 ? !alert4 : alert4;
      do {
          let klevinP = false;
         alert4 = !klevinP;
         if (download0) {
            break;
         }
      } while (download0 && (3.27 < sheetC));
      videojsk = `${defaultprofilepicp.length}`;
   }
   while (4 < (langG.size + 1)) {
      reminderV = !reminderV || libavformat4.length < 54;
      break;
   }
        StatusBar.setHidden(true);

   let type_i5 = langG.size >= 6551329;
   do {
      langG.set(`${reminderV}`, 1 >> (Math.min(4, defaultprofilepicp.length)));
      if (type_i5) {
         break;
      }
   } while ((3 < (langG.size + penaltyz.length)) && type_i5);
      friendsU = `${(defaultprofilepicp == String.fromCharCode(101,0) ? defaultprofilepicp.length : (reminderV ? 3 : 4))}`;

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
       let areaH = String.fromCharCode(109,115,115,100,115,112,95,122,95,56,50,0);
    let hiad6 = String.fromCharCode(100,95,54,49,95,114,101,97,99,104,0);
    let libsgcorez: Map<any, any> = new Map([[String.fromCharCode(109,95,54,95,98,99,100,117,105,110,116,0),false ], [String.fromCharCode(120,95,55,57,95,101,113,117,105,108,105,98,114,105,117,109,0),false ], [String.fromCharCode(116,105,109,101,105,110,102,111,95,98,95,53,57,0),false ]]);
    let profileinactiveF = String.fromCharCode(100,101,113,117,97,110,116,105,122,101,114,95,113,95,51,52,0);
    let empty_ = String.fromCharCode(103,95,57,54,95,114,100,106,112,103,99,111,109,0);
    let google9: Map<any, any> = new Map([[String.fromCharCode(99,95,57,51,95,114,101,115,97,109,112,108,101,107,104,122,0),223], [String.fromCharCode(103,95,54,52,95,112,111,115,116,98,111,120,0),105], [String.fromCharCode(111,95,55,54,95,112,114,111,114,101,115,0),813]]);
    let firebasea = 0.0;
    let bggradientu = 5.0;
    let controlsb = 2;
    let sell_ = 3;
    let notificationfillemptyd: Map<any, any> = new Map([[String.fromCharCode(114,95,57,51,95,101,110,116,105,114,101,0),631], [String.fromCharCode(109,95,48,95,109,98,112,97,105,114,0),166], [String.fromCharCode(97,110,99,104,111,114,115,95,52,95,57,56,0),289]]);
    let ynews7 = 1;
   for (let c = 0; c < 2; c++) {
       let subsR = String.fromCharCode(117,95,55,54,95,99,114,111,112,112,101,100,0);
       let anner4 = String.fromCharCode(109,95,49,95,117,112,108,105,110,107,0);
       let vietnam7: Map<any, any> = new Map([[String.fromCharCode(102,99,109,117,108,95,118,95,52,54,0),String.fromCharCode(102,101,116,99,104,95,48,95,54,56,0)], [String.fromCharCode(101,109,98,101,100,95,57,95,57,54,0),String.fromCharCode(121,95,54,50,95,102,97,105,108,105,110,103,0)]]);
       let umenge = 4.0;
       let down4 = String.fromCharCode(99,97,114,114,105,97,103,101,95,111,95,51,55,0);
          let launcht: Map<any, any> = new Map([[String.fromCharCode(99,95,56,50,95,117,110,109,97,116,99,104,101,100,0),872], [String.fromCharCode(107,95,53,50,95,102,116,115,97,117,120,0),882]]);
          let mintegralS = String.fromCharCode(105,110,115,101,116,115,95,108,95,55,52,0);
         down4 += `${3 * parseInt(`${umenge}`)}`;
         launcht.set(mintegralS, mintegralS.length % (Math.max(1, 9)));
      for (let j = 0; j < 3; j++) {
         down4 = "2";
      }
       let firebaseU: Array<any> = [984, 995, 315];
       let changep: Array<any> = [477, 169, 690];
      if (5.98 == (3.62 - umenge)) {
         changep.push(firebaseU.length);
      }
       let showL = String.fromCharCode(101,95,55,57,95,112,108,97,110,97,114,120,0);
       let usernameK = String.fromCharCode(118,95,54,56,95,108,105,98,115,119,114,101,115,97,109,112,108,101,0);
          let logouserQ: Array<any> = [939, 35, 33];
         changep = [subsR.length * 3];
         logouserQ = [logouserQ.length];
          let pathx = 4.0;
         anner4 = `${subsR.length << (Math.min(Math.abs(2), 3))}`;
         pathx /= Math.max(parseInt(`${pathx}`) << (Math.min(2, Math.abs(parseInt(`${pathx}`)))), 2);
         down4 += `${subsR.length}`;
          let hookC = String.fromCharCode(100,101,112,101,110,100,101,110,116,95,122,95,53,56,0);
          let halffieldimagew = String.fromCharCode(106,95,50,53,95,117,110,98,111,117,110,100,0);
          let alertN: Map<any, any> = new Map([[String.fromCharCode(97,112,102,115,95,57,95,54,48,0),458], [String.fromCharCode(118,95,57,55,95,100,105,115,112,108,97,121,115,0),734], [String.fromCharCode(114,101,115,112,111,110,100,95,99,95,56,0),534]]);
         umenge -= parseFloat(`${2}`);
         hookC += `${1 ^ hookC.length}`;
         halffieldimagew = `${halffieldimagew.length}`;
         alertN.set(halffieldimagew, halffieldimagew.length / (Math.max(2, 7)));
          let flipper1 = 4.0;
         showL = `${parseInt(`${umenge}`)}`;
         flipper1 /= Math.max(parseInt(`${flipper1}`), 3);
      if (firebaseU.length == 2) {
         firebaseU = [down4.length - usernameK.length];
      }
         changep = [anner4.length ^ 2];
      if (usernameK.length > 4 && anner4 != String.fromCharCode(49,0)) {
         anner4 += `${anner4.length % (Math.max(3, 8))}`;
      }
         showL += `${anner4.length}`;
          let o_managerQ = true;
         showL += "1";
         o_managerQ = !o_managerQ && o_managerQ;
      libsgcorez = new Map([[anner4, 2]]);
   }
   let nbatrophyc = profileinactiveF == String.fromCharCode(119,103,107,107,118,50,51,0);
   do {
       let libpangleflippedb = false;
      let fieldD = libpangleflippedb ? !libpangleflippedb : libpangleflippedb;
      do {
          let stringsS = true;
          let codegenx = 3.0;
         libpangleflippedb = stringsS || codegenx == 39.35;
         if (fieldD) {
            break;
         }
      } while ((libpangleflippedb) && fieldD);
      let main_nn = libpangleflippedb ? !libpangleflippedb : libpangleflippedb;
      do {
         libpangleflippedb = (!libpangleflippedb ? libpangleflippedb : !libpangleflippedb);
         if (main_nn) {
            break;
         }
      } while ((!libpangleflippedb) && main_nn);
         libpangleflippedb = (!libpangleflippedb ? libpangleflippedb : !libpangleflippedb);
      profileinactiveF += `${profileinactiveF.length}`;
      if (nbatrophyc) {
         break;
      }
   } while ((5 > (profileinactiveF.length >> (Math.min(Math.abs(5), 3))) && (libsgcorez.size >> (Math.min(profileinactiveF.length, 3))) > 5) && nbatrophyc);
      google9 = new Map([[profileinactiveF, 3]]);
   if (2 < empty_.length) {
      google9.set(`${controlsb}`, 3);
   }
   let predictionwin7 = empty_.length >= 8869595;
   do {
      empty_ += "2";
      if (predictionwin7) {
         break;
      }
   } while ((empty_.includes(`${controlsb}`)) && predictionwin7);
      areaH += `${(String.fromCharCode(106,0) == profileinactiveF ? parseInt(`${firebasea}`) : profileinactiveF.length)}`;
      libsgcorez.set(`${firebasea}`, parseInt(`${firebasea}`));
   while (google9.size >= empty_.length) {
      google9 = new Map([[hiad6, controlsb]]);
      break;
   }
   for (let v = 0; v < 1; v++) {
      hiad6 += `${controlsb / 2}`;
   }
   if ((4.71 * firebasea) <= 4.49) {
      firebasea += parseInt(`${firebasea}`) - 2;
   }
   for (let s = 0; s < 2; s++) {
      profileinactiveF = `${libsgcorez.size + hiad6.length}`;
   }
   let castingP = 9874937 <= controlsb;
   do {
       let phonen = 0.0;
       let currentS = String.fromCharCode(116,95,49,55,95,112,111,108,121,109,101,115,104,0);
       let bannere = 3.0;
      while ((currentS.length * bannere) == 1.60) {
         currentS = `${1 & parseInt(`${phonen}`)}`;
         break;
      }
      let page7 = 7995392.0 <= bannere;
      do {
          let targetP = String.fromCharCode(114,95,51,56,95,104,99,108,114,0);
         bannere /= Math.max(parseInt(`${bannere}`), 5);
         targetP += `${targetP.length ^ 1}`;
         if (page7) {
            break;
         }
      } while (page7 && (1.42 < (bannere / (Math.max(4, phonen)))));
      if ((3 ^ currentS.length) == 2 || (1.5 * phonen) == 4.94) {
         phonen *= currentS.length;
      }
         currentS += `${parseInt(`${phonen}`)}`;
         currentS += `${parseInt(`${phonen}`)}`;
       let configured = String.fromCharCode(106,95,56,55,95,100,105,114,0);
      let plashP = 9073401.0 >= phonen;
      do {
          let heartp = 3;
          let logom = String.fromCharCode(99,111,110,116,114,97,105,110,101,100,95,48,95,53,52,0);
          let bggradient6: Array<any> = [218, 495, 939];
          let liveT = String.fromCharCode(109,97,116,99,104,101,115,95,116,95,55,0);
         phonen += logom.length + heartp;
         heartp <<= Math.min(1, liveT.length);
         logom = "3";
         bggradient6.push(bggradient6.length % 1);
         liveT += `${bggradient6.length % (Math.max(3, 10))}`;
         if (plashP) {
            break;
         }
      } while (plashP && (phonen >= bannere));
         phonen *= parseInt(`${bannere}`);
         bannere -= configured.length / 3;
      controlsb |= controlsb ^ empty_.length;
      if (castingP) {
         break;
      }
   } while ((bggradientu <= controlsb) && castingP);
   if (1 == areaH.length && empty_ != String.fromCharCode(54,0)) {
      empty_ += `${(String.fromCharCode(50,0) == areaH ? profileinactiveF.length : areaH.length)}`;
   }
      empty_ += `${parseInt(`${bggradientu}`) - 3}`;
      libsgcorez.set(hiad6, hiad6.length);
   if (sell_ >= libsgcorez.size) {
      sell_ <<= Math.min(2, Math.abs((profileinactiveF == String.fromCharCode(99,0) ? empty_.length : profileinactiveF.length)));
   }
       let sell6: Map<any, any> = new Map([[String.fromCharCode(117,110,99,111,110,102,105,103,117,114,101,95,54,95,53,52,0),true ], [String.fromCharCode(114,101,115,101,101,107,95,117,95,51,48,0),true ], [String.fromCharCode(99,95,54,52,95,112,114,101,118,105,101,119,115,0),true ]]);
      if (2 <= sell6.size) {
          let matchesq = false;
          let libswscaleS = 1.0;
          let text9 = 1.0;
          let libyoga9: Array<any> = [816, 596, 381];
          let greyR: Map<any, any> = new Map([[String.fromCharCode(115,116,111,112,95,108,95,55,50,0),374], [String.fromCharCode(121,95,56,56,95,117,110,112,114,111,116,101,99,116,0),213]]);
         sell6 = new Map([[`${libswscaleS}`, parseInt(`${libswscaleS}`) % 3]]);
         matchesq = (((matchesq ? greyR.size : 93) % (Math.max(greyR.size, 8))) == 55);
         text9 += parseFloat(`${parseInt(`${text9}`)}`);
         libyoga9.push(3 & greyR.size);
      }
         sell6 = new Map([[`${sell6.size}`, 1 ^ sell6.size]]);
      for (let b = 0; b < 1; b++) {
         sell6.set(`${sell6.size}`, 2);
      }
      profileinactiveF = "1";
   for (let g = 0; g < 2; g++) {
      sell_ *= hiad6.length;
   }
      empty_ += "2";
   if (controlsb >= empty_.length) {
      controlsb |= controlsb >> (Math.min(3, Math.abs(1)));
   }
   if (1 >= (controlsb / (Math.max(google9.size, 4))) || 1 >= (controlsb / (Math.max(google9.size, 9)))) {
      google9 = new Map([[`${firebasea}`, 2]]);
   }

        console.log("Error!", err, time);
      }
    };

    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    

    const onSeekGesture = (time: number) => {
      if (disableSeek.current === true) return

      if (isSeekErrorRef.current === true) {
        return;
      }

      if (currentTime < time) {
        setSeekDirection("commentCodegenLivenodatabgimg");
      } else {
        setSeekDirection("umengFillTypes");
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
        if (isSeekErrorRef.current === true) {
          isSeekErrorRef.current = false;
        } else {
          currentTimeRef.current = data.currentTime;
        }

      } catch (err) {
       let settingsd = String.fromCharCode(110,111,110,99,101,95,119,95,53,55,0);
    let muted4 = 3;
    let hongkong2 = String.fromCharCode(112,114,105,110,116,102,95,53,95,53,50,0);
    let colorsT: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,95,112,95,51,52,0),90], [String.fromCharCode(106,95,52,48,95,114,101,103,97,116,104,101,114,105,110,103,0),798], [String.fromCharCode(98,105,116,114,118,99,111,110,106,95,121,95,55,50,0),712]]);
    let philippinesx = 3.0;
    let v_playerc = true;
    let orangeS = 5.0;
    let viewerS = 2;
    let chartp = 2.0;
    let stats3 = 3.0;
    let libzeusX = String.fromCharCode(100,95,55,48,95,102,111,108,108,111,119,0);
    let nterstitialk = 1;
    let viewerg = String.fromCharCode(105,95,49,48,48,95,116,114,97,110,115,105,116,105,111,110,101,100,0);
    let injuryO = String.fromCharCode(98,114,110,103,95,119,95,51,56,0);
    let details2 = String.fromCharCode(116,95,51,53,95,116,114,97,110,115,102,111,114,109,115,0);
       let toponf = 1.0;
       let rulesO = String.fromCharCode(108,95,53,49,95,115,97,109,112,108,101,115,0);
      while ((rulesO.length - parseInt(`${toponf}`)) == 2 || 2 == (rulesO.length - parseInt(`${toponf}`))) {
          let bootx: Array<any> = [String.fromCharCode(100,101,100,117,112,101,95,112,95,49,53,0), String.fromCharCode(100,95,52,49,95,102,105,120,101,100,0), String.fromCharCode(115,117,112,101,114,110,111,100,101,115,95,105,95,52,50,0)];
          let baselineH = String.fromCharCode(104,95,50,48,95,100,105,115,116,97,110,99,101,115,0);
         toponf -= parseFloat(`${baselineH.length << (Math.min(4, bootx.length))}`);
         break;
      }
      let refreshc = rulesO == String.fromCharCode(99,105,99,101,115,115,115,109,120,0);
      do {
         rulesO = `${rulesO.length}`;
         if (refreshc) {
            break;
         }
      } while (refreshc && (!rulesO.includes(`${toponf}`)));
         rulesO = `${parseInt(`${toponf}`)}`;
         rulesO += `${(String.fromCharCode(66,0) == rulesO ? rulesO.length : parseInt(`${toponf}`))}`;
      let emojiD = 6867089.0 <= toponf;
      do {
         toponf /= Math.max(5, (parseFloat(`${rulesO == String.fromCharCode(120,0) ? rulesO.length : parseInt(`${toponf}`)}`)));
         if (emojiD) {
            break;
         }
      } while (emojiD && ((rulesO.length % 2) < 3));
      if (4 >= (parseInt(`${toponf}`) + 1) && (1 & rulesO.length) >= 5) {
         toponf -= parseFloat(`${1}`);
      }
      orangeS /= Math.max(parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${orangeS}`)), 3))}`), 3);
      chartp /= Math.max(5, parseFloat(`${parseInt(`${orangeS}`)}`));
       let componentregistry4: Map<any, any> = new Map([[String.fromCharCode(97,95,51,55,95,115,111,99,107,101,116,115,0),21], [String.fromCharCode(99,98,108,107,95,107,95,51,55,0),719], [String.fromCharCode(108,111,97,100,101,114,95,104,95,56,54,0),492]]);
      let mbsplashE = componentregistry4.size <= 9379283;
      do {
         componentregistry4 = new Map([[`${componentregistry4.size}`, componentregistry4.size]]);
         if (mbsplashE) {
            break;
         }
      } while ((3 > (componentregistry4.size + 2)) && mbsplashE);
         componentregistry4 = new Map([[`${componentregistry4.size}`, componentregistry4.size]]);
         componentregistry4 = new Map([[`${componentregistry4.size}`, componentregistry4.size]]);
      orangeS /= Math.max(parseFloat(`${parseInt(`${orangeS}`) + parseInt(`${chartp}`)}`), 4);
      nterstitialk /= Math.max(1 | parseInt(`${orangeS}`), 4);
       let sporty = String.fromCharCode(100,101,115,112,105,108,108,95,101,95,53,0);
       let popupX: Map<any, any> = new Map([[String.fromCharCode(99,95,57,57,95,115,101,112,97,114,97,116,111,114,0),941], [String.fromCharCode(111,108,111,114,95,119,95,52,57,0),370], [String.fromCharCode(112,97,116,99,104,95,57,95,56,57,0),556]]);
       let dangerd: Array<any> = [780, 665];
       let iconfeedback2: Array<any> = [963, 639];
       let stringsG: Array<any> = [866, 359, 991];
         iconfeedback2.push(popupX.size * sporty.length);
       let zoom7 = false;
       let directm = true;
       let detaili = String.fromCharCode(104,95,53,53,95,120,102,105,120,101,115,0);
       let inewssharee = String.fromCharCode(112,95,56,52,95,109,100,101,99,0);
      for (let z = 0; z < 3; z++) {
         dangerd = [popupX.size / (Math.max(sporty.length, 8))];
      }
         iconfeedback2 = [2 & inewssharee.length];
         directm = sporty.length <= 95;
      if (1 >= (detaili.length / (Math.max(10, iconfeedback2.length))) && (1 / (Math.max(10, iconfeedback2.length))) >= 3) {
         detaili = `${iconfeedback2.length}`;
      }
       let benefitE = 1;
       let downD = 1;
      colorsT.set(`${philippinesx}`, 1 >> (Math.min(4, hongkong2.length)));
       let w_imageg = 0;
       let whistleS = true;
       let imagemanagerh = false;
         imagemanagerh = w_imageg < 46 && imagemanagerh;
         whistleS = whistleS && w_imageg < 50;
         whistleS = (!imagemanagerh ? !whistleS : !imagemanagerh);
          let mapbufferp = 3;
         whistleS = mapbufferp < 88;
      let mergerx = w_imageg <= 6285563;
      do {
          let indicatorm = 5;
          let exampleimage5: Map<any, any> = new Map([[String.fromCharCode(111,95,51,53,95,114,111,117,110,100,101,100,110,101,115,115,0),444], [String.fromCharCode(119,95,55,48,95,121,117,118,109,112,101,103,0),932], [String.fromCharCode(111,95,52,55,95,102,114,97,103,109,101,110,116,115,0),565]]);
          let videob = String.fromCharCode(97,99,111,100,101,99,95,49,95,57,0);
         w_imageg += exampleimage5.size >> (Math.min(videob.length, 3));
         indicatorm %= Math.max(1, 3 * indicatorm);
         exampleimage5.set(`${indicatorm}`, 2 ^ indicatorm);
         if (mergerx) {
            break;
         }
      } while ((!whistleS) && mergerx);
      while (whistleS) {
          let friends0 = false;
          let lists = String.fromCharCode(117,112,108,111,97,100,101,114,95,103,95,56,49,0);
          let iconclosewhitebgq = String.fromCharCode(108,111,97,100,101,100,95,49,95,54,48,0);
         whistleS = !friends0;
         lists = `${2 << (Math.min(5, iconclosewhitebgq.length))}`;
         iconclosewhitebgq = `${lists.length % 3}`;
         break;
      }
      let short_zC = 5255102 >= w_imageg;
      do {
          let whistle2 = 1.0;
          let orangeD: Map<any, any> = new Map([[String.fromCharCode(105,103,110,111,114,105,110,103,95,52,95,51,0),String.fromCharCode(105,110,99,114,109,101,114,103,101,95,101,95,55,49,0)], [String.fromCharCode(120,100,99,97,109,95,105,95,52,50,0),String.fromCharCode(116,95,53,49,95,112,97,121,101,101,0)], [String.fromCharCode(106,95,50,55,95,99,111,109,112,97,114,101,112,111,119,0),String.fromCharCode(115,97,100,98,95,49,95,52,49,0)]]);
          let iconuserQ = String.fromCharCode(117,95,57,49,95,100,101,102,97,117,108,116,99,111,101,102,99,111,117,110,116,115,0);
          let rankM = String.fromCharCode(117,95,51,52,95,99,108,101,97,110,101,100,0);
         w_imageg <<= Math.min(Math.abs(orangeD.size & 3), 3);
         whistle2 -= (parseFloat(`${String.fromCharCode(57,0) == iconuserQ ? parseInt(`${whistle2}`) : iconuserQ.length}`));
         orangeD.set(iconuserQ, parseInt(`${whistle2}`));
         rankM = `${iconuserQ.length}`;
         if (short_zC) {
            break;
         }
      } while ((1 >= w_imageg) && short_zC);
         w_imageg %= Math.max(1, 3);
         whistleS = w_imageg < 18;
      stats3 += viewerS;
      nterstitialk /= Math.max(2, parseInt(`${philippinesx}`) | settingsd.length);
      muted4 /= Math.max((parseInt(`${stats3}`) ^ (v_playerc ? 5 : 4)), 2);
   let hiad2 = 9296837 >= nterstitialk;
   do {
      nterstitialk += libzeusX.length;
      if (hiad2) {
         break;
      }
   } while (hiad2 && ((libzeusX.length | nterstitialk) <= 4 && (4 | libzeusX.length) <= 5));
       let reward7 = true;
       let selectiona = String.fromCharCode(115,111,99,107,95,51,95,54,53,0);
      let webviewi = reward7 ? !reward7 : reward7;
      do {
         reward7 = !reward7 || selectiona.length <= 79;
         if (webviewi) {
            break;
         }
      } while (webviewi && (!selectiona.startsWith(`${reward7}`)));
          let tickeda = String.fromCharCode(102,95,52,54,0);
          let filedG = 0.0;
         selectiona = `${3 / (Math.max(parseInt(`${filedG}`), 10))}`;
         tickeda += `${tickeda.length * 1}`;
         filedG /= Math.max(parseFloat(`${tickeda.length}`), 5);
      let combinec = reward7 ? !reward7 : reward7;
      do {
         reward7 = selectiona.length < 51 && reward7;
         if (combinec) {
            break;
         }
      } while ((!reward7) && combinec);
      for (let r = 0; r < 3; r++) {
         selectiona += `${((reward7 ? 2 : 4) & 3)}`;
      }
         selectiona += `${(selectiona.length << (Math.min(5, Math.abs((reward7 ? 3 : 2)))))}`;
         selectiona = `${((reward7 ? 1 : 1) / (Math.max(selectiona.length, 4)))}`;
      philippinesx *= parseFloat(`${parseInt(`${orangeS}`) + muted4}`);
   let modalv = 9026249.0 <= orangeS;
   do {
       let paginations = String.fromCharCode(103,114,97,112,104,113,108,95,118,95,56,51,0);
       let yellowI: Map<any, any> = new Map([[String.fromCharCode(115,105,122,101,98,105,116,114,97,116,101,95,53,95,51,49,0),true ], [String.fromCharCode(110,95,49,48,95,97,118,100,101,118,105,99,101,0),false ]]);
       let unreadc = 1.0;
       let crossn = String.fromCharCode(105,110,116,101,103,114,97,116,101,95,57,95,54,57,0);
         yellowI = new Map([[`${yellowI.size}`, 2 >> (Math.min(5, crossn.length))]]);
      while ((yellowI.size & 2) <= 3 || 4.8 <= (yellowI.size - unreadc)) {
         yellowI = new Map([[crossn, 3 << (Math.min(5, paginations.length))]]);
         break;
      }
         paginations += `${paginations.length << (Math.min(Math.abs(2), 5))}`;
      for (let y = 0; y < 1; y++) {
          let bingf = String.fromCharCode(121,95,53,57,95,99,111,110,99,97,116,101,110,97,116,105,111,110,0);
         unreadc += 1 ^ paginations.length;
         bingf = `${bingf.length / (Math.max(9, bingf.length))}`;
      }
         paginations = `${(String.fromCharCode(97,0) == paginations ? yellowI.size : paginations.length)}`;
      for (let c = 0; c < 3; c++) {
         unreadc += crossn.length;
      }
      if (4.9 == (1.81 / (Math.max(6, unreadc))) && 1.81 == (unreadc / (Math.max(6, yellowI.size)))) {
         unreadc /= Math.max(paginations.length, 1);
      }
          let floatingV: Map<any, any> = new Map([[String.fromCharCode(97,108,116,101,114,110,97,116,101,95,55,95,55,55,0),true ], [String.fromCharCode(109,95,57,55,95,112,114,101,115,101,100,0),false ]]);
         crossn = `${crossn.length}`;
         floatingV.set(`${floatingV.size}`, floatingV.size);
         crossn = "2";
      for (let i = 0; i < 1; i++) {
         crossn += "2";
      }
      for (let h = 0; h < 3; h++) {
         crossn = `${(paginations == String.fromCharCode(51,0) ? parseInt(`${unreadc}`) : paginations.length)}`;
      }
         unreadc -= 2 & crossn.length;
      orangeS -= parseFloat(`${viewerS}`);
      if (modalv) {
         break;
      }
   } while (modalv && (hongkong2.endsWith(`${orangeS}`)));
   while (5 <= (colorsT.size ^ 1) && (5.16 * orangeS) <= 2.92) {
      orangeS += parseFloat(`${1}`);
      break;
   }
   for (let u = 0; u < 3; u++) {
      settingsd += "1";
   }
   for (let x = 0; x < 1; x++) {
      muted4 <<= Math.min(3, Math.abs(1 & muted4));
   }
       let awayB: Array<any> = [938, 644, 566];
         awayB.push(awayB.length);
      while ((awayB.length - awayB.length) > 3 || 4 > (3 - awayB.length)) {
         awayB.push(awayB.length % 2);
         break;
      }
         awayB = [awayB.length];
      nterstitialk |= libzeusX.length;
   for (let v = 0; v < 3; v++) {
       let google2: Array<any> = [577, 755];
       let headerk: Map<any, any> = new Map([[String.fromCharCode(115,99,97,110,95,50,95,52,51,0),248], [String.fromCharCode(98,105,116,95,110,95,50,57,0),207]]);
       let register_jxF = 0.0;
       let activityT: Array<any> = [String.fromCharCode(122,95,57,52,95,115,112,101,101,120,0), String.fromCharCode(109,95,57,51,95,99,111,102,97,99,116,111,114,0), String.fromCharCode(115,95,53,50,95,115,117,98,109,105,116,0)];
      while (3.21 <= (3.58 / (Math.max(7, register_jxF))) || (register_jxF / (Math.max(parseFloat(`${activityT.length}`), 3))) <= 3.58) {
         register_jxF -= parseFloat(`${activityT.length}`);
         break;
      }
          let libmapbufferjniP = String.fromCharCode(102,119,100,95,107,95,55,48,0);
          let mode4: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,114,101,112,108,97,99,101,95,55,95,57,0),701], [String.fromCharCode(120,95,56,48,95,101,100,105,97,0),122], [String.fromCharCode(105,95,53,49,95,100,101,99,111,100,101,114,115,0),287]]);
          let cornerkickC = 5;
         headerk = new Map([[`${mode4.size}`, parseInt(`${register_jxF}`)]]);
         libmapbufferjniP += `${cornerkickC}`;
         mode4 = new Map([[libmapbufferjniP, libmapbufferjniP.length | 2]]);
         cornerkickC += 1;
      while (headerk.get(`${activityT.length}`) != null) {
         headerk.set(`${register_jxF}`, activityT.length + 1);
         break;
      }
      let defaultlogoL = headerk.size <= 8179837;
      do {
          let completeo: Map<any, any> = new Map([[String.fromCharCode(97,95,55,55,95,117,110,99,111,109,112,97,99,116,0),String.fromCharCode(117,95,51,54,95,114,101,100,0)], [String.fromCharCode(107,101,121,101,100,95,103,95,56,0),String.fromCharCode(101,110,115,95,53,95,56,57,0)]]);
         headerk.set(`${activityT.length}`, activityT.length % (Math.max(4, completeo.size)));
         if (defaultlogoL) {
            break;
         }
      } while (defaultlogoL && ((headerk.size - parseInt(`${register_jxF}`)) <= 1));
         google2.push(headerk.size & 1);
      while (2 == (activityT.length | headerk.size)) {
         headerk.set(`${register_jxF}`, parseInt(`${register_jxF}`));
         break;
      }
      for (let g = 0; g < 3; g++) {
         headerk = new Map([[`${google2.length}`, activityT.length]]);
      }
      while (5 == (google2.length % (Math.max(8, headerk.size)))) {
         headerk.set(`${activityT.length}`, google2.length);
         break;
      }
      let downarrowX = 5323318.0 >= register_jxF;
      do {
         register_jxF += parseFloat(`${google2.length << (Math.min(5, Math.abs(headerk.size)))}`);
         if (downarrowX) {
            break;
         }
      } while (downarrowX && (4.71 > register_jxF));
         google2 = [headerk.size];
         register_jxF -= parseFloat(`${2 << (Math.min(4, Math.abs(headerk.size)))}`);
         register_jxF *= parseFloat(`${parseInt(`${register_jxF}`) ^ headerk.size}`);
      viewerg += `${((v_playerc ? 1 : 3) >> (Math.min(Math.abs(headerk.size), 4)))}`;
   }
   let libcrashsdk6 = hongkong2.length <= 6207645;
   do {
      hongkong2 = `${parseInt(`${chartp}`)}`;
      if (libcrashsdk6) {
         break;
      }
   } while (libcrashsdk6 && (colorsT.size == hongkong2.length));
       let defaultplayerimgm: Map<any, any> = new Map([[String.fromCharCode(121,95,55,95,115,121,110,99,119,111,114,100,115,0),775], [String.fromCharCode(100,101,99,111,114,114,95,100,95,51,0),1], [String.fromCharCode(120,95,50,57,95,97,100,106,117,115,116,0),147]]);
       let listT = 5.0;
       let championK = 5;
      let moviesr = championK >= 9389848;
      do {
         championK &= parseInt(`${listT}`);
         if (moviesr) {
            break;
         }
      } while (moviesr && (5.24 >= (2.25 * listT)));
      while ((2 - defaultplayerimgm.size) >= 3 || (defaultplayerimgm.size | 2) >= 1) {
         listT -= parseFloat(`${parseInt(`${listT}`) / (Math.max(10, championK))}`);
         break;
      }
         listT += parseFloat(`${3}`);
      let area6 = 8468524.0 <= listT;
      do {
         listT *= parseFloat(`${defaultplayerimgm.size / 2}`);
         if (area6) {
            break;
         }
      } while (area6 && (3 >= (5 << (Math.min(5, Math.abs(defaultplayerimgm.size)))) && (5.52 + listT) >= 1.46));
      for (let d = 0; d < 1; d++) {
          let alertD = false;
          let pushI = String.fromCharCode(111,112,116,101,100,95,120,95,54,0);
          let default_n7 = false;
          let profileinactiveL = String.fromCharCode(99,104,111,111,115,101,95,114,95,56,48,0);
         championK |= parseInt(`${listT}`);
         alertD = (!alertD ? default_n7 : !alertD);
         pushI += `${((default_n7 ? 1 : 1))}`;
         profileinactiveL = `${((alertD ? 4 : 1) >> (Math.min(Math.abs(3), 2)))}`;
      }
       let roomH = String.fromCharCode(108,111,110,103,101,114,95,56,95,49,56,0);
         championK %= Math.max(4, roomH.length ^ 1);
      let minivodI = 9445652 <= roomH.length;
      do {
          let lineW = String.fromCharCode(120,95,52,54,95,115,112,101,97,107,101,114,115,0);
          let turn5 = String.fromCharCode(108,95,52,53,95,102,105,116,116,105,110,103,0);
          let serviceN = String.fromCharCode(104,95,56,95,105,116,101,114,97,116,105,111,110,0);
          let hookZ = 1.0;
          let predictionarrow0 = 2.0;
         roomH = `${parseInt(`${predictionarrow0}`)}`;
         lineW = `${serviceN.length >> (Math.min(Math.abs(2), 5))}`;
         turn5 += `${lineW.length << (Math.min(Math.abs(3), 2))}`;
         serviceN += `${parseInt(`${hookZ}`) - 3}`;
         hookZ -= 1;
         predictionarrow0 -= parseFloat(`${3 & parseInt(`${hookZ}`)}`);
         if (minivodI) {
            break;
         }
      } while ((!roomH.endsWith(`${listT}`)) && minivodI);
         championK -= championK;
      colorsT.set(`${listT}`, 1 - parseInt(`${chartp}`));
      viewerg = `${viewerg.length}`;
      hongkong2 = `${2 | parseInt(`${philippinesx}`)}`;
      settingsd = "2 & muted4";
   let mathd = 8959909 >= injuryO.length;
   do {
      injuryO = `${viewerg.length}`;
      if (mathd) {
         break;
      }
   } while (((5 ^ injuryO.length) <= 3 || (philippinesx + 2.20) <= 4.7) && mathd);

        console.error("crash here");
      }

      bufferRef.current = false;
    };

    const onSkip = (time: any) => {
      if (disableSeek.current === true) return

      if (isSeekErrorRef.current === true) {
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
       let logoutr = 1;
    let iconsettingw = true;
    let submitB: Map<any, any> = new Map([[String.fromCharCode(104,95,51,53,95,114,101,97,100,105,110,0),String.fromCharCode(116,95,51,51,95,109,101,109,120,0)], [String.fromCharCode(101,95,51,95,112,101,101,108,111,102,102,0),String.fromCharCode(107,95,55,57,95,99,111,110,116,111,108,108,101,114,0)], [String.fromCharCode(102,95,48,95,97,115,116,101,114,105,115,107,0),String.fromCharCode(120,95,55,48,95,115,116,111,112,112,101,100,0)]]);
    let calendarl = 5;
    let usernamev = false;
    let onewarchdefaults2 = 1.0;
    let defaultprofilepicG: Array<any> = [String.fromCharCode(99,97,112,116,105,111,110,115,95,98,95,56,53,0), String.fromCharCode(110,95,55,95,115,112,114,105,116,101,0), String.fromCharCode(111,95,53,50,95,114,115,104,105,102,116,0)];
    let configE = true;
    let tailx = true;
    let resultm = true;
    let moreN = String.fromCharCode(99,95,49,55,95,115,113,108,105,116,101,101,120,116,0);
    let reminderX = 1;
    let submitt = false;
    let mbnativer = 0.0;
   if ((logoutr | 2) <= 3) {
      logoutr -= ((configE ? 3 : 4));
   }
      submitB.set(`${defaultprofilepicG.length}`, defaultprofilepicG.length & 1);
      configE = logoutr == 83;
       let injury7 = false;
       let ecopy_tvu = String.fromCharCode(101,95,52,51,0);
         injury7 = ((ecopy_tvu.length * (!injury7 ? 20 : ecopy_tvu.length)) >= 20);
      for (let k = 0; k < 1; k++) {
         injury7 = ecopy_tvu.length >= 75 && !injury7;
      }
      if (ecopy_tvu.length >= 1) {
         injury7 = ecopy_tvu.length > 49;
      }
         injury7 = ecopy_tvu.endsWith(`${injury7}`);
         injury7 = (((injury7 ? ecopy_tvu.length : 35) % (Math.max(7, ecopy_tvu.length))) == 35);
      let recommendationC = 5664570 <= ecopy_tvu.length;
      do {
          let fastforwardf: Array<any> = [433, 634];
          let str1: Map<any, any> = new Map([[String.fromCharCode(117,99,109,112,95,114,95,53,56,0),true ], [String.fromCharCode(116,114,101,101,116,111,107,95,97,95,57,53,0),false ], [String.fromCharCode(115,117,98,118,105,101,119,95,121,95,55,49,0),true ]]);
          let libpangleflippedB = 5.0;
         ecopy_tvu = `${1 * ecopy_tvu.length}`;
         fastforwardf = [3 + parseInt(`${libpangleflippedB}`)];
         str1.set(`${libpangleflippedB}`, str1.size - parseInt(`${libpangleflippedB}`));
         if (recommendationC) {
            break;
         }
      } while (recommendationC && (ecopy_tvu.length == 1));
      usernamev = !iconsettingw;
   if (!tailx) {
       let whitetickp = 2.0;
       let loginN = String.fromCharCode(115,95,55,51,95,105,119,104,116,0);
       let upgrade8 = true;
         loginN += `${loginN.length}`;
      let readq = upgrade8 ? !upgrade8 : upgrade8;
      do {
         upgrade8 = whitetickp < 81.27 && 10 < loginN.length;
         if (readq) {
            break;
         }
      } while ((!upgrade8) && readq);
         loginN = `${parseInt(`${whitetickp}`) / 1}`;
          let playlist5 = 5;
          let privacyr: Array<any> = [951, 376];
         loginN = "1 + playlist5";
         playlist5 |= privacyr.length;
         privacyr.push(3 + privacyr.length);
          let nterstitialV = 4.0;
          let step_ = true;
          let actionH = 4.0;
         loginN += `${((step_ ? 3 : 1) - parseInt(`${whitetickp}`))}`;
         nterstitialV -= parseInt(`${nterstitialV}`) & 1;
         step_ = 8.53 == (nterstitialV + actionH);
         actionH += parseFloat(`${parseInt(`${actionH}`) + parseInt(`${nterstitialV}`)}`);
      if (loginN.length < 1) {
         upgrade8 = (parseInt(`${whitetickp}`) * loginN.length) <= 98;
      }
      if (1.33 <= (2.85 * whitetickp) || 2.85 <= (loginN.length * whitetickp)) {
         loginN = `${parseInt(`${whitetickp}`) + 2}`;
      }
         upgrade8 = !upgrade8;
      let halfs = loginN.length >= 6314076;
      do {
         loginN += "2";
         if (halfs) {
            break;
         }
      } while (halfs && (4.51 > (whitetickp + 4.25)));
      tailx = defaultprofilepicG.includes(calendarl);
   }
      submitB = new Map([[`${onewarchdefaults2}`, ((configE ? 1 : 3) - parseInt(`${onewarchdefaults2}`))]]);
   for (let e = 0; e < 1; e++) {
      onewarchdefaults2 *= defaultprofilepicG.length * 2;
   }
   if (usernamev || (submitB.size << (Math.min(Math.abs(2), 1))) == 1) {
      submitB = new Map([[`${submitB.size}`, 1 / (Math.max(2, calendarl))]]);
   }
      usernamev = 36 > submitB.size;
      logoutr %= Math.max(3, submitB.size << (Math.min(Math.abs(2), 5)));
   for (let b = 0; b < 3; b++) {
      usernamev = onewarchdefaults2 >= 63.2 || tailx;
   }
   while ((parseInt(`${onewarchdefaults2}`) + calendarl) < 3 && 2 < (3 * calendarl)) {
      calendarl /= Math.max(((tailx ? 3 : 1) / (Math.max(parseInt(`${onewarchdefaults2}`), 10))), 3);
      break;
   }
       let graphicsp = 0.0;
       let arrowupz = false;
         graphicsp /= Math.max(((arrowupz ? 5 : 1) + parseInt(`${graphicsp}`)), 2);
      while (5.3 > (1.86 * graphicsp) && 1.86 > graphicsp) {
         arrowupz = graphicsp > 13.95 && arrowupz;
         break;
      }
       let injuryb = String.fromCharCode(101,95,56,53,95,116,101,120,105,112,111,100,0);
       let i_lockO = String.fromCharCode(106,95,56,48,95,111,102,102,101,114,101,100,0);
      let textlayoutmanager7 = arrowupz ? !arrowupz : arrowupz;
      do {
          let calendar2 = String.fromCharCode(108,103,111,114,97,110,100,95,107,95,56,53,0);
         arrowupz = i_lockO == String.fromCharCode(111,0) || calendar2.length == 79;
         if (textlayoutmanager7) {
            break;
         }
      } while ((arrowupz) && textlayoutmanager7);
      while (arrowupz || 5 >= injuryb.length) {
         injuryb += `${injuryb.length}`;
         break;
      }
      if (2.65 >= (graphicsp * i_lockO.length) && (graphicsp * 2.65) >= 5.28) {
         graphicsp /= Math.max(2, (injuryb == String.fromCharCode(83,0) ? injuryb.length : (arrowupz ? 2 : 1)));
      }
      iconsettingw = graphicsp == 42.79;
   while (submitB.size == 4 || 5 == (4 & submitB.size)) {
      submitB = new Map([[`${iconsettingw}`, (3 << (Math.min(Math.abs((tailx ? 5 : 5)), 2)))]]);
      break;
   }
       let minim: Map<any, any> = new Map([[String.fromCharCode(110,95,50,55,95,116,104,114,101,97,100,112,111,111,108,0),String.fromCharCode(99,111,110,99,97,116,100,101,99,95,50,95,51,55,0)], [String.fromCharCode(105,95,54,51,95,112,114,101,112,97,114,101,0),String.fromCharCode(114,101,115,105,100,117,97,108,95,103,95,49,51,0)]]);
       let templateprocessora = false;
      while (minim.size < 1) {
          let iconsetting7 = false;
          let modity5 = 1.0;
          let encryptY = 2.0;
          let pusho = String.fromCharCode(117,112,112,101,114,95,56,95,57,49,0);
         templateprocessora = String.fromCharCode(48,0) == pusho;
         iconsetting7 = encryptY == 34.8;
         modity5 *= ((iconsetting7 ? 5 : 3) / (Math.max(parseInt(`${modity5}`), 9)));
         encryptY /= Math.max(1, 4);
         pusho = `${parseInt(`${modity5}`)}`;
         break;
      }
      if (templateprocessora) {
          let gdtadvb = String.fromCharCode(121,95,49,48,95,112,114,101,102,97,99,101,0);
          let paginationF = false;
          let footballfiledlayouth = String.fromCharCode(99,111,117,110,116,105,110,103,95,51,95,50,0);
          let ksadw = String.fromCharCode(98,95,54,56,95,116,112,99,0);
          let confirmationf: Array<any> = [String.fromCharCode(104,111,109,101,95,113,95,52,53,0), String.fromCharCode(116,95,55,50,95,99,111,108,108,101,116,105,111,110,0), String.fromCharCode(102,105,101,108,100,115,95,108,95,52,49,0)];
         minim.set(`${confirmationf.length}`, confirmationf.length);
         gdtadvb += `${gdtadvb.length >> (Math.min(Math.abs(3), 1))}`;
         paginationF = !gdtadvb.startsWith(`${paginationF}`);
         footballfiledlayouth += `${footballfiledlayouth.length}`;
         ksadw = `${ksadw.length}`;
      }
      let ninit_8wJ = minim.size <= 8970981;
      do {
          let bggradientM = true;
          let resultT: Map<any, any> = new Map([[String.fromCharCode(109,97,105,110,108,105,115,116,95,97,95,54,48,0),57], [String.fromCharCode(105,110,116,114,97,120,100,115,112,95,101,95,55,51,0),86]]);
          let assistB = String.fromCharCode(118,97,108,105,100,97,116,105,111,110,115,95,100,95,57,51,0);
          let bgvipxvodv = String.fromCharCode(112,115,102,105,108,101,95,120,95,49,48,0);
          let libswscaleC = String.fromCharCode(100,101,116,101,99,116,111,114,95,117,95,49,0);
         minim.set(bgvipxvodv, 1 >> (Math.min(4, bgvipxvodv.length)));
         bggradientM = null == resultT.get(`${bggradientM}`);
         resultT = new Map([[`${bggradientM}`, (String.fromCharCode(108,0) == libswscaleC ? (bggradientM ? 3 : 2) : libswscaleC.length)]]);
         assistB = `${resultT.size}`;
         if (ninit_8wJ) {
            break;
         }
      } while ((!templateprocessora && (3 + minim.size) <= 3) && ninit_8wJ);
      for (let y = 0; y < 3; y++) {
          let minii = 2;
         templateprocessora = !templateprocessora;
         minii <<= Math.min(4, Math.abs(minii - minii));
      }
      for (let p = 0; p < 2; p++) {
         templateprocessora = minim.size > 18 && templateprocessora;
      }
         templateprocessora = minim.size < 12;
      configE = defaultprofilepicG.includes(onewarchdefaults2);
      iconsettingw = calendarl >= parseInt(`${onewarchdefaults2}`);
   for (let u = 0; u < 3; u++) {
      defaultprofilepicG = [((iconsettingw ? 2 : 3) & logoutr)];
   }
       let textlayoutmanagerX = String.fromCharCode(100,101,99,111,100,101,120,95,121,95,52,51,0);
       let hookg = 0;
       let questiconM = 5.0;
      let interstitialq = questiconM <= 7236049.0;
      do {
         questiconM *= parseFloat(`${2 * hookg}`);
         if (interstitialq) {
            break;
         }
      } while (((hookg + parseInt(`${questiconM}`)) > 1 && (5.60 + questiconM) > 2.37) && interstitialq);
         textlayoutmanagerX = `${parseInt(`${questiconM}`) >> (Math.min(textlayoutmanagerX.length, 4))}`;
         textlayoutmanagerX += `${parseInt(`${questiconM}`)}`;
      let toponW = hookg <= 8684965;
      do {
         hookg &= textlayoutmanagerX.length << (Math.min(Math.abs(3), 2));
         if (toponW) {
            break;
         }
      } while ((2 <= (hookg + 5)) && toponW);
      if (2.72 <= (questiconM / 4.31) && (questiconM / 4.31) <= 2.67) {
          let fill0 = 3.0;
          let splashp = String.fromCharCode(108,95,50,49,95,116,111,107,101,110,105,122,101,114,0);
          let whiteG = 0.0;
          let bootsplashc = String.fromCharCode(108,111,103,103,105,110,103,95,103,95,49,52,0);
         hookg <<= Math.min(Math.abs(parseInt(`${fill0}`) % 3), 3);
         fill0 += parseFloat(`${parseInt(`${whiteG}`)}`);
         splashp = `${1 & bootsplashc.length}`;
         whiteG -= parseFloat(`${2}`);
         bootsplashc += "1";
      }
          let playercommonT = true;
          let list0 = String.fromCharCode(106,95,56,51,95,114,101,115,105,122,101,0);
         hookg &= ((playercommonT ? 4 : 3) ^ list0.length);
      for (let d = 0; d < 1; d++) {
         questiconM -= parseFloat(`${textlayoutmanagerX.length}`);
      }
         hookg *= (String.fromCharCode(71,0) == textlayoutmanagerX ? hookg : textlayoutmanagerX.length);
         textlayoutmanagerX += `${hookg}`;
      submitB = new Map([[`${resultm}`, ((resultm ? 1 : 5) & parseInt(`${questiconM}`))]]);
   for (let d = 0; d < 1; d++) {
      usernamev = defaultprofilepicG.length == 5;
   }
       let settingD: Array<any> = [955, 687];
       let faviconc = String.fromCharCode(99,97,112,105,95,97,95,57,53,0);
      for (let o = 0; o < 2; o++) {
         settingD = [(String.fromCharCode(69,0) == faviconc ? faviconc.length : settingD.length)];
      }
      if ((settingD.length ^ 5) < 2 || (5 ^ settingD.length) < 5) {
         settingD = [faviconc.length];
      }
         faviconc = `${3 - faviconc.length}`;
      if (2 >= (2 >> (Math.min(2, settingD.length))) && (faviconc.length >> (Math.min(5, settingD.length))) >= 2) {
         settingD.push(settingD.length);
      }
      while (1 <= (settingD.length | 1)) {
          let gpayB = 4.0;
          let leagueg = String.fromCharCode(115,117,112,112,108,121,95,53,95,57,57,0);
          let pageZ = true;
          let redirect1 = 0.0;
          let z_managerm = String.fromCharCode(118,95,56,52,95,115,104,105,102,116,0);
         settingD = [2];
         gpayB += (parseFloat(`${(pageZ ? 1 : 4)}`));
         leagueg = `${leagueg.length}`;
         redirect1 -= parseInt(`${redirect1}`) | 2;
         z_managerm = `${2 % (Math.max(parseInt(`${redirect1}`), 1))}`;
         break;
      }
          let themeH = true;
          let castingL = true;
         faviconc += "3";
         themeH = (castingL ? castingL : !castingL);
      usernamev = settingD.length == 27;
      configE = (!resultm ? !tailx : resultm);
   while ((submitB.size + moreN.length) < 1) {
       let controlse = String.fromCharCode(115,95,49,55,95,98,108,111,99,107,120,0);
       let mbbannero: Array<any> = [712, 52, 199];
       let projectQ: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,100,95,106,95,52,54,0),36], [String.fromCharCode(99,102,101,110,99,95,104,95,55,55,0),243], [String.fromCharCode(97,97,99,115,98,114,100,97,116,97,95,103,95,57,52,0),221]]);
      while (!Array.from(projectQ.keys()).includes(`${mbbannero.length}`)) {
          let pageZu: Array<any> = [363, 809];
          let modity4 = 0.0;
          let roboto5 = 1;
          let cnewarchdefaultsx = String.fromCharCode(119,95,49,56,0);
         mbbannero.push(cnewarchdefaultsx.length >> (Math.min(Math.abs(3), 2)));
         pageZu.push(pageZu.length >> (Math.min(4, Math.abs(parseInt(`${modity4}`)))));
         modity4 += parseFloat(`${parseInt(`${modity4}`)}`);
         roboto5 ^= parseInt(`${modity4}`);
         cnewarchdefaultsx = `${roboto5}`;
         break;
      }
         controlse = `${mbbannero.length}`;
         mbbannero = [mbbannero.length];
      for (let r = 0; r < 1; r++) {
          let down4: Map<any, any> = new Map([[String.fromCharCode(104,95,54,54,95,115,104,117,116,116,101,114,0),764], [String.fromCharCode(110,95,56,55,95,116,114,101,101,99,111,100,101,114,0),656]]);
          let componentY = String.fromCharCode(102,95,55,53,95,101,110,99,111,100,101,100,102,114,97,109,101,0);
          let googleF = String.fromCharCode(103,95,49,95,100,101,112,114,101,99,97,116,105,111,110,115,0);
          let middlebrightnessx = 2.0;
          let buffer_ = 2.0;
         mbbannero.push(down4.size + 1);
         down4 = new Map([[componentY, 2 & googleF.length]]);
         componentY += `${parseInt(`${middlebrightnessx}`)}`;
         googleF += `${parseInt(`${middlebrightnessx}`) ^ parseInt(`${buffer_}`)}`;
         buffer_ /= Math.max(2, parseInt(`${buffer_}`) * 3);
      }
         controlse = `${controlse.length - 1}`;
         controlse = `${controlse.length * 2}`;
         projectQ = new Map([[`${projectQ.size}`, controlse.length & 3]]);
      let viewst = 8598938 >= controlse.length;
      do {
         controlse += "3";
         if (viewst) {
            break;
         }
      } while (viewst && (controlse.length <= 3));
      while ((projectQ.size ^ controlse.length) >= 3) {
         projectQ.set(`${mbbannero.length}`, projectQ.size);
         break;
      }
      submitB = new Map([[`${onewarchdefaults2}`, 2 << (Math.min(Math.abs(parseInt(`${onewarchdefaults2}`)), 1))]]);
      break;
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
       let phoneshare7 = true;
    let largeT = String.fromCharCode(108,101,98,110,95,53,95,50,50,0);
    let libreanimatedQ = String.fromCharCode(112,101,114,99,101,112,116,95,117,95,55,51,0);
    let gradlew0 = String.fromCharCode(107,95,52,55,95,97,115,100,107,0);
    let libhermesF = String.fromCharCode(105,95,49,53,95,115,105,110,102,0);
    let mathp: Map<any, any> = new Map([[String.fromCharCode(104,97,110,103,95,114,95,53,55,0),527], [String.fromCharCode(98,95,51,51,95,116,105,114,101,100,0),699]]);
    let iconsubssuccessY = 0.0;
    let chartj = String.fromCharCode(97,115,111,99,95,118,95,52,48,0);
    let countryq = String.fromCharCode(109,97,116,99,104,101,114,95,119,95,53,0);
    let libruntimeexecutor6 = String.fromCharCode(97,102,105,114,95,118,95,52,50,0);
    let bangP = String.fromCharCode(118,95,56,57,95,112,101,114,102,111,114,109,97,110,99,101,0);
    let rewardvideoH = String.fromCharCode(106,95,52,95,116,117,114,110,111,102,102,0);
    let borderlessr = String.fromCharCode(115,95,57,95,109,101,116,114,105,99,0);
    let invitef = false;
    let eighteen6 = String.fromCharCode(101,110,99,114,121,112,116,95,100,95,50,57,0);
      mathp = new Map([[`${phoneshare7}`, 3]]);
      rewardvideoH = `${((phoneshare7 ? 4 : 1) % (Math.max(mathp.size, 8)))}`;
   for (let n = 0; n < 2; n++) {
      bangP += `${2 | parseInt(`${iconsubssuccessY}`)}`;
   }
   if (libhermesF == libreanimatedQ) {
       let adultp = String.fromCharCode(102,95,54,52,95,97,117,116,111,114,111,116,97,116,101,0);
       let libswresampleF = String.fromCharCode(109,95,53,49,95,117,116,99,0);
       let abidetectu = 2.0;
      for (let h = 0; h < 2; h++) {
         adultp += `${libswresampleF.length / 1}`;
      }
         libswresampleF = `${adultp.length / 2}`;
      if ((libswresampleF.length + parseInt(`${abidetectu}`)) > 4) {
          let zooms = 4;
          let runtimeschedulerF = String.fromCharCode(113,117,97,110,116,120,95,101,95,51,53,0);
         abidetectu /= Math.max(runtimeschedulerF.length & zooms, 5);
      }
      while (adultp.length <= parseInt(`${abidetectu}`)) {
          let chartB = String.fromCharCode(103,95,56,57,95,101,113,117,97,108,0);
          let anytimeB = 1;
          let injuryp = false;
          let libmapbufferjniE = String.fromCharCode(118,115,116,97,116,115,95,54,95,54,54,0);
          let zoomz = 1;
         abidetectu *= (adultp == String.fromCharCode(110,0) ? zoomz : adultp.length);
         chartB = "1";
         anytimeB >>= Math.min(3, Math.abs(libmapbufferjniE.length ^ 2));
         injuryp = 84 <= anytimeB;
         libmapbufferjniE = `${((injuryp ? 5 : 4) >> (Math.min(Math.abs(1), 3)))}`;
         zoomz |= anytimeB;
         break;
      }
      if (libswresampleF.length <= 5) {
         abidetectu -= adultp.length >> (Math.min(5, libswresampleF.length));
      }
          let androidh = 1.0;
         abidetectu *= 3 - libswresampleF.length;
         androidh += parseFloat(`${parseInt(`${androidh}`) >> (Math.min(Math.abs(parseInt(`${androidh}`)), 2))}`);
         libswresampleF += `${parseInt(`${abidetectu}`) % 3}`;
         adultp += `${adultp.length - libswresampleF.length}`;
         abidetectu += libswresampleF.length;
      libreanimatedQ = `${adultp.length - 2}`;
   }
       let librrcf: Array<any> = [861, 746];
       let greyz = 2;
         librrcf = [1 ^ librrcf.length];
       let episodee = String.fromCharCode(110,95,57,54,95,117,110,108,111,99,107,101,100,0);
      for (let j = 0; j < 3; j++) {
          let telemetryL = true;
          let libyogaP = 2.0;
         greyz -= librrcf.length;
         telemetryL = !telemetryL && 28.99 >= libyogaP;
         libyogaP *= parseFloat(`${2 * parseInt(`${libyogaP}`)}`);
      }
      if ((librrcf.length - 2) >= 4) {
         librrcf = [1];
      }
         librrcf = [1 ^ librrcf.length];
      if (!episodee.includes(`${librrcf.length}`)) {
         librrcf = [librrcf.length];
      }
      largeT = `${rewardvideoH.length << (Math.min(4, chartj.length))}`;
   for (let f = 0; f < 2; f++) {
       let dropdownz = String.fromCharCode(121,95,50,57,95,115,97,109,101,113,0);
       let subbasketballplayerL = String.fromCharCode(115,95,55,95,115,105,110,0);
       let interstitialt = 5;
      while ((interstitialt ^ 1) > 1) {
         subbasketballplayerL += `${dropdownz.length}`;
         break;
      }
      while (subbasketballplayerL == dropdownz) {
         dropdownz = `${interstitialt}`;
         break;
      }
      let mailL = String.fromCharCode(120,53,109,97,51,122,112,53,55,102,0) == dropdownz;
      do {
          let e_countu = String.fromCharCode(104,105,110,116,101,100,95,103,95,55,49,0);
         dropdownz += `${e_countu.length}`;
         if (mailL) {
            break;
         }
      } while ((subbasketballplayerL.length < 4) && mailL);
      let sheetE = 8159017 <= interstitialt;
      do {
         interstitialt += 1;
         if (sheetE) {
            break;
         }
      } while (sheetE && (interstitialt > dropdownz.length));
         subbasketballplayerL += `${(dropdownz == String.fromCharCode(110,0) ? dropdownz.length : interstitialt)}`;
       let mbnative6 = 2;
          let otherW: Map<any, any> = new Map([[String.fromCharCode(120,95,51,50,95,109,97,116,104,101,109,97,116,105,99,115,0),true ], [String.fromCharCode(108,111,99,97,116,105,111,110,115,95,103,95,52,48,0),false ]]);
          let selectedF = String.fromCharCode(110,105,103,104,116,115,104,111,116,95,115,95,49,55,0);
          let libreactnativejniB = 4.0;
         interstitialt |= 2;
         otherW = new Map([[`${libreactnativejniB}`, (selectedF == String.fromCharCode(108,0) ? selectedF.length : parseInt(`${libreactnativejniB}`))]]);
      if (!subbasketballplayerL.endsWith(dropdownz)) {
          let privacy5 = 2;
         subbasketballplayerL += "3";
         privacy5 &= privacy5;
      }
      if (interstitialt > dropdownz.length) {
         dropdownz = "1";
      }
      gradlew0 += `${((phoneshare7 ? 4 : 5))}`;
   }
      gradlew0 += `${libreanimatedQ.length / 2}`;
       let connection7 = 5;
      for (let x = 0; x < 1; x++) {
         connection7 += connection7 - connection7;
      }
          let modityt: Map<any, any> = new Map([[String.fromCharCode(99,115,99,104,101,109,101,95,52,95,57,52,0),274], [String.fromCharCode(103,108,111,119,95,56,95,56,52,0),253]]);
          let gray5: Array<any> = [508, 110];
         connection7 += connection7 / (Math.max(2, 8));
         modityt.set(`${gray5.length}`, gray5.length + modityt.size);
          let analyticsg = String.fromCharCode(97,117,116,111,114,101,115,105,122,101,115,95,56,95,52,55,0);
          let phonex = String.fromCharCode(102,95,51,57,95,120,116,101,97,0);
         connection7 |= (phonex == String.fromCharCode(101,0) ? connection7 : phonex.length);
         analyticsg += `${2 & analyticsg.length}`;
      bangP += `${3 << (Math.min(Math.abs(parseInt(`${iconsubssuccessY}`)), 4))}`;
   if (3 <= (parseInt(`${iconsubssuccessY}`) + largeT.length)) {
      largeT += `${largeT.length}`;
   }
       let window_69F: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,101,97,116,101,95,122,95,53,51,0),false ], [String.fromCharCode(109,97,120,105,109,105,122,101,100,95,48,95,56,55,0),true ]]);
          let statisticsinactiveV = String.fromCharCode(108,105,98,111,112,101,110,104,95,100,95,53,51,0);
          let iconwatchnowf = String.fromCharCode(116,101,115,116,110,101,116,95,112,95,56,57,0);
         window_69F = new Map([[iconwatchnowf, statisticsinactiveV.length ^ 2]]);
         window_69F = new Map([[`${window_69F.size}`, window_69F.size]]);
         window_69F = new Map([[`${window_69F.size}`, 1 / (Math.max(6, window_69F.size))]]);
      phoneshare7 = (window_69F.size + largeT.length) == 69;
   if (largeT.length > 4) {
       let sheetA = String.fromCharCode(97,112,112,95,121,95,57,57,0);
          let libpangleflippedu = true;
          let lightn = true;
          let tumbnailw = 1.0;
         sheetA += `${1 ^ parseInt(`${tumbnailw}`)}`;
         libpangleflippedu = !lightn || !libpangleflippedu;
         lightn = !libpangleflippedu;
         tumbnailw -= ((lightn ? 4 : 2) & 3);
          let temperatureI = 4.0;
          let libfabricjniI = String.fromCharCode(110,105,115,116,122,95,57,95,51,48,0);
         sheetA += `${(String.fromCharCode(80,0) == sheetA ? sheetA.length : libfabricjniI.length)}`;
         temperatureI *= parseFloat(`${3}`);
         libfabricjniI += "1";
         sheetA += `${sheetA.length}`;
      largeT += "2";
   }
       let baselinel: Array<any> = [String.fromCharCode(104,95,57,48,95,109,97,115,107,101,100,99,108,97,109,112,0), String.fromCharCode(111,95,54,51,95,109,105,110,105,109,105,122,101,97,98,108,101,0)];
       let invite2 = String.fromCharCode(102,111,114,101,103,114,111,117,110,100,95,109,95,54,50,0);
       let mappingQ = String.fromCharCode(114,101,101,110,116,114,97,110,116,95,97,95,53,51,0);
         invite2 = `${invite2.length >> (Math.min(4, mappingQ.length))}`;
      for (let w = 0; w < 3; w++) {
         invite2 += `${2 / (Math.max(8, mappingQ.length))}`;
      }
          let internetz = 5.0;
          let searchv = 5.0;
         invite2 += `${parseInt(`${internetz}`) / (Math.max(5, invite2.length))}`;
         internetz /= Math.max(1, parseFloat(`${parseInt(`${searchv}`) + parseInt(`${searchv}`)}`));
          let whitetickx = String.fromCharCode(116,95,49,52,95,113,117,101,117,101,100,0);
          let lefta = 2.0;
         invite2 += `${parseInt(`${lefta}`)}`;
         whitetickx = `${(whitetickx == String.fromCharCode(77,0) ? whitetickx.length : whitetickx.length)}`;
         lefta *= parseFloat(`${3 - whitetickx.length}`);
          let reactnavigationk = 1.0;
          let stro = String.fromCharCode(116,95,53,54,95,103,114,97,112,104,105,99,0);
          let skipf = String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,121,95,53,48,0);
         invite2 = "2";
         reactnavigationk *= skipf.length;
         stro = `${skipf.length}`;
       let statsV = true;
       let overlayH = false;
          let zoomzD = String.fromCharCode(114,117,110,110,101,114,95,57,95,50,53,0);
          let borderlessQ = String.fromCharCode(99,108,111,115,105,110,103,95,107,95,53,56,0);
         mappingQ += `${invite2.length}`;
         zoomzD = `${zoomzD.length << (Math.min(5, borderlessQ.length))}`;
         borderlessQ += "2";
      if (!statsV) {
          let catalogF: Array<any> = [257, 201];
          let penaltygoalw = String.fromCharCode(104,112,101,108,100,115,112,95,113,95,56,48,0);
          let predictionarrows: Array<any> = [945, 166];
         statsV = catalogF.includes(predictionarrows[predictionarrows.length - 1]);
         catalogF = [2 - penaltygoalw.length];
         penaltygoalw = `${penaltygoalw.length >> (Math.min(Math.abs(3), 1))}`;
      }
         invite2 = `${invite2.length}`;
      chartj += `${mappingQ.length >> (Math.min(countryq.length, 1))}`;
      baselinel.push(2);

      if (
        autoPlayNext &&
        activeEpisode !== undefined &&
        episodes &&
        activeEpisode < episodes?.url_count - 1
      ) {

   for (let x = 0; x < 3; x++) {
      libruntimeexecutor6 = "2";
   }
      libreanimatedQ = "3";
   for (let s = 0; s < 2; s++) {
      libruntimeexecutor6 += `${bangP.length}`;
   }
       let pageJ = String.fromCharCode(111,95,52,51,95,97,114,109,111,110,121,0);
       let predictionarrowJ: Map<any, any> = new Map([[String.fromCharCode(118,105,100,101,111,115,116,114,101,97,109,95,51,95,50,56,0),292], [String.fromCharCode(109,97,112,112,101,100,95,105,95,50,54,0),843]]);
       let downloaderH = String.fromCharCode(112,97,114,101,110,116,95,50,95,56,0);
       let libflipperX = String.fromCharCode(101,95,51,51,95,107,100,102,0);
       let gnewarchdefaultsJ = String.fromCharCode(102,95,55,51,95,115,117,98,116,114,97,99,116,0);
         pageJ += `${downloaderH.length ^ libflipperX.length}`;
          let subbasketballplayerS: Array<any> = [552, 139];
          let tickV = String.fromCharCode(109,95,57,55,95,109,115,103,0);
         libflipperX = `${pageJ.length}`;
         subbasketballplayerS.push(tickV.length * 3);
         tickV += `${subbasketballplayerS.length}`;
         pageJ = "2";
          let footballfieldk = true;
         libflipperX += `${downloaderH.length}`;
         footballfieldk = !footballfieldk;
       let circlej = String.fromCharCode(119,95,56,53,95,101,120,115,121,0);
         predictionarrowJ = new Map([[`${predictionarrowJ.size}`, 2 % (Math.max(8, circlej.length))]]);
         libflipperX += `${circlej.length + gnewarchdefaultsJ.length}`;
      if (libflipperX == circlej) {
         circlej = `${gnewarchdefaultsJ.length % (Math.max(2, 6))}`;
      }
      mathp = new Map([[libruntimeexecutor6, libruntimeexecutor6.length & borderlessr.length]]);
      chartj += `${libruntimeexecutor6.length}`;
       let imagesS = String.fromCharCode(97,95,51,56,95,105,113,109,112,0);
       let combineO = 1.0;
       let imagemanagerA = String.fromCharCode(102,95,52,48,95,97,116,111,109,0);
          let fast_ = String.fromCharCode(109,95,54,56,95,108,115,112,102,108,112,99,0);
          let fullo = 0;
          let homez = String.fromCharCode(109,95,51,57,95,114,101,97,115,115,101,109,98,108,121,0);
         combineO *= parseFloat(`${fullo | homez.length}`);
         fast_ = "1";
         fullo *= 2;
         imagesS += "2";
      while (imagemanagerA != imagesS) {
          let foregroundY: Array<any> = [String.fromCharCode(104,97,115,104,95,48,95,51,51,0), String.fromCharCode(114,101,97,100,95,50,95,53,55,0), String.fromCharCode(106,95,53,48,95,105,113,109,112,0)];
          let reactnavigationS: Map<any, any> = new Map([[String.fromCharCode(116,104,111,117,115,97,110,100,115,95,98,95,57,53,0),912], [String.fromCharCode(102,117,110,103,105,98,108,101,115,95,98,95,56,0),18], [String.fromCharCode(114,101,109,111,118,101,103,114,97,105,110,95,112,95,57,48,0),413]]);
          let chinasamev = 1.0;
         imagesS = `${parseInt(`${chinasamev}`) & 1}`;
         foregroundY = [foregroundY.length | 1];
         reactnavigationS = new Map([[`${reactnavigationS.size}`, 2]]);
         chinasamev -= 2 ^ foregroundY.length;
         break;
      }
      if ((5.51 * combineO) == 2.73 && (5.51 * combineO) == 2.62) {
         combineO *= parseFloat(`${imagesS.length}`);
      }
      if (imagesS.length < imagemanagerA.length) {
         imagemanagerA = `${parseInt(`${combineO}`)}`;
      }
      let dacccfaabfbcbadeebddcabacdffdbC = imagemanagerA.length <= 5010963;
      do {
          let floatingd = 4.0;
          let styleD = String.fromCharCode(116,107,104,100,95,103,95,49,54,0);
          let overlayp = String.fromCharCode(102,114,97,109,101,113,117,101,117,101,95,108,95,50,52,0);
          let bggradientk = String.fromCharCode(114,101,115,117,108,117,116,105,111,110,95,117,95,53,50,0);
         imagemanagerA += `${bggradientk.length}`;
         floatingd /= Math.max(parseFloat(`${1 + overlayp.length}`), 3);
         styleD += "3";
         overlayp = `${styleD.length}`;
         bggradientk = `${parseInt(`${floatingd}`)}`;
         if (dacccfaabfbcbadeebddcabacdffdbC) {
            break;
         }
      } while (dacccfaabfbcbadeebddcabacdffdbC && (imagesS != imagemanagerA));
          let incident5 = 2;
          let hoverE = String.fromCharCode(114,101,101,108,95,106,95,57,55,0);
          let incidentu = 0.0;
         imagemanagerA = `${parseInt(`${incidentu}`)}`;
         incident5 |= hoverE.length ^ 3;
         hoverE = "2";
         incidentu -= 1 << (Math.min(1, hoverE.length));
         combineO += parseFloat(`${imagesS.length >> (Math.min(Math.abs(3), 2))}`);
         imagemanagerA = `${1 ^ parseInt(`${combineO}`)}`;
      gradlew0 = `${2 ^ imagemanagerA.length}`;
      libruntimeexecutor6 = `${borderlessr.length ^ 2}`;
   for (let u = 0; u < 1; u++) {
       let interstitialo = String.fromCharCode(111,95,56,57,95,103,114,97,98,98,101,114,0);
       let holderD = 5.0;
       let short_dg = String.fromCharCode(116,104,114,101,115,104,111,108,100,105,110,103,95,104,95,51,50,0);
      if (3 <= short_dg.length) {
         holderD /= Math.max(5, parseInt(`${holderD}`));
      }
          let dependencyZ = String.fromCharCode(120,109,117,108,116,95,117,95,52,50,0);
         holderD *= dependencyZ.length - short_dg.length;
      if (3 < (1 & interstitialo.length) && 2.63 < (holderD - interstitialo.length)) {
          let eactT: Map<any, any> = new Map([[String.fromCharCode(103,95,51,48,95,112,114,101,118,101,110,116,0),365], [String.fromCharCode(98,95,50,53,95,105,110,108,105,103,104,116,0),213]]);
         interstitialo = `${(String.fromCharCode(65,0) == interstitialo ? interstitialo.length : parseInt(`${holderD}`))}`;
         eactT = new Map([[`${eactT.size}`, eactT.size * eactT.size]]);
      }
         holderD += 2 / (Math.max(1, interstitialo.length));
      if (interstitialo != String.fromCharCode(67,0)) {
         short_dg += `${3 << (Math.min(1, interstitialo.length))}`;
      }
      let xadsdky = String.fromCharCode(117,107,118,121,117,105,105,51,108,0) == short_dg;
      do {
         short_dg = `${short_dg.length}`;
         if (xadsdky) {
            break;
         }
      } while (((holderD + short_dg.length) >= 1.56 || (1.56 + holderD) >= 3.86) && xadsdky);
       let disconnectedr = true;
      if (4 == interstitialo.length) {
         interstitialo += "1";
      }
         disconnectedr = short_dg.length > 72 || interstitialo == String.fromCharCode(121,0);
      borderlessr = `${((phoneshare7 ? 3 : 2) % (Math.max(2, 9)))}`;
   }
   for (let z = 0; z < 1; z++) {
      mathp.set(rewardvideoH, rewardvideoH.length * 3);
   }
      mathp = new Map([[largeT, largeT.length | 2]]);
      countryq += `${bangP.length}`;
       let kickY = 2.0;
       let znewinterstitialM = 3;
          let foregroundJ = String.fromCharCode(121,95,56,54,95,116,101,108,108,97,114,0);
         znewinterstitialM |= parseInt(`${kickY}`);
         foregroundJ = `${(foregroundJ == String.fromCharCode(98,0) ? foregroundJ.length : foregroundJ.length)}`;
      while (kickY >= znewinterstitialM) {
         znewinterstitialM /= Math.max(3, znewinterstitialM << (Math.min(Math.abs(parseInt(`${kickY}`)), 2)));
         break;
      }
       let greyarrowupv = false;
      let jingdong2 = 9440621 >= znewinterstitialM;
      do {
         znewinterstitialM %= Math.max(znewinterstitialM + 1, 3);
         if (jingdong2) {
            break;
         }
      } while (jingdong2 && (4.55 == (kickY * znewinterstitialM)));
      let basketballJ = 8020961 >= znewinterstitialM;
      do {
         znewinterstitialM <<= Math.min(Math.abs(znewinterstitialM & 1), 4);
         if (basketballJ) {
            break;
         }
      } while (basketballJ && (!greyarrowupv || 1 <= (1 << (Math.min(5, Math.abs(znewinterstitialM))))));
      let rules3 = greyarrowupv ? !greyarrowupv : greyarrowupv;
      do {
         greyarrowupv = 54 == znewinterstitialM && kickY == 67.57;
         if (rules3) {
            break;
         }
      } while (((2 * znewinterstitialM) > 1 && !greyarrowupv) && rules3);
      countryq = `${chartj.length & borderlessr.length}`;
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
       let libzeusC: Array<any> = [966, 117, 642];
    let ainit_39b = false;
    let agreement1 = 0;
    let bootsplashC = 2.0;
    let backj = 4.0;
    let statisticsinactiveV = String.fromCharCode(103,122,105,112,112,101,100,95,106,95,53,49,0);
    let themeJ = String.fromCharCode(107,95,54,54,95,115,110,105,112,112,101,116,0);
    let imagenetworkerr6 = true;
    let libreanimated7 = String.fromCharCode(105,95,54,55,95,104,105,101,114,97,114,99,104,121,0);
    let huaweiU = String.fromCharCode(111,95,50,53,95,118,97,108,105,100,97,116,101,0);
    let imagemanagery: Map<any, any> = new Map([[String.fromCharCode(103,95,53,49,95,113,117,97,110,116,0),492], [String.fromCharCode(114,117,110,116,101,115,116,115,95,97,95,53,48,0),404], [String.fromCharCode(108,105,98,115,114,116,95,119,95,53,53,0),4]]);
    let controlc = 2;
    let nalyticsJ: Map<any, any> = new Map([[String.fromCharCode(115,95,50,53,95,115,116,114,101,116,99,104,97,98,108,101,0),999], [String.fromCharCode(101,95,56,57,95,99,102,109,116,0),123], [String.fromCharCode(99,95,56,48,95,109,112,101,103,97,117,100,105,111,100,101,99,116,97,98,0),978]]);
    let zoome = String.fromCharCode(98,95,52,53,95,112,114,111,116,111,98,117,102,0);
    let yellowredcardq: Map<any, any> = new Map([[String.fromCharCode(98,99,100,117,105,110,116,95,106,95,55,57,0),990], [String.fromCharCode(109,117,108,116,105,98,97,115,101,95,100,95,57,49,0),357]]);
   while (2.22 > (3.6 - bootsplashC) && (themeJ.length >> (Math.min(Math.abs(5), 5))) > 4) {
      themeJ += `${3 ^ parseInt(`${bootsplashC}`)}`;
      break;
   }
      themeJ = "2";
       let pointu: Array<any> = [978, 16, 189];
       let dangerf: Array<any> = [12, 506, 859];
       let predictionbannershared6 = false;
      let settingM = pointu.length >= 8636517;
      do {
          let membershipL: Map<any, any> = new Map([[String.fromCharCode(115,117,98,114,101,115,117,108,116,115,95,105,95,50,49,0),482], [String.fromCharCode(105,95,54,51,95,115,121,110,99,109,97,114,107,101,114,0),311], [String.fromCharCode(117,116,118,105,100,101,111,95,106,95,55,54,0),388]]);
          let confirmation7 = 0.0;
          let dark1 = 1.0;
          let updatesz = String.fromCharCode(115,95,55,57,95,99,108,117,116,0);
         pointu = [membershipL.size];
         membershipL.set(`${dark1}`, 2 - parseInt(`${dark1}`));
         confirmation7 /= Math.max((parseFloat(`${String.fromCharCode(80,0) == updatesz ? updatesz.length : parseInt(`${dark1}`)}`)), 5);
         if (settingM) {
            break;
         }
      } while ((3 > (pointu.length & 2) || predictionbannershared6) && settingM);
         pointu.push(3 | dangerf.length);
       let baidum = 4;
       let predictionbannersharedA = 1;
      for (let i = 0; i < 1; i++) {
         predictionbannersharedA |= baidum;
      }
         dangerf = [1 - predictionbannersharedA];
          let mimo1 = String.fromCharCode(117,112,99,97,108,108,95,51,95,56,0);
          let iconwatchnowl = 0;
          let enewssharez: Array<any> = [922, 48, 703];
         predictionbannershared6 = (86 <= ((!predictionbannershared6 ? 86 : pointu.length) - pointu.length));
         mimo1 += `${1 << (Math.min(2, enewssharez.length))}`;
         iconwatchnowl |= iconwatchnowl | 2;
         enewssharez = [2];
       let reactnativeratingsQ: Map<any, any> = new Map([[String.fromCharCode(115,117,98,105,109,97,103,101,95,122,95,52,50,0),String.fromCharCode(101,95,57,95,112,97,103,0)], [String.fromCharCode(113,95,54,57,95,100,111,109,97,105,110,0),String.fromCharCode(98,111,120,112,108,111,116,95,101,95,49,53,0)], [String.fromCharCode(120,95,56,54,95,109,109,97,112,0),String.fromCharCode(105,95,50,52,95,118,97,97,112,105,0)]]);
       let indexh: Map<any, any> = new Map([[String.fromCharCode(114,95,51,55,95,116,101,115,116,105,109,103,105,110,116,0),false ], [String.fromCharCode(109,95,53,95,114,101,115,101,116,0),false ]]);
         dangerf = [3 / (Math.max(5, pointu.length))];
       let vignetteb = String.fromCharCode(97,95,57,52,95,115,116,114,115,116,97,114,116,0);
      libreanimated7 += "3";
      libreanimated7 = "2";
   let fastforwardh = imagenetworkerr6 ? !imagenetworkerr6 : imagenetworkerr6;
   do {
      imagenetworkerr6 = 59 == (agreement1 - bootsplashC);
      if (fastforwardh) {
         break;
      }
   } while ((5.6 < (5.4 - backj) && backj < 5.4) && fastforwardh);
      statisticsinactiveV = `${libreanimated7.length / 1}`;
       let nextC = 0;
       let become3 = String.fromCharCode(100,95,57,48,95,99,111,109,112,108,101,120,105,116,121,0);
         nextC %= Math.max(4, (String.fromCharCode(89,0) == become3 ? nextC : become3.length));
          let statisticsinactivec = String.fromCharCode(102,97,114,109,101,95,97,95,55,56,0);
          let vignetteD: Array<any> = [String.fromCharCode(102,95,53,55,95,117,110,115,116,111,112,112,97,98,108,101,0), String.fromCharCode(111,95,52,52,95,99,97,112,116,105,111,110,115,0)];
          let analytich = 5.0;
         become3 += "2";
         statisticsinactivec = `${vignetteD.length & 2}`;
         vignetteD.push(parseInt(`${analytich}`));
         analytich -= vignetteD.length / (Math.max(statisticsinactivec.length, 8));
      while ((nextC ^ 5) >= 5 && 4 >= (5 ^ become3.length)) {
          let relatedr = String.fromCharCode(103,97,109,109,97,95,57,95,53,50,0);
          let langv: Array<any> = [287, 573];
          let gdtadv5: Array<any> = [478, 456, 715];
          let bodanG = true;
         become3 = `${langv.length}`;
         relatedr = `${gdtadv5.length - 3}`;
         langv = [relatedr.length * 1];
         gdtadv5 = [(relatedr == String.fromCharCode(50,0) ? gdtadv5.length : relatedr.length)];
         bodanG = relatedr.length < gdtadv5.length;
         break;
      }
          let episodesL: Array<any> = [650, 366, 561];
          let downloadedb = String.fromCharCode(115,116,97,116,101,102,117,108,95,50,95,53,56,0);
          let shoote = String.fromCharCode(104,111,114,105,122,111,110,116,97,108,95,50,95,49,52,0);
         become3 += "3";
         episodesL.push(downloadedb.length);
         downloadedb += `${episodesL.length}`;
         shoote += `${(downloadedb == String.fromCharCode(85,0) ? downloadedb.length : shoote.length)}`;
         become3 = `${nextC}`;
      for (let s = 0; s < 2; s++) {
         become3 = `${nextC / (Math.max(1, 1))}`;
      }
      backj += parseInt(`${bootsplashC}`) - statisticsinactiveV.length;
       let hooksn = String.fromCharCode(99,95,57,50,95,104,117,109,97,110,0);
       let dicec = true;
      while (!dicec || 4 < hooksn.length) {
          let static_iY = 4;
          let baiduI = String.fromCharCode(117,110,105,109,112,108,101,109,101,110,116,101,100,95,105,95,50,0);
          let moreY = String.fromCharCode(115,117,103,103,101,115,116,101,100,95,108,95,55,50,0);
          let libfbjniE = String.fromCharCode(119,95,50,57,95,105,115,112,108,97,121,0);
          let darke = String.fromCharCode(100,101,103,114,101,101,95,106,95,56,53,0);
         dicec = !dicec && hooksn.length <= 1;
         static_iY |= moreY.length ^ baiduI.length;
         baiduI = `${static_iY}`;
         moreY = "3";
         libfbjniE += `${moreY.length * 3}`;
         darke = `${(String.fromCharCode(111,0) == moreY ? darke.length : moreY.length)}`;
         break;
      }
         dicec = dicec || hooksn.length < 12;
         dicec = hooksn.length >= 68;
         hooksn = `${hooksn.length + 3}`;
      if (!hooksn.endsWith(`${dicec}`)) {
         dicec = hooksn.length == 20;
      }
          let mapbufferM = 3.0;
          let emoji1 = false;
         hooksn = "3";
         mapbufferM /= Math.max(1, parseFloat(`${parseInt(`${mapbufferM}`) | parseInt(`${mapbufferM}`)}`));
         emoji1 = 48.16 >= mapbufferM;
      libreanimated7 = `${agreement1}`;
       let libfabricjnih = 2.0;
       let libavfilterU: Map<any, any> = new Map([[String.fromCharCode(121,95,50,51,95,110,105,109,97,116,101,100,0),String.fromCharCode(104,95,49,50,95,103,101,110,104,0)], [String.fromCharCode(116,95,50,49,95,109,112,101,103,97,117,100,105,111,100,97,116,97,0),String.fromCharCode(100,95,56,57,95,118,97,114,105,97,110,99,101,120,0)]]);
      if (!Array.from(libavfilterU.values()).includes(libfabricjnih)) {
         libfabricjnih -= libavfilterU.size;
      }
      for (let t = 0; t < 2; t++) {
         libfabricjnih /= Math.max(1, libavfilterU.size - parseInt(`${libfabricjnih}`));
      }
         libavfilterU = new Map([[`${libavfilterU.size}`, libavfilterU.size - 2]]);
      for (let p = 0; p < 3; p++) {
          let temperatureN: Array<any> = [756, 425, 226];
          let mbnativeM: Array<any> = [667, 642, 977];
          let reactnativeratingsc = String.fromCharCode(120,95,50,54,95,114,111,119,115,0);
         libfabricjnih *= 2;
         temperatureN = [mbnativeM.length];
         mbnativeM = [reactnativeratingsc.length - mbnativeM.length];
         reactnativeratingsc = `${temperatureN.length | 3}`;
      }
      for (let f = 0; f < 2; f++) {
         libfabricjnih -= parseInt(`${libfabricjnih}`);
      }
       let hejis = String.fromCharCode(116,95,56,52,95,115,111,100,105,115,99,111,110,110,101,99,116,0);
       let moonn = String.fromCharCode(106,95,55,54,95,97,99,99,101,115,115,111,114,0);
      ainit_39b = 52.32 >= bootsplashC;
       let chinaW = 3;
       let matchf = String.fromCharCode(110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,95,100,95,49,55,0);
       let tnewarchdefaultsq = String.fromCharCode(117,95,51,95,105,97,100,115,116,120,0);
          let bellW = 0.0;
          let stringsl = true;
          let topicO = String.fromCharCode(112,95,54,57,95,112,111,119,101,114,0);
         matchf += `${tnewarchdefaultsq.length}`;
         bellW /= Math.max(2, parseFloat(`${2}`));
         stringsl = stringsl || topicO.length < 36;
         topicO = `${parseInt(`${bellW}`) << (Math.min(2, Math.abs(2)))}`;
          let gifgoalh: Map<any, any> = new Map([[String.fromCharCode(121,95,50,56,95,110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,0),true ], [String.fromCharCode(122,95,50,53,0),true ], [String.fromCharCode(118,97,108,105,100,97,116,111,114,95,102,95,53,52,0),false ]]);
          let panglex = 5.0;
         chinaW += gifgoalh.size >> (Math.min(matchf.length, 5));
         gifgoalh = new Map([[`${panglex}`, parseInt(`${panglex}`)]]);
         chinaW |= chinaW & matchf.length;
         matchf = "1";
       let middlebrightnessN = true;
       let humidityN = false;
      for (let o = 0; o < 1; o++) {
         middlebrightnessN = (((!middlebrightnessN ? 47 : matchf.length) & matchf.length) == 47);
      }
      if (5 >= tnewarchdefaultsq.length) {
         tnewarchdefaultsq = `${((humidityN ? 2 : 1))}`;
      }
      for (let d = 0; d < 3; d++) {
          let policyQ = String.fromCharCode(120,121,119,104,95,56,95,51,55,0);
          let gemfilem = String.fromCharCode(119,95,51,56,95,112,114,101,115,117,109,101,0);
         humidityN = (chinaW + gemfilem.length) <= 38;
         policyQ = `${policyQ.length / (Math.max(3, 6))}`;
         gemfilem += `${policyQ.length}`;
      }
      while (tnewarchdefaultsq.length > 2) {
         humidityN = tnewarchdefaultsq.length == matchf.length;
         break;
      }
      libreanimated7 += `${themeJ.length}`;
   while (5 <= (3 & agreement1)) {
       let closey = false;
       let searchbaru = 1.0;
       let dropdownF = String.fromCharCode(100,95,53,54,95,116,105,109,101,119,97,105,116,0);
       let tailF: Array<any> = [650, 176, 997];
       let viewerk = String.fromCharCode(107,95,53,55,95,116,114,97,110,115,108,97,116,105,111,110,0);
       let rewardvideow = String.fromCharCode(105,95,53,52,95,118,105,101,119,101,100,0);
       let bell8 = 1.0;
       let downarrowl = 0.0;
          let playercommonQ = 3.0;
          let bdxadsdkA: Map<any, any> = new Map([[String.fromCharCode(119,95,49,48,48,95,97,99,102,105,108,116,101,114,0),235], [String.fromCharCode(101,95,50,51,95,118,105,103,110,101,116,116,105,110,103,0),143]]);
         bell8 /= Math.max(viewerk.length, 4);
         playercommonQ /= Math.max(parseFloat(`${bdxadsdkA.size / 2}`), 5);
         bdxadsdkA.set(`${playercommonQ}`, parseInt(`${playercommonQ}`) + bdxadsdkA.size);
      while (2 <= (parseInt(`${bell8}`) / (Math.max(rewardvideow.length, 4)))) {
         bell8 -= 1;
         break;
      }
      if (!closey || (1.6 * bell8) < 5.34) {
         bell8 /= Math.max(tailF.length & 3, 2);
      }
         viewerk = `${rewardvideow.length / (Math.max(2, parseInt(`${bell8}`)))}`;
      if (dropdownF.includes(`${downarrowl}`)) {
         downarrowl /= Math.max((parseInt(`${bell8}`) ^ (closey ? 5 : 5)), 2);
      }
      while (5.66 > searchbaru) {
          let libsgcoreU = 1;
         searchbaru -= parseFloat(`${tailF.length >> (Math.min(2, Math.abs(parseInt(`${searchbaru}`))))}`);
         libsgcoreU |= libsgcoreU >> (Math.min(Math.abs(libsgcoreU), 3));
         break;
      }
         viewerk = `${dropdownF.length % 3}`;
      while (3.71 >= (bell8 - 4.52) || 4.52 >= bell8) {
         bell8 += parseInt(`${downarrowl}`) << (Math.min(5, Math.abs(1)));
         break;
      }
         downarrowl *= 2 * parseInt(`${bell8}`);
         searchbaru += parseFloat(`${1 ^ dropdownF.length}`);
         viewerk += `${(3 * (closey ? 2 : 5))}`;
       let materialB = 3.0;
      let uimanagerT = 6837476.0 <= bell8;
      do {
          let refreshd = false;
         bell8 -= 1 << (Math.min(Math.abs(parseInt(`${searchbaru}`)), 3));
         refreshd = (refreshd ? !refreshd : refreshd);
         if (uimanagerT) {
            break;
         }
      } while (uimanagerT && (dropdownF.includes(`${bell8}`)));
      libzeusC.push(3);
      break;
   }
   if (5.1 > backj) {
      backj /= Math.max(parseInt(`${backj}`), 5);
   }
   for (let j = 0; j < 3; j++) {
       let reminderT = String.fromCharCode(116,109,112,95,121,95,52,49,0);
       let private_6iX = String.fromCharCode(116,114,105,97,110,103,108,101,115,95,102,95,51,52,0);
       let windg = String.fromCharCode(108,105,118,101,115,116,114,101,97,109,95,122,95,50,51,0);
       let foregroundG = String.fromCharCode(115,112,101,114,97,116,111,114,95,100,95,53,50,0);
       let l_unlockb = 0;
      let styleH = 5215118 >= private_6iX.length;
      do {
          let logine = String.fromCharCode(102,111,117,114,99,99,95,48,95,54,57,0);
          let friendsj = 1.0;
          let transfer8: Array<any> = [String.fromCharCode(119,95,53,50,95,115,116,97,116,101,102,117,108,0), String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,95,54,95,54,53,0)];
          let libtanN = String.fromCharCode(115,111,102,114,101,101,95,107,95,52,55,0);
          let phone0 = String.fromCharCode(109,101,115,104,95,109,95,50,53,0);
         private_6iX += "1";
         logine = `${phone0.length & transfer8.length}`;
         friendsj -= (parseFloat(`${String.fromCharCode(77,0) == phone0 ? parseInt(`${friendsj}`) : phone0.length}`));
         transfer8.push(3 + libtanN.length);
         libtanN += `${libtanN.length}`;
         if (styleH) {
            break;
         }
      } while (styleH && (private_6iX.length > 5));
      while (private_6iX.length == reminderT.length) {
         private_6iX = `${1 << (Math.min(3, foregroundG.length))}`;
         break;
      }
      while (windg == foregroundG) {
         foregroundG += `${(windg == String.fromCharCode(73,0) ? windg.length : reminderT.length)}`;
         break;
      }
      let phoneshare4 = foregroundG.length >= 9305106;
      do {
          let aream = true;
          let penaltygoalv = false;
          let nativemodulec = String.fromCharCode(116,95,55,55,95,105,110,116,101,114,112,111,108,97,116,111,114,115,0);
         foregroundG += `${(2 + (aream ? 4 : 5))}`;
         aream = (2 > (nativemodulec.length & (penaltygoalv ? nativemodulec.length : 2)));
         penaltygoalv = !penaltygoalv || nativemodulec.length == 92;
         if (phoneshare4) {
            break;
         }
      } while (phoneshare4 && (5 > windg.length));
      while (!foregroundG.includes(`${windg.length}`)) {
         windg = "3";
         break;
      }
         foregroundG += `${(private_6iX == String.fromCharCode(77,0) ? l_unlockb : private_6iX.length)}`;
         l_unlockb |= 3 & l_unlockb;
         reminderT += `${2 ^ foregroundG.length}`;
         reminderT = `${foregroundG.length - private_6iX.length}`;
      while (private_6iX.endsWith(`${l_unlockb}`)) {
          let screen9 = String.fromCharCode(105,95,57,50,0);
          let regengU = 5;
          let f_managerg = true;
          let volumeO = 0;
          let largee = false;
         private_6iX += `${(reminderT == String.fromCharCode(56,0) ? l_unlockb : reminderT.length)}`;
         screen9 += `${regengU - 3}`;
         regengU &= 2;
         f_managerg = f_managerg && !largee;
         volumeO &= 3 - regengU;
         break;
      }
         foregroundG += `${private_6iX.length}`;
       let notificationl = String.fromCharCode(111,95,55,48,95,114,101,102,105,100,0);
       let headeri = String.fromCharCode(99,95,57,50,95,106,111,105,110,101,100,0);
         l_unlockb /= Math.max(4, (foregroundG == String.fromCharCode(100,0) ? l_unlockb : foregroundG.length));
      let event5 = headeri == String.fromCharCode(112,105,48,102,117,97,103,118,0);
      do {
         headeri = `${2 << (Math.min(2, private_6iX.length))}`;
         if (event5) {
            break;
         }
      } while ((headeri.length > windg.length) && event5);
      if (!reminderT.includes(private_6iX)) {
          let libglogM = String.fromCharCode(103,95,49,49,95,114,103,98,105,0);
          let register_6l = true;
         reminderT = `${libglogM.length + 1}`;
      }
      libreanimated7 += `${libzeusC.length >> (Math.min(Math.abs(2), 4))}`;
   }
       let twitterh = String.fromCharCode(100,101,99,111,114,97,116,105,111,110,95,99,95,49,56,0);
       let security_ = true;
          let predictionbannersharedu = 1;
         twitterh = `${twitterh.length ^ 2}`;
         predictionbannersharedu ^= predictionbannersharedu;
      let main_dQ = security_ ? !security_ : security_;
      do {
         security_ = twitterh.length >= 73;
         if (main_dQ) {
            break;
         }
      } while (main_dQ && (!security_));
          let turndownV = String.fromCharCode(111,95,51,57,95,122,101,114,111,109,118,0);
          let cancelm = String.fromCharCode(112,95,57,57,95,117,110,104,97,110,100,108,101,100,0);
          let themeB = String.fromCharCode(110,101,105,103,104,98,111,114,105,110,103,95,102,95,50,51,0);
         twitterh = `${3 | cancelm.length}`;
         turndownV = `${2 & turndownV.length}`;
         cancelm += "1";
         themeB = `${2 | turndownV.length}`;
      for (let q = 0; q < 1; q++) {
         twitterh += `${((security_ ? 5 : 4) & 3)}`;
      }
      if (security_ && twitterh.length > 1) {
          let topon5: Map<any, any> = new Map([[String.fromCharCode(99,95,54,51,95,105,110,116,101,114,97,99,116,111,114,0),false ], [String.fromCharCode(110,112,97,116,99,104,101,115,95,108,95,55,57,0),false ]]);
          let fcdaebecbcbafcdfceaaeccfeacdbH = String.fromCharCode(112,95,57,53,95,112,116,115,101,115,0);
          let select1 = String.fromCharCode(110,95,55,50,95,116,114,105,109,0);
          let filledD = String.fromCharCode(116,95,52,52,95,98,114,111,97,100,99,97,115,116,101,114,0);
          let renewS = String.fromCharCode(115,116,114,101,97,109,105,110,103,95,109,95,50,50,0);
         twitterh += "1";
         topon5 = new Map([[filledD, fcdaebecbcbafcdfceaaeccfeacdbH.length]]);
         fcdaebecbcbafcdfceaaeccfeacdbH += `${(String.fromCharCode(78,0) == fcdaebecbcbafcdfceaaeccfeacdbH ? topon5.size : fcdaebecbcbafcdfceaaeccfeacdbH.length)}`;
         select1 += `${select1.length - filledD.length}`;
         renewS = `${(filledD == String.fromCharCode(76,0) ? filledD.length : renewS.length)}`;
      }
       let weatherm = true;
      libzeusC.push((String.fromCharCode(56,0) == libreanimated7 ? (imagenetworkerr6 ? 4 : 2) : libreanimated7.length));
      bootsplashC *= 3;
       let profileinactiveG = 5.0;
         profileinactiveG /= Math.max(parseFloat(`${parseInt(`${profileinactiveG}`) << (Math.min(2, Math.abs(parseInt(`${profileinactiveG}`))))}`), 2);
      let description_hJ = profileinactiveG >= 6346334.0;
      do {
         profileinactiveG += parseFloat(`${parseInt(`${profileinactiveG}`)}`);
         if (description_hJ) {
            break;
         }
      } while ((1.62 < (profileinactiveG / (Math.max(3.29, 8))) || 3.29 < (profileinactiveG / (Math.max(2, profileinactiveG)))) && description_hJ);
         profileinactiveG += parseFloat(`${3 * parseInt(`${profileinactiveG}`)}`);
      libreanimated7 += "1";
      imagenetworkerr6 = 77 >= agreement1;
      libzeusC = [(agreement1 << (Math.min(4, Math.abs((imagenetworkerr6 ? 3 : 2)))))];
   while ((libzeusC.length ^ libreanimated7.length) < 4 && (libreanimated7.length ^ 4) < 2) {
      libreanimated7 = `${(parseInt(`${bootsplashC}`) / (Math.max(8, (imagenetworkerr6 ? 5 : 1))))}`;
      break;
   }

          dispatch(incrementSportWatchTime());
        }, 1000);

        return () => clearInterval(unsub);
      }
    }, [route.name])

    
    
    
    
    

    const isVip = wwBodan.isVip(userState.user);

    const pauseSportVideo =
      route.name === "体育详情" &&
      screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS && !wwBodan.isVip(userState.user)

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
       let colorsP = 2.0;
    let anytime9: Array<any> = [747, 403];
    let tailu = String.fromCharCode(97,110,103,108,101,95,50,95,53,51,0);
    let yellowanimationliveX = 3.0;
    let auto_05 = String.fromCharCode(102,95,53,53,95,118,97,108,105,100,105,116,121,0);
    let carousell = String.fromCharCode(109,95,53,55,95,116,114,97,110,115,99,101,105,118,101,114,0);
    let lessz = 5.0;
   for (let t = 0; t < 1; t++) {
       let dplusT = 5;
         dplusT >>= Math.min(Math.abs(dplusT), 5);
          let libjsinspector1 = String.fromCharCode(101,120,99,108,117,100,105,110,103,95,118,95,57,50,0);
          let thumbnailR = 1.0;
          let libswresampleY: Map<any, any> = new Map([[String.fromCharCode(97,114,101,115,95,104,95,53,0),140], [String.fromCharCode(110,105,110,101,95,104,95,56,52,0),256], [String.fromCharCode(104,119,117,112,108,111,97,100,95,54,95,51,55,0),519]]);
         dplusT %= Math.max(2, 1);
         libjsinspector1 = `${libjsinspector1.length + 1}`;
         thumbnailR /= Math.max(parseFloat(`${parseInt(`${thumbnailR}`)}`), 4);
         libswresampleY.set(`${thumbnailR}`, parseInt(`${thumbnailR}`) + libjsinspector1.length);
       let questicone: Array<any> = [497, 840, 948];
      lessz -= tailu.length | 3;
   }

      if (!playerVodAds?.actionUrl) {

       let reactnativejsk = String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,108,95,50,49,0);
         reactnativejsk = `${(reactnativejsk == String.fromCharCode(82,0) ? reactnativejsk.length : reactnativejsk.length)}`;
          let renewe = String.fromCharCode(110,95,55,50,95,104,105,103,104,112,111,114,116,0);
         reactnativejsk += `${reactnativejsk.length / 1}`;
         renewe = `${renewe.length}`;
       let paginationZ = String.fromCharCode(98,108,111,99,107,105,110,101,115,115,95,112,95,57,51,0);
       let sharemodalK = String.fromCharCode(113,95,55,53,95,115,112,101,101,100,111,109,101,116,101,114,0);
      yellowanimationliveX *= parseFloat(`${anytime9.length - 1}`);
        

      colorsP /= Math.max(3 - parseInt(`${lessz}`), 2);
        ww_runtime.playsAdsClickAnalytics();

   while (!anytime9.includes(yellowanimationliveX)) {
      yellowanimationliveX -= (parseFloat(`${String.fromCharCode(75,0) == carousell ? carousell.length : parseInt(`${lessz}`)}`));
      break;
   }
        

   while (auto_05 == carousell) {
      carousell = `${tailu.length}`;
      break;
   }

        if (onPressCountdown) onPressCountdown();

      auto_05 = `${parseInt(`${yellowanimationliveX}`)}`;
        return;

   let predictionactiveb = String.fromCharCode(114,115,103,105,0) == auto_05;
   do {
      auto_05 = `${parseInt(`${yellowanimationliveX}`)}`;
      if (predictionactiveb) {
         break;
      }
   } while ((yellowanimationliveX == 5.97) && predictionactiveb);
      }

      const url = playerVodAds?.actionUrl.includes(KickHuawei.serviceCasting([11,23,23,19,99],0x63,false)) ? playerVodAds?.actionUrl : KickHuawei.serviceCasting([44,48,48,52,55,126,107,107,68],0x44,false) + playerVodAds?.actionUrl

      

   for (let f = 0; f < 3; f++) {
       let animationY = String.fromCharCode(121,95,52,49,95,98,105,116,108,105,110,101,99,104,117,110,107,121,0);
       let sliderH = 5;
       let sportsQ = String.fromCharCode(111,114,119,97,114,100,101,100,95,113,95,50,56,0);
       let redgoalo: Array<any> = [150, 974];
       let catalogE: Map<any, any> = new Map([[String.fromCharCode(113,95,53,95,117,112,108,111,97,100,97,98,108,101,0),true ], [String.fromCharCode(114,95,52,53,95,115,117,98,100,97,116,97,0),true ], [String.fromCharCode(114,95,49,50,95,120,118,109,99,0),false ]]);
      for (let y = 0; y < 1; y++) {
          let placeholderu: Map<any, any> = new Map([[String.fromCharCode(100,95,53,95,102,105,103,104,116,101,114,115,0),452], [String.fromCharCode(108,97,115,116,109,98,117,102,95,51,95,49,49,0),570]]);
         animationY += `${(sportsQ == String.fromCharCode(72,0) ? sportsQ.length : placeholderu.size)}`;
      }
         animationY += `${animationY.length}`;
      for (let j = 0; j < 1; j++) {
          let libmapbufferjnir = 1.0;
         animationY += `${sliderH / (Math.max(parseInt(`${libmapbufferjnir}`), 9))}`;
      }
      while ((redgoalo.length - catalogE.size) > 1) {
          let borderlessK = String.fromCharCode(115,95,51,52,95,97,103,97,105,110,0);
          let resultz = String.fromCharCode(109,111,100,101,99,111,110,116,95,111,95,54,54,0);
          let textinputT: Array<any> = [167, 966];
         redgoalo = [sliderH];
         borderlessK = `${resultz.length >> (Math.min(Math.abs(3), 3))}`;
         resultz = `${2 * borderlessK.length}`;
         textinputT = [(String.fromCharCode(119,0) == resultz ? resultz.length : borderlessK.length)];
         break;
      }
      if (animationY.length > catalogE.size) {
          let roomz = String.fromCharCode(114,95,57,57,95,115,97,118,105,110,103,115,0);
          let bangH = String.fromCharCode(109,97,120,105,109,117,109,95,112,95,49,48,48,0);
          let runtimeschedulerR = 0.0;
          let analytics5: Map<any, any> = new Map([[String.fromCharCode(105,95,55,55,95,115,105,98,108,105,110,103,115,0),false ], [String.fromCharCode(117,116,104,111,114,95,111,95,53,0),true ], [String.fromCharCode(121,97,98,101,95,113,95,50,0),true ]]);
         catalogE = new Map([[animationY, 3 << (Math.min(1, Math.abs(parseInt(`${runtimeschedulerR}`))))]]);
         roomz = `${bangH.length}`;
         bangH += `${analytics5.size | 3}`;
         runtimeschedulerR /= Math.max(4, parseFloat(`${1 & roomz.length}`));
         analytics5.set(bangH, bangH.length & 1);
      }
      while ((catalogE.size & sportsQ.length) == 4) {
         catalogE = new Map([[`${redgoalo.length}`, redgoalo.length << (Math.min(Math.abs(3), 4))]]);
         break;
      }
      let private_p6 = 7041600 >= sportsQ.length;
      do {
         sportsQ += `${(String.fromCharCode(51,0) == sportsQ ? catalogE.size : sportsQ.length)}`;
         if (private_p6) {
            break;
         }
      } while ((5 > sportsQ.length) && private_p6);
      if ((sliderH % (Math.max(3, 1))) < 2 || (catalogE.size % (Math.max(4, sliderH))) < 3) {
         catalogE = new Map([[`${catalogE.size}`, catalogE.size / (Math.max(6, redgoalo.length))]]);
      }
       let animationsQ: Map<any, any> = new Map([[String.fromCharCode(115,95,51,95,109,117,108,116,105,112,108,101,120,101,100,0),String.fromCharCode(115,110,97,112,115,104,111,116,115,95,122,95,56,52,0)], [String.fromCharCode(109,95,50,54,95,115,101,112,105,97,0),String.fromCharCode(114,95,57,55,95,108,105,98,101,114,116,121,0)]]);
       let x_lock1: Map<any, any> = new Map([[String.fromCharCode(118,95,53,48,0),357], [String.fromCharCode(102,109,115,117,98,95,116,95,52,56,0),99], [String.fromCharCode(121,95,55,57,95,98,97,115,105,99,0),415]]);
          let rncorev = 0;
          let prediction3 = String.fromCharCode(98,114,101,97,107,115,95,104,95,49,51,0);
         animationsQ = new Map([[`${animationsQ.size}`, sliderH]]);
         rncorev /= Math.max(2, rncorev / (Math.max(prediction3.length, 6)));
         prediction3 += `${rncorev - 3}`;
      while (x_lock1.get(`${redgoalo.length}`) != null) {
         redgoalo = [catalogE.size % (Math.max(sportsQ.length, 4))];
         break;
      }
         animationsQ = new Map([[`${animationsQ.size}`, 1 - animationsQ.size]]);
      for (let r = 0; r < 1; r++) {
          let libreactp: Map<any, any> = new Map([[String.fromCharCode(114,101,109,111,116,101,108,121,95,111,95,53,57,0),558], [String.fromCharCode(100,95,54,54,95,115,117,98,118,105,101,119,0),173], [String.fromCharCode(97,110,105,109,97,116,101,100,95,122,95,56,52,0),501]]);
          let mapbufferO = String.fromCharCode(116,114,117,110,95,98,95,56,54,0);
          let armvav = 3.0;
         sportsQ += `${catalogE.size / (Math.max(7, animationsQ.size))}`;
         libreactp = new Map([[`${armvav}`, mapbufferO.length + 1]]);
         mapbufferO = `${parseInt(`${armvav}`) + mapbufferO.length}`;
      }
          let headerl = 0.0;
          let questiconb = String.fromCharCode(116,121,112,101,95,100,95,57,54,0);
          let xadsdko = 4.0;
         catalogE = new Map([[`${x_lock1.size}`, (String.fromCharCode(69,0) == animationY ? animationY.length : x_lock1.size)]]);
         headerl += 2 / (Math.max(8, parseInt(`${xadsdko}`)));
         questiconb += `${parseInt(`${xadsdko}`) / 1}`;
          let sharemodalZ: Map<any, any> = new Map([[String.fromCharCode(119,95,49,48,95,101,110,97,98,108,101,0),String.fromCharCode(122,95,54,50,95,105,116,113,117,101,117,101,0)], [String.fromCharCode(106,105,116,116,101,114,95,122,95,54,49,0),String.fromCharCode(97,95,54,54,95,100,101,108,105,109,105,116,101,100,0)]]);
          let submitJ = 1.0;
         catalogE.set(animationY, animationY.length * 1);
         sharemodalZ.set(`${submitJ}`, 1 % (Math.max(5, parseInt(`${submitJ}`))));
      yellowanimationliveX *= parseFloat(`${parseInt(`${colorsP}`) & redgoalo.length}`);
   }
      

      lessz *= anytime9.length + 3;

      

   let benefitC = carousell.length <= 9322898;
   do {
      carousell = `${3 - tailu.length}`;
      if (benefitC) {
         break;
      }
   } while (benefitC && (auto_05 == String.fromCharCode(102,0) || carousell == String.fromCharCode(119,0)));
      

       let inouttargetred5 = false;
         inouttargetred5 = !inouttargetred5;
         inouttargetred5 = inouttargetred5 || !inouttargetred5;
         inouttargetred5 = !inouttargetred5 && !inouttargetred5;
      colorsP /= Math.max(1, (tailu == String.fromCharCode(118,0) ? auto_05.length : tailu.length));
      

   while (carousell.endsWith(`${lessz}`)) {
      lessz /= Math.max(anytime9.length ^ tailu.length, 2);
      break;
   }
      

       let middlebrightnessi = 1.0;
       let libloggerK: Map<any, any> = new Map([[String.fromCharCode(113,116,97,98,108,101,95,115,95,54,50,0),480], [String.fromCharCode(117,95,50,50,95,102,99,111,100,101,0),587]]);
      if (Array.from(libloggerK.values()).includes(middlebrightnessi)) {
          let unfill2 = String.fromCharCode(109,105,115,109,97,116,99,104,95,48,95,49,56,0);
          let membershipF: Array<any> = [54, 663, 10];
          let bodanE = 1;
          let guidel = String.fromCharCode(102,114,105,101,110,100,95,115,95,50,57,0);
          let episodesr = String.fromCharCode(112,95,51,55,95,112,97,114,115,101,0);
         middlebrightnessi *= parseFloat(`${3}`);
         unfill2 += `${unfill2.length >> (Math.min(Math.abs(2), 3))}`;
         membershipF.push(unfill2.length + guidel.length);
         bodanE %= Math.max(2, (String.fromCharCode(74,0) == unfill2 ? unfill2.length : bodanE));
         guidel += `${(String.fromCharCode(107,0) == guidel ? guidel.length : bodanE)}`;
         episodesr = `${(unfill2 == String.fromCharCode(69,0) ? membershipF.length : unfill2.length)}`;
      }
          let zoomk = String.fromCharCode(100,111,99,108,105,115,116,95,122,95,51,49,0);
          let detailsR = 1.0;
          let pathK: Array<any> = [String.fromCharCode(114,101,97,100,102,117,108,108,95,117,95,53,49,0), String.fromCharCode(108,95,54,57,95,112,104,121,115,105,99,97,108,0), String.fromCharCode(108,95,52,49,95,108,105,98,118,111,114,98,105,115,0)];
         libloggerK = new Map([[`${libloggerK.size}`, parseInt(`${middlebrightnessi}`)]]);
         zoomk = `${zoomk.length | 2}`;
         detailsR *= parseFloat(`${2}`);
         pathK = [parseInt(`${detailsR}`)];
       let watchnowbga = String.fromCharCode(100,105,97,103,110,111,115,116,105,99,115,95,103,95,53,0);
       let executoru = String.fromCharCode(97,101,99,95,116,95,56,55,0);
          let editl = true;
          let stringsl = 1.0;
          let verticalx = 3.0;
         middlebrightnessi /= Math.max(1, parseFloat(`${parseInt(`${stringsl}`) / 1}`));
         editl = 35.77 > verticalx;
         stringsl *= (parseFloat(`${(editl ? 2 : 3) | parseInt(`${verticalx}`)}`));
       let optionsB = String.fromCharCode(118,111,105,99,101,109,97,105,108,95,99,95,53,0);
       let libavdeviceU = String.fromCharCode(122,95,50,54,95,119,97,116,99,104,0);
      while ((5 + watchnowbga.length) <= 5) {
         watchnowbga += `${watchnowbga.length * executoru.length}`;
         break;
      }
      anytime9 = [2];
      

   let adultL = String.fromCharCode(105,98,122,98,121,118,112,101,0) == auto_05;
   do {
      auto_05 += `${tailu.length ^ 1}`;
      if (adultL) {
         break;
      }
   } while ((2 == (3 - parseInt(`${lessz}`)) && 4 == (3 << (Math.min(1, auto_05.length)))) && adultL);
      

   for (let k = 0; k < 1; k++) {
      tailu += `${anytime9.length / (Math.max(9, parseInt(`${yellowanimationliveX}`)))}`;
   }
      

       let listz = String.fromCharCode(116,111,97,115,116,115,95,122,95,53,55,0);
         listz = `${listz.length}`;
       let selectt = String.fromCharCode(104,97,110,100,115,95,116,95,49,57,0);
       let const_xT = String.fromCharCode(101,95,53,52,95,114,119,110,100,0);
      for (let v = 0; v < 1; v++) {
         const_xT += `${selectt.length % (Math.max(1, 10))}`;
      }
      carousell = `${(listz == String.fromCharCode(122,0) ? listz.length : parseInt(`${lessz}`))}`;
      Linking.openURL(url);

      carousell = `${parseInt(`${colorsP}`) % (Math.max(anytime9.length, 10))}`;
      

      tailu += "3";

      

   while (3 <= (anytime9.length / (Math.max(carousell.length, 3))) && 3 <= (carousell.length / (Math.max(3, 10)))) {
      anytime9.push(parseInt(`${colorsP}`) + 1);
      break;
   }
      ww_runtime.playsAdsClickAnalytics({
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
                isVip={wwBodan.fakeIsVip(userState.user)}
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
