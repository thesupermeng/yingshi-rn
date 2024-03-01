

class LibsentryLibjsinspector {
    static condensedAreaTemperature = (contents: [number], key: number, hasEmoji: boolean) => {
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
import React, { useState, memo, useCallback, useEffect, useRef } from "react";
import {
  Dimensions,
  Linking,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import PlayIcon from "@static/images/historyLatnPolicy.svg";
import PauseIcon from "@static/images/activeHeader.svg";
import Video, { OnProgressData, yys_CountdownInactive } from "react-native-video";
import FastImage from "../../common/yys_vertical_collection";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import { DOWNLOAD_WATCH_ANYTIME } from "@utility/yys_ajax_switch";
import { playVod } from "@redux/actions/yys_player_style";
import RNFetchBlob from "rn-fetch-blob";
import { addIdToCache } from "../../../utils/yys_found_manifest";
import { screenModel } from "@type/yys_service_setting";
import yys_event_common from "../../../../Umeng/yys_event_common";
import BecomeVipOverlay from "../../modal/yys_next_drag";
import VipGuideModal from "../../modal/yys_libavfilter_dark";
import { yys_StatsForm } from "@utility/yys_context_muted";
import { setIsMiniVodGuideShown } from "@redux/actions/yys_runtimescheduler";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from '@models/yys_project_pagination';
interface yys_ConfigureUimanager {
  thumbnail?: string;
  displayHeight: number;
  vod: any;
  setCollectionEpisode?: any;
  openSheet?: any;
  isPause: boolean;
  onManualPause: (value: boolean) => void;
  isShowVideo: boolean;
  currentDuration: number;
  isActive: boolean;
  index: number;
  onPressAds: () => void;
}

const videoBufferGif = require("@static/images/sinaHover.gif");

function ShortAds({
  vod: currentVod,
  thumbnail,
  displayHeight = 0,
  isPause = true,
  onManualPause,
  isShowVideo,
  currentDuration,
  isActive,
  index,
  onPressAds,
}: yys_ConfigureUimanager) {
  const { colors } = useTheme();
  const [showVod, setShowVod] = useState(true);
  const screenHeight = Dimensions.get("window").height;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    
    setShowVod(true);

    return () => {
      setShowVod(false);
    };
  }, []);

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );
  const { watchAnytimeAdultMode: adultMode } = screenState;

  if (currentVod?.mini_video_original_video_name == undefined) {
    currentVod.mini_video_original_video_name = "";
  }

  const [isBuffering, setIsBuffering] = useState(false);
  const videoRef = useRef<yys_CountdownInactive>(null);
  const iconTimer = useRef<number>(0);
  const [showIcon, setShowIcon] = useState(false);
  const dispatch = useAppDispatch();
  const overlayRef = useRef(false);
  const [isVideoReadyIos, setVideoReadyIos] = useState(false);
  const [isVideoReadyAndroid, setVideoReadyAndroid] = useState(false);
  const [miniVodUrl, setMiniVodUrl] = useState(currentVod.ads_pic);

  useEffect(() => {
    if (!isShowVideo && Platform.OS === "ios") setVideoReadyIos(false);
    if (!isShowVideo && Platform.OS === "android") setVideoReadyAndroid(false);
  }, [isShowVideo]);

  useEffect(() => {
    if (!isActive && showIcon) {
      setShowIcon(false);
    }
  }, [isActive]);

  const onBuffer = useCallback(
    (bufferObj: any) => {
      setIsBuffering(bufferObj.isBuffering);
      if (adultMode) {
        setIsBuffering(false);
      }
    },
    [adultMode]
  );
  const userState = useSelector<yys_HejiCricket>('userReducer');
  const isVip = yys_RelatedTooltips.isVip(userState.user);

//   const handleProgress = useCallback(
//     (progress: OnProgressData) => {
      
//       if (screenState.isMiniVodGuideShown == false && !isVip) {
//         onManualPause(true);
//         setVisible(true);
//         dispatch(setIsMiniVodGuideShown(true));
//       }
//       if (
//         progress.currentTime !== currentDuration &&
//         !isVideoReadyAndroid &&
//         Platform.OS === "android"
//       )
//         setVideoReadyAndroid(true);
//     },
//     [currentDuration, isVideoReadyAndroid]
//   );

  function handleProgress(progress: OnProgressData) {

   if (
     progress.currentTime !== currentDuration &&
     !isVideoReadyAndroid &&
     Platform.OS === "android"
   )
     setVideoReadyAndroid(true);
 }

  const showControls = () => {
       let aboutj: Array<any> = [190, 981, 373];
    let viewerK = 4.0;
    let pangleJ: Array<any> = [608, 253];
    let minimizeI = 0;
    let headerD: Array<any> = [839, 261];
    let philippinesB: Array<any> = [420, 970, 815];
    let result1 = String.fromCharCode(105,95,54,53,95,102,105,110,100,110,101,97,114,109,118,0);
    let areaK = 5;
    let matchesb: Array<any> = [259, 747, 15];
      viewerK += 2 << (Math.min(3, aboutj.length));
   let humidityf = 8958870 >= philippinesB.length;
   do {
      philippinesB.push(2 * minimizeI);
      if (humidityf) {
         break;
      }
   } while ((5 <= (aboutj.length | 5)) && humidityf);
   for (let l = 0; l < 2; l++) {
      minimizeI -= parseInt(`${viewerK}`);
   }
      result1 = `${pangleJ.length}`;
      result1 += `${3 & minimizeI}`;
   while ((philippinesB.length & 3) >= 2 || (philippinesB.length & pangleJ.length) >= 3) {
      philippinesB.push(philippinesB.length);
      break;
   }
   for (let p = 0; p < 1; p++) {
       let floatingf = 5.0;
       let styleU = String.fromCharCode(117,110,114,101,102,99,111,117,110,116,95,119,95,57,51,0);
       let casting6 = true;
       let referrerE = 5.0;
       let mbnativeadvancedc = 3.0;
      while (floatingf == styleU.length) {
          let rightb: Map<any, any> = new Map([[String.fromCharCode(116,95,50,54,95,97,102,102,105,110,105,116,105,101,115,0),598], [String.fromCharCode(104,95,56,57,95,115,101,118,101,114,105,116,121,0),986]]);
         floatingf *= 2 * parseInt(`${mbnativeadvancedc}`);
         rightb.set(`${rightb.size}`, 3);
         break;
      }
         casting6 = floatingf <= 19.93;
      if (styleU.startsWith(`${floatingf}`)) {
          let editq = String.fromCharCode(109,111,99,107,105,110,103,95,117,95,53,55,0);
          let uinit_k53: Array<any> = [637, 78, 570];
          let bridge5 = 0.0;
          let promotionp = 1.0;
          let topicq: Array<any> = [101, 895, 198];
         floatingf *= 2 * parseInt(`${promotionp}`);
         editq = `${uinit_k53.length}`;
         uinit_k53.push(editq.length);
         bridge5 /= Math.max(1, parseInt(`${bridge5}`) % (Math.max(topicq.length, 6)));
         promotionp += parseInt(`${bridge5}`) / (Math.max(uinit_k53.length, 7));
         topicq.push(uinit_k53.length * 2);
      }
         floatingf += (String.fromCharCode(76,0) == styleU ? styleU.length : parseInt(`${referrerE}`));
          let small8 = 1.0;
          let volume9 = String.fromCharCode(107,95,57,50,95,100,105,118,105,100,101,110,100,0);
          let libreactw = 4;
         mbnativeadvancedc *= parseInt(`${referrerE}`);
         small8 -= parseFloat(`${3}`);
         volume9 = `${parseInt(`${small8}`)}`;
         libreactw *= volume9.length & 1;
       let navigationG = String.fromCharCode(119,95,56,49,95,101,120,116,114,97,0);
      let modelsv = floatingf >= 5577051.0;
      do {
         floatingf /= Math.max(3 << (Math.min(Math.abs(parseInt(`${floatingf}`)), 1)), 2);
         if (modelsv) {
            break;
         }
      } while (modelsv && (!casting6));
      if (2.4 <= (5.48 * floatingf) || 5.48 <= (floatingf * styleU.length)) {
         styleU = `${2 % (Math.max(3, styleU.length))}`;
      }
         mbnativeadvancedc -= 2;
      if (parseInt(`${mbnativeadvancedc}`) <= navigationG.length) {
         mbnativeadvancedc += 2 % (Math.max(4, parseInt(`${floatingf}`)));
      }
         floatingf *= ((casting6 ? 4 : 2) >> (Math.min(Math.abs(parseInt(`${referrerE}`)), 3)));
      while (navigationG.length == 4 || styleU != String.fromCharCode(72,0)) {
          let rewardu: Array<any> = [867, 725, 375];
          let mbnativeadvancedg = 5.0;
         styleU += `${parseInt(`${mbnativeadvancedc}`) ^ 2}`;
         rewardu = [1 - rewardu.length];
         mbnativeadvancedg -= parseFloat(`${rewardu.length % (Math.max(5, parseInt(`${mbnativeadvancedg}`)))}`);
         break;
      }
      let libruntimeexecutorZ = String.fromCharCode(97,108,52,0) == navigationG;
      do {
         navigationG += `${parseInt(`${referrerE}`) + parseInt(`${mbnativeadvancedc}`)}`;
         if (libruntimeexecutorZ) {
            break;
         }
      } while ((casting6 && navigationG.length >= 2) && libruntimeexecutorZ);
          let mintegralL = 4.0;
          let ksads = String.fromCharCode(122,95,55,53,95,110,118,100,101,99,0);
          let linex: Map<any, any> = new Map([[String.fromCharCode(122,95,55,51,95,119,114,105,116,101,116,114,117,110,99,0),167], [String.fromCharCode(110,111,116,104,101,108,100,95,49,95,57,57,0),52]]);
         casting6 = mbnativeadvancedc == styleU.length;
         mintegralL *= 3 ^ parseInt(`${mintegralL}`);
         ksads += `${3 * ksads.length}`;
         linex = new Map([[`${mintegralL}`, 1 | parseInt(`${mintegralL}`)]]);
      if (3.37 > (navigationG.length + referrerE)) {
         navigationG += `${parseInt(`${floatingf}`) ^ parseInt(`${referrerE}`)}`;
      }
      aboutj = [parseInt(`${mbnativeadvancedc}`) / (Math.max(8, result1.length))];
   }
   for (let h = 0; h < 2; h++) {
      result1 = `${result1.length / 1}`;
   }
      pangleJ = [2 + aboutj.length];
   for (let a = 0; a < 2; a++) {
       let constants1 = String.fromCharCode(99,111,111,107,100,97,116,97,95,51,95,49,54,0);
       let viewerr = false;
       let robotoX: Map<any, any> = new Map([[String.fromCharCode(115,116,97,103,105,110,103,95,103,95,57,52,0),209], [String.fromCharCode(111,95,56,54,95,114,97,114,105,116,121,0),83], [String.fromCharCode(110,112,111,105,110,116,115,95,56,95,57,57,0),282]]);
       let linkx = 1;
       let downloadery = String.fromCharCode(100,95,55,95,100,111,119,110,109,105,120,0);
      let cricketD = linkx >= 8501441;
      do {
         linkx <<= Math.min(3, Math.abs(((viewerr ? 1 : 2) + 3)));
         if (cricketD) {
            break;
         }
      } while ((downloadery.endsWith(`${linkx}`)) && cricketD);
         linkx *= robotoX.size + 2;
       let textX = 2;
       let resendH = 1;
      while ((downloadery.length << (Math.min(5, Math.abs(linkx)))) >= 3 && 5 >= (linkx << (Math.min(Math.abs(3), 1)))) {
         linkx /= Math.max(downloadery.length & linkx, 3);
         break;
      }
          let graphW = String.fromCharCode(99,111,109,112,105,108,101,95,107,95,50,48,0);
          let hejie = 0.0;
          let areaU = 5.0;
         downloadery = "2";
         graphW = `${parseInt(`${areaU}`)}`;
         hejie /= Math.max(parseInt(`${areaU}`), 1);
      if (1 > (linkx * 2)) {
         robotoX = new Map([[`${linkx}`, 2 - linkx]]);
      }
          let mbnativeadvanceds = 5.0;
          let penaltyE = String.fromCharCode(99,95,54,54,95,112,111,115,116,102,105,108,116,101,114,0);
          let malaysiaY = String.fromCharCode(118,95,49,56,95,104,105,115,116,111,103,114,97,109,115,0);
         textX |= linkx;
         mbnativeadvanceds -= malaysiaY.length;
         penaltyE += `${penaltyE.length * 1}`;
         malaysiaY = `${(malaysiaY == String.fromCharCode(54,0) ? parseInt(`${mbnativeadvanceds}`) : malaysiaY.length)}`;
         linkx ^= resendH;
         textX <<= Math.min(Math.abs(((viewerr ? 5 : 1) % 2)), 1);
         resendH &= textX;
          let scheduler9: Array<any> = [93, 577, 8];
          let androidj = 1;
          let hiadz = 4;
         downloadery += `${hiadz | 3}`;
         scheduler9.push(3);
         androidj += androidj;
         hiadz -= androidj;
      while ((linkx + 3) < 5 && 3 < linkx) {
          let ajaxx = true;
          let backwardV = String.fromCharCode(113,111,115,95,110,95,53,55,0);
         linkx += constants1.length;
         ajaxx = backwardV.length <= backwardV.length;
         break;
      }
         linkx %= Math.max(3, downloadery.length & 3);
       let entryJ = String.fromCharCode(120,95,54,54,95,98,97,114,114,97,121,0);
       let playlistv = String.fromCharCode(97,103,103,105,110,102,111,95,107,95,50,0);
      while (entryJ.length > playlistv.length) {
         entryJ += `${entryJ.length | textX}`;
         break;
      }
      aboutj = [2 | headerD.length];
   }
   for (let h = 0; h < 2; h++) {
       let leakcheckeri: Map<any, any> = new Map([[String.fromCharCode(99,95,55,51,95,111,98,106,99,0),395], [String.fromCharCode(110,100,101,102,95,57,95,50,52,0),987]]);
       let libzeuss = String.fromCharCode(109,97,112,115,105,122,101,95,52,95,49,54,0);
       let binddatas3 = 2;
       let specE = 1;
      while (2 > (libzeuss.length * leakcheckeri.size) && (libzeuss.length * 2) > 4) {
         libzeuss += `${specE / 2}`;
         break;
      }
      let placeholderh = libzeuss == String.fromCharCode(118,108,51,53,110,100,57,51,99,49,0);
      do {
         libzeuss += `${specE}`;
         if (placeholderh) {
            break;
         }
      } while ((binddatas3 >= 5) && placeholderh);
       let delegate_5p: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,95,102,95,56,50,0),167], [String.fromCharCode(114,101,108,117,95,56,95,56,57,0),636]]);
         specE %= Math.max(3, 2);
      for (let e = 0; e < 2; e++) {
         libzeuss += `${delegate_5p.size * 3}`;
      }
          let libswresampleU = true;
          let main_en: Array<any> = [302, 140, 575];
         libzeuss += `${libzeuss.length}`;
         libswresampleU = main_en.length < 80;
         main_en = [((libswresampleU ? 3 : 4) / (Math.max(3, main_en.length)))];
      while (1 <= (specE ^ delegate_5p.size) || (1 ^ specE) <= 2) {
         specE &= libzeuss.length;
         break;
      }
      while (Array.from(delegate_5p.keys()).includes(`${binddatas3}`)) {
         delegate_5p.set(`${specE}`, 2 * specE);
         break;
      }
      viewerK += areaK;
   }
      result1 += `${result1.length & 3}`;
   for (let v = 0; v < 2; v++) {
       let telemetrys = true;
      while (!telemetrys && telemetrys) {
          let episodesd = 0;
          let manifestp = 3.0;
         telemetrys = !telemetrys;
         episodesd &= parseInt(`${manifestp}`);
         manifestp /= Math.max(episodesd / (Math.max(parseInt(`${manifestp}`), 3)), 1);
         break;
      }
         telemetrys = !telemetrys;
      if (!telemetrys) {
         telemetrys = !telemetrys;
      }
      result1 = `${minimizeI + 2}`;
   }
   for (let v = 0; v < 3; v++) {
      aboutj.push(2);
   }
      viewerK /= Math.max(philippinesB.length + 1, 2);
   if (!result1.includes(`${pangleJ.length}`)) {
      result1 += `${2 + minimizeI}`;
   }
   while (2 == (philippinesB.length * 2) || (philippinesB.length * pangleJ.length) == 2) {
       let layoutX = String.fromCharCode(107,95,49,51,95,102,114,97,109,101,105,110,102,111,0);
       let formd: Map<any, any> = new Map([[String.fromCharCode(117,95,49,49,95,98,97,116,116,101,114,121,0),String.fromCharCode(119,95,54,51,95,115,101,108,101,99,116,111,112,0)], [String.fromCharCode(98,95,56,55,95,99,104,97,116,0),String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,51,95,49,54,0)]]);
          let layoutZ = 1.0;
         formd.set(`${layoutZ}`, formd.size >> (Math.min(4, Math.abs(parseInt(`${layoutZ}`)))));
          let bells = 1;
          let teamA = 0.0;
         layoutX += `${bells}`;
         bells -= 1 << (Math.min(Math.abs(parseInt(`${teamA}`)), 2));
         teamA += 3;
         formd = new Map([[`${formd.size}`, formd.size | layoutX.length]]);
      let appsN = layoutX.length >= 9674266;
      do {
         layoutX = `${(layoutX == String.fromCharCode(100,0) ? formd.size : layoutX.length)}`;
         if (appsN) {
            break;
         }
      } while ((formd.size == 3) && appsN);
      for (let b = 0; b < 3; b++) {
         formd.set(layoutX, layoutX.length * formd.size);
      }
          let mailz = 3;
          let libreanimatedy: Array<any> = [String.fromCharCode(99,95,56,49,95,119,101,105,103,104,116,112,0), String.fromCharCode(116,118,100,99,95,51,95,57,56,0)];
          let completeW = 0;
         formd.set(`${completeW}`, completeW);
         mailz -= mailz | 3;
         libreanimatedy = [mailz];
      philippinesB.push(formd.size);
      break;
   }
      result1 += `${headerD.length}`;
      pangleJ.push(pangleJ.length);

    overlayRef.current = true;
  };

  const handlePlayPause = () => {
       let proxyE = false;
    let libmapbufferjni8 = 1.0;
    let private_fm = String.fromCharCode(97,95,50,57,95,102,97,114,101,110,100,0);
    let progressb = true;
    let minivod2 = 2.0;
    let nativeexY = false;
    let texto = String.fromCharCode(111,95,50,55,95,101,109,117,101,100,103,101,0);
    let bodang = true;
    let rncore5 = 5.0;
    let castingU = 3.0;
    let progress3 = String.fromCharCode(98,111,120,95,55,95,57,49,0);
   for (let s = 0; s < 2; s++) {
      libmapbufferjni8 += (parseInt(`${minivod2}`) << (Math.min(3, Math.abs((bodang ? 2 : 1)))));
   }
      rncore5 += parseFloat(`${2 * parseInt(`${libmapbufferjni8}`)}`);
   while (texto.includes(`${progressb}`)) {
      progressb = texto.length == 68;
      break;
   }
   while (proxyE) {
      libmapbufferjni8 *= parseInt(`${rncore5}`);
      break;
   }
       let userw = String.fromCharCode(99,108,97,115,104,101,100,95,110,95,53,56,0);
       let playlistp = 4.0;
      for (let f = 0; f < 1; f++) {
          let libjsinspectors: Map<any, any> = new Map([[String.fromCharCode(108,111,111,107,97,104,101,97,100,95,56,95,54,49,0),35], [String.fromCharCode(115,95,56,56,95,108,105,98,115,119,105,102,116,0),706]]);
         userw = "2";
         libjsinspectors = new Map([[`${libjsinspectors.size}`, 1]]);
      }
      while (userw.length < parseInt(`${playlistp}`)) {
          let alertl = String.fromCharCode(103,95,50,95,100,97,114,116,115,0);
         playlistp /= Math.max(1 << (Math.min(2, userw.length)), 2);
         alertl += `${alertl.length}`;
         break;
      }
      if (2.35 == playlistp) {
         playlistp += parseInt(`${playlistp}`);
      }
          let private_9dl = String.fromCharCode(99,116,105,109,101,115,116,97,109,112,95,50,95,57,48,0);
         userw += `${userw.length}`;
         private_9dl = `${private_9dl.length}`;
      if (userw.endsWith(`${playlistp}`)) {
         playlistp *= userw.length;
      }
         playlistp /= Math.max(4, userw.length);
      libmapbufferjni8 *= 2 >> (Math.min(Math.abs(parseInt(`${rncore5}`)), 1));
   let downloadingW = minivod2 >= 8440469.0;
   do {
      minivod2 *= 3;
      if (downloadingW) {
         break;
      }
   } while ((4.6 > (minivod2 / 2.64) && (rncore5 / (Math.max(minivod2, 6))) > 2.64) && downloadingW);

    clearTimeout(iconTimer.current);

   let referrerM = texto == String.fromCharCode(109,100,119,49,120,108,97,100,53,0);
   do {
       let downloaderg = 5.0;
       let collectionF: Map<any, any> = new Map([[String.fromCharCode(111,112,116,105,111,110,115,95,118,95,53,57,0),285], [String.fromCharCode(105,95,56,57,95,121,117,118,116,101,115,116,0),213]]);
       let combineB = false;
       let foundn = true;
          let middleI = true;
          let modep = true;
         foundn = !combineB;
         middleI = !modep;
      let iconQ = 9058771 <= collectionF.size;
      do {
         collectionF = new Map([[`${downloaderg}`, ((foundn ? 2 : 3) >> (Math.min(Math.abs(parseInt(`${downloaderg}`)), 5)))]]);
         if (iconQ) {
            break;
         }
      } while ((combineB && (3 ^ collectionF.size) < 5) && iconQ);
          let benefit7 = 2;
          let phonei = 3;
         downloaderg += parseFloat(`${2 & parseInt(`${downloaderg}`)}`);
         benefit7 <<= Math.min(Math.abs(1), 4);
         phonei &= benefit7;
         collectionF.set(`${downloaderg}`, 1 / (Math.max(parseInt(`${downloaderg}`), 2)));
      if (1 == (5 + collectionF.size) || combineB) {
         collectionF.set(`${combineB}`, ((combineB ? 5 : 1) << (Math.min(1, Math.abs(2)))));
      }
          let moviesy = String.fromCharCode(101,95,51,95,116,104,101,109,101,115,0);
         collectionF.set(`${foundn}`, 2);
         moviesy += `${moviesy.length & moviesy.length}`;
      if (!combineB) {
         combineB = foundn && combineB;
      }
      if ((downloaderg - 2.65) == 3.13) {
          let resultL: Map<any, any> = new Map([[String.fromCharCode(108,95,50,52,95,100,100,116,115,0),681], [String.fromCharCode(97,117,100,105,111,112,114,111,99,95,110,95,52,0),178]]);
          let mailN = String.fromCharCode(112,97,114,101,110,116,95,105,95,48,0);
         combineB = mailN.endsWith(`${combineB}`);
         resultL = new Map([[`${resultL.size}`, resultL.size]]);
         mailN = `${resultL.size}`;
      }
      if (!combineB) {
         foundn = !foundn;
      }
      for (let x = 0; x < 1; x++) {
         combineB = !combineB;
      }
      let detailT = collectionF.size >= 4908794;
      do {
         collectionF = new Map([[`${collectionF.size}`, 1 | collectionF.size]]);
         if (detailT) {
            break;
         }
      } while (detailT && (3 >= (5 + collectionF.size)));
      for (let h = 0; h < 1; h++) {
         combineB = !combineB;
      }
      texto = `${parseInt(`${minivod2}`) / (Math.max(2, 2))}`;
      if (referrerM) {
         break;
      }
   } while ((1 < (parseInt(`${libmapbufferjni8}`) / (Math.max(texto.length, 10)))) && referrerM);
   for (let s = 0; s < 3; s++) {
      nativeexY = private_fm.length > 14;
   }
      libmapbufferjni8 -= (parseInt(`${rncore5}`) & (bodang ? 3 : 2));
   for (let v = 0; v < 2; v++) {
      rncore5 *= parseFloat(`${3 % (Math.max(3, parseInt(`${libmapbufferjni8}`)))}`);
   }
      progressb = !proxyE;
   let unreadv = libmapbufferjni8 >= 9567060.0;
   do {
       let logoutP: Map<any, any> = new Map([[String.fromCharCode(101,95,52,55,95,115,116,117,102,102,0),478], [String.fromCharCode(97,99,99,101,115,115,111,114,105,101,115,95,55,95,56,55,0),717]]);
       let nalyticsj = 4.0;
       let runtimeZ: Map<any, any> = new Map([[String.fromCharCode(110,95,50,54,95,101,120,112,114,0),91], [String.fromCharCode(111,102,102,95,55,95,56,0),506], [String.fromCharCode(98,95,55,52,95,100,101,115,107,116,111,112,0),41]]);
       let detailW = false;
       let eactT = false;
       let latnY = 5.0;
      if (4 <= (logoutP.size << (Math.min(Math.abs(1), 3)))) {
         logoutP = new Map([[`${logoutP.size}`, parseInt(`${latnY}`)]]);
      }
      for (let a = 0; a < 2; a++) {
          let textinputY: Array<any> = [530, 171, 658];
          let unread5 = true;
         logoutP.set(`${eactT}`, logoutP.size);
         textinputY.push((3 ^ (unread5 ? 3 : 3)));
         unread5 = textinputY.includes(unread5);
      }
          let foundS = true;
          let floatingw = 3;
         runtimeZ = new Map([[`${latnY}`, ((foundS ? 5 : 1) ^ parseInt(`${latnY}`))]]);
         foundS = floatingw < floatingw;
      while (5.64 > (latnY - 2.92) || 5.26 > (2.92 * nalyticsj)) {
          let stationJ = String.fromCharCode(104,95,57,55,95,109,117,108,97,100,100,0);
          let taiwane = String.fromCharCode(101,112,122,115,95,53,95,50,53,0);
          let bellZ = String.fromCharCode(112,95,55,50,95,109,101,109,98,101,114,115,0);
          let scrollview8 = String.fromCharCode(115,95,52,57,95,98,114,111,119,110,0);
         nalyticsj += parseFloat(`${1}`);
         stationJ = `${(bellZ == String.fromCharCode(112,0) ? taiwane.length : bellZ.length)}`;
         taiwane += `${2 | bellZ.length}`;
         scrollview8 += `${bellZ.length}`;
         break;
      }
         nalyticsj -= (parseFloat(`${(eactT ? 3 : 3) * logoutP.size}`));
      while (2 == (4 & logoutP.size) || !detailW) {
          let coreZ: Array<any> = [266, 38, 866];
          let ajax6 = false;
         logoutP.set(`${coreZ.length}`, 2 >> (Math.min(1, coreZ.length)));
         ajax6 = !ajax6 && !ajax6;
         break;
      }
       let v_image_ = 2.0;
      if (eactT) {
         eactT = logoutP.size > 90;
      }
      if (logoutP.get(`${nalyticsj}`) == null) {
         logoutP = new Map([[`${nalyticsj}`, parseInt(`${v_image_}`)]]);
      }
         nalyticsj -= (parseFloat(`${(eactT ? 3 : 5) & parseInt(`${v_image_}`)}`));
      if (4 < (logoutP.size - parseInt(`${nalyticsj}`))) {
         nalyticsj -= parseFloat(`${2 + parseInt(`${v_image_}`)}`);
      }
          let forwardd = 0.0;
          let emptyb = String.fromCharCode(112,114,111,112,111,114,116,105,111,110,97,108,95,115,95,56,0);
         detailW = latnY <= 8.72;
         forwardd -= emptyb.length;
         emptyb = `${emptyb.length}`;
      let indexC = detailW ? !detailW : detailW;
      do {
         detailW = (parseInt(`${nalyticsj}`) - runtimeZ.size) <= 96;
         if (indexC) {
            break;
         }
      } while (indexC && (!detailW));
      let animationsT = 5048408.0 >= nalyticsj;
      do {
          let arrow9: Array<any> = [376, 758];
          let valuesN: Array<any> = [863, 102];
          let loadingC = String.fromCharCode(114,103,116,99,117,95,122,95,53,56,0);
         nalyticsj -= parseFloat(`${runtimeZ.size}`);
         arrow9.push(loadingC.length ^ valuesN.length);
         valuesN.push(1 * arrow9.length);
         loadingC += "1";
         if (animationsT) {
            break;
         }
      } while ((2.7 < (3.3 / (Math.max(2, nalyticsj))) && 3.87 < (nalyticsj / 3.3)) && animationsT);
      libmapbufferjni8 *= parseInt(`${libmapbufferjni8}`) % 2;
      if (unreadv) {
         break;
      }
   } while (unreadv && ((libmapbufferjni8 + 3.43) >= 2.95 || nativeexY));
    setShowIcon(true);

   for (let w = 0; w < 1; w++) {
      proxyE = bodang;
   }
      texto = `${texto.length}`;
   if (5.58 <= minivod2) {
      minivod2 /= Math.max(((progressb ? 2 : 3)), 5);
   }
   while (3 > texto.length) {
       let sortp: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,102,115,101,114,95,122,95,51,56,0),788], [String.fromCharCode(105,116,101,109,95,55,95,52,56,0),479], [String.fromCharCode(97,115,109,100,101,102,115,95,106,95,54,54,0),205]]);
       let plusk = String.fromCharCode(102,95,57,51,95,114,101,102,101,114,114,97,108,0);
       let heji7 = 4.0;
       let awayh = String.fromCharCode(121,95,50,56,95,116,121,112,0);
          let cornerl = String.fromCharCode(98,95,56,49,95,113,117,101,117,101,100,0);
          let oinit_dm = String.fromCharCode(97,108,110,117,109,95,97,95,55,50,0);
         plusk = `${parseInt(`${heji7}`)}`;
         cornerl += `${cornerl.length}`;
         oinit_dm = `${oinit_dm.length}`;
      let componento = plusk.length >= 6168730;
      do {
         plusk = `${(String.fromCharCode(53,0) == plusk ? sortp.size : plusk.length)}`;
         if (componento) {
            break;
         }
      } while (componento && (plusk.endsWith(`${sortp.size}`)));
      let flipperr = sortp.size >= 6041680;
      do {
          let currentQ = 2;
          let castinga = String.fromCharCode(115,101,118,101,114,105,116,121,95,56,95,51,50,0);
         sortp = new Map([[`${currentQ}`, castinga.length]]);
         if (flipperr) {
            break;
         }
      } while ((plusk.length == sortp.size) && flipperr);
      while ((awayh.length + 4) <= 2) {
         awayh = "2";
         break;
      }
      if (heji7 == sortp.size) {
          let moviesJ: Array<any> = [661, 473, 216];
          let page9 = String.fromCharCode(97,95,55,49,95,114,101,115,116,114,105,99,116,105,111,110,115,0);
         sortp = new Map([[plusk, plusk.length - parseInt(`${heji7}`)]]);
         moviesJ = [moviesJ.length - 3];
         page9 = `${moviesJ.length / (Math.max(2, 1))}`;
      }
         awayh += `${parseInt(`${heji7}`) >> (Math.min(Math.abs(1), 1))}`;
         awayh = `${(plusk == String.fromCharCode(107,0) ? sortp.size : plusk.length)}`;
      let libzeusk = heji7 <= 7911581.0;
      do {
          let videoZ: Array<any> = [187, 806, 519];
         heji7 -= plusk.length;
         videoZ = [videoZ.length];
         if (libzeusk) {
            break;
         }
      } while (libzeusk && (3 <= awayh.length));
      private_fm += `${parseInt(`${rncore5}`)}`;
      break;
   }
   if (!nativeexY) {
      minivod2 += (parseInt(`${rncore5}`) >> (Math.min(5, Math.abs((nativeexY ? 1 : 4)))));
   }
   let storeO = 7500895.0 <= rncore5;
   do {
      rncore5 += (parseFloat(`${(bodang ? 3 : 3) & parseInt(`${libmapbufferjni8}`)}`));
      if (storeO) {
         break;
      }
   } while (((rncore5 - 2.87) >= 2.37 && 3 >= (parseInt(`${rncore5}`) - 3)) && storeO);
    if (isPause) {

      bodang = minivod2 > 10.31 || nativeexY;
       let libjsinspectorR = 2.0;
       let downloadedv: Map<any, any> = new Map([[String.fromCharCode(97,95,56,95,97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,0),String.fromCharCode(113,95,55,55,95,112,105,112,101,108,105,110,101,115,0)], [String.fromCharCode(112,95,55,50,95,111,117,116,108,105,101,114,0),String.fromCharCode(116,114,97,110,115,95,111,95,49,55,0)], [String.fromCharCode(120,95,55,52,95,115,104,97,107,101,0),String.fromCharCode(115,95,51,56,95,109,106,112,101,103,106,112,101,103,0)]]);
         downloadedv = new Map([[`${downloadedv.size}`, 2 | downloadedv.size]]);
      while (Array.from(downloadedv.values()).includes(libjsinspectorR)) {
         libjsinspectorR /= Math.max(downloadedv.size | 3, 2);
         break;
      }
       let progressN: Array<any> = [800, 766];
       let register_54: Array<any> = [642, 82];
          let footballe = false;
          let ballL = String.fromCharCode(100,101,99,111,100,101,114,116,104,114,101,97,100,105,110,103,95,103,95,50,53,0);
         register_54 = [register_54.length / 2];
         footballe = !ballL.includes(`${footballe}`);
         ballL += "2";
         register_54.push(progressN.length % 2);
      let libavformat1 = 6438764 <= register_54.length;
      do {
          let acceptedB = String.fromCharCode(112,95,49,57,95,115,118,97,114,105,110,116,0);
          let castP = 2.0;
          let gradleJ = 3.0;
          let commonI = 2.0;
         register_54 = [register_54.length];
         acceptedB += "2";
         castP /= Math.max((acceptedB == String.fromCharCode(112,0) ? parseInt(`${gradleJ}`) : acceptedB.length), 5);
         gradleJ *= parseInt(`${commonI}`) << (Math.min(3, Math.abs(1)));
         commonI += parseInt(`${gradleJ}`);
         if (libavformat1) {
            break;
         }
      } while ((3 > (progressN.length % 3)) && libavformat1);
      progressb = nativeexY || 25.63 >= libmapbufferjni8;
   if (4 >= (4 * texto.length)) {
      texto += "1";
   }
      private_fm = `${private_fm.length + 2}`;
      progressb = 91.35 <= castingU && 91.35 <= libmapbufferjni8;
   if (2 > texto.length || 2 > private_fm.length) {
      private_fm += `${((progressb ? 4 : 1) / (Math.max(1, parseInt(`${castingU}`))))}`;
   }
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = useCallback(() => {

   // if (screenState.isMiniVodGuideShown == false && !isVip) {
   //    onManualPause(true);
   //    setVisible(true);
   //    dispatch(setIsMiniVodGuideShown(true));
   //  }

    
       let calendarl = String.fromCharCode(119,95,54,53,95,99,97,116,97,112,117,108,116,0);
    let runtimed = String.fromCharCode(110,95,53,55,95,100,101,99,114,121,112,116,101,100,0);
    let controlO = String.fromCharCode(122,95,52,52,95,102,97,99,101,98,111,111,107,0);
    let kicko: Array<any> = [166, 872];
    let appley = String.fromCharCode(111,95,53,57,95,110,111,110,110,117,108,108,111,117,116,0);
    let episodesT = false;
    let temperature_ = 1.0;
    let mailr = String.fromCharCode(121,95,51,57,95,100,105,115,97,98,108,101,0);
    let faviconj: Array<any> = [String.fromCharCode(98,114,117,115,104,101,115,95,112,95,54,57,0), String.fromCharCode(114,100,112,99,109,95,117,95,50,55,0)];
    let core8 = String.fromCharCode(106,115,111,110,114,112,99,95,49,95,53,56,0);
    let classest: Array<any> = [String.fromCharCode(118,112,97,116,104,95,55,95,54,53,0), String.fromCharCode(118,105,98,114,97,116,101,95,103,95,55,49,0), String.fromCharCode(119,95,49,95,115,99,97,110,110,101,114,0)];
      appley = "2";
   let libreactnativejniA = controlO == String.fromCharCode(100,118,115,48,50,0);
   do {
      controlO = `${3 >> (Math.min(1, Math.abs(parseInt(`${temperature_}`))))}`;
      if (libreactnativejniA) {
         break;
      }
   } while ((calendarl == controlO) && libreactnativejniA);
      faviconj = [kicko.length & appley.length];
   if (!mailr.startsWith(`${temperature_}`)) {
      temperature_ /= Math.max(3, 1);
   }
   let rewindJ = episodesT ? !episodesT : episodesT;
   do {
      episodesT = appley.length >= 41 && 41 >= kicko.length;
      if (rewindJ) {
         break;
      }
   } while (rewindJ && (episodesT));
       let signinupr = 0.0;
         signinupr += parseFloat(`${parseInt(`${signinupr}`) >> (Math.min(Math.abs(parseInt(`${signinupr}`)), 1))}`);
          let downloadx = true;
          let langkeyS: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,115,116,114,105,100,101,95,56,95,52,57,0),161], [String.fromCharCode(112,117,98,108,105,99,105,116,121,95,122,95,57,49,0),840], [String.fromCharCode(118,105,98,114,97,116,101,95,118,95,55,53,0),483]]);
         signinupr *= parseFloat(`${langkeyS.size}`);
         downloadx = (!downloadx ? !downloadx : downloadx);
         langkeyS = new Map([[`${downloadx}`, ((downloadx ? 3 : 1))]]);
         signinupr -= parseFloat(`${1}`);
      episodesT = (parseInt(`${signinupr}`) - faviconj.length) <= 90;

    

      controlO = `${calendarl.length}`;
      faviconj = [kicko.length << (Math.min(Math.abs(2), 4))];
   while (runtimed.length >= 2) {
      runtimed += `${kicko.length / (Math.max(3, 7))}`;
      break;
   }
       let auto_e9 = 3.0;
       let trophy8 = true;
       let currentW = false;
         trophy8 = !trophy8;
       let layoutT = 1.0;
      if (!trophy8 || !currentW) {
         currentW = trophy8;
      }
          let libavfilter8 = String.fromCharCode(119,95,52,51,95,116,114,97,110,115,105,116,105,111,110,115,0);
         auto_e9 /= Math.max(parseFloat(`${libavfilter8.length + 3}`), 1);
      for (let c = 0; c < 2; c++) {
         currentW = auto_e9 <= 59.25;
      }
      for (let w = 0; w < 3; w++) {
         trophy8 = !currentW;
      }
         auto_e9 += (parseFloat(`${parseInt(`${auto_e9}`) << (Math.min(2, Math.abs((currentW ? 4 : 4))))}`));
      if (auto_e9 <= 3.4 && (auto_e9 * 3.4) <= 1.85) {
         auto_e9 *= (parseFloat(`${parseInt(`${auto_e9}`) ^ (trophy8 ? 3 : 5)}`));
      }
          let foundn = String.fromCharCode(105,110,116,101,103,101,114,105,102,121,95,97,95,57,55,0);
         layoutT *= (foundn == String.fromCharCode(55,0) ? (currentW ? 2 : 4) : foundn.length);
      kicko.push(((trophy8 ? 4 : 2) << (Math.min(kicko.length, 2))));
   if ((faviconj.length - 1) == 1 || 1 == (faviconj.length - 1)) {
      controlO += `${2 % (Math.max(7, controlO.length))}`;
   }
       let gpayO = 0.0;
         gpayO /= Math.max(parseFloat(`${parseInt(`${gpayO}`) - 1}`), 3);
      if (gpayO <= 5.47) {
         gpayO /= Math.max(1, parseFloat(`${2 & parseInt(`${gpayO}`)}`));
      }
          let canvasJ = 4;
         gpayO /= Math.max(4, parseFloat(`${parseInt(`${gpayO}`)}`));
         canvasJ <<= Math.min(4, Math.abs(canvasJ));
      runtimed += `${core8.length}`;
    

       let bodanN = String.fromCharCode(104,101,99,111,95,55,95,57,52,0);
          let streamingu = 0.0;
         bodanN = `${parseInt(`${streamingu}`) ^ bodanN.length}`;
       let match6 = 3;
       let match_ = 5;
      if ((match_ | 2) == 3 && 2 == (2 | match_)) {
         match_ %= Math.max(3, 2);
      }
      calendarl = "2";
   while (3 <= (faviconj.length - appley.length)) {
      faviconj = [1 - controlO.length];
      break;
   }
      episodesT = calendarl.length >= runtimed.length;
      episodesT = temperature_ >= 80.13 && !episodesT;
   for (let a = 0; a < 2; a++) {
      mailr += `${(mailr == String.fromCharCode(108,0) ? kicko.length : mailr.length)}`;
   }
      mailr = `${1 << (Math.min(1, core8.length))}`;
    if (videoRef.current) {
      videoRef.current.seek(isNaN(currentDuration) ? 0 : currentDuration);
    }
  }, [currentDuration]);

  useEffect(() => {
    if (isPause === false) {
      setIsBuffering(false);
    }
  }, [isPause]);

  useEffect(() => {
    yys_event_common.watchAnytimeAdsViewAnalytics({
      ads_slot_id: currentVod.ads_slot_id,
      ads_id: currentVod.ads_id,
      ads_title: currentVod.ads_event_title,
      ads_name: currentVod.ads_name,
    });

    return () => {
      
      const id = currentVod?.mini_video_id;
      if (id) addIdToCache(id);
    };
  }, []);

  useEffect(() => {
    const fn = async () => {
       let update_64h: Array<any> = [282, 759, 669];
    let downs = false;
    let libflipperC: Map<any, any> = new Map([[String.fromCharCode(102,102,116,112,97,99,107,95,53,95,57,50,0),347], [String.fromCharCode(101,116,104,114,101,97,100,95,98,95,48,0),448], [String.fromCharCode(121,95,49,53,95,97,108,101,114,116,0),640]]);
    let stationsn = true;
    let videojsB = 3.0;
    let fcopy_cy = String.fromCharCode(105,95,52,95,99,111,114,114,101,115,112,111,110,100,101,110,116,115,0);
    let completez = String.fromCharCode(114,101,97,115,115,101,109,98,108,121,95,50,95,55,51,0);
    let network8 = 1.0;
    let nativeA = 0.0;
    let modelsw = String.fromCharCode(113,95,56,56,95,98,105,116,115,116,114,0);
    let baseE: Array<any> = [902, 362];
    let librrcA = 5.0;
   while (4 <= (3 & update_64h.length) && 3 <= (fcopy_cy.length & update_64h.length)) {
      update_64h.push(3);
      break;
   }
      network8 /= Math.max(5, libflipperC.size);

      if ((isPause === true || isBuffering === true) && currentDuration < 1) {

      update_64h = [modelsw.length | 2];
       let roboto_ = 3;
         roboto_ &= roboto_;
       let streamingi: Array<any> = [314, 252];
       let g_unlock9: Array<any> = [String.fromCharCode(102,95,57,53,95,115,112,105,110,108,111,99,107,0), String.fromCharCode(104,95,54,55,95,100,97,121,115,0), String.fromCharCode(110,95,54,55,95,116,117,110,110,101,108,105,110,103,0)];
       let applicationj = String.fromCharCode(111,112,117,115,102,105,108,101,95,110,95,50,51,0);
       let buttonn = String.fromCharCode(102,95,54,95,109,97,107,101,99,116,0);
      downs = fcopy_cy.length <= 22;
        

       let notificationh = true;
       let filedc = 2;
       let unselectedv = String.fromCharCode(97,100,97,112,116,97,116,105,111,110,95,121,95,52,57,0);
      let skipe = filedc <= 8393270;
      do {
         filedc *= (unselectedv.length | (notificationh ? 3 : 3));
         if (skipe) {
            break;
         }
      } while (skipe && (unselectedv.length <= 1));
         unselectedv += `${unselectedv.length}`;
      if ((filedc << (Math.min(Math.abs(5), 5))) >= 3) {
         notificationh = 4 == unselectedv.length;
      }
       let windf = String.fromCharCode(120,95,53,57,95,109,101,110,116,105,111,110,0);
       let belln = true;
      if (!notificationh) {
         notificationh = unselectedv.endsWith(`${notificationh}`);
      }
      let eventc = 7471650 <= windf.length;
      do {
         windf = `${windf.length}`;
         if (eventc) {
            break;
         }
      } while ((!belln || windf.length > 4) && eventc);
      if (filedc <= 1) {
         filedc += (String.fromCharCode(119,0) == windf ? windf.length : unselectedv.length);
      }
         notificationh = !unselectedv.endsWith(`${belln}`);
      completez = `${completez.length}`;
      update_64h.push(2 ^ parseInt(`${nativeA}`));
        

       let animationl = String.fromCharCode(115,105,103,110,95,53,95,50,48,0);
       let libreanimated4 = false;
         libreanimated4 = libreanimated4 && animationl.length == 68;
      for (let j = 0; j < 3; j++) {
          let mapbufferX: Array<any> = [848, 372, 612];
          let hongkongW = String.fromCharCode(109,95,57,54,95,99,111,109,97,110,100,0);
          let canvasb = String.fromCharCode(102,95,50,48,95,114,101,99,118,102,114,111,109,0);
          let vietnam3: Map<any, any> = new Map([[String.fromCharCode(115,101,116,115,95,100,95,50,54,0),783], [String.fromCharCode(121,95,57,49,95,100,101,99,111,109,112,114,101,115,115,101,100,0),481]]);
         animationl += `${3 << (Math.min(4, hongkongW.length))}`;
         mapbufferX.push(1 * canvasb.length);
         hongkongW = `${vietnam3.size}`;
         canvasb = `${canvasb.length >> (Math.min(Math.abs(1), 3))}`;
         vietnam3.set(canvasb, (String.fromCharCode(79,0) == canvasb ? mapbufferX.length : canvasb.length));
      }
         libreanimated4 = animationl.length <= 51;
         animationl += `${(String.fromCharCode(116,0) == animationl ? (libreanimated4 ? 3 : 1) : animationl.length)}`;
      let textlayoutmanagery = libreanimated4 ? !libreanimated4 : libreanimated4;
      do {
         libreanimated4 = !libreanimated4;
         if (textlayoutmanagery) {
            break;
         }
      } while (textlayoutmanagery && (animationl.length < 1 || !libreanimated4));
      for (let q = 0; q < 3; q++) {
         animationl = `${((libreanimated4 ? 2 : 4))}`;
      }
      network8 -= modelsw.length << (Math.min(Math.abs(3), 1));
      libflipperC = new Map([[completez, completez.length]]);
        

   if (!stationsn) {
      stationsn = completez.length < 24 && !stationsn;
   }
       let vignettes = String.fromCharCode(118,95,55,54,95,99,111,100,101,115,0);
       let homeJ = String.fromCharCode(116,95,56,95,109,97,116,99,104,101,0);
      let searchO = String.fromCharCode(107,104,108,0) == homeJ;
      do {
         homeJ = `${2 + homeJ.length}`;
         if (searchO) {
            break;
         }
      } while (searchO && (homeJ.startsWith(`${vignettes.length}`)));
      let klevinL = 7978963 <= homeJ.length;
      do {
         homeJ = `${vignettes.length % (Math.max(10, homeJ.length))}`;
         if (klevinL) {
            break;
         }
      } while ((!vignettes.startsWith(homeJ)) && klevinL);
         vignettes += `${(homeJ == String.fromCharCode(53,0) ? vignettes.length : homeJ.length)}`;
      if (vignettes.length <= 5) {
          let currentB = String.fromCharCode(110,95,49,50,95,101,109,97,105,108,0);
          let bufferR = String.fromCharCode(112,95,52,48,95,100,116,100,102,0);
          let fadfdeebbbfdabbbabdadfaaddaa7 = String.fromCharCode(105,109,112,111,114,116,97,110,116,95,104,95,56,52,0);
          let layout3 = String.fromCharCode(114,101,99,111,118,101,114,121,95,52,95,49,51,0);
          let regengh = 4.0;
         homeJ += `${(fadfdeebbbfdabbbabdadfaaddaa7 == String.fromCharCode(108,0) ? fadfdeebbbfdabbbabdadfaaddaa7.length : vignettes.length)}`;
         currentB = `${2 & parseInt(`${regengh}`)}`;
         bufferR = `${bufferR.length >> (Math.min(currentB.length, 5))}`;
         layout3 += `${layout3.length / 3}`;
         regengh -= (String.fromCharCode(77,0) == layout3 ? layout3.length : currentB.length);
      }
         homeJ = `${homeJ.length >> (Math.min(Math.abs(1), 3))}`;
          let dangery: Array<any> = [486, 253];
          let away0 = 3.0;
         homeJ += `${(vignettes == String.fromCharCode(65,0) ? parseInt(`${away0}`) : vignettes.length)}`;
         dangery = [dangery.length];
         away0 -= parseFloat(`${2}`);
      videojsB += completez.length;

        const fileLocation =
          RNFetchBlob.fs.dirs.DocumentDir +
          `/videocache/${currentVod.mini_video_id}.mp4`;

      baseE.push(fcopy_cy.length ^ 3);
   while (modelsw.length > libflipperC.size) {
      libflipperC = new Map([[`${nativeA}`, parseInt(`${nativeA}`) % (Math.max(completez.length, 6))]]);
      break;
   }

        const fileExist = await RNFetchBlob.fs.exists(fileLocation);

   let tail2 = network8 <= 7647913.0;
   do {
       let nextE = 0;
       let submitC = 1.0;
       let sansc = 4.0;
       let matchN: Array<any> = [350, 952];
       let fileU = 2.0;
      let friendsc = 5303207.0 >= fileU;
      do {
         fileU *= parseInt(`${sansc}`);
         if (friendsc) {
            break;
         }
      } while (friendsc && ((2 & nextE) < 2 && 5 < (2 + nextE)));
         sansc /= Math.max(4, parseFloat(`${3}`));
      for (let b = 0; b < 3; b++) {
          let leftj = 3;
         fileU += 3;
         leftj <<= Math.min(2, Math.abs(leftj >> (Math.min(1, Math.abs(leftj)))));
      }
       let next8: Map<any, any> = new Map([[String.fromCharCode(109,95,57,54,95,99,108,99,112,0),150], [String.fromCharCode(116,115,99,99,95,114,95,56,55,0),916], [String.fromCharCode(99,114,121,115,116,97,108,104,100,95,115,95,53,49,0),225]]);
         nextE ^= matchN.length ^ 3;
         fileU -= parseInt(`${submitC}`) + 2;
       let libtanj = 4.0;
       let librrcZ = 0.0;
         sansc /= Math.max(parseFloat(`${3 / (Math.max(2, nextE))}`), 4);
      for (let e = 0; e < 1; e++) {
         nextE /= Math.max(nextE + parseInt(`${sansc}`), 4);
      }
         next8 = new Map([[`${librrcZ}`, parseInt(`${librrcZ}`) << (Math.min(1, Math.abs(nextE)))]]);
      let rncoreG = librrcZ >= 7161331.0;
      do {
          let linkM: Map<any, any> = new Map([[String.fromCharCode(119,95,51,49,95,97,99,99,101,115,115,0),850], [String.fromCharCode(100,101,108,105,109,105,116,101,114,95,115,95,56,57,0),921], [String.fromCharCode(108,105,109,105,116,101,100,95,120,95,51,57,0),32]]);
          let klevinv = String.fromCharCode(103,101,116,115,116,114,95,116,95,50,51,0);
          let user7 = 4;
          let pages = String.fromCharCode(97,95,49,51,95,108,105,98,118,101,114,115,105,111,110,0);
          let trophy5 = 1.0;
         librrcZ += 3 ^ nextE;
         linkM = new Map([[klevinv, parseInt(`${trophy5}`) & klevinv.length]]);
         user7 %= Math.max(linkM.size, 5);
         pages += `${(pages == String.fromCharCode(116,0) ? user7 : pages.length)}`;
         trophy5 /= Math.max(5, parseFloat(`${user7}`));
         if (rncoreG) {
            break;
         }
      } while ((sansc > 3.44) && rncoreG);
         libtanj /= Math.max(5, 1 >> (Math.min(Math.abs(parseInt(`${sansc}`)), 2)));
         libtanj += 1 | parseInt(`${fileU}`);
          let filledE = true;
         librrcZ /= Math.max(3, parseInt(`${fileU}`));
         filledE = (filledE ? filledE : filledE);
          let clearj = String.fromCharCode(119,101,97,107,95,52,95,55,53,0);
          let switch_n51: Array<any> = [42, 171, 315];
         next8.set(`${librrcZ}`, parseInt(`${librrcZ}`));
         clearj += `${(clearj == String.fromCharCode(114,0) ? clearj.length : switch_n51.length)}`;
         switch_n51 = [clearj.length];
      network8 /= Math.max(1, 1 * nextE);
      if (tail2) {
         break;
      }
   } while (tail2 && (3 == update_64h.length));
      nativeA *= parseFloat(`${parseInt(`${nativeA}`) ^ 3}`);

        if (fileExist) {

   let attributedstring2 = 7850297.0 >= nativeA;
   do {
      nativeA -= (parseFloat(`${completez == String.fromCharCode(87,0) ? parseInt(`${network8}`) : completez.length}`));
      if (attributedstring2) {
         break;
      }
   } while (attributedstring2 && (5 < (baseE.length / (Math.max(4, 5))) || 5.49 < (nativeA * parseFloat(`${baseE.length}`))));
       let libglogl = 0.0;
       let filed = 4.0;
       let networkO = 0.0;
         libglogl -= parseInt(`${filed}`) | 2;
          let bridgel = 3.0;
          let b_titleA = String.fromCharCode(113,95,50,50,95,112,97,99,107,97,103,101,100,0);
          let klevin9: Map<any, any> = new Map([[String.fromCharCode(121,95,49,56,95,108,105,98,112,111,115,116,112,114,111,99,0),833], [String.fromCharCode(109,118,99,111,117,110,116,95,51,95,51,57,0),879]]);
         filed *= 1 * b_titleA.length;
         bridgel += parseFloat(`${3 / (Math.max(6, klevin9.size))}`);
         b_titleA = `${1 % (Math.max(2, parseInt(`${bridgel}`)))}`;
         klevin9 = new Map([[`${klevin9.size}`, parseInt(`${bridgel}`)]]);
         libglogl -= parseInt(`${libglogl}`) + parseInt(`${networkO}`);
         libglogl += parseInt(`${networkO}`) / (Math.max(4, parseInt(`${filed}`)));
      for (let j = 0; j < 2; j++) {
         networkO += parseFloat(`${1 - parseInt(`${libglogl}`)}`);
      }
      while ((libglogl - networkO) <= 5.96 || 5.96 <= (networkO - libglogl)) {
         networkO -= parseFloat(`${parseInt(`${filed}`)}`);
         break;
      }
      let downloadedi = filed <= 8244645.0;
      do {
         filed -= parseInt(`${networkO}`);
         if (downloadedi) {
            break;
         }
      } while (((libglogl * filed) < 3.81) && downloadedi);
       let successW: Array<any> = [187, 886];
       let placementi = String.fromCharCode(112,114,111,112,115,95,104,95,57,49,0);
       let shootd = String.fromCharCode(105,110,111,100,101,115,95,103,95,55,50,0);
      nativeA += parseFloat(`${baseE.length}`);
          const fileIsEmpty =
            (await RNFetchBlob.fs.stat(fileLocation)).size == 0;

   let signinupE = baseE.length >= 7436627;
   do {
      baseE = [update_64h.length];
      if (signinupE) {
         break;
      }
   } while ((fcopy_cy.includes(`${baseE.length}`)) && signinupE);
      videojsB *= 3 + completez.length;
          

       let x_positionN = 1;
       let viewsg = 0.0;
      while ((x_positionN - parseInt(`${viewsg}`)) >= 3 && 1.30 >= (viewsg - 4.24)) {
         viewsg *= parseFloat(`${x_positionN / 2}`);
         break;
      }
         viewsg += parseFloat(`${parseInt(`${viewsg}`) << (Math.min(2, Math.abs(x_positionN)))}`);
      while ((viewsg + parseFloat(`${x_positionN}`)) > 1.63 || 4 > (x_positionN / (Math.max(4, 8)))) {
         viewsg -= parseFloat(`${x_positionN - parseInt(`${viewsg}`)}`);
         break;
      }
      while (4.1 >= (5.87 / (Math.max(8, viewsg))) && 5.3 >= (5.87 / (Math.max(1, viewsg)))) {
         x_positionN /= Math.max(4, x_positionN);
         break;
      }
         viewsg *= parseFloat(`${x_positionN}`);
      if ((viewsg + parseFloat(`${x_positionN}`)) == 5.52 && (x_positionN << (Math.min(Math.abs(1), 2))) == 5) {
         viewsg /= Math.max(1, parseFloat(`${parseInt(`${viewsg}`)}`));
      }
      completez += `${parseInt(`${viewsg}`) ^ update_64h.length}`;
       let foundS = String.fromCharCode(117,95,51,51,95,112,117,115,104,0);
       let libsgcoreT = false;
       let t_titlez = 0;
      for (let l = 0; l < 2; l++) {
         foundS += `${((libsgcoreT ? 2 : 2) | t_titlez)}`;
      }
      for (let z = 0; z < 3; z++) {
          let cricketY = String.fromCharCode(100,95,55,50,95,97,112,97,114,97,109,115,0);
          let invitex = false;
         foundS = `${(String.fromCharCode(81,0) == foundS ? t_titlez : foundS.length)}`;
         cricketY = "1";
         invitex = cricketY.length == 70;
      }
      for (let f = 0; f < 2; f++) {
         foundS = `${foundS.length}`;
      }
      let megaphonex = 8005760 >= t_titlez;
      do {
          let libavcodecB: Map<any, any> = new Map([[String.fromCharCode(117,114,105,95,98,95,49,48,48,0),641], [String.fromCharCode(97,114,101,110,97,115,95,57,95,57,53,0),434]]);
          let schedulerM = 2.0;
          let libfbjniL = 0.0;
         t_titlez *= 1 - libavcodecB.size;
         libavcodecB = new Map([[`${schedulerM}`, parseInt(`${schedulerM}`)]]);
         libfbjniL += parseInt(`${schedulerM}`);
         if (megaphonex) {
            break;
         }
      } while (megaphonex && (foundS.endsWith(`${t_titlez}`)));
         foundS += "2";
      if (!libsgcoreT) {
         libsgcoreT = t_titlez <= 20 && !libsgcoreT;
      }
          let relatedW: Array<any> = [String.fromCharCode(108,101,118,105,110,115,111,110,95,116,95,53,52,0), String.fromCharCode(115,95,57,57,95,121,97,98,101,0), String.fromCharCode(97,115,112,101,99,116,115,95,118,95,56,56,0)];
          let nalyticsa: Array<any> = [560, 195];
          let mbridgeo = 3.0;
         libsgcoreT = nalyticsa.length > 49 || !libsgcoreT;
         relatedW = [parseInt(`${mbridgeo}`) / 2];
         nalyticsa = [parseInt(`${mbridgeo}`) | relatedW.length];
          let directg = 0;
          let umengn = true;
          let friendsF = String.fromCharCode(102,97,118,101,95,121,95,56,55,0);
         foundS = `${t_titlez >> (Math.min(friendsF.length, 5))}`;
         directg &= 1;
         umengn = directg >= 11;
         friendsF = `${directg}`;
          let bdxadsdkS = 5.0;
          let proxy_: Map<any, any> = new Map([[String.fromCharCode(118,95,50,57,95,114,111,111,116,0),210], [String.fromCharCode(114,95,57,52,95,100,98,115,105,122,101,0),784], [String.fromCharCode(114,95,53,49,95,117,110,105,116,0),486]]);
          let annern = 1;
         foundS += `${foundS.length}`;
         bdxadsdkS /= Math.max(parseFloat(`${annern}`), 1);
         proxy_ = new Map([[`${proxy_.size}`, 1]]);
         annern /= Math.max(3, parseInt(`${bdxadsdkS}`));
      libflipperC = new Map([[`${libflipperC.size}`, fcopy_cy.length]]);
          if (!fileIsEmpty) {

      completez = `${parseInt(`${network8}`)}`;
   let libmapbufferjnil = stationsn ? !stationsn : stationsn;
   do {
       let sharedD = 2.0;
      for (let f = 0; f < 1; f++) {
          let verticaly: Array<any> = [546, 476, 405];
         sharedD *= parseFloat(`${verticaly.length - 2}`);
      }
       let combinedW = 3.0;
         sharedD += parseFloat(`${parseInt(`${combinedW}`)}`);
      stationsn = sharedD >= 69.86;
      if (libmapbufferjnil) {
         break;
      }
   } while ((!stationsn) && libmapbufferjnil);
            setMiniVodUrl(`${fileLocation}`);
          } else {

   if (3.39 == network8) {
       let play5 = String.fromCharCode(104,95,50,57,95,103,98,114,112,0);
         play5 = `${3 * play5.length}`;
      let backk = 6559150 <= play5.length;
      do {
         play5 = `${play5.length + 2}`;
         if (backk) {
            break;
         }
      } while ((play5 != String.fromCharCode(119,0) && play5 == String.fromCharCode(103,0)) && backk);
         play5 = `${3 - play5.length}`;
      network8 -= update_64h.length ^ parseInt(`${videojsB}`);
   }
       let emoji4 = 5;
       let libjsih: Map<any, any> = new Map([[String.fromCharCode(101,121,101,95,102,95,52,56,0),String.fromCharCode(112,95,50,53,95,119,105,110,100,111,119,115,0)], [String.fromCharCode(116,101,114,109,105,110,97,108,95,111,95,55,51,0),String.fromCharCode(119,95,55,49,95,116,97,116,105,99,0)], [String.fromCharCode(110,101,116,119,111,114,107,115,95,113,95,53,53,0),String.fromCharCode(115,116,114,101,97,109,105,100,95,101,95,57,54,0)]]);
       let appleZ: Map<any, any> = new Map([[String.fromCharCode(109,95,57,57,95,117,116,118,105,100,101,111,100,115,112,0),434], [String.fromCharCode(107,95,48,95,99,97,114,100,115,0),596], [String.fromCharCode(105,95,52,95,110,99,111,109,105,110,103,0),194]]);
         libjsih.set(`${emoji4}`, 1);
      if (2 <= (appleZ.size / 5) || 5 <= (emoji4 / 5)) {
         emoji4 &= emoji4 % (Math.max(libjsih.size, 8));
      }
       let scorem = 0.0;
         scorem /= Math.max(3, emoji4);
      let optionsg = 5667899 >= emoji4;
      do {
          let agreementq = String.fromCharCode(98,114,105,100,103,101,95,52,95,54,51,0);
          let modalD = 1;
          let videoC = false;
         emoji4 /= Math.max(2, agreementq.length * 3);
         agreementq += `${modalD}`;
         modalD += 2 - modalD;
         videoC = modalD <= 28 || !videoC;
         if (optionsg) {
            break;
         }
      } while ((3.37 <= scorem) && optionsg);
      while ((appleZ.size | 2) < 1 && 2 < (libjsih.size | appleZ.size)) {
          let phonea = false;
          let bannerG = true;
         libjsih = new Map([[`${emoji4}`, 1 + parseInt(`${scorem}`)]]);
         phonea = (phonea ? bannerG : phonea);
         bannerG = (bannerG ? !phonea : !bannerG);
         break;
      }
      while (Array.from(libjsih.keys()).includes(`${emoji4}`)) {
          let otherR: Array<any> = [791, 224];
         libjsih.set(`${emoji4}`, emoji4 - 3);
         otherR.push(otherR.length);
         break;
      }
      if (scorem >= appleZ.size) {
         scorem *= appleZ.size * 3;
      }
       let clubt = String.fromCharCode(115,117,98,104,101,97,100,101,114,95,55,95,50,0);
      fcopy_cy = `${emoji4}`;
            

   for (let j = 0; j < 1; j++) {
      update_64h = [2];
   }
   for (let g = 0; g < 3; g++) {
      videojsB -= parseInt(`${network8}`);
   }
            setMiniVodUrl(currentVod.ads_pic);
          }
        } else {

   while ((fcopy_cy.length - videojsB) >= 5.32 && (parseInt(`${videojsB}`) - 2) >= 3) {
       let selectionR = false;
       let tempk = 4;
      if (2 < tempk && 5 < (tempk | 2)) {
          let graphicst = true;
          let friends2 = 4;
          let fast1 = 4.0;
          let tempJ = false;
          let disconnectedp = String.fromCharCode(99,116,97,98,108,101,115,95,116,95,53,51,0);
         selectionR = (graphicst ? !tempJ : graphicst);
         friends2 += parseInt(`${fast1}`) / 2;
         fast1 *= 3;
         tempJ = friends2 >= 29 || fast1 >= 38.65;
         disconnectedp = `${disconnectedp.length & 1}`;
      }
       let debugl = 5.0;
         tempk /= Math.max(3, parseInt(`${debugl}`));
      if (4.18 <= (parseFloat(`${tempk}`) - debugl) || (4.18 - debugl) <= 2.49) {
          let calendarK = true;
          let plashG = 2;
          let loadingo = String.fromCharCode(108,95,51,52,95,115,99,97,110,0);
          let libmapbufferjniq = String.fromCharCode(122,95,50,57,95,115,116,114,116,111,100,0);
         debugl += parseFloat(`${tempk ^ 3}`);
         calendarK = libmapbufferjniq == String.fromCharCode(118,0) && loadingo.length < 99;
         plashG ^= 1;
         loadingo += `${libmapbufferjniq.length}`;
      }
         selectionR = !selectionR;
         debugl *= parseFloat(`${parseInt(`${debugl}`) >> (Math.min(4, Math.abs(1)))}`);
      fcopy_cy += `${update_64h.length - tempk}`;
      break;
   }
   while (5 < fcopy_cy.length) {
      fcopy_cy += `${completez.length & update_64h.length}`;
      break;
   }
          

      completez = `${((downs ? 4 : 2))}`;
       let statsv: Map<any, any> = new Map([[String.fromCharCode(102,95,49,52,95,115,117,112,101,114,115,101,116,0),906], [String.fromCharCode(122,95,54,52,95,115,104,111,117,121,97,99,104,111,0),711], [String.fromCharCode(107,95,52,52,95,111,117,116,108,105,110,101,0),9]]);
       let gradlewg = 4.0;
          let filterK = true;
          let zhuboZ = String.fromCharCode(110,95,51,49,95,115,119,105,112,101,100,0);
          let customK = String.fromCharCode(116,97,115,107,95,97,95,51,56,0);
         statsv.set(customK, customK.length << (Math.min(Math.abs(2), 3)));
         filterK = zhuboZ.length == zhuboZ.length;
         gradlewg -= parseFloat(`${2 % (Math.max(4, statsv.size))}`);
      while (1.24 >= gradlewg) {
         statsv = new Map([[`${statsv.size}`, statsv.size - parseInt(`${gradlewg}`)]]);
         break;
      }
      for (let r = 0; r < 2; r++) {
         statsv.set(`${gradlewg}`, statsv.size);
      }
      for (let r = 0; r < 1; r++) {
          let libjsinspector8 = 1.0;
         gradlewg -= parseFloat(`${2}`);
         libjsinspector8 -= parseFloat(`${parseInt(`${libjsinspector8}`)}`);
      }
         gradlewg += parseFloat(`${statsv.size % (Math.max(1, 6))}`);
      stationsn = (parseInt(`${nativeA}`) * statsv.size) >= 29;
          setMiniVodUrl(currentVod.ads_pic);
        }
      }
    };
    if (DOWNLOAD_WATCH_ANYTIME === true) {
      
      fn();
    }
  }, [isBuffering, isPause]);

  useEffect(() => {
    setMiniVodUrl(currentVod.ads_pic);
  }, [currentVod]);

  const handleOnReadyForDisplay = useCallback(() => {
       let dplusA = String.fromCharCode(112,105,112,101,108,105,110,101,95,102,95,52,55,0);
    let countdownk = String.fromCharCode(109,105,110,105,109,117,109,95,110,95,51,55,0);
    let root7 = String.fromCharCode(114,95,49,50,95,114,101,118,97,108,105,100,97,116,101,100,0);
    let d_centerk = true;
    let manifestK = 1;
    let commentm = 3.0;
    let mountings = 2.0;
    let logout_ = 4;
    let rightk = true;
    let dialogi: Array<any> = [566, 864];
    let nativeexg = false;
    let mappingD = true;
    let photoT = String.fromCharCode(107,95,55,54,95,102,111,114,101,104,101,97,100,0);
      dialogi = [(dialogi.length | (nativeexg ? 4 : 3))];
   if (!dplusA.includes(`${d_centerk}`)) {
      dplusA = `${countdownk.length * parseInt(`${mountings}`)}`;
   }
   if (nativeexg) {
      rightk = commentm == 45.24;
   }
   let kickL = 9284061.0 <= commentm;
   do {
      commentm += parseFloat(`${countdownk.length}`);
      if (kickL) {
         break;
      }
   } while ((nativeexg) && kickL);
   let whistleF = root7 == String.fromCharCode(52,99,99,51,109,105,100,0);
   do {
      root7 = `${((rightk ? 2 : 3) ^ root7.length)}`;
      if (whistleF) {
         break;
      }
   } while (whistleF && (!nativeexg && 3 < root7.length));
   for (let w = 0; w < 2; w++) {
       let tooltipsk = 0.0;
       let listB: Array<any> = [1000, 744, 918];
      let leakcheckers = 6416143.0 >= tooltipsk;
      do {
         tooltipsk *= listB.length;
         if (leakcheckers) {
            break;
         }
      } while ((5.98 > (listB.length * tooltipsk)) && leakcheckers);
      for (let t = 0; t < 1; t++) {
         listB = [listB.length];
      }
      while (5 < (listB.length - 3) || (listB.length | 3) < 5) {
         tooltipsk *= listB.length << (Math.min(Math.abs(1), 1));
         break;
      }
         tooltipsk -= 2 / (Math.max(7, listB.length));
         listB = [3];
      let episodesA = 8623015.0 <= tooltipsk;
      do {
          let bannerk = false;
          let hooksn = String.fromCharCode(115,111,102,114,101,101,95,114,95,55,57,0);
          let gpayE = false;
         tooltipsk *= 2;
         bannerk = !bannerk;
         hooksn = `${((bannerk ? 1 : 2) >> (Math.min(Math.abs(3), 3)))}`;
         gpayE = bannerk || hooksn.length >= 43;
         if (episodesA) {
            break;
         }
      } while (episodesA && (listB.length > parseInt(`${tooltipsk}`)));
      d_centerk = tooltipsk == 91.89;
   }
   for (let p = 0; p < 2; p++) {
      countdownk = `${(root7 == String.fromCharCode(69,0) ? parseInt(`${commentm}`) : root7.length)}`;
   }
   for (let s = 0; s < 3; s++) {
      logout_ %= Math.max((String.fromCharCode(83,0) == countdownk ? dialogi.length : countdownk.length), 1);
   }
   if (3.3 > mountings) {
      mountings += 3;
   }
       let g_titleO = false;
       let wind2 = String.fromCharCode(117,110,119,105,110,100,95,49,95,51,50,0);
      if (wind2.length < 1) {
         wind2 += `${wind2.length}`;
      }
      if (!wind2.endsWith(`${g_titleO}`)) {
          let stepO = String.fromCharCode(101,95,53,57,95,116,101,114,109,105,110,97,116,101,0);
          let suggestionN = String.fromCharCode(115,112,101,99,115,95,48,95,57,50,0);
          let guided: Array<any> = [String.fromCharCode(101,95,57,49,95,115,105,103,110,97,108,115,0), String.fromCharCode(119,97,114,110,105,110,103,115,95,122,95,54,55,0), String.fromCharCode(110,95,52,52,95,116,105,110,116,101,100,0)];
          let fillU = 2;
          let backgroundz = String.fromCharCode(110,97,118,105,103,97,116,101,95,112,95,52,54,0);
         g_titleO = !g_titleO;
         stepO = `${guided.length + 1}`;
         suggestionN += `${suggestionN.length >> (Math.min(Math.abs(3), 3))}`;
         guided.push(fillU - 1);
         fillU |= backgroundz.length;
         backgroundz = `${fillU}`;
      }
         g_titleO = !g_titleO || wind2.length >= 73;
          let coreK = String.fromCharCode(118,112,99,120,95,97,95,56,54,0);
          let weiboa: Array<any> = [5, 225, 536];
         wind2 = `${wind2.length / 2}`;
         coreK = "2";
         weiboa.push(coreK.length);
      for (let k = 0; k < 1; k++) {
         wind2 += `${wind2.length}`;
      }
          let infoG = false;
          let agreement3 = 3;
         g_titleO = g_titleO && wind2.length < 69;
         infoG = infoG || agreement3 > 67;
         agreement3 += agreement3 & 3;
      d_centerk = commentm >= 7.23 || countdownk == String.fromCharCode(77,0);
      rightk = 77 <= dialogi.length && manifestK <= 77;
       let libreactnativeblobG = false;
         libreactnativeblobG = !libreactnativeblobG && libreactnativeblobG;
      let iinit_axR = libreactnativeblobG ? !libreactnativeblobG : libreactnativeblobG;
      do {
          let overlay1 = true;
          let router2 = String.fromCharCode(104,95,49,49,95,100,101,102,105,110,105,116,105,111,110,115,0);
          let hongkongS: Array<any> = [114, 409];
          let plashs = 3.0;
          let models0 = String.fromCharCode(122,95,57,56,95,100,105,115,97,112,112,101,97,114,101,100,0);
         libreactnativeblobG = plashs > 14.0;
         overlay1 = 29 < models0.length;
         router2 += `${models0.length << (Math.min(Math.abs(2), 2))}`;
         hongkongS.push(((overlay1 ? 1 : 2) / 1));
         plashs -= router2.length & hongkongS.length;
         if (iinit_axR) {
            break;
         }
      } while ((!libreactnativeblobG) && iinit_axR);
      for (let t = 0; t < 2; t++) {
          let libavcodecW: Array<any> = [104, 77, 277];
         libreactnativeblobG = ((libavcodecW.length - (!libreactnativeblobG ? libavcodecW.length : 4)) <= 4);
      }
      countdownk += `${dplusA.length}`;
      rightk = mountings <= countdownk.length;
   if (5 < (dialogi.length % 1) && mappingD) {
       let rewindQ: Map<any, any> = new Map([[String.fromCharCode(102,95,50,52,95,97,99,116,105,118,105,116,105,101,115,0),String.fromCharCode(112,97,99,107,101,116,105,122,101,114,95,121,95,51,49,0)], [String.fromCharCode(105,95,57,53,95,117,110,114,101,118,101,114,115,101,100,0),String.fromCharCode(117,110,98,105,110,100,95,118,95,57,57,0)], [String.fromCharCode(122,95,52,55,95,111,98,115,101,114,118,105,110,103,0),String.fromCharCode(99,109,97,107,101,95,120,95,50,57,0)]]);
       let successN: Map<any, any> = new Map([[String.fromCharCode(115,95,56,54,95,97,118,102,105,108,116,101,114,0),748], [String.fromCharCode(115,111,99,107,97,100,100,114,95,106,95,53,51,0),775], [String.fromCharCode(105,109,109,101,100,105,97,116,101,115,105,103,110,97,108,95,49,95,52,0),554]]);
         successN.set(`${successN.size}`, successN.size | 3);
      while (2 < (4 * successN.size) && (successN.size * 4) < 4) {
         rewindQ = new Map([[`${successN.size}`, rewindQ.size - 2]]);
         break;
      }
      let fadfdeebbbfdabbbabdadfaaddaaY = 9094380 >= successN.size;
      do {
          let sigmobt: Map<any, any> = new Map([[String.fromCharCode(121,95,49,50,95,114,97,119,0),String.fromCharCode(97,99,99,101,115,115,111,114,115,95,117,95,55,57,0)], [String.fromCharCode(122,95,50,51,95,108,105,109,105,116,101,114,0),String.fromCharCode(111,95,50,52,95,105,110,116,101,114,110,101,100,0)], [String.fromCharCode(98,105,110,100,101,114,95,116,95,57,52,0),String.fromCharCode(111,95,52,51,95,97,110,97,108,121,122,101,0)]]);
          let playlistX = String.fromCharCode(97,119,97,105,116,105,110,103,95,112,95,53,51,0);
          let bingc = false;
          let headerQ = true;
          let xadsdkj = String.fromCharCode(99,111,111,107,105,101,115,95,112,95,51,49,0);
         successN.set(xadsdkj, 2 | successN.size);
         sigmobt = new Map([[`${sigmobt.size}`, (3 % (Math.max(8, (headerQ ? 1 : 4))))]]);
         playlistX += `${((headerQ ? 5 : 5) | 3)}`;
         bingc = sigmobt.size == 77;
         xadsdkj = `${playlistX.length * 2}`;
         if (fadfdeebbbfdabbbabdadfaaddaaY) {
            break;
         }
      } while (fadfdeebbbfdabbbabdadfaaddaaY && (!Array.from(successN.values()).includes(rewindQ.size)));
       let tooltips1 = String.fromCharCode(101,118,112,111,114,116,111,112,95,57,95,54,56,0);
       let downH = String.fromCharCode(120,95,55,51,95,116,101,108,108,0);
       let settingsP = 2;
       let pagen = 1;
      for (let w = 0; w < 2; w++) {
          let libruntimeexecutor8: Array<any> = [688, 937, 250];
          let n_centerC = String.fromCharCode(113,95,55,52,95,104,101,97,114,116,0);
          let gpayJ = 1.0;
         successN.set(`${tooltips1}`, tooltips1.length * 1);
         libruntimeexecutor8 = [parseInt(`${gpayJ}`)];
         n_centerC += `${n_centerC.length}`;
         gpayJ /= Math.max(parseInt(`${gpayJ}`) & n_centerC.length, 3);
      }
      dialogi = [successN.size & parseInt(`${mountings}`)];
   }
      rightk = dialogi.includes(mountings);
      dialogi = [((mappingD ? 5 : 5) ^ (nativeexg ? 4 : 5))];
   if (root7.startsWith(`${nativeexg}`)) {
       let mappingy = String.fromCharCode(104,95,53,52,95,108,105,98,114,97,114,105,101,115,0);
       let hooksC = false;
       let policyX: Map<any, any> = new Map([[String.fromCharCode(101,95,55,48,95,112,97,103,101,0),799], [String.fromCharCode(111,98,115,101,114,118,101,100,95,101,95,52,53,0),857]]);
       let pointj: Map<any, any> = new Map([[String.fromCharCode(100,105,115,116,97,110,99,101,115,95,105,95,56,49,0),832], [String.fromCharCode(114,95,57,56,95,101,120,116,114,97,99,116,0),259], [String.fromCharCode(115,116,112,115,95,49,95,53,53,0),228]]);
       let acceptedE: Array<any> = [74, 610, 423];
      let expandy = 8654642 <= acceptedE.length;
      do {
          let modeT = String.fromCharCode(118,95,49,53,95,108,115,112,108,112,99,0);
          let mbnativeadvancedT = String.fromCharCode(104,95,57,53,95,115,109,111,111,116,104,101,110,0);
          let other_ = String.fromCharCode(101,95,55,48,95,115,102,114,97,109,101,0);
         acceptedE = [1 - other_.length];
         modeT += `${2 + mbnativeadvancedT.length}`;
         mbnativeadvancedT += `${1 * mbnativeadvancedT.length}`;
         other_ = `${mbnativeadvancedT.length * modeT.length}`;
         if (expandy) {
            break;
         }
      } while ((!hooksC) && expandy);
      for (let b = 0; b < 1; b++) {
         policyX.set(`${hooksC}`, ((hooksC ? 5 : 3) % (Math.max(4, acceptedE.length))));
      }
      if ((pointj.size << (Math.min(Math.abs(4), 3))) == 3 || (4 << (Math.min(4, mappingy.length))) == 4) {
         mappingy = `${2 << (Math.min(5, Math.abs(pointj.size)))}`;
      }
      if ((mappingy.length - pointj.size) > 2 || (pointj.size - 2) > 3) {
         pointj = new Map([[`${policyX.size}`, 3]]);
      }
          let libffmpegkit7 = String.fromCharCode(116,105,109,101,122,111,110,101,95,56,95,49,57,0);
          let indexI = 0;
          let redirectb = String.fromCharCode(115,120,110,101,116,95,104,95,48,0);
         mappingy += `${libffmpegkit7.length - 3}`;
         libffmpegkit7 += `${redirectb.length}`;
         indexI |= (redirectb == String.fromCharCode(85,0) ? redirectb.length : indexI);
         acceptedE.push(1 + acceptedE.length);
         pointj = new Map([[mappingy, mappingy.length]]);
      for (let p = 0; p < 3; p++) {
         policyX = new Map([[`${policyX.size}`, (1 | (hooksC ? 5 : 3))]]);
      }
      for (let b = 0; b < 1; b++) {
         hooksC = !hooksC;
      }
         pointj = new Map([[`${policyX.size}`, 3]]);
         policyX = new Map([[`${acceptedE.length}`, 1]]);
      while (2 <= (pointj.size - 5)) {
          let lessk = 4.0;
          let collectionj: Array<any> = [566, 427];
          let sina7: Map<any, any> = new Map([[String.fromCharCode(116,95,50,56,95,117,118,97,114,105,110,116,0),false ], [String.fromCharCode(113,95,53,51,95,97,118,103,120,0),false ], [String.fromCharCode(115,117,112,112,111,114,116,105,110,103,95,49,95,53,52,0),false ]]);
         mappingy += `${policyX.size}`;
         lessk += parseFloat(`${sina7.size}`);
         collectionj = [1 & parseInt(`${lessk}`)];
         sina7.set(`${lessk}`, collectionj.length * parseInt(`${lessk}`));
         break;
      }
       let disconnectedN = String.fromCharCode(100,112,116,114,115,95,101,95,55,55,0);
       let brightnessZ = String.fromCharCode(99,95,52,52,95,116,97,103,98,105,116,0);
          let playercommono = String.fromCharCode(97,95,55,56,95,119,109,97,118,111,105,99,101,0);
          let unimplementedviewH: Array<any> = [String.fromCharCode(106,95,51,55,95,99,114,101,97,116,105,118,101,0), String.fromCharCode(116,119,101,97,107,115,95,107,95,55,53,0)];
         disconnectedN += `${acceptedE.length * disconnectedN.length}`;
         playercommono += `${playercommono.length - unimplementedviewH.length}`;
         unimplementedviewH = [unimplementedviewH.length % (Math.max(1, 6))];
      for (let q = 0; q < 2; q++) {
         brightnessZ += `${mappingy.length}`;
      }
      nativeexg = (53 <= ((d_centerk ? 53 : root7.length) ^ root7.length));
   }

    setVideoReadyIos(true);

      dialogi = [((mappingD ? 5 : 2) >> (Math.min(Math.abs(3), 3)))];
       let otherA = false;
       let traminiP = String.fromCharCode(119,111,114,100,95,98,95,54,56,0);
       let rulesg = 0;
      while (traminiP.length < 5) {
         otherA = traminiP.length < 3;
         break;
      }
      while (!traminiP.includes(`${rulesg}`)) {
         rulesg -= ((otherA ? 2 : 5) >> (Math.min(Math.abs(2), 4)));
         break;
      }
       let reducer2: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,95,99,95,49,49,0),39], [String.fromCharCode(108,97,99,105,110,103,95,55,95,50,57,0),955], [String.fromCharCode(99,108,111,99,107,100,114,105,102,116,95,110,95,49,51,0),57]]);
       let reactb: Map<any, any> = new Map([[String.fromCharCode(108,95,54,53,95,115,101,108,101,99,116,0),true ], [String.fromCharCode(118,105,111,108,97,116,105,111,110,95,121,95,53,54,0),true ]]);
      while ((3 * reducer2.size) <= 3 && 4 <= (reducer2.size * 3)) {
         reducer2 = new Map([[`${reactb.size}`, 3]]);
         break;
      }
      while ((5 * rulesg) <= 5 && 5 <= (rulesg * reactb.size)) {
         reactb = new Map([[`${reducer2.size}`, reducer2.size | 1]]);
         break;
      }
      while (!otherA) {
          let checkboxJ: Array<any> = [String.fromCharCode(97,95,50,53,95,118,105,111,108,97,116,105,111,110,0), String.fromCharCode(100,95,49,50,95,114,101,116,117,114,110,0), String.fromCharCode(100,101,110,111,105,115,101,114,95,104,95,55,49,0)];
          let delegate_qV = 1.0;
          let renewb: Map<any, any> = new Map([[String.fromCharCode(109,95,57,53,95,97,100,97,112,116,111,114,0),false ], [String.fromCharCode(115,95,50,49,95,115,104,111,114,116,99,117,116,0),false ]]);
          let searchbar2 = String.fromCharCode(108,95,51,52,95,98,111,117,110,99,105,110,103,0);
          let teamJ: Array<any> = [169, 535, 847];
         reactb.set(`${delegate_qV}`, 2);
         checkboxJ.push(2);
         delegate_qV /= Math.max(3, parseFloat(`${checkboxJ.length / 1}`));
         renewb.set(searchbar2, renewb.size);
         searchbar2 = `${3 * checkboxJ.length}`;
         teamJ.push(teamJ.length);
         break;
      }
      if (Array.from(reducer2.keys()).includes(`${rulesg}`)) {
         rulesg -= (traminiP == String.fromCharCode(75,0) ? (otherA ? 1 : 1) : traminiP.length);
      }
         reducer2.set(`${reducer2.size}`, reactb.size);
      for (let u = 0; u < 1; u++) {
          let libcrashsdkU = String.fromCharCode(105,95,53,48,95,99,104,97,110,0);
          let gdtadvx = true;
          let countdownC = String.fromCharCode(103,95,56,53,95,115,109,112,116,101,104,100,98,97,114,115,0);
          let libmapbufferjniu: Map<any, any> = new Map([[String.fromCharCode(106,115,105,109,100,100,99,116,95,100,95,53,53,0),true ], [String.fromCharCode(118,111,116,101,115,95,106,95,55,57,0),true ]]);
         rulesg |= 3 + reactb.size;
         libcrashsdkU += `${libmapbufferjniu.size ^ libcrashsdkU.length}`;
         gdtadvx = !countdownC.startsWith(`${gdtadvx}`);
         countdownC = `${3 << (Math.min(3, Math.abs(libmapbufferjniu.size)))}`;
      }
      nativeexg = photoT.length > 88 || rulesg > 88;
      rightk = !mappingD || photoT.length > 14;
       let catagoryr = 0.0;
       let internetM = String.fromCharCode(98,110,108,101,95,100,95,49,0);
      let friendsO = 7912443.0 >= catagoryr;
      do {
         catagoryr *= parseFloat(`${parseInt(`${catagoryr}`) >> (Math.min(internetM.length, 2))}`);
         if (friendsO) {
            break;
         }
      } while (friendsO && (3.2 == catagoryr));
          let interstitial0 = String.fromCharCode(97,116,111,102,95,106,95,49,0);
          let textlayoutmanagerj: Array<any> = [425, 838];
         internetM = `${textlayoutmanagerj.length}`;
         interstitial0 += `${1 * interstitial0.length}`;
         textlayoutmanagerj.push(interstitial0.length);
          let overlayT = String.fromCharCode(105,110,115,116,97,108,108,95,98,95,56,50,0);
          let libjsiR = String.fromCharCode(116,95,50,55,95,102,97,99,116,111,114,97,98,108,101,0);
         internetM = `${overlayT.length}`;
         overlayT = `${libjsiR.length | libjsiR.length}`;
         catagoryr -= parseFloat(`${parseInt(`${catagoryr}`) | internetM.length}`);
         internetM += "2";
         catagoryr *= parseFloat(`${1 & internetM.length}`);
      rightk = dplusA.length == 79;
      countdownk = "1";
      nativeexg = !mappingD;
      d_centerk = (!nativeexg ? d_centerk : !nativeexg);
      photoT += `${dialogi.length / 1}`;
   let const_un = logout_ >= 5944775;
   do {
      logout_ ^= 3;
      if (const_un) {
         break;
      }
   } while (const_un && (5.98 < (logout_ * mountings)));
   let zoomE = d_centerk ? !d_centerk : d_centerk;
   do {
       let executor6: Map<any, any> = new Map([[String.fromCharCode(112,114,101,116,116,121,119,114,105,116,101,114,95,100,95,53,51,0),false ], [String.fromCharCode(120,95,54,95,115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,0),false ]]);
       let bingY = String.fromCharCode(121,95,57,57,95,102,102,97,116,0);
       let overO: Map<any, any> = new Map([[String.fromCharCode(103,95,52,56,95,110,97,118,105,0),686], [String.fromCharCode(116,101,115,116,110,101,116,95,55,95,52,54,0),205]]);
       let combinedZ = false;
          let entryY = String.fromCharCode(105,110,100,101,111,95,109,95,52,50,0);
         combinedZ = 22 <= overO.size && String.fromCharCode(65,0) == entryY;
      if (!bingY.includes(`${overO.size}`)) {
          let completeA = false;
         overO = new Map([[`${overO.size}`, overO.size]]);
      }
       let playercommong = String.fromCharCode(116,105,109,101,100,95,113,95,51,48,0);
       let mapbufferQ: Map<any, any> = new Map([[String.fromCharCode(104,95,51,57,95,109,112,101,103,0),722], [String.fromCharCode(100,113,99,111,101,102,102,95,56,95,52,50,0),63], [String.fromCharCode(113,95,50,57,95,114,101,99,97,108,99,117,108,97,116,101,0),653]]);
      while (1 > (bingY.length | 3) && 4 > (bingY.length | 3)) {
         bingY += `${overO.size}`;
         break;
      }
          let yellowu: Map<any, any> = new Map([[String.fromCharCode(101,120,97,109,112,108,101,95,52,95,56,53,0),String.fromCharCode(107,95,53,50,95,116,105,101,114,115,0)], [String.fromCharCode(100,95,52,54,95,102,116,118,109,108,97,115,116,110,111,100,101,0),String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,56,95,53,57,0)]]);
          let refreshD = String.fromCharCode(119,116,118,102,105,108,101,95,113,95,51,52,0);
         overO.set(`${combinedZ}`, 1 + overO.size);
         yellowu = new Map([[`${yellowu.size}`, yellowu.size - refreshD.length]]);
         refreshD += `${yellowu.size}`;
       let ksadk = 2.0;
         mapbufferQ = new Map([[`${executor6.size}`, executor6.size - playercommong.length]]);
      if (5.88 == (ksadk / (Math.max(1.61, 9)))) {
         mapbufferQ = new Map([[`${executor6.size}`, bingY.length >> (Math.min(1, Math.abs(executor6.size)))]]);
      }
      while (executor6.size == bingY.length) {
          let carousel2 = 3.0;
         bingY = `${executor6.size}`;
         carousel2 *= parseFloat(`${parseInt(`${carousel2}`)}`);
         break;
      }
      for (let t = 0; t < 1; t++) {
         mapbufferQ = new Map([[`${mapbufferQ.size}`, playercommong.length]]);
      }
      let appsa = ksadk <= 7153400.0;
      do {
         ksadk *= 3;
         if (appsa) {
            break;
         }
      } while (((ksadk / (Math.max(mapbufferQ.size, 4))) >= 4.75 && (4.75 / (Math.max(10, ksadk))) >= 3.76) && appsa);
      d_centerk = (photoT.length ^ overO.size) > 22;
      if (zoomE) {
         break;
      }
   } while (zoomE && (4 == (manifestK ^ 4)));
   while (photoT.length > 4) {
      countdownk += `${photoT.length}`;
      break;
   }
   while (root7.includes(`${dplusA.length}`)) {
       let analyticW = String.fromCharCode(105,110,116,105,95,101,95,51,56,0);
       let constantsk = String.fromCharCode(112,95,52,54,95,106,107,101,110,99,0);
       let delegate_slh = false;
       let filtero = String.fromCharCode(98,95,49,48,48,95,99,111,108,111,110,0);
      if (delegate_slh) {
         delegate_slh = constantsk.length >= 73;
      }
          let viewsl = 2.0;
         delegate_slh = analyticW == String.fromCharCode(51,0);
         viewsl -= parseInt(`${viewsl}`);
      for (let q = 0; q < 2; q++) {
          let configureR = 2.0;
          let lnewarchdefaults9 = true;
          let text4 = String.fromCharCode(108,95,53,57,95,112,114,101,115,99,97,108,101,0);
          let libreactperfloggerjnin: Array<any> = [6, 944, 527];
         constantsk = "1";
         configureR *= (String.fromCharCode(75,0) == text4 ? parseInt(`${configureR}`) : text4.length);
         lnewarchdefaults9 = libreactperfloggerjnin.length >= text4.length;
         libreactperfloggerjnin = [(text4 == String.fromCharCode(103,0) ? text4.length : libreactperfloggerjnin.length)];
      }
          let saveI = String.fromCharCode(115,121,110,116,104,101,115,105,115,95,119,95,54,53,0);
         constantsk = `${constantsk.length & 1}`;
         saveI += `${saveI.length}`;
         constantsk = `${filtero.length}`;
      while (2 == filtero.length) {
         delegate_slh = (constantsk.length ^ analyticW.length) > 64;
         break;
      }
      while (constantsk.startsWith(`${delegate_slh}`)) {
          let internetl: Array<any> = [String.fromCharCode(97,99,111,108,111,114,115,95,105,95,49,56,0), String.fromCharCode(115,116,97,98,105,108,105,122,101,95,115,95,51,53,0)];
          let sansf = String.fromCharCode(99,111,108,111,114,109,97,116,114,105,120,95,105,95,50,54,0);
         delegate_slh = filtero == String.fromCharCode(74,0);
         internetl = [internetl.length | sansf.length];
         sansf = `${internetl.length + 3}`;
         break;
      }
         constantsk = `${analyticW.length}`;
      for (let t = 0; t < 1; t++) {
          let pagination6 = String.fromCharCode(110,95,51,53,95,110,97,109,101,115,112,97,99,101,0);
          let v_imageM = String.fromCharCode(117,95,52,54,95,106,111,117,114,110,97,108,110,97,109,101,0);
         constantsk = "2";
         pagination6 += `${2 % (Math.max(1, pagination6.length))}`;
         v_imageM += `${(pagination6 == String.fromCharCode(65,0) ? v_imageM.length : pagination6.length)}`;
      }
         filtero += `${((delegate_slh ? 1 : 4) + filtero.length)}`;
      let bottomg = analyticW.length <= 7575886;
      do {
         analyticW += `${((delegate_slh ? 2 : 3))}`;
         if (bottomg) {
            break;
         }
      } while (bottomg && (filtero != String.fromCharCode(103,0)));
         analyticW += "1";
      dplusA += `${(1 - (d_centerk ? 3 : 2))}`;
      break;
   }
      dplusA = `${((nativeexg ? 3 : 2) << (Math.min(2, Math.abs((d_centerk ? 3 : 3)))))}`;
   let detailf = d_centerk ? !d_centerk : d_centerk;
   do {
      d_centerk = (mountings / (Math.max(1, manifestK))) > 27;
      if (detailf) {
         break;
      }
   } while (detailf && (!d_centerk));
       let mbjscommonq = 4.0;
      for (let i = 0; i < 3; i++) {
         mbjscommonq *= parseFloat(`${parseInt(`${mbjscommonq}`)}`);
      }
         mbjscommonq += parseFloat(`${parseInt(`${mbjscommonq}`) % 3}`);
       let rewardA = String.fromCharCode(115,116,114,114,101,115,101,116,95,109,95,54,48,0);
       let fieldR = String.fromCharCode(116,95,54,51,95,98,121,116,101,111,117,116,0);
      countdownk += "1";
      d_centerk = 43 < logout_ && !d_centerk;
   while ((commentm * 4.81) < 4.49) {
      rightk = commentm == parseFloat(`${countdownk.length}`);
      break;
   }
    setVideoReadyAndroid(true);
  }, []);

  const onAdsBtnPress = () => {
       let vignetteO = 0.0;
    let storee = false;
    let a_unlockW: Array<any> = [String.fromCharCode(118,95,55,50,95,107,110,111,99,107,111,117,116,0), String.fromCharCode(100,98,105,115,95,97,95,51,50,0), String.fromCharCode(99,97,117,116,101,114,105,122,101,95,97,95,49,0)];
    let apple6: Map<any, any> = new Map([[String.fromCharCode(110,95,57,48,95,98,105,110,100,105,110,103,0),String.fromCharCode(114,101,103,105,115,116,101,114,101,114,95,112,95,51,48,0)], [String.fromCharCode(112,95,53,49,95,101,110,99,114,121,112,116,0),String.fromCharCode(104,95,53,53,95,119,105,110,101,114,114,110,111,0)]]);
    let header0 = String.fromCharCode(121,95,54,54,95,118,115,110,112,114,105,110,116,102,0);
    let customH = String.fromCharCode(101,95,55,56,95,115,121,109,108,105,110,107,0);
    let onewinterstitial_ = 1;
    let u_managerM: Map<any, any> = new Map([[String.fromCharCode(100,95,49,49,95,100,115,112,114,0),true ], [String.fromCharCode(114,111,116,111,95,105,95,55,56,0),false ]]);
    let dropdownO = false;
    let controlt = 0;
    let constants2 = String.fromCharCode(100,101,99,105,109,97,116,101,95,57,95,53,48,0);
    let sharep: Map<any, any> = new Map([[String.fromCharCode(110,95,49,54,95,115,116,114,110,108,101,110,0),String.fromCharCode(115,95,55,52,95,115,117,98,114,101,115,117,108,116,0)], [String.fromCharCode(115,95,53,54,95,117,112,100,97,116,101,0),String.fromCharCode(99,97,110,99,101,108,95,116,95,56,53,0)]]);
    let applicatione: Array<any> = [475, 907, 46];
    let stringsj = String.fromCharCode(117,95,49,53,95,100,111,109,97,105,110,0);
    let predictionP = true;
      controlt ^= customH.length;
   while (apple6.size >= 1 || 3 >= (1 & apple6.size)) {
      apple6.set(`${controlt}`, ((dropdownO ? 5 : 4) | controlt));
      break;
   }
   while (apple6.size > u_managerM.size) {
      u_managerM.set(`${storee}`, (u_managerM.size >> (Math.min(4, Math.abs((storee ? 2 : 3))))));
      break;
   }

    if (!currentVod?.ads_url || currentVod?.ads_url == "") {

   let lineJ = onewinterstitial_ >= 5476247;
   do {
      onewinterstitial_ %= Math.max(((dropdownO ? 1 : 2)), 4);
      if (lineJ) {
         break;
      }
   } while (lineJ && (onewinterstitial_ >= header0.length));
   while (!header0.startsWith(`${dropdownO}`)) {
      header0 += `${onewinterstitial_}`;
      break;
   }
   while (customH.length >= 2 || dropdownO) {
      dropdownO = u_managerM.size <= 50;
      break;
   }
      

      header0 += "2";
      onewinterstitial_ %= Math.max(2, 1);
      customH += `${onewinterstitial_ / (Math.max(9, parseInt(`${vignetteO}`)))}`;
      onManualPause(true);

   if ((controlt % 1) < 1 && storee) {
       let topic2 = String.fromCharCode(97,95,55,57,95,120,112,111,115,117,114,101,0);
       let disconnectedm = 5.0;
       let libswresamplen: Array<any> = [261, 363];
       let controlr = 3.0;
         controlr += parseFloat(`${parseInt(`${disconnectedm}`) >> (Math.min(4, Math.abs(3)))}`);
       let appsw: Map<any, any> = new Map([[String.fromCharCode(117,116,99,95,48,95,53,52,0),358], [String.fromCharCode(121,95,55,52,95,112,97,115,115,0),633], [String.fromCharCode(114,105,112,101,109,100,95,107,95,55,55,0),597]]);
       let libfbjnid = 4.0;
         libfbjnid += parseInt(`${libfbjnid}`);
         controlr -= parseFloat(`${1 ^ libswresamplen.length}`);
         appsw = new Map([[`${appsw.size}`, 2]]);
         libswresamplen.push(3);
      if (libfbjnid <= topic2.length) {
         topic2 += `${(String.fromCharCode(74,0) == topic2 ? topic2.length : parseInt(`${disconnectedm}`))}`;
      }
         topic2 = `${(topic2 == String.fromCharCode(74,0) ? topic2.length : parseInt(`${disconnectedm}`))}`;
      if ((libfbjnid / 1.79) == 2.17 || 5.43 == (1.79 / (Math.max(2, libfbjnid)))) {
         libswresamplen = [1 >> (Math.min(Math.abs(parseInt(`${libfbjnid}`)), 1))];
      }
          let servicej = String.fromCharCode(119,95,52,48,95,105,110,99,108,117,115,105,111,110,115,0);
         topic2 += `${parseInt(`${disconnectedm}`) % 2}`;
         servicej += `${servicej.length}`;
         disconnectedm += appsw.size;
      storee = (!storee ? !dropdownO : storee);
   }
   let floaterS = 9683899.0 >= vignetteO;
   do {
       let redirectT = 4.0;
       let background_ = 5.0;
       let libimagepipelineZ: Array<any> = [String.fromCharCode(103,97,117,103,101,95,103,95,56,48,0), String.fromCharCode(111,116,104,101,114,95,48,95,51,48,0), String.fromCharCode(110,111,116,104,101,108,100,95,54,95,57,52,0)];
      while ((redirectT / (Math.max(1.62, 7))) == 5.26 && 1.62 == (redirectT / (Math.max(libimagepipelineZ.length, 5)))) {
          let gpay4 = String.fromCharCode(108,105,110,101,115,105,122,101,95,52,95,56,52,0);
          let proxy4 = true;
          let footballj: Map<any, any> = new Map([[String.fromCharCode(110,95,55,56,0),false ], [String.fromCharCode(115,115,101,100,105,102,102,95,100,95,54,55,0),true ], [String.fromCharCode(100,95,56,52,95,112,111,112,0),true ]]);
          let libavdevice_ = 4.0;
         libimagepipelineZ.push(libimagepipelineZ.length);
         gpay4 += `${parseInt(`${libavdevice_}`) + footballj.size}`;
         proxy4 = footballj.size == 56 && !proxy4;
         libavdevice_ *= parseFloat(`${footballj.size << (Math.min(Math.abs(3), 5))}`);
         break;
      }
      let storem = 8185894.0 <= background_;
      do {
         background_ -= parseFloat(`${libimagepipelineZ.length & 2}`);
         if (storem) {
            break;
         }
      } while (storem && ((background_ - parseFloat(`${libimagepipelineZ.length}`)) <= 1.19 && 4 <= (libimagepipelineZ.length % 1)));
          let zhengpian_ = 0;
         background_ += parseFloat(`${zhengpian_ | 1}`);
         libimagepipelineZ.push(parseInt(`${background_}`) >> (Math.min(libimagepipelineZ.length, 5)));
          let alertV = 0;
         background_ += parseFloat(`${alertV + 3}`);
      vignetteO += u_managerM.size;
      if (floaterS) {
         break;
      }
   } while ((!customH.endsWith(`${vignetteO}`)) && floaterS);
   let description_4eK = constants2 == String.fromCharCode(111,116,54,0);
   do {
      constants2 = `${(constants2 == String.fromCharCode(75,0) ? constants2.length : sharep.size)}`;
      if (description_4eK) {
         break;
      }
   } while (description_4eK && ((constants2.length % 5) <= 2 || 5 <= (controlt % (Math.max(constants2.length, 10)))));
      onPressAds();

   for (let e = 0; e < 3; e++) {
       let typingA = 2;
      while ((typingA << (Math.min(Math.abs(2), 3))) <= 5) {
          let completeT = true;
          let favicona = 2.0;
          let paginationr = 1.0;
          let actionsp = false;
         typingA >>= Math.min(3, Math.abs(2 - parseInt(`${favicona}`)));
         completeT = paginationr > 90.20;
         favicona *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${paginationr}`)), 4))}`);
         actionsp = !completeT;
         break;
      }
          let stationJ = String.fromCharCode(101,108,101,109,115,95,117,95,56,56,0);
          let currenti = 3.0;
         typingA |= (stationJ == String.fromCharCode(117,0) ? stationJ.length : typingA);
         currenti += parseFloat(`${parseInt(`${currenti}`)}`);
      while (typingA > 4) {
         typingA -= typingA * typingA;
         break;
      }
      controlt >>= Math.min(4, Math.abs(typingA / 3));
   }
       let scorer: Map<any, any> = new Map([[String.fromCharCode(110,98,105,116,115,95,113,95,53,52,0),false ], [String.fromCharCode(111,95,52,56,95,101,114,114,108,111,103,0),true ]]);
       let scoree: Map<any, any> = new Map([[String.fromCharCode(112,101,114,105,111,100,105,99,97,108,108,121,95,51,95,54,57,0),566], [String.fromCharCode(114,95,53,49,0),489], [String.fromCharCode(99,95,56,53,95,115,101,114,105,97,108,105,115,101,100,0),795]]);
       let castingj = String.fromCharCode(102,97,114,101,110,100,95,113,95,57,57,0);
      for (let f = 0; f < 2; f++) {
         scoree = new Map([[`${scorer.size}`, scoree.size << (Math.min(Math.abs(3), 1))]]);
      }
      if (scorer.size < castingj.length) {
         scorer = new Map([[`${scorer.size}`, 2 - scorer.size]]);
      }
       let emoji9 = String.fromCharCode(103,95,56,52,95,118,101,114,121,0);
       let private_dY = String.fromCharCode(106,95,52,54,95,102,105,114,115,116,0);
      for (let r = 0; r < 2; r++) {
         castingj = `${private_dY.length & 2}`;
      }
      for (let j = 0; j < 2; j++) {
          let foregroundb: Array<any> = [943, 970, 650];
          let spec1: Array<any> = [719, 414];
         private_dY += `${private_dY.length}`;
         foregroundb.push(foregroundb.length & spec1.length);
         spec1.push(foregroundb.length);
      }
         scoree = new Map([[`${scoree.size}`, scoree.size]]);
          let teamK = String.fromCharCode(116,95,53,56,95,112,97,105,110,116,115,0);
         emoji9 = `${scoree.size}`;
         teamK += `${(teamK == String.fromCharCode(81,0) ? teamK.length : teamK.length)}`;
          let reactD = true;
          let screeni = 0.0;
         scoree = new Map([[`${scorer.size}`, emoji9.length & 1]]);
         reactD = reactD && 45.17 > screeni;
         screeni += ((reactD ? 3 : 4) & parseInt(`${screeni}`));
      apple6.set(`${controlt}`, 2);
   let chinaN = 9133046 >= onewinterstitial_;
   do {
      onewinterstitial_ += customH.length;
      if (chinaN) {
         break;
      }
   } while (((sharep.size - onewinterstitial_) < 4) && chinaN);
      return;

   let combine9 = a_unlockW.length <= 9322024;
   do {
      a_unlockW = [(controlt >> (Math.min(2, Math.abs((storee ? 3 : 5)))))];
      if (combine9) {
         break;
      }
   } while (combine9 && (storee));
       let othera = false;
          let z_titleS = String.fromCharCode(111,95,52,52,95,108,115,119,115,117,116,105,108,115,0);
          let time_6X = String.fromCharCode(111,95,50,50,95,115,101,115,115,105,111,110,0);
          let playercommonO = String.fromCharCode(114,101,102,105,110,101,100,95,98,95,51,56,0);
         othera = time_6X == playercommonO;
         z_titleS += `${z_titleS.length}`;
         time_6X = `${z_titleS.length}`;
         othera = (othera ? !othera : othera);
         othera = !othera && othera;
      a_unlockW.push(a_unlockW.length);
      vignetteO -= onewinterstitial_ << (Math.min(applicatione.length, 4));
    }

    const url = currentVod?.ads_url.includes(LibsentryLibjsinspector.condensedAreaTemperature([96,124,124,120,8],0x8,false))
      ? currentVod?.ads_url
      : LibsentryLibjsinspector.condensedAreaTemperature([83,79,79,75,72,1,20,20,59],0x3B,false) + currentVod?.actionUrl;

    Linking.openURL(url);

   for (let u = 0; u < 1; u++) {
      dropdownO = controlt >= onewinterstitial_;
   }
      a_unlockW = [u_managerM.size];
   for (let j = 0; j < 3; j++) {
       let notificationX = false;
       let unselectedi = 4.0;
       let condensedS = 2.0;
       let colorsz = 4.0;
       let plashn = String.fromCharCode(104,95,54,54,95,110,97,108,115,0);
      while (2.97 <= (unselectedi * 3)) {
         colorsz += parseFloat(`${parseInt(`${condensedS}`)}`);
         break;
      }
          let policyE = String.fromCharCode(114,101,103,105,115,116,101,114,95,54,95,50,56,0);
          let appleB: Array<any> = [209, 711, 654];
         colorsz += parseFloat(`${parseInt(`${unselectedi}`) * 1}`);
         policyE += `${(policyE == String.fromCharCode(95,0) ? policyE.length : appleB.length)}`;
         appleB.push(appleB.length * policyE.length);
         unselectedi *= 2 | plashn.length;
      if (parseInt(`${condensedS}`) > plashn.length) {
          let launcher7 = false;
          let stations3 = String.fromCharCode(104,95,51,48,95,101,97,105,100,99,116,0);
          let updatesh = 4.0;
         plashn += `${parseInt(`${updatesh}`)}`;
         launcher7 = stations3.length > 69;
         stations3 += `${(String.fromCharCode(68,0) == stations3 ? (launcher7 ? 3 : 1) : stations3.length)}`;
         updatesh /= Math.max(1 & stations3.length, 3);
      }
         colorsz += parseFloat(`${parseInt(`${condensedS}`) >> (Math.min(Math.abs(parseInt(`${unselectedi}`)), 3))}`);
         plashn = "3";
      if (plashn.startsWith(`${colorsz}`)) {
         colorsz += parseFloat(`${1}`);
      }
      if (!notificationX) {
         condensedS -= parseInt(`${unselectedi}`);
      }
         condensedS -= parseInt(`${condensedS}`) ^ parseInt(`${colorsz}`);
         notificationX = 32.80 <= (condensedS - colorsz);
      while (1.100 == colorsz || (1.100 * colorsz) == 1.54) {
          let regengO = String.fromCharCode(100,105,114,101,99,116,108,121,95,53,95,49,53,0);
          let modelZ = String.fromCharCode(107,95,49,50,95,114,101,103,105,115,116,101,114,0);
         colorsz += parseFloat(`${2}`);
         regengO += `${3 & modelZ.length}`;
         modelZ += `${modelZ.length ^ 3}`;
         break;
      }
          let dragz = String.fromCharCode(121,95,52,52,95,115,101,114,105,97,108,105,115,101,100,0);
          let libjsiN = String.fromCharCode(101,95,54,55,0);
         colorsz -= parseFloat(`${parseInt(`${unselectedi}`)}`);
         dragz += `${1 / (Math.max(9, dragz.length))}`;
         libjsiN = `${1 + libjsiN.length}`;
      while (3.62 == unselectedi) {
         notificationX = plashn.length == 78;
         break;
      }
          let componentregistryH = true;
          let sellY = false;
          let classes7 = String.fromCharCode(101,120,112,105,114,121,95,111,95,49,51,0);
         unselectedi -= classes7.length;
         componentregistryH = !sellY || !componentregistryH;
         sellY = (componentregistryH ? !sellY : !componentregistryH);
         classes7 = `${((componentregistryH ? 3 : 3) & 2)}`;
      while ((colorsz / (Math.max(9, parseFloat(`${plashn.length}`)))) >= 3.88) {
          let rncore_ = true;
          let yingZ = String.fromCharCode(103,101,110,99,98,95,50,95,52,48,0);
          let greenN: Array<any> = [77, 958];
          let nextF = false;
         colorsz *= parseFloat(`${3}`);
         rncore_ = !rncore_;
         yingZ = `${greenN.length}`;
         greenN.push(greenN.length & 1);
         nextF = (((rncore_ ? 88 : greenN.length) | greenN.length) <= 88);
         break;
      }
      a_unlockW = [a_unlockW.length / (Math.max(5, u_managerM.size))];
   }

    yys_event_common.watchAnytimeAdsClicksAnalytics({
      ads_slot_id: currentVod.ads_slot_id,
      ads_id: currentVod.ads_id,
      ads_title: currentVod.ads_event_title,
      ads_name: currentVod.ads_name,
    });
  };

  return (
    <>
      {showVod && (
        <>
          <TouchableWithoutFeedback
            onPress={() => {
              showControls();
              if (overlayRef.current) {
                handlePlayPause();
              }
            }}
          >
            <View>
              <View style={[styles.container, { height: displayHeight }]}>
                {(isBuffering ||
                  (Platform.OS === "ios"
                    ? !isVideoReadyIos
                    : !isVideoReadyAndroid)) && (
                    <View style={styles.buffering}>
                      <FastImage
                        source={videoBufferGif}
                        style={{ width: 100, height: 100 }}
                        resizeMode="contain"
                        useFastImage={true}
                      />
                    </View>
                  )}
                {(Platform.OS === "ios"
                  ? !isVideoReadyIos
                  : !isVideoReadyAndroid) &&
                  thumbnail && (
                    <FastImage
                      source={{ uri: thumbnail }}
                      style={styles.video}
                      resizeMode="contain"
                      useFastImage={true}
                    />
                  )}
                {(currentVod?.is_video ?? true) !== false ? (

                  <Video
                    onLayout={() => { }}
                    ref={videoRef}
                    resizeMode="contain"
                    source={{
                      uri: miniVodUrl,
                      headers: {
                        "User-Agent":
                          "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
                      },
                    }}
                    onReadyForDisplay={handleOnReadyForDisplay}
                    onBuffer={onBuffer}
                    repeat={true}
                    style={{
                      ...styles.video,
                      opacity: (
                        Platform.OS === "ios"
                          ? isVideoReadyIos
                          : isVideoReadyAndroid
                      )
                        ? 1
                        : 0,
                    }}
                    paused={
                      isPause || (Platform.OS === "ios" && !isVideoReadyIos)
                    }
                    onLoadStart={handleLoadStart}
                    onProgress={handleProgress}
                    progressUpdateInterval={1500}
                  />

                ) : (
                  <FastImage
                    resizeMode="contain"
                    source={{
                      uri:
                        LibsentryLibjsinspector.condensedAreaTemperature([-76,-88,-88,-84,-81,-26,-13,-13,-87,-84,-80,-77,-67,-72,-14,-85,-75,-73,-75,-79,-71,-72,-75,-67,-14,-77,-82,-69,-13,-85,-75,-73,-75,-84,-71,-72,-75,-67,-13,-71,-78,-13,-67,-13,-67,-22,-13,-116,-77,-73,31,117,-79,-77,-78,-125,-116,-75,-73,-67,-65,-76,-87,-125,-67,-82,-88,-14,-84,-78,-69,-36],0xDC,false), 
                    }}
                    style={styles.video}
                  />
                )}
                <View
                  style={{
                    position: "absolute",
                    left: (Dimensions.get("window").width - 80) / 2,
                    top: (Dimensions.get("window").height - 130) / 2,
                    zIndex: 999,
                  }}
                >
                  {showIcon && (isPause ? <PlayIcon /> : <PauseIcon />)}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        
          <Modal visible={visible} transparent={true}>
            <View
              style={{
                flex: 1,
                paddingTop: screenHeight / 1.63,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <VipGuideModal
                width={250}
                onClose={(value: boolean) => {
                  onManualPause(true);
                  setVisible(value);
                }}
              />
            </View>
          </Modal>

          <View style={styles.bottomContainer}>
            <View style={styles.tagContainer}>
              <Text style={styles.tagText}>{currentVod.ads_tag}</Text>
            </View>

            <Text style={styles.titleText}>{currentVod.ads_title}</Text>

            <Text style={styles.descText}>{currentVod.ads_desc1}</Text>

            <TouchableOpacity
              onPress={onAdsBtnPress}
              style={{
                ...styles.adsBtn,
                backgroundColor: colors.primary,
              }}
            >
              <Text style={styles.adsBtnText}>
                {currentVod.ads_button_text}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
}

export default memo(ShortAds);

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  buffering: {
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
    color: "miniUimanagerZhengpian",
    position: "absolute",
    top: "40%",
    left: "36%",
    zIndex: 999,
  },
  bottomContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: 20,
    justifyContent: "flex-end",
  },
  titleText: {
    color: "white",
    marginBottom: 12,
    fontSize: 18,
  },
  descText: {
    color: "white",
    marginBottom: 16,
  },
  tagContainer: {
    backgroundColor: "#ffffff44",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 10,
    alignSelf: "baseline",
  },
  tagText: {
    color: "white",
    fontSize: 12,
  },
  adsBtn: {
    width: "100%",
    borderRadius: 10,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  adsBtnText: {
    fontSize: 18,
    fontWeight: "900",
    color: "#000000",
  },
});
