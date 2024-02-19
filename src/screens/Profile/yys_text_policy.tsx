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
import { useAppDispatch, useAppSelector, useSelector } from "@hooks";
import { yysIconclosewhiteBaiduads } from "@redux";
import ShowMoreButton from "../../components/button/yys_gradle_dice_button";

import {
  CollectionSvg,
  HistorySvg,
  FeedbackSvg,
  SettingsSvg,
  InfoSvg,
  DownloadSvg,
  ProfileSvg,
  MoreArrowSvg,
  VipIconSvg,
  VipArrowSvg,
  AddSvg,
  EditSvg,
} from "@static";

import { useNavigation } from "@react-navigation/native";

import Orientation from "react-native-orientation-locker";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import { yysFloaterIconsubssuccess } from "../../../yys_yellowscoreball_topon";

import {
  hideBottomSheetAction,
  removeScreenAction,
  setShowGuestPurchaseSuccess,
  showLoginAction,
} from "@redux";
import NotificationModal from "../../components/modal/yys_cornershoot_smallsound";
import { updateUserAuth, updateUserReferral } from "@redux";
import ExpiredOverlay from "../../components/modal/yys_style";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DOWNLOAD_FEATURE_ENABLED, SHOW_ZF_CONST, UMENG_CHANNEL } from "@utility";
import FastImage from "../../components/common/yys_alert_backwhite";
import { yysHomeloading } from "@api";
import { yysDefaultlogoBackward } from "../../Sports/global/yys_unlock";
import { BannerContainer } from "../../components/container/yys_whiteanimationlive";
import { yysIconviewer } from "@type";
import { yysConfig } from "@utility";
import { yysPangleCommon } from "../../constants/yys_manifest";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { yysMembership } from "../../api/yys_config";
import yys_giftbutton_footballtrophy from "../../../Umeng/yys_giftbutton_footballtrophy";
import DeviceInfo from "react-native-device-info";
import style from "../../Sports/components/matchDetails/liveChatPage/yys_nbatrophy";
import { VipLoginAlertOverlay } from "../../components/modal/yys_libfile_security";
import { yysAgreement } from "@redux";
import { yysIconplaySuggestion } from "@redux";
import { yysIconstar } from "@models";

function Profile({ navigation, route }: BottomTabScreenProps<any>) {
  const navigator = useNavigation();
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [displayedDate, setDisplayedDate] = useState("");
  const userState = useSelector<yysIconplaySuggestion>('userReducer');
  const appState = useSelector<yysAgreement>('backgroundReducer');
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bannerAd, setBannerAd] = useState<yysIconviewer[]>();

  const toggleOverlay = () => {
       let videovarF = String.fromCharCode(112,105,101,99,101,119,105,115,101,0);
    let historyS = String.fromCharCode(117,110,107,110,111,119,110,0);
    let arrowdownf = 5;
    let combinew = 3.0;
    let predictionbutton3 = true;
    let holderG = String.fromCharCode(99,104,105,114,112,0);
    let china_ = String.fromCharCode(109,97,115,116,101,114,0);
    let hongkongu = String.fromCharCode(99,97,112,97,98,108,101,0);
    let runtimeschedulerb = false;
    let hometeamfieldn = 1.0;
      predictionbutton3 = (historyS.length % (Math.max(9, holderG.length))) < 19;
   while (1 <= (arrowdownf % (Math.max(holderG.length, 8))) || (arrowdownf % (Math.max(4, holderG.length))) <= 1) {
      arrowdownf -= ((predictionbutton3 ? 4 : 3) % (Math.max(china_.length, 5)));
      break;
   }
       let matchO = String.fromCharCode(115,117,105,116,101,0);
       let detail4 = true;
      let cnewssharec = 9517957 >= matchO.length;
      do {
         matchO = `${(3 >> (Math.min(3, Math.abs((detail4 ? 5 : 5)))))}`;
         if (cnewssharec) {
            break;
         }
      } while (cnewssharec && (!detail4));
         matchO += `${((detail4 ? 2 : 3) % (Math.max(matchO.length, 9)))}`;
         detail4 = matchO.length <= 10;
          let libapminsightaL = String.fromCharCode(111,119,110,101,114,115,104,105,112,0);
         detail4 = libapminsightaL.length < 2;
      if (matchO.length < 1 && detail4) {
         detail4 = (((detail4 ? 53 : matchO.length) >> (Math.min(matchO.length, 2))) > 53);
      }
         matchO = `${matchO.length}`;
      hongkongu += `${(1 | (detail4 ? 1 : 1))}`;
   let phone4 = historyS.length >= 8531754;
   do {
       let floatings = 5;
       let iconsettingX = String.fromCharCode(114,101,115,101,116,98,117,102,0);
          let cornerkickZ = false;
         iconsettingX = `${iconsettingX.length % 1}`;
      while (1 <= (iconsettingX.length ^ floatings) || (iconsettingX.length ^ floatings) <= 1) {
         iconsettingX = `${floatings << (Math.min(iconsettingX.length, 3))}`;
         break;
      }
         iconsettingX += `${floatings / (Math.max(2, 6))}`;
          let penaltyshootnogoalN: Map<any, any> = new Map([[String.fromCharCode(116,116,97,103,0),String.fromCharCode(109,111,118,101,0)], [String.fromCharCode(101,115,116,105,109,97,116,111,114,0),String.fromCharCode(119,112,116,104,114,101,97,100,115,0)]]);
         iconsettingX = "2";
         penaltyshootnogoalN.set(`${penaltyshootnogoalN.size}`, penaltyshootnogoalN.size & 3);
       let giftbuttonn: Map<any, any> = new Map([[String.fromCharCode(119,105,110,100,111,119,101,100,0),true ], [String.fromCharCode(116,114,97,110,115,99,116,105,111,110,0),false ], [String.fromCharCode(100,101,115,112,105,108,108,0),false ]]);
      for (let d = 0; d < 1; d++) {
         floatings %= Math.max(2, giftbuttonn.size | 1);
      }
      historyS += `${historyS.length >> (Math.min(2, videovarF.length))}`;
      if (phone4) {
         break;
      }
   } while ((1 > holderG.length) && phone4);
   while (china_.length >= 4) {
       let filterK = 3.0;
         filterK *= parseFloat(`${3}`);
         filterK /= Math.max(1, parseFloat(`${3}`));
         filterK /= Math.max(parseFloat(`${parseInt(`${filterK}`) << (Math.min(4, Math.abs(1)))}`), 1);
      videovarF += `${(String.fromCharCode(114,0) == videovarF ? arrowdownf : videovarF.length)}`;
      break;
   }
      arrowdownf -= (String.fromCharCode(86,0) == historyS ? holderG.length : historyS.length);
      predictionbutton3 = 41 > china_.length;
      holderG = `${1 >> (Math.min(Math.abs(parseInt(`${combinew}`)), 5))}`;
      predictionbutton3 = 76 > hongkongu.length;
   for (let m = 0; m < 3; m++) {
      runtimeschedulerb = china_.length < 56;
   }
      runtimeschedulerb = historyS == String.fromCharCode(76,0);
   let tempnodatab = hometeamfieldn <= 9610291.0;
   do {
       let short_2_a = String.fromCharCode(99,111,114,114,101,99,116,105,110,103,0);
       let closeo = String.fromCharCode(108,111,99,107,0);
       let castingy = 0.0;
       let javam = String.fromCharCode(112,108,97,105,110,0);
         closeo += `${javam.length % (Math.max(closeo.length, 3))}`;
      let rncoreK = closeo.length >= 8085042;
      do {
         closeo = `${parseInt(`${castingy}`)}`;
         if (rncoreK) {
            break;
         }
      } while (rncoreK && (short_2_a != String.fromCharCode(81,0)));
         javam = `${closeo.length}`;
      if (closeo.startsWith(`${castingy}`)) {
          let collectionA = 3;
          let iconbellw = String.fromCharCode(98,114,101,97,107,115,0);
          let nalyticsI = 5.0;
          let morer = String.fromCharCode(114,101,99,111,114,100,105,110,103,99,111,110,110,0);
         castingy += parseFloat(`${closeo.length}`);
         collectionA -= 2;
         iconbellw += `${collectionA - 2}`;
         nalyticsI += parseFloat(`${iconbellw.length}`);
         morer += `${parseInt(`${nalyticsI}`)}`;
      }
      while (short_2_a.length > 1) {
         short_2_a += `${javam.length}`;
         break;
      }
      if (3.48 < (castingy / (Math.max(parseFloat(`${javam.length}`), 4)))) {
         castingy *= parseFloat(`${2 | short_2_a.length}`);
      }
         short_2_a = `${javam.length}`;
         short_2_a += `${parseInt(`${castingy}`) & 2}`;
      if ((castingy - 4.51) <= 3.55 && 2 <= (1 | javam.length)) {
          let shareU = 0.0;
          let sliders = 1;
         javam = `${closeo.length | short_2_a.length}`;
         shareU -= 2;
         sliders <<= Math.min(5, Math.abs(parseInt(`${shareU}`) - sliders));
      }
      for (let t = 0; t < 3; t++) {
         short_2_a = `${short_2_a.length % 2}`;
      }
      let iconnewssharek = String.fromCharCode(120,53,100,106,99,121,95,0) == closeo;
      do {
         closeo = `${closeo.length % (Math.max(2, 10))}`;
         if (iconnewssharek) {
            break;
         }
      } while (iconnewssharek && (!closeo.includes(`${short_2_a.length}`)));
         javam += `${closeo.length & javam.length}`;
      hometeamfieldn *= parseFloat(`${3}`);
      if (tempnodatab) {
         break;
      }
   } while (tempnodatab && (holderG.startsWith(`${hometeamfieldn}`)));
   let plash0 = predictionbutton3 ? !predictionbutton3 : predictionbutton3;
   do {
      predictionbutton3 = !historyS.startsWith(`${combinew}`);
      if (plash0) {
         break;
      }
   } while ((predictionbutton3) && plash0);
   while (historyS.startsWith(`${runtimeschedulerb}`)) {
      runtimeschedulerb = hongkongu.length == 68 && combinew == 14.30;
      break;
   }
   while (4 < china_.length) {
       let predictionbuttonY = String.fromCharCode(100,105,109,115,0);
       let paginationP = String.fromCharCode(97,108,116,101,114,0);
       let matchK = String.fromCharCode(109,98,99,109,112,0);
       let hookJ = String.fromCharCode(117,110,112,105,110,110,101,100,0);
       let iconarrowrightwhiteZ = String.fromCharCode(115,105,109,117,108,116,97,110,101,111,117,115,0);
      if (matchK.startsWith(predictionbuttonY)) {
         predictionbuttonY += "2";
      }
         predictionbuttonY += `${predictionbuttonY.length}`;
         paginationP = `${hookJ.length}`;
         predictionbuttonY += `${predictionbuttonY.length << (Math.min(Math.abs(3), 4))}`;
       let libreactperfloggerjnin = String.fromCharCode(114,101,111,114,100,101,114,105,110,103,0);
       let modityC = String.fromCharCode(109,97,116,99,104,105,110,102,111,0);
          let iconbackwhiteS = String.fromCharCode(113,117,105,99,107,0);
         matchK = `${paginationP.length}`;
         iconbackwhiteS += "3";
          let episodesW: Array<any> = [602, 853];
         paginationP += `${3 & iconarrowrightwhiteZ.length}`;
         episodesW = [episodesW.length << (Math.min(1, episodesW.length))];
         hookJ += `${paginationP.length * 1}`;
          let overlay4: Map<any, any> = new Map([[String.fromCharCode(117,110,101,115,99,97,112,101,0),160], [String.fromCharCode(116,119,105,99,101,0),224]]);
         modityC = `${predictionbuttonY.length}`;
         overlay4 = new Map([[`${overlay4.size}`, overlay4.size]]);
      for (let h = 0; h < 1; h++) {
         modityC = `${2 >> (Math.min(2, hookJ.length))}`;
      }
         modityC += `${3 / (Math.max(9, libreactperfloggerjnin.length))}`;
         paginationP = `${(matchK == String.fromCharCode(71,0) ? matchK.length : iconarrowrightwhiteZ.length)}`;
      let hovern = hookJ.length >= 7139780;
      do {
         hookJ = `${iconarrowrightwhiteZ.length}`;
         if (hovern) {
            break;
         }
      } while ((matchK.length < hookJ.length) && hovern);
      if (iconarrowrightwhiteZ.length == 3) {
         hookJ = `${2 + iconarrowrightwhiteZ.length}`;
      }
         matchK += `${matchK.length ^ hookJ.length}`;
      china_ = `${2 | china_.length}`;
      break;
   }
       let malaysia4: Map<any, any> = new Map([[String.fromCharCode(121,97,98,101,0),String.fromCharCode(118,105,115,105,98,105,116,121,0)], [String.fromCharCode(104,116,109,108,109,97,114,107,117,112,0),String.fromCharCode(97,117,120,0)], [String.fromCharCode(108,105,98,97,118,100,101,118,105,99,101,0),String.fromCharCode(100,111,119,110,114,105,103,104,116,0)]]);
       let mathy = false;
          let privatechatbgL: Array<any> = [390, 446, 236];
          let halfP = String.fromCharCode(109,97,116,114,111,115,107,97,0);
         mathy = String.fromCharCode(119,0) == halfP;
         privatechatbgL.push(privatechatbgL.length + 3);
         halfP += `${3 * privatechatbgL.length}`;
      for (let w = 0; w < 3; w++) {
          let iconnointernetk = String.fromCharCode(115,101,101,107,105,110,103,0);
         mathy = (89 == ((mathy ? 89 : iconnointernetk.length) + iconnointernetk.length));
      }
       let sentryF = String.fromCharCode(116,119,105,110,118,113,0);
      for (let l = 0; l < 3; l++) {
         mathy = malaysia4.size > 17 || mathy;
      }
         sentryF = `${(malaysia4.size ^ (mathy ? 2 : 2))}`;
         malaysia4 = new Map([[`${malaysia4.size}`, malaysia4.size]]);
      holderG += `${arrowdownf}`;
       let iconuserT = String.fromCharCode(114,101,109,111,118,105,110,103,0);
       let f_positionl = 3.0;
       let thumbnailK = String.fromCharCode(98,108,111,99,107,105,101,115,0);
      for (let f = 0; f < 2; f++) {
         iconuserT = `${thumbnailK.length}`;
      }
      while (parseFloat(`${thumbnailK.length}`) == f_positionl) {
         f_positionl *= parseFloat(`${3}`);
         break;
      }
      for (let n = 0; n < 3; n++) {
          let iconrefreshe = 3.0;
          let libjsinspectorT = String.fromCharCode(97,112,110,115,0);
         f_positionl *= parseFloat(`${1}`);
         iconrefreshe -= parseFloat(`${parseInt(`${iconrefreshe}`) | libjsinspectorT.length}`);
         libjsinspectorT += `${parseInt(`${iconrefreshe}`)}`;
      }
          let robotoN = String.fromCharCode(111,112,116,105,111,110,97,108,0);
         thumbnailK = `${parseInt(`${f_positionl}`)}`;
         robotoN += `${(robotoN == String.fromCharCode(122,0) ? robotoN.length : robotoN.length)}`;
         f_positionl += parseFloat(`${thumbnailK.length}`);
      for (let s = 0; s < 3; s++) {
         iconuserT = `${3 - iconuserT.length}`;
      }
          let entryv = true;
         f_positionl += parseFloat(`${1 & thumbnailK.length}`);
      let submitw = f_positionl >= 9149240.0;
      do {
         f_positionl += (parseFloat(`${iconuserT == String.fromCharCode(88,0) ? parseInt(`${f_positionl}`) : iconuserT.length}`));
         if (submitw) {
            break;
         }
      } while (submitw && ((f_positionl / 1.0) >= 2.47));
      if (2 == iconuserT.length) {
         iconuserT += `${1 & thumbnailK.length}`;
      }
      videovarF += `${((runtimeschedulerb ? 5 : 5) + parseInt(`${hometeamfieldn}`))}`;
       let countryd: Map<any, any> = new Map([[String.fromCharCode(118,112,120,101,110,99,0),214], [String.fromCharCode(104,105,115,116,111,103,114,97,109,115,0),435]]);
       let common0 = String.fromCharCode(104,111,114,105,122,0);
       let activity6 = String.fromCharCode(97,114,109,118,0);
         common0 += "1";
      for (let g = 0; g < 1; g++) {
         activity6 = `${(String.fromCharCode(83,0) == activity6 ? common0.length : activity6.length)}`;
      }
      let chartJ = String.fromCharCode(103,103,51,106,102,48,100,109,0) == activity6;
      do {
          let ewarded0 = 3.0;
          let stations1: Array<any> = [154, 367];
          let rewardU = 5.0;
          let unread9 = 3.0;
          let mbridget = String.fromCharCode(118,99,97,114,100,0);
         activity6 += `${common0.length}`;
         ewarded0 += parseInt(`${unread9}`) - stations1.length;
         stations1.push(parseInt(`${unread9}`) + parseInt(`${ewarded0}`));
         rewardU -= 1 << (Math.min(5, Math.abs(parseInt(`${unread9}`))));
         mbridget += `${parseInt(`${rewardU}`) & parseInt(`${ewarded0}`)}`;
         if (chartJ) {
            break;
         }
      } while (chartJ && (!common0.endsWith(activity6)));
      if (2 == activity6.length) {
         common0 += `${1 | common0.length}`;
      }
          let auto_lG = String.fromCharCode(98,108,111,99,107,100,115,112,0);
          let sentry8 = false;
          let bggradientr = 4;
         activity6 += `${2 + auto_lG.length}`;
         auto_lG = "3";
         sentry8 = bggradientr <= 69;
         bggradientr /= Math.max(1 / (Math.max(bggradientr, 10)), 3);
      let hookP = common0 == String.fromCharCode(109,57,104,53,99,0);
      do {
         common0 = `${1 << (Math.min(2, Math.abs(countryd.size)))}`;
         if (hookP) {
            break;
         }
      } while ((1 > activity6.length) && hookP);
      for (let a = 0; a < 1; a++) {
         common0 += "3";
      }
         common0 += `${activity6.length / (Math.max(5, countryd.size))}`;
         countryd.set(`${common0}`, 1 - common0.length);
      hometeamfieldn *= parseFloat(`${arrowdownf % 1}`);

    setIsDialogOpen(!isDialogOpen);
  };

  const refreshUserState = async () => {
       let iconwatchq = String.fromCharCode(117,100,112,0);
    let viewsy: Map<any, any> = new Map([[String.fromCharCode(100,100,99,116,0),388], [String.fromCharCode(112,114,101,112,97,114,105,110,103,0),472], [String.fromCharCode(102,114,101,101,0),74]]);
    let iconschedulev = 2.0;
    let libfollyF: Array<any> = [271, 309, 405];
    let rules7 = 5.0;
    let cornerp: Map<any, any> = new Map([[String.fromCharCode(117,116,102,116,111,0),false ], [String.fromCharCode(100,105,114,0),false ], [String.fromCharCode(114,101,100,117,110,100,97,110,99,121,0),true ]]);
    let buildk = String.fromCharCode(109,99,111,114,101,0);
    let iconuserw = 2.0;
    let yellowanimationlive2 = String.fromCharCode(108,111,119,101,114,0);
    let downarrowm = 5.0;
    let yellow3: Array<any> = [String.fromCharCode(105,111,115,98,117,105,108,100,0), String.fromCharCode(109,121,114,110,100,0), String.fromCharCode(115,117,112,101,114,102,114,97,109,101,0)];
    let privilegem = 2;
    let iconarrowrightr = 0;
    let predictionarrow6 = 3.0;
       let modeI = 3.0;
       let zoomg = String.fromCharCode(99,108,101,97,114,0);
          let awayplayerO = String.fromCharCode(112,114,115,99,116,112,0);
          let tickedh = 3.0;
         zoomg += `${awayplayerO.length & zoomg.length}`;
         awayplayerO = `${3 % (Math.max(8, parseInt(`${tickedh}`)))}`;
         tickedh /= Math.max(1 + parseInt(`${tickedh}`), 3);
      for (let f = 0; f < 2; f++) {
         zoomg = "1";
      }
         modeI /= Math.max(3, zoomg.length);
         zoomg = `${parseInt(`${modeI}`) ^ zoomg.length}`;
      while (2.30 <= (modeI - 4.83)) {
         zoomg = `${3 + zoomg.length}`;
         break;
      }
          let profileinactiveV = true;
         modeI += parseInt(`${modeI}`);
         profileinactiveV = (profileinactiveV ? profileinactiveV : !profileinactiveV);
      libfollyF.push(parseInt(`${rules7}`) + viewsy.size);
   if (yellow3.length == 4) {
       let window_3i = 4.0;
       let telemetryj = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,0);
       let paginationw: Array<any> = [877, 64, 781];
       let fullscreenmaxn = 3.0;
      while (!paginationw.includes(fullscreenmaxn)) {
         fullscreenmaxn *= parseFloat(`${telemetryj.length >> (Math.min(1, paginationw.length))}`);
         break;
      }
      if (telemetryj.length == 4) {
         paginationw = [parseInt(`${window_3i}`)];
      }
      for (let z = 0; z < 3; z++) {
          let detailx = String.fromCharCode(101,108,108,105,103,105,98,108,101,0);
          let iconlogoutf = 3.0;
          let giflivestreamingw: Array<any> = [220, 764, 930];
          let homeloadingx = 1;
          let modulesE = 2.0;
         window_3i /= Math.max(2, parseFloat(`${1}`));
         detailx += `${3 + parseInt(`${iconlogoutf}`)}`;
         iconlogoutf += homeloadingx;
         giflivestreamingw = [parseInt(`${iconlogoutf}`) ^ homeloadingx];
         modulesE /= Math.max(parseFloat(`${3}`), 4);
      }
       let greyarrowupX = String.fromCharCode(120,108,97,98,101,108,104,101,105,103,104,116,0);
       let helperq = String.fromCharCode(101,110,99,111,100,101,100,112,111,105,110,116,0);
         fullscreenmaxn += parseFloat(`${parseInt(`${fullscreenmaxn}`) << (Math.min(Math.abs(1), 3))}`);
         helperq += `${(helperq == String.fromCharCode(73,0) ? helperq.length : parseInt(`${fullscreenmaxn}`))}`;
      for (let u = 0; u < 2; u++) {
         paginationw = [helperq.length];
      }
      let turndown0 = 8161150 >= paginationw.length;
      do {
         paginationw.push(parseInt(`${fullscreenmaxn}`));
         if (turndown0) {
            break;
         }
      } while (turndown0 && (3 < (helperq.length ^ paginationw.length)));
       let watchnowbgJ = true;
       let unread6 = false;
      let mathz = String.fromCharCode(113,119,110,101,110,102,107,56,108,0) == greyarrowupX;
      do {
         greyarrowupX = `${telemetryj.length}`;
         if (mathz) {
            break;
         }
      } while (mathz && (greyarrowupX == String.fromCharCode(105,0) || helperq != String.fromCharCode(80,0)));
      if (window_3i < 4.10 || (4.10 * window_3i) < 1.13) {
         window_3i /= Math.max(5, (parseFloat(`${(unread6 ? 3 : 1) * greyarrowupX.length}`)));
      }
      while ((parseInt(`${fullscreenmaxn}`) - greyarrowupX.length) < 5 && 5 < (greyarrowupX.length >> (Math.min(Math.abs(5), 2)))) {
         greyarrowupX += `${((watchnowbgJ ? 3 : 2) % 2)}`;
         break;
      }
      privilegem ^= 1;
   }
      buildk += `${1 & parseInt(`${iconuserw}`)}`;
      viewsy.set(`${yellowanimationlive2}`, viewsy.size);
   let appsq = 7251757.0 >= iconuserw;
   do {
      iconuserw /= Math.max(3, parseInt(`${rules7}`) / 3);
      if (appsq) {
         break;
      }
   } while ((!libfollyF.includes(iconuserw)) && appsq);
   for (let x = 0; x < 1; x++) {
       let latn7 = String.fromCharCode(100,111,119,110,115,97,109,112,108,105,110,103,0);
       let defaultplayerimgk: Array<any> = [552, 469];
       let baidu1: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,116,101,0),332], [String.fromCharCode(114,101,109,97,114,107,0),20], [String.fromCharCode(119,101,98,112,0),632]]);
       let goallogoT: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,105,117,114,101,115,0),623], [String.fromCharCode(102,111,117,110,100,0),206]]);
       let private_ury = 3.0;
          let predictionactiveW: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,97,99,116,105,110,103,0),String.fromCharCode(114,101,118,111,107,97,98,108,101,0)], [String.fromCharCode(110,109,104,100,0),String.fromCharCode(104,114,112,0)]]);
          let modityx = 3;
          let reducern = String.fromCharCode(109,111,110,103,111,0);
         baidu1 = new Map([[`${defaultplayerimgk.length}`, defaultplayerimgk.length]]);
         predictionactiveW.set(reducern, modityx + reducern.length);
         modityx %= Math.max(1, 1 | modityx);
      let mapping2 = goallogoT.size <= 7221530;
      do {
         goallogoT.set(latn7, 2 + latn7.length);
         if (mapping2) {
            break;
         }
      } while (mapping2 && ((latn7.length * 2) < 4));
      for (let g = 0; g < 1; g++) {
          let flagG: Array<any> = [273, 677];
          let libimagepipelineE: Array<any> = [183, 727, 658];
          let yellowB: Map<any, any> = new Map([[String.fromCharCode(116,101,115,115,101,108,97,116,101,0),571], [String.fromCharCode(116,101,120,116,98,111,120,0),595]]);
         goallogoT.set(`${defaultplayerimgk.length}`, defaultplayerimgk.length);
         flagG = [3];
         libimagepipelineE.push(libimagepipelineE.length);
         yellowB = new Map([[`${flagG.length}`, 3]]);
      }
         goallogoT = new Map([[`${baidu1.size}`, baidu1.size]]);
          let mapbufferP: Array<any> = [895, 155];
          let iconnewchatP = String.fromCharCode(100,105,109,101,110,115,105,111,110,0);
         private_ury /= Math.max(parseFloat(`${mapbufferP.length * baidu1.size}`), 5);
         mapbufferP = [iconnewchatP.length];
         iconnewchatP += `${iconnewchatP.length}`;
       let iconlogoutc = 4.0;
         defaultplayerimgk.push(1 << (Math.min(4, Math.abs(parseInt(`${private_ury}`)))));
       let icondefaultthumbnailH = 3.0;
      while ((goallogoT.size ^ latn7.length) <= 3 || (goallogoT.size ^ 3) <= 2) {
          let bangh: Array<any> = [String.fromCharCode(115,116,99,111,0), String.fromCharCode(115,113,108,105,116,101,114,98,117,0), String.fromCharCode(112,111,108,108,101,100,0)];
          let defaultroombgs = String.fromCharCode(115,117,114,101,0);
          let penaltyM = true;
          let gpayb: Array<any> = [580, 331, 765];
         goallogoT.set(latn7, defaultplayerimgk.length);
         bangh.push((bangh.length * (penaltyM ? 5 : 2)));
         defaultroombgs = `${(defaultroombgs == String.fromCharCode(90,0) ? (penaltyM ? 1 : 4) : defaultroombgs.length)}`;
         gpayb = [defaultroombgs.length - 2];
         break;
      }
         defaultplayerimgk = [baidu1.size & 3];
      if (Array.from(baidu1.keys()).includes(`${private_ury}`)) {
         baidu1 = new Map([[`${goallogoT.size}`, goallogoT.size]]);
      }
       let taiwane: Map<any, any> = new Map([[String.fromCharCode(98,97,115,101,103,112,104,0),407], [String.fromCharCode(98,105,100,105,114,0),360]]);
       let pingP: Map<any, any> = new Map([[String.fromCharCode(115,116,97,114,0),656], [String.fromCharCode(114,101,97,100,98,121,116,101,0),697]]);
      if (2.36 >= (icondefaultthumbnailH * iconlogoutc)) {
         icondefaultthumbnailH += 1 % (Math.max(3, parseInt(`${icondefaultthumbnailH}`)));
      }
       let predictionbannershared4: Map<any, any> = new Map([[String.fromCharCode(119,101,98,112,97,103,101,0),289], [String.fromCharCode(115,117,110,114,105,115,101,0),235], [String.fromCharCode(99,114,111,119,100,105,110,0),247]]);
      let utilsg = icondefaultthumbnailH >= 9407974.0;
      do {
         icondefaultthumbnailH *= parseInt(`${icondefaultthumbnailH}`) - 2;
         if (utilsg) {
            break;
         }
      } while (utilsg && (5 <= (taiwane.size + 5) && 2.53 <= (1.12 * icondefaultthumbnailH)));
      iconuserw *= 1;
   }
       let ticke = false;
       let completeW: Map<any, any> = new Map([[String.fromCharCode(109,101,116,114,105,99,115,0),67], [String.fromCharCode(109,105,115,109,97,116,99,104,101,115,0),765], [String.fromCharCode(114,101,102,112,108,97,110,101,0),982]]);
          let libswresamplep = 0.0;
          let baseN = String.fromCharCode(112,114,101,100,105,99,97,116,101,0);
         completeW = new Map([[baseN, baseN.length >> (Math.min(Math.abs(1), 3))]]);
         libswresamplep -= parseFloat(`${1 - parseInt(`${libswresamplep}`)}`);
         ticke = null != completeW.get(`${ticke}`);
      iconschedulev -= parseFloat(`${parseInt(`${iconschedulev}`)}`);

    const result = await yysHomeloading.getUserDetails();

   for (let j = 0; j < 2; j++) {
       let unselectedj: Map<any, any> = new Map([[String.fromCharCode(116,120,116,110,105,100,0),true ], [String.fromCharCode(97,116,116,0),true ], [String.fromCharCode(111,118,101,114,108,97,121,0),true ]]);
       let tempnodatac = String.fromCharCode(112,111,114,116,114,97,105,116,0);
      while (!tempnodatac.includes(`${unselectedj.size}`)) {
         tempnodatac = `${tempnodatac.length - 2}`;
         break;
      }
          let window_6Z: Array<any> = [String.fromCharCode(115,117,98,100,101,109,117,120,101,114,0), String.fromCharCode(98,97,115,101,108,105,110,101,0), String.fromCharCode(99,111,100,101,98,108,111,99,107,115,0)];
         tempnodatac += `${unselectedj.size / (Math.max(window_6Z.length, 4))}`;
      if (2 >= (4 % (Math.max(7, unselectedj.size)))) {
         tempnodatac += `${tempnodatac.length}`;
      }
         tempnodatac = `${(String.fromCharCode(86,0) == tempnodatac ? unselectedj.size : tempnodatac.length)}`;
         tempnodatac = `${tempnodatac.length / 3}`;
      for (let d = 0; d < 1; d++) {
         unselectedj.set(`${tempnodatac}`, tempnodatac.length - unselectedj.size);
      }
      yellowanimationlive2 = `${privilegem ^ 3}`;
   }
      libfollyF.push(yellow3.length);
   let executorY = 8331226 >= yellow3.length;
   do {
       let template_sq3: Array<any> = [956, 841, 725];
         template_sq3 = [2];
          let bootsplashn: Array<any> = [276, 216, 476];
          let componentregistry3 = String.fromCharCode(103,114,97,118,105,116,121,0);
         template_sq3 = [(String.fromCharCode(56,0) == componentregistry3 ? template_sq3.length : componentregistry3.length)];
         bootsplashn.push(3 & bootsplashn.length);
      for (let e = 0; e < 3; e++) {
         template_sq3.push(template_sq3.length << (Math.min(Math.abs(2), 3)));
      }
      yellow3 = [1 << (Math.min(3, Math.abs(cornerp.size)))];
      if (executorY) {
         break;
      }
   } while ((!Array.from(viewsy.values()).includes(yellow3.length)) && executorY);
   while (3 < (parseInt(`${iconschedulev}`) - yellow3.length)) {
      yellow3.push(3);
      break;
   }
      yellow3.push(cornerp.size);
   if (viewsy.get(`${downarrowm}`) != null) {
      viewsy = new Map([[`${rules7}`, parseInt(`${rules7}`) | 2]]);
   }
   if (4 >= yellow3.length) {
      yellow3.push(iconwatchq.length % 3);
   }
    if (result == null) {

      yellowanimationlive2 = "3";
   let chartZ = 9673474 >= yellow3.length;
   do {
      yellow3.push(yellow3.length % 3);
      if (chartZ) {
         break;
      }
   } while ((yellow3.includes(rules7)) && chartZ);
      privilegem &= 3 + yellowanimationlive2.length;
      iconwatchq = `${2 - yellowanimationlive2.length}`;
   let singaporeg = iconwatchq.length <= 4936135;
   do {
      iconwatchq = `${parseInt(`${iconschedulev}`) + 3}`;
      if (singaporeg) {
         break;
      }
   } while ((iconwatchq.length >= viewsy.size) && singaporeg);
   for (let d = 0; d < 2; d++) {
       let turndowny = String.fromCharCode(112,101,114,115,112,101,99,116,105,118,101,0);
       let descb = String.fromCharCode(108,111,111,112,98,114,101,97,107,0);
       let pauseS = String.fromCharCode(109,97,110,97,103,101,114,0);
       let smallu = String.fromCharCode(112,114,101,116,116,121,119,114,105,116,101,114,0);
      while (2 > pauseS.length) {
          let plusP = 0.0;
          let componentsy = String.fromCharCode(115,104,97,100,101,114,0);
         turndowny += `${pauseS.length - descb.length}`;
         plusP *= parseFloat(`${componentsy.length >> (Math.min(3, Math.abs(parseInt(`${plusP}`))))}`);
         componentsy += `${parseInt(`${plusP}`)}`;
         break;
      }
      let megaphoneg = String.fromCharCode(109,55,97,56,115,0) == smallu;
      do {
         smallu = `${turndowny.length}`;
         if (megaphoneg) {
            break;
         }
      } while (megaphoneg && (smallu.includes(turndowny)));
      let greene = String.fromCharCode(120,48,101,50,48,105,114,107,112,105,0) == descb;
      do {
         descb += `${smallu.length ^ pauseS.length}`;
         if (greene) {
            break;
         }
      } while ((descb.length == 3) && greene);
         pauseS += `${(String.fromCharCode(53,0) == pauseS ? pauseS.length : descb.length)}`;
       let progressV = true;
       let nativeex7 = false;
          let hooks7 = 2;
         turndowny += `${turndowny.length}`;
         hooks7 -= hooks7 / (Math.max(1, hooks7));
         nativeex7 = turndowny.length == 56;
         pauseS += `${1 & turndowny.length}`;
         descb = `${(pauseS == String.fromCharCode(69,0) ? pauseS.length : (nativeex7 ? 5 : 5))}`;
      if (nativeex7) {
          let cancelU: Array<any> = [464, 128, 713];
          let viewerM = String.fromCharCode(101,112,104,101,109,101,114,97,108,0);
         nativeex7 = cancelU.length == 97;
         cancelU = [viewerM.length];
         viewerM = `${viewerM.length >> (Math.min(viewerM.length, 2))}`;
      }
      for (let x = 0; x < 2; x++) {
         nativeex7 = (progressV ? nativeex7 : !progressV);
      }
         smallu += `${((progressV ? 5 : 1) + 3)}`;
      downarrowm -= parseFloat(`${iconwatchq.length ^ parseInt(`${iconschedulev}`)}`);
   }
   let result0 = 8587907 <= libfollyF.length;
   do {
       let iconarrowrightblackI = String.fromCharCode(115,109,97,108,108,101,114,0);
       let notificationfilledk = 5;
          let penaltymatchicon7 = String.fromCharCode(109,97,110,100,97,116,111,114,121,0);
         notificationfilledk |= (penaltymatchicon7 == String.fromCharCode(121,0) ? penaltymatchicon7.length : iconarrowrightblackI.length);
         iconarrowrightblackI += `${notificationfilledk}`;
      while (1 == iconarrowrightblackI.length) {
         iconarrowrightblackI = "3";
         break;
      }
         notificationfilledk += 1;
          let basketballtrophyH = 5.0;
          let hooksL: Map<any, any> = new Map([[String.fromCharCode(99,104,114,111,109,97,116,105,99,0),974], [String.fromCharCode(105,116,120,102,109,0),699], [String.fromCharCode(99,108,97,115,115,110,97,109,101,0),357]]);
         notificationfilledk += hooksL.size;
         basketballtrophyH /= Math.max(1, parseInt(`${basketballtrophyH}`) | parseInt(`${basketballtrophyH}`));
         hooksL = new Map([[`${basketballtrophyH}`, parseInt(`${basketballtrophyH}`) % (Math.max(6, parseInt(`${basketballtrophyH}`)))]]);
      if (4 > iconarrowrightblackI.length) {
         notificationfilledk >>= Math.min(2, Math.abs(notificationfilledk));
      }
      libfollyF.push(yellowanimationlive2.length / (Math.max(1, 5)));
      if (result0) {
         break;
      }
   } while (result0 && (iconwatchq.includes(`${libfollyF.length}`)));
      return;
    }

    await dispatch(updateUserAuth(result));

   let libswresampleT = 5247931 >= privilegem;
   do {
      privilegem <<= Math.min(2, Math.abs(yellowanimationlive2.length | 2));
      if (libswresampleT) {
         break;
      }
   } while (libswresampleT && (4 <= (yellow3.length % (Math.max(5, privilegem)))));
   for (let v = 0; v < 3; v++) {
      iconuserw -= viewsy.size >> (Math.min(Math.abs(1), 5));
   }
       let overL = String.fromCharCode(114,101,119,97,114,100,0);
      let liveendmodallogod = 9254296 >= overL.length;
      do {
          let iconsharefriendsS = false;
          let binddatasL: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,114,101,115,117,108,116,0),575], [String.fromCharCode(117,115,117,98,0),0]]);
          let miniX = 5.0;
         overL = `${2 % (Math.max(1, overL.length))}`;
         iconsharefriendsS = (40 == ((iconsharefriendsS ? binddatasL.size : 37) & binddatasL.size));
         miniX -= parseFloat(`${parseInt(`${miniX}`) & binddatasL.size}`);
         if (liveendmodallogod) {
            break;
         }
      } while (liveendmodallogod && (overL != String.fromCharCode(54,0) || overL.length <= 2));
      for (let g = 0; g < 1; g++) {
          let teamdetailsbg4 = String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,115,0);
          let arrowX: Map<any, any> = new Map([[String.fromCharCode(100,101,108,105,118,101,114,121,0),String.fromCharCode(122,108,105,98,0)], [String.fromCharCode(98,117,114,115,116,0),String.fromCharCode(109,105,100,101,113,117,97,108,105,122,101,114,0)]]);
         overL = `${arrowX.size}`;
         teamdetailsbg4 = `${teamdetailsbg4.length}`;
         arrowX = new Map([[teamdetailsbg4, teamdetailsbg4.length]]);
      }
      for (let t = 0; t < 3; t++) {
         overL = `${3 * overL.length}`;
      }
      yellowanimationlive2 = `${viewsy.size * 2}`;
      privilegem >>= Math.min(4, Math.abs(parseInt(`${rules7}`)));
      viewsy = new Map([[`${cornerp.size}`, parseInt(`${rules7}`)]]);
      yellow3.push(cornerp.size + 1);
      iconschedulev -= parseFloat(`${yellowanimationlive2.length + 2}`);
    return;
  };

  const handleRefresh = async () => {
       let inouttargetredt = 2;
    let shows = 3;
    let assetsL = String.fromCharCode(114,111,117,110,100,101,100,110,101,115,115,0);
    let owngoalA = String.fromCharCode(97,114,105,98,0);
    let bridgeH = String.fromCharCode(100,114,97,103,0);
    let r_positionq = String.fromCharCode(103,105,103,97,98,121,116,101,115,0);
    let gesturek = 2.0;
    let bangG = true;
    let cornerJ = 5.0;
    let imagewatchliveI = false;
    let successX: Array<any> = [555, 967];
    let ajaxI = String.fromCharCode(112,114,101,115,99,97,108,101,0);
    let defaultplayerimgJ = String.fromCharCode(100,101,113,117,111,116,101,0);
    let predictionbanner2: Map<any, any> = new Map([[String.fromCharCode(115,116,114,117,99,116,0),279], [String.fromCharCode(99,97,110,99,101,108,108,97,98,108,101,0),417]]);
    let lineD: Array<any> = [513, 224, 707];
    let othermatchdetailbgW = String.fromCharCode(101,118,97,108,0);
    let fullscreenmaxC = true;
    let runtime5 = 3;
      successX = [shows];
   if (!bangG) {
      bangG = successX.length >= 32;
   }
   let recommendation8 = r_positionq == String.fromCharCode(95,105,105,56,113,118,97,0);
   do {
      r_positionq += `${1 | parseInt(`${cornerJ}`)}`;
      if (recommendation8) {
         break;
      }
   } while (recommendation8 && (5 > (2 - r_positionq.length) || 5 > (2 - successX.length)));
      bangG = String.fromCharCode(84,0) == assetsL;
   for (let j = 0; j < 1; j++) {
      ajaxI = `${((bangG ? 4 : 4))}`;
   }
      gesturek *= parseFloat(`${parseInt(`${cornerJ}`)}`);
      bangG = bridgeH == String.fromCharCode(70,0);
       let executorO = false;
       let renderP: Array<any> = [280, 243, 238];
       let faviconO = 3.0;
       let animationsy = 4.0;
      if (2 >= renderP.length) {
          let libffmpegkitS: Map<any, any> = new Map([[String.fromCharCode(109,97,116,104,101,115,0),939], [String.fromCharCode(112,117,98,108,105,115,104,0),1], [String.fromCharCode(105,110,105,116,105,97,108,105,115,101,0),411]]);
          let whistle3 = 2.0;
          let listN = 2;
         executorO = parseInt(`${animationsy}`) >= libffmpegkitS.size;
         libffmpegkitS.set(`${whistle3}`, 3);
         whistle3 /= Math.max(4, 1);
         listN <<= Math.min(Math.abs(listN | 1), 3);
      }
      if (!executorO) {
         executorO = faviconO < 48.68 || !executorO;
      }
      for (let f = 0; f < 2; f++) {
         animationsy *= parseInt(`${animationsy}`) - parseInt(`${faviconO}`);
      }
      for (let y = 0; y < 2; y++) {
         renderP.push(parseInt(`${animationsy}`));
      }
      while ((3.57 / (Math.max(10, faviconO))) < 2.78) {
         faviconO += parseInt(`${animationsy}`);
         break;
      }
      shows >>= Math.min(Math.abs(((bangG ? 1 : 1))), 3);
      r_positionq = "2";
       let kuaishouK = true;
      for (let d = 0; d < 1; d++) {
         kuaishouK = (kuaishouK ? kuaishouK : kuaishouK);
      }
         kuaishouK = !kuaishouK;
          let reducerO = 0;
          let arrowh = 1.0;
          let mode1 = 5;
         kuaishouK = 36 < reducerO;
         reducerO %= Math.max(mode1, 1);
         arrowh *= 3 * mode1;
      inouttargetredt ^= (1 - (imagewatchliveI ? 4 : 4));
   let shrunkh = String.fromCharCode(112,115,106,97,104,117,48,121,54,0) == owngoalA;
   do {
      owngoalA = `${shows}`;
      if (shrunkh) {
         break;
      }
   } while (shrunkh && (!bangG));
   for (let p = 0; p < 2; p++) {
      r_positionq = `${r_positionq.length / (Math.max(7, parseInt(`${gesturek}`)))}`;
   }
      ajaxI = `${ajaxI.length - 1}`;
   let membershipU = 7447619 <= assetsL.length;
   do {
       let crownP = true;
       let file9 = 1;
       let mapbufferR: Array<any> = [102, 298];
          let bootsplashl: Array<any> = [829, 575, 182];
         crownP = mapbufferR.includes(file9);
         bootsplashl = [bootsplashl.length << (Math.min(Math.abs(1), 4))];
         crownP = mapbufferR.length <= 78 || file9 <= 78;
      while (4 < (file9 + 5) || crownP) {
         file9 += mapbufferR.length << (Math.min(Math.abs(2), 5));
         break;
      }
      while (3 >= mapbufferR.length) {
          let update_ee = String.fromCharCode(115,105,109,112,108,101,116,97,103,0);
          let sheetZ: Array<any> = [23, 331, 108];
          let iconbackwhiteS = String.fromCharCode(112,97,114,101,110,116,104,101,115,105,115,0);
         mapbufferR = [iconbackwhiteS.length];
         update_ee += `${3 - sheetZ.length}`;
         sheetZ.push(sheetZ.length);
         iconbackwhiteS = `${3 % (Math.max(5, update_ee.length))}`;
         break;
      }
      for (let g = 0; g < 1; g++) {
         mapbufferR.push(file9);
      }
      let libreactperfloggerjniN = crownP ? !crownP : crownP;
      do {
          let actionh = 3.0;
         crownP = 55 <= file9 || !crownP;
         actionh /= Math.max(4, parseFloat(`${parseInt(`${actionh}`) & parseInt(`${actionh}`)}`));
         if (libreactperfloggerjniN) {
            break;
         }
      } while (libreactperfloggerjniN && (3 <= file9 && (file9 / (Math.max(3, 10))) <= 2));
      if (mapbufferR.length > 2) {
          let dicex = 4.0;
         file9 >>= Math.min(Math.abs(2), 1);
         dicex /= Math.max(parseFloat(`${3 / (Math.max(2, parseInt(`${dicex}`)))}`), 2);
      }
      for (let i = 0; i < 1; i++) {
          let disconnectedO = 0;
          let qnewinterstitialx = 5.0;
          let yellow2 = String.fromCharCode(116,103,115,0);
         mapbufferR.push(disconnectedO);
         disconnectedO &= parseInt(`${qnewinterstitialx}`) << (Math.min(Math.abs(2), 3));
         qnewinterstitialx /= Math.max((parseFloat(`${String.fromCharCode(97,0) == yellow2 ? parseInt(`${qnewinterstitialx}`) : yellow2.length}`)), 3);
      }
      while ((mapbufferR.length & file9) >= 5) {
          let streamingw = 1.0;
          let teamdetailsbgi = String.fromCharCode(114,101,109,111,118,97,98,108,101,0);
          let plus6 = false;
          let nendt = String.fromCharCode(115,116,114,105,100,0);
         mapbufferR.push(mapbufferR.length);
         streamingw -= parseFloat(`${3 << (Math.min(5, nendt.length))}`);
         teamdetailsbgi += `${(String.fromCharCode(54,0) == teamdetailsbgi ? parseInt(`${streamingw}`) : teamdetailsbgi.length)}`;
         plus6 = streamingw == 33.70 || 31 == teamdetailsbgi.length;
         nendt += "2";
         break;
      }
      assetsL = `${3 & parseInt(`${cornerJ}`)}`;
      if (membershipU) {
         break;
      }
   } while (((cornerJ - parseFloat(`${assetsL.length}`)) <= 1.33 && 3 <= (assetsL.length - parseInt(`${cornerJ}`))) && membershipU);

    setRefreshing(true);

      owngoalA += `${(r_positionq.length << (Math.min(1, Math.abs((imagewatchliveI ? 1 : 5)))))}`;
       let iconclosewhitebgS = String.fromCharCode(112,111,115,116,0);
      if (!iconclosewhitebgS.includes(iconclosewhitebgS)) {
         iconclosewhitebgS = `${iconclosewhitebgS.length}`;
      }
      while (!iconclosewhitebgS.startsWith(`${iconclosewhitebgS.length}`)) {
         iconclosewhitebgS = `${3 ^ iconclosewhitebgS.length}`;
         break;
      }
         iconclosewhitebgS = `${iconclosewhitebgS.length}`;
      shows <<= Math.min(2, Math.abs(inouttargetredt * owngoalA.length));
   if (4 <= shows) {
      bangG = assetsL == String.fromCharCode(112,0);
   }
      assetsL += `${(owngoalA == String.fromCharCode(82,0) ? owngoalA.length : (bangG ? 3 : 4))}`;
       let libcrashsdkI = String.fromCharCode(110,101,119,108,105,110,101,115,0);
      let imagewatchliveP = 9557128 >= libcrashsdkI.length;
      do {
          let launchT: Map<any, any> = new Map([[String.fromCharCode(115,116,97,107,101,100,0),true ], [String.fromCharCode(114,101,116,117,114,110,115,0),true ], [String.fromCharCode(112,114,101,115,101,110,116,0),false ]]);
          let philippines0: Map<any, any> = new Map([[String.fromCharCode(100,101,102,97,117,108,116,0),421], [String.fromCharCode(100,111,117,98,108,101,105,110,116,115,116,114,0),497]]);
          let type_bZ = true;
          let umengE = 1.0;
         libcrashsdkI += `${3 | parseInt(`${umengE}`)}`;
         launchT = new Map([[`${philippines0.size}`, ((type_bZ ? 5 : 1) + 3)]]);
         philippines0.set(`${type_bZ}`, 1);
         umengE *= 1 - philippines0.size;
         if (imagewatchliveP) {
            break;
         }
      } while (imagewatchliveP && (!libcrashsdkI.startsWith(`${libcrashsdkI.length}`)));
         libcrashsdkI = "3";
         libcrashsdkI = `${libcrashsdkI.length << (Math.min(Math.abs(1), 3))}`;
      bangG = String.fromCharCode(80,0) == ajaxI;
   let stationQ = String.fromCharCode(118,98,118,0) == bridgeH;
   do {
      bridgeH += `${1 + ajaxI.length}`;
      if (stationQ) {
         break;
      }
   } while (stationQ && (bridgeH.length <= assetsL.length));
      owngoalA = `${3 << (Math.min(Math.abs(parseInt(`${gesturek}`)), 1))}`;
      r_positionq = `${parseInt(`${gesturek}`) ^ 2}`;
       let push6 = 1.0;
       let regengo: Map<any, any> = new Map([[String.fromCharCode(117,110,117,115,101,100,0),938], [String.fromCharCode(108,111,103,103,105,110,103,0),312], [String.fromCharCode(105,110,112,111,115,0),775]]);
       let submit3 = 2.0;
       let nativemodule9 = 5.0;
       let sharewhiteb = 3.0;
      for (let m = 0; m < 2; m++) {
          let cornerkickH: Map<any, any> = new Map([[String.fromCharCode(117,110,99,108,97,109,112,101,100,0),false ], [String.fromCharCode(122,101,114,111,109,118,0),true ], [String.fromCharCode(114,101,99,118,102,114,111,109,0),true ]]);
         nativemodule9 -= cornerkickH.size - 3;
      }
         submit3 *= parseFloat(`${parseInt(`${submit3}`) ^ 2}`);
      if ((regengo.size * 3) > 3) {
          let stationsd: Map<any, any> = new Map([[String.fromCharCode(115,101,110,100,101,114,0),491], [String.fromCharCode(101,99,108,0),184]]);
          let questiconx = 3;
          let libffmpegkitf = 4.0;
          let loginH = 4;
          let relatedt: Map<any, any> = new Map([[String.fromCharCode(100,97,112,0),String.fromCharCode(98,105,116,114,101,118,0)], [String.fromCharCode(100,105,115,112,111,115,97,98,108,101,0),String.fromCharCode(115,105,103,110,114,97,110,100,0)], [String.fromCharCode(112,97,116,99,104,115,101,116,0),String.fromCharCode(115,116,115,115,0)]]);
         regengo = new Map([[`${regengo.size}`, parseInt(`${libffmpegkitf}`) & 2]]);
         stationsd.set(`${loginH}`, 3);
         questiconx <<= Math.min(4, Math.abs(stationsd.size << (Math.min(2, Math.abs(questiconx)))));
         libffmpegkitf -= parseFloat(`${1 - questiconx}`);
         loginH += questiconx / 2;
         relatedt.set(`${questiconx}`, relatedt.size / 2);
      }
       let j_titleM = 3.0;
      let condensedM = 9279302.0 >= sharewhiteb;
      do {
         sharewhiteb += parseInt(`${nativemodule9}`) >> (Math.min(2, Math.abs(3)));
         if (condensedM) {
            break;
         }
      } while ((j_titleM >= 5.40) && condensedM);
         sharewhiteb *= 2 | parseInt(`${j_titleM}`);
      let sliderc = 5598868 >= regengo.size;
      do {
         regengo = new Map([[`${regengo.size}`, 1 % (Math.max(6, parseInt(`${push6}`)))]]);
         if (sliderc) {
            break;
         }
      } while ((push6 > 5.34) && sliderc);
         sharewhiteb += parseInt(`${j_titleM}`);
      imagewatchliveI = 34 >= inouttargetredt;
   for (let y = 0; y < 1; y++) {
      owngoalA += "2";
   }
      successX = [(parseInt(`${cornerJ}`) / (Math.max(6, (bangG ? 5 : 4))))];
      gesturek /= Math.max((parseFloat(`${3 - (bangG ? 2 : 2)}`)), 2);
   while (ajaxI != String.fromCharCode(55,0)) {
       let libimagepipelineX: Map<any, any> = new Map([[String.fromCharCode(112,104,121,115,0),437], [String.fromCharCode(115,105,103,110,105,102,105,99,97,110,116,0),403]]);
          let iconpointscoreM = 5.0;
         libimagepipelineX = new Map([[`${libimagepipelineX.size}`, 3 & parseInt(`${iconpointscoreM}`)]]);
      while (libimagepipelineX.size == libimagepipelineX.size) {
          let subtext9 = String.fromCharCode(101,103,97,99,121,0);
          let control9 = String.fromCharCode(100,105,97,108,108,101,100,0);
          let utilsa = String.fromCharCode(118,112,108,97,121,101,114,0);
          let iconsubssuccess4 = 1.0;
          let iconpipshrinkG: Map<any, any> = new Map([[String.fromCharCode(102,105,102,111,0),501], [String.fromCharCode(98,97,110,100,105,110,103,0),616]]);
         libimagepipelineX.set(utilsa, utilsa.length);
         subtext9 = `${control9.length}`;
         control9 += `${subtext9.length ^ 1}`;
         iconsubssuccess4 /= Math.max((String.fromCharCode(75,0) == control9 ? parseInt(`${iconsubssuccess4}`) : control9.length), 4);
         iconpipshrinkG = new Map([[`${iconpipshrinkG.size}`, 1]]);
         break;
      }
       let megaphoneS = 5;
       let type_lW = 4;
      bridgeH = `${assetsL.length}`;
      break;
   }
   for (let p = 0; p < 2; p++) {
      bridgeH = "2";
   }
    await refreshUserState();

      ajaxI += `${r_positionq.length ^ 2}`;
   while (2 == defaultplayerimgJ.length || imagewatchliveI) {
       let sharewhiteV: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,101,120,116,0),String.fromCharCode(115,117,98,115,101,115,115,105,111,110,0)], [String.fromCharCode(116,111,109,111,114,114,111,119,0),String.fromCharCode(114,101,102,112,116,114,0)], [String.fromCharCode(105,119,104,116,0),String.fromCharCode(100,101,112,101,110,100,101,110,99,121,0)]]);
       let penaltyshootq = String.fromCharCode(105,116,101,114,97,116,101,0);
       let whistleF: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,101,115,111,99,107,101,116,0),564], [String.fromCharCode(117,112,115,104,105,102,116,101,100,0),7]]);
       let iconbackwhiteb = String.fromCharCode(108,97,117,110,99,104,0);
       let valuesR = 2.0;
      while ((penaltyshootq.length ^ sharewhiteV.size) == 2) {
         sharewhiteV.set(`${valuesR}`, 3);
         break;
      }
         penaltyshootq += `${whistleF.size}`;
         whistleF = new Map([[`${whistleF.size}`, (String.fromCharCode(90,0) == iconbackwhiteb ? whistleF.size : iconbackwhiteb.length)]]);
         valuesR /= Math.max(parseFloat(`${iconbackwhiteb.length}`), 2);
      while (!iconbackwhiteb.endsWith(`${whistleF.size}`)) {
          let libapminsightbo = String.fromCharCode(114,101,99,117,114,115,105,118,101,108,121,0);
          let unimplementedviewr = 5;
          let mutedd = 4.0;
          let backgroundR = String.fromCharCode(115,116,97,116,105,111,110,97,114,121,0);
         iconbackwhiteb = `${iconbackwhiteb.length * 2}`;
         libapminsightbo = "1";
         unimplementedviewr += (String.fromCharCode(50,0) == libapminsightbo ? libapminsightbo.length : parseInt(`${mutedd}`));
         mutedd += parseFloat(`${3}`);
         backgroundR = `${libapminsightbo.length}`;
         break;
      }
      for (let r = 0; r < 1; r++) {
         iconbackwhiteb = `${(String.fromCharCode(120,0) == iconbackwhiteb ? sharewhiteV.size : iconbackwhiteb.length)}`;
      }
      while (valuesR < parseFloat(`${iconbackwhiteb.length}`)) {
         iconbackwhiteb = `${iconbackwhiteb.length ^ parseInt(`${valuesR}`)}`;
         break;
      }
      if ((valuesR - parseFloat(`${iconbackwhiteb.length}`)) < 5.5 || 3 < (iconbackwhiteb.length + 4)) {
         valuesR /= Math.max(parseFloat(`${3 << (Math.min(1, Math.abs(sharewhiteV.size)))}`), 2);
      }
       let expandX = String.fromCharCode(97,100,111,112,116,101,100,0);
       let hook3 = String.fromCharCode(104,117,102,102,121,117,118,100,115,112,0);
          let teamp = 4;
          let ewardedD = String.fromCharCode(99,115,99,104,101,109,101,0);
         expandX = `${parseInt(`${valuesR}`) % (Math.max(9, expandX.length))}`;
         teamp -= teamp % 1;
         ewardedD = `${teamp}`;
      let minivodI = iconbackwhiteb == String.fromCharCode(115,48,57,119,49,110,49,119,97,120,0);
      do {
         iconbackwhiteb += "1";
         if (minivodI) {
            break;
         }
      } while ((4 >= (iconbackwhiteb.length / (Math.max(4, parseInt(`${valuesR}`))))) && minivodI);
      imagewatchliveI = defaultplayerimgJ.length > r_positionq.length;
      break;
   }
   for (let m = 0; m < 3; m++) {
      cornerJ += parseFloat(`${successX.length}`);
   }
   while (r_positionq.endsWith(`${bangG}`)) {
      bangG = cornerJ > parseFloat(`${ajaxI.length}`);
      break;
   }
      bridgeH += `${owngoalA.length}`;
   if (3 < predictionbanner2.size) {
      predictionbanner2.set(`${imagewatchliveI}`, lineD.length % (Math.max(3, 10)));
   }
       let basketballhometeamg = String.fromCharCode(114,101,102,99,111,117,110,116,101,114,0);
       let tailE: Map<any, any> = new Map([[String.fromCharCode(120,117,118,109,118,115,0),false ], [String.fromCharCode(99,111,110,116,101,110,116,0),false ]]);
         basketballhometeamg += `${(basketballhometeamg == String.fromCharCode(68,0) ? tailE.size : basketballhometeamg.length)}`;
      for (let o = 0; o < 1; o++) {
         basketballhometeamg = `${tailE.size ^ basketballhometeamg.length}`;
      }
       let episodeI = 3;
      while (basketballhometeamg.length <= episodeI) {
         basketballhometeamg = `${basketballhometeamg.length | tailE.size}`;
         break;
      }
         tailE = new Map([[`${tailE.size}`, tailE.size]]);
          let relatedP = 1.0;
          let buffera = 3;
          let bgvipsport5 = 4;
         episodeI %= Math.max(episodeI % (Math.max(tailE.size, 10)), 5);
         relatedP += parseFloat(`${2}`);
         buffera *= bgvipsport5 % 3;
         bgvipsport5 &= 3 * buffera;
      bangG = 79 > defaultplayerimgJ.length;
   for (let v = 0; v < 1; v++) {
      inouttargetredt <<= Math.min(1, Math.abs(2 << (Math.min(2, bridgeH.length))));
   }
   let sinit_8N = owngoalA.length >= 6344489;
   do {
      owngoalA += `${defaultplayerimgJ.length ^ assetsL.length}`;
      if (sinit_8N) {
         break;
      }
   } while ((assetsL.startsWith(`${owngoalA.length}`)) && sinit_8N);
   if ((parseInt(`${gesturek}`) / (Math.max(8, r_positionq.length))) == 2) {
      r_positionq = `${((bangG ? 4 : 3) ^ parseInt(`${gesturek}`))}`;
   }
   for (let o = 0; o < 3; o++) {
      inouttargetredt %= Math.max(2, (3 >> (Math.min(5, Math.abs((imagewatchliveI ? 2 : 5))))));
   }
   let crossw = bangG ? !bangG : bangG;
   do {
       let historyZ: Map<any, any> = new Map([[String.fromCharCode(116,111,121,115,0),String.fromCharCode(114,101,109,101,109,98,101,114,101,100,0)], [String.fromCharCode(118,98,114,105,0),String.fromCharCode(98,114,105,110,103,0)]]);
       let fullscreenmind = 3.0;
       let textq = 5.0;
       let descK = 0.0;
       let videovarx = String.fromCharCode(100,101,102,97,117,108,116,115,0);
      let condensedq = textq <= 8906815.0;
      do {
          let draga = 2.0;
         textq /= Math.max(2, 1);
         draga /= Math.max(4, parseFloat(`${1}`));
         if (condensedq) {
            break;
         }
      } while (((descK + 4) == 1.2) && condensedq);
         historyZ.set(`${textq}`, videovarx.length >> (Math.min(Math.abs(2), 4)));
      let libnms3 = 9344019.0 >= fullscreenmind;
      do {
          let username6 = 2;
          let acceptedq = 1;
         fullscreenmind /= Math.max(videovarx.length << (Math.min(Math.abs(2), 4)), 5);
         username6 *= username6 - acceptedq;
         acceptedq += 1;
         if (libnms3) {
            break;
         }
      } while ((4 >= videovarx.length) && libnms3);
          let countdownC = 4.0;
          let fullscreenmax1 = 2.0;
          let about2: Array<any> = [855, 471];
         historyZ.set(`${fullscreenmax1}`, parseInt(`${fullscreenmax1}`) - 1);
         countdownC *= parseFloat(`${parseInt(`${countdownC}`) % (Math.max(7, about2.length))}`);
         about2 = [2 % (Math.max(parseInt(`${countdownC}`), 4))];
      for (let e = 0; e < 2; e++) {
         descK *= 1;
      }
      while ((historyZ.size / (Math.max(5, fullscreenmind))) > 3.94) {
          let nend9 = 2.0;
          let stationM = String.fromCharCode(101,118,101,114,121,98,111,100,121,0);
         historyZ = new Map([[`${historyZ.size}`, historyZ.size + 2]]);
         nend9 += parseInt(`${nend9}`);
         stationM = `${parseInt(`${nend9}`)}`;
         break;
      }
      while ((textq - fullscreenmind) < 2.87 || 2.87 < (textq - fullscreenmind)) {
          let settingW: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,118,105,100,101,111,0),740], [String.fromCharCode(117,112,108,111,97,100,101,114,0),894], [String.fromCharCode(115,112,111,110,115,111,114,101,100,0),995]]);
          let arrowK = 0;
          let libreanimatedh = String.fromCharCode(102,101,111,102,0);
          let lefto = 2.0;
          let encrypty: Array<any> = [465, 413];
         fullscreenmind += 1;
         settingW.set(`${lefto}`, parseInt(`${lefto}`));
         arrowK %= Math.max(settingW.size, 2);
         libreanimatedh = `${(String.fromCharCode(57,0) == libreanimatedh ? encrypty.length : libreanimatedh.length)}`;
         encrypty = [2 % (Math.max(1, libreanimatedh.length))];
         break;
      }
          let iconclosed: Map<any, any> = new Map([[String.fromCharCode(104,97,108,100,99,108,117,116,0),952], [String.fromCharCode(115,112,101,101,100,117,112,0),41], [String.fromCharCode(97,114,107,101,114,0),151]]);
         historyZ.set(`${fullscreenmind}`, parseInt(`${fullscreenmind}`));
         iconclosed = new Map([[`${iconclosed.size}`, 2 ^ iconclosed.size]]);
      while (!Array.from(historyZ.keys()).includes(`${textq}`)) {
         textq -= parseInt(`${fullscreenmind}`);
         break;
      }
       let paginationV = String.fromCharCode(114,97,100,105,120,0);
       let condensedT = String.fromCharCode(116,101,115,118,101,114,116,0);
      for (let o = 0; o < 1; o++) {
         videovarx += `${parseInt(`${fullscreenmind}`) + 1}`;
      }
      if (4.80 > (fullscreenmind / (Math.max(1.76, 9)))) {
         fullscreenmind -= historyZ.size | parseInt(`${fullscreenmind}`);
      }
         descK -= parseInt(`${textq}`) / (Math.max(2, parseInt(`${descK}`)));
      if (1.46 > (descK + textq)) {
          let termsd = 0.0;
          let dialogo = String.fromCharCode(115,111,102,116,119,97,114,101,0);
          let executorj = 5.0;
          let giflivestreamingM = 0.0;
          let homeplayerz = String.fromCharCode(99,97,109,112,97,105,103,110,0);
         textq += 2 - paginationV.length;
         termsd /= Math.max(parseInt(`${giflivestreamingM}`), 3);
         dialogo += `${dialogo.length & parseInt(`${termsd}`)}`;
         executorj -= homeplayerz.length;
         homeplayerz = "3";
      }
      while ((condensedT.length - 2) >= 5 || (condensedT.length % 2) >= 1) {
         descK *= historyZ.size;
         break;
      }
      bangG = owngoalA.length < 89;
      if (crossw) {
         break;
      }
   } while (crossw && (!bangG));
   while (!r_positionq.startsWith(`${inouttargetredt}`)) {
       let sendj: Map<any, any> = new Map([[String.fromCharCode(102,108,111,97,116,105,110,103,0),String.fromCharCode(110,97,116,105,118,101,0)], [String.fromCharCode(103,114,101,121,0),String.fromCharCode(97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,0)]]);
      while ((sendj.size - 1) < 4 || 1 < (sendj.size - sendj.size)) {
         sendj.set(`${sendj.size}`, sendj.size);
         break;
      }
         sendj.set(`${sendj.size}`, 1);
      if (Array.from(sendj.keys()).includes(`${sendj.size}`)) {
         sendj.set(`${sendj.size}`, sendj.size);
      }
      r_positionq = "1";
      break;
   }
   if (!imagewatchliveI && 3 >= assetsL.length) {
       let iconnewsshareS: Map<any, any> = new Map([[String.fromCharCode(109,98,101,100,0),String.fromCharCode(115,117,112,112,114,101,115,115,111,114,0)], [String.fromCharCode(102,109,116,112,0),String.fromCharCode(109,117,108,116,105,112,108,105,99,97,116,105,111,110,0)]]);
       let iconcalendarX = String.fromCharCode(115,104,117,116,100,111,119,110,0);
          let layoutM = String.fromCharCode(119,115,118,113,97,0);
         iconcalendarX = "1";
         layoutM = `${layoutM.length}`;
      while (4 > (iconcalendarX.length / 5) || 2 > (iconcalendarX.length / (Math.max(5, 8)))) {
         iconnewsshareS.set(`${iconcalendarX}`, 2);
         break;
      }
      for (let x = 0; x < 2; x++) {
         iconcalendarX = `${(iconcalendarX == String.fromCharCode(89,0) ? iconcalendarX.length : iconnewsshareS.size)}`;
      }
      while (1 > (iconcalendarX.length * 5) || (5 * iconnewsshareS.size) > 4) {
         iconnewsshareS = new Map([[`${iconnewsshareS.size}`, (iconcalendarX == String.fromCharCode(101,0) ? iconnewsshareS.size : iconcalendarX.length)]]);
         break;
      }
      for (let g = 0; g < 1; g++) {
         iconcalendarX = `${iconcalendarX.length >> (Math.min(3, Math.abs(iconnewsshareS.size)))}`;
      }
      if (1 <= (4 + iconcalendarX.length)) {
         iconnewsshareS = new Map([[`${iconnewsshareS.size}`, iconcalendarX.length]]);
      }
      assetsL += `${(bridgeH == String.fromCharCode(120,0) ? shows : bridgeH.length)}`;
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
          style={{ ...textVariants.body, color: colors.primary, fontSize: 15 }}
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
       let eyeopens = true;
    let contextq: Map<any, any> = new Map([[String.fromCharCode(119,101,105,103,104,116,115,0),false ], [String.fromCharCode(102,97,99,105,108,105,116,97,116,101,0),true ]]);
    let dependenciesB = String.fromCharCode(108,111,116,116,105,101,118,105,101,119,0);
    let nativeexH = String.fromCharCode(122,102,114,101,101,0);
    let diceX = 4.0;
    let awayN: Map<any, any> = new Map([[String.fromCharCode(100,115,112,117,116,105,108,0),934], [String.fromCharCode(118,101,114,105,102,105,97,116,105,111,110,0),870], [String.fromCharCode(115,117,98,109,111,100,101,108,0),123]]);
    let componentregistryc = 0.0;
    let rncorex = String.fromCharCode(110,101,103,111,116,105,97,116,101,100,0);
    let popupP = 5.0;
    let profileactiveH = String.fromCharCode(119,111,114,107,101,114,0);
    let nterstitialm = 2;
   for (let a = 0; a < 2; a++) {
      eyeopens = (rncorex.length / (Math.max(2, parseInt(`${popupP}`)))) == 94;
   }
   if (1 > (5 >> (Math.min(2, Math.abs(awayN.size)))) && awayN.size > 5) {
      eyeopens = (parseFloat(`${rncorex.length}`) / (Math.max(10, popupP))) > 53.3;
   }
   let leagueq = 7572590 <= dependenciesB.length;
   do {
       let hooksz = false;
      for (let v = 0; v < 1; v++) {
         hooksz = !hooksz || !hooksz;
      }
         hooksz = (hooksz ? hooksz : hooksz);
      for (let t = 0; t < 1; t++) {
         hooksz = !hooksz;
      }
      dependenciesB += `${awayN.size}`;
      if (leagueq) {
         break;
      }
   } while (leagueq && (dependenciesB.startsWith(`${profileactiveH.length}`)));
   while (2.18 > (2.77 * componentregistryc)) {
      componentregistryc += parseFloat(`${2}`);
      break;
   }
   if (1.5 >= (popupP - componentregistryc) || (1.5 - componentregistryc) >= 5.32) {
      popupP /= Math.max(2, parseFloat(`${awayN.size}`));
   }
   while (profileactiveH.includes(rncorex)) {
       let login7 = 0.0;
       let basketballk = String.fromCharCode(118,105,98,114,97,116,101,0);
         login7 -= parseInt(`${login7}`);
          let blackG = 0.0;
          let libffmpegkitK: Map<any, any> = new Map([[String.fromCharCode(114,101,99,101,110,116,108,121,0),String.fromCharCode(99,111,109,98,105,110,101,115,0)], [String.fromCharCode(112,101,114,109,0),String.fromCharCode(105,110,112,117,116,0)], [String.fromCharCode(112,114,111,112,111,115,101,0),String.fromCharCode(108,111,116,115,0)]]);
         basketballk = `${parseInt(`${blackG}`)}`;
         blackG -= libffmpegkitK.size % (Math.max(1, libffmpegkitK.size));
      while (2.76 > (4.98 * login7) || (login7 * 4.98) > 1.41) {
          let defaultroombg0 = 5.0;
          let reactnativeultimatelistviews: Array<any> = [147, 964];
          let arrow1: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,110,116,105,111,110,0),String.fromCharCode(115,99,104,109,0)], [String.fromCharCode(116,114,101,108,108,105,115,0),String.fromCharCode(102,116,118,100,111,99,0)]]);
          let yingD = 3.0;
          let mbnativeadvancedl: Map<any, any> = new Map([[String.fromCharCode(115,117,114,112,114,105,115,101,100,0),799], [String.fromCharCode(115,112,97,99,101,100,0),881], [String.fromCharCode(117,110,116,114,117,115,116,101,100,0),697]]);
         basketballk = "3";
         defaultroombg0 *= parseFloat(`${parseInt(`${yingD}`) >> (Math.min(3, Math.abs(parseInt(`${defaultroombg0}`))))}`);
         reactnativeultimatelistviews = [parseInt(`${defaultroombg0}`)];
         arrow1.set(`${defaultroombg0}`, parseInt(`${defaultroombg0}`));
         yingD += parseFloat(`${mbnativeadvancedl.size}`);
         mbnativeadvancedl = new Map([[`${mbnativeadvancedl.size}`, 3]]);
         break;
      }
         basketballk += `${basketballk.length % (Math.max(5, parseInt(`${login7}`)))}`;
         basketballk = `${basketballk.length}`;
         basketballk = `${basketballk.length + parseInt(`${login7}`)}`;
      profileactiveH += `${(dependenciesB == String.fromCharCode(73,0) ? dependenciesB.length : awayN.size)}`;
      break;
   }

    const banner = await yysMembership.getEventBanner();

      diceX /= Math.max(awayN.size, 1);
   let soundK = 8796045.0 <= componentregistryc;
   do {
       let iconeyeM: Array<any> = [117, 556, 678];
       let orangeR = 3.0;
      for (let x = 0; x < 1; x++) {
         iconeyeM = [parseInt(`${orangeR}`)];
      }
         orangeR += iconeyeM.length | 3;
      if (iconeyeM.length == 1) {
         orangeR /= Math.max(5, iconeyeM.length);
      }
      let stationb = 8387721 >= iconeyeM.length;
      do {
          let iconplayv = String.fromCharCode(100,105,103,114,97,112,104,0);
         iconeyeM.push(1);
         iconplayv += `${3 & iconplayv.length}`;
         if (stationb) {
            break;
         }
      } while (stationb && ((3.20 + orangeR) > 3.91 || 5 > (iconeyeM.length & 1)));
          let basketballtrophy3 = String.fromCharCode(113,99,101,108,112,0);
          let confirmationq = String.fromCharCode(115,101,97,108,101,100,0);
         orangeR += parseInt(`${orangeR}`) / 2;
         basketballtrophy3 += `${(confirmationq == String.fromCharCode(121,0) ? basketballtrophy3.length : confirmationq.length)}`;
          let sorto = 5.0;
         orangeR /= Math.max(2, iconeyeM.length << (Math.min(Math.abs(2), 5)));
         sorto += 2;
      componentregistryc *= parseFloat(`${1 | iconeyeM.length}`);
      if (soundK) {
         break;
      }
   } while (soundK && (2 >= (1 & rncorex.length)));
       let giftM = 2.0;
       let untickZ = 0;
       let classesR = 5.0;
      for (let u = 0; u < 3; u++) {
         giftM += parseFloat(`${untickZ}`);
      }
      while ((5 & untickZ) > 1 || (untickZ + 5) > 1) {
         untickZ /= Math.max(untickZ + 3, 5);
         break;
      }
          let sharewhiteK = false;
          let notificationz: Map<any, any> = new Map([[String.fromCharCode(103,101,111,98,116,97,103,0),String.fromCharCode(112,103,110,111,0)], [String.fromCharCode(105,110,118,101,114,115,101,0),String.fromCharCode(111,102,102,115,99,114,101,101,110,0)], [String.fromCharCode(118,105,115,105,98,105,108,105,116,121,0),String.fromCharCode(98,99,100,117,105,110,116,0)]]);
          let libtoby = false;
         classesR /= Math.max(5, parseFloat(`${parseInt(`${giftM}`)}`));
         sharewhiteK = notificationz.size < 48;
         notificationz.set(`${libtoby}`, 1);
      for (let k = 0; k < 2; k++) {
         classesR /= Math.max(parseFloat(`${parseInt(`${classesR}`)}`), 2);
      }
         untickZ <<= Math.min(3, Math.abs(1));
       let dependencyP = 2.0;
       let description_5l = 4.0;
         description_5l += parseFloat(`${parseInt(`${description_5l}`)}`);
         dependencyP *= parseFloat(`${parseInt(`${dependencyP}`) >> (Math.min(5, Math.abs(untickZ)))}`);
      let libreactw = untickZ >= 5091368;
      do {
         untickZ += parseInt(`${giftM}`) << (Math.min(5, Math.abs(1)));
         if (libreactw) {
            break;
         }
      } while (libreactw && (4 <= untickZ));
      awayN.set(rncorex, contextq.size | 1);
   while (4 == dependenciesB.length) {
       let largesoundh = 2.0;
       let rnewsJ = String.fromCharCode(115,117,99,99,101,101,100,0);
       let buttonk = String.fromCharCode(104,111,114,105,122,111,110,116,97,108,0);
      if (3.27 < (largesoundh + 4.26)) {
         rnewsJ += `${buttonk.length | 2}`;
      }
         largesoundh *= 1;
          let linkV = String.fromCharCode(118,116,97,98,0);
          let suboutE = true;
          let iconbellactiveG = 5;
         largesoundh += parseInt(`${largesoundh}`);
         linkV = `${iconbellactiveG}`;
         suboutE = 48 < iconbellactiveG;
      if (buttonk != String.fromCharCode(72,0)) {
         rnewsJ += `${parseInt(`${largesoundh}`)}`;
      }
          let imagenomoredataz = 1.0;
          let successq = true;
         largesoundh *= parseInt(`${imagenomoredataz}`) & 1;
         imagenomoredataz += 1;
      for (let r = 0; r < 3; r++) {
         rnewsJ += `${parseInt(`${largesoundh}`) >> (Math.min(rnewsJ.length, 5))}`;
      }
         rnewsJ = `${buttonk.length + 2}`;
         rnewsJ = `${rnewsJ.length << (Math.min(4, Math.abs(parseInt(`${largesoundh}`))))}`;
         largesoundh *= rnewsJ.length >> (Math.min(1, Math.abs(parseInt(`${largesoundh}`))));
      profileactiveH = `${(1 << (Math.min(3, Math.abs((eyeopens ? 4 : 1)))))}`;
      break;
   }
       let awayd = String.fromCharCode(114,101,98,117,99,107,101,116,0);
       let stringM = true;
      for (let i = 0; i < 2; i++) {
         awayd = `${((stringM ? 3 : 2))}`;
      }
       let exampleimageE = 1.0;
       let iconrefreshR = 5.0;
         iconrefreshR /= Math.max(3, (parseFloat(`${parseInt(`${exampleimageE}`) + (stringM ? 3 : 5)}`)));
       let iconclose1: Array<any> = [990, 569];
      if (iconrefreshR >= parseFloat(`${awayd.length}`)) {
          let skipI = 1.0;
         awayd += `${(3 & (stringM ? 2 : 5))}`;
         skipI -= parseInt(`${skipI}`) & parseInt(`${skipI}`);
      }
         stringM = 43 <= iconclose1.length && iconrefreshR <= 58.31;
      contextq.set(`${popupP}`, parseInt(`${popupP}`));
      rncorex = `${1 ^ parseInt(`${popupP}`)}`;

    if (banner) {

      diceX += parseInt(`${diceX}`);
      awayN = new Map([[`${contextq.size}`, 3 ^ contextq.size]]);
      popupP -= parseFloat(`${nterstitialm}`);
   for (let n = 0; n < 1; n++) {
       let temperaturef = 3.0;
      if (3.30 < temperaturef) {
         temperaturef += parseInt(`${temperaturef}`) ^ 3;
      }
      if (4.52 < (3 - temperaturef)) {
          let interstitialZ = String.fromCharCode(115,101,101,110,0);
          let infoA: Array<any> = [994, 22, 86];
          let refreshn = 5.0;
         temperaturef /= Math.max(3, 1);
         interstitialZ = "2";
         infoA = [parseInt(`${refreshn}`) / (Math.max(infoA.length, 6))];
         refreshn += parseFloat(`${infoA.length}`);
      }
       let roomi = String.fromCharCode(100,101,110,121,0);
       let libfbjniM = String.fromCharCode(122,111,110,101,0);
      contextq = new Map([[`${contextq.size}`, parseInt(`${diceX}`) ^ contextq.size]]);
   }
      componentregistryc -= (parseFloat(`${profileactiveH == String.fromCharCode(68,0) ? parseInt(`${componentregistryc}`) : profileactiveH.length}`));
      componentregistryc *= parseFloat(`${1 + rncorex.length}`);
      setBannerAd(banner);
    } else {

      profileactiveH += `${3 & profileactiveH.length}`;
   let greenM = 7302607.0 >= popupP;
   do {
      popupP -= parseFloat(`${2}`);
      if (greenM) {
         break;
      }
   } while (((dependenciesB.length / 4) > 4 || 3 > (dependenciesB.length * 4)) && greenM);
   if (2 > (1 | dependenciesB.length) || (componentregistryc + parseFloat(`${dependenciesB.length}`)) > 2.57) {
       let giftP: Map<any, any> = new Map([[String.fromCharCode(101,115,100,115,0),988], [String.fromCharCode(101,109,117,108,97,116,111,114,0),292]]);
       let whitebellY = 5;
       let predictiondefaultL: Array<any> = [String.fromCharCode(106,111,105,110,101,100,0), String.fromCharCode(97,117,116,104,111,114,105,122,97,116,105,111,110,0), String.fromCharCode(115,116,114,104,97,115,104,0)];
       let invitem = String.fromCharCode(115,101,115,115,105,111,110,115,0);
         predictiondefaultL.push(whitebellY);
      let iconnewchatf = giftP.size <= 6214902;
      do {
          let themeB: Map<any, any> = new Map([[String.fromCharCode(109,111,100,105,116,121,0),314], [String.fromCharCode(112,114,111,99,101,115,115,0),825]]);
          let redgoalV: Map<any, any> = new Map([[String.fromCharCode(97,115,121,110,99,0),728], [String.fromCharCode(115,104,111,114,116,115,0),913], [String.fromCharCode(105,109,112,108,101,109,101,110,116,115,0),678]]);
          let country5 = String.fromCharCode(104,101,97,114,116,98,101,97,116,0);
         giftP.set(`${whitebellY}`, giftP.size - whitebellY);
         themeB = new Map([[`${redgoalV.size}`, country5.length]]);
         redgoalV.set(country5, redgoalV.size);
         if (iconnewchatf) {
            break;
         }
      } while (iconnewchatf && (Array.from(giftP.values()).includes(whitebellY)));
      let custom6 = 9764400 >= predictiondefaultL.length;
      do {
         predictiondefaultL = [predictiondefaultL.length + 1];
         if (custom6) {
            break;
         }
      } while (custom6 && (1 == (4 * invitem.length) || (invitem.length * predictiondefaultL.length) == 4));
      let yellowanimationliveI = 6229416 <= invitem.length;
      do {
          let libjsiI = 3;
          let elementsf = 2.0;
          let executorV = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,105,111,110,0);
          let zoomW = false;
         invitem = `${(executorV == String.fromCharCode(119,0) ? (zoomW ? 4 : 5) : executorV.length)}`;
         libjsiI &= parseInt(`${elementsf}`);
         elementsf -= 1 % (Math.max(10, parseInt(`${elementsf}`)));
         zoomW = 41 >= libjsiI;
         if (yellowanimationliveI) {
            break;
         }
      } while (yellowanimationliveI && (3 < (invitem.length & 5) || (5 & invitem.length) < 2));
      for (let m = 0; m < 2; m++) {
         predictiondefaultL = [predictiondefaultL.length / 3];
      }
         predictiondefaultL.push(1 - invitem.length);
      let round6 = 9535977 >= giftP.size;
      do {
          let notificationfillemptyG = 4.0;
         giftP = new Map([[`${predictiondefaultL.length}`, 1 / (Math.max(4, parseInt(`${notificationfillemptyG}`)))]]);
         if (round6) {
            break;
         }
      } while (round6 && ((giftP.size << (Math.min(3, predictiondefaultL.length))) <= 1 && (1 << (Math.min(3, predictiondefaultL.length))) <= 3));
          let notificationfillemptyM = 1;
          let suggestionm = String.fromCharCode(114,95,49,50,0);
         invitem = `${notificationfillemptyM - suggestionm.length}`;
          let libswscale1 = String.fromCharCode(99,109,112,97,100,100,114,0);
          let gradleK: Map<any, any> = new Map([[String.fromCharCode(100,98,108,112,0),false ], [String.fromCharCode(109,117,116,97,116,101,0),false ], [String.fromCharCode(112,97,114,97,109,103,101,110,0),false ]]);
         giftP.set(invitem, invitem.length ^ libswscale1.length);
         libswscale1 += "2";
         gradleK = new Map([[`${gradleK.size}`, gradleK.size]]);
         predictiondefaultL.push(giftP.size - 2);
      for (let i = 0; i < 2; i++) {
         whitebellY <<= Math.min(Math.abs(3 + predictiondefaultL.length), 4);
      }
      for (let s = 0; s < 3; s++) {
          let pathp = String.fromCharCode(120,112,111,114,116,101,100,0);
          let canvass = 4.0;
         invitem += `${parseInt(`${canvass}`) | 2}`;
         pathp += `${pathp.length * pathp.length}`;
         canvass += parseFloat(`${pathp.length}`);
      }
      componentregistryc /= Math.max((parseFloat(`${String.fromCharCode(116,0) == nativeexH ? nterstitialm : nativeexH.length}`)), 3);
   }
   while ((4 ^ rncorex.length) >= 5 && 4 >= (parseInt(`${diceX}`) / (Math.max(rncorex.length, 3)))) {
      rncorex = `${2 * parseInt(`${popupP}`)}`;
      break;
   }
       let abidetectP = String.fromCharCode(106,97,99,99,97,114,100,100,105,115,116,0);
       let backiconG = 1.0;
         backiconG += 3;
      if (abidetectP.includes(`${backiconG}`)) {
          let arrowrightt = true;
          let dplusd: Array<any> = [986, 633];
         abidetectP = `${abidetectP.length}`;
         arrowrightt = dplusd.length <= 9;
         dplusd.push(2);
      }
      while (!abidetectP.endsWith(`${backiconG}`)) {
          let mountingL = String.fromCharCode(111,108,100,0);
          let clockP = 3;
         backiconG += parseInt(`${backiconG}`) % 3;
         mountingL += `${clockP >> (Math.min(Math.abs(3), 3))}`;
         clockP %= Math.max(4, (String.fromCharCode(65,0) == mountingL ? mountingL.length : clockP));
         break;
      }
          let shrunkz = false;
          let china8 = 3.0;
          let scrollview0 = 3;
         abidetectP = "1";
         shrunkz = scrollview0 < 15;
         china8 += parseFloat(`${scrollview0 >> (Math.min(Math.abs(parseInt(`${china8}`)), 2))}`);
       let greyarrowupx = true;
       let sliderh = false;
      if (backiconG < 3.66) {
         backiconG -= abidetectP.length;
      }
      nterstitialm -= awayN.size ^ 1;
       let plusD = false;
       let bodang = false;
       let countdownn = String.fromCharCode(102,97,113,0);
      if (bodang) {
         plusD = countdownn.length == 38;
      }
          let redgoalq = 3.0;
          let subbasketballplayerr = 3.0;
         bodang = !bodang;
         redgoalq -= parseFloat(`${2}`);
         subbasketballplayerr += parseFloat(`${parseInt(`${redgoalq}`)}`);
         bodang = countdownn.length == 95;
      while (2 <= countdownn.length) {
          let bannerk: Array<any> = [560, 715, 625];
          let videojs_: Array<any> = [748, 174];
          let moduleE = false;
          let utilsm = 5.0;
         bodang = plusD;
         bannerk = [3 % (Math.max(3, videojs_.length))];
         videojs_ = [1 % (Math.max(4, parseInt(`${utilsm}`)))];
         moduleE = videojs_.includes(moduleE);
         utilsm -= parseFloat(`${parseInt(`${utilsm}`) >> (Math.min(bannerk.length, 2))}`);
         break;
      }
      while (!countdownn.includes(`${bodang}`)) {
          let libreactnativejniw: Array<any> = [798, 323];
          let buttoni = String.fromCharCode(103,98,114,97,112,0);
         countdownn = `${((plusD ? 3 : 2) % (Math.max(1, libreactnativejniw.length)))}`;
         libreactnativejniw = [3];
         buttoni = `${(buttoni == String.fromCharCode(109,0) ? buttoni.length : buttoni.length)}`;
         break;
      }
      let ewardedQ = plusD ? !plusD : plusD;
      do {
          let libavfilteru: Array<any> = [540, 156];
         plusD = countdownn.length > libavfilteru.length;
         if (ewardedQ) {
            break;
         }
      } while (ewardedQ && (bodang));
         plusD = countdownn.length > 94;
      let iconshareO = bodang ? !bodang : bodang;
      do {
         bodang = countdownn.length == 73;
         if (iconshareO) {
            break;
         }
      } while (iconshareO && (countdownn.includes(`${bodang}`)));
      if (!bodang && 2 < countdownn.length) {
          let disti = 2;
         countdownn = "2";
         disti -= disti + 2;
      }
      componentregistryc += parseFloat(`${rncorex.length + 1}`);
      setBannerAd(undefined);
    }
  };

  const shouldShowAds = async () => {
       let trophy1: Array<any> = [478, 479];
    let confirmationQ: Array<any> = [533, 339];
    let middlebrightnessi = true;
    let iconstar7 = false;
    let paginationU = String.fromCharCode(112,114,111,98,97,98,105,108,105,116,121,0);
    let policyH = String.fromCharCode(112,114,111,112,111,114,116,105,111,110,115,0);
    let chatbotphotoA = 3.0;
    let fastforwardn = 0.0;
    let yellowscoreballx = 2;
    let sortQ = String.fromCharCode(101,111,99,100,0);
    let umengQ = String.fromCharCode(97,108,108,111,119,101,100,0);
    let iconwatchG = String.fromCharCode(107,101,109,112,102,0);
    let mimou = 5;
    let liveshareg = String.fromCharCode(99,101,110,116,114,111,105,100,115,0);
    let telemetrya = true;
       let bgvipsportU = String.fromCharCode(116,101,97,114,0);
         bgvipsportU += `${bgvipsportU.length}`;
      while (bgvipsportU.length < 3) {
         bgvipsportU = `${(bgvipsportU == String.fromCharCode(116,0) ? bgvipsportU.length : bgvipsportU.length)}`;
         break;
      }
      let informationi = String.fromCharCode(116,55,119,56,116,52,111,55,48,99,0) == bgvipsportU;
      do {
         bgvipsportU = "1";
         if (informationi) {
            break;
         }
      } while (informationi && (!bgvipsportU.startsWith(bgvipsportU)));
      paginationU += `${confirmationQ.length}`;
       let gradlewf = String.fromCharCode(97,117,116,111,100,101,108,101,116,101,0);
       let styleI = String.fromCharCode(112,97,100,100,105,110,103,0);
       let type_03X: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,112,114,111,99,114,101,115,0),false ], [String.fromCharCode(103,109,97,116,99,104,0),true ], [String.fromCharCode(100,101,99,108,97,114,101,0),true ]]);
          let iconnewsshare1 = String.fromCharCode(116,104,114,101,97,100,110,97,109,101,0);
         styleI += "3";
         iconnewsshare1 += `${iconnewsshare1.length << (Math.min(Math.abs(3), 5))}`;
          let libfabricjniJ = 2.0;
         gradlewf = `${parseInt(`${libfabricjniJ}`)}`;
          let filem: Array<any> = [485, 182, 226];
          let homeicona = String.fromCharCode(120,109,112,101,103,0);
         styleI = "2";
         filem = [filem.length >> (Math.min(Math.abs(2), 4))];
         homeicona += `${(String.fromCharCode(79,0) == homeicona ? filem.length : homeicona.length)}`;
          let assist2 = 3.0;
          let bannerQ: Array<any> = [396, 104];
          let iconadslinkW = 5.0;
         gradlewf += `${parseInt(`${iconadslinkW}`) - bannerQ.length}`;
         assist2 += parseInt(`${assist2}`) ^ parseInt(`${assist2}`);
         bannerQ = [parseInt(`${assist2}`)];
         type_03X.set(styleI, gradlewf.length);
      let owngoalU = styleI == String.fromCharCode(105,115,53,116,113,55,0);
      do {
         styleI = `${(String.fromCharCode(97,0) == styleI ? type_03X.size : styleI.length)}`;
         if (owngoalU) {
            break;
         }
      } while (owngoalU && (gradlewf != styleI));
      if (!gradlewf.startsWith(`${styleI.length}`)) {
          let interstitialF = 0.0;
          let dataL = String.fromCharCode(109,112,101,103,117,116,105,108,115,0);
          let reactV = 2.0;
          let helperp = 0;
          let x_centerb = true;
         styleI = `${parseInt(`${interstitialF}`) >> (Math.min(Math.abs(1), 4))}`;
         interstitialF += parseFloat(`${3 + helperp}`);
         dataL = `${helperp}`;
         reactV += 3;
         x_centerb = 77 < (reactV - helperp);
      }
      let analyticz = String.fromCharCode(118,48,101,106,107,118,49,118,121,0) == styleI;
      do {
         styleI = `${styleI.length}`;
         if (analyticz) {
            break;
         }
      } while (analyticz && (type_03X.size == styleI.length));
       let scorepopsoundm = String.fromCharCode(105,110,116,101,114,102,97,99,101,115,0);
       let libyogav = String.fromCharCode(109,98,115,101,103,109,101,110,116,97,116,105,111,110,0);
      policyH += `${gradlewf.length / (Math.max(3, 3))}`;
   if (paginationU.length > policyH.length) {
       let bellreminderH = String.fromCharCode(105,100,101,110,116,105,102,121,0);
       let edito = 0.0;
       let orientationS = String.fromCharCode(105,112,99,0);
       let malaysiag = 0;
      for (let p = 0; p < 2; p++) {
          let basketballawayteamM = String.fromCharCode(101,120,112,97,110,100,0);
          let dicelogo3 = 5.0;
          let basea = String.fromCharCode(119,114,105,116,101,114,0);
         edito /= Math.max(1, parseInt(`${edito}`));
         basketballawayteamM = `${parseInt(`${dicelogo3}`)}`;
         dicelogo3 += parseFloat(`${3}`);
         basea = `${basketballawayteamM.length + basea.length}`;
      }
          let basketballmatchdetailbg9: Map<any, any> = new Map([[String.fromCharCode(110,117,109,98,105,116,115,0),true ], [String.fromCharCode(115,99,97,110,0),false ], [String.fromCharCode(112,114,101,115,99,97,108,105,110,103,0),false ]]);
          let greenarrowupM = true;
          let tumbnaili = String.fromCharCode(118,97,114,121,105,110,103,0);
         orientationS = `${(bellreminderH == String.fromCharCode(121,0) ? (greenarrowupM ? 2 : 2) : bellreminderH.length)}`;
         basketballmatchdetailbg9 = new Map([[`${basketballmatchdetailbg9.size}`, basketballmatchdetailbg9.size]]);
         greenarrowupM = String.fromCharCode(115,0) == tumbnaili;
         tumbnaili += `${basketballmatchdetailbg9.size}`;
         bellreminderH = `${3 + malaysiag}`;
       let frame_c_V = 4;
      if ((malaysiag & 2) == 1 || 2 == (orientationS.length & malaysiag)) {
         malaysiag -= parseInt(`${edito}`);
      }
      for (let y = 0; y < 1; y++) {
         edito -= orientationS.length | 3;
      }
      let skips = frame_c_V >= 5821148;
      do {
          let bodanV: Map<any, any> = new Map([[String.fromCharCode(118,99,111,119,112,116,114,0),true ], [String.fromCharCode(99,104,101,99,107,112,97,99,107,101,116,0),true ], [String.fromCharCode(99,105,112,104,101,114,115,0),true ]]);
          let spinnerk = 1;
          let linef = String.fromCharCode(109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,0);
         frame_c_V %= Math.max(orientationS.length, 1);
         bodanV = new Map([[`${spinnerk}`, 2 - linef.length]]);
         spinnerk ^= linef.length | 3;
         if (skips) {
            break;
         }
      } while (skips && ((4 - orientationS.length) > 5 || (4 - frame_c_V) > 1));
      while (!orientationS.includes(`${frame_c_V}`)) {
         orientationS = `${bellreminderH.length}`;
         break;
      }
      if (orientationS.length < 5) {
          let einit_uu = 4.0;
          let sortW = String.fromCharCode(109,109,99,111,115,0);
          let holder_ = 4;
         orientationS = `${parseInt(`${edito}`) * bellreminderH.length}`;
         einit_uu += parseFloat(`${2}`);
         sortW = `${parseInt(`${einit_uu}`)}`;
         holder_ *= holder_ ^ sortW.length;
      }
      while ((malaysiag - frame_c_V) == 1) {
         frame_c_V %= Math.max(5, orientationS.length);
         break;
      }
         malaysiag &= bellreminderH.length;
      if ((orientationS.length / (Math.max(1, 8))) > 3 || (parseInt(`${edito}`) * orientationS.length) > 1) {
         edito *= 2;
      }
      policyH += `${parseInt(`${chatbotphotoA}`)}`;
   }
      trophy1.push(trophy1.length / (Math.max(2, 9)));
   for (let n = 0; n < 2; n++) {
       let pointK = String.fromCharCode(114,111,116,97,116,105,111,110,95,51,95,54,54,0);
       let nterstitialS = String.fromCharCode(99,114,105,116,105,99,97,108,0);
       let libjsiJ = 4.0;
      for (let d = 0; d < 1; d++) {
          let giftb = 3.0;
          let largesoundV = String.fromCharCode(115,116,114,105,99,116,0);
          let mbbid2: Array<any> = [String.fromCharCode(104,117,101,0), String.fromCharCode(102,105,114,115,116,108,121,0)];
          let chinaC: Map<any, any> = new Map([[String.fromCharCode(100,101,108,101,116,105,111,110,0),String.fromCharCode(115,107,97,100,0)], [String.fromCharCode(115,117,98,98,108,111,99,107,0),String.fromCharCode(115,108,111,119,0)]]);
         nterstitialS += `${2 << (Math.min(5, mbbid2.length))}`;
         giftb /= Math.max(5, parseInt(`${giftb}`));
         largesoundV = `${3 | largesoundV.length}`;
         mbbid2 = [3 >> (Math.min(3, Math.abs(parseInt(`${giftb}`))))];
         chinaC = new Map([[`${chinaC.size}`, chinaC.size]]);
      }
         nterstitialS = `${3 / (Math.max(6, nterstitialS.length))}`;
         pointK += `${nterstitialS.length / 1}`;
         nterstitialS = `${parseInt(`${libjsiJ}`)}`;
         nterstitialS = `${parseInt(`${libjsiJ}`) & 1}`;
      let screen4 = 8010816 <= nterstitialS.length;
      do {
         nterstitialS += `${(String.fromCharCode(100,0) == nterstitialS ? nterstitialS.length : parseInt(`${libjsiJ}`))}`;
         if (screen4) {
            break;
         }
      } while (screen4 && (nterstitialS.endsWith(`${libjsiJ}`)));
      for (let c = 0; c < 3; c++) {
         libjsiJ += parseFloat(`${2 & pointK.length}`);
      }
       let vietnamb: Array<any> = [449, 146, 362];
      let long_g9 = vietnamb.length <= 6472121;
      do {
         vietnamb = [pointK.length * 1];
         if (long_g9) {
            break;
         }
      } while (((vietnamb.length & 5) < 3) && long_g9);
      paginationU += `${parseInt(`${fastforwardn}`) % (Math.max(paginationU.length, 6))}`;
   }
   if ((trophy1.length >> (Math.min(Math.abs(5), 5))) < 3 && 2 < (5 >> (Math.min(2, trophy1.length)))) {
      trophy1 = [3];
   }
       let largesound6 = 4;
       let libreactnativejni4 = String.fromCharCode(108,97,98,101,108,115,0);
      for (let r = 0; r < 1; r++) {
          let othermatchdetailbgX = false;
         libreactnativejni4 += "1";
         othermatchdetailbgX = !othermatchdetailbgX;
      }
         largesound6 >>= Math.min(libreactnativejni4.length, 1);
      for (let z = 0; z < 1; z++) {
         libreactnativejni4 = `${libreactnativejni4.length >> (Math.min(5, Math.abs(largesound6)))}`;
      }
      let emoji4 = libreactnativejni4.length >= 8893699;
      do {
         libreactnativejni4 = `${libreactnativejni4.length}`;
         if (emoji4) {
            break;
         }
      } while (((largesound6 << (Math.min(Math.abs(4), 1))) >= 4) && emoji4);
         libreactnativejni4 += `${libreactnativejni4.length + 2}`;
      let libreanimatedf = 7885457 <= largesound6;
      do {
         largesound6 |= 3 / (Math.max(3, libreactnativejni4.length));
         if (libreanimatedf) {
            break;
         }
      } while (((largesound6 & libreactnativejni4.length) < 5 || (5 & largesound6) < 2) && libreanimatedf);
      chatbotphotoA *= parseFloat(`${trophy1.length | libreactnativejni4.length}`);
   while (5.90 > (chatbotphotoA - 5.68)) {
       let nextf: Array<any> = [109, 32];
      let profileinactivey = nextf.length <= 9693875;
      do {
         nextf = [nextf.length | 1];
         if (profileinactivey) {
            break;
         }
      } while ((nextf.includes(nextf.length)) && profileinactivey);
      if (1 >= (3 << (Math.min(5, nextf.length))) && (nextf.length << (Math.min(Math.abs(3), 2))) >= 1) {
          let imagenetworkerrU = 5.0;
          let exampleimageO = String.fromCharCode(117,110,98,108,111,99,107,0);
          let debugR = String.fromCharCode(100,101,99,114,101,109,101,110,116,0);
          let modalF = 3.0;
          let castd = false;
         nextf.push(1 / (Math.max(7, parseInt(`${modalF}`))));
         imagenetworkerrU += (parseFloat(`${(castd ? 3 : 2)}`));
         exampleimageO += "2";
         debugR = `${((castd ? 1 : 2) >> (Math.min(exampleimageO.length, 2)))}`;
         modalF *= (parseFloat(`${(castd ? 3 : 4) ^ 3}`));
      }
         nextf = [nextf.length * 1];
      chatbotphotoA -= parseFloat(`${confirmationQ.length}`);
      break;
   }
      chatbotphotoA += parseFloat(`${1 >> (Math.min(1, paginationU.length))}`);
   while (5 == (confirmationQ.length << (Math.min(Math.abs(4), 4))) || 4 == (confirmationQ.length << (Math.min(paginationU.length, 2)))) {
      confirmationQ.push(1 | yellowscoreballx);
      break;
   }
   let downloader2 = String.fromCharCode(118,52,51,0) == sortQ;
   do {
      sortQ = `${2 | sortQ.length}`;
      if (downloader2) {
         break;
      }
   } while ((sortQ.length < 1 || !middlebrightnessi) && downloader2);
       let homeloading2 = String.fromCharCode(102,117,115,101,0);
         homeloading2 = `${(homeloading2 == String.fromCharCode(103,0) ? homeloading2.length : homeloading2.length)}`;
      for (let o = 0; o < 3; o++) {
         homeloading2 += `${homeloading2.length | homeloading2.length}`;
      }
          let gifgoalbgA = 1;
          let shootC = 3.0;
          let unimplementedviewr: Array<any> = [908, 206];
         homeloading2 += `${homeloading2.length}`;
         gifgoalbgA &= 3 - gifgoalbgA;
         shootC += 2 + unimplementedviewr.length;
         unimplementedviewr = [unimplementedviewr.length];
      confirmationQ.push((policyH == String.fromCharCode(113,0) ? policyH.length : parseInt(`${fastforwardn}`)));
   if (!sortQ.includes(`${yellowscoreballx}`)) {
      sortQ += `${(paginationU == String.fromCharCode(90,0) ? paginationU.length : yellowscoreballx)}`;
   }
       let pushe = false;
       let shirt_ = String.fromCharCode(97,99,113,117,97,110,116,0);
       let aboutY = String.fromCharCode(111,117,114,0);
      let backwhite7 = pushe ? !pushe : pushe;
      do {
          let feedbackJ = String.fromCharCode(97,114,116,105,115,0);
          let statsf = String.fromCharCode(115,105,109,112,108,101,116,105,109,101,111,117,116,0);
          let questo = 2.0;
          let actionsS = String.fromCharCode(108,101,97,115,116,0);
         pushe = (7 > ((pushe ? 7 : shirt_.length) << (Math.min(shirt_.length, 5))));
         feedbackJ += `${feedbackJ.length}`;
         statsf += "1";
         questo += parseFloat(`${actionsS.length | feedbackJ.length}`);
         actionsS = `${statsf.length}`;
         if (backwhite7) {
            break;
         }
      } while ((aboutY.length > 1) && backwhite7);
         shirt_ += `${shirt_.length}`;
      if (shirt_.length >= 4) {
          let policyT = String.fromCharCode(111,110,116,101,120,116,0);
          let userL = false;
          let themeE = String.fromCharCode(114,101,97,100,102,114,97,109,101,0);
          let graphM = 2;
          let zoom6 = 1.0;
         shirt_ += `${((pushe ? 5 : 3) * 2)}`;
         policyT = "3";
         userL = graphM <= 93;
         themeE = "3";
         graphM += (policyT.length + (userL ? 4 : 1));
         zoom6 -= ((userL ? 2 : 2) & 1);
      }
         shirt_ = `${aboutY.length / 1}`;
         pushe = (aboutY.length ^ shirt_.length) > 50;
      let shareq = shirt_ == String.fromCharCode(54,116,121,0);
      do {
         shirt_ = `${((pushe ? 2 : 4) / (Math.max(shirt_.length, 10)))}`;
         if (shareq) {
            break;
         }
      } while ((!pushe) && shareq);
      let update_wrf = aboutY.length <= 9745828;
      do {
         aboutY = `${3 >> (Math.min(2, aboutY.length))}`;
         if (update_wrf) {
            break;
         }
      } while (update_wrf && (shirt_ == String.fromCharCode(52,0)));
      while (aboutY.length >= shirt_.length) {
          let giftbuttont = 4.0;
          let vietnamK = true;
          let predictiondefaultv = false;
          let injuryK: Map<any, any> = new Map([[String.fromCharCode(112,105,120,101,108,98,117,102,102,101,114,0),135], [String.fromCharCode(100,101,108,116,97,113,0),284], [String.fromCharCode(109,99,108,109,115,0),920]]);
          let const_1hk = 3.0;
         shirt_ += `${injuryK.size >> (Math.min(shirt_.length, 1))}`;
         giftbuttont -= (parseInt(`${const_1hk}`) >> (Math.min(4, Math.abs((predictiondefaultv ? 5 : 3)))));
         vietnamK = (!predictiondefaultv ? vietnamK : !predictiondefaultv);
         injuryK = new Map([[`${predictiondefaultv}`, (parseInt(`${giftbuttont}`) * (predictiondefaultv ? 2 : 4))]]);
         const_1hk += parseInt(`${const_1hk}`) | parseInt(`${giftbuttont}`);
         break;
      }
      let basketballmatchdetailbge = 8614940 >= shirt_.length;
      do {
         shirt_ = `${(aboutY.length << (Math.min(3, Math.abs((pushe ? 5 : 3)))))}`;
         if (basketballmatchdetailbge) {
            break;
         }
      } while (basketballmatchdetailbge && (shirt_.includes(`${pushe}`)));
      yellowscoreballx += aboutY.length;
   while (policyH.length < 2 || !iconstar7) {
      policyH += `${3 << (Math.min(1, paginationU.length))}`;
      break;
   }
   while (confirmationQ.length <= parseInt(`${chatbotphotoA}`)) {
      confirmationQ = [umengQ.length * confirmationQ.length];
      break;
   }
   let iconviewerZ = paginationU.length <= 6038534;
   do {
      paginationU += `${2 + confirmationQ.length}`;
      if (iconviewerZ) {
         break;
      }
   } while ((umengQ.includes(`${paginationU.length}`)) && iconviewerZ);
      middlebrightnessi = policyH.length < 39 && 39 < confirmationQ.length;
      yellowscoreballx ^= 2 * yellowscoreballx;

    fetchBannerAd();
  };

  useFocusEffect(
    useCallback(() => {
      shouldShowAds();
    }, [])
  );

  const [deviceUniqueId, setDeviceUniqueId] = useState("");

  const setDeviceId = async () => {
       let k_lockf = String.fromCharCode(98,97,116,99,104,101,100,0);
    let emojihearth = 3;
    let shareblacky: Array<any> = [146, 633];
    let libapminsightbL = String.fromCharCode(97,98,115,0);
    let homeiconD = String.fromCharCode(103,117,105,100,101,115,0);
    let main_bi: Array<any> = [888, 453];
    let orientationR = 2;
    let expiredS: Map<any, any> = new Map([[String.fromCharCode(112,111,115,115,105,98,108,101,0),396], [String.fromCharCode(114,101,103,101,110,101,114,97,116,101,0),808]]);
    let homeloadingP: Array<any> = [String.fromCharCode(99,111,118,97,114,105,97,110,99,101,0), String.fromCharCode(108,105,98,115,119,114,101,115,97,109,112,108,101,0), String.fromCharCode(115,101,112,97,114,97,116,101,0)];
   if (libapminsightbL.length >= orientationR) {
      libapminsightbL = `${orientationR}`;
   }
   for (let d = 0; d < 3; d++) {
      k_lockf += `${emojihearth >> (Math.min(Math.abs(3), 3))}`;
   }
   let chartn = main_bi.length <= 5293679;
   do {
      main_bi = [3 << (Math.min(4, main_bi.length))];
      if (chartn) {
         break;
      }
   } while (chartn && (main_bi.includes(emojihearth)));
   for (let l = 0; l < 3; l++) {
       let iconrefreshv: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,108,97,116,101,0),154], [String.fromCharCode(115,101,116,116,105,116,108,101,0),839], [String.fromCharCode(112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,0),664]]);
       let videocommonq = 5;
       let found4 = true;
         videocommonq &= 2 + videocommonq;
      let subout7 = iconrefreshv.size >= 8744184;
      do {
         iconrefreshv = new Map([[`${iconrefreshv.size}`, iconrefreshv.size | 3]]);
         if (subout7) {
            break;
         }
      } while (subout7 && (Array.from(iconrefreshv.keys()).includes(`${videocommonq}`)));
       let megaphoneM: Array<any> = [900, 779];
          let nterstitialZ = 1.0;
          let libmapbufferjnir = 5;
          let grayF = String.fromCharCode(100,105,115,99,97,114,100,101,100,0);
         megaphoneM = [iconrefreshv.size];
         nterstitialZ += parseFloat(`${1 / (Math.max(9, libmapbufferjnir))}`);
         libmapbufferjnir >>= Math.min(3, Math.abs(1 >> (Math.min(4, grayF.length))));
         grayF += `${parseInt(`${nterstitialZ}`)}`;
      if ((1 << (Math.min(3, megaphoneM.length))) <= 1) {
         videocommonq += 1 ^ iconrefreshv.size;
      }
          let scheduler1 = String.fromCharCode(110,117,108,108,115,114,99,0);
          let goallogoo: Array<any> = [844, 568, 36];
         megaphoneM = [scheduler1.length - 2];
         scheduler1 += "1";
         goallogoo.push(goallogoo.length);
      if (1 >= (iconrefreshv.size - videocommonq)) {
         iconrefreshv.set(`${megaphoneM.length}`, megaphoneM.length / (Math.max(10, iconrefreshv.size)));
      }
         megaphoneM.push(((found4 ? 5 : 4) & 1));
       let iconw = 0;
       let zoomF = 3;
      k_lockf += `${k_lockf.length & shareblacky.length}`;
   }
   let bootsplash4 = emojihearth >= 9699216;
   do {
      emojihearth ^= shareblacky.length;
      if (bootsplash4) {
         break;
      }
   } while (bootsplash4 && ((k_lockf.length | 1) > 3));
      libapminsightbL += `${(String.fromCharCode(109,0) == libapminsightbL ? libapminsightbL.length : main_bi.length)}`;
   if (main_bi.length > orientationR) {
      orientationR >>= Math.min(Math.abs(2 / (Math.max(2, shareblacky.length))), 4);
   }
       let kickO = String.fromCharCode(98,101,102,111,114,101,0);
       let arrowrightk = String.fromCharCode(99,111,112,121,109,0);
      for (let l = 0; l < 2; l++) {
          let livenodatabgimgn = String.fromCharCode(115,116,111,112,112,105,110,103,0);
          let textlayoutmanagerY = String.fromCharCode(97,114,114,111,119,0);
         kickO += `${kickO.length}`;
         livenodatabgimgn += `${textlayoutmanagerY.length}`;
         textlayoutmanagerY += `${2 << (Math.min(5, textlayoutmanagerY.length))}`;
      }
         arrowrightk = `${(String.fromCharCode(117,0) == arrowrightk ? arrowrightk.length : kickO.length)}`;
      if (arrowrightk.length == kickO.length) {
          let redcirclebgm = String.fromCharCode(115,117,109,109,97,114,121,0);
          let iconqqb = 0.0;
          let feedback_ = String.fromCharCode(100,97,116,97,99,101,110,116,101,114,115,0);
         arrowrightk += `${1 - kickO.length}`;
         redcirclebgm = `${parseInt(`${iconqqb}`)}`;
         iconqqb /= Math.max(4, parseInt(`${iconqqb}`));
         feedback_ = `${parseInt(`${iconqqb}`)}`;
      }
          let fileN: Array<any> = [String.fromCharCode(105,100,101,110,116,105,102,105,97,98,108,101,0), String.fromCharCode(104,97,115,104,116,97,103,0), String.fromCharCode(116,111,112,105,99,0)];
          let relatedU: Array<any> = [870, 131, 777];
          let shootnogoalZ = 5;
         kickO += "1";
         fileN = [shootnogoalZ | relatedU.length];
         relatedU = [fileN.length];
         shootnogoalZ |= shootnogoalZ;
      if (kickO == String.fromCharCode(76,0)) {
         arrowrightk = "3";
      }
      while (kickO != String.fromCharCode(50,0)) {
          let bingX: Array<any> = [242, 272, 124];
          let navigationb = String.fromCharCode(116,105,109,105,110,103,115,97,102,101,0);
         arrowrightk += `${arrowrightk.length >> (Math.min(Math.abs(1), 2))}`;
         bingX.push(navigationb.length * bingX.length);
         navigationb = `${navigationb.length >> (Math.min(Math.abs(2), 4))}`;
         break;
      }
      main_bi = [1];
   if ((shareblacky.length << (Math.min(libapminsightbL.length, 5))) == 1) {
      shareblacky = [3 + homeiconD.length];
   }
   for (let l = 0; l < 1; l++) {
       let megaphoneJ: Array<any> = [760, 596];
       let iconarrowrightblackY = 5.0;
       let floaterD = true;
       let humidityg = 5;
      for (let a = 0; a < 1; a++) {
         floaterD = megaphoneJ.includes(iconarrowrightblackY);
      }
         humidityg ^= megaphoneJ.length / 3;
      while (2.11 <= (iconarrowrightblackY - 5.12) || floaterD) {
          let libhermes1 = 2;
          let h_managera = String.fromCharCode(97,99,99,111,114,100,105,110,103,0);
          let profileactivea: Array<any> = [896, 590];
          let righth = 0;
         floaterD = iconarrowrightblackY > 52.50;
         libhermes1 |= (h_managera == String.fromCharCode(49,0) ? profileactivea.length : h_managera.length);
         profileactivea = [3 >> (Math.min(1, Math.abs(libhermes1)))];
         righth |= h_managera.length;
         break;
      }
         megaphoneJ = [parseInt(`${iconarrowrightblackY}`)];
      let footballfieldc = floaterD ? !floaterD : floaterD;
      do {
         floaterD = megaphoneJ.length < humidityg;
         if (footballfieldc) {
            break;
         }
      } while (footballfieldc && (!floaterD));
      while ((iconarrowrightblackY / (Math.max(10, parseFloat(`${megaphoneJ.length}`)))) == 4.69 || 1 == (megaphoneJ.length - 3)) {
         megaphoneJ = [parseInt(`${iconarrowrightblackY}`) / (Math.max(megaphoneJ.length, 1))];
         break;
      }
         floaterD = 38.82 > iconarrowrightblackY;
          let traminij = String.fromCharCode(101,120,99,101,112,116,105,111,110,115,0);
          let defaultlogoA: Array<any> = [String.fromCharCode(112,97,114,115,101,117,116,105,108,115,0), String.fromCharCode(109,105,108,108,101,114,0)];
         floaterD = String.fromCharCode(70,0) == traminij;
         traminij += `${defaultlogoA.length << (Math.min(defaultlogoA.length, 2))}`;
         megaphoneJ = [parseInt(`${iconarrowrightblackY}`)];
         iconarrowrightblackY *= parseFloat(`${3}`);
          let elementsY: Array<any> = [760, 275, 572];
         humidityg -= parseInt(`${iconarrowrightblackY}`) | 1;
         elementsY.push(elementsY.length);
          let qaagT = 1;
          let incidentt: Array<any> = [495, 303, 139];
          let sportsi: Array<any> = [String.fromCharCode(111,110,103,111,105,110,103,0), String.fromCharCode(115,101,116,98,105,116,115,0), String.fromCharCode(114,101,110,100,101,114,97,98,108,101,0)];
         humidityg += 3 ^ parseInt(`${iconarrowrightblackY}`);
         qaagT |= sportsi.length;
         incidentt.push(3);
         sportsi = [1];
      emojihearth &= humidityg;
   }

    let deviceId = await DeviceInfo.getUniqueId();

   for (let f = 0; f < 2; f++) {
       let arrowL = 0;
       let chart5 = 4;
       let areaM = 2.0;
       let downloadM: Array<any> = [String.fromCharCode(114,101,105,109,112,111,114,116,0), String.fromCharCode(99,117,114,114,114,101,110,116,0)];
      for (let n = 0; n < 2; n++) {
         chart5 |= downloadM.length;
      }
      if (4 > arrowL) {
         arrowL >>= Math.min(5, Math.abs(3));
      }
      for (let y = 0; y < 3; y++) {
         downloadM = [arrowL ^ 1];
      }
          let traminiC = 3;
         downloadM = [traminiC & chart5];
       let logo0 = String.fromCharCode(103,105,103,97,98,121,116,101,0);
       let lango = String.fromCharCode(108,105,98,99,111,100,101,99,0);
       let lightN = 2;
          let handlerF = 5;
          let minio = 5.0;
         downloadM = [3 ^ lightN];
         handlerF <<= Math.min(4, Math.abs(parseInt(`${minio}`)));
         minio += handlerF ^ 2;
      for (let m = 0; m < 2; m++) {
         chart5 %= Math.max(3, 1 & logo0.length);
      }
      while (downloadM.length >= 3) {
          let imagenomoredataB: Map<any, any> = new Map([[String.fromCharCode(121,114,121,105,0),String.fromCharCode(115,117,98,115,116,97,116,101,0)], [String.fromCharCode(116,102,117,101,108,0),String.fromCharCode(109,111,100,112,108,117,103,0)], [String.fromCharCode(97,117,116,111,114,101,102,114,101,115,104,0),String.fromCharCode(101,120,112,97,110,100,101,114,0)]]);
          let bell3: Array<any> = [65, 152, 573];
          let predictionactiveP = String.fromCharCode(106,117,103,103,108,101,0);
          let notificationfillemptyC = String.fromCharCode(114,101,112,108,97,121,101,100,0);
          let fastforward7: Array<any> = [String.fromCharCode(119,101,105,103,104,116,120,0), String.fromCharCode(115,112,101,99,105,102,105,99,97,116,105,111,110,0), String.fromCharCode(97,103,101,110,116,0)];
         downloadM = [logo0.length];
         imagenomoredataB = new Map([[`${fastforward7.length}`, 3]]);
         bell3 = [1 & predictionactiveP.length];
         predictionactiveP = `${imagenomoredataB.size}`;
         notificationfillemptyC = "2";
         fastforward7.push(imagenomoredataB.size);
         break;
      }
         arrowL >>= Math.min(Math.abs(3 - parseInt(`${areaM}`)), 2);
         lightN *= (lango == String.fromCharCode(105,0) ? lango.length : chart5);
         lightN += 1;
      emojihearth >>= Math.min(4, homeiconD.length);
   }
      libapminsightbL = "2";
      emojihearth ^= homeiconD.length;
       let abouta = String.fromCharCode(102,117,108,108,98,97,110,100,0);
       let libavcodecX = 2;
       let zhengpianc = String.fromCharCode(105,110,116,101,114,108,101,97,118,101,100,0);
          let favoriteJ: Map<any, any> = new Map([[String.fromCharCode(110,97,118,105,103,97,116,101,100,0),169], [String.fromCharCode(100,99,97,100,97,116,97,0),465], [String.fromCharCode(100,101,97,100,105,110,101,0),815]]);
          let catalogz = String.fromCharCode(117,110,97,114,99,104,105,118,101,100,0);
         libavcodecX *= abouta.length / (Math.max(1, 6));
         favoriteJ = new Map([[`${favoriteJ.size}`, catalogz.length]]);
         catalogz = "1";
          let launcherp = 3;
          let basketballawayteamv = String.fromCharCode(106,115,116,121,112,101,0);
          let vignettem = String.fromCharCode(102,111,114,101,97,99,104,0);
         zhengpianc = `${2 | launcherp}`;
         launcherp -= 2;
         basketballawayteamv = `${basketballawayteamv.length + vignettem.length}`;
         vignettem += `${(vignettem == String.fromCharCode(98,0) ? vignettem.length : basketballawayteamv.length)}`;
      while (5 < (libavcodecX & abouta.length) || 5 < (libavcodecX & abouta.length)) {
          let china6 = 1.0;
          let mapbufferM: Map<any, any> = new Map([[String.fromCharCode(117,109,98,114,101,108,108,97,0),692], [String.fromCharCode(97,99,99,0),351]]);
         libavcodecX >>= Math.min(Math.abs(2 - libavcodecX), 2);
         china6 -= parseInt(`${china6}`) - mapbufferM.size;
         mapbufferM.set(`${china6}`, mapbufferM.size);
         break;
      }
      while (!abouta.includes(`${libavcodecX}`)) {
         libavcodecX |= 3;
         break;
      }
          let stringM = String.fromCharCode(105,110,116,101,114,114,117,112,116,101,100,0);
          let coree = String.fromCharCode(105,110,116,101,103,114,97,108,0);
         libavcodecX += 3;
         stringM = `${1 - stringM.length}`;
         coree += `${(String.fromCharCode(68,0) == coree ? coree.length : stringM.length)}`;
      if (5 <= (libavcodecX / 5) && 2 <= (libavcodecX / 5)) {
          let basketballdetailsbgG = String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,115,0);
          let imagenetworkerry = 0.0;
          let libcxxcomponents2: Array<any> = [470, 303];
         zhengpianc += "3";
         basketballdetailsbgG += `${basketballdetailsbgG.length}`;
         imagenetworkerry *= (parseFloat(`${String.fromCharCode(51,0) == basketballdetailsbgG ? basketballdetailsbgG.length : libcxxcomponents2.length}`));
         libcxxcomponents2.push(basketballdetailsbgG.length | 3);
      }
       let roott = 5;
       let arrowdowno = 0;
       let moonn = 5.0;
      for (let c = 0; c < 1; c++) {
         moonn /= Math.max(3, parseFloat(`${parseInt(`${moonn}`) * abouta.length}`));
      }
      emojihearth %= Math.max(libapminsightbL.length, 5);
   let predictionbannersharedb = homeloadingP.length <= 7247063;
   do {
       let yellowvideoliveR = String.fromCharCode(99,111,114,100,122,0);
       let foundh: Map<any, any> = new Map([[String.fromCharCode(114,102,102,116,98,0),805], [String.fromCharCode(114,101,112,111,114,116,0),126], [String.fromCharCode(102,105,101,108,100,0),833]]);
       let renewM = String.fromCharCode(102,95,56,49,0);
       let downarroww = true;
         yellowvideoliveR = `${foundh.size}`;
      let streamingA = 6291663 >= yellowvideoliveR.length;
      do {
          let nativeex8 = String.fromCharCode(98,102,114,97,99,116,105,111,110,0);
          let stationp: Array<any> = [70, 302, 630];
          let mbbanner2 = 5.0;
         yellowvideoliveR = `${renewM.length}`;
         nativeex8 += `${nativeex8.length + 3}`;
         stationp = [1 - stationp.length];
         mbbanner2 -= parseFloat(`${stationp.length << (Math.min(2, Math.abs(parseInt(`${mbbanner2}`))))}`);
         if (streamingA) {
            break;
         }
      } while ((!downarroww) && streamingA);
      let shareblackh = 8852034 >= foundh.size;
      do {
         foundh.set(yellowvideoliveR, 1);
         if (shareblackh) {
            break;
         }
      } while ((3 >= (foundh.size / 3)) && shareblackh);
      for (let j = 0; j < 1; j++) {
         foundh.set(`${yellowvideoliveR}`, 2);
      }
         foundh = new Map([[`${foundh.size}`, foundh.size]]);
          let emptyc: Array<any> = [173, 674, 859];
          let hometeamfieldd = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,0);
          let incident_ = 0.0;
         downarroww = emptyc.length <= 62 && 62 <= foundh.size;
         emptyc = [parseInt(`${incident_}`)];
         hometeamfieldd += `${2 ^ hometeamfieldd.length}`;
         incident_ -= parseFloat(`${parseInt(`${incident_}`) ^ hometeamfieldd.length}`);
       let libfile2 = String.fromCharCode(111,116,104,101,114,115,0);
       let component3 = String.fromCharCode(109,105,120,105,110,103,0);
          let castV: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,0),String.fromCharCode(105,110,116,114,105,110,0)], [String.fromCharCode(97,117,116,104,111,114,105,122,101,0),String.fromCharCode(119,97,114,110,105,110,103,0)], [String.fromCharCode(114,103,98,110,0),String.fromCharCode(112,114,111,98,97,98,108,101,0)]]);
          let androidW = String.fromCharCode(100,111,99,116,111,116,97,108,0);
          let gmaile = 3.0;
         downarroww = downarroww && component3.length < 15;
         castV.set(`${androidW}`, androidW.length);
         gmaile += 3;
          let leftj = String.fromCharCode(109,105,103,114,97,116,101,100,0);
          let shootO: Map<any, any> = new Map([[String.fromCharCode(98,111,111,116,104,0),237], [String.fromCharCode(97,118,97,105,108,0),881]]);
          let langN = String.fromCharCode(120,99,98,103,114,97,98,0);
         yellowvideoliveR += `${(String.fromCharCode(104,0) == langN ? foundh.size : langN.length)}`;
         leftj += `${shootO.size}`;
         shootO.set(leftj, 1 + shootO.size);
         yellowvideoliveR = `${yellowvideoliveR.length}`;
         yellowvideoliveR = `${yellowvideoliveR.length}`;
         component3 += `${libfile2.length}`;
      homeloadingP = [1 & orientationR];
      if (predictionbannersharedb) {
         break;
      }
   } while ((!k_lockf.startsWith(`${homeloadingP.length}`)) && predictionbannersharedb);
      homeloadingP.push(orientationR);
   if (homeloadingP.length < emojihearth) {
       let whistler = String.fromCharCode(114,101,110,100,101,114,101,114,0);
      if (4 > whistler.length) {
          let productk: Array<any> = [812, 866, 635];
         whistler = `${productk.length ^ 3}`;
      }
      for (let q = 0; q < 2; q++) {
          let referrerb = String.fromCharCode(99,111,100,101,99,0);
          let questicon8: Array<any> = [44, 533, 153];
          let defaultteamH = 5;
         whistler = `${whistler.length + defaultteamH}`;
         referrerb = `${referrerb.length}`;
         questicon8.push((String.fromCharCode(110,0) == referrerb ? referrerb.length : questicon8.length));
         defaultteamH /= Math.max(3, questicon8.length - referrerb.length);
      }
         whistler = `${(whistler == String.fromCharCode(74,0) ? whistler.length : whistler.length)}`;
      emojihearth -= 3 % (Math.max(1, libapminsightbL.length));
   }
   if (!main_bi.includes(emojihearth)) {
      main_bi = [homeiconD.length];
   }
   while (homeiconD.endsWith(`${emojihearth}`)) {
      homeiconD = `${shareblacky.length / (Math.max(k_lockf.length, 2))}`;
      break;
   }
      main_bi = [2 << (Math.min(4, Math.abs(expiredS.size)))];
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
    yys_giftbutton_footballtrophy.profileBannerViewAnalytics({
      ads_id: id,
      ads_name: name,
      ads_slot_id: slot_id,
      ads_title: title,
    });
  }, []);

  const onBannerPress = useCallback(({ id, name, slot_id, title }: any) => {
    yys_giftbutton_footballtrophy.profileBannerClickAnalytics({
      ads_id: id,
      ads_name: name,
      ads_slot_id: slot_id,
      ads_title: title,
    });
  }, []);



  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);

  const renderOverlay = () => {
       let robotoV = String.fromCharCode(97,114,116,105,102,97,99,116,0);
    let playercommoni = String.fromCharCode(104,97,110,103,0);
    let countdownS: Map<any, any> = new Map([[String.fromCharCode(112,101,99,101,110,116,0),String.fromCharCode(100,115,104,111,119,0)], [String.fromCharCode(116,121,112,101,115,116,114,0),String.fromCharCode(99,104,105,108,100,0)], [String.fromCharCode(109,101,100,105,117,109,116,104,114,101,115,104,0),String.fromCharCode(102,97,115,116,109,97,116,104,0)]]);
    let cornerg: Map<any, any> = new Map([[String.fromCharCode(119,105,100,101,115,99,114,101,101,110,0),true ], [String.fromCharCode(98,108,97,107,101,0),false ]]);
    let showmore_ = 0.0;
    let chinasamep = 0.0;
    let iconschedule2: Map<any, any> = new Map([[String.fromCharCode(115,116,101,112,115,105,122,101,0),391], [String.fromCharCode(115,117,98,100,97,116,97,0),523], [String.fromCharCode(105,110,110,101,114,0),405]]);
    let flipperr = 3;
    let submito = String.fromCharCode(100,98,108,105,110,116,0);
    let disconnectedR = String.fromCharCode(115,101,116,116,105,103,110,115,0);
    let sinad: Array<any> = [942, 38, 42];
      showmore_ *= 1 >> (Math.min(5, disconnectedR.length));
   for (let c = 0; c < 1; c++) {
       let aboutl = String.fromCharCode(115,112,101,97,107,101,114,115,0);
       let trasha = true;
       let shared9: Map<any, any> = new Map([[String.fromCharCode(115,116,97,98,105,108,105,122,101,0),String.fromCharCode(115,104,97,114,101,100,0)], [String.fromCharCode(120,105,110,99,0),String.fromCharCode(97,110,110,111,116,97,116,101,0)], [String.fromCharCode(114,97,105,115,101,100,0),String.fromCharCode(112,117,98,101,120,112,0)]]);
       let logousero = String.fromCharCode(101,120,116,114,97,99,116,101,100,0);
       let nendR = 3.0;
       let zooms = 3.0;
         logousero = `${2 + parseInt(`${zooms}`)}`;
      while (4 <= aboutl.length) {
         aboutl = `${(String.fromCharCode(112,0) == logousero ? shared9.size : logousero.length)}`;
         break;
      }
         zooms -= 1;
         nendR += ((trasha ? 5 : 2) ^ parseInt(`${nendR}`));
         zooms += 3;
       let trophyr: Map<any, any> = new Map([[String.fromCharCode(101,120,116,110,0),226], [String.fromCharCode(114,101,99,116,97,110,103,108,101,0),647], [String.fromCharCode(102,116,118,108,97,115,116,110,111,100,101,0),588]]);
         aboutl += `${(aboutl == String.fromCharCode(87,0) ? aboutl.length : logousero.length)}`;
       let mountingX: Array<any> = [String.fromCharCode(99,104,114,111,109,105,110,97,110,99,101,0), String.fromCharCode(101,100,103,101,0)];
      while (5 == (2 - mountingX.length) || (2 - mountingX.length) == 3) {
          let stylesM = true;
          let customh = 0;
          let footballfieldb = String.fromCharCode(109,101,114,103,101,0);
          let friendsQ: Array<any> = [String.fromCharCode(117,114,108,0), String.fromCharCode(115,117,112,112,111,114,116,0)];
          let videojsg = false;
         aboutl = `${aboutl.length}`;
         stylesM = footballfieldb.endsWith(`${customh}`);
         customh >>= Math.min(5, Math.abs(customh % 1));
         footballfieldb += "3";
         friendsQ = [2 ^ friendsQ.length];
         videojsg = 90 > customh;
         break;
      }
         zooms /= Math.max(aboutl.length ^ trophyr.size, 4);
         nendR -= 2;
      iconschedule2.set(`${showmore_}`, 3);
   }
   let signinupH = disconnectedR == String.fromCharCode(119,120,116,57,101,113,121,51,0);
   do {
      disconnectedR = `${(robotoV == String.fromCharCode(54,0) ? robotoV.length : iconschedule2.size)}`;
      if (signinupH) {
         break;
      }
   } while ((3 < (3 + countdownS.size) || (countdownS.size + 3) < 5) && signinupH);
   for (let k = 0; k < 1; k++) {
      showmore_ -= playercommoni.length;
   }
       let ccdfbdabcabbbedbM: Map<any, any> = new Map([[String.fromCharCode(119,105,114,101,0),89], [String.fromCharCode(108,111,110,103,101,115,116,0),133], [String.fromCharCode(100,111,119,110,115,104,105,102,116,0),388]]);
       let reactnativejsP: Array<any> = [128, 59];
       let zoom5 = String.fromCharCode(104,105,103,104,108,105,103,104,116,101,100,0);
      for (let n = 0; n < 1; n++) {
         ccdfbdabcabbbedbM.set(`${reactnativejsP.length}`, ccdfbdabcabbbedbM.size - 1);
      }
         reactnativejsP.push(ccdfbdabcabbbedbM.size);
         reactnativejsP.push(3);
         reactnativejsP = [3 + ccdfbdabcabbbedbM.size];
      while (2 == ccdfbdabcabbbedbM.size) {
         reactnativejsP = [(String.fromCharCode(71,0) == zoom5 ? zoom5.length : reactnativejsP.length)];
         break;
      }
      for (let v = 0; v < 3; v++) {
         zoom5 += `${(zoom5 == String.fromCharCode(76,0) ? zoom5.length : reactnativejsP.length)}`;
      }
      for (let n = 0; n < 2; n++) {
          let imageactionlive0 = String.fromCharCode(109,105,100,116,111,110,101,115,0);
         ccdfbdabcabbbedbM.set(`${zoom5}`, ccdfbdabcabbbedbM.size * 1);
         imageactionlive0 = `${imageactionlive0.length | imageactionlive0.length}`;
      }
          let profileinactiveA = 3.0;
         zoom5 += `${zoom5.length}`;
         profileinactiveA += parseInt(`${profileinactiveA}`) * parseInt(`${profileinactiveA}`);
      for (let c = 0; c < 1; c++) {
         reactnativejsP = [reactnativejsP.length];
      }
      countdownS = new Map([[`${reactnativejsP.length}`, robotoV.length << (Math.min(5, reactnativejsP.length))]]);
      showmore_ += (String.fromCharCode(76,0) == disconnectedR ? robotoV.length : disconnectedR.length);
      chinasamep += parseFloat(`${2}`);
      playercommoni = `${1 ^ countdownS.size}`;
      submito += `${iconschedule2.size * countdownS.size}`;
      showmore_ -= (playercommoni == String.fromCharCode(117,0) ? playercommoni.length : cornerg.size);
      disconnectedR += `${(submito == String.fromCharCode(56,0) ? cornerg.size : submito.length)}`;
      iconschedule2 = new Map([[`${countdownS.size}`, parseInt(`${showmore_}`) | 3]]);
   for (let s = 0; s < 2; s++) {
       let libavutilG = String.fromCharCode(100,114,97,102,116,0);
       let loginsuccess8 = 3.0;
         loginsuccess8 += libavutilG.length;
      for (let b = 0; b < 3; b++) {
         loginsuccess8 += (libavutilG == String.fromCharCode(117,0) ? parseInt(`${loginsuccess8}`) : libavutilG.length);
      }
       let orangedownarrowC = 5.0;
       let anytimeb = 0.0;
      for (let k = 0; k < 2; k++) {
          let paginationV = false;
          let dropdownL = 4.0;
          let shootyesgoalb = String.fromCharCode(116,114,116,97,98,108,101,0);
          let loadings = String.fromCharCode(119,97,108,115,104,120,0);
          let questiconT = String.fromCharCode(114,116,109,112,101,0);
         orangedownarrowC *= parseFloat(`${1 ^ loadings.length}`);
         paginationV = shootyesgoalb == questiconT;
         dropdownL /= Math.max(parseFloat(`${parseInt(`${dropdownL}`)}`), 5);
         shootyesgoalb += `${(questiconT == String.fromCharCode(79,0) ? shootyesgoalb.length : questiconT.length)}`;
         loadings = `${(parseInt(`${dropdownL}`) >> (Math.min(3, Math.abs((paginationV ? 3 : 4)))))}`;
      }
      let privilegew = anytimeb <= 8686167.0;
      do {
         anytimeb += parseFloat(`${1}`);
         if (privilegew) {
            break;
         }
      } while (privilegew && (5 <= (4 * libavutilG.length) || (anytimeb + 3.64) <= 3.43));
      let xvod9 = anytimeb >= 5691672.0;
      do {
          let white0 = String.fromCharCode(97,100,100,120,0);
          let runtimeschedulerG = String.fromCharCode(101,110,99,105,112,104,101,114,0);
          let awayplayerj = false;
          let iconwatchnowl = String.fromCharCode(105,102,102,116,0);
         anytimeb /= Math.max(parseFloat(`${2}`), 2);
         white0 += `${(String.fromCharCode(70,0) == iconwatchnowl ? (awayplayerj ? 3 : 4) : iconwatchnowl.length)}`;
         runtimeschedulerG = `${runtimeschedulerG.length}`;
         awayplayerj = awayplayerj && runtimeschedulerG.length < 27;
         if (xvod9) {
            break;
         }
      } while (xvod9 && (!libavutilG.includes(`${anytimeb}`)));
      submito = "2";
   }
      iconschedule2.set(`${chinasamep}`, 3 ^ parseInt(`${showmore_}`));
       let relatedA: Map<any, any> = new Map([[String.fromCharCode(116,111,111,108,98,111,120,0),String.fromCharCode(99,111,110,102,108,105,99,116,115,0)], [String.fromCharCode(97,108,101,114,116,115,0),String.fromCharCode(98,105,116,115,116,114,101,97,109,0)]]);
       let containerY: Array<any> = [10, 220];
       let applicationv = String.fromCharCode(100,111,110,97,116,101,0);
         containerY.push(3);
         containerY = [applicationv.length | 3];
       let dicelogoX = true;
       let langkeyO = true;
      for (let m = 0; m < 1; m++) {
          let iconarrowright1 = String.fromCharCode(97,99,97,108,99,0);
          let condensedK = 0.0;
          let placementm = 4;
          let auto_ji: Array<any> = [737, 171];
         applicationv = `${auto_ji.length}`;
         iconarrowright1 = "3";
         condensedK /= Math.max(parseInt(`${condensedK}`) & placementm, 5);
         placementm >>= Math.min(Math.abs(placementm), 3);
         auto_ji = [3 * placementm];
      }
         relatedA.set(`${dicelogoX}`, (containerY.length % (Math.max(1, (dicelogoX ? 3 : 3)))));
         dicelogoX = !dicelogoX;
      for (let y = 0; y < 1; y++) {
          let projectM = 1.0;
          let iconmorew = String.fromCharCode(116,117,114,110,0);
          let tailj: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,115,0),230], [String.fromCharCode(114,117,110,108,111,111,112,0),572], [String.fromCharCode(105,110,115,101,114,116,101,114,0),753]]);
          let combine6: Array<any> = [198, 590];
         applicationv = `${applicationv.length * 1}`;
         projectM /= Math.max(4, parseFloat(`${parseInt(`${projectM}`)}`));
         iconmorew = `${(String.fromCharCode(99,0) == iconmorew ? iconmorew.length : combine6.length)}`;
         tailj.set(`${iconmorew}`, 3);
         combine6.push(parseInt(`${projectM}`) >> (Math.min(combine6.length, 1)));
      }
          let mbjscommonT = 4.0;
          let arrowselectdown7 = 1;
         dicelogoX = !langkeyO;
         mbjscommonT -= parseFloat(`${arrowselectdown7 / 1}`);
         arrowselectdown7 -= 2;
      for (let j = 0; j < 3; j++) {
         relatedA.set(`${containerY.length}`, relatedA.size);
      }
      flipperr >>= Math.min(Math.abs(3), 1);
   if (robotoV.length < 5 || 5 < disconnectedR.length) {
      disconnectedR += `${iconschedule2.size}`;
   }
   for (let o = 0; o < 2; o++) {
      iconschedule2 = new Map([[`${cornerg.size}`, cornerg.size | robotoV.length]]);
   }
      robotoV = `${countdownS.size}`;
   let iconuserD = disconnectedR.length >= 5028017;
   do {
      disconnectedR += "2";
      if (iconuserD) {
         break;
      }
   } while (iconuserD && (disconnectedR.length > 2));
   while ((2 & cornerg.size) > 5 && (2 & cornerg.size) > 1) {
      cornerg = new Map([[`${cornerg.size}`, submito.length % (Math.max(2, 5))]]);
      break;
   }
   for (let h = 0; h < 1; h++) {
      submito += `${flipperr}`;
   }
   while (!disconnectedR.includes(playercommoni)) {
      disconnectedR += `${2 - countdownS.size}`;
      break;
   }
      robotoV = `${playercommoni.length}`;
   for (let r = 0; r < 3; r++) {
       let giflivestreamingE = 5;
       let terms7 = 2;
       let stationw = 0.0;
       let iconarrowrightblack4 = String.fromCharCode(119,104,101,114,101,0);
       let homeplayerP = String.fromCharCode(99,105,114,99,108,101,100,0);
      while (4.96 < (stationw - 3.92)) {
         homeplayerP = `${terms7 | 1}`;
         break;
      }
       let arrowL = String.fromCharCode(97,100,116,115,116,111,97,115,99,0);
      let areaz = homeplayerP.length <= 7789789;
      do {
         homeplayerP += `${arrowL.length}`;
         if (areaz) {
            break;
         }
      } while (areaz && (2 > (homeplayerP.length << (Math.min(1, Math.abs(giflivestreamingE)))) || (2 << (Math.min(4, Math.abs(giflivestreamingE)))) > 2));
      if ((1 >> (Math.min(3, arrowL.length))) > 3 && 3 > (1 | arrowL.length)) {
         stationw *= 3 * arrowL.length;
      }
      let penaltyf = 9839870.0 <= stationw;
      do {
          let updatesO = 3.0;
          let internetj = String.fromCharCode(115,97,110,105,116,105,122,101,114,0);
          let adultc = 3;
          let libfbu = 3.0;
          let short_6n = String.fromCharCode(115,101,97,108,0);
         stationw -= 3;
         updatesO *= adultc ^ internetj.length;
         internetj += `${parseInt(`${updatesO}`) * 1}`;
         adultc *= short_6n.length;
         libfbu /= Math.max(3, parseFloat(`${2 ^ parseInt(`${libfbu}`)}`));
         short_6n += "1";
         if (penaltyf) {
            break;
         }
      } while (penaltyf && (!homeplayerP.startsWith(`${stationw}`)));
       let ying5 = false;
       let auto_oH = false;
      for (let r = 0; r < 1; r++) {
          let loadingU = false;
          let penalty9 = false;
         arrowL = `${homeplayerP.length ^ 3}`;
         loadingU = loadingU || !penalty9;
         penalty9 = !loadingU;
      }
      while (arrowL.endsWith(homeplayerP)) {
         arrowL = "1";
         break;
      }
         giflivestreamingE <<= Math.min(Math.abs(giflivestreamingE), 3);
      if (ying5) {
         arrowL += `${((auto_oH ? 2 : 2) >> (Math.min(homeplayerP.length, 2)))}`;
      }
      for (let w = 0; w < 1; w++) {
         ying5 = 91 > terms7;
      }
          let navigationZ = 1;
          let iconpipexpandp = 3;
          let inouttargetredM: Array<any> = [181, 133];
         auto_oH = 65 <= giflivestreamingE;
         navigationZ |= 3 & iconpipexpandp;
         iconpipexpandp ^= navigationZ;
         inouttargetredM.push(iconpipexpandp);
         homeplayerP += "3";
          let lang4 = 1.0;
          let redgoal6 = 2.0;
         ying5 = iconarrowrightblack4.length == 96 && auto_oH;
         lang4 += parseInt(`${lang4}`) - 1;
         redgoal6 /= Math.max(parseFloat(`${1}`), 2);
         homeplayerP = `${2 | homeplayerP.length}`;
      disconnectedR = `${homeplayerP.length}`;
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


    
    if (yysIconstar.isGuest(userState.user) && yysIconstar.isVip(userState.user)) {
      setShowBecomeVIPOverlay(true)
    }
  }, []);


  
  
  
  
  


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

              if (!yysIconstar.isLogin(userState.user)) {
                dispatch(showLoginAction());
                
                
                
              } else {
                navigation.navigate("个人中心");
              }
            }}
          >
            <View
              style={{
                ...styles.btnHeader,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                {!yysIconstar.isLogin(userState.user) || Platform.OS === "android" ? (
                  <ProfileSvg
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
                    source={require("../../../static/images/loadingspinnerPlaylist.png")}
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
                  {yysIconstar.isGuest(userState.user) && (
                    <>
                      <Text style={{ color: "#ffffff", fontSize: 14 }}>
                        游客ID:
                      </Text>
                      <Text style={{ color: "#ffffff", fontSize: 20 }}>
                        {deviceUniqueId.slice(0, 16)}
                      </Text>
                    </>
                  )}
                  {yysIconstar.isLogin(userState.user) && (
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
                          {userState.user.userName}
                        </Text>


                        {yysIconstar.isVip(userState.user) && (
                          <Image
                            style={styles.iconStyle}
                            source={require("../../../static/images/profile/flipperHomeloadingShared.png")}
                          />
                        )}
                      </View>

                      {/* {userState.userMemberExpired == '0' && (
                      <Text style={{fontSize: 14}}>VIP会员已经到期</Text>
                    )} */}
                      {yysIconstar.isVip(userState.user) &&
                        (
                          <Text style={{ color: colors.primary, fontSize: 14 }}>
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
                  {yysIconstar.isLogin(userState.user) && (
                    <EditSvg width={29} height={29} color={colors.muted} />
                  )}
                </View>
              </View>
              { }
              {yysIconstar.isGuest(userState.user) &&
                !yysIconstar.isVip(userState.user) && (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingTop: 10,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "white" }}>
                      游客您好，登录可享有跟多服务{" "}
                    </Text>

                    <View
                      style={{
                        backgroundColor: "#FAC33D",
                        paddingHorizontal: 16,
                        paddingVertical: 5,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={{ color: "#000", fontWeight: "700" }}>
                        登录{" "}
                      </Text>
                    </View>
                  </View>
                )}

              { }
              {yysIconstar.isGuest(userState.user) &&
                yysIconstar.isVip(userState.user) && (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingTop: 10,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: colors.primary }}>
                      VIP会员有效日期至{displayedDate}
                    </Text>

                    <View
                      style={{
                        backgroundColor: "#FAC33D",
                        paddingHorizontal: 16,
                        paddingVertical: 5,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={{ color: "#000", fontWeight: "700" }}>
                        登录{" "}
                      </Text>
                    </View>
                  </View>
                )}
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
                      <VipIconSvg width={icons.sizes.l} height={icons.sizes.l} />
                    </View>
                    <View style={{ gap: 5 }}>
                      <Text
                        style={{
                          ...textVariants.body,
                        }}
                      >
                        {highlightText(
                          yysFloaterIconsubssuccess.instance.showBecomeVip
                            ? "成为VIP"
                            : "付费VIP",
                          ""
                        )}
                      </Text>
                      {yysFloaterIconsubssuccess.instance.tabConfig != null &&
                        yysFloaterIconsubssuccess.instance.len == 5 ? (
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

                    if (yysIconstar.isGuest(userState.user)) {
                      dispatch(showLoginAction());
                    }
                    else {
                      navigation.navigate("邀请");
                    }

                  }}
                >
                  <View style={styles.left}>
                    <View style={styles.icon}>
                      <AddSvg width={icons.sizes.l} height={icons.sizes.l} />
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

            {!SHOW_ZF_CONST && (
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
                    <VipIconSvg width={icons.sizes.l} height={icons.sizes.l} />
                  </View>

                  <Text
                    style={{
                      ...textVariants.body,
                    }}
                  >
                    {highlightText("邀请好友获得VIP奖励，享更多权益", "VIP")}
                  </Text>
                </View>

                <VipArrowSvg
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
                    <VipIcon width={icons.sizes.l} height={icons.sizes.l} />
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
              leftIcon={<DownloadSvg style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("我的下载")}
            />}
            <ShowMoreButton
              text="我的收藏"
              leftIcon={<CollectionSvg style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("我的收藏")}
            />
            {/* <ShowMoreButton
              text="我的下载"
              leftIcon={<DownloadIcon style={{color: colors.button}} />}
              onPress={() => setIsDialogOpen(true)}
            /> */}
            <ShowMoreButton
              text="播放历史"
              leftIcon={<HistorySvg style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("播放历史")}
            />
            <ShowMoreButton
              text="我要反馈"
              leftIcon={<FeedbackSvg style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("反馈")}
            />
            <ShowMoreButton
              text="设置"
              leftIcon={<SettingsSvg style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("设置")}
            />
            <ShowMoreButton
              text="关于我们"
              leftIcon={<InfoSvg style={{ color: colors.button }} />}
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
