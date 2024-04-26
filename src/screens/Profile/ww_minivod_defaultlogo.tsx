import React, { useCallback, useEffect, useState, memo } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
  Platform,
} from "react-native";
import { useTheme, useFocusEffect } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { wwEighteenShirt } from "@redux/ww_small";
import ShowMoreButton from "../../components/button/ww_libjsijniprofiler_button";

import CollectionIcon from "@static/images/sentryApple.svg";
import HistoryIcon from "@static/images/sportQaagEmoji.svg";
import FeedbackIcon from "@static/images/penaltygoalTickLatn.svg";
import ReviewIcon from "@static/images/downTheme.svg";
import SettingsIcon from "@static/images/videovarPredictionactiveIconwatchnow.svg";
import InfoIcon from "@static/images/appsTumbnail.svg";
import DownloadIcon from "@static/images/loginsuccessXadsdkCenter.svg";
import { useNavigation } from "@react-navigation/native";

import Orientation from "react-native-orientation-locker";
import ProfileIcon from "@static/images/redirectFormLoading.svg";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import MoreArrow from "@static/images/libcxxcomponentsPrivilege.svg";
import EditIcn from "@static/images/profile/dycreatorSell.svg";

import VipIcon from "@static/images/selectedDefaultplayerimgAnner.svg";
import VipArrow from "@static/images/dialogSigmob.svg";
import AddIcon from "@static/images/vip/crossCarouselLibpangleflipped.svg";
import { wwAbidetect } from "../../../ww_leakchecker";

import {
  hideBottomSheetAction,
  removeScreenAction,
  setShowGuestPurchaseSuccess,
  showLoginAction,
} from "@redux/actions/ww_hash";
import NotificationModal from "../../components/modal/ww_countdown_ksad";
import { updateUserAuth, updateUserReferral } from "@redux/actions/ww_libreactperfloggerjni_small";
import ExpiredOverlay from "../../components/modal/ww_updates";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DOWNLOAD_FEATURE_ENABLED, INVITE_FRIEND, SHOW_ZF_CONST, UMENG_CHANNEL } from "@utility/ww_icon";
import FastImage from "../../components/common/ww_result";
import { wwIconscheduleColors } from "@api";
import { wwVietnam } from "../../Sports/global/ww_screen";
import { BannerContainer } from "../../components/container/ww_runtime_iconarrowright";
import { wwSendBuild } from "@type/ww_dycreator_result";
import { wwForegroundModules } from "@utility/ww_rewardvideo";
import { wwCollection } from "../../constants/ww_klevin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { wwLivenodatabgimg } from "../../api/ww_right";
import ww_runtime from "../../../Umeng/ww_runtime";
import DeviceInfo from "react-native-device-info";
import style from "../../Sports/components/matchDetails/liveChatPage/ww_utils_orangeclock";
import { VipLoginAlertOverlay } from "../../components/modal/ww_actions_dycreator";
import { wwAwayteamfield } from "@redux/reducers/ww_gray";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";
import ReviewModal from "../../components/modal/ww_nterstitial";
import InAppReview from 'react-native-in-app-review';

function Profile({ navigation, route }: BottomTabScreenProps<any>) {
  const navigator = useNavigation();
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [displayedDate, setDisplayedDate] = useState("");
  const [isShowReview, setShowReview] = useState(false);
  const isInAppReviewAvailable = InAppReview.isAvailable();
  const userState = useSelector<wwVertical>('userReducer');
  const appState = useSelector<wwAwayteamfield>('backgroundReducer');
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bannerAd, setBannerAd] = useState<wwSendBuild[]>();

  const toggleOverlay = () => {
       let uimanagerd = 4.0;
    let xadsdkE: Map<any, any> = new Map([[String.fromCharCode(110,95,57,54,95,114,116,114,101,101,100,101,112,116,104,0),842], [String.fromCharCode(115,101,110,100,101,114,95,121,95,52,54,0),953]]);
    let turnh = String.fromCharCode(116,95,57,57,0);
    let skipV = String.fromCharCode(100,95,57,53,95,115,112,108,105,116,109,118,115,0);
    let middleL = String.fromCharCode(104,95,54,55,95,112,114,101,100,101,99,111,100,101,0);
    let nativeE = true;
    let lightA = String.fromCharCode(99,95,51,95,105,110,105,116,105,97,108,105,122,101,0);
    let libflipperZ = 2.0;
    let turnB: Map<any, any> = new Map([[String.fromCharCode(99,95,57,95,115,113,108,105,116,101,114,101,98,97,115,101,114,0),182], [String.fromCharCode(115,95,51,50,95,108,111,103,111,115,0),858], [String.fromCharCode(102,114,105,101,110,100,108,121,95,49,95,54,48,0),473]]);
    let updatesR = false;
    let searchbarB = String.fromCharCode(115,95,54,55,95,119,97,108,108,0);
    let componentsa = 3.0;
    let iconsubssuccess8: Map<any, any> = new Map([[String.fromCharCode(107,95,50,48,95,112,114,101,112,114,111,99,101,115,115,0),String.fromCharCode(116,101,115,115,101,108,108,97,116,101,95,49,95,50,56,0)], [String.fromCharCode(99,117,114,114,101,110,116,95,117,95,53,56,0),String.fromCharCode(100,101,114,101,102,95,56,95,54,53,0)], [String.fromCharCode(112,101,114,99,101,110,116,105,108,101,95,49,95,54,53,0),String.fromCharCode(104,95,53,56,95,109,112,101,103,100,97,116,97,0)]]);
    let resultK = 4.0;
    let huawei8 = 3.0;
    let subsU = 3.0;
      searchbarB += `${3 % (Math.max(3, parseInt(`${componentsa}`)))}`;
       let pingB = false;
       let malaysias: Array<any> = [493, 70];
       let pressureD = 3.0;
       let agreement1 = false;
       let commentF = false;
          let nextn: Map<any, any> = new Map([[String.fromCharCode(109,95,52,51,95,99,104,101,99,107,115,116,114,105,100,101,0),858], [String.fromCharCode(105,95,55,55,95,110,101,120,116,108,0),34]]);
          let mbnativef = String.fromCharCode(108,95,50,50,95,116,104,117,110,107,0);
         pingB = nextn.size < 16;
         nextn.set(mbnativef, mbnativef.length);
      for (let k = 0; k < 2; k++) {
         malaysias.push(2 >> (Math.min(Math.abs(parseInt(`${pressureD}`)), 1)));
      }
          let predictionwinU = String.fromCharCode(115,121,110,116,97,120,95,110,95,51,49,0);
          let sinaN = String.fromCharCode(122,95,57,48,95,114,111,108,108,98,97,99,107,0);
         pressureD *= parseFloat(`${1}`);
         predictionwinU = `${predictionwinU.length}`;
         sinaN += `${predictionwinU.length}`;
      for (let t = 0; t < 2; t++) {
         commentF = malaysias.includes(pingB);
      }
      uimanagerd *= (parseFloat(`${(pingB ? 5 : 4) * 2}`));
   let philippines8 = iconsubssuccess8.size <= 6597705;
   do {
      iconsubssuccess8 = new Map([[`${uimanagerd}`, 1]]);
      if (philippines8) {
         break;
      }
   } while (philippines8 && (iconsubssuccess8.size >= 5));
   while ((uimanagerd / (Math.max(parseFloat(`${middleL.length}`), 6))) == 3.75) {
       let sportsa = 5.0;
       let reactnativejsx = 1.0;
       let iconuserv = true;
       let videof = 1.0;
      if (sportsa <= 4.28) {
         sportsa *= parseFloat(`${parseInt(`${sportsa}`) * parseInt(`${reactnativejsx}`)}`);
      }
         reactnativejsx -= parseFloat(`${parseInt(`${videof}`) ^ 3}`);
       let delegate_wvr = 2;
      for (let p = 0; p < 1; p++) {
         videof += delegate_wvr | 1;
      }
         delegate_wvr |= parseInt(`${videof}`) % 2;
          let castingX: Array<any> = [String.fromCharCode(102,95,56,48,95,112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,0), String.fromCharCode(115,121,109,98,111,108,105,122,101,95,104,95,57,57,0), String.fromCharCode(112,97,110,95,118,95,52,55,0)];
          let debugC = String.fromCharCode(122,95,57,55,95,114,101,97,100,113,0);
         reactnativejsx *= parseFloat(`${delegate_wvr >> (Math.min(4, Math.abs(2)))}`);
         castingX.push((debugC == String.fromCharCode(80,0) ? castingX.length : debugC.length));
          let setting7: Map<any, any> = new Map([[String.fromCharCode(101,95,57,51,95,114,97,110,103,101,99,111,100,101,114,0),false ], [String.fromCharCode(121,95,53,50,95,109,105,115,99,0),true ], [String.fromCharCode(105,115,122,101,114,111,95,53,95,52,57,0),true ]]);
          let screend = 3;
         videof *= 2;
         setting7.set(`${screend}`, screend);
         videof += parseInt(`${sportsa}`) & 2;
       let movies3 = String.fromCharCode(114,101,113,117,101,115,116,115,95,118,95,56,52,0);
       let fastforwardG = String.fromCharCode(115,121,109,98,111,108,105,99,97,116,101,95,98,95,57,49,0);
          let modelsC = 1;
          let entryz: Map<any, any> = new Map([[String.fromCharCode(102,95,54,52,95,112,105,99,107,109,111,100,101,0),String.fromCharCode(112,97,103,101,114,95,100,95,55,56,0)], [String.fromCharCode(102,95,50,48,0),String.fromCharCode(116,115,97,110,95,102,95,50,57,0)], [String.fromCharCode(119,95,56,54,95,104,101,118,109,97,115,107,0),String.fromCharCode(105,95,52,55,95,100,101,102,97,117,108,116,0)]]);
          let largen = 5.0;
         iconuserv = !fastforwardG.startsWith(`${videof}`);
         modelsC %= Math.max(parseInt(`${largen}`), 4);
         entryz.set(`${largen}`, 2 << (Math.min(4, Math.abs(parseInt(`${largen}`)))));
      if (fastforwardG.endsWith(`${iconuserv}`)) {
         fastforwardG += `${(parseInt(`${videof}`) | (iconuserv ? 1 : 1))}`;
      }
      let feedbacku = delegate_wvr >= 5667916;
      do {
          let questh = String.fromCharCode(98,95,54,56,95,108,111,99,97,116,101,100,0);
          let photoX = String.fromCharCode(97,95,57,53,95,115,104,111,114,116,115,0);
          let overlayY = String.fromCharCode(108,95,55,55,95,108,111,99,107,101,100,0);
          let skipS: Array<any> = [830, 48, 863];
         delegate_wvr /= Math.max(2, 1 | photoX.length);
         questh = `${overlayY.length - 3}`;
         photoX = "3";
         overlayY = `${questh.length}`;
         skipS = [questh.length];
         if (feedbacku) {
            break;
         }
      } while ((2.50 < (videof / (Math.max(6, delegate_wvr)))) && feedbacku);
      middleL += `${lightA.length << (Math.min(2, middleL.length))}`;
      break;
   }
   while (!lightA.startsWith(`${updatesR}`)) {
       let gifgoale = String.fromCharCode(113,95,50,49,95,98,114,111,97,100,99,97,115,116,0);
       let scheduleL = 2.0;
       let shootB = String.fromCharCode(113,95,48,0);
       let libimagepipeline_ = false;
       let switch_bS = 2.0;
         scheduleL -= parseInt(`${switch_bS}`) + gifgoale.length;
      let typing3 = 4921084.0 >= switch_bS;
      do {
         switch_bS += 1;
         if (typing3) {
            break;
         }
      } while ((4.69 < (scheduleL / 4)) && typing3);
         scheduleL += gifgoale.length;
      while (!libimagepipeline_) {
         libimagepipeline_ = libimagepipeline_ || switch_bS >= 81.69;
         break;
      }
      for (let p = 0; p < 2; p++) {
         gifgoale += `${gifgoale.length}`;
      }
         shootB += `${(parseInt(`${scheduleL}`) + (libimagepipeline_ ? 4 : 1))}`;
          let u_manager9 = String.fromCharCode(112,95,55,52,95,109,105,110,113,0);
          let sharemodalM: Map<any, any> = new Map([[String.fromCharCode(104,95,56,53,95,105,100,115,0),true ], [String.fromCharCode(113,115,116,101,112,95,106,95,49,54,0),false ]]);
          let episodesH = 0;
         switch_bS += parseInt(`${scheduleL}`) + 3;
         u_manager9 = `${sharemodalM.size}`;
         sharemodalM.set(`${episodesH}`, episodesH);
         switch_bS *= 1;
      for (let i = 0; i < 3; i++) {
         switch_bS -= ((libimagepipeline_ ? 4 : 4) - parseInt(`${switch_bS}`));
      }
         libimagepipeline_ = gifgoale == shootB;
      let videocommonH = libimagepipeline_ ? !libimagepipeline_ : libimagepipeline_;
      do {
         libimagepipeline_ = scheduleL > 42.36;
         if (videocommonH) {
            break;
         }
      } while (((switch_bS * 1.72) == 3.38) && videocommonH);
      for (let h = 0; h < 2; h++) {
          let sentry9 = true;
          let shirt6: Map<any, any> = new Map([[String.fromCharCode(109,95,50,54,95,109,111,99,107,0),true ], [String.fromCharCode(109,95,55,95,98,97,107,101,0),false ]]);
          let baidum = String.fromCharCode(109,95,50,53,95,105,115,114,101,97,100,111,110,108,121,0);
          let kuaishouL = 0.0;
          let libavcodecj = 4.0;
         scheduleL /= Math.max((baidum == String.fromCharCode(116,0) ? baidum.length : parseInt(`${libavcodecj}`)), 1);
         sentry9 = 21.93 < kuaishouL && 33 < shirt6.size;
         shirt6.set(`${kuaishouL}`, shirt6.size << (Math.min(1, Math.abs(parseInt(`${kuaishouL}`)))));
         libavcodecj /= Math.max((parseFloat(`${shirt6.size % (Math.max(10, (sentry9 ? 3 : 5)))}`)), 5);
      }
         switch_bS -= shootB.length;
      let lineg = 7337652.0 <= scheduleL;
      do {
         scheduleL += gifgoale.length;
         if (lineg) {
            break;
         }
      } while ((5 == (gifgoale.length + 3) && 5 == (3 >> (Math.min(2, gifgoale.length)))) && lineg);
      for (let v = 0; v < 2; v++) {
         scheduleL *= 2 % (Math.max(2, parseInt(`${scheduleL}`)));
      }
      lightA += `${1 | xadsdkE.size}`;
      break;
   }
   if (1 >= turnh.length) {
      turnh += `${1 / (Math.max(10, parseInt(`${componentsa}`)))}`;
   }
      componentsa *= parseFloat(`${parseInt(`${componentsa}`)}`);
      uimanagerd *= parseFloat(`${xadsdkE.size}`);
       let dark0 = 4;
       let faviconk = true;
       let v_positionS = 5.0;
         v_positionS /= Math.max(5, dark0);
      let arrowrightK = 7284455.0 <= v_positionS;
      do {
         v_positionS -= 2 | parseInt(`${v_positionS}`);
         if (arrowrightK) {
            break;
         }
      } while (arrowrightK && (3.78 < (5.72 - v_positionS) || (dark0 * 1) < 1));
         faviconk = !faviconk;
          let sellM = 0.0;
          let zhengpianb = 3.0;
         v_positionS *= 2 / (Math.max(1, parseInt(`${v_positionS}`)));
         sellM /= Math.max(1, parseFloat(`${parseInt(`${zhengpianb}`)}`));
      while ((v_positionS - 3.2) >= 1.56) {
          let frame_jnQ: Map<any, any> = new Map([[String.fromCharCode(97,115,116,114,111,110,111,109,105,99,97,108,95,97,95,56,53,0),883], [String.fromCharCode(104,95,55,55,95,112,111,112,112,101,100,0),503]]);
          let penaltygoal9: Array<any> = [386, 694];
         faviconk = frame_jnQ.size < 87;
         frame_jnQ = new Map([[`${penaltygoal9.length}`, penaltygoal9.length ^ penaltygoal9.length]]);
         break;
      }
      if (faviconk) {
         v_positionS /= Math.max(dark0, 2);
      }
          let sansF = 3.0;
          let sharemodalt = String.fromCharCode(116,111,116,97,108,115,95,55,95,51,56,0);
          let sliderd = String.fromCharCode(117,95,50,54,95,112,105,110,99,104,0);
         faviconk = sliderd.length >= sansF;
         sansF += sharemodalt.length;
         sharemodalt += `${sharemodalt.length}`;
         v_positionS /= Math.max(2, 3);
          let policyx = String.fromCharCode(112,117,115,104,95,110,95,49,54,0);
          let iconsaveimageT: Map<any, any> = new Map([[String.fromCharCode(105,110,116,105,95,122,95,51,0),275], [String.fromCharCode(116,111,110,95,100,95,54,56,0),909], [String.fromCharCode(99,114,121,112,116,95,105,95,56,50,0),72]]);
          let default_f4b = false;
         v_positionS /= Math.max(policyx.length, 4);
         policyx += `${iconsaveimageT.size}`;
         iconsaveimageT.set(`${default_f4b}`, ((default_f4b ? 4 : 3) / (Math.max(5, iconsaveimageT.size))));
      iconsubssuccess8.set(`${v_positionS}`, parseInt(`${v_positionS}`) - 1);
       let greyP = String.fromCharCode(109,117,116,97,98,108,101,95,97,95,49,52,0);
       let iconedith: Map<any, any> = new Map([[String.fromCharCode(118,95,49,55,95,98,99,100,117,105,110,116,0),639], [String.fromCharCode(112,105,99,116,121,112,101,95,105,95,53,55,0),330]]);
          let moviesl = true;
          let countryJ = String.fromCharCode(111,95,49,56,95,115,104,97,114,101,0);
          let shrinku = String.fromCharCode(105,95,56,48,95,111,112,117,115,108,97,99,105,110,103,0);
         iconedith.set(`${moviesl}`, ((moviesl ? 1 : 5) % 3));
         countryJ += `${countryJ.length}`;
         shrinku += `${(shrinku == String.fromCharCode(53,0) ? countryJ.length : shrinku.length)}`;
       let imagemanagerL = String.fromCharCode(98,111,117,110,100,101,100,95,107,95,55,0);
       let bellw = String.fromCharCode(111,95,55,54,95,115,111,108,118,101,114,0);
      skipV = `${3 - lightA.length}`;
      greyP = `${(greyP == String.fromCharCode(82,0) ? greyP.length : greyP.length)}`;
   let regeng4 = xadsdkE.size >= 8414875;
   do {
      xadsdkE = new Map([[`${xadsdkE.size}`, 2 ^ parseInt(`${uimanagerd}`)]]);
      if (regeng4) {
         break;
      }
   } while (regeng4 && ((xadsdkE.size * middleL.length) < 4));
   let untickA = 6812547 >= xadsdkE.size;
   do {
       let iconuser2 = 1.0;
       let movieslD = String.fromCharCode(116,111,107,101,110,105,122,101,114,95,122,95,55,48,0);
       let teamc = true;
      while ((iconuser2 - 5.28) == 4.30 && (iconuser2 - 5.28) == 2.90) {
          let zoomm = String.fromCharCode(102,105,110,100,101,114,95,119,95,52,55,0);
          let defaultplayerimga = 2;
         iconuser2 += 1;
         zoomm = `${3 | defaultplayerimga}`;
         defaultplayerimga += defaultplayerimga;
         break;
      }
       let streamingw = 1.0;
       let lang9 = 3.0;
         movieslD = `${((teamc ? 4 : 4) + 1)}`;
       let libloggerz = String.fromCharCode(114,95,51,55,95,114,116,99,119,101,98,0);
       let lesse = String.fromCharCode(97,95,57,57,95,115,104,97,114,112,101,110,105,110,103,0);
         lesse = `${2 - libloggerz.length}`;
         streamingw += parseFloat(`${parseInt(`${iconuser2}`)}`);
      let modulesm = iconuser2 <= 9877260.0;
      do {
         iconuser2 /= Math.max(2, parseInt(`${streamingw}`) / 3);
         if (modulesm) {
            break;
         }
      } while ((iconuser2 < 2.45) && modulesm);
      let whiteanimationlive7 = movieslD.length <= 8736660;
      do {
          let manifestT = true;
          let selectedV: Array<any> = [461, 390, 584];
          let searchbarr = String.fromCharCode(112,114,111,106,101,99,116,105,111,110,95,103,95,54,55,0);
          let iconwechatk = 2.0;
         movieslD += "3";
         manifestT = selectedV.includes(iconwechatk);
         selectedV = [parseInt(`${iconwechatk}`) ^ selectedV.length];
         searchbarr += `${parseInt(`${iconwechatk}`)}`;
         if (whiteanimationlive7) {
            break;
         }
      } while (whiteanimationlive7 && (libloggerz == String.fromCharCode(83,0)));
      for (let z = 0; z < 2; z++) {
         lesse = `${parseInt(`${streamingw}`)}`;
      }
      xadsdkE = new Map([[skipV, parseInt(`${componentsa}`)]]);
      if (untickA) {
         break;
      }
   } while (untickA && (4.55 == (libflipperZ / 5.33) && (xadsdkE.size * 1) == 3));
      componentsa *= parseFloat(`${1}`);
   while (searchbarB.endsWith(`${iconsubssuccess8.size}`)) {
       let telegram_ = String.fromCharCode(113,95,57,54,95,98,105,108,97,116,101,114,97,108,0);
       let listy: Map<any, any> = new Map([[String.fromCharCode(119,95,57,53,95,114,116,112,112,108,97,121,0),657], [String.fromCharCode(105,108,98,99,100,97,116,97,95,112,95,53,49,0),889]]);
       let libglogD = String.fromCharCode(119,95,56,48,95,100,105,115,116,114,97,99,116,97,98,108,101,0);
       let filledZ = false;
       let appsg = String.fromCharCode(121,95,51,49,95,114,101,99,101,110,116,108,121,0);
         listy.set(`${filledZ}`, (1 % (Math.max(2, (filledZ ? 2 : 1)))));
       let internetp: Map<any, any> = new Map([[String.fromCharCode(115,112,114,105,116,101,95,119,95,52,0),true ], [String.fromCharCode(99,111,114,110,101,114,115,95,54,95,49,56,0),true ]]);
       let current3: Map<any, any> = new Map([[String.fromCharCode(100,99,111,110,108,121,95,97,95,50,53,0),511], [String.fromCharCode(98,108,117,114,108,101,115,115,95,97,95,55,0),464]]);
      let short_i5Z = internetp.size <= 7247951;
      do {
         internetp = new Map([[`${listy.size}`, listy.size / 2]]);
         if (short_i5Z) {
            break;
         }
      } while ((4 <= internetp.size) && short_i5Z);
          let catagoryf = String.fromCharCode(121,95,49,48,95,99,104,101,99,107,108,105,110,101,0);
          let langt: Map<any, any> = new Map([[String.fromCharCode(115,95,54,48,95,115,117,98,109,105,116,0),849], [String.fromCharCode(101,120,112,114,108,105,115,116,95,122,95,52,0),326]]);
         internetp = new Map([[`${internetp.size}`, 1 << (Math.min(4, Math.abs(internetp.size)))]]);
         catagoryf = `${langt.size % 1}`;
         langt.set(catagoryf, 2);
      while (4 < (4 ^ libglogD.length) && (4 ^ libglogD.length) < 2) {
         libglogD = `${listy.size | 1}`;
         break;
      }
         filledZ = libglogD.length > 84;
       let libavformatr = 2;
       let auto_p8k = 1;
         listy.set(`${internetp.size}`, listy.size);
      if (1 >= (3 & internetp.size) || (internetp.size & 3) >= 4) {
         auto_p8k -= listy.size;
      }
      let androidr = String.fromCharCode(52,122,114,0) == libglogD;
      do {
         libglogD += `${telegram_.length / 3}`;
         if (androidr) {
            break;
         }
      } while ((telegram_ == libglogD) && androidr);
         telegram_ = `${internetp.size}`;
         listy.set(telegram_, 1 + telegram_.length);
         telegram_ += `${telegram_.length / (Math.max(3, 10))}`;
      if (telegram_.length < 5) {
         telegram_ = `${internetp.size}`;
      }
          let iconsettingn: Array<any> = [String.fromCharCode(116,95,56,51,95,109,101,114,103,105,110,103,0), String.fromCharCode(102,95,57,51,95,104,115,98,0)];
          let readu = 4.0;
          let backO = false;
         listy.set(`${backO}`, (String.fromCharCode(120,0) == appsg ? (backO ? 2 : 1) : appsg.length));
         iconsettingn = [iconsettingn.length];
         readu += 1;
      searchbarB = "3";
      break;
   }
   for (let v = 0; v < 2; v++) {
      updatesR = 5.37 < libflipperZ && updatesR;
   }
   let membershipn = middleL == String.fromCharCode(120,57,50,108,0);
   do {
       let largebrightnessY = String.fromCharCode(104,95,53,50,0);
       let exampleimageb: Array<any> = [String.fromCharCode(121,95,54,53,95,101,114,114,111,114,118,0), String.fromCharCode(119,95,57,54,95,100,120,116,111,114,121,0)];
       let chatW: Map<any, any> = new Map([[String.fromCharCode(114,101,115,111,108,118,95,99,95,51,0),String.fromCharCode(107,95,52,49,95,105,110,118,101,114,118,97,108,0)], [String.fromCharCode(108,95,51,48,95,100,112,114,105,110,116,0),String.fromCharCode(115,105,103,110,101,100,95,56,95,57,55,0)], [String.fromCharCode(114,101,97,115,115,109,95,120,95,57,54,0),String.fromCharCode(105,109,112,108,105,99,105,116,95,52,95,55,50,0)]]);
         exampleimageb = [largebrightnessY.length - chatW.size];
         exampleimageb = [exampleimageb.length - chatW.size];
      if (exampleimageb.length == largebrightnessY.length) {
          let nextI = String.fromCharCode(101,110,100,120,95,113,95,55,51,0);
          let humidityr = String.fromCharCode(104,95,49,57,95,109,100,105,97,0);
         exampleimageb.push(2);
         nextI = `${humidityr.length}`;
         humidityr += `${(humidityr == String.fromCharCode(84,0) ? nextI.length : humidityr.length)}`;
      }
      let release_mrH = largebrightnessY == String.fromCharCode(122,99,99,107,111,97,109,99,0);
      do {
         largebrightnessY = `${chatW.size ^ exampleimageb.length}`;
         if (release_mrH) {
            break;
         }
      } while ((4 == (largebrightnessY.length % 2) && (2 % (Math.max(6, exampleimageb.length))) == 3) && release_mrH);
      if (4 == (1 & exampleimageb.length) || (1 & chatW.size) == 4) {
          let mimoG = String.fromCharCode(102,95,54,57,95,115,105,122,101,100,0);
         exampleimageb = [3];
         mimoG = `${mimoG.length}`;
      }
      middleL = `${parseInt(`${resultK}`) | 3}`;
      if (membershipn) {
         break;
      }
   } while ((!middleL.startsWith(`${componentsa}`)) && membershipn);
   while (skipV.endsWith(turnh)) {
       let gdtadvS: Array<any> = [924, 802];
       let libcrashsdkS = 5.0;
       let expandT: Array<any> = [67, 39, 80];
      while ((libcrashsdkS / 3.87) > 2.54) {
         libcrashsdkS /= Math.max(expandT.length >> (Math.min(4, Math.abs(parseInt(`${libcrashsdkS}`)))), 2);
         break;
      }
       let gradlewW = 5.0;
       let expired9 = 3.0;
          let mapbufferu = String.fromCharCode(100,105,115,116,114,105,98,117,116,101,95,98,95,53,54,0);
          let basketballM: Map<any, any> = new Map([[String.fromCharCode(112,101,97,107,115,95,104,95,49,48,48,0),656], [String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,95,118,95,56,54,0),220], [String.fromCharCode(121,95,50,48,95,98,117,114,115,116,121,0),692]]);
         gradlewW *= gdtadvS.length ^ parseInt(`${libcrashsdkS}`);
         mapbufferu += `${mapbufferu.length}`;
         basketballM.set(mapbufferu, 1 & basketballM.size);
       let gradlew = 3;
       let mbjscommonx = 5;
      if (5 == (3 >> (Math.min(1, gdtadvS.length))) || (expandT.length >> (Math.min(gdtadvS.length, 3))) == 3) {
          let mergerm = 3;
         expandT.push(gradlew >> (Math.min(Math.abs(3), 5)));
         mergerm += mergerm;
      }
      while ((gradlew * expired9) >= 4.96) {
         expired9 *= parseInt(`${expired9}`) | gradlew;
         break;
      }
      let hookE = 8047655 >= expandT.length;
      do {
         expandT.push(parseInt(`${libcrashsdkS}`));
         if (hookE) {
            break;
         }
      } while (((expandT.length | 1) == 2) && hookE);
         expandT.push(2);
      while ((expired9 / (Math.max(gradlewW, 6))) < 2.74 || 3.6 < (expired9 / 2.74)) {
          let runtimeschedulerK: Map<any, any> = new Map([[String.fromCharCode(113,95,54,50,95,110,111,116,105,99,101,115,0),true ], [String.fromCharCode(108,95,48,95,115,116,114,102,117,110,99,0),true ], [String.fromCharCode(100,99,98,108,111,99,107,95,52,95,49,49,0),false ]]);
          let componentregistry_ = 1;
         gradlewW -= componentregistry_;
         runtimeschedulerK.set(`${runtimeschedulerK.size}`, runtimeschedulerK.size >> (Math.min(Math.abs(1), 1)));
         componentregistry_ %= Math.max(1, 1 / (Math.max(3, runtimeschedulerK.size)));
         break;
      }
      turnh += `${lightA.length + 2}`;
      break;
   }
   for (let j = 0; j < 2; j++) {
      searchbarB = `${parseInt(`${libflipperZ}`)}`;
   }
   for (let f = 0; f < 3; f++) {
       let userd = String.fromCharCode(115,95,54,55,95,109,111,100,101,0);
       let iconsubssuccesse: Array<any> = [728, 245];
       let plashA = 5.0;
       let combinek = true;
       let headerB = String.fromCharCode(112,114,105,109,101,114,95,103,95,52,56,0);
      while (!combinek) {
         combinek = headerB.length >= 47 || 77.60 >= plashA;
         break;
      }
       let prediction1 = false;
         plashA -= (parseFloat(`${(combinek ? 4 : 5)}`));
       let policyP = String.fromCharCode(98,117,102,102,101,114,115,95,51,95,52,56,0);
       let become_ = String.fromCharCode(97,95,57,52,95,99,111,109,112,111,115,101,100,0);
      while (headerB.length == 2 || !prediction1) {
         prediction1 = 64 >= headerB.length || policyP.length >= 64;
         break;
      }
          let register_6mw = false;
         plashA *= parseFloat(`${policyP.length + parseInt(`${plashA}`)}`);
         register_6mw = !register_6mw;
      let handlerl = 8410784 <= become_.length;
      do {
         become_ = `${headerB.length / (Math.max(1, policyP.length))}`;
         if (handlerl) {
            break;
         }
      } while (handlerl && (become_.startsWith(`${policyP.length}`)));
       let knewinterstitialq = 4.0;
         headerB = `${(become_.length + (prediction1 ? 1 : 5))}`;
         headerB = `${(String.fromCharCode(67,0) == become_ ? (combinek ? 3 : 5) : become_.length)}`;
      while (!prediction1) {
         prediction1 = knewinterstitialq > 18.18;
         break;
      }
       let soundw: Map<any, any> = new Map([[String.fromCharCode(116,119,101,97,107,115,95,118,95,51,56,0),864], [String.fromCharCode(101,112,104,101,109,101,114,97,108,95,108,95,50,51,0),279]]);
       let indexB = true;
       let loginZ = false;
       let videocommonA = String.fromCharCode(98,105,110,100,108,105,115,116,95,57,95,51,52,0);
          let flag1 = String.fromCharCode(115,95,51,52,95,115,99,117,98,98,101,114,0);
          let watchnowbgr = String.fromCharCode(118,95,55,56,95,119,104,105,99,104,0);
         become_ += `${parseInt(`${knewinterstitialq}`) % (Math.max(become_.length, 5))}`;
         flag1 += `${watchnowbgr.length}`;
         watchnowbgr += `${1 >> (Math.min(2, watchnowbgr.length))}`;
      updatesR = searchbarB.length > 70;
      userd = `${userd.length}`;
      iconsubssuccesse = [(String.fromCharCode(74,0) == userd ? iconsubssuccesse.length : userd.length)];
   }
      turnB.set(skipV, turnh.length);
   for (let g = 0; g < 1; g++) {
       let refresh5 = 2.0;
      for (let e = 0; e < 1; e++) {
          let sentryE: Map<any, any> = new Map([[String.fromCharCode(122,95,48,95,112,114,111,98,0),397], [String.fromCharCode(115,95,49,54,95,102,105,103,104,116,101,114,115,0),658], [String.fromCharCode(100,95,49,53,95,114,101,115,105,108,105,101,110,99,101,0),33]]);
         refresh5 *= parseInt(`${refresh5}`);
         sentryE = new Map([[`${sentryE.size}`, sentryE.size]]);
      }
      let libreanimatedW = 6664863.0 <= refresh5;
      do {
         refresh5 -= 1;
         if (libreanimatedW) {
            break;
         }
      } while ((refresh5 == 4.99) && libreanimatedW);
      for (let g = 0; g < 2; g++) {
         refresh5 += 1;
      }
      uimanagerd *= parseFloat(`${parseInt(`${uimanagerd}`) << (Math.min(skipV.length, 1))}`);
   }
       let tooltipsZ = String.fromCharCode(113,95,50,56,95,101,120,112,101,99,116,0);
       let sideb: Array<any> = [458, 882, 508];
       let update__x = String.fromCharCode(107,109,115,95,110,95,49,48,48,0);
      while (tooltipsZ != update__x) {
          let libreactT: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,114,111,116,97,116,101,95,115,95,55,56,0),444], [String.fromCharCode(116,95,57,56,95,112,111,112,0),606], [String.fromCharCode(120,95,55,95,109,117,116,117,97,108,0),673]]);
          let libreactnativeblobL = 2;
          let nextT = 0.0;
          let auto_cr = String.fromCharCode(115,95,49,55,95,116,101,114,109,115,101,116,0);
         update__x = `${auto_cr.length & libreactT.size}`;
         libreactT.set(`${nextT}`, 1);
         libreactnativeblobL *= parseInt(`${nextT}`);
         auto_cr += `${parseInt(`${nextT}`)}`;
         break;
      }
         sideb = [sideb.length];
      while (sideb.length >= 5) {
         update__x = `${(update__x == String.fromCharCode(75,0) ? update__x.length : tooltipsZ.length)}`;
         break;
      }
      let routerr = 6764448 <= sideb.length;
      do {
         sideb = [tooltipsZ.length - update__x.length];
         if (routerr) {
            break;
         }
      } while ((!update__x.endsWith(`${sideb.length}`)) && routerr);
         update__x = `${update__x.length}`;
      nativeE = (middleL.length | lightA.length) == 89;
      nativeE = turnB.size >= 10;
   while (updatesR) {
      updatesR = (skipV.length & lightA.length) < 48;
      break;
   }
      iconsubssuccess8 = new Map([[`${libflipperZ}`, (String.fromCharCode(72,0) == middleL ? middleL.length : parseInt(`${libflipperZ}`))]]);
   if (5 > middleL.length) {
       let successS: Array<any> = [392, 520, 313];
      while (1 == (successS.length / 5)) {
         successS.push(1 >> (Math.min(4, successS.length)));
         break;
      }
          let listM: Array<any> = [664, 493];
          let privacya = String.fromCharCode(102,111,117,114,99,99,95,107,95,54,55,0);
         successS = [(privacya == String.fromCharCode(118,0) ? listM.length : privacya.length)];
      while ((3 * successS.length) < 4 && (3 * successS.length) < 1) {
          let libreactnativejniV = 5;
          let reactC = String.fromCharCode(102,111,114,109,97,110,116,95,121,95,57,49,0);
          let usernameO = String.fromCharCode(114,101,108,97,121,95,116,95,56,57,0);
          let zoomo = 3.0;
          let schedulerh = 2.0;
         successS.push(3 << (Math.min(Math.abs(parseInt(`${schedulerh}`)), 1)));
         libreactnativejniV <<= Math.min(2, Math.abs(libreactnativejniV & 2));
         reactC += `${reactC.length}`;
         usernameO = `${parseInt(`${zoomo}`)}`;
         zoomo *= parseInt(`${zoomo}`) * 1;
         schedulerh -= parseInt(`${zoomo}`);
         break;
      }
      middleL = `${(searchbarB == String.fromCharCode(66,0) ? searchbarB.length : parseInt(`${uimanagerd}`))}`;
   }

    setIsDialogOpen(!isDialogOpen);
  };

  const refreshUserState = async () => {
       let sellU = 1.0;
    let umengK: Array<any> = [486, 158];
    let cornerI = String.fromCharCode(99,111,110,100,101,110,115,97,98,108,101,95,98,95,51,56,0);
    let champion4 = String.fromCharCode(103,95,56,50,95,98,97,115,101,108,105,110,101,0);
    let filedE = String.fromCharCode(104,105,103,104,101,114,95,56,95,52,0);
    let imagese = String.fromCharCode(105,110,116,112,95,100,95,53,48,0);
    let placeholderk = String.fromCharCode(100,101,102,108,105,99,107,101,114,95,102,95,52,52,0);
    let dependencyt = 4;
    let androidX = 2.0;
    let executor8 = String.fromCharCode(113,95,51,48,95,115,116,97,99,107,101,100,0);
    let stylese: Map<any, any> = new Map([[String.fromCharCode(98,97,100,103,101,95,121,95,56,55,0),true ], [String.fromCharCode(105,95,51,52,95,118,97,114,105,97,110,99,101,115,0),true ], [String.fromCharCode(107,95,52,56,95,115,99,97,108,101,0),false ]]);
    let modals: Map<any, any> = new Map([[String.fromCharCode(97,95,52,51,95,100,101,98,117,103,0),388], [String.fromCharCode(119,95,57,54,95,119,105,110,116,104,114,101,97,100,0),293], [String.fromCharCode(118,97,108,105,100,97,116,111,114,95,114,95,52,50,0),747]]);
      imagese += `${filedE.length}`;
   let bottomG = champion4.length >= 6550722;
   do {
       let dragN = String.fromCharCode(104,95,52,50,95,115,99,97,109,0);
       let rulesX = String.fromCharCode(110,95,51,52,95,100,101,99,111,100,97,98,108,101,0);
       let referrerb: Array<any> = [902, 656, 557];
         rulesX = `${referrerb.length}`;
      for (let s = 0; s < 2; s++) {
         rulesX += `${referrerb.length + rulesX.length}`;
      }
          let jingdong8 = 1.0;
         rulesX += `${rulesX.length}`;
         jingdong8 -= 3 / (Math.max(7, parseInt(`${jingdong8}`)));
         rulesX += `${referrerb.length}`;
         referrerb.push(3 << (Math.min(3, rulesX.length)));
         rulesX += `${(String.fromCharCode(82,0) == rulesX ? dragN.length : rulesX.length)}`;
      while ((dragN.length - 5) < 2) {
          let graphicsV = String.fromCharCode(117,110,105,95,50,95,50,49,0);
          let native0 = String.fromCharCode(101,100,103,101,95,113,95,54,54,0);
          let animationsn: Map<any, any> = new Map([[String.fromCharCode(120,95,53,51,95,99,112,117,105,100,0),632], [String.fromCharCode(120,95,53,49,95,115,118,113,101,110,99,0),773], [String.fromCharCode(97,95,54,95,116,116,97,100,97,116,97,0),808]]);
          let connectionY = false;
         referrerb = [native0.length];
         graphicsV = `${animationsn.size << (Math.min(graphicsV.length, 5))}`;
         native0 += `${(String.fromCharCode(74,0) == graphicsV ? animationsn.size : graphicsV.length)}`;
         connectionY = graphicsV == String.fromCharCode(82,0);
         break;
      }
         rulesX = `${referrerb.length}`;
      for (let a = 0; a < 1; a++) {
         dragN += `${(String.fromCharCode(117,0) == dragN ? dragN.length : referrerb.length)}`;
      }
      champion4 += `${parseInt(`${androidX}`) + filedE.length}`;
      if (bottomG) {
         break;
      }
   } while ((filedE == champion4) && bottomG);
       let manifestb = true;
       let minivodo = 3.0;
       let megaphonej: Map<any, any> = new Map([[String.fromCharCode(98,105,103,110,117,109,95,121,95,56,0),671], [String.fromCharCode(117,95,50,49,95,118,105,98,114,97,116,105,111,110,0),443]]);
       let application9: Map<any, any> = new Map([[String.fromCharCode(115,95,50,48,95,108,111,99,97,108,105,122,97,98,108,101,0),false ], [String.fromCharCode(122,95,54,95,111,110,115,101,116,0),false ]]);
       let configurev: Map<any, any> = new Map([[String.fromCharCode(97,95,53,95,112,115,104,0),String.fromCharCode(105,95,57,56,95,120,118,105,100,0)], [String.fromCharCode(108,95,51,56,95,116,105,110,121,0),String.fromCharCode(115,95,49,52,95,98,105,110,98,110,0)]]);
      if ((configurev.size * 5) > 1 || 1 > (application9.size * 5)) {
         application9 = new Map([[`${configurev.size}`, configurev.size]]);
      }
      for (let h = 0; h < 1; h++) {
         manifestb = minivodo <= megaphonej.size;
      }
         configurev.set(`${minivodo}`, 3 & parseInt(`${minivodo}`));
      if (3 == (1 + configurev.size)) {
         application9.set(`${minivodo}`, parseInt(`${minivodo}`) / (Math.max(2, 8)));
      }
       let runtimep = 4.0;
         application9 = new Map([[`${application9.size}`, 3]]);
      for (let s = 0; s < 2; s++) {
          let mathO = false;
          let mbnativeadvancedc = true;
          let internetI = 5.0;
          let privilegeN = 3.0;
          let tempX = 3.0;
         configurev.set(`${tempX}`, ((manifestb ? 5 : 2) | parseInt(`${tempX}`)));
         mathO = internetI > privilegeN;
         mbnativeadvancedc = !mathO;
         internetI += ((mbnativeadvancedc ? 5 : 4) >> (Math.min(Math.abs((mathO ? 4 : 3)), 1)));
         privilegeN -= parseFloat(`${parseInt(`${internetI}`)}`);
      }
         manifestb = 35.73 > minivodo && configurev.size > 77;
      champion4 += `${filedE.length << (Math.min(Math.abs(1), 5))}`;
       let iconmorep: Map<any, any> = new Map([[String.fromCharCode(110,95,51,95,101,120,112,105,114,101,0),true ], [String.fromCharCode(119,101,108,115,95,55,95,52,53,0),true ]]);
      for (let p = 0; p < 2; p++) {
          let static_1O = String.fromCharCode(104,95,55,50,95,102,108,97,116,116,101,110,0);
          let gemfileI = 2.0;
          let hongkong3: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,118,101,109,97,112,95,55,95,54,56,0),true ], [String.fromCharCode(108,95,50,95,115,121,109,101,118,101,110,0),true ]]);
          let editW: Map<any, any> = new Map([[String.fromCharCode(97,116,116,105,98,117,116,101,115,95,122,95,56,56,0),205], [String.fromCharCode(115,117,112,112,114,101,115,115,95,112,95,55,53,0),572], [String.fromCharCode(99,118,99,95,54,95,52,49,0),743]]);
          let yellowq: Array<any> = [String.fromCharCode(114,95,52,49,95,112,108,97,110,97,114,0), String.fromCharCode(120,95,50,53,95,103,101,110,101,114,105,99,115,0), String.fromCharCode(115,105,103,110,101,100,95,51,95,57,52,0)];
         iconmorep.set(`${gemfileI}`, 2);
         static_1O += `${hongkong3.size | editW.size}`;
         gemfileI -= 3 >> (Math.min(3, yellowq.length));
         hongkong3 = new Map([[`${hongkong3.size}`, static_1O.length - 2]]);
         editW.set(`${static_1O}`, static_1O.length);
         yellowq = [editW.size % 1];
      }
         iconmorep.set(`${iconmorep.size}`, iconmorep.size / (Math.max(3, 2)));
          let stylesf = String.fromCharCode(112,97,99,105,110,103,95,107,95,49,0);
          let searchbaro = 5.0;
         iconmorep.set(`${stylesf}`, (stylesf == String.fromCharCode(113,0) ? stylesf.length : iconmorep.size));
         searchbaro *= 3;
      imagese = `${stylese.size / (Math.max(cornerI.length, 4))}`;
      sellU *= parseFloat(`${cornerI.length ^ parseInt(`${sellU}`)}`);
       let typesW: Array<any> = [5, 251];
         typesW.push(typesW.length * typesW.length);
      let default_q0 = typesW.length <= 7600065;
      do {
         typesW.push(3);
         if (default_q0) {
            break;
         }
      } while (default_q0 && (typesW.length < 3));
      for (let i = 0; i < 2; i++) {
          let hongkongf: Map<any, any> = new Map([[String.fromCharCode(98,95,51,48,95,109,100,97,121,0),false ], [String.fromCharCode(101,110,97,98,108,101,95,106,95,55,51,0),false ], [String.fromCharCode(110,95,53,55,95,104,97,115,104,107,101,121,0),true ]]);
         typesW.push(1 - hongkongf.size);
      }
      dependencyt -= dependencyt >> (Math.min(placeholderk.length, 4));
   while ((androidX / (Math.max(3.54, 6))) == 3.94) {
       let stationi = 3.0;
       let q_manager_ = 1;
       let moviesU: Map<any, any> = new Map([[String.fromCharCode(112,114,105,111,114,105,116,121,95,117,95,54,49,0),617], [String.fromCharCode(116,105,108,101,109,107,97,95,119,95,49,56,0),484]]);
       let bootD = 3.0;
      let updatess = moviesU.size <= 9720018;
      do {
         moviesU = new Map([[`${moviesU.size}`, parseInt(`${bootD}`)]]);
         if (updatess) {
            break;
         }
      } while ((moviesU.get(`${q_manager_}`) != null) && updatess);
      for (let d = 0; d < 2; d++) {
         moviesU.set(`${q_manager_}`, moviesU.size | q_manager_);
      }
          let hovera = String.fromCharCode(114,116,109,112,112,107,116,95,121,95,56,55,0);
         moviesU = new Map([[`${moviesU.size}`, moviesU.size]]);
         hovera += `${hovera.length | hovera.length}`;
      for (let h = 0; h < 1; h++) {
         bootD -= parseFloat(`${parseInt(`${stationi}`)}`);
      }
      for (let a = 0; a < 1; a++) {
         q_manager_ %= Math.max(parseInt(`${bootD}`), 1);
      }
      if (q_manager_ == stationi) {
         q_manager_ *= 1;
      }
         bootD += parseFloat(`${moviesU.size << (Math.min(Math.abs(2), 3))}`);
         bootD += parseFloat(`${moviesU.size}`);
       let mbbidz = 4.0;
          let libjsijniprofiler3 = String.fromCharCode(100,97,118,115,95,101,95,57,53,0);
          let indicatorJ = 2;
         stationi *= 2;
         libjsijniprofiler3 = `${indicatorJ - libjsijniprofiler3.length}`;
         indicatorJ &= indicatorJ & libjsijniprofiler3.length;
      while (3.63 <= (stationi + moviesU.size) || (moviesU.size + stationi) <= 3.63) {
         moviesU.set(`${stationi}`, q_manager_);
         break;
      }
         mbbidz += parseFloat(`${3}`);
      androidX += parseInt(`${sellU}`);
      break;
   }

    const result = await wwIconscheduleColors.getUserDetails();

      imagese += `${parseInt(`${androidX}`) & dependencyt}`;
   while ((filedE.length % 3) > 4) {
       let privacy2 = String.fromCharCode(109,95,50,49,95,110,101,111,110,116,101,115,116,0);
       let analyticR = String.fromCharCode(114,101,108,97,121,115,95,106,95,53,57,0);
       let viewsS: Map<any, any> = new Map([[String.fromCharCode(110,95,53,95,108,111,97,100,0),256], [String.fromCharCode(112,99,109,119,98,95,103,95,54,50,0),657], [String.fromCharCode(122,95,54,50,95,111,108,100,108,105,115,116,0),840]]);
       let long_tp = true;
       let dangerG = true;
      let iconuserz = String.fromCharCode(114,120,106,116,0) == privacy2;
      do {
         privacy2 = "1";
         if (iconuserz) {
            break;
         }
      } while ((!long_tp) && iconuserz);
          let projectM = String.fromCharCode(116,95,52,52,95,117,116,112,117,116,0);
          let codec = 3.0;
          let kickc = String.fromCharCode(114,110,103,95,106,95,56,48,0);
         privacy2 += "2";
         projectM = `${3 >> (Math.min(3, Math.abs(parseInt(`${codec}`))))}`;
         codec *= projectM.length ^ 3;
         kickc = `${projectM.length + parseInt(`${codec}`)}`;
       let iconfeedbackD = 0.0;
         iconfeedbackD *= ((dangerG ? 1 : 1) / (Math.max(parseInt(`${iconfeedbackD}`), 5)));
          let rulesI = 4.0;
         iconfeedbackD -= ((dangerG ? 5 : 2));
         rulesI -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${rulesI}`)), 3))}`);
      for (let v = 0; v < 3; v++) {
         analyticR += `${((long_tp ? 3 : 4) << (Math.min(2, Math.abs((dangerG ? 2 : 4)))))}`;
      }
      let hooksK = dangerG ? !dangerG : dangerG;
      do {
         dangerG = iconfeedbackD < 43.3;
         if (hooksK) {
            break;
         }
      } while (hooksK && (dangerG));
          let defaultplayerimgI = 3.0;
          let championC = String.fromCharCode(121,95,57,52,95,114,111,119,107,101,121,0);
         iconfeedbackD /= Math.max(((long_tp ? 4 : 2) ^ 2), 5);
         defaultplayerimgI += parseFloat(`${parseInt(`${defaultplayerimgI}`)}`);
         championC = `${parseInt(`${defaultplayerimgI}`)}`;
          let edito = 5;
         privacy2 += `${((dangerG ? 3 : 1) & 1)}`;
         edito |= 3;
      let playercommonr = dangerG ? !dangerG : dangerG;
      do {
          let progress1 = String.fromCharCode(107,108,97,115,115,95,48,95,56,51,0);
          let catalog1: Array<any> = [653, 141, 925];
         dangerG = progress1.length <= 87;
         progress1 += `${catalog1.length}`;
         catalog1.push(2 - catalog1.length);
         if (playercommonr) {
            break;
         }
      } while ((long_tp || dangerG) && playercommonr);
         analyticR = "1";
      while (iconfeedbackD >= 3.85) {
         dangerG = !long_tp;
         break;
      }
          let matha = true;
          let sportsc = 5.0;
          let libsentryY = String.fromCharCode(110,95,53,51,0);
         viewsS = new Map([[`${viewsS.size}`, 3]]);
         matha = !matha;
         sportsc -= ((matha ? 5 : 4) >> (Math.min(Math.abs(parseInt(`${sportsc}`)), 5)));
         libsentryY += "1";
         iconfeedbackD += privacy2.length;
      while (5 >= analyticR.length && !dangerG) {
         analyticR = "1";
         break;
      }
      androidX += dependencyt;
      break;
   }
   for (let v = 0; v < 3; v++) {
      androidX /= Math.max(2, 2);
   }
       let dataA = 2;
       let backgroundd = String.fromCharCode(99,95,51,54,95,100,101,115,116,114,117,99,116,0);
          let indexQ: Map<any, any> = new Map([[String.fromCharCode(97,95,54,49,95,114,101,99,101,112,116,105,111,110,0),String.fromCharCode(101,95,56,57,0)], [String.fromCharCode(109,95,52,95,109,97,114,107,101,100,0),String.fromCharCode(116,97,107,101,95,111,95,57,54,0)], [String.fromCharCode(106,95,49,57,95,112,114,111,112,111,114,116,105,111,110,0),String.fromCharCode(101,95,57,54,95,115,112,97,99,101,100,0)]]);
          let pauseA = 5.0;
          let updatesn = true;
         dataA &= indexQ.size | dataA;
         indexQ = new Map([[`${pauseA}`, parseInt(`${pauseA}`) / 3]]);
         updatesn = !updatesn;
      for (let r = 0; r < 3; r++) {
         dataA >>= Math.min(Math.abs(dataA), 4);
      }
          let runtimea = String.fromCharCode(116,104,111,117,103,104,95,48,95,54,50,0);
          let stationa = String.fromCharCode(102,117,108,108,95,116,95,55,50,0);
          let arrowright8: Array<any> = [998, 586, 791];
         dataA /= Math.max(1, 3 | stationa.length);
         runtimea += `${runtimea.length}`;
         stationa += `${runtimea.length}`;
         arrowright8 = [arrowright8.length >> (Math.min(runtimea.length, 2))];
       let nativeU = true;
      while ((2 + backgroundd.length) < 1 && 2 < (dataA + 2)) {
         dataA <<= Math.min(1, Math.abs(dataA));
         break;
      }
         backgroundd = `${backgroundd.length * 2}`;
      umengK = [2];
      filedE = `${2 << (Math.min(1, executor8.length))}`;
   if (placeholderk.startsWith(imagese)) {
      imagese = `${3 & stylese.size}`;
   }
      umengK = [stylese.size + executor8.length];
    if (result == null) {

   while (filedE.endsWith(`${imagese.length}`)) {
      imagese = `${1 & umengK.length}`;
      break;
   }
      executor8 = `${dependencyt >> (Math.min(placeholderk.length, 4))}`;
   for (let p = 0; p < 2; p++) {
       let common8 = 2.0;
       let auto_au = 0.0;
          let footballfield_ = true;
          let rankf = 2.0;
          let buildf: Array<any> = [String.fromCharCode(98,97,110,100,119,105,100,116,104,95,119,95,53,50,0), String.fromCharCode(115,116,121,108,95,115,95,53,54,0)];
         auto_au *= parseFloat(`${1 * buildf.length}`);
         footballfield_ = rankf < rankf;
       let placeholderY: Map<any, any> = new Map([[String.fromCharCode(101,95,49,57,95,116,105,107,101,114,0),String.fromCharCode(105,95,49,56,95,97,114,116,105,102,97,99,116,0)], [String.fromCharCode(98,95,53,50,95,115,104,97,114,112,110,101,115,115,0),String.fromCharCode(120,106,112,101,103,95,54,95,55,56,0)], [String.fromCharCode(97,95,52,95,112,97,121,101,101,0),String.fromCharCode(117,110,109,97,112,95,122,95,57,51,0)]]);
      let anythinkt = 9431654.0 <= auto_au;
      do {
          let profileU = String.fromCharCode(109,95,56,95,105,110,115,116,97,108,108,115,0);
          let rncoreP = String.fromCharCode(100,95,49,48,48,95,116,111,110,0);
          let tickQ = String.fromCharCode(115,116,114,116,111,105,110,116,95,105,95,52,49,0);
         auto_au += parseFloat(`${parseInt(`${common8}`) ^ tickQ.length}`);
         profileU = `${profileU.length}`;
         rncoreP += `${rncoreP.length * profileU.length}`;
         tickQ = `${rncoreP.length}`;
         if (anythinkt) {
            break;
         }
      } while (anythinkt && ((auto_au - 4.28) < 1.49 && 4.34 < (4.28 - common8)));
          let teamL = 2.0;
          let emoji3 = String.fromCharCode(121,95,52,48,95,112,114,111,99,101,100,117,114,101,115,0);
         auto_au += (parseFloat(`${String.fromCharCode(117,0) == emoji3 ? emoji3.length : parseInt(`${teamL}`)}`));
      if ((parseFloat(`${placeholderY.size}`) + auto_au) < 4.49 && (placeholderY.size ^ 2) < 5) {
         auto_au *= parseFloat(`${parseInt(`${common8}`)}`);
      }
      let streamingA = 6770472.0 <= common8;
      do {
          let detailO = 0;
          let playM = false;
          let humidityg = String.fromCharCode(109,97,107,101,100,112,107,103,95,57,95,50,48,0);
          let matchactive2 = 2.0;
          let paginationQ = String.fromCharCode(112,111,115,116,102,105,120,95,106,95,56,48,0);
         common8 *= parseFloat(`${parseInt(`${auto_au}`)}`);
         detailO >>= Math.min(5, Math.abs(humidityg.length + 2));
         playM = 38 >= detailO;
         humidityg = "2";
         matchactive2 -= paginationQ.length;
         paginationQ = "2";
         if (streamingA) {
            break;
         }
      } while (streamingA && ((2.94 - common8) >= 1.10 && 3.48 >= (common8 * 2.94)));
      cornerI = `${3 & parseInt(`${androidX}`)}`;
   }
       let trashs = 1.0;
         trashs *= parseFloat(`${parseInt(`${trashs}`) | 2}`);
          let customs = String.fromCharCode(115,115,105,109,95,97,95,52,55,0);
          let gifgoalbgN = String.fromCharCode(108,95,57,54,95,115,116,97,114,116,0);
         trashs -= parseFloat(`${gifgoalbgN.length - customs.length}`);
         trashs -= parseFloat(`${parseInt(`${trashs}`) ^ parseInt(`${trashs}`)}`);
      androidX += parseInt(`${androidX}`);
      executor8 = `${imagese.length + 2}`;
       let valuesy = String.fromCharCode(101,95,51,57,95,103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,0);
       let reviewK: Array<any> = [600, 265];
      let interstitial0 = reviewK.length >= 8788860;
      do {
         reviewK.push((valuesy == String.fromCharCode(65,0) ? valuesy.length : reviewK.length));
         if (interstitial0) {
            break;
         }
      } while ((valuesy.startsWith(`${reviewK.length}`)) && interstitial0);
          let submitE = 0;
          let halfO = String.fromCharCode(99,95,57,54,95,120,99,101,112,116,105,111,110,0);
          let nalytics1: Array<any> = [342, 723, 55];
         reviewK.push(1);
         submitE ^= submitE;
         halfO += `${nalytics1.length}`;
         nalytics1 = [halfO.length];
         valuesy = `${reviewK.length}`;
      while ((2 % (Math.max(10, reviewK.length))) >= 2 && 2 >= (reviewK.length % (Math.max(valuesy.length, 7)))) {
         valuesy += `${valuesy.length - 2}`;
         break;
      }
      while (3 <= (reviewK.length * 5) || (5 * reviewK.length) <= 3) {
         valuesy = `${valuesy.length & 1}`;
         break;
      }
         reviewK = [reviewK.length];
      executor8 = `${umengK.length}`;
      sellU *= parseFloat(`${placeholderk.length}`);
      return;
    }

    await dispatch(updateUserAuth(result));

       let collectionl = 0.0;
      let blackj = 5670313.0 >= collectionl;
      do {
          let whiteanimationlives = String.fromCharCode(114,95,56,48,95,98,117,102,114,101,102,0);
          let long_yx: Map<any, any> = new Map([[String.fromCharCode(118,105,122,105,101,114,95,117,95,50,55,0),117], [String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,95,119,95,57,53,0),674], [String.fromCharCode(115,101,112,97,114,97,116,111,114,95,116,95,50,50,0),129]]);
          let profileactiver = 0.0;
          let backgroundq = String.fromCharCode(98,95,56,48,95,114,117,110,110,105,110,103,0);
          let yingq = String.fromCharCode(119,95,57,56,95,102,111,114,103,101,116,0);
         collectionl -= parseFloat(`${backgroundq.length ^ 2}`);
         whiteanimationlives += `${1 & yingq.length}`;
         long_yx = new Map([[yingq, 2]]);
         profileactiver /= Math.max((parseFloat(`${whiteanimationlives == String.fromCharCode(74,0) ? long_yx.size : whiteanimationlives.length}`)), 3);
         backgroundq = `${(yingq == String.fromCharCode(73,0) ? yingq.length : whiteanimationlives.length)}`;
         if (blackj) {
            break;
         }
      } while (blackj && (collectionl > collectionl));
         collectionl += parseFloat(`${parseInt(`${collectionl}`) - parseInt(`${collectionl}`)}`);
      while ((collectionl / (Math.max(collectionl, 2))) <= 5.61 || (collectionl / 5.61) <= 4.55) {
         collectionl /= Math.max(parseFloat(`${parseInt(`${collectionl}`) + 2}`), 3);
         break;
      }
      sellU *= parseFloat(`${executor8.length}`);
   while (sellU <= 2.21) {
      imagese = `${3 & cornerI.length}`;
      break;
   }
       let nativet = 5;
       let yellowredcardh = 5.0;
       let register_pmr = 2.0;
          let defaultplayerimgY = String.fromCharCode(120,95,56,56,0);
          let configJ = String.fromCharCode(101,95,53,55,95,105,110,99,111,109,105,110,103,0);
          let middlewareo: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,101,114,95,98,95,49,54,0),String.fromCharCode(97,117,116,111,114,111,116,97,116,101,95,120,95,51,50,0)], [String.fromCharCode(105,95,57,50,95,99,111,110,118,101,114,116,105,110,103,0),String.fromCharCode(112,97,116,104,95,112,95,51,54,0)], [String.fromCharCode(98,97,99,107,103,114,111,117,110,100,95,105,95,57,50,0),String.fromCharCode(97,95,51,95,97,109,101,120,0)]]);
         yellowredcardh -= 3;
         defaultplayerimgY += `${3 >> (Math.min(4, defaultplayerimgY.length))}`;
         configJ = `${defaultplayerimgY.length & 1}`;
         middlewareo.set(configJ, (String.fromCharCode(98,0) == configJ ? defaultplayerimgY.length : configJ.length));
          let mbbannerm: Map<any, any> = new Map([[String.fromCharCode(100,105,99,116,105,111,110,97,114,105,101,115,95,115,95,50,55,0),906], [String.fromCharCode(114,95,54,95,118,112,109,116,0),963], [String.fromCharCode(119,95,57,51,95,117,110,108,105,110,107,101,100,0),28]]);
         register_pmr += nativet - mbbannerm.size;
      for (let p = 0; p < 1; p++) {
         nativet &= 3 & parseInt(`${register_pmr}`);
      }
       let singlel = true;
       let entryd = false;
      if (nativet < 4 && (nativet * 4) < 1) {
         singlel = register_pmr <= 64.7;
      }
      while (!entryd) {
         entryd = yellowredcardh == 70.61;
         break;
      }
         nativet += parseInt(`${register_pmr}`) % 3;
      let paginationX = nativet >= 8485028;
      do {
         nativet |= ((entryd ? 3 : 2));
         if (paginationX) {
            break;
         }
      } while (((register_pmr / 4.100) >= 5.22 && 3 >= (nativet & 1)) && paginationX);
         entryd = !singlel;
      champion4 += `${umengK.length / 1}`;
       let servicez = String.fromCharCode(115,116,101,112,115,105,122,101,95,104,95,51,53,0);
       let register_c0m = String.fromCharCode(110,101,115,116,95,110,95,50,54,0);
       let slider5: Map<any, any> = new Map([[String.fromCharCode(99,95,51,48,95,104,101,97,100,115,101,116,0),282], [String.fromCharCode(110,102,116,95,51,95,53,53,0),236], [String.fromCharCode(116,101,108,108,97,114,95,102,95,56,56,0),21]]);
       let infoq: Map<any, any> = new Map([[String.fromCharCode(111,95,53,53,95,99,104,114,111,109,97,109,99,0),172], [String.fromCharCode(117,95,51,52,95,97,116,114,105,109,0),945]]);
         register_c0m = `${(register_c0m == String.fromCharCode(51,0) ? register_c0m.length : slider5.size)}`;
       let feedbackG = 3.0;
      while (3 == (infoq.size << (Math.min(Math.abs(4), 5))) && (4 << (Math.min(2, register_c0m.length))) == 2) {
         infoq = new Map([[`${infoq.size}`, (servicez == String.fromCharCode(51,0) ? servicez.length : infoq.size)]]);
         break;
      }
         slider5.set(`${slider5.size}`, slider5.size % (Math.max(infoq.size, 2)));
      if ((5 << (Math.min(4, Math.abs(infoq.size)))) > 4 || (5 << (Math.min(3, Math.abs(infoq.size)))) > 1) {
         infoq = new Map([[`${infoq.size}`, infoq.size]]);
      }
      filedE += `${(String.fromCharCode(73,0) == imagese ? imagese.length : dependencyt)}`;
   for (let h = 0; h < 2; h++) {
      umengK.push(imagese.length / (Math.max(3, 5)));
   }
      stylese = new Map([[`${umengK.length}`, umengK.length]]);
      placeholderk += `${2 % (Math.max(2, stylese.size))}`;
    return;
  };

  const handleRefresh = async () => {
       let questl = 2;
    let morej = String.fromCharCode(104,97,115,104,101,115,95,57,95,49,51,0);
    let androidP = String.fromCharCode(98,114,97,110,100,115,95,48,95,49,55,0);
    let scrollviewT: Array<any> = [String.fromCharCode(105,110,116,101,114,97,116,105,111,110,95,118,95,49,52,0), String.fromCharCode(103,95,54,51,95,115,105,103,110,105,102,105,99,97,110,99,101,0), String.fromCharCode(120,95,50,56,95,108,122,115,115,0)];
    let libglogn: Array<any> = [String.fromCharCode(100,105,109,101,110,115,105,111,110,115,95,52,95,49,55,0), String.fromCharCode(100,105,115,112,108,97,121,101,100,95,51,95,57,55,0), String.fromCharCode(120,95,51,51,95,97,97,114,99,104,0)];
    let readf = 0.0;
    let gdtadvY = 5.0;
    let weatherT = 1;
    let materialk: Map<any, any> = new Map([[String.fromCharCode(117,109,98,114,101,108,108,97,95,113,95,54,50,0),295], [String.fromCharCode(115,118,97,114,105,110,116,95,118,95,55,51,0),293]]);
    let emptyk = 0;
    let config_ = String.fromCharCode(97,117,114,97,95,110,95,50,53,0);
    let dplusB = true;
   for (let r = 0; r < 1; r++) {
      weatherT <<= Math.min(1, Math.abs(1));
   }
      readf += 3;
      libglogn.push(parseInt(`${gdtadvY}`));
   if (4 < (5 - morej.length) || 3 < (5 - emptyk)) {
      morej = "3";
   }
       let submitY = String.fromCharCode(105,95,54,56,95,104,105,103,104,115,104,101,108,102,0);
          let reviewq = String.fromCharCode(106,95,48,95,101,112,111,110,121,109,111,117,115,0);
         submitY += `${submitY.length ^ reviewq.length}`;
      if (submitY != String.fromCharCode(120,0)) {
          let g_title8 = 3.0;
         submitY += "1";
         g_title8 /= Math.max(2, parseFloat(`${parseInt(`${g_title8}`) * 1}`));
      }
         submitY += `${3 << (Math.min(5, submitY.length))}`;
      scrollviewT = [materialk.size];
   while (!androidP.endsWith(`${materialk.size}`)) {
      materialk = new Map([[`${gdtadvY}`, 2]]);
      break;
   }
   for (let t = 0; t < 2; t++) {
      readf /= Math.max(3, materialk.size ^ 3);
   }
   for (let k = 0; k < 1; k++) {
       let sportu = String.fromCharCode(109,117,108,116,105,95,57,95,54,53,0);
       let exampleimage_ = 5.0;
       let libruntimeexecutorp = 2;
       let defaultplayerimgQ = String.fromCharCode(101,95,56,49,95,100,105,115,112,108,97,121,115,0);
      if (defaultplayerimgQ.endsWith(sportu)) {
          let penaltygoal2 = String.fromCharCode(112,114,111,112,111,115,97,108,115,95,54,95,50,55,0);
          let pushd = 4.0;
          let yellowW = String.fromCharCode(109,101,109,97,108,105,103,110,95,53,95,51,55,0);
         defaultplayerimgQ = `${(String.fromCharCode(53,0) == defaultplayerimgQ ? sportu.length : defaultplayerimgQ.length)}`;
         penaltygoal2 = `${yellowW.length | parseInt(`${pushd}`)}`;
         pushd += parseFloat(`${parseInt(`${pushd}`)}`);
         yellowW = `${yellowW.length >> (Math.min(Math.abs(2), 4))}`;
      }
         sportu = `${parseInt(`${exampleimage_}`) / (Math.max(7, libruntimeexecutorp))}`;
      while ((1 | defaultplayerimgQ.length) < 2) {
         defaultplayerimgQ += `${sportu.length + 1}`;
         break;
      }
      let philippinesM = exampleimage_ <= 6315824.0;
      do {
          let championY = String.fromCharCode(99,111,108,117,109,115,95,109,95,53,0);
          let xvodg = String.fromCharCode(110,95,57,50,95,114,101,99,117,114,115,101,0);
          let iconbellactives = true;
          let iconsettingb = 1.0;
         exampleimage_ /= Math.max(1 - libruntimeexecutorp, 1);
         championY = `${parseInt(`${iconsettingb}`) | 1}`;
         xvodg = `${championY.length}`;
         iconbellactives = (xvodg.length * championY.length) < 99;
         iconsettingb -= 2;
         if (philippinesM) {
            break;
         }
      } while (((4.3 * exampleimage_) == 4.97) && philippinesM);
       let basew = String.fromCharCode(110,101,103,111,116,105,97,116,101,95,51,95,49,49,0);
       let emptyt = String.fromCharCode(100,114,97,110,100,95,57,95,55,0);
      while ((3 % (Math.max(3, libruntimeexecutorp))) >= 2 || 3 >= (3 % (Math.max(4, emptyt.length)))) {
          let weatherz: Array<any> = [String.fromCharCode(107,95,55,53,95,105,110,100,101,120,97,98,108,101,0), String.fromCharCode(115,116,97,98,105,108,105,122,101,95,48,95,51,49,0), String.fromCharCode(114,95,56,95,116,114,97,110,115,113,117,97,110,116,0)];
          let mbsplashH = 5.0;
          let str1 = String.fromCharCode(98,111,119,108,105,110,103,95,52,95,57,57,0);
          let w_countd = String.fromCharCode(99,97,110,99,101,108,108,97,116,105,111,110,95,121,95,51,54,0);
         emptyt = `${w_countd.length ^ 2}`;
         weatherz = [parseInt(`${mbsplashH}`)];
         mbsplashH -= parseFloat(`${str1.length}`);
         str1 = "3";
         w_countd += `${parseInt(`${mbsplashH}`)}`;
         break;
      }
      let helperW = 9149150 >= libruntimeexecutorp;
      do {
          let regeng0: Map<any, any> = new Map([[String.fromCharCode(122,95,53,53,95,98,121,116,101,111,117,116,0),false ], [String.fromCharCode(115,101,114,105,102,95,102,95,50,49,0),false ], [String.fromCharCode(114,101,97,100,98,121,116,101,95,111,95,57,51,0),false ]]);
          let firebasen: Map<any, any> = new Map([[String.fromCharCode(121,95,57,55,95,118,105,101,119,0),String.fromCharCode(110,95,50,48,95,98,111,117,110,100,115,0)], [String.fromCharCode(101,99,111,109,112,114,101,115,115,111,114,95,48,95,52,56,0),String.fromCharCode(114,101,115,111,117,114,99,101,95,117,95,54,56,0)]]);
         libruntimeexecutorp &= defaultplayerimgQ.length;
         regeng0.set(`${regeng0.size}`, regeng0.size + firebasen.size);
         firebasen = new Map([[`${regeng0.size}`, firebasen.size]]);
         if (helperW) {
            break;
         }
      } while (helperW && (basew.includes(`${libruntimeexecutorp}`)));
       let pushk = String.fromCharCode(110,95,56,52,95,115,110,105,112,112,101,116,0);
       let rankg = String.fromCharCode(108,105,102,101,116,105,109,101,95,106,95,49,48,48,0);
      while (3 <= (5 << (Math.min(3, Math.abs(libruntimeexecutorp)))) && 1 <= (5 << (Math.min(5, pushk.length)))) {
         pushk += `${2 + emptyt.length}`;
         break;
      }
         pushk = `${pushk.length}`;
       let assist2: Array<any> = [784, 747];
      emptyk |= parseInt(`${exampleimage_}`) << (Math.min(Math.abs(3), 4));
   }
      materialk.set(`${gdtadvY}`, 3);
      androidP += `${weatherT + libglogn.length}`;
   if (4 < emptyk) {
       let dragc = 0;
       let topic9 = String.fromCharCode(118,97,108,105,100,97,116,105,111,110,95,53,95,51,50,0);
          let libswscaler = String.fromCharCode(98,117,109,112,95,55,95,49,51,0);
          let macauQ = String.fromCharCode(109,95,56,53,95,119,105,110,100,105,110,103,0);
          let corei = String.fromCharCode(119,95,49,53,95,107,101,114,110,101,100,0);
         topic9 = `${dragc}`;
         libswscaler = `${(macauQ == String.fromCharCode(81,0) ? macauQ.length : corei.length)}`;
         corei += `${3 & macauQ.length}`;
       let canvasO: Array<any> = [682, 103, 920];
       let libavcodec_: Array<any> = [725, 206, 264];
      for (let a = 0; a < 1; a++) {
         dragc += canvasO.length;
      }
         canvasO.push(2);
      for (let j = 0; j < 1; j++) {
         dragc *= dragc << (Math.min(topic9.length, 1));
      }
      if ((libavcodec_.length | 1) < 3 && (libavcodec_.length | dragc) < 1) {
         libavcodec_.push(topic9.length - 3);
      }
      config_ = `${libglogn.length - 2}`;
   }
      scrollviewT = [emptyk * 2];
       let shrinkE = String.fromCharCode(99,95,53,54,95,109,101,97,115,117,114,101,109,101,110,116,115,0);
       let diceY = 1.0;
          let libfollym: Array<any> = [268, 261, 953];
          let placeholderO = 1.0;
         diceY /= Math.max(5, shrinkE.length);
         libfollym = [1];
         placeholderO /= Math.max(parseFloat(`${parseInt(`${placeholderO}`) + libfollym.length}`), 2);
      for (let e = 0; e < 2; e++) {
         diceY -= shrinkE.length & parseInt(`${diceY}`);
      }
      while (5 <= (shrinkE.length * 3) || 5.13 <= (diceY + 4.32)) {
          let g_hashi: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,112,111,105,110,116,95,52,95,57,0),740], [String.fromCharCode(104,111,108,100,105,110,103,95,48,95,56,48,0),527]]);
          let iconscheduleL: Map<any, any> = new Map([[String.fromCharCode(100,120,116,97,95,104,95,51,48,0),174], [String.fromCharCode(107,95,52,48,95,101,99,108,0),151]]);
          let arrowrightV: Array<any> = [206, 90];
         shrinkE = `${g_hashi.size | 3}`;
         g_hashi = new Map([[`${iconscheduleL.size}`, arrowrightV.length]]);
         iconscheduleL = new Map([[`${iconscheduleL.size}`, arrowrightV.length]]);
         break;
      }
         shrinkE = `${shrinkE.length + parseInt(`${diceY}`)}`;
          let episodeT = String.fromCharCode(109,95,50,52,95,117,118,114,100,0);
          let notificationfillemptyf = 0.0;
         diceY /= Math.max(5, parseInt(`${notificationfillemptyf}`));
         episodeT += `${(String.fromCharCode(54,0) == episodeT ? episodeT.length : episodeT.length)}`;
         notificationfillemptyf /= Math.max(2, 3);
         shrinkE = `${shrinkE.length}`;
      emptyk <<= Math.min(3, Math.abs(2 + morej.length));

    setRefreshing(true);

   if (!morej.endsWith(`${scrollviewT.length}`)) {
      scrollviewT = [parseInt(`${gdtadvY}`)];
   }
      config_ += `${scrollviewT.length << (Math.min(Math.abs(2), 1))}`;
   for (let a = 0; a < 1; a++) {
      morej = `${1 << (Math.min(2, morej.length))}`;
   }
      materialk = new Map([[`${scrollviewT.length}`, 3]]);
   while (4.62 < (gdtadvY + readf)) {
      gdtadvY += materialk.size - questl;
      break;
   }
       let football8 = false;
       let applem = false;
       let sendW: Array<any> = [String.fromCharCode(121,95,56,56,95,115,101,116,115,97,114,0), String.fromCharCode(118,95,55,54,95,97,99,99,117,114,97,99,121,0), String.fromCharCode(104,105,103,104,108,105,103,116,101,100,95,119,95,51,50,0)];
      for (let j = 0; j < 2; j++) {
         applem = sendW.length > 4;
      }
      while (football8) {
         applem = (((!football8 ? sendW.length : 35) * sendW.length) == 35);
         break;
      }
       let watchH: Map<any, any> = new Map([[String.fromCharCode(117,95,57,56,95,112,115,102,98,0),false ], [String.fromCharCode(120,112,111,115,117,114,101,95,48,95,53,56,0),false ]]);
         football8 = watchH.size > 8;
          let trophyU: Map<any, any> = new Map([[String.fromCharCode(110,95,49,57,95,99,119,110,100,0),String.fromCharCode(105,95,53,50,95,99,111,110,118,101,114,116,101,114,0)], [String.fromCharCode(118,97,114,105,110,116,95,54,95,52,55,0),String.fromCharCode(97,116,111,105,95,99,95,54,0)], [String.fromCharCode(101,95,50,52,95,99,114,101,97,116,101,0),String.fromCharCode(105,109,105,116,97,116,101,95,57,95,55,52,0)]]);
          let iconY = String.fromCharCode(119,95,53,54,95,108,111,99,107,0);
         sendW.push(2);
         trophyU.set(`${iconY}`, 3);
         iconY += "2";
       let countryd: Array<any> = [612, 112, 804];
      for (let b = 0; b < 3; b++) {
          let bodanK = 2;
          let headerW = 2.0;
         sendW.push(sendW.length % 3);
         bodanK -= bodanK;
         headerW /= Math.max(3, 3);
      }
      while (applem) {
         sendW = [watchH.size];
         break;
      }
         applem = watchH.get(`${football8}`) == null;
      emptyk >>= Math.min(Math.abs(materialk.size ^ scrollviewT.length), 1);
   if ((morej.length << (Math.min(4, libglogn.length))) >= 1 && (libglogn.length << (Math.min(Math.abs(1), 4))) >= 2) {
      libglogn = [1 % (Math.max(5, materialk.size))];
   }
   let langkeyd = 8877655 >= emptyk;
   do {
      emptyk %= Math.max(weatherT, 5);
      if (langkeyd) {
         break;
      }
   } while ((libglogn.includes(emptyk)) && langkeyd);
   if (androidP.includes(`${scrollviewT.length}`)) {
      androidP += `${scrollviewT.length / (Math.max(4, config_.length))}`;
   }
      readf += 3 | parseInt(`${readf}`);
   if (config_.includes(`${questl}`)) {
       let sportsh = 0;
       let libtanh = 0.0;
       let hongkongs = 4.0;
       let combineU = false;
       let zhengpian9 = 5.0;
      if ((hongkongs / 5.59) > 2.55) {
          let emptyF: Map<any, any> = new Map([[String.fromCharCode(101,120,105,115,116,115,95,121,95,52,56,0),735], [String.fromCharCode(100,95,53,50,95,114,101,98,97,108,97,110,99,101,0),454], [String.fromCharCode(106,95,50,49,95,102,105,108,101,119,114,105,116,101,115,116,114,101,97,109,0),642]]);
          let backward1 = 4.0;
          let singaporez: Map<any, any> = new Map([[String.fromCharCode(116,95,51,50,95,102,116,118,109,111,0),854], [String.fromCharCode(108,111,99,105,95,112,95,50,56,0),599]]);
          let window_vsc = String.fromCharCode(101,95,51,51,95,116,97,103,98,105,116,0);
          let controlsG: Map<any, any> = new Map([[String.fromCharCode(119,95,53,55,95,114,100,112,99,109,0),true ], [String.fromCharCode(119,95,54,48,95,101,120,112,111,110,101,110,116,105,97,116,105,111,110,0),false ]]);
         hongkongs /= Math.max(3, controlsG.size);
         emptyF.set(`${backward1}`, parseInt(`${backward1}`));
         singaporez.set(`${backward1}`, 2);
         window_vsc += "1";
         controlsG = new Map([[window_vsc, window_vsc.length - parseInt(`${backward1}`)]]);
      }
         zhengpian9 /= Math.max(1 * sportsh, 3);
      while (5 >= sportsh && 2 >= (sportsh & 5)) {
          let handlerM = 4;
         combineU = !combineU;
         handlerM %= Math.max(4, handlerM);
         break;
      }
      if ((hongkongs + sportsh) < 2.83 || 2.51 < (2.83 + hongkongs)) {
         hongkongs += 1 % (Math.max(parseInt(`${libtanh}`), 10));
      }
          let halfv = 0.0;
          let submitv = String.fromCharCode(105,95,49,57,95,114,101,115,101,116,0);
         libtanh /= Math.max(3, parseFloat(`${1}`));
         halfv *= parseFloat(`${3 * parseInt(`${halfv}`)}`);
         submitv = `${parseInt(`${halfv}`) * 3}`;
          let actiont = 3.0;
          let textinputS = String.fromCharCode(104,95,53,53,95,109,105,110,105,0);
         sportsh ^= 3 | parseInt(`${libtanh}`);
         actiont -= parseFloat(`${1 - parseInt(`${actiont}`)}`);
         textinputS += `${textinputS.length}`;
      while ((libtanh * zhengpian9) >= 1.13) {
          let pusho: Map<any, any> = new Map([[String.fromCharCode(101,95,54,51,95,116,114,97,110,115,105,116,105,111,110,105,110,103,0),492], [String.fromCharCode(113,95,55,53,95,102,111,99,117,115,0),893]]);
          let questE = false;
          let downloaded3 = String.fromCharCode(103,101,110,100,101,114,95,108,95,56,48,0);
          let vietnamw = 3.0;
          let championg = String.fromCharCode(102,95,57,51,95,99,105,114,99,108,101,100,0);
         libtanh /= Math.max(1, parseFloat(`${sportsh}`));
         pusho = new Map([[downloaded3, downloaded3.length]]);
         questE = pusho.size == downloaded3.length;
         vietnamw -= championg.length | pusho.size;
         championg = `${parseInt(`${vietnamw}`) / (Math.max(championg.length, 8))}`;
         break;
      }
          let activitym: Array<any> = [616, 518];
          let giftB: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,117,110,105,99,97,116,105,111,110,95,122,95,51,52,0),637], [String.fromCharCode(121,95,52,54,95,115,104,111,114,116,108,121,0),828]]);
          let scheduler5: Array<any> = [584, 2];
         libtanh *= (parseFloat(`${(combineU ? 5 : 3) * parseInt(`${libtanh}`)}`));
         activitym = [activitym.length];
         giftB = new Map([[`${giftB.size}`, giftB.size]]);
         scheduler5 = [scheduler5.length];
      while (combineU) {
         combineU = 59 <= (sportsh / (Math.max(libtanh, 8)));
         break;
      }
          let window_iuW = 1.0;
         zhengpian9 *= sportsh;
         window_iuW += parseFloat(`${parseInt(`${window_iuW}`)}`);
      let forwarde = 9008632.0 >= hongkongs;
      do {
         hongkongs -= parseInt(`${zhengpian9}`) & sportsh;
         if (forwarde) {
            break;
         }
      } while (forwarde && ((hongkongs + zhengpian9) <= 2.65));
         sportsh <<= Math.min(Math.abs(parseInt(`${libtanh}`)), 2);
         sportsh -= ((combineU ? 1 : 5) % (Math.max(parseInt(`${hongkongs}`), 10)));
         combineU = !combineU && zhengpian9 == 4.88;
         sportsh <<= Math.min(Math.abs(sportsh), 5);
      config_ += "1";
   }
   while (libglogn.length < 4) {
       let models6 = String.fromCharCode(106,95,57,57,95,109,97,105,110,104,101,97,100,101,114,0);
       let memberN = 1.0;
          let routerk = String.fromCharCode(103,114,111,119,116,104,95,117,95,57,52,0);
          let libruntimeexecutoro = String.fromCharCode(105,110,105,116,105,97,108,105,122,97,116,105,111,110,95,54,95,57,55,0);
          let libavdeviceS = String.fromCharCode(114,95,53,48,95,115,108,105,99,101,99,111,110,116,101,120,116,0);
         models6 += `${models6.length}`;
         routerk += `${routerk.length}`;
         libruntimeexecutoro += `${libruntimeexecutoro.length}`;
         libavdeviceS = `${routerk.length % 2}`;
       let libruntimeexecutorV = false;
       let calendarl = true;
         memberN *= ((libruntimeexecutorV ? 2 : 3) - (calendarl ? 5 : 5));
      while ((4 / (Math.max(3, models6.length))) <= 1 && (models6.length + parseInt(`${memberN}`)) <= 4) {
         models6 += `${models6.length ^ 3}`;
         break;
      }
      while ((4.13 * memberN) <= 1.11 && !calendarl) {
          let libcrashsdkm = String.fromCharCode(104,95,56,51,95,105,115,97,108,110,117,109,0);
          let stringsX = String.fromCharCode(112,95,55,54,95,102,105,108,101,104,101,97,100,101,114,0);
          let desc7: Array<any> = [String.fromCharCode(117,95,54,55,95,111,116,104,101,114,110,97,109,101,0), String.fromCharCode(114,95,49,54,95,102,97,99,101,115,0)];
          let loginc: Map<any, any> = new Map([[String.fromCharCode(112,95,54,51,95,115,104,111,117,108,100,0),458], [String.fromCharCode(100,95,49,55,95,112,111,115,116,115,99,97,108,101,0),139]]);
          let overlay6 = 1;
         calendarl = String.fromCharCode(117,0) == libcrashsdkm;
         libcrashsdkm = `${desc7.length & 1}`;
         stringsX += `${stringsX.length - desc7.length}`;
         loginc.set(stringsX, 2 * stringsX.length);
         overlay6 *= 3;
         break;
      }
      while (models6.startsWith(`${libruntimeexecutorV}`)) {
         libruntimeexecutorV = (59 >= (models6.length * (calendarl ? models6.length : 59)));
         break;
      }
      gdtadvY -= weatherT;
      break;
   }
   if (libglogn.length <= 1) {
      readf -= (String.fromCharCode(116,0) == config_ ? scrollviewT.length : config_.length);
   }
    await refreshUserState();

   let templateprocessork = morej == String.fromCharCode(95,117,118,112,52,0);
   do {
      morej += `${3 << (Math.min(1, scrollviewT.length))}`;
      if (templateprocessork) {
         break;
      }
   } while ((5 > (morej.length & scrollviewT.length)) && templateprocessork);
   if (5.73 > readf) {
      readf -= 2 ^ androidP.length;
   }
   let hook1 = dplusB ? !dplusB : dplusB;
   do {
       let modeM = false;
      if (!modeM) {
         modeM = !modeM;
      }
          let assistW = 3.0;
         modeM = !modeM;
         assistW /= Math.max(parseFloat(`${parseInt(`${assistW}`)}`), 2);
         modeM = !modeM && !modeM;
      dplusB = 82 > weatherT;
      if (hook1) {
         break;
      }
   } while (hook1 && (1 < (5 >> (Math.min(3, Math.abs(weatherT))))));
       let actionC = 0;
       let const_vS: Array<any> = [702, 242];
       let shielddonec = 2;
       let pressureC = 2;
      while ((2 - pressureC) > 1 || (pressureC - 2) > 3) {
          let buffer0 = 4.0;
          let libreactnativeblobH = String.fromCharCode(99,95,49,55,95,100,101,103,114,101,101,115,0);
          let recommendation3 = 3.0;
          let hookn: Map<any, any> = new Map([[String.fromCharCode(115,101,113,95,55,95,52,50,0),String.fromCharCode(115,110,112,114,105,110,116,102,95,116,95,55,0)], [String.fromCharCode(105,95,56,54,95,108,111,111,112,101,120,105,116,0),String.fromCharCode(122,95,54,56,0)]]);
         pressureC /= Math.max(2, parseInt(`${buffer0}`) % (Math.max(7, shielddonec)));
         buffer0 -= parseFloat(`${3}`);
         libreactnativeblobH += `${libreactnativeblobH.length}`;
         recommendation3 *= hookn.size;
         hookn.set(libreactnativeblobH, libreactnativeblobH.length);
         break;
      }
      for (let y = 0; y < 1; y++) {
          let detailsm = String.fromCharCode(97,100,106,117,115,116,109,101,110,116,115,95,113,95,51,52,0);
          let filledN = String.fromCharCode(98,100,119,110,95,97,95,57,52,0);
          let greyarrowupo = String.fromCharCode(115,105,103,104,95,106,95,57,55,0);
          let trash0 = 4;
          let containerr = true;
         actionC ^= pressureC;
         detailsm += `${detailsm.length}`;
         filledN = `${filledN.length << (Math.min(Math.abs(2), 3))}`;
         greyarrowupo += `${trash0}`;
         trash0 *= ((containerr ? 3 : 3) % 3);
         containerr = !detailsm.endsWith(`${containerr}`);
      }
      let internetB = 6542246 <= pressureC;
      do {
          let completeF = String.fromCharCode(115,116,111,112,95,50,95,55,0);
          let s_title5 = String.fromCharCode(101,95,50,50,95,104,105,101,114,97,114,99,104,121,0);
          let firebasez = 5.0;
          let vipsportI = 4.0;
         pressureC -= 3;
         completeF += `${parseInt(`${vipsportI}`)}`;
         s_title5 = `${s_title5.length / 1}`;
         firebasez += parseFloat(`${parseInt(`${vipsportI}`) * s_title5.length}`);
         if (internetB) {
            break;
         }
      } while (internetB && (shielddonec == pressureC));
      for (let b = 0; b < 2; b++) {
          let predictionN = 4;
          let notificationfillemptym = String.fromCharCode(106,95,52,51,95,97,108,103,0);
          let stylet = String.fromCharCode(108,95,54,49,95,112,110,103,0);
          let renewZ = 5.0;
          let small5 = 1.0;
         shielddonec /= Math.max((stylet == String.fromCharCode(106,0) ? const_vS.length : stylet.length), 3);
         predictionN <<= Math.min(Math.abs(predictionN << (Math.min(Math.abs(1), 1))), 5);
         notificationfillemptym = `${parseInt(`${renewZ}`)}`;
         small5 *= parseFloat(`${parseInt(`${small5}`)}`);
      }
      for (let c = 0; c < 3; c++) {
         const_vS = [const_vS.length];
      }
      androidP = "2";
   while ((scrollviewT.length / 4) == 4 || (libglogn.length / (Math.max(4, 7))) == 4) {
       let greyarrowupX = String.fromCharCode(112,95,57,56,95,108,105,110,107,115,0);
      for (let g = 0; g < 3; g++) {
         greyarrowupX = `${1 ^ greyarrowupX.length}`;
      }
       let reactk: Array<any> = [323, 850, 978];
       let crossl: Array<any> = [314, 934];
       let tempnodatagifz = String.fromCharCode(100,111,119,110,115,97,109,112,108,101,100,95,104,95,51,50,0);
      libglogn = [(3 - (dplusB ? 3 : 4))];
      break;
   }
      gdtadvY += 3 ^ materialk.size;
   while (libglogn.includes(gdtadvY)) {
      libglogn = [materialk.size];
      break;
   }
       let libyogaP: Map<any, any> = new Map([[String.fromCharCode(116,95,49,48,48,95,115,119,105,116,99,104,101,100,0),901], [String.fromCharCode(105,110,99,114,101,97,115,105,110,103,95,122,95,53,52,0),638], [String.fromCharCode(110,111,110,102,97,116,97,108,95,106,95,56,55,0),151]]);
       let defaultpredictionprofileT = 1;
      if (libyogaP.get(`${defaultpredictionprofileT}`) != null) {
         libyogaP = new Map([[`${libyogaP.size}`, defaultpredictionprofileT]]);
      }
          let clubs: Array<any> = [765, 310];
         defaultpredictionprofileT >>= Math.min(1, Math.abs(1 / (Math.max(4, clubs.length))));
      let orientation0 = 7369130 <= libyogaP.size;
      do {
          let forwardb: Map<any, any> = new Map([[String.fromCharCode(110,95,57,54,95,99,111,109,98,105,110,101,0),475], [String.fromCharCode(122,95,55,53,95,99,104,97,116,0),814]]);
          let basketballhometeam3: Map<any, any> = new Map([[String.fromCharCode(121,117,108,101,95,122,95,50,50,0),841], [String.fromCharCode(98,111,120,98,108,117,114,95,99,95,52,50,0),861], [String.fromCharCode(122,95,54,54,95,118,115,97,100,0),229]]);
          let mergerB = 4.0;
         libyogaP = new Map([[`${basketballhometeam3.size}`, defaultpredictionprofileT]]);
         forwardb.set(`${mergerB}`, 1 + forwardb.size);
         basketballhometeam3 = new Map([[`${forwardb.size}`, forwardb.size & 3]]);
         mergerB /= Math.max(parseFloat(`${forwardb.size | parseInt(`${mergerB}`)}`), 5);
         if (orientation0) {
            break;
         }
      } while (((libyogaP.size | defaultpredictionprofileT) < 2) && orientation0);
         defaultpredictionprofileT /= Math.max(5, defaultpredictionprofileT);
      for (let o = 0; o < 3; o++) {
         libyogaP = new Map([[`${libyogaP.size}`, defaultpredictionprofileT ^ libyogaP.size]]);
      }
      let cancelT = libyogaP.size >= 6445724;
      do {
          let sportsw = 5.0;
          let zhengpianz = 5;
          let scoreQ: Array<any> = [595, 310];
          let flipperO = 4.0;
         libyogaP.set(`${defaultpredictionprofileT}`, 3 + libyogaP.size);
         sportsw -= parseFloat(`${scoreQ.length % (Math.max(3, 1))}`);
         zhengpianz %= Math.max(zhengpianz, 4);
         scoreQ.push(3);
         flipperO /= Math.max(2, parseFloat(`${parseInt(`${sportsw}`) >> (Math.min(1, Math.abs(3)))}`));
         if (cancelT) {
            break;
         }
      } while ((!Array.from(libyogaP.values()).includes(defaultpredictionprofileT)) && cancelT);
      materialk = new Map([[`${questl}`, ((dplusB ? 1 : 3) - questl)]]);
   for (let s = 0; s < 1; s++) {
      gdtadvY += (config_ == String.fromCharCode(56,0) ? parseInt(`${readf}`) : config_.length);
   }
       let gemfileH = String.fromCharCode(121,95,56,50,95,99,111,109,109,97,0);
       let reactnativeultimatelistview8 = String.fromCharCode(120,95,57,56,95,110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,0);
          let thailandX = 2.0;
          let spinnerY = String.fromCharCode(100,118,98,115,117,98,95,101,95,49,0);
          let iconsettingS: Map<any, any> = new Map([[String.fromCharCode(97,116,111,105,95,49,95,55,49,0),168], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,114,95,113,95,54,56,0),760]]);
         gemfileH += `${iconsettingS.size >> (Math.min(spinnerY.length, 3))}`;
         thailandX += parseFloat(`${1}`);
         spinnerY += `${parseInt(`${thailandX}`) % (Math.max(parseInt(`${thailandX}`), 6))}`;
          let downloadingw: Array<any> = [String.fromCharCode(115,122,97,98,111,95,51,95,50,50,0), String.fromCharCode(108,95,51,48,95,105,122,101,114,111,0)];
         reactnativeultimatelistview8 = `${(reactnativeultimatelistview8 == String.fromCharCode(118,0) ? reactnativeultimatelistview8.length : downloadingw.length)}`;
         reactnativeultimatelistview8 = `${gemfileH.length % 1}`;
      for (let j = 0; j < 3; j++) {
         reactnativeultimatelistview8 = `${gemfileH.length}`;
      }
         gemfileH = `${gemfileH.length}`;
      for (let s = 0; s < 2; s++) {
          let templateprocessor4 = String.fromCharCode(101,110,100,112,111,105,110,116,95,49,95,49,49,0);
          let selectedq = 5.0;
          let awayteamfieldH = 4;
          let dropdownx = true;
         reactnativeultimatelistview8 += `${2 ^ gemfileH.length}`;
         templateprocessor4 += `${((dropdownx ? 5 : 3) - awayteamfieldH)}`;
         selectedq += parseFloat(`${awayteamfieldH % 1}`);
         dropdownx = !templateprocessor4.startsWith(`${selectedq}`);
      }
      weatherT *= androidP.length ^ 2;
   for (let y = 0; y < 2; y++) {
      config_ += `${morej.length}`;
   }
       let volumex = String.fromCharCode(103,95,51,95,115,99,97,110,120,0);
       let reducerb = 3;
      let moviesT = String.fromCharCode(121,55,105,112,116,0) == volumex;
      do {
         volumex = "1";
         if (moviesT) {
            break;
         }
      } while (moviesT && (reducerb == 1));
          let foregroundp = 3.0;
          let basketballhometeamW = 2.0;
          let target1: Map<any, any> = new Map([[String.fromCharCode(115,95,54,52,95,100,101,99,114,121,112,116,105,111,110,0),true ], [String.fromCharCode(97,118,101,114,97,103,101,95,109,95,53,0),false ]]);
         reducerb %= Math.max(1, 4);
         foregroundp /= Math.max(3, parseInt(`${foregroundp}`));
         basketballhometeamW -= parseFloat(`${parseInt(`${basketballhometeamW}`) | target1.size}`);
         target1.set(`${basketballhometeamW}`, target1.size);
         volumex = `${reducerb}`;
         volumex = `${reducerb << (Math.min(volumex.length, 4))}`;
         volumex = "2";
      for (let a = 0; a < 3; a++) {
          let privatechatbgN = true;
         volumex = `${2 >> (Math.min(Math.abs(reducerb), 2))}`;
         privatechatbgN = !privatechatbgN;
      }
      dplusB = scrollviewT.includes(reducerb);
   while (libglogn.length < 2) {
       let twitterQ = 1.0;
       let play1 = String.fromCharCode(102,95,57,95,100,101,115,101,108,101,99,116,101,100,0);
      if (1.68 <= (twitterQ * 5.76) || 5 <= (play1.length & 2)) {
         play1 += `${play1.length ^ parseInt(`${twitterQ}`)}`;
      }
      while (3.41 >= twitterQ) {
          let q_hashJ = String.fromCharCode(104,95,55,52,95,114,101,102,105,110,101,109,101,110,116,0);
          let ycopy_bV = 5.0;
          let thailandI = String.fromCharCode(103,95,53,48,95,120,109,108,115,0);
         play1 = "2";
         q_hashJ += `${thailandI.length}`;
         ycopy_bV += thailandI.length << (Math.min(Math.abs(2), 3));
         break;
      }
      while ((play1.length % 2) > 3 && 4.20 > (1.36 + twitterQ)) {
         play1 = `${play1.length}`;
         break;
      }
      while ((play1.length * parseInt(`${twitterQ}`)) < 5 && 2 < (5 + play1.length)) {
         twitterQ -= (parseFloat(`${String.fromCharCode(104,0) == play1 ? parseInt(`${twitterQ}`) : play1.length}`));
         break;
      }
         twitterQ += parseFloat(`${1}`);
         play1 += "1";
      libglogn = [emptyk];
      break;
   }
    setRefreshing(false);
  };

  const insets = useSafeAreaInsets();

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      
      dispatch(hideBottomSheetAction());
    });
    return unsubscribe;
  }, [navigator]);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        
      };
    }, [])
  );

  
  
  
  
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };
  const highlightText = (text: string, keyword: string) => {
    
    const escapedKeyword = escapeRegExp(keyword);
    const parts = text.split(new RegExp(`(${escapedKeyword})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <Text
          key={index}
          style={{ ...textVariants.body, color: colors.yellow, fontSize: 15 }}
        >
          {part}
        </Text>
      ) : (
        <Text
          key={index}
          style={{ ...textVariants.body, color: "#FFF0CA", fontSize: 15 }}
        >
          {part}
        </Text>
      )
    );
  };

  const fetchBannerAd = async () => {
       let viewsB: Map<any, any> = new Map([[String.fromCharCode(97,95,52,53,95,108,111,99,111,0),String.fromCharCode(112,97,114,101,110,116,95,51,95,50,48,0)], [String.fromCharCode(119,95,56,52,95,99,97,108,99,117,108,97,116,101,100,0),String.fromCharCode(100,114,97,119,97,98,108,101,115,95,114,95,50,50,0)]]);
    let watcha = String.fromCharCode(97,95,50,95,99,111,110,102,105,103,117,114,101,100,0);
    let splashJ = false;
    let textinputA = 1.0;
    let subtext5 = 0.0;
    let holderm: Map<any, any> = new Map([[String.fromCharCode(107,95,52,56,95,115,120,110,101,116,0),true ], [String.fromCharCode(101,120,115,121,95,109,95,56,57,0),false ], [String.fromCharCode(109,95,49,56,95,115,117,112,112,114,101,115,115,101,100,0),true ]]);
    let mbridgeN = 0.0;
    let liveendmodallogo_ = String.fromCharCode(115,116,114,101,116,99,104,97,98,108,101,95,50,95,56,51,0);
    let iconpipexpandI = 3.0;
    let mbbidB = 3;
    let kinit_0c = String.fromCharCode(119,114,105,116,105,110,103,95,101,95,55,56,0);
    let unselectedo = 0;
    let utilsr = String.fromCharCode(111,112,117,115,95,106,95,49,52,0);
    let update_v2W = true;
    let twitter3 = String.fromCharCode(99,111,109,97,110,100,95,114,95,54,48,0);
   for (let v = 0; v < 3; v++) {
       let userb = 2.0;
      let historyK = userb >= 7045886.0;
      do {
         userb *= parseFloat(`${parseInt(`${userb}`)}`);
         if (historyK) {
            break;
         }
      } while (historyK && ((userb - userb) < 2.15));
      let reward5 = 8940172.0 <= userb;
      do {
          let become1: Array<any> = [719, 837, 850];
          let awayteamfieldo: Map<any, any> = new Map([[String.fromCharCode(111,95,49,50,95,117,110,101,109,112,116,121,0),false ], [String.fromCharCode(99,108,97,115,115,105,99,95,97,95,57,55,0),true ], [String.fromCharCode(109,115,109,112,101,103,100,97,116,97,95,113,95,49,48,48,0),false ]]);
         userb *= parseFloat(`${become1.length * awayteamfieldo.size}`);
         if (reward5) {
            break;
         }
      } while (reward5 && (2.81 <= (4.63 + userb)));
      while (2.62 == (userb / 3.2) && (userb * userb) == 3.2) {
         userb *= parseFloat(`${parseInt(`${userb}`)}`);
         break;
      }
      iconpipexpandI += 2;
   }
   if (holderm.get(`${iconpipexpandI}`) == null) {
      holderm.set(`${textinputA}`, 2);
   }
      kinit_0c += `${parseInt(`${textinputA}`) * 2}`;
   for (let y = 0; y < 1; y++) {
      splashJ = !splashJ;
   }
      textinputA -= 3 >> (Math.min(5, Math.abs(viewsB.size)));

    const banner = await wwLivenodatabgimg.getEventBanner();

   let userK = holderm.size >= 6157189;
   do {
      holderm.set(`${liveendmodallogo_}`, 3);
      if (userK) {
         break;
      }
   } while ((3.12 == (subtext5 / 4.33) || 3.60 == (subtext5 / 4.33)) && userK);
   for (let l = 0; l < 2; l++) {
      mbbidB -= (parseInt(`${mbridgeN}`) + (splashJ ? 3 : 1));
   }
   for (let d = 0; d < 2; d++) {
       let confirmation8 = 1.0;
       let defaultplayerimg0: Array<any> = [212, 390];
       let playercommon8: Array<any> = [824, 875, 928];
       let infoe = 5;
          let closeU = String.fromCharCode(116,111,103,103,108,101,95,106,95,51,55,0);
          let zhengpian2 = 1;
         infoe *= defaultplayerimg0.length;
         closeU += `${1 ^ closeU.length}`;
         zhengpian2 %= Math.max(zhengpian2 & 3, 1);
      if (5 <= (infoe ^ 2)) {
         infoe &= infoe;
      }
         playercommon8 = [defaultplayerimg0.length * infoe];
      for (let s = 0; s < 2; s++) {
         defaultplayerimg0.push(parseInt(`${confirmation8}`) % 1);
      }
         playercommon8 = [defaultplayerimg0.length];
      while (5.43 > (confirmation8 * 2.57) || 5 > (4 ^ defaultplayerimg0.length)) {
         confirmation8 /= Math.max(playercommon8.length - 3, 3);
         break;
      }
      if ((2.7 / (Math.max(6, confirmation8))) == 2.10 && 2.96 == (2.7 / (Math.max(7, confirmation8)))) {
         confirmation8 += playercommon8.length << (Math.min(Math.abs(1), 2));
      }
      for (let e = 0; e < 1; e++) {
         confirmation8 += 3 * infoe;
      }
      if (infoe <= defaultplayerimg0.length) {
         infoe *= parseInt(`${confirmation8}`);
      }
      if (5 < playercommon8.length) {
         playercommon8 = [2 * defaultplayerimg0.length];
      }
      let libcrashsdkD = infoe >= 5835780;
      do {
         infoe |= 1 % (Math.max(10, defaultplayerimg0.length));
         if (libcrashsdkD) {
            break;
         }
      } while ((2 >= (1 >> (Math.min(4, defaultplayerimg0.length))) || 3 >= (1 >> (Math.min(2, defaultplayerimg0.length)))) && libcrashsdkD);
      for (let v = 0; v < 3; v++) {
          let rankg = String.fromCharCode(105,95,54,56,95,105,110,112,99,98,0);
          let skipt = String.fromCharCode(113,95,49,48,95,99,111,114,114,101,99,116,105,111,110,0);
          let fcdaebecbcbafcdfceaaeccfeacdbj = String.fromCharCode(107,95,55,95,116,98,117,102,0);
         infoe -= parseInt(`${confirmation8}`) | playercommon8.length;
         rankg = "3";
         skipt = "2";
         fcdaebecbcbafcdfceaaeccfeacdbj += `${(rankg == String.fromCharCode(70,0) ? fcdaebecbcbafcdfceaaeccfeacdbj.length : rankg.length)}`;
      }
      holderm.set(`${infoe}`, infoe);
   }
   for (let x = 0; x < 3; x++) {
      viewsB = new Map([[utilsr, utilsr.length / (Math.max(liveendmodallogo_.length, 6))]]);
   }
       let phone2 = true;
      if (!phone2) {
         phone2 = (!phone2 ? !phone2 : phone2);
      }
         phone2 = !phone2;
          let textlayoutmanagery = 2.0;
          let libruntimeexecutorB = false;
          let gpayd = 1.0;
         phone2 = !phone2;
         textlayoutmanagery *= parseInt(`${gpayd}`) >> (Math.min(Math.abs(parseInt(`${textlayoutmanagery}`)), 3));
         libruntimeexecutorB = libruntimeexecutorB || 34.70 == gpayd;
      holderm.set(`${textinputA}`, unselectedo);

    if (banner) {

   let eventv = 9569366.0 >= subtext5;
   do {
       let showd = String.fromCharCode(102,95,49,95,115,121,115,105,110,102,111,0);
       let memberL: Array<any> = [105, 141, 926];
       let default_iR = String.fromCharCode(97,110,105,109,97,116,111,114,95,98,95,51,56,0);
      let acceptedK = String.fromCharCode(110,56,54,55,110,120,106,0) == default_iR;
      do {
         default_iR = "2";
         if (acceptedK) {
            break;
         }
      } while ((memberL.length >= default_iR.length) && acceptedK);
      let logouserd = memberL.length <= 8946539;
      do {
          let exampleimage6 = 4.0;
          let graphicsu = 4.0;
          let flippert: Map<any, any> = new Map([[String.fromCharCode(119,101,98,115,111,99,107,101,116,95,51,95,52,0),true ], [String.fromCharCode(121,95,51,55,95,103,101,116,104,111,115,116,98,121,97,100,100,114,0),true ]]);
          let stationsY = String.fromCharCode(114,116,112,115,101,110,100,101,114,95,109,95,51,49,0);
         memberL = [default_iR.length];
         exampleimage6 *= parseFloat(`${parseInt(`${graphicsu}`) / (Math.max(3, 10))}`);
         graphicsu += (parseFloat(`${String.fromCharCode(66,0) == stationsY ? stationsY.length : parseInt(`${graphicsu}`)}`));
         flippert.set(stationsY, flippert.size + 3);
         if (logouserd) {
            break;
         }
      } while (logouserd && (!showd.startsWith(`${memberL.length}`)));
         default_iR = `${(default_iR == String.fromCharCode(71,0) ? default_iR.length : memberL.length)}`;
      let gradlewo = default_iR.length >= 7823069;
      do {
          let friends3 = String.fromCharCode(103,95,52,53,95,115,99,97,110,110,101,100,0);
          let hiadj = String.fromCharCode(99,95,51,95,115,104,97,100,105,110,103,0);
          let pathE = true;
         default_iR = "2";
         friends3 = `${hiadj.length}`;
         hiadj += `${hiadj.length}`;
         pathE = friends3.length == 40;
         if (gradlewo) {
            break;
         }
      } while (gradlewo && ((default_iR.length ^ memberL.length) >= 4));
      while (showd.endsWith(`${default_iR.length}`)) {
         default_iR += `${default_iR.length | 3}`;
         break;
      }
      if (memberL.length <= default_iR.length) {
         default_iR = `${(showd == String.fromCharCode(108,0) ? memberL.length : showd.length)}`;
      }
       let xadsdk1 = 3.0;
       let iconeditP = 4.0;
      if (5 <= (2 >> (Math.min(2, showd.length)))) {
         memberL.push(memberL.length);
      }
      let eventG = 9792632 >= memberL.length;
      do {
         memberL = [1 & memberL.length];
         if (eventG) {
            break;
         }
      } while (eventG && (!default_iR.endsWith(`${memberL.length}`)));
      subtext5 *= parseFloat(`${2 / (Math.max(4, watcha.length))}`);
      if (eventv) {
         break;
      }
   } while ((subtext5 >= mbbidB) && eventv);
      unselectedo &= 1;
   let libswresampleW = textinputA >= 8017563.0;
   do {
       let mountingk: Array<any> = [131, 471];
       let stylesg: Array<any> = [631, 479, 523];
         stylesg.push(stylesg.length);
         stylesg.push(2);
      while (mountingk.length > stylesg.length) {
         stylesg.push(mountingk.length * stylesg.length);
         break;
      }
         stylesg.push(mountingk.length % 3);
          let libswscaleK = 4.0;
          let condensedN = String.fromCharCode(116,95,54,51,95,99,111,109,112,111,115,101,105,0);
         mountingk = [mountingk.length];
         libswscaleK /= Math.max(parseFloat(`${1}`), 5);
         condensedN = `${parseInt(`${libswscaleK}`) | condensedN.length}`;
         stylesg.push(mountingk.length);
      textinputA *= parseInt(`${iconpipexpandI}`) % 2;
      if (libswresampleW) {
         break;
      }
   } while (libswresampleW && (kinit_0c.length >= 2));
       let tumbnaild: Array<any> = [683, 643];
       let catalogt = String.fromCharCode(106,95,50,55,95,112,114,101,118,118,101,99,0);
       let footballfiledlayoutP = String.fromCharCode(115,104,97,107,105,110,103,95,98,95,57,0);
      if (catalogt.length == footballfiledlayoutP.length) {
         catalogt += `${tumbnaild.length}`;
      }
      if ((4 * footballfiledlayoutP.length) <= 5 && (4 * tumbnaild.length) <= 1) {
         footballfiledlayoutP += `${3 >> (Math.min(5, tumbnaild.length))}`;
      }
      for (let q = 0; q < 2; q++) {
         catalogt = `${3 - catalogt.length}`;
      }
       let launchL = 2.0;
       let holderl = 1.0;
      let trashc = 4926337.0 <= holderl;
      do {
         holderl += 3 >> (Math.min(2, footballfiledlayoutP.length));
         if (trashc) {
            break;
         }
      } while (trashc && (holderl < 5.99));
          let middlebrightnessL = String.fromCharCode(99,108,97,115,115,95,121,95,57,57,0);
         holderl *= 2;
         middlebrightnessL = `${middlebrightnessL.length / (Math.max(2, 9))}`;
      for (let l = 0; l < 3; l++) {
         launchL *= parseInt(`${holderl}`);
      }
         footballfiledlayoutP = "1";
         catalogt += "3";
      holderm = new Map([[watcha, (liveendmodallogo_ == String.fromCharCode(101,0) ? liveendmodallogo_.length : watcha.length)]]);
   while ((1 << (Math.min(5, Math.abs(mbbidB)))) == 2) {
      kinit_0c += "3";
      break;
   }
      setBannerAd(banner);
    } else {

   for (let c = 0; c < 3; c++) {
      liveendmodallogo_ += `${3 ^ liveendmodallogo_.length}`;
   }
   while (2.71 > (textinputA * subtext5) || 2.48 > (textinputA * 2.71)) {
       let nativeo = false;
      while (!nativeo) {
          let sina_ = 3;
          let gesturesr = 5.0;
          let casting9 = String.fromCharCode(100,95,54,48,95,112,111,110,103,0);
          let codegeng = String.fromCharCode(114,101,99,97,108,99,117,108,97,116,105,111,110,95,110,95,52,0);
          let styler = String.fromCharCode(104,121,112,104,101,110,97,116,101,100,95,117,95,57,57,0);
         nativeo = codegeng == casting9;
         sina_ ^= parseInt(`${gesturesr}`) - sina_;
         gesturesr *= parseInt(`${gesturesr}`);
         casting9 = "1";
         codegeng += `${styler.length | parseInt(`${gesturesr}`)}`;
         styler = `${sina_ + styler.length}`;
         break;
      }
          let libcrashsdkC = 0;
         nativeo = libcrashsdkC <= 10;
      let direct9 = nativeo ? !nativeo : nativeo;
      do {
          let update__e = String.fromCharCode(119,95,54,57,95,97,97,99,112,115,121,0);
          let detailL = 2.0;
         nativeo = !nativeo;
         update__e += `${update__e.length | parseInt(`${detailL}`)}`;
         detailL += parseInt(`${detailL}`) >> (Math.min(update__e.length, 1));
         if (direct9) {
            break;
         }
      } while ((nativeo) && direct9);
      textinputA -= liveendmodallogo_.length;
      break;
   }
      unselectedo *= parseInt(`${subtext5}`) + liveendmodallogo_.length;
   if (5.39 > (4.65 - textinputA) && 4 > (parseInt(`${textinputA}`) - kinit_0c.length)) {
      textinputA -= mbbidB;
   }
      iconpipexpandI /= Math.max(5, unselectedo);
      setBannerAd(undefined);
    }
  };

  const shouldShowAds = async () => {
       let defaultfootballbgL = 4;
    let latnX = 3.0;
    let notificationa = String.fromCharCode(117,95,51,50,95,116,114,116,97,98,108,101,0);
    let preview0 = String.fromCharCode(117,95,51,49,95,104,111,108,100,115,0);
    let minimizet = String.fromCharCode(122,95,57,51,0);
    let sinaz = String.fromCharCode(108,95,56,52,95,99,111,109,109,117,110,105,99,97,116,111,114,0);
    let membershipa: Array<any> = [96, 524, 984];
    let pangleN = String.fromCharCode(120,95,55,95,114,101,99,111,118,101,114,101,100,0);
    let materiale = true;
    let adultG = String.fromCharCode(98,95,49,57,95,104,101,120,98,115,0);
    let iconsettingt = 2;
    let malaysia3 = 1.0;
    let mail5 = 5.0;
       let loadingl = String.fromCharCode(99,101,108,116,95,121,95,49,50,0);
         loadingl = `${(loadingl == String.fromCharCode(80,0) ? loadingl.length : loadingl.length)}`;
      for (let p = 0; p < 1; p++) {
         loadingl += `${loadingl.length % (Math.max(loadingl.length, 3))}`;
      }
      while (!loadingl.endsWith(`${loadingl.length}`)) {
         loadingl = `${1 * loadingl.length}`;
         break;
      }
      preview0 = "2";
      membershipa = [1 & notificationa.length];
      minimizet += "3";
   for (let f = 0; f < 1; f++) {
      notificationa += `${sinaz.length}`;
   }
      membershipa = [pangleN.length];
   if (5 == (membershipa.length << (Math.min(Math.abs(1), 1))) || (iconsettingt << (Math.min(membershipa.length, 5))) == 1) {
      membershipa = [notificationa.length >> (Math.min(Math.abs(1), 1))];
   }
   if (sinaz.length == 1) {
       let libpangleflippedG = true;
       let nbatrophyX = String.fromCharCode(106,95,49,55,95,107,101,121,100,105,114,0);
       let greytickk = 2;
       let selectN: Map<any, any> = new Map([[String.fromCharCode(117,95,49,50,95,100,105,109,101,110,115,105,111,110,0),716], [String.fromCharCode(97,98,111,117,116,95,102,95,53,51,0),102]]);
       let webviewB = 0;
      for (let x = 0; x < 2; x++) {
         libpangleflippedG = null == selectN.get(`${libpangleflippedG}`);
      }
         nbatrophyX += `${webviewB}`;
      let redgoalb = selectN.size >= 5443522;
      do {
         selectN.set(`${webviewB}`, webviewB + selectN.size);
         if (redgoalb) {
            break;
         }
      } while (redgoalb && (!Array.from(selectN.values()).includes(webviewB)));
         selectN = new Map([[`${selectN.size}`, selectN.size]]);
         libpangleflippedG = (nbatrophyX.length + selectN.size) == 97;
         nbatrophyX = `${1 & greytickk}`;
       let profileframeA = String.fromCharCode(98,95,49,50,95,112,97,99,107,101,116,112,101,101,107,0);
       let b_countX = String.fromCharCode(97,95,51,57,95,114,114,111,114,0);
         nbatrophyX += "2";
          let feedbackx: Array<any> = [String.fromCharCode(116,95,57,49,95,115,105,112,114,107,100,97,116,97,0), String.fromCharCode(121,109,105,110,112,117,116,95,116,95,57,54,0), String.fromCharCode(116,95,53,49,95,100,101,112,101,110,100,101,110,116,0)];
         libpangleflippedG = String.fromCharCode(104,0) == nbatrophyX && selectN.size > 7;
         feedbackx = [1 | feedbackx.length];
          let iconpipexpandK = 4.0;
         greytickk ^= 3;
         iconpipexpandK -= parseFloat(`${parseInt(`${iconpipexpandK}`) - 3}`);
      while ((greytickk / (Math.max(profileframeA.length, 5))) == 1 && 1 == (profileframeA.length / (Math.max(7, greytickk)))) {
         greytickk *= 1;
         break;
      }
      for (let o = 0; o < 1; o++) {
         selectN = new Map([[`${selectN.size}`, selectN.size / 3]]);
      }
      for (let q = 0; q < 3; q++) {
          let awayD = false;
          let checkboxV: Array<any> = [765, 308];
          let singleP = 4.0;
          let trash1 = 4;
         selectN = new Map([[`${singleP}`, b_countX.length * parseInt(`${singleP}`)]]);
         awayD = checkboxV.includes(awayD);
         checkboxV = [(checkboxV.length - (awayD ? 4 : 1))];
         trash1 >>= Math.min(Math.abs(checkboxV.length ^ 1), 4);
      }
      let sort8 = 6605626 >= greytickk;
      do {
         greytickk ^= 3;
         if (sort8) {
            break;
         }
      } while (((4 | webviewB) > 4) && sort8);
      if (b_countX.includes(`${profileframeA.length}`)) {
         profileframeA += `${webviewB}`;
      }
      latnX += parseFloat(`${preview0.length ^ 2}`);
   }
   if (4 <= minimizet.length) {
       let detailsP: Map<any, any> = new Map([[String.fromCharCode(114,101,99,101,110,116,95,121,95,56,51,0),false ], [String.fromCharCode(98,95,48,95,112,105,99,107,101,114,0),false ], [String.fromCharCode(117,95,49,54,95,118,97,99,97,110,116,0),true ]]);
       let predictionwinP = String.fromCharCode(115,95,52,51,0);
       let videojsa = 5.0;
       let adultk = 1.0;
       let runtimeY: Array<any> = [638, 769];
         videojsa += parseFloat(`${2 >> (Math.min(3, Math.abs(parseInt(`${adultk}`))))}`);
          let combine3: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,100,97,116,97,95,115,95,56,57,0),804], [String.fromCharCode(109,95,57,50,95,115,99,97,108,105,110,103,0),732]]);
         videojsa -= parseFloat(`${predictionwinP.length / 1}`);
         combine3.set(`${combine3.size}`, combine3.size % (Math.max(5, combine3.size)));
          let becomew = 2.0;
          let filedT = true;
         predictionwinP = `${predictionwinP.length & runtimeY.length}`;
         becomew *= parseFloat(`${parseInt(`${becomew}`) - 1}`);
         filedT = !filedT;
          let libjsinspectorj = String.fromCharCode(108,95,48,95,115,116,114,105,99,109,112,0);
          let notificationfillemptyG: Array<any> = [696, 567, 218];
         predictionwinP = `${predictionwinP.length + 2}`;
         libjsinspectorj = "2";
         notificationfillemptyG = [2 * libjsinspectorj.length];
      if (parseInt(`${videojsa}`) < predictionwinP.length) {
         videojsa *= parseFloat(`${runtimeY.length / (Math.max(3, 4))}`);
      }
      for (let k = 0; k < 2; k++) {
          let verticalZ = 3;
          let mintegralx: Map<any, any> = new Map([[String.fromCharCode(104,95,51,56,95,119,111,114,100,108,105,115,116,0),String.fromCharCode(113,112,105,115,95,121,95,50,50,0)], [String.fromCharCode(101,95,56,50,95,115,113,117,97,114,101,115,0),String.fromCharCode(100,111,99,116,111,116,97,108,95,119,95,50,57,0)], [String.fromCharCode(112,95,50,48,95,112,105,112,101,108,105,110,105,110,103,0),String.fromCharCode(111,95,49,48,95,115,99,114,101,101,110,99,97,115,116,0)]]);
          let benefitl = String.fromCharCode(121,111,117,95,111,95,53,51,0);
          let halffieldimagew = 5;
         videojsa += parseFloat(`${1 + benefitl.length}`);
         verticalZ *= halffieldimagew * 3;
         mintegralx.set(`${halffieldimagew}`, halffieldimagew & 1);
         benefitl = "2";
      }
      while (2 == (runtimeY.length & 4)) {
         adultk -= runtimeY.length;
         break;
      }
          let tempnodatagifK = 5.0;
         predictionwinP += "1";
         tempnodatagifK -= parseInt(`${tempnodatagifK}`) % (Math.max(parseInt(`${tempnodatagifK}`), 1));
         predictionwinP = "1";
         videojsa += parseFloat(`${3}`);
          let stations1 = 1.0;
         runtimeY.push((predictionwinP == String.fromCharCode(102,0) ? parseInt(`${adultk}`) : predictionwinP.length));
         stations1 *= parseFloat(`${parseInt(`${stations1}`)}`);
         videojsa *= parseFloat(`${3 - runtimeY.length}`);
         videojsa -= parseFloat(`${predictionwinP.length}`);
          let libzeusP: Map<any, any> = new Map([[String.fromCharCode(107,95,56,53,95,114,101,109,111,118,97,98,108,101,0),923], [String.fromCharCode(99,95,53,55,95,108,115,98,115,0),314], [String.fromCharCode(97,117,116,111,112,108,97,121,95,51,95,52,53,0),11]]);
          let libavutilK = String.fromCharCode(100,95,53,52,95,115,111,99,97,110,116,114,99,118,109,111,114,101,0);
         detailsP.set(`${videojsa}`, runtimeY.length - parseInt(`${videojsa}`));
         libzeusP.set(`${libavutilK}`, 3 & libzeusP.size);
         libavutilK = `${libzeusP.size % (Math.max(1, 5))}`;
      while (runtimeY.length >= predictionwinP.length) {
         predictionwinP += `${predictionwinP.length}`;
         break;
      }
      preview0 += `${pangleN.length - membershipa.length}`;
   }
   if (sinaz.length >= 5) {
      preview0 += `${sinaz.length}`;
   }
   let colors8 = preview0 == String.fromCharCode(56,116,107,100,100,121,51,0);
   do {
      preview0 += `${(notificationa == String.fromCharCode(68,0) ? notificationa.length : membershipa.length)}`;
      if (colors8) {
         break;
      }
   } while (colors8 && (!preview0.startsWith(`${membershipa.length}`)));
   while (!sinaz.includes(`${defaultfootballbgL}`)) {
      defaultfootballbgL >>= Math.min(preview0.length, 1);
      break;
   }
   if (4 < iconsettingt) {
      latnX *= parseFloat(`${sinaz.length}`);
   }
      adultG += `${(minimizet == String.fromCharCode(95,0) ? membershipa.length : minimizet.length)}`;
      membershipa = [(sinaz == String.fromCharCode(76,0) ? sinaz.length : (materiale ? 1 : 1))];
      materiale = pangleN == minimizet;
      pangleN += "2";
   while (1 <= (5 - parseInt(`${latnX}`)) && 3 <= (5 + minimizet.length)) {
      minimizet += `${1 | sinaz.length}`;
      break;
   }
      defaultfootballbgL += preview0.length;
      latnX += parseFloat(`${notificationa.length - defaultfootballbgL}`);
   let score2 = String.fromCharCode(111,117,120,0) == adultG;
   do {
       let animationH = 3.0;
       let playercommon6 = String.fromCharCode(117,95,54,53,95,97,115,99,0);
       let subtextP = String.fromCharCode(119,95,54,48,95,107,101,109,112,102,0);
         animationH *= 1;
       let confirmationW = 1;
       let libyogaG: Map<any, any> = new Map([[String.fromCharCode(100,95,57,51,95,100,101,115,99,114,0),338], [String.fromCharCode(115,111,108,105,100,95,122,95,49,54,0),734], [String.fromCharCode(102,95,49,48,48,95,100,120,118,97,0),662]]);
      while (animationH > confirmationW) {
         confirmationW *= 2;
         break;
      }
         playercommon6 = `${subtextP.length ^ 2}`;
       let iconshare_ = 5;
         playercommon6 += `${libyogaG.size}`;
         confirmationW ^= libyogaG.size % (Math.max(1, playercommon6.length));
       let renewu = String.fromCharCode(102,95,55,51,95,115,104,97,114,100,0);
      adultG = `${preview0.length}`;
      if (score2) {
         break;
      }
   } while ((defaultfootballbgL > 1) && score2);
   if (parseInt(`${latnX}`) >= minimizet.length) {
      latnX += parseFloat(`${defaultfootballbgL / 3}`);
   }

    fetchBannerAd();
  };

  useFocusEffect(
    useCallback(() => {
      shouldShowAds();
    }, [])
  );

  const [deviceUniqueId, setDeviceUniqueId] = useState("");

  const setDeviceId = async () => {
       let popupB = 5.0;
    let logouser3 = 4.0;
    let inouttargetreda: Array<any> = [710, 88];
    let chartS = String.fromCharCode(107,95,52,53,95,97,97,114,99,104,0);
    let sportw: Array<any> = [String.fromCharCode(107,95,52,53,95,121,117,118,112,116,111,121,117,121,0), String.fromCharCode(105,111,115,116,114,101,97,109,95,107,95,49,57,0)];
    let rncoreH = String.fromCharCode(99,104,97,112,116,101,114,95,97,95,50,49,0);
    let libcxxcomponentsP: Array<any> = [484, 171];
    let logouti = true;
    let guide1 = String.fromCharCode(104,95,50,56,95,112,97,97,100,0);
    let downarrow8 = String.fromCharCode(104,95,50,51,95,109,111,114,112,104,101,100,0);
   for (let i = 0; i < 1; i++) {
       let types5: Map<any, any> = new Map([[String.fromCharCode(103,95,50,54,95,111,110,115,101,116,0),String.fromCharCode(114,95,55,52,95,97,115,115,111,99,105,97,116,101,100,0)], [String.fromCharCode(104,95,50,52,95,114,97,109,112,0),String.fromCharCode(121,95,53,52,95,115,116,114,0)], [String.fromCharCode(121,117,118,97,95,97,95,49,52,0),String.fromCharCode(122,95,52,51,95,112,97,121,108,111,97,100,0)]]);
          let expandQ = false;
          let favoriteX = 1.0;
         types5 = new Map([[`${favoriteX}`, parseInt(`${favoriteX}`) & 2]]);
         expandQ = expandQ || expandQ;
         types5 = new Map([[`${types5.size}`, 3 - types5.size]]);
         types5.set(`${types5.size}`, types5.size);
      popupB += 2;
   }
       let maths: Map<any, any> = new Map([[String.fromCharCode(110,101,120,116,104,111,112,95,54,95,54,55,0),135], [String.fromCharCode(113,95,50,52,95,112,97,99,107,105,110,103,0),16], [String.fromCharCode(107,95,51,53,95,105,110,118,115,98,111,120,0),182]]);
       let downloadedC = String.fromCharCode(110,95,55,95,108,101,100,103,101,114,0);
       let iconrefreshg: Array<any> = [864, 250];
         maths.set(downloadedC, maths.size);
       let progressI = String.fromCharCode(103,95,53,49,95,114,101,97,100,121,0);
          let friendsY = false;
          let w_hashU = 3.0;
          let giftbuttonb = true;
         progressI = `${progressI.length}`;
         friendsY = !giftbuttonb;
         w_hashU *= (parseFloat(`${parseInt(`${w_hashU}`) + (giftbuttonb ? 1 : 2)}`));
         iconrefreshg = [downloadedC.length];
      while ((iconrefreshg.length * maths.size) == 5 || 5 == (maths.size * iconrefreshg.length)) {
         iconrefreshg.push(iconrefreshg.length - 1);
         break;
      }
         downloadedC += `${maths.size * downloadedC.length}`;
         iconrefreshg.push(3 - iconrefreshg.length);
         iconrefreshg.push((downloadedC == String.fromCharCode(75,0) ? progressI.length : downloadedC.length));
          let defaultfootballbgc = true;
         downloadedC += `${2 >> (Math.min(4, progressI.length))}`;
         defaultfootballbgc = !defaultfootballbgc;
      popupB += 1 + inouttargetreda.length;
      rncoreH = `${libcxxcomponentsP.length - parseInt(`${popupB}`)}`;
   let submitL = logouser3 >= 6088023.0;
   do {
      logouser3 += 3;
      if (submitL) {
         break;
      }
   } while (((popupB - logouser3) < 4.62) && submitL);
      libcxxcomponentsP = [chartS.length - inouttargetreda.length];
   for (let v = 0; v < 1; v++) {
      popupB /= Math.max(2 * sportw.length, 4);
   }
   let iconnewsshareH = 8224888.0 <= popupB;
   do {
      popupB += (String.fromCharCode(120,0) == chartS ? chartS.length : libcxxcomponentsP.length);
      if (iconnewsshareH) {
         break;
      }
   } while (iconnewsshareH && (!inouttargetreda.includes(popupB)));
   while (!chartS.startsWith(`${inouttargetreda.length}`)) {
      chartS += `${(String.fromCharCode(120,0) == chartS ? chartS.length : (logouti ? 5 : 2))}`;
      break;
   }
       let carousel4: Map<any, any> = new Map([[String.fromCharCode(109,95,56,48,95,118,101,99,116,111,114,0),745], [String.fromCharCode(100,95,57,48,0),380], [String.fromCharCode(104,95,53,49,95,118,97,114,115,0),624]]);
       let screenc = String.fromCharCode(116,97,103,103,105,110,103,95,103,95,51,53,0);
       let gifgoalbgS = false;
         screenc = `${screenc.length / 2}`;
      for (let e = 0; e < 2; e++) {
         screenc += `${carousel4.size}`;
      }
      let whistle6 = 9096141 <= screenc.length;
      do {
          let grayy = 2.0;
          let androids = 3.0;
          let liveendmodallogos: Array<any> = [228, 199];
         screenc += `${parseInt(`${androids}`) % 3}`;
         grayy += parseFloat(`${parseInt(`${grayy}`)}`);
         androids /= Math.max(1, parseFloat(`${liveendmodallogos.length * 2}`));
         liveendmodallogos = [1 << (Math.min(2, liveendmodallogos.length))];
         if (whistle6) {
            break;
         }
      } while (whistle6 && (screenc.includes(`${carousel4.size}`)));
         screenc += `${(screenc == String.fromCharCode(105,0) ? screenc.length : carousel4.size)}`;
          let colorss: Map<any, any> = new Map([[String.fromCharCode(108,95,53,95,97,108,111,99,0),false ], [String.fromCharCode(103,95,54,51,95,99,108,111,115,101,115,111,99,107,101,116,0),true ], [String.fromCharCode(120,95,49,52,95,115,104,111,114,116,99,117,116,0),true ]]);
          let paginationH = String.fromCharCode(120,95,51,55,95,119,114,97,112,100,101,116,101,99,116,0);
          let kuaishouT = String.fromCharCode(111,115,116,104,114,101,97,100,115,95,102,95,53,51,0);
         screenc += `${kuaishouT.length}`;
         colorss.set(paginationH, (paginationH == String.fromCharCode(73,0) ? paginationH.length : colorss.size));
         kuaishouT += `${(String.fromCharCode(70,0) == paginationH ? paginationH.length : colorss.size)}`;
       let valuesQ: Array<any> = [616, 129];
       let members: Array<any> = [String.fromCharCode(113,95,57,53,95,112,99,97,99,104,101,0), String.fromCharCode(101,95,53,53,95,101,100,105,97,0)];
         members.push(((gifgoalbgS ? 2 : 4)));
         carousel4 = new Map([[`${valuesQ.length}`, 3]]);
          let floatingx = 2;
          let libreactnativejnil: Map<any, any> = new Map([[String.fromCharCode(99,97,116,99,104,115,105,103,110,97,108,95,52,95,49,48,0),String.fromCharCode(119,95,51,56,95,100,105,114,97,99,116,97,98,0)], [String.fromCharCode(109,95,53,56,95,112,101,101,114,99,111,110,110,101,99,116,105,111,110,0),String.fromCharCode(114,95,52,95,117,110,112,97,99,107,108,111,0)], [String.fromCharCode(115,117,105,116,101,115,95,56,95,48,0),String.fromCharCode(98,117,110,100,108,101,95,99,95,51,54,0)]]);
          let entryK = true;
         members = [3];
         floatingx %= Math.max(3, floatingx);
         libreactnativejnil = new Map([[`${libreactnativejnil.size}`, floatingx]]);
         entryK = libreactnativejnil.size >= 100;
      chartS = "3";
       let iconnewssharec = 4;
       let libflipperr = String.fromCharCode(101,115,116,105,109,97,116,101,115,95,117,95,56,52,0);
         iconnewssharec -= libflipperr.length;
      if (libflipperr.includes(`${iconnewssharec}`)) {
         iconnewssharec |= 1 / (Math.max(7, libflipperr.length));
      }
      for (let u = 0; u < 1; u++) {
         iconnewssharec *= iconnewssharec;
      }
         libflipperr += `${iconnewssharec}`;
       let fastg = 3;
      while (!libflipperr.startsWith(`${iconnewssharec}`)) {
         libflipperr = `${libflipperr.length | 3}`;
         break;
      }
      rncoreH += `${inouttargetreda.length >> (Math.min(Math.abs(3), 4))}`;

    let deviceId = await DeviceInfo.getUniqueId();

   let back1 = 8575467 <= libcxxcomponentsP.length;
   do {
      libcxxcomponentsP = [(rncoreH == String.fromCharCode(99,0) ? parseInt(`${logouser3}`) : rncoreH.length)];
      if (back1) {
         break;
      }
   } while (back1 && ((parseInt(`${popupB}`) + libcxxcomponentsP.length) > 4 || 3.61 > (popupB + libcxxcomponentsP.length)));
   while (5.69 > (5.72 / (Math.max(5, popupB)))) {
      chartS += "2";
      break;
   }
   while ((1.8 * logouser3) >= 3.46) {
      inouttargetreda.push(((logouti ? 3 : 5)));
      break;
   }
      guide1 = `${libcxxcomponentsP.length}`;
       let applicationD = 0;
       let binddatasa = false;
       let mbnativeadvancedZ = 1;
      for (let p = 0; p < 2; p++) {
          let buildM = String.fromCharCode(99,108,97,112,95,115,95,49,55,0);
          let desc1 = String.fromCharCode(110,95,53,55,95,97,99,101,110,99,0);
          let commonj: Array<any> = [970, 977, 72];
         binddatasa = desc1.length < 56;
         buildM += "2";
         desc1 += `${1 * buildM.length}`;
         commonj.push(3 >> (Math.min(2, commonj.length)));
      }
      let darkX = binddatasa ? !binddatasa : binddatasa;
      do {
         binddatasa = !binddatasa;
         if (darkX) {
            break;
         }
      } while (darkX && (!binddatasa));
          let sharemodal8 = String.fromCharCode(106,95,53,49,95,109,98,116,114,101,101,0);
         applicationD <<= Math.min(Math.abs(1), 4);
         sharemodal8 += `${sharemodal8.length}`;
      for (let z = 0; z < 2; z++) {
         mbnativeadvancedZ &= mbnativeadvancedZ;
      }
       let awayteamfieldB = String.fromCharCode(117,95,52,53,95,102,97,115,116,116,101,115,116,0);
         mbnativeadvancedZ <<= Math.min(3, Math.abs(mbnativeadvancedZ << (Math.min(Math.abs(3), 1))));
      while ((mbnativeadvancedZ % 4) == 2 || 5 == (mbnativeadvancedZ % 4)) {
         awayteamfieldB += `${(applicationD + (binddatasa ? 2 : 1))}`;
         break;
      }
      for (let t = 0; t < 1; t++) {
         awayteamfieldB += `${((binddatasa ? 2 : 4) % (Math.max(mbnativeadvancedZ, 1)))}`;
      }
      for (let h = 0; h < 1; h++) {
          let sports = 0.0;
          let singaporeU = 0;
          let episodel = String.fromCharCode(113,95,49,50,95,112,117,98,108,105,115,104,101,100,0);
          let gpayU = 3.0;
         applicationD &= applicationD;
         sports *= 2;
         singaporeU |= episodel.length;
         episodel += `${episodel.length}`;
         gpayU *= parseFloat(`${singaporeU}`);
      }
      popupB *= 1 >> (Math.min(4, chartS.length));
   for (let i = 0; i < 1; i++) {
       let codegeni = 3.0;
       let short_6V: Map<any, any> = new Map([[String.fromCharCode(120,105,112,104,95,120,95,54,55,0),204], [String.fromCharCode(114,101,99,111,110,102,105,103,95,106,95,51,56,0),832], [String.fromCharCode(102,95,51,49,95,102,111,114,107,0),705]]);
       let bggradiente = 2.0;
       let movies2: Map<any, any> = new Map([[String.fromCharCode(112,108,117,115,95,102,95,49,56,0),103], [String.fromCharCode(116,95,55,57,95,99,111,110,116,114,105,98,0),979], [String.fromCharCode(112,114,101,115,115,101,100,95,116,95,49,48,48,0),372]]);
      while (codegeni < 5.67) {
         movies2.set(`${codegeni}`, short_6V.size);
         break;
      }
         short_6V.set(`${codegeni}`, 2);
      let graphE = 7458824 <= short_6V.size;
      do {
          let mbsplashV: Map<any, any> = new Map([[String.fromCharCode(99,97,118,115,100,115,112,95,48,95,52,48,0),164], [String.fromCharCode(115,95,50,53,95,105,110,112,117,116,121,0),597], [String.fromCharCode(105,95,51,49,95,114,101,115,105,100,101,110,99,101,0),462]]);
          let middlebrightnessO: Array<any> = [728, 868];
          let page7 = String.fromCharCode(108,95,49,49,95,109,105,110,0);
         short_6V = new Map([[`${middlebrightnessO.length}`, 1 << (Math.min(Math.abs(parseInt(`${codegeni}`)), 2))]]);
         mbsplashV.set(page7, 2 | mbsplashV.size);
         middlebrightnessO = [(String.fromCharCode(68,0) == page7 ? mbsplashV.size : page7.length)];
         if (graphE) {
            break;
         }
      } while (graphE && (5.92 > (1.65 + codegeni)));
      while (parseInt(`${bggradiente}`) > short_6V.size) {
         bggradiente /= Math.max(parseFloat(`${short_6V.size >> (Math.min(1, Math.abs(parseInt(`${bggradiente}`))))}`), 3);
         break;
      }
      while (movies2.get(`${bggradiente}`) == null) {
          let libjsinspector0: Map<any, any> = new Map([[String.fromCharCode(102,108,97,103,95,107,95,50,51,0),false ], [String.fromCharCode(103,104,97,115,104,95,56,95,51,54,0),false ]]);
          let hoverm = 2.0;
          let smallM = 0.0;
          let shootyesgoal9 = 5;
         movies2.set(`${codegeni}`, parseInt(`${hoverm}`) | 3);
         libjsinspector0 = new Map([[`${shootyesgoal9}`, parseInt(`${smallM}`) / 2]]);
         hoverm -= parseFloat(`${libjsinspector0.size}`);
         smallM /= Math.max(1, parseFloat(`${parseInt(`${smallM}`) - 3}`));
         shootyesgoal9 |= parseInt(`${smallM}`) >> (Math.min(4, Math.abs(shootyesgoal9)));
         break;
      }
         short_6V.set(`${bggradiente}`, 3);
          let searchbarl = String.fromCharCode(121,95,56,56,95,102,105,110,103,101,114,115,0);
          let armval = String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,95,56,95,49,0);
         bggradiente /= Math.max(parseFloat(`${parseInt(`${bggradiente}`) & 3}`), 3);
         searchbarl = "2";
         armval = `${(armval == String.fromCharCode(54,0) ? armval.length : searchbarl.length)}`;
         movies2.set(`${codegeni}`, short_6V.size ^ parseInt(`${codegeni}`));
      while (2 < (movies2.size << (Math.min(Math.abs(5), 4)))) {
         movies2.set(`${codegeni}`, movies2.size);
         break;
      }
          let pushZ = 0.0;
         bggradiente += parseFloat(`${movies2.size}`);
         pushZ /= Math.max(parseInt(`${pushZ}`), 3);
      if ((codegeni - movies2.size) < 1.66) {
         codegeni += short_6V.size;
      }
          let fileU = String.fromCharCode(115,116,99,98,95,115,95,54,56,0);
          let flyeru = String.fromCharCode(108,95,50,95,101,120,116,101,110,115,105,111,110,0);
          let loginsuccessx = String.fromCharCode(107,95,53,95,115,116,97,114,116,0);
         short_6V = new Map([[`${movies2.size}`, movies2.size | 1]]);
         fileU = `${1 + fileU.length}`;
         flyeru += `${flyeru.length / (Math.max(5, fileU.length))}`;
         loginsuccessx = "1";
      libcxxcomponentsP.push((String.fromCharCode(121,0) == rncoreH ? parseInt(`${logouser3}`) : rncoreH.length));
   }
   let eactH = logouti ? !logouti : logouti;
   do {
       let paginationh = 3;
       let mbnative6 = 0.0;
       let star9: Map<any, any> = new Map([[String.fromCharCode(100,105,115,115,105,109,105,108,97,114,105,116,121,95,50,95,49,56,0),881], [String.fromCharCode(105,95,50,51,95,119,111,114,107,105,110,103,0),163], [String.fromCharCode(101,120,116,114,97,99,116,101,100,95,57,95,49,48,0),33]]);
       let catalogx = String.fromCharCode(109,95,50,48,95,102,114,101,113,0);
       let photoB = String.fromCharCode(100,99,97,100,115,112,95,108,95,56,56,0);
      for (let x = 0; x < 1; x++) {
          let phonesharek: Map<any, any> = new Map([[String.fromCharCode(120,95,50,57,95,116,110,112,117,116,0),String.fromCharCode(97,109,114,119,98,100,97,116,97,95,102,95,53,48,0)], [String.fromCharCode(113,95,52,50,95,117,100,116,97,0),String.fromCharCode(111,95,57,57,95,111,116,111,102,0)]]);
         paginationh += parseInt(`${mbnative6}`);
         phonesharek.set(`${phonesharek.size}`, phonesharek.size % 3);
      }
      while (3 == paginationh) {
          let profileactivez = true;
         mbnative6 += parseFloat(`${1}`);
         profileactivez = !profileactivez;
         break;
      }
         mbnative6 -= parseFloat(`${star9.size / (Math.max(2, 3))}`);
         paginationh >>= Math.min(Math.abs((photoB == String.fromCharCode(85,0) ? photoB.length : paginationh)), 4);
         photoB = `${parseInt(`${mbnative6}`) % 2}`;
         paginationh *= star9.size & 2;
          let slider5 = 1;
         catalogx += `${paginationh}`;
         slider5 <<= Math.min(Math.abs(slider5 + slider5), 2);
         mbnative6 += parseFloat(`${catalogx.length << (Math.min(1, Math.abs(paginationh)))}`);
      while ((mbnative6 + parseFloat(`${photoB.length}`)) >= 2.63) {
         mbnative6 *= parseFloat(`${1}`);
         break;
      }
          let eighteenj = String.fromCharCode(108,95,49,52,95,105,110,100,101,120,101,115,0);
         photoB = `${1 >> (Math.min(3, Math.abs(parseInt(`${mbnative6}`))))}`;
         eighteenj = "2";
          let turndownI = String.fromCharCode(117,116,102,108,101,110,95,109,95,49,51,0);
         mbnative6 /= Math.max(2, parseFloat(`${photoB.length >> (Math.min(Math.abs(3), 5))}`));
         turndownI += `${turndownI.length}`;
         star9.set(`${paginationh}`, 2);
      for (let j = 0; j < 3; j++) {
          let buildC = String.fromCharCode(113,95,55,55,95,99,111,109,112,105,116,97,98,108,101,0);
          let confirmationc = String.fromCharCode(112,95,50,53,95,115,116,97,116,117,115,0);
          let profileframeg = String.fromCharCode(112,117,114,103,101,95,103,95,52,56,0);
          let anytimeK: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,109,112,117,116,101,95,100,95,49,49,0),499], [String.fromCharCode(109,97,114,107,115,95,111,95,49,49,0),784], [String.fromCharCode(112,95,51,51,95,119,104,105,116,101,98,108,97,99,107,108,105,115,116,115,0),552]]);
          let templateprocessor7 = 5.0;
         photoB += `${paginationh}`;
         buildC = `${confirmationc.length << (Math.min(Math.abs(2), 3))}`;
         confirmationc = `${parseInt(`${templateprocessor7}`)}`;
         profileframeg = `${anytimeK.size}`;
         anytimeK.set(profileframeg, 2);
         templateprocessor7 *= buildC.length / (Math.max(profileframeg.length, 6));
      }
         catalogx += `${parseInt(`${mbnative6}`) % (Math.max(photoB.length, 8))}`;
          let megaphone4 = String.fromCharCode(102,95,54,49,95,99,111,100,101,99,99,116,108,0);
         mbnative6 += parseFloat(`${megaphone4.length & 2}`);
      logouti = parseInt(`${logouser3}`) > star9.size;
      if (eactH) {
         break;
      }
   } while (eactH && (logouti));
   if (!logouti) {
      logouti = libcxxcomponentsP.includes(sportw[0]);
   }
      inouttargetreda.push(chartS.length | inouttargetreda.length);
   let transfera = 5054730.0 >= logouser3;
   do {
       let verticalV: Array<any> = [3, 747, 653];
       let merger8: Map<any, any> = new Map([[String.fromCharCode(115,99,114,101,101,110,95,116,95,53,54,0),258], [String.fromCharCode(115,95,56,48,95,115,116,105,112,112,101,100,0),151], [String.fromCharCode(99,95,57,53,0),902]]);
       let league5 = String.fromCharCode(120,95,51,53,95,115,113,108,105,116,101,112,97,103,101,114,0);
       let iconbackwhite3 = String.fromCharCode(105,110,108,105,110,101,95,57,95,53,49,0);
       let libsentry7 = String.fromCharCode(101,95,49,48,95,116,97,112,102,105,108,116,101,114,0);
      if (iconbackwhite3.length >= libsentry7.length) {
         libsentry7 = `${verticalV.length}`;
      }
      while (iconbackwhite3.startsWith(`${libsentry7.length}`)) {
         libsentry7 = `${verticalV.length}`;
         break;
      }
          let membershipw = String.fromCharCode(98,95,54,55,95,99,111,109,112,97,114,101,102,0);
         verticalV.push(iconbackwhite3.length);
         membershipw += `${(String.fromCharCode(112,0) == membershipw ? membershipw.length : membershipw.length)}`;
          let libswresamplem = false;
          let corner3 = String.fromCharCode(109,97,110,100,101,108,98,114,111,116,95,99,95,57,53,0);
          let mbbanner7 = false;
         libsentry7 += "3";
         libswresamplem = corner3.length <= 95 || libswresamplem;
         corner3 += `${((libswresamplem ? 3 : 5) ^ 1)}`;
         mbbanner7 = corner3.length >= 63;
      while (libsentry7.includes(`${verticalV.length}`)) {
         verticalV.push(libsentry7.length);
         break;
      }
      if (iconbackwhite3.startsWith(`${verticalV.length}`)) {
          let x_lockT = 1;
          let basketballc = String.fromCharCode(105,110,115,116,95,111,95,52,49,0);
          let targetx: Map<any, any> = new Map([[String.fromCharCode(113,95,49,95,110,111,116,104,105,110,103,0),String.fromCharCode(100,101,112,101,110,100,101,110,99,105,101,115,95,112,95,49,52,0)], [String.fromCharCode(98,95,57,54,95,116,114,97,110,115,108,97,116,105,111,110,0),String.fromCharCode(109,95,52,55,95,115,116,97,99,107,116,114,97,99,101,0)]]);
          let linkz = 4.0;
         iconbackwhite3 += `${basketballc.length}`;
         x_lockT /= Math.max(3, x_lockT);
         basketballc += `${targetx.size - 1}`;
         targetx.set(`${linkz}`, 1);
         linkz += x_lockT;
      }
         verticalV = [iconbackwhite3.length ^ 2];
      let goalE = libsentry7.length >= 7267735;
      do {
         libsentry7 += "2";
         if (goalE) {
            break;
         }
      } while (goalE && (league5 != String.fromCharCode(111,0)));
         iconbackwhite3 = "1";
      while (1 < (verticalV.length & libsentry7.length)) {
          let rewind5 = String.fromCharCode(103,95,49,51,95,97,116,116,114,105,98,0);
          let malaysia4 = String.fromCharCode(101,120,116,101,110,100,101,100,95,121,95,49,48,0);
          let schedulerv: Map<any, any> = new Map([[String.fromCharCode(109,97,120,114,101,97,100,101,114,115,95,106,95,51,56,0),true ], [String.fromCharCode(122,95,57,52,95,109,109,99,111,115,0),true ]]);
          let buildV = 3.0;
         libsentry7 += `${rewind5.length}`;
         rewind5 += `${schedulerv.size ^ 2}`;
         malaysia4 += "1";
         schedulerv = new Map([[`${schedulerv.size}`, malaysia4.length ^ schedulerv.size]]);
         buildV /= Math.max(3, parseFloat(`${1}`));
         break;
      }
         merger8.set(league5, merger8.size);
      for (let e = 0; e < 3; e++) {
          let questicon9 = true;
          let currents = 2.0;
          let iconarrowrights = 0;
          let handlerW = 4.0;
          let policyJ = String.fromCharCode(122,95,53,57,95,109,111,100,101,99,111,110,116,0);
         merger8.set(`${iconarrowrights}`, iconarrowrights % (Math.max(league5.length, 8)));
         questicon9 = handlerW > 76.73 && 3 > policyJ.length;
         currents /= Math.max(parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${currents}`)), 4))}`), 1);
         handlerW /= Math.max(2, parseFloat(`${policyJ.length & parseInt(`${handlerW}`)}`));
      }
         merger8.set(`${league5}`, league5.length);
      for (let w = 0; w < 1; w++) {
         verticalV.push(verticalV.length >> (Math.min(Math.abs(3), 2)));
      }
      let otherm = merger8.size <= 6623993;
      do {
         merger8 = new Map([[`${merger8.size}`, verticalV.length + 3]]);
         if (otherm) {
            break;
         }
      } while (otherm && (league5.includes(`${merger8.size}`)));
      logouser3 += (rncoreH == String.fromCharCode(106,0) ? sportw.length : rncoreH.length);
      if (transfera) {
         break;
      }
   } while (((logouser3 - rncoreH.length) == 2.21 || 4 == (rncoreH.length / 3)) && transfera);
    setDeviceUniqueId(deviceId);
  };

  useEffect(() => {
    setDeviceId();
  }, []);

  useEffect(() => {
    let date = new Date(Number(userState.user?.userMemberExpired ?? '0') * 1000); 
    
    let year = date.getFullYear();
    let month = date.getMonth() + 1; 
    let day = date.getDate();
    setDisplayedDate(`${year}年${month}月${day}日`);
  }, [userState.user?.userMemberExpired]);

  const onBannerView = useCallback(({ id, name, slot_id, title }: any) => {
    ww_runtime.profileBannerViewAnalytics({
      ads_id: id,
      ads_name: name,
      ads_slot_id: slot_id,
      ads_title: title,
    });
  }, []);

  const onBannerPress = useCallback(({ id, name, slot_id, title }: any) => {
    ww_runtime.profileBannerClickAnalytics({
      ads_id: id,
      ads_name: name,
      ads_slot_id: slot_id,
      ads_title: title,
    });
  }, []);



  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);

  const renderOverlay = () => {
       let bottom0 = false;
    let anytimex = String.fromCharCode(110,95,51,51,95,115,116,111,114,121,98,111,97,114,100,0);
    let libffmpegkitN = 1.0;
    let iconwechatJ = String.fromCharCode(103,108,111,115,115,95,112,95,57,57,0);
    let componentregistryN = String.fromCharCode(99,95,50,53,95,119,114,105,116,101,111,117,116,0);
    let frame_l9e = false;
    let privacyj: Array<any> = [760, 450, 833];
    let favicon5 = String.fromCharCode(113,114,99,111,100,101,95,57,95,50,49,0);
    let countdown3 = true;
    let refreshw: Array<any> = [766, 700];
    let reminder5 = 0.0;
    let push9 = String.fromCharCode(97,95,51,55,95,99,105,110,101,0);
    let bannerL = String.fromCharCode(122,95,55,55,95,114,97,112,112,101,114,0);
    let actionsQ: Array<any> = [String.fromCharCode(97,95,49,55,95,105,108,108,117,109,105,110,97,116,105,111,110,0), String.fromCharCode(115,101,101,100,95,51,95,49,53,0)];
    let nbatrophyH = String.fromCharCode(108,111,119,99,111,109,112,95,107,95,53,52,0);
    let cancel8 = 2;
       let const_4iz = 5;
       let shared1 = String.fromCharCode(97,116,111,109,105,99,95,52,95,56,55,0);
       let questiconc: Array<any> = [548, 408];
      while (3 >= (const_4iz % (Math.max(shared1.length, 7)))) {
         const_4iz += (shared1 == String.fromCharCode(105,0) ? shared1.length : questiconc.length);
         break;
      }
      if ((const_4iz ^ shared1.length) < 2) {
          let qnewarchdefaults_ = String.fromCharCode(98,106,101,99,116,95,55,95,56,50,0);
          let nativemodule1 = 3.0;
          let gesturesA = 0.0;
          let templateprocessor3: Array<any> = [371, 935, 232];
         shared1 = `${templateprocessor3.length}`;
         qnewarchdefaults_ = "2";
         nativemodule1 -= parseFloat(`${parseInt(`${nativemodule1}`) >> (Math.min(Math.abs(3), 5))}`);
         gesturesA -= 1 + parseInt(`${nativemodule1}`);
         templateprocessor3.push(3);
      }
      while (1 >= const_4iz) {
          let analytics = String.fromCharCode(98,110,98,105,110,112,97,100,95,48,95,51,0);
          let gdtadvy = 3.0;
         const_4iz %= Math.max(4, 1 ^ questiconc.length);
         analytics = `${analytics.length}`;
         gdtadvy /= Math.max(1, parseFloat(`${analytics.length}`));
         break;
      }
       let iconsetting3 = String.fromCharCode(119,95,51,54,95,108,111,117,112,101,0);
       let basketballu = String.fromCharCode(116,95,54,56,95,103,101,115,116,117,114,101,115,0);
         questiconc.push(3 + questiconc.length);
          let vignetter = true;
          let sans8 = String.fromCharCode(98,95,53,56,95,115,119,105,99,104,0);
          let rendero = 1;
         iconsetting3 = `${2 + const_4iz}`;
         vignetter = (14 >= ((vignetter ? 14 : sans8.length) << (Math.min(sans8.length, 1))));
         rendero &= 2 & rendero;
          let changex = String.fromCharCode(106,95,52,51,95,108,97,117,110,99,104,0);
          let iconarrowrightl = String.fromCharCode(102,95,50,49,95,115,105,122,101,0);
          let videocommonJ = String.fromCharCode(102,95,56,50,95,99,104,101,99,107,0);
         basketballu += `${3 - iconsetting3.length}`;
         changex += `${videocommonJ.length << (Math.min(Math.abs(3), 2))}`;
         iconarrowrightl = "1";
         videocommonJ += `${(String.fromCharCode(99,0) == changex ? videocommonJ.length : changex.length)}`;
         basketballu = `${questiconc.length}`;
          let backgroundB = 1.0;
          let libturbomodulejsijniU = String.fromCharCode(106,95,56,53,95,97,115,115,111,99,105,97,116,105,111,110,115,0);
          let androidn = 0.0;
         shared1 += "3";
         backgroundB *= (parseFloat(`${String.fromCharCode(55,0) == libturbomodulejsijniU ? libturbomodulejsijniU.length : parseInt(`${androidn}`)}`));
         androidn *= parseFloat(`${parseInt(`${backgroundB}`)}`);
      componentregistryN += `${const_4iz}`;
      refreshw = [2];
      push9 = "1";
       let defaultplayerimgZ = 5.0;
         defaultplayerimgZ += parseInt(`${defaultplayerimgZ}`) + parseInt(`${defaultplayerimgZ}`);
         defaultplayerimgZ += parseInt(`${defaultplayerimgZ}`);
         defaultplayerimgZ -= parseInt(`${defaultplayerimgZ}`);
      refreshw = [anytimex.length ^ 1];
      privacyj.push(2);
      favicon5 = `${anytimex.length + 1}`;
   if (iconwechatJ.endsWith(`${actionsQ.length}`)) {
      actionsQ = [(3 & (frame_l9e ? 1 : 2))];
   }
      push9 = `${refreshw.length % 3}`;
      countdown3 = bottom0;
      anytimex = `${parseInt(`${libffmpegkitN}`)}`;
      refreshw = [bannerL.length];
   for (let d = 0; d < 2; d++) {
      actionsQ.push(anytimex.length);
   }
      reminder5 /= Math.max(3, ((bottom0 ? 4 : 1) ^ componentregistryN.length));
      iconwechatJ += "3";
   while (3 >= bannerL.length) {
      bannerL += `${((bottom0 ? 1 : 3) % (Math.max(actionsQ.length, 2)))}`;
      break;
   }
   for (let b = 0; b < 3; b++) {
       let gdtadvt = String.fromCharCode(119,95,49,49,95,109,101,109,110,114,0);
       let borderlessS = 3;
      if ((gdtadvt.length ^ borderlessS) > 5 || (5 ^ borderlessS) > 5) {
         borderlessS /= Math.max((gdtadvt == String.fromCharCode(112,0) ? gdtadvt.length : borderlessS), 5);
      }
         borderlessS %= Math.max(gdtadvt.length - 2, 1);
          let specm = 2;
          let interstitialW = String.fromCharCode(116,101,108,101,112,104,111,116,111,95,106,95,52,51,0);
         gdtadvt += `${(String.fromCharCode(121,0) == gdtadvt ? interstitialW.length : gdtadvt.length)}`;
         specm |= specm;
         interstitialW = `${specm}`;
          let jingdongW = 1.0;
          let scoreF = String.fromCharCode(98,95,49,52,95,114,101,97,99,116,0);
          let ajaxn = 3;
         borderlessS >>= Math.min(3, Math.abs(2 - gdtadvt.length));
         jingdongW += scoreF.length;
         scoreF = `${ajaxn}`;
         ajaxn -= 2;
      for (let z = 0; z < 1; z++) {
         gdtadvt = `${3 - gdtadvt.length}`;
      }
      let downloadedh = 8995946 <= borderlessS;
      do {
         borderlessS ^= gdtadvt.length >> (Math.min(4, Math.abs(borderlessS)));
         if (downloadedh) {
            break;
         }
      } while (((5 - gdtadvt.length) < 2 || (5 - gdtadvt.length) < 2) && downloadedh);
      push9 += `${(String.fromCharCode(87,0) == componentregistryN ? componentregistryN.length : (bottom0 ? 2 : 1))}`;
   }
      bottom0 = bottom0 || iconwechatJ.length <= 49;
   if (2.27 <= (reminder5 / (Math.max(4.24, 6))) && (parseInt(`${reminder5}`) / (Math.max(anytimex.length, 2))) <= 2) {
      anytimex = `${privacyj.length - 2}`;
   }
      libffmpegkitN += parseFloat(`${refreshw.length}`);
   let libavutils = bannerL == String.fromCharCode(100,121,115,53,0);
   do {
      bannerL += `${((countdown3 ? 4 : 3) >> (Math.min(Math.abs(1), 2)))}`;
      if (libavutils) {
         break;
      }
   } while ((!favicon5.startsWith(`${bannerL.length}`)) && libavutils);
       let modelsv: Map<any, any> = new Map([[String.fromCharCode(113,95,55,56,95,115,109,104,100,0),false ], [String.fromCharCode(98,95,51,56,95,99,115,99,104,101,109,101,0),false ], [String.fromCharCode(100,95,55,53,95,115,116,114,117,99,116,0),false ]]);
       let policy8 = String.fromCharCode(108,97,121,101,114,99,111,110,116,101,120,116,95,112,95,50,48,0);
       let mapbufferz = String.fromCharCode(99,104,114,111,109,97,116,105,99,95,109,95,49,56,0);
         mapbufferz += `${mapbufferz.length + 3}`;
         mapbufferz = `${1 & policy8.length}`;
         modelsv.set(`${policy8}`, 1);
      for (let g = 0; g < 3; g++) {
         policy8 += `${modelsv.size - 1}`;
      }
         modelsv.set(mapbufferz, policy8.length);
      for (let o = 0; o < 3; o++) {
          let spec1 = String.fromCharCode(99,97,108,99,117,108,97,116,101,95,101,95,52,57,0);
          let ajaxC = 0;
          let livek = false;
          let whistleorangeZ = String.fromCharCode(115,117,105,116,101,115,95,48,95,56,57,0);
          let s_countp = String.fromCharCode(114,101,97,99,104,97,98,108,101,95,48,95,52,0);
         modelsv = new Map([[`${modelsv.size}`, modelsv.size + 3]]);
         spec1 += `${((livek ? 4 : 4))}`;
         ajaxC ^= 1;
         livek = ((spec1.length >> (Math.min(2, Math.abs((!livek ? spec1.length : 37))))) > 37);
         whistleorangeZ = `${whistleorangeZ.length - ajaxC}`;
         s_countp = `${2 >> (Math.min(3, spec1.length))}`;
      }
      let libavfilter4 = modelsv.size <= 8291514;
      do {
         modelsv = new Map([[`${modelsv.size}`, modelsv.size % (Math.max(10, policy8.length))]]);
         if (libavfilter4) {
            break;
         }
      } while ((modelsv.size <= 1) && libavfilter4);
         policy8 += `${modelsv.size}`;
          let detailb = String.fromCharCode(117,110,122,105,112,95,100,95,49,55,0);
          let pangles = 0.0;
          let gifgoalN = String.fromCharCode(97,114,99,104,95,110,95,51,48,0);
         policy8 += "3";
         detailb += `${(String.fromCharCode(53,0) == gifgoalN ? parseInt(`${pangles}`) : gifgoalN.length)}`;
         pangles *= parseFloat(`${1 << (Math.min(4, Math.abs(parseInt(`${pangles}`))))}`);
      bottom0 = 26 == componentregistryN.length;
   let modityr = 7280156.0 <= libffmpegkitN;
   do {
      libffmpegkitN -= parseFloat(`${refreshw.length}`);
      if (modityr) {
         break;
      }
   } while ((countdown3) && modityr);
   if (5 > push9.length) {
       let adulti = true;
       let fieldc = 3.0;
       let minio: Map<any, any> = new Map([[String.fromCharCode(99,111,114,110,101,114,115,95,107,95,49,48,0),String.fromCharCode(99,97,110,100,108,101,95,114,95,57,57,0)], [String.fromCharCode(102,95,53,53,95,114,102,102,116,102,0),String.fromCharCode(114,101,99,117,114,115,105,111,110,95,112,95,57,48,0)], [String.fromCharCode(112,114,101,102,101,116,99,104,105,110,103,95,101,95,55,49,0),String.fromCharCode(97,95,49,50,95,105,115,115,117,101,114,0)]]);
          let sellP = String.fromCharCode(116,114,97,110,102,115,101,114,95,55,95,52,54,0);
         minio.set(sellP, minio.size);
      if (fieldc <= 1.49) {
          let librrcN = String.fromCharCode(115,119,97,116,99,104,95,105,95,53,48,0);
          let librrc2 = String.fromCharCode(108,95,50,50,95,108,105,118,101,100,0);
          let policy0 = 2;
          let activityi = String.fromCharCode(99,102,109,116,95,103,95,57,50,0);
          let latnP = 4.0;
         fieldc *= ((adulti ? 5 : 1) ^ parseInt(`${fieldc}`));
         librrcN += `${librrc2.length}`;
         librrc2 = `${policy0}`;
         policy0 &= parseInt(`${latnP}`) | librrc2.length;
         activityi += `${librrcN.length}`;
         latnP *= 1 >> (Math.min(3, librrc2.length));
      }
       let shrinkB: Array<any> = [835, 884, 873];
      let logouserJ = minio.size <= 5467076;
      do {
          let halfO = String.fromCharCode(111,95,49,50,95,99,111,108,111,110,115,0);
          let viewsa = String.fromCharCode(101,95,53,53,95,115,116,105,99,107,101,114,115,0);
          let bootl = String.fromCharCode(102,95,56,53,95,109,117,108,116,105,102,114,97,109,101,0);
          let libglog6: Array<any> = [854, 659];
          let final_2_M = String.fromCharCode(101,110,99,111,100,101,115,95,109,95,50,54,0);
         minio = new Map([[`${minio.size}`, shrinkB.length]]);
         halfO = "1";
         viewsa = `${(String.fromCharCode(100,0) == halfO ? libglog6.length : halfO.length)}`;
         bootl = "2";
         libglog6 = [halfO.length ^ 1];
         final_2_M = `${libglog6.length}`;
         if (logouserJ) {
            break;
         }
      } while (logouserJ && (3 >= (4 * minio.size)));
         shrinkB = [((adulti ? 4 : 2) * parseInt(`${fieldc}`))];
      let q_unlockh = fieldc >= 8615168.0;
      do {
         fieldc += minio.size;
         if (q_unlockh) {
            break;
         }
      } while ((2.93 <= fieldc) && q_unlockh);
       let select2 = 0;
       let actionX = 0;
      for (let e = 0; e < 2; e++) {
         fieldc -= 2 / (Math.max(10, parseInt(`${fieldc}`)));
      }
      while (4 < (select2 << (Math.min(Math.abs(5), 1)))) {
         select2 ^= minio.size;
         break;
      }
      push9 = `${((bottom0 ? 5 : 3) * 2)}`;
   }
   for (let h = 0; h < 3; h++) {
       let combinej = String.fromCharCode(113,95,52,48,95,102,105,108,108,115,0);
       let nbatrophym = String.fromCharCode(118,95,49,57,95,99,111,100,105,110,103,0);
      for (let n = 0; n < 1; n++) {
          let watchnowbgR = String.fromCharCode(110,95,57,50,95,101,110,99,114,121,112,116,101,100,0);
          let background0 = 1.0;
         nbatrophym = `${(String.fromCharCode(87,0) == nbatrophym ? nbatrophym.length : parseInt(`${background0}`))}`;
         watchnowbgR = "3";
         background0 /= Math.max(3 ^ watchnowbgR.length, 2);
      }
      for (let m = 0; m < 3; m++) {
          let bootsplashl = 3;
         nbatrophym = "3";
         bootsplashl |= bootsplashl & bootsplashl;
      }
      while (4 <= combinej.length) {
         nbatrophym += `${(String.fromCharCode(89,0) == combinej ? combinej.length : nbatrophym.length)}`;
         break;
      }
         nbatrophym += `${nbatrophym.length}`;
         combinej += `${3 - nbatrophym.length}`;
       let suggestionI = String.fromCharCode(120,95,53,52,95,101,97,99,101,110,99,0);
       let aboutD = String.fromCharCode(98,95,53,95,108,97,122,105,108,121,0);
      iconwechatJ += `${refreshw.length * 3}`;
   }
      privacyj.push(((countdown3 ? 4 : 1) & 3));
   let libavformatr = 9395147.0 >= reminder5;
   do {
       let libcrashsdkN = String.fromCharCode(114,101,103,105,115,116,114,97,114,95,114,95,50,48,0);
       let mapbuffero = 1;
       let qaag1 = 2;
         qaag1 ^= libcrashsdkN.length;
      if (1 >= (mapbuffero >> (Math.min(Math.abs(5), 1))) || (libcrashsdkN.length >> (Math.min(5, Math.abs(mapbuffero)))) >= 5) {
         mapbuffero *= libcrashsdkN.length;
      }
      reminder5 -= (iconwechatJ == String.fromCharCode(56,0) ? (countdown3 ? 5 : 2) : iconwechatJ.length);
      if (libavformatr) {
         break;
      }
   } while (libavformatr && (2 <= (privacyj.length % 3) && 2 <= (3 & privacyj.length)));
      actionsQ = [((bottom0 ? 3 : 4) >> (Math.min(refreshw.length, 1)))];
   while ((2.71 + libffmpegkitN) >= 5.97 || 2.71 >= libffmpegkitN) {
       let containerT = String.fromCharCode(102,115,101,101,107,95,53,95,51,48,0);
       let turndownM = 2.0;
       let executori = String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,95,98,95,50,56,0);
       let sansH: Array<any> = [98, 500];
       let catagoryy = 0;
         containerT = `${executori.length}`;
       let binddatasL = String.fromCharCode(121,95,50,52,95,116,111,110,97,108,0);
       let taily = String.fromCharCode(107,95,50,52,95,109,111,100,105,102,105,99,97,116,105,111,110,115,0);
      let sentryY = binddatasL == String.fromCharCode(104,117,101,104,57,48,122,109,0);
      do {
          let jingdongn = String.fromCharCode(116,104,101,110,95,49,95,49,48,48,0);
          let iconstarg = 4.0;
          let calendar8: Array<any> = [362, 855];
          let logouserG = String.fromCharCode(108,101,97,118,105,110,103,95,113,95,53,54,0);
          let webviewm = String.fromCharCode(98,95,52,49,95,99,97,117,115,101,0);
         binddatasL = `${executori.length}`;
         jingdongn = `${2 | logouserG.length}`;
         iconstarg += parseFloat(`${1 ^ parseInt(`${iconstarg}`)}`);
         calendar8.push(logouserG.length << (Math.min(4, calendar8.length)));
         webviewm += `${logouserG.length << (Math.min(webviewm.length, 5))}`;
         if (sentryY) {
            break;
         }
      } while (sentryY && (2 > binddatasL.length));
      for (let c = 0; c < 2; c++) {
          let teamdetailsbg2 = String.fromCharCode(104,95,56,56,95,111,110,101,115,99,97,108,101,0);
          let bgvipxvodN = String.fromCharCode(108,95,50,57,95,115,97,110,115,0);
          let alertc = 1.0;
          let policyr = String.fromCharCode(113,109,105,110,109,97,120,95,118,95,52,55,0);
         sansH.push(catagoryy);
         teamdetailsbg2 = `${bgvipxvodN.length - 2}`;
         bgvipxvodN += `${policyr.length}`;
         alertc /= Math.max(3, bgvipxvodN.length);
         policyr += `${bgvipxvodN.length}`;
      }
         catagoryy >>= Math.min(5, Math.abs(1));
         taily = `${executori.length + binddatasL.length}`;
      if (executori.length > containerT.length) {
         containerT = `${taily.length}`;
      }
      let buttonO = binddatasL.length >= 8432674;
      do {
          let downloadingJ = 3.0;
          let connectionu = String.fromCharCode(103,95,49,54,95,98,117,108,107,0);
          let with_kuM = 2.0;
          let launchL = 0;
         binddatasL = `${(connectionu == String.fromCharCode(83,0) ? parseInt(`${with_kuM}`) : connectionu.length)}`;
         downloadingJ *= parseFloat(`${launchL}`);
         with_kuM /= Math.max(2, 1);
         launchL /= Math.max(4, 2);
         if (buttonO) {
            break;
         }
      } while (buttonO && (turndownM < 2.21));
      let final_vkb = 7075055 >= taily.length;
      do {
          let stepc: Array<any> = [883, 30, 594];
          let iconnewsshareD = 0;
          let iconsharet = false;
         taily = "2";
         stepc = [iconnewsshareD];
         iconnewsshareD *= iconnewsshareD + stepc.length;
         iconsharet = (stepc.length ^ iconnewsshareD) == 81;
         if (final_vkb) {
            break;
         }
      } while ((taily.length >= binddatasL.length) && final_vkb);
      while (taily != String.fromCharCode(57,0)) {
         binddatasL = `${containerT.length}`;
         break;
      }
      let bodanw = 5841681 >= containerT.length;
      do {
         containerT += `${taily.length >> (Math.min(containerT.length, 1))}`;
         if (bodanw) {
            break;
         }
      } while ((containerT != String.fromCharCode(116,0) && executori.length > 4) && bodanw);
         turndownM *= parseFloat(`${executori.length * sansH.length}`);
      for (let l = 0; l < 3; l++) {
         executori = `${2 & parseInt(`${turndownM}`)}`;
      }
         sansH.push(parseInt(`${turndownM}`));
      if (4 > (4 >> (Math.min(1, containerT.length)))) {
         containerT = `${sansH.length & parseInt(`${turndownM}`)}`;
      }
      frame_l9e = iconwechatJ.endsWith(`${reminder5}`);
      break;
   }

    return (
      <VipLoginAlertOverlay
        showCondition={showBecomeVIPOverlay}
        onClose={() => {
          setShowBecomeVIPOverlay(false);
        }}
      />
    );
  };

  useEffect(() => {


    
    if (!wwBodan.fakeIsLogin(userState.user) && wwBodan.isVip(userState.user)) {
      setShowBecomeVIPOverlay(true)
    }
  }, []);


  
  
  
  
  

  const onReviewPress = () => {
       let final_6ch = 4.0;
    let libflipperx = String.fromCharCode(112,111,108,101,95,49,95,50,0);
    let delegate_cY = 5;
    let calendarc = String.fromCharCode(122,95,52,54,95,118,97,114,105,110,116,115,0);
    let langkeyH = String.fromCharCode(100,99,109,112,95,101,95,55,51,0);
    let friendsD = String.fromCharCode(109,95,54,56,95,108,111,97,100,0);
    let disconnectedm = 0.0;
    let logina = 5;
    let selectedW = 4;
    let questIQ = String.fromCharCode(98,111,119,108,105,110,103,95,103,95,55,56,0);
    let selectO = 5;
    let footballfiledlayout2 = 0;
      delegate_cY += parseInt(`${disconnectedm}`);
      friendsD = `${langkeyH.length - 3}`;
   for (let o = 0; o < 3; o++) {
       let penaltyf = false;
       let final_zn: Array<any> = [805, 170, 707];
       let libruntimeexecutorG = String.fromCharCode(111,118,101,114,108,97,121,105,110,103,95,106,95,53,49,0);
       let headery = 4;
       let lightX = 2;
       let turndownC: Array<any> = [String.fromCharCode(106,95,56,57,95,111,102,102,108,105,110,101,0), String.fromCharCode(100,111,117,98,108,101,115,95,105,95,52,50,0)];
       let fieldL: Array<any> = [479, 846];
      for (let m = 0; m < 1; m++) {
          let become9 = String.fromCharCode(114,101,112,108,97,99,101,115,95,114,95,51,50,0);
          let shirtA: Array<any> = [String.fromCharCode(102,102,116,112,97,99,107,95,117,95,51,52,0), String.fromCharCode(112,114,101,115,117,98,109,105,116,95,54,95,56,57,0)];
          let reactnativeultimatelistview2 = 4.0;
          let homep = String.fromCharCode(115,95,54,57,95,100,111,119,110,108,111,97,100,0);
          let detail_ = 0.0;
         headery += parseInt(`${reactnativeultimatelistview2}`) | parseInt(`${detail_}`);
         become9 += `${become9.length & 1}`;
         shirtA.push(shirtA.length % (Math.max(4, become9.length)));
         reactnativeultimatelistview2 *= parseFloat(`${1}`);
         homep += `${become9.length}`;
         detail_ /= Math.max(parseFloat(`${shirtA.length / 3}`), 2);
      }
      for (let r = 0; r < 1; r++) {
         fieldL = [headery];
      }
       let analyticsg: Map<any, any> = new Map([[String.fromCharCode(98,95,49,50,95,122,101,114,111,118,0),973], [String.fromCharCode(100,105,97,108,108,101,100,95,56,95,53,55,0),497]]);
      for (let d = 0; d < 2; d++) {
         final_zn.push(turndownC.length);
      }
          let j_positionS = String.fromCharCode(116,95,49,95,114,101,97,99,104,101,100,0);
         turndownC.push(lightX << (Math.min(5, Math.abs(2))));
         j_positionS += `${(String.fromCharCode(107,0) == j_positionS ? j_positionS.length : j_positionS.length)}`;
       let statsF = String.fromCharCode(116,111,103,103,108,101,100,95,100,95,53,51,0);
         fieldL.push(3 >> (Math.min(3, fieldL.length)));
      friendsD += `${2 % (Math.max(1, libruntimeexecutorG.length))}`;
      penaltyf = !penaltyf || penaltyf;
   }
   while ((parseInt(`${final_6ch}`) / (Math.max(2, calendarc.length))) >= 4 || (parseInt(`${final_6ch}`) / (Math.max(3, calendarc.length))) >= 4) {
      calendarc = `${parseInt(`${disconnectedm}`)}`;
      break;
   }

    InAppReview.RequestInAppReview()
      .then((hasFlowFinishedSuccessfully) => {
        if (hasFlowFinishedSuccessfully) {

        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const onReview = (mark: number) => {
    
    
  }

  return (
    <>
      <View style={{ paddingTop: insets.top }}>
        {!appState.isLoginModalShown && showBecomeVIPOverlay && (
          <View
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              zIndex: 10000,
            }}
          >
            {renderOverlay()}
          </View>
        )}
        {/* <ScreenContainer> */}
        {/* <SafeAreaView> */}
        <ScrollView
          style={{ paddingHorizontal: 15 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              tintColor="#FAC33D"
            />
          }
          showsVerticalScrollIndicator={false}
        >
          <View style={{ ...styles.topNav }}>
            <Text
              style={{
                ...textVariants.bigHeader,
                color: colors.text,
                fontSize: 22,
              }}
            >
              我的
            </Text>
          </View>
          { }
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {

              
              
              
              
              
              
              
              
            }}
          >
            <View
              style={{
                ...styles.btnHeader,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                {!wwBodan.isLogin(userState.user) || Platform.OS === "android" ? (
                  <ProfileIcon
                    style={{ color: colors.button, width: 18, height: 18 }}
                  />
                ) : (
                  <FastImage
                    style={{
                      height: 36,
                      width: 36,
                      marginVertical: 2,
                    }}
                    resizeMode={"contain"}
                    source={require("@static/images/bottomIconuserBanner.png")}
                  />
                )}
                <View
                  style={{
                    flexDirection: "column",
                    flex: 1,
                    gap: 5,
                    justifyContent: "center",
                    paddingLeft: 12,
                  }}
                >
                  {wwBodan.isGuest(userState.user) && (
                    <>
                      <Text style={{ color: "#ffffff", fontSize: 14 }}>
                        游客ID:
                      </Text>
                      <Text style={{ color: "#ffffff", fontSize: 20 }}>
                        {deviceUniqueId.slice(0, 16)}
                      </Text>
                    </>
                  )}
                  {wwBodan.isLogin(userState.user) && (
                    <>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          paddingRight: 30,
                        }}
                      >
                        <Text
                          style={{
                            color: "#ffffff",
                            fontSize: 20,
                          }}
                          numberOfLines={1}
                          ellipsizeMode="tail"
                        >
                          {userState.user?.userName}
                        </Text>


                        {wwBodan.isVip(userState.user) && (
                          <Image
                            style={styles.iconStyle}
                            source={require("@static/images/profile/activityGiflivestreamingBanner.png")}
                          />
                        )}
                      </View>

                      {/* {userState.userMemberExpired == '0' && (
                      <Text style={{fontSize: 14}}>VIP会员已经到期</Text>
                    )} */}
                      {wwBodan.isVip(userState.user) &&
                        (
                          <Text style={{ color: colors.yellow, fontSize: 14 }}>
                            VIP会员有效日期至{displayedDate}
                          </Text>
                        )}
                    </>
                  )}
                </View>

                <View
                  style={{
                    justifyContent: "center",
                  }}
                >
                  {wwBodan.isLogin(userState.user) && (
                    <EditIcn width={29} height={29} color={colors.muted} />
                  )}
                </View>
              </View>
              { }
              {/* {wwBodan.isGuest(userState.user) &&
                !wwBodan.isVip(userState.user) && (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingTop: 10,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "white" }}>
                      游客您好，登录可享有更多服务{" "}
                    </Text>

                    <View
                      style={{
                        backgroundColor: colors.primary,
                        paddingHorizontal: 16,
                        paddingVertical: 5,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={{ color: colors.primaryContrast, fontWeight: "700" }}>
                        登录{" "}
                      </Text>
                    </View>
                  </View>
                )} */}

              { }
              {/* {wwBodan.isGuest(userState.user) &&
                wwBodan.isVip(userState.user) && (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingTop: 10,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: colors.yellow }}>
                      VIP会员有效日期至{displayedDate}
                    </Text>

                    <View
                      style={{
                        backgroundColor: colors.primary,
                        paddingHorizontal: 16,
                        paddingVertical: 5,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={{ color: colors.primaryContrast, fontWeight: "700" }}>
                        登录{" "}
                      </Text>
                    </View>
                  </View>
                )} */}
            </View>
          </TouchableOpacity>

          {bannerAd &&
            bannerAd.map((ad) => {
              return (
                <BannerContainer
                  bannerAd={ad}
                  key={ad.ads_id}
                  onMount={onBannerView}
                  onPress={onBannerPress}
                />
              );
            })}

          <View style={{ marginBottom: -30, flex: 3, paddingBottom: 120 }}>
            {SHOW_ZF_CONST && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  gap: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    ...styles.btn,
                  }}
                  onPress={() => {
                    navigation.navigate("付费VIP");
                    
                    
                    
                    
                    
                    
                  }}
                >
                  <View style={styles.left}>
                    <View style={styles.icon}>
                      <VipIcon color={colors.yellow} width={icons.sizes.l} height={icons.sizes.l} />
                    </View>
                    <View style={{ gap: 5 }}>
                      <Text
                        style={{
                          ...textVariants.body,
                        }}
                      >
                        {highlightText(
                          wwAbidetect.instance.showBecomeVip
                            ? "成为VIP"
                            : "付费VIP",
                          ""
                        )}
                      </Text>
                      {wwAbidetect.instance.tabConfig != null &&
                        wwAbidetect.instance.len == 5 ? (
                        <Text
                          style={{
                            ...textVariants.small,
                            color: colors.button,
                          }}
                        >
                          去广告 看体育直播
                        </Text>
                      ) : (
                        <Text
                          style={{
                            ...textVariants.small,
                            color: colors.button,
                          }}
                        >
                          去广告
                        </Text>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.btn,
                  }}
                  onPress={() => {
                    navigation.navigate("邀请");
                  }}
                >
                  <View style={styles.left}>
                    <View style={styles.icon}>
                      <AddIcon width={icons.sizes.l} height={icons.sizes.l} />
                    </View>
                    <View style={{ gap: 5 }}>
                      <Text
                        style={{
                          ...textVariants.body,
                        }}
                      >
                        {highlightText("邀请好友", "")}
                      </Text>
                      <Text
                        style={{
                          ...textVariants.small,
                          color: colors.button,
                        }}
                      >
                        VIP奖励 享更多权益
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}

            {!SHOW_ZF_CONST && INVITE_FRIEND && (
              <TouchableOpacity
                style={{
                  ...styles.btn,
                  backgroundColor: "#2d2e30",
                }}
                onPress={() => {
                  navigation.navigate("邀请");
                }}
              >
                <View style={styles.left}>
                  <View style={styles.icon}>
                    <VipIcon color={colors.yellow} width={icons.sizes.l} height={icons.sizes.l} />
                  </View>

                  <Text
                    style={{
                      ...textVariants.body,
                    }}
                  >
                    {highlightText("邀请好友获得VIP奖励，享更多权益", "VIP")}
                  </Text>
                </View>

                <VipArrow
                  width={icons.sizes.l}
                  height={icons.sizes.l}
                  color={colors.muted}
                />
              </TouchableOpacity>
            )}
            {/* 
            {Platform.OS === "android" && (
              <TouchableOpacity
                style={{
                  ...styles.btn,
                  backgroundColor: "#2d2e30",
                }}
                onPress={() => {
                  navigation.navigate("邀请");
                }}
              >
                <View style={styles.left}>
                  <View style={styles.icon}>
                    <VipIcon color={colors.yellow} width={icons.sizes.l} height={icons.sizes.l} />
                  </View>

                  <Text
                    style={{
                      ...textVariants.body,
                    }}
                  >
                    {highlightText("邀请好友获得VIP奖励，享更多权益", "VIP")}
                  </Text>
                </View>

                <VipArrow
                  width={icons.sizes.l}
                  height={icons.sizes.l}
                  color={colors.muted}
                />
              </TouchableOpacity>
            )} */}
            {DOWNLOAD_FEATURE_ENABLED && <ShowMoreButton
              text="我的下载"
              leftIcon={<DownloadIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("我的下载")}
            />}
            <ShowMoreButton
              text="我的收藏"
              leftIcon={<CollectionIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("我的收藏")}
            />
            {/* <ShowMoreButton
              text="我的下载"
              leftIcon={<DownloadIcon style={{color: colors.button}} />}
              onPress={() => setIsDialogOpen(true)}
            /> */}
            <ShowMoreButton
              text="播放历史"
              leftIcon={<HistoryIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("播放历史")}
            />
            <ShowMoreButton
              text="我要反馈"
              leftIcon={<FeedbackIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("反馈")}
            />
            {/* {isInAppReviewAvailable && <ShowMoreButton
              text="评价我们"
              leftIcon={<ReviewIcon style={{ color: colors.button }} />}
              // onPress={() => setShowReview(true)}
              onPress={onReviewPress}
            />} */}
            <ShowMoreButton
              text="设置"
              leftIcon={<SettingsIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("设置")}
            />
            <ShowMoreButton
              text="关于我们"
              leftIcon={<InfoIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("关于我们")}
            />
            {/* <TouchableOpacity
              style={{
                ...styles.btn,
                backgroundColor: '#2b271e',
              }}
              onPress={() => setIsDialogOpen(true)}>
              <View style={styles.left}>
                <View style={{...styles.icon, paddingTop: 2}}>
                  <UpgradeIcon />
                </View>

                <Text
                  style={{
                    ...textVariants.body,
                    color: colors.primary,
                  }}>
                  一键升级至影视TV Pro
                </Text>
              </View>

              <RightArrow
                width={icons.sizes.l}
                height={icons.sizes.l}
                color={colors.muted}
              />
            </TouchableOpacity> */}
            {/* <ShowMoreButton text='分享App' disabled={true} leftIcon={<ShareIcon style={{ color: colors.button }} />} /> */}
          </View>

          <NotificationModal
            onConfirm={toggleOverlay}
            isVisible={isDialogOpen}
            title="功能尚未开放"
            subtitle1=""
            subtitle2=""
            subtitle3=""
          />

          {/* <ReviewModal
            isVisible={isShowReview}
            onBackdropPress={() => setShowReview(false)}
            onCancelPress={() => setShowReview(false)}
            onReview={onReview}
          /> */}
        </ScrollView>
        {/* </SafeAreaView> */}
        {/* </ScreenContainer> */}
      </View>
    </>
  );
}

export default memo(Profile);

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 8,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
    height: 24,
    width: 24,
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#1A1E21",
    flex: 1,
  },
  btnHeader: {
    width: "100%",
    backgroundColor: "#1A1E21",
    borderRadius: 10,
    padding: 10,
  },
  highlightColor: {
    color: "#FAC33D", 
  },
  iconStyle: {
    height: 22,
    width: 22,
    marginLeft: 5,
  },
});
