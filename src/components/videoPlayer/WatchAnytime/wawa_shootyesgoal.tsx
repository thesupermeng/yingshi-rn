

class UploadCondensed {
    static incidentControlsSchedulerIconw = (contents: [number], key: number, hasEmoji: boolean) => {
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
import PlayIcon from "@static/images/librrcWhiteanimationlive.svg";
import PauseIcon from "@static/images/refreshStringsLibjsi.svg";
import Video, { OnProgressData, wawaImage } from "react-native-video";
import FastImage from "../../common/wawa_iconarrowrightblack";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/wawa_root";
import { DOWNLOAD_WATCH_ANYTIME } from "@utility/wawa_iconpointscore";
import { playVod } from "@redux/actions/wawa_indicator";
import RNFetchBlob from "rn-fetch-blob";
import { addIdToCache } from "../../../utils/wawa_notificationfillempty_models";
import { screenModel } from "@type/wawa_rules";
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import BecomeVipOverlay from "../../modal/wawa_arrowrightwithtail";
import VipGuideModal from "../../modal/wawa_iconpipshrink";
import { wawaNewarchdefaults } from "@utility/wawa_analytic_imagenomoredata";
import { setIsMiniVodGuideShown } from "@redux/actions/wawa_related";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from '@models/wawa_refreshborderless_found';
interface wawaAwayShow {
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

const videoBufferGif = require("@static/images/libjsijniprofilerRncore.gif");

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
}: wawaAwayShow) {
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
  const videoRef = useRef<wawaImage>(null);
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
  const userState = useSelector<wawaPhoneControls>('userReducer');
  const isVip = wawaLibglog.isVip(userState.user);

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
       let nextv: Map<any, any> = new Map([[String.fromCharCode(106,100,104,117,102,102,0),37], [String.fromCharCode(99,101,108,102,0),407]]);
    let collectionL = 2;
    let i_animationx = true;
    let iconcurrentmatchb = 1.0;
    let expiredi = true;
    let sellmathbackgroundg = String.fromCharCode(115,99,111,112,101,100,0);
    let typingloadingp = String.fromCharCode(100,98,104,97,110,100,108,101,0);
    let s_imageY: Map<any, any> = new Map([[String.fromCharCode(110,97,108,117,0),true ], [String.fromCharCode(99,104,97,110,0),true ]]);
    let contextx = 0;
    let matchinactive3 = String.fromCharCode(104,115,98,0);
    let playlist0: Array<any> = [String.fromCharCode(115,99,114,101,101,110,112,114,101,115,115,111,0), String.fromCharCode(112,97,105,110,116,0), String.fromCharCode(100,105,100,0)];
    let policy8 = 1.0;
    let valuesA = String.fromCharCode(116,97,107,101,0);
      i_animationx = nextv.size >= 83;
      i_animationx = 32 >= s_imageY.size || contextx >= 32;
   let catagoryW = 6587816 >= s_imageY.size;
   do {
      s_imageY.set(typingloadingp, playlist0.length / 2);
      if (catagoryW) {
         break;
      }
   } while ((s_imageY.size == collectionL) && catagoryW);
   if ((2.44 / (Math.max(2, policy8))) > 5.24 && !expiredi) {
      policy8 *= s_imageY.size;
   }
      expiredi = nextv.get(`${collectionL}`) != null;
   for (let a = 0; a < 3; a++) {
       let iconarrowrightg = 2.0;
       let middleware6: Map<any, any> = new Map([[String.fromCharCode(119,95,52,56,95,109,102,114,97,0),19], [String.fromCharCode(99,111,110,116,111,117,114,115,0),941]]);
       let dragf = 4.0;
       let taiwan2 = false;
       let shirtP = 3.0;
          let lineO = 3.0;
         middleware6 = new Map([[`${dragf}`, parseInt(`${lineO}`)]]);
         taiwan2 = shirtP == 23.83;
      while ((dragf + 1.35) == 1.5) {
         taiwan2 = (parseInt(`${iconarrowrightg}`) + middleware6.size) > 81;
         break;
      }
      if (3 == (middleware6.size + 2)) {
         middleware6.set(`${taiwan2}`, 1 - parseInt(`${iconarrowrightg}`));
      }
         middleware6 = new Map([[`${shirtP}`, 2]]);
      for (let n = 0; n < 3; n++) {
          let libhermes0 = String.fromCharCode(109,101,115,97,103,101,115,0);
          let arrow2: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,98,105,116,115,0),String.fromCharCode(98,117,102,102,101,114,115,105,110,107,0)], [String.fromCharCode(109,101,109,122,101,114,111,0),String.fromCharCode(110,101,119,108,121,0)], [String.fromCharCode(111,112,101,114,97,116,105,111,110,0),String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,110,103,0)]]);
          let commont = String.fromCharCode(112,95,51,50,95,116,114,97,99,101,0);
          let predictionwin_ = String.fromCharCode(114,100,99,111,115,116,0);
          let whistleorangeu = 0.0;
         taiwan2 = predictionwin_ == libhermes0;
         libhermes0 = `${parseInt(`${whistleorangeu}`) ^ commont.length}`;
         arrow2 = new Map([[`${arrow2.size}`, parseInt(`${whistleorangeu}`) >> (Math.min(Math.abs(arrow2.size), 4))]]);
         commont = "2";
         predictionwin_ = `${commont.length}`;
      }
         iconarrowrightg *= ((taiwan2 ? 3 : 4) / (Math.max(parseInt(`${dragf}`), 1)));
      while (shirtP >= 5.91 || 5.83 >= (shirtP + 5.91)) {
          let routerS: Map<any, any> = new Map([[String.fromCharCode(99,117,98,105,99,0),false ], [String.fromCharCode(103,99,109,0),true ], [String.fromCharCode(101,120,112,97,110,100,97,98,108,101,0),false ]]);
          let iconarrowleftL = String.fromCharCode(99,104,97,110,103,101,114,101,102,0);
          let notificationfilled0 = String.fromCharCode(114,100,102,116,0);
         shirtP += parseFloat(`${iconarrowleftL.length % 1}`);
         routerS = new Map([[`${routerS.size}`, 2]]);
         iconarrowleftL += `${(String.fromCharCode(66,0) == notificationfilled0 ? routerS.size : notificationfilled0.length)}`;
         break;
      }
          let libloggerT: Array<any> = [713, 972, 16];
          let plash7 = true;
         iconarrowrightg += ((plash7 ? 1 : 1) - (taiwan2 ? 1 : 1));
         libloggerT = [libloggerT.length + libloggerT.length];
         plash7 = (libloggerT.length & libloggerT.length) >= 51;
       let navigationi = 4.0;
       let iconeyeT = 3.0;
         middleware6 = new Map([[`${iconeyeT}`, 2 - parseInt(`${iconeyeT}`)]]);
       let sourceD = String.fromCharCode(108,111,111,112,101,120,105,116,0);
      let pageB = iconarrowrightg <= 8979407.0;
      do {
         iconarrowrightg += 1 + parseInt(`${navigationi}`);
         if (pageB) {
            break;
         }
      } while ((4.49 > iconarrowrightg) && pageB);
       let static_su: Array<any> = [725, 720];
      if (1 < static_su.length) {
         middleware6.set(sourceD, (String.fromCharCode(54,0) == sourceD ? sourceD.length : static_su.length));
      }
      typingloadingp += `${middleware6.size}`;
   }
   for (let s = 0; s < 1; s++) {
      nextv.set(`${policy8}`, parseInt(`${policy8}`) + s_imageY.size);
   }
   let long_baQ = iconcurrentmatchb >= 6318574.0;
   do {
       let paginationC = 3.0;
      if ((paginationC / (Math.max(8, paginationC))) < 3.71) {
         paginationC /= Math.max(1, 2 >> (Math.min(Math.abs(parseInt(`${paginationC}`)), 4)));
      }
      while ((paginationC * paginationC) == 4.16 && (paginationC * paginationC) == 4.16) {
         paginationC -= 1;
         break;
      }
      for (let i = 0; i < 3; i++) {
         paginationC -= parseInt(`${paginationC}`) / 3;
      }
      iconcurrentmatchb /= Math.max(playlist0.length, 2);
      if (long_baQ) {
         break;
      }
   } while (long_baQ && (4.12 < (iconcurrentmatchb + 4.92)));
   if (!expiredi) {
      expiredi = String.fromCharCode(65,0) == typingloadingp;
   }
   while (!Array.from(s_imageY.values()).includes(iconcurrentmatchb)) {
      s_imageY = new Map([[`${s_imageY.size}`, playlist0.length]]);
      break;
   }
   for (let g = 0; g < 3; g++) {
      i_animationx = nextv.size < 27;
   }
       let iconnewssharea = 1;
         iconnewssharea ^= iconnewssharea / (Math.max(iconnewssharea, 10));
      let imagewatchlives = iconnewssharea <= 8925947;
      do {
          let f_positionQ = 3;
          let langC = String.fromCharCode(116,102,114,102,0);
          let sharedT = 2.0;
          let roundL = 0;
         iconnewssharea *= roundL;
         f_positionQ >>= Math.min(5, langC.length);
         langC += `${langC.length | parseInt(`${sharedT}`)}`;
         sharedT *= parseFloat(`${parseInt(`${sharedT}`) - 2}`);
         roundL %= Math.max(parseInt(`${sharedT}`) ^ langC.length, 2);
         if (imagewatchlives) {
            break;
         }
      } while (imagewatchlives && ((5 & iconnewssharea) >= 1));
       let left_ = 3.0;
       let iconsaveimagem = 4.0;
      i_animationx = playlist0.length == 42 && 91.80 == policy8;
      nextv.set(`${collectionL}`, collectionL | 1);
      matchinactive3 += `${((i_animationx ? 3 : 3) & parseInt(`${iconcurrentmatchb}`))}`;
   while (contextx >= 1) {
      i_animationx = collectionL > s_imageY.size;
      break;
   }
      nextv = new Map([[`${playlist0.length}`, playlist0.length ^ parseInt(`${iconcurrentmatchb}`)]]);
   let zinit_t0 = 9311496.0 >= policy8;
   do {
      policy8 *= 3;
      if (zinit_t0) {
         break;
      }
   } while (zinit_t0 && (3 >= (playlist0.length << (Math.min(Math.abs(2), 2)))));
      sellmathbackgroundg += `${typingloadingp.length}`;
   let basketballmatchdetailbgb = 5785072.0 <= policy8;
   do {
      policy8 += 1 << (Math.min(3, Math.abs(parseInt(`${iconcurrentmatchb}`))));
      if (basketballmatchdetailbgb) {
         break;
      }
   } while (basketballmatchdetailbgb && ((2 ^ matchinactive3.length) < 1));
   let iconclosewhitebgt = 7080183 <= matchinactive3.length;
   do {
      matchinactive3 += `${3 & s_imageY.size}`;
      if (iconclosewhitebgt) {
         break;
      }
   } while ((!matchinactive3.startsWith(`${policy8}`)) && iconclosewhitebgt);
       let downarrow2: Map<any, any> = new Map([[String.fromCharCode(105,110,104,105,98,105,116,0),179], [String.fromCharCode(116,111,110,0),982]]);
       let sideF = String.fromCharCode(103,101,110,99,102,103,115,0);
       let exampleimageK = String.fromCharCode(115,119,97,112,112,101,100,0);
         sideF += `${2 | sideF.length}`;
      while ((sideF.length - 5) <= 4) {
         sideF += `${(exampleimageK == String.fromCharCode(79,0) ? exampleimageK.length : downarrow2.size)}`;
         break;
      }
       let orangetick2 = String.fromCharCode(120,112,117,98,0);
       let hometeamfieldf = String.fromCharCode(119,101,97,118,101,0);
         downarrow2 = new Map([[sideF, sideF.length / (Math.max(8, exampleimageK.length))]]);
       let smallbrightnessW = 1.0;
       let update_1_ = 0.0;
         exampleimageK += `${parseInt(`${update_1_}`)}`;
      while (3 > (downarrow2.size & hometeamfieldf.length)) {
         downarrow2 = new Map([[hometeamfieldf, hometeamfieldf.length << (Math.min(Math.abs(1), 3))]]);
         break;
      }
      if ((update_1_ * 1.86) <= 2.19) {
         update_1_ -= parseInt(`${smallbrightnessW}`);
      }
         downarrow2.set(`${smallbrightnessW}`, 1);
      expiredi = (sellmathbackgroundg.length / (Math.max(5, typingloadingp.length))) < 14;
   while ((matchinactive3.length >> (Math.min(Math.abs(3), 2))) == 4) {
       let imagenetworkerrA = false;
       let predictionbanneri = String.fromCharCode(102,117,108,108,0);
       let statisticsactivek = 3.0;
       let livenodatabgimgd = String.fromCharCode(110,111,104,101,97,100,101,114,0);
          let iconclose3: Array<any> = [898, 636];
          let matchesW = String.fromCharCode(102,105,111,0);
          let defaultplayerimg8 = String.fromCharCode(114,103,98,105,0);
         statisticsactivek /= Math.max(parseInt(`${statisticsactivek}`) & defaultplayerimg8.length, 3);
         iconclose3 = [(String.fromCharCode(88,0) == matchesW ? iconclose3.length : matchesW.length)];
         defaultplayerimg8 = `${(matchesW == String.fromCharCode(65,0) ? matchesW.length : iconclose3.length)}`;
          let next2 = 0.0;
         statisticsactivek -= parseInt(`${next2}`);
       let entryn = 1;
       let debug_ = 5;
       let greeno = String.fromCharCode(109,98,114,116,104,114,101,97,100,0);
       let predictionbannera = String.fromCharCode(112,115,100,115,112,0);
      for (let j = 0; j < 1; j++) {
         entryn ^= ((imagenetworkerrA ? 4 : 1) / (Math.max(predictionbanneri.length, 10)));
      }
      for (let m = 0; m < 3; m++) {
         debug_ |= greeno.length / (Math.max(2, 10));
      }
      if (1.68 == (4.80 + statisticsactivek)) {
         statisticsactivek -= 1;
      }
         greeno = `${1 << (Math.min(1, Math.abs(debug_)))}`;
      if (!predictionbannera.endsWith(`${imagenetworkerrA}`)) {
         imagenetworkerrA = 2 >= predictionbanneri.length;
      }
         imagenetworkerrA = !greeno.startsWith(`${statisticsactivek}`);
       let modityd = String.fromCharCode(109,105,114,114,111,114,0);
       let string1 = String.fromCharCode(119,104,97,116,0);
         predictionbannera += `${parseInt(`${statisticsactivek}`) / 2}`;
      matchinactive3 += `${(String.fromCharCode(100,0) == predictionbanneri ? (expiredi ? 2 : 4) : predictionbanneri.length)}`;
      break;
   }
      sellmathbackgroundg += `${contextx}`;
       let termsh = 2.0;
       let sentryC = 0.0;
       let foregroundy = 0.0;
      let phonee = 8451845.0 >= sentryC;
      do {
          let leaguedetailsbgZ: Array<any> = [978, 1000];
          let trashT = 0;
          let halfR = false;
          let textlayoutmanager_: Map<any, any> = new Map([[String.fromCharCode(101,120,112,114,101,115,115,105,111,110,0),String.fromCharCode(97,108,108,111,119,105,0)], [String.fromCharCode(101,95,52,95,116,105,108,101,100,0),String.fromCharCode(98,97,108,97,110,99,101,100,0)], [String.fromCharCode(117,110,97,114,99,104,105,118,101,0),String.fromCharCode(99,111,101,102,102,115,112,0)]]);
          let backgroundV = false;
         sentryC += 1 ^ parseInt(`${termsh}`);
         leaguedetailsbgZ.push(((halfR ? 1 : 5) ^ 2));
         trashT <<= Math.min(2, parseInt(`${Math.abs((leaguedetailsbgZ.length << (Math.min(5, Math.abs((halfR ? 3 : 5))))))}`));
         textlayoutmanager_.set(`${halfR}`, (trashT + (halfR ? 1 : 2)));
         backgroundV = leaguedetailsbgZ.includes(halfR);
         if (phonee) {
            break;
         }
      } while (((1.30 * sentryC) <= 3.66) && phonee);
      let androidM = 6720120.0 >= termsh;
      do {
         termsh -= parseFloat(`${1}`);
         if (androidM) {
            break;
         }
      } while (androidM && (termsh > 3.15));
      for (let g = 0; g < 3; g++) {
         termsh -= parseFloat(`${parseInt(`${foregroundy}`) ^ parseInt(`${sentryC}`)}`);
      }
         sentryC *= 1;
         sentryC += 3;
         sentryC *= parseInt(`${termsh}`) - 3;
          let t_managerg = String.fromCharCode(116,116,97,101,110,99,100,115,112,95,98,95,56,54,0);
          let delegate_qpM: Map<any, any> = new Map([[String.fromCharCode(115,112,104,101,114,105,99,97,108,0),503], [String.fromCharCode(105,110,115,101,110,115,105,116,105,118,101,0),874]]);
         termsh *= parseFloat(`${2}`);
         t_managerg = `${t_managerg.length | 3}`;
         delegate_qpM = new Map([[`${delegate_qpM.size}`, t_managerg.length + delegate_qpM.size]]);
      for (let b = 0; b < 1; b++) {
         termsh += parseFloat(`${parseInt(`${foregroundy}`) & parseInt(`${termsh}`)}`);
      }
      while ((foregroundy / (Math.max(2, 3))) == 4.63) {
         sentryC -= parseInt(`${foregroundy}`) * 1;
         break;
      }
      playlist0.push(parseInt(`${policy8}`) ^ parseInt(`${sentryC}`));
      collectionL >>= Math.min(1, parseInt(`${Math.abs(((i_animationx ? 2 : 2) % (Math.max(6, contextx))))}`));
      typingloadingp += `${1 & collectionL}`;
   while (3.34 <= (iconcurrentmatchb * 1.8) || 3.80 <= (iconcurrentmatchb * 1.8)) {
      iconcurrentmatchb += collectionL;
      break;
   }
       let volumeQ = String.fromCharCode(112,105,120,108,101,116,0);
       let codegenL = String.fromCharCode(102,111,110,116,99,111,110,102,105,103,0);
       let chinasameX: Array<any> = [144, 911];
      for (let n = 0; n < 1; n++) {
          let defaultpredictionprofilep = String.fromCharCode(104,100,115,112,0);
          let catagorya = 0.0;
          let textlayoutmanagerr: Array<any> = [488, 472, 125];
          let largesounda = 4.0;
          let dycreatoru: Array<any> = [String.fromCharCode(121,111,110,108,121,0), String.fromCharCode(99,111,109,112,111,115,101,0)];
         chinasameX = [parseInt(`${catagorya}`)];
         defaultpredictionprofilep = "2";
         catagorya *= parseFloat(`${textlayoutmanagerr.length}`);
         textlayoutmanagerr = [dycreatoru.length];
         largesounda /= Math.max(parseFloat(`${dycreatoru.length - textlayoutmanagerr.length}`), 1);
      }
       let homeplayerI = String.fromCharCode(112,105,110,115,0);
       let mutedw = String.fromCharCode(101,120,116,101,114,105,111,114,0);
      while (chinasameX.length > mutedw.length) {
         chinasameX.push(3 & chinasameX.length);
         break;
      }
         codegenL += `${(String.fromCharCode(103,0) == codegenL ? codegenL.length : mutedw.length)}`;
       let banner6: Map<any, any> = new Map([[String.fromCharCode(115,108,105,100,0),680], [String.fromCharCode(108,105,107,101,0),405]]);
          let arrowrightG = false;
          let dragr = 2.0;
          let middlebrightness0 = String.fromCharCode(99,108,97,115,115,0);
         volumeQ += `${parseInt(`${dragr}`) >> (Math.min(Math.abs(3), 3))}`;
         arrowrightG = !arrowrightG;
         dragr -= ((arrowrightG ? 3 : 3));
         middlebrightness0 = "3";
         homeplayerI += `${3 / (Math.max(3, codegenL.length))}`;
      for (let z = 0; z < 2; z++) {
         banner6 = new Map([[`${banner6.size}`, chinasameX.length / 3]]);
      }
         chinasameX = [banner6.size & 1];
      s_imageY = new Map([[codegenL, (matchinactive3 == String.fromCharCode(118,0) ? matchinactive3.length : codegenL.length)]]);

    overlayRef.current = true;
  };

  const handlePlayPause = () => {
       let awayteamfieldz = 4.0;
    let s_center6: Map<any, any> = new Map([[String.fromCharCode(101,108,101,109,101,110,116,115,0),41], [String.fromCharCode(108,105,109,105,116,115,0),585]]);
    let libavcodecL: Map<any, any> = new Map([[String.fromCharCode(119,116,118,102,105,108,101,0),321], [String.fromCharCode(103,101,116,108,97,100,100,114,115,0),551]]);
    let layoutr = String.fromCharCode(99,111,118,101,114,101,100,0);
    let detailh = String.fromCharCode(109,111,100,101,114,110,0);
    let read_ = String.fromCharCode(97,114,99,0);
    let penaltygoalD = 4.0;
    let iconeditX = 2.0;
    let basketballmatchdetailbgp: Map<any, any> = new Map([[String.fromCharCode(98,110,98,105,110,112,97,100,0),String.fromCharCode(99,101,114,116,95,115,95,49,53,0)], [String.fromCharCode(100,101,105,110,116,101,114,108,97,99,101,0),String.fromCharCode(108,105,98,120,118,105,100,0)], [String.fromCharCode(109,97,114,107,115,0),String.fromCharCode(99,111,99,111,97,0)]]);
   for (let r = 0; r < 2; r++) {
      detailh += `${detailh.length % (Math.max(6, s_center6.size))}`;
   }
   for (let u = 0; u < 1; u++) {
      iconeditX -= parseInt(`${penaltygoalD}`) / (Math.max(3, 7));
   }
      basketballmatchdetailbgp = new Map([[`${libavcodecL.size}`, 1]]);
   while ((basketballmatchdetailbgp.size ^ 2) > 4) {
      libavcodecL.set(detailh, layoutr.length);
      break;
   }
      s_center6 = new Map([[`${s_center6.size}`, s_center6.size << (Math.min(Math.abs(1), 2))]]);
       let security2 = true;
       let refreshY = 4;
       let libreactnativeblobe = String.fromCharCode(99,104,101,99,107,108,105,110,101,0);
      if (5 >= libreactnativeblobe.length) {
         libreactnativeblobe = `${refreshY ^ 3}`;
      }
       let bingV = 4.0;
      let textR = security2 ? !security2 : security2;
      do {
         security2 = ((libreactnativeblobe.length >> (Math.min(4, Math.abs((security2 ? libreactnativeblobe.length : 59))))) >= 59);
         if (textR) {
            break;
         }
      } while (textR && (!libreactnativeblobe.includes(`${security2}`)));
         libreactnativeblobe += "3";
          let react2 = String.fromCharCode(106,102,105,101,108,100,115,0);
          let iconwatchnows = String.fromCharCode(97,114,111,117,110,100,0);
         libreactnativeblobe += `${refreshY * react2.length}`;
         react2 = `${3 << (Math.min(1, iconwatchnows.length))}`;
         iconwatchnows = `${iconwatchnows.length ^ iconwatchnows.length}`;
      iconeditX -= libavcodecL.size;

    clearTimeout(iconTimer.current);

      iconeditX *= layoutr.length % (Math.max(detailh.length, 10));
       let matchv = String.fromCharCode(118,112,100,115,112,0);
       let modeE = String.fromCharCode(101,120,116,114,97,99,116,101,100,0);
         modeE = "2";
      if (matchv != String.fromCharCode(68,0) && modeE == String.fromCharCode(89,0)) {
          let reactnativeultimatelistviewl = 5;
          let hongkongY = 5;
          let greenO = String.fromCharCode(99,104,97,114,109,97,112,0);
          let root3 = 3;
         matchv = "1 & root3";
         reactnativeultimatelistviewl -= 2;
         hongkongY ^= reactnativeultimatelistviewl - hongkongY;
         greenO = `${greenO.length}`;
         root3 ^= hongkongY * greenO.length;
      }
          let langkeyw = 0.0;
         modeE = "3";
         langkeyw -= parseInt(`${langkeyw}`) - 2;
      let videovare = matchv == String.fromCharCode(116,53,48,95,118,107,52,0);
      do {
          let descH = String.fromCharCode(109,112,105,98,110,0);
          let calendary = String.fromCharCode(114,101,110,101,119,0);
          let windm: Array<any> = [522, 985];
          let values6 = String.fromCharCode(100,101,98,117,103,103,101,114,0);
         matchv += `${values6.length}`;
         descH = `${descH.length & 1}`;
         calendary += `${(String.fromCharCode(114,0) == calendary ? descH.length : calendary.length)}`;
         windm = [windm.length + 2];
         values6 += `${descH.length}`;
         if (videovare) {
            break;
         }
      } while (videovare && (4 > modeE.length));
          let defaultbasketballbgJ: Map<any, any> = new Map([[String.fromCharCode(115,109,111,111,116,104,108,121,0),511], [String.fromCharCode(98,108,111,99,107,113,117,111,116,101,0),279]]);
          let applicationS: Array<any> = [382, 350, 457];
         matchv += `${modeE.length}`;
         defaultbasketballbgJ.set(`${applicationS.length}`, applicationS.length);
      if (matchv != String.fromCharCode(107,0)) {
         modeE += `${matchv.length}`;
      }
      read_ += `${libavcodecL.size % (Math.max(1, layoutr.length))}`;
      iconeditX /= Math.max(3, basketballmatchdetailbgp.size);
   let viewerU = 7518299 >= detailh.length;
   do {
       let handler7 = String.fromCharCode(100,101,112,97,99,107,101,116,105,122,101,114,0);
         handler7 += `${handler7.length % (Math.max(7, handler7.length))}`;
      for (let g = 0; g < 1; g++) {
         handler7 += "3";
      }
      while (!handler7.includes(handler7)) {
         handler7 += "2";
         break;
      }
      detailh += `${(String.fromCharCode(89,0) == detailh ? detailh.length : s_center6.size)}`;
      if (viewerU) {
         break;
      }
   } while (viewerU && (detailh.length == parseInt(`${penaltygoalD}`)));
      penaltygoalD *= parseFloat(`${parseInt(`${awayteamfieldz}`)}`);
      iconeditX /= Math.max(1, 3);
    setShowIcon(true);

      iconeditX /= Math.max(parseInt(`${awayteamfieldz}`), 2);
       let modity8: Array<any> = [String.fromCharCode(109,101,114,103,101,114,0), String.fromCharCode(102,97,115,116,109,97,116,104,0)];
       let chartE = 3;
       let minit_jz = String.fromCharCode(104,101,97,100,101,114,0);
         chartE <<= Math.min(Math.abs(modity8.length - chartE), 3);
      let readA = modity8.length >= 7052326;
      do {
         modity8.push(chartE >> (Math.min(Math.abs(1), 3)));
         if (readA) {
            break;
         }
      } while (((modity8.length - 5) == 3 || (5 - chartE) == 4) && readA);
         modity8 = [3];
       let final_4n = 5.0;
       let iconclosewhitebgP = 2.0;
      while (modity8.includes(iconclosewhitebgP)) {
         modity8.push(modity8.length);
         break;
      }
       let videocommonR = false;
      let libreactnativejnib = iconclosewhitebgP >= 8965905.0;
      do {
         iconclosewhitebgP += modity8.length * parseInt(`${iconclosewhitebgP}`);
         if (libreactnativejnib) {
            break;
         }
      } while ((1 <= chartE) && libreactnativejnib);
      for (let z = 0; z < 3; z++) {
         chartE /= Math.max(4, minit_jz.length);
      }
      while (1 > (modity8.length + 5) && (modity8.length + chartE) > 5) {
         modity8 = [chartE ^ minit_jz.length];
         break;
      }
      read_ += `${1 ^ layoutr.length}`;
   if ((4 | basketballmatchdetailbgp.size) > 1 || 3.46 > (iconeditX - 4.39)) {
      basketballmatchdetailbgp.set(`${awayteamfieldz}`, parseInt(`${awayteamfieldz}`));
   }
   while (3 <= (s_center6.size + read_.length) && 3 <= (s_center6.size + read_.length)) {
      s_center6 = new Map([[`${iconeditX}`, parseInt(`${penaltygoalD}`) / 3]]);
      break;
   }
   for (let q = 0; q < 1; q++) {
      penaltygoalD -= parseFloat(`${parseInt(`${penaltygoalD}`) ^ read_.length}`);
   }
   let mimoQ = String.fromCharCode(50,49,48,106,121,109,54,106,102,112,0) == read_;
   do {
      read_ += `${basketballmatchdetailbgp.size}`;
      if (mimoQ) {
         break;
      }
   } while ((!read_.startsWith(`${penaltygoalD}`)) && mimoQ);
    if (isPause) {

   while (libavcodecL.get(`${iconeditX}`) != null) {
       let manifesty: Map<any, any> = new Map([[String.fromCharCode(114,101,97,115,109,0),String.fromCharCode(98,117,116,116,101,114,119,111,114,116,104,0)], [String.fromCharCode(99,111,110,116,114,97,115,116,0),String.fromCharCode(112,109,107,95,111,95,54,57,0)], [String.fromCharCode(99,117,114,115,111,114,115,0),String.fromCharCode(103,95,52,52,95,109,97,120,0)]]);
       let arrowo = String.fromCharCode(108,105,98,99,111,100,101,99,0);
          let actionsp = String.fromCharCode(97,112,112,101,114,97,110,99,101,0);
          let notificationfilledf = false;
         manifesty.set(arrowo, (String.fromCharCode(119,0) == arrowo ? arrowo.length : (notificationfilledf ? 1 : 3)));
         actionsp = `${actionsp.length}`;
         notificationfilledf = actionsp == String.fromCharCode(65,0);
       let eighteenj = 2.0;
      let predictionwinR = eighteenj >= 5637244.0;
      do {
          let penaltymatchiconM = String.fromCharCode(115,112,101,99,105,102,105,101,100,0);
          let whitevideolives = String.fromCharCode(98,108,111,99,107,100,99,0);
          let reactnativeultimatelistviewK: Array<any> = [463, 210, 428];
          let episodeS = String.fromCharCode(113,119,111,114,100,0);
         eighteenj /= Math.max(arrowo.length, 3);
         penaltymatchiconM += `${episodeS.length + reactnativeultimatelistviewK.length}`;
         whitevideolives += `${(penaltymatchiconM == String.fromCharCode(54,0) ? penaltymatchiconM.length : whitevideolives.length)}`;
         reactnativeultimatelistviewK = [(String.fromCharCode(114,0) == penaltymatchiconM ? episodeS.length : penaltymatchiconM.length)];
         if (predictionwinR) {
            break;
         }
      } while (predictionwinR && (1 > arrowo.length));
         eighteenj += 3;
       let twitterH: Map<any, any> = new Map([[String.fromCharCode(101,114,114,111,114,115,0),197], [String.fromCharCode(118,112,114,105,110,116,102,0),560]]);
       let homeactiveY: Map<any, any> = new Map([[String.fromCharCode(99,111,110,99,97,116,101,110,97,116,105,111,110,0),518], [String.fromCharCode(114,105,118,97,116,101,95,110,95,53,52,0),580]]);
       let footballtrophys: Map<any, any> = new Map([[String.fromCharCode(102,116,114,117,110,99,97,116,101,0),876], [String.fromCharCode(103,100,105,103,114,97,98,0),227]]);
      iconeditX -= 3;
      break;
   }
      libavcodecL.set(`${iconeditX}`, (String.fromCharCode(120,0) == detailh ? detailh.length : parseInt(`${iconeditX}`)));
   let playershirt3 = 9255000.0 <= awayteamfieldz;
   do {
      awayteamfieldz *= (parseFloat(`${layoutr == String.fromCharCode(75,0) ? read_.length : layoutr.length}`));
      if (playershirt3) {
         break;
      }
   } while (playershirt3 && (!read_.endsWith(`${awayteamfieldz}`)));
   let popupE = read_.length >= 9420484;
   do {
      read_ += `${(String.fromCharCode(114,0) == detailh ? parseInt(`${iconeditX}`) : detailh.length)}`;
      if (popupE) {
         break;
      }
   } while ((read_.length > 4) && popupE);
       let smallsound1 = true;
       let libjsinspectorL = 1.0;
         smallsound1 = 50.87 > libjsinspectorL && smallsound1;
          let middleN = 0;
         smallsound1 = middleN == 67;
      for (let l = 0; l < 2; l++) {
          let fullscreenmina = 3.0;
          let inouttargetyellowy = String.fromCharCode(105,110,115,116,97,110,99,101,115,0);
          let countdownD = 5.0;
          let libfbq = 4.0;
         smallsound1 = !smallsound1;
         fullscreenmina *= inouttargetyellowy.length ^ parseInt(`${fullscreenmina}`);
         inouttargetyellowy += `${parseInt(`${fullscreenmina}`)}`;
         countdownD += inouttargetyellowy.length & 1;
         libfbq /= Math.max(1, 3);
      }
         smallsound1 = !smallsound1;
      for (let e = 0; e < 3; e++) {
         libjsinspectorL += parseInt(`${libjsinspectorL}`) << (Math.min(1, Math.abs(3)));
      }
      while (smallsound1) {
         libjsinspectorL /= Math.max((parseInt(`${libjsinspectorL}`) + (smallsound1 ? 1 : 5)), 3);
         break;
      }
      awayteamfieldz *= parseFloat(`${1 >> (Math.min(4, layoutr.length))}`);
      libavcodecL.set(`${awayteamfieldz}`, parseInt(`${awayteamfieldz}`) | 2);
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = useCallback(() => {
       let banner9 = String.fromCharCode(103,117,101,115,115,0);
    let unselectedN = 5;
    let baselineo: Map<any, any> = new Map([[String.fromCharCode(100,111,117,98,108,101,105,110,116,115,116,114,0),false ], [String.fromCharCode(100,105,115,109,105,115,115,101,100,0),true ]]);
    let bottomv = 0.0;
    let notification2: Map<any, any> = new Map([[String.fromCharCode(97,98,115,120,0),36], [String.fromCharCode(112,114,105,111,114,105,116,121,113,0),993]]);
    let tempnodatagifD = String.fromCharCode(117,110,100,111,116,116,101,100,0);
    let homeplayerN = String.fromCharCode(109,105,115,115,101,115,0);
    let footballfieldz: Map<any, any> = new Map([[String.fromCharCode(115,107,101,119,101,100,95,55,95,56,57,0),124], [String.fromCharCode(116,95,52,55,95,112,108,97,99,101,104,111,108,100,101,114,115,0),890]]);
    let actions3 = 3.0;
    let questicons = false;
    let chatc = String.fromCharCode(98,97,122,101,108,0);
    let helperB = String.fromCharCode(107,101,121,115,101,116,117,112,0);
    let episodeC = true;
    let libswresample1: Map<any, any> = new Map([[String.fromCharCode(115,101,114,118,105,99,101,115,0),true ], [String.fromCharCode(111,110,116,114,111,108,0),false ]]);
   if (3 >= (4 >> (Math.min(3, banner9.length)))) {
      banner9 = "3";
   }
      unselectedN >>= Math.min(5, Math.abs(3));
       let appsN: Array<any> = [710, 107, 811];
       let canvast: Array<any> = [191, 877, 402];
       let iconsharefriendsr: Array<any> = [String.fromCharCode(108,111,119,99,111,109,112,0), String.fromCharCode(117,110,101,120,112,101,99,116,101,100,0)];
      let awayiconj = canvast.length >= 5886181;
      do {
          let libaneZ = String.fromCharCode(115,101,116,102,105,101,108,100,0);
         canvast.push(iconsharefriendsr.length);
         libaneZ += `${libaneZ.length}`;
         if (awayiconj) {
            break;
         }
      } while ((1 == (canvast.length | 1) || (canvast.length | iconsharefriendsr.length) == 1) && awayiconj);
       let debug0 = 0.0;
         iconsharefriendsr = [3 << (Math.min(5, iconsharefriendsr.length))];
      for (let w = 0; w < 3; w++) {
         iconsharefriendsr = [1];
      }
      if (2 > (4 ^ appsN.length)) {
         iconsharefriendsr = [iconsharefriendsr.length + 1];
      }
      while (iconsharefriendsr.includes(appsN.length)) {
          let libreactnativejnif = String.fromCharCode(98,97,115,101,117,114,108,0);
          let clearE = false;
         appsN.push(2);
         libreactnativejnif = `${libreactnativejnif.length}`;
         clearE = String.fromCharCode(90,0) == libreactnativejnif;
         break;
      }
         iconsharefriendsr = [parseInt(`${debug0}`)];
         appsN = [3 / (Math.max(4, parseInt(`${debug0}`)))];
      let subso = canvast.length >= 8847896;
      do {
          let mailP = 3;
          let updates2: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,101,110,116,105,110,103,0),String.fromCharCode(102,97,117,108,116,121,0)], [String.fromCharCode(98,101,108,111,110,103,0),String.fromCharCode(115,107,101,116,99,104,0)]]);
          let binddatasw = 1.0;
         canvast = [mailP << (Math.min(canvast.length, 2))];
         mailP <<= Math.min(3, Math.abs(updates2.size * parseInt(`${binddatasw}`)));
         updates2 = new Map([[`${updates2.size}`, parseInt(`${binddatasw}`) % (Math.max(updates2.size, 9))]]);
         if (subso) {
            break;
         }
      } while (subso && ((5.50 + debug0) < 1.26));
      chatc += `${banner9.length}`;
   let aboutr = chatc.length >= 5943506;
   do {
      chatc = "3";
      if (aboutr) {
         break;
      }
   } while ((homeplayerN.startsWith(chatc)) && aboutr);
       let live1 = false;
       let bangH = false;
       let pushQ = 5.0;
         live1 = bangH && 15.35 == pushQ;
          let icontransferclubX = 2;
         live1 = 55 > icontransferclubX;
      let shareblackm = live1 ? !live1 : live1;
      do {
          let codegen2 = false;
          let g_count1: Map<any, any> = new Map([[String.fromCharCode(110,111,110,122,101,114,111,0),301], [String.fromCharCode(114,101,115,116,97,107,101,0),387], [String.fromCharCode(114,101,115,105,108,105,101,110,99,101,0),496]]);
          let greyarrowupv = false;
          let crownP = String.fromCharCode(115,99,97,108,101,115,0);
         live1 = crownP.length > 59 || !live1;
         codegen2 = g_count1.get(`${greyarrowupv}`) == null;
         g_count1.set(`${codegen2}`, ((codegen2 ? 3 : 5) | (greyarrowupv ? 4 : 2)));
         crownP += "3";
         if (shareblackm) {
            break;
         }
      } while (shareblackm && (bangH));
      while (!bangH) {
         bangH = live1;
         break;
      }
         bangH = 52.10 <= pushQ || !live1;
       let commentf = 1;
      while (bangH) {
         live1 = pushQ > 29.93;
         break;
      }
          let skipN = String.fromCharCode(106,95,55,95,99,114,101,97,116,101,0);
          let manifestY: Array<any> = [String.fromCharCode(100,111,119,110,115,116,114,101,97,109,0), String.fromCharCode(121,117,121,116,111,121,118,0), String.fromCharCode(101,120,116,101,110,116,0)];
          let componentR: Array<any> = [277, 634, 880];
         live1 = commentf >= 18 && pushQ >= 11.39;
         skipN += `${skipN.length ^ 2}`;
         manifestY.push(componentR.length << (Math.min(skipN.length, 5)));
         componentR = [manifestY.length];
          let time_iZ = String.fromCharCode(98,105,116,114,97,116,101,115,0);
          let shootyesgoalz = 2.0;
          let main_mi = true;
         pushQ *= parseFloat(`${commentf - parseInt(`${pushQ}`)}`);
         time_iZ += `${((main_mi ? 1 : 3) << (Math.min(time_iZ.length, 1)))}`;
         shootyesgoalz -= parseFloat(`${2}`);
      baselineo = new Map([[`${notification2.size}`, (2 << (Math.min(5, Math.abs((questicons ? 5 : 1)))))]]);
      chatc = `${banner9.length & notification2.size}`;
   while (!homeplayerN.startsWith(`${tempnodatagifD.length}`)) {
      tempnodatagifD = `${banner9.length * chatc.length}`;
      break;
   }
      notification2 = new Map([[`${notification2.size}`, notification2.size]]);
   for (let u = 0; u < 1; u++) {
      actions3 *= parseFloat(`${homeplayerN.length}`);
   }

    

   let libavcodece = unselectedN <= 7403559;
   do {
      unselectedN &= (String.fromCharCode(120,0) == tempnodatagifD ? notification2.size : tempnodatagifD.length);
      if (libavcodece) {
         break;
      }
   } while (libavcodece && ((notification2.size - 2) == 5 || (unselectedN - 2) == 3));
   if (homeplayerN != banner9) {
       let predictionbuttont = String.fromCharCode(115,116,97,116,105,115,116,105,99,0);
       let subtextE = 0.0;
       let smallorangemane: Map<any, any> = new Map([[String.fromCharCode(101,118,105,99,116,105,111,110,0),951], [String.fromCharCode(119,122,97,101,115,0),948], [String.fromCharCode(114,97,110,107,0),161]]);
       let taiwanm: Map<any, any> = new Map([[String.fromCharCode(115,116,114,110,115,116,114,0),476], [String.fromCharCode(109,97,116,114,105,99,101,115,0),639]]);
          let privatechatbg8 = true;
          let ajaxt = String.fromCharCode(107,95,49,57,95,109,105,99,114,111,115,111,102,116,0);
         taiwanm.set(predictionbuttont, 2 | predictionbuttont.length);
         privatechatbg8 = !privatechatbg8 && ajaxt.length < 49;
         ajaxt += `${ajaxt.length & 2}`;
      if (Array.from(taiwanm.keys()).includes(`${subtextE}`)) {
          let viewerr = String.fromCharCode(104,108,105,110,101,0);
          let fulld = String.fromCharCode(101,120,99,108,117,100,101,0);
          let videovarZ = String.fromCharCode(111,100,97,116,97,0);
          let dicelogo0 = 2;
          let reducero = String.fromCharCode(112,108,111,116,116,101,114,0);
         taiwanm.set(`${subtextE}`, taiwanm.size >> (Math.min(Math.abs(3), 3)));
         viewerr = `${viewerr.length + reducero.length}`;
         fulld += `${videovarZ.length}`;
         videovarZ = `${2 / (Math.max(7, dicelogo0))}`;
         dicelogo0 %= Math.max((viewerr == String.fromCharCode(103,0) ? viewerr.length : fulld.length), 4);
         reducero += "2";
      }
      let unselected5 = smallorangemane.size >= 7787870;
      do {
         smallorangemane.set(`${subtextE}`, 2);
         if (unselected5) {
            break;
         }
      } while ((smallorangemane.get(`${taiwanm.size}`) != null) && unselected5);
          let basketballhometeam6: Array<any> = [980, 822];
          let goall: Array<any> = [420, 369, 961];
         smallorangemane = new Map([[`${goall.length}`, goall.length % (Math.max(predictionbuttont.length, 3))]]);
         basketballhometeam6 = [basketballhometeam6.length];
         subtextE /= Math.max(3, parseInt(`${subtextE}`) | 2);
          let sliderp = String.fromCharCode(97,99,116,105,111,110,0);
         predictionbuttont += "1";
         sliderp += `${sliderp.length ^ 1}`;
      for (let j = 0; j < 2; j++) {
         subtextE *= smallorangemane.size >> (Math.min(predictionbuttont.length, 1));
      }
         predictionbuttont += `${taiwanm.size}`;
      if ((predictionbuttont.length - 2) >= 1 && (2 | predictionbuttont.length) >= 1) {
         subtextE /= Math.max(taiwanm.size * smallorangemane.size, 2);
      }
         smallorangemane.set(predictionbuttont, predictionbuttont.length);
       let fcdaebecbcbafcdfceaaeccfeacdbT = 2;
       let disconnectedlogou = 0;
      while (5 <= disconnectedlogou) {
         disconnectedlogou += 1;
         break;
      }
      banner9 += `${taiwanm.size - 2}`;
   }
   for (let t = 0; t < 2; t++) {
      footballfieldz = new Map([[`${questicons}`, 2]]);
   }
      helperB = `${2 + helperB.length}`;
   for (let a = 0; a < 3; a++) {
      unselectedN %= Math.max(tempnodatagifD.length, 4);
   }
   for (let x = 0; x < 3; x++) {
       let small5 = 3.0;
       let iconbella = 2;
       let canvask = false;
       let icontransferclubM = String.fromCharCode(105,109,108,116,0);
      for (let g = 0; g < 1; g++) {
         iconbella <<= Math.min(5, Math.abs(((canvask ? 4 : 3) ^ icontransferclubM.length)));
      }
      let static_fh = String.fromCharCode(102,48,121,108,115,57,97,56,50,0) == icontransferclubM;
      do {
          let classesJ = String.fromCharCode(116,104,105,115,0);
          let debugu = false;
          let libflipperH = 3.0;
          let leaguedetailsbgu = 4.0;
         icontransferclubM = `${((debugu ? 1 : 4) / (Math.max(parseInt(`${libflipperH}`), 9)))}`;
         classesJ += "3";
         debugu = 53.29 == leaguedetailsbgu || String.fromCharCode(80,0) == classesJ;
         libflipperH -= parseFloat(`${3}`);
         leaguedetailsbgu -= parseFloat(`${classesJ.length ^ parseInt(`${leaguedetailsbgu}`)}`);
         if (static_fh) {
            break;
         }
      } while ((small5 <= 2.62) && static_fh);
      let roomC = 5666437 <= iconbella;
      do {
         iconbella += parseInt(`${small5}`) % (Math.max(icontransferclubM.length, 9));
         if (roomC) {
            break;
         }
      } while ((3 < (icontransferclubM.length % (Math.max(4, iconbella)))) && roomC);
          let placeholder6 = String.fromCharCode(101,120,116,101,114,110,0);
          let neonH = 5;
         canvask = placeholder6.startsWith(`${neonH}`);
      while (small5 == 3.56) {
         canvask = !canvask;
         break;
      }
      for (let z = 0; z < 1; z++) {
         iconbella ^= icontransferclubM.length | 2;
      }
         small5 += parseFloat(`${icontransferclubM.length << (Math.min(Math.abs(2), 3))}`);
      if (icontransferclubM.startsWith(`${canvask}`)) {
         canvask = icontransferclubM.length <= 88;
      }
      if (1 == (parseInt(`${small5}`) - iconbella) && (iconbella - parseInt(`${small5}`)) == 1) {
         iconbella *= (String.fromCharCode(53,0) == icontransferclubM ? (canvask ? 1 : 2) : icontransferclubM.length);
      }
      if (3 <= (icontransferclubM.length * 3)) {
         small5 *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${small5}`)), 4))}`);
      }
       let left0 = String.fromCharCode(110,97,108,115,0);
       let searchbar0 = 3.0;
       let icondownimgS = 5.0;
      helperB += `${3 & unselectedN}`;
   }
       let downarrowk = String.fromCharCode(115,116,97,110,100,97,108,111,110,101,0);
       let issubw: Array<any> = [202, 265, 468];
       let paginationQ: Array<any> = [864, 30];
         issubw = [issubw.length];
         issubw.push(1 % (Math.max(1, issubw.length)));
      let inactive_ = 5410176 >= paginationQ.length;
      do {
         paginationQ = [2];
         if (inactive_) {
            break;
         }
      } while (inactive_ && (4 == (3 << (Math.min(5, downarrowk.length)))));
          let nterstitialG = String.fromCharCode(109,97,112,102,105,108,101,0);
          let iconnewssharek = String.fromCharCode(98,101,108,111,119,0);
         issubw = [(iconnewssharek == String.fromCharCode(85,0) ? iconnewssharek.length : downarrowk.length)];
         nterstitialG = `${nterstitialG.length}`;
         paginationQ.push(paginationQ.length << (Math.min(downarrowk.length, 1)));
       let libffmpegkitD = String.fromCharCode(105,115,116,114,101,97,109,119,114,97,112,112,101,114,0);
       let moonN = String.fromCharCode(102,112,99,0);
      while (4 >= (1 & libffmpegkitD.length) && 1 >= (paginationQ.length & libffmpegkitD.length)) {
         libffmpegkitD += `${issubw.length}`;
         break;
      }
         libffmpegkitD += `${issubw.length}`;
      if (3 <= (1 * issubw.length)) {
         paginationQ = [paginationQ.length];
      }
      banner9 = `${baselineo.size + 1}`;
      tempnodatagifD = `${homeplayerN.length}`;
      homeplayerN = `${3 + footballfieldz.size}`;
    

   while (helperB.length <= 2 && banner9.length <= 2) {
      banner9 = `${(parseInt(`${bottomv}`) | (questicons ? 3 : 5))}`;
      break;
   }
      homeplayerN = `${3 | footballfieldz.size}`;
   for (let g = 0; g < 3; g++) {
      footballfieldz = new Map([[helperB, chatc.length]]);
   }
       let eyeclosew = 1.0;
       let caste: Map<any, any> = new Map([[String.fromCharCode(108,101,118,101,108,115,0),234], [String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,0),386]]);
       let chinaY: Map<any, any> = new Map([[String.fromCharCode(115,111,99,107,0),847], [String.fromCharCode(100,100,118,97,0),136], [String.fromCharCode(103,114,97,98,0),340]]);
      while ((caste.size | chinaY.size) >= 4 || (caste.size | chinaY.size) >= 4) {
         chinaY = new Map([[`${caste.size}`, parseInt(`${eyeclosew}`)]]);
         break;
      }
      while (eyeclosew >= parseFloat(`${caste.size}`)) {
          let loadingY: Map<any, any> = new Map([[String.fromCharCode(115,117,98,112,111,105,110,116,0),437], [String.fromCharCode(100,111,117,103,108,97,115,0),716], [String.fromCharCode(97,118,102,114,97,109,101,0),285]]);
          let elementst = String.fromCharCode(100,101,113,117,101,117,101,0);
          let yellowtoredL: Array<any> = [String.fromCharCode(112,101,114,109,101,97,116,101,0), String.fromCharCode(100,99,116,120,100,99,0)];
          let rootr = String.fromCharCode(98,111,100,121,0);
          let nativeh: Array<any> = [245, 397];
         caste = new Map([[`${nativeh.length}`, 1]]);
         loadingY.set(rootr, 3 * yellowtoredL.length);
         elementst = `${elementst.length}`;
         yellowtoredL = [yellowtoredL.length];
         rootr = `${elementst.length}`;
         nativeh.push(3 - yellowtoredL.length);
         break;
      }
      unselectedN &= 1;
   while (footballfieldz.get(`${notification2.size}`) == null) {
       let footballJ: Map<any, any> = new Map([[String.fromCharCode(114,114,116,114,0),true ], [String.fromCharCode(117,110,116,114,117,115,116,101,100,0),false ], [String.fromCharCode(100,97,116,97,98,97,115,101,0),true ]]);
       let circleM = 0.0;
       let whitevideoliveZ = 1.0;
       let fcdaebecbcbafcdfceaaeccfeacdbi: Map<any, any> = new Map([[String.fromCharCode(115,97,118,101,0),true ], [String.fromCharCode(108,111,116,116,105,101,107,101,121,112,97,116,104,0),true ], [String.fromCharCode(97,117,116,111,100,101,116,101,99,116,105,111,110,0),true ]]);
       let customJ = false;
          let yellowvideoliveF: Map<any, any> = new Map([[String.fromCharCode(115,112,101,97,107,101,114,0),String.fromCharCode(115,112,108,105,116,109,118,115,0)], [String.fromCharCode(102,105,114,101,0),String.fromCharCode(111,112,116,105,109,105,122,101,100,95,103,95,52,51,0)]]);
          let libloggern = true;
         whitevideoliveZ *= ((customJ ? 3 : 3) << (Math.min(Math.abs(footballJ.size), 1)));
         yellowvideoliveF = new Map([[`${yellowvideoliveF.size}`, 1 ^ yellowvideoliveF.size]]);
         libloggern = yellowvideoliveF.size >= 96;
       let emptyC = String.fromCharCode(114,97,110,107,115,0);
          let assets9: Array<any> = [String.fromCharCode(99,97,108,99,119,0), String.fromCharCode(112,114,101,104,101,97,116,0), String.fromCharCode(100,115,116,0)];
         emptyC += `${((customJ ? 2 : 5))}`;
         assets9.push(assets9.length);
       let saveq = 2;
       let register_qm = 2;
      if (1 < (2 << (Math.min(4, Math.abs(footballJ.size)))) && customJ) {
          let iconnointernetj = false;
          let catalog6 = String.fromCharCode(115,105,116,101,0);
         customJ = circleM < whitevideoliveZ;
         iconnointernetj = (((iconnointernetj ? 3 : catalog6.length) ^ catalog6.length) == 3);
      }
      if ((circleM / 3.51) >= 2.86 || customJ) {
          let fullscreenmaxX = 3.0;
          let mapbufferp = true;
         customJ = footballJ.size < register_qm;
         fullscreenmaxX -= ((mapbufferp ? 5 : 4) % (Math.max(parseInt(`${fullscreenmaxX}`), 7)));
         mapbufferp = 52.57 >= fullscreenmaxX;
      }
      if (2.68 <= (whitevideoliveZ * 3.83) || 3.83 <= whitevideoliveZ) {
         whitevideoliveZ += footballJ.size;
      }
      let unselectedQ = 5106768 >= fcdaebecbcbafcdfceaaeccfeacdbi.size;
      do {
         fcdaebecbcbafcdfceaaeccfeacdbi.set(`${circleM}`, 2);
         if (unselectedQ) {
            break;
         }
      } while (unselectedQ && (fcdaebecbcbafcdfceaaeccfeacdbi.get(`${footballJ.size}`) != null));
      if (saveq < emptyC.length) {
         saveq %= Math.max(5, saveq);
      }
      for (let i = 0; i < 1; i++) {
         whitevideoliveZ *= parseInt(`${circleM}`) << (Math.min(4, Math.abs(2)));
      }
      if (!customJ) {
         footballJ = new Map([[emptyC, emptyC.length]]);
      }
      while (1 < (register_qm / 5) || register_qm < 5) {
         customJ = !customJ;
         break;
      }
      let changew = 9784588.0 <= circleM;
      do {
         circleM *= register_qm / (Math.max(2, saveq));
         if (changew) {
            break;
         }
      } while (changew && (3.65 >= (5.98 - circleM) && 2.8 >= (circleM - 5.98)));
          let tickL = String.fromCharCode(109,105,115,115,105,110,103,0);
          let video1 = String.fromCharCode(100,110,120,104,100,100,97,116,97,0);
          let commentM: Map<any, any> = new Map([[String.fromCharCode(116,121,112,101,115,0),true ], [String.fromCharCode(109,118,101,120,0),true ]]);
         customJ = circleM <= 92.58 && saveq <= 13;
         tickL += "1";
         video1 = `${video1.length ^ 2}`;
         commentM = new Map([[tickL, 1]]);
         whitevideoliveZ -= parseInt(`${circleM}`) ^ footballJ.size;
      footballfieldz.set(`${actions3}`, parseInt(`${actions3}`) | tempnodatagifD.length);
      break;
   }
   while (helperB.includes(homeplayerN)) {
      homeplayerN = `${(helperB == String.fromCharCode(76,0) ? baselineo.size : helperB.length)}`;
      break;
   }
      banner9 = `${unselectedN * 2}`;
   while (footballfieldz.size < banner9.length) {
      footballfieldz.set(helperB, (String.fromCharCode(107,0) == helperB ? tempnodatagifD.length : helperB.length));
      break;
   }
      banner9 += `${helperB.length}`;
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
    wawa_dacccfaabfbcbadeebddcabacdffdbc_video.watchAnytimeAdsViewAnalytics({
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
       let n_imagem = 5.0;
    let unimplementedviewM = String.fromCharCode(109,97,110,117,97,108,108,121,0);
    let yellowtoredR = String.fromCharCode(107,95,53,50,95,102,111,114,101,104,101,97,100,0);
    let ewardedr = false;
    let predictionn = true;
    let shared_ = 5.0;
    let subse = String.fromCharCode(105,108,111,103,0);
    let sellmathbackgroundI = String.fromCharCode(108,105,98,110,100,105,95,50,95,53,49,0);
    let update_wE = String.fromCharCode(109,118,115,101,116,0);
    let foregroundX: Array<any> = [259, 219, 696];
    let libmapbufferjniF = String.fromCharCode(118,111,114,98,105,115,100,115,112,0);
    let imagenomoredatal = 4.0;
    let defaultfootballbg1: Map<any, any> = new Map([[String.fromCharCode(116,111,103,103,108,101,0),69], [String.fromCharCode(115,105,102,116,0),688], [String.fromCharCode(99,111,110,100,117,99,116,111,114,0),745]]);
    let searchz = 1.0;
    let libfolly7 = String.fromCharCode(112,111,108,105,99,121,0);
   for (let d = 0; d < 2; d++) {
      predictionn = !sellmathbackgroundI.endsWith(`${predictionn}`);
   }
      ewardedr = 68.86 == shared_;

      if ((isPause === true || isBuffering === true) && currentDuration < 1) {

   while (1.65 == (1.51 - shared_)) {
      predictionn = !predictionn;
      break;
   }
   while (2 > subse.length) {
       let yellowscoreballF: Array<any> = [525, 472];
       let package_w2U = true;
      if (package_w2U) {
         yellowscoreballF = [(3 >> (Math.min(1, Math.abs((package_w2U ? 4 : 1)))))];
      }
          let iconeditv = String.fromCharCode(115,101,112,97,114,97,116,111,114,115,95,51,95,51,54,0);
         package_w2U = (yellowscoreballF.length >> (Math.min(iconeditv.length, 4))) == 82;
         yellowscoreballF = [yellowscoreballF.length];
         yellowscoreballF = [2 | yellowscoreballF.length];
          let predictionarrow6 = String.fromCharCode(116,111,97,115,116,0);
          let shrinkL = 5;
         package_w2U = !package_w2U;
         predictionarrow6 = `${shrinkL}`;
         shrinkL *= (String.fromCharCode(98,0) == predictionarrow6 ? predictionarrow6.length : shrinkL);
      if (!package_w2U) {
         package_w2U = yellowscoreballF.length < 68;
      }
      subse = `${1 / (Math.max(8, yellowscoreballF.length))}`;
      break;
   }
        

   for (let o = 0; o < 2; o++) {
      ewardedr = shared_ >= 76.75;
   }
      yellowtoredR += `${(subse.length ^ (predictionn ? 1 : 2))}`;
        

   for (let w = 0; w < 3; w++) {
      update_wE = `${(unimplementedviewM == String.fromCharCode(70,0) ? unimplementedviewM.length : (predictionn ? 1 : 5))}`;
   }
   for (let k = 0; k < 2; k++) {
       let strt = 1.0;
          let neonD: Map<any, any> = new Map([[String.fromCharCode(104,105,100,105,110,103,0),true ], [String.fromCharCode(99,104,114,111,109,105,117,109,0),false ], [String.fromCharCode(113,117,97,110,116,105,122,101,114,0),true ]]);
          let nbatrophy9 = String.fromCharCode(108,101,97,121,0);
          let mutedZ = String.fromCharCode(117,110,97,114,99,104,105,118,101,100,0);
         strt *= parseFloat(`${3 - neonD.size}`);
         neonD.set(mutedZ, mutedZ.length);
         nbatrophy9 += `${mutedZ.length >> (Math.min(Math.abs(2), 3))}`;
      for (let y = 0; y < 3; y++) {
          let zhengpianM = 2.0;
          let networkC = String.fromCharCode(108,111,99,105,0);
          let ajaxQ = 3.0;
          let headerd = String.fromCharCode(100,101,99,111,100,101,114,105,110,105,116,0);
         strt /= Math.max(1, parseFloat(`${1 * parseInt(`${strt}`)}`));
         zhengpianM += parseFloat(`${2}`);
         networkC = `${headerd.length}`;
         ajaxQ *= parseFloat(`${parseInt(`${zhengpianM}`) >> (Math.min(networkC.length, 5))}`);
         headerd = `${parseInt(`${ajaxQ}`) >> (Math.min(Math.abs(1), 1))}`;
      }
         strt += parseFloat(`${parseInt(`${strt}`) | parseInt(`${strt}`)}`);
      yellowtoredR += `${((predictionn ? 4 : 3) * parseInt(`${n_imagem}`))}`;
   }
        

       let libcrashsdkS: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,110,117,109,0),956], [String.fromCharCode(116,102,120,100,0),818]]);
      for (let y = 0; y < 2; y++) {
         libcrashsdkS.set(`${libcrashsdkS.size}`, libcrashsdkS.size);
      }
         libcrashsdkS.set(`${libcrashsdkS.size}`, libcrashsdkS.size % (Math.max(9, libcrashsdkS.size)));
      if (2 <= libcrashsdkS.size) {
         libcrashsdkS = new Map([[`${libcrashsdkS.size}`, libcrashsdkS.size]]);
      }
      n_imagem -= sellmathbackgroundI.length;
   while (subse.length <= 1 || unimplementedviewM != String.fromCharCode(98,0)) {
       let line6 = String.fromCharCode(99,111,109,112,111,115,101,105,0);
       let shielddone4 = 0;
       let subout9 = String.fromCharCode(109,97,107,101,102,105,108,101,0);
       let commonZ: Map<any, any> = new Map([[String.fromCharCode(115,109,112,116,101,0),899], [String.fromCharCode(109,98,115,101,103,109,101,110,116,97,116,105,111,110,0),771], [String.fromCharCode(107,101,114,110,101,100,0),388]]);
       let promotionk = 2.0;
      if (commonZ.size <= 2) {
         commonZ.set(subout9, commonZ.size);
      }
      let elementss = 9611782.0 >= promotionk;
      do {
          let cornerkickH = String.fromCharCode(102,97,110,116,111,109,0);
          let forwarda = String.fromCharCode(97,117,116,111,97,114,99,104,105,118,101,95,48,95,53,51,0);
          let circleL = String.fromCharCode(102,105,120,116,117,114,101,0);
          let long_myc: Map<any, any> = new Map([[String.fromCharCode(112,97,114,97,108,108,101,108,0),String.fromCharCode(114,101,99,111,109,109,101,110,100,0)], [String.fromCharCode(115,97,118,105,110,103,115,0),String.fromCharCode(110,95,50,50,95,98,105,108,105,110,0)]]);
         promotionk *= parseFloat(`${cornerkickH.length ^ parseInt(`${promotionk}`)}`);
         cornerkickH += `${long_myc.size / (Math.max(circleL.length, 3))}`;
         forwarda += `${long_myc.size | circleL.length}`;
         if (elementss) {
            break;
         }
      } while ((2 <= (1 | commonZ.size) || 3 <= (commonZ.size << (Math.min(Math.abs(1), 5)))) && elementss);
         commonZ.set(subout9, (subout9 == String.fromCharCode(89,0) ? parseInt(`${promotionk}`) : subout9.length));
          let profileinactiveT = 5;
          let valuesb = 1.0;
          let exampleimageg = 2.0;
         shielddone4 -= commonZ.size - 2;
         profileinactiveT += 2;
         valuesb /= Math.max(parseFloat(`${2 | parseInt(`${valuesb}`)}`), 3);
         exampleimageg += parseFloat(`${3}`);
      let homeloading1 = promotionk >= 9291954.0;
      do {
         promotionk += parseFloat(`${subout9.length}`);
         if (homeloading1) {
            break;
         }
      } while ((3 <= (1 << (Math.min(3, Math.abs(shielddone4))))) && homeloading1);
         commonZ.set(`${promotionk}`, 3 >> (Math.min(5, Math.abs(commonZ.size))));
         line6 = `${(String.fromCharCode(115,0) == subout9 ? commonZ.size : subout9.length)}`;
      if ((subout9.length / 2) <= 3 || 4 <= (shielddone4 / 2)) {
         shielddone4 += shielddone4 / (Math.max(2, 2));
      }
          let otheri = 1.0;
          let gradlewp: Array<any> = [String.fromCharCode(116,105,109,101,111,117,116,101,100,0), String.fromCharCode(115,108,105,100,101,114,0), String.fromCharCode(112,97,114,109,115,0)];
         line6 += `${parseInt(`${promotionk}`)}`;
         otheri -= parseFloat(`${gradlewp.length}`);
         gradlewp.push(parseInt(`${otheri}`) % 3);
      if (subout9.length == 1) {
         subout9 = `${line6.length / 1}`;
      }
      if ((5 - subout9.length) >= 1 && 5 >= (commonZ.size - subout9.length)) {
         subout9 += `${(String.fromCharCode(50,0) == subout9 ? subout9.length : shielddone4)}`;
      }
      subse = `${update_wE.length}`;
      break;
   }

        const fileLocation =
          RNFetchBlob.fs.dirs.DocumentDir +
          `/videocache/${currentVod.mini_video_id}.mp4`;

       let eventS: Map<any, any> = new Map([[String.fromCharCode(97,110,99,104,111,114,105,110,103,0),15], [String.fromCharCode(101,109,112,105,114,105,99,97,108,108,121,0),934]]);
       let defaultlogoR: Map<any, any> = new Map([[String.fromCharCode(101,121,101,100,114,111,112,112,101,114,0),false ], [String.fromCharCode(112,101,114,109,105,115,115,105,111,110,115,0),false ]]);
       let iconQ = 2.0;
       let mbsplashw = 4.0;
         eventS = new Map([[`${mbsplashw}`, 1]]);
         mbsplashw -= 1;
      for (let p = 0; p < 1; p++) {
         defaultlogoR.set(`${defaultlogoR.size}`, defaultlogoR.size);
      }
      for (let i = 0; i < 1; i++) {
          let goallogoy = 3;
          let giflivestreamingM = 3;
         iconQ += parseFloat(`${giflivestreamingM + 2}`);
         goallogoy *= 2 - goallogoy;
         giflivestreamingM |= 2;
      }
      let issubg = mbsplashw >= 6746812.0;
      do {
          let textlayoutmanagerr = true;
          let dangert = String.fromCharCode(108,111,97,116,0);
         mbsplashw /= Math.max(2, parseInt(`${iconQ}`) % (Math.max(1, 8)));
         textlayoutmanagerr = textlayoutmanagerr && dangert.length < 55;
         dangert += `${(String.fromCharCode(99,0) == dangert ? dangert.length : (textlayoutmanagerr ? 1 : 4))}`;
         if (issubg) {
            break;
         }
      } while (issubg && ((mbsplashw * 1.54) >= 3.15));
         mbsplashw *= parseInt(`${iconQ}`) ^ 1;
          let robotot = 2;
          let baidux: Array<any> = [String.fromCharCode(99,97,115,116,115,0), String.fromCharCode(108,105,98,115,97,109,112,108,101,0)];
          let cancelb = 2.0;
         eventS.set(`${baidux.length}`, 3);
         robotot |= parseInt(`${cancelb}`);
         baidux = [parseInt(`${cancelb}`) ^ 2];
      while ((2.15 + mbsplashw) <= 1.96 && (defaultlogoR.size + parseInt(`${mbsplashw}`)) <= 3) {
          let castC = false;
         defaultlogoR.set(`${castC}`, ((castC ? 5 : 1) ^ defaultlogoR.size));
         break;
      }
      foregroundX = [2 << (Math.min(4, subse.length))];
      libmapbufferjniF = `${update_wE.length}`;

        const fileExist = await RNFetchBlob.fs.exists(fileLocation);

      subse += `${yellowtoredR.length << (Math.min(Math.abs(2), 4))}`;
   if (3.72 > (4.14 * n_imagem) && 4.14 > (subse.length * n_imagem)) {
      subse += `${(String.fromCharCode(122,0) == sellmathbackgroundI ? (predictionn ? 1 : 5) : sellmathbackgroundI.length)}`;
   }

        if (fileExist) {

   for (let q = 0; q < 3; q++) {
      foregroundX = [3];
   }
      subse = `${(update_wE == String.fromCharCode(77,0) ? update_wE.length : foregroundX.length)}`;
          const fileIsEmpty =
            (await RNFetchBlob.fs.stat(fileLocation)).size == 0;

      ewardedr = subse.startsWith(`${predictionn}`);
   let file9 = update_wE.length >= 5480396;
   do {
      update_wE = `${parseInt(`${n_imagem}`)}`;
      if (file9) {
         break;
      }
   } while ((update_wE.length <= 4) && file9);
          

   let i_playerY = 5567145 >= update_wE.length;
   do {
       let shareb = String.fromCharCode(112,114,111,112,111,115,101,100,0);
       let recommendationN = String.fromCharCode(104,113,100,110,100,0);
       let windV = 4.0;
       let floaterT = true;
       let crownm: Array<any> = [String.fromCharCode(105,110,111,100,101,115,0), String.fromCharCode(115,101,103,109,101,110,116,115,0)];
         recommendationN = `${(1 | (floaterT ? 5 : 2))}`;
      while (shareb.length <= 3) {
         shareb = `${crownm.length}`;
         break;
      }
         shareb = "2";
      for (let d = 0; d < 3; d++) {
         crownm.push(3 | recommendationN.length);
      }
      while (recommendationN == String.fromCharCode(52,0) && 3 >= shareb.length) {
         recommendationN += `${(String.fromCharCode(69,0) == recommendationN ? recommendationN.length : (floaterT ? 5 : 4))}`;
         break;
      }
         floaterT = crownm.includes(windV);
       let saveo = String.fromCharCode(115,99,104,101,109,97,115,95,119,95,57,50,0);
       let yellowcirclebgx = String.fromCharCode(115,104,97,114,100,0);
      if (3 > (recommendationN.length >> (Math.min(3, crownm.length))) || 3 > (crownm.length >> (Math.min(recommendationN.length, 2)))) {
          let defaultbasketballbg7 = String.fromCharCode(114,101,99,101,112,116,105,111,110,0);
          let lightJ = true;
          let expandN = false;
         crownm = [(2 * (floaterT ? 5 : 1))];
         defaultbasketballbg7 = "3";
         lightJ = ((defaultbasketballbg7.length >> (Math.min(5, Math.abs((!lightJ ? defaultbasketballbg7.length : 47))))) < 47);
         expandN = defaultbasketballbg7.includes(`${lightJ}`);
      }
         recommendationN = `${saveo.length ^ 2}`;
      while (2 == (3 * parseInt(`${windV}`)) || (3 + shareb.length) == 4) {
         windV /= Math.max(3, ((floaterT ? 2 : 4) * recommendationN.length));
         break;
      }
      for (let y = 0; y < 3; y++) {
         recommendationN += `${(recommendationN == String.fromCharCode(48,0) ? shareb.length : recommendationN.length)}`;
      }
      let bootsplashY = saveo.length >= 9168734;
      do {
         saveo += "2";
         if (bootsplashY) {
            break;
         }
      } while ((saveo.length > crownm.length) && bootsplashY);
          let awayiconY: Array<any> = [String.fromCharCode(108,111,111,112,0), String.fromCharCode(112,114,101,105,110,105,116,0), String.fromCharCode(115,117,98,108,97,121,111,117,116,0)];
         windV += 1 - parseInt(`${windV}`);
         awayiconY = [2 * awayiconY.length];
      let libturbomodulejsijnih = saveo.length >= 9338031;
      do {
          let backwhiteY = 0;
         saveo = `${1 - backwhiteY}`;
         if (libturbomodulejsijnih) {
            break;
         }
      } while (libturbomodulejsijnih && (shareb == String.fromCharCode(72,0)));
      if (floaterT || 4 < saveo.length) {
          let nterstitial_ = false;
          let turn5 = 4.0;
          let matchdetailbgk = String.fromCharCode(109,111,99,107,105,110,103,95,117,95,56,50,0);
          let promotionC = String.fromCharCode(103,95,55,0);
          let imagemanagerV: Array<any> = [150, 118];
         saveo += "3";
         nterstitial_ = 59 < promotionC.length && 59 < imagemanagerV.length;
         turn5 += matchdetailbgk.length - promotionC.length;
         matchdetailbgk = `${matchdetailbgk.length}`;
         imagemanagerV.push(matchdetailbgk.length);
      }
      update_wE += `${(String.fromCharCode(104,0) == recommendationN ? recommendationN.length : libmapbufferjniF.length)}`;
      if (i_playerY) {
         break;
      }
   } while (i_playerY && (sellmathbackgroundI == update_wE));
   for (let q = 0; q < 3; q++) {
      imagenomoredatal += ((predictionn ? 5 : 3) / (Math.max(3, 10)));
   }
          if (!fileIsEmpty) {

      foregroundX.push((parseInt(`${shared_}`) % (Math.max(10, (predictionn ? 4 : 2)))));
      unimplementedviewM = `${parseInt(`${shared_}`) ^ subse.length}`;
            setMiniVodUrl(`${fileLocation}`);
          } else {

   let penaltymatchiconc = 9398115 <= yellowtoredR.length;
   do {
      yellowtoredR = `${foregroundX.length}`;
      if (penaltymatchiconc) {
         break;
      }
   } while ((4 <= yellowtoredR.length) && penaltymatchiconc);
      n_imagem /= Math.max(foregroundX.length, 2);
            

      yellowtoredR += `${yellowtoredR.length ^ 1}`;
      predictionn = libmapbufferjniF.length <= 1;
            setMiniVodUrl(currentVod.ads_pic);
          }
        } else {

   let basketballawayteamP = ewardedr ? !ewardedr : ewardedr;
   do {
      ewardedr = !unimplementedviewM.endsWith(`${ewardedr}`);
      if (basketballawayteamP) {
         break;
      }
   } while ((ewardedr) && basketballawayteamP);
      shared_ *= parseFloat(`${subse.length ^ 3}`);
          

      yellowtoredR += `${unimplementedviewM.length}`;
   for (let l = 0; l < 1; l++) {
       let eactA = String.fromCharCode(115,109,97,108,108,0);
      for (let t = 0; t < 2; t++) {
         eactA += `${eactA.length * 1}`;
      }
         eactA += `${eactA.length % (Math.max(1, 9))}`;
         eactA = `${eactA.length ^ 2}`;
      predictionn = (update_wE.length >> (Math.min(sellmathbackgroundI.length, 4))) <= 23;
   }
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
       let libreactperfloggerjniD: Array<any> = [256, 641, 621];
    let reactnativeultimatelistview_ = String.fromCharCode(105,109,103,117,116,105,108,115,0);
    let penaltyshootnogoali: Array<any> = [998, 523, 802];
    let attributedstringa = String.fromCharCode(112,97,99,107,101,116,105,122,101,114,0);
    let k_view0 = false;
    let videobufferloadingl = false;
    let libmapbufferjni7 = 2;
   for (let f = 0; f < 2; f++) {
       let flyerx = String.fromCharCode(99,109,105,111,0);
       let iconnointernetF = 4.0;
       let iconorientation1 = 1.0;
       let eactL = String.fromCharCode(108,95,53,51,95,118,101,114,105,102,105,97,98,108,101,0);
       let binddatasr = String.fromCharCode(109,99,111,109,112,97,110,100,0);
         flyerx += `${1 - parseInt(`${iconnointernetF}`)}`;
      while ((2.0 + iconorientation1) <= 1.95 && (2.0 + iconorientation1) <= 1.74) {
         iconorientation1 *= 3;
         break;
      }
         flyerx = `${parseInt(`${iconnointernetF}`) >> (Math.min(flyerx.length, 3))}`;
      while (parseInt(`${iconnointernetF}`) == binddatasr.length) {
         binddatasr = `${parseInt(`${iconnointernetF}`) + 1}`;
         break;
      }
         eactL += `${eactL.length % (Math.max(1, 2))}`;
         binddatasr = "1";
          let contextf = String.fromCharCode(110,111,99,104,101,99,107,0);
          let phoner = 5.0;
         binddatasr += `${parseInt(`${iconnointernetF}`) - 1}`;
         contextf = "1";
         phoner *= 2 - contextf.length;
       let casting4 = String.fromCharCode(103,95,53,53,95,109,111,100,105,102,121,0);
         iconorientation1 *= flyerx.length ^ 2;
         iconorientation1 *= eactL.length % 1;
      if ((parseInt(`${iconnointernetF}`) * 4) == 2 && 2.5 == (4.28 * iconnointernetF)) {
         iconnointernetF -= (parseFloat(`${String.fromCharCode(100,0) == flyerx ? parseInt(`${iconnointernetF}`) : flyerx.length}`));
      }
       let leakcheckerX = String.fromCharCode(115,105,110,101,115,0);
       let appleS = String.fromCharCode(117,112,118,112,0);
      for (let v = 0; v < 3; v++) {
         casting4 = `${appleS.length}`;
      }
      for (let c = 0; c < 2; c++) {
         iconnointernetF /= Math.max(parseFloat(`${1}`), 1);
      }
      while ((iconnointernetF + parseFloat(`${casting4.length}`)) < 1.36 && (casting4.length + parseInt(`${iconnointernetF}`)) < 2) {
         iconnointernetF *= parseFloat(`${parseInt(`${iconnointernetF}`) % (Math.max(2, 2))}`);
         break;
      }
      videobufferloadingl = penaltyshootnogoali.length < 84;
   }
   while (3 > reactnativeultimatelistview_.length) {
      libreactperfloggerjniD.push(penaltyshootnogoali.length);
      break;
   }
       let productV: Map<any, any> = new Map([[String.fromCharCode(104,109,104,100,0),899], [String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,0),252], [String.fromCharCode(108,111,119,112,97,115,115,0),735]]);
       let smallorangemany = 4.0;
         smallorangemany *= parseFloat(`${productV.size}`);
         smallorangemany *= parseFloat(`${parseInt(`${smallorangemany}`)}`);
         smallorangemany *= parseFloat(`${parseInt(`${smallorangemany}`)}`);
      if (2.21 < (smallorangemany * 4.93) || 4.93 < (smallorangemany * parseFloat(`${productV.size}`))) {
         productV = new Map([[`${productV.size}`, productV.size ^ 2]]);
      }
       let xnewinterstitial4 = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,0);
       let langkeya = String.fromCharCode(112,100,122,112,0);
          let settings8 = String.fromCharCode(112,114,105,111,114,0);
          let homeiconw = String.fromCharCode(108,105,115,116,101,110,101,114,0);
         smallorangemany += (parseFloat(`${homeiconw == String.fromCharCode(75,0) ? homeiconw.length : productV.size}`));
         settings8 = `${settings8.length * 1}`;
      videobufferloadingl = reactnativeultimatelistview_.startsWith(`${videobufferloadingl}`);
       let nextc = true;
         nextc = nextc && !nextc;
      let unreadp = nextc ? !nextc : nextc;
      do {
         nextc = (!nextc ? !nextc : nextc);
         if (unreadp) {
            break;
         }
      } while (unreadp && (!nextc));
      for (let s = 0; s < 3; s++) {
         nextc = !nextc;
      }
      videobufferloadingl = !nextc;
   if ((penaltyshootnogoali.length | reactnativeultimatelistview_.length) == 1 || 1 == (reactnativeultimatelistview_.length | penaltyshootnogoali.length)) {
      reactnativeultimatelistview_ = "3";
   }
      libreactperfloggerjniD = [1 - attributedstringa.length];
      reactnativeultimatelistview_ += "1";
      attributedstringa = `${reactnativeultimatelistview_.length}`;
      libreactperfloggerjniD = [penaltyshootnogoali.length % (Math.max(attributedstringa.length, 1))];
   while (reactnativeultimatelistview_.endsWith(`${libreactperfloggerjniD.length}`)) {
      reactnativeultimatelistview_ = "3";
      break;
   }
   let mapbuffero = String.fromCharCode(50,113,52,0) == attributedstringa;
   do {
       let incidentQ = false;
       let comment1: Map<any, any> = new Map([[String.fromCharCode(110,112,112,115,99,97,108,101,0),57], [String.fromCharCode(116,97,108,108,0),450], [String.fromCharCode(105,109,100,99,116,0),857]]);
       let overlayp = 4.0;
       let tempnodataW = String.fromCharCode(112,114,111,120,121,0);
      if ((comment1.size % (Math.max(3, 1))) == 4 && incidentQ) {
          let inouttargetyellowp = 1;
          let dicelogog = 2.0;
         incidentQ = tempnodataW.length == inouttargetyellowp;
         inouttargetyellowp >>= Math.min(5, Math.abs(parseInt(`${dicelogog}`) - parseInt(`${dicelogog}`)));
      }
         comment1.set(`${incidentQ}`, 3);
      while (2 <= (tempnodataW.length + parseInt(`${overlayp}`))) {
         overlayp *= parseFloat(`${2}`);
         break;
      }
      let iconviewerK = comment1.size >= 7590246;
      do {
         comment1 = new Map([[`${incidentQ}`, (String.fromCharCode(114,0) == tempnodataW ? (incidentQ ? 1 : 3) : tempnodataW.length)]]);
         if (iconviewerK) {
            break;
         }
      } while ((4 < (tempnodataW.length << (Math.min(4, Math.abs(comment1.size))))) && iconviewerK);
      for (let z = 0; z < 1; z++) {
          let typess = 5;
          let minivodF = true;
          let tumbnail0 = String.fromCharCode(97,109,98,105,101,110,116,0);
         comment1.set(`${incidentQ}`, comment1.size);
         typess -= 1;
         minivodF = typess > 88;
         tumbnail0 += `${(typess >> (Math.min(1, Math.abs((minivodF ? 2 : 4)))))}`;
      }
          let catalogK = false;
          let mbnativeadvancedk = 5.0;
         incidentQ = !incidentQ && comment1.size > 100;
         catalogK = 75.83 < mbnativeadvancedk;
         mbnativeadvancedk *= (parseFloat(`${parseInt(`${mbnativeadvancedk}`) % (Math.max(1, (catalogK ? 1 : 4)))}`));
       let yellowc = String.fromCharCode(111,111,108,116,105,112,0);
      while (yellowc.includes(`${overlayp}`)) {
         yellowc += `${tempnodataW.length}`;
         break;
      }
         overlayp /= Math.max((parseFloat(`${String.fromCharCode(55,0) == yellowc ? yellowc.length : parseInt(`${overlayp}`)}`)), 2);
          let screenD = String.fromCharCode(99,97,114,0);
          let u_countx = false;
         overlayp += (parseFloat(`${parseInt(`${overlayp}`) & (incidentQ ? 3 : 1)}`));
         screenD += `${(3 + (u_countx ? 4 : 5))}`;
         u_countx = screenD.length >= 31;
       let gpaye = String.fromCharCode(115,116,117,100,105,111,118,105,115,117,97,108,111,98,106,101,99,116,0);
       let animations1 = String.fromCharCode(118,105,100,101,111,101,110,99,100,115,112,0);
          let detail9 = 1.0;
         animations1 = `${animations1.length}`;
         detail9 *= parseFloat(`${parseInt(`${detail9}`)}`);
      attributedstringa += `${libmapbufferjni7 % (Math.max(6, penaltyshootnogoali.length))}`;
      if (mapbuffero) {
         break;
      }
   } while (mapbuffero && (1 == penaltyshootnogoali.length));

    setVideoReadyIos(true);

   while (!videobufferloadingl || k_view0) {
       let iconnewsshare8 = 0.0;
       let diceF: Array<any> = [126, 20, 27];
       let backwardu = 4.0;
         iconnewsshare8 *= parseFloat(`${diceF.length / 1}`);
       let stringS = String.fromCharCode(114,101,115,105,100,117,97,108,0);
       let homeactiveg = String.fromCharCode(101,102,102,101,99,116,105,118,101,108,121,0);
         stringS += `${parseInt(`${iconnewsshare8}`) >> (Math.min(homeactiveg.length, 4))}`;
         homeactiveg += `${stringS.length / (Math.max(homeactiveg.length, 7))}`;
       let stringl = 1;
       let libglogJ = 4;
      videobufferloadingl = penaltyshootnogoali.includes(videobufferloadingl);
      break;
   }
      k_view0 = videobufferloadingl || penaltyshootnogoali.length > 1;
      libmapbufferjni7 %= Math.max(1 | reactnativeultimatelistview_.length, 3);
   for (let o = 0; o < 1; o++) {
      k_view0 = penaltyshootnogoali.includes(k_view0);
   }
   for (let x = 0; x < 3; x++) {
      libreactperfloggerjniD = [3 << (Math.min(5, reactnativeultimatelistview_.length))];
   }
      libreactperfloggerjniD = [3];
       let giftO = 0.0;
       let countryl = String.fromCharCode(107,105,110,103,0);
         countryl += `${parseInt(`${giftO}`)}`;
       let countryk = 3.0;
      let ajaxq = countryk >= 9638855.0;
      do {
          let orangedownarrowm = String.fromCharCode(115,117,98,98,108,111,99,107,0);
          let privatechatbgJ = String.fromCharCode(112,101,110,100,105,110,103,0);
          let showless8: Map<any, any> = new Map([[String.fromCharCode(97,100,116,115,116,111,97,115,99,0),String.fromCharCode(97,98,111,118,101,0)], [String.fromCharCode(109,117,108,116,105,115,101,108,101,99,116,105,111,110,0),String.fromCharCode(116,120,116,110,105,100,0)]]);
          let libfabricjnio = String.fromCharCode(112,114,111,98,105,110,103,0);
         countryk += showless8.size / 3;
         orangedownarrowm += `${3 >> (Math.min(4, orangedownarrowm.length))}`;
         privatechatbgJ = `${(String.fromCharCode(85,0) == privatechatbgJ ? privatechatbgJ.length : libfabricjnio.length)}`;
         showless8 = new Map([[privatechatbgJ, libfabricjnio.length | 2]]);
         if (ajaxq) {
            break;
         }
      } while ((3 <= (countryl.length / 3) && (countryk / 5.99) <= 4.62) && ajaxq);
          let reactnativeratingsy = 5.0;
         giftO /= Math.max(3, parseFloat(`${parseInt(`${reactnativeratingsy}`) | 2}`));
         giftO += parseFloat(`${parseInt(`${countryk}`) | 2}`);
          let zhuboU = 3;
          let kuaishoua = String.fromCharCode(99,111,109,112,97,114,101,102,0);
         countryl += `${parseInt(`${countryk}`) >> (Math.min(3, Math.abs(1)))}`;
         zhuboU |= kuaishoua.length * 3;
         kuaishoua += `${zhuboU}`;
      attributedstringa += `${1 >> (Math.min(2, penaltyshootnogoali.length))}`;
   let hookE = videobufferloadingl ? !videobufferloadingl : videobufferloadingl;
   do {
       let libanee = String.fromCharCode(114,116,102,0);
       let pressurei = String.fromCharCode(115,116,97,114,116,99,111,100,101,0);
       let awayteamfieldo = String.fromCharCode(121,117,118,112,99,0);
       let iconcalendar5: Array<any> = [201, 734, 940];
       let orangeuparrowQ = 2;
         libanee += `${libanee.length}`;
      while ((libanee.length << (Math.min(3, Math.abs(orangeuparrowQ)))) <= 4) {
          let volumeZ = true;
          let p_animationw = 3.0;
          let middlesoundX: Array<any> = [236, 507, 732];
          let service2 = String.fromCharCode(116,95,55,56,95,111,118,101,114,108,97,112,112,101,100,0);
         libanee = `${(String.fromCharCode(79,0) == libanee ? service2.length : libanee.length)}`;
         volumeZ = 18.24 >= p_animationw && !volumeZ;
         p_animationw += parseFloat(`${parseInt(`${p_animationw}`)}`);
         middlesoundX = [((volumeZ ? 1 : 3) % 2)];
         service2 += `${parseInt(`${p_animationw}`) ^ 3}`;
         break;
      }
      while (4 > (orangeuparrowQ - 3)) {
          let inouttargetyellowH = 4.0;
          let foregroundD = false;
          let awayteamfieldb = false;
          let binddatas4 = 2.0;
         libanee = `${1 | libanee.length}`;
         inouttargetyellowH -= (parseFloat(`${(foregroundD ? 4 : 3) | (awayteamfieldb ? 1 : 4)}`));
         foregroundD = inouttargetyellowH <= binddatas4;
         awayteamfieldb = !awayteamfieldb;
         binddatas4 /= Math.max((parseFloat(`${(foregroundD ? 2 : 2) - parseInt(`${inouttargetyellowH}`)}`)), 5);
         break;
      }
         pressurei = `${2 * orangeuparrowQ}`;
         orangeuparrowQ &= awayteamfieldo.length;
      while (3 < (iconcalendar5.length << (Math.min(Math.abs(1), 2)))) {
          let flippert: Array<any> = [53, 541, 271];
          let coden = String.fromCharCode(113,95,55,48,95,105,109,112,108,105,99,105,116,101,108,121,0);
          let androidg = String.fromCharCode(117,112,99,111,109,105,110,103,0);
          let final_ord = String.fromCharCode(117,110,114,101,99,111,103,0);
         awayteamfieldo = `${final_ord.length}`;
         flippert.push(3);
         coden += `${androidg.length & flippert.length}`;
         androidg += "3";
         final_ord = `${(String.fromCharCode(113,0) == coden ? flippert.length : coden.length)}`;
         break;
      }
      let whistle4 = 6836728 >= iconcalendar5.length;
      do {
          let toponH = 2.0;
          let predictionloss1 = String.fromCharCode(100,105,103,101,115,116,98,121,111,98,106,0);
          let giftbuttonh = String.fromCharCode(105,110,115,101,114,116,0);
          let whatsapp4: Map<any, any> = new Map([[String.fromCharCode(101,108,115,101,0),772], [String.fromCharCode(99,101,110,99,0),609]]);
         iconcalendar5.push(pressurei.length | libanee.length);
         toponH += parseFloat(`${parseInt(`${toponH}`) % (Math.max(predictionloss1.length, 10))}`);
         predictionloss1 = `${3 - parseInt(`${toponH}`)}`;
         giftbuttonh += `${whatsapp4.size}`;
         whatsapp4.set(`${toponH}`, 3 + predictionloss1.length);
         if (whistle4) {
            break;
         }
      } while ((!libanee.endsWith(`${iconcalendar5.length}`)) && whistle4);
         iconcalendar5.push(3 ^ pressurei.length);
         libanee = "2";
          let ksady = String.fromCharCode(100,97,112,0);
          let yellowtoredK = 5;
         libanee += `${iconcalendar5.length - 3}`;
         ksady += "3";
         yellowtoredK /= Math.max(ksady.length >> (Math.min(4, Math.abs(yellowtoredK))), 2);
          let moviess = 1;
         orangeuparrowQ *= (awayteamfieldo == String.fromCharCode(65,0) ? moviess : awayteamfieldo.length);
      let flyerf = String.fromCharCode(106,97,105,109,111,0) == libanee;
      do {
          let descm = String.fromCharCode(115,100,107,0);
          let textinputY: Array<any> = [692, 639, 719];
          let sigmobq = 4.0;
         libanee += `${1 - pressurei.length}`;
         descm += `${descm.length}`;
         textinputY = [parseInt(`${sigmobq}`)];
         sigmobq -= 2;
         if (flyerf) {
            break;
         }
      } while ((4 >= (2 - orangeuparrowQ)) && flyerf);
       let defaultprofilepicl = String.fromCharCode(99,97,112,116,117,114,105,110,103,0);
       let fullscreenmax7 = String.fromCharCode(112,108,97,116,102,111,114,109,115,0);
          let iconbelld = 0;
         defaultprofilepicl = `${(String.fromCharCode(55,0) == libanee ? libanee.length : iconcalendar5.length)}`;
         iconbelld %= Math.max(iconbelld ^ iconbelld, 2);
       let iconcloseN = 0;
      videobufferloadingl = pressurei.length < 4;
      if (hookE) {
         break;
      }
   } while (hookE && (videobufferloadingl));
      attributedstringa += `${attributedstringa.length ^ libreactperfloggerjniD.length}`;
   let analyticn = k_view0 ? !k_view0 : k_view0;
   do {
      k_view0 = reactnativeultimatelistview_.length == libreactperfloggerjniD.length;
      if (analyticn) {
         break;
      }
   } while ((!k_view0) && analyticn);
   for (let s = 0; s < 2; s++) {
      reactnativeultimatelistview_ = `${((k_view0 ? 5 : 1) - 1)}`;
   }
    setVideoReadyAndroid(true);
  }, []);

  const onAdsBtnPress = () => {
       let encryptI: Array<any> = [String.fromCharCode(106,95,54,49,0), String.fromCharCode(114,97,110,0), String.fromCharCode(103,101,110,101,114,97,116,111,114,0)];
    let photoX = String.fromCharCode(110,111,108,111,99,107,0);
    let forward_ = String.fromCharCode(119,95,57,56,95,114,101,115,101,110,116,97,116,105,111,110,0);
    let manifestN = 2.0;
    let graphicsf = 0.0;
    let teamg = String.fromCharCode(116,107,104,100,0);
    let weibon = 2.0;
    let userk = String.fromCharCode(120,118,97,103,0);
       let notificationgrayF = String.fromCharCode(104,101,97,118,121,0);
       let descz = String.fromCharCode(101,120,112,105,114,105,110,103,0);
          let sound0 = String.fromCharCode(100,114,97,103,103,97,98,108,101,0);
          let foregroundU = String.fromCharCode(113,99,97,110,0);
         descz += `${2 >> (Math.min(2, descz.length))}`;
         sound0 = "3";
         foregroundU = `${foregroundU.length % 3}`;
      let containerV = 8386334 <= notificationgrayF.length;
      do {
          let albumI = String.fromCharCode(101,118,116,97,103,95,118,95,49,49,0);
          let iconmegaphoneZ = String.fromCharCode(114,101,115,112,111,110,115,101,0);
          let greyarrowupu: Map<any, any> = new Map([[String.fromCharCode(115,111,98,101,108,0),568], [String.fromCharCode(119,101,120,112,97,110,100,0),773], [String.fromCharCode(99,104,97,110,103,101,104,0),855]]);
          let homeactivel = 5.0;
          let historyl = false;
         notificationgrayF += `${iconmegaphoneZ.length}`;
         albumI = "3";
         iconmegaphoneZ = `${((historyl ? 1 : 2) & parseInt(`${homeactivel}`))}`;
         greyarrowupu = new Map([[`${greyarrowupu.size}`, 2]]);
         homeactivel += (parseInt(`${homeactivel}`) ^ (historyl ? 2 : 4));
         if (containerV) {
            break;
         }
      } while (containerV && (notificationgrayF == String.fromCharCode(115,0) || descz.length < 4));
         notificationgrayF = "3";
       let codegenx: Map<any, any> = new Map([[String.fromCharCode(115,99,101,110,97,114,105,111,0),39], [String.fromCharCode(114,101,99,111,114,100,115,0),486]]);
       let basketballn: Map<any, any> = new Map([[String.fromCharCode(121,98,108,111,99,107,0),772], [String.fromCharCode(116,114,97,110,115,117,112,112,0),685]]);
         notificationgrayF = `${descz.length ^ 1}`;
       let foundj: Map<any, any> = new Map([[String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,115,0),165], [String.fromCharCode(105,109,112,111,114,116,97,110,116,0),93], [String.fromCharCode(104,101,120,99,104,97,114,105,110,116,0),95]]);
       let dialogw: Map<any, any> = new Map([[String.fromCharCode(115,95,55,50,95,102,99,111,100,101,0),535], [String.fromCharCode(113,117,97,108,105,116,121,0),855], [String.fromCharCode(112,107,99,114,121,112,116,0),839]]);
      encryptI = [3 >> (Math.min(1, encryptI.length))];
       let shirtp = String.fromCharCode(118,105,100,101,111,115,116,114,101,97,109,0);
       let reactnativejsF: Map<any, any> = new Map([[String.fromCharCode(97,99,99,117,109,117,108,97,116,101,100,0),940], [String.fromCharCode(99,97,117,116,101,114,105,122,101,95,120,95,57,57,0),61]]);
       let progress7 = 3.0;
      for (let y = 0; y < 2; y++) {
         shirtp = `${parseInt(`${progress7}`)}`;
      }
         shirtp = `${reactnativejsF.size / (Math.max(3, 9))}`;
      for (let z = 0; z < 3; z++) {
         reactnativejsF = new Map([[shirtp, shirtp.length / (Math.max(10, parseInt(`${progress7}`)))]]);
      }
          let valuesX = 5.0;
         progress7 -= reactnativejsF.size;
         valuesX /= Math.max(parseInt(`${valuesX}`) * 2, 3);
         reactnativejsF.set(shirtp, 1 & shirtp.length);
         reactnativejsF.set(`${shirtp}`, (shirtp == String.fromCharCode(90,0) ? shirtp.length : reactnativejsF.size));
       let stationsJ = true;
       let appsG = false;
       let backiconmaskf: Map<any, any> = new Map([[String.fromCharCode(105,109,97,103,101,121,117,118,99,111,110,102,105,103,0),196], [String.fromCharCode(99,108,101,97,114,98,105,116,0),837], [String.fromCharCode(99,111,108,115,0),124]]);
         reactnativejsF.set(`${appsG}`, (reactnativejsF.size ^ (appsG ? 4 : 3)));
      photoX += "2";

    if (!currentVod?.ads_url || currentVod?.ads_url == "") {

      teamg += `${1 - parseInt(`${manifestN}`)}`;
   while (forward_.includes(`${graphicsf}`)) {
       let videobufferloadingL = String.fromCharCode(112,111,108,121,109,101,115,104,0);
       let referrerl = false;
       let yellowtoredd = 4.0;
      while (5 >= videobufferloadingL.length) {
          let dicelogo5 = false;
          let pointQ: Array<any> = [String.fromCharCode(104,97,114,100,116,104,114,101,115,104,0), String.fromCharCode(101,105,112,118,0)];
          let plashd = false;
          let indexJ: Array<any> = [473, 110];
          let n_titlek = true;
         referrerl = 33 <= indexJ.length;
         dicelogo5 = (plashd ? dicelogo5 : plashd);
         pointQ = [2];
         indexJ.push(3);
         n_titlek = ((pointQ.length ^ (plashd ? 64 : pointQ.length)) > 64);
         break;
      }
      while (5.83 <= yellowtoredd && 4.39 <= (5.83 / (Math.max(4, yellowtoredd)))) {
          let gesturesi = true;
          let reddownarrowj = String.fromCharCode(100,105,103,114,97,112,104,95,97,95,56,53,0);
          let closep = String.fromCharCode(118,111,114,98,105,115,0);
          let yellowredcardM = String.fromCharCode(118,95,54,53,95,116,101,120,116,97,116,116,114,0);
         referrerl = videobufferloadingL == String.fromCharCode(55,0);
         gesturesi = (((gesturesi ? reddownarrowj.length : 70) << (Math.min(reddownarrowj.length, 4))) < 70);
         closep += `${reddownarrowj.length + closep.length}`;
         yellowredcardM = `${(yellowredcardM == String.fromCharCode(106,0) ? yellowredcardM.length : (gesturesi ? 3 : 1))}`;
         break;
      }
      let referrerG = yellowtoredd >= 7904061.0;
      do {
          let mapbufferC = false;
         yellowtoredd += parseInt(`${yellowtoredd}`);
         mapbufferC = !mapbufferC;
         if (referrerG) {
            break;
         }
      } while (referrerG && ((videobufferloadingL.length * yellowtoredd) <= 2.77));
         referrerl = !videobufferloadingL.includes(`${yellowtoredd}`);
      while (2 <= videobufferloadingL.length) {
         referrerl = videobufferloadingL.length > 76;
         break;
      }
      while (referrerl || 5.68 <= (yellowtoredd - 2.85)) {
          let halffieldimage9: Map<any, any> = new Map([[String.fromCharCode(107,95,56,0),false ], [String.fromCharCode(100,99,97,109,97,116,104,95,113,95,52,51,0),false ]]);
         yellowtoredd /= Math.max(5, ((referrerl ? 4 : 2) - parseInt(`${yellowtoredd}`)));
         halffieldimage9.set(`${halffieldimage9.size}`, halffieldimage9.size);
         break;
      }
      if (videobufferloadingL.length < 3 || referrerl) {
         videobufferloadingL += `${(parseInt(`${yellowtoredd}`) | (referrerl ? 1 : 4))}`;
      }
      for (let b = 0; b < 1; b++) {
         yellowtoredd /= Math.max(1, 3);
      }
      while ((yellowtoredd - videobufferloadingL.length) <= 1.91 && 1 <= (videobufferloadingL.length - parseInt(`${yellowtoredd}`))) {
         yellowtoredd -= ((referrerl ? 2 : 5) / (Math.max(parseInt(`${yellowtoredd}`), 3)));
         break;
      }
      forward_ += `${2 << (Math.min(Math.abs(parseInt(`${yellowtoredd}`)), 1))}`;
      break;
   }
      

      graphicsf *= parseInt(`${weibon}`) + 2;
   for (let j = 0; j < 2; j++) {
      weibon /= Math.max(1, 3);
   }
      onManualPause(true);

       let backwardW = true;
       let arrowrightD = String.fromCharCode(119,97,116,99,104,101,100,0);
       let foregroundn = String.fromCharCode(117,110,114,101,102,101,114,101,110,99,101,0);
      if (5 >= foregroundn.length) {
          let moon8 = 4.0;
          let iconcurrentmatchL: Array<any> = [334, 836];
          let libjsijniprofiler0 = String.fromCharCode(111,118,101,114,108,97,112,115,0);
          let typingloadingn = String.fromCharCode(111,117,116,102,105,108,101,115,0);
         foregroundn = `${arrowrightD.length}`;
         moon8 /= Math.max(1, parseFloat(`${libjsijniprofiler0.length}`));
         iconcurrentmatchL.push(iconcurrentmatchL.length ^ 3);
         libjsijniprofiler0 += `${parseInt(`${moon8}`) + 2}`;
         typingloadingn += `${libjsijniprofiler0.length}`;
      }
      while (2 == arrowrightD.length) {
         backwardW = (((backwardW ? arrowrightD.length : 69) & arrowrightD.length) < 69);
         break;
      }
          let matchesF = 5;
          let components3 = 2.0;
         backwardW = foregroundn.length <= 24 && backwardW;
         matchesF -= matchesF >> (Math.min(1, Math.abs(2)));
         components3 += parseFloat(`${parseInt(`${components3}`) + matchesF}`);
         backwardW = arrowrightD.length <= 4;
      if (!backwardW) {
         arrowrightD += `${foregroundn.length << (Math.min(Math.abs(2), 3))}`;
      }
         arrowrightD += `${(foregroundn == String.fromCharCode(84,0) ? foregroundn.length : (backwardW ? 5 : 4))}`;
      for (let s = 0; s < 2; s++) {
          let upload7 = false;
          let bodanD = 1;
          let room8 = 4.0;
          let champion9 = 4.0;
          let subtextC = String.fromCharCode(118,105,116,97,108,105,107,108,105,122,101,0);
         backwardW = (foregroundn.length & subtextC.length) < 82;
         upload7 = 55.5 >= room8 || bodanD >= 38;
         bodanD >>= Math.min(Math.abs((bodanD & (upload7 ? 1 : 3))), 3);
         room8 *= 1;
         champion9 -= 3 + parseInt(`${room8}`);
         subtextC = `${(bodanD ^ (upload7 ? 3 : 2))}`;
      }
      for (let f = 0; f < 3; f++) {
          let optionsR = 2.0;
          let privacyn: Array<any> = [String.fromCharCode(110,111,110,110,101,103,0), String.fromCharCode(116,114,117,110,99,112,97,115,115,101,115,0)];
          let vignetteV = String.fromCharCode(114,101,112,108,97,99,101,115,0);
          let default_wfA = 5.0;
          let greenC = String.fromCharCode(97,112,112,114,111,118,101,114,0);
         foregroundn += `${parseInt(`${default_wfA}`)}`;
         optionsR += (vignetteV == String.fromCharCode(85,0) ? parseInt(`${optionsR}`) : vignetteV.length);
         privacyn = [3];
         default_wfA -= parseInt(`${optionsR}`);
         greenC += `${vignetteV.length}`;
      }
      while (!arrowrightD.startsWith(`${backwardW}`)) {
          let malaysiaL = String.fromCharCode(105,115,110,101,103,97,116,105,118,101,0);
          let moonK: Array<any> = [136, 101, 902];
          let codeK = String.fromCharCode(97,112,105,0);
          let predictionactivev = 4;
          let type_5fq: Array<any> = [String.fromCharCode(115,101,116,116,105,110,103,0), String.fromCharCode(98,111,111,116,0), String.fromCharCode(103,105,103,97,98,121,116,101,115,0)];
         arrowrightD = "1";
         malaysiaL = `${codeK.length * moonK.length}`;
         moonK = [moonK.length];
         codeK = `${(codeK == String.fromCharCode(103,0) ? codeK.length : type_5fq.length)}`;
         predictionactivev &= (malaysiaL == String.fromCharCode(86,0) ? malaysiaL.length : predictionactivev);
         type_5fq.push(predictionactivev);
         break;
      }
      photoX = `${2 ^ teamg.length}`;
       let inouttargetyellowq = String.fromCharCode(100,101,115,116,114,111,121,0);
       let stationsn = 1;
      for (let m = 0; m < 3; m++) {
         inouttargetyellowq += `${inouttargetyellowq.length & 1}`;
      }
       let heji5 = String.fromCharCode(112,117,98,107,101,121,0);
       let basketballtrophyX = String.fromCharCode(97,115,116,114,111,110,111,109,105,99,97,108,0);
         inouttargetyellowq += "1";
      while (5 < inouttargetyellowq.length) {
         inouttargetyellowq = `${stationsn}`;
         break;
      }
          let matchinactiveq = 0.0;
         stationsn += basketballtrophyX.length | inouttargetyellowq.length;
         matchinactiveq *= parseFloat(`${parseInt(`${matchinactiveq}`)}`);
      if (inouttargetyellowq.endsWith(`${stationsn}`)) {
         inouttargetyellowq = `${stationsn * basketballtrophyX.length}`;
      }
      userk = `${(String.fromCharCode(77,0) == teamg ? parseInt(`${graphicsf}`) : teamg.length)}`;
      onPressAds();

   if (2 >= (1 | encryptI.length) || (1 | forward_.length) >= 1) {
      encryptI.push(forward_.length >> (Math.min(Math.abs(3), 1)));
   }
      manifestN += 2 * photoX.length;
      return;

   for (let i = 0; i < 2; i++) {
      teamg += `${userk.length}`;
   }
       let transferE = String.fromCharCode(98,95,52,54,95,100,101,116,101,99,116,105,110,103,0);
       let predictionbannersharedE = false;
         transferE = `${transferE.length}`;
          let ewarded2 = String.fromCharCode(97,110,105,109,97,116,105,111,110,115,0);
         transferE = `${(3 | (predictionbannersharedE ? 2 : 5))}`;
         ewarded2 = `${ewarded2.length}`;
      for (let j = 0; j < 2; j++) {
         predictionbannersharedE = (35 == (transferE.length ^ (predictionbannersharedE ? 35 : transferE.length)));
      }
      let runtimeschedulerx = predictionbannersharedE ? !predictionbannersharedE : predictionbannersharedE;
      do {
         predictionbannersharedE = !predictionbannersharedE;
         if (runtimeschedulerx) {
            break;
         }
      } while ((predictionbannersharedE) && runtimeschedulerx);
      for (let k = 0; k < 3; k++) {
         transferE = `${((predictionbannersharedE ? 3 : 5))}`;
      }
      while (!predictionbannersharedE) {
         predictionbannersharedE = transferE.length == 46;
         break;
      }
      manifestN -= ((predictionbannersharedE ? 1 : 1));
    }

    const url = currentVod?.ads_url.includes(UploadCondensed.incidentControlsSchedulerIconw([-120,-108,-108,-112,-32],0xE0,false))
      ? currentVod?.ads_url
      : UploadCondensed.incidentControlsSchedulerIconw([-2,-30,-30,-26,-27,-84,-71,-71,-106],0x96,false) + currentVod?.actionUrl;

    Linking.openURL(url);

       let orientatione = 1.0;
      for (let v = 0; v < 3; v++) {
         orientatione /= Math.max(4, 3);
      }
      if (2.70 > (5.44 - orientatione) || 5.49 > (5.44 - orientatione)) {
         orientatione += parseInt(`${orientatione}`) & parseInt(`${orientatione}`);
      }
          let elementsx = 3.0;
          let proxyo = 0.0;
         orientatione -= parseInt(`${proxyo}`);
         elementsx *= 3;
         proxyo /= Math.max(parseFloat(`${parseInt(`${elementsx}`) * parseInt(`${elementsx}`)}`), 2);
      teamg = "1";
      weibon *= encryptI.length;

    wawa_dacccfaabfbcbadeebddcabacdffdbc_video.watchAnytimeAdsClicksAnalytics({
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
                        UploadCondensed.incidentControlsSchedulerIconw([-13,-17,-17,-21,-24,-95,-76,-76,-18,-21,-9,-12,-6,-1,-75,-20,-14,-16,-14,-10,-2,-1,-14,-6,-75,-12,-23,-4,-76,-20,-14,-16,-14,-21,-2,-1,-14,-6,-76,-2,-11,-76,-6,-76,-6,-83,-76,-53,-12,-16,88,50,-10,-12,-11,-60,-53,-14,-16,-6,-8,-13,-18,-60,-6,-23,-17,-75,-21,-11,-4,-101],0x9B,false), 
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
    color: "whiteanimationliveFast",
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
