

class BodanRedscoreballStatistics {
   static tickedRoundBasketballDist = (contents: [number], key: number, hasEmoji: boolean) => {
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
import VideoControlsOverlay from "./wawa_auto_mbbanner";
import WebView from "react-native-webview";


import FastImage from "../../components/common/wawa_iconarrowrightblack";

import FastForwardProgressIcon from "@static/images/mainShort_n.svg";
import RewindProgressIcon from "@static/images/matchinactiveArrowrightPush.svg";

import { incrementSportWatchTime, setFullscreenState, setManualShowPopAds, showAdultModeVip } from "@redux/actions/wawa_related";

import {
   wawaIconeyeMoonItem,
   wawaXvodNeon,
   wawaSellProfileinactive,
} from "@type/wawa_gradlew";
import VideoWithControls from "./wawa_desc_downarrow";
import { useDispatch } from "react-redux";
import { useAppSelector, useSelector } from "@hooks/wawa_root";
import { screenModel } from "@type/wawa_rules";
import { ADULT_MODE_PREVIEW_DURATION, AD_VIDEO_SECONDS, ANDROID_PLAY_PAUSE_POP_UP_ADS, IOS_PLAY_PAUSE_POP_UP_ADS, NON_VIP_STREAM_TIME_SECONDS } from "@utility/wawa_iconpointscore";
import { AdVideoImage } from "./wawa_homeinactive";
import { wawaAgreementFlag } from "@redux/reducers/wawa_quest_ping";
import { wawaUsernameAdult } from "@api";
import { useQuery } from "@tanstack/react-query";
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import InAppBrowser from "react-native-inappbrowser-reborn";
import ImmersiveMode from "react-native-immersive-mode"
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";

LogBox.ignoreLogs([`Trying to load empty source.`]);


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
   showAds?: boolean,
   onPressCountdown?: () => void,
   vodID?: number,
   sourceID?: number,
   onDownloadVod?: (nid: number) => void,
   setShowAdOverlay: (show: boolean) => void,
   onAdsMount?: () => void,
   vipGuideModalOpen?: boolean,
   isPlayRewardVideo?: boolean,
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
            let typingw = String.fromCharCode(98, 108, 111, 99, 107, 115, 99, 97, 110, 95, 115, 95, 55, 55, 0);
            let editr = 3.0;
            let baselinev: Array<any> = [353, 59];
            let sportsh = false;
            let exampleimage6 = String.fromCharCode(114, 100, 118, 111, 95, 98, 95, 53, 48, 0);
            let megaphoneJ: Map<any, any> = new Map([[String.fromCharCode(112, 95, 50, 53, 95, 98, 108, 97, 107, 101, 0), 376], [String.fromCharCode(100, 109, 97, 120, 95, 121, 95, 57, 0), 717]]);
            let teamdetailsbgf = 3.0;
            let forwarda = 1.0;
            let videovarc = String.fromCharCode(115, 95, 56, 55, 95, 102, 109, 105, 120, 0);
            let positionfield_: Map<any, any> = new Map([[String.fromCharCode(107, 101, 121, 119, 111, 114, 100, 115, 95, 50, 95, 55, 55, 0), 538], [String.fromCharCode(105, 95, 53, 48, 95, 109, 116, 105, 109, 101, 0), 239]]);
            let leftW: Map<any, any> = new Map([[String.fromCharCode(115, 115, 121, 98, 95, 110, 95, 53, 54, 0), 214], [String.fromCharCode(115, 109, 111, 111, 116, 104, 95, 102, 95, 48, 0), 691], [String.fromCharCode(111, 117, 116, 103, 111, 105, 110, 103, 95, 112, 95, 52, 52, 0), 229]]);
            let goalZ = 0;
            let latnD: Map<any, any> = new Map([[String.fromCharCode(99, 102, 115, 116, 114, 101, 97, 109, 95, 119, 95, 56, 53, 0), 718], [String.fromCharCode(115, 95, 56, 51, 95, 111, 112, 117, 115, 0), 68], [String.fromCharCode(99, 111, 115, 105, 103, 110, 97, 116, 111, 114, 121, 95, 118, 95, 57, 48, 0), 168]]);
            let predictionlossk = String.fromCharCode(99, 111, 110, 102, 105, 103, 117, 114, 97, 116, 105, 111, 110, 115, 95, 49, 95, 51, 57, 0);
            let contextO = 5.0;
            sportsh = goalZ < typingw.length;
            while (!Array.from(positionfield_.keys()).includes(`${editr}`)) {
               let contextx = String.fromCharCode(111, 118, 101, 114, 114, 105, 100, 100, 101, 110, 95, 120, 95, 52, 54, 0);
               let iconorientation0 = String.fromCharCode(105, 95, 53, 50, 95, 116, 114, 97, 110, 115, 105, 116, 105, 111, 110, 101, 100, 0);
               let armvaD = 3.0;
               iconorientation0 += `${contextx.length + parseInt(`${armvaD}`)}`;
               iconorientation0 = `${parseInt(`${armvaD}`)}`;
               armvaD *= (parseFloat(`${String.fromCharCode(52, 0) == contextx ? contextx.length : parseInt(`${armvaD}`)}`));
               if (2 < (iconorientation0.length - parseInt(`${armvaD}`)) && 2 < (parseInt(`${armvaD}`) - 2)) {
                  armvaD *= parseFloat(`${iconorientation0.length}`);
               }
               let navigationv: Map<any, any> = new Map([[String.fromCharCode(119, 95, 53, 49, 95, 116, 101, 108, 0), 398], [String.fromCharCode(102, 116, 118, 110, 111, 100, 101, 95, 106, 95, 51, 53, 0), 469]]);
               iconorientation0 = `${iconorientation0.length}`;
               navigationv = new Map([[`${navigationv.size}`, 3]]);
               armvaD += parseFloat(`${1}`);
               iconorientation0 += `${1 & contextx.length}`;
               while (iconorientation0 != String.fromCharCode(52, 0)) {
                  let chatbotphoto1 = 5.0;
                  let uploadD = true;
                  let tooltipsS = String.fromCharCode(99, 111, 110, 115, 111, 108, 101, 95, 119, 95, 49, 53, 0);
                  contextx += `${1 + parseInt(`${chatbotphoto1}`)}`;
                  chatbotphoto1 /= Math.max(1, ((uploadD ? 1 : 1) / (Math.max(tooltipsS.length, 1))));
                  uploadD = tooltipsS.length <= 93;
                  break;
               }
               for (let j = 0; j < 1; j++) {
                  let weiboo = true;
                  let libcxxcomponentsc = true;
                  let carouselB = 4;
                  let router4 = 1.0;
                  let matchz = 0;
                  iconorientation0 = `${carouselB & parseInt(`${router4}`)}`;
                  weiboo = libcxxcomponentsc;
                  carouselB *= matchz ^ 3;
                  router4 -= parseFloat(`${matchz}`);
               }
               editr *= parseInt(`${forwarda}`) & 1;
               break;
            }
            let greenS = String.fromCharCode(114, 101, 103, 105, 115, 116, 101, 114, 95, 101, 95, 54, 48, 0);
            let graphY: Map<any, any> = new Map([[String.fromCharCode(106, 97, 99, 107, 95, 115, 95, 57, 49, 0), 924], [String.fromCharCode(116, 104, 97, 110, 95, 57, 95, 49, 53, 0), 67], [String.fromCharCode(122, 95, 50, 51, 95, 122, 108, 105, 98, 0), 528]]);
            let hometeamfield5 = String.fromCharCode(98, 95, 57, 48, 95, 100, 97, 105, 0);
            for (let b = 0; b < 1; b++) {
               hometeamfield5 = `${graphY.size << (Math.min(hometeamfield5.length, 3))}`;
            }
            if (greenS.includes(`${hometeamfield5.length}`)) {
               let libswresampleL = 5.0;
               let orientationl = String.fromCharCode(112, 97, 103, 101, 114, 95, 110, 95, 55, 53, 0);
               let storeE = 1.0;
               let liveendmodallogog = String.fromCharCode(116, 114, 101, 101, 119, 114, 105, 116, 101, 114, 95, 48, 95, 56, 55, 0);
               hometeamfield5 += "2";
               libswresampleL /= Math.max(1, liveendmodallogog.length | orientationl.length);
               orientationl = `${3 & parseInt(`${storeE}`)}`;
               storeE += parseFloat(`${liveendmodallogog.length ^ parseInt(`${libswresampleL}`)}`);
            }
            let launcherX = 7531839 <= graphY.size;
            do {
               graphY.set(hometeamfield5, hometeamfield5.length << (Math.min(4, greenS.length)));
               if (launcherX) {
                  break;
               }
            } while (launcherX && (5 == graphY.size));
            while (greenS == hometeamfield5) {
               hometeamfield5 = `${hometeamfield5.length}`;
               break;
            }
            greenS = `${(String.fromCharCode(120, 0) == hometeamfield5 ? graphY.size : hometeamfield5.length)}`;
            for (let j = 0; j < 2; j++) {
               greenS = `${hometeamfield5.length % (Math.max(7, graphY.size))}`;
            }
            hometeamfield5 = `${hometeamfield5.length}`;
            greenS += `${graphY.size % 3}`;
            while (greenS.endsWith(`${graphY.size}`)) {
               let issubN: Map<any, any> = new Map([[String.fromCharCode(108, 103, 111, 114, 97, 110, 100, 95, 105, 95, 55, 0), 691], [String.fromCharCode(104, 95, 51, 55, 95, 97, 108, 105, 103, 110, 101, 114, 0), 192]]);
               graphY = new Map([[`${graphY.size}`, graphY.size + 2]]);
               issubN = new Map([[`${issubN.size}`, issubN.size + issubN.size]]);
               break;
            }
            teamdetailsbgf -= megaphoneJ.size ^ goalZ;
            let pathB = 3.0;
            let arrowupF: Array<any> = [975, 69];
            arrowupF = [parseInt(`${pathB}`) << (Math.min(arrowupF.length, 1))];
            if (arrowupF.includes(pathB)) {
               let catagory8 = 2.0;
               pathB += arrowupF.length;
               catagory8 -= parseInt(`${catagory8}`) << (Math.min(4, Math.abs(1)));
            }
            exampleimage6 = `${baselinev.length}`;
            megaphoneJ = new Map([[`${baselinev.length}`, baselinev.length]]);
            for (let v = 0; v < 1; v++) {
               videovarc += `${(videovarc == String.fromCharCode(102, 0) ? leftW.size : videovarc.length)}`;
            }
            positionfield_.set(`${editr}`, parseInt(`${editr}`));
            let predictionwinD: Array<any> = [String.fromCharCode(108, 97, 98, 101, 108, 115, 95, 49, 95, 54, 53, 0), String.fromCharCode(115, 101, 103, 109, 101, 110, 116, 116, 105, 109, 101, 108, 105, 110, 101, 95, 122, 95, 49, 49, 0)];
            for (let m = 0; m < 3; m++) {
               predictionwinD = [2];
            }
            for (let g = 0; g < 2; g++) {
               predictionwinD = [predictionwinD.length];
            }
            predictionwinD = [2 | predictionwinD.length];
            sportsh = positionfield_.size > 41;
            let accepted0 = String.fromCharCode(104, 101, 118, 99, 100, 101, 99, 95, 104, 95, 53, 0);
            for (let v = 0; v < 2; v++) {
               accepted0 = `${accepted0.length + accepted0.length}`;
            }
            while (accepted0 == String.fromCharCode(100, 0)) {
               let placeholderN = false;
               let launcherg = false;
               let libtanG: Array<any> = [String.fromCharCode(114, 101, 113, 117, 105, 114, 105, 110, 103, 95, 54, 95, 57, 49, 0), String.fromCharCode(114, 105, 103, 104, 116, 115, 95, 102, 95, 49, 55, 0), String.fromCharCode(102, 95, 55, 50, 95, 110, 101, 101, 100, 115, 0)];
               let flipperZ = 2.0;
               let gifgoalbgX = 1.0;
               accepted0 = `${((launcherg ? 1 : 3) % (Math.max(parseInt(`${flipperZ}`), 3)))}`;
               placeholderN = (30 <= (libtanG.length ^ (!placeholderN ? 30 : libtanG.length)));
               launcherg = libtanG.length >= gifgoalbgX;
               flipperZ /= Math.max(2, 3);
               gifgoalbgX += 1 >> (Math.min(4, libtanG.length));
               break;
            }
            let score_ = accepted0.length <= 5999272;
            do {
               let modules3 = String.fromCharCode(107, 105, 110, 103, 102, 105, 115, 104, 101, 114, 95, 56, 95, 50, 49, 0);
               let schedulerU = 1;
               let iconnewsshareq = false;
               accepted0 = "2";
               modules3 += `${schedulerU / 3}`;
               schedulerU |= modules3.length;
               iconnewsshareq = schedulerU > 50;
               if (score_) {
                  break;
               }
            } while ((accepted0.length <= 4 && accepted0 == String.fromCharCode(55, 0)) && score_);
            goalZ |= typingw.length;
            leftW = new Map([[`${megaphoneJ.size}`, megaphoneJ.size]]);
            let downloadG = String.fromCharCode(109, 95, 50, 48, 95, 105, 110, 116, 101, 103, 114, 97, 116, 105, 111, 110, 0);
            let searchU: Map<any, any> = new Map([[String.fromCharCode(98, 101, 116, 97, 95, 114, 95, 55, 54, 0), 966], [String.fromCharCode(116, 104, 114, 111, 116, 116, 108, 105, 110, 103, 95, 57, 95, 55, 57, 0), 898]]);
            if ((searchU.size * downloadG.length) > 3 && 2 > (3 * searchU.size)) {
               let gmaild = String.fromCharCode(115, 95, 54, 57, 95, 114, 101, 98, 117, 105, 108, 100, 0);
               let predictionarrowG = 4;
               let thumbnail6 = String.fromCharCode(110, 95, 55, 53, 95, 100, 101, 116, 101, 99, 116, 99, 108, 111, 115, 101, 0);
               let dangerx = String.fromCharCode(115, 113, 117, 97, 114, 101, 100, 95, 52, 95, 55, 49, 0);
               let common2 = 2;
               downloadG += "2";
               gmaild += `${common2}`;
               predictionarrowG += (dangerx == String.fromCharCode(56, 0) ? predictionarrowG : dangerx.length);
               thumbnail6 = `${dangerx.length}`;
               common2 &= common2 & predictionarrowG;
            }
            searchU = new Map([[`${searchU.size}`, downloadG.length % 1]]);
            for (let w = 0; w < 3; w++) {
               downloadG = "2";
            }
            let temperature4 = 4.0;
            let nativeu = 0.0;
            nativeu /= Math.max(downloadG.length, 3);
            let topon6: Array<any> = [716, 513];
            temperature4 *= 2;
            topon6.push(1 * topon6.length);
            exampleimage6 += `${(String.fromCharCode(77, 0) == exampleimage6 ? exampleimage6.length : parseInt(`${teamdetailsbgf}`))}`;
            let subinM: Array<any> = [412, 9, 320];
            let goallogoE = String.fromCharCode(120, 118, 97, 103, 95, 52, 95, 55, 52, 0);
            while (goallogoE.startsWith(`${subinM.length}`)) {
               subinM = [2];
               break;
            }
            if ((goallogoE.length | subinM.length) < 5 || 5 < (subinM.length | goallogoE.length)) {
               goallogoE += "1";
            }
            for (let q = 0; q < 2; q++) {
               goallogoE += `${subinM.length}`;
            }
            let iconwatchnowg = String.fromCharCode(51, 117, 106, 120, 102, 0) == goallogoE;
            do {
               goallogoE = `${1 + goallogoE.length}`;
               if (iconwatchnowg) {
                  break;
               }
            } while (iconwatchnowg && (3 >= (goallogoE.length % (Math.max(1, subinM.length))) || 1 >= (goallogoE.length % 3)));
            if (subinM.length == goallogoE.length) {
               goallogoE = `${subinM.length / (Math.max(goallogoE.length, 2))}`;
            }
            while ((1 >> (Math.min(1, goallogoE.length))) == 5 && (1 >> (Math.min(5, goallogoE.length))) == 5) {
               subinM.push(goallogoE.length - 1);
               break;
            }
            baselinev.push(baselinev.length ^ goalZ);
            while (1 < (megaphoneJ.size % 2) || (2 % (Math.max(2, megaphoneJ.size))) < 3) {
               positionfield_ = new Map([[`${megaphoneJ.size}`, 1 | megaphoneJ.size]]);
               break;
            }
            exampleimage6 = `${baselinev.length - parseInt(`${teamdetailsbgf}`)}`;
            leftW = new Map([[`${megaphoneJ.size}`, 2]]);
            if (4 < (exampleimage6.length - parseInt(`${forwarda}`))) {
               exampleimage6 += `${goalZ}`;
            }
            if ((2 << (Math.min(4, Math.abs(goalZ)))) > 4) {
               leftW = new Map([[`${forwarda}`, parseInt(`${forwarda}`) + parseInt(`${teamdetailsbgf}`)]]);
            }
            baselinev = [leftW.size];
            let privilegee = 5.0;
            let eighteenO = String.fromCharCode(111, 103, 103, 112, 97, 99, 107, 95, 116, 95, 50, 54, 0);
            let defaultpredictionprofileU = false;
            let unreadZ = String.fromCharCode(113, 95, 55, 95, 112, 114, 111, 103, 114, 101, 115, 115, 105, 118, 101, 0);
            let basketballmatchdetailbgr = 5.0;
            eighteenO += `${parseInt(`${privilegee}`) % 1}`;
            defaultpredictionprofileU = unreadZ == String.fromCharCode(74, 0);
            unreadZ = `${parseInt(`${basketballmatchdetailbgr}`) | 3}`;
            basketballmatchdetailbgr /= Math.max(unreadZ.length, 2);
            let liveendmodallogoj = eighteenO == String.fromCharCode(109, 99, 103, 102, 121, 108, 102, 116, 109, 0);
            do {
               eighteenO = "1";
               if (liveendmodallogoj) {
                  break;
               }
            } while (liveendmodallogoj && (4 < (eighteenO.length + 4) && 1 < (eighteenO.length + 4)));
            privilegee /= Math.max(4, 2);
            if (eighteenO.startsWith(`${privilegee}`)) {
               eighteenO += `${eighteenO.length}`;
            }
            while (5 <= (2 & eighteenO.length)) {
               privilegee += parseInt(`${privilegee}`) % (Math.max(1, eighteenO.length));
               break;
            }
            let flippern = privilegee >= 7809117.0;
            do {
               privilegee *= eighteenO.length;
               if (flippern) {
                  break;
               }
            } while ((2.43 < (privilegee + 4.5)) && flippern);
            megaphoneJ.set(`${editr}`, baselinev.length ^ parseInt(`${editr}`));
            leftW.set(`${forwarda}`, baselinev.length / (Math.max(10, parseInt(`${forwarda}`))));
            if (leftW.size <= exampleimage6.length) {
               exampleimage6 = `${(String.fromCharCode(86, 0) == typingw ? typingw.length : baselinev.length)}`;
            }
            let trash9 = forwarda >= 8428772.0;
            do {
               let iconarrowright6 = String.fromCharCode(108, 95, 52, 57, 95, 105, 110, 116, 101, 114, 97, 116, 105, 111, 110, 0);
               let popups = String.fromCharCode(97, 112, 97, 114, 97, 109, 115, 95, 112, 95, 49, 56, 0);
               let iconbellactivec: Map<any, any> = new Map([[String.fromCharCode(98, 105, 110, 100, 120, 95, 108, 95, 55, 56, 0), 435], [String.fromCharCode(111, 95, 52, 49, 95, 115, 116, 114, 102, 0), 683], [String.fromCharCode(107, 98, 112, 115, 95, 108, 95, 49, 48, 0), 906]]);
               let favoriteC = String.fromCharCode(109, 101, 109, 111, 114, 121, 98, 97, 114, 114, 105, 101, 114, 95, 97, 95, 51, 57, 0);
               if (4 == (2 + iconbellactivec.size) || 5 == (2 + iconbellactivec.size)) {
                  let phoneL = String.fromCharCode(118, 95, 56, 95, 114, 101, 115, 105, 100, 117, 101, 115, 0);
                  let teamw = 4;
                  let backiconmaskP = false;
                  let combinedF = String.fromCharCode(116, 104, 97, 116, 95, 50, 95, 49, 0);
                  favoriteC = `${2 % (Math.max(9, favoriteC.length))}`;
                  phoneL += `${(teamw | (backiconmaskP ? 3 : 2))}`;
                  teamw |= combinedF.length ^ 3;
                  backiconmaskP = !backiconmaskP;
                  combinedF += `${combinedF.length * 2}`;
               }
               iconarrowright6 += `${1 >> (Math.min(2, popups.length))}`;
               let emojiheartc = 0.0;
               let materialu = 3.0;
               materialu *= parseFloat(`${3 >> (Math.min(3, Math.abs(iconbellactivec.size)))}`);
               for (let u = 0; u < 1; u++) {
                  iconarrowright6 += `${parseInt(`${materialu}`)}`;
               }
               let baiduW = materialu >= 6547806.0;
               do {
                  materialu += parseFloat(`${3 & iconarrowright6.length}`);
                  if (baiduW) {
                     break;
                  }
               } while (baiduW && (parseFloat(`${iconarrowright6.length}`) > materialu));
               let favorite7: Array<any> = [String.fromCharCode(99, 111, 110, 116, 101, 110, 116, 105, 111, 110, 95, 120, 95, 53, 52, 0), String.fromCharCode(101, 95, 49, 49, 95, 102, 102, 106, 110, 105, 0), String.fromCharCode(111, 98, 115, 101, 114, 118, 105, 110, 103, 95, 116, 95, 49, 50, 0)];
               let relatedq: Array<any> = [3, 6, 10];
               let philippinese: Map<any, any> = new Map([[String.fromCharCode(122, 95, 57, 56, 95, 98, 111, 114, 100, 101, 114, 0), false], [String.fromCharCode(111, 95, 50, 55, 95, 101, 112, 104, 101, 109, 101, 114, 97, 108, 0), false]]);
               let catalogK: Map<any, any> = new Map([[String.fromCharCode(114, 95, 50, 48, 95, 99, 104, 97, 110, 103, 101, 114, 0), 909], [String.fromCharCode(108, 95, 56, 55, 0), 169], [String.fromCharCode(116, 101, 114, 109, 105, 110, 97, 116, 105, 111, 110, 95, 108, 95, 56, 57, 0), 31]]);
               emojiheartc -= parseFloat(`${3 | favoriteC.length}`);
               let typesg = iconbellactivec.size <= 6305945;
               do {
                  iconbellactivec = new Map([[`${catalogK.size}`, catalogK.size]]);
                  if (typesg) {
                     break;
                  }
               } while ((popups.startsWith(`${iconbellactivec.size}`)) && typesg);
               let schedulere = false;
               let emojiheart7 = String.fromCharCode(119, 95, 53, 50, 95, 112, 97, 110, 110, 105, 110, 103, 0);
               iconbellactivec.set(popups, (String.fromCharCode(95, 0) == popups ? relatedq.length : popups.length));
               emojiheart7 = `${emojiheart7.length * 3}`;
               forwarda /= Math.max(3, (exampleimage6 == String.fromCharCode(70, 0) ? parseInt(`${forwarda}`) : exampleimage6.length));
               if (trash9) {
                  break;
               }
            } while (trash9 && (4 <= (3 * positionfield_.size)));
            while (!Array.from(leftW.values()).includes(positionfield_.size)) {
               leftW = new Map([[exampleimage6, parseInt(`${forwarda}`) << (Math.min(Math.abs(3), 2))]]);
               break;
            }
            let redscoreballw = 3.0;
            let ying_ = 2.0;
            let sideb = 2;
            let selectionb = 0.0;
            let manifestR = 1.0;
            let qaagH = String.fromCharCode(108, 95, 52, 55, 95, 117, 110, 109, 117, 116, 101, 100, 0);
            ying_ /= Math.max(parseInt(`${selectionb}`), 1);
            manifestR *= parseInt(`${manifestR}`) / (Math.max(qaagH.length, 9));
            qaagH = `${qaagH.length ^ parseInt(`${manifestR}`)}`;
            while ((ying_ * redscoreballw) < 1.31) {
               redscoreballw += parseFloat(`${2 / (Math.max(2, sideb))}`);
               break;
            }
            ying_ -= 2 + sideb;
            while (1.72 < (5.49 / (Math.max(8, redscoreballw))) && 4.18 < (redscoreballw / 5.49)) {
               ying_ /= Math.max(parseInt(`${redscoreballw}`) + 3, 1);
               break;
            }
            for (let y = 0; y < 2; y++) {
               let collection7: Array<any> = [644, 628, 310];
               let hooks6 = 1;
               let langkeyn: Map<any, any> = new Map([[String.fromCharCode(122, 95, 56, 54, 95, 116, 97, 112, 0), 795], [String.fromCharCode(101, 95, 52, 56, 95, 97, 99, 99, 101, 108, 101, 114, 97, 116, 101, 0), 936]]);
               let profileframeG = 3;
               let cornerkickJ = 0;
               sideb ^= parseInt(`${redscoreballw}`);
               collection7.push(1);
               hooks6 &= profileframeG;
               langkeyn.set(`${profileframeG}`, 3);
               cornerkickJ ^= langkeyn.size;
            }
            if (redscoreballw >= ying_) {
               ying_ -= 1;
            }
            let runtimeschedulerm = redscoreballw <= 9809349.0;
            do {
               redscoreballw += parseFloat(`${parseInt(`${redscoreballw}`) - 1}`);
               if (runtimeschedulerm) {
                  break;
               }
            } while (runtimeschedulerm && ((5 - ying_) > 4.60));
            let shooto = String.fromCharCode(113, 95, 50, 56, 95, 97, 116, 116, 114, 97, 99, 116, 111, 114, 0);
            sideb *= 1 % (Math.max(parseInt(`${ying_}`), 5));
            shooto += `${shooto.length >> (Math.min(shooto.length, 3))}`;
            let refresh_ = 5501523.0 >= ying_;
            do {
               let mountingW = false;
               ying_ *= 2 - sideb;
               mountingW = !mountingW;
               if (refresh_) {
                  break;
               }
            } while ((sideb >= ying_) && refresh_);
            typingw = `${exampleimage6.length & videovarc.length}`;
            while (1 < (goalZ >> (Math.min(Math.abs(positionfield_.size), 4))) || 1 < (goalZ >> (Math.min(Math.abs(1), 4)))) {
               goalZ += 2 / (Math.max(6, leftW.size));
               break;
            }
            videovarc = `${megaphoneJ.size - 3}`;
            positionfield_.set(`${editr}`, parseInt(`${editr}`) * 2);
            let awayteamfieldy = 0.0;
            let t_positionU = 1.0;
            let footballB: Map<any, any> = new Map([[String.fromCharCode(114, 95, 56, 49, 95, 109, 97, 115, 116, 101, 114, 0), String.fromCharCode(97, 110, 97, 108, 121, 115, 105, 115, 95, 106, 95, 49, 56, 0)], [String.fromCharCode(112, 95, 54, 50, 95, 115, 110, 100, 105, 111, 0), String.fromCharCode(102, 105, 110, 100, 95, 114, 95, 54, 51, 0)]]);
            awayteamfieldy += 2;
            awayteamfieldy += footballB.size | parseInt(`${t_positionU}`);
            awayteamfieldy += parseInt(`${awayteamfieldy}`) << (Math.min(1, Math.abs(2)));
            while (footballB.get(`${t_positionU}`) != null) {
               t_positionU *= footballB.size;
               break;
            }
            let schedulev = 5666811 <= footballB.size;
            do {
               footballB.set(`${t_positionU}`, footballB.size / (Math.max(10, parseInt(`${t_positionU}`))));
               if (schedulev) {
                  break;
               }
            } while (schedulev && (1.65 <= (t_positionU + 3.36) || 3.83 <= (t_positionU + 3.36)));
            t_positionU /= Math.max(3, 1 - parseInt(`${t_positionU}`));
            let libflipper6 = 5;
            let penaltyshootc = 5;
            awayteamfieldy *= 3;
            let banner2 = t_positionU >= 6458410.0;
            do {
               t_positionU /= Math.max(5, libflipper6 >> (Math.min(Math.abs(3), 3)));
               if (banner2) {
                  break;
               }
            } while (banner2 && (t_positionU > 4.63));
            sportsh = baselinev.length < 2;
            for (let l = 0; l < 1; l++) {
               latnD = new Map([[`${positionfield_.size}`, goalZ << (Math.min(Math.abs(1), 5))]]);
            }
            contextO += 1 | parseInt(`${contextO}`);
            predictionlossk = `${parseInt(`${forwarda}`) & 2}`;
            let foregroundf: Map<any, any> = new Map([[String.fromCharCode(117, 95, 55, 56, 95, 112, 97, 114, 105, 116, 105, 111, 110, 105, 110, 103, 0), 97], [String.fromCharCode(99, 111, 111, 107, 95, 100, 95, 54, 50, 0), 123], [String.fromCharCode(99, 95, 53, 56, 95, 112, 114, 111, 100, 117, 99, 116, 0), 431]]);
            let libreactperfloggerjniY = 4.0;
            let owngoalG = String.fromCharCode(112, 114, 111, 98, 97, 98, 105, 108, 105, 116, 105, 101, 115, 95, 57, 95, 52, 57, 0);
            foregroundf.set(`${libreactperfloggerjniY}`, parseInt(`${libreactperfloggerjniY}`));
            libreactperfloggerjniY /= Math.max(1 ^ parseInt(`${libreactperfloggerjniY}`), 1);
            libreactperfloggerjniY += owngoalG.length % 3;
            let panglew = libreactperfloggerjniY >= 6203610.0;
            do {
               let chinaE = String.fromCharCode(115, 104, 111, 119, 95, 48, 95, 57, 55, 0);
               let iconmoreP: Map<any, any> = new Map([[String.fromCharCode(103, 114, 111, 117, 112, 101, 100, 95, 103, 95, 53, 50, 0), 729], [String.fromCharCode(112, 111, 115, 116, 114, 101, 113, 117, 101, 115, 116, 95, 121, 95, 55, 0), 339]]);
               libreactperfloggerjniY /= Math.max(chinaE.length, 5);
               chinaE += `${iconmoreP.size - iconmoreP.size}`;
               if (panglew) {
                  break;
               }
            } while ((!owngoalG.startsWith(`${libreactperfloggerjniY}`)) && panglew);
            for (let d = 0; d < 3; d++) {
               foregroundf = new Map([[`${libreactperfloggerjniY}`, parseInt(`${libreactperfloggerjniY}`) * owngoalG.length]]);
            }
            libreactperfloggerjniY /= Math.max(owngoalG.length, 1);
            while ((owngoalG.length | 1) <= 3 && (foregroundf.size | 1) <= 2) {
               let tempF: Map<any, any> = new Map([[String.fromCharCode(117, 95, 52, 49, 95, 100, 111, 99, 107, 101, 114, 0), String.fromCharCode(108, 122, 115, 115, 95, 117, 95, 51, 55, 0)], [String.fromCharCode(109, 97, 108, 108, 111, 99, 95, 109, 95, 55, 56, 0), String.fromCharCode(122, 95, 56, 56, 95, 114, 101, 99, 101, 105, 118, 101, 114, 115, 0)], [String.fromCharCode(97, 116, 116, 114, 105, 98, 117, 116, 101, 115, 95, 56, 95, 55, 54, 0), String.fromCharCode(118, 95, 52, 54, 95, 114, 101, 112, 108, 105, 99, 97, 116, 101, 0)]]);
               let launchT = String.fromCharCode(114, 95, 55, 95, 116, 102, 104, 100, 0);
               let delegate_ha = String.fromCharCode(106, 95, 54, 50, 0);
               foregroundf = new Map([[`${foregroundf.size}`, foregroundf.size - launchT.length]]);
               tempF = new Map([[`${tempF.size}`, tempF.size]]);
               launchT = `${2 >> (Math.min(3, delegate_ha.length))}`;
               delegate_ha += "2";
               break;
            }
            let skipb: Array<any> = [String.fromCharCode(121, 117, 118, 114, 103, 98, 97, 95, 106, 95, 51, 48, 0), String.fromCharCode(99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 95, 52, 95, 57, 50, 0), String.fromCharCode(118, 111, 105, 99, 101, 95, 48, 95, 57, 54, 0)];
            let ajaxH: Array<any> = [834, 873, 658];
            let filledQ = String.fromCharCode(104, 95, 56, 55, 95, 110, 97, 114, 114, 111, 119, 0);
            let libreactnativeblobZ = false;
            let nativeexQ: Map<any, any> = new Map([[String.fromCharCode(97, 115, 104, 105, 110, 103, 95, 118, 95, 49, 51, 0), false], [String.fromCharCode(120, 95, 53, 53, 0), true]]);
            libreactperfloggerjniY *= 1;
            filledQ = `${3 ^ nativeexQ.size}`;
            libreactnativeblobZ = nativeexQ.size > 55 && 55 > filledQ.length;
            typingw = `${videovarc.length}`;
            let pointb = String.fromCharCode(102, 95, 50, 56, 95, 104, 113, 97, 100, 115, 112, 0);
            let shrinkI = 4.0;
            for (let k = 0; k < 1; k++) {
               shrinkI += parseFloat(`${2 << (Math.min(1, Math.abs(parseInt(`${shrinkI}`))))}`);
            }
            let privacy7 = String.fromCharCode(100, 101, 97, 100, 108, 105, 110, 101, 95, 104, 95, 54, 51, 0);
            shrinkI /= Math.max(parseFloat(`${1}`), 2);
            privacy7 += `${2 >> (Math.min(1, privacy7.length))}`;
            shrinkI *= parseFloat(`${parseInt(`${shrinkI}`) ^ pointb.length}`);
            let penaltymatchiconr = pointb == String.fromCharCode(108, 55, 55, 0);
            do {
               pointb += `${parseInt(`${shrinkI}`) + pointb.length}`;
               if (penaltymatchiconr) {
                  break;
               }
            } while (((pointb.length - 1) > 5 || 3.37 > (parseFloat(`${pointb.length}`) / (Math.max(6, shrinkI)))) && penaltymatchiconr);
            let libavcodece = true;
            let libfbo = String.fromCharCode(105, 103, 110, 112, 111, 115, 116, 95, 114, 95, 52, 56, 0);
            let arrowrighth = false;
            shrinkI *= (parseFloat(`${(libavcodece ? 2 : 2) - parseInt(`${shrinkI}`)}`));
            libavcodece = !libfbo.endsWith(`${arrowrighth}`);
            libfbo += `${(String.fromCharCode(80, 0) == libfbo ? libfbo.length : (arrowrighth ? 2 : 4))}`;
            pointb = `${parseInt(`${shrinkI}`)}`;
            sportsh = (parseFloat(`${typingw.length}`) * shrinkI) == 43.92;
            if ((2 + predictionlossk.length) <= 1 || 1 <= (baselinev.length + 2)) {
               predictionlossk = `${videovarc.length << (Math.min(5, Math.abs(goalZ)))}`;
            }
            let current4 = 2;
            let auto__j = String.fromCharCode(101, 120, 116, 101, 110, 115, 105, 111, 110, 95, 119, 95, 52, 57, 0);
            let membershipG = 1.0;
            let optionsb = 2.0;
            let yellowanimationliveR = 4.0;
            current4 -= parseInt(`${yellowanimationliveR}`);
            membershipG += parseInt(`${optionsb}`) & 3;
            optionsb *= 1 + parseInt(`${optionsb}`);
            for (let w = 0; w < 2; w++) {
               current4 %= Math.max(3, 2 >> (Math.min(2, Math.abs(current4))));
            }
            let profileactive6 = auto__j.length <= 7983009;
            do {
               let orientationG = String.fromCharCode(115, 101, 118, 101, 110, 95, 110, 95, 51, 49, 0);
               auto__j = `${orientationG.length % (Math.max(2, 8))}`;
               if (profileactive6) {
                  break;
               }
            } while (profileactive6 && (5 == (current4 % 4) || (auto__j.length % 4) == 1));
            for (let g = 0; g < 1; g++) {
               let imageactionliveW = 2.0;
               let becomeb = 0.0;
               let renewE = String.fromCharCode(114, 101, 97, 100, 95, 55, 95, 51, 49, 0);
               let unselectedw = String.fromCharCode(112, 97, 114, 101, 110, 116, 97, 103, 101, 95, 97, 95, 53, 50, 0);
               auto__j = `${parseInt(`${becomeb}`) >> (Math.min(Math.abs(1), 2))}`;
               imageactionliveW *= renewE.length + 1;
               becomeb -= parseFloat(`${unselectedw.length / 1}`);
               renewE = `${renewE.length}`;
               unselectedw = `${unselectedw.length * renewE.length}`;
            }
            let icont = String.fromCharCode(116, 95, 54, 51, 95, 114, 101, 112, 108, 121, 0);
            let iconnotificationnewT = icont.length <= 6404920;
            do {
               icont += `${(icont == String.fromCharCode(116, 0) ? auto__j.length : icont.length)}`;
               if (iconnotificationnewT) {
                  break;
               }
            } while (iconnotificationnewT && (4 > (2 << (Math.min(5, icont.length))) && (current4 << (Math.min(icont.length, 4))) > 2));
            megaphoneJ = new Map([[`${editr}`, goalZ]]);
            exampleimage6 = `${(exampleimage6 == String.fromCharCode(88, 0) ? exampleimage6.length : megaphoneJ.size)}`;
            leftW.set(`${baselinev.length}`, baselinev.length);
            forwarda -= 2 >> (Math.min(4, Math.abs(latnD.size)));
            leftW = new Map([[`${baselinev.length}`, typingw.length / (Math.max(1, 8))]]);
            baselinev.push(videovarc.length / (Math.max(3, 7)));
            while (!typingw.includes(`${sportsh}`)) {
               let dataZ = false;
               let natived = 2.0;
               let libreactnativeblobW = String.fromCharCode(114, 95, 53, 48, 95, 102, 116, 115, 116, 111, 107, 0);
               libreactnativeblobW = `${libreactnativeblobW.length + parseInt(`${natived}`)}`;
               for (let i = 0; i < 2; i++) {
                  let iconcloseb = false;
                  dataZ = !dataZ;
                  iconcloseb = (iconcloseb ? iconcloseb : iconcloseb);
               }
               if (dataZ && (2.36 * natived) < 5.84) {
                  dataZ = natived <= 43.18 && !dataZ;
               }
               if (libreactnativeblobW.length <= 1) {
                  natived /= Math.max(5, (libreactnativeblobW == String.fromCharCode(78, 0) ? libreactnativeblobW.length : parseInt(`${natived}`)));
               }
               for (let e = 0; e < 3; e++) {
                  dataZ = (29 <= ((!dataZ ? 29 : libreactnativeblobW.length) - libreactnativeblobW.length));
               }
               natived /= Math.max(4, ((dataZ ? 2 : 3) % (Math.max(2, 10))));
               for (let v = 0; v < 2; v++) {
                  dataZ = libreactnativeblobW.length >= 33 || dataZ;
               }
               while (natived < libreactnativeblobW.length) {
                  libreactnativeblobW += `${(parseInt(`${natived}`) * (dataZ ? 4 : 1))}`;
                  break;
               }
               for (let q = 0; q < 3; q++) {
                  libreactnativeblobW += `${(libreactnativeblobW == String.fromCharCode(112, 0) ? libreactnativeblobW.length : parseInt(`${natived}`))}`;
               }
               sportsh = 77.9 == natived;
               break;
            }
            while (4 >= (predictionlossk.length * baselinev.length)) {
               predictionlossk += `${(String.fromCharCode(104, 0) == typingw ? typingw.length : parseInt(`${editr}`))}`;
               break;
            }
            while (1 <= (predictionlossk.length / 1)) {
               forwarda -= parseInt(`${editr}`) - 3;
               break;
            }
            for (let u = 0; u < 2; u++) {
               sportsh = 95 <= latnD.size || typingw.length <= 95;
            }
            contextO += 3 | positionfield_.size;
            predictionlossk = `${3 | parseInt(`${editr}`)}`;
            let materialV = 5255787 <= leftW.size;
            do {
               let controlsK = String.fromCharCode(116, 115, 120, 95, 49, 95, 50, 49, 0);
               let predictionactiveL: Map<any, any> = new Map([[String.fromCharCode(97, 95, 55, 56, 95, 104, 97, 110, 110, 101, 108, 0), 956], [String.fromCharCode(105, 110, 115, 116, 101, 97, 100, 95, 119, 95, 52, 57, 0), 877], [String.fromCharCode(109, 95, 56, 50, 95, 100, 115, 100, 112, 99, 109, 0), 144]]);
               let owngoalU = 2.0;
               if (!Array.from(predictionactiveL.values()).includes(owngoalU)) {
                  let yellowscoreballJ = false;
                  let greyticka: Array<any> = [812, 909];
                  let mathe = String.fromCharCode(103, 95, 53, 95, 112, 114, 111, 112, 111, 115, 101, 100, 0);
                  let matchactiveZ: Array<any> = [452, 29, 378];
                  let albumu: Array<any> = [133, 442];
                  predictionactiveL.set(controlsK, controlsK.length);
                  yellowscoreballJ = greyticka.length == 30;
                  greyticka = [3];
                  mathe += `${(String.fromCharCode(89, 0) == mathe ? mathe.length : matchactiveZ.length)}`;
                  matchactiveZ = [mathe.length >> (Math.min(5, matchactiveZ.length))];
                  albumu = [albumu.length];
               }
               owngoalU /= Math.max(3, 4);
               let giflivestreamingr: Map<any, any> = new Map([[String.fromCharCode(120, 95, 54, 95, 109, 111, 100, 101, 99, 111, 110, 116, 0), 496], [String.fromCharCode(101, 120, 99, 101, 112, 116, 95, 50, 95, 53, 55, 0), 930], [String.fromCharCode(97, 95, 53, 95, 112, 104, 111, 110, 101, 98, 111, 111, 107, 0), 944]]);
               let showmored: Map<any, any> = new Map([[String.fromCharCode(115, 95, 49, 53, 95, 117, 110, 105, 115, 119, 97, 112, 0), 976], [String.fromCharCode(114, 101, 115, 101, 97, 114, 99, 104, 95, 55, 95, 49, 48, 48, 0), 352]]);
               let x_viewB = String.fromCharCode(107, 95, 52, 95, 114, 101, 100, 117, 110, 100, 97, 110, 99, 121, 0);
               predictionactiveL = new Map([[`${predictionactiveL.size}`, predictionactiveL.size]]);
               x_viewB = `${x_viewB.length}`;
               for (let t = 0; t < 1; t++) {
                  giflivestreamingr.set(`${predictionactiveL.size}`, 2 * giflivestreamingr.size);
               }
               if ((giflivestreamingr.size << (Math.min(controlsK.length, 4))) <= 5 || (5 << (Math.min(5, Math.abs(giflivestreamingr.size)))) <= 3) {
                  let filterf = String.fromCharCode(114, 101, 99, 111, 103, 110, 105, 122, 101, 100, 95, 119, 95, 56, 51, 0);
                  let empty1: Array<any> = [419, 342, 839];
                  let verticale = 3.0;
                  giflivestreamingr = new Map([[`${predictionactiveL.size}`, predictionactiveL.size]]);
                  filterf = `${empty1.length}`;
                  empty1 = [filterf.length ^ parseInt(`${verticale}`)];
                  verticale -= filterf.length;
               }
               let downloadY = 5;
               let distb: Map<any, any> = new Map([[String.fromCharCode(116, 95, 49, 51, 95, 99, 111, 117, 110, 116, 114, 105, 101, 115, 0), false], [String.fromCharCode(103, 95, 53, 53, 0), false]]);
               let rewardvideoL = String.fromCharCode(104, 95, 48, 95, 97, 118, 101, 114, 97, 103, 101, 0);
               giflivestreamingr.set(rewardvideoL, rewardvideoL.length);
               distb = new Map([[`${distb.size}`, 3]]);
               showmored = new Map([[`${predictionactiveL.size}`, controlsK.length]]);
               leftW = new Map([[`${contextO}`, parseInt(`${owngoalU}`) ^ parseInt(`${contextO}`)]]);
               if (materialV) {
                  break;
               }
            } while (materialV && (leftW.get(`${forwarda}`) == null));
            latnD = new Map([[`${positionfield_.size}`, positionfield_.size - 3]]);
            while ((baselinev.length >> (Math.min(predictionlossk.length, 1))) == 2 || (2 >> (Math.min(5, baselinev.length))) == 4) {
               baselinev = [3];
               break;
            }
            if (!Array.from(megaphoneJ.keys()).includes(`${leftW.size}`)) {
               megaphoneJ.set(`${typingw}`, positionfield_.size % 3);
            }
            let customJ = leftW.size <= 8690518;
            do {
               leftW.set(`${forwarda}`, exampleimage6.length);
               if (customJ) {
                  break;
               }
            } while (((leftW.size & predictionlossk.length) > 3) && customJ);
            contextO *= goalZ;
            let mbridgea = 7118973 <= exampleimage6.length;
            do {
               exampleimage6 += `${latnD.size}`;
               if (mbridgea) {
                  break;
               }
            } while ((3 < exampleimage6.length) && mbridgea);
            while (positionfield_.size <= latnD.size) {
               latnD.set(`${megaphoneJ.size}`, latnD.size / 1);
               break;
            }
            if ((megaphoneJ.size | 2) >= 5) {
               editr /= Math.max(3, 4);
            }
            goalZ %= Math.max((typingw == String.fromCharCode(67, 0) ? baselinev.length : typingw.length), 3);
            teamdetailsbgf /= Math.max(megaphoneJ.size & parseInt(`${teamdetailsbgf}`), 4);
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
            let bggradientY: Array<any> = [442, 795];
            let round3 = 5.0;
            let internetN = String.fromCharCode(99, 108, 111, 99, 107, 95, 98, 95, 56, 57, 0);
            let splashD = String.fromCharCode(115, 105, 109, 117, 108, 97, 116, 105, 111, 110, 95, 121, 95, 50, 51, 0);
            let strX: Array<any> = [968, 831];
            let baiduL = 0.0;
            let reactnavigationm = String.fromCharCode(116, 97, 99, 107, 95, 108, 95, 50, 51, 0);
            let iconrightorange9 = 4;
            let stringsJ = 1;
            let orangedownarrow_ = 1;
            let with_3pa: Array<any> = [614, 338];
            while (3 <= (orangedownarrow_ - reactnavigationm.length) && 4 <= (3 - orangedownarrow_)) {
               orangedownarrow_ += 2 + parseInt(`${baiduL}`);
               break;
            }
            iconrightorange9 /= Math.max(4, 3);
            let termsp = 3;
            let libreactnativeblobv = String.fromCharCode(108, 105, 98, 115, 119, 115, 99, 97, 108, 101, 95, 107, 95, 55, 57, 0);
            let nextz = 0.0;
            libreactnativeblobv = `${parseInt(`${nextz}`) >> (Math.min(5, Math.abs(termsp)))}`;
            if (4 < (libreactnativeblobv.length + termsp)) {
               termsp >>= Math.min(Math.abs(libreactnativeblobv.length ^ termsp), 5);
            }
            if (5 >= libreactnativeblobv.length) {
               libreactnativeblobv += `${libreactnativeblobv.length}`;
            }
            let orangetickh = String.fromCharCode(113, 95, 54, 95, 100, 105, 115, 112, 97, 116, 99, 104, 101, 114, 0);
            let runtimeschedulerE = String.fromCharCode(105, 95, 56, 53, 95, 116, 114, 97, 99, 107, 115, 0);
            termsp |= termsp;
            if ((termsp + 3) < 3 || 2 < (3 + termsp)) {
               termsp %= Math.max(2, libreactnativeblobv.length);
            }
            round3 *= orangedownarrow_ >> (Math.min(Math.abs(3), 3));
            let rncore_ = String.fromCharCode(98, 95, 57, 57, 95, 112, 97, 110, 105, 99, 0);
            if (rncore_.length <= rncore_.length) {
               rncore_ = `${(String.fromCharCode(80, 0) == rncore_ ? rncore_.length : rncore_.length)}`;
            }
            let imagenomoredatal = true;
            let becomeG = true;
            rncore_ = "3";
            imagenomoredatal = !becomeG;
            let iconsaveimageH = rncore_.length <= 9567467;
            do {
               rncore_ += `${(String.fromCharCode(114, 0) == rncore_ ? rncore_.length : rncore_.length)}`;
               if (iconsaveimageH) {
                  break;
               }
            } while (iconsaveimageH && (rncore_.startsWith(`${rncore_.length}`)));
            internetN = `${3 - rncore_.length}`;
            reactnavigationm += `${(String.fromCharCode(107, 0) == reactnavigationm ? strX.length : reactnavigationm.length)}`;
            internetN = `${parseInt(`${baiduL}`)}`;
            orangedownarrow_ /= Math.max(orangedownarrow_, 5);
            let hometeamfieldS = 5;
            let tickL = String.fromCharCode(112, 114, 101, 115, 115, 95, 107, 95, 53, 54, 0);
            if ((hometeamfieldS / (Math.max(5, tickL.length))) == 1) {
               let showy = 1;
               tickL += `${showy}`;
            }
            let scoreF = String.fromCharCode(113, 95, 53, 53, 95, 100, 117, 112, 108, 105, 99, 97, 116, 101, 0);
            round3 /= Math.max(2, iconrightorange9);
            while ((3 | iconrightorange9) == 2) {
               let plashz = 2.0;
               let airbnbstarselected2 = String.fromCharCode(113, 95, 53, 51, 95, 114, 101, 115, 112, 111, 110, 115, 97, 98, 108, 101, 0);
               let disconnected4 = true;
               plashz += airbnbstarselected2.length;
               disconnected4 = !disconnected4;
               if (1.65 > (plashz / (Math.max(7, airbnbstarselected2.length))) || (plashz / 1.65) > 1.40) {
                  plashz /= Math.max(parseInt(`${plashz}`), 1);
               }
               for (let x = 0; x < 2; x++) {
                  airbnbstarselected2 += `${airbnbstarselected2.length >> (Math.min(Math.abs(1), 5))}`;
               }
               let nalyticsX = 1.0;
               let rankN = 0;
               plashz /= Math.max(5, 3);
               nalyticsX += 1 + parseInt(`${nalyticsX}`);
               rankN %= Math.max(3, 1 >> (Math.min(Math.abs(parseInt(`${nalyticsX}`)), 2)));
               if (1.33 < (1.23 + plashz)) {
                  airbnbstarselected2 = `${3 << (Math.min(3, airbnbstarselected2.length))}`;
               }
               for (let t = 0; t < 2; t++) {
                  airbnbstarselected2 = `${airbnbstarselected2.length}`;
               }
               baiduL -= 3;
               break;
            }
            stringsJ |= internetN.length >> (Math.min(2, with_3pa.length));
            let ksadS = true;
            let hookD = true;
            let package_qdN = 0.0;
            let greyarrowupT = hookD ? !hookD : hookD;
            do {
               hookD = package_qdN <= 100.22;
               if (greyarrowupT) {
                  break;
               }
            } while (greyarrowupT && (hookD));
            let awayiconr = 5.0;
            for (let n = 0; n < 1; n++) {
               let datab = 3.0;
               let rulesM = true;
               let hooksR = 5.0;
               package_qdN *= parseFloat(`${3 % (Math.max(3, parseInt(`${awayiconr}`)))}`);
               datab /= Math.max(3 ^ parseInt(`${hooksR}`), 2);
               rulesM = hooksR == 72.31;
            }
            let loadingspinnerr = String.fromCharCode(122, 95, 52, 53, 95, 114, 101, 99, 117, 114, 115, 101, 0);
            package_qdN *= (parseFloat(`${parseInt(`${awayiconr}`) ^ (ksadS ? 4 : 2)}`));
            loadingspinnerr += "1";
            while (1.34 > (2.59 - package_qdN) || package_qdN > 2.59) {
               package_qdN *= (parseFloat(`${parseInt(`${package_qdN}`) * (hookD ? 2 : 3)}`));
               break;
            }
            for (let f = 0; f < 1; f++) {
               let profileY: Array<any> = [558, 24, 489];
               let gradlew9: Array<any> = [21, 588, 783];
               hookD = 92.67 < package_qdN || 57 < gradlew9.length;
               profileY = [profileY.length];
               gradlew9.push(2 & profileY.length);
            }
            for (let l = 0; l < 1; l++) {
               hookD = !hookD;
            }
            ksadS = !hookD;
            while (hookD) {
               awayiconr += ((hookD ? 5 : 3) * parseInt(`${awayiconr}`));
               break;
            }
            baiduL /= Math.max(4, 1 - bggradientY.length);
            while (iconrightorange9 <= 4) {
               let styleH = String.fromCharCode(109, 95, 51, 52, 95, 102, 97, 108, 108, 98, 97, 99, 107, 0);
               let reactnativeratingsC = 3;
               let weathero = 5.0;
               let textinputS = String.fromCharCode(116, 117, 110, 110, 101, 108, 101, 100, 95, 109, 95, 53, 56, 0);
               let security_ = String.fromCharCode(99, 95, 53, 53, 95, 115, 101, 116, 97, 99, 116, 105, 118, 101, 107, 101, 121, 0);
               let transfer6 = false;
               let minivod4 = 2.0;
               reactnativeratingsC *= 2 >> (Math.min(2, Math.abs(reactnativeratingsC)));
               transfer6 = minivod4 == 68.40;
               minivod4 *= (parseFloat(`${(transfer6 ? 5 : 3) % (Math.max(parseInt(`${minivod4}`), 10))}`));
               security_ += `${reactnativeratingsC}`;
               let iconclosewhitewithbgU = 5.0;
               let ksadt = 0.0;
               if (2.36 > (iconclosewhitewithbgU * 4.8) && 5.29 > (4.8 * weathero)) {
                  iconclosewhitewithbgU += 2;
               }
               reactnativeratingsC <<= Math.min(5, Math.abs(3));
               let singaporeT = String.fromCharCode(99, 95, 52, 51, 95, 115, 101, 116, 116, 105, 103, 110, 115, 0);
               let tramini2 = String.fromCharCode(107, 95, 53, 57, 95, 117, 114, 97, 110, 100, 111, 109, 0);
               let bgvipsport2 = 2.0;
               let cancelk: Array<any> = [237, 674];
               let suboutS: Map<any, any> = new Map([[String.fromCharCode(102, 105, 108, 108, 105, 110, 103, 95, 101, 95, 56, 0), 196], [String.fromCharCode(113, 95, 57, 48, 95, 114, 101, 115, 101, 114, 118, 101, 100, 0), 34]]);
               reactnativeratingsC >>= Math.min(2, Math.abs(parseInt(`${iconclosewhitewithbgU}`)));
               bgvipsport2 += parseFloat(`${parseInt(`${bgvipsport2}`)}`);
               cancelk.push(cancelk.length / (Math.max(1, 2)));
               suboutS = new Map([[`${cancelk.length}`, cancelk.length]]);
               let roomX = String.fromCharCode(106, 95, 50, 49, 95, 99, 111, 118, 114, 0);
               let hiad6 = String.fromCharCode(99, 95, 54, 51, 95, 111, 98, 106, 101, 99, 116, 115, 0);
               while (3.2 > (3.75 + weathero) && (3.75 + weathero) > 4.30) {
                  weathero *= security_.length ^ styleH.length;
                  break;
               }
               while (hiad6 != styleH) {
                  styleH += `${styleH.length}`;
                  break;
               }
               reactnativeratingsC ^= singaporeT.length;
               for (let k = 0; k < 3; k++) {
                  let libruntimeexecutorX = String.fromCharCode(99, 111, 110, 115, 116, 114, 117, 99, 116, 95, 48, 95, 56, 57, 0);
                  tramini2 = `${singaporeT.length}`;
                  libruntimeexecutorX = `${libruntimeexecutorX.length & 2}`;
               }
               let footballfiledlayout_ = String.fromCharCode(97, 116, 116, 114, 105, 98, 117, 116, 101, 95, 110, 95, 54, 0);
               let bgvipsport_ = String.fromCharCode(99, 111, 108, 115, 101, 116, 95, 119, 95, 55, 53, 0);
               let tail4 = 2.0;
               styleH += `${parseInt(`${weathero}`)}`;
               footballfiledlayout_ += `${(footballfiledlayout_ == String.fromCharCode(110, 0) ? bgvipsport_.length : footballfiledlayout_.length)}`;
               bgvipsport_ += `${parseInt(`${tail4}`) + bgvipsport_.length}`;
               tail4 -= (parseFloat(`${bgvipsport_ == String.fromCharCode(105, 0) ? bgvipsport_.length : footballfiledlayout_.length}`));
               reactnativeratingsC /= Math.max(styleH.length, 2);
               for (let l = 0; l < 2; l++) {
                  singaporeT += "2";
               }
               reactnavigationm = "2";
               break;
            }
            iconrightorange9 ^= stringsJ | reactnavigationm.length;
            if (4 <= (parseInt(`${round3}`) / (Math.max(strX.length, 8)))) {
               strX = [splashD.length];
            }
            let str9: Map<any, any> = new Map([[String.fromCharCode(121, 95, 49, 48, 48, 95, 114, 101, 115, 117, 108, 117, 116, 105, 111, 110, 0), 714], [String.fromCharCode(108, 111, 119, 98, 105, 116, 115, 95, 57, 95, 57, 57, 0), 304]]);
            let founda = str9.size <= 5024655;
            do {
               str9 = new Map([[`${str9.size}`, str9.size + str9.size]]);
               if (founda) {
                  break;
               }
            } while (founda && (str9.get(`${str9.size}`) == null));
            for (let n = 0; n < 3; n++) {
               let suboutV = false;
               let review9 = 0.0;
               let bottomJ: Array<any> = [840, 804, 308];
               let pnewarchdefaultsm: Map<any, any> = new Map([[String.fromCharCode(116, 101, 115, 116, 95, 53, 95, 54, 49, 0), 479], [String.fromCharCode(115, 101, 118, 101, 114, 105, 116, 121, 95, 110, 95, 50, 0), 423], [String.fromCharCode(101, 95, 56, 57, 95, 102, 115, 121, 110, 99, 0), 10]]);
               let orangeuparrowZ: Map<any, any> = new Map([[String.fromCharCode(108, 97, 121, 111, 117, 116, 95, 118, 95, 57, 57, 0), true], [String.fromCharCode(113, 95, 52, 49, 95, 111, 99, 115, 112, 0), true]]);
               str9.set(`${review9}`, 3 >> (Math.min(Math.abs(parseInt(`${review9}`)), 5)));
               suboutV = pnewarchdefaultsm.size <= 84;
               bottomJ = [3];
               pnewarchdefaultsm.set(`${pnewarchdefaultsm.size}`, 3);
               orangeuparrowZ.set(`${bottomJ.length}`, 1 & pnewarchdefaultsm.size);
            }
            while (!Array.from(str9.values()).includes(str9.size)) {
               str9 = new Map([[`${str9.size}`, str9.size]]);
               break;
            }
            round3 *= iconrightorange9 + parseInt(`${baiduL}`);
            while ((orangedownarrow_ / (Math.max(reactnavigationm.length, 8))) > 1 && (orangedownarrow_ / 1) > 3) {
               let manifestP = 5.0;
               let wifiroutere: Map<any, any> = new Map([[String.fromCharCode(103, 95, 51, 56, 95, 109, 97, 116, 105, 99, 0), String.fromCharCode(102, 102, 116, 115, 95, 118, 95, 51, 49, 0)], [String.fromCharCode(101, 95, 54, 52, 95, 99, 111, 111, 114, 100, 105, 110, 97, 116, 105, 111, 110, 0), String.fromCharCode(118, 95, 52, 55, 95, 97, 103, 97, 105, 110, 115, 116, 0)]]);
               let defaultbasketballbgg: Array<any> = [534, 783];
               let imagesK: Array<any> = [String.fromCharCode(103, 95, 54, 50, 95, 97, 117, 116, 111, 99, 108, 101, 97, 114, 0), String.fromCharCode(114, 101, 109, 97, 114, 107, 95, 110, 95, 57, 49, 0), String.fromCharCode(116, 120, 105, 100, 95, 102, 95, 51, 50, 0)];
               let defaultbasketballbgB = true;
               let refreshborderlessi = String.fromCharCode(111, 95, 50, 53, 95, 99, 112, 117, 105, 110, 102, 111, 0);
               let mbnative9 = String.fromCharCode(99, 111, 109, 112, 97, 114, 101, 102, 95, 118, 95, 54, 49, 0);
               if (3 >= (mbnative9.length << (Math.min(5, Math.abs(wifiroutere.size))))) {
                  let penaltyshootr = 0;
                  let hoverX = String.fromCharCode(99, 111, 108, 108, 101, 99, 116, 105, 98, 108, 101, 115, 95, 108, 95, 53, 53, 0);
                  wifiroutere = new Map([[hoverX, (hoverX.length & (defaultbasketballbgB ? 2 : 1))]]);
                  penaltyshootr |= penaltyshootr;
               }
               if (!defaultbasketballbgB) {
                  let basketballtrophyy: Array<any> = [467, 394, 49];
                  let logind: Array<any> = [541, 350];
                  defaultbasketballbgB = !defaultbasketballbgB;
                  basketballtrophyy = [logind.length - basketballtrophyy.length];
                  logind = [basketballtrophyy.length];
               }
               let utilsT = 3;
               let reactnativeultimatelistviewk = String.fromCharCode(102, 108, 101, 120, 95, 116, 95, 53, 53, 0);
               wifiroutere = new Map([[refreshborderlessi, ((defaultbasketballbgB ? 2 : 3) >> (Math.min(Math.abs(1), 5)))]]);
               utilsT |= reactnativeultimatelistviewk.length % 1;
               reactnativeultimatelistviewk = `${utilsT - reactnativeultimatelistviewk.length}`;
               if (!Array.from(wifiroutere.values()).includes(defaultbasketballbgg.length)) {
                  wifiroutere.set(`${manifestP}`, parseInt(`${manifestP}`) / (Math.max(wifiroutere.size, 4)));
               }
               let castm = defaultbasketballbgB ? !defaultbasketballbgB : defaultbasketballbgB;
               do {
                  let libloggerF = String.fromCharCode(110, 95, 53, 49, 95, 115, 112, 111, 105, 108, 101, 114, 115, 0);
                  defaultbasketballbgB = refreshborderlessi.length < parseInt(`${manifestP}`);
                  libloggerF += `${(String.fromCharCode(108, 0) == libloggerF ? libloggerF.length : libloggerF.length)}`;
                  if (castm) {
                     break;
                  }
               } while (castm && (4 == (2 << (Math.min(2, defaultbasketballbgg.length)))));
               let disconnected9 = String.fromCharCode(51, 51, 97, 99, 104, 54, 50, 100, 110, 117, 0) == mbnative9;
               do {
                  mbnative9 += `${wifiroutere.size & 2}`;
                  if (disconnected9) {
                     break;
                  }
               } while (disconnected9 && (1 > (wifiroutere.size + mbnative9.length)));
               while (!Array.from(wifiroutere.values()).includes(defaultbasketballbgg.length)) {
                  let penaltymatchiconJ = true;
                  let ajaxc = 2;
                  let fieldx = 2;
                  defaultbasketballbgg = [refreshborderlessi.length / 3];
                  penaltymatchiconJ = (ajaxc % (Math.max(9, fieldx))) < 38;
                  ajaxc /= Math.max(1, ajaxc << (Math.min(Math.abs(1), 1)));
                  fieldx -= fieldx % 2;
                  break;
               }
               if (defaultbasketballbgB) {
                  refreshborderlessi += `${parseInt(`${manifestP}`)}`;
               }
               defaultbasketballbgB = wifiroutere.size <= 96;
               if (defaultbasketballbgB) {
                  wifiroutere = new Map([[`${defaultbasketballbgg.length}`, defaultbasketballbgg.length % 2]]);
               }
               defaultbasketballbgB = String.fromCharCode(121, 0) == mbnative9;
               defaultbasketballbgB = wifiroutere.size >= 3;
               for (let g = 0; g < 1; g++) {
                  mbnative9 = "3";
               }
               let nalyticsa = String.fromCharCode(97, 95, 51, 51, 95, 108, 105, 98, 115, 119, 115, 99, 97, 108, 101, 0);
               let libfb6 = String.fromCharCode(115, 101, 101, 107, 116, 97, 98, 108, 101, 95, 113, 95, 57, 48, 0);
               reactnavigationm = `${parseInt(`${baiduL}`) - orangedownarrow_}`;
               break;
            }
            iconrightorange9 += splashD.length;
            let heart7 = String.fromCharCode(114, 101, 97, 114, 114, 97, 110, 103, 101, 95, 112, 95, 55, 49, 0);
            let giflivestreamingv = String.fromCharCode(115, 95, 52, 51, 95, 114, 111, 117, 116, 105, 110, 103, 0);
            let libjsinspectorH = 2;
            let countdownC = 8422347 >= libjsinspectorH;
            do {
               libjsinspectorH -= heart7.length;
               if (countdownC) {
                  break;
               }
            } while (countdownC && ((libjsinspectorH / (Math.max(1, 5))) >= 4 || (libjsinspectorH / (Math.max(giflivestreamingv.length, 6))) >= 1));
            heart7 += `${heart7.length}`;
            if (!giflivestreamingv.startsWith(heart7)) {
               giflivestreamingv = `${(heart7 == String.fromCharCode(48, 0) ? giflivestreamingv.length : heart7.length)}`;
            }
            let libswscaleE = String.fromCharCode(119, 97, 110, 116, 115, 95, 114, 95, 57, 49, 0);
            heart7 = `${3 | libjsinspectorH}`;
            libjsinspectorH &= 2 << (Math.min(3, giflivestreamingv.length));
            let mbjscommon2 = libjsinspectorH <= 8749451;
            do {
               let register_zG = String.fromCharCode(102, 95, 56, 57, 95, 114, 103, 98, 110, 0);
               libjsinspectorH /= Math.max(3, register_zG.length);
               if (mbjscommon2) {
                  break;
               }
            } while (mbjscommon2 && (5 <= (libswscaleE.length ^ 4) || 1 <= (4 ^ libswscaleE.length)));
            if (libswscaleE.length > 1) {
               heart7 = "2";
            }
            let clear5: Array<any> = [133, 412];
            let forwardd: Array<any> = [807, 98, 932];
            iconrightorange9 ^= parseInt(`${baiduL}`) + 3;
            if (4 <= (parseInt(`${round3}`) - bggradientY.length) && (parseInt(`${round3}`) - bggradientY.length) <= 4) {
               let hiadp = String.fromCharCode(105, 95, 48, 95, 100, 111, 99, 105, 100, 0);
               let libruntimeexecutorM: Array<any> = [134, 522];
               let actionsZ = 5.0;
               if ((2 - libruntimeexecutorM.length) < 4) {
                  libruntimeexecutorM.push(libruntimeexecutorM.length);
               }
               for (let n = 0; n < 1; n++) {
                  let pangle3: Array<any> = [String.fromCharCode(113, 95, 53, 95, 101, 110, 111, 117, 103, 104, 0), String.fromCharCode(105, 95, 53, 50, 95, 103, 97, 112, 115, 0)];
                  actionsZ *= pangle3.length;
               }
               let homeactive3 = 9259494 <= libruntimeexecutorM.length;
               do {
                  let baiduadsq = String.fromCharCode(108, 106, 112, 101, 103, 95, 117, 95, 52, 48, 0);
                  libruntimeexecutorM = [1 + libruntimeexecutorM.length];
                  baiduadsq = `${baiduadsq.length}`;
                  if (homeactive3) {
                     break;
                  }
               } while ((actionsZ >= libruntimeexecutorM.length) && homeactive3);
               hiadp += `${parseInt(`${actionsZ}`)}`;
               for (let b = 0; b < 3; b++) {
                  libruntimeexecutorM.push(parseInt(`${actionsZ}`));
               }
               actionsZ += libruntimeexecutorM.length | hiadp.length;
               libruntimeexecutorM = [2];
               hiadp += "3";
               let const_8zv = 1.0;
               let defaultplayerimg3 = 1.0;
               libruntimeexecutorM.push(parseInt(`${defaultplayerimg3}`) + 2);
               const_8zv += parseInt(`${const_8zv}`) / (Math.max(6, parseInt(`${const_8zv}`)));
               defaultplayerimg3 += parseFloat(`${parseInt(`${const_8zv}`)}`);
               bggradientY.push(3 & bggradientY.length);
            }
            while (!with_3pa.includes(iconrightorange9)) {
               with_3pa = [parseInt(`${round3}`)];
               break;
            }
            stringsJ >>= Math.min(Math.abs(2), 1);
            let homeinactiveN = String.fromCharCode(114, 95, 54, 57, 95, 100, 111, 112, 115, 0);
            let hiad9 = String.fromCharCode(112, 95, 55, 50, 95, 106, 114, 110, 108, 0);
            let bdxadsdkX = hiad9 == String.fromCharCode(106, 103, 122, 56, 0);
            do {
               hiad9 = `${homeinactiveN.length}`;
               if (bdxadsdkX) {
                  break;
               }
            } while ((homeinactiveN == String.fromCharCode(114, 0)) && bdxadsdkX);
            let libsgcoreN = homeinactiveN == String.fromCharCode(103, 109, 99, 0);
            do {
               homeinactiveN += `${hiad9.length}`;
               if (libsgcoreN) {
                  break;
               }
            } while ((homeinactiveN.startsWith(hiad9)) && libsgcoreN);
            while (hiad9.length == homeinactiveN.length) {
               hiad9 = `${hiad9.length}`;
               break;
            }
            for (let w = 0; w < 3; w++) {
               let mutedX = String.fromCharCode(116, 95, 52, 57, 95, 97, 117, 116, 104, 101, 110, 116, 104, 105, 99, 97, 116, 101, 0);
               let orangeo = String.fromCharCode(102, 95, 49, 52, 95, 103, 108, 111, 98, 97, 108, 115, 0);
               let libflipperZ = 2;
               homeinactiveN += `${homeinactiveN.length}`;
               mutedX = `${libflipperZ}`;
               orangeo += `${libflipperZ}`;
            }
            homeinactiveN = `${1 - hiad9.length}`;
            if (4 < homeinactiveN.length) {
               hiad9 += `${homeinactiveN.length | hiad9.length}`;
            }
            internetN = `${(splashD == String.fromCharCode(113, 0) ? splashD.length : stringsJ)}`;
            let package_j16: Map<any, any> = new Map([[String.fromCharCode(112, 105, 120, 101, 108, 115, 95, 113, 95, 54, 0), 496], [String.fromCharCode(116, 95, 49, 51, 95, 114, 111, 116, 97, 116, 105, 110, 103, 0), 516], [String.fromCharCode(100, 95, 56, 51, 95, 114, 101, 100, 100, 105, 116, 0), 615]]);
            let iconwatchI = 0.0;
            iconwatchI /= Math.max(parseFloat(`${2 ^ package_j16.size}`), 2);
            for (let k = 0; k < 1; k++) {
               let sharemodala = 4;
               let weatherh = 2.0;
               iconwatchI += parseFloat(`${2}`);
               sharemodala %= Math.max(parseInt(`${weatherh}`), 1);
               weatherh += parseInt(`${weatherh}`) >> (Math.min(5, Math.abs(sharemodala)));
            }
            let activityF = String.fromCharCode(108, 105, 98, 106, 112, 101, 103, 116, 117, 114, 98, 111, 95, 102, 95, 49, 57, 0);
            let proxyE = false;
            iconwatchI += parseFloat(`${parseInt(`${iconwatchI}`) ^ 1}`);
            activityF = `${(activityF.length >> (Math.min(1, Math.abs((proxyE ? 1 : 1)))))}`;
            proxyE = activityF.startsWith(`${proxyE}`);
            iconwatchI /= Math.max(4, parseFloat(`${parseInt(`${iconwatchI}`)}`));
            iconwatchI *= parseFloat(`${package_j16.size}`);
            let filterR = 9614291.0 >= iconwatchI;
            do {
               iconwatchI /= Math.max(2, parseFloat(`${2}`));
               if (filterR) {
                  break;
               }
            } while (filterR && (3 < (package_j16.size * 3) && 5.17 < (parseFloat(`${package_j16.size}`) - iconwatchI)));
            internetN += `${parseInt(`${round3}`)}`;
            strX.push(1);
            iconrightorange9 ^= parseInt(`${round3}`);
            let sendY = 2.0;
            let assistE = 2.0;
            sendY /= Math.max(5, 1);
            if (assistE <= sendY) {
               assistE -= parseInt(`${sendY}`);
            }
            sendY += 3 / (Math.max(parseInt(`${assistE}`), 9));
            let contextF = assistE >= 7016581.0;
            do {
               assistE += parseInt(`${sendY}`) << (Math.min(1, Math.abs(3)));
               if (contextF) {
                  break;
               }
            } while ((sendY < assistE) && contextF);
            let shareV = 7696618.0 <= sendY;
            do {
               sendY *= 1;
               if (shareV) {
                  break;
               }
            } while (shareV && ((sendY / 2.65) < 3.95 || (sendY - assistE) < 2.65));
            let sendd = String.fromCharCode(104, 95, 52, 51, 95, 100, 101, 99, 111, 100, 101, 114, 115, 0);
            strX.push(parseInt(`${sendY}`));
            if ((strX.length + 3) < 4 && (strX.length + internetN.length) < 3) {
               internetN += `${iconrightorange9 << (Math.min(1, Math.abs(2)))}`;
            }
            let defaultfootballbgf = stringsJ <= 8242732;
            do {
               let short_9qQ = false;
               let libloggerv = 2;
               let defaultlogoY: Map<any, any> = new Map([[String.fromCharCode(115, 112, 100, 105, 102, 95, 57, 95, 51, 51, 0), String.fromCharCode(108, 105, 98, 118, 101, 114, 115, 105, 111, 110, 95, 101, 95, 53, 52, 0)], [String.fromCharCode(112, 97, 115, 115, 101, 100, 95, 105, 95, 56, 57, 0), String.fromCharCode(109, 118, 115, 97, 100, 95, 107, 95, 55, 57, 0)], [String.fromCharCode(114, 105, 110, 103, 98, 97, 99, 107, 95, 117, 95, 56, 50, 0), String.fromCharCode(115, 99, 104, 101, 100, 117, 108, 101, 114, 95, 105, 95, 51, 54, 0)]]);
               let matchdetailbgH = 0.0;
               let checkboxW = String.fromCharCode(116, 104, 101, 95, 122, 95, 52, 51, 0);
               let forward0 = libloggerv <= 5586184;
               do {
                  libloggerv &= (checkboxW.length - (short_9qQ ? 3 : 2));
                  if (forward0) {
                     break;
                  }
               } while (forward0 && (5 >= (libloggerv * 1)));
               let side3: Map<any, any> = new Map([[String.fromCharCode(99, 114, 111, 115, 115, 102, 97, 100, 105, 110, 103, 95, 106, 95, 57, 48, 0), 4], [String.fromCharCode(100, 105, 115, 115, 105, 109, 95, 118, 95, 57, 48, 0), 193], [String.fromCharCode(109, 115, 117, 98, 95, 99, 95, 49, 52, 0), 632]]);
               let toponA: Array<any> = [909, 634];
               let interstitialu = 0;
               libloggerv /= Math.max(3, side3.size);
               side3 = new Map([[`${toponA.length}`, interstitialu | toponA.length]]);
               interstitialu %= Math.max(2, 2);
               defaultlogoY.set(checkboxW, (1 << (Math.min(5, Math.abs((short_9qQ ? 1 : 5))))));
               let iconscheduleI = String.fromCharCode(107, 105, 116, 116, 121, 95, 108, 95, 50, 48, 0);
               let redgoalH = String.fromCharCode(101, 114, 114, 99, 111, 100, 101, 95, 102, 95, 50, 53, 0);
               let rewardA = 3;
               redgoalH = `${iconscheduleI.length % (Math.max(3, rewardA))}`;
               let friendsN = 3;
               let downloadingR = String.fromCharCode(103, 95, 55, 52, 95, 99, 97, 108, 99, 119, 0);
               let eighteenH: Array<any> = [258, 403, 780];
               let mintegralH = String.fromCharCode(101, 120, 116, 115, 107, 95, 52, 95, 55, 50, 0);
               matchdetailbgH += (String.fromCharCode(50, 0) == downloadingR ? friendsN : downloadingR.length);
               eighteenH = [(mintegralH == String.fromCharCode(65, 0) ? eighteenH.length : mintegralH.length)];
               let libturbomodulejsijnib = true;
               let entryQ = 5;
               let basketballtrophys: Array<any> = [757, 988];
               defaultlogoY.set(`${libturbomodulejsijnib}`, basketballtrophys.length + 2);
               entryQ >>= Math.min(1, Math.abs(entryQ));
               iconscheduleI += `${redgoalH.length}`;
               let custom3 = 5.0;
               let bdxadsdk9 = String.fromCharCode(114, 107, 109, 112, 112, 95, 119, 95, 56, 51, 0);
               checkboxW = `${parseInt(`${matchdetailbgH}`)}`;
               custom3 -= parseFloat(`${parseInt(`${custom3}`) & bdxadsdk9.length}`);
               bdxadsdk9 += `${parseInt(`${custom3}`)}`;
               defaultlogoY.set(redgoalH, redgoalH.length % 2);
               friendsN *= parseInt(`${matchdetailbgH}`) | checkboxW.length;
               let trashH: Array<any> = [String.fromCharCode(110, 97, 108, 117, 115, 95, 100, 95, 54, 55, 0), String.fromCharCode(100, 115, 116, 95, 102, 95, 54, 49, 0), String.fromCharCode(112, 95, 52, 48, 95, 110, 101, 120, 116, 104, 111, 112, 0)];
               defaultlogoY = new Map([[`${friendsN}`, libloggerv]]);
               trashH = [trashH.length];
               while ((matchdetailbgH * 4.17) < 1.12 || (redgoalH.length | 3) < 5) {
                  matchdetailbgH += friendsN & parseInt(`${matchdetailbgH}`);
                  break;
               }
               for (let v = 0; v < 1; v++) {
                  let completeU = String.fromCharCode(97, 95, 56, 51, 95, 102, 117, 100, 103, 101, 0);
                  let codegenG: Array<any> = [202, 490, 334];
                  let resendY: Map<any, any> = new Map([[String.fromCharCode(110, 101, 105, 103, 104, 98, 111, 114, 105, 110, 103, 95, 101, 95, 52, 54, 0), false], [String.fromCharCode(103, 101, 111, 99, 111, 100, 101, 114, 95, 50, 95, 54, 54, 0), false], [String.fromCharCode(104, 97, 114, 100, 119, 97, 114, 101, 95, 114, 95, 53, 56, 0), false]]);
                  defaultlogoY = new Map([[iconscheduleI, 2 | iconscheduleI.length]]);
                  completeU = `${codegenG.length * resendY.size}`;
                  codegenG = [completeU.length * resendY.size];
               }
               stringsJ <<= Math.min(2, Math.abs(splashD.length + internetN.length));
               if (defaultfootballbgf) {
                  break;
               }
            } while (((2.24 / (Math.max(1, round3))) > 3.54) && defaultfootballbgf);
            let room9 = 7856620 <= stringsJ;
            do {
               stringsJ |= 2;
               if (room9) {
                  break;
               }
            } while (room9 && (4 == (1 * splashD.length)));
            let refreshborderlessX = 2;
            let transfer_ = String.fromCharCode(114, 97, 105, 116, 95, 120, 95, 50, 50, 0);
            let windy = 2.0;
            let node0 = String.fromCharCode(100, 114, 105, 118, 101, 95, 105, 95, 49, 48, 48, 0);
            let singapore0 = 0;
            let textlayoutmanagerZ = String.fromCharCode(104, 95, 50, 50, 95, 99, 117, 98, 101, 0);
            transfer_ += `${(node0 == String.fromCharCode(111, 0) ? refreshborderlessX : node0.length)}`;
            singapore0 %= Math.max(4, textlayoutmanagerZ.length | 2);
            textlayoutmanagerZ += `${singapore0}`;
            let assets1 = 5;
            refreshborderlessX ^= 2;
            assets1 += 1;
            let robotoC = 2.0;
            transfer_ = `${transfer_.length}`;
            robotoC -= parseFloat(`${parseInt(`${robotoC}`)}`);
            for (let n = 0; n < 3; n++) {
               transfer_ += `${3 / (Math.max(10, transfer_.length))}`;
            }
            for (let k = 0; k < 3; k++) {
               transfer_ += "2";
            }
            for (let k = 0; k < 3; k++) {
               let matchinactivea = String.fromCharCode(97, 95, 53, 48, 95, 100, 111, 119, 110, 109, 105, 120, 0);
               windy *= parseFloat(`${3 - refreshborderlessX}`);
               matchinactivea = `${matchinactivea.length}`;
            }
            let black1 = windy <= 6234026.0;
            do {
               let libturbomodulejsijniN: Map<any, any> = new Map([[String.fromCharCode(118, 112, 109, 99, 95, 99, 95, 55, 53, 0), String.fromCharCode(106, 115, 105, 109, 100, 99, 112, 117, 95, 50, 95, 55, 55, 0)], [String.fromCharCode(111, 95, 48, 95, 115, 115, 108, 0), String.fromCharCode(106, 95, 51, 56, 95, 118, 98, 108, 101, 0)], [String.fromCharCode(122, 95, 56, 49, 95, 109, 101, 103, 97, 103, 114, 111, 117, 112, 0), String.fromCharCode(117, 95, 51, 50, 95, 116, 101, 114, 109, 105, 110, 97, 108, 0)]]);
               let matchesP = String.fromCharCode(115, 119, 114, 95, 106, 95, 51, 53, 0);
               let code0 = String.fromCharCode(104, 95, 50, 56, 95, 105, 109, 109, 117, 116, 97, 98, 108, 101, 0);
               let benefita = String.fromCharCode(103, 101, 110, 101, 114, 97, 116, 105, 110, 103, 95, 98, 95, 51, 54, 0);
               windy *= parseFloat(`${3}`);
               libturbomodulejsijniN = new Map([[`${libturbomodulejsijniN.size}`, code0.length]]);
               matchesP = `${2 - code0.length}`;
               benefita += "3";
               if (black1) {
                  break;
               }
            } while (black1 && (!transfer_.startsWith(`${windy}`)));
            for (let z = 0; z < 1; z++) {
               transfer_ = `${1 / (Math.max(parseInt(`${windy}`), 5))}`;
            }
            while (transfer_.length < refreshborderlessX) {
               refreshborderlessX %= Math.max(transfer_.length, 1);
               break;
            }
            internetN = `${strX.length}`;
            strX.push(parseInt(`${baiduL}`) + reactnavigationm.length);
            internetN = `${reactnavigationm.length}`;
            internetN = `${splashD.length}`;
            let auto_gy = 0.0;
            let background4 = true;
            let catalog0 = background4 ? !background4 : background4;
            do {
               background4 = !background4;
               if (catalog0) {
                  break;
               }
            } while ((2.20 == (auto_gy - 3.21) && !background4) && catalog0);
            while (background4) {
               let grayI = 1.0;
               let temph = 0.0;
               let componentregistryu = String.fromCharCode(121, 95, 55, 95, 104, 97, 115, 104, 100, 101, 115, 116, 114, 111, 121, 0);
               let footballfieldO: Map<any, any> = new Map([[String.fromCharCode(111, 112, 101, 110, 115, 108, 101, 115, 95, 116, 95, 56, 54, 0), String.fromCharCode(107, 95, 51, 54, 95, 114, 101, 117, 112, 108, 111, 97, 100, 105, 110, 103, 0)], [String.fromCharCode(118, 95, 57, 48, 95, 109, 99, 111, 109, 112, 0), String.fromCharCode(112, 95, 48, 95, 105, 110, 105, 116, 97, 108, 0)], [String.fromCharCode(109, 111, 100, 101, 99, 111, 115, 116, 115, 95, 107, 95, 50, 54, 0), String.fromCharCode(116, 95, 56, 57, 95, 99, 111, 100, 101, 0)]]);
               let untickB = String.fromCharCode(109, 111, 100, 101, 110, 97, 109, 101, 95, 119, 95, 54, 51, 0);
               background4 = (componentregistryu.length | footballfieldO.size) >= 27;
               grayI *= parseInt(`${temph}`);
               componentregistryu = `${parseInt(`${temph}`)}`;
               footballfieldO = new Map([[`${grayI}`, untickB.length]]);
               untickB += `${parseInt(`${temph}`) % (Math.max(1, 4))}`;
               break;
            }
            while (!background4 && 3.53 > (auto_gy - 5.17)) {
               background4 = background4 && 45.5 < auto_gy;
               break;
            }
            let giftk = String.fromCharCode(118, 95, 52, 50, 95, 106, 117, 115, 116, 105, 102, 105, 99, 97, 116, 105, 111, 110, 0);
            let flipperi = String.fromCharCode(105, 110, 118, 102, 95, 114, 95, 51, 51, 0);
            let halfg = false;
            let giftbutton1 = true;
            let defaultlogot = background4 ? !background4 : background4;
            do {
               background4 = halfg;
               if (defaultlogot) {
                  break;
               }
            } while (defaultlogot && (5.76 >= (5.4 + auto_gy)));
            internetN += "3";
            while (1 == (strX.length * parseInt(`${round3}`))) {
               let policyT = 4.0;
               let liveG = String.fromCharCode(99, 111, 108, 108, 105, 115, 116, 95, 104, 95, 51, 48, 0);
               let nodeG = String.fromCharCode(115, 97, 118, 101, 95, 97, 95, 49, 53, 0);
               policyT -= 3 << (Math.min(1, Math.abs(parseInt(`${policyT}`))));
               nodeG += `${(String.fromCharCode(110, 0) == nodeG ? nodeG.length : nodeG.length)}`;
               let infoH = policyT >= 7782503.0;
               do {
                  policyT /= Math.max(parseInt(`${policyT}`) - liveG.length, 1);
                  if (infoH) {
                     break;
                  }
               } while ((5 >= liveG.length) && infoH);
               let pangle_ = String.fromCharCode(113, 95, 52, 95, 107, 117, 107, 105, 0);
               let animationsd = String.fromCharCode(109, 97, 107, 101, 109, 97, 99, 112, 107, 103, 95, 114, 95, 57, 57, 0);
               liveG = `${animationsd.length % (Math.max(1, pangle_.length))}`;
               liveG = `${parseInt(`${policyT}`) >> (Math.min(Math.abs(3), 3))}`;
               policyT += liveG.length;
               while (3.65 < (2.11 - policyT) || 4.26 < (2.11 - policyT)) {
                  policyT += 2 + parseInt(`${policyT}`);
                  break;
               }
               strX.push(with_3pa.length / 2);
               break;
            }
            let g_animation8: Array<any> = [211, 678, 853];
            let firebasez = 1;
            let gradleN = String.fromCharCode(104, 100, 114, 115, 95, 104, 95, 52, 55, 0);
            for (let v = 0; v < 2; v++) {
               let mintegralt = true;
               let mapping8 = 5;
               let areaq = String.fromCharCode(98, 108, 111, 99, 107, 120, 95, 121, 95, 56, 54, 0);
               let iconnewsshareS = 1.0;
               firebasez %= Math.max(firebasez / 3, 3);
               mintegralt = areaq.endsWith(`${iconnewsshareS}`);
               mapping8 >>= Math.min(4, Math.abs(1));
               areaq = `${mapping8}`;
               iconnewsshareS /= Math.max(3, parseFloat(`${mapping8 % 3}`));
            }
            while (2 == (2 ^ gradleN.length)) {
               gradleN = `${gradleN.length}`;
               break;
            }
            while (5 < gradleN.length) {
               gradleN = `${gradleN.length}`;
               break;
            }
            if (1 >= firebasez) {
               g_animation8.push(g_animation8.length + 1);
            }
            let runtimeschedulerH = String.fromCharCode(120, 95, 57, 55, 95, 104, 101, 114, 109, 105, 116, 101, 0);
            let diceM = String.fromCharCode(100, 97, 115, 104, 101, 110, 99, 95, 110, 95, 55, 56, 0);
            if (3 < (firebasez * g_animation8.length)) {
               firebasez /= Math.max(1 - gradleN.length, 5);
            }
            while (2 < diceM.length) {
               let zhengpianH: Array<any> = [89, 895, 135];
               runtimeschedulerH += "2";
               zhengpianH.push(2 / (Math.max(3, zhengpianH.length)));
               break;
            }
            while (runtimeschedulerH.length == 5) {
               runtimeschedulerH = `${1 + runtimeschedulerH.length}`;
               break;
            }
            for (let m = 0; m < 3; m++) {
               gradleN = `${g_animation8.length}`;
            }
            orangedownarrow_ >>= Math.min(4, Math.abs(orangedownarrow_));
            let moonh = true;
            let iconsaveimagef = 4.0;
            let nalyticsg = 0.0;
            let loadingspinnerZ = String.fromCharCode(115, 95, 49, 54, 95, 117, 116, 109, 111, 115, 116, 0);
            let dplusr = String.fromCharCode(108, 111, 119, 98, 100, 95, 51, 95, 54, 50, 0);
            let catalog8 = 5.0;
            let libtang: Array<any> = [283, 273];
            let emptyO = 4.0;
            dplusr += "1";
            catalog8 += parseFloat(`${2}`);
            libtang.push(1);
            emptyO -= parseFloat(`${parseInt(`${emptyO}`)}`);
            let iconpipexpandP = 4.0;
            let iconviewergifn = 2.0;
            let iconsaveimageY = 3.0;
            if (iconviewergifn > nalyticsg) {
               nalyticsg += parseFloat(`${parseInt(`${nalyticsg}`) % 3}`);
            }
            while ((iconsaveimagef + 5) > 4.69) {
               nalyticsg *= (parseFloat(`${String.fromCharCode(84, 0) == dplusr ? dplusr.length : (moonh ? 5 : 2)}`));
               break;
            }
            if (!moonh) {
               let gmailc = String.fromCharCode(97, 117, 116, 111, 114, 101, 109, 111, 118, 101, 95, 97, 95, 51, 53, 0);
               let gifgoalN = false;
               let whistleorange9 = 5;
               let manifestF = String.fromCharCode(108, 95, 54, 54, 95, 112, 105, 110, 103, 0);
               iconviewergifn -= whistleorange9;
               gmailc = "1";
               gifgoalN = (((!gifgoalN ? 94 : manifestF.length) << (Math.min(manifestF.length, 5))) < 94);
               whistleorange9 += (String.fromCharCode(112, 0) == manifestF ? (gifgoalN ? 5 : 1) : manifestF.length);
            }
            for (let l = 0; l < 2; l++) {
               iconpipexpandP *= (parseInt(`${iconviewergifn}`) >> (Math.min(5, Math.abs((moonh ? 3 : 4)))));
            }
            let smallorangemanm = String.fromCharCode(121, 95, 51, 57, 95, 99, 111, 110, 110, 0);
            nalyticsg -= parseFloat(`${dplusr.length - parseInt(`${iconpipexpandP}`)}`);
            smallorangemanm += `${smallorangemanm.length}`;
            bggradientY.push((String.fromCharCode(102, 0) == splashD ? internetN.length : splashD.length));
            let teamdetailsbgs: Array<any> = [718, 575];
            let custom9: Array<any> = [716, 995, 350];
            let typingloadingl: Array<any> = [457, 316];
            teamdetailsbgs.push(teamdetailsbgs.length >> (Math.min(custom9.length, 4)));
            typingloadingl = [2];
            let watchnowbgw: Array<any> = [538, 374, 695];
            teamdetailsbgs = [2 % (Math.max(8, custom9.length))];
            watchnowbgw = [1];
            let currentJ = custom9.length <= 7402312;
            do {
               let whistleorangeb = 1.0;
               let hookS = 4.0;
               custom9 = [watchnowbgw.length - parseInt(`${whistleorangeb}`)];
               whistleorangeb += 2 + parseInt(`${hookS}`);
               hookS += parseFloat(`${2}`);
               if (currentJ) {
                  break;
               }
            } while ((3 < (3 ^ teamdetailsbgs.length) || (custom9.length ^ teamdetailsbgs.length) < 3) && currentJ);
            let popupu = 0.0;
            let traminiR = 5.0;
            orangedownarrow_ >>= Math.min(1, Math.abs(teamdetailsbgs.length * custom9.length));
            let rewardvideo3 = 5.0;
            let humidityr = true;
            while (!humidityr) {
               rewardvideo3 += parseInt(`${rewardvideo3}`) + 2;
               break;
            }
            let str6 = 0.0;
            rewardvideo3 *= parseInt(`${str6}`) >> (Math.min(5, Math.abs(2)));
            splashD = "3";
            stringsJ &= bggradientY.length >> (Math.min(Math.abs(3), 5));
            if ((strX.length + parseInt(`${baiduL}`)) == 4) {
               let nbatrophyF = String.fromCharCode(98, 95, 57, 52, 95, 99, 111, 114, 101, 0);
               let disconnectedQ = 5;
               let debugH: Array<any> = [460, 32, 754];
               let castQ = true;
               nbatrophyF = `${debugH.length}`;
               disconnectedQ |= disconnectedQ;
               debugH.push(1 / (Math.max(disconnectedQ, 3)));
               castQ = disconnectedQ == 74;
               let friends4: Array<any> = [String.fromCharCode(118, 103, 108, 111, 98, 97, 108, 95, 52, 95, 53, 53, 0), String.fromCharCode(120, 95, 54, 53, 95, 114, 101, 100, 101, 101, 109, 0), String.fromCharCode(116, 111, 111, 108, 99, 104, 97, 105, 110, 95, 51, 95, 53, 51, 0)];
               let libavfilterW: Array<any> = [202, 969];
               let issubs = String.fromCharCode(111, 95, 52, 56, 95, 108, 105, 98, 115, 104, 105, 110, 101, 0);
               let commentz = false;
               let modulesi = String.fromCharCode(112, 116, 105, 111, 110, 115, 95, 105, 95, 52, 57, 0);
               friends4 = [libavfilterW.length];
               issubs += `${modulesi.length}`;
               commentz = !commentz;
               modulesi = `${issubs.length}`;
               strX = [strX.length ^ bggradientY.length];
            }
            let anythinkK: Map<any, any> = new Map([[String.fromCharCode(108, 111, 103, 105, 99, 97, 108, 95, 98, 95, 49, 49, 0), 859], [String.fromCharCode(109, 95, 52, 49, 95, 112, 101, 114, 109, 117, 116, 101, 0), 430], [String.fromCharCode(97, 114, 99, 104, 105, 118, 101, 100, 95, 117, 95, 50, 56, 0), 674]]);
            let fullscreenmax9 = 9260001 <= anythinkK.size;
            do {
               anythinkK.set(`${anythinkK.size}`, anythinkK.size * 1);
               if (fullscreenmax9) {
                  break;
               }
            } while (fullscreenmax9 && (anythinkK.size > 1));
            anythinkK = new Map([[`${anythinkK.size}`, anythinkK.size]]);
            let libloggerQ = 4;
            let libturbomodulejsijniB = String.fromCharCode(110, 95, 56, 53, 95, 113, 117, 105, 99, 107, 99, 111, 109, 112, 114, 101, 115, 115, 0);
            anythinkK = new Map([[`${anythinkK.size}`, anythinkK.size]]);
            libloggerQ += libturbomodulejsijniB.length - libloggerQ;
            libturbomodulejsijniB += `${libturbomodulejsijniB.length >> (Math.min(Math.abs(1), 4))}`;
            internetN = "2";
            for (let h = 0; h < 2; h++) {
               reactnavigationm += `${bggradientY.length ^ 3}`;
            }
            let loadingspinner8: Map<any, any> = new Map([[String.fromCharCode(121, 98, 121, 114, 95, 112, 95, 51, 54, 0), 443], [String.fromCharCode(114, 95, 56, 52, 95, 104, 99, 115, 99, 97, 108, 101, 0), 40]]);
            let lessU = String.fromCharCode(111, 95, 52, 53, 95, 100, 101, 98, 117, 103, 98, 111, 120, 0);
            let libreanimatedw = false;
            let resultR = 5.0;
            let iconsetting3: Array<any> = [String.fromCharCode(105, 110, 116, 101, 103, 101, 114, 95, 102, 95, 54, 57, 0), String.fromCharCode(114, 110, 110, 111, 105, 115, 101, 95, 56, 95, 56, 50, 0), String.fromCharCode(104, 97, 97, 114, 95, 114, 95, 52, 51, 0)];
            let collectionU: Array<any> = [43, 12, 894];
            loadingspinner8 = new Map([[lessU, (3 / (Math.max(3, (libreanimatedw ? 4 : 3))))]]);
            resultR *= iconsetting3.length;
            iconsetting3.push(iconsetting3.length);
            collectionU.push(iconsetting3.length);
            for (let m = 0; m < 2; m++) {
               let history_ = String.fromCharCode(105, 95, 52, 56, 95, 101, 108, 105, 115, 116, 0);
               libreanimatedw = loadingspinner8.size <= 92 || lessU.length <= 92;
               history_ += `${(String.fromCharCode(119, 0) == history_ ? history_.length : history_.length)}`;
            }
            libreanimatedw = loadingspinner8.get(`${libreanimatedw}`) == null;
            while ((lessU.length & 4) >= 4) {
               let libzeus0 = true;
               loadingspinner8.set(`${libreanimatedw}`, 3 - loadingspinner8.size);
               libzeus0 = !libzeus0;
               break;
            }
            let textlayoutmanagerW = String.fromCharCode(105, 95, 55, 56, 95, 109, 116, 105, 109, 101, 0);
            let downloaderd = String.fromCharCode(119, 95, 53, 51, 95, 109, 112, 111, 110, 0);
            let mbbannero = String.fromCharCode(117, 95, 53, 55, 95, 102, 105, 110, 100, 101, 114, 0);
            let goalq = String.fromCharCode(119, 95, 56, 55, 95, 119, 101, 98, 109, 101, 110, 99, 0);
            for (let k = 0; k < 2; k++) {
               downloaderd += `${downloaderd.length}`;
            }
            lessU = `${mbbannero.length * downloaderd.length}`;
            for (let z = 0; z < 3; z++) {
               mbbannero += `${3 & mbbannero.length}`;
            }
            iconrightorange9 += loadingspinner8.size;
            let mutedi = reactnavigationm == String.fromCharCode(100, 97, 111, 113, 102, 52, 106, 108, 116, 0);
            do {
               let previewF: Map<any, any> = new Map([[String.fromCharCode(112, 97, 115, 115, 98, 95, 112, 95, 54, 54, 0), 568], [String.fromCharCode(117, 99, 109, 112, 95, 118, 95, 50, 0), 319]]);
               let singleF = String.fromCharCode(114, 100, 102, 116, 95, 54, 95, 53, 49, 0);
               let c_playeri = 8628508 <= previewF.size;
               do {
                  previewF.set(singleF, (singleF == String.fromCharCode(82, 0) ? previewF.size : singleF.length));
                  if (c_playeri) {
                     break;
                  }
               } while (c_playeri && ((4 >> (Math.min(2, singleF.length))) >= 1 || (singleF.length >> (Math.min(5, Math.abs(previewF.size)))) >= 4));
               for (let s = 0; s < 1; s++) {
                  let statsnomoredatak = String.fromCharCode(111, 117, 116, 111, 117, 116, 95, 120, 95, 56, 56, 0);
                  let greenD = true;
                  let downloadern = true;
                  let overlayY: Array<any> = [370, 15, 757];
                  previewF = new Map([[statsnomoredatak, (statsnomoredatak.length + (downloadern ? 1 : 3))]]);
                  greenD = overlayY.length <= 81 || greenD;
                  downloadern = !greenD || overlayY.length == 37;
               }
               let iconsaveimageg = previewF.size >= 5703946;
               do {
                  previewF.set(singleF, 3);
                  if (iconsaveimageg) {
                     break;
                  }
               } while (iconsaveimageg && (!singleF.startsWith(`${previewF.size}`)));
               previewF.set(singleF, (singleF == String.fromCharCode(100, 0) ? previewF.size : singleF.length));
               if (singleF.includes(`${previewF.size}`)) {
                  let inouttargetyellow6 = 3.0;
                  singleF = `${(singleF == String.fromCharCode(77, 0) ? parseInt(`${inouttargetyellow6}`) : singleF.length)}`;
               }
               singleF = `${(singleF == String.fromCharCode(107, 0) ? previewF.size : singleF.length)}`;
               reactnavigationm += "2";
               if (mutedi) {
                  break;
               }
            } while (((reactnavigationm.length - 2) < 3) && mutedi);
            for (let c = 0; c < 2; c++) {
               stringsJ -= splashD.length;
            }
            iconrightorange9 &= orangedownarrow_ / (Math.max(reactnavigationm.length, 2));
            strX = [1];
            for (let y = 0; y < 2; y++) {
               bggradientY.push(3);
            }
            while (1 > bggradientY.length) {
               let countdowns = String.fromCharCode(117, 95, 57, 48, 95, 98, 101, 108, 111, 110, 103, 0);
               let androidZ = String.fromCharCode(110, 95, 55, 56, 95, 97, 99, 101, 115, 115, 111, 114, 121, 0);
               countdowns += `${countdowns.length}`;
               let subout0 = String.fromCharCode(106, 95, 54, 53, 95, 109, 112, 101, 103, 112, 115, 0);
               let upgradec = String.fromCharCode(98, 95, 51, 50, 95, 115, 111, 114, 101, 115, 101, 114, 118, 101, 0);
               androidZ = "3";
               subout0 = `${subout0.length / (Math.max(upgradec.length, 7))}`;
               upgradec += `${subout0.length ^ upgradec.length}`;
               let wind_ = countdowns.length >= 9237938;
               do {
                  let mbjscommonc = String.fromCharCode(99, 97, 112, 105, 116, 97, 108, 105, 122, 97, 116, 105, 111, 110, 95, 110, 95, 55, 57, 0);
                  let iconplays = 1;
                  let iconsubssuccessh = 1.0;
                  let configures = 5;
                  let sharemodalj = String.fromCharCode(103, 95, 50, 54, 95, 109, 105, 100, 116, 111, 110, 101, 115, 0);
                  countdowns += "1";
                  mbjscommonc = `${parseInt(`${iconsubssuccessh}`) % 3}`;
                  iconplays += (sharemodalj == String.fromCharCode(66, 0) ? sharemodalj.length : mbjscommonc.length);
                  iconsubssuccessh /= Math.max(parseFloat(`${iconplays}`), 3);
                  configures %= Math.max(4, mbjscommonc.length);
                  if (wind_) {
                     break;
                  }
               } while ((countdowns.length >= androidZ.length) && wind_);
               while (countdowns.length >= 1) {
                  androidZ = `${countdowns.length}`;
                  break;
               }
               let gradlewf = countdowns == String.fromCharCode(97, 110, 112, 116, 106, 49, 100, 106, 106, 0);
               do {
                  countdowns += `${countdowns.length % (Math.max(3, androidZ.length))}`;
                  if (gradlewf) {
                     break;
                  }
               } while ((androidZ.length >= countdowns.length) && gradlewf);
               for (let e = 0; e < 3; e++) {
                  androidZ = `${(countdowns == String.fromCharCode(77, 0) ? androidZ.length : countdowns.length)}`;
               }
               bggradientY.push(androidZ.length ^ bggradientY.length);
               break;
            }
            for (let l = 0; l < 1; l++) {
               splashD = `${reactnavigationm.length}`;
            }
            let league6 = String.fromCharCode(98, 95, 54, 56, 0);
            let sellmathbackgroundk = String.fromCharCode(100, 95, 49, 53, 95, 109, 105, 116, 101, 114, 0);
            while (league6 != String.fromCharCode(54, 0) && sellmathbackgroundk != String.fromCharCode(51, 0)) {
               let dragclosel = String.fromCharCode(108, 95, 49, 51, 95, 98, 105, 113, 117, 97, 100, 0);
               let smallorangemanF = String.fromCharCode(100, 117, 109, 112, 105, 110, 102, 111, 95, 57, 95, 54, 53, 0);
               let frame_h9 = String.fromCharCode(101, 95, 49, 51, 95, 109, 105, 120, 105, 110, 0);
               let giftbuttonQ = 1.0;
               let owngoalN = String.fromCharCode(106, 111, 98, 95, 54, 95, 55, 54, 0);
               league6 += `${league6.length}`;
               dragclosel = `${dragclosel.length}`;
               smallorangemanF = `${(String.fromCharCode(114, 0) == frame_h9 ? frame_h9.length : owngoalN.length)}`;
               giftbuttonQ += parseFloat(`${3}`);
               owngoalN += `${1 % (Math.max(9, parseInt(`${giftbuttonQ}`)))}`;
               break;
            }
            let iconbellactiveB = 5.0;
            league6 += `${sellmathbackgroundk.length ^ parseInt(`${iconbellactiveB}`)}`;
            while (iconbellactiveB >= 4.8) {
               iconbellactiveB /= Math.max(3, sellmathbackgroundk.length);
               break;
            }
            let webviewk = String.fromCharCode(105, 99, 99, 112, 95, 51, 95, 49, 48, 0);
            let minix = false;
            let c_unlockz = 2;
            sellmathbackgroundk = "2";
            webviewk = `${(webviewk == String.fromCharCode(71, 0) ? webviewk.length : (minix ? 1 : 4))}`;
            minix = webviewk.length == 91;
            c_unlockz -= 1 << (Math.min(5, webviewk.length));
            let detailsD = 5;
            league6 = `${league6.length}`;
            detailsD ^= 3 << (Math.min(5, Math.abs(detailsD)));
            orangedownarrow_ %= Math.max(1, splashD.length * stringsJ);
            let arrowP = round3 >= 9610840.0;
            do {
               round3 /= Math.max(3 >> (Math.min(3, Math.abs(stringsJ))), 4);
               if (arrowP) {
                  break;
               }
            } while (arrowP && (1.31 >= (round3 + iconrightorange9)));
            let hejik = String.fromCharCode(108, 95, 56, 57, 95, 101, 118, 97, 108, 117, 97, 116, 111, 114, 0);
            let libimagepipelineI: Array<any> = [329, 78, 596];
            hejik += `${libimagepipelineI.length}`;
            while (!hejik.includes(`${libimagepipelineI.length}`)) {
               let appsW: Array<any> = [80, 152];
               libimagepipelineI = [3];
               appsW = [appsW.length + 3];
               break;
            }
            libimagepipelineI.push(hejik.length);
            for (let p = 0; p < 2; p++) {
               libimagepipelineI.push(hejik.length / 1);
            }
            let hooks7 = false;
            let footballfiledlayout5 = 3.0;
            let areaC = String.fromCharCode(101, 95, 52, 95, 105, 110, 116, 108, 101, 0);
            libimagepipelineI.push(areaC.length);
            hooks7 = 26.99 >= footballfiledlayout5;
            footballfiledlayout5 *= 2 | parseInt(`${footballfiledlayout5}`);
            areaC = `${parseInt(`${footballfiledlayout5}`) | 3}`;
            let chatbotphotoX = 0;
            stringsJ &= stringsJ % (Math.max(internetN.length, 10));
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
         isPlayRewardVideo = false,
      }: wawaAwayShow,
      ref
   ) => {
      const screenState = useSelector<screenModel>('screenReducer');

      const videoPlayerRef = React.useRef<Video | null>();
      const { colors, textVariants } = useTheme();
      const [isFullScreen, setIsFullScreen] = useState(screenState.isPlayerFullScreen);
      const [isPaused, setIsPaused] = useState(false);
      const [isUserPaused, setIsUserPaused] = useState(false);
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
      const isFocus = useIsFocused();

      const userState = useSelector<wawaPhoneControls>('userReducer');
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

      const isOffline = useAppSelector(({ settingsReducer }: wawaIconsubssuccess) => settingsReducer.isOffline)

      const isSeekErrorRef = useRef(false);

      const { data: playerVodAds, isFetching: isFetchAds } = useQuery({
         queryKey: ["playerAdsVideo"],
         queryFn: () => wawaUsernameAdult.getPlayerAdVideo(),
         enabled: !isOffline
      });

      useEffect(() => {
         if (vod_url === '') return;

         if (showAds &&
            playerVodAds &&
            (!wawaLibglog.isVip(userState.user))
         ) {
            setShowAd(true);
            setAdCountdownTime(playerVodAds.minDuration);
            adVideoRef.current?.seek(0);


            wawa_dacccfaabfbcbadeebddcabacdffdbc_video.playsAdsViewAnalytics({
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
               let theme1 = String.fromCharCode(109, 112, 115, 117, 98, 95, 101, 95, 56, 50, 0);
               let iconsharefriendsd = String.fromCharCode(106, 95, 57, 52, 95, 115, 111, 105, 115, 100, 105, 115, 99, 111, 110, 110, 101, 99, 116, 105, 110, 103, 0);
               let plus3 = String.fromCharCode(98, 95, 55, 53, 95, 116, 116, 97, 101, 110, 99, 100, 115, 112, 0);
               let baselineJ = String.fromCharCode(121, 95, 56, 52, 95, 100, 97, 116, 97, 104, 97, 115, 104, 0);
               let iconchatsendM = String.fromCharCode(118, 100, 114, 97, 119, 104, 101, 108, 112, 101, 114, 95, 56, 95, 52, 0);
               let leaguedetailsbgu = String.fromCharCode(102, 95, 50, 57, 95, 103, 101, 116, 108, 97, 100, 100, 114, 115, 0);
               let rocketr = 1.0;
               let refreshborderlessF = 2.0;
               let libtanD = 0;
               let l_imageL = 5.0;
               let graphicsq = true;
               let time_bm = String.fromCharCode(115, 95, 50, 55, 95, 118, 97, 114, 105, 97, 98, 108, 101, 0);
               let defaultfootballbgk = 5568498 <= libtanD;
               do {
                  let typesV = 5;
                  let stylesD = String.fromCharCode(105, 110, 116, 101, 114, 112, 111, 108, 97, 116, 101, 102, 95, 105, 95, 49, 50, 0);
                  let shootyesgoal3 = 0;
                  let penaltyz: Array<any> = [777, 621, 575];
                  for (let n = 0; n < 1; n++) {
                     typesV <<= Math.min(Math.abs(shootyesgoal3 / (Math.max(3, penaltyz.length))), 4);
                  }
                  if (4 < (5 & stylesD.length)) {
                     let singaporel: Array<any> = [844, 702];
                     let icon7: Array<any> = [398, 541, 718];
                     let iconpipexpand3 = false;
                     let iconeditV = String.fromCharCode(109, 95, 55, 52, 95, 115, 116, 114, 116, 111, 105, 110, 116, 0);
                     stylesD += `${iconeditV.length}`;
                     singaporel = [singaporel.length | icon7.length];
                     icon7.push(((iconpipexpand3 ? 1 : 2) << (Math.min(Math.abs(3), 5))));
                     iconpipexpand3 = icon7.includes(iconpipexpand3);
                     iconeditV = `${icon7.length ^ 1}`;
                  }
                  for (let o = 0; o < 2; o++) {
                     penaltyz = [penaltyz.length * 3];
                  }
                  stylesD = `${stylesD.length}`;
                  while ((3 << (Math.min(4, Math.abs(shootyesgoal3)))) < 2) {
                     stylesD = `${1 ^ penaltyz.length}`;
                     break;
                  }
                  if ((typesV % (Math.max(3, stylesD.length))) > 4) {
                     let malaysiad = 2;
                     let basketballawayteamT: Map<any, any> = new Map([[String.fromCharCode(113, 95, 49, 55, 95, 112, 114, 111, 99, 97, 109, 112, 0), 554], [String.fromCharCode(100, 111, 119, 110, 108, 111, 97, 100, 115, 95, 52, 95, 53, 54, 0), 219], [String.fromCharCode(107, 95, 52, 50, 95, 120, 103, 97, 115, 0), 571]]);
                     let videobufferloadingU = String.fromCharCode(99, 98, 115, 110, 105, 100, 95, 117, 95, 50, 52, 0);
                     let modele = 0.0;
                     stylesD = `${basketballawayteamT.size}`;
                     malaysiad *= 3;
                     basketballawayteamT = new Map([[videobufferloadingU, 3]]);
                     videobufferloadingU = `${malaysiad * 2}`;
                     modele += parseInt(`${modele}`);
                  }
                  while (3 == (1 | typesV)) {
                     let sendZ = String.fromCharCode(122, 95, 53, 48, 95, 116, 111, 110, 101, 109, 97, 112, 0);
                     let g_animationn = String.fromCharCode(101, 95, 50, 56, 95, 109, 97, 116, 99, 104, 105, 110, 102, 111, 0);
                     let descF = String.fromCharCode(114, 108, 105, 110, 101, 95, 104, 95, 53, 53, 0);
                     typesV |= sendZ.length << (Math.min(2, penaltyz.length));
                     sendZ = "2";
                     g_animationn = `${descF.length % 2}`;
                     descF += `${descF.length}`;
                     break;
                  }
                  if (stylesD.startsWith(`${shootyesgoal3}`)) {
                     let scorer = 3.0;
                     let templateprocessorM = false;
                     let defaultpredictionprofileT = 4.0;
                     let homeactiveo = String.fromCharCode(112, 97, 110, 95, 53, 95, 57, 50, 0);
                     stylesD = `${shootyesgoal3}`;
                     scorer *= (parseFloat(`${(templateprocessorM ? 2 : 1) & parseInt(`${scorer}`)}`));
                     templateprocessorM = 88.15 <= defaultpredictionprofileT;
                     defaultpredictionprofileT -= parseFloat(`${parseInt(`${defaultpredictionprofileT}`) % 2}`);
                     homeactiveo += `${parseInt(`${scorer}`) - 3}`;
                  }
                  let mbbidz = 1.0;
                  stylesD += `${shootyesgoal3 | 1}`;
                  let backgroundX: Map<any, any> = new Map([[String.fromCharCode(115, 95, 55, 54, 95, 114, 101, 102, 105, 110, 101, 114, 0), String.fromCharCode(103, 95, 49, 53, 95, 109, 105, 110, 105, 109, 105, 122, 101, 0)], [String.fromCharCode(119, 95, 49, 48, 48, 95, 103, 101, 116, 112, 97, 103, 101, 115, 105, 122, 101, 0), String.fromCharCode(109, 95, 54, 56, 95, 105, 103, 110, 112, 111, 115, 116, 0)]]);
                  let topone: Map<any, any> = new Map([[String.fromCharCode(106, 95, 53, 49, 95, 109, 97, 112, 108, 105, 109, 105, 116, 0), false], [String.fromCharCode(98, 97, 110, 100, 95, 119, 95, 52, 50, 0), false]]);
                  let bdxadsdkD = 9223377 >= topone.size;
                  do {
                     let owngoalt = 3.0;
                     topone.set(`${typesV}`, 1 | shootyesgoal3);
                     owngoalt += 1 ^ parseInt(`${owngoalt}`);
                     if (bdxadsdkD) {
                        break;
                     }
                  } while (bdxadsdkD && (backgroundX.size <= 3));
                  libtanD -= parseInt(`${refreshborderlessF}`);
                  if (defaultfootballbgk) {
                     break;
                  }
               } while ((!theme1.endsWith(`${libtanD}`)) && defaultfootballbgk);
               iconchatsendM = `${plus3.length >> (Math.min(Math.abs(1), 3))}`;
               for (let n = 0; n < 2; n++) {
                  let runtimei = 2.0;
                  runtimei += 1;
                  let videobufferloading7 = 9231471.0 >= runtimei;
                  do {
                     let inouttargetredc = String.fromCharCode(119, 105, 110, 115, 111, 99, 107, 95, 120, 95, 52, 51, 0);
                     let foundf = 1;
                     let floaterH = String.fromCharCode(97, 110, 103, 117, 108, 97, 114, 95, 120, 95, 56, 57, 0);
                     let stepW = 4;
                     runtimei += stepW / (Math.max(floaterH.length, 8));
                     inouttargetredc += `${inouttargetredc.length}`;
                     foundf >>= Math.min(Math.abs(foundf - 2), 5);
                     floaterH += `${foundf}`;
                     stepW <<= Math.min(Math.abs(foundf), 4);
                     if (videobufferloading7) {
                        break;
                     }
                  } while (videobufferloading7 && (runtimei >= 3.79));
                  for (let n = 0; n < 2; n++) {
                     runtimei /= Math.max(parseInt(`${runtimei}`), 3);
                  }
                  theme1 = `${plus3.length}`;
               }
               if ((3 ^ libtanD) == 5 || 3 == (3 ^ libtanD)) {
                  leaguedetailsbgu = `${leaguedetailsbgu.length}`;
               }
               iconsharefriendsd = "3";
               for (let f = 0; f < 1; f++) {
                  refreshborderlessF += parseFloat(`${plus3.length | parseInt(`${refreshborderlessF}`)}`);
               }
               iconchatsendM = "2";
               if (5.30 < l_imageL) {
                  baselineJ = `${iconchatsendM.length}`;
               }
               while (baselineJ == String.fromCharCode(116, 0)) {
                  iconsharefriendsd = `${libtanD}`;
                  break;
               }
               while (4 == (5 * iconchatsendM.length)) {
                  libtanD ^= iconchatsendM.length ^ baselineJ.length;
                  break;
               }
               for (let b = 0; b < 2; b++) {
                  iconsharefriendsd += `${2 >> (Math.min(Math.abs(libtanD), 5))}`;
               }
               libtanD &= 2;
               iconchatsendM = `${(iconsharefriendsd == String.fromCharCode(114, 0) ? iconsharefriendsd.length : parseInt(`${rocketr}`))}`;
               while (5 == (parseInt(`${refreshborderlessF}`) - plus3.length) || (parseInt(`${refreshborderlessF}`) - plus3.length) == 5) {
                  refreshborderlessF *= parseFloat(`${iconchatsendM.length & 1}`);
                  break;
               }
               let fullscreenmaxq = 9534820 <= baselineJ.length;
               do {
                  let neonh = String.fromCharCode(112, 95, 54, 52, 95, 101, 115, 116, 97, 98, 108, 105, 115, 104, 0);
                  let libfbv = 4.0;
                  let utilsz = String.fromCharCode(100, 105, 115, 112, 97, 116, 99, 104, 101, 100, 95, 48, 95, 54, 51, 0);
                  let time_bfy = 0;
                  let buildg = String.fromCharCode(115, 116, 117, 100, 105, 111, 118, 105, 115, 117, 97, 108, 111, 98, 106, 101, 99, 116, 95, 104, 95, 51, 54, 0);
                  buildg += `${(utilsz == String.fromCharCode(51, 0) ? utilsz.length : time_bfy)}`;
                  for (let c = 0; c < 2; c++) {
                     neonh += "3";
                  }
                  if ((parseFloat(`${neonh.length}`) * libfbv) == 4.47) {
                     neonh = "1";
                  }
                  let traminiZ = 9379518 <= time_bfy;
                  do {
                     time_bfy %= Math.max(4, parseInt(`${libfbv}`));
                     if (traminiZ) {
                        break;
                     }
                  } while ((4.45 == (libfbv * 3.65) || (parseFloat(`${time_bfy}`) * libfbv) == 3.65) && traminiZ);
                  if (buildg.startsWith(`${neonh.length}`)) {
                     let editE: Array<any> = [708, 714, 354];
                     let routert = 1;
                     neonh += "2";
                     editE = [1];
                     routert ^= editE.length;
                  }
                  let statistics2 = true;
                  let imagesx = true;
                  time_bfy ^= (String.fromCharCode(69, 0) == utilsz ? time_bfy : utilsz.length);
                  for (let w = 0; w < 2; w++) {
                     time_bfy >>= Math.min(Math.abs(time_bfy), 2);
                  }
                  let expiredS = String.fromCharCode(100, 95, 49, 51, 95, 117, 110, 100, 101, 114, 108, 121, 105, 110, 103, 0);
                  let toponb = 2.0;
                  let inactive8 = String.fromCharCode(101, 95, 49, 53, 95, 114, 103, 98, 116, 111, 98, 103, 114, 0);
                  time_bfy >>= Math.min(4, Math.abs((inactive8 == String.fromCharCode(49, 0) ? parseInt(`${libfbv}`) : inactive8.length)));
                  expiredS = "2";
                  toponb *= parseFloat(`${2}`);
                  let singlep = String.fromCharCode(110, 111, 114, 109, 97, 108, 105, 115, 101, 95, 98, 95, 53, 55, 0);
                  let matchO = String.fromCharCode(99, 95, 57, 49, 95, 104, 111, 110, 101, 121, 0);
                  while (!buildg.endsWith(`${time_bfy}`)) {
                     let filedw = 4;
                     let downloadi = false;
                     let hometeamfieldD = 1;
                     let textlayoutmanagerY: Array<any> = [614, 552, 881];
                     let delegate_dv = String.fromCharCode(101, 118, 114, 99, 95, 112, 95, 54, 0);
                     buildg += `${utilsz.length % (Math.max(3, 3))}`;
                     filedw -= delegate_dv.length % 1;
                     downloadi = !downloadi;
                     hometeamfieldD &= textlayoutmanagerY.length;
                     textlayoutmanagerY.push(filedw - 3);
                     delegate_dv += `${(filedw * (downloadi ? 4 : 1))}`;
                     break;
                  }
                  if (neonh.length <= buildg.length) {
                     neonh = `${2 % (Math.max(4, time_bfy))}`;
                  }
                  let whitetick4 = 3;
                  let zhengpiant = String.fromCharCode(100, 95, 51, 95, 105, 112, 111, 100, 0);
                  let typing3 = 0.0;
                  neonh = `${(matchO.length + (imagesx ? 3 : 2))}`;
                  whitetick4 >>= Math.min(2, Math.abs((String.fromCharCode(73, 0) == zhengpiant ? parseInt(`${typing3}`) : zhengpiant.length)));
                  typing3 -= parseInt(`${typing3}`) >> (Math.min(zhengpiant.length, 5));
                  for (let e = 0; e < 1; e++) {
                     let iconnewsshared = String.fromCharCode(116, 101, 115, 116, 105, 110, 103, 95, 51, 95, 49, 56, 0);
                     let libreactJ = 3.0;
                     let selection3: Array<any> = [338, 712];
                     let iconbackwhiteF = String.fromCharCode(99, 104, 111, 115, 101, 110, 95, 52, 95, 53, 51, 0);
                     let materialS = 4.0;
                     buildg = `${(2 | (statistics2 ? 3 : 5))}`;
                     iconnewsshared += `${parseInt(`${materialS}`)}`;
                     libreactJ += parseInt(`${materialS}`) ^ parseInt(`${libreactJ}`);
                     selection3 = [(String.fromCharCode(55, 0) == iconnewsshared ? iconnewsshared.length : parseInt(`${libreactJ}`))];
                     iconbackwhiteF += `${2 % (Math.max(7, parseInt(`${materialS}`)))}`;
                  }
                  if (utilsz.length <= 4) {
                     time_bfy /= Math.max(1, matchO.length);
                  }
                  baselineJ = `${(String.fromCharCode(108, 0) == buildg ? buildg.length : parseInt(`${libfbv}`))}`;
                  if (fullscreenmaxq) {
                     break;
                  }
               } while ((l_imageL >= 2.28) && fullscreenmaxq);
               plus3 += `${2 - theme1.length}`;
               while ((theme1.length | 2) <= 5 || (theme1.length * parseInt(`${refreshborderlessF}`)) <= 2) {
                  let clearR: Map<any, any> = new Map([[String.fromCharCode(104, 95, 50, 48, 95, 112, 114, 105, 111, 114, 105, 116, 121, 113, 0), 498], [String.fromCharCode(114, 111, 119, 95, 120, 95, 56, 54, 0), 433], [String.fromCharCode(102, 95, 54, 50, 95, 114, 97, 115, 116, 101, 114, 0), 108]]);
                  clearR.set(`${clearR.size}`, 3);
                  while (3 <= (clearR.size & 2) || 2 <= (clearR.size & clearR.size)) {
                     clearR.set(`${clearR.size}`, 2 - clearR.size);
                     break;
                  }
                  let showS = 1.0;
                  clearR = new Map([[`${clearR.size}`, clearR.size / (Math.max(1, 7))]]);
                  showS /= Math.max(2, parseFloat(`${1 / (Math.max(parseInt(`${showS}`), 7))}`));
                  refreshborderlessF += parseFloat(`${theme1.length << (Math.min(leaguedetailsbgu.length, 2))}`);
                  break;
               }
               l_imageL /= Math.max(5, baselineJ.length);
               plus3 += `${3 | plus3.length}`;

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
                  let videoG = 2.0;
                  let librrcn: Array<any> = [String.fromCharCode(115, 111, 99, 107, 101, 116, 118, 97, 114, 95, 102, 95, 55, 56, 0), String.fromCharCode(97, 115, 105, 115, 95, 48, 95, 53, 53, 0), String.fromCharCode(111, 95, 51, 55, 95, 115, 119, 102, 104, 97, 115, 104, 0)];
                  let predictionbannerS: Map<any, any> = new Map([[String.fromCharCode(109, 98, 117, 118, 101, 114, 114, 111, 114, 95, 104, 95, 55, 53, 0), 477], [String.fromCharCode(110, 95, 52, 56, 95, 115, 105, 103, 115, 108, 111, 116, 0), 264], [String.fromCharCode(114, 101, 99, 111, 114, 100, 101, 114, 95, 103, 95, 55, 48, 0), 571]]);
                  let temp4 = true;
                  let templateprocessore = String.fromCharCode(117, 95, 49, 48, 95, 105, 109, 109, 101, 100, 105, 97, 116, 101, 0);
                  let checkboxb = String.fromCharCode(97, 118, 115, 116, 114, 105, 110, 103, 95, 100, 95, 57, 52, 0);
                  let runtimeschedulerR = String.fromCharCode(112, 95, 49, 95, 115, 101, 118, 101, 114, 105, 116, 121, 0);
                  let customc = 5.0;
                  let awayiconT: Map<any, any> = new Map([[String.fromCharCode(99, 104, 101, 98, 121, 115, 104, 101, 118, 95, 111, 95, 57, 48, 0), 642], [String.fromCharCode(122, 98, 105, 110, 95, 98, 95, 53, 53, 0), 298], [String.fromCharCode(99, 109, 111, 118, 101, 95, 99, 95, 52, 0), 493]]);
                  let mbsplash_: Array<any> = [542, 974, 552];
                  customc -= parseFloat(`${1}`);
                  if (1 == templateprocessore.length) {
                     let shootnogoalW = 5.0;
                     let libfollya: Map<any, any> = new Map([[String.fromCharCode(118, 95, 56, 95, 116, 120, 116, 111, 98, 106, 0), 702], [String.fromCharCode(114, 101, 100, 105, 114, 101, 99, 116, 105, 111, 110, 97, 108, 95, 56, 95, 50, 53, 0), 159]]);
                     shootnogoalW += libfollya.size * parseInt(`${shootnogoalW}`);
                     let userm = true;
                     libfollya = new Map([[`${libfollya.size}`, parseInt(`${shootnogoalW}`) | 1]]);
                     userm = (!userm ? !userm : !userm);
                     let libaney = String.fromCharCode(98, 111, 100, 105, 101, 115, 95, 119, 95, 53, 54, 0);
                     for (let u = 0; u < 1; u++) {
                        shootnogoalW /= Math.max(libfollya.size & libaney.length, 2);
                     }
                     shootnogoalW /= Math.max(5, (libaney == String.fromCharCode(82, 0) ? parseInt(`${shootnogoalW}`) : libaney.length));
                     while (2 > (parseInt(`${shootnogoalW}`) / (Math.max(libfollya.size, 5))) && 1 > (libfollya.size / 2)) {
                        libfollya.set(`${libaney}`, libfollya.size);
                        break;
                     }
                     checkboxb = `${librrcn.length}`;
                  }
                  let dicee = false;
                  let historyM = String.fromCharCode(115, 99, 104, 101, 100, 117, 108, 101, 114, 95, 111, 95, 54, 55, 0);
                  while (historyM.endsWith(`${dicee}`)) {
                     dicee = historyM.length == 1 || dicee;
                     break;
                  }
                  for (let w = 0; w < 3; w++) {
                     dicee = historyM.length < 44;
                  }
                  historyM = `${(historyM.length << (Math.min(4, Math.abs((dicee ? 4 : 2)))))}`;
                  let chatroombackgroundP = 4.0;
                  let faviconE = 2.0;
                  chatroombackgroundP *= (historyM.length & (dicee ? 2 : 2));
                  dicee = (faviconE * chatroombackgroundP) > 22.18;
                  templateprocessore += `${parseInt(`${videoG}`) & librrcn.length}`;
                  let middlewarei = String.fromCharCode(101, 97, 99, 115, 95, 112, 95, 53, 56, 0);
                  let securityp = String.fromCharCode(111, 95, 54, 95, 112, 111, 115, 116, 112, 111, 110, 101, 0);
                  let homep = String.fromCharCode(100, 57, 116, 53, 57, 52, 104, 118, 0) == securityp;
                  do {
                     securityp += `${(securityp == String.fromCharCode(120, 0) ? middlewarei.length : securityp.length)}`;
                     if (homep) {
                        break;
                     }
                  } while ((securityp.endsWith(`${middlewarei.length}`)) && homep);
                  let fcdaebecbcbafcdfceaaeccfeacdbO = 8564639 >= middlewarei.length;
                  do {
                     middlewarei += "3";
                     if (fcdaebecbcbafcdfceaaeccfeacdbO) {
                        break;
                     }
                  } while ((3 <= middlewarei.length) && fcdaebecbcbafcdfceaaeccfeacdbO);
                  securityp = `${middlewarei.length - 1}`;
                  let closeq: Array<any> = [948, 51];
                  let holderx: Array<any> = [539, 969];
                  let progress1: Array<any> = [1000, 249];
                  let muteds = 8959677 >= closeq.length;
                  do {
                     closeq = [3 + holderx.length];
                     if (muteds) {
                        break;
                     }
                  } while ((5 > (3 << (Math.min(4, middlewarei.length)))) && muteds);
                  templateprocessore += `${librrcn.length << (Math.min(Math.abs(2), 1))}`;
                  while (!Array.from(predictionbannerS.values()).includes(librrcn.length)) {
                     librrcn.push(predictionbannerS.size & 2);
                     break;
                  }
                  for (let a = 0; a < 2; a++) {
                     temp4 = 67 <= predictionbannerS.size && librrcn.length <= 67;
                  }
                  let eyeopenb = awayiconT.size <= 8271584;
                  do {
                     let whatsappB = String.fromCharCode(98, 103, 114, 97, 95, 109, 95, 49, 56, 0);
                     if (whatsappB.includes(whatsappB)) {
                        let libhermesO = String.fromCharCode(99, 104, 114, 111, 110, 111, 95, 106, 95, 50, 51, 0);
                        let arrowrightC = String.fromCharCode(112, 108, 97, 121, 95, 120, 95, 51, 57, 0);
                        let downloaderi: Map<any, any> = new Map([[String.fromCharCode(103, 95, 53, 56, 95, 97, 118, 102, 111, 114, 109, 97, 116, 109, 97, 112, 112, 101, 114, 116, 101, 115, 116, 115, 0), String.fromCharCode(114, 101, 97, 100, 105, 110, 95, 51, 95, 51, 55, 0)], [String.fromCharCode(109, 98, 101, 100, 95, 51, 95, 48, 0), String.fromCharCode(105, 110, 116, 101, 103, 114, 97, 116, 101, 100, 95, 54, 95, 53, 54, 0)], [String.fromCharCode(101, 95, 50, 56, 95, 98, 97, 110, 100, 101, 100, 0), String.fromCharCode(107, 117, 107, 105, 95, 121, 95, 53, 53, 0)]]);
                        let firebaseO = String.fromCharCode(121, 95, 50, 50, 95, 99, 111, 110, 118, 101, 114, 116, 101, 114, 0);
                        whatsappB = `${downloaderi.size >> (Math.min(Math.abs(1), 2))}`;
                        libhermesO = `${(String.fromCharCode(69, 0) == libhermesO ? arrowrightC.length : libhermesO.length)}`;
                        arrowrightC = `${firebaseO.length}`;
                        downloaderi.set(arrowrightC, libhermesO.length);
                        firebaseO += `${arrowrightC.length}`;
                     }
                     while (whatsappB == whatsappB) {
                        whatsappB += `${whatsappB.length ^ 3}`;
                        break;
                     }
                     while (2 == whatsappB.length) {
                        whatsappB += `${whatsappB.length}`;
                        break;
                     }
                     awayiconT = new Map([[`${awayiconT.size}`, awayiconT.size % 3]]);
                     if (eyeopenb) {
                        break;
                     }
                  } while (((4 & awayiconT.size) >= 3 && 1 >= (4 & awayiconT.size)) && eyeopenb);
                  awayiconT.set(`${checkboxb}`, predictionbannerS.size >> (Math.min(Math.abs(2), 2)));
                  while (!Array.from(awayiconT.values()).includes(customc)) {
                     awayiconT.set(templateprocessore, (templateprocessore == String.fromCharCode(79, 0) ? templateprocessore.length : awayiconT.size));
                     break;
                  }
                  let predictionactiveS = runtimeschedulerR.length <= 9220924;
                  do {
                     runtimeschedulerR += "2";
                     if (predictionactiveS) {
                        break;
                     }
                  } while (predictionactiveS && (templateprocessore == String.fromCharCode(79, 0)));
                  while (2 <= (3 + awayiconT.size) || (awayiconT.size + 3) <= 3) {
                     awayiconT = new Map([[`${librrcn.length}`, librrcn.length]]);
                     break;
                  }
                  let selected1 = 2;
                  let basketballicon1 = String.fromCharCode(114, 95, 51, 54, 95, 111, 112, 99, 111, 100, 101, 115, 0);
                  if (1 >= selected1) {
                     let vietnamD = String.fromCharCode(115, 95, 53, 51, 95, 103, 97, 109, 97, 0);
                     let liveendmodallogo4 = String.fromCharCode(104, 95, 49, 56, 95, 115, 99, 97, 108, 105, 110, 103, 0);
                     let root_ = true;
                     selected1 |= 1;
                     vietnamD += `${vietnamD.length >> (Math.min(Math.abs(1), 1))}`;
                     liveendmodallogo4 = `${vietnamD.length}`;
                     root_ = liveendmodallogo4.length <= vietnamD.length;
                  }
                  if (5 >= selected1) {
                     let inouttargetyellowG = 1;
                     let matchinactivey = String.fromCharCode(116, 114, 117, 101, 115, 112, 101, 101, 99, 104, 95, 55, 95, 54, 55, 0);
                     let reactl = true;
                     let componentregistryb = true;
                     selected1 <<= Math.min(4, Math.abs(((componentregistryb ? 2 : 3) - basketballicon1.length)));
                     inouttargetyellowG &= ((reactl ? 1 : 3) + 1);
                     matchinactivey += "1";
                     reactl = matchinactivey.includes(`${inouttargetyellowG}`);
                     componentregistryb = matchinactivey.startsWith(`${inouttargetyellowG}`);
                  }
                  let penaltyw = String.fromCharCode(119, 95, 56, 51, 95, 98, 110, 98, 105, 110, 112, 97, 100, 0);
                  let libreanimatedx = String.fromCharCode(111, 95, 57, 95, 115, 101, 113, 110, 111, 0);
                  selected1 %= Math.max(2, selected1 | libreanimatedx.length);
                  penaltyw = `${penaltyw.length}`;
                  libreanimatedx = `${penaltyw.length}`;
                  basketballicon1 = `${1 + basketballicon1.length}`;
                  let friends8: Map<any, any> = new Map([[String.fromCharCode(108, 95, 56, 52, 95, 115, 104, 101, 108, 108, 0), 951], [String.fromCharCode(114, 101, 112, 115, 116, 114, 95, 112, 95, 55, 55, 0), 334]]);
                  let moreA = String.fromCharCode(108, 95, 53, 53, 95, 116, 101, 108, 101, 112, 104, 111, 116, 111, 0);
                  selected1 ^= friends8.size - selected1;
                  friends8 = new Map([[moreA, moreA.length]]);
                  for (let e = 0; e < 3; e++) {
                     basketballicon1 += "2";
                  }
                  temp4 = runtimeschedulerR.includes(`${selected1}`);
                  librrcn = [parseInt(`${videoG}`) << (Math.min(templateprocessore.length, 1))];
                  for (let p = 0; p < 2; p++) {
                     let middlewareH = 0.0;
                     let selectionp = String.fromCharCode(99, 95, 51, 49, 95, 103, 101, 116, 100, 105, 103, 105, 116, 0);
                     let carouselV = 1;
                     let room6 = 1.0;
                     let settingD = 3;
                     let bdxadsdkc = 1.0;
                     let iconviewergifu = 5;
                     let homeloadingG: Array<any> = [349, 997, 701];
                     selectionp += `${selectionp.length}`;
                     bdxadsdkc /= Math.max(parseFloat(`${3 | iconviewergifu}`), 4);
                     iconviewergifu *= iconviewergifu & 1;
                     homeloadingG.push(homeloadingG.length - iconviewergifu);
                     let chatroombackgroundT = room6 >= 7749967.0;
                     do {
                        room6 /= Math.max(1, parseFloat(`${settingD}`));
                        if (chatroombackgroundT) {
                           break;
                        }
                     } while (((2.79 - room6) >= 3.94 && (parseInt(`${room6}`) - settingD) >= 2) && chatroombackgroundT);
                     room6 /= Math.max(parseFloat(`${parseInt(`${middlewareH}`)}`), 3);
                     for (let b = 0; b < 3; b++) {
                        let yellowredcardI = true;
                        let spinnerX = 2.0;
                        let abidetectt = 3;
                        let nalyticsm = 5;
                        let imagesd = String.fromCharCode(108, 101, 97, 115, 101, 95, 98, 95, 55, 57, 0);
                        selectionp += `${abidetectt}`;
                        yellowredcardI = spinnerX == 96.13;
                        spinnerX /= Math.max(3, parseFloat(`${imagesd.length}`));
                        abidetectt >>= Math.min(Math.abs(((yellowredcardI ? 5 : 5) * parseInt(`${spinnerX}`))), 1);
                        nalyticsm ^= parseInt(`${spinnerX}`) << (Math.min(3, Math.abs(3)));
                        imagesd += `${((yellowredcardI ? 2 : 2) ^ parseInt(`${spinnerX}`))}`;
                     }
                     carouselV /= Math.max(settingD << (Math.min(3, Math.abs(1))), 5);
                     settingD &= (String.fromCharCode(55, 0) == selectionp ? selectionp.length : parseInt(`${middlewareH}`));
                     if ((4 - selectionp.length) <= 2 && (4.64 - middlewareH) <= 4.87) {
                        selectionp = "2";
                     }
                     for (let h = 0; h < 1; h++) {
                        settingD |= selectionp.length ^ carouselV;
                     }
                     if (3 < (carouselV - 2)) {
                        carouselV >>= Math.min(5, Math.abs(settingD | 3));
                     }
                     let background5 = carouselV <= 5451513;
                     do {
                        let morer = 3.0;
                        let styles_ = String.fromCharCode(99, 111, 110, 99, 117, 114, 101, 110, 116, 95, 121, 95, 57, 50, 0);
                        carouselV /= Math.max(3, 2 | parseInt(`${room6}`));
                        morer /= Math.max(3, parseFloat(`${styles_.length}`));
                        styles_ += `${parseInt(`${morer}`) % (Math.max(styles_.length, 3))}`;
                        if (background5) {
                           break;
                        }
                     } while (background5 && (selectionp.length == carouselV));
                     while (3 == selectionp.length) {
                        let assistn = String.fromCharCode(121, 95, 51, 57, 95, 99, 97, 114, 111, 117, 115, 101, 108, 0);
                        let matchesG = String.fromCharCode(117, 108, 116, 114, 97, 95, 56, 95, 51, 48, 0);
                        let airbnbstarF: Map<any, any> = new Map([[String.fromCharCode(115, 115, 116, 104, 114, 101, 115, 104, 95, 109, 95, 54, 54, 0), false], [String.fromCharCode(118, 95, 50, 95, 112, 97, 114, 115, 101, 0), false], [String.fromCharCode(101, 110, 99, 105, 114, 99, 108, 101, 100, 95, 114, 95, 51, 50, 0), true]]);
                        settingD -= parseInt(`${middlewareH}`) % (Math.max(matchesG.length, 10));
                        assistn = `${3 >> (Math.min(3, assistn.length))}`;
                        matchesG = `${airbnbstarF.size}`;
                        airbnbstarF.set(assistn, assistn.length ^ 3);
                        break;
                     }
                     settingD <<= Math.min(Math.abs(settingD % (Math.max(carouselV, 4))), 2);
                     if (1.18 >= (room6 * 3.61)) {
                        let dialog2 = 2.0;
                        let userY = 2;
                        let latnJ = 4.0;
                        let bgvipxvodA: Array<any> = [521, 438];
                        room6 *= parseFloat(`${userY}`);
                        dialog2 -= 3;
                        userY /= Math.max(5, parseInt(`${latnJ}`) << (Math.min(1, Math.abs(3))));
                        latnJ -= parseInt(`${dialog2}`) - 3;
                        bgvipxvodA = [1 >> (Math.min(2, bgvipxvodA.length))];
                     }
                     room6 /= Math.max(5, parseFloat(`${parseInt(`${room6}`)}`));
                     while (3 <= carouselV) {
                        carouselV |= selectionp.length;
                        break;
                     }
                     videoG -= parseFloat(`${parseInt(`${room6}`) ^ 3}`);
                  }
                  awayiconT.set(templateprocessore, 3);
                  predictionbannerS = new Map([[`${librrcn.length}`, librrcn.length / (Math.max(1, 7))]]);
                  customc /= Math.max(parseFloat(`${1}`), 3);
                  if (2 <= (templateprocessore.length | 1) || (1 | predictionbannerS.size) <= 4) {
                     templateprocessore = `${librrcn.length | runtimeschedulerR.length}`;
                  }
                  librrcn.push(templateprocessore.length);

                  setAdCountdownTime(prev => prev - 1);
               }, 1000)
            }
         },
         isPaused: isPaused,
         setCurrentTime: (time) => setCurrentTime(time),
      }));

      const onGoBack = () => {
         let favicon3 = 0.0;
         let wifirouterU: Map<any, any> = new Map([[String.fromCharCode(117, 110, 114, 101, 102, 95, 54, 95, 49, 52, 0), false], [String.fromCharCode(107, 95, 56, 48, 95, 99, 111, 110, 110, 101, 99, 116, 120, 0), true], [String.fromCharCode(115, 95, 54, 57, 95, 97, 116, 97, 99, 101, 110, 116, 101, 114, 0), false]]);
         let serviceo: Map<any, any> = new Map([[String.fromCharCode(113, 95, 53, 52, 95, 114, 111, 112, 115, 116, 101, 110, 0), 497], [String.fromCharCode(119, 95, 49, 52, 95, 112, 97, 114, 101, 110, 116, 115, 0), 35], [String.fromCharCode(115, 101, 103, 109, 101, 110, 116, 117, 114, 108, 110, 111, 100, 101, 95, 113, 95, 50, 50, 0), 282]]);
         let tooltipsS = String.fromCharCode(98, 105, 110, 104, 101, 120, 95, 112, 95, 49, 48, 48, 0);
         let backiconY = 2;
         let index8: Array<any> = [String.fromCharCode(97, 95, 52, 54, 95, 103, 102, 105, 110, 116, 0), String.fromCharCode(113, 116, 97, 98, 108, 101, 115, 95, 53, 95, 50, 54, 0)];
         let constantsP = 2.0;
         let chinasame8: Array<any> = [38, 246];
         let security1 = 0.0;
         let libreactperfloggerjniE = String.fromCharCode(109, 95, 50, 56, 0);
         let profileactivek = String.fromCharCode(97, 95, 56, 53, 95, 115, 99, 104, 101, 109, 101, 115, 0);
         let hongkongC = constantsP <= 5587223.0;
         do {
            let chart8 = 3;
            let full0 = String.fromCharCode(110, 95, 50, 54, 95, 105, 110, 110, 101, 114, 0);
            let values1: Array<any> = [425, 808];
            let iconlogout3 = String.fromCharCode(120, 95, 56, 50, 95, 109, 97, 114, 107, 105, 110, 103, 115, 0);
            values1.push((String.fromCharCode(118, 0) == full0 ? full0.length : chart8));
            let iconmoreL = 1.0;
            let iconwatchnow1 = 0.0;
            let thailandj = true;
            iconlogout3 += `${chart8 / (Math.max(parseInt(`${iconmoreL}`), 6))}`;
            iconmoreL += (parseFloat(`${parseInt(`${iconwatchnow1}`) >> (Math.min(4, Math.abs((thailandj ? 1 : 5))))}`));
            iconwatchnow1 *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${iconwatchnow1}`)), 3))}`);
            thailandj = 69.60 <= iconwatchnow1;
            for (let r = 0; r < 3; r++) {
               let hometeamfieldT = String.fromCharCode(117, 110, 105, 100, 101, 110, 116, 105, 102, 105, 101, 100, 95, 98, 95, 56, 51, 0);
               let filteri: Array<any> = [String.fromCharCode(97, 103, 101, 95, 52, 95, 55, 52, 0), String.fromCharCode(117, 95, 54, 51, 95, 100, 114, 105, 118, 101, 114, 115, 0)];
               iconlogout3 += `${values1.length | chart8}`;
               hometeamfieldT = `${3 - filteri.length}`;
               filteri = [hometeamfieldT.length >> (Math.min(Math.abs(1), 1))];
            }
            for (let d = 0; d < 2; d++) {
               chart8 ^= 1;
            }
            let topicr: Array<any> = [341, 764, 132];
            let danger9: Map<any, any> = new Map([[String.fromCharCode(111, 95, 51, 52, 95, 102, 112, 99, 0), true], [String.fromCharCode(110, 95, 56, 56, 95, 103, 101, 116, 120, 115, 115, 101, 0), true], [String.fromCharCode(99, 95, 57, 52, 95, 112, 97, 116, 104, 0), true]]);
            iconlogout3 = `${chart8 - topicr.length}`;
            topicr.push(danger9.size);
            danger9 = new Map([[`${danger9.size}`, 3]]);
            for (let b = 0; b < 3; b++) {
               iconlogout3 = `${(String.fromCharCode(66, 0) == full0 ? values1.length : full0.length)}`;
            }
            while (iconlogout3.startsWith(`${values1.length}`)) {
               values1 = [values1.length / (Math.max(3, 3))];
               break;
            }
            let gdtadvQ = full0 == String.fromCharCode(103, 116, 99, 104, 110, 102, 0);
            do {
               full0 = `${chart8}`;
               if (gdtadvQ) {
                  break;
               }
            } while (gdtadvQ && (2 < (chart8 % (Math.max(1, 10)))));
            for (let w = 0; w < 3; w++) {
               iconlogout3 += `${iconlogout3.length}`;
            }
            let penaltyshoott: Array<any> = [String.fromCharCode(105, 95, 52, 54, 95, 103, 101, 116, 0), String.fromCharCode(119, 101, 98, 109, 101, 110, 99, 95, 103, 95, 52, 54, 0)];
            let reddownarrowx = String.fromCharCode(118, 95, 50, 50, 95, 116, 119, 101, 97, 107, 0);
            let orangeuparrow7 = String.fromCharCode(103, 95, 54, 51, 95, 101, 99, 108, 0);
            chart8 += chart8;
            penaltyshoott.push(orangeuparrow7.length << (Math.min(5, reddownarrowx.length)));
            reddownarrowx = `${orangeuparrow7.length}`;
            let dicelogoU = String.fromCharCode(109, 95, 54, 48, 95, 115, 105, 112, 114, 107, 100, 97, 116, 97, 0);
            for (let b = 0; b < 3; b++) {
               let greenarrowupm = 1.0;
               let iconpipexpandz = 0.0;
               let penaltygoalm = true;
               let chinasamee = 3.0;
               let containere = String.fromCharCode(107, 95, 56, 51, 95, 99, 111, 118, 97, 114, 105, 97, 110, 99, 101, 0);
               iconlogout3 += `${parseInt(`${chinasamee}`) >> (Math.min(4, Math.abs(chart8)))}`;
               greenarrowupm -= parseFloat(`${2}`);
               iconpipexpandz /= Math.max(parseFloat(`${containere.length}`), 2);
               penaltygoalm = iconpipexpandz >= 71.78;
               chinasamee -= (parseFloat(`${parseInt(`${iconpipexpandz}`) - (penaltygoalm ? 2 : 1)}`));
               containere += `${3 >> (Math.min(1, containere.length))}`;
            }
            constantsP *= parseFloat(`${chinasame8.length}`);
            if (hongkongC) {
               break;
            }
         } while (((1.49 - constantsP) <= 1.55) && hongkongC);
         if ((4 >> (Math.min(4, index8.length))) < 1 && (index8.length >> (Math.min(Math.abs(4), 3))) < 3) {
            let gesturesw = 5.0;
            let logouserv: Array<any> = [208, 767, 961];
            let source8 = String.fromCharCode(99, 95, 54, 50, 95, 112, 114, 111, 103, 114, 97, 109, 115, 0);
            logouserv.push(source8.length);
            for (let w = 0; w < 2; w++) {
               gesturesw += parseFloat(`${logouserv.length}`);
            }
            gesturesw *= parseFloat(`${parseInt(`${gesturesw}`) - 3}`);
            logouserv = [parseInt(`${gesturesw}`) & logouserv.length];
            let largeZ = String.fromCharCode(100, 101, 97, 99, 116, 105, 118, 97, 116, 105, 111, 110, 95, 113, 95, 49, 55, 0);
            let iconpipexpandl: Array<any> = [225, 234];
            gesturesw -= parseFloat(`${logouserv.length}`);
            iconpipexpandl = [2 + iconpipexpandl.length];
            index8 = [3 + wifirouterU.size];
         }
         while ((chinasame8.length << (Math.min(Math.abs(4), 3))) < 3) {
            chinasame8.push(tooltipsS.length);
            break;
         }
         let nativeexE = String.fromCharCode(119, 105, 102, 105, 95, 105, 95, 56, 49, 0);
         let iconviewerA: Array<any> = [39, 878];
         let whitevideolivek = String.fromCharCode(107, 95, 52, 55, 95, 102, 109, 115, 117, 98, 0);
         let basketballmatchdetailbgd: Array<any> = [499, 222];
         nativeexE = "1";
         basketballmatchdetailbgd.push(2 >> (Math.min(2, basketballmatchdetailbgd.length)));
         let inouttargetyellowo = String.fromCharCode(109, 95, 51, 49, 95, 105, 110, 116, 101, 114, 120, 121, 0);
         let orangedownarrowA: Map<any, any> = new Map([[String.fromCharCode(112, 95, 57, 52, 95, 109, 105, 115, 109, 97, 116, 99, 104, 0), false], [String.fromCharCode(105, 95, 49, 56, 95, 108, 111, 103, 111, 115, 0), false], [String.fromCharCode(112, 95, 49, 48, 48, 95, 116, 114, 105, 112, 0), true]]);
         iconviewerA.push(1);
         inouttargetyellowo = `${orangedownarrowA.size * 3}`;
         orangedownarrowA.set(inouttargetyellowo, (String.fromCharCode(81, 0) == inouttargetyellowo ? orangedownarrowA.size : inouttargetyellowo.length));
         iconviewerA = [(String.fromCharCode(102, 0) == whitevideolivek ? iconviewerA.length : whitevideolivek.length)];
         nativeexE = `${nativeexE.length * 1}`;
         if (2 == (whitevideolivek.length | 5) || (5 | iconviewerA.length) == 5) {
            whitevideolivek = `${whitevideolivek.length}`;
         }
         if (whitevideolivek.length > 3) {
            whitevideolivek += `${iconviewerA.length / (Math.max(3, 9))}`;
         }
         for (let k = 0; k < 2; k++) {
            whitevideolivek += `${iconviewerA.length / (Math.max(whitevideolivek.length, 7))}`;
         }
         let materialC = 0;
         let default_ul = String.fromCharCode(115, 116, 114, 101, 97, 109, 105, 110, 102, 111, 95, 57, 95, 54, 50, 0);
         let sortQ = String.fromCharCode(101, 108, 97, 112, 115, 101, 100, 95, 113, 95, 53, 48, 0);
         nativeexE = `${sortQ.length}`;
         materialC %= Math.max(1, materialC | 1);
         default_ul = "2";
         sortQ += `${materialC & default_ul.length}`;
         if (!nativeexE.startsWith(`${iconviewerA.length}`)) {
            iconviewerA.push(iconviewerA.length >> (Math.min(Math.abs(2), 2)));
         }
         index8.push(chinasame8.length % 2);
         while (5 < backiconY) {
            backiconY >>= Math.min(5, Math.abs(wifirouterU.size));
            break;
         }
         security1 *= wifirouterU.size;

         if (onBack !== undefined) {

            for (let b = 0; b < 3; b++) {
               let dacccfaabfbcbadeebddcabacdffdbw: Map<any, any> = new Map([[String.fromCharCode(109, 118, 115, 97, 100, 95, 110, 95, 49, 53, 0), 729], [String.fromCharCode(116, 95, 49, 50, 95, 99, 111, 108, 111, 114, 115, 0), 278], [String.fromCharCode(101, 95, 53, 49, 95, 112, 97, 103, 101, 115, 101, 101, 107, 0), 387]]);
               let sortK = dacccfaabfbcbadeebddcabacdffdbw.size >= 5432108;
               do {
                  dacccfaabfbcbadeebddcabacdffdbw = new Map([[`${dacccfaabfbcbadeebddcabacdffdbw.size}`, 3 & dacccfaabfbcbadeebddcabacdffdbw.size]]);
                  if (sortK) {
                     break;
                  }
               } while (sortK && (1 >= dacccfaabfbcbadeebddcabacdffdbw.size));
               let policy8 = String.fromCharCode(112, 95, 56, 56, 95, 115, 101, 110, 116, 101, 110, 99, 101, 0);
               let rewardvideoJ: Array<any> = [971, 536];
               let mappingW = 0.0;
               dacccfaabfbcbadeebddcabacdffdbw.set(`${rewardvideoJ.length}`, dacccfaabfbcbadeebddcabacdffdbw.size - rewardvideoJ.length);
               policy8 += `${(policy8 == String.fromCharCode(101, 0) ? parseInt(`${mappingW}`) : policy8.length)}`;
               mappingW += parseFloat(`${parseInt(`${mappingW}`)}`);
               let back0 = 5;
               dacccfaabfbcbadeebddcabacdffdbw.set(`${back0}`, back0);
               chinasame8 = [parseInt(`${constantsP}`) & 2];
            }
            security1 -= (libreactperfloggerjniE == String.fromCharCode(79, 0) ? libreactperfloggerjniE.length : parseInt(`${security1}`));
            let libpangleflippedH = String.fromCharCode(98, 111, 117, 110, 100, 115, 112, 101, 99, 105, 102, 105, 99, 95, 101, 95, 50, 48, 0);
            if (libpangleflippedH != String.fromCharCode(56, 0)) {
               let imageactionlivee = 1;
               let libcrashsdkZ = String.fromCharCode(120, 95, 52, 52, 95, 99, 111, 110, 116, 105, 103, 117, 111, 117, 115, 0);
               let weatherS: Map<any, any> = new Map([[String.fromCharCode(101, 110, 116, 105, 116, 105, 116, 121, 95, 55, 95, 56, 48, 0), 744], [String.fromCharCode(122, 95, 56, 95, 102, 97, 99, 101, 115, 0), 481], [String.fromCharCode(102, 101, 110, 99, 95, 109, 95, 54, 54, 0), 310]]);
               let downloadC = String.fromCharCode(118, 95, 51, 95, 116, 105, 109, 101, 102, 105, 108, 116, 101, 114, 0);
               let gdtadvD: Map<any, any> = new Map([[String.fromCharCode(110, 95, 50, 54, 95, 108, 105, 98, 112, 104, 111, 110, 101, 110, 117, 109, 98, 101, 114, 0), 877], [String.fromCharCode(108, 95, 51, 56, 95, 101, 120, 101, 99, 117, 116, 101, 0), 303], [String.fromCharCode(104, 95, 55, 48, 95, 101, 97, 99, 104, 0), 187]]);
               libpangleflippedH = `${gdtadvD.size << (Math.min(Math.abs(3), 4))}`;
               imageactionlivee /= Math.max(2 & downloadC.length, 4);
               libcrashsdkZ = `${imageactionlivee}`;
               weatherS.set(`${imageactionlivee}`, (String.fromCharCode(100, 0) == libcrashsdkZ ? libcrashsdkZ.length : imageactionlivee));
               downloadC += `${imageactionlivee % 2}`;
               gdtadvD.set(downloadC, 3 - libcrashsdkZ.length);
            }
            let iconarrowrightorangeX = libpangleflippedH == String.fromCharCode(51, 114, 52, 0);
            do {
               libpangleflippedH = `${libpangleflippedH.length}`;
               if (iconarrowrightorangeX) {
                  break;
               }
            } while ((libpangleflippedH != String.fromCharCode(108, 0)) && iconarrowrightorangeX);
            for (let g = 0; g < 3; g++) {
               libpangleflippedH = `${(libpangleflippedH == String.fromCharCode(107, 0) ? libpangleflippedH.length : libpangleflippedH.length)}`;
            }
            tooltipsS = `${1 << (Math.min(1, chinasame8.length))}`;
            let iconnotificationnewF = String.fromCharCode(98, 95, 53, 49, 95, 98, 97, 115, 105, 99, 97, 108, 108, 121, 0);
            if (iconnotificationnewF != iconnotificationnewF) {
               iconnotificationnewF = "2";
            }
            let showx = String.fromCharCode(119, 95, 56, 49, 95, 107, 101, 121, 105, 100, 0);
            let infoM = String.fromCharCode(97, 95, 50, 54, 0);
            iconnotificationnewF = `${showx.length}`;
            infoM += `${infoM.length}`;
            favicon3 *= iconnotificationnewF.length;
            for (let z = 0; z < 1; z++) {
               backiconY *= libreactperfloggerjniE.length >> (Math.min(Math.abs(1), 1));
            }
            let icontransferclubj = String.fromCharCode(115, 99, 104, 110, 111, 114, 114, 95, 119, 95, 52, 49, 0);
            let selection1 = false;
            let predictionwinZ = false;
            while (!predictionwinZ) {
               let suboutt = String.fromCharCode(104, 105, 103, 104, 101, 114, 95, 113, 95, 49, 49, 0);
               icontransferclubj = `${(icontransferclubj == String.fromCharCode(49, 0) ? icontransferclubj.length : (predictionwinZ ? 1 : 1))}`;
               suboutt = `${suboutt.length - 1}`;
               break;
            }
            let back3 = 3.0;
            let streamingt = true;
            predictionwinZ = 26.44 == back3;
            back3 /= Math.max(5, ((streamingt ? 3 : 3) % (Math.max((streamingt ? 2 : 2), 7))));
            let shielddonej = String.fromCharCode(100, 95, 57, 56, 95, 109, 97, 114, 107, 105, 110, 103, 0);
            let defaultpredictionprofile7 = String.fromCharCode(106, 95, 53, 52, 95, 117, 110, 115, 97, 116, 105, 115, 102, 105, 101, 100, 0);
            let singleV = String.fromCharCode(109, 95, 54, 50, 95, 104, 101, 114, 101, 0);
            let countdowni = String.fromCharCode(112, 114, 101, 108, 111, 97, 100, 95, 51, 95, 54, 50, 0);
            let valuesc = String.fromCharCode(115, 105, 110, 116, 105, 95, 103, 95, 55, 55, 0);
            let iconarrowrightorangeI = 2.0;
            defaultpredictionprofile7 = `${countdowni.length << (Math.min(Math.abs(3), 4))}`;
            countdowni = `${parseInt(`${iconarrowrightorangeI}`) << (Math.min(valuesc.length, 4))}`;
            valuesc = `${valuesc.length ^ parseInt(`${iconarrowrightorangeI}`)}`;
            while (predictionwinZ && !selection1) {
               selection1 = !selection1;
               break;
            }
            let j_countH = String.fromCharCode(114, 95, 49, 48, 95, 112, 101, 117, 107, 101, 114, 0);
            let iconchatsendy = 0;
            let team1 = 3.0;
            predictionwinZ = 66.59 >= team1;
            j_countH += `${3 << (Math.min(1, j_countH.length))}`;
            iconchatsendy -= 3;
            team1 *= iconchatsendy ^ j_countH.length;
            if (5 == icontransferclubj.length) {
               defaultpredictionprofile7 = "2";
            }
            shielddonej = `${shielddonej.length / (Math.max(1, icontransferclubj.length))}`;
            chinasame8.push(parseInt(`${constantsP}`) % 2);
            onBack();

            let webview_ = security1 <= 6036290.0;
            do {
               security1 -= serviceo.size;
               if (webview_) {
                  break;
               }
            } while (webview_ && (5 < (serviceo.size / 5) && 1.30 < (4.73 - security1)));
            security1 += 1;
            for (let a = 0; a < 2; a++) {
               backiconY >>= Math.min(5, Math.abs(parseInt(`${security1}`) / (Math.max(serviceo.size, 3))));
            }
            index8 = [3 % (Math.max(1, backiconY))];
            let iconarrowrightwhiteM = 8989660 >= wifirouterU.size;
            do {
               wifirouterU = new Map([[`${wifirouterU.size}`, parseInt(`${constantsP}`)]]);
               if (iconarrowrightwhiteM) {
                  break;
               }
            } while ((1.25 > (security1 - 1.82) && 1 > (wifirouterU.size % (Math.max(2, 5)))) && iconarrowrightwhiteM);
            let awayp = 6434213.0 <= constantsP;
            do {
               constantsP -= parseFloat(`${backiconY}`);
               if (awayp) {
                  break;
               }
            } while (awayp && (2 > backiconY));
            lockOrientation("PORTRAIT");

            serviceo = new Map([[`${serviceo.size}`, serviceo.size % (Math.max(10, parseInt(`${security1}`)))]]);
            tooltipsS += "3";
            if (4.6 > (constantsP - security1) && (constantsP - security1) > 4.6) {
               let connectionO = 4.0;
               connectionO *= parseInt(`${connectionO}`) * parseInt(`${connectionO}`);
               let qnewarchdefaultsS = false;
               let text1 = true;
               for (let n = 0; n < 2; n++) {
                  qnewarchdefaultsS = (qnewarchdefaultsS ? !text1 : qnewarchdefaultsS);
               }
               constantsP -= parseFloat(`${parseInt(`${favicon3}`)}`);
            }
            let uploadm = favicon3 <= 8562506.0;
            do {
               favicon3 *= serviceo.size;
               if (uploadm) {
                  break;
               }
            } while (uploadm && ((libreactperfloggerjniE.length * 4) == 3));
            if ((security1 / (Math.max(1.67, 9))) < 3.62) {
               security1 /= Math.max(parseInt(`${security1}`), 4);
            }
            let componentsS = String.fromCharCode(99, 95, 54, 53, 95, 112, 97, 110, 101, 108, 115, 0);
            let upgradem = 0.0;
            if ((upgradem + parseFloat(`${componentsS.length}`)) < 2.58 || (4 << (Math.min(1, componentsS.length))) < 4) {
               upgradem *= parseFloat(`${1 + parseInt(`${upgradem}`)}`);
            }
            upgradem *= parseFloat(`${parseInt(`${upgradem}`) / 1}`);
            while ((upgradem + 5.100) <= 5.60) {
               componentsS += `${componentsS.length}`;
               break;
            }
            for (let z = 0; z < 2; z++) {
               componentsS = `${(componentsS == String.fromCharCode(72, 0) ? parseInt(`${upgradem}`) : componentsS.length)}`;
            }
            componentsS += `${componentsS.length ^ parseInt(`${upgradem}`)}`;
            upgradem -= parseFloat(`${1 * componentsS.length}`);
            backiconY *= parseInt(`${constantsP}`) % 3;
            setIsFullScreen(false);
         } else {

            while (index8.includes(favicon3)) {
               let libpangleflippedM = 5.0;
               if ((libpangleflippedM + 2.41) < 5.72) {
                  libpangleflippedM *= parseInt(`${libpangleflippedM}`);
               }
               libpangleflippedM *= 2 * parseInt(`${libpangleflippedM}`);
               let singlew = false;
               index8 = [parseInt(`${favicon3}`)];
               break;
            }
            wifirouterU.set(`${libreactperfloggerjniE}`, (libreactperfloggerjniE == String.fromCharCode(56, 0) ? libreactperfloggerjniE.length : wifirouterU.size));
            let main_uG = 7445134 <= serviceo.size;
            do {
               let arrowrightwithtail1 = String.fromCharCode(116, 104, 114, 101, 97, 100, 101, 100, 95, 50, 95, 55, 48, 0);
               let userY: Map<any, any> = new Map([[String.fromCharCode(101, 118, 114, 99, 95, 119, 95, 57, 54, 0), 693], [String.fromCharCode(117, 105, 111, 116, 111, 109, 98, 117, 102, 95, 50, 95, 49, 50, 0), 765]]);
               let templateprocessorn = String.fromCharCode(99, 104, 97, 110, 103, 101, 115, 95, 54, 95, 49, 48, 48, 0);
               let faviconD = true;
               userY.set(arrowrightwithtail1, ((faviconD ? 4 : 4)));
               for (let u = 0; u < 1; u++) {
                  templateprocessorn += `${userY.size % (Math.max(templateprocessorn.length, 7))}`;
               }
               userY.set(templateprocessorn, (String.fromCharCode(78, 0) == templateprocessorn ? templateprocessorn.length : arrowrightwithtail1.length));
               templateprocessorn += `${templateprocessorn.length}`;
               for (let t = 0; t < 1; t++) {
                  userY = new Map([[`${userY.size}`, templateprocessorn.length]]);
               }
               faviconD = arrowrightwithtail1.endsWith(`${faviconD}`);
               arrowrightwithtail1 = `${(arrowrightwithtail1 == String.fromCharCode(56, 0) ? arrowrightwithtail1.length : userY.size)}`;
               if ((arrowrightwithtail1.length >> (Math.min(5, Math.abs(userY.size)))) <= 3) {
                  let libhermesO: Array<any> = [355, 528, 174];
                  userY.set(`${arrowrightwithtail1}`, arrowrightwithtail1.length * 3);
                  libhermesO.push(3);
               }
               for (let s = 0; s < 1; s++) {
                  arrowrightwithtail1 += `${templateprocessorn.length | 3}`;
               }
               let armvaM = faviconD ? !faviconD : faviconD;
               do {
                  faviconD = arrowrightwithtail1.length == 96;
                  if (armvaM) {
                     break;
                  }
               } while ((faviconD) && armvaM);
               let greyticki = String.fromCharCode(118, 95, 57, 53, 95, 115, 121, 110, 99, 104, 114, 111, 110, 105, 122, 97, 116, 105, 111, 110, 0);
               let predictionwinu = String.fromCharCode(110, 100, 101, 120, 95, 49, 95, 53, 50, 0);
               let subbasketballplayerX = String.fromCharCode(112, 104, 121, 115, 105, 99, 97, 108, 95, 99, 95, 49, 50, 0);
               faviconD = !faviconD && greyticki.length == 98;
               greyticki += `${3 - predictionwinu.length}`;
               predictionwinu = `${subbasketballplayerX.length % (Math.max(4, predictionwinu.length))}`;
               subbasketballplayerX = "1";
               let liveshareO = 1;
               let profilepicS = String.fromCharCode(108, 95, 53, 49, 95, 113, 115, 118, 118, 112, 112, 0);
               let liveshare0: Map<any, any> = new Map([[String.fromCharCode(110, 95, 57, 55, 95, 99, 114, 101, 97, 116, 111, 114, 0), false], [String.fromCharCode(104, 97, 115, 104, 116, 97, 98, 108, 101, 122, 95, 117, 95, 49, 57, 0), true]]);
               templateprocessorn += `${userY.size}`;
               liveshareO <<= Math.min(Math.abs(liveshareO), 3);
               profilepicS += `${liveshareO ^ profilepicS.length}`;
               liveshare0.set(`${profilepicS}`, profilepicS.length | 3);
               serviceo = new Map([[`${wifirouterU.size}`, wifirouterU.size]]);
               if (main_uG) {
                  break;
               }
            } while (main_uG && (1 > (serviceo.size % 2) || (index8.length % (Math.max(2, 6))) > 1));
            backiconY += parseInt(`${constantsP}`);
            while (1 >= (parseInt(`${security1}`) - chinasame8.length)) {
               security1 += parseInt(`${security1}`) >> (Math.min(Math.abs(parseInt(`${constantsP}`)), 5));
               break;
            }
            chinasame8.push(2 + wifirouterU.size);


            if (tooltipsS.includes(`${chinasame8.length}`)) {
               chinasame8.push(serviceo.size - 2);
            }
            serviceo.set(tooltipsS, 3);
            let update_iwp = constantsP <= 6254323.0;
            do {
               constantsP *= parseFloat(`${3 * index8.length}`);
               if (update_iwp) {
                  break;
               }
            } while (update_iwp && ((security1 + 1.12) == 4.74 && (1.12 + security1) == 2.35));
            for (let y = 0; y < 2; y++) {
               constantsP *= parseFloat(`${tooltipsS.length * 2}`);
            }
            while (2.30 == security1) {
               wifirouterU = new Map([[`${chinasame8.length}`, parseInt(`${security1}`)]]);
               break;
            }
            if (index8.includes(favicon3)) {
               favicon3 += parseInt(`${constantsP}`);
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
            let arrow4 = false;
            let inactiven = String.fromCharCode(114, 101, 99, 105, 112, 105, 101, 110, 116, 115, 95, 110, 95, 50, 49, 0);
            let sans9 = String.fromCharCode(117, 110, 116, 114, 117, 115, 116, 101, 100, 95, 97, 95, 49, 49, 0);
            let subbasketballplayerp: Array<any> = [897, 56];
            let launcherR: Array<any> = [301, 533, 164];
            let streaming3 = 1.0;
            let libavdevicee = String.fromCharCode(97, 105, 116, 101, 114, 95, 115, 95, 54, 53, 0);
            let schedulerE = false;
            let backw: Map<any, any> = new Map([[String.fromCharCode(98, 101, 99, 97, 109, 101, 95, 118, 95, 50, 52, 0), String.fromCharCode(114, 95, 52, 95, 116, 99, 109, 105, 0)], [String.fromCharCode(97, 95, 53, 56, 95, 115, 121, 109, 98, 111, 108, 105, 99, 0), String.fromCharCode(116, 111, 116, 97, 108, 108, 121, 95, 105, 95, 56, 52, 0)], [String.fromCharCode(101, 110, 103, 105, 110, 101, 115, 95, 112, 95, 49, 0), String.fromCharCode(114, 101, 106, 101, 99, 116, 105, 111, 110, 95, 48, 95, 56, 49, 0)]]);
            let orangeuparrowp = 5.0;
            let whitebellc = 4.0;
            let searchbarI = String.fromCharCode(115, 95, 52, 51, 95, 97, 108, 105, 103, 110, 109, 101, 110, 116, 0);
            let scoree = 0;
            let libcrashsdkg: Array<any> = [String.fromCharCode(113, 95, 50, 52, 95, 99, 97, 118, 101, 97, 116, 0), String.fromCharCode(99, 102, 104, 100, 95, 55, 95, 53, 56, 0)];
            let acceptedA = String.fromCharCode(118, 95, 52, 48, 95, 109, 97, 112, 0);
            libcrashsdkg = [acceptedA.length];
            scoree |= scoree;
            scoree |= scoree;
            let datad = 3.0;
            let pauseR = false;
            libcrashsdkg = [scoree];
            datad -= 1 % (Math.max(parseInt(`${datad}`), 9));
            pauseR = 34.76 == datad;
            let modalD = 2;
            while (modalD == 3) {
               modalD %= Math.max(scoree, 1);
               break;
            }
            arrow4 = scoree > parseInt(`${orangeuparrowp}`);
            streaming3 -= launcherR.length;
            while (!schedulerE) {
               streaming3 -= sans9.length * 1;
               break;
            }
            let videobufferloadingG = String.fromCharCode(116, 102, 100, 116, 95, 120, 95, 49, 54, 0);
            let launchu = String.fromCharCode(115, 105, 103, 97, 108, 103, 95, 109, 95, 56, 52, 0);
            for (let q = 0; q < 3; q++) {
               videobufferloadingG = `${videobufferloadingG.length}`;
            }
            let orangetickM: Array<any> = [222, 670];
            launchu = "1";
            let interstitialP = String.fromCharCode(53, 100, 106, 101, 53, 52, 0) == launchu;
            do {
               launchu += `${1 - orangetickM.length}`;
               if (interstitialP) {
                  break;
               }
            } while (((launchu.length * 2) <= 3) && interstitialP);
            let runtimeschedulerS = String.fromCharCode(118, 114, 98, 97, 50, 57, 113, 114, 99, 0) == videobufferloadingG;
            do {
               let rulesG: Map<any, any> = new Map([[String.fromCharCode(108, 95, 52, 52, 95, 101, 100, 103, 101, 0), 13], [String.fromCharCode(109, 95, 57, 52, 95, 115, 111, 117, 114, 99, 101, 99, 108, 105, 112, 0), 975]]);
               let classesC = String.fromCharCode(102, 95, 51, 56, 95, 105, 110, 98, 111, 120, 0);
               videobufferloadingG = `${(String.fromCharCode(54, 0) == classesC ? rulesG.size : classesC.length)}`;
               if (runtimeschedulerS) {
                  break;
               }
            } while (runtimeschedulerS && (launchu == String.fromCharCode(106, 0)));
            if (launchu.startsWith(`${orangetickM.length}`)) {
               launchu = `${(videobufferloadingG == String.fromCharCode(90, 0) ? orangetickM.length : videobufferloadingG.length)}`;
            }
            backw = new Map([[`${streaming3}`, parseInt(`${streaming3}`) * launchu.length]]);
            for (let r = 0; r < 2; r++) {
               let basketballplayerplaceholder4 = String.fromCharCode(98, 95, 49, 57, 95, 115, 113, 108, 105, 116, 101, 115, 101, 115, 115, 105, 111, 110, 0);
               let minivod_ = String.fromCharCode(110, 101, 101, 100, 108, 101, 95, 52, 95, 49, 57, 0);
               let darkU = minivod_.length >= 5707383;
               do {
                  minivod_ = `${minivod_.length | basketballplayerplaceholder4.length}`;
                  if (darkU) {
                     break;
                  }
               } while ((basketballplayerplaceholder4.length > 5 || minivod_ == String.fromCharCode(106, 0)) && darkU);
               for (let z = 0; z < 3; z++) {
                  minivod_ = `${basketballplayerplaceholder4.length % (Math.max(10, minivod_.length))}`;
               }
               basketballplayerplaceholder4 = `${minivod_.length + basketballplayerplaceholder4.length}`;
               basketballplayerplaceholder4 += `${(String.fromCharCode(108, 0) == minivod_ ? minivod_.length : basketballplayerplaceholder4.length)}`;
               let friendsK = String.fromCharCode(105, 95, 53, 52, 95, 98, 97, 110, 100, 101, 100, 0);
               let progressa = String.fromCharCode(99, 111, 114, 114, 117, 112, 116, 101, 100, 95, 119, 95, 49, 52, 0);
               let reactd = String.fromCharCode(110, 95, 55, 51, 95, 98, 105, 116, 114, 101, 118, 0);
               libavdevicee += `${sans9.length >> (Math.min(2, Math.abs(parseInt(`${streaming3}`))))}`;
            }
            let predictionbannerT = 5486892 <= subbasketballplayerp.length;
            do {
               subbasketballplayerp.push(2);
               if (predictionbannerT) {
                  break;
               }
            } while (predictionbannerT && ((streaming3 / (Math.max(subbasketballplayerp.length, 4))) > 2.67 && (subbasketballplayerp.length / (Math.max(3, parseInt(`${streaming3}`)))) > 4));
            while (2 < (1 | subbasketballplayerp.length)) {
               subbasketballplayerp.push(sans9.length);
               break;
            }
            let applicationx = String.fromCharCode(100, 95, 56, 55, 95, 104, 119, 109, 97, 112, 0);
            let scrollviewu = 2.0;
            for (let s = 0; s < 3; s++) {
               scrollviewu /= Math.max(applicationx.length << (Math.min(Math.abs(2), 3)), 1);
            }
            let rank1 = 4;
            let dycreatorV = true;
            let playershirtC = false;
            let otherN = String.fromCharCode(97, 99, 113, 117, 105, 114, 101, 95, 53, 95, 57, 49, 0);
            scrollviewu *= ((dycreatorV ? 3 : 2) ^ parseInt(`${scrollviewu}`));
            dycreatorV = playershirtC || otherN.length >= 35;
            playershirtC = otherN.length <= 60 && playershirtC;
            scrollviewu -= applicationx.length % (Math.max(3, 7));
            let feedbackk = String.fromCharCode(108, 97, 117, 110, 99, 104, 95, 48, 95, 53, 0);
            let hookse = 4.0;
            let backwardP = String.fromCharCode(104, 95, 50, 95, 114, 101, 118, 97, 108, 105, 100, 97, 116, 105, 111, 110, 0);
            applicationx += `${rank1 & parseInt(`${hookse}`)}`;
            feedbackk += "1";
            hookse += parseFloat(`${feedbackk.length * 1}`);
            backwardP += `${(String.fromCharCode(57, 0) == feedbackk ? backwardP.length : feedbackk.length)}`;
            let loginx: Array<any> = [939, 299, 659];
            let reward3 = String.fromCharCode(110, 97, 108, 115, 95, 101, 95, 55, 55, 0);
            rank1 *= applicationx.length >> (Math.min(Math.abs(1), 5));
            loginx = [loginx.length];
            reward3 = `${loginx.length}`;
            launcherR.push(1);
            let z_player2: Array<any> = [300, 585, 346];
            let contextn = String.fromCharCode(110, 95, 54, 50, 95, 100, 111, 99, 108, 105, 115, 116, 0);
            let anewinterstitial6 = false;
            contextn += `${contextn.length}`;
            while (anewinterstitial6) {
               contextn = `${((anewinterstitial6 ? 5 : 1) / (Math.max(7, contextn.length)))}`;
               break;
            }
            z_player2 = [contextn.length];
            let clube = 3.0;
            z_player2 = [z_player2.length];
            clube -= parseInt(`${clube}`) / 3;
            let attributedstringI = contextn.length <= 7348891;
            do {
               contextn += `${(contextn == String.fromCharCode(82, 0) ? contextn.length : (anewinterstitial6 ? 1 : 1))}`;
               if (attributedstringI) {
                  break;
               }
            } while ((contextn.length > 2) && attributedstringI);
            anewinterstitial6 = z_player2.length < 63;
            let librrcB = anewinterstitial6 ? !anewinterstitial6 : anewinterstitial6;
            do {
               let rulesB = String.fromCharCode(105, 95, 54, 54, 95, 110, 111, 110, 108, 105, 110, 101, 97, 114, 0);
               let checkboxN = String.fromCharCode(115, 101, 118, 101, 114, 105, 116, 121, 95, 113, 95, 50, 0);
               let firebaseR = String.fromCharCode(103, 95, 57, 54, 95, 99, 111, 110, 116, 97, 105, 110, 115, 0);
               let descY = 4.0;
               anewinterstitial6 = (60 >= ((!anewinterstitial6 ? 60 : rulesB.length) ^ rulesB.length));
               checkboxN = `${checkboxN.length}`;
               firebaseR += `${parseInt(`${descY}`) + firebaseR.length}`;
               descY += parseInt(`${descY}`);
               if (librrcB) {
                  break;
               }
            } while (librrcB && (!contextn.startsWith(`${anewinterstitial6}`)));
            for (let h = 0; h < 3; h++) {
               z_player2 = [contextn.length * 3];
            }
            for (let n = 0; n < 3; n++) {
               z_player2.push(contextn.length);
            }
            whitebellc *= contextn.length ^ z_player2.length;
            let cornere = orangeuparrowp >= 9209077.0;
            do {
               orangeuparrowp *= parseFloat(`${parseInt(`${orangeuparrowp}`) ^ 1}`);
               if (cornere) {
                  break;
               }
            } while (cornere && ((2.94 - orangeuparrowp) < 4.93 || 2.94 < (orangeuparrowp - whitebellc)));
            let libyogan: Array<any> = [449, 386, 490];
            let handlerL: Map<any, any> = new Map([[String.fromCharCode(108, 95, 50, 54, 95, 118, 108, 111, 103, 0), String.fromCharCode(112, 114, 101, 102, 101, 114, 115, 95, 107, 95, 54, 51, 0)], [String.fromCharCode(99, 108, 110, 112, 97, 115, 115, 95, 106, 95, 57, 48, 0), String.fromCharCode(100, 105, 115, 112, 111, 115, 97, 108, 95, 117, 95, 50, 54, 0)], [String.fromCharCode(119, 105, 110, 100, 111, 119, 101, 100, 95, 100, 95, 55, 50, 0), String.fromCharCode(104, 112, 101, 108, 95, 113, 95, 51, 50, 0)]]);
            for (let v = 0; v < 3; v++) {
               handlerL = new Map([[`${handlerL.size}`, handlerL.size]]);
            }
            let libtanB = 5704524 <= handlerL.size;
            do {
               handlerL = new Map([[`${handlerL.size}`, 3]]);
               if (libtanB) {
                  break;
               }
            } while ((handlerL.get(`${libyogan.length}`) == null) && libtanB);
            if (4 == (libyogan.length | handlerL.size) && (4 | handlerL.size) == 2) {
               handlerL = new Map([[`${handlerL.size}`, handlerL.size - 3]]);
            }
            let rankm = handlerL.size >= 7638610;
            do {
               handlerL.set(`${libyogan.length}`, libyogan.length);
               if (rankm) {
                  break;
               }
            } while (rankm && (handlerL.size >= libyogan.length));
            libyogan = [2 & handlerL.size];
            let shielddonef = String.fromCharCode(110, 95, 54, 55, 95, 97, 99, 99, 111, 114, 100, 105, 110, 103, 0);
            let actionsg = String.fromCharCode(97, 114, 109, 111, 110, 121, 95, 119, 95, 49, 56, 0);
            handlerL = new Map([[`${handlerL.size}`, shielddonef.length]]);
            shielddonef += `${actionsg.length - 3}`;
            actionsg = "2";
            arrow4 = libavdevicee.length > 63;
            while (streaming3 <= launcherR.length) {
               let readt: Array<any> = [496, 234];
               let nativeexI = 4.0;
               while (parseFloat(`${readt.length}`) == nativeexI) {
                  readt = [1 >> (Math.min(Math.abs(parseInt(`${nativeexI}`)), 1))];
                  break;
               }
               while (nativeexI == parseFloat(`${readt.length}`)) {
                  readt.push(readt.length);
                  break;
               }
               let activityU = String.fromCharCode(101, 95, 53, 52, 95, 98, 97, 115, 105, 115, 0);
               readt = [parseInt(`${nativeexI}`)];
               activityU = `${activityU.length - 2}`;
               for (let c = 0; c < 2; c++) {
                  let rocket9 = String.fromCharCode(99, 95, 50, 48, 95, 112, 117, 114, 112, 108, 101, 0);
                  let typingloadingC = 5;
                  let iconqqb = String.fromCharCode(99, 95, 50, 48, 95, 99, 111, 100, 101, 115, 116, 114, 101, 97, 109, 0);
                  readt = [2];
                  rocket9 = "2";
                  typingloadingC -= 2;
                  iconqqb = `${2 << (Math.min(5, Math.abs(typingloadingC)))}`;
               }
               let elementsF = String.fromCharCode(109, 95, 52, 53, 95, 119, 104, 97, 116, 115, 0);
               let pushb = String.fromCharCode(102, 114, 101, 101, 100, 111, 109, 95, 117, 95, 52, 48, 0);
               nativeexI /= Math.max(3, parseFloat(`${elementsF.length}`));
               streaming3 += (String.fromCharCode(103, 0) == libavdevicee ? libavdevicee.length : parseInt(`${nativeexI}`));
               break;
            }
            schedulerE = (parseInt(`${whitebellc}`) / (Math.max(sans9.length, 8))) <= 30;
            subbasketballplayerp.push(1 + libavdevicee.length);
            arrow4 = null == backw.get(`${streaming3}`);

            console.log("err save vod!");

            while (!arrow4) {
               arrow4 = schedulerE;
               break;
            }
            let securityT = inactiven == String.fromCharCode(104, 57, 50, 50, 49, 0);
            do {
               inactiven += `${subbasketballplayerp.length}`;
               if (securityT) {
                  break;
               }
            } while (securityT && ((parseInt(`${whitebellc}`) + 5) >= 4 && 4.91 >= (whitebellc + 5.53)));
            let assistJ = false;
            if (assistJ) {
               let headerF = String.fromCharCode(112, 97, 114, 97, 109, 101, 116, 114, 105, 99, 95, 107, 95, 50, 53, 0);
               let default_tL = String.fromCharCode(115, 95, 51, 50, 95, 115, 110, 97, 112, 112, 121, 0);
               let redscoreballB: Array<any> = [663, 626];
               let iconadslinkO = 5.0;
               let orangew: Array<any> = [459, 306];
               assistJ = default_tL.length > 55 || assistJ;
               headerF = `${headerF.length % (Math.max(3, 2))}`;
               default_tL += `${headerF.length}`;
               redscoreballB.push(parseInt(`${iconadslinkO}`));
               iconadslinkO -= parseFloat(`${headerF.length}`);
               orangew = [3 + orangew.length];
            }
            let statsG = assistJ ? !assistJ : assistJ;
            do {
               assistJ = (assistJ ? assistJ : assistJ);
               if (statsG) {
                  break;
               }
            } while (statsG && (assistJ));
            for (let i = 0; i < 2; i++) {
               assistJ = !assistJ && assistJ;
            }
            subbasketballplayerp.push(((arrow4 ? 3 : 3) * launcherR.length));
            let whiteanimationliveS: Map<any, any> = new Map([[String.fromCharCode(118, 101, 108, 97, 112, 115, 101, 100, 116, 105, 109, 101, 114, 95, 110, 95, 49, 53, 0), 62], [String.fromCharCode(101, 108, 108, 105, 112, 116, 105, 99, 97, 108, 95, 121, 95, 49, 49, 0), 260]]);
            let d_titleN: Map<any, any> = new Map([[String.fromCharCode(120, 95, 56, 51, 95, 98, 101, 101, 110, 0), false], [String.fromCharCode(109, 95, 57, 49, 95, 98, 108, 111, 98, 115, 105, 122, 101, 0), true], [String.fromCharCode(119, 104, 116, 120, 95, 99, 95, 56, 57, 0), false]]);
            whiteanimationliveS = new Map([[`${d_titleN.size}`, 3 - whiteanimationliveS.size]]);
            while (2 < (4 - d_titleN.size)) {
               let backiconZ: Array<any> = [720, 761, 103];
               let foundm: Array<any> = [624, 266, 40];
               let homeiconJ = String.fromCharCode(104, 95, 54, 95, 105, 118, 115, 101, 116, 117, 112, 0);
               let android5 = 4;
               d_titleN = new Map([[`${foundm.length}`, 1]]);
               backiconZ = [homeiconJ.length];
               foundm.push(backiconZ.length & android5);
               homeiconJ += `${(String.fromCharCode(88, 0) == homeiconJ ? backiconZ.length : homeiconJ.length)}`;
               android5 /= Math.max(1, homeiconJ.length);
               break;
            }
            searchbarI = `${((arrow4 ? 5 : 4) ^ 2)}`;
            if (sans9.length >= inactiven.length) {
               let libavformat9 = String.fromCharCode(118, 95, 54, 53, 95, 99, 111, 108, 108, 101, 116, 105, 111, 110, 0);
               let dicelogoZ = 2.0;
               let iconorientationk = 0;
               iconorientationk ^= iconorientationk;
               if (4.32 >= (dicelogoZ / (Math.max(4, parseFloat(`${iconorientationk}`)))) || (iconorientationk / (Math.max(10, parseInt(`${dicelogoZ}`)))) >= 5) {
                  iconorientationk /= Math.max(4, iconorientationk >> (Math.min(libavformat9.length, 2)));
               }
               let firebaseB = false;
               if ((iconorientationk >> (Math.min(Math.abs(3), 2))) >= 2) {
                  firebaseB = 46.55 > dicelogoZ;
               }
               let starZ = 5508609 <= iconorientationk;
               do {
                  let mountingl = 3;
                  let basketballhometeamN = false;
                  let membershipM = String.fromCharCode(107, 95, 51, 55, 95, 111, 100, 101, 114, 110, 0);
                  let kuaishouM = String.fromCharCode(97, 95, 51, 55, 95, 103, 97, 117, 115, 115, 0);
                  let defaultpredictionprofilea = 2.0;
                  iconorientationk -= kuaishouM.length;
                  mountingl >>= Math.min(Math.abs(1 ^ mountingl), 1);
                  basketballhometeamN = (parseInt(`${defaultpredictionprofilea}`) + membershipM.length) > 92;
                  membershipM += `${mountingl % (Math.max(7, membershipM.length))}`;
                  kuaishouM = "3";
                  defaultpredictionprofilea += parseFloat(`${1}`);
                  if (starZ) {
                     break;
                  }
               } while ((4 <= (5 - iconorientationk)) && starZ);
               for (let c = 0; c < 3; c++) {
                  iconorientationk ^= 3 ^ iconorientationk;
               }
               let t_playerZ = 4.0;
               let turndownG = String.fromCharCode(111, 95, 54, 53, 95, 117, 110, 105, 109, 112, 108, 101, 109, 101, 110, 116, 101, 100, 0);
               libavformat9 += `${iconorientationk}`;
               t_playerZ /= Math.max(parseFloat(`${parseInt(`${t_playerZ}`) ^ 3}`), 1);
               turndownG += `${parseInt(`${t_playerZ}`) / (Math.max(turndownG.length, 7))}`;
               iconorientationk %= Math.max(3, 3);
               if (firebaseB) {
                  iconorientationk %= Math.max((iconorientationk >> (Math.min(5, Math.abs((firebaseB ? 3 : 3))))), 1);
               }
               inactiven = `${3 ^ libavformat9.length}`;
            }
            for (let m = 0; m < 2; m++) {
               let plusa = false;
               let gradlewt = String.fromCharCode(102, 116, 118, 108, 97, 115, 116, 110, 111, 100, 101, 95, 103, 95, 54, 50, 0);
               let feedbackc = true;
               let readm: Map<any, any> = new Map([[String.fromCharCode(121, 95, 56, 55, 95, 117, 110, 115, 111, 114, 116, 101, 100, 0), String.fromCharCode(98, 101, 110, 99, 104, 109, 97, 114, 107, 95, 116, 95, 51, 50, 0)], [String.fromCharCode(98, 97, 110, 100, 105, 110, 103, 95, 103, 95, 57, 50, 0), String.fromCharCode(115, 105, 103, 95, 113, 95, 51, 57, 0)], [String.fromCharCode(120, 95, 54, 50, 95, 102, 108, 97, 99, 0), String.fromCharCode(105, 95, 51, 53, 95, 98, 110, 98, 105, 110, 0)]]);
               let changeI: Map<any, any> = new Map([[String.fromCharCode(99, 98, 108, 107, 95, 115, 95, 53, 54, 0), false], [String.fromCharCode(110, 95, 55, 48, 95, 107, 100, 102, 0), false], [String.fromCharCode(116, 105, 116, 108, 101, 115, 95, 113, 95, 49, 55, 0), true]]);
               if (!plusa) {
                  changeI = new Map([[`${changeI.size}`, changeI.size]]);
               }
               plusa = readm.size <= 79;
               let backG: Array<any> = [440, 990];
               let paginationr: Array<any> = [430, 861];
               for (let z = 0; z < 1; z++) {
                  plusa = 40 >= backG.length;
               }
               changeI.set(`${plusa}`, changeI.size);
               while (plusa) {
                  let send8: Array<any> = [String.fromCharCode(119, 95, 50, 49, 95, 114, 105, 112, 101, 109, 100, 0), String.fromCharCode(103, 114, 97, 109, 115, 95, 57, 95, 52, 53, 0)];
                  let shareR: Map<any, any> = new Map([[String.fromCharCode(111, 105, 100, 95, 51, 95, 51, 49, 0), 841], [String.fromCharCode(100, 105, 115, 99, 117, 115, 115, 105, 111, 110, 95, 101, 95, 52, 56, 0), 968], [String.fromCharCode(103, 97, 108, 108, 101, 114, 121, 95, 110, 95, 55, 53, 0), 910]]);
                  let styleQ = 1.0;
                  let static_zfv = String.fromCharCode(99, 111, 109, 109, 105, 116, 116, 101, 114, 95, 119, 95, 54, 57, 0);
                  plusa = (send8.length << (Math.min(Math.abs(shareR.size), 1))) >= 66;
                  send8.push(parseInt(`${styleQ}`));
                  shareR.set(static_zfv, 3);
                  styleQ -= parseInt(`${styleQ}`) % (Math.max(static_zfv.length, 9));
                  break;
               }
               feedbackc = backG.length <= 80 && plusa;
               let graphy = String.fromCharCode(99, 95, 52, 51, 95, 111, 103, 103, 112, 97, 99, 107, 0);
               let bannerz = String.fromCharCode(105, 110, 118, 101, 114, 115, 101, 100, 95, 100, 95, 50, 49, 0);
               feedbackc = bannerz.length >= 74 && 74 >= backG.length;
               graphy += `${graphy.length << (Math.min(3, graphy.length))}`;
               bannerz += `${graphy.length - 1}`;
               let downloadingP = 9086971 <= gradlewt.length;
               do {
                  gradlewt += "1";
                  if (downloadingP) {
                     break;
                  }
               } while (downloadingP && (5 > (2 - readm.size) || 2 > (readm.size - gradlewt.length)));
               let skips = readm.size <= 6944430;
               do {
                  readm.set(`${paginationr.length}`, changeI.size);
                  if (skips) {
                     break;
                  }
               } while (skips && (2 >= (readm.size | 5)));
               while (plusa || (backG.length / 1) < 5) {
                  let heart_ = String.fromCharCode(112, 95, 55, 56, 95, 115, 117, 98, 113, 117, 101, 114, 121, 0);
                  let disconnectedK = String.fromCharCode(116, 105, 109, 101, 118, 97, 108, 95, 57, 95, 56, 51, 0);
                  let kuaishou5: Array<any> = [597, 783];
                  let livex: Map<any, any> = new Map([[String.fromCharCode(99, 111, 100, 101, 119, 111, 114, 100, 95, 100, 95, 53, 0), 257], [String.fromCharCode(97, 95, 56, 51, 95, 122, 101, 114, 111, 101, 115, 0), 1000]]);
                  plusa = (17 > ((!feedbackc ? disconnectedK.length : 17) ^ disconnectedK.length));
                  heart_ = `${livex.size}`;
                  kuaishou5.push(kuaishou5.length / (Math.max(3, 4)));
                  livex = new Map([[`${livex.size}`, kuaishou5.length]]);
                  break;
               }
               readm = new Map([[`${readm.size}`, 3]]);
               for (let j = 0; j < 3; j++) {
                  feedbackc = (paginationr.length + backG.length) <= 77;
               }
               let hejii = paginationr.length <= 6638461;
               do {
                  let iconbellactiveS: Array<any> = [796, 907];
                  let annerM = 0.0;
                  paginationr = [3 ^ parseInt(`${annerM}`)];
                  iconbellactiveS.push(3 + iconbellactiveS.length);
                  annerM -= parseFloat(`${iconbellactiveS.length}`);
                  if (hejii) {
                     break;
                  }
               } while (((gradlewt.length & paginationr.length) >= 3) && hejii);
               let y_images: Array<any> = [931, 185];
               let volumeu = String.fromCharCode(115, 117, 98, 99, 101, 108, 95, 48, 95, 49, 51, 0);
               let episodeG = 2.0;
               readm = new Map([[`${y_images.length}`, 2]]);
               y_images = [1];
               volumeu = `${parseInt(`${episodeG}`) / (Math.max(9, volumeu.length))}`;
               episodeG *= parseFloat(`${3 & volumeu.length}`);
               inactiven += `${gradlewt.length}`;
            }
            if (1 < (sans9.length * 5) || (subbasketballplayerp.length * sans9.length) < 5) {
               sans9 += `${2 | parseInt(`${orangeuparrowp}`)}`;
            }
            let iconorientationi: Map<any, any> = new Map([[String.fromCharCode(101, 120, 116, 114, 97, 112, 111, 108, 97, 116, 101, 95, 97, 95, 54, 56, 0), true], [String.fromCharCode(117, 110, 105, 110, 115, 116, 97, 108, 108, 95, 110, 95, 54, 0), true]]);
            let danger2 = 6977588 >= iconorientationi.size;
            do {
               iconorientationi = new Map([[`${iconorientationi.size}`, iconorientationi.size & 1]]);
               if (danger2) {
                  break;
               }
            } while ((1 < (2 | iconorientationi.size) || 2 < (2 | iconorientationi.size)) && danger2);
            let libtanw = 8744642 >= iconorientationi.size;
            do {
               iconorientationi.set(`${iconorientationi.size}`, 2);
               if (libtanw) {
                  break;
               }
            } while (libtanw && (Array.from(iconorientationi.values()).includes(iconorientationi.size)));
            for (let j = 0; j < 3; j++) {
               iconorientationi.set(`${iconorientationi.size}`, iconorientationi.size >> (Math.min(Math.abs(2), 4)));
            }
            subbasketballplayerp = [(libavdevicee == String.fromCharCode(50, 0) ? libavdevicee.length : launcherR.length)];
            orangeuparrowp -= parseFloat(`${3}`);
            launcherR.push(backw.size);
            if (!arrow4) {
               backw = new Map([[`${subbasketballplayerp.length}`, ((schedulerE ? 3 : 3) * 2)]]);
            }
            while (2.80 >= (1.45 - orangeuparrowp) || (3 + sans9.length) >= 5) {
               orangeuparrowp += (parseFloat(`${(arrow4 ? 4 : 3) | 2}`));
               break;
            }
            libavdevicee += `${parseInt(`${whitebellc}`)}`;
            let penaltygoal9 = String.fromCharCode(99, 116, 120, 112, 95, 49, 95, 57, 55, 0);
            let basketballdetailsbgz = 4;
            let final_36 = false;
            final_36 = basketballdetailsbgz > 3 && 3 > penaltygoal9.length;
            let logoutw = 6652505 <= basketballdetailsbgz;
            do {
               basketballdetailsbgz %= Math.max(3, 2);
               if (logoutw) {
                  break;
               }
            } while (logoutw && ((basketballdetailsbgz / (Math.max(penaltygoal9.length, 9))) >= 1));
            let bangr = 7652594 >= basketballdetailsbgz;
            do {
               basketballdetailsbgz >>= Math.min(5, Math.abs(1 & basketballdetailsbgz));
               if (bangr) {
                  break;
               }
            } while (bangr && (5 == (2 << (Math.min(1, Math.abs(basketballdetailsbgz))))));
            while (basketballdetailsbgz <= 3) {
               let spinnerP = String.fromCharCode(109, 95, 57, 56, 95, 109, 99, 100, 101, 99, 0);
               let profiles: Array<any> = [String.fromCharCode(112, 105, 120, 108, 101, 116, 95, 121, 95, 55, 54, 0), String.fromCharCode(108, 95, 50, 50, 95, 102, 115, 101, 101, 107, 0), String.fromCharCode(115, 95, 52, 51, 95, 105, 110, 111, 100, 101, 0)];
               let imagesk = 0;
               let eventsplashd = 3.0;
               let arrowrightD: Map<any, any> = new Map([[String.fromCharCode(98, 105, 100, 105, 114, 101, 99, 116, 105, 111, 110, 97, 108, 95, 108, 95, 57, 56, 0), 548], [String.fromCharCode(102, 95, 54, 53, 95, 103, 117, 116, 116, 101, 114, 0), 37], [String.fromCharCode(116, 105, 109, 101, 115, 116, 97, 109, 112, 95, 54, 95, 50, 57, 0), 552]]);
               basketballdetailsbgz <<= Math.min(4, Math.abs(arrowrightD.size << (Math.min(Math.abs(3), 4))));
               spinnerP = `${profiles.length % (Math.max(6, spinnerP.length))}`;
               profiles.push(parseInt(`${eventsplashd}`) - 3);
               imagesk %= Math.max(3, spinnerP.length - 1);
               eventsplashd *= spinnerP.length;
               arrowrightD.set(`${eventsplashd}`, parseInt(`${eventsplashd}`));
               break;
            }
            for (let w = 0; w < 3; w++) {
               let libhermest = 0;
               let libjsijniprofiler4 = true;
               let circlee: Map<any, any> = new Map([[String.fromCharCode(101, 108, 115, 95, 99, 95, 51, 55, 0), false], [String.fromCharCode(107, 95, 52, 95, 101, 110, 99, 104, 0), true]]);
               let uinit_okf = String.fromCharCode(121, 95, 57, 49, 95, 105, 115, 110, 101, 103, 97, 116, 105, 118, 101, 0);
               let backiconmaskd = String.fromCharCode(103, 95, 49, 48, 48, 95, 116, 119, 111, 115, 99, 97, 108, 101, 0);
               final_36 = 22 >= libhermest;
               libhermest >>= Math.min(Math.abs(uinit_okf.length * backiconmaskd.length), 1);
               libjsijniprofiler4 = backiconmaskd.length >= uinit_okf.length;
               circlee.set(`${uinit_okf}`, circlee.size ^ uinit_okf.length);
            }
            for (let u = 0; u < 1; u++) {
               final_36 = !penaltygoal9.startsWith(`${final_36}`);
            }
            if (1 <= penaltygoal9.length && final_36) {
               final_36 = 1 < basketballdetailsbgz;
            }
            let eyeopenc = penaltygoal9.length >= 8856177;
            do {
               penaltygoal9 += `${penaltygoal9.length}`;
               if (eyeopenc) {
                  break;
               }
            } while (((basketballdetailsbgz + 5) < 4 && 2 < (penaltygoal9.length + 5)) && eyeopenc);
            let paged: Array<any> = [133, 436, 819];
            let telegramB: Array<any> = [616, 692];
            orangeuparrowp += parseFloat(`${backw.size - sans9.length}`);
            let greyi: Array<any> = [917, 174, 948];
            while ((greyi.length + greyi.length) == 5 && 5 == (greyi.length + 5)) {
               greyi.push(greyi.length >> (Math.min(3, greyi.length)));
               break;
            }
            let switch_b1r = greyi.length >= 5524426;
            do {
               greyi.push(greyi.length);
               if (switch_b1r) {
                  break;
               }
            } while ((3 >= (3 | greyi.length)) && switch_b1r);
            for (let e = 0; e < 2; e++) {
               greyi.push(3);
            }
            streaming3 -= ((arrow4 ? 4 : 4) & parseInt(`${streaming3}`));
            console.log(err);
         }
      };

      const deviceOrientationHandle = () => {
         let tailg = false;
         let models0 = String.fromCharCode(106, 95, 51, 48, 95, 99, 111, 110, 110, 0);
         let sharewhitey = 5.0;
         let benefitt = 2.0;
         let disty = 2.0;
         let videobufferloadingo = String.fromCharCode(109, 95, 55, 50, 95, 99, 97, 108, 105, 98, 114, 97, 116, 101, 100, 0);
         let resendO = String.fromCharCode(99, 95, 52, 53, 95, 99, 101, 114, 116, 105, 102, 105, 99, 97, 116, 101, 0);
         let libflipper3 = String.fromCharCode(114, 101, 115, 105, 103, 110, 101, 100, 95, 113, 95, 50, 53, 0);
         let bing_ = false;
         let predictionbannerU = String.fromCharCode(109, 118, 101, 99, 95, 120, 95, 50, 51, 0);
         let mergerI = String.fromCharCode(116, 95, 57, 57, 95, 107, 101, 121, 104, 97, 115, 104, 0);
         let redcirclebg_ = false;
         let sigmobn = true;
         let history6 = 4.0;
         let detailsx = 0;
         while (1 == videobufferloadingo.length) {
            bing_ = models0.length <= 32;
            break;
         }
         if ((4.94 * disty) >= 3.88) {
            disty *= videobufferloadingo.length;
         }
         benefitt /= Math.max(parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${disty}`)), 5))}`), 3);



         libflipper3 = `${((tailg ? 5 : 2))}`;
         let starK = 5766297 >= libflipper3.length;
         do {
            let profile3 = 1;
            let albumo = 1.0;
            let dicelogoR = String.fromCharCode(103, 114, 97, 112, 104, 95, 120, 95, 50, 48, 0);
            albumo *= parseFloat(`${2}`);
            dicelogoR += `${3 / (Math.max(1, dicelogoR.length))}`;
            let nativeexN = 2;
            let termsP = String.fromCharCode(102, 95, 52, 49, 95, 98, 111, 111, 115, 116, 101, 100, 0);
            profile3 <<= Math.min(5, Math.abs(termsP.length | 3));
            nativeexN %= Math.max(3 - nativeexN, 3);
            termsP = `${nativeexN >> (Math.min(Math.abs(1), 4))}`;
            let orangeuparrow2 = 1.0;
            let redirectL: Map<any, any> = new Map([[String.fromCharCode(102, 95, 49, 56, 95, 105, 108, 101, 97, 118, 101, 0), String.fromCharCode(112, 95, 52, 53, 95, 102, 108, 97, 99, 100, 115, 112, 0)], [String.fromCharCode(116, 104, 114, 101, 97, 100, 112, 111, 111, 108, 95, 103, 95, 53, 49, 0), String.fromCharCode(101, 95, 54, 49, 95, 114, 103, 98, 97, 98, 101, 0)]]);
            let componentregistryK = 5.0;
            profile3 ^= 2 - profile3;
            orangeuparrow2 /= Math.max(parseFloat(`${parseInt(`${componentregistryK}`)}`), 1);
            redirectL = new Map([[`${redirectL.size}`, redirectL.size]]);
            componentregistryK += parseFloat(`${parseInt(`${orangeuparrow2}`) >> (Math.min(1, Math.abs(1)))}`);
            for (let r = 0; r < 2; r++) {
               albumo *= parseFloat(`${2}`);
            }
            albumo -= parseFloat(`${parseInt(`${albumo}`)}`);
            let rooto = 2.0;
            let zhuboA = 0.0;
            let down2 = String.fromCharCode(115, 104, 97, 100, 101, 115, 95, 118, 95, 54, 55, 0);
            albumo /= Math.max(1, parseFloat(`${parseInt(`${zhuboA}`) / (Math.max(down2.length, 8))}`));
            rooto -= parseFloat(`${parseInt(`${rooto}`)}`);
            zhuboA -= 1 & parseInt(`${rooto}`);
            libflipper3 += `${(libflipper3 == String.fromCharCode(120, 0) ? (tailg ? 2 : 3) : libflipper3.length)}`;
            if (starK) {
               break;
            }
         } while ((libflipper3.length == resendO.length) && starK);
         if (benefitt > sharewhitey) {
            let rncoreJ = 0.0;
            let screen_ = String.fromCharCode(98, 95, 49, 54, 95, 115, 116, 117, 110, 0);
            let iconbellB = 3.0;
            let favoritei = 2;
            let orangeuparrowl = screen_ == String.fromCharCode(114, 104, 57, 108, 54, 102, 0);
            do {
               screen_ = `${3 & favoritei}`;
               if (orangeuparrowl) {
                  break;
               }
            } while ((4.67 >= (2.92 + rncoreJ) && (screen_.length << (Math.min(Math.abs(2), 4))) >= 4) && orangeuparrowl);
            while (iconbellB < favoritei) {
               iconbellB /= Math.max(2, parseFloat(`${screen_.length}`));
               break;
            }
            while ((favoritei ^ 5) == 4 && 5 == (favoritei ^ screen_.length)) {
               screen_ += `${2 & screen_.length}`;
               break;
            }
            while (iconbellB == parseFloat(`${screen_.length}`)) {
               let predictionwino = String.fromCharCode(111, 95, 54, 52, 95, 97, 112, 112, 115, 0);
               let detailv: Map<any, any> = new Map([[String.fromCharCode(101, 95, 50, 48, 95, 101, 116, 97, 100, 97, 116, 97, 0), 437], [String.fromCharCode(115, 116, 99, 111, 95, 54, 95, 54, 56, 0), 708]]);
               let basketballH = 1;
               let footballD = String.fromCharCode(119, 95, 49, 51, 95, 99, 111, 100, 101, 0);
               iconbellB /= Math.max(3, parseFloat(`${1 ^ favoritei}`));
               predictionwino = "1";
               detailv.set(`${basketballH}`, basketballH);
               footballD = `${(String.fromCharCode(116, 0) == footballD ? detailv.size : footballD.length)}`;
               break;
            }
            for (let v = 0; v < 2; v++) {
               let formC: Array<any> = [358, 708];
               let basketballI = false;
               let chatroombackgroundh: Map<any, any> = new Map([[String.fromCharCode(101, 95, 50, 54, 95, 106, 112, 101, 103, 108, 105, 98, 0), String.fromCharCode(111, 95, 49, 49, 95, 111, 116, 104, 101, 114, 115, 0)], [String.fromCharCode(109, 95, 55, 56, 95, 119, 97, 105, 116, 0), String.fromCharCode(106, 95, 51, 57, 95, 101, 110, 118, 0)]]);
               let megaphoneQ = true;
               iconbellB /= Math.max(3, (parseFloat(`${(megaphoneQ ? 5 : 3) | favoritei}`)));
               formC = [((basketballI ? 2 : 1) ^ 3)];
               basketballI = chatroombackgroundh.size >= formC.length;
               chatroombackgroundh.set(`${basketballI}`, ((basketballI ? 1 : 2) / (Math.max(3, 9))));
               megaphoneQ = 51 < chatroombackgroundh.size;
            }
            iconbellB += parseFloat(`${favoritei * screen_.length}`);
            let episoded = true;
            let orangeuparrow22 = false;
            rncoreJ += ((episoded ? 1 : 4) & parseInt(`${iconbellB}`));
            let tempnodatab = 5300429.0 >= iconbellB;
            do {
               let service7 = 1;
               let bootsplashU = String.fromCharCode(107, 95, 52, 54, 95, 100, 101, 102, 101, 97, 116, 0);
               let auto_rsb: Map<any, any> = new Map([[String.fromCharCode(110, 95, 49, 53, 95, 114, 101, 102, 100, 117, 112, 101, 0), 280], [String.fromCharCode(112, 108, 97, 110, 101, 100, 95, 119, 95, 50, 57, 0), 67], [String.fromCharCode(107, 95, 51, 48, 95, 97, 110, 105, 109, 97, 116, 101, 0), 151]]);
               let middlesound1 = false;
               iconbellB += parseFloat(`${3}`);
               service7 /= Math.max(3, (bootsplashU == String.fromCharCode(86, 0) ? bootsplashU.length : (middlesound1 ? 1 : 2)));
               auto_rsb = new Map([[`${auto_rsb.size}`, bootsplashU.length]]);
               middlesound1 = service7 <= 42 && !middlesound1;
               if (tempnodatab) {
                  break;
               }
            } while ((favoritei >= 5) && tempnodatab);
            while (rncoreJ < 3.83) {
               rncoreJ /= Math.max(favoritei, 2);
               break;
            }
            orangeuparrow22 = rncoreJ == iconbellB;
            let auto_4P = String.fromCharCode(105, 112, 111, 100, 95, 106, 95, 53, 55, 0);
            let rewindA = String.fromCharCode(115, 95, 55, 49, 95, 100, 101, 110, 111, 109, 0);
            benefitt -= parseFloat(`${3}`);
         }
         if (
            devicesOrientation === "LANDSCAPE-LEFT" ||
            devicesOrientation === "LANDSCAPE-RIGHT"
         ) {

            resendO += "2";
            for (let e = 0; e < 3; e++) {
               let chartJ = 0.0;
               let anner2 = String.fromCharCode(114, 99, 111, 110, 95, 116, 95, 49, 0);
               let disconnected0: Array<any> = [156, 236];
               chartJ -= parseInt(`${chartJ}`);
               let historyk = String.fromCharCode(122, 95, 50, 56, 95, 114, 101, 98, 97, 115, 101, 0);
               let rewardvideoK = String.fromCharCode(112, 97, 117, 115, 101, 95, 50, 95, 55, 50, 0);
               let mbjscommonh = 4.0;
               chartJ += disconnected0.length >> (Math.min(Math.abs(1), 4));
               historyk += `${historyk.length ^ 3}`;
               rewardvideoK = "2";
               mbjscommonh += parseFloat(`${rewardvideoK.length / (Math.max(3, parseInt(`${mbjscommonh}`)))}`);
               let largesoundL: Map<any, any> = new Map([[String.fromCharCode(115, 121, 110, 116, 104, 102, 105, 108, 116, 95, 102, 95, 51, 52, 0), true], [String.fromCharCode(108, 95, 50, 54, 95, 116, 105, 109, 101, 108, 105, 110, 101, 0), true], [String.fromCharCode(99, 101, 110, 116, 114, 101, 95, 106, 95, 53, 52, 0), true]]);
               let faviconx: Map<any, any> = new Map([[String.fromCharCode(112, 101, 114, 115, 105, 115, 116, 97, 98, 108, 101, 95, 57, 95, 56, 54, 0), String.fromCharCode(101, 120, 112, 108, 111, 100, 105, 110, 103, 95, 121, 95, 49, 53, 0)], [String.fromCharCode(100, 114, 97, 119, 116, 101, 120, 116, 95, 112, 95, 51, 54, 0), String.fromCharCode(100, 101, 98, 117, 103, 103, 105, 110, 103, 95, 112, 95, 55, 54, 0)]]);
               for (let j = 0; j < 2; j++) {
                  let iconcurrentmatchd = 5.0;
                  let cancel4 = 3.0;
                  let default_5w = String.fromCharCode(110, 95, 54, 55, 95, 99, 104, 97, 114, 99, 111, 110, 118, 0);
                  anner2 += "2";
                  iconcurrentmatchd += parseFloat(`${parseInt(`${iconcurrentmatchd}`) + parseInt(`${cancel4}`)}`);
                  cancel4 *= (parseFloat(`${String.fromCharCode(80, 0) == default_5w ? parseInt(`${iconcurrentmatchd}`) : default_5w.length}`));
               }
               let libavfilter8 = 6911935 <= disconnected0.length;
               do {
                  disconnected0 = [1];
                  if (libavfilter8) {
                     break;
                  }
               } while (libavfilter8 && (5 > (1 | disconnected0.length)));
               faviconx.set(anner2, 1 % (Math.max(5, disconnected0.length)));
               let pangleN = String.fromCharCode(101, 110, 103, 105, 110, 101, 95, 50, 95, 50, 48, 0);
               let whatsappW = true;
               let styles7 = 0.0;
               anner2 = `${parseInt(`${styles7}`) * 3}`;
               pangleN = `${(pangleN.length << (Math.min(5, Math.abs((whatsappW ? 2 : 3)))))}`;
               whatsappW = pangleN.length >= 6;
               styles7 -= (parseFloat(`${(whatsappW ? 5 : 5) & 2}`));
               let taiwanR = String.fromCharCode(122, 95, 49, 49, 95, 101, 120, 99, 105, 116, 97, 116, 105, 111, 110, 0);
               let homeinactiver = String.fromCharCode(101, 120, 116, 114, 101, 109, 101, 95, 121, 95, 50, 50, 0);
               let formD = String.fromCharCode(118, 95, 54, 50, 95, 100, 99, 97, 101, 110, 99, 0);
               faviconx.set(`${disconnected0.length}`, disconnected0.length - largesoundL.size);
               taiwanR += `${3 + homeinactiver.length}`;
               homeinactiver += `${formD.length}`;
               formD = "3";
               if (largesoundL.get(`${faviconx.size}`) == null) {
                  let launchH = 4.0;
                  let imagewatchlivee = 4.0;
                  let layoutj = String.fromCharCode(112, 95, 56, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 114, 115, 0);
                  largesoundL.set(layoutj, 3);
                  launchH *= 2;
                  imagewatchlivee += parseFloat(`${parseInt(`${imagewatchlivee}`) * parseInt(`${launchH}`)}`);
                  layoutj += "1";
               }
               tailg = sharewhitey > 80.49;
            }
            videobufferloadingo = "3";
            setIsFullScreen(true);

            for (let p = 0; p < 2; p++) {
               let notificationgrayt = String.fromCharCode(109, 101, 114, 103, 101, 95, 108, 95, 52, 50, 0);
               let librrcC = false;
               let defaultpredictionprofileu = String.fromCharCode(101, 102, 102, 101, 99, 116, 105, 118, 101, 95, 115, 95, 49, 0);
               let window_2f2 = 3.0;
               for (let y = 0; y < 3; y++) {
                  window_2f2 *= notificationgrayt.length;
               }
               for (let y = 0; y < 2; y++) {
                  librrcC = defaultpredictionprofileu.length == 18;
               }
               let giftbuttonB = String.fromCharCode(49, 107, 118, 0) == notificationgrayt;
               do {
                  notificationgrayt += `${(notificationgrayt.length * (librrcC ? 3 : 5))}`;
                  if (giftbuttonB) {
                     break;
                  }
               } while ((!notificationgrayt.endsWith(`${librrcC}`)) && giftbuttonB);
               defaultpredictionprofileu = "3";
               let profileinactiveR = window_2f2 >= 7297770.0;
               do {
                  window_2f2 += 2;
                  if (profileinactiveR) {
                     break;
                  }
               } while (profileinactiveR && (1.8 <= window_2f2));
               let photo9: Array<any> = [764, 911, 221];
               let routerS: Array<any> = [String.fromCharCode(102, 111, 117, 114, 99, 99, 115, 95, 111, 95, 55, 50, 0), String.fromCharCode(104, 95, 57, 95, 112, 114, 111, 102, 105, 108, 101, 0), String.fromCharCode(100, 95, 56, 49, 95, 115, 97, 100, 100, 0)];
               while (!defaultpredictionprofileu.endsWith(`${window_2f2}`)) {
                  defaultpredictionprofileu = `${defaultpredictionprofileu.length}`;
                  break;
               }
               librrcC = 33 >= photo9.length;
               let libreactperfloggerjniM = 3.0;
               let faviconxC = 1.0;
               let tailq: Array<any> = [String.fromCharCode(115, 95, 52, 53, 95, 115, 111, 114, 116, 101, 114, 0), String.fromCharCode(115, 112, 97, 110, 95, 48, 95, 54, 48, 0)];
               let airbnbstarselectedq: Array<any> = [300, 353, 351];
               let bgvipsportj = 0.0;
               let darkU = String.fromCharCode(115, 116, 114, 101, 101, 116, 95, 54, 95, 56, 55, 0);
               routerS = [(defaultpredictionprofileu == String.fromCharCode(107, 0) ? airbnbstarselectedq.length : defaultpredictionprofileu.length)];
               bgvipsportj -= parseFloat(`${3}`);
               darkU += `${parseInt(`${bgvipsportj}`) / (Math.max(darkU.length, 9))}`;
               for (let w = 0; w < 1; w++) {
                  airbnbstarselectedq.push(tailq.length % 3);
               }
               benefitt -= parseFloat(`${models0.length & parseInt(`${disty}`)}`);
            }
            while (!libflipper3.startsWith(`${bing_}`)) {
               bing_ = !bing_ || !tailg;
               break;
            }
            let foregroundf = resendO == String.fromCharCode(101, 53, 122, 112, 108, 100, 55, 111, 0);
            do {
               let redirecto: Array<any> = [60, 985];
               let libfbjni8 = String.fromCharCode(122, 95, 54, 53, 95, 112, 117, 116, 99, 0);
               let redirectLT: Array<any> = [769, 619];
               let relatede = 4;
               let hongkongt = false;
               let matchdetailbgJ = String.fromCharCode(113, 95, 51, 50, 95, 103, 101, 116, 110, 112, 97, 115, 115, 101, 115, 0);
               hongkongt = redirecto.includes(relatede);
               matchdetailbgJ = `${matchdetailbgJ.length}`;
               let castl = String.fromCharCode(117, 95, 50, 52, 95, 120, 102, 101, 114, 0);
               let libimagepipelineF = String.fromCharCode(114, 105, 99, 104, 95, 100, 95, 50, 52, 0);
               libfbjni8 = `${libimagepipelineF.length + redirecto.length}`;
               if (hongkongt) {
                  let history0: Array<any> = [963, 970, 253];
                  let videovarB = String.fromCharCode(119, 105, 114, 101, 95, 52, 95, 51, 56, 0);
                  let liveshareG = String.fromCharCode(100, 101, 101, 112, 101, 114, 95, 57, 95, 52, 0);
                  let matchactivex = String.fromCharCode(99, 108, 97, 115, 115, 105, 102, 105, 101, 114, 95, 116, 95, 52, 51, 0);
                  let libjsijniprofilerD: Map<any, any> = new Map([[String.fromCharCode(120, 95, 53, 53, 95, 99, 111, 110, 116, 0), 484], [String.fromCharCode(105, 114, 97, 110, 100, 95, 100, 95, 48, 0), 521], [String.fromCharCode(100, 109, 105, 120, 95, 111, 95, 51, 56, 0), 402]]);
                  relatede /= Math.max(5, 2);
                  history0.push((liveshareG == String.fromCharCode(82, 0) ? videovarB.length : liveshareG.length));
                  videovarB += `${matchactivex.length ^ 3}`;
                  matchactivex = `${matchactivex.length}`;
                  libjsijniprofilerD.set(matchactivex, (String.fromCharCode(77, 0) == matchactivex ? videovarB.length : matchactivex.length));
               }
               for (let a = 0; a < 3; a++) {
                  castl += `${relatede}`;
               }
               libimagepipelineF = `${((hongkongt ? 3 : 3) ^ relatede)}`;
               for (let h = 0; h < 2; h++) {
                  let final_ib7 = true;
                  let profileframef = String.fromCharCode(116, 104, 117, 109, 98, 115, 95, 100, 95, 51, 52, 0);
                  let distH = 2.0;
                  hongkongt = (profileframef.length ^ redirectLT.length) < 24;
                  final_ib7 = 1.13 <= distH || !final_ib7;
                  profileframef = `${parseInt(`${distH}`) * 2}`;
               }
               for (let s = 0; s < 3; s++) {
                  libfbjni8 += `${(String.fromCharCode(77, 0) == castl ? libfbjni8.length : castl.length)}`;
               }
               while ((redirectLT.length * redirecto.length) > 2 && 3 > (redirectLT.length * 2)) {
                  let whatsappF: Map<any, any> = new Map([[String.fromCharCode(110, 111, 109, 101, 109, 95, 120, 95, 51, 55, 0), String.fromCharCode(100, 101, 109, 97, 110, 100, 95, 56, 95, 53, 0)], [String.fromCharCode(117, 112, 99, 97, 108, 108, 95, 104, 95, 51, 51, 0), String.fromCharCode(122, 95, 49, 54, 95, 98, 111, 97, 116, 0)]]);
                  let airbnbstarm = String.fromCharCode(110, 95, 53, 57, 95, 114, 104, 115, 0);
                  let inactiveS = String.fromCharCode(97, 99, 99, 101, 115, 115, 111, 114, 95, 50, 95, 54, 52, 0);
                  let fullscreenmin0 = 1;
                  let gesturex = false;
                  redirectLT = [3 | relatede];
                  whatsappF = new Map([[`${fullscreenmin0}`, fullscreenmin0]]);
                  airbnbstarm += `${airbnbstarm.length}`;
                  inactiveS = `${fullscreenmin0}`;
                  gesturex = fullscreenmin0 == 75;
                  break;
               }
               while (castl.length >= 5) {
                  let otherr: Map<any, any> = new Map([[String.fromCharCode(116, 97, 110, 115, 105, 103, 95, 104, 95, 50, 51, 0), String.fromCharCode(116, 95, 51, 51, 95, 114, 101, 112, 111, 114, 116, 101, 114, 0)], [String.fromCharCode(116, 95, 50, 50, 95, 115, 101, 97, 114, 99, 104, 101, 100, 0), String.fromCharCode(98, 101, 108, 111, 110, 103, 115, 95, 117, 95, 52, 53, 0)]]);
                  libimagepipelineF = "2";
                  otherr.set(`${otherr.size}`, otherr.size);
                  break;
               }
               for (let b = 0; b < 3; b++) {
                  let tempnodataN = String.fromCharCode(120, 95, 49, 49, 95, 116, 114, 101, 110, 100, 108, 105, 110, 101, 0);
                  relatede -= 2;
                  tempnodataN = `${tempnodataN.length}`;
               }
               while ((3 << (Math.min(2, redirectLT.length))) >= 5) {
                  redirectLT.push(castl.length);
                  break;
               }
               while (castl.length < relatede) {
                  relatede %= Math.max(5, 1 - libimagepipelineF.length);
                  break;
               }
               castl = `${redirectLT.length | 2}`;
               let tempnodataH = castl == String.fromCharCode(116, 48, 111, 120, 57, 0);
               do {
                  castl = `${redirecto.length ^ relatede}`;
                  if (tempnodataH) {
                     break;
                  }
               } while (tempnodataH && (castl.includes(`${redirectLT.length}`)));
               resendO = `${(String.fromCharCode(99, 0) == resendO ? parseInt(`${disty}`) : resendO.length)}`;
               if (foregroundf) {
                  break;
               }
            } while (foregroundf && (!resendO.includes(models0)));


            sharewhitey -= (parseFloat(`${(redcirclebg_ ? 3 : 1) * parseInt(`${benefitt}`)}`));
            let statisticsinactived = 7516850 <= videobufferloadingo.length;
            do {
               let goal1: Map<any, any> = new Map([[String.fromCharCode(98, 105, 113, 117, 97, 100, 95, 113, 95, 55, 51, 0), false], [String.fromCharCode(101, 95, 56, 57, 95, 99, 108, 108, 105, 0), false], [String.fromCharCode(122, 95, 55, 54, 0), true]]);
               let m_positionO: Map<any, any> = new Map([[String.fromCharCode(104, 95, 51, 55, 95, 102, 108, 97, 116, 116, 101, 110, 101, 100, 0), 446], [String.fromCharCode(100, 105, 115, 99, 111, 110, 116, 105, 103, 117, 111, 117, 115, 95, 111, 95, 50, 51, 0), 176]]);
               let y_hashr: Map<any, any> = new Map([[String.fromCharCode(99, 95, 49, 48, 48, 95, 99, 108, 105, 112, 112, 105, 110, 103, 0), 36], [String.fromCharCode(115, 111, 117, 114, 99, 101, 95, 102, 95, 50, 57, 0), 80]]);
               goal1.set(`${m_positionO.size}`, m_positionO.size << (Math.min(Math.abs(y_hashr.size), 1)));
               goal1 = new Map([[`${goal1.size}`, 3]]);
               goal1.set(`${goal1.size}`, goal1.size);
               videobufferloadingo = `${(String.fromCharCode(69, 0) == libflipper3 ? libflipper3.length : (tailg ? 5 : 5))}`;
               if (statisticsinactived) {
                  break;
               }
            } while ((parseInt(`${sharewhitey}`) == videobufferloadingo.length) && statisticsinactived);
            if (predictionbannerU == String.fromCharCode(118, 0)) {
               let change7: Map<any, any> = new Map([[String.fromCharCode(99, 95, 54, 53, 95, 97, 116, 111, 102, 0), 316], [String.fromCharCode(100, 101, 115, 116, 105, 110, 97, 116, 105, 111, 110, 115, 95, 50, 95, 55, 48, 0), 361], [String.fromCharCode(104, 115, 99, 97, 108, 101, 95, 54, 95, 57, 54, 0), 111]]);
               let halfi = String.fromCharCode(120, 95, 54, 57, 95, 97, 108, 108, 111, 119, 97, 110, 99, 101, 0);
               let othermatchdetailbgK: Array<any> = [19, 205];
               let dropdownx = 3;
               let libreactperfloggerjniK: Array<any> = [748, 181, 677];
               if ((halfi.length + 2) >= 5) {
                  halfi = `${3 * change7.size}`;
               }
               halfi = `${dropdownx & 2}`;
               let minimizeK: Array<any> = [String.fromCharCode(109, 97, 103, 101, 110, 116, 97, 95, 105, 95, 53, 49, 0), String.fromCharCode(100, 114, 98, 103, 95, 106, 95, 51, 54, 0), String.fromCharCode(118, 101, 114, 121, 95, 55, 95, 52, 50, 0)];
               halfi = `${minimizeK.length + 3}`;
               othermatchdetailbgK.push(othermatchdetailbgK.length % (Math.max(9, dropdownx)));
               while ((libreactperfloggerjniK.length ^ dropdownx) < 4 && (dropdownx ^ libreactperfloggerjniK.length) < 4) {
                  dropdownx -= dropdownx;
                  break;
               }
               let iconmored = false;
               let chats = 2;
               let privacy7 = false;
               libreactperfloggerjniK = [dropdownx];
               iconmored = privacy7;
               chats |= ((iconmored ? 5 : 4) * chats);
               change7.set(halfi, 2 | libreactperfloggerjniK.length);
               change7 = new Map([[`${libreactperfloggerjniK.length}`, dropdownx]]);
               othermatchdetailbgK = [dropdownx];
               change7 = new Map([[`${othermatchdetailbgK.length}`, 3]]);
               for (let o = 0; o < 3; o++) {
                  change7.set(halfi, (String.fromCharCode(110, 0) == halfi ? change7.size : halfi.length));
               }
               let guideo = 5461445 >= halfi.length;
               do {
                  halfi = `${libreactperfloggerjniK.length % (Math.max(othermatchdetailbgK.length, 7))}`;
                  if (guideo) {
                     break;
                  }
               } while ((4 >= (dropdownx ^ 1) && (halfi.length ^ dropdownx) >= 1) && guideo);
               halfi += `${change7.size}`;
               halfi = `${dropdownx * change7.size}`;
               let sourceF = change7.size <= 5686453;
               do {
                  let accepteds = false;
                  let guideL = String.fromCharCode(109, 95, 51, 95, 104, 100, 99, 100, 0);
                  let main_tt = String.fromCharCode(109, 101, 115, 97, 103, 101, 115, 95, 122, 95, 49, 56, 0);
                  let previewz = 4.0;
                  let iconbellP = 0.0;
                  change7.set(`${dropdownx}`, dropdownx);
                  accepteds = String.fromCharCode(98, 0) == main_tt;
                  guideL += `${(parseInt(`${previewz}`) | (accepteds ? 1 : 4))}`;
                  main_tt = `${parseInt(`${iconbellP}`) << (Math.min(2, Math.abs(2)))}`;
                  previewz += (parseFloat(`${main_tt == String.fromCharCode(70, 0) ? main_tt.length : parseInt(`${iconbellP}`)}`));
                  if (sourceF) {
                     break;
                  }
               } while ((2 < othermatchdetailbgK.length) && sourceF);
               models0 = `${((redcirclebg_ ? 4 : 3) ^ parseInt(`${disty}`))}`;
            }
            StatusBar.setHidden(true);

            for (let t = 0; t < 3; t++) {
               benefitt -= (parseFloat(`${parseInt(`${sharewhitey}`) | (tailg ? 1 : 1)}`));
            }
            for (let o = 0; o < 3; o++) {
               predictionbannerU = `${parseInt(`${benefitt}`)}`;
            }
            let codegenc = sharewhitey <= 7550555.0;
            do {
               let playlistq = String.fromCharCode(118, 97, 108, 105, 100, 97, 116, 101, 100, 95, 119, 95, 52, 55, 0);
               let overlay7 = true;
               let greytick7: Array<any> = [560, 375, 226];
               let codegenn = true;
               let incident5 = 3;
               overlay7 = 19 == incident5;
               codegenn = !codegenn;
               incident5 %= Math.max(2, 4);
               for (let f = 0; f < 2; f++) {
                  playlistq += `${playlistq.length | 3}`;
               }
               let securityk = String.fromCharCode(109, 105, 110, 113, 95, 56, 95, 55, 50, 0);
               greytick7.push(3 - securityk.length);
               for (let x = 0; x < 2; x++) {
                  let q_hashS = 1.0;
                  playlistq += `${parseInt(`${q_hashS}`) - playlistq.length}`;
               }
               for (let p = 0; p < 1; p++) {
                  greytick7 = [(playlistq == String.fromCharCode(53, 0) ? playlistq.length : greytick7.length)];
               }
               overlay7 = (((overlay7 ? playlistq.length : 47) % (Math.max(10, playlistq.length))) < 47);
               let liveC = 1.0;
               let liveendmodallogop = String.fromCharCode(114, 101, 118, 101, 114, 98, 95, 116, 95, 51, 52, 0);
               let penaltyshootB = String.fromCharCode(99, 104, 101, 99, 107, 112, 111, 105, 110, 116, 115, 95, 120, 95, 56, 56, 0);
               liveC += parseFloat(`${2 + liveendmodallogop.length}`);
               sharewhitey += parseFloat(`${1}`);
               if (codegenc) {
                  break;
               }
            } while ((redcirclebg_) && codegenc);

            lockOrientation(devicesOrientation);
         } else if (devicesOrientation === "PORTRAIT") {

            if (bing_) {
               resendO = "2";
            }
            mergerI = `${libflipper3.length}`;
            while (!models0.endsWith(`${libflipper3.length}`)) {
               models0 = `${videobufferloadingo.length}`;
               break;
            }
            setIsFullScreen(false);

            while (mergerI.length <= 2) {
               let zhubo7 = 4.0;
               let refreshj = String.fromCharCode(112, 117, 108, 108, 113, 117, 111, 116, 101, 95, 49, 95, 56, 54, 0);
               let iconeye0 = String.fromCharCode(120, 95, 56, 48, 95, 99, 104, 101, 99, 107, 105, 110, 0);
               let airbnbstar0 = String.fromCharCode(102, 102, 109, 97, 116, 104, 95, 103, 95, 50, 56, 0);
               let static_hq7 = String.fromCharCode(50, 118, 113, 56, 111, 103, 113, 0) == iconeye0;
               do {
                  iconeye0 += `${refreshj.length}`;
                  if (static_hq7) {
                     break;
                  }
               } while ((iconeye0 != String.fromCharCode(97, 0) || refreshj != String.fromCharCode(118, 0)) && static_hq7);
               mergerI = `${videobufferloadingo.length / (Math.max(models0.length, 8))}`;
               zhubo7 -= parseInt(`${zhubo7}`) % 2;
               break;
            }
            benefitt /= Math.max(3, (parseFloat(`${(redcirclebg_ ? 5 : 5) - parseInt(`${benefitt}`)}`)));
            let macauR: Array<any> = [String.fromCharCode(119, 105, 100, 101, 95, 109, 95, 54, 49, 0), String.fromCharCode(99, 111, 108, 99, 111, 108, 95, 117, 95, 52, 54, 0)];
            if ((macauR.length + macauR.length) <= 3 || (macauR.length + 3) <= 5) {
               macauR = [3];
            }
            while (macauR.length > macauR.length) {
               macauR = [macauR.length];
               break;
            }
            macauR = [1 & macauR.length];
            bing_ = 62.83 >= disty;


            let blackA = 0.0;
            let awayplayer7 = 2;
            for (let q = 0; q < 2; q++) {
               awayplayer7 -= awayplayer7 & parseInt(`${blackA}`);
            }
            awayplayer7 += awayplayer7 % (Math.max(parseInt(`${blackA}`), 5));
            blackA /= Math.max(1, parseFloat(`${awayplayer7 % (Math.max(1, parseInt(`${blackA}`)))}`));
            let stepD = blackA >= 7625101.0;
            do {
               blackA += parseFloat(`${awayplayer7}`);
               if (stepD) {
                  break;
               }
            } while ((4 > (parseInt(`${blackA}`) * awayplayer7) && (awayplayer7 + 4) > 3) && stepD);
            while (4 >= (4 ^ awayplayer7)) {
               blackA -= parseFloat(`${3 & awayplayer7}`);
               break;
            }
            let redcirclebg4: Array<any> = [260, 925, 847];
            redcirclebg_ = !videobufferloadingo.startsWith(`${benefitt}`);
            models0 += `${(String.fromCharCode(55, 0) == libflipper3 ? libflipper3.length : parseInt(`${benefitt}`))}`;
            mergerI = `${((tailg ? 3 : 3) ^ parseInt(`${sharewhitey}`))}`;
            StatusBar.setHidden(false);

            videobufferloadingo = `${models0.length * 1}`;
            predictionbannerU = `${resendO.length}`;
            let suboutv: Array<any> = [String.fromCharCode(100, 95, 56, 52, 95, 110, 97, 116, 105, 111, 110, 97, 108, 105, 116, 121, 0), String.fromCharCode(114, 95, 51, 54, 95, 118, 105, 115, 97, 0)];
            suboutv = [suboutv.length];
            suboutv = [suboutv.length];
            if (1 > suboutv.length) {
               suboutv = [suboutv.length & suboutv.length];
            }
            disty *= parseInt(`${sharewhitey}`) | 1;

            lockOrientation(devicesOrientation);
         }
      };

      const onToggleFullScreen = useCallback(() => {
         let footballfieldS = 4.0;
         let history0 = String.fromCharCode(101, 109, 98, 101, 100, 95, 49, 95, 57, 49, 0);
         let orangedownarrowZ = String.fromCharCode(114, 101, 108, 111, 99, 107, 95, 104, 95, 57, 57, 0);
         let directv = String.fromCharCode(98, 105, 119, 101, 105, 103, 104, 116, 95, 57, 95, 51, 57, 0);
         let footballtrophy1 = String.fromCharCode(103, 95, 55, 57, 95, 114, 97, 116, 105, 111, 115, 0);
         let textinput_ = false;
         let redscoreballt: Map<any, any> = new Map([[String.fromCharCode(97, 112, 109, 116, 101, 115, 116, 95, 117, 95, 48, 0), true], [String.fromCharCode(112, 111, 115, 101, 95, 113, 95, 49, 48, 48, 0), true]]);
         let greenarrowupV = String.fromCharCode(109, 98, 98, 108, 111, 99, 107, 95, 56, 95, 57, 48, 0);
         let castt = 5.0;
         let tnewsw = true;
         let overH = 2.0;
         let bellL = 3.0;
         let sans2 = 2.0;
         let webview0: Array<any> = [714, 526, 361];
         let questiconq = 1.0;
         let policyR = 5.0;
         while (!tnewsw) {
            redscoreballt.set(`${tnewsw}`, parseInt(`${castt}`) + 3);
            break;
         }
         let sendL = history0.length >= 7785915;
         do {
            history0 = `${2 * parseInt(`${castt}`)}`;
            if (sendL) {
               break;
            }
         } while (sendL && (parseInt(`${footballfieldS}`) > history0.length));
         let inouttargetredK = history0.length >= 6360354;
         do {
            history0 += `${2 & parseInt(`${overH}`)}`;
            if (inouttargetredK) {
               break;
            }
         } while ((5 < history0.length) && inouttargetredK);

         if (
            appOrientation === "LANDSCAPE-LEFT" ||
            appOrientation === "LANDSCAPE-RIGHT"
         ) {

            while (overH >= 5.18) {
               tnewsw = null != redscoreballt.get(`${footballfieldS}`);
               break;
            }
            greenarrowupV += `${((textinput_ ? 2 : 5) >> (Math.min(directv.length, 1)))}`;
            if (4 <= (greenarrowupV.length * parseInt(`${castt}`))) {
               greenarrowupV += `${(greenarrowupV == String.fromCharCode(81, 0) ? greenarrowupV.length : parseInt(`${footballfieldS}`))}`;
            }
            lockOrientation("PORTRAIT");

            greenarrowupV += `${parseInt(`${overH}`) & 2}`;
            let iconcalendarR = redscoreballt.size >= 5693793;
            do {
               redscoreballt = new Map([[`${castt}`, parseInt(`${castt}`) << (Math.min(Math.abs(2), 4))]]);
               if (iconcalendarR) {
                  break;
               }
            } while (((footballfieldS - 1.55) > 1.15) && iconcalendarR);
            let direct2 = footballfieldS >= 5900928.0;
            do {
               footballfieldS /= Math.max(5, (String.fromCharCode(85, 0) == directv ? directv.length : parseInt(`${footballfieldS}`)));
               if (direct2) {
                  break;
               }
            } while ((tnewsw) && direct2);
            setIsFullScreen(false);

            let footballp = footballtrophy1 == String.fromCharCode(122, 110, 97, 95, 0);
            do {
               let defaultplayerimgy: Array<any> = [565, 891, 319];
               defaultplayerimgy = [defaultplayerimgy.length];
               let resulty = String.fromCharCode(121, 95, 56, 57, 95, 110, 105, 110, 101, 0);
               defaultplayerimgy.push(resulty.length);
               defaultplayerimgy.push(2);
               footballtrophy1 = `${((tnewsw ? 2 : 4) / (Math.max(parseInt(`${footballfieldS}`), 3)))}`;
               if (footballp) {
                  break;
               }
            } while (footballp && (tnewsw));
            tnewsw = orangedownarrowZ == String.fromCharCode(57, 0);
            footballfieldS *= 3 & directv.length;


            while (!textinput_) {
               let hoverl: Array<any> = [665, 119, 846];
               let bellreminderu: Map<any, any> = new Map([[String.fromCharCode(107, 95, 53, 53, 95, 100, 101, 99, 108, 97, 114, 101, 0), 697], [String.fromCharCode(120, 95, 56, 95, 97, 114, 103, 115, 0), 869], [String.fromCharCode(114, 95, 57, 49, 95, 109, 105, 116, 101, 114, 0), 193]]);
               let videocommonS = String.fromCharCode(102, 95, 51, 54, 95, 97, 116, 116, 101, 109, 112, 116, 101, 100, 0);
               for (let d = 0; d < 3; d++) {
                  bellreminderu.set(`${hoverl.length}`, bellreminderu.size | hoverl.length);
               }
               let file2 = 8027773 <= hoverl.length;
               do {
                  let gdtadvS = String.fromCharCode(118, 95, 50, 51, 95, 114, 116, 109, 100, 0);
                  let regengF = 0.0;
                  hoverl.push(gdtadvS.length & 2);
                  gdtadvS += `${parseInt(`${regengF}`) % 3}`;
                  regengF -= parseFloat(`${2}`);
                  if (file2) {
                     break;
                  }
               } while (file2 && ((videocommonS.length + 3) >= 2 || 1 >= (3 + videocommonS.length)));
               let fastforward3 = String.fromCharCode(109, 95, 57, 50, 95, 112, 108, 105, 115, 116, 0);
               let whitetickB = String.fromCharCode(110, 95, 52, 50, 95, 100, 108, 105, 115, 116, 0);
               let window_4E = String.fromCharCode(106, 95, 50, 54, 95, 109, 98, 102, 105, 108, 116, 101, 114, 0);
               bellreminderu = new Map([[fastforward3, fastforward3.length]]);
               whitetickB = `${3 << (Math.min(3, window_4E.length))}`;
               window_4E = `${3 >> (Math.min(2, window_4E.length))}`;
               let sort0 = String.fromCharCode(111, 95, 49, 52, 95, 115, 116, 117, 110, 0);
               let pinga = String.fromCharCode(114, 95, 55, 55, 95, 116, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 0);
               hoverl.push(pinga.length);
               sort0 += `${pinga.length + sort0.length}`;
               let telegramm = String.fromCharCode(98, 50, 53, 51, 120, 103, 112, 101, 57, 0) == videocommonS;
               do {
                  videocommonS = "2";
                  if (telegramm) {
                     break;
                  }
               } while ((videocommonS.includes(`${bellreminderu.size}`)) && telegramm);
               let rightG: Map<any, any> = new Map([[String.fromCharCode(112, 97, 114, 101, 110, 116, 95, 106, 95, 55, 0), 330], [String.fromCharCode(122, 95, 57, 51, 95, 111, 112, 116, 105, 109, 105, 115, 109, 0), 641]]);
               let privacyS = String.fromCharCode(113, 95, 53, 50, 95, 121, 113, 117, 97, 110, 116, 0);
               pinga = `${bellreminderu.size | 1}`;
               rightG = new Map([[`${rightG.size}`, privacyS.length % (Math.max(3, 2))]]);
               privacyS = "3";
               let brightnessF = String.fromCharCode(116, 107, 104, 100, 95, 111, 95, 56, 55, 0);
               let turn9 = String.fromCharCode(114, 101, 99, 101, 105, 118, 101, 100, 95, 105, 95, 54, 49, 0);
               footballtrophy1 = `${directv.length}`;
               break;
            }
            let entry9 = 5;
            let bgvipsportY = 0.0;
            entry9 *= parseInt(`${bgvipsportY}`);
            while (4.56 <= bgvipsportY) {
               entry9 *= parseInt(`${bgvipsportY}`) >> (Math.min(2, Math.abs(1)));
               break;
            }
            for (let n = 0; n < 1; n++) {
               bgvipsportY *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${bgvipsportY}`)), 3))}`);
            }
            let eyecloseo = bgvipsportY >= 9319045.0;
            do {
               let configy = true;
               let review3 = false;
               let minivodl = false;
               let airbnbstarselectedg = 1;
               bgvipsportY *= (parseFloat(`${(review3 ? 5 : 1) % (Math.max(parseInt(`${bgvipsportY}`), 7))}`));
               configy = !minivodl;
               review3 = !configy || 12 < airbnbstarselectedg;
               minivodl = configy || 94 >= airbnbstarselectedg;
               if (eyecloseo) {
                  break;
               }
            } while (eyecloseo && (entry9 > bgvipsportY));
            if (2.25 > bgvipsportY) {
               let toponR = String.fromCharCode(116, 95, 55, 51, 95, 116, 121, 112, 101, 115, 116, 114, 0);
               let yellowanimationliveq = String.fromCharCode(111, 95, 52, 57, 95, 104, 97, 114, 100, 99, 111, 100, 101, 100, 0);
               let settingr: Array<any> = [342, 496];
               entry9 >>= Math.min(1, Math.abs(entry9));
               toponR += `${(String.fromCharCode(111, 0) == yellowanimationliveq ? yellowanimationliveq.length : settingr.length)}`;
               settingr.push(2 << (Math.min(5, settingr.length)));
            }
            let hooksR = 5233442.0 >= bgvipsportY;
            do {
               let phoneW = String.fromCharCode(107, 95, 57, 50, 95, 115, 111, 99, 107, 101, 116, 118, 97, 114, 0);
               let chinasameQ: Array<any> = [990, 719];
               bgvipsportY += parseFloat(`${1}`);
               phoneW = `${chinasameQ.length}`;
               chinasameQ = [chinasameQ.length];
               if (hooksR) {
                  break;
               }
            } while (hooksR && (bgvipsportY < entry9));
            overH /= Math.max(2, footballtrophy1.length << (Math.min(Math.abs(1), 5)));
            footballtrophy1 = `${orangedownarrowZ.length | directv.length}`;
            StatusBar.setHidden(false);

            tnewsw = 55.84 < footballfieldS;
            while (5 <= (parseInt(`${bellL}`) - history0.length)) {
               history0 += `${orangedownarrowZ.length % 2}`;
               break;
            }
            for (let l = 0; l < 2; l++) {
               let awayR: Array<any> = [277, 794, 139];
               let targetY: Array<any> = [770, 235];
               let layoutK = String.fromCharCode(102, 95, 56, 95, 108, 105, 115, 116, 101, 110, 0);
               targetY = [2];
               awayR = [awayR.length >> (Math.min(Math.abs(2), 1))];
               while (layoutK.endsWith(`${awayR.length}`)) {
                  let bello: Map<any, any> = new Map([[String.fromCharCode(116, 95, 51, 57, 95, 115, 116, 114, 105, 100, 101, 98, 0), String.fromCharCode(106, 95, 49, 48, 48, 95, 115, 101, 108, 101, 99, 116, 105, 110, 103, 0)], [String.fromCharCode(105, 109, 112, 111, 115, 116, 101, 114, 95, 102, 95, 49, 48, 48, 0), String.fromCharCode(97, 95, 52, 50, 95, 112, 114, 111, 103, 114, 97, 109, 115, 0)], [String.fromCharCode(118, 95, 55, 49, 95, 102, 117, 116, 117, 114, 101, 0), String.fromCharCode(114, 95, 50, 52, 95, 102, 105, 101, 108, 0)]]);
                  layoutK += `${layoutK.length & 3}`;
                  bello.set(`${bello.size}`, 1 % (Math.max(10, bello.size)));
                  break;
               }
               let suggestionY = 5850186 >= targetY.length;
               do {
                  targetY = [targetY.length];
                  if (suggestionY) {
                     break;
                  }
               } while ((5 < awayR.length) && suggestionY);
               targetY.push(3 * targetY.length);
               while (layoutK.length >= awayR.length) {
                  awayR.push(2 - layoutK.length);
                  break;
               }
               layoutK += `${targetY.length}`;
               let chinasame0: Map<any, any> = new Map([[String.fromCharCode(106, 95, 52, 57, 95, 102, 105, 112, 115, 0), 149], [String.fromCharCode(109, 95, 49, 49, 95, 97, 115, 121, 110, 99, 0), 474], [String.fromCharCode(104, 95, 49, 53, 95, 118, 111, 114, 98, 105, 115, 0), 578]]);
               targetY.push(3);
               textinput_ = history0.length < footballtrophy1.length;
            }

            if (Platform.OS === "android") {
               navigation.setOptions({ orientation: "portrait" });
            }
         } else {

            while (!history0.endsWith(`${overH}`)) {
               overH *= ((textinput_ ? 1 : 3));
               break;
            }
            let main_dV = String.fromCharCode(102, 95, 56, 56, 95, 115, 119, 105, 116, 99, 104, 101, 114, 0);
            for (let d = 0; d < 1; d++) {
               main_dV += `${3 * main_dV.length}`;
            }
            let iconschedule7 = 0.0;
            main_dV += `${parseInt(`${iconschedule7}`) & 3}`;
            main_dV += `${(main_dV == String.fromCharCode(85, 0) ? main_dV.length : main_dV.length)}`;
            orangedownarrowZ += `${redscoreballt.size - parseInt(`${castt}`)}`;
            redscoreballt.set(directv, 3 + directv.length);
            lockOrientation("LANDSCAPE");

            while (1.29 >= (overH - footballtrophy1.length) || (overH - 1.29) >= 1.87) {
               footballtrophy1 += `${(directv == String.fromCharCode(69, 0) ? directv.length : greenarrowupV.length)}`;
               break;
            }
            while (!tnewsw) {
               tnewsw = 84 > directv.length;
               break;
            }
            for (let u = 0; u < 3; u++) {
               history0 += `${history0.length}`;
            }
            setIsFullScreen(true);

            while (textinput_) {
               let yellowscoreballZ: Map<any, any> = new Map([[String.fromCharCode(101, 95, 54, 48, 95, 98, 116, 114, 101, 101, 0), 334], [String.fromCharCode(109, 105, 109, 105, 99, 95, 102, 95, 51, 56, 0), 214], [String.fromCharCode(99, 111, 110, 115, 116, 97, 110, 116, 115, 95, 108, 95, 56, 0), 340]]);
               let iconrefreshP = 3;
               let materialL = String.fromCharCode(100, 111, 110, 116, 95, 105, 95, 52, 0);
               let libruntimeexecutorg = 3;
               if ((yellowscoreballZ.size * libruntimeexecutorg) == 5) {
                  libruntimeexecutorg += libruntimeexecutorg & materialL.length;
               }
               let thailandf = materialL == String.fromCharCode(106, 55, 51, 99, 101, 114, 110, 114, 112, 0);
               do {
                  materialL = `${libruntimeexecutorg}`;
                  if (thailandf) {
                     break;
                  }
               } while (thailandf && (!materialL.endsWith(`${yellowscoreballZ.size}`)));
               yellowscoreballZ = new Map([[`${yellowscoreballZ.size}`, libruntimeexecutorg]]);
               while ((iconrefreshP / 4) < 5) {
                  let linkx = 0.0;
                  let tumbnailm = String.fromCharCode(99, 111, 110, 118, 115, 97, 109, 112, 95, 117, 95, 54, 57, 0);
                  let plashq: Map<any, any> = new Map([[String.fromCharCode(97, 99, 99, 117, 109, 95, 48, 95, 55, 54, 0), false], [String.fromCharCode(114, 101, 115, 105, 103, 110, 101, 100, 95, 110, 95, 52, 56, 0), true], [String.fromCharCode(106, 95, 52, 54, 95, 112, 111, 108, 108, 115, 0), true]]);
                  yellowscoreballZ = new Map([[`${libruntimeexecutorg}`, iconrefreshP % 3]]);
                  linkx /= Math.max(parseFloat(`${tumbnailm.length}`), 4);
                  tumbnailm = `${plashq.size + tumbnailm.length}`;
                  plashq = new Map([[`${plashq.size}`, plashq.size]]);
                  break;
               }
               for (let e = 0; e < 3; e++) {
                  let googleM = 5.0;
                  let matchesq = String.fromCharCode(97, 95, 52, 51, 95, 114, 101, 102, 108, 0);
                  libruntimeexecutorg >>= Math.min(4, Math.abs(materialL.length + 1));
                  googleM -= (parseFloat(`${String.fromCharCode(112, 0) == matchesq ? matchesq.length : parseInt(`${googleM}`)}`));
               }
               yellowscoreballZ = new Map([[`${yellowscoreballZ.size}`, 1 ^ yellowscoreballZ.size]]);
               yellowscoreballZ.set(`${iconrefreshP}`, 1);
               yellowscoreballZ = new Map([[`${libruntimeexecutorg}`, libruntimeexecutorg]]);
               let helper2 = materialL.length <= 9590200;
               do {
                  materialL = `${materialL.length - 2}`;
                  if (helper2) {
                     break;
                  }
               } while (((1 % (Math.max(1, iconrefreshP))) < 4 || 4 < (materialL.length % (Math.max(1, 2)))) && helper2);
               iconrefreshP *= materialL.length - 3;
               let homeiconL = String.fromCharCode(122, 95, 48, 95, 105, 115, 108, 101, 97, 112, 0);
               let closek = 0.0;
               let fnewsE = String.fromCharCode(109, 106, 112, 101, 103, 97, 95, 111, 95, 50, 52, 0);
               iconrefreshP /= Math.max(5, 1);
               homeiconL = "3";
               closek -= fnewsE.length;
               fnewsE += "2";
               yellowscoreballZ = new Map([[`${iconrefreshP}`, 2 ^ materialL.length]]);
               footballfieldS *= ((tnewsw ? 5 : 1) << (Math.min(directv.length, 4)));
               break;
            }
            let notificationfillemptyx = String.fromCharCode(102, 111, 117, 114, 99, 99, 115, 95, 52, 95, 49, 48, 0);
            let chatroombackgroundd = 3.0;
            let fcdaebecbcbafcdfceaaeccfeacdbJ: Array<any> = [388, 320, 49];
            notificationfillemptyx = `${notificationfillemptyx.length}`;
            let giftK = 0.0;
            let searchbarl = 5.0;
            giftK /= Math.max(parseInt(`${chatroombackgroundd}`), 4);
            while (fcdaebecbcbafcdfceaaeccfeacdbJ.length == 3) {
               let renderU: Map<any, any> = new Map([[String.fromCharCode(117, 95, 54, 49, 95, 97, 99, 115, 107, 105, 112, 0), String.fromCharCode(102, 105, 108, 108, 101, 114, 95, 107, 95, 51, 57, 0)], [String.fromCharCode(109, 101, 109, 99, 109, 112, 95, 112, 95, 55, 49, 0), String.fromCharCode(109, 95, 57, 55, 95, 114, 116, 112, 119, 0)], [String.fromCharCode(115, 111, 102, 97, 95, 99, 95, 50, 52, 0), String.fromCharCode(109, 111, 100, 117, 108, 97, 116, 101, 95, 57, 95, 57, 57, 0)]]);
               let iconsharefriendsz = String.fromCharCode(113, 95, 50, 55, 95, 117, 110, 112, 97, 99, 107, 0);
               let iconadslinkJ = true;
               let commentK = String.fromCharCode(100, 101, 98, 108, 111, 99, 107, 95, 102, 95, 51, 55, 0);
               let hongkong1: Array<any> = [231, 790, 336];
               giftK += ((iconadslinkJ ? 5 : 3) & parseInt(`${searchbarl}`));
               renderU = new Map([[`${hongkong1.length}`, 3]]);
               iconsharefriendsz = "3";
               iconadslinkJ = renderU.size <= iconsharefriendsz.length;
               commentK += `${1 / (Math.max(4, renderU.size))}`;
               hongkong1 = [hongkong1.length];
               break;
            }
            notificationfillemptyx = `${parseInt(`${chatroombackgroundd}`) & parseInt(`${giftK}`)}`;
            chatroombackgroundd /= Math.max(3 + parseInt(`${searchbarl}`), 3);
            for (let y = 0; y < 3; y++) {
               fcdaebecbcbafcdfceaaeccfeacdbJ = [3];
            }
            let flagR = 2.0;
            fcdaebecbcbafcdfceaaeccfeacdbJ.push(parseInt(`${searchbarl}`));
            flagR += parseFloat(`${parseInt(`${flagR}`) & 2}`);
            if (2.76 > (searchbarl - fcdaebecbcbafcdfceaaeccfeacdbJ.length)) {
               let twitterg: Map<any, any> = new Map([[String.fromCharCode(117, 95, 49, 51, 95, 116, 114, 97, 110, 115, 112, 111, 114, 116, 0), 267], [String.fromCharCode(108, 95, 57, 55, 95, 97, 103, 103, 114, 101, 103, 97, 116, 101, 100, 0), 550]]);
               let eactM = String.fromCharCode(104, 97, 100, 111, 119, 115, 95, 53, 95, 54, 57, 0);
               let iconclosewhiteT: Array<any> = [String.fromCharCode(109, 97, 120, 101, 100, 95, 120, 95, 49, 51, 0), String.fromCharCode(98, 95, 54, 57, 95, 98, 108, 101, 110, 100, 109, 111, 100, 101, 0)];
               let match1 = 1.0;
               let orangeuparrowG = 0;
               searchbarl -= 1 << (Math.min(4, iconclosewhiteT.length));
               twitterg.set(`${orangeuparrowG}`, 1);
               eactM = `${eactM.length}`;
               iconclosewhiteT.push(parseInt(`${match1}`));
               match1 /= Math.max(2, eactM.length & 2);
               orangeuparrowG |= orangeuparrowG;
            }
            footballtrophy1 = `${parseInt(`${sans2}`) << (Math.min(5, Math.abs(1)))}`;
            let traminiy = tnewsw ? !tnewsw : tnewsw;
            do {
               tnewsw = orangedownarrowZ == String.fromCharCode(86, 0);
               if (traminiy) {
                  break;
               }
            } while ((tnewsw) && traminiy);


            for (let q = 0; q < 1; q++) {
               footballfieldS += 2 | greenarrowupV.length;
            }
            let manifestR = directv.length >= 7683170;
            do {
               directv = `${parseInt(`${castt}`)}`;
               if (manifestR) {
                  break;
               }
            } while (manifestR && (footballtrophy1.length > 1 || 1 > directv.length));
            let completep = String.fromCharCode(97, 95, 54, 57, 95, 103, 101, 116, 104, 111, 115, 116, 98, 121, 110, 97, 109, 101, 0);
            let basketballhometeamk = String.fromCharCode(105, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 95, 55, 95, 53, 55, 0);
            let typingloading0: Map<any, any> = new Map([[String.fromCharCode(102, 114, 105, 101, 110, 100, 115, 95, 109, 95, 56, 57, 0), String.fromCharCode(112, 95, 56, 55, 95, 117, 110, 109, 97, 112, 0)], [String.fromCharCode(110, 111, 100, 111, 119, 110, 95, 51, 95, 56, 52, 0), String.fromCharCode(99, 97, 108, 108, 105, 115, 116, 111, 95, 53, 95, 51, 56, 0)], [String.fromCharCode(99, 117, 116, 101, 115, 116, 95, 49, 95, 56, 52, 0), String.fromCharCode(119, 97, 105, 116, 105, 110, 103, 95, 121, 95, 57, 57, 0)]]);
            let arrowrightwithtailr = String.fromCharCode(114, 95, 49, 56, 95, 117, 116, 118, 105, 100, 101, 111, 0);
            typingloading0.set(arrowrightwithtailr, 2 % (Math.max(9, typingloading0.size)));
            basketballhometeamk += `${basketballhometeamk.length / (Math.max(7, typingloading0.size))}`;
            while (typingloading0.size >= basketballhometeamk.length) {
               basketballhometeamk = `${2 >> (Math.min(4, basketballhometeamk.length))}`;
               break;
            }
            let turnL = 8535614 <= basketballhometeamk.length;
            do {
               let cancelk = String.fromCharCode(112, 105, 99, 107, 105, 110, 103, 95, 120, 95, 50, 53, 0);
               let orangeclockq = String.fromCharCode(99, 117, 114, 115, 111, 114, 115, 116, 114, 101, 97, 109, 119, 114, 97, 112, 112, 101, 114, 95, 57, 95, 49, 48, 48, 0);
               let loginsuccessu = 3.0;
               let sound9 = String.fromCharCode(111, 95, 51, 55, 95, 99, 111, 108, 115, 101, 116, 0);
               let macau9 = 5.0;
               basketballhometeamk += `${3 >> (Math.min(3, orangeclockq.length))}`;
               cancelk += `${(String.fromCharCode(119, 0) == cancelk ? parseInt(`${loginsuccessu}`) : cancelk.length)}`;
               orangeclockq = `${sound9.length}`;
               loginsuccessu /= Math.max(parseFloat(`${cancelk.length}`), 2);
               sound9 += `${2 / (Math.max(8, parseInt(`${loginsuccessu}`)))}`;
               macau9 += parseFloat(`${sound9.length}`);
               if (turnL) {
                  break;
               }
            } while ((!basketballhometeamk.includes(completep)) && turnL);
            basketballhometeamk += `${basketballhometeamk.length << (Math.min(1, Math.abs(typingloading0.size)))}`;
            completep += `${basketballhometeamk.length}`;
            if (completep == basketballhometeamk) {
               let matchesj = 2.0;
               let crownw = true;
               basketballhometeamk = `${2 << (Math.min(5, completep.length))}`;
               matchesj *= parseInt(`${matchesj}`) >> (Math.min(5, Math.abs(3)));
               crownw = matchesj <= 7.99;
            }
            let sort7: Array<any> = [955, 742];
            let circleD = String.fromCharCode(112, 105, 120, 101, 108, 98, 117, 102, 102, 101, 114, 95, 111, 95, 57, 49, 0);
            let sharewhiteN = String.fromCharCode(101, 95, 49, 49, 95, 103, 117, 105, 100, 0);
            completep = `${typingloading0.size % 3}`;
            sort7 = [circleD.length / 3];
            circleD += "1";
            sharewhiteN += `${(sharewhiteN == String.fromCharCode(103, 0) ? sharewhiteN.length : circleD.length)}`;
            while (completep.endsWith(`${typingloading0.size}`)) {
               let minivodr = String.fromCharCode(100, 101, 105, 110, 116, 95, 101, 95, 49, 53, 0);
               let corner3 = 2.0;
               completep += "1";
               minivodr = `${parseInt(`${corner3}`)}`;
               corner3 /= Math.max(parseInt(`${corner3}`) - minivodr.length, 2);
               break;
            }
            bellL *= orangedownarrowZ.length | parseInt(`${footballfieldS}`);
            StatusBar.setHidden(true);

            textinput_ = (parseInt(`${overH}`) / (Math.max(directv.length, 6))) == 19;
            let sigmobH = String.fromCharCode(115, 117, 98, 112, 97, 114, 116, 105, 116, 105, 111, 110, 95, 116, 95, 54, 48, 0);
            let n_positionB = String.fromCharCode(121, 95, 57, 95, 97, 99, 116, 105, 111, 110, 115, 0);
            if (n_positionB.length <= 2) {
               n_positionB += `${(n_positionB == String.fromCharCode(79, 0) ? n_positionB.length : sigmobH.length)}`;
            }
            let mutedK = 5.0;
            let cornershootp = 4;
            n_positionB += `${sigmobH.length - cornershootp}`;
            mutedK -= parseInt(`${mutedK}`) * 1;
            cornershootp *= parseInt(`${mutedK}`) % 3;
            let emoji8 = false;
            let iconnointernetW: Array<any> = [518, 224];
            sigmobH = `${iconnointernetW.length >> (Math.min(sigmobH.length, 2))}`;
            emoji8 = !emoji8;
            iconnointernetW.push(2);
            sigmobH += `${n_positionB.length}`;
            let subbasketballplayerS = String.fromCharCode(104, 95, 57, 52, 95, 116, 104, 117, 109, 98, 115, 117, 112, 0);
            let greyarrowupU = String.fromCharCode(121, 95, 54, 53, 95, 105, 115, 115, 117, 101, 0);
            n_positionB = `${n_positionB.length}`;
            subbasketballplayerS = `${subbasketballplayerS.length}`;
            greyarrowupU += "1";
            while (n_positionB.length <= 2 && sigmobH.length <= 2) {
               n_positionB = `${2 % (Math.max(8, sigmobH.length))}`;
               break;
            }
            redscoreballt.set(`${sans2}`, parseInt(`${sans2}`) / 2);
            while (!textinput_) {
               textinput_ = 1 >= orangedownarrowZ.length;
               break;
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
            let subsL: Map<any, any> = new Map([[String.fromCharCode(97, 117, 116, 111, 112, 108, 97, 121, 105, 110, 103, 95, 115, 95, 57, 55, 0), 478], [String.fromCharCode(103, 95, 53, 53, 95, 112, 97, 99, 107, 101, 116, 105, 110, 0), 595], [String.fromCharCode(102, 95, 50, 52, 95, 99, 117, 116, 111, 102, 102, 0), 928]]);
            let iconchatsendj = String.fromCharCode(103, 101, 111, 99, 111, 100, 101, 114, 95, 102, 95, 53, 53, 0);
            let largebrightnessv: Array<any> = [704, 772, 77];
            let valuesA = String.fromCharCode(108, 95, 49, 49, 95, 115, 104, 111, 117, 108, 100, 0);
            let iconqqb = 2;
            let moreS: Map<any, any> = new Map([[String.fromCharCode(115, 116, 97, 116, 105, 115, 116, 105, 99, 115, 95, 97, 95, 52, 48, 0), String.fromCharCode(112, 97, 114, 115, 101, 117, 116, 105, 108, 115, 95, 120, 95, 57, 55, 0)], [String.fromCharCode(99, 104, 97, 110, 95, 53, 95, 49, 50, 0), String.fromCharCode(102, 95, 55, 48, 95, 99, 103, 117, 0)], [String.fromCharCode(114, 105, 103, 104, 116, 95, 105, 95, 55, 52, 0), String.fromCharCode(99, 111, 110, 110, 101, 99, 116, 105, 118, 105, 116, 121, 95, 104, 95, 57, 55, 0)]]);
            let hooks8 = 0.0;
            let crownR = String.fromCharCode(109, 95, 57, 95, 115, 105, 109, 112, 108, 105, 102, 121, 0);
            let predictiondefaultb: Array<any> = [105, 117];
            let floating9 = String.fromCharCode(120, 95, 49, 51, 95, 102, 105, 116, 116, 105, 110, 103, 0);
            let models0: Array<any> = [71, 412];
            let starO = String.fromCharCode(107, 95, 51, 50, 95, 98, 114, 117, 115, 104, 101, 115, 0);
            let whiter = 5.0;
            let greyG: Map<any, any> = new Map([[String.fromCharCode(122, 95, 52, 48, 95, 105, 110, 115, 116, 114, 117, 109, 101, 110, 116, 97, 116, 105, 111, 110, 0), 883], [String.fromCharCode(120, 95, 49, 48, 95, 100, 105, 102, 102, 101, 114, 101, 110, 99, 101, 115, 0), 64], [String.fromCharCode(99, 95, 54, 49, 95, 117, 110, 116, 114, 117, 115, 116, 101, 100, 0), 982]]);
            for (let r = 0; r < 1; r++) {
               iconqqb ^= starO.length + subsL.size;
            }
            if (!largebrightnessv.includes(models0.length)) {
               models0.push(predictiondefaultb.length % (Math.max(2, 5)));
            }
            let left2 = 9132582 >= crownR.length;
            do {
               let ying0 = true;
               ying0 = ying0 || ying0;
               ying0 = ying0 || ying0;
               let connectione = String.fromCharCode(111, 112, 116, 105, 109, 117, 109, 95, 104, 95, 56, 48, 0);
               let reminderH = String.fromCharCode(115, 95, 52, 52, 95, 104, 101, 97, 100, 112, 104, 111, 110, 101, 0);
               crownR = `${valuesA.length}`;
               if (left2) {
                  break;
               }
            } while (left2 && (moreS.size >= 3));
            let constantsx = String.fromCharCode(110, 95, 54, 57, 95, 114, 101, 99, 116, 97, 110, 103, 108, 101, 115, 0);
            let robotoN = 4.0;
            constantsx = "1";
            robotoN /= Math.max(2, parseInt(`${robotoN}`) % (Math.max(parseInt(`${robotoN}`), 4)));
            for (let p = 0; p < 1; p++) {
               constantsx = `${constantsx.length << (Math.min(5, constantsx.length))}`;
            }
            if (constantsx.length <= 1) {
               constantsx += `${(constantsx == String.fromCharCode(79, 0) ? constantsx.length : constantsx.length)}`;
            }
            valuesA = `${(valuesA == String.fromCharCode(73, 0) ? valuesA.length : iconqqb)}`;
            while ((moreS.size | subsL.size) > 3 || (3 | moreS.size) > 2) {
               let dplusw = false;
               let templateprocessor5 = 2;
               let neonx = 3.0;
               let greeny = 1;
               let scoreI = 4;
               let type_rtK = 3;
               dplusw = dplusw && 24 == templateprocessor5;
               while (5 > greeny) {
                  greeny %= Math.max(2, 1);
                  break;
               }
               let logo3 = String.fromCharCode(115, 116, 114, 100, 117, 112, 95, 118, 95, 53, 55, 0);
               let sportsg = 0.0;
               let libmapbufferjniG = String.fromCharCode(121, 95, 55, 56, 95, 97, 115, 109, 100, 101, 102, 115, 0);
               greeny %= Math.max((logo3 == String.fromCharCode(122, 0) ? (dplusw ? 1 : 2) : logo3.length), 5);
               sportsg -= parseFloat(`${libmapbufferjniG.length}`);
               libmapbufferjniG += `${3 - parseInt(`${sportsg}`)}`;
               if (5 == (5 >> (Math.min(5, Math.abs(templateprocessor5)))) && (5 >> (Math.min(1, Math.abs(type_rtK)))) == 3) {
                  type_rtK += parseInt(`${neonx}`) % 1;
               }
               let yellowcirclebgK = 5468738.0 <= neonx;
               do {
                  neonx *= parseFloat(`${type_rtK / (Math.max(2, 1))}`);
                  if (yellowcirclebgK) {
                     break;
                  }
               } while ((templateprocessor5 < neonx) && yellowcirclebgK);
               let combinedl = false;
               let predictionwinx = true;
               let nbatrophyr = String.fromCharCode(104, 95, 56, 54, 95, 106, 111, 105, 110, 0);
               dplusw = !predictionwinx;
               combinedl = nbatrophyr.includes(`${combinedl}`);
               predictionwinx = nbatrophyr.length < 8;
               if (5 <= greeny) {
                  greeny %= Math.max(1, 3 ^ parseInt(`${neonx}`));
               }
               while (2 == (1 - greeny) || 1 == greeny) {
                  greeny |= 1 % (Math.max(2, templateprocessor5));
                  break;
               }
               if ((3 >> (Math.min(2, Math.abs(templateprocessor5)))) <= 5) {
                  let securityU: Map<any, any> = new Map([[String.fromCharCode(100, 101, 97, 100, 108, 111, 99, 107, 101, 100, 95, 107, 95, 57, 57, 0), 451], [String.fromCharCode(112, 95, 54, 50, 95, 115, 119, 97, 98, 0), 358]]);
                  let shielddoneA = 4.0;
                  let penaltygoalj = 2;
                  let b_titleU = 0.0;
                  let othermatchdetailbgh = 3;
                  dplusw = 47 < type_rtK || neonx < 73.47;
                  securityU.set(`${b_titleU}`, othermatchdetailbgh);
                  shielddoneA /= Math.max(parseFloat(`${1}`), 1);
                  penaltygoalj /= Math.max(parseInt(`${b_titleU}`) >> (Math.min(4, Math.abs(1))), 5);
                  othermatchdetailbgh ^= parseInt(`${b_titleU}`) * othermatchdetailbgh;
               }
               let q_countS = scoreI >= 7881240;
               do {
                  let telegramR = String.fromCharCode(97, 116, 114, 97, 99, 112, 108, 117, 115, 95, 54, 95, 54, 54, 0);
                  let runtimeschedulerZ: Map<any, any> = new Map([[String.fromCharCode(119, 95, 52, 54, 95, 99, 111, 110, 115, 116, 97, 110, 116, 115, 0), true], [String.fromCharCode(114, 95, 51, 54, 95, 116, 97, 103, 110, 99, 111, 109, 112, 97, 114, 101, 0), false], [String.fromCharCode(102, 95, 54, 55, 95, 105, 108, 115, 116, 0), false]]);
                  let teamdetailsbgH = String.fromCharCode(115, 104, 105, 102, 116, 95, 101, 95, 55, 56, 0);
                  let modalv = String.fromCharCode(102, 95, 54, 51, 95, 116, 101, 99, 104, 110, 111, 108, 111, 103, 121, 0);
                  scoreI |= 2;
                  telegramR = `${runtimeschedulerZ.size - 3}`;
                  runtimeschedulerZ = new Map([[modalv, (String.fromCharCode(117, 0) == teamdetailsbgH ? teamdetailsbgH.length : modalv.length)]]);
                  if (q_countS) {
                     break;
                  }
               } while (q_countS && (1 < (scoreI & type_rtK)));
               let reactnavigationc = 5.0;
               let anythink1 = String.fromCharCode(117, 95, 53, 53, 95, 104, 99, 104, 114, 111, 109, 97, 0);
               let darkm: Array<any> = [42, 745];
               let dangerb = false;
               dplusw = scoreI <= templateprocessor5;
               darkm.push(((dangerb ? 4 : 5) >> (Math.min(Math.abs(2), 2))));
               dangerb = darkm.includes(dangerb);
               let orientationH = String.fromCharCode(109, 111, 118, 116, 101, 120, 116, 115, 117, 98, 95, 107, 95, 57, 48, 0);
               let icondefaultthumbnailN = String.fromCharCode(117, 95, 56, 57, 95, 100, 101, 99, 108, 105, 110, 101, 0);
               moreS.set(`${neonx}`, 1);
               break;
            }
            let yellowvideoliveX: Array<any> = [756, 147];
            let screend = 4.0;
            let saveH = 2.0;
            saveH -= parseFloat(`${parseInt(`${saveH}`) / 2}`);
            let yellowtoredN = String.fromCharCode(111, 110, 102, 105, 103, 117, 114, 97, 116, 105, 111, 110, 95, 49, 95, 53, 0);
            let shootyesgoalh: Array<any> = [208, 733];
            saveH *= parseFloat(`${yellowtoredN.length}`);
            yellowtoredN = `${shootyesgoalh.length}`;
            shootyesgoalh.push(shootyesgoalh.length ^ shootyesgoalh.length);
            let gpayv = String.fromCharCode(113, 95, 51, 48, 95, 104, 105, 103, 104, 108, 105, 103, 104, 116, 115, 0);
            screend += parseFloat(`${gpayv.length}`);
            saveH *= parseFloat(`${1 | parseInt(`${saveH}`)}`);
            for (let e = 0; e < 3; e++) {
               screend += parseFloat(`${1 | yellowvideoliveX.length}`);
            }
            let resendW = String.fromCharCode(117, 105, 100, 95, 117, 95, 49, 50, 0);
            let greenarrowupR: Array<any> = [405, 118, 55];
            yellowvideoliveX = [3];
            resendW = `${greenarrowupR.length}`;
            greenarrowupR.push(resendW.length & greenarrowupR.length);
            saveH *= parseFloat(`${parseInt(`${screend}`)}`);
            for (let g = 0; g < 1; g++) {
               saveH /= Math.max(1, parseFloat(`${parseInt(`${screend}`) % 1}`));
            }
            let playlisth: Map<any, any> = new Map([[String.fromCharCode(122, 95, 54, 56, 95, 97, 102, 102, 105, 110, 105, 116, 105, 101, 115, 0), false], [String.fromCharCode(122, 95, 55, 50, 95, 115, 119, 105, 122, 122, 108, 105, 110, 103, 0), false], [String.fromCharCode(115, 119, 97, 116, 99, 104, 95, 48, 95, 54, 57, 0), true]]);
            let statisticsK: Map<any, any> = new Map([[String.fromCharCode(109, 112, 101, 103, 118, 105, 100, 101, 111, 100, 97, 116, 97, 95, 55, 95, 52, 0), 728], [String.fromCharCode(116, 104, 114, 111, 116, 116, 108, 101, 114, 95, 49, 95, 52, 49, 0), 98], [String.fromCharCode(97, 108, 97, 98, 97, 115, 116, 101, 114, 95, 105, 95, 51, 49, 0), 926]]);
            crownR = `${valuesA.length}`;
            let iconlogouty = 8071227 >= starO.length;
            do {
               let defaultpredictionprofileZ = 2.0;
               let issub7 = 0.0;
               for (let p = 0; p < 1; p++) {
                  defaultpredictionprofileZ += parseInt(`${defaultpredictionprofileZ}`) & parseInt(`${issub7}`);
               }
               let defaultprofilepic8 = issub7 >= 9810438.0;
               do {
                  issub7 -= parseFloat(`${2}`);
                  if (defaultprofilepic8) {
                     break;
                  }
               } while ((3.88 < defaultpredictionprofileZ) && defaultprofilepic8);
               let iconfeedbackF: Array<any> = [775, 287, 914];
               let zhengpianA = defaultpredictionprofileZ <= 7060524.0;
               do {
                  defaultpredictionprofileZ /= Math.max(4, iconfeedbackF.length);
                  if (zhengpianA) {
                     break;
                  }
               } while (zhengpianA && (!iconfeedbackF.includes(defaultpredictionprofileZ)));
               defaultpredictionprofileZ -= iconfeedbackF.length * 1;
               while (issub7 == defaultpredictionprofileZ) {
                  let defaultteamC = String.fromCharCode(97, 95, 49, 54, 95, 103, 97, 109, 101, 115, 0);
                  let iconcalendarr = 1;
                  let basketballawayteamU = String.fromCharCode(121, 95, 56, 50, 95, 119, 112, 101, 110, 100, 105, 110, 103, 0);
                  defaultpredictionprofileZ /= Math.max(parseInt(`${defaultpredictionprofileZ}`), 1);
                  defaultteamC += `${iconcalendarr}`;
                  iconcalendarr -= basketballawayteamU.length;
                  basketballawayteamU = `${basketballawayteamU.length}`;
                  break;
               }
               starO += `${largebrightnessv.length | 1}`;
               if (iconlogouty) {
                  break;
               }
            } while (iconlogouty && (2.58 == hooks8));
            let attributedstringr = String.fromCharCode(100, 95, 52, 53, 95, 115, 97, 99, 107, 0);
            let iconrefresho = 0.0;
            let iconscheduley: Array<any> = [2, 415];
            let turndownR: Array<any> = [String.fromCharCode(112, 97, 110, 105, 99, 95, 119, 95, 51, 54, 0), String.fromCharCode(98, 111, 117, 110, 100, 115, 112, 101, 99, 105, 102, 105, 99, 95, 57, 95, 56, 48, 0), String.fromCharCode(104, 97, 100, 111, 119, 115, 95, 116, 95, 49, 50, 0)];
            if (attributedstringr.includes(`${iconscheduley.length}`)) {
               let analytic4 = String.fromCharCode(116, 101, 115, 116, 111, 114, 105, 103, 95, 53, 95, 55, 48, 0);
               let collectionT = String.fromCharCode(97, 95, 54, 56, 95, 99, 111, 110, 102, 108, 105, 99, 116, 101, 100, 0);
               let upload5 = true;
               let inouttargetredJ = String.fromCharCode(115, 117, 98, 116, 114, 101, 101, 95, 54, 95, 52, 51, 0);
               let zhengpiany: Array<any> = [779, 760, 493];
               iconscheduley.push((collectionT == String.fromCharCode(103, 0) ? (upload5 ? 1 : 2) : collectionT.length));
               analytic4 = `${analytic4.length}`;
               upload5 = inouttargetredJ.length >= zhengpiany.length;
               inouttargetredJ = `${zhengpiany.length}`;
            }
            let mapbufferI = false;
            let goallogot = 5865615 <= iconscheduley.length;
            do {
               let logousern: Array<any> = [603, 361, 164];
               let questj = String.fromCharCode(105, 109, 112, 111, 114, 116, 97, 110, 116, 95, 107, 95, 52, 0);
               iconscheduley = [iconscheduley.length];
               logousern = [2];
               questj += `${2 + questj.length}`;
               if (goallogot) {
                  break;
               }
            } while (goallogot && (iconscheduley.includes(iconrefresho)));
            let defaultplayerimgl = 2;
            let libavdevice4 = 4;
            let greyU = false;
            mapbufferI = libavdevice4 < attributedstringr.length;
            defaultplayerimgl |= ((greyU ? 1 : 1) & defaultplayerimgl);
            libavdevice4 -= defaultplayerimgl;
            greyU = 94 > defaultplayerimgl || !greyU;
            for (let v = 0; v < 2; v++) {
               attributedstringr = "1";
            }
            valuesA = `${1 / (Math.max(9, models0.length))}`;
            for (let y = 0; y < 2; y++) {
               iconqqb &= predictiondefaultb.length ^ 3;
            }
            let libimagepipelinev = String.fromCharCode(109, 109, 122, 100, 113, 0) == floating9;
            do {
               let leaguem: Array<any> = [String.fromCharCode(106, 112, 101, 103, 116, 114, 97, 110, 95, 103, 95, 51, 49, 0), String.fromCharCode(107, 97, 105, 115, 101, 114, 95, 109, 95, 51, 50, 0)];
               let fileT = 3;
               let flag2 = String.fromCharCode(115, 101, 116, 115, 97, 114, 95, 118, 95, 53, 56, 0);
               let elementsk = 2.0;
               let nativemodulei = false;
               fileT *= 3 >> (Math.min(1, flag2.length));
               let clocka = 3.0;
               let datam: Map<any, any> = new Map([[String.fromCharCode(117, 95, 52, 95, 102, 116, 114, 117, 110, 99, 97, 116, 101, 0), String.fromCharCode(99, 114, 97, 115, 104, 101, 100, 95, 54, 95, 54, 50, 0)], [String.fromCharCode(117, 95, 50, 53, 95, 109, 97, 103, 110, 105, 102, 105, 101, 114, 0), String.fromCharCode(104, 95, 49, 50, 95, 103, 114, 97, 110, 112, 111, 115, 0)]]);
               let libswscaleb = String.fromCharCode(100, 105, 115, 112, 111, 115, 101, 100, 95, 56, 95, 57, 50, 0);
               flag2 = `${libswscaleb.length / 2}`;
               clocka += parseFloat(`${parseInt(`${clocka}`)}`);
               datam.set(`${clocka}`, parseInt(`${clocka}`) / 2);
               libswscaleb += `${1 + parseInt(`${clocka}`)}`;
               while (5 >= (fileT << (Math.min(Math.abs(5), 1))) || (leaguem.length << (Math.min(Math.abs(5), 4))) >= 1) {
                  let leaguedetailsbgs = false;
                  let entryE = 5.0;
                  let redscoreballE: Array<any> = [419, 249, 55];
                  let spinnerW = false;
                  fileT ^= flag2.length / (Math.max(2, 4));
                  leaguedetailsbgs = leaguedetailsbgs && 87.31 <= entryE;
                  entryE /= Math.max((parseFloat(`${redscoreballE.length % (Math.max(2, (spinnerW ? 4 : 1)))}`)), 3);
                  redscoreballE = [(parseInt(`${entryE}`) | (leaguedetailsbgs ? 4 : 2))];
                  spinnerW = !spinnerW;
                  break;
               }
               if (4 >= (2 * leaguem.length)) {
                  leaguem.push(((nativemodulei ? 4 : 2) + fileT));
               }
               for (let y = 0; y < 2; y++) {
                  let dependencyW = 2.0;
                  let manifestI = String.fromCharCode(116, 95, 57, 55, 95, 115, 116, 114, 101, 110, 103, 116, 104, 115, 0);
                  nativemodulei = flag2.length < 70;
                  dependencyW /= Math.max(parseFloat(`${manifestI.length ^ parseInt(`${dependencyW}`)}`), 5);
                  manifestI = `${(manifestI == String.fromCharCode(88, 0) ? manifestI.length : parseInt(`${dependencyW}`))}`;
               }
               let ainit_udb: Array<any> = [String.fromCharCode(97, 114, 103, 118, 95, 110, 95, 54, 48, 0), String.fromCharCode(122, 95, 51, 52, 0)];
               let greyarrowup2: Array<any> = [260, 754, 30];
               flag2 += `${parseInt(`${elementsk}`) >> (Math.min(1, Math.abs(3)))}`;
               while (!nativemodulei) {
                  fileT %= Math.max(4, parseInt(`${elementsk}`) | 1);
                  break;
               }
               let event_ = String.fromCharCode(109, 95, 49, 50, 95, 103, 101, 116, 115, 111, 99, 107, 111, 112, 116, 0);
               for (let v = 0; v < 3; v++) {
                  nativemodulei = !nativemodulei;
               }
               flag2 += `${leaguem.length | fileT}`;
               let popupB = 7323380 <= leaguem.length;
               do {
                  leaguem.push(event_.length);
                  if (popupB) {
                     break;
                  }
               } while (popupB && (2 > leaguem.length));
               flag2 = `${1 / (Math.max(3, leaguem.length))}`;
               leaguem.push((parseInt(`${elementsk}`) * (nativemodulei ? 4 : 5)));
               for (let i = 0; i < 1; i++) {
                  flag2 += `${(fileT & (nativemodulei ? 2 : 2))}`;
               }
               floating9 += `${predictiondefaultb.length}`;
               if (libimagepipelinev) {
                  break;
               }
            } while ((starO != String.fromCharCode(81, 0)) && libimagepipelinev);
            let storeo: Map<any, any> = new Map([[String.fromCharCode(99, 95, 55, 49, 95, 105, 112, 104, 111, 110, 101, 0), true], [String.fromCharCode(112, 103, 109, 120, 95, 116, 95, 55, 56, 0), true]]);
            let flipper6 = String.fromCharCode(99, 95, 57, 49, 95, 116, 114, 117, 110, 99, 97, 116, 101, 100, 0);
            let castingr = 2.0;
            let fastg = 1;
            storeo = new Map([[`${storeo.size}`, fastg]]);
            flipper6 += "3";
            castingr += 1;
            fastg &= flipper6.length & parseInt(`${castingr}`);
            storeo = new Map([[`${storeo.size}`, storeo.size >> (Math.min(Math.abs(2), 3))]]);
            let privatechatbg4 = 6803632 >= storeo.size;
            do {
               let eactx: Array<any> = [17, 909, 588];
               let acceptedV: Map<any, any> = new Map([[String.fromCharCode(104, 117, 102, 102, 109, 97, 110, 95, 55, 95, 52, 48, 0), String.fromCharCode(104, 97, 115, 95, 55, 95, 57, 51, 0)], [String.fromCharCode(100, 112, 97, 103, 101, 95, 56, 95, 57, 49, 0), String.fromCharCode(108, 97, 98, 101, 108, 115, 95, 51, 95, 49, 54, 0)]]);
               let videovar9 = 2.0;
               let iconadslinkH: Array<any> = [351, 147];
               storeo.set(`${eactx.length}`, acceptedV.size << (Math.min(Math.abs(3), 1)));
               eactx = [parseInt(`${videovar9}`)];
               acceptedV = new Map([[`${iconadslinkH.length}`, 3 + iconadslinkH.length]]);
               videovar9 -= parseFloat(`${iconadslinkH.length % (Math.max(2, 10))}`);
               if (privatechatbg4) {
                  break;
               }
            } while (privatechatbg4 && (!Array.from(storeo.keys()).includes(`${storeo.size}`)));
            hooks8 -= iconchatsendj.length;
            starO += `${largebrightnessv.length % (Math.max(1, 8))}`;
            let gmailX = 3.0;
            let dialog_ = 2.0;
            gmailX += parseFloat(`${parseInt(`${dialog_}`) * 3}`);
            while ((2.85 * dialog_) == 3.47 || (dialog_ + 2.85) == 1.3) {
               let commentC = 2;
               let shootyesgoalG: Map<any, any> = new Map([[String.fromCharCode(97, 108, 103, 95, 48, 95, 57, 48, 0), 280], [String.fromCharCode(103, 104, 97, 115, 104, 95, 57, 95, 52, 53, 0), 883]]);
               let mbsplashq = String.fromCharCode(99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 115, 95, 119, 95, 54, 48, 0);
               let predictionarrowS = true;
               let iconarrowleftx = String.fromCharCode(106, 95, 50, 54, 0);
               dialog_ *= parseFloat(`${2}`);
               commentC *= iconarrowleftx.length * commentC;
               shootyesgoalG = new Map([[mbsplashq, commentC * 1]]);
               mbsplashq += `${shootyesgoalG.size}`;
               predictionarrowS = mbsplashq.endsWith(`${commentC}`);
               iconarrowleftx += "2";
               break;
            }
            for (let g = 0; g < 3; g++) {
               dialog_ -= parseFloat(`${1 | parseInt(`${gmailX}`)}`);
            }
            let videocommonH = 3;
            gmailX *= parseFloat(`${3}`);
            gmailX *= parseFloat(`${parseInt(`${gmailX}`)}`);
            largebrightnessv = [iconqqb - 2];
            predictiondefaultb.push(predictiondefaultb.length);
            crownR = `${subsL.size}`;
            while (iconqqb >= 3) {
               let middlewareN = String.fromCharCode(121, 95, 49, 95, 100, 97, 115, 104, 98, 111, 97, 114, 100, 0);
               let tickY: Array<any> = [String.fromCharCode(110, 95, 53, 53, 95, 117, 109, 98, 114, 101, 108, 108, 97, 0), String.fromCharCode(116, 95, 53, 52, 95, 109, 105, 112, 115, 0), String.fromCharCode(115, 112, 101, 99, 105, 102, 105, 101, 100, 95, 104, 95, 53, 0)];
               let yellowredcardq: Map<any, any> = new Map([[String.fromCharCode(97, 110, 110, 111, 117, 110, 99, 101, 95, 119, 95, 51, 48, 0), 133], [String.fromCharCode(98, 95, 52, 54, 95, 116, 100, 108, 115, 0), 764]]);
               let malaysiaz = 1.0;
               tickY.push(tickY.length);
               middlewareN = `${1 - middlewareN.length}`;
               yellowredcardq.set(`${malaysiaz}`, tickY.length ^ 3);
               let leakcheckerg: Array<any> = [String.fromCharCode(108, 105, 98, 101, 118, 101, 110, 116, 95, 119, 95, 55, 49, 0), String.fromCharCode(115, 116, 111, 112, 95, 51, 95, 51, 51, 0)];
               let model5 = 4.0;
               let unimplementedviewU = String.fromCharCode(114, 111, 119, 105, 100, 95, 104, 95, 51, 53, 0);
               tickY.push(unimplementedviewU.length);
               leakcheckerg.push(leakcheckerg.length);
               model5 *= leakcheckerg.length & 1;
               unimplementedviewU = `${leakcheckerg.length}`;
               while ((3 | yellowredcardq.size) <= 1) {
                  yellowredcardq = new Map([[`${yellowredcardq.size}`, 3]]);
                  break;
               }
               let bootsplashi = String.fromCharCode(100, 101, 101, 112, 108, 105, 110, 107, 95, 54, 95, 56, 52, 0);
               malaysiaz += parseFloat(`${parseInt(`${malaysiaz}`)}`);
               for (let d = 0; d < 3; d++) {
                  let iconqq1 = 2;
                  let mbnativeadvancedj = 4.0;
                  let zhengpian6: Map<any, any> = new Map([[String.fromCharCode(117, 95, 51, 55, 95, 105, 110, 100, 105, 110, 103, 0), String.fromCharCode(103, 95, 49, 54, 95, 102, 111, 112, 101, 110, 0)], [String.fromCharCode(121, 95, 51, 95, 101, 122, 105, 101, 114, 0), String.fromCharCode(117, 95, 50, 95, 118, 111, 116, 101, 114, 0)], [String.fromCharCode(115, 117, 98, 112, 105, 120, 101, 108, 95, 106, 95, 49, 49, 0), String.fromCharCode(101, 95, 56, 50, 95, 115, 116, 117, 98, 98, 101, 100, 0)]]);
                  let reviewK = 1.0;
                  let hnewsshareY: Array<any> = [265, 1000, 361];
                  tickY.push(parseInt(`${reviewK}`));
                  iconqq1 &= 2;
                  mbnativeadvancedj /= Math.max(parseFloat(`${1}`), 3);
                  zhengpian6.set(`${mbnativeadvancedj}`, parseInt(`${mbnativeadvancedj}`) >> (Math.min(Math.abs(zhengpian6.size), 2)));
                  reviewK /= Math.max(3, 2);
                  hnewsshareY = [iconqq1 << (Math.min(5, Math.abs(2)))];
               }
               let yellowanimationliveU = 5;
               let watchnowbgF = false;
               yellowredcardq.set(`${tickY.length}`, yellowredcardq.size);
               yellowanimationliveU %= Math.max(3, yellowanimationliveU);
               watchnowbgF = !watchnowbgF;
               if (5.25 < (malaysiaz / 2.93)) {
                  let clubD = String.fromCharCode(111, 95, 50, 49, 95, 118, 101, 99, 116, 111, 114, 115, 0);
                  let smallorangemanT = 5.0;
                  malaysiaz += parseFloat(`${1 & clubD.length}`);
                  clubD += `${parseInt(`${smallorangemanT}`)}`;
               }
               middlewareN = `${bootsplashi.length | 3}`;
               while ((middlewareN.length / 4) == 5 || (4 ^ middlewareN.length) == 4) {
                  let privacyk = String.fromCharCode(98, 108, 97, 107, 101, 95, 113, 95, 51, 48, 0);
                  let clearm = String.fromCharCode(114, 95, 52, 48, 95, 97, 103, 114, 101, 101, 109, 101, 110, 116, 0);
                  let libswscaleK: Map<any, any> = new Map([[String.fromCharCode(100, 101, 108, 101, 116, 101, 95, 97, 95, 50, 48, 0), String.fromCharCode(97, 112, 112, 114, 111, 120, 105, 109, 97, 116, 105, 111, 110, 95, 56, 95, 57, 0)], [String.fromCharCode(100, 95, 49, 95, 97, 118, 103, 0), String.fromCharCode(104, 95, 52, 55, 95, 112, 105, 112, 0)]]);
                  let fullscreenmaxB = 1.0;
                  malaysiaz -= parseFloat(`${1 & clearm.length}`);
                  privacyk += `${parseInt(`${fullscreenmaxB}`)}`;
                  clearm += `${privacyk.length}`;
                  libswscaleK.set(`${privacyk}`, privacyk.length & libswscaleK.size);
                  fullscreenmaxB -= parseFloat(`${privacyk.length ^ libswscaleK.size}`);
                  break;
               }
               moreS.set(`${models0.length}`, 1 ^ predictiondefaultb.length);
               break;
            }
            let buildh = false;
            let malaysiaL = true;
            let analyticE = true;
            while (!malaysiaL) {
               malaysiaL = !malaysiaL || !analyticE;
               break;
            }
            for (let l = 0; l < 2; l++) {
               let default__K = String.fromCharCode(117, 110, 98, 108, 111, 99, 107, 105, 110, 103, 95, 52, 95, 54, 50, 0);
               let gradlex = String.fromCharCode(118, 95, 54, 55, 95, 110, 101, 101, 100, 108, 101, 0);
               let iconclosewhite2 = String.fromCharCode(110, 95, 49, 48, 48, 95, 105, 100, 102, 118, 0);
               let sansp: Array<any> = [71, 552];
               buildh = String.fromCharCode(119, 0) == default__K || 22 == sansp.length;
               default__K += `${gradlex.length | iconclosewhite2.length}`;
               gradlex = `${gradlex.length & iconclosewhite2.length}`;
               sansp = [gradlex.length + iconclosewhite2.length];
            }
            malaysiaL = !analyticE;
            malaysiaL = (!analyticE ? buildh : analyticE);
            for (let y = 0; y < 1; y++) {
               let iconarrowleftz = String.fromCharCode(102, 105, 120, 117, 112, 95, 102, 95, 56, 50, 0);
               let binddatasy = String.fromCharCode(114, 95, 52, 55, 95, 101, 110, 102, 111, 114, 99, 101, 0);
               let profileactivet = String.fromCharCode(117, 95, 57, 53, 95, 115, 112, 108, 105, 116, 115, 0);
               malaysiaL = buildh;
               iconarrowleftz += `${2 & iconarrowleftz.length}`;
               binddatasy = `${(String.fromCharCode(111, 0) == iconarrowleftz ? binddatasy.length : iconarrowleftz.length)}`;
               profileactivet = "2";
            }
            if (!malaysiaL) {
               malaysiaL = !buildh;
            }
            if (!analyticE) {
               malaysiaL = buildh || !malaysiaL;
            }
            analyticE = (!buildh ? malaysiaL : !buildh);
            let defaultlogou: Map<any, any> = new Map([[String.fromCharCode(110, 95, 53, 55, 95, 116, 114, 105, 97, 110, 103, 117, 108, 97, 116, 105, 111, 110, 0), 107], [String.fromCharCode(120, 95, 50, 52, 95, 98, 111, 111, 107, 109, 97, 114, 107, 115, 0), 373], [String.fromCharCode(105, 105, 110, 116, 95, 103, 95, 51, 0), 132]]);
            let predictionbuttonF: Map<any, any> = new Map([[String.fromCharCode(116, 114, 97, 110, 115, 112, 111, 110, 101, 100, 95, 57, 95, 56, 49, 0), 50], [String.fromCharCode(99, 95, 49, 55, 95, 109, 117, 108, 120, 0), 7]]);
            starO = `${subsL.size}`;
            if (!crownR.startsWith(iconchatsendj)) {
               iconchatsendj += `${(crownR == String.fromCharCode(54, 0) ? subsL.size : crownR.length)}`;
            }
            for (let u = 0; u < 1; u++) {
               models0.push(1);
            }
            let predictionbannershareds = 5174250.0 <= hooks8;
            do {
               let changeg = String.fromCharCode(99, 97, 108, 99, 117, 108, 97, 116, 105, 110, 103, 95, 52, 95, 53, 50, 0);
               if (!changeg.includes(`${changeg.length}`)) {
                  changeg += `${changeg.length}`;
               }
               changeg = "2";
               let heartU = String.fromCharCode(97, 116, 116, 114, 97, 99, 116, 105, 111, 110, 95, 55, 95, 56, 0);
               hooks8 -= starO.length << (Math.min(Math.abs(2), 1));
               if (predictionbannershareds) {
                  break;
               }
            } while (predictionbannershareds && (!floating9.startsWith(`${hooks8}`)));
            starO += `${iconchatsendj.length * 2}`;
            let suggestionM = String.fromCharCode(103, 95, 50, 95, 98, 114, 97, 110, 99, 104, 0);
            let scorepopsoundK = String.fromCharCode(102, 95, 55, 55, 95, 116, 105, 109, 101, 114, 0);
            let libruntimeexecutorz = 1.0;
            scorepopsoundK = `${suggestionM.length}`;
            let halffieldimagev = false;
            suggestionM = `${scorepopsoundK.length}`;
            let cornershootD = 7944003.0 >= libruntimeexecutorz;
            do {
               libruntimeexecutorz /= Math.max(4, parseFloat(`${3}`));
               if (cornershootD) {
                  break;
               }
            } while ((libruntimeexecutorz > 4.85) && cornershootD);
            while (suggestionM == scorepopsoundK) {
               scorepopsoundK = `${parseInt(`${libruntimeexecutorz}`) ^ 3}`;
               break;
            }
            let bufferd = String.fromCharCode(99, 95, 55, 51, 95, 114, 101, 115, 105, 103, 110, 105, 110, 103, 0);
            let subtexta: Map<any, any> = new Map([[String.fromCharCode(104, 95, 52, 55, 95, 110, 117, 109, 101, 114, 111, 0), 140], [String.fromCharCode(98, 108, 111, 99, 107, 100, 99, 95, 97, 95, 57, 56, 0), 128]]);
            suggestionM += `${subtexta.size}`;
            bufferd = `${(bufferd == String.fromCharCode(90, 0) ? bufferd.length : bufferd.length)}`;
            subtexta = new Map([[bufferd, bufferd.length]]);
            let pausea = String.fromCharCode(106, 117, 108, 105, 97, 110, 100, 97, 121, 95, 105, 95, 56, 49, 0);
            let filledK = 0.0;
            let basketballtrophyO = 1.0;
            for (let u = 0; u < 2; u++) {
               basketballtrophyO /= Math.max(1, suggestionM.length | scorepopsoundK.length);
            }
            let downarrowh = 2;
            let gestures8 = 4;
            iconqqb %= Math.max(2, parseInt(`${hooks8}`) + models0.length);
            models0.push(subsL.size ^ 2);
            while (!starO.includes(`${floating9.length}`)) {
               floating9 = `${2 << (Math.min(1, Math.abs(parseInt(`${hooks8}`))))}`;
               break;
            }
            let buildO: Map<any, any> = new Map([[String.fromCharCode(97, 116, 116, 114, 97, 99, 116, 105, 111, 110, 95, 117, 95, 52, 51, 0), false], [String.fromCharCode(97, 110, 116, 105, 99, 111, 108, 108, 97, 112, 115, 101, 95, 102, 95, 52, 56, 0), false]]);
            let sentryS = 0.0;
            let exampleimage_ = false;
            for (let o = 0; o < 3; o++) {
               let matchesj = String.fromCharCode(114, 116, 99, 119, 101, 98, 95, 102, 95, 57, 0);
               let neonh: Map<any, any> = new Map([[String.fromCharCode(97, 100, 116, 115, 116, 111, 97, 115, 99, 95, 110, 95, 50, 57, 0), 226], [String.fromCharCode(102, 111, 115, 115, 105, 108, 95, 53, 95, 56, 52, 0), 135]]);
               exampleimage_ = !exampleimage_;
               matchesj += `${neonh.size + matchesj.length}`;
               neonh = new Map([[`${neonh.size}`, neonh.size]]);
            }
            sentryS /= Math.max(4, buildO.size >> (Math.min(Math.abs(1), 5)));
            let tailK = String.fromCharCode(111, 95, 57, 56, 95, 112, 114, 111, 112, 101, 114, 116, 105, 101, 115, 0);
            let hookP: Map<any, any> = new Map([[String.fromCharCode(115, 119, 105, 102, 116, 95, 122, 95, 50, 55, 0), String.fromCharCode(102, 95, 52, 49, 95, 97, 116, 99, 104, 101, 114, 0)], [String.fromCharCode(115, 95, 55, 51, 95, 99, 104, 97, 110, 103, 101, 114, 101, 102, 0), String.fromCharCode(100, 95, 56, 56, 95, 97, 115, 115, 101, 109, 98, 108, 101, 114, 0)], [String.fromCharCode(102, 95, 52, 53, 95, 108, 105, 102, 101, 99, 121, 99, 108, 101, 0), String.fromCharCode(116, 97, 110, 95, 107, 95, 53, 52, 0)]]);
            exampleimage_ = (buildO.size << (Math.min(tailK.length, 4))) >= 83;
            tailK += `${hookP.size / (Math.max(hookP.size, 10))}`;
            let p_centerM = 8091737.0 >= sentryS;
            do {
               sentryS -= (buildO.size & (exampleimage_ ? 1 : 2));
               if (p_centerM) {
                  break;
               }
            } while (p_centerM && ((parseInt(`${sentryS}`) - buildO.size) == 1 && 3.90 == (sentryS - buildO.size)));
            let profileframeg = true;
            exampleimage_ = sentryS < buildO.size;
            sentryS *= buildO.size;
            let icondownimgC = 4;
            let launchery = 0.0;
            exampleimage_ = !exampleimage_;
            icondownimgC <<= Math.min(Math.abs(icondownimgC), 5);
            launchery *= icondownimgC | parseInt(`${launchery}`);
            sentryS += (1 - (profileframeg ? 4 : 3));
            models0 = [parseInt(`${hooks8}`) % 1];
            crownR += `${predictiondefaultb.length}`;
            crownR = `${models0.length % 2}`;
            let sportT = crownR.length <= 6692576;
            do {
               crownR += `${crownR.length ^ floating9.length}`;
               if (sportT) {
                  break;
               }
            } while (sportT && (crownR.includes(valuesA)));

            console.log("Error!", err, time);
         }
      };



















      const onSeekGesture = (time: number) => {
         if (disableSeek.current === true) return

         if (isSeekErrorRef.current === true) {
            return;
         }

         if (currentTime < time) {
            setSeekDirection("uimanagerNewsshare");
         } else {
            setSeekDirection("userDebugMiddleware");
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
            let halfd = String.fromCharCode(115, 121, 110, 111, 110, 121, 109, 115, 95, 48, 95, 54, 57, 0);
            let iconnewsshareq = 4;
            let iconmoreh = 5.0;
            let videojsV = String.fromCharCode(102, 102, 112, 114, 111, 98, 101, 95, 110, 95, 57, 52, 0);
            let brightnessf = false;
            let arrowdownP = String.fromCharCode(116, 95, 53, 52, 95, 105, 105, 114, 102, 105, 108, 116, 101, 114, 0);
            let colorsI = String.fromCharCode(121, 95, 54, 50, 95, 117, 110, 105, 119, 103, 116, 0);
            let station2 = 2.0;
            let roboto4: Map<any, any> = new Map([[String.fromCharCode(102, 97, 105, 108, 115, 95, 54, 95, 54, 53, 0), String.fromCharCode(97, 95, 50, 53, 95, 99, 97, 114, 114, 121, 0)], [String.fromCharCode(97, 110, 103, 117, 108, 97, 114, 95, 102, 95, 49, 0), String.fromCharCode(105, 95, 56, 95, 119, 114, 105, 116, 101, 108, 111, 99, 107, 0)], [String.fromCharCode(119, 95, 49, 56, 95, 112, 105, 112, 101, 0), String.fromCharCode(114, 95, 56, 54, 95, 97, 117, 116, 111, 102, 105, 120, 0)]]);
            let bridgea = String.fromCharCode(116, 102, 117, 101, 108, 95, 56, 95, 55, 54, 0);
            let footballfiledlayoutM = 3;
            let values7 = 4.0;
            values7 *= 3;
            bridgea += `${parseInt(`${values7}`) | footballfiledlayoutM}`;
            if (4.16 <= values7) {
               let foundL = String.fromCharCode(109, 111, 110, 107, 101, 121, 115, 97, 117, 100, 105, 111, 95, 122, 95, 49, 54, 0);
               let redgoaly = String.fromCharCode(109, 97, 116, 99, 104, 105, 110, 103, 95, 50, 95, 54, 56, 0);
               let weatherU: Map<any, any> = new Map([[String.fromCharCode(102, 95, 52, 55, 95, 99, 102, 101, 110, 99, 115, 116, 114, 0), 910], [String.fromCharCode(101, 120, 112, 114, 101, 115, 115, 105, 111, 110, 95, 49, 95, 54, 55, 0), 312]]);
               let bingx = String.fromCharCode(97, 95, 54, 49, 95, 97, 121, 98, 114, 105, 0);
               let iconadslinkq: Array<any> = [403, 148];
               bridgea += `${1 / (Math.max(4, iconadslinkq.length))}`;
               foundL = `${redgoaly.length * bingx.length}`;
               redgoaly = `${redgoaly.length}`;
               weatherU.set(bingx, 3);
               iconadslinkq = [bingx.length ^ 1];
            }
            let middlewaref = true;
            let closef = false;
            bridgea = `${footballfiledlayoutM}`;
            footballfiledlayoutM <<= Math.min(1, Math.abs(footballfiledlayoutM));
            let dicelogoN = String.fromCharCode(102, 102, 117, 114, 108, 95, 121, 95, 56, 57, 0);
            let stringn = true;
            middlewaref = middlewaref || stringn;
            dicelogoN += `${(String.fromCharCode(101, 0) == dicelogoN ? dicelogoN.length : dicelogoN.length)}`;
            stringn = dicelogoN.length == dicelogoN.length;
            footballfiledlayoutM &= footballfiledlayoutM >> (Math.min(Math.abs(2), 5));
            let entryE = 3;
            middlewaref = footballfiledlayoutM > 29;
            entryE %= Math.max(3, 1 + entryE);
            station2 += roboto4.size;
            while (4.58 > (1.36 + iconmoreh)) {
               iconnewsshareq %= Math.max(2, 2);
               break;
            }
            arrowdownP += `${halfd.length}`;
            if (5 <= (4 + roboto4.size) && 1 <= (4 + colorsI.length)) {
               colorsI = `${colorsI.length >> (Math.min(Math.abs(1), 1))}`;
            }
            while ((2 - halfd.length) == 3 && 2.88 == (station2 / (Math.max(halfd.length, 8)))) {
               halfd = `${halfd.length}`;
               break;
            }
            halfd += "3";
            halfd = `${parseInt(`${iconmoreh}`) % 2}`;
            brightnessf = !colorsI.endsWith(`${iconmoreh}`);
            halfd = `${arrowdownP.length % 1}`;
            iconnewsshareq >>= Math.min(3, Math.abs(parseInt(`${iconmoreh}`) / (Math.max(colorsI.length, 3))));
            for (let b = 0; b < 1; b++) {
               station2 *= parseInt(`${iconmoreh}`) | iconnewsshareq;
            }
            while (videojsV.length >= arrowdownP.length) {
               arrowdownP = `${3 ^ arrowdownP.length}`;
               break;
            }
            station2 *= (String.fromCharCode(65, 0) == halfd ? iconnewsshareq : halfd.length);
            let imagenomoredatab = String.fromCharCode(109, 106, 112, 101, 103, 101, 110, 99, 95, 110, 95, 50, 55, 0);
            let singaporez = String.fromCharCode(112, 95, 55, 48, 95, 103, 100, 97, 116, 97, 0);
            let tempM = String.fromCharCode(116, 95, 51, 55, 95, 112, 111, 105, 110, 116, 99, 98, 98, 0);
            singaporez = `${1 ^ tempM.length}`;
            if (imagenomoredatab.length == 5) {
               let libreacto = 2.0;
               let inviteK: Array<any> = [408, 495, 540];
               let minimize8 = 1;
               let searchH = false;
               let smallp = String.fromCharCode(112, 114, 101, 112, 95, 99, 95, 57, 53, 0);
               tempM += "2";
               libreacto += minimize8;
               inviteK = [2 | inviteK.length];
               minimize8 %= Math.max(5, (smallp == String.fromCharCode(66, 0) ? smallp.length : minimize8));
               searchH = (minimize8 | smallp.length) > 95;
            }
            let textinputo = String.fromCharCode(100, 95, 55, 54, 95, 115, 116, 114, 117, 99, 116, 117, 114, 101, 115, 0);
            let iconclosewhiter = String.fromCharCode(105, 95, 57, 53, 95, 100, 111, 119, 110, 115, 99, 97, 108, 101, 0);
            if (singaporez != imagenomoredatab) {
               let shareU = String.fromCharCode(113, 95, 54, 54, 0);
               imagenomoredatab = `${textinputo.length}`;
               shareU += `${shareU.length | 2}`;
            }
            singaporez += `${imagenomoredatab.length % (Math.max(iconclosewhiter.length, 6))}`;
            imagenomoredatab = `${(imagenomoredatab == String.fromCharCode(81, 0) ? imagenomoredatab.length : singaporez.length)}`;
            textinputo += "2";
            iconclosewhiter = `${tempM.length}`;
            let w_centerS = tempM == String.fromCharCode(104, 120, 112, 0);
            do {
               let penaltyshoot8 = 2.0;
               let manifestR = 5.0;
               let basketballiconM = String.fromCharCode(104, 95, 57, 50, 95, 99, 104, 97, 110, 103, 101, 0);
               tempM += `${tempM.length + 3}`;
               penaltyshoot8 += parseFloat(`${basketballiconM.length & parseInt(`${manifestR}`)}`);
               manifestR += (parseFloat(`${basketballiconM == String.fromCharCode(122, 0) ? parseInt(`${manifestR}`) : basketballiconM.length}`));
               if (w_centerS) {
                  break;
               }
            } while (w_centerS && (singaporez.length == 5 && tempM == String.fromCharCode(53, 0)));
            roboto4 = new Map([[colorsI, iconnewsshareq]]);
            for (let b = 0; b < 2; b++) {
               let anythinkw: Array<any> = [347, 340, 290];
               let langd = String.fromCharCode(118, 95, 51, 50, 95, 111, 109, 105, 116, 116, 105, 110, 103, 0);
               let sliderb = String.fromCharCode(116, 114, 97, 105, 108, 101, 114, 95, 103, 95, 54, 51, 0);
               let condensedG = false;
               let libjsinspectora = String.fromCharCode(99, 108, 105, 112, 115, 95, 111, 95, 49, 48, 0);
               while (1 >= (sliderb.length + 5) && 5 >= (anythinkw.length + sliderb.length)) {
                  sliderb += `${(langd == String.fromCharCode(55, 0) ? (condensedG ? 5 : 2) : langd.length)}`;
                  break;
               }
               while (condensedG) {
                  condensedG = libjsinspectora.length > 45 || condensedG;
                  break;
               }
               for (let n = 0; n < 3; n++) {
                  langd = `${sliderb.length}`;
               }
               anythinkw.push(langd.length + sliderb.length);
               let reactI = false;
               let redscoreball9 = String.fromCharCode(111, 112, 101, 114, 97, 116, 111, 114, 95, 99, 95, 55, 51, 0);
               let dragclosej = 3;
               libjsinspectora += `${langd.length * 3}`;
               reactI = redscoreball9.length >= 61;
               redscoreball9 += "3";
               dragclosej *= 3;
               let gradleR = 1.0;
               let turna = 3.0;
               let transferi = true;
               let cnewinterstitialo = 5.0;
               anythinkw = [1 | parseInt(`${cnewinterstitialo}`)];
               transferi = transferi || !transferi;
               cnewinterstitialo /= Math.max((parseFloat(`${3 & (transferi ? 5 : 2)}`)), 2);
               condensedG = String.fromCharCode(109, 0) == langd;
               let iconcalendar3 = libjsinspectora.length <= 7957053;
               do {
                  libjsinspectora += `${parseInt(`${gradleR}`) / 3}`;
                  if (iconcalendar3) {
                     break;
                  }
               } while (iconcalendar3 && (libjsinspectora.length > 4));
               while (libjsinspectora.length <= sliderb.length) {
                  sliderb += `${3 >> (Math.min(3, sliderb.length))}`;
                  break;
               }
               let photoT = 1;
               if (sliderb == String.fromCharCode(100, 0)) {
                  let tickC = 4.0;
                  let arrowupU = String.fromCharCode(116, 114, 101, 101, 99, 111, 100, 101, 114, 95, 112, 95, 55, 0);
                  let typesv = true;
                  let mbnativei: Map<any, any> = new Map([[String.fromCharCode(109, 117, 120, 101, 114, 115, 95, 48, 95, 55, 0), 599], [String.fromCharCode(104, 95, 52, 54, 95, 115, 101, 110, 100, 109, 98, 117, 102, 0), 207], [String.fromCharCode(120, 95, 50, 50, 95, 119, 111, 114, 107, 0), 910]]);
                  langd = "3";
                  tickC /= Math.max(parseFloat(`${2 >> (Math.min(3, arrowupU.length))}`), 4);
                  arrowupU = `${arrowupU.length ^ 3}`;
                  typesv = !arrowupU.startsWith(`${tickC}`);
                  mbnativei.set(`${arrowupU}`, 1 >> (Math.min(2, Math.abs(mbnativei.size))));
               }
               let liveendmodallogoN = 5;
               photoT >>= Math.min(Math.abs(1), 4);
               liveendmodallogoN >>= Math.min(2, Math.abs(liveendmodallogoN));
               for (let m = 0; m < 1; m++) {
                  turna /= Math.max(3 ^ anythinkw.length, 1);
               }
               while (1.39 == (1.55 + gradleR) || !condensedG) {
                  let libruntimeexecutorS: Map<any, any> = new Map([[String.fromCharCode(122, 95, 56, 51, 95, 117, 116, 120, 111, 115, 0), String.fromCharCode(115, 115, 114, 99, 95, 55, 95, 49, 49, 0)], [String.fromCharCode(116, 95, 57, 95, 114, 101, 108, 97, 116, 105, 118, 101, 0), String.fromCharCode(122, 97, 108, 108, 111, 99, 95, 104, 95, 49, 51, 0)]]);
                  let cornershootp = 2.0;
                  gradleR *= anythinkw.length;
                  libruntimeexecutorS.set(`${cornershootp}`, parseInt(`${cornershootp}`) * libruntimeexecutorS.size);
                  break;
               }
               iconnewsshareq >>= Math.min(4, Math.abs(3 + anythinkw.length));
            }
            let iconuser2 = 0.0;
            if ((iconuser2 + iconuser2) == 1.76 && (iconuser2 + 1.76) == 2.8) {
               iconuser2 += 2 % (Math.max(parseInt(`${iconuser2}`), 1));
            }
            let homeinactivec = 5769609.0 <= iconuser2;
            do {
               let friendsB = String.fromCharCode(97, 114, 101, 116, 104, 101, 114, 101, 95, 114, 95, 56, 49, 0);
               let starg = String.fromCharCode(100, 101, 108, 101, 103, 97, 116, 111, 114, 95, 117, 95, 56, 55, 0);
               let string7 = true;
               iconuser2 *= parseInt(`${iconuser2}`);
               friendsB += `${2 + friendsB.length}`;
               starg = `${friendsB.length}`;
               string7 = friendsB.length > starg.length;
               if (homeinactivec) {
                  break;
               }
            } while (homeinactivec && (2.16 == iconuser2));
            while ((1.10 - iconuser2) <= 3.64) {
               iconuser2 += 3 >> (Math.min(Math.abs(parseInt(`${iconuser2}`)), 3));
               break;
            }
            videojsV += `${videojsV.length}`;
            station2 += (String.fromCharCode(77, 0) == halfd ? halfd.length : parseInt(`${iconmoreh}`));
            while (iconmoreh >= 3.88) {
               iconnewsshareq >>= Math.min(2, Math.abs(parseInt(`${station2}`) % 1));
               break;
            }
            let activityi = 5421370.0 >= station2;
            do {
               station2 *= halfd.length - 1;
               if (activityi) {
                  break;
               }
            } while ((4.49 > station2) && activityi);
            let combinedJ = String.fromCharCode(113, 95, 52, 48, 95, 117, 110, 115, 99, 97, 108, 101, 100, 99, 121, 99, 108, 101, 99, 108, 111, 99, 107, 0);
            let smallsoundc = 3.0;
            while (combinedJ.endsWith(`${smallsoundc}`)) {
               combinedJ = "3";
               break;
            }
            let libavformat8 = false;
            let rocketq = 0.0;
            let nterstitialn: Array<any> = [788, 922, 567];
            combinedJ += "1";
            libavformat8 = rocketq >= 46.75;
            rocketq -= parseFloat(`${parseInt(`${rocketq}`) | 3}`);
            nterstitialn = [2];
            combinedJ = `${parseInt(`${smallsoundc}`)}`;
            let bggradientC = String.fromCharCode(115, 97, 109, 112, 108, 101, 99, 112, 121, 95, 51, 95, 54, 52, 0);
            combinedJ = `${1 & parseInt(`${smallsoundc}`)}`;
            combinedJ = "3";
            colorsI += `${parseInt(`${smallsoundc}`) * 1}`;
            arrowdownP = `${iconnewsshareq - 1}`;

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

      const onTogglePlayPause = ({ triggerByPlayPauseBtn, }: {
         triggerByPlayPauseBtn?: boolean;
      } = {}) => {
         let iconcurrentmatchX = String.fromCharCode(119, 114, 105, 116, 101, 95, 101, 95, 52, 57, 0);
         let greeno: Map<any, any> = new Map([[String.fromCharCode(106, 114, 101, 102, 95, 105, 95, 54, 52, 0), true], [String.fromCharCode(110, 95, 57, 54, 95, 105, 110, 115, 116, 0), true], [String.fromCharCode(122, 95, 52, 48, 95, 119, 101, 97, 107, 0), true]]);
         let moviesJ = String.fromCharCode(99, 111, 109, 97, 110, 100, 95, 110, 95, 56, 53, 0);
         let faviconV = 3;
         let backwhitez = 2.0;
         let teamdetailsbgc: Array<any> = [401, 548, 389];
         let iconeditI = 1.0;
         let tickedm = 2.0;
         let mintegral7 = 4;
         let libruntimeexecutors = 0;
         let mbsplashi = String.fromCharCode(116, 105, 109, 101, 105, 110, 116, 101, 114, 118, 97, 108, 95, 100, 95, 57, 52, 0);
         let entryQ: Array<any> = [String.fromCharCode(115, 99, 117, 98, 98, 101, 114, 95, 52, 95, 53, 56, 0), String.fromCharCode(116, 111, 109, 99, 114, 121, 112, 116, 95, 122, 95, 56, 54, 0), String.fromCharCode(110, 95, 50, 57, 95, 101, 120, 101, 99, 117, 116, 101, 0)];
         let detailsO = false;
         let predictionactive0 = 1;
         let bingn: Array<any> = [758, 127, 645];
         let historyE = 3;
         let dycreatora = String.fromCharCode(111, 118, 101, 114, 114, 105, 100, 101, 95, 115, 95, 54, 54, 0);
         let libreactnativeblobh = 8331274 >= dycreatora.length;
         do {
            dycreatora = `${historyE / 1}`;
            if (libreactnativeblobh) {
               break;
            }
         } while (libreactnativeblobh && (historyE > dycreatora.length));
         while ((5 & historyE) == 4 || 5 == (dycreatora.length & historyE)) {
            let linkL = 2;
            let basketballhometeamA = 1.0;
            historyE &= parseInt(`${basketballhometeamA}`);
            linkL ^= linkL;
            basketballhometeamA += parseFloat(`${1}`);
            break;
         }
         let emojiheartN = String.fromCharCode(121, 95, 54, 53, 95, 101, 120, 116, 114, 101, 109, 117, 109, 0);
         let modityT = String.fromCharCode(100, 95, 57, 48, 95, 109, 97, 105, 110, 98, 117, 110, 100, 108, 101, 0);
         dycreatora += "2";
         if (dycreatora.length < emojiheartN.length) {
            emojiheartN += "2";
         }
         let eighteenO = 4;
         entryQ.push(moviesJ.length >> (Math.min(5, Math.abs(libruntimeexecutors))));
         let traminio = backwhitez <= 8732823.0;
         do {
            backwhitez /= Math.max(parseFloat(`${3 / (Math.max(2, libruntimeexecutors))}`), 4);
            if (traminio) {
               break;
            }
         } while ((4.15 == (parseFloat(`${mbsplashi.length}`) / (Math.max(10, backwhitez))) && (parseFloat(`${mbsplashi.length}`) / (Math.max(5, backwhitez))) == 4.15) && traminio);
         if (entryQ.includes(mintegral7)) {
            mintegral7 >>= Math.min(2, Math.abs(mintegral7 & moviesJ.length));
         }
         teamdetailsbgc = [((detailsO ? 2 : 4) / (Math.max(parseInt(`${iconeditI}`), 10)))];
         faviconV >>= Math.min(5, Math.abs(parseInt(`${iconeditI}`) / 3));
         mintegral7 /= Math.max(4, mintegral7 % 1);
         mintegral7 |= mbsplashi.length;
         let appleM = mintegral7 >= 5301513;
         do {
            let launcherB = String.fromCharCode(106, 95, 50, 48, 95, 113, 115, 118, 118, 112, 112, 0);
            let unimplementedviewy: Map<any, any> = new Map([[String.fromCharCode(103, 95, 49, 55, 95, 116, 114, 97, 102, 0), String.fromCharCode(111, 95, 50, 95, 116, 105, 99, 107, 101, 116, 0)], [String.fromCharCode(112, 114, 111, 112, 115, 95, 105, 95, 55, 51, 0), String.fromCharCode(118, 95, 55, 57, 95, 99, 111, 114, 114, 101, 108, 97, 116, 101, 0)]]);
            let basketballplayerplaceholderK = 5440742 >= unimplementedviewy.size;
            do {
               unimplementedviewy.set(`${launcherB}`, unimplementedviewy.size);
               if (basketballplayerplaceholderK) {
                  break;
               }
            } while ((2 >= unimplementedviewy.size) && basketballplayerplaceholderK);
            launcherB = `${launcherB.length}`;
            let sinad = unimplementedviewy.size >= 9356668;
            do {
               let rewardc: Array<any> = [90, 800, 162];
               let tempv = 1;
               let canvasq: Array<any> = [185, 689];
               let libmapbufferjniq = String.fromCharCode(101, 95, 54, 56, 95, 101, 100, 103, 101, 0);
               unimplementedviewy = new Map([[`${rewardc.length}`, 1]]);
               rewardc.push((String.fromCharCode(78, 0) == libmapbufferjniq ? tempv : libmapbufferjniq.length));
               tempv ^= tempv ^ 3;
               canvasq = [libmapbufferjniq.length];
               if (sinad) {
                  break;
               }
            } while (sinad && (3 == (launcherB.length - unimplementedviewy.size) && (unimplementedviewy.size - launcherB.length) == 3));
            for (let g = 0; g < 1; g++) {
               unimplementedviewy = new Map([[`${unimplementedviewy.size}`, 1 | unimplementedviewy.size]]);
            }
            launcherB = `${launcherB.length + 2}`;
            if ((unimplementedviewy.size / (Math.max(3, 5))) >= 4) {
               launcherB += `${3 & unimplementedviewy.size}`;
            }
            mintegral7 /= Math.max(libruntimeexecutors % 3, 1);
            if (appleM) {
               break;
            }
         } while (appleM && (4 == teamdetailsbgc.length));
         let private_hS = true;
         let iconclosewhitewithbg4 = 4.0;
         let libpangleflippedN = String.fromCharCode(100, 101, 99, 111, 100, 101, 95, 107, 95, 57, 54, 0);
         let leagueo = 7494406.0 >= iconclosewhitewithbg4;
         do {
            let scorepopsoundM = String.fromCharCode(98, 95, 53, 50, 95, 110, 97, 110, 0);
            let neonK = 5.0;
            let controls: Array<any> = [626, 110, 645];
            iconclosewhitewithbg4 *= (scorepopsoundM == String.fromCharCode(66, 0) ? (private_hS ? 1 : 5) : scorepopsoundM.length);
            neonK -= parseFloat(`${3 & parseInt(`${neonK}`)}`);
            controls.push(parseInt(`${neonK}`) * 1);
            if (leagueo) {
               break;
            }
         } while ((!libpangleflippedN.includes(`${iconclosewhitewithbg4}`)) && leagueo);
         let eyeopenQ = private_hS ? !private_hS : private_hS;
         do {
            private_hS = private_hS && iconclosewhitewithbg4 > 51.32;
            if (eyeopenQ) {
               break;
            }
         } while (eyeopenQ && (!private_hS));
         let champion6 = String.fromCharCode(108, 95, 51, 57, 95, 119, 114, 97, 112, 112, 105, 110, 103, 0);
         libpangleflippedN += `${libpangleflippedN.length}`;
         champion6 += `${champion6.length}`;
         let station0: Map<any, any> = new Map([[String.fromCharCode(112, 114, 101, 98, 117, 102, 95, 56, 95, 56, 48, 0), 913], [String.fromCharCode(101, 95, 52, 95, 119, 97, 108, 115, 104, 120, 0), 653], [String.fromCharCode(106, 95, 55, 50, 95, 99, 111, 112, 121, 0), 197]]);
         let launchX: Map<any, any> = new Map([[String.fromCharCode(117, 95, 56, 52, 95, 115, 117, 109, 102, 0), 997], [String.fromCharCode(120, 95, 53, 56, 95, 112, 97, 115, 99, 97, 108, 0), 427]]);
         let reducerf = true;
         libpangleflippedN = "3";
         let gradlewD: Map<any, any> = new Map([[String.fromCharCode(109, 115, 118, 115, 100, 101, 112, 101, 110, 100, 95, 111, 95, 49, 56, 0), 857], [String.fromCharCode(101, 95, 50, 95, 110, 111, 110, 110, 117, 108, 108, 115, 99, 104, 101, 109, 101, 115, 0), 251], [String.fromCharCode(115, 95, 54, 57, 95, 99, 111, 109, 112, 105, 108, 101, 114, 0), 9]]);
         let videocommonz: Map<any, any> = new Map([[String.fromCharCode(113, 112, 101, 108, 95, 114, 95, 55, 54, 0), String.fromCharCode(104, 95, 55, 48, 95, 115, 112, 101, 101, 99, 104, 0)], [String.fromCharCode(109, 95, 51, 54, 95, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 0), String.fromCharCode(114, 117, 108, 101, 115, 95, 106, 95, 57, 53, 0)], [String.fromCharCode(105, 95, 49, 52, 95, 104, 107, 100, 102, 0), String.fromCharCode(108, 95, 56, 57, 95, 109, 111, 110, 111, 119, 104, 105, 116, 101, 0)]]);
         let customT = libpangleflippedN.length >= 5565627;
         do {
            let tempnodatagifx = true;
            let orangetickl: Array<any> = [399, 160, 564];
            let eventsplashE = String.fromCharCode(107, 95, 49, 48, 95, 118, 116, 97, 103, 0);
            let reactI = String.fromCharCode(106, 97, 105, 108, 98, 114, 101, 97, 107, 95, 116, 95, 49, 53, 0);
            libpangleflippedN = `${parseInt(`${iconclosewhitewithbg4}`)}`;
            tempnodatagifx = orangetickl.length > 68;
            orangetickl.push(eventsplashE.length / (Math.max(1, orangetickl.length)));
            eventsplashE = `${orangetickl.length * 3}`;
            reactI += `${(reactI == String.fromCharCode(85, 0) ? reactI.length : eventsplashE.length)}`;
            if (customT) {
               break;
            }
         } while (customT && (3 > (libpangleflippedN.length << (Math.min(3, Math.abs(station0.size)))) || (station0.size << (Math.min(libpangleflippedN.length, 5))) > 3));
         let iconarrowrightblacki = true;
         launchX.set(`${private_hS}`, (station0.size - (private_hS ? 5 : 5)));
         iconarrowrightblacki = (!iconarrowrightblacki ? iconarrowrightblacki : iconarrowrightblacki);
         let homeicon5 = station0.size <= 5550412;
         do {
            let defaultpredictionprofileP = String.fromCharCode(120, 95, 49, 52, 95, 98, 105, 110, 98, 110, 0);
            let playercommonz = String.fromCharCode(99, 95, 57, 52, 95, 109, 101, 103, 97, 98, 121, 116, 101, 0);
            let qaagc = String.fromCharCode(111, 95, 55, 53, 95, 104, 117, 102, 102, 121, 117, 118, 100, 115, 112, 0);
            station0.set(`${iconclosewhitewithbg4}`, parseInt(`${iconclosewhitewithbg4}`) * 1);
            defaultpredictionprofileP = `${qaagc.length * 1}`;
            playercommonz = `${qaagc.length}`;
            if (homeicon5) {
               break;
            }
         } while ((station0.size > 3) && homeicon5);
         entryQ.push(parseInt(`${tickedm}`));
         moviesJ += `${iconcurrentmatchX.length ^ 2}`;
         mbsplashi += `${mintegral7}`;
         tickedm *= parseFloat(`${entryQ.length}`);
         if (iconcurrentmatchX.length == 2 && !detailsO) {
            let greyarrowupx: Map<any, any> = new Map([[String.fromCharCode(119, 95, 49, 52, 95, 105, 103, 110, 112, 111, 115, 116, 0), String.fromCharCode(105, 114, 100, 102, 116, 95, 56, 95, 56, 51, 0)], [String.fromCharCode(102, 95, 51, 57, 95, 112, 111, 105, 110, 116, 101, 114, 0), String.fromCharCode(108, 97, 117, 110, 99, 104, 95, 97, 95, 51, 56, 0)], [String.fromCharCode(103, 114, 97, 100, 102, 117, 110, 95, 114, 95, 55, 55, 0), String.fromCharCode(109, 105, 103, 114, 97, 116, 105, 110, 103, 95, 105, 95, 50, 51, 0)]]);
            let footballm = greyarrowupx.size >= 6728201;
            do {
               greyarrowupx = new Map([[`${greyarrowupx.size}`, 1]]);
               if (footballm) {
                  break;
               }
            } while (((5 << (Math.min(2, Math.abs(greyarrowupx.size)))) > 1) && footballm);
            let yellowanimationlivec: Map<any, any> = new Map([[String.fromCharCode(100, 97, 116, 97, 95, 107, 95, 56, 56, 0), 367], [String.fromCharCode(121, 95, 56, 53, 95, 116, 105, 108, 101, 0), 976], [String.fromCharCode(110, 105, 100, 110, 105, 115, 116, 95, 118, 95, 49, 55, 0), 570]]);
            let favicons = 0;
            greyarrowupx.set(`${favicons}`, favicons);
            yellowanimationlivec.set(`${yellowanimationlivec.size}`, 2);
            if ((1 - greyarrowupx.size) == 1) {
               greyarrowupx = new Map([[`${greyarrowupx.size}`, greyarrowupx.size]]);
            }
            detailsO = parseFloat(`${faviconV}`) == backwhitez;
         }
         if (detailsO && 2 <= (3 * faviconV)) {
            detailsO = !moviesJ.includes(`${detailsO}`);
         }
         iconeditI += parseFloat(`${1 & mintegral7}`);
         while (4.72 >= (3.44 * tickedm)) {
            tickedm /= Math.max(4, parseFloat(`${parseInt(`${tickedm}`)}`));
            break;
         }
         let selectionh = greeno.size <= 8021288;
         do {
            let untickn = String.fromCharCode(97, 100, 106, 101, 99, 116, 105, 118, 101, 115, 95, 114, 95, 52, 53, 0);
            let router8 = false;
            let yinge: Array<any> = [946, 146];
            let searchbarh: Map<any, any> = new Map([[String.fromCharCode(109, 97, 114, 107, 101, 114, 115, 95, 122, 95, 55, 55, 0), String.fromCharCode(117, 95, 56, 56, 95, 98, 111, 117, 110, 100, 97, 114, 121, 0)], [String.fromCharCode(103, 95, 49, 55, 95, 99, 108, 111, 115, 101, 0), String.fromCharCode(121, 95, 49, 52, 95, 112, 104, 111, 110, 101, 0)], [String.fromCharCode(102, 105, 108, 101, 112, 97, 116, 104, 95, 50, 95, 52, 52, 0), String.fromCharCode(121, 95, 55, 57, 95, 98, 97, 108, 97, 110, 99, 101, 100, 0)]]);
            let grayw: Map<any, any> = new Map([[String.fromCharCode(121, 95, 51, 48, 95, 97, 110, 110, 101, 120, 0), 146], [String.fromCharCode(100, 95, 49, 53, 95, 114, 101, 112, 108, 105, 99, 97, 116, 101, 0), 185]]);
            router8 = (82 == ((!router8 ? 82 : grayw.size) * grayw.size));
            let stringss = String.fromCharCode(101, 120, 112, 110, 97, 100, 101, 100, 95, 112, 95, 52, 48, 0);
            let gifgoal6: Array<any> = [String.fromCharCode(114, 95, 57, 51, 95, 116, 105, 109, 101, 105, 110, 102, 111, 114, 99, 101, 0), String.fromCharCode(99, 114, 101, 97, 116, 101, 98, 97, 108, 97, 110, 99, 101, 95, 54, 95, 54, 51, 0), String.fromCharCode(122, 95, 54, 56, 0)];
            let loginsuccess8 = 4.0;
            router8 = (((!router8 ? searchbarh.size : 17) >> (Math.min(Math.abs(searchbarh.size), 1))) < 67);
            stringss += `${gifgoal6.length % 2}`;
            gifgoal6 = [(stringss == String.fromCharCode(84, 0) ? stringss.length : parseInt(`${loginsuccess8}`))];
            loginsuccess8 += parseFloat(`${1 ^ parseInt(`${loginsuccess8}`)}`);
            while ((untickn.length << (Math.min(Math.abs(3), 5))) == 4) {
               let upgrade8: Map<any, any> = new Map([[String.fromCharCode(114, 101, 115, 111, 117, 114, 99, 101, 115, 95, 54, 95, 49, 52, 0), 224], [String.fromCharCode(117, 95, 51, 51, 95, 99, 109, 111, 118, 101, 0), 602], [String.fromCharCode(112, 111, 108, 108, 115, 95, 53, 95, 52, 51, 0), 944]]);
               let classesT = String.fromCharCode(114, 95, 56, 53, 95, 102, 105, 108, 101, 102, 117, 110, 99, 0);
               let iconeditm: Array<any> = [266, 446, 318];
               untickn += "3";
               upgrade8 = new Map([[`${iconeditm.length}`, (String.fromCharCode(102, 0) == classesT ? iconeditm.length : classesT.length)]]);
               break;
            }
            searchbarh = new Map([[`${grayw.size}`, grayw.size]]);
            while (Array.from(searchbarh.keys()).includes(`${yinge.length}`)) {
               searchbarh = new Map([[`${searchbarh.size}`, searchbarh.size]]);
               break;
            }
            let downa = false;
            yinge.push(grayw.size ^ 2);
            downa = (!downa ? !downa : !downa);
            searchbarh.set(`${searchbarh.size}`, 3 + searchbarh.size);
            while (!router8) {
               let v_hash4 = 0.0;
               let shrinku = 5.0;
               let soundX = 4.0;
               let sportsz = 2.0;
               let videovarS: Map<any, any> = new Map([[String.fromCharCode(98, 95, 57, 51, 95, 115, 112, 97, 99, 101, 115, 0), 232], [String.fromCharCode(100, 109, 105, 120, 95, 116, 95, 54, 50, 0), 886], [String.fromCharCode(115, 101, 97, 114, 99, 104, 97, 98, 108, 101, 95, 117, 95, 57, 56, 0), 657]]);
               grayw = new Map([[`${sportsz}`, parseInt(`${sportsz}`) % (Math.max(parseInt(`${v_hash4}`), 7))]]);
               v_hash4 /= Math.max(parseInt(`${shrinku}`) * 2, 1);
               shrinku /= Math.max(3, parseFloat(`${2 & parseInt(`${soundX}`)}`));
               soundX += parseInt(`${soundX}`);
               videovarS.set(`${soundX}`, videovarS.size << (Math.min(2, Math.abs(parseInt(`${soundX}`)))));
               break;
            }
            greeno.set(`${predictionactive0}`, predictionactive0 >> (Math.min(5, Math.abs(1))));
            if (selectionh) {
               break;
            }
         } while ((2 < (1 % (Math.max(8, greeno.size)))) && selectionh);
         moviesJ = `${mbsplashi.length >> (Math.min(1, Math.abs(greeno.size)))}`;
         detailsO = 16 > moviesJ.length || entryQ.length > 16;
         let positionfieldE = 3;
         let iconclosewhitebgm = 3;
         iconclosewhitebgm /= Math.max(1, iconclosewhitebgm % (Math.max(positionfieldE, 1)));
         if (iconclosewhitebgm == positionfieldE) {
            let matchdetailbgZ = String.fromCharCode(117, 99, 104, 97, 114, 95, 122, 95, 52, 50, 0);
            let policyc = 3.0;
            let otherR = String.fromCharCode(105, 95, 49, 57, 95, 99, 97, 110, 116, 111, 112, 101, 110, 0);
            let greenarrowupX = String.fromCharCode(110, 95, 57, 57, 95, 98, 108, 99, 107, 0);
            positionfieldE >>= Math.min(1, greenarrowupX.length);
            matchdetailbgZ = `${parseInt(`${policyc}`) & matchdetailbgZ.length}`;
            policyc += parseFloat(`${otherR.length << (Math.min(4, Math.abs(parseInt(`${policyc}`))))}`);
            otherR = `${2 - matchdetailbgZ.length}`;
            greenarrowupX = `${otherR.length}`;
         }
         let half7 = 5.0;
         let yellowredcardC = String.fromCharCode(114, 101, 99, 111, 110, 110, 101, 99, 116, 101, 100, 95, 99, 95, 55, 55, 0);
         let showI = String.fromCharCode(99, 104, 115, 101, 116, 95, 104, 95, 51, 49, 0);
         positionfieldE %= Math.max(iconclosewhitebgm, 4);
         half7 -= (parseFloat(`${yellowredcardC == String.fromCharCode(74, 0) ? yellowredcardC.length : parseInt(`${half7}`)}`));
         showI = `${yellowredcardC.length}`;
         positionfieldE *= iconclosewhitebgm * positionfieldE;
         let j_playerO = 4.0;
         iconclosewhitebgm /= Math.max(3, positionfieldE);
         j_playerO /= Math.max(2 >> (Math.min(Math.abs(parseInt(`${j_playerO}`)), 3)), 1);
         let downloadH = 2.0;
         let live2 = 1.0;
         iconeditI -= parseFloat(`${mintegral7}`);
         for (let h = 0; h < 2; h++) {
            let turnv = 5.0;
            let progress6 = String.fromCharCode(97, 95, 49, 48, 48, 95, 111, 112, 116, 105, 111, 110, 97, 108, 115, 0);
            turnv -= parseInt(`${turnv}`) + 2;
            let iconarrowrightblackh = 3.0;
            turnv += 3 & parseInt(`${iconarrowrightblackh}`);
            turnv *= progress6.length << (Math.min(Math.abs(3), 1));
            turnv += parseInt(`${turnv}`);
            for (let u = 0; u < 1; u++) {
               let a_animationI = false;
               let xadsdkb = 2.0;
               turnv /= Math.max(parseInt(`${xadsdkb}`), 3);
               a_animationI = !a_animationI;
               xadsdkb += parseFloat(`${3}`);
            }
            if (turnv == progress6.length) {
               progress6 += `${progress6.length << (Math.min(Math.abs(1), 1))}`;
            }
            mintegral7 -= 2 >> (Math.min(3, Math.abs(libruntimeexecutors)));
         }
         let redgoalx = 3.0;
         let watchb = String.fromCharCode(102, 95, 53, 48, 95, 97, 117, 116, 111, 115, 99, 114, 111, 108, 108, 0);
         let referrer1: Array<any> = [653, 628, 359];
         for (let h = 0; h < 1; h++) {
            let videobufferloading_ = String.fromCharCode(114, 101, 118, 105, 101, 119, 95, 119, 95, 56, 56, 0);
            redgoalx /= Math.max(parseFloat(`${parseInt(`${redgoalx}`)}`), 5);
            videobufferloading_ += `${videobufferloading_.length & 2}`;
         }
         if (4 == (referrer1.length - watchb.length) || (4 - referrer1.length) == 2) {
            watchb = `${(watchb == String.fromCharCode(68, 0) ? watchb.length : referrer1.length)}`;
         }
         redgoalx *= parseFloat(`${3 * referrer1.length}`);
         for (let m = 0; m < 3; m++) {
            let hookk = true;
            let rewindB = String.fromCharCode(98, 117, 102, 115, 112, 97, 99, 101, 95, 118, 95, 52, 52, 0);
            referrer1.push(watchb.length ^ 3);
            hookk = rewindB.length == 27;
            rewindB += `${(String.fromCharCode(97, 0) == rewindB ? (hookk ? 2 : 3) : rewindB.length)}`;
         }
         let bufferc = String.fromCharCode(121, 95, 56, 50, 95, 115, 116, 101, 97, 108, 0);
         watchb = "1";
         bufferc = `${bufferc.length}`;
         if (parseFloat(`${watchb.length}`) <= redgoalx) {
            redgoalx -= (parseFloat(`${String.fromCharCode(53, 0) == watchb ? referrer1.length : watchb.length}`));
         }
         referrer1 = [referrer1.length];
         for (let z = 0; z < 1; z++) {
            let footballtrophyP: Map<any, any> = new Map([[String.fromCharCode(98, 95, 49, 95, 97, 115, 115, 101, 109, 98, 108, 121, 0), 740], [String.fromCharCode(99, 114, 111, 115, 115, 95, 108, 95, 49, 53, 0), 778], [String.fromCharCode(113, 95, 57, 51, 95, 119, 104, 105, 116, 101, 115, 0), 709]]);
            let sharedX = 5;
            let liveE = String.fromCharCode(108, 105, 98, 110, 100, 105, 95, 50, 95, 57, 55, 0);
            let liveo = 4.0;
            let leaguedetailsbgt = 5.0;
            referrer1 = [referrer1.length];
            footballtrophyP = new Map([[`${liveo}`, parseInt(`${leaguedetailsbgt}`)]]);
            sharedX ^= 1;
            liveE += `${footballtrophyP.size ^ 2}`;
            liveo *= (String.fromCharCode(80, 0) == liveE ? liveE.length : parseInt(`${liveo}`));
         }
         let matcht = 0.0;
         let productN = false;
         redgoalx /= Math.max(2, parseFloat(`${3 % (Math.max(1, parseInt(`${redgoalx}`)))}`));
         matcht /= Math.max((parseFloat(`${parseInt(`${matcht}`) / (Math.max(4, (productN ? 1 : 1)))}`)), 2);
         productN = matcht >= 99.27;
         greeno = new Map([[`${greeno.size}`, (String.fromCharCode(110, 0) == iconcurrentmatchX ? iconcurrentmatchX.length : greeno.size)]]);
         if (!entryQ.includes(faviconV)) {
            faviconV &= entryQ.length;
         }
         let arrowrightwithtailI = detailsO ? !detailsO : detailsO;
         do {
            let membership9 = String.fromCharCode(105, 95, 51, 49, 95, 118, 109, 97, 112, 115, 105, 110, 0);
            let sellmathbackgroundy = 1;
            let notifications = 7995480 <= membership9.length;
            do {
               let gestureu = 4.0;
               let videojsP = 5.0;
               let mbsplashd = 4.0;
               let mbnativeadvancedh = String.fromCharCode(122, 95, 49, 54, 95, 101, 120, 116, 114, 99, 0);
               membership9 = `${mbnativeadvancedh.length % 1}`;
               gestureu /= Math.max(5, parseFloat(`${parseInt(`${mbsplashd}`) ^ parseInt(`${videojsP}`)}`));
               videojsP += 2 & parseInt(`${gestureu}`);
               mbsplashd /= Math.max(4, parseFloat(`${parseInt(`${videojsP}`) + parseInt(`${mbsplashd}`)}`));
               mbnativeadvancedh = `${parseInt(`${mbsplashd}`)}`;
               if (notifications) {
                  break;
               }
            } while ((3 < membership9.length) && notifications);
            sellmathbackgroundy *= membership9.length << (Math.min(Math.abs(3), 4));
            if (membership9.startsWith(`${sellmathbackgroundy}`)) {
               membership9 += "2";
            }
            sellmathbackgroundy *= membership9.length;
            let chatk: Map<any, any> = new Map([[String.fromCharCode(100, 100, 114, 97, 110, 103, 101, 95, 48, 95, 51, 50, 0), true], [String.fromCharCode(114, 105, 110, 103, 116, 111, 110, 101, 95, 114, 95, 57, 51, 0), true], [String.fromCharCode(104, 95, 52, 53, 95, 98, 112, 117, 116, 115, 0), true]]);
            let iconrightorange6: Array<any> = [728, 837, 276];
            let component3 = 5.0;
            membership9 += `${3 & parseInt(`${component3}`)}`;
            chatk.set(`${iconrightorange6.length}`, 3);
            iconrightorange6 = [iconrightorange6.length - chatk.size];
            component3 += parseFloat(`${iconrightorange6.length}`);
            let indicatorV = 7459641 >= sellmathbackgroundy;
            do {
               sellmathbackgroundy |= sellmathbackgroundy;
               if (indicatorV) {
                  break;
               }
            } while ((!membership9.endsWith(`${sellmathbackgroundy}`)) && indicatorV);
            detailsO = sellmathbackgroundy == 27;
            if (arrowrightwithtailI) {
               break;
            }
         } while ((!detailsO) && arrowrightwithtailI);
         mintegral7 <<= Math.min(2, Math.abs(parseInt(`${tickedm}`)));
         entryQ.push(iconcurrentmatchX.length ^ 2);
         if (!entryQ.includes(libruntimeexecutors)) {
            let unreadX = 1;
            let thumbnaila = true;
            let rncorej: Map<any, any> = new Map([[String.fromCharCode(114, 101, 115, 97, 109, 112, 108, 101, 107, 104, 122, 95, 121, 95, 51, 52, 0), 836], [String.fromCharCode(112, 95, 51, 55, 95, 98, 119, 103, 116, 0), 116]]);
            let predictionv = thumbnaila ? !thumbnaila : thumbnaila;
            do {
               thumbnaila = rncorej.size < 91 || !thumbnaila;
               if (predictionv) {
                  break;
               }
            } while (predictionv && (thumbnaila));
            thumbnaila = rncorej.size > unreadX;
            unreadX %= Math.max(rncorej.size / 3, 4);
            if (unreadX == 5 || (5 | unreadX) == 1) {
               thumbnaila = rncorej.size <= unreadX;
            }
            let agreementc = thumbnaila ? !thumbnaila : thumbnaila;
            do {
               thumbnaila = rncorej.size == 82 && !thumbnaila;
               if (agreementc) {
                  break;
               }
            } while (agreementc && (3 >= (unreadX >> (Math.min(Math.abs(1), 4))) && !thumbnaila));
            entryQ.push(1);
         }
         teamdetailsbgc = [parseInt(`${tickedm}`) << (Math.min(iconcurrentmatchX.length, 2))];

         setIsPaused(!isPaused);
         setIsUserPaused(false);

         if (triggerByPlayPauseBtn && !isPaused) {
            setIsUserPaused(true);
            dispatch(setManualShowPopAds(Platform.OS === 'android' ? ANDROID_PLAY_PAUSE_POP_UP_ADS : IOS_PLAY_PAUSE_POP_UP_ADS));
         }
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
         let disto = 2.0;
         let policy_ = String.fromCharCode(118, 95, 54, 54, 95, 115, 113, 108, 105, 116, 101, 115, 101, 115, 115, 105, 111, 110, 0);
         let settingsi = 2.0;
         let termse = true;
         let backicone = 2.0;
         let inouttargetredV = String.fromCharCode(113, 117, 97, 108, 105, 116, 121, 95, 112, 95, 51, 54, 0);
         let regenga = 3.0;
         let entryI = 3;
         let forward0 = true;
         while ((settingsi - inouttargetredV.length) < 1.33 || 5 < (4 & inouttargetredV.length)) {
            let mergerw = 2.0;
            let middlesoundB = 1;
            let splashe = String.fromCharCode(103, 111, 116, 95, 112, 95, 53, 55, 0);
            let backT = 9634812.0 >= mergerw;
            do {
               let iconstarG = 0.0;
               mergerw *= parseFloat(`${1}`);
               iconstarG -= parseFloat(`${parseInt(`${iconstarG}`)}`);
               if (backT) {
                  break;
               }
            } while (backT && (!splashe.includes(`${mergerw}`)));
            while ((middlesoundB + parseInt(`${mergerw}`)) < 1 || (1 / (Math.max(7, middlesoundB))) < 2) {
               let templateprocessorc = 4.0;
               let whistleo: Array<any> = [String.fromCharCode(110, 97, 110, 111, 112, 98, 95, 49, 95, 49, 52, 0), String.fromCharCode(99, 101, 108, 101, 98, 114, 97, 116, 101, 95, 101, 95, 55, 0)];
               let mbsplashi: Map<any, any> = new Map([[String.fromCharCode(98, 95, 54, 51, 95, 116, 97, 112, 116, 105, 99, 0), 93], [String.fromCharCode(97, 95, 51, 56, 95, 101, 110, 116, 105, 116, 101, 115, 0), 68], [String.fromCharCode(107, 101, 114, 110, 101, 108, 95, 110, 95, 55, 52, 0), 326]]);
               middlesoundB |= middlesoundB % (Math.max(splashe.length, 6));
               templateprocessorc += 2;
               whistleo = [parseInt(`${templateprocessorc}`)];
               mbsplashi = new Map([[`${whistleo.length}`, 2 ^ parseInt(`${templateprocessorc}`)]]);
               break;
            }
            if (4 < (middlesoundB | 2)) {
               middlesoundB ^= 2;
            }
            let bgvipxvodx = mergerw >= 6483594.0;
            do {
               let owngoalG = 0.0;
               let flipperT = String.fromCharCode(101, 110, 99, 95, 121, 95, 55, 57, 0);
               let airbnbstarselectedI = String.fromCharCode(108, 95, 52, 56, 95, 99, 111, 110, 100, 105, 116, 105, 111, 110, 0);
               mergerw -= parseFloat(`${airbnbstarselectedI.length & parseInt(`${mergerw}`)}`);
               owngoalG *= parseInt(`${owngoalG}`) - flipperT.length;
               flipperT = `${flipperT.length}`;
               airbnbstarselectedI = `${parseInt(`${owngoalG}`)}`;
               if (bgvipxvodx) {
                  break;
               }
            } while (bgvipxvodx && ((parseInt(`${mergerw}`) / (Math.max(5, splashe.length))) > 3));
            if ((middlesoundB + parseInt(`${mergerw}`)) == 4 || 3.69 == (4.64 + mergerw)) {
               middlesoundB *= (String.fromCharCode(85, 0) == splashe ? splashe.length : middlesoundB);
            }
            if (4.94 == (mergerw + middlesoundB)) {
               let leakcheckerA = String.fromCharCode(116, 95, 48, 95, 115, 112, 101, 99, 105, 102, 105, 101, 114, 0);
               let flipperC = String.fromCharCode(99, 95, 56, 49, 95, 97, 99, 99, 101, 115, 115, 111, 114, 115, 0);
               middlesoundB |= 1;
               leakcheckerA = `${leakcheckerA.length}`;
               flipperC = `${leakcheckerA.length / 2}`;
            }
            let unfilla = middlesoundB <= 8298357;
            do {
               middlesoundB ^= middlesoundB | parseInt(`${mergerw}`);
               if (unfilla) {
                  break;
               }
            } while (unfilla && ((middlesoundB / (Math.max(4, mergerw))) == 3.0));
            splashe += `${parseInt(`${mergerw}`) - splashe.length}`;
            splashe = `${parseInt(`${mergerw}`)}`;
            inouttargetredV += `${entryI + 3}`;
            break;
         }
         let helperr: Map<any, any> = new Map([[String.fromCharCode(117, 95, 50, 49, 95, 105, 122, 101, 114, 111, 0), false], [String.fromCharCode(118, 95, 56, 54, 95, 98, 117, 102, 102, 101, 114, 101, 118, 101, 110, 116, 0), true], [String.fromCharCode(111, 95, 52, 56, 95, 101, 110, 99, 111, 100, 105, 110, 103, 98, 0), false]]);
         let gradlewD = false;
         let reactnavigationi = String.fromCharCode(110, 95, 55, 52, 95, 107, 105, 110, 103, 0);
         if (4 < (reactnavigationi.length / (Math.max(10, helperr.size)))) {
            helperr.set(`${gradlewD}`, ((gradlewD ? 4 : 2) | 1));
         }
         helperr = new Map([[`${helperr.size}`, reactnavigationi.length * 1]]);
         let sourceH: Array<any> = [String.fromCharCode(116, 111, 109, 99, 114, 121, 112, 116, 95, 116, 95, 56, 56, 0), String.fromCharCode(110, 97, 109, 101, 115, 101, 114, 118, 101, 114, 115, 95, 48, 95, 55, 55, 0)];
         gradlewD = reactnavigationi.length == 48;
         for (let s = 0; s < 1; s++) {
            helperr = new Map([[`${helperr.size}`, helperr.size]]);
         }
         helperr.set(`${gradlewD}`, sourceH.length);
         let u_countm = String.fromCharCode(115, 101, 110, 100, 95, 114, 95, 51, 55, 0);
         let huaweib = String.fromCharCode(97, 109, 116, 95, 98, 95, 56, 49, 0);
         helperr.set(`${gradlewD}`, ((gradlewD ? 1 : 5) >> (Math.min(Math.abs(helperr.size), 2))));
         u_countm += `${u_countm.length / (Math.max(huaweib.length, 10))}`;
         huaweib = "2";
         for (let v = 0; v < 3; v++) {
            let vietnamw: Map<any, any> = new Map([[String.fromCharCode(108, 111, 97, 100, 105, 110, 103, 95, 109, 95, 56, 53, 0), String.fromCharCode(110, 95, 57, 50, 95, 112, 114, 101, 102, 101, 114, 115, 0)], [String.fromCharCode(107, 95, 55, 54, 95, 106, 117, 115, 116, 105, 102, 105, 101, 100, 0), String.fromCharCode(97, 112, 112, 114, 101, 99, 97, 116, 105, 111, 110, 104, 111, 117, 114, 115, 95, 122, 95, 54, 56, 0)], [String.fromCharCode(106, 95, 52, 48, 95, 108, 111, 99, 97, 108, 105, 122, 97, 98, 108, 101, 0), String.fromCharCode(116, 114, 97, 110, 102, 115, 101, 114, 95, 110, 95, 53, 50, 0)]]);
            let livenodatabgimgd: Map<any, any> = new Map([[String.fromCharCode(116, 95, 54, 95, 100, 105, 115, 116, 0), 768], [String.fromCharCode(111, 95, 54, 56, 95, 107, 101, 112, 116, 0), 276]]);
            let long_w4H = String.fromCharCode(118, 95, 51, 49, 95, 115, 97, 109, 112, 108, 101, 114, 97, 116, 101, 0);
            sourceH = [1];
            vietnamw.set(`${livenodatabgimgd.size}`, 1 + livenodatabgimgd.size);
            long_w4H = `${livenodatabgimgd.size ^ 2}`;
         }
         if (helperr.get(`${sourceH.length}`) != null) {
            helperr = new Map([[`${sourceH.length}`, (reactnavigationi == String.fromCharCode(118, 0) ? sourceH.length : reactnavigationi.length)]]);
         }
         disto /= Math.max(parseInt(`${backicone}`) - 2, 1);
         let libreactnativeblob4 = settingsi <= 5698156.0;
         do {
            settingsi *= ((termse ? 1 : 4) / (Math.max(9, parseInt(`${backicone}`))));
            if (libreactnativeblob4) {
               break;
            }
         } while (libreactnativeblob4 && (settingsi >= 1.75));
         while (1.85 > (5.63 / (Math.max(6, settingsi)))) {
            policy_ += `${((termse ? 1 : 1) % (Math.max(parseInt(`${settingsi}`), 2)))}`;
            break;
         }
         for (let g = 0; g < 1; g++) {
            regenga += inouttargetredV.length << (Math.min(Math.abs(2), 3));
         }
         for (let j = 0; j < 2; j++) {
            entryI |= ((forward0 ? 5 : 2) * parseInt(`${disto}`));
         }
         policy_ = `${3 | parseInt(`${regenga}`)}`;
         termse = 34.94 == disto;

         if (
            autoPlayNext &&
            activeEpisode !== undefined &&
            episodes &&
            activeEpisode < episodes?.url_count - 1
         ) {

            termse = !termse;
            for (let m = 0; m < 1; m++) {
               backicone /= Math.max(4, 3);
            }
            while (termse && (3.9 / (Math.max(8, disto))) > 1.71) {
               termse = (disto + entryI) <= 37;
               break;
            }
            inouttargetredV += `${parseInt(`${settingsi}`)}`;
            let chatbotphotoJ = String.fromCharCode(121, 95, 50, 50, 95, 99, 111, 110, 118, 0);
            let vignettep: Array<any> = [184, 951];
            let rewardvideoC = true;
            let disconnectedq = String.fromCharCode(115, 116, 114, 99, 97, 116, 95, 107, 95, 56, 55, 0);
            let fullscreenmax3 = String.fromCharCode(121, 95, 53, 95, 115, 104, 111, 119, 115, 112, 101, 99, 116, 114, 117, 109, 112, 105, 99, 0);
            for (let k = 0; k < 3; k++) {
               rewardvideoC = rewardvideoC && vignettep.length == 53;
            }
            let privacyk = String.fromCharCode(104, 95, 52, 50, 95, 105, 110, 116, 114, 97, 102, 114, 97, 109, 101, 0);
            vignettep.push(((rewardvideoC ? 1 : 5)));
            if (!chatbotphotoJ.endsWith(disconnectedq)) {
               let sans7: Array<any> = [466, 105, 720];
               let bgvipsportG = true;
               disconnectedq = `${sans7.length * fullscreenmax3.length}`;
               sans7.push(1);
            }
            for (let m = 0; m < 2; m++) {
               disconnectedq = `${1 & chatbotphotoJ.length}`;
            }
            let editu: Array<any> = [4, 80, 679];
            let rnewsT = String.fromCharCode(105, 112, 113, 102, 95, 52, 95, 54, 53, 0);
            let entryD = 3.0;
            vignettep = [disconnectedq.length];
            editu = [editu.length];
            rnewsT = `${editu.length * rnewsT.length}`;
            entryD += editu.length - 2;
            for (let e = 0; e < 3; e++) {
               disconnectedq += "3";
            }
            policy_ = `${3 | chatbotphotoJ.length}`;
            if (!forward0) {
               let otherL = 3;
               let networkr: Map<any, any> = new Map([[String.fromCharCode(117, 95, 48, 95, 97, 114, 114, 0), String.fromCharCode(115, 116, 121, 108, 101, 95, 107, 95, 53, 51, 0)], [String.fromCharCode(108, 95, 48, 0), String.fromCharCode(112, 101, 99, 101, 110, 116, 95, 98, 95, 54, 49, 0)], [String.fromCharCode(106, 95, 51, 50, 95, 97, 116, 97, 98, 97, 115, 101, 0), String.fromCharCode(98, 114, 111, 97, 100, 99, 97, 115, 116, 95, 57, 95, 57, 57, 0)]]);
               let incidentg = true;
               incidentg = networkr.size < 48 && incidentg;
               if (!incidentg) {
                  incidentg = !incidentg;
               }
               if (4 < (2 * otherL)) {
                  otherL /= Math.max(2, 2);
               }
               while (4 >= otherL) {
                  incidentg = networkr.size <= 29;
                  break;
               }
               if (networkr.size > otherL) {
                  let matchesK = 2;
                  let themec: Array<any> = [String.fromCharCode(108, 111, 110, 103, 105, 116, 117, 100, 101, 95, 102, 95, 53, 56, 0), String.fromCharCode(108, 95, 53, 48, 95, 112, 114, 101, 115, 115, 105, 110, 103, 0)];
                  let pausel: Array<any> = [219, 436, 991];
                  otherL += 2;
                  matchesK -= themec.length;
                  themec.push(themec.length);
                  pausel.push(1);
               }
               let completej = 3.0;
               let stylev = 5.0;
               incidentg = completej == 87.70;
               stylev += parseFloat(`${parseInt(`${stylev}`) - parseInt(`${stylev}`)}`);
               completej += otherL ^ 3;
               if (incidentg) {
                  networkr = new Map([[`${networkr.size}`, otherL ^ 1]]);
               }
               disto *= policy_.length;
            }
            entryI <<= Math.min(Math.abs(3 >> (Math.min(Math.abs(entryI), 5))), 4);
            forward0 = entryI <= 79;
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
         } else if (!isUserPaused) {
            setIsPaused(false);
         }
      }, [screenState.interstitialShow, vipGuideModalOpen, isUserPaused]);

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
               let albumI: Map<any, any> = new Map([[String.fromCharCode(98, 111, 100, 121, 95, 55, 95, 51, 48, 0), 111], [String.fromCharCode(103, 101, 110, 101, 114, 97, 116, 101, 95, 56, 95, 50, 49, 0), 942], [String.fromCharCode(118, 101, 114, 108, 97, 121, 95, 111, 95, 48, 0), 237]]);
               let libfbjniT: Array<any> = [826, 492];
               let predictionlossN: Array<any> = [17, 58];
               let frame_cp = String.fromCharCode(114, 95, 50, 52, 95, 97, 99, 99, 101, 108, 101, 114, 97, 116, 101, 100, 0);
               let fcdaebecbcbafcdfceaaeccfeacdbR = 5.0;
               let cornershootg = 3.0;
               let o_managerM: Map<any, any> = new Map([[String.fromCharCode(104, 101, 114, 101, 95, 103, 95, 56, 55, 0), 13], [String.fromCharCode(98, 95, 49, 55, 95, 112, 114, 97, 103, 109, 97, 0), 67], [String.fromCharCode(121, 95, 52, 95, 97, 114, 99, 116, 105, 99, 0), 47]]);
               let hooksF = false;
               let orientation5 = String.fromCharCode(101, 95, 50, 53, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 0);
               let usernamel = 5.0;
               let containerh = 0;
               let incident6 = String.fromCharCode(103, 95, 57, 50, 95, 115, 104, 105, 109, 115, 0);
               let mbnativeadvancedu = fcdaebecbcbafcdfceaaeccfeacdbR <= 8759455.0;
               do {
                  let ewardedC = String.fromCharCode(99, 95, 57, 95, 101, 120, 116, 114, 97, 112, 111, 108, 97, 116, 101, 0);
                  let entry_ = String.fromCharCode(103, 101, 116, 109, 97, 120, 114, 115, 115, 95, 97, 95, 50, 0);
                  let templateprocessorE = String.fromCharCode(111, 95, 51, 51, 95, 101, 108, 105, 103, 105, 98, 108, 101, 0);
                  let profileJ = String.fromCharCode(97, 98, 117, 102, 102, 101, 114, 115, 105, 110, 107, 95, 103, 95, 52, 56, 0);
                  let libtana = String.fromCharCode(97, 95, 50, 53, 95, 109, 112, 101, 103, 118, 105, 100, 101, 111, 100, 97, 116, 97, 0);
                  let unimplementedviewe = String.fromCharCode(99, 95, 55, 57, 95, 114, 101, 115, 111, 108, 118, 101, 114, 0);
                  ewardedC += `${profileJ.length}`;
                  profileJ += `${libtana.length >> (Math.min(Math.abs(1), 5))}`;
                  libtana = `${unimplementedviewe.length % 2}`;
                  unimplementedviewe = `${2 - libtana.length}`;
                  let tumbnail9 = 4;
                  let defaultfootballbgU: Array<any> = [211, 936, 791];
                  entry_ = `${entry_.length}`;
                  tumbnail9 ^= defaultfootballbgU.length / 3;
                  defaultfootballbgU = [defaultfootballbgU.length];
                  while (ewardedC != String.fromCharCode(76, 0)) {
                     entry_ = `${entry_.length}`;
                     break;
                  }
                  let popup5 = String.fromCharCode(106, 95, 55, 48, 95, 108, 111, 116, 116, 105, 101, 109, 111, 100, 101, 108, 0);
                  let giftT = entry_.length <= 5297207;
                  do {
                     entry_ = "1";
                     if (giftT) {
                        break;
                     }
                  } while (giftT && (popup5.startsWith(entry_)));
                  let rulesh = String.fromCharCode(116, 110, 119, 118, 97, 52, 0) == entry_;
                  do {
                     let change0 = String.fromCharCode(112, 95, 49, 95, 101, 110, 117, 109, 101, 114, 97, 116, 101, 100, 0);
                     let referreri: Array<any> = [164, 417, 640];
                     let contextr = false;
                     entry_ = `${2 << (Math.min(2, entry_.length))}`;
                     change0 = `${change0.length}`;
                     referreri = [1];
                     contextr = (referreri.length - change0.length) == 8;
                     if (rulesh) {
                        break;
                     }
                  } while ((ewardedC == String.fromCharCode(73, 0) || entry_.length > 5) && rulesh);
                  if (4 <= templateprocessorE.length) {
                     ewardedC += `${3 - templateprocessorE.length}`;
                  }
                  if (popup5.length <= templateprocessorE.length) {
                     let jnewsm = 4.0;
                     let hiadG = 4;
                     let userv = 1;
                     popup5 += `${entry_.length + 1}`;
                     jnewsm *= parseFloat(`${parseInt(`${jnewsm}`)}`);
                     hiadG >>= Math.min(5, Math.abs(parseInt(`${jnewsm}`) | userv));
                     userv ^= 1 << (Math.min(Math.abs(hiadG), 3));
                  }
                  let refreshborderlessT = templateprocessorE.length <= 4968436;
                  do {
                     templateprocessorE += `${(String.fromCharCode(103, 0) == popup5 ? templateprocessorE.length : popup5.length)}`;
                     if (refreshborderlessT) {
                        break;
                     }
                  } while (refreshborderlessT && (entry_ == String.fromCharCode(121, 0) && 4 <= templateprocessorE.length));
                  fcdaebecbcbafcdfceaaeccfeacdbR += parseInt(`${usernamel}`) - 2;
                  if (mbnativeadvancedu) {
                     break;
                  }
               } while ((3 > (3 >> (Math.min(3, predictionlossN.length)))) && mbnativeadvancedu);
               while (orientation5.length >= 1) {
                  albumI = new Map([[`${fcdaebecbcbafcdfceaaeccfeacdbR}`, parseInt(`${cornershootg}`)]]);
                  break;
               }
               for (let y = 0; y < 1; y++) {
                  predictionlossN.push(3 ^ o_managerM.size);
               }
               cornershootg *= 2;
               while (orientation5.endsWith(`${cornershootg}`)) {
                  orientation5 += `${frame_cp.length}`;
                  break;
               }
               let castingJ = 7702436 >= albumI.size;
               do {
                  albumI.set(`${cornershootg}`, 2 & parseInt(`${fcdaebecbcbafcdfceaaeccfeacdbR}`));
                  if (castingJ) {
                     break;
                  }
               } while ((5 < albumI.size) && castingJ);
               let iconpipexpandE = 2.0;
               let eyeopeng = 4;
               let huaweiJ = String.fromCharCode(114, 101, 112, 101, 97, 116, 95, 110, 95, 49, 54, 0);
               if ((5 * eyeopeng) >= 1 && 1 >= (huaweiJ.length * 5)) {
                  huaweiJ = `${eyeopeng % (Math.max(2, huaweiJ.length))}`;
               }
               eyeopeng &= eyeopeng;
               let sansD = 0.0;
               let orangeg = String.fromCharCode(115, 105, 110, 95, 97, 95, 55, 52, 0);
               let becomep = String.fromCharCode(109, 115, 109, 112, 101, 103, 118, 95, 52, 95, 54, 53, 0);
               becomep = `${parseInt(`${iconpipexpandE}`) | parseInt(`${sansD}`)}`;
               becomep += `${parseInt(`${iconpipexpandE}`)}`;
               let halffieldimaget = String.fromCharCode(115, 119, 114, 95, 116, 95, 49, 55, 0);
               sansD += parseFloat(`${2}`);
               halffieldimaget += "1";
               iconpipexpandE *= 2 % (Math.max(9, huaweiJ.length));
               let unimplementedviewU = becomep == String.fromCharCode(119, 119, 119, 95, 108, 114, 0);
               do {
                  becomep += `${3 * huaweiJ.length}`;
                  if (unimplementedviewU) {
                     break;
                  }
               } while (unimplementedviewU && ((eyeopeng / (Math.max(10, becomep.length))) > 2));
               fcdaebecbcbafcdfceaaeccfeacdbR *= 2;
               cornershootg *= predictionlossN.length;
               predictionlossN = [parseInt(`${usernamel}`) | libfbjniT.length];
               cornershootg *= parseInt(`${cornershootg}`) | 3;
               let basketballdetailsbgC: Map<any, any> = new Map([[String.fromCharCode(97, 95, 55, 57, 95, 116, 121, 111, 101, 0), String.fromCharCode(99, 95, 56, 95, 116, 104, 114, 101, 115, 104, 111, 108, 100, 105, 110, 103, 0)], [String.fromCharCode(97, 99, 113, 117, 97, 110, 116, 95, 54, 95, 57, 52, 0), String.fromCharCode(112, 114, 111, 99, 101, 115, 115, 95, 114, 95, 54, 52, 0)]]);
               let episodesX = String.fromCharCode(110, 95, 49, 56, 95, 114, 101, 115, 101, 116, 0);
               let middlesoundW = String.fromCharCode(112, 108, 97, 110, 101, 95, 117, 95, 51, 56, 0);
               basketballdetailsbgC = new Map([[episodesX, (middlesoundW == String.fromCharCode(65, 0) ? middlesoundW.length : episodesX.length)]]);
               let splashB = String.fromCharCode(105, 122, 56, 102, 112, 104, 106, 0) == episodesX;
               do {
                  episodesX += `${episodesX.length}`;
                  if (splashB) {
                     break;
                  }
               } while (splashB && ((episodesX.length ^ 5) < 4 && (basketballdetailsbgC.size ^ episodesX.length) < 5));
               basketballdetailsbgC.set(episodesX, basketballdetailsbgC.size << (Math.min(episodesX.length, 3)));
               episodesX += `${basketballdetailsbgC.size}`;
               while ((episodesX.length | basketballdetailsbgC.size) < 2) {
                  episodesX = `${basketballdetailsbgC.size}`;
                  break;
               }
               let greytickj = basketballdetailsbgC.size <= 6822903;
               do {
                  let paginations = 1;
                  let matchactiveX: Array<any> = [237, 811];
                  let activeW = 4.0;
                  basketballdetailsbgC = new Map([[`${matchactiveX.length}`, matchactiveX.length - 3]]);
                  paginations *= 2;
                  activeW -= parseFloat(`${parseInt(`${activeW}`) & 2}`);
                  if (greytickj) {
                     break;
                  }
               } while (greytickj && ((2 - basketballdetailsbgC.size) == 1 && (episodesX.length - 2) == 2));
               cornershootg *= 3 << (Math.min(Math.abs(parseInt(`${usernamel}`)), 1));
               libfbjniT.push(1 / (Math.max(5, orientation5.length)));
               let libavutilk = 8896049 <= o_managerM.size;
               do {
                  let mailj = true;
                  mailj = !mailj;
                  mailj = !mailj;
                  mailj = !mailj;
                  o_managerM.set(`${usernamel}`, frame_cp.length);
                  if (libavutilk) {
                     break;
                  }
               } while ((cornershootg >= o_managerM.size) && libavutilk);
               while ((usernamel / (Math.max(1.78, 1))) >= 5.86 || (orientation5.length << (Math.min(Math.abs(5), 1))) >= 4) {
                  let hcopy_rlK = 2;
                  let becomey = 3.0;
                  let binddatas0 = 4.0;
                  let homeloadingj = 3.0;
                  let buffert = 0.0;
                  becomey /= Math.max(parseFloat(`${parseInt(`${buffert}`) | parseInt(`${becomey}`)}`), 2);
                  let megaphoneE = hcopy_rlK <= 9189121;
                  do {
                     let orange6 = String.fromCharCode(114, 101, 97, 100, 111, 110, 108, 121, 95, 109, 95, 49, 56, 0);
                     hcopy_rlK += 2 >> (Math.min(Math.abs(parseInt(`${buffert}`)), 2));
                     orange6 += `${orange6.length & 1}`;
                     if (megaphoneE) {
                        break;
                     }
                  } while ((hcopy_rlK < binddatas0) && megaphoneE);
                  let graphicsk = 1;
                  let predictiondefaulth: Map<any, any> = new Map([[String.fromCharCode(115, 95, 50, 55, 95, 112, 114, 111, 118, 105, 100, 101, 0), 700], [String.fromCharCode(118, 95, 55, 48, 95, 101, 120, 104, 97, 117, 115, 116, 105, 118, 101, 0), 535], [String.fromCharCode(99, 95, 57, 52, 95, 97, 114, 103, 117, 109, 101, 110, 116, 115, 0), 189]]);
                  hcopy_rlK += 1 & parseInt(`${homeloadingj}`);
                  predictiondefaulth = new Map([[`${predictiondefaulth.size}`, predictiondefaulth.size + predictiondefaulth.size]]);
                  let sharewhiteo: Map<any, any> = new Map([[String.fromCharCode(98, 95, 55, 95, 114, 101, 111, 114, 100, 101, 114, 101, 100, 0), 448], [String.fromCharCode(98, 95, 49, 53, 95, 121, 117, 118, 103, 98, 114, 112, 0), 229], [String.fromCharCode(114, 95, 57, 53, 95, 115, 108, 105, 100, 105, 110, 103, 0), 80]]);
                  becomey += parseFloat(`${parseInt(`${becomey}`) << (Math.min(Math.abs(parseInt(`${binddatas0}`)), 3))}`);
                  sharewhiteo.set(`${sharewhiteo.size}`, sharewhiteo.size | sharewhiteo.size);
                  binddatas0 /= Math.max(2, parseInt(`${binddatas0}`) & parseInt(`${homeloadingj}`));
                  let imagenomoredataQ = String.fromCharCode(112, 101, 114, 95, 119, 95, 53, 0);
                  if (3.98 >= (binddatas0 / (Math.max(3.58, 5))) && (binddatas0 / 3.58) >= 4.38) {
                     hcopy_rlK %= Math.max(parseInt(`${buffert}`), 1);
                  }
                  while (5.66 > becomey) {
                     becomey -= parseFloat(`${3 - imagenomoredataQ.length}`);
                     break;
                  }
                  if (becomey > 3.8) {
                     let baiduadsA = String.fromCharCode(107, 95, 50, 56, 95, 100, 117, 112, 115, 0);
                     becomey *= parseFloat(`${3 * parseInt(`${homeloadingj}`)}`);
                     baiduadsA += `${baiduadsA.length ^ baiduadsA.length}`;
                  }
                  let invitem = 4;
                  let linky: Array<any> = [String.fromCharCode(103, 95, 57, 49, 95, 113, 117, 111, 116, 97, 0), String.fromCharCode(97, 115, 102, 114, 116, 112, 95, 108, 95, 50, 53, 0), String.fromCharCode(108, 95, 57, 51, 95, 99, 111, 108, 111, 114, 113, 117, 97, 110, 116, 0)];
                  imagenomoredataQ = "2";
                  invitem %= Math.max(5, linky.length + 1);
                  linky = [linky.length];
                  if (2 <= imagenomoredataQ.length) {
                     imagenomoredataQ = "2";
                  }
                  buffert -= parseFloat(`${parseInt(`${homeloadingj}`) << (Math.min(3, Math.abs(hcopy_rlK)))}`);
                  buffert *= parseFloat(`${hcopy_rlK / (Math.max(7, parseInt(`${buffert}`)))}`);
                  graphicsk <<= Math.min(Math.abs(graphicsk << (Math.min(1, Math.abs(1)))), 1);
                  orientation5 += `${albumI.size}`;
                  break;
               }
               let giftY = hooksF ? !hooksF : hooksF;
               do {
                  hooksF = (predictionlossN.length + frame_cp.length) < 9;
                  if (giftY) {
                     break;
                  }
               } while (giftY && (5 > (2 | predictionlossN.length)));
               for (let r = 0; r < 2; r++) {
                  hooksF = String.fromCharCode(120, 0) == frame_cp;
               }
               for (let r = 0; r < 3; r++) {
                  hooksF = 31.3 == usernamel;
               }
               libfbjniT = [((hooksF ? 2 : 3) / 2)];
               cornershootg -= parseInt(`${fcdaebecbcbafcdfceaaeccfeacdbR}`);
               while ((1 | orientation5.length) > 2) {
                  let loginr: Array<any> = [917, 824, 753];
                  let calendarp = String.fromCharCode(116, 97, 108, 107, 95, 119, 95, 51, 53, 0);
                  let componentE = String.fromCharCode(100, 110, 115, 95, 111, 95, 53, 51, 0);
                  let subbasketballplayerJ = 6511321 >= loginr.length;
                  do {
                     let show8: Map<any, any> = new Map([[String.fromCharCode(102, 116, 118, 108, 97, 115, 116, 110, 111, 100, 101, 95, 122, 95, 53, 57, 0), false], [String.fromCharCode(104, 97, 115, 104, 95, 57, 95, 51, 49, 0), true]]);
                     loginr.push((String.fromCharCode(55, 0) == calendarp ? componentE.length : calendarp.length));
                     show8 = new Map([[`${show8.size}`, 2 - show8.size]]);
                     if (subbasketballplayerJ) {
                        break;
                     }
                  } while (subbasketballplayerJ && (4 > (3 | calendarp.length) && 2 > (calendarp.length | 3)));
                  let yellowanimationliveF = String.fromCharCode(117, 49, 117, 0) == calendarp;
                  do {
                     calendarp = `${1 >> (Math.min(4, calendarp.length))}`;
                     if (yellowanimationliveF) {
                        break;
                     }
                  } while ((calendarp.startsWith(componentE)) && yellowanimationliveF);
                  loginr.push(componentE.length);
                  if (calendarp.length < loginr.length) {
                     calendarp = `${componentE.length - 2}`;
                  }
                  let invite2 = String.fromCharCode(112, 108, 117, 114, 97, 108, 105, 122, 97, 116, 105, 111, 110, 95, 51, 95, 55, 0);
                  let profileactiveR = 0.0;
                  loginr = [componentE.length * invite2.length];
                  invite2 += `${parseInt(`${profileactiveR}`)}`;
                  let libhermesi = String.fromCharCode(117, 95, 49, 57, 95, 97, 116, 114, 97, 99, 100, 97, 116, 97, 0);
                  calendarp += "1";
                  libhermesi += `${libhermesi.length}`;
                  while (5 < componentE.length) {
                     calendarp = `${2 & calendarp.length}`;
                     break;
                  }
                  let searchbarl = false;
                  let videovara = true;
                  while (!searchbarl) {
                     searchbarl = !videovara;
                     break;
                  }
                  orientation5 += `${orientation5.length}`;
                  break;
               }
               let minivodd = String.fromCharCode(115, 116, 114, 101, 97, 109, 115, 95, 55, 95, 57, 48, 0);
               let moduleM: Map<any, any> = new Map([[String.fromCharCode(116, 111, 112, 105, 99, 95, 55, 95, 49, 55, 0), 873], [String.fromCharCode(100, 95, 51, 48, 95, 115, 101, 113, 117, 101, 110, 99, 101, 0), 419]]);
               let penaltyshoots = String.fromCharCode(97, 114, 98, 105, 116, 114, 117, 109, 95, 110, 95, 53, 55, 0);
               while ((moduleM.size - 2) == 2 && 2 == (penaltyshoots.length - moduleM.size)) {
                  let iconarrowleftL = false;
                  let clocka = String.fromCharCode(102, 115, 101, 101, 107, 95, 55, 95, 49, 48, 48, 0);
                  let controlsy: Map<any, any> = new Map([[String.fromCharCode(109, 95, 56, 52, 95, 101, 97, 99, 101, 110, 99, 0), 863], [String.fromCharCode(119, 95, 53, 56, 95, 109, 107, 118, 119, 114, 105, 116, 101, 114, 0), 645], [String.fromCharCode(116, 95, 54, 56, 95, 98, 117, 98, 98, 108, 101, 115, 0), 542]]);
                  let graphics6 = String.fromCharCode(104, 95, 53, 53, 95, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 0);
                  let teamdetailsbgw = String.fromCharCode(99, 95, 49, 48, 95, 112, 116, 115, 0);
                  penaltyshoots = `${(String.fromCharCode(75, 0) == teamdetailsbgw ? teamdetailsbgw.length : graphics6.length)}`;
                  iconarrowleftL = controlsy.size < 98;
                  clocka += `${1 | clocka.length}`;
                  controlsy = new Map([[clocka, 3]]);
                  graphics6 += `${controlsy.size}`;
                  break;
               }
               while (minivodd.length >= 3 && penaltyshoots == String.fromCharCode(67, 0)) {
                  let downloadedT: Array<any> = [423, 395, 492];
                  let codei = false;
                  let typingH: Array<any> = [String.fromCharCode(116, 114, 105, 108, 105, 110, 101, 97, 114, 95, 54, 95, 49, 50, 0), String.fromCharCode(103, 95, 53, 51, 95, 99, 104, 114, 111, 109, 97, 107, 101, 121, 0)];
                  minivodd += "1";
                  downloadedT = [typingH.length];
                  codei = (48 == ((codei ? 48 : typingH.length) * typingH.length));
                  break;
               }
               let gmaile: Map<any, any> = new Map([[String.fromCharCode(108, 111, 103, 115, 95, 119, 95, 54, 54, 0), 323], [String.fromCharCode(100, 101, 97, 99, 116, 105, 118, 97, 116, 101, 100, 95, 104, 95, 54, 48, 0), 116], [String.fromCharCode(99, 95, 50, 55, 95, 112, 114, 111, 106, 101, 99, 116, 101, 100, 0), 662]]);
               penaltyshoots = `${3 * minivodd.length}`;
               gmaile.set(`${gmaile.size}`, gmaile.size);
               moduleM = new Map([[penaltyshoots, minivodd.length - 3]]);
               let greyarrowupe: Map<any, any> = new Map([[String.fromCharCode(110, 95, 49, 57, 95, 121, 111, 117, 114, 0), String.fromCharCode(97, 114, 101, 97, 115, 95, 114, 95, 51, 48, 0)], [String.fromCharCode(114, 95, 56, 54, 95, 98, 101, 116, 104, 115, 111, 102, 116, 118, 105, 100, 0), String.fromCharCode(106, 95, 56, 53, 95, 107, 97, 108, 109, 97, 110, 0)], [String.fromCharCode(114, 95, 55, 52, 95, 115, 105, 110, 117, 115, 111, 105, 100, 97, 108, 0), String.fromCharCode(97, 95, 53, 50, 95, 108, 97, 112, 110, 100, 122, 0)]]);
               while (minivodd != String.fromCharCode(85, 0)) {
                  penaltyshoots = `${greyarrowupe.size}`;
                  break;
               }
               let roundm = 5;
               for (let f = 0; f < 1; f++) {
                  moduleM = new Map([[`${greyarrowupe.size}`, roundm + 1]]);
               }
               while (1 <= penaltyshoots.length) {
                  let live4 = 2.0;
                  let airbnbstara = 5.0;
                  let dacccfaabfbcbadeebddcabacdffdbR = 1;
                  let sportsg = String.fromCharCode(101, 95, 55, 49, 95, 119, 105, 114, 101, 108, 101, 115, 115, 0);
                  let predictionbannersharedr = String.fromCharCode(109, 95, 48, 95, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 0);
                  moduleM = new Map([[`${moduleM.size}`, 2 >> (Math.min(4, minivodd.length))]]);
                  live4 += parseFloat(`${2 / (Math.max(1, parseInt(`${airbnbstara}`)))}`);
                  airbnbstara /= Math.max(5, parseFloat(`${dacccfaabfbcbadeebddcabacdffdbR}`));
                  dacccfaabfbcbadeebddcabacdffdbR >>= Math.min(Math.abs(sportsg.length - dacccfaabfbcbadeebddcabacdffdbR), 3);
                  sportsg = `${predictionbannersharedr.length ^ 1}`;
                  predictionbannersharedr += `${dacccfaabfbcbadeebddcabacdffdbR}`;
                  break;
               }
               orientation5 += `${(frame_cp == String.fromCharCode(65, 0) ? frame_cp.length : containerh)}`;
               for (let l = 0; l < 1; l++) {
                  frame_cp += `${parseInt(`${usernamel}`)}`;
               }
               let libavformatU = 8764716 <= predictionlossN.length;
               do {
                  predictionlossN = [o_managerM.size ^ 3];
                  if (libavformatU) {
                     break;
                  }
               } while (libavformatU && (o_managerM.get(`${predictionlossN.length}`) == null));

               dispatch(incrementSportWatchTime());
            }, 1000);

            return () => clearInterval(unsub);
         }
      }, [route.name])







      const isVip = wawaLibglog.isVip(userState.user);

      const pauseSportVideo =
         route.name === "体育详情" &&
         screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS && !wawaLibglog.isVip(userState.user)

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
         let minimizej: Array<any> = [326, 664];
         let reactnativeratingsL = 0.0;
         let grayV = String.fromCharCode(112, 97, 117, 115, 101, 95, 122, 95, 53, 0);
         let countryn = 0;
         let short_cn = 3.0;
         let v_animationz = String.fromCharCode(111, 95, 53, 56, 95, 117, 110, 109, 97, 114, 107, 0);
         let libloggers: Array<any> = [String.fromCharCode(116, 95, 49, 55, 95, 114, 101, 108, 102, 117, 110, 99, 0), String.fromCharCode(109, 111, 100, 105, 102, 105, 101, 100, 95, 121, 95, 51, 55, 0), String.fromCharCode(116, 116, 97, 101, 110, 99, 95, 53, 95, 54, 52, 0)];
         let leakchecker0 = String.fromCharCode(114, 116, 109, 100, 95, 106, 95, 56, 50, 0);
         let yellowcirclebgO = String.fromCharCode(98, 95, 52, 50, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 0);
         let dicelogoZ = false;
         let gifgoalbgz: Map<any, any> = new Map([[String.fromCharCode(118, 95, 49, 51, 95, 118, 101, 114, 105, 102, 121, 0), String.fromCharCode(120, 109, 117, 108, 116, 105, 112, 108, 101, 95, 104, 95, 52, 53, 0)], [String.fromCharCode(104, 95, 53, 49, 95, 115, 99, 111, 112, 101, 100, 0), String.fromCharCode(116, 111, 120, 121, 122, 95, 53, 95, 54, 0)]]);
         let fcdaebecbcbafcdfceaaeccfeacdb1 = 5.0;
         let clubP = 5;
         let imagesj = 4;
         let libavutilg = 0.0;
         libavutilg += 2 & parseInt(`${libavutilg}`);
         while (5.22 > libavutilg) {
            let sentryV = 0.0;
            libavutilg /= Math.max(3 & parseInt(`${sentryV}`), 2);
            break;
         }
         let middlewareV = String.fromCharCode(104, 101, 114, 109, 105, 116, 101, 95, 54, 95, 53, 49, 0);
         let progressw = String.fromCharCode(119, 95, 52, 53, 95, 101, 118, 101, 114, 0);
         grayV = `${1 & parseInt(`${libavutilg}`)}`;
         leakchecker0 += `${2 % (Math.max(parseInt(`${reactnativeratingsL}`), 8))}`;

         if (!playerVodAds?.actionUrl) {

            libloggers.push(libloggers.length % (Math.max(10, leakchecker0.length)));
            let release_5L = grayV == String.fromCharCode(106, 57, 95, 117, 52, 0);
            do {
               grayV = `${libloggers.length % (Math.max(grayV.length, 2))}`;
               if (release_5L) {
                  break;
               }
            } while (release_5L && (2 == (2 ^ grayV.length) && (2 ^ gifgoalbgz.size) == 1));


            let back3 = String.fromCharCode(115, 112, 101, 101, 100, 117, 112, 95, 56, 95, 55, 57, 0);
            let iconlogoutd = String.fromCharCode(103, 104, 97, 115, 104, 95, 114, 95, 56, 51, 0);
            let actionR = String.fromCharCode(105, 95, 50, 57, 95, 98, 97, 114, 114, 101, 116, 116, 0);
            while (back3 == String.fromCharCode(86, 0)) {
               iconlogoutd = `${(String.fromCharCode(105, 0) == actionR ? actionR.length : back3.length)}`;
               break;
            }
            while (iconlogoutd != String.fromCharCode(90, 0) || back3 == String.fromCharCode(112, 0)) {
               back3 = `${1 - iconlogoutd.length}`;
               break;
            }
            back3 = `${iconlogoutd.length & 1}`;
            if (back3.endsWith(`${iconlogoutd.length}`)) {
               let sans8: Array<any> = [178, 107];
               let cornerkickc = true;
               iconlogoutd += `${3 - actionR.length}`;
               sans8.push(1);
               cornerkickc = (((!cornerkickc ? 26 : sans8.length) ^ sans8.length) >= 26);
            }
            if (actionR != String.fromCharCode(67, 0)) {
               iconlogoutd = `${actionR.length | 3}`;
            }
            let homeinactivep = 2;
            let giftE = 1;
            back3 += `${homeinactivep >> (Math.min(Math.abs(2), 1))}`;
            while (3 > (giftE % (Math.max(homeinactivep, 9))) || (homeinactivep % (Math.max(10, giftE))) > 3) {
               homeinactivep -= 2;
               break;
            }
            let telemetryf = back3 == String.fromCharCode(99, 119, 51, 48, 120, 103, 57, 50, 57, 0);
            do {
               back3 += `${homeinactivep % 2}`;
               if (telemetryf) {
                  break;
               }
            } while ((1 == (5 & back3.length)) && telemetryf);
            fcdaebecbcbafcdfceaaeccfeacdb1 /= Math.max(parseFloat(`${parseInt(`${reactnativeratingsL}`) << (Math.min(yellowcirclebgO.length, 3))}`), 5);
            if (grayV.endsWith(`${fcdaebecbcbafcdfceaaeccfeacdb1}`)) {
               grayV = `${yellowcirclebgO.length << (Math.min(v_animationz.length, 2))}`;
            }
            wawa_dacccfaabfbcbadeebddcabacdffdbc_video.playsAdsClickAnalytics();

            for (let u = 0; u < 1; u++) {
               short_cn -= gifgoalbgz.size;
            }
            if (5 >= (1 ^ clubP) || (clubP ^ libloggers.length) >= 1) {
               libloggers = [((dicelogoZ ? 5 : 1))];
            }


            leakchecker0 = `${(String.fromCharCode(52, 0) == yellowcirclebgO ? leakchecker0.length : yellowcirclebgO.length)}`;
            for (let d = 0; d < 2; d++) {
               reactnativeratingsL *= parseFloat(`${clubP}`);
            }

            if (onPressCountdown) onPressCountdown();

            for (let k = 0; k < 1; k++) {
               let singapore9 = 2;
               singapore9 /= Math.max(1, singapore9 ^ 1);
               let ajaxa = 7257356 <= singapore9;
               do {
                  let reactnativejsP = 4;
                  let mathE = 5.0;
                  let baseP = String.fromCharCode(114, 95, 55, 49, 95, 114, 105, 102, 102, 0);
                  singapore9 <<= Math.min(1, Math.abs(2));
                  reactnativejsP >>= Math.min(1, Math.abs(parseInt(`${mathE}`) / 2));
                  mathE += (baseP == String.fromCharCode(105, 0) ? reactnativejsP : baseP.length);
                  if (ajaxa) {
                     break;
                  }
               } while (((singapore9 >> (Math.min(4, Math.abs(singapore9)))) >= 4 || 4 >= (singapore9 >> (Math.min(Math.abs(singapore9), 3)))) && ajaxa);
               let currentd = 2.0;
               let awayiconK = false;
               let components9 = String.fromCharCode(103, 95, 52, 48, 95, 105, 109, 108, 116, 0);
               singapore9 %= Math.max(3, 3);
               currentd /= Math.max(parseFloat(`${2 | parseInt(`${currentd}`)}`), 5);
               awayiconK = !awayiconK;
               components9 += `${(3 >> (Math.min(3, Math.abs((awayiconK ? 3 : 2)))))}`;
               short_cn *= 1;
            }
            short_cn -= ((dicelogoZ ? 5 : 5));
            return;

            gifgoalbgz = new Map([[`${clubP}`, 3]]);
            clubP ^= (leakchecker0 == String.fromCharCode(114, 0) ? v_animationz.length : leakchecker0.length);
         }

         const url = playerVodAds?.actionUrl.includes(BodanRedscoreballStatistics.tickedRoundBasketballDist([79, 83, 83, 87, 39], 0x27, false)) ? playerVodAds?.actionUrl : BodanRedscoreballStatistics.tickedRoundBasketballDist([17, 13, 13, 9, 10, 67, 86, 86, 121], 0x79, false) + playerVodAds?.actionUrl



         while (clubP < 5) {
            clubP <<= Math.min(4, Math.abs(libloggers.length * 1));
            break;
         }
         v_animationz += `${(v_animationz == String.fromCharCode(55, 0) ? v_animationz.length : clubP)}`;


         for (let u = 0; u < 1; u++) {
            let defaultpredictionprofileA: Array<any> = [55, 182];
            let confirmationX = 4;
            let runtimescheduler0 = String.fromCharCode(101, 110, 117, 109, 101, 114, 97, 116, 105, 110, 103, 95, 97, 95, 56, 53, 0);
            let emojig = false;
            let inviteE = String.fromCharCode(108, 101, 118, 105, 110, 115, 111, 110, 95, 118, 95, 56, 53, 0);
            runtimescheduler0 += "2";
            defaultpredictionprofileA.push(3);
            inviteE = `${defaultpredictionprofileA.length}`;
            for (let l = 0; l < 3; l++) {
               confirmationX <<= Math.min(Math.abs(confirmationX), 4);
            }
            for (let t = 0; t < 2; t++) {
               emojig = 51 == confirmationX;
            }
            confirmationX /= Math.max(runtimescheduler0.length, 5);
            let sigmobm = String.fromCharCode(121, 95, 49, 57, 95, 101, 120, 112, 111, 110, 101, 110, 116, 0);
            let traminiL = String.fromCharCode(102, 95, 57, 56, 95, 116, 101, 115, 115, 101, 108, 97, 116, 111, 114, 0);
            let filledT = traminiL.length >= 5262115;
            do {
               traminiL = `${(String.fromCharCode(70, 0) == inviteE ? runtimescheduler0.length : inviteE.length)}`;
               if (filledT) {
                  break;
               }
            } while (filledT && (traminiL.includes(`${sigmobm.length}`)));
            if (3 < confirmationX) {
               confirmationX /= Math.max(1 << (Math.min(3, Math.abs(confirmationX))), 1);
            }
            emojig = (sigmobm.length >> (Math.min(3, traminiL.length))) < 51;
            while (sigmobm.includes(`${emojig}`)) {
               sigmobm = `${runtimescheduler0.length % (Math.max(8, defaultpredictionprofileA.length))}`;
               break;
            }
            let largesoundx = runtimescheduler0.length <= 8325414;
            do {
               let iconclosewhitewithbgo = String.fromCharCode(112, 95, 57, 51, 95, 110, 101, 119, 114, 111, 119, 0);
               let notificationgray3: Array<any> = [716, 535, 396];
               let iconshareP: Array<any> = [41, 748, 111];
               let humidity3 = false;
               runtimescheduler0 += `${(String.fromCharCode(80, 0) == sigmobm ? notificationgray3.length : sigmobm.length)}`;
               iconclosewhitewithbgo += `${(iconshareP.length >> (Math.min(3, Math.abs((humidity3 ? 3 : 3)))))}`;
               notificationgray3.push(iconclosewhitewithbgo.length);
               iconshareP = [(iconshareP.length + (humidity3 ? 1 : 2))];
               if (largesoundx) {
                  break;
               }
            } while (largesoundx && (runtimescheduler0.length > 4));
            emojig = 69 < inviteE.length;
            let downloadingW: Array<any> = [630, 419, 931];
            let homei: Array<any> = [972, 707, 494];
            let buttonk = 5794879 <= runtimescheduler0.length;
            do {
               let iconrightorange0 = 5;
               let baiduads8: Array<any> = [763, 60];
               runtimescheduler0 += `${traminiL.length % 2}`;
               iconrightorange0 ^= iconrightorange0 + baiduads8.length;
               baiduads8 = [iconrightorange0 % 1];
               if (buttonk) {
                  break;
               }
            } while ((4 > (runtimescheduler0.length >> (Math.min(Math.abs(3), 3)))) && buttonk);
            clubP <<= Math.min(Math.abs(((emojig ? 4 : 3))), 2);
         }
         fcdaebecbcbafcdfceaaeccfeacdb1 /= Math.max(4, (parseFloat(`${(dicelogoZ ? 2 : 2) * 3}`)));



         if ((5 & libloggers.length) < 4 || 5 < (libloggers.length - parseInt(`${fcdaebecbcbafcdfceaaeccfeacdb1}`))) {
            libloggers = [3 - grayV.length];
         }
         while (3.23 >= short_cn) {
            v_animationz = `${parseInt(`${fcdaebecbcbafcdfceaaeccfeacdb1}`) >> (Math.min(4, Math.abs(3)))}`;
            break;
         }


         let stationQ = String.fromCharCode(115, 111, 102, 97, 108, 105, 122, 101, 114, 95, 108, 95, 49, 52, 0);
         let mbsplash3 = String.fromCharCode(112, 97, 115, 115, 105, 118, 101, 95, 102, 95, 53, 51, 0);
         let ksadC = 1.0;
         stationQ += `${mbsplash3.length % 3}`;
         for (let x = 0; x < 1; x++) {
            let libffmpegkitH: Map<any, any> = new Map([[String.fromCharCode(116, 104, 114, 101, 97, 100, 110, 97, 109, 101, 95, 98, 95, 53, 57, 0), 841], [String.fromCharCode(99, 108, 97, 115, 115, 110, 97, 109, 101, 95, 118, 95, 57, 49, 0), 728]]);
            let benefiti: Map<any, any> = new Map([[String.fromCharCode(115, 95, 56, 52, 95, 108, 105, 102, 101, 99, 121, 99, 108, 101, 0), 370], [String.fromCharCode(115, 121, 110, 116, 104, 101, 115, 105, 122, 101, 114, 95, 110, 95, 55, 55, 0), 627], [String.fromCharCode(117, 110, 102, 105, 108, 116, 101, 114, 101, 100, 95, 111, 95, 51, 53, 0), 102]]);
            let reactnativejs1 = String.fromCharCode(109, 111, 100, 101, 109, 95, 53, 95, 56, 55, 0);
            ksadC *= 1;
            libffmpegkitH.set(`${libffmpegkitH.size}`, libffmpegkitH.size);
            benefiti.set(`${benefiti.size}`, 3 >> (Math.min(4, Math.abs(libffmpegkitH.size))));
            reactnativejs1 += `${reactnativejs1.length}`;
         }
         stationQ += `${2 / (Math.max(6, mbsplash3.length))}`;
         let shareE = 6762216 <= stationQ.length;
         do {
            let paginationu = true;
            let expandj = 2.0;
            let penaltymatchiconr = 0;
            let gdtadv4 = true;
            stationQ += `${(String.fromCharCode(67, 0) == stationQ ? stationQ.length : (paginationu ? 5 : 1))}`;
            paginationu = expandj == 3.45;
            expandj -= parseFloat(`${3 / (Math.max(7, parseInt(`${expandj}`)))}`);
            penaltymatchiconr >>= Math.min(3, parseInt(`${Math.abs(((gdtadv4 ? 4 : 2) / (Math.max(penaltymatchiconr, 10))))}`));
            gdtadv4 = 62 >= penaltymatchiconr;
            if (shareE) {
               break;
            }
         } while (shareE && (3 == stationQ.length));
         let codeb: Map<any, any> = new Map([[String.fromCharCode(99, 111, 108, 117, 109, 110, 95, 55, 95, 57, 55, 0), true], [String.fromCharCode(105, 95, 50, 53, 95, 102, 114, 97, 109, 101, 98, 117, 102, 102, 101, 114, 0), true]]);
         let thumbnailU: Map<any, any> = new Map([[String.fromCharCode(97, 95, 52, 56, 95, 115, 117, 112, 112, 111, 114, 116, 105, 110, 103, 0), 391], [String.fromCharCode(99, 104, 101, 99, 107, 95, 121, 95, 55, 56, 0), 370], [String.fromCharCode(112, 95, 55, 51, 95, 120, 112, 111, 114, 116, 101, 100, 0), 706]]);
         ksadC -= parseInt(`${ksadC}`);
         let tailA: Array<any> = [String.fromCharCode(97, 95, 51, 55, 95, 112, 97, 103, 101, 115, 101, 101, 107, 0), String.fromCharCode(98, 114, 101, 97, 107, 95, 56, 95, 54, 50, 0)];
         mbsplash3 = `${tailA.length << (Math.min(4, Math.abs(codeb.size)))}`;
         let executorE = 5075018 >= codeb.size;
         do {
            let xadsdkB = 5.0;
            let homeW = 5.0;
            let iconviewerw = false;
            let small5 = 2.0;
            let bootsplashq: Map<any, any> = new Map([[String.fromCharCode(114, 101, 113, 117, 101, 115, 116, 105, 110, 103, 95, 49, 95, 50, 0), 761], [String.fromCharCode(102, 105, 110, 116, 95, 102, 95, 54, 0), 186], [String.fromCharCode(112, 103, 109, 120, 95, 52, 95, 53, 51, 0), 846]]);
            codeb = new Map([[`${thumbnailU.size}`, ((iconviewerw ? 3 : 4) | thumbnailU.size)]]);
            xadsdkB /= Math.max(parseFloat(`${3 | parseInt(`${xadsdkB}`)}`), 2);
            homeW -= parseFloat(`${parseInt(`${xadsdkB}`) + 3}`);
            iconviewerw = small5 > xadsdkB;
            small5 /= Math.max(bootsplashq.size >> (Math.min(Math.abs(3), 2)), 5);
            bootsplashq = new Map([[`${xadsdkB}`, parseInt(`${homeW}`) & 1]]);
            if (executorE) {
               break;
            }
         } while ((1 >= thumbnailU.size) && executorE);
         grayV += `${(String.fromCharCode(103, 0) == leakchecker0 ? leakchecker0.length : gifgoalbgz.size)}`;
         while (!grayV.startsWith(`${reactnativeratingsL}`)) {
            grayV += `${clubP}`;
            break;
         }


         if ((grayV.length ^ countryn) == 3) {
            grayV += `${parseInt(`${short_cn}`)}`;
         }
         let videojs2 = 1;
         let user8 = String.fromCharCode(112, 95, 54, 56, 95, 117, 112, 108, 111, 97, 100, 0);
         for (let y = 0; y < 3; y++) {
            user8 += `${videojs2 * user8.length}`;
         }
         while ((user8.length >> (Math.min(5, Math.abs(videojs2)))) > 2 && 2 > (user8.length >> (Math.min(3, Math.abs(videojs2))))) {
            let maild = String.fromCharCode(107, 95, 49, 95, 97, 100, 116, 115, 0);
            let utilsd = String.fromCharCode(108, 95, 57, 57, 95, 122, 108, 105, 98, 112, 114, 105, 109, 101, 0);
            let condensedc = 1.0;
            user8 += "1";
            maild += "3";
            utilsd = `${1 >> (Math.min(1, utilsd.length))}`;
            condensedc /= Math.max(2, utilsd.length ^ parseInt(`${condensedc}`));
            break;
         }
         let specX = videojs2 <= 8190323;
         do {
            videojs2 <<= Math.min(1, Math.abs((user8 == String.fromCharCode(68, 0) ? user8.length : videojs2)));
            if (specX) {
               break;
            }
         } while ((2 == videojs2) && specX);
         if ((user8.length + videojs2) == 3 && 3 == (videojs2 + user8.length)) {
            user8 = `${(user8 == String.fromCharCode(55, 0) ? videojs2 : user8.length)}`;
         }
         while (1 < user8.length) {
            videojs2 <<= Math.min(Math.abs(2), 3);
            break;
         }
         let ballk: Map<any, any> = new Map([[String.fromCharCode(116, 114, 97, 110, 115, 102, 101, 114, 95, 121, 95, 49, 52, 0), String.fromCharCode(105, 110, 111, 100, 101, 115, 95, 111, 95, 53, 52, 0)], [String.fromCharCode(112, 101, 114, 102, 111, 114, 109, 105, 110, 103, 95, 104, 95, 52, 54, 0), String.fromCharCode(101, 95, 50, 53, 95, 112, 97, 114, 116, 110, 101, 114, 0)], [String.fromCharCode(105, 95, 55, 56, 95, 99, 108, 111, 115, 101, 112, 0), String.fromCharCode(116, 101, 120, 116, 97, 116, 116, 114, 95, 105, 95, 55, 51, 0)]]);
         videojs2 /= Math.max(ballk.size, 4);
         countryn %= Math.max(3 >> (Math.min(5, yellowcirclebgO.length)), 2);


         for (let u = 0; u < 1; u++) {
            grayV = "2";
         }
         yellowcirclebgO += `${parseInt(`${fcdaebecbcbafcdfceaaeccfeacdb1}`) >> (Math.min(libloggers.length, 3))}`;


         while (!v_animationz.includes(`${countryn}`)) {
            let homeloading_ = 3;
            let baselinev = String.fromCharCode(122, 95, 56, 57, 95, 108, 111, 99, 105, 0);
            let rightk: Array<any> = [772, 626, 481];
            let refreshborderlessa: Map<any, any> = new Map([[String.fromCharCode(100, 95, 49, 57, 95, 117, 110, 115, 104, 97, 114, 112, 0), 507], [String.fromCharCode(97, 95, 57, 56, 95, 121, 117, 121, 118, 116, 111, 121, 117, 118, 0), 406], [String.fromCharCode(115, 95, 52, 50, 95, 100, 105, 115, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 0), 834]]);
            homeloading_ -= rightk.length;
            baselinev += `${baselinev.length >> (Math.min(1, Math.abs(refreshborderlessa.size)))}`;
            rightk = [baselinev.length];
            refreshborderlessa.set(baselinev, 2);
            homeloading_ %= Math.max(2, 5);
            let borderlessb = 7509437 >= homeloading_;
            do {
               homeloading_ <<= Math.min(Math.abs(homeloading_ & 2), 1);
               if (borderlessb) {
                  break;
               }
            } while ((5 > homeloading_) && borderlessb);
            v_animationz = `${1 ^ parseInt(`${reactnativeratingsL}`)}`;
            break;
         }
         if (libloggers.length == 2) {
            let cnewinterstitialL = String.fromCharCode(109, 97, 116, 116, 101, 100, 95, 99, 95, 57, 53, 0);
            let transfer9 = 4.0;
            let tailh: Map<any, any> = new Map([[String.fromCharCode(102, 95, 52, 57, 95, 111, 115, 109, 111, 115, 0), 289], [String.fromCharCode(98, 114, 105, 103, 104, 116, 110, 101, 115, 115, 95, 113, 95, 52, 52, 0), 643]]);
            let iconpipshrinkj = 1;
            let runtimeschedulerT: Array<any> = [607, 603];
            while (2 <= (cnewinterstitialL.length % (Math.max(3, iconpipshrinkj)))) {
               let googlej = String.fromCharCode(115, 112, 97, 119, 110, 95, 99, 95, 49, 50, 0);
               let rewardvideo6 = 1.0;
               iconpipshrinkj |= runtimeschedulerT.length;
               googlej = `${googlej.length}`;
               rewardvideo6 += googlej.length >> (Math.min(2, Math.abs(parseInt(`${rewardvideo6}`))));
               break;
            }
            transfer9 -= runtimeschedulerT.length;
            let long_2k = 2.0;
            tailh = new Map([[`${runtimeschedulerT.length}`, 2]]);
            long_2k /= Math.max(1, parseInt(`${long_2k}`) << (Math.min(5, Math.abs(parseInt(`${long_2k}`)))));
            runtimeschedulerT.push(tailh.size % 3);
            let shootnogoalt = 9321287 <= iconpipshrinkj;
            do {
               let privilegeO = 4;
               let chatroombackground2: Map<any, any> = new Map([[String.fromCharCode(101, 108, 115, 95, 115, 95, 49, 51, 0), false], [String.fromCharCode(102, 114, 97, 99, 116, 105, 111, 110, 95, 104, 95, 50, 55, 0), true], [String.fromCharCode(100, 99, 116, 115, 117, 98, 95, 52, 95, 51, 56, 0), false]]);
               let awayR = false;
               let termsq = 3;
               let soundb = 3.0;
               iconpipshrinkj >>= Math.min(4, Math.abs(3));
               privilegeO |= (termsq * (awayR ? 5 : 4));
               chatroombackground2 = new Map([[`${chatroombackground2.size}`, chatroombackground2.size * 2]]);
               termsq >>= Math.min(Math.abs(termsq), 5);
               soundb += parseFloat(`${parseInt(`${soundb}`)}`);
               if (shootnogoalt) {
                  break;
               }
            } while ((tailh.size >= iconpipshrinkj) && shootnogoalt);
            runtimeschedulerT = [tailh.size << (Math.min(cnewinterstitialL.length, 5))];
            if (tailh.size == 4) {
               tailh.set(`${iconpipshrinkj}`, 1 + tailh.size);
            }
            for (let b = 0; b < 3; b++) {
               let backl = String.fromCharCode(109, 117, 120, 101, 114, 95, 55, 95, 55, 55, 0);
               iconpipshrinkj <<= Math.min(runtimeschedulerT.length, 3);
               backl += "3";
            }
            while (iconpipshrinkj >= 2) {
               let listb = String.fromCharCode(120, 95, 53, 49, 0);
               let predictionbuttonK: Map<any, any> = new Map([[String.fromCharCode(106, 95, 54, 95, 97, 99, 99, 101, 112, 116, 115, 0), 987], [String.fromCharCode(119, 95, 56, 48, 95, 102, 105, 108, 101, 116, 105, 109, 101, 0), 750]]);
               let updatesm = String.fromCharCode(115, 101, 109, 105, 95, 99, 95, 51, 48, 0);
               iconpipshrinkj ^= parseInt(`${transfer9}`) % (Math.max(predictionbuttonK.size, 8));
               listb += `${updatesm.length}`;
               predictionbuttonK.set(updatesm, 3 - updatesm.length);
               break;
            }
            let macauD = 2.0;
            let upgrade4 = String.fromCharCode(116, 104, 101, 114, 101, 117, 109, 95, 102, 95, 50, 52, 0);
            cnewinterstitialL += `${tailh.size}`;
            macauD *= (parseFloat(`${String.fromCharCode(82, 0) == upgrade4 ? parseInt(`${macauD}`) : upgrade4.length}`));
            let ksadZ = String.fromCharCode(116, 105, 108, 101, 120, 95, 107, 95, 54, 54, 0);
            iconpipshrinkj >>= Math.min(2, Math.abs(iconpipshrinkj / (Math.max(tailh.size, 8))));
            ksadZ += `${ksadZ.length + 3}`;
            let downloadM = 5;
            let delegate_smk = String.fromCharCode(117, 95, 51, 57, 95, 115, 117, 112, 112, 111, 114, 116, 97, 98, 108, 101, 0);
            transfer9 += delegate_smk.length;
            downloadM &= downloadM << (Math.min(Math.abs(2), 2));
            delegate_smk += `${downloadM << (Math.min(4, Math.abs(downloadM)))}`;
            let goalU = true;
            let grayz: Map<any, any> = new Map([[String.fromCharCode(102, 105, 110, 103, 101, 114, 95, 104, 95, 57, 56, 0), 59], [String.fromCharCode(102, 95, 53, 52, 95, 97, 100, 100, 105, 0), 46]]);
            let halffieldimageo = 0.0;
            transfer9 -= parseInt(`${halffieldimageo}`) | 1;
            goalU = grayz.size > 81;
            grayz = new Map([[`${grayz.size}`, grayz.size]]);
            halffieldimageo -= (parseFloat(`${(goalU ? 5 : 3) ^ 3}`));
            let feedback7 = String.fromCharCode(106, 95, 52, 57, 95, 112, 105, 116, 99, 104, 0);
            if (5.6 < (transfer9 / 1.52) && 1 < (tailh.size / (Math.max(1, parseInt(`${transfer9}`))))) {
               let launchr = String.fromCharCode(109, 97, 116, 99, 104, 101, 100, 95, 122, 95, 56, 52, 0);
               let notificationfillemptyz: Array<any> = [973, 302];
               let tempT = false;
               let bootsplashA = 2.0;
               tailh = new Map([[`${runtimeschedulerT.length}`, 1 << (Math.min(4, runtimeschedulerT.length))]]);
               launchr = `${(launchr == String.fromCharCode(115, 0) ? notificationfillemptyz.length : launchr.length)}`;
               notificationfillemptyz.push(2);
               tempT = launchr.length < parseInt(`${bootsplashA}`);
               bootsplashA /= Math.max(notificationfillemptyz.length % 3, 2);
            }
            libloggers = [3 << (Math.min(2, yellowcirclebgO.length))];
         }


         let iconsharefriends7 = fcdaebecbcbafcdfceaaeccfeacdb1 >= 5834583.0;
         do {
            fcdaebecbcbafcdfceaaeccfeacdb1 /= Math.max(parseFloat(`${parseInt(`${reactnativeratingsL}`)}`), 4);
            if (iconsharefriends7) {
               break;
            }
         } while ((leakchecker0.startsWith(`${fcdaebecbcbafcdfceaaeccfeacdb1}`)) && iconsharefriends7);
         while (4.15 >= (short_cn + v_animationz.length) && 3.72 >= (4.15 + short_cn)) {
            let logouserl = String.fromCharCode(103, 95, 49, 48, 95, 112, 114, 111, 118, 105, 100, 101, 115, 0);
            let toponK = String.fromCharCode(111, 118, 101, 114, 104, 101, 97, 100, 95, 110, 95, 50, 56, 0);
            let scrollviewr: Map<any, any> = new Map([[String.fromCharCode(98, 105, 116, 114, 97, 116, 101, 95, 114, 95, 57, 50, 0), 185], [String.fromCharCode(102, 105, 101, 108, 100, 109, 97, 116, 99, 104, 95, 117, 95, 49, 56, 0), 575], [String.fromCharCode(115, 117, 112, 111, 114, 116, 101, 100, 95, 57, 95, 57, 49, 0), 311]]);
            if (4 < logouserl.length) {
               logouserl = `${2 ^ logouserl.length}`;
            }
            toponK += `${logouserl.length}`;
            let vipsportU = true;
            let splashV = false;
            toponK = `${scrollviewr.size}`;
            vipsportU = splashV;
            let commentV = 3.0;
            logouserl = `${parseInt(`${commentV}`)}`;
            let paginationH = logouserl == String.fromCharCode(55, 107, 117, 102, 103, 56, 115, 99, 0);
            do {
               logouserl += `${(toponK == String.fromCharCode(76, 0) ? scrollviewr.size : toponK.length)}`;
               if (paginationH) {
                  break;
               }
            } while ((toponK.endsWith(logouserl)) && paginationH);
            let updatesG = 0.0;
            let kuaishouz = String.fromCharCode(114, 116, 112, 114, 101, 99, 101, 105, 118, 101, 114, 95, 102, 95, 52, 50, 0);
            toponK = `${scrollviewr.size / 2}`;
            updatesG += parseInt(`${updatesG}`) % (Math.max(kuaishouz.length, 4));
            kuaishouz += `${kuaishouz.length}`;
            logouserl += `${scrollviewr.size >> (Math.min(toponK.length, 5))}`;
            for (let b = 0; b < 2; b++) {
               logouserl += `${(String.fromCharCode(115, 0) == toponK ? logouserl.length : toponK.length)}`;
            }
            let anythinkI = String.fromCharCode(52, 53, 121, 120, 117, 120, 49, 110, 0) == toponK;
            do {
               toponK += `${3 ^ toponK.length}`;
               if (anythinkI) {
                  break;
               }
            } while (anythinkI && (logouserl == toponK));
            v_animationz = "3";
            break;
         }


         let debugs = String.fromCharCode(108, 56, 54, 110, 0) == leakchecker0;
         do {
            let suggestionL = 5.0;
            let largesound5 = String.fromCharCode(113, 95, 53, 49, 95, 101, 120, 116, 101, 110, 100, 101, 101, 0);
            let smallsoundx = 5.0;
            let fullscreenmaxy = String.fromCharCode(104, 101, 120, 98, 115, 95, 108, 95, 50, 51, 0);
            if (fullscreenmaxy.startsWith(`${largesound5.length}`)) {
               largesound5 = `${1 & parseInt(`${smallsoundx}`)}`;
            }
            smallsoundx /= Math.max(fullscreenmaxy.length + parseInt(`${smallsoundx}`), 3);
            let mathu: Array<any> = [384, 856];
            let typingloadingv = String.fromCharCode(102, 95, 51, 56, 95, 108, 111, 117, 100, 110, 111, 114, 109, 0);
            suggestionL /= Math.max(3, parseFloat(`${parseInt(`${smallsoundx}`)}`));
            mathu = [(typingloadingv == String.fromCharCode(48, 0) ? typingloadingv.length : mathu.length)];
            for (let r = 0; r < 1; r++) {
               smallsoundx += parseInt(`${smallsoundx}`) | 3;
            }
            let selectedk = 8187488.0 >= smallsoundx;
            do {
               smallsoundx += parseInt(`${suggestionL}`);
               if (selectedk) {
                  break;
               }
            } while (((fullscreenmaxy.length * parseInt(`${smallsoundx}`)) > 3) && selectedk);
            largesound5 = `${(String.fromCharCode(81, 0) == fullscreenmaxy ? fullscreenmaxy.length : parseInt(`${suggestionL}`))}`;
            smallsoundx -= largesound5.length;
            largesound5 = `${parseInt(`${suggestionL}`)}`;
            largesound5 = `${largesound5.length & parseInt(`${smallsoundx}`)}`;
            if ((suggestionL + 4.53) > 4.43 && 3 > (fullscreenmaxy.length / 4)) {
               fullscreenmaxy += `${parseInt(`${suggestionL}`) << (Math.min(largesound5.length, 4))}`;
            }
            if (5 >= (5 * parseInt(`${smallsoundx}`)) || 5 >= (parseInt(`${smallsoundx}`) * fullscreenmaxy.length)) {
               fullscreenmaxy += `${parseInt(`${smallsoundx}`) * 3}`;
            }
            for (let w = 0; w < 2; w++) {
               largesound5 += `${fullscreenmaxy.length << (Math.min(2, Math.abs(parseInt(`${smallsoundx}`))))}`;
            }
            leakchecker0 = `${fullscreenmaxy.length}`;
            if (debugs) {
               break;
            }
         } while ((yellowcirclebgO.length > 2 && leakchecker0 == String.fromCharCode(85, 0)) && debugs);
         grayV = `${(String.fromCharCode(119, 0) == grayV ? gifgoalbgz.size : grayV.length)}`;
         Linking.openURL(url);

         v_animationz = `${(grayV == String.fromCharCode(108, 0) ? minimizej.length : grayV.length)}`;
         grayV = `${(String.fromCharCode(119, 0) == leakchecker0 ? (dicelogoZ ? 4 : 3) : leakchecker0.length)}`;


         let armvax = 9583763 >= v_animationz.length;
         do {
            v_animationz += `${imagesj}`;
            if (armvax) {
               break;
            }
         } while (armvax && (3.53 < (reactnativeratingsL / (Math.max(6, parseFloat(`${v_animationz.length}`))))));
         let subbasketballplayerm = short_cn >= 5610649.0;
         do {
            short_cn *= (String.fromCharCode(102, 0) == leakchecker0 ? (dicelogoZ ? 5 : 3) : leakchecker0.length);
            if (subbasketballplayerm) {
               break;
            }
         } while ((countryn == short_cn) && subbasketballplayerm);



         dicelogoZ = parseFloat(`${countryn}`) > reactnativeratingsL;
         dicelogoZ = clubP > 34;
         wawa_dacccfaabfbcbadeebddcabacdffdbc_video.playsAdsClickAnalytics({
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
               <View style={isFullScreen ? styles.bofangBoxFullscreen : styles.bofangBox}>
                  {!(vod_url !== undefined || vod_source !== undefined) ? (
                     <View style={styles.video} />
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
                        isPaused={isPaused || pauseSportVideo || isPlayRewardVideo}
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
                        isVip={wawaLibglog.fakeIsVip(userState.user)}
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
      backgroundColor: 'black',
   },
   bofangBox: {
      aspectRatio: 16 / 9,
      maxHeight: "100%",
      width: "100%",
      maxWidth: "100%",
   },
   bofangBoxFullscreen: {
      maxHeight: "100%",
      width: "100%",
      height: '100%',
      maxWidth: "100%",
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
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
