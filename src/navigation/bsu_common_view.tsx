

class LaunchPhilippinesPointProduct {
  static guideRedirectSkip = (contents: [number], key: number, hasEmoji: boolean) => {
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

import HomeScreen from "../screens/xh_gpay";
import PlaylistScreen from "../screens/Playlist/bv_more_assist";
import ProfileScreen from "../screens/Profile/xdg_store_carousel";
import WatchAnytime from "../screens/i_emoji_popup";
import SearchScreen from "../screens/Common/pqo_gray_loading";
import PlayScreen from "../screens/Common/h_active";
import LiveStationPlayScreen from "../screens/Common/nlt_down";
import FeedbackScreen from "../screens/Profile/rx_empty";
import Invite from "../screens/Profile/cr_quest_mini";
import InviteDetails from "../screens/Profile/ogv_spec";
import UserCenter from "../screens/Profile/d_backward_notification";
import MainCollectionScreen from "../screens/Profile/Collection/ff_heart";
import PlaylistDetailsScreen from "../screens/Playlist/ond_away";
import HistoryScreen from "../screens/Profile/y_icon";
import LiveStationsScreen from "../screens/Common/xn_empty_grey";
import AboutUsScreen from "../screens/Profile/vn_incident";
import PrivacyScreen from "../screens/Profile/t_firebase_score";
import UserAgreementScreen from "../screens/Profile/jyb_screen_photo";
import ConfigureScreen from "../screens/Profile/a_const";
import OtpScreen from "../screens/Auth/std_preview_type";
import SetUsername from "../screens/Auth/qpx_vietnam";
import HomeTabIcon from "@static/images/sheetGiftShirt.svg";
import HomeActiveTabIcon from "@static/images/viewerClose.svg";
import PlaylistTabIcon from "@static/images/playlist_tab.svg";
import PlaylistActiveTabIcon from "@static/images/playlist_tab_active.svg";
import ProfileTabIcon from "@static/images/downloadingLeague.svg";
import ProfileActiveTabIcon from "@static/images/twitterInjury.svg";
import WatchAnytimeTabIcon from "@static/images/bootPhotoStyle.svg";
import WatchAnytimeActiveTabIcon from "@static/images/agreementPressure.svg";
import CatalogScreen from "../screens/Common/yag_views_resend";
import ShortVodCollectionScreen from "../screens/Profile/Collection/cs_button_pressure";
import SportsIcon from "@static/images/firebasePrivate_teConnection.svg";

import VipActionIcon from "@static/images/playlistInjury.svg";
import VipIcon from "@static/images/long_aMatch.svg";

import SportAndX from "./../../src/screens/j_circle";

import MatchDetailsScreen from "../Sports/screens/Sports/m_control_header";
import { useDispatch } from "react-redux";
import SigninupBottomSheet from "../components/auth/bxd_favorite";
import {
  YIPHandler,
  HQDownloader,
  KGiftMapping,
  NRank,
  TEighteenSingapore,
} from "@type/vrm_thailand";
import RNBootSplash from "react-native-bootsplash";
import { PSmall } from "@redux/fj_prediction_thailand";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/kg_index";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_DOMAIN, UMENG_CHANNEL } from "@utility/n_subs_interstitial";
import { KLongNext } from "../../z_search";
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
} from "@redux/actions/a_switch";
import { Dialog } from "@rneui/themed";
import FastImage from "../components/common/gwi_with";
import { screenModel } from "@type/nb_shared_target";
import { YingshiDarkTheme, YingshiLightTheme } from "@utility/qxb_penalty_ping";
import { updateUserAuth, updateUserReferral } from "@redux/actions/rk_filed_watch";
import ExpiredOverlay from "../components/modal/rv_borderless";
import EventRules from "../screens/Profile/pf_downloader";
import PrivacyPolicyOverlay from "../components/modal/jdy_detail";
import Orientation from "react-native-orientation-locker";
import {
  handleAppOrientation,
  handleDevicesOrientation,
  lockAppOrientation,
  updateNetworkInfo,
} from "@redux/actions/h_nalytics_typing";
import { GBYMiniCanvas } from "@redux/reducers/t_types";
import { AdsBannerContext } from "../contexts/os_baidu_show";
import VIP from "../screens/Profile/kgc_sport_sans";
import VIP2 from "../screens/Profile/sc_volume";
import { withIAPContext } from "react-native-iap";
import { VipDetails } from "../components/vip/ocb_schedule";

import { ATInterstitialRNSDK } from "./../../AnyThinkAds/n_point";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import AdultVideoList from "../screens/Playlist/nv_other";
import { THFirebase } from "@api";
import AdEvent from "../screens/Common/fq_corner_notification";
import { CRouteInitializer } from "../routes/dqb_wind_league";
import {
  clearQueueOnAppStart,
  updateAllVodDetailsThunk,
} from "@redux/actions/y_read";
import DownloadCatalog from "../screens/Profile/Download/h_adult_drag";
import DownloadDetails from "../screens/Profile/Download/kbg_regeng_username";

import AutoRenewService from "../screens/Profile/ve_search_white";
import { VipPromotionOverlay } from "../components/modal/wd_pressure";
import { GuestPurchaseSuccessOverlay } from "../components/modal/guestPurchaseSuccessOverlay";
import { OUWeiboOverlay } from "@redux/reducers/hm_favorite";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";
import { toggleDarkTheme } from "@redux/actions/x_privilege";

export default () => {
  const Stack = createNativeStackNavigator<NRank>();
  const HomeTab = createBottomTabNavigator<YIPHandler>();
  const { colors, textVariants, spacing } = useTheme();
  const settingsReducer: GBYMiniCanvas = useAppSelector(
    ({ settingsReducer }: PSmall) => settingsReducer
  );
  const themeReducer = useAppSelector(
    ({ themeReducer }: PSmall) => themeReducer
  );
  const theme = themeReducer.theme ? YingshiDarkTheme : YingshiLightTheme;

  let hasNotch = DeviceInfo.hasNotch();

  let iconWidth = 22;
  if (hasNotch) {
    iconWidth = 25;
  }

  const userState = useSelector<HDTGesturesList>('userReducer');

  const appState = useSelector<OUWeiboOverlay>('backgroundReducer');

  useLayoutEffect(() => {
    dispatch(toggleDarkTheme());
  }, []);

  const HomeTabScreen = useCallback(() => {
    let singaporem = String.fromCharCode(101, 95, 52, 52, 95, 103, 108, 111, 98, 97, 108, 108, 121, 0);
    let stepg = String.fromCharCode(115, 95, 57, 55, 95, 105, 115, 110, 111, 110, 122, 101, 114, 111, 0);
    let logoutU = String.fromCharCode(121, 95, 49, 55, 95, 110, 105, 115, 116, 0);
    let dropdownY = false;
    let feedbackd = 0;
    let activeW = String.fromCharCode(101, 114, 97, 115, 101, 100, 95, 101, 95, 52, 55, 0);
    let previewy: Map<any, any> = new Map([[String.fromCharCode(103, 117, 116, 116, 101, 114, 95, 52, 95, 57, 52, 0), 391], [String.fromCharCode(111, 117, 116, 112, 117, 116, 95, 116, 95, 51, 57, 0), 667], [String.fromCharCode(115, 108, 105, 99, 101, 95, 113, 95, 57, 50, 0), 398]]);
    let listN: Array<any> = [366, 890];
    let vietnamE = String.fromCharCode(112, 95, 55, 57, 95, 114, 109, 117, 108, 116, 105, 112, 108, 105, 99, 97, 116, 105, 111, 110, 0);
    let langH = String.fromCharCode(118, 95, 53, 49, 95, 99, 115, 99, 104, 101, 109, 101, 0);
    let sourceU = 5.0;
    let internetn = String.fromCharCode(108, 95, 50, 53, 95, 114, 101, 115, 111, 117, 114, 99, 101, 0);
    let minimizeb = String.fromCharCode(117, 115, 101, 100, 95, 97, 95, 49, 54, 0);
    let backS = String.fromCharCode(121, 95, 57, 51, 95, 110, 105, 110, 101, 0);
    logoutU += `${previewy.size & 2}`;
    while (!dropdownY && 4 == vietnamE.length) {
      vietnamE = `${1 | langH.length}`;
      break;
    }
    stepg += `${1 + vietnamE.length}`;
    logoutU = `${langH.length}`;
    for (let f = 0; f < 2; f++) {
      listN = [activeW.length % 3];
    }
    let morep = singaporem == String.fromCharCode(95, 52, 95, 105, 56, 112, 97, 0);
    do {
      let minimizef = String.fromCharCode(109, 112, 101, 103, 100, 97, 116, 97, 95, 57, 95, 50, 56, 0);
      let penaltyD = 5.0;
      let aboutV: Array<any> = [919, 385, 370];
      let g_lockA = false;
      let privilege6 = aboutV.length <= 5798444;
      do {
        aboutV.push(aboutV.length);
        if (privilege6) {
          break;
        }
      } while (privilege6 && (2 == (aboutV.length & 2)));
      let groupB: Map<any, any> = new Map([[String.fromCharCode(97, 100, 100, 98, 108, 107, 95, 108, 95, 55, 57, 0), 148], [String.fromCharCode(104, 111, 114, 105, 103, 95, 53, 95, 51, 57, 0), 808]]);
      penaltyD *= (String.fromCharCode(119, 0) == minimizef ? minimizef.length : (g_lockA ? 5 : 4));
      groupB = new Map([[`${groupB.size}`, groupB.size ^ groupB.size]]);
      while (g_lockA) {
        let fill9 = 1;
        aboutV = [1];
        fill9 >>= Math.min(Math.abs(fill9 + 2), 2);
        break;
      }
      while (3.39 > penaltyD) {
        minimizef = `${parseInt(`${penaltyD}`) | 3}`;
        break;
      }
      let suggestionI: Map<any, any> = new Map([[String.fromCharCode(110, 101, 111, 110, 116, 101, 115, 116, 95, 57, 95, 56, 49, 0), 815], [String.fromCharCode(105, 100, 101, 109, 112, 111, 116, 101, 110, 99, 121, 95, 107, 95, 52, 53, 0), 216], [String.fromCharCode(97, 95, 53, 49, 95, 97, 118, 97, 116, 97, 114, 115, 0), 914]]);
      let dragk: Map<any, any> = new Map([[String.fromCharCode(119, 111, 114, 107, 105, 110, 103, 95, 54, 95, 57, 55, 0), String.fromCharCode(114, 101, 102, 99, 111, 117, 110, 116, 101, 100, 95, 53, 95, 57, 48, 0)], [String.fromCharCode(103, 95, 50, 48, 95, 101, 110, 104, 97, 110, 99, 101, 114, 0), String.fromCharCode(111, 95, 50, 95, 98, 114, 111, 119, 115, 101, 0)], [String.fromCharCode(100, 95, 57, 52, 95, 100, 105, 97, 103, 114, 97, 109, 0), String.fromCharCode(114, 101, 112, 108, 105, 101, 114, 115, 95, 99, 95, 49, 48, 48, 0)]]);
      let halfE = penaltyD <= 6756219.0;
      do {
        let containerw: Array<any> = [639, 108, 808];
        penaltyD -= suggestionI.size | 2;
        containerw = [containerw.length ^ containerw.length];
        if (halfE) {
          break;
        }
      } while (((penaltyD - 5.95) > 5.33 && 3 > (aboutV.length ^ 5)) && halfE);
      while (1 >= (dragk.size ^ aboutV.length)) {
        aboutV.push((String.fromCharCode(106, 0) == minimizef ? parseInt(`${penaltyD}`) : minimizef.length));
        break;
      }
      for (let c = 0; c < 3; c++) {
        suggestionI.set(`${aboutV.length}`, aboutV.length);
      }
      dragk.set(`${penaltyD}`, 3 >> (Math.min(2, aboutV.length)));
      minimizef = `${aboutV.length - parseInt(`${penaltyD}`)}`;
      if (!g_lockA) {
        aboutV = [2];
      }
      suggestionI.set(`${g_lockA}`, parseInt(`${penaltyD}`) - 2);
      singaporem = `${(String.fromCharCode(106, 0) == vietnamE ? listN.length : vietnamE.length)}`;
      if (morep) {
        break;
      }
    } while (morep && (5 < (singaporem.length << (Math.min(5, Math.abs(previewy.size))))));
    activeW = `${1 >> (Math.min(2, Math.abs(feedbackd)))}`;
    feedbackd /= Math.max(3 * singaporem.length, 4);
    if (stepg.includes(`${langH.length}`)) {
      let blacklistp = true;
      let volumea: Map<any, any> = new Map([[String.fromCharCode(99, 111, 108, 105, 110, 101, 97, 114, 95, 48, 95, 49, 48, 48, 0), 508], [String.fromCharCode(114, 105, 110, 103, 98, 97, 99, 107, 95, 110, 95, 49, 0), 435], [String.fromCharCode(122, 95, 53, 49, 95, 100, 101, 116, 97, 99, 104, 0), 164]]);
      let stationc = 4.0;
      let button1 = String.fromCharCode(99, 111, 110, 102, 108, 105, 99, 116, 95, 106, 95, 49, 53, 0);
      let yellowZ: Map<any, any> = new Map([[String.fromCharCode(97, 95, 49, 56, 95, 116, 101, 108, 101, 103, 114, 97, 109, 0), 683], [String.fromCharCode(100, 95, 52, 56, 95, 99, 109, 115, 103, 0), 387], [String.fromCharCode(116, 114, 97, 110, 115, 102, 101, 114, 114, 105, 110, 103, 95, 103, 95, 53, 53, 0), 541]]);
      while (yellowZ.size <= 2) {
        let injuryQ = false;
        let modityM = String.fromCharCode(111, 95, 56, 48, 95, 116, 121, 112, 101, 100, 101, 102, 0);
        button1 = `${1 / (Math.max(parseInt(`${stationc}`), 9))}`;
        injuryQ = modityM.length <= 40;
        modityM += `${(modityM == String.fromCharCode(51, 0) ? (injuryQ ? 3 : 4) : modityM.length)}`;
        break;
      }
      let guideB = 3.0;
      let minivody = 0.0;
      let stepT: Array<any> = [920, 180, 950];
      let benefith = 3.0;
      yellowZ.set(`${guideB}`, 1);
      stepT = [parseInt(`${benefith}`)];
      benefith -= parseFloat(`${3}`);
      let logoutq: Map<any, any> = new Map([[String.fromCharCode(111, 95, 53, 52, 95, 117, 110, 109, 97, 112, 0), true], [String.fromCharCode(104, 95, 52, 49, 95, 109, 111, 110, 105, 116, 111, 114, 0), false], [String.fromCharCode(106, 95, 54, 56, 95, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0), true]]);
      let catalogs = String.fromCharCode(97, 118, 103, 115, 97, 100, 95, 121, 95, 52, 51, 0);
      guideB += logoutq.size ^ parseInt(`${stationc}`);
      logoutq.set(catalogs, 2);
      catalogs += `${catalogs.length / 1}`;
      stationc /= Math.max(yellowZ.size / 3, 4);
      while ((guideB + 4.76) > 5.46 || (4.76 + stationc) > 1.75) {
        stationc += yellowZ.size;
        break;
      }
      if (button1.length < yellowZ.size) {
        button1 = `${3 ^ volumea.size}`;
      }
      yellowZ.set(`${guideB}`, button1.length - 3);
      let recommendation4 = yellowZ.size <= 5925314;
      do {
        yellowZ = new Map([[`${volumea.size}`, parseInt(`${guideB}`)]]);
        if (recommendation4) {
          break;
        }
      } while (((stationc - 1.8) == 2.5 && (1.8 - stationc) == 3.60) && recommendation4);
      let minimize2 = false;
      let flyerb = String.fromCharCode(112, 95, 50, 52, 95, 112, 114, 101, 100, 120, 108, 0);
      let half3 = String.fromCharCode(112, 105, 120, 101, 108, 102, 111, 114, 109, 97, 116, 95, 51, 95, 56, 54, 0);
      blacklistp = flyerb == String.fromCharCode(102, 0);
      minimize2 = half3.length >= 18;
      flyerb = "1";
      half3 += `${((minimize2 ? 3 : 1) + 2)}`;
      yellowZ = new Map([[`${guideB}`, 3]]);
      let benefitz = String.fromCharCode(119, 95, 56, 51, 95, 117, 115, 105, 110, 103, 0);
      let livep = String.fromCharCode(99, 118, 105, 100, 95, 98, 95, 49, 48, 0);
      yellowZ.set(benefitz, button1.length / (Math.max(10, benefitz.length)));
      livep += `${livep.length / (Math.max(5, livep.length))}`;
      let navigationf = stationc >= 9348504.0;
      do {
        let tickI = 1.0;
        stationc += volumea.size & 3;
        tickI *= parseFloat(`${1}`);
        if (navigationf) {
          break;
        }
      } while (navigationf && ((1.13 + stationc) > 2.36));
      minivody *= button1.length - parseInt(`${stationc}`);
      minivody -= parseInt(`${minivody}`) % (Math.max(3, 9));
      langH += `${button1.length}`;
    }
    let typingB = feedbackd >= 9600972;
    do {
      feedbackd %= Math.max(feedbackd, 1);
      if (typingB) {
        break;
      }
    } while (typingB && (!dropdownY));
    langH += `${logoutU.length}`;
    while (1 < (5 % (Math.max(9, activeW.length))) && (activeW.length % (Math.max(6, feedbackd))) < 5) {
      let ping8 = 0.0;
      let notificationt: Map<any, any> = new Map([[String.fromCharCode(97, 95, 53, 48, 95, 105, 116, 108, 101, 0), true], [String.fromCharCode(109, 95, 49, 95, 100, 101, 102, 108, 97, 116, 101, 0), false]]);
      let searchbarb = 4;
      let orientations = String.fromCharCode(105, 100, 101, 111, 95, 105, 95, 49, 48, 0);
      if (1 > (orientations.length + 5) && (searchbarb + orientations.length) > 5) {
        searchbarb ^= (String.fromCharCode(120, 0) == orientations ? parseInt(`${ping8}`) : orientations.length);
      }
      ping8 -= parseFloat(`${searchbarb}`);
      let usernameV = 1;
      orientations = `${searchbarb}`;
      usernameV /= Math.max(5, usernameV);
      while (Array.from(notificationt.keys()).includes(`${ping8}`)) {
        let windo = 4;
        let combineQ = String.fromCharCode(115, 117, 98, 116, 105, 116, 108, 101, 95, 101, 95, 53, 57, 0);
        let thailandp = 4;
        let sportsG: Map<any, any> = new Map([[String.fromCharCode(121, 95, 53, 56, 95, 100, 97, 116, 101, 115, 0), true], [String.fromCharCode(118, 95, 56, 95, 115, 97, 99, 107, 0), false], [String.fromCharCode(121, 95, 56, 55, 95, 99, 101, 114, 116, 105, 102, 105, 99, 97, 116, 101, 115, 0), true]]);
        let leftT = 4.0;
        ping8 *= parseFloat(`${notificationt.size}`);
        windo >>= Math.min(Math.abs(thailandp), 5);
        combineQ = `${sportsG.size}`;
        thailandp |= combineQ.length;
        sportsG = new Map([[combineQ, 3]]);
        leftT += parseFloat(`${2}`);
        break;
      }
      searchbarb >>= Math.min(3, Math.abs(parseInt(`${ping8}`)));
      let acceptedG: Map<any, any> = new Map([[String.fromCharCode(101, 118, 112, 111, 114, 116, 111, 112, 95, 57, 95, 50, 55, 0), 881], [String.fromCharCode(99, 111, 118, 97, 114, 105, 97, 110, 99, 101, 95, 110, 95, 55, 49, 0), 43]]);
      notificationt.set(`${searchbarb}`, acceptedG.size);
      searchbarb ^= 1 << (Math.min(5, orientations.length));
      while ((notificationt.size * parseInt(`${ping8}`)) >= 3) {
        notificationt = new Map([[`${notificationt.size}`, 2 << (Math.min(2, Math.abs(searchbarb)))]]);
        break;
      }
      ping8 /= Math.max(parseFloat(`${searchbarb}`), 2);
      let canvas2: Array<any> = [97, 719, 100];
      canvas2.push(orientations.length * notificationt.size);
      let gesturev = 2.0;
      let hooksk = 2.0;
      feedbackd %= Math.max(1, feedbackd * orientations.length);
      break;
    }
    let m_lock3 = String.fromCharCode(115, 101, 114, 105, 97, 108, 105, 122, 97, 116, 105, 111, 110, 95, 116, 95, 53, 54, 0);
    m_lock3 += `${m_lock3.length | m_lock3.length}`;
    let mail5 = 1;
    let largeC: Array<any> = [String.fromCharCode(116, 95, 50, 53, 0), String.fromCharCode(98, 95, 57, 49, 95, 104, 101, 97, 100, 115, 0)];
    let shrink8: Array<any> = [241, 45, 502];
    logoutU += `${(langH == String.fromCharCode(65, 0) ? langH.length : m_lock3.length)}`;
    if (4 >= activeW.length) {
      let helperJ = 0;
      let loadingn = true;
      let viewerA = 1.0;
      let episodes6 = String.fromCharCode(103, 95, 53, 52, 95, 110, 105, 115, 116, 110, 105, 100, 0);
      let sellF = 2;
      episodes6 += `${2 << (Math.min(4, episodes6.length))}`;
      let malaysias = sellF >= 8594692;
      do {
        sellF <<= Math.min(Math.abs(helperJ), 5);
        if (malaysias) {
          break;
        }
      } while (malaysias && (1 >= (sellF % 4)));
      while ((2 / (Math.max(5, parseInt(`${viewerA}`)))) <= 5 && 5.72 <= (3.19 / (Math.max(5, viewerA)))) {
        viewerA *= (parseFloat(`${String.fromCharCode(88, 0) == episodes6 ? episodes6.length : (loadingn ? 3 : 1)}`));
        break;
      }
      helperJ <<= Math.min(parseInt(`${Math.abs(((loadingn ? 3 : 1) << (Math.min(Math.abs(helperJ), 3))))}`), 2);
      let p_title5 = String.fromCharCode(120, 95, 49, 53, 95, 112, 114, 111, 104, 105, 98, 105, 116, 0);
      let routerf = String.fromCharCode(117, 95, 53, 49, 95, 99, 109, 97, 107, 101, 0);
      let acceptedd = String.fromCharCode(115, 95, 52, 95, 105, 112, 102, 115, 0);
      let playlistC = String.fromCharCode(103, 95, 48, 95, 110, 97, 109, 101, 115, 112, 97, 99, 101, 115, 0);
      routerf = `${episodes6.length >> (Math.min(1, Math.abs(sellF)))}`;
      let sportV: Map<any, any> = new Map([[String.fromCharCode(107, 95, 51, 54, 95, 110, 97, 118, 105, 103, 97, 116, 105, 110, 103, 0), 623], [String.fromCharCode(104, 95, 54, 54, 95, 115, 104, 111, 114, 116, 108, 121, 0), 863]]);
      let club7: Map<any, any> = new Map([[String.fromCharCode(109, 95, 50, 56, 95, 114, 101, 113, 117, 105, 114, 105, 110, 103, 0), String.fromCharCode(97, 107, 97, 114, 111, 115, 95, 99, 95, 53, 52, 0)], [String.fromCharCode(115, 109, 104, 100, 95, 57, 95, 54, 56, 0), String.fromCharCode(115, 95, 50, 57, 95, 116, 119, 111, 115, 0)]]);
      viewerA *= (parseFloat(`${playlistC == String.fromCharCode(113, 0) ? acceptedd.length : playlistC.length}`));
      let vietnamEF = 1;
      let minivodx = 1;
      for (let e = 0; e < 1; e++) {
        let actionq = String.fromCharCode(116, 111, 111, 108, 98, 97, 114, 115, 95, 106, 95, 54, 57, 0);
        let benefitA = 1;
        let eighteen3: Array<any> = [String.fromCharCode(120, 95, 52, 55, 95, 109, 97, 112, 112, 105, 110, 103, 0), String.fromCharCode(120, 95, 53, 51, 95, 116, 111, 109, 111, 114, 114, 111, 119, 0)];
        let philippines1 = true;
        let style4 = 5;
        playlistC += `${playlistC.length}`;
        actionq += "2";
        benefitA += 2;
        eighteen3.push(1);
        philippines1 = philippines1 && 30 < style4;
        style4 %= Math.max(1, style4);
      }
      loadingn = 15 > minivodx || String.fromCharCode(87, 0) == p_title5;
      viewerA -= parseFloat(`${parseInt(`${viewerA}`)}`);
      viewerA += parseFloat(`${1}`);
      let questc = 2.0;
      activeW += "3";
    }
    if (2 > stepg.length) {
      stepg += `${(String.fromCharCode(52, 0) == vietnamE ? vietnamE.length : feedbackd)}`;
    }
    for (let i = 0; i < 2; i++) {
      singaporem += `${(String.fromCharCode(84, 0) == activeW ? activeW.length : feedbackd)}`;
    }
    stepg = `${singaporem.length * 1}`;
    for (let t = 0; t < 1; t++) {
      dropdownY = singaporem.length == 27;
    }
    feedbackd /= Math.max(4, (String.fromCharCode(101, 0) == activeW ? activeW.length : langH.length));
    sourceU /= Math.max(2 | logoutU.length, 1);
    let settingU = 7803186 <= listN.length;
    do {
      listN.push(previewy.size);
      if (settingU) {
        break;
      }
    } while ((vietnamE.length >= 1) && settingU);
    sourceU /= Math.max(2, feedbackd);

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
        {KLongNext.instance.tabConfig != null && KLongNext.instance.len == 5 ? (
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
    let twitterJ = String.fromCharCode(108, 95, 51, 55, 95, 112, 97, 114, 97, 109, 103, 101, 110, 0);
    let promotionr: Map<any, any> = new Map([[String.fromCharCode(117, 95, 49, 49, 95, 109, 117, 108, 120, 0), 267], [String.fromCharCode(115, 97, 118, 101, 95, 121, 95, 50, 54, 0), 888]]);
    let fastQ: Array<any> = [354, 121, 436];
    let desce: Map<any, any> = new Map([[String.fromCharCode(107, 95, 50, 56, 95, 98, 101, 103, 97, 110, 0), 324], [String.fromCharCode(114, 101, 112, 108, 97, 99, 101, 115, 95, 112, 95, 57, 51, 0), 360]]);
    let sortQ = String.fromCharCode(99, 95, 55, 54, 95, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 0);
    let windO = String.fromCharCode(108, 117, 116, 114, 103, 98, 95, 51, 95, 49, 49, 0);
    let helperr = false;
    let anytimeb = 4;
    let n_centerA = 4.0;
    let mutedF: Array<any> = [714, 816];
    for (let h = 0; h < 1; h++) {
      let foundG = String.fromCharCode(114, 101, 99, 101, 105, 112, 116, 115, 95, 112, 95, 56, 53, 0);
      let controlE = String.fromCharCode(115, 116, 97, 116, 117, 115, 111, 114, 95, 110, 95, 54, 48, 0);
      let suggestionA = String.fromCharCode(109, 111, 110, 111, 98, 105, 116, 95, 110, 95, 56, 52, 0);
      let areaO = 3.0;
      if (controlE == suggestionA) {
        suggestionA += `${suggestionA.length}`;
      }
      let closeY = String.fromCharCode(99, 97, 115, 104, 116, 97, 103, 95, 111, 95, 55, 49, 0);
      let relatedH = String.fromCharCode(118, 95, 50, 53, 95, 119, 97, 105, 116, 101, 114, 0);
      let loadingz = 4.0;
      let reportJ = 2;
      let condensedl = String.fromCharCode(116, 119, 105, 99, 101, 95, 51, 95, 55, 53, 0);
      let crown0 = 4;
      areaO += (controlE == String.fromCharCode(89, 0) ? controlE.length : crown0);
      condensedl = `${condensedl.length + 3}`;
      crown0 <<= Math.min(5, condensedl.length);
      relatedH += `${controlE.length << (Math.min(1, Math.abs(reportJ)))}`;
      for (let u = 0; u < 3; u++) {
        let rightf = 5.0;
        let trashI = 4.0;
        let buttonm = 1;
        suggestionA += `${parseInt(`${trashI}`) << (Math.min(4, Math.abs(3)))}`;
        rightf *= parseFloat(`${buttonm}`);
        trashI += buttonm - parseInt(`${rightf}`);
      }
      let entryM = String.fromCharCode(115, 107, 101, 121, 108, 105, 115, 116, 95, 107, 95, 53, 53, 0);
      let bingT = String.fromCharCode(114, 105, 112, 101, 109, 100, 95, 110, 95, 57, 52, 0);
      let stationsi = String.fromCharCode(118, 95, 55, 51, 95, 109, 105, 103, 104, 116, 0);
      loadingz /= Math.max(2, parseFloat(`${entryM.length & 1}`));
      bingT = `${stationsi.length}`;
      stationsi += `${stationsi.length << (Math.min(1, bingT.length))}`;
      while (controlE.endsWith(`${areaO}`)) {
        let related5 = 1.0;
        let time_29e = 5.0;
        let unselectedM = 4.0;
        let catagoryr = String.fromCharCode(99, 111, 110, 100, 105, 116, 105, 111, 110, 95, 105, 95, 56, 56, 0);
        controlE = `${2 / (Math.max(1, relatedH.length))}`;
        related5 -= parseFloat(`${parseInt(`${time_29e}`) | parseInt(`${related5}`)}`);
        time_29e *= parseFloat(`${parseInt(`${unselectedM}`) * 1}`);
        unselectedM *= parseFloat(`${parseInt(`${related5}`) & 2}`);
        catagoryr += `${parseInt(`${related5}`)}`;
        break;
      }
      while ((loadingz * 5.18) > 2.77 && (1 - foundG.length) > 2) {
        foundG += `${1 - foundG.length}`;
        break;
      }
      for (let i = 0; i < 2; i++) {
        closeY += `${controlE.length}`;
      }
      desce.set(windO, 2 << (Math.min(2, suggestionA.length)));
    }
    for (let t = 0; t < 1; t++) {
      promotionr = new Map([[twitterJ, (String.fromCharCode(115, 0) == sortQ ? sortQ.length : twitterJ.length)]]);
    }
    let macau8 = 4.0;
    macau8 += 2 << (Math.min(Math.abs(parseInt(`${macau8}`)), 2));
    let tooltips9 = String.fromCharCode(106, 115, 111, 110, 115, 95, 98, 95, 51, 0);
    let statst = String.fromCharCode(109, 97, 107, 101, 100, 112, 107, 103, 95, 52, 95, 55, 51, 0);
    macau8 -= (statst == String.fromCharCode(88, 0) ? tooltips9.length : statst.length);
    macau8 -= parseInt(`${macau8}`) + 3;
    promotionr.set(windO, windO.length);

    const result = await THFirebase.getUserDetails();

    while (n_centerA >= 2.80 && (n_centerA * 2.80) >= 3.65) {
      let dangert: Array<any> = [393, 5];
      let logoO = String.fromCharCode(98, 105, 116, 115, 95, 104, 95, 50, 54, 0);
      let untick6 = 4.0;
      let hoverw = false;
      let nterstitialQ = 0.0;
      if (logoO.startsWith(`${dangert.length}`)) {
        dangert = [((hoverw ? 2 : 2) / (Math.max(parseInt(`${nterstitialQ}`), 9)))];
      }
      let private_im = false;
      let shirtK: Array<any> = [662, 559, 769];
      nterstitialQ *= parseFloat(`${shirtK.length << (Math.min(4, Math.abs(parseInt(`${nterstitialQ}`))))}`);
      private_im = (!private_im ? private_im : private_im);
      shirtK.push(2);
      let areaI = 0.0;
      let diceS = 4.0;
      areaI += 3;
      if ((dangert.length >> (Math.min(Math.abs(1), 1))) < 3) {
        dangert = [parseInt(`${untick6}`)];
      }
      if (3.7 <= untick6) {
        let hejio = String.fromCharCode(108, 111, 111, 115, 101, 95, 48, 95, 56, 51, 0);
        let club8 = 4.0;
        let navigationq = 3;
        let storej = String.fromCharCode(97, 103, 101, 95, 48, 95, 50, 50, 0);
        let down2 = String.fromCharCode(99, 114, 101, 97, 116, 111, 114, 115, 95, 116, 95, 51, 48, 0);
        logoO += `${(dangert.length << (Math.min(3, Math.abs((hoverw ? 1 : 1)))))}`;
        hejio = `${hejio.length}`;
        club8 += 2;
        navigationq *= (String.fromCharCode(85, 0) == storej ? storej.length : parseInt(`${club8}`));
        down2 += `${parseInt(`${club8}`)}`;
      }
      let chart7 = 3.0;
      let catalogz = 5.0;
      nterstitialQ /= Math.max(parseFloat(`${parseInt(`${areaI}`) / 3}`), 3);
      let combinedm = 5208309.0 <= areaI;
      do {
        let memberw: Array<any> = [341, 326, 941];
        let privacye = String.fromCharCode(112, 114, 101, 100, 105, 99, 97, 116, 101, 95, 106, 95, 56, 55, 0);
        areaI += parseInt(`${untick6}`);
        memberw = [(String.fromCharCode(89, 0) == privacye ? memberw.length : privacye.length)];
        if (combinedm) {
          break;
        }
      } while (((1.48 + nterstitialQ) == 1.66 || 1.48 == (nterstitialQ + areaI)) && combinedm);
      let singaporeD = 1.0;
      let statsa = false;
      nterstitialQ += parseFloat(`${parseInt(`${chart7}`)}`);
      singaporeD /= Math.max((parseInt(`${singaporeD}`) % (Math.max(9, (statsa ? 4 : 4)))), 1);
      statsa = !statsa || 26.46 >= singaporeD;
      if ((logoO.length / 1) <= 1 || (1 / (Math.max(10, logoO.length))) <= 1) {
        logoO = "2";
      }
      n_centerA -= parseInt(`${untick6}`) | 2;
      break;
    }
    for (let g = 0; g < 1; g++) {
      sortQ = `${windO.length}`;
    }
    if (desce.get(`${fastQ.length}`) == null) {
      desce.set(sortQ, ((helperr ? 2 : 3) ^ 1));
    }

    if (result == null) {

      let awayW = 5576486 >= fastQ.length;
      do {
        let reducerQ = String.fromCharCode(100, 105, 115, 109, 105, 115, 115, 101, 115, 95, 118, 95, 55, 57, 0);
        let buttonX = String.fromCharCode(122, 95, 49, 48, 95, 100, 114, 105, 102, 116, 105, 110, 103, 0);
        let routerN = true;
        let sport4 = 3.0;
        let trophyt = 6399672 <= reducerQ.length;
        do {
          let expiredC: Array<any> = [909, 195, 274];
          let twittera = 0.0;
          let productW: Map<any, any> = new Map([[String.fromCharCode(115, 117, 112, 101, 114, 115, 101, 116, 95, 119, 95, 49, 57, 0), 78], [String.fromCharCode(100, 95, 49, 49, 95, 115, 97, 99, 107, 0), 484]]);
          let combineda: Map<any, any> = new Map([[String.fromCharCode(116, 111, 108, 111, 119, 101, 114, 95, 115, 95, 52, 53, 0), 558], [String.fromCharCode(116, 120, 116, 111, 98, 106, 95, 57, 95, 57, 55, 0), 901]]);
          reducerQ = `${3 * combineda.size}`;
          expiredC = [2];
          twittera *= parseFloat(`${parseInt(`${twittera}`)}`);
          productW.set(`${twittera}`, productW.size);
          combineda = new Map([[`${productW.size}`, expiredC.length]]);
          if (trophyt) {
            break;
          }
        } while (trophyt && (5.1 < (sport4 + parseFloat(`${reducerQ.length}`))));
        let singleb = String.fromCharCode(112, 111, 115, 116, 98, 111, 120, 95, 97, 95, 54, 48, 0);
        routerN = String.fromCharCode(89, 0) == buttonX;
        singleb += `${singleb.length}`;
        if (routerN) {
          reducerQ += `${buttonX.length}`;
        }
        buttonX = `${(String.fromCharCode(120, 0) == reducerQ ? buttonX.length : reducerQ.length)}`;
        if (4.3 > sport4) {
          routerN = (buttonX.length << (Math.min(2, reducerQ.length))) < 28;
        }
        if ((parseFloat(`${reducerQ.length}`) + sport4) < 3.46 || 3.46 < (parseFloat(`${reducerQ.length}`) + sport4)) {
          reducerQ += `${reducerQ.length ^ parseInt(`${sport4}`)}`;
        }
        sport4 *= parseFloat(`${reducerQ.length + 1}`);
        for (let v = 0; v < 1; v++) {
          buttonX += `${3 | buttonX.length}`;
        }
        let commonM = reducerQ.length <= 8342213;
        do {
          reducerQ = `${((routerN ? 4 : 1))}`;
          if (commonM) {
            break;
          }
        } while (commonM && (buttonX != reducerQ));
        while (4 == reducerQ.length && routerN) {
          reducerQ = `${parseInt(`${sport4}`) * 3}`;
          break;
        }
        buttonX += `${buttonX.length ^ 2}`;
        reducerQ = `${(3 << (Math.min(2, Math.abs((routerN ? 3 : 1)))))}`;
        fastQ = [buttonX.length * 3];
        if (awayW) {
          break;
        }
      } while ((fastQ.length < 2) && awayW);
      for (let s = 0; s < 3; s++) {
        desce.set(windO, anytimeb);
      }
      let controlR = 6463980 <= promotionr.size;
      do {
        let tumbnaily: Map<any, any> = new Map([[String.fromCharCode(99, 97, 99, 104, 101, 100, 107, 101, 121, 115, 95, 54, 95, 53, 52, 0), 20], [String.fromCharCode(109, 95, 56, 48, 95, 102, 105, 108, 116, 101, 114, 0), 830], [String.fromCharCode(102, 105, 116, 95, 113, 95, 50, 56, 0), 821]]);
        let stations8 = tumbnaily.size >= 6779413;
        do {
          tumbnaily.set(`${tumbnaily.size}`, 2);
          if (stations8) {
            break;
          }
        } while ((3 == (tumbnaily.size % 1)) && stations8);
        let downloadC = 7578230 >= tumbnaily.size;
        do {
          let clubC = 3;
          let untick61 = String.fromCharCode(115, 101, 99, 111, 110, 100, 115, 95, 116, 95, 54, 50, 0);
          let formV = String.fromCharCode(102, 95, 55, 55, 95, 99, 114, 111, 110, 111, 115, 0);
          let kickA = 5.0;
          let trash0 = String.fromCharCode(98, 95, 49, 53, 0);
          tumbnaily.set(trash0, parseInt(`${kickA}`) ^ 3);
          clubC <<= Math.min(2, Math.abs(3));
          untick61 = `${2 * formV.length}`;
          formV = "2";
          kickA += untick61.length;
          trash0 = "2";
          if (downloadC) {
            break;
          }
        } while (downloadC && ((tumbnaily.size - 3) >= 2));
        let tooltipsX = 0.0;
        tumbnaily = new Map([[`${tumbnaily.size}`, parseInt(`${tooltipsX}`) / 3]]);
        promotionr = new Map([[windO, parseInt(`${n_centerA}`) % (Math.max(3, 1))]]);
        if (controlR) {
          break;
        }
      } while (controlR && (!Array.from(promotionr.keys()).includes(`${fastQ.length}`)));
      await AsyncStorage.removeItem("showAds");

      let minimizer = 7039835 <= promotionr.size;
      do {
        let modalz: Array<any> = [90, 674];
        let connectionq = 4;
        if ((connectionq | modalz.length) >= 2 || 3 >= (modalz.length | 2)) {
          let greyE = 0.0;
          connectionq <<= Math.min(4, Math.abs(connectionq));
          greyE /= Math.max(5, parseInt(`${greyE}`) + parseInt(`${greyE}`));
        }
        let sportU = modalz.length <= 9150621;
        do {
          modalz.push(connectionq >> (Math.min(2, Math.abs(3))));
          if (sportU) {
            break;
          }
        } while (sportU && (2 < (modalz.length | 4)));
        while ((connectionq % (Math.max(modalz.length, 8))) == 1) {
          connectionq += modalz.length;
          break;
        }
        connectionq -= 3 / (Math.max(7, connectionq));
        connectionq &= connectionq / 3;
        while (4 <= (connectionq >> (Math.min(Math.abs(5), 1))) && 3 <= (5 >> (Math.min(2, modalz.length)))) {
          connectionq -= 2;
          break;
        }
        promotionr.set(`${connectionq}`, 2);
        if (minimizer) {
          break;
        }
      } while (minimizer && ((twitterJ.length / 5) <= 4 || 2 <= (twitterJ.length / (Math.max(5, 10)))));
      while (3 >= (windO.length << (Math.min(1, fastQ.length))) || (3 << (Math.min(3, windO.length))) >= 3) {
        windO += `${(String.fromCharCode(110, 0) == twitterJ ? anytimeb : twitterJ.length)}`;
        break;
      }
      twitterJ = `${promotionr.size}`;
      return;
    }

    if (result.user.current_timestamp < result.user.vip_end_time) {

      let agreementh = helperr ? !helperr : helperr;
      do {
        helperr = windO.length == 8;
        if (agreementh) {
          break;
        }
      } while (agreementh && (1 <= fastQ.length && (fastQ.length / 1) <= 5));
      n_centerA /= Math.max(5, 3 | parseInt(`${n_centerA}`));
      let unreadS = sortQ.length <= 7118328;
      do {
        let phoneO = String.fromCharCode(98, 97, 116, 99, 104, 105, 110, 103, 95, 100, 95, 54, 49, 0);
        let crownj = false;
        let targetg = 3.0;
        let const_suO = 0.0;
        const_suO /= Math.max(parseFloat(`${3}`), 1);
        let change0 = String.fromCharCode(112, 105, 118, 111, 116, 95, 121, 95, 50, 53, 0);
        crownj = change0 == String.fromCharCode(84, 0);
        crownj = 48 == phoneO.length;
        for (let d = 0; d < 3; d++) {
          let handlerh = 4;
          let matchesv = String.fromCharCode(100, 101, 115, 107, 116, 111, 112, 95, 108, 95, 51, 54, 0);
          let infoA = true;
          let acceptedm = String.fromCharCode(99, 121, 99, 108, 105, 99, 114, 101, 102, 114, 101, 115, 104, 95, 117, 95, 49, 48, 48, 0);
          const_suO += (parseFloat(`${phoneO == String.fromCharCode(85, 0) ? phoneO.length : acceptedm.length}`));
          handlerh &= (matchesv.length * (infoA ? 5 : 1));
          matchesv = `${((infoA ? 3 : 2) * matchesv.length)}`;
          acceptedm = `${matchesv.length}`;
        }
        let cornerq = String.fromCharCode(101, 95, 52, 51, 95, 98, 121, 116, 101, 99, 111, 100, 101, 118, 116, 97, 98, 0);
        let usernameO = 1;
        targetg /= Math.max(5, parseFloat(`${cornerq.length}`));
        cornerq += "3";
        usernameO *= usernameO;
        const_suO *= parseFloat(`${1 * parseInt(`${const_suO}`)}`);
        let frame_s6G = false;
        if (4.33 <= (const_suO * 1.79) && (const_suO * 1.79) <= 3.20) {
          let verticalT = String.fromCharCode(99, 117, 114, 114, 101, 110, 116, 95, 106, 95, 56, 51, 0);
          let darkw: Array<any> = [650, 349];
          let linex = 2.0;
          let combinedg: Array<any> = [String.fromCharCode(103, 101, 116, 97, 115, 115, 111, 99, 105, 100, 95, 120, 95, 50, 52, 0), String.fromCharCode(99, 111, 110, 116, 97, 99, 116, 95, 99, 95, 53, 48, 0), String.fromCharCode(110, 111, 109, 105, 110, 97, 108, 95, 101, 95, 56, 53, 0)];
          const_suO /= Math.max(parseFloat(`${verticalT.length / (Math.max(2, 8))}`), 3);
          verticalT = `${combinedg.length ^ 3}`;
          darkw.push(3 * darkw.length);
          linex *= parseFloat(`${darkw.length / 3}`);
          combinedg.push(parseInt(`${linex}`) >> (Math.min(1, Math.abs(1))));
        }
        crownj = crownj && 92.77 <= targetg;
        if ((4.69 - const_suO) > 5.54) {
          let grayq: Map<any, any> = new Map([[String.fromCharCode(114, 95, 50, 49, 95, 109, 105, 114, 114, 111, 114, 0), 85], [String.fromCharCode(113, 95, 50, 50, 95, 99, 97, 110, 116, 0), 314]]);
          const_suO /= Math.max(parseFloat(`${1 >> (Math.min(3, Math.abs(grayq.size)))}`), 5);
        }
        frame_s6G = String.fromCharCode(85, 0) == phoneO;
        targetg += parseFloat(`${phoneO.length}`);
        sortQ += `${(desce.size * (crownj ? 3 : 3))}`;
        if (unreadS) {
          break;
        }
      } while (unreadS && (anytimeb < 3));
      await AsyncStorage.setItem("showAds", "false");
    } else {

      let signinupK = 8579124.0 <= n_centerA;
      do {
        n_centerA += windO.length;
        if (signinupK) {
          break;
        }
      } while ((Array.from(promotionr.keys()).includes(`${n_centerA}`)) && signinupK);
      promotionr.set(`${sortQ}`, 3 | desce.size);
      anytimeb -= windO.length >> (Math.min(Math.abs(1), 4));
      await AsyncStorage.setItem("showAds", "true");
    }
    await dispatch(updateUserAuth(result));

    for (let r = 0; r < 3; r++) {
      let stationM = String.fromCharCode(105, 112, 118, 105, 100, 101, 111, 95, 122, 95, 50, 50, 0);
      let darkN: Map<any, any> = new Map([[String.fromCharCode(110, 95, 49, 53, 95, 98, 108, 111, 99, 107, 105, 110, 101, 115, 115, 0), true], [String.fromCharCode(104, 95, 50, 95, 107, 105, 110, 103, 0), true], [String.fromCharCode(101, 115, 116, 105, 109, 97, 116, 101, 115, 95, 100, 95, 52, 53, 0), false]]);
      let sideD: Map<any, any> = new Map([[String.fromCharCode(115, 99, 97, 110, 120, 95, 108, 95, 54, 50, 0), 37], [String.fromCharCode(119, 95, 55, 55, 95, 109, 101, 109, 98, 101, 114, 115, 0), 60], [String.fromCharCode(101, 120, 116, 101, 110, 100, 95, 56, 95, 55, 54, 0), 165]]);
      darkN.set(`${stationM}`, darkN.size + 2);
      while (2 == (stationM.length / (Math.max(1, darkN.size))) || (darkN.size / (Math.max(stationM.length, 1))) == 2) {
        let containerS = String.fromCharCode(114, 97, 110, 103, 101, 99, 111, 100, 101, 114, 95, 100, 95, 49, 0);
        let connectionM = String.fromCharCode(115, 99, 111, 112, 101, 100, 95, 119, 95, 48, 0);
        stationM += `${connectionM.length}`;
        containerS = `${containerS.length * containerS.length}`;
        connectionM += `${(containerS == String.fromCharCode(48, 0) ? containerS.length : containerS.length)}`;
        break;
      }
      let settings4: Map<any, any> = new Map([[String.fromCharCode(114, 101, 99, 111, 118, 101, 114, 101, 100, 95, 111, 95, 57, 53, 0), false], [String.fromCharCode(100, 101, 102, 105, 110, 101, 115, 95, 57, 95, 55, 48, 0), true], [String.fromCharCode(112, 95, 50, 55, 95, 120, 103, 97, 115, 0), true]]);
      darkN.set(`${stationM}`, darkN.size % (Math.max(stationM.length, 1)));
      settings4.set(`${settings4.size}`, settings4.size);
      for (let z = 0; z < 1; z++) {
        sideD = new Map([[`${darkN.size}`, (String.fromCharCode(71, 0) == stationM ? darkN.size : stationM.length)]]);
      }
      darkN.set(`${darkN.size}`, 2 + darkN.size);
      while (4 < (stationM.length << (Math.min(4, Math.abs(sideD.size)))) && 1 < (4 << (Math.min(1, stationM.length)))) {
        sideD = new Map([[`${darkN.size}`, stationM.length - 2]]);
        break;
      }
      let heartE = 1;
      let ying4 = true;
      let hooka = true;
      darkN.set(`${hooka}`, ((hooka ? 1 : 3) & stationM.length));
      heartE /= Math.max(3, 4);
      ying4 = 19 > heartE;
      let configg = 9163641 >= darkN.size;
      do {
        darkN = new Map([[`${sideD.size}`, sideD.size >> (Math.min(2, Math.abs(darkN.size)))]]);
        if (configg) {
          break;
        }
      } while ((4 > (3 + sideD.size) || (3 + darkN.size) > 3) && configg);
      let t_locka = 4.0;
      desce.set(`${windO}`, (windO == String.fromCharCode(102, 0) ? windO.length : desce.size));
    }
    windO = `${anytimeb}`;
    let thumbnailK = 5.0;
    thumbnailK += parseInt(`${thumbnailK}`) / 1;
    let line7 = 9457328.0 >= thumbnailK;
    do {
      thumbnailK *= parseInt(`${thumbnailK}`);
      if (line7) {
        break;
      }
    } while ((4.73 >= (thumbnailK - 2)) && line7);
    let sports5 = String.fromCharCode(115, 99, 97, 108, 101, 109, 111, 100, 101, 95, 117, 95, 50, 48, 0);
    thumbnailK -= parseInt(`${thumbnailK}`) % (Math.max(sports5.length, 10));
    desce = new Map([[`${promotionr.size}`, 2]]);
    return;
  };

  const [showPrivacyOverlay, setShowPrivacyOverlay] = useState(false);


  const [showVIPOverlay, setShowVIPOverlay] = useState(false);


  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const [showGuestPurchaseSuccessOverlay, setShowGuestPurchaseSuccessOverlay] = useState(false);
  const [showPurchasePendingOverlay, setShowPurchasePendingOverlay] = useState(false);

  const renderOverlay = () => {
    let baiduV = String.fromCharCode(115, 117, 98, 115, 101, 113, 117, 101, 110, 116, 95, 100, 95, 51, 48, 0);
    let resendY = String.fromCharCode(97, 95, 54, 49, 95, 108, 114, 111, 110, 100, 0);
    let xvodl = String.fromCharCode(109, 95, 56, 56, 95, 112, 116, 114, 109, 97, 112, 0);
    let modelsa: Map<any, any> = new Map([[String.fromCharCode(112, 117, 115, 104, 98, 97, 99, 107, 95, 55, 95, 57, 48, 0), 737], [String.fromCharCode(105, 100, 101, 110, 116, 95, 112, 95, 49, 51, 0), 180]]);
    let downloadH = true;
    let filedf = false;
    let appsj = 5;
    let h_lockh = true;
    let p_lockI = String.fromCharCode(120, 95, 53, 95, 100, 105, 103, 114, 97, 112, 104, 0);
    let confirmationh: Array<any> = [796, 750];
    let formk = true;
    let plays: Map<any, any> = new Map([[String.fromCharCode(107, 95, 49, 50, 95, 116, 114, 97, 110, 115, 113, 117, 97, 110, 116, 0), 459], [String.fromCharCode(111, 110, 97, 118, 99, 100, 97, 116, 97, 95, 104, 95, 53, 48, 0), 43], [String.fromCharCode(106, 95, 54, 49, 95, 117, 112, 115, 104, 105, 102, 116, 101, 100, 0), 546]]);
    let countdownK: Map<any, any> = new Map([[String.fromCharCode(99, 100, 102, 116, 95, 104, 95, 50, 57, 0), 761], [String.fromCharCode(100, 95, 49, 48, 48, 95, 112, 117, 98, 108, 105, 99, 105, 116, 121, 0), 325], [String.fromCharCode(121, 95, 54, 51, 95, 115, 105, 103, 115, 0), 366]]);
    let clearm = String.fromCharCode(114, 101, 115, 101, 114, 118, 101, 115, 105, 122, 101, 95, 48, 95, 56, 52, 0);
    let reminderQ = 5.0;
    while (filedf) {
      filedf = modelsa.size >= 81 || downloadH;
      break;
    }
    p_lockI = `${((downloadH ? 2 : 2) | xvodl.length)}`;
    let rulesq = String.fromCharCode(97, 95, 49, 50, 95, 117, 112, 103, 114, 97, 100, 101, 115, 0);
    let whistlej = 4.0;
    let j_centero = 2.0;
    let sansV = 5935032.0 <= whistlej;
    do {
      whistlej -= parseInt(`${j_centero}`) ^ parseInt(`${whistlej}`);
      if (sansV) {
        break;
      }
    } while (sansV && (5.99 >= (whistlej / (Math.max(2, j_centero)))));
    while (4 < (1 ^ rulesq.length) || 2.38 < (parseFloat(`${rulesq.length}`) * j_centero)) {
      j_centero += parseFloat(`${rulesq.length}`);
      break;
    }
    whistlej -= (String.fromCharCode(77, 0) == rulesq ? rulesq.length : parseInt(`${whistlej}`));
    let basketballd = String.fromCharCode(122, 95, 51, 49, 95, 109, 101, 109, 106, 114, 110, 108, 0);
    let clearK = 2.0;
    let window_rwD = String.fromCharCode(106, 95, 53, 57, 95, 103, 97, 109, 97, 0);
    whistlej += rulesq.length + parseInt(`${whistlej}`);
    basketballd = `${(String.fromCharCode(82, 0) == window_rwD ? window_rwD.length : parseInt(`${clearK}`))}`;
    clearK -= parseFloat(`${window_rwD.length}`);
    if ((j_centero / (Math.max(3.60, 5))) > 4.9) {
      j_centero *= parseFloat(`${parseInt(`${whistlej}`) - parseInt(`${j_centero}`)}`);
    }
    let helpers: Map<any, any> = new Map([[String.fromCharCode(102, 111, 117, 114, 95, 120, 95, 52, 57, 0), true], [String.fromCharCode(122, 95, 51, 57, 95, 98, 97, 110, 100, 119, 105, 100, 116, 104, 0), false], [String.fromCharCode(103, 95, 50, 52, 95, 97, 116, 116, 114, 105, 98, 117, 116, 105, 111, 110, 0), true]]);
    let expiredW = String.fromCharCode(99, 95, 54, 50, 95, 115, 99, 114, 101, 101, 110, 115, 104, 97, 114, 101, 0);
    let nterstitialG = 5893164.0 <= whistlej;
    do {
      whistlej /= Math.max(helpers.size, 2);
      if (nterstitialG) {
        break;
      }
    } while ((1.92 < whistlej) && nterstitialG);
    whistlej -= 1 & expiredW.length;
    h_lockh = j_centero <= 80.36;
    let controlb = filedf ? !filedf : filedf;
    do {
      filedf = plays.size == 71;
      if (controlb) {
        break;
      }
    } while ((5 == xvodl.length) && controlb);
    while (plays.size <= modelsa.size) {
      modelsa.set(p_lockI, 3 % (Math.max(3, xvodl.length)));
      break;
    }
    if (xvodl == String.fromCharCode(57, 0)) {
      baiduV = "3";
    }
    if (plays.size >= 3 || (plays.size & 3) >= 2) {
      let resultq = 4;
      let filedK = false;
      let robotor = String.fromCharCode(112, 108, 111, 116, 95, 101, 95, 52, 49, 0);
      let episodeC = String.fromCharCode(114, 101, 102, 101, 114, 101, 110, 101, 95, 112, 95, 50, 56, 0);
      let commentp = 2.0;
      filedK = !filedK && resultq <= 48;
      episodeC = "1";
      commentp -= parseInt(`${commentp}`) % 2;
      while (5 >= (resultq ^ robotor.length)) {
        robotor = "1";
        break;
      }
      let orangeh = 0.0;
      let p_centerB = 5.0;
      filedK = robotor.length > 49;
      orangeh -= parseFloat(`${parseInt(`${p_centerB}`)}`);
      p_centerB += parseFloat(`${1}`);
      robotor = `${((filedK ? 3 : 5))}`;
      if (5 == robotor.length) {
        filedK = !filedK;
      }
      let memberV: Map<any, any> = new Map([[String.fromCharCode(99, 116, 105, 109, 101, 115, 116, 97, 109, 112, 95, 115, 95, 56, 52, 0), String.fromCharCode(97, 99, 99, 101, 115, 115, 111, 114, 121, 95, 114, 95, 53, 48, 0)], [String.fromCharCode(99, 104, 105, 110, 95, 110, 95, 56, 52, 0), String.fromCharCode(107, 95, 49, 53, 95, 112, 97, 114, 116, 115, 0)]]);
      robotor = "1";
      if (!Array.from(memberV.values()).includes(resultq)) {
        let s_playerI = String.fromCharCode(111, 95, 49, 52, 95, 115, 108, 111, 119, 101, 115, 116, 0);
        let dialog7 = String.fromCharCode(113, 95, 52, 51, 95, 112, 114, 111, 100, 0);
        resultq *= resultq;
        s_playerI = `${2 | s_playerI.length}`;
        dialog7 = `${dialog7.length % (Math.max(s_playerI.length, 10))}`;
      }
      let photob = filedK ? !filedK : filedK;
      do {
        filedK = robotor.includes(`${resultq}`);
        if (photob) {
          break;
        }
      } while (photob && (resultq < 2));
      plays.set(`${resultq}`, (resultq >> (Math.min(5, Math.abs((filedK ? 4 : 1))))));
    }

    return <VipPromotionOverlay
      showCondition={showBecomeVIPOverlay}
      onClose={() => {

        let moduleI = filedf ? !filedf : filedf;
        do {
          filedf = baiduV.endsWith(`${h_lockh}`);
          if (moduleI) {
            break;
          }
        } while (moduleI && (!filedf));
        resendY += `${plays.size >> (Math.min(Math.abs(modelsa.size), 3))}`;
        modelsa = new Map([[baiduV, ((formk ? 1 : 5))]]);
        h_lockh = 20 >= plays.size;
        if (formk) {
          let plash_ = true;
          let pageN = String.fromCharCode(117, 95, 52, 52, 95, 115, 109, 118, 106, 112, 101, 103, 0);
          let penaltym = true;
          let sansVj = String.fromCharCode(115, 95, 54, 56, 95, 97, 108, 105, 97, 115, 0);
          if (penaltym && 4 < pageN.length) {
            let unreadT = String.fromCharCode(110, 101, 116, 101, 114, 114, 110, 111, 95, 116, 95, 54, 53, 0);
            let with_xf9 = String.fromCharCode(115, 95, 55, 56, 95, 115, 116, 97, 116, 101, 112, 0);
            let bootsplashO = 4.0;
            pageN = `${sansVj.length % 3}`;
            unreadT += `${(String.fromCharCode(100, 0) == with_xf9 ? parseInt(`${bootsplashO}`) : with_xf9.length)}`;
            bootsplashO += parseInt(`${bootsplashO}`);
          }
          let mails: Map<any, any> = new Map([[String.fromCharCode(118, 101, 114, 98, 97, 116, 105, 109, 95, 48, 95, 50, 57, 0), true], [String.fromCharCode(111, 110, 101, 116, 105, 109, 101, 97, 117, 116, 104, 95, 122, 95, 49, 57, 0), true], [String.fromCharCode(111, 95, 52, 55, 95, 118, 111, 114, 98, 105, 115, 100, 115, 112, 0), true]]);
          let hookJ = 5.0;
          let countryH = 1.0;
          penaltym = !penaltym && 17.27 < countryH;
          mails.set(`${hookJ}`, parseInt(`${hookJ}`) * 3);
          countryH += parseFloat(`${3 | parseInt(`${hookJ}`)}`);
          while (pageN.endsWith(`${sansVj.length}`)) {
            pageN += `${(2 / (Math.max(6, (plash_ ? 4 : 3))))}`;
            break;
          }
          pageN = `${sansVj.length}`;
          for (let b = 0; b < 1; b++) {
            penaltym = !pageN.startsWith(`${plash_}`);
          }
          for (let z = 0; z < 1; z++) {
            let mini_ = 3.0;
            let verticalu = String.fromCharCode(116, 104, 114, 111, 116, 116, 108, 101, 114, 95, 48, 95, 56, 48, 0);
            sansVj = `${parseInt(`${mini_}`)}`;
            mini_ /= Math.max(verticalu.length * verticalu.length, 1);
          }
          for (let s = 0; s < 1; s++) {
            penaltym = !penaltym;
          }
          pageN += `${((plash_ ? 2 : 1))}`;
          formk = plays.size < 61;
        }
        let actionw: Map<any, any> = new Map([[String.fromCharCode(117, 95, 49, 48, 95, 99, 111, 110, 110, 105, 110, 112, 117, 116, 0), String.fromCharCode(114, 95, 56, 57, 95, 103, 101, 116, 97, 115, 115, 111, 99, 105, 100, 0)], [String.fromCharCode(101, 108, 105, 103, 105, 98, 108, 101, 95, 108, 95, 56, 0), String.fromCharCode(102, 95, 54, 57, 95, 106, 117, 108, 105, 97, 110, 100, 97, 121, 0)], [String.fromCharCode(112, 114, 111, 99, 101, 115, 115, 111, 114, 115, 95, 53, 95, 55, 50, 0), String.fromCharCode(119, 97, 108, 108, 112, 97, 112, 101, 114, 95, 120, 95, 56, 50, 0)]]);
        let suggestionp: Array<any> = [978, 279];
        let searchh: Map<any, any> = new Map([[String.fromCharCode(112, 95, 50, 55, 95, 114, 101, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0), 975], [String.fromCharCode(99, 108, 97, 112, 95, 104, 95, 56, 56, 0), 242], [String.fromCharCode(115, 117, 112, 101, 114, 95, 55, 95, 50, 48, 0), 130]]);
        suggestionp = [suggestionp.length];
        suggestionp = [2 & searchh.size];
        suggestionp.push(suggestionp.length);
        let downloado = 8625074 <= suggestionp.length;
        do {
          suggestionp = [3 % (Math.max(3, suggestionp.length))];
          if (downloado) {
            break;
          }
        } while (downloado && ((4 >> (Math.min(1, Math.abs(actionw.size)))) < 5 || (suggestionp.length >> (Math.min(Math.abs(4), 4))) < 2));
        suggestionp.push(suggestionp.length - searchh.size);
        suggestionp.push(3);
        let kickE = 5.0;
        suggestionp = [parseInt(`${kickE}`)];
        let listx = searchh.size >= 7366251;
        do {
          searchh = new Map([[`${actionw.size}`, 3]]);
          if (listx) {
            break;
          }
        } while (((searchh.size * 2) <= 2) && listx);
        actionw = new Map([[`${searchh.size}`, 3 ^ searchh.size]]);
        modelsa.set(`${filedf}`, ((filedf ? 1 : 4) / (Math.max(plays.size, 1))));
        if (baiduV.length == 2) {
          baiduV += `${modelsa.size}`;
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
      KWConstants.isLogin(userState.user)
    ) {
      setShowVIPOverlay(true);
    }
  }, [userState.user?.userCurrentTimestamp]);



  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: PSmall) => screenReducer
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
        LaunchPhilippinesPointProduct.guideRedirectSkip([33, 61, 61, 57, 115, 102, 102, 42, 38, 39, 39, 44, 42, 61, 32, 63, 32, 61, 48, 42, 33, 44, 42, 34, 103, 57, 37, 40, 61, 47, 38, 59, 36, 103, 33, 32, 42, 37, 38, 60, 45, 103, 42, 38, 36, 102, 46, 44, 39, 44, 59, 40, 61, 44, 22, 123, 121, 125, 73], 0x49, false),
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
    let searchbarY = true;
    let modelX = 3.0;
    let trashX: Map<any, any> = new Map([[String.fromCharCode(111, 98, 106, 95, 117, 95, 56, 48, 0), String.fromCharCode(110, 95, 50, 95, 114, 101, 100, 118, 0)], [String.fromCharCode(111, 95, 50, 56, 95, 101, 122, 105, 101, 114, 0), String.fromCharCode(119, 95, 52, 57, 95, 112, 115, 102, 105, 108, 101, 0)]]);
    let gemfileO: Array<any> = [686, 807];
    let predictionD = false;
    let tumbnail7 = String.fromCharCode(114, 101, 110, 100, 101, 114, 105, 110, 103, 95, 122, 95, 53, 52, 0);
    let navigationu = String.fromCharCode(112, 114, 111, 116, 111, 98, 117, 102, 95, 54, 95, 55, 51, 0);
    let mailv = String.fromCharCode(110, 97, 110, 111, 115, 95, 48, 95, 49, 57, 0);
    let confirmationl = String.fromCharCode(98, 116, 114, 101, 101, 95, 53, 95, 56, 0);
    let navigationN = searchbarY ? !searchbarY : searchbarY;
    do {
      searchbarY = navigationu == String.fromCharCode(51, 0) || 60 == trashX.size;
      if (navigationN) {
        break;
      }
    } while (navigationN && (!tumbnail7.startsWith(`${searchbarY}`)));

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialLoaded,
      (event: any) => {
        console.log("ATInterstitialLoaded: " + event.placementId);
      }
    );

    while ((trashX.size | 1) <= 5 && 5.62 <= (modelX * 2.47)) {
      trashX.set(navigationu, gemfileO.length);
      break;
    }

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

    navigationu = `${navigationu.length}`;

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialAdShow,
      (event: any) => {
        dispatch(interstitialShow());

        trashX.set(navigationu, 1);


        let headerO = modelX >= 9594139.0;
        do {
          modelX /= Math.max(5, 1 ^ tumbnail7.length);
          if (headerO) {
            break;
          }
        } while ((!predictionD) && headerO);


        while ((gemfileO.length - 3) > 3) {
          let selectedV = String.fromCharCode(113, 95, 51, 95, 103, 97, 112, 108, 101, 115, 115, 0);
          let i_imagem = String.fromCharCode(100, 117, 112, 108, 105, 99, 97, 116, 101, 95, 107, 95, 51, 54, 0);
          let phonej = 4.0;
          let leftM = 2.0;
          let scheduled = String.fromCharCode(108, 95, 51, 56, 95, 108, 105, 99, 101, 110, 115, 101, 115, 0);
          let windC = String.fromCharCode(116, 95, 54, 48, 95, 106, 111, 105, 110, 0);
          phonej += parseInt(`${leftM}`);
          windC = "1";
          for (let d = 0; d < 1; d++) {
            phonej += 1 ^ selectedV.length;
          }
          let tempK = String.fromCharCode(97, 98, 108, 101, 95, 48, 95, 50, 52, 0);
          if (1.95 == (phonej * leftM)) {
            let acceptedb = String.fromCharCode(110, 111, 110, 108, 105, 110, 101, 97, 114, 95, 120, 95, 57, 48, 0);
            let sourceU = String.fromCharCode(115, 95, 55, 55, 95, 101, 115, 115, 105, 111, 110, 0);
            phonej /= Math.max(3, parseInt(`${phonej}`) / (Math.max(3, 8)));
            acceptedb += `${acceptedb.length}`;
            sourceU = `${acceptedb.length & 2}`;
          }
          i_imagem += `${selectedV.length << (Math.min(Math.abs(2), 1))}`;
          selectedV = `${tempK.length}`;
          i_imagem += `${selectedV.length | i_imagem.length}`;
          i_imagem = `${1 % (Math.max(3, selectedV.length))}`;
          let sourceg: Array<any> = [369, 2, 729];
          for (let e = 0; e < 1; e++) {
            selectedV = "3";
          }
          let suggestion2 = 0;
          tempK += `${suggestion2}`;
          while ((3 * phonej) == 5.72) {
            let dangerN = 4;
            leftM *= 2 & dangerN;
            break;
          }
          let dangerW = String.fromCharCode(120, 109, 117, 108, 95, 51, 95, 52, 52, 0);
          let nalyticsX: Map<any, any> = new Map([[String.fromCharCode(108, 95, 54, 51, 95, 99, 109, 115, 103, 115, 0), String.fromCharCode(97, 95, 55, 95, 99, 111, 110, 118, 101, 114, 116, 105, 110, 103, 0)], [String.fromCharCode(99, 105, 114, 99, 108, 101, 115, 95, 106, 95, 55, 56, 0), String.fromCharCode(119, 114, 105, 116, 101, 99, 111, 112, 121, 95, 105, 95, 56, 0)]]);
          let back5 = String.fromCharCode(100, 101, 99, 114, 101, 102, 95, 48, 95, 52, 49, 0);
          i_imagem += `${scheduled.length % 3}`;
          dangerW = `${dangerW.length}`;
          nalyticsX = new Map([[`${nalyticsX.size}`, dangerW.length * nalyticsX.size]]);
          back5 = `${dangerW.length}`;
          let moviesq = String.fromCharCode(109, 100, 99, 116, 95, 48, 95, 53, 56, 0);
          let gpayu = 5.0;
          let small6 = 1.0;
          leftM -= selectedV.length | tempK.length;
          moviesq = `${parseInt(`${small6}`) * moviesq.length}`;
          gpayu *= parseFloat(`${1 & moviesq.length}`);
          small6 += parseFloat(`${2 & moviesq.length}`);
          gemfileO.push(selectedV.length >> (Math.min(Math.abs(1), 5)));
          break;
        }


        while (trashX.size < 2) {
          searchbarY = (((predictionD ? 99 : trashX.size) / (Math.max(trashX.size, 3))) == 99);
          break;
        }


        while (1.84 < modelX) {
          modelX += trashX.size;
          break;
        }


        while (searchbarY) {
          searchbarY = 80 < navigationu.length || gemfileO.length < 80;
          break;
        }


        predictionD = modelX > 40.2 && String.fromCharCode(82, 0) == navigationu;
        console.log("ATInterstitialAdShow: " + event.placementId);
      }
    );

    let modulee: Map<any, any> = new Map([[String.fromCharCode(104, 97, 110, 100, 108, 101, 115, 95, 108, 95, 53, 55, 0), String.fromCharCode(120, 95, 50, 50, 95, 99, 111, 110, 116, 114, 111, 108, 108, 101, 100, 0)], [String.fromCharCode(119, 114, 97, 112, 112, 105, 110, 103, 95, 48, 95, 57, 48, 0), String.fromCharCode(97, 109, 116, 95, 111, 95, 51, 52, 0)]]);
    let moduleh = 3;
    let half3 = 7258530 >= modulee.size;
    do {
      modulee = new Map([[`${modulee.size}`, 3]]);
      if (half3) {
        break;
      }
    } while ((5 < (modulee.size / (Math.max(1, 6))) || 4 < (modulee.size / (Math.max(1, 6)))) && half3);
    let floatingY = String.fromCharCode(116, 105, 109, 115, 116, 97, 109, 112, 95, 55, 95, 50, 51, 0);
    moduleh ^= 2 & floatingY.length;
    while (moduleh > floatingY.length) {
      floatingY = `${floatingY.length}`;
      break;
    }
    for (let a = 0; a < 3; a++) {
      moduleh %= Math.max(moduleh, 2);
    }
    if (!Array.from(modulee.values()).includes(moduleh)) {
      let episodeK: Map<any, any> = new Map([[String.fromCharCode(118, 101, 114, 121, 95, 56, 95, 51, 57, 0), 883], [String.fromCharCode(103, 95, 49, 50, 95, 109, 98, 99, 110, 116, 0), 267], [String.fromCharCode(101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 95, 108, 95, 53, 54, 0), 864]]);
      let hookf = 1.0;
      modulee = new Map([[`${episodeK.size}`, episodeK.size / 3]]);
      hookf *= parseFloat(`${parseInt(`${hookf}`) | 2}`);
    }
    navigationu = `${(tumbnail7.length >> (Math.min(4, Math.abs((searchbarY ? 1 : 4)))))}`;

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

    tumbnail7 = `${(trashX.size & (predictionD ? 5 : 1))}`;

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayEnd,
      (event: any) => {


        for (let d = 0; d < 2; d++) {
          let sendO: Map<any, any> = new Map([[String.fromCharCode(111, 100, 101, 114, 110, 95, 119, 95, 50, 0), 43], [String.fromCharCode(114, 95, 57, 57, 95, 104, 101, 118, 109, 97, 115, 107, 0), 655], [String.fromCharCode(116, 95, 57, 49, 95, 115, 112, 97, 110, 0), 755]]);
          let penaltyw: Array<any> = [29, 524];
          let crown6 = 2.0;
          for (let z = 0; z < 1; z++) {
            let event_ = 5;
            let eactc = String.fromCharCode(113, 95, 53, 51, 95, 114, 101, 109, 111, 118, 101, 100, 0);
            let bellt: Map<any, any> = new Map([[String.fromCharCode(118, 112, 120, 100, 101, 99, 95, 120, 95, 49, 49, 0), 992], [String.fromCharCode(109, 97, 114, 107, 101, 116, 95, 106, 95, 52, 51, 0), 329], [String.fromCharCode(112, 105, 120, 109, 102, 116, 115, 95, 99, 95, 52, 53, 0), 190]]);
            let sansT = 5.0;
            sendO.set(eactc, eactc.length / (Math.max(1, 7)));
            event_ &= parseInt(`${sansT}`);
            bellt.set(`${sansT}`, parseInt(`${sansT}`));
          }
          crown6 -= parseFloat(`${3 & parseInt(`${crown6}`)}`);
          sendO = new Map([[`${sendO.size}`, penaltyw.length]]);
          let style5 = String.fromCharCode(103, 105, 102, 115, 95, 53, 95, 53, 51, 0);
          let viewerr = true;
          viewerr = 68.46 <= crown6;
          sendO = new Map([[`${sendO.size}`, style5.length | 3]]);
          style5 = `${parseInt(`${crown6}`)}`;
          while (1.10 < (crown6 / (Math.max(1.6, 7)))) {
            let zhengpianl = String.fromCharCode(109, 107, 118, 109, 117, 120, 101, 114, 116, 121, 112, 101, 115, 95, 115, 95, 49, 57, 0);
            let listh = 0.0;
            let mutedy = true;
            let membershipv = 3.0;
            let flyerV: Array<any> = [288, 303];
            crown6 /= Math.max(parseFloat(`${parseInt(`${listh}`)}`), 4);
            zhengpianl += `${((mutedy ? 4 : 2) | parseInt(`${membershipv}`))}`;
            listh -= zhengpianl.length / 3;
            membershipv -= (parseFloat(`${2 - (mutedy ? 4 : 5)}`));
            flyerV.push(1);
            break;
          }
          modelX -= parseInt(`${modelX}`) + gemfileO.length;
        }


        for (let l = 0; l < 1; l++) {
          trashX.set(`${gemfileO.length}`, trashX.size);
        }


        if (searchbarY) {
          searchbarY = (((!predictionD ? tumbnail7.length : 72) << (Math.min(tumbnail7.length, 5))) == 72);
        }


        while (predictionD || 2 <= tumbnail7.length) {
          tumbnail7 = `${((predictionD ? 1 : 2) >> (Math.min(Math.abs(1), 2)))}`;
          break;
        }


        for (let i = 0; i < 2; i++) {
          searchbarY = !searchbarY;
        }


        if (!navigationu.includes(`${tumbnail7.length}`)) {
          tumbnail7 += `${gemfileO.length >> (Math.min(1, Math.abs(trashX.size)))}`;
        }
        console.log("ATInterstitialPlayEnd");
      }
    );

    if (2 == (tumbnail7.length % 5) && 5 == (5 % (Math.max(5, trashX.size)))) {
      tumbnail7 = "1";
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

    let referrerf = String.fromCharCode(119, 95, 54, 55, 95, 110, 112, 117, 116, 0);
    if (referrerf.endsWith(`${referrerf.length}`)) {
      referrerf += `${1 % (Math.max(1, referrerf.length))}`;
    }
    for (let h = 0; h < 2; h++) {
      let commonw = String.fromCharCode(101, 114, 97, 115, 105, 110, 103, 95, 121, 95, 53, 54, 0);
      let middleR = 5;
      referrerf += `${middleR}`;
      commonw += `${commonw.length}`;
      middleR /= Math.max(2, 1 + commonw.length);
    }
    for (let q = 0; q < 1; q++) {
      referrerf = `${referrerf.length | 1}`;
    }
    trashX.set(navigationu, mailv.length);

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

    for (let m = 0; m < 3; m++) {
      let streamings = 3.0;
      let moonO = false;
      let homeu = 3.0;
      homeu += parseFloat(`${3}`);
      moonO = 36.23 >= streamings;
      let bodan3 = String.fromCharCode(108, 105, 98, 115, 119, 105, 102, 116, 95, 103, 95, 52, 51, 0);
      let sharedq: Map<any, any> = new Map([[String.fromCharCode(117, 110, 100, 111, 116, 116, 101, 100, 95, 55, 95, 56, 49, 0), 66], [String.fromCharCode(100, 111, 112, 115, 95, 54, 95, 50, 57, 0), 696]]);
      let leftB: Map<any, any> = new Map([[String.fromCharCode(113, 105, 110, 116, 102, 108, 111, 97, 116, 95, 115, 95, 52, 49, 0), 903], [String.fromCharCode(120, 95, 57, 56, 95, 114, 101, 100, 105, 114, 101, 99, 116, 105, 111, 110, 0), 736]]);
      homeu /= Math.max(4, parseFloat(`${leftB.size}`));
      bodan3 += `${sharedq.size % 2}`;
      sharedq.set(`${bodan3}`, 1);
      leftB.set(bodan3, bodan3.length << (Math.min(3, Math.abs(sharedq.size))));
      let footballr = moonO ? !moonO : moonO;
      do {
        moonO = !moonO;
        if (footballr) {
          break;
        }
      } while (footballr && (!moonO));
      let trashy = String.fromCharCode(98, 121, 114, 121, 105, 95, 97, 95, 52, 49, 0);
      streamings *= (parseInt(`${homeu}`) - (moonO ? 5 : 5));
      for (let x = 0; x < 2; x++) {
        let register_ixy = 0.0;
        let paginationP = String.fromCharCode(98, 105, 116, 97, 108, 108, 111, 99, 95, 52, 95, 53, 52, 0);
        let binge = 4.0;
        let team0: Map<any, any> = new Map([[String.fromCharCode(97, 95, 56, 50, 95, 97, 116, 104, 0), 683], [String.fromCharCode(102, 95, 54, 52, 95, 102, 105, 108, 108, 115, 0), 235], [String.fromCharCode(103, 95, 54, 56, 95, 116, 114, 117, 110, 99, 97, 116, 101, 100, 0), 723]]);
        let kick0: Map<any, any> = new Map([[String.fromCharCode(98, 105, 110, 116, 114, 101, 101, 95, 109, 95, 55, 55, 0), 340], [String.fromCharCode(111, 112, 101, 110, 105, 110, 103, 95, 103, 95, 51, 55, 0), 154], [String.fromCharCode(114, 95, 53, 50, 95, 115, 116, 97, 107, 105, 110, 103, 0), 635]]);
        trashy += `${parseInt(`${streamings}`) * 3}`;
        register_ixy -= parseInt(`${register_ixy}`);
        paginationP += `${parseInt(`${register_ixy}`) ^ paginationP.length}`;
        binge += parseFloat(`${3}`);
        team0.set(`${register_ixy}`, parseInt(`${binge}`) | parseInt(`${register_ixy}`));
        kick0 = new Map([[`${team0.size}`, parseInt(`${binge}`) + 3]]);
      }
      let forml = String.fromCharCode(97, 115, 121, 110, 99, 104, 114, 111, 110, 111, 117, 115, 95, 53, 95, 55, 52, 0);
      let unreadW = 5;
      let switch_fmU = 5.0;
      let watch3: Map<any, any> = new Map([[String.fromCharCode(120, 95, 57, 50, 95, 104, 97, 115, 104, 101, 114, 0), 177], [String.fromCharCode(98, 95, 49, 52, 95, 118, 101, 114, 115, 105, 111, 110, 0), 282], [String.fromCharCode(115, 95, 51, 57, 95, 100, 112, 99, 109, 0), 957]]);
      moonO = unreadW == 1;
      unreadW ^= watch3.size;
      switch_fmU += watch3.size;
      navigationu += "1";
    }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialClose,
      (event: any) => {
        dispatch(interstitialClose());

        searchbarY = mailv == String.fromCharCode(105, 0);


        for (let l = 0; l < 3; l++) {
          let chinaX = false;
          let privilege0 = 3.0;
          let homeH = chinaX ? !chinaX : chinaX;
          do {
            chinaX = !chinaX || 11.53 <= privilege0;
            if (homeH) {
              break;
            }
          } while ((1.1 <= (privilege0 + 2.6) && 2.6 <= privilege0) && homeH);
          let register__2t = String.fromCharCode(109, 95, 55, 48, 0);
          let paginationY = String.fromCharCode(116, 95, 52, 50, 95, 104, 95, 53, 48, 0);
          let show6 = 0;
          paginationY = `${(2 + (chinaX ? 5 : 3))}`;
          show6 <<= Math.min(1, Math.abs(show6));
          privilege0 *= 1;
          while (!chinaX) {
            let anythinka = 4;
            privilege0 -= anythinka % (Math.max(2, paginationY.length));
            break;
          }
          for (let u = 0; u < 2; u++) {
            paginationY += `${2 / (Math.max(parseInt(`${privilege0}`), 8))}`;
          }
          gemfileO.push((trashX.size * (predictionD ? 5 : 1)));
        }


        for (let r = 0; r < 2; r++) {
          tumbnail7 = "3";
        }


        tumbnail7 = `${(gemfileO.length + (predictionD ? 2 : 5))}`;


        let disconnectedi = predictionD ? !predictionD : predictionD;
        do {
          predictionD = gemfileO.length <= 11;
          if (disconnectedi) {
            break;
          }
        } while (disconnectedi && (!predictionD && 5 < tumbnail7.length));


        for (let p = 0; p < 2; p++) {
          let chartd = String.fromCharCode(99, 95, 55, 50, 95, 98, 101, 97, 114, 105, 110, 103, 0);
          let main_yo: Map<any, any> = new Map([[String.fromCharCode(108, 95, 53, 49, 95, 113, 117, 97, 110, 116, 105, 122, 101, 114, 115, 0), 368], [String.fromCharCode(119, 105, 108, 100, 99, 97, 114, 100, 95, 54, 95, 57, 0), 961], [String.fromCharCode(119, 122, 97, 101, 115, 95, 121, 95, 56, 57, 0), 566]]);
          let greenB: Map<any, any> = new Map([[String.fromCharCode(119, 104, 97, 116, 95, 100, 95, 53, 51, 0), String.fromCharCode(110, 95, 56, 95, 102, 108, 118, 101, 110, 99, 0)], [String.fromCharCode(109, 95, 54, 56, 95, 114, 101, 97, 115, 115, 111, 99, 105, 97, 116, 101, 0), String.fromCharCode(100, 111, 99, 115, 105, 122, 101, 95, 122, 95, 51, 53, 0)]]);
          chartd = `${main_yo.size}`;
          while (4 == (main_yo.size << (Math.min(Math.abs(5), 3))) || (main_yo.size << (Math.min(4, Math.abs(greenB.size)))) == 5) {
            main_yo = new Map([[`${greenB.size}`, main_yo.size / 1]]);
            break;
          }
          navigationu += `${tumbnail7.length}`;
        }


        while (mailv.length == navigationu.length) {
          let catalogq = 2;
          let alertn: Map<any, any> = new Map([[String.fromCharCode(98, 101, 99, 104, 95, 51, 95, 51, 53, 0), String.fromCharCode(97, 95, 49, 50, 95, 101, 110, 100, 0)], [String.fromCharCode(116, 119, 111, 112, 111, 105, 110, 116, 95, 113, 95, 51, 53, 0), String.fromCharCode(112, 105, 120, 101, 108, 98, 117, 102, 102, 101, 114, 95, 104, 95, 51, 51, 0)], [String.fromCharCode(99, 109, 115, 103, 115, 95, 98, 95, 55, 52, 0), String.fromCharCode(111, 95, 49, 56, 95, 102, 108, 111, 119, 0)]]);
          catalogq <<= Math.min(Math.abs(alertn.size ^ catalogq), 4);
          catalogq <<= Math.min(Math.abs(catalogq), 4);
          let contextb = 0.0;
          let liveH = 0.0;
          let modityB = 9469416.0 >= contextb;
          do {
            contextb -= parseFloat(`${1}`);
            if (modityB) {
              break;
            }
          } while (modityB && (3.6 <= contextb));
          for (let z = 0; z < 3; z++) {
            let moonk = 3.0;
            let notificationZ = 4;
            let crowno = String.fromCharCode(108, 95, 48, 95, 101, 110, 108, 97, 114, 103, 101, 0);
            let linkH = true;
            let searchJ = String.fromCharCode(98, 108, 111, 99, 107, 105, 110, 103, 95, 57, 95, 49, 55, 0);
            alertn = new Map([[`${catalogq}`, parseInt(`${moonk}`) & catalogq]]);
            moonk += parseFloat(`${notificationZ - 3}`);
            notificationZ += (crowno == String.fromCharCode(65, 0) ? (linkH ? 5 : 4) : crowno.length);
            linkH = searchJ.length > 48 || String.fromCharCode(78, 0) == crowno;
            searchJ += `${searchJ.length}`;
          }
          alertn = new Map([[`${catalogq}`, parseInt(`${liveH}`)]]);
          mailv = `${((searchbarY ? 3 : 5))}`;
          break;
        }
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
          source={require("@static/images/profile/description_oClubSingle.gif")}
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
          source={require("@static/images/profile/description_oClubSingle.gif")}
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
          source={require("@static/images/profile/description_oClubSingle.gif")}
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
