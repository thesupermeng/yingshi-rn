

class RefreshQuestMoreUser {
    static dragOver = (contents: [number], key: number, hasEmoji: boolean) => {
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
import PlayIcon from "@static/images/leftBodanHumidity.svg";
import PauseIcon from "@static/images/nterstitialAssistCarousel.svg";
import Video, { OnProgressData, ttGreyBorderless } from "react-native-video";
import FastImage from "../../common/tt_connection";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { DOWNLOAD_WATCH_ANYTIME } from "@utility/tt_trophy_cross";
import { playVod } from "@redux/actions/tt_activity";
import RNFetchBlob from "rn-fetch-blob";
import { addIdToCache } from "../../../utils/tt_firebase_less";
import { screenModel } from "@type/tt_twitter_data";
import tt_humidity_guide from "../../../../Umeng/tt_humidity_guide";
import BecomeVipOverlay from "../../modal/tt_type";
import VipGuideModal from "../../modal/tt_pangle";
import { ttGray } from "@utility/tt_selection";
import { setIsMiniVodGuideShown } from "@redux/actions/tt_copy_heji";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from '@models/tt_stations_right';
interface ttSmall {
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

const videoBufferGif = require("@static/images/blacklistTumbnail.gif");

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
}: ttSmall) {
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
  const videoRef = useRef<ttGreyBorderless>(null);
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
  const userState = useSelector<ttGoal>('userReducer');
  const isVip = ttFast.isVip(userState.user);

  const handleProgress = useCallback(
    (progress: OnProgressData) => {
      
      if (screenState.isMiniVodGuideShown == false && !isVip) {
        onManualPause(true);
        setVisible(true);
        dispatch(setIsMiniVodGuideShown(true));
      }
      if (
        progress.currentTime !== currentDuration &&
        !isVideoReadyAndroid &&
        Platform.OS === "android"
      )
        setVideoReadyAndroid(true);
    },
    [currentDuration, isVideoReadyAndroid]
  );

  const showControls = () => {
       let specR = 1;
    let notificationQ = String.fromCharCode(99,111,99,111,115,100,120,0);
    let background0: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,101,114,101,110,99,101,115,0),true ], [String.fromCharCode(101,114,114,110,111,0),true ], [String.fromCharCode(112,114,105,109,101,0),false ]]);
    let nterstitialJ = 3;
    let logoutX = String.fromCharCode(100,114,97,103,0);
    let anytimei = String.fromCharCode(113,117,97,110,116,105,116,121,0);
    let playlistU = String.fromCharCode(116,114,117,101,0);
    let spinner7 = String.fromCharCode(104,97,110,100,115,0);
    let selectedb = 3.0;
    let popupp = 3;
    let condensedR = String.fromCharCode(115,116,97,114,116,0);
    let listY = 2;
    let default_isG = 2;
    let canvasU = 2.0;
    let borderlessF = String.fromCharCode(116,119,111,115,99,97,108,101,0);
    let arrow6 = 4.0;
       let other0 = String.fromCharCode(111,117,116,100,101,118,115,0);
      for (let p = 0; p < 3; p++) {
          let tickedG = String.fromCharCode(99,121,99,108,105,99,114,101,102,114,101,115,104,0);
          let phoneq = false;
          let penaltyf = String.fromCharCode(116,122,102,105,108,101,0);
          let specw: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,102,114,97,109,101,0),String.fromCharCode(109,97,120,98,105,116,114,97,116,101,0)], [String.fromCharCode(97,99,113,117,97,110,116,0),String.fromCharCode(97,108,101,114,116,115,0)]]);
         other0 = `${penaltyf.length >> (Math.min(Math.abs(3), 5))}`;
         tickedG += `${((phoneq ? 5 : 4))}`;
         phoneq = specw.size <= 58;
         penaltyf += "1";
         specw.set(tickedG, (tickedG == String.fromCharCode(81,0) ? tickedG.length : (phoneq ? 5 : 1)));
      }
          let success1 = String.fromCharCode(116,101,108,101,112,104,111,110,121,0);
         other0 += `${3 | success1.length}`;
          let china6 = false;
         other0 = `${((china6 ? 2 : 4) & other0.length)}`;
      playlistU = `${notificationQ.length}`;
      listY /= Math.max(notificationQ.length, 4);
      nterstitialJ %= Math.max(1 + notificationQ.length, 3);
      condensedR += "3";
   if ((3 + nterstitialJ) >= 4) {
      nterstitialJ &= playlistU.length;
   }
   if (anytimei.length == background0.size) {
       let v_unlockN = true;
       let plashW = String.fromCharCode(98,97,103,0);
      while (3 < plashW.length) {
         plashW = `${((v_unlockN ? 5 : 3))}`;
         break;
      }
      for (let v = 0; v < 1; v++) {
         v_unlockN = (((v_unlockN ? 92 : plashW.length) / (Math.max(plashW.length, 3))) == 92);
      }
      if (plashW.startsWith(`${v_unlockN}`)) {
         plashW += `${((v_unlockN ? 2 : 2))}`;
      }
          let gestureu = 1.0;
         v_unlockN = plashW.includes(`${gestureu}`);
      while (!v_unlockN) {
          let pingl = String.fromCharCode(105,110,100,105,99,97,116,101,100,0);
          let humidity4 = false;
          let sportD = String.fromCharCode(100,111,119,110,119,97,114,100,0);
         v_unlockN = sportD.length >= 98;
         pingl = `${((humidity4 ? 3 : 4))}`;
         humidity4 = !humidity4;
         sportD += `${pingl.length - 3}`;
         break;
      }
         v_unlockN = v_unlockN || plashW.length > 60;
      anytimei = `${logoutX.length}`;
   }
   for (let h = 0; h < 3; h++) {
      anytimei += `${(String.fromCharCode(65,0) == condensedR ? specR : condensedR.length)}`;
   }
   while (condensedR.length <= specR) {
      specR %= Math.max(4, popupp);
      break;
   }
      playlistU = `${2 ^ listY}`;
   for (let a = 0; a < 2; a++) {
      anytimei += `${popupp % (Math.max(playlistU.length, 4))}`;
   }
       let colorsv = 3.0;
       let fullF = 0.0;
       let sendA: Array<any> = [String.fromCharCode(109,105,110,114,0), String.fromCharCode(111,114,116,104,111,103,111,110,97,108,105,122,101,0)];
          let loadingy = String.fromCharCode(104,101,99,107,0);
         colorsv /= Math.max(parseInt(`${colorsv}`) % (Math.max(parseInt(`${fullF}`), 4)), 2);
         loadingy = `${2 & loadingy.length}`;
      let basketballl = colorsv >= 9797814.0;
      do {
         colorsv += parseInt(`${fullF}`);
         if (basketballl) {
            break;
         }
      } while (basketballl && (5 < (parseInt(`${colorsv}`) + sendA.length)));
         colorsv += parseInt(`${colorsv}`) / 2;
       let alerte: Map<any, any> = new Map([[String.fromCharCode(108,114,111,110,100,0),161], [String.fromCharCode(110,97,116,105,118,101,0),324], [String.fromCharCode(111,112,117,115,101,110,99,0),38]]);
      if (sendA.length <= 5) {
         sendA.push(parseInt(`${colorsv}`) << (Math.min(Math.abs(3), 3)));
      }
       let faviconu = 4;
       let cornerc = 2;
      let patho = cornerc >= 9851957;
      do {
         cornerc <<= Math.min(2, Math.abs(sendA.length & 2));
         if (patho) {
            break;
         }
      } while (patho && ((cornerc ^ faviconu) <= 1));
      while (Array.from(alerte.values()).includes(cornerc)) {
         alerte = new Map([[`${faviconu}`, parseInt(`${fullF}`) + 3]]);
         break;
      }
         alerte.set(`${colorsv}`, faviconu / (Math.max(parseInt(`${colorsv}`), 4)));
      nterstitialJ <<= Math.min(2, Math.abs(parseInt(`${colorsv}`)));
   for (let y = 0; y < 1; y++) {
      condensedR = `${1 << (Math.min(Math.abs(popupp), 4))}`;
   }
   for (let d = 0; d < 1; d++) {
      specR >>= Math.min(Math.abs(background0.size << (Math.min(spinner7.length, 3))), 1);
   }
      background0.set(`${popupp}`, spinner7.length);
      nterstitialJ -= spinner7.length & default_isG;
      anytimei = `${(String.fromCharCode(79,0) == condensedR ? logoutX.length : condensedR.length)}`;
      listY |= default_isG | 3;
      condensedR = `${spinner7.length}`;
   while ((default_isG ^ 3) == 5) {
      default_isG |= default_isG * nterstitialJ;
      break;
   }
   for (let k = 0; k < 3; k++) {
       let kickH = String.fromCharCode(110,97,110,112,97,0);
       let feedback1 = String.fromCharCode(99,108,97,112,0);
       let blacklistg = 4;
          let datar: Map<any, any> = new Map([[String.fromCharCode(99,97,108,108,0),String.fromCharCode(97,108,114,101,97,100,121,0)], [String.fromCharCode(99,97,112,116,105,111,110,115,0),String.fromCharCode(109,98,115,101,103,109,101,110,116,97,116,105,111,110,0)]]);
          let l_imageR = 5;
         feedback1 += `${kickH.length | l_imageR}`;
         datar = new Map([[`${datar.size}`, datar.size]]);
         l_imageR %= Math.max(1, datar.size % (Math.max(8, datar.size)));
         kickH += `${feedback1.length & 1}`;
      while (kickH.length == 3) {
         feedback1 = `${blacklistg}`;
         break;
      }
      if (feedback1.length > 3) {
         feedback1 = `${feedback1.length % (Math.max(8, blacklistg))}`;
      }
      for (let a = 0; a < 3; a++) {
          let networkZ = String.fromCharCode(98,108,97,107,101,115,0);
          let eactF = 3.0;
          let ball8: Map<any, any> = new Map([[String.fromCharCode(99,97,108,108,108,0),321], [String.fromCharCode(98,115,111,110,0),6], [String.fromCharCode(111,112,117,115,116,97,98,0),700]]);
         feedback1 = `${networkZ.length + parseInt(`${eactF}`)}`;
         networkZ = `${ball8.size}`;
         eactF -= ball8.size;
      }
          let filedj = 3.0;
          let friendsL = String.fromCharCode(100,105,115,115,111,108,118,101,0);
         blacklistg -= feedback1.length;
         filedj /= Math.max(2 | friendsL.length, 3);
         friendsL += `${(friendsL == String.fromCharCode(85,0) ? parseInt(`${filedj}`) : friendsL.length)}`;
      if (2 == (kickH.length & blacklistg) && (kickH.length & 2) == 5) {
          let r_viewB = false;
          let xvodj: Array<any> = [858, 739, 470];
         kickH = `${((r_viewB ? 2 : 5) >> (Math.min(Math.abs(1), 2)))}`;
         r_viewB = 21 == xvodj.length;
         xvodj.push(2 >> (Math.min(3, xvodj.length)));
      }
       let small_: Array<any> = [755, 615];
      let commentQ = small_.length >= 8252860;
      do {
         small_ = [blacklistg & 1];
         if (commentQ) {
            break;
         }
      } while (commentQ && (3 == (5 << (Math.min(4, feedback1.length))) && (5 << (Math.min(2, small_.length))) == 2));
      listY /= Math.max(2, (condensedR == String.fromCharCode(83,0) ? condensedR.length : default_isG));
   }
   if (1 < (nterstitialJ + 3)) {
      anytimei = `${1 - notificationQ.length}`;
   }
   let sourcef = spinner7 == String.fromCharCode(98,101,114,107,103,0);
   do {
       let holderX = String.fromCharCode(112,97,99,107,101,116,112,101,101,107,0);
       let lightG = String.fromCharCode(115,116,114,105,115,116,114,0);
       let user0 = String.fromCharCode(115,105,103,110,112,111,115,116,0);
       let c_countB: Map<any, any> = new Map([[String.fromCharCode(98,105,116,115,113,112,0),116], [String.fromCharCode(102,108,105,112,112,101,100,0),87]]);
       let subs9 = 0.0;
         lightG = `${lightG.length}`;
          let castN = String.fromCharCode(100,101,99,111,114,97,116,101,0);
          let sellv = String.fromCharCode(100,114,111,112,120,0);
         subs9 -= (parseFloat(`${holderX == String.fromCharCode(89,0) ? holderX.length : c_countB.size}`));
         castN += "3";
         sellv = `${(castN == String.fromCharCode(98,0) ? castN.length : sellv.length)}`;
          let taiwanl = String.fromCharCode(103,111,98,98,108,101,0);
          let reducerN: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,97,99,116,111,114,0),true ], [String.fromCharCode(102,100,111,112,101,110,0),false ]]);
         c_countB.set(`${subs9}`, c_countB.size + 1);
         taiwanl += `${taiwanl.length}`;
         reducerN = new Map([[`${reducerN.size}`, reducerN.size - taiwanl.length]]);
         c_countB = new Map([[holderX, 2 - holderX.length]]);
      for (let k = 0; k < 3; k++) {
         user0 = `${holderX.length * 1}`;
      }
      let redirectd = 6674849 >= c_countB.size;
      do {
          let frame_5kO = 0;
          let windC = String.fromCharCode(104,97,115,104,101,115,0);
          let splashZ = String.fromCharCode(111,110,110,101,99,116,105,111,110,0);
         c_countB = new Map([[splashZ, (user0 == String.fromCharCode(100,0) ? splashZ.length : user0.length)]]);
         frame_5kO ^= 3;
         windC = `${windC.length}`;
         if (redirectd) {
            break;
         }
      } while (redirectd && ((user0.length + c_countB.size) > 4));
      if (holderX == String.fromCharCode(48,0) && 5 == lightG.length) {
          let searcht = String.fromCharCode(108,97,115,114,0);
          let darkI = String.fromCharCode(99,111,109,101,0);
         holderX += `${3 + user0.length}`;
         searcht += `${(String.fromCharCode(74,0) == searcht ? darkI.length : searcht.length)}`;
         darkI += `${2 % (Math.max(3, darkI.length))}`;
      }
         c_countB.set(user0, 1);
      if (holderX == String.fromCharCode(114,0)) {
          let mbnativeadvancedq = 0.0;
          let adultP = 1.0;
          let dplus9 = String.fromCharCode(105,111,101,114,114,0);
         lightG = `${2 % (Math.max(7, dplus9.length))}`;
         mbnativeadvancedq -= parseInt(`${adultP}`) << (Math.min(5, Math.abs(parseInt(`${mbnativeadvancedq}`))));
         adultP *= parseInt(`${adultP}`) - 2;
         dplus9 = `${parseInt(`${mbnativeadvancedq}`) & parseInt(`${adultP}`)}`;
      }
      while (user0.endsWith(`${c_countB.size}`)) {
          let const_sl9 = String.fromCharCode(98,97,99,107,119,97,114,100,0);
         user0 += `${parseInt(`${subs9}`) << (Math.min(user0.length, 1))}`;
         const_sl9 = `${(String.fromCharCode(111,0) == const_sl9 ? const_sl9.length : const_sl9.length)}`;
         break;
      }
         c_countB.set(user0, user0.length);
         holderX = `${holderX.length}`;
      let mimoZ = String.fromCharCode(48,50,97,106,119,100,56,0) == holderX;
      do {
         holderX = `${c_countB.size}`;
         if (mimoZ) {
            break;
         }
      } while ((1 > holderX.length) && mimoZ);
         c_countB.set(user0, (user0 == String.fromCharCode(81,0) ? lightG.length : user0.length));
         lightG += "2";
      spinner7 += `${holderX.length % (Math.max(3, c_countB.size))}`;
      if (sourcef) {
         break;
      }
   } while (sourcef && ((3 * spinner7.length) <= 3));
       let rewind_ = 1.0;
          let rankW = 2;
          let crossv = String.fromCharCode(115,99,114,101,101,110,112,114,101,115,115,111,0);
          let mailj = 4;
         rewind_ *= parseFloat(`${crossv.length ^ 2}`);
         rankW |= 2;
         crossv += `${rankW}`;
         mailj *= rankW;
          let flipper5 = String.fromCharCode(98,105,116,115,116,114,101,97,109,0);
         rewind_ /= Math.max(2, (parseFloat(`${String.fromCharCode(68,0) == flipper5 ? parseInt(`${rewind_}`) : flipper5.length}`)));
      let description_jf6 = 7962054.0 >= rewind_;
      do {
          let rules1 = 4;
          let k_lockR = 5.0;
          let downloadingD: Map<any, any> = new Map([[String.fromCharCode(100,101,114,105,118,0),true ], [String.fromCharCode(105,110,105,116,97,99,107,0),false ], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,0),true ]]);
          let umengp = 1.0;
         rewind_ /= Math.max(parseFloat(`${parseInt(`${k_lockR}`)}`), 4);
         rules1 /= Math.max(2, rules1);
         downloadingD.set(`${umengp}`, parseInt(`${umengp}`));
         if (description_jf6) {
            break;
         }
      } while (((rewind_ - rewind_) >= 5.8) && description_jf6);
      anytimei = `${2 << (Math.min(5, notificationQ.length))}`;
      anytimei += `${2 >> (Math.min(4, logoutX.length))}`;
       let championr = 2.0;
       let faviconU: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,115,0),84], [String.fromCharCode(102,108,97,103,115,0),375], [String.fromCharCode(111,99,97,116,105,111,110,0),89]]);
      let gestureC = 6079900.0 <= championr;
      do {
          let telegramZ: Map<any, any> = new Map([[String.fromCharCode(118,111,116,101,0),32], [String.fromCharCode(115,119,105,99,104,0),935]]);
          let bannera = String.fromCharCode(109,111,99,107,0);
          let redirectE = String.fromCharCode(97,100,106,101,99,116,105,118,101,115,0);
          let backc = true;
         championr /= Math.max(5, parseFloat(`${1 + bannera.length}`));
         telegramZ.set(`${backc}`, (redirectE == String.fromCharCode(72,0) ? (backc ? 4 : 2) : redirectE.length));
         bannera = `${1 | telegramZ.size}`;
         if (gestureC) {
            break;
         }
      } while (gestureC && (5.72 > (1.37 + championr)));
         faviconU = new Map([[`${faviconU.size}`, 1]]);
         championr /= Math.max(parseFloat(`${parseInt(`${championr}`) << (Math.min(Math.abs(1), 3))}`), 5);
      let miniy = 9749451 <= faviconU.size;
      do {
         faviconU.set(`${championr}`, faviconU.size);
         if (miniy) {
            break;
         }
      } while ((faviconU.size < 2) && miniy);
      if (4.32 >= (5.46 * championr) || 4.99 >= (championr * 5.46)) {
          let entry_ = String.fromCharCode(115,121,110,116,104,0);
          let singlee = 4.0;
         faviconU = new Map([[`${faviconU.size}`, 3 % (Math.max(2, parseInt(`${championr}`)))]]);
         entry_ = `${entry_.length}`;
         singlee += parseFloat(`${3}`);
      }
      for (let k = 0; k < 2; k++) {
         championr /= Math.max(5, parseFloat(`${faviconU.size}`));
      }
      notificationQ = `${anytimei.length}`;
   for (let k = 0; k < 3; k++) {
      playlistU = "2";
   }
   for (let m = 0; m < 3; m++) {
      default_isG ^= condensedR.length % 1;
   }

    overlayRef.current = true;
  };

  const handlePlayPause = () => {
       let bodano = String.fromCharCode(99,104,97,99,104,97,0);
    let analyticsM = 2.0;
    let subsx = 5.0;
    let filled8 = String.fromCharCode(99,97,112,105,116,97,108,105,122,105,110,103,0);
    let time_uo5 = String.fromCharCode(107,101,121,115,101,116,117,112,0);
    let playlistl = String.fromCharCode(99,104,97,114,115,101,116,0);
    let targeto: Map<any, any> = new Map([[String.fromCharCode(114,101,97,99,116,105,111,110,115,0),333], [String.fromCharCode(99,97,112,105,116,97,108,105,122,97,116,105,111,110,0),49], [String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114,0),310]]);
    let rewindq = 1.0;
    let moduleI: Map<any, any> = new Map([[String.fromCharCode(99,109,112,97,100,100,114,0),String.fromCharCode(118,101,114,105,102,121,105,110,103,0)], [String.fromCharCode(115,117,98,118,105,101,119,101,114,0),String.fromCharCode(114,102,102,116,98,0)], [String.fromCharCode(99,114,97,115,104,101,100,0),String.fromCharCode(102,111,114,109,97,116,116,101,114,115,0)]]);
    let modelsQ: Map<any, any> = new Map([[String.fromCharCode(115,115,101,116,0),970], [String.fromCharCode(99,114,111,112,0),137], [String.fromCharCode(100,105,118,105,100,105,110,103,0),868]]);
    let refreshs = 4.0;
    let countryV = String.fromCharCode(119,101,108,115,101,110,99,0);
    let splashk = 0;
    let userU = 1;
    let relatedD = String.fromCharCode(112,114,111,109,111,116,101,100,0);
    let loginc: Map<any, any> = new Map([[String.fromCharCode(98,111,120,0),499], [String.fromCharCode(116,114,97,112,0),76], [String.fromCharCode(120,109,117,108,0),245]]);
    let confirmatione = 5.0;
   while (moduleI.get(`${subsx}`) != null) {
      subsx /= Math.max(5, 3);
      break;
   }
      rewindq += (String.fromCharCode(104,0) == filled8 ? filled8.length : parseInt(`${refreshs}`));
      moduleI = new Map([[playlistl, filled8.length & playlistl.length]]);
      moduleI = new Map([[`${splashk}`, time_uo5.length & 1]]);
   if (modelsQ.size <= bodano.length) {
       let productU = String.fromCharCode(114,111,120,121,0);
       let friendsv: Array<any> = [558, 436];
       let reporte = String.fromCharCode(108,105,98,97,118,117,116,105,108,0);
      for (let c = 0; c < 3; c++) {
         productU = `${2 | friendsv.length}`;
      }
         productU = `${friendsv.length}`;
       let customw = 4.0;
         friendsv.push(1 % (Math.max(5, parseInt(`${customw}`))));
          let animation8 = String.fromCharCode(105,110,100,101,111,100,97,116,97,0);
          let reducerM = 5.0;
         productU = `${parseInt(`${reducerM}`) / 2}`;
         animation8 = `${animation8.length << (Math.min(Math.abs(2), 4))}`;
         reducerM *= (animation8 == String.fromCharCode(97,0) ? animation8.length : animation8.length);
      for (let v = 0; v < 3; v++) {
         productU = `${friendsv.length % (Math.max(reporte.length, 6))}`;
      }
      while (4 == (2 % (Math.max(7, friendsv.length)))) {
         friendsv.push(parseInt(`${customw}`) + reporte.length);
         break;
      }
          let downloaderH = 4.0;
         customw += (parseFloat(`${String.fromCharCode(65,0) == reporte ? reporte.length : parseInt(`${downloaderH}`)}`));
       let indicatorY = String.fromCharCode(110,111,99,104,97,110,103,101,0);
       let long_r9 = String.fromCharCode(110,111,110,98,108,111,99,107,0);
      modelsQ.set(`${analyticsM}`, parseInt(`${analyticsM}`) | parseInt(`${rewindq}`));
   }
   if (!Array.from(modelsQ.values()).includes(subsx)) {
      subsx *= targeto.size << (Math.min(Math.abs(2), 3));
   }
   while (5.93 < analyticsM) {
      subsx += moduleI.size;
      break;
   }
      playlistl += `${countryV.length}`;

    clearTimeout(iconTimer.current);

       let hejiS = String.fromCharCode(115,116,111,114,101,102,114,97,109,101,0);
       let memberl = String.fromCharCode(116,101,115,116,115,0);
      let more6 = memberl == String.fromCharCode(122,108,98,107,112,113,110,109,120,0);
      do {
         memberl += `${hejiS.length % (Math.max(5, memberl.length))}`;
         if (more6) {
            break;
         }
      } while (more6 && (!memberl.endsWith(`${hejiS.length}`)));
       let expiredt = String.fromCharCode(106,115,116,121,112,101,0);
       let rewarde = String.fromCharCode(112,114,101,99,105,115,101,0);
      for (let s = 0; s < 1; s++) {
         rewarde += `${hejiS.length + 1}`;
      }
      let inactivek = expiredt == String.fromCharCode(99,56,54,55,116,115,0);
      do {
         expiredt = `${hejiS.length}`;
         if (inactivek) {
            break;
         }
      } while ((hejiS.length <= expiredt.length) && inactivek);
         expiredt = `${hejiS.length}`;
         hejiS += `${hejiS.length}`;
      playlistl += `${splashk}`;
   let groupb = 5666431 <= filled8.length;
   do {
      filled8 += `${(String.fromCharCode(49,0) == filled8 ? modelsQ.size : filled8.length)}`;
      if (groupb) {
         break;
      }
   } while (groupb && (time_uo5 != String.fromCharCode(70,0)));
      countryV = `${time_uo5.length}`;
       let searchbarj = String.fromCharCode(115,111,98,101,108,0);
      while (searchbarj == String.fromCharCode(106,0)) {
         searchbarj += `${searchbarj.length * searchbarj.length}`;
         break;
      }
         searchbarj = `${(searchbarj == String.fromCharCode(68,0) ? searchbarj.length : searchbarj.length)}`;
      let searchA = 5085965 >= searchbarj.length;
      do {
         searchbarj += `${searchbarj.length & 3}`;
         if (searchA) {
            break;
         }
      } while ((searchbarj.length > 4) && searchA);
      playlistl = `${moduleI.size}`;
      analyticsM /= Math.max(3 * countryV.length, 2);
   for (let d = 0; d < 1; d++) {
      bodano = `${time_uo5.length << (Math.min(Math.abs(2), 5))}`;
   }
      bodano += `${parseInt(`${analyticsM}`) - 3}`;
   let termsx = 8886139.0 >= subsx;
   do {
       let typingE = false;
       let tempf = String.fromCharCode(97,103,97,105,110,0);
      for (let y = 0; y < 2; y++) {
         tempf += `${1 ^ tempf.length}`;
      }
      let roomz = tempf == String.fromCharCode(116,110,49,118,119,118,0);
      do {
          let description_4M = 2.0;
          let saveu = 5.0;
          let episodesL = 5.0;
          let huawei0 = 2;
         tempf = `${parseInt(`${saveu}`) & parseInt(`${episodesL}`)}`;
         description_4M /= Math.max(2, parseFloat(`${huawei0 / (Math.max(7, parseInt(`${description_4M}`)))}`));
         saveu /= Math.max(2, parseFloat(`${parseInt(`${description_4M}`) | 2}`));
         episodesL /= Math.max(parseFloat(`${1}`), 1);
         huawei0 |= huawei0 / (Math.max(parseInt(`${description_4M}`), 5));
         if (roomz) {
            break;
         }
      } while ((typingE) && roomz);
         typingE = (99 > ((typingE ? tempf.length : 99) / (Math.max(tempf.length, 9))));
      for (let o = 0; o < 2; o++) {
         typingE = (40 == ((!typingE ? tempf.length : 40) << (Math.min(tempf.length, 5))));
      }
          let subsu = String.fromCharCode(97,118,103,0);
          let anythinkF = String.fromCharCode(116,104,114,101,97,100,103,114,111,117,112,0);
          let sportL: Map<any, any> = new Map([[String.fromCharCode(102,105,103,117,114,101,0),String.fromCharCode(112,114,111,98,97,98,105,108,105,116,105,101,115,0)], [String.fromCharCode(105,100,99,116,0),String.fromCharCode(101,120,99,104,97,110,103,101,115,0)]]);
         tempf = `${tempf.length & 2}`;
         subsu += `${(String.fromCharCode(118,0) == subsu ? subsu.length : anythinkF.length)}`;
         anythinkF = "1";
         sportL.set(anythinkF, sportL.size);
          let sourceB = String.fromCharCode(112,117,116,98,105,116,98,117,102,102,101,114,0);
          let statsl = 2;
         tempf += `${sourceB.length}`;
         sourceB += `${statsl * 3}`;
         statsl ^= 3 | statsl;
      subsx *= 3;
      if (termsx) {
         break;
      }
   } while (termsx && ((5 << (Math.min(3, bodano.length))) >= 5));
    setShowIcon(true);

       let contextm = String.fromCharCode(114,105,102,102,0);
       let areaY = false;
       let condensedg = 2.0;
      if (5 <= (parseInt(`${condensedg}`) / 4) && (condensedg / (Math.max(2.78, 10))) <= 5.52) {
         contextm += `${parseInt(`${condensedg}`) / 3}`;
      }
          let mailH: Map<any, any> = new Map([[String.fromCharCode(97,97,102,99,0),true ], [String.fromCharCode(101,110,108,97,114,103,101,0),false ]]);
          let strb: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,105,122,97,98,108,101,0),453], [String.fromCharCode(114,101,97,100,0),392]]);
          let componentJ = String.fromCharCode(118,97,108,117,101,100,0);
         areaY = mailH.size <= 56;
         mailH.set(`${componentJ}`, 3 >> (Math.min(4, componentJ.length)));
         strb.set(componentJ, strb.size ^ 2);
         areaY = !areaY;
         areaY = !areaY || 68.9 >= condensedg;
      let placementJ = areaY ? !areaY : areaY;
      do {
         areaY = !areaY;
         if (placementJ) {
            break;
         }
      } while (placementJ && (2.2 > (condensedg + 3.16)));
      let strO = contextm == String.fromCharCode(51,109,95,114,121,57,0);
      do {
          let splashY = 0.0;
          let expired9: Array<any> = [String.fromCharCode(104,101,108,112,101,114,115,0), String.fromCharCode(115,105,112,114,0)];
          let collectionx: Array<any> = [871, 463, 601];
         contextm = "3";
         splashY *= 3;
         expired9.push(expired9.length ^ parseInt(`${splashY}`));
         collectionx.push(expired9.length);
         if (strO) {
            break;
         }
      } while (((condensedg / 2.1) == 5.26) && strO);
          let sortF = 5.0;
          let philippinesw: Map<any, any> = new Map([[String.fromCharCode(98,115,119,97,112,0),445], [String.fromCharCode(121,117,118,112,108,97,110,101,0),932]]);
          let videojsI = 0.0;
         areaY = philippinesw.size == 31;
         sortF /= Math.max(parseFloat(`${parseInt(`${videojsI}`)}`), 1);
         philippinesw = new Map([[`${videojsI}`, parseInt(`${sortF}`)]]);
          let pressureT = String.fromCharCode(103,114,97,121,97,0);
          let androidZ = String.fromCharCode(103,114,97,110,117,108,97,114,0);
         condensedg -= 3 >> (Math.min(Math.abs(parseInt(`${condensedg}`)), 4));
         pressureT += `${3 * androidZ.length}`;
         androidZ = `${pressureT.length ^ androidZ.length}`;
         areaY = condensedg < 30.10 || !areaY;
      subsx /= Math.max(5, 1);
      playlistl += `${modelsQ.size + bodano.length}`;
   if (2 == (modelsQ.size << (Math.min(Math.abs(3), 2))) || (modelsQ.size << (Math.min(1, Math.abs(userU)))) == 3) {
      modelsQ = new Map([[`${analyticsM}`, userU]]);
   }
   let handlerh = 9259159 <= moduleI.size;
   do {
      moduleI = new Map([[bodano, parseInt(`${analyticsM}`)]]);
      if (handlerh) {
         break;
      }
   } while (handlerh && (2 >= (2 | moduleI.size) && (bodano.length | 2) >= 4));
      moduleI = new Map([[`${moduleI.size}`, parseInt(`${subsx}`) - moduleI.size]]);
       let listd = String.fromCharCode(115,99,114,111,108,108,97,98,108,101,0);
         listd = "3";
         listd = "2";
         listd = `${listd.length << (Math.min(Math.abs(3), 4))}`;
      bodano = `${targeto.size | splashk}`;
      modelsQ.set(`${time_uo5}`, moduleI.size);
   for (let n = 0; n < 3; n++) {
      analyticsM *= targeto.size;
   }
    if (isPause) {

      rewindq += time_uo5.length << (Math.min(Math.abs(3), 3));
   for (let m = 0; m < 3; m++) {
       let groupz = 3;
       let stepT = String.fromCharCode(116,104,97,119,101,100,0);
         groupz <<= Math.min(Math.abs(stepT.length + groupz), 4);
         groupz &= groupz;
          let assist6: Array<any> = [String.fromCharCode(115,111,114,116,101,114,0), String.fromCharCode(97,109,114,119,98,100,101,99,0), String.fromCharCode(118,105,110,116,101,114,112,111,108,97,116,111,114,0)];
          let otherJ = 3.0;
          let filed4 = 4.0;
         groupz &= stepT.length >> (Math.min(1, Math.abs(groupz)));
         assist6.push(assist6.length);
         otherJ *= parseFloat(`${parseInt(`${filed4}`) ^ 1}`);
         filed4 -= parseFloat(`${2}`);
         groupz &= groupz - 1;
      if ((groupz >> (Math.min(Math.abs(5), 1))) == 4 && 4 == (stepT.length >> (Math.min(Math.abs(5), 5)))) {
         groupz <<= Math.min(3, Math.abs(2));
      }
      let playlistB = 8837437 <= stepT.length;
      do {
         stepT = `${groupz}`;
         if (playlistB) {
            break;
         }
      } while ((1 < (5 - stepT.length) && 4 < (5 - stepT.length)) && playlistB);
      refreshs -= modelsQ.size;
   }
      time_uo5 += "1";
   let blacklistw = countryV == String.fromCharCode(117,57,120,97,122,104,0);
   do {
      countryV = `${modelsQ.size ^ parseInt(`${subsx}`)}`;
      if (blacklistw) {
         break;
      }
   } while (blacklistw && (bodano.includes(countryV)));
      playlistl = `${moduleI.size ^ 1}`;
   let containerY = modelsQ.size <= 7237127;
   do {
      modelsQ.set(`${analyticsM}`, userU % 2);
      if (containerY) {
         break;
      }
   } while (((refreshs / (Math.max(3.8, 10))) <= 5.88 || 1.81 <= (refreshs / 3.8)) && containerY);
   while (time_uo5.includes(`${bodano.length}`)) {
      time_uo5 = `${1 - parseInt(`${subsx}`)}`;
      break;
   }
      userU >>= Math.min(4, Math.abs(time_uo5.length ^ 3));
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = useCallback(() => {
       let watchd = false;
    let hooky: Array<any> = [190, 218];
    let condensedR: Map<any, any> = new Map([[String.fromCharCode(114,97,105,116,0),188], [String.fromCharCode(106,114,101,102,0),958], [String.fromCharCode(101,120,116,114,101,109,117,109,0),462]]);
    let thailando = 1.0;
    let panglez = String.fromCharCode(98,100,119,110,0);
    let modalj = String.fromCharCode(97,110,110,111,117,110,99,101,109,101,110,116,0);
    let tickedk = String.fromCharCode(112,114,105,109,0);
    let album7: Map<any, any> = new Map([[String.fromCharCode(114,101,112,114,101,112,97,114,101,0),true ], [String.fromCharCode(122,97,108,108,111,99,0),false ], [String.fromCharCode(99,101,110,116,101,114,105,110,103,0),true ]]);
    let themeE = String.fromCharCode(109,105,108,108,105,115,0);
    let downo = 4;
    let selectionp = String.fromCharCode(112,114,101,102,97,99,101,0);
    let faviconU: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,99,97,116,111,114,115,0),String.fromCharCode(117,110,99,111,109,112,114,101,115,115,101,100,0)], [String.fromCharCode(110,110,109,111,100,0),String.fromCharCode(117,112,97,116,101,100,0)], [String.fromCharCode(98,97,99,107,103,114,111,117,110,100,115,0),String.fromCharCode(118,98,114,117,115,104,0)]]);
   for (let u = 0; u < 3; u++) {
      modalj += `${themeE.length}`;
   }
       let incident7 = String.fromCharCode(102,116,115,116,111,107,0);
       let watchW = String.fromCharCode(112,116,115,101,115,0);
       let targetq = true;
       let acceptedb = 5.0;
       let login7 = 0.0;
         incident7 += `${parseInt(`${acceptedb}`) % 3}`;
         acceptedb -= (watchW.length << (Math.min(3, Math.abs((targetq ? 2 : 5)))));
      let calendary = targetq ? !targetq : targetq;
      do {
         targetq = !targetq;
         if (calendary) {
            break;
         }
      } while ((targetq) && calendary);
         acceptedb += ((targetq ? 1 : 5) >> (Math.min(incident7.length, 2)));
          let scheduleX = 4.0;
          let register__ct = 0.0;
          let bufferI = String.fromCharCode(99,97,110,100,108,101,0);
         acceptedb += parseInt(`${login7}`) | 3;
         scheduleX += (parseFloat(`${bufferI == String.fromCharCode(80,0) ? parseInt(`${register__ct}`) : bufferI.length}`));
         register__ct -= parseInt(`${scheduleX}`) << (Math.min(bufferI.length, 1));
         acceptedb -= (parseInt(`${acceptedb}`) | (targetq ? 5 : 4));
         acceptedb += (incident7 == String.fromCharCode(74,0) ? incident7.length : parseInt(`${login7}`));
         watchW += `${parseInt(`${login7}`)}`;
      album7 = new Map([[`${condensedR.size}`, 1]]);
   if ((thailando - selectionp.length) > 4.6) {
       let buildy = String.fromCharCode(117,114,118,101,0);
       let refresh1 = String.fromCharCode(99,108,101,97,114,101,100,0);
       let configureq: Map<any, any> = new Map([[String.fromCharCode(110,105,100,110,105,115,116,0),712], [String.fromCharCode(99,114,111,110,111,115,0),846]]);
       let signinupr = 2;
         refresh1 = `${buildy.length & refresh1.length}`;
         signinupr &= signinupr % (Math.max(2, 1));
          let change0: Array<any> = [String.fromCharCode(115,118,103,0), String.fromCharCode(115,105,103,112,97,115,115,0)];
         buildy = `${(buildy == String.fromCharCode(66,0) ? buildy.length : configureq.size)}`;
         change0.push(change0.length);
         configureq.set(`${signinupr}`, configureq.size << (Math.min(1, Math.abs(signinupr))));
       let dialogq = 1.0;
       let photow = 1.0;
      if (refresh1.endsWith(buildy)) {
         refresh1 += `${parseInt(`${photow}`)}`;
      }
         buildy = `${configureq.size}`;
         configureq = new Map([[`${dialogq}`, parseInt(`${dialogq}`) & 2]]);
      let relatedd = refresh1 == String.fromCharCode(103,107,97,51,0);
      do {
         refresh1 += `${(buildy == String.fromCharCode(102,0) ? signinupr : buildy.length)}`;
         if (relatedd) {
            break;
         }
      } while (relatedd && (refresh1.includes(`${buildy.length}`)));
         configureq.set(`${signinupr}`, signinupr >> (Math.min(2, Math.abs(3))));
      while (1 <= (buildy.length % (Math.max(5, 10))) || (buildy.length * parseInt(`${dialogq}`)) <= 5) {
          let configureQ = 0.0;
          let userL = 5.0;
          let muted0 = String.fromCharCode(104,119,100,111,119,110,108,111,97,100,0);
          let videoe = String.fromCharCode(102,105,108,116,101,114,117,118,0);
         dialogq -= (parseFloat(`${String.fromCharCode(53,0) == videoe ? parseInt(`${configureQ}`) : videoe.length}`));
         configureQ -= 2 - muted0.length;
         userL /= Math.max(parseFloat(`${1}`), 4);
         muted0 = `${(muted0 == String.fromCharCode(122,0) ? parseInt(`${userL}`) : muted0.length)}`;
         break;
      }
         photow -= parseFloat(`${buildy.length << (Math.min(3, refresh1.length))}`);
      selectionp += `${parseInt(`${thailando}`)}`;
   }
       let anytimei: Array<any> = [597, 527, 153];
       let k_locka = String.fromCharCode(108,117,109,97,107,101,121,0);
       let langkeyU = 5;
       let configure_ = String.fromCharCode(100,101,113,117,97,110,116,0);
       let ballx = String.fromCharCode(115,116,111,114,97,103,101,115,0);
       let guider: Map<any, any> = new Map([[String.fromCharCode(115,99,104,101,100,117,108,101,0),213], [String.fromCharCode(104,101,120,98,105,110,0),4], [String.fromCharCode(119,97,118,114,101,97,100,101,114,0),549]]);
       let anythinkU: Map<any, any> = new Map([[String.fromCharCode(100,120,110,100,99,0),String.fromCharCode(97,117,116,111,108,111,99,107,0)], [String.fromCharCode(115,97,118,101,100,0),String.fromCharCode(114,111,116,97,116,105,111,110,97,110,103,108,101,0)]]);
      while (k_locka.length < anytimei.length) {
         k_locka = `${ballx.length >> (Math.min(Math.abs(2), 1))}`;
         break;
      }
       let saved = String.fromCharCode(115,99,104,101,109,97,0);
       let banner4 = String.fromCharCode(102,97,100,101,0);
       let footballk = 1.0;
       let formx = 2.0;
      if (banner4.length < 2) {
          let watchk = 1.0;
          let rooml = 3.0;
          let overlayX = 0.0;
          let routerY = String.fromCharCode(114,101,118,105,101,119,0);
         banner4 = `${anytimei.length}`;
         watchk += parseFloat(`${parseInt(`${overlayX}`)}`);
         rooml -= parseInt(`${overlayX}`) << (Math.min(4, Math.abs(2)));
         routerY += `${parseInt(`${watchk}`) ^ parseInt(`${overlayX}`)}`;
      }
      let topone = 5106867 <= configure_.length;
      do {
          let verticalY: Map<any, any> = new Map([[String.fromCharCode(105,110,103,101,116,97,100,100,114,0),139], [String.fromCharCode(115,111,99,107,101,116,118,97,114,0),472], [String.fromCharCode(118,101,114,105,102,105,97,116,105,111,110,0),667]]);
         configure_ = `${anythinkU.size | guider.size}`;
         verticalY = new Map([[`${verticalY.size}`, verticalY.size]]);
         if (topone) {
            break;
         }
      } while (topone && (configure_.endsWith(`${langkeyU}`)));
      for (let o = 0; o < 2; o++) {
          let zhengpianA = String.fromCharCode(114,101,99,116,115,0);
         guider = new Map([[saved, ballx.length]]);
         zhengpianA = `${zhengpianA.length}`;
      }
          let roomS = 2;
          let onewinterstitial5 = 1.0;
         ballx += `${parseInt(`${formx}`)}`;
         roomS &= 3;
         onewinterstitial5 /= Math.max(5, roomS << (Math.min(Math.abs(parseInt(`${onewinterstitial5}`)), 4)));
      tickedk += `${downo * anytimei.length}`;
   let middleZ = String.fromCharCode(99,48,120,95,118,0) == panglez;
   do {
      panglez += `${condensedR.size}`;
      if (middleZ) {
         break;
      }
   } while (middleZ && ((downo >> (Math.min(panglez.length, 3))) < 5));
      watchd = 43 == themeE.length;
      thailando += panglez.length | modalj.length;
      downo ^= modalj.length;
   for (let z = 0; z < 3; z++) {
      watchd = 87.65 >= thailando || 38 >= faviconU.size;
   }
      faviconU.set(tickedk, 1 * hooky.length);

    

   while (selectionp.length < 4) {
       let sportsy: Array<any> = [String.fromCharCode(118,97,97,112,105,0), String.fromCharCode(99,103,105,109,97,103,101,0), String.fromCharCode(101,108,97,115,116,105,99,0)];
       let rankM = true;
       let submitU = String.fromCharCode(110,116,102,115,0);
      if (rankM) {
         sportsy = [(String.fromCharCode(116,0) == submitU ? (rankM ? 1 : 4) : submitU.length)];
      }
      if (!submitU.startsWith(`${rankM}`)) {
         rankM = (((rankM ? 67 : sportsy.length) | sportsy.length) < 67);
      }
          let selectedm = false;
          let canvasX = 4.0;
          let pointP = String.fromCharCode(99,117,115,116,111,109,105,122,101,114,0);
         submitU += `${parseInt(`${canvasX}`) << (Math.min(1, Math.abs(3)))}`;
         selectedm = !selectedm;
         canvasX *= (pointP.length | (selectedm ? 3 : 1));
         pointP = `${pointP.length}`;
      while (4 <= (2 + submitU.length) || 5 <= (sportsy.length + 2)) {
         submitU += `${((rankM ? 2 : 3))}`;
         break;
      }
      if (!rankM || 5 <= (sportsy.length * 4)) {
         rankM = String.fromCharCode(98,0) == submitU;
      }
      if (rankM) {
         rankM = (70 <= (submitU.length - (!rankM ? submitU.length : 70)));
      }
          let gmailU = 2.0;
          let expired_ = String.fromCharCode(105,110,116,101,103,114,97,116,101,0);
          let pingL = 2.0;
         sportsy.push(parseInt(`${gmailU}`) ^ 1);
         gmailU -= expired_.length;
         expired_ = `${parseInt(`${pingL}`)}`;
         pingL -= parseFloat(`${parseInt(`${pingL}`)}`);
          let flyerD = 3;
         rankM = sportsy.includes(flyerD);
       let loginX: Array<any> = [732, 930, 44];
      selectionp += `${panglez.length}`;
      break;
   }
   let historyM = selectionp.length >= 5247650;
   do {
      selectionp = `${hooky.length >> (Math.min(Math.abs(1), 2))}`;
      if (historyM) {
         break;
      }
   } while (historyM && (3 >= (selectionp.length ^ album7.size) && (3 ^ album7.size) >= 5));
   while (1 < panglez.length) {
      panglez = `${parseInt(`${thailando}`) + 3}`;
      break;
   }
      hooky = [condensedR.size >> (Math.min(hooky.length, 2))];
   for (let p = 0; p < 1; p++) {
      hooky = [(String.fromCharCode(74,0) == modalj ? modalj.length : faviconU.size)];
   }
       let backK = 3;
       let incidentu = String.fromCharCode(99,97,108,108,98,97,99,107,115,0);
       let areao = String.fromCharCode(97,116,111,109,105,99,0);
          let subs3: Array<any> = [String.fromCharCode(97,115,115,101,115,115,109,101,110,116,0), String.fromCharCode(120,119,109,97,0), String.fromCharCode(120,112,117,98,0)];
          let crownG = String.fromCharCode(103,104,97,115,104,0);
         incidentu = `${(incidentu == String.fromCharCode(105,0) ? backK : incidentu.length)}`;
         subs3 = [crownG.length];
         crownG = "1";
         backK /= Math.max(3, areao.length);
      if (areao.startsWith(`${backK}`)) {
          let empty2: Array<any> = [878, 828];
          let dplusr = 2.0;
         backK *= incidentu.length ^ 2;
         empty2.push(2);
         dplusr /= Math.max(parseFloat(`${empty2.length}`), 4);
      }
       let routerQ = String.fromCharCode(114,101,112,97,114,101,100,0);
      let trophy6 = String.fromCharCode(119,51,119,108,105,111,121,0) == areao;
      do {
         areao += `${areao.length}`;
         if (trophy6) {
            break;
         }
      } while (trophy6 && (incidentu == String.fromCharCode(56,0) && areao == String.fromCharCode(66,0)));
          let middlewaref = String.fromCharCode(118,101,114,116,115,0);
          let private_52 = 1;
          let paginationj: Map<any, any> = new Map([[String.fromCharCode(119,122,97,101,115,0),304], [String.fromCharCode(99,111,100,105,110,103,116,121,112,101,0),747], [String.fromCharCode(116,105,108,101,100,0),369]]);
         backK <<= Math.min(5, Math.abs((routerQ == String.fromCharCode(65,0) ? areao.length : routerQ.length)));
         middlewaref += `${private_52 - 2}`;
         private_52 %= Math.max(paginationj.size + 2, 2);
         paginationj = new Map([[`${paginationj.size}`, 1]]);
          let commente = 1.0;
         backK %= Math.max(areao.length, 1);
         commente /= Math.max(1, parseFloat(`${2 | parseInt(`${commente}`)}`));
      while (areao.length > incidentu.length) {
         areao += `${incidentu.length}`;
         break;
      }
      while (2 < areao.length) {
         areao = `${(areao == String.fromCharCode(116,0) ? areao.length : backK)}`;
         break;
      }
      themeE += "3";
   let live8 = thailando <= 6646796.0;
   do {
      thailando /= Math.max(album7.size * selectionp.length, 2);
      if (live8) {
         break;
      }
   } while (live8 && (5 <= (modalj.length >> (Math.min(Math.abs(2), 1)))));
      hooky.push(1 % (Math.max(7, downo)));
       let topicg = 5.0;
         topicg *= parseFloat(`${parseInt(`${topicg}`) - 2}`);
      while (topicg >= 5.52) {
          let successf = 1.0;
          let taiwanE = false;
          let rightr = true;
          let containere = false;
         topicg *= parseFloat(`${2 / (Math.max(6, parseInt(`${topicg}`)))}`);
         successf -= (parseFloat(`${parseInt(`${successf}`) << (Math.min(4, Math.abs((rightr ? 3 : 1))))}`));
         taiwanE = !containere;
         rightr = !containere;
         break;
      }
      let listx = topicg >= 7046371.0;
      do {
         topicg += parseFloat(`${parseInt(`${topicg}`)}`);
         if (listx) {
            break;
         }
      } while (listx && (topicg >= 3.4));
      tickedk += `${modalj.length}`;
      panglez = `${3 % (Math.max(10, hooky.length))}`;
    

       let gpayD = String.fromCharCode(100,105,114,115,0);
       let modelsy: Array<any> = [884, 573, 889];
      if ((5 >> (Math.min(5, gpayD.length))) <= 3 && (modelsy.length >> (Math.min(Math.abs(5), 5))) <= 5) {
         modelsy.push(gpayD.length);
      }
      let t_lockI = 7408135 <= modelsy.length;
      do {
         modelsy.push(gpayD.length);
         if (t_lockI) {
            break;
         }
      } while (t_lockI && (modelsy.length < 4));
      while (3 < gpayD.length) {
          let albumD = String.fromCharCode(110,115,117,105,0);
          let privacyu: Array<any> = [220, 330];
          let chinav = 0;
          let helperC = 2.0;
          let indexT: Array<any> = [String.fromCharCode(109,97,120,105,109,117,109,0), String.fromCharCode(117,110,112,97,99,107,101,100,0)];
         gpayD = `${1 * privacyu.length}`;
         albumD += `${parseInt(`${helperC}`) + 2}`;
         privacyu.push(albumD.length * 1);
         chinav /= Math.max(4, indexT.length);
         helperC += parseFloat(`${parseInt(`${helperC}`) | 3}`);
         indexT = [parseInt(`${helperC}`) | chinav];
         break;
      }
      for (let h = 0; h < 2; h++) {
          let loadingZ = 5;
         gpayD += `${loadingZ}`;
      }
      for (let m = 0; m < 1; m++) {
          let confirmationZ = 1.0;
          let disconnected1: Array<any> = [94, 151];
         modelsy = [2];
         confirmationZ /= Math.max(5, parseFloat(`${3}`));
         disconnected1.push(parseInt(`${confirmationZ}`) - disconnected1.length);
      }
          let zhuboN = 1.0;
          let main_dx = 2.0;
          let sliderE = 5;
         gpayD = `${(gpayD == String.fromCharCode(55,0) ? gpayD.length : parseInt(`${zhuboN}`))}`;
         zhuboN += parseFloat(`${parseInt(`${main_dx}`)}`);
         main_dx /= Math.max(4, 3);
         sliderE ^= 3;
      condensedR.set(tickedk, (tickedk == String.fromCharCode(122,0) ? album7.size : tickedk.length));
       let relatedy: Map<any, any> = new Map([[String.fromCharCode(116,114,97,106,101,99,116,111,114,121,0),898], [String.fromCharCode(104,105,103,104,0),531]]);
       let z_centerq: Array<any> = [881, 296, 401];
      let videocommonZ = z_centerq.length >= 6496155;
      do {
         z_centerq = [relatedy.size];
         if (videocommonZ) {
            break;
         }
      } while (videocommonZ && (relatedy.get(`${z_centerq.length}`) == null));
       let reportf: Array<any> = [497, 824];
       let pressurez: Array<any> = [373, 521];
         pressurez.push(reportf.length - z_centerq.length);
      while (reportf.length < z_centerq.length) {
         z_centerq.push(reportf.length);
         break;
      }
         z_centerq.push(2);
         z_centerq = [1 + reportf.length];
      tickedk += `${hooky.length}`;
   while (condensedR.size >= 4) {
      faviconU = new Map([[tickedk, tickedk.length]]);
      break;
   }
      hooky.push(3 | hooky.length);
      themeE += `${faviconU.size}`;
   if ((thailando + 1.68) < 4.32 && 4.35 < (thailando + 1.68)) {
      thailando /= Math.max(4, ((watchd ? 1 : 3) & tickedk.length));
   }
      faviconU.set(`${downo}`, (String.fromCharCode(102,0) == modalj ? modalj.length : downo));
      hooky = [1];
   let chinasame3 = 6636049 >= condensedR.size;
   do {
      condensedR.set(panglez, panglez.length);
      if (chinasame3) {
         break;
      }
   } while (chinasame3 && ((condensedR.size - 5) >= 4));
   if (watchd) {
      album7.set(`${themeE}`, 1);
   }
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
    tt_humidity_guide.watchAnytimeAdsViewAnalytics({
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
       let memberT: Array<any> = [352, 58];
    let nativeexn: Array<any> = [String.fromCharCode(112,101,114,115,105,115,116,0), String.fromCharCode(103,111,111,103,0), String.fromCharCode(115,97,110,100,98,111,120,0)];
    let layoutO: Array<any> = [867, 814];
    let v_unlock0 = true;
    let canvaso = String.fromCharCode(115,116,114,101,115,115,0);
    let combineK = String.fromCharCode(99,104,101,99,107,0);
    let nativeF = 2.0;
    let trophy_ = true;
    let helperP: Map<any, any> = new Map([[String.fromCharCode(117,110,115,101,108,101,99,116,101,100,0),986], [String.fromCharCode(114,101,108,111,103,105,110,0),488], [String.fromCharCode(112,114,101,118,0),7]]);
    let foreground4 = String.fromCharCode(116,116,97,101,110,99,0);
    let klevino = false;
    let circleY: Map<any, any> = new Map([[String.fromCharCode(109,97,110,97,103,101,97,98,108,101,0),144], [String.fromCharCode(119,97,105,116,105,110,103,0),365]]);
    let downloadedO = String.fromCharCode(109,111,110,111,98,108,97,99,107,0);
    let quest8: Map<any, any> = new Map([[String.fromCharCode(97,110,116,105,97,108,105,97,115,0),480], [String.fromCharCode(117,115,97,98,108,101,0),636]]);
    let thailandJ = 2.0;
   for (let l = 0; l < 2; l++) {
      klevino = trophy_;
   }
       let indicatorN = String.fromCharCode(105,110,100,105,99,105,101,115,0);
         indicatorN += `${indicatorN.length << (Math.min(2, indicatorN.length))}`;
         indicatorN = `${indicatorN.length & indicatorN.length}`;
      while (!indicatorN.startsWith(indicatorN)) {
         indicatorN = `${(String.fromCharCode(110,0) == indicatorN ? indicatorN.length : indicatorN.length)}`;
         break;
      }
      nativeexn = [3];

      if ((isPause === true || isBuffering === true) && currentDuration < 1) {

   for (let s = 0; s < 3; s++) {
      canvaso = `${((trophy_ ? 4 : 5))}`;
   }
   for (let m = 0; m < 1; m++) {
      v_unlock0 = combineK.length == 23 && 23 == canvaso.length;
   }
        

   let ticku = 6940403 >= canvaso.length;
   do {
       let j_unlockC = 1.0;
       let shrinkk = true;
      for (let t = 0; t < 1; t++) {
          let icon0 = true;
          let linen = false;
          let lists = String.fromCharCode(119,112,101,110,100,105,110,103,0);
         shrinkk = !linen && icon0;
         icon0 = lists.length < 82;
         linen = lists == String.fromCharCode(75,0);
      }
       let questi = 1.0;
       let alertC = 1.0;
      if (4.38 < (questi / 5.22) || (j_unlockC / 5.22) < 1.98) {
         questi -= 2 - parseInt(`${alertC}`);
      }
      while ((j_unlockC * questi) <= 4.52 || (questi * j_unlockC) <= 4.52) {
          let moreq = 4;
          let pressurem: Map<any, any> = new Map([[String.fromCharCode(114,97,116,105,110,103,0),850], [String.fromCharCode(112,105,120,101,108,0),220]]);
         questi -= pressurem.size - parseInt(`${j_unlockC}`);
         moreq += moreq & moreq;
         pressurem.set(`${moreq}`, moreq ^ 3);
         break;
      }
      for (let k = 0; k < 2; k++) {
          let controlJ: Map<any, any> = new Map([[String.fromCharCode(105,110,115,117,102,102,105,99,105,101,110,116,0),417], [String.fromCharCode(99,111,114,100,0),124]]);
          let eact1: Array<any> = [198, 309, 816];
          let overlay6 = String.fromCharCode(100,105,115,116,114,105,98,117,116,101,100,0);
         questi += controlJ.size | 3;
         controlJ = new Map([[`${eact1.length}`, eact1.length >> (Math.min(overlay6.length, 1))]]);
         overlay6 += "3";
      }
          let goalw = 0.0;
          let promotione = String.fromCharCode(100,105,115,112,108,97,99,101,109,101,110,116,0);
          let vietnamQ: Map<any, any> = new Map([[String.fromCharCode(112,97,114,0),272], [String.fromCharCode(120,95,52,57,95,104,97,114,101,0),79]]);
         shrinkk = promotione.startsWith(`${goalw}`);
         goalw += vietnamQ.size;
         promotione = `${vietnamQ.size}`;
      canvaso = `${memberT.length}`;
      if (ticku) {
         break;
      }
   } while ((v_unlock0) && ticku);
      v_unlock0 = layoutO.length >= 32;
        

   while (memberT.length == 2) {
      klevino = (70 == (layoutO.length >> (Math.min(5, Math.abs((!v_unlock0 ? 70 : layoutO.length))))));
      break;
   }
   if (memberT.length == 4) {
      nativeF -= ((v_unlock0 ? 2 : 3) >> (Math.min(Math.abs(2), 4)));
   }
        

   while (1 <= (circleY.size ^ foreground4.length) || (foreground4.length ^ circleY.size) <= 1) {
       let notificationI: Map<any, any> = new Map([[String.fromCharCode(97,116,111,110,0),589], [String.fromCharCode(105,100,99,116,120,108,108,109,0),694]]);
       let type_8L = String.fromCharCode(116,117,114,98,117,108,101,110,99,101,0);
       let lineE = String.fromCharCode(117,110,115,101,110,100,0);
       let area0 = String.fromCharCode(115,111,102,97,0);
       let coreJ = String.fromCharCode(111,110,118,101,114,115,97,116,105,111,110,0);
      if ((notificationI.size ^ area0.length) > 3 && 5 > (3 ^ area0.length)) {
          let backwardL: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,97,112,115,101,0),619], [String.fromCharCode(106,99,104,117,102,102,0),977], [String.fromCharCode(118,111,105,112,0),59]]);
          let turnL = String.fromCharCode(101,114,114,108,111,103,0);
          let launch2 = 4;
         area0 += `${notificationI.size}`;
         backwardL = new Map([[turnL, 2 & turnL.length]]);
         launch2 *= launch2;
      }
      for (let j = 0; j < 1; j++) {
         notificationI = new Map([[area0, coreJ.length & 3]]);
      }
         notificationI.set(type_8L, type_8L.length);
          let crownS: Map<any, any> = new Map([[String.fromCharCode(97,115,105,115,0),false ], [String.fromCharCode(99,97,114,114,105,97,103,101,0),false ]]);
          let giftB: Map<any, any> = new Map([[String.fromCharCode(114,116,109,112,112,107,116,0),669], [String.fromCharCode(105,110,104,105,98,105,116,0),245]]);
          let package_hw = 0.0;
         type_8L += `${notificationI.size}`;
         crownS.set(`${giftB.size}`, 1);
         giftB.set(`${package_hw}`, giftB.size ^ parseInt(`${package_hw}`));
          let goal9 = 0.0;
          let filterR = String.fromCharCode(105,112,97,100,105,102,102,0);
         notificationI = new Map([[coreJ, coreJ.length + area0.length]]);
         goal9 *= filterR.length;
         filterR = `${2 - filterR.length}`;
          let playercommonO = 3.0;
          let google6 = String.fromCharCode(102,114,97,109,101,113,117,101,117,101,0);
         lineE = `${3 * parseInt(`${playercommonO}`)}`;
         playercommonO += parseFloat(`${google6.length}`);
         google6 = `${3 * google6.length}`;
       let less2 = String.fromCharCode(112,116,111,110,0);
       let mappingU = String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,115,0);
      let tooltipsH = lineE == String.fromCharCode(115,49,97,103,113,110,100,0);
      do {
          let buffers = false;
         lineE += "2";
         buffers = (buffers ? buffers : !buffers);
         if (tooltipsH) {
            break;
         }
      } while (tooltipsH && (mappingU != String.fromCharCode(99,0)));
         mappingU += "2";
         area0 += `${less2.length}`;
         type_8L = "2";
         lineE += `${coreJ.length}`;
         area0 += `${less2.length % 2}`;
      for (let e = 0; e < 1; e++) {
          let reducerq: Map<any, any> = new Map([[String.fromCharCode(99,114,111,115,115,111,118,101,114,0),String.fromCharCode(106,109,111,114,101,99,102,103,0)], [String.fromCharCode(97,116,116,105,98,117,116,101,0),String.fromCharCode(112,111,108,108,105,110,103,0)]]);
          let inactived = 0;
         area0 += "2";
         reducerq = new Map([[`${reducerq.size}`, reducerq.size << (Math.min(3, Math.abs(inactived)))]]);
         inactived >>= Math.min(5, Math.abs(inactived % (Math.max(7, reducerq.size))));
      }
         mappingU = `${less2.length}`;
      foreground4 += `${nativeexn.length}`;
      break;
   }
   for (let t = 0; t < 2; t++) {
       let eighteen_: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,105,122,101,114,0),447], [String.fromCharCode(115,99,114,111,108,108,101,100,0),235], [String.fromCharCode(98,97,99,107,112,116,114,0),615]]);
       let stepU = String.fromCharCode(107,115,101,116,0);
       let redirect9 = 1;
       let actions0: Array<any> = [529, 93];
       let largeU = String.fromCharCode(111,102,102,115,101,116,115,0);
         eighteen_.set(largeU, eighteen_.size ^ largeU.length);
      while (largeU.length == 2) {
         stepU += "1";
         break;
      }
          let footballY = 4.0;
          let assistq = 4.0;
         stepU = `${redirect9}`;
         footballY /= Math.max(2, parseInt(`${assistq}`) >> (Math.min(Math.abs(parseInt(`${footballY}`)), 2)));
         assistq -= parseInt(`${footballY}`) + 1;
      let apple3 = actions0.length >= 6397037;
      do {
         actions0 = [stepU.length];
         if (apple3) {
            break;
         }
      } while (apple3 && ((actions0.length + redirect9) >= 1));
      while ((largeU.length * 3) >= 1) {
          let sports6 = 2;
          let condensedw = 3;
         eighteen_.set(`${condensedw}`, condensedw * sports6);
         break;
      }
       let memberQ: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,114,97,110,115,0),331], [String.fromCharCode(119,101,98,118,116,116,0),657]]);
       let adultr: Map<any, any> = new Map([[String.fromCharCode(105,99,119,114,115,105,0),false ], [String.fromCharCode(98,117,102,115,112,97,99,101,0),false ]]);
       let zoomZ = 5;
         redirect9 += largeU.length / (Math.max(2, 8));
      while (1 == (adultr.size ^ memberQ.size) || 1 == (adultr.size ^ memberQ.size)) {
         memberQ = new Map([[stepU, stepU.length - 1]]);
         break;
      }
         stepU += `${stepU.length % 2}`;
         largeU += `${largeU.length | 1}`;
      let reportb = stepU.length <= 7675929;
      do {
          let friendsI = String.fromCharCode(100,101,115,99,114,105,98,101,0);
          let step_ = String.fromCharCode(99,111,109,109,105,116,0);
          let material0 = String.fromCharCode(98,117,105,108,100,101,114,0);
         stepU = `${stepU.length ^ 1}`;
         friendsI += `${friendsI.length ^ step_.length}`;
         step_ = `${(friendsI == String.fromCharCode(114,0) ? material0.length : friendsI.length)}`;
         material0 = `${(material0 == String.fromCharCode(57,0) ? step_.length : material0.length)}`;
         if (reportb) {
            break;
         }
      } while (reportb && (stepU.length <= 1));
         adultr = new Map([[`${actions0.length}`, actions0.length]]);
         actions0.push(adultr.size);
         largeU = `${memberQ.size}`;
      memberT.push(largeU.length);
   }

        const fileLocation =
          RNFetchBlob.fs.dirs.DocumentDir +
          `/videocache/${currentVod.mini_video_id}.mp4`;

      combineK = `${(3 << (Math.min(2, Math.abs((trophy_ ? 1 : 2)))))}`;
       let weiboR = String.fromCharCode(115,110,97,112,104,111,116,0);
       let viewsX: Array<any> = [String.fromCharCode(115,97,109,112,108,101,115,0), String.fromCharCode(97,115,115,111,99,108,105,115,116,0)];
       let rewindn = String.fromCharCode(100,101,108,101,116,101,0);
       let temperatureO = String.fromCharCode(109,105,108,105,111,110,115,0);
       let animationF = String.fromCharCode(114,103,98,97,108,101,0);
          let libcrashsdkR = String.fromCharCode(116,101,109,112,108,97,116,101,115,0);
          let bellm = String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,100,0);
          let expandb = String.fromCharCode(99,111,110,115,116,97,110,116,115,0);
         rewindn += `${(rewindn == String.fromCharCode(103,0) ? rewindn.length : temperatureO.length)}`;
         libcrashsdkR = `${(expandb == String.fromCharCode(82,0) ? libcrashsdkR.length : expandb.length)}`;
         bellm += `${expandb.length}`;
         animationF = `${(weiboR == String.fromCharCode(54,0) ? viewsX.length : weiboR.length)}`;
      if (rewindn.endsWith(`${viewsX.length}`)) {
          let activityL = String.fromCharCode(97,100,106,97,99,101,110,116,0);
         rewindn += `${weiboR.length | viewsX.length}`;
         activityL += `${(String.fromCharCode(106,0) == activityL ? activityL.length : activityL.length)}`;
      }
         rewindn += `${(String.fromCharCode(98,0) == temperatureO ? temperatureO.length : viewsX.length)}`;
         animationF += `${1 ^ viewsX.length}`;
         rewindn += `${(String.fromCharCode(83,0) == rewindn ? viewsX.length : rewindn.length)}`;
      for (let l = 0; l < 2; l++) {
         weiboR = `${3 & rewindn.length}`;
      }
          let acceptede = String.fromCharCode(115,116,114,105,110,103,0);
         rewindn += `${animationF.length << (Math.min(1, viewsX.length))}`;
         acceptede += `${acceptede.length >> (Math.min(Math.abs(2), 5))}`;
      foreground4 += `${helperP.size}`;

        const fileExist = await RNFetchBlob.fs.exists(fileLocation);

      canvaso += `${3 % (Math.max(10, helperP.size))}`;
       let catagoryl: Array<any> = [691, 257];
      if (catagoryl.length == 1) {
         catagoryl.push(catagoryl.length >> (Math.min(catagoryl.length, 2)));
      }
          let utilsy: Map<any, any> = new Map([[String.fromCharCode(119,105,100,101,102,101,108,101,109,0),false ], [String.fromCharCode(116,105,109,105,110,103,115,0),false ]]);
          let googleN = String.fromCharCode(97,108,112,104,97,0);
         catagoryl.push(2 << (Math.min(4, googleN.length)));
         utilsy = new Map([[`${utilsy.size}`, utilsy.size >> (Math.min(Math.abs(utilsy.size), 5))]]);
         googleN += `${utilsy.size & 2}`;
      let downloader5 = catagoryl.length >= 5125301;
      do {
         catagoryl = [3];
         if (downloader5) {
            break;
         }
      } while ((catagoryl.length > catagoryl.length) && downloader5);
      layoutO.push(circleY.size & 1);

        if (fileExist) {

      klevino = 46.40 <= nativeF;
   for (let a = 0; a < 2; a++) {
       let specF: Array<any> = [927, 808, 523];
         specF = [specF.length];
      for (let s = 0; s < 2; s++) {
          let fastH = 0;
          let skip6 = String.fromCharCode(99,108,97,115,115,105,102,121,0);
         specF.push((String.fromCharCode(103,0) == skip6 ? skip6.length : fastH));
      }
         specF = [specF.length % (Math.max(3, 3))];
      nativeexn.push(((trophy_ ? 4 : 4) * specF.length));
   }
          const fileIsEmpty =
            (await RNFetchBlob.fs.stat(fileLocation)).size == 0;

      downloadedO = "1";
   if ((memberT.length + canvaso.length) == 5 || (memberT.length + 5) == 3) {
      canvaso = `${(layoutO.length << (Math.min(3, Math.abs((trophy_ ? 2 : 4)))))}`;
   }
          

   while (2 < nativeexn.length || (nativeexn.length << (Math.min(Math.abs(2), 5))) < 4) {
      klevino = 61 <= helperP.size;
      break;
   }
   while (!nativeexn.includes(memberT.length)) {
      memberT.push(1 ^ memberT.length);
      break;
   }
          if (!fileIsEmpty) {

      memberT = [3 >> (Math.min(2, layoutO.length))];
       let firebase_ = String.fromCharCode(104,97,110,100,108,101,0);
       let page4 = String.fromCharCode(98,101,122,101,108,0);
       let circlen = 4;
      while (page4 != String.fromCharCode(97,0) || 5 == firebase_.length) {
         page4 = `${firebase_.length}`;
         break;
      }
         page4 = `${page4.length}`;
       let selectY = 1.0;
       let tail5 = 2.0;
      while (page4.length > 2) {
         page4 += `${(String.fromCharCode(82,0) == firebase_ ? parseInt(`${tail5}`) : firebase_.length)}`;
         break;
      }
      let projecty = String.fromCharCode(50,117,114,119,113,114,57,110,0) == firebase_;
      do {
         firebase_ += `${(String.fromCharCode(70,0) == firebase_ ? firebase_.length : circlen)}`;
         if (projecty) {
            break;
         }
      } while (projecty && (firebase_.length < 5));
      memberT.push(downloadedO.length % (Math.max(foreground4.length, 3)));
            setMiniVodUrl(`${fileLocation}`);
          } else {

   for (let c = 0; c < 1; c++) {
      nativeF -= (canvaso == String.fromCharCode(76,0) ? canvaso.length : combineK.length);
   }
   let liveX = trophy_ ? !trophy_ : trophy_;
   do {
      trophy_ = !trophy_;
      if (liveX) {
         break;
      }
   } while ((trophy_ || 4 <= downloadedO.length) && liveX);
            

   for (let c = 0; c < 3; c++) {
      circleY = new Map([[`${memberT.length}`, memberT.length]]);
   }
   let manifests = 8264324 >= quest8.size;
   do {
      quest8.set(`${memberT.length}`, 1);
      if (manifests) {
         break;
      }
   } while (manifests && (3 < (5 ^ circleY.size) && 5 < (circleY.size ^ quest8.size)));
            setMiniVodUrl(currentVod.ads_pic);
          }
        } else {

   while (trophy_ || downloadedO.length >= 1) {
      downloadedO = `${((v_unlock0 ? 5 : 5) + circleY.size)}`;
      break;
   }
   if (2 >= canvaso.length || trophy_) {
       let dice2: Array<any> = [811, 406];
       let comment3 = 0;
       let routerL = String.fromCharCode(100,114,97,102,116,115,0);
      for (let e = 0; e < 2; e++) {
         routerL += `${routerL.length - 3}`;
      }
      if (dice2.includes(comment3)) {
         dice2 = [comment3 % (Math.max(8, routerL.length))];
      }
         dice2 = [dice2.length];
         comment3 <<= Math.min(Math.abs(1), 2);
      if (4 > (routerL.length & dice2.length) && (4 & routerL.length) > 5) {
         routerL += `${routerL.length}`;
      }
         routerL += `${dice2.length - comment3}`;
         dice2.push(routerL.length / (Math.max(2, comment3)));
          let vignette9 = 3.0;
          let default_1mk: Map<any, any> = new Map([[String.fromCharCode(110,117,109,101,114,97,108,115,0),46], [String.fromCharCode(105,119,104,116,120,0),745]]);
          let shootl = false;
         comment3 %= Math.max(parseInt(`${vignette9}`), 2);
         vignette9 += parseFloat(`${default_1mk.size / (Math.max(1, 6))}`);
         default_1mk.set(`${shootl}`, 2 >> (Math.min(3, Math.abs(default_1mk.size))));
         dice2 = [1];
      canvaso += `${circleY.size + 3}`;
   }
          

      canvaso = `${combineK.length}`;
       let pressured = 2.0;
       let clearb = String.fromCharCode(115,99,114,101,101,110,0);
       let thailandP = String.fromCharCode(105,110,116,101,114,114,117,112,116,101,100,0);
      if (!clearb.includes(`${pressured}`)) {
          let disconnectedl = String.fromCharCode(108,97,121,115,0);
          let langf = String.fromCharCode(99,111,109,112,114,101,115,115,111,114,0);
         pressured -= parseFloat(`${3}`);
         disconnectedl += "2";
         langf = `${disconnectedl.length}`;
      }
         clearb = "2";
         pressured /= Math.max(parseFloat(`${clearb.length}`), 5);
      for (let n = 0; n < 1; n++) {
         pressured /= Math.max(5, parseFloat(`${3}`));
      }
      if (parseFloat(`${thailandP.length}`) <= pressured) {
          let inactive9 = String.fromCharCode(105,100,101,97,108,0);
         pressured *= parseFloat(`${clearb.length}`);
         inactive9 += `${inactive9.length << (Math.min(Math.abs(1), 4))}`;
      }
      if (thailandP.includes(`${clearb.length}`)) {
          let j_managerS = 1.0;
          let borderlessx = false;
          let relatedJ = String.fromCharCode(110,101,105,103,104,98,111,114,115,0);
          let filledb = String.fromCharCode(105,110,99,114,98,108,111,98,0);
         clearb += `${clearb.length}`;
         j_managerS -= 1;
         borderlessx = 67.94 <= j_managerS;
         relatedJ += `${3 >> (Math.min(Math.abs(parseInt(`${j_managerS}`)), 3))}`;
         filledb = `${(filledb.length * (borderlessx ? 5 : 3))}`;
      }
          let typesm = 3;
          let readq = String.fromCharCode(105,115,109,101,109,115,101,116,0);
          let telegram9 = String.fromCharCode(116,105,109,101,114,0);
         pressured /= Math.max(parseFloat(`${readq.length >> (Math.min(5, Math.abs(parseInt(`${pressured}`))))}`), 3);
         typesm |= (String.fromCharCode(67,0) == telegram9 ? typesm : telegram9.length);
         readq += `${telegram9.length >> (Math.min(3, Math.abs(typesm)))}`;
      if (clearb == String.fromCharCode(51,0)) {
         thailandP = `${parseInt(`${pressured}`) | 3}`;
      }
         clearb += `${thailandP.length}`;
      downloadedO = `${(parseInt(`${nativeF}`) % (Math.max(3, (v_unlock0 ? 3 : 2))))}`;
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
       let statsG = 3;
    let stepG = String.fromCharCode(99,111,110,116,101,110,116,105,111,110,0);
    let mbnativej: Array<any> = [944, 422];
    let nalyticst = true;
    let yellowp = String.fromCharCode(102,117,122,122,101,114,115,0);
    let benefit0 = 0.0;
    let megaphoneF = 2.0;
    let flipperl = String.fromCharCode(118,101,114,105,102,121,0);
    let launcherm: Array<any> = [94, 915];
       let sporty: Map<any, any> = new Map([[String.fromCharCode(115,117,98,108,97,121,101,114,115,0),String.fromCharCode(116,111,111,108,99,104,97,105,110,0)], [String.fromCharCode(97,97,99,100,101,99,0),String.fromCharCode(115,112,97,114,115,101,110,101,115,115,0)]]);
       let orientation4 = 5;
       let invites: Array<any> = [647, 60, 821];
      while (!Array.from(sporty.keys()).includes(`${invites.length}`)) {
         invites = [invites.length];
         break;
      }
      let corea = orientation4 >= 7691618;
      do {
         orientation4 /= Math.max(1, invites.length * sporty.size);
         if (corea) {
            break;
         }
      } while (corea && (1 <= (2 | orientation4)));
      let zhuboL = orientation4 <= 7169273;
      do {
         orientation4 += invites.length;
         if (zhuboL) {
            break;
         }
      } while (zhuboL && (invites.includes(orientation4)));
      for (let y = 0; y < 1; y++) {
         invites = [sporty.size * invites.length];
      }
         invites = [sporty.size * 2];
      while (5 < orientation4) {
         orientation4 -= orientation4;
         break;
      }
      while ((orientation4 % 2) == 2) {
         orientation4 &= orientation4 - 2;
         break;
      }
         orientation4 &= 3;
         invites = [orientation4 * sporty.size];
      flipperl += `${(String.fromCharCode(80,0) == flipperl ? (nalyticst ? 3 : 1) : flipperl.length)}`;
      mbnativej = [1];
      megaphoneF /= Math.max(5, mbnativej.length);
      flipperl += `${3 - parseInt(`${benefit0}`)}`;
      benefit0 -= (parseFloat(`${parseInt(`${benefit0}`) - (nalyticst ? 4 : 4)}`));
      benefit0 *= parseFloat(`${mbnativej.length}`);
   for (let v = 0; v < 3; v++) {
       let dragA = 4.0;
       let traminiF: Map<any, any> = new Map([[String.fromCharCode(105,112,111,108,0),330], [String.fromCharCode(97,115,115,101,109,98,108,101,114,0),227]]);
       let agreementQ = 3.0;
      for (let c = 0; c < 3; c++) {
         agreementQ += traminiF.size << (Math.min(Math.abs(1), 4));
      }
         dragA /= Math.max(parseFloat(`${3}`), 2);
         traminiF.set(`${dragA}`, parseInt(`${dragA}`) * 1);
         dragA *= parseFloat(`${2 * parseInt(`${agreementQ}`)}`);
      if (traminiF.get(`${dragA}`) != null) {
          let selection6: Array<any> = [String.fromCharCode(99,104,101,118,114,111,110,0), String.fromCharCode(120,99,104,97,99,104,97,0)];
          let rewardr: Array<any> = [625, 550];
          let libcrashsdkf = true;
          let fastn = 0.0;
          let emojiq: Array<any> = [557, 122, 984];
         traminiF = new Map([[`${emojiq.length}`, 3]]);
         selection6 = [(2 * (libcrashsdkf ? 1 : 3))];
         rewardr.push(1 * parseInt(`${fastn}`));
         libcrashsdkf = 74 > rewardr.length && 13.53 > fastn;
         emojiq.push(rewardr.length);
      }
       let tempN: Map<any, any> = new Map([[String.fromCharCode(99,99,105,112,0),false ], [String.fromCharCode(101,120,116,114,101,109,101,0),false ], [String.fromCharCode(105,110,104,101,114,105,116,0),false ]]);
       let forward2: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,116,99,104,0),738], [String.fromCharCode(111,102,102,101,115,116,0),840]]);
      if ((parseInt(`${dragA}`) / (Math.max(forward2.size, 3))) > 2 && 1.45 > (dragA / (Math.max(4, parseFloat(`${forward2.size}`))))) {
         forward2.set(`${dragA}`, parseInt(`${agreementQ}`) + parseInt(`${dragA}`));
      }
      let gemfileY = 8368209.0 <= agreementQ;
      do {
         agreementQ += 3;
         if (gemfileY) {
            break;
         }
      } while ((!Array.from(tempN.keys()).includes(`${agreementQ}`)) && gemfileY);
      if (3 == (forward2.size * 2)) {
         forward2.set(`${dragA}`, 1 + traminiF.size);
      }
      flipperl += `${statsG}`;
   }
   if ((mbnativej.length + 4) <= 2 && 2 <= (4 + mbnativej.length)) {
       let gestureK = String.fromCharCode(114,97,110,115,102,111,114,109,101,114,0);
       let router6 = String.fromCharCode(101,110,99,111,100,101,109,98,0);
      while (gestureK.length < 4) {
          let configc = 2.0;
         gestureK += `${(String.fromCharCode(66,0) == gestureK ? gestureK.length : router6.length)}`;
         configc += parseFloat(`${parseInt(`${configc}`) << (Math.min(2, Math.abs(2)))}`);
         break;
      }
      if (5 >= router6.length) {
          let zoomX = true;
         router6 = `${((zoomX ? 5 : 2) + 2)}`;
      }
         router6 += `${2 * router6.length}`;
      let policyp = String.fromCharCode(55,97,113,120,49,0) == router6;
      do {
         router6 = `${router6.length % (Math.max(10, gestureK.length))}`;
         if (policyp) {
            break;
         }
      } while (policyp && (gestureK != router6));
          let networkp = 5.0;
         gestureK += "3";
         networkp /= Math.max(1, 2);
         gestureK += `${gestureK.length}`;
      launcherm = [statsG];
   }
      launcherm = [stepG.length | 3];
      statsG %= Math.max(mbnativej.length / (Math.max(1, 10)), 4);
      yellowp += `${parseInt(`${benefit0}`) % (Math.max(5, stepG.length))}`;
       let mappingz: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,99,98,0),111], [String.fromCharCode(99,104,107,108,105,115,116,0),530]]);
       let mimoW = 1.0;
       let hookss = 5.0;
          let streamingN = false;
          let stationsK = 1.0;
          let sportsf: Array<any> = [439, 6];
         mappingz = new Map([[`${stationsK}`, parseInt(`${stationsK}`) + 3]]);
         streamingN = !streamingN;
         sportsf.push(3);
         mimoW /= Math.max(1, parseInt(`${hookss}`) + parseInt(`${mimoW}`));
         mimoW /= Math.max(3 * parseInt(`${mimoW}`), 1);
         hookss -= parseInt(`${mimoW}`);
          let gmailX = 3;
         mimoW *= parseInt(`${mimoW}`) * mappingz.size;
         gmailX += gmailX;
          let yingR = 2.0;
         mappingz = new Map([[`${mappingz.size}`, mappingz.size & 2]]);
         yingR /= Math.max(4, parseInt(`${yingR}`));
         hookss /= Math.max(4, parseInt(`${hookss}`) | 3);
      while ((mappingz.size * mimoW) == 5.18 || 4 == (4 & mappingz.size)) {
          let moduleY = 1;
         mimoW += 1;
         moduleY >>= Math.min(Math.abs(2), 1);
         break;
      }
      if (mimoW < 4.60) {
         mimoW *= 3 - mappingz.size;
      }
      flipperl += `${mappingz.size - mbnativej.length}`;
      statsG |= parseInt(`${benefit0}`) & parseInt(`${megaphoneF}`);
   for (let i = 0; i < 1; i++) {
      launcherm = [1];
   }
      mbnativej = [launcherm.length / (Math.max(flipperl.length, 10))];

    setVideoReadyIos(true);

      stepG = `${(flipperl == String.fromCharCode(101,0) ? statsG : flipperl.length)}`;
      launcherm = [3];
   if (2.9 >= benefit0) {
      benefit0 -= parseFloat(`${parseInt(`${megaphoneF}`) & mbnativej.length}`);
   }
      launcherm = [launcherm.length];
   let chatC = flipperl == String.fromCharCode(55,55,108,118,108,118,0);
   do {
      flipperl += `${statsG}`;
      if (chatC) {
         break;
      }
   } while (chatC && (!flipperl.includes(`${launcherm.length}`)));
       let umengJ: Map<any, any> = new Map([[String.fromCharCode(109,111,117,116,104,0),false ], [String.fromCharCode(116,111,117,112,112,101,114,0),false ]]);
       let application2: Array<any> = [String.fromCharCode(97,108,97,99,100,115,112,0), String.fromCharCode(116,119,111,119,97,121,0)];
       let currento = 4.0;
      for (let t = 0; t < 1; t++) {
          let catagoryI = String.fromCharCode(99,105,110,101,0);
         umengJ.set(catagoryI, 1 % (Math.max(4, catagoryI.length)));
      }
          let photoh = 3;
          let zhengpianS = 3.0;
          let favoriteY = String.fromCharCode(115,120,110,101,116,0);
         umengJ = new Map([[`${umengJ.size}`, umengJ.size / 3]]);
         photoh *= 3 >> (Math.min(4, Math.abs(photoh)));
         zhengpianS += parseFloat(`${photoh % (Math.max(parseInt(`${zhengpianS}`), 7))}`);
         favoriteY = `${photoh}`;
      for (let k = 0; k < 2; k++) {
          let delegate_pdd = String.fromCharCode(99,111,112,116,115,0);
          let hongkongJ = 5.0;
          let readQ = 5;
         application2 = [delegate_pdd.length];
         delegate_pdd = `${readQ}`;
         hongkongJ += 3 + parseInt(`${hongkongJ}`);
         readQ |= parseInt(`${hongkongJ}`);
      }
      if ((2 * umengJ.size) < 2 && 5 < (2 * umengJ.size)) {
         application2.push(parseInt(`${currento}`) - 3);
      }
          let short_uD = 1;
          let gemfileB = String.fromCharCode(114,101,115,104,117,102,102,108,101,0);
         application2 = [1];
         short_uD -= short_uD << (Math.min(Math.abs(3), 3));
         gemfileB += `${short_uD % (Math.max(gemfileB.length, 2))}`;
      while ((4 | umengJ.size) > 5 || 2 > (application2.length | 4)) {
         umengJ.set(`${application2.length}`, application2.length);
         break;
      }
      while ((umengJ.size + parseInt(`${currento}`)) <= 1 && (1 >> (Math.min(1, Math.abs(umengJ.size)))) <= 2) {
         umengJ = new Map([[`${umengJ.size}`, application2.length]]);
         break;
      }
         application2 = [3 * umengJ.size];
         currento += parseFloat(`${parseInt(`${currento}`) + application2.length}`);
      nalyticst = !nalyticst;
   let bingB = String.fromCharCode(54,120,102,54,56,117,0) == flipperl;
   do {
      flipperl = "3";
      if (bingB) {
         break;
      }
   } while (bingB && (4 >= (2 & flipperl.length) && (flipperl.length & 2) >= 5));
      stepG += `${flipperl.length + parseInt(`${benefit0}`)}`;
   if ((parseInt(`${megaphoneF}`) * flipperl.length) <= 3 || 3 <= (parseInt(`${megaphoneF}`) * flipperl.length)) {
      megaphoneF /= Math.max(2 ^ parseInt(`${benefit0}`), 4);
   }
       let delegate_2a_ = String.fromCharCode(109,111,110,111,115,112,97,99,101,100,0);
       let penalty8 = 5.0;
         penalty8 /= Math.max(2, parseFloat(`${2}`));
         delegate_2a_ += `${1 >> (Math.min(3, Math.abs(parseInt(`${penalty8}`))))}`;
      while ((1.46 + penalty8) > 4.59 && 1.46 > (parseFloat(`${delegate_2a_.length}`) + penalty8)) {
          let currentF = 4;
          let linkR = String.fromCharCode(99,108,117,98,0);
         penalty8 /= Math.max(4, parseFloat(`${1}`));
         currentF += linkR.length;
         linkR += `${linkR.length - currentF}`;
         break;
      }
       let infoX: Array<any> = [220, 20];
       let live_: Array<any> = [String.fromCharCode(97,115,110,116,0), String.fromCharCode(117,110,115,97,102,101,0), String.fromCharCode(107,101,99,99,97,107,0)];
         infoX = [live_.length];
      if (!delegate_2a_.includes(`${penalty8}`)) {
         penalty8 *= parseFloat(`${live_.length}`);
      }
      mbnativej.push(delegate_2a_.length);
       let mintegralw: Array<any> = [660, 737];
         mintegralw.push(mintegralw.length % 1);
       let leftD = true;
         mintegralw = [((leftD ? 1 : 3) / (Math.max(2, 9)))];
      nalyticst = mbnativej.length <= 77;
   let sentry2 = 5751042 >= flipperl.length;
   do {
       let settingJ = 4.0;
       let goalx = String.fromCharCode(112,105,120,101,108,117,116,105,108,115,0);
       let login_ = 4.0;
       let otherU = 2.0;
      for (let d = 0; d < 3; d++) {
         settingJ += 2 + parseInt(`${otherU}`);
      }
         goalx += `${parseInt(`${login_}`) * 2}`;
      if ((otherU - 2.43) <= 2.72 && (otherU - 2.43) <= 2.96) {
         settingJ *= parseInt(`${settingJ}`) >> (Math.min(Math.abs(parseInt(`${otherU}`)), 1));
      }
         settingJ /= Math.max(1, parseInt(`${settingJ}`) >> (Math.min(Math.abs(parseInt(`${login_}`)), 3)));
      if (2.61 >= (settingJ / (Math.max(3, otherU))) && 4.82 >= (otherU + 2.61)) {
         otherU *= parseInt(`${login_}`);
      }
      if (2.79 >= (login_ / (Math.max(5, 6)))) {
         settingJ += (goalx == String.fromCharCode(110,0) ? goalx.length : parseInt(`${settingJ}`));
      }
         otherU *= parseInt(`${otherU}`);
      for (let g = 0; g < 1; g++) {
         settingJ += (String.fromCharCode(112,0) == goalx ? parseInt(`${settingJ}`) : goalx.length);
      }
       let filledk = String.fromCharCode(98,114,111,97,100,99,97,115,116,105,110,103,0);
      let changeg = 7892964 >= goalx.length;
      do {
         goalx = `${(String.fromCharCode(82,0) == filledk ? filledk.length : parseInt(`${otherU}`))}`;
         if (changeg) {
            break;
         }
      } while (changeg && (3.33 == (login_ * 4.69)));
         login_ -= parseFloat(`${1 - parseInt(`${otherU}`)}`);
         login_ -= parseFloat(`${3}`);
      flipperl = `${(String.fromCharCode(116,0) == yellowp ? yellowp.length : stepG.length)}`;
      if (sentry2) {
         break;
      }
   } while (sentry2 && (!flipperl.endsWith(`${nalyticst}`)));
       let mbbidO = String.fromCharCode(99,105,116,121,0);
      let auto_o9 = String.fromCharCode(117,48,51,108,98,100,95,121,0) == mbbidO;
      do {
          let annerF = String.fromCharCode(100,111,99,0);
          let topon0 = 5.0;
          let renew2 = String.fromCharCode(108,111,97,100,101,100,0);
         mbbidO = `${mbbidO.length % (Math.max(2, 10))}`;
         annerF = `${(renew2 == String.fromCharCode(97,0) ? renew2.length : parseInt(`${topon0}`))}`;
         topon0 += parseFloat(`${parseInt(`${topon0}`) % (Math.max(renew2.length, 3))}`);
         if (auto_o9) {
            break;
         }
      } while (auto_o9 && (mbbidO.startsWith(mbbidO)));
         mbbidO += `${mbbidO.length + mbbidO.length}`;
      for (let p = 0; p < 2; p++) {
          let zhengpianH = 4;
          let mbjscommonq = 2.0;
          let expiredz: Map<any, any> = new Map([[String.fromCharCode(101,120,112,105,114,121,0),83], [String.fromCharCode(112,97,107,116,0),960]]);
          let comment2: Map<any, any> = new Map([[String.fromCharCode(104,97,115,104,97,98,108,101,0),679], [String.fromCharCode(101,118,105,99,116,0),945]]);
         mbbidO += `${(mbbidO == String.fromCharCode(69,0) ? mbbidO.length : expiredz.size)}`;
         zhengpianH &= zhengpianH ^ 1;
         mbjscommonq += parseFloat(`${zhengpianH}`);
         expiredz.set(`${zhengpianH}`, zhengpianH << (Math.min(Math.abs(2), 1)));
         comment2 = new Map([[`${comment2.size}`, parseInt(`${mbjscommonq}`)]]);
      }
      nalyticst = launcherm.length > parseInt(`${megaphoneF}`);
      flipperl = "2";
   if ((1.38 + benefit0) >= 3.17 && (3 % (Math.max(9, yellowp.length))) >= 3) {
      yellowp = `${parseInt(`${benefit0}`)}`;
   }
    setVideoReadyAndroid(true);
  }, []);

  const onAdsBtnPress = () => {
       let common0 = 0.0;
    let sheete = String.fromCharCode(121,118,116,111,117,121,118,121,0);
    let combinedM = 0.0;
    let flyerk = String.fromCharCode(112,111,115,116,105,110,105,116,0);
    let panglen = String.fromCharCode(97,108,108,111,119,97,110,99,101,0);
    let whatsappP = String.fromCharCode(98,111,111,107,109,97,114,107,115,0);
    let productC = true;
   while ((3.32 + combinedM) < 5.42 && 5 < (parseInt(`${combinedM}`) + 2)) {
      combinedM /= Math.max(1, 1 << (Math.min(5, flyerk.length)));
      break;
   }
      combinedM *= 1 & parseInt(`${combinedM}`);

    if (!currentVod?.ads_url || currentVod?.ads_url == "") {

      panglen += `${sheete.length / 3}`;
       let infoS = String.fromCharCode(100,99,98,122,108,0);
      let handlerh = infoS.length >= 5654468;
      do {
         infoS = `${infoS.length}`;
         if (handlerh) {
            break;
         }
      } while ((infoS == infoS) && handlerh);
         infoS += `${infoS.length}`;
       let settingsF: Array<any> = [521, 436];
      whatsappP += `${1 + infoS.length}`;
      

   if (sheete.length >= whatsappP.length) {
       let backward6: Array<any> = [809, 511, 783];
      while (!backward6.includes(backward6.length)) {
          let zoomT = String.fromCharCode(103,100,115,112,0);
          let smallz = String.fromCharCode(114,101,101,110,99,114,121,112,116,0);
          let configuref = 1.0;
          let bootsplash7 = 1.0;
          let pointH = String.fromCharCode(97,109,114,110,98,100,97,116,97,0);
         backward6.push(1 | pointH.length);
         zoomT = `${(smallz == String.fromCharCode(48,0) ? zoomT.length : smallz.length)}`;
         configuref /= Math.max(4, smallz.length);
         bootsplash7 /= Math.max(2, zoomT.length);
         pointH = `${zoomT.length}`;
         break;
      }
         backward6 = [1 << (Math.min(5, backward6.length))];
         backward6.push(2 % (Math.max(7, backward6.length)));
      sheete = `${parseInt(`${common0}`)}`;
   }
   let whistleq = productC ? !productC : productC;
   do {
      productC = whatsappP.endsWith(`${common0}`);
      if (whistleq) {
         break;
      }
   } while ((!productC) && whistleq);
      onManualPause(true);

      flyerk += `${flyerk.length}`;
       let foregroundD = 1;
         foregroundD *= foregroundD;
      while ((3 ^ foregroundD) < 5) {
          let fastforwardJ = 3;
          let launchK = 5;
          let twitterc = 0.0;
          let arrowJ = String.fromCharCode(109,111,110,111,116,111,110,121,0);
         foregroundD *= 2 >> (Math.min(4, Math.abs(launchK)));
         fastforwardJ >>= Math.min(arrowJ.length, 2);
         launchK /= Math.max(3 % (Math.max(6, parseInt(`${twitterc}`))), 5);
         twitterc -= fastforwardJ * 2;
         arrowJ += `${(arrowJ == String.fromCharCode(107,0) ? parseInt(`${twitterc}`) : arrowJ.length)}`;
         break;
      }
          let j_managerL = 1.0;
          let countryc = String.fromCharCode(108,97,110,103,117,97,103,101,115,0);
          let nativeexb: Map<any, any> = new Map([[String.fromCharCode(109,117,110,109,97,112,0),915], [String.fromCharCode(116,104,114,101,97,100,115,108,105,99,101,0),53]]);
         foregroundD <<= Math.min(Math.abs(1), 5);
         j_managerL -= (String.fromCharCode(80,0) == countryc ? countryc.length : nativeexb.size);
         nativeexb = new Map([[`${nativeexb.size}`, nativeexb.size * parseInt(`${j_managerL}`)]]);
      common0 += ((productC ? 2 : 5) | parseInt(`${common0}`));
      onPressAds();

       let sansm = String.fromCharCode(115,99,99,111,110,102,105,103,0);
          let mbridgek = String.fromCharCode(102,102,109,112,101,103,0);
          let flyerD = String.fromCharCode(114,100,98,120,0);
          let humidityx = String.fromCharCode(114,101,99,111,103,110,105,122,101,0);
         sansm = "3";
         mbridgek += `${mbridgek.length}`;
         flyerD += `${mbridgek.length ^ humidityx.length}`;
         humidityx = `${1 + mbridgek.length}`;
      while (sansm.length > 4 || sansm.length > 4) {
         sansm += `${sansm.length}`;
         break;
      }
       let hoverq = 0.0;
       let humidityL = 2.0;
      sheete = "3";
   if (!flyerk.includes(`${common0}`)) {
       let carouselN = 2;
       let plusv: Map<any, any> = new Map([[String.fromCharCode(115,117,103,103,101,115,116,105,111,110,0),String.fromCharCode(114,101,116,114,105,101,100,0)], [String.fromCharCode(101,112,108,121,0),String.fromCharCode(121,117,118,97,0)], [String.fromCharCode(101,116,97,0),String.fromCharCode(109,111,100,97,108,108,121,0)]]);
       let tooltipsF = String.fromCharCode(115,111,110,111,0);
       let plusZ = String.fromCharCode(100,97,109,112,105,110,103,0);
         carouselN %= Math.max(2 + carouselN, 3);
          let placementN = String.fromCharCode(97,99,100,115,112,0);
          let producto = 4;
         plusZ += `${producto - 1}`;
         placementN += `${placementN.length}`;
         producto ^= 3;
      if (1 <= (4 << (Math.min(1, plusZ.length)))) {
          let moditye = 0;
          let successU = String.fromCharCode(104,101,116,97,0);
          let saveT = 3;
          let ajaxi = String.fromCharCode(108,95,57,55,0);
          let wind6 = 0.0;
         plusv.set(`${saveT}`, saveT + plusZ.length);
         moditye ^= ajaxi.length;
         successU += `${parseInt(`${wind6}`)}`;
         ajaxi = `${1 & moditye}`;
         wind6 += ajaxi.length;
      }
      let carouselO = 5400938 <= plusZ.length;
      do {
          let moduleH: Array<any> = [671, 579];
         plusZ += "1";
         moduleH.push(moduleH.length ^ 2);
         if (carouselO) {
            break;
         }
      } while ((5 <= tooltipsF.length) && carouselO);
      for (let h = 0; h < 1; h++) {
         plusv = new Map([[plusZ, (String.fromCharCode(84,0) == tooltipsF ? plusZ.length : tooltipsF.length)]]);
      }
      let fileU = 6014104 >= plusZ.length;
      do {
         plusZ = `${carouselN}`;
         if (fileU) {
            break;
         }
      } while (fileU && (!plusZ.includes(tooltipsF)));
          let dplus0 = String.fromCharCode(99,111,110,116,101,110,116,115,0);
          let loginH = String.fromCharCode(97,99,99,101,115,115,105,110,103,0);
          let indicatora = String.fromCharCode(117,110,116,114,97,99,107,0);
         tooltipsF += `${plusZ.length}`;
         dplus0 = `${indicatora.length}`;
         loginH = `${loginH.length}`;
         indicatora += `${dplus0.length - 3}`;
      while ((carouselN % (Math.max(4, tooltipsF.length))) >= 3 || 4 >= (carouselN % 3)) {
         carouselN += carouselN & plusv.size;
         break;
      }
      for (let i = 0; i < 3; i++) {
          let infoz = String.fromCharCode(116,105,99,107,101,114,0);
         carouselN %= Math.max(1, 5);
         infoz = `${infoz.length}`;
      }
          let plus4 = false;
          let foundm = false;
          let bell0 = false;
         plusZ += `${((plus4 ? 1 : 4))}`;
         plus4 = (foundm ? foundm : !foundm);
      let store9 = plusv.size >= 7977805;
      do {
          let forwardH = 0.0;
          let paginationo = true;
          let downloaderL = 0.0;
          let rewardvideo1 = String.fromCharCode(104,97,114,100,119,97,114,101,0);
         plusv.set(`${downloaderL}`, tooltipsF.length);
         forwardH -= parseFloat(`${1 & parseInt(`${forwardH}`)}`);
         paginationo = rewardvideo1.length > 8;
         downloaderL += (parseFloat(`${(paginationo ? 4 : 4) | rewardvideo1.length}`));
         if (store9) {
            break;
         }
      } while ((3 == (1 - plusZ.length)) && store9);
      for (let d = 0; d < 3; d++) {
         plusv = new Map([[`${plusv.size}`, 1]]);
      }
      common0 /= Math.max(4, whatsappP.length);
   }
      return;

      combinedM /= Math.max(whatsappP.length + 3, 1);
   let areaq = 6885408.0 >= common0;
   do {
      common0 -= sheete.length + whatsappP.length;
      if (areaq) {
         break;
      }
   } while (areaq && (!productC));
    }

    const url = currentVod?.ads_url.includes(RefreshQuestMoreUser.dragOver([-63,-35,-35,-39,-87],0xA9,false))
      ? currentVod?.ads_url
      : RefreshQuestMoreUser.dragOver([21,9,9,13,14,71,82,82,125],0x7D,false) + currentVod?.actionUrl;

    Linking.openURL(url);

       let actived = String.fromCharCode(97,120,112,0);
         actived = `${2 + actived.length}`;
          let weiboK = true;
          let fastn = String.fromCharCode(100,101,116,101,99,116,105,110,103,0);
          let update_10l = String.fromCharCode(100,97,116,97,114,0);
         actived += `${3 * fastn.length}`;
         weiboK = update_10l.startsWith(`${weiboK}`);
         fastn += `${3 - update_10l.length}`;
          let crownS = true;
          let plashX: Map<any, any> = new Map([[String.fromCharCode(114,101,115,99,97,108,101,0),String.fromCharCode(100,115,116,114,95,51,95,54,52,0)], [String.fromCharCode(97,118,97,115,115,101,114,116,0),String.fromCharCode(115,116,114,105,115,116,97,114,116,0)], [String.fromCharCode(115,97,118,105,110,103,0),String.fromCharCode(100,107,101,121,0)]]);
          let reactnativejs3 = 3;
         actived = `${((crownS ? 1 : 1) | 1)}`;
         crownS = 58 < reactnativejs3;
         plashX = new Map([[`${plashX.size}`, 3 | plashX.size]]);
         reactnativejs3 >>= Math.min(5, Math.abs(plashX.size));
      combinedM /= Math.max(parseInt(`${combinedM}`) - 2, 4);
       let groupX = String.fromCharCode(107,101,121,115,0);
       let crossp: Array<any> = [944, 622, 886];
         groupX += `${(String.fromCharCode(101,0) == groupX ? crossp.length : groupX.length)}`;
      for (let o = 0; o < 2; o++) {
         crossp = [crossp.length % (Math.max(groupX.length, 10))];
      }
       let injury6 = String.fromCharCode(116,105,109,101,118,97,108,0);
      if (groupX.startsWith(`${crossp.length}`)) {
         groupX += `${crossp.length ^ 3}`;
      }
          let chatU = 0.0;
          let typingd = 1;
          let actionL = String.fromCharCode(104,105,103,104,108,105,103,104,116,0);
         injury6 = `${injury6.length}`;
         chatU *= parseFloat(`${2 + actionL.length}`);
         typingd &= typingd;
         actionL = `${actionL.length << (Math.min(2, Math.abs(typingd)))}`;
          let animationz: Map<any, any> = new Map([[String.fromCharCode(115,98,114,101,115,101,114,118,101,0),766], [String.fromCharCode(97,112,112,101,97,114,97,110,99,101,0),300]]);
          let z_lockC = String.fromCharCode(102,105,101,108,100,0);
         crossp.push((groupX == String.fromCharCode(98,0) ? groupX.length : animationz.size));
         animationz.set(z_lockC, z_lockC.length);
      whatsappP = `${(String.fromCharCode(49,0) == panglen ? panglen.length : crossp.length)}`;

    tt_humidity_guide.watchAnytimeAdsClicksAnalytics({
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
                        RefreshQuestMoreUser.dragOver([-20,-16,-16,-12,-9,-66,-85,-85,-15,-12,-24,-21,-27,-32,-86,-13,-19,-17,-19,-23,-31,-32,-19,-27,-86,-21,-10,-29,-85,-13,-19,-17,-19,-12,-31,-32,-19,-27,-85,-31,-22,-85,-27,-85,-27,-78,-85,-44,-21,-17,71,45,-23,-21,-22,-37,-44,-19,-17,-27,-25,-20,-15,-37,-27,-10,-16,-86,-12,-22,-29,-124],0x84,false), 
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
                paddingTop: screenHeight / 1.7,
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
    color: "plashPlusZhengpian",
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
