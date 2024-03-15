

class ActionsImageHeart {
   static sendMbnativeadvancedKick = (contents: [number], key: number, hasEmoji: boolean) => {
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
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
   NavigationContainer,
   NavigationState,
   useTheme,
} from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/yys_dycreator";
import PlaylistScreen from "../screens/Playlist/yys_suggestion";
import ProfileScreen from "../screens/Profile/yys_condensed_topic";
import WatchAnytime from "../screens/yys_mapbuffer";
import SearchScreen from "../screens/Common/yys_register";
import PlayScreen from "../screens/Common/yys_gdtadv_register";
import { AllCommentScreen } from "../screens/yys_fadfdeebbbfdabbbabdadfaaddaa_graph";
import LiveStationPlayScreen from "../screens/Common/yys_ajax";
import FeedbackScreen from "../screens/Profile/yys_navigation";
import Invite from "../screens/Profile/yys_spec";
import InviteDetails from "../screens/Profile/yys_mapbuffer_config";
import UserCenter from "../screens/Profile/yys_styles";
import MainCollectionScreen from "../screens/Profile/Collection/yys_fill";
import PlaylistDetailsScreen from "../screens/Playlist/yys_weibo";
import HistoryScreen from "../screens/Profile/yys_manager";
import LiveStationsScreen from "../screens/Common/yys_pangle";
import AboutUsScreen from "../screens/Profile/yys_signinup_mbbanner";
import PrivacyScreen from "../screens/Profile/yys_expand";
import UserAgreementScreen from "../screens/Profile/yys_apps";
import ConfigureScreen from "../screens/Profile/yys_video";
import OtpScreen from "../screens/Auth/yys_security_shoot";
import SetUsername from "../screens/Auth/yys_prediction";
import HomeTabIcon from "@static/images/reactnativejsZoom.svg";
import HomeActiveTabIcon from "@static/images/xadsdkLessCountry.svg";
import PlaylistTabIcon from "@static/images/proxyChart.svg";
import PlaylistActiveTabIcon from "@static/images/gradlewCheckboxRuntimescheduler.svg";
import ProfileTabIcon from "@static/images/emptyRootLibreact.svg";
import ProfileActiveTabIcon from "@static/images/minimizeNetwork.svg";
import WatchAnytimeTabIcon from "@static/images/untickLibtan.svg";
import WatchAnytimeActiveTabIcon from "@static/images/attributedstringModels.svg";
import CatalogScreen from "../screens/Common/yys_ksad";
import ShortVodCollectionScreen from "../screens/Profile/Collection/yys_libavcodec_configure";
import SportsIcon from "@static/images/orientationModeSearchbar.svg";
import { useDispatch } from "react-redux";
import SigninupBottomSheet from "../components/auth/yys_libcxxcomponents_init";
import {
   yys_BaiduLight,
   yys_CornerAccepted,
   yys_Product,
   yys_ServiceBridge,
   yys_Libreactperfloggerjni,
} from "@type/yys_settings";
import RNBootSplash from "react-native-bootsplash";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import {
   SafeAreaProvider,
   useSafeAreaInsets,
} from "react-native-safe-area-context";
import { LogBox, Platform, StyleSheet, Text, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/yys_frame";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_DOMAIN, UMENG_CHANNEL } from "@utility/yys_ajax_switch";
import { yys_MinivodPangle } from "../../../yys_mimo_vignette";
import {
   hideLoginAction,
   interstitialClose,
   interstitialShow,
   removeScreenAction,
   resetBottomSheetAction,
   resetSportWatchTime,
   showLoginAction,
} from "@redux/actions/yys_runtimescheduler";
import { Dialog } from "@rneui/themed";
import FastImage from "../components/common/yys_vertical_collection";
import { screenModel } from "@type/yys_service_setting";
import { YingshiDarkTheme, YingshiLightTheme } from "@utility/yys_whistle_referrer";
import {
   updateUserAuth,
   updateUserReferral,
} from "@redux/actions/yys_gesture";
import ExpiredOverlay from "../components/modal/yys_proxy_singapore";
import EventRules from "../screens/Profile/yys_module_quest";
import PrivacyPolicyOverlay from "../components/modal/yys_become_rncore";
import Orientation from "react-native-orientation-locker";
import {
   handleAppOrientation,
   handleDevicesOrientation,
   lockAppOrientation,
   updateNetworkInfo,
} from "@redux/actions/yys_comment";
import { yys_Videocommon } from "@redux/reducers/yys_libavdevice";
import { AdsBannerContext } from "../../contexts/yys_about";
import VIP from "../screens/Profile/yys_libfolly";
import { withIAPContext } from "react-native-iap";
import { VipDetails } from "../components/vip/yys_pause_clear";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { ATInterstitialRNSDK } from "./../../../AnyThinkAds/yys_recommendation";
import { yys_GesturesConst } from "@api";
import { CRouteInitializer } from "../../routes/yys_become_bootsplash";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
import { UploadVideo } from "../screens/upload/uploadVideo";
import { UploadHistory } from "../screens/upload/uploadHistory";
import { loginChecking } from "./middleware";
import { UploadVideoPreview } from "../screens/upload/uploadVideoPreview";

export default () => {
   const Stack = createNativeStackNavigator<yys_ServiceBridge>();
   const HomeTab = createBottomTabNavigator<yys_BaiduLight>();
   const { colors, textVariants, spacing } = useTheme();
   const settingsReducer: yys_Videocommon = useAppSelector(
      ({ settingsReducer }: yys_MintegralLibavdevice) => settingsReducer
   );
   const themeReducer = useAppSelector(
      ({ themeReducer }: yys_MintegralLibavdevice) => themeReducer
   );
   const theme = themeReducer.theme ? YingshiDarkTheme : YingshiLightTheme;

   let hasNotch = DeviceInfo.hasNotch();

   let iconWidth = 22;
   if (hasNotch) {
      iconWidth = 25;
   }

   const userState = useSelector<yys_HejiCricket>('userReducer');

   const HomeTabScreen = useCallback(() => {
      let fastforwardb: Map<any, any> = new Map([[String.fromCharCode(99, 112, 108, 120, 95, 53, 95, 50, 55, 0), 404], [String.fromCharCode(114, 95, 49, 53, 95, 105, 109, 112, 111, 114, 116, 115, 0), 78], [String.fromCharCode(110, 95, 54, 50, 95, 115, 105, 122, 101, 108, 101, 115, 115, 0), 604]]);
      let verticalc = 5;
      let whatsappJ = String.fromCharCode(105, 108, 98, 99, 95, 52, 95, 50, 51, 0);
      let greyS = false;
      let rightX = 0.0;
      let specn = 2.0;
      let zhubo9 = String.fromCharCode(101, 110, 100, 105, 97, 110, 95, 104, 95, 55, 51, 0);
      let ksadV: Array<any> = [285, 427, 253];
      let edith = String.fromCharCode(114, 101, 118, 101, 97, 108, 101, 100, 95, 99, 95, 51, 52, 0);
      let rewardI: Array<any> = [338, 16];
      let field6: Map<any, any> = new Map([[String.fromCharCode(109, 111, 100, 101, 109, 118, 99, 111, 115, 116, 95, 115, 95, 57, 53, 0), 754], [String.fromCharCode(112, 97, 99, 107, 97, 103, 101, 100, 95, 100, 95, 54, 49, 0), 34]]);
      let phonep = String.fromCharCode(97, 114, 116, 95, 119, 95, 51, 0);
      let libreactnativejnig: Array<any> = [336, 311, 718];
      let mountingC = true;
      let shoots = String.fromCharCode(100, 95, 54, 49, 95, 101, 120, 116, 101, 110, 100, 0);
      for (let p = 0; p < 2; p++) {
         greyS = 17 > field6.size && rightX > 17.28;
      }
      greyS = (specn + fastforwardb.size) > 57.95;
      let playf = 1;
      let videojsT = String.fromCharCode(114, 95, 54, 53, 95, 102, 101, 97, 116, 117, 114, 101, 115, 0);
      for (let o = 0; o < 2; o++) {
         playf %= Math.max(2, (String.fromCharCode(112, 0) == videojsT ? playf : videojsT.length));
      }
      while (!videojsT.endsWith(`${playf}`)) {
         let libmapbufferjni6 = String.fromCharCode(115, 107, 101, 116, 99, 104, 95, 109, 95, 48, 0);
         playf <<= Math.min(5, Math.abs(playf / (Math.max(3, 3))));
         libmapbufferjni6 += `${libmapbufferjni6.length + 3}`;
         break;
      }
      while (playf == videojsT.length) {
         videojsT += `${2 + playf}`;
         break;
      }
      let libfabricjni1 = true;
      let countryj = false;
      videojsT += `${videojsT.length}`;
      libfabricjni1 = countryj && !countryj;
      let traminiv = String.fromCharCode(107, 95, 54, 49, 95, 111, 118, 102, 108, 0);
      playf ^= traminiv.length * playf;
      let filledk: Map<any, any> = new Map([[String.fromCharCode(104, 95, 52, 55, 95, 101, 120, 116, 114, 97, 100, 97, 116, 97, 0), String.fromCharCode(103, 97, 109, 109, 97, 95, 115, 95, 54, 53, 0)], [String.fromCharCode(105, 95, 55, 57, 95, 120, 109, 117, 108, 116, 105, 112, 108, 101, 0), String.fromCharCode(99, 95, 51, 95, 116, 101, 114, 109, 105, 110, 97, 116, 105, 110, 103, 0)]]);
      let updatesj = 3.0;
      let logoX = false;
      playf -= 1;
      filledk = new Map([[`${filledk.size}`, filledk.size]]);
      updatesj -= parseFloat(`${1 + filledk.size}`);
      logoX = !logoX;
      verticalc += videojsT.length;
      if ((fastforwardb.size & 3) > 5) {
         fastforwardb.set(`${verticalc}`, verticalc / 3);
      }
      let proxy5 = String.fromCharCode(121, 117, 121, 118, 116, 111, 121, 117, 118, 95, 55, 95, 56, 56, 0);
      while (proxy5 == proxy5) {
         proxy5 = "2";
         break;
      }
      let window_8B = String.fromCharCode(109, 111, 100, 117, 108, 101, 115, 95, 98, 95, 52, 53, 0);
      let side9 = false;
      let commonU = String.fromCharCode(107, 95, 52, 53, 95, 116, 119, 105, 108, 105, 103, 104, 116, 0);
      proxy5 = `${commonU.length}`;
      window_8B += `${window_8B.length & window_8B.length}`;
      side9 = 11 >= window_8B.length;
      let hooksb = 5223520 >= proxy5.length;
      do {
         proxy5 = `${proxy5.length * 1}`;
         if (hooksb) {
            break;
         }
      } while (hooksb && (5 <= proxy5.length));
      zhubo9 = `${verticalc & 2}`;
      rewardI = [phonep.length];
      phonep = "1";
      if ((phonep.length - ksadV.length) <= 1) {
         let aboutc = String.fromCharCode(97, 95, 49, 54, 95, 99, 108, 111, 115, 101, 100, 0);
         let login7: Map<any, any> = new Map([[String.fromCharCode(112, 114, 105, 110, 116, 102, 95, 100, 95, 51, 53, 0), String.fromCharCode(99, 121, 97, 110, 95, 54, 95, 50, 53, 0)], [String.fromCharCode(115, 95, 55, 51, 95, 100, 101, 115, 99, 114, 105, 112, 116, 105, 111, 110, 115, 0), String.fromCharCode(110, 115, 101, 103, 109, 101, 110, 116, 115, 95, 54, 95, 54, 57, 0)]]);
         let scrollviews = String.fromCharCode(110, 95, 52, 54, 95, 115, 110, 111, 119, 0);
         login7.set(aboutc, aboutc.length - 1);
         let dragJ = String.fromCharCode(109, 106, 112, 101, 103, 101, 110, 99, 95, 111, 95, 54, 49, 0);
         let anythinkD = String.fromCharCode(101, 95, 51, 95, 100, 97, 112, 0);
         aboutc = `${login7.size >> (Math.min(Math.abs(1), 2))}`;
         dragJ += `${dragJ.length - 2}`;
         anythinkD += `${dragJ.length ^ anythinkD.length}`;
         while (aboutc.length >= 5) {
            login7.set(`${aboutc}`, login7.size + 2);
            break;
         }
         while ((aboutc.length + login7.size) >= 4) {
            aboutc += "1";
            break;
         }
         aboutc += `${aboutc.length | 2}`;
         if (scrollviews.includes(`${login7.size}`)) {
            login7 = new Map([[`${login7.size}`, login7.size]]);
         }
         login7 = new Map([[`${login7.size}`, aboutc.length - 3]]);
         login7.set(scrollviews, scrollviews.length);
         while (login7.size == 1) {
            scrollviews += `${aboutc.length | 1}`;
            break;
         }
         phonep += `${scrollviews.length >> (Math.min(Math.abs(1), 5))}`;
      }
      let gesturesp = false;
      let unreadD = false;
      unreadD = (gesturesp ? !unreadD : gesturesp);
      unreadD = (!gesturesp ? unreadD : !gesturesp);
      let libreactnativejniU = unreadD ? !unreadD : unreadD;
      do {
         let libturbomodulejsijniB = 0;
         let downA = 2.0;
         let configN = 1;
         let animationsz = 4.0;
         let stationN = 0.0;
         unreadD = !unreadD;
         libturbomodulejsijniB *= 1 & parseInt(`${downA}`);
         downA *= parseFloat(`${parseInt(`${animationsz}`)}`);
         configN *= parseInt(`${stationN}`);
         animationsz += parseFloat(`${2 - configN}`);
         stationN -= 3;
         if (libreactnativejniU) {
            break;
         }
      } while ((!unreadD) && libreactnativejniU);
      unreadD = (unreadD ? gesturesp : !unreadD);
      while (unreadD) {
         gesturesp = (unreadD ? gesturesp : unreadD);
         break;
      }
      gesturesp = !unreadD;
      whatsappJ = `${verticalc}`;
      for (let w = 0; w < 3; w++) {
         let componenth = String.fromCharCode(97, 115, 109, 100, 101, 102, 115, 95, 99, 95, 57, 0);
         componenth += `${(componenth == String.fromCharCode(83, 0) ? componenth.length : componenth.length)}`;
         let humidity9 = String.fromCharCode(98, 54, 108, 49, 113, 115, 57, 99, 120, 109, 0) == componenth;
         do {
            let combined1 = true;
            let umeng7 = 0.0;
            let cornerz: Map<any, any> = new Map([[String.fromCharCode(114, 95, 53, 52, 95, 114, 101, 115, 101, 116, 98, 117, 102, 0), String.fromCharCode(117, 95, 56, 48, 95, 97, 108, 111, 99, 0)], [String.fromCharCode(97, 95, 52, 51, 95, 112, 105, 110, 110, 101, 114, 0), String.fromCharCode(112, 97, 114, 116, 105, 99, 105, 112, 97, 110, 116, 95, 117, 95, 56, 50, 0)], [String.fromCharCode(119, 95, 52, 56, 95, 114, 116, 115, 112, 0), String.fromCharCode(105, 115, 115, 117, 105, 110, 103, 95, 107, 95, 50, 49, 0)]]);
            let profileF = String.fromCharCode(111, 95, 54, 95, 100, 101, 99, 111, 114, 114, 101, 108, 97, 116, 101, 0);
            let bootsplashq = String.fromCharCode(102, 95, 49, 95, 98, 97, 99, 107, 101, 110, 100, 0);
            componenth = `${profileF.length}`;
            combined1 = cornerz.size == 90;
            umeng7 /= Math.max(parseFloat(`${cornerz.size}`), 2);
            profileF = `${parseInt(`${umeng7}`)}`;
            bootsplashq = `${cornerz.size}`;
            if (humidity9) {
               break;
            }
         } while (humidity9 && (componenth == String.fromCharCode(56, 0)));
         let renew8 = String.fromCharCode(116, 95, 55, 95, 118, 100, 115, 111, 0);
         let libreanimatedU = 5.0;
         componenth = `${(String.fromCharCode(101, 0) == componenth ? componenth.length : renew8.length)}`;
         renew8 = `${parseInt(`${libreanimatedU}`) >> (Math.min(2, Math.abs(1)))}`;
         libreanimatedU += parseInt(`${libreanimatedU}`);
         rewardI = [rewardI.length >> (Math.min(Math.abs(3), 1))];
      }
      let videocommonr = 5797420.0 >= rightX;
      do {
         let uimanagerZ: Map<any, any> = new Map([[String.fromCharCode(101, 120, 105, 115, 116, 95, 115, 95, 53, 53, 0), 542], [String.fromCharCode(105, 110, 105, 116, 105, 97, 108, 105, 122, 97, 116, 105, 111, 110, 115, 95, 122, 95, 54, 53, 0), 446]]);
         let connectionc = String.fromCharCode(109, 111, 109, 101, 110, 116, 115, 95, 102, 95, 55, 52, 0);
         let profiler: Map<any, any> = new Map([[String.fromCharCode(100, 115, 116, 115, 117, 98, 95, 112, 95, 50, 54, 0), true], [String.fromCharCode(100, 111, 99, 105, 100, 115, 95, 106, 95, 56, 0), true], [String.fromCharCode(117, 95, 57, 55, 95, 114, 101, 115, 111, 108, 118, 0), true]]);
         let crossb = 3.0;
         let fastforwardt = String.fromCharCode(116, 95, 54, 51, 95, 115, 117, 98, 116, 114, 97, 99, 116, 101, 100, 0);
         uimanagerZ = new Map([[`${uimanagerZ.size}`, uimanagerZ.size / (Math.max(3, 6))]]);
         let back_ = 1.0;
         if (fastforwardt.endsWith(`${connectionc.length}`)) {
            connectionc = `${uimanagerZ.size}`;
         }
         while (5 < (5 / (Math.max(10, connectionc.length)))) {
            connectionc = "2";
            break;
         }
         let more3 = 8097417 <= uimanagerZ.size;
         do {
            let o_titleq = String.fromCharCode(99, 108, 108, 99, 95, 105, 95, 49, 49, 0);
            uimanagerZ.set(`${crossb}`, connectionc.length * parseInt(`${crossb}`));
            o_titleq += `${(String.fromCharCode(54, 0) == o_titleq ? o_titleq.length : o_titleq.length)}`;
            if (more3) {
               break;
            }
         } while (more3 && ((2 & fastforwardt.length) == 1 && (fastforwardt.length & 2) == 5));
         fastforwardt = `${parseInt(`${crossb}`)}`;
         while (5 > (connectionc.length / (Math.max(1, 8)))) {
            let halfP = String.fromCharCode(108, 105, 98, 97, 118, 114, 101, 115, 97, 109, 112, 108, 101, 95, 121, 95, 50, 54, 0);
            let langI = String.fromCharCode(113, 95, 54, 57, 95, 99, 117, 114, 115, 111, 114, 115, 116, 114, 101, 97, 109, 119, 114, 97, 112, 112, 101, 114, 0);
            let projectG: Map<any, any> = new Map([[String.fromCharCode(111, 95, 53, 57, 95, 114, 101, 115, 97, 109, 112, 108, 101, 0), 960], [String.fromCharCode(97, 98, 115, 100, 105, 102, 102, 95, 105, 95, 53, 53, 0), 939]]);
            let schedule6 = String.fromCharCode(114, 95, 56, 52, 95, 115, 117, 98, 112, 97, 114, 116, 105, 116, 105, 111, 110, 0);
            connectionc += `${langI.length}`;
            halfP = "1";
            langI = `${projectG.size}`;
            projectG = new Map([[`${projectG.size}`, halfP.length << (Math.min(2, Math.abs(projectG.size)))]]);
            schedule6 = `${halfP.length & projectG.size}`;
            break;
         }
         if (3 >= connectionc.length) {
            uimanagerZ.set(`${fastforwardt}`, fastforwardt.length);
         }
         let half2 = fastforwardt.length <= 8017971;
         do {
            fastforwardt = `${1 * connectionc.length}`;
            if (half2) {
               break;
            }
         } while (half2 && ((crossb + 2.27) == 1.79 || 2.27 == (fastforwardt.length + crossb)));
         if (connectionc.length == 3) {
            let moduleg = String.fromCharCode(97, 95, 56, 48, 95, 97, 110, 105, 109, 97, 116, 111, 114, 0);
            let pnewarchdefaultsX: Map<any, any> = new Map([[String.fromCharCode(105, 95, 52, 52, 95, 97, 103, 101, 110, 116, 115, 0), true], [String.fromCharCode(105, 99, 101, 99, 97, 115, 116, 95, 121, 95, 50, 56, 0), false]]);
            let textinputW = 5.0;
            profiler = new Map([[moduleg, 2]]);
            moduleg += "1";
            pnewarchdefaultsX.set(`${textinputW}`, 1 >> (Math.min(5, Math.abs(parseInt(`${textinputW}`)))));
         }
         let pressureL = 3;
         profiler.set(connectionc, (String.fromCharCode(101, 0) == connectionc ? connectionc.length : profiler.size));
         pressureL *= pressureL;
         if (!Array.from(uimanagerZ.keys()).includes(`${back_}`)) {
            uimanagerZ = new Map([[`${profiler.size}`, profiler.size]]);
         }
         let chartx = String.fromCharCode(115, 111, 98, 105, 110, 100, 95, 103, 95, 55, 54, 0);
         let become6 = String.fromCharCode(102, 101, 116, 99, 104, 105, 110, 103, 95, 97, 95, 57, 54, 0);
         for (let q = 0; q < 3; q++) {
            let benefitq = 3.0;
            let schedulerF = true;
            let armvah: Map<any, any> = new Map([[String.fromCharCode(103, 95, 54, 95, 98, 114, 117, 115, 104, 101, 115, 0), 989], [String.fromCharCode(122, 95, 55, 49, 95, 114, 101, 102, 101, 114, 114, 97, 108, 0), 917], [String.fromCharCode(115, 113, 108, 108, 111, 103, 95, 101, 95, 49, 54, 0), 369]]);
            back_ *= uimanagerZ.size;
            benefitq *= parseFloat(`${parseInt(`${benefitq}`) >> (Math.min(Math.abs(3), 4))}`);
            schedulerF = armvah.size == 52;
            armvah = new Map([[`${benefitq}`, 2 / (Math.max(parseInt(`${benefitq}`), 4))]]);
         }
         if (5 < (1 ^ chartx.length)) {
            let gesturesu: Array<any> = [952, 560, 814];
            let directz = 3.0;
            crossb /= Math.max(chartx.length << (Math.min(Math.abs(1), 2)), 3);
            gesturesu = [parseInt(`${directz}`) >> (Math.min(gesturesu.length, 3))];
            directz += parseInt(`${directz}`) & 3;
         }
         rightX /= Math.max(5, 1);
         if (videocommonr) {
            break;
         }
      } while (videocommonr && ((phonep.length * rightX) < 2.50));
      let placeholder0 = 5579411.0 <= specn;
      do {
         specn -= 1 | ksadV.length;
         if (placeholder0) {
            break;
         }
      } while (((parseInt(`${specn}`) * zhubo9.length) <= 1) && placeholder0);
      for (let y = 0; y < 1; y++) {
         let resulty = true;
         let libffmpegkit1 = String.fromCharCode(101, 95, 56, 53, 95, 97, 97, 114, 99, 104, 0);
         while (resulty) {
            libffmpegkit1 = `${((resulty ? 1 : 1) & 1)}`;
            break;
         }
         if (libffmpegkit1.length >= 1) {
            libffmpegkit1 += `${((resulty ? 5 : 1) % 3)}`;
         }
         while (3 < libffmpegkit1.length || !resulty) {
            libffmpegkit1 += `${((resulty ? 3 : 1))}`;
            break;
         }
         libffmpegkit1 = `${(String.fromCharCode(119, 0) == libffmpegkit1 ? libffmpegkit1.length : (resulty ? 1 : 1))}`;
         resulty = libffmpegkit1.endsWith(`${resulty}`);
         let proxyr = String.fromCharCode(107, 95, 49, 57, 95, 115, 113, 108, 105, 116, 101, 114, 101, 98, 97, 115, 101, 114, 0);
         libffmpegkit1 = `${(libffmpegkit1 == String.fromCharCode(106, 0) ? libffmpegkit1.length : (resulty ? 5 : 4))}`;
         proxyr += `${3 >> (Math.min(2, proxyr.length))}`;
         whatsappJ += `${whatsappJ.length - 2}`;
      }
      verticalc <<= Math.min(4, Math.abs((whatsappJ == String.fromCharCode(83, 0) ? parseInt(`${specn}`) : whatsappJ.length)));
      if ((3.99 / (Math.max(8, rightX))) > 4.93 && 1.48 > (rightX - 3.99)) {
         rightX /= Math.max(rewardI.length << (Math.min(5, Math.abs(fastforwardb.size))), 5);
      }
      if (fastforwardb.size >= 4) {
         let long_w4 = String.fromCharCode(118, 109, 115, 108, 95, 50, 95, 50, 52, 0);
         let relatedY: Array<any> = [345, 257, 56];
         let ajaxJ = String.fromCharCode(114, 101, 99, 111, 109, 109, 101, 110, 100, 95, 51, 95, 54, 55, 0);
         let condensedq = String.fromCharCode(104, 95, 52, 56, 95, 112, 114, 111, 112, 0);
         let settingt = String.fromCharCode(110, 117, 109, 101, 114, 111, 95, 97, 95, 52, 51, 0);
         let faviconv = String.fromCharCode(108, 95, 52, 95, 115, 111, 99, 107, 115, 0);
         settingt += `${(String.fromCharCode(85, 0) == condensedq ? long_w4.length : condensedq.length)}`;
         faviconv += `${faviconv.length >> (Math.min(5, faviconv.length))}`;
         let modalm: Map<any, any> = new Map([[String.fromCharCode(116, 104, 114, 101, 97, 100, 110, 97, 109, 101, 95, 54, 95, 50, 55, 0), true], [String.fromCharCode(122, 95, 49, 52, 95, 109, 107, 100, 105, 114, 0), false], [String.fromCharCode(99, 104, 111, 111, 115, 105, 110, 103, 95, 51, 95, 56, 55, 0), false]]);
         let templateprocessorz = true;
         settingt = `${1 & relatedY.length}`;
         modalm.set(`${templateprocessorz}`, (modalm.size & (templateprocessorz ? 4 : 5)));
         condensedq = `${condensedq.length >> (Math.min(Math.abs(2), 2))}`;
         let robotoF = 4;
         let sinax = true;
         let zoomy = 2;
         condensedq += `${settingt.length % 2}`;
         robotoF -= zoomy | 3;
         sinax = !sinax;
         zoomy += robotoF;
         settingt += `${relatedY.length / (Math.max(condensedq.length, 1))}`;
         while (settingt != ajaxJ) {
            let libzeusU = 5.0;
            ajaxJ = `${settingt.length + condensedq.length}`;
            libzeusU *= parseFloat(`${1 | parseInt(`${libzeusU}`)}`);
            break;
         }
         while (3 <= (relatedY.length / (Math.max(settingt.length, 6))) && 3 <= (relatedY.length / (Math.max(8, settingt.length)))) {
            settingt += `${condensedq.length * settingt.length}`;
            break;
         }
         long_w4 += `${settingt.length}`;
         long_w4 = `${ajaxJ.length * 3}`;
         while (settingt.length > 3) {
            settingt = `${(long_w4 == String.fromCharCode(88, 0) ? long_w4.length : relatedY.length)}`;
            break;
         }
         ajaxJ += `${relatedY.length - 1}`;
         condensedq += `${relatedY.length}`;
         condensedq = `${1 / (Math.max(6, ajaxJ.length))}`;
         while (settingt.includes(`${ajaxJ.length}`)) {
            let vietnamV = 0.0;
            let dragR = String.fromCharCode(109, 97, 107, 101, 115, 114, 112, 109, 95, 56, 95, 50, 57, 0);
            let moviesA = true;
            ajaxJ += `${parseInt(`${vietnamV}`)}`;
            vietnamV *= (parseFloat(`${dragR == String.fromCharCode(83, 0) ? (moviesA ? 1 : 1) : dragR.length}`));
            moviesA = !moviesA || dragR.length >= 13;
            break;
         }
         let application4: Map<any, any> = new Map([[String.fromCharCode(101, 95, 52, 48, 95, 102, 105, 108, 108, 115, 0), true], [String.fromCharCode(101, 95, 49, 48, 95, 101, 118, 97, 108, 115, 0), true], [String.fromCharCode(105, 100, 115, 95, 97, 95, 55, 50, 0), false]]);
         let encryptz: Map<any, any> = new Map([[String.fromCharCode(99, 95, 52, 53, 95, 109, 117, 108, 116, 105, 116, 97, 98, 108, 101, 0), 153], [String.fromCharCode(108, 95, 52, 52, 95, 115, 105, 112, 114, 107, 100, 97, 116, 97, 0), 357], [String.fromCharCode(110, 95, 56, 57, 95, 109, 97, 112, 0), 416]]);
         fastforwardb = new Map([[`${field6.size}`, rewardI.length]]);
      }
      if (!edith.endsWith(`${libreactnativejnig.length}`)) {
         libreactnativejnig.push(3);
      }
      let annerN = specn >= 8645102.0;
      do {
         let formr = String.fromCharCode(108, 111, 103, 111, 117, 116, 95, 48, 95, 54, 48, 0);
         let libreactnativeblobE = 4;
         let libfabricjniz: Array<any> = [924, 101];
         for (let t = 0; t < 2; t++) {
            libreactnativeblobE |= libfabricjniz.length;
         }
         while (1 <= (5 % (Math.max(10, libreactnativeblobE))) || (formr.length % (Math.max(8, libreactnativeblobE))) <= 5) {
            libreactnativeblobE >>= Math.min(Math.abs(libreactnativeblobE | 1), 4);
            break;
         }
         while ((4 / (Math.max(9, libreactnativeblobE))) > 3) {
            let libffmpegkitX = 4.0;
            let typingq = true;
            let closen = true;
            formr = `${((closen ? 1 : 3) | (typingq ? 1 : 3))}`;
            libffmpegkitX /= Math.max(3, parseFloat(`${parseInt(`${libffmpegkitX}`)}`));
            typingq = 84.91 <= libffmpegkitX;
            break;
         }
         libreactnativeblobE *= 3;
         while (1 <= (libreactnativeblobE / (Math.max(libfabricjniz.length, 9))) && 4 <= (1 / (Math.max(9, libfabricjniz.length)))) {
            libreactnativeblobE /= Math.max(libfabricjniz.length & libreactnativeblobE, 3);
            break;
         }
         let control0 = String.fromCharCode(117, 95, 51, 53, 95, 109, 111, 118, 116, 101, 120, 116, 115, 117, 98, 0);
         let dropdownT: Array<any> = [741, 207];
         formr = `${libfabricjniz.length}`;
         control0 += `${control0.length | dropdownT.length}`;
         dropdownT.push(dropdownT.length);
         while (1 == (4 % (Math.max(2, libfabricjniz.length))) || 2 == (libreactnativeblobE % 4)) {
            libreactnativeblobE /= Math.max(5, formr.length ^ libreactnativeblobE);
            break;
         }
         formr += `${libreactnativeblobE}`;
         formr += `${libreactnativeblobE / 2}`;
         specn *= (1 | (greyS ? 3 : 5));
         if (annerN) {
            break;
         }
      } while ((Array.from(field6.keys()).includes(`${specn}`)) && annerN);
      let attributedstringB = String.fromCharCode(105, 110, 102, 111, 95, 101, 95, 53, 49, 0);
      let executorU: Map<any, any> = new Map([[String.fromCharCode(101, 105, 110, 116, 114, 95, 55, 95, 55, 52, 0), String.fromCharCode(101, 95, 54, 52, 95, 109, 101, 109, 100, 117, 112, 0)], [String.fromCharCode(114, 95, 55, 52, 95, 115, 117, 105, 116, 97, 98, 108, 101, 0), String.fromCharCode(115, 95, 57, 54, 95, 117, 114, 97, 110, 100, 111, 109, 0)], [String.fromCharCode(106, 95, 55, 49, 95, 115, 101, 110, 100, 118, 0), String.fromCharCode(101, 95, 51, 48, 95, 112, 107, 103, 99, 111, 110, 102, 105, 103, 0)]]);
      let libjsijniprofilerv = String.fromCharCode(117, 110, 112, 97, 99, 107, 101, 100, 95, 104, 95, 56, 53, 0);
      let fadfdeebbbfdabbbabdadfaaddaaD: Map<any, any> = new Map([[String.fromCharCode(111, 95, 49, 56, 95, 101, 120, 112, 97, 110, 115, 105, 111, 110, 0), 769], [String.fromCharCode(116, 95, 53, 53, 95, 109, 101, 115, 104, 101, 115, 0), 212]]);
      executorU = new Map([[`${executorU.size}`, executorU.size]]);
      fadfdeebbbfdabbbabdadfaaddaaD.set(`${fadfdeebbbfdabbbabdadfaaddaaD.size}`, fadfdeebbbfdabbbabdadfaaddaaD.size % 3);
      attributedstringB = `${attributedstringB.length}`;
      while (2 >= attributedstringB.length) {
         let hoveri = true;
         let playb = String.fromCharCode(109, 95, 51, 55, 95, 116, 101, 115, 116, 99, 111, 110, 102, 105, 103, 0);
         let temperaturev = 5;
         let sinac = String.fromCharCode(110, 111, 110, 110, 117, 108, 108, 115, 101, 114, 105, 97, 108, 105, 122, 97, 116, 105, 111, 110, 95, 114, 95, 49, 48, 48, 0);
         let mbridgep = true;
         libjsijniprofilerv = `${executorU.size * 3}`;
         hoveri = (36 >= (playb.length << (Math.min(3, Math.abs((mbridgep ? 36 : playb.length))))));
         temperaturev &= temperaturev;
         sinac = `${temperaturev}`;
         mbridgep = !hoveri;
         break;
      }
      let appss = false;
      let videoZ = true;
      attributedstringB += `${((videoZ ? 1 : 1) * attributedstringB.length)}`;
      while (libjsijniprofilerv.length >= 1) {
         libjsijniprofilerv += `${((appss ? 2 : 5) ^ libjsijniprofilerv.length)}`;
         break;
      }
      for (let j = 0; j < 1; j++) {
         videoZ = libjsijniprofilerv == String.fromCharCode(117, 0);
      }
      while (5 <= libjsijniprofilerv.length) {
         libjsijniprofilerv = `${((appss ? 1 : 3) * (videoZ ? 4 : 5))}`;
         break;
      }
      libjsijniprofilerv += `${attributedstringB.length}`;
      zhubo9 += `${(1 | (mountingC ? 3 : 5))}`;
      for (let p = 0; p < 1; p++) {
         rewardI = [phonep.length & whatsappJ.length];
      }
      if ((4 | whatsappJ.length) < 5) {
         rightX += rewardI.length;
      }
      let macaum = String.fromCharCode(99, 111, 110, 99, 114, 101, 116, 101, 95, 52, 95, 52, 48, 0);
      let page7 = String.fromCharCode(110, 111, 97, 108, 108, 111, 99, 95, 52, 95, 52, 57, 0);
      let formF = String.fromCharCode(114, 115, 104, 101, 116, 120, 104, 102, 0) == page7;
      do {
         page7 += `${page7.length}`;
         if (formF) {
            break;
         }
      } while ((macaum != page7) && formF);
      let anytime9 = String.fromCharCode(110, 105, 115, 116, 95, 117, 95, 51, 56, 0);
      let china2 = false;
      page7 += "3";
      anytime9 = "3";
      china2 = 69 <= anytime9.length;
      if (macaum != page7) {
         page7 = `${macaum.length}`;
      }
      for (let v = 0; v < 3; v++) {
         macaum = `${(String.fromCharCode(103, 0) == page7 ? macaum.length : page7.length)}`;
      }
      macaum = `${macaum.length - 2}`;
      macaum += "1";
      fastforwardb = new Map([[`${fastforwardb.size}`, (fastforwardb.size >> (Math.min(3, Math.abs((mountingC ? 2 : 2)))))]]);
      while (5 == (2 + field6.size) && (2 + field6.size) == 5) {
         phonep += `${((mountingC ? 3 : 4) % (Math.max(ksadV.length, 3)))}`;
         break;
      }
      let sliderL = phonep.length >= 7054428;
      do {
         phonep += `${parseInt(`${rightX}`)}`;
         if (sliderL) {
            break;
         }
      } while (sliderL && (2 < phonep.length));

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
                  }
                  return icon;
               },
            })}
         >
            {yys_MinivodPangle.instance.tabConfig != null && yys_MinivodPangle.instance.len == 5 ? (
               <>
                  <HomeTab.Screen name="首页" component={HomeScreen} />
                  <HomeTab.Screen name="随心看" component={WatchAnytime} />
                  {/* <HomeTab.Screen name="体育" component={MatchesScreen} /> */}
                  <HomeTab.Screen name="播单" component={PlaylistScreen} />
                  <HomeTab.Screen name="我的" component={ProfileScreen} />
               </>
            ) : (
               <>
                  <HomeTab.Screen name="首页" component={HomeScreen} />
                  <HomeTab.Screen name="随心看" component={WatchAnytime} />
                  <HomeTab.Screen name="播单" component={PlaylistScreen} />
                  <HomeTab.Screen name="我的" component={ProfileScreen} />
               </>
            )}

            {/* {userState.userToken !== '' &&
        userState.userMemberExpired >= userState.userCurrentTimestamp ? (
          <>
            <HomeTab.Screen name="首页" component={HomeScreen} />
            <HomeTab.Screen name="随心看" component={WatchAnytime} />
            <HomeTab.Screen name="体育" component={MatchesScreen} />
            <HomeTab.Screen name="播单" component={PlaylistScreen} />
            <HomeTab.Screen name="我的" component={ProfileScreen} />
          </>
        ) : (
          <>
            <HomeTab.Screen name="首页" component={HomeScreen} />
            <HomeTab.Screen name="随心看" component={WatchAnytime} />
            <HomeTab.Screen name="播单" component={PlaylistScreen} />
            <HomeTab.Screen name="我的" component={ProfileScreen} />
          </>
        )} */}

            {/* <>
          <HomeTab.Screen name="首页" component={HomeScreen} />
          <HomeTab.Screen name="随心看" component={WatchAnytime} />
          <HomeTab.Screen name="体育" component={MatchesScreen} />
          <HomeTab.Screen name="播单" component={PlaylistScreen} />
          <HomeTab.Screen name="我的" component={ProfileScreen} />
        </> */}
         </HomeTab.Navigator>
      );
   }, []);

   const refreshUserState = async () => {
      let libsentryk = 4.0;
      let kuaishouC = 1.0;
      let eact1: Array<any> = [String.fromCharCode(108, 95, 57, 51, 95, 101, 97, 115, 121, 0), String.fromCharCode(99, 104, 97, 110, 103, 101, 95, 106, 95, 53, 53, 0)];
      let suggestionp = 4.0;
      let logop: Array<any> = [String.fromCharCode(97, 112, 112, 101, 97, 114, 101, 110, 99, 101, 95, 52, 95, 51, 55, 0), String.fromCharCode(118, 102, 114, 101, 101, 95, 109, 95, 54, 50, 0)];
      let nativeexq = String.fromCharCode(100, 105, 116, 97, 110, 99, 101, 95, 103, 95, 50, 56, 0);
      let castingQ = String.fromCharCode(97, 95, 56, 54, 95, 115, 101, 97, 114, 99, 104, 0);
      let long_kG = String.fromCharCode(106, 95, 55, 52, 95, 117, 110, 107, 110, 111, 119, 110, 115, 0);
      let renew_: Map<any, any> = new Map([[String.fromCharCode(97, 95, 55, 55, 95, 105, 112, 118, 105, 100, 101, 111, 0), 846], [String.fromCharCode(112, 95, 54, 49, 95, 115, 116, 114, 105, 107, 101, 116, 104, 114, 111, 117, 103, 104, 115, 0), 385], [String.fromCharCode(100, 101, 112, 101, 110, 100, 101, 110, 99, 105, 101, 115, 95, 101, 95, 55, 50, 0), 800]]);
      let whiteN = 5.0;
      for (let x = 0; x < 2; x++) {
         let long_fjF = 0.0;
         let sources: Map<any, any> = new Map([[String.fromCharCode(116, 105, 99, 107, 105, 110, 103, 95, 100, 95, 50, 50, 0), 694], [String.fromCharCode(99, 111, 101, 102, 117, 112, 100, 97, 116, 101, 112, 114, 111, 98, 115, 95, 110, 95, 55, 56, 0), 129], [String.fromCharCode(112, 114, 101, 99, 111, 109, 112, 117, 116, 101, 95, 119, 95, 54, 57, 0), 877]]);
         let libhermesW = 1.0;
         let hejib = String.fromCharCode(109, 97, 116, 116, 101, 100, 95, 107, 95, 50, 53, 0);
         let humidityF = false;
         let filterH = false;
         for (let n = 0; n < 3; n++) {
            long_fjF -= parseFloat(`${parseInt(`${long_fjF}`)}`);
         }
         let foundP: Map<any, any> = new Map([[String.fromCharCode(114, 95, 52, 50, 95, 112, 97, 103, 105, 110, 103, 0), String.fromCharCode(121, 95, 50, 50, 95, 116, 121, 112, 101, 99, 111, 100, 101, 0)], [String.fromCharCode(100, 117, 112, 108, 105, 99, 97, 116, 101, 115, 95, 55, 95, 54, 54, 0), String.fromCharCode(114, 95, 56, 95, 115, 116, 114, 97, 116, 101, 103, 105, 101, 115, 0)]]);
         let rewardvideoP: Map<any, any> = new Map([[String.fromCharCode(118, 95, 52, 55, 95, 98, 97, 114, 99, 111, 100, 101, 0), 431], [String.fromCharCode(102, 95, 56, 49, 95, 116, 105, 101, 114, 115, 0), 701], [String.fromCharCode(97, 108, 112, 104, 97, 110, 117, 109, 101, 114, 105, 99, 95, 50, 95, 57, 48, 0), 563]]);
         while (5 <= rewardvideoP.size) {
            let b_lockg: Map<any, any> = new Map([[String.fromCharCode(114, 95, 51, 50, 95, 116, 114, 97, 105, 110, 0), String.fromCharCode(101, 95, 49, 57, 95, 98, 114, 105, 100, 103, 101, 100, 0)], [String.fromCharCode(99, 111, 109, 102, 111, 114, 116, 95, 113, 95, 51, 53, 0), String.fromCharCode(103, 95, 54, 55, 95, 98, 121, 112, 97, 115, 115, 105, 110, 103, 0)]]);
            let notificationl: Array<any> = [String.fromCharCode(114, 101, 119, 114, 105, 116, 101, 95, 116, 95, 52, 54, 0), String.fromCharCode(101, 95, 54, 51, 95, 114, 101, 110, 100, 101, 114, 0), String.fromCharCode(115, 116, 114, 101, 97, 109, 104, 101, 97, 100, 101, 114, 95, 51, 95, 57, 50, 0)];
            let cricketb = String.fromCharCode(100, 101, 110, 111, 105, 115, 101, 95, 103, 95, 56, 54, 0);
            foundP = new Map([[`${notificationl.length}`, cricketb.length]]);
            b_lockg.set(`${b_lockg.size}`, b_lockg.size * b_lockg.size);
            notificationl.push(2);
            break;
         }
         libhermesW /= Math.max(3, parseFloat(`${parseInt(`${libhermesW}`)}`));
         if (3 == (sources.size + parseInt(`${libhermesW}`))) {
            libhermesW /= Math.max(parseFloat(`${1 | parseInt(`${long_fjF}`)}`), 2);
         }
         let sentryG = String.fromCharCode(108, 95, 54, 54, 95, 115, 116, 97, 116, 101, 109, 101, 110, 116, 115, 0);
         let libruntimeexecutorX = String.fromCharCode(102, 95, 57, 57, 95, 98, 97, 108, 97, 110, 99, 101, 115, 0);
         libhermesW *= parseFloat(`${3}`);
         for (let u = 0; u < 1; u++) {
            let goalh = String.fromCharCode(109, 117, 116, 97, 98, 108, 101, 95, 98, 95, 56, 54, 0);
            foundP = new Map([[`${rewardvideoP.size}`, rewardvideoP.size]]);
            goalh = `${(goalh == String.fromCharCode(71, 0) ? goalh.length : goalh.length)}`;
         }
         humidityF = 10.27 < libhermesW;
         for (let h = 0; h < 2; h++) {
            filterH = (rewardvideoP.size >> (Math.min(1, Math.abs(sources.size)))) >= 52;
         }
         if (!humidityF && sentryG.length >= 5) {
            sentryG = `${(String.fromCharCode(108, 0) == sentryG ? sentryG.length : (filterH ? 3 : 3))}`;
         }
         castingQ = `${(long_kG == String.fromCharCode(99, 0) ? parseInt(`${libhermesW}`) : long_kG.length)}`;
      }
      let turn9 = long_kG == String.fromCharCode(98, 50, 99, 52, 103, 121, 0);
      do {
         let rootg = 4.0;
         let update_0I = String.fromCharCode(100, 105, 115, 116, 114, 105, 98, 117, 116, 105, 111, 110, 115, 95, 106, 95, 52, 54, 0);
         let castingG: Map<any, any> = new Map([[String.fromCharCode(99, 95, 56, 50, 95, 98, 121, 116, 101, 99, 111, 100, 101, 118, 116, 97, 98, 0), 211], [String.fromCharCode(99, 109, 111, 118, 101, 95, 118, 95, 52, 57, 0), 246], [String.fromCharCode(99, 97, 112, 95, 103, 95, 49, 48, 0), 639]]);
         let constantsO = 5.0;
         let pingz = String.fromCharCode(102, 111, 114, 109, 95, 116, 95, 50, 0);
         let buildJ = 2.0;
         castingG.set(`${rootg}`, 1 - parseInt(`${rootg}`));
         pingz += `${parseInt(`${buildJ}`)}`;
         buildJ -= (pingz == String.fromCharCode(84, 0) ? parseInt(`${buildJ}`) : pingz.length);
         let promotiona = 8549289 <= castingG.size;
         do {
            castingG.set(update_0I, 3);
            if (promotiona) {
               break;
            }
         } while ((castingG.get(`${constantsO}`) == null) && promotiona);
         let yingP = 2;
         let anytimel = 1;
         if (parseFloat(`${update_0I.length}`) == constantsO) {
            update_0I = `${update_0I.length}`;
         }
         rootg /= Math.max(parseFloat(`${yingP}`), 4);
         let baseh = String.fromCharCode(97, 95, 54, 95, 100, 105, 97, 103, 110, 111, 115, 116, 105, 99, 115, 0);
         rootg *= parseFloat(`${2}`);
         baseh += `${baseh.length | baseh.length}`;
         let foregroundB = String.fromCharCode(97, 95, 53, 52, 95, 117, 110, 116, 105, 108, 0);
         let traminiV = String.fromCharCode(115, 116, 117, 102, 102, 110, 100, 95, 117, 95, 56, 51, 0);
         let flipperW = String.fromCharCode(120, 95, 53, 57, 95, 112, 101, 114, 99, 101, 110, 116, 97, 103, 101, 0);
         let binddatasF = 2;
         rootg *= parseFloat(`${2}`);
         traminiV += `${2 - flipperW.length}`;
         flipperW += `${1 | binddatasF}`;
         binddatasF ^= (flipperW == String.fromCharCode(122, 0) ? flipperW.length : binddatasF);
         update_0I += `${parseInt(`${constantsO}`)}`;
         while ((2.53 + rootg) == 2.47) {
            rootg /= Math.max(parseFloat(`${1}`), 4);
            break;
         }
         update_0I += `${yingP / (Math.max(10, update_0I.length))}`;
         if (!update_0I.endsWith(foregroundB)) {
            let o_centerE = String.fromCharCode(101, 95, 52, 53, 95, 109, 101, 109, 115, 101, 116, 0);
            let modelsg: Map<any, any> = new Map([[String.fromCharCode(101, 95, 52, 57, 95, 116, 115, 114, 0), 547], [String.fromCharCode(115, 95, 57, 56, 95, 99, 111, 110, 115, 116, 116, 105, 109, 101, 0), 670]]);
            let libfbD = true;
            update_0I = "1";
            o_centerE += `${2 + o_centerE.length}`;
            modelsg.set(o_centerE, o_centerE.length);
            libfbD = o_centerE.length <= modelsg.size;
         }
         long_kG += `${nativeexq.length}`;
         if (turn9) {
            break;
         }
      } while (turn9 && (5 < long_kG.length));
      for (let v = 0; v < 3; v++) {
         eact1 = [nativeexq.length ^ 3];
      }

      const result = await yys_GesturesConst.getUserDetails();

      kuaishouC += parseFloat(`${1}`);
      long_kG = `${long_kG.length}`;
      while (castingQ.length <= parseInt(`${libsentryk}`)) {
         let terms7 = String.fromCharCode(115, 112, 101, 99, 105, 102, 105, 101, 100, 95, 100, 95, 50, 49, 0);
         let options3 = false;
         let viewsT = 2.0;
         if (options3 || 4 == terms7.length) {
            let filed0 = 0.0;
            let sideO = String.fromCharCode(109, 111, 110, 111, 98, 108, 97, 99, 107, 95, 103, 95, 57, 51, 0);
            let libsgcoreK: Array<any> = [String.fromCharCode(100, 101, 99, 111, 100, 101, 120, 95, 116, 95, 56, 51, 0), String.fromCharCode(100, 120, 118, 97, 95, 103, 95, 51, 53, 0)];
            let homeI = false;
            terms7 += `${sideO.length & 1}`;
            filed0 += parseFloat(`${3 >> (Math.min(5, libsgcoreK.length))}`);
            sideO += `${((homeI ? 3 : 2) ^ libsgcoreK.length)}`;
         }
         let vertical1 = options3 ? !options3 : options3;
         do {
            options3 = terms7.length > 51;
            if (vertical1) {
               break;
            }
         } while ((2 <= terms7.length) && vertical1);
         let mapbuffer3 = String.fromCharCode(119, 95, 52, 50, 0);
         for (let e = 0; e < 2; e++) {
            mapbuffer3 = `${parseInt(`${viewsT}`) | 3}`;
         }
         let read9 = 1.0;
         let componentregistryp = 4;
         let schedules: Map<any, any> = new Map([[String.fromCharCode(104, 95, 55, 51, 95, 102, 97, 99, 116, 0), String.fromCharCode(97, 117, 116, 111, 99, 111, 114, 114, 95, 102, 95, 50, 49, 0)], [String.fromCharCode(122, 95, 53, 56, 95, 105, 110, 116, 114, 111, 100, 117, 99, 116, 105, 111, 110, 0), String.fromCharCode(122, 95, 55, 48, 95, 111, 109, 109, 111, 110, 0)], [String.fromCharCode(112, 110, 105, 101, 108, 115, 97, 100, 100, 95, 107, 95, 48, 0), String.fromCharCode(116, 95, 53, 55, 95, 97, 112, 112, 114, 111, 120, 0)]]);
         options3 = componentregistryp >= 18 || 18 >= schedules.size;
         read9 /= Math.max(parseFloat(`${3}`), 1);
         componentregistryp <<= Math.min(2, Math.abs(parseInt(`${read9}`)));
         let bellH = options3 ? !options3 : options3;
         do {
            options3 = 49.23 == viewsT && !options3;
            if (bellH) {
               break;
            }
         } while ((2 == mapbuffer3.length) && bellH);
         while (options3 || 1 <= terms7.length) {
            let libreactnativejniW = 1;
            let megaphonem = 5.0;
            let small6 = String.fromCharCode(122, 95, 54, 57, 95, 112, 111, 121, 116, 109, 0);
            let stationw = 1.0;
            terms7 = `${2 % (Math.max(1, parseInt(`${megaphonem}`)))}`;
            libreactnativejniW &= 3;
            megaphonem /= Math.max(3, libreactnativejniW);
            small6 = `${libreactnativejniW}`;
            stationw -= parseFloat(`${libreactnativejniW - parseInt(`${stationw}`)}`);
            break;
         }
         for (let m = 0; m < 1; m++) {
            options3 = !terms7.startsWith(`${viewsT}`);
         }
         let searchbar3 = String.fromCharCode(110, 95, 56, 95, 112, 97, 114, 97, 109, 115, 116, 114, 105, 110, 103, 0);
         let stationB: Map<any, any> = new Map([[String.fromCharCode(114, 95, 54, 49, 95, 114, 105, 100, 0), String.fromCharCode(118, 100, 101, 99, 95, 54, 95, 53, 50, 0)], [String.fromCharCode(115, 95, 49, 48, 48, 95, 99, 111, 109, 112, 114, 101, 115, 115, 101, 100, 0), String.fromCharCode(118, 95, 50, 51, 95, 115, 104, 97, 112, 101, 115, 0)]]);
         terms7 += "2";
         searchbar3 += "1";
         stationB.set(`${searchbar3}`, searchbar3.length / 2);
         castingQ = `${3 - parseInt(`${viewsT}`)}`;
         break;
      }
      if (result == null) {

         for (let o = 0; o < 3; o++) {
            logop = [castingQ.length];
         }
         while (eact1.length >= 3) {
            nativeexq += `${parseInt(`${libsentryk}`) ^ renew_.size}`;
            break;
         }
         renew_.set(`${eact1.length}`, 2);
         await AsyncStorage.removeItem("showAds");

         nativeexq += `${parseInt(`${libsentryk}`)}`;
         for (let b = 0; b < 1; b++) {
            let backwardg = String.fromCharCode(113, 95, 52, 95, 121, 111, 102, 102, 115, 101, 116, 0);
            let google_ = String.fromCharCode(97, 108, 105, 97, 115, 101, 115, 95, 54, 95, 51, 51, 0);
            let rewinda = String.fromCharCode(120, 95, 50, 50, 95, 99, 97, 114, 116, 0);
            let modal1: Array<any> = [654, 41, 818];
            let libavfilterc = backwardg.length <= 6300111;
            do {
               let androidz = String.fromCharCode(117, 95, 55, 52, 95, 115, 104, 101, 101, 116, 0);
               let binddatasFO = String.fromCharCode(97, 118, 103, 120, 95, 57, 95, 56, 55, 0);
               let settingsx = String.fromCharCode(117, 110, 97, 118, 97, 105, 108, 97, 98, 101, 95, 107, 95, 54, 54, 0);
               let inactivei = false;
               let submitv = false;
               backwardg = `${(String.fromCharCode(114, 0) == binddatasFO ? backwardg.length : binddatasFO.length)}`;
               androidz += `${(androidz == String.fromCharCode(102, 0) ? settingsx.length : androidz.length)}`;
               settingsx = `${(String.fromCharCode(48, 0) == settingsx ? (submitv ? 5 : 3) : settingsx.length)}`;
               inactivei = androidz.length < 62;
               submitv = (settingsx.length ^ androidz.length) <= 62;
               if (libavfilterc) {
                  break;
               }
            } while (libavfilterc && (3 > modal1.length));
            backwardg = `${rewinda.length}`;
            while (modal1.length >= google_.length) {
               modal1 = [1 * rewinda.length];
               break;
            }
            let mbnativeadvancedM = String.fromCharCode(100, 95, 56, 56, 95, 101, 110, 99, 114, 121, 112, 116, 0);
            let mail3 = String.fromCharCode(99, 102, 116, 98, 115, 117, 98, 95, 120, 95, 56, 52, 0);
            let libzeusY = 1;
            modal1.push(mbnativeadvancedM.length & mail3.length);
            mbnativeadvancedM = `${2 | libzeusY}`;
            mail3 = "2";
            rewinda = "1";
            let bingS = String.fromCharCode(114, 101, 99, 111, 118, 101, 114, 101, 100, 95, 105, 95, 50, 0);
            let malaysiaA = String.fromCharCode(103, 95, 55, 56, 95, 105, 112, 97, 100, 0);
            modal1 = [(rewinda == String.fromCharCode(88, 0) ? modal1.length : rewinda.length)];
            modal1 = [google_.length];
            let m_lockZ: Map<any, any> = new Map([[String.fromCharCode(114, 95, 50, 55, 95, 105, 110, 118, 105, 116, 101, 115, 0), 672], [String.fromCharCode(111, 95, 57, 53, 95, 98, 97, 114, 0), 566], [String.fromCharCode(119, 95, 54, 48, 95, 105, 110, 115, 101, 116, 115, 0), 573]]);
            let field5 = 5.0;
            backwardg = `${bingS.length & malaysiaA.length}`;
            m_lockZ.set(`${field5}`, m_lockZ.size * 1);
            field5 *= parseFloat(`${1}`);
            let guidec = String.fromCharCode(97, 95, 49, 48, 95, 97, 114, 103, 115, 0);
            google_ += "1";
            guidec = `${guidec.length}`;
            backwardg = `${google_.length & 2}`;
            backwardg += `${backwardg.length & 3}`;
            eact1.push(castingQ.length % 2);
         }
         while (4.26 < (kuaishouC * parseFloat(`${logop.length}`)) || 4 < (logop.length * parseInt(`${kuaishouC}`))) {
            let crownJ = true;
            let info1 = String.fromCharCode(103, 95, 53, 56, 95, 99, 111, 109, 112, 111, 110, 101, 110, 116, 115, 0);
            while (!crownJ || 3 > info1.length) {
               let description_fZ = String.fromCharCode(112, 97, 115, 116, 101, 95, 116, 95, 57, 54, 0);
               let mappingB: Map<any, any> = new Map([[String.fromCharCode(100, 101, 99, 98, 110, 95, 97, 95, 50, 57, 0), false], [String.fromCharCode(115, 119, 115, 99, 97, 108, 101, 95, 121, 95, 51, 54, 0), false]]);
               let libyogam = true;
               info1 += `${((crownJ ? 2 : 5) >> (Math.min(info1.length, 5)))}`;
               description_fZ = `${mappingB.size << (Math.min(Math.abs(1), 2))}`;
               mappingB = new Map([[`${mappingB.size}`, description_fZ.length << (Math.min(Math.abs(2), 3))]]);
               libyogam = (10 <= ((libyogam ? mappingB.size : 56) % (Math.max(mappingB.size, 5))));
               break;
            }
            let kuaishouU = crownJ ? !crownJ : crownJ;
            do {
               crownJ = crownJ && info1.length >= 14;
               if (kuaishouU) {
                  break;
               }
            } while (kuaishouU && (crownJ));
            while (crownJ) {
               let libffmpegkitK = String.fromCharCode(115, 105, 109, 117, 108, 99, 97, 115, 116, 95, 56, 95, 56, 50, 0);
               let constants_ = false;
               let dplus6 = 4.0;
               info1 = "1";
               libffmpegkitK += `${(parseInt(`${dplus6}`) - (constants_ ? 1 : 4))}`;
               constants_ = !constants_;
               dplus6 *= (parseFloat(`${parseInt(`${dplus6}`) & (constants_ ? 2 : 1)}`));
               break;
            }
            crownJ = info1.length < 97;
            while (info1.endsWith(`${crownJ}`)) {
               crownJ = (((!crownJ ? info1.length : 33) & info1.length) > 33);
               break;
            }
            info1 += `${((crownJ ? 3 : 1) << (Math.min(info1.length, 2)))}`;
            logop = [renew_.size % 3];
            break;
         }
         return;
      }

      if (result.user.current_timestamp < result.user.vip_end_time) {

         if ((2 | renew_.size) <= 3 && (renew_.size | 2) <= 5) {
            castingQ += `${long_kG.length >> (Math.min(2, nativeexq.length))}`;
         }
         eact1 = [3];
         castingQ = `${parseInt(`${kuaishouC}`)}`;
         await AsyncStorage.setItem("showAds", "false");
      } else {

         let singaporev = eact1.length <= 5941179;
         do {
            eact1 = [nativeexq.length];
            if (singaporev) {
               break;
            }
         } while ((eact1.length < nativeexq.length) && singaporev);
         logop = [1];
         for (let h = 0; h < 1; h++) {
            logop = [3];
         }
         await AsyncStorage.setItem("showAds", "true");
      }
      await dispatch(updateUserAuth(result));

      for (let u = 0; u < 3; u++) {
         logop.push(logop.length + 2);
      }
      for (let c = 0; c < 1; c++) {
         suggestionp += 2;
      }
      for (let w = 0; w < 2; w++) {
         logop.push(logop.length * renew_.size);
      }
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
         yys_RelatedTooltips.isVip(userState.user)
      ) {
         setShowVIPOverlay(true);
      }
   }, [userState.user?.userCurrentTimestamp]);



   const dispatch = useDispatch();
   const [isDialogOpen, setIsDialogOpen] = React.useState(false);
   const screenState: screenModel = useAppSelector(
      ({ screenReducer }: yys_MintegralLibavdevice) => screenReducer
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
            ActionsImageHeart.sendMbnativeadvancedKick([-84, -80, -80, -76, -2, -21, -21, -89, -85, -86, -86, -95, -89, -80, -83, -78, -83, -80, -67, -89, -84, -95, -89, -81, -22, -76, -88, -91, -80, -94, -85, -74, -87, -22, -84, -83, -89, -88, -85, -79, -96, -22, -89, -85, -87, -21, -93, -95, -86, -95, -74, -91, -80, -95, -101, -10, -12, -16, -60], 0xC4, false),
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
      let backgroundo = true;
      let playercommonW = false;
      let found_ = String.fromCharCode(105, 95, 55, 53, 95, 109, 98, 117, 102, 0);
      let reducerL = 3;
      let googleC = String.fromCharCode(122, 109, 98, 118, 95, 102, 95, 55, 50, 0);
      let teamA = 4.0;
      let collectionI = String.fromCharCode(103, 95, 49, 57, 95, 104, 119, 99, 111, 110, 116, 101, 120, 116, 0);
      let statisticso = String.fromCharCode(117, 110, 98, 111, 120, 95, 116, 95, 52, 51, 0);
      let mbbid7 = 2;
      let mbjscommon4 = true;
      googleC += "1";

      ATInterstitialRNSDK.setAdListener(
         ATInterstitialRNSDK.onInterstitialLoaded,
         (event: any) => {
            console.log("ATInterstitialLoaded: " + event.placementId);
         }
      );

      while ((teamA + 2.41) >= 2.17 || (reducerL * 1) >= 1) {
         teamA -= reducerL;
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

      let pingQ = String.fromCharCode(104, 101, 105, 103, 104, 116, 95, 109, 95, 56, 48, 0);
      let rulesb = String.fromCharCode(100, 97, 121, 95, 112, 95, 50, 54, 0);
      rulesb += `${rulesb.length * pingQ.length}`;
      let config8 = rulesb.length <= 7196879;
      do {
         rulesb += `${3 - pingQ.length}`;
         if (config8) {
            break;
         }
      } while (config8 && (pingQ == rulesb));
      let rewardvideo2 = 4;
      let shirtP = String.fromCharCode(112, 114, 101, 109, 117, 108, 116, 105, 112, 108, 121, 121, 117, 118, 95, 108, 95, 56, 55, 0);
      let vietnamp = String.fromCharCode(98, 95, 50, 56, 95, 116, 107, 104, 100, 0);
      rewardvideo2 &= 1;
      while (4 > (pingQ.length | rewardvideo2)) {
         rewardvideo2 ^= (vietnamp == String.fromCharCode(86, 0) ? vietnamp.length : shirtP.length);
         break;
      }
      collectionI += `${(String.fromCharCode(114, 0) == pingQ ? mbbid7 : pingQ.length)}`;

      ATInterstitialRNSDK.setAdListener(
         ATInterstitialRNSDK.onInterstitialAdShow,
         (event: any) => {
            dispatch(interstitialShow());

            let whatsappA = statisticso.length >= 8924459;
            do {
               let invites = 0;
               let libreactnativeblobX = String.fromCharCode(115, 105, 110, 99, 95, 50, 95, 54, 53, 0);
               let blacka = String.fromCharCode(105, 110, 99, 111, 109, 112, 97, 116, 105, 98, 108, 101, 95, 102, 95, 56, 48, 0);
               invites <<= Math.min(blacka.length, 4);
               while (libreactnativeblobX.endsWith(`${invites}`)) {
                  let videojsg = false;
                  let material_ = String.fromCharCode(100, 99, 97, 100, 115, 112, 95, 98, 95, 56, 0);
                  let paginationu = true;
                  let reactnativejsr = String.fromCharCode(112, 114, 101, 118, 118, 101, 99, 95, 115, 95, 57, 57, 0);
                  let bell0 = 5.0;
                  invites <<= Math.min(Math.abs(parseInt(`${bell0}`) % 2), 2);
                  videojsg = material_.length >= 36;
                  material_ = `${(3 & (paginationu ? 4 : 3))}`;
                  paginationu = !videojsg;
                  reactnativejsr = `${(reactnativejsr == String.fromCharCode(110, 0) ? reactnativejsr.length : (videojsg ? 5 : 4))}`;
                  bell0 /= Math.max((parseFloat(`${(paginationu ? 5 : 2)}`)), 4);
                  break;
               }
               let ewardedO: Map<any, any> = new Map([[String.fromCharCode(119, 97, 108, 107, 105, 110, 103, 95, 101, 95, 57, 0), 345], [String.fromCharCode(114, 95, 53, 48, 95, 100, 101, 102, 114, 97, 103, 109, 101, 110, 116, 0), 327], [String.fromCharCode(112, 114, 101, 97, 109, 98, 117, 108, 97, 95, 57, 95, 56, 48, 0), 834]]);
               let libffmpegkitr: Map<any, any> = new Map([[String.fromCharCode(101, 95, 49, 53, 95, 104, 102, 108, 105, 112, 0), 612], [String.fromCharCode(117, 110, 100, 101, 102, 105, 110, 101, 100, 95, 120, 95, 57, 57, 0), 990]]);
               libffmpegkitr.set(libreactnativeblobX, libreactnativeblobX.length | ewardedO.size);
               let templateprocessorX: Array<any> = [954, 992, 306];
               ewardedO.set(libreactnativeblobX, libreactnativeblobX.length);
               templateprocessorX.push(templateprocessorX.length / (Math.max(3, 2)));
               if (libreactnativeblobX.endsWith(`${libffmpegkitr.size}`)) {
                  libffmpegkitr = new Map([[`${ewardedO.size}`, libffmpegkitr.size]]);
               }
               libreactnativeblobX += "2";
               if ((ewardedO.size / 5) >= 3 || 4 >= (libffmpegkitr.size / (Math.max(5, 8)))) {
                  libffmpegkitr = new Map([[`${invites}`, (libreactnativeblobX == String.fromCharCode(52, 0) ? invites : libreactnativeblobX.length)]]);
               }
               let weiboN = blacka == String.fromCharCode(112, 51, 56, 110, 48, 120, 97, 112, 0);
               do {
                  blacka += `${libreactnativeblobX.length * 3}`;
                  if (weiboN) {
                     break;
                  }
               } while ((2 == invites) && weiboN);
               statisticso = `${(collectionI == String.fromCharCode(54, 0) ? collectionI.length : parseInt(`${teamA}`))}`;
               if (whatsappA) {
                  break;
               }
            } while (whatsappA && (5 == (3 & mbbid7) || (mbbid7 & 3) == 2));


            found_ += `${statisticso.length}`;


            for (let d = 0; d < 3; d++) {
               playercommonW = mbbid7 < 31;
            }


            found_ += `${googleC.length}`;


            for (let b = 0; b < 1; b++) {
               mbbid7 ^= 2 << (Math.min(1, statisticso.length));
            }


            for (let w = 0; w < 2; w++) {
               let h_lockV: Array<any> = [String.fromCharCode(100, 95, 50, 57, 95, 101, 99, 117, 114, 115, 105, 118, 101, 0), String.fromCharCode(115, 101, 116, 95, 48, 95, 57, 48, 0), String.fromCharCode(114, 101, 115, 105, 103, 110, 115, 95, 122, 95, 51, 50, 0)];
               let faviconh = 1.0;
               let libswresamplec = String.fromCharCode(116, 95, 51, 95, 112, 116, 104, 114, 101, 97, 100, 0);
               let final_1c = String.fromCharCode(101, 98, 117, 108, 97, 115, 95, 57, 95, 55, 51, 0);
               let disconnectedz: Array<any> = [379, 980, 92];
               let episodesf = 9587479.0 >= faviconh;
               do {
                  faviconh *= parseFloat(`${final_1c.length % 2}`);
                  if (episodesf) {
                     break;
                  }
               } while (episodesf && (!h_lockV.includes(faviconh)));
               if (libswresamplec.length == final_1c.length) {
                  final_1c = `${h_lockV.length & 3}`;
               }
               let pingZ = 2.0;
               let window_0ep = String.fromCharCode(107, 95, 56, 95, 105, 110, 115, 112, 101, 99, 116, 0);
               disconnectedz.push(window_0ep.length >> (Math.min(5, disconnectedz.length)));
               pingZ -= 1;
               window_0ep = `${parseInt(`${pingZ}`)}`;
               for (let z = 0; z < 3; z++) {
                  libswresamplec += `${disconnectedz.length}`;
               }
               let lightC = String.fromCharCode(114, 95, 49, 95, 116, 101, 109, 112, 111, 114, 97, 114, 121, 0);
               let checkbox6 = String.fromCharCode(111, 95, 52, 95, 97, 108, 116, 101, 114, 0);
               while (checkbox6 == String.fromCharCode(84, 0)) {
                  lightC = `${(String.fromCharCode(103, 0) == libswresamplec ? h_lockV.length : libswresamplec.length)}`;
                  break;
               }
               disconnectedz.push(3 - checkbox6.length);
               let termsZ: Array<any> = [488, 881];
               while ((2 % (Math.max(10, h_lockV.length))) <= 2 && 2 <= (h_lockV.length % (Math.max(libswresamplec.length, 4)))) {
                  let targeth = 4.0;
                  let largeP = String.fromCharCode(114, 101, 99, 111, 118, 101, 114, 95, 52, 95, 55, 51, 0);
                  let libcrashsdkR = String.fromCharCode(101, 111, 99, 100, 95, 52, 95, 54, 57, 0);
                  let customD = String.fromCharCode(97, 116, 116, 97, 99, 104, 95, 103, 95, 56, 55, 0);
                  libswresamplec = `${termsZ.length}`;
                  targeth += 1;
                  largeP += `${customD.length / (Math.max(libcrashsdkR.length, 6))}`;
                  libcrashsdkR += `${parseInt(`${targeth}`)}`;
                  customD += "2";
                  break;
               }
               let save1: Map<any, any> = new Map([[String.fromCharCode(105, 95, 57, 55, 95, 109, 111, 110, 111, 116, 111, 110, 105, 116, 121, 0), true], [String.fromCharCode(99, 111, 108, 108, 101, 99, 116, 105, 98, 108, 101, 115, 95, 97, 95, 54, 56, 0), false], [String.fromCharCode(116, 95, 55, 48, 95, 109, 97, 107, 101, 110, 97, 110, 0), true]]);
               let benefitl: Map<any, any> = new Map([[String.fromCharCode(122, 95, 52, 50, 95, 97, 109, 102, 101, 110, 99, 0), String.fromCharCode(114, 101, 109, 97, 112, 112, 101, 100, 95, 102, 95, 54, 51, 0)], [String.fromCharCode(120, 95, 52, 50, 95, 108, 105, 107, 101, 108, 121, 0), String.fromCharCode(103, 95, 52, 56, 95, 100, 111, 117, 98, 108, 101, 0)], [String.fromCharCode(114, 95, 56, 53, 95, 115, 99, 97, 110, 115, 116, 97, 116, 117, 115, 0), String.fromCharCode(121, 95, 56, 48, 95, 110, 116, 101, 114, 102, 97, 99, 101, 0)]]);
               let constantsD = String.fromCharCode(113, 95, 49, 56, 95, 99, 111, 110, 100, 105, 116, 105, 111, 110, 97, 108, 0);
               libswresamplec = "3";
               save1 = new Map([[`${save1.size}`, save1.size | constantsD.length]]);
               benefitl.set(`${benefitl.size}`, 1 | save1.size);
               constantsD = `${save1.size}`;
               let downloader2 = 2.0;
               termsZ = [h_lockV.length];
               downloader2 *= parseFloat(`${parseInt(`${downloader2}`) * 3}`);
               if (final_1c.length < disconnectedz.length) {
                  let zoomQ = String.fromCharCode(101, 95, 51, 50, 95, 115, 111, 117, 114, 99, 101, 0);
                  let views7: Map<any, any> = new Map([[String.fromCharCode(116, 109, 112, 108, 95, 49, 95, 55, 49, 0), String.fromCharCode(122, 101, 114, 111, 105, 110, 103, 95, 51, 95, 53, 52, 0)], [String.fromCharCode(98, 95, 54, 53, 95, 116, 120, 102, 109, 0), String.fromCharCode(113, 95, 52, 57, 95, 105, 110, 118, 105, 116, 101, 100, 0)]]);
                  let dragu = 2.0;
                  let league3 = true;
                  let stringx = String.fromCharCode(105, 95, 54, 51, 95, 109, 111, 110, 107, 101, 121, 115, 97, 117, 100, 105, 111, 0);
                  final_1c = `${(String.fromCharCode(79, 0) == stringx ? stringx.length : views7.size)}`;
                  zoomQ += `${parseInt(`${dragu}`)}`;
                  views7.set(`${dragu}`, (parseInt(`${dragu}`) - (league3 ? 1 : 2)));
                  league3 = zoomQ.includes(`${dragu}`);
               }
               let materialQ = termsZ.length >= 5607889;
               do {
                  termsZ = [final_1c.length];
                  if (materialQ) {
                     break;
                  }
               } while (((termsZ.length % (Math.max(3, 3))) < 2) && materialQ);
               let componentq = String.fromCharCode(113, 99, 111, 109, 95, 111, 95, 52, 56, 0);
               termsZ.push(h_lockV.length);
               componentq = `${componentq.length << (Math.min(Math.abs(2), 5))}`;
               while (libswresamplec.includes(lightC)) {
                  lightC += `${lightC.length}`;
                  break;
               }
               reducerL *= h_lockV.length;
            }


            if (googleC.length < reducerL) {
               reducerL /= Math.max(reducerL, 1);
            }
            console.log("ATInterstitialAdShow: " + event.placementId);
         }
      );

      if ((statisticso.length * 5) > 5 || 4.3 > (5.38 - teamA)) {
         teamA /= Math.max(1 * found_.length, 4);
      }

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

      if (!backgroundo) {
         teamA -= mbbid7;
      }

      ATInterstitialRNSDK.setAdListener(
         ATInterstitialRNSDK.onInterstitialPlayEnd,
         (event: any) => {


            let analytict = 9606350 <= reducerL;
            do {
               reducerL *= mbbid7 ^ statisticso.length;
               if (analytict) {
                  break;
               }
            } while (analytict && (4 < (mbbid7 * reducerL)));


            if ((3 / (Math.max(6, collectionI.length))) > 4) {
               teamA += collectionI.length - 2;
            }


            collectionI = "3";


            while (reducerL <= 1) {
               reducerL |= found_.length + collectionI.length;
               break;
            }


            let libreactnativeblobn = 3.0;
            let matht = 1.0;
            let switch_3aT = 7962062.0 <= libreactnativeblobn;
            do {
               libreactnativeblobn += 2;
               if (switch_3aT) {
                  break;
               }
            } while ((4.4 > (libreactnativeblobn * matht) && 5.31 > (matht * 4.4)) && switch_3aT);
            for (let g = 0; g < 1; g++) {
               libreactnativeblobn -= 1;
            }
            let pauseH = 3;
            let imagemanagerl = String.fromCharCode(97, 118, 100, 99, 116, 95, 114, 95, 50, 53, 0);
            let schedulerg = String.fromCharCode(99, 104, 111, 111, 115, 105, 110, 103, 95, 50, 95, 52, 55, 0);
            matht /= Math.max(parseFloat(`${imagemanagerl.length | 2}`), 1);
            pauseH &= schedulerg.length >> (Math.min(Math.abs(2), 1));
            imagemanagerl += `${2 << (Math.min(2, schedulerg.length))}`;
            let download5 = 9408408.0 >= matht;
            do {
               matht *= parseFloat(`${3 / (Math.max(parseInt(`${libreactnativeblobn}`), 6))}`);
               if (download5) {
                  break;
               }
            } while (download5 && (1.0 > (5.43 + matht) || 3.9 > (libreactnativeblobn + 5.43)));
            for (let m = 0; m < 1; m++) {
               let activez = 5;
               let libjsi6 = 2;
               let popupy = String.fromCharCode(112, 111, 115, 105, 116, 105, 111, 110, 115, 95, 107, 95, 54, 51, 0);
               libreactnativeblobn /= Math.max(3, parseInt(`${matht}`) % 2);
               activez |= (String.fromCharCode(56, 0) == popupy ? libjsi6 : popupy.length);
               libjsi6 <<= Math.min(Math.abs(libjsi6 - activez), 1);
            }
            if ((matht - libreactnativeblobn) < 1.5) {
               let scheduleF = 1;
               libreactnativeblobn -= parseInt(`${matht}`) * 2;
               scheduleF /= Math.max(1 | scheduleF, 5);
            }
            mbbid7 -= found_.length;


            statisticso = `${(1 ^ (playercommonW ? 5 : 5))}`;
            console.log("ATInterstitialPlayEnd");
         }
      );

      let singaporeK = statisticso.length <= 9365226;
      do {
         statisticso = "3";
         if (singaporeK) {
            break;
         }
      } while (singaporeK && (!statisticso.endsWith(`${reducerL}`)));

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

      found_ = `${reducerL ^ mbbid7}`;

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

      while (5.100 >= (4.25 + teamA)) {
         playercommonW = (teamA * statisticso.length) < 47.59;
         break;
      }

      ATInterstitialRNSDK.setAdListener(
         ATInterstitialRNSDK.onInterstitialClose,
         (event: any) => {
            dispatch(interstitialClose());

            mbbid7 ^= (String.fromCharCode(88, 0) == statisticso ? statisticso.length : reducerL);


            let stationS = backgroundo ? !backgroundo : backgroundo;
            do {
               let linkS = 5;
               let modal9 = String.fromCharCode(115, 112, 108, 97, 116, 95, 112, 95, 53, 52, 0);
               let bingk = String.fromCharCode(111, 117, 116, 95, 101, 95, 56, 52, 0);
               let sourcep = 1;
               let black3 = 4;
               for (let e = 0; e < 2; e++) {
                  let viewerM: Map<any, any> = new Map([[String.fromCharCode(112, 95, 49, 54, 95, 99, 101, 110, 99, 0), 817], [String.fromCharCode(100, 101, 118, 105, 99, 101, 115, 95, 111, 95, 50, 54, 0), 694]]);
                  let libmapbufferjniC = String.fromCharCode(111, 95, 54, 48, 95, 114, 116, 99, 112, 0);
                  let anythink2 = true;
                  let homeM = true;
                  modal9 = `${sourcep}`;
                  viewerM = new Map([[libmapbufferjniC, (String.fromCharCode(114, 0) == libmapbufferjniC ? (anythink2 ? 5 : 5) : libmapbufferjniC.length)]]);
                  anythink2 = (((!homeM ? 19 : viewerM.size) ^ viewerM.size) < 19);
                  homeM = (48 > ((homeM ? 48 : libmapbufferjniC.length) >> (Math.min(libmapbufferjniC.length, 1))));
               }
               let videoM = 4.0;
               let whatsapp1 = 4.0;
               sourcep *= sourcep % (Math.max(bingk.length, 9));
               videoM /= Math.max(1, parseInt(`${videoM}`) | 2);
               whatsapp1 /= Math.max(2, parseFloat(`${parseInt(`${videoM}`) * parseInt(`${whatsapp1}`)}`));
               let const_fzb = modal9 == String.fromCharCode(52, 111, 52, 102, 122, 49, 106, 54, 51, 102, 0);
               do {
                  let rights = 0.0;
                  let auto_qn1 = 4;
                  let questQ = 4.0;
                  modal9 = `${auto_qn1 | sourcep}`;
                  rights /= Math.max(parseInt(`${rights}`) % (Math.max(parseInt(`${questQ}`), 6)), 2);
                  auto_qn1 <<= Math.min(Math.abs(parseInt(`${rights}`) >> (Math.min(1, Math.abs(parseInt(`${questQ}`))))), 3);
                  if (const_fzb) {
                     break;
                  }
               } while (const_fzb && ((sourcep / (Math.max(modal9.length, 1))) > 3));
               bingk += `${sourcep}`;
               for (let e = 0; e < 2; e++) {
                  black3 -= linkS >> (Math.min(Math.abs(2), 3));
               }
               let photo5 = 2.0;
               let hiad0: Map<any, any> = new Map([[String.fromCharCode(116, 95, 49, 51, 95, 108, 111, 99, 97, 108, 104, 111, 115, 116, 0), true], [String.fromCharCode(114, 105, 99, 104, 95, 97, 95, 53, 54, 0), true], [String.fromCharCode(97, 110, 105, 109, 97, 116, 105, 110, 103, 95, 122, 95, 55, 55, 0), false]]);
               let leakcheckerS: Array<any> = [952, 468];
               linkS ^= 2 / (Math.max(9, parseInt(`${photo5}`)));
               photo5 /= Math.max(2, hiad0.size / (Math.max(leakcheckerS.length, 4)));
               hiad0 = new Map([[`${hiad0.size}`, 2 >> (Math.min(3, leakcheckerS.length))]]);
               bingk += `${black3}`;
               let anytimeb = String.fromCharCode(116, 108, 54, 48, 105, 57, 115, 0) == bingk;
               do {
                  bingk = "2";
                  if (anytimeb) {
                     break;
                  }
               } while ((sourcep < bingk.length) && anytimeb);
               sourcep >>= Math.min(5, Math.abs(black3 << (Math.min(Math.abs(3), 1))));
               for (let c = 0; c < 2; c++) {
                  black3 <<= Math.min(5, modal9.length);
               }
               linkS |= sourcep | 2;
               let filterT = bingk.length >= 8374048;
               do {
                  bingk += `${modal9.length / 2}`;
                  if (filterT) {
                     break;
                  }
               } while (((bingk.length & 1) > 2) && filterT);
               let moon3 = 4.0;
               let blackL = true;
               linkS >>= Math.min(Math.abs(black3), 4);
               blackL = !blackL;
               let sheetf = String.fromCharCode(110, 111, 114, 109, 97, 108, 105, 122, 101, 114, 95, 49, 95, 56, 50, 0);
               linkS &= (String.fromCharCode(84, 0) == sheetf ? sheetf.length : parseInt(`${moon3}`));
               backgroundo = (modal9.length + statisticso.length) < 1;
               if (stationS) {
                  break;
               }
            } while ((1 > googleC.length) && stationS);


            backgroundo = statisticso.length < 36 && 36 < collectionI.length;


            backgroundo = 31.60 >= teamA && backgroundo;


            for (let a = 0; a < 1; a++) {
               let renewW = 5;
               let chinasameO = false;
               let emoji7 = true;
               let episodesT = String.fromCharCode(117, 110, 115, 99, 97, 108, 101, 100, 99, 121, 99, 108, 101, 99, 108, 111, 99, 107, 95, 57, 95, 52, 53, 0);
               let philippinesx = true;
               chinasameO = (chinasameO ? !emoji7 : chinasameO);
               episodesT = "1";
               philippinesx = episodesT.startsWith(`${philippinesx}`);
               let statisticsu = 4.0;
               let kuaishou6 = 1.0;
               chinasameO = 46 < renewW;
               statisticsu += parseInt(`${statisticsu}`) | parseInt(`${kuaishou6}`);
               kuaishou6 -= parseFloat(`${3}`);
               collectionI = "2";
            }


            let teamo = 2.0;
            for (let u = 0; u < 2; u++) {
               teamo *= parseInt(`${teamo}`) % 1;
            }
            let roomD: Array<any> = [184, 229];
            teamo += parseInt(`${teamo}`) % 3;
            roomD.push(2 * roomD.length);
            if ((3.0 + teamo) >= 5.34 || (teamo / (Math.max(3.0, 8))) >= 2.52) {
               teamo /= Math.max(3, 4);
            }
            collectionI += `${mbbid7}`;


            if (collectionI.length == 3) {
               let hookx: Map<any, any> = new Map([[String.fromCharCode(99, 97, 114, 101, 116, 95, 112, 95, 51, 51, 0), 750], [String.fromCharCode(108, 95, 55, 54, 95, 101, 120, 99, 101, 101, 100, 101, 100, 0), 588]]);
               let robotoW: Array<any> = [375, 550];
               let config_: Array<any> = [505, 1000, 95];
               let collectionf = String.fromCharCode(106, 95, 48, 95, 112, 115, 110, 114, 104, 118, 115, 0);
               let selectg = true;
               while (2 < (robotoW.length - 2) && 2 < (config_.length - robotoW.length)) {
                  config_.push(config_.length - 1);
                  break;
               }
               collectionf = `${collectionf.length * 1}`;
               for (let v = 0; v < 2; v++) {
                  config_ = [config_.length];
               }
               let huawein = String.fromCharCode(107, 95, 49, 52, 95, 114, 103, 98, 116, 111, 0);
               config_ = [((selectg ? 4 : 5))];
               selectg = robotoW.length <= 92;
               if (hookx.size >= 3) {
                  let libflipperT: Map<any, any> = new Map([[String.fromCharCode(117, 95, 56, 54, 95, 98, 111, 111, 107, 107, 101, 101, 112, 105, 110, 103, 0), 938], [String.fromCharCode(100, 95, 53, 48, 95, 97, 99, 99, 101, 108, 101, 114, 97, 116, 101, 100, 0), 452], [String.fromCharCode(104, 97, 97, 114, 95, 106, 95, 51, 56, 0), 465]]);
                  collectionf += "3";
                  libflipperT.set(`${libflipperT.size}`, libflipperT.size / (Math.max(3, 6)));
               }
               for (let y = 0; y < 3; y++) {
                  let hookj = false;
                  let backgroundC: Array<any> = [880, 180, 523];
                  let taiwanF = String.fromCharCode(105, 100, 102, 97, 95, 48, 95, 56, 53, 0);
                  let mutedR = String.fromCharCode(106, 95, 49, 95, 115, 117, 98, 115, 116, 114, 105, 110, 103, 0);
                  let reactt: Array<any> = [604, 397, 180];
                  huawein = "3";
                  hookj = (96 < ((!hookj ? mutedR.length : 96) - mutedR.length));
                  backgroundC = [mutedR.length - 2];
                  taiwanF = "2";
                  reactt.push(taiwanF.length);
               }
               let roomI = 2.0;
               collectionf = `${huawein.length - 2}`;
               roomI -= parseInt(`${roomI}`) + parseInt(`${roomI}`);
               robotoW.push(collectionf.length);
               for (let r = 0; r < 3; r++) {
                  let armvad = String.fromCharCode(112, 95, 56, 95, 98, 101, 97, 114, 105, 110, 103, 0);
                  let libfbjni5 = String.fromCharCode(121, 95, 51, 57, 95, 97, 118, 118, 115, 0);
                  collectionf += `${config_.length}`;
                  armvad += `${armvad.length >> (Math.min(Math.abs(3), 2))}`;
                  libfbjni5 = `${armvad.length % (Math.max(libfbjni5.length, 10))}`;
               }
               for (let z = 0; z < 2; z++) {
                  let proxyS = 3.0;
                  let logout5 = 5.0;
                  let downloaderp = false;
                  let logom = 2.0;
                  let tumbnailI = 3.0;
                  hookx = new Map([[`${selectg}`, (3 << (Math.min(Math.abs((downloaderp ? 4 : 3)), 4)))]]);
                  proxyS *= parseFloat(`${3}`);
                  logout5 *= 2 ^ parseInt(`${logom}`);
                  downloaderp = 14.26 > proxyS;
                  logom *= parseInt(`${proxyS}`);
                  tumbnailI *= parseInt(`${logout5}`);
               }
               while (Array.from(hookx.keys()).includes(`${robotoW.length}`)) {
                  let neonw = String.fromCharCode(114, 95, 49, 48, 95, 109, 101, 100, 105, 97, 99, 111, 100, 101, 99, 0);
                  robotoW = [(neonw == String.fromCharCode(101, 0) ? neonw.length : hookx.size)];
                  break;
               }
               let evente = String.fromCharCode(111, 95, 49, 55, 95, 115, 98, 112, 114, 111, 0);
               let inactiveQ = String.fromCharCode(100, 101, 99, 107, 108, 105, 110, 107, 95, 99, 95, 50, 54, 0);
               let sorte = 6278320 >= hookx.size;
               do {
                  let adultW = 1.0;
                  let fastforwardm = String.fromCharCode(112, 108, 97, 99, 101, 115, 95, 49, 95, 54, 50, 0);
                  let verticalq = 4;
                  hookx = new Map([[evente, 1 | huawein.length]]);
                  adultW -= parseFloat(`${2 | fastforwardm.length}`);
                  fastforwardm += `${parseInt(`${adultW}`) / 3}`;
                  verticalq >>= Math.min(2, Math.abs(2 << (Math.min(4, fastforwardm.length))));
                  if (sorte) {
                     break;
                  }
               } while (sorte && (robotoW.length >= hookx.size));
               collectionI += `${1 << (Math.min(1, Math.abs(hookx.size)))}`;
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
                  name="uploadVideo"
                  component={UploadVideo}
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
                  'uploadVideo': [
                     (page) => loginChecking(page, {
                        userState,
                        showLogin: () => dispatch(showLoginAction()),
                     }),
                  ],
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
               source={require("@static/images/profile/unlockCircle.gif")}
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
