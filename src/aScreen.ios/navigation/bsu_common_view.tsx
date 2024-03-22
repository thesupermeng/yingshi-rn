

class Delegate_mWhatsappShared {
    static baiduCenterBorderlessZhubo = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { AllCommentScreen } from "../screens/bx_navigation_alert";
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
import PlaylistTabIcon from "@static/images/matchAnner.svg";
import PlaylistActiveTabIcon from "@static/images/analyticsFirebaseSuggestion.svg";
import ProfileTabIcon from "@static/images/downloadingLeague.svg";
import ProfileActiveTabIcon from "@static/images/twitterInjury.svg";
import WatchAnytimeTabIcon from "@static/images/bootPhotoStyle.svg";
import WatchAnytimeActiveTabIcon from "@static/images/agreementPressure.svg";
import UploadTabIcon from "@static/images/combineStatistics.svg";
import UploadActiveTabIcon from "@static/images/smallSearch.svg";
import CatalogScreen from "../screens/Common/yag_views_resend";
import ShortVodCollectionScreen from "../screens/Profile/Collection/cs_button_pressure";
import SportsIcon from "@static/images/firebasePrivate_teConnection.svg";
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
import { LogBox, Platform, StyleSheet, Text, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/kg_index";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_DOMAIN, UMENG_CHANNEL } from "@utility/n_subs_interstitial";
import { KLongNext } from "../../../z_search";
import {
  hideLoginAction,
  interstitialClose,
  interstitialShow,
  removeScreenAction,
  resetBottomSheetAction,
  resetSportWatchTime,
  showLoginAction,
} from "@redux/actions/a_switch";
import { Dialog } from "@rneui/themed";
import FastImage from "../components/common/gwi_with";
import { screenModel } from "@type/nb_shared_target";
import { YingshiDarkTheme, YingshiLightTheme } from "@utility/qxb_penalty_ping";


import {
  updateUserAuth,
  updateUserReferral,
} from "@redux/actions/rk_filed_watch";
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
import { AdsBannerContext } from "../../contexts/os_baidu_show";
import VIP from "../screens/Profile/kgc_sport_sans";
import { withIAPContext } from "react-native-iap";
import { VipDetails } from "../components/vip/ocb_schedule";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { ATInterstitialRNSDK } from "./../../../AnyThinkAds/n_point";
import { THFirebase } from "@api";
import { CRouteInitializer } from "../../routes/dqb_wind_league";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";
import { toggleDarkTheme, toggleLightTheme } from "@redux/actions/x_privilege";
import { UploadVideo } from "../screens/upload/iu_quest_taiwan";
import { UploadVideoPreview } from "../screens/upload/d_collection_user_view";
import { UploadHistory } from "../screens/upload/ye_analytic";
import { loginChecking } from "../../routes/tvl_club";

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

  useLayoutEffect(() => {
    
    dispatch(toggleLightTheme());
  }, []);

  const HomeTabScreen = useCallback(() => {
       let memberO = String.fromCharCode(109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,95,116,95,50,56,0);
    let eighteenr = String.fromCharCode(97,117,120,95,101,95,56,53,0);
    let ballJ = String.fromCharCode(110,95,52,53,95,100,121,110,97,109,105,99,115,0);
    let collectiono = 1;
    let gesturess = 3.0;
    let closes: Array<any> = [String.fromCharCode(104,95,53,50,95,115,109,112,116,101,104,100,98,97,114,115,0), String.fromCharCode(116,95,55,56,95,100,101,99,111,114,0), String.fromCharCode(101,110,113,117,101,117,101,95,48,95,57,54,0)];
    let philippines6 = 5.0;
    let analytics4 = 5;
    let singleF = true;
    let gpayn = String.fromCharCode(99,111,100,101,98,111,111,107,95,106,95,53,51,0);
    let incidentU = 5.0;
    let twitterZ = String.fromCharCode(97,118,97,105,108,97,98,108,101,95,112,95,54,48,0);
      analytics4 += (eighteenr == String.fromCharCode(122,0) ? gpayn.length : eighteenr.length);
      analytics4 -= parseInt(`${philippines6}`);
   for (let u = 0; u < 3; u++) {
      gesturess -= 2 + eighteenr.length;
   }
      closes = [ballJ.length >> (Math.min(5, Math.abs(parseInt(`${gesturess}`))))];
   let home6 = 9532235 >= ballJ.length;
   do {
       let userZ = false;
       let matchesT = 0.0;
      if (userZ && 5.7 <= (matchesT - 3.33)) {
          let actionsk = 0.0;
          let watchL = true;
          let unreadc: Map<any, any> = new Map([[String.fromCharCode(121,95,55,57,95,101,118,97,108,117,97,116,101,100,0),String.fromCharCode(110,95,52,53,95,108,105,115,116,101,100,0)], [String.fromCharCode(102,111,108,108,111,119,101,114,115,95,97,95,51,51,0),String.fromCharCode(108,115,112,114,95,51,95,53,0)]]);
          let matchH = true;
          let statsa = 1.0;
         matchesT -= parseInt(`${statsa}`);
         actionsk += ((watchL ? 5 : 2) ^ (matchH ? 1 : 5));
         watchL = actionsk < 48.70;
         unreadc.set(`${matchH}`, (parseInt(`${actionsk}`) + (matchH ? 2 : 2)));
      }
         matchesT += 3 / (Math.max(7, parseInt(`${matchesT}`)));
      for (let l = 0; l < 3; l++) {
          let floating1: Map<any, any> = new Map([[String.fromCharCode(103,95,57,50,95,99,97,108,99,117,108,97,116,101,0),327], [String.fromCharCode(115,95,55,51,95,105,100,97,116,97,0),706]]);
          let historyY: Map<any, any> = new Map([[String.fromCharCode(101,95,53,52,95,98,117,116,116,101,114,102,108,121,0),885], [String.fromCharCode(115,117,114,112,114,105,115,101,100,95,99,95,49,50,0),976], [String.fromCharCode(98,97,111,98,97,98,95,121,95,55,48,0),785]]);
         matchesT += historyY.size % (Math.max(2, 7));
         floating1 = new Map([[`${floating1.size}`, floating1.size & 1]]);
         historyY.set(`${floating1.size}`, floating1.size);
      }
          let moong = String.fromCharCode(101,108,108,105,112,116,105,99,95,111,95,49,50,0);
         userZ = !userZ;
         moong = `${moong.length & moong.length}`;
          let other7: Map<any, any> = new Map([[String.fromCharCode(102,97,97,110,105,100,99,116,95,111,95,49,50,0),true ], [String.fromCharCode(107,105,108,108,95,110,95,49,57,0),false ]]);
          let backS = String.fromCharCode(120,99,104,97,99,104,97,95,104,95,50,52,0);
          let movies1 = String.fromCharCode(105,95,54,50,95,115,101,101,100,101,100,0);
         matchesT -= 1 / (Math.max(5, parseInt(`${matchesT}`)));
         other7.set(`${movies1}`, (String.fromCharCode(102,0) == movies1 ? movies1.length : other7.size));
         backS = `${other7.size << (Math.min(movies1.length, 2))}`;
         userZ = !userZ;
      ballJ += `${closes.length}`;
      if (home6) {
         break;
      }
   } while (home6 && (!ballJ.endsWith(`${singleF}`)));
   while (ballJ.includes(`${collectiono}`)) {
      ballJ += `${(2 + (singleF ? 3 : 1))}`;
      break;
   }
   let settingsf = collectiono >= 6366043;
   do {
      collectiono >>= Math.min(2, Math.abs(parseInt(`${philippines6}`)));
      if (settingsf) {
         break;
      }
   } while ((closes.length <= 2) && settingsf);
   let confirmationy = analytics4 <= 6216733;
   do {
       let showi = 0;
      for (let m = 0; m < 3; m++) {
         showi *= 3;
      }
       let overv = false;
       let handler7 = false;
      for (let t = 0; t < 2; t++) {
         handler7 = (overv ? handler7 : !overv);
      }
      analytics4 -= eighteenr.length / 2;
      if (confirmationy) {
         break;
      }
   } while ((5 < analytics4) && confirmationy);
      eighteenr += `${parseInt(`${gesturess}`) / (Math.max(1, 4))}`;
      gesturess /= Math.max(parseInt(`${philippines6}`) / 3, 4);
      philippines6 += parseFloat(`${parseInt(`${gesturess}`)}`);
   for (let z = 0; z < 1; z++) {
      closes = [gpayn.length];
   }
   for (let v = 0; v < 2; v++) {
      gesturess *= parseInt(`${philippines6}`) ^ 1;
   }
       let assistS = String.fromCharCode(99,95,55,52,95,113,117,97,110,116,105,116,121,0);
         assistS = `${assistS.length}`;
      if (!assistS.includes(assistS)) {
          let specU = 3.0;
          let backE = 1.0;
          let sinas: Map<any, any> = new Map([[String.fromCharCode(100,95,51,95,99,111,109,112,97,99,116,0),272], [String.fromCharCode(105,100,101,111,95,106,95,55,57,0),115]]);
          let filedZ = String.fromCharCode(108,111,99,97,108,105,116,121,95,109,95,56,50,0);
         assistS = `${1 / (Math.max(2, sinas.size))}`;
         specU -= parseFloat(`${parseInt(`${specU}`) >> (Math.min(1, Math.abs(parseInt(`${backE}`))))}`);
         backE /= Math.max(5, 1);
         sinas.set(`${specU}`, 2 + parseInt(`${specU}`));
         filedZ += `${3 | parseInt(`${specU}`)}`;
      }
      if (5 < assistS.length || assistS.length < 5) {
         assistS = `${assistS.length / 3}`;
      }
      philippines6 += parseFloat(`${2}`);
   if (closes.length < 3) {
      collectiono <<= Math.min(1, memberO.length);
   }
      collectiono ^= eighteenr.length;
   if ((2.97 * gesturess) > 4.15) {
      ballJ += `${parseInt(`${philippines6}`) >> (Math.min(3, Math.abs(analytics4)))}`;
   }
   for (let h = 0; h < 2; h++) {
       let matchesTQ = true;
       let dialog0 = 0.0;
       let catagoryp: Array<any> = [String.fromCharCode(110,116,105,108,101,95,111,95,52,52,0), String.fromCharCode(100,101,116,95,50,95,52,49,0), String.fromCharCode(118,116,97,98,95,57,95,51,57,0)];
       let pressure1: Array<any> = [997, 323, 474];
       let friendsA = 2.0;
         matchesTQ = 97.21 == friendsA;
      if ((5.7 * friendsA) >= 3.65) {
         friendsA /= Math.max(parseInt(`${dialog0}`) + 3, 4);
      }
         dialog0 += parseInt(`${dialog0}`);
         catagoryp.push(pressure1.length + parseInt(`${dialog0}`));
       let emojiI = String.fromCharCode(118,108,99,115,112,101,99,95,120,95,53,51,0);
       let remindery = String.fromCharCode(112,114,117,110,105,110,103,95,108,95,53,51,0);
       let detailsp = String.fromCharCode(113,95,56,49,95,100,114,97,119,105,110,103,0);
       let customM = String.fromCharCode(105,110,116,114,97,102,114,97,109,101,95,113,95,52,53,0);
      let rankf = 9768370 <= customM.length;
      do {
         customM += `${parseInt(`${dialog0}`)}`;
         if (rankf) {
            break;
         }
      } while ((detailsp == customM) && rankf);
      for (let b = 0; b < 2; b++) {
         catagoryp.push(2);
      }
      if ((catagoryp.length ^ 2) == 2) {
         catagoryp.push(2 % (Math.max(9, emojiI.length)));
      }
         pressure1 = [parseInt(`${friendsA}`)];
      while (2 > detailsp.length) {
         detailsp += `${3 / (Math.max(9, remindery.length))}`;
         break;
      }
      if ((pressure1.length * catagoryp.length) == 1 && (1 * catagoryp.length) == 2) {
          let type_tol = String.fromCharCode(107,95,56,55,95,109,115,117,98,0);
          let gemfileP = String.fromCharCode(107,95,49,56,95,105,110,102,101,114,0);
          let faviconj = String.fromCharCode(99,95,55,55,95,99,111,108,111,114,101,100,0);
          let moreG = 4.0;
         pressure1 = [type_tol.length];
         type_tol = `${1 << (Math.min(3, faviconj.length))}`;
         gemfileP = `${parseInt(`${moreG}`) ^ gemfileP.length}`;
         faviconj = `${gemfileP.length << (Math.min(3, Math.abs(parseInt(`${moreG}`))))}`;
      }
      if ((friendsA / (Math.max(catagoryp.length, 2))) < 1.24) {
         friendsA -= parseInt(`${friendsA}`) * 2;
      }
      while ((pressure1.length / 3) > 2 || (pressure1.length / 3) > 2) {
          let filledN = 2.0;
         emojiI = `${catagoryp.length}`;
         filledN += parseFloat(`${parseInt(`${filledN}`)}`);
         break;
      }
         customM += `${detailsp.length & customM.length}`;
      closes = [analytics4];
   }
       let description_bQ = 1.0;
       let desct = 2.0;
          let sideY = 3;
          let profileB = false;
         description_bQ -= 1 << (Math.min(Math.abs(sideY), 5));
         sideY ^= ((profileB ? 2 : 1));
      let cnewsx = description_bQ >= 8535209.0;
      do {
          let faviconZ = 1.0;
          let predictionR = 0.0;
          let crossw = 5.0;
          let middleq = 1.0;
          let teams: Map<any, any> = new Map([[String.fromCharCode(105,110,118,97,114,105,97,110,116,115,95,119,95,57,50,0),false ], [String.fromCharCode(105,110,102,111,114,109,97,116,105,111,110,95,97,95,49,48,48,0),false ], [String.fromCharCode(115,117,98,99,108,97,115,115,101,115,95,56,95,49,48,48,0),false ]]);
         description_bQ += teams.size;
         faviconZ *= parseFloat(`${2}`);
         predictionR /= Math.max(4, parseFloat(`${parseInt(`${crossw}`)}`));
         middleq += parseInt(`${crossw}`);
         teams = new Map([[`${crossw}`, 1]]);
         if (cnewsx) {
            break;
         }
      } while (cnewsx && (2.75 >= desct));
      for (let l = 0; l < 3; l++) {
          let interstitialS = 1.0;
          let alertD = 4.0;
          let iconE = 4.0;
         desct += parseFloat(`${parseInt(`${alertD}`) ^ parseInt(`${interstitialS}`)}`);
         interstitialS /= Math.max(5, 3);
         alertD *= parseInt(`${iconE}`);
      }
      let showe = description_bQ <= 5600276.0;
      do {
         description_bQ -= 1 ^ parseInt(`${desct}`);
         if (showe) {
            break;
         }
      } while (showe && (1.23 <= (desct - description_bQ) && (desct - description_bQ) <= 1.23));
          let bingN: Array<any> = [46, 746];
          let recommendation9: Array<any> = [String.fromCharCode(108,95,54,48,95,106,117,115,116,105,102,105,101,100,0), String.fromCharCode(104,105,103,104,108,105,103,116,104,101,100,95,113,95,54,55,0)];
         description_bQ -= 2 - parseInt(`${desct}`);
         bingN.push(1);
         recommendation9 = [3 & recommendation9.length];
         description_bQ *= parseInt(`${description_bQ}`) + parseInt(`${desct}`);
      gpayn += `${parseInt(`${description_bQ}`)}`;
   while (!gpayn.includes(`${incidentU}`)) {
      gpayn += `${2 ^ memberO.length}`;
      break;
   }
   let actionsw = 8892376 <= twitterZ.length;
   do {
       let tempc = String.fromCharCode(120,95,52,52,95,99,111,100,101,99,112,97,114,0);
       let sort3 = 4.0;
       let delegate_5b = 5.0;
       let delegate_taH = String.fromCharCode(112,111,115,116,112,114,111,99,95,106,95,51,0);
         delegate_taH += `${(String.fromCharCode(109,0) == delegate_taH ? parseInt(`${sort3}`) : delegate_taH.length)}`;
      while ((parseInt(`${sort3}`) + tempc.length) < 4 && 5.94 < (sort3 + 4.28)) {
          let tumbnailo = 2.0;
          let basketballV = 3.0;
          let lightO: Array<any> = [486, 364, 946];
          let nterstitiala = 1.0;
         sort3 *= 1;
         tumbnailo -= parseInt(`${tumbnailo}`) >> (Math.min(lightO.length, 3));
         basketballV -= 3;
         lightO = [1];
         nterstitiala /= Math.max(parseInt(`${nterstitiala}`), 4);
         break;
      }
      let heartq = 8427631.0 >= delegate_5b;
      do {
          let loadingG: Array<any> = [475, 649, 473];
          let scheduleP = String.fromCharCode(98,95,53,95,99,97,115,101,100,0);
          let time_sF = false;
          let i_lockO = String.fromCharCode(112,97,101,116,104,95,56,95,50,53,0);
          let sentry1 = 0;
         delegate_5b += loadingG.length / (Math.max(delegate_taH.length, 5));
         loadingG = [1];
         scheduleP = `${sentry1 / (Math.max(1, 8))}`;
         time_sF = time_sF && i_lockO.length < 73;
         i_lockO += `${i_lockO.length}`;
         sentry1 *= 3 << (Math.min(3, Math.abs(sentry1)));
         if (heartq) {
            break;
         }
      } while ((1 >= (5 + delegate_taH.length)) && heartq);
       let injury1 = 2;
         injury1 %= Math.max(1, tempc.length % (Math.max(delegate_taH.length, 1)));
         delegate_taH += `${3 * delegate_taH.length}`;
      for (let r = 0; r < 3; r++) {
         tempc = `${injury1}`;
      }
      for (let u = 0; u < 3; u++) {
         delegate_taH = `${(String.fromCharCode(113,0) == tempc ? parseInt(`${sort3}`) : tempc.length)}`;
      }
      let time_3Z = tempc == String.fromCharCode(116,106,98,0);
      do {
         tempc = `${parseInt(`${sort3}`) - 3}`;
         if (time_3Z) {
            break;
         }
      } while ((3 == (parseInt(`${sort3}`) - tempc.length)) && time_3Z);
      let handlerz = 8195300 >= injury1;
      do {
         injury1 -= tempc.length;
         if (handlerz) {
            break;
         }
      } while ((5 < (delegate_taH.length | injury1) || (5 | delegate_taH.length) < 5) && handlerz);
      while ((tempc.length * 4) == 4 || 4 == (parseInt(`${sort3}`) / (Math.max(8, tempc.length)))) {
          let placementD = false;
          let downloaderG = 2;
          let rewindW = 2.0;
          let upgrade3: Array<any> = [443, 929, 591];
          let q_imagez = 1.0;
         tempc = `${parseInt(`${q_imagez}`) & 3}`;
         placementD = 59 > downloaderG && 90.32 > rewindW;
         downloaderG += parseInt(`${rewindW}`);
         upgrade3 = [3];
         q_imagez -= 2;
         break;
      }
          let miniY = 1.0;
         delegate_taH = `${parseInt(`${miniY}`)}`;
      twitterZ += `${delegate_taH.length - parseInt(`${philippines6}`)}`;
      if (actionsw) {
         break;
      }
   } while ((4 <= twitterZ.length) && actionsw);
   while (gpayn.length <= 1) {
      gpayn += "3";
      break;
   }

    return (
      <HomeTab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle:
            hasNotch || Platform.OS === "android"
              ? styles.navStyleWithNotch
              : styles.navStyle,
          tabBarLabelStyle: {
            paddingBottom: 6,
          },
          tabBarLabel: (props) => {
            if (route.name === "上传") return undefined;

            return <Text style={{ color: props.color }}>
              {props.children}
            </Text>
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
            } else if (route.name === "发现") {
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
            } else if (route.name === "解说") {
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
            } else if (route.name === "体育") {
              icon = focused ? (
                <SportsIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <SportsIcon
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            } else if (route.name === "上传") {
              icon = focused ? (
                <UploadActiveTabIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <UploadTabIcon
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
            <HomeTab.Screen name="解说" component={WatchAnytime} />
            {/* <HomeTab.Screen name="体育" component={MatchesScreen} /> */}
            <HomeTab.Screen name="上传" component={UploadVideo} />
            <HomeTab.Screen name="发现" component={PlaylistScreen} />
            <HomeTab.Screen name="我的" component={ProfileScreen} />
          </>
        ) : (
          <>
            <HomeTab.Screen name="首页" component={HomeScreen} />
            <HomeTab.Screen name="解说" component={WatchAnytime} />
            <HomeTab.Screen name="上传" component={UploadVideo} />
            <HomeTab.Screen name="发现" component={PlaylistScreen} />
            <HomeTab.Screen name="我的" component={ProfileScreen} />
          </>
        )}
      </HomeTab.Navigator>
    );
  }, [theme]);

  const refreshUserState = async () => {
       let selection2 = 2.0;
    let windN = String.fromCharCode(98,105,103,95,103,95,55,50,0);
    let short_aou: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,116,101,95,111,95,49,54,0),533], [String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,95,100,95,54,54,0),835], [String.fromCharCode(114,101,116,117,114,110,101,100,95,120,95,50,54,0),200]]);
    let l_imageT = String.fromCharCode(116,95,52,57,95,110,98,105,111,0);
    let bufferm = 3.0;
    let video9 = 0;
    let eact4 = 5;
    let comment_ = String.fromCharCode(121,95,57,95,115,101,116,114,97,110,103,101,0);
    let roome = String.fromCharCode(117,95,50,48,95,118,97,108,105,100,97,116,101,0);
    let resendB = String.fromCharCode(115,117,98,112,97,99,107,101,116,95,100,95,52,0);
    let hooksf = 1.0;
    let chinaC = 4.0;
    let tumbnailo: Array<any> = [979, 388, 235];
      l_imageT += `${l_imageT.length ^ eact4}`;
   let settingsL = String.fromCharCode(54,106,116,107,0) == windN;
   do {
      windN += `${comment_.length}`;
      if (settingsL) {
         break;
      }
   } while ((4 <= windN.length) && settingsL);
   while (4 < resendB.length) {
      resendB = `${windN.length}`;
      break;
   }
   for (let l = 0; l < 3; l++) {
      bufferm /= Math.max(4, (roome == String.fromCharCode(84,0) ? resendB.length : roome.length));
   }

    const result = await THFirebase.getUserDetails();

      selection2 *= windN.length * 2;
      resendB = `${resendB.length}`;
       let backwardP = false;
       let guidei = String.fromCharCode(97,95,52,53,95,116,117,110,105,110,103,0);
       let areaj = 1.0;
         areaj += ((backwardP ? 3 : 1) ^ 3);
      let minimizel = 7472520.0 >= areaj;
      do {
         areaj /= Math.max(2, 2);
         if (minimizel) {
            break;
         }
      } while (minimizel && (3 == guidei.length));
         backwardP = guidei.length == 66;
         guidei = `${guidei.length + 2}`;
      if (!backwardP) {
         guidei += `${guidei.length}`;
      }
       let actionsR = String.fromCharCode(97,95,56,53,95,109,117,108,116,105,98,97,115,101,0);
         backwardP = guidei.includes(`${backwardP}`);
          let reducerb = 4.0;
          let accepted1 = String.fromCharCode(112,95,50,54,95,116,101,115,116,111,114,105,103,0);
          let x_lockV = 4.0;
         guidei = `${guidei.length + 2}`;
         reducerb -= parseFloat(`${2 % (Math.max(parseInt(`${reducerb}`), 3))}`);
         accepted1 += `${accepted1.length}`;
         x_lockV *= parseInt(`${x_lockV}`) % (Math.max(2, 2));
      let smallG = actionsR.length >= 5735198;
      do {
         actionsR = `${1 >> (Math.min(Math.abs(parseInt(`${areaj}`)), 5))}`;
         if (smallG) {
            break;
         }
      } while (smallG && (5 < (actionsR.length << (Math.min(Math.abs(1), 2))) || (actionsR.length ^ 1) < 3));
      l_imageT = `${parseInt(`${selection2}`) | 3}`;
   for (let k = 0; k < 1; k++) {
      l_imageT = `${eact4}`;
   }
    if (result == null) {

      selection2 /= Math.max(4, video9);
      bufferm += 2;
   if (4.64 > (5.19 - selection2)) {
      video9 &= 1 + roome.length;
   }
   let description_q8S = roome.length <= 9842797;
   do {
       let verticalD = String.fromCharCode(99,111,110,118,101,114,116,111,114,95,112,95,54,49,0);
       let pausem = false;
       let gmailQ = String.fromCharCode(103,95,49,54,95,112,114,111,98,101,114,0);
       let tickede = String.fromCharCode(112,95,54,53,95,99,111,110,115,116,114,97,105,110,116,0);
       let mode5 = String.fromCharCode(100,101,112,97,99,107,101,116,105,122,101,114,95,102,95,53,48,0);
         gmailQ = "1";
      let tick5 = pausem ? !pausem : pausem;
      do {
         pausem = (35 <= (verticalD.length << (Math.min(3, Math.abs((!pausem ? verticalD.length : 35))))));
         if (tick5) {
            break;
         }
      } while ((tickede.includes(`${pausem}`)) && tick5);
         mode5 += `${tickede.length ^ 3}`;
         gmailQ += `${(1 * (pausem ? 1 : 4))}`;
      while (gmailQ.includes(`${pausem}`)) {
          let giftY = 3.0;
          let text8 = String.fromCharCode(101,114,114,115,116,114,95,117,95,54,49,0);
         pausem = 39 == tickede.length;
         giftY *= text8.length;
         text8 += `${1 * text8.length}`;
         break;
      }
          let guideb = 4.0;
          let phonea = String.fromCharCode(98,95,55,95,112,111,115,115,105,98,108,121,0);
         tickede = `${(verticalD.length + (pausem ? 2 : 1))}`;
         guideb += 2 * phonea.length;
         phonea += `${(String.fromCharCode(104,0) == phonea ? phonea.length : parseInt(`${guideb}`))}`;
         pausem = tickede == String.fromCharCode(80,0);
      let injuryI = 8194241 <= mode5.length;
      do {
         mode5 = "1";
         if (injuryI) {
            break;
         }
      } while ((mode5 != String.fromCharCode(74,0) && tickede.length < 5) && injuryI);
         gmailQ = `${(tickede == String.fromCharCode(72,0) ? tickede.length : verticalD.length)}`;
         pausem = verticalD.length <= 57 && !pausem;
         verticalD += `${(String.fromCharCode(85,0) == verticalD ? tickede.length : verticalD.length)}`;
      let brightnessO = verticalD == String.fromCharCode(120,101,51,104,99,53,48,0);
      do {
         verticalD = `${(String.fromCharCode(77,0) == gmailQ ? (pausem ? 1 : 5) : gmailQ.length)}`;
         if (brightnessO) {
            break;
         }
      } while ((5 >= gmailQ.length && 5 >= verticalD.length) && brightnessO);
         mode5 += `${verticalD.length}`;
         verticalD += `${((pausem ? 1 : 4))}`;
          let description_mef = 4;
          let previewg: Map<any, any> = new Map([[String.fromCharCode(107,102,119,114,105,116,101,95,114,95,49,0),297], [String.fromCharCode(109,101,115,115,97,103,105,110,103,95,114,95,54,57,0),459], [String.fromCharCode(114,101,99,97,108,99,117,108,97,116,101,95,108,95,54,55,0),673]]);
         pausem = gmailQ.length == tickede.length;
         description_mef <<= Math.min(2, Math.abs(1));
         previewg = new Map([[`${previewg.size}`, 1]]);
      roome = "2";
      if (description_q8S) {
         break;
      }
   } while (description_q8S && (roome.length <= comment_.length));
      await AsyncStorage.removeItem("showAds");

       let downloadedx = 2;
         downloadedx *= 2 | downloadedx;
         downloadedx *= downloadedx + downloadedx;
      let turnW = downloadedx <= 6349944;
      do {
         downloadedx <<= Math.min(1, Math.abs(2));
         if (turnW) {
            break;
         }
      } while ((3 < (downloadedx << (Math.min(Math.abs(2), 4)))) && turnW);
      windN += `${video9}`;
   while ((video9 ^ 2) < 3 && 4 < (video9 ^ 2)) {
       let blackh = 1.0;
      let datah = 9548857.0 <= blackh;
      do {
         blackh /= Math.max(3, parseFloat(`${1}`));
         if (datah) {
            break;
         }
      } while (datah && (2.34 > (blackh * 3)));
      let rankV = 6879187.0 <= blackh;
      do {
          let detailsf = String.fromCharCode(109,101,109,120,95,120,95,53,49,0);
         blackh += parseFloat(`${3}`);
         detailsf = `${(detailsf == String.fromCharCode(95,0) ? detailsf.length : detailsf.length)}`;
         if (rankV) {
            break;
         }
      } while ((4.68 >= (blackh + blackh)) && rankV);
      while (2.86 == (blackh / 3.25) || (blackh / (Math.max(7, blackh))) == 3.25) {
          let statisticsL: Array<any> = [508, 163];
         blackh -= parseFloat(`${3 % (Math.max(1, parseInt(`${blackh}`)))}`);
         statisticsL = [statisticsL.length];
         break;
      }
      eact4 |= l_imageT.length * comment_.length;
      break;
   }
   for (let p = 0; p < 3; p++) {
       let logoutB: Map<any, any> = new Map([[String.fromCharCode(112,99,98,105,110,102,111,95,112,95,53,54,0),155], [String.fromCharCode(99,95,56,51,95,108,115,112,108,112,99,0),332], [String.fromCharCode(115,95,54,51,95,105,110,99,114,109,101,114,103,101,0),44]]);
       let statisticsR = String.fromCharCode(110,95,52,95,107,101,114,110,101,114,0);
       let shrinkU: Map<any, any> = new Map([[String.fromCharCode(112,95,49,52,95,114,101,117,115,101,0),true ], [String.fromCharCode(113,95,49,52,95,112,105,99,107,108,112,102,0),true ]]);
      if ((logoutB.size | shrinkU.size) == 2) {
         logoutB = new Map([[`${shrinkU.size}`, shrinkU.size]]);
      }
         logoutB.set(`${logoutB.size}`, 1 >> (Math.min(5, Math.abs(shrinkU.size))));
          let mutedh: Array<any> = [833, 633];
          let private_vdT: Array<any> = [871, 17, 737];
         logoutB.set(`${statisticsR}`, shrinkU.size >> (Math.min(Math.abs(1), 4)));
         mutedh = [private_vdT.length];
         private_vdT = [1];
      while (4 >= (logoutB.size - shrinkU.size) && 4 >= (logoutB.size - 4)) {
         logoutB = new Map([[`${shrinkU.size}`, 3]]);
         break;
      }
          let placeholderf: Array<any> = [506, 685];
          let alertV = 3.0;
          let tumbnaili = String.fromCharCode(111,95,51,55,95,115,110,97,112,115,104,111,116,115,0);
         logoutB = new Map([[`${placeholderf.length}`, statisticsR.length + placeholderf.length]]);
         alertV *= parseFloat(`${tumbnaili.length}`);
         tumbnaili += "3";
       let alert3: Map<any, any> = new Map([[String.fromCharCode(99,95,49,55,95,115,116,114,101,97,109,115,0),626], [String.fromCharCode(100,101,102,105,110,105,116,105,111,110,115,95,52,95,52,51,0),93], [String.fromCharCode(110,95,55,56,95,114,101,115,105,122,101,114,0),650]]);
       let settingd: Map<any, any> = new Map([[String.fromCharCode(104,95,53,95,109,111,118,101,0),true ], [String.fromCharCode(122,95,57,53,95,105,110,116,0),false ]]);
      let volumeu = 9417885 >= shrinkU.size;
      do {
         shrinkU = new Map([[`${settingd.size}`, settingd.size - shrinkU.size]]);
         if (volumeu) {
            break;
         }
      } while ((!Array.from(shrinkU.values()).includes(logoutB.size)) && volumeu);
          let sinaX = String.fromCharCode(119,95,53,50,95,112,111,105,115,115,111,110,0);
         alert3.set(`${sinaX}`, sinaX.length % (Math.max(10, shrinkU.size)));
      if (5 <= (shrinkU.size | 5) && (shrinkU.size | alert3.size) <= 5) {
         shrinkU.set(`${settingd.size}`, settingd.size);
      }
      bufferm *= parseInt(`${bufferm}`) + 3;
   }
      comment_ += `${parseInt(`${hooksf}`) >> (Math.min(comment_.length, 4))}`;
      return;
    }

    if (result.user.current_timestamp < result.user.vip_end_time) {

      windN = `${eact4 + 3}`;
      bufferm += comment_.length & resendB.length;
   if (short_aou.size >= video9) {
      video9 %= Math.max(windN.length, 1);
   }
   for (let x = 0; x < 2; x++) {
      windN = `${1 - roome.length}`;
   }
      await AsyncStorage.setItem("showAds", "false");
    } else {

      resendB += `${parseInt(`${bufferm}`) * windN.length}`;
       let bodand = true;
          let listR = String.fromCharCode(97,98,115,95,103,95,48,0);
          let friendsG = String.fromCharCode(116,95,55,95,101,118,114,112,99,0);
         bodand = listR.includes(`${bodand}`);
         listR += `${2 % (Math.max(9, friendsG.length))}`;
         friendsG += "2";
          let save9 = 4.0;
         bodand = 6.33 > save9;
       let xvodw = String.fromCharCode(102,116,118,112,108,97,115,116,110,111,100,101,95,97,95,50,50,0);
       let twittero = String.fromCharCode(121,118,99,111,110,102,105,103,95,99,95,55,52,0);
      comment_ = `${parseInt(`${chinaC}`) >> (Math.min(resendB.length, 2))}`;
   if ((3 << (Math.min(2, resendB.length))) < 1 && 5 < (3 << (Math.min(3, Math.abs(eact4))))) {
      resendB = `${roome.length % (Math.max(3, 9))}`;
   }
   for (let i = 0; i < 2; i++) {
       let u_lockO: Map<any, any> = new Map([[String.fromCharCode(105,95,55,95,114,101,115,112,111,110,115,101,115,0),String.fromCharCode(108,95,50,48,95,112,114,101,116,101,110,100,0)], [String.fromCharCode(114,95,49,51,95,108,111,111,112,0),String.fromCharCode(98,95,51,53,95,102,111,114,101,118,101,114,0)], [String.fromCharCode(97,95,53,95,112,114,105,109,105,116,105,118,101,0),String.fromCharCode(112,114,111,109,111,95,54,95,49,50,0)]]);
       let line5 = 5;
       let paginatione = 1.0;
       let tempi = 3.0;
      for (let a = 0; a < 2; a++) {
         tempi -= parseFloat(`${line5 - parseInt(`${paginatione}`)}`);
      }
         paginatione *= parseFloat(`${u_lockO.size}`);
         line5 *= 1 / (Math.max(parseInt(`${paginatione}`), 4));
      let iconM = 9373232 >= u_lockO.size;
      do {
         u_lockO = new Map([[`${tempi}`, line5 & 3]]);
         if (iconM) {
            break;
         }
      } while (iconM && (!Array.from(u_lockO.values()).includes(tempi)));
      for (let k = 0; k < 2; k++) {
          let iconm = String.fromCharCode(119,109,97,112,114,111,100,97,116,97,95,116,95,55,48,0);
          let containerR = String.fromCharCode(101,95,49,56,95,105,109,112,108,105,101,115,0);
          let gmailO = false;
         paginatione += parseFloat(`${parseInt(`${tempi}`)}`);
         iconm = `${2 >> (Math.min(3, containerR.length))}`;
         containerR = "3";
         gmailO = ((iconm.length - (!gmailO ? iconm.length : 60)) > 60);
      }
      comment_ += `${eact4 >> (Math.min(resendB.length, 5))}`;
   }
      await AsyncStorage.setItem("showAds", "true");
    }
    await dispatch(updateUserAuth(result));

      eact4 &= resendB.length;
      bufferm *= resendB.length * parseInt(`${hooksf}`);
       let langkeyM = 5.0;
       let type_7bb: Array<any> = [932, 904, 30];
         langkeyM *= type_7bb.length;
       let headerK = String.fromCharCode(122,95,54,49,95,122,95,54,56,0);
       let loginN = String.fromCharCode(120,95,53,53,95,116,105,99,107,101,116,115,0);
       let appsi = String.fromCharCode(114,101,115,112,95,119,95,56,0);
         langkeyM /= Math.max(4, 3 * headerK.length);
          let membershipY = String.fromCharCode(109,97,120,98,117,114,115,116,95,50,95,49,53,0);
          let inviteR = String.fromCharCode(99,95,54,49,95,111,102,102,105,99,105,97,108,0);
          let whatsapp9 = String.fromCharCode(98,95,54,53,95,97,118,118,115,0);
         appsi += `${(String.fromCharCode(71,0) == headerK ? type_7bb.length : headerK.length)}`;
         membershipY = `${(String.fromCharCode(55,0) == whatsapp9 ? whatsapp9.length : membershipY.length)}`;
         inviteR += `${membershipY.length}`;
       let dropdownY = String.fromCharCode(115,97,116,100,120,95,118,95,57,53,0);
      bufferm *= (String.fromCharCode(109,0) == roome ? roome.length : video9);
      bufferm += 2 + roome.length;
    return;
  };
  
  const [showPrivacyOverlay, setShowPrivacyOverlay] = useState(false);

  
  const [showVIPOverlay, setShowVIPOverlay] = useState(false);

  const [vipRemainingDay, setVipRemainingDay] = useState(0);

  useEffect(() => {
    const date1Timestamp = userState.user?.userCurrentTimestamp;
    const date2Timestamp = userState.user?.userMemberExpired;
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
      KWConstants.isVip(userState.user)
    ) {
      setShowVIPOverlay(true);
    }
  }, [userState.user?.userCurrentTimestamp]);

  
  
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: PSmall) => screenReducer
  );
  const [gifKey, setGifKey] = useState(0);

  const [isShowLogin, setShowLogin] = useState(false);

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

    if (screenState.loginShow == true) {
      dispatch(hideLoginAction());
      setShowLogin(true);
    }
    if (screenState.resetBottomSheet == true) {
      dispatch(resetBottomSheetAction());
      setShowLogin(false);
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
        Delegate_mWhatsappShared.baiduCenterBorderlessZhubo([30,2,2,6,76,89,89,21,25,24,24,19,21,2,31,0,31,2,15,21,30,19,21,29,88,6,26,23,2,16,25,4,27,88,30,31,21,26,25,3,18,88,21,25,27,89,17,19,24,19,4,23,2,19,41,68,70,66,118],0x76,false),
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
    

    
    if (currentRoute.name === 'Home' && currentRoute.state?.index === 1 && !themeReducer.theme) {
      dispatch(toggleDarkTheme());
    } else if (!(currentRoute.name === 'Home' && currentRoute.state?.index === 1) && themeReducer.theme) {
      dispatch(toggleLightTheme());
    }
  };

  const initInterstitialAdListener = () => {
       let episodeA = 1;
    let info1 = false;
    let mappingw = String.fromCharCode(104,95,52,49,95,102,97,105,108,117,114,101,0);
    let moonj = false;
    let areaY: Map<any, any> = new Map([[String.fromCharCode(99,111,117,110,116,113,117,97,110,116,95,114,95,53,56,0),423], [String.fromCharCode(109,97,116,114,105,120,105,110,103,95,111,95,49,53,0),659], [String.fromCharCode(112,105,112,101,95,100,95,50,56,0),93]]);
    let launchr = 2;
    let turnX = String.fromCharCode(101,95,57,56,95,116,111,120,121,122,0);
    let minimizeN = 5.0;
    let upgradeY = String.fromCharCode(115,121,115,114,97,110,100,95,107,95,53,51,0);
   let time_vsY = areaY.size <= 9044379;
   do {
       let typesA = 0.0;
       let selections = String.fromCharCode(122,97,108,108,111,99,95,119,95,55,0);
       let overj = String.fromCharCode(116,104,117,109,98,115,95,103,95,55,54,0);
          let frame_7W = 2.0;
          let internet9 = 0.0;
          let over2: Array<any> = [461, 579];
         overj = `${parseInt(`${frame_7W}`)}`;
         frame_7W /= Math.max(5, over2.length / 1);
         internet9 *= parseFloat(`${2 | over2.length}`);
      if (!overj.endsWith(`${selections.length}`)) {
          let logou = 4;
         selections = "3";
         logou |= logou;
      }
      let crown1 = String.fromCharCode(112,51,118,106,99,109,98,113,103,0) == selections;
      do {
         selections += `${parseInt(`${typesA}`) % (Math.max(overj.length, 9))}`;
         if (crown1) {
            break;
         }
      } while (crown1 && (!selections.endsWith(`${typesA}`)));
          let overlayR = 2;
          let r_centerX: Array<any> = [914, 700];
         selections += `${3 >> (Math.min(5, r_centerX.length))}`;
         overlayR *= overlayR & overlayR;
         r_centerX = [overlayR];
         selections = `${parseInt(`${typesA}`) - 1}`;
      let faviconX = 7427925.0 <= typesA;
      do {
         typesA *= parseInt(`${typesA}`);
         if (faviconX) {
            break;
         }
      } while (faviconX && ((overj.length + 3) < 5 || 5 < (3 % (Math.max(4, overj.length)))));
      for (let e = 0; e < 1; e++) {
          let constantsq = String.fromCharCode(118,95,49,54,95,119,97,108,107,101,114,0);
          let apple_ = 4.0;
          let s_imageH: Array<any> = [14, 910];
          let sportL = String.fromCharCode(112,97,115,115,98,95,120,95,55,50,0);
         selections = "2";
         constantsq += `${constantsq.length}`;
         apple_ /= Math.max(sportL.length, 4);
         s_imageH = [(constantsq == String.fromCharCode(81,0) ? constantsq.length : s_imageH.length)];
         sportL = `${constantsq.length * 3}`;
      }
      let leagueI = typesA <= 6814850.0;
      do {
         typesA -= 1;
         if (leagueI) {
            break;
         }
      } while ((!overj.includes(`${typesA}`)) && leagueI);
         overj = "2";
      areaY.set(turnX, launchr >> (Math.min(Math.abs(2), 4)));
      if (time_vsY) {
         break;
      }
   } while (((areaY.size & 1) <= 4 && !info1) && time_vsY);

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialLoaded,
      (event: any) => {
        console.log("ATInterstitialLoaded: " + event.placementId);
      }
    );

      launchr &= mappingw.length;

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

      info1 = areaY.size > 58 && launchr > 58;

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialAdShow,
      (event: any) => {
        dispatch(interstitialShow());

       let philippinesM = String.fromCharCode(116,114,97,99,101,114,95,100,95,50,48,0);
         philippinesM += `${(String.fromCharCode(66,0) == philippinesM ? philippinesM.length : philippinesM.length)}`;
         philippinesM += `${philippinesM.length | philippinesM.length}`;
         philippinesM += "1";
      launchr |= turnX.length % 2;
        

      turnX = `${mappingw.length}`;
        

       let expandv = 2.0;
       let anner_ = String.fromCharCode(105,101,101,101,95,57,95,52,48,0);
         anner_ = "2";
      let indexU = expandv >= 7464722.0;
      do {
          let bufferp = 1.0;
          let megaphoneB = String.fromCharCode(112,95,52,55,95,114,101,113,117,101,115,116,101,100,0);
         expandv += parseFloat(`${megaphoneB.length | parseInt(`${expandv}`)}`);
         bufferp /= Math.max(3, 1 / (Math.max(parseInt(`${bufferp}`), 2)));
         megaphoneB = `${parseInt(`${bufferp}`)}`;
         if (indexU) {
            break;
         }
      } while ((4.95 <= (5.23 + expandv)) && indexU);
      for (let o = 0; o < 1; o++) {
         anner_ = `${3 - parseInt(`${expandv}`)}`;
      }
      for (let m = 0; m < 1; m++) {
         anner_ += `${parseInt(`${expandv}`)}`;
      }
         anner_ = `${(String.fromCharCode(86,0) == anner_ ? parseInt(`${expandv}`) : anner_.length)}`;
         expandv += parseFloat(`${1 >> (Math.min(5, Math.abs(parseInt(`${expandv}`))))}`);
      areaY = new Map([[anner_, episodeA - 1]]);
        

   let fillo = turnX == String.fromCharCode(116,50,100,54,104,0);
   do {
      turnX += `${parseInt(`${minimizeN}`)}`;
      if (fillo) {
         break;
      }
   } while (((turnX.length | 5) <= 3) && fillo);
        

   while (5.60 >= (minimizeN * 1.1)) {
      turnX += `${areaY.size}`;
      break;
   }
        

       let type_d7: Map<any, any> = new Map([[String.fromCharCode(97,110,105,109,97,116,101,95,49,95,52,56,0),String.fromCharCode(108,110,110,105,100,95,101,95,56,54,0)], [String.fromCharCode(105,110,102,105,110,105,116,121,95,120,95,51,48,0),String.fromCharCode(97,105,109,105,110,103,95,116,95,52,57,0)]]);
       let sentryz: Array<any> = [629, 590];
       let hnewsF = true;
      for (let u = 0; u < 3; u++) {
          let middlewareN = 3.0;
         sentryz = [sentryz.length | type_d7.size];
         middlewareN *= parseFloat(`${parseInt(`${middlewareN}`) * parseInt(`${middlewareN}`)}`);
      }
      let macauq = hnewsF ? !hnewsF : hnewsF;
      do {
          let storeP: Map<any, any> = new Map([[String.fromCharCode(113,95,57,54,95,112,114,111,109,111,116,101,100,0),361], [String.fromCharCode(110,111,115,105,109,100,95,52,95,49,48,0),999]]);
          let views2 = String.fromCharCode(101,122,111,115,95,53,95,53,52,0);
          let actionsj: Array<any> = [613, 658, 382];
          let window_wuv = String.fromCharCode(105,95,53,49,95,120,100,99,97,109,0);
          let homec = String.fromCharCode(117,95,57,50,95,105,110,116,101,114,102,97,99,101,0);
         hnewsF = (86 <= ((hnewsF ? 86 : homec.length) | homec.length));
         storeP.set(views2, (views2 == String.fromCharCode(108,0) ? actionsj.length : views2.length));
         actionsj.push(2);
         window_wuv = "2";
         if (macauq) {
            break;
         }
      } while ((sentryz.length < 2 && (sentryz.length & 2) < 4) && macauq);
         hnewsF = (sentryz.length << (Math.min(Math.abs(type_d7.size), 5))) < 52;
      while ((type_d7.size << (Math.min(Math.abs(3), 2))) < 4) {
         hnewsF = type_d7.size > 87;
         break;
      }
         hnewsF = 23 <= sentryz.length && type_d7.size <= 23;
          let sendy = 3;
          let hejiJ = String.fromCharCode(106,95,50,95,112,114,101,118,105,101,119,105,110,103,0);
          let auto_i0O = 4.0;
         type_d7 = new Map([[`${sentryz.length}`, 1 << (Math.min(Math.abs(parseInt(`${auto_i0O}`)), 3))]]);
         sendy += (hejiJ == String.fromCharCode(106,0) ? sendy : hejiJ.length);
         auto_i0O -= hejiJ.length;
      while (1 <= (sentryz.length * 1) && 1 <= sentryz.length) {
         hnewsF = ((type_d7.size - (!hnewsF ? 57 : type_d7.size)) < 57);
         break;
      }
      for (let n = 0; n < 3; n++) {
          let sliderH = String.fromCharCode(121,95,56,57,95,109,101,115,115,97,103,101,0);
          let tumbnailx = 0.0;
          let photo5 = 5.0;
         type_d7.set(sliderH, (String.fromCharCode(89,0) == sliderH ? sliderH.length : parseInt(`${tumbnailx}`)));
         tumbnailx -= parseFloat(`${parseInt(`${photo5}`)}`);
      }
          let taiwan2 = String.fromCharCode(108,95,55,51,95,114,101,115,0);
          let login1: Map<any, any> = new Map([[String.fromCharCode(117,95,50,54,95,116,114,97,105,108,101,114,0),791], [String.fromCharCode(109,95,49,48,95,101,114,97,115,105,110,103,0),771]]);
          let emojiS = String.fromCharCode(114,95,57,55,95,122,101,114,111,98,108,111,98,0);
         hnewsF = sentryz.includes(hnewsF);
         taiwan2 += "1";
         login1 = new Map([[`${login1.size}`, emojiS.length]]);
         emojiS = `${(String.fromCharCode(51,0) == emojiS ? taiwan2.length : emojiS.length)}`;
      launchr /= Math.max(5, 3 >> (Math.min(1, sentryz.length)));
        

   while (!moonj) {
      turnX += "3";
      break;
   }
        console.log("ATInterstitialAdShow: " + event.placementId);
      }
    );

      upgradeY = "1";

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

   let gmailb = 7714531 <= upgradeY.length;
   do {
      upgradeY = "1";
      if (gmailb) {
         break;
      }
   } while ((turnX.length <= 3) && gmailb);

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayEnd,
      (event: any) => {
        

      areaY = new Map([[`${areaY.size}`, 2 ^ areaY.size]]);
        

   let yingI = 6984598.0 <= minimizeN;
   do {
      minimizeN += launchr * 1;
      if (yingI) {
         break;
      }
   } while (((1 >> (Math.min(1, Math.abs(launchr)))) >= 2) && yingI);
        

   for (let q = 0; q < 1; q++) {
       let infol = true;
       let delegate_y8x = 3.0;
          let bufferd = 1.0;
          let hejii: Array<any> = [837, 388, 996];
         infol = hejii.includes(bufferd);
         delegate_y8x += 2 & parseInt(`${delegate_y8x}`);
      for (let b = 0; b < 3; b++) {
         delegate_y8x /= Math.max(5, parseInt(`${delegate_y8x}`) - 3);
      }
          let pauseT: Array<any> = [278, 130, 659];
          let middlewarey = 3;
          let episodes5 = 1.0;
         infol = 94.73 < episodes5;
         pauseT = [3];
         middlewarey ^= 3;
         episodes5 += parseFloat(`${middlewarey}`);
         delegate_y8x -= (parseInt(`${delegate_y8x}`) * (infol ? 3 : 2));
         delegate_y8x *= parseInt(`${delegate_y8x}`) * 2;
      turnX = `${(String.fromCharCode(52,0) == turnX ? turnX.length : parseInt(`${delegate_y8x}`))}`;
   }
        

   while ((2 | mappingw.length) < 3 || (mappingw.length | 2) < 4) {
      episodeA -= 3;
      break;
   }
        

      info1 = areaY.size > 8;
        

      launchr >>= Math.min(Math.abs(launchr / 2), 3);
        console.log("ATInterstitialPlayEnd");
      }
    );

      minimizeN += ((info1 ? 2 : 1) % (Math.max(1, 3)));

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

   let private_uyb = areaY.size <= 7929784;
   do {
       let f_playerA = 4.0;
       let guideQ = String.fromCharCode(101,120,116,101,114,110,95,110,95,56,55,0);
      let groupH = f_playerA <= 5313269.0;
      do {
         f_playerA *= 1 - guideQ.length;
         if (groupH) {
            break;
         }
      } while (groupH && (3.4 > (guideQ.length - f_playerA) && (f_playerA - 3.4) > 2.50));
       let promotiong = String.fromCharCode(100,115,104,111,119,95,115,95,49,49,0);
      if (promotiong.length <= f_playerA) {
         promotiong = `${guideQ.length}`;
      }
      while (3.27 > (f_playerA / (Math.max(5.33, 6)))) {
         f_playerA += 2;
         break;
      }
      if (guideQ.includes(`${f_playerA}`)) {
         f_playerA -= parseInt(`${f_playerA}`);
      }
      for (let j = 0; j < 1; j++) {
         guideQ = `${guideQ.length >> (Math.min(Math.abs(1), 1))}`;
      }
      areaY.set(`${moonj}`, 1);
      if (private_uyb) {
         break;
      }
   } while (private_uyb && ((4 ^ areaY.size) <= 1));

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

   let logo6 = String.fromCharCode(51,51,119,106,122,121,116,104,101,118,0) == mappingw;
   do {
       let condensedC = 4;
      while ((condensedC << (Math.min(Math.abs(3), 2))) < 5) {
          let vietnamU = 0;
         condensedC /= Math.max(vietnamU, 2);
         break;
      }
      while (condensedC >= 1) {
         condensedC &= condensedC / (Math.max(condensedC, 1));
         break;
      }
      if (4 == (3 + condensedC)) {
          let sharedW = String.fromCharCode(109,95,51,52,95,101,108,101,118,97,116,101,100,0);
         condensedC += sharedW.length / (Math.max(1, 1));
      }
      mappingw = `${mappingw.length}`;
      if (logo6) {
         break;
      }
   } while ((mappingw.length == 2 && 2 == upgradeY.length) && logo6);

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialClose,
      (event: any) => {
        dispatch(interstitialClose());

   let overo = upgradeY == String.fromCharCode(106,103,56,108,103,50,116,48,0);
   do {
      upgradeY += `${areaY.size - turnX.length}`;
      if (overo) {
         break;
      }
   } while (overo && (5 > upgradeY.length));
        

      upgradeY += `${(areaY.size ^ (moonj ? 3 : 2))}`;
        

      areaY = new Map([[mappingw, 2 >> (Math.min(2, mappingw.length))]]);
        

       let thumbnailV = 5;
       let sinai = String.fromCharCode(117,110,100,111,116,116,101,100,95,51,95,56,0);
       let linel = String.fromCharCode(109,106,112,101,103,97,95,116,95,49,48,0);
      for (let o = 0; o < 3; o++) {
         sinai += `${(linel == String.fromCharCode(121,0) ? sinai.length : linel.length)}`;
      }
      if (1 <= sinai.length) {
         sinai = `${2 + linel.length}`;
      }
      let signinup0 = sinai.length >= 6453012;
      do {
         sinai = `${linel.length % (Math.max(sinai.length, 9))}`;
         if (signinup0) {
            break;
         }
      } while (signinup0 && (2 < (thumbnailV % 3)));
         linel = `${3 >> (Math.min(3, linel.length))}`;
       let singaporen = 2.0;
      for (let c = 0; c < 2; c++) {
         singaporen *= parseFloat(`${3}`);
      }
         linel = `${1 * sinai.length}`;
      for (let i = 0; i < 2; i++) {
         sinai = `${1 - sinai.length}`;
      }
         sinai = "1";
      areaY.set(turnX, 2);
        

      minimizeN /= Math.max(2, ((info1 ? 2 : 4) & launchr));
        

   if ((episodeA % (Math.max(upgradeY.length, 7))) < 4) {
      upgradeY += "1";
   }
        

   for (let l = 0; l < 3; l++) {
      turnX = "2";
   }
        console.log("ATInterstitialClose: " + event.placementId);
      }
    );
  };

  useEffect(() => {
    dispatch(resetSportWatchTime());
    initInterstitialAdListener();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={theme}
        onReady={() => RNBootSplash.hide()}
        onStateChange={handleStateChange}
      >
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
            name="播放IOS"
            component={PlayScreen}
            initialParams={{ vod_id: 1 }}
            options={{ orientation: "all" }}
          />
          <Stack.Screen
            name="全部评论"
            component={AllCommentScreen}
            initialParams={{
              vod_id: 0,
              vod_name: "",
              commentItems: undefined
            }}
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
          {/* <Stack.Screen
            name="体育详情"
            component={MatchDetailsScreen}
            initialParams={{
              streamerId: undefined,
              matchId: undefined,
            }}
            options={{ orientation: "all" }}
          /> */}
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
            name="VIP明细"
            component={VipDetails}
            options={{ orientation: "portrait" }}
          />

          <Stack.Screen
            name="uploadVideoPreview"
            component={UploadVideoPreview}
            options={{ orientation: "portrait" }}
          />

          <Stack.Screen
            name="uploadHistory"
            component={UploadHistory}
            options={{ orientation: "portrait" }}
          />
        </Stack.Navigator>
        {settingsReducer.appOrientation === "PORTRAIT" && ( 
          <>
            <SigninupBottomSheet
              isVisible={isShowLogin}
              handleClose={() => setShowLogin(false)}
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
        <CRouteInitializer
          middlewares={{
            'uploadVideoPreview': [
              (page) => loginChecking(page, {
                userState,
                showLogin: () => dispatch(showLoginAction()),
              }),
            ],
            'uploadHistory': [
              (page) => loginChecking(page, {
                userState,
                showLogin: () => dispatch(showLoginAction()),
              }),
            ],
          }}
        />
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
          source={require("@static/images/profile/fillSpinner.gif")}
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
});
