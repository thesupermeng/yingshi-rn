

class MatchPlacement {
    static turnBlack = (contents: [number], key: number, hasEmoji: boolean) => {
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
import PlayIcon from "@static/images/starProduct.svg";
import PauseIcon from "@static/images/descHeji.svg";
import Video, { OnProgressData, OBasketballPlaylist } from "react-native-video";
import FastImage from "../../common/gwi_with";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/kg_index";
import { DOWNLOAD_WATCH_ANYTIME } from "@utility/n_subs_interstitial";
import { playVod } from "@redux/actions/xif_layout";
import RNFetchBlob from "rn-fetch-blob";
import { addIdToCache } from "../../../utils/iue_description_form";
import { screenModel } from "@type/nb_shared_target";
import umb_center_carousel from "../../../../Umeng/umb_center_carousel";
import BecomeVipOverlay from "../../modal/pg_buffer_alert";
import VipGuideModal from "../../modal/n_header_membership";
import { SMBing } from "@utility/sa_crown";
import { setIsMiniVodGuideShown } from "@redux/actions/a_switch";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from '@models/kl_sheet';
interface XFillButton {
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

const videoBufferGif = require("@static/images/shootAcceptedPrivate_7.gif");

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
}: XFillButton) {
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
  const videoRef = useRef<OBasketballPlaylist>(null);
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
  const userState = useSelector<HDTGesturesList>('userReducer');
  const isVip = KWConstants.isVip(userState.user);

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
       let upgradek = 1.0;
    let suggestionB = 0.0;
    let s_centerF: Array<any> = [944, 603, 736];
    let connectionD = 5;
    let inviteq = String.fromCharCode(107,95,51,55,95,114,105,118,97,116,101,0);
    let lessv = 0.0;
    let productI = String.fromCharCode(112,95,49,49,95,97,104,101,97,100,0);
    let combinedO = 5.0;
    let sansR: Array<any> = [153, 674, 230];
    let sportE = 1.0;
       let annerd: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,97,114,101,110,99,101,95,105,95,50,56,0),925], [String.fromCharCode(119,95,52,51,95,113,117,97,114,116,122,0),19], [String.fromCharCode(116,101,114,109,105,110,97,108,95,50,95,51,50,0),435]]);
       let moviesT = String.fromCharCode(112,111,112,112,101,100,95,104,95,50,50,0);
       let fast4: Map<any, any> = new Map([[String.fromCharCode(109,112,97,100,115,112,95,107,95,50,57,0),String.fromCharCode(111,95,55,50,95,97,114,103,0)], [String.fromCharCode(113,95,49,57,95,112,117,98,108,105,115,104,101,114,115,0),String.fromCharCode(98,95,50,53,95,109,105,108,108,101,114,0)], [String.fromCharCode(108,101,114,116,95,111,95,53,50,0),String.fromCharCode(114,95,51,52,95,108,111,116,115,0)]]);
          let thailandB = false;
          let halfT = false;
          let inactivex = false;
         fast4.set(`${moviesT}`, moviesT.length * fast4.size);
         thailandB = inactivex;
         halfT = !thailandB;
      if (moviesT.startsWith(`${annerd.size}`)) {
         moviesT += `${fast4.size % (Math.max(3, 7))}`;
      }
         annerd = new Map([[`${fast4.size}`, fast4.size ^ moviesT.length]]);
         annerd.set(`${moviesT}`, moviesT.length + annerd.size);
         moviesT = `${annerd.size}`;
       let tempy = 3.0;
          let internetw = String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,115,95,107,95,52,52,0);
         annerd.set(internetw, (internetw == String.fromCharCode(97,0) ? parseInt(`${tempy}`) : internetw.length));
          let episodesW = String.fromCharCode(99,108,101,97,110,95,48,95,54,51,0);
         tempy += (moviesT == String.fromCharCode(50,0) ? moviesT.length : annerd.size);
         episodesW = "1";
         tempy -= 2 >> (Math.min(2, moviesT.length));
      lessv /= Math.max(3, parseFloat(`${parseInt(`${combinedO}`)}`));
   if (5.12 > (5.25 * combinedO) || (combinedO * upgradek) > 5.25) {
      combinedO *= 3;
   }
   for (let i = 0; i < 1; i++) {
       let favicona = String.fromCharCode(115,112,108,105,116,109,118,115,95,57,95,57,50,0);
         favicona += `${favicona.length}`;
         favicona += `${favicona.length}`;
      if (favicona == favicona) {
         favicona += `${favicona.length - favicona.length}`;
      }
      sansR.push(inviteq.length & parseInt(`${suggestionB}`));
   }
       let member1 = String.fromCharCode(106,95,49,95,101,110,99,111,100,101,114,0);
         member1 += "1";
         member1 = "2";
         member1 = `${member1.length}`;
      upgradek /= Math.max(parseFloat(`${sansR.length}`), 4);
   let champion8 = 9127230.0 <= suggestionB;
   do {
      suggestionB += parseInt(`${suggestionB}`) / 3;
      if (champion8) {
         break;
      }
   } while (((suggestionB - 2.17) > 3.63 && 1.63 > (suggestionB - 2.17)) && champion8);
   if ((4 ^ s_centerF.length) == 2) {
      s_centerF.push(parseInt(`${lessv}`) | 3);
   }
      upgradek /= Math.max(1, parseFloat(`${2}`));
       let launcho: Array<any> = [String.fromCharCode(108,108,118,105,100,101,110,99,100,115,112,95,52,95,49,54,0), String.fromCharCode(102,97,118,101,95,118,95,55,54,0)];
       let areaB = String.fromCharCode(99,109,115,103,95,101,95,54,56,0);
       let orientationC = String.fromCharCode(115,112,105,108,108,115,105,122,101,95,110,95,49,48,48,0);
       let private_hK = 1;
         launcho = [private_hK];
      suggestionB *= 2;
      upgradek += parseFloat(`${parseInt(`${suggestionB}`)}`);
   if (4.71 == (combinedO * 5.32) || 3 == (s_centerF.length % 4)) {
       let profiled = String.fromCharCode(115,95,51,51,95,114,97,100,98,103,0);
       let half9 = String.fromCharCode(114,111,111,109,95,110,95,52,50,0);
       let favoriteg = false;
       let combinen: Array<any> = [247, 581, 443];
       let orientationy = 1.0;
          let dcopy_pS: Map<any, any> = new Map([[String.fromCharCode(104,95,54,95,108,119,115,115,112,110,0),886], [String.fromCharCode(99,111,100,101,115,95,116,95,50,55,0),721], [String.fromCharCode(103,95,51,48,95,109,101,110,117,115,0),60]]);
          let lessQ = 5;
          let awayu: Map<any, any> = new Map([[String.fromCharCode(118,95,49,52,95,99,97,116,97,108,111,103,0),true ], [String.fromCharCode(97,103,97,105,110,95,119,95,51,49,0),false ], [String.fromCharCode(102,95,53,55,0),false ]]);
         half9 += `${awayu.size}`;
         dcopy_pS.set(`${lessQ}`, dcopy_pS.size ^ lessQ);
         awayu = new Map([[`${dcopy_pS.size}`, 1 % (Math.max(6, dcopy_pS.size))]]);
      let sharef = half9 == String.fromCharCode(101,120,52,103,55,118,114,0);
      do {
         half9 += `${((favoriteg ? 4 : 4))}`;
         if (sharef) {
            break;
         }
      } while (sharef && (profiled != String.fromCharCode(52,0)));
      if (favoriteg) {
         favoriteg = 50.26 > orientationy;
      }
      let matches6 = 5232281.0 >= orientationy;
      do {
          let anytimeb: Map<any, any> = new Map([[String.fromCharCode(112,97,100,100,101,100,95,50,95,55,51,0),true ], [String.fromCharCode(110,95,56,48,95,114,101,100,105,114,101,99,116,0),false ], [String.fromCharCode(104,105,115,116,95,115,95,55,57,0),true ]]);
          let pagev: Array<any> = [468, 866];
          let adultm: Map<any, any> = new Map([[String.fromCharCode(103,95,55,56,95,119,105,110,99,101,0),true ], [String.fromCharCode(105,110,116,101,114,118,97,108,115,95,50,95,55,56,0),false ]]);
          let streamingy: Map<any, any> = new Map([[String.fromCharCode(98,114,101,97,107,111,117,116,95,120,95,51,0),765], [String.fromCharCode(122,114,101,111,114,100,101,114,95,49,95,54,49,0),674]]);
         orientationy *= parseInt(`${orientationy}`);
         anytimeb.set(`${anytimeb.size}`, adultm.size ^ anytimeb.size);
         pagev = [adultm.size & pagev.length];
         streamingy = new Map([[`${streamingy.size}`, anytimeb.size % (Math.max(1, 8))]]);
         if (matches6) {
            break;
         }
      } while (matches6 && (2.35 <= orientationy));
      while (favoriteg) {
          let savex: Array<any> = [696, 722];
          let telegramg = String.fromCharCode(115,117,103,103,101,115,116,95,53,95,55,52,0);
         favoriteg = (half9.length / (Math.max(profiled.length, 7))) <= 58;
         savex = [3 >> (Math.min(1, savex.length))];
         telegramg = `${(telegramg == String.fromCharCode(51,0) ? savex.length : telegramg.length)}`;
         break;
      }
         combinen.push(parseInt(`${orientationy}`) * 3);
      if (favoriteg || (5 & combinen.length) < 1) {
         combinen = [1];
      }
      let downloaderT = combinen.length <= 8827556;
      do {
          let countdown4 = String.fromCharCode(118,95,56,48,95,101,110,100,112,111,105,110,116,115,0);
          let bingT = 0.0;
          let canvas7 = String.fromCharCode(109,111,100,117,108,101,95,50,95,49,57,0);
          let downloady = String.fromCharCode(116,95,52,51,95,114,101,99,97,108,99,117,108,97,116,101,0);
          let updatesu: Map<any, any> = new Map([[String.fromCharCode(97,115,112,101,99,116,115,95,107,95,50,55,0),641], [String.fromCharCode(118,95,57,52,95,100,105,102,102,101,114,101,110,116,0),220], [String.fromCharCode(101,110,117,109,101,114,97,116,105,110,103,95,117,95,49,49,0),247]]);
         combinen = [2];
         countdown4 = `${3 ^ updatesu.size}`;
         bingT -= parseFloat(`${updatesu.size}`);
         canvas7 = `${canvas7.length << (Math.min(Math.abs(1), 2))}`;
         downloady = "1";
         if (downloaderT) {
            break;
         }
      } while (downloaderT && (1 > (5 + profiled.length)));
         favoriteg = profiled.length >= half9.length;
       let routerp = 0.0;
         combinen.push(parseInt(`${orientationy}`));
         routerp -= half9.length;
       let switch_0A = String.fromCharCode(110,116,115,99,95,121,95,56,0);
       let default_h7Q = String.fromCharCode(112,95,50,49,95,111,109,105,116,116,105,110,103,0);
       let large6 = true;
      if (2 <= default_h7Q.length && large6) {
         default_h7Q = "1";
      }
      s_centerF = [((favoriteg ? 2 : 4) * parseInt(`${combinedO}`))];
   }
   let expand0 = s_centerF.length <= 5921012;
   do {
      s_centerF.push(connectionD);
      if (expand0) {
         break;
      }
   } while (expand0 && (s_centerF.length >= parseInt(`${upgradek}`)));
      sansR = [s_centerF.length % (Math.max(inviteq.length, 10))];
   for (let l = 0; l < 1; l++) {
      s_centerF = [s_centerF.length];
   }
   while (2.2 == combinedO) {
       let moviesA = 4;
      for (let u = 0; u < 1; u++) {
         moviesA %= Math.max(4, moviesA % (Math.max(10, moviesA)));
      }
          let clock4 = String.fromCharCode(110,105,99,101,95,55,95,56,0);
         moviesA &= (clock4 == String.fromCharCode(111,0) ? moviesA : clock4.length);
      if (moviesA <= moviesA) {
         moviesA %= Math.max(1, 3);
      }
      combinedO /= Math.max(4, parseInt(`${combinedO}`));
      break;
   }
      upgradek *= parseFloat(`${parseInt(`${upgradek}`) & 1}`);
   if ((4 & connectionD) > 5 && (combinedO + connectionD) > 5.5) {
      combinedO *= inviteq.length & parseInt(`${combinedO}`);
   }
       let short_m8z = 4.0;
         short_m8z -= 3 - parseInt(`${short_m8z}`);
      let nalyticsv = short_m8z >= 8866298.0;
      do {
         short_m8z += parseInt(`${short_m8z}`);
         if (nalyticsv) {
            break;
         }
      } while (nalyticsv && (short_m8z < 2.43));
       let countryZ = false;
       let combinedI = true;
      sansR.push(parseInt(`${suggestionB}`) % 1);
      combinedO += connectionD + parseInt(`${combinedO}`);
       let firebaseu: Map<any, any> = new Map([[String.fromCharCode(110,95,52,49,95,98,111,110,100,0),false ], [String.fromCharCode(105,104,116,120,95,120,95,56,51,0),false ]]);
       let sliderC = false;
          let changeu = String.fromCharCode(101,95,53,50,95,99,111,109,109,105,116,116,101,100,0);
          let closeM = false;
         firebaseu.set(`${sliderC}`, ((sliderC ? 5 : 5) % (Math.max(1, firebaseu.size))));
         changeu = `${(changeu == String.fromCharCode(75,0) ? changeu.length : (closeM ? 3 : 5))}`;
         closeM = (58 > ((closeM ? changeu.length : 58) >> (Math.min(changeu.length, 4))));
         sliderC = firebaseu.get(`${sliderC}`) != null;
          let eactE: Array<any> = [701, 243, 726];
          let clearO = String.fromCharCode(116,95,57,50,95,99,121,99,108,101,99,108,111,99,107,0);
          let skipM = 4.0;
         firebaseu = new Map([[`${firebaseu.size}`, 1 >> (Math.min(5, Math.abs(firebaseu.size)))]]);
         eactE = [eactE.length * parseInt(`${skipM}`)];
         clearO = `${clearO.length}`;
         skipM += parseFloat(`${parseInt(`${skipM}`)}`);
      if (sliderC || (firebaseu.size - 3) <= 1) {
         sliderC = firebaseu.get(`${sliderC}`) == null;
      }
         firebaseu = new Map([[`${firebaseu.size}`, (2 | (sliderC ? 2 : 4))]]);
          let notificationp = String.fromCharCode(98,95,52,50,95,108,111,110,103,98,105,103,0);
         sliderC = notificationp.length >= 94;
      combinedO -= 3;
   while (!inviteq.endsWith(`${upgradek}`)) {
      upgradek -= parseFloat(`${inviteq.length + 1}`);
      break;
   }
   while (2.55 > (lessv / 1.19)) {
       let nalyticsL = 5.0;
         nalyticsL -= parseInt(`${nalyticsL}`);
      for (let z = 0; z < 2; z++) {
         nalyticsL *= parseInt(`${nalyticsL}`) ^ parseInt(`${nalyticsL}`);
      }
      if ((nalyticsL / (Math.max(1, nalyticsL))) < 1.81 && 2.32 < (nalyticsL / (Math.max(1.81, 5)))) {
         nalyticsL /= Math.max(4, 2 & parseInt(`${nalyticsL}`));
      }
      lessv += parseFloat(`${1 - parseInt(`${lessv}`)}`);
      break;
   }

    overlayRef.current = true;
  };

  const handlePlayPause = () => {
       let membery = false;
    let groupm = 2.0;
    let champion6 = String.fromCharCode(102,97,110,116,111,109,95,121,95,57,55,0);
    let middle9 = 3.0;
    let liveu = false;
    let listj = String.fromCharCode(105,110,115,116,97,108,108,95,116,95,50,51,0);
    let windl: Array<any> = [20, 457, 827];
    let configv = 0.0;
    let largeU = false;
    let historyW = false;
    let actionz: Map<any, any> = new Map([[String.fromCharCode(117,116,99,116,105,109,101,95,120,95,52,52,0),true ], [String.fromCharCode(104,95,55,50,95,99,97,116,101,103,111,114,105,115,101,100,0),true ]]);
   for (let o = 0; o < 3; o++) {
      champion6 = `${2 % (Math.max(parseInt(`${middle9}`), 1))}`;
   }
       let greent = 1;
       let reminderq = 0.0;
          let logouta = 5.0;
          let combinez = 5;
         greent ^= 1 - greent;
         logouta -= parseFloat(`${combinez << (Math.min(4, Math.abs(3)))}`);
         combinez -= 2;
      let arrowb = 8617876.0 >= reminderq;
      do {
         reminderq += parseInt(`${reminderq}`);
         if (arrowb) {
            break;
         }
      } while (arrowb && (reminderq <= greent));
         greent += 1;
      for (let m = 0; m < 1; m++) {
         greent ^= 1;
      }
       let relatedd = 3.0;
      if (4.89 == (reminderq - greent)) {
         greent *= greent;
      }
      liveu = windl.includes(liveu);
   while (2.44 > groupm || (groupm + 2.44) > 3.6) {
      liveu = liveu && champion6.length < 62;
      break;
   }
   if ((1 - champion6.length) < 4) {
      windl = [((membery ? 5 : 5) - 1)];
   }
      configv *= 2;

    clearTimeout(iconTimer.current);

      configv += champion6.length | listj.length;
       let fillB: Map<any, any> = new Map([[String.fromCharCode(117,110,102,111,99,117,115,101,100,95,119,95,56,50,0),true ], [String.fromCharCode(103,105,116,104,117,98,95,105,95,57,53,0),false ], [String.fromCharCode(110,116,114,111,95,109,95,55,50,0),true ]]);
       let blacklistP = 0.0;
       let controlsZ = String.fromCharCode(101,120,116,101,114,105,111,114,95,110,95,52,0);
         blacklistP -= parseFloat(`${parseInt(`${blacklistP}`) >> (Math.min(Math.abs(3), 4))}`);
      let l_centero = 5607191.0 <= blacklistP;
      do {
          let hooksu = String.fromCharCode(115,95,54,48,95,111,119,110,108,111,97,100,0);
          let sentryg: Array<any> = [String.fromCharCode(116,105,99,107,101,114,115,95,97,95,48,0), String.fromCharCode(98,114,101,97,107,111,117,116,95,52,95,52,52,0), String.fromCharCode(114,101,109,117,120,101,114,95,118,95,56,53,0)];
          let baiduh: Map<any, any> = new Map([[String.fromCharCode(117,95,53,55,95,102,117,108,108,98,97,110,100,0),304], [String.fromCharCode(121,117,118,114,103,98,97,95,103,95,51,53,0),17], [String.fromCharCode(121,95,56,49,95,104,101,114,109,105,116,101,0),158]]);
         blacklistP += parseFloat(`${baiduh.size}`);
         hooksu = `${(hooksu == String.fromCharCode(78,0) ? hooksu.length : sentryg.length)}`;
         sentryg = [(hooksu == String.fromCharCode(85,0) ? hooksu.length : sentryg.length)];
         baiduh.set(hooksu, 3 & hooksu.length);
         if (l_centero) {
            break;
         }
      } while ((Array.from(fillB.values()).includes(blacklistP)) && l_centero);
      for (let l = 0; l < 3; l++) {
          let control8 = String.fromCharCode(102,105,101,108,100,109,97,116,99,104,95,100,95,57,49,0);
          let telegrami = String.fromCharCode(98,95,54,51,95,113,114,99,111,100,101,0);
          let aboutx: Map<any, any> = new Map([[String.fromCharCode(102,95,49,52,95,118,101,114,105,102,121,105,110,103,0),String.fromCharCode(115,99,113,117,101,114,121,95,113,95,52,0)], [String.fromCharCode(97,100,109,105,110,115,95,100,95,52,51,0),String.fromCharCode(105,95,50,51,95,109,101,110,116,105,111,110,115,0)], [String.fromCharCode(114,117,110,116,101,114,109,95,54,95,49,56,0),String.fromCharCode(120,95,56,52,95,102,114,97,109,101,115,105,122,101,115,0)]]);
          let filterW = 4.0;
          let balls = String.fromCharCode(97,108,105,103,110,101,114,95,119,95,55,49,0);
         controlsZ = `${parseInt(`${filterW}`) >> (Math.min(5, Math.abs(1)))}`;
         control8 += "3";
         telegrami += "2";
         aboutx.set(`${control8}`, control8.length - aboutx.size);
         filterW += 1;
         balls += `${control8.length}`;
      }
      while (4 <= (5 << (Math.min(1, controlsZ.length))) && 4 <= (controlsZ.length << (Math.min(Math.abs(5), 3)))) {
         controlsZ = `${controlsZ.length + 2}`;
         break;
      }
         blacklistP *= parseFloat(`${parseInt(`${blacklistP}`) - controlsZ.length}`);
      for (let q = 0; q < 2; q++) {
          let singapore7 = 1;
          let dangerp = String.fromCharCode(121,95,53,49,95,112,105,110,110,105,110,103,0);
         fillB.set(`${blacklistP}`, parseInt(`${blacklistP}`));
         singapore7 |= singapore7;
         dangerp = `${dangerp.length}`;
      }
      for (let y = 0; y < 1; y++) {
          let statsG = 3.0;
          let u_positionW = 5.0;
          let video5: Array<any> = [497, 391, 913];
          let dangerJ = true;
          let feedbackW = 2;
         fillB = new Map([[`${video5.length}`, feedbackW % (Math.max(video5.length, 5))]]);
         statsG += (parseFloat(`${(dangerJ ? 3 : 5) / (Math.max(2, parseInt(`${u_positionW}`)))}`));
         u_positionW += 3 + parseInt(`${statsG}`);
         dangerJ = u_positionW < 27.42 && !dangerJ;
         feedbackW >>= Math.min(Math.abs((parseInt(`${statsG}`) - (dangerJ ? 3 : 2))), 2);
      }
          let topic9 = false;
          let singaporej = String.fromCharCode(114,102,116,102,115,117,98,95,101,95,51,51,0);
          let splashV = 5.0;
         blacklistP += parseFloat(`${parseInt(`${blacklistP}`) >> (Math.min(Math.abs(2), 3))}`);
         topic9 = !singaporej.includes(`${splashV}`);
         singaporej += `${parseInt(`${splashV}`) ^ 3}`;
       let fullP = String.fromCharCode(111,118,101,114,118,105,101,119,95,52,95,55,56,0);
       let statistics2 = String.fromCharCode(114,95,51,56,95,100,101,99,111,109,112,114,101,115,115,0);
      champion6 += `${fillB.size}`;
   if (1 >= windl.length && 1 >= (1 | windl.length)) {
      windl = [3];
   }
   while (!largeU) {
      largeU = !liveu && listj.length == 15;
      break;
   }
   for (let n = 0; n < 1; n++) {
      largeU = configv > groupm;
   }
    setShowIcon(true);

   for (let g = 0; g < 3; g++) {
      membery = !largeU || groupm < 54.34;
   }
   let downloader0 = listj == String.fromCharCode(105,119,100,98,50,107,114,98,0);
   do {
       let internet6: Array<any> = [932, 115, 740];
       let circlex: Array<any> = [190, 923, 577];
      for (let u = 0; u < 3; u++) {
         circlex.push(internet6.length);
      }
         circlex.push(2);
         circlex.push(circlex.length & 2);
          let completei: Array<any> = [597, 464, 121];
         internet6.push(1);
         completei = [completei.length % 1];
          let becomeX: Array<any> = [214, 65, 315];
          let flyerw = String.fromCharCode(106,95,55,56,95,100,105,118,105,100,101,0);
         internet6 = [3];
         becomeX = [flyerw.length];
         flyerw = `${flyerw.length}`;
      let moviesD = circlex.length >= 6974211;
      do {
          let xvodD: Array<any> = [654, 162];
          let slider_: Map<any, any> = new Map([[String.fromCharCode(111,95,53,49,95,116,111,115,115,0),String.fromCharCode(119,95,53,53,95,115,105,109,117,108,97,116,101,100,0)], [String.fromCharCode(114,117,98,98,101,114,95,104,95,51,57,0),String.fromCharCode(117,95,52,56,95,118,112,99,120,0)]]);
          let megaphone0 = String.fromCharCode(114,95,51,48,95,116,114,117,110,107,0);
          let championn: Array<any> = [704, 16];
          let tickD = 0;
         circlex = [circlex.length];
         xvodD.push(championn.length);
         slider_ = new Map([[`${tickD}`, 2]]);
         megaphone0 = `${tickD}`;
         championn = [xvodD.length];
         if (moviesD) {
            break;
         }
      } while (moviesD && ((internet6.length << (Math.min(5, circlex.length))) == 4 && 3 == (4 << (Math.min(5, internet6.length)))));
      listj = `${((historyW ? 2 : 3) - (membery ? 3 : 2))}`;
      if (downloader0) {
         break;
      }
   } while ((5 >= listj.length || historyW) && downloader0);
       let eventj = String.fromCharCode(97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,95,112,95,53,0);
      let viewsc = eventj == String.fromCharCode(57,104,54,120,0);
      do {
         eventj += `${eventj.length >> (Math.min(1, eventj.length))}`;
         if (viewsc) {
            break;
         }
      } while ((5 == eventj.length) && viewsc);
       let inactivep: Map<any, any> = new Map([[String.fromCharCode(117,110,103,114,111,117,112,95,51,95,55,56,0),852], [String.fromCharCode(109,95,57,48,95,99,114,111,110,111,115,0),982]]);
         eventj = `${eventj.length >> (Math.min(Math.abs(2), 1))}`;
      champion6 = `${((largeU ? 2 : 2) ^ (liveu ? 2 : 5))}`;
      middle9 -= parseFloat(`${parseInt(`${configv}`)}`);
      largeU = configv == 43.10 || String.fromCharCode(70,0) == champion6;
    if (isPause) {

      membery = (parseInt(`${middle9}`) / (Math.max(champion6.length, 3))) == 4;
   let castingB = champion6 == String.fromCharCode(53,103,54,105,52,120,55,102,117,101,0);
   do {
      champion6 = `${parseInt(`${groupm}`) + 1}`;
      if (castingB) {
         break;
      }
   } while (castingB && (champion6.length <= 1));
   while (1.30 < groupm) {
       let scheduleq = 2;
       let backwardH = String.fromCharCode(99,95,48,95,97,99,107,0);
       let middlewarej = String.fromCharCode(121,95,52,54,95,116,114,117,101,109,111,116,105,111,110,0);
      for (let m = 0; m < 1; m++) {
          let rewindg = String.fromCharCode(102,114,101,101,112,97,100,100,114,115,95,49,95,51,56,0);
          let userg = true;
          let giftt = 4.0;
         backwardH = `${parseInt(`${giftt}`) + 1}`;
         rewindg += `${(rewindg.length - (userg ? 2 : 5))}`;
         userg = rewindg.startsWith(`${userg}`);
         giftt -= ((userg ? 4 : 2) ^ 2);
      }
         backwardH += `${middlewarej.length & backwardH.length}`;
         scheduleq &= 2;
      while (middlewarej == backwardH) {
         backwardH = `${(String.fromCharCode(95,0) == backwardH ? backwardH.length : scheduleq)}`;
         break;
      }
       let modity8 = String.fromCharCode(108,95,55,56,95,115,105,110,103,108,101,0);
      if (backwardH.includes(`${modity8.length}`)) {
          let analyticsn = String.fromCharCode(98,95,55,54,95,108,105,98,115,104,105,110,101,0);
          let hook0: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,111,110,115,95,117,95,52,54,0),false ], [String.fromCharCode(110,111,108,111,99,107,95,57,95,53,49,0),false ], [String.fromCharCode(105,95,53,95,114,101,115,105,122,101,0),false ]]);
          let skipr = 5;
         modity8 = `${skipr * middlewarej.length}`;
         analyticsn += `${analyticsn.length}`;
         hook0.set(`${analyticsn}`, (analyticsn == String.fromCharCode(65,0) ? hook0.size : analyticsn.length));
         skipr *= hook0.size;
      }
         middlewarej += `${backwardH.length}`;
      if ((modity8.length << (Math.min(5, Math.abs(scheduleq)))) == 1 || 1 == (1 << (Math.min(1, Math.abs(scheduleq))))) {
         modity8 = `${backwardH.length}`;
      }
      while (middlewarej != String.fromCharCode(120,0) || modity8.length <= 3) {
         modity8 = `${middlewarej.length}`;
         break;
      }
      groupm -= parseInt(`${configv}`);
      break;
   }
       let relateddP = 3.0;
       let q_centerE = true;
         relateddP *= parseFloat(`${1 - parseInt(`${relateddP}`)}`);
      let routerw = 9208342.0 >= relateddP;
      do {
          let auto_l0s = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,105,110,103,95,51,95,51,53,0);
          let chate = String.fromCharCode(102,100,99,116,120,95,114,95,56,51,0);
          let championk: Map<any, any> = new Map([[String.fromCharCode(109,98,109,111,100,101,95,115,95,53,52,0),329], [String.fromCharCode(100,111,108,108,97,114,95,57,95,52,50,0),924]]);
          let episodesL = 2;
          let modityW = false;
         relateddP /= Math.max(5, (parseFloat(`${(modityW ? 4 : 4)}`)));
         auto_l0s += `${championk.size * 3}`;
         chate = `${2 - championk.size}`;
         episodesL -= 2;
         modityW = championk.size <= episodesL;
         if (routerw) {
            break;
         }
      } while ((!q_centerE) && routerw);
      let indicatorH = 9733604.0 <= relateddP;
      do {
         relateddP *= parseFloat(`${parseInt(`${relateddP}`) - 1}`);
         if (indicatorH) {
            break;
         }
      } while (indicatorH && (!q_centerE));
      for (let z = 0; z < 1; z++) {
         q_centerE = 75.84 == relateddP;
      }
      let buttonX = 5640894.0 >= relateddP;
      do {
         relateddP /= Math.max((parseFloat(`${(q_centerE ? 4 : 1) - parseInt(`${relateddP}`)}`)), 2);
         if (buttonX) {
            break;
         }
      } while ((relateddP < 2.86 && (2.86 / (Math.max(1, relateddP))) < 2.61) && buttonX);
      while (q_centerE) {
         relateddP /= Math.max(parseFloat(`${parseInt(`${relateddP}`) / 1}`), 1);
         break;
      }
      champion6 = `${listj.length}`;
   for (let m = 0; m < 3; m++) {
      membery = !liveu || configv < 100.80;
   }
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = useCallback(() => {
       let a_viewS: Array<any> = [729, 717, 357];
    let middlewareJ: Array<any> = [String.fromCharCode(104,111,114,110,95,103,95,55,48,0), String.fromCharCode(103,95,50,95,109,117,109,98,97,105,0), String.fromCharCode(115,95,52,53,95,99,111,110,99,101,97,108,0)];
    let videoQ = String.fromCharCode(101,95,53,49,95,99,97,109,101,108,108,105,97,0);
    let playlistV = String.fromCharCode(120,95,55,56,95,97,115,121,110,99,104,114,111,110,111,117,115,108,121,0);
    let typingn = String.fromCharCode(100,95,51,51,95,102,114,97,110,100,0);
    let appsL = false;
    let eighteenc: Map<any, any> = new Map([[String.fromCharCode(104,95,49,57,95,115,105,109,105,108,97,114,0),730], [String.fromCharCode(114,101,116,95,110,95,50,55,0),224]]);
    let casti = 3;
    let twitterB = false;
    let grey4 = String.fromCharCode(100,95,49,53,95,100,101,99,111,100,101,114,0);
    let combinedq = 0;
    let comment5 = String.fromCharCode(120,95,57,54,95,101,115,115,105,111,110,0);
    let macaub = String.fromCharCode(114,95,57,51,95,111,115,116,114,101,97,109,119,114,97,112,112,101,114,0);
   if (2 > (a_viewS.length % 4)) {
      a_viewS = [typingn.length];
   }
   let historyJ = videoQ.length <= 8698244;
   do {
      videoQ = `${(String.fromCharCode(122,0) == typingn ? typingn.length : (appsL ? 5 : 5))}`;
      if (historyJ) {
         break;
      }
   } while ((3 <= videoQ.length) && historyJ);
   if (typingn.length == eighteenc.size) {
       let main_mL = String.fromCharCode(106,100,115,97,109,112,108,101,95,100,95,54,0);
       let moviesJ = false;
       let statsp = String.fromCharCode(99,95,49,95,100,116,111,114,0);
       let crossc = 1.0;
       let privacyQ = 1.0;
      for (let t = 0; t < 3; t++) {
         crossc += parseFloat(`${main_mL.length % 2}`);
      }
          let sina5 = 3.0;
         main_mL = `${parseInt(`${sina5}`) - 1}`;
       let customT = String.fromCharCode(104,97,108,100,99,108,117,116,95,49,95,56,0);
         moviesJ = 82.85 >= privacyQ;
      let apple0 = String.fromCharCode(98,110,53,107,112,120,55,114,0) == statsp;
      do {
         statsp = `${statsp.length}`;
         if (apple0) {
            break;
         }
      } while (apple0 && (main_mL == statsp));
          let constantsS = String.fromCharCode(111,95,54,51,0);
         statsp = `${(String.fromCharCode(104,0) == statsp ? statsp.length : parseInt(`${crossc}`))}`;
         constantsS += `${(constantsS == String.fromCharCode(106,0) ? constantsS.length : constantsS.length)}`;
          let productV = 2.0;
          let maili = String.fromCharCode(114,95,54,49,95,114,101,102,112,108,97,110,101,0);
         statsp += `${statsp.length}`;
         productV -= parseFloat(`${2 - maili.length}`);
         maili = `${parseInt(`${productV}`)}`;
          let dragl: Array<any> = [String.fromCharCode(109,115,114,108,101,95,49,95,51,56,0), String.fromCharCode(114,95,51,56,95,108,95,52,52,0)];
         statsp += `${main_mL.length}`;
         dragl.push(3 | dragl.length);
         main_mL = `${main_mL.length}`;
      let firebasej = crossc <= 9577248.0;
      do {
         crossc *= parseFloat(`${parseInt(`${crossc}`)}`);
         if (firebasej) {
            break;
         }
      } while ((!moviesJ) && firebasej);
         moviesJ = main_mL == customT;
      while (3.88 < (privacyQ + crossc)) {
         crossc /= Math.max((parseFloat(`${String.fromCharCode(57,0) == statsp ? statsp.length : customT.length}`)), 5);
         break;
      }
      while ((1 + crossc) > 5.90) {
          let editB: Array<any> = [503, 4, 439];
          let light8 = 1;
         privacyQ /= Math.max(parseInt(`${crossc}`), 5);
         editB = [editB.length];
         light8 %= Math.max(3, 3);
         break;
      }
      if (statsp.includes(`${privacyQ}`)) {
         statsp = `${customT.length}`;
      }
      if (moviesJ) {
          let themea = String.fromCharCode(118,97,108,105,100,97,116,97,98,108,101,95,106,95,54,49,0);
         statsp += `${customT.length * 1}`;
         themea += `${(String.fromCharCode(68,0) == themea ? themea.length : themea.length)}`;
      }
      eighteenc.set(`${moviesJ}`, eighteenc.size & 1);
   }
      combinedq /= Math.max(3, ((twitterB ? 3 : 2) - combinedq));
   while (!appsL) {
       let downloadedX = 2.0;
       let twitterO = String.fromCharCode(105,95,56,53,95,109,111,111,102,0);
       let baiduT = 4.0;
      for (let u = 0; u < 3; u++) {
          let targetT = 0.0;
          let paginationY = String.fromCharCode(112,105,112,95,53,95,52,52,0);
          let downloadedh = String.fromCharCode(119,95,49,95,102,105,101,108,0);
         baiduT *= parseInt(`${downloadedX}`);
         targetT /= Math.max(3, 3 << (Math.min(4, downloadedh.length)));
         paginationY = `${(downloadedh == String.fromCharCode(121,0) ? downloadedh.length : paginationY.length)}`;
      }
          let selectedO = String.fromCharCode(97,95,50,56,95,102,116,115,97,117,120,0);
         downloadedX += 1 ^ parseInt(`${baiduT}`);
         selectedO += `${selectedO.length}`;
         baiduT *= parseInt(`${downloadedX}`) - twitterO.length;
          let regeng_ = 4.0;
          let viewsc = 1.0;
          let modity5 = true;
         baiduT /= Math.max(parseInt(`${downloadedX}`), 1);
         regeng_ *= parseFloat(`${parseInt(`${viewsc}`)}`);
         viewsc *= 2;
         modity5 = viewsc <= 59.75 || !modity5;
      let event2 = 7010808.0 <= downloadedX;
      do {
          let splashd = String.fromCharCode(98,95,53,54,95,98,117,102,101,114,0);
          let statisticss = 3.0;
          let recommendationc = String.fromCharCode(109,97,112,95,49,95,50,53,0);
          let clear6 = String.fromCharCode(115,117,98,99,108,97,115,115,101,115,95,97,95,54,50,0);
         downloadedX /= Math.max(splashd.length & 2, 1);
         splashd += `${parseInt(`${statisticss}`) | recommendationc.length}`;
         statisticss *= recommendationc.length / (Math.max(2, clear6.length));
         clear6 = `${clear6.length % (Math.max(10, recommendationc.length))}`;
         if (event2) {
            break;
         }
      } while (event2 && (3 < (1 / (Math.max(10, twitterO.length))) && (twitterO.length / (Math.max(1, 10))) < 3));
          let episodeF: Array<any> = [String.fromCharCode(104,95,50,56,95,108,105,98,121,117,118,0), String.fromCharCode(98,95,57,57,95,99,97,112,97,99,105,116,121,0), String.fromCharCode(117,110,105,111,110,101,100,95,56,95,54,57,0)];
          let saveY: Array<any> = [599, 701];
         baiduT += saveY.length;
         episodeF.push(episodeF.length);
         saveY.push(episodeF.length >> (Math.min(Math.abs(1), 3)));
      for (let b = 0; b < 2; b++) {
          let sharel = String.fromCharCode(120,112,97,116,104,95,98,95,50,50,0);
         downloadedX -= parseInt(`${baiduT}`);
         sharel = `${(sharel == String.fromCharCode(71,0) ? sharel.length : sharel.length)}`;
      }
       let expired0 = 4.0;
      while (2.39 <= (baiduT - expired0) && (2.39 - expired0) <= 3.54) {
         baiduT /= Math.max(3, 4);
         break;
      }
      appsL = middlewareJ.length >= casti;
      break;
   }
   for (let w = 0; w < 3; w++) {
      twitterB = 96 == playlistV.length;
   }
       let tempF: Map<any, any> = new Map([[String.fromCharCode(111,95,49,54,95,115,104,97,114,101,103,114,111,117,112,0),String.fromCharCode(104,95,57,54,95,112,105,118,111,116,0)], [String.fromCharCode(110,95,52,52,95,116,114,97,110,115,109,105,115,115,105,111,110,0),String.fromCharCode(118,105,100,101,111,112,114,111,99,101,115,115,111,114,95,112,95,57,54,0)], [String.fromCharCode(104,105,100,99,116,95,56,95,49,57,0),String.fromCharCode(98,97,110,95,111,95,57,49,0)]]);
       let inactiveW = true;
       let filter1 = 0;
       let plasht = 4;
      let aboutB = inactiveW ? !inactiveW : inactiveW;
      do {
          let regeng3 = 0;
          let topicC = String.fromCharCode(116,101,109,112,115,95,103,95,50,48,0);
          let crownt = String.fromCharCode(102,95,52,53,95,116,114,97,110,115,112,111,114,116,115,0);
          let signinupr = 1;
          let teamP = String.fromCharCode(100,101,110,111,105,115,105,110,103,95,98,95,50,56,0);
         inactiveW = (regeng3 / (Math.max(5, teamP.length))) > 75;
         regeng3 -= (topicC == String.fromCharCode(121,0) ? crownt.length : topicC.length);
         crownt = "1";
         signinupr /= Math.max((String.fromCharCode(88,0) == topicC ? topicC.length : signinupr), 1);
         teamP = `${(String.fromCharCode(74,0) == crownt ? signinupr : crownt.length)}`;
         if (aboutB) {
            break;
         }
      } while ((!inactiveW) && aboutB);
      let matchesH = inactiveW ? !inactiveW : inactiveW;
      do {
          let point2 = 1;
          let blackJ = 0.0;
          let clockf = 3;
          let homeB = String.fromCharCode(112,95,50,49,95,99,104,107,108,105,115,116,0);
          let backU = 0;
         inactiveW = plasht > blackJ;
         point2 <<= Math.min(Math.abs(clockf), 1);
         blackJ /= Math.max(clockf & 2, 5);
         homeB = `${backU & homeB.length}`;
         backU ^= clockf >> (Math.min(Math.abs(point2), 3));
         if (matchesH) {
            break;
         }
      } while (matchesH && (inactiveW || (tempF.size * 2) < 2));
         plasht += ((inactiveW ? 3 : 2) % 2);
      let activev = inactiveW ? !inactiveW : inactiveW;
      do {
          let pressureV = String.fromCharCode(100,101,113,117,97,110,116,105,122,97,116,105,111,110,95,50,95,50,51,0);
          let thumbnailf = 5.0;
          let sporta = 1.0;
         inactiveW = thumbnailf > 84.18 || tempF.size > 15;
         pressureV = `${(pressureV == String.fromCharCode(57,0) ? pressureV.length : parseInt(`${sporta}`))}`;
         thumbnailf *= parseInt(`${sporta}`);
         if (activev) {
            break;
         }
      } while (activev && (3 >= (plasht << (Math.min(Math.abs(2), 5)))));
       let unselected7: Array<any> = [657, 7];
       let referrerU: Array<any> = [652, 987, 713];
      a_viewS.push(playlistV.length);
       let activeZ = 4.0;
          let bottomK: Map<any, any> = new Map([[String.fromCharCode(98,102,115,116,109,95,102,95,57,50,0),339], [String.fromCharCode(118,95,49,48,95,104,111,115,116,115,0),208]]);
          let whatsapp8 = 1;
          let champione = String.fromCharCode(114,101,115,105,103,110,95,121,95,53,57,0);
         activeZ *= (parseFloat(`${String.fromCharCode(69,0) == champione ? champione.length : whatsapp8}`));
         bottomK.set(`${bottomK.size}`, 2);
         whatsapp8 *= 1;
      for (let c = 0; c < 1; c++) {
         activeZ *= parseFloat(`${2}`);
      }
         activeZ *= parseFloat(`${parseInt(`${activeZ}`)}`);
      a_viewS.push(1);
      appsL = videoQ.length >= eighteenc.size;

    

       let userG: Array<any> = [70, 302];
       let contextz = String.fromCharCode(100,95,50,56,95,99,111,108,108,105,100,105,110,103,0);
         contextz = `${userG.length / (Math.max(7, contextz.length))}`;
      while (5 == (contextz.length >> (Math.min(Math.abs(3), 5))) && (userG.length >> (Math.min(Math.abs(3), 2))) == 5) {
         contextz += `${userG.length / (Math.max(10, contextz.length))}`;
         break;
      }
       let tempN: Map<any, any> = new Map([[String.fromCharCode(98,95,49,56,95,105,115,112,111,115,97,98,108,101,0),706], [String.fromCharCode(122,95,56,48,95,114,101,112,108,97,121,0),168], [String.fromCharCode(106,95,57,50,95,110,115,101,103,109,101,110,116,115,0),184]]);
         contextz = `${tempN.size / (Math.max(5, contextz.length))}`;
      while (userG.length < 2) {
         userG.push(userG.length ^ contextz.length);
         break;
      }
         tempN.set(contextz, 2);
      middlewareJ = [combinedq];
   while (appsL) {
       let watch4 = String.fromCharCode(115,95,51,49,95,115,105,110,113,98,0);
       let side9: Map<any, any> = new Map([[String.fromCharCode(104,95,57,53,0),658], [String.fromCharCode(106,117,115,116,95,103,95,57,55,0),403], [String.fromCharCode(114,101,97,115,115,101,109,98,108,121,95,55,95,49,51,0),870]]);
       let dropdownz = String.fromCharCode(97,95,55,57,95,101,112,122,115,0);
       let viewern = String.fromCharCode(99,111,112,105,101,100,95,119,95,49,52,0);
       let volume8 = String.fromCharCode(111,95,54,54,95,113,105,110,100,101,120,0);
         side9 = new Map([[watch4, 2 + watch4.length]]);
      for (let h = 0; h < 2; h++) {
         volume8 = `${dropdownz.length}`;
      }
         side9 = new Map([[volume8, 2]]);
         side9.set(viewern, viewern.length & volume8.length);
      for (let r = 0; r < 3; r++) {
          let updatesQ: Map<any, any> = new Map([[String.fromCharCode(114,95,57,49,95,117,112,108,111,97,100,115,0),226], [String.fromCharCode(111,95,51,49,95,112,97,108,98,97,114,115,0),864]]);
          let privacy_: Array<any> = [String.fromCharCode(112,97,116,104,109,116,117,95,104,95,53,0), String.fromCharCode(109,95,52,55,95,99,104,101,99,107,105,110,0)];
          let default_l1O = 1.0;
          let dialog6 = true;
         watch4 += "2";
         updatesQ.set(`${privacy_.length}`, privacy_.length);
         default_l1O /= Math.max(parseFloat(`${3}`), 2);
         dialog6 = updatesQ.size >= 36;
      }
          let description_ix = String.fromCharCode(106,95,50,49,95,101,120,110,111,100,101,0);
          let matchN = 5;
         viewern += `${matchN}`;
         description_ix += `${description_ix.length}`;
         matchN /= Math.max(description_ix.length | 2, 5);
          let submitk: Map<any, any> = new Map([[String.fromCharCode(105,100,102,97,95,50,95,53,51,0),String.fromCharCode(120,95,57,50,95,115,112,101,99,115,0)], [String.fromCharCode(112,95,55,57,95,112,108,117,115,0),String.fromCharCode(117,95,50,53,95,100,105,115,97,98,108,101,100,0)]]);
         viewern += `${viewern.length}`;
         submitk = new Map([[`${submitk.size}`, 2 | submitk.size]]);
      for (let q = 0; q < 1; q++) {
          let footballE = String.fromCharCode(118,95,53,53,95,108,104,97,115,104,0);
          let thumbnailB = String.fromCharCode(115,95,53,48,95,114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,0);
         volume8 += `${viewern.length}`;
         footballE += `${thumbnailB.length}`;
         thumbnailB = `${thumbnailB.length}`;
      }
          let watchO: Array<any> = [639, 170, 534];
          let configP = String.fromCharCode(118,112,109,116,95,111,95,52,55,0);
          let routerw = 5.0;
         viewern += `${parseInt(`${routerw}`) >> (Math.min(viewern.length, 4))}`;
         watchO.push(configP.length);
         configP += `${configP.length | 3}`;
         routerw += watchO.length << (Math.min(configP.length, 3));
      if ((side9.size ^ 2) < 1) {
         side9.set(`${volume8}`, 3 * volume8.length);
      }
       let z_titleW = String.fromCharCode(111,95,56,51,95,113,117,97,110,116,105,122,101,114,115,0);
      a_viewS.push(watch4.length | casti);
      break;
   }
      combinedq -= videoQ.length >> (Math.min(Math.abs(1), 1));
   let helper2 = 5937525 <= casti;
   do {
      casti -= 1;
      if (helper2) {
         break;
      }
   } while ((combinedq < casti) && helper2);
   if (!appsL) {
      appsL = playlistV == typingn;
   }
       let downloaderX = true;
       let castS = String.fromCharCode(117,110,112,117,98,108,105,115,104,95,99,95,49,51,0);
       let middleC = 0;
      if (5 < middleC && (5 >> (Math.min(3, Math.abs(middleC)))) < 5) {
          let options6 = false;
         downloaderX = 53 >= castS.length;
         options6 = !options6 && options6;
      }
      for (let t = 0; t < 3; t++) {
         castS = `${3 & middleC}`;
      }
         downloaderX = (44 <= ((!downloaderX ? castS.length : 44) >> (Math.min(castS.length, 3))));
          let playlistD = String.fromCharCode(113,95,50,48,95,117,110,115,116,97,107,101,0);
         middleC ^= 3;
         playlistD = `${playlistD.length >> (Math.min(playlistD.length, 5))}`;
      if ((2 ^ middleC) < 1 && (castS.length ^ 2) < 4) {
         middleC |= 1;
      }
      let targetq = String.fromCharCode(56,113,117,97,120,0) == castS;
      do {
          let whiteJ: Array<any> = [347, 742, 62];
          let combineV = String.fromCharCode(119,105,110,100,105,110,103,95,54,95,50,50,0);
          let reducerb = String.fromCharCode(122,95,51,54,95,101,116,104,114,101,97,100,105,110,103,0);
         castS = `${whiteJ.length / 1}`;
         whiteJ = [reducerb.length];
         combineV = `${combineV.length}`;
         reducerb = `${2 - reducerb.length}`;
         if (targetq) {
            break;
         }
      } while (targetq && (castS.endsWith(`${downloaderX}`)));
      while (!castS.includes(`${downloaderX}`)) {
         castS = `${(castS == String.fromCharCode(104,0) ? castS.length : middleC)}`;
         break;
      }
          let areaA: Array<any> = [901, 492];
          let groupt = 0;
          let collectionk = String.fromCharCode(100,121,110,108,105,110,107,95,109,95,56,51,0);
         castS = "3";
         areaA.push(1 ^ collectionk.length);
         groupt <<= Math.min(5, Math.abs(2));
         collectionk += `${(collectionk == String.fromCharCode(67,0) ? collectionk.length : groupt)}`;
         castS += `${((downloaderX ? 3 : 3))}`;
      typingn += `${eighteenc.size >> (Math.min(Math.abs(3), 4))}`;
   let weiboT = twitterB ? !twitterB : twitterB;
   do {
      twitterB = videoQ == String.fromCharCode(119,0);
      if (weiboT) {
         break;
      }
   } while (weiboT && (casti == 1));
   for (let o = 0; o < 1; o++) {
      eighteenc.set(videoQ, videoQ.length);
   }
   while (middlewareJ.includes(a_viewS.length)) {
      a_viewS = [playlistV.length];
      break;
   }
    

   let clubV = 8687791 >= casti;
   do {
      casti >>= Math.min(Math.abs(((twitterB ? 1 : 1) | 1)), 1);
      if (clubV) {
         break;
      }
   } while ((5 == casti || (5 | casti) == 5) && clubV);
      videoQ += `${(typingn == String.fromCharCode(111,0) ? typingn.length : (appsL ? 4 : 3))}`;
   while ((middlewareJ.length * 3) > 5 || (3 * middlewareJ.length) > 1) {
      grey4 = `${typingn.length >> (Math.min(3, middlewareJ.length))}`;
      break;
   }
       let renewF = true;
      while (!renewF) {
         renewF = !renewF;
         break;
      }
         renewF = (!renewF ? renewF : !renewF);
      let applem = renewF ? !renewF : renewF;
      do {
          let sourcem: Map<any, any> = new Map([[String.fromCharCode(114,101,110,101,119,97,98,108,101,95,112,95,53,55,0),813], [String.fromCharCode(101,95,49,55,95,97,100,109,105,110,0),876]]);
         renewF = !renewF;
         sourcem.set(`${sourcem.size}`, 1);
         if (applem) {
            break;
         }
      } while ((renewF || !renewF) && applem);
      a_viewS = [grey4.length];
      videoQ += "1";
      appsL = (combinedq * videoQ.length) == 3;
   if (playlistV.endsWith(`${combinedq}`)) {
       let volumeF = false;
       let bufferw = 4;
      while (!volumeF || (2 % (Math.max(5, bufferw))) >= 2) {
         bufferw |= bufferw;
         break;
      }
         bufferw %= Math.max(2, 1);
      if (5 < (bufferw % 5) || 5 < bufferw) {
         bufferw += bufferw | 1;
      }
          let privilegen: Map<any, any> = new Map([[String.fromCharCode(121,117,118,112,97,99,107,101,100,95,107,95,55,54,0),83], [String.fromCharCode(99,95,56,48,95,105,110,115,101,110,115,105,116,105,118,101,0),73], [String.fromCharCode(99,97,118,108,99,95,117,95,49,50,0),774]]);
         bufferw /= Math.max(2, privilegen.size / (Math.max(10, bufferw)));
      if (4 > bufferw) {
         bufferw += 1;
      }
      if ((5 >> (Math.min(1, Math.abs(bufferw)))) <= 5) {
         bufferw |= (bufferw * (volumeF ? 3 : 3));
      }
      combinedq <<= Math.min(Math.abs((bufferw - (appsL ? 5 : 5))), 4);
   }
   while (combinedq < 1) {
      middlewareJ.push(((appsL ? 5 : 2) & videoQ.length));
      break;
   }
       let detailN = true;
       let helper2J = true;
          let commonH = 5;
          let orangeR = String.fromCharCode(114,95,53,56,95,104,100,110,111,100,101,0);
         detailN = orangeR.length < 82;
         commonH <<= Math.min(1, Math.abs(2 - commonH));
         orangeR += `${commonH & 3}`;
       let brightnesst = String.fromCharCode(108,117,116,121,117,118,95,101,95,51,0);
      videoQ += "3";
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
    umb_center_carousel.watchAnytimeAdsViewAnalytics({
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
       let recommendation5 = 5.0;
    let indicatore: Array<any> = [339, 522, 998];
    let y_viewW = true;
    let lang7 = String.fromCharCode(100,95,55,48,95,116,104,114,111,119,0);
    let forwardj: Array<any> = [String.fromCharCode(111,95,53,49,95,118,99,100,115,112,0), String.fromCharCode(99,114,117,110,95,107,95,57,57,0), String.fromCharCode(105,95,51,56,95,102,108,105,103,104,116,0)];
    let chartl = 5.0;
    let networkX = String.fromCharCode(99,111,118,101,114,97,103,101,95,56,95,48,0);
    let catalogZ = 2;
    let telegramW = 1.0;
    let selected8 = 3.0;
    let favicon0 = 3.0;
    let sheet7 = String.fromCharCode(118,95,50,55,95,105,115,112,111,114,116,0);
    let backL = 1.0;
    let blacklist9 = true;
   for (let g = 0; g < 3; g++) {
      y_viewW = forwardj.length < 9;
   }
       let drag7 = 4.0;
       let register_t6a = true;
       let downloadedf = 5;
         downloadedf |= ((register_t6a ? 4 : 3) / (Math.max(downloadedf, 4)));
         downloadedf >>= Math.min(2, Math.abs(2 | downloadedf));
      if (5 >= (4 - downloadedf) && 4 >= downloadedf) {
         downloadedf /= Math.max(5, 3 - parseInt(`${drag7}`));
      }
      while ((downloadedf / (Math.max(4, 7))) > 1 && register_t6a) {
         downloadedf -= ((register_t6a ? 5 : 3) << (Math.min(Math.abs(parseInt(`${drag7}`)), 1)));
         break;
      }
      for (let u = 0; u < 2; u++) {
         downloadedf <<= Math.min(5, Math.abs(downloadedf + parseInt(`${drag7}`)));
      }
         drag7 /= Math.max(parseFloat(`${parseInt(`${drag7}`)}`), 1);
       let connectionY = String.fromCharCode(116,104,101,114,101,117,109,95,108,95,53,56,0);
       let analyticsA = String.fromCharCode(117,95,51,55,95,103,101,111,116,97,103,115,0);
          let subsK = String.fromCharCode(117,114,112,111,115,101,95,121,95,49,51,0);
         register_t6a = connectionY == analyticsA;
         subsK = `${subsK.length | 2}`;
      for (let l = 0; l < 3; l++) {
          let navigationa = String.fromCharCode(97,95,56,55,95,102,111,115,115,105,108,0);
          let floaterc = String.fromCharCode(115,104,105,109,95,111,95,54,50,0);
          let screena = String.fromCharCode(117,100,116,97,95,114,95,54,50,0);
         downloadedf >>= Math.min(Math.abs((String.fromCharCode(112,0) == screena ? screena.length : navigationa.length)), 2);
         navigationa += `${floaterc.length + floaterc.length}`;
      }
      indicatore = [lang7.length ^ 1];
   if (2.34 <= (favicon0 + 4.76) || (sheet7.length + favicon0) <= 4.76) {
      sheet7 += `${parseInt(`${selected8}`) & parseInt(`${favicon0}`)}`;
   }

      if ((isPause === true || isBuffering === true) && currentDuration < 1) {

      forwardj = [lang7.length];
   if (sheet7.endsWith(`${chartl}`)) {
      sheet7 = "2";
   }
   let controlsJ = 7506821.0 <= selected8;
   do {
      selected8 -= parseFloat(`${2 ^ parseInt(`${telegramW}`)}`);
      if (controlsJ) {
         break;
      }
   } while ((5.54 <= (5.97 + selected8)) && controlsJ);
        

   while (favicon0 < 2.43) {
      forwardj.push(parseInt(`${recommendation5}`));
      break;
   }
      y_viewW = String.fromCharCode(74,0) == lang7;
   while (5.28 > (2.69 * chartl)) {
      y_viewW = (networkX.length / (Math.max(3, favicon0))) > 86.97;
      break;
   }
        

      y_viewW = networkX.length > 3;
      favicon0 += parseInt(`${selected8}`) - 2;
   while ((favicon0 + catalogZ) > 5.22 && (catalogZ ^ 1) > 2) {
      catalogZ |= indicatore.length;
      break;
   }
        

   for (let r = 0; r < 1; r++) {
       let assistW = 4;
      for (let r = 0; r < 3; r++) {
         assistW -= assistW & assistW;
      }
         assistW *= assistW;
         assistW ^= assistW;
      telegramW -= catalogZ >> (Math.min(Math.abs(2), 2));
   }
      y_viewW = networkX == String.fromCharCode(108,0);
      lang7 += `${parseInt(`${selected8}`) | 2}`;

        const fileLocation =
          RNFetchBlob.fs.dirs.DocumentDir +
          `/videocache/${currentVod.mini_video_id}.mp4`;

   for (let x = 0; x < 3; x++) {
       let a_countD = String.fromCharCode(113,95,55,52,95,114,101,115,111,108,118,101,100,0);
       let pointc = 0.0;
       let start = true;
       let middlem = String.fromCharCode(97,110,105,109,97,116,111,114,115,95,108,95,57,48,0);
         pointc -= (parseFloat(`${(start ? 5 : 4)}`));
          let scheduleA = 0;
          let editc = 3;
          let l_count3 = String.fromCharCode(99,95,57,57,95,111,109,112,114,101,115,115,111,114,0);
         middlem += `${scheduleA}`;
         scheduleA >>= Math.min(5, Math.abs(1));
         editc /= Math.max(4, l_count3.length);
         l_count3 = `${(l_count3 == String.fromCharCode(52,0) ? l_count3.length : editc)}`;
      while (2.88 > pointc) {
         a_countD += `${(1 - (start ? 2 : 3))}`;
         break;
      }
      let buttonq = pointc >= 9490628.0;
      do {
         pointc -= (parseFloat(`${(start ? 3 : 2)}`));
         if (buttonq) {
            break;
         }
      } while (((pointc + 1.36) == 5.95) && buttonq);
         a_countD += `${((start ? 3 : 4))}`;
      if (pointc <= 3.69) {
          let favoritey = 2.0;
         pointc += (parseFloat(`${parseInt(`${pointc}`) << (Math.min(5, Math.abs((start ? 4 : 3))))}`));
         favoritey /= Math.max(parseInt(`${favoritey}`) / (Math.max(2, parseInt(`${favoritey}`))), 5);
      }
      if (middlem.length >= 1) {
         a_countD += `${2 * parseInt(`${pointc}`)}`;
      }
      if (3 > a_countD.length) {
         a_countD += `${((start ? 1 : 4))}`;
      }
          let alertM = 3.0;
          let bottomI = String.fromCharCode(118,95,56,95,99,111,100,101,98,108,111,99,107,115,0);
         a_countD = `${1 ^ parseInt(`${alertM}`)}`;
         alertM += bottomI.length | 2;
         bottomI = `${(String.fromCharCode(99,0) == bottomI ? bottomI.length : bottomI.length)}`;
       let bingJ = String.fromCharCode(116,104,111,117,103,104,95,106,95,57,48,0);
          let recommendationC = 0.0;
          let whatsappn = String.fromCharCode(106,100,109,97,105,110,99,116,95,121,95,48,0);
          let productN = String.fromCharCode(103,95,56,52,95,103,111,100,101,112,115,0);
         pointc += parseFloat(`${parseInt(`${pointc}`)}`);
         recommendationC -= parseInt(`${recommendationC}`) / (Math.max(10, productN.length));
         whatsappn = `${parseInt(`${recommendationC}`) + whatsappn.length}`;
         productN += "1";
      if ((parseInt(`${pointc}`) / (Math.max(9, bingJ.length))) > 2) {
         bingJ += `${(String.fromCharCode(70,0) == middlem ? bingJ.length : middlem.length)}`;
      }
      telegramW *= 3;
   }
   while ((catalogZ + recommendation5) > 5.88) {
      recommendation5 -= ((y_viewW ? 5 : 1) + parseInt(`${favicon0}`));
      break;
   }
   let guider = 6453998.0 <= recommendation5;
   do {
      recommendation5 += parseInt(`${favicon0}`) >> (Math.min(Math.abs(parseInt(`${selected8}`)), 1));
      if (guider) {
         break;
      }
   } while (guider && ((4.67 - recommendation5) <= 5.26 && 4.67 <= (recommendation5 - forwardj.length)));

        const fileExist = await RNFetchBlob.fs.exists(fileLocation);

   while (chartl >= 4.62) {
      chartl += parseFloat(`${parseInt(`${favicon0}`)}`);
      break;
   }
   for (let d = 0; d < 2; d++) {
      catalogZ |= 3;
   }
   while (1 > (catalogZ << (Math.min(Math.abs(5), 2)))) {
      catalogZ /= Math.max(3, 1);
      break;
   }

        if (fileExist) {

      y_viewW = 37 < networkX.length;
   let statisticss = 6634315 <= sheet7.length;
   do {
      sheet7 += `${3 + parseInt(`${telegramW}`)}`;
      if (statisticss) {
         break;
      }
   } while ((sheet7.length == 2) && statisticss);
   while ((catalogZ | 4) >= 4 && !y_viewW) {
       let twitteru = 4.0;
       let baidum = 3.0;
       let f_center_ = String.fromCharCode(114,105,110,103,116,111,110,101,115,95,118,95,57,48,0);
       let appst = String.fromCharCode(99,97,112,97,98,105,108,105,116,121,95,97,95,53,49,0);
       let gesture7: Map<any, any> = new Map([[String.fromCharCode(102,95,55,55,95,115,99,104,101,100,0),530], [String.fromCharCode(104,105,103,104,115,95,104,95,51,56,0),18]]);
       let placementN: Array<any> = [303, 771];
       let crossV: Array<any> = [731, 898, 357];
         baidum *= parseFloat(`${appst.length * 2}`);
         crossV = [placementN.length];
          let typesz = 1.0;
         crossV = [appst.length];
         typesz -= parseInt(`${typesz}`) | 2;
      for (let r = 0; r < 3; r++) {
          let logoutZ = String.fromCharCode(97,103,101,110,116,115,95,52,95,52,53,0);
         f_center_ = `${3 - f_center_.length}`;
         logoutZ = `${logoutZ.length / (Math.max(logoutZ.length, 1))}`;
      }
          let sourceR = 2.0;
         appst += `${appst.length | 1}`;
         sourceR *= parseFloat(`${parseInt(`${sourceR}`)}`);
         f_center_ += "2";
       let assisty: Array<any> = [982, 959, 31];
         crossV = [gesture7.size | 1];
       let minimize5 = String.fromCharCode(102,111,114,109,97,116,116,101,100,95,50,95,57,49,0);
         twitteru += parseFloat(`${parseInt(`${baidum}`) / (Math.max(parseInt(`${twitteru}`), 5))}`);
          let string3 = 2;
          let backgroundy = String.fromCharCode(121,95,56,48,95,115,112,97,99,101,0);
         minimize5 = `${backgroundy.length}`;
         string3 += string3 / 2;
         backgroundy = `${string3 / (Math.max(3, 10))}`;
      let castV = 6800860 >= placementN.length;
      do {
         placementN = [1];
         if (castV) {
            break;
         }
      } while (castV && (gesture7.size >= placementN.length));
          let unselectedX: Map<any, any> = new Map([[String.fromCharCode(115,95,49,55,95,118,109,115,108,0),616], [String.fromCharCode(118,95,51,53,95,104,115,118,97,0),337], [String.fromCharCode(111,95,55,48,95,102,112,115,0),12]]);
         f_center_ += `${unselectedX.size}`;
         twitteru += parseFloat(`${2 - f_center_.length}`);
      y_viewW = twitteru >= favicon0;
      break;
   }
          const fileIsEmpty =
            (await RNFetchBlob.fs.stat(fileLocation)).size == 0;

       let helperU = 4.0;
       let stationv = 3;
      let auto_qkF = 6291741 <= stationv;
      do {
         stationv |= stationv;
         if (auto_qkF) {
            break;
         }
      } while (((4 - stationv) == 2 || (helperU / (Math.max(3.60, 5))) == 1.62) && auto_qkF);
         helperU *= parseFloat(`${2 - stationv}`);
      let configureR = helperU <= 5907696.0;
      do {
         helperU *= parseFloat(`${stationv}`);
         if (configureR) {
            break;
         }
      } while (configureR && (helperU < stationv));
       let feedbackq = String.fromCharCode(120,95,53,56,95,112,97,121,108,111,97,100,115,0);
       let otherz = String.fromCharCode(121,95,51,50,95,112,111,114,116,101,114,0);
      for (let n = 0; n < 2; n++) {
          let inviteG = 2.0;
          let const_vvy = false;
          let sellr = String.fromCharCode(110,111,100,101,115,95,118,95,49,50,0);
          let danger6: Array<any> = [520, 636];
         stationv /= Math.max(feedbackq.length % 2, 5);
         inviteG += sellr.length << (Math.min(Math.abs(2), 2));
         const_vvy = danger6.length == 5;
         sellr = `${(danger6.length & (const_vvy ? 2 : 1))}`;
      }
          let paginationw = true;
          let anytimeq = 3.0;
          let sportss = 0.0;
         helperU /= Math.max(1, (parseFloat(`${otherz == String.fromCharCode(49,0) ? otherz.length : parseInt(`${helperU}`)}`)));
         paginationw = 10.94 >= (anytimeq + sportss);
         anytimeq *= parseFloat(`${1 * parseInt(`${anytimeq}`)}`);
         sportss += parseFloat(`${3 - parseInt(`${anytimeq}`)}`);
      recommendation5 += stationv;
   for (let r = 0; r < 1; r++) {
      lang7 = `${networkX.length & 1}`;
   }
   for (let o = 0; o < 1; o++) {
      catalogZ -= catalogZ + parseInt(`${favicon0}`);
   }
          

       let sourceA = String.fromCharCode(111,95,54,50,95,100,105,115,115,111,108,118,101,0);
       let countryX = 2;
       let hejih: Map<any, any> = new Map([[String.fromCharCode(118,112,111,105,110,116,95,53,95,55,52,0),672], [String.fromCharCode(112,117,98,101,120,112,95,99,95,49,54,0),187]]);
         countryX <<= Math.min(Math.abs(countryX), 5);
       let notificationX: Map<any, any> = new Map([[String.fromCharCode(117,110,101,115,99,97,112,105,110,103,95,120,95,51,53,0),913], [String.fromCharCode(121,95,56,53,95,103,101,116,0),396]]);
      for (let w = 0; w < 2; w++) {
         hejih = new Map([[`${hejih.size}`, 3]]);
      }
      let score5 = 9184871 >= hejih.size;
      do {
          let leftI = String.fromCharCode(111,95,48,95,118,97,108,105,100,97,116,101,0);
          let m_lockQ = true;
          let desc8: Map<any, any> = new Map([[String.fromCharCode(116,101,114,109,105,110,97,116,105,110,103,95,110,95,51,53,0),56], [String.fromCharCode(112,114,101,100,120,108,95,105,95,51,50,0),587]]);
          let modalj: Array<any> = [String.fromCharCode(97,95,56,53,95,97,118,105,100,0), String.fromCharCode(102,109,116,99,111,110,118,101,114,116,95,100,95,54,51,0), String.fromCharCode(105,111,101,114,114,95,99,95,55,57,0)];
          let pause7 = String.fromCharCode(111,95,57,55,95,114,98,115,112,0);
         hejih.set(leftI, 2);
         leftI = `${desc8.size}`;
         m_lockQ = pause7.length < 30 && modalj.length < 30;
         desc8.set(pause7, ((m_lockQ ? 3 : 2) | 1));
         modalj.push(2);
         if (score5) {
            break;
         }
      } while (score5 && (notificationX.size < hejih.size));
         hejih = new Map([[`${notificationX.size}`, 3]]);
      for (let g = 0; g < 1; g++) {
         hejih = new Map([[`${hejih.size}`, countryX]]);
      }
      if (1 > (notificationX.size / (Math.max(3, 8)))) {
         sourceA += `${2 - notificationX.size}`;
      }
          let dropdown_: Array<any> = [84, 626, 889];
         countryX *= dropdown_.length;
         sourceA = `${countryX >> (Math.min(Math.abs(notificationX.size), 5))}`;
      indicatore.push(2);
   if ((recommendation5 + selected8) > 1.25) {
      recommendation5 -= 1 % (Math.max(parseInt(`${telegramW}`), 4));
   }
   if (favicon0 == selected8) {
      favicon0 *= sheet7.length * catalogZ;
   }
          if (!fileIsEmpty) {

       let sinaQ = 2;
          let profileK = 4.0;
          let transferj = String.fromCharCode(99,111,109,112,114,101,115,115,111,114,95,118,95,51,0);
          let canvasT = 5.0;
         sinaQ ^= parseInt(`${profileK}`) * 2;
         profileK /= Math.max(4, parseInt(`${canvasT}`) + 1);
         transferj += `${transferj.length}`;
         canvasT /= Math.max(4, 1 * parseInt(`${canvasT}`));
          let minimizeL = String.fromCharCode(103,95,53,50,95,99,97,114,0);
          let spec6: Array<any> = [String.fromCharCode(118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,95,48,95,57,49,0), String.fromCharCode(115,95,54,49,95,101,120,97,109,105,110,101,0), String.fromCharCode(99,108,111,115,101,95,108,95,49,54,0)];
         sinaQ <<= Math.min(Math.abs((minimizeL == String.fromCharCode(121,0) ? sinaQ : minimizeL.length)), 5);
         spec6.push(1 << (Math.min(1, spec6.length)));
         sinaQ *= sinaQ;
      recommendation5 -= indicatore.length | 2;
   if (5 == sheet7.length) {
      sheet7 = "1";
   }
   for (let n = 0; n < 2; n++) {
      networkX = `${lang7.length}`;
   }
            setMiniVodUrl(`${fileLocation}`);
          } else {

       let statsf = true;
         statsf = !statsf;
         statsf = !statsf && statsf;
      for (let i = 0; i < 1; i++) {
         statsf = statsf && !statsf;
      }
      forwardj = [(1 ^ (statsf ? 1 : 1))];
   let short_zQ = indicatore.length >= 6484127;
   do {
      indicatore = [1];
      if (short_zQ) {
         break;
      }
   } while ((1 > (2 / (Math.max(5, indicatore.length)))) && short_zQ);
   if ((indicatore.length % 5) <= 2 && 1 <= (indicatore.length % (Math.max(5, 4)))) {
      indicatore.push(parseInt(`${selected8}`) / 3);
   }
            

      y_viewW = catalogZ > 82;
   while (3 < forwardj.length && 3 < (3 % (Math.max(7, forwardj.length)))) {
      y_viewW = String.fromCharCode(78,0) == networkX;
      break;
   }
   for (let e = 0; e < 2; e++) {
      selected8 += parseFloat(`${parseInt(`${telegramW}`) >> (Math.min(1, Math.abs(3)))}`);
   }
            setMiniVodUrl(currentVod.ads_pic);
          }
        } else {

      recommendation5 += 1 - forwardj.length;
       let nalyticsy = 1.0;
      while (5.68 > (nalyticsy / 2.61) || 5.34 > (nalyticsy / 2.61)) {
          let ying4 = 3;
          let overlayq = 0;
          let reducerz = String.fromCharCode(113,95,55,50,95,112,104,111,110,101,0);
          let crownB = false;
          let frame_lQ = 5.0;
         nalyticsy *= overlayq | 3;
         ying4 %= Math.max(5, 1);
         overlayq ^= (reducerz == String.fromCharCode(88,0) ? reducerz.length : parseInt(`${frame_lQ}`));
         crownB = crownB || frame_lQ < 18.27;
         break;
      }
         nalyticsy *= 1;
      for (let x = 0; x < 3; x++) {
         nalyticsy -= parseInt(`${nalyticsy}`);
      }
      forwardj.push(1);
       let resend2 = String.fromCharCode(103,95,53,55,95,114,101,99,111,110,105,110,116,114,97,120,0);
       let resultq = 0.0;
       let private_rR = false;
      if ((resultq - 3.74) == 5.41) {
          let eighteenG = String.fromCharCode(112,111,110,103,95,102,95,56,56,0);
          let zhubo0 = String.fromCharCode(102,108,97,115,104,115,118,95,110,95,55,52,0);
          let fieldm = 3.0;
          let volumeC = String.fromCharCode(119,114,97,112,112,101,114,95,52,95,56,0);
          let statsi = 1.0;
         resultq *= 1 + zhubo0.length;
         eighteenG += `${eighteenG.length << (Math.min(Math.abs(3), 3))}`;
         zhubo0 = `${parseInt(`${statsi}`)}`;
         fieldm -= parseFloat(`${eighteenG.length << (Math.min(1, Math.abs(parseInt(`${fieldm}`))))}`);
         volumeC += `${3 | volumeC.length}`;
      }
         resultq += 1;
         resend2 = `${(resend2 == String.fromCharCode(77,0) ? (private_rR ? 1 : 1) : resend2.length)}`;
         resultq /= Math.max(3, (resend2.length >> (Math.min(2, Math.abs((private_rR ? 1 : 5))))));
         resend2 += `${parseInt(`${resultq}`) % 1}`;
         private_rR = resend2.length >= 29;
      let moduleY = resultq >= 6374494.0;
      do {
         resultq /= Math.max(2, ((private_rR ? 5 : 4)));
         if (moduleY) {
            break;
         }
      } while (moduleY && (5 >= (resend2.length - parseInt(`${resultq}`)) && 4.95 >= (resultq - 4.98)));
          let launchn: Map<any, any> = new Map([[String.fromCharCode(100,101,97,100,108,105,110,101,95,110,95,49,55,0),String.fromCharCode(108,105,98,119,101,98,112,101,110,99,95,120,95,54,48,0)], [String.fromCharCode(107,95,57,95,99,97,110,99,101,108,108,97,116,105,111,110,0),String.fromCharCode(111,119,110,108,111,97,100,95,55,95,56,49,0)], [String.fromCharCode(103,108,121,112,104,95,57,95,51,0),String.fromCharCode(98,108,111,99,107,105,101,95,106,95,50,0)]]);
         resultq *= (String.fromCharCode(120,0) == resend2 ? resend2.length : parseInt(`${resultq}`));
         launchn = new Map([[`${launchn.size}`, launchn.size]]);
         resultq /= Math.max(((private_rR ? 3 : 5) - resend2.length), 4);
      chartl /= Math.max(parseFloat(`${parseInt(`${chartl}`) & 2}`), 1);
          

       let moduleB = 2.0;
         moduleB *= parseInt(`${moduleB}`);
      if (moduleB <= 2.53) {
         moduleB -= parseInt(`${moduleB}`) + 3;
      }
         moduleB -= parseInt(`${moduleB}`);
      blacklist9 = 56 == catalogZ;
   let viewer1 = chartl <= 6123887.0;
   do {
       let configureu = String.fromCharCode(109,111,118,105,110,103,95,109,95,53,53,0);
       let preview7 = 4.0;
       let activeb = 2.0;
      for (let x = 0; x < 1; x++) {
         activeb *= parseFloat(`${configureu.length / 1}`);
      }
      for (let m = 0; m < 2; m++) {
          let styleX = 0;
         activeb *= parseFloat(`${parseInt(`${preview7}`)}`);
         styleX *= styleX;
      }
      chartl += parseFloat(`${catalogZ}`);
      if (viewer1) {
         break;
      }
   } while (viewer1 && (networkX.endsWith(`${chartl}`)));
      chartl *= parseFloat(`${3 / (Math.max(8, forwardj.length))}`);
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
       let interstitialA = 1.0;
    let main_p2 = String.fromCharCode(101,95,56,49,95,109,101,97,110,105,110,103,102,117,108,0);
    let historyM = 0.0;
    let cornerq = 1;
    let eactH: Array<any> = [811, 946];
    let frame_k9J = String.fromCharCode(110,101,119,108,105,110,101,115,95,122,95,52,55,0);
    let yingO = String.fromCharCode(121,95,50,53,95,103,101,116,116,105,110,103,0);
    let leaguew: Array<any> = [String.fromCharCode(106,97,105,108,98,114,101,97,107,95,103,95,49,52,0), String.fromCharCode(113,95,50,49,95,102,116,118,108,105,110,107,0)];
    let right2 = 1.0;
    let half2 = String.fromCharCode(112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,95,110,95,53,52,0);
    let episodesr = 1.0;
    let anythinkE = String.fromCharCode(118,115,114,99,95,115,95,53,54,0);
    let single5 = String.fromCharCode(104,95,56,49,95,117,110,112,97,99,107,0);
    let tooltipse = 2.0;
    let condensed1 = 2.0;
    let nterstitial0 = String.fromCharCode(114,95,55,49,95,116,114,117,110,99,112,97,115,115,101,115,0);
    let formc: Map<any, any> = new Map([[String.fromCharCode(121,95,56,48,95,115,116,97,114,114,101,100,0),String.fromCharCode(98,95,51,49,95,117,110,105,116,0)], [String.fromCharCode(112,97,115,116,101,100,95,50,95,57,54,0),String.fromCharCode(115,99,97,110,105,110,100,101,120,95,120,95,56,57,0)], [String.fromCharCode(120,95,57,50,95,116,105,108,116,0),String.fromCharCode(99,111,108,108,97,116,105,111,110,95,112,95,50,52,0)]]);
    let gemfileo = 5.0;
      episodesr /= Math.max(5, parseFloat(`${parseInt(`${right2}`)}`));
   if (frame_k9J == String.fromCharCode(88,0)) {
      anythinkE += `${parseInt(`${interstitialA}`) >> (Math.min(1, Math.abs(1)))}`;
   }
   let topicz = historyM <= 9136261.0;
   do {
       let buttoni = false;
       let transferr = String.fromCharCode(98,95,53,51,95,117,110,97,118,97,105,108,97,98,101,0);
         transferr = `${((buttoni ? 4 : 5) % (Math.max(transferr.length, 7)))}`;
         transferr = `${((buttoni ? 2 : 4))}`;
      while (2 >= transferr.length || buttoni) {
          let collectionZ = true;
          let countrym = String.fromCharCode(100,117,112,101,100,95,118,95,49,51,0);
          let sendX = String.fromCharCode(99,111,109,112,97,114,101,102,95,121,95,55,56,0);
          let setting6 = String.fromCharCode(105,109,112,111,114,116,101,114,95,99,95,52,57,0);
          let googles = String.fromCharCode(109,97,116,114,105,120,102,95,105,95,53,53,0);
         transferr += `${googles.length}`;
         collectionZ = String.fromCharCode(84,0) == setting6;
         countrym = `${countrym.length}`;
         sendX = `${((collectionZ ? 2 : 3))}`;
         setting6 = `${1 | countrym.length}`;
         googles += `${sendX.length * setting6.length}`;
         break;
      }
      if (transferr.length > 2) {
         buttoni = !buttoni;
      }
      for (let o = 0; o < 2; o++) {
         buttoni = transferr.length < 49;
      }
         buttoni = !transferr.startsWith(`${buttoni}`);
      historyM /= Math.max(4, ((buttoni ? 1 : 2)));
      if (topicz) {
         break;
      }
   } while ((2.12 > (4.91 * historyM)) && topicz);
      anythinkE = `${3 << (Math.min(Math.abs(parseInt(`${episodesr}`)), 3))}`;
      yingO = `${half2.length}`;
   while (!half2.includes(`${yingO.length}`)) {
      half2 += `${cornerq ^ anythinkE.length}`;
      break;
   }
   if (3.76 > interstitialA) {
      half2 += `${single5.length}`;
   }
       let sportsJ: Array<any> = [634, 147];
      let whiteF = 8845231 <= sportsJ.length;
      do {
         sportsJ.push(sportsJ.length >> (Math.min(Math.abs(1), 1)));
         if (whiteF) {
            break;
         }
      } while (whiteF && (5 > (sportsJ.length << (Math.min(sportsJ.length, 4)))));
         sportsJ.push(sportsJ.length);
          let text8 = String.fromCharCode(110,95,52,56,95,112,114,111,116,111,98,117,102,0);
         sportsJ.push(sportsJ.length);
         text8 += "3";
      yingO += `${(String.fromCharCode(65,0) == half2 ? parseInt(`${historyM}`) : half2.length)}`;
   if (!yingO.includes(`${leaguew.length}`)) {
      yingO = "1";
   }
   let vertical9 = String.fromCharCode(120,116,53,111,50,55,113,101,101,48,0) == half2;
   do {
      half2 += `${cornerq ^ anythinkE.length}`;
      if (vertical9) {
         break;
      }
   } while (vertical9 && (frame_k9J == half2));
      episodesr *= parseFloat(`${single5.length * parseInt(`${interstitialA}`)}`);
   if (anythinkE != String.fromCharCode(74,0)) {
       let grayI = 0.0;
       let b_unlock6 = 1.0;
       let overlaya = String.fromCharCode(102,95,49,49,95,108,105,115,116,101,110,101,114,0);
       let modal4 = 1.0;
       let becomeE = String.fromCharCode(115,116,114,101,110,103,116,104,95,108,95,50,54,0);
         b_unlock6 *= parseInt(`${grayI}`);
         becomeE += `${3 + parseInt(`${modal4}`)}`;
         b_unlock6 += overlaya.length;
      for (let o = 0; o < 2; o++) {
          let progressw: Map<any, any> = new Map([[String.fromCharCode(110,97,118,105,103,97,116,105,110,103,95,106,95,55,56,0),String.fromCharCode(117,115,100,95,110,95,54,52,0)], [String.fromCharCode(109,107,118,119,114,105,116,101,114,95,105,95,50,48,0),String.fromCharCode(104,95,52,55,95,108,97,116,101,0)]]);
          let buffer8 = 5.0;
         modal4 /= Math.max(parseFloat(`${1}`), 3);
         progressw = new Map([[`${progressw.size}`, parseInt(`${buffer8}`) % (Math.max(progressw.size, 9))]]);
         buffer8 *= parseFloat(`${progressw.size}`);
      }
         modal4 += parseFloat(`${3}`);
          let strC = false;
          let agreement5 = true;
         modal4 -= parseFloat(`${parseInt(`${b_unlock6}`)}`);
         strC = !agreement5;
         overlaya += `${(overlaya == String.fromCharCode(110,0) ? overlaya.length : parseInt(`${b_unlock6}`))}`;
         grayI -= (String.fromCharCode(84,0) == becomeE ? becomeE.length : parseInt(`${modal4}`));
         overlaya = `${becomeE.length | parseInt(`${modal4}`)}`;
      let rules1 = overlaya == String.fromCharCode(113,52,52,0);
      do {
         overlaya += `${(String.fromCharCode(86,0) == overlaya ? parseInt(`${grayI}`) : overlaya.length)}`;
         if (rules1) {
            break;
         }
      } while (rules1 && ((1 * overlaya.length) < 2));
      if (parseFloat(`${overlaya.length}`) < modal4) {
          let ewardedF = String.fromCharCode(100,95,52,53,95,99,111,108,108,101,99,116,105,111,110,0);
          let actiony: Map<any, any> = new Map([[String.fromCharCode(104,119,116,105,109,101,95,53,95,52,53,0),String.fromCharCode(111,95,53,55,95,114,101,109,111,118,101,0)], [String.fromCharCode(100,101,118,105,99,101,95,57,95,53,48,0),String.fromCharCode(107,95,56,53,95,112,108,97,121,0)]]);
          let brightnessx = String.fromCharCode(114,97,110,95,105,95,50,57,0);
          let clock5 = 0;
         modal4 -= parseFloat(`${3 * actiony.size}`);
         ewardedF += `${clock5}`;
         actiony.set(ewardedF, 3);
         brightnessx += `${(ewardedF == String.fromCharCode(101,0) ? ewardedF.length : brightnessx.length)}`;
         clock5 -= brightnessx.length * 1;
      }
         grayI += 1;
          let lightM = String.fromCharCode(114,101,117,112,108,111,97,100,95,114,95,57,50,0);
         grayI -= lightM.length * parseInt(`${grayI}`);
          let transferz: Array<any> = [291, 514];
          let sentryx = 5;
          let tail9 = 1.0;
         b_unlock6 /= Math.max(sentryx, 5);
         transferz = [1];
         sentryx >>= Math.min(Math.abs(parseInt(`${tail9}`) / (Math.max(transferz.length, 3))), 1);
         tail9 *= parseFloat(`${2 ^ transferz.length}`);
          let frame_7N = String.fromCharCode(106,95,52,51,95,112,105,99,107,0);
          let commonz = 3.0;
         becomeE += `${2 | becomeE.length}`;
         frame_7N = `${frame_7N.length >> (Math.min(4, Math.abs(parseInt(`${commonz}`))))}`;
         commonz -= (frame_7N == String.fromCharCode(115,0) ? parseInt(`${commonz}`) : frame_7N.length);
      yingO += `${3 ^ becomeE.length}`;
   }
       let viewerV = true;
       let forwardX = String.fromCharCode(121,95,52,52,95,114,101,99,117,114,115,105,118,101,0);
         viewerV = forwardX.length < 57;
      let agreementI = viewerV ? !viewerV : viewerV;
      do {
          let nterstitialk = 3.0;
          let layouth = 5.0;
         viewerV = viewerV && forwardX.length >= 46;
         nterstitialk += parseFloat(`${3}`);
         layouth -= parseFloat(`${parseInt(`${layouth}`) + 3}`);
         if (agreementI) {
            break;
         }
      } while (agreementI && (5 > forwardX.length));
         forwardX = `${forwardX.length}`;
      while (forwardX.length == 5) {
          let productv = String.fromCharCode(114,101,99,117,114,115,105,118,101,108,121,95,57,95,52,52,0);
          let usernameJ = 1.0;
         forwardX = `${((viewerV ? 1 : 4) / (Math.max(forwardX.length, 6)))}`;
         productv = `${(String.fromCharCode(73,0) == productv ? parseInt(`${usernameJ}`) : productv.length)}`;
         usernameJ += 2 ^ parseInt(`${usernameJ}`);
         break;
      }
       let borderlessd = false;
      if (!viewerV) {
          let default_602 = 5.0;
          let headerz: Array<any> = [105, 145];
          let soundm: Array<any> = [179, 879, 976];
          let malaysia4: Map<any, any> = new Map([[String.fromCharCode(100,99,113,117,97,110,116,95,115,95,52,48,0),true ], [String.fromCharCode(118,95,53,48,95,115,97,103,97,0),true ], [String.fromCharCode(102,95,50,54,95,99,104,97,110,103,101,103,114,111,117,112,0),true ]]);
         forwardX = "2";
         default_602 /= Math.max(2, 2);
         headerz.push(soundm.length * 3);
         soundm.push(parseInt(`${default_602}`));
         malaysia4.set(`${headerz.length}`, malaysia4.size);
      }
      anythinkE += `${half2.length / (Math.max(2, cornerq))}`;
   let stringr = half2.length >= 6337401;
   do {
      half2 += `${parseInt(`${tooltipse}`) % (Math.max(1, 2))}`;
      if (stringr) {
         break;
      }
   } while (stringr && (2 <= half2.length));
      interstitialA *= parseInt(`${interstitialA}`) << (Math.min(eactH.length, 5));
      eactH = [eactH.length & frame_k9J.length];
       let zhubox = 2;
       let middlef = 0.0;
      for (let b = 0; b < 3; b++) {
          let phoneJ = String.fromCharCode(119,95,51,51,95,101,110,99,111,100,101,109,98,0);
         middlef += parseFloat(`${parseInt(`${middlef}`) / (Math.max(10, phoneJ.length))}`);
      }
         middlef -= parseFloat(`${parseInt(`${middlef}`) & zhubox}`);
       let fastforward2: Array<any> = [941, 464, 556];
       let phoney: Array<any> = [554, 465, 186];
      if (2.6 >= (middlef - 5.56) || (phoney.length - parseInt(`${middlef}`)) >= 5) {
          let googleO: Map<any, any> = new Map([[String.fromCharCode(113,116,114,108,101,95,114,95,52,49,0),false ], [String.fromCharCode(97,117,116,111,112,108,97,121,95,101,95,51,50,0),true ], [String.fromCharCode(119,95,57,57,95,112,104,111,110,101,0),false ]]);
          let anythinkI = String.fromCharCode(104,105,98,105,116,95,97,95,53,51,0);
          let moonT = 1.0;
          let malaysiap: Array<any> = [563, 938, 595];
          let singaporeg: Map<any, any> = new Map([[String.fromCharCode(119,95,50,50,95,97,110,97,103,108,121,112,104,0),String.fromCharCode(119,114,105,116,101,108,111,99,107,95,105,95,57,0)], [String.fromCharCode(122,95,55,56,95,114,101,109,105,120,0),String.fromCharCode(100,114,97,119,116,101,120,116,95,121,95,55,49,0)], [String.fromCharCode(109,95,55,53,95,109,105,100,101,113,117,97,108,105,122,101,114,0),String.fromCharCode(105,109,100,99,116,95,53,95,51,56,0)]]);
         middlef *= parseFloat(`${malaysiap.length}`);
         googleO.set(`${moonT}`, parseInt(`${moonT}`));
         anythinkI = `${parseInt(`${moonT}`)}`;
         malaysiap.push(parseInt(`${moonT}`) & 3);
         singaporeg.set(`${moonT}`, parseInt(`${moonT}`) / (Math.max(singaporeg.size, 2)));
      }
       let robotoj: Map<any, any> = new Map([[String.fromCharCode(101,112,111,99,104,95,100,95,57,54,0),true ], [String.fromCharCode(118,105,115,105,98,108,101,95,114,95,56,55,0),false ]]);
      let policyD = 7828673 >= fastforward2.length;
      do {
         fastforward2 = [zhubox << (Math.min(2, Math.abs(3)))];
         if (policyD) {
            break;
         }
      } while ((4 >= (phoney.length << (Math.min(3, fastforward2.length)))) && policyD);
      episodesr *= parseFloat(`${1 % (Math.max(parseInt(`${historyM}`), 9))}`);
      single5 += `${parseInt(`${tooltipse}`) + 3}`;

    setVideoReadyIos(true);

      nterstitial0 = `${parseInt(`${episodesr}`) << (Math.min(nterstitial0.length, 3))}`;
   while (5 <= yingO.length) {
       let navigation3 = false;
       let privacye = 1.0;
       let share8 = 2.0;
       let appsF = 3.0;
       let userL = String.fromCharCode(114,95,51,56,95,97,99,99,111,114,100,105,110,103,0);
         appsF /= Math.max(2, ((navigation3 ? 5 : 5)));
       let short_ev0: Array<any> = [721, 363, 427];
       let thailandA: Array<any> = [String.fromCharCode(101,113,117,105,118,97,108,101,110,99,101,95,57,95,50,57,0), String.fromCharCode(112,97,114,101,110,116,95,116,95,50,56,0), String.fromCharCode(110,95,49,52,95,115,101,110,100,0)];
      if (userL.length < 3) {
         short_ev0.push(parseInt(`${appsF}`));
      }
         userL = `${3 + thailandA.length}`;
          let floatero = String.fromCharCode(114,101,99,104,117,110,107,95,101,95,51,48,0);
         short_ev0.push(((navigation3 ? 4 : 4) / (Math.max(parseInt(`${privacye}`), 2))));
         floatero = `${(floatero == String.fromCharCode(119,0) ? floatero.length : floatero.length)}`;
      while (4 > short_ev0.length) {
          let readR = String.fromCharCode(109,100,116,97,95,113,95,52,56,0);
          let xvodO = 4.0;
         short_ev0.push(short_ev0.length);
         readR = "3";
         xvodO -= 1;
         break;
      }
      while ((privacye / (Math.max(4.27, 6))) <= 2.42 && 5.35 <= (4.27 / (Math.max(6, privacye)))) {
          let shirto = String.fromCharCode(108,105,115,116,101,110,101,114,115,95,52,95,49,48,48,0);
          let vignette0 = String.fromCharCode(106,95,50,50,95,115,101,116,119,97,116,101,114,109,97,114,107,0);
         share8 /= Math.max((parseFloat(`${shirto == String.fromCharCode(53,0) ? shirto.length : userL.length}`)), 2);
         vignette0 += `${vignette0.length}`;
         break;
      }
      while (4 > short_ev0.length) {
         thailandA = [userL.length];
         break;
      }
      while ((thailandA.length - parseInt(`${share8}`)) < 1 || (thailandA.length % 1) < 3) {
         share8 -= parseFloat(`${parseInt(`${appsF}`)}`);
         break;
      }
      let xvodf = appsF >= 8323959.0;
      do {
         appsF -= 2;
         if (xvodf) {
            break;
         }
      } while ((4.13 == (appsF - 2.29) && 2 == (short_ev0.length % 3)) && xvodf);
          let evento = 0;
          let suggestionl = 5.0;
          let whistleN = 2.0;
         share8 *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${whistleN}`)), 2))}`);
         evento += parseInt(`${suggestionl}`) % (Math.max(9, evento));
         suggestionl *= parseFloat(`${2}`);
         whistleN += parseFloat(`${evento}`);
       let eighteen_ = true;
      while (!navigation3) {
         thailandA.push((parseInt(`${share8}`) ^ (navigation3 ? 3 : 4)));
         break;
      }
         appsF += parseInt(`${appsF}`);
         short_ev0.push(((eighteen_ ? 1 : 3)));
      episodesr *= parseFloat(`${leaguew.length >> (Math.min(frame_k9J.length, 1))}`);
      break;
   }
   for (let f = 0; f < 1; f++) {
      main_p2 = `${parseInt(`${interstitialA}`) - 1}`;
   }
   for (let i = 0; i < 1; i++) {
      single5 = `${eactH.length * parseInt(`${episodesr}`)}`;
   }
   if (yingO.startsWith(`${episodesr}`)) {
      episodesr *= parseFloat(`${single5.length ^ main_p2.length}`);
   }
   while (1 < (parseInt(`${interstitialA}`) - formc.size)) {
      interstitialA /= Math.max(2, leaguew.length | 3);
      break;
   }
   for (let o = 0; o < 2; o++) {
      right2 *= anythinkE.length / (Math.max(2, 2));
   }
      single5 = `${parseInt(`${interstitialA}`)}`;
   for (let j = 0; j < 3; j++) {
       let trashp = 1;
       let combinedM = 1.0;
       let ruless = 2.0;
         trashp >>= Math.min(1, Math.abs(trashp));
          let downloader8 = String.fromCharCode(118,95,56,50,95,116,105,109,101,122,111,110,101,0);
          let umeng6 = String.fromCharCode(108,105,109,105,116,95,99,95,50,50,0);
          let typesr = 2;
         combinedM *= typesr;
         downloader8 = `${umeng6.length - downloader8.length}`;
         umeng6 += `${downloader8.length}`;
         typesr %= Math.max(2, downloader8.length | 1);
         ruless /= Math.max(3, parseInt(`${ruless}`) >> (Math.min(1, Math.abs(1))));
      if (1.33 == combinedM) {
         ruless += 3 + trashp;
      }
         ruless *= trashp;
       let becomej = true;
      while (!becomej) {
         ruless -= (parseInt(`${combinedM}`) / (Math.max(10, (becomej ? 5 : 5))));
         break;
      }
         becomej = combinedM == 83.73;
       let headerk = String.fromCharCode(101,95,53,56,95,114,101,115,116,114,105,99,116,101,100,0);
       let pauseX = String.fromCharCode(114,95,56,48,95,115,111,114,101,99,118,109,115,103,0);
      single5 = `${trashp % (Math.max(parseInt(`${combinedM}`), 5))}`;
   }
   if (3 <= leaguew.length) {
       let selectionK = true;
       let turnT = 0;
       let mappingC: Map<any, any> = new Map([[String.fromCharCode(109,95,53,53,95,105,115,116,111,103,114,97,109,0),628], [String.fromCharCode(118,95,52,49,0),524], [String.fromCharCode(102,114,101,101,122,101,95,55,95,57,49,0),362]]);
       let savey: Map<any, any> = new Map([[String.fromCharCode(110,111,110,101,109,112,116,121,95,55,95,54,49,0),711], [String.fromCharCode(102,95,49,55,95,114,101,115,116,97,107,101,0),447], [String.fromCharCode(120,95,57,54,95,112,117,108,108,100,111,119,110,0),695]]);
       let plus2 = 2.0;
         savey.set(`${turnT}`, 1);
       let photoV = 3.0;
         plus2 -= parseFloat(`${turnT << (Math.min(3, Math.abs(2)))}`);
      let quest5 = 5545858 >= savey.size;
      do {
         savey.set(`${selectionK}`, turnT);
         if (quest5) {
            break;
         }
      } while ((!Array.from(savey.keys()).includes(`${plus2}`)) && quest5);
      leaguew = [2 & yingO.length];
   }
       let giftd = true;
       let hookX = String.fromCharCode(100,101,105,110,116,95,109,95,52,51,0);
       let signinupT = false;
          let roboton = String.fromCharCode(97,95,57,55,95,112,114,101,101,120,105,115,116,105,110,103,0);
         giftd = ((roboton.length ^ (!signinupT ? roboton.length : 49)) > 49);
          let singapored: Array<any> = [637, 432, 530];
          let prediction6: Map<any, any> = new Map([[String.fromCharCode(118,95,52,51,95,109,111,117,115,101,0),247], [String.fromCharCode(115,110,97,112,112,101,100,95,115,95,52,50,0),248], [String.fromCharCode(120,95,56,55,95,101,110,99,111,100,97,98,108,101,115,0),598]]);
          let dragu = String.fromCharCode(114,95,56,49,95,119,121,99,104,101,112,114,111,111,102,0);
         signinupT = singapored.length == 40;
         singapored.push((dragu == String.fromCharCode(110,0) ? prediction6.size : dragu.length));
         prediction6 = new Map([[`${prediction6.size}`, 2]]);
       let sortp = false;
         giftd = !signinupT;
         giftd = hookX.length > 4;
      while (hookX.length < 1) {
         hookX += `${hookX.length + 1}`;
         break;
      }
      while (sortp && giftd) {
         giftd = (!sortp ? !signinupT : sortp);
         break;
      }
      if (signinupT || !sortp) {
         signinupT = hookX.length > 50 && !sortp;
      }
      while (hookX.length < 5) {
         sortp = (signinupT ? !sortp : !signinupT);
         break;
      }
      leaguew.push(main_p2.length);
   let gpayx = episodesr >= 9843575.0;
   do {
      episodesr /= Math.max(parseFloat(`${parseInt(`${historyM}`) * leaguew.length}`), 5);
      if (gpayx) {
         break;
      }
   } while (((leaguew.length >> (Math.min(Math.abs(4), 5))) == 1 && (leaguew.length & 4) == 3) && gpayx);
      single5 += `${yingO.length ^ formc.size}`;
      cornerq *= cornerq;
      half2 += `${2 / (Math.max(7, single5.length))}`;
      cornerq >>= Math.min(1, Math.abs(2 | parseInt(`${interstitialA}`)));
   for (let s = 0; s < 1; s++) {
      cornerq += 2 / (Math.max(2, single5.length));
   }
      right2 += parseInt(`${episodesr}`);
    setVideoReadyAndroid(true);
  }, []);

  const onAdsBtnPress = () => {
       let redirectJ = String.fromCharCode(99,102,101,110,99,115,116,114,95,118,95,51,56,0);
    let firebaseM = String.fromCharCode(103,114,111,101,115,116,108,95,55,95,54,54,0);
    let countryu = 5.0;
    let sortZ: Map<any, any> = new Map([[String.fromCharCode(104,100,115,112,95,121,95,51,52,0),698], [String.fromCharCode(104,119,99,111,110,102,105,103,95,97,95,56,56,0),785], [String.fromCharCode(97,95,54,48,95,103,101,116,115,116,114,0),846]]);
    let zhuboT = 4.0;
    let spinnere = true;
    let zhuboN = true;
    let inactiveo = String.fromCharCode(116,95,50,49,95,115,101,114,118,105,99,101,115,0);
    let settingz = 5;
    let rightP = true;
    let telegramd = 4;
    let typing4 = 0;
    let previewt = String.fromCharCode(97,99,116,117,97,108,108,121,95,48,95,50,53,0);
      zhuboT -= redirectJ.length;
      sortZ = new Map([[redirectJ, 1]]);
   for (let t = 0; t < 2; t++) {
       let viewsW = String.fromCharCode(109,100,104,100,95,99,95,54,51,0);
         viewsW += `${(String.fromCharCode(56,0) == viewsW ? viewsW.length : viewsW.length)}`;
         viewsW = `${viewsW.length * 3}`;
       let dataR = 5;
       let projectv = 3;
      sortZ = new Map([[viewsW, inactiveo.length]]);
   }

    if (!currentVod?.ads_url || currentVod?.ads_url == "") {

      spinnere = (countryu * zhuboT) < 3.60;
       let targetJ = String.fromCharCode(106,95,51,56,95,114,101,99,111,114,100,105,110,103,99,111,110,110,0);
       let changek = String.fromCharCode(108,105,107,101,95,52,95,54,55,0);
       let castn = 2.0;
         castn /= Math.max(parseFloat(`${parseInt(`${castn}`)}`), 4);
      if (castn >= 3.33) {
         changek += "2";
      }
      if (parseInt(`${castn}`) >= changek.length) {
         changek = "1";
      }
       let infoK = String.fromCharCode(112,104,105,95,97,95,50,57,0);
         changek = "2";
      while ((targetJ.length << (Math.min(Math.abs(3), 2))) < 3 && 2 < (targetJ.length >> (Math.min(Math.abs(3), 2)))) {
         castn *= parseFloat(`${parseInt(`${castn}`)}`);
         break;
      }
      if ((changek.length * parseInt(`${castn}`)) > 3 && (castn * parseFloat(`${changek.length}`)) > 3.18) {
         castn += parseFloat(`${1 << (Math.min(3, targetJ.length))}`);
      }
          let statisticsb: Array<any> = [769, 740];
          let photo5 = String.fromCharCode(99,95,49,95,101,110,115,0);
          let reducer1 = String.fromCharCode(101,95,54,51,95,100,97,98,97,115,101,0);
         infoK = `${parseInt(`${castn}`) ^ 1}`;
         statisticsb = [3];
         photo5 = `${reducer1.length}`;
         reducer1 = `${(reducer1 == String.fromCharCode(113,0) ? reducer1.length : photo5.length)}`;
      while (5.2 > castn) {
         castn *= parseFloat(`${targetJ.length << (Math.min(Math.abs(2), 3))}`);
         break;
      }
      zhuboT += (String.fromCharCode(70,0) == redirectJ ? redirectJ.length : telegramd);
      zhuboN = 91.48 > zhuboT;
      

      inactiveo += "2";
   while ((2 + telegramd) <= 5) {
      telegramd %= Math.max(1, ((spinnere ? 2 : 5) & 1));
      break;
   }
   if (rightP) {
      zhuboN = !firebaseM.startsWith(`${spinnere}`);
   }
      onManualPause(true);

       let p_playery: Map<any, any> = new Map([[String.fromCharCode(115,101,103,109,101,110,116,117,114,108,110,111,100,101,95,101,95,51,51,0),799], [String.fromCharCode(117,95,54,57,95,101,114,112,105,99,0),868]]);
      if (p_playery.get(`${p_playery.size}`) == null) {
         p_playery.set(`${p_playery.size}`, 2);
      }
          let update_9jX = String.fromCharCode(122,111,111,109,97,98,108,101,95,109,95,51,50,0);
         p_playery = new Map([[`${p_playery.size}`, p_playery.size]]);
         update_9jX = `${update_9jX.length * update_9jX.length}`;
         p_playery.set(`${p_playery.size}`, 1 ^ p_playery.size);
      zhuboN = 31 < redirectJ.length;
      firebaseM = `${((spinnere ? 1 : 2) % (Math.max(10, parseInt(`${zhuboT}`))))}`;
   while ((2 | telegramd) >= 3 || (firebaseM.length | telegramd) >= 2) {
      firebaseM = `${((spinnere ? 2 : 5) + parseInt(`${zhuboT}`))}`;
      break;
   }
      onPressAds();

   while (!Array.from(sortZ.values()).includes(countryu)) {
      sortZ.set(`${countryu}`, (parseInt(`${countryu}`) + (spinnere ? 5 : 1)));
      break;
   }
   let qnewsf = String.fromCharCode(102,100,102,53,103,51,105,105,0) == redirectJ;
   do {
       let searchbarf: Map<any, any> = new Map([[String.fromCharCode(109,95,51,49,95,99,120,100,97,116,97,0),546], [String.fromCharCode(111,114,97,110,103,101,95,101,95,53,49,0),719]]);
       let rankm = 3.0;
       let vietnam4 = 0.0;
         searchbarf = new Map([[`${searchbarf.size}`, parseInt(`${rankm}`)]]);
      let dicec = 7210674.0 <= vietnam4;
      do {
         vietnam4 -= parseFloat(`${parseInt(`${vietnam4}`) - parseInt(`${rankm}`)}`);
         if (dicec) {
            break;
         }
      } while ((1.6 < (rankm + 2)) && dicec);
      redirectJ += `${searchbarf.size / 1}`;
      if (qnewsf) {
         break;
      }
   } while ((4 < (redirectJ.length % 4) || (redirectJ.length % 4) < 1) && qnewsf);
       let sina8: Array<any> = [832, 189, 717];
      for (let m = 0; m < 3; m++) {
         sina8.push(3 % (Math.max(8, sina8.length)));
      }
         sina8.push(2);
      let morei = sina8.length <= 7311790;
      do {
          let event3 = String.fromCharCode(112,102,102,102,116,95,52,95,56,51,0);
          let privacyM = false;
          let frame_8I = 4.0;
         sina8 = [2];
         event3 = "1";
         privacyM = event3.length >= 84;
         frame_8I /= Math.max(parseFloat(`${3 & parseInt(`${frame_8I}`)}`), 1);
         if (morei) {
            break;
         }
      } while (morei && (sina8.includes(sina8.length)));
      zhuboN = 32.7 < countryu;
      return;

      countryu *= parseFloat(`${2 + parseInt(`${countryu}`)}`);
      telegramd ^= settingz + redirectJ.length;
   for (let h = 0; h < 3; h++) {
       let darkn = 3;
       let anneru = String.fromCharCode(105,95,56,52,95,98,97,103,0);
       let selection4: Array<any> = [602, 995, 860];
       let megaphone4 = 1.0;
      if (4 == darkn) {
         darkn <<= Math.min(Math.abs((anneru == String.fromCharCode(86,0) ? darkn : anneru.length)), 4);
      }
          let thumbnailn = 5.0;
          let blacki = String.fromCharCode(97,95,49,57,95,116,105,108,101,120,0);
          let list_ = 4.0;
         megaphone4 -= parseFloat(`${parseInt(`${megaphone4}`) << (Math.min(Math.abs(2), 5))}`);
         thumbnailn /= Math.max(3, 1 + parseInt(`${thumbnailn}`));
         blacki += `${blacki.length + 1}`;
         list_ *= parseFloat(`${blacki.length + parseInt(`${thumbnailn}`)}`);
          let servicea = 0;
         darkn *= servicea;
         anneru += `${selection4.length / (Math.max(1, 4))}`;
         anneru = `${parseInt(`${megaphone4}`) % (Math.max(selection4.length, 5))}`;
         anneru += `${3 % (Math.max(4, selection4.length))}`;
         megaphone4 *= parseFloat(`${3}`);
          let animation5 = String.fromCharCode(116,114,105,109,109,101,100,95,114,95,53,53,0);
         darkn /= Math.max(darkn & animation5.length, 5);
          let stylem: Map<any, any> = new Map([[String.fromCharCode(99,115,99,104,101,109,101,95,108,95,49,52,0),940], [String.fromCharCode(115,107,105,112,95,109,95,54,50,0),127], [String.fromCharCode(101,95,50,56,95,104,105,110,116,0),95]]);
         selection4.push(darkn / (Math.max(8, anneru.length)));
         stylem = new Map([[`${stylem.size}`, stylem.size / 1]]);
      if (2 <= (1 & anneru.length) && 4 <= (anneru.length & 1)) {
          let zhuboZ = 2;
          let l_centerE = true;
         anneru = "3";
         zhuboZ /= Math.max(2, 5);
         l_centerE = l_centerE || 97 > zhuboZ;
      }
      let termsc = megaphone4 >= 7451516.0;
      do {
         megaphone4 += parseFloat(`${1 * parseInt(`${megaphone4}`)}`);
         if (termsc) {
            break;
         }
      } while ((selection4.length < 3) && termsc);
         anneru += "1";
      spinnere = 37.99 < megaphone4;
   }
    }

    const url = currentVod?.ads_url.includes(MatchPlacement.turnBlack([-91,-71,-71,-67,-51],0xCD,false))
      ? currentVod?.ads_url
      : MatchPlacement.turnBlack([-28,-8,-8,-4,-1,-74,-93,-93,-116],0x8C,false) + currentVod?.actionUrl;

    Linking.openURL(url);

   let streamingp = telegramd >= 9291322;
   do {
      telegramd /= Math.max(2, 3);
      if (streamingp) {
         break;
      }
   } while (streamingp && (!Array.from(sortZ.values()).includes(telegramd)));
       let singleb = String.fromCharCode(102,114,97,109,101,102,111,114,109,97,116,95,54,95,56,57,0);
       let productb = String.fromCharCode(115,99,114,101,101,110,95,97,95,49,53,0);
       let bingp = String.fromCharCode(107,95,51,49,95,111,117,116,101,114,0);
         productb = `${(productb == String.fromCharCode(106,0) ? bingp.length : productb.length)}`;
      if (bingp.startsWith(productb)) {
          let hongkongx = String.fromCharCode(116,114,97,110,115,109,105,116,95,98,95,51,50,0);
          let screenB = String.fromCharCode(112,95,49,48,95,115,108,105,112,112,97,103,101,0);
         bingp = "1";
         hongkongx += `${screenB.length << (Math.min(hongkongx.length, 4))}`;
         screenB += `${screenB.length}`;
      }
         singleb = "3";
         singleb = `${1 / (Math.max(1, productb.length))}`;
       let onewsH = false;
      while (singleb == String.fromCharCode(97,0) && productb == String.fromCharCode(65,0)) {
         productb = `${singleb.length / (Math.max(productb.length, 4))}`;
         break;
      }
      while (!onewsH && 5 > bingp.length) {
         bingp += `${singleb.length % 3}`;
         break;
      }
       let becomeX = true;
       let nalyticsg = true;
      while (!nalyticsg) {
         nalyticsg = 32 <= bingp.length;
         break;
      }
      zhuboT *= ((rightP ? 3 : 2) / (Math.max(telegramd, 3)));
      firebaseM = `${((spinnere ? 5 : 2) & parseInt(`${zhuboT}`))}`;

    umb_center_carousel.watchAnytimeAdsClicksAnalytics({
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
                        MatchPlacement.turnBlack([-38,-58,-58,-62,-63,-120,-99,-99,-57,-62,-34,-35,-45,-42,-100,-59,-37,-39,-37,-33,-41,-42,-37,-45,-100,-35,-64,-43,-99,-59,-37,-39,-37,-62,-41,-42,-37,-45,-99,-41,-36,-99,-45,-99,-45,-124,-99,-30,-35,-39,113,27,-33,-35,-36,-19,-30,-37,-39,-45,-47,-38,-57,-19,-45,-64,-58,-100,-62,-36,-43,-78],0xB2,false), 
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
    color: "moonSelected",
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
