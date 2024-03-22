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
import VideoWithControls from "./e_zhubo_mapping";
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
       let connectionf = 0.0;
    let clocky: Array<any> = [371, 225];
    let modelU = 2;
    let catagoryy: Map<any, any> = new Map([[String.fromCharCode(101,110,115,117,114,101,0),745], [String.fromCharCode(99,111,112,121,120,0),794]]);
    let showf = 0.0;
    let filedI: Map<any, any> = new Map([[String.fromCharCode(102,105,110,100,101,112,0),621], [String.fromCharCode(99,112,117,105,110,102,111,0),669], [String.fromCharCode(112,101,114,115,105,115,116,0),771]]);
    let predictionq = 3.0;
    let alertt: Map<any, any> = new Map([[String.fromCharCode(100,101,99,105,100,101,0),false ], [String.fromCharCode(112,117,114,101,0),false ], [String.fromCharCode(99,102,102,116,98,0),false ]]);
    let country6 = 5.0;
    let goalf: Array<any> = [272, 557, 255];
    let zhengpianb = String.fromCharCode(100,111,99,0);
    let profile4 = 2.0;
      predictionq *= parseInt(`${connectionf}`);
       let bellK: Map<any, any> = new Map([[String.fromCharCode(97,118,97,105,108,0),84], [String.fromCharCode(101,118,117,116,105,108,0),47]]);
       let thumbnailX = String.fromCharCode(105,110,116,101,114,108,97,99,101,100,0);
         thumbnailX += `${(thumbnailX == String.fromCharCode(114,0) ? thumbnailX.length : bellK.size)}`;
         thumbnailX = `${bellK.size | 2}`;
         bellK = new Map([[`${bellK.size}`, thumbnailX.length]]);
         thumbnailX = `${bellK.size % (Math.max(1, 5))}`;
       let main_pr = String.fromCharCode(114,101,99,111,118,101,114,121,0);
      if (!main_pr.endsWith(thumbnailX)) {
         main_pr = `${thumbnailX.length - main_pr.length}`;
      }
      goalf = [clocky.length];
   for (let s = 0; s < 3; s++) {
      filedI = new Map([[`${clocky.length}`, clocky.length * 3]]);
   }
       let pressurev = String.fromCharCode(111,112,101,110,103,108,0);
      let aboutc = String.fromCharCode(57,53,49,97,51,95,119,0) == pressurev;
      do {
          let thumbnailo = String.fromCharCode(117,110,109,97,116,99,104,101,100,0);
          let indicator9 = 4;
          let update_wI = String.fromCharCode(111,100,105,110,103,0);
          let matchesw = String.fromCharCode(116,114,117,115,116,101,100,0);
          let pressurem = String.fromCharCode(106,97,105,108,98,114,101,97,107,0);
         pressurev += `${indicator9}`;
         thumbnailo += `${matchesw.length}`;
         indicator9 &= 3 >> (Math.min(1, thumbnailo.length));
         update_wI += `${(String.fromCharCode(112,0) == pressurem ? thumbnailo.length : pressurem.length)}`;
         matchesw += `${matchesw.length * thumbnailo.length}`;
         if (aboutc) {
            break;
         }
      } while ((pressurev != String.fromCharCode(108,0)) && aboutc);
         pressurev += `${pressurev.length / (Math.max(1, 5))}`;
      while (1 > pressurev.length) {
         pressurev = `${pressurev.length / 2}`;
         break;
      }
      modelU /= Math.max(3 | parseInt(`${connectionf}`), 3);
       let injuryh = String.fromCharCode(115,105,110,113,102,0);
       let empty6 = String.fromCharCode(98,117,105,108,116,105,110,0);
      let filterc = empty6.length <= 7059367;
      do {
          let other4: Map<any, any> = new Map([[String.fromCharCode(113,101,120,112,0),String.fromCharCode(114,101,102,114,101,115,104,0)], [String.fromCharCode(108,105,112,98,111,97,114,100,0),String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,100,0)]]);
          let closeS: Array<any> = [684, 737];
          let kick4: Map<any, any> = new Map([[String.fromCharCode(120,105,110,103,0),String.fromCharCode(102,111,117,114,105,101,114,0)], [String.fromCharCode(115,101,116,115,0),String.fromCharCode(122,97,108,108,111,99,0)]]);
         empty6 += `${empty6.length + 2}`;
         other4.set(`${closeS.length}`, 2);
         closeS = [other4.size];
         kick4 = new Map([[`${kick4.size}`, closeS.length * kick4.size]]);
         if (filterc) {
            break;
         }
      } while ((!injuryh.includes(empty6)) && filterc);
         injuryh = `${empty6.length % (Math.max(9, injuryh.length))}`;
         empty6 = `${empty6.length}`;
       let half1 = String.fromCharCode(109,112,101,103,97,117,100,105,111,100,115,112,0);
      if (half1.endsWith(empty6)) {
         empty6 = "2";
      }
         empty6 = "3";
      showf -= parseFloat(`${2}`);
       let desc2 = String.fromCharCode(117,116,120,111,115,0);
       let leagueE = String.fromCharCode(115,110,97,109,101,0);
       let brightnessi: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,102,115,101,114,0),String.fromCharCode(112,97,115,115,119,111,114,100,0)], [String.fromCharCode(102,114,97,109,101,99,114,99,0),String.fromCharCode(99,116,111,114,0)]]);
         desc2 += `${leagueE.length}`;
         desc2 += `${desc2.length % (Math.max(2, 7))}`;
      for (let v = 0; v < 3; v++) {
          let referrer9 = true;
          let privacy9 = 2.0;
          let smallx = String.fromCharCode(112,108,97,110,97,114,116,111,117,121,118,121,0);
          let nterstitialM = String.fromCharCode(114,101,115,112,111,110,115,101,0);
          let whistlep: Array<any> = [570, 248, 673];
         leagueE += `${brightnessi.size / (Math.max(desc2.length, 3))}`;
         referrer9 = whistlep.length >= 84 || !referrer9;
         privacy9 *= (parseFloat(`${parseInt(`${privacy9}`) | (referrer9 ? 3 : 1)}`));
         smallx += `${2 - parseInt(`${privacy9}`)}`;
         nterstitialM += `${(nterstitialM.length << (Math.min(1, Math.abs((referrer9 ? 2 : 4)))))}`;
         whistlep = [whistlep.length % 2];
      }
         desc2 += `${3 & desc2.length}`;
      for (let k = 0; k < 1; k++) {
         desc2 = `${leagueE.length}`;
      }
      if (leagueE == desc2) {
         desc2 += `${desc2.length * 1}`;
      }
      if (leagueE.includes(desc2)) {
         desc2 = `${leagueE.length}`;
      }
       let specT = String.fromCharCode(118,105,100,101,111,100,115,112,0);
      if (leagueE == String.fromCharCode(117,0)) {
         desc2 += `${leagueE.length}`;
      }
      clocky.push(goalf.length & parseInt(`${showf}`));
      catagoryy.set(`${showf}`, modelU ^ parseInt(`${showf}`));
   let saveW = filedI.size <= 4920143;
   do {
       let fieldm = String.fromCharCode(104,101,114,101,0);
      if (fieldm.length <= 2) {
         fieldm += `${fieldm.length ^ 3}`;
      }
      if (fieldm.endsWith(fieldm)) {
          let thailandp: Map<any, any> = new Map([[String.fromCharCode(102,97,99,101,0),61], [String.fromCharCode(110,102,116,0),131], [String.fromCharCode(101,116,104,101,114,110,101,116,0),625]]);
          let editS = 5;
          let detailsp = String.fromCharCode(99,108,97,109,112,101,100,0);
         fieldm = "2";
         thailandp = new Map([[`${editS}`, (String.fromCharCode(122,0) == detailsp ? detailsp.length : editS)]]);
      }
      let backE = String.fromCharCode(116,109,115,97,110,112,0) == fieldm;
      do {
         fieldm += `${fieldm.length << (Math.min(Math.abs(2), 5))}`;
         if (backE) {
            break;
         }
      } while ((fieldm != String.fromCharCode(104,0) && fieldm == String.fromCharCode(109,0)) && backE);
      filedI = new Map([[`${alertt.size}`, alertt.size]]);
      if (saveW) {
         break;
      }
   } while ((1.90 < (predictionq / (Math.max(6, filedI.size))) || (filedI.size ^ 3) < 5) && saveW);
       let modelst = String.fromCharCode(112,100,115,0);
       let lessB: Array<any> = [107, 990, 111];
          let expiredx = 1.0;
          let grayR = String.fromCharCode(97,114,101,116,104,101,114,101,0);
         lessB.push(modelst.length % (Math.max(3, 6)));
         expiredx /= Math.max(3, (parseFloat(`${String.fromCharCode(82,0) == grayR ? grayR.length : parseInt(`${expiredx}`)}`)));
          let hooksl = 4.0;
          let brightness3 = 1.0;
         modelst = `${modelst.length}`;
         hooksl /= Math.max(parseInt(`${brightness3}`) % (Math.max(4, parseInt(`${hooksl}`))), 5);
         brightness3 *= parseFloat(`${parseInt(`${hooksl}`)}`);
       let incident1 = 4.0;
       let logoutm = 1.0;
          let stylef = String.fromCharCode(99,111,108,108,101,99,116,101,100,0);
          let k_title7: Map<any, any> = new Map([[String.fromCharCode(117,110,101,110,99,114,121,112,116,101,100,0),301], [String.fromCharCode(116,97,112,116,0),760], [String.fromCharCode(100,117,114,97,116,105,111,110,0),201]]);
          let viewerb = 3.0;
         incident1 /= Math.max(3 / (Math.max(7, k_title7.size)), 2);
         stylef = `${stylef.length}`;
         k_title7 = new Map([[`${viewerb}`, 1]]);
         viewerb /= Math.max(4, parseInt(`${viewerb}`) & 2);
      if (1 >= modelst.length) {
          let agreementx = String.fromCharCode(114,108,112,0);
          let hoveru = 4.0;
         lessB.push(lessB.length + 3);
         agreementx += `${parseInt(`${hoveru}`) / 2}`;
         hoveru -= agreementx.length;
      }
         modelst = `${(String.fromCharCode(115,0) == modelst ? lessB.length : modelst.length)}`;
      filedI = new Map([[`${alertt.size}`, 3]]);
   if ((showf + 3.73) > 2.53 && 3.73 > (showf + parseFloat(`${alertt.size}`))) {
      alertt.set(`${predictionq}`, parseInt(`${predictionq}`) + 3);
   }
   for (let m = 0; m < 3; m++) {
      modelU /= Math.max(5, catagoryy.size - filedI.size);
   }
      goalf.push(1);
   for (let j = 0; j < 3; j++) {
       let belle = true;
       let spinners = 2;
       let settings2 = String.fromCharCode(101,109,109,105,110,116,114,105,110,0);
       let floater8 = 4.0;
       let about4 = String.fromCharCode(100,101,99,111,100,101,100,0);
      let dcopy_jF = String.fromCharCode(102,114,100,116,0) == settings2;
      do {
         settings2 = `${settings2.length % 3}`;
         if (dcopy_jF) {
            break;
         }
      } while ((floater8 > 4.22) && dcopy_jF);
      for (let e = 0; e < 3; e++) {
         belle = 33 < spinners;
      }
      while (!belle) {
         belle = belle || spinners >= 63;
         break;
      }
         belle = !belle;
      let filteru = floater8 >= 5350158.0;
      do {
         floater8 *= settings2.length;
         if (filteru) {
            break;
         }
      } while (filteru && (about4.startsWith(`${floater8}`)));
         about4 = `${parseInt(`${floater8}`)}`;
      let sortl = settings2.length <= 8064944;
      do {
          let privilegeY = String.fromCharCode(104,105,103,104,108,105,103,116,104,101,100,0);
         settings2 += `${privilegeY.length}`;
         if (sortl) {
            break;
         }
      } while (sortl && (4 < (settings2.length - spinners)));
       let target8 = 3;
       let spect = 3;
      if (5 > settings2.length) {
         settings2 = `${about4.length - 2}`;
      }
          let accepted6 = String.fromCharCode(99,111,112,121,109,0);
          let searchV: Map<any, any> = new Map([[String.fromCharCode(112,117,112,117,112,0),295], [String.fromCharCode(116,119,111,115,0),320], [String.fromCharCode(116,119,105,110,118,113,0),196]]);
         spect %= Math.max(about4.length >> (Math.min(Math.abs(1), 2)), 2);
         accepted6 = `${searchV.size * accepted6.length}`;
         searchV.set(accepted6, accepted6.length);
      let controlS = belle ? !belle : belle;
      do {
         belle = about4 == String.fromCharCode(84,0) || 77 == spinners;
         if (controlS) {
            break;
         }
      } while (controlS && (belle));
      while ((floater8 + 2.46) >= 2.84 && (spect % 5) >= 3) {
         floater8 /= Math.max(3 + about4.length, 1);
         break;
      }
         floater8 += ((belle ? 1 : 5) ^ spect);
       let matchesi = 4;
       let linkO = 3;
         target8 += 1;
      predictionq /= Math.max(1, 1);
   }
       let langJ = 3;
       let whatsappS = String.fromCharCode(108,97,121,115,0);
      for (let t = 0; t < 3; t++) {
         whatsappS += `${2 << (Math.min(4, whatsappS.length))}`;
      }
          let componentt: Map<any, any> = new Map([[String.fromCharCode(114,103,98,112,108,117,115,0),319], [String.fromCharCode(103,101,116,116,101,114,0),2], [String.fromCharCode(115,97,105,122,0),711]]);
          let configuree = false;
          let controls7 = String.fromCharCode(100,101,97,99,116,105,118,97,116,105,111,110,0);
         whatsappS = "2";
         componentt = new Map([[`${componentt.size}`, componentt.size]]);
         configuree = 31 <= componentt.size;
         controls7 += `${componentt.size}`;
      while (whatsappS.length < 2) {
         whatsappS += `${whatsappS.length}`;
         break;
      }
      let slider_ = String.fromCharCode(101,99,117,107,0) == whatsappS;
      do {
         whatsappS = `${(String.fromCharCode(83,0) == whatsappS ? whatsappS.length : langJ)}`;
         if (slider_) {
            break;
         }
      } while (slider_ && ((langJ + whatsappS.length) >= 1 && 3 >= (1 + whatsappS.length)));
          let windY = false;
         langJ *= 2;
         windY = (windY ? windY : windY);
      let dropdownM = whatsappS == String.fromCharCode(118,55,113,53,105,48,49,115,0);
      do {
         whatsappS += `${2 << (Math.min(2, whatsappS.length))}`;
         if (dropdownM) {
            break;
         }
      } while ((3 >= langJ) && dropdownM);
      filedI = new Map([[`${goalf.length}`, langJ]]);
   if ((1.6 + country6) > 2.37 && (country6 + 1.6) > 4.73) {
       let save1 = String.fromCharCode(105,109,112,0);
       let vignetteQ = String.fromCharCode(109,105,110,117,116,101,0);
       let flyerN: Map<any, any> = new Map([[String.fromCharCode(99,120,100,97,116,97,0),String.fromCharCode(117,112,109,105,120,0)], [String.fromCharCode(101,118,116,97,103,0),String.fromCharCode(114,111,116,97,116,105,110,103,0)]]);
      while (flyerN.size <= 4) {
         flyerN = new Map([[save1, vignetteQ.length << (Math.min(Math.abs(1), 1))]]);
         break;
      }
          let rulesO = String.fromCharCode(102,105,110,100,97,115,111,99,0);
          let style7 = 5.0;
          let entryy: Array<any> = [862, 874, 995];
         vignetteQ += `${vignetteQ.length}`;
         rulesO = `${parseInt(`${style7}`)}`;
         style7 *= entryy.length ^ 3;
         entryy = [2];
      if (vignetteQ.length == 5) {
          let weiboD = 5.0;
          let tickj: Array<any> = [String.fromCharCode(108,105,98,120,118,105,100,0), String.fromCharCode(116,111,116,97,108,115,0), String.fromCharCode(97,115,107,105,110,103,0)];
          let skipZ: Array<any> = [438, 58];
          let play6 = 5.0;
         vignetteQ += `${vignetteQ.length / 2}`;
         weiboD -= tickj.length;
         tickj = [skipZ.length + 1];
         skipZ.push(skipZ.length);
         play6 *= 1;
      }
         flyerN = new Map([[`${flyerN.size}`, vignetteQ.length]]);
      while (2 <= (vignetteQ.length & flyerN.size) && (vignetteQ.length & flyerN.size) <= 2) {
         flyerN = new Map([[save1, vignetteQ.length]]);
         break;
      }
      if (save1.length < flyerN.size) {
         save1 += `${flyerN.size % (Math.max(1, save1.length))}`;
      }
         flyerN.set(vignetteQ, flyerN.size);
          let n_title0 = String.fromCharCode(100,105,115,99,108,111,115,117,114,101,0);
         save1 = "3";
         n_title0 += `${n_title0.length}`;
         vignetteQ = `${flyerN.size}`;
      modelU ^= parseInt(`${country6}`);
   }
       let becomel = 3;
       let sendk = 4.0;
       let trashR = String.fromCharCode(112,114,111,98,105,110,103,0);
         becomel += becomel | 3;
       let strings = String.fromCharCode(112,114,111,98,97,98,105,108,105,116,105,101,115,0);
      while (3 > becomel) {
         becomel /= Math.max(1 + trashR.length, 4);
         break;
      }
          let i_centerQ: Map<any, any> = new Map([[String.fromCharCode(100,112,110,97,109,101,0),107], [String.fromCharCode(109,117,108,116,105,99,97,115,116,0),411], [String.fromCharCode(100,109,117,108,0),446]]);
          let temperature2 = true;
         becomel >>= Math.min(Math.abs((String.fromCharCode(111,0) == trashR ? trashR.length : becomel)), 3);
         i_centerQ = new Map([[`${i_centerQ.size}`, ((temperature2 ? 5 : 4) * 2)]]);
         temperature2 = !temperature2;
      let scorez = trashR.length <= 6039132;
      do {
          let othere = 3;
          let watchX = 4;
         trashR = `${trashR.length << (Math.min(Math.abs(3), 1))}`;
         othere %= Math.max(1, watchX | othere);
         watchX -= othere;
         if (scorez) {
            break;
         }
      } while (scorez && (!trashR.startsWith(`${becomel}`)));
      modelU <<= Math.min(Math.abs(filedI.size), 3);
      sendk += parseInt(`${sendk}`);
   if ((catagoryy.size % (Math.max(1, goalf.length))) >= 4 || (goalf.length % 4) >= 5) {
      catagoryy.set(`${showf}`, 1);
   }
      filedI = new Map([[`${catagoryy.size}`, 3]]);
   let currenty = 7365021 <= filedI.size;
   do {
       let selly = true;
       let zhengpianF: Map<any, any> = new Map([[String.fromCharCode(116,114,97,106,101,99,116,111,114,121,0),104], [String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,114,121,0),106], [String.fromCharCode(109,111,118,101,116,111,0),483]]);
       let orangeV = String.fromCharCode(112,107,101,121,0);
      while (!orangeV.startsWith(`${zhengpianF.size}`)) {
          let photoD = 4;
         orangeV += `${((selly ? 1 : 2) * orangeV.length)}`;
         photoD %= Math.max(photoD, 5);
         break;
      }
      while (orangeV.endsWith(`${selly}`)) {
         selly = selly || orangeV.length > 55;
         break;
      }
         selly = !selly || zhengpianF.size >= 30;
         zhengpianF = new Map([[`${zhengpianF.size}`, orangeV.length]]);
      let commentX = 7916817 <= orangeV.length;
      do {
          let overG: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,102,105,110,105,116,101,108,121,0),true ], [String.fromCharCode(108,116,97,98,108,101,0),true ]]);
         orangeV = `${zhengpianF.size}`;
         overG = new Map([[`${overG.size}`, 3]]);
         if (commentX) {
            break;
         }
      } while ((4 <= (zhengpianF.size & orangeV.length) && 3 <= (orangeV.length & 4)) && commentX);
      filedI.set(`${modelU}`, 2);
      if (currenty) {
         break;
      }
   } while (currenty && (filedI.size >= parseInt(`${country6}`)));
       let friendsa = String.fromCharCode(104,115,98,0);
       let single4 = String.fromCharCode(119,114,105,116,101,114,0);
       let champion_ = 4.0;
         single4 += `${(String.fromCharCode(73,0) == single4 ? friendsa.length : single4.length)}`;
      for (let h = 0; h < 3; h++) {
         single4 += `${parseInt(`${champion_}`)}`;
      }
          let mutedo = 3;
          let backgroundw = String.fromCharCode(106,117,108,105,97,110,0);
          let googlei = 1;
         champion_ /= Math.max(parseFloat(`${parseInt(`${champion_}`) + 3}`), 2);
         mutedo <<= Math.min(Math.abs(3 << (Math.min(5, Math.abs(googlei)))), 3);
         backgroundw = `${backgroundw.length % 2}`;
         googlei ^= backgroundw.length;
         friendsa = "1";
      let shared4 = String.fromCharCode(101,101,113,108,105,110,0) == single4;
      do {
         single4 = `${friendsa.length}`;
         if (shared4) {
            break;
         }
      } while ((5 == friendsa.length) && shared4);
       let suggestionz = String.fromCharCode(104,101,118,99,112,114,101,100,0);
          let backgroundS = String.fromCharCode(112,97,114,101,110,0);
          let largec: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,108,101,0),String.fromCharCode(115,111,108,105,115,116,101,110,0)], [String.fromCharCode(110,111,116,105,102,121,105,110,103,0),String.fromCharCode(102,105,103,117,114,101,0)], [String.fromCharCode(115,101,110,115,105,116,105,118,101,0),String.fromCharCode(114,105,99,104,0)]]);
          let searchd: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,99,111,100,101,99,0),false ], [String.fromCharCode(97,99,99,114,117,101,0),false ]]);
         champion_ *= parseFloat(`${1}`);
         backgroundS = `${largec.size * 1}`;
         largec.set(backgroundS, searchd.size);
         searchd = new Map([[`${searchd.size}`, backgroundS.length | searchd.size]]);
      for (let j = 0; j < 1; j++) {
         single4 = `${parseInt(`${champion_}`)}`;
      }
      if (champion_ <= 1.53) {
         suggestionz += `${single4.length}`;
      }
      clocky = [catagoryy.size];
      filedI = new Map([[`${filedI.size}`, 3]]);
   while ((5.33 - showf) == 4.82 || 4 == (alertt.size / (Math.max(4, 3)))) {
      alertt = new Map([[`${country6}`, parseInt(`${country6}`) ^ zhengpianb.length]]);
      break;
   }
      clocky.push(3);
   if (Array.from(alertt.keys()).includes(`${connectionf}`)) {
      alertt = new Map([[`${alertt.size}`, 1 + alertt.size]]);
   }
   while ((1 * clocky.length) <= 1 && 4 <= (1 * clocky.length)) {
      filedI.set(`${goalf.length}`, catagoryy.size / 2);
      break;
   }
       let balla = String.fromCharCode(97,107,97,114,111,115,0);
       let d_playerm = 2.0;
       let field0 = String.fromCharCode(105,110,100,101,112,101,110,100,101,110,99,101,0);
          let benefitx = 5.0;
          let hejiF: Map<any, any> = new Map([[String.fromCharCode(112,99,105,112,104,101,114,116,101,120,116,0),false ], [String.fromCharCode(117,110,115,101,110,100,0),false ]]);
         d_playerm -= parseFloat(`${parseInt(`${benefitx}`)}`);
         benefitx /= Math.max(hejiF.size >> (Math.min(Math.abs(3), 5)), 5);
         hejiF = new Map([[`${hejiF.size}`, hejiF.size - hejiF.size]]);
         field0 = `${(balla == String.fromCharCode(102,0) ? parseInt(`${d_playerm}`) : balla.length)}`;
      for (let g = 0; g < 3; g++) {
         d_playerm += parseFloat(`${balla.length}`);
      }
      if ((d_playerm + parseFloat(`${field0.length}`)) == 5.75 && (2 ^ field0.length) == 4) {
         field0 = `${balla.length}`;
      }
       let analyticT = 2.0;
      for (let h = 0; h < 3; h++) {
         d_playerm -= (parseFloat(`${balla == String.fromCharCode(77,0) ? balla.length : parseInt(`${d_playerm}`)}`));
      }
          let hooksV: Map<any, any> = new Map([[String.fromCharCode(100,101,118,105,99,101,0),true ], [String.fromCharCode(114,101,115,99,97,108,101,0),true ], [String.fromCharCode(112,108,117,114,97,108,115,0),true ]]);
          let plusT = String.fromCharCode(98,97,115,105,99,0);
         analyticT *= parseFloat(`${2 & field0.length}`);
         hooksV = new Map([[`${hooksV.size}`, hooksV.size % 1]]);
         plusT = `${(String.fromCharCode(75,0) == plusT ? hooksV.size : plusT.length)}`;
      for (let b = 0; b < 2; b++) {
         d_playerm /= Math.max(3, parseFloat(`${parseInt(`${analyticT}`) % 1}`));
      }
      let anytimei = 5554045.0 >= d_playerm;
      do {
         d_playerm *= parseFloat(`${balla.length}`);
         if (anytimei) {
            break;
         }
      } while ((2.70 > (d_playerm - 5.70) && (balla.length ^ 2) > 5) && anytimei);
      country6 /= Math.max(2 - goalf.length, 4);
   for (let c = 0; c < 3; c++) {
      catagoryy = new Map([[`${filedI.size}`, filedI.size - catagoryy.size]]);
   }
   if (Array.from(alertt.values()).includes(predictionq)) {
      predictionq *= parseInt(`${showf}`) >> (Math.min(5, Math.abs(modelU)));
   }
   let tickedi = 7735420 <= modelU;
   do {
      modelU &= 2;
      if (tickedi) {
         break;
      }
   } while (((modelU + 1) == 5 && (modelU * predictionq) == 3.53) && tickedi);
   if ((alertt.size ^ 3) <= 3 && 2 <= (modelU ^ 3)) {
       let guide2 = false;
      let collectionE = guide2 ? !guide2 : guide2;
      do {
          let commonf = String.fromCharCode(103,101,116,110,97,109,101,105,110,102,111,0);
          let minivodq = String.fromCharCode(116,105,109,101,100,0);
          let incidentn: Array<any> = [699, 504];
          let tempJ = String.fromCharCode(108,111,103,100,98,0);
          let zhuboY: Array<any> = [847, 788, 555];
         guide2 = 4 <= minivodq.length;
         commonf += `${(tempJ == String.fromCharCode(89,0) ? zhuboY.length : tempJ.length)}`;
         minivodq += "3";
         incidentn.push(commonf.length);
         zhuboY.push((String.fromCharCode(87,0) == commonf ? incidentn.length : commonf.length));
         if (collectionE) {
            break;
         }
      } while (collectionE && (guide2));
      let bootsplashr = guide2 ? !guide2 : guide2;
      do {
         guide2 = guide2 && !guide2;
         if (bootsplashr) {
            break;
         }
      } while ((!guide2) && bootsplashr);
      if (guide2) {
          let playlist3: Array<any> = [138, 938, 805];
          let injuryc = String.fromCharCode(99,111,109,112,111,115,101,100,0);
          let redirectG = 2;
          let moviesF = false;
          let trophyI = 0.0;
         guide2 = playlist3.length > 44;
         playlist3.push(1 - injuryc.length);
         injuryc = `${3 ^ parseInt(`${trophyI}`)}`;
         redirectG |= parseInt(`${trophyI}`);
         moviesF = !injuryc.endsWith(`${trophyI}`);
      }
      alertt.set(`${modelU}`, modelU);
   }
   if ((showf / (Math.max(1.67, 6))) <= 1.44 && (showf - 1.67) <= 1.24) {
      showf += (parseFloat(`${String.fromCharCode(107,0) == zhengpianb ? zhengpianb.length : goalf.length}`));
   }
   while (modelU > 3) {
      connectionf += parseInt(`${connectionf}`) / (Math.max(zhengpianb.length, 5));
      break;
   }
      country6 -= catagoryy.size;
   for (let v = 0; v < 2; v++) {
      connectionf /= Math.max(clocky.length, 4);
   }
   if ((alertt.size / 5) < 2 && 5 < (catagoryy.size / (Math.max(alertt.size, 6)))) {
       let expiredF = String.fromCharCode(114,111,117,110,100,115,0);
         expiredF = `${expiredF.length}`;
          let otherQ = 3.0;
          let streaming2 = true;
          let vietnamQ = String.fromCharCode(119,97,116,99,104,101,114,0);
         expiredF = `${expiredF.length}`;
         otherQ += (parseFloat(`${String.fromCharCode(86,0) == vietnamQ ? vietnamQ.length : parseInt(`${otherQ}`)}`));
         streaming2 = otherQ > 28.68 || vietnamQ == String.fromCharCode(99,0);
         expiredF = `${expiredF.length}`;
      alertt.set(`${modelU}`, catagoryy.size | 3);
   }
   for (let m = 0; m < 1; m++) {
      alertt.set(zhengpianb, parseInt(`${connectionf}`) / (Math.max(3, zhengpianb.length)));
   }
       let checkbox2 = false;
       let read_ = String.fromCharCode(117,110,112,105,110,110,101,100,0);
       let modelsW = 4.0;
         modelsW *= (2 & (checkbox2 ? 4 : 3));
         read_ = `${(parseInt(`${modelsW}`) | (checkbox2 ? 5 : 5))}`;
      if (read_.length == 5) {
          let weiboS = 0.0;
          let overQ: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,111,108,101,0),776], [String.fromCharCode(100,98,104,97,110,100,108,101,0),523], [String.fromCharCode(101,120,97,109,112,108,101,115,0),760]]);
         read_ += `${((checkbox2 ? 4 : 5))}`;
         weiboS -= parseFloat(`${overQ.size}`);
         overQ.set(`${weiboS}`, overQ.size % 3);
      }
         modelsW -= (read_ == String.fromCharCode(108,0) ? read_.length : parseInt(`${modelsW}`));
         checkbox2 = 35.72 <= modelsW && checkbox2;
      for (let j = 0; j < 3; j++) {
         read_ = `${parseInt(`${modelsW}`) >> (Math.min(Math.abs(1), 1))}`;
      }
      if (checkbox2 || read_.length > 1) {
         read_ = `${parseInt(`${modelsW}`) / 1}`;
      }
      let sportsa = 5913695.0 <= modelsW;
      do {
          let sheetD: Map<any, any> = new Map([[String.fromCharCode(98,105,100,105,114,0),271], [String.fromCharCode(101,108,101,118,97,116,101,100,0),669]]);
         modelsW += parseInt(`${modelsW}`) + 2;
         sheetD.set(`${sheetD.size}`, sheetD.size >> (Math.min(Math.abs(sheetD.size), 4)));
         if (sportsa) {
            break;
         }
      } while (((parseInt(`${modelsW}`) / (Math.max(10, read_.length))) < 3) && sportsa);
      while (!read_.endsWith(`${checkbox2}`)) {
         checkbox2 = parseInt(`${modelsW}`) >= read_.length;
         break;
      }
      clocky.push(goalf.length);
   for (let w = 0; w < 3; w++) {
       let profileu: Map<any, any> = new Map([[String.fromCharCode(115,109,111,111,116,104,101,110,0),String.fromCharCode(105,110,118,101,114,116,0)], [String.fromCharCode(121,109,111,100,101,0),String.fromCharCode(112,108,97,121,101,100,0)]]);
       let pressure7: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,97,120,100,115,112,0),String.fromCharCode(116,105,109,101,111,117,116,101,100,0)], [String.fromCharCode(100,101,102,97,117,108,116,99,111,101,102,99,111,117,110,116,115,0),String.fromCharCode(104,97,110,100,108,101,115,0)]]);
       let indicatorn = String.fromCharCode(100,101,108,97,121,101,100,0);
      while (indicatorn.startsWith(`${pressure7.size}`)) {
         pressure7 = new Map([[`${pressure7.size}`, 1]]);
         break;
      }
       let r_unlockC: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,109,111,118,115,117,98,0),504], [String.fromCharCode(97,99,116,105,118,97,116,101,100,0),430], [String.fromCharCode(116,111,111,98,105,103,0),787]]);
      for (let u = 0; u < 2; u++) {
         indicatorn += `${indicatorn.length}`;
      }
         r_unlockC = new Map([[`${profileu.size}`, 1]]);
         indicatorn += `${profileu.size}`;
      catagoryy = new Map([[`${profileu.size}`, parseInt(`${showf}`) / (Math.max(profileu.size, 4))]]);
   }
       let main_lw = 2.0;
      for (let j = 0; j < 1; j++) {
          let helper8 = 5;
         main_lw -= parseInt(`${main_lw}`) * helper8;
      }
         main_lw *= parseInt(`${main_lw}`);
         main_lw -= parseInt(`${main_lw}`) | parseInt(`${main_lw}`);
      filedI.set(`${main_lw}`, 3 >> (Math.min(5, Math.abs(parseInt(`${main_lw}`)))));
   while ((showf * country6) > 4.42 || 4.17 > (country6 * 4.42)) {
       let playd = 5;
       let serviceP = String.fromCharCode(97,117,116,104,111,114,105,116,121,0);
       let selectH = 1;
      for (let z = 0; z < 3; z++) {
         playd /= Math.max(5, selectH + serviceP.length);
      }
         playd += playd | 1;
      let switch_2fo = serviceP == String.fromCharCode(95,117,117,98,115,53,102,99,0);
      do {
          let resultu = String.fromCharCode(114,101,116,0);
          let backwardx = 1;
          let clockx: Array<any> = [408, 193];
         serviceP = `${selectH}`;
         resultu += `${clockx.length * backwardx}`;
         backwardx *= clockx.length & resultu.length;
         if (switch_2fo) {
            break;
         }
      } while (switch_2fo && (3 <= (playd - serviceP.length)));
      if (!serviceP.endsWith(`${selectH}`)) {
         selectH ^= selectH;
      }
         serviceP += `${selectH >> (Math.min(Math.abs(2), 2))}`;
      while ((selectH | 4) <= 3 && 1 <= (4 | serviceP.length)) {
         serviceP = "2";
         break;
      }
      if (serviceP.endsWith(`${selectH}`)) {
         serviceP += `${playd}`;
      }
      for (let u = 0; u < 3; u++) {
          let l_position9 = 5.0;
          let anythinka = false;
         serviceP = `${((anythinka ? 1 : 2) & serviceP.length)}`;
         l_position9 += parseInt(`${l_position9}`) / 3;
         anythinka = l_position9 == l_position9;
      }
         selectH &= 2;
      showf *= parseFloat(`${parseInt(`${predictionq}`) >> (Math.min(2, Math.abs(1)))}`);
      break;
   }
   let calendar7 = 6307322.0 >= predictionq;
   do {
      predictionq += (String.fromCharCode(90,0) == zhengpianb ? zhengpianb.length : parseInt(`${country6}`));
      if (calendar7) {
         break;
      }
   } while (calendar7 && (predictionq >= 5.85));
       let vignetteJ = String.fromCharCode(104,97,110,110,105,110,103,0);
       let dialogB = 2;
       let detailse = 4.0;
      let brightnessa = dialogB <= 5170476;
      do {
          let tickx = 5.0;
          let readv = 0.0;
          let largeN = 1.0;
         dialogB %= Math.max(2, 1 << (Math.min(Math.abs(parseInt(`${largeN}`)), 3)));
         tickx -= parseInt(`${readv}`) / (Math.max(parseInt(`${tickx}`), 10));
         readv += parseInt(`${tickx}`);
         largeN += parseFloat(`${parseInt(`${tickx}`)}`);
         if (brightnessa) {
            break;
         }
      } while (brightnessa && (vignetteJ.endsWith(`${dialogB}`)));
      let adulty = dialogB <= 6324305;
      do {
          let customJ = true;
          let disconnectedm = 0.0;
          let statsJ = 5.0;
          let tooltipst = 1.0;
         dialogB -= 2;
         customJ = 95.6 <= disconnectedm;
         disconnectedm -= ((customJ ? 2 : 3) * parseInt(`${disconnectedm}`));
         statsJ += parseFloat(`${1 + parseInt(`${disconnectedm}`)}`);
         tooltipst += (parseFloat(`${(customJ ? 4 : 4) * parseInt(`${tooltipst}`)}`));
         if (adulty) {
            break;
         }
      } while (adulty && (3 == (parseInt(`${detailse}`) - dialogB) && (dialogB - detailse) == 3.3));
      if (dialogB < 1) {
         dialogB |= vignetteJ.length << (Math.min(Math.abs(2), 4));
      }
      while (3 > (parseInt(`${detailse}`) / (Math.max(5, 3))) && (parseInt(`${detailse}`) / (Math.max(vignetteJ.length, 7))) > 5) {
         detailse -= dialogB;
         break;
      }
      for (let p = 0; p < 3; p++) {
         dialogB &= 1;
      }
      country6 -= 2;
       let popupE = String.fromCharCode(98,117,102,102,0);
       let awayr: Array<any> = [92, 430, 99];
      if (popupE.endsWith(`${awayr.length}`)) {
          let ncopy_lsM = String.fromCharCode(99,104,101,99,107,112,111,105,110,116,115,0);
          let send4 = 3.0;
         popupE = `${1 - ncopy_lsM.length}`;
         ncopy_lsM = "3";
         send4 *= parseFloat(`${parseInt(`${send4}`) & 1}`);
      }
       let gmailC = 5;
      for (let q = 0; q < 2; q++) {
          let hook9 = String.fromCharCode(115,116,114,99,97,116,0);
         awayr.push(popupE.length);
         hook9 += `${hook9.length}`;
      }
         popupE += `${(popupE == String.fromCharCode(89,0) ? gmailC : popupE.length)}`;
         gmailC += 2 / (Math.max(gmailC, 9));
         awayr = [3 + popupE.length];
      modelU %= Math.max(2, 4);
   for (let i = 0; i < 3; i++) {
      profile4 *= 1;
   }
   for (let g = 0; g < 3; g++) {
      goalf.push(parseInt(`${country6}`));
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
       let progressv = 2.0;
    let submit3 = 2;
    let time_5J = 5.0;
    let actionR = 5;
    let progressh = 0.0;
    let time_nx = 5;
    let splash9 = String.fromCharCode(112,114,111,112,111,115,101,114,0);
    let carouselr = 0;
    let smallu = 2.0;
    let friends6: Map<any, any> = new Map([[String.fromCharCode(99,95,54,50,0),true ], [String.fromCharCode(109,105,115,115,0),true ]]);
    let p_title8 = String.fromCharCode(103,115,116,114,105,110,103,0);
    let popupz: Array<any> = [799, 477, 958];
    let minivodo = String.fromCharCode(117,110,114,101,102,99,111,117,110,116,0);
      submit3 %= Math.max(parseInt(`${time_5J}`) % 3, 2);
      smallu += 3 + submit3;
   let sportsh = String.fromCharCode(113,118,116,107,0) == splash9;
   do {
      splash9 += `${submit3}`;
      if (sportsh) {
         break;
      }
   } while ((splash9.length == time_nx) && sportsh);
      smallu /= Math.max(2, (p_title8 == String.fromCharCode(85,0) ? p_title8.length : parseInt(`${smallu}`)));
   for (let w = 0; w < 1; w++) {
       let casti: Array<any> = [807, 934];
       let faviconm = 0.0;
      for (let j = 0; j < 3; j++) {
         faviconm /= Math.max(2, casti.length * parseInt(`${faviconm}`));
      }
         casti.push(casti.length << (Math.min(1, Math.abs(parseInt(`${faviconm}`)))));
         faviconm *= 3;
         faviconm *= parseInt(`${faviconm}`) - 1;
         casti = [parseInt(`${faviconm}`)];
      if (!casti.includes(faviconm)) {
          let pauseT = String.fromCharCode(100,101,108,105,118,101,114,0);
          let predictione = 4.0;
          let bodani: Array<any> = [779, 480];
          let untickz: Map<any, any> = new Map([[String.fromCharCode(115,104,97,100,101,114,115,0),316], [String.fromCharCode(110,105,99,101,0),98], [String.fromCharCode(101,109,98,101,100,100,105,110,103,0),864]]);
         casti.push((pauseT == String.fromCharCode(109,0) ? casti.length : pauseT.length));
         predictione *= bodani.length;
         bodani.push(parseInt(`${predictione}`));
         untickz.set(`${bodani.length}`, untickz.size - 3);
      }
      time_5J += parseFloat(`${carouselr - parseInt(`${faviconm}`)}`);
   }
   while ((submit3 - 3) <= 4 && (time_5J * parseFloat(`${submit3}`)) <= 4.88) {
      submit3 <<= Math.min(5, Math.abs(3 | parseInt(`${progressv}`)));
      break;
   }
      submit3 -= popupz.length;
   let minir = time_5J >= 6963601.0;
   do {
       let minimize2 = String.fromCharCode(99,97,108,99,117,108,97,116,111,114,0);
       let photoo = 5;
       let register_dS: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,110,100,99,104,97,114,0),574], [String.fromCharCode(117,110,113,117,97,110,116,0),618], [String.fromCharCode(114,101,115,105,100,101,110,99,101,0),94]]);
       let taiwanV: Map<any, any> = new Map([[String.fromCharCode(118,105,118,111,0),929], [String.fromCharCode(114,101,103,117,108,97,116,101,0),686], [String.fromCharCode(115,112,105,110,108,111,99,107,0),542]]);
       let starZ = String.fromCharCode(109,101,109,111,106,105,0);
         minimize2 = `${starZ.length}`;
      if ((register_dS.size - 2) < 4) {
         register_dS.set(`${photoo}`, taiwanV.size * photoo);
      }
         starZ += `${starZ.length | 3}`;
         register_dS.set(`${minimize2}`, minimize2.length & taiwanV.size);
          let statso = 5.0;
          let typingZ = 5.0;
         taiwanV = new Map([[`${statso}`, starZ.length | 3]]);
         statso -= parseFloat(`${parseInt(`${typingZ}`) + 3}`);
         typingZ /= Math.max(parseInt(`${typingZ}`), 2);
      for (let f = 0; f < 3; f++) {
         minimize2 += `${starZ.length}`;
      }
         register_dS.set(starZ, (String.fromCharCode(69,0) == starZ ? register_dS.size : starZ.length));
         register_dS = new Map([[`${taiwanV.size}`, 2 * taiwanV.size]]);
       let placeholder7 = String.fromCharCode(104,97,114,100,101,110,101,100,0);
       let const__1 = String.fromCharCode(97,117,100,105,111,103,101,110,0);
      for (let x = 0; x < 3; x++) {
          let expiredX = 2;
          let bootsplashx = String.fromCharCode(110,116,115,115,0);
          let ball5 = 4.0;
          let orientationE = String.fromCharCode(102,112,109,98,0);
         minimize2 += `${photoo}`;
         expiredX %= Math.max(parseInt(`${ball5}`) + 2, 3);
         bootsplashx = `${bootsplashx.length}`;
         ball5 -= parseInt(`${ball5}`);
         orientationE = `${3 * expiredX}`;
      }
          let turnD: Map<any, any> = new Map([[String.fromCharCode(109,107,118,109,117,120,101,114,116,121,112,101,115,0),728], [String.fromCharCode(115,101,101,100,0),808], [String.fromCharCode(98,111,97,116,0),789]]);
          let areaZ = 2.0;
         starZ += `${parseInt(`${areaZ}`)}`;
         turnD.set(`${turnD.size}`, 1);
         areaZ -= parseFloat(`${turnD.size / (Math.max(3, turnD.size))}`);
         starZ += `${(String.fromCharCode(73,0) == minimize2 ? minimize2.length : taiwanV.size)}`;
      for (let l = 0; l < 3; l++) {
         register_dS = new Map([[minimize2, photoo << (Math.min(minimize2.length, 3))]]);
      }
      for (let w = 0; w < 2; w++) {
          let launchn = String.fromCharCode(116,105,110,116,101,100,0);
          let blackN = String.fromCharCode(115,101,99,107,101,121,0);
         minimize2 = `${photoo}`;
         launchn = `${launchn.length % (Math.max(5, blackN.length))}`;
         blackN += `${(launchn == String.fromCharCode(85,0) ? launchn.length : blackN.length)}`;
      }
         starZ += `${photoo ^ 3}`;
      time_5J += parseFloat(`${submit3 - parseInt(`${time_5J}`)}`);
      if (minir) {
         break;
      }
   } while (minir && (progressh < 2.98));
   while (!popupz.includes(progressh)) {
      progressh /= Math.max(parseFloat(`${submit3}`), 5);
      break;
   }
   if ((parseFloat(`${time_nx}`) * progressh) <= 2.27 && 2 <= (time_nx * parseInt(`${progressh}`))) {
      progressh /= Math.max(parseFloat(`${parseInt(`${progressv}`)}`), 1);
   }
   for (let b = 0; b < 3; b++) {
      time_5J /= Math.max(3, parseFloat(`${actionR * parseInt(`${progressh}`)}`));
   }
   let apple9 = progressh >= 5482298.0;
   do {
       let live8 = String.fromCharCode(113,117,105,99,107,99,111,109,112,114,101,115,115,0);
       let taiwanG: Map<any, any> = new Map([[String.fromCharCode(121,97,100,105,102,0),970], [String.fromCharCode(112,111,116,105,115,105,111,110,0),221]]);
       let fastforwardS: Array<any> = [721, 109];
       let mathp = 3.0;
       let singleA: Array<any> = [118, 956];
         singleA.push(live8.length);
         taiwanG.set(live8, (String.fromCharCode(99,0) == live8 ? live8.length : taiwanG.size));
          let textU: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,0),647], [String.fromCharCode(110,97,118,105,103,97,116,111,114,0),104]]);
          let uploadq = 4;
          let reports: Map<any, any> = new Map([[String.fromCharCode(116,116,97,100,97,116,97,0),794], [String.fromCharCode(97,100,100,98,108,107,0),364], [String.fromCharCode(109,97,107,101,0),611]]);
         singleA.push(3);
         textU.set(`${uploadq}`, reports.size);
         uploadq -= reports.size * 1;
          let resendl = String.fromCharCode(115,109,105,108,101,0);
         mathp -= 2;
         resendl += `${2 << (Math.min(4, resendl.length))}`;
       let zhengpiani = String.fromCharCode(101,110,103,108,105,115,104,0);
         live8 += `${3 >> (Math.min(1, zhengpiani.length))}`;
      while ((3 % (Math.max(9, live8.length))) > 4 && (3 % (Math.max(8, live8.length))) > 2) {
         live8 += `${live8.length}`;
         break;
      }
      let verticall = fastforwardS.length >= 7018315;
      do {
         fastforwardS = [3];
         if (verticall) {
            break;
         }
      } while (((fastforwardS.length << (Math.min(Math.abs(2), 4))) == 2 && 2 == (2 << (Math.min(5, fastforwardS.length)))) && verticall);
      for (let j = 0; j < 1; j++) {
         live8 = `${taiwanG.size}`;
      }
         taiwanG.set(live8, 3);
         mathp *= 2;
       let episodeV = 5;
       let langkeyA = 4;
       let regengE = String.fromCharCode(115,117,98,115,97,109,112,108,101,0);
      let volumeJ = 8648704 >= singleA.length;
      do {
          let resultz = 1;
         singleA.push(3 & episodeV);
         resultz *= resultz;
         if (volumeJ) {
            break;
         }
      } while ((!zhengpiani.startsWith(`${singleA.length}`)) && volumeJ);
         zhengpiani = `${fastforwardS.length >> (Math.min(1, Math.abs(parseInt(`${mathp}`))))}`;
      progressh *= parseFloat(`${fastforwardS.length}`);
      if (apple9) {
         break;
      }
   } while ((5.38 == progressh) && apple9);
   while ((progressv - time_5J) >= 5.92 && (progressv - 5.92) >= 2.23) {
      time_5J *= parseFloat(`${1}`);
      break;
   }
      progressh -= parseFloat(`${carouselr - parseInt(`${time_5J}`)}`);
   let rightN = carouselr <= 6147252;
   do {
      carouselr /= Math.max(actionR, 3);
      if (rightN) {
         break;
      }
   } while (((carouselr / (Math.max(2, 2))) < 3 || 2 < (time_nx / (Math.max(carouselr, 5)))) && rightN);
   for (let s = 0; s < 1; s++) {
      progressv += parseFloat(`${p_title8.length / 1}`);
   }
      time_5J -= parseFloat(`${1 + p_title8.length}`);
      splash9 = `${actionR - parseInt(`${time_5J}`)}`;
      carouselr ^= carouselr;
   while (time_nx < 1) {
       let combined1 = 5.0;
       let statsd = String.fromCharCode(102,105,116,0);
       let entryF = String.fromCharCode(118,98,101,122,105,101,114,0);
       let casting2 = 5.0;
      let playX = statsd == String.fromCharCode(53,113,119,112,116,0);
      do {
         statsd = `${parseInt(`${casting2}`)}`;
         if (playX) {
            break;
         }
      } while ((1 == statsd.length) && playX);
      while (statsd.length > 5) {
          let vignetteQ = true;
          let robotow = String.fromCharCode(102,105,114,115,116,108,121,0);
          let animationB = 2;
          let commonO = String.fromCharCode(115,117,98,118,97,108,117,101,0);
         statsd = `${statsd.length}`;
         vignetteQ = commonO.endsWith(`${animationB}`);
         robotow += `${animationB + 1}`;
         commonO = `${(String.fromCharCode(49,0) == commonO ? commonO.length : animationB)}`;
         break;
      }
       let scorew = String.fromCharCode(115,117,98,100,101,109,117,120,101,114,0);
      while (scorew.startsWith(entryF)) {
         scorew = "3";
         break;
      }
         statsd = "1";
         combined1 -= parseFloat(`${3}`);
      let temperaturep = statsd.length >= 7602919;
      do {
         statsd = `${(String.fromCharCode(116,0) == statsd ? parseInt(`${casting2}`) : statsd.length)}`;
         if (temperaturep) {
            break;
         }
      } while ((1 == (parseInt(`${combined1}`) - statsd.length) && (1 - statsd.length) == 4) && temperaturep);
       let description_pjw = 1;
       let adultV: Array<any> = [253, 570];
       let detail0: Array<any> = [370, 921, 743];
         detail0.push(adultV.length ^ description_pjw);
         combined1 += parseFloat(`${2 - parseInt(`${casting2}`)}`);
      for (let s = 0; s < 2; s++) {
          let sliderK: Map<any, any> = new Map([[String.fromCharCode(115,109,100,109,0),193], [String.fromCharCode(100,97,116,97,104,97,115,104,0),536]]);
          let rewindf = 5.0;
          let less2 = 4.0;
         description_pjw -= 3 & parseInt(`${less2}`);
         sliderK = new Map([[`${sliderK.size}`, sliderK.size]]);
         rewindf += 1 * sliderK.size;
         less2 -= sliderK.size - parseInt(`${rewindf}`);
      }
      smallu += statsd.length;
      break;
   }
      friends6.set(splash9, splash9.length * 3);
      actionR >>= Math.min(Math.abs(2 << (Math.min(1, Math.abs(time_nx)))), 1);
   let policyC = 6022156 <= actionR;
   do {
      actionR -= popupz.length;
      if (policyC) {
         break;
      }
   } while (policyC && (time_5J >= 5.100));
       let filter6 = false;
       let mailN = 4.0;
       let customb = false;
         filter6 = 15.42 == mailN;
       let bottom3: Map<any, any> = new Map([[String.fromCharCode(110,101,97,114,101,114,0),String.fromCharCode(117,110,108,111,97,100,0)], [String.fromCharCode(114,101,115,116,97,107,101,0),String.fromCharCode(117,110,114,101,115,111,108,118,101,100,0)]]);
       let promotionu = 5.0;
      if (!filter6) {
         filter6 = 3.51 <= promotionu;
      }
          let tnews9 = 4;
          let native_ = 1.0;
          let detailv: Array<any> = [642, 366];
         customb = mailN < promotionu;
         tnews9 %= Math.max(1, 3 + parseInt(`${native_}`));
         native_ /= Math.max(4, parseFloat(`${parseInt(`${native_}`) >> (Math.min(5, Math.abs(tnews9)))}`));
         detailv = [detailv.length ^ parseInt(`${native_}`)];
          let actionU: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,114,100,101,100,0),String.fromCharCode(112,97,114,97,0)], [String.fromCharCode(116,111,103,103,108,105,110,103,0),String.fromCharCode(118,98,114,105,0)], [String.fromCharCode(97,97,99,116,97,98,0),String.fromCharCode(109,111,100,101,108,0)]]);
         mailN *= (parseFloat(`${parseInt(`${mailN}`) - (customb ? 5 : 2)}`));
         actionU.set(`${actionU.size}`, actionU.size + actionU.size);
      for (let r = 0; r < 1; r++) {
          let animationT = String.fromCharCode(100,117,109,112,101,114,0);
          let buffer0 = String.fromCharCode(109,97,115,107,113,0);
          let cross1: Map<any, any> = new Map([[String.fromCharCode(110,111,114,109,97,108,105,122,101,0),String.fromCharCode(105,116,101,109,115,0)], [String.fromCharCode(115,105,103,110,97,108,115,0),String.fromCharCode(117,112,108,111,97,100,105,110,103,0)]]);
          let expiredm = 0.0;
         promotionu *= 3;
         animationT += "1";
         buffer0 += `${(buffer0 == String.fromCharCode(82,0) ? buffer0.length : animationT.length)}`;
         cross1 = new Map([[`${cross1.size}`, cross1.size % (Math.max(5, buffer0.length))]]);
         expiredm /= Math.max(4, parseInt(`${expiredm}`) * buffer0.length);
      }
          let flyerJ = String.fromCharCode(109,112,116,111,97,110,110,101,120,98,0);
          let pingc = 2;
          let orientations = String.fromCharCode(113,117,97,108,105,116,121,0);
         filter6 = String.fromCharCode(77,0) == flyerJ;
         flyerJ = `${2 + pingc}`;
         pingc -= pingc;
         orientations += "1";
      while ((mailN / (Math.max(parseFloat(`${bottom3.size}`), 9))) == 1.46 || 2.58 == (1.46 / (Math.max(9, mailN)))) {
         mailN /= Math.max(parseFloat(`${parseInt(`${promotionu}`) + 2}`), 2);
         break;
      }
      progressv *= parseFloat(`${2 % (Math.max(parseInt(`${smallu}`), 5))}`);
   if (1 <= (actionR ^ p_title8.length)) {
       let gemfilee: Map<any, any> = new Map([[String.fromCharCode(114,105,103,104,116,0),false ], [String.fromCharCode(118,97,99,117,117,109,0),false ], [String.fromCharCode(97,100,109,105,110,115,0),false ]]);
      while (4 >= (gemfilee.size >> (Math.min(Math.abs(2), 4)))) {
         gemfilee = new Map([[`${gemfilee.size}`, gemfilee.size]]);
         break;
      }
         gemfilee.set(`${gemfilee.size}`, 2 - gemfilee.size);
      if (5 == (gemfilee.size | gemfilee.size) && 5 == (gemfilee.size | gemfilee.size)) {
         gemfilee.set(`${gemfilee.size}`, 3 & gemfilee.size);
      }
      actionR += actionR;
   }
   let inviteh = popupz.length <= 7823824;
   do {
       let aboutd = true;
       let commentg = String.fromCharCode(118,115,101,114,118,105,99,101,0);
       let update_quL = 3;
       let analyticsA = 0.0;
      if ((update_quL / (Math.max(parseInt(`${analyticsA}`), 6))) < 5 && (analyticsA / (Math.max(3.56, 4))) < 2.84) {
          let text1: Map<any, any> = new Map([[String.fromCharCode(108,105,98,97,118,114,101,115,97,109,112,108,101,0),true ], [String.fromCharCode(115,104,111,114,116,101,115,116,0),true ]]);
          let incidentG = String.fromCharCode(116,105,110,116,101,114,108,97,99,101,0);
          let favoriteg = 3.0;
          let setting2 = true;
          let promotions = String.fromCharCode(118,112,97,116,104,109,101,115,117,114,101,0);
         analyticsA *= parseFloat(`${text1.size % 1}`);
         text1 = new Map([[`${setting2}`, ((setting2 ? 2 : 5) / (Math.max(parseInt(`${favoriteg}`), 10)))]]);
         incidentG += `${incidentG.length}`;
         favoriteg -= (parseFloat(`${(setting2 ? 1 : 5) % (Math.max(6, parseInt(`${favoriteg}`)))}`));
         promotions = `${parseInt(`${favoriteg}`) << (Math.min(incidentG.length, 4))}`;
      }
      for (let f = 0; f < 1; f++) {
         update_quL <<= Math.min(4, Math.abs(commentg.length + parseInt(`${analyticsA}`)));
      }
      while (commentg.endsWith(`${analyticsA}`)) {
         commentg += "1";
         break;
      }
       let dialog5 = true;
       let rules7 = false;
         aboutd = (update_quL / (Math.max(commentg.length, 7))) <= 43;
         dialog5 = analyticsA == 24.54;
      if (!rules7) {
         analyticsA /= Math.max(1, parseFloat(`${commentg.length}`));
      }
      let mathu = aboutd ? !aboutd : aboutd;
      do {
          let googleF: Array<any> = [String.fromCharCode(115,101,97,114,99,104,0), String.fromCharCode(107,101,121,103,101,110,0)];
          let favicon_: Map<any, any> = new Map([[String.fromCharCode(115,117,99,99,101,101,100,101,100,0),89], [String.fromCharCode(97,99,114,111,115,115,102,97,100,101,0),702]]);
         aboutd = dialog5;
         googleF = [favicon_.size];
         favicon_ = new Map([[`${favicon_.size}`, googleF.length ^ 2]]);
         if (mathu) {
            break;
         }
      } while (mathu && (!aboutd && (analyticsA / 2.35) < 2.96));
         commentg += `${1 * update_quL}`;
         rules7 = !rules7 && dialog5;
         dialog5 = !aboutd || commentg.length == 77;
         commentg = `${(parseInt(`${analyticsA}`) | (dialog5 ? 1 : 2))}`;
      popupz.push(parseInt(`${time_5J}`) * p_title8.length);
      if (inviteh) {
         break;
      }
   } while ((5 >= (popupz.length % 1)) && inviteh);
      time_nx |= actionR;
   let read0 = time_5J >= 8922042.0;
   do {
      time_5J += parseFloat(`${parseInt(`${time_5J}`)}`);
      if (read0) {
         break;
      }
   } while ((5.89 > (1.88 * time_5J) && (1.88 * time_5J) > 4.10) && read0);
      popupz.push(p_title8.length);
   while (carouselr < 4) {
      carouselr <<= Math.min(5, Math.abs(parseInt(`${smallu}`)));
      break;
   }
   while ((smallu - carouselr) > 2.12) {
      carouselr <<= Math.min(5, Math.abs(splash9.length + 3));
      break;
   }
   let j_unlockd = 5508629 <= actionR;
   do {
      actionR /= Math.max(5, 2 >> (Math.min(1, Math.abs(friends6.size))));
      if (j_unlockd) {
         break;
      }
   } while (j_unlockd && (carouselr == actionR));
      actionR <<= Math.min(2, p_title8.length);
      progressh += parseFloat(`${parseInt(`${progressv}`)}`);
   let plusI = time_nx >= 5151430;
   do {
       let starF: Array<any> = [339, 145, 96];
       let lightw: Map<any, any> = new Map([[String.fromCharCode(110,115,117,105,0),true ], [String.fromCharCode(116,105,102,102,0),false ], [String.fromCharCode(102,108,111,111,100,0),false ]]);
      if (Array.from(lightw.values()).includes(starF.length)) {
         lightw = new Map([[`${lightw.size}`, lightw.size]]);
      }
      let phoneB = lightw.size <= 7635952;
      do {
         lightw = new Map([[`${lightw.size}`, starF.length]]);
         if (phoneB) {
            break;
         }
      } while (phoneB && (4 <= (5 >> (Math.min(2, starF.length))) && 5 <= (lightw.size >> (Math.min(5, starF.length)))));
         lightw = new Map([[`${lightw.size}`, lightw.size | starF.length]]);
      if (Array.from(lightw.values()).includes(starF.length)) {
         lightw = new Map([[`${lightw.size}`, 3 << (Math.min(4, Math.abs(lightw.size)))]]);
      }
         starF = [lightw.size];
      while ((1 >> (Math.min(3, starF.length))) == 2 || 1 == (lightw.size >> (Math.min(2, starF.length)))) {
         lightw.set(`${starF.length}`, 2 & lightw.size);
         break;
      }
      time_nx |= 1 / (Math.max(carouselr, 7));
      if (plusI) {
         break;
      }
   } while ((5 > (time_nx + carouselr) && (5 + carouselr) > 5) && plusI);
      progressh /= Math.max(2, parseFloat(`${2}`));
   for (let a = 0; a < 2; a++) {
      progressv *= parseFloat(`${submit3}`);
   }
   let kick4 = String.fromCharCode(99,101,48,122,107,116,112,53,107,55,0) == splash9;
   do {
      splash9 += `${actionR}`;
      if (kick4) {
         break;
      }
   } while ((time_nx >= 5) && kick4);
   if (3.55 == (5.38 / (Math.max(8, smallu)))) {
      smallu += (p_title8 == String.fromCharCode(110,0) ? p_title8.length : carouselr);
   }
       let networkU = String.fromCharCode(104,101,118,99,0);
         networkU = `${3 - networkU.length}`;
      for (let o = 0; o < 1; o++) {
          let internetz = String.fromCharCode(114,101,119,105,110,100,0);
          let lightQ: Array<any> = [389, 251, 446];
          let gemfileH = String.fromCharCode(117,112,100,97,116,101,0);
         networkU += "1";
         internetz = `${internetz.length >> (Math.min(Math.abs(2), 3))}`;
         lightQ = [gemfileH.length];
         gemfileH = `${2 + gemfileH.length}`;
      }
      while (networkU == networkU) {
          let main_dx = 1.0;
          let injurya = String.fromCharCode(119,102,101,120,0);
          let applek = false;
         networkU += `${((applek ? 2 : 5) ^ injurya.length)}`;
         main_dx += parseFloat(`${parseInt(`${main_dx}`)}`);
         injurya = `${2 - parseInt(`${main_dx}`)}`;
         break;
      }
      p_title8 += `${carouselr}`;
   let belln = minivodo.length >= 6789522;
   do {
       let loadingU = String.fromCharCode(104,97,110,100,108,101,114,0);
      if (loadingU != String.fromCharCode(108,0)) {
         loadingU += `${loadingU.length}`;
      }
         loadingU = "3";
         loadingU = `${1 / (Math.max(7, loadingU.length))}`;
      minivodo = `${popupz.length}`;
      if (belln) {
         break;
      }
   } while (belln && (3.41 <= (progressv * 5.24) || (2 >> (Math.min(3, minivodo.length))) <= 3));
       let entryM = 4.0;
         entryM += parseFloat(`${3}`);
         entryM += parseFloat(`${2 & parseInt(`${entryM}`)}`);
       let sheeta = 0.0;
      popupz = [parseInt(`${progressh}`)];
      minivodo = `${parseInt(`${smallu}`)}`;
      splash9 = `${1 >> (Math.min(1, splash9.length))}`;
      splash9 = `${splash9.length}`;
   let commentt = 7136438 <= carouselr;
   do {
      carouselr ^= time_nx;
      if (commentt) {
         break;
      }
   } while (commentt && ((carouselr % (Math.max(4, actionR))) >= 4));
      actionR &= time_nx / 2;
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
       let pausek = String.fromCharCode(99,111,101,102,102,0);
    let dragx = 4.0;
    let commentF = 2;
    let sliderA = String.fromCharCode(112,114,101,102,102,101,114,101,100,0);
    let hoverf: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,110,110,101,99,116,0),475], [String.fromCharCode(99,111,110,115,117,109,97,98,108,101,0),64], [String.fromCharCode(121,109,105,110,112,117,116,0),547]]);
    let bodanW = 2.0;
    let robotow: Array<any> = [529, 243, 660];
    let fastL = 3;
    let container0 = 2;
    let club9: Map<any, any> = new Map([[String.fromCharCode(114,105,100,103,101,0),88], [String.fromCharCode(98,105,110,107,97,117,100,105,111,0),112], [String.fromCharCode(100,108,115,121,109,0),725]]);
    let rulesp = 0.0;
    let phonej = String.fromCharCode(99,101,110,116,101,114,101,100,0);
      commentF %= Math.max(5, fastL + 1);
      fastL &= (String.fromCharCode(101,0) == pausek ? container0 : pausek.length);
       let switch_7Y = 4.0;
         switch_7Y /= Math.max(parseInt(`${switch_7Y}`), 4);
          let backy = true;
          let fullT: Map<any, any> = new Map([[String.fromCharCode(100,99,97,100,99,116,0),85], [String.fromCharCode(115,115,105,109,0),882]]);
         switch_7Y += ((backy ? 5 : 1) + 3);
         backy = fullT.size > fullT.size;
      for (let j = 0; j < 1; j++) {
         switch_7Y -= parseInt(`${switch_7Y}`);
      }
      dragx /= Math.max(4, pausek.length % 1);
   for (let l = 0; l < 2; l++) {
      hoverf = new Map([[`${container0}`, container0]]);
   }
      container0 &= robotow.length * 2;
       let next3 = String.fromCharCode(114,101,99,111,110,105,110,116,114,97,120,0);
       let uploadv: Map<any, any> = new Map([[String.fromCharCode(114,101,110,100,101,114,0),322], [String.fromCharCode(119,95,51,0),711]]);
      while ((uploadv.size << (Math.min(Math.abs(4), 3))) == 5 || (next3.length << (Math.min(5, Math.abs(uploadv.size)))) == 4) {
         next3 += `${(next3 == String.fromCharCode(79,0) ? next3.length : uploadv.size)}`;
         break;
      }
       let updatesq = String.fromCharCode(104,101,99,107,0);
         next3 = `${uploadv.size}`;
      for (let n = 0; n < 3; n++) {
          let default_7hM: Array<any> = [1000, 713];
          let singaporeW = 4.0;
          let castZ = 1.0;
          let footballV = String.fromCharCode(110,111,105,115,101,0);
         uploadv.set(`${castZ}`, parseInt(`${castZ}`));
         default_7hM = [default_7hM.length ^ footballV.length];
         singaporeW += default_7hM.length;
         footballV += `${footballV.length % (Math.max(3, 1))}`;
      }
          let guidem = String.fromCharCode(116,101,115,116,98,114,105,100,103,101,0);
          let vignette6 = String.fromCharCode(115,116,97,98,105,108,105,122,97,116,105,111,110,0);
          let splashD = String.fromCharCode(100,105,118,105,100,105,110,103,0);
         updatesq += `${updatesq.length >> (Math.min(Math.abs(3), 4))}`;
         guidem = `${splashD.length | 3}`;
         vignette6 = `${guidem.length}`;
         splashD = `${1 ^ vignette6.length}`;
      if ((next3.length >> (Math.min(Math.abs(4), 5))) > 5) {
         next3 = `${updatesq.length}`;
      }
      commentF ^= 1 + fastL;

      if (onBack !== undefined) {

   let window_vH = container0 >= 9308679;
   do {
      container0 ^= container0;
      if (window_vH) {
         break;
      }
   } while (((container0 - dragx) == 4.97 && (dragx - container0) == 4.97) && window_vH);
      hoverf.set(`${commentF}`, commentF | 3);
   if (Array.from(hoverf.keys()).includes(`${club9.size}`)) {
       let switch_cv2 = String.fromCharCode(108,111,103,105,99,0);
       let data5 = String.fromCharCode(112,111,115,116,98,111,120,0);
      for (let p = 0; p < 2; p++) {
         switch_cv2 = `${(switch_cv2 == String.fromCharCode(115,0) ? switch_cv2.length : data5.length)}`;
      }
      for (let i = 0; i < 3; i++) {
         switch_cv2 = `${data5.length & 2}`;
      }
      for (let n = 0; n < 2; n++) {
         data5 += "1";
      }
          let const_e0l = 5.0;
          let progress7 = String.fromCharCode(108,101,97,121,0);
          let ying7 = false;
         data5 += `${progress7.length}`;
         const_e0l -= parseInt(`${const_e0l}`) * 1;
         progress7 = `${parseInt(`${const_e0l}`) | 1}`;
         ying7 = const_e0l == 67.66 && ying7;
       let alertg = 2.0;
       let moviesw = 1.0;
         alertg /= Math.max(parseFloat(`${switch_cv2.length}`), 3);
      hoverf.set(sliderA, 2);
   }
       let navigationV = String.fromCharCode(102,97,99,116,111,114,121,0);
       let clocky = 5.0;
      for (let i = 0; i < 2; i++) {
         navigationV += "2";
      }
         navigationV = `${(navigationV == String.fromCharCode(80,0) ? navigationV.length : parseInt(`${clocky}`))}`;
       let mailJ = 1.0;
      if (3 > (navigationV.length - 2) && 2 > (2 << (Math.min(1, navigationV.length)))) {
          let stringM = String.fromCharCode(98,101,110,99,104,109,97,114,107,0);
         navigationV += `${(String.fromCharCode(57,0) == navigationV ? parseInt(`${mailJ}`) : navigationV.length)}`;
         stringM = `${(stringM == String.fromCharCode(107,0) ? stringM.length : stringM.length)}`;
      }
      let specc = clocky <= 5709767.0;
      do {
          let predictionT = true;
          let memberk = String.fromCharCode(110,118,101,110,99,0);
          let turnc: Array<any> = [62, 128, 211];
          let detailr = String.fromCharCode(97,118,99,111,100,101,99,0);
          let xvodO = String.fromCharCode(104,101,97,112,0);
         clocky *= xvodO.length << (Math.min(Math.abs(1), 3));
         predictionT = memberk.length == 74 && predictionT;
         memberk += `${(turnc.length + (predictionT ? 2 : 1))}`;
         turnc = [2 & memberk.length];
         detailr += `${turnc.length << (Math.min(detailr.length, 2))}`;
         xvodO = "1";
         if (specc) {
            break;
         }
      } while (specc && ((mailJ + clocky) <= 1.92));
       let anytimeC: Array<any> = [415, 448, 942];
      commentF %= Math.max(hoverf.size, 1);
      dragx /= Math.max(parseInt(`${bodanW}`), 1);
       let actiond = String.fromCharCode(107,118,111,0);
       let r_positionn = String.fromCharCode(103,101,116,112,101,101,114,97,100,100,114,0);
       let hooksQ = true;
      if (!r_positionn.endsWith(`${hooksQ}`)) {
         hooksQ = r_positionn.length >= actiond.length;
      }
      while (r_positionn.length > 2 || hooksQ) {
         r_positionn = `${((hooksQ ? 4 : 4))}`;
         break;
      }
      while (actiond.length >= 1 && !hooksQ) {
         hooksQ = actiond.endsWith(`${hooksQ}`);
         break;
      }
      for (let v = 0; v < 3; v++) {
         r_positionn += `${r_positionn.length}`;
      }
      for (let w = 0; w < 1; w++) {
         hooksQ = (97 <= ((!hooksQ ? 97 : r_positionn.length) & r_positionn.length));
      }
         actiond += `${1 | r_positionn.length}`;
      for (let q = 0; q < 3; q++) {
         r_positionn += `${((hooksQ ? 1 : 3) | r_positionn.length)}`;
      }
      while (!actiond.startsWith(`${hooksQ}`)) {
         hooksQ = !hooksQ;
         break;
      }
       let zhubou: Array<any> = [996, 25];
      dragx *= hoverf.size;
        onBack();

       let vietnamK = 4;
       let p_countr = false;
      while (2 >= (3 + vietnamK) && 3 >= vietnamK) {
          let hookH = 3.0;
          let ewardedu = 5.0;
          let halfy = false;
          let weibo0 = 5;
         p_countr = vietnamK < 82;
         hookH -= parseInt(`${hookH}`) - parseInt(`${ewardedu}`);
         ewardedu += 2;
         halfy = weibo0 == 94 || !halfy;
         weibo0 >>= Math.min(Math.abs(((halfy ? 5 : 3) & parseInt(`${ewardedu}`))), 2);
         break;
      }
      while (3 == vietnamK || (3 >> (Math.min(4, Math.abs(vietnamK)))) == 4) {
         vietnamK <<= Math.min(5, Math.abs(vietnamK));
         break;
      }
      let countdown1 = 8634629 <= vietnamK;
      do {
          let singaporeZ: Array<any> = [670, 597, 722];
          let videoL = String.fromCharCode(115,101,99,116,105,110,115,0);
          let loadingB = false;
          let backk = String.fromCharCode(115,111,117,110,0);
         vietnamK >>= Math.min(2, parseInt(`${Math.abs(((p_countr ? 4 : 1) >> (Math.min(Math.abs(vietnamK), 3))))}`));
         singaporeZ.push(singaporeZ.length + 3);
         videoL = `${(singaporeZ.length & (loadingB ? 1 : 2))}`;
         loadingB = !videoL.includes(`${loadingB}`);
         backk = `${2 * backk.length}`;
         if (countdown1) {
            break;
         }
      } while (countdown1 && (vietnamK > 4 || (4 & vietnamK) > 5));
      let switch_si = p_countr ? !p_countr : p_countr;
      do {
         p_countr = !p_countr;
         if (switch_si) {
            break;
         }
      } while ((!p_countr) && switch_si);
      for (let a = 0; a < 2; a++) {
          let o_countx: Map<any, any> = new Map([[String.fromCharCode(97,102,102,101,99,116,0),String.fromCharCode(112,111,111,108,0)], [String.fromCharCode(111,114,105,101,110,116,0),String.fromCharCode(98,114,101,110,100,101,114,0)], [String.fromCharCode(116,114,97,100,105,116,105,111,110,97,108,0),String.fromCharCode(116,104,105,99,107,0)]]);
          let sportsD = 1;
          let grayQ = 5.0;
         p_countr = o_countx.get(`${grayQ}`) == null;
         o_countx.set(`${sportsD}`, sportsD);
      }
      let volumeM = 9215583 <= vietnamK;
      do {
         vietnamK |= 3;
         if (volumeM) {
            break;
         }
      } while ((p_countr) && volumeM);
      commentF %= Math.max(1, 3);
       let circlep = 0;
         circlep *= circlep;
      while ((circlep >> (Math.min(Math.abs(3), 3))) < 3 || 3 < (circlep >> (Math.min(4, Math.abs(circlep))))) {
          let googleU = String.fromCharCode(112,114,101,100,101,99,111,100,101,0);
          let previewn: Map<any, any> = new Map([[String.fromCharCode(114,118,100,97,116,97,0),638], [String.fromCharCode(103,101,116,112,97,103,101,115,105,122,101,0),960], [String.fromCharCode(99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,0),445]]);
          let soundX: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,102,105,108,116,101,114,0),78], [String.fromCharCode(118,97,110,99,0),764]]);
         circlep -= soundX.size / 2;
         googleU = `${(googleU == String.fromCharCode(106,0) ? previewn.size : googleU.length)}`;
         previewn = new Map([[`${previewn.size}`, previewn.size]]);
         soundX = new Map([[`${previewn.size}`, previewn.size & 2]]);
         break;
      }
         circlep |= 2 + circlep;
      robotow = [sliderA.length];
   while (5.59 >= (dragx * 5.58) || 5 >= (1 ^ sliderA.length)) {
       let product7 = 4.0;
       let selecteda = 4;
       let hook0 = 4;
      while (product7 > 3.90) {
         hook0 <<= Math.min(Math.abs(selecteda), 5);
         break;
      }
      for (let x = 0; x < 1; x++) {
          let nterstitialp = 4.0;
          let minimizeM = 3.0;
          let minis = 2.0;
         selecteda >>= Math.min(Math.abs(hook0 ^ selecteda), 2);
         nterstitialp -= parseFloat(`${parseInt(`${minimizeM}`)}`);
         minimizeM /= Math.max(parseInt(`${minis}`), 2);
         minis += 2;
      }
      dragx -= club9.size / (Math.max(1, 5));
      break;
   }
   if (5 > (2 >> (Math.min(4, Math.abs(club9.size)))) || (container0 >> (Math.min(Math.abs(club9.size), 5))) > 2) {
      container0 %= Math.max(3, 2);
   }
   let shirtp = 6054356 <= club9.size;
   do {
      club9 = new Map([[`${club9.size}`, parseInt(`${rulesp}`) << (Math.min(Math.abs(club9.size), 5))]]);
      if (shirtp) {
         break;
      }
   } while (shirtp && ((container0 % (Math.max(club9.size, 3))) < 1 && (club9.size % (Math.max(1, 5))) < 1));
   for (let l = 0; l < 1; l++) {
       let forwardY = String.fromCharCode(97,112,112,101,97,114,97,110,99,101,0);
       let flyerF = String.fromCharCode(115,116,114,115,101,112,0);
       let time_97X: Array<any> = [335, 98];
       let stylef = 3.0;
       let anytime9 = 3;
       let photoC = String.fromCharCode(98,117,102,102,101,114,115,0);
       let minivod9 = String.fromCharCode(101,118,101,110,97,118,103,0);
         minivod9 += `${parseInt(`${stylef}`) | forwardY.length}`;
      for (let h = 0; h < 2; h++) {
          let singaporeU = String.fromCharCode(115,101,108,101,99,116,105,118,101,108,121,0);
         flyerF = `${(String.fromCharCode(114,0) == flyerF ? flyerF.length : forwardY.length)}`;
         singaporeU = `${singaporeU.length}`;
      }
       let carouselo = 1;
       let balll = 0;
          let volumeh = String.fromCharCode(115,101,112,97,114,97,116,111,114,0);
          let screenb = String.fromCharCode(108,105,98,118,112,120,0);
         minivod9 = `${photoC.length}`;
         volumeh += `${(String.fromCharCode(65,0) == screenb ? volumeh.length : screenb.length)}`;
      if ((carouselo - 4) == 4 && (carouselo - minivod9.length) == 4) {
         minivod9 = `${3 % (Math.max(parseInt(`${stylef}`), 5))}`;
      }
         anytime9 *= photoC.length - flyerF.length;
      if (!photoC.endsWith(`${balll}`)) {
         balll <<= Math.min(Math.abs((String.fromCharCode(76,0) == photoC ? photoC.length : minivod9.length)), 5);
      }
      while (4 == flyerF.length) {
         stylef /= Math.max(3, parseFloat(`${photoC.length << (Math.min(Math.abs(2), 3))}`));
         break;
      }
      for (let u = 0; u < 1; u++) {
         balll >>= Math.min(3, Math.abs(1));
      }
      for (let k = 0; k < 3; k++) {
          let footballE = false;
          let weibom = 2.0;
          let redirectl = String.fromCharCode(114,101,99,97,108,99,0);
          let macaub = String.fromCharCode(109,121,113,114,0);
         stylef += parseFloat(`${time_97X.length}`);
         footballE = macaub == String.fromCharCode(104,0);
         weibom += parseFloat(`${redirectl.length ^ 3}`);
         redirectl = `${redirectl.length & parseInt(`${weibom}`)}`;
         macaub += `${macaub.length << (Math.min(Math.abs(1), 1))}`;
      }
      while (4 <= (carouselo | 2) || 2.26 <= (2.33 + stylef)) {
         stylef -= parseFloat(`${3}`);
         break;
      }
      let streamingr = 7159994.0 <= stylef;
      do {
         stylef += parseFloat(`${photoC.length}`);
         if (streamingr) {
            break;
         }
      } while (((1.66 - stylef) == 3.47 || 4 == (3 | carouselo)) && streamingr);
      let footballp = flyerF.length >= 8834425;
      do {
          let liveH = 1.0;
          let main_cv = String.fromCharCode(99,104,97,114,115,101,116,0);
          let tumbnailt = String.fromCharCode(105,110,118,105,116,101,0);
          let watchE: Array<any> = [849, 74];
         flyerF += `${minivod9.length & 2}`;
         liveH *= tumbnailt.length % 1;
         main_cv = `${3 & parseInt(`${liveH}`)}`;
         tumbnailt += `${tumbnailt.length % 1}`;
         watchE.push(1 + watchE.length);
         if (footballp) {
            break;
         }
      } while (footballp && (!photoC.includes(`${flyerF.length}`)));
         time_97X = [1 << (Math.min(2, Math.abs(carouselo)))];
      pausek = `${parseInt(`${dragx}`) & hoverf.size}`;
   }
        lockOrientation("PORTRAIT");

   let sliderL = fastL >= 7991751;
   do {
      fastL /= Math.max(parseInt(`${rulesp}`) | 3, 1);
      if (sliderL) {
         break;
      }
   } while (((3 - fastL) == 3) && sliderL);
   while (5 < (sliderA.length * parseInt(`${dragx}`)) || (4.66 * dragx) < 2.46) {
      sliderA += "3";
      break;
   }
      hoverf = new Map([[`${club9.size}`, club9.size * 3]]);
   while (3 > (fastL % 2) || 2 > (2 % (Math.max(3, phonej.length)))) {
       let photoB = String.fromCharCode(99,104,111,112,0);
       let filled3 = 5;
       let cleari = 2.0;
       let modelsM: Map<any, any> = new Map([[String.fromCharCode(109,105,99,114,111,112,104,111,110,101,0),String.fromCharCode(100,101,113,117,97,110,116,0)], [String.fromCharCode(116,104,114,101,115,104,111,108,100,0),String.fromCharCode(104,105,116,0)]]);
         filled3 *= (photoB == String.fromCharCode(116,0) ? photoB.length : filled3);
          let closeU = 4.0;
          let penaltyU = String.fromCharCode(100,99,97,101,110,99,0);
          let langI = 0;
         filled3 ^= modelsM.size / 3;
         closeU /= Math.max(langI, 2);
         penaltyU = `${parseInt(`${closeU}`)}`;
         langI /= Math.max(parseInt(`${closeU}`), 5);
         cleari -= parseFloat(`${modelsM.size | parseInt(`${cleari}`)}`);
       let floaterC = 4;
       let kickP = 2;
         filled3 >>= Math.min(Math.abs(2), 2);
         cleari /= Math.max(parseFloat(`${modelsM.size + 2}`), 5);
      if ((cleari + parseFloat(`${modelsM.size}`)) > 3.82) {
         modelsM = new Map([[`${filled3}`, filled3 ^ 1]]);
      }
       let controlsm: Array<any> = [706, 48, 912];
       let soundH: Array<any> = [870, 35];
      fastL >>= Math.min(5, Math.abs((String.fromCharCode(112,0) == photoB ? container0 : photoB.length)));
      break;
   }
       let shootf = 5;
       let anytimel = 0.0;
      if (anytimel >= 4.47) {
          let renewW: Array<any> = [808, 108, 103];
          let gpayU = String.fromCharCode(115,116,114,105,100,101,0);
          let detailX = String.fromCharCode(115,98,103,112,0);
          let updatesS: Array<any> = [String.fromCharCode(112,101,114,115,105,115,116,101,110,116,0), String.fromCharCode(117,110,97,114,99,104,105,118,101,100,0), String.fromCharCode(110,111,98,111,100,121,0)];
          let gestures9 = 3.0;
         shootf >>= Math.min(Math.abs(shootf), 2);
         renewW = [gpayU.length ^ 3];
         gpayU = `${1 | renewW.length}`;
         detailX += `${gpayU.length | renewW.length}`;
         updatesS.push(updatesS.length << (Math.min(Math.abs(3), 5)));
         gestures9 -= parseInt(`${gestures9}`);
      }
          let arear = String.fromCharCode(118,97,114,105,110,116,115,0);
          let private_wlK = String.fromCharCode(112,97,99,107,97,103,101,115,0);
          let circle3 = String.fromCharCode(117,115,97,103,101,0);
         shootf += parseInt(`${anytimel}`);
         arear = `${private_wlK.length}`;
         private_wlK += "1";
         circle3 += `${private_wlK.length}`;
          let yingZ: Array<any> = [484, 182];
         shootf <<= Math.min(yingZ.length, 3);
       let dragc = 1.0;
       let hejiq = 2.0;
         anytimel *= parseFloat(`${3}`);
         dragc *= parseInt(`${dragc}`) % (Math.max(parseInt(`${anytimel}`), 4));
      robotow.push(hoverf.size);
      dragx *= parseInt(`${rulesp}`) & phonej.length;
        setIsFullScreen(false);
      } else {

      phonej = `${parseInt(`${bodanW}`)}`;
      dragx *= parseInt(`${dragx}`) << (Math.min(Math.abs(2), 1));
      bodanW += parseInt(`${rulesp}`) >> (Math.min(pausek.length, 5));
   if (bodanW <= rulesp) {
      bodanW /= Math.max(robotow.length, 2);
   }
   while (pausek.length > 1) {
      sliderA = "2";
      break;
   }
   while (1 < fastL) {
       let detailU = String.fromCharCode(100,101,102,101,114,114,101,100,0);
       let canvast = String.fromCharCode(112,104,114,97,115,101,0);
       let spinnerP = String.fromCharCode(97,99,107,110,111,119,108,101,100,103,109,101,110,116,0);
       let progressa = 2;
          let charto: Array<any> = [String.fromCharCode(114,97,105,110,0), String.fromCharCode(112,117,116,0)];
          let dragT = String.fromCharCode(108,97,122,121,0);
          let gmailC = String.fromCharCode(114,101,116,105,110,97,0);
         progressa ^= gmailC.length;
         charto = [1];
         dragT += `${dragT.length & 2}`;
         gmailC = `${dragT.length / 3}`;
      while (5 == (spinnerP.length % (Math.max(3, 7)))) {
         progressa += 1;
         break;
      }
       let othero = 3.0;
       let emptyk = true;
         spinnerP = `${detailU.length % 1}`;
      for (let b = 0; b < 3; b++) {
          let greenr = 1;
          let downloadedG: Map<any, any> = new Map([[String.fromCharCode(114,101,98,97,115,101,0),233], [String.fromCharCode(115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,0),580], [String.fromCharCode(116,111,110,101,115,0),426]]);
         emptyk = !emptyk;
         greenr <<= Math.min(Math.abs(2 & greenr), 2);
         downloadedG.set(`${greenr}`, greenr);
      }
       let injury3: Array<any> = [String.fromCharCode(112,105,99,116,117,114,101,0), String.fromCharCode(108,111,110,103,110,111,105,115,101,0)];
      while (!spinnerP.endsWith(`${othero}`)) {
          let appsC: Map<any, any> = new Map([[String.fromCharCode(103,97,112,108,101,115,115,0),182], [String.fromCharCode(121,111,110,108,121,0),77], [String.fromCharCode(110,111,114,109,97,108,105,122,101,100,0),547]]);
          let benefitC = String.fromCharCode(99,104,97,116,115,0);
         othero /= Math.max(3, parseFloat(`${injury3.length % (Math.max(7, progressa))}`));
         appsC = new Map([[`${appsC.size}`, benefitC.length & 3]]);
         benefitC = "2";
         break;
      }
       let sportse = String.fromCharCode(102,116,118,118,101,114,116,108,105,110,101,0);
       let configure1 = String.fromCharCode(100,105,115,112,108,97,121,105,110,103,0);
      for (let y = 0; y < 2; y++) {
          let internetD = 4.0;
          let clockp: Array<any> = [181, 823];
         emptyk = 50 > clockp.length;
         internetD /= Math.max(4, parseFloat(`${parseInt(`${internetD}`)}`));
         clockp.push(parseInt(`${internetD}`));
      }
       let catagory0 = String.fromCharCode(112,105,99,116,117,114,101,115,0);
       let countryr = String.fromCharCode(108,111,111,112,102,105,108,116,101,114,0);
         sportse += `${((emptyk ? 4 : 4) / 3)}`;
      robotow.push(parseInt(`${bodanW}`) | 3);
      detailU += "1";
      canvast += `${1 << (Math.min(1, canvast.length))}`;
      break;
   }
        

   let member9 = pausek == String.fromCharCode(51,113,95,118,52,0);
   do {
      pausek = `${3 - parseInt(`${bodanW}`)}`;
      if (member9) {
         break;
      }
   } while (member9 && (!pausek.startsWith(`${robotow.length}`)));
      dragx -= (String.fromCharCode(78,0) == phonej ? fastL : phonej.length);
   let yingD = hoverf.size <= 8012462;
   do {
       let dialogR = String.fromCharCode(109,97,112,115,105,122,101,0);
         dialogR = `${dialogR.length / (Math.max(3, dialogR.length))}`;
         dialogR += `${dialogR.length}`;
      if (!dialogR.startsWith(`${dialogR.length}`)) {
         dialogR += `${(String.fromCharCode(85,0) == dialogR ? dialogR.length : dialogR.length)}`;
      }
      hoverf = new Map([[`${rulesp}`, parseInt(`${rulesp}`)]]);
      if (yingD) {
         break;
      }
   } while ((Array.from(hoverf.keys()).includes(`${container0}`)) && yingD);
   if (5.99 < (4.27 + dragx)) {
      sliderA += `${1 * hoverf.size}`;
   }
   if ((container0 / (Math.max(parseInt(`${dragx}`), 2))) < 4 && (parseInt(`${dragx}`) / (Math.max(5, container0))) < 4) {
       let mail5: Array<any> = [String.fromCharCode(98,105,103,110,117,109,0), String.fromCharCode(101,110,104,97,110,99,101,109,101,110,116,115,0), String.fromCharCode(111,99,97,108,0)];
       let handlerj = 3.0;
       let const_3ci: Array<any> = [570, 711, 273];
       let singaporeT = String.fromCharCode(112,114,101,115,101,110,116,105,110,103,0);
       let fastforwardc = String.fromCharCode(112,114,101,115,117,109,101,0);
      while (1 == (fastforwardc.length / (Math.max(5, 10))) && 5 == (fastforwardc.length / 5)) {
         fastforwardc += "1";
         break;
      }
      while ((mail5.length - parseInt(`${handlerj}`)) < 4) {
          let rewindh = String.fromCharCode(104,97,108,100,99,108,117,116,115,114,99,0);
         handlerj *= parseFloat(`${rewindh.length % 3}`);
         break;
      }
         mail5 = [const_3ci.length / 3];
          let downloadh = 3.0;
          let cornerX = 2.0;
          let component0 = String.fromCharCode(100,111,108,108,97,114,0);
         handlerj /= Math.max(parseFloat(`${mail5.length}`), 3);
         downloadh *= component0.length % 1;
         cornerX += parseFloat(`${parseInt(`${cornerX}`)}`);
         component0 = `${component0.length}`;
         singaporeT = `${const_3ci.length}`;
      if (const_3ci.length < 4) {
          let largew = String.fromCharCode(103,114,101,103,0);
          let specG: Array<any> = [663, 842];
          let rightG = String.fromCharCode(100,105,115,112,108,97,99,101,0);
          let componentv = 1;
          let stationsu: Array<any> = [750, 95, 18];
         handlerj /= Math.max(2, parseFloat(`${mail5.length}`));
         largew = `${specG.length}`;
         specG = [2 >> (Math.min(Math.abs(componentv), 5))];
         rightG = `${largew.length}`;
         componentv &= 3 ^ stationsu.length;
         stationsu.push(specG.length);
      }
         const_3ci.push(fastforwardc.length + 1);
          let philippinesC = String.fromCharCode(108,97,98,101,108,101,100,0);
          let closev = String.fromCharCode(102,112,99,0);
          let streamingK: Array<any> = [414, 880, 500];
         fastforwardc += `${streamingK.length}`;
         philippinesC = `${(philippinesC == String.fromCharCode(95,0) ? philippinesC.length : closev.length)}`;
         closev += `${(String.fromCharCode(106,0) == closev ? closev.length : philippinesC.length)}`;
         streamingK.push((String.fromCharCode(49,0) == philippinesC ? closev.length : philippinesC.length));
       let adult2: Array<any> = [989, 138, 34];
       let eact4: Array<any> = [String.fromCharCode(101,115,115,101,110,116,105,97,108,0), String.fromCharCode(110,111,100,101,115,101,116,0), String.fromCharCode(119,101,98,112,0)];
         mail5 = [eact4.length % (Math.max(const_3ci.length, 10))];
       let checkboxx: Map<any, any> = new Map([[String.fromCharCode(105,119,104,116,120,0),true ], [String.fromCharCode(107,101,101,112,105,110,103,0),true ], [String.fromCharCode(97,105,110,116,0),false ]]);
          let commonc: Map<any, any> = new Map([[String.fromCharCode(111,110,101,119,97,121,0),String.fromCharCode(114,101,116,97,105,110,101,100,0)], [String.fromCharCode(105,100,97,116,0),String.fromCharCode(114,116,106,112,101,103,0)], [String.fromCharCode(115,117,112,101,114,110,111,100,101,0),String.fromCharCode(97,114,99,116,105,99,0)]]);
          let o_lockG: Map<any, any> = new Map([[String.fromCharCode(121,117,118,121,117,118,0),555], [String.fromCharCode(111,108,107,97,100,111,116,0),509], [String.fromCharCode(100,100,99,116,0),599]]);
          let matchZ = 0;
         const_3ci = [checkboxx.size / (Math.max(eact4.length, 2))];
         commonc.set(`${o_lockG.size}`, commonc.size);
         o_lockG = new Map([[`${commonc.size}`, commonc.size ^ o_lockG.size]]);
         matchZ &= o_lockG.size;
       let sharedW: Array<any> = [420, 535];
      if (singaporeT.length <= 4) {
          let linkq = 1.0;
          let ajax3 = String.fromCharCode(109,97,108,108,111,99,0);
          let gemfileu: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,114,105,103,104,116,0),true ], [String.fromCharCode(103,114,97,99,101,0),false ]]);
          let sharedk = 1.0;
         fastforwardc += "3";
         linkq -= parseFloat(`${gemfileu.size & parseInt(`${sharedk}`)}`);
         ajax3 += "2";
         gemfileu.set(`${sharedk}`, gemfileu.size + parseInt(`${sharedk}`));
      }
      if ((mail5.length & adult2.length) >= 4 || (adult2.length & 4) >= 4) {
          let subsC = String.fromCharCode(115,116,101,112,112,101,114,0);
         mail5.push((String.fromCharCode(57,0) == singaporeT ? const_3ci.length : singaporeT.length));
         subsC += `${subsC.length}`;
      }
      dragx -= phonej.length / (Math.max(1, 1));
   }
      fastL ^= 3;
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
       let resendo = String.fromCharCode(105,115,111,108,97,116,101,0);
    let otherS = 3.0;
    let schedulef: Map<any, any> = new Map([[String.fromCharCode(112,97,110,0),317], [String.fromCharCode(97,119,97,121,0),777], [String.fromCharCode(115,105,103,97,108,103,0),126]]);
    let expiredw = false;
    let successW = String.fromCharCode(115,105,103,110,105,102,105,99,97,110,116,0);
    let termst = String.fromCharCode(115,112,108,97,116,0);
    let containerm = true;
    let mutedO = String.fromCharCode(97,115,121,110,99,104,114,111,110,111,117,115,108,121,0);
    let expiredM = String.fromCharCode(118,101,114,116,101,120,0);
    let macaur = true;
    let floatingy: Array<any> = [String.fromCharCode(104,107,100,102,0), String.fromCharCode(97,118,102,105,108,116,101,114,114,101,115,0), String.fromCharCode(100,111,103,115,0)];
   while (expiredw) {
      schedulef.set(`${termst}`, (termst == String.fromCharCode(80,0) ? schedulef.size : termst.length));
      break;
   }
   if (termst == successW) {
       let floatingl = 0;
       let dataR = String.fromCharCode(120,112,97,108,100,118,0);
       let mutedq = 4.0;
          let speco = 2.0;
          let o_image1 = String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,0);
         floatingl |= floatingl;
         speco -= parseFloat(`${o_image1.length}`);
         o_image1 += `${parseInt(`${speco}`) * 3}`;
          let firebaseY = 2.0;
         floatingl <<= Math.min(Math.abs((dataR == String.fromCharCode(87,0) ? floatingl : dataR.length)), 4);
         firebaseY -= parseFloat(`${parseInt(`${firebaseY}`)}`);
      while (3 >= dataR.length) {
         dataR = `${dataR.length}`;
         break;
      }
      if (4 > (floatingl / 2) || (floatingl - parseInt(`${mutedq}`)) > 2) {
         mutedq += (dataR == String.fromCharCode(85,0) ? dataR.length : parseInt(`${mutedq}`));
      }
      for (let t = 0; t < 3; t++) {
         mutedq /= Math.max(3, dataR.length);
      }
          let tempF = String.fromCharCode(109,97,103,105,99,0);
          let data2: Array<any> = [620, 303];
          let dragv = String.fromCharCode(116,97,107,100,115,112,0);
         mutedq += data2.length;
         tempF = `${dragv.length & 3}`;
         data2.push((tempF == String.fromCharCode(56,0) ? dragv.length : tempF.length));
         dataR = `${(String.fromCharCode(111,0) == dataR ? dataR.length : floatingl)}`;
      if (floatingl >= dataR.length) {
         floatingl ^= dataR.length;
      }
          let schedule_ = 3.0;
          let penaltyl = String.fromCharCode(115,110,97,112,112,101,100,0);
          let rewindw = 5;
         mutedq *= rewindw + penaltyl.length;
         schedule_ /= Math.max(3 >> (Math.min(Math.abs(parseInt(`${schedule_}`)), 1)), 5);
         penaltyl += `${parseInt(`${schedule_}`) >> (Math.min(3, Math.abs(parseInt(`${schedule_}`))))}`;
      successW += `${floatingl + dataR.length}`;
   }
      containerm = 59 <= successW.length;
      termst = `${2 - schedulef.size}`;
   let humidity1 = successW == String.fromCharCode(108,50,48,119,57,56,50,108,119,0);
   do {
       let emojir = false;
       let referrerY = 1.0;
       let progressQ = String.fromCharCode(109,105,120,105,110,103,0);
       let plusj: Map<any, any> = new Map([[String.fromCharCode(99,104,111,105,99,101,115,0),503], [String.fromCharCode(116,119,105,100,100,108,101,0),722]]);
       let shrinkC: Map<any, any> = new Map([[String.fromCharCode(100,110,115,110,97,109,101,0),242], [String.fromCharCode(112,97,103,101,108,105,115,116,0),392], [String.fromCharCode(114,101,97,115,111,110,115,0),207]]);
       let blacklistf = String.fromCharCode(120,116,101,97,0);
      for (let u = 0; u < 3; u++) {
         referrerY /= Math.max(parseFloat(`${blacklistf.length << (Math.min(1, Math.abs(plusj.size)))}`), 4);
      }
         blacklistf = `${((emojir ? 4 : 4))}`;
         emojir = 49 <= progressQ.length;
          let downloadd = String.fromCharCode(108,105,98,120,0);
          let commenty = 4.0;
          let stepI = String.fromCharCode(115,101,116,115,97,114,0);
         referrerY += (parseFloat(`${downloadd == String.fromCharCode(76,0) ? downloadd.length : parseInt(`${referrerY}`)}`));
         commenty *= parseFloat(`${stepI.length / 2}`);
         stepI = `${stepI.length}`;
          let streamingA: Map<any, any> = new Map([[String.fromCharCode(104,113,100,110,100,0),687], [String.fromCharCode(105,110,100,101,102,105,110,105,116,101,0),229], [String.fromCharCode(116,114,105,108,105,110,101,97,114,0),245]]);
          let data2s: Array<any> = [514, 156, 827];
         shrinkC = new Map([[`${plusj.size}`, shrinkC.size]]);
         streamingA.set(`${data2s.length}`, 1);
         data2s.push(streamingA.size * data2s.length);
          let grayF = 0.0;
         progressQ += `${((emojir ? 2 : 2) * parseInt(`${grayF}`))}`;
      let chartz = String.fromCharCode(53,99,122,121,120,103,53,51,95,106,0) == blacklistf;
      do {
         blacklistf += `${3 ^ blacklistf.length}`;
         if (chartz) {
            break;
         }
      } while ((4 >= (shrinkC.size << (Math.min(Math.abs(5), 1))) || 4 >= (shrinkC.size << (Math.min(Math.abs(5), 1)))) && chartz);
      for (let g = 0; g < 3; g++) {
          let downloadedz = String.fromCharCode(102,105,101,108,100,109,97,116,99,104,0);
          let twitterQ = String.fromCharCode(107,117,107,105,0);
          let selectedW = false;
          let matchesb = false;
          let carouselb: Array<any> = [157, 981];
         shrinkC.set(`${matchesb}`, (blacklistf == String.fromCharCode(119,0) ? (matchesb ? 3 : 3) : blacklistf.length));
         downloadedz = `${carouselb.length}`;
         twitterQ += `${carouselb.length * 3}`;
         selectedW = String.fromCharCode(118,0) == twitterQ;
      }
          let shootu = false;
          let clubU: Array<any> = [874, 703];
          let middlewareh: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,101,120,116,112,114,111,102,105,108,101,108,101,118,101,108,0),987], [String.fromCharCode(102,101,111,102,0),616], [String.fromCharCode(116,101,120,116,97,116,116,114,0),936]]);
         progressQ = `${middlewareh.size}`;
         shootu = !shootu;
         clubU = [2];
         middlewareh = new Map([[`${clubU.length}`, clubU.length]]);
       let danger5 = 4.0;
       let langkeyG = 1.0;
      let referrer2 = emojir ? !emojir : emojir;
      do {
         emojir = plusj.size >= shrinkC.size;
         if (referrer2) {
            break;
         }
      } while ((progressQ.length <= 2) && referrer2);
         langkeyG -= parseInt(`${danger5}`) ^ parseInt(`${referrerY}`);
         shrinkC.set(`${emojir}`, ((emojir ? 3 : 2) - parseInt(`${langkeyG}`)));
       let reducerx = 3;
       let downloaderX = 1;
      successW += `${((expiredw ? 4 : 1) & parseInt(`${otherS}`))}`;
      if (humidity1) {
         break;
      }
   } while ((resendo.length > successW.length) && humidity1);
   if (2 > mutedO.length) {
      mutedO = `${resendo.length}`;
   }
   while (!containerm) {
      termst += `${(expiredM == String.fromCharCode(116,0) ? expiredM.length : parseInt(`${otherS}`))}`;
      break;
   }
       let helpero = 4.0;
      for (let j = 0; j < 3; j++) {
          let switch_kl = 1.0;
          let largex = 4;
          let storeH = String.fromCharCode(100,100,115,116,0);
          let nextz = String.fromCharCode(114,101,97,100,102,117,108,108,0);
         helpero /= Math.max(largex & 1, 3);
         switch_kl -= parseInt(`${switch_kl}`);
         largex *= (String.fromCharCode(85,0) == storeH ? storeH.length : nextz.length);
         nextz = `${parseInt(`${switch_kl}`) + 1}`;
      }
          let crossV: Array<any> = [String.fromCharCode(116,104,105,114,116,121,0), String.fromCharCode(112,116,115,0)];
          let left6 = 3.0;
          let catalogI: Map<any, any> = new Map([[String.fromCharCode(115,101,108,101,99,116,0),String.fromCharCode(108,115,112,114,0)], [String.fromCharCode(116,104,114,101,97,100,101,100,0),String.fromCharCode(115,121,110,99,115,97,102,101,0)], [String.fromCharCode(99,111,109,112,97,116,0),String.fromCharCode(115,101,99,117,114,105,116,121,0)]]);
         helpero += parseInt(`${helpero}`) - crossV.length;
         crossV = [3];
         left6 -= parseFloat(`${parseInt(`${left6}`)}`);
         catalogI = new Map([[`${catalogI.size}`, parseInt(`${left6}`)]]);
      if (3.79 > (helpero / 1.24) && (helpero / (Math.max(5, helpero))) > 1.24) {
         helpero += parseInt(`${helpero}`);
      }
      successW += `${1 / (Math.max(4, mutedO.length))}`;
   if (3.24 <= (otherS + 1.47) && 3.11 <= (1.47 + otherS)) {
      expiredM += `${parseInt(`${otherS}`) << (Math.min(5, Math.abs(2)))}`;
   }
       let sourceG: Array<any> = [119, 515, 152];
       let filedG = String.fromCharCode(101,109,115,99,114,105,112,116,101,110,0);
      for (let k = 0; k < 1; k++) {
          let goal2 = 2;
          let searchbarj = 0;
          let favicona: Array<any> = [String.fromCharCode(115,117,98,120,0), String.fromCharCode(109,117,115,105,99,0), String.fromCharCode(114,101,99,111,118,101,114,97,98,108,101,0)];
          let diceO = 0;
          let bellm: Array<any> = [457, 908, 352];
         sourceG.push(3 | diceO);
         goal2 += 1 + favicona.length;
         searchbarj ^= 3;
         favicona = [favicona.length ^ searchbarj];
         diceO += bellm.length ^ goal2;
         bellm = [searchbarj / (Math.max(favicona.length, 5))];
      }
       let detailg = true;
      let anneri = filedG.length >= 5475734;
      do {
          let umengn: Map<any, any> = new Map([[String.fromCharCode(115,101,99,116,105,111,110,0),674], [String.fromCharCode(102,116,101,108,108,0),567]]);
         filedG += `${filedG.length - 3}`;
         umengn.set(`${umengn.size}`, umengn.size | umengn.size);
         if (anneri) {
            break;
         }
      } while (anneri && (3 > (sourceG.length ^ filedG.length) || 2 > (3 ^ filedG.length)));
          let inactiveR = String.fromCharCode(97,118,105,97,108,97,98,108,101,0);
         filedG = `${filedG.length}`;
         inactiveR += `${inactiveR.length}`;
          let side2: Array<any> = [531, 439, 441];
          let largew: Array<any> = [117, 95];
          let listP = false;
         sourceG.push(2);
         side2.push(side2.length);
         largew.push(3 + side2.length);
         listP = !listP;
      let twitterB = 7514468 >= filedG.length;
      do {
          let injuryr = 5.0;
          let buttonk: Array<any> = [270, 221];
          let floaterp = String.fromCharCode(100,111,110,116,0);
          let crownZ: Map<any, any> = new Map([[String.fromCharCode(105,110,115,101,116,0),String.fromCharCode(115,105,122,101,100,0)], [String.fromCharCode(115,108,105,99,101,100,0),String.fromCharCode(112,97,115,116,0)]]);
          let robotoq = String.fromCharCode(97,99,113,117,97,110,116,0);
         filedG = `${floaterp.length}`;
         injuryr += 1;
         buttonk.push(2 % (Math.max(3, crownZ.size)));
         floaterp += `${buttonk.length & 2}`;
         crownZ = new Map([[`${buttonk.length}`, (robotoq == String.fromCharCode(50,0) ? buttonk.length : robotoq.length)]]);
         if (twitterB) {
            break;
         }
      } while ((!filedG.startsWith(`${sourceG.length}`)) && twitterB);
      expiredM += `${resendo.length + filedG.length}`;

        console.log("err save vod!");

   for (let s = 0; s < 1; s++) {
       let belli = true;
       let scoreq = String.fromCharCode(118,103,108,111,98,97,108,0);
      while (belli) {
         belli = (7 < ((!belli ? scoreq.length : 7) + scoreq.length));
         break;
      }
         belli = !scoreq.endsWith(`${belli}`);
      successW += "3";
   }
   while (2 < termst.length) {
       let filledr = String.fromCharCode(112,101,101,108,111,102,102,0);
       let topicF = 4;
       let usernameC: Array<any> = [367, 641];
       let stationsv: Map<any, any> = new Map([[String.fromCharCode(119,101,98,0),714], [String.fromCharCode(116,114,97,110,115,99,101,105,118,101,114,0),149], [String.fromCharCode(119,97,118,101,115,121,110,116,104,0),247]]);
       let backgroundk = 2.0;
      let minimizew = topicF <= 8831771;
      do {
         topicF &= filledr.length ^ usernameC.length;
         if (minimizew) {
            break;
         }
      } while (((3 >> (Math.min(2, Math.abs(topicF)))) > 5 || 2 > (usernameC.length >> (Math.min(Math.abs(3), 2)))) && minimizew);
          let volumeg = false;
          let time_9t9 = String.fromCharCode(109,111,109,101,110,116,117,109,0);
          let charta = String.fromCharCode(114,101,99,111,109,112,111,115,101,0);
         filledr += `${time_9t9.length & 2}`;
         volumeg = !charta.startsWith(`${volumeg}`);
         time_9t9 = `${((volumeg ? 2 : 4) << (Math.min(charta.length, 4)))}`;
          let switch_4_x = false;
         stationsv.set(`${backgroundk}`, usernameC.length);
         switch_4_x = (switch_4_x ? !switch_4_x : switch_4_x);
          let targetz = String.fromCharCode(115,116,97,110,100,97,114,100,115,0);
          let gestureu = true;
         stationsv.set(filledr, 2 * filledr.length);
         targetz = `${(targetz == String.fromCharCode(112,0) ? targetz.length : (gestureu ? 3 : 4))}`;
         gestureu = !gestureu;
      if ((stationsv.size * 2) >= 1 || 3 >= (2 * filledr.length)) {
         stationsv.set(`${topicF}`, 1);
      }
      while (1 == (2 & topicF)) {
         topicF %= Math.max(4, topicF);
         break;
      }
         usernameC = [(String.fromCharCode(99,0) == filledr ? filledr.length : topicF)];
         stationsv.set(filledr, 1);
         usernameC.push(stationsv.size);
      for (let p = 0; p < 2; p++) {
         stationsv = new Map([[`${stationsv.size}`, stationsv.size / 1]]);
      }
      for (let q = 0; q < 1; q++) {
          let layouta = String.fromCharCode(119,101,97,107,0);
          let reminderx = String.fromCharCode(112,114,111,98,108,101,109,0);
          let closeE = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,0);
          let screenh: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,115,116,101,112,0),739], [String.fromCharCode(112,117,98,105,99,0),103], [String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,0),597]]);
          let changew = 2.0;
         topicF >>= Math.min(3, Math.abs(layouta.length << (Math.min(Math.abs(3), 5))));
         layouta = `${(reminderx == String.fromCharCode(111,0) ? reminderx.length : closeE.length)}`;
         closeE = "3";
         screenh.set(`${changew}`, 2 ^ screenh.size);
         changew += parseFloat(`${3 + closeE.length}`);
      }
       let transfer2 = true;
         transfer2 = 93.8 > backgroundk;
      for (let o = 0; o < 3; o++) {
         usernameC = [2 * topicF];
      }
      let icon2 = backgroundk <= 6779410.0;
      do {
         backgroundk -= topicF / (Math.max(stationsv.size, 9));
         if (icon2) {
            break;
         }
      } while (icon2 && (transfer2));
      termst += `${2 % (Math.max(10, termst.length))}`;
      break;
   }
      expiredM += `${((expiredw ? 3 : 2) << (Math.min(expiredM.length, 2)))}`;
   if (termst != String.fromCharCode(82,0)) {
      mutedO = `${schedulef.size}`;
   }
   if (schedulef.size <= 2) {
      otherS += parseFloat(`${successW.length}`);
   }
       let submitS: Map<any, any> = new Map([[String.fromCharCode(108,117,116,100,0),526], [String.fromCharCode(99,111,110,115,116,116,105,109,101,0),844], [String.fromCharCode(104,105,100,105,110,103,0),140]]);
       let temperaturez = 5.0;
       let transfer8 = String.fromCharCode(115,101,114,105,102,0);
         submitS.set(`${temperaturez}`, parseInt(`${temperaturez}`) / (Math.max(2, transfer8.length)));
         temperaturez -= parseFloat(`${transfer8.length << (Math.min(5, Math.abs(parseInt(`${temperaturez}`))))}`);
      for (let t = 0; t < 1; t++) {
          let photoV = 1.0;
          let othern: Array<any> = [409, 577, 216];
         temperaturez /= Math.max(4, parseFloat(`${submitS.size % 2}`));
         photoV += parseFloat(`${othern.length - 2}`);
         othern = [2 | othern.length];
      }
      if (3 < (submitS.size / (Math.max(transfer8.length, 5)))) {
         submitS.set(`${temperaturez}`, parseInt(`${temperaturez}`) % (Math.max(submitS.size, 1)));
      }
         transfer8 += `${parseInt(`${temperaturez}`)}`;
      for (let d = 0; d < 1; d++) {
          let crownD: Array<any> = [233, 802, 227];
          let gpayi = String.fromCharCode(110,118,111,105,99,101,0);
          let ewarded1 = false;
         transfer8 = "3";
         crownD.push(3 % (Math.max(8, crownD.length)));
         gpayi += "3";
         ewarded1 = gpayi.length > 76;
      }
      while (temperaturez >= 4.51) {
         temperaturez -= parseFloat(`${transfer8.length | parseInt(`${temperaturez}`)}`);
         break;
      }
      while (transfer8.endsWith(`${temperaturez}`)) {
         transfer8 += `${(String.fromCharCode(75,0) == transfer8 ? transfer8.length : submitS.size)}`;
         break;
      }
      while (transfer8.length > 3) {
          let chinax = String.fromCharCode(101,120,116,101,110,100,101,100,0);
          let privilegeS = String.fromCharCode(115,105,103,110,105,102,105,99,97,110,100,0);
          let robotoz = 2.0;
         temperaturez -= parseFloat(`${parseInt(`${temperaturez}`)}`);
         chinax = `${2 / (Math.max(5, privilegeS.length))}`;
         privilegeS += `${privilegeS.length | chinax.length}`;
         robotoz /= Math.max(4, parseFloat(`${parseInt(`${robotoz}`) << (Math.min(Math.abs(3), 3))}`));
         break;
      }
      termst += `${successW.length}`;
   let otherB = schedulef.size >= 5875063;
   do {
      schedulef = new Map([[`${schedulef.size}`, schedulef.size]]);
      if (otherB) {
         break;
      }
   } while (otherB && ((termst.length | 5) >= 1 && 5 >= (5 | termst.length)));
      expiredw = !expiredw;
   for (let y = 0; y < 2; y++) {
       let indexH: Map<any, any> = new Map([[String.fromCharCode(110,105,109,97,116,101,100,0),String.fromCharCode(100,105,115,116,114,105,98,117,116,101,100,0)], [String.fromCharCode(105,115,100,105,103,105,116,0),String.fromCharCode(102,105,110,97,108,105,115,101,114,0)]]);
       let typesA: Array<any> = [String.fromCharCode(112,114,111,99,101,115,115,111,114,115,0), String.fromCharCode(97,114,107,101,114,0), String.fromCharCode(115,116,114,105,112,112,101,100,0)];
       let championN = String.fromCharCode(115,108,105,100,101,0);
         typesA = [3 << (Math.min(1, Math.abs(indexH.size)))];
         indexH = new Map([[`${typesA.length}`, typesA.length]]);
       let downloadedU: Map<any, any> = new Map([[String.fromCharCode(108,111,97,100,0),String.fromCharCode(108,115,119,115,117,116,105,108,115,0)], [String.fromCharCode(111,99,116,101,116,115,0),String.fromCharCode(118,111,112,101,110,0)]]);
       let middle9: Map<any, any> = new Map([[String.fromCharCode(99,101,108,108,0),true ], [String.fromCharCode(116,105,116,108,101,115,0),true ]]);
         championN = `${indexH.size}`;
      let langM = championN.length >= 6307178;
      do {
         championN += `${typesA.length + 2}`;
         if (langM) {
            break;
         }
      } while (langM && (!championN.includes(`${indexH.size}`)));
      for (let s = 0; s < 2; s++) {
          let vignettew = String.fromCharCode(112,105,112,101,108,111,115,115,0);
          let plusS = 2.0;
          let filterM = 0.0;
         downloadedU = new Map([[`${filterM}`, 3]]);
         vignettew += `${vignettew.length ^ parseInt(`${plusS}`)}`;
         plusS += vignettew.length;
         filterM += (vignettew == String.fromCharCode(79,0) ? parseInt(`${plusS}`) : vignettew.length);
      }
      for (let l = 0; l < 2; l++) {
          let streamingF = 5.0;
          let friendsG: Array<any> = [String.fromCharCode(112,114,101,99,101,110,99,101,0), String.fromCharCode(114,101,109,111,118,105,110,103,0), String.fromCharCode(112,114,101,115,101,110,99,101,115,0)];
          let foundE = 3.0;
         indexH.set(`${middle9.size}`, downloadedU.size);
         streamingF *= friendsG.length << (Math.min(3, Math.abs(parseInt(`${foundE}`))));
         friendsG = [friendsG.length];
         foundE *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${foundE}`)), 4))}`);
      }
         typesA.push(championN.length);
         downloadedU.set(`${typesA.length}`, 3 + middle9.size);
      resendo = `${schedulef.size}`;
   }
   if (containerm) {
       let mapping_ = String.fromCharCode(117,112,118,112,0);
       let orientation7 = 3.0;
         orientation7 *= (parseFloat(`${mapping_ == String.fromCharCode(120,0) ? parseInt(`${orientation7}`) : mapping_.length}`));
          let hongkong1 = String.fromCharCode(117,118,97,114,105,110,116,0);
          let downz: Map<any, any> = new Map([[String.fromCharCode(101,120,112,105,114,101,115,0),String.fromCharCode(106,100,109,97,115,116,101,114,0)], [String.fromCharCode(120,97,118,115,0),String.fromCharCode(101,115,99,97,112,105,110,103,0)], [String.fromCharCode(105,109,112,114,101,115,115,105,111,110,115,0),String.fromCharCode(109,101,116,104,111,100,115,0)]]);
         orientation7 += parseFloat(`${mapping_.length ^ hongkong1.length}`);
         hongkong1 = `${downz.size}`;
         downz.set(`${downz.size}`, downz.size + downz.size);
      for (let h = 0; h < 1; h++) {
         mapping_ += `${2 ^ mapping_.length}`;
      }
       let minimizei = false;
      if (1 >= mapping_.length && minimizei) {
         minimizei = (46 > ((minimizei ? 46 : mapping_.length) ^ mapping_.length));
      }
         orientation7 *= parseFloat(`${parseInt(`${orientation7}`)}`);
      termst += `${((expiredw ? 2 : 2) >> (Math.min(Math.abs(parseInt(`${orientation7}`)), 1)))}`;
   }
        console.log(err);
      }
    };

    const deviceOrientationHandle = () => {
       let layout1 = String.fromCharCode(101,108,101,118,97,116,101,0);
    let gmailf = 0.0;
    let animationW = String.fromCharCode(109,101,109,99,109,112,0);
    let auto_09i = String.fromCharCode(102,108,118,101,110,99,0);
    let teaml = 2.0;
    let memberb = String.fromCharCode(98,101,97,114,105,110,103,0);
    let unselectedq = 4.0;
    let notificationT = String.fromCharCode(100,101,99,108,116,121,112,101,0);
    let humidityt = 1.0;
    let emojit = String.fromCharCode(114,101,100,97,99,116,0);
    let macaum: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,97,98,108,101,115,0),265], [String.fromCharCode(119,97,108,115,104,120,0),122]]);
    let activem = 0.0;
    let annerQ = false;
      teaml += layout1.length;
   for (let i = 0; i < 2; i++) {
       let combineE = String.fromCharCode(112,105,99,116,0);
       let delegate_8a = String.fromCharCode(111,115,115,108,0);
       let incident5 = 4.0;
       let thumbnailH = 0.0;
      if (!combineE.endsWith(`${delegate_8a.length}`)) {
         combineE += `${(delegate_8a == String.fromCharCode(90,0) ? parseInt(`${thumbnailH}`) : delegate_8a.length)}`;
      }
       let submitF = 4.0;
         combineE += "1";
      let plusd = 4904121.0 <= thumbnailH;
      do {
          let resendZ = String.fromCharCode(118,108,111,103,0);
         thumbnailH /= Math.max(4, 2 - parseInt(`${thumbnailH}`));
         resendZ += `${resendZ.length}`;
         if (plusd) {
            break;
         }
      } while ((!delegate_8a.startsWith(`${thumbnailH}`)) && plusd);
          let expandd = 3.0;
         combineE += `${parseInt(`${submitF}`) + 1}`;
         expandd *= parseFloat(`${parseInt(`${expandd}`) ^ 1}`);
      while ((1.6 - thumbnailH) >= 4.75 || (incident5 - thumbnailH) >= 1.6) {
          let indicator0 = true;
          let splashg = String.fromCharCode(112,114,111,112,111,114,116,105,111,110,0);
          let borderless2 = false;
          let temperatureT = 4.0;
         incident5 *= parseInt(`${temperatureT}`);
         indicator0 = splashg.endsWith(`${indicator0}`);
         splashg = `${((borderless2 ? 2 : 5))}`;
         borderless2 = !borderless2 || splashg.length >= 11;
         temperatureT -= (parseFloat(`${(borderless2 ? 5 : 3)}`));
         break;
      }
          let switch_1U = String.fromCharCode(99,105,114,99,117,108,97,116,105,110,103,0);
          let lived: Array<any> = [225, 115, 11];
          let showw = 0.0;
         submitF *= parseInt(`${incident5}`) / 1;
         switch_1U = `${switch_1U.length}`;
         lived = [3 * switch_1U.length];
         showw += parseInt(`${showw}`) ^ 1;
      let routerr = combineE.length >= 7514346;
      do {
         combineE += `${parseInt(`${thumbnailH}`)}`;
         if (routerr) {
            break;
         }
      } while ((combineE.length == 2) && routerr);
         combineE = `${parseInt(`${submitF}`) * delegate_8a.length}`;
      if (submitF > incident5) {
         submitF /= Math.max(2 ^ delegate_8a.length, 3);
      }
       let episodesF = String.fromCharCode(117,110,113,117,97,110,116,105,122,101,0);
      for (let q = 0; q < 1; q++) {
          let mappingj = 5.0;
          let searchn = String.fromCharCode(114,101,115,105,100,117,97,108,0);
         combineE = `${combineE.length / 2}`;
         mappingj += parseFloat(`${3}`);
         searchn += "2";
      }
      unselectedq /= Math.max(parseInt(`${thumbnailH}`), 2);
   }
   let searchbarR = String.fromCharCode(55,98,98,119,97,0) == auto_09i;
   do {
      auto_09i = `${(notificationT == String.fromCharCode(76,0) ? layout1.length : notificationT.length)}`;
      if (searchbarR) {
         break;
      }
   } while (searchbarR && (3 >= (parseInt(`${unselectedq}`) - 5) && 4.49 >= (unselectedq - 4.16)));

      

   for (let w = 0; w < 3; w++) {
      layout1 = `${memberb.length & parseInt(`${humidityt}`)}`;
   }
      animationW = `${emojit.length & parseInt(`${humidityt}`)}`;
      gmailf += 2;
      if (
        devicesOrientation === "LANDSCAPE-LEFT" ||
        devicesOrientation === "LANDSCAPE-RIGHT"
      ) {

   let fillE = layout1.length <= 9459051;
   do {
       let group9: Array<any> = [114, 281, 988];
       let statsP = String.fromCharCode(104,97,114,100,116,104,114,101,115,104,0);
       let benefitv = String.fromCharCode(120,121,119,104,0);
       let handlere = 0;
          let moviesg = 0.0;
          let activeM = false;
         handlere |= benefitv.length;
         moviesg *= 2 << (Math.min(Math.abs(parseInt(`${moviesg}`)), 2));
         activeM = 60.39 > moviesg && activeM;
      if (benefitv.length < 2) {
         benefitv += `${handlere << (Math.min(Math.abs(3), 5))}`;
      }
         statsP = `${handlere * benefitv.length}`;
         group9 = [statsP.length];
         statsP += `${2 & group9.length}`;
         benefitv = `${2 ^ statsP.length}`;
          let mooni = 5.0;
         handlere |= handlere;
         mooni -= parseInt(`${mooni}`);
         handlere += 1 + benefitv.length;
      layout1 += `${animationW.length | 2}`;
      if (fillE) {
         break;
      }
   } while ((layout1.includes(`${notificationT.length}`)) && fillE);
      auto_09i = "2";
   let rankf = 9778086.0 >= humidityt;
   do {
       let emojiE = String.fromCharCode(102,97,115,116,0);
       let indexq = String.fromCharCode(99,111,118,97,114,105,97,110,99,101,0);
       let module_ = String.fromCharCode(102,119,114,105,116,101,0);
       let ying8 = true;
      if (module_.length <= 4) {
          let actionm = String.fromCharCode(114,101,110,111,114,109,0);
          let anytime7 = String.fromCharCode(97,107,105,100,0);
          let overP = false;
          let bootsplashS: Map<any, any> = new Map([[String.fromCharCode(111,98,118,105,111,117,115,108,121,0),166], [String.fromCharCode(102,105,101,108,100,115,0),431], [String.fromCharCode(110,111,116,101,115,0),365]]);
         module_ += `${3 * anytime7.length}`;
         actionm = `${bootsplashS.size | actionm.length}`;
         anytime7 = `${(2 & (overP ? 3 : 2))}`;
         overP = !overP;
         bootsplashS = new Map([[actionm, ((overP ? 5 : 5))]]);
      }
      for (let h = 0; h < 2; h++) {
         emojiE += `${(module_.length >> (Math.min(1, Math.abs((ying8 ? 1 : 5)))))}`;
      }
      while (!ying8) {
         ying8 = (indexq.length + module_.length) == 97;
         break;
      }
       let adulti = String.fromCharCode(108,105,102,101,99,121,99,108,101,0);
      let configured = emojiE.length <= 5452559;
      do {
         emojiE += `${(String.fromCharCode(99,0) == indexq ? indexq.length : (ying8 ? 4 : 5))}`;
         if (configured) {
            break;
         }
      } while (configured && (5 < emojiE.length));
         ying8 = adulti == String.fromCharCode(109,0) && indexq.length >= 38;
         adulti = `${(emojiE == String.fromCharCode(72,0) ? (ying8 ? 5 : 3) : emojiE.length)}`;
      let setting3 = String.fromCharCode(99,121,112,109,117,121,98,97,98,0) == module_;
      do {
          let downloade = String.fromCharCode(115,97,110,100,98,111,120,0);
         module_ += `${downloade.length}`;
         if (setting3) {
            break;
         }
      } while (setting3 && (module_.length < 5 || ying8));
       let flyerR = String.fromCharCode(97,108,108,111,99,97,116,101,100,0);
         ying8 = flyerR.length >= 84;
         adulti = `${emojiE.length / 1}`;
      if (ying8) {
          let playc = String.fromCharCode(106,105,110,99,108,117,100,101,0);
         adulti = `${indexq.length - 3}`;
         playc = `${playc.length}`;
      }
      humidityt -= 2 & parseInt(`${gmailf}`);
      if (rankf) {
         break;
      }
   } while ((animationW.endsWith(`${humidityt}`)) && rankf);
        setIsFullScreen(true);

   for (let k = 0; k < 3; k++) {
      animationW = `${(layout1 == String.fromCharCode(85,0) ? animationW.length : layout1.length)}`;
   }
      gmailf -= (auto_09i == String.fromCharCode(112,0) ? animationW.length : auto_09i.length);
      layout1 = `${layout1.length}`;
        

      layout1 = `${(String.fromCharCode(74,0) == layout1 ? layout1.length : parseInt(`${unselectedq}`))}`;
      gmailf /= Math.max(auto_09i.length ^ 1, 2);
   for (let m = 0; m < 3; m++) {
      humidityt += emojit.length;
   }
        StatusBar.setHidden(true);

   for (let f = 0; f < 1; f++) {
      auto_09i = "3";
   }
   for (let r = 0; r < 3; r++) {
      humidityt /= Math.max(4, (String.fromCharCode(76,0) == animationW ? notificationT.length : animationW.length));
   }
      teaml /= Math.max(parseInt(`${gmailf}`) + memberb.length, 3);

        lockOrientation(devicesOrientation);
      } else if (devicesOrientation === "PORTRAIT") {

       let rulesy = 4.0;
       let pauseC = String.fromCharCode(115,105,122,101,98,105,116,114,97,116,101,0);
          let modelG = 0;
          let mappingF = String.fromCharCode(114,97,98,105,110,0);
         pauseC += `${parseInt(`${rulesy}`)}`;
         modelG -= modelG;
         mappingF = `${(String.fromCharCode(86,0) == mappingF ? mappingF.length : modelG)}`;
      for (let g = 0; g < 2; g++) {
         rulesy += 1 << (Math.min(5, pauseC.length));
      }
      while (!pauseC.endsWith(`${rulesy}`)) {
         pauseC += "1";
         break;
      }
      while (1 <= (pauseC.length << (Math.min(Math.abs(2), 1)))) {
         pauseC += `${parseInt(`${rulesy}`) * pauseC.length}`;
         break;
      }
       let current_ = 4;
       let commond = 4;
         current_ -= current_ << (Math.min(pauseC.length, 4));
      animationW += `${notificationT.length & parseInt(`${unselectedq}`)}`;
   while ((parseInt(`${humidityt}`) + emojit.length) >= 5 || (humidityt + emojit.length) >= 5.14) {
      humidityt *= layout1.length;
      break;
   }
   let thumbnailM = emojit == String.fromCharCode(117,112,55,109,106,0);
   do {
       let notificationp = 2;
       let infoQ = 1.0;
       let downloadingj: Array<any> = [651, 525, 882];
       let default_7j = String.fromCharCode(110,111,109,105,110,97,108,0);
      for (let j = 0; j < 3; j++) {
         infoQ += parseFloat(`${parseInt(`${infoQ}`) % (Math.max(downloadingj.length, 4))}`);
      }
         notificationp >>= Math.min(2, Math.abs(default_7j.length & 2));
         default_7j += `${downloadingj.length}`;
      while (4 < (downloadingj.length | default_7j.length) && (4 | default_7j.length) < 1) {
         default_7j = `${parseInt(`${infoQ}`)}`;
         break;
      }
      if (1 < (2 + downloadingj.length) || 1 < (downloadingj.length + 2)) {
         downloadingj.push(notificationp / 1);
      }
         default_7j = "3";
      if (4.78 >= (infoQ * 1.4)) {
         infoQ += parseFloat(`${3 >> (Math.min(5, downloadingj.length))}`);
      }
      while ((infoQ + 3.98) > 3.2) {
         infoQ -= parseFloat(`${downloadingj.length}`);
         break;
      }
      emojit = `${emojit.length}`;
      if (thumbnailM) {
         break;
      }
   } while ((emojit.includes(`${teaml}`)) && thumbnailM);
        setIsFullScreen(false);

   for (let x = 0; x < 3; x++) {
      layout1 += `${(memberb == String.fromCharCode(51,0) ? parseInt(`${teaml}`) : memberb.length)}`;
   }
   if (animationW.length > emojit.length) {
      emojit += `${(notificationT == String.fromCharCode(71,0) ? notificationT.length : layout1.length)}`;
   }
   for (let j = 0; j < 1; j++) {
      humidityt /= Math.max(parseInt(`${teaml}`), 4);
   }
        

       let privilegeO = 4.0;
      for (let s = 0; s < 1; s++) {
         privilegeO -= parseInt(`${privilegeO}`) - 1;
      }
      let frame_jaI = privilegeO <= 7803040.0;
      do {
         privilegeO /= Math.max(2 + parseInt(`${privilegeO}`), 3);
         if (frame_jaI) {
            break;
         }
      } while (((privilegeO + privilegeO) < 2.19) && frame_jaI);
      let serviceD = privilegeO >= 5206569.0;
      do {
         privilegeO += parseInt(`${privilegeO}`);
         if (serviceD) {
            break;
         }
      } while (serviceD && ((privilegeO - 3) < 1.75));
      activem /= Math.max((parseFloat(`${parseInt(`${humidityt}`) << (Math.min(3, Math.abs((annerQ ? 2 : 5))))}`)), 2);
      emojit = `${emojit.length ^ 1}`;
   while (1.97 == (teaml * 1.12) && (1.12 * teaml) == 2.10) {
      unselectedq -= 1;
      break;
   }
        StatusBar.setHidden(false);

   let apps3 = activem >= 7527528.0;
   do {
      activem += parseFloat(`${notificationT.length}`);
      if (apps3) {
         break;
      }
   } while (apps3 && ((emojit.length >> (Math.min(Math.abs(2), 3))) >= 1));
      activem += parseFloat(`${layout1.length / 3}`);
      unselectedq /= Math.max(1, 1);

        lockOrientation(devicesOrientation);
      }
    };

    const onToggleFullScreen = useCallback(() => {
       let favoriteQ = 1.0;
    let tempM = String.fromCharCode(98,101,103,105,110,0);
    let bellr = 0.0;
    let borderlessL = 3.0;
    let shareV = 0.0;
    let commentB = 0;
    let liveq = 5.0;
    let reporth = 1.0;
    let filledm = String.fromCharCode(100,101,112,0);
    let layout9: Map<any, any> = new Map([[String.fromCharCode(99,97,110,111,112,117,115,0),false ], [String.fromCharCode(107,115,101,116,0),false ]]);
    let layoutm = String.fromCharCode(101,120,99,101,101,100,0);
    let tickedj = 4;
      favoriteQ += 3;
   while (3.96 == (borderlessL * liveq)) {
      liveq /= Math.max(parseFloat(`${layoutm.length}`), 1);
      break;
   }
      shareV /= Math.max(parseFloat(`${commentB - tickedj}`), 5);

      if (
        appOrientation === "LANDSCAPE-LEFT" ||
        appOrientation === "LANDSCAPE-RIGHT"
      ) {

      bellr /= Math.max(parseFloat(`${tempM.length * parseInt(`${favoriteQ}`)}`), 4);
   for (let k = 0; k < 2; k++) {
      liveq += parseFloat(`${parseInt(`${shareV}`)}`);
   }
       let alertA: Array<any> = [738, 416];
       let star_ = false;
      let matchesG = star_ ? !star_ : star_;
      do {
         star_ = !star_ || alertA.length <= 20;
         if (matchesG) {
            break;
         }
      } while (matchesG && (star_ || (2 * alertA.length) > 1));
      let lessv = star_ ? !star_ : star_;
      do {
         star_ = !star_;
         if (lessv) {
            break;
         }
      } while (lessv && (5 < alertA.length));
       let privacyc = String.fromCharCode(119,95,57,57,0);
      if (2 >= alertA.length) {
         star_ = !privacyc.startsWith(`${star_}`);
      }
      for (let p = 0; p < 1; p++) {
         star_ = !star_;
      }
      let minivod6 = 7213752 <= privacyc.length;
      do {
         privacyc = `${((star_ ? 5 : 4) | 2)}`;
         if (minivod6) {
            break;
         }
      } while (minivod6 && (2 >= privacyc.length && star_));
      tickedj &= parseInt(`${borderlessL}`) / (Math.max(layoutm.length, 8));
        lockOrientation("PORTRAIT");

   let alertV = layoutm.length <= 5775254;
   do {
      layoutm = `${2 - layout9.size}`;
      if (alertV) {
         break;
      }
   } while ((reporth == 5.93) && alertV);
   let datax = commentB <= 5444287;
   do {
      commentB <<= Math.min(2, Math.abs(parseInt(`${borderlessL}`)));
      if (datax) {
         break;
      }
   } while ((3 >= (commentB >> (Math.min(Math.abs(1), 5))) || (1 % (Math.max(8, commentB))) >= 2) && datax);
       let orangeG = 4.0;
       let policy6 = String.fromCharCode(117,112,115,116,114,101,97,109,0);
      while (policy6.endsWith(`${orangeG}`)) {
          let bufferd = 1;
          let controls1 = String.fromCharCode(114,101,99,111,103,110,105,122,101,114,115,0);
          let paginationx: Map<any, any> = new Map([[String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,0),763], [String.fromCharCode(118,100,112,97,117,99,111,110,116,101,120,116,0),954]]);
          let dialogw = String.fromCharCode(116,104,105,115,0);
          let appleF: Map<any, any> = new Map([[String.fromCharCode(101,120,116,109,97,112,0),80], [String.fromCharCode(100,97,116,97,115,116,111,114,101,0),297], [String.fromCharCode(110,111,110,98,0),17]]);
         orangeG /= Math.max(parseFloat(`${3}`), 1);
         bufferd -= paginationx.size;
         controls1 += `${bufferd}`;
         paginationx = new Map([[`${paginationx.size}`, paginationx.size | controls1.length]]);
         dialogw = `${(String.fromCharCode(73,0) == controls1 ? paginationx.size : controls1.length)}`;
         appleF = new Map([[`${appleF.size}`, appleF.size]]);
         break;
      }
      for (let n = 0; n < 2; n++) {
         orangeG /= Math.max(parseFloat(`${parseInt(`${orangeG}`)}`), 2);
      }
          let statistics8 = String.fromCharCode(112,114,105,111,114,105,116,105,101,115,0);
          let overlayH = String.fromCharCode(110,111,104,119,0);
         policy6 += `${2 >> (Math.min(5, Math.abs(parseInt(`${orangeG}`))))}`;
         statistics8 = `${3 >> (Math.min(5, overlayH.length))}`;
         overlayH += `${overlayH.length * 2}`;
      while ((policy6.length / 3) == 1 && (4.59 - orangeG) == 4.19) {
         orangeG -= parseFloat(`${policy6.length}`);
         break;
      }
       let otherc = 5.0;
       let tail2 = 5.0;
         tail2 *= parseInt(`${tail2}`) / (Math.max(policy6.length, 4));
      tickedj <<= Math.min(2, Math.abs(parseInt(`${shareV}`) & 1));
        setIsFullScreen(false);

      reporth += parseInt(`${bellr}`) >> (Math.min(2, Math.abs(2)));
   while ((tickedj ^ 5) <= 3) {
      borderlessL *= 1;
      break;
   }
   while (filledm.startsWith(`${tempM.length}`)) {
      filledm = `${3 & layoutm.length}`;
      break;
   }
        

      filledm += "3";
   while (3.89 == (borderlessL - 3)) {
       let filleds: Map<any, any> = new Map([[String.fromCharCode(99,102,102,116,105,0),String.fromCharCode(99,111,108,117,109,110,115,0)], [String.fromCharCode(115,119,105,112,101,0),String.fromCharCode(108,115,112,108,112,99,0)], [String.fromCharCode(120,99,104,97,99,104,97,0),String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,0)]]);
       let untickw = String.fromCharCode(97,114,114,97,121,115,0);
          let vignettee = 2.0;
          let othere = 2;
          let homed = 4.0;
         filleds = new Map([[`${vignettee}`, 1 & othere]]);
         vignettee /= Math.max(2, parseInt(`${homed}`) / (Math.max(parseInt(`${homed}`), 1)));
         othere ^= 1 / (Math.max(parseInt(`${homed}`), 3));
         filleds.set(`${untickw}`, 3);
         filleds.set(untickw, filleds.size - untickw.length);
       let whistleh = 3;
       let blackG = 2;
         untickw += `${untickw.length}`;
         whistleh <<= Math.min(2, Math.abs(filleds.size));
      bellr -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${borderlessL}`)), 2))}`);
      break;
   }
      favoriteQ -= 2 << (Math.min(Math.abs(parseInt(`${borderlessL}`)), 1));
        StatusBar.setHidden(false);

   while (1 < (5 / (Math.max(7, tickedj))) && (filledm.length / (Math.max(5, 4))) < 1) {
      tickedj ^= (layoutm == String.fromCharCode(101,0) ? parseInt(`${bellr}`) : layoutm.length);
      break;
   }
   while (3.96 >= shareV) {
      shareV *= parseFloat(`${1 - parseInt(`${borderlessL}`)}`);
      break;
   }
       let forme = true;
      while (!forme) {
         forme = (!forme ? !forme : forme);
         break;
      }
         forme = !forme;
      while (forme) {
         forme = (!forme ? !forme : forme);
         break;
      }
      favoriteQ += 1 * commentB;

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      } else {

      tickedj /= Math.max(2, 3 * filledm.length);
   while ((1.61 - shareV) > 3.33) {
       let reminderU = String.fromCharCode(117,110,115,117,112,112,111,114,116,101,100,95,114,95,50,48,0);
       let assistD = String.fromCharCode(100,101,114,101,103,105,115,116,101,114,0);
       let commonu = false;
         assistD = `${(1 - (commonu ? 5 : 4))}`;
      while (reminderU.length <= 5) {
         reminderU = `${(reminderU == String.fromCharCode(97,0) ? reminderU.length : (commonu ? 4 : 2))}`;
         break;
      }
      if (reminderU.includes(assistD)) {
          let plusn = String.fromCharCode(117,110,109,97,112,0);
          let slider_: Map<any, any> = new Map([[String.fromCharCode(102,97,99,116,111,114,97,98,108,101,0),857], [String.fromCharCode(116,121,112,105,110,103,0),825]]);
         reminderU += `${(String.fromCharCode(53,0) == reminderU ? reminderU.length : plusn.length)}`;
         plusn += "3";
         slider_.set(`${slider_.size}`, slider_.size | slider_.size);
      }
       let targetJ = 0;
       let yinge = 0;
       let modal6 = 2.0;
          let descS = String.fromCharCode(100,105,97,108,111,103,0);
         commonu = 67 < targetJ;
         descS += `${descS.length}`;
      let macau_ = 7582117.0 >= modal6;
      do {
         modal6 += 3;
         if (macau_) {
            break;
         }
      } while (macau_ && ((1.58 + modal6) > 1.95 || !commonu));
      if (!commonu || (yinge ^ 4) <= 5) {
         commonu = assistD.length < yinge;
      }
      if (2 == reminderU.length || assistD.length == 2) {
         assistD += `${yinge - 1}`;
      }
      tickedj += (parseInt(`${favoriteQ}`) << (Math.min(1, Math.abs((commonu ? 1 : 3)))));
      break;
   }
       let assistJ = 0.0;
       let smallN = 4.0;
      while (smallN <= 5.45) {
         smallN += parseFloat(`${parseInt(`${smallN}`) ^ 3}`);
         break;
      }
      while ((smallN + 5.46) >= 5.68 || (5.46 * assistJ) >= 3.84) {
         smallN -= parseFloat(`${parseInt(`${assistJ}`)}`);
         break;
      }
      while ((assistJ - 2.71) <= 5.54 || (assistJ - 2.71) <= 2.24) {
         smallN *= parseFloat(`${parseInt(`${assistJ}`) ^ 1}`);
         break;
      }
      if (1.6 < (assistJ - 1.79) || 3.81 < (1.79 + assistJ)) {
         assistJ -= parseFloat(`${parseInt(`${smallN}`) * parseInt(`${assistJ}`)}`);
      }
         assistJ /= Math.max(3, parseFloat(`${2 % (Math.max(parseInt(`${assistJ}`), 9))}`));
      let indicatory = 8849484.0 >= assistJ;
      do {
         assistJ /= Math.max(parseFloat(`${parseInt(`${smallN}`)}`), 2);
         if (indicatory) {
            break;
         }
      } while (((assistJ - smallN) <= 5.87) && indicatory);
      favoriteQ *= 3 + commentB;
        lockOrientation("LANDSCAPE");

       let catagorye = 0.0;
       let club6 = 2.0;
       let switch_yol: Map<any, any> = new Map([[String.fromCharCode(112,117,98,107,101,121,0),false ], [String.fromCharCode(117,108,116,114,97,0),true ]]);
       let whistle9 = 3.0;
       let kick4 = 4.0;
      for (let m = 0; m < 3; m++) {
          let foundN = false;
          let headerI = String.fromCharCode(104,99,115,99,97,108,101,0);
          let formp = 1.0;
          let countdownm = 0;
          let long_3v = String.fromCharCode(122,111,110,101,115,0);
         whistle9 *= 3 & long_3v.length;
         foundN = formp <= 39.54;
         headerI = `${parseInt(`${formp}`) << (Math.min(5, Math.abs(2)))}`;
         countdownm <<= Math.min(5, Math.abs(countdownm / (Math.max(3, 5))));
         long_3v = `${headerI.length % 1}`;
      }
         whistle9 -= 1;
         switch_yol = new Map([[`${club6}`, 3 << (Math.min(Math.abs(parseInt(`${catagorye}`)), 2))]]);
         catagorye /= Math.max(1, parseFloat(`${switch_yol.size / (Math.max(5, parseInt(`${whistle9}`)))}`));
      for (let b = 0; b < 1; b++) {
         club6 += parseFloat(`${2}`);
      }
      let successP = whistle9 >= 8164991.0;
      do {
         whistle9 *= 1 * parseInt(`${whistle9}`);
         if (successP) {
            break;
         }
      } while (((parseInt(`${whistle9}`) - switch_yol.size) == 1 && (whistle9 - 5.19) == 1.6) && successP);
      while (kick4 <= 3.8) {
         kick4 *= parseInt(`${whistle9}`);
         break;
      }
      for (let x = 0; x < 3; x++) {
         club6 += parseFloat(`${3}`);
      }
      bellr -= parseFloat(`${tickedj ^ 3}`);
   if ((liveq + borderlessL) < 3.26) {
      borderlessL += 3 + parseInt(`${shareV}`);
   }
      shareV += parseFloat(`${filledm.length + parseInt(`${bellr}`)}`);
        setIsFullScreen(true);

   while ((borderlessL * filledm.length) <= 3.46) {
      borderlessL -= parseInt(`${favoriteQ}`);
      break;
   }
   let anythinke = tempM == String.fromCharCode(100,120,114,97,121,109,0);
   do {
      tempM += `${tickedj / 2}`;
      if (anythinke) {
         break;
      }
   } while ((4 >= (3 >> (Math.min(1, tempM.length))) && (tempM.length >> (Math.min(1, Math.abs(layout9.size)))) >= 3) && anythinke);
       let stationa = true;
       let index2: Array<any> = [884, 984, 969];
       let arrowq = 5.0;
          let star4 = 5;
          let castJ: Array<any> = [446, 608];
          let resultw: Map<any, any> = new Map([[String.fromCharCode(115,108,105,99,101,116,104,114,101,97,100,0),String.fromCharCode(97,118,100,101,118,105,99,101,114,101,115,0)], [String.fromCharCode(121,117,118,112,99,0),String.fromCharCode(102,117,122,122,0)], [String.fromCharCode(115,121,109,98,111,108,105,99,0),String.fromCharCode(99,111,100,101,102,0)]]);
         index2 = [resultw.size];
         star4 *= castJ.length - 2;
         castJ.push(castJ.length % (Math.max(3, 10)));
         resultw.set(`${star4}`, castJ.length ^ 3);
         index2.push(1);
      for (let h = 0; h < 3; h++) {
          let blacklistk = 5.0;
          let bufferW = 4.0;
          let videoL = true;
          let headere = 5.0;
          let indicatorC = String.fromCharCode(97,117,100,105,98,105,108,105,116,121,0);
         stationa = headere < 90.94;
         blacklistk *= (parseFloat(`${(videoL ? 1 : 5) / (Math.max(2, parseInt(`${blacklistk}`)))}`));
         bufferW += parseFloat(`${parseInt(`${bufferW}`)}`);
         videoL = indicatorC.length <= 64 && videoL;
         headere /= Math.max((String.fromCharCode(87,0) == indicatorC ? parseInt(`${bufferW}`) : indicatorC.length), 2);
      }
      for (let i = 0; i < 2; i++) {
         stationa = arrowq <= 20.83;
      }
       let tooltipsw = 4.0;
       let bellV = 3.0;
      for (let v = 0; v < 2; v++) {
          let annern = 0.0;
          let animationj = String.fromCharCode(97,117,116,111,117,112,100,97,116,101,0);
         bellV /= Math.max(3, animationj.length);
         annern *= parseFloat(`${1 - parseInt(`${annern}`)}`);
         animationj = `${parseInt(`${annern}`) + 3}`;
      }
      for (let k = 0; k < 2; k++) {
         index2.push(((stationa ? 4 : 3) >> (Math.min(Math.abs(parseInt(`${tooltipsw}`)), 4))));
      }
          let hejiI = String.fromCharCode(98,117,98,98,108,101,115,0);
         index2 = [((stationa ? 1 : 5) - parseInt(`${arrowq}`))];
         hejiI += `${hejiI.length}`;
      if (1 <= (index2.length ^ 2)) {
         stationa = 88.51 >= arrowq;
      }
      borderlessL /= Math.max(tickedj >> (Math.min(4, Math.abs(2))), 3);
        

   while ((filledm.length / (Math.max(2, 2))) < 2) {
       let fillr = String.fromCharCode(109,97,110,116,105,115,115,97,115,0);
       let searchbarH = 1;
       let shootW = String.fromCharCode(112,108,97,116,101,97,117,0);
       let canvas2 = 4.0;
       let subsd = String.fromCharCode(114,101,102,115,0);
          let usernamen = 0;
          let topic3 = String.fromCharCode(114,101,99,101,105,118,101,0);
          let settingZ: Map<any, any> = new Map([[String.fromCharCode(105,103,110,111,114,105,110,103,0),950], [String.fromCharCode(115,97,108,116,101,100,0),473], [String.fromCharCode(99,111,110,116,101,110,116,108,101,115,115,0),912]]);
         canvas2 -= parseFloat(`${topic3.length << (Math.min(Math.abs(2), 3))}`);
         usernamen %= Math.max(usernamen / (Math.max(settingZ.size, 1)), 5);
         topic3 += `${settingZ.size}`;
      if (1 > shootW.length && 1 > fillr.length) {
         fillr = `${(String.fromCharCode(79,0) == subsd ? parseInt(`${canvas2}`) : subsd.length)}`;
      }
         searchbarH *= (fillr == String.fromCharCode(50,0) ? fillr.length : searchbarH);
         fillr += `${(String.fromCharCode(111,0) == shootW ? searchbarH : shootW.length)}`;
         canvas2 += parseFloat(`${2}`);
         shootW += "2";
      for (let p = 0; p < 2; p++) {
          let modelso = 2.0;
          let customa = String.fromCharCode(112,111,119,101,114,0);
          let zhubox: Map<any, any> = new Map([[String.fromCharCode(111,100,101,114,110,0),744], [String.fromCharCode(116,104,105,114,100,0),599], [String.fromCharCode(115,99,97,108,97,98,105,108,105,116,121,0),546]]);
          let theme7 = 1.0;
         subsd += `${parseInt(`${canvas2}`) / (Math.max(5, shootW.length))}`;
         modelso -= parseFloat(`${parseInt(`${modelso}`)}`);
         customa += `${(customa == String.fromCharCode(71,0) ? customa.length : zhubox.size)}`;
         zhubox = new Map([[`${modelso}`, 3]]);
         theme7 -= parseFloat(`${parseInt(`${modelso}`) % (Math.max(zhubox.size, 10))}`);
      }
      if (5 < (subsd.length ^ searchbarH)) {
         searchbarH /= Math.max(5, 2);
      }
         searchbarH |= fillr.length;
       let activeu: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,115,0),456], [String.fromCharCode(112,97,116,104,109,116,117,0),771], [String.fromCharCode(102,108,97,116,0),156]]);
      let helperj = 9732107 >= subsd.length;
      do {
          let logout_: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,107,101,121,0),String.fromCharCode(117,110,116,114,97,99,107,0)], [String.fromCharCode(115,116,97,114,116,0),String.fromCharCode(115,116,97,98,108,101,0)], [String.fromCharCode(112,111,114,116,97,108,0),String.fromCharCode(121,98,108,111,99,107,0)]]);
          let nterstitialh = String.fromCharCode(102,99,117,110,112,117,98,108,105,115,104,0);
          let router1 = false;
          let filledR = 1.0;
          let largeF: Map<any, any> = new Map([[String.fromCharCode(119,105,101,110,101,114,0),50], [String.fromCharCode(99,111,100,101,100,0),683], [String.fromCharCode(100,117,112,115,111,114,116,0),410]]);
         subsd += `${largeF.size}`;
         logout_.set(`${nterstitialh}`, nterstitialh.length);
         router1 = 65 == nterstitialh.length;
         filledR += ((router1 ? 5 : 3) * parseInt(`${filledR}`));
         largeF.set(nterstitialh, 2);
         if (helperj) {
            break;
         }
      } while (helperj && (subsd.length >= 3));
      if (subsd.includes(`${activeu.size}`)) {
          let currentB = String.fromCharCode(115,116,114,104,97,115,104,0);
          let maila = String.fromCharCode(101,120,112,101,114,105,109,101,110,116,97,108,0);
          let untickf: Map<any, any> = new Map([[String.fromCharCode(113,117,101,117,101,100,0),379], [String.fromCharCode(101,112,115,105,108,111,110,0),635]]);
         activeu = new Map([[fillr, 2 & currentB.length]]);
         currentB += `${maila.length << (Math.min(Math.abs(2), 4))}`;
         maila += `${untickf.size - 3}`;
         untickf.set(`${maila}`, maila.length);
      }
       let station8 = true;
         canvas2 *= parseFloat(`${activeu.size}`);
          let helper1 = String.fromCharCode(100,101,97,100,0);
          let langkeyN = String.fromCharCode(98,114,111,97,100,99,97,115,116,101,114,0);
         canvas2 *= parseFloat(`${helper1.length << (Math.min(3, Math.abs(searchbarH)))}`);
         helper1 = "3";
         langkeyN += `${langkeyN.length / (Math.max(1, 7))}`;
      tickedj -= 3 % (Math.max(9, tempM.length));
      break;
   }
      commentB <<= Math.min(1, Math.abs(2 - parseInt(`${reporth}`)));
      bellr /= Math.max((parseFloat(`${String.fromCharCode(119,0) == filledm ? filledm.length : tempM.length}`)), 1);
        StatusBar.setHidden(true);

      commentB |= parseInt(`${borderlessL}`);
      layoutm += `${parseInt(`${bellr}`)}`;
   if ((tickedj % 3) > 1) {
      favoriteQ += parseInt(`${favoriteQ}`) | parseInt(`${reporth}`);
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
       let grey6 = String.fromCharCode(98,97,110,0);
    let descu = String.fromCharCode(101,120,112,108,111,114,101,114,0);
    let filledO: Map<any, any> = new Map([[String.fromCharCode(108,97,110,99,122,111,115,0),747], [String.fromCharCode(97,115,115,101,114,116,115,0),41], [String.fromCharCode(100,101,108,97,116,101,100,0),272]]);
    let middleware9: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,112,97,115,115,0),138], [String.fromCharCode(117,110,99,111,100,101,100,0),343]]);
    let robotoV: Array<any> = [159, 376];
    let gesturesz = 4.0;
    let expandi: Map<any, any> = new Map([[String.fromCharCode(112,114,105,111,114,0),String.fromCharCode(115,109,97,108,108,0)], [String.fromCharCode(99,111,110,102,0),String.fromCharCode(101,116,119,111,114,107,0)], [String.fromCharCode(115,97,110,105,116,105,122,101,0),String.fromCharCode(97,116,116,101,109,112,116,101,100,0)]]);
    let castingA = true;
    let favoritef: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,114,101,115,115,111,114,0),967], [String.fromCharCode(117,116,116,111,110,0),108]]);
    let selectionS: Array<any> = [String.fromCharCode(114,101,112,108,97,121,103,97,105,110,0), String.fromCharCode(97,100,106,117,115,116,101,114,0)];
    let anytimet = 4.0;
    let infoN: Array<any> = [312, 252];
    let collection4 = 5.0;
    let downloadingO = String.fromCharCode(102,119,97,108,115,104,0);
    let loadingL = true;
      descu = `${grey6.length}`;
      infoN = [robotoV.length & 3];
       let moret = 5.0;
       let malaysiaC = String.fromCharCode(114,101,119,114,105,116,101,114,0);
         malaysiaC += `${(malaysiaC == String.fromCharCode(87,0) ? malaysiaC.length : parseInt(`${moret}`))}`;
      while ((3 ^ malaysiaC.length) == 1) {
          let singlem = 2;
          let areae: Array<any> = [779, 121, 534];
          let settingsz: Array<any> = [582, 737, 852];
         moret *= parseFloat(`${areae.length & 2}`);
         singlem += singlem | settingsz.length;
         areae.push(3);
         settingsz = [2 % (Math.max(5, settingsz.length))];
         break;
      }
         malaysiaC = "1";
      for (let y = 0; y < 1; y++) {
         moret *= parseFloat(`${2 - parseInt(`${moret}`)}`);
      }
      while ((2.58 + moret) == 1.30 && (malaysiaC.length ^ 5) == 1) {
          let darky = String.fromCharCode(103,101,116,108,97,121,111,117,116,0);
         moret -= parseFloat(`${malaysiaC.length >> (Math.min(1, Math.abs(parseInt(`${moret}`))))}`);
         darky += `${darky.length ^ 3}`;
         break;
      }
          let starQ = 3;
         malaysiaC += `${3 / (Math.max(6, malaysiaC.length))}`;
         starQ -= 3;
      selectionS = [(grey6.length >> (Math.min(3, Math.abs((castingA ? 3 : 5)))))];
       let unselectedL = String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114,0);
       let const_e6: Array<any> = [164, 679];
       let playG = 3;
         unselectedL = "2";
          let mathS = 5.0;
          let scoreX = String.fromCharCode(108,97,121,111,117,116,115,0);
          let thailand3: Array<any> = [55, 172, 710];
         const_e6.push(const_e6.length * playG);
         mathS *= parseFloat(`${thailand3.length * scoreX.length}`);
         scoreX += `${(String.fromCharCode(122,0) == scoreX ? scoreX.length : thailand3.length)}`;
         const_e6 = [const_e6.length >> (Math.min(Math.abs(3), 1))];
      if ((unselectedL.length * const_e6.length) < 2 && (const_e6.length * unselectedL.length) < 2) {
         unselectedL = `${playG ^ const_e6.length}`;
      }
         const_e6.push(playG);
         const_e6 = [unselectedL.length - 2];
      let description_tI = String.fromCharCode(98,104,113,0) == unselectedL;
      do {
         unselectedL = "2";
         if (description_tI) {
            break;
         }
      } while (((1 * const_e6.length) <= 4 || (unselectedL.length * 1) <= 5) && description_tI);
       let watchX = String.fromCharCode(112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,0);
         const_e6 = [1];
      robotoV = [1];
   while (2 > (expandi.size / 4) || 4 > (middleware9.size / (Math.max(4, expandi.size)))) {
      expandi = new Map([[`${middleware9.size}`, 2 | descu.length]]);
      break;
   }
   if (castingA || (infoN.length + 2) >= 1) {
      castingA = !castingA;
   }
   for (let g = 0; g < 1; g++) {
      castingA = 56 > filledO.size;
   }
   let b_positionL = robotoV.length >= 6906394;
   do {
      robotoV = [(1 & (castingA ? 3 : 5))];
      if (b_positionL) {
         break;
      }
   } while (b_positionL && (robotoV.includes(gesturesz)));
      robotoV.push(favoritef.size);
      castingA = robotoV.includes(castingA);
   let zhengpianS = 5110338 >= grey6.length;
   do {
       let handlerF: Array<any> = [561, 253];
       let alertV: Map<any, any> = new Map([[String.fromCharCode(104,119,100,101,118,105,99,101,0),444], [String.fromCharCode(100,105,99,101,0),656]]);
       let views8 = String.fromCharCode(114,101,103,101,110,101,114,97,116,101,0);
       let moreL = String.fromCharCode(99,114,101,100,105,98,105,108,105,116,121,0);
          let selectL = String.fromCharCode(118,111,116,101,100,0);
          let left_ = String.fromCharCode(101,120,116,101,110,115,105,111,110,115,0);
         alertV = new Map([[`${alertV.size}`, handlerF.length | 2]]);
         selectL = "3";
         left_ = `${left_.length}`;
      while (3 <= (alertV.size ^ moreL.length) && 3 <= (alertV.size ^ moreL.length)) {
         moreL += `${handlerF.length}`;
         break;
      }
      if (views8.length > moreL.length) {
         moreL += `${moreL.length ^ alertV.size}`;
      }
      while (views8 != String.fromCharCode(81,0) && moreL.length < 4) {
          let abouto = String.fromCharCode(109,117,108,116,105,112,108,101,120,0);
          let short_eW = 3;
          let predictionv = 0.0;
          let umengu = 4.0;
         views8 += `${alertV.size}`;
         abouto = `${(abouto == String.fromCharCode(51,0) ? abouto.length : parseInt(`${umengu}`))}`;
         short_eW -= parseInt(`${umengu}`) / 1;
         predictionv += 1 & short_eW;
         break;
      }
       let settingsF = 3;
         alertV.set(`${handlerF.length}`, handlerF.length);
         moreL = `${handlerF.length % (Math.max(views8.length, 4))}`;
         handlerF = [handlerF.length / (Math.max(moreL.length, 2))];
      for (let x = 0; x < 3; x++) {
         views8 += `${settingsF}`;
      }
         moreL += `${alertV.size * views8.length}`;
         views8 += `${moreL.length % (Math.max(9, settingsF))}`;
      while (handlerF.length == views8.length) {
         views8 = `${settingsF / 1}`;
         break;
      }
      grey6 += `${1 << (Math.min(5, descu.length))}`;
      if (zhengpianS) {
         break;
      }
   } while (zhengpianS && (!grey6.endsWith(`${robotoV.length}`)));
   for (let y = 0; y < 3; y++) {
      collection4 += (parseFloat(`${1 / (Math.max(8, (castingA ? 4 : 2)))}`));
   }
      expandi = new Map([[`${robotoV.length}`, 2 / (Math.max(5, robotoV.length))]]);
   let acceptedE = infoN.length >= 7110758;
   do {
       let foundq = true;
          let reminderM = String.fromCharCode(114,111,119,115,0);
         foundq = ((reminderM.length << (Math.min(5, Math.abs((foundq ? reminderM.length : 43))))) <= 43);
          let logoutV = String.fromCharCode(101,109,117,101,100,103,101,0);
         foundq = !foundq;
         logoutV = `${logoutV.length}`;
      if (foundq) {
          let contextw = String.fromCharCode(115,121,110,111,110,121,109,0);
          let aboutd = 3.0;
         foundq = contextw.length < 30;
         contextw += `${parseInt(`${aboutd}`) + 3}`;
         aboutd += parseInt(`${aboutd}`) + parseInt(`${aboutd}`);
      }
      infoN.push(parseInt(`${anytimet}`) ^ 2);
      if (acceptedE) {
         break;
      }
   } while (acceptedE && (!robotoV.includes(infoN.length)));
      selectionS = [grey6.length];
      descu += `${2 / (Math.max(10, expandi.size))}`;
   while ((3 - filledO.size) <= 2 && (robotoV.length - 3) <= 2) {
       let rankr = String.fromCharCode(100,115,116,115,117,98,0);
       let viewerb = String.fromCharCode(104,101,118,99,100,115,112,0);
       let subsD: Array<any> = [266, 222, 867];
       let success6 = false;
         viewerb = `${subsD.length}`;
       let applee = String.fromCharCode(115,112,101,101,99,104,0);
      while (1 > (rankr.length ^ subsD.length) || (subsD.length ^ 1) > 5) {
          let animationE = String.fromCharCode(99,114,121,112,116,0);
          let projecta: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,105,98,117,116,101,115,0),String.fromCharCode(109,105,112,115,100,115,112,0)], [String.fromCharCode(99,111,108,108,101,99,116,105,111,110,115,0),String.fromCharCode(101,120,97,109,112,108,101,0)]]);
          let math2 = 3.0;
          let emptyM = 5.0;
          let internet8 = 4.0;
         rankr += `${applee.length & 3}`;
         animationE = "3";
         projecta.set(`${math2}`, parseInt(`${math2}`) + 2);
         emptyM -= parseInt(`${internet8}`) & projecta.size;
         internet8 -= parseFloat(`${parseInt(`${math2}`) * 1}`);
         break;
      }
      while (!applee.startsWith(viewerb)) {
         applee = `${viewerb.length}`;
         break;
      }
      for (let y = 0; y < 1; y++) {
         rankr = "1";
      }
      if (2 == applee.length) {
          let types4 = String.fromCharCode(112,114,101,100,105,99,97,116,101,0);
          let agreement4 = 0.0;
          let pressure0 = 3;
          let handler3 = 4.0;
          let giftY = 5;
         success6 = 7.17 == handler3 || 27 == pressure0;
         types4 += `${giftY | types4.length}`;
         agreement4 *= 1 + giftY;
         pressure0 |= types4.length;
         handler3 += types4.length;
      }
      while (!success6) {
         success6 = viewerb.length >= 22;
         break;
      }
         subsD = [rankr.length * 2];
      while (viewerb.endsWith(`${rankr.length}`)) {
          let yingT = String.fromCharCode(112,111,115,108,105,115,116,115,0);
          let matho = String.fromCharCode(112,108,105,115,116,0);
          let megaphoneP = 1;
          let private_qrd: Array<any> = [750, 883, 21];
          let stations6 = 3.0;
         viewerb = `${viewerb.length}`;
         yingT = `${1 - private_qrd.length}`;
         matho += `${private_qrd.length}`;
         megaphoneP %= Math.max(2, (String.fromCharCode(104,0) == matho ? private_qrd.length : matho.length));
         stations6 *= parseFloat(`${3}`);
         break;
      }
      for (let f = 0; f < 2; f++) {
          let appsB = true;
          let kickk = String.fromCharCode(110,111,100,111,119,110,0);
         rankr += `${applee.length}`;
         appsB = kickk.length > 44 || !appsB;
         kickk = `${3 << (Math.min(2, kickk.length))}`;
      }
      if (2 < applee.length) {
          let philippinesy = 0;
          let short_ie4: Array<any> = [String.fromCharCode(107,101,121,119,111,114,100,115,0), String.fromCharCode(102,99,104,111,119,110,0), String.fromCharCode(105,110,102,111,108,100,101,114,0)];
         applee += `${1 ^ subsD.length}`;
         philippinesy |= philippinesy;
         short_ie4 = [philippinesy & short_ie4.length];
      }
         viewerb = `${applee.length + rankr.length}`;
      filledO = new Map([[`${infoN.length}`, parseInt(`${gesturesz}`) % (Math.max(9, infoN.length))]]);
      break;
   }
   let c_playerL = expandi.size <= 9712595;
   do {
      expandi = new Map([[`${infoN.length}`, 3 / (Math.max(1, infoN.length))]]);
      if (c_playerL) {
         break;
      }
   } while (c_playerL && (2 <= (5 * expandi.size)));
   let dropdownH = 7868992 <= infoN.length;
   do {
       let sheet6 = 5.0;
       let brightnesse = String.fromCharCode(97,110,103,117,108,97,114,0);
       let langj = 4.0;
       let recommendationM = false;
       let abouth = true;
      if (5.66 == (1.88 * sheet6)) {
         sheet6 /= Math.max((parseFloat(`${(abouth ? 4 : 3) % (Math.max(parseInt(`${sheet6}`), 7))}`)), 5);
      }
      let targeth = 6295457.0 <= langj;
      do {
         langj -= ((recommendationM ? 3 : 5));
         if (targeth) {
            break;
         }
      } while (targeth && (!brightnesse.startsWith(`${langj}`)));
         langj /= Math.max(parseInt(`${langj}`) >> (Math.min(5, Math.abs(1))), 5);
         recommendationM = brightnesse == String.fromCharCode(71,0);
      if (2 == (3 * parseInt(`${sheet6}`)) || 2.81 == (sheet6 * 3.58)) {
          let unselected8: Array<any> = [749, 820];
          let interstitialu = 1.0;
         sheet6 += parseFloat(`${2}`);
         unselected8 = [3 << (Math.min(Math.abs(parseInt(`${interstitialu}`)), 5))];
         interstitialu *= parseInt(`${interstitialu}`) + unselected8.length;
      }
         abouth = !recommendationM;
      for (let z = 0; z < 2; z++) {
         recommendationM = (!recommendationM ? abouth : !recommendationM);
      }
         brightnesse += `${((recommendationM ? 2 : 1) / (Math.max((abouth ? 2 : 4), 2)))}`;
          let bannere = String.fromCharCode(111,112,117,115,0);
         recommendationM = brightnesse.length < 47;
         bannere = `${bannere.length / 3}`;
          let xvodB = 1.0;
          let benefit7 = String.fromCharCode(118,97,114,120,104,0);
          let skipt = 1.0;
         sheet6 /= Math.max(2, parseFloat(`${3}`));
         xvodB /= Math.max(4, parseFloat(`${parseInt(`${skipt}`)}`));
         benefit7 = `${parseInt(`${skipt}`) & benefit7.length}`;
       let loginn = String.fromCharCode(115,105,110,100,101,120,0);
      while (langj == 3.8) {
          let points = 5.0;
         langj -= ((recommendationM ? 1 : 2) % (Math.max(4, parseInt(`${langj}`))));
         points /= Math.max(parseFloat(`${3 | parseInt(`${points}`)}`), 1);
         break;
      }
         sheet6 += parseFloat(`${loginn.length}`);
          let servicex = String.fromCharCode(110,111,102,105,116,105,99,97,116,105,111,110,0);
          let ajaxd = 1;
          let megaphoneG = String.fromCharCode(108,105,110,117,120,0);
         recommendationM = langj >= megaphoneG.length;
         servicex += `${servicex.length / (Math.max(2, ajaxd))}`;
         ajaxd >>= Math.min(servicex.length, 4);
         megaphoneG = `${(String.fromCharCode(104,0) == servicex ? servicex.length : ajaxd)}`;
         brightnesse = `${parseInt(`${sheet6}`) + 2}`;
      infoN.push(middleware9.size);
      if (dropdownH) {
         break;
      }
   } while ((infoN.length >= 4) && dropdownH);
   for (let o = 0; o < 1; o++) {
       let modelsz = String.fromCharCode(105,115,116,115,0);
         modelsz += `${(String.fromCharCode(99,0) == modelsz ? modelsz.length : modelsz.length)}`;
         modelsz += `${2 >> (Math.min(3, modelsz.length))}`;
         modelsz = "1";
      infoN.push(3);
   }
      filledO.set(`${gesturesz}`, descu.length);
   while (5 > (5 & robotoV.length)) {
      middleware9.set(`${castingA}`, 2);
      break;
   }
   while (2 > infoN.length) {
      infoN.push(expandi.size >> (Math.min(Math.abs(3), 1)));
      break;
   }
   let v_playere = filledO.size <= 7027001;
   do {
       let clubU: Map<any, any> = new Map([[String.fromCharCode(109,105,110,105,109,97,0),834], [String.fromCharCode(109,97,105,110,110,101,116,115,0),397]]);
       let commenta = String.fromCharCode(105,102,111,114,109,97,116,0);
       let shootg = String.fromCharCode(115,104,105,102,116,101,100,0);
       let collectionQ: Map<any, any> = new Map([[String.fromCharCode(115,110,111,119,100,97,116,97,0),697], [String.fromCharCode(115,101,116,116,108,105,110,103,0),371], [String.fromCharCode(101,118,101,114,121,98,111,100,121,0),114]]);
       let readQ = 2.0;
      for (let c = 0; c < 2; c++) {
         clubU.set(`${readQ}`, parseInt(`${readQ}`));
      }
      if (!commenta.includes(`${collectionQ.size}`)) {
         commenta = `${parseInt(`${readQ}`) / (Math.max(3, 7))}`;
      }
          let rulesk = 2.0;
          let transferw = 0.0;
          let spinner9 = true;
         collectionQ.set(`${rulesk}`, parseInt(`${rulesk}`));
         transferw -= (parseFloat(`${(spinner9 ? 2 : 4) << (Math.min(Math.abs(parseInt(`${transferw}`)), 5))}`));
         spinner9 = transferw <= 85.55;
          let eactO = String.fromCharCode(116,111,109,98,117,102,0);
          let guideg: Array<any> = [629, 274, 673];
          let upgradec: Array<any> = [725, 688, 271];
         readQ -= parseFloat(`${guideg.length & clubU.size}`);
         eactO += `${eactO.length}`;
         guideg.push(upgradec.length << (Math.min(Math.abs(2), 5)));
         upgradec = [upgradec.length];
         commenta = "1";
       let club1 = String.fromCharCode(100,111,115,100,97,116,101,0);
       let viewsX = String.fromCharCode(97,114,99,104,105,116,101,99,116,117,114,101,0);
         shootg += `${collectionQ.size >> (Math.min(1, Math.abs(parseInt(`${readQ}`))))}`;
         readQ -= parseFloat(`${commenta.length / (Math.max(shootg.length, 7))}`);
          let zhengpianw = 0.0;
         readQ -= parseFloat(`${commenta.length / (Math.max(3, 9))}`);
         zhengpianw /= Math.max(2, parseInt(`${zhengpianw}`));
      if (!commenta.startsWith(viewsX)) {
         commenta = `${shootg.length % (Math.max(9, commenta.length))}`;
      }
      while (viewsX.length == collectionQ.size) {
         collectionQ.set(commenta, 3 / (Math.max(4, club1.length)));
         break;
      }
         readQ += parseFloat(`${collectionQ.size >> (Math.min(Math.abs(1), 4))}`);
          let shrinkg = 3.0;
          let awayP = String.fromCharCode(99,111,110,116,101,110,116,105,111,110,0);
         commenta += `${clubU.size % 3}`;
         shrinkg *= parseFloat(`${2 * awayP.length}`);
         awayP += `${awayP.length}`;
         viewsX += "1";
      let friendsP = clubU.size <= 5239420;
      do {
         clubU = new Map([[`${collectionQ.size}`, viewsX.length]]);
         if (friendsP) {
            break;
         }
      } while (friendsP && (clubU.get(`${collectionQ.size}`) != null));
      filledO.set(`${castingA}`, 1);
      if (v_playere) {
         break;
      }
   } while (v_playere && (!castingA));
   for (let f = 0; f < 2; f++) {
      downloadingO = `${filledO.size | selectionS.length}`;
   }
   if (3 < middleware9.size) {
       let analyticsk = true;
       let privilege6 = String.fromCharCode(111,110,116,111,0);
      if (privilege6.includes(`${analyticsk}`)) {
         privilege6 += `${(privilege6 == String.fromCharCode(53,0) ? (analyticsk ? 4 : 1) : privilege6.length)}`;
      }
          let benefitq = 0.0;
          let floaterP = 2;
         analyticsk = privilege6 == String.fromCharCode(77,0) || floaterP <= 1;
         benefitq /= Math.max(parseInt(`${benefitq}`), 5);
         floaterP *= parseInt(`${benefitq}`);
      if (!privilege6.includes(`${analyticsk}`)) {
         analyticsk = privilege6.length <= 25;
      }
         analyticsk = privilege6.length >= 77;
      if (analyticsk && 2 <= privilege6.length) {
         analyticsk = (65 <= ((analyticsk ? 65 : privilege6.length) % (Math.max(privilege6.length, 4))));
      }
      while (privilege6.length == 5) {
         analyticsk = !analyticsk;
         break;
      }
      descu = `${descu.length}`;
   }
   while (grey6.startsWith(`${expandi.size}`)) {
       let inviteX = String.fromCharCode(112,114,111,99,101,115,115,0);
          let nterstitiale = String.fromCharCode(118,97,114,105,97,110,116,115,0);
          let searchbarD = String.fromCharCode(103,101,110,99,102,103,115,0);
          let anythinkP = String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,0);
         inviteX = `${searchbarD.length | 2}`;
         nterstitiale = "1";
         searchbarD = `${anythinkP.length}`;
         anythinkP = `${nterstitiale.length / (Math.max(anythinkP.length, 10))}`;
         inviteX = `${inviteX.length}`;
         inviteX = `${inviteX.length * 1}`;
      grey6 += `${infoN.length ^ 1}`;
      break;
   }
   while (3 > (favoritef.size ^ 3)) {
      favoritef = new Map([[grey6, 1]]);
      break;
   }
      castingA = selectionS.length <= 41 && downloadingO.length <= 41;

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
       let zhubo9 = 4.0;
    let settingV: Map<any, any> = new Map([[String.fromCharCode(115,101,101,0),String.fromCharCode(115,101,116,116,105,116,108,101,0)], [String.fromCharCode(110,111,110,109,117,108,116,0),String.fromCharCode(97,99,116,111,114,115,0)], [String.fromCharCode(105,95,57,54,95,101,109,109,105,110,116,114,105,110,0),String.fromCharCode(102,111,111,0)]]);
    let sportsT = false;
    let guidei = 4;
    let linek: Map<any, any> = new Map([[String.fromCharCode(112,105,118,111,116,0),471], [String.fromCharCode(117,116,105,108,105,116,105,101,115,0),445]]);
    let step_ = true;
    let pauseR = String.fromCharCode(115,111,108,105,100,105,116,121,0);
    let stepX = 4.0;
    let largeE: Map<any, any> = new Map([[String.fromCharCode(97,115,115,101,115,115,109,101,110,116,0),String.fromCharCode(112,97,114,97,109,101,116,114,105,122,101,100,0)], [String.fromCharCode(116,104,114,101,97,100,105,110,103,0),String.fromCharCode(97,110,110,111,116,97,116,101,0)], [String.fromCharCode(115,101,114,105,97,108,105,122,105,110,103,95,55,95,55,56,0),String.fromCharCode(97,118,117,116,105,108,114,101,115,0)]]);
    let long_gu = 1;
    let r_imageS = String.fromCharCode(99,111,99,111,115,100,120,0);
      zhubo9 /= Math.max(parseFloat(`${pauseR.length}`), 2);
   let helperO = settingV.size >= 5886729;
   do {
      settingV = new Map([[`${guidei}`, guidei - 3]]);
      if (helperO) {
         break;
      }
   } while ((Array.from(settingV.values()).includes(zhubo9)) && helperO);
   if (step_) {
      stepX /= Math.max((parseFloat(`${(sportsT ? 5 : 1)}`)), 1);
   }
   for (let m = 0; m < 2; m++) {
       let upgrade2 = String.fromCharCode(112,111,119,101,114,102,117,108,0);
          let expandF = String.fromCharCode(115,110,97,112,104,111,116,0);
          let style_ = 5.0;
         upgrade2 += `${parseInt(`${style_}`)}`;
         expandF += `${expandF.length}`;
         style_ += expandF.length | 2;
      if (upgrade2 != upgrade2) {
          let entryH = 5.0;
          let bannerD = 5.0;
          let sliderD = 5.0;
         upgrade2 = `${parseInt(`${entryH}`) ^ 2}`;
         entryH += parseInt(`${bannerD}`) * 3;
         bannerD /= Math.max(3, parseInt(`${sliderD}`));
      }
         upgrade2 = `${upgrade2.length % 2}`;
      pauseR += `${settingV.size / (Math.max(2, 9))}`;
   }
   if (sportsT) {
      sportsT = guidei >= 37;
   }
       let fieldM = String.fromCharCode(115,105,122,101,109,109,0);
          let castg = 1;
         fieldM = "1";
         castg -= castg * castg;
       let profileK = 0.0;
       let detailst = 3.0;
         detailst += parseFloat(`${parseInt(`${profileK}`) << (Math.min(Math.abs(2), 5))}`);
      zhubo9 /= Math.max((parseFloat(`${(step_ ? 4 : 4) - settingV.size}`)), 5);
      step_ = pauseR.length < 35 && sportsT;
       let injuryK = String.fromCharCode(115,119,97,98,0);
       let scorel = false;
       let button1: Map<any, any> = new Map([[String.fromCharCode(113,95,57,51,95,99,111,110,102,105,103,117,114,97,116,105,111,110,0),String.fromCharCode(101,114,97,115,117,114,101,0)], [String.fromCharCode(115,116,114,105,112,0),String.fromCharCode(100,121,110,97,109,105,99,0)], [String.fromCharCode(100,115,116,114,101,97,109,0),String.fromCharCode(111,102,102,101,114,0)]]);
         injuryK += `${button1.size * injuryK.length}`;
      if (3 > (button1.size >> (Math.min(Math.abs(1), 1)))) {
          let baidu9 = 5.0;
          let settingsx = 4.0;
          let nextl = String.fromCharCode(115,111,99,107,101,116,115,0);
          let update_hfP = 0.0;
          let targetl = 4.0;
         button1.set(injuryK, (injuryK == String.fromCharCode(121,0) ? injuryK.length : parseInt(`${baidu9}`)));
         baidu9 += 1;
         settingsx /= Math.max(4, (parseFloat(`${nextl == String.fromCharCode(122,0) ? nextl.length : parseInt(`${settingsx}`)}`)));
         update_hfP -= nextl.length;
         targetl /= Math.max(4, parseFloat(`${nextl.length}`));
      }
          let hejif = String.fromCharCode(100,111,99,115,0);
         button1 = new Map([[`${button1.size}`, (1 % (Math.max(10, (scorel ? 4 : 4))))]]);
         hejif += `${(hejif == String.fromCharCode(100,0) ? hejif.length : hejif.length)}`;
         scorel = !scorel;
         scorel = !scorel;
      for (let f = 0; f < 3; f++) {
          let whitea = String.fromCharCode(97,99,118,112,0);
         scorel = !scorel;
         whitea = `${whitea.length + whitea.length}`;
      }
         button1 = new Map([[`${scorel}`, 2 + injuryK.length]]);
          let routern = 5.0;
          let assistJ = 4.0;
         button1 = new Map([[injuryK, (String.fromCharCode(87,0) == injuryK ? (scorel ? 1 : 3) : injuryK.length)]]);
         routern += parseInt(`${assistJ}`);
         assistJ *= 2;
      if (injuryK.includes(`${button1.size}`)) {
         injuryK += "1";
      }
      largeE.set(`${sportsT}`, settingV.size);
   if (2 < settingV.size || 5 < (2 - settingV.size)) {
      settingV.set(`${long_gu}`, 1 & long_gu);
   }
       let sportsX = String.fromCharCode(110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,0);
      for (let f = 0; f < 2; f++) {
         sportsX = `${sportsX.length}`;
      }
          let routerk = 0;
          let bootsplashl: Array<any> = [684, 705];
          let foundJ = String.fromCharCode(112,105,120,108,101,116,0);
         sportsX = `${2 - bootsplashl.length}`;
         routerk += 1;
         bootsplashl.push((String.fromCharCode(119,0) == foundJ ? foundJ.length : routerk));
       let settingsH = String.fromCharCode(115,99,116,112,99,111,110,110,0);
      long_gu %= Math.max(settingV.size, 1);
   if (1 > guidei) {
      guidei %= Math.max(((step_ ? 5 : 1) % (Math.max(linek.size, 8))), 4);
   }
   let actionsI = String.fromCharCode(111,55,54,48,109,119,122,112,57,0) == pauseR;
   do {
      pauseR = `${long_gu | 2}`;
      if (actionsI) {
         break;
      }
   } while ((!pauseR.startsWith(`${largeE.size}`)) && actionsI);
   for (let r = 0; r < 3; r++) {
      settingV.set(`${step_}`, linek.size & 3);
   }
   for (let u = 0; u < 2; u++) {
       let leftE = true;
       let componentg = false;
      if (componentg) {
          let benefitC = 1.0;
          let ewardedT = 4.0;
          let expandy = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,0);
          let hookQ = 1.0;
         leftE = !leftE && 64.94 < ewardedT;
         benefitC *= parseFloat(`${parseInt(`${hookQ}`) | parseInt(`${benefitC}`)}`);
         ewardedT /= Math.max(3, parseFloat(`${parseInt(`${hookQ}`) % (Math.max(expandy.length, 1))}`));
         expandy = `${1 % (Math.max(2, parseInt(`${hookQ}`)))}`;
      }
      if (!leftE) {
         componentg = (componentg ? leftE : !componentg);
      }
          let stats1 = String.fromCharCode(100,105,103,101,115,116,98,121,110,105,100,0);
         leftE = (((!componentg ? stats1.length : 4) - stats1.length) <= 4);
          let downloadedq: Array<any> = [949, 613, 820];
          let detailse = String.fromCharCode(99,104,97,110,103,101,100,0);
         componentg = (!leftE ? !componentg : leftE);
         downloadedq.push(detailse.length);
         detailse = `${1 | detailse.length}`;
      for (let a = 0; a < 3; a++) {
         leftE = componentg;
      }
      for (let d = 0; d < 3; d++) {
          let reducerp = String.fromCharCode(112,105,101,0);
          let overL = false;
          let mathW = 5;
          let eactc = String.fromCharCode(110,101,119,115,0);
         componentg = reducerp.length > 67;
         reducerp = "2";
         overL = !overL;
         mathW -= (String.fromCharCode(99,0) == eactc ? eactc.length : (overL ? 1 : 5));
      }
      step_ = linek.size == 10;
   }
      sportsT = (linek.size & guidei) < 61;
   while ((zhubo9 / 3.100) >= 3.86 || 4.93 >= (zhubo9 / 3.100)) {
      largeE = new Map([[`${long_gu}`, 1 - pauseR.length]]);
      break;
   }
   for (let k = 0; k < 1; k++) {
      sportsT = parseFloat(`${linek.size}`) <= stepX;
   }
      step_ = !sportsT;
      step_ = linek.size < 6 || 6 < settingV.size;
      largeE.set(pauseR, linek.size << (Math.min(Math.abs(1), 3)));
   if ((5 << (Math.min(5, pauseR.length))) >= 4 || 5 >= (long_gu << (Math.min(pauseR.length, 2)))) {
      pauseR += `${linek.size << (Math.min(2, Math.abs(parseInt(`${stepX}`))))}`;
   }
      largeE = new Map([[`${settingV.size}`, 2]]);

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
       let canvas1: Map<any, any> = new Map([[String.fromCharCode(103,114,97,121,0),902], [String.fromCharCode(110,116,112,0),255], [String.fromCharCode(114,101,110,100,101,114,101,100,0),84]]);
    let tickedY = true;
    let zhengpianY = String.fromCharCode(108,117,97,0);
    let cornerJ = 4.0;
    let viewerN = String.fromCharCode(102,116,118,112,110,111,100,101,0);
    let ajaxA = String.fromCharCode(114,97,110,107,105,110,103,0);
    let renewm = String.fromCharCode(99,116,105,109,101,0);
    let sliderE = String.fromCharCode(112,117,98,108,105,99,105,116,121,0);
    let main_rU = 1.0;
    let send2 = String.fromCharCode(97,110,111,116,104,101,114,0);
    let changeH = String.fromCharCode(100,118,118,105,100,101,111,0);
    let chate = 3.0;
    let scorew = String.fromCharCode(105,110,108,105,110,101,100,0);
    let humidityc: Array<any> = [822, 776];
    let kickm = true;
   while (sliderE.startsWith(`${chate}`)) {
      chate += parseInt(`${main_rU}`);
      break;
   }
      canvas1.set(renewm, zhengpianY.length);
      send2 += `${(2 - (tickedY ? 1 : 2))}`;
   let found5 = ajaxA == String.fromCharCode(119,111,52,98,120,107,119,111,120,109,0);
   do {
      ajaxA += `${1 >> (Math.min(3, ajaxA.length))}`;
      if (found5) {
         break;
      }
   } while ((4.52 < (4.82 + chate) && 4.77 < (4.82 + chate)) && found5);
   while (changeH.endsWith(`${tickedY}`)) {
       let sentryJ: Array<any> = [703, 40];
       let configure7 = true;
          let layoutN: Map<any, any> = new Map([[String.fromCharCode(101,110,99,97,112,0),String.fromCharCode(114,100,111,112,116,0)], [String.fromCharCode(105,110,116,114,105,110,115,105,99,0),String.fromCharCode(117,116,118,105,100,101,111,100,115,112,0)], [String.fromCharCode(111,112,115,0),String.fromCharCode(120,120,99,104,0)]]);
          let sportJ: Map<any, any> = new Map([[String.fromCharCode(116,104,114,111,116,116,108,101,114,0),184], [String.fromCharCode(100,101,108,105,109,0),486], [String.fromCharCode(112,97,99,101,100,0),36]]);
         sentryJ = [1 * layoutN.size];
         layoutN = new Map([[`${sportJ.size}`, sportJ.size << (Math.min(Math.abs(2), 2))]]);
      let penaltyK = configure7 ? !configure7 : configure7;
      do {
          let componentN = String.fromCharCode(114,97,110,115,102,111,114,109,101,114,0);
          let crossb = 4.0;
         configure7 = (((configure7 ? 78 : sentryJ.length) / (Math.max(sentryJ.length, 6))) <= 78);
         componentN = `${componentN.length | 1}`;
         crossb /= Math.max(parseFloat(`${parseInt(`${crossb}`)}`), 2);
         if (penaltyK) {
            break;
         }
      } while (penaltyK && ((2 * sentryJ.length) == 2 && sentryJ.length == 2));
          let c_countW = 1.0;
          let baiduV = 4;
          let backa = 2.0;
         sentryJ = [(baiduV * (configure7 ? 1 : 2))];
         c_countW += parseFloat(`${1 ^ parseInt(`${backa}`)}`);
         baiduV >>= Math.min(Math.abs(2), 3);
         backa /= Math.max(4, parseInt(`${backa}`) + 3);
          let brightness9 = String.fromCharCode(117,117,105,100,117,115,109,116,0);
          let minimizeX = 5;
          let upgradeU = 2.0;
         configure7 = brightness9.length == 43;
         brightness9 = "3";
         minimizeX *= minimizeX / (Math.max(parseInt(`${upgradeU}`), 6));
         upgradeU -= parseInt(`${upgradeU}`);
      for (let h = 0; h < 2; h++) {
          let footballo = String.fromCharCode(108,101,109,111,110,0);
          let headerb: Map<any, any> = new Map([[String.fromCharCode(97,114,98,105,116,114,97,114,121,0),602], [String.fromCharCode(108,108,110,119,0),7], [String.fromCharCode(100,101,99,114,101,109,101,110,116,0),434]]);
          let update_asc = 5.0;
          let suggestionG: Map<any, any> = new Map([[String.fromCharCode(102,99,116,108,0),false ], [String.fromCharCode(109,97,105,110,100,98,0),true ], [String.fromCharCode(99,117,114,114,101,110,100,0),true ]]);
         configure7 = 44 >= suggestionG.size;
         footballo = `${footballo.length ^ 3}`;
         headerb = new Map([[`${headerb.size}`, footballo.length]]);
         update_asc += parseInt(`${update_asc}`) * headerb.size;
         suggestionG.set(`${update_asc}`, headerb.size);
      }
      while (configure7) {
         configure7 = sentryJ.length <= 74 && configure7;
         break;
      }
      tickedY = (canvas1.size * send2.length) >= 35;
      break;
   }
      cornerJ /= Math.max(1 * changeH.length, 5);
       let completel = 0.0;
       let filterp = String.fromCharCode(114,101,109,97,112,112,101,100,0);
         filterp = `${parseInt(`${completel}`) | 3}`;
         completel *= filterp.length + 2;
      for (let n = 0; n < 3; n++) {
          let megaphones: Array<any> = [String.fromCharCode(98,114,111,97,100,99,97,115,116,0), String.fromCharCode(97,118,105,103,97,116,105,111,110,95,116,95,50,54,0)];
          let downloadD = String.fromCharCode(102,97,99,101,98,111,111,107,0);
          let filterj = String.fromCharCode(105,111,101,114,114,110,111,109,101,109,0);
         completel /= Math.max(1, 3);
         megaphones.push((downloadD == String.fromCharCode(55,0) ? megaphones.length : downloadD.length));
         filterj += `${megaphones.length}`;
      }
          let halfi = true;
         filterp = "3";
         halfi = (!halfi ? !halfi : !halfi);
         completel -= (String.fromCharCode(54,0) == filterp ? parseInt(`${completel}`) : filterp.length);
      while ((filterp.length >> (Math.min(Math.abs(3), 1))) > 3 || (completel / (Math.max(2, filterp.length))) > 2.48) {
         filterp = `${parseInt(`${completel}`) - 1}`;
         break;
      }
      tickedY = filterp == sliderE;
       let ewardedN = String.fromCharCode(114,101,97,100,113,0);
      if (!ewardedN.startsWith(ewardedN)) {
         ewardedN += `${2 | ewardedN.length}`;
      }
      if (3 > ewardedN.length) {
         ewardedN += `${(ewardedN == String.fromCharCode(84,0) ? ewardedN.length : ewardedN.length)}`;
      }
      for (let j = 0; j < 3; j++) {
         ewardedN = `${ewardedN.length ^ ewardedN.length}`;
      }
      tickedY = (36 < (canvas1.size % (Math.max(7, (!tickedY ? canvas1.size : 7)))));
   let singaporeM = sliderE == String.fromCharCode(109,48,100,52,100,119,115,0);
   do {
       let malaysiaS = String.fromCharCode(99,111,110,115,117,109,101,114,95,122,95,54,52,0);
         malaysiaS = `${malaysiaS.length}`;
      while (malaysiaS.includes(malaysiaS)) {
         malaysiaS = `${malaysiaS.length | malaysiaS.length}`;
         break;
      }
          let whatsappp = String.fromCharCode(99,121,99,108,105,99,114,101,102,114,101,115,104,0);
         malaysiaS = `${whatsappp.length}`;
      sliderE = `${((tickedY ? 3 : 4) ^ 2)}`;
      if (singaporeM) {
         break;
      }
   } while (singaporeM && (sliderE.includes(`${zhengpianY.length}`)));
      canvas1 = new Map([[`${chate}`, parseInt(`${chate}`) >> (Math.min(sliderE.length, 5))]]);
      changeH += `${sliderE.length}`;
      changeH += "3";
   for (let b = 0; b < 3; b++) {
       let playR = String.fromCharCode(115,110,105,112,112,101,116,0);
       let orangeZ = String.fromCharCode(101,114,114,109,115,103,0);
       let with_lX: Map<any, any> = new Map([[String.fromCharCode(102,100,99,116,120,0),492], [String.fromCharCode(105,110,116,101,114,97,99,116,0),714], [String.fromCharCode(104,111,115,116,0),133]]);
          let modal3 = String.fromCharCode(104,119,109,97,112,0);
         with_lX.set(playR, playR.length);
         modal3 += `${modal3.length}`;
         orangeZ += `${playR.length}`;
      while (4 == playR.length) {
          let episodesi = String.fromCharCode(110,97,117,116,105,99,97,108,0);
          let t_lockz = String.fromCharCode(112,121,116,104,111,110,0);
          let searchbarh = 2.0;
         playR = `${episodesi.length}`;
         episodesi += `${parseInt(`${searchbarh}`)}`;
         t_lockz = `${(String.fromCharCode(114,0) == t_lockz ? t_lockz.length : parseInt(`${searchbarh}`))}`;
         break;
      }
      for (let m = 0; m < 3; m++) {
         playR += `${orangeZ.length}`;
      }
         orangeZ += `${(String.fromCharCode(114,0) == playR ? orangeZ.length : playR.length)}`;
         playR += `${with_lX.size << (Math.min(orangeZ.length, 2))}`;
      if (orangeZ.length > 1) {
          let history0 = 5;
         playR = `${(playR == String.fromCharCode(65,0) ? orangeZ.length : playR.length)}`;
         history0 |= 3 | history0;
      }
       let downloadedr: Array<any> = [650, 217];
       let rewindK: Array<any> = [568, 848, 807];
         playR += `${orangeZ.length ^ 3}`;
      main_rU *= 3 & changeH.length;
   }
   if (3.32 == main_rU) {
      ajaxA = `${parseInt(`${main_rU}`) & send2.length}`;
   }
   while (!tickedY) {
      chate += 3 | canvas1.size;
      break;
   }
   if (changeH == String.fromCharCode(49,0) || sliderE == String.fromCharCode(88,0)) {
      changeH += `${((tickedY ? 5 : 4) + 1)}`;
   }
   let vietnamP = cornerJ <= 6621024.0;
   do {
      cornerJ *= 2;
      if (vietnamP) {
         break;
      }
   } while (vietnamP && (cornerJ <= zhengpianY.length));
       let options4 = 0.0;
       let megaphoneF = 1.0;
       let malaysiak = 1;
      if ((megaphoneF + options4) > 5.76 || 4.58 > (5.76 + options4)) {
         options4 *= malaysiak / 2;
      }
      while (3.11 == (5.86 - options4) && (options4 - 5.86) == 5.99) {
         options4 *= 2 << (Math.min(Math.abs(parseInt(`${options4}`)), 2));
         break;
      }
      let main_fG = 8175916.0 >= megaphoneF;
      do {
         megaphoneF -= parseInt(`${options4}`);
         if (main_fG) {
            break;
         }
      } while (((2.10 + megaphoneF) == 2.91 && 2.99 == (megaphoneF + 2.10)) && main_fG);
      if (1.48 <= megaphoneF) {
          let context_ = String.fromCharCode(111,112,101,114,97,116,105,111,110,0);
          let settingsl = String.fromCharCode(99,111,110,110,101,99,116,105,111,110,99,98,0);
          let questR = String.fromCharCode(102,105,110,105,115,101,100,0);
         megaphoneF += 1 | parseInt(`${megaphoneF}`);
         context_ = `${context_.length}`;
         settingsl += `${1 + settingsl.length}`;
         questR = `${settingsl.length % (Math.max(context_.length, 8))}`;
      }
      for (let k = 0; k < 3; k++) {
         megaphoneF /= Math.max(3 / (Math.max(parseInt(`${options4}`), 4)), 4);
      }
         malaysiak &= parseInt(`${megaphoneF}`) << (Math.min(3, Math.abs(1)));
         malaysiak += 3;
      let dangery = megaphoneF <= 6747580.0;
      do {
          let analyticsX = 2.0;
          let zhengpian9 = 3.0;
         megaphoneF += parseInt(`${megaphoneF}`) - parseInt(`${options4}`);
         analyticsX -= parseFloat(`${parseInt(`${zhengpian9}`)}`);
         zhengpian9 /= Math.max(parseFloat(`${parseInt(`${zhengpian9}`) ^ parseInt(`${analyticsX}`)}`), 5);
         if (dangery) {
            break;
         }
      } while (dangery && (4.24 <= options4));
       let statisticsI = 3.0;
       let sentryx = 3.0;
      chate /= Math.max(parseInt(`${megaphoneF}`), 2);
      chate -= parseInt(`${main_rU}`);
       let unselectedt = String.fromCharCode(97,114,114,97,121,115,95,120,95,54,51,0);
       let whiteq: Map<any, any> = new Map([[String.fromCharCode(114,101,97,99,104,0),466], [String.fromCharCode(117,110,112,111,105,115,111,110,0),48]]);
       let lightC = String.fromCharCode(112,114,101,115,117,98,109,105,116,0);
       let shirtm = String.fromCharCode(109,111,110,111,116,111,110,105,99,0);
      if (2 == (unselectedt.length + whiteq.size)) {
         whiteq = new Map([[lightC, lightC.length / (Math.max(unselectedt.length, 8))]]);
      }
          let networkp = true;
          let frame_k17 = false;
          let orientationn = String.fromCharCode(97,100,106,97,99,101,110,116,0);
         whiteq.set(`${unselectedt}`, (String.fromCharCode(103,0) == unselectedt ? unselectedt.length : whiteq.size));
         networkp = !orientationn.includes(`${frame_k17}`);
         frame_k17 = orientationn.length <= 70;
         whiteq.set(shirtm, 1);
      if (lightC.length < whiteq.size) {
         whiteq.set(unselectedt, 3);
      }
      let playj = whiteq.size <= 6334697;
      do {
         whiteq.set(shirtm, shirtm.length & lightC.length);
         if (playj) {
            break;
         }
      } while (playj && (!lightC.includes(`${whiteq.size}`)));
      renewm += `${ajaxA.length}`;
   if (ajaxA.length > changeH.length) {
      changeH += `${changeH.length}`;
   }
   let floaterq = canvas1.size >= 8047533;
   do {
      canvas1.set(scorew, 2 << (Math.min(3, scorew.length)));
      if (floaterq) {
         break;
      }
   } while (floaterq && (!tickedY && 2 > (canvas1.size * 1)));
   if (1 > sliderE.length || send2.length > 1) {
      sliderE = `${1 % (Math.max(3, send2.length))}`;
   }
   for (let y = 0; y < 1; y++) {
       let matchesa = 5.0;
       let mappingn = 5;
       let carousel_ = true;
       let configurew = false;
       let edito = false;
         carousel_ = matchesa == 91.13;
       let umeng8: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,110,116,105,103,117,111,117,115,0),268], [String.fromCharCode(115,99,116,112,0),880], [String.fromCharCode(109,112,101,103,118,105,100,101,111,100,115,112,0),3]]);
       let filterjG: Map<any, any> = new Map([[String.fromCharCode(114,101,108,97,121,0),false ], [String.fromCharCode(115,105,109,112,108,101,0),false ], [String.fromCharCode(108,111,103,108,101,118,101,108,0),false ]]);
       let appsC = 5.0;
          let description_2jV = String.fromCharCode(100,101,108,101,103,97,116,105,111,110,0);
         matchesa *= parseFloat(`${filterjG.size}`);
         description_2jV = `${description_2jV.length * description_2jV.length}`;
         umeng8.set(`${edito}`, mappingn);
      let reducer3 = edito ? !edito : edito;
      do {
         edito = !edito;
         if (reducer3) {
            break;
         }
      } while (reducer3 && (5 < (umeng8.size + 3) || 3 < umeng8.size));
          let dangerQ: Array<any> = [String.fromCharCode(101,120,112,111,115,117,114,101,0), String.fromCharCode(104,112,101,108,0), String.fromCharCode(101,113,117,97,116,97,98,108,101,0)];
          let mailO = String.fromCharCode(98,97,99,107,103,114,111,117,110,100,105,110,103,0);
          let reducerN = String.fromCharCode(109,109,115,104,0);
         filterjG.set(`${dangerQ.length}`, 3);
         dangerQ = [reducerN.length];
         mailO += "3";
         reducerN = `${mailO.length / (Math.max(2, reducerN.length))}`;
         filterjG = new Map([[`${carousel_}`, 1]]);
          let fill5 = 3.0;
          let dangerV = String.fromCharCode(106,115,116,114,105,110,103,0);
          let y_titleP = 2.0;
         umeng8 = new Map([[`${carousel_}`, (parseInt(`${y_titleP}`) & (carousel_ ? 2 : 3))]]);
         fill5 /= Math.max(2, 3 >> (Math.min(4, Math.abs(parseInt(`${fill5}`)))));
         dangerV = `${parseInt(`${fill5}`) % (Math.max(dangerV.length, 5))}`;
         y_titleP += parseFloat(`${dangerV.length}`);
      let resendG = filterjG.size <= 5438291;
      do {
         filterjG = new Map([[`${mappingn}`, mappingn / 3]]);
         if (resendG) {
            break;
         }
      } while (resendG && ((2.20 - appsC) > 4.63 || 5 > (filterjG.size >> (Math.min(Math.abs(1), 2)))));
      while (configurew) {
          let contextl: Map<any, any> = new Map([[String.fromCharCode(104,117,102,102,109,97,110,0),79], [String.fromCharCode(105,110,116,101,114,97,99,116,111,114,0),855], [String.fromCharCode(109,105,100,101,113,117,97,108,105,122,101,114,0),269]]);
          let megaphonei = 0.0;
          let singapore2 = String.fromCharCode(111,112,116,115,0);
          let routerr = String.fromCharCode(99,111,117,110,116,105,110,103,0);
          let headerw = String.fromCharCode(121,111,102,102,115,101,116,0);
         configurew = umeng8.get(`${megaphonei}`) == null;
         contextl.set(`${routerr}`, routerr.length - contextl.size);
         megaphonei /= Math.max(parseFloat(`${headerw.length - 3}`), 1);
         singapore2 = `${singapore2.length}`;
         headerw += `${contextl.size / 2}`;
         break;
      }
      while ((filterjG.size | 4) > 1 && (filterjG.size | mappingn) > 4) {
          let acceptedq: Array<any> = [678, 665];
         mappingn >>= Math.min(5, Math.abs(((configurew ? 3 : 5) & umeng8.size)));
         acceptedq = [acceptedq.length + acceptedq.length];
         break;
      }
         mappingn |= 2;
         umeng8 = new Map([[`${filterjG.size}`, ((carousel_ ? 2 : 3) * 3)]]);
         mappingn %= Math.max(4, (2 * (edito ? 2 : 2)));
      sliderE += `${3 >> (Math.min(5, scorew.length))}`;
   }
      zhengpianY = `${parseInt(`${main_rU}`) ^ 2}`;
   while (!ajaxA.startsWith(`${viewerN.length}`)) {
      viewerN = "3";
      break;
   }
      tickedY = (zhengpianY.length & scorew.length) <= 89;
      zhengpianY += `${viewerN.length & 3}`;
   while (!sliderE.includes(`${tickedY}`)) {
       let soundW = String.fromCharCode(100,105,102,102,97,98,108,101,0);
         soundW = "2";
         soundW += "1";
      for (let u = 0; u < 2; u++) {
         soundW += `${(soundW == String.fromCharCode(88,0) ? soundW.length : soundW.length)}`;
      }
      tickedY = String.fromCharCode(52,0) == renewm;
      break;
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
       let oranger = 4.0;
    let l_viewH = String.fromCharCode(112,99,109,98,0);
    let sansh = 5.0;
    let membership8 = 0.0;
    let temperatureG = String.fromCharCode(110,101,120,116,108,0);
    let const_fT = String.fromCharCode(117,108,116,114,97,119,105,100,101,0);
    let combinet = String.fromCharCode(99,111,114,101,0);
    let private_y3 = 2;
    let combinex = String.fromCharCode(97,116,101,120,105,116,0);
    let found4 = 5;
    let inactivek: Array<any> = [String.fromCharCode(115,118,97,114,105,110,116,0), String.fromCharCode(115,111,99,114,101,97,116,101,0)];
   while (const_fT.endsWith(`${combinet.length}`)) {
       let matchR = String.fromCharCode(115,117,112,112,111,114,116,97,98,108,101,0);
       let playlistM = String.fromCharCode(109,101,116,97,100,97,116,97,115,0);
       let ajaxi = String.fromCharCode(97,118,102,105,108,116,101,114,0);
       let actions7 = String.fromCharCode(99,117,114,115,111,114,115,116,114,101,97,109,119,114,97,112,112,101,114,0);
       let taiwany = false;
         playlistM += `${ajaxi.length - playlistM.length}`;
      while (matchR.length < ajaxi.length) {
         matchR += "3";
         break;
      }
         taiwany = ajaxi.length < 35;
      for (let i = 0; i < 1; i++) {
         ajaxi += `${ajaxi.length / 3}`;
      }
      let favorites = taiwany ? !taiwany : taiwany;
      do {
         taiwany = actions7.length <= ajaxi.length;
         if (favorites) {
            break;
         }
      } while ((!ajaxi.startsWith(`${taiwany}`)) && favorites);
          let middlewareA = 4;
          let customh = 5.0;
         actions7 += `${playlistM.length}`;
         middlewareA |= 1;
         customh -= parseFloat(`${middlewareA * 3}`);
          let scoreY: Array<any> = [835, 359];
          let field7 = String.fromCharCode(114,103,98,116,101,115,116,0);
          let tickedA = String.fromCharCode(99,111,108,111,114,115,112,97,99,101,100,115,112,0);
         ajaxi = "1";
         scoreY.push((tickedA == String.fromCharCode(48,0) ? tickedA.length : scoreY.length));
         field7 += `${(String.fromCharCode(116,0) == field7 ? scoreY.length : field7.length)}`;
          let stats3 = String.fromCharCode(107,95,51,50,95,101,118,101,110,116,0);
          let matchesA = String.fromCharCode(98,101,122,101,108,0);
         playlistM += `${(String.fromCharCode(55,0) == playlistM ? playlistM.length : (taiwany ? 5 : 3))}`;
         stats3 = `${matchesA.length + 2}`;
         matchesA += "3";
         ajaxi += `${matchR.length | 3}`;
      for (let m = 0; m < 1; m++) {
          let bannerx: Map<any, any> = new Map([[String.fromCharCode(114,101,118,101,114,115,101,100,0),303], [String.fromCharCode(117,110,102,97,105,114,0),64], [String.fromCharCode(109,100,101,99,0),281]]);
          let sider = String.fromCharCode(102,97,97,110,105,100,99,116,0);
          let profilen = 2.0;
          let awayv = String.fromCharCode(114,103,98,116,111,121,118,0);
          let pressuree: Map<any, any> = new Map([[String.fromCharCode(98,108,111,119,102,105,115,104,0),218], [String.fromCharCode(117,110,105,115,119,97,112,0),887]]);
         taiwany = 100 == bannerx.size;
         bannerx = new Map([[awayv, parseInt(`${profilen}`) * 1]]);
         sider = `${pressuree.size}`;
         profilen -= parseInt(`${profilen}`) << (Math.min(sider.length, 2));
         awayv += `${sider.length}`;
         pressuree.set(awayv, (String.fromCharCode(107,0) == awayv ? awayv.length : parseInt(`${profilen}`)));
      }
      if (ajaxi != actions7) {
         actions7 = "3";
      }
         matchR = `${3 * playlistM.length}`;
          let eighteen2 = String.fromCharCode(110,101,119,101,115,116,0);
          let gemfilex = String.fromCharCode(111,118,101,114,118,105,101,119,0);
          let loadingj = 2;
         taiwany = String.fromCharCode(76,0) == ajaxi;
         eighteen2 = `${eighteen2.length}`;
         gemfilex = `${eighteen2.length >> (Math.min(1, gemfilex.length))}`;
         loadingj *= (String.fromCharCode(57,0) == gemfilex ? gemfilex.length : loadingj);
         matchR += "1";
          let orangea: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,114,97,110,100,0),647], [String.fromCharCode(115,104,97,114,101,103,114,111,117,112,0),203]]);
         taiwany = ajaxi.length <= orangea.size;
      const_fT += `${(const_fT == String.fromCharCode(54,0) ? parseInt(`${membership8}`) : const_fT.length)}`;
      break;
   }
   let wind1 = String.fromCharCode(53,109,101,50,112,107,55,0) == temperatureG;
   do {
      temperatureG = `${parseInt(`${membership8}`) % 2}`;
      if (wind1) {
         break;
      }
   } while ((!temperatureG.endsWith(`${l_viewH.length}`)) && wind1);
   let stats4 = 9745530 >= const_fT.length;
   do {
       let clockH: Array<any> = [924, 933, 212];
       let confirmationO = 1;
       let champion6 = String.fromCharCode(100,114,105,118,101,110,0);
       let setting2 = String.fromCharCode(116,111,100,97,121,0);
         confirmationO %= Math.max(5, champion6.length ^ clockH.length);
         clockH.push(setting2.length);
       let update_9G = String.fromCharCode(121,101,116,0);
      let select7 = update_9G == String.fromCharCode(110,103,113,54,106,109,121,97,122,57,0);
      do {
          let clubq = 4.0;
          let gestureB = String.fromCharCode(113,112,101,108,100,115,112,0);
         update_9G += `${parseInt(`${clubq}`) >> (Math.min(Math.abs(3), 3))}`;
         clubq += gestureB.length;
         gestureB = `${gestureB.length}`;
         if (select7) {
            break;
         }
      } while (select7 && (update_9G != String.fromCharCode(84,0) && champion6 == String.fromCharCode(109,0)));
      while (1 >= setting2.length && 1 >= update_9G.length) {
         setting2 = "2";
         break;
      }
          let search0: Array<any> = [342, 773];
          let selld = String.fromCharCode(102,95,50,52,0);
         update_9G += `${2 ^ setting2.length}`;
         search0 = [search0.length % (Math.max(selld.length, 2))];
         selld = `${search0.length - 1}`;
         confirmationO >>= Math.min(5, Math.abs(2 % (Math.max(10, update_9G.length))));
         setting2 += `${clockH.length + confirmationO}`;
          let middlewareI: Array<any> = [758, 35, 870];
         update_9G = `${clockH.length + 1}`;
         middlewareI = [middlewareI.length >> (Math.min(Math.abs(3), 1))];
      if ((1 % (Math.max(5, confirmationO))) >= 2) {
          let typingB = 2;
          let bottom9 = 2.0;
         confirmationO |= 2 & update_9G.length;
         typingB >>= Math.min(1, Math.abs(2));
         bottom9 -= typingB / (Math.max(parseInt(`${bottom9}`), 7));
      }
      let statsN = 5175663 <= champion6.length;
      do {
          let bottomO = true;
          let left9: Array<any> = [719, 989, 932];
         champion6 = `${3 / (Math.max(6, confirmationO))}`;
         bottomO = (53 == (left9.length << (Math.min(3, Math.abs((!bottomO ? left9.length : 53))))));
         if (statsN) {
            break;
         }
      } while (statsN && (setting2.length == 2));
      while (setting2 == update_9G) {
         update_9G = `${champion6.length}`;
         break;
      }
      const_fT = `${2 - parseInt(`${membership8}`)}`;
      if (stats4) {
         break;
      }
   } while (((membership8 + 4.41) <= 2.63 && 5.64 <= (4.41 + membership8)) && stats4);
      membership8 *= parseFloat(`${const_fT.length}`);
      l_viewH += `${2 + parseInt(`${membership8}`)}`;
       let turnU = String.fromCharCode(99,111,108,115,107,105,112,0);
       let soundV = 2.0;
       let injuryE: Array<any> = [String.fromCharCode(97,114,114,97,110,103,101,109,101,110,116,0), String.fromCharCode(99,114,101,97,116,105,110,103,0), String.fromCharCode(99,101,110,116,101,114,105,110,103,0)];
      while ((parseInt(`${soundV}`) * turnU.length) > 3) {
          let penaltyn: Array<any> = [715, 295];
          let store2 = 3.0;
         soundV *= parseFloat(`${injuryE.length}`);
         penaltyn = [parseInt(`${store2}`) * penaltyn.length];
         store2 -= parseFloat(`${parseInt(`${store2}`) % (Math.max(penaltyn.length, 9))}`);
         break;
      }
         soundV *= parseFloat(`${injuryE.length}`);
          let yingi = String.fromCharCode(98,105,110,104,101,120,0);
         injuryE.push(3 - parseInt(`${soundV}`));
         yingi = `${yingi.length << (Math.min(Math.abs(1), 2))}`;
         turnU = `${parseInt(`${soundV}`)}`;
      if (injuryE.length == turnU.length) {
         injuryE.push(parseInt(`${soundV}`) + injuryE.length);
      }
      if ((2 - turnU.length) <= 1 || (parseInt(`${soundV}`) / (Math.max(3, turnU.length))) <= 2) {
         soundV *= (parseFloat(`${String.fromCharCode(79,0) == turnU ? parseInt(`${soundV}`) : turnU.length}`));
      }
          let bannern: Map<any, any> = new Map([[String.fromCharCode(110,101,119,101,114,0),965], [String.fromCharCode(112,97,115,99,97,108,0),128]]);
         injuryE.push(injuryE.length + bannern.size);
         injuryE = [parseInt(`${soundV}`) % (Math.max(7, turnU.length))];
         soundV += parseFloat(`${2}`);
      membership8 -= parseFloat(`${injuryE.length >> (Math.min(Math.abs(3), 4))}`);
      found4 |= 2 / (Math.max(private_y3, 5));
      found4 |= parseInt(`${oranger}`) - temperatureG.length;
   let thailandC = 5225492 <= combinex.length;
   do {
       let thailandT = String.fromCharCode(100,105,115,116,97,110,99,101,0);
       let yellowv = 5.0;
       let historya = String.fromCharCode(101,109,105,116,0);
       let assisty = true;
         historya = `${historya.length}`;
         yellowv *= (parseFloat(`${(assisty ? 5 : 1) >> (Math.min(Math.abs(1), 5))}`));
      if (!thailandT.endsWith(historya)) {
         historya += `${(String.fromCharCode(83,0) == historya ? historya.length : parseInt(`${yellowv}`))}`;
      }
      for (let h = 0; h < 1; h++) {
         assisty = String.fromCharCode(53,0) == historya;
      }
          let point1 = String.fromCharCode(97,118,97,105,108,97,98,105,108,105,116,121,0);
          let forwardD: Array<any> = [25, 183];
          let viewer8 = String.fromCharCode(99,97,116,99,104,0);
         historya = `${3 & viewer8.length}`;
         point1 += `${point1.length}`;
         forwardD.push(point1.length | 1);
         viewer8 += `${3 ^ forwardD.length}`;
      for (let y = 0; y < 1; y++) {
         yellowv /= Math.max((parseFloat(`${historya == String.fromCharCode(121,0) ? historya.length : parseInt(`${yellowv}`)}`)), 1);
      }
      if (thailandT.length >= 3 || assisty) {
          let checkbox4 = String.fromCharCode(101,120,112,101,99,116,115,0);
         assisty = thailandT.length > 51;
         checkbox4 = `${checkbox4.length ^ 3}`;
      }
      while (parseInt(`${yellowv}`) < thailandT.length) {
         yellowv *= parseFloat(`${3}`);
         break;
      }
          let resend8 = 2;
          let trashZ: Map<any, any> = new Map([[String.fromCharCode(100,105,97,108,111,103,115,0),760], [String.fromCharCode(99,111,109,112,97,99,116,101,100,0),440]]);
         assisty = historya.startsWith(`${yellowv}`);
         resend8 <<= Math.min(Math.abs(resend8), 3);
         trashZ.set(`${resend8}`, 1 & resend8);
      if (historya != String.fromCharCode(56,0)) {
         thailandT += `${(thailandT == String.fromCharCode(67,0) ? (assisty ? 3 : 5) : thailandT.length)}`;
      }
          let regengc = String.fromCharCode(100,115,99,112,0);
          let datad = String.fromCharCode(102,105,110,97,108,108,121,0);
          let ballu = 4.0;
         yellowv *= parseFloat(`${thailandT.length}`);
         regengc = `${parseInt(`${ballu}`) - 1}`;
         datad += `${datad.length}`;
         ballu *= (parseFloat(`${String.fromCharCode(101,0) == datad ? regengc.length : datad.length}`));
         thailandT += `${((assisty ? 3 : 4))}`;
      combinex = `${parseInt(`${yellowv}`)}`;
      if (thailandC) {
         break;
      }
   } while (thailandC && (l_viewH == String.fromCharCode(69,0) && combinex != String.fromCharCode(107,0)));

      if (
        autoPlayNext &&
        activeEpisode !== undefined &&
        episodes &&
        activeEpisode < episodes?.url_count - 1
      ) {

      temperatureG = `${parseInt(`${sansh}`)}`;
   while (3.86 >= (oranger + combinex.length) || (oranger + combinex.length) >= 3.86) {
      oranger *= (l_viewH == String.fromCharCode(88,0) ? l_viewH.length : found4);
      break;
   }
   for (let v = 0; v < 2; v++) {
       let plus8 = String.fromCharCode(99,104,111,105,99,101,0);
       let tooltipsN: Array<any> = [856, 463];
         tooltipsN = [3];
         tooltipsN = [plus8.length];
      let homei = 6367755 <= tooltipsN.length;
      do {
         tooltipsN = [plus8.length | tooltipsN.length];
         if (homei) {
            break;
         }
      } while (homei && (4 < (5 >> (Math.min(2, tooltipsN.length)))));
          let acceptedK = 2.0;
          let rightS: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,101,114,115,0),36], [String.fromCharCode(104,97,115,104,97,98,108,101,0),825]]);
         tooltipsN = [parseInt(`${acceptedK}`)];
         acceptedK -= 3 & rightS.size;
         rightS.set(`${rightS.size}`, rightS.size);
      if (2 >= (plus8.length & 4) && 4 >= (tooltipsN.length & plus8.length)) {
         plus8 = `${tooltipsN.length}`;
      }
      if (plus8.includes(`${tooltipsN.length}`)) {
         tooltipsN = [tooltipsN.length << (Math.min(Math.abs(2), 2))];
      }
      private_y3 |= parseInt(`${oranger}`) ^ 2;
   }
       let progress7: Array<any> = [String.fromCharCode(100,101,103,114,101,101,115,0), String.fromCharCode(97,117,100,105,111,100,97,116,97,0), String.fromCharCode(119,105,114,101,0)];
       let connectionT = String.fromCharCode(99,111,114,114,101,99,116,0);
      if ((3 / (Math.max(7, connectionT.length))) == 3 || (connectionT.length / (Math.max(3, 4))) == 4) {
         progress7 = [progress7.length];
      }
      for (let w = 0; w < 2; w++) {
          let abouts = String.fromCharCode(100,101,105,110,105,116,0);
          let storeE = String.fromCharCode(102,114,97,109,101,0);
          let n_titled = 5.0;
          let animationl = 4;
         progress7 = [1 | animationl];
         abouts += `${storeE.length - 3}`;
         storeE = `${storeE.length + 1}`;
         n_titled /= Math.max(2, parseFloat(`${storeE.length & parseInt(`${n_titled}`)}`));
         animationl += storeE.length % (Math.max(abouts.length, 10));
      }
         progress7 = [(connectionT == String.fromCharCode(119,0) ? connectionT.length : progress7.length)];
      while (!connectionT.includes(`${progress7.length}`)) {
         progress7 = [progress7.length];
         break;
      }
         progress7.push(connectionT.length);
         progress7 = [3];
      l_viewH += `${found4 & 3}`;
      l_viewH += `${l_viewH.length}`;
   while (3 < (combinex.length / (Math.max(1, 5))) && 4 < (combinex.length / 1)) {
      combinex = `${found4}`;
      break;
   }
   for (let q = 0; q < 1; q++) {
       let a_positiong = String.fromCharCode(115,116,97,98,105,108,105,116,121,0);
       let completeG = String.fromCharCode(99,111,110,99,97,116,0);
      if (a_positiong.startsWith(`${completeG.length}`)) {
          let r_center9: Map<any, any> = new Map([[String.fromCharCode(112,114,102,0),248], [String.fromCharCode(99,104,97,105,110,115,0),933]]);
         completeG += `${completeG.length % 3}`;
         r_center9.set(`${r_center9.size}`, 2 / (Math.max(5, r_center9.size)));
      }
       let faviconx = String.fromCharCode(114,118,118,108,99,0);
       let corner7 = String.fromCharCode(99,117,116,101,115,116,95,116,95,56,54,0);
         a_positiong = "1";
      for (let v = 0; v < 2; v++) {
          let firebaseC = 2.0;
          let mathw = false;
          let actionsN = true;
          let splashu = String.fromCharCode(109,95,56,54,95,112,114,101,115,101,100,0);
         corner7 = `${a_positiong.length ^ completeG.length}`;
         firebaseC *= (parseFloat(`${(mathw ? 2 : 2)}`));
         mathw = firebaseC > 49.37;
         actionsN = mathw;
         splashu += `${(splashu == String.fromCharCode(99,0) ? parseInt(`${firebaseC}`) : splashu.length)}`;
      }
         corner7 = `${1 ^ corner7.length}`;
      for (let q = 0; q < 1; q++) {
         corner7 = `${completeG.length}`;
      }
      l_viewH = `${completeG.length + private_y3}`;
   }
   for (let d = 0; d < 2; d++) {
      const_fT += `${l_viewH.length & combinex.length}`;
   }
      private_y3 >>= Math.min(2, Math.abs(private_y3 / (Math.max(const_fT.length, 7))));
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
       let hoverw = 4.0;
    let redirectM: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,0),790], [String.fromCharCode(115,104,111,114,116,101,114,0),458]]);
    let styleK = 1;
    let progressJ = String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,0);
    let statisticsa = String.fromCharCode(97,99,99,101,110,116,0);
    let philippinesH: Array<any> = [String.fromCharCode(99,116,116,115,0), String.fromCharCode(100,101,116,97,99,104,0), String.fromCharCode(99,117,114,114,0)];
    let streamingE: Map<any, any> = new Map([[String.fromCharCode(100,97,112,112,115,0),true ], [String.fromCharCode(108,101,114,112,105,110,103,0),false ]]);
    let blacklistK = 0;
    let away8: Array<any> = [47, 876];
    let xvodD: Map<any, any> = new Map([[String.fromCharCode(97,108,97,109,111,102,105,114,101,0),364], [String.fromCharCode(115,116,114,105,107,101,116,104,114,111,117,103,104,115,0),499], [String.fromCharCode(115,99,114,111,108,108,101,114,0),867]]);
    let sansG = 5.0;
   for (let z = 0; z < 1; z++) {
      xvodD = new Map([[progressJ, blacklistK]]);
   }
      statisticsa = `${redirectM.size * parseInt(`${hoverw}`)}`;
      philippinesH = [away8.length];
   let const_a_x = 6335379.0 <= hoverw;
   do {
      hoverw += parseFloat(`${streamingE.size / 1}`);
      if (const_a_x) {
         break;
      }
   } while (((blacklistK % (Math.max(3, 5))) > 4) && const_a_x);
       let scorep = String.fromCharCode(112,108,97,99,101,104,111,108,100,101,114,0);
       let sheetf = false;
         scorep += `${scorep.length << (Math.min(Math.abs(1), 4))}`;
       let sharedw = 3.0;
      if (!sheetf && (sharedw * 1.75) < 3.52) {
         sharedw -= 3 | parseInt(`${sharedw}`);
      }
      while (sheetf) {
          let type_37 = String.fromCharCode(99,104,97,110,103,101,103,114,111,117,112,0);
          let privilegeN = String.fromCharCode(104,97,112,113,97,0);
          let jnewsU = String.fromCharCode(112,103,115,122,0);
          let project1: Array<any> = [494, 221];
         sheetf = jnewsU.includes(`${sheetf}`);
         type_37 += `${privilegeN.length}`;
         privilegeN = "3";
         jnewsU += `${3 << (Math.min(3, type_37.length))}`;
         project1.push((type_37 == String.fromCharCode(111,0) ? privilegeN.length : type_37.length));
         break;
      }
          let greyX = 0.0;
          let fastu = 3.0;
         sharedw /= Math.max(1, ((sheetf ? 3 : 3) + 1));
         greyX *= parseFloat(`${parseInt(`${fastu}`) & 2}`);
         fastu -= parseInt(`${fastu}`) ^ 3;
      while (2.86 > sharedw) {
         sharedw += (scorep == String.fromCharCode(104,0) ? (sheetf ? 4 : 3) : scorep.length);
         break;
      }
      philippinesH = [parseInt(`${hoverw}`) >> (Math.min(Math.abs(1), 2))];
   let episodes3 = styleK <= 9491110;
   do {
      styleK *= progressJ.length * statisticsa.length;
      if (episodes3) {
         break;
      }
   } while (((styleK / (Math.max(philippinesH.length, 3))) == 5 && (philippinesH.length / (Math.max(5, styleK))) == 5) && episodes3);
      away8.push(1 - philippinesH.length);
       let customn = String.fromCharCode(120,103,101,116,98,118,0);
       let circleQ = 3.0;
       let statisticsB: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,114,102,108,111,119,0),190], [String.fromCharCode(100,101,118,101,108,111,112,101,114,0),27], [String.fromCharCode(100,105,115,109,105,115,115,0),490]]);
       let turnf = String.fromCharCode(116,101,115,115,101,108,97,116,111,114,0);
          let turnh: Array<any> = [252, 171, 704];
         turnf = `${statisticsB.size / (Math.max(customn.length, 10))}`;
         turnh = [turnh.length / 1];
         customn = `${turnf.length}`;
         statisticsB = new Map([[customn, (turnf == String.fromCharCode(69,0) ? customn.length : turnf.length)]]);
       let mail8 = 0.0;
         circleQ *= customn.length * 1;
      if (2.17 > (circleQ / (Math.max(mail8, 1))) && 2.17 > (mail8 / (Math.max(8, circleQ)))) {
         mail8 *= 1;
      }
      let contextS = String.fromCharCode(119,54,54,0) == turnf;
      do {
          let streamingu = 2.0;
          let bingW: Array<any> = [String.fromCharCode(112,97,99,107,101,116,105,110,0), String.fromCharCode(102,111,108,100,101,114,0), String.fromCharCode(115,101,115,115,105,111,110,115,0)];
          let gcopy_vh: Map<any, any> = new Map([[String.fromCharCode(112,114,107,0),688], [String.fromCharCode(114,105,103,104,116,109,111,115,116,0),677]]);
          let chatA: Array<any> = [79, 521, 207];
         turnf += "2";
         streamingu -= 3 << (Math.min(3, bingW.length));
         bingW.push(parseInt(`${streamingu}`) ^ bingW.length);
         gcopy_vh.set(`${chatA.length}`, 2);
         chatA.push(chatA.length);
         if (contextS) {
            break;
         }
      } while (contextS && (5 == turnf.length));
         statisticsB = new Map([[`${statisticsB.size}`, 3]]);
      styleK /= Math.max(1, statisticsa.length ^ styleK);
       let brightnessV = String.fromCharCode(97,115,102,114,116,112,0);
       let combineX: Array<any> = [995, 497, 21];
      for (let e = 0; e < 2; e++) {
         brightnessV += `${2 << (Math.min(1, combineX.length))}`;
      }
          let reporte = 0;
         brightnessV += "1";
         reporte /= Math.max(2, 3 << (Math.min(2, Math.abs(reporte))));
      if ((brightnessV.length ^ 5) >= 4 || (combineX.length ^ brightnessV.length) >= 5) {
         brightnessV += `${brightnessV.length ^ 1}`;
      }
      while (brightnessV.endsWith(`${combineX.length}`)) {
         combineX.push(combineX.length);
         break;
      }
       let logo1: Map<any, any> = new Map([[String.fromCharCode(115,117,105,116,101,115,0),303], [String.fromCharCode(101,110,99,111,100,101,100,115,116,114,101,97,109,0),423]]);
       let redirectd: Map<any, any> = new Map([[String.fromCharCode(99,97,99,104,101,100,0),904], [String.fromCharCode(112,111,108,108,101,114,0),258], [String.fromCharCode(112,117,114,103,101,0),388]]);
      if (!Array.from(logo1.values()).includes(combineX.length)) {
          let greyw = 1.0;
          let main_zO = String.fromCharCode(98,105,116,101,120,97,99,116,110,101,115,115,0);
          let sortQ = String.fromCharCode(99,97,112,97,98,105,108,105,116,121,0);
          let liveW = String.fromCharCode(100,101,109,111,100,117,108,97,116,101,0);
         combineX.push(main_zO.length);
         greyw *= parseFloat(`${1}`);
         main_zO = `${parseInt(`${greyw}`) << (Math.min(Math.abs(3), 4))}`;
         sortQ = "1";
         liveW += `${1 ^ parseInt(`${greyw}`)}`;
      }
      redirectM.set(`${styleK}`, 1);
   for (let z = 0; z < 2; z++) {
      progressJ = `${redirectM.size}`;
   }
      philippinesH = [1 - xvodD.size];
      hoverw += parseFloat(`${2}`);
      away8.push(parseInt(`${hoverw}`) << (Math.min(Math.abs(3), 5)));
       let lineT: Array<any> = [735, 364, 511];
       let giftH = String.fromCharCode(115,119,105,116,99,104,97,98,108,101,0);
      for (let n = 0; n < 2; n++) {
         lineT = [giftH.length];
      }
         giftH = `${giftH.length}`;
         lineT = [lineT.length];
         lineT.push(2);
      for (let p = 0; p < 1; p++) {
         lineT = [giftH.length << (Math.min(1, lineT.length))];
      }
         giftH += `${lineT.length}`;
      styleK >>= Math.min(Math.abs(1), 1);
       let questP: Map<any, any> = new Map([[String.fromCharCode(110,111,110,115,101,99,117,114,101,0),671], [String.fromCharCode(101,120,99,108,117,100,101,100,0),896], [String.fromCharCode(112,97,116,99,104,0),45]]);
       let thumbnailq = String.fromCharCode(115,105,109,117,108,99,97,115,116,0);
       let read3 = false;
      while (2 >= thumbnailq.length) {
         thumbnailq += `${2 & thumbnailq.length}`;
         break;
      }
      while (!read3 || (questP.size - 5) < 4) {
         read3 = !read3;
         break;
      }
       let megaphoneL = String.fromCharCode(110,111,110,110,117,108,108,98,117,102,102,101,114,0);
      if (1 > megaphoneL.length) {
         thumbnailq = `${(thumbnailq.length ^ (read3 ? 1 : 1))}`;
      }
         questP = new Map([[`${questP.size}`, thumbnailq.length + 3]]);
       let countryS = String.fromCharCode(97,99,113,117,105,114,101,100,0);
       let eactJ = String.fromCharCode(112,105,110,110,101,100,0);
         eactJ = `${eactJ.length + countryS.length}`;
          let carouselM: Array<any> = [String.fromCharCode(110,101,97,114,108,121,0), String.fromCharCode(114,115,116,110,0), String.fromCharCode(113,117,105,99,107,0)];
          let sansr = String.fromCharCode(114,101,113,117,101,115,116,101,114,0);
          let grayI = 2.0;
         countryS = "1";
         carouselM.push(3);
         sansr = `${parseInt(`${grayI}`) / (Math.max(carouselM.length, 9))}`;
         grayI /= Math.max(parseFloat(`${parseInt(`${grayI}`) << (Math.min(Math.abs(3), 3))}`), 1);
      while (thumbnailq.length == eactJ.length) {
         eactJ += `${megaphoneL.length}`;
         break;
      }
      streamingE.set(`${blacklistK}`, 3);
      statisticsa += "1";
      redirectM.set(statisticsa, (String.fromCharCode(90,0) == statisticsa ? statisticsa.length : parseInt(`${hoverw}`)));
       let termsi = 2.0;
       let time_ln = 3.0;
       let modelsb = String.fromCharCode(122,111,110,101,105,110,102,111,0);
       let turnO = true;
       let connectionx = false;
         termsi *= parseFloat(`${parseInt(`${termsi}`) | 2}`);
       let dataQ: Array<any> = [937, 142, 240];
          let sportsn: Map<any, any> = new Map([[String.fromCharCode(99,97,110,0),631], [String.fromCharCode(98,108,111,99,107,100,99,0),680]]);
          let right7 = true;
          let green3 = 5;
         time_ln *= parseFloat(`${sportsn.size}`);
         sportsn = new Map([[`${right7}`, green3 * 1]]);
         right7 = green3 == 45;
       let privilegeZ: Array<any> = [606, 795];
      if (3 <= (3 - modelsb.length)) {
         modelsb += `${parseInt(`${termsi}`)}`;
      }
       let calendarr = String.fromCharCode(102,111,114,109,97,116,117,0);
         dataQ = [parseInt(`${termsi}`) * 1];
      let homew = turnO ? !turnO : turnO;
      do {
         turnO = calendarr == String.fromCharCode(110,0) && privilegeZ.length < 22;
         if (homew) {
            break;
         }
      } while (homew && (!calendarr.startsWith(`${turnO}`)));
      xvodD = new Map([[`${termsi}`, 3 >> (Math.min(Math.abs(styleK), 4))]]);
   let submitn = 7864726 <= xvodD.size;
   do {
      xvodD.set(`${hoverw}`, parseInt(`${hoverw}`));
      if (submitn) {
         break;
      }
   } while ((2 <= (xvodD.size * 4) || (away8.length * 4) <= 3) && submitn);
   for (let b = 0; b < 3; b++) {
      away8.push(3);
   }
   if ((4 >> (Math.min(1, progressJ.length))) == 3) {
      progressJ = `${streamingE.size / (Math.max(1, 4))}`;
   }
       let memberq = 3.0;
       let verticalN: Map<any, any> = new Map([[String.fromCharCode(103,101,116,104,100,114,0),918], [String.fromCharCode(97,112,112,114,111,112,114,105,97,116,101,0),643]]);
       let soundT = String.fromCharCode(114,101,118,105,101,119,115,0);
       let bodanK = false;
      while (bodanK) {
         bodanK = (((!bodanK ? 23 : soundT.length) << (Math.min(soundT.length, 5))) == 23);
         break;
      }
      if (verticalN.size > 1 && (verticalN.size + 1) > 4) {
         bodanK = soundT.includes(`${bodanK}`);
      }
         soundT = `${(String.fromCharCode(108,0) == soundT ? soundT.length : parseInt(`${memberq}`))}`;
      let const_ed = 6013032.0 >= memberq;
      do {
         memberq /= Math.max(parseFloat(`${soundT.length}`), 2);
         if (const_ed) {
            break;
         }
      } while (const_ed && (verticalN.get(`${memberq}`) == null));
      if (verticalN.get(`${memberq}`) == null) {
         verticalN.set(soundT, (soundT == String.fromCharCode(78,0) ? (bodanK ? 3 : 3) : soundT.length));
      }
      if (!bodanK) {
         verticalN.set(`${soundT}`, 3 << (Math.min(2, soundT.length)));
      }
         verticalN.set(`${memberq}`, ((bodanK ? 4 : 2) % (Math.max(9, parseInt(`${memberq}`)))));
         memberq *= parseFloat(`${3 * parseInt(`${memberq}`)}`);
      away8.push(philippinesH.length);
       let selectionT = true;
       let kickN = String.fromCharCode(105,102,97,99,101,0);
          let becomeo = 4;
         selectionT = !selectionT;
         becomeo /= Math.max(2, 5);
         kickN = `${(kickN.length + (selectionT ? 1 : 4))}`;
      if (2 >= kickN.length) {
         kickN += `${(kickN.length * (selectionT ? 4 : 2))}`;
      }
         kickN = `${(String.fromCharCode(49,0) == kickN ? (selectionT ? 4 : 5) : kickN.length)}`;
      for (let i = 0; i < 3; i++) {
         kickN = `${((selectionT ? 2 : 4))}`;
      }
      while (kickN.endsWith(`${selectionT}`)) {
         kickN += `${((selectionT ? 1 : 4))}`;
         break;
      }
      redirectM = new Map([[`${blacklistK}`, blacklistK + 3]]);

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
