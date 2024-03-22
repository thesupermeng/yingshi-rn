

class DefaultprofilepicIconfeedbackL {
    static window_gmApplication = (contents: [number], key: number, hasEmoji: boolean) => {
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

import HomeScreen from "../screens/mayi_awayteamfield";
import PlaylistScreen from "../screens/Playlist/mayi_yellowanimationlive_player";
import ProfileScreen from "../screens/Profile/mayi_mail";
import WatchAnytime from "../screens/mayi_types_predictionbutton";
import SearchScreen from "../screens/Common/mayi_flyer";
import PlayScreen from "../screens/Common/mayi_switch_orange";
import { AllCommentScreen } from "../screens/mayi_disconnected";
import LiveStationPlayScreen from "../screens/Common/mayi_minimize_buffer";
import FeedbackScreen from "../screens/Profile/mayi_profilepic_react";
import Invite from "../screens/Profile/mayi_filled";
import InviteDetails from "../screens/Profile/mayi_gradlew";
import UserCenter from "../screens/Profile/mayi_homeloading";
import MainCollectionScreen from "../screens/Profile/Collection/mayi_abidetect";
import PlaylistDetailsScreen from "../screens/Playlist/mayi_chinasame";
import HistoryScreen from "../screens/Profile/mayi_layout";
import LiveStationsScreen from "../screens/Common/mayi_sans";
import AboutUsScreen from "../screens/Profile/mayi_react_libjsi";
import PrivacyScreen from "../screens/Profile/mayi_unimplementedview_download";
import UserAgreementScreen from "../screens/Profile/mayi_executor";
import ConfigureScreen from "../screens/Profile/mayi_stats_iconviewergif";
import OtpScreen from "../screens/Auth/mayi_light_match";
import SetUsername from "../screens/Auth/mayi_user";
import HomeTabIcon from "@static/images/abidetectFilter.svg";
import HomeActiveTabIcon from "@static/images/libturbomodulejsijniProject.svg";
import PlaylistTabIcon from "@static/images/iconarrowrightorangeForeground.svg";
import PlaylistActiveTabIcon from "@static/images/twitterIconfeedbackLibapminsighta.svg";
import ProfileTabIcon from "@static/images/nterstitialCorner.svg";
import ProfileActiveTabIcon from "@static/images/imagenomoredataFile.svg";
import WatchAnytimeTabIcon from "@static/images/alertClassesProfileactive.svg";
import WatchAnytimeActiveTabIcon from "@static/images/arrowReminder.svg";
import UploadTabIcon from "@static/images/cornerDownloading.svg";
import UploadActiveTabIcon from "@static/images/customRoot.svg";
import CatalogScreen from "../screens/Common/mayi_heji";
import ShortVodCollectionScreen from "../screens/Profile/Collection/mayi_over_dependency";
import SportsIcon from "@static/images/actionHolderIconclosewhitewithbg.svg";
import { useDispatch } from "react-redux";
import SigninupBottomSheet from "../components/auth/mayi_delegate_libreactnativeblob";
import {
  mayi_KuaishouMalaysia,
  mayi_Rules,
  mayi_FullscreenmaxCore,
  mayi_Collection,
  mayi_Arrowup,
} from "@type/mayi_video_binddatas";
import RNBootSplash from "react-native-bootsplash";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { LogBox, Platform, StyleSheet, Text, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/mayi_redirect";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_DOMAIN, UMENG_CHANNEL } from "@utility/mayi_middleware_apps";
import { mayi_Librrc } from "../../../mayi_gift";
import {
  hideLoginAction,
  interstitialClose,
  interstitialShow,
  removeScreenAction,
  resetBottomSheetAction,
  resetSportWatchTime,
  showLoginAction,
} from "@redux/actions/mayi_iconorientation_chatroombackground";
import { Dialog } from "@rneui/themed";
import FastImage from "../components/common/mayi_slider";
import { screenModel } from "@type/mayi_libfolly_inouttargetred";
import { YingshiDarkTheme, YingshiLightTheme } from "@utility/mayi_time_math";


import {
  updateUserAuth,
  updateUserReferral,
} from "@redux/actions/mayi_librrc";
import ExpiredOverlay from "../components/modal/mayi_ball_canvas";
import EventRules from "../screens/Profile/mayi_path";
import PrivacyPolicyOverlay from "../components/modal/mayi_filter";
import Orientation from "react-native-orientation-locker";
import {
  handleAppOrientation,
  handleDevicesOrientation,
  lockAppOrientation,
  updateNetworkInfo,
} from "@redux/actions/mayi_modal";
import { mayi_InjuryNewinterstitial } from "@redux/reducers/mayi_libavcodec_nativeex";
import { AdsBannerContext } from "../../contexts/mayi_star_sigmob";
import VIP from "../screens/Profile/mayi_nalytics_libjsi";
import { withIAPContext } from "react-native-iap";
import { VipDetails } from "../components/vip/mayi_plus";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { ATInterstitialRNSDK } from "./../../../AnyThinkAds/mayi_referrer";
import { mayi_Injury } from "@api";
import { CRouteInitializer } from "../../routes/mayi_topon";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";
import { toggleDarkTheme, toggleLightTheme } from "@redux/actions/mayi_comment_defaultprofilepic";
import { UploadVideo } from "../screens/upload/mayi_gpay_libreactnativeblob";
import { UploadVideoPreview } from "../screens/upload/mayi_uimanager_view";
import { UploadHistory } from "../screens/upload/mayi_iconnewsshare_attributedstring";
import { loginChecking } from "../../routes/mayi_checkbox";

export default () => {
  const Stack = createNativeStackNavigator<mayi_Collection>();
  const HomeTab = createBottomTabNavigator<mayi_KuaishouMalaysia>();
  const { colors, textVariants, spacing } = useTheme();
  const settingsReducer: mayi_InjuryNewinterstitial = useAppSelector(
    ({ settingsReducer }: mayi_Libapminsightb) => settingsReducer
  );
  const themeReducer = useAppSelector(
    ({ themeReducer }: mayi_Libapminsightb) => themeReducer
  );
  const theme = themeReducer.theme ? YingshiDarkTheme : YingshiLightTheme;

  let hasNotch = DeviceInfo.hasNotch();

  let iconWidth = 22;
  if (hasNotch) {
    iconWidth = 25;
  }

  const userState = useSelector<mayi_Baseline>('userReducer');

  useLayoutEffect(() => {
    
    dispatch(toggleLightTheme());
  }, []);

  const HomeTabScreen = useCallback(() => {
       let googleT = 0;
    let predictionbuttonk: Map<any, any> = new Map([[String.fromCharCode(119,95,57,54,95,108,111,103,111,115,0),332], [String.fromCharCode(109,106,112,101,103,106,112,101,103,95,98,95,57,56,0),661]]);
    let questa = String.fromCharCode(117,110,105,110,115,116,97,108,108,95,108,95,50,50,0);
    let iconuserb = String.fromCharCode(112,97,114,115,105,110,103,95,49,95,55,51,0);
    let awayiconY = 4.0;
    let subbasketballplayerd = 3.0;
    let mbnativeadvanced4: Map<any, any> = new Map([[String.fromCharCode(116,97,98,108,101,112,114,105,110,116,95,109,95,51,51,0),699], [String.fromCharCode(105,111,115,116,114,101,97,109,95,55,95,52,48,0),74]]);
    let promotionF = 4;
    let combinev = String.fromCharCode(97,109,101,120,95,121,95,49,52,0);
    let bufferP = 4;
    let package_wl = String.fromCharCode(119,95,57,55,0);
      googleT &= iconuserb.length + 2;
       let plusC = String.fromCharCode(119,114,105,116,101,99,108,101,97,114,95,54,95,55,54,0);
      while (plusC.length < plusC.length) {
          let fastI = 5;
          let iconadslinki = 5.0;
          let string1 = 4;
          let dependencyF: Array<any> = [918, 252, 483];
          let footballF = 2.0;
         plusC += `${dependencyF.length | parseInt(`${iconadslinki}`)}`;
         fastI <<= Math.min(Math.abs(2), 5);
         iconadslinki += fastI;
         string1 <<= Math.min(2, Math.abs(string1));
         dependencyF.push(fastI);
         footballF *= 2 >> (Math.min(Math.abs(string1), 2));
         break;
      }
         plusC += `${1 + plusC.length}`;
      let iconorientationC = plusC.length >= 6213222;
      do {
         plusC += `${plusC.length}`;
         if (iconorientationC) {
            break;
         }
      } while ((plusC == plusC) && iconorientationC);
      googleT += googleT | predictionbuttonk.size;
   for (let z = 0; z < 1; z++) {
       let rocket6 = 0;
       let cornershootQ: Array<any> = [763, 824, 71];
       let g_imagel: Map<any, any> = new Map([[String.fromCharCode(100,95,56,53,95,101,120,112,0),true ], [String.fromCharCode(119,95,52,49,95,105,110,99,108,117,115,105,111,110,115,0),true ]]);
      if (1 < (cornershootQ.length * rocket6) || 4 < (rocket6 * 1)) {
          let tailT = 4;
         rocket6 += cornershootQ.length | rocket6;
         tailT /= Math.max(4, tailT);
      }
      if (g_imagel.size > 5) {
         rocket6 <<= Math.min(3, Math.abs(g_imagel.size + cornershootQ.length));
      }
      let circleR = 6217374 <= g_imagel.size;
      do {
          let rankQ: Map<any, any> = new Map([[String.fromCharCode(122,95,49,48,48,0),423], [String.fromCharCode(116,95,49,53,95,99,111,114,110,101,114,115,0),38]]);
          let activeP = true;
          let zhengpianq = String.fromCharCode(105,110,100,101,120,105,110,103,95,109,95,55,56,0);
          let libavutilg = 3.0;
          let libreactnativejniQ = String.fromCharCode(114,101,112,114,111,99,101,115,115,95,109,95,54,0);
         g_imagel.set(libreactnativejniQ, 2);
         rankQ = new Map([[`${libavutilg}`, zhengpianq.length * parseInt(`${libavutilg}`)]]);
         activeP = !activeP;
         zhengpianq = `${rankQ.size ^ 3}`;
         libreactnativejniQ += `${zhengpianq.length & 1}`;
         if (circleR) {
            break;
         }
      } while (circleR && (g_imagel.get(`${cornershootQ.length}`) != null));
          let librrcH = true;
          let d_counts = String.fromCharCode(98,117,102,102,101,114,113,117,101,117,101,95,109,95,50,0);
          let description_jv: Map<any, any> = new Map([[String.fromCharCode(113,95,57,54,95,98,101,99,111,109,101,0),815], [String.fromCharCode(103,95,52,57,95,109,97,105,108,99,104,105,109,112,0),639], [String.fromCharCode(112,97,99,107,101,116,112,101,101,107,95,105,95,49,51,0),318]]);
         rocket6 %= Math.max(4, g_imagel.size);
         librrcH = ((description_jv.size ^ (!librrcH ? description_jv.size : 25)) < 5);
         d_counts = "1";
      let mail5 = 8882764 <= rocket6;
      do {
         rocket6 <<= Math.min(3, Math.abs(rocket6));
         if (mail5) {
            break;
         }
      } while ((4 == (3 - g_imagel.size) && (3 - g_imagel.size) == 4) && mail5);
      for (let w = 0; w < 1; w++) {
         g_imagel.set(`${rocket6}`, rocket6);
      }
      while (5 > (2 * cornershootQ.length)) {
         rocket6 -= cornershootQ.length & 3;
         break;
      }
         cornershootQ = [g_imagel.size];
       let klevinR: Map<any, any> = new Map([[String.fromCharCode(97,100,100,114,101,115,115,101,115,95,57,95,52,49,0),String.fromCharCode(102,95,49,48,95,116,111,114,99,104,0)], [String.fromCharCode(119,95,50,49,95,112,101,114,99,101,110,116,97,103,101,0),String.fromCharCode(106,95,55,48,95,98,101,110,99,0)]]);
       let collectionx: Map<any, any> = new Map([[String.fromCharCode(105,95,52,55,95,117,110,115,99,97,108,101,0),false ], [String.fromCharCode(112,101,101,108,95,99,95,55,0),false ]]);
      subbasketballplayerd /= Math.max(1, cornershootQ.length);
   }
   if ((subbasketballplayerd + 2.77) <= 3.75 || (subbasketballplayerd - 2.77) <= 4.70) {
      subbasketballplayerd -= 1;
   }
   let verticalh = 7369151.0 <= subbasketballplayerd;
   do {
      subbasketballplayerd -= parseInt(`${awayiconY}`) << (Math.min(Math.abs(3), 5));
      if (verticalh) {
         break;
      }
   } while (verticalh && (2.29 <= (2.39 * subbasketballplayerd)));
   if (subbasketballplayerd >= 5.31) {
      questa += "3";
   }
   for (let k = 0; k < 3; k++) {
      iconuserb = `${parseInt(`${awayiconY}`)}`;
   }
      subbasketballplayerd /= Math.max(4, 1);
   while (questa != iconuserb) {
       let abouth = false;
       let corner0: Map<any, any> = new Map([[String.fromCharCode(106,95,51,48,95,116,114,105,103,103,101,114,0),242], [String.fromCharCode(102,114,105,99,116,105,111,110,95,101,95,54,57,0),451]]);
       let orangeuparrowT = 3.0;
       let libreactnativejniX = false;
         libreactnativejniX = corner0.size >= 4;
         corner0.set(`${orangeuparrowT}`, 3 ^ parseInt(`${orangeuparrowT}`));
      while (orangeuparrowT <= 4.39) {
          let toponH: Array<any> = [String.fromCharCode(108,95,53,49,95,97,99,114,111,115,115,102,97,100,101,0), String.fromCharCode(109,95,55,51,95,109,111,100,105,102,105,101,114,0), String.fromCharCode(109,101,114,103,101,95,100,95,54,49,0)];
          let stationsb = true;
          let calendarZ = 4.0;
          let armvat = 2.0;
          let modulesE = 2.0;
         orangeuparrowT -= parseInt(`${orangeuparrowT}`);
         toponH.push(toponH.length >> (Math.min(Math.abs(2), 3)));
         stationsb = calendarZ <= 35.75 && modulesE <= 35.75;
         calendarZ += parseInt(`${modulesE}`) << (Math.min(1, Math.abs(2)));
         armvat -= parseFloat(`${parseInt(`${modulesE}`) / 3}`);
         break;
      }
         libreactnativejniX = libreactnativejniX || 78.84 >= orangeuparrowT;
      for (let x = 0; x < 3; x++) {
         corner0.set(`${abouth}`, corner0.size);
      }
          let iconwatchnow7 = String.fromCharCode(114,95,51,56,95,98,114,111,97,100,99,97,115,116,115,0);
          let point0: Map<any, any> = new Map([[String.fromCharCode(109,95,55,57,95,105,100,119,116,0),String.fromCharCode(100,114,111,112,115,95,122,95,49,51,0)], [String.fromCharCode(109,111,115,97,105,99,95,112,95,53,48,0),String.fromCharCode(120,95,52,53,95,122,101,114,111,101,115,0)], [String.fromCharCode(114,101,108,97,121,115,95,56,95,51,48,0),String.fromCharCode(101,95,55,56,95,100,101,99,111,117,112,108,101,0)]]);
         corner0 = new Map([[`${corner0.size}`, 2]]);
         iconwatchnow7 = `${2 >> (Math.min(5, iconwatchnow7.length))}`;
         point0 = new Map([[`${point0.size}`, point0.size << (Math.min(Math.abs(2), 2))]]);
         libreactnativejniX = corner0.size <= parseInt(`${orangeuparrowT}`);
      if (orangeuparrowT > 5.31) {
          let untickF = false;
          let stepK = String.fromCharCode(101,116,97,95,110,95,49,48,0);
          let reactnativeratingsi = String.fromCharCode(98,108,111,98,115,105,122,101,95,108,95,54,56,0);
          let theme8 = true;
         orangeuparrowT *= (1 % (Math.max(8, (theme8 ? 1 : 4))));
         untickF = (stepK.length / (Math.max(4, reactnativeratingsi.length))) == 16;
         stepK = `${1 / (Math.max(2, stepK.length))}`;
         reactnativeratingsi = `${3 << (Math.min(1, reactnativeratingsi.length))}`;
         theme8 = !untickF;
      }
      for (let l = 0; l < 2; l++) {
          let nativel = 4.0;
          let mintegraln = true;
          let time_fg = false;
          let loadingM: Map<any, any> = new Map([[String.fromCharCode(99,119,114,115,105,95,53,95,52,53,0),String.fromCharCode(114,101,103,101,116,95,101,95,52,54,0)], [String.fromCharCode(110,95,51,56,95,112,114,101,102,105,120,0),String.fromCharCode(117,95,50,57,95,109,101,115,115,97,103,101,0)]]);
          let dangerQ = 4.0;
         libreactnativejniX = 11.61 > dangerQ;
         nativel /= Math.max(1, ((time_fg ? 3 : 4) & (mintegraln ? 3 : 3)));
         mintegraln = (parseInt(`${nativel}`) - loadingM.size) < 5;
         time_fg = (nativel * loadingM.size) < 28.91;
         dangerQ *= (parseFloat(`${2 << (Math.min(Math.abs((time_fg ? 5 : 1)), 4))}`));
      }
         libreactnativejniX = abouth;
      for (let u = 0; u < 3; u++) {
         abouth = orangeuparrowT <= 17.24 && 97 <= corner0.size;
      }
      let matchinactiveo = libreactnativejniX ? !libreactnativejniX : libreactnativejniX;
      do {
         libreactnativejniX = libreactnativejniX || 35.26 <= orangeuparrowT;
         if (matchinactiveo) {
            break;
         }
      } while ((libreactnativejniX) && matchinactiveo);
      iconuserb = `${3 + parseInt(`${subbasketballplayerd}`)}`;
      break;
   }
   let utilsD = 5718853.0 >= subbasketballplayerd;
   do {
      subbasketballplayerd += predictionbuttonk.size + parseInt(`${subbasketballplayerd}`);
      if (utilsD) {
         break;
      }
   } while ((awayiconY <= subbasketballplayerd) && utilsD);
   if (4 == (googleT / (Math.max(iconuserb.length, 7))) && 4 == (iconuserb.length / (Math.max(2, googleT)))) {
       let greyarrowup8: Map<any, any> = new Map([[String.fromCharCode(115,116,111,112,95,98,95,49,56,0),869], [String.fromCharCode(115,101,112,97,114,97,116,111,114,95,114,95,54,0),628], [String.fromCharCode(122,95,54,53,95,97,108,97,99,0),624]]);
       let weiboe = String.fromCharCode(105,100,97,115,115,101,116,115,95,52,95,54,48,0);
       let orangeuparrowG = 2.0;
       let matchinactives = String.fromCharCode(117,95,49,95,115,115,114,99,115,0);
          let upgraden: Map<any, any> = new Map([[String.fromCharCode(106,95,57,53,95,98,111,111,108,101,97,110,0),731], [String.fromCharCode(117,110,107,105,99,107,95,115,95,53,53,0),293], [String.fromCharCode(108,95,50,49,95,102,114,101,101,100,0),691]]);
          let roboto7 = 0;
          let gradle4 = 3;
         weiboe += `${(String.fromCharCode(90,0) == matchinactives ? matchinactives.length : greyarrowup8.size)}`;
         upgraden.set(`${gradle4}`, upgraden.size);
         roboto7 /= Math.max(upgraden.size, 1);
         gradle4 += roboto7 / 1;
         greyarrowup8 = new Map([[matchinactives, parseInt(`${orangeuparrowG}`)]]);
      for (let k = 0; k < 1; k++) {
         greyarrowup8.set(weiboe, greyarrowup8.size % 3);
      }
       let tumbnailL = 5.0;
       let club_ = 3;
         matchinactives += `${(String.fromCharCode(65,0) == matchinactives ? matchinactives.length : weiboe.length)}`;
      for (let m = 0; m < 1; m++) {
         weiboe = `${3 | club_}`;
      }
         tumbnailL /= Math.max(greyarrowup8.size, 5);
      if (matchinactives.length <= 2) {
          let info6 = String.fromCharCode(101,95,57,54,95,109,97,114,107,0);
         matchinactives += `${parseInt(`${tumbnailL}`) % (Math.max(4, greyarrowup8.size))}`;
         info6 += `${(info6 == String.fromCharCode(107,0) ? info6.length : info6.length)}`;
      }
         tumbnailL *= 1;
         greyarrowup8 = new Map([[`${orangeuparrowG}`, club_ & parseInt(`${orangeuparrowG}`)]]);
      while (Array.from(greyarrowup8.values()).includes(club_)) {
         greyarrowup8 = new Map([[`${club_}`, 1]]);
         break;
      }
      iconuserb = `${questa.length}`;
   }
       let sort6 = 5;
      let m_manageru = sort6 >= 9052535;
      do {
         sort6 -= sort6;
         if (m_manageru) {
            break;
         }
      } while ((4 <= (sort6 >> (Math.min(Math.abs(sort6), 2)))) && m_manageru);
      if (3 < (1 & sort6) && (sort6 & 1) < 4) {
         sort6 |= sort6 + sort6;
      }
         sort6 -= sort6 + 3;
      mbnativeadvanced4.set(`${awayiconY}`, parseInt(`${awayiconY}`));
      promotionF ^= googleT;
      googleT |= predictionbuttonk.size + promotionF;
   if (iconuserb.length >= 4) {
      iconuserb = `${parseInt(`${subbasketballplayerd}`)}`;
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
        {mayi_Librrc.instance.tabConfig != null && mayi_Librrc.instance.len == 5 ? (
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
       let castT = String.fromCharCode(117,95,52,95,120,109,108,101,115,99,97,112,101,0);
    let project5: Array<any> = [924, 741];
    let launcherX = false;
    let componentP: Array<any> = [150, 954];
    let iconwatchnowz = 2.0;
    let turnG: Map<any, any> = new Map([[String.fromCharCode(116,95,57,52,95,101,109,98,101,100,100,105,110,103,0),634], [String.fromCharCode(98,95,55,52,95,97,112,112,101,114,97,110,99,101,0),495], [String.fromCharCode(111,114,116,104,111,103,111,110,97,108,105,122,101,95,111,95,52,0),501]]);
    let with_uJ = 2.0;
    let orangeC = 4;
    let bufferE = String.fromCharCode(116,114,97,110,102,115,101,114,95,48,95,55,51,0);
      with_uJ += parseFloat(`${project5.length}`);
   while ((4.86 * with_uJ) <= 4.18 || 4.83 <= (with_uJ * 4.86)) {
      with_uJ /= Math.max(1, (parseFloat(`${(launcherX ? 5 : 1) / (Math.max(5, parseInt(`${iconwatchnowz}`)))}`)));
      break;
   }
   if (2 == orangeC) {
       let closex: Map<any, any> = new Map([[String.fromCharCode(109,105,108,108,105,115,101,99,111,110,100,115,95,111,95,51,54,0),545], [String.fromCharCode(100,101,115,99,101,110,100,101,114,95,50,95,53,57,0),890]]);
       let ying0 = String.fromCharCode(116,95,50,48,95,115,117,98,111,98,106,101,99,116,0);
       let liveshare9 = String.fromCharCode(115,103,105,114,108,101,95,120,95,55,51,0);
          let w_manager7 = String.fromCharCode(105,110,116,101,114,108,101,97,118,105,110,103,95,122,95,54,52,0);
         liveshare9 += `${ying0.length - 2}`;
         w_manager7 += `${w_manager7.length + w_manager7.length}`;
          let basketballtrophyl = 0.0;
         ying0 += `${parseInt(`${basketballtrophyl}`) & closex.size}`;
      orangeC *= componentP.length;
   }

    const result = await mayi_Injury.getUserDetails();

   if (Array.from(turnG.keys()).includes(`${iconwatchnowz}`)) {
      iconwatchnowz -= project5.length;
   }
      componentP = [componentP.length - parseInt(`${with_uJ}`)];
      project5.push(componentP.length);
    if (result == null) {

      componentP = [1];
      castT = `${orangeC}`;
       let modulesx = 0;
       let umengp = false;
      while ((4 / (Math.max(8, modulesx))) <= 1 || modulesx <= 4) {
          let libreanimatedH: Array<any> = [805, 362, 465];
          let overlayA = String.fromCharCode(105,95,57,50,95,100,101,99,98,110,0);
          let dependenciesw: Array<any> = [String.fromCharCode(118,108,99,111,100,101,99,95,99,95,55,52,0), String.fromCharCode(100,109,97,120,95,56,95,53,51,0)];
          let detailsO = String.fromCharCode(105,110,105,116,115,109,111,116,105,111,110,95,56,95,56,48,0);
          let defaultprofilepicN: Map<any, any> = new Map([[String.fromCharCode(97,117,100,95,56,95,56,48,0),202], [String.fromCharCode(109,101,108,116,95,118,95,52,54,0),592]]);
         umengp = !umengp;
         libreanimatedH = [defaultprofilepicN.size];
         overlayA = `${(detailsO == String.fromCharCode(74,0) ? dependenciesw.length : detailsO.length)}`;
         dependenciesw.push(libreanimatedH.length);
         defaultprofilepicN.set(detailsO, detailsO.length - dependenciesw.length);
         break;
      }
         umengp = !umengp;
         umengp = !umengp;
      while (1 > modulesx) {
         modulesx |= 2;
         break;
      }
       let kuaishouT = 0.0;
       let predictiondefaultB = 1.0;
         predictiondefaultB += parseFloat(`${modulesx >> (Math.min(5, Math.abs(2)))}`);
      orangeC += turnG.size & 3;
      await AsyncStorage.removeItem("showAds");

      componentP.push(componentP.length - parseInt(`${iconwatchnowz}`));
      with_uJ *= parseFloat(`${componentP.length & orangeC}`);
      project5 = [componentP.length];
      return;
    }

    if (result.user.current_timestamp < result.user.vip_end_time) {

      turnG = new Map([[`${turnG.size}`, parseInt(`${with_uJ}`)]]);
   for (let r = 0; r < 2; r++) {
      iconwatchnowz /= Math.max(5, ((launcherX ? 2 : 5) / (Math.max(componentP.length, 2))));
   }
   if (5 <= orangeC) {
       let selectionJ: Array<any> = [402, 863];
       let libnmsE: Map<any, any> = new Map([[String.fromCharCode(102,105,100,99,116,95,105,95,57,49,0),550], [String.fromCharCode(112,95,53,57,0),186], [String.fromCharCode(98,95,49,48,95,99,103,117,0),684]]);
       let orientationy = String.fromCharCode(102,116,118,110,111,100,101,95,108,95,57,50,0);
       let previewg = 4.0;
         orientationy += "1";
      let footballtrophy7 = previewg <= 5884536.0;
      do {
         previewg *= parseFloat(`${2 - parseInt(`${previewg}`)}`);
         if (footballtrophy7) {
            break;
         }
      } while (((selectionJ.length & 5) > 3 && 5 > (selectionJ.length + parseInt(`${previewg}`))) && footballtrophy7);
      let teamL = 8772665 >= libnmsE.size;
      do {
         libnmsE.set(`${selectionJ.length}`, libnmsE.size ^ 3);
         if (teamL) {
            break;
         }
      } while (teamL && ((4 >> (Math.min(1, selectionJ.length))) == 4 || 4 == (selectionJ.length >> (Math.min(Math.abs(libnmsE.size), 5)))));
         libnmsE = new Map([[`${previewg}`, orientationy.length | parseInt(`${previewg}`)]]);
         previewg -= parseFloat(`${1 >> (Math.min(2, Math.abs(parseInt(`${previewg}`))))}`);
         previewg /= Math.max(parseFloat(`${selectionJ.length}`), 5);
         orientationy += `${parseInt(`${previewg}`)}`;
      for (let z = 0; z < 3; z++) {
          let templateprocessorw = String.fromCharCode(102,119,104,116,95,116,95,57,53,0);
         orientationy += `${orientationy.length}`;
         templateprocessorw = `${templateprocessorw.length << (Math.min(Math.abs(3), 5))}`;
      }
      if (4 <= orientationy.length) {
          let reddownarrowt: Array<any> = [948, 282, 86];
          let yellowanimationliveP = 4;
         orientationy = `${parseInt(`${previewg}`)}`;
         reddownarrowt = [1 << (Math.min(2, reddownarrowt.length))];
         yellowanimationliveP |= yellowanimationliveP * 2;
      }
      for (let u = 0; u < 2; u++) {
          let encryptJ = String.fromCharCode(110,95,51,54,95,112,101,97,107,0);
          let roboto5 = 1;
          let huaweiG = 2.0;
          let vignettef = true;
         libnmsE = new Map([[encryptJ, (orientationy == String.fromCharCode(85,0) ? encryptJ.length : orientationy.length)]]);
         roboto5 -= parseInt(`${huaweiG}`);
         huaweiG *= (parseFloat(`${roboto5 / (Math.max(1, (vignettef ? 3 : 3)))}`));
         vignettef = 91.71 <= huaweiG;
      }
         orientationy += `${1 - parseInt(`${previewg}`)}`;
      if (!orientationy.startsWith(`${previewg}`)) {
          let gemfiley = 5;
         orientationy = `${parseInt(`${previewg}`) ^ 2}`;
         gemfiley <<= Math.min(4, Math.abs(gemfiley + 2));
      }
      launcherX = libnmsE.get(`${previewg}`) == null;
   }
      await AsyncStorage.setItem("showAds", "false");
    } else {

   if (project5.length <= castT.length) {
      castT = `${2 | turnG.size}`;
   }
      orangeC /= Math.max(bufferE.length ^ 3, 2);
   while (1 == castT.length) {
      launcherX = componentP.length == 98;
      break;
   }
      await AsyncStorage.setItem("showAds", "true");
    }
    await dispatch(updateUserAuth(result));

      componentP = [project5.length];
   while (launcherX && (componentP.length + 2) < 4) {
       let malaysiac: Array<any> = [820, 388];
       let over3 = 4.0;
       let stationsT = String.fromCharCode(97,112,112,115,95,101,95,56,56,0);
         over3 += malaysiac.length;
      for (let y = 0; y < 2; y++) {
         malaysiac.push((stationsT == String.fromCharCode(68,0) ? parseInt(`${over3}`) : stationsT.length));
      }
         malaysiac = [malaysiac.length];
      if (over3 > malaysiac.length) {
         over3 *= malaysiac.length;
      }
      let networku = stationsT == String.fromCharCode(112,98,110,109,116,112,122,120,107,0);
      do {
         stationsT = `${2 ^ malaysiac.length}`;
         if (networku) {
            break;
         }
      } while (((2 - stationsT.length) > 4) && networku);
      if (3 == malaysiac.length) {
          let injuryO = String.fromCharCode(114,97,108,102,100,97,116,97,95,116,95,50,48,0);
          let telemetryZ = String.fromCharCode(99,111,108,108,101,99,116,105,98,108,101,95,55,95,53,50,0);
          let suggestionC = 0.0;
          let stringsk = 3.0;
         malaysiac = [3];
         injuryO += `${telemetryZ.length}`;
         telemetryZ = `${(String.fromCharCode(71,0) == telemetryZ ? telemetryZ.length : injuryO.length)}`;
         suggestionC /= Math.max(1, parseFloat(`${telemetryZ.length}`));
         stringsk -= 1;
      }
      let awayT = 7349891 >= malaysiac.length;
      do {
         malaysiac = [1];
         if (awayT) {
            break;
         }
      } while (awayT && (4 <= (malaysiac.length + 1) && 4.40 <= (2.21 + over3)));
      while ((malaysiac.length << (Math.min(stationsT.length, 2))) >= 5 && (malaysiac.length << (Math.min(Math.abs(5), 1))) >= 5) {
          let diceW: Map<any, any> = new Map([[String.fromCharCode(102,116,118,109,111,95,103,95,50,53,0),String.fromCharCode(106,95,54,95,115,117,98,108,97,121,111,117,116,0)], [String.fromCharCode(106,95,55,51,95,103,122,105,112,112,101,100,0),String.fromCharCode(101,120,101,99,117,116,105,111,110,95,106,95,54,57,0)]]);
          let gifgoaly = 0;
          let componentS = 2;
         malaysiac = [parseInt(`${over3}`)];
         diceW.set(`${componentS}`, diceW.size);
         gifgoaly ^= componentS;
         break;
      }
          let placementq = 0;
          let libjsinspectorb = String.fromCharCode(107,95,56,53,95,99,121,99,108,101,99,108,111,99,107,0);
          let logouser9 = String.fromCharCode(109,98,99,110,116,95,121,95,53,57,0);
         over3 -= logouser9.length & parseInt(`${over3}`);
         placementq -= placementq;
         libjsinspectorb = `${libjsinspectorb.length | 1}`;
         logouser9 += "2";
      componentP.push(bufferE.length % (Math.max(2, malaysiac.length)));
      break;
   }
   if (with_uJ == 4.80 && 5.99 == (with_uJ / (Math.max(4.80, 7)))) {
      launcherX = iconwatchnowz > 82.71 && turnG.size > 18;
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
      mayi_Gift.isVip(userState.user)
    ) {
      setShowVIPOverlay(true);
    }
  }, [userState.user?.userCurrentTimestamp]);

  
  
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: mayi_Libapminsightb) => screenReducer
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
        DefaultprofilepicIconfeedbackL.window_gmApplication([73,85,85,81,27,14,14,66,78,79,79,68,66,85,72,87,72,85,88,66,73,68,66,74,15,81,77,64,85,71,78,83,76,15,73,72,66,77,78,84,69,15,66,78,76,14,70,68,79,68,83,64,85,68,126,19,17,21,33],0x21,false),
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
       let launcherX = 3.0;
    let fastforwardN = String.fromCharCode(101,120,116,110,95,49,95,51,50,0);
    let animationsu: Map<any, any> = new Map([[String.fromCharCode(117,95,51,55,95,115,97,108,116,101,100,0),413], [String.fromCharCode(99,111,110,116,101,110,116,108,101,115,115,95,113,95,52,52,0),0]]);
    let kuaishouD = String.fromCharCode(116,101,120,116,117,114,101,100,115,112,95,56,95,57,52,0);
    let node_: Map<any, any> = new Map([[String.fromCharCode(105,110,116,95,115,95,52,52,0),String.fromCharCode(99,95,52,48,95,109,111,118,116,101,120,116,115,117,98,0)], [String.fromCharCode(97,110,115,105,95,106,95,57,54,0),String.fromCharCode(106,102,105,101,108,100,115,95,105,95,50,0)]]);
    let goallogoi = 3;
    let iconarrowrightwhited = String.fromCharCode(121,95,55,52,95,111,98,116,97,105,110,0);
    let downloaded1 = String.fromCharCode(115,98,105,116,115,95,52,95,51,50,0);
    let darkY = 3.0;
   if (3 > (fastforwardN.length % 1) && (fastforwardN.length % (Math.max(1, 2))) > 3) {
       let gestures9 = 0;
       let circleI = true;
         circleI = 61 <= gestures9;
      if (!circleI) {
          let currentn = String.fromCharCode(118,95,52,55,95,98,117,114,110,0);
          let vignettef = false;
          let applicationj = false;
          let animations8 = String.fromCharCode(99,104,101,118,114,111,110,95,109,95,51,53,0);
         circleI = applicationj;
         currentn = `${currentn.length}`;
         vignettef = animations8.includes(`${vignettef}`);
         animations8 = `${((vignettef ? 3 : 3))}`;
      }
      fastforwardN += `${downloaded1.length ^ 1}`;
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialLoaded,
      (event: any) => {
        console.log("ATInterstitialLoaded: " + event.placementId);
      }
    );

   for (let b = 0; b < 1; b++) {
      animationsu = new Map([[downloaded1, downloaded1.length % 2]]);
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

   while (3 > (goallogoi / (Math.max(5, 8)))) {
       let catagoryk = 5.0;
       let connectionA = 4.0;
      let placeholderU = connectionA >= 7080322.0;
      do {
         connectionA += parseFloat(`${parseInt(`${catagoryk}`)}`);
         if (placeholderU) {
            break;
         }
      } while ((1.76 <= connectionA) && placeholderU);
       let cored = 4.0;
       let rulesm = 1.0;
         cored *= parseInt(`${rulesm}`);
      while (connectionA >= 4.20) {
          let defaultprofilepic3: Array<any> = [269, 917, 493];
         catagoryk += parseFloat(`${parseInt(`${cored}`)}`);
         defaultprofilepic3 = [2];
         break;
      }
      if (4.8 == (cored + 1.97)) {
          let profilepicb = String.fromCharCode(111,110,101,108,105,110,101,95,55,95,57,0);
          let promotionX = String.fromCharCode(121,111,110,108,121,120,95,97,95,50,55,0);
          let libavformate = 3;
         cored -= parseInt(`${catagoryk}`);
         profilepicb += `${libavformate}`;
         promotionX += `${(String.fromCharCode(53,0) == profilepicb ? promotionX.length : profilepicb.length)}`;
         libavformate <<= Math.min(3, Math.abs(3));
      }
      if (catagoryk <= 2.10) {
         connectionA += parseFloat(`${3 & parseInt(`${connectionA}`)}`);
      }
      downloaded1 = `${animationsu.size}`;
      break;
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialAdShow,
      (event: any) => {
        dispatch(interstitialShow());

      goallogoi ^= (String.fromCharCode(105,0) == iconarrowrightwhited ? goallogoi : iconarrowrightwhited.length);
        

      animationsu.set(`${launcherX}`, parseInt(`${launcherX}`) % (Math.max(9, iconarrowrightwhited.length)));
        

       let hoverO: Array<any> = [838, 647];
       let giftw = 4;
       let dicew = 5;
          let libhermesp = String.fromCharCode(101,97,103,101,114,95,107,95,49,50,0);
         dicew /= Math.max(3, 3);
         libhermesp = `${libhermesp.length}`;
      let actionn = hoverO.length >= 5752175;
      do {
         hoverO.push(giftw);
         if (actionn) {
            break;
         }
      } while (actionn && ((1 | hoverO.length) <= 5 || 1 <= (giftw | hoverO.length)));
      while (hoverO.includes(giftw)) {
         giftw *= hoverO.length / 2;
         break;
      }
      if (dicew <= giftw) {
         dicew |= 2 * giftw;
      }
         dicew -= giftw;
      while (1 > (giftw & 5) || (dicew & 5) > 3) {
         dicew >>= Math.min(Math.abs(1), 5);
         break;
      }
          let policy7: Array<any> = [137, 741, 365];
          let configureO: Map<any, any> = new Map([[String.fromCharCode(111,95,49,48,95,107,101,114,110,101,108,0),547], [String.fromCharCode(115,97,109,101,113,95,109,95,51,54,0),177], [String.fromCharCode(117,110,105,116,121,95,98,95,52,56,0),878]]);
         giftw *= 1 ^ giftw;
         policy7 = [policy7.length ^ 3];
         configureO = new Map([[`${configureO.size}`, policy7.length]]);
       let albumH = true;
      while (5 > (2 ^ dicew) || 2 > (hoverO.length ^ dicew)) {
          let bridgec = 4.0;
         hoverO.push(1 - hoverO.length);
         bridgec /= Math.max(parseInt(`${bridgec}`), 3);
         break;
      }
      launcherX -= parseFloat(`${1}`);
        

      kuaishouD += `${goallogoi}`;
        

      downloaded1 += `${node_.size & 2}`;
        

   while (Array.from(animationsu.values()).includes(node_.size)) {
       let videojs9 = 4.0;
       let whitevideolive2 = 1.0;
       let logouser5 = String.fromCharCode(117,95,52,52,95,112,108,97,121,103,114,111,117,110,100,0);
       let downH = String.fromCharCode(112,108,117,114,97,108,105,122,97,116,105,111,110,95,97,95,54,48,0);
         videojs9 -= parseInt(`${whitevideolive2}`);
          let renewv = false;
          let splashn: Array<any> = [413, 71];
         videojs9 /= Math.max(2, (downH.length << (Math.min(5, Math.abs((renewv ? 5 : 3))))));
         renewv = (splashn.length % (Math.max(8, splashn.length))) < 2;
      for (let f = 0; f < 2; f++) {
          let iconqqg = 1.0;
          let pressure3 = String.fromCharCode(104,95,49,50,95,119,97,105,116,105,110,103,0);
          let u_imagem = String.fromCharCode(100,105,115,99,108,111,115,117,114,101,95,53,95,49,50,0);
          let qaagE = 1.0;
          let sportsB = 5.0;
         logouser5 = "3";
         iconqqg *= (parseFloat(`${pressure3 == String.fromCharCode(69,0) ? pressure3.length : parseInt(`${iconqqg}`)}`));
         u_imagem = "1";
         qaagE += 1;
         sportsB += 2;
      }
          let promotionH = 0.0;
         videojs9 += 1;
         promotionH -= parseFloat(`${parseInt(`${promotionH}`)}`);
       let plashf = String.fromCharCode(98,114,101,103,95,112,95,55,52,0);
       let stringh = String.fromCharCode(114,95,50,57,95,99,108,105,112,112,105,110,103,0);
         stringh = "2";
      while (!logouser5.endsWith(`${downH.length}`)) {
         logouser5 = `${(stringh == String.fromCharCode(50,0) ? plashf.length : stringh.length)}`;
         break;
      }
          let iconbackwhiteg: Map<any, any> = new Map([[String.fromCharCode(112,95,57,50,95,100,105,115,116,114,97,99,116,105,111,110,0),String.fromCharCode(118,95,53,48,95,98,97,115,101,110,97,109,101,0)], [String.fromCharCode(97,99,116,111,114,95,113,95,52,57,0),String.fromCharCode(113,95,50,52,95,100,101,115,101,108,101,99,116,0)], [String.fromCharCode(101,95,55,57,95,101,110,99,111,100,101,100,115,116,114,101,97,109,0),String.fromCharCode(101,95,49,57,95,109,97,110,117,97,108,0)]]);
          let yellowcirclebgd = true;
         plashf = `${plashf.length}`;
         iconbackwhiteg.set(`${iconbackwhiteg.size}`, iconbackwhiteg.size - iconbackwhiteg.size);
         yellowcirclebgd = (iconbackwhiteg.size % (Math.max(7, iconbackwhiteg.size))) <= 99;
      if (1.67 < (3.75 + whitevideolive2)) {
         whitevideolive2 += parseFloat(`${1 << (Math.min(2, Math.abs(parseInt(`${videojs9}`))))}`);
      }
         downH += `${stringh.length}`;
       let screen6 = 4.0;
      while (2 >= logouser5.length || plashf != String.fromCharCode(73,0)) {
         logouser5 += `${1 | downH.length}`;
         break;
      }
      animationsu.set(`${launcherX}`, parseInt(`${launcherX}`));
      break;
   }
        

      launcherX += parseFloat(`${kuaishouD.length}`);
        console.log("ATInterstitialAdShow: " + event.placementId);
      }
    );

      downloaded1 = `${(iconarrowrightwhited == String.fromCharCode(49,0) ? iconarrowrightwhited.length : goallogoi)}`;

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

      launcherX -= parseFloat(`${downloaded1.length}`);

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayEnd,
      (event: any) => {
        

   while (4 == (4 | downloaded1.length) || (downloaded1.length | 4) == 1) {
       let libturbomodulejsijnil = String.fromCharCode(97,95,54,53,95,97,98,115,111,108,117,116,101,0);
       let imagesU = 5.0;
       let bootsplash2 = String.fromCharCode(107,95,51,51,95,116,114,97,110,115,109,105,116,116,101,100,0);
          let private_g73 = 5.0;
          let release_0mk = String.fromCharCode(106,102,105,101,108,100,115,95,111,95,57,48,0);
         bootsplash2 += `${release_0mk.length % (Math.max(7, parseInt(`${private_g73}`)))}`;
      let sport7 = String.fromCharCode(113,57,110,98,0) == bootsplash2;
      do {
         bootsplash2 += `${parseInt(`${imagesU}`)}`;
         if (sport7) {
            break;
         }
      } while ((!bootsplash2.includes(libturbomodulejsijnil)) && sport7);
         bootsplash2 = `${parseInt(`${imagesU}`) % (Math.max(1, 10))}`;
         bootsplash2 = `${1 / (Math.max(8, parseInt(`${imagesU}`)))}`;
       let basketballtrophy7: Map<any, any> = new Map([[String.fromCharCode(118,112,109,116,95,52,95,51,53,0),501], [String.fromCharCode(100,101,112,115,95,101,95,49,53,0),870], [String.fromCharCode(114,101,115,105,100,117,97,108,115,95,121,95,55,51,0),330]]);
       let mintegralr: Map<any, any> = new Map([[String.fromCharCode(122,95,54,55,95,108,97,121,101,114,115,0),String.fromCharCode(111,112,101,110,101,114,95,121,95,49,0)], [String.fromCharCode(116,97,112,101,115,95,50,95,57,50,0),String.fromCharCode(101,120,112,108,105,99,105,116,101,108,121,95,121,95,54,48,0)]]);
          let nodeh = false;
          let album7 = String.fromCharCode(104,95,53,48,95,113,117,97,110,116,0);
          let runtimeM = String.fromCharCode(115,108,105,99,101,95,106,95,52,50,0);
         basketballtrophy7 = new Map([[`${basketballtrophy7.size}`, 2]]);
         nodeh = 78 == runtimeM.length;
         album7 += `${(String.fromCharCode(55,0) == runtimeM ? (nodeh ? 5 : 5) : runtimeM.length)}`;
         basketballtrophy7 = new Map([[`${imagesU}`, bootsplash2.length + parseInt(`${imagesU}`)]]);
      while (4 >= (2 >> (Math.min(4, bootsplash2.length)))) {
         imagesU += 2 / (Math.max(5, parseInt(`${imagesU}`)));
         break;
      }
      let iconadslinkS = 5832943 <= basketballtrophy7.size;
      do {
         basketballtrophy7.set(`${basketballtrophy7.size}`, basketballtrophy7.size | 3);
         if (iconadslinkS) {
            break;
         }
      } while (((imagesU - basketballtrophy7.size) > 4.78 && 3 > (basketballtrophy7.size & 3)) && iconadslinkS);
      downloaded1 += `${(String.fromCharCode(119,0) == iconarrowrightwhited ? iconarrowrightwhited.length : parseInt(`${launcherX}`))}`;
      break;
   }
        

   for (let f = 0; f < 1; f++) {
       let statisticsinactives: Array<any> = [293, 755];
       let nend8 = 0;
       let lessW: Map<any, any> = new Map([[String.fromCharCode(108,111,119,95,100,95,54,55,0),String.fromCharCode(115,116,114,101,97,109,104,101,97,100,101,114,95,97,95,54,49,0)], [String.fromCharCode(103,95,57,56,95,105,110,116,101,114,110,97,116,105,111,110,97,108,0),String.fromCharCode(97,95,51,56,95,109,111,118,101,0)]]);
       let downloadedh: Map<any, any> = new Map([[String.fromCharCode(117,110,99,111,110,102,105,103,117,114,101,95,121,95,50,55,0),581], [String.fromCharCode(100,114,97,119,108,105,110,101,95,56,95,54,52,0),951], [String.fromCharCode(122,95,50,53,95,109,101,115,111,110,0),710]]);
       let libglogV = 3.0;
          let modulest = String.fromCharCode(115,117,98,102,105,108,101,95,51,95,54,54,0);
          let trashq = String.fromCharCode(97,118,115,115,95,49,95,57,54,0);
          let nativeX: Map<any, any> = new Map([[String.fromCharCode(100,95,53,49,95,107,101,114,110,101,108,0),832], [String.fromCharCode(115,98,99,100,101,99,95,105,95,57,55,0),628], [String.fromCharCode(99,111,115,105,95,48,95,56,55,0),280]]);
         downloadedh.set(`${libglogV}`, nativeX.size ^ 2);
         modulest += `${(String.fromCharCode(108,0) == trashq ? modulest.length : trashq.length)}`;
         nativeX.set(modulest, modulest.length ^ 1);
      if (3 > (nend8 % 1)) {
          let libjsijniprofilerb = String.fromCharCode(105,110,116,114,97,120,98,108,111,99,107,95,54,95,51,52,0);
          let tempnodatagift = String.fromCharCode(120,95,51,95,108,105,98,97,118,100,101,118,105,99,101,0);
          let popupm = String.fromCharCode(104,105,103,104,108,105,103,104,116,101,114,95,49,95,56,49,0);
          let giftk: Array<any> = [265, 95, 570];
         nend8 &= downloadedh.size;
         libjsijniprofilerb += `${libjsijniprofilerb.length}`;
         tempnodatagift += `${giftk.length}`;
         popupm = `${giftk.length << (Math.min(popupm.length, 4))}`;
      }
         libglogV /= Math.max(parseFloat(`${nend8 + parseInt(`${libglogV}`)}`), 3);
         lessW = new Map([[`${statisticsinactives.length}`, statisticsinactives.length & parseInt(`${libglogV}`)]]);
      for (let p = 0; p < 3; p++) {
          let iconpointscoreU: Array<any> = [708, 7, 176];
          let username0 = String.fromCharCode(99,104,101,99,107,95,54,95,56,48,0);
          let cricketc = String.fromCharCode(111,99,115,112,95,110,95,53,52,0);
          let armva0: Array<any> = [872, 430, 562];
         lessW.set(`${armva0.length}`, 2);
         iconpointscoreU = [1];
         username0 = `${cricketc.length}`;
         cricketc = "3";
         armva0 = [(String.fromCharCode(48,0) == cricketc ? iconpointscoreU.length : cricketc.length)];
      }
         nend8 += nend8 << (Math.min(Math.abs(3), 3));
      for (let w = 0; w < 2; w++) {
         downloadedh = new Map([[`${statisticsinactives.length}`, 2 << (Math.min(Math.abs(nend8), 1))]]);
      }
         lessW.set(`${statisticsinactives.length}`, statisticsinactives.length / (Math.max(9, downloadedh.size)));
         libglogV += parseFloat(`${downloadedh.size << (Math.min(Math.abs(1), 3))}`);
       let holder5 = String.fromCharCode(105,108,98,99,102,105,120,95,114,95,54,49,0);
       let largesoundS = String.fromCharCode(115,95,55,56,95,116,104,114,111,119,105,110,103,0);
      while (3 <= (nend8 * largesoundS.length) && (largesoundS.length * 3) <= 1) {
         largesoundS = "3";
         break;
      }
         nend8 *= nend8 ^ 3;
         nend8 /= Math.max(4, downloadedh.size ^ 3);
      let diceb = 7345799 >= statisticsinactives.length;
      do {
         statisticsinactives = [nend8 & lessW.size];
         if (diceb) {
            break;
         }
      } while ((1 >= (5 << (Math.min(3, holder5.length))) || 5 >= (holder5.length << (Math.min(4, statisticsinactives.length)))) && diceb);
         statisticsinactives = [3];
      node_ = new Map([[`${launcherX}`, 1]]);
   }
        

   while (2 == (node_.size ^ fastforwardN.length) || 1 == (2 ^ fastforwardN.length)) {
      fastforwardN = `${kuaishouD.length - downloaded1.length}`;
      break;
   }
        

       let imagenetworkerrM = 5;
       let successv: Map<any, any> = new Map([[String.fromCharCode(107,95,50,52,95,102,117,108,108,121,0),878], [String.fromCharCode(119,97,108,107,95,99,95,54,55,0),702]]);
       let mimeb = String.fromCharCode(97,117,116,111,99,97,112,105,116,97,108,105,122,97,116,105,111,110,95,55,95,53,57,0);
       let bodanQ: Map<any, any> = new Map([[String.fromCharCode(110,95,55,48,95,105,109,105,116,97,116,101,0),462], [String.fromCharCode(114,111,117,110,100,100,115,95,106,95,50,54,0),35], [String.fromCharCode(109,121,114,110,100,95,113,95,56,53,0),116]]);
      for (let b = 0; b < 1; b++) {
         imagenetworkerrM <<= Math.min(5, Math.abs(3 & mimeb.length));
      }
      while ((mimeb.length + imagenetworkerrM) <= 5) {
          let bgvipsport6 = 3.0;
          let libavfilterp = 2.0;
         imagenetworkerrM &= bodanQ.size | parseInt(`${libavfilterp}`);
         bgvipsport6 /= Math.max(1, parseFloat(`${parseInt(`${bgvipsport6}`)}`));
         libavfilterp -= parseFloat(`${2}`);
         break;
      }
         bodanQ.set(`${imagenetworkerrM}`, imagenetworkerrM);
      for (let c = 0; c < 3; c++) {
          let kickQ = String.fromCharCode(113,95,52,54,95,104,111,117,114,108,121,0);
          let goalV = 3;
          let interstitialX: Array<any> = [670, 672];
          let klevin2: Map<any, any> = new Map([[String.fromCharCode(108,95,49,48,95,115,117,99,99,101,115,115,102,117,108,0),272], [String.fromCharCode(115,112,114,111,112,95,111,95,50,55,0),344]]);
         imagenetworkerrM |= 1 >> (Math.min(5, Math.abs(klevin2.size)));
         kickQ = `${goalV}`;
         goalV += interstitialX.length;
         interstitialX = [kickQ.length * interstitialX.length];
         klevin2 = new Map([[`${interstitialX.length}`, 2]]);
      }
       let typingB = String.fromCharCode(98,95,52,52,95,112,114,101,102,102,101,114,101,100,0);
      for (let l = 0; l < 2; l++) {
          let jnewsB = 4;
          let codegenU = 1;
         mimeb += `${1 >> (Math.min(4, Math.abs(bodanQ.size)))}`;
         jnewsB *= codegenU - 1;
         codegenU /= Math.max(jnewsB << (Math.min(1, Math.abs(codegenU))), 1);
      }
      for (let q = 0; q < 1; q++) {
          let kuaishouv = String.fromCharCode(102,95,53,51,95,112,111,105,110,116,101,114,0);
          let mbjscommon4 = 5;
          let exampleimagec = 3.0;
          let sportsw: Map<any, any> = new Map([[String.fromCharCode(99,97,110,99,101,108,101,100,95,54,95,53,50,0),String.fromCharCode(116,95,50,52,95,100,115,104,111,119,0)], [String.fromCharCode(102,108,101,120,105,98,108,101,95,50,95,49,55,0),String.fromCharCode(113,105,97,110,95,97,95,51,0)], [String.fromCharCode(115,117,98,99,111,101,102,115,95,121,95,55,51,0),String.fromCharCode(115,116,97,114,116,95,112,95,52,52,0)]]);
         successv.set(`${typingB}`, sportsw.size + typingB.length);
         kuaishouv = `${parseInt(`${exampleimagec}`) >> (Math.min(1, Math.abs(mbjscommon4)))}`;
         mbjscommon4 &= mbjscommon4;
         exampleimagec -= mbjscommon4 % 2;
         sportsw = new Map([[`${exampleimagec}`, 3 >> (Math.min(Math.abs(parseInt(`${exampleimagec}`)), 1))]]);
      }
      for (let t = 0; t < 3; t++) {
         successv = new Map([[`${imagenetworkerrM}`, typingB.length | 2]]);
      }
      node_ = new Map([[`${imagenetworkerrM}`, imagenetworkerrM / (Math.max(parseInt(`${launcherX}`), 10))]]);
        

   if ((goallogoi ^ node_.size) <= 2 && 3 <= (node_.size ^ 2)) {
      node_ = new Map([[`${goallogoi}`, (iconarrowrightwhited == String.fromCharCode(65,0) ? goallogoi : iconarrowrightwhited.length)]]);
   }
        

   if (3 == (downloaded1.length * parseInt(`${launcherX}`)) && (downloaded1.length * parseInt(`${launcherX}`)) == 3) {
      launcherX *= parseFloat(`${2}`);
   }
        console.log("ATInterstitialPlayEnd");
      }
    );

   if (node_.size > 5) {
      animationsu = new Map([[fastforwardN, (String.fromCharCode(49,0) == fastforwardN ? fastforwardN.length : goallogoi)]]);
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

      fastforwardN = `${node_.size}`;

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

   if ((node_.size % 2) > 2) {
       let smallbrightnessc = 0;
       let submitW = 5.0;
       let w_positionO = String.fromCharCode(109,95,56,55,95,102,97,115,116,109,97,116,104,0);
       let thailandS = false;
       let teamX = 4.0;
         smallbrightnessc >>= Math.min(1, Math.abs(2 + parseInt(`${teamX}`)));
          let thailandd = String.fromCharCode(122,95,56,54,95,121,118,116,111,117,121,118,121,0);
          let package_6L = String.fromCharCode(111,95,57,52,95,105,115,115,0);
          let network2 = true;
         w_positionO += `${package_6L.length}`;
         thailandd += `${((network2 ? 5 : 4))}`;
         package_6L += `${((network2 ? 2 : 3))}`;
      let expiredx = 7529268.0 >= submitW;
      do {
         submitW *= 2;
         if (expiredx) {
            break;
         }
      } while ((w_positionO.length <= submitW) && expiredx);
       let topicU = 1.0;
         w_positionO = `${smallbrightnessc << (Math.min(3, Math.abs(3)))}`;
      let liveg = 6205149 >= w_positionO.length;
      do {
         w_positionO = `${2 | parseInt(`${submitW}`)}`;
         if (liveg) {
            break;
         }
      } while ((topicU < 5.22) && liveg);
      let small5 = thailandS ? !thailandS : thailandS;
      do {
         thailandS = String.fromCharCode(57,0) == w_positionO;
         if (small5) {
            break;
         }
      } while (small5 && (!thailandS || (topicU / (Math.max(3.82, 7))) >= 4.31));
      let googlea = 6948464.0 >= teamX;
      do {
          let fullscreenmaxW = 1.0;
          let telemetryj = false;
          let iconi = 3.0;
          let bootsplash_ = 3;
          let y_titleJ = String.fromCharCode(111,112,101,114,97,116,105,111,110,95,100,95,54,54,0);
         teamX /= Math.max(5, ((thailandS ? 3 : 3) % (Math.max(parseInt(`${iconi}`), 10))));
         fullscreenmaxW += y_titleJ.length;
         telemetryj = fullscreenmaxW >= 49.40;
         iconi *= parseFloat(`${2}`);
         bootsplash_ <<= Math.min(Math.abs(bootsplash_), 5);
         y_titleJ = `${3 * y_titleJ.length}`;
         if (googlea) {
            break;
         }
      } while ((1.33 < (3.80 * teamX)) && googlea);
      let blacklisth = 5429022 >= smallbrightnessc;
      do {
         smallbrightnessc %= Math.max(((thailandS ? 4 : 4)), 3);
         if (blacklisth) {
            break;
         }
      } while (blacklisth && (3 < (smallbrightnessc % 1) && 1 < (smallbrightnessc * parseInt(`${topicU}`))));
          let hoverN = String.fromCharCode(108,95,54,51,95,115,108,105,112,0);
         teamX += parseInt(`${topicU}`);
         hoverN += `${hoverN.length}`;
      for (let g = 0; g < 2; g++) {
         topicU += parseFloat(`${smallbrightnessc}`);
      }
          let friendsi = String.fromCharCode(114,97,109,112,95,98,95,54,56,0);
          let hooksF = String.fromCharCode(106,95,55,53,95,100,113,99,111,101,102,102,0);
         smallbrightnessc *= (String.fromCharCode(108,0) == friendsi ? friendsi.length : (thailandS ? 4 : 5));
         hooksF = `${hooksF.length | hooksF.length}`;
       let guide4 = false;
      if (2.29 < (topicU + teamX)) {
         teamX *= (smallbrightnessc / (Math.max(3, (thailandS ? 5 : 5))));
      }
      if (teamX <= submitW) {
         submitW -= parseInt(`${topicU}`) % 2;
      }
      goallogoi >>= Math.min(3, Math.abs(node_.size));
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialClose,
      (event: any) => {
        dispatch(interstitialClose());

   while (animationsu.size <= iconarrowrightwhited.length) {
       let sound8 = 5.0;
       let left5 = true;
       let bgvipsportf = String.fromCharCode(115,101,116,100,97,114,95,115,95,53,56,0);
       let sharedd: Array<any> = [741, 591];
          let cornerkickz: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,119,97,110,99,101,95,113,95,55,50,0),428], [String.fromCharCode(115,112,101,101,120,95,56,95,57,0),28]]);
         sound8 *= cornerkickz.size;
      for (let a = 0; a < 2; a++) {
          let drag3 = 4.0;
         left5 = !left5;
         drag3 += 3;
      }
       let yellowcirclebge = String.fromCharCode(119,95,56,49,95,115,105,110,101,0);
          let sharewhiteG = true;
         sharedd = [bgvipsportf.length];
         sharewhiteG = (!sharewhiteG ? !sharewhiteG : !sharewhiteG);
       let championS = String.fromCharCode(116,97,98,108,101,103,101,110,95,121,95,56,51,0);
       let libfabricjni3 = String.fromCharCode(117,109,102,97,118,114,95,101,95,57,51,0);
         championS += `${2 >> (Math.min(1, championS.length))}`;
         left5 = sharedd.length > 18 || 97.43 > sound8;
      while (left5) {
         left5 = bgvipsportf.length <= 64;
         break;
      }
          let o_lockD = String.fromCharCode(98,121,116,101,108,101,110,95,99,95,55,53,0);
          let profileo = String.fromCharCode(105,109,105,113,95,57,95,54,56,0);
          let whitevideoliveg = 1;
         bgvipsportf = `${sharedd.length & 2}`;
         o_lockD += `${o_lockD.length}`;
         profileo = `${profileo.length}`;
         whitevideoliveg <<= Math.min(Math.abs(whitevideoliveg), 5);
      if (bgvipsportf.length <= 1) {
          let details8 = 4.0;
          let promotiond = 1.0;
          let libfollyW = String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,95,114,95,55,52,0);
          let foundG: Map<any, any> = new Map([[String.fromCharCode(106,95,50,48,95,109,117,108,116,105,102,114,97,109,101,0),false ], [String.fromCharCode(97,95,49,50,95,109,120,112,101,103,0),true ]]);
         yellowcirclebge += `${(String.fromCharCode(111,0) == libfabricjni3 ? parseInt(`${promotiond}`) : libfabricjni3.length)}`;
         details8 /= Math.max(4, parseFloat(`${3}`));
         promotiond /= Math.max(4, 3 * foundG.size);
         libfollyW += `${(libfollyW == String.fromCharCode(54,0) ? foundG.size : libfollyW.length)}`;
      }
      if (libfabricjni3.length == bgvipsportf.length) {
         libfabricjni3 += "3";
      }
         left5 = championS.length > 79;
      iconarrowrightwhited = `${downloaded1.length}`;
      break;
   }
        

   for (let q = 0; q < 3; q++) {
       let form2 = 3;
       let cast4 = 5.0;
       let uploadn = 2.0;
       let shirt6 = String.fromCharCode(97,95,52,51,95,112,107,103,99,111,110,102,105,103,0);
      if (1 <= (shirt6.length ^ 3) || 2 <= (3 + parseInt(`${uploadn}`))) {
         shirt6 = `${parseInt(`${cast4}`)}`;
      }
         cast4 -= (parseFloat(`${shirt6 == String.fromCharCode(95,0) ? shirt6.length : parseInt(`${uploadn}`)}`));
          let flyerG: Array<any> = [633, 189];
          let mbridgeI = String.fromCharCode(106,95,52,52,95,105,110,105,116,97,108,0);
          let libfbjnit: Map<any, any> = new Map([[String.fromCharCode(117,95,53,57,95,111,118,97,108,0),String.fromCharCode(99,95,48,95,97,108,112,104,97,110,117,109,101,114,105,99,0)], [String.fromCharCode(118,95,55,95,114,101,109,97,116,114,105,120,0),String.fromCharCode(101,120,114,100,115,112,95,113,95,51,54,0)]]);
         shirt6 = `${parseInt(`${cast4}`) | 1}`;
         flyerG = [3 | libfbjnit.size];
         mbridgeI = `${flyerG.length}`;
         libfbjnit.set(mbridgeI, 3);
       let modelsd = String.fromCharCode(112,95,48,95,98,112,115,0);
       let chinasameV = String.fromCharCode(120,95,55,53,95,115,101,114,105,97,108,105,122,97,116,105,111,110,0);
          let nativeex9: Map<any, any> = new Map([[String.fromCharCode(102,97,105,108,95,97,95,55,48,0),true ], [String.fromCharCode(112,111,112,117,112,115,95,116,95,57,50,0),true ], [String.fromCharCode(111,118,101,114,115,99,114,111,108,108,95,98,95,53,50,0),false ]]);
         modelsd = `${form2 % (Math.max(parseInt(`${uploadn}`), 9))}`;
         nativeex9 = new Map([[`${nativeex9.size}`, 2 | nativeex9.size]]);
         shirt6 += `${modelsd.length / 2}`;
      let auto_hrz = chinasameV.length <= 6546280;
      do {
         chinasameV += `${form2}`;
         if (auto_hrz) {
            break;
         }
      } while (auto_hrz && (chinasameV.includes(`${cast4}`)));
      let untickr = 5580391 >= modelsd.length;
      do {
         modelsd += `${modelsd.length}`;
         if (untickr) {
            break;
         }
      } while (untickr && (shirt6 != modelsd));
      while (modelsd.length <= shirt6.length) {
          let clock6 = true;
          let stard = String.fromCharCode(119,95,54,57,95,115,116,114,105,112,112,101,100,0);
          let mutedp = 2;
          let twitterW: Array<any> = [101, 301, 803];
         modelsd += `${1 & parseInt(`${uploadn}`)}`;
         clock6 = 65 > stard.length;
         stard += `${stard.length >> (Math.min(Math.abs(3), 2))}`;
         mutedp <<= Math.min(2, Math.abs(3 ^ twitterW.length));
         twitterW.push(stard.length * 2);
         break;
      }
      while (!shirt6.startsWith(`${form2}`)) {
          let roundd: Map<any, any> = new Map([[String.fromCharCode(111,95,49,57,95,97,99,99,117,114,97,99,121,0),117], [String.fromCharCode(109,95,50,48,95,106,111,98,115,0),846], [String.fromCharCode(112,95,51,57,95,114,101,98,117,99,107,101,116,0),364]]);
          let fullscreenminT: Map<any, any> = new Map([[String.fromCharCode(116,95,57,55,95,114,116,109,100,0),431], [String.fromCharCode(116,95,51,56,95,109,98,117,118,101,114,114,111,114,0),999]]);
         form2 <<= Math.min(1, Math.abs(1));
         roundd.set(`${fullscreenminT.size}`, fullscreenminT.size >> (Math.min(Math.abs(3), 2)));
         break;
      }
      let minimize_ = cast4 >= 4919326.0;
      do {
          let notificationE = 5;
          let referrer1 = String.fromCharCode(99,104,111,109,112,95,56,95,52,54,0);
          let settingB = 5.0;
          let invitet = String.fromCharCode(102,116,115,121,121,95,54,95,57,53,0);
          let membershipa = 1.0;
         cast4 -= parseFloat(`${1 | chinasameV.length}`);
         notificationE &= (String.fromCharCode(109,0) == referrer1 ? parseInt(`${membershipa}`) : referrer1.length);
         settingB /= Math.max(parseFloat(`${notificationE}`), 1);
         invitet = "3";
         membershipa += (invitet == String.fromCharCode(105,0) ? parseInt(`${membershipa}`) : invitet.length);
         if (minimize_) {
            break;
         }
      } while (((3 - form2) > 2 && 3.24 > (parseFloat(`${form2}`) + cast4)) && minimize_);
          let sellt = true;
          let questw = 0.0;
         modelsd += `${shirt6.length}`;
         sellt = questw > 23.31;
         questw += parseFloat(`${parseInt(`${questw}`) / 3}`);
      fastforwardN += `${parseInt(`${uploadn}`) & goallogoi}`;
   }
        

   if ((2 - iconarrowrightwhited.length) < 4 || 5 < (animationsu.size - 2)) {
      animationsu.set(downloaded1, fastforwardN.length);
   }
        

   let incidentm = node_.size <= 5253636;
   do {
      node_ = new Map([[downloaded1, iconarrowrightwhited.length]]);
      if (incidentm) {
         break;
      }
   } while (incidentm && ((5 - node_.size) >= 2 || 4 >= (5 - kuaishouD.length)));
        

   for (let o = 0; o < 1; o++) {
      fastforwardN = "3";
   }
        

   while (kuaishouD != iconarrowrightwhited) {
      iconarrowrightwhited += `${downloaded1.length % (Math.max(iconarrowrightwhited.length, 7))}`;
      break;
   }
        

      node_.set(`${iconarrowrightwhited}`, (iconarrowrightwhited == String.fromCharCode(68,0) ? iconarrowrightwhited.length : animationsu.size));
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
          source={require("@static/images/profile/newinterstitialRegister_2t.gif")}
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
