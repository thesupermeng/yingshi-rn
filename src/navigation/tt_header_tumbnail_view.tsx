

class CircleRouterHoverTail {
    static selectedVietnamTitleGpay = (contents: [number], key: number, hasEmoji: boolean) => {
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
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
  useLayoutEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  NavigationContainer,
  NavigationState,
  useTheme,
} from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/tt_terms";
import PlaylistScreen from "../screens/Playlist/tt_catagory";
import ProfileScreen from "../screens/Profile/tt_schedule_bootsplash";
import WatchAnytime from "../screens/tt_danger_middle";
import SearchScreen from "../screens/Common/tt_tramini";
import PlayScreen from "../screens/Common/tt_icon_interstitial";
import LiveStationPlayScreen from "../screens/Common/tt_unlock_signinup";
import FeedbackScreen from "../screens/Profile/tt_tumbnail";
import Invite from "../screens/Profile/tt_sigmob_long";
import InviteDetails from "../screens/Profile/tt_mode_splash";
import UserCenter from "../screens/Profile/tt_alert_product";
import MainCollectionScreen from "../screens/Profile/Collection/tt_heji";
import PlaylistDetailsScreen from "../screens/Playlist/tt_search";
import HistoryScreen from "../screens/Profile/tt_skip_gmail";
import LiveStationsScreen from "../screens/Common/tt_chinasame_image";
import AboutUsScreen from "../screens/Profile/tt_save_downloading";
import PrivacyScreen from "../screens/Profile/tt_material_emoji";
import UserAgreementScreen from "../screens/Profile/tt_gift_short";
import ConfigureScreen from "../screens/Profile/tt_lock";
import OtpScreen from "../screens/Auth/tt_signinup";
import SetUsername from "../screens/Auth/tt_tooltips";
import HomeTabIcon from "@static/images/modalTopic.svg";
import HomeActiveTabIcon from "@static/images/descStrings.svg";
import PlaylistTabIcon from "@static/images/pointWith_d.svg";
import PlaylistActiveTabIcon from "@static/images/backgroundFiled.svg";
import ProfileTabIcon from "@static/images/dataTransferSearchbar.svg";
import ProfileActiveTabIcon from "@static/images/unselectedEmoji.svg";
import WatchAnytimeTabIcon from "@static/images/unselectedDangerUser.svg";
import WatchAnytimeActiveTabIcon from "@static/images/searchHeader.svg";
import CatalogScreen from "../screens/Common/tt_score_policy";
import ShortVodCollectionScreen from "../screens/Profile/Collection/tt_list_lock";
import SportsIcon from "@static/images/thumbnailDropdown.svg";

import VipActionIcon from "@static/images/halfAjax.svg";
import VipIcon from "@static/images/membershipLock.svg";

import SportAndX from "./../../src/screens/tt_grey";

import MatchDetailsScreen from "../Sports/screens/Sports/tt_muted_preview";
import { useDispatch } from "react-redux";
import SigninupBottomSheet from "../components/auth/tt_prediction";
import {
  ttReferrerExpand,
  ttBodan,
  ttConfirmationYing,
  ttNewsLogin,
  ttScore,
} from "@type/tt_temperature";
import RNBootSplash from "react-native-bootsplash";
import { ttOrange } from "@redux/tt_updates_bottom";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/tt_spec_download";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_DOMAIN, UMENG_CHANNEL } from "@utility/tt_trophy_cross";
import { ttConfigRecommendation } from "../../tt_copy_floater";
import {
  disableAdultMode,
  disableWatchAnytimeAdultMode,
  hideAdultModeDisclaimer,
  hideAdultModeVip,
  hideLoginAction,
  interstitialClose,
  interstitialShow,
  removeScreenAction,
  resetAdultVideoWatchTime,
  resetBottomSheetAction,
  resetOverEighteen,
  resetSportWatchTime,
  setShowGuestPurchaseSuccess,
  setShowPromotionDialog,
  setShowPurchasePending,
  showLoginAction,
} from "@redux/actions/tt_copy_heji";
import { Dialog } from "@rneui/themed";
import FastImage from "../components/common/tt_connection";
import { screenModel } from "@type/tt_twitter_data";
import { YingshiDarkTheme, YingshiLightTheme } from "@utility/tt_downloaded";
import { updateUserAuth, updateUserReferral } from "@redux/actions/tt_topon";
import ExpiredOverlay from "../components/modal/tt_actions";
import EventRules from "../screens/Profile/tt_reducer";
import PrivacyPolicyOverlay from "../components/modal/tt_calendar";
import Orientation from "react-native-orientation-locker";
import {
  handleAppOrientation,
  handleDevicesOrientation,
  lockAppOrientation,
  updateNetworkInfo,
} from "@redux/actions/tt_checkbox";
import { ttBaiduNewinterstitial } from "@redux/reducers/tt_center";
import { AdsBannerContext } from "../contexts/tt_injury_reminder";
import VIP from "../screens/Profile/tt_white";
import VIP2 from "../screens/Profile/tt_carousel_center";
import { withIAPContext } from "react-native-iap";
import { VipDetails } from "../components/vip/tt_splash";

import { ATInterstitialRNSDK } from "./../../AnyThinkAds/tt_router";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import AdultVideoList from "../screens/Playlist/tt_malaysia_found";
import { ttTramini } from "@api";
import AdEvent from "../screens/Common/tt_application";
import { CRouteInitializer } from "../routes/tt_macau_read";
import {
  clearQueueOnAppStart,
  updateAllVodDetailsThunk,
} from "@redux/actions/tt_delegate_google";
import DownloadCatalog from "../screens/Profile/Download/tt_ajax";
import DownloadDetails from "../screens/Profile/Download/tt_point_unread";

import AutoRenewService from "../screens/Profile/tt_thailand";
import { VipPromotionOverlay } from "../components/modal/tt_plus";
import { GuestPurchaseSuccessOverlay } from "../components/modal/guestPurchaseSuccessOverlay";
import { ttEntry } from "@redux/reducers/tt_dialog_rewind";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";
import { toggleDarkTheme } from "@redux/actions/tt_cross";

export default () => {
  const Stack = createNativeStackNavigator<ttNewsLogin>();
  const HomeTab = createBottomTabNavigator<ttReferrerExpand>();
  const { colors, textVariants, spacing } = useTheme();
  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({ settingsReducer }: ttOrange) => settingsReducer
  );
  const themeReducer = useAppSelector(
    ({ themeReducer }: ttOrange) => themeReducer
  );
  const theme = themeReducer.theme ? YingshiDarkTheme : YingshiLightTheme;

  let hasNotch = DeviceInfo.hasNotch();

  let iconWidth = 22;
  if (hasNotch) {
    iconWidth = 25;
  }

  const userState = useSelector<ttGoal>('userReducer');

  const appState = useSelector<ttEntry>('backgroundReducer');

  useLayoutEffect(() => {
    dispatch(toggleDarkTheme());
  }, []);

  const HomeTabScreen = useCallback(() => {
       let update_2oN = 1.0;
    let placementG = true;
    let fillq = 2.0;
    let emojiR = String.fromCharCode(99,114,111,115,115,102,97,100,101,95,115,95,51,0);
    let logoutM = 4;
    let mimo8 = String.fromCharCode(101,95,54,55,95,97,97,99,101,110,99,0);
    let entryw = String.fromCharCode(111,115,100,101,112,95,106,95,53,54,0);
    let rewindK = String.fromCharCode(117,110,115,99,104,101,100,117,108,101,95,51,95,57,56,0);
    let malaysiaC = true;
    let awayl = String.fromCharCode(99,95,49,54,95,116,111,100,97,121,0);
    let fastY = String.fromCharCode(111,95,54,56,95,115,116,115,115,0);
   for (let q = 0; q < 3; q++) {
      fillq += (parseFloat(`${(placementG ? 5 : 2) - 3}`));
   }
       let clubN = String.fromCharCode(105,110,108,101,110,95,53,95,57,55,0);
       let hooksE = String.fromCharCode(109,106,112,101,103,97,95,109,95,54,55,0);
       let detaill = String.fromCharCode(97,95,55,54,95,114,109,115,116,114,101,97,109,0);
      for (let k = 0; k < 3; k++) {
          let logoN = 5;
          let orangeM: Map<any, any> = new Map([[String.fromCharCode(114,101,115,111,108,117,116,105,111,110,115,95,122,95,52,55,0),String.fromCharCode(116,97,98,108,101,103,101,110,95,113,95,49,51,0)], [String.fromCharCode(115,101,99,95,97,95,51,51,0),String.fromCharCode(105,95,54,95,101,112,104,101,109,101,114,97,108,0)]]);
          let detailJ = 5.0;
         hooksE = `${orangeM.size}`;
         logoN *= logoN ^ parseInt(`${detailJ}`);
         orangeM = new Map([[`${logoN}`, 1]]);
         detailJ -= parseFloat(`${logoN >> (Math.min(5, Math.abs(1)))}`);
      }
      if (!detaill.startsWith(hooksE)) {
         hooksE = `${detaill.length | hooksE.length}`;
      }
          let package_1w = 4.0;
          let fieldg: Array<any> = [984, 761, 346];
          let checkboxO: Array<any> = [117, 157];
         hooksE += `${parseInt(`${package_1w}`)}`;
         package_1w *= parseFloat(`${fieldg.length}`);
         fieldg = [2 >> (Math.min(1, checkboxO.length))];
         checkboxO = [2 << (Math.min(4, fieldg.length))];
      if (5 == hooksE.length && detaill.length == 5) {
         detaill = `${detaill.length}`;
      }
      if (detaill.includes(clubN)) {
         detaill = "3";
      }
      for (let o = 0; o < 1; o++) {
         hooksE += "2";
      }
         detaill += `${detaill.length}`;
          let guideF = 1;
          let list6 = String.fromCharCode(101,95,52,53,95,114,101,100,101,108,105,118,101,114,121,0);
          let buildE = true;
         hooksE += `${clubN.length * 1}`;
         guideF >>= Math.min(3, Math.abs(3 / (Math.max(7, guideF))));
         list6 = "3";
         buildE = guideF == 45;
          let tumbnailZ = 0.0;
         detaill = "2";
         tumbnailZ += 3 & parseInt(`${tumbnailZ}`);
      malaysiaC = hooksE.length == 87 || !malaysiaC;
   for (let b = 0; b < 3; b++) {
      update_2oN /= Math.max(1, parseFloat(`${mimo8.length}`));
   }
   if (!malaysiaC) {
      malaysiaC = String.fromCharCode(113,0) == mimo8;
   }
       let coreM: Array<any> = [899, 381];
         coreM = [coreM.length % (Math.max(1, 9))];
      while (coreM.length > coreM.length) {
          let register_fk = String.fromCharCode(103,101,110,100,101,114,95,103,95,55,56,0);
          let inviteE = 3;
          let condensedD: Array<any> = [959, 324];
         coreM = [2];
         register_fk = "1";
         inviteE &= 3 & inviteE;
         condensedD = [2];
         break;
      }
      if ((coreM.length << (Math.min(coreM.length, 1))) >= 2) {
          let episodeq = false;
          let castingd = 2.0;
         coreM.push(1 % (Math.max(2, coreM.length)));
         episodeq = 85.4 > (castingd + castingd);
      }
      fillq *= parseFloat(`${entryw.length}`);
   if (awayl == entryw) {
      entryw += `${((placementG ? 1 : 2) | parseInt(`${fillq}`))}`;
   }
   while (!awayl.includes(`${logoutM}`)) {
       let zoomZ = String.fromCharCode(111,95,55,54,95,103,97,117,115,115,0);
      while (zoomZ == String.fromCharCode(65,0)) {
         zoomZ = "2";
         break;
      }
         zoomZ = `${zoomZ.length | zoomZ.length}`;
         zoomZ = "3";
      logoutM <<= Math.min(parseInt(`${Math.abs(((malaysiaC ? 4 : 5) >> (Math.min(Math.abs(parseInt(`${update_2oN}`)), 1))))}`), 5);
      break;
   }
       let memberM = 0.0;
          let founde = 3;
         memberM /= Math.max(5, 3);
         founde *= founde << (Math.min(Math.abs(3), 5));
         memberM += parseInt(`${memberM}`) * 2;
          let combineU = 2.0;
          let rewardvideoi = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,101,100,95,103,95,57,54,0);
         memberM += parseInt(`${combineU}`);
         combineU -= rewardvideoi.length;
         rewardvideoi += `${rewardvideoi.length % (Math.max(rewardvideoi.length, 7))}`;
      placementG = memberM == fillq;
   for (let a = 0; a < 2; a++) {
       let chinasameO = 2.0;
       let shrink5: Array<any> = [777, 710, 537];
       let league6 = String.fromCharCode(115,116,111,114,101,100,95,50,95,54,50,0);
      let typingS = shrink5.length >= 5833997;
      do {
         shrink5.push((String.fromCharCode(78,0) == league6 ? shrink5.length : league6.length));
         if (typingS) {
            break;
         }
      } while (((league6.length | 2) >= 1 && 2 >= (shrink5.length | league6.length)) && typingS);
      let backg = 6351982 <= league6.length;
      do {
         league6 += `${shrink5.length & 3}`;
         if (backg) {
            break;
         }
      } while (((chinasameO - parseFloat(`${league6.length}`)) <= 5.6 || 3 <= (3 - league6.length)) && backg);
      let zoomB = 6007588.0 >= chinasameO;
      do {
          let pathE = false;
          let eighteenN = String.fromCharCode(99,100,99,105,95,119,95,51,53,0);
          let moduleH: Array<any> = [634, 457, 272];
          let viewerw = 1;
          let iconh: Map<any, any> = new Map([[String.fromCharCode(112,117,98,108,105,115,104,101,114,115,95,119,95,50,57,0),String.fromCharCode(101,110,99,111,100,105,110,103,95,100,95,56,54,0)], [String.fromCharCode(103,95,50,49,95,115,99,116,112,0),String.fromCharCode(113,95,50,51,95,101,105,112,0)], [String.fromCharCode(103,95,52,53,95,110,101,119,108,105,110,101,0),String.fromCharCode(105,108,98,99,102,105,120,95,108,95,52,49,0)]]);
         chinasameO /= Math.max(parseFloat(`${viewerw - 1}`), 3);
         pathE = iconh.size > 51;
         eighteenN += `${eighteenN.length * 2}`;
         moduleH = [(eighteenN.length * (pathE ? 1 : 3))];
         viewerw -= 1;
         iconh = new Map([[`${iconh.size}`, 3 + iconh.size]]);
         if (zoomB) {
            break;
         }
      } while ((league6.includes(`${chinasameO}`)) && zoomB);
         shrink5.push(parseInt(`${chinasameO}`) & shrink5.length);
      if ((chinasameO / (Math.max(parseFloat(`${league6.length}`), 5))) < 2.33 || (2.33 / (Math.max(1, chinasameO))) < 5.9) {
          let vignetteF = 0.0;
          let renew1: Map<any, any> = new Map([[String.fromCharCode(112,117,98,108,105,115,104,95,117,95,52,0),true ], [String.fromCharCode(109,97,103,105,99,121,117,118,95,101,95,55,52,0),false ]]);
         chinasameO /= Math.max(1, parseFloat(`${league6.length << (Math.min(2, shrink5.length))}`));
         vignetteF *= parseInt(`${vignetteF}`) & 1;
         renew1.set(`${vignetteF}`, 1);
      }
      if ((league6.length - 2) == 2) {
         league6 += `${league6.length + parseInt(`${chinasameO}`)}`;
      }
       let membershipq = String.fromCharCode(110,99,111,109,105,110,103,95,116,95,56,54,0);
       let cornerj = String.fromCharCode(112,99,109,119,98,95,108,95,49,50,0);
       let notificationW = String.fromCharCode(118,95,54,52,95,97,108,112,97,0);
         shrink5.push(league6.length >> (Math.min(membershipq.length, 2)));
      awayl = `${1 | parseInt(`${fillq}`)}`;
   }
      update_2oN *= parseFloat(`${1}`);
   let userv = String.fromCharCode(113,49,52,122,113,0) == awayl;
   do {
      awayl = `${entryw.length & 2}`;
      if (userv) {
         break;
      }
   } while (((update_2oN / (Math.max(2, parseFloat(`${awayl.length}`)))) == 3.71 || 5 == (2 & awayl.length)) && userv);
      mimo8 += `${parseInt(`${update_2oN}`) + 3}`;
       let searchz: Map<any, any> = new Map([[String.fromCharCode(110,97,109,101,115,101,114,118,101,114,95,118,95,49,55,0),false ], [String.fromCharCode(111,95,56,95,97,116,114,97,99,100,97,116,97,0),false ], [String.fromCharCode(105,95,53,54,95,113,117,101,114,121,0),true ]]);
       let custom_ = String.fromCharCode(117,95,51,53,95,116,104,114,111,116,116,108,101,0);
         searchz.set(`${custom_}`, custom_.length % 2);
       let moduleS: Array<any> = [222, 214];
       let fcopy_31 = 5.0;
      while (parseInt(`${fcopy_31}`) == moduleS.length) {
         fcopy_31 -= parseInt(`${fcopy_31}`) / (Math.max(moduleS.length, 10));
         break;
      }
          let logoE = 5;
          let redirects = true;
         custom_ += `${2 + custom_.length}`;
         logoE ^= (logoE * (redirects ? 3 : 1));
         redirects = 34 <= logoE || !redirects;
      while (parseInt(`${fcopy_31}`) == moduleS.length) {
         moduleS = [custom_.length / (Math.max(3, 5))];
         break;
      }
      fillq -= (parseFloat(`${(malaysiaC ? 2 : 1) / (Math.max(searchz.size, 3))}`));
       let questd: Array<any> = [262, 482, 771];
       let megaphonev = String.fromCharCode(97,108,112,104,97,98,101,116,95,120,95,52,50,0);
      if (questd.length >= 1) {
          let greyI = 0.0;
          let lefts = 2;
          let reactnativejsu = false;
          let activityJ = false;
          let hoverA = 3.0;
         megaphonev += `${questd.length ^ parseInt(`${hoverA}`)}`;
         greyI -= parseFloat(`${3 - lefts}`);
         lefts *= ((reactnativejsu ? 4 : 1));
         reactnativejsu = 63 == lefts;
         activityJ = (!reactnativejsu ? !activityJ : reactnativejsu);
         hoverA += parseInt(`${greyI}`) * 3;
      }
       let traminih: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,116,105,111,110,115,95,51,95,52,55,0),String.fromCharCode(115,116,97,114,116,101,100,95,109,95,51,49,0)], [String.fromCharCode(107,95,51,53,95,116,97,115,107,0),String.fromCharCode(112,114,101,100,114,97,119,110,95,108,95,52,50,0)]]);
      entryw += "1";
      placementG = update_2oN > 78.10;
   while ((update_2oN * 2.52) > 1.80 && 2.52 > update_2oN) {
       let styles1 = String.fromCharCode(110,95,51,53,95,114,101,110,100,101,114,101,114,0);
       let gpayr = String.fromCharCode(116,105,108,116,95,107,95,49,49,0);
       let specD: Array<any> = [String.fromCharCode(104,95,56,53,95,109,121,114,110,100,0), String.fromCharCode(108,95,56,52,95,97,109,114,119,98,100,101,99,0), String.fromCharCode(98,105,110,104,101,120,95,99,95,53,54,0)];
       let alerto: Map<any, any> = new Map([[String.fromCharCode(108,95,57,95,101,100,105,116,0),919], [String.fromCharCode(115,100,97,108,108,111,99,120,95,115,95,54,56,0),100]]);
      for (let k = 0; k < 2; k++) {
         gpayr = `${styles1.length}`;
      }
         specD.push((String.fromCharCode(81,0) == styles1 ? styles1.length : gpayr.length));
          let statisticsU = 2.0;
         alerto = new Map([[`${specD.length}`, (String.fromCharCode(114,0) == gpayr ? specD.length : gpayr.length)]]);
         statisticsU -= parseInt(`${statisticsU}`) >> (Math.min(Math.abs(parseInt(`${statisticsU}`)), 5));
       let shareS = String.fromCharCode(112,114,111,118,105,100,105,110,103,95,52,95,56,57,0);
         styles1 += `${shareS.length / 2}`;
          let inviteb = String.fromCharCode(114,95,53,48,95,103,101,110,101,114,97,103,101,0);
         styles1 = "3";
         inviteb = `${3 ^ inviteb.length}`;
         gpayr += `${styles1.length}`;
      if (styles1 == gpayr) {
         gpayr += "2";
      }
         specD = [alerto.size << (Math.min(specD.length, 4))];
      for (let e = 0; e < 1; e++) {
         alerto = new Map([[`${specD.length}`, specD.length % 2]]);
      }
         specD = [gpayr.length - 2];
      if ((specD.length % (Math.max(1, gpayr.length))) >= 2 && 5 >= (gpayr.length % 2)) {
         gpayr = `${specD.length}`;
      }
      placementG = entryw.length <= 21;
      break;
   }
      update_2oN *= parseFloat(`${3 - logoutM}`);
   while (awayl.length >= 1) {
       let dycreatorM: Map<any, any> = new Map([[String.fromCharCode(108,95,54,56,0),String.fromCharCode(107,95,51,50,95,108,111,99,107,115,0)], [String.fromCharCode(97,95,50,54,95,116,117,112,108,101,0),String.fromCharCode(102,116,115,121,121,95,99,95,55,52,0)], [String.fromCharCode(115,95,50,53,95,115,116,114,97,116,101,103,121,0),String.fromCharCode(110,95,50,52,95,119,111,114,107,97,114,111,117,110,100,0)]]);
      if ((dycreatorM.size + 2) > 4) {
         dycreatorM = new Map([[`${dycreatorM.size}`, dycreatorM.size]]);
      }
         dycreatorM = new Map([[`${dycreatorM.size}`, dycreatorM.size ^ 1]]);
         dycreatorM = new Map([[`${dycreatorM.size}`, 2 & dycreatorM.size]]);
      logoutM |= 1;
      break;
   }
       let home7 = 4;
       let lessQ = String.fromCharCode(110,95,55,48,95,97,117,116,111,97,114,99,104,105,118,101,0);
       let playlistL: Array<any> = [String.fromCharCode(101,95,52,48,95,108,111,111,112,101,120,105,116,0), String.fromCharCode(112,114,105,110,116,97,98,108,101,95,56,95,53,52,0), String.fromCharCode(115,95,49,49,95,117,112,103,114,97,100,101,115,0)];
          let foundU = String.fromCharCode(121,99,111,99,103,114,103,98,97,95,102,95,50,50,0);
          let inactivem = 5.0;
         playlistL.push(foundU.length + playlistL.length);
         foundU = `${1 & parseInt(`${inactivem}`)}`;
         inactivem *= parseFloat(`${parseInt(`${inactivem}`) / (Math.max(2, parseInt(`${inactivem}`)))}`);
       let smallZ: Map<any, any> = new Map([[String.fromCharCode(122,95,56,55,95,97,116,99,104,101,114,0),242], [String.fromCharCode(105,95,51,52,95,120,118,105,100,0),747], [String.fromCharCode(111,95,51,50,95,118,105,100,101,111,112,114,111,99,101,115,115,111,114,0),589]]);
          let reactnativejsO = String.fromCharCode(118,99,97,99,100,97,116,97,95,98,95,54,0);
          let canvas_ = String.fromCharCode(110,101,103,111,116,105,97,116,101,100,95,99,95,56,56,0);
         home7 &= reactnativejsO.length;
         reactnativejsO = `${canvas_.length ^ canvas_.length}`;
      for (let c = 0; c < 3; c++) {
          let previewK: Array<any> = [757, 669];
         lessQ = `${(String.fromCharCode(56,0) == lessQ ? home7 : lessQ.length)}`;
         previewK.push(previewK.length / 1);
      }
       let upgradel = false;
         playlistL.push(2);
         home7 *= 3 >> (Math.min(2, Math.abs(smallZ.size)));
      for (let f = 0; f < 2; f++) {
         playlistL = [2];
      }
          let gray4 = 1.0;
          let modity4 = String.fromCharCode(115,95,49,48,95,114,105,110,103,116,111,110,101,0);
         upgradel = playlistL.length < 93;
         gray4 += (parseFloat(`${String.fromCharCode(75,0) == modity4 ? parseInt(`${gray4}`) : modity4.length}`));
      logoutM &= 1 / (Math.max(10, home7));
   while (3 < (mimo8.length ^ logoutM) && 4 < (3 ^ logoutM)) {
      mimo8 += `${3 & rewindK.length}`;
      break;
   }
   while (!rewindK.startsWith(`${malaysiaC}`)) {
      rewindK = `${1 ^ emojiR.length}`;
      break;
   }
      awayl = `${(mimo8.length ^ (placementG ? 4 : 5))}`;
   while (awayl.length >= 1 || rewindK.length >= 1) {
       let network7: Array<any> = [22, 720];
       let clockY = true;
       let unselectedG = true;
       let thumbnailE = 0.0;
         clockY = network7.includes(unselectedG);
      while (4.93 <= (3.19 - thumbnailE)) {
          let activityo = 0;
          let forwardg = 1.0;
          let upgradex = 4;
          let setting1 = 5.0;
          let catagory0: Map<any, any> = new Map([[String.fromCharCode(99,95,51,51,95,108,97,115,116,0),String.fromCharCode(112,95,49,49,95,115,117,98,104,101,97,100,101,114,0)], [String.fromCharCode(104,101,97,100,115,95,99,95,56,54,0),String.fromCharCode(117,95,50,51,95,109,112,101,103,0)], [String.fromCharCode(121,95,55,56,95,115,116,97,107,101,100,0),String.fromCharCode(105,95,57,53,95,114,101,102,105,100,0)]]);
         thumbnailE -= (parseFloat(`${(clockY ? 5 : 1) % 1}`));
         activityo &= upgradex;
         forwardg *= parseFloat(`${parseInt(`${setting1}`)}`);
         upgradex /= Math.max(parseInt(`${forwardg}`), 1);
         setting1 *= parseFloat(`${2 ^ upgradex}`);
         catagory0 = new Map([[`${catagory0.size}`, catagory0.size / 3]]);
         break;
      }
         unselectedG = !unselectedG;
      let optionsP = thumbnailE >= 5049037.0;
      do {
          let miniZ = String.fromCharCode(118,95,55,57,95,101,114,97,115,101,0);
          let whistleW = 3.0;
         thumbnailE *= parseFloat(`${parseInt(`${whistleW}`)}`);
         miniZ = `${miniZ.length * 3}`;
         whistleW *= (parseFloat(`${String.fromCharCode(101,0) == miniZ ? miniZ.length : miniZ.length}`));
         if (optionsP) {
            break;
         }
      } while (optionsP && (thumbnailE > 4.72));
         unselectedG = thumbnailE == 69.42 || unselectedG;
      while (clockY) {
         network7 = [(2 * (clockY ? 3 : 4))];
         break;
      }
         unselectedG = (clockY ? !unselectedG : !clockY);
      for (let h = 0; h < 2; h++) {
         clockY = network7.length > parseInt(`${thumbnailE}`);
      }
         network7 = [1 >> (Math.min(Math.abs(parseInt(`${thumbnailE}`)), 4))];
      let minimizeR = clockY ? !clockY : clockY;
      do {
          let fast4: Array<any> = [708, 524];
          let apple1: Array<any> = [778, 993];
          let launchg = 4;
          let projectW = String.fromCharCode(113,95,56,52,95,119,97,108,108,112,97,112,101,114,0);
         clockY = (apple1.length ^ network7.length) <= 87;
         fast4.push(projectW.length | launchg);
         apple1.push(projectW.length);
         launchg >>= Math.min(2, Math.abs(1));
         if (minimizeR) {
            break;
         }
      } while (minimizeR && (5.97 > thumbnailE && (thumbnailE / (Math.max(5.97, 7))) > 3.27));
      while (!clockY || 4 > (network7.length ^ 4)) {
         clockY = unselectedG;
         break;
      }
       let buildZ = 4;
       let sourceW = 4;
      rewindK = "1";
      break;
   }
      rewindK = `${mimo8.length >> (Math.min(Math.abs(2), 1))}`;

    return (
      <HomeTab.Navigator
        screenListeners={{
          tabPress: (e) => {
            if (e.target?.includes("随心看")) {
              dispatch(hideAdultModeDisclaimer());
            }
            
            
            
          },
        }}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle:
            hasNotch || Platform.OS === "android"
              ? styles.navStyleWithNotch
              : styles.navStyle,
          tabBarLabelStyle: {
            paddingBottom: 6,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let icon: React.ReactNode;

            if (route.name === "首页") {
              icon = focused ? (
                <HomeActiveTabIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <HomeTabIcon
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            } else if (route.name === "播单") {
              icon = focused ? (
                <PlaylistActiveTabIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <PlaylistTabIcon
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            } else if (route.name === "我的") {
              icon = focused ? (
                <ProfileActiveTabIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <ProfileTabIcon
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            } else if (route.name === "随心看") {
              icon = focused ? (
                <WatchAnytimeActiveTabIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <WatchAnytimeTabIcon
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            } else if (route.name === "会员中心") {
              icon = focused ? (
                <VipActionIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <VipIcon
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            }
            return icon;
          },
        })}
      >
        {ttConfigRecommendation.instance.tabConfig != null && ttConfigRecommendation.instance.len == 5 ? (
          <>
            <HomeTab.Screen name="首页" component={HomeScreen} />
            <HomeTab.Screen name="随心看" component={WatchAnytime} />
            <HomeTab.Screen name="会员中心" component={SportAndX} />
            <HomeTab.Screen name="播单" component={PlaylistScreen} />
            <HomeTab.Screen name="我的" component={ProfileScreen} />
          </>
        ) : (
          <>
            <HomeTab.Screen name="首页" component={HomeScreen} />
            <HomeTab.Screen name="随心看" component={WatchAnytime} />
            <HomeTab.Screen name="会员中心" component={SportAndX} />
            <HomeTab.Screen name="播单" component={PlaylistScreen} />
            <HomeTab.Screen name="我的" component={ProfileScreen} />
          </>
        )}
      </HomeTab.Navigator>
    );
  }, [theme]);

  const refreshUserState = async () => {
       let time_az = 3;
    let taiwanD: Array<any> = [912, 272];
    let taiwan0 = String.fromCharCode(115,116,111,112,101,100,95,106,95,57,49,0);
    let searchbarB: Map<any, any> = new Map([[String.fromCharCode(118,99,111,100,101,99,95,100,95,52,0),67], [String.fromCharCode(113,95,52,53,95,109,117,108,116,105,112,108,101,120,0),897], [String.fromCharCode(101,120,112,101,99,116,115,95,114,95,50,55,0),690]]);
    let forwardm = String.fromCharCode(112,95,56,54,95,111,102,102,115,99,114,101,101,110,0);
    let catalogT = 5;
    let minimizel: Map<any, any> = new Map([[String.fromCharCode(102,111,114,119,97,114,100,95,114,95,55,53,0),819], [String.fromCharCode(105,110,115,101,114,116,95,103,95,53,50,0),563], [String.fromCharCode(103,95,56,95,111,117,116,112,117,116,0),226]]);
    let borderlessY = 1.0;
    let feedback7 = 4;
    let anythinke: Map<any, any> = new Map([[String.fromCharCode(111,95,52,49,95,99,97,110,110,111,116,0),501], [String.fromCharCode(105,95,50,50,95,112,97,103,101,104,97,115,104,0),614], [String.fromCharCode(116,114,101,101,95,98,95,57,56,0),745]]);
    let confirmationW = String.fromCharCode(105,110,116,101,114,99,101,112,116,95,118,95,52,53,0);
    let vignettel = String.fromCharCode(97,112,112,114,111,112,114,105,97,116,101,95,106,95,56,51,0);
    let mbsplashQ = String.fromCharCode(98,114,101,97,107,115,95,117,95,52,0);
    let bodanj = String.fromCharCode(113,117,97,108,105,116,121,95,101,95,54,55,0);
    let rightk = String.fromCharCode(119,95,51,57,95,112,101,114,115,105,115,116,101,110,99,101,0);
   for (let y = 0; y < 3; y++) {
      searchbarB = new Map([[`${searchbarB.size}`, 2]]);
   }
       let mbnativeC: Map<any, any> = new Map([[String.fromCharCode(102,95,54,53,95,112,114,111,112,101,114,121,0),318], [String.fromCharCode(110,97,109,101,116,111,105,110,100,101,120,95,118,95,52,49,0),561]]);
          let o_title1 = false;
         mbnativeC = new Map([[`${mbnativeC.size}`, (2 >> (Math.min(5, Math.abs((o_title1 ? 3 : 3)))))]]);
      let router1 = 5041323 <= mbnativeC.size;
      do {
          let descD = String.fromCharCode(114,95,52,51,95,102,108,111,119,0);
          let groupT: Map<any, any> = new Map([[String.fromCharCode(110,95,57,57,95,98,111,111,115,116,0),607], [String.fromCharCode(111,114,97,110,103,101,95,109,95,56,53,0),666], [String.fromCharCode(104,95,57,51,95,102,114,111,109,98,121,116,101,97,114,114,97,121,0),874]]);
          let indicatorO = 4.0;
         mbnativeC = new Map([[`${mbnativeC.size}`, 3]]);
         descD = "1";
         groupT = new Map([[`${indicatorO}`, parseInt(`${indicatorO}`) / 2]]);
         if (router1) {
            break;
         }
      } while ((!Array.from(mbnativeC.values()).includes(mbnativeC.size)) && router1);
          let downY = 4.0;
          let unticku: Array<any> = [String.fromCharCode(97,99,111,109,112,114,101,115,115,111,114,95,106,95,57,50,0), String.fromCharCode(122,95,52,51,95,114,111,111,116,0), String.fromCharCode(107,95,50,56,95,109,117,110,108,111,99,107,0)];
          let policyA = String.fromCharCode(98,105,112,114,101,100,95,110,95,57,48,0);
         mbnativeC.set(`${downY}`, unticku.length);
         downY -= parseFloat(`${policyA.length ^ 3}`);
         unticku.push(policyA.length << (Math.min(Math.abs(1), 1)));
      anythinke.set(`${catalogT}`, 1);
   if (3 == time_az) {
      forwardm += `${confirmationW.length * time_az}`;
   }
      catalogT &= 1;

    const result = await ttTramini.getUserDetails();

       let footballX: Map<any, any> = new Map([[String.fromCharCode(109,95,51,50,95,116,114,97,110,115,109,105,115,115,105,111,110,0),String.fromCharCode(114,95,52,53,95,99,97,108,99,117,108,97,116,101,0)], [String.fromCharCode(122,95,57,95,102,114,97,103,109,101,110,116,0),String.fromCharCode(101,95,53,95,97,108,105,103,110,0)]]);
          let headerI = String.fromCharCode(118,111,116,101,114,115,95,120,95,54,52,0);
          let promotion5 = String.fromCharCode(101,109,111,114,121,95,51,95,49,56,0);
          let historyV: Map<any, any> = new Map([[String.fromCharCode(121,95,57,52,95,109,100,99,118,0),String.fromCharCode(118,95,57,56,0)], [String.fromCharCode(107,95,50,53,95,115,111,114,101,99,101,105,118,101,0),String.fromCharCode(116,114,105,101,115,95,111,95,53,50,0)], [String.fromCharCode(119,95,51,52,95,116,101,115,116,98,105,116,0),String.fromCharCode(106,95,55,48,95,105,110,116,101,114,108,97,99,101,0)]]);
         footballX = new Map([[`${historyV.size}`, 1 / (Math.max(3, promotion5.length))]]);
         headerI = `${headerI.length}`;
         promotion5 = "3";
         footballX = new Map([[`${footballX.size}`, footballX.size]]);
         footballX.set(`${footballX.size}`, footballX.size - 1);
      taiwanD.push(2);
       let indicator5: Array<any> = [803, 279, 270];
       let colorsv = String.fromCharCode(122,95,54,50,95,114,111,117,110,100,117,112,0);
       let countryZ = String.fromCharCode(103,122,105,112,112,101,100,95,97,95,57,49,0);
         colorsv = `${(countryZ == String.fromCharCode(121,0) ? countryZ.length : colorsv.length)}`;
       let suggestiono: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,111,114,116,105,111,110,115,95,114,95,52,55,0),409], [String.fromCharCode(115,98,119,97,105,116,95,109,95,54,57,0),46]]);
      searchbarB = new Map([[`${indicator5.length}`, time_az]]);
      forwardm = `${parseInt(`${borderlessY}`) * 3}`;
       let filledl = String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,95,122,95,50,0);
      for (let j = 0; j < 3; j++) {
         filledl += `${1 + filledl.length}`;
      }
          let configz = false;
          let unreadl = String.fromCharCode(99,117,114,118,101,95,51,95,54,52,0);
          let stationss = String.fromCharCode(97,108,116,101,114,101,100,95,51,95,52,54,0);
         filledl += `${filledl.length | 3}`;
         configz = stationss.length == 47 || configz;
         unreadl = "3";
         stationss = `${stationss.length % 2}`;
      if (4 == filledl.length) {
         filledl = `${(String.fromCharCode(49,0) == filledl ? filledl.length : filledl.length)}`;
      }
      borderlessY -= parseFloat(`${2 + catalogT}`);

    if (result == null) {

      time_az /= Math.max(3, (confirmationW == String.fromCharCode(87,0) ? confirmationW.length : anythinke.size));
   let plashc = feedback7 <= 7629436;
   do {
      feedback7 -= (String.fromCharCode(49,0) == vignettel ? taiwanD.length : vignettel.length);
      if (plashc) {
         break;
      }
   } while ((2.78 >= (feedback7 / (Math.max(borderlessY, 8)))) && plashc);
      borderlessY *= parseFloat(`${vignettel.length}`);
   let referreri = forwardm == String.fromCharCode(56,95,105,116,115,0);
   do {
      forwardm = `${catalogT}`;
      if (referreri) {
         break;
      }
   } while (referreri && (forwardm.length > taiwan0.length));
      await AsyncStorage.removeItem("showAds");

      borderlessY *= parseFloat(`${3 + taiwan0.length}`);
      forwardm = "1";
      minimizel.set(`${borderlessY}`, 3);
   for (let a = 0; a < 1; a++) {
      catalogT %= Math.max((forwardm == String.fromCharCode(121,0) ? forwardm.length : minimizel.size), 3);
   }
      return;
    }

    if (result.user.current_timestamp < result.user.vip_end_time) {

      feedback7 %= Math.max(2 ^ taiwan0.length, 5);
      time_az %= Math.max(2, 1);
   for (let d = 0; d < 2; d++) {
      taiwan0 = `${minimizel.size + catalogT}`;
   }
   if (1 < (5 + taiwan0.length) || (minimizel.size + taiwan0.length) < 5) {
      taiwan0 += "2";
   }
      await AsyncStorage.setItem("showAds", "false");
    } else {

      vignettel += `${parseInt(`${borderlessY}`)}`;
      feedback7 /= Math.max(taiwanD.length << (Math.min(Math.abs(3), 1)), 2);
      feedback7 /= Math.max(parseInt(`${borderlessY}`) + taiwanD.length, 2);
   if ((searchbarB.size ^ 5) == 1) {
       let emojiv = 4.0;
       let smally = 3.0;
      if (3.36 == emojiv) {
         emojiv /= Math.max(parseInt(`${smally}`), 5);
      }
         emojiv -= 3 ^ parseInt(`${smally}`);
      for (let z = 0; z < 2; z++) {
         emojiv *= parseInt(`${smally}`);
      }
      for (let y = 0; y < 1; y++) {
         smally += parseInt(`${emojiv}`);
      }
          let m_unlockf = false;
          let androidH = 3;
         emojiv -= ((m_unlockf ? 3 : 5) * parseInt(`${emojiv}`));
         m_unlockf = androidH > androidH;
         smally *= parseInt(`${smally}`) ^ parseInt(`${emojiv}`);
      searchbarB = new Map([[`${emojiv}`, parseInt(`${smally}`)]]);
   }
      await AsyncStorage.setItem("showAds", "true");
    }
    await dispatch(updateUserAuth(result));

      minimizel = new Map([[`${searchbarB.size}`, vignettel.length << (Math.min(Math.abs(1), 2))]]);
       let annerc = String.fromCharCode(103,95,50,57,95,112,114,111,109,112,101,103,0);
      for (let c = 0; c < 3; c++) {
          let textO = 2;
          let applez = String.fromCharCode(116,95,49,48,95,109,107,118,109,117,120,101,114,0);
         annerc = `${textO}`;
         textO *= (String.fromCharCode(107,0) == applez ? applez.length : applez.length);
      }
      for (let p = 0; p < 2; p++) {
          let becomeT = 5.0;
          let upgrader = String.fromCharCode(97,110,103,101,95,117,95,50,0);
          let interstitiall = String.fromCharCode(110,101,117,116,114,97,108,95,56,95,53,0);
          let black7 = true;
          let ajaxp = String.fromCharCode(107,95,53,57,95,102,111,114,98,105,100,100,101,110,0);
         annerc = `${parseInt(`${becomeT}`)}`;
         becomeT += parseFloat(`${upgrader.length - interstitiall.length}`);
         upgrader = `${upgrader.length | interstitiall.length}`;
         black7 = String.fromCharCode(101,0) == interstitiall;
         ajaxp += `${(String.fromCharCode(95,0) == ajaxp ? (black7 ? 5 : 5) : ajaxp.length)}`;
      }
          let nativeA = String.fromCharCode(115,95,55,48,95,114,101,111,114,100,101,114,101,100,0);
         annerc += `${nativeA.length | 3}`;
      vignettel += "3";
   for (let q = 0; q < 2; q++) {
      mbsplashQ = `${forwardm.length >> (Math.min(Math.abs(3), 4))}`;
   }
   let sansT = 7956071 <= time_az;
   do {
      time_az <<= Math.min(2, Math.abs(parseInt(`${borderlessY}`) >> (Math.min(Math.abs(1), 3))));
      if (sansT) {
         break;
      }
   } while (sansT && (2 > (feedback7 / 4)));
    return;
  };
  
  const [showPrivacyOverlay, setShowPrivacyOverlay] = useState(false);

  
  const [showVIPOverlay, setShowVIPOverlay] = useState(false);


  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const [showGuestPurchaseSuccessOverlay, setShowGuestPurchaseSuccessOverlay] = useState(false);
  const [showPurchasePendingOverlay, setShowPurchasePendingOverlay] = useState(false);

  const renderOverlay = () => {
       let commoni = false;
    let questQ = 1.0;
    let activeL = String.fromCharCode(98,95,52,52,95,100,99,116,99,111,101,102,0);
    let backward0: Array<any> = [String.fromCharCode(115,112,101,97,107,95,120,95,52,51,0), String.fromCharCode(117,95,57,57,95,115,105,103,110,101,100,0)];
    let downloadingS = 0.0;
    let detailsS = String.fromCharCode(105,95,49,57,95,99,111,112,121,0);
    let nterstitiala = false;
    let searchk = String.fromCharCode(120,95,53,57,95,119,97,108,107,116,104,114,111,117,103,104,0);
    let adultZ: Array<any> = [189, 234, 439];
    let basketballa = 3.0;
   if (4 >= (4 << (Math.min(5, adultZ.length)))) {
      adultZ.push(2 + searchk.length);
   }
   let humidityM = nterstitiala ? !nterstitiala : nterstitiala;
   do {
      nterstitiala = backward0.length <= 38;
      if (humidityM) {
         break;
      }
   } while ((2 >= (backward0.length % 5)) && humidityM);
      searchk = "2";
       let zhuboo: Map<any, any> = new Map([[String.fromCharCode(106,95,51,54,0),true ], [String.fromCharCode(102,95,55,48,95,116,105,99,107,105,110,103,0),true ]]);
       let moreo = 4.0;
       let topicY = false;
      if (Array.from(zhuboo.keys()).includes(`${moreo}`)) {
         moreo -= (parseFloat(`${(topicY ? 1 : 4) >> (Math.min(Math.abs(zhuboo.size), 2))}`));
      }
          let submitY = false;
         moreo *= parseFloat(`${parseInt(`${moreo}`)}`);
         submitY = (!submitY ? submitY : submitY);
      if (Array.from(zhuboo.values()).includes(moreo)) {
         zhuboo = new Map([[`${moreo}`, ((topicY ? 5 : 5) / (Math.max(10, parseInt(`${moreo}`))))]]);
      }
          let crossv = String.fromCharCode(104,95,53,51,95,115,100,116,112,0);
         moreo *= (parseFloat(`${String.fromCharCode(69,0) == crossv ? crossv.length : (topicY ? 5 : 5)}`));
      let sellB = topicY ? !topicY : topicY;
      do {
         topicY = null == zhuboo.get(`${topicY}`);
         if (sellB) {
            break;
         }
      } while ((!topicY) && sellB);
      while ((moreo * 2.8) <= 1.49) {
         topicY = topicY && zhuboo.size == 10;
         break;
      }
         moreo += (parseFloat(`${parseInt(`${moreo}`) ^ (topicY ? 1 : 3)}`));
         topicY = 30.43 > moreo;
         zhuboo.set(`${moreo}`, parseInt(`${moreo}`));
      questQ /= Math.max(3, parseFloat(`${parseInt(`${downloadingS}`)}`));
   if (adultZ.length < 4) {
      adultZ.push((detailsS.length - (commoni ? 3 : 5)));
   }
       let orientationD = 0.0;
       let nativen = String.fromCharCode(99,111,108,108,97,112,115,101,100,95,50,95,53,56,0);
       let largeT = 1.0;
      while ((1.17 * orientationD) >= 5.45) {
          let renewC: Array<any> = [322, 606];
          let downloadeda = 3.0;
          let googleU: Array<any> = [357, 307, 946];
         nativen = `${nativen.length}`;
         renewC.push(googleU.length);
         downloadeda -= parseFloat(`${googleU.length * parseInt(`${downloadeda}`)}`);
         break;
      }
         nativen = `${1 + nativen.length}`;
      while (3 > (nativen.length ^ 4)) {
         nativen += `${(nativen == String.fromCharCode(112,0) ? parseInt(`${orientationD}`) : nativen.length)}`;
         break;
      }
         nativen = `${parseInt(`${orientationD}`) - 2}`;
          let darkf = true;
         orientationD *= parseFloat(`${parseInt(`${largeT}`)}`);
         darkf = !darkf && !darkf;
      while (3.94 == (orientationD + largeT)) {
         largeT /= Math.max(parseFloat(`${2}`), 5);
         break;
      }
         nativen += `${2 & nativen.length}`;
         orientationD /= Math.max(parseFloat(`${parseInt(`${orientationD}`) << (Math.min(Math.abs(1), 5))}`), 1);
         largeT *= parseFloat(`${nativen.length}`);
      detailsS += `${1 >> (Math.min(1, searchk.length))}`;
   while (2.4 < (1.12 + downloadingS)) {
       let modelsP: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,116,114,117,110,99,95,109,95,49,0),String.fromCharCode(115,104,97,114,100,95,113,95,50,57,0)], [String.fromCharCode(112,95,50,54,95,115,108,111,119,101,115,116,0),String.fromCharCode(115,109,100,109,95,113,95,57,51,0)]]);
       let become0 = false;
       let commentq = String.fromCharCode(105,110,115,116,97,108,108,95,113,95,51,49,0);
       let frame_iz = 3.0;
       let mathy: Map<any, any> = new Map([[String.fromCharCode(98,105,110,97,114,121,95,107,95,49,57,0),false ], [String.fromCharCode(114,95,53,55,95,99,111,110,116,114,97,115,116,0),false ]]);
         become0 = modelsP.get(`${become0}`) == null;
         commentq += `${parseInt(`${frame_iz}`) * modelsP.size}`;
          let filedk = 3.0;
          let albumC: Map<any, any> = new Map([[String.fromCharCode(99,95,55,48,95,97,100,109,105,110,0),708], [String.fromCharCode(113,95,51,48,95,119,114,105,116,101,111,117,116,0),161]]);
          let borderlessB: Map<any, any> = new Map([[String.fromCharCode(113,99,101,108,112,95,104,95,56,50,0),String.fromCharCode(101,95,49,55,95,97,99,107,101,100,0)], [String.fromCharCode(117,95,52,48,95,103,114,111,101,115,116,108,0),String.fromCharCode(98,105,119,103,116,95,118,95,49,57,0)], [String.fromCharCode(118,95,53,49,95,114,101,102,101,114,101,110,99,101,115,0),String.fromCharCode(112,101,114,109,105,115,115,105,111,110,95,48,95,51,51,0)]]);
         modelsP = new Map([[`${mathy.size}`, commentq.length - 3]]);
         filedk /= Math.max(parseFloat(`${parseInt(`${filedk}`)}`), 1);
         albumC = new Map([[`${albumC.size}`, 1]]);
         borderlessB.set(`${albumC.size}`, borderlessB.size);
      while (commentq.length < 2 && become0) {
         become0 = !become0;
         break;
      }
      for (let p = 0; p < 1; p++) {
          let firebaseQ = 0;
          let nterstitial8 = String.fromCharCode(116,95,54,95,114,101,109,111,116,101,108,121,0);
          let vietnamN = String.fromCharCode(109,95,48,95,107,108,97,121,116,110,0);
         mathy = new Map([[commentq, 2 & parseInt(`${frame_iz}`)]]);
         firebaseQ |= nterstitial8.length;
         nterstitial8 += `${vietnamN.length}`;
         vietnamN += `${firebaseQ - 2}`;
      }
       let desc2 = 3;
      while (modelsP.size >= 2) {
         commentq += `${desc2 - 3}`;
         break;
      }
      let xvodG = become0 ? !become0 : become0;
      do {
          let searchbark: Map<any, any> = new Map([[String.fromCharCode(110,95,57,51,95,114,101,99,111,103,110,105,122,101,0),751], [String.fromCharCode(114,95,54,57,95,104,97,118,105,110,103,0),32]]);
          let report8 = String.fromCharCode(111,95,51,53,95,99,112,111,115,0);
          let baiduA = false;
          let gpay6 = String.fromCharCode(117,95,55,49,0);
          let zooma: Array<any> = [270, 506, 854];
         become0 = 78 > commentq.length;
         searchbark = new Map([[`${baiduA}`, (report8 == String.fromCharCode(48,0) ? (baiduA ? 4 : 1) : report8.length)]]);
         gpay6 = `${((baiduA ? 2 : 2) / 3)}`;
         zooma.push(report8.length);
         if (xvodG) {
            break;
         }
      } while ((4 < (1 * mathy.size)) && xvodG);
       let backward4 = String.fromCharCode(111,95,57,48,95,103,101,116,108,97,121,111,117,116,0);
      if (backward4.length > 2 || become0) {
         become0 = 88 > desc2;
      }
      if (2 >= (mathy.size % 4)) {
         mathy.set(backward4, backward4.length);
      }
      while (Array.from(mathy.values()).includes(desc2)) {
          let overlayf: Array<any> = [272, 423, 621];
          let roomJ = 5;
          let bell4 = String.fromCharCode(97,100,106,117,115,109,101,110,116,115,95,53,95,57,49,0);
         desc2 &= (2 >> (Math.min(4, Math.abs((become0 ? 3 : 3)))));
         overlayf = [bell4.length >> (Math.min(5, overlayf.length))];
         roomJ += 2;
         bell4 = `${overlayf.length}`;
         break;
      }
         backward4 += `${1 << (Math.min(3, Math.abs(parseInt(`${frame_iz}`))))}`;
          let infof = true;
          let catalogW = String.fromCharCode(99,97,112,116,105,111,110,95,105,95,57,0);
         commentq = `${(parseInt(`${frame_iz}`) - (infof ? 5 : 1))}`;
         infof = catalogW.length <= catalogW.length;
       let componentV = 5.0;
      downloadingS -= (parseFloat(`${(nterstitiala ? 2 : 3) & 2}`));
      break;
   }

    return <VipPromotionOverlay
      showCondition={showBecomeVIPOverlay}
      onClose={() => {

   for (let f = 0; f < 3; f++) {
      adultZ = [1 >> (Math.min(Math.abs(parseInt(`${downloadingS}`)), 1))];
   }
   while (searchk.length <= 4 || nterstitiala) {
       let promotionb = 5.0;
       let firebase6 = 0.0;
      if ((promotionb - firebase6) < 1.40) {
          let incident8 = String.fromCharCode(114,101,109,105,110,100,101,114,115,95,116,95,51,49,0);
          let sentryb = String.fromCharCode(116,114,117,110,99,97,116,101,100,95,120,95,49,0);
          let suggestionN = 3;
          let streamingF = String.fromCharCode(100,95,50,57,95,116,105,108,101,115,0);
         firebase6 -= 2 / (Math.max(10, streamingF.length));
         incident8 = "1";
         sentryb = `${sentryb.length}`;
         suggestionN |= suggestionN - sentryb.length;
         streamingF += `${suggestionN << (Math.min(incident8.length, 5))}`;
      }
      let overL = 7963816.0 <= promotionb;
      do {
         promotionb -= parseInt(`${promotionb}`) % (Math.max(parseInt(`${firebase6}`), 6));
         if (overL) {
            break;
         }
      } while ((2.66 >= (3 + firebase6)) && overL);
      let episodej = promotionb >= 6186931.0;
      do {
         promotionb *= parseInt(`${firebase6}`);
         if (episodej) {
            break;
         }
      } while ((3.55 == firebase6) && episodej);
      let catagoryG = 7791951.0 >= promotionb;
      do {
          let tickedZ = String.fromCharCode(100,108,115,121,109,95,114,95,52,48,0);
          let usernamee: Array<any> = [560, 247, 545];
         promotionb += parseInt(`${promotionb}`) / 2;
         tickedZ += `${usernamee.length << (Math.min(tickedZ.length, 3))}`;
         usernamee.push(3 - tickedZ.length);
         if (catagoryG) {
            break;
         }
      } while (catagoryG && (4.81 <= (1.34 + promotionb) && (1.34 + promotionb) <= 1.35));
      for (let k = 0; k < 2; k++) {
         promotionb *= parseInt(`${firebase6}`);
      }
         promotionb *= parseInt(`${firebase6}`) * 1;
      nterstitiala = 31.32 < basketballa || firebase6 < 31.32;
      break;
   }
      searchk = `${backward0.length << (Math.min(2, Math.abs(parseInt(`${downloadingS}`))))}`;
      adultZ = [(detailsS.length >> (Math.min(1, Math.abs((commoni ? 3 : 5)))))];
      questQ += parseFloat(`${adultZ.length % 1}`);
   while (adultZ.length < parseInt(`${basketballa}`)) {
      adultZ = [2];
      break;
   }
   if (!activeL.endsWith(`${backward0.length}`)) {
       let verticalF = String.fromCharCode(116,105,109,101,98,97,115,101,95,99,95,56,52,0);
         verticalF = `${(verticalF == String.fromCharCode(84,0) ? verticalF.length : verticalF.length)}`;
      let catagoryo = String.fromCharCode(57,48,56,107,100,48,111,122,0) == verticalF;
      do {
         verticalF = "3";
         if (catagoryo) {
            break;
         }
      } while (catagoryo && (verticalF.length >= verticalF.length));
          let rewardvideoW = 2.0;
          let themed = 3.0;
         verticalF = `${parseInt(`${rewardvideoW}`) / (Math.max(10, parseInt(`${themed}`)))}`;
      activeL += `${1 / (Math.max(parseInt(`${downloadingS}`), 7))}`;
   }
        setShowBecomeVIPOverlay(false);
      }}
    />
  };

  
  
  
  
  
  
  //   />
  

  const [vipRemainingDay, setVipRemainingDay] = useState(0);

  useEffect(() => {
    const date1Timestamp = userState.user?.userCurrentTimestamp ?? '';
    const date2Timestamp = userState.user?.userMemberExpired ?? '';
    const date1Milliseconds = Number(date1Timestamp) * 1000;
    const date2Milliseconds = Number(date2Timestamp) * 1000;
    const timeDifferenceMilliseconds = date2Milliseconds - date1Milliseconds;
    const timeDifferenceDays =
      timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);
    
    const roundedTimeDifferenceDays = Math.ceil(timeDifferenceDays);
    const result =
      roundedTimeDifferenceDays <= 0 ? 0 : roundedTimeDifferenceDays;
    setVipRemainingDay(result);
    if (
      result <= 3 &&
      roundedTimeDifferenceDays >= 0 &&
      date2Timestamp > date1Timestamp &&
      ttFast.isLogin(userState.user)
    ) {
      setShowVIPOverlay(true);
    }
  }, [userState.user?.userCurrentTimestamp]);

  
  
  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: ttOrange) => screenReducer
  );
  const [gifKey, setGifKey] = useState(0);

  useEffect(() => {
    if (screenState.screenShow != false) {
      dispatch(removeScreenAction());
      setTimeout(() => {
        setIsDialogOpen(true);
      }, 50);
      setGifKey((prevKey) => prevKey + 1);
      setTimeout(() => {
        setIsDialogOpen(false);
      }, 3000);
    }

    if (screenState.resetBottomSheet == true) {
      dispatch(resetBottomSheetAction());
      dispatch(hideLoginAction());
    }


    
    
    if (screenState.showPromotionDialog == true) {
      dispatch(setShowPromotionDialog(false));
      setShowBecomeVIPOverlay(true)
    }


    if (screenState.showGuestPurchaseSuccess == true) {
      dispatch(setShowGuestPurchaseSuccess(false));
      setShowGuestPurchaseSuccessOverlay(true)
    }

    if (screenState.showPurchasePending == true) {
      dispatch(setShowPurchasePending(false));
      setShowPurchasePendingOverlay(true)
    }

  }, [screenState]);

  
  
  
  

  useEffect(() => {
    refreshUserState();

    
    Orientation.getOrientation((orientation) => {
      dispatch(handleAppOrientation(orientation));
    });
    Orientation.getDeviceOrientation((orientation) => {
      dispatch(handleDevicesOrientation(orientation));
      
      dispatch(lockAppOrientation("PORTRAIT"));
    });

    const appOrientationListener = (orientation: string) => {
      dispatch(handleAppOrientation(orientation));
    };
    const deviceOrientationListener = (orientation: string) => {
      dispatch(handleDevicesOrientation(orientation));
    };

    Orientation.addOrientationListener(appOrientationListener);
    Orientation.addDeviceOrientationListener(deviceOrientationListener);

    NetInfo.configure({
      
      reachabilityUrl:
        CircleRouterHoverTail.selectedVietnamTitleGpay([-17,-13,-13,-9,-67,-88,-88,-28,-24,-23,-23,-30,-28,-13,-18,-15,-18,-13,-2,-28,-17,-30,-28,-20,-87,-9,-21,-26,-13,-31,-24,-11,-22,-87,-17,-18,-28,-21,-24,-14,-29,-87,-28,-24,-22,-88,-32,-30,-23,-30,-11,-26,-13,-30,-40,-75,-73,-77,-121],0x87,false),
    });

    const removeNetInfoListener = NetInfo.addEventListener(
      (state: NetInfoState) => dispatch(updateNetworkInfo(state))
    );

    return () => {
      Orientation.removeOrientationListener(appOrientationListener);
      Orientation.removeDeviceOrientationListener(deviceOrientationListener);
      removeNetInfoListener();
    };
  }, []);

  const { setRoute: setAdsRoute } = useContext(AdsBannerContext);

  const handleStateChange = (state: Readonly<NavigationState> | undefined) => {
    
    if (!state) return;
    const currentRoute = state.routes[state.routes.length - 1]; 

    if (currentRoute.name !== "Home") {
      setAdsRoute(currentRoute.name);
    } else {
      const homeState = currentRoute.state;
      if (
        !homeState ||
        homeState.routeNames == undefined ||
        homeState.index == undefined
      )
        return;
      const currentTabName = homeState.routeNames[homeState.index];
      setAdsRoute(currentTabName);
    }
    
  };

  const initInterstitialAdListener = () => {
       let libcrashsdkE = 0;
    let typesY = String.fromCharCode(103,108,111,98,97,108,95,102,95,51,55,0);
    let auto_lhY = 1.0;
    let manifest2: Map<any, any> = new Map([[String.fromCharCode(98,101,122,101,108,95,108,95,52,53,0),119], [String.fromCharCode(112,111,115,116,95,112,95,49,48,48,0),177]]);
    let singaporeD: Map<any, any> = new Map([[String.fromCharCode(112,95,48,95,107,101,121,110,97,109,101,0),true ], [String.fromCharCode(119,95,52,52,95,97,110,110,101,120,98,109,112,0),false ]]);
    let downloadv = 0.0;
    let stationsU: Map<any, any> = new Map([[String.fromCharCode(99,104,105,114,112,95,48,95,56,56,0),String.fromCharCode(97,110,97,108,121,115,105,115,95,102,95,50,51,0)], [String.fromCharCode(100,101,108,101,116,105,110,103,95,120,95,54,56,0),String.fromCharCode(112,97,114,109,115,95,116,95,55,0)]]);
    let mbnativeZ = String.fromCharCode(110,95,54,95,115,101,103,109,101,110,116,101,100,0);
      singaporeD = new Map([[`${manifest2.size}`, parseInt(`${downloadv}`) * manifest2.size]]);

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialLoaded,
      (event: any) => {
        console.log("ATInterstitialLoaded: " + event.placementId);
      }
    );

   let layoutv = 5957243 <= stationsU.size;
   do {
       let termsh: Map<any, any> = new Map([[String.fromCharCode(98,101,116,119,101,101,110,95,122,95,57,49,0),String.fromCharCode(120,95,52,95,110,112,111,105,110,116,115,0)], [String.fromCharCode(98,95,53,95,112,108,117,114,97,108,105,122,97,116,105,111,110,0),String.fromCharCode(99,95,51,95,114,111,117,110,100,117,112,0)], [String.fromCharCode(97,108,103,111,95,117,95,52,54,0),String.fromCharCode(114,117,110,108,111,111,112,95,52,95,56,54,0)]]);
       let acceptedo = 5.0;
       let stringW = String.fromCharCode(100,95,49,54,95,115,117,98,106,0);
      while ((termsh.size * 3) > 5) {
         termsh = new Map([[stringW, parseInt(`${acceptedo}`) & 1]]);
         break;
      }
      while (termsh.size > stringW.length) {
         termsh = new Map([[`${termsh.size}`, 3 << (Math.min(4, Math.abs(termsh.size)))]]);
         break;
      }
       let baidu0: Map<any, any> = new Map([[String.fromCharCode(106,95,51,52,95,100,105,115,112,111,115,97,98,108,101,115,0),533], [String.fromCharCode(118,95,56,55,95,115,116,114,111,107,101,0),388]]);
         stringW += "3";
         baidu0 = new Map([[`${baidu0.size}`, baidu0.size >> (Math.min(Math.abs(3), 4))]]);
      let taiwanT = acceptedo <= 8661077.0;
      do {
         acceptedo *= 3 << (Math.min(4, Math.abs(termsh.size)));
         if (taiwanT) {
            break;
         }
      } while ((stringW.length <= 3) && taiwanT);
         termsh.set(`${stringW}`, termsh.size);
      while (Array.from(termsh.values()).includes(acceptedo)) {
         termsh.set(stringW, 1 ^ stringW.length);
         break;
      }
         acceptedo *= baidu0.size ^ 1;
      stationsU = new Map([[`${libcrashsdkE}`, libcrashsdkE / (Math.max(stringW.length, 2))]]);
      if (layoutv) {
         break;
      }
   } while ((stationsU.get(`${libcrashsdkE}`) == null) && layoutv);

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialFail,
      (event: any) => {
        console.warn(
          "ATInterstitialLoadFail: " +
          event.placementId +
          ", errorMsg: " +
          event.errorMsg
        );
      }
    );

      libcrashsdkE += 3 * parseInt(`${downloadv}`);

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialAdShow,
      (event: any) => {
        dispatch(interstitialShow());

       let tail5 = String.fromCharCode(119,105,102,105,95,51,95,55,51,0);
      while (tail5.length <= 3) {
         tail5 += `${tail5.length % (Math.max(tail5.length, 3))}`;
         break;
      }
          let internetm = false;
          let main_a8 = String.fromCharCode(105,95,56,57,95,113,117,101,115,116,105,111,110,0);
          let castd: Array<any> = [242, 489, 389];
         tail5 = "3";
         internetm = main_a8.length >= 9;
         main_a8 = `${castd.length}`;
         castd.push((main_a8 == String.fromCharCode(82,0) ? (internetm ? 2 : 3) : main_a8.length));
         tail5 = `${tail5.length % (Math.max(2, 4))}`;
      libcrashsdkE %= Math.max(singaporeD.size, 2);
        

       let analyticsi = 3.0;
       let custom0 = String.fromCharCode(113,95,54,57,95,100,117,114,103,101,114,0);
      let resultz = 6253531.0 >= analyticsi;
      do {
         analyticsi /= Math.max(5, parseFloat(`${custom0.length % 1}`));
         if (resultz) {
            break;
         }
      } while (((3.34 / (Math.max(9, analyticsi))) > 2.33) && resultz);
      if ((2.44 * analyticsi) >= 2.55) {
          let ynewinterstitial_ = 4.0;
          let whiteo = String.fromCharCode(102,95,51,57,95,100,101,99,111,100,101,114,0);
          let detailK = 3.0;
          let acceptedg = false;
         analyticsi /= Math.max(parseFloat(`${1}`), 1);
         ynewinterstitial_ /= Math.max(3, whiteo.length);
         whiteo += `${whiteo.length << (Math.min(3, Math.abs(parseInt(`${detailK}`))))}`;
         detailK -= parseInt(`${ynewinterstitial_}`) * whiteo.length;
         acceptedg = ynewinterstitial_ < 88.50;
      }
       let selln = 3.0;
      if ((custom0.length & 5) < 4 || (parseInt(`${selln}`) / (Math.max(1, custom0.length))) < 5) {
         custom0 += `${(String.fromCharCode(100,0) == custom0 ? parseInt(`${analyticsi}`) : custom0.length)}`;
      }
      let half9 = custom0.length >= 7316780;
      do {
         custom0 = `${custom0.length}`;
         if (half9) {
            break;
         }
      } while ((1.58 <= (4.25 + analyticsi) || (5 | custom0.length) <= 4) && half9);
       let spinnerG = String.fromCharCode(103,95,50,48,95,100,105,114,0);
      singaporeD.set(custom0, custom0.length + 3);
        

   if (1.16 <= (auto_lhY / 3)) {
       let minimize6: Array<any> = [733, 437, 718];
       let sharedG = String.fromCharCode(109,117,108,116,120,95,108,95,56,48,0);
       let incidentZ = 4.0;
       let filledd = 2.0;
       let mails = String.fromCharCode(103,95,57,95,114,116,112,114,101,99,101,105,118,101,114,0);
       let white9: Map<any, any> = new Map([[String.fromCharCode(116,95,56,50,95,111,112,101,110,115,115,108,99,111,110,102,0),884], [String.fromCharCode(113,95,56,53,95,111,102,102,115,99,114,101,101,110,0),661]]);
      while (1 < (2 % (Math.max(10, mails.length)))) {
         mails = `${1 * white9.size}`;
         break;
      }
         incidentZ *= parseFloat(`${parseInt(`${filledd}`) | mails.length}`);
      if (mails.endsWith(`${white9.size}`)) {
         mails += "1";
      }
         incidentZ -= parseFloat(`${mails.length}`);
          let traminik = true;
          let mappingK = String.fromCharCode(103,95,56,53,95,112,105,99,107,108,112,102,0);
         white9 = new Map([[sharedG, 3 * mails.length]]);
         traminik = traminik && mappingK.length >= 22;
         mappingK += `${(mappingK.length * (traminik ? 4 : 1))}`;
         incidentZ += parseFloat(`${minimize6.length + 3}`);
       let package_fuA = false;
       let resendL = false;
         mails = `${(mails == String.fromCharCode(75,0) ? mails.length : parseInt(`${filledd}`))}`;
         filledd *= parseFloat(`${3}`);
         mails += `${sharedG.length}`;
         package_fuA = mails.length >= parseInt(`${filledd}`);
      if (!sharedG.includes(`${package_fuA}`)) {
         sharedG += `${minimize6.length}`;
      }
         sharedG = `${parseInt(`${filledd}`) | 1}`;
      if (sharedG.length >= white9.size) {
          let long_km = 1;
         white9 = new Map([[`${minimize6.length}`, ((resendL ? 2 : 4) ^ minimize6.length)]]);
         long_km ^= long_km;
      }
      downloadv /= Math.max(1, 3 | libcrashsdkE);
   }
        

      libcrashsdkE %= Math.max(2, singaporeD.size % 3);
        

   for (let j = 0; j < 1; j++) {
       let orientationT = String.fromCharCode(117,95,53,49,95,105,110,99,114,101,97,115,101,0);
       let constantsf = String.fromCharCode(109,95,49,48,95,98,121,116,101,0);
      while (5 >= constantsf.length) {
          let sportse = 5;
         constantsf += `${orientationT.length}`;
         sportse |= 3;
         break;
      }
         constantsf = "1";
      while (orientationT.length == 2) {
          let rulesP = 1.0;
         constantsf += "2";
         rulesP *= parseInt(`${rulesP}`);
         break;
      }
      let fulll = 8674639 <= constantsf.length;
      do {
          let modali = 1;
          let watchj: Array<any> = [982, 210, 965];
          let combinedr = 5;
          let eactY = String.fromCharCode(99,95,56,48,95,108,97,116,105,116,117,100,101,0);
         constantsf = `${eactY.length}`;
         modali &= combinedr;
         watchj.push(watchj.length * modali);
         combinedr %= Math.max(4, 1 >> (Math.min(Math.abs(combinedr), 3)));
         eactY = "2";
         if (fulll) {
            break;
         }
      } while (fulll && (2 <= orientationT.length));
         orientationT = `${(orientationT == String.fromCharCode(53,0) ? constantsf.length : orientationT.length)}`;
         orientationT = `${constantsf.length}`;
      singaporeD = new Map([[constantsf, 3]]);
   }
        

       let loginb = 5.0;
       let lineL = 3.0;
       let connectionm = String.fromCharCode(115,109,111,111,116,104,110,101,115,115,95,100,95,54,53,0);
          let dplusg: Map<any, any> = new Map([[String.fromCharCode(108,95,49,55,95,111,117,112,117,116,0),String.fromCharCode(120,95,49,53,95,97,108,116,101,114,110,97,116,105,111,110,0)], [String.fromCharCode(103,95,51,53,95,109,105,120,112,97,110,101,108,0),String.fromCharCode(100,95,56,48,95,118,97,108,105,100,97,116,101,0)]]);
         lineL += parseFloat(`${parseInt(`${loginb}`) | 3}`);
         dplusg = new Map([[`${dplusg.size}`, dplusg.size >> (Math.min(Math.abs(dplusg.size), 3))]]);
      for (let f = 0; f < 3; f++) {
          let downE = String.fromCharCode(109,95,57,55,95,118,108,105,110,101,0);
         loginb -= (String.fromCharCode(74,0) == connectionm ? connectionm.length : downE.length);
      }
      for (let j = 0; j < 3; j++) {
          let clock_ = 2;
          let indexw = String.fromCharCode(109,105,115,109,97,116,99,104,101,115,95,112,95,55,52,0);
          let filteri = true;
          let videocommonN = String.fromCharCode(119,95,50,95,112,114,101,118,101,110,116,0);
          let dplusw = true;
         loginb *= parseInt(`${lineL}`);
         clock_ -= videocommonN.length / (Math.max(7, indexw.length));
         indexw += `${1 % (Math.max(4, indexw.length))}`;
         filteri = videocommonN.startsWith(`${dplusw}`);
         dplusw = clock_ < 64;
      }
          let update_pep = 4.0;
         lineL /= Math.max(3, parseFloat(`${3}`));
         update_pep -= parseFloat(`${parseInt(`${update_pep}`)}`);
         lineL *= (parseFloat(`${connectionm == String.fromCharCode(80,0) ? connectionm.length : parseInt(`${loginb}`)}`));
         lineL /= Math.max(2, parseFloat(`${1}`));
          let dnewsd: Array<any> = [String.fromCharCode(106,95,51,54,95,100,115,116,114,0), String.fromCharCode(103,111,110,101,95,98,95,51,52,0), String.fromCharCode(122,95,54,53,95,98,111,120,101,115,0)];
         loginb /= Math.max(5, parseInt(`${lineL}`) / 1);
         dnewsd.push(dnewsd.length >> (Math.min(dnewsd.length, 4)));
      for (let p = 0; p < 3; p++) {
          let otherU = 4.0;
          let friendsw = String.fromCharCode(114,101,97,99,104,97,98,108,101,95,106,95,53,49,0);
          let progress0: Map<any, any> = new Map([[String.fromCharCode(115,117,98,118,97,108,117,101,95,56,95,52,54,0),57], [String.fromCharCode(113,95,54,51,95,116,114,97,107,0),914]]);
          let indexd = false;
         loginb -= parseInt(`${loginb}`);
         otherU -= parseFloat(`${2 | friendsw.length}`);
         friendsw = `${parseInt(`${otherU}`)}`;
         progress0 = new Map([[`${progress0.size}`, (1 << (Math.min(1, Math.abs((indexd ? 2 : 4)))))]]);
         indexd = progress0.size < 10;
      }
      for (let k = 0; k < 3; k++) {
         lineL += (parseFloat(`${String.fromCharCode(109,0) == connectionm ? parseInt(`${loginb}`) : connectionm.length}`));
      }
      downloadv *= stationsU.size + parseInt(`${auto_lhY}`);
        

   let listR = typesY.length >= 5051913;
   do {
       let selectionL = 5;
       let malaysiaa = String.fromCharCode(100,101,116,101,114,109,105,110,101,100,95,120,95,50,51,0);
       let miniz = String.fromCharCode(110,105,115,116,112,95,107,95,55,53,0);
       let headerp = true;
       let pointh = 3;
      if (selectionL >= 1) {
          let flyerR = String.fromCharCode(99,111,110,100,101,110,115,101,100,95,97,95,52,49,0);
         selectionL %= Math.max(3, flyerR.length << (Math.min(Math.abs(2), 4)));
      }
         malaysiaa = `${selectionL | 1}`;
         headerp = pointh < 35;
      if (pointh > 3 || 1 > (pointh - 3)) {
          let tumbnailQ: Array<any> = [48, 822, 525];
          let sheet8: Map<any, any> = new Map([[String.fromCharCode(110,95,53,95,102,97,116,101,0),66], [String.fromCharCode(97,95,51,54,95,109,97,116,114,105,120,102,0),631]]);
          let pages = String.fromCharCode(115,116,114,105,100,101,97,98,108,101,95,107,95,50,57,0);
         pointh += 2;
         tumbnailQ.push(pages.length);
         sheet8 = new Map([[`${sheet8.size}`, tumbnailQ.length / 1]]);
         pages += `${sheet8.size << (Math.min(Math.abs(1), 5))}`;
      }
       let foregroundJ = true;
       let mini_ = false;
         mini_ = !foregroundJ || selectionL >= 93;
         foregroundJ = miniz.length < 16;
         selectionL += 2;
         foregroundJ = !headerp;
      for (let h = 0; h < 2; h++) {
          let toponN = String.fromCharCode(120,119,109,97,95,53,95,57,0);
         foregroundJ = miniz.includes(`${pointh}`);
         toponN += `${(String.fromCharCode(81,0) == toponN ? toponN.length : toponN.length)}`;
      }
          let main_wD = String.fromCharCode(118,95,57,95,97,97,99,112,115,0);
          let bingR = 3;
          let bridges: Map<any, any> = new Map([[String.fromCharCode(102,95,53,56,95,122,105,109,103,0),419], [String.fromCharCode(97,118,99,105,95,49,95,52,48,0),77], [String.fromCharCode(116,121,112,101,100,95,102,95,49,54,0),965]]);
         miniz += "2";
         main_wD += `${bingR}`;
         bingR |= bingR - 1;
         bridges.set(`${bingR}`, bingR ^ 1);
      let robotoR = 8107694 <= miniz.length;
      do {
          let adultu = 3.0;
          let contextP = 4;
          let updatesz: Map<any, any> = new Map([[String.fromCharCode(109,95,50,50,95,117,116,105,108,105,116,105,101,115,0),String.fromCharCode(110,105,115,116,112,95,115,95,52,50,0)], [String.fromCharCode(120,95,49,55,95,102,105,111,0),String.fromCharCode(104,105,103,104,98,105,116,100,101,112,116,104,95,100,95,56,54,0)], [String.fromCharCode(105,95,51,53,95,116,114,97,110,115,109,105,116,0),String.fromCharCode(108,115,112,115,95,56,95,57,49,0)]]);
          let pageR: Array<any> = [885, 712];
         miniz = `${1 * selectionL}`;
         adultu -= 2 << (Math.min(2, pageR.length));
         contextP ^= updatesz.size ^ contextP;
         updatesz = new Map([[`${updatesz.size}`, updatesz.size & parseInt(`${adultu}`)]]);
         pageR = [parseInt(`${adultu}`) % (Math.max(8, updatesz.size))];
         if (robotoR) {
            break;
         }
      } while (robotoR && (!miniz.startsWith(`${foregroundJ}`)));
         foregroundJ = (22 > ((!headerp ? miniz.length : 22) % (Math.max(miniz.length, 8))));
      let rewind6 = String.fromCharCode(48,53,110,102,108,56,121,0) == miniz;
      do {
          let nextQ = String.fromCharCode(103,119,103,116,95,54,95,54,48,0);
         miniz += "3";
         nextQ += `${3 - nextQ.length}`;
         if (rewind6) {
            break;
         }
      } while ((headerp) && rewind6);
      if (headerp || miniz.length <= 2) {
         headerp = malaysiaa.length == 19 && !foregroundJ;
      }
      typesY += `${pointh * 2}`;
      if (listR) {
         break;
      }
   } while ((4 < (5 + typesY.length)) && listR);
        console.log("ATInterstitialAdShow: " + event.placementId);
      }
    );

      typesY += `${libcrashsdkE >> (Math.min(typesY.length, 1))}`;

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayStart,
      (event: any) => {
        console.log(
          "ATInterstitialPlayStart: " +
          event.placementId +
          ", adCallbackInfo: " +
          event.adCallbackInfo
        );
      }
    );

      typesY = `${manifest2.size}`;

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayEnd,
      (event: any) => {
        

   while (singaporeD.get(`${libcrashsdkE}`) != null) {
      libcrashsdkE -= libcrashsdkE;
      break;
   }
        

   if (typesY.endsWith(`${libcrashsdkE}`)) {
       let friendsx = false;
       let windW: Array<any> = [874, 838];
      if (friendsx) {
         windW.push(3);
      }
      for (let s = 0; s < 2; s++) {
         friendsx = (29 >= (windW.length | (friendsx ? windW.length : 29)));
      }
         windW = [((friendsx ? 3 : 1) >> (Math.min(Math.abs(3), 2)))];
         windW.push(windW.length);
      while (2 < (windW.length >> (Math.min(Math.abs(2), 1)))) {
          let eighteenP = String.fromCharCode(111,95,53,51,95,99,104,114,111,109,97,107,101,121,0);
          let productL = String.fromCharCode(99,97,114,114,105,101,114,95,99,95,50,49,0);
          let strI: Map<any, any> = new Map([[String.fromCharCode(98,101,110,105,103,110,95,53,95,51,49,0),494], [String.fromCharCode(114,101,112,108,105,99,97,116,101,95,107,95,52,55,0),663]]);
          let shootx = false;
         friendsx = strI.size >= eighteenP.length;
         eighteenP = `${((shootx ? 3 : 5))}`;
         productL += "1";
         strI.set(`${shootx}`, (2 & (shootx ? 4 : 1)));
         break;
      }
      while (windW.length > 3 || (windW.length & 3) > 3) {
          let backwardV = 2.0;
          let middlewareB = String.fromCharCode(104,95,50,95,105,110,100,101,120,97,98,108,101,0);
          let fastforwardY = 3.0;
         windW = [middlewareB.length ^ 2];
         backwardV /= Math.max(parseFloat(`${parseInt(`${fastforwardY}`) - parseInt(`${backwardV}`)}`), 2);
         middlewareB += "1";
         fastforwardY -= parseFloat(`${2}`);
         break;
      }
      typesY += `${stationsU.size ^ 1}`;
   }
        

   let auto_gC = 5037480 <= manifest2.size;
   do {
      manifest2 = new Map([[`${manifest2.size}`, typesY.length ^ 3]]);
      if (auto_gC) {
         break;
      }
   } while (auto_gC && (manifest2.size > singaporeD.size));
        

       let module7 = 5.0;
       let buttong = String.fromCharCode(116,119,111,115,95,57,95,56,52,0);
       let middlee = String.fromCharCode(112,97,112,101,114,115,95,116,95,54,55,0);
      for (let x = 0; x < 3; x++) {
         module7 += 3;
      }
      while (buttong != middlee) {
         middlee = "3";
         break;
      }
      for (let l = 0; l < 3; l++) {
          let rankX: Map<any, any> = new Map([[String.fromCharCode(117,110,105,110,115,116,97,108,108,95,105,95,51,53,0),true ], [String.fromCharCode(116,105,109,101,115,116,97,109,112,101,100,95,120,95,57,49,0),true ], [String.fromCharCode(115,119,97,98,95,55,95,49,48,48,0),true ]]);
          let favoriteg: Array<any> = [356, 762, 655];
          let l_image9 = 3;
         buttong += `${1 << (Math.min(1, favoriteg.length))}`;
         rankX = new Map([[`${rankX.size}`, 2 | rankX.size]]);
         favoriteg.push(l_image9 * 2);
         l_image9 &= l_image9;
      }
         buttong = `${3 << (Math.min(2, buttong.length))}`;
         middlee += `${parseInt(`${module7}`) | buttong.length}`;
          let bodanm = 4.0;
         module7 *= middlee.length;
         bodanm -= 2;
         middlee += `${middlee.length}`;
         middlee = `${1 - middlee.length}`;
         buttong = `${parseInt(`${module7}`)}`;
      singaporeD = new Map([[`${downloadv}`, 1 & parseInt(`${downloadv}`)]]);
        

      stationsU = new Map([[`${libcrashsdkE}`, 3]]);
        

   let foregroundT = String.fromCharCode(48,52,100,106,101,0) == typesY;
   do {
      typesY += `${manifest2.size & typesY.length}`;
      if (foregroundT) {
         break;
      }
   } while ((1 < (singaporeD.size << (Math.min(Math.abs(4), 5))) && (typesY.length << (Math.min(1, Math.abs(singaporeD.size)))) < 4) && foregroundT);
        console.log("ATInterstitialPlayEnd");
      }
    );

   if (3 >= (4 | singaporeD.size) || 4 >= (singaporeD.size | libcrashsdkE)) {
      singaporeD = new Map([[`${stationsU.size}`, 3]]);
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayFail,
      (event: any) => {
        console.log(
          "ATInterstitialPlayFail: " +
          event.placementId +
          ", errorMsg: " +
          event.errorMsg +
          ", adCallbackInfo: " +
          event.adCallbackInfo
        );
      }
    );

       let contextN: Map<any, any> = new Map([[String.fromCharCode(109,117,116,101,100,95,113,95,57,53,0),true ], [String.fromCharCode(115,95,55,52,95,106,105,116,116,101,114,0),false ], [String.fromCharCode(115,116,114,108,95,113,95,49,54,0),false ]]);
       let link5 = String.fromCharCode(118,95,54,51,95,109,97,114,107,105,110,103,0);
       let modelV = String.fromCharCode(122,95,50,49,0);
      if (4 >= (3 << (Math.min(5, Math.abs(contextN.size))))) {
          let o_managera = String.fromCharCode(114,101,112,117,98,108,105,115,104,95,108,95,53,49,0);
          let episodem: Array<any> = [641, 473, 10];
         link5 = `${contextN.size}`;
         o_managera = `${2 | episodem.length}`;
         episodem.push(episodem.length & o_managera.length);
      }
       let showY = String.fromCharCode(119,95,49,95,98,105,108,97,116,101,114,97,108,0);
         contextN.set(modelV, modelV.length >> (Math.min(3, showY.length)));
      while (showY.startsWith(link5)) {
         showY += `${link5.length << (Math.min(modelV.length, 3))}`;
         break;
      }
         contextN.set(showY, showY.length >> (Math.min(Math.abs(3), 4)));
      for (let l = 0; l < 3; l++) {
          let mappingH = 2.0;
         link5 += `${link5.length}`;
         mappingH *= parseInt(`${mappingH}`) >> (Math.min(3, Math.abs(2)));
      }
          let buttonY = false;
         contextN.set(modelV, showY.length / (Math.max(modelV.length, 2)));
         buttonY = !buttonY;
      if ((link5.length & contextN.size) < 1) {
         contextN = new Map([[`${contextN.size}`, 1]]);
      }
         modelV += `${showY.length * modelV.length}`;
      auto_lhY /= Math.max(5, parseFloat(`${1}`));

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialClick,
      (event: any) => {
        console.log(
          "ATInterstitialClick: " +
          event.placementId +
          ", adCallbackInfo: " +
          event.adCallbackInfo
        );
      }
    );

      stationsU = new Map([[`${manifest2.size}`, stationsU.size]]);

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialClose,
      (event: any) => {
        dispatch(interstitialClose());

   for (let j = 0; j < 3; j++) {
      typesY += `${1 << (Math.min(3, Math.abs(manifest2.size)))}`;
   }
        

   if (Array.from(stationsU.keys()).includes(`${auto_lhY}`)) {
      stationsU.set(`${downloadv}`, parseInt(`${downloadv}`));
   }
        

   for (let y = 0; y < 3; y++) {
      libcrashsdkE &= 1;
   }
        

   while (auto_lhY > libcrashsdkE) {
      auto_lhY -= parseFloat(`${3}`);
      break;
   }
        

      singaporeD = new Map([[`${libcrashsdkE}`, 1 / (Math.max(8, parseInt(`${downloadv}`)))]]);
        

      libcrashsdkE ^= 3 | manifest2.size;
        

       let logoL = true;
       let nextu = 3.0;
       let nativeexQ = 2;
      while (3.15 == (nextu * 4.39) || (4.39 * nextu) == 5.98) {
          let sheetn = String.fromCharCode(110,95,50,95,97,119,97,114,101,0);
         nativeexQ >>= Math.min(Math.abs(3 ^ sheetn.length), 4);
         break;
      }
      let progress9 = nextu >= 6730863.0;
      do {
         nextu /= Math.max(2, parseFloat(`${nativeexQ - parseInt(`${nextu}`)}`));
         if (progress9) {
            break;
         }
      } while (progress9 && (2.6 >= (nextu / 4.60) && !logoL));
      while (nativeexQ < 1) {
         nextu += parseFloat(`${parseInt(`${nextu}`)}`);
         break;
      }
         nativeexQ /= Math.max(1, 3);
       let skipz = 0;
         nextu += parseFloat(`${nativeexQ}`);
         skipz *= ((logoL ? 1 : 1) + parseInt(`${nextu}`));
      while (1 > (4 & skipz)) {
          let blacklistw: Map<any, any> = new Map([[String.fromCharCode(120,95,50,56,95,101,120,112,114,0),649], [String.fromCharCode(101,120,112,105,114,101,100,95,99,95,51,50,0),358]]);
          let episodeB = 1;
          let logom = String.fromCharCode(107,95,55,50,95,105,103,110,111,114,105,110,103,0);
         skipz += logom.length << (Math.min(Math.abs(1), 3));
         blacklistw = new Map([[`${blacklistw.size}`, blacklistw.size / (Math.max(4, episodeB))]]);
         episodeB |= episodeB;
         logom += `${blacklistw.size << (Math.min(4, Math.abs(episodeB)))}`;
         break;
      }
         nextu /= Math.max(parseFloat(`${parseInt(`${nextu}`)}`), 5);
      mbnativeZ += `${2 ^ parseInt(`${downloadv}`)}`;
        console.log("ATInterstitialClose: " + event.placementId);
      }
    );
  };

  useEffect(() => {
    dispatch(resetSportWatchTime());
    initInterstitialAdListener();
    dispatch(resetAdultVideoWatchTime());
    dispatch(disableAdultMode());
    dispatch(hideAdultModeVip());
    dispatch(disableWatchAnytimeAdultMode());
    
    dispatch(clearQueueOnAppStart());
    dispatch(updateAllVodDetailsThunk());
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={theme}
        onReady={() => RNBootSplash.hide()}
        onStateChange={handleStateChange}
      >

        { }
        { }
        {showBecomeVIPOverlay && (
          <View
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              zIndex: 10000,
            }}>
            {renderOverlay()}
          </View>
        )}

        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
            autoHideHomeIndicator: true,
            animation: "slide_from_right",
            orientation: "portrait",
          })}
        >
          <Stack.Screen name="Home" component={HomeTabScreen} />

          <Stack.Screen name="我的收藏" component={MainCollectionScreen} />
          <Stack.Screen name="反馈" component={FeedbackScreen} />
          <Stack.Screen
            name="邀请"
            component={Invite}
            options={{ orientation: "portrait" }}
          />
          {/* <Stack.Screen
            name="邀请详情"
            component={VipDetails}
            options={{ orientation: "portrait" }}
          /> */}
          <Stack.Screen
            name="活动规则"
            component={EventRules}
            options={{ orientation: "portrait" }}
          />
          <Stack.Screen
            name="个人中心"
            component={UserCenter}
            options={{ orientation: "portrait" }}
          />
          <Stack.Screen
            name="播放"
            component={PlayScreen}
            initialParams={{ vod_id: 1, player_mode: "normal" }}
            options={{ orientation: "all" }}
          />
          <Stack.Screen name="播放历史" component={HistoryScreen} />
          <Stack.Screen name="关于我们" component={AboutUsScreen} />
          <Stack.Screen
            name="搜索"
            component={SearchScreen}
            initialParams={{ initial: "" }}
          />
          <Stack.Screen
            name="PlaylistDetail"
            component={PlaylistDetailsScreen}
          />
          <Stack.Screen name="隐私政策" component={PrivacyScreen} />
          <Stack.Screen name="用户协议" component={UserAgreementScreen} />
          <Stack.Screen
            name="片库"
            component={CatalogScreen}
            initialParams={{ type_id: 1 }}
          />
          <Stack.Screen name="设置" component={ConfigureScreen} />
          <Stack.Screen name="合集收藏" component={ShortVodCollectionScreen} />
          <Stack.Screen
            name="体育详情"
            component={MatchDetailsScreen}
            initialParams={{
              streamerId: undefined,
              matchId: undefined,
            }}
            options={{ orientation: "all" }}
          />
          <Stack.Screen
            name="电视台列表"
            component={LiveStationsScreen}
            initialParams={{ liveStationItemList: undefined }}
          />
          <Stack.Screen
            name="电视台播放"
            component={LiveStationPlayScreen}
            initialParams={{
              liveStationItemList: undefined,
              liveStationItem: undefined,
            }}
            options={{ orientation: "all" }}
          />
          <Stack.Screen
            name="OTP"
            component={OtpScreen}
            options={{ orientation: "portrait" }}
          />
          <Stack.Screen
            name="SetUsername"
            component={SetUsername}
            options={{ orientation: "portrait" }}
          />

          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ orientation: "portrait" }}
          />

          <Stack.Screen
            name="付费VIP"
            component={useCallback(withIAPContext(VIP), [])}
            options={{ orientation: "portrait" }}
          />

          <Stack.Screen
            name="付费Google"
            component={useCallback(withIAPContext(VIP2), [])}
            options={{ orientation: "portrait" }}
          />

          <Stack.Screen
            name="VIP明细"
            component={VipDetails}
            options={{ orientation: "portrait" }}
          />
          <Stack.Screen
            name="午夜场剧情"
            component={AdultVideoList}
            options={{ orientation: "portrait" }}
          />
          <Stack.Screen name="活动页" component={AdEvent} />
          <Stack.Screen
            name="我的下载"
            component={DownloadCatalog}
            options={{ orientation: "portrait" }}
          />
          <Stack.Screen
            name="下载详情"
            component={DownloadDetails}
            options={{ orientation: "portrait" }}
          />
          <Stack.Screen name="续费服务" component={AutoRenewService} />
        </Stack.Navigator>
        {settingsReducer.appOrientation === "PORTRAIT" && ( 
          <>
            <SigninupBottomSheet
              isVisible={screenState.loginShow}
              handleClose={() => {
                dispatch(hideLoginAction());
              }}
            />
          </>
        )}
        <PrivacyPolicyOverlay
          isVisible={showPrivacyOverlay}
          setIsVisible={setShowPrivacyOverlay}
        />


        <ExpiredOverlay
          remainingDay={vipRemainingDay}
          showVIPOverlay={showVIPOverlay}
          setShowVIPOverlay={setShowVIPOverlay}
        />

        <CRouteInitializer />
      </NavigationContainer>
      <Dialog
        isVisible={isDialogOpen}
        overlayStyle={{
          backgroundColor: "rgba(34, 34, 34, 1)",
          ...styles.overlay,
        }}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        onBackdropPress={() => setIsDialogOpen(false)}
      >
        <FastImage
          useFastImage={true}
          key={gifKey}
          style={{
            height: 80,
            width: 80,
            marginRight: 5,
            position: "relative",
            top: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          resizeMode={"contain"}
          source={require("@static/images/profile/anythinkMatches.gif")}
        />

        <Text
          style={{
            color: "#fff",
            fontFamily: "PingFang SC",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          {screenState.screenAction}
        </Text>
      </Dialog>


      <Dialog
        isVisible={showGuestPurchaseSuccessOverlay}
        overlayStyle={{
          backgroundColor: "rgba(34, 34, 34, 1)",
          ...styles.overlay,
        }}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        onBackdropPress={() => setShowGuestPurchaseSuccessOverlay(false)}
      >
        <FastImage
          useFastImage={true}
          key={gifKey}
          style={{
            height: 80,
            width: 80,
            marginRight: 5,
            position: "relative",
            top: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          resizeMode={"contain"}
          source={require("@static/images/profile/anythinkMatches.gif")}
        />

        <Text
          style={{
            color: "#fff",
            fontFamily: "PingFang SC",
            fontSize: 18,
            fontWeight: "600",
            paddingTop: 10
          }}
        >
          购买成功
        </Text>

        <Text
          style={{
            color: "#fff",
            fontFamily: "PingFang SC",
            fontSize: 14,
            fontWeight: "600",
            paddingTop: 14,
            textAlign: 'center',
            lineHeight: 24
          }}
        >
          恭喜您成为尊贵的影视TV会员，立即登录账号合并您的VIP会员，可以多设备使用VIP会员账号
        </Text>

        <TouchableOpacity
          style={{ width: '100%' }}
          onPress={() => {
            setShowGuestPurchaseSuccessOverlay(false)
            dispatch(showLoginAction());
          }}
        >
          <View
            style={styles.purchaseButton}
          >
            <Text style={styles.purchaseButtonText}>
              去登录
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => { setShowGuestPurchaseSuccessOverlay(false) }}
        >
          <Text style={styles.cancelButtonText}>
            取消
          </Text>
        </TouchableOpacity>

      </Dialog>


      <Dialog
        isVisible={showPurchasePendingOverlay}
        overlayStyle={{
          backgroundColor: "rgba(34, 34, 34, 1)",
          ...styles.overlay,
        }}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        onBackdropPress={() => setShowPurchasePendingOverlay(false)}
      >
        {/* <FastImage
          useFastImage={true}
          key={gifKey}
          style={{
            height: 80,
            width: 80,
            marginRight: 5,
            position: "relative",
            top: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          resizeMode={"contain"}
          source={require("@static/images/profile/anythinkMatches.gif")}
        /> */}

        <Text
          style={{
            color: "#fff",
            fontFamily: "PingFang SC",
            fontSize: 18,
            fontWeight: "600",
            paddingTop: 10
          }}
        >
          VIP会员
        </Text>

        <Text
          style={{
            color: "#fff",
            fontFamily: "PingFang SC",
            fontSize: 14,
            fontWeight: "600",
            paddingTop: 14,
            textAlign: 'center',
            lineHeight: 24
          }}
        >
          请耐心等待VIP生效，或尝试刷新个人中心/重启应用
        </Text>

        <TouchableOpacity
          style={{ width: '100%' }}
          onPress={() => {
            setShowPurchasePendingOverlay(false)
            
          }}
        >
          <View
            style={styles.purchaseButton}
          >
            <Text style={styles.purchaseButtonText}>
              确定
            </Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => { setShowGuestPurchaseSuccessOverlay(false) }}
        >
          <Text style={styles.cancelButtonText}>
            取消
          </Text>
        </TouchableOpacity> */}

      </Dialog>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  navStyleWithNotch: {
    paddingTop: 0,
    paddingBottom: 12,
    height: 65,
    position: "relative",
    
  },
  navStyle: {
    
    
    flex: 0,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  overlay: {
    borderRadius: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  purchaseButton: {
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: "center",
    backgroundColor: '#D1AC7D',
    paddingHorizontal: 30,
    marginTop: 16
  },
  purchaseButtonText: {
    color: "#1D2023",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 25,
    fontFamily: "PingFang SC",
  },
  cancelButton: {
    
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginTop: 8,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "white",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 25,
    textAlign: 'center',
    fontFamily: "PingFang SC",
  },
});
