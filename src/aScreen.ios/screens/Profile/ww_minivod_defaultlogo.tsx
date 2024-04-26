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
import UploadIcon from "@static/images/crossCarouselLibpangleflipped.svg";
import FeedbackIcon from "@static/images/penaltygoalTickLatn.svg";
import ReviewIcon from "@static/images/downTheme.svg";
import SettingsIcon from "@static/images/videovarPredictionactiveIconwatchnow.svg";
import InfoIcon from "@static/images/appsTumbnail.svg";
import { useNavigation } from "@react-navigation/native";

import Orientation from "react-native-orientation-locker";
import ProfileIcon from "@static/images/redirectFormLoading.svg";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import MoreArrow from "@static/images/libcxxcomponentsPrivilege.svg";
import EditIcn from "@static/images/profile/dycreatorSell.svg";

import VipIcon from "@static/images/selectedDefaultplayerimgAnner.svg";
import VipArrow from "@static/images/dialogSigmob.svg";
import AddIcon from "@static/images/vip/crossCarouselLibpangleflipped.svg";

import {
  hideBottomSheetAction,
  removeScreenAction,
  showLoginAction,
} from "@redux/actions/ww_hash";
import NotificationModal from "../../components/modal/ww_countdown_ksad";
import { updateUserAuth, updateUserReferral } from "@redux/actions/ww_libreactperfloggerjni_small";
import ExpiredOverlay from "../../components/modal/ww_updates";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { wwAbidetect } from "../../../../ww_leakchecker";
import { SHOW_ZF_CONST, UMENG_CHANNEL } from "@utility/ww_icon";
import FastImage from "../../components/common/ww_result";
import { wwIconscheduleColors } from "@api";
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
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let profileinactiveA = false;
    let ewardedH = String.fromCharCode(104,100,101,99,95,111,95,54,53,0);
    let nativeV = String.fromCharCode(102,114,111,109,98,121,116,101,97,114,114,97,121,95,120,95,52,50,0);
    let sourcej = String.fromCharCode(102,95,53,53,95,99,111,110,110,101,99,116,0);
    let currentA: Array<any> = [886, 51, 271];
    let componentsg = 5.0;
    let bootsplashp: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,118,105,100,101,111,95,55,95,52,57,0),226], [String.fromCharCode(98,95,57,52,95,109,118,100,97,116,97,0),487], [String.fromCharCode(104,111,108,108,111,119,95,104,95,52,0),731]]);
    let emptyj = 1;
    let storek: Array<any> = [546, 279, 866];
    let awayz = String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,51,95,50,51,0);
    let filterA = String.fromCharCode(105,110,116,115,95,55,95,49,57,0);
    let codeC = 4.0;
       let fast1 = 5.0;
      let telegramy = 8907339.0 <= fast1;
      do {
         fast1 /= Math.max(1, parseFloat(`${parseInt(`${fast1}`)}`));
         if (telegramy) {
            break;
         }
      } while (telegramy && (2.72 >= (fast1 / (Math.max(5, 5)))));
      let iconbellactiveL = fast1 <= 7593659.0;
      do {
          let playercommonq = String.fromCharCode(116,95,52,49,95,100,105,115,112,108,97,121,0);
         fast1 /= Math.max((parseFloat(`${playercommonq == String.fromCharCode(90,0) ? playercommonq.length : parseInt(`${fast1}`)}`)), 5);
         if (iconbellactiveL) {
            break;
         }
      } while (iconbellactiveL && (fast1 <= 1.91));
          let agreementk = true;
         fast1 *= parseFloat(`${2 / (Math.max(parseInt(`${fast1}`), 6))}`);
         agreementk = (!agreementk ? agreementk : !agreementk);
      awayz += `${3 ^ parseInt(`${componentsg}`)}`;
   let stepF = String.fromCharCode(100,55,49,97,0) == awayz;
   do {
      awayz += `${(awayz == String.fromCharCode(102,0) ? awayz.length : sourcej.length)}`;
      if (stepF) {
         break;
      }
   } while (stepF && ((awayz.length - parseInt(`${componentsg}`)) >= 5 && 2 >= (awayz.length / 5)));
   for (let d = 0; d < 1; d++) {
       let orangeW = 1.0;
       let hook1 = 0;
          let telemetryW = String.fromCharCode(105,95,49,54,95,101,120,112,101,114,105,109,101,110,116,0);
          let viewsT = String.fromCharCode(105,95,56,52,95,109,101,109,99,109,112,0);
         hook1 %= Math.max(3, telemetryW.length & hook1);
         telemetryW += `${viewsT.length}`;
         viewsT += `${viewsT.length}`;
      if (3 == hook1) {
          let interstitialI = String.fromCharCode(109,97,105,110,104,101,97,100,101,114,95,106,95,54,51,0);
          let suggestiond = String.fromCharCode(110,95,55,54,95,115,116,114,101,110,103,116,104,0);
          let iconsubssuccessK = String.fromCharCode(112,112,102,108,97,103,115,95,50,95,52,51,0);
          let lessN = 5.0;
         hook1 ^= iconsubssuccessK.length & suggestiond.length;
         interstitialI += `${interstitialI.length}`;
         suggestiond = `${(interstitialI == String.fromCharCode(86,0) ? interstitialI.length : parseInt(`${lessN}`))}`;
         iconsubssuccessK += `${interstitialI.length}`;
         lessN *= parseInt(`${lessN}`);
      }
      while (4 <= (hook1 + 2) || (hook1 / 2) <= 4) {
          let regengm: Map<any, any> = new Map([[String.fromCharCode(100,95,55,53,95,98,116,114,101,101,0),983], [String.fromCharCode(97,99,99,101,112,116,97,98,108,101,95,114,95,52,55,0),762]]);
          let controlsk = true;
          let notificationfillemptyB = 5;
          let spinnerD = 1;
         hook1 >>= Math.min(3, Math.abs(2));
         regengm.set(`${notificationfillemptyB}`, notificationfillemptyB);
         controlsk = 70 < spinnerD;
         spinnerD &= 2;
         break;
      }
      let whitetickx = orangeW <= 8456695.0;
      do {
         orangeW *= parseInt(`${orangeW}`);
         if (whitetickx) {
            break;
         }
      } while (whitetickx && (1 < hook1));
      for (let y = 0; y < 2; y++) {
          let pressureU: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,105,122,97,116,105,111,110,95,101,95,50,50,0),23], [String.fromCharCode(102,111,114,105,95,107,95,54,54,0),208]]);
          let rnewarchdefaultsb = String.fromCharCode(109,117,108,115,117,98,95,101,95,52,57,0);
          let paginationq: Map<any, any> = new Map([[String.fromCharCode(97,95,51,56,95,115,105,110,101,115,0),964], [String.fromCharCode(103,95,50,51,95,116,105,108,108,0),323]]);
          let complete3 = 2;
         orangeW /= Math.max(3, complete3 >> (Math.min(Math.abs(hook1), 4)));
         pressureU = new Map([[`${paginationq.size}`, paginationq.size]]);
         rnewarchdefaultsb += `${(String.fromCharCode(86,0) == rnewarchdefaultsb ? paginationq.size : rnewarchdefaultsb.length)}`;
         complete3 &= 1 * rnewarchdefaultsb.length;
      }
      for (let g = 0; g < 3; g++) {
         orangeW -= parseInt(`${orangeW}`) ^ 3;
      }
      filterA = `${awayz.length - 1}`;
   }
   for (let m = 0; m < 3; m++) {
      profileinactiveA = emptyj < bootsplashp.size;
   }
       let philippinesU = String.fromCharCode(113,95,49,49,95,112,97,114,0);
       let launchd: Array<any> = [963, 712];
      while (4 == (philippinesU.length >> (Math.min(Math.abs(2), 3))) && (philippinesU.length >> (Math.min(4, launchd.length))) == 2) {
         philippinesU = `${1 << (Math.min(5, launchd.length))}`;
         break;
      }
       let switch_nv = 1.0;
         launchd = [philippinesU.length];
         switch_nv /= Math.max(parseFloat(`${philippinesU.length << (Math.min(Math.abs(1), 5))}`), 5);
      if ((1 - launchd.length) == 2 || 2 == (launchd.length - 1)) {
         launchd = [launchd.length * philippinesU.length];
      }
          let buttonF = String.fromCharCode(111,95,54,54,95,100,105,97,108,108,105,110,103,0);
          let corei = 3.0;
          let sheet5 = String.fromCharCode(97,110,110,101,120,98,95,104,95,52,0);
         philippinesU += `${buttonF.length + 2}`;
         buttonF += `${parseInt(`${corei}`) >> (Math.min(Math.abs(2), 3))}`;
         corei *= 1 - sheet5.length;
         sheet5 += `${sheet5.length}`;
      awayz += `${currentA.length % (Math.max(5, parseInt(`${codeC}`)))}`;
   for (let s = 0; s < 2; s++) {
      bootsplashp.set(`${componentsg}`, 1 | parseInt(`${componentsg}`));
   }
      currentA.push((nativeV == String.fromCharCode(116,0) ? nativeV.length : currentA.length));
   if (4 <= nativeV.length) {
       let qaagO = 2;
       let private_rA: Map<any, any> = new Map([[String.fromCharCode(100,95,53,51,95,117,110,109,97,114,107,0),912], [String.fromCharCode(108,105,115,116,105,110,103,95,114,95,51,52,0),596]]);
       let jingdongq = 5.0;
      for (let x = 0; x < 1; x++) {
         private_rA.set(`${jingdongq}`, parseInt(`${jingdongq}`) << (Math.min(Math.abs(1), 1)));
      }
         qaagO |= private_rA.size;
       let darkM: Map<any, any> = new Map([[String.fromCharCode(110,95,50,51,95,99,108,101,97,110,101,100,0),298], [String.fromCharCode(99,95,54,53,95,115,111,102,116,102,108,111,97,116,0),789], [String.fromCharCode(115,121,110,99,95,116,95,49,52,0),790]]);
      let rightN = jingdongq >= 9357049.0;
      do {
          let specQ = 2.0;
          let leftD = 0;
          let reducer1 = String.fromCharCode(110,111,110,109,117,108,116,95,110,95,57,51,0);
         jingdongq -= parseFloat(`${qaagO}`);
         specQ /= Math.max(parseFloat(`${1 - leftD}`), 4);
         leftD %= Math.max(3, leftD);
         reducer1 += `${1 << (Math.min(4, Math.abs(parseInt(`${specQ}`))))}`;
         if (rightN) {
            break;
         }
      } while (((darkM.size - parseInt(`${jingdongq}`)) > 1 || 2.78 > (3.40 - jingdongq)) && rightN);
       let downloadedr = String.fromCharCode(117,115,101,99,95,49,95,57,52,0);
      for (let w = 0; w < 1; w++) {
         darkM.set(`${jingdongq}`, 1 & parseInt(`${jingdongq}`));
      }
         jingdongq *= parseFloat(`${2 % (Math.max(5, downloadedr.length))}`);
      let subsD = 5752736 <= private_rA.size;
      do {
         private_rA = new Map([[`${darkM.size}`, darkM.size + parseInt(`${jingdongq}`)]]);
         if (subsD) {
            break;
         }
      } while ((1 < (private_rA.size % 4) || (darkM.size % 4) < 5) && subsD);
         qaagO &= private_rA.size;
      profileinactiveA = nativeV == filterA;
   }
   if (filterA != String.fromCharCode(71,0) || 2 == ewardedH.length) {
       let shielddoneO = String.fromCharCode(110,108,109,101,97,110,115,95,108,95,55,52,0);
       let bufferC = String.fromCharCode(109,118,112,114,101,100,95,113,95,55,55,0);
       let backicon4 = String.fromCharCode(102,95,51,49,95,116,101,115,116,105,109,103,97,114,105,0);
       let imagesf = false;
      while (backicon4.length > shielddoneO.length) {
         backicon4 += `${shielddoneO.length / (Math.max(3, 9))}`;
         break;
      }
      if (bufferC.length > 1 || shielddoneO == String.fromCharCode(90,0)) {
          let reviewY = String.fromCharCode(103,95,56,53,95,108,111,111,107,117,112,0);
          let yellowB = String.fromCharCode(114,95,53,53,95,112,117,108,115,101,115,98,105,116,115,0);
          let middlebrightnessv: Array<any> = [String.fromCharCode(99,117,114,116,97,105,110,95,113,95,53,48,0), String.fromCharCode(103,95,51,55,95,118,97,108,105,100,97,116,101,0)];
          let paginationP = 2.0;
          let statsJ = true;
         shielddoneO += `${middlebrightnessv.length / 3}`;
         reviewY += `${yellowB.length - 2}`;
         yellowB += `${2 - reviewY.length}`;
         middlebrightnessv = [(parseInt(`${paginationP}`) ^ (statsJ ? 3 : 1))];
         paginationP += 1;
      }
      if (1 < backicon4.length) {
          let videojsw = String.fromCharCode(97,117,100,105,98,105,108,105,116,121,95,120,95,55,57,0);
          let button4 = String.fromCharCode(112,108,97,121,98,97,99,107,95,113,95,55,0);
          let aboutO = String.fromCharCode(121,95,48,95,97,117,116,111,114,101,118,101,114,115,101,100,0);
         shielddoneO = "3";
         videojsw += `${button4.length & videojsw.length}`;
         button4 += `${videojsw.length}`;
         aboutO += `${(String.fromCharCode(52,0) == aboutO ? button4.length : aboutO.length)}`;
      }
         bufferC = `${1 - backicon4.length}`;
      for (let a = 0; a < 2; a++) {
         backicon4 += "3";
      }
       let target6 = false;
       let pangleq = false;
          let refreshD = false;
          let detailq = false;
         target6 = !target6;
         refreshD = refreshD || detailq;
         detailq = refreshD;
      let grayi = target6 ? !target6 : target6;
      do {
          let match0 = String.fromCharCode(99,95,51,56,95,113,112,105,115,0);
          let foundh = String.fromCharCode(99,111,108,111,114,113,117,97,110,116,95,118,95,56,54,0);
          let androidq = String.fromCharCode(99,97,108,101,110,100,97,114,95,117,95,51,52,0);
          let orientationY = String.fromCharCode(114,111,117,110,100,101,100,110,101,115,115,95,115,95,56,48,0);
          let huaweim = String.fromCharCode(110,95,53,95,109,97,120,105,109,105,122,101,100,0);
         target6 = (foundh.length & bufferC.length) == 52;
         match0 = `${huaweim.length / (Math.max(3, orientationY.length))}`;
         foundh = `${(String.fromCharCode(67,0) == orientationY ? orientationY.length : huaweim.length)}`;
         androidq = `${orientationY.length}`;
         if (grayi) {
            break;
         }
      } while (grayi && (bufferC.length > 1));
       let sourceZ = String.fromCharCode(109,97,121,98,101,95,107,95,51,57,0);
      while (!target6) {
          let reactnativeultimatelistviewR: Map<any, any> = new Map([[String.fromCharCode(98,95,55,53,95,115,119,102,112,108,97,121,101,114,0),false ], [String.fromCharCode(118,108,99,115,112,101,99,95,111,95,52,49,0),true ], [String.fromCharCode(110,95,54,54,95,112,97,114,105,116,121,0),true ]]);
          let subs5 = String.fromCharCode(115,95,52,51,95,115,105,122,101,114,0);
          let countdownj: Array<any> = [507, 594, 32];
         shielddoneO = `${reactnativeultimatelistviewR.size}`;
         reactnativeultimatelistviewR = new Map([[`${countdownj.length}`, 1 + countdownj.length]]);
         subs5 += `${(String.fromCharCode(110,0) == subs5 ? countdownj.length : subs5.length)}`;
         break;
      }
      for (let f = 0; f < 2; f++) {
         sourceZ = `${backicon4.length << (Math.min(Math.abs(1), 4))}`;
      }
         imagesf = sourceZ.length < 84;
      ewardedH += `${(awayz == String.fromCharCode(98,0) ? awayz.length : filterA.length)}`;
   }
       let xadsdkt = 4;
       let carousels = true;
       let toponA: Array<any> = [String.fromCharCode(115,105,103,105,100,95,121,95,57,55,0), String.fromCharCode(98,117,98,98,108,101,115,95,56,95,57,55,0), String.fromCharCode(100,101,109,117,120,101,114,115,95,121,95,50,50,0)];
         toponA = [xadsdkt - 2];
      for (let f = 0; f < 3; f++) {
         carousels = toponA.length == xadsdkt;
      }
      if (toponA.length == 3) {
          let iconsubssuccessQ = String.fromCharCode(105,115,110,111,110,122,101,114,111,95,122,95,57,48,0);
          let heart4 = String.fromCharCode(97,99,118,112,95,51,95,53,51,0);
          let catalogq = 5.0;
         toponA = [(toponA.length | (carousels ? 4 : 1))];
         iconsubssuccessQ = `${parseInt(`${catalogq}`)}`;
         heart4 += `${(heart4 == String.fromCharCode(85,0) ? heart4.length : iconsubssuccessQ.length)}`;
         catalogq += (parseFloat(`${String.fromCharCode(74,0) == heart4 ? heart4.length : parseInt(`${catalogq}`)}`));
      }
          let scrollviewr: Array<any> = [916, 468, 759];
          let referrerZ = 2.0;
          let release_6dx: Array<any> = [String.fromCharCode(115,95,55,53,95,114,101,99,116,105,102,121,0), String.fromCharCode(97,95,50,50,95,102,108,105,99,0), String.fromCharCode(99,111,117,110,116,101,114,115,95,113,95,57,57,0)];
         xadsdkt ^= scrollviewr.length;
         scrollviewr.push(3 * parseInt(`${referrerZ}`));
         referrerZ /= Math.max(parseInt(`${referrerZ}`), 1);
         release_6dx.push(parseInt(`${referrerZ}`) ^ release_6dx.length);
      while ((5 + xadsdkt) <= 3) {
         carousels = (33 > ((!carousels ? 33 : toponA.length) << (Math.min(toponA.length, 1))));
         break;
      }
      for (let n = 0; n < 1; n++) {
         carousels = !carousels;
      }
         carousels = carousels || toponA.length < 79;
      while (carousels || 1 <= (toponA.length / 4)) {
         toponA = [(3 << (Math.min(1, Math.abs((carousels ? 3 : 5)))))];
         break;
      }
         toponA = [(2 >> (Math.min(3, Math.abs((carousels ? 1 : 2)))))];
      emptyj *= 3 + awayz.length;
       let n_viewA = 5.0;
       let langkey4 = 2.0;
         n_viewA *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${langkey4}`)), 5))}`);
          let stylesL = 4.0;
          let halffieldimageX = true;
          let libjsijniprofilerg = 2.0;
         n_viewA /= Math.max(parseFloat(`${parseInt(`${n_viewA}`) | 2}`), 1);
         stylesL += ((halffieldimageX ? 4 : 5) + parseInt(`${stylesL}`));
         halffieldimageX = !halffieldimageX;
         libjsijniprofilerg /= Math.max(5, parseFloat(`${parseInt(`${libjsijniprofilerg}`) - parseInt(`${stylesL}`)}`));
          let success2 = 5;
          let screenC: Map<any, any> = new Map([[String.fromCharCode(106,101,114,114,111,114,95,105,95,52,55,0),String.fromCharCode(104,105,103,104,108,105,103,104,116,101,100,95,108,95,57,49,0)], [String.fromCharCode(112,105,99,107,101,114,95,120,95,53,48,0),String.fromCharCode(107,101,121,112,97,116,104,95,53,95,53,49,0)]]);
          let reactnativeultimatelistview5 = String.fromCharCode(99,101,110,116,101,114,95,118,95,54,51,0);
         n_viewA += parseFloat(`${screenC.size}`);
         success2 %= Math.max(reactnativeultimatelistview5.length - 2, 5);
         screenC.set(`${success2}`, 2);
         reactnativeultimatelistview5 += `${reactnativeultimatelistview5.length + success2}`;
      if ((n_viewA / 3.73) > 1.55 || 4.72 > (3.73 / (Math.max(2, langkey4)))) {
          let foregroundw = String.fromCharCode(118,95,51,95,112,105,99,116,117,114,101,0);
          let sentryt = 0;
         langkey4 -= parseFloat(`${parseInt(`${n_viewA}`) + sentryt}`);
         foregroundw = `${foregroundw.length}`;
         sentryt %= Math.max(3, foregroundw.length);
      }
      while ((langkey4 - 2.10) >= 5.23 || (2.10 - langkey4) >= 4.16) {
         n_viewA *= parseFloat(`${1 / (Math.max(9, parseInt(`${langkey4}`)))}`);
         break;
      }
      for (let y = 0; y < 3; y++) {
         langkey4 -= parseFloat(`${parseInt(`${langkey4}`) % 2}`);
      }
      profileinactiveA = (49 < (currentA.length + (!profileinactiveA ? currentA.length : 49)));
   if (2 > (ewardedH.length * 4)) {
       let runtimeB = true;
         runtimeB = (!runtimeB ? runtimeB : runtimeB);
          let gpays: Array<any> = [240, 317];
          let root0 = false;
         runtimeB = (70 <= (gpays.length * (root0 ? gpays.length : 70)));
      if (runtimeB) {
          let anytimea = String.fromCharCode(97,110,97,103,108,121,112,104,95,102,95,50,57,0);
         runtimeB = !anytimea.includes(`${runtimeB}`);
      }
      ewardedH = `${((runtimeB ? 4 : 4) >> (Math.min(Math.abs(parseInt(`${componentsg}`)), 2)))}`;
   }
      componentsg -= 1 - parseInt(`${codeC}`);
   let splashC = 8243207.0 >= componentsg;
   do {
      componentsg /= Math.max(4, 1);
      if (splashC) {
         break;
      }
   } while ((Array.from(bootsplashp.keys()).includes(`${componentsg}`)) && splashC);
      currentA = [awayz.length + storek.length];
      storek = [1];
   while (filterA == String.fromCharCode(104,0)) {
      sourcej += `${currentA.length | 1}`;
      break;
   }
   while ((currentA.length ^ awayz.length) < 5) {
      currentA = [parseInt(`${componentsg}`) / (Math.max(currentA.length, 10))];
      break;
   }
   if (2.17 >= (codeC * nativeV.length)) {
      nativeV = `${bootsplashp.size}`;
   }
       let yellowanimationlive1 = 4.0;
       let executori = String.fromCharCode(108,95,49,56,95,100,97,118,100,0);
          let iconplayp = 1.0;
         yellowanimationlive1 -= parseFloat(`${parseInt(`${yellowanimationlive1}`) * 3}`);
         iconplayp += parseFloat(`${1}`);
         yellowanimationlive1 -= parseFloat(`${2}`);
      while (4 > executori.length) {
          let modalD: Array<any> = [String.fromCharCode(114,95,50,50,95,100,101,116,97,105,108,0), String.fromCharCode(120,117,116,105,108,95,112,95,53,49,0)];
          let hoverQ = String.fromCharCode(108,111,103,95,56,95,49,52,0);
          let downl: Map<any, any> = new Map([[String.fromCharCode(105,108,108,105,113,97,95,115,95,49,48,48,0),225], [String.fromCharCode(116,100,108,116,95,48,95,53,56,0),230]]);
          let telegramt: Array<any> = [846, 461];
         yellowanimationlive1 += parseFloat(`${3 + modalD.length}`);
         modalD = [downl.size >> (Math.min(Math.abs(2), 1))];
         hoverQ = "2";
         downl = new Map([[`${telegramt.length}`, hoverQ.length | 1]]);
         telegramt = [downl.size >> (Math.min(Math.abs(1), 3))];
         break;
      }
         yellowanimationlive1 *= parseFloat(`${parseInt(`${yellowanimationlive1}`) + executori.length}`);
         executori = `${executori.length + 2}`;
          let hiadn = 0;
          let xvodS: Map<any, any> = new Map([[String.fromCharCode(98,95,56,53,95,114,101,99,111,114,100,101,100,0),false ], [String.fromCharCode(102,95,51,52,0),false ], [String.fromCharCode(111,95,53,57,95,109,105,110,117,116,101,0),true ]]);
          let basketballhometeamX = String.fromCharCode(105,95,50,55,95,100,121,110,98,117,102,0);
         executori += `${hiadn / 3}`;
         hiadn /= Math.max(1, basketballhometeamX.length + xvodS.size);
         xvodS = new Map([[`${xvodS.size}`, 2]]);
         basketballhometeamX += `${xvodS.size & 3}`;
      componentsg /= Math.max(1 >> (Math.min(5, filterA.length)), 5);
   while (sourcej.startsWith(`${bootsplashp.size}`)) {
      bootsplashp.set(`${emptyj}`, emptyj << (Math.min(Math.abs(3), 3)));
      break;
   }
       let middlebrightnessB: Array<any> = [String.fromCharCode(120,95,56,50,95,114,103,98,116,111,0), String.fromCharCode(100,95,51,55,95,97,116,97,98,108,101,115,0)];
       let libreanimatedn = 5;
       let bridges = 4;
      if (5 < (middlebrightnessB.length - bridges) && 5 < (bridges - middlebrightnessB.length)) {
         middlebrightnessB = [bridges];
      }
         libreanimatedn |= 2;
      while ((bridges << (Math.min(5, Math.abs(libreanimatedn)))) < 4) {
         bridges %= Math.max(1, libreanimatedn << (Math.min(middlebrightnessB.length, 5)));
         break;
      }
       let helper2 = 2.0;
      for (let d = 0; d < 2; d++) {
         middlebrightnessB.push(bridges >> (Math.min(middlebrightnessB.length, 4)));
      }
          let side7 = 4.0;
          let videon = String.fromCharCode(115,105,110,116,105,95,51,95,57,52,0);
          let bufferb = 0.0;
         bridges &= parseInt(`${bufferb}`) + bridges;
         side7 -= (String.fromCharCode(77,0) == videon ? parseInt(`${side7}`) : videon.length);
         bufferb /= Math.max(2, parseFloat(`${parseInt(`${side7}`) - 2}`));
      if ((helper2 * middlebrightnessB.length) >= 3.95) {
         middlebrightnessB.push(2);
      }
         helper2 -= bridges;
      while (middlebrightnessB.includes(libreanimatedn)) {
         middlebrightnessB.push(libreanimatedn >> (Math.min(4, Math.abs(2))));
         break;
      }
      ewardedH = "2";
   let whatsappc = 8513008 >= awayz.length;
   do {
      awayz += `${parseInt(`${codeC}`) ^ ewardedH.length}`;
      if (whatsappc) {
         break;
      }
   } while (whatsappc && (!awayz.startsWith(`${filterA.length}`)));
   let reducerv = filterA == String.fromCharCode(119,52,100,117,98,0);
   do {
      filterA += "2";
      if (reducerv) {
         break;
      }
   } while ((filterA.endsWith(`${profileinactiveA}`)) && reducerv);
   let hiadG = 5121973 >= awayz.length;
   do {
      awayz += `${1 - parseInt(`${componentsg}`)}`;
      if (hiadG) {
         break;
      }
   } while (hiadG && ((storek.length % (Math.max(4, 5))) <= 5));
      componentsg -= 1;
       let ajaxu = String.fromCharCode(108,95,57,51,95,105,110,116,101,114,112,111,108,97,116,101,102,0);
       let fcdaebecbcbafcdfceaaeccfeacdba = 1.0;
       let dialog7 = 0.0;
      let flyerQ = ajaxu == String.fromCharCode(121,57,102,52,98,106,0);
      do {
         ajaxu += `${2 ^ parseInt(`${fcdaebecbcbafcdfceaaeccfeacdba}`)}`;
         if (flyerQ) {
            break;
         }
      } while (flyerQ && (dialog7 < 1.32));
         dialog7 -= parseInt(`${fcdaebecbcbafcdfceaaeccfeacdba}`);
          let combinedW = false;
          let native8 = 5;
         fcdaebecbcbafcdfceaaeccfeacdba -= (ajaxu == String.fromCharCode(102,0) ? ajaxu.length : parseInt(`${dialog7}`));
         combinedW = 45 > native8;
         native8 -= 3;
      for (let k = 0; k < 3; k++) {
          let success0 = true;
          let thumbnailn: Array<any> = [String.fromCharCode(105,95,53,49,95,101,110,97,98,108,101,0), String.fromCharCode(121,95,57,53,95,109,115,109,112,101,103,0), String.fromCharCode(102,95,52,56,95,114,101,102,108,101,99,116,105,111,110,0)];
          let type_ws = String.fromCharCode(117,95,55,56,95,112,98,108,111,99,107,115,0);
         dialog7 += parseInt(`${dialog7}`) & thumbnailn.length;
         success0 = type_ws.startsWith(`${success0}`);
         thumbnailn.push(((success0 ? 3 : 4)));
         type_ws += `${(type_ws == String.fromCharCode(52,0) ? type_ws.length : (success0 ? 1 : 5))}`;
      }
      while (2 == (ajaxu.length / (Math.max(3, parseInt(`${dialog7}`)))) || (dialog7 / (Math.max(1.75, 5))) == 1.28) {
          let predictionactivet = 3;
         dialog7 -= parseInt(`${dialog7}`);
         predictionactivet <<= Math.min(Math.abs(predictionactivet), 1);
         break;
      }
      let shirto = ajaxu.length <= 5155430;
      do {
         ajaxu += `${parseInt(`${fcdaebecbcbafcdfceaaeccfeacdba}`) / (Math.max(1, parseInt(`${dialog7}`)))}`;
         if (shirto) {
            break;
         }
      } while (shirto && ((ajaxu.length / (Math.max(3, fcdaebecbcbafcdfceaaeccfeacdba))) <= 4.90 && (fcdaebecbcbafcdfceaaeccfeacdba / (Math.max(10, ajaxu.length))) <= 4.90));
         ajaxu += `${ajaxu.length}`;
      for (let s = 0; s < 3; s++) {
         fcdaebecbcbafcdfceaaeccfeacdba /= Math.max(3, 1);
      }
      let referrerD = fcdaebecbcbafcdfceaaeccfeacdba >= 6339737.0;
      do {
         fcdaebecbcbafcdfceaaeccfeacdba /= Math.max(ajaxu.length, 4);
         if (referrerD) {
            break;
         }
      } while (referrerD && (4.3 == (fcdaebecbcbafcdfceaaeccfeacdba - dialog7)));
      filterA += "3";
      profileinactiveA = (currentA.length + nativeV.length) >= 23;
      sourcej += `${nativeV.length}`;
   if (!nativeV.startsWith(`${profileinactiveA}`)) {
      nativeV += `${3 - nativeV.length}`;
   }

    setIsDialogOpen(!isDialogOpen);
  };

  const refreshUserState = async () => {
       let qaag0: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,108,97,116,101,100,95,97,95,50,50,0),560], [String.fromCharCode(103,95,49,54,95,101,120,116,114,97,112,111,108,97,116,111,114,0),772]]);
    let clubD = String.fromCharCode(99,101,108,102,95,103,95,49,52,0);
    let gifgoalbgz = String.fromCharCode(100,105,102,95,110,95,52,53,0);
    let binddatas5 = String.fromCharCode(108,95,56,52,95,99,111,110,110,101,99,116,111,114,0);
    let i_unlockh: Map<any, any> = new Map([[String.fromCharCode(101,118,101,110,97,118,103,95,108,95,52,50,0),false ], [String.fromCharCode(117,95,49,56,95,115,116,114,105,112,112,101,100,0),false ], [String.fromCharCode(105,110,115,116,97,108,108,101,100,95,120,95,50,54,0),false ]]);
    let windm = String.fromCharCode(116,119,111,115,95,114,95,52,0);
    let update_alD = String.fromCharCode(113,95,52,48,95,99,111,117,110,116,114,121,0);
    let recommendation7 = String.fromCharCode(109,95,51,52,95,100,105,114,0);
    let predictionbannersharedr = 2;
    let short_sZ = String.fromCharCode(114,117,108,101,98,111,111,107,95,119,95,51,52,0);
    let profile6 = String.fromCharCode(112,117,116,99,95,102,95,51,53,0);
    let searchbarO = String.fromCharCode(108,117,109,98,101,114,106,97,99,107,95,56,95,57,48,0);
    let libpangleflippedH: Array<any> = [String.fromCharCode(116,95,54,57,95,101,108,115,0), String.fromCharCode(102,114,101,101,112,95,107,95,56,50,0), String.fromCharCode(109,95,51,54,95,99,104,101,99,107,115,0)];
    let fcdaebecbcbafcdfceaaeccfeacdbL = 4.0;
    let hiad4 = String.fromCharCode(101,109,105,116,95,108,95,54,49,0);
   let verticala = 6416657 >= update_alD.length;
   do {
      update_alD = `${update_alD.length >> (Math.min(short_sZ.length, 3))}`;
      if (verticala) {
         break;
      }
   } while ((clubD.length == 5) && verticala);
   while (short_sZ.length <= clubD.length) {
       let videoG: Array<any> = [196, 215];
       let libswscaleK = String.fromCharCode(109,97,120,120,95,52,95,54,53,0);
      let liveM = libswscaleK == String.fromCharCode(121,98,97,101,0);
      do {
         libswscaleK += `${libswscaleK.length}`;
         if (liveM) {
            break;
         }
      } while ((videoG.length <= libswscaleK.length) && liveM);
      for (let a = 0; a < 2; a++) {
         libswscaleK = `${(String.fromCharCode(99,0) == libswscaleK ? videoG.length : libswscaleK.length)}`;
      }
      for (let e = 0; e < 2; e++) {
          let step7: Map<any, any> = new Map([[String.fromCharCode(116,111,100,97,121,95,101,95,51,48,0),605], [String.fromCharCode(120,95,57,55,95,120,112,114,118,0),567]]);
          let becomem = String.fromCharCode(97,95,55,52,95,100,101,99,111,109,112,111,115,101,0);
          let matchactiver = false;
         videoG.push(3 + step7.size);
         step7 = new Map([[becomem, ((matchactiver ? 1 : 2))]]);
         becomem += `${(becomem == String.fromCharCode(85,0) ? (matchactiver ? 1 : 5) : becomem.length)}`;
      }
         videoG.push(videoG.length);
      while ((libswscaleK.length >> (Math.min(Math.abs(4), 5))) < 5) {
         videoG = [2];
         break;
      }
          let preview5 = String.fromCharCode(112,95,54,53,95,119,114,105,116,101,0);
         libswscaleK += "3";
         preview5 = `${preview5.length << (Math.min(preview5.length, 4))}`;
      clubD = `${3 & windm.length}`;
      break;
   }
   for (let a = 0; a < 3; a++) {
       let middleW = 5.0;
       let predictionactive4 = String.fromCharCode(118,101,114,116,101,120,95,49,95,54,0);
       let inouttargetredU = 0;
       let footballfieldc = 3.0;
      let episodesw = inouttargetredU <= 8680938;
      do {
         inouttargetredU <<= Math.min(Math.abs(parseInt(`${middleW}`) ^ 3), 2);
         if (episodesw) {
            break;
         }
      } while (((inouttargetredU + predictionactive4.length) > 1) && episodesw);
      for (let x = 0; x < 1; x++) {
          let chatB = String.fromCharCode(105,95,55,56,95,101,114,112,105,99,0);
          let filedh = false;
          let mbnativeadvancedF = false;
         footballfieldc -= parseFloat(`${1}`);
         chatB = `${(3 >> (Math.min(2, Math.abs((filedh ? 3 : 5)))))}`;
         filedh = mbnativeadvancedF;
      }
         middleW += parseFloat(`${2}`);
      if (4 >= (inouttargetredU | 2) || 2.58 >= (5.51 - footballfieldc)) {
         inouttargetredU *= 2;
      }
      if (2 > (predictionactive4.length >> (Math.min(2, Math.abs(inouttargetredU)))) || 2 > (predictionactive4.length >> (Math.min(3, Math.abs(inouttargetredU))))) {
          let profileactiveM = 2.0;
          let largex = 3.0;
          let w_countO: Array<any> = [728, 248, 645];
         inouttargetredU /= Math.max(3, 3);
         profileactiveM -= w_countO.length;
         largex *= w_countO.length;
      }
      for (let x = 0; x < 2; x++) {
         inouttargetredU >>= Math.min(5, Math.abs(parseInt(`${middleW}`)));
      }
      if (1 > inouttargetredU) {
         middleW -= parseFloat(`${3 ^ inouttargetredU}`);
      }
          let unselectedV = 2;
          let ball7 = String.fromCharCode(116,95,55,56,95,101,118,101,110,0);
         middleW *= parseFloat(`${1 | inouttargetredU}`);
         unselectedV -= unselectedV % (Math.max(ball7.length, 1));
         ball7 = `${unselectedV % (Math.max(3, 5))}`;
      for (let l = 0; l < 1; l++) {
          let scorek = 3.0;
          let sliderf = 4.0;
          let videoD = 4.0;
         footballfieldc += parseFloat(`${3}`);
         scorek += parseInt(`${videoD}`);
         sliderf -= parseFloat(`${parseInt(`${videoD}`) - 2}`);
      }
         predictionactive4 += `${1 << (Math.min(Math.abs(inouttargetredU), 4))}`;
         footballfieldc /= Math.max(parseFloat(`${2 | parseInt(`${footballfieldc}`)}`), 2);
         middleW /= Math.max(1, parseFloat(`${inouttargetredU}`));
      update_alD += `${binddatas5.length % 2}`;
   }
   if (4 > (qaag0.size * 5)) {
       let promotionG = String.fromCharCode(119,97,108,107,95,114,95,49,0);
       let cornerkickH = 4.0;
      if (cornerkickH == 4.19) {
          let giftE: Array<any> = [363, 696, 826];
         promotionG = `${giftE.length}`;
      }
      if (1 == (promotionG.length ^ 4) || 3.44 == (parseFloat(`${promotionG.length}`) - cornerkickH)) {
         promotionG += "1";
      }
         promotionG = "3";
      let defaultpredictionprofilex = promotionG.length >= 9308127;
      do {
          let static_kx = String.fromCharCode(97,99,111,100,101,99,95,53,95,57,56,0);
          let prediction5 = 0;
          let constantsI: Array<any> = [77, 44];
         promotionG += "1";
         static_kx = `${prediction5}`;
         prediction5 -= (static_kx == String.fromCharCode(78,0) ? static_kx.length : prediction5);
         constantsI = [prediction5 + static_kx.length];
         if (defaultpredictionprofilex) {
            break;
         }
      } while (((promotionG.length & 3) > 5 || 1 > (3 | promotionG.length)) && defaultpredictionprofilex);
          let libfabricjniB = String.fromCharCode(117,95,49,54,95,115,107,105,112,115,0);
          let cornerL = false;
          let cancelO = false;
         cornerkickH -= parseFloat(`${3 / (Math.max(1, promotionG.length))}`);
         libfabricjniB += `${(libfabricjniB.length * (cornerL ? 3 : 5))}`;
         cornerL = libfabricjniB.endsWith(`${cornerL}`);
         cancelO = (74 == ((!cornerL ? 74 : libfabricjniB.length) ^ libfabricjniB.length));
      while (5 == (1 + promotionG.length)) {
         cornerkickH /= Math.max(1, parseFloat(`${parseInt(`${cornerkickH}`)}`));
         break;
      }
      binddatas5 = `${(short_sZ == String.fromCharCode(99,0) ? gifgoalbgz.length : short_sZ.length)}`;
   }
   if (2 >= update_alD.length) {
      update_alD += "3";
   }
   while (!recommendation7.startsWith(`${update_alD.length}`)) {
      update_alD += `${gifgoalbgz.length}`;
      break;
   }

    const result = await wwIconscheduleColors.getUserDetails();

       let configureo: Map<any, any> = new Map([[String.fromCharCode(98,105,116,118,101,99,115,95,54,95,53,57,0),String.fromCharCode(113,117,101,114,121,95,110,95,56,50,0)], [String.fromCharCode(98,95,57,52,95,116,97,107,101,111,118,101,114,0),String.fromCharCode(104,105,103,104,108,105,103,116,104,101,100,95,105,95,49,0)], [String.fromCharCode(119,95,53,51,95,112,114,111,118,105,100,105,110,103,0),String.fromCharCode(102,95,57,49,95,97,115,102,99,114,121,112,116,0)]]);
      while (configureo.size > 4) {
          let profileactiveA = String.fromCharCode(113,95,56,57,95,101,109,105,116,0);
          let gmailo: Array<any> = [String.fromCharCode(113,95,54,48,95,117,108,116,114,97,0), String.fromCharCode(104,95,55,55,95,97,98,115,116,114,97,99,116,0)];
          let forwardl: Array<any> = [466, 871];
          let less9: Map<any, any> = new Map([[String.fromCharCode(121,95,51,95,101,120,112,108,105,99,105,116,0),false ], [String.fromCharCode(97,117,100,105,111,103,101,110,95,115,95,53,51,0),false ], [String.fromCharCode(99,97,115,101,95,49,95,56,48,0),false ]]);
          let bdxadsdkb = String.fromCharCode(115,95,49,57,95,99,98,112,104,105,0);
         configureo = new Map([[`${less9.size}`, forwardl.length]]);
         profileactiveA += "2";
         gmailo = [gmailo.length];
         forwardl.push(bdxadsdkb.length / 1);
         less9 = new Map([[`${gmailo.length}`, bdxadsdkb.length << (Math.min(Math.abs(1), 2))]]);
         break;
      }
       let routerN = 4.0;
       let profileinactiveC = 4.0;
         profileinactiveC /= Math.max(parseInt(`${routerN}`) ^ parseInt(`${profileinactiveC}`), 5);
      gifgoalbgz += `${(clubD == String.fromCharCode(104,0) ? clubD.length : qaag0.size)}`;
      qaag0.set(binddatas5, qaag0.size);
       let videojs1 = 0.0;
       let sideE = 3.0;
       let downq = String.fromCharCode(115,117,114,114,111,117,110,100,95,114,95,49,52,0);
      let iconsetting_ = 7477994 <= downq.length;
      do {
          let becomeW: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,99,116,95,106,95,51,54,0),934], [String.fromCharCode(97,100,97,112,116,101,114,115,95,51,95,57,53,0),148]]);
          let libloggerg: Map<any, any> = new Map([[String.fromCharCode(97,95,50,50,95,117,105,111,109,111,118,101,0),157], [String.fromCharCode(114,101,115,105,122,97,98,108,101,95,104,95,54,55,0),166], [String.fromCharCode(118,97,108,117,101,95,55,95,50,50,0),1]]);
          let dropdownm: Map<any, any> = new Map([[String.fromCharCode(98,95,51,55,95,99,111,100,101,99,105,100,0),false ], [String.fromCharCode(116,95,49,55,95,114,111,117,116,101,114,0),true ], [String.fromCharCode(112,95,54,48,95,97,108,105,103,110,109,101,110,116,0),false ]]);
          let helper0 = 5.0;
         downq += `${libloggerg.size ^ 1}`;
         becomeW = new Map([[`${dropdownm.size}`, 3]]);
         libloggerg.set(`${becomeW.size}`, becomeW.size);
         dropdownm.set(`${dropdownm.size}`, becomeW.size);
         helper0 /= Math.max(parseFloat(`${dropdownm.size}`), 5);
         if (iconsetting_) {
            break;
         }
      } while ((downq.length == 2) && iconsetting_);
         downq += `${(downq == String.fromCharCode(87,0) ? downq.length : parseInt(`${videojs1}`))}`;
      let changeX = videojs1 >= 5075850.0;
      do {
         videojs1 /= Math.max(2 & parseInt(`${sideE}`), 3);
         if (changeX) {
            break;
         }
      } while (changeX && (downq.endsWith(`${videojs1}`)));
         videojs1 *= downq.length;
      while (videojs1 == sideE) {
         sideE += (downq == String.fromCharCode(102,0) ? downq.length : parseInt(`${sideE}`));
         break;
      }
       let b_titlez = String.fromCharCode(105,115,115,117,101,100,95,114,95,49,56,0);
      while ((videojs1 / (Math.max(3, b_titlez.length))) <= 2.82 && (videojs1 / 2.82) <= 1.82) {
          let clubj: Map<any, any> = new Map([[String.fromCharCode(98,117,116,116,111,110,115,95,115,95,51,57,0),511], [String.fromCharCode(113,95,55,95,110,100,101,120,0),807]]);
          let iconshareG = String.fromCharCode(118,95,51,56,95,115,101,97,108,98,111,120,0);
         videojs1 += clubj.size;
         clubj = new Map([[iconshareG, iconshareG.length]]);
         break;
      }
         b_titlez += `${parseInt(`${sideE}`)}`;
         downq += `${downq.length - b_titlez.length}`;
      profile6 = `${clubD.length}`;
   for (let p = 0; p < 1; p++) {
      profile6 += `${(gifgoalbgz == String.fromCharCode(83,0) ? gifgoalbgz.length : qaag0.size)}`;
   }
   let fast_ = short_sZ == String.fromCharCode(120,54,111,119,51,98,102,110,0);
   do {
      short_sZ = `${gifgoalbgz.length}`;
      if (fast_) {
         break;
      }
   } while ((i_unlockh.size > 3) && fast_);
      short_sZ += `${predictionbannersharedr / (Math.max(1, 5))}`;
    if (result == null) {

   for (let r = 0; r < 3; r++) {
       let a_titleI = String.fromCharCode(101,95,49,55,95,105,110,102,111,114,109,97,116,105,118,101,0);
       let middlebrightnessk = 3.0;
       let bang0 = 1.0;
       let vietnamw = 0.0;
      for (let n = 0; n < 1; n++) {
         a_titleI = `${parseInt(`${middlebrightnessk}`)}`;
      }
      if (2.18 >= (vietnamw - 2)) {
         bang0 *= parseInt(`${vietnamw}`);
      }
         bang0 += 2 << (Math.min(Math.abs(parseInt(`${middlebrightnessk}`)), 2));
      while (5 > (a_titleI.length - 5) || 4 > (5 ^ a_titleI.length)) {
         bang0 += parseInt(`${vietnamw}`);
         break;
      }
          let roomj: Map<any, any> = new Map([[String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,115,95,57,95,53,48,0),593], [String.fromCharCode(116,121,112,101,111,102,95,100,95,49,51,0),483], [String.fromCharCode(116,120,102,109,95,50,95,50,56,0),227]]);
          let mimoC: Map<any, any> = new Map([[String.fromCharCode(101,109,117,108,97,116,101,100,95,103,95,53,0),368], [String.fromCharCode(122,95,55,54,95,97,117,100,105,101,110,99,101,0),734], [String.fromCharCode(97,95,55,50,95,97,99,111,100,101,99,0),281]]);
          let iconsubssuccess1 = 5.0;
         vietnamw -= parseInt(`${middlebrightnessk}`);
         roomj = new Map([[`${mimoC.size}`, parseInt(`${iconsubssuccess1}`) - 1]]);
         mimoC.set(`${mimoC.size}`, 3);
         iconsubssuccess1 -= mimoC.size;
       let lightM = 2.0;
       let upgradek = 3.0;
         vietnamw += 1;
          let muted2 = String.fromCharCode(102,95,55,52,95,101,118,97,108,117,97,116,111,114,0);
         middlebrightnessk -= parseFloat(`${parseInt(`${vietnamw}`)}`);
         muted2 = `${muted2.length ^ 3}`;
      let mbbidi = 8948829.0 >= bang0;
      do {
          let libfbb: Map<any, any> = new Map([[String.fromCharCode(100,95,54,53,95,101,110,117,109,0),846], [String.fromCharCode(112,108,97,110,101,100,95,52,95,52,52,0),654], [String.fromCharCode(116,95,52,52,95,97,112,112,0),737]]);
          let libcrashsdkv = String.fromCharCode(102,95,53,51,95,97,108,108,111,119,97,110,99,101,0);
         bang0 /= Math.max(2, parseInt(`${bang0}`) & parseInt(`${middlebrightnessk}`));
         libfbb.set(`${libcrashsdkv}`, libcrashsdkv.length);
         if (mbbidi) {
            break;
         }
      } while ((5.21 > (lightM + bang0)) && mbbidi);
       let nativel = String.fromCharCode(109,95,56,50,95,115,101,114,105,97,108,105,122,101,100,0);
      let qnewinterstitial8 = 9227696.0 <= bang0;
      do {
         bang0 += 2;
         if (qnewinterstitial8) {
            break;
         }
      } while ((5.90 == lightM) && qnewinterstitial8);
         upgradek += parseInt(`${lightM}`);
      gifgoalbgz += `${short_sZ.length}`;
   }
       let const_308 = 0.0;
       let changeF = 5;
      while (5 <= changeF) {
          let configr = false;
          let questiconF: Array<any> = [613, 561];
          let kickd = 4.0;
         changeF &= changeF;
         configr = questiconF.includes(kickd);
         questiconF.push(parseInt(`${kickd}`) ^ 2);
         break;
      }
      let yellowredcard0 = const_308 <= 6163717.0;
      do {
         const_308 -= parseFloat(`${parseInt(`${const_308}`)}`);
         if (yellowredcard0) {
            break;
         }
      } while (((4 ^ changeF) < 2) && yellowredcard0);
      let leagueX = 6618337.0 >= const_308;
      do {
         const_308 -= parseFloat(`${1}`);
         if (leagueX) {
            break;
         }
      } while (leagueX && ((const_308 - 2.21) < 5.54 || (parseFloat(`${changeF}`) - const_308) < 2.21));
         changeF <<= Math.min(Math.abs(changeF), 2);
      for (let v = 0; v < 1; v++) {
          let whatsappJ = String.fromCharCode(106,95,56,48,95,114,101,109,111,118,97,108,115,0);
          let short_iyU = String.fromCharCode(97,95,51,57,95,102,114,111,109,98,121,116,101,97,114,114,97,121,0);
          let bannero: Array<any> = [209, 570];
          let previewH = 0.0;
          let pageM = String.fromCharCode(114,101,108,111,99,107,95,111,95,57,52,0);
         const_308 /= Math.max(3, parseFloat(`${bannero.length % 1}`));
         whatsappJ += `${pageM.length >> (Math.min(Math.abs(3), 2))}`;
         short_iyU = `${whatsappJ.length / (Math.max(short_iyU.length, 3))}`;
         bannero.push(pageM.length);
         previewH *= parseFloat(`${whatsappJ.length ^ short_iyU.length}`);
      }
      if (changeF == const_308) {
         changeF /= Math.max(2, changeF);
      }
      profile6 += `${predictionbannersharedr}`;
       let androidT: Array<any> = [438, 364, 139];
       let viewer8 = String.fromCharCode(110,101,103,97,116,101,100,95,121,95,50,48,0);
      let bangt = 6745919 <= androidT.length;
      do {
          let types0 = 2.0;
          let refreshT: Array<any> = [String.fromCharCode(115,117,105,116,101,98,95,116,95,53,48,0), String.fromCharCode(99,95,55,56,95,115,116,121,108,101,100,0)];
          let moviesR = String.fromCharCode(109,95,50,55,95,110,101,105,103,104,98,111,114,105,110,103,0);
         androidT.push(3 + viewer8.length);
         types0 /= Math.max(parseFloat(`${refreshT.length * 2}`), 1);
         refreshT = [moviesR.length];
         moviesR += `${refreshT.length * 3}`;
         if (bangt) {
            break;
         }
      } while ((3 == (androidT.length << (Math.min(viewer8.length, 5)))) && bangt);
          let rulesT = String.fromCharCode(99,116,105,109,101,95,121,95,51,53,0);
          let libpangleflippedu: Array<any> = [String.fromCharCode(97,108,116,95,55,95,53,53,0), String.fromCharCode(117,95,57,51,95,117,112,108,111,97,100,0)];
          let sheetd = String.fromCharCode(100,114,105,118,101,110,95,98,95,52,50,0);
         viewer8 = `${libpangleflippedu.length}`;
         rulesT = `${rulesT.length % (Math.max(4, sheetd.length))}`;
         libpangleflippedu = [3];
         sheetd += `${(String.fromCharCode(111,0) == rulesT ? rulesT.length : sheetd.length)}`;
      if ((2 & androidT.length) < 5) {
          let textU = String.fromCharCode(110,95,51,57,95,106,111,117,114,110,97,108,110,97,109,101,0);
          let tickr = 2.0;
         androidT.push(3);
         textU = `${1 % (Math.max(2, parseInt(`${tickr}`)))}`;
         tickr *= parseFloat(`${textU.length ^ 1}`);
      }
      for (let w = 0; w < 2; w++) {
         viewer8 = "1";
      }
         viewer8 = `${(String.fromCharCode(122,0) == viewer8 ? androidT.length : viewer8.length)}`;
      let eventsplashS = androidT.length >= 9104028;
      do {
         androidT = [androidT.length * viewer8.length];
         if (eventsplashS) {
            break;
         }
      } while ((!viewer8.endsWith(`${androidT.length}`)) && eventsplashS);
      short_sZ = `${clubD.length}`;
       let libzeusE = 2.0;
       let ksad2 = String.fromCharCode(119,114,105,116,101,95,54,95,53,57,0);
       let inviteJ: Array<any> = [116, 918, 766];
         ksad2 = `${(ksad2 == String.fromCharCode(109,0) ? inviteJ.length : ksad2.length)}`;
      let libsgcoreW = inviteJ.length <= 7046830;
      do {
         inviteJ = [parseInt(`${libzeusE}`) & 1];
         if (libsgcoreW) {
            break;
         }
      } while (libsgcoreW && (ksad2.length <= 3));
         ksad2 = `${(ksad2 == String.fromCharCode(112,0) ? ksad2.length : inviteJ.length)}`;
      for (let b = 0; b < 3; b++) {
          let fcdaebecbcbafcdfceaaeccfeacdbj = String.fromCharCode(111,110,101,112,97,115,115,95,100,95,54,52,0);
          let over7 = String.fromCharCode(114,97,116,101,99,116,114,108,95,101,95,56,56,0);
         ksad2 = `${over7.length}`;
         fcdaebecbcbafcdfceaaeccfeacdbj = `${fcdaebecbcbafcdfceaaeccfeacdbj.length | fcdaebecbcbafcdfceaaeccfeacdbj.length}`;
         over7 += `${fcdaebecbcbafcdfceaaeccfeacdbj.length % 2}`;
      }
         ksad2 += `${(String.fromCharCode(99,0) == ksad2 ? inviteJ.length : ksad2.length)}`;
      if (3.50 < (libzeusE - parseFloat(`${ksad2.length}`))) {
         ksad2 = `${ksad2.length}`;
      }
      while ((ksad2.length + parseInt(`${libzeusE}`)) <= 3) {
         ksad2 += `${(ksad2 == String.fromCharCode(88,0) ? ksad2.length : parseInt(`${libzeusE}`))}`;
         break;
      }
       let corex = String.fromCharCode(114,111,117,110,100,101,100,110,101,115,115,95,119,95,51,52,0);
       let halfU = String.fromCharCode(122,95,53,53,95,121,99,98,99,114,0);
      if (corex != String.fromCharCode(107,0)) {
          let subsO = String.fromCharCode(100,111,119,110,108,111,97,100,105,110,103,95,102,95,56,57,0);
         halfU += "2";
         subsO = `${2 ^ subsO.length}`;
      }
      short_sZ = `${windm.length & 3}`;
   let darkp = String.fromCharCode(116,50,57,0) == short_sZ;
   do {
      short_sZ = `${(String.fromCharCode(110,0) == gifgoalbgz ? binddatas5.length : gifgoalbgz.length)}`;
      if (darkp) {
         break;
      }
   } while (darkp && (gifgoalbgz == short_sZ));
      profile6 = `${windm.length}`;
      return;
    }

    await dispatch(updateUserAuth(result));

   if (update_alD.startsWith(windm)) {
       let indicatorU = String.fromCharCode(103,111,110,101,95,121,95,53,57,0);
       let time_npQ = true;
      if (indicatorU.length <= 3) {
         time_npQ = (21 < (indicatorU.length ^ (time_npQ ? 21 : indicatorU.length)));
      }
      while (indicatorU.length >= 5) {
         indicatorU = `${((time_npQ ? 5 : 2))}`;
         break;
      }
      let loginW = indicatorU == String.fromCharCode(95,121,118,55,57,101,0);
      do {
         indicatorU = `${(String.fromCharCode(82,0) == indicatorU ? indicatorU.length : (time_npQ ? 1 : 1))}`;
         if (loginW) {
            break;
         }
      } while (loginW && (!time_npQ || 4 < indicatorU.length));
      let with_x5K = time_npQ ? !time_npQ : time_npQ;
      do {
          let iconmorex = 1;
          let appsz: Array<any> = [String.fromCharCode(117,95,50,54,95,97,115,115,111,99,0), String.fromCharCode(115,98,114,101,115,101,114,118,101,95,114,95,56,53,0), String.fromCharCode(102,114,101,113,115,95,107,95,54,51,0)];
          let whitetick3 = String.fromCharCode(105,95,57,56,95,110,101,117,116,114,97,108,0);
         time_npQ = indicatorU.startsWith(`${iconmorex}`);
         iconmorex += 1;
         appsz.push((String.fromCharCode(48,0) == whitetick3 ? whitetick3.length : appsz.length));
         if (with_x5K) {
            break;
         }
      } while (with_x5K && (time_npQ));
          let dacccfaabfbcbadeebddcabacdffdbc: Map<any, any> = new Map([[String.fromCharCode(104,111,114,110,95,100,95,51,54,0),true ], [String.fromCharCode(108,95,53,55,95,109,111,110,111,98,108,97,99,107,0),true ]]);
         indicatorU = "1";
         dacccfaabfbcbadeebddcabacdffdbc.set(`${dacccfaabfbcbadeebddcabacdffdbc.size}`, dacccfaabfbcbadeebddcabacdffdbc.size);
      for (let x = 0; x < 3; x++) {
         time_npQ = !indicatorU.endsWith(`${time_npQ}`);
      }
      windm = "3";
   }
   while (4 <= (1 ^ qaag0.size) && 1 <= (qaag0.size ^ clubD.length)) {
      clubD += "2";
      break;
   }
      gifgoalbgz += "2";
   for (let r = 0; r < 1; r++) {
       let langkeyr = String.fromCharCode(109,97,110,100,101,108,98,114,111,116,95,57,95,54,53,0);
         langkeyr += `${(String.fromCharCode(117,0) == langkeyr ? langkeyr.length : langkeyr.length)}`;
         langkeyr += "1";
      while (!langkeyr.endsWith(langkeyr)) {
         langkeyr += `${(langkeyr == String.fromCharCode(108,0) ? langkeyr.length : langkeyr.length)}`;
         break;
      }
      i_unlockh = new Map([[windm, searchbarO.length]]);
   }
   while ((1.93 * fcdaebecbcbafcdfceaaeccfeacdbL) <= 3.64 && 4 <= (2 * predictionbannersharedr)) {
      predictionbannersharedr ^= 3 - gifgoalbgz.length;
      break;
   }
       let downloadings = 5;
       let user0: Array<any> = [199, 817];
       let details9 = String.fromCharCode(102,105,116,115,95,111,95,52,49,0);
         details9 = `${downloadings | user0.length}`;
         user0.push((details9 == String.fromCharCode(121,0) ? details9.length : downloadings));
          let zoomM = false;
          let abidetectE = String.fromCharCode(99,108,111,115,101,115,111,99,107,101,116,95,49,95,57,56,0);
         user0 = [2];
         zoomM = abidetectE.length > abidetectE.length;
      while ((3 >> (Math.min(4, user0.length))) > 4 && 4 > (user0.length >> (Math.min(Math.abs(3), 1)))) {
         user0 = [details9.length % (Math.max(7, user0.length))];
         break;
      }
      for (let l = 0; l < 3; l++) {
         downloadings >>= Math.min(1, Math.abs(3));
      }
         user0.push(details9.length);
         user0 = [user0.length];
          let graphicsa = String.fromCharCode(115,95,52,55,95,108,111,103,103,105,110,103,0);
          let gemfileq: Array<any> = [942, 218];
          let carouselB: Array<any> = [796, 344, 806];
         details9 += `${gemfileq.length}`;
         graphicsa += `${graphicsa.length << (Math.min(5, carouselB.length))}`;
         gemfileq = [graphicsa.length];
         carouselB = [3];
      let mbjscommon2 = details9.length >= 9505346;
      do {
          let fieldo = String.fromCharCode(98,97,115,101,100,95,109,95,50,52,0);
          let libreactE = String.fromCharCode(119,105,112,101,95,104,95,51,0);
          let imagesL = 3;
          let debugv = String.fromCharCode(101,95,51,57,95,115,101,110,116,101,110,99,101,0);
         details9 += `${details9.length}`;
         fieldo = `${3 << (Math.min(3, libreactE.length))}`;
         libreactE += `${3 * libreactE.length}`;
         imagesL >>= Math.min(Math.abs(1 | libreactE.length), 1);
         debugv = "3";
         if (mbjscommon2) {
            break;
         }
      } while (mbjscommon2 && ((user0.length + details9.length) >= 5));
      binddatas5 = `${parseInt(`${fcdaebecbcbafcdfceaaeccfeacdbL}`) & clubD.length}`;
    return;
  };

  const handleRefresh = async () => {
       let componentregistryr = String.fromCharCode(100,95,55,55,95,112,97,116,104,109,116,117,0);
    let modelsY = String.fromCharCode(108,95,51,48,95,105,100,101,110,116,105,116,105,121,0);
    let showM = String.fromCharCode(109,98,112,114,101,100,95,50,95,49,56,0);
    let containerx = String.fromCharCode(121,95,54,54,95,112,114,101,115,101,110,99,101,115,0);
    let holder3 = 2.0;
    let productW = String.fromCharCode(116,111,100,97,121,115,95,114,95,51,53,0);
    let combine0: Map<any, any> = new Map([[String.fromCharCode(98,101,108,111,110,103,95,108,95,49,52,0),915], [String.fromCharCode(101,110,116,114,121,112,111,105,110,116,95,57,95,57,57,0),865]]);
    let combinedI = 4;
    let guideL = String.fromCharCode(102,111,108,100,101,114,115,95,120,95,51,48,0);
    let tooltipsy: Map<any, any> = new Map([[String.fromCharCode(100,95,55,49,95,99,111,112,121,120,0),942], [String.fromCharCode(118,95,52,50,95,119,114,105,116,101,97,98,108,101,0),619]]);
    let confirmationv = String.fromCharCode(116,111,112,95,103,95,53,52,0);
    let guideD = 4.0;
    let module6: Array<any> = [257, 282];
    let hiadc = String.fromCharCode(100,101,99,111,100,101,114,95,49,95,49,50,0);
    let countdownd = 5;
   if ((modelsY.length + parseInt(`${guideD}`)) < 3 || (guideD + modelsY.length) < 1.94) {
      modelsY += `${parseInt(`${holder3}`)}`;
   }
   let orientationX = containerx == String.fromCharCode(51,119,55,114,118,51,48,0);
   do {
       let lightX = 0.0;
       let mini3 = String.fromCharCode(109,97,116,104,95,54,95,57,0);
       let eighteenJ: Map<any, any> = new Map([[String.fromCharCode(117,95,55,55,95,115,99,114,101,101,110,112,114,101,115,115,111,0),194], [String.fromCharCode(108,95,52,50,95,112,114,111,103,114,101,115,105,118,101,0),969]]);
       let iconsubssuccessu = String.fromCharCode(99,114,111,115,115,102,97,100,105,110,103,95,111,95,54,52,0);
       let watchnowbgx = 1;
          let plashE: Array<any> = [34, 874];
          let malaysiaO = 0;
         eighteenJ = new Map([[`${lightX}`, 3]]);
         plashE = [3 << (Math.min(1, plashE.length))];
         malaysiaO %= Math.max(5, 2);
      for (let i = 0; i < 2; i++) {
         lightX /= Math.max(1 ^ mini3.length, 3);
      }
         watchnowbgx %= Math.max(3, (String.fromCharCode(86,0) == iconsubssuccessu ? mini3.length : iconsubssuccessu.length));
      for (let l = 0; l < 1; l++) {
         lightX /= Math.max(3, iconsubssuccessu.length);
      }
         iconsubssuccessu = `${parseInt(`${lightX}`) % 1}`;
         eighteenJ.set(`${watchnowbgx}`, 1 & watchnowbgx);
      while ((iconsubssuccessu.length / 2) >= 2 || 1.55 >= (lightX - iconsubssuccessu.length)) {
         iconsubssuccessu = `${(String.fromCharCode(88,0) == mini3 ? eighteenJ.size : mini3.length)}`;
         break;
      }
         mini3 = `${(iconsubssuccessu == String.fromCharCode(56,0) ? mini3.length : iconsubssuccessu.length)}`;
         iconsubssuccessu = `${iconsubssuccessu.length % (Math.max(3, 2))}`;
      for (let q = 0; q < 1; q++) {
         watchnowbgx /= Math.max(3, iconsubssuccessu.length);
      }
          let componentregistryp = String.fromCharCode(116,111,103,103,108,101,95,115,95,50,50,0);
         eighteenJ = new Map([[`${eighteenJ.size}`, 2]]);
         componentregistryp = `${componentregistryp.length << (Math.min(Math.abs(3), 3))}`;
      let moduled = 7964368 >= eighteenJ.size;
      do {
         eighteenJ.set(`${iconsubssuccessu}`, eighteenJ.size | 2);
         if (moduled) {
            break;
         }
      } while ((iconsubssuccessu.endsWith(`${eighteenJ.size}`)) && moduled);
       let iconbackwhitej = 0.0;
      while (!iconsubssuccessu.endsWith(`${iconbackwhitej}`)) {
          let adultx = 2;
          let closeG = String.fromCharCode(115,110,111,119,95,51,95,49,48,48,0);
          let catalog4 = String.fromCharCode(117,95,51,51,95,109,99,111,114,101,0);
          let shareW: Array<any> = [383, 155, 456];
         iconbackwhitej += parseFloat(`${closeG.length}`);
         adultx *= 3;
         closeG += `${3 >> (Math.min(2, shareW.length))}`;
         catalog4 += `${adultx}`;
         shareW.push(3);
         break;
      }
          let umeng4: Map<any, any> = new Map([[String.fromCharCode(110,95,52,95,115,101,112,97,114,97,116,101,0),false ], [String.fromCharCode(122,95,54,49,95,115,116,114,117,99,116,117,114,101,115,0),true ], [String.fromCharCode(115,101,108,102,95,121,95,56,54,0),false ]]);
          let pingf = 1.0;
          let backwardd = String.fromCharCode(121,95,56,57,95,116,101,115,116,105,109,103,105,110,116,0);
         iconbackwhitej *= parseFloat(`${2}`);
         umeng4.set(`${pingf}`, 2);
         pingf /= Math.max(1, (parseFloat(`${String.fromCharCode(105,0) == backwardd ? backwardd.length : umeng4.size}`)));
      containerx += `${(productW == String.fromCharCode(97,0) ? productW.length : parseInt(`${guideD}`))}`;
      if (orientationX) {
         break;
      }
   } while (orientationX && (2 <= confirmationv.length || 2 <= containerx.length));
   for (let f = 0; f < 2; f++) {
       let watchm = String.fromCharCode(97,108,112,104,97,110,117,109,95,113,95,49,48,0);
       let static__xO: Array<any> = [String.fromCharCode(121,95,57,48,95,115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,0), String.fromCharCode(107,95,54,95,98,97,115,105,99,97,108,108,121,0), String.fromCharCode(100,111,99,117,109,101,110,116,97,116,105,111,110,95,119,95,57,52,0)];
          let roota = String.fromCharCode(122,95,57,56,95,115,116,114,105,100,105,110,103,0);
         static__xO = [1];
         roota += `${roota.length - 2}`;
       let unreadF = String.fromCharCode(100,111,112,115,95,54,95,52,57,0);
       let mbbidE = String.fromCharCode(113,117,105,110,116,95,56,95,54,0);
         static__xO = [static__xO.length];
         mbbidE = `${watchm.length}`;
      while (1 >= mbbidE.length) {
         mbbidE += "3";
         break;
      }
         unreadF += `${static__xO.length - 2}`;
      modelsY += `${1 >> (Math.min(1, Math.abs(parseInt(`${guideD}`))))}`;
   }
   if (5 > (3 * combine0.size)) {
      containerx = `${tooltipsy.size}`;
   }
   if (5 < (tooltipsy.size / (Math.max(3, 3))) && (tooltipsy.size / (Math.max(1, modelsY.length))) < 3) {
       let librrcI = 0.0;
       let referrerg = 2;
       let screenz = String.fromCharCode(113,95,51,53,95,109,97,114,107,115,0);
         librrcI *= referrerg ^ parseInt(`${librrcI}`);
      for (let z = 0; z < 1; z++) {
         librrcI -= referrerg | parseInt(`${librrcI}`);
      }
       let libcxxcomponentsZ = String.fromCharCode(117,110,115,112,101,99,105,102,105,101,100,95,99,95,51,50,0);
       let libreactperfloggerjniM = String.fromCharCode(113,117,111,116,101,115,95,54,95,49,53,0);
         librrcI += 3;
       let subse: Map<any, any> = new Map([[String.fromCharCode(97,97,99,115,98,114,100,97,116,97,95,55,95,52,50,0),282], [String.fromCharCode(99,109,111,118,95,55,95,54,51,0),150], [String.fromCharCode(102,95,55,49,95,109,101,100,105,97,110,0),87]]);
       let dependenciesB: Map<any, any> = new Map([[String.fromCharCode(101,95,51,55,95,116,114,97,110,115,102,101,114,0),true ], [String.fromCharCode(102,95,53,55,95,99,111,112,121,0),false ]]);
         libcxxcomponentsZ += `${screenz.length ^ 2}`;
         libreactperfloggerjniM += "2";
      for (let j = 0; j < 3; j++) {
         libreactperfloggerjniM += `${libreactperfloggerjniM.length + 3}`;
      }
      if (4 == libcxxcomponentsZ.length) {
         libcxxcomponentsZ = `${referrerg}`;
      }
      modelsY += `${combinedI}`;
   }
      guideL = `${2 + combinedI}`;
       let materialc: Array<any> = [66, 255];
          let nativeext = 1;
          let promotionP = String.fromCharCode(101,95,53,56,95,112,111,108,105,99,101,0);
         materialc = [materialc.length];
         nativeext ^= (String.fromCharCode(66,0) == promotionP ? promotionP.length : nativeext);
      let templateprocessorr = materialc.length >= 8777974;
      do {
          let detailsp = 2.0;
         materialc.push(parseInt(`${detailsp}`) ^ 3);
         if (templateprocessorr) {
            break;
         }
      } while (templateprocessorr && ((materialc.length >> (Math.min(Math.abs(3), 4))) <= 3 && (materialc.length >> (Math.min(4, materialc.length))) <= 3));
         materialc.push(materialc.length << (Math.min(2, materialc.length)));
      productW = "3";
      holder3 += parseInt(`${holder3}`) - combinedI;
      combine0.set(`${guideD}`, parseInt(`${guideD}`) % (Math.max(2, 7)));
      combine0 = new Map([[`${combinedI}`, (String.fromCharCode(55,0) == componentregistryr ? combinedI : componentregistryr.length)]]);
   let umengc = 6619435 >= combine0.size;
   do {
      combine0.set(confirmationv, (String.fromCharCode(66,0) == confirmationv ? module6.length : confirmationv.length));
      if (umengc) {
         break;
      }
   } while ((combine0.get(`${guideD}`) == null) && umengc);
   while (Array.from(combine0.keys()).includes(`${combinedI}`)) {
      combine0.set(productW, combinedI / (Math.max(productW.length, 5)));
      break;
   }
      combinedI %= Math.max(1, 2 | combinedI);
      productW += `${2 << (Math.min(4, Math.abs(combinedI)))}`;

    setRefreshing(true);

   for (let z = 0; z < 1; z++) {
      tooltipsy = new Map([[`${tooltipsy.size}`, tooltipsy.size]]);
   }
      guideD -= combinedI;
   if (componentregistryr == String.fromCharCode(119,0)) {
      showM += `${combinedI << (Math.min(modelsY.length, 4))}`;
   }
   while (3 <= (containerx.length ^ module6.length)) {
       let banners: Array<any> = [717, 264];
       let shirtA = String.fromCharCode(99,97,110,99,101,108,101,100,95,56,95,50,57,0);
       let pagination8: Array<any> = [735, 73, 881];
       let librrce = String.fromCharCode(111,95,54,56,95,119,97,107,101,117,112,0);
          let reward1: Array<any> = [String.fromCharCode(107,95,57,56,95,99,114,99,99,0), String.fromCharCode(115,117,98,108,97,121,101,114,115,95,102,95,54,53,0)];
          let halffieldimageR = String.fromCharCode(98,95,56,48,95,98,105,112,114,101,100,0);
          let baselineq = 4.0;
         librrce = `${shirtA.length / (Math.max(3, 5))}`;
         reward1 = [3];
         halffieldimageR += `${reward1.length}`;
         baselineq -= 1 - halffieldimageR.length;
      if (banners.length <= 3) {
         banners = [librrce.length >> (Math.min(Math.abs(1), 1))];
      }
       let clearK = String.fromCharCode(105,95,57,57,95,100,101,115,105,103,110,0);
      for (let o = 0; o < 1; o++) {
          let attributedstringS = String.fromCharCode(114,101,97,115,115,101,109,98,108,101,114,95,111,95,52,54,0);
          let ballA = 2.0;
          let hooksO: Array<any> = [String.fromCharCode(109,98,99,115,95,54,95,53,50,0), String.fromCharCode(99,111,110,116,114,111,108,108,101,114,95,112,95,54,52,0), String.fromCharCode(115,95,55,51,95,109,98,104,115,0)];
          let analytic7: Map<any, any> = new Map([[String.fromCharCode(100,95,54,56,95,102,105,116,116,105,110,103,0),String.fromCharCode(119,95,54,54,95,107,95,49,51,0)], [String.fromCharCode(110,111,114,111,117,110,100,95,107,95,56,51,0),String.fromCharCode(99,105,112,104,101,114,95,117,95,50,0)], [String.fromCharCode(118,95,54,56,95,100,101,108,101,116,105,110,103,0),String.fromCharCode(108,95,56,50,95,118,109,97,102,0)]]);
         pagination8.push(shirtA.length);
         attributedstringS = `${analytic7.size}`;
         ballA *= parseFloat(`${hooksO.length}`);
         hooksO.push(parseInt(`${ballA}`));
         analytic7 = new Map([[`${analytic7.size}`, attributedstringS.length]]);
      }
         librrce = `${1 / (Math.max(3, banners.length))}`;
          let rewardvideoL: Map<any, any> = new Map([[String.fromCharCode(97,110,97,110,100,97,110,95,103,95,50,52,0),114], [String.fromCharCode(118,95,49,48,48,95,100,101,97,108,108,111,99,97,116,105,111,110,0),258], [String.fromCharCode(120,95,49,50,95,110,116,101,114,110,97,108,0),116]]);
          let review4 = String.fromCharCode(121,95,54,95,105,110,116,101,114,120,121,0);
          let eyeopen2 = 2;
         pagination8 = [rewardvideoL.size + 2];
         rewardvideoL = new Map([[review4, review4.length]]);
         eyeopen2 ^= 2 - review4.length;
          let videovarl = String.fromCharCode(101,108,108,105,112,116,105,99,95,112,95,53,0);
          let soundb = 1.0;
          let formx = 3;
         banners.push(videovarl.length << (Math.min(1, Math.abs(parseInt(`${soundb}`)))));
         videovarl = `${formx}`;
         soundb /= Math.max(parseFloat(`${3}`), 3);
      while (librrce.length > 5) {
         librrce += `${pagination8.length & librrce.length}`;
         break;
      }
          let catagoryj = String.fromCharCode(115,107,105,112,105,110,116,114,97,95,117,95,52,51,0);
          let dialogi: Array<any> = [782, 862];
          let temp7 = String.fromCharCode(107,95,52,53,95,114,116,108,0);
         banners.push(3);
         catagoryj += `${1 ^ dialogi.length}`;
         dialogi.push(temp7.length << (Math.min(Math.abs(2), 5)));
         temp7 += `${catagoryj.length}`;
         shirtA = `${banners.length << (Math.min(Math.abs(3), 2))}`;
      for (let i = 0; i < 3; i++) {
         clearK = `${clearK.length - banners.length}`;
      }
      for (let i = 0; i < 3; i++) {
         clearK = `${shirtA.length << (Math.min(Math.abs(1), 1))}`;
      }
      module6.push(containerx.length + modelsY.length);
      break;
   }
      showM = `${guideL.length * 2}`;
   if (showM.length >= 1) {
      confirmationv += "3";
   }
      guideL += `${confirmationv.length}`;
   let macauJ = confirmationv == String.fromCharCode(121,108,102,50,119,97,0);
   do {
       let submitV: Array<any> = [18, 900];
       let iconnewssharew = String.fromCharCode(107,102,114,109,95,99,95,53,57,0);
       let previewv = 1.0;
       let disconnectedlogo0: Map<any, any> = new Map([[String.fromCharCode(118,95,49,51,95,99,111,110,102,105,103,117,114,101,114,0),true ], [String.fromCharCode(118,116,101,110,99,95,108,95,54,48,0),true ], [String.fromCharCode(108,95,50,51,95,99,111,117,110,116,114,105,101,115,0),true ]]);
          let iconeditT = false;
          let libswresampleM = 4;
          let transferR = String.fromCharCode(111,118,101,114,95,102,95,50,0);
         disconnectedlogo0 = new Map([[`${disconnectedlogo0.size}`, 3]]);
         iconeditT = 1 <= transferR.length;
         libswresampleM += (3 >> (Math.min(1, Math.abs((iconeditT ? 4 : 1)))));
         transferR = "1";
       let release_w_4 = String.fromCharCode(101,95,57,55,95,112,116,105,111,110,115,0);
          let cast3 = String.fromCharCode(103,95,51,57,95,97,108,105,103,110,109,101,110,116,0);
         previewv -= 2;
         cast3 += `${cast3.length & 1}`;
      for (let n = 0; n < 3; n++) {
         disconnectedlogo0 = new Map([[`${previewv}`, (String.fromCharCode(73,0) == release_w_4 ? release_w_4.length : parseInt(`${previewv}`))]]);
      }
      if (iconnewssharew.length <= 5) {
         iconnewssharew = `${iconnewssharew.length & 1}`;
      }
      let downloaderI = submitV.length <= 9809765;
      do {
         submitV.push(disconnectedlogo0.size * release_w_4.length);
         if (downloaderI) {
            break;
         }
      } while (downloaderI && (5 == (5 >> (Math.min(4, submitV.length)))));
         disconnectedlogo0 = new Map([[`${disconnectedlogo0.size}`, 3]]);
          let s_managerw = String.fromCharCode(115,97,103,97,95,57,95,56,55,0);
          let backicond = 2.0;
         disconnectedlogo0.set(s_managerw, 3 * iconnewssharew.length);
         s_managerw += `${parseInt(`${backicond}`) & 1}`;
         backicond -= 2;
          let review7 = 3.0;
          let events = String.fromCharCode(104,95,57,54,95,114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,0);
         iconnewssharew = `${release_w_4.length | parseInt(`${previewv}`)}`;
         review7 /= Math.max(parseFloat(`${events.length << (Math.min(3, Math.abs(parseInt(`${review7}`))))}`), 5);
         events = `${events.length & 3}`;
       let predictionactiveD: Array<any> = [899, 499, 676];
       let sharemodalG = 3;
       let gemfileC = 4;
         disconnectedlogo0.set(`${release_w_4}`, 1);
      confirmationv += `${(productW == String.fromCharCode(87,0) ? module6.length : productW.length)}`;
      if (macauJ) {
         break;
      }
   } while (macauJ && ((tooltipsy.size & 5) < 5 && 5 < (confirmationv.length & tooltipsy.size)));
   if (!showM.endsWith(`${guideL.length}`)) {
      showM += `${parseInt(`${guideD}`) | 1}`;
   }
   for (let a = 0; a < 1; a++) {
      containerx = `${productW.length}`;
   }
   for (let f = 0; f < 3; f++) {
      confirmationv += "2";
   }
   for (let f = 0; f < 1; f++) {
      showM += `${3 / (Math.max(5, modelsY.length))}`;
   }
   while (3 < (3 & module6.length)) {
       let logousere = 0.0;
       let bootsplashg = true;
       let scrollviewP: Array<any> = [792, 305, 567];
       let filterp = String.fromCharCode(112,105,99,107,101,114,115,95,99,95,55,49,0);
       let heji9 = String.fromCharCode(102,117,116,101,120,95,53,95,57,53,0);
          let dycreatorm = 1.0;
         scrollviewP.push(heji9.length & 2);
         dycreatorm *= parseFloat(`${parseInt(`${dycreatorm}`) ^ parseInt(`${dycreatorm}`)}`);
       let stringsQ = true;
      if (scrollviewP.length > 5) {
         scrollviewP = [filterp.length];
      }
          let basei = String.fromCharCode(110,95,54,51,0);
          let fcdaebecbcbafcdfceaaeccfeacdbj = String.fromCharCode(119,95,53,95,109,117,116,97,116,101,0);
          let tempY = String.fromCharCode(102,95,50,54,95,112,110,105,101,108,115,97,100,100,0);
         stringsQ = basei.length == heji9.length;
         basei += `${fcdaebecbcbafcdfceaaeccfeacdbj.length - tempY.length}`;
         fcdaebecbcbafcdfceaaeccfeacdbj += `${(fcdaebecbcbafcdfceaaeccfeacdbj == String.fromCharCode(67,0) ? tempY.length : fcdaebecbcbafcdfceaaeccfeacdbj.length)}`;
         logousere *= (String.fromCharCode(71,0) == filterp ? filterp.length : (stringsQ ? 4 : 5));
         stringsQ = scrollviewP.length == filterp.length;
       let orange1 = 4.0;
      for (let o = 0; o < 2; o++) {
         bootsplashg = !bootsplashg;
      }
      let pauseZ = String.fromCharCode(118,107,115,0) == heji9;
      do {
         heji9 += `${3 << (Math.min(Math.abs(parseInt(`${orange1}`)), 4))}`;
         if (pauseZ) {
            break;
         }
      } while ((4 <= (5 * heji9.length)) && pauseZ);
      for (let f = 0; f < 3; f++) {
         filterp += `${parseInt(`${orange1}`) % 2}`;
      }
      for (let c = 0; c < 1; c++) {
          let photoM: Map<any, any> = new Map([[String.fromCharCode(114,95,54,50,95,115,109,97,108,108,101,115,116,0),true ], [String.fromCharCode(115,117,109,109,95,121,95,49,55,0),true ]]);
          let libfb9 = false;
          let downloadedP = String.fromCharCode(112,101,110,100,105,110,103,115,95,116,95,50,53,0);
          let middlebrightnessb: Map<any, any> = new Map([[String.fromCharCode(100,105,102,102,115,95,97,95,50,49,0),560], [String.fromCharCode(113,105,97,110,95,114,95,49,51,0),762], [String.fromCharCode(116,95,51,48,95,112,108,117,114,97,108,105,122,101,100,0),540]]);
         bootsplashg = (((stringsQ ? 23 : heji9.length) ^ heji9.length) <= 23);
         photoM = new Map([[`${photoM.size}`, (photoM.size * (libfb9 ? 4 : 4))]]);
         libfb9 = photoM.size <= middlebrightnessb.size;
         downloadedP = `${downloadedP.length}`;
         middlebrightnessb = new Map([[`${middlebrightnessb.size}`, middlebrightnessb.size ^ 3]]);
      }
         stringsQ = heji9 == String.fromCharCode(48,0);
         orange1 -= filterp.length - heji9.length;
      let shirtc = logousere <= 4939258.0;
      do {
         logousere /= Math.max(parseInt(`${logousere}`) | scrollviewP.length, 3);
         if (shirtc) {
            break;
         }
      } while (shirtc && (!stringsQ));
      for (let m = 0; m < 3; m++) {
          let expiredq = true;
          let volumeB = 2.0;
         heji9 = "2";
         expiredq = volumeB > 94.76;
         volumeB += (parseInt(`${volumeB}`) | (expiredq ? 5 : 2));
      }
      module6 = [2 & parseInt(`${logousere}`)];
      break;
   }
   for (let z = 0; z < 1; z++) {
      module6.push((containerx == String.fromCharCode(78,0) ? containerx.length : confirmationv.length));
   }
    await refreshUserState();

   let anytimey = 5100242 >= containerx.length;
   do {
       let iconuserX = 3.0;
       let teamdetailsbga = false;
       let listF = String.fromCharCode(99,104,97,110,110,101,108,95,118,95,55,55,0);
       let detail0 = 4.0;
         teamdetailsbga = listF.endsWith(`${teamdetailsbga}`);
      let libimagepipelinez = teamdetailsbga ? !teamdetailsbga : teamdetailsbga;
      do {
         teamdetailsbga = !teamdetailsbga && listF.length > 53;
         if (libimagepipelinez) {
            break;
         }
      } while (libimagepipelinez && (5 > listF.length || !teamdetailsbga));
         teamdetailsbga = listF == String.fromCharCode(119,0);
         iconuserX /= Math.max(5, parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${iconuserX}`)), 3))}`));
          let telemetry_: Map<any, any> = new Map([[String.fromCharCode(109,95,54,55,95,116,111,111,116,105,112,0),String.fromCharCode(114,95,49,52,95,118,112,99,99,0)], [String.fromCharCode(110,95,53,48,95,99,112,108,115,99,97,108,101,115,0),String.fromCharCode(118,97,108,105,100,97,116,101,95,119,95,56,52,0)], [String.fromCharCode(97,118,100,99,116,95,100,95,56,50,0),String.fromCharCode(99,117,98,101,95,98,95,52,56,0)]]);
         listF += `${(parseInt(`${iconuserX}`) - (teamdetailsbga ? 4 : 1))}`;
         telemetry_ = new Map([[`${telemetry_.size}`, telemetry_.size & telemetry_.size]]);
      let librrcE = detail0 >= 9395225.0;
      do {
         detail0 *= listF.length;
         if (librrcE) {
            break;
         }
      } while (librrcE && (1 < (listF.length & 4) && (listF.length * parseInt(`${detail0}`)) < 4));
      let subs8 = teamdetailsbga ? !teamdetailsbga : teamdetailsbga;
      do {
          let frame_64b = String.fromCharCode(117,110,98,111,110,100,101,100,95,117,95,52,49,0);
          let defaultfootballbge: Map<any, any> = new Map([[String.fromCharCode(119,95,49,95,110,101,115,116,101,100,0),false ], [String.fromCharCode(106,95,53,53,95,97,117,116,104,114,111,114,105,122,97,116,105,111,110,0),false ], [String.fromCharCode(114,95,55,54,95,115,116,101,110,99,105,108,0),false ]]);
         teamdetailsbga = !listF.endsWith(`${teamdetailsbga}`);
         frame_64b += `${frame_64b.length * defaultfootballbge.size}`;
         defaultfootballbge.set(frame_64b, 2 | frame_64b.length);
         if (subs8) {
            break;
         }
      } while ((listF.length <= 3) && subs8);
       let emptyA: Array<any> = [844, 471, 741];
      containerx += `${confirmationv.length}`;
      if (anytimey) {
         break;
      }
   } while ((1 <= (containerx.length << (Math.min(Math.abs(5), 1)))) && anytimey);
   while (hiadc.startsWith(`${confirmationv.length}`)) {
      hiadc = `${productW.length}`;
      break;
   }
      tooltipsy.set(showM, hiadc.length);
       let fastforwardt = 5.0;
       let castingj = String.fromCharCode(115,121,109,98,111,108,105,122,101,95,107,95,54,0);
      let clockw = 9704372.0 <= fastforwardt;
      do {
         fastforwardt *= parseFloat(`${parseInt(`${fastforwardt}`) % (Math.max(2, 8))}`);
         if (clockw) {
            break;
         }
      } while ((castingj.includes(`${fastforwardt}`)) && clockw);
       let tooltipsW = 1;
       let sliderG = 2;
      let thumbnailQ = tooltipsW <= 7437419;
      do {
         tooltipsW %= Math.max(tooltipsW / 3, 5);
         if (thumbnailQ) {
            break;
         }
      } while ((!castingj.includes(`${tooltipsW}`)) && thumbnailQ);
      for (let v = 0; v < 2; v++) {
         tooltipsW /= Math.max(parseInt(`${fastforwardt}`), 4);
      }
          let langkeyv = String.fromCharCode(112,114,101,115,101,110,116,97,98,108,101,95,50,95,57,52,0);
         tooltipsW += 3;
         langkeyv += `${2 & langkeyv.length}`;
      for (let j = 0; j < 1; j++) {
         tooltipsW &= sliderG + castingj.length;
      }
      hiadc = `${confirmationv.length - 3}`;
       let vietnamg = 3.0;
      let encryptW = 6412010.0 <= vietnamg;
      do {
          let hooks0 = String.fromCharCode(102,95,50,51,95,116,114,101,101,99,111,100,101,114,0);
          let dropdowng = 2;
          let ewarded3 = false;
          let vipsportS = 5.0;
         vietnamg -= (parseFloat(`${hooks0 == String.fromCharCode(77,0) ? (ewarded3 ? 2 : 3) : hooks0.length}`));
         dropdowng ^= 3;
         ewarded3 = dropdowng > parseInt(`${vipsportS}`);
         vipsportS -= dropdowng;
         if (encryptW) {
            break;
         }
      } while (encryptW && ((5.54 / (Math.max(2, vietnamg))) <= 4.29));
      let y_imageh = 5312410.0 >= vietnamg;
      do {
          let memberr = String.fromCharCode(114,101,115,112,95,106,95,56,56,0);
          let crosse = 3;
          let thumbnaild = 0.0;
          let profileinactive9 = String.fromCharCode(107,95,53,52,95,115,105,109,112,108,105,102,105,101,100,0);
          let animationN = true;
         vietnamg -= (parseFloat(`${profileinactive9 == String.fromCharCode(74,0) ? (animationN ? 2 : 1) : profileinactive9.length}`));
         memberr += "3";
         crosse /= Math.max(memberr.length + crosse, 1);
         thumbnaild /= Math.max(1, crosse - 3);
         animationN = thumbnaild < 15.17;
         if (y_imageh) {
            break;
         }
      } while (y_imageh && (vietnamg > vietnamg));
      while (2.16 > vietnamg) {
         vietnamg /= Math.max(1, parseFloat(`${2}`));
         break;
      }
      componentregistryr = `${(String.fromCharCode(84,0) == componentregistryr ? componentregistryr.length : hiadc.length)}`;
      tooltipsy.set(productW, module6.length);
   for (let r = 0; r < 3; r++) {
      guideL += `${tooltipsy.size * 2}`;
   }
       let shootyesgoalB = true;
       let kcopy_22h = false;
       let zhuboO = String.fromCharCode(101,95,50,53,95,104,97,100,97,109,97,114,100,0);
         shootyesgoalB = (shootyesgoalB ? !kcopy_22h : shootyesgoalB);
      for (let o = 0; o < 2; o++) {
         kcopy_22h = zhuboO.endsWith(`${kcopy_22h}`);
      }
      while (!kcopy_22h) {
         kcopy_22h = !shootyesgoalB;
         break;
      }
      let modules3 = shootyesgoalB ? !shootyesgoalB : shootyesgoalB;
      do {
          let sellP = true;
          let episodesV = false;
          let watchq: Array<any> = [614, 126];
          let verticaly = String.fromCharCode(103,114,101,97,116,101,115,116,95,57,95,50,56,0);
         shootyesgoalB = (!shootyesgoalB ? !kcopy_22h : shootyesgoalB);
         sellP = (verticaly.length + watchq.length) < 64;
         episodesV = watchq.length >= 77;
         verticaly = `${((sellP ? 4 : 5) - 2)}`;
         if (modules3) {
            break;
         }
      } while ((!kcopy_22h || !shootyesgoalB) && modules3);
      for (let s = 0; s < 3; s++) {
          let libflipperZ = String.fromCharCode(101,95,50,53,95,115,101,116,116,108,105,110,103,0);
          let memberA = 2;
          let gpayS = String.fromCharCode(104,95,54,51,95,116,117,110,110,101,108,105,110,103,0);
         zhuboO = `${gpayS.length / (Math.max(zhuboO.length, 10))}`;
         libflipperZ += "2";
         memberA += libflipperZ.length & 3;
         gpayS = "1";
      }
         kcopy_22h = (shootyesgoalB ? !kcopy_22h : !shootyesgoalB);
         shootyesgoalB = !zhuboO.includes(`${kcopy_22h}`);
      let miniZ = zhuboO.length <= 5039351;
      do {
          let nalytics8 = String.fromCharCode(116,101,115,116,95,97,95,57,51,0);
          let greyarrowupA = 4;
         zhuboO += `${((kcopy_22h ? 3 : 5))}`;
         nalytics8 = `${greyarrowupA}`;
         greyarrowupA /= Math.max(greyarrowupA * nalytics8.length, 2);
         if (miniZ) {
            break;
         }
      } while (miniZ && (shootyesgoalB));
         shootyesgoalB = kcopy_22h;
      showM += `${module6.length}`;
   while (2.9 <= holder3) {
      guideD += parseInt(`${guideD}`) / (Math.max(containerx.length, 10));
      break;
   }
   if (confirmationv.length >= containerx.length) {
      containerx = `${showM.length}`;
   }
   for (let e = 0; e < 3; e++) {
      hiadc += `${combinedI}`;
   }
      guideD += combinedI * 3;
      tooltipsy = new Map([[containerx, (productW == String.fromCharCode(69,0) ? containerx.length : productW.length)]]);
      modelsY += `${confirmationv.length}`;
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

  useEffect(() => {
    let date = new Date(Number(userState.user?.userMemberExpired ?? '0') * 1000); 
    
    let year = date.getFullYear();
    let month = date.getMonth() + 1; 
    let day = date.getDate();
    setDisplayedDate(`${year}年${month}月${day}日`);
  }, [userState.user?.userMemberExpired]);

  const onReviewPress = () => {
       let baseliney = 0.0;
    let privilege7 = 3.0;
    let searchbar9: Array<any> = [214, 569];
    let sideZ = String.fromCharCode(116,104,117,110,107,95,101,95,52,52,0);
    let roundk: Array<any> = [413, 315];
    let imagesO = String.fromCharCode(99,95,50,51,95,109,111,100,101,110,97,109,101,0);
    let favoriteD = String.fromCharCode(109,111,99,107,101,100,95,120,95,56,52,0);
    let bggradientn = 2;
    let playercommon7 = String.fromCharCode(100,95,50,53,95,98,98,117,102,0);
    let placeholder_ = 0.0;
    let tnewsshare_ = String.fromCharCode(117,112,116,105,109,101,95,112,95,53,48,0);
    let libimagepipeline3 = String.fromCharCode(99,97,110,100,105,100,97,116,101,115,95,50,95,49,56,0);
    let overlayi = String.fromCharCode(105,95,57,57,95,101,120,116,114,97,99,116,101,100,0);
   let with_m9 = String.fromCharCode(119,118,101,120,105,95,55,95,104,98,0) == favoriteD;
   do {
      favoriteD = `${favoriteD.length}`;
      if (with_m9) {
         break;
      }
   } while (with_m9 && (playercommon7.length > 1));
   if ((searchbar9.length % (Math.max(sideZ.length, 3))) == 2) {
       let short_cvL: Array<any> = [45, 564];
       let refreshS = true;
       let policy3 = 4;
       let umengn: Array<any> = [541, 886];
       let playlists = String.fromCharCode(108,106,112,101,103,95,48,95,49,52,0);
      while (short_cvL.length == 5) {
         short_cvL.push(umengn.length);
         break;
      }
       let configM = String.fromCharCode(110,111,111,112,95,52,95,56,49,0);
      let jingdong_ = String.fromCharCode(97,120,57,0) == configM;
      do {
         configM += `${short_cvL.length}`;
         if (jingdong_) {
            break;
         }
      } while (jingdong_ && (configM.startsWith(`${short_cvL.length}`)));
         refreshS = (policy3 % (Math.max(umengn.length, 5))) > 36;
      let bangy = configM == String.fromCharCode(110,51,110,49,120,120,110,0);
      do {
          let gradle7 = 0.0;
          let constantsB = 1.0;
          let bellX = String.fromCharCode(110,95,56,51,95,109,101,115,115,97,103,101,115,0);
         configM += `${short_cvL.length}`;
         gradle7 /= Math.max(parseFloat(`${parseInt(`${constantsB}`)}`), 1);
         constantsB /= Math.max(1, parseFloat(`${3}`));
         bellX = `${bellX.length * parseInt(`${constantsB}`)}`;
         if (bangy) {
            break;
         }
      } while ((playlists.includes(`${configM.length}`)) && bangy);
          let lessI: Array<any> = [625, 923];
         refreshS = 62 == policy3;
         lessI = [1];
         playlists += `${playlists.length}`;
      let collectiono = refreshS ? !refreshS : refreshS;
      do {
         refreshS = configM == playlists;
         if (collectiono) {
            break;
         }
      } while ((refreshS) && collectiono);
      while (!refreshS) {
         short_cvL.push(((refreshS ? 2 : 1) / (Math.max(1, 4))));
         break;
      }
       let background0 = String.fromCharCode(100,111,99,108,105,115,116,115,95,101,95,56,56,0);
      let twitterJ = short_cvL.length >= 7507140;
      do {
         short_cvL.push(short_cvL.length);
         if (twitterJ) {
            break;
         }
      } while (twitterJ && (!playlists.endsWith(`${short_cvL.length}`)));
         playlists = `${(playlists == String.fromCharCode(97,0) ? policy3 : playlists.length)}`;
          let confirmationp = 5;
          let playQ = String.fromCharCode(107,95,50,53,95,115,116,111,114,105,110,103,0);
         configM = `${(String.fromCharCode(73,0) == playQ ? policy3 : playQ.length)}`;
         confirmationp %= Math.max(confirmationp - 3, 1);
      for (let f = 0; f < 3; f++) {
          let bootsplashl = String.fromCharCode(104,111,114,105,122,95,52,95,53,51,0);
          let ajax8: Array<any> = [516, 71];
          let reviewU = String.fromCharCode(113,95,54,55,95,104,116,108,116,0);
          let iconscheduleX = 0.0;
          let disconnectedlogo6: Array<any> = [354, 167, 472];
         background0 += `${background0.length}`;
         bootsplashl += "1";
         ajax8 = [2];
         reviewU = `${(String.fromCharCode(80,0) == reviewU ? reviewU.length : ajax8.length)}`;
         iconscheduleX -= (String.fromCharCode(90,0) == reviewU ? reviewU.length : ajax8.length);
         disconnectedlogo6 = [2];
      }
         umengn = [3];
      sideZ = `${parseInt(`${privilege7}`)}`;
   }
   for (let y = 0; y < 2; y++) {
       let mountingm = String.fromCharCode(100,110,115,108,97,98,101,108,95,114,95,50,54,0);
       let datao: Map<any, any> = new Map([[String.fromCharCode(115,119,97,112,112,101,114,95,100,95,54,54,0),321], [String.fromCharCode(109,95,49,55,95,97,99,116,117,97,108,105,122,101,0),501], [String.fromCharCode(116,95,53,49,95,103,97,116,101,0),583]]);
       let binddatas0 = 0.0;
       let point9 = String.fromCharCode(112,116,111,110,95,104,95,50,56,0);
      while ((parseInt(`${binddatas0}`) - datao.size) <= 3 || (datao.size - parseInt(`${binddatas0}`)) <= 3) {
         binddatas0 += parseFloat(`${1 % (Math.max(10, datao.size))}`);
         break;
      }
          let buttonq = String.fromCharCode(103,108,111,98,97,108,108,121,95,116,95,53,51,0);
          let redirectz: Map<any, any> = new Map([[String.fromCharCode(108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,95,109,95,53,53,0),346], [String.fromCharCode(101,100,105,97,95,113,95,52,52,0),674]]);
         mountingm += `${redirectz.size}`;
         buttonq = "2";
         redirectz = new Map([[buttonq, (buttonq == String.fromCharCode(79,0) ? buttonq.length : buttonq.length)]]);
         datao = new Map([[`${datao.size}`, parseInt(`${binddatas0}`) % (Math.max(7, datao.size))]]);
      let fastR = 8014566 <= datao.size;
      do {
         datao.set(point9, (String.fromCharCode(95,0) == point9 ? point9.length : datao.size));
         if (fastR) {
            break;
         }
      } while (fastR && ((mountingm.length - datao.size) > 2 || 1 > (mountingm.length - 2)));
         binddatas0 += parseFloat(`${3}`);
         binddatas0 /= Math.max(parseFloat(`${1}`), 5);
      for (let x = 0; x < 3; x++) {
         binddatas0 += parseFloat(`${3}`);
      }
      while ((datao.size + parseInt(`${binddatas0}`)) < 2 || (2.93 + binddatas0) < 2.40) {
         binddatas0 /= Math.max(2, parseFloat(`${1 - point9.length}`));
         break;
      }
      if (3 <= (parseInt(`${binddatas0}`) * point9.length) || 3 <= (point9.length * parseInt(`${binddatas0}`))) {
         binddatas0 += parseFloat(`${mountingm.length - datao.size}`);
      }
      let nativemodulei = point9.length >= 5572968;
      do {
         point9 = `${parseInt(`${binddatas0}`) % (Math.max(point9.length, 3))}`;
         if (nativemodulei) {
            break;
         }
      } while ((2.64 <= binddatas0) && nativemodulei);
         binddatas0 /= Math.max(parseFloat(`${mountingm.length}`), 4);
         binddatas0 += (parseFloat(`${point9 == String.fromCharCode(66,0) ? datao.size : point9.length}`));
      roundk.push(3);
   }
      privilege7 -= bggradientn ^ 1;

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
            {/* <TouchableOpacity onPress={() => dispatch(toggleTheme(!themeReducer.theme))}>
                      {
                          themeReducer.theme
                              ? <LightMode color={icons.iconColor} height={26} width={26} />
                              : <DarkMode color={icons.iconColor}  height={26} width={26} />

                      }
                  </TouchableOpacity> */}
          </View>
          { }
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              if (!wwBodan.isLogin(userState.user)) {
                dispatch(showLoginAction());
                
                
                
              } else {
                navigation.navigate("个人中心");
              }
            }}
          >
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 10,
                flexDirection: "row",
              }}
            >
              {!wwBodan.isLogin(userState.user) ? (
                <ProfileIcon
                  style={{ color: colors.button, width: 18, height: 18 }}
                />
              ) : (
                <FastImage
                  style={{
                    height: 60,
                    width: 60,
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
                {!wwBodan.isLogin(userState.user) && (
                  <>
                    <Text style={{ color: "#ffffff", fontSize: 20 }}>
                      游客您好！
                    </Text>
                    <Text style={{ color: "#ffffff", fontSize: 14 }}>
                      登录可享更多服务
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
                    {/* {userState.userMemberExpired >=
                      userState.userCurrentTimestamp && (
                        <Text style={{ color: colors.yellow, fontSize: 14 }}>
                          VIP会员有效日期至{displayedDate}
                        </Text>
                      )} */}
                  </>
                )}
              </View>

              <View
                style={{
                  justifyContent: "center",
                }}
              >
                {!wwBodan.isLogin(userState.user) && (
                  <MoreArrow
                    width={icons.sizes.l}
                    height={icons.sizes.l}
                    color={colors.muted}
                  />
                )}

                {wwBodan.isLogin(userState.user) && (
                  <EditIcn width={29} height={29} color={colors.muted} />
                )}
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ marginBottom: -30, flex: 3, paddingBottom: 120 }}>
            {Platform.OS === "ios" ||
              (SHOW_ZF_CONST && (
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
                      backgroundColor: "#2d2e30",
                      flex: 1,
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
                      backgroundColor: "#2d2e30",
                      flex: 1,
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
              ))}

            {Platform.OS === "android" && !SHOW_ZF_CONST && (
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
            {/* <ShowMoreButton
              text="播放历史"
              leftIcon={<HistoryIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("播放历史")}
            /> */}
            <ShowMoreButton
              text="我要上传"
              leftIcon={<UploadIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("uploadVideo")}
            />
            <ShowMoreButton
              text="我要反馈"
              leftIcon={<FeedbackIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("反馈")}
            />
            {isInAppReviewAvailable && <ShowMoreButton
              text="评价我们"
              leftIcon={<ReviewIcon style={{ color: colors.button }} />}
              // onPress={() => setShowReview(true)}
              onPress={onReviewPress}
            />}
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
