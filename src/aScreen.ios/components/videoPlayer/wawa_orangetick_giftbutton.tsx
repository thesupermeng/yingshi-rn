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
import VideoControlsOverlay from "./wawa_auto_mbbanner";
import WebView from "react-native-webview";
import FastImage from "react-native-fast-image";
import FastForwardProgressIcon from "@static/images/mainShort_n.svg";
import RewindProgressIcon from "@static/images/matchinactiveArrowrightPush.svg";

import { incrementSportWatchTime, setFullscreenState } from "@redux/actions/wawa_related";

import {
  wawaIconeyeMoonItem,
  wawaXvodNeon,
  wawaSellProfileinactive,
} from "@type/wawa_gradlew";
import VideoWithControls from "./wawa_desc_downarrow";
import { useDispatch } from "react-redux";
import { useAppSelector, useSelector } from "@hooks/wawa_root";
import { screenModel } from "@type/wawa_rules";
import { NON_VIP_STREAM_TIME_SECONDS } from "@utility/wawa_iconpointscore";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";

interface wawaAwayShow {
  vod_url?: string;
  vodTitle?: string;
  currentTimeRef?: any;
  initialStartTime?: number;
  videoType?: string;
  vod_source?: any;
  onBack?: () => any;
  useWebview?: boolean;
  onEpisodeChange?: any;
  episodes?: wawaXvodNeon;
  activeEpisode?: number;
  rangeSize?: number;
  autoPlayNext?: boolean;
  onShare?: () => any;
  movieList?: wawaSellProfileinactive[];
  showGuide?: boolean;
  showMoreType?: "episodes" | "streams" | "movies" | "none";
  streams?: wawaIconeyeMoonItem[];
  isFetchingRecommendedMovies?: boolean;
  appOrientation: string;
  devicesOrientation: string;
  lockOrientation: (orientation: string) => void;
  handleSaveVod?: any;
  onReadyForDisplay?: () => void;
}

type wawaRefreshborderlessFeedback = {
  showControls: () => void;
  hideControls: () => void;
  toggleControls: () => void;
  isVisible: boolean;
  hideSlider: () => void;
  isLocked: boolean;
  toggleLock: () => void;
};

export type wawaImage = {
  setPause: (param: boolean) => void;
  isPaused: boolean;
  setCurrentTime: (time: number) => void;
};

export default forwardRef<wawaImage, wawaAwayShow>(
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
       let loadingspinnerL = String.fromCharCode(108,95,56,50,95,102,105,108,101,115,121,115,116,101,109,0);
    let chatroombackgroundU = String.fromCharCode(115,101,110,100,95,113,95,57,53,0);
    let orientation7 = String.fromCharCode(112,95,57,54,95,109,97,110,117,97,108,108,121,0);
    let rncoree = String.fromCharCode(121,95,53,50,95,109,105,99,114,111,100,118,100,0);
    let showlessR = String.fromCharCode(107,95,54,52,95,103,114,97,116,105,99,117,108,101,0);
    let flyerq = 4;
    let gradleU = String.fromCharCode(121,95,53,95,97,116,116,105,98,117,116,101,115,0);
    let questiconN = 1.0;
    let combine2: Map<any, any> = new Map([[String.fromCharCode(99,102,116,121,112,101,114,101,102,95,121,95,51,54,0),21], [String.fromCharCode(102,95,56,57,95,111,112,115,99,97,108,101,0),51]]);
    let libfbjniT = String.fromCharCode(120,95,52,51,95,98,105,110,107,100,97,116,97,0);
    let basketballmatchdetailbgR: Array<any> = [569, 205, 825];
    let privatechatbgD: Array<any> = [String.fromCharCode(115,101,112,97,114,97,116,101,100,95,107,95,50,53,0), String.fromCharCode(116,114,105,109,109,105,110,103,95,118,95,50,53,0), String.fromCharCode(118,95,52,57,95,117,116,99,116,105,109,101,0)];
    let collectionR = String.fromCharCode(106,95,57,53,95,99,116,120,112,0);
      combine2.set(`${questiconN}`, parseInt(`${questiconN}`));
      orientation7 = `${parseInt(`${questiconN}`) | combine2.size}`;
   if (!chatroombackgroundU.includes(showlessR)) {
       let detailsi = String.fromCharCode(106,95,53,52,95,115,104,105,109,115,0);
       let librrcq = String.fromCharCode(102,105,110,100,97,115,111,99,95,53,95,53,53,0);
       let iconbell4 = String.fromCharCode(111,114,119,97,114,100,101,100,95,102,95,51,49,0);
       let logoute = String.fromCharCode(119,95,53,48,95,116,111,100,112,0);
         librrcq += `${iconbell4.length & logoute.length}`;
      if (logoute == detailsi) {
          let cornershootL = 0.0;
          let assetsx = String.fromCharCode(118,100,101,98,117,103,95,99,95,52,49,0);
          let splashF = true;
          let mcopy_bs1 = 2.0;
         detailsi += `${detailsi.length}`;
         cornershootL -= parseInt(`${cornershootL}`);
         assetsx += `${(assetsx.length + (splashF ? 5 : 4))}`;
         splashF = String.fromCharCode(108,0) == assetsx;
         mcopy_bs1 /= Math.max(3, 5);
      }
         detailsi += `${1 % (Math.max(10, detailsi.length))}`;
      while (librrcq == detailsi) {
          let componentregistryS: Array<any> = [664, 405, 786];
         detailsi += `${logoute.length}`;
         componentregistryS = [componentregistryS.length - componentregistryS.length];
         break;
      }
         iconbell4 += `${logoute.length * 2}`;
         librrcq = `${(String.fromCharCode(72,0) == iconbell4 ? librrcq.length : iconbell4.length)}`;
          let m_managerT = String.fromCharCode(119,95,52,56,95,97,118,103,0);
         logoute += `${logoute.length / (Math.max(m_managerT.length, 5))}`;
         librrcq = "3";
      if (librrcq.length >= 3) {
          let traminio = String.fromCharCode(116,95,54,54,95,110,97,118,105,103,97,116,101,100,0);
          let libjsijniprofilerv = false;
          let predictionbannersharedw = 3.0;
          let iconnewchato = 2.0;
          let plashl = String.fromCharCode(115,95,54,56,95,118,112,100,115,112,0);
         librrcq += `${((libjsijniprofilerv ? 5 : 1) >> (Math.min(Math.abs(parseInt(`${predictionbannersharedw}`)), 4)))}`;
         traminio += `${(traminio == String.fromCharCode(69,0) ? parseInt(`${iconnewchato}`) : traminio.length)}`;
         libjsijniprofilerv = plashl.length <= traminio.length;
         predictionbannersharedw += (parseFloat(`${traminio == String.fromCharCode(48,0) ? parseInt(`${iconnewchato}`) : traminio.length}`));
         plashl = `${1 + plashl.length}`;
      }
      for (let w = 0; w < 3; w++) {
          let iconplaym = String.fromCharCode(105,110,118,105,115,105,98,108,101,95,121,95,57,57,0);
          let libloggerJ = true;
         detailsi = `${logoute.length ^ iconplaym.length}`;
         iconplaym = "1";
      }
         librrcq = `${iconbell4.length - 3}`;
      while (iconbell4 != String.fromCharCode(105,0)) {
         librrcq = `${iconbell4.length}`;
         break;
      }
      showlessR = `${parseInt(`${questiconN}`) % (Math.max(1, 5))}`;
   }
   for (let e = 0; e < 3; e++) {
       let selectione: Array<any> = [214, 547, 721];
       let chatS = String.fromCharCode(112,105,110,110,105,110,103,95,112,95,50,49,0);
       let rootN = false;
          let auto_5iN = 5.0;
          let right3 = String.fromCharCode(112,114,111,100,117,99,116,102,95,103,95,52,51,0);
         chatS += `${(parseInt(`${auto_5iN}`) | (rootN ? 3 : 1))}`;
         auto_5iN *= right3.length / (Math.max(right3.length, 10));
          let iconscheduleO = String.fromCharCode(100,95,53,53,95,99,108,111,115,101,115,116,0);
          let arrowu = String.fromCharCode(103,95,57,53,95,115,101,115,115,105,111,110,0);
          let orientationM = String.fromCharCode(111,95,51,50,95,114,101,113,117,101,115,116,101,114,0);
         chatS = `${chatS.length}`;
         iconscheduleO += `${iconscheduleO.length}`;
         arrowu = "1";
         orientationM = `${1 / (Math.max(3, iconscheduleO.length))}`;
      for (let v = 0; v < 1; v++) {
         rootN = rootN && chatS.length > 40;
      }
         chatS = `${((rootN ? 3 : 1) & 1)}`;
      while (2 <= chatS.length) {
         chatS = `${chatS.length / (Math.max(3, selectione.length))}`;
         break;
      }
      let signinupM = rootN ? !rootN : rootN;
      do {
         rootN = selectione.includes(rootN);
         if (signinupM) {
            break;
         }
      } while ((!rootN) && signinupM);
       let backwhiteI = false;
      let nterstitialy = rootN ? !rootN : rootN;
      do {
         rootN = selectione.length <= 21;
         if (nterstitialy) {
            break;
         }
      } while ((rootN) && nterstitialy);
         selectione.push((String.fromCharCode(72,0) == chatS ? chatS.length : selectione.length));
      flyerq &= parseInt(`${questiconN}`) - orientation7.length;
   }
   while (gradleU.includes(`${basketballmatchdetailbgR.length}`)) {
       let tumbnailf = false;
       let gesture9 = false;
       let humidityr = String.fromCharCode(118,95,55,48,95,117,114,108,100,101,99,111,100,101,0);
       let nativeexH = 5.0;
      while (1 <= humidityr.length && tumbnailf) {
          let bodanW = 5.0;
         humidityr += `${((tumbnailf ? 1 : 4) / (Math.max(parseInt(`${nativeexH}`), 10)))}`;
         bodanW -= parseFloat(`${2 / (Math.max(parseInt(`${bodanW}`), 8))}`);
         break;
      }
         humidityr = `${2 >> (Math.min(4, Math.abs(parseInt(`${nativeexH}`))))}`;
      for (let t = 0; t < 1; t++) {
         nativeexH *= ((gesture9 ? 5 : 5) - (tumbnailf ? 1 : 3));
      }
      let subinv = tumbnailf ? !tumbnailf : tumbnailf;
      do {
          let backiconmaskJ = String.fromCharCode(108,95,57,56,95,114,101,97,99,116,105,111,110,0);
         tumbnailf = (gesture9 ? tumbnailf : gesture9);
         backiconmaskJ += `${3 + backiconmaskJ.length}`;
         if (subinv) {
            break;
         }
      } while ((nativeexH >= 1.99) && subinv);
      while (4 >= humidityr.length) {
         tumbnailf = parseInt(`${nativeexH}`) <= humidityr.length;
         break;
      }
      let iconsubssuccessT = gesture9 ? !gesture9 : gesture9;
      do {
         gesture9 = tumbnailf;
         if (iconsubssuccessT) {
            break;
         }
      } while (iconsubssuccessT && (humidityr.includes(`${gesture9}`)));
          let black5 = String.fromCharCode(97,95,52,56,95,109,97,116,99,104,0);
          let final_qmi: Map<any, any> = new Map([[String.fromCharCode(106,115,105,109,100,101,120,116,95,99,95,56,50,0),477], [String.fromCharCode(118,105,97,95,111,95,52,55,0),114]]);
         tumbnailf = 64.40 < nativeexH && tumbnailf;
         black5 += `${final_qmi.size - 3}`;
         final_qmi.set(`${black5}`, final_qmi.size & 3);
         nativeexH /= Math.max(5, parseInt(`${nativeexH}`) * 3);
         nativeexH += 3;
      if (!humidityr.includes(`${nativeexH}`)) {
         humidityr += `${(String.fromCharCode(57,0) == humidityr ? (tumbnailf ? 5 : 5) : humidityr.length)}`;
      }
      while (humidityr.includes(`${gesture9}`)) {
         humidityr += `${parseInt(`${nativeexH}`) % 1}`;
         break;
      }
       let iconwatchnowM = 0.0;
       let megaphoneN = 0.0;
      gradleU = "3";
      break;
   }
   let shareblack7 = 7379800 >= gradleU.length;
   do {
       let customf: Array<any> = [274, 98];
       let playershirtQ = 0.0;
       let pangle2 = String.fromCharCode(97,109,102,101,110,99,95,110,95,49,51,0);
      for (let j = 0; j < 3; j++) {
         playershirtQ *= (pangle2 == String.fromCharCode(110,0) ? parseInt(`${playershirtQ}`) : pangle2.length);
      }
         pangle2 += `${parseInt(`${playershirtQ}`)}`;
      for (let f = 0; f < 1; f++) {
         customf = [customf.length ^ 3];
      }
         playershirtQ /= Math.max(parseInt(`${playershirtQ}`), 2);
         pangle2 = `${parseInt(`${playershirtQ}`) % (Math.max(pangle2.length, 5))}`;
         playershirtQ -= parseInt(`${playershirtQ}`);
         playershirtQ *= pangle2.length;
      for (let j = 0; j < 2; j++) {
         pangle2 = `${customf.length & 2}`;
      }
       let giftbutton6 = String.fromCharCode(116,95,49,53,95,112,114,101,97,109,98,108,101,0);
      gradleU = "2";
      if (shareblack7) {
         break;
      }
   } while ((!orientation7.endsWith(`${gradleU.length}`)) && shareblack7);
      basketballmatchdetailbgR = [2];
   if (gradleU != String.fromCharCode(74,0)) {
       let release_gE = String.fromCharCode(122,95,56,49,95,112,114,101,115,99,97,108,105,110,103,0);
       let fastforwarde: Array<any> = [895, 530];
       let umengt = true;
       let foundo = String.fromCharCode(117,95,52,52,95,101,120,101,99,117,116,105,110,103,0);
      if (foundo != String.fromCharCode(85,0)) {
         release_gE = `${3 + foundo.length}`;
      }
      while (fastforwarde.length <= 5) {
          let iconchatsendI = String.fromCharCode(121,95,50,51,95,112,101,114,109,117,116,97,116,105,111,110,115,0);
          let iconpipexpand8: Array<any> = [String.fromCharCode(119,95,55,55,95,112,114,111,102,105,108,105,110,103,0), String.fromCharCode(114,95,56,48,95,100,105,115,112,111,115,97,98,108,101,115,0)];
         release_gE += `${fastforwarde.length - 2}`;
         iconchatsendI += `${iconpipexpand8.length}`;
         iconpipexpand8 = [iconchatsendI.length];
         break;
      }
          let codeC = 4;
         umengt = fastforwarde.length > 3;
         codeC += codeC * codeC;
         foundo += `${fastforwarde.length % (Math.max(4, release_gE.length))}`;
          let event8 = String.fromCharCode(116,114,97,105,116,95,102,95,50,57,0);
         foundo += `${foundo.length % (Math.max(1, event8.length))}`;
      let greyarrowupO = String.fromCharCode(108,106,54,107,56,100,52,98,0) == release_gE;
      do {
         release_gE += `${release_gE.length % (Math.max(1, 4))}`;
         if (greyarrowupO) {
            break;
         }
      } while (((release_gE.length & 1) <= 3 || (release_gE.length & 1) <= 4) && greyarrowupO);
         foundo += `${(foundo.length * (umengt ? 1 : 1))}`;
      if (fastforwarde.length > release_gE.length) {
          let largesound8 = String.fromCharCode(99,111,109,109,97,110,100,95,100,95,49,48,48,0);
          let imagenetworkerrb = String.fromCharCode(107,95,56,56,95,105,97,116,0);
          let firebaseT: Map<any, any> = new Map([[String.fromCharCode(119,95,55,51,95,122,111,111,109,105,110,103,0),String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,95,48,95,52,51,0)], [String.fromCharCode(119,95,54,53,95,112,108,111,116,0),String.fromCharCode(117,114,108,100,101,99,111,100,101,95,117,95,55,56,0)]]);
          let iconlogoutG = String.fromCharCode(113,95,54,49,95,100,111,99,117,109,101,110,116,0);
          let moonp = 2.0;
         release_gE = `${parseInt(`${moonp}`)}`;
         largesound8 = `${iconlogoutG.length << (Math.min(4, Math.abs(firebaseT.size)))}`;
         imagenetworkerrb = `${firebaseT.size >> (Math.min(largesound8.length, 5))}`;
         iconlogoutG += `${largesound8.length % 2}`;
         moonp -= parseFloat(`${imagenetworkerrb.length}`);
      }
         umengt = !foundo.includes(`${umengt}`);
         umengt = 26 >= foundo.length;
      if ((release_gE.length ^ 2) <= 1 || (fastforwarde.length ^ 2) <= 2) {
          let anythinkb = String.fromCharCode(99,95,57,53,95,115,98,117,118,0);
          let positionfieldY = 2.0;
         release_gE = `${fastforwarde.length}`;
         anythinkb += `${anythinkb.length}`;
         positionfieldY *= 1 % (Math.max(1, anythinkb.length));
      }
         fastforwarde = [((umengt ? 4 : 1) | 3)];
      rncoree += `${loadingspinnerL.length}`;
   }
       let otherI = String.fromCharCode(119,95,53,53,95,108,115,112,102,108,112,99,0);
      let changeo = otherI.length <= 9203321;
      do {
         otherI = `${otherI.length}`;
         if (changeo) {
            break;
         }
      } while (changeo && (!otherI.startsWith(otherI)));
         otherI += `${otherI.length}`;
       let lango: Array<any> = [String.fromCharCode(116,95,52,52,95,109,112,101,103,117,116,105,108,115,0), String.fromCharCode(120,95,56,95,115,117,98,102,105,101,108,100,115,0)];
       let arrowrightwithtail5: Array<any> = [61, 366];
      showlessR = `${(gradleU == String.fromCharCode(110,0) ? gradleU.length : parseInt(`${questiconN}`))}`;
   if ((basketballmatchdetailbgR.length - 4) == 3 || 4 == (basketballmatchdetailbgR.length - 4)) {
      basketballmatchdetailbgR.push(1 ^ loadingspinnerL.length);
   }
      gradleU = "1";
   let closeQ = questiconN <= 5510742.0;
   do {
      questiconN *= parseFloat(`${2 * chatroombackgroundU.length}`);
      if (closeQ) {
         break;
      }
   } while ((questiconN < 3.80) && closeQ);
      libfbjniT = `${basketballmatchdetailbgR.length / (Math.max(2, 6))}`;
   let phonea = libfbjniT == String.fromCharCode(122,105,112,50,50,112,57,109,99,121,0);
   do {
      libfbjniT += "3";
      if (phonea) {
         break;
      }
   } while ((basketballmatchdetailbgR.length <= libfbjniT.length) && phonea);
      gradleU += `${parseInt(`${questiconN}`) >> (Math.min(chatroombackgroundU.length, 5))}`;
   let libavcodec1 = chatroombackgroundU == String.fromCharCode(111,103,100,52,106,117,51,118,114,53,0);
   do {
      chatroombackgroundU += `${1 ^ showlessR.length}`;
      if (libavcodec1) {
         break;
      }
   } while (libavcodec1 && ((questiconN / 5.35) <= 4.49));
   for (let z = 0; z < 2; z++) {
      loadingspinnerL = `${showlessR.length % 1}`;
   }
   while (rncoree != String.fromCharCode(56,0) || chatroombackgroundU == String.fromCharCode(118,0)) {
      rncoree += `${gradleU.length - 3}`;
      break;
   }
   while (5 > rncoree.length) {
      rncoree = `${(String.fromCharCode(81,0) == libfbjniT ? libfbjniT.length : basketballmatchdetailbgR.length)}`;
      break;
   }
      showlessR = `${rncoree.length}`;
   let componentN = showlessR == String.fromCharCode(113,101,106,117,105,118,118,57,0);
   do {
      showlessR += `${loadingspinnerL.length}`;
      if (componentN) {
         break;
      }
   } while (componentN && (!showlessR.includes(`${orientation7.length}`)));
      showlessR += `${showlessR.length}`;
   let gradlewc = questiconN >= 7978861.0;
   do {
      questiconN *= parseFloat(`${chatroombackgroundU.length + 2}`);
      if (gradlewc) {
         break;
      }
   } while (gradlewc && (loadingspinnerL.startsWith(`${questiconN}`)));
   for (let u = 0; u < 2; u++) {
      combine2 = new Map([[orientation7, 3 | orientation7.length]]);
   }
      basketballmatchdetailbgR = [3 >> (Math.min(2, rncoree.length))];
      loadingspinnerL = `${(String.fromCharCode(53,0) == orientation7 ? orientation7.length : chatroombackgroundU.length)}`;
      chatroombackgroundU = `${parseInt(`${questiconN}`)}`;
   if (chatroombackgroundU == String.fromCharCode(51,0) && libfbjniT != String.fromCharCode(110,0)) {
      libfbjniT = "2";
   }
   if ((basketballmatchdetailbgR.length << (Math.min(libfbjniT.length, 5))) >= 1 || 1 >= (basketballmatchdetailbgR.length << (Math.min(libfbjniT.length, 4)))) {
      basketballmatchdetailbgR.push(orientation7.length << (Math.min(2, chatroombackgroundU.length)));
   }
   while ((combine2.size ^ 1) == 3 || (orientation7.length ^ 1) == 1) {
      orientation7 += `${basketballmatchdetailbgR.length / (Math.max(libfbjniT.length, 1))}`;
      break;
   }
       let goalm = String.fromCharCode(98,117,102,102,101,114,105,110,103,95,104,95,54,57,0);
       let predictionactivea = 4.0;
      let tempnodatagifv = predictionactivea >= 6879426.0;
      do {
         predictionactivea *= goalm.length;
         if (tempnodatagifv) {
            break;
         }
      } while (tempnodatagifv && ((parseInt(`${predictionactivea}`) - goalm.length) == 3));
         predictionactivea += parseInt(`${predictionactivea}`);
         goalm += `${goalm.length & parseInt(`${predictionactivea}`)}`;
          let chartu = String.fromCharCode(102,105,108,101,119,114,105,116,101,115,116,114,101,97,109,95,111,95,56,52,0);
          let relateds = true;
         goalm += `${(parseInt(`${predictionactivea}`) ^ (relateds ? 4 : 1))}`;
         chartu = `${(chartu == String.fromCharCode(71,0) ? chartu.length : chartu.length)}`;
         relateds = chartu == chartu;
         goalm += `${(goalm == String.fromCharCode(48,0) ? parseInt(`${predictionactivea}`) : goalm.length)}`;
      for (let x = 0; x < 1; x++) {
         predictionactivea /= Math.max(goalm.length, 2);
      }
      gradleU = `${3 | loadingspinnerL.length}`;
       let largebrightness_ = 4.0;
       let iconorientationX = 2.0;
       let libavdevicer = String.fromCharCode(114,95,50,54,95,97,115,102,99,114,121,112,116,0);
          let score0 = 1.0;
         libavdevicer += `${libavdevicer.length | 3}`;
         score0 *= 1;
         largebrightness_ *= parseInt(`${iconorientationX}`) & 3;
          let indicatorc = String.fromCharCode(99,105,110,101,109,97,95,108,95,49,0);
         largebrightness_ *= libavdevicer.length >> (Math.min(Math.abs(3), 1));
         indicatorc += "3";
          let annera = 2;
         iconorientationX /= Math.max(parseFloat(`${parseInt(`${largebrightness_}`) % 3}`), 4);
         annera /= Math.max(annera, 3);
         iconorientationX *= parseFloat(`${libavdevicer.length | parseInt(`${iconorientationX}`)}`);
       let turnA = String.fromCharCode(109,98,117,102,115,95,53,95,54,54,0);
      if (!libavdevicer.startsWith(`${iconorientationX}`)) {
         iconorientationX /= Math.max(2, parseFloat(`${1}`));
      }
          let suboutL = String.fromCharCode(115,116,114,108,99,112,121,95,104,95,56,50,0);
          let giflivestreamingL = String.fromCharCode(100,105,114,97,99,95,51,95,55,54,0);
          let viewerb = String.fromCharCode(102,109,115,117,98,95,120,95,53,56,0);
         iconorientationX -= parseFloat(`${parseInt(`${iconorientationX}`) | 2}`);
         suboutL = `${viewerb.length}`;
         giflivestreamingL = `${viewerb.length >> (Math.min(giflivestreamingL.length, 2))}`;
          let iconclosewhitebgz: Map<any, any> = new Map([[String.fromCharCode(111,108,100,108,105,115,116,95,56,95,55,52,0),509], [String.fromCharCode(109,97,116,99,104,101,115,95,120,95,49,52,0),284]]);
         turnA = `${(turnA == String.fromCharCode(67,0) ? libavdevicer.length : turnA.length)}`;
         iconclosewhitebgz.set(`${iconclosewhitebgz.size}`, iconclosewhitebgz.size);
      orientation7 += `${parseInt(`${largebrightness_}`)}`;
   for (let p = 0; p < 3; p++) {
       let awayteamfield5 = false;
       let typingloadinge = String.fromCharCode(98,117,102,102,101,114,101,118,101,110,116,95,106,95,54,52,0);
       let iconorientation9: Map<any, any> = new Map([[String.fromCharCode(97,99,116,97,98,95,115,95,57,0),370], [String.fromCharCode(105,116,108,101,95,48,95,50,0),253]]);
       let shared = 1.0;
       let resultU = String.fromCharCode(98,111,116,115,95,114,95,56,57,0);
      for (let r = 0; r < 2; r++) {
          let orangeclock3 = String.fromCharCode(118,112,97,116,104,95,101,95,51,57,0);
          let predictiondefault4 = 5.0;
          let hookss = 0.0;
          let inouttargetyellowR = 0.0;
         typingloadinge += `${parseInt(`${predictiondefault4}`)}`;
         orangeclock3 = `${parseInt(`${hookss}`) - 2}`;
         predictiondefault4 -= parseInt(`${hookss}`);
         inouttargetyellowR -= 3 + parseInt(`${inouttargetyellowR}`);
      }
         shared += parseFloat(`${typingloadinge.length}`);
      if (typingloadinge == String.fromCharCode(111,0) || resultU.length >= 4) {
         typingloadinge = `${resultU.length}`;
      }
          let commonU = String.fromCharCode(100,105,114,101,99,116,108,121,95,48,95,51,51,0);
          let assetsA: Map<any, any> = new Map([[String.fromCharCode(120,95,54,48,95,109,117,108,116,105,115,116,101,112,0),346], [String.fromCharCode(101,95,51,53,95,112,101,114,0),80]]);
          let chinasameA = 1;
         iconorientation9.set(`${chinasameA}`, chinasameA);
         commonU += `${commonU.length >> (Math.min(Math.abs(2), 5))}`;
         assetsA.set(`${commonU}`, assetsA.size * 2);
      let usernameD = String.fromCharCode(113,114,98,106,113,107,50,0) == typingloadinge;
      do {
         typingloadinge += `${(typingloadinge == String.fromCharCode(82,0) ? typingloadinge.length : resultU.length)}`;
         if (usernameD) {
            break;
         }
      } while ((!typingloadinge.endsWith(`${shared}`)) && usernameD);
          let phoneX = 2;
         shared /= Math.max(parseFloat(`${typingloadinge.length}`), 5);
         phoneX &= phoneX & phoneX;
          let logoe = String.fromCharCode(113,115,99,97,108,101,98,105,116,115,95,111,95,50,48,0);
         resultU += `${resultU.length * 1}`;
         logoe = `${(String.fromCharCode(70,0) == logoe ? logoe.length : logoe.length)}`;
         resultU += `${((awayteamfield5 ? 4 : 3))}`;
          let nbatrophyi = String.fromCharCode(111,98,106,101,99,116,105,118,101,95,108,95,55,49,0);
          let statisticsactivey: Map<any, any> = new Map([[String.fromCharCode(114,111,108,108,98,97,99,107,95,109,95,51,53,0),false ], [String.fromCharCode(97,109,111,117,110,116,115,95,55,95,56,51,0),true ], [String.fromCharCode(100,101,97,100,105,110,101,95,115,95,52,48,0),true ]]);
          let componentregistryN = 1.0;
         resultU += `${((awayteamfield5 ? 3 : 3))}`;
         nbatrophyi += `${(nbatrophyi == String.fromCharCode(56,0) ? nbatrophyi.length : statisticsactivey.size)}`;
         statisticsactivey = new Map([[`${statisticsactivey.size}`, 2 & statisticsactivey.size]]);
         componentregistryN -= parseFloat(`${statisticsactivey.size}`);
      for (let g = 0; g < 1; g++) {
          let chinay = 2.0;
          let contexto: Map<any, any> = new Map([[String.fromCharCode(109,98,104,115,95,102,95,50,57,0),14], [String.fromCharCode(104,100,108,114,95,100,95,53,53,0),68]]);
          let teamdetailsbgJ: Array<any> = [649, 794];
         shared /= Math.max(parseFloat(`${contexto.size * 1}`), 5);
         chinay /= Math.max(parseFloat(`${teamdetailsbgJ.length >> (Math.min(5, Math.abs(parseInt(`${chinay}`))))}`), 2);
         contexto = new Map([[`${teamdetailsbgJ.length}`, parseInt(`${chinay}`) * teamdetailsbgJ.length]]);
      }
          let footballtrophyS = String.fromCharCode(121,95,49,48,95,116,114,105,97,110,103,117,108,97,114,0);
         resultU = "2";
         footballtrophyS = `${footballtrophyS.length}`;
       let uploadb = 1.0;
       let matchactiveN: Map<any, any> = new Map([[String.fromCharCode(118,116,97,115,107,113,117,101,117,101,95,48,95,54,51,0),849], [String.fromCharCode(119,97,114,110,95,106,95,56,55,0),444], [String.fromCharCode(110,101,116,119,111,114,107,105,110,103,95,107,95,54,49,0),298]]);
       let librrcf: Map<any, any> = new Map([[String.fromCharCode(110,95,53,57,95,100,105,97,108,111,103,117,101,0),true ], [String.fromCharCode(112,95,50,57,95,115,116,114,102,117,110,99,0),false ]]);
         resultU += `${2 ^ parseInt(`${shared}`)}`;
         resultU += `${(parseInt(`${shared}`) & (awayteamfield5 ? 3 : 1))}`;
      questiconN /= Math.max(5, parseFloat(`${loadingspinnerL.length >> (Math.min(chatroombackgroundU.length, 5))}`));
   }
   let gpayN = orientation7 == String.fromCharCode(106,105,48,51,118,114,103,0);
   do {
      orientation7 += `${parseInt(`${questiconN}`)}`;
      if (gpayN) {
         break;
      }
   } while (gpayN && (!showlessR.endsWith(`${orientation7.length}`)));
      questiconN /= Math.max(1, (parseFloat(`${String.fromCharCode(57,0) == rncoree ? gradleU.length : rncoree.length}`)));
   if ((loadingspinnerL.length + flyerq) == 4) {
       let thailandm = String.fromCharCode(102,117,110,99,116,105,111,110,115,95,101,95,51,53,0);
       let iconviewerh = true;
       let long_5K = true;
      while (long_5K) {
         long_5K = thailandm.startsWith(`${iconviewerh}`);
         break;
      }
      while (thailandm.endsWith(`${iconviewerh}`)) {
          let uimanager_ = 1.0;
          let hometeamfieldw = String.fromCharCode(102,102,118,108,95,103,95,49,54,0);
          let libcrashsdkU = 3.0;
          let smallsoundQ = 4.0;
         thailandm += `${thailandm.length ^ parseInt(`${smallsoundQ}`)}`;
         uimanager_ *= parseInt(`${uimanager_}`);
         hometeamfieldw += `${parseInt(`${uimanager_}`) >> (Math.min(Math.abs(parseInt(`${libcrashsdkU}`)), 1))}`;
         libcrashsdkU *= parseFloat(`${1}`);
         smallsoundQ *= 2;
         break;
      }
         iconviewerh = !iconviewerh;
      if (!iconviewerh || thailandm.length == 5) {
         iconviewerh = !iconviewerh || !long_5K;
      }
          let filleds: Map<any, any> = new Map([[String.fromCharCode(119,95,54,55,95,113,117,97,114,116,122,0),String.fromCharCode(122,95,57,48,95,115,117,98,112,97,99,107,101,116,0)], [String.fromCharCode(102,95,49,57,95,101,110,99,97,112,115,117,108,97,116,101,0),String.fromCharCode(98,95,49,95,103,111,108,111,109,98,0)], [String.fromCharCode(108,95,56,54,95,118,101,110,100,111,114,0),String.fromCharCode(97,95,54,56,95,99,111,110,116,101,110,116,0)]]);
          let iconsettingY = String.fromCharCode(100,101,108,101,103,97,116,105,111,110,95,108,95,55,52,0);
          let m_manager1: Map<any, any> = new Map([[String.fromCharCode(112,117,98,108,105,99,95,50,95,50,54,0),153], [String.fromCharCode(120,95,49,51,95,112,114,111,116,101,99,116,0),437], [String.fromCharCode(108,97,121,111,121,116,95,50,95,51,56,0),55]]);
         long_5K = !long_5K || thailandm.length <= 70;
         filleds.set(iconsettingY, (String.fromCharCode(87,0) == iconsettingY ? filleds.size : iconsettingY.length));
         m_manager1.set(`${filleds.size}`, m_manager1.size);
         thailandm += `${((long_5K ? 1 : 2) / (Math.max(3, 10)))}`;
         iconviewerh = thailandm.length <= 67;
      let stra = iconviewerh ? !iconviewerh : iconviewerh;
      do {
         iconviewerh = long_5K && thailandm.length > 81;
         if (stra) {
            break;
         }
      } while (stra && (iconviewerh));
      if (5 <= thailandm.length) {
         iconviewerh = !long_5K;
      }
      flyerq *= orientation7.length * libfbjniT.length;
   }
   if ((questiconN - 1.42) > 5.45) {
       let showX: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,110,101,99,116,95,101,95,55,57,0),331], [String.fromCharCode(109,111,110,111,115,112,97,99,101,95,122,95,50,54,0),261], [String.fromCharCode(114,95,51,95,111,115,116,114,101,97,109,119,114,97,112,112,101,114,0),225]]);
       let inviteM = 3;
       let liveshare2: Map<any, any> = new Map([[String.fromCharCode(120,95,54,57,95,109,118,114,101,102,0),614], [String.fromCharCode(106,95,53,57,95,122,105,112,0),119]]);
       let predictionbannersharedx = 3;
          let libflipperI = String.fromCharCode(117,95,50,50,95,117,110,119,114,97,112,0);
         predictionbannersharedx >>= Math.min(Math.abs(2), 4);
         libflipperI += `${libflipperI.length / 3}`;
      let orientationg = 9791885 >= showX.size;
      do {
         showX.set(`${inviteM}`, 3);
         if (orientationg) {
            break;
         }
      } while ((5 == (showX.size / (Math.max(1, 5))) && (showX.size / 1) == 1) && orientationg);
         showX.set(`${inviteM}`, inviteM >> (Math.min(Math.abs(1), 3)));
       let mutedJ = false;
       let mappingf = 0.0;
      if (!mutedJ) {
         inviteM <<= Math.min(5, Math.abs(3));
      }
      let selectionD = 5331510.0 >= mappingf;
      do {
         mappingf -= parseFloat(`${predictionbannersharedx}`);
         if (selectionD) {
            break;
         }
      } while ((mappingf >= 1.88) && selectionD);
         predictionbannersharedx -= (predictionbannersharedx >> (Math.min(4, Math.abs((mutedJ ? 3 : 4)))));
      questiconN /= Math.max(parseFloat(`${1 | inviteM}`), 4);
   }
      loadingspinnerL = `${1 & rncoree.length}`;
   let tempnodata9 = combine2.size <= 8851935;
   do {
       let mbsplash6 = 4.0;
       let bggradientN = 4;
       let predictionbuttont = 3;
         mbsplash6 /= Math.max(5, 2);
          let lnewsshareV: Map<any, any> = new Map([[String.fromCharCode(120,95,51,50,95,112,97,114,97,108,108,97,120,0),781], [String.fromCharCode(118,95,50,51,0),294], [String.fromCharCode(112,95,57,56,95,116,101,115,116,114,97,110,115,0),102]]);
          let attributedstringT = 2.0;
         bggradientN <<= Math.min(Math.abs(1 | parseInt(`${mbsplash6}`)), 4);
         lnewsshareV = new Map([[`${lnewsshareV.size}`, lnewsshareV.size >> (Math.min(Math.abs(1), 4))]]);
         attributedstringT *= parseFloat(`${parseInt(`${attributedstringT}`) | lnewsshareV.size}`);
          let sende: Array<any> = [568, 440, 936];
         bggradientN %= Math.max(3, 1 - sende.length);
         bggradientN >>= Math.min(1, Math.abs(3));
         bggradientN |= predictionbuttont;
         predictionbuttont ^= parseInt(`${mbsplash6}`);
      for (let g = 0; g < 3; g++) {
         bggradientN ^= predictionbuttont;
      }
      let awayteamfieldM = bggradientN >= 6726707;
      do {
          let basketballplayerplaceholderU = false;
          let wind9 = 1;
          let vipsportl = 5.0;
          let shareblack8 = String.fromCharCode(109,117,109,98,97,105,95,56,95,56,50,0);
         bggradientN ^= shareblack8.length / (Math.max(2, 2));
         basketballplayerplaceholderU = !basketballplayerplaceholderU;
         wind9 -= wind9 ^ parseInt(`${vipsportl}`);
         vipsportl += ((basketballplayerplaceholderU ? 2 : 5) >> (Math.min(Math.abs(parseInt(`${vipsportl}`)), 1)));
         shareblack8 = `${((basketballplayerplaceholderU ? 5 : 2) >> (Math.min(Math.abs(wind9), 4)))}`;
         if (awayteamfieldM) {
            break;
         }
      } while ((3.6 < (2.22 + mbsplash6) || 2.22 < (mbsplash6 + bggradientN)) && awayteamfieldM);
          let privacy9 = false;
          let morey = String.fromCharCode(103,95,53,50,0);
          let circleo = 3.0;
         predictionbuttont >>= Math.min(5, Math.abs(3 + parseInt(`${circleo}`)));
         privacy9 = morey.length <= 71 && !privacy9;
         morey += `${3 >> (Math.min(2, morey.length))}`;
         circleo /= Math.max((parseFloat(`${(privacy9 ? 2 : 3) / 1}`)), 1);
      combine2 = new Map([[`${basketballmatchdetailbgR.length}`, showlessR.length]]);
      if (tempnodata9) {
         break;
      }
   } while (tempnodata9 && ((libfbjniT.length / 3) < 5 && (3 / (Math.max(8, libfbjniT.length))) < 3));
       let predictiondefaultm: Map<any, any> = new Map([[String.fromCharCode(114,95,52,48,95,101,110,99,111,100,105,110,103,98,0),String.fromCharCode(115,111,102,116,119,97,114,101,95,97,95,55,52,0)], [String.fromCharCode(113,108,111,103,115,95,105,95,55,52,0),String.fromCharCode(105,95,49,53,95,115,101,108,101,99,116,105,110,103,0)], [String.fromCharCode(104,95,52,51,95,104,101,108,112,101,114,115,0),String.fromCharCode(99,95,51,48,95,115,116,105,102,102,110,101,115,115,0)]]);
       let activitye = String.fromCharCode(109,101,109,111,106,105,95,55,95,49,57,0);
       let encryptL: Map<any, any> = new Map([[String.fromCharCode(118,95,55,48,95,108,105,98,97,118,114,101,115,97,109,112,108,101,0),14], [String.fromCharCode(115,97,99,107,95,112,95,53,0),913], [String.fromCharCode(114,116,112,112,114,111,116,111,95,111,95,52,56,0),361]]);
      while ((encryptL.size & 5) == 1) {
         activitye = `${predictiondefaultm.size}`;
         break;
      }
       let x_playerc = String.fromCharCode(105,110,105,116,95,108,95,57,56,0);
      for (let y = 0; y < 1; y++) {
          let mimoM: Array<any> = [506, 935, 694];
          let smallorangemane = String.fromCharCode(104,95,56,50,95,115,98,117,118,0);
          let combinedG = String.fromCharCode(111,95,50,95,97,114,105,98,0);
          let modules = String.fromCharCode(113,95,54,55,95,103,101,116,112,101,101,114,97,100,100,114,0);
         activitye += `${combinedG.length}`;
         mimoM.push(mimoM.length % 1);
         smallorangemane = `${mimoM.length * modules.length}`;
         combinedG += `${smallorangemane.length}`;
         modules = `${mimoM.length / (Math.max(smallorangemane.length, 7))}`;
      }
         x_playerc += "3";
         encryptL.set(`${encryptL.size}`, predictiondefaultm.size >> (Math.min(3, Math.abs(encryptL.size))));
      while (x_playerc.length <= 3) {
          let baidul: Map<any, any> = new Map([[String.fromCharCode(108,95,57,51,95,113,117,101,117,101,115,0),287], [String.fromCharCode(105,103,110,112,111,115,116,95,102,95,57,48,0),820]]);
          let fnewinterstitials = String.fromCharCode(108,95,51,57,95,114,116,114,105,109,0);
          let regengd = 5.0;
         encryptL = new Map([[`${predictiondefaultm.size}`, 2]]);
         baidul = new Map([[`${baidul.size}`, 3 / (Math.max(1, baidul.size))]]);
         fnewinterstitials += `${baidul.size}`;
         regengd += parseFloat(`${3 ^ fnewinterstitials.length}`);
         break;
      }
         activitye += `${activitye.length ^ 2}`;
         activitye += `${x_playerc.length}`;
      while (x_playerc != activitye) {
         activitye = "2";
         break;
      }
      combine2 = new Map([[loadingspinnerL, rncoree.length]]);
       let libreactperfloggerjni0 = 1.0;
       let notificationfilled2: Map<any, any> = new Map([[String.fromCharCode(112,111,114,116,114,97,105,116,95,57,95,57,49,0),948], [String.fromCharCode(100,111,99,108,105,115,116,95,100,95,53,0),478]]);
      for (let m = 0; m < 1; m++) {
         notificationfilled2.set(`${libreactperfloggerjni0}`, parseInt(`${libreactperfloggerjni0}`));
      }
       let flipperD = String.fromCharCode(112,95,49,51,95,116,101,109,112,111,114,97,108,0);
       let iconrightorange6 = String.fromCharCode(120,118,105,100,105,100,99,116,95,117,95,55,53,0);
         libreactperfloggerjni0 *= parseFloat(`${notificationfilled2.size}`);
      if (iconrightorange6 == String.fromCharCode(53,0) && flipperD.length > 2) {
         iconrightorange6 = `${3 & flipperD.length}`;
      }
          let flipperi: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,114,121,95,55,95,49,48,0),true ], [String.fromCharCode(107,95,50,54,95,116,114,101,101,0),false ], [String.fromCharCode(110,95,51,53,95,100,111,102,102,115,101,116,115,0),true ]]);
         flipperD += `${flipperi.size}`;
         notificationfilled2.set(iconrightorange6, iconrightorange6.length | notificationfilled2.size);
      libfbjniT += `${gradleU.length}`;
   let renewy = flyerq <= 8770480;
   do {
      flyerq ^= (libfbjniT == String.fromCharCode(106,0) ? parseInt(`${questiconN}`) : libfbjniT.length);
      if (renewy) {
         break;
      }
   } while ((Array.from(combine2.keys()).includes(`${flyerq}`)) && renewy);
   for (let s = 0; s < 3; s++) {
       let tooltips3 = false;
       let libsgcored: Array<any> = [902, 610];
          let const_zZ = String.fromCharCode(103,95,50,53,95,100,105,102,102,101,114,101,110,116,0);
          let robotoJ = String.fromCharCode(109,116,97,102,95,109,95,49,51,0);
          let arrowdownO = String.fromCharCode(98,105,116,114,118,99,111,110,106,95,114,95,52,55,0);
         libsgcored.push((arrowdownO == String.fromCharCode(73,0) ? arrowdownO.length : (tooltips3 ? 4 : 1)));
         const_zZ = `${3 ^ robotoJ.length}`;
         robotoJ = `${robotoJ.length >> (Math.min(Math.abs(2), 3))}`;
       let eventsplashl: Array<any> = [899, 581, 752];
       let types5: Array<any> = [209, 382, 481];
      let showe = 7650342 >= libsgcored.length;
      do {
         libsgcored.push(1);
         if (showe) {
            break;
         }
      } while ((!tooltips3) && showe);
      if (libsgcored.length >= 4) {
          let graphicsS = 4;
          let zhengpian7: Array<any> = [250, 451];
         libsgcored = [graphicsS | zhengpian7.length];
      }
         tooltips3 = eventsplashl.includes(libsgcored[libsgcored.length - 1]);
      while (eventsplashl.length < 3 || 3 < (eventsplashl.length % (Math.max(3, 9)))) {
          let popupY = 0.0;
         tooltips3 = libsgcored.length < 99;
         popupY += parseFloat(`${1}`);
         break;
      }
      chatroombackgroundU = `${3 | showlessR.length}`;
   }
   for (let b = 0; b < 3; b++) {
      privatechatbgD.push(flyerq);
   }
      rncoree += `${gradleU.length << (Math.min(5, basketballmatchdetailbgR.length))}`;
   let topicC = libfbjniT.length >= 5186721;
   do {
      libfbjniT = "2";
      if (topicC) {
         break;
      }
   } while (topicC && (collectionR != String.fromCharCode(99,0)));
       let librrcQ: Array<any> = [792, 443];
      if (librrcQ.length == librrcQ.length) {
          let libreactX = String.fromCharCode(115,101,112,97,114,97,116,101,115,95,56,95,49,48,48,0);
          let suboutx = 5.0;
          let predictionbannerV: Map<any, any> = new Map([[String.fromCharCode(116,104,114,111,116,116,108,101,114,95,104,95,51,48,0),634], [String.fromCharCode(115,95,55,48,95,100,99,115,99,116,112,0),659]]);
         librrcQ.push(librrcQ.length ^ 1);
         libreactX = `${parseInt(`${suboutx}`) ^ libreactX.length}`;
         suboutx -= predictionbannerV.size;
         predictionbannerV = new Map([[`${predictionbannerV.size}`, 2]]);
      }
      if (1 <= (librrcQ.length << (Math.min(4, librrcQ.length)))) {
         librrcQ = [2];
      }
          let pagef = String.fromCharCode(112,114,111,109,105,110,101,110,116,95,51,95,49,56,0);
          let defaultbasketballbgv: Array<any> = [197, 490, 574];
         librrcQ = [pagef.length ^ 1];
         pagef = `${defaultbasketballbgv.length - defaultbasketballbgv.length}`;
      gradleU += "1";
      loadingspinnerL += `${showlessR.length}`;
       let emptyi: Array<any> = [String.fromCharCode(105,110,116,101,103,114,97,116,101,95,108,95,49,56,0), String.fromCharCode(119,95,57,53,95,114,116,99,0)];
      for (let x = 0; x < 3; x++) {
          let leakcheckerI = 0;
          let fullM = 5.0;
          let shareblackG = String.fromCharCode(105,97,116,95,98,95,53,51,0);
          let weiboF = String.fromCharCode(97,110,99,101,115,116,114,121,95,103,95,54,56,0);
         emptyi = [emptyi.length / (Math.max(8, shareblackG.length))];
         leakcheckerI |= (weiboF == String.fromCharCode(75,0) ? parseInt(`${fullM}`) : weiboF.length);
         fullM *= 3 ^ weiboF.length;
         shareblackG += "2";
      }
       let fcdaebecbcbafcdfceaaeccfeacdb_ = true;
       let serviceS = true;
         fcdaebecbcbafcdfceaaeccfeacdb_ = emptyi.includes(fcdaebecbcbafcdfceaaeccfeacdb_);
      privatechatbgD.push(1 >> (Math.min(2, Math.abs(combine2.size))));
   if (5 == (privatechatbgD.length ^ collectionR.length)) {
      collectionR = "2";
   }
   let livesharez = String.fromCharCode(57,49,121,95,54,50,100,55,0) == collectionR;
   do {
      collectionR += "1";
      if (livesharez) {
         break;
      }
   } while (livesharez && (chatroombackgroundU != collectionR));
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
       let linki = 0.0;
    let chatroombackgroundb = String.fromCharCode(101,95,56,56,0);
    let predictionbannersharedu = String.fromCharCode(107,101,121,115,95,109,95,51,49,0);
    let latnW: Map<any, any> = new Map([[String.fromCharCode(111,102,102,115,99,114,101,101,110,95,98,95,51,54,0),289], [String.fromCharCode(101,95,53,57,95,101,114,97,115,101,0),912]]);
    let showmoreI = false;
    let iconarrowrightwhiteZ = String.fromCharCode(103,114,111,117,112,115,95,111,95,57,49,0);
    let halfz = 4;
    let rootj = 0;
    let darkN = 0;
    let libcxxcomponents5 = 1.0;
    let vietnamL: Map<any, any> = new Map([[String.fromCharCode(99,97,116,97,108,111,103,95,112,95,57,53,0),8], [String.fromCharCode(117,95,55,51,95,113,112,101,108,111,114,0),596]]);
    let awayteamfieldR = 5.0;
    let backicony = false;
    let iconorientationy = true;
    let analyticb = String.fromCharCode(112,95,53,56,95,112,105,112,0);
   if (3 < (4 | darkN) || (4 | darkN) < 1) {
      darkN *= ((showmoreI ? 1 : 5) >> (Math.min(chatroombackgroundb.length, 4)));
   }
   while (iconarrowrightwhiteZ.length < 2) {
      darkN <<= Math.min(Math.abs(parseInt(`${libcxxcomponents5}`)), 3);
      break;
   }
       let livesharew = true;
       let whiteanimationlive9 = String.fromCharCode(108,95,51,95,108,105,99,101,110,115,101,0);
       let h_manager6 = String.fromCharCode(105,110,100,101,120,105,110,103,95,109,95,57,49,0);
         h_manager6 = `${(1 & (livesharew ? 2 : 2))}`;
         whiteanimationlive9 = `${h_manager6.length ^ 1}`;
         whiteanimationlive9 += `${h_manager6.length ^ whiteanimationlive9.length}`;
         h_manager6 += `${h_manager6.length}`;
       let taiwanE = true;
       let streamingi = true;
         streamingi = (!taiwanE ? livesharew : !taiwanE);
          let directS = String.fromCharCode(118,95,56,51,95,115,121,115,116,101,109,100,101,112,101,110,100,101,110,116,0);
          let activityH = String.fromCharCode(109,105,114,114,111,114,95,102,95,57,54,0);
         whiteanimationlive9 += `${activityH.length}`;
         directS += `${directS.length}`;
         activityH = `${directS.length}`;
         taiwanE = whiteanimationlive9.length < 79 && livesharew;
      for (let b = 0; b < 3; b++) {
         streamingi = (9 < ((!streamingi ? 9 : h_manager6.length) / (Math.max(5, h_manager6.length))));
      }
      latnW = new Map([[`${rootj}`, predictionbannersharedu.length]]);
      rootj <<= Math.min(3, Math.abs(darkN / 3));
      latnW = new Map([[`${halfz}`, predictionbannersharedu.length]]);
      linki *= parseFloat(`${3}`);
   for (let s = 0; s < 3; s++) {
      vietnamL.set(`${rootj}`, vietnamL.size);
   }
       let with_wn: Map<any, any> = new Map([[String.fromCharCode(104,95,52,53,95,112,112,102,108,97,103,115,0),58], [String.fromCharCode(108,111,97,100,95,116,95,55,48,0),668], [String.fromCharCode(114,111,119,115,107,105,112,95,115,95,52,54,0),981]]);
         with_wn.set(`${with_wn.size}`, with_wn.size << (Math.min(Math.abs(with_wn.size), 3)));
       let subbasketballplayerD: Array<any> = [554, 418, 476];
      while (4 < (with_wn.size - subbasketballplayerD.length) && (with_wn.size - 4) < 2) {
         with_wn.set(`${subbasketballplayerD.length}`, with_wn.size);
         break;
      }
      vietnamL = new Map([[`${latnW.size}`, latnW.size]]);
       let userZ = String.fromCharCode(99,95,50,50,95,102,117,110,99,116,105,111,110,0);
         userZ += `${userZ.length * 3}`;
          let gradlewY = 3.0;
          let defaultplayerimgg = 4;
          let activityI = String.fromCharCode(112,95,56,53,95,99,97,112,116,105,111,110,0);
         userZ += `${userZ.length}`;
         gradlewY -= (String.fromCharCode(102,0) == activityI ? activityI.length : parseInt(`${gradlewY}`));
         defaultplayerimgg -= 2;
          let yingB = 1;
          let promotion2 = 5.0;
          let minimizey = 0;
         userZ = `${1 >> (Math.min(Math.abs(minimizey), 2))}`;
         yingB /= Math.max(parseInt(`${promotion2}`), 4);
         promotion2 -= parseFloat(`${parseInt(`${promotion2}`) + yingB}`);
         minimizey *= yingB;
      libcxxcomponents5 /= Math.max(chatroombackgroundb.length << (Math.min(Math.abs(1), 4)), 3);
      vietnamL.set(`${showmoreI}`, ((showmoreI ? 1 : 4)));
   while (!Array.from(vietnamL.values()).includes(darkN)) {
      darkN >>= Math.min(Math.abs(1), 5);
      break;
   }
   if (2 >= (1 * vietnamL.size) || (vietnamL.size - parseInt(`${libcxxcomponents5}`)) >= 1) {
      vietnamL.set(chatroombackgroundb, (chatroombackgroundb == String.fromCharCode(51,0) ? iconarrowrightwhiteZ.length : chatroombackgroundb.length));
   }
   for (let l = 0; l < 1; l++) {
      darkN /= Math.max(1, darkN | 3);
   }
   let sliderY = predictionbannersharedu.length >= 8708958;
   do {
       let emojihearth = true;
       let componentregistryQ: Array<any> = [948, 59, 356];
      let interstitialZ = 9413133 <= componentregistryQ.length;
      do {
         componentregistryQ = [2];
         if (interstitialZ) {
            break;
         }
      } while (interstitialZ && (1 > (3 - componentregistryQ.length)));
      let clubh = 7873352 >= componentregistryQ.length;
      do {
         componentregistryQ = [componentregistryQ.length / (Math.max(2, 10))];
         if (clubh) {
            break;
         }
      } while (clubh && ((3 >> (Math.min(1, componentregistryQ.length))) < 1 && emojihearth));
      if (componentregistryQ.length > 1 && (1 & componentregistryQ.length) > 3) {
          let footballfield3 = 5.0;
          let minij = 0.0;
          let subtextw = String.fromCharCode(119,95,57,54,95,108,101,114,116,0);
         componentregistryQ = [subtextw.length];
         footballfield3 /= Math.max(2, 1 * parseInt(`${footballfield3}`));
         minij -= parseInt(`${footballfield3}`) + parseInt(`${minij}`);
         subtextw = `${2 & parseInt(`${footballfield3}`)}`;
      }
      if (componentregistryQ.length < 5) {
          let modalu = 5.0;
          let dependencym = 1;
          let reviewm = String.fromCharCode(105,112,118,95,103,95,53,56,0);
          let smallorangemanH = String.fromCharCode(115,95,57,54,95,102,117,108,102,105,108,108,0);
         componentregistryQ.push(1 * componentregistryQ.length);
         modalu -= 3 >> (Math.min(5, smallorangemanH.length));
         dependencym -= (String.fromCharCode(115,0) == smallorangemanH ? parseInt(`${modalu}`) : smallorangemanH.length);
         reviewm = `${1 * dependencym}`;
      }
         componentregistryQ = [componentregistryQ.length % 3];
          let watchK = String.fromCharCode(114,101,102,112,97,115,115,95,113,95,49,55,0);
         componentregistryQ.push(watchK.length * componentregistryQ.length);
      predictionbannersharedu = `${chatroombackgroundb.length / 2}`;
      if (sliderY) {
         break;
      }
   } while (sliderY && (iconarrowrightwhiteZ != String.fromCharCode(52,0) && 1 < predictionbannersharedu.length));
      vietnamL = new Map([[`${latnW.size}`, (2 * (showmoreI ? 2 : 2))]]);
      showmoreI = linki <= libcxxcomponents5;
       let androidN = String.fromCharCode(115,101,97,100,95,48,95,53,50,0);
      while (!androidN.includes(`${androidN.length}`)) {
         androidN += `${androidN.length}`;
         break;
      }
      let templateprocessorr = androidN.length >= 8291062;
      do {
          let bdxadsdkw = 5;
          let templateprocessort: Array<any> = [561, 978, 514];
          let serviceY = false;
         androidN += `${bdxadsdkw >> (Math.min(Math.abs(3), 5))}`;
         bdxadsdkw |= templateprocessort.length - 1;
         templateprocessort.push(templateprocessort.length * 1);
         if (templateprocessorr) {
            break;
         }
      } while (templateprocessorr && (androidN == String.fromCharCode(90,0)));
         androidN = `${androidN.length / 2}`;
      chatroombackgroundb = `${3 | darkN}`;
   if ((vietnamL.size % 3) >= 2) {
       let basketballicon_: Array<any> = [String.fromCharCode(102,111,114,116,104,95,106,95,48,0), String.fromCharCode(97,95,56,50,95,115,116,114,111,107,101,0), String.fromCharCode(112,95,54,52,95,115,121,109,98,111,108,115,0)];
      let halft = basketballicon_.length >= 7909072;
      do {
          let iconschedulea = String.fromCharCode(98,105,116,118,101,99,95,53,95,53,0);
          let shareb: Map<any, any> = new Map([[String.fromCharCode(112,101,101,107,95,97,95,51,53,0),660], [String.fromCharCode(122,95,51,51,95,98,97,116,116,101,114,121,0),647], [String.fromCharCode(119,95,56,51,95,111,108,100,108,105,115,116,0),911]]);
          let homeloadingS = String.fromCharCode(122,95,54,55,95,115,104,111,119,99,113,116,0);
          let episodesf: Map<any, any> = new Map([[String.fromCharCode(97,114,111,117,110,100,95,119,95,52,48,0),false ], [String.fromCharCode(119,95,54,53,95,101,120,97,109,112,108,101,0),false ], [String.fromCharCode(99,111,110,115,116,116,105,109,101,95,109,95,57,49,0),false ]]);
          let orangetickb = 5;
         basketballicon_ = [homeloadingS.length];
         iconschedulea += `${(String.fromCharCode(56,0) == iconschedulea ? iconschedulea.length : shareb.size)}`;
         shareb = new Map([[`${episodesf.size}`, iconschedulea.length ^ episodesf.size]]);
         homeloadingS = `${iconschedulea.length & 1}`;
         orangetickb >>= Math.min(5, Math.abs(orangetickb));
         if (halft) {
            break;
         }
      } while ((basketballicon_.length <= 1) && halft);
         basketballicon_.push(2);
          let watchnowbgR = 5.0;
          let mapbuffers = String.fromCharCode(98,121,116,101,115,116,114,101,97,109,95,110,95,56,48,0);
          let predictionlossV = String.fromCharCode(116,97,117,95,111,95,49,55,0);
         basketballicon_.push(predictionlossV.length + 1);
         watchnowbgR /= Math.max(parseFloat(`${mapbuffers.length}`), 4);
         mapbuffers = `${3 & parseInt(`${watchnowbgR}`)}`;
         predictionlossV = `${1 << (Math.min(2, Math.abs(parseInt(`${watchnowbgR}`))))}`;
      predictionbannersharedu += "1";
   }
       let analyticg = true;
       let phonesharey = String.fromCharCode(115,95,50,53,95,109,97,116,99,104,101,100,0);
       let routerS = String.fromCharCode(108,95,51,53,95,118,97,114,120,104,0);
          let owngoal2: Array<any> = [754, 594];
          let side3 = 4.0;
          let pingv: Map<any, any> = new Map([[String.fromCharCode(102,95,55,54,95,99,97,110,118,97,115,0),446], [String.fromCharCode(101,95,55,56,95,104,116,109,108,109,97,114,107,117,112,0),384], [String.fromCharCode(99,95,54,56,95,117,110,114,105,115,101,0),550]]);
         analyticg = String.fromCharCode(53,0) == routerS;
         owngoal2 = [2];
         side3 -= owngoal2.length;
         pingv.set(`${side3}`, pingv.size + 2);
      while (analyticg) {
         routerS = `${(2 * (analyticg ? 1 : 5))}`;
         break;
      }
      let sheetr = 7793978 <= phonesharey.length;
      do {
         phonesharey += `${((analyticg ? 5 : 5))}`;
         if (sheetr) {
            break;
         }
      } while (sheetr && (analyticg));
      for (let e = 0; e < 2; e++) {
          let iconarrowrightD = String.fromCharCode(110,115,112,97,99,101,115,95,121,95,49,55,0);
          let libreactnativejniw = String.fromCharCode(108,115,102,108,115,112,95,52,95,51,49,0);
          let traminiR = true;
          let orangeclockF: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,110,103,116,104,95,48,95,51,56,0),234], [String.fromCharCode(104,95,57,51,95,111,108,100,101,114,0),585]]);
         routerS = `${((traminiR ? 4 : 5))}`;
         iconarrowrightD = "2";
         libreactnativejniw = `${(libreactnativejniw == String.fromCharCode(120,0) ? orangeclockF.size : libreactnativejniw.length)}`;
         traminiR = (orangeclockF.size * libreactnativejniw.length) >= 66;
      }
          let projectx = 3.0;
         routerS = "1";
         projectx -= parseFloat(`${parseInt(`${projectx}`) << (Math.min(5, Math.abs(2)))}`);
         routerS = `${(phonesharey == String.fromCharCode(103,0) ? phonesharey.length : (analyticg ? 5 : 2))}`;
      for (let j = 0; j < 1; j++) {
         routerS += `${1 & routerS.length}`;
      }
       let orientationn = 2;
       let iconstar3 = 1;
      while (2 < routerS.length) {
         routerS += `${phonesharey.length}`;
         break;
      }
      chatroombackgroundb += `${halfz}`;
   for (let j = 0; j < 3; j++) {
      linki += parseFloat(`${iconarrowrightwhiteZ.length}`);
   }
      libcxxcomponents5 *= ((showmoreI ? 2 : 1) ^ rootj);
   while (3 > (3 >> (Math.min(3, Math.abs(darkN)))) && (darkN >> (Math.min(1, Math.abs(rootj)))) > 3) {
       let webviewD: Map<any, any> = new Map([[String.fromCharCode(99,95,55,57,95,97,108,108,111,119,105,0),901], [String.fromCharCode(113,95,49,49,95,98,105,113,117,97,100,0),708]]);
       let profileactiveI = String.fromCharCode(122,95,56,51,95,107,101,121,115,116,114,101,97,109,0);
       let rocket6 = String.fromCharCode(97,100,106,117,115,116,95,119,95,55,53,0);
      for (let y = 0; y < 2; y++) {
         webviewD.set(rocket6, 3 * rocket6.length);
      }
         webviewD = new Map([[rocket6, profileactiveI.length]]);
         webviewD.set(`${profileactiveI}`, (String.fromCharCode(107,0) == profileactiveI ? webviewD.size : profileactiveI.length));
      let sina9 = 9695249 <= rocket6.length;
      do {
         rocket6 = `${1 >> (Math.min(4, rocket6.length))}`;
         if (sina9) {
            break;
         }
      } while ((3 >= (webviewD.size >> (Math.min(rocket6.length, 4))) && 5 >= (rocket6.length >> (Math.min(Math.abs(3), 5)))) && sina9);
      let streamingX = String.fromCharCode(108,116,112,53,98,103,49,0) == rocket6;
      do {
          let switch_eo3 = 1;
          let greyticki: Array<any> = [314, 988, 422];
          let mbbanner1 = String.fromCharCode(111,95,54,56,95,99,109,115,103,115,0);
          let mapping4 = 0.0;
         rocket6 = `${rocket6.length}`;
         switch_eo3 &= 1;
         greyticki = [switch_eo3];
         mbbanner1 = `${1 * greyticki.length}`;
         mapping4 += greyticki.length;
         if (streamingX) {
            break;
         }
      } while ((profileactiveI != rocket6) && streamingX);
      darkN <<= Math.min(Math.abs(rootj), 3);
      break;
   }
       let predictionbuttonm: Array<any> = [635, 654, 151];
       let model3 = String.fromCharCode(121,95,55,55,95,114,101,115,105,100,117,97,108,0);
       let unreadS = String.fromCharCode(108,105,102,101,116,105,109,101,95,101,95,56,52,0);
       let matchI = String.fromCharCode(114,97,116,105,110,103,95,57,95,57,48,0);
         unreadS += `${unreadS.length}`;
      let mapbufferW = unreadS.length >= 5034500;
      do {
         unreadS = `${predictionbuttonm.length / (Math.max(model3.length, 8))}`;
         if (mapbufferW) {
            break;
         }
      } while ((1 == model3.length) && mapbufferW);
          let predictiondefaulty = String.fromCharCode(114,101,99,104,101,99,107,95,117,95,57,54,0);
          let wifirouterV: Map<any, any> = new Map([[String.fromCharCode(98,117,103,115,95,105,95,49,0),942], [String.fromCharCode(99,111,110,99,114,101,116,101,95,120,95,51,54,0),674], [String.fromCharCode(97,95,56,54,95,117,110,105,116,0),553]]);
         model3 += `${predictionbuttonm.length & matchI.length}`;
         predictiondefaulty += `${wifirouterV.size % 1}`;
         wifirouterV.set(predictiondefaulty, predictiondefaulty.length - wifirouterV.size);
      for (let e = 0; e < 2; e++) {
         unreadS += `${unreadS.length - matchI.length}`;
      }
         unreadS = `${matchI.length - 3}`;
          let mutedF: Array<any> = [String.fromCharCode(105,95,53,95,115,117,98,112,105,120,101,108,0), String.fromCharCode(112,108,105,115,116,95,51,95,56,48,0), String.fromCharCode(97,117,100,105,116,105,110,103,95,121,95,53,54,0)];
          let privilegew = String.fromCharCode(97,95,50,52,95,109,100,112,114,0);
          let redgoalD = String.fromCharCode(109,117,108,116,105,112,108,101,120,95,111,95,49,56,0);
         model3 += `${matchI.length & 1}`;
         mutedF = [(String.fromCharCode(117,0) == privilegew ? privilegew.length : mutedF.length)];
         redgoalD = "2";
       let eyeopenx: Map<any, any> = new Map([[String.fromCharCode(97,99,99,114,117,101,95,117,95,55,53,0),764], [String.fromCharCode(107,95,50,49,95,112,111,105,110,116,115,0),447]]);
       let iconeyep: Map<any, any> = new Map([[String.fromCharCode(108,97,117,110,99,104,101,115,95,107,95,51,48,0),String.fromCharCode(117,110,98,108,117,114,95,49,95,56,57,0)], [String.fromCharCode(99,108,117,115,116,101,114,95,108,95,56,54,0),String.fromCharCode(119,95,56,95,114,97,100,105,97,110,115,0)]]);
         matchI = `${matchI.length}`;
      linki -= parseFloat(`${darkN}`);
   while (2 <= (darkN * 1)) {
      showmoreI = chatroombackgroundb.includes(`${darkN}`);
      break;
   }
   let showmoreX = String.fromCharCode(122,49,98,0) == iconarrowrightwhiteZ;
   do {
      iconarrowrightwhiteZ += "1";
      if (showmoreX) {
         break;
      }
   } while (((iconarrowrightwhiteZ.length / (Math.max(1, 1))) <= 2 && 1 <= (rootj / (Math.max(4, iconarrowrightwhiteZ.length)))) && showmoreX);
   while (1 >= (latnW.size / 1) || !showmoreI) {
      latnW.set(iconarrowrightwhiteZ, ((backicony ? 4 : 1)));
      break;
   }
       let appleQ = 2.0;
         appleQ += 3;
         appleQ /= Math.max(5, parseInt(`${appleQ}`));
       let libanen = String.fromCharCode(99,100,106,112,101,103,95,115,95,50,49,0);
      darkN |= predictionbannersharedu.length << (Math.min(Math.abs(1), 2));
       let penaltymatchicon_: Map<any, any> = new Map([[String.fromCharCode(106,115,116,121,112,101,95,48,95,57,53,0),301], [String.fromCharCode(118,95,56,57,95,99,117,115,116,111,109,0),707], [String.fromCharCode(110,95,49,50,95,97,100,100,105,116,105,118,101,0),519]]);
          let ballR = 5;
          let macauO = String.fromCharCode(115,95,52,49,95,104,99,104,97,99,104,97,0);
         penaltymatchicon_ = new Map([[`${penaltymatchicon_.size}`, ballR]]);
         ballR &= macauO.length ^ macauO.length;
         penaltymatchicon_.set(`${penaltymatchicon_.size}`, 1 | penaltymatchicon_.size);
      if (Array.from(penaltymatchicon_.keys()).includes(`${penaltymatchicon_.size}`)) {
         penaltymatchicon_.set(`${penaltymatchicon_.size}`, penaltymatchicon_.size | penaltymatchicon_.size);
      }
      predictionbannersharedu = `${halfz ^ parseInt(`${linki}`)}`;
      chatroombackgroundb += "2";
   for (let x = 0; x < 1; x++) {
      backicony = rootj <= analyticb.length;
   }
   while (chatroombackgroundb.includes(`${predictionbannersharedu.length}`)) {
      predictionbannersharedu = `${(rootj * (iconorientationy ? 3 : 2))}`;
      break;
   }
      backicony = latnW.size < vietnamL.size;
   let unfills = chatroombackgroundb == String.fromCharCode(53,109,49,48,102,115,50,101,0);
   do {
      chatroombackgroundb += `${((showmoreI ? 1 : 2))}`;
      if (unfills) {
         break;
      }
   } while (((vietnamL.size + chatroombackgroundb.length) > 1 || 1 > (1 + chatroombackgroundb.length)) && unfills);
   let weibo2 = iconorientationy ? !iconorientationy : iconorientationy;
   do {
       let alertZ = 2.0;
      let castM = 7693789.0 >= alertZ;
      do {
         alertZ += parseFloat(`${parseInt(`${alertZ}`)}`);
         if (castM) {
            break;
         }
      } while ((2.65 <= (alertZ - 3.10) && 2.72 <= (alertZ - 3.10)) && castM);
      while ((3.15 + alertZ) == 5.73 || (3.15 / (Math.max(6, alertZ))) == 3.13) {
         alertZ += parseFloat(`${parseInt(`${alertZ}`)}`);
         break;
      }
      if (alertZ < alertZ) {
         alertZ -= parseFloat(`${parseInt(`${alertZ}`) << (Math.min(5, Math.abs(parseInt(`${alertZ}`))))}`);
      }
      iconorientationy = !iconorientationy;
      if (weibo2) {
         break;
      }
   } while (weibo2 && (2 > (halfz / 4)));
       let indicatorb = String.fromCharCode(102,95,51,55,95,104,119,114,97,110,100,0);
       let pingH = String.fromCharCode(116,95,54,48,95,115,97,109,112,108,101,114,97,116,101,115,0);
       let long_y3M = 0.0;
          let awayicon9 = String.fromCharCode(98,117,102,102,101,114,115,105,110,107,95,118,95,53,56,0);
          let downloads = 2.0;
          let dragcloser: Map<any, any> = new Map([[String.fromCharCode(108,95,56,95,99,97,99,104,101,0),202], [String.fromCharCode(106,95,55,49,95,112,114,105,109,101,0),82], [String.fromCharCode(103,95,51,95,99,109,115,103,115,0),958]]);
         pingH += `${parseInt(`${downloads}`) + 3}`;
         awayicon9 += "2";
         downloads -= (awayicon9 == String.fromCharCode(83,0) ? awayicon9.length : dragcloser.size);
         dragcloser = new Map([[`${dragcloser.size}`, dragcloser.size / (Math.max(awayicon9.length, 3))]]);
       let hometeamfieldx = 5.0;
       let arrowselectdownt = 0.0;
       let linkP = String.fromCharCode(113,95,56,49,95,105,115,97,99,102,105,120,0);
       let iconqqq = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,115,95,116,95,54,56,0);
         arrowselectdownt *= parseFloat(`${2}`);
          let infoX: Map<any, any> = new Map([[String.fromCharCode(105,95,52,49,95,110,105,109,97,116,101,100,0),String.fromCharCode(114,101,99,101,110,116,101,114,95,51,95,51,54,0)], [String.fromCharCode(118,95,54,51,95,109,112,108,97,110,101,0),String.fromCharCode(102,105,103,117,114,101,95,111,95,52,56,0)]]);
         pingH += `${parseInt(`${long_y3M}`) % (Math.max(pingH.length, 4))}`;
         infoX = new Map([[`${infoX.size}`, 3 << (Math.min(4, Math.abs(infoX.size)))]]);
         long_y3M += parseFloat(`${parseInt(`${arrowselectdownt}`)}`);
       let matchesV = 3.0;
       let middlesoundf = 1.0;
      for (let c = 0; c < 1; c++) {
          let filledn = 3.0;
          let sendk = 2;
          let c_animation2: Array<any> = [37, 117, 736];
          let plusX = 4.0;
         middlesoundf /= Math.max(1, parseFloat(`${3}`));
         filledn += 1;
         sendk |= sendk;
         c_animation2 = [3];
         plusX -= parseFloat(`${parseInt(`${plusX}`)}`);
      }
         arrowselectdownt -= (parseFloat(`${iconqqq == String.fromCharCode(88,0) ? parseInt(`${matchesV}`) : iconqqq.length}`));
      latnW = new Map([[iconarrowrightwhiteZ, (3 / (Math.max(5, (backicony ? 5 : 3))))]]);
      indicatorb += `${indicatorb.length}`;
   let componentregistryO = iconorientationy ? !iconorientationy : iconorientationy;
   do {
      iconorientationy = awayteamfieldR <= libcxxcomponents5;
      if (componentregistryO) {
         break;
      }
   } while ((iconorientationy || 3 < analyticb.length) && componentregistryO);
   for (let c = 0; c < 2; c++) {
      backicony = !showmoreI;
   }
   let r_titleR = 8899000.0 <= linki;
   do {
      linki /= Math.max(parseFloat(`${halfz}`), 4);
      if (r_titleR) {
         break;
      }
   } while (((darkN / 1) <= 1 && 3 <= (darkN - 1)) && r_titleR);
      halfz *= 1;
   for (let w = 0; w < 1; w++) {
       let largesoundN: Array<any> = [463, 448];
          let filter7 = String.fromCharCode(115,116,111,112,112,105,110,103,95,101,95,50,55,0);
          let videocommonx = String.fromCharCode(111,95,56,55,95,116,98,108,101,110,100,0);
         largesoundN.push((filter7 == String.fromCharCode(97,0) ? videocommonx.length : filter7.length));
          let iconnotificationnewb = 4.0;
         largesoundN = [largesoundN.length * 2];
         iconnotificationnewb += parseInt(`${iconnotificationnewb}`);
          let templateprocessorG = 4;
          let homeactiveE = 2;
         largesoundN = [templateprocessorG];
         homeactiveE |= homeactiveE ^ homeactiveE;
      predictionbannersharedu = `${2 % (Math.max(6, iconarrowrightwhiteZ.length))}`;
   }
      rootj -= 1;
   let unimplementedviewC = 7472264 >= iconarrowrightwhiteZ.length;
   do {
      iconarrowrightwhiteZ += "2";
      if (unimplementedviewC) {
         break;
      }
   } while (((iconarrowrightwhiteZ.length >> (Math.min(Math.abs(5), 5))) == 1) && unimplementedviewC);
   while (latnW.get(`${awayteamfieldR}`) != null) {
      latnW = new Map([[`${backicony}`, ((backicony ? 1 : 4) ^ parseInt(`${libcxxcomponents5}`))]]);
      break;
   }
      iconorientationy = (darkN + linki) > 59;
 },
      onReadyForDisplay,
    }: wawaAwayShow,
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
      "userDebugMiddleware" | "none" | "uimanagerNewsshare"
    >("none");
    const [playbackRate, setPlaybackRate] = useState<number>(1);
    const controlsRef = useRef() as React.MutableRefObject<wawaRefreshborderlessFeedback>;
    const accumulatedSkip = useRef(0);
    const [isLastForward, setIsLastForward] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const screenState: screenModel = useAppSelector(
      ({ screenReducer }) => screenReducer
    );
    const userState = useSelector<wawaPhoneControls>('userReducer');
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
       let read_ = String.fromCharCode(119,95,57,95,111,117,116,108,105,110,107,0);
    let iconcurrentmatchJ = 4.0;
    let store_ = 4;
    let package_gp0 = 1.0;
    let roomD = String.fromCharCode(115,95,52,53,95,104,101,120,100,117,109,112,0);
    let clockm: Array<any> = [String.fromCharCode(117,95,55,48,95,118,105,101,119,101,100,0), String.fromCharCode(102,116,101,108,108,95,50,95,56,48,0), String.fromCharCode(117,95,54,95,97,117,116,111,100,111,119,110,108,111,97,100,0)];
    let scorepopsoundX = String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,95,50,95,50,55,0);
    let greeny = String.fromCharCode(119,95,52,57,0);
    let valuesy = String.fromCharCode(113,95,52,50,95,111,116,104,0);
       let icontransferclubT = 4;
       let zhubob: Array<any> = [497, 639];
       let becomez = 5.0;
      while ((zhubob.length * 3) == 1) {
         icontransferclubT >>= Math.min(Math.abs(zhubob.length + icontransferclubT), 5);
         break;
      }
         becomez *= parseFloat(`${parseInt(`${becomez}`) & zhubob.length}`);
         icontransferclubT ^= 2;
          let defaultplayerimg8 = 1.0;
          let matchdetailbg0 = String.fromCharCode(115,105,103,104,95,56,95,49,55,0);
         becomez /= Math.max(4, parseFloat(`${parseInt(`${defaultplayerimg8}`)}`));
         matchdetailbg0 += "3";
      if (1 >= zhubob.length) {
         zhubob.push(parseInt(`${becomez}`) << (Math.min(3, Math.abs(icontransferclubT))));
      }
      let type_qm = zhubob.length <= 8607003;
      do {
          let whiteanimationliveM = 3.0;
         zhubob = [parseInt(`${whiteanimationliveM}`) & 1];
         if (type_qm) {
            break;
         }
      } while ((!zhubob.includes(icontransferclubT)) && type_qm);
          let libswresampleD = false;
          let awayp: Array<any> = [266, 434];
         zhubob.push(zhubob.length);
         libswresampleD = !libswresampleD;
         awayp = [((libswresampleD ? 1 : 5) | 2)];
      for (let f = 0; f < 2; f++) {
         icontransferclubT |= parseInt(`${becomez}`);
      }
      while (zhubob.includes(becomez)) {
         zhubob.push(1 % (Math.max(9, parseInt(`${becomez}`))));
         break;
      }
      roomD += `${icontransferclubT ^ 3}`;
   if (3.97 < (package_gp0 + parseFloat(`${read_.length}`))) {
      read_ = "3";
   }
      package_gp0 /= Math.max(parseFloat(`${parseInt(`${package_gp0}`) / (Math.max(1, store_))}`), 4);
       let matchT = String.fromCharCode(106,95,57,48,95,114,97,103,103,97,98,108,101,0);
          let libfbjniQ: Map<any, any> = new Map([[String.fromCharCode(101,118,101,110,97,118,103,95,111,95,53,53,0),String.fromCharCode(100,95,56,55,95,113,117,97,110,116,105,122,101,114,0)], [String.fromCharCode(116,105,109,101,95,113,95,54,56,0),String.fromCharCode(118,97,105,108,97,98,105,108,105,116,121,95,100,95,50,57,0)], [String.fromCharCode(97,95,53,54,95,109,111,115,97,105,99,0),String.fromCharCode(100,108,105,100,120,95,55,95,49,55,0)]]);
          let typingloadingX = 2;
         matchT = `${libfbjniQ.size & typingloadingX}`;
      for (let g = 0; g < 1; g++) {
         matchT += `${(String.fromCharCode(118,0) == matchT ? matchT.length : matchT.length)}`;
      }
      while (matchT.length <= 4 && matchT.length <= 4) {
         matchT = `${matchT.length << (Math.min(Math.abs(3), 1))}`;
         break;
      }
      greeny += `${store_}`;
   if ((parseInt(`${iconcurrentmatchJ}`) + scorepopsoundX.length) <= 2) {
      scorepopsoundX = `${parseInt(`${package_gp0}`)}`;
   }

      if (onBack !== undefined) {

       let profileactive0 = 4.0;
       let actionsW: Array<any> = [15, 855];
       let livev: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,116,113,112,95,112,95,55,50,0),745], [String.fromCharCode(101,120,97,109,112,108,101,95,103,95,52,50,0),35], [String.fromCharCode(107,95,49,53,95,114,111,120,121,0),447]]);
         profileactive0 -= parseFloat(`${livev.size | parseInt(`${profileactive0}`)}`);
         actionsW = [livev.size & parseInt(`${profileactive0}`)];
          let halffieldimagek = true;
         profileactive0 += parseFloat(`${1}`);
         halffieldimagek = !halffieldimagek;
         actionsW.push(actionsW.length);
      let imageso = profileactive0 <= 9093322.0;
      do {
         profileactive0 *= parseFloat(`${2}`);
         if (imageso) {
            break;
         }
      } while (imageso && ((profileactive0 + parseFloat(`${livev.size}`)) > 3.28));
      if (5.8 == profileactive0) {
         profileactive0 *= parseFloat(`${livev.size + actionsW.length}`);
      }
         actionsW = [parseInt(`${profileactive0}`)];
      if (!Array.from(livev.values()).includes(actionsW.length)) {
          let textinputs = String.fromCharCode(110,111,97,108,108,111,99,95,121,95,52,50,0);
          let libyogaC = 3.0;
          let modityZ = String.fromCharCode(105,110,99,108,117,115,105,111,110,115,95,119,95,56,48,0);
          let questiconI: Map<any, any> = new Map([[String.fromCharCode(118,95,50,51,95,98,95,53,55,0),625], [String.fromCharCode(101,95,49,52,95,100,111,119,110,108,101,102,116,0),370], [String.fromCharCode(105,95,54,49,95,97,99,116,105,118,97,116,101,0),209]]);
          let libavutilK = 0;
         actionsW.push(3 / (Math.max(6, parseInt(`${profileactive0}`))));
         textinputs = `${modityZ.length + libavutilK}`;
         libyogaC += libavutilK;
         modityZ += `${1 - libavutilK}`;
         questiconI = new Map([[`${questiconI.size}`, libavutilK]]);
      }
      for (let v = 0; v < 1; v++) {
         actionsW.push(3 >> (Math.min(4, Math.abs(parseInt(`${profileactive0}`)))));
      }
      package_gp0 += parseFloat(`${roomD.length}`);
      clockm.push(store_ % (Math.max(read_.length, 5)));
      package_gp0 *= parseFloat(`${roomD.length >> (Math.min(Math.abs(3), 3))}`);
      read_ = `${greeny.length}`;
   while (4.66 == (iconcurrentmatchJ + parseFloat(`${read_.length}`)) || 5.33 == (iconcurrentmatchJ + 4.66)) {
      iconcurrentmatchJ += parseFloat(`${greeny.length}`);
      break;
   }
        onBack();

   while (3 > (roomD.length - 5) || 5 > (store_ - roomD.length)) {
       let register_3uO = false;
       let roomt = true;
      let imagewatchliveL = register_3uO ? !register_3uO : register_3uO;
      do {
         register_3uO = (register_3uO ? !roomt : register_3uO);
         if (imagewatchliveL) {
            break;
         }
      } while (imagewatchliveL && (roomt));
         register_3uO = !roomt;
      while (roomt) {
          let acceptedW = 3.0;
          let defaultpredictionprofileU = 5.0;
          let mbjscommonG = String.fromCharCode(97,95,57,50,95,116,105,112,115,0);
          let libreactperfloggerjniJ: Array<any> = [625, 716];
          let anytimeL: Array<any> = [870, 444];
         roomt = acceptedW >= defaultpredictionprofileU;
         acceptedW /= Math.max(2 << (Math.min(2, libreactperfloggerjniJ.length)), 1);
         defaultpredictionprofileU *= anytimeL.length / (Math.max(10, libreactperfloggerjniJ.length));
         mbjscommonG += `${libreactperfloggerjniJ.length}`;
         anytimeL.push(anytimeL.length / (Math.max(libreactperfloggerjniJ.length, 10)));
         break;
      }
       let feedbackS = 3.0;
      while (roomt) {
          let inviteG = 5.0;
          let whistleR = String.fromCharCode(100,111,110,110,97,95,112,95,52,54,0);
         roomt = !roomt && feedbackS <= 17.46;
         inviteG /= Math.max(whistleR.length >> (Math.min(Math.abs(3), 4)), 1);
         whistleR = `${parseInt(`${inviteG}`)}`;
         break;
      }
         register_3uO = feedbackS >= 24.87;
      roomD = `${store_ >> (Math.min(4, Math.abs(1)))}`;
      break;
   }
      roomD = `${scorepopsoundX.length - 3}`;
       let middleQ: Array<any> = [String.fromCharCode(101,115,116,105,109,97,116,101,95,54,95,55,54,0), String.fromCharCode(110,111,110,102,97,116,97,108,95,102,95,49,50,0)];
         middleQ = [middleQ.length];
      if (3 >= (3 << (Math.min(2, middleQ.length))) && 3 >= (middleQ.length << (Math.min(Math.abs(3), 4)))) {
          let castingj = 0;
         middleQ.push(middleQ.length | castingj);
      }
      for (let h = 0; h < 3; h++) {
         middleQ.push(middleQ.length | 1);
      }
      read_ += `${roomD.length << (Math.min(Math.abs(2), 4))}`;
       let bellD = 1.0;
       let orangez = String.fromCharCode(105,104,100,114,95,101,95,54,51,0);
       let edit0 = 5.0;
          let cornera: Array<any> = [String.fromCharCode(117,95,51,57,95,109,97,105,108,99,104,105,109,112,0), String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,95,114,95,54,48,0)];
          let uimanagerS = 1.0;
          let tickh: Array<any> = [66, 700, 410];
         orangez = `${parseInt(`${uimanagerS}`)}`;
         cornera = [tickh.length & 2];
         uimanagerS += parseFloat(`${tickh.length}`);
      if ((5.39 + bellD) < 1.72) {
         bellD -= orangez.length;
      }
      while (1 == (parseInt(`${edit0}`) / (Math.max(9, orangez.length)))) {
         edit0 *= parseFloat(`${parseInt(`${bellD}`)}`);
         break;
      }
         bellD /= Math.max((orangez == String.fromCharCode(67,0) ? parseInt(`${edit0}`) : orangez.length), 4);
       let textC = 1;
       let plashz = 4;
      if (2.37 == (bellD * 2.36)) {
          let iconbellactivem = 2.0;
          let u_playerW: Array<any> = [760, 873];
          let diceF: Map<any, any> = new Map([[String.fromCharCode(113,95,56,51,95,98,95,52,56,0),false ], [String.fromCharCode(102,95,56,56,95,115,117,98,118,105,100,101,111,0),true ]]);
         bellD += parseInt(`${iconbellactivem}`);
         iconbellactivem *= diceF.size >> (Math.min(Math.abs(1), 1));
         u_playerW.push(u_playerW.length);
         diceF = new Map([[`${diceF.size}`, u_playerW.length | diceF.size]]);
      }
       let source9 = String.fromCharCode(114,101,118,101,114,115,101,100,95,103,95,51,55,0);
      let smallorangemanU = source9 == String.fromCharCode(117,103,116,109,51,106,119,56,107,0);
      do {
          let owngoalV = String.fromCharCode(100,101,115,105,114,101,100,95,102,95,52,0);
          let assets3: Array<any> = [955, 997];
          let views4 = true;
          let profileframeO = false;
         source9 += `${((views4 ? 2 : 4))}`;
         owngoalV = `${2 ^ owngoalV.length}`;
         assets3.push(owngoalV.length);
         views4 = owngoalV.length == 14;
         profileframeO = (assets3.length / (Math.max(owngoalV.length, 3))) == 18;
         if (smallorangemanU) {
            break;
         }
      } while (smallorangemanU && (source9.length < 5 || orangez.length < 5));
         orangez = `${(source9 == String.fromCharCode(99,0) ? source9.length : plashz)}`;
      scorepopsoundX = `${roomD.length + orangez.length}`;
   for (let q = 0; q < 1; q++) {
       let pageh = String.fromCharCode(98,95,51,55,95,111,112,101,110,115,115,108,0);
       let profileactivek: Array<any> = [273, 250, 851];
       let modityB = true;
       let cancelZ: Map<any, any> = new Map([[String.fromCharCode(98,95,49,48,95,115,113,117,97,114,101,0),true ], [String.fromCharCode(98,95,53,54,95,111,119,110,101,114,0),true ]]);
      while (!modityB || 3 > (profileactivek.length + 1)) {
         profileactivek.push(((modityB ? 5 : 5) / 1));
         break;
      }
         pageh += `${cancelZ.size}`;
         profileactivek.push(2);
         pageh += `${cancelZ.size}`;
      while ((4 + profileactivek.length) <= 5) {
         profileactivek = [cancelZ.size / 2];
         break;
      }
         pageh += `${pageh.length & 2}`;
      if (!pageh.startsWith(`${modityB}`)) {
          let switch_0lZ = String.fromCharCode(103,122,105,112,112,101,100,95,121,95,53,0);
          let iconrightorangea = 3.0;
         modityB = switch_0lZ == pageh;
         switch_0lZ += `${parseInt(`${iconrightorangea}`)}`;
      }
      if (3 <= (2 | cancelZ.size) || !modityB) {
         cancelZ = new Map([[`${profileactivek.length}`, profileactivek.length]]);
      }
          let searchbarK = 5;
          let libreactnativeblobB = 5.0;
          let textinputt = String.fromCharCode(108,105,112,98,111,97,114,100,95,117,95,56,53,0);
         modityB = 33 == (searchbarK + libreactnativeblobB);
         searchbarK |= 2;
         libreactnativeblobB *= (textinputt == String.fromCharCode(71,0) ? textinputt.length : textinputt.length);
      while ((cancelZ.size | 5) > 5 || 5 > (profileactivek.length | cancelZ.size)) {
         profileactivek = [profileactivek.length];
         break;
      }
          let skip8 = true;
         cancelZ.set(`${skip8}`, 1);
         cancelZ = new Map([[`${profileactivek.length}`, profileactivek.length]]);
      greeny = `${scorepopsoundX.length}`;
   }
        lockOrientation("PORTRAIT");

   while (greeny.length < read_.length) {
      greeny = `${read_.length}`;
      break;
   }
   if (3 >= (roomD.length - 5) && 5 >= (roomD.length + parseInt(`${package_gp0}`))) {
      package_gp0 -= parseFloat(`${3}`);
   }
   while (read_.length >= 3) {
      scorepopsoundX = `${clockm.length}`;
      break;
   }
   let footballE = roomD == String.fromCharCode(99,95,122,54,109,0);
   do {
       let profileR = 0.0;
       let iconnotificationnewk = 3.0;
       let notificationgrayd: Map<any, any> = new Map([[String.fromCharCode(109,95,53,55,95,112,117,115,104,105,110,103,0),512], [String.fromCharCode(100,95,57,48,95,117,110,112,97,99,107,108,111,0),664], [String.fromCharCode(100,95,54,56,95,114,101,99,111,110,115,116,114,117,99,116,105,111,110,0),996]]);
       let themeB: Array<any> = [407, 677];
       let orangeclock0 = 0.0;
      for (let e = 0; e < 1; e++) {
          let rankA = String.fromCharCode(102,95,53,51,95,98,117,98,98,108,101,115,0);
          let weatherj = String.fromCharCode(109,105,110,105,109,105,122,101,97,98,108,101,95,54,95,49,0);
          let shielddonef = String.fromCharCode(115,105,103,115,95,111,95,54,55,0);
          let l_hasha = String.fromCharCode(115,95,55,48,95,115,116,97,110,100,97,114,100,105,122,101,0);
         profileR /= Math.max(parseFloat(`${shielddonef.length >> (Math.min(Math.abs(1), 1))}`), 5);
         rankA += `${weatherj.length}`;
         weatherj += `${weatherj.length}`;
         shielddonef = `${weatherj.length}`;
         l_hasha = "1";
      }
         notificationgrayd.set(`${orangeclock0}`, parseInt(`${orangeclock0}`) & parseInt(`${profileR}`));
         iconnotificationnewk -= parseFloat(`${parseInt(`${orangeclock0}`) >> (Math.min(Math.abs(notificationgrayd.size), 3))}`);
      while ((profileR * 2.96) <= 3.35 || (notificationgrayd.size % (Math.max(3, 3))) <= 1) {
         profileR += parseFloat(`${3}`);
         break;
      }
          let commentz: Array<any> = [859, 181, 202];
         orangeclock0 /= Math.max(parseInt(`${orangeclock0}`), 1);
         commentz = [commentz.length];
       let ewardedv = String.fromCharCode(97,95,55,57,95,102,109,116,115,0);
       let arrowupK = String.fromCharCode(122,95,52,57,95,114,101,109,105,110,100,0);
          let commonk = 3.0;
         ewardedv = `${(String.fromCharCode(52,0) == arrowupK ? parseInt(`${iconnotificationnewk}`) : arrowupK.length)}`;
         commonk /= Math.max(5, parseInt(`${commonk}`));
         orangeclock0 += parseInt(`${iconnotificationnewk}`) >> (Math.min(3, Math.abs(1)));
      while (!arrowupK.endsWith(`${orangeclock0}`)) {
          let emptyd = String.fromCharCode(109,95,53,53,95,97,108,116,101,114,110,97,116,105,118,101,0);
          let huawei0 = String.fromCharCode(116,95,51,49,95,120,99,98,103,114,97,98,0);
          let castingS: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,117,109,101,100,95,114,95,54,55,0),667], [String.fromCharCode(103,95,53,51,95,105,115,115,112,97,99,101,0),277], [String.fromCharCode(105,110,102,101,114,101,100,95,102,95,53,49,0),964]]);
          let indexQ = 2.0;
         orangeclock0 -= 3 ^ arrowupK.length;
         emptyd = `${huawei0.length & 3}`;
         huawei0 += `${3 * castingS.size}`;
         castingS.set(huawei0, castingS.size);
         indexQ += 3 - parseInt(`${indexQ}`);
         break;
      }
         notificationgrayd = new Map([[`${notificationgrayd.size}`, notificationgrayd.size % (Math.max(3, 10))]]);
         themeB = [(ewardedv == String.fromCharCode(68,0) ? notificationgrayd.size : ewardedv.length)];
      if ((orangeclock0 * iconnotificationnewk) < 4.62 && 4.62 < (orangeclock0 * iconnotificationnewk)) {
         orangeclock0 *= 2 + arrowupK.length;
      }
          let streamingu: Array<any> = [String.fromCharCode(102,111,117,114,105,101,114,95,52,95,50,52,0), String.fromCharCode(114,107,109,112,112,95,52,95,55,53,0)];
         ewardedv += `${streamingu.length / 2}`;
         notificationgrayd = new Map([[`${iconnotificationnewk}`, 2 * parseInt(`${iconnotificationnewk}`)]]);
      let gradlewa = iconnotificationnewk <= 9746792.0;
      do {
         iconnotificationnewk += (parseFloat(`${ewardedv == String.fromCharCode(115,0) ? ewardedv.length : parseInt(`${orangeclock0}`)}`));
         if (gradlewa) {
            break;
         }
      } while ((1.91 == (profileR + 1.28) && (1.28 + iconnotificationnewk) == 5.61) && gradlewa);
      roomD += "1";
      if (footballE) {
         break;
      }
   } while (((iconcurrentmatchJ - 3.80) >= 4.94) && footballE);
       let owngoalu = 4.0;
         owngoalu /= Math.max(5, parseInt(`${owngoalu}`) << (Math.min(3, Math.abs(2))));
      while (owngoalu < 2.97) {
         owngoalu /= Math.max(3, parseInt(`${owngoalu}`));
         break;
      }
         owngoalu /= Math.max(2, 3);
      clockm = [scorepopsoundX.length];
        setIsFullScreen(false);
      } else {

   let connectionv = 5384714.0 >= iconcurrentmatchJ;
   do {
      iconcurrentmatchJ *= parseFloat(`${roomD.length}`);
      if (connectionv) {
         break;
      }
   } while (connectionv && ((read_.length - 4) < 4 || (read_.length * parseInt(`${iconcurrentmatchJ}`)) < 4));
   for (let j = 0; j < 3; j++) {
      read_ += `${read_.length / (Math.max(2, 6))}`;
   }
      valuesy += `${1 | valuesy.length}`;
   while (!valuesy.endsWith(`${greeny.length}`)) {
      greeny = `${clockm.length}`;
      break;
   }
      read_ += `${clockm.length % 1}`;
        

       let bootsplashs = String.fromCharCode(107,95,52,52,95,112,114,101,108,111,97,100,101,100,0);
       let profileactiveB: Map<any, any> = new Map([[String.fromCharCode(107,95,49,54,95,113,105,110,116,102,108,111,97,116,0),337], [String.fromCharCode(111,95,51,48,95,108,97,98,101,108,101,100,0),0]]);
      if (1 == profileactiveB.size) {
          let gestureS: Map<any, any> = new Map([[String.fromCharCode(100,101,102,105,110,101,115,95,108,95,56,49,0),590], [String.fromCharCode(99,108,111,115,101,99,98,95,97,95,54,57,0),514], [String.fromCharCode(122,95,56,53,95,112,114,101,100,105,99,116,120,0),284]]);
          let analytic6 = 5;
          let benefitY = String.fromCharCode(98,108,111,98,115,105,122,101,95,97,95,53,53,0);
         profileactiveB.set(`${analytic6}`, profileactiveB.size);
         gestureS.set(benefitY, benefitY.length);
         analytic6 ^= gestureS.size >> (Math.min(Math.abs(2), 4));
      }
      while ((profileactiveB.size >> (Math.min(Math.abs(1), 5))) > 1) {
         bootsplashs = `${bootsplashs.length}`;
         break;
      }
      for (let r = 0; r < 1; r++) {
         bootsplashs = `${profileactiveB.size | bootsplashs.length}`;
      }
         bootsplashs = `${profileactiveB.size ^ 1}`;
          let matchdetailbgZ: Array<any> = [795, 584];
         bootsplashs += `${bootsplashs.length * profileactiveB.size}`;
         matchdetailbgZ = [3];
         profileactiveB.set(bootsplashs, 3 << (Math.min(2, Math.abs(profileactiveB.size))));
      scorepopsoundX += "3";
   while (4 < (scorepopsoundX.length - store_)) {
       let iconcurrentmatchr = 5.0;
       let eactl = 4.0;
          let bellw = false;
          let downe = false;
          let defaultteamB = String.fromCharCode(113,95,49,50,95,109,112,101,103,97,117,100,105,111,100,97,116,97,0);
         iconcurrentmatchr += (parseFloat(`${1 + (downe ? 1 : 3)}`));
         bellw = String.fromCharCode(100,0) == defaultteamB;
         downe = defaultteamB.length == 50;
          let minib = 5;
         eactl -= parseFloat(`${parseInt(`${eactl}`)}`);
         minib %= Math.max(minib, 4);
      if (iconcurrentmatchr < 4.56) {
          let dangerY = String.fromCharCode(106,95,50,48,95,118,114,101,99,116,0);
         iconcurrentmatchr /= Math.max(1, parseFloat(`${parseInt(`${eactl}`)}`));
         dangerY += `${dangerY.length - dangerY.length}`;
      }
      for (let f = 0; f < 1; f++) {
         iconcurrentmatchr += parseFloat(`${3}`);
      }
      for (let b = 0; b < 2; b++) {
         iconcurrentmatchr -= parseFloat(`${2 % (Math.max(9, parseInt(`${eactl}`)))}`);
      }
          let list1: Array<any> = [432, 741];
          let libffmpegkitK = String.fromCharCode(105,100,101,110,116,105,116,105,121,95,121,95,56,57,0);
         iconcurrentmatchr += parseFloat(`${2}`);
         list1 = [1];
         libffmpegkitK = `${(libffmpegkitK == String.fromCharCode(87,0) ? list1.length : libffmpegkitK.length)}`;
      store_ /= Math.max(3 << (Math.min(4, read_.length)), 2);
      break;
   }
   let collectiont = String.fromCharCode(117,95,107,0) == valuesy;
   do {
       let service9 = 0;
       let rankb = String.fromCharCode(112,100,122,112,95,101,95,57,57,0);
       let profileinactivee = 3.0;
       let updatesr: Array<any> = [176, 586];
       let large9 = String.fromCharCode(100,114,97,102,116,115,95,113,95,50,54,0);
      if (updatesr.length >= profileinactivee) {
          let verticalB = String.fromCharCode(105,95,57,48,95,112,111,119,116,97,98,108,101,0);
          let profilepicP = 2;
         updatesr.push(2);
         verticalB += "3";
         profilepicP += verticalB.length - 1;
      }
         large9 = `${(String.fromCharCode(72,0) == large9 ? large9.length : service9)}`;
      let gradlewq = 6566109 <= service9;
      do {
         service9 >>= Math.min(2, Math.abs(service9 ^ large9.length));
         if (gradlewq) {
            break;
         }
      } while (gradlewq && ((rankb.length << (Math.min(2, Math.abs(service9)))) == 3 && (rankb.length << (Math.min(Math.abs(3), 1))) == 5));
         profileinactivee *= 1;
      if (2 >= (large9.length << (Math.min(5, updatesr.length)))) {
          let package_0f = true;
          let videocommonH = 5.0;
          let downloadedo = 1.0;
          let stationsD = 2;
          let defaultplayerimgR = String.fromCharCode(119,97,116,99,104,95,55,95,50,52,0);
         updatesr.push(defaultplayerimgR.length | 1);
         package_0f = 75 <= (videocommonH * stationsD);
         videocommonH /= Math.max(1, parseFloat(`${parseInt(`${videocommonH}`) | 2}`));
         downloadedo += parseFloat(`${stationsD ^ parseInt(`${videocommonH}`)}`);
         defaultplayerimgR = "3";
      }
          let modulel: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,119,105,95,97,95,52,0),852], [String.fromCharCode(100,98,108,112,95,52,95,50,54,0),462], [String.fromCharCode(119,95,57,52,95,102,117,108,102,105,108,108,0),458]]);
         profileinactivee += updatesr.length;
         modulel.set(`${modulel.size}`, modulel.size % (Math.max(2, 2)));
       let zhuboA = String.fromCharCode(115,95,49,49,95,115,121,109,98,111,108,105,99,0);
       let predictionbannersharedx = String.fromCharCode(118,112,105,110,116,114,97,112,114,101,100,95,55,95,49,54,0);
         large9 = `${rankb.length * 1}`;
          let basketballdetailsbg4 = String.fromCharCode(104,95,57,56,95,115,116,117,102,102,0);
          let graph6 = String.fromCharCode(114,101,109,101,109,98,101,114,101,100,95,119,95,48,0);
         profileinactivee *= predictionbannersharedx.length * 2;
         basketballdetailsbg4 += "3";
         graph6 = `${basketballdetailsbg4.length - 2}`;
       let clubD = 2.0;
       let unselectedG = 4.0;
          let whiteanimationliveY = String.fromCharCode(105,112,118,95,121,95,51,55,0);
          let moon6 = String.fromCharCode(115,105,103,110,105,110,103,95,115,95,52,57,0);
          let gdtadvf: Array<any> = [254, 690];
         large9 += `${rankb.length & 3}`;
         whiteanimationliveY += `${3 << (Math.min(1, whiteanimationliveY.length))}`;
         moon6 += `${(String.fromCharCode(53,0) == whiteanimationliveY ? gdtadvf.length : whiteanimationliveY.length)}`;
         gdtadvf.push(moon6.length);
      let giftbuttonY = rankb.length <= 8393389;
      do {
         rankb = `${updatesr.length}`;
         if (giftbuttonY) {
            break;
         }
      } while (((5 << (Math.min(4, Math.abs(service9)))) <= 2 || 3 <= (service9 << (Math.min(Math.abs(5), 2)))) && giftbuttonY);
       let fileJ = String.fromCharCode(122,95,50,53,0);
       let typesG = String.fromCharCode(109,95,56,53,95,115,101,110,100,101,114,115,0);
          let turndownc = String.fromCharCode(103,101,116,102,114,97,109,101,95,107,95,50,50,0);
         clubD += parseFloat(`${large9.length >> (Math.min(typesG.length, 4))}`);
         turndownc += `${turndownc.length}`;
         service9 <<= Math.min(Math.abs((zhuboA == String.fromCharCode(84,0) ? zhuboA.length : large9.length)), 2);
      valuesy += `${2 << (Math.min(2, Math.abs(parseInt(`${package_gp0}`))))}`;
      if (collectiont) {
         break;
      }
   } while (collectiont && ((package_gp0 + 2.37) < 2.56 || (valuesy.length & 2) < 5));
      roomD += `${store_}`;
       let whistleT = 5.0;
       let forwardy = String.fromCharCode(106,95,54,51,95,100,101,99,105,109,97,116,111,114,0);
       let predictionarrowQ: Map<any, any> = new Map([[String.fromCharCode(105,110,112,117,116,120,95,105,95,49,48,0),620], [String.fromCharCode(101,95,57,57,95,98,110,99,98,98,0),576], [String.fromCharCode(105,110,110,101,114,95,50,95,50,53,0),40]]);
         forwardy += `${forwardy.length ^ parseInt(`${whistleT}`)}`;
      if (forwardy.length >= 3) {
         forwardy = "1";
      }
          let trashb: Map<any, any> = new Map([[String.fromCharCode(118,95,56,51,95,109,111,110,116,104,115,0),701], [String.fromCharCode(116,114,105,97,110,103,117,108,97,114,95,117,95,49,48,48,0),569], [String.fromCharCode(115,101,97,108,98,111,120,95,119,95,54,57,0),136]]);
          let iconarrowrightwhite8 = 5;
         forwardy += `${trashb.size}`;
         trashb = new Map([[`${iconarrowrightwhite8}`, iconarrowrightwhite8]]);
         predictionarrowQ.set(`${whistleT}`, parseInt(`${whistleT}`));
          let activeO = 3.0;
          let leagueO = String.fromCharCode(109,95,50,95,105,110,118,111,108,118,101,100,0);
          let libsentryz = 4.0;
         forwardy = `${3 >> (Math.min(3, Math.abs(predictionarrowQ.size)))}`;
         activeO /= Math.max(parseFloat(`${2}`), 4);
         leagueO = `${parseInt(`${activeO}`)}`;
         libsentryz *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${libsentryz}`)), 2))}`);
         forwardy += "1";
       let delegate_48: Array<any> = [822, 679];
          let stepB = String.fromCharCode(122,95,57,95,111,112,116,105,109,105,122,101,114,0);
          let header6 = 3;
         whistleT -= parseFloat(`${delegate_48.length}`);
         stepB = `${stepB.length}`;
         header6 >>= Math.min(stepB.length, 3);
          let connectiond: Array<any> = [String.fromCharCode(116,114,120,116,95,56,95,52,51,0), String.fromCharCode(97,95,52,57,95,102,111,111,116,98,97,108,108,0), String.fromCharCode(121,95,49,54,95,118,97,114,105,97,110,99,101,115,0)];
         delegate_48.push(delegate_48.length);
         connectiond.push(connectiond.length);
      iconcurrentmatchJ *= parseFloat(`${parseInt(`${iconcurrentmatchJ}`) % (Math.max(scorepopsoundX.length, 4))}`);
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
       let sharemodal9 = String.fromCharCode(114,101,109,111,118,97,98,108,101,95,114,95,55,52,0);
    let sourceT = false;
    let malaysian = 4.0;
    let predictionbuttonn: Map<any, any> = new Map([[String.fromCharCode(105,95,57,56,95,112,104,111,110,101,98,111,111,107,0),161], [String.fromCharCode(103,108,111,98,97,108,108,121,95,98,95,51,55,0),205], [String.fromCharCode(106,95,57,55,95,108,97,110,100,109,105,110,101,115,0),503]]);
    let reactnativeultimatelistviewC = String.fromCharCode(119,95,54,49,95,117,110,97,115,115,105,103,110,101,100,0);
    let heart6 = 5.0;
    let scorepopsoundO: Array<any> = [String.fromCharCode(107,101,121,115,116,114,101,97,109,95,48,95,54,0), String.fromCharCode(102,105,108,116,101,114,95,50,95,50,56,0), String.fromCharCode(112,95,51,57,95,101,120,101,99,117,116,101,0)];
    let subtextz = String.fromCharCode(115,116,97,114,115,95,116,95,52,53,0);
    let stationsd = String.fromCharCode(116,97,112,95,99,95,57,50,0);
    let mbbanner1 = 5;
    let subsq = String.fromCharCode(100,101,116,101,99,116,101,100,95,105,95,54,51,0);
   for (let g = 0; g < 1; g++) {
      mbbanner1 %= Math.max(1, 1);
   }
   for (let c = 0; c < 1; c++) {
       let predictionarrowW = 5.0;
          let apples: Map<any, any> = new Map([[String.fromCharCode(109,97,103,121,95,106,95,50,50,0),String.fromCharCode(112,114,101,100,101,102,105,110,101,100,95,57,95,50,53,0)], [String.fromCharCode(114,101,99,111,110,105,110,116,114,97,120,95,52,95,55,51,0),String.fromCharCode(110,95,50,54,95,114,101,113,117,101,115,116,97,98,108,101,0)]]);
          let sourceh = 2.0;
          let homed = true;
         predictionarrowW += ((homed ? 5 : 5) | parseInt(`${sourceh}`));
         apples.set(`${apples.size}`, 1);
         sourceh += parseFloat(`${1 >> (Math.min(3, Math.abs(apples.size)))}`);
      if ((predictionarrowW - predictionarrowW) >= 5.40) {
         predictionarrowW /= Math.max(4, 3 - parseInt(`${predictionarrowW}`));
      }
      while (predictionarrowW >= 5.53) {
         predictionarrowW += parseInt(`${predictionarrowW}`) ^ parseInt(`${predictionarrowW}`);
         break;
      }
      stationsd += `${((sourceT ? 4 : 3))}`;
   }
      malaysian /= Math.max(1, 3 ^ parseInt(`${malaysian}`));
   for (let v = 0; v < 1; v++) {
       let mbnativeadvancedF = String.fromCharCode(117,110,97,118,97,105,98,108,101,95,48,95,48,0);
       let mbnativeadvancedO = 3.0;
          let controlL = String.fromCharCode(116,95,54,53,95,101,110,115,117,114,101,100,0);
          let iconfeedback2: Array<any> = [String.fromCharCode(104,101,120,98,105,110,95,98,95,55,56,0), String.fromCharCode(117,112,108,111,97,100,95,101,95,55,57,0), String.fromCharCode(112,117,116,105,110,116,95,113,95,55,55,0)];
         mbnativeadvancedO += parseFloat(`${1}`);
         controlL = `${controlL.length}`;
         iconfeedback2.push((controlL == String.fromCharCode(77,0) ? iconfeedback2.length : controlL.length));
         mbnativeadvancedO -= parseFloat(`${parseInt(`${mbnativeadvancedO}`) | mbnativeadvancedF.length}`);
      if ((parseFloat(`${mbnativeadvancedF.length}`) - mbnativeadvancedO) == 2.66) {
         mbnativeadvancedO += parseFloat(`${parseInt(`${mbnativeadvancedO}`)}`);
      }
         mbnativeadvancedO += parseFloat(`${parseInt(`${mbnativeadvancedO}`) - 1}`);
         mbnativeadvancedF += "1";
      if (2.95 < mbnativeadvancedO) {
         mbnativeadvancedO -= parseFloat(`${parseInt(`${mbnativeadvancedO}`) % (Math.max(mbnativeadvancedF.length, 10))}`);
      }
      predictionbuttonn.set(`${mbbanner1}`, parseInt(`${malaysian}`));
   }
       let xadsdkW: Map<any, any> = new Map([[String.fromCharCode(109,117,116,101,120,95,121,95,52,57,0),909], [String.fromCharCode(103,95,51,55,95,99,111,110,110,105,110,112,117,116,0),956], [String.fromCharCode(110,95,57,51,95,103,101,116,115,116,114,0),731]]);
       let downl = 3.0;
       let mode5 = String.fromCharCode(99,111,108,111,114,115,95,109,95,55,52,0);
      for (let j = 0; j < 3; j++) {
         mode5 += "2";
      }
      while ((downl / (Math.max(4.9, 1))) > 4.80) {
          let libjsinspectorv = 5.0;
          let typingloadingS: Array<any> = [847, 42, 946];
          let bggradientT = true;
         downl *= parseFloat(`${1 | mode5.length}`);
         libjsinspectorv += parseFloat(`${typingloadingS.length * 2}`);
         typingloadingS = [3];
         bggradientT = libjsinspectorv == parseFloat(`${typingloadingS.length}`);
         break;
      }
         xadsdkW = new Map([[`${xadsdkW.size}`, parseInt(`${downl}`) - xadsdkW.size]]);
         mode5 += `${mode5.length << (Math.min(2, Math.abs(parseInt(`${downl}`))))}`;
          let bgvipsportL = true;
         downl *= (parseFloat(`${(bgvipsportL ? 2 : 1)}`));
          let libfabricjniK = true;
          let chinasamek = 2.0;
         xadsdkW = new Map([[`${xadsdkW.size}`, xadsdkW.size % 3]]);
         libfabricjniK = chinasamek <= 82.80;
         chinasamek /= Math.max(2, parseInt(`${chinasamek}`) | 3);
      let huaweiG = 6274486.0 >= downl;
      do {
         downl *= parseFloat(`${xadsdkW.size}`);
         if (huaweiG) {
            break;
         }
      } while (huaweiG && (4 > xadsdkW.size));
      let iconarrowrightwhiteh = mode5 == String.fromCharCode(118,118,56,112,121,99,53,117,0);
      do {
          let mergerP = String.fromCharCode(104,95,52,55,95,108,111,99,107,105,110,103,0);
          let package_fV = false;
          let componentsB: Array<any> = [512, 913, 405];
          let iconcalendarA: Map<any, any> = new Map([[String.fromCharCode(114,95,49,57,95,114,108,112,0),true ], [String.fromCharCode(100,114,111,112,95,112,95,56,57,0),true ]]);
          let playlistg: Array<any> = [122, 120];
         mode5 += `${(String.fromCharCode(88,0) == mergerP ? (package_fV ? 4 : 4) : mergerP.length)}`;
         package_fV = (playlistg.length << (Math.min(Math.abs(iconcalendarA.size), 1))) == 90;
         componentsB = [playlistg.length];
         iconcalendarA = new Map([[`${iconcalendarA.size}`, iconcalendarA.size >> (Math.min(playlistg.length, 4))]]);
         if (iconarrowrightwhiteh) {
            break;
         }
      } while (iconarrowrightwhiteh && ((parseInt(`${downl}`) / (Math.max(mode5.length, 2))) <= 2 || (parseInt(`${downl}`) / 2) <= 2));
          let imagenomoredataD = String.fromCharCode(116,95,53,49,95,112,108,97,121,0);
          let gemfiler = 2.0;
          let notificationgrayb = false;
         xadsdkW = new Map([[mode5, 1 * mode5.length]]);
         imagenomoredataD += `${(parseInt(`${gemfiler}`) ^ (notificationgrayb ? 1 : 2))}`;
         gemfiler -= (parseInt(`${gemfiler}`) << (Math.min(1, Math.abs((notificationgrayb ? 3 : 3)))));
      scorepopsoundO.push(2);
   let nativeexB = reactnativeultimatelistviewC == String.fromCharCode(52,107,56,119,48,112,120,53,102,56,0);
   do {
      reactnativeultimatelistviewC += "1";
      if (nativeexB) {
         break;
      }
   } while (nativeexB && (stationsd.length < reactnativeultimatelistviewC.length));
   if ((scorepopsoundO.length % (Math.max(4, subtextz.length))) >= 1 && 5 >= (1 % (Math.max(6, scorepopsoundO.length)))) {
       let matcht = String.fromCharCode(116,95,50,53,95,115,117,105,116,101,0);
       let statisticsB = 4.0;
       let user5 = 5.0;
       let areaX = 1;
       let libfabricjnil: Array<any> = [467, 789, 94];
         statisticsB *= parseFloat(`${areaX}`);
          let unreadr = String.fromCharCode(106,95,49,55,95,105,115,100,105,103,105,116,0);
         statisticsB *= parseFloat(`${2 & parseInt(`${user5}`)}`);
         unreadr = `${unreadr.length}`;
         user5 += areaX;
         libfabricjnil = [1 * areaX];
       let container9: Map<any, any> = new Map([[String.fromCharCode(117,95,49,57,0),472], [String.fromCharCode(112,95,52,52,95,114,101,109,105,110,100,0),656], [String.fromCharCode(102,95,55,51,95,112,108,117,115,0),475]]);
       let whitevideolivew: Map<any, any> = new Map([[String.fromCharCode(114,101,97,99,104,95,106,95,53,56,0),648], [String.fromCharCode(119,95,53,51,95,108,111,103,103,101,114,0),761], [String.fromCharCode(116,114,97,99,105,110,103,95,53,95,49,57,0),569]]);
       let awayiconG = String.fromCharCode(122,105,103,122,97,103,95,101,95,57,49,0);
      if ((4.63 + user5) > 5.85) {
         matcht = `${parseInt(`${user5}`) >> (Math.min(Math.abs(3), 1))}`;
      }
          let homeiconv = String.fromCharCode(114,95,54,55,95,101,115,116,105,109,97,116,105,111,110,0);
          let tooltipsG = String.fromCharCode(112,95,53,57,95,109,121,113,114,0);
          let bingP = 0.0;
         awayiconG += `${parseInt(`${bingP}`)}`;
         homeiconv = "3";
         tooltipsG += `${homeiconv.length}`;
         bingP *= parseFloat(`${tooltipsG.length | 3}`);
      if (5.87 < (user5 - 2.44) && (1 << (Math.min(2, Math.abs(container9.size)))) < 2) {
          let vietnamj: Map<any, any> = new Map([[String.fromCharCode(111,95,55,56,95,112,97,105,110,116,115,0),257], [String.fromCharCode(103,95,51,56,95,119,114,105,116,101,105,110,105,116,0),309], [String.fromCharCode(119,95,51,95,109,97,114,107,101,114,115,0),494]]);
          let classesD = String.fromCharCode(105,95,51,56,95,97,118,103,121,0);
          let componentregistryZ = String.fromCharCode(108,95,57,50,95,97,108,108,111,99,99,111,109,109,111,110,0);
          let settingP = 0.0;
          let calendara = String.fromCharCode(120,95,49,50,95,118,101,99,116,111,114,115,0);
         user5 /= Math.max(5, 2);
         vietnamj = new Map([[`${vietnamj.size}`, 2 | componentregistryZ.length]]);
         classesD = `${calendara.length}`;
         componentregistryZ = `${vietnamj.size << (Math.min(4, Math.abs(parseInt(`${settingP}`))))}`;
         settingP *= (String.fromCharCode(90,0) == calendara ? parseInt(`${settingP}`) : calendara.length);
      }
         areaX >>= Math.min(Math.abs(2), 5);
      if ((3 << (Math.min(2, Math.abs(container9.size)))) == 2 || (2.21 + statisticsB) == 1.32) {
          let m_hashW = 1;
          let loginsuccessB = 3.0;
          let defaultteam5 = String.fromCharCode(111,95,53,48,95,109,97,114,103,105,110,115,0);
          let singaporec = 0.0;
         container9 = new Map([[`${whitevideolivew.size}`, whitevideolivew.size * 2]]);
         m_hashW |= parseInt(`${loginsuccessB}`) * parseInt(`${singaporec}`);
         loginsuccessB += parseFloat(`${parseInt(`${loginsuccessB}`)}`);
         defaultteam5 += `${parseInt(`${loginsuccessB}`)}`;
         singaporec /= Math.max(2, defaultteam5.length << (Math.min(Math.abs(3), 5)));
      }
      let dropdownu = areaX <= 9720319;
      do {
         areaX |= matcht.length + 2;
         if (dropdownu) {
            break;
         }
      } while (dropdownu && (1 < (3 >> (Math.min(4, Math.abs(areaX)))) || (3 >> (Math.min(3, Math.abs(areaX)))) < 1));
      if ((libfabricjnil.length % 3) >= 4 || 3 >= (matcht.length % (Math.max(4, libfabricjnil.length)))) {
          let matches9 = String.fromCharCode(106,95,56,50,95,100,97,98,97,115,101,0);
          let largesoundK = 4.0;
         matcht = `${2 & libfabricjnil.length}`;
         matches9 = `${matches9.length}`;
         largesoundK *= parseFloat(`${parseInt(`${largesoundK}`) % 3}`);
      }
          let reactnativeratings6 = false;
          let blackg = false;
         awayiconG += `${libfabricjnil.length << (Math.min(awayiconG.length, 3))}`;
         reactnativeratings6 = (reactnativeratings6 ? blackg : reactnativeratings6);
         blackg = (blackg ? !reactnativeratings6 : blackg);
       let feedbackP = String.fromCharCode(105,95,57,54,95,114,97,105,115,101,0);
       let loginL = String.fromCharCode(115,95,52,51,95,117,110,109,105,120,0);
      scorepopsoundO.push(sharemodal9.length << (Math.min(Math.abs(3), 3)));
   }
       let configureN = String.fromCharCode(115,107,105,110,95,116,95,53,52,0);
       let predictionarrowx = 5.0;
      for (let d = 0; d < 3; d++) {
         configureN += `${2 * parseInt(`${predictionarrowx}`)}`;
      }
      for (let j = 0; j < 1; j++) {
          let iconplayE = String.fromCharCode(112,95,51,55,95,109,115,118,115,0);
          let incidentM = 5.0;
          let volumer: Array<any> = [57, 768];
         configureN = `${parseInt(`${incidentM}`) ^ 1}`;
         iconplayE += `${iconplayE.length & volumer.length}`;
         incidentM -= parseFloat(`${volumer.length << (Math.min(Math.abs(3), 1))}`);
      }
      let subsd = 6892424.0 <= predictionarrowx;
      do {
         predictionarrowx *= parseFloat(`${2 & parseInt(`${predictionarrowx}`)}`);
         if (subsd) {
            break;
         }
      } while ((2.43 >= (predictionarrowx - parseFloat(`${configureN.length}`)) || 4 >= (configureN.length + 2)) && subsd);
         configureN = `${configureN.length / (Math.max(3, parseInt(`${predictionarrowx}`)))}`;
      if ((configureN.length % (Math.max(2, 4))) >= 4) {
         configureN = `${configureN.length}`;
      }
         configureN = `${configureN.length}`;
      mbbanner1 += parseInt(`${predictionarrowx}`);
   while (5 > (parseInt(`${malaysian}`) - stationsd.length) && 1.56 > (2.59 - malaysian)) {
      malaysian /= Math.max((String.fromCharCode(106,0) == sharemodal9 ? subtextz.length : sharemodal9.length), 1);
      break;
   }
       let termsz: Array<any> = [String.fromCharCode(115,105,112,114,95,121,95,57,51,0), String.fromCharCode(109,101,115,115,97,103,101,115,95,101,95,49,0), String.fromCharCode(121,112,114,101,100,105,99,116,105,111,110,95,55,95,52,0)];
       let play9 = false;
       let viewsV = 5.0;
          let notificationgraybd = String.fromCharCode(100,114,97,119,95,103,95,49,53,0);
          let philippinesq = String.fromCharCode(101,98,109,108,110,117,109,95,54,95,52,53,0);
         viewsV *= (parseFloat(`${2 / (Math.max(3, (play9 ? 2 : 5)))}`));
         notificationgraybd += `${3 / (Math.max(3, notificationgraybd.length))}`;
         philippinesq += `${3 ^ notificationgraybd.length}`;
      if ((termsz.length & 2) > 2) {
         termsz.push(parseInt(`${viewsV}`) * termsz.length);
      }
         play9 = termsz.length >= 43;
      while (viewsV > 5.87) {
         viewsV -= (parseFloat(`${1 ^ (play9 ? 1 : 1)}`));
         break;
      }
      let sharet = termsz.length <= 7998870;
      do {
         termsz = [((play9 ? 4 : 2) / 1)];
         if (sharet) {
            break;
         }
      } while ((play9) && sharet);
         play9 = viewsV == 4.24;
         play9 = viewsV == parseFloat(`${termsz.length}`);
          let bangY = String.fromCharCode(114,101,110,100,101,114,98,117,102,102,101,114,95,111,95,55,56,0);
          let filledz = 2;
          let appsn = 0.0;
         play9 = appsn > 57.91 || !play9;
         bangY = `${filledz / (Math.max(3, 3))}`;
         filledz += filledz - bangY.length;
         appsn *= (parseFloat(`${bangY == String.fromCharCode(74,0) ? filledz : bangY.length}`));
         play9 = !play9 && termsz.length > 10;
      malaysian /= Math.max(4, ((play9 ? 3 : 3) * 2));
   if (reactnativeultimatelistviewC.startsWith(subtextz)) {
      subtextz = `${predictionbuttonn.size}`;
   }
       let chatroombackgroundT = false;
      for (let k = 0; k < 3; k++) {
          let statisticsinactiveO = String.fromCharCode(114,95,55,49,95,121,111,117,0);
          let libreactnativeblobi = 2;
          let iconnewssharej = String.fromCharCode(109,97,114,107,101,114,115,95,102,95,51,56,0);
          let kuaishou5 = false;
         chatroombackgroundT = chatroombackgroundT || statisticsinactiveO.length > 63;
         statisticsinactiveO += `${(String.fromCharCode(72,0) == iconnewssharej ? libreactnativeblobi : iconnewssharej.length)}`;
         libreactnativeblobi %= Math.max(5, (iconnewssharej == String.fromCharCode(116,0) ? iconnewssharej.length : libreactnativeblobi));
         kuaishou5 = iconnewssharej.startsWith(`${libreactnativeblobi}`);
      }
       let libjsip: Array<any> = [String.fromCharCode(104,95,56,95,115,107,105,110,0), String.fromCharCode(102,95,53,49,95,105,110,100,101,112,101,110,100,101,110,99,101,0), String.fromCharCode(116,95,54,56,95,100,101,110,111,114,109,97,108,105,122,101,0)];
       let floater1: Array<any> = [95, 637, 979];
         floater1 = [2 * floater1.length];
      stationsd += `${mbbanner1}`;
      predictionbuttonn = new Map([[`${predictionbuttonn.size}`, 2]]);
   while (4 <= predictionbuttonn.size) {
      predictionbuttonn = new Map([[`${sourceT}`, ((sourceT ? 4 : 2))]]);
      break;
   }
       let countdownX = 3.0;
       let libreactnativeblobH: Array<any> = [668, 932];
         libreactnativeblobH.push(parseInt(`${countdownX}`));
          let libjsijniprofilerU = 1.0;
         countdownX *= parseFloat(`${1}`);
         libjsijniprofilerU -= parseFloat(`${parseInt(`${libjsijniprofilerU}`) << (Math.min(4, Math.abs(parseInt(`${libjsijniprofilerU}`))))}`);
      if (libreactnativeblobH.length == 3) {
          let crossh = String.fromCharCode(112,95,52,49,95,99,97,114,116,101,115,105,97,110,0);
          let runtimeschedulerk: Map<any, any> = new Map([[String.fromCharCode(105,95,51,49,95,109,97,110,105,112,117,108,97,116,101,0),362], [String.fromCharCode(117,112,108,111,97,100,101,114,95,116,95,56,57,0),876]]);
          let iconbackwhiteL = true;
         countdownX *= parseFloat(`${runtimeschedulerk.size}`);
         crossh = `${(crossh == String.fromCharCode(103,0) ? (iconbackwhiteL ? 2 : 5) : crossh.length)}`;
         runtimeschedulerk = new Map([[`${iconbackwhiteL}`, (3 << (Math.min(3, Math.abs((iconbackwhiteL ? 4 : 5)))))]]);
      }
      for (let j = 0; j < 3; j++) {
         libreactnativeblobH = [2];
      }
          let calendarp = String.fromCharCode(113,95,54,56,95,115,117,98,108,97,121,111,117,116,0);
         libreactnativeblobH.push((String.fromCharCode(79,0) == calendarp ? libreactnativeblobH.length : calendarp.length));
         libreactnativeblobH = [parseInt(`${countdownX}`)];
      predictionbuttonn = new Map([[`${countdownX}`, (String.fromCharCode(102,0) == sharemodal9 ? sharemodal9.length : parseInt(`${countdownX}`))]]);

        console.log("err save vod!");

   let statisticsp = String.fromCharCode(110,114,116,99,105,107,56,109,102,113,0) == stationsd;
   do {
      stationsd = `${(1 * (sourceT ? 1 : 4))}`;
      if (statisticsp) {
         break;
      }
   } while (statisticsp && ((heart6 - 4.86) > 2.73 && 3 > (stationsd.length + 1)));
      scorepopsoundO.push((sharemodal9 == String.fromCharCode(56,0) ? mbbanner1 : sharemodal9.length));
      malaysian /= Math.max(3, 1);
   if ((scorepopsoundO.length & sharemodal9.length) <= 3 || (sharemodal9.length & 3) <= 2) {
      scorepopsoundO = [(String.fromCharCode(108,0) == reactnativeultimatelistviewC ? parseInt(`${heart6}`) : reactnativeultimatelistviewC.length)];
   }
   while (1.53 == (heart6 / (Math.max(scorepopsoundO.length, 5))) || (heart6 / 1.53) == 2.57) {
      heart6 += sharemodal9.length;
      break;
   }
   let sort0 = malaysian <= 4972679.0;
   do {
      malaysian *= predictionbuttonn.size * 3;
      if (sort0) {
         break;
      }
   } while ((malaysian < 2.3) && sort0);
       let loadingspinnerH = false;
       let libflipperl = String.fromCharCode(107,95,55,48,95,101,120,99,108,117,100,105,110,103,0);
       let nterstitialq = String.fromCharCode(112,95,49,57,95,100,97,114,107,0);
      if (nterstitialq == String.fromCharCode(69,0)) {
          let cnewarchdefaults_: Array<any> = [String.fromCharCode(102,95,54,48,95,116,104,111,117,115,97,110,100,115,0), String.fromCharCode(121,95,50,95,108,111,111,112,115,0)];
          let release_v2: Array<any> = [210, 336];
          let textlayoutmanagerm: Array<any> = [615, 688, 130];
         libflipperl = `${cnewarchdefaults_.length >> (Math.min(Math.abs(1), 3))}`;
         cnewarchdefaults_.push(1 * textlayoutmanagerm.length);
         release_v2 = [2];
         textlayoutmanagerm.push(textlayoutmanagerm.length & release_v2.length);
      }
      for (let a = 0; a < 2; a++) {
         libflipperl += `${((loadingspinnerH ? 2 : 4))}`;
      }
      let encrypty = nterstitialq == String.fromCharCode(56,106,49,105,50,115,104,49,111,117,0);
      do {
         nterstitialq += `${(libflipperl.length & (loadingspinnerH ? 2 : 5))}`;
         if (encrypty) {
            break;
         }
      } while ((nterstitialq.length == libflipperl.length) && encrypty);
       let trash3 = String.fromCharCode(109,97,108,101,95,117,95,57,48,0);
       let wnewsy = String.fromCharCode(112,97,114,109,115,95,120,95,52,53,0);
      let configE = loadingspinnerH ? !loadingspinnerH : loadingspinnerH;
      do {
         loadingspinnerH = libflipperl == String.fromCharCode(81,0);
         if (configE) {
            break;
         }
      } while ((wnewsy.length < 3) && configE);
      while (nterstitialq.length < wnewsy.length) {
          let policyG = false;
          let backwhitep = 1.0;
          let libswresamplev = String.fromCharCode(99,111,118,101,114,97,103,101,95,109,95,56,51,0);
          let iconnotificationnewb = String.fromCharCode(115,95,54,50,0);
          let libavutilu: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,109,118,95,121,95,51,49,0),246], [String.fromCharCode(122,95,56,51,95,115,115,121,98,0),304]]);
         nterstitialq = `${trash3.length}`;
         policyG = !policyG;
         backwhitep -= 1;
         libswresamplev = `${(String.fromCharCode(75,0) == iconnotificationnewb ? parseInt(`${backwhitep}`) : iconnotificationnewb.length)}`;
         libavutilu = new Map([[libswresamplev, libswresamplev.length]]);
         break;
      }
      while (nterstitialq.length >= 3 && !loadingspinnerH) {
         loadingspinnerH = (wnewsy.length >> (Math.min(libflipperl.length, 5))) <= 98;
         break;
      }
      for (let w = 0; w < 1; w++) {
          let emojiX = 4.0;
          let delegate_u6r = 5.0;
          let colorsu = String.fromCharCode(98,95,56,53,95,102,102,116,103,0);
          let homeloadingF = String.fromCharCode(98,95,51,57,95,110,111,110,122,101,114,111,0);
         trash3 = `${(nterstitialq == String.fromCharCode(57,0) ? trash3.length : nterstitialq.length)}`;
         emojiX /= Math.max(parseFloat(`${3}`), 5);
         delegate_u6r += parseFloat(`${colorsu.length}`);
         colorsu += `${colorsu.length}`;
         homeloadingF += `${(colorsu == String.fromCharCode(49,0) ? parseInt(`${delegate_u6r}`) : colorsu.length)}`;
      }
      let nbatrophyW = loadingspinnerH ? !loadingspinnerH : loadingspinnerH;
      do {
         loadingspinnerH = 86 <= nterstitialq.length && String.fromCharCode(107,0) == trash3;
         if (nbatrophyW) {
            break;
         }
      } while ((libflipperl.length >= 4) && nbatrophyW);
      mbbanner1 *= (3 + (loadingspinnerH ? 5 : 1));
   if ((mbbanner1 / 1) < 3) {
      mbbanner1 += sharemodal9.length;
   }
       let bggradient9 = String.fromCharCode(114,95,56,49,95,97,101,118,97,108,0);
       let materialO = String.fromCharCode(116,95,55,57,95,114,101,115,101,114,118,101,115,105,122,101,0);
          let completeI = true;
          let placement7 = String.fromCharCode(97,117,116,111,112,108,97,121,95,49,95,52,50,0);
         materialO += `${bggradient9.length}`;
         completeI = !placement7.startsWith(`${completeI}`);
         placement7 += `${(placement7 == String.fromCharCode(97,0) ? (completeI ? 3 : 5) : placement7.length)}`;
       let h_lockb = String.fromCharCode(112,108,97,110,97,114,116,111,121,117,121,95,99,95,54,53,0);
          let notificationgray2 = true;
         materialO += `${((notificationgray2 ? 1 : 1))}`;
      for (let o = 0; o < 2; o++) {
         h_lockb = `${(String.fromCharCode(80,0) == materialO ? materialO.length : bggradient9.length)}`;
      }
         materialO = "2";
      for (let c = 0; c < 2; c++) {
         h_lockb = `${bggradient9.length}`;
      }
      sourceT = subsq.length > parseInt(`${heart6}`);
   for (let v = 0; v < 3; v++) {
      malaysian += (sharemodal9 == String.fromCharCode(48,0) ? sharemodal9.length : scorepopsoundO.length);
   }
       let sinaQ: Array<any> = [String.fromCharCode(106,95,51,48,95,117,98,115,99,114,105,98,101,114,0), String.fromCharCode(117,95,56,95,98,105,116,115,113,112,0), String.fromCharCode(117,115,101,114,95,50,95,57,57,0)];
       let crossO = 0;
      for (let k = 0; k < 1; k++) {
         crossO <<= Math.min(3, Math.abs(1));
      }
         crossO ^= sinaQ.length % 2;
          let successe = false;
         sinaQ = [crossO * 1];
         successe = !successe;
      if (1 >= crossO) {
         crossO <<= Math.min(sinaQ.length, 4);
      }
       let classesW: Array<any> = [752, 114, 110];
      for (let m = 0; m < 2; m++) {
         crossO <<= Math.min(Math.abs(crossO / (Math.max(2, sinaQ.length))), 3);
      }
      sourceT = reactnativeultimatelistviewC.length >= crossO;
   if (5 < (parseInt(`${heart6}`) / (Math.max(7, reactnativeultimatelistviewC.length)))) {
      heart6 /= Math.max(subtextz.length % (Math.max(reactnativeultimatelistviewC.length, 8)), 1);
   }
   while (malaysian < subtextz.length) {
       let aboutg = 0;
       let orangeuparrowq: Array<any> = [248, 93, 228];
      let trophyD = aboutg <= 6446154;
      do {
         aboutg <<= Math.min(Math.abs(2), 3);
         if (trophyD) {
            break;
         }
      } while ((3 <= (aboutg >> (Math.min(Math.abs(4), 5)))) && trophyD);
         orangeuparrowq = [aboutg];
          let reducerB = 3;
         aboutg += 2;
         reducerB >>= Math.min(Math.abs(1 | reducerB), 4);
      while ((aboutg & orangeuparrowq.length) > 4 || 4 > (orangeuparrowq.length & aboutg)) {
         orangeuparrowq.push(orangeuparrowq.length | aboutg);
         break;
      }
      let elementsQ = aboutg >= 8317058;
      do {
         aboutg %= Math.max(aboutg, 5);
         if (elementsQ) {
            break;
         }
      } while (elementsQ && (3 < (aboutg * orangeuparrowq.length) && 5 < (3 * aboutg)));
       let toponk = String.fromCharCode(98,95,50,54,95,115,116,105,99,107,101,114,115,0);
       let nextU = String.fromCharCode(109,105,110,117,116,101,95,104,95,52,51,0);
      subtextz += `${2 >> (Math.min(1, scorepopsoundO.length))}`;
      break;
   }
      mbbanner1 &= (reactnativeultimatelistviewC == String.fromCharCode(120,0) ? reactnativeultimatelistviewC.length : subsq.length);
      malaysian -= sharemodal9.length;
        console.log(err);
      }
    };

    const deviceOrientationHandle = () => {
       let iconcloseB: Map<any, any> = new Map([[String.fromCharCode(116,95,54,51,95,102,105,108,116,101,114,117,118,0),String.fromCharCode(98,115,105,122,101,95,105,95,54,57,0)], [String.fromCharCode(112,95,55,54,95,109,115,103,115,109,0),String.fromCharCode(113,95,49,51,95,112,101,110,100,105,110,103,115,0)]]);
    let airbnbstarselectedW: Array<any> = [479, 425];
    let libreactK = false;
    let iconplayM: Map<any, any> = new Map([[String.fromCharCode(97,95,51,53,95,107,105,115,115,0),303], [String.fromCharCode(100,101,99,111,114,97,116,101,95,102,95,56,53,0),136], [String.fromCharCode(116,99,102,105,108,101,95,106,95,49,48,0),845]]);
    let baiduadsX = false;
    let activeL = false;
    let mbbannerQ = false;
    let release_vG = 4.0;
    let overr = String.fromCharCode(103,95,56,48,95,117,110,112,114,111,99,101,115,115,101,100,0);
    let arrowupn = 5;
    let bridgeW = 2.0;
    let redgoalk: Array<any> = [371, 119];
   let corner4 = mbbannerQ ? !mbbannerQ : mbbannerQ;
   do {
      mbbannerQ = airbnbstarselectedW.length >= 63 && libreactK;
      if (corner4) {
         break;
      }
   } while (corner4 && (!mbbannerQ));
   let hongkongC = activeL ? !activeL : activeL;
   do {
      activeL = iconplayM.size >= 40;
      if (hongkongC) {
         break;
      }
   } while (hongkongC && (overr.startsWith(`${activeL}`)));
      arrowupn <<= Math.min(parseInt(`${Math.abs((iconplayM.size << (Math.min(3, Math.abs((libreactK ? 4 : 1))))))}`), 4);
   for (let d = 0; d < 3; d++) {
       let actionsN = String.fromCharCode(122,95,52,50,95,114,101,110,101,119,0);
          let orangeclockc = String.fromCharCode(97,95,54,50,95,115,97,116,105,115,102,105,101,100,0);
          let iconwatchnowT = String.fromCharCode(110,95,53,95,112,114,111,98,115,0);
         actionsN += `${2 * actionsN.length}`;
         orangeclockc = `${orangeclockc.length}`;
         iconwatchnowT += `${(String.fromCharCode(85,0) == orangeclockc ? orangeclockc.length : iconwatchnowT.length)}`;
         actionsN += `${actionsN.length << (Math.min(Math.abs(1), 3))}`;
      while (actionsN.length == actionsN.length) {
         actionsN += `${(actionsN == String.fromCharCode(109,0) ? actionsN.length : actionsN.length)}`;
         break;
      }
      activeL = activeL || !baiduadsX;
   }

      

   for (let a = 0; a < 3; a++) {
      arrowupn %= Math.max(2, arrowupn & 1);
   }
   while ((release_vG * 4.93) <= 4.99) {
      release_vG += iconcloseB.size;
      break;
   }
      activeL = 40 > arrowupn || !mbbannerQ;
       let notificationgrayx = 0;
       let leagueF = String.fromCharCode(119,95,56,51,95,102,105,110,97,108,105,122,101,114,0);
         notificationgrayx *= leagueF.length + notificationgrayx;
      if ((1 >> (Math.min(5, Math.abs(notificationgrayx)))) <= 1 && (notificationgrayx >> (Math.min(Math.abs(1), 4))) <= 5) {
         leagueF = "3";
      }
         notificationgrayx -= (String.fromCharCode(71,0) == leagueF ? notificationgrayx : leagueF.length);
          let redcirclebg9 = 0.0;
          let bnewsI: Map<any, any> = new Map([[String.fromCharCode(113,95,53,48,95,106,114,110,108,0),889], [String.fromCharCode(97,95,56,52,95,119,97,108,108,112,97,112,101,114,0),232]]);
          let homea = 2.0;
         notificationgrayx |= parseInt(`${homea}`) / (Math.max(leagueF.length, 9));
         redcirclebg9 += bnewsI.size * parseInt(`${redcirclebg9}`);
         bnewsI = new Map([[`${bnewsI.size}`, bnewsI.size - parseInt(`${redcirclebg9}`)]]);
         homea += parseFloat(`${1 ^ bnewsI.size}`);
      while (leagueF.includes(`${notificationgrayx}`)) {
         notificationgrayx |= notificationgrayx;
         break;
      }
      while (4 < (1 | leagueF.length)) {
         notificationgrayx %= Math.max(leagueF.length, 5);
         break;
      }
      baiduadsX = !libreactK;
      if (
        devicesOrientation === "LANDSCAPE-LEFT" ||
        devicesOrientation === "LANDSCAPE-RIGHT"
      ) {

      overr = `${airbnbstarselectedW.length}`;
      overr += `${airbnbstarselectedW.length}`;
       let libavdeviceR: Map<any, any> = new Map([[String.fromCharCode(97,112,112,108,105,101,114,95,103,95,57,53,0),520], [String.fromCharCode(99,95,53,55,95,118,112,99,99,0),652]]);
       let goallogo7 = 5.0;
          let dependenciesE = 3;
          let description_c_P = String.fromCharCode(114,95,50,49,95,115,116,114,111,107,101,115,0);
          let brightness_: Array<any> = [107, 616, 866];
         libavdeviceR = new Map([[description_c_P, description_c_P.length]]);
         dependenciesE %= Math.max(2, 2);
         brightness_.push(1 | brightness_.length);
      for (let s = 0; s < 3; s++) {
         libavdeviceR = new Map([[`${libavdeviceR.size}`, 2 * parseInt(`${goallogo7}`)]]);
      }
         goallogo7 /= Math.max(parseFloat(`${libavdeviceR.size}`), 3);
      for (let z = 0; z < 1; z++) {
         goallogo7 /= Math.max(5, parseFloat(`${1}`));
      }
         libavdeviceR.set(`${goallogo7}`, parseInt(`${goallogo7}`));
       let iconpipexpandT = 1.0;
      iconcloseB.set(`${iconplayM.size}`, iconplayM.size ^ 2);
      iconplayM = new Map([[`${iconcloseB.size}`, arrowupn ^ 1]]);
        setIsFullScreen(true);

   while (activeL) {
      activeL = mbbannerQ && release_vG == 77.25;
      break;
   }
   while (2 <= (iconcloseB.size / 2) && !activeL) {
       let componentsR = String.fromCharCode(101,110,97,98,108,101,95,53,95,56,55,0);
       let anytimeN = String.fromCharCode(112,97,115,99,97,108,95,100,95,50,53,0);
       let combinedM = false;
       let libreactnativejniI: Map<any, any> = new Map([[String.fromCharCode(101,95,51,51,95,106,111,105,110,101,100,0),367], [String.fromCharCode(104,109,97,99,95,115,95,50,49,0),880]]);
         componentsR += `${(anytimeN == String.fromCharCode(121,0) ? anytimeN.length : (combinedM ? 4 : 1))}`;
         combinedM = (anytimeN.length / (Math.max(8, componentsR.length))) < 63;
          let lessB = false;
         anytimeN = `${((lessB ? 3 : 5) | (combinedM ? 2 : 2))}`;
          let stepQ = 0;
          let cornershootP = String.fromCharCode(118,95,53,48,95,100,101,103,114,101,101,115,0);
         anytimeN = `${componentsR.length / (Math.max(2, 3))}`;
         stepQ <<= Math.min(5, Math.abs(stepQ >> (Math.min(cornershootP.length, 3))));
         cornershootP += `${(cornershootP == String.fromCharCode(108,0) ? cornershootP.length : stepQ)}`;
      if ((libreactnativejniI.size * 3) > 4) {
          let sportsu: Array<any> = [402, 54, 987];
         anytimeN = `${componentsR.length}`;
         sportsu.push(sportsu.length);
      }
         combinedM = !combinedM && componentsR.length == 94;
      while (anytimeN != String.fromCharCode(79,0) && componentsR == String.fromCharCode(72,0)) {
         anytimeN += `${anytimeN.length}`;
         break;
      }
          let bridgeZ: Array<any> = [303, 62, 823];
          let yellowtoreds = false;
         componentsR += `${((yellowtoreds ? 5 : 3) << (Math.min(Math.abs((combinedM ? 4 : 4)), 1)))}`;
         bridgeZ = [1];
         yellowtoreds = (bridgeZ.length / (Math.max(10, bridgeZ.length))) >= 29;
       let libreactw = String.fromCharCode(109,105,110,105,109,97,95,53,95,56,52,0);
       let profileframe1 = String.fromCharCode(105,95,55,55,95,114,101,97,115,115,101,109,98,108,121,0);
         anytimeN = `${2 + libreactnativejniI.size}`;
      if (componentsR.startsWith(anytimeN)) {
         componentsR = `${componentsR.length}`;
      }
       let huawei2 = false;
      iconcloseB.set(`${arrowupn}`, libreactnativejniI.size);
      break;
   }
      airbnbstarselectedW.push(airbnbstarselectedW.length);
       let connectionr = false;
       let owngoalu = 2.0;
      while (3.30 <= (1.36 + owngoalu) && connectionr) {
          let lightv: Map<any, any> = new Map([[String.fromCharCode(115,95,49,53,95,118,97,114,105,97,110,116,115,0),816], [String.fromCharCode(115,95,56,51,95,99,97,108,99,117,108,97,116,101,0),358], [String.fromCharCode(105,95,52,48,95,97,114,114,97,110,103,101,109,101,110,116,0),31]]);
          let roundZ = String.fromCharCode(98,95,57,54,95,112,108,116,101,0);
          let calendarH = 2;
          let bodan0 = String.fromCharCode(118,95,55,50,95,101,110,118,101,108,111,112,101,0);
         owngoalu += (parseFloat(`${String.fromCharCode(74,0) == roundZ ? roundZ.length : parseInt(`${owngoalu}`)}`));
         lightv = new Map([[`${lightv.size}`, (bodan0 == String.fromCharCode(75,0) ? bodan0.length : lightv.size)]]);
         calendarH -= bodan0.length;
         break;
      }
      if (2.2 < (owngoalu - 4.69) && connectionr) {
         connectionr = owngoalu == 26.63 && connectionr;
      }
      if (2.0 < (3.82 - owngoalu)) {
         owngoalu *= parseFloat(`${2 ^ parseInt(`${owngoalu}`)}`);
      }
      for (let v = 0; v < 1; v++) {
          let combinedW = 2.0;
          let libffmpegkitR = String.fromCharCode(102,95,54,55,95,115,117,98,110,111,100,101,0);
          let holder4 = String.fromCharCode(102,95,52,49,95,112,114,111,100,117,99,101,114,0);
          let expandm = String.fromCharCode(104,95,55,51,95,115,97,110,105,116,105,122,101,0);
          let zhengpianB = String.fromCharCode(100,95,53,56,95,108,97,110,103,117,97,103,101,115,0);
         connectionr = (parseInt(`${owngoalu}`) - zhengpianB.length) > 6;
         combinedW -= parseInt(`${combinedW}`) / 2;
         libffmpegkitR += `${expandm.length / (Math.max(2, holder4.length))}`;
         holder4 += `${expandm.length}`;
         zhengpianB += `${libffmpegkitR.length}`;
      }
      let libcrashsdk6 = connectionr ? !connectionr : connectionr;
      do {
         connectionr = connectionr || 76.94 == owngoalu;
         if (libcrashsdk6) {
            break;
         }
      } while (libcrashsdk6 && (3.83 >= owngoalu));
         owngoalu /= Math.max(2, (parseFloat(`${(connectionr ? 2 : 2) + parseInt(`${owngoalu}`)}`)));
      release_vG *= (parseInt(`${release_vG}`) + (connectionr ? 5 : 5));
        

      iconplayM = new Map([[`${iconcloseB.size}`, iconcloseB.size >> (Math.min(Math.abs(1), 3))]]);
   while (mbbannerQ) {
      mbbannerQ = airbnbstarselectedW.length == 87 && iconcloseB.size == 87;
      break;
   }
   while (Array.from(iconcloseB.values()).includes(arrowupn)) {
      iconcloseB.set(`${activeL}`, ((activeL ? 5 : 5) * (baiduadsX ? 1 : 5)));
      break;
   }
   let inactive0 = airbnbstarselectedW.length <= 5657825;
   do {
      airbnbstarselectedW = [iconcloseB.size];
      if (inactive0) {
         break;
      }
   } while (((airbnbstarselectedW.length - iconcloseB.size) < 5 && (iconcloseB.size - 5) < 4) && inactive0);
        StatusBar.setHidden(true);

      activeL = 47 > arrowupn;
      libreactK = iconplayM.size == 63 && baiduadsX;
   while ((release_vG + 5.36) >= 4.9) {
       let modalS = 2;
       let imageactionlives = 3;
       let tickz = String.fromCharCode(97,99,99,114,117,101,95,50,95,49,52,0);
       let casty = String.fromCharCode(99,111,110,100,117,99,116,111,114,95,51,95,54,50,0);
       let latng = String.fromCharCode(105,110,116,102,114,95,54,95,52,49,0);
      while (!tickz.endsWith(casty)) {
         casty = `${imageactionlives}`;
         break;
      }
      if (latng.includes(`${tickz.length}`)) {
         tickz = `${1 ^ casty.length}`;
      }
         latng = `${1 + modalS}`;
      if (5 > tickz.length && 5 > casty.length) {
          let containerM = 2.0;
          let navigation2 = false;
          let webviewl = 1;
         casty += `${3 % (Math.max(6, modalS))}`;
         containerM -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${containerM}`)), 2))}`);
         navigation2 = 90.55 > containerM && !navigation2;
         webviewl >>= Math.min(Math.abs(((navigation2 ? 2 : 5) ^ webviewl)), 2);
      }
       let ncopy_nd = String.fromCharCode(99,95,53,55,95,99,104,114,111,109,105,110,97,110,99,101,0);
          let referrerJ = 4.0;
          let playershirtf = 4.0;
          let langkeyB = String.fromCharCode(111,108,100,101,114,95,101,95,51,49,0);
         ncopy_nd += `${2 * casty.length}`;
         referrerJ *= parseFloat(`${parseInt(`${playershirtf}`)}`);
         playershirtf -= 3 - langkeyB.length;
         langkeyB += `${langkeyB.length * 1}`;
         latng += `${ncopy_nd.length}`;
      if (1 >= casty.length) {
         ncopy_nd = `${2 << (Math.min(1, latng.length))}`;
      }
       let modityn = String.fromCharCode(121,95,54,55,95,116,114,97,110,115,102,111,114,109,115,0);
      if (ncopy_nd.startsWith(`${modalS}`)) {
          let libtan3 = String.fromCharCode(104,95,51,52,95,100,105,115,116,114,105,98,117,116,105,111,110,0);
          let loadingspinnerT = true;
          let hooksI = true;
          let playlistj: Map<any, any> = new Map([[String.fromCharCode(103,95,50,56,95,115,104,101,101,116,0),String.fromCharCode(116,114,97,110,115,112,111,110,101,100,95,50,95,56,54,0)], [String.fromCharCode(100,97,116,97,99,101,110,116,101,114,115,95,120,95,49,51,0),String.fromCharCode(116,100,115,102,95,54,95,51,51,0)], [String.fromCharCode(101,109,117,108,97,116,101,100,95,101,95,49,56,0),String.fromCharCode(110,95,51,48,95,108,111,99,97,108,105,116,121,0)]]);
         modalS -= playlistj.size;
         libtan3 = `${(String.fromCharCode(66,0) == libtan3 ? libtan3.length : (loadingspinnerT ? 1 : 1))}`;
         loadingspinnerT = (loadingspinnerT ? !hooksI : !loadingspinnerT);
         hooksI = (!hooksI ? loadingspinnerT : hooksI);
         playlistj = new Map([[`${loadingspinnerT}`, 2 ^ libtan3.length]]);
      }
      while (tickz.length < 5) {
         tickz = `${latng.length}`;
         break;
      }
      for (let i = 0; i < 3; i++) {
          let floatery = String.fromCharCode(102,95,49,52,95,97,103,101,110,116,0);
          let lesso = 3.0;
          let sortu: Array<any> = [String.fromCharCode(118,101,110,100,111,114,95,108,95,52,49,0), String.fromCharCode(99,108,111,99,107,95,51,95,52,54,0), String.fromCharCode(100,111,99,105,100,115,95,54,95,52,52,0)];
          let alert1: Map<any, any> = new Map([[String.fromCharCode(115,105,120,95,98,95,52,49,0),22], [String.fromCharCode(119,95,54,57,95,103,101,110,101,114,105,99,0),303]]);
         imageactionlives >>= Math.min(2, Math.abs((floatery == String.fromCharCode(114,0) ? parseInt(`${lesso}`) : floatery.length)));
         lesso /= Math.max(sortu.length, 2);
         sortu.push(sortu.length);
         alert1 = new Map([[`${alert1.size}`, 2 << (Math.min(1, Math.abs(alert1.size)))]]);
      }
          let private_jR = true;
          let bodan3 = false;
          let stepo = String.fromCharCode(101,95,54,49,95,114,111,117,110,100,0);
         modalS >>= Math.min(Math.abs(ncopy_nd.length - tickz.length), 4);
         private_jR = !bodan3;
         stepo += `${((private_jR ? 2 : 1))}`;
         modityn = `${3 + latng.length}`;
      for (let f = 0; f < 2; f++) {
         casty += `${tickz.length - 3}`;
      }
      release_vG /= Math.max(4, 2 % (Math.max(6, latng.length)));
      break;
   }
      mbbannerQ = iconplayM.size >= iconcloseB.size;

        lockOrientation(devicesOrientation);
      } else if (devicesOrientation === "PORTRAIT") {

   if (activeL) {
      iconcloseB.set(`${baiduadsX}`, ((baiduadsX ? 5 : 3) % (Math.max(3, (mbbannerQ ? 1 : 5)))));
   }
   if (1 == airbnbstarselectedW.length) {
      overr = `${2 | parseInt(`${release_vG}`)}`;
   }
      activeL = !baiduadsX;
      arrowupn >>= Math.min(Math.abs(((baiduadsX ? 5 : 3) & 3)), 2);
        setIsFullScreen(false);

      libreactK = overr.startsWith(`${arrowupn}`);
   while (iconplayM.size >= 4) {
      iconplayM.set(`${release_vG}`, iconcloseB.size & 3);
      break;
   }
   while (overr.length == 4) {
      overr = "1";
      break;
   }
   if ((4.53 - release_vG) > 3.57 || (5 | iconplayM.size) > 5) {
       let relatedU = true;
       let redcirclebgy = String.fromCharCode(110,112,97,116,99,104,101,115,95,51,95,57,52,0);
       let librrc9 = String.fromCharCode(101,103,111,108,111,109,98,95,113,95,50,53,0);
       let brightness9 = String.fromCharCode(121,95,54,56,95,120,99,111,100,101,0);
         redcirclebgy = `${1 << (Math.min(3, brightness9.length))}`;
          let lineI: Map<any, any> = new Map([[String.fromCharCode(109,95,51,95,105,116,113,117,101,117,101,0),471], [String.fromCharCode(97,95,55,48,95,102,101,119,0),822]]);
         redcirclebgy += `${2 & librrc9.length}`;
         lineI = new Map([[`${lineI.size}`, lineI.size - lineI.size]]);
       let typesX = String.fromCharCode(101,108,108,105,111,116,116,95,51,95,52,54,0);
         typesX = `${(String.fromCharCode(66,0) == librrc9 ? (relatedU ? 4 : 4) : librrc9.length)}`;
         redcirclebgy += `${1 * librrc9.length}`;
         relatedU = librrc9 == String.fromCharCode(121,0);
      let matchdetailbgR = librrc9.length <= 9727189;
      do {
         librrc9 = `${2 & brightness9.length}`;
         if (matchdetailbgR) {
            break;
         }
      } while ((brightness9 == String.fromCharCode(51,0)) && matchdetailbgR);
          let charte = 1.0;
          let singleA = 2;
          let analytics4 = String.fromCharCode(110,95,49,48,95,97,114,101,97,115,0);
         typesX += `${1 >> (Math.min(1, analytics4.length))}`;
         charte += parseFloat(`${singleA + 1}`);
         singleA -= singleA;
         analytics4 += `${singleA & 3}`;
         brightness9 += `${((relatedU ? 5 : 3) & 3)}`;
      while (!relatedU) {
         redcirclebgy += `${((relatedU ? 5 : 3) / 1)}`;
         break;
      }
      if (librrc9 != String.fromCharCode(75,0)) {
          let libavfilter5: Map<any, any> = new Map([[String.fromCharCode(105,95,56,53,95,99,121,99,108,105,99,114,101,102,114,101,115,104,0),179], [String.fromCharCode(115,119,105,114,108,95,113,95,49,48,48,0),502], [String.fromCharCode(115,117,98,114,97,110,103,101,115,95,115,95,56,54,0),867]]);
         brightness9 += `${2 >> (Math.min(1, typesX.length))}`;
         libavfilter5.set(`${libavfilter5.size}`, 3);
      }
       let point4 = String.fromCharCode(111,98,117,115,95,121,95,52,48,0);
       let crownS = String.fromCharCode(103,101,110,101,114,97,108,95,122,95,51,52,0);
      release_vG /= Math.max(parseInt(`${release_vG}`), 3);
   }
        

      mbbannerQ = iconplayM.get(`${libreactK}`) == null;
   if (2 >= (overr.length / (Math.max(5, arrowupn))) || 2 >= (arrowupn / 2)) {
       let eventsplashE: Array<any> = [43, 376, 385];
       let kuaishouG = 0.0;
       let search1 = 3;
       let libfollyb: Array<any> = [64, 728, 637];
          let iconviewerE = String.fromCharCode(100,101,105,110,105,116,95,98,95,57,50,0);
         eventsplashE.push(eventsplashE.length);
         iconviewerE += "3";
      if (3.20 <= (4.69 * kuaishouG) || 4.69 <= (kuaishouG * libfollyb.length)) {
         kuaishouG += parseInt(`${kuaishouG}`);
      }
         search1 ^= search1;
      if (1.53 > kuaishouG) {
         libfollyb = [3 ^ eventsplashE.length];
      }
          let greytickw: Map<any, any> = new Map([[String.fromCharCode(109,95,56,50,95,99,111,114,114,101,99,116,105,111,110,0),String.fromCharCode(111,95,49,48,95,105,110,116,101,114,97,99,116,105,118,101,0)], [String.fromCharCode(105,110,116,114,111,95,112,95,57,49,0),String.fromCharCode(112,95,54,55,95,115,111,119,97,107,101,117,112,0)], [String.fromCharCode(114,101,100,117,99,101,95,112,95,55,54,0),String.fromCharCode(98,105,116,114,101,100,117,99,116,105,111,110,95,114,95,54,55,0)]]);
          let gifgoalbgq = 4.0;
          let services = 1.0;
         eventsplashE.push(2 - parseInt(`${gifgoalbgq}`));
         greytickw = new Map([[`${greytickw.size}`, greytickw.size ^ 1]]);
         gifgoalbgq *= parseFloat(`${2}`);
         services *= greytickw.size * 1;
       let distL = String.fromCharCode(118,105,101,119,95,105,95,53,56,0);
       let topond = String.fromCharCode(101,120,112,105,114,101,100,95,101,95,56,52,0);
          let switch_k0: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,114,121,95,53,95,52,52,0),625], [String.fromCharCode(104,95,49,56,95,100,117,114,97,116,105,111,110,115,0),688]]);
          let loading_ = String.fromCharCode(110,95,56,52,95,108,105,102,101,99,121,99,108,101,0);
          let showh: Array<any> = [String.fromCharCode(115,105,110,117,115,111,105,100,97,108,95,105,95,51,55,0), String.fromCharCode(108,95,56,95,114,111,117,110,100,105,110,103,0), String.fromCharCode(113,117,97,110,116,95,121,95,55,54,0)];
         distL += `${loading_.length}`;
         switch_k0.set(`${showh.length}`, 3);
         loading_ += "2";
         showh.push(showh.length - switch_k0.size);
       let shrinko: Map<any, any> = new Map([[String.fromCharCode(108,95,50,57,95,115,109,105,108,105,110,103,0),String.fromCharCode(110,101,116,95,51,95,54,54,0)], [String.fromCharCode(105,110,100,101,111,95,117,95,50,48,0),String.fromCharCode(115,101,114,118,101,114,95,106,95,54,50,0)]]);
       let l_centera: Map<any, any> = new Map([[String.fromCharCode(120,95,54,55,95,119,115,119,111,114,100,0),834], [String.fromCharCode(111,95,57,52,95,114,107,109,112,112,0),537]]);
      let commonb = 8231483 >= topond.length;
      do {
         topond = `${3 * shrinko.size}`;
         if (commonb) {
            break;
         }
      } while (commonb && (!topond.startsWith(`${kuaishouG}`)));
      for (let d = 0; d < 3; d++) {
         kuaishouG *= 1;
      }
         shrinko = new Map([[`${eventsplashE.length}`, eventsplashE.length]]);
         eventsplashE.push(l_centera.size);
      arrowupn >>= Math.min(Math.abs(parseInt(`${kuaishouG}`)), 3);
   }
      arrowupn /= Math.max(2, ((mbbannerQ ? 3 : 3)));
       let moonL = false;
      let classesZ = moonL ? !moonL : moonL;
      do {
         moonL = !moonL;
         if (classesZ) {
            break;
         }
      } while ((!moonL && !moonL) && classesZ);
      let storeG = moonL ? !moonL : moonL;
      do {
         moonL = !moonL;
         if (storeG) {
            break;
         }
      } while (storeG && (!moonL));
      while (moonL || moonL) {
          let questG = 1;
         moonL = questG > 5;
         break;
      }
      activeL = 19.39 >= bridgeW && mbbannerQ;
        StatusBar.setHidden(false);

      iconcloseB = new Map([[`${iconcloseB.size}`, iconcloseB.size * 2]]);
   let chinaO = release_vG >= 6813865.0;
   do {
      release_vG += redgoalk.length;
      if (chinaO) {
         break;
      }
   } while (chinaO && (4.89 < release_vG));
      libreactK = 83 > overr.length;
      release_vG *= 1 << (Math.min(Math.abs(parseInt(`${bridgeW}`)), 1));

        lockOrientation(devicesOrientation);
      }
    };

    const onToggleFullScreen = useCallback(() => {
       let interstitialH = false;
    let yellowvideolive_ = 5;
    let libturbomodulejsijniZ = String.fromCharCode(108,95,56,54,95,100,101,105,110,105,116,0);
    let pingt = 2;
    let redgoalI: Array<any> = [String.fromCharCode(99,97,108,108,105,110,103,95,108,95,50,54,0), String.fromCharCode(105,95,57,50,95,115,105,103,110,97,108,0), String.fromCharCode(114,95,52,52,95,109,101,110,117,0)];
    let megaphone0: Map<any, any> = new Map([[String.fromCharCode(116,95,51,53,95,101,120,112,97,110,100,97,98,108,101,0),true ], [String.fromCharCode(109,95,49,50,95,97,118,99,105,110,116,114,97,0),false ]]);
    let optionsE = String.fromCharCode(105,95,52,49,95,111,112,101,110,0);
    let userZ = String.fromCharCode(109,95,56,56,95,98,101,104,97,118,105,111,117,114,0);
    let typingloadingk = String.fromCharCode(97,103,103,105,110,102,111,95,110,95,54,48,0);
    let latny = String.fromCharCode(99,95,56,53,95,103,101,110,101,114,97,116,101,100,0);
    let goallogop = 2.0;
    let telemetryX = 3.0;
    let executor4: Map<any, any> = new Map([[String.fromCharCode(109,115,103,95,101,95,50,51,0),String.fromCharCode(100,105,114,101,99,116,108,121,95,51,95,49,48,48,0)], [String.fromCharCode(104,101,118,99,112,114,101,100,95,102,95,49,50,0),String.fromCharCode(105,95,55,48,95,116,121,112,101,115,116,114,0)]]);
    let gestureI = String.fromCharCode(114,101,100,95,101,95,57,51,0);
    let libreactperfloggerjnil = String.fromCharCode(108,95,49,95,105,110,116,114,97,102,114,97,109,101,0);
    let changeG = String.fromCharCode(112,97,114,116,115,95,104,95,57,53,0);
      goallogop /= Math.max(4, parseFloat(`${1 * userZ.length}`));
   while (yellowvideolive_ <= latny.length) {
      latny = `${2 + redgoalI.length}`;
      break;
   }
      pingt <<= Math.min(5, Math.abs(((interstitialH ? 2 : 2) | parseInt(`${goallogop}`))));

      if (
        appOrientation === "LANDSCAPE-LEFT" ||
        appOrientation === "LANDSCAPE-RIGHT"
      ) {

   for (let c = 0; c < 1; c++) {
      libturbomodulejsijniZ = `${pingt % (Math.max(10, libturbomodulejsijniZ.length))}`;
   }
      latny = "1";
      telemetryX /= Math.max(2, parseFloat(`${2 * userZ.length}`));
        lockOrientation("PORTRAIT");

      goallogop += (parseFloat(`${parseInt(`${telemetryX}`) | (interstitialH ? 1 : 2)}`));
   while (libturbomodulejsijniZ != String.fromCharCode(99,0) && latny.length <= 3) {
      libturbomodulejsijniZ = "3";
      break;
   }
       let sharemodal9 = String.fromCharCode(117,95,55,95,122,99,111,110,118,111,108,118,101,0);
       let backiconmaskw = String.fromCharCode(112,95,51,55,95,115,116,121,108,101,100,0);
      if (3 <= backiconmaskw.length || sharemodal9 == String.fromCharCode(66,0)) {
         backiconmaskw += `${sharemodal9.length}`;
      }
         sharemodal9 += `${backiconmaskw.length / (Math.max(3, 4))}`;
      if (sharemodal9.includes(backiconmaskw)) {
         sharemodal9 += "1";
      }
      for (let i = 0; i < 2; i++) {
          let rootp = 2;
          let countryp: Map<any, any> = new Map([[String.fromCharCode(116,111,107,101,110,105,122,101,95,111,95,53,54,0),true ], [String.fromCharCode(115,95,56,54,95,118,111,119,101,108,0),true ]]);
          let libpangleflippedj = String.fromCharCode(106,95,56,51,95,115,112,101,110,100,101,114,0);
         backiconmaskw += `${rootp / (Math.max(sharemodal9.length, 1))}`;
         rootp |= libpangleflippedj.length * 1;
         countryp.set(libpangleflippedj, countryp.size);
      }
      for (let t = 0; t < 3; t++) {
         backiconmaskw = `${backiconmaskw.length * 3}`;
      }
      let textM = backiconmaskw.length >= 7572573;
      do {
         backiconmaskw += `${sharemodal9.length / (Math.max(4, backiconmaskw.length))}`;
         if (textM) {
            break;
         }
      } while (textM && (backiconmaskw.length >= 4));
      megaphone0 = new Map([[sharemodal9, sharemodal9.length]]);
        setIsFullScreen(false);

      goallogop -= parseFloat(`${libturbomodulejsijniZ.length}`);
      userZ += `${megaphone0.size | 2}`;
   let libjsim = interstitialH ? !interstitialH : interstitialH;
   do {
      interstitialH = !interstitialH;
      if (libjsim) {
         break;
      }
   } while ((!interstitialH) && libjsim);
        

      latny = `${(libturbomodulejsijniZ.length * (interstitialH ? 1 : 4))}`;
   for (let r = 0; r < 1; r++) {
      goallogop += parseFloat(`${latny.length}`);
   }
      pingt |= parseInt(`${telemetryX}`) % (Math.max(executor4.size, 5));
        StatusBar.setHidden(false);

      userZ = `${redgoalI.length}`;
      libturbomodulejsijniZ += `${megaphone0.size}`;
   for (let d = 0; d < 1; d++) {
       let iconviewer6: Map<any, any> = new Map([[String.fromCharCode(105,100,102,118,95,98,95,51,50,0),787], [String.fromCharCode(111,102,111,114,109,97,116,95,102,95,57,53,0),170]]);
         iconviewer6.set(`${iconviewer6.size}`, iconviewer6.size ^ 1);
          let transferG: Array<any> = [221, 338, 986];
         iconviewer6.set(`${transferG.length}`, iconviewer6.size - transferG.length);
       let colorsp = String.fromCharCode(105,95,50,52,95,99,111,101,102,102,0);
      goallogop += parseFloat(`${1}`);
   }

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      } else {

   if ((2 & megaphone0.size) == 5) {
      megaphone0 = new Map([[`${goallogop}`, typingloadingk.length ^ parseInt(`${goallogop}`)]]);
   }
   let gmaile = 8863814 >= yellowvideolive_;
   do {
      yellowvideolive_ |= 2 + redgoalI.length;
      if (gmaile) {
         break;
      }
   } while ((yellowvideolive_ <= 5) && gmaile);
   while (libturbomodulejsijniZ.endsWith(`${pingt}`)) {
      libturbomodulejsijniZ = `${latny.length << (Math.min(2, redgoalI.length))}`;
      break;
   }
        lockOrientation("LANDSCAPE");

      pingt &= 3;
   for (let t = 0; t < 1; t++) {
       let predictionactivec: Array<any> = [String.fromCharCode(103,95,51,55,95,115,111,102,116,116,104,114,101,115,104,0), String.fromCharCode(110,111,116,99,104,101,100,95,57,95,50,54,0), String.fromCharCode(115,109,97,99,107,101,114,95,50,95,54,48,0)];
       let controls3 = 5;
       let castingl = String.fromCharCode(97,115,115,111,99,108,105,115,116,95,113,95,52,51,0);
         predictionactivec = [1];
      if (predictionactivec.includes(controls3)) {
          let textlayoutmanagero = String.fromCharCode(116,97,115,107,95,114,95,57,53,0);
         controls3 <<= Math.min(Math.abs(controls3), 3);
         textlayoutmanagero += `${textlayoutmanagero.length}`;
      }
          let cores = String.fromCharCode(114,101,99,111,103,110,105,122,101,95,104,95,50,53,0);
         predictionactivec.push(3);
         cores += `${cores.length}`;
      let rewardvideoQ = controls3 >= 9563972;
      do {
          let description_dh3 = 4;
          let floatingG = String.fromCharCode(107,95,56,55,95,98,97,115,105,99,115,0);
         controls3 >>= Math.min(1, Math.abs(castingl.length ^ 1));
         description_dh3 >>= Math.min(2, Math.abs(floatingG.length - description_dh3));
         floatingG = `${floatingG.length << (Math.min(Math.abs(2), 1))}`;
         if (rewardvideoQ) {
            break;
         }
      } while (rewardvideoQ && (castingl.length >= controls3));
         predictionactivec.push(2);
         castingl = `${castingl.length}`;
       let turndowni = String.fromCharCode(98,117,116,116,111,110,95,116,95,54,49,0);
       let mintegralE = String.fromCharCode(98,95,52,57,95,115,105,103,101,120,112,0);
      for (let g = 0; g < 3; g++) {
          let turnv = false;
          let iconnewssharei = String.fromCharCode(98,101,115,115,101,108,95,119,95,53,48,0);
         mintegralE += "1";
         turnv = 75 >= iconnewssharei.length;
         iconnewssharei = `${iconnewssharei.length % (Math.max(6, iconnewssharei.length))}`;
      }
         castingl += `${mintegralE.length}`;
      yellowvideolive_ %= Math.max(executor4.size ^ parseInt(`${telemetryX}`), 5);
   }
   let detailsZ = gestureI == String.fromCharCode(114,110,122,50,122,49,97,97,110,105,0);
   do {
      gestureI += `${libturbomodulejsijniZ.length / (Math.max(10, executor4.size))}`;
      if (detailsZ) {
         break;
      }
   } while ((gestureI.length > optionsE.length) && detailsZ);
        setIsFullScreen(true);

      optionsE += `${parseInt(`${telemetryX}`)}`;
      libturbomodulejsijniZ += `${userZ.length}`;
   while (3 > (optionsE.length | 4) && 4 > (yellowvideolive_ | optionsE.length)) {
       let imagenomoredatac: Map<any, any> = new Map([[String.fromCharCode(109,105,109,105,99,95,52,95,55,49,0),true ], [String.fromCharCode(109,95,49,49,95,107,100,102,0),true ]]);
       let bodani: Array<any> = [394, 149];
       let predictionwinl = 0.0;
         predictionwinl *= parseInt(`${predictionwinl}`) % 1;
       let encrypt5 = String.fromCharCode(106,119,116,95,56,95,49,57,0);
      while (bodani.length < 2) {
          let link2 = String.fromCharCode(115,116,97,116,117,115,111,114,95,118,95,50,56,0);
          let popup5 = String.fromCharCode(102,95,50,48,95,103,114,111,117,112,110,97,109,101,115,0);
          let encryptu = 2.0;
         bodani = [3 & parseInt(`${predictionwinl}`)];
         link2 = `${popup5.length >> (Math.min(Math.abs(3), 1))}`;
         popup5 += `${link2.length}`;
         encryptu *= parseInt(`${encryptu}`) - 2;
         break;
      }
      if (bodani.includes(predictionwinl)) {
          let loginsuccess6 = false;
         predictionwinl *= bodani.length * parseInt(`${predictionwinl}`);
         loginsuccess6 = (loginsuccess6 ? !loginsuccess6 : loginsuccess6);
      }
         bodani = [3 >> (Math.min(3, encrypt5.length))];
      let profilepic8 = String.fromCharCode(105,56,103,98,115,105,55,108,51,55,0) == encrypt5;
      do {
         encrypt5 = `${encrypt5.length}`;
         if (profilepic8) {
            break;
         }
      } while ((5 > (3 ^ encrypt5.length)) && profilepic8);
         predictionwinl /= Math.max(3, 4);
      while ((encrypt5.length + predictionwinl) < 3.43 && 3.43 < (encrypt5.length + predictionwinl)) {
         predictionwinl += 2;
         break;
      }
      if (imagenomoredatac.size < encrypt5.length) {
          let predictionbuttonw = String.fromCharCode(109,95,57,57,95,103,114,101,101,100,121,0);
          let homeplayerE = String.fromCharCode(116,111,109,99,114,121,112,116,95,104,95,55,54,0);
         encrypt5 += `${3 ^ homeplayerE.length}`;
         predictionbuttonw = `${predictionbuttonw.length | predictionbuttonw.length}`;
         homeplayerE += `${predictionbuttonw.length}`;
      }
      optionsE += `${(String.fromCharCode(66,0) == latny ? latny.length : parseInt(`${goallogop}`))}`;
      break;
   }
        

      interstitialH = 99 < typingloadingk.length;
      megaphone0 = new Map([[`${redgoalI.length}`, ((interstitialH ? 3 : 1) ^ redgoalI.length)]]);
      userZ = `${(String.fromCharCode(50,0) == userZ ? userZ.length : optionsE.length)}`;
        StatusBar.setHidden(true);

   for (let w = 0; w < 2; w++) {
      pingt ^= gestureI.length;
   }
   if (3 > typingloadingk.length) {
      optionsE += "1";
   }
      executor4.set(libturbomodulejsijniZ, 1);

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
       let spinnere = 3;
    let becomeV = 0.0;
    let imagesk: Array<any> = [953, 487, 894];
    let settings5 = String.fromCharCode(103,95,53,50,95,115,117,98,112,97,114,116,0);
    let push0 = 1.0;
    let snewsN = 3;
    let chartX: Map<any, any> = new Map([[String.fromCharCode(111,95,52,95,101,115,116,97,98,108,105,115,104,0),String.fromCharCode(112,117,116,98,105,116,98,117,102,102,101,114,95,105,95,57,53,0)], [String.fromCharCode(102,95,55,55,95,105,100,99,116,114,111,119,0),String.fromCharCode(119,105,110,100,105,110,103,95,102,95,55,56,0)], [String.fromCharCode(110,102,116,95,116,95,54,48,0),String.fromCharCode(101,95,52,49,95,99,104,97,114,97,99,116,101,114,105,115,116,105,99,115,0)]]);
    let pauseL = String.fromCharCode(117,98,108,105,99,95,106,95,54,49,0);
      chartX = new Map([[`${snewsN}`, parseInt(`${push0}`) << (Math.min(3, Math.abs(3)))]]);
       let libimagepipeliner: Map<any, any> = new Map([[String.fromCharCode(112,95,50,51,95,121,105,101,108,100,0),true ], [String.fromCharCode(109,102,113,101,95,111,95,50,51,0),true ], [String.fromCharCode(106,95,51,52,95,108,97,121,115,0),false ]]);
       let fullscreenmin0 = 5.0;
       let footballfieldT = 1;
         fullscreenmin0 -= footballfieldT ^ libimagepipeliner.size;
      let values8 = 6047354 >= footballfieldT;
      do {
         footballfieldT >>= Math.min(4, Math.abs(1 ^ libimagepipeliner.size));
         if (values8) {
            break;
         }
      } while ((!Array.from(libimagepipeliner.values()).includes(footballfieldT)) && values8);
         libimagepipeliner = new Map([[`${fullscreenmin0}`, parseInt(`${fullscreenmin0}`) / 2]]);
         libimagepipeliner = new Map([[`${libimagepipeliner.size}`, 1]]);
          let membershipi: Map<any, any> = new Map([[String.fromCharCode(102,95,49,56,95,118,97,105,108,97,98,105,108,105,116,121,0),437], [String.fromCharCode(110,112,114,111,98,101,95,53,95,56,48,0),673]]);
          let smallD = 5.0;
          let filled9: Array<any> = [String.fromCharCode(115,101,101,107,95,119,95,50,48,0), String.fromCharCode(97,114,114,97,121,115,105,122,101,95,115,95,54,55,0), String.fromCharCode(120,95,57,57,95,111,102,102,115,99,114,101,101,110,0)];
         fullscreenmin0 *= 2 >> (Math.min(2, Math.abs(membershipi.size)));
         membershipi.set(`${smallD}`, parseInt(`${smallD}`));
         filled9.push(filled9.length * 2);
          let iconbackwhitej = String.fromCharCode(115,121,110,99,112,111,105,110,116,95,113,95,49,48,48,0);
          let filew = String.fromCharCode(112,114,105,109,97,114,121,95,98,95,54,52,0);
          let predictionarrowB: Array<any> = [16, 304, 363];
         libimagepipeliner = new Map([[`${fullscreenmin0}`, parseInt(`${fullscreenmin0}`)]]);
         iconbackwhitej = `${predictionarrowB.length % (Math.max(2, 10))}`;
         filew = `${predictionarrowB.length ^ 2}`;
      for (let x = 0; x < 2; x++) {
         fullscreenmin0 *= parseInt(`${fullscreenmin0}`) & 2;
      }
      let whitevideolivey = 5490405 >= footballfieldT;
      do {
         footballfieldT /= Math.max(3, 3);
         if (whitevideolivey) {
            break;
         }
      } while (whitevideolivey && ((2 + libimagepipeliner.size) < 3 || (footballfieldT + libimagepipeliner.size) < 2));
      while (2 < footballfieldT) {
         fullscreenmin0 += parseInt(`${fullscreenmin0}`) | footballfieldT;
         break;
      }
      push0 /= Math.max(1, pauseL.length);
   for (let j = 0; j < 2; j++) {
       let videovari = true;
       let projects = true;
       let guide_ = String.fromCharCode(106,95,53,56,95,102,111,114,98,105,100,100,101,110,0);
       let holderN = 2;
       let eactJ = String.fromCharCode(114,95,51,54,95,110,101,105,103,104,98,111,114,105,110,103,0);
         eactJ += `${guide_.length}`;
       let libfbC = 2.0;
       let customz = 0.0;
          let reactnativeultimatelistviewy = String.fromCharCode(113,95,57,57,95,102,108,97,116,110,101,115,115,0);
         eactJ += `${guide_.length - 1}`;
         reactnativeultimatelistviewy = `${reactnativeultimatelistviewy.length}`;
         guide_ = `${1 >> (Math.min(4, eactJ.length))}`;
          let styleF: Array<any> = [String.fromCharCode(119,105,110,100,105,110,103,95,100,95,53,56,0), String.fromCharCode(108,95,51,48,95,115,108,105,112,112,97,103,101,0)];
         libfbC -= parseFloat(`${2 - guide_.length}`);
         styleF = [styleF.length >> (Math.min(Math.abs(2), 1))];
      while ((customz + 1.81) > 2.77 || customz > 1.81) {
         customz *= parseFloat(`${parseInt(`${libfbC}`) % (Math.max(parseInt(`${customz}`), 6))}`);
         break;
      }
      if (projects) {
         projects = eactJ.length >= 88 || !projects;
      }
      let whistlea = eactJ == String.fromCharCode(56,120,110,118,118,99,101,48,53,106,0);
      do {
          let iconpipexpande = 4;
          let homeiconN = String.fromCharCode(119,95,51,57,95,110,117,108,108,112,97,99,107,101,116,0);
          let sliderd = 0;
         eactJ = `${eactJ.length}`;
         iconpipexpande /= Math.max(4, 1);
         homeiconN = `${iconpipexpande / (Math.max(homeiconN.length, 2))}`;
         sliderd /= Math.max(2 << (Math.min(2, Math.abs(iconpipexpande))), 1);
         if (whistlea) {
            break;
         }
      } while (whistlea && (!eactJ.startsWith(`${videovari}`)));
      for (let c = 0; c < 2; c++) {
         customz /= Math.max(parseFloat(`${eactJ.length + parseInt(`${customz}`)}`), 3);
      }
      if (!videovari) {
          let actionC = 0.0;
          let themeX: Array<any> = [String.fromCharCode(101,120,105,102,95,107,95,50,52,0), String.fromCharCode(117,95,51,95,114,97,115,116,101,114,0)];
          let fastm = 0.0;
          let values8O: Array<any> = [567, 56];
         videovari = customz >= 78.90;
         actionC -= parseFloat(`${parseInt(`${actionC}`) >> (Math.min(themeX.length, 1))}`);
         themeX.push(values8O.length % 3);
         fastm *= values8O.length - 2;
      }
      if (!guide_.includes(`${projects}`)) {
         guide_ += `${2 << (Math.min(Math.abs(parseInt(`${libfbC}`)), 2))}`;
      }
      let logouserQ = customz >= 7288194.0;
      do {
          let scoreb = String.fromCharCode(97,116,111,109,115,95,109,95,50,0);
          let placeholderW = 4.0;
          let giflivestreamingt = true;
          let minivodI = 2.0;
          let iconcalendarW = String.fromCharCode(108,105,115,116,101,110,105,110,103,95,112,95,53,0);
         customz /= Math.max(parseFloat(`${parseInt(`${libfbC}`)}`), 3);
         scoreb = `${(scoreb == String.fromCharCode(109,0) ? scoreb.length : parseInt(`${placeholderW}`))}`;
         placeholderW *= parseInt(`${minivodI}`);
         giflivestreamingt = scoreb == String.fromCharCode(49,0);
         minivodI += parseFloat(`${iconcalendarW.length}`);
         iconcalendarW = `${((giflivestreamingt ? 2 : 5) << (Math.min(Math.abs(parseInt(`${placeholderW}`)), 5)))}`;
         if (logouserQ) {
            break;
         }
      } while (((customz + 3.80) == 5.81 || 5 == (parseInt(`${customz}`) + eactJ.length)) && logouserQ);
          let taiwanB: Array<any> = [125, 199, 53];
          let main_nc = String.fromCharCode(120,95,53,56,95,113,116,112,97,108,101,116,116,101,0);
         eactJ = `${guide_.length}`;
         taiwanB.push(main_nc.length + taiwanB.length);
         main_nc += "1";
         projects = guide_.startsWith(`${videovari}`);
      while (2 == holderN) {
         holderN %= Math.max(2, 3 * parseInt(`${libfbC}`));
         break;
      }
      pauseL += `${(String.fromCharCode(83,0) == guide_ ? guide_.length : (videovari ? 1 : 2))}`;
   }
   while (chartX.get(`${becomeV}`) != null) {
      chartX.set(`${push0}`, snewsN & parseInt(`${push0}`));
      break;
   }
   for (let n = 0; n < 2; n++) {
       let bottomN = 4.0;
       let libmapbufferjniP = 0.0;
       let dacccfaabfbcbadeebddcabacdffdbr = String.fromCharCode(114,116,99,95,56,95,53,52,0);
       let libcxxcomponentsm = String.fromCharCode(111,95,52,52,95,97,118,115,115,0);
      for (let q = 0; q < 1; q++) {
          let runtimes = 4.0;
          let wifirouterp: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,115,116,114,97,116,105,111,110,95,117,95,49,53,0),379], [String.fromCharCode(116,100,115,99,95,52,95,54,56,0),186]]);
          let livenodatabgimg0: Map<any, any> = new Map([[String.fromCharCode(108,95,53,49,95,102,114,105,101,110,100,108,121,0),27], [String.fromCharCode(102,95,50,50,95,114,101,115,105,100,117,97,108,0),69]]);
          let subink: Array<any> = [54, 965, 532];
          let project6: Map<any, any> = new Map([[String.fromCharCode(109,97,108,101,95,53,95,56,50,0),479], [String.fromCharCode(119,95,52,50,95,114,101,97,115,115,111,99,105,97,116,101,0),559]]);
         bottomN -= parseFloat(`${3 / (Math.max(9, wifirouterp.size))}`);
         runtimes /= Math.max(5, parseFloat(`${livenodatabgimg0.size}`));
         wifirouterp = new Map([[`${project6.size}`, project6.size ^ 1]]);
         livenodatabgimg0.set(`${runtimes}`, 3);
         subink = [livenodatabgimg0.size];
      }
      let basketballdetailsbg8 = dacccfaabfbcbadeebddcabacdffdbr.length <= 9200008;
      do {
          let penaltyshootnogoaln = String.fromCharCode(117,95,52,49,95,114,111,117,110,100,100,115,0);
          let build4 = false;
          let with_ad = 5;
         dacccfaabfbcbadeebddcabacdffdbr = `${((build4 ? 2 : 4) + penaltyshootnogoaln.length)}`;
         penaltyshootnogoaln += `${with_ad << (Math.min(Math.abs(3), 3))}`;
         build4 = with_ad <= 65 || with_ad <= 65;
         if (basketballdetailsbg8) {
            break;
         }
      } while (basketballdetailsbg8 && (1.23 >= (libmapbufferjniP + parseFloat(`${dacccfaabfbcbadeebddcabacdffdbr.length}`))));
          let iconlogoutu: Array<any> = [693, 493, 623];
          let redgoalS = String.fromCharCode(97,118,112,105,99,116,117,114,101,95,55,95,57,54,0);
         libcxxcomponentsm += `${redgoalS.length}`;
         iconlogoutu.push(iconlogoutu.length - iconlogoutu.length);
         redgoalS += "2";
      while (3 >= dacccfaabfbcbadeebddcabacdffdbr.length) {
         dacccfaabfbcbadeebddcabacdffdbr = `${parseInt(`${libmapbufferjniP}`)}`;
         break;
      }
      if ((bottomN + parseFloat(`${dacccfaabfbcbadeebddcabacdffdbr.length}`)) >= 4.96 && 2 >= (3 << (Math.min(4, dacccfaabfbcbadeebddcabacdffdbr.length)))) {
         dacccfaabfbcbadeebddcabacdffdbr = `${1 % (Math.max(10, dacccfaabfbcbadeebddcabacdffdbr.length))}`;
      }
         libmapbufferjniP *= (parseFloat(`${dacccfaabfbcbadeebddcabacdffdbr == String.fromCharCode(108,0) ? parseInt(`${libmapbufferjniP}`) : dacccfaabfbcbadeebddcabacdffdbr.length}`));
          let telemetryM = String.fromCharCode(115,95,53,95,118,109,97,102,0);
          let mountingz = String.fromCharCode(115,117,98,115,101,115,115,105,111,110,95,51,95,48,0);
         libcxxcomponentsm += `${parseInt(`${libmapbufferjniP}`) / (Math.max(telemetryM.length, 5))}`;
         telemetryM = `${mountingz.length - mountingz.length}`;
      let eyeclose8 = 9026604.0 <= libmapbufferjniP;
      do {
          let bodanV = String.fromCharCode(122,95,50,95,101,110,118,105,114,111,110,109,101,110,116,0);
          let middlel = String.fromCharCode(109,112,101,103,97,117,100,105,111,100,115,112,95,112,95,49,54,0);
          let middlebrightness2 = 0.0;
          let helperN = String.fromCharCode(116,101,120,105,112,111,100,95,110,95,56,56,0);
          let whistle7 = String.fromCharCode(115,95,51,95,115,112,108,105,116,115,0);
         libmapbufferjniP += (parseFloat(`${String.fromCharCode(70,0) == dacccfaabfbcbadeebddcabacdffdbr ? dacccfaabfbcbadeebddcabacdffdbr.length : parseInt(`${libmapbufferjniP}`)}`));
         bodanV += `${parseInt(`${middlebrightness2}`) & bodanV.length}`;
         middlel += `${(helperN == String.fromCharCode(121,0) ? helperN.length : parseInt(`${middlebrightness2}`))}`;
         whistle7 += "2";
         if (eyeclose8) {
            break;
         }
      } while (((parseInt(`${libmapbufferjniP}`) + libcxxcomponentsm.length) <= 3 || 2 <= (libcxxcomponentsm.length & 3)) && eyeclose8);
       let penaltygoalR = 1;
      if (dacccfaabfbcbadeebddcabacdffdbr.includes(`${libmapbufferjniP}`)) {
          let iconscheduleJ: Array<any> = [344, 932];
         dacccfaabfbcbadeebddcabacdffdbr += `${parseInt(`${bottomN}`) + 3}`;
         iconscheduleJ.push(iconscheduleJ.length);
      }
         libmapbufferjniP -= parseFloat(`${penaltygoalR}`);
         libcxxcomponentsm = `${(dacccfaabfbcbadeebddcabacdffdbr == String.fromCharCode(79,0) ? dacccfaabfbcbadeebddcabacdffdbr.length : parseInt(`${bottomN}`))}`;
      push0 -= spinnere;
   }
       let rankJ = 2.0;
         rankJ /= Math.max(parseInt(`${rankJ}`) + 3, 2);
      for (let u = 0; u < 1; u++) {
         rankJ *= parseInt(`${rankJ}`);
      }
      while (1.45 > rankJ) {
         rankJ /= Math.max(2, 2);
         break;
      }
      push0 -= 2 % (Math.max(2, spinnere));
   while (3 >= (imagesk.length / 4)) {
       let telegramB = 3.0;
          let upgradeg = String.fromCharCode(103,114,97,110,117,108,101,112,111,115,95,111,95,53,50,0);
          let cornershoots = 5;
          let middleQ = 3.0;
         telegramB += parseFloat(`${3 & cornershoots}`);
         upgradeg = `${3 | upgradeg.length}`;
         cornershoots /= Math.max(2 - parseInt(`${middleQ}`), 5);
         middleQ /= Math.max(upgradeg.length & parseInt(`${middleQ}`), 1);
       let libavfilterA = 2.0;
      let commentL = 8399829.0 >= libavfilterA;
      do {
         libavfilterA /= Math.max(4, parseFloat(`${parseInt(`${telegramB}`) - 3}`));
         if (commentL) {
            break;
         }
      } while ((2.9 > (telegramB * 4)) && commentL);
      imagesk = [3];
      break;
   }
      chartX = new Map([[`${snewsN}`, snewsN / (Math.max(1, 1))]]);
   if ((5.93 * push0) > 4.9 || 2.62 > (push0 * 5.93)) {
      imagesk = [parseInt(`${becomeV}`) << (Math.min(pauseL.length, 4))];
   }
       let iconqqE = String.fromCharCode(109,117,108,116,105,108,105,110,101,95,118,95,49,51,0);
       let applicationI = 5.0;
         applicationI -= 1;
       let readp = 0.0;
         readp /= Math.max(parseFloat(`${1 / (Math.max(8, parseInt(`${applicationI}`)))}`), 2);
       let profileinactiveT = true;
      while (4.75 < (applicationI - 2.100)) {
         applicationI += ((profileinactiveT ? 2 : 4) | parseInt(`${applicationI}`));
         break;
      }
      let zoomJ = iconqqE == String.fromCharCode(117,56,111,109,48,0);
      do {
          let zoomi = 4.0;
          let androidI = String.fromCharCode(117,115,101,100,95,98,95,57,52,0);
         iconqqE = `${(parseInt(`${zoomi}`) + (profileinactiveT ? 4 : 5))}`;
         zoomi /= Math.max(1, parseFloat(`${androidI.length}`));
         androidI = `${androidI.length}`;
         if (zoomJ) {
            break;
         }
      } while (zoomJ && (1 >= iconqqE.length || !profileinactiveT));
      settings5 += `${pauseL.length << (Math.min(4, Math.abs(spinnere)))}`;
   let rocketP = spinnere >= 8142837;
   do {
      spinnere %= Math.max(2, pauseL.length);
      if (rocketP) {
         break;
      }
   } while ((settings5.includes(`${spinnere}`)) && rocketP);
       let chinaF = String.fromCharCode(97,112,112,101,97,114,95,52,95,57,50,0);
       let bangD = 4;
      let imagenomoredatai = bangD <= 5572100;
      do {
         bangD >>= Math.min(Math.abs((chinaF == String.fromCharCode(111,0) ? bangD : chinaF.length)), 5);
         if (imagenomoredatai) {
            break;
         }
      } while (((bangD / (Math.max(chinaF.length, 5))) < 1 || (bangD / (Math.max(1, chinaF.length))) < 1) && imagenomoredatai);
         chinaF = `${1 ^ chinaF.length}`;
      for (let l = 0; l < 2; l++) {
          let configureN: Array<any> = [71, 906];
          let membere = 4;
          let loginsuccesse = 5;
          let popupu = String.fromCharCode(116,105,108,101,100,95,116,95,52,56,0);
          let defaultpredictionprofilep = String.fromCharCode(101,122,105,101,114,95,99,95,49,49,0);
         bangD &= popupu.length + membere;
         configureN = [1 - configureN.length];
         membere |= 2;
         loginsuccesse %= Math.max(2, 3 + loginsuccesse);
         popupu += `${loginsuccesse << (Math.min(Math.abs(2), 1))}`;
         defaultpredictionprofilep = "3";
      }
         chinaF += `${(chinaF == String.fromCharCode(69,0) ? bangD : chinaF.length)}`;
         bangD += 2 ^ chinaF.length;
         chinaF = `${chinaF.length}`;
      snewsN *= (settings5 == String.fromCharCode(121,0) ? spinnere : settings5.length);
   for (let p = 0; p < 1; p++) {
      imagesk = [1];
   }
      becomeV -= parseFloat(`${settings5.length - pauseL.length}`);
   for (let s = 0; s < 3; s++) {
      settings5 += `${1 + snewsN}`;
   }
       let whistlen: Array<any> = [777, 241, 615];
       let libfollyo: Map<any, any> = new Map([[String.fromCharCode(114,95,49,95,104,114,101,97,100,0),776], [String.fromCharCode(114,116,112,101,110,99,95,104,95,54,57,0),343]]);
          let whitesmalltickB: Array<any> = [String.fromCharCode(119,119,119,95,97,95,55,54,0), String.fromCharCode(115,116,97,98,105,108,105,122,101,95,54,95,55,51,0), String.fromCharCode(99,111,118,101,114,95,122,95,52,51,0)];
          let downloadedw: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,97,116,99,104,105,110,103,95,53,95,54,52,0),166], [String.fromCharCode(122,95,50,51,95,121,118,99,111,110,102,105,103,0),776], [String.fromCharCode(115,117,98,109,118,95,108,95,49,48,0),686]]);
          let statisticso: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,105,110,103,95,117,95,51,48,0),832], [String.fromCharCode(116,101,97,114,95,111,95,57,56,0),263]]);
         libfollyo.set(`${libfollyo.size}`, libfollyo.size | 3);
         whitesmalltickB = [3];
         downloadedw.set(`${downloadedw.size}`, downloadedw.size);
         statisticso = new Map([[`${downloadedw.size}`, downloadedw.size]]);
      let placeholder7 = whistlen.length <= 9210864;
      do {
         whistlen = [libfollyo.size & 3];
         if (placeholder7) {
            break;
         }
      } while (placeholder7 && (1 >= (whistlen.length - 3)));
      let valuesX = 9055327 <= libfollyo.size;
      do {
          let cancelQ = String.fromCharCode(120,98,105,110,95,99,95,57,53,0);
          let eventsplashx = true;
          let minivodN = String.fromCharCode(112,114,111,100,117,99,101,114,95,113,95,50,53,0);
         libfollyo = new Map([[`${whistlen.length}`, (minivodN == String.fromCharCode(83,0) ? whistlen.length : minivodN.length)]]);
         cancelQ += "2";
         eventsplashx = !cancelQ.startsWith(`${eventsplashx}`);
         if (valuesX) {
            break;
         }
      } while ((5 == (5 & whistlen.length)) && valuesX);
         whistlen.push(3);
      let iconmoreQ = libfollyo.size <= 6025096;
      do {
         libfollyo = new Map([[`${libfollyo.size}`, 3]]);
         if (iconmoreQ) {
            break;
         }
      } while ((3 > (libfollyo.size & 4) && (4 & whistlen.length) > 2) && iconmoreQ);
      if (whistlen.length == libfollyo.size) {
         whistlen.push(whistlen.length);
      }
      chartX = new Map([[`${chartX.size}`, chartX.size]]);
   while ((chartX.size + parseInt(`${becomeV}`)) == 5) {
       let topicS: Map<any, any> = new Map([[String.fromCharCode(98,95,52,50,95,118,97,114,105,97,116,105,111,110,0),true ], [String.fromCharCode(115,117,98,100,105,118,105,115,105,111,110,95,100,95,56,54,0),false ], [String.fromCharCode(98,121,116,101,108,101,110,95,54,95,53,49,0),false ]]);
       let predictionlossN = String.fromCharCode(114,95,54,48,95,103,101,110,99,102,103,115,0);
       let appsk: Array<any> = [331, 751, 311];
       let goallogoQ = String.fromCharCode(98,95,49,49,95,97,100,106,117,115,116,109,101,110,116,0);
      let successx = goallogoQ.length <= 5990031;
      do {
         goallogoQ = `${predictionlossN.length}`;
         if (successx) {
            break;
         }
      } while ((goallogoQ.length > topicS.size) && successx);
      let rncorec = 6940721 <= appsk.length;
      do {
         appsk.push(appsk.length);
         if (rncorec) {
            break;
         }
      } while (rncorec && (4 == goallogoQ.length));
          let short__87 = String.fromCharCode(100,101,102,108,105,99,107,101,114,95,111,95,54,49,0);
          let connectiont = String.fromCharCode(101,95,50,54,95,103,101,116,120,118,97,114,0);
          let emptyt = String.fromCharCode(116,97,107,101,111,118,101,114,95,100,95,53,57,0);
         appsk.push(goallogoQ.length / (Math.max(1, 3)));
         short__87 += `${connectiont.length >> (Math.min(short__87.length, 2))}`;
         connectiont += `${short__87.length & 1}`;
         emptyt += `${emptyt.length ^ connectiont.length}`;
         goallogoQ += `${(String.fromCharCode(53,0) == predictionlossN ? predictionlossN.length : goallogoQ.length)}`;
         goallogoQ += `${goallogoQ.length - 2}`;
       let productr = 1.0;
         predictionlossN += `${topicS.size % 3}`;
         productr -= (predictionlossN == String.fromCharCode(97,0) ? predictionlossN.length : parseInt(`${productr}`));
          let libjsijniprofilerS: Map<any, any> = new Map([[String.fromCharCode(104,95,54,52,95,112,114,111,98,0),false ], [String.fromCharCode(102,114,97,109,101,119,111,114,107,95,103,95,48,0),false ]]);
          let register_8aY = String.fromCharCode(100,95,53,51,95,99,101,105,108,0);
         topicS.set(`${appsk.length}`, libjsijniprofilerS.size);
         libjsijniprofilerS = new Map([[register_8aY, (register_8aY == String.fromCharCode(84,0) ? register_8aY.length : register_8aY.length)]]);
         topicS.set(predictionlossN, 1);
      while (goallogoQ.length < appsk.length) {
          let iconclose2: Map<any, any> = new Map([[String.fromCharCode(115,111,108,105,115,116,101,110,95,53,95,50,49,0),true ], [String.fromCharCode(109,95,56,52,95,98,105,103,0),false ], [String.fromCharCode(114,97,108,102,100,97,116,97,95,110,95,54,0),true ]]);
          let componentregistry0: Array<any> = [457, 553];
          let eventr = String.fromCharCode(110,95,56,54,95,98,105,116,119,114,105,116,101,114,0);
          let libjsiC = String.fromCharCode(97,99,99,95,98,95,53,55,0);
         goallogoQ += `${goallogoQ.length << (Math.min(Math.abs(3), 3))}`;
         iconclose2 = new Map([[`${iconclose2.size}`, componentregistry0.length]]);
         componentregistry0.push(1);
         eventr = `${eventr.length ^ 1}`;
         libjsiC += `${eventr.length}`;
         break;
      }
         predictionlossN += `${1 + predictionlossN.length}`;
      chartX.set(`${push0}`, parseInt(`${push0}`) ^ appsk.length);
      break;
   }
      spinnere >>= Math.min(2, Math.abs(2 + pauseL.length));
      spinnere += parseInt(`${becomeV}`) >> (Math.min(Math.abs(2), 2));

        console.log("Error!", err, time);
      }
    };

    const onSeekGesture = (time: number) => {
      if (currentTime < time) {
        setSeekDirection("uimanagerNewsshare");
      } else {
        setSeekDirection("userDebugMiddleware");
      }
      onSeek(time);
    };

    const onVideoProgessing = (data: any) => {
      setCurrentTime(data.currentTime);

      try {
        currentTimeRef.current = data.currentTime;
      } catch (err) {
       let time_y2B = String.fromCharCode(105,95,50,52,95,100,116,111,114,0);
    let catalogs = String.fromCharCode(106,95,56,51,95,112,114,101,98,117,102,0);
    let referrery = true;
    let searchc = String.fromCharCode(117,95,51,52,95,112,97,114,116,121,0);
    let humidityz = true;
    let watchnowbgH = String.fromCharCode(98,97,100,114,101,113,95,56,95,52,52,0);
    let tcopy_1j = 2.0;
    let otherE = 4.0;
    let gdtadvI = 0;
    let philippinesk = String.fromCharCode(104,108,115,112,108,97,121,108,105,115,116,95,122,95,57,55,0);
    let statsnomoredata_ = 1;
      humidityz = String.fromCharCode(114,0) == time_y2B && 45 < gdtadvI;
       let icondefaultthumbnailf = String.fromCharCode(98,114,111,107,101,110,95,102,95,52,55,0);
       let iconnewchatL = 1.0;
          let constantsm: Array<any> = [33, 307, 868];
         iconnewchatL -= 1;
         constantsm = [constantsm.length / (Math.max(4, constantsm.length))];
         icondefaultthumbnailf = `${icondefaultthumbnailf.length}`;
          let librrcE = true;
          let weatherH: Array<any> = [533, 937];
         iconnewchatL += parseInt(`${iconnewchatL}`) - icondefaultthumbnailf.length;
         librrcE = !librrcE;
         weatherH = [weatherH.length >> (Math.min(Math.abs(2), 5))];
         iconnewchatL += 3;
      let greyQ = 9305008 <= icondefaultthumbnailf.length;
      do {
         icondefaultthumbnailf = `${icondefaultthumbnailf.length}`;
         if (greyQ) {
            break;
         }
      } while (((icondefaultthumbnailf.length % (Math.max(1, 2))) > 2 || (icondefaultthumbnailf.length - parseInt(`${iconnewchatL}`)) > 1) && greyQ);
         iconnewchatL += (icondefaultthumbnailf == String.fromCharCode(101,0) ? icondefaultthumbnailf.length : parseInt(`${iconnewchatL}`));
      time_y2B += `${icondefaultthumbnailf.length | 3}`;
   while (searchc.length == 2) {
      gdtadvI >>= Math.min(4, Math.abs(1 | watchnowbgH.length));
      break;
   }
      otherE /= Math.max(parseFloat(`${gdtadvI & 3}`), 4);
      philippinesk += "1";
   for (let u = 0; u < 2; u++) {
       let condensedI = String.fromCharCode(116,114,117,101,104,100,95,98,95,56,57,0);
          let subsY = true;
         condensedI += `${((subsY ? 5 : 4) >> (Math.min(condensedI.length, 4)))}`;
         condensedI += `${(condensedI == String.fromCharCode(117,0) ? condensedI.length : condensedI.length)}`;
       let libfabricjnir = String.fromCharCode(107,95,49,54,95,100,105,115,97,98,108,105,110,103,0);
       let splashy = String.fromCharCode(116,95,49,53,95,99,99,105,116,116,0);
      gdtadvI ^= (watchnowbgH == String.fromCharCode(57,0) ? parseInt(`${tcopy_1j}`) : watchnowbgH.length);
   }
      otherE /= Math.max(3, (parseFloat(`${String.fromCharCode(97,0) == watchnowbgH ? watchnowbgH.length : (humidityz ? 3 : 5)}`)));
       let iconclosewhitebgu = 4;
       let logouserg = String.fromCharCode(102,105,112,115,95,55,95,51,49,0);
      let lessN = logouserg.length <= 8833085;
      do {
         logouserg = `${logouserg.length >> (Math.min(2, Math.abs(iconclosewhitebgu)))}`;
         if (lessN) {
            break;
         }
      } while ((iconclosewhitebgu == logouserg.length) && lessN);
         logouserg = `${iconclosewhitebgu | logouserg.length}`;
      for (let n = 0; n < 1; n++) {
         logouserg = `${iconclosewhitebgu}`;
      }
      if (logouserg.length == iconclosewhitebgu) {
          let default_vtq = true;
          let vietnamd = String.fromCharCode(116,112,105,100,95,56,95,52,57,0);
         logouserg = `${iconclosewhitebgu + logouserg.length}`;
         default_vtq = vietnamd.length >= 58;
         vietnamd = `${vietnamd.length}`;
      }
         iconclosewhitebgu |= 2;
      while (4 <= (3 >> (Math.min(5, logouserg.length)))) {
         iconclosewhitebgu ^= (logouserg == String.fromCharCode(80,0) ? logouserg.length : iconclosewhitebgu);
         break;
      }
      gdtadvI >>= Math.min(3, Math.abs(parseInt(`${tcopy_1j}`)));
      philippinesk = `${(time_y2B == String.fromCharCode(82,0) ? catalogs.length : time_y2B.length)}`;
   let gmaild = catalogs == String.fromCharCode(54,54,105,52,0);
   do {
       let iconwatchnow9: Map<any, any> = new Map([[String.fromCharCode(118,95,53,95,112,114,101,116,116,121,0),String.fromCharCode(109,95,48,95,99,97,115,99,97,100,101,100,0)], [String.fromCharCode(117,95,56,52,95,97,116,116,97,99,104,101,100,0),String.fromCharCode(119,95,53,48,95,114,103,116,99,115,0)], [String.fromCharCode(108,111,97,100,105,110,103,95,110,95,57,48,0),String.fromCharCode(112,114,111,118,105,115,105,111,110,95,99,95,50,57,0)]]);
       let hooksY = 1;
       let modulej = String.fromCharCode(110,95,51,55,0);
       let greytick0 = 0;
       let modelt = String.fromCharCode(97,95,49,56,95,109,111,118,101,110,99,0);
       let otherL = String.fromCharCode(112,95,50,53,95,115,116,121,108,101,0);
      let privacyX = greytick0 <= 6639749;
      do {
          let singapore_ = 4.0;
          let awayM: Array<any> = [489, 559];
          let sharemodalK = 3.0;
         greytick0 += 2 & greytick0;
         singapore_ /= Math.max(awayM.length % (Math.max(3, 3)), 2);
         awayM.push(awayM.length % 2);
         sharemodalK /= Math.max(3, 2);
         if (privacyX) {
            break;
         }
      } while (((greytick0 / (Math.max(2, 1))) > 1 || 5 > (greytick0 / (Math.max(2, 10)))) && privacyX);
         modulej = `${iconwatchnow9.size - otherL.length}`;
      if (otherL.length <= 4) {
         modelt = `${3 << (Math.min(2, Math.abs(iconwatchnow9.size)))}`;
      }
         iconwatchnow9.set(otherL, 3 - modelt.length);
      let stepZ = greytick0 >= 9033154;
      do {
         greytick0 &= 1;
         if (stepZ) {
            break;
         }
      } while (stepZ && (otherL.endsWith(`${greytick0}`)));
      if (otherL.length > 5 || modelt == String.fromCharCode(67,0)) {
          let weiboL = false;
          let libfabricjniq = String.fromCharCode(120,95,55,51,95,115,116,99,98,0);
         otherL += `${greytick0}`;
         weiboL = !weiboL;
         libfabricjniq += `${libfabricjniq.length}`;
      }
         iconwatchnow9 = new Map([[`${hooksY}`, hooksY]]);
      if (5 < (4 + modelt.length) || 1 < (iconwatchnow9.size + 4)) {
         modelt += `${(modelt == String.fromCharCode(81,0) ? modulej.length : modelt.length)}`;
      }
          let largebrightnessv = String.fromCharCode(102,95,56,56,95,115,109,111,111,116,104,101,110,0);
          let modityT = String.fromCharCode(99,95,50,95,109,115,105,122,101,0);
          let turndownI = 1;
         greytick0 ^= otherL.length ^ modityT.length;
         largebrightnessv += `${largebrightnessv.length << (Math.min(Math.abs(1), 5))}`;
         modityT = `${largebrightnessv.length - turndownI}`;
         turndownI -= turndownI ^ 1;
         iconwatchnow9.set(otherL, (String.fromCharCode(83,0) == otherL ? otherL.length : modulej.length));
         hooksY &= greytick0 << (Math.min(Math.abs(2), 2));
         modelt = "2";
      let iconarrowrightorangeo = modulej == String.fromCharCode(121,110,104,118,52,51,104,55,95,107,0);
      do {
          let langkeys: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,97,108,108,95,101,95,50,49,0),419], [String.fromCharCode(114,101,103,105,115,116,114,121,95,99,95,52,52,0),434]]);
          let subtextn = 4.0;
          let libpangleflippedu = String.fromCharCode(114,97,115,116,101,114,105,122,101,115,95,113,95,54,51,0);
          let reddownarrowi = 3.0;
          let notificationfillemptyI = 2.0;
         modulej += `${1 - hooksY}`;
         langkeys = new Map([[`${langkeys.size}`, parseInt(`${notificationfillemptyI}`)]]);
         subtextn /= Math.max(parseFloat(`${parseInt(`${notificationfillemptyI}`)}`), 5);
         libpangleflippedu += `${parseInt(`${notificationfillemptyI}`) << (Math.min(Math.abs(2), 5))}`;
         reddownarrowi -= parseInt(`${notificationfillemptyI}`);
         if (iconarrowrightorangeo) {
            break;
         }
      } while (((1 * greytick0) >= 3 || 5 >= (greytick0 * 1)) && iconarrowrightorangeo);
      let membershipg = hooksY <= 8067822;
      do {
         hooksY %= Math.max(1, iconwatchnow9.size);
         if (membershipg) {
            break;
         }
      } while ((modelt.startsWith(`${hooksY}`)) && membershipg);
      catalogs += `${modulej.length}`;
      if (gmaild) {
         break;
      }
   } while ((watchnowbgH == String.fromCharCode(86,0)) && gmaild);
      philippinesk = `${parseInt(`${tcopy_1j}`) | watchnowbgH.length}`;
   if (2 > (gdtadvI * 4)) {
       let selectionC = 3.0;
      let libavdevicez = 6666945.0 <= selectionC;
      do {
         selectionC /= Math.max(parseInt(`${selectionC}`), 1);
         if (libavdevicez) {
            break;
         }
      } while (libavdevicez && (selectionC >= 1.87));
          let sendH = String.fromCharCode(120,95,51,95,98,117,116,116,101,114,102,108,121,0);
         selectionC /= Math.max(2, sendH.length);
      while (selectionC > 2.67) {
         selectionC += parseInt(`${selectionC}`) << (Math.min(5, Math.abs(1)));
         break;
      }
      gdtadvI *= philippinesk.length / (Math.max(4, watchnowbgH.length));
   }
   let material5 = catalogs.length >= 7406960;
   do {
      catalogs = `${watchnowbgH.length}`;
      if (material5) {
         break;
      }
   } while ((3 < catalogs.length) && material5);
      tcopy_1j /= Math.max((parseFloat(`${(humidityz ? 1 : 5) % (Math.max(2, time_y2B.length))}`)), 1);
       let backW = 5.0;
      for (let k = 0; k < 1; k++) {
         backW /= Math.max(3, parseFloat(`${1 / (Math.max(10, parseInt(`${backW}`)))}`));
      }
      let gdtadvv = backW <= 5062784.0;
      do {
         backW += parseFloat(`${parseInt(`${backW}`) % (Math.max(parseInt(`${backW}`), 10))}`);
         if (gdtadvv) {
            break;
         }
      } while (gdtadvv && (5.74 >= (backW - 2.87) && 2.87 >= (backW - backW)));
         backW -= parseFloat(`${parseInt(`${backW}`)}`);
      catalogs += `${parseInt(`${backW}`) ^ 1}`;
      tcopy_1j -= parseFloat(`${2}`);
       let statsnomoredataX = 2.0;
       let next2 = 5.0;
       let downloadedN = false;
          let codeF = String.fromCharCode(120,95,51,48,95,97,108,116,101,114,0);
         next2 /= Math.max(((downloadedN ? 3 : 3) | parseInt(`${next2}`)), 1);
         codeF = `${codeF.length + 2}`;
         next2 /= Math.max(3 - parseInt(`${next2}`), 2);
          let iconwatchm = true;
          let libfabricjnii = 4.0;
         next2 *= (parseInt(`${statsnomoredataX}`) & (iconwatchm ? 3 : 5));
         iconwatchm = libfabricjnii == 54.61;
         libfabricjnii *= parseInt(`${libfabricjnii}`) + parseInt(`${libfabricjnii}`);
      if (1.31 > statsnomoredataX) {
         next2 -= parseInt(`${next2}`) * 3;
      }
      while ((4.53 / (Math.max(3, statsnomoredataX))) >= 4.28 && statsnomoredataX >= 4.53) {
         statsnomoredataX /= Math.max(2, parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${next2}`)), 1))}`));
         break;
      }
          let livesharet = true;
          let final_g9N = false;
         next2 += parseInt(`${statsnomoredataX}`);
         livesharet = !final_g9N;
         final_g9N = livesharet;
         statsnomoredataX -= parseFloat(`${2}`);
      let castu = 9148776.0 <= next2;
      do {
         next2 *= parseInt(`${next2}`) ^ parseInt(`${statsnomoredataX}`);
         if (castu) {
            break;
         }
      } while ((next2 <= statsnomoredataX) && castu);
          let default_ch: Map<any, any> = new Map([[String.fromCharCode(110,95,57,49,95,115,117,98,104,101,97,100,101,114,0),true ], [String.fromCharCode(102,95,54,50,95,114,101,115,105,100,117,97,108,115,0),true ], [String.fromCharCode(117,95,51,49,95,118,101,99,0),false ]]);
         next2 += parseInt(`${statsnomoredataX}`) & parseInt(`${next2}`);
         default_ch = new Map([[`${default_ch.size}`, default_ch.size >> (Math.min(Math.abs(1), 1))]]);
      catalogs = `${(String.fromCharCode(85,0) == watchnowbgH ? gdtadvI : watchnowbgH.length)}`;
   for (let n = 0; n < 2; n++) {
      tcopy_1j /= Math.max(4, parseFloat(`${3 ^ gdtadvI}`));
   }
      referrery = 69.86 >= (tcopy_1j / (Math.max(2, otherE)));
      humidityz = !humidityz;
   for (let q = 0; q < 1; q++) {
       let reddownarrowj = String.fromCharCode(101,113,117,105,118,97,108,101,110,116,95,120,95,57,54,0);
       let staru = String.fromCharCode(98,111,111,107,95,57,95,56,57,0);
       let mathY = 1.0;
       let iconarrowrightwhitex = 4.0;
      while (reddownarrowj.length <= 3) {
         staru = `${(reddownarrowj == String.fromCharCode(76,0) ? parseInt(`${mathY}`) : reddownarrowj.length)}`;
         break;
      }
      for (let j = 0; j < 1; j++) {
         staru = `${2 & parseInt(`${mathY}`)}`;
      }
      while (reddownarrowj == String.fromCharCode(103,0)) {
         staru += `${parseInt(`${iconarrowrightwhitex}`) / (Math.max(3, reddownarrowj.length))}`;
         break;
      }
      let calendar8 = mathY >= 6998367.0;
      do {
          let filledN = String.fromCharCode(114,101,99,111,109,112,117,116,101,95,100,95,53,54,0);
          let whiteanimationlivez = 2.0;
          let change_ = 0;
          let albumZ: Array<any> = [String.fromCharCode(109,95,51,57,95,105,110,105,116,105,97,108,105,122,101,114,115,0), String.fromCharCode(110,95,51,56,95,99,104,107,108,105,115,116,0)];
         mathY += parseFloat(`${staru.length ^ 3}`);
         filledN = `${3 / (Math.max(4, albumZ.length))}`;
         whiteanimationlivez -= parseInt(`${whiteanimationlivez}`) + 1;
         change_ ^= albumZ.length & 3;
         if (calendar8) {
            break;
         }
      } while (calendar8 && (2 >= (staru.length % 1)));
         staru = `${reddownarrowj.length / 2}`;
       let regengL = 2.0;
       let utilsf = 3.0;
      while ((iconarrowrightwhitex + mathY) <= 3.21 || (3.21 + mathY) <= 2.84) {
         iconarrowrightwhitex *= parseFloat(`${parseInt(`${iconarrowrightwhitex}`) >> (Math.min(1, Math.abs(1)))}`);
         break;
      }
          let collection8 = 5.0;
          let trophyn = false;
         iconarrowrightwhitex -= parseFloat(`${2}`);
         collection8 /= Math.max(1 ^ parseInt(`${collection8}`), 3);
         trophyn = 14.36 == collection8 && trophyn;
         mathY /= Math.max(1, parseFloat(`${reddownarrowj.length % (Math.max(5, staru.length))}`));
          let selection1 = 3.0;
          let homeinactiveL = 1.0;
          let downH: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,105,98,115,95,50,95,52,53,0),243], [String.fromCharCode(112,114,101,118,105,101,119,115,95,105,95,51,0),482]]);
         staru = `${parseInt(`${selection1}`) ^ parseInt(`${regengL}`)}`;
         selection1 *= parseFloat(`${downH.size}`);
         homeinactiveL -= downH.size;
      while ((3.61 + mathY) > 1.69 && (regengL + mathY) > 3.61) {
         regengL += parseFloat(`${1}`);
         break;
      }
         regengL -= parseFloat(`${parseInt(`${regengL}`)}`);
      catalogs += `${parseInt(`${otherE}`)}`;
   }
   while (gdtadvI < 1) {
       let anythinkb = 2.0;
       let toponG = String.fromCharCode(109,115,109,112,101,103,95,97,95,50,49,0);
       let benefit9 = 3;
       let iconsharefriendsr: Map<any, any> = new Map([[String.fromCharCode(112,114,111,95,110,95,57,56,0),String.fromCharCode(114,95,52,54,95,109,101,97,115,117,114,101,115,0)], [String.fromCharCode(104,95,49,51,95,114,111,117,116,101,115,0),String.fromCharCode(113,95,52,57,95,100,105,97,108,111,103,0)], [String.fromCharCode(97,95,50,54,95,116,105,112,115,0),String.fromCharCode(110,95,50,57,95,101,110,113,117,101,117,101,0)]]);
         iconsharefriendsr.set(`${anythinkb}`, toponG.length + 3);
      if (3 < (4 >> (Math.min(4, Math.abs(iconsharefriendsr.size)))) || 1 < (4 >> (Math.min(1, toponG.length)))) {
         toponG = `${parseInt(`${anythinkb}`)}`;
      }
      let leaguedetailsbgE = benefit9 >= 9596708;
      do {
          let libmapbufferjnis = true;
          let yellowscoreballK = 5.0;
          let privacyQ = String.fromCharCode(109,95,51,53,95,121,117,118,109,112,101,103,0);
         benefit9 += iconsharefriendsr.size / (Math.max(privacyQ.length, 5));
         libmapbufferjnis = libmapbufferjnis && 89.23 == yellowscoreballK;
         yellowscoreballK += ((libmapbufferjnis ? 1 : 4) + parseInt(`${yellowscoreballK}`));
         privacyQ += `${((libmapbufferjnis ? 1 : 3) / (Math.max(4, parseInt(`${yellowscoreballK}`))))}`;
         if (leaguedetailsbgE) {
            break;
         }
      } while ((benefit9 == 4) && leaguedetailsbgE);
      for (let m = 0; m < 1; m++) {
         benefit9 <<= Math.min(5, Math.abs(iconsharefriendsr.size));
      }
      let iconrightoranged = 7386333 >= benefit9;
      do {
         benefit9 ^= 3;
         if (iconrightoranged) {
            break;
         }
      } while (((anythinkb + 4.31) > 2.31 || (benefit9 | 3) > 1) && iconrightoranged);
       let backwardj = true;
       let libffmpegkitS = false;
      while (benefit9 == 1) {
         libffmpegkitS = iconsharefriendsr.size <= 27 && anythinkb <= 34.14;
         break;
      }
         backwardj = 62.30 > anythinkb && toponG == String.fromCharCode(113,0);
       let downloader7 = false;
       let commonm = true;
          let static_o7 = 3;
         toponG += "2 * benefit9";
         static_o7 %= Math.max(1, 5);
      let libflipperN = libffmpegkitS ? !libffmpegkitS : libffmpegkitS;
      do {
         libffmpegkitS = commonm;
         if (libflipperN) {
            break;
         }
      } while ((commonm) && libflipperN);
         toponG += `${benefit9}`;
      gdtadvI ^= parseInt(`${tcopy_1j}`) | 3;
      break;
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
       let background_ = 5;
    let proxyd = String.fromCharCode(102,95,52,57,95,99,111,111,114,100,105,110,97,116,111,114,115,0);
    let flippery: Map<any, any> = new Map([[String.fromCharCode(104,95,54,56,95,115,116,109,116,0),String.fromCharCode(115,116,114,101,115,115,95,57,95,49,57,0)], [String.fromCharCode(99,111,110,116,101,120,116,112,114,111,102,105,108,101,108,101,118,101,108,95,110,95,49,56,0),String.fromCharCode(100,117,114,97,116,105,111,110,115,95,106,95,54,57,0)], [String.fromCharCode(115,104,111,114,116,116,101,114,109,95,52,95,57,52,0),String.fromCharCode(116,101,99,104,110,111,108,111,103,121,95,113,95,49,56,0)]]);
    let profileC = 3.0;
    let iconpointscoreR = 3;
    let predictionbanner_ = 2;
    let elementsA = String.fromCharCode(106,95,49,56,95,115,99,114,97,116,99,104,0);
    let sansJ = 4.0;
    let username6 = 4;
    let stro = String.fromCharCode(113,95,56,52,95,114,101,100,105,114,101,99,116,0);
    let gradlei = 1.0;
    let assistk = String.fromCharCode(107,95,57,49,95,99,117,114,114,101,110,116,108,121,0);
    let imagemanager_: Map<any, any> = new Map([[String.fromCharCode(121,95,53,49,95,114,101,97,110,97,108,121,122,101,0),245], [String.fromCharCode(115,95,52,48,95,115,117,112,101,114,103,114,111,117,112,0),42]]);
    let pagei = String.fromCharCode(113,100,109,99,95,119,95,56,53,0);
    let terms0 = String.fromCharCode(104,115,99,97,108,101,95,115,95,53,56,0);
   let icondefaultthumbnailp = 8442174 >= username6;
   do {
       let sportH = String.fromCharCode(112,95,56,95,99,111,114,100,0);
       let dinit_70 = 2;
       let distu = String.fromCharCode(117,110,113,117,97,110,116,95,104,95,50,53,0);
       let delegate_m88 = String.fromCharCode(119,95,50,53,95,97,117,116,104,111,114,115,0);
      let thailandg = String.fromCharCode(106,104,99,54,105,56,110,51,110,120,0) == distu;
      do {
         distu += `${delegate_m88.length}`;
         if (thailandg) {
            break;
         }
      } while (thailandg && (distu.length < delegate_m88.length));
      let iconclosewhiteO = String.fromCharCode(95,108,48,118,0) == delegate_m88;
      do {
         delegate_m88 += `${delegate_m88.length + 3}`;
         if (iconclosewhiteO) {
            break;
         }
      } while ((distu.length > delegate_m88.length) && iconclosewhiteO);
       let videojs2 = true;
      if ((distu.length | dinit_70) == 1 && (1 | dinit_70) == 2) {
         distu = `${delegate_m88.length}`;
      }
       let iconbell_: Map<any, any> = new Map([[String.fromCharCode(107,95,56,49,95,99,111,97,114,115,101,0),26], [String.fromCharCode(102,95,49,56,95,99,97,108,99,117,108,97,116,101,100,0),839]]);
       let editk: Map<any, any> = new Map([[String.fromCharCode(114,95,52,50,95,114,101,115,105,122,101,100,0),false ], [String.fromCharCode(97,95,52,52,95,116,114,97,99,105,110,103,0),false ], [String.fromCharCode(105,115,111,109,95,122,95,50,52,0),true ]]);
      for (let g = 0; g < 2; g++) {
         sportH = `${distu.length % 1}`;
      }
         distu += `${dinit_70 % (Math.max(sportH.length, 5))}`;
      let smallf = videojs2 ? !videojs2 : videojs2;
      do {
          let o_titleP = String.fromCharCode(100,97,116,97,108,105,115,116,95,117,95,56,55,0);
         videojs2 = iconbell_.size > editk.size;
         o_titleP = `${o_titleP.length}`;
         if (smallf) {
            break;
         }
      } while (smallf && (videojs2));
      let membera = dinit_70 <= 6550098;
      do {
         dinit_70 /= Math.max(1, distu.length ^ sportH.length);
         if (membera) {
            break;
         }
      } while (membera && ((3 ^ dinit_70) > 3));
      for (let g = 0; g < 1; g++) {
          let dycreatorT: Map<any, any> = new Map([[String.fromCharCode(103,95,55,55,95,99,111,110,116,101,120,116,0),String.fromCharCode(104,95,57,55,95,99,111,112,121,114,105,103,104,116,0)], [String.fromCharCode(115,117,109,109,95,110,95,54,0),String.fromCharCode(103,111,98,98,108,101,95,50,95,49,48,0)]]);
          let libavformatP = String.fromCharCode(105,95,53,55,95,116,114,105,97,108,0);
          let iconarrowrightorangeS = String.fromCharCode(97,95,52,48,95,112,108,117,114,97,108,105,122,97,116,105,111,110,0);
          let vignetted: Map<any, any> = new Map([[String.fromCharCode(112,95,51,49,95,97,99,100,115,112,0),139], [String.fromCharCode(122,95,49,50,95,115,117,98,109,118,0),909]]);
          let episodess: Array<any> = [825, 494];
         iconbell_.set(`${iconarrowrightorangeS}`, 3);
         dycreatorT = new Map([[`${vignetted.size}`, vignetted.size]]);
         libavformatP = `${vignetted.size << (Math.min(Math.abs(3), 4))}`;
         iconarrowrightorangeS = `${libavformatP.length}`;
         episodess.push(episodess.length);
      }
       let bingi = 3.0;
       let close3 = 2.0;
          let combinedr = 0.0;
          let libsentry1 = 1;
         delegate_m88 = `${distu.length}`;
         combinedr /= Math.max(5, parseFloat(`${parseInt(`${combinedr}`)}`));
         libsentry1 -= parseInt(`${combinedr}`);
      username6 /= Math.max(2, parseInt(`${sansJ}`) / (Math.max(5, proxyd.length)));
      if (icondefaultthumbnailp) {
         break;
      }
   } while (icondefaultthumbnailp && (1 <= (username6 / (Math.max(flippery.size, 2))) || (username6 / (Math.max(5, flippery.size))) <= 1));
   if (2.2 >= sansJ) {
      sansJ /= Math.max(1, 2);
   }
   let floaterK = 7100862.0 <= sansJ;
   do {
      sansJ -= 1 & background_;
      if (floaterK) {
         break;
      }
   } while ((sansJ > username6) && floaterK);
      gradlei /= Math.max(2, parseFloat(`${2 >> (Math.min(5, stro.length))}`));
      elementsA += `${elementsA.length}`;
   let basej = gradlei <= 6013180.0;
   do {
      gradlei /= Math.max(5, parseFloat(`${2 * predictionbanner_}`));
      if (basej) {
         break;
      }
   } while (basej && ((elementsA.length >> (Math.min(Math.abs(2), 5))) < 3));
       let teamd = 1.0;
       let livenodatabgimgW = 0;
       let leakcheckerA = String.fromCharCode(99,111,108,120,95,101,95,52,0);
         livenodatabgimgW -= parseInt(`${teamd}`) / 1;
      for (let q = 0; q < 1; q++) {
          let fullscreenminY: Map<any, any> = new Map([[String.fromCharCode(112,95,54,55,95,116,101,115,115,101,108,97,116,101,0),383], [String.fromCharCode(104,95,53,50,95,99,97,116,97,112,117,108,116,0),934], [String.fromCharCode(101,115,99,97,112,101,95,106,95,51,53,0),788]]);
          let iconwatchp = 2;
          let f_managerF = 4.0;
         leakcheckerA += `${livenodatabgimgW}`;
         fullscreenminY = new Map([[`${iconwatchp}`, iconwatchp % (Math.max(parseInt(`${f_managerF}`), 8))]]);
         f_managerF *= parseInt(`${f_managerF}`) << (Math.min(Math.abs(2), 3));
      }
      let watchX = teamd <= 6111775.0;
      do {
         teamd /= Math.max(parseFloat(`${parseInt(`${teamd}`) + leakcheckerA.length}`), 2);
         if (watchX) {
            break;
         }
      } while (watchX && (!leakcheckerA.startsWith(`${teamd}`)));
          let eactj = String.fromCharCode(98,95,54,54,95,112,114,101,115,115,101,115,0);
          let iconpipexpandn = false;
          let sharedi = String.fromCharCode(111,100,97,116,97,95,110,95,56,48,0);
         teamd /= Math.max((parseFloat(`${(iconpipexpandn ? 1 : 3) - livenodatabgimgW}`)), 5);
         eactj += `${eactj.length ^ sharedi.length}`;
         iconpipexpandn = sharedi.length <= 48 || eactj.length <= 48;
      if (3.21 == (3.95 + teamd) && (teamd + parseFloat(`${leakcheckerA.length}`)) == 3.95) {
         leakcheckerA = `${leakcheckerA.length + 3}`;
      }
          let grayB = 1.0;
          let thailando = 0.0;
          let airbnbstarR = 2.0;
         leakcheckerA += `${parseInt(`${teamd}`)}`;
         grayB -= parseInt(`${airbnbstarR}`) | parseInt(`${grayB}`);
         thailando /= Math.max(5, parseInt(`${grayB}`));
         airbnbstarR *= parseFloat(`${parseInt(`${grayB}`)}`);
         livenodatabgimgW /= Math.max(5, livenodatabgimgW << (Math.min(leakcheckerA.length, 1)));
         teamd -= parseFloat(`${livenodatabgimgW - 2}`);
       let teamdetailsbgX = 4.0;
       let basketballmatchdetailbgl = 1.0;
      profileC += parseFloat(`${3}`);
   let stationsZ = sansJ >= 5333473.0;
   do {
      sansJ -= flippery.size - 2;
      if (stationsZ) {
         break;
      }
   } while (stationsZ && (predictionbanner_ == sansJ));
      background_ %= Math.max(1, 2);
       let gray0: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,121,95,115,95,50,49,0),true ], [String.fromCharCode(107,95,57,52,95,100,105,99,116,105,111,110,97,114,121,0),false ], [String.fromCharCode(100,105,109,109,101,100,95,98,95,55,55,0),true ]]);
       let reactnativeultimatelistviewi: Map<any, any> = new Map([[String.fromCharCode(115,104,97,112,101,95,50,95,57,52,0),610], [String.fromCharCode(98,114,97,99,107,101,116,95,110,95,52,53,0),392]]);
       let libavcodece = 2.0;
          let auto_vch = String.fromCharCode(111,95,56,57,95,108,101,97,118,105,110,103,0);
          let incidentH = 4.0;
          let yellowredcardK = false;
         reactnativeultimatelistviewi.set(`${incidentH}`, (parseInt(`${incidentH}`) - (yellowredcardK ? 3 : 5)));
         auto_vch += `${auto_vch.length + auto_vch.length}`;
         gray0 = new Map([[`${gray0.size}`, 1]]);
          let photom: Map<any, any> = new Map([[String.fromCharCode(105,102,111,114,109,97,116,95,104,95,51,54,0),false ], [String.fromCharCode(112,95,49,51,95,100,101,115,99,114,105,112,116,105,111,110,0),true ]]);
          let launchd = 3;
         gray0 = new Map([[`${photom.size}`, photom.size % (Math.max(7, gray0.size))]]);
         launchd >>= Math.min(Math.abs(launchd), 1);
         libavcodece *= parseFloat(`${1}`);
         libavcodece += parseFloat(`${gray0.size}`);
      let encryptN = libavcodece >= 4933233.0;
      do {
         libavcodece -= parseFloat(`${gray0.size}`);
         if (encryptN) {
            break;
         }
      } while (encryptN && (!Array.from(gray0.keys()).includes(`${libavcodece}`)));
      while (gray0.get(`${reactnativeultimatelistviewi.size}`) == null) {
         gray0 = new Map([[`${reactnativeultimatelistviewi.size}`, reactnativeultimatelistviewi.size]]);
         break;
      }
       let gpayY = String.fromCharCode(99,108,101,97,110,115,101,95,110,95,54,57,0);
       let producti = String.fromCharCode(99,95,53,51,95,100,121,110,98,117,102,0);
         libavcodece -= parseFloat(`${parseInt(`${libavcodece}`)}`);
      elementsA = `${parseInt(`${libavcodece}`) + 2}`;
       let mini3 = String.fromCharCode(97,100,100,105,116,105,118,101,95,52,95,51,51,0);
          let halffieldimageL = String.fromCharCode(99,114,111,115,115,102,97,100,101,95,98,95,52,0);
         mini3 = "3";
         halffieldimageL += `${halffieldimageL.length % (Math.max(9, halffieldimageL.length))}`;
      while (mini3 == String.fromCharCode(67,0)) {
          let short_4gG = String.fromCharCode(114,95,56,57,95,97,109,114,110,98,100,97,116,97,0);
          let yellowanimationliveQ = String.fromCharCode(99,116,108,111,117,116,112,117,116,95,53,95,49,50,0);
          let dangerN = 2.0;
          let libloggera = true;
         mini3 = "2";
         short_4gG += `${parseInt(`${dangerN}`) % 3}`;
         yellowanimationliveQ += `${yellowanimationliveQ.length}`;
         dangerN += (parseFloat(`${yellowanimationliveQ == String.fromCharCode(83,0) ? short_4gG.length : yellowanimationliveQ.length}`));
         libloggera = yellowanimationliveQ == String.fromCharCode(101,0);
         break;
      }
         mini3 += `${3 / (Math.max(9, mini3.length))}`;
      proxyd += `${3 - assistk.length}`;
      background_ %= Math.max(parseInt(`${profileC}`) % (Math.max(2, 5)), 3);
       let statisticsJ: Array<any> = [354, 666];
       let iconchatsendB = String.fromCharCode(115,109,105,108,101,95,56,95,57,54,0);
          let feedbackW = String.fromCharCode(111,95,55,95,120,100,99,97,109,0);
         statisticsJ = [1];
         feedbackW += `${2 | feedbackW.length}`;
         statisticsJ = [iconchatsendB.length + 1];
      for (let m = 0; m < 2; m++) {
          let hongkongY = 2;
         iconchatsendB = `${(iconchatsendB == String.fromCharCode(113,0) ? statisticsJ.length : iconchatsendB.length)}`;
         hongkongY /= Math.max(4, 3);
      }
      let tumbnailE = statisticsJ.length >= 5165209;
      do {
         statisticsJ.push(statisticsJ.length ^ 3);
         if (tumbnailE) {
            break;
         }
      } while (((2 ^ statisticsJ.length) < 2 && (2 ^ statisticsJ.length) < 2) && tumbnailE);
         iconchatsendB += `${iconchatsendB.length}`;
          let homeinactivet = String.fromCharCode(117,95,49,55,95,115,111,99,105,97,108,0);
          let libsentryo = 5.0;
         statisticsJ.push(1);
         homeinactivet = `${parseInt(`${libsentryo}`) + homeinactivet.length}`;
         libsentryo += (parseFloat(`${homeinactivet == String.fromCharCode(49,0) ? homeinactivet.length : parseInt(`${libsentryo}`)}`));
      stro += `${flippery.size % 2}`;
       let morew = String.fromCharCode(112,97,105,110,116,95,116,95,54,57,0);
       let b_positionD = true;
       let yellowredcardO = true;
         b_positionD = !morew.includes(`${b_positionD}`);
      if (b_positionD) {
          let acceptedS = String.fromCharCode(114,95,49,52,95,118,101,114,115,105,111,110,115,0);
          let gdtadvH = String.fromCharCode(119,95,49,52,95,100,105,115,116,0);
          let actions2: Map<any, any> = new Map([[String.fromCharCode(115,115,121,98,95,52,95,52,55,0),137], [String.fromCharCode(118,97,108,105,100,97,116,105,111,110,95,121,95,53,0),783]]);
          let dialogq = 3;
         yellowredcardO = (morew.length ^ dialogq) <= 62;
         acceptedS = `${acceptedS.length | gdtadvH.length}`;
         gdtadvH = `${actions2.size}`;
         actions2 = new Map([[acceptedS, acceptedS.length]]);
         dialogq *= acceptedS.length & gdtadvH.length;
      }
      if (morew.length > 3) {
          let iconqqF = String.fromCharCode(99,97,108,99,117,108,97,116,111,114,95,113,95,52,55,0);
          let selectp: Array<any> = [779, 158];
          let yellowanimationliveR = 2.0;
          let tickeda: Array<any> = [162, 72, 746];
         yellowredcardO = 22.91 < yellowanimationliveR;
         iconqqF = `${selectp.length}`;
         selectp = [iconqqF.length - selectp.length];
         yellowanimationliveR *= selectp.length + iconqqF.length;
         tickeda = [1 ^ iconqqF.length];
      }
      if (1 < morew.length || !b_positionD) {
         morew += `${morew.length | 1}`;
      }
         morew += `${((yellowredcardO ? 1 : 3))}`;
       let reactnavigationq = String.fromCharCode(101,95,57,49,95,115,115,105,109,118,0);
          let right6 = String.fromCharCode(102,105,111,95,109,95,54,57,0);
          let libyogaI = true;
          let time_cZ = String.fromCharCode(108,111,97,116,95,51,95,52,57,0);
         yellowredcardO = !b_positionD;
         right6 += `${((libyogaI ? 1 : 1) - 3)}`;
         libyogaI = time_cZ.length > 53;
         time_cZ = `${1 & right6.length}`;
         morew = "3";
         b_positionD = b_positionD && !yellowredcardO;
      background_ |= stro.length;
   let phoneshareO = iconpointscoreR <= 7992076;
   do {
       let dice5: Array<any> = [53, 8, 767];
       let defaultroombgh = String.fromCharCode(97,114,99,104,105,118,101,114,95,115,95,51,50,0);
      if (defaultroombgh.endsWith(`${dice5.length}`)) {
         defaultroombgh += `${(defaultroombgh == String.fromCharCode(55,0) ? dice5.length : defaultroombgh.length)}`;
      }
      for (let u = 0; u < 3; u++) {
         defaultroombgh = "2";
      }
      let whiteanimationliveY = 9295395 >= defaultroombgh.length;
      do {
          let liveshareg = 3;
          let topono = 4;
         defaultroombgh += `${liveshareg * topono}`;
         if (whiteanimationliveY) {
            break;
         }
      } while (((dice5.length % (Math.max(defaultroombgh.length, 1))) > 3 || 3 > (dice5.length % (Math.max(defaultroombgh.length, 5)))) && whiteanimationliveY);
         defaultroombgh += "1";
      if ((1 - defaultroombgh.length) >= 2) {
         dice5 = [1];
      }
          let hnewinterstitiala = 3.0;
          let bdxadsdkq = 3.0;
         dice5 = [1 ^ defaultroombgh.length];
         hnewinterstitiala /= Math.max(2, parseFloat(`${parseInt(`${hnewinterstitiala}`) / 2}`));
         bdxadsdkq += parseInt(`${hnewinterstitiala}`);
      iconpointscoreR /= Math.max(5, dice5.length);
      if (phoneshareO) {
         break;
      }
   } while (((assistk.length ^ 2) <= 1 || 1 <= (2 ^ iconpointscoreR)) && phoneshareO);
      assistk = `${3 - flippery.size}`;
      gradlei -= parseFloat(`${stro.length}`);
   for (let h = 0; h < 2; h++) {
      proxyd += `${assistk.length ^ 3}`;
   }
      sansJ -= parseInt(`${sansJ}`);
   while (5.0 >= sansJ) {
       let helperj = String.fromCharCode(99,95,51,50,95,115,117,114,101,0);
       let rightB: Array<any> = [765, 99];
       let subout7 = String.fromCharCode(97,95,57,48,95,106,118,101,114,115,105,111,110,0);
       let submit4 = String.fromCharCode(115,95,52,48,95,112,114,101,102,101,114,115,0);
         submit4 += `${rightB.length}`;
          let previewg = String.fromCharCode(114,101,115,112,111,110,100,95,109,95,55,52,0);
          let successS = String.fromCharCode(99,95,55,53,95,116,109,105,120,0);
         rightB = [2];
         previewg = `${(successS == String.fromCharCode(108,0) ? previewg.length : successS.length)}`;
      while (helperj.length == 2) {
         submit4 += `${(String.fromCharCode(77,0) == helperj ? helperj.length : rightB.length)}`;
         break;
      }
      for (let y = 0; y < 2; y++) {
         submit4 += `${rightB.length}`;
      }
       let penaltygoal9 = 3.0;
       let long_69K = 2.0;
         rightB = [helperj.length >> (Math.min(1, rightB.length))];
      while (!submit4.endsWith(`${penaltygoal9}`)) {
         penaltygoal9 *= (String.fromCharCode(103,0) == helperj ? helperj.length : subout7.length);
         break;
      }
         penaltygoal9 /= Math.max((String.fromCharCode(74,0) == helperj ? parseInt(`${penaltygoal9}`) : helperj.length), 4);
      while (subout7 == String.fromCharCode(72,0)) {
          let libfbu: Map<any, any> = new Map([[String.fromCharCode(114,101,111,114,100,101,114,97,98,108,101,95,57,95,52,56,0),true ], [String.fromCharCode(119,97,108,95,111,95,49,57,0),false ]]);
          let circleh = String.fromCharCode(119,95,57,56,95,99,111,112,121,118,0);
          let iconshareE = String.fromCharCode(99,108,97,117,115,101,115,95,51,95,52,53,0);
          let issubt = String.fromCharCode(101,110,116,114,111,112,121,109,118,95,49,95,57,50,0);
         submit4 = `${issubt.length}`;
         libfbu.set(iconshareE, (iconshareE == String.fromCharCode(78,0) ? circleh.length : iconshareE.length));
         circleh = "3";
         issubt = `${(circleh == String.fromCharCode(69,0) ? circleh.length : libfbu.size)}`;
         break;
      }
      let libffmpegkitU = 5044611 >= submit4.length;
      do {
         submit4 = `${submit4.length}`;
         if (libffmpegkitU) {
            break;
         }
      } while ((rightB.length == 2) && libffmpegkitU);
      for (let b = 0; b < 1; b++) {
          let dataX = String.fromCharCode(116,95,56,49,95,112,97,114,115,101,0);
          let circle4 = String.fromCharCode(102,95,54,53,95,99,108,111,117,100,102,108,97,114,101,0);
         subout7 += `${helperj.length}`;
         dataX = `${(String.fromCharCode(107,0) == circle4 ? circle4.length : dataX.length)}`;
      }
         long_69K -= rightB.length;
      background_ %= Math.max(4, iconpointscoreR / (Math.max(4, subout7.length)));
      break;
   }
   if (flippery.size > 1) {
      predictionbanner_ <<= Math.min(Math.abs(1), 1);
   }
   while (1 >= (2 << (Math.min(4, Math.abs(username6))))) {
       let formp: Map<any, any> = new Map([[String.fromCharCode(114,95,52,53,95,98,97,110,110,101,100,0),String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,95,103,95,56,51,0)], [String.fromCharCode(102,95,51,55,95,115,104,97,114,101,0),String.fromCharCode(119,95,50,55,95,115,97,110,105,116,105,122,101,0)], [String.fromCharCode(115,95,49,52,95,115,104,97,114,101,100,0),String.fromCharCode(114,95,56,95,98,117,102,102,101,114,101,100,0)]]);
       let agreement9 = String.fromCharCode(104,101,105,103,104,116,95,55,95,56,57,0);
      for (let a = 0; a < 1; a++) {
         formp.set(agreement9, formp.size);
      }
          let unfillm = 1.0;
          let libsentrya = String.fromCharCode(114,95,53,53,95,105,110,105,116,101,110,99,0);
         formp = new Map([[`${unfillm}`, parseInt(`${unfillm}`)]]);
         libsentrya += `${(libsentrya == String.fromCharCode(80,0) ? libsentrya.length : libsentrya.length)}`;
      let combineV = formp.size >= 6041801;
      do {
         formp.set(agreement9, (String.fromCharCode(85,0) == agreement9 ? agreement9.length : formp.size));
         if (combineV) {
            break;
         }
      } while (((formp.size >> (Math.min(agreement9.length, 3))) < 4 && (4 >> (Math.min(4, agreement9.length))) < 2) && combineV);
      for (let s = 0; s < 3; s++) {
         formp = new Map([[`${formp.size}`, agreement9.length % (Math.max(2, 4))]]);
      }
         formp = new Map([[`${formp.size}`, formp.size]]);
         formp.set(agreement9, 1);
      username6 |= agreement9.length ^ 1;
      break;
   }
      flippery.set(elementsA, 1);
   while (!assistk.includes(`${iconpointscoreR}`)) {
       let feedback0 = true;
       let bellremindere = String.fromCharCode(103,95,57,54,95,119,100,101,99,0);
       let typing9 = 0.0;
       let homeiconO = 2.0;
      if (bellremindere.endsWith(`${feedback0}`)) {
         bellremindere = `${bellremindere.length * parseInt(`${typing9}`)}`;
      }
         homeiconO *= (parseInt(`${homeiconO}`) ^ (feedback0 ? 4 : 2));
       let proxyT = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,95,105,95,56,49,0);
      let pingJ = proxyT.length <= 7020447;
      do {
         proxyT += `${parseInt(`${typing9}`)}`;
         if (pingJ) {
            break;
         }
      } while (pingJ && ((proxyT.length * homeiconO) <= 1.75 || 1 <= (proxyT.length >> (Math.min(Math.abs(4), 2)))));
      let xadsdkE = 8593999.0 <= typing9;
      do {
         typing9 += parseFloat(`${3}`);
         if (xadsdkE) {
            break;
         }
      } while (((proxyT.length % 4) < 5 && (typing9 * parseFloat(`${proxyT.length}`)) < 5.60) && xadsdkE);
      while (proxyT == String.fromCharCode(107,0) && bellremindere.length == 1) {
         bellremindere += `${parseInt(`${typing9}`)}`;
         break;
      }
          let yellowcirclebgH = String.fromCharCode(112,95,56,54,95,102,111,114,119,97,114,100,115,0);
         proxyT = `${parseInt(`${homeiconO}`) ^ 2}`;
         yellowcirclebgH = `${1 * yellowcirclebgH.length}`;
          let blackg = 5.0;
          let corev = String.fromCharCode(112,111,115,116,95,116,95,53,55,0);
         feedback0 = !feedback0;
         blackg -= parseFloat(`${2}`);
         corev += `${parseInt(`${blackg}`) ^ 3}`;
         typing9 -= parseFloat(`${parseInt(`${typing9}`) | 1}`);
         proxyT += `${proxyT.length}`;
         feedback0 = typing9 >= 41.99 || String.fromCharCode(103,0) == bellremindere;
      if (!proxyT.includes(`${feedback0}`)) {
          let iconmegaphoneU = 4;
          let statistics3 = 5.0;
         proxyT += `${parseInt(`${typing9}`) / (Math.max(5, bellremindere.length))}`;
         iconmegaphoneU <<= Math.min(5, Math.abs(iconmegaphoneU >> (Math.min(4, Math.abs(2)))));
         statistics3 += parseFloat(`${iconmegaphoneU + 2}`);
      }
      assistk = `${predictionbanner_ + 3}`;
      break;
   }
      elementsA += `${proxyd.length / 2}`;

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
       let policyB = String.fromCharCode(111,95,57,48,95,102,105,110,100,97,115,115,111,99,0);
    let iconnewsshareO: Array<any> = [357, 203];
    let libsentryD = String.fromCharCode(111,95,51,52,95,103,111,111,100,0);
    let yellowredcardg = 0.0;
    let philippinesJ = true;
    let shared9 = 4.0;
    let mutedv = 4;
    let showlessv = String.fromCharCode(116,105,110,116,101,114,108,97,99,101,95,98,95,56,48,0);
    let libjsinspectorB = 2.0;
    let eyeclose8 = String.fromCharCode(104,95,52,55,95,112,105,99,116,111,114,0);
      iconnewsshareO = [1 - mutedv];
       let largesound7 = 3.0;
         largesound7 -= parseInt(`${largesound7}`);
      let pangleP = 5445209.0 >= largesound7;
      do {
          let assets2 = 0.0;
          let orangedownarrowc: Array<any> = [String.fromCharCode(109,95,54,56,95,117,110,114,101,99,111,103,110,105,122,101,100,0), String.fromCharCode(117,95,49,51,95,115,116,114,101,97,109,99,111,112,121,0), String.fromCharCode(116,114,105,97,110,103,117,108,97,116,105,111,110,95,118,95,57,54,0)];
          let modelsL = String.fromCharCode(104,105,103,104,101,115,116,95,112,95,51,49,0);
          let animationsV = String.fromCharCode(99,95,52,50,95,118,105,100,101,111,0);
         largesound7 /= Math.max(parseInt(`${assets2}`) << (Math.min(3, Math.abs(2))), 1);
         assets2 /= Math.max(4, (String.fromCharCode(108,0) == modelsL ? modelsL.length : animationsV.length));
         orangedownarrowc.push(modelsL.length >> (Math.min(Math.abs(1), 5)));
         animationsV = `${orangedownarrowc.length & 1}`;
         if (pangleP) {
            break;
         }
      } while (pangleP && (largesound7 < largesound7));
         largesound7 -= 3 & parseInt(`${largesound7}`);
      iconnewsshareO.push(mutedv / 2);
      policyB += `${parseInt(`${shared9}`) / 2}`;
   while (1 > (showlessv.length + iconnewsshareO.length)) {
      iconnewsshareO.push(parseInt(`${yellowredcardg}`));
      break;
   }
      showlessv = `${1 * showlessv.length}`;
      philippinesJ = !philippinesJ || 70.71 >= shared9;
   let iconorientation8 = yellowredcardg >= 5481429.0;
   do {
       let splashq = 2.0;
       let tailK: Array<any> = [75, 403];
       let playershirtz = 3;
       let iconV = 1.0;
       let privatechatbg0 = String.fromCharCode(108,115,102,108,115,112,95,103,95,52,57,0);
          let mbjscommonz = String.fromCharCode(115,117,110,114,105,115,101,95,107,95,51,50,0);
         iconV /= Math.max(1, parseFloat(`${1}`));
         mbjscommonz += `${mbjscommonz.length / (Math.max(mbjscommonz.length, 2))}`;
         privatechatbg0 = "1";
         playershirtz ^= tailK.length;
      while (4 < (5 - privatechatbg0.length)) {
         privatechatbg0 = `${parseInt(`${splashq}`)}`;
         break;
      }
      while (!tailK.includes(splashq)) {
          let dicee = String.fromCharCode(114,101,115,111,117,114,99,101,115,95,112,95,57,0);
          let telemetryQ = String.fromCharCode(117,95,57,95,111,112,116,105,109,105,115,116,105,99,0);
         tailK.push(2 & dicee.length);
         dicee = `${telemetryQ.length}`;
         telemetryQ = `${telemetryQ.length}`;
         break;
      }
         iconV -= parseFloat(`${parseInt(`${iconV}`) >> (Math.min(3, Math.abs(1)))}`);
         splashq *= parseFloat(`${parseInt(`${iconV}`)}`);
         tailK = [privatechatbg0.length - parseInt(`${splashq}`)];
       let bingC: Array<any> = [693, 460, 236];
         splashq += parseFloat(`${2 % (Math.max(6, bingC.length))}`);
      let iconclosewhite7 = 5305350.0 <= iconV;
      do {
         iconV /= Math.max(5, parseFloat(`${playershirtz << (Math.min(Math.abs(parseInt(`${iconV}`)), 2))}`));
         if (iconclosewhite7) {
            break;
         }
      } while ((!privatechatbg0.startsWith(`${iconV}`)) && iconclosewhite7);
         playershirtz *= parseInt(`${iconV}`);
         playershirtz |= tailK.length * 3;
      while (parseInt(`${iconV}`) < tailK.length) {
         iconV += parseFloat(`${privatechatbg0.length}`);
         break;
      }
      if (1.77 <= iconV) {
          let resultN = 5;
         playershirtz += parseInt(`${splashq}`) >> (Math.min(tailK.length, 1));
         resultN &= 1 + resultN;
      }
      yellowredcardg -= parseFloat(`${3}`);
      if (iconorientation8) {
         break;
      }
   } while (((5 & iconnewsshareO.length) > 1 || 1.20 > (1.9 - yellowredcardg)) && iconorientation8);
   while (5 >= (mutedv - 5) && (5 - mutedv) >= 3) {
       let predictionbannersharedI: Array<any> = [117, 749, 878];
       let iconuserh = false;
       let configureq: Array<any> = [String.fromCharCode(115,119,105,102,116,99,95,112,95,57,0), String.fromCharCode(101,95,50,56,95,113,117,97,114,116,101,114,0)];
          let tickedL: Map<any, any> = new Map([[String.fromCharCode(121,95,54,57,95,114,97,98,98,105,116,0),159], [String.fromCharCode(117,95,53,56,95,105,95,55,52,0),187], [String.fromCharCode(108,105,98,115,112,101,101,120,95,108,95,56,53,0),865]]);
         iconuserh = configureq.length > 54 && iconuserh;
         tickedL.set(`${tickedL.size}`, tickedL.size);
       let mcopy_qK: Array<any> = [145, 331, 487];
      if ((configureq.length << (Math.min(Math.abs(1), 4))) <= 2) {
         iconuserh = mcopy_qK.length >= configureq.length;
      }
         iconuserh = predictionbannersharedI.length < 41;
         configureq = [configureq.length];
       let chinasame6 = String.fromCharCode(113,95,56,49,95,100,105,115,97,98,108,101,0);
       let profilepicI = String.fromCharCode(112,114,101,118,118,101,99,95,122,95,54,57,0);
      let dialogF = chinasame6.length >= 5179138;
      do {
         chinasame6 = `${chinasame6.length}`;
         if (dialogF) {
            break;
         }
      } while ((chinasame6.includes(`${profilepicI.length}`)) && dialogF);
          let orangeE: Map<any, any> = new Map([[String.fromCharCode(113,95,56,55,95,105,110,116,114,97,0),656], [String.fromCharCode(116,114,97,110,115,99,111,100,101,95,118,95,50,48,0),921]]);
          let iconrefreshp: Map<any, any> = new Map([[String.fromCharCode(119,109,97,112,114,111,100,97,116,97,95,114,95,54,57,0),103], [String.fromCharCode(108,101,118,97,114,105,110,116,95,122,95,52,49,0),803]]);
          let circleE = true;
         chinasame6 += "3";
         orangeE = new Map([[`${orangeE.size}`, orangeE.size * iconrefreshp.size]]);
         iconrefreshp = new Map([[`${iconrefreshp.size}`, 1]]);
         circleE = (orangeE.size ^ iconrefreshp.size) < 16;
          let utilsc = String.fromCharCode(101,118,97,108,95,57,95,55,55,0);
         iconuserh = !iconuserh;
         utilsc += `${utilsc.length ^ utilsc.length}`;
      libsentryD = `${iconnewsshareO.length + parseInt(`${yellowredcardg}`)}`;
      break;
   }

      if (
        autoPlayNext &&
        activeEpisode !== undefined &&
        episodes &&
        activeEpisode < episodes?.url_count - 1
      ) {

       let submitQ = String.fromCharCode(112,105,112,101,108,105,110,101,95,121,95,53,51,0);
      while (submitQ.length >= 3) {
         submitQ = `${(String.fromCharCode(74,0) == submitQ ? submitQ.length : submitQ.length)}`;
         break;
      }
      let bgvipxvod0 = submitQ == String.fromCharCode(55,51,54,100,98,108,0);
      do {
         submitQ = "2";
         if (bgvipxvod0) {
            break;
         }
      } while ((2 > submitQ.length) && bgvipxvod0);
       let singler = String.fromCharCode(120,95,51,54,95,97,108,103,111,114,105,116,104,109,0);
       let upgradeZ = String.fromCharCode(117,112,103,114,97,100,101,115,95,50,95,53,49,0);
      philippinesJ = submitQ.length >= 18 && shared9 >= 25.49;
       let networkU = String.fromCharCode(112,114,101,100,105,99,116,111,114,115,95,52,95,52,57,0);
       let carouselc = 2.0;
      while (5.52 < (carouselc / (Math.max(4, networkU.length)))) {
         carouselc /= Math.max(parseInt(`${carouselc}`) * networkU.length, 1);
         break;
      }
      for (let c = 0; c < 1; c++) {
          let nativeI = 5;
          let serviceF = 4.0;
         carouselc -= networkU.length;
         nativeI &= parseInt(`${serviceF}`) >> (Math.min(5, Math.abs(nativeI)));
         serviceF /= Math.max(nativeI, 3);
      }
      if (4 == networkU.length) {
         carouselc -= parseInt(`${carouselc}`) & networkU.length;
      }
       let bell1 = 4.0;
          let backiconb = 3.0;
          let frame_2A = String.fromCharCode(119,95,51,55,95,99,111,111,114,100,105,110,97,116,101,0);
          let nbatrophyP = String.fromCharCode(109,105,120,101,100,95,115,95,50,50,0);
         carouselc -= networkU.length + 2;
         backiconb += nbatrophyP.length;
         frame_2A = "3";
         nbatrophyP = `${parseInt(`${backiconb}`)}`;
       let apps_: Map<any, any> = new Map([[String.fromCharCode(97,114,99,116,105,99,95,48,95,51,51,0),203], [String.fromCharCode(116,97,116,105,99,95,106,95,53,49,0),530]]);
       let defaultteamt: Map<any, any> = new Map([[String.fromCharCode(115,107,101,116,99,104,95,108,95,54,48,0),false ], [String.fromCharCode(109,95,54,53,95,99,111,109,112,97,114,0),false ]]);
      mutedv += 3 << (Math.min(Math.abs(parseInt(`${shared9}`)), 3));
   while ((yellowredcardg / 4.51) == 5.92 && 4.51 == yellowredcardg) {
      yellowredcardg -= parseFloat(`${libsentryD.length}`);
      break;
   }
       let iconviewergifI: Array<any> = [36, 964];
      if (iconviewergifI.includes(iconviewergifI.length)) {
         iconviewergifI.push(iconviewergifI.length);
      }
      while ((2 ^ iconviewergifI.length) >= 2 && 5 >= (iconviewergifI.length ^ 2)) {
          let orientationp = 5.0;
         iconviewergifI.push(parseInt(`${orientationp}`) | iconviewergifI.length);
         break;
      }
         iconviewergifI.push(1);
      shared9 += policyB.length;
   while (!libsentryD.includes(`${shared9}`)) {
       let formk = 3;
         formk *= 3;
          let classesx = String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,110,95,55,51,0);
          let searchd = String.fromCharCode(118,95,55,56,95,115,117,114,112,114,105,115,101,100,0);
          let predictionlossS = String.fromCharCode(110,95,52,52,95,117,110,112,97,99,107,108,111,0);
         formk /= Math.max((String.fromCharCode(120,0) == predictionlossS ? classesx.length : predictionlossS.length), 1);
         classesx = `${searchd.length - 3}`;
         searchd += `${searchd.length}`;
         formk ^= formk;
      shared9 -= mutedv ^ policyB.length;
      break;
   }
   if ((mutedv * libsentryD.length) <= 5) {
       let predictionbannersharedO = 2.0;
       let indicatorG = 4.0;
         indicatorG -= parseFloat(`${parseInt(`${indicatorG}`) + parseInt(`${predictionbannersharedO}`)}`);
         predictionbannersharedO *= parseFloat(`${parseInt(`${indicatorG}`)}`);
      while (1.95 < (predictionbannersharedO * 1)) {
          let vipsportT: Map<any, any> = new Map([[String.fromCharCode(117,95,55,56,95,102,111,117,114,116,104,0),271], [String.fromCharCode(108,95,52,49,95,109,101,109,111,114,121,98,117,102,102,101,114,0),962]]);
          let libavutilE = 0.0;
          let redcirclebgX: Map<any, any> = new Map([[String.fromCharCode(114,101,108,97,121,95,122,95,50,49,0),342], [String.fromCharCode(108,95,53,51,95,109,115,110,119,99,0),830], [String.fromCharCode(109,105,115,99,95,115,95,51,56,0),415]]);
          let defaultpredictionprofile8 = String.fromCharCode(97,95,54,50,95,100,101,116,97,105,108,101,100,0);
         indicatorG += parseFloat(`${parseInt(`${predictionbannersharedO}`) / 1}`);
         vipsportT.set(defaultpredictionprofile8, 3 ^ parseInt(`${libavutilE}`));
         libavutilE -= vipsportT.size;
         redcirclebgX.set(`${libavutilE}`, parseInt(`${libavutilE}`) / (Math.max(2, 10)));
         defaultpredictionprofile8 = `${redcirclebgX.size}`;
         break;
      }
      if ((indicatorG + 3.100) >= 5.96 && (indicatorG + predictionbannersharedO) >= 3.100) {
         predictionbannersharedO += parseFloat(`${1}`);
      }
         indicatorG += parseFloat(`${parseInt(`${predictionbannersharedO}`) | parseInt(`${indicatorG}`)}`);
       let chinasame2 = String.fromCharCode(120,95,57,48,95,118,105,98,114,97,116,101,0);
       let macauq = String.fromCharCode(115,116,114,101,97,109,102,111,117,114,99,99,95,108,95,51,52,0);
      mutedv += parseInt(`${indicatorG}`);
   }
      yellowredcardg -= (parseFloat(`${(philippinesJ ? 5 : 4) | showlessv.length}`));
   let libaner = yellowredcardg >= 9611873.0;
   do {
      yellowredcardg *= (parseFloat(`${String.fromCharCode(106,0) == policyB ? iconnewsshareO.length : policyB.length}`));
      if (libaner) {
         break;
      }
   } while (libaner && (yellowredcardg >= 4.72));
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
       let penaltyshootC = String.fromCharCode(115,117,114,112,114,105,115,101,100,95,108,95,56,48,0);
    let usernameK = 5.0;
    let androidf = 0.0;
    let infoW = 5;
    let slidery = String.fromCharCode(114,95,50,54,95,105,112,108,105,109,97,103,101,0);
    let gray0 = String.fromCharCode(105,110,105,116,105,97,116,101,95,98,95,54,53,0);
    let home_: Array<any> = [574, 523, 544];
    let twitterm: Map<any, any> = new Map([[String.fromCharCode(105,109,112,108,105,101,115,95,99,95,53,53,0),460], [String.fromCharCode(115,97,118,105,110,103,115,95,120,95,57,53,0),286], [String.fromCharCode(113,95,57,49,95,116,114,97,110,115,112,97,114,101,110,99,121,0),597]]);
    let mapping2 = String.fromCharCode(99,111,112,121,105,110,103,95,102,95,50,48,0);
    let iconcloseZ = 1;
    let privilegeV = String.fromCharCode(102,111,114,109,97,116,116,101,114,95,55,95,56,54,0);
    let trashL = 1;
    let roomi = String.fromCharCode(100,95,55,95,114,101,108,101,97,115,101,0);
    let schedulera: Array<any> = [String.fromCharCode(97,109,114,119,98,100,97,116,97,95,48,95,56,0), String.fromCharCode(122,95,54,49,95,115,105,109,117,108,116,97,110,101,111,117,115,0), String.fromCharCode(115,116,97,110,100,97,114,100,115,95,119,95,57,48,0)];
    let footballfiledlayoutc = String.fromCharCode(100,95,51,56,95,116,117,114,98,117,108,101,110,99,101,0);
    let suboutH = String.fromCharCode(98,95,53,49,95,114,111,111,116,0);
   let binddatasT = 6205608 <= twitterm.size;
   do {
      twitterm.set(`${androidf}`, privilegeV.length + parseInt(`${androidf}`));
      if (binddatasT) {
         break;
      }
   } while (binddatasT && (!Array.from(twitterm.keys()).includes(`${androidf}`)));
   for (let k = 0; k < 1; k++) {
       let distQ = true;
       let rocketp = String.fromCharCode(102,111,110,116,95,102,95,50,50,0);
       let type_3tK = true;
       let tickedc = String.fromCharCode(122,95,49,48,95,99,111,100,101,99,99,116,108,0);
         distQ = !distQ;
      for (let l = 0; l < 2; l++) {
          let eyeopenJ: Array<any> = [492, 832];
          let untickq = 4.0;
          let placeholder_ = false;
          let exampleimageU: Array<any> = [948, 688];
         type_3tK = untickq < tickedc.length;
         eyeopenJ = [3];
         untickq *= eyeopenJ.length;
         exampleimageU.push(((placeholder_ ? 1 : 2) % (Math.max(5, eyeopenJ.length))));
      }
      for (let u = 0; u < 1; u++) {
         type_3tK = distQ || tickedc.length >= 23;
      }
          let splash_ = 3.0;
         tickedc += `${parseInt(`${splash_}`) + 1}`;
          let screenR = 5.0;
          let redgoalz: Array<any> = [945, 473];
         type_3tK = String.fromCharCode(78,0) == rocketp;
         screenR /= Math.max(parseFloat(`${redgoalz.length}`), 2);
         redgoalz.push(parseInt(`${screenR}`) + redgoalz.length);
       let othermatchdetailbgu = true;
       let leakcheckerq = true;
         distQ = rocketp.length <= 79;
      let iconqq8 = rocketp.length <= 5869923;
      do {
         rocketp = `${rocketp.length % 3}`;
         if (iconqq8) {
            break;
         }
      } while ((!distQ) && iconqq8);
      let with_cj7 = type_3tK ? !type_3tK : type_3tK;
      do {
          let release_w9 = String.fromCharCode(107,95,50,95,114,101,110,101,119,0);
         type_3tK = (othermatchdetailbgu ? !leakcheckerq : !othermatchdetailbgu);
         release_w9 = "3";
         if (with_cj7) {
            break;
         }
      } while ((tickedc.length > 4) && with_cj7);
         leakcheckerq = !leakcheckerq || tickedc.length == 91;
       let smallb = 5.0;
          let condensedI = String.fromCharCode(97,115,98,100,95,113,95,50,50,0);
         smallb /= Math.max(2, condensedI.length);
      infoW <<= Math.min(gray0.length, 2);
   }
      privilegeV = `${privilegeV.length | 3}`;
   let appsy = gray0 == String.fromCharCode(101,102,107,106,106,0);
   do {
       let abouto: Map<any, any> = new Map([[String.fromCharCode(107,95,49,48,95,116,117,110,101,0),80], [String.fromCharCode(100,95,51,48,95,97,109,112,108,105,116,117,100,101,0),73]]);
       let abidetectV = String.fromCharCode(100,101,99,97,121,95,50,95,54,52,0);
       let videocommonV: Map<any, any> = new Map([[String.fromCharCode(121,95,56,55,95,100,101,102,101,114,0),500], [String.fromCharCode(112,95,50,55,95,100,105,115,112,108,97,121,105,110,103,0),693], [String.fromCharCode(97,95,55,52,95,112,101,97,99,104,0),137]]);
       let imagemanagerD = 0.0;
       let bootsplasho = true;
      while (imagemanagerD > parseFloat(`${abouto.size}`)) {
          let combineE = String.fromCharCode(99,111,115,105,103,110,97,116,111,114,105,101,115,95,118,95,57,56,0);
          let orangedownarrowR: Map<any, any> = new Map([[String.fromCharCode(110,95,54,51,95,115,116,97,99,104,0),149], [String.fromCharCode(111,95,57,51,95,111,116,104,101,114,110,97,109,101,0),317]]);
         abouto = new Map([[`${videocommonV.size}`, videocommonV.size & 1]]);
         combineE = `${2 ^ combineE.length}`;
         orangedownarrowR.set(`${combineE}`, orangedownarrowR.size & 2);
         break;
      }
         abouto = new Map([[`${abouto.size}`, ((bootsplasho ? 5 : 3) & 2)]]);
          let brightnessS = false;
          let notificationy = true;
          let lightq: Array<any> = [152, 647];
         imagemanagerD += parseFloat(`${1}`);
         brightnessS = lightq.length < 81;
         notificationy = brightnessS && !notificationy;
         lightq.push(lightq.length);
          let moonH = false;
          let entryR = true;
          let temperatureE = false;
         abidetectV = `${2 * videocommonV.size}`;
         moonH = entryR;
         temperatureE = moonH;
      while (bootsplasho) {
         imagemanagerD -= parseFloat(`${abouto.size - 1}`);
         break;
      }
          let mbbannerz = String.fromCharCode(119,95,56,49,95,100,101,99,97,121,0);
          let mergerL = 0;
         videocommonV = new Map([[abidetectV, mergerL ^ abidetectV.length]]);
         mbbannerz += `${mbbannerz.length}`;
         mergerL /= Math.max((String.fromCharCode(107,0) == mbbannerz ? mbbannerz.length : mbbannerz.length), 1);
          let mergerH: Map<any, any> = new Map([[String.fromCharCode(115,116,114,116,97,103,95,108,95,56,52,0),true ], [String.fromCharCode(107,95,49,51,95,112,101,114,115,105,115,116,101,110,116,0),false ]]);
          let orangetickU = 1.0;
          let whiteR: Map<any, any> = new Map([[String.fromCharCode(115,101,116,102,100,95,120,95,56,57,0),340], [String.fromCharCode(112,95,49,48,48,95,98,111,114,100,101,114,0),69], [String.fromCharCode(106,95,51,48,95,115,116,114,101,97,109,102,111,117,114,99,99,0),434]]);
         abouto.set(`${imagemanagerD}`, 3);
         mergerH = new Map([[`${whiteR.size}`, 2 * mergerH.size]]);
         orangetickU += parseFloat(`${whiteR.size >> (Math.min(Math.abs(1), 4))}`);
       let sendm = 0.0;
       let collectionJ = 1.0;
      while (5.73 >= (sendm / 5.90)) {
         sendm *= videocommonV.size;
         break;
      }
         collectionJ += 1;
      while (2 < (abouto.size - parseInt(`${sendm}`)) && 2 < (parseInt(`${sendm}`) - abouto.size)) {
         sendm -= (abidetectV == String.fromCharCode(55,0) ? abidetectV.length : abouto.size);
         break;
      }
          let gesturesp: Map<any, any> = new Map([[String.fromCharCode(115,101,101,107,104,101,97,100,95,112,95,52,56,0),341], [String.fromCharCode(100,101,109,97,116,101,114,105,97,108,105,122,101,95,101,95,53,56,0),956], [String.fromCharCode(114,95,49,57,95,115,100,97,108,108,111,99,120,0),367]]);
          let statsG = 2.0;
         abidetectV += `${abidetectV.length}`;
         gesturesp.set(`${statsG}`, 3);
         statsG -= 1;
         videocommonV = new Map([[abidetectV, abidetectV.length]]);
      while ((collectionJ * 2.10) < 3.56 || 3.11 < (2.10 * collectionJ)) {
         imagemanagerD *= parseFloat(`${videocommonV.size + 2}`);
         break;
      }
      let tailq = 5451875 >= abidetectV.length;
      do {
         abidetectV = `${abidetectV.length}`;
         if (tailq) {
            break;
         }
      } while (((abidetectV.length + videocommonV.size) <= 5 || (videocommonV.size + 5) <= 1) && tailq);
      gray0 += `${parseInt(`${androidf}`)}`;
      if (appsy) {
         break;
      }
   } while (appsy && (gray0.length > 3));
   if (2 >= (2 / (Math.max(2, home_.length)))) {
      home_ = [1];
   }
      androidf += parseInt(`${androidf}`);
       let related0: Array<any> = [608, 661];
      let images7 = related0.length >= 7325698;
      do {
          let heartP = true;
          let stationj = String.fromCharCode(99,104,101,99,107,111,117,116,95,97,95,52,49,0);
          let baidu7 = 3.0;
          let reviewk = false;
         related0.push(3 & parseInt(`${baidu7}`));
         heartP = !reviewk;
         stationj = "2";
         baidu7 -= parseFloat(`${stationj.length - 1}`);
         if (images7) {
            break;
         }
      } while (images7 && (3 <= (related0.length << (Math.min(Math.abs(3), 3))) && 2 <= (related0.length << (Math.min(Math.abs(3), 2)))));
      let sinae = related0.length <= 7161316;
      do {
          let selectt = String.fromCharCode(121,95,52,48,95,100,105,115,112,111,115,97,108,0);
          let nalyticsA = 3.0;
          let greenarrowupB = 1.0;
          let referrer4 = 3;
         related0 = [(selectt == String.fromCharCode(67,0) ? selectt.length : related0.length)];
         nalyticsA += parseFloat(`${parseInt(`${greenarrowupB}`)}`);
         greenarrowupB -= parseInt(`${nalyticsA}`);
         referrer4 %= Math.max(referrer4 / (Math.max(8, parseInt(`${greenarrowupB}`))), 5);
         if (sinae) {
            break;
         }
      } while ((1 > (5 + related0.length)) && sinae);
          let memberb = false;
          let iconarrowrightorangeW: Array<any> = [String.fromCharCode(99,108,101,97,114,95,97,95,52,51,0), String.fromCharCode(118,97,114,108,101,110,95,99,95,54,53,0)];
          let othermatchdetailbg9 = String.fromCharCode(118,95,56,50,95,98,99,104,101,99,107,0);
         related0 = [iconarrowrightorangeW.length + 2];
         memberb = !othermatchdetailbg9.endsWith(`${memberb}`);
         iconarrowrightorangeW.push((String.fromCharCode(89,0) == othermatchdetailbg9 ? othermatchdetailbg9.length : (memberb ? 4 : 4)));
      home_.push(infoW);
       let controlsy = 4.0;
       let jingdongL = String.fromCharCode(109,98,101,100,116,108,115,95,121,95,56,49,0);
      for (let b = 0; b < 1; b++) {
         controlsy += parseFloat(`${parseInt(`${controlsy}`) + 3}`);
      }
      while (5 >= jingdongL.length) {
         controlsy += parseFloat(`${parseInt(`${controlsy}`)}`);
         break;
      }
      if ((4.86 - controlsy) < 3.99) {
         controlsy -= parseFloat(`${3}`);
      }
      let rewindL = 7631446 >= jingdongL.length;
      do {
         jingdongL = `${(String.fromCharCode(113,0) == jingdongL ? parseInt(`${controlsy}`) : jingdongL.length)}`;
         if (rewindL) {
            break;
         }
      } while ((parseFloat(`${jingdongL.length}`) == controlsy) && rewindL);
      let launcherI = 8077670.0 >= controlsy;
      do {
         controlsy *= parseFloat(`${parseInt(`${controlsy}`) ^ 1}`);
         if (launcherI) {
            break;
         }
      } while ((jingdongL.endsWith(`${controlsy}`)) && launcherI);
          let downloadedj = String.fromCharCode(116,95,56,52,95,101,110,99,111,100,101,100,115,116,114,101,97,109,0);
         controlsy -= (parseFloat(`${String.fromCharCode(57,0) == downloadedj ? parseInt(`${controlsy}`) : downloadedj.length}`));
      mapping2 = `${3 ^ iconcloseZ}`;
       let liney = String.fromCharCode(109,97,116,99,104,101,95,118,95,55,0);
       let thumbnail0 = 5.0;
       let redgoal9 = 1.0;
      while ((thumbnail0 - 4.34) >= 5.68) {
         thumbnail0 -= parseFloat(`${parseInt(`${thumbnail0}`)}`);
         break;
      }
         redgoal9 *= (liney == String.fromCharCode(95,0) ? parseInt(`${thumbnail0}`) : liney.length);
      for (let e = 0; e < 3; e++) {
          let guidef: Map<any, any> = new Map([[String.fromCharCode(97,95,55,55,95,99,102,101,110,99,115,116,114,0),false ], [String.fromCharCode(120,95,52,50,95,109,115,103,0),true ], [String.fromCharCode(119,95,57,95,97,100,97,112,116,0),false ]]);
          let imagesN = 5.0;
          let predictionarrowH: Map<any, any> = new Map([[String.fromCharCode(110,111,98,111,100,121,95,117,95,57,57,0),302], [String.fromCharCode(112,95,53,55,95,109,117,108,116,105,101,110,100,0),362], [String.fromCharCode(116,114,97,110,115,105,116,105,111,110,105,110,103,95,113,95,51,54,0),223]]);
          let applej = 0;
         thumbnail0 -= parseFloat(`${applej}`);
         guidef.set(`${imagesN}`, parseInt(`${imagesN}`));
         predictionarrowH.set(`${imagesN}`, parseInt(`${imagesN}`) >> (Math.min(Math.abs(guidef.size), 2)));
         applej %= Math.max(4, guidef.size);
      }
      let runtimei = 7837927.0 <= thumbnail0;
      do {
         thumbnail0 /= Math.max(4, parseFloat(`${parseInt(`${redgoal9}`)}`));
         if (runtimei) {
            break;
         }
      } while (runtimei && (5.59 <= (redgoal9 * 4.35) && (redgoal9 * 4.35) <= 3.46));
      for (let t = 0; t < 1; t++) {
          let plashw = String.fromCharCode(105,95,51,54,95,105,110,118,111,108,118,101,100,0);
          let short_xh4 = 1;
          let whitebellf = String.fromCharCode(121,95,53,53,95,105,97,100,115,116,120,0);
          let privilegew = 2.0;
          let feedback3 = 3.0;
         thumbnail0 /= Math.max(parseFloat(`${parseInt(`${privilegew}`)}`), 3);
         plashw += `${short_xh4 % 3}`;
         short_xh4 /= Math.max(5, short_xh4);
         whitebellf = `${short_xh4 - parseInt(`${feedback3}`)}`;
         feedback3 /= Math.max(2, 3);
      }
      while (3.12 == (parseFloat(`${liney.length}`) + thumbnail0)) {
         thumbnail0 -= parseFloat(`${liney.length ^ 3}`);
         break;
      }
      if ((thumbnail0 - 4.99) == 1.54) {
          let catagoryH = String.fromCharCode(109,97,114,107,105,110,103,95,121,95,54,52,0);
          let icondefaultthumbnail9 = String.fromCharCode(99,95,50,0);
         thumbnail0 -= parseFloat(`${2 & icondefaultthumbnail9.length}`);
         catagoryH += `${catagoryH.length}`;
         icondefaultthumbnail9 = `${catagoryH.length}`;
      }
      let confirmationk = redgoal9 >= 7544481.0;
      do {
          let interstitialH = String.fromCharCode(114,101,99,118,95,105,95,48,0);
          let eyecloseW = String.fromCharCode(100,95,53,95,119,97,108,108,112,97,112,101,114,0);
         redgoal9 /= Math.max(3, (String.fromCharCode(105,0) == liney ? liney.length : parseInt(`${thumbnail0}`)));
         interstitialH += `${interstitialH.length * 3}`;
         eyecloseW += `${eyecloseW.length}`;
         if (confirmationk) {
            break;
         }
      } while (confirmationk && (thumbnail0 <= redgoal9));
      let termsS = 8249050.0 <= thumbnail0;
      do {
          let yellowe = String.fromCharCode(109,97,116,114,111,115,107,97,95,105,95,49,49,0);
          let securityb = 4;
          let singaporeG = String.fromCharCode(107,95,51,52,95,112,108,97,121,112,97,117,115,101,0);
         thumbnail0 *= parseFloat(`${parseInt(`${redgoal9}`)}`);
         yellowe += `${1 % (Math.max(5, singaporeG.length))}`;
         securityb *= 2 << (Math.min(3, yellowe.length));
         singaporeG += `${3 | yellowe.length}`;
         if (termsS) {
            break;
         }
      } while (termsS && (2.57 <= (thumbnail0 + 1.87) || (thumbnail0 + redgoal9) <= 1.87));
      twitterm.set(mapping2, 2 >> (Math.min(3, mapping2.length)));
       let reactnativeratingsz: Map<any, any> = new Map([[String.fromCharCode(115,101,103,109,101,110,116,117,114,108,110,111,100,101,95,121,95,55,54,0),String.fromCharCode(108,95,56,48,0)], [String.fromCharCode(114,95,48,95,99,111,110,118,101,114,115,105,111,110,0),String.fromCharCode(112,95,57,49,95,118,97,108,117,101,115,0)], [String.fromCharCode(111,95,56,51,95,107,105,108,108,0),String.fromCharCode(111,95,57,53,95,97,118,97,115,115,101,114,116,0)]]);
          let reddownarrows = 3.0;
         reactnativeratingsz.set(`${reddownarrows}`, parseInt(`${reddownarrows}`) << (Math.min(Math.abs(reactnativeratingsz.size), 2)));
         reactnativeratingsz.set(`${reactnativeratingsz.size}`, reactnativeratingsz.size >> (Math.min(Math.abs(1), 2)));
      let transfery = 4943148 <= reactnativeratingsz.size;
      do {
          let turndownM = 0.0;
          let libfbS = String.fromCharCode(99,95,55,51,95,109,105,110,117,115,0);
          let arrowdownH = String.fromCharCode(114,101,102,101,114,95,120,95,53,0);
          let thailand1: Array<any> = [185, 0];
         reactnativeratingsz = new Map([[`${reactnativeratingsz.size}`, 1 - libfbS.length]]);
         turndownM /= Math.max(4, parseFloat(`${parseInt(`${turndownM}`) / (Math.max(3, 1))}`));
         libfbS = `${parseInt(`${turndownM}`) >> (Math.min(thailand1.length, 3))}`;
         arrowdownH += `${arrowdownH.length}`;
         thailand1.push(parseInt(`${turndownM}`));
         if (transfery) {
            break;
         }
      } while (transfery && ((5 + reactnativeratingsz.size) <= 1 && 5 <= (reactnativeratingsz.size + reactnativeratingsz.size)));
      gray0 = `${gray0.length % (Math.max(3, parseInt(`${usernameK}`)))}`;
   while (1 > (twitterm.size ^ 2)) {
       let abidetectO = String.fromCharCode(99,95,57,95,106,117,108,105,97,110,0);
       let basketballdetailsbg7: Map<any, any> = new Map([[String.fromCharCode(102,100,99,116,120,95,103,95,52,54,0),16], [String.fromCharCode(114,95,49,52,95,112,105,120,101,108,115,0),861]]);
       let watchM = String.fromCharCode(120,102,105,120,101,115,95,116,95,57,49,0);
          let dragcloseI = String.fromCharCode(99,111,115,112,105,95,48,95,51,56,0);
          let stringu: Map<any, any> = new Map([[String.fromCharCode(121,95,49,54,95,117,110,100,101,114,114,117,110,0),true ], [String.fromCharCode(121,95,52,49,95,109,97,103,110,105,116,117,100,101,0),true ], [String.fromCharCode(101,110,100,97,95,52,95,54,57,0),false ]]);
          let anytime3 = String.fromCharCode(114,111,103,114,97,109,95,110,95,54,53,0);
         basketballdetailsbg7 = new Map([[`${stringu.size}`, 1]]);
         dragcloseI = `${anytime3.length >> (Math.min(2, dragcloseI.length))}`;
         stringu.set(dragcloseI, dragcloseI.length << (Math.min(Math.abs(1), 5)));
         anytime3 += `${anytime3.length ^ 3}`;
      for (let c = 0; c < 3; c++) {
          let collectionA = false;
          let final_bK = 4.0;
          let homeg: Map<any, any> = new Map([[String.fromCharCode(104,97,115,120,95,101,95,56,55,0),95], [String.fromCharCode(98,95,51,48,95,110,111,110,110,117,108,108,98,117,102,102,101,114,0),220]]);
          let largeu = 3.0;
          let modelss = 3;
         basketballdetailsbg7.set(`${collectionA}`, parseInt(`${final_bK}`) >> (Math.min(5, Math.abs(1))));
         collectionA = homeg.size == 42 || largeu == 59.65;
         final_bK += modelss;
         homeg = new Map([[`${modelss}`, 1 % (Math.max(10, parseInt(`${largeu}`)))]]);
      }
      while (abidetectO.length >= watchM.length) {
          let libsgcoreF = 5;
         abidetectO = `${(abidetectO == String.fromCharCode(89,0) ? abidetectO.length : libsgcoreF)}`;
         break;
      }
      for (let c = 0; c < 3; c++) {
         basketballdetailsbg7 = new Map([[`${basketballdetailsbg7.size}`, 1 ^ basketballdetailsbg7.size]]);
      }
         watchM += `${basketballdetailsbg7.size - 1}`;
       let a_center1 = String.fromCharCode(120,95,52,54,95,98,111,111,108,101,97,110,0);
      if (basketballdetailsbg7.size < a_center1.length) {
         a_center1 += "1";
      }
         basketballdetailsbg7 = new Map([[`${basketballdetailsbg7.size}`, 2]]);
      let penaltyshoot8 = String.fromCharCode(111,108,102,110,100,54,0) == watchM;
      do {
          let iconarrowrightblackQ = String.fromCharCode(114,101,102,101,114,95,50,95,53,48,0);
          let downB = 0.0;
         watchM += `${(String.fromCharCode(78,0) == watchM ? a_center1.length : watchM.length)}`;
         iconarrowrightblackQ += `${iconarrowrightblackQ.length}`;
         downB += 2 + iconarrowrightblackQ.length;
         if (penaltyshoot8) {
            break;
         }
      } while (penaltyshoot8 && (5 < (watchM.length | basketballdetailsbg7.size)));
      privilegeV += `${(abidetectO == String.fromCharCode(110,0) ? abidetectO.length : parseInt(`${androidf}`))}`;
      break;
   }
      home_.push(iconcloseZ | 1);
   while (!slidery.endsWith(`${mapping2.length}`)) {
      slidery = `${parseInt(`${usernameK}`) % 3}`;
      break;
   }
       let windI = 1;
       let successN: Map<any, any> = new Map([[String.fromCharCode(115,95,51,52,95,109,105,115,109,97,116,99,104,101,115,0),234], [String.fromCharCode(106,95,56,49,95,111,111,108,116,105,112,0),478], [String.fromCharCode(108,95,52,56,95,114,101,99,111,110,110,101,99,116,105,110,103,0),270]]);
      let switch_4C = windI <= 6476931;
      do {
         windI <<= Math.min(Math.abs(successN.size), 2);
         if (switch_4C) {
            break;
         }
      } while ((successN.get(`${windI}`) != null) && switch_4C);
         successN = new Map([[`${successN.size}`, 1]]);
      for (let y = 0; y < 1; y++) {
          let anner6: Array<any> = [868, 427];
          let iconbellactivey: Map<any, any> = new Map([[String.fromCharCode(106,95,57,52,95,105,114,99,97,109,0),String.fromCharCode(110,95,53,55,95,111,112,116,101,100,0)], [String.fromCharCode(114,101,118,97,108,105,100,97,116,101,95,104,95,49,0),String.fromCharCode(112,115,102,105,108,101,95,102,95,53,0)], [String.fromCharCode(119,95,52,50,95,97,99,113,117,105,114,101,100,0),String.fromCharCode(100,101,98,117,103,95,109,95,56,52,0)]]);
          let suboutM = 4.0;
          let modea = String.fromCharCode(115,95,52,49,95,106,111,105,110,101,100,0);
         windI -= anner6.length + 1;
         anner6 = [parseInt(`${suboutM}`)];
         iconbellactivey = new Map([[`${iconbellactivey.size}`, iconbellactivey.size]]);
         suboutM += modea.length;
         modea += `${2 + parseInt(`${suboutM}`)}`;
      }
      for (let h = 0; h < 3; h++) {
         successN = new Map([[`${successN.size}`, 1]]);
      }
      while (Array.from(successN.keys()).includes(`${windI}`)) {
         successN.set(`${windI}`, windI + 3);
         break;
      }
      for (let q = 0; q < 1; q++) {
         windI += successN.size | 2;
      }
      trashL %= Math.max(2, 1 * twitterm.size);
   for (let l = 0; l < 3; l++) {
      iconcloseZ ^= 3;
   }
      trashL >>= Math.min(gray0.length, 3);
      infoW += parseInt(`${usernameK}`) * 3;
   let star3 = 6972354 >= mapping2.length;
   do {
      mapping2 += `${iconcloseZ}`;
      if (star3) {
         break;
      }
   } while (star3 && (mapping2.includes(`${iconcloseZ}`)));
      androidf += (String.fromCharCode(56,0) == gray0 ? gray0.length : slidery.length);
       let awayplayerq: Map<any, any> = new Map([[String.fromCharCode(113,95,53,48,95,114,101,102,108,101,99,116,111,114,0),false ], [String.fromCharCode(99,111,110,99,104,95,106,95,52,52,0),true ]]);
       let profileactiveY: Map<any, any> = new Map([[String.fromCharCode(101,95,49,54,95,97,116,114,97,99,112,0),false ], [String.fromCharCode(101,95,55,53,95,104,97,115,104,100,101,115,116,114,111,121,0),true ], [String.fromCharCode(111,95,54,50,95,114,101,112,101,97,116,105,110,103,0),true ]]);
      if (3 > awayplayerq.size) {
          let cornershootM = 1.0;
          let nativeJ = String.fromCharCode(112,114,101,99,101,110,99,101,95,99,95,52,0);
          let carousel8 = String.fromCharCode(109,95,53,50,95,107,100,102,0);
          let pathh = 1.0;
         profileactiveY.set(nativeJ, carousel8.length - nativeJ.length);
         cornershootM /= Math.max(5, parseFloat(`${parseInt(`${pathh}`) - 3}`));
         carousel8 = `${parseInt(`${cornershootM}`)}`;
         pathh -= parseInt(`${pathh}`) % 2;
      }
      let t_managerR = profileactiveY.size >= 8864887;
      do {
         profileactiveY = new Map([[`${profileactiveY.size}`, awayplayerq.size | profileactiveY.size]]);
         if (t_managerR) {
            break;
         }
      } while (t_managerR && (profileactiveY.get(`${awayplayerq.size}`) == null));
      for (let u = 0; u < 2; u++) {
          let arrowdownV = String.fromCharCode(116,95,55,53,95,97,114,103,118,0);
          let arrowrighta = String.fromCharCode(100,95,57,52,95,109,97,121,98,101,0);
         awayplayerq.set(`${arrowdownV}`, arrowdownV.length);
         arrowrighta = "2";
      }
      while (4 > profileactiveY.size) {
         awayplayerq.set(`${awayplayerq.size}`, awayplayerq.size | profileactiveY.size);
         break;
      }
       let whistleE = 0;
      while (Array.from(awayplayerq.values()).includes(whistleE)) {
         whistleE ^= profileactiveY.size;
         break;
      }
      penaltyshootC += `${2 | penaltyshootC.length}`;
       let libswscaleZ = String.fromCharCode(115,116,97,114,116,114,101,101,95,51,95,49,55,0);
      if (libswscaleZ.length < 3 && libswscaleZ.length < 3) {
         libswscaleZ = `${libswscaleZ.length / 1}`;
      }
         libswscaleZ = `${libswscaleZ.length}`;
         libswscaleZ += `${libswscaleZ.length | 2}`;
      schedulera = [mapping2.length];
       let commonl = String.fromCharCode(116,95,54,55,95,115,116,114,105,100,0);
       let predictionactive8: Map<any, any> = new Map([[String.fromCharCode(98,117,102,102,101,114,101,118,101,110,116,95,116,95,55,56,0),true ], [String.fromCharCode(109,95,49,95,100,111,119,110,108,105,110,107,0),false ], [String.fromCharCode(107,95,54,51,95,100,97,112,112,0),false ]]);
         predictionactive8 = new Map([[`${predictionactive8.size}`, predictionactive8.size ^ 3]]);
       let libreactperfloggerjnij = String.fromCharCode(112,97,114,101,110,116,104,101,115,101,115,95,105,95,52,52,0);
         predictionactive8 = new Map([[commonl, (String.fromCharCode(78,0) == libreactperfloggerjnij ? libreactperfloggerjnij.length : commonl.length)]]);
          let eventsplash8 = 5.0;
          let latnm = false;
         libreactperfloggerjnij += `${commonl.length}`;
         eventsplash8 += (parseFloat(`${parseInt(`${eventsplash8}`) * (latnm ? 1 : 5)}`));
         latnm = !latnm;
      if (!commonl.startsWith(`${predictionactive8.size}`)) {
         commonl += `${(String.fromCharCode(71,0) == libreactperfloggerjnij ? libreactperfloggerjnij.length : predictionactive8.size)}`;
      }
         predictionactive8 = new Map([[`${predictionactive8.size}`, 3 & commonl.length]]);
      privilegeV += `${(String.fromCharCode(120,0) == penaltyshootC ? home_.length : penaltyshootC.length)}`;
       let stringsQ = String.fromCharCode(120,95,50,52,95,114,108,111,116,116,105,101,99,111,109,109,111,110,0);
       let orangef = String.fromCharCode(115,101,116,102,105,101,108,100,95,117,95,54,48,0);
      for (let i = 0; i < 2; i++) {
         orangef = "3";
      }
         orangef = `${2 / (Math.max(2, orangef.length))}`;
         orangef += `${stringsQ.length}`;
          let iconsettinga: Map<any, any> = new Map([[String.fromCharCode(120,102,111,114,109,101,100,95,115,95,55,49,0),461], [String.fromCharCode(119,95,55,95,108,111,111,112,102,105,108,116,101,114,0),89], [String.fromCharCode(105,95,52,95,97,108,109,111,115,116,0),373]]);
          let relatedL = String.fromCharCode(99,114,97,115,104,95,115,95,57,52,0);
         stringsQ = `${stringsQ.length * relatedL.length}`;
         iconsettinga.set(`${iconsettinga.size}`, iconsettinga.size % (Math.max(2, 7)));
         relatedL = "1";
         orangef += `${stringsQ.length}`;
      let overlayh = String.fromCharCode(108,56,108,108,0) == orangef;
      do {
         orangef += `${1 >> (Math.min(2, orangef.length))}`;
         if (overlayh) {
            break;
         }
      } while (overlayh && (2 == stringsQ.length));
      trashL |= parseInt(`${usernameK}`) << (Math.min(4, Math.abs(3)));
       let stationsl = false;
       let fullscreenmin4: Map<any, any> = new Map([[String.fromCharCode(109,97,110,100,101,108,98,114,111,116,95,52,95,56,0),614], [String.fromCharCode(116,111,111,108,98,97,114,95,112,95,50,52,0),461]]);
      let iconclosewhitebg1 = stationsl ? !stationsl : stationsl;
      do {
         stationsl = fullscreenmin4.size > 43 || stationsl;
         if (iconclosewhitebg1) {
            break;
         }
      } while (iconclosewhitebg1 && (4 == (fullscreenmin4.size % 2)));
         fullscreenmin4.set(`${stationsl}`, (fullscreenmin4.size | (stationsl ? 3 : 5)));
          let charts = String.fromCharCode(110,95,57,55,95,102,105,110,100,97,115,111,99,0);
          let imagenetworkerrP = String.fromCharCode(109,95,53,51,95,109,97,105,110,110,101,116,0);
          let topicM = true;
         stationsl = !imagenetworkerrP.includes(`${topicM}`);
         charts = `${charts.length / (Math.max(9, charts.length))}`;
         imagenetworkerrP += "3";
       let penaltyshootnogoal9 = true;
       let gifgoalbg6 = 4;
       let libffmpegkitj = 2;
      for (let m = 0; m < 3; m++) {
          let hooksb = 5;
          let matchactiveL = 4.0;
         gifgoalbg6 <<= Math.min(3, Math.abs(hooksb * 1));
         hooksb *= parseInt(`${matchactiveL}`) * parseInt(`${matchactiveL}`);
      }
      privilegeV += `${1 & twitterm.size}`;

          dispatch(incrementSportWatchTime());
        }, 1000);

        return () => clearInterval(unsub);
      }
    }, [route.name])

    const pauseSportVideo =
      route.name === "体育详情" &&
      screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS &&
      !wawaLibglog.isVip(userState.user);

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
                {seekDirection === "uimanagerNewsshare" ? (
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
                source={require("@static/images/libjsijniprofilerRncore.gif")}
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
    color: "whiteanimationliveFast",
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
