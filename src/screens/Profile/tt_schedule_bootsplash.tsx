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
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { ttOrange } from "@redux/tt_updates_bottom";
import ShowMoreButton from "../../components/button/tt_hongkong_button";

import CollectionIcon from "@static/images/listUserGesture.svg";
import HistoryIcon from "@static/images/hoverInterstitial.svg";
import FeedbackIcon from "@static/images/redirectInfo.svg";
import SettingsIcon from "@static/images/expiredThumbnail.svg";
import InfoIcon from "@static/images/detailsConfigEighteen.svg";
import DownloadIcon from "@static/images/sliderCondensed.svg";
import { useNavigation } from "@react-navigation/native";

import Orientation from "react-native-orientation-locker";
import ProfileIcon from "@static/images/viewsLink.svg";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import MoreArrow from "@static/images/privilegeQuestCountry.svg";
import EditIcn from "@static/images/profile/teamNavigationMinimize.svg";

import VipIcon from "@static/images/halfAjax.svg";
import VipArrow from "@static/images/trophyDataActive.svg";
import AddIcon from "@static/images/vip/interstitialStore.svg";
import { ttConfigRecommendation } from "../../../tt_copy_floater";

import {
  hideBottomSheetAction,
  removeScreenAction,
  setShowGuestPurchaseSuccess,
  showLoginAction,
} from "@redux/actions/tt_copy_heji";
import NotificationModal from "../../components/modal/tt_countdown";
import { updateUserAuth, updateUserReferral } from "@redux/actions/tt_topon";
import ExpiredOverlay from "../../components/modal/tt_actions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DOWNLOAD_FEATURE_ENABLED, SHOW_ZF_CONST, UMENG_CHANNEL } from "@utility/tt_trophy_cross";
import FastImage from "../../components/common/tt_connection";
import { ttTramini } from "@api";
import { ttCalendarAdult } from "../../Sports/global/tt_ying";
import { BannerContainer } from "../../components/container/tt_injury";
import { ttAnalytics } from "@type/tt_line_borderless";
import { ttReactnativejsMalaysia } from "@utility/tt_side_description";
import { ttGemfile } from "../../constants/tt_chat";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ttDropdown } from "../../api/tt_refresh_friends";
import tt_humidity_guide from "../../../Umeng/tt_humidity_guide";
import DeviceInfo from "react-native-device-info";
import style from "../../Sports/components/matchDetails/liveChatPage/tt_with_success";
import { VipLoginAlertOverlay } from "../../components/modal/tt_video_next";
import { ttEntry } from "@redux/reducers/tt_dialog_rewind";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";

function Profile({ navigation, route }: BottomTabScreenProps<any>) {
  const navigator = useNavigation();
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [displayedDate, setDisplayedDate] = useState("");
  const userState = useSelector<ttGoal>('userReducer');
  const appState = useSelector<ttEntry>('backgroundReducer');
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bannerAd, setBannerAd] = useState<ttAnalytics[]>();

  const toggleOverlay = () => {
       let mbjscommonX = String.fromCharCode(115,116,97,114,116,114,101,101,0);
    let comment3: Array<any> = [String.fromCharCode(105,110,102,111,114,109,0), String.fromCharCode(105,103,110,111,114,101,100,0), String.fromCharCode(116,97,107,101,110,95,102,95,55,50,0)];
    let constants0 = String.fromCharCode(98,114,105,103,104,116,110,101,115,115,0);
    let mbnativeadvancedH = String.fromCharCode(98,121,116,101,119,111,114,100,0);
    let sentryl = String.fromCharCode(97,114,116,105,102,97,99,116,115,0);
    let casting5 = String.fromCharCode(117,114,112,111,115,101,0);
    let langN = String.fromCharCode(115,116,97,116,105,115,116,105,99,0);
    let register_0_J = String.fromCharCode(97,103,101,110,116,0);
    let taiwanr = 2;
    let fillP = String.fromCharCode(115,116,105,114,110,103,0);
    let themes: Map<any, any> = new Map([[String.fromCharCode(115,101,116,105,118,0),true ], [String.fromCharCode(99,111,110,118,111,108,118,101,95,112,95,51,56,0),true ]]);
    let reactnativejsf = 0.0;
   let sentry9 = 8525224 <= register_0_J.length;
   do {
       let lightX = 2.0;
       let bootsplashI = 0;
       let contextC = 4;
      if (contextC <= lightX) {
         contextC &= 3;
      }
         contextC &= 2 + contextC;
      register_0_J += `${mbnativeadvancedH.length}`;
      if (sentry9) {
         break;
      }
   } while (sentry9 && ((register_0_J.length - 1) >= 5 || (comment3.length - 1) >= 3));
      langN = `${sentryl.length}`;
   for (let j = 0; j < 3; j++) {
      constants0 += `${constants0.length % 2}`;
   }
      comment3 = [casting5.length * 2];
      constants0 += `${sentryl.length}`;
       let championh = 2.0;
       let sansW = String.fromCharCode(99,97,99,104,101,0);
      let configureL = championh >= 8986202.0;
      do {
         championh -= parseInt(`${championh}`);
         if (configureL) {
            break;
         }
      } while ((sansW.length >= 5) && configureL);
         sansW += `${parseInt(`${championh}`)}`;
       let detailsc = 2.0;
       let topicR = 2.0;
         detailsc += parseInt(`${championh}`);
      for (let z = 0; z < 1; z++) {
          let active3 = 3.0;
         topicR -= (sansW == String.fromCharCode(74,0) ? parseInt(`${championh}`) : sansW.length);
         active3 += parseFloat(`${parseInt(`${active3}`) + 3}`);
      }
       let spinnerG = String.fromCharCode(101,110,106,105,110,0);
       let refreshe = String.fromCharCode(111,108,108,101,99,116,105,111,110,115,0);
      mbjscommonX = "3";
   let mbnativel = register_0_J == String.fromCharCode(121,48,54,57,106,0);
   do {
      register_0_J = `${register_0_J.length}`;
      if (mbnativel) {
         break;
      }
   } while ((mbnativeadvancedH.length == 4) && mbnativel);
      langN = `${langN.length + sentryl.length}`;
   let blacklist_ = 7458200 >= comment3.length;
   do {
       let circlei = String.fromCharCode(98,110,104,101,120,0);
       let whatsapp1 = String.fromCharCode(114,95,57,51,95,103,114,111,117,110,100,0);
       let interstitialg = String.fromCharCode(99,101,110,99,0);
         interstitialg += "1";
      if (circlei.includes(whatsapp1)) {
          let gmailT = 1.0;
          let mbridget = String.fromCharCode(100,115,112,114,0);
         circlei = `${whatsapp1.length % 3}`;
         gmailT /= Math.max(3, parseFloat(`${parseInt(`${gmailT}`) / (Math.max(mbridget.length, 10))}`));
         mbridget += `${parseInt(`${gmailT}`)}`;
      }
       let clubV = true;
      if (whatsapp1.includes(`${circlei.length}`)) {
         whatsapp1 = `${3 >> (Math.min(1, circlei.length))}`;
      }
      let overlayU = interstitialg.length >= 6905877;
      do {
          let controls5 = String.fromCharCode(115,116,114,104,97,115,104,0);
         interstitialg = `${(interstitialg.length * (clubV ? 5 : 3))}`;
         controls5 += "2";
         if (overlayU) {
            break;
         }
      } while ((interstitialg.includes(`${circlei.length}`)) && overlayU);
         interstitialg += `${whatsapp1.length / 2}`;
      let frame_zx6 = 9361051 >= circlei.length;
      do {
         circlei += `${(whatsapp1 == String.fromCharCode(70,0) ? interstitialg.length : whatsapp1.length)}`;
         if (frame_zx6) {
            break;
         }
      } while (frame_zx6 && (whatsapp1 == String.fromCharCode(70,0)));
         clubV = 35 <= circlei.length && interstitialg == String.fromCharCode(105,0);
         whatsapp1 = `${((clubV ? 1 : 1) * circlei.length)}`;
      comment3.push(2);
      if (blacklist_) {
         break;
      }
   } while (((register_0_J.length >> (Math.min(Math.abs(2), 1))) > 2) && blacklist_);
      mbjscommonX = `${1 << (Math.min(1, register_0_J.length))}`;
   let over6 = String.fromCharCode(53,100,98,122,105,105,113,0) == register_0_J;
   do {
      register_0_J = `${(register_0_J == String.fromCharCode(73,0) ? register_0_J.length : casting5.length)}`;
      if (over6) {
         break;
      }
   } while (over6 && (register_0_J.length == 1));
   while (register_0_J.length <= comment3.length) {
       let filed8 = 1.0;
          let appsV = String.fromCharCode(105,102,97,115,116,0);
         filed8 /= Math.max(1, appsV.length << (Math.min(3, Math.abs(parseInt(`${filed8}`)))));
       let watch3 = String.fromCharCode(115,110,97,112,115,104,111,116,116,101,114,0);
      for (let z = 0; z < 1; z++) {
          let dicei: Array<any> = [600, 912];
          let fastv = String.fromCharCode(117,112,108,111,97,100,97,98,108,101,0);
          let flipperk = 1.0;
          let umengB = String.fromCharCode(107,95,54,48,95,98,97,110,100,101,100,0);
          let group9 = 3.0;
         watch3 += "3";
         dicei = [(String.fromCharCode(102,0) == umengB ? parseInt(`${group9}`) : umengB.length)];
         fastv = `${dicei.length >> (Math.min(Math.abs(1), 2))}`;
         flipperk -= parseFloat(`${parseInt(`${flipperk}`) % 2}`);
         group9 -= (parseFloat(`${fastv == String.fromCharCode(87,0) ? parseInt(`${group9}`) : fastv.length}`));
      }
      register_0_J += `${(mbjscommonX == String.fromCharCode(100,0) ? taiwanr : mbjscommonX.length)}`;
      break;
   }
   while (sentryl.length <= 1) {
       let default_yf = 0.0;
      for (let w = 0; w < 3; w++) {
          let morek = 2.0;
          let cornerX = 1.0;
          let scheduleE = String.fromCharCode(97,116,104,0);
          let nterstitialP = false;
         default_yf *= parseInt(`${cornerX}`);
         morek *= parseFloat(`${parseInt(`${morek}`) + 2}`);
         cornerX /= Math.max(parseFloat(`${3 & parseInt(`${morek}`)}`), 3);
         scheduleE = `${scheduleE.length}`;
         nterstitialP = !scheduleE.includes(`${nterstitialP}`);
      }
      for (let q = 0; q < 1; q++) {
          let sliderO: Map<any, any> = new Map([[String.fromCharCode(97,105,114,105,110,103,0),String.fromCharCode(115,117,98,116,105,116,108,101,115,0)], [String.fromCharCode(101,113,117,97,108,0),String.fromCharCode(102,102,97,116,0)]]);
         default_yf *= 1;
         sliderO = new Map([[`${sliderO.size}`, sliderO.size & 1]]);
      }
         default_yf *= parseInt(`${default_yf}`);
      mbjscommonX += `${constants0.length}`;
      break;
   }
      sentryl = `${(String.fromCharCode(75,0) == casting5 ? langN.length : casting5.length)}`;
       let incidents = String.fromCharCode(100,97,116,97,116,121,112,101,115,0);
         incidents = `${incidents.length << (Math.min(1, incidents.length))}`;
          let dycreatorF = 1.0;
          let launcher9 = String.fromCharCode(118,111,114,98,105,115,0);
         incidents += `${parseInt(`${dycreatorF}`) << (Math.min(launcher9.length, 1))}`;
      let memberM = incidents == String.fromCharCode(106,114,104,112,117,118,104,98,101,0);
      do {
         incidents = `${incidents.length}`;
         if (memberM) {
            break;
         }
      } while (memberM && (5 >= incidents.length));
      casting5 = `${incidents.length / 2}`;
   let s_imageV = langN == String.fromCharCode(121,113,107,121,0);
   do {
      langN = `${taiwanr}`;
      if (s_imageV) {
         break;
      }
   } while ((sentryl.length <= langN.length) && s_imageV);
   if (1 == (taiwanr % (Math.max(casting5.length, 4))) || 1 == (taiwanr % 1)) {
      casting5 = `${(String.fromCharCode(51,0) == sentryl ? sentryl.length : mbnativeadvancedH.length)}`;
   }

    setIsDialogOpen(!isDialogOpen);
  };

  const refreshUserState = async () => {
       let nalyticss: Array<any> = [String.fromCharCode(101,97,99,115,0), String.fromCharCode(115,112,114,105,110,103,0)];
    let utilsO = true;
    let interstitialg: Array<any> = [String.fromCharCode(105,102,105,108,116,101,114,0), String.fromCharCode(111,102,111,114,109,97,116,0)];
    let analyticsR = String.fromCharCode(120,95,55,48,95,105,110,102,111,115,0);
    let bingS = String.fromCharCode(102,95,54,54,95,114,97,116,105,111,110,97,108,0);
    let circleD: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,98,105,116,115,0),460], [String.fromCharCode(108,95,52,95,103,114,97,98,98,101,114,0),34], [String.fromCharCode(106,100,109,97,115,116,101,114,0),790]]);
    let nextB = 5.0;
    let module_ = 0.0;
    let filterp = String.fromCharCode(116,97,108,107,0);
    let downloading8 = String.fromCharCode(109,97,116,120,0);
    let awayE = true;
    let redirectk: Array<any> = [18, 43];
    let back8 = 1.0;
    let logoP = String.fromCharCode(108,111,116,116,105,101,112,114,111,120,121,109,111,100,101,108,0);
    let expiredb: Array<any> = [939, 404];
    let zhengpiano = 2;
    let regengf: Map<any, any> = new Map([[String.fromCharCode(108,101,97,102,110,111,100,101,0),969], [String.fromCharCode(98,111,110,106,111,117,114,0),108]]);
    let eact_ = String.fromCharCode(116,104,101,105,114,0);
    let orientationK = String.fromCharCode(115,116,101,110,99,105,108,0);
    let ajaxT = 1;
   if (1.11 >= (module_ * nextB)) {
      module_ -= (parseFloat(`${(utilsO ? 3 : 4) + 3}`));
   }
      filterp = `${2 ^ bingS.length}`;
      redirectk = [1 & downloading8.length];
      nalyticss.push(1 - parseInt(`${nextB}`));
   if (4 <= (2 >> (Math.min(5, interstitialg.length))) || (2 ^ interstitialg.length) <= 4) {
       let animationt = String.fromCharCode(119,101,108,115,0);
       let macauw: Array<any> = [173, 963];
       let screenw = String.fromCharCode(101,114,112,105,99,0);
       let matchesa = String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,0);
       let hearts = 3;
         matchesa += `${(screenw == String.fromCharCode(77,0) ? screenw.length : macauw.length)}`;
         animationt += `${(String.fromCharCode(99,0) == matchesa ? matchesa.length : macauw.length)}`;
      for (let j = 0; j < 3; j++) {
         animationt += `${1 & hearts}`;
      }
      if (3 <= animationt.length) {
         animationt += `${(String.fromCharCode(81,0) == screenw ? hearts : screenw.length)}`;
      }
          let floatingv = String.fromCharCode(116,105,109,105,110,103,115,97,102,101,0);
          let eventH = String.fromCharCode(97,114,97,98,105,99,95,118,95,51,49,0);
         screenw += `${hearts / (Math.max(matchesa.length, 6))}`;
         floatingv += `${floatingv.length / (Math.max(eventH.length, 8))}`;
         eventH = `${floatingv.length * 3}`;
         matchesa = "1";
          let dplusl: Array<any> = [String.fromCharCode(102,109,116,115,0), String.fromCharCode(97,114,114,0)];
         screenw += "1";
         dplusl.push(dplusl.length);
       let reactnativejso = String.fromCharCode(110,101,103,111,116,105,97,116,105,111,110,0);
       let shirto = String.fromCharCode(119,114,97,112,112,105,110,103,0);
      let gmaile = animationt == String.fromCharCode(114,51,101,51,95,114,0);
      do {
          let configureO = String.fromCharCode(114,101,116,114,121,97,98,108,101,0);
          let balln = 1.0;
          let scheduleD: Array<any> = [195, 373];
          let modityo = String.fromCharCode(100,97,121,115,0);
         animationt += `${screenw.length << (Math.min(2, Math.abs(hearts)))}`;
         configureO = `${configureO.length << (Math.min(Math.abs(3), 1))}`;
         balln += 2 ^ configureO.length;
         scheduleD.push(scheduleD.length);
         modityo = "1";
         if (gmaile) {
            break;
         }
      } while (gmaile && ((hearts & animationt.length) == 1));
      for (let p = 0; p < 1; p++) {
         matchesa = "1";
      }
         screenw += `${animationt.length % (Math.max(3, 6))}`;
      if (screenw.length > 2 || 2 > reactnativejso.length) {
          let ewardedC = String.fromCharCode(114,116,115,112,99,111,100,101,115,0);
          let gmailN = String.fromCharCode(99,101,110,116,114,97,108,108,121,0);
         reactnativejso = `${2 << (Math.min(4, ewardedC.length))}`;
         ewardedC = `${gmailN.length}`;
         gmailN = `${gmailN.length / 3}`;
      }
      let penaltyo = String.fromCharCode(57,106,107,0) == animationt;
      do {
         animationt = `${animationt.length & 1}`;
         if (penaltyo) {
            break;
         }
      } while (penaltyo && (animationt.endsWith(`${matchesa.length}`)));
      for (let o = 0; o < 1; o++) {
         shirto = `${reactnativejso.length ^ shirto.length}`;
      }
         shirto = `${3 * hearts}`;
      interstitialg = [2];
   }
      nextB /= Math.max(5, parseFloat(`${nalyticss.length}`));

    const result = await ttTramini.getUserDetails();

      nextB *= parseFloat(`${circleD.size ^ parseInt(`${module_}`)}`);
       let private_rt = 2.0;
       let router1: Map<any, any> = new Map([[String.fromCharCode(117,110,105,113,117,101,100,95,119,95,52,0),String.fromCharCode(114,101,99,111,110,105,110,116,114,97,120,0)], [String.fromCharCode(98,101,110,99,104,0),String.fromCharCode(121,95,54,52,95,100,105,115,99,114,101,116,101,0)]]);
      while ((router1.size * parseInt(`${private_rt}`)) == 1 || 2.25 == (5.7 * private_rt)) {
          let interstitialgY = 5.0;
          let klevinG = String.fromCharCode(118,99,120,112,114,111,106,0);
          let completeF = 4;
         private_rt -= klevinG.length;
         interstitialgY += parseInt(`${interstitialgY}`) >> (Math.min(5, Math.abs(completeF)));
         klevinG += "2";
         completeF -= completeF % (Math.max(parseInt(`${interstitialgY}`), 9));
         break;
      }
          let castf = 2;
          let username6 = 0;
         private_rt -= castf % (Math.max(5, parseInt(`${private_rt}`)));
         castf |= username6 % (Math.max(1, 1));
         username6 ^= 2;
         private_rt *= router1.size;
      let modityf = 7150076.0 >= private_rt;
      do {
         private_rt *= 1;
         if (modityf) {
            break;
         }
      } while ((3.92 <= (private_rt / (Math.max(7, router1.size)))) && modityf);
         router1.set(`${private_rt}`, parseInt(`${private_rt}`) % 2);
          let favoritee = 5;
         router1 = new Map([[`${favoritee}`, parseInt(`${private_rt}`)]]);
      analyticsR += `${3 << (Math.min(4, interstitialg.length))}`;
       let chatm: Array<any> = [432, 262];
       let footballh = 5;
         footballh += 1 + chatm.length;
      let yingl = 6286297 <= footballh;
      do {
          let corek = 5;
          let textQ = false;
         footballh |= 2 + chatm.length;
         corek |= corek | 1;
         textQ = !textQ;
         if (yingl) {
            break;
         }
      } while (yingl && ((footballh - 1) > 3 || (footballh - chatm.length) > 1));
         footballh ^= footballh * chatm.length;
      let downloadS = chatm.length >= 6759435;
      do {
         chatm.push(footballh % (Math.max(chatm.length, 7)));
         if (downloadS) {
            break;
         }
      } while (((footballh | chatm.length) <= 4 && 5 <= (chatm.length | 4)) && downloadS);
         footballh += footballh;
         chatm.push(chatm.length << (Math.min(3, Math.abs(footballh))));
      redirectk.push((String.fromCharCode(97,0) == analyticsR ? interstitialg.length : analyticsR.length));
   for (let k = 0; k < 2; k++) {
      bingS += `${(nalyticss.length * (utilsO ? 2 : 3))}`;
   }
   for (let c = 0; c < 1; c++) {
      module_ /= Math.max(4, parseFloat(`${downloading8.length - 2}`));
   }
      back8 /= Math.max(5, ((utilsO ? 1 : 3) % 1));
    if (result == null) {

   for (let h = 0; h < 3; h++) {
      interstitialg = [nalyticss.length];
   }
   let trashM = 6770042.0 <= back8;
   do {
      back8 -= parseInt(`${back8}`) / (Math.max(10, parseInt(`${module_}`)));
      if (trashM) {
         break;
      }
   } while (trashM && (interstitialg.length > parseInt(`${back8}`)));
   if (5 < (2 | downloading8.length)) {
       let dataA = String.fromCharCode(118,95,49,50,95,101,109,109,115,0);
       let statsw = 1.0;
      while ((statsw - 2.34) == 3.57 || (parseInt(`${statsw}`) - dataA.length) == 3) {
         statsw -= dataA.length ^ 3;
         break;
      }
      for (let d = 0; d < 3; d++) {
         dataA += "2";
      }
       let countdownv: Array<any> = [625, 70];
       let stations6: Array<any> = [414, 109, 491];
          let langkeyV = String.fromCharCode(98,108,111,119,102,105,115,104,0);
          let dangerv = String.fromCharCode(112,114,111,118,105,100,101,114,115,0);
          let moduleD: Map<any, any> = new Map([[String.fromCharCode(115,105,108,101,110,99,101,100,95,49,95,50,56,0),327], [String.fromCharCode(102,102,105,111,0),349]]);
         statsw *= 1;
         langkeyV += `${dangerv.length}`;
         dangerv = `${moduleD.size >> (Math.min(Math.abs(2), 3))}`;
         moduleD.set(langkeyV, (String.fromCharCode(72,0) == langkeyV ? moduleD.size : langkeyV.length));
      let current8 = countdownv.length <= 6867238;
      do {
          let event2 = 1.0;
          let upload8 = String.fromCharCode(98,121,116,101,115,116,114,105,110,103,0);
         countdownv.push(dataA.length);
         event2 -= parseFloat(`${2}`);
         upload8 += `${upload8.length % 1}`;
         if (current8) {
            break;
         }
      } while ((5 > (countdownv.length % 5) || (dataA.length % 5) > 2) && current8);
          let awayR = 5.0;
          let albumC: Map<any, any> = new Map([[String.fromCharCode(103,114,101,97,116,101,114,0),753], [String.fromCharCode(115,116,101,112,0),429]]);
         dataA = `${albumC.size}`;
         awayR += parseFloat(`${parseInt(`${awayR}`)}`);
         albumC = new Map([[`${awayR}`, parseInt(`${awayR}`)]]);
      nextB *= parseFloat(`${redirectk.length / (Math.max(2, 7))}`);
   }
      circleD.set(`${nextB}`, parseInt(`${nextB}`) + 3);
   for (let s = 0; s < 3; s++) {
       let appleE = String.fromCharCode(116,111,111,108,98,97,114,115,0);
       let rules7 = 5.0;
       let rewardvideod = 5;
      for (let w = 0; w < 2; w++) {
         rewardvideod *= appleE.length ^ 2;
      }
         rewardvideod ^= appleE.length & 1;
       let stringsX = String.fromCharCode(99,111,110,115,116,114,97,105,110,116,0);
       let colorsY = String.fromCharCode(101,113,117,105,118,97,108,101,110,99,101,0);
         appleE = `${appleE.length * stringsX.length}`;
          let dropdownL = true;
          let thailandy: Array<any> = [397, 358];
          let notificationC: Array<any> = [68, 109];
         colorsY = "3";
         dropdownL = (thailandy.length & notificationC.length) == 12;
         thailandy.push(1 / (Math.max(5, thailandy.length)));
         notificationC = [thailandy.length ^ notificationC.length];
      let baiduJ = stringsX.length >= 8930798;
      do {
         stringsX = "1";
         if (baiduJ) {
            break;
         }
      } while ((!stringsX.includes(appleE)) && baiduJ);
      if (2 <= stringsX.length) {
         colorsY = `${rewardvideod + 1}`;
      }
       let k_locky: Array<any> = [String.fromCharCode(107,95,54,48,95,119,114,97,112,112,105,110,103,0), String.fromCharCode(110,101,119,115,0), String.fromCharCode(121,118,99,111,110,102,105,103,95,113,95,53,54,0)];
       let linkJ: Array<any> = [72, 294];
      while ((parseInt(`${rules7}`) - appleE.length) > 5 && 2 > (appleE.length * 5)) {
         rules7 /= Math.max(2 + linkJ.length, 2);
         break;
      }
      module_ -= parseFloat(`${circleD.size}`);
   }
      expiredb = [(String.fromCharCode(117,0) == downloading8 ? (awayE ? 1 : 3) : downloading8.length)];
      return;
    }

    await dispatch(updateUserAuth(result));

      nextB *= parseFloat(`${2 & circleD.size}`);
      awayE = utilsO;
   for (let n = 0; n < 3; n++) {
      nextB += parseFloat(`${redirectk.length}`);
   }
   while (2.61 > (module_ - 3.35) && 3.13 > (3.35 - module_)) {
       let loadingi = 3;
       let splash1 = String.fromCharCode(111,112,116,105,109,105,122,101,114,0);
       let annerY = false;
       let greyG = String.fromCharCode(118,114,101,112,0);
          let klevinl = 3;
         greyG = `${loadingi}`;
         klevinl >>= Math.min(5, Math.abs(1));
         annerY = annerY || greyG.length >= 23;
       let circleg: Map<any, any> = new Map([[String.fromCharCode(97,100,100,114,0),157], [String.fromCharCode(107,110,111,119,110,0),924]]);
      let trophyv = annerY ? !annerY : annerY;
      do {
          let mintegralI = String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,115,0);
          let privilegeW = 5;
          let ajaxR = 5;
          let kickd = false;
          let logoutw = String.fromCharCode(100,105,97,103,110,111,115,116,105,99,115,0);
         annerY = annerY && loadingi > 40;
         mintegralI += "2";
         privilegeW *= (mintegralI == String.fromCharCode(71,0) ? (kickd ? 1 : 5) : mintegralI.length);
         ajaxR *= logoutw.length;
         logoutw += `${(mintegralI == String.fromCharCode(71,0) ? privilegeW : mintegralI.length)}`;
         if (trophyv) {
            break;
         }
      } while (trophyv && (2 < (circleg.size * 1)));
      while (splash1.includes(`${loadingi}`)) {
          let singaporeT = 0.0;
          let dropdownn = String.fromCharCode(97,118,100,101,118,105,99,101,114,101,115,0);
          let resend6 = false;
         splash1 = `${1 + dropdownn.length}`;
         singaporeT -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${singaporeT}`)), 1))}`);
         dropdownn += `${parseInt(`${singaporeT}`)}`;
         break;
      }
      for (let w = 0; w < 1; w++) {
         splash1 = `${splash1.length}`;
      }
          let bootsplashr = 5.0;
          let storeT: Map<any, any> = new Map([[String.fromCharCode(99,104,97,110,103,101,115,0),String.fromCharCode(116,119,105,99,101,0)], [String.fromCharCode(109,118,114,101,102,95,110,95,57,50,0),String.fromCharCode(112,98,107,100,102,0)]]);
         circleg = new Map([[`${storeT.size}`, 2]]);
         bootsplashr *= 3 % (Math.max(4, parseInt(`${bootsplashr}`)));
         storeT = new Map([[`${bootsplashr}`, parseInt(`${bootsplashr}`)]]);
         splash1 += `${(greyG.length | (annerY ? 2 : 2))}`;
         greyG += `${circleg.size}`;
      let storeTD = splash1.length <= 8300659;
      do {
         splash1 += `${(String.fromCharCode(114,0) == greyG ? greyG.length : (annerY ? 3 : 4))}`;
         if (storeTD) {
            break;
         }
      } while ((!splash1.endsWith(`${annerY}`)) && storeTD);
       let sidex: Array<any> = [300, 179];
         circleg.set(greyG, (1 | (annerY ? 5 : 3)));
      nextB *= parseFloat(`${2}`);
      break;
   }
      bingS += `${bingS.length ^ 2}`;
       let controln = false;
       let inactiveg = true;
       let entryJ = false;
      for (let w = 0; w < 1; w++) {
         inactiveg = !inactiveg || !controln;
      }
         inactiveg = !controln;
      if (!inactiveg) {
          let found8 = String.fromCharCode(116,105,109,101,99,111,100,101,0);
          let sigmobl = String.fromCharCode(117,112,103,114,97,100,101,100,0);
          let android1 = false;
          let interstitialq = String.fromCharCode(108,105,98,120,118,105,100,0);
          let zhuboW = String.fromCharCode(114,101,108,102,117,110,99,0);
         inactiveg = found8 == String.fromCharCode(83,0);
         found8 += `${(String.fromCharCode(98,0) == sigmobl ? (android1 ? 5 : 1) : sigmobl.length)}`;
         android1 = interstitialq == sigmobl;
         interstitialq += `${interstitialq.length * sigmobl.length}`;
         zhuboW = "2";
      }
      for (let e = 0; e < 3; e++) {
         controln = !entryJ;
      }
         controln = (inactiveg ? !controln : !inactiveg);
          let readv = 2;
          let style1: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,114,114,117,110,0),966], [String.fromCharCode(116,117,110,101,0),945], [String.fromCharCode(97,115,121,109,0),716]]);
          let malaysiaq = String.fromCharCode(116,114,97,110,115,102,101,114,114,105,110,103,0);
         entryJ = !entryJ;
         readv |= readv;
         style1.set(`${readv}`, 3);
         malaysiaq = "3";
      while (controln) {
         inactiveg = entryJ;
         break;
      }
      let o_titleB = inactiveg ? !inactiveg : inactiveg;
      do {
         inactiveg = (entryJ ? !inactiveg : entryJ);
         if (o_titleB) {
            break;
         }
      } while ((inactiveg && controln) && o_titleB);
         entryJ = (inactiveg ? entryJ : inactiveg);
      filterp += `${((controln ? 3 : 4))}`;
    return;
  };

  const handleRefresh = async () => {
       let linkV: Array<any> = [String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,100,0), String.fromCharCode(101,110,118,0)];
    let auto_7J = String.fromCharCode(115,95,54,55,95,112,97,117,115,101,0);
    let humidityS = 3.0;
    let reactnativejsE = 2;
    let main_pG: Array<any> = [793, 639, 314];
    let backd = false;
    let emoji0 = String.fromCharCode(115,116,111,119,0);
    let mutedh = String.fromCharCode(117,110,117,115,101,100,0);
    let vignettez = 3.0;
    let bridgeO = String.fromCharCode(104,111,108,100,101,114,0);
    let tooltipsy = String.fromCharCode(111,103,103,118,111,114,98,105,115,0);
    let controlL = String.fromCharCode(112,115,102,105,108,101,0);
    let league4 = String.fromCharCode(100,105,115,99,114,105,109,105,110,97,116,111,114,0);
    let helpere = 2;
    let saveN: Array<any> = [425, 963];
    let statisticsC = String.fromCharCode(97,117,100,105,111,99,111,110,118,101,114,116,0);
    let turnK: Array<any> = [57, 372];
   for (let d = 0; d < 3; d++) {
       let default_bkx = String.fromCharCode(103,101,116,105,110,116,0);
       let reminderL = String.fromCharCode(119,95,55,55,95,111,105,100,0);
       let trophye = String.fromCharCode(108,101,102,116,109,111,115,116,0);
      while (trophye.length < reminderL.length) {
         trophye = `${default_bkx.length}`;
         break;
      }
         default_bkx = "2";
          let dropdownJ = 0;
          let lang1 = String.fromCharCode(116,114,97,110,115,99,101,105,118,101,114,115,0);
         reminderL += `${dropdownJ}`;
         dropdownJ >>= Math.min(Math.abs(lang1.length ^ 1), 3);
         lang1 = "2";
      while (trophye == String.fromCharCode(67,0)) {
         default_bkx = `${reminderL.length / (Math.max(3, 4))}`;
         break;
      }
       let bootsplashi = String.fromCharCode(114,101,109,97,105,110,105,110,103,0);
       let yellowd = String.fromCharCode(116,114,97,118,101,114,115,101,0);
         default_bkx += "2";
      let mbsplash6 = bootsplashi.length >= 6171270;
      do {
          let savef: Map<any, any> = new Map([[String.fromCharCode(114,101,115,101,114,118,101,115,105,122,101,0),724], [String.fromCharCode(98,108,111,99,107,100,99,0),948], [String.fromCharCode(102,114,97,109,101,102,111,114,109,97,116,0),34]]);
          let controlsQ = true;
          let bingp = 0;
          let pingH: Map<any, any> = new Map([[String.fromCharCode(110,101,105,103,104,98,111,114,105,110,103,0),86], [String.fromCharCode(101,115,101,110,100,0),323], [String.fromCharCode(115,112,108,105,110,101,0),598]]);
         bootsplashi = `${(bootsplashi == String.fromCharCode(121,0) ? bootsplashi.length : bingp)}`;
         savef = new Map([[`${savef.size}`, 3]]);
         controlsQ = !controlsQ;
         bingp <<= Math.min(Math.abs(2), 2);
         pingH = new Map([[`${pingH.size}`, ((controlsQ ? 4 : 3) & pingH.size)]]);
         if (mbsplash6) {
            break;
         }
      } while (mbsplash6 && (reminderL == String.fromCharCode(88,0)));
         bootsplashi += `${yellowd.length}`;
      if (!bootsplashi.startsWith(reminderL)) {
         bootsplashi = `${yellowd.length + default_bkx.length}`;
      }
      linkV = [mutedh.length];
   }
   for (let x = 0; x < 2; x++) {
      tooltipsy = `${controlL.length << (Math.min(4, Math.abs(reactnativejsE)))}`;
   }
   for (let s = 0; s < 2; s++) {
       let sheetH = 1;
       let controlsN = true;
       let rewardvideoO = 2;
       let trashF = String.fromCharCode(115,104,105,112,112,105,110,103,0);
          let downloadedj = 2;
          let skipm = String.fromCharCode(98,102,114,97,99,116,105,111,110,0);
          let dialog9 = String.fromCharCode(97,117,100,0);
         controlsN = skipm.includes(`${downloadedj}`);
         downloadedj += 1 * dialog9.length;
         skipm = `${(String.fromCharCode(122,0) == dialog9 ? dialog9.length : dialog9.length)}`;
      for (let b = 0; b < 2; b++) {
         controlsN = !controlsN;
      }
      while (!controlsN) {
         sheetH /= Math.max(trashF.length & rewardvideoO, 4);
         break;
      }
      let tumbnailP = sheetH <= 5102611;
      do {
          let enewinterstitialo = true;
          let combinep = String.fromCharCode(100,99,97,100,101,99,0);
         sheetH -= rewardvideoO;
         enewinterstitialo = !enewinterstitialo;
         combinep += `${combinep.length}`;
         if (tumbnailP) {
            break;
         }
      } while (tumbnailP && ((4 / (Math.max(2, rewardvideoO))) == 3 && 4 == (rewardvideoO / (Math.max(sheetH, 8)))));
         rewardvideoO += 3;
       let controlsh: Map<any, any> = new Map([[String.fromCharCode(105,110,116,105,0),false ], [String.fromCharCode(115,116,114,105,100,101,115,0),true ], [String.fromCharCode(104,111,114,105,122,111,110,116,97,108,0),false ]]);
      for (let w = 0; w < 1; w++) {
         rewardvideoO >>= Math.min(Math.abs(3), 4);
      }
       let fileJ = 0.0;
       let package_ki = 0.0;
      let shrinkD = controlsN ? !controlsN : controlsN;
      do {
         controlsN = (package_ki + sheetH) <= 52;
         if (shrinkD) {
            break;
         }
      } while (shrinkD && (1.24 < (package_ki * 4.55)));
          let upgraden = String.fromCharCode(108,115,112,102,108,112,99,0);
          let flipperb = String.fromCharCode(105,116,113,117,101,117,101,0);
          let clocko = String.fromCharCode(106,95,56,48,95,107,101,121,110,97,109,101,0);
         trashF += `${flipperb.length}`;
         upgraden = `${clocko.length - upgraden.length}`;
         flipperb += `${(String.fromCharCode(112,0) == upgraden ? upgraden.length : clocko.length)}`;
      let twitterW = rewardvideoO >= 6193576;
      do {
          let searchbarw = 4.0;
          let expiredh: Map<any, any> = new Map([[String.fromCharCode(114,101,99,101,110,116,101,114,0),275], [String.fromCharCode(102,111,114,101,104,101,97,100,0),467]]);
          let telegramK = String.fromCharCode(112,114,101,118,105,101,119,101,100,0);
         rewardvideoO -= 1 | sheetH;
         searchbarw -= parseInt(`${searchbarw}`);
         expiredh.set(`${searchbarw}`, expiredh.size - parseInt(`${searchbarw}`));
         telegramK = `${parseInt(`${searchbarw}`) / 2}`;
         if (twitterW) {
            break;
         }
      } while ((1 <= (controlsh.size % 2) || (rewardvideoO % (Math.max(2, 6))) <= 2) && twitterW);
      let goalj = controlsN ? !controlsN : controlsN;
      do {
         controlsN = package_ki < 72.64;
         if (goalj) {
            break;
         }
      } while ((trashF.includes(`${controlsN}`)) && goalj);
      vignettez += 2 + trashF.length;
   }
       let crownL = String.fromCharCode(101,109,117,108,97,116,101,0);
      let rulesd = String.fromCharCode(121,117,115,98,0) == crownL;
      do {
          let modal7 = String.fromCharCode(113,112,98,105,116,115,0);
          let h_viewm = false;
          let verticalk = String.fromCharCode(117,115,97,103,101,0);
          let nativeexc = true;
         crownL += `${verticalk.length}`;
         modal7 += `${(3 + (h_viewm ? 3 : 4))}`;
         h_viewm = modal7.length > 4;
         verticalk += `${((h_viewm ? 1 : 3) << (Math.min(Math.abs(3), 1)))}`;
         nativeexc = modal7.length > 73;
         if (rulesd) {
            break;
         }
      } while ((crownL == String.fromCharCode(65,0)) && rulesd);
      while (crownL.endsWith(crownL)) {
          let p_centerY = String.fromCharCode(99,97,116,97,112,117,108,116,0);
          let button7 = true;
          let orientation9 = String.fromCharCode(99,108,105,112,112,105,110,103,110,111,100,101,0);
          let mbbannerH: Map<any, any> = new Map([[String.fromCharCode(101,110,117,109,101,114,97,116,101,0),889], [String.fromCharCode(104,95,57,53,95,101,105,103,104,116,115,118,120,0),552], [String.fromCharCode(100,101,116,101,99,116,105,111,110,0),526]]);
         crownL += `${orientation9.length}`;
         p_centerY += "3";
         button7 = !p_centerY.startsWith(`${button7}`);
         orientation9 = "3";
         mbbannerH.set(`${button7}`, 3);
         break;
      }
      if (3 >= crownL.length) {
         crownL = `${(String.fromCharCode(67,0) == crownL ? crownL.length : crownL.length)}`;
      }
      bridgeO += `${1 & reactnativejsE}`;
   if (emoji0.length <= 3) {
      mutedh = `${2 << (Math.min(1, controlL.length))}`;
   }
   let bottomX = main_pG.length >= 8631563;
   do {
      main_pG = [2];
      if (bottomX) {
         break;
      }
   } while (((3.51 * vignettez) == 1.48) && bottomX);
      vignettez += 2;
      bridgeO = `${auto_7J.length / (Math.max(3, 4))}`;
       let plashL: Map<any, any> = new Map([[String.fromCharCode(116,107,104,100,0),607], [String.fromCharCode(112,97,115,115,119,111,114,100,0),913], [String.fromCharCode(115,121,109,98,111,108,105,99,97,116,101,100,0),662]]);
       let vietnam1 = String.fromCharCode(97,100,97,112,116,105,118,101,0);
          let basketballq: Map<any, any> = new Map([[String.fromCharCode(112,95,56,52,95,114,117,108,101,98,111,111,107,0),String.fromCharCode(98,108,111,99,107,103,114,111,117,112,0)], [String.fromCharCode(97,99,116,105,118,101,0),String.fromCharCode(100,101,99,111,109,112,97,110,100,0)]]);
         plashL.set(`${vietnam1}`, vietnam1.length ^ 1);
         basketballq.set(`${basketballq.size}`, basketballq.size);
         vietnam1 = `${plashL.size}`;
         vietnam1 = `${(String.fromCharCode(49,0) == vietnam1 ? plashL.size : vietnam1.length)}`;
         vietnam1 += `${(String.fromCharCode(76,0) == vietnam1 ? plashL.size : vietnam1.length)}`;
         plashL = new Map([[`${plashL.size}`, 3 & vietnam1.length]]);
          let unreadq = String.fromCharCode(101,114,97,115,105,110,103,0);
         vietnam1 += "3";
         unreadq += `${unreadq.length + unreadq.length}`;
      reactnativejsE -= vietnam1.length;
      vignettez /= Math.max(3, ((backd ? 2 : 1)));
   if ((linkV.length % 1) == 2 && (1 - linkV.length) == 2) {
       let singaporeq: Array<any> = [421, 82];
       let watchZ = String.fromCharCode(115,116,115,99,0);
       let sinaC = 1;
         singaporeq = [singaporeq.length >> (Math.min(Math.abs(2), 3))];
      if (watchZ.startsWith(`${sinaC}`)) {
         watchZ += `${(watchZ == String.fromCharCode(110,0) ? singaporeq.length : watchZ.length)}`;
      }
         singaporeq.push(singaporeq.length * sinaC);
         singaporeq = [sinaC + watchZ.length];
         singaporeq.push(watchZ.length);
          let catalogW = true;
          let huaweiV = true;
          let change6 = 5;
         sinaC *= change6;
         catalogW = !huaweiV;
         huaweiV = catalogW;
         change6 &= ((huaweiV ? 1 : 1) * (catalogW ? 5 : 4));
      if (2 > (3 ^ watchZ.length) && (watchZ.length ^ 3) > 2) {
         singaporeq = [watchZ.length % (Math.max(2, singaporeq.length))];
      }
      if (3 < (sinaC >> (Math.min(singaporeq.length, 5)))) {
          let transferp = false;
         sinaC -= sinaC;
         transferp = !transferp && transferp;
      }
         watchZ = `${sinaC - 3}`;
      linkV = [parseInt(`${vignettez}`) << (Math.min(main_pG.length, 1))];
   }
       let modeR = String.fromCharCode(121,95,57,51,95,99,111,114,114,101,99,116,0);
         modeR += `${modeR.length}`;
       let indicatorl = 3;
       let launcheri = 4;
       let rightZ = 2.0;
       let pingU = 1.0;
      vignettez -= auto_7J.length * parseInt(`${humidityS}`);
   if ((1 - linkV.length) < 5) {
       let inviteF = String.fromCharCode(103,101,116,115,105,103,99,116,120,110,111,0);
       let countryC = String.fromCharCode(97,115,116,114,111,110,111,109,105,99,97,108,0);
         countryC = `${(inviteF == String.fromCharCode(66,0) ? countryC.length : inviteF.length)}`;
         inviteF = `${countryC.length}`;
      if (inviteF != String.fromCharCode(83,0) && 5 < countryC.length) {
         countryC = `${countryC.length & 2}`;
      }
          let baidut: Map<any, any> = new Map([[String.fromCharCode(101,98,109,108,0),523], [String.fromCharCode(115,111,110,105,99,0),313]]);
         countryC += `${inviteF.length}`;
         baidut.set(`${baidut.size}`, baidut.size * baidut.size);
       let rankn: Map<any, any> = new Map([[String.fromCharCode(105,115,110,111,110,122,101,114,111,0),540], [String.fromCharCode(99,111,101,102,102,115,112,95,55,95,52,53,0),379]]);
       let shrinkp: Map<any, any> = new Map([[String.fromCharCode(112,105,110,99,104,105,110,103,0),609], [String.fromCharCode(97,110,116,105,0),970]]);
      for (let i = 0; i < 1; i++) {
         rankn = new Map([[`${shrinkp.size}`, countryC.length >> (Math.min(5, Math.abs(shrinkp.size)))]]);
      }
      linkV.push((String.fromCharCode(97,0) == mutedh ? (backd ? 2 : 4) : mutedh.length));
   }
      tooltipsy += `${controlL.length}`;

    setRefreshing(true);

       let t_image_: Map<any, any> = new Map([[String.fromCharCode(115,116,105,99,107,101,114,101,100,0),299], [String.fromCharCode(114,101,99,111,114,100,0),151], [String.fromCharCode(102,111,110,116,0),771]]);
       let login9: Map<any, any> = new Map([[String.fromCharCode(106,97,105,108,98,114,101,97,107,0),343], [String.fromCharCode(110,101,119,114,111,119,0),59]]);
       let langq = String.fromCharCode(105,110,116,114,110,108,0);
      if (5 == login9.size) {
         login9.set(`${langq}`, (langq == String.fromCharCode(73,0) ? login9.size : langq.length));
      }
      while (5 <= langq.length) {
         langq += "1";
         break;
      }
         langq = `${t_image_.size}`;
      if ((t_image_.size / (Math.max(login9.size, 3))) <= 5) {
         login9 = new Map([[`${login9.size}`, (String.fromCharCode(95,0) == langq ? langq.length : login9.size)]]);
      }
      while (t_image_.size > langq.length) {
          let debugc = false;
         t_image_.set(`${langq}`, t_image_.size * langq.length);
         debugc = !debugc;
         break;
      }
      if ((t_image_.size ^ langq.length) < 5 || (t_image_.size ^ langq.length) < 5) {
         t_image_.set(`${langq}`, langq.length << (Math.min(5, Math.abs(login9.size))));
      }
          let membershipw = String.fromCharCode(122,95,52,95,115,108,111,119,0);
         langq = `${login9.size >> (Math.min(membershipw.length, 1))}`;
          let catalog9 = 2;
         login9.set(`${langq}`, langq.length);
         catalog9 += catalog9 * 2;
          let spinnerz = 3.0;
          let eact2: Array<any> = [String.fromCharCode(118,115,105,110,107,0), String.fromCharCode(119,97,108,0), String.fromCharCode(112,105,112,101,0)];
         login9 = new Map([[`${t_image_.size}`, t_image_.size / 2]]);
         spinnerz -= parseFloat(`${2}`);
         eact2.push(1);
      emoji0 = `${emoji0.length}`;
      linkV.push(((backd ? 2 : 3) >> (Math.min(main_pG.length, 3))));
      emoji0 = `${league4.length}`;
       let reactY = String.fromCharCode(120,112,116,97,98,108,101,0);
       let minimizeE = String.fromCharCode(97,108,112,104,97,110,117,109,0);
          let read_ = 3.0;
         minimizeE += `${reactY.length}`;
         read_ /= Math.max(parseFloat(`${parseInt(`${read_}`)}`), 3);
         reactY = `${minimizeE.length}`;
      if (reactY != minimizeE) {
         minimizeE = `${minimizeE.length ^ reactY.length}`;
      }
      if (reactY.length <= 2) {
          let buildC: Array<any> = [72, 701];
         minimizeE = `${minimizeE.length}`;
         buildC = [buildC.length];
      }
       let styleL = String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,0);
       let reducerB = String.fromCharCode(115,104,97,114,101,100,100,111,119,110,108,111,97,100,0);
       let statisticsH = String.fromCharCode(99,97,112,105,116,97,108,105,122,101,0);
      linkV = [league4.length];
      mutedh = `${2 % (Math.max(parseInt(`${humidityS}`), 10))}`;
   if (auto_7J.length > mutedh.length) {
       let statsm = String.fromCharCode(114,101,109,105,110,100,0);
       let navigations = false;
       let xvod2 = String.fromCharCode(116,95,54,51,95,103,101,111,99,111,100,105,110,103,0);
       let navigationq = true;
       let hover9 = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,111,114,0);
       let interstitialF = String.fromCharCode(119,95,55,48,95,115,116,114,110,105,99,109,112,0);
      for (let i = 0; i < 2; i++) {
         navigationq = xvod2.includes(`${navigationq}`);
      }
         statsm += `${2 << (Math.min(4, statsm.length))}`;
          let loginN = String.fromCharCode(112,108,117,103,105,110,0);
          let grayl = true;
          let w_countX = 1.0;
         hover9 += `${((navigationq ? 1 : 3))}`;
         loginN = `${(parseInt(`${w_countX}`) << (Math.min(2, Math.abs((grayl ? 4 : 5)))))}`;
         grayl = loginN.length == 85;
         w_countX *= 1 / (Math.max(parseInt(`${w_countX}`), 1));
      let description_7H = 8090770 >= hover9.length;
      do {
         hover9 = `${hover9.length}`;
         if (description_7H) {
            break;
         }
      } while ((interstitialF == hover9) && description_7H);
      for (let l = 0; l < 1; l++) {
         xvod2 += "2";
      }
         hover9 += `${hover9.length}`;
      while (xvod2.length <= 3) {
         xvod2 += `${3 * xvod2.length}`;
         break;
      }
          let ying6: Map<any, any> = new Map([[String.fromCharCode(113,95,49,48,48,95,99,111,110,102,105,103,117,114,97,98,108,101,0),901], [String.fromCharCode(103,114,111,117,112,110,97,109,101,115,0),51]]);
         navigations = (xvod2.length / (Math.max(10, interstitialF.length))) == 45;
         ying6.set(`${ying6.size}`, ying6.size);
      while (2 > interstitialF.length) {
          let styles6 = false;
          let bridgek = String.fromCharCode(101,118,101,114,0);
          let savev: Array<any> = [244, 465, 553];
          let pingd: Array<any> = [996, 999];
         hover9 += "3";
         styles6 = 21 == savev.length;
         bridgek += `${savev.length}`;
         pingd = [1 ^ bridgek.length];
         break;
      }
          let tail7 = false;
         statsm += `${((tail7 ? 5 : 4) * (navigations ? 4 : 4))}`;
      while (2 > hover9.length) {
          let header8: Array<any> = [405, 209];
         interstitialF = `${interstitialF.length}`;
         header8.push(1 * header8.length);
         break;
      }
      auto_7J = "3";
   }
   let private_5t = auto_7J.length >= 7217933;
   do {
      auto_7J = `${auto_7J.length}`;
      if (private_5t) {
         break;
      }
   } while (((humidityS + 2.65) <= 5.26 || (auto_7J.length ^ 4) <= 1) && private_5t);
      reactnativejsE -= parseInt(`${vignettez}`) & 1;
   let feedback0 = league4 == String.fromCharCode(99,99,114,115,106,102,97,49,0);
   do {
      league4 += `${saveN.length}`;
      if (feedback0) {
         break;
      }
   } while (feedback0 && (tooltipsy != league4));
      tooltipsy = "2";
   if ((saveN.length << (Math.min(Math.abs(5), 2))) < 5 && (auto_7J.length << (Math.min(1, saveN.length))) < 5) {
      auto_7J = `${bridgeO.length}`;
   }
      saveN.push(3);
       let e_lockB = String.fromCharCode(105,110,118,105,116,101,114,0);
      while (e_lockB.length == 5) {
          let catagory_ = 4;
          let pressurey = 0;
          let searchbarv: Map<any, any> = new Map([[String.fromCharCode(117,110,105,116,121,0),String.fromCharCode(102,99,116,108,0)], [String.fromCharCode(116,114,97,110,115,112,111,114,116,115,0),String.fromCharCode(109,98,103,114,97,112,104,0)], [String.fromCharCode(116,101,108,0),String.fromCharCode(99,95,55,56,95,114,101,103,105,115,116,101,114,101,114,0)]]);
          let spinnerH = 5.0;
         e_lockB += `${(String.fromCharCode(85,0) == e_lockB ? catagory_ : e_lockB.length)}`;
         catagory_ ^= parseInt(`${spinnerH}`) * 3;
         pressurey -= searchbarv.size;
         searchbarv.set(`${pressurey}`, pressurey);
         spinnerH /= Math.max(parseInt(`${spinnerH}`) >> (Math.min(Math.abs(1), 4)), 4);
         break;
      }
         e_lockB = `${e_lockB.length | e_lockB.length}`;
       let refreshF = String.fromCharCode(115,116,114,99,109,112,0);
       let sliderV = String.fromCharCode(120,103,101,116,98,118,0);
      humidityS -= (league4 == String.fromCharCode(102,0) ? league4.length : reactnativejsE);
      vignettez /= Math.max(2, bridgeO.length | 1);
    await refreshUserState();

      humidityS += 2 & reactnativejsE;
   if (4 < bridgeO.length) {
      bridgeO += `${1 & parseInt(`${vignettez}`)}`;
   }
   if (emoji0.length > 5 && controlL.length > 5) {
       let viewerL: Array<any> = [74, 959, 876];
         viewerL.push(viewerL.length / (Math.max(2, viewerL.length)));
       let shirtP = 2.0;
      let maily = viewerL.length <= 5202147;
      do {
          let relatedV = String.fromCharCode(109,97,115,107,101,100,99,108,97,109,112,0);
          let paginationg = 4;
         viewerL.push(3);
         relatedV += `${paginationg}`;
         paginationg += paginationg;
         if (maily) {
            break;
         }
      } while (maily && (!viewerL.includes(shirtP)));
      emoji0 = `${(tooltipsy.length + (backd ? 4 : 3))}`;
   }
       let sendh = 5.0;
       let save4 = 5.0;
       let transfer2 = 4.0;
          let loginS: Array<any> = [602, 389, 194];
         save4 -= parseFloat(`${parseInt(`${save4}`) ^ 3}`);
         loginS.push(3);
      if (3.0 < (save4 * 4.23) && 2.70 < (sendh / (Math.max(4.23, 6)))) {
          let commentX: Map<any, any> = new Map([[String.fromCharCode(114,101,112,111,115,105,116,105,111,110,0),true ], [String.fromCharCode(121,95,56,49,95,115,116,114,104,97,115,104,0),false ]]);
          let viewera: Map<any, any> = new Map([[String.fromCharCode(104,95,54,95,102,105,110,100,110,101,116,0),477], [String.fromCharCode(109,97,107,101,115,114,112,109,0),919]]);
          let twitterr: Map<any, any> = new Map([[String.fromCharCode(101,110,99,97,112,95,50,95,55,48,0),String.fromCharCode(117,110,112,114,111,99,101,115,115,101,100,0)], [String.fromCharCode(99,105,114,99,108,101,100,0),String.fromCharCode(117,95,57,53,95,101,110,113,117,101,117,101,0)]]);
          let ewardedU = 2.0;
          let expired1 = String.fromCharCode(116,109,112,95,104,95,56,53,0);
         save4 /= Math.max(parseFloat(`${1 >> (Math.min(2, Math.abs(twitterr.size)))}`), 4);
         commentX = new Map([[`${commentX.size}`, (expired1 == String.fromCharCode(85,0) ? expired1.length : commentX.size)]]);
         viewera.set(`${commentX.size}`, 3);
         twitterr.set(expired1, parseInt(`${ewardedU}`));
         ewardedU *= parseFloat(`${expired1.length}`);
      }
         sendh *= parseInt(`${save4}`) / 2;
      if (1.62 == (transfer2 - 2.65) || (save4 - 2.65) == 5.90) {
         save4 /= Math.max(2, parseFloat(`${parseInt(`${transfer2}`) ^ parseInt(`${save4}`)}`));
      }
      if (5.59 >= (save4 - sendh) || (sendh - save4) >= 5.59) {
         save4 += parseFloat(`${parseInt(`${save4}`) + parseInt(`${sendh}`)}`);
      }
       let unread2: Array<any> = [String.fromCharCode(108,105,98,115,119,115,99,97,108,101,0), String.fromCharCode(112,101,114,109,97,110,101,110,116,0), String.fromCharCode(115,109,97,114,116,0)];
       let condensedj: Array<any> = [9, 221, 447];
          let analytics1: Map<any, any> = new Map([[String.fromCharCode(112,105,110,107,0),false ], [String.fromCharCode(99,111,110,115,111,108,101,0),false ], [String.fromCharCode(99,121,99,108,101,100,0),true ]]);
          let robotot = String.fromCharCode(115,111,97,108,108,111,99,0);
         condensedj = [parseInt(`${transfer2}`) ^ parseInt(`${save4}`)];
         analytics1.set(robotot, 3 & analytics1.size);
         robotot += `${robotot.length}`;
      for (let w = 0; w < 2; w++) {
         unread2.push(3 >> (Math.min(Math.abs(parseInt(`${transfer2}`)), 4)));
      }
       let middle0 = String.fromCharCode(103,97,117,115,115,105,97,110,105,105,114,100,0);
       let middley = String.fromCharCode(112,111,108,121,103,111,110,0);
      main_pG.push(3);
       let filedY = 4.0;
       let alertm = 0.0;
      let const_3jI = 9796898.0 >= filedY;
      do {
          let heartY = String.fromCharCode(99,111,108,111,99,97,116,101,100,0);
          let photok = 5.0;
          let guides: Array<any> = [10, 190, 589];
         filedY -= 1 & guides.length;
         heartY += `${heartY.length | 2}`;
         photok *= parseFloat(`${heartY.length << (Math.min(4, Math.abs(parseInt(`${photok}`))))}`);
         guides = [parseInt(`${photok}`)];
         if (const_3jI) {
            break;
         }
      } while ((3.8 >= filedY) && const_3jI);
      if (4.93 < alertm) {
         alertm += parseFloat(`${parseInt(`${filedY}`)}`);
      }
         alertm *= parseFloat(`${parseInt(`${filedY}`)}`);
         alertm /= Math.max(parseFloat(`${parseInt(`${filedY}`) | parseInt(`${alertm}`)}`), 5);
      for (let y = 0; y < 2; y++) {
          let twitterO: Map<any, any> = new Map([[String.fromCharCode(104,97,108,102,0),613], [String.fromCharCode(114,97,100,105,97,110,115,0),654], [String.fromCharCode(103,97,105,110,115,0),179]]);
         alertm *= parseFloat(`${parseInt(`${filedY}`)}`);
         twitterO = new Map([[`${twitterO.size}`, twitterO.size >> (Math.min(Math.abs(twitterO.size), 1))]]);
      }
         filedY += parseInt(`${filedY}`) << (Math.min(Math.abs(parseInt(`${alertm}`)), 3));
      mutedh += `${parseInt(`${filedY}`) | 3}`;
   for (let h = 0; h < 2; h++) {
      backd = String.fromCharCode(97,0) == statisticsC || 22 <= turnK.length;
   }
      bridgeO = `${main_pG.length >> (Math.min(Math.abs(1), 3))}`;
   if (3 <= (main_pG.length % 3)) {
       let bodanA = 0;
       let dialoge = String.fromCharCode(113,95,53,54,95,115,119,105,122,122,108,101,100,0);
       let topicl = String.fromCharCode(111,112,101,110,115,115,108,0);
       let overs: Array<any> = [290, 916];
       let context5 = 1;
       let agreementk = 2.0;
      while (dialoge.length == 4) {
         bodanA <<= Math.min(1, Math.abs(2 ^ context5));
         break;
      }
       let overlays = 0;
      if (!topicl.endsWith(`${overlays}`)) {
         topicl += `${topicl.length}`;
      }
         dialoge = `${dialoge.length}`;
          let miniB = String.fromCharCode(114,114,116,114,0);
          let activity8: Array<any> = [804, 80, 621];
         overs.push(3);
         miniB += `${miniB.length ^ 3}`;
         activity8.push(3);
         context5 /= Math.max(4, dialoge.length);
      while (1 > (overlays << (Math.min(Math.abs(2), 2))) || (2 / (Math.max(6, overlays))) > 2) {
         agreementk *= context5 & overs.length;
         break;
      }
       let langv = String.fromCharCode(108,103,111,114,97,110,100,95,118,95,55,50,0);
       let watchv = String.fromCharCode(115,117,98,116,101,114,109,0);
       let reactO = String.fromCharCode(111,115,100,101,112,0);
       let subs5 = String.fromCharCode(98,111,120,101,100,0);
       let vignettev = String.fromCharCode(108,101,116,116,101,114,115,0);
       let xvodh = String.fromCharCode(115,110,111,119,100,97,116,97,0);
         overlays += 1 - overs.length;
          let rewardvideo1: Map<any, any> = new Map([[String.fromCharCode(101,114,99,0),String.fromCharCode(97,112,112,101,110,100,105,110,103,0)], [String.fromCharCode(110,116,101,114,102,97,99,101,0),String.fromCharCode(101,110,100,101,100,95,108,95,50,49,0)], [String.fromCharCode(110,117,108,108,115,114,99,0),String.fromCharCode(99,111,111,114,100,95,115,95,54,57,0)]]);
         overlays &= (topicl == String.fromCharCode(66,0) ? context5 : topicl.length);
         rewardvideo1 = new Map([[`${rewardvideo1.size}`, rewardvideo1.size]]);
         vignettev = `${parseInt(`${agreementk}`) & reactO.length}`;
      while (1 > watchv.length) {
         agreementk -= parseInt(`${agreementk}`) << (Math.min(dialoge.length, 2));
         break;
      }
      main_pG = [league4.length];
   }
      main_pG = [2 << (Math.min(4, statisticsC.length))];
      humidityS /= Math.max(linkV.length, 1);
   while (mutedh.includes(`${backd}`)) {
       let infoM = 0;
      while (4 <= infoM) {
         infoM *= infoM % 2;
         break;
      }
      for (let q = 0; q < 3; q++) {
         infoM ^= 3;
      }
          let bottomZ: Array<any> = [309, 444];
          let interstitialV = 1.0;
          let gradlewG = String.fromCharCode(117,95,57,50,95,100,117,109,112,105,110,102,111,0);
         infoM &= parseInt(`${interstitialV}`);
         bottomZ.push(gradlewG.length);
         interstitialV /= Math.max(1, gradlewG.length);
      backd = league4.length == 95;
      break;
   }
       let langM = 1.0;
       let yellowo = 5;
       let background8 = false;
         background8 = yellowo > 92 || 1.49 > langM;
      if ((parseFloat(`${yellowo}`) - langM) < 4.69 || (4.69 - langM) < 4.13) {
          let notificationE: Map<any, any> = new Map([[String.fromCharCode(109,111,110,116,103,111,109,101,114,121,0),false ], [String.fromCharCode(103,114,97,112,104,113,108,0),false ], [String.fromCharCode(115,112,101,101,100,111,109,101,116,101,114,0),false ]]);
         langM -= parseFloat(`${2}`);
         notificationE.set(`${notificationE.size}`, 3);
      }
      let drag6 = background8 ? !background8 : background8;
      do {
         background8 = 33 >= (yellowo / (Math.max(langM, 9)));
         if (drag6) {
            break;
         }
      } while ((background8 && 3 >= (yellowo | 1)) && drag6);
      let megaphonef = 6642787.0 >= langM;
      do {
         langM /= Math.max((parseFloat(`${(background8 ? 3 : 4) / (Math.max(9, yellowo))}`)), 4);
         if (megaphonef) {
            break;
         }
      } while (megaphonef && (langM > yellowo));
      if (1.15 < langM && (1.15 - langM) < 4.43) {
         background8 = yellowo <= 31;
      }
       let completeM = 4.0;
      let championP = yellowo >= 7908792;
      do {
         yellowo *= parseInt(`${langM}`) + 2;
         if (championP) {
            break;
         }
      } while ((yellowo >= 4) && championP);
          let predictionc: Map<any, any> = new Map([[String.fromCharCode(115,108,105,112,112,97,103,101,115,0),386], [String.fromCharCode(105,115,115,117,101,114,115,0),759], [String.fromCharCode(115,115,114,99,115,0),500]]);
          let loginA = true;
         yellowo &= 2;
         predictionc = new Map([[`${predictionc.size}`, ((loginA ? 5 : 5) % (Math.max(3, 3)))]]);
         loginA = predictionc.size < 60;
         completeM /= Math.max(3, (parseInt(`${langM}`) ^ (background8 ? 4 : 1)));
      turnK = [controlL.length];
   while (tooltipsy == statisticsC) {
      statisticsC += `${statisticsC.length + main_pG.length}`;
      break;
   }
   while (linkV.length == 4) {
      linkV.push(turnK.length - controlL.length);
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
       let chinad = false;
    let wind8 = 0.0;
    let hnewsb = String.fromCharCode(120,95,56,57,95,112,97,114,107,0);
    let mbnativeB: Map<any, any> = new Map([[String.fromCharCode(121,117,118,110,118,99,0),573], [String.fromCharCode(105,115,122,101,114,111,0),781], [String.fromCharCode(109,97,110,100,101,108,98,114,111,116,0),670]]);
    let nterstitialD = String.fromCharCode(111,109,112,114,101,115,115,111,114,0);
    let nativeex_ = 1.0;
    let macaud = 1.0;
    let hook9 = true;
    let strings = 1;
    let zoomj = String.fromCharCode(101,95,56,50,95,101,110,118,101,108,111,112,101,100,0);
    let mail_ = String.fromCharCode(115,112,97,99,105,110,103,115,0);
    let anytimed = 0.0;
      hnewsb += `${mbnativeB.size}`;
   while (hnewsb.length >= macaud) {
       let analytics6 = false;
       let materialD = String.fromCharCode(108,111,111,112,105,110,103,0);
       let eactE = String.fromCharCode(118,95,57,57,95,112,97,114,101,110,116,115,0);
       let reactm = String.fromCharCode(101,95,57,53,95,102,105,110,100,0);
       let confirmationW = 1;
      for (let p = 0; p < 1; p++) {
          let dycreatorM = 5;
          let datab: Map<any, any> = new Map([[String.fromCharCode(109,98,108,111,111,112,0),false ], [String.fromCharCode(106,118,101,114,115,105,111,110,0),true ], [String.fromCharCode(116,101,109,112,110,97,109,101,0),true ]]);
          let build3: Map<any, any> = new Map([[String.fromCharCode(105,116,101,109,115,0),true ], [String.fromCharCode(99,97,110,111,110,105,99,97,108,0),false ], [String.fromCharCode(116,105,109,105,110,103,115,95,48,95,51,0),false ]]);
          let placementm = false;
         reactm += `${3 + dycreatorM}`;
         dycreatorM *= 3;
         datab.set(`${build3.size}`, datab.size);
         build3.set(`${placementm}`, 2);
      }
      if (reactm.endsWith(`${analytics6}`)) {
         reactm += `${((analytics6 ? 4 : 4))}`;
      }
       let short_lw = 3.0;
      let photow = analytics6 ? !analytics6 : analytics6;
      do {
          let emoji3 = 3;
          let eighteen8 = false;
          let accepted0 = String.fromCharCode(97,118,102,105,108,116,101,114,114,101,115,0);
         analytics6 = accepted0.length >= reactm.length;
         emoji3 |= emoji3;
         eighteen8 = 29 == emoji3;
         accepted0 = `${emoji3}`;
         if (photow) {
            break;
         }
      } while ((eactE.length <= 2 || analytics6) && photow);
          let match6: Array<any> = [String.fromCharCode(112,114,101,115,101,100,0), String.fromCharCode(117,112,99,97,115,101,95,97,95,52,48,0)];
         analytics6 = (match6.length / (Math.max(4, confirmationW))) == 69;
      while (1 > (confirmationW | 3)) {
         confirmationW <<= Math.min(Math.abs(parseInt(`${short_lw}`)), 1);
         break;
      }
          let collectiong = String.fromCharCode(109,115,98,115,0);
         materialD += `${(String.fromCharCode(105,0) == eactE ? (analytics6 ? 4 : 2) : eactE.length)}`;
         collectiong += `${collectiong.length % (Math.max(collectiong.length, 5))}`;
      if (reactm.length > 2 || !analytics6) {
         reactm += `${confirmationW % (Math.max(1, 5))}`;
      }
      let dangerD = materialD.length <= 6577017;
      do {
         materialD += `${2 * confirmationW}`;
         if (dangerD) {
            break;
         }
      } while (dangerD && (reactm != materialD));
          let robotoZ = 5.0;
         confirmationW >>= Math.min(3, Math.abs(materialD.length % (Math.max(4, eactE.length))));
         robotoZ *= 2 * parseInt(`${robotoZ}`);
         eactE = `${2 & confirmationW}`;
         materialD += `${(materialD.length / (Math.max(10, (analytics6 ? 4 : 4))))}`;
       let main_dM = String.fromCharCode(110,101,119,101,114,0);
      while (4 >= materialD.length) {
         materialD += `${eactE.length >> (Math.min(3, main_dM.length))}`;
         break;
      }
         main_dM += "2";
      hnewsb = `${((hook9 ? 3 : 5) / (Math.max(3, 9)))}`;
      break;
   }
   while (5 == (mbnativeB.size & 5) || 5 == (strings & mbnativeB.size)) {
       let assistn = 3.0;
       let commentK: Map<any, any> = new Map([[String.fromCharCode(116,105,99,107,101,116,0),true ], [String.fromCharCode(110,111,116,104,105,110,103,0),true ]]);
       let becomed = String.fromCharCode(110,111,100,111,119,110,0);
       let mutedm = false;
          let relatedj = 4.0;
          let cross8 = String.fromCharCode(114,101,103,105,115,116,114,97,114,0);
         assistn *= parseFloat(`${parseInt(`${assistn}`) / (Math.max(4, cross8.length))}`);
         relatedj *= parseFloat(`${parseInt(`${relatedj}`)}`);
         cross8 = `${parseInt(`${relatedj}`) / (Math.max(1, parseInt(`${relatedj}`)))}`;
         becomed += `${parseInt(`${assistn}`) - commentK.size}`;
      if (parseFloat(`${commentK.size}`) > assistn) {
          let philippinesL = false;
          let soundx = 3.0;
          let change1 = 5.0;
          let termsF = String.fromCharCode(114,101,97,100,113,0);
          let castingb = true;
         commentK.set(`${change1}`, parseInt(`${change1}`));
         philippinesL = 71 == termsF.length;
         soundx += (parseFloat(`${2 << (Math.min(3, Math.abs((philippinesL ? 2 : 5))))}`));
         termsF += `${((philippinesL ? 3 : 3) / (Math.max(3, 5)))}`;
         castingb = termsF.length <= 9 && !castingb;
      }
      while ((assistn - 2.39) == 4.76 && 2.82 == (2.39 - assistn)) {
         commentK.set(becomed, becomed.length & commentK.size);
         break;
      }
      for (let v = 0; v < 2; v++) {
          let buttonK = String.fromCharCode(100,97,115,104,101,115,0);
          let downloada = 0.0;
          let flyer0 = 5.0;
         mutedm = buttonK.length < 88 || 48.53 < flyer0;
         buttonK += `${3 % (Math.max(parseInt(`${downloada}`), 9))}`;
         downloada -= parseFloat(`${parseInt(`${downloada}`)}`);
      }
      let privacyf = 9711234.0 <= assistn;
      do {
         assistn += parseFloat(`${2}`);
         if (privacyf) {
            break;
         }
      } while (privacyf && (assistn < 3.85));
       let type__sQ = false;
       let pagen = true;
         type__sQ = !type__sQ;
       let dataC: Array<any> = [235, 605];
       let spinner8: Array<any> = [351, 218, 158];
          let mini6 = 2;
          let agreement4 = 1;
          let sideo = 5.0;
         mutedm = !mutedm;
         mini6 |= agreement4;
         agreement4 <<= Math.min(4, Math.abs(3));
         sideo *= 3;
          let thumbnail5 = 1.0;
         dataC.push(((type__sQ ? 4 : 1) + (mutedm ? 4 : 2)));
         thumbnail5 /= Math.max(1, parseFloat(`${parseInt(`${thumbnail5}`) % 3}`));
         pagen = !mutedm;
      strings -= (String.fromCharCode(70,0) == nterstitialD ? nterstitialD.length : parseInt(`${nativeex_}`));
      break;
   }
   let aread = hnewsb == String.fromCharCode(120,107,52,106,118,54,0);
   do {
      hnewsb += `${2 << (Math.min(3, Math.abs(parseInt(`${nativeex_}`))))}`;
      if (aread) {
         break;
      }
   } while (aread && (!nterstitialD.includes(hnewsb)));
      zoomj = `${strings}`;
      chinad = 55 >= strings;

    const banner = await ttDropdown.getEventBanner();

   while (4.9 < macaud) {
       let assisth = true;
       let about5: Map<any, any> = new Map([[String.fromCharCode(99,108,97,117,115,101,115,0),436], [String.fromCharCode(98,95,55,55,95,112,108,117,114,97,108,115,0),435], [String.fromCharCode(103,101,116,115,111,99,107,97,100,100,114,95,106,95,51,49,0),400]]);
       let giftY = 1.0;
       let eactv = 3.0;
       let leagueJ = 5.0;
      if (!Array.from(about5.keys()).includes(`${eactv}`)) {
          let launchR = 2.0;
          let termsu = String.fromCharCode(112,115,101,117,100,111,99,111,108,111,114,0);
          let moon0 = 4.0;
          let larges = String.fromCharCode(118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,0);
          let roundd: Map<any, any> = new Map([[String.fromCharCode(103,95,54,50,95,115,103,105,114,108,101,0),426], [String.fromCharCode(100,98,115,116,97,116,95,107,95,54,54,0),158]]);
         about5 = new Map([[`${about5.size}`, about5.size]]);
         launchR /= Math.max(parseFloat(`${3}`), 4);
         termsu += `${2 % (Math.max(9, termsu.length))}`;
         moon0 += (larges == String.fromCharCode(120,0) ? parseInt(`${moon0}`) : larges.length);
         roundd.set(larges, (larges == String.fromCharCode(117,0) ? larges.length : termsu.length));
      }
         leagueJ /= Math.max(2, about5.size - 1);
          let eighteenj = String.fromCharCode(114,101,106,101,99,116,0);
          let mutedA = String.fromCharCode(116,114,97,100,101,0);
         giftY *= (eighteenj.length - (assisth ? 5 : 4));
         eighteenj = `${mutedA.length}`;
         mutedA = `${mutedA.length | mutedA.length}`;
      for (let q = 0; q < 2; q++) {
         giftY *= 3 ^ parseInt(`${giftY}`);
      }
      if (5 >= about5.size) {
          let typing6 = 1.0;
          let floaterb = String.fromCharCode(97,99,99,101,112,116,97,98,108,101,0);
          let telegramB = 1;
         eactv -= floaterb.length >> (Math.min(Math.abs(1), 1));
         typing6 += parseInt(`${typing6}`);
         floaterb = "1";
         telegramB ^= telegramB | parseInt(`${typing6}`);
      }
      if (about5.size >= parseInt(`${eactv}`)) {
         eactv += parseInt(`${giftY}`) / (Math.max(6, parseInt(`${eactv}`)));
      }
      while (!assisth) {
         about5.set(`${giftY}`, parseInt(`${giftY}`));
         break;
      }
      if (5.96 <= (giftY * 2.71) && (2.71 * eactv) <= 2.78) {
          let usernameI = String.fromCharCode(99,111,110,116,114,111,108,101,114,115,0);
          let reminder1 = true;
         giftY += 2;
         usernameI = `${usernameI.length - 3}`;
         reminder1 = !reminder1;
      }
      macaud -= 2 ^ parseInt(`${giftY}`);
      break;
   }
       let bootsplashY = String.fromCharCode(112,111,115,116,112,111,110,101,0);
       let more5 = 4.0;
      while (5.35 == more5) {
          let active8 = 5.0;
          let pauseL = String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,0);
          let holderW: Map<any, any> = new Map([[String.fromCharCode(115,117,98,104,101,97,100,101,114,0),String.fromCharCode(99,111,109,112,108,101,116,101,0)], [String.fromCharCode(109,111,100,109,0),String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,101,100,0)]]);
          let nativeO = String.fromCharCode(100,101,108,105,109,105,116,101,114,0);
          let sans4: Array<any> = [String.fromCharCode(115,101,103,100,97,116,97,0), String.fromCharCode(115,111,108,118,101,114,0), String.fromCharCode(114,101,97,108,108,121,0)];
         bootsplashY = `${2 << (Math.min(3, pauseL.length))}`;
         active8 /= Math.max(parseFloat(`${holderW.size}`), 4);
         pauseL += `${parseInt(`${active8}`) & 2}`;
         holderW = new Map([[`${sans4.length}`, nativeO.length >> (Math.min(Math.abs(3), 1))]]);
         nativeO = `${parseInt(`${active8}`) | 3}`;
         sans4 = [1 / (Math.max(5, sans4.length))];
         break;
      }
          let styleW = 3;
          let faviconW = String.fromCharCode(121,95,48,0);
         bootsplashY += `${styleW}`;
         styleW -= (String.fromCharCode(55,0) == faviconW ? faviconW.length : faviconW.length);
         bootsplashY = `${bootsplashY.length}`;
      for (let y = 0; y < 1; y++) {
         bootsplashY += `${bootsplashY.length * parseInt(`${more5}`)}`;
      }
      let adulti = 6900392.0 >= more5;
      do {
         more5 *= 3 * bootsplashY.length;
         if (adulti) {
            break;
         }
      } while (adulti && ((parseInt(`${more5}`) + bootsplashY.length) < 5));
       let dataB = 2.0;
      hook9 = 93.41 == (macaud + more5);
   let goalR = chinad ? !chinad : chinad;
   do {
      chinad = wind8 > 90.24 || !hook9;
      if (goalR) {
         break;
      }
   } while (goalR && (!chinad || hook9));
   while (2 <= nterstitialD.length && chinad) {
       let playercommon2 = true;
       let teamO = String.fromCharCode(99,111,115,105,103,110,97,116,111,114,121,0);
       let shrinkF: Array<any> = [980, 655];
      if (shrinkF.length >= 2) {
         shrinkF.push(3 & shrinkF.length);
      }
         playercommon2 = teamO.length <= 5;
      let baiduv = shrinkF.length <= 8797515;
      do {
         shrinkF.push(2);
         if (baiduv) {
            break;
         }
      } while ((1 <= shrinkF.length && (shrinkF.length ^ 1) <= 4) && baiduv);
      let themeM = String.fromCharCode(51,55,118,53,100,120,120,104,53,0) == teamO;
      do {
         teamO = `${teamO.length}`;
         if (themeM) {
            break;
         }
      } while ((!playercommon2 || teamO.length > 4) && themeM);
         teamO = `${(teamO.length / (Math.max(5, (playercommon2 ? 3 : 4))))}`;
      nterstitialD = `${parseInt(`${macaud}`) / (Math.max(mbnativeB.size, 5))}`;
      break;
   }
   let tempZ = hnewsb == String.fromCharCode(56,117,103,112,115,113,98,0);
   do {
      hnewsb += `${strings}`;
      if (tempZ) {
         break;
      }
   } while ((!hook9) && tempZ);
      chinad = 75 < strings && zoomj == String.fromCharCode(112,0);

    if (banner) {

       let constantsd = 4;
       let carouseli: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,114,101,102,0),430], [String.fromCharCode(101,107,121,0),79], [String.fromCharCode(114,101,100,117,99,116,105,111,110,0),412]]);
       let spinnerG: Array<any> = [329, 99];
      for (let b = 0; b < 2; b++) {
          let singaporeP = 2;
          let connectionB = String.fromCharCode(97,117,116,104,101,110,116,104,105,99,97,116,101,0);
          let submitr = String.fromCharCode(103,95,50,48,95,114,116,109,100,0);
          let sinai = 1;
          let blackp = String.fromCharCode(108,104,97,115,104,0);
         carouseli.set(`${sinai}`, submitr.length & 1);
         singaporeP -= singaporeP + 2;
         connectionB = `${(blackp == String.fromCharCode(76,0) ? blackp.length : singaporeP)}`;
         submitr = `${(String.fromCharCode(52,0) == blackp ? blackp.length : singaporeP)}`;
         sinai /= Math.max(connectionB.length + 2, 1);
      }
          let shirtT = 2;
          let sigmob3 = 0;
         spinnerG.push(spinnerG.length);
         shirtT |= 3;
         sigmob3 <<= Math.min(1, Math.abs(sigmob3 + 2));
      while (4 >= spinnerG.length) {
         spinnerG.push(carouseli.size % 3);
         break;
      }
      for (let f = 0; f < 2; f++) {
         constantsd -= constantsd ^ 2;
      }
       let singaporeV = String.fromCharCode(100,99,116,120,0);
      for (let y = 0; y < 3; y++) {
          let guideV = 4.0;
          let becomeP = 2;
          let castingX = 0.0;
          let twittern: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,105,111,110,0),859], [String.fromCharCode(105,110,116,101,114,102,114,97,109,101,95,102,95,54,0),275]]);
         carouseli.set(`${becomeP}`, becomeP * twittern.size);
         guideV *= parseFloat(`${1 % (Math.max(parseInt(`${guideV}`), 7))}`);
         castingX -= parseFloat(`${parseInt(`${guideV}`)}`);
         twittern.set(`${castingX}`, 3);
      }
         spinnerG = [spinnerG.length + singaporeV.length];
      for (let l = 0; l < 1; l++) {
         constantsd /= Math.max(1, 1 / (Math.max(5, singaporeV.length)));
      }
      while (5 >= singaporeV.length) {
          let detailsu = true;
          let corel = String.fromCharCode(111,112,101,110,103,108,0);
          let acceptedV: Array<any> = [801, 500];
          let minimizeF = 0.0;
          let tooltipsy = 0;
         singaporeV += `${constantsd ^ spinnerG.length}`;
         detailsu = acceptedV.length == 92;
         corel += `${((detailsu ? 3 : 1) / (Math.max(corel.length, 7)))}`;
         acceptedV.push(2 >> (Math.min(Math.abs(parseInt(`${minimizeF}`)), 1)));
         minimizeF *= (parseFloat(`${String.fromCharCode(56,0) == corel ? corel.length : (detailsu ? 3 : 5)}`));
         tooltipsy *= tooltipsy;
         break;
      }
      nterstitialD += "3";
   while (!hnewsb.includes(`${chinad}`)) {
      chinad = 28 <= hnewsb.length;
      break;
   }
   for (let w = 0; w < 1; w++) {
       let mooni: Map<any, any> = new Map([[String.fromCharCode(101,95,51,57,95,114,101,100,0),378], [String.fromCharCode(100,121,108,105,98,115,0),663]]);
       let ajaxQ = String.fromCharCode(111,116,111,98,0);
       let mbnativeadvancedQ = 4.0;
       let flipper6 = String.fromCharCode(99,108,103,101,116,0);
         ajaxQ = `${flipper6.length + 3}`;
       let stored = 5.0;
       let leftF = 1.0;
      for (let w = 0; w < 2; w++) {
          let coreH: Map<any, any> = new Map([[String.fromCharCode(109,105,110,105,109,97,108,0),String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,121,117,118,0)], [String.fromCharCode(115,99,97,108,101,102,97,99,116,111,114,115,0),String.fromCharCode(112,105,110,103,0)]]);
          let ballR = false;
         leftF /= Math.max(4, parseFloat(`${2 * flipper6.length}`));
         coreH = new Map([[`${coreH.size}`, (1 + (ballR ? 1 : 4))]]);
         ballR = coreH.size > 19;
      }
      while (3.21 <= (4.83 + mbnativeadvancedQ) && (4.83 + stored) <= 1.82) {
         mbnativeadvancedQ /= Math.max(1, parseInt(`${mbnativeadvancedQ}`) / (Math.max(ajaxQ.length, 9)));
         break;
      }
      for (let l = 0; l < 1; l++) {
         flipper6 = `${parseInt(`${mbnativeadvancedQ}`) / (Math.max(4, parseInt(`${leftF}`)))}`;
      }
      for (let f = 0; f < 3; f++) {
          let dataO: Array<any> = [920, 325];
          let football_ = String.fromCharCode(103,105,116,104,117,98,0);
          let episodeD: Array<any> = [331, 765, 871];
          let appsU = String.fromCharCode(114,95,50,48,95,116,104,114,101,97,100,115,0);
          let internetA = true;
         ajaxQ += `${1 % (Math.max(parseInt(`${stored}`), 8))}`;
         dataO = [2];
         football_ = `${(appsU == String.fromCharCode(109,0) ? appsU.length : football_.length)}`;
         episodeD.push(football_.length);
         internetA = String.fromCharCode(88,0) == football_;
      }
      for (let m = 0; m < 1; m++) {
         mooni = new Map([[ajaxQ, parseInt(`${mbnativeadvancedQ}`)]]);
      }
      if ((flipper6.length >> (Math.min(Math.abs(4), 2))) < 2 && (5.86 + stored) < 4.69) {
         stored += parseFloat(`${1}`);
      }
         stored -= parseFloat(`${parseInt(`${leftF}`) | mooni.size}`);
         stored *= parseFloat(`${flipper6.length}`);
         leftF -= parseFloat(`${ajaxQ.length << (Math.min(Math.abs(2), 1))}`);
         mooni.set(flipper6, 1 ^ flipper6.length);
      macaud *= (hnewsb.length + (hook9 ? 3 : 3));
   }
   for (let p = 0; p < 1; p++) {
      mbnativeB.set(zoomj, (zoomj == String.fromCharCode(105,0) ? parseInt(`${wind8}`) : zoomj.length));
   }
      mbnativeB.set(`${chinad}`, 1 + mbnativeB.size);
   while (1.42 <= (3.86 * nativeex_) && hook9) {
      hook9 = !hnewsb.endsWith(`${chinad}`);
      break;
   }
      setBannerAd(banner);
    } else {

      mbnativeB.set(hnewsb, nterstitialD.length - 3);
   while (hook9) {
       let interstitial1: Array<any> = [708, 696, 718];
       let homef = true;
         interstitial1.push(((homef ? 5 : 3) - 2));
      if ((interstitial1.length | 3) <= 5) {
          let splashW: Map<any, any> = new Map([[String.fromCharCode(112,115,97,0),9], [String.fromCharCode(119,95,55,95,112,111,111,112,0),890]]);
         homef = (interstitial1.length + splashW.size) <= 4;
      }
      let clockJ = interstitial1.length >= 9046423;
      do {
          let editf = 2.0;
          let auto_lgL = String.fromCharCode(105,116,101,114,97,116,105,111,110,115,0);
          let rewardvideoq: Map<any, any> = new Map([[String.fromCharCode(116,115,99,99,100,97,116,97,0),String.fromCharCode(118,109,97,112,115,105,110,95,114,95,51,52,0)], [String.fromCharCode(115,99,104,101,100,117,108,101,114,0),String.fromCharCode(110,95,57,53,95,113,117,97,110,116,120,0)]]);
          let ajax4 = false;
         interstitial1 = [1];
         editf *= (String.fromCharCode(69,0) == auto_lgL ? auto_lgL.length : rewardvideoq.size);
         rewardvideoq = new Map([[`${rewardvideoq.size}`, 3]]);
         ajax4 = 40 > rewardvideoq.size;
         if (clockJ) {
            break;
         }
      } while (clockJ && (homef));
          let nativel = 4.0;
          let targetX = 1;
         homef = targetX >= nativel;
      while ((interstitial1.length ^ 2) == 3) {
          let sports8 = String.fromCharCode(115,119,97,112,112,97,98,108,101,0);
          let logouta = true;
         homef = !sports8.startsWith(`${logouta}`);
         break;
      }
      for (let p = 0; p < 1; p++) {
         interstitial1 = [interstitial1.length];
      }
      hook9 = !nterstitialD.endsWith(`${macaud}`);
      break;
   }
   for (let v = 0; v < 3; v++) {
      strings ^= ((hook9 ? 5 : 2));
   }
   let trash7 = chinad ? !chinad : chinad;
   do {
      chinad = macaud == 86.7;
      if (trash7) {
         break;
      }
   } while (trash7 && (chinad));
   for (let d = 0; d < 1; d++) {
      hook9 = (parseInt(`${macaud}`) * hnewsb.length) < 9;
   }
      mbnativeB.set(`${chinad}`, ((chinad ? 4 : 3)));
      setBannerAd(undefined);
    }
  };

  const shouldShowAds = async () => {
       let taiwanB = false;
    let down0 = String.fromCharCode(102,105,110,103,101,114,115,0);
    let checkboxs = String.fromCharCode(101,115,116,105,109,97,116,101,100,0);
    let placeholderJ = true;
    let sans_: Array<any> = [225, 238, 969];
    let condensedk = 3;
    let vignettea = 2.0;
    let unewinterstitialH = String.fromCharCode(115,116,97,99,107,115,0);
    let canvask = String.fromCharCode(102,111,117,114,120,109,95,120,95,52,56,0);
    let schedulex = String.fromCharCode(108,105,118,101,100,0);
    let g_lockp = true;
    let actionsV: Map<any, any> = new Map([[String.fromCharCode(97,105,109,100,95,107,95,51,53,0),108], [String.fromCharCode(102,117,110,110,121,0),851]]);
   if (placeholderJ) {
       let pathJ = String.fromCharCode(114,112,99,103,101,110,0);
       let filterx = true;
       let mailb = 0.0;
      if (pathJ.length < 4) {
          let iconi: Array<any> = [207, 957];
         pathJ += "1";
         iconi.push(2 - iconi.length);
      }
         pathJ = `${(pathJ.length ^ (filterx ? 4 : 2))}`;
         filterx = !filterx;
         mailb /= Math.max(((filterx ? 5 : 2)), 3);
         mailb += (parseInt(`${mailb}`) & (filterx ? 4 : 5));
      for (let s = 0; s < 1; s++) {
         mailb *= (1 ^ (filterx ? 1 : 2));
      }
         mailb += parseInt(`${mailb}`) % 3;
      if (5.50 < mailb || (mailb / 5.50) < 4.47) {
          let macau0 = false;
          let storer: Map<any, any> = new Map([[String.fromCharCode(109,98,102,105,108,116,101,114,0),602], [String.fromCharCode(109,120,112,101,103,0),641], [String.fromCharCode(119,95,50,52,95,115,117,98,118,105,101,119,0),688]]);
         filterx = 92.54 >= mailb;
         macau0 = (67 <= (storer.size - (!macau0 ? storer.size : 2)));
      }
      if ((mailb / 2.69) == 2.32) {
         mailb *= ((filterx ? 3 : 4) + parseInt(`${mailb}`));
      }
      vignettea -= condensedk / 3;
   }
      sans_ = [(parseInt(`${vignettea}`) % (Math.max(6, (taiwanB ? 2 : 5))))];
      placeholderJ = !placeholderJ;
       let savet = false;
       let stylem = false;
          let termsk = true;
          let nalyticst = 2;
          let verticale: Map<any, any> = new Map([[String.fromCharCode(109,101,109,115,121,115,0),String.fromCharCode(97,110,97,108,111,103,0)], [String.fromCharCode(101,110,116,114,121,0),String.fromCharCode(105,110,115,116,114,117,109,101,110,116,97,116,105,111,110,0)]]);
         stylem = termsk;
         nalyticst >>= Math.min(4, Math.abs(verticale.size + 3));
         verticale.set(`${nalyticst}`, nalyticst);
       let rewindz = 2;
      if (4 < (1 / (Math.max(10, rewindz)))) {
          let goalz = String.fromCharCode(101,118,97,108,0);
          let sound4 = 0.0;
          let room2: Map<any, any> = new Map([[String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,0),521], [String.fromCharCode(109,117,108,116,105,112,97,114,116,95,111,95,51,49,0),638]]);
          let nativeexp = String.fromCharCode(99,114,111,112,112,105,110,103,0);
          let roundt = String.fromCharCode(97,116,97,99,101,110,116,101,114,0);
         stylem = !stylem;
         goalz = `${room2.size}`;
         sound4 /= Math.max(4, parseFloat(`${1 * goalz.length}`));
         room2.set(`${sound4}`, (roundt == String.fromCharCode(82,0) ? roundt.length : parseInt(`${sound4}`)));
         nativeexp += `${goalz.length * parseInt(`${sound4}`)}`;
      }
      let productp = stylem ? !stylem : stylem;
      do {
          let modelF = true;
         stylem = rewindz <= 31 || !stylem;
         modelF = (modelF ? !modelF : modelF);
         if (productp) {
            break;
         }
      } while ((savet) && productp);
          let frame_or = true;
          let commonR = 2.0;
          let hejiI = 5.0;
         savet = hejiI < 7.18;
         frame_or = !frame_or;
         commonR /= Math.max((parseFloat(`${parseInt(`${commonR}`) | (frame_or ? 2 : 4)}`)), 5);
         hejiI += parseFloat(`${3 + parseInt(`${commonR}`)}`);
          let y_titleO = 0.0;
          let weibo8 = String.fromCharCode(110,95,49,95,116,111,117,99,104,0);
          let cast3 = 3.0;
         savet = (rewindz * cast3) == 100;
         y_titleO *= weibo8.length;
         weibo8 += `${parseInt(`${y_titleO}`) / (Math.max(weibo8.length, 1))}`;
         cast3 -= parseFloat(`${parseInt(`${y_titleO}`)}`);
      sans_.push(((savet ? 1 : 2) << (Math.min(Math.abs((stylem ? 3 : 3)), 1))));
      checkboxs += `${((placeholderJ ? 5 : 1) % (Math.max(3, 10)))}`;
      unewinterstitialH = `${1 & parseInt(`${vignettea}`)}`;
   for (let w = 0; w < 2; w++) {
      placeholderJ = 59 >= unewinterstitialH.length;
   }
   for (let a = 0; a < 1; a++) {
      taiwanB = String.fromCharCode(109,0) == checkboxs && 45 <= condensedk;
   }
       let transfery = false;
       let desce = String.fromCharCode(115,117,98,100,105,118,105,115,105,111,110,0);
      let giftb = desce == String.fromCharCode(106,53,56,111,0);
      do {
         desce = `${(1 | (transfery ? 4 : 5))}`;
         if (giftb) {
            break;
         }
      } while (giftb && (3 <= desce.length));
      for (let m = 0; m < 2; m++) {
          let shirtm = false;
         transfery = (!transfery ? !shirtm : transfery);
      }
       let annerk = true;
       let friends1 = true;
      let manifestR = annerk ? !annerk : annerk;
      do {
          let greenm = 2.0;
          let penaltyD = 3.0;
          let goalt: Map<any, any> = new Map([[String.fromCharCode(118,95,56,51,95,112,114,111,103,114,97,109,0),701], [String.fromCharCode(112,108,117,114,97,108,105,122,101,100,0),824], [String.fromCharCode(108,111,99,97,116,105,111,110,0),716]]);
          let dangerz = String.fromCharCode(104,95,56,95,100,121,110,97,114,114,97,121,0);
         annerk = String.fromCharCode(113,0) == desce;
         greenm /= Math.max(4, goalt.size);
         penaltyD /= Math.max(goalt.size, 3);
         dangerz += `${parseInt(`${penaltyD}`)}`;
         if (manifestR) {
            break;
         }
      } while ((1 == desce.length) && manifestR);
      while (transfery) {
          let textB = String.fromCharCode(108,101,114,116,95,108,95,49,50,0);
          let miniZ = String.fromCharCode(97,110,110,101,120,98,95,118,95,50,57,0);
         desce += "2";
         textB += `${miniZ.length}`;
         miniZ += `${(miniZ == String.fromCharCode(119,0) ? miniZ.length : textB.length)}`;
         break;
      }
      while (!friends1) {
         annerk = !friends1;
         break;
      }
      placeholderJ = taiwanB;
       let sportG = String.fromCharCode(116,97,110,103,101,110,116,0);
       let configureO = false;
       let plashA: Array<any> = [999, 411, 106];
         sportG += `${((configureO ? 3 : 3) * plashA.length)}`;
          let scheduleX: Array<any> = [1000, 128, 314];
         plashA = [3];
         scheduleX.push(scheduleX.length / (Math.max(scheduleX.length, 4)));
         configureO = plashA.length < 51;
      if (plashA.length == sportG.length) {
         sportG += `${sportG.length + 3}`;
      }
         sportG += `${((configureO ? 3 : 5))}`;
          let schedule3 = String.fromCharCode(112,114,111,100,117,99,116,105,111,110,0);
         configureO = plashA.length < 4 || configureO;
         schedule3 += `${1 & schedule3.length}`;
         plashA.push(1);
         plashA.push(((configureO ? 3 : 5) % 1));
      while (plashA.length <= 4) {
         plashA.push(plashA.length);
         break;
      }
      vignettea -= condensedk ^ sportG.length;
       let securityn = String.fromCharCode(115,97,118,101,112,111,105,110,116,115,0);
       let placeholderX = false;
      while (!placeholderX && securityn.length >= 1) {
         placeholderX = !placeholderX;
         break;
      }
          let singaporeG = String.fromCharCode(114,101,115,101,97,114,99,104,0);
         placeholderX = securityn.length <= 85 && placeholderX;
         singaporeG = "2";
          let areaD: Map<any, any> = new Map([[String.fromCharCode(115,105,122,101,114,0),true ], [String.fromCharCode(105,95,51,49,95,97,112,101,116,97,103,0),false ]]);
          let nativeex5 = String.fromCharCode(115,111,108,105,100,105,116,121,0);
          let ecopy_1lw = 2.0;
         placeholderX = securityn.endsWith(`${placeholderX}`);
         areaD = new Map([[`${areaD.size}`, 2 ^ nativeex5.length]]);
         nativeex5 += `${parseInt(`${ecopy_1lw}`) & 3}`;
         ecopy_1lw -= parseFloat(`${parseInt(`${ecopy_1lw}`) / 1}`);
         placeholderX = securityn.length > 84 && placeholderX;
         securityn += `${((placeholderX ? 1 : 4))}`;
       let suggestionZ = 4.0;
       let othera = 1.0;
      checkboxs = `${sans_.length}`;
      vignettea *= condensedk;
       let foregroundG: Map<any, any> = new Map([[String.fromCharCode(108,105,98,99,111,100,101,99,0),894], [String.fromCharCode(112,101,114,105,111,100,115,0),546], [String.fromCharCode(98,101,110,101,102,105,99,105,97,114,121,0),609]]);
       let appsG = 3;
         appsG >>= Math.min(Math.abs(foregroundG.size), 1);
          let ball2 = String.fromCharCode(106,101,114,114,111,114,0);
          let orientationc = 4;
         appsG <<= Math.min(2, Math.abs(orientationc));
         ball2 = `${(ball2 == String.fromCharCode(97,0) ? ball2.length : ball2.length)}`;
         orientationc -= ball2.length * ball2.length;
         foregroundG.set(`${appsG}`, appsG);
         foregroundG.set(`${appsG}`, foregroundG.size ^ 1);
         foregroundG.set(`${appsG}`, appsG);
         foregroundG.set(`${appsG}`, appsG / (Math.max(foregroundG.size, 1)));
      down0 = `${((placeholderJ ? 1 : 2) * (taiwanB ? 1 : 5))}`;
      vignettea += condensedk;
   while (2 < (sans_.length + 3) && 4.94 < (vignettea - 5.43)) {
       let pathG: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,110,101,116,0),566], [String.fromCharCode(114,101,109,97,112,112,105,110,103,0),899], [String.fromCharCode(102,115,112,112,0),708]]);
       let mimod = String.fromCharCode(101,110,97,98,108,101,115,0);
       let mbnativeadvancede = 5.0;
      for (let o = 0; o < 1; o++) {
         mbnativeadvancede += parseFloat(`${pathG.size << (Math.min(mimod.length, 4))}`);
      }
      while ((3.90 + mbnativeadvancede) < 1.30) {
         mimod += `${parseInt(`${mbnativeadvancede}`) + 1}`;
         break;
      }
      for (let f = 0; f < 2; f++) {
         mimod = `${(String.fromCharCode(103,0) == mimod ? mimod.length : parseInt(`${mbnativeadvancede}`))}`;
      }
          let memberz = 4;
          let emptyV = 0.0;
         mimod = `${memberz % (Math.max(parseInt(`${mbnativeadvancede}`), 6))}`;
         memberz %= Math.max(3, parseInt(`${emptyV}`));
          let zhubo6 = 4;
          let skip1: Array<any> = [105, 297];
          let headery: Array<any> = [String.fromCharCode(120,112,111,115,117,114,101,0), String.fromCharCode(102,111,108,108,111,119,101,114,0)];
         mbnativeadvancede *= parseFloat(`${parseInt(`${mbnativeadvancede}`)}`);
         zhubo6 -= skip1.length - zhubo6;
         skip1.push(zhubo6 + skip1.length);
         headery = [headery.length >> (Math.min(3, Math.abs(zhubo6)))];
      sans_.push(pathG.size / (Math.max(2, 5)));
      break;
   }
      down0 = `${parseInt(`${vignettea}`) / 2}`;
      sans_.push(((placeholderJ ? 3 : 3) << (Math.min(Math.abs(parseInt(`${vignettea}`)), 4))));

    fetchBannerAd();
  };

  useFocusEffect(
    useCallback(() => {
      shouldShowAds();
    }, [])
  );

  const [deviceUniqueId, setDeviceUniqueId] = useState("");

  const setDeviceId = async () => {
       let countryU = String.fromCharCode(114,101,118,111,107,101,100,0);
    let countryH: Map<any, any> = new Map([[String.fromCharCode(108,111,115,101,0),521], [String.fromCharCode(99,104,111,105,99,101,0),41], [String.fromCharCode(109,111,118,105,110,103,0),770]]);
    let mimok = String.fromCharCode(113,114,99,111,100,101,0);
    let photoB: Array<any> = [93, 813];
    let umengq: Array<any> = [195, 650, 54];
    let m_managerk = String.fromCharCode(114,102,116,98,115,117,98,0);
    let successs = String.fromCharCode(103,97,109,109,97,102,105,108,116,101,114,0);
    let interstitiale = String.fromCharCode(99,111,114,101,0);
    let profilev = 1;
    let linkd = true;
    let typesQ = String.fromCharCode(111,103,103,100,101,99,0);
    let hearty = String.fromCharCode(114,100,102,116,0);
   for (let s = 0; s < 2; s++) {
      successs += `${umengq.length & successs.length}`;
   }
      profilev *= 2;
      successs = `${2 + countryH.size}`;
       let fastforward3 = 1;
         fastforward3 += fastforward3 + 1;
      if (1 < (2 - fastforward3) && (fastforward3 - fastforward3) < 2) {
          let constants0 = String.fromCharCode(105,110,105,116,100,101,99,0);
          let bufferw = String.fromCharCode(107,101,114,110,101,100,0);
         fastforward3 &= 1;
         constants0 += "1";
         bufferw += `${bufferw.length}`;
      }
         fastforward3 -= fastforward3 * fastforward3;
      successs += `${fastforward3}`;
   while ((countryH.size - 5) >= 5 || 1 >= (countryH.size - 5)) {
      countryH.set(successs, 1);
      break;
   }
   let klevinT = 5313134 <= interstitiale.length;
   do {
       let modityZ = String.fromCharCode(111,112,116,103,114,111,117,112,95,100,95,53,51,0);
       let foreground0 = 0;
      if (!modityZ.includes(`${foreground0}`)) {
         modityZ = `${foreground0 % (Math.max(2, 6))}`;
      }
      if ((modityZ.length >> (Math.min(Math.abs(3), 4))) > 4) {
         modityZ = `${foreground0}`;
      }
      for (let x = 0; x < 3; x++) {
          let gradleG = String.fromCharCode(98,95,55,57,95,99,111,110,103,0);
         modityZ = `${gradleG.length * 1}`;
      }
         modityZ = `${(String.fromCharCode(113,0) == modityZ ? modityZ.length : foreground0)}`;
         foreground0 -= 3;
         modityZ = `${foreground0}`;
      interstitiale += `${interstitiale.length << (Math.min(Math.abs(2), 4))}`;
      if (klevinT) {
         break;
      }
   } while (klevinT && (2 < (umengq.length << (Math.min(Math.abs(3), 2))) || 3 < (interstitiale.length << (Math.min(5, umengq.length)))));
      photoB = [2];
      countryU += `${interstitiale.length}`;
   if (successs.startsWith(`${mimok.length}`)) {
      successs = `${photoB.length}`;
   }
   while ((photoB.length / (Math.max(mimok.length, 3))) >= 5) {
      photoB.push(photoB.length);
      break;
   }
   if (photoB.length >= mimok.length) {
       let fieldv = false;
       let hooksy = String.fromCharCode(99,111,112,121,116,111,0);
       let rewardvideoH = true;
      for (let t = 0; t < 1; t++) {
          let projectM: Array<any> = [178, 547, 874];
          let borderlessF: Array<any> = [175, 876, 33];
          let whistleb: Array<any> = [852, 530];
         hooksy += `${whistleb.length}`;
         projectM.push(borderlessF.length);
         borderlessF = [1];
         whistleb = [borderlessF.length];
      }
      for (let p = 0; p < 1; p++) {
          let turns = 5.0;
         rewardvideoH = turns < 38.23;
      }
      while (rewardvideoH) {
          let animationf = String.fromCharCode(116,104,114,101,97,100,115,97,102,101,0);
          let topont = 3.0;
          let searchF: Array<any> = [421, 522];
         hooksy += `${hooksy.length}`;
         animationf += `${animationf.length}`;
         topont /= Math.max(parseFloat(`${1 + parseInt(`${topont}`)}`), 4);
         searchF.push(parseInt(`${topont}`));
         break;
      }
       let actionsk = false;
      if (!rewardvideoH) {
          let adultA = 5.0;
          let friendsD: Array<any> = [43, 832, 484];
          let guideA = 0.0;
         actionsk = !actionsk;
         adultA -= 3;
         friendsD.push(parseInt(`${adultA}`) ^ friendsD.length);
         guideA /= Math.max(3 / (Math.max(parseInt(`${guideA}`), 3)), 5);
      }
      while (!hooksy.includes(`${actionsk}`)) {
         actionsk = actionsk || rewardvideoH;
         break;
      }
      if (!rewardvideoH) {
         rewardvideoH = !fieldv;
      }
      while (!rewardvideoH) {
          let gemfilep = 4.0;
         actionsk = fieldv;
         gemfilep -= parseFloat(`${parseInt(`${gemfilep}`)}`);
         break;
      }
      while (hooksy.length == 1) {
          let playlist0 = 2;
         rewardvideoH = playlist0 == 54;
         break;
      }
      mimok = "1";
   }
      countryH = new Map([[`${photoB.length}`, photoB.length - interstitiale.length]]);

    let deviceId = await DeviceInfo.getUniqueId();

      successs = `${interstitiale.length}`;
      successs += `${mimok.length << (Math.min(Math.abs(1), 2))}`;
   let package_rq = countryU == String.fromCharCode(57,97,57,111,0);
   do {
       let promotionU = true;
       let notificationW = false;
       let mimop: Map<any, any> = new Map([[String.fromCharCode(102,101,108,101,109,0),645], [String.fromCharCode(98,108,111,99,107,99,104,97,105,110,115,0),811], [String.fromCharCode(104,105,100,105,110,103,0),637]]);
      let resultQ = notificationW ? !notificationW : notificationW;
      do {
         notificationW = null != mimop.get(`${notificationW}`);
         if (resultQ) {
            break;
         }
      } while (resultQ && (promotionU));
      while (notificationW) {
          let backwardL: Array<any> = [777, 725, 623];
          let tumbnailB = 1.0;
         promotionU = null == mimop.get(`${tumbnailB}`);
         backwardL.push(1 + backwardL.length);
         tumbnailB *= 2 % (Math.max(8, backwardL.length));
         break;
      }
       let inviteK = String.fromCharCode(122,111,109,98,105,101,0);
       let material0 = String.fromCharCode(108,111,110,103,105,116,117,100,101,0);
      let tailH = String.fromCharCode(101,55,48,120,0) == material0;
      do {
         material0 = `${inviteK.length}`;
         if (tailH) {
            break;
         }
      } while (tailH && (1 == mimop.size));
      if (inviteK.endsWith(material0)) {
         material0 += `${((notificationW ? 1 : 4))}`;
      }
         mimop.set(material0, (material0.length ^ (notificationW ? 3 : 5)));
          let type_c5 = String.fromCharCode(110,97,109,101,115,112,97,99,101,0);
         material0 = `${(3 >> (Math.min(4, Math.abs((promotionU ? 2 : 3)))))}`;
         type_c5 += `${type_c5.length}`;
      while ((material0.length >> (Math.min(Math.abs(4), 4))) <= 1) {
          let tumbnailZ = false;
          let logo6 = 2.0;
         material0 = `${(2 ^ (tumbnailZ ? 4 : 1))}`;
         tumbnailZ = logo6 <= 71.26 && logo6 <= 71.26;
         break;
      }
       let navigationJ = false;
      countryU = `${countryU.length}`;
      if (package_rq) {
         break;
      }
   } while (package_rq && (1 == (countryU.length - countryH.size) || (countryU.length - countryH.size) == 1));
       let pingB = false;
       let faviconE = String.fromCharCode(112,103,109,121,117,118,0);
      while (faviconE.startsWith(`${pingB}`)) {
         pingB = pingB && faviconE.length >= 75;
         break;
      }
      if (2 > faviconE.length || !pingB) {
         faviconE += `${((pingB ? 2 : 4) ^ faviconE.length)}`;
      }
          let singlet = String.fromCharCode(112,114,105,110,116,111,117,116,0);
          let foreground3: Array<any> = [364, 104, 404];
         faviconE += `${(singlet == String.fromCharCode(75,0) ? singlet.length : foreground3.length)}`;
      while (faviconE.length == 3 || pingB) {
          let sportB = 3.0;
          let showL: Map<any, any> = new Map([[String.fromCharCode(99,109,97,107,101,0),797], [String.fromCharCode(114,101,109,111,118,101,103,114,97,105,110,0),179], [String.fromCharCode(99,114,111,115,115,102,97,100,101,0),802]]);
          let popupR = String.fromCharCode(100,117,112,108,101,120,0);
          let save1 = String.fromCharCode(114,116,112,112,114,111,116,111,0);
          let mini_ = String.fromCharCode(109,97,103,101,110,116,97,0);
         faviconE += `${faviconE.length & 1}`;
         sportB *= parseFloat(`${parseInt(`${sportB}`) * showL.size}`);
         showL = new Map([[save1, save1.length % (Math.max(1, parseInt(`${sportB}`)))]]);
         popupR = `${mini_.length / (Math.max(3, 1))}`;
         mini_ += `${mini_.length & 1}`;
         break;
      }
         faviconE += `${faviconE.length + 1}`;
         pingB = !pingB;
      profilev >>= Math.min(5, Math.abs(mimok.length * 3));
       let activei = 0.0;
         activei /= Math.max(parseFloat(`${3 & parseInt(`${activei}`)}`), 5);
          let greyW = String.fromCharCode(100,112,99,109,0);
          let nterstitialv = String.fromCharCode(108,105,102,101,0);
          let traminik = String.fromCharCode(115,99,105,101,110,116,105,102,105,99,0);
         activei /= Math.max(4, (parseFloat(`${nterstitialv == String.fromCharCode(118,0) ? traminik.length : nterstitialv.length}`)));
         greyW += `${greyW.length}`;
         activei *= parseFloat(`${3}`);
      m_managerk = "3";
   for (let z = 0; z < 1; z++) {
       let topon3 = String.fromCharCode(112,111,115,116,102,105,120,0);
       let bufferk = 3;
       let usernameQ = String.fromCharCode(112,95,54,48,95,100,97,116,97,114,0);
       let formJ = String.fromCharCode(122,101,114,111,101,100,95,110,95,55,52,0);
       let corea = 1.0;
      if (formJ != String.fromCharCode(86,0)) {
         topon3 += `${parseInt(`${corea}`) % (Math.max(topon3.length, 7))}`;
      }
      for (let f = 0; f < 3; f++) {
          let with_qm7 = 5;
         topon3 += `${usernameQ.length}`;
         with_qm7 %= Math.max(1, 3);
      }
      if ((4 & formJ.length) > 3) {
         corea *= 3 + bufferk;
      }
         bufferk %= Math.max(2, 3 | bufferk);
         formJ += `${formJ.length << (Math.min(topon3.length, 2))}`;
       let country5 = String.fromCharCode(110,101,111,110,116,101,115,116,0);
      if ((corea - 4.8) <= 1.34) {
         corea *= 3 % (Math.max(2, topon3.length));
      }
          let statisticsj = true;
          let toponJ = 4.0;
         corea /= Math.max(2 | usernameQ.length, 4);
         statisticsj = statisticsj && 78.20 <= toponJ;
         toponJ -= parseFloat(`${parseInt(`${toponJ}`) | 2}`);
       let modald = 4;
       let dragY = 5;
      let injuryA = formJ.length <= 7839072;
      do {
         formJ = `${parseInt(`${corea}`)}`;
         if (injuryA) {
            break;
         }
      } while ((formJ.endsWith(`${corea}`)) && injuryA);
       let backa = false;
      while ((bufferk | 2) < 3 && 2 < (bufferk | topon3.length)) {
         topon3 = `${3 + topon3.length}`;
         break;
      }
         usernameQ += `${(country5 == String.fromCharCode(107,0) ? (backa ? 5 : 1) : country5.length)}`;
          let langkeyY = true;
         dragY /= Math.max(3, bufferk);
         langkeyY = !langkeyY && !langkeyY;
          let chartS: Array<any> = [413, 792, 326];
         corea += 3;
         chartS.push(1);
      countryU += `${profilev * parseInt(`${corea}`)}`;
   }
   while (interstitiale != String.fromCharCode(49,0) && successs != String.fromCharCode(87,0)) {
      interstitiale += "1";
      break;
   }
      countryH = new Map([[`${umengq.length}`, 1]]);
      profilev -= 2 ^ successs.length;
      profilev &= 1 & interstitiale.length;
      countryH.set(`${profilev}`, profilev * 3);
      photoB = [photoB.length - 1];
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
    tt_humidity_guide.profileBannerViewAnalytics({
      ads_id: id,
      ads_name: name,
      ads_slot_id: slot_id,
      ads_title: title,
    });
  }, []);

  const onBannerPress = useCallback(({ id, name, slot_id, title }: any) => {
    tt_humidity_guide.profileBannerClickAnalytics({
      ads_id: id,
      ads_name: name,
      ads_slot_id: slot_id,
      ads_title: title,
    });
  }, []);



  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);

  const renderOverlay = () => {
       let adultB = 4;
    let readc = true;
    let fastforwardM = String.fromCharCode(103,101,116,99,114,101,100,0);
    let filledU = String.fromCharCode(98,97,110,0);
    let filedk = 2;
    let gifth: Array<any> = [579, 368, 791];
    let heartc = 5.0;
    let tailO = false;
    let onewinterstitialM = 0;
    let hookA = String.fromCharCode(110,111,97,115,109,0);
    let fullH = String.fromCharCode(101,98,117,114,0);
    let stylem = String.fromCharCode(99,97,108,99,117,108,97,116,101,95,57,95,53,49,0);
    let updatesF = String.fromCharCode(105,100,119,116,0);
    let areaT = String.fromCharCode(112,111,115,116,115,99,97,108,101,0);
    let grayA = 5.0;
   let statsI = String.fromCharCode(104,109,115,119,118,48,107,57,101,111,0) == filledU;
   do {
      filledU += `${adultB}`;
      if (statsI) {
         break;
      }
   } while (statsI && (2 > (filledU.length / 5) && (filledU.length / (Math.max(5, 3))) > 1));
   for (let j = 0; j < 3; j++) {
      hookA = `${adultB}`;
   }
      readc = filledU.length < 32;
       let episodesq = 0.0;
      let fillede = 7905675.0 >= episodesq;
      do {
         episodesq += parseInt(`${episodesq}`) ^ 2;
         if (fillede) {
            break;
         }
      } while ((episodesq == episodesq) && fillede);
          let moviesY = String.fromCharCode(115,108,111,116,115,0);
          let resendL: Map<any, any> = new Map([[String.fromCharCode(98,108,105,110,107,0),false ], [String.fromCharCode(102,111,117,114,99,99,115,0),false ]]);
         episodesq -= resendL.size ^ parseInt(`${episodesq}`);
         moviesY += `${moviesY.length}`;
         resendL = new Map([[moviesY, 2 | moviesY.length]]);
          let send8 = true;
          let skipd: Array<any> = [128, 698, 658];
          let playlistr = false;
         episodesq += 2;
         send8 = skipd.length == skipd.length;
      heartc /= Math.max(parseFloat(`${parseInt(`${heartc}`) % 2}`), 3);
      filledU += `${parseInt(`${heartc}`) - 1}`;
   let matchD = 5549337 >= filedk;
   do {
      filedk *= fastforwardM.length;
      if (matchD) {
         break;
      }
   } while (matchD && (1 > gifth.length));
   if (fullH != filledU) {
      filledU = `${2 & fastforwardM.length}`;
   }
       let castingi = 3.0;
       let detailN = 1.0;
         castingi += parseFloat(`${2 & parseInt(`${detailN}`)}`);
      let canvasZ = 7894284.0 >= detailN;
      do {
         detailN += 3 % (Math.max(parseInt(`${detailN}`), 6));
         if (canvasZ) {
            break;
         }
      } while (((detailN / 3.86) > 4.52 || 5.44 > (3.86 - castingi)) && canvasZ);
      let hejiF = castingi >= 8042017.0;
      do {
         castingi -= parseFloat(`${2}`);
         if (hejiF) {
            break;
         }
      } while ((2.23 == (castingi + detailN) && (2.23 + detailN) == 5.30) && hejiF);
      if ((castingi - 3.92) == 5.62) {
          let kuaishouL = 4.0;
          let middleware5 = 5.0;
          let controlsa = 0.0;
         castingi += parseFloat(`${1}`);
         kuaishouL /= Math.max(5, parseFloat(`${parseInt(`${kuaishouL}`) * parseInt(`${controlsa}`)}`));
         middleware5 -= parseInt(`${controlsa}`);
      }
         detailN += 2 & parseInt(`${castingi}`);
      if (castingi > 4.10) {
          let libcrashsdkc: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,105,102,105,101,114,0),537], [String.fromCharCode(113,95,54,54,95,97,112,112,108,121,0),392], [String.fromCharCode(106,95,55,53,95,118,100,98,101,0),726]]);
          let crownc: Array<any> = [13, 247];
          let episodesa = 3;
          let eventX = String.fromCharCode(99,111,110,100,105,116,105,111,110,115,0);
          let terms2 = 1.0;
         detailN += crownc.length & 1;
         libcrashsdkc = new Map([[eventX, eventX.length - 1]]);
         crownc = [episodesa];
         episodesa &= libcrashsdkc.size;
         terms2 -= parseFloat(`${3}`);
      }
      heartc /= Math.max(3, parseFloat(`${parseInt(`${heartc}`) >> (Math.min(2, Math.abs(adultB)))}`));
   while (heartc == onewinterstitialM) {
      onewinterstitialM >>= Math.min(gifth.length, 5);
      break;
   }
   for (let e = 0; e < 1; e++) {
       let taiwanY = String.fromCharCode(112,114,111,99,99,101,115,115,0);
       let star2 = true;
       let chinaq = 1.0;
      let foregroundV = taiwanY.length <= 8523434;
      do {
         taiwanY += `${((star2 ? 3 : 4) | parseInt(`${chinaq}`))}`;
         if (foregroundV) {
            break;
         }
      } while (foregroundV && (2 >= (taiwanY.length * 4) && (parseInt(`${chinaq}`) - taiwanY.length) >= 4));
         taiwanY += `${taiwanY.length - 2}`;
          let philippinesQ = 2.0;
         taiwanY += `${((star2 ? 3 : 2))}`;
         philippinesQ /= Math.max(parseFloat(`${parseInt(`${philippinesQ}`)}`), 3);
      for (let b = 0; b < 3; b++) {
          let gestureZ = String.fromCharCode(112,97,121,108,111,97,100,0);
          let dycreatorC = 0.0;
         star2 = !taiwanY.includes(`${star2}`);
         gestureZ = `${(String.fromCharCode(90,0) == gestureZ ? parseInt(`${dycreatorC}`) : gestureZ.length)}`;
         dycreatorC /= Math.max(parseFloat(`${2 & gestureZ.length}`), 4);
      }
      for (let e = 0; e < 3; e++) {
         star2 = !star2 || taiwanY.length < 56;
      }
         taiwanY = `${((star2 ? 3 : 2))}`;
          let unreadY = 4.0;
         taiwanY += `${taiwanY.length ^ 2}`;
         unreadY += parseFloat(`${3}`);
      while (star2) {
         chinaq -= (parseFloat(`${parseInt(`${chinaq}`) | (star2 ? 4 : 3)}`));
         break;
      }
         star2 = 5 == taiwanY.length;
      filledU = `${((tailO ? 5 : 5) / (Math.max(fastforwardM.length, 3)))}`;
   }
   let disconnectedL = 8303571 >= filledU.length;
   do {
       let heartW = 1;
       let networkf = 2;
         heartW *= networkf;
          let greenK = true;
         heartW %= Math.max(1 << (Math.min(5, Math.abs(networkf))), 1);
         greenK = (greenK ? !greenK : greenK);
       let renewb = String.fromCharCode(115,108,111,119,100,111,119,110,0);
         heartW *= networkf / (Math.max(5, renewb.length));
      while ((1 << (Math.min(4, renewb.length))) >= 3) {
         heartW += renewb.length - networkf;
         break;
      }
      let xcopy_tt = networkf <= 6021283;
      do {
          let basketballO = String.fromCharCode(105,110,100,105,99,101,115,0);
          let chinasameK = true;
          let ballp: Array<any> = [String.fromCharCode(112,114,101,102,101,116,99,104,101,114,0), String.fromCharCode(114,101,118,111,107,97,98,108,101,95,102,95,50,53,0), String.fromCharCode(110,111,102,105,116,105,99,97,116,105,111,110,0)];
          let pathE: Map<any, any> = new Map([[String.fromCharCode(109,101,100,105,97,99,111,100,101,99,100,101,99,0),String.fromCharCode(113,99,101,108,112,100,97,116,97,0)], [String.fromCharCode(109,95,54,52,95,114,101,113,117,101,115,116,97,98,108,101,0),String.fromCharCode(100,101,99,111,109,112,114,101,115,115,0)], [String.fromCharCode(104,97,110,100,115,104,97,107,101,0),String.fromCharCode(97,121,117,118,108,101,0)]]);
          let transferS: Array<any> = [String.fromCharCode(100,95,49,55,95,104,99,109,99,0), String.fromCharCode(114,101,109,97,112,112,101,100,0)];
         networkf <<= Math.min(Math.abs(((chinasameK ? 5 : 4) ^ 1)), 4);
         basketballO = `${2 << (Math.min(4, basketballO.length))}`;
         chinasameK = ballp.length <= 62;
         ballp = [pathE.size >> (Math.min(Math.abs(3), 3))];
         pathE = new Map([[`${pathE.size}`, transferS.length / (Math.max(2, 4))]]);
         transferS = [2];
         if (xcopy_tt) {
            break;
         }
      } while (((1 - heartW) >= 2 && (networkf - 1) >= 2) && xcopy_tt);
      filledU += `${((readc ? 4 : 4) % (Math.max(10, filledU.length)))}`;
      if (disconnectedL) {
         break;
      }
   } while (disconnectedL && (filledU.length <= fullH.length));
      tailO = (22 == (gifth.length - (!readc ? gifth.length : 22)));
      fullH = "3";
       let description_6dC = String.fromCharCode(98,108,97,99,107,108,105,115,116,0);
       let hejiF9 = String.fromCharCode(106,115,105,109,100,95,109,95,57,52,0);
       let containerL = String.fromCharCode(100,101,116,101,99,116,99,108,111,115,101,0);
      for (let x = 0; x < 1; x++) {
         description_6dC += `${(description_6dC == String.fromCharCode(83,0) ? description_6dC.length : hejiF9.length)}`;
      }
         hejiF9 += `${hejiF9.length}`;
      for (let t = 0; t < 3; t++) {
         hejiF9 += `${containerL.length}`;
      }
      let plashZ = String.fromCharCode(114,112,56,119,98,111,106,109,0) == hejiF9;
      do {
          let temp5: Array<any> = [827, 601];
          let sigmobb = String.fromCharCode(115,101,116,115,0);
          let preview0 = 3.0;
          let bufferc = 2;
         hejiF9 += `${temp5.length | 1}`;
         temp5.push((String.fromCharCode(118,0) == sigmobb ? sigmobb.length : parseInt(`${preview0}`)));
         preview0 *= parseFloat(`${bufferc & 2}`);
         bufferc %= Math.max(sigmobb.length, 4);
         if (plashZ) {
            break;
         }
      } while ((containerL != hejiF9) && plashZ);
      while (description_6dC.endsWith(hejiF9)) {
         hejiF9 += "1";
         break;
      }
         description_6dC = "3";
         description_6dC += `${description_6dC.length - hejiF9.length}`;
         containerL = `${hejiF9.length / (Math.max(9, description_6dC.length))}`;
         hejiF9 += `${description_6dC.length}`;
      filledU = `${onewinterstitialM}`;
   for (let g = 0; g < 2; g++) {
       let main_ye: Array<any> = [483, 575, 24];
       let paginationm: Map<any, any> = new Map([[String.fromCharCode(115,112,101,99,95,115,95,49,53,0),true ], [String.fromCharCode(119,101,105,0),true ], [String.fromCharCode(110,117,109,98,101,114,0),true ]]);
       let relatedK: Map<any, any> = new Map([[String.fromCharCode(114,111,117,116,105,110,115,0),61], [String.fromCharCode(114,101,108,101,118,97,110,116,0),619]]);
       let pressureB = true;
       let default_2eC = 4;
          let middlewareg = 5.0;
          let clockr: Array<any> = [348, 128, 664];
         pressureB = parseInt(`${middlewareg}`) == clockr.length;
      for (let r = 0; r < 3; r++) {
         main_ye.push(default_2eC);
      }
      while (2 >= default_2eC && 3 >= (default_2eC - 2)) {
         default_2eC ^= ((pressureB ? 5 : 5) - 1);
         break;
      }
      let dialogK = relatedK.size <= 9336234;
      do {
         relatedK.set(`${pressureB}`, ((pressureB ? 2 : 4) * paginationm.size));
         if (dialogK) {
            break;
         }
      } while (dialogK && ((relatedK.size << (Math.min(Math.abs(5), 4))) < 3));
       let ucopy_sgx = 5;
         main_ye.push(relatedK.size ^ default_2eC);
      while (ucopy_sgx < 2 || 5 < (2 + ucopy_sgx)) {
         pressureB = 53 > default_2eC && 53 > paginationm.size;
         break;
      }
         relatedK.set(`${main_ye.length}`, 1 * paginationm.size);
      while (2 >= (3 ^ ucopy_sgx) && 5 >= (relatedK.size ^ 3)) {
         ucopy_sgx += main_ye.length;
         break;
      }
      for (let m = 0; m < 3; m++) {
          let promotion7 = false;
          let filedR = 2.0;
          let dplusB: Array<any> = [490, 508, 26];
         default_2eC /= Math.max(3, 3);
         promotion7 = !promotion7 && 4.82 >= filedR;
         filedR -= (parseFloat(`${(promotion7 ? 5 : 5) / (Math.max(7, dplusB.length))}`));
         dplusB.push(3 / (Math.max(1, dplusB.length)));
      }
      while ((relatedK.size % 3) < 5) {
          let strings9 = 2.0;
          let darkj = String.fromCharCode(97,100,100,114,115,95,55,95,54,54,0);
         pressureB = (default_2eC << (Math.min(main_ye.length, 4))) > 8;
         strings9 += parseInt(`${strings9}`);
         darkj += "2";
         break;
      }
      if ((3 * main_ye.length) > 3) {
         main_ye = [paginationm.size];
      }
       let reminderW = 4.0;
       let mimoW = 0.0;
         paginationm.set(`${default_2eC}`, 1);
      while (3 > (ucopy_sgx * paginationm.size)) {
         paginationm.set(`${ucopy_sgx}`, default_2eC | 1);
         break;
      }
      onewinterstitialM += 3;
   }
   while (4 <= (adultB | 5) && readc) {
      adultB |= stylem.length >> (Math.min(Math.abs(1), 1));
      break;
   }
       let internety = String.fromCharCode(100,95,49,0);
       let launcherj = 3.0;
       let sentry3 = String.fromCharCode(99,111,110,116,114,105,98,117,116,105,110,103,0);
      for (let b = 0; b < 2; b++) {
          let championb = String.fromCharCode(104,97,110,110,105,110,103,0);
          let d_viewI = 5.0;
          let sendm = 3.0;
          let current2 = String.fromCharCode(114,101,115,116,114,105,99,116,0);
          let fieldP = false;
         launcherj += 3;
         championb = `${1 ^ parseInt(`${sendm}`)}`;
         d_viewI += parseFloat(`${2 / (Math.max(3, current2.length))}`);
         sendm += current2.length ^ 1;
         fieldP = String.fromCharCode(116,0) == current2 || 92.18 < sendm;
      }
      let helperp = 6204604 >= internety.length;
      do {
         internety += "2";
         if (helperp) {
            break;
         }
      } while (helperp && (internety.endsWith(sentry3)));
      let uploadx = internety.length >= 7078821;
      do {
         internety = `${2 & internety.length}`;
         if (uploadx) {
            break;
         }
      } while ((sentry3.length < 4) && uploadx);
      let frame_gwq = internety == String.fromCharCode(121,106,101,119,0);
      do {
         internety += `${internety.length}`;
         if (frame_gwq) {
            break;
         }
      } while (frame_gwq && (5.66 == (launcherj * internety.length) && (launcherj * internety.length) == 5.66));
         internety += `${parseInt(`${launcherj}`) / (Math.max(sentry3.length, 8))}`;
       let upgradeJ = String.fromCharCode(99,95,57,51,95,99,111,114,100,0);
       let loginV = String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,0);
       let analyticsa = 2;
         internety = `${upgradeJ.length}`;
         sentry3 = "1";
      hookA = `${((tailO ? 3 : 5) | (readc ? 4 : 4))}`;
      onewinterstitialM <<= Math.min(4, Math.abs((onewinterstitialM + (tailO ? 1 : 2))));
      readc = onewinterstitialM >= 62;
   let sellE = tailO ? !tailO : tailO;
   do {
      tailO = filledU == String.fromCharCode(117,0) || hookA.length >= 78;
      if (sellE) {
         break;
      }
   } while ((2 < stylem.length || !tailO) && sellE);

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


    
    if (ttFast.isGuest(userState.user) && ttFast.isVip(userState.user)) {
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

              if (!ttFast.isLogin(userState.user)) {
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
                {!ttFast.isLogin(userState.user) || Platform.OS === "android" ? (
                  <ProfileIcon
                    style={{ color: colors.primary, width: 18, height: 18 }}
                  />
                ) : (
                  <FastImage
                    style={{
                      height: 36,
                      width: 36,
                      marginVertical: 2,
                    }}
                    resizeMode={"contain"}
                    source={require("@static/images/projectTumbnailMbsplash.png")}
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
                  {ttFast.isGuest(userState.user) && (
                    <>
                      <Text style={{ color: "#ffffff", fontSize: 14 }}>
                        游客ID:
                      </Text>
                      <Text style={{ color: "#ffffff", fontSize: 20 }}>
                        {deviceUniqueId.slice(0, 16)}
                      </Text>
                    </>
                  )}
                  {ttFast.isLogin(userState.user) && (
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
                            color: colors.text,
                            fontSize: 20,
                          }}
                          numberOfLines={1}
                          ellipsizeMode="tail"
                        >
                          {userState.user.userName}
                        </Text>


                        {ttFast.isVip(userState.user) && (
                          <Image
                            style={styles.iconStyle}
                            source={require("@static/images/profile/trashTransferMath.png")}
                          />
                        )}
                      </View>

                      {/* {userState.userMemberExpired == '0' && (
                      <Text style={{fontSize: 14}}>VIP会员已经到期</Text>
                    )} */}
                      {ttFast.isVip(userState.user) &&
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
                  {ttFast.isLogin(userState.user) && (
                    <EditIcn width={29} height={29} color={colors.muted} />
                  )}
                </View>
              </View>
              { }
              {ttFast.isGuest(userState.user) &&
                !ttFast.isVip(userState.user) && (
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
                      <Text style={{ color: "#000", fontWeight: "700" }}>
                        登录{" "}
                      </Text>
                    </View>
                  </View>
                )}

              { }
              {ttFast.isGuest(userState.user) &&
                ttFast.isVip(userState.user) && (
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
                      <VipIcon color={colors.yellow} width={icons.sizes.l} height={icons.sizes.l} />
                    </View>
                    <View style={{ gap: 5 }}>
                      <Text
                        style={{
                          ...textVariants.body,
                        }}
                      >
                        {highlightText(
                          ttConfigRecommendation.instance.showBecomeVip
                            ? "成为VIP"
                            : "付费VIP",
                          ""
                        )}
                      </Text>
                      {ttConfigRecommendation.instance.tabConfig != null &&
                        ttConfigRecommendation.instance.len == 5 ? (
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
