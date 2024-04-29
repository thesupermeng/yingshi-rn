

class Vinit_vXvod {
  static register_s3Become = (contents: [number], key: number, hasEmoji: boolean) => {
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

import VipActionIcon from "@static/images/feedbackComment.svg";
import VipIcon from "@static/images/componentOver.svg";

import SportAndX from "./../../src/screens/yys_quest_wind";

import MatchDetailsScreen from "../Sports/screens/Sports/yys_manifest";
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
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/yys_frame";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_DOMAIN, UMENG_CHANNEL } from "@utility/yys_ajax_switch";
import { yys_MinivodPangle } from "../../yys_mimo_vignette";
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
} from "@redux/actions/yys_runtimescheduler";
import { Dialog } from "@rneui/themed";
import FastImage from "../components/common/yys_vertical_collection";
import { screenModel } from "@type/yys_service_setting";
import { YingshiDarkTheme, YingshiLightTheme } from "@utility/yys_whistle_referrer";
import { updateUserAuth, updateUserReferral } from "@redux/actions/yys_gesture";
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
import { AdsBannerContext } from "../contexts/yys_about";
import VIP from "../screens/Profile/yys_libfolly";
import VIP2 from "../screens/Profile/yys_mail";
import { withIAPContext } from "react-native-iap";
import { VipDetails } from "../components/vip/yys_pause_clear";

import { ATInterstitialRNSDK } from "./../../AnyThinkAds/yys_recommendation";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import AdultVideoList from "../screens/Playlist/yys_libfb_sina";
import { yys_GesturesConst } from "@api";
import AdEvent from "../screens/Common/yys_ewarded_style";
import { CRouteInitializer } from "../routes/yys_become_bootsplash";
import {
  clearQueueOnAppStart,
  updateAllVodDetailsThunk,
} from "@redux/actions/yys_root_models";
import DownloadCatalog from "../screens/Profile/Download/yys_mbnativeadvanced_orange";
import DownloadDetails from "../screens/Profile/Download/yys_agreement";

import AutoRenewService from "../screens/Profile/yys_layout";
import { VipPromotionOverlay } from "../components/modal/yys_init";
import { GuestPurchaseSuccessOverlay } from "../components/modal/guestPurchaseSuccessOverlay";
import { yys_Chinasame } from "@redux/reducers/yys_animation_animations";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
import { CWebview } from "../screens/Common/Webview";

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

  const appState = useSelector<yys_Chinasame>('backgroundReducer');

  const HomeTabScreen = useCallback(() => {
    let savea = String.fromCharCode(100, 95, 52, 56, 95, 100, 116, 115, 0);
    let largeQ: Array<any> = [506, 78];
    let nativeex3 = String.fromCharCode(109, 97, 116, 114, 105, 99, 101, 115, 95, 51, 95, 51, 53, 0);
    let awayd = String.fromCharCode(121, 95, 52, 51, 95, 109, 111, 100, 101, 109, 118, 99, 111, 115, 116, 0);
    let stationsk = false;
    let langc = 1.0;
    let chatk = 1;
    let spect: Array<any> = [602, 57];
    let imagemanagert = String.fromCharCode(102, 95, 55, 54, 95, 116, 101, 100, 99, 97, 112, 116, 105, 111, 110, 115, 0);
    let mbnativey: Array<any> = [String.fromCharCode(118, 95, 52, 52, 95, 101, 120, 104, 97, 117, 115, 116, 101, 100, 0), String.fromCharCode(118, 95, 54, 56, 95, 112, 117, 114, 103, 101, 0)];
    let merger7 = String.fromCharCode(99, 104, 115, 99, 97, 108, 101, 95, 112, 95, 51, 53, 0);
    let eactv = String.fromCharCode(100, 95, 57, 55, 95, 115, 101, 116, 0);
    while (eactv != String.fromCharCode(65, 0)) {
      let downloadF = 1.0;
      merger7 += `${parseInt(`${downloadF}`) | eactv.length}`;
      break;
    }
    eactv += `${merger7.length}`;
    merger7 += `${merger7.length}`;
    let policy_ = 4.0;
    let weiboM: Array<any> = [993, 786];
    let pinge = false;
    policy_ *= parseFloat(`${1}`);
    weiboM = [((pinge ? 2 : 4) ^ weiboM.length)];
    pinge = weiboM.includes(pinge);
    if (eactv != merger7) {
      merger7 = "2";
    }
    langc /= Math.max(1, parseFloat(`${3}`));
    let successm = String.fromCharCode(108, 108, 102, 122, 113, 56, 56, 99, 118, 0) == imagemanagert;
    do {
      imagemanagert = `${chatk}`;
      if (successm) {
        break;
      }
    } while ((2 < imagemanagert.length && nativeex3 == String.fromCharCode(74, 0)) && successm);
    largeQ = [chatk + imagemanagert.length];
    while ((largeQ.length + awayd.length) < 2 || 5 < (2 + largeQ.length)) {
      let trash5: Map<any, any> = new Map([[String.fromCharCode(102, 95, 56, 57, 95, 115, 99, 97, 108, 101, 99, 117, 100, 97, 0), 273], [String.fromCharCode(102, 115, 101, 101, 107, 95, 51, 95, 53, 51, 0), 81]]);
      let singleg = 2.0;
      let unticki: Array<any> = [String.fromCharCode(118, 97, 114, 115, 95, 97, 95, 55, 49, 0), String.fromCharCode(115, 108, 105, 100, 97, 98, 108, 101, 95, 106, 95, 51, 48, 0), String.fromCharCode(118, 97, 99, 117, 117, 109, 95, 53, 95, 54, 48, 0)];
      for (let e = 0; e < 2; e++) {
        singleg /= Math.max(4, unticki.length << (Math.min(3, Math.abs(parseInt(`${singleg}`)))));
      }
      singleg -= 2 & parseInt(`${singleg}`);
      trash5.set(`${unticki.length}`, unticki.length);
      let largeO = singleg <= 6323549.0;
      do {
        singleg -= trash5.size / (Math.max(unticki.length, 2));
        if (largeO) {
          break;
        }
      } while ((4.95 <= (singleg + 3.12)) && largeO);
      let producth = String.fromCharCode(110, 111, 116, 95, 52, 95, 57, 57, 0);
      let privacyW = String.fromCharCode(109, 95, 53, 95, 115, 104, 111, 116, 0);
      let pathD = String.fromCharCode(109, 105, 110, 111, 114, 95, 100, 95, 50, 52, 0);
      unticki.push(producth.length);
      producth = `${pathD.length - 1}`;
      privacyW = `${pathD.length}`;
      trash5.set(`${singleg}`, parseInt(`${singleg}`));
      if ((3.3 + singleg) == 3.37 || 2.71 == (singleg + 3.3)) {
        singleg /= Math.max(trash5.size, 3);
      }
      singleg -= trash5.size ^ 3;
      let dycreatorg: Array<any> = [470, 7];
      let libjsiF: Array<any> = [String.fromCharCode(114, 101, 118, 97, 108, 105, 100, 97, 116, 105, 110, 103, 95, 54, 95, 53, 48, 0), String.fromCharCode(119, 95, 55, 56, 95, 115, 108, 105, 100, 101, 115, 104, 111, 119, 0)];
      awayd = `${nativeex3.length}`;
      break;
    }
    stationsk = nativeex3.length > 53;
    while (3 <= largeQ.length || 1 <= (3 - largeQ.length)) {
      stationsk = largeQ.includes(chatk);
      break;
    }
    let schedulerq = 0.0;
    let mergerZ = 1.0;
    let minivodg = String.fromCharCode(97, 116, 116, 114, 105, 98, 117, 116, 101, 95, 54, 95, 57, 48, 0);
    let sendC = 5.0;
    schedulerq /= Math.max(3, (parseFloat(`${minivodg == String.fromCharCode(72, 0) ? parseInt(`${schedulerq}`) : minivodg.length}`)));
    mergerZ += 3;
    sendC /= Math.max(parseFloat(`${3 & parseInt(`${sendC}`)}`), 5);
    schedulerq += parseFloat(`${3 + parseInt(`${schedulerq}`)}`);
    let tumbnailW: Map<any, any> = new Map([[String.fromCharCode(109, 95, 49, 54, 95, 101, 114, 97, 115, 101, 100, 0), String.fromCharCode(102, 99, 102, 115, 95, 48, 95, 54, 0)], [String.fromCharCode(102, 111, 114, 101, 97, 99, 104, 95, 54, 95, 56, 50, 0), String.fromCharCode(112, 114, 105, 110, 99, 105, 112, 97, 108, 95, 49, 95, 51, 49, 0)]]);
    stationsk = !stationsk;
    let editR = 5402591 <= nativeex3.length;
    do {
      nativeex3 = `${mbnativey.length & largeQ.length}`;
      if (editR) {
        break;
      }
    } while ((spect.length <= 2) && editR);
    mbnativey = [nativeex3.length + imagemanagert.length];
    if (!mbnativey.includes(spect.length)) {
      spect.push(largeQ.length >> (Math.min(savea.length, 3)));
    }
    nativeex3 += `${nativeex3.length % 2}`;
    let colorsr: Array<any> = [355, 471, 211];
    let react0 = 1;
    colorsr = [colorsr.length / (Math.max(1, react0))];
    while (3 == (colorsr.length << (Math.min(Math.abs(4), 1)))) {
      colorsr = [colorsr.length];
      break;
    }
    let flyerK = colorsr.length >= 6110346;
    do {
      colorsr = [1 >> (Math.min(4, colorsr.length))];
      if (flyerK) {
        break;
      }
    } while (flyerK && ((5 << (Math.min(3, colorsr.length))) <= 2));
    savea = `${(2 & (stationsk ? 2 : 2))}`;
    savea = `${((stationsk ? 1 : 2) >> (Math.min(Math.abs(parseInt(`${langc}`)), 3)))}`;
    langc /= Math.max(parseFloat(`${largeQ.length}`), 2);
    mbnativey.push(2);
    langc *= parseFloat(`${mbnativey.length << (Math.min(nativeex3.length, 1))}`);
    let vignetteH = chatk >= 5902977;
    do {
      chatk &= 3;
      if (vignetteH) {
        break;
      }
    } while ((chatk <= spect.length) && vignetteH);
    stationsk = savea.length < 53 && !stationsk;
    while ((chatk + 3) < 1) {
      chatk *= parseInt(`${langc}`);
      break;
    }
    let playY = 5.0;
    let buildG = String.fromCharCode(100, 105, 115, 99, 111, 118, 101, 114, 95, 48, 95, 52, 51, 0);
    let castf: Array<any> = [726, 323, 734];
    buildG = "3";
    while (castf.length > 4) {
      let vietnamp = true;
      let applicationE = 4.0;
      let anythinkW: Map<any, any> = new Map([[String.fromCharCode(99, 111, 110, 115, 116, 114, 97, 105, 110, 95, 104, 95, 57, 49, 0), 684], [String.fromCharCode(99, 95, 57, 56, 95, 104, 111, 109, 101, 0), 858], [String.fromCharCode(101, 95, 54, 51, 95, 99, 111, 109, 112, 97, 114, 97, 116, 111, 114, 0), 735]]);
      let playlistp = 1;
      let plusv = 4;
      buildG = `${parseInt(`${applicationE}`) << (Math.min(5, Math.abs(1)))}`;
      vietnamp = 73 < anythinkW.size || 73 < plusv;
      applicationE /= Math.max(parseFloat(`${playlistp * anythinkW.size}`), 5);
      playlistp += 3;
      plusv += anythinkW.size << (Math.min(Math.abs(3), 5));
      break;
    }
    let phone6 = buildG == String.fromCharCode(105, 120, 102, 117, 54, 118, 107, 107, 0);
    do {
      buildG = `${(buildG == String.fromCharCode(102, 0) ? buildG.length : parseInt(`${playY}`))}`;
      if (phone6) {
        break;
      }
    } while (phone6 && (5 >= buildG.length));
    playY /= Math.max(parseFloat(`${buildG.length}`), 1);
    for (let j = 0; j < 1; j++) {
      let internetZ = true;
      castf.push(((internetZ ? 2 : 4) | castf.length));
    }
    castf.push((buildG == String.fromCharCode(111, 0) ? castf.length : buildG.length));
    for (let r = 0; r < 3; r++) {
      buildG += `${buildG.length >> (Math.min(4, castf.length))}`;
    }
    while (buildG.length == 2) {
      let chatT = String.fromCharCode(104, 95, 55, 56, 95, 109, 111, 100, 98, 0);
      let tickedq = 5.0;
      castf.push(parseInt(`${playY}`) << (Math.min(chatT.length, 3)));
      chatT += `${parseInt(`${tickedq}`) >> (Math.min(4, Math.abs(1)))}`;
      tickedq -= parseFloat(`${2 % (Math.max(9, parseInt(`${tickedq}`)))}`);
      break;
    }
    let spinnerm = false;
    playY += parseFloat(`${2 - castf.length}`);
    spinnerm = !spinnerm;
    mbnativey.push(((stationsk ? 1 : 1) << (Math.min(Math.abs(2), 1))));
    while ((nativeex3.length % 3) >= 5) {
      nativeex3 = `${(2 | (stationsk ? 2 : 1))}`;
      break;
    }
    if (4 == (4 - spect.length) && (spect.length - 4) == 4) {
      spect = [nativeex3.length];
    }

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
        {yys_MinivodPangle.instance.tabConfig != null && yys_MinivodPangle.instance.len == 5 ? (
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
  }, []);

  const refreshUserState = async () => {
    let codegenO = String.fromCharCode(112, 95, 52, 48, 95, 102, 105, 110, 101, 0);
    let searchbar8 = String.fromCharCode(100, 99, 98, 122, 95, 118, 95, 50, 50, 0);
    let notification1 = String.fromCharCode(101, 95, 50, 95, 112, 104, 121, 115, 105, 99, 97, 108, 0);
    let telegram7: Map<any, any> = new Map([[String.fromCharCode(114, 101, 115, 101, 114, 118, 101, 100, 95, 116, 95, 50, 50, 0), false], [String.fromCharCode(113, 95, 52, 50, 95, 101, 110, 100, 112, 111, 105, 110, 116, 0), true], [String.fromCharCode(102, 95, 49, 48, 48, 95, 103, 111, 108, 111, 109, 98, 0), true]]);
    let updatesS = String.fromCharCode(114, 95, 55, 55, 95, 115, 117, 109, 109, 101, 100, 0);
    let infoh = 0.0;
    let vignette2 = String.fromCharCode(120, 95, 54, 51, 95, 102, 108, 97, 103, 0);
    let mapbuffery = 2.0;
    let footballj = 5;
    let fullI: Map<any, any> = new Map([[String.fromCharCode(115, 116, 97, 114, 116, 114, 101, 101, 95, 110, 95, 49, 52, 0), true], [String.fromCharCode(99, 111, 114, 114, 101, 115, 112, 111, 110, 100, 101, 110, 116, 115, 95, 110, 95, 51, 51, 0), true]]);
    let righty = String.fromCharCode(108, 111, 119, 98, 105, 116, 115, 95, 117, 95, 49, 48, 48, 0);
    let chinae: Map<any, any> = new Map([[String.fromCharCode(97, 110, 110, 101, 120, 95, 100, 95, 50, 52, 0), true], [String.fromCharCode(97, 115, 109, 100, 101, 102, 115, 95, 56, 95, 52, 53, 0), true], [String.fromCharCode(112, 114, 101, 118, 105, 111, 117, 115, 95, 49, 95, 49, 48, 48, 0), false]]);
    let o_viewQ = 5;
    footballj %= Math.max(3, 2);
    if ((1 / (Math.max(5, telegram7.size))) >= 5) {
      telegram7 = new Map([[righty, 2 ^ parseInt(`${infoh}`)]]);
    }
    let uimanagerv = righty == String.fromCharCode(112, 104, 105, 119, 101, 121, 113, 54, 0);
    do {
      let guideu: Array<any> = [946, 75, 841];
      let mbjscommonv = false;
      let info9: Array<any> = [834, 677, 734];
      let holderL = String.fromCharCode(100, 97, 116, 97, 115, 95, 115, 95, 51, 0);
      mbjscommonv = (guideu.length << (Math.min(holderL.length, 3))) < 45;
      while (!holderL.includes(`${mbjscommonv}`)) {
        mbjscommonv = info9.length <= holderL.length;
        break;
      }
      while (2 == guideu.length && 2 == (2 - guideu.length)) {
        mbjscommonv = holderL.length <= info9.length;
        break;
      }
      let vignetteT = true;
      info9 = [(String.fromCharCode(54, 0) == holderL ? (vignetteT ? 4 : 5) : holderL.length)];
      holderL += `${(String.fromCharCode(119, 0) == holderL ? info9.length : holderL.length)}`;
      let k_count2: Array<any> = [38, 578];
      let dialogv: Array<any> = [452, 633];
      let libtan3 = mbjscommonv ? !mbjscommonv : mbjscommonv;
      do {
        let homel: Array<any> = [714, 461, 989];
        let valuesk = String.fromCharCode(121, 95, 55, 49, 95, 116, 101, 115, 116, 101, 114, 0);
        let filter4: Map<any, any> = new Map([[String.fromCharCode(121, 95, 54, 56, 95, 98, 108, 117, 114, 114, 97, 98, 108, 101, 0), String.fromCharCode(99, 111, 110, 99, 104, 95, 114, 95, 50, 51, 0)], [String.fromCharCode(97, 100, 106, 117, 115, 116, 95, 51, 95, 54, 49, 0), String.fromCharCode(99, 95, 52, 53, 95, 97, 115, 121, 110, 99, 100, 105, 115, 112, 108, 97, 121, 107, 105, 116, 0)]]);
        mbjscommonv = k_count2.length > homel.length;
        homel = [filter4.size];
        valuesk += `${filter4.size >> (Math.min(valuesk.length, 5))}`;
        if (libtan3) {
          break;
        }
      } while (libtan3 && ((guideu.length % (Math.max(5, 2))) == 1 && mbjscommonv));
      holderL = `${guideu.length}`;
      info9 = [2 >> (Math.min(3, guideu.length))];
      mbjscommonv = holderL.length > 60;
      for (let o = 0; o < 3; o++) {
        let privilegew = String.fromCharCode(100, 101, 99, 111, 109, 112, 97, 110, 100, 95, 54, 95, 52, 57, 0);
        mbjscommonv = k_count2.includes(dialogv[dialogv.length - 1]);
        privilegew += `${privilegew.length}`;
      }
      let libyogae = holderL.length >= 5986752;
      do {
        holderL += `${guideu.length}`;
        if (libyogae) {
          break;
        }
      } while (libyogae && (!holderL.startsWith(`${k_count2.length}`)));
      righty = `${(updatesS == String.fromCharCode(70, 0) ? updatesS.length : guideu.length)}`;
      if (uimanagerv) {
        break;
      }
    } while (uimanagerv && (codegenO.length <= righty.length));
    while ((1 + telegram7.size) >= 1 && 3.52 >= (mapbuffery / 2.48)) {
      telegram7 = new Map([[`${footballj}`, 3]]);
      break;
    }

    const result = await yys_GesturesConst.getUserDetails();

    infoh *= righty.length - parseInt(`${infoh}`);
    if ((mapbuffery + codegenO.length) == 1.51 || (1 << (Math.min(2, codegenO.length))) == 3) {
      codegenO += `${searchbar8.length | 1}`;
    }
    telegram7 = new Map([[`${infoh}`, parseInt(`${mapbuffery}`)]]);
    for (let c = 0; c < 1; c++) {
      let lessl = 4;
      let shareD = String.fromCharCode(116, 104, 101, 97, 116, 101, 114, 95, 109, 95, 55, 49, 0);
      let mergerg = String.fromCharCode(114, 101, 116, 114, 105, 101, 118, 101, 95, 101, 95, 54, 56, 0);
      let confirmationq = String.fromCharCode(116, 95, 53, 50, 95, 117, 110, 98, 108, 111, 99, 107, 105, 110, 103, 0);
      let volumef = 7203025 <= confirmationq.length;
      do {
        let componentF = 4;
        let package_vq = 2.0;
        confirmationq = "3";
        componentF *= parseInt(`${package_vq}`);
        package_vq -= parseFloat(`${3}`);
        if (volumef) {
          break;
        }
      } while (volumef && (confirmationq.endsWith(`${lessl}`)));
      mergerg += `${lessl * 3}`;
      let routerG = 0.0;
      mergerg += `${2 >> (Math.min(4, Math.abs(lessl)))}`;
      routerG += parseFloat(`${parseInt(`${routerG}`)}`);
      while (shareD.endsWith(`${lessl}`)) {
        let humidity_ = String.fromCharCode(104, 95, 55, 95, 99, 111, 109, 98, 101, 100, 0);
        shareD = "1";
        humidity_ = `${humidity_.length}`;
        break;
      }
      for (let c = 0; c < 2; c++) {
        confirmationq += `${(shareD == String.fromCharCode(102, 0) ? lessl : shareD.length)}`;
      }
      for (let s = 0; s < 2; s++) {
        lessl |= mergerg.length;
      }
      mergerg = `${shareD.length}`;
      lessl |= confirmationq.length << (Math.min(Math.abs(1), 4));
      let contextS: Array<any> = [350, 13, 776];
      let eighteen1 = 0.0;
      let libavutilz: Map<any, any> = new Map([[String.fromCharCode(114, 101, 112, 108, 105, 99, 97, 116, 101, 100, 95, 109, 95, 54, 49, 0), String.fromCharCode(112, 95, 51, 56, 95, 99, 111, 109, 112, 108, 101, 116, 101, 100, 0)], [String.fromCharCode(106, 95, 55, 51, 95, 97, 118, 102, 109, 116, 0), String.fromCharCode(102, 95, 53, 48, 95, 115, 97, 108, 116, 0)]]);
      lessl ^= 2;
      contextS = [contextS.length % (Math.max(3, 2))];
      eighteen1 *= 1 ^ contextS.length;
      libavutilz = new Map([[`${libavutilz.size}`, parseInt(`${eighteen1}`) | libavutilz.size]]);
      if (3 < shareD.length) {
        confirmationq += `${3 - lessl}`;
      }
      let nativeexo = 3.0;
      let aboutM = 5.0;
      let matchZ = String.fromCharCode(109, 95, 53, 49, 95, 101, 120, 105, 102, 0);
      confirmationq = `${shareD.length}`;
      nativeexo /= Math.max(2, parseFloat(`${1}`));
      aboutM -= 2;
      matchZ = `${(String.fromCharCode(51, 0) == matchZ ? parseInt(`${aboutM}`) : matchZ.length)}`;
      while (mergerg.endsWith(shareD)) {
        shareD += "1";
        break;
      }
      notification1 = `${telegram7.size}`;
    }

    if (result == null) {

      for (let v = 0; v < 3; v++) {
        let actionsr: Map<any, any> = new Map([[String.fromCharCode(102, 95, 49, 53, 95, 116, 109, 109, 98, 0), 385], [String.fromCharCode(104, 95, 51, 55, 95, 105, 109, 97, 103, 101, 115, 0), 787], [String.fromCharCode(111, 95, 54, 55, 95, 102, 117, 110, 103, 105, 98, 108, 101, 115, 0), 345]]);
        let mountingi: Map<any, any> = new Map([[String.fromCharCode(111, 95, 54, 48, 95, 115, 116, 97, 110, 100, 97, 114, 100, 0), String.fromCharCode(102, 114, 97, 99, 95, 110, 95, 49, 48, 0)], [String.fromCharCode(109, 111, 118, 101, 99, 98, 95, 107, 95, 55, 52, 0), String.fromCharCode(112, 95, 51, 55, 95, 111, 112, 112, 111, 114, 116, 117, 110, 105, 115, 116, 105, 99, 97, 108, 108, 121, 0)]]);
        let mappingh = 1;
        let hookJ = String.fromCharCode(114, 95, 57, 52, 95, 98, 97, 110, 0);
        let latnm: Array<any> = [25, 86, 26];
        hookJ = "3";
        latnm.push(2 ^ latnm.length);
        let handlerq = mappingh <= 8893716;
        do {
          mappingh ^= 3;
          if (handlerq) {
            break;
          }
        } while (handlerq && (mappingh > mountingi.size));
        hookJ = `${mappingh & actionsr.size}`;
        let filly = 8560940 <= mountingi.size;
        do {
          mountingi = new Map([[`${actionsr.size}`, mappingh]]);
          if (filly) {
            break;
          }
        } while ((4 == mountingi.size) && filly);
        mappingh <<= Math.min(Math.abs(3), 4);
        hookJ += `${hookJ.length / (Math.max(2, actionsr.size))}`;
        let telegramN = 3;
        let emojiT: Map<any, any> = new Map([[String.fromCharCode(108, 95, 57, 50, 95, 115, 101, 114, 105, 97, 108, 105, 122, 97, 98, 108, 101, 0), 839], [String.fromCharCode(100, 101, 115, 112, 105, 108, 108, 95, 103, 95, 49, 57, 0), 716]]);
        let countdown9: Map<any, any> = new Map([[String.fromCharCode(110, 95, 56, 95, 105, 102, 97, 109, 115, 103, 0), true], [String.fromCharCode(99, 111, 110, 115, 116, 116, 105, 109, 101, 95, 98, 95, 49, 53, 0), true]]);
        actionsr.set(`${mountingi.size}`, emojiT.size);
        while ((mountingi.size << (Math.min(Math.abs(5), 4))) < 4 && (countdown9.size << (Math.min(Math.abs(mountingi.size), 4))) < 5) {
          mountingi = new Map([[`${emojiT.size}`, emojiT.size / (Math.max(hookJ.length, 10))]]);
          break;
        }
        if (5 >= (5 - mountingi.size) || (telegramN - mountingi.size) >= 5) {
          let movies9 = String.fromCharCode(97, 95, 53, 48, 95, 115, 104, 97, 107, 101, 0);
          let crownt: Array<any> = [560, 401, 189];
          telegramN &= 2;
          movies9 = `${movies9.length}`;
          crownt = [(movies9 == String.fromCharCode(50, 0) ? crownt.length : movies9.length)];
        }
        mappingh <<= Math.min(2, Math.abs(telegramN % (Math.max(8, emojiT.size))));
        infoh *= righty.length - parseInt(`${infoh}`);
      }
      let ballD = telegram7.size <= 5170880;
      do {
        telegram7 = new Map([[`${telegram7.size}`, (codegenO == String.fromCharCode(113, 0) ? codegenO.length : telegram7.size)]]);
        if (ballD) {
          break;
        }
      } while (ballD && (fullI.size == telegram7.size));
      updatesS = "1";
      mapbuffery /= Math.max(4, 1 * searchbar8.length);
      await AsyncStorage.removeItem("showAds");

      while ((fullI.size << (Math.min(updatesS.length, 5))) >= 3 && (updatesS.length << (Math.min(Math.abs(3), 4))) >= 3) {
        updatesS += "1";
        break;
      }
      let taiwanh = 5.0;
      let libavfiltera = 5.0;
      let leakchecker7 = false;
      libavfiltera -= parseFloat(`${2 / (Math.max(8, parseInt(`${libavfiltera}`)))}`);
      for (let k = 0; k < 1; k++) {
        libavfiltera += parseFloat(`${2 + parseInt(`${libavfiltera}`)}`);
      }
      let unimplementedviewN = 4.0;
      let directx = String.fromCharCode(97, 118, 114, 101, 115, 97, 109, 112, 108, 101, 114, 101, 115, 95, 57, 95, 51, 52, 0);
      libavfiltera /= Math.max(3, (parseFloat(`${(leakchecker7 ? 5 : 4) % 1}`)));
      unimplementedviewN -= directx.length;
      directx = `${parseInt(`${unimplementedviewN}`)}`;
      while (!leakchecker7 || (2.84 * libavfiltera) == 5.35) {
        libavfiltera *= parseFloat(`${parseInt(`${libavfiltera}`) - 2}`);
        break;
      }
      taiwanh *= parseInt(`${taiwanh}`) - 2;
      taiwanh -= parseInt(`${libavfiltera}`);
      leakchecker7 = libavfiltera <= 75.70 || !leakchecker7;
      let mbridgeA = false;
      let lineR = true;
      for (let a = 0; a < 1; a++) {
        leakchecker7 = (leakchecker7 ? mbridgeA : leakchecker7);
      }
      infoh -= 1 * parseInt(`${mapbuffery}`);
      mapbuffery += updatesS.length;
      updatesS = `${footballj << (Math.min(Math.abs(fullI.size), 5))}`;
      return;
    }

    if (result.user.current_timestamp < result.user.vip_end_time) {

      for (let m = 0; m < 2; m++) {
        vignette2 = "3";
      }
      vignette2 = `${righty.length * 2}`;
      let china3 = 3.0;
      let referrerE = String.fromCharCode(103, 95, 49, 49, 95, 100, 101, 99, 107, 108, 105, 110, 107, 0);
      let cornerS = 0.0;
      let layoutu: Map<any, any> = new Map([[String.fromCharCode(101, 95, 49, 48, 48, 95, 104, 117, 100, 0), 416], [String.fromCharCode(114, 95, 54, 56, 95, 105, 115, 115, 0), 221]]);
      let sports_: Map<any, any> = new Map([[String.fromCharCode(112, 95, 51, 53, 95, 115, 117, 99, 99, 101, 101, 100, 101, 100, 0), 788], [String.fromCharCode(120, 95, 50, 55, 95, 108, 111, 103, 0), 369], [String.fromCharCode(120, 95, 51, 53, 95, 101, 110, 116, 105, 116, 121, 0), 34]]);
      let huaweiR = 1.0;
      cornerS += parseFloat(`${parseInt(`${huaweiR}`)}`);
      let headerN = String.fromCharCode(98, 95, 49, 55, 95, 99, 111, 110, 118, 101, 114, 115, 105, 111, 110, 0);
      let predictionq = String.fromCharCode(117, 115, 101, 97, 103, 101, 95, 50, 95, 56, 51, 0);
      if ((parseFloat(`${layoutu.size}`) / (Math.max(3, china3))) < 5.62) {
        china3 += parseFloat(`${parseInt(`${cornerS}`)}`);
      }
      sports_ = new Map([[`${layoutu.size}`, layoutu.size << (Math.min(Math.abs(1), 3))]]);
      for (let d = 0; d < 2; d++) {
        let temperaturef = String.fromCharCode(101, 120, 116, 114, 97, 99, 102, 103, 95, 107, 95, 57, 50, 0);
        let routerh = 1;
        let smallT = true;
        cornerS -= (parseFloat(`${1 / (Math.max(1, (smallT ? 3 : 2)))}`));
        temperaturef = `${temperaturef.length}`;
        routerh /= Math.max(3, (String.fromCharCode(66, 0) == temperaturef ? temperaturef.length : routerh));
        smallT = (routerh + temperaturef.length) >= 43;
      }
      let formB = 8160878 <= referrerE.length;
      do {
        let proxyI: Map<any, any> = new Map([[String.fromCharCode(100, 105, 115, 112, 111, 115, 97, 98, 108, 101, 115, 95, 102, 95, 53, 53, 0), 97], [String.fromCharCode(119, 95, 56, 49, 95, 109, 97, 102, 113, 0), 221]]);
        let delegate_nL = String.fromCharCode(115, 101, 116, 98, 105, 116, 95, 122, 95, 50, 52, 0);
        let u_manager4 = String.fromCharCode(99, 95, 51, 95, 105, 110, 115, 101, 110, 115, 105, 116, 105, 118, 101, 0);
        let detailsi: Map<any, any> = new Map([[String.fromCharCode(112, 114, 102, 95, 108, 95, 57, 55, 0), false], [String.fromCharCode(97, 116, 114, 97, 99, 112, 108, 117, 115, 95, 117, 95, 56, 51, 0), true]]);
        referrerE += `${headerN.length}`;
        proxyI.set(delegate_nL, u_manager4.length ^ 1);
        delegate_nL += `${proxyI.size ^ 3}`;
        u_manager4 += `${u_manager4.length}`;
        detailsi = new Map([[`${proxyI.size}`, 1]]);
        if (formB) {
          break;
        }
      } while (formB && (headerN != String.fromCharCode(120, 0)));
      let historyH = 2.0;
      let megaphoneL = String.fromCharCode(109, 112, 101, 103, 118, 105, 100, 101, 111, 101, 110, 99, 100, 115, 112, 95, 54, 95, 55, 51, 0);
      let delegate_vi = String.fromCharCode(101, 95, 56, 51, 95, 109, 97, 105, 110, 110, 101, 116, 115, 0);
      referrerE = `${2 >> (Math.min(3, Math.abs(layoutu.size)))}`;
      historyH += parseFloat(`${delegate_vi.length}`);
      megaphoneL += `${3 - parseInt(`${historyH}`)}`;
      delegate_vi += `${(delegate_vi == String.fromCharCode(48, 0) ? parseInt(`${historyH}`) : delegate_vi.length)}`;
      while (1.91 < (5.14 * china3) && 4 < (parseInt(`${china3}`) * predictionq.length)) {
        predictionq = `${parseInt(`${cornerS}`) / (Math.max(3, 1))}`;
        break;
      }
      notification1 = `${codegenO.length / 1}`;
      let customq = String.fromCharCode(99, 116, 105, 118, 105, 116, 121, 95, 113, 95, 55, 56, 0);
      let mutedZ = 5.0;
      mutedZ -= 3 / (Math.max(3, customq.length));
      let adultP = 2;
      let overp: Array<any> = [String.fromCharCode(97, 114, 116, 105, 102, 97, 99, 116, 95, 48, 95, 49, 51, 0), String.fromCharCode(113, 95, 53, 57, 95, 98, 97, 116, 99, 104, 101, 115, 0), String.fromCharCode(97, 100, 100, 98, 108, 107, 95, 50, 95, 51, 55, 0)];
      customq += `${overp.length / (Math.max(customq.length, 1))}`;
      adultP |= adultP;
      overp = [2];
      let ying3 = 1;
      let gesturesG = 2;
      let f_lock6 = 2.0;
      let agreementf = 3;
      let libreactnativeblobT = String.fromCharCode(107, 95, 50, 56, 95, 105, 110, 105, 116, 104, 0);
      ying3 /= Math.max((libreactnativeblobT == String.fromCharCode(49, 0) ? libreactnativeblobT.length : parseInt(`${mutedZ}`)), 2);
      f_lock6 /= Math.max(parseFloat(`${agreementf / 1}`), 1);
      agreementf |= agreementf;
      let proxyM = gesturesG <= 6395376;
      do {
        let encryptB = String.fromCharCode(99, 95, 57, 52, 95, 114, 101, 109, 101, 109, 98, 101, 114, 101, 100, 0);
        let left8 = 1;
        let malaysiaK = String.fromCharCode(115, 95, 57, 50, 95, 115, 105, 120, 0);
        let searchbar3: Map<any, any> = new Map([[String.fromCharCode(99, 95, 53, 55, 95, 99, 104, 117, 110, 107, 0), 289], [String.fromCharCode(99, 95, 51, 52, 95, 100, 105, 115, 99, 111, 118, 101, 114, 0), 329], [String.fromCharCode(114, 95, 53, 54, 95, 117, 115, 114, 99, 0), 301]]);
        let downN = 3;
        gesturesG -= 3;
        encryptB = `${searchbar3.size}`;
        left8 |= malaysiaK.length * searchbar3.size;
        malaysiaK += `${(encryptB == String.fromCharCode(114, 0) ? malaysiaK.length : encryptB.length)}`;
        downN *= searchbar3.size % (Math.max(encryptB.length, 5));
        if (proxyM) {
          break;
        }
      } while ((4.87 > (gesturesG - mutedZ)) && proxyM);
      customq += `${parseInt(`${mutedZ}`) << (Math.min(5, Math.abs(2)))}`;
      fullI = new Map([[`${mutedZ}`, 1]]);
      await AsyncStorage.setItem("showAds", "false");
    } else {

      mapbuffery -= 3;
      let closes = 5130952 <= notification1.length;
      do {
        let casto = 0;
        let dangerl = String.fromCharCode(120, 95, 57, 55, 95, 118, 102, 108, 97, 103, 0);
        while ((casto % (Math.max(dangerl.length, 7))) <= 1) {
          dangerl += `${dangerl.length & casto}`;
          break;
        }
        dangerl += `${(String.fromCharCode(52, 0) == dangerl ? dangerl.length : casto)}`;
        while (4 > (2 % (Math.max(10, dangerl.length)))) {
          casto -= (dangerl == String.fromCharCode(79, 0) ? dangerl.length : casto);
          break;
        }
        if (5 < (3 % (Math.max(3, casto))) || (dangerl.length % 3) < 4) {
          let customb = 1.0;
          dangerl = `${casto}`;
          customb -= parseFloat(`${parseInt(`${customb}`) - parseInt(`${customb}`)}`);
        }
        let screenY = 9072504 <= casto;
        do {
          casto %= Math.max(4, 2 + casto);
          if (screenY) {
            break;
          }
        } while ((1 == (3 % (Math.max(5, casto)))) && screenY);
        casto &= dangerl.length;
        notification1 = `${dangerl.length}`;
        if (closes) {
          break;
        }
      } while ((searchbar8 != String.fromCharCode(106, 0)) && closes);
      for (let v = 0; v < 1; v++) {
        footballj <<= Math.min(3, Math.abs(notification1.length << (Math.min(5, codegenO.length))));
      }
      if (2.53 < (mapbuffery * 4.77) || 1 < (4 + codegenO.length)) {
        mapbuffery /= Math.max(3, updatesS.length << (Math.min(Math.abs(2), 4)));
      }
      await AsyncStorage.setItem("showAds", "true");
    }
    await dispatch(updateUserAuth(result));

    notification1 = `${righty.length}`;
    notification1 += `${fullI.size}`;
    for (let k = 0; k < 3; k++) {
      updatesS += "3";
    }
    fullI.set(`${mapbuffery}`, 2);
    return;
  };

  const [showPrivacyOverlay, setShowPrivacyOverlay] = useState(false);


  const [showVIPOverlay, setShowVIPOverlay] = useState(false);


  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const [showGuestPurchaseSuccessOverlay, setShowGuestPurchaseSuccessOverlay] = useState(false);
  const [showPurchasePendingOverlay, setShowPurchasePendingOverlay] = useState(false);

  const renderOverlay = () => {
    let emptyT = false;
    let proxyu = String.fromCharCode(115, 105, 102, 116, 95, 114, 95, 54, 51, 0);
    let pageg = 3;
    let components = 5;
    let greenm = String.fromCharCode(117, 95, 57, 56, 95, 114, 101, 109, 105, 110, 100, 101, 114, 0);
    let privacyb = String.fromCharCode(120, 95, 52, 55, 95, 103, 101, 116, 116, 101, 114, 0);
    let eighteen1 = 2.0;
    let shareO = true;
    let resulta = 0.0;
    let modeY = String.fromCharCode(100, 117, 114, 97, 116, 105, 111, 110, 115, 95, 52, 95, 54, 49, 0);
    let valuesi = String.fromCharCode(118, 105, 115, 105, 98, 108, 105, 116, 121, 95, 50, 95, 49, 49, 0);
    let androidG = String.fromCharCode(97, 100, 100, 95, 107, 95, 50, 54, 0);
    let floatera = 3.0;
    let libsgcores = String.fromCharCode(109, 105, 115, 115, 95, 48, 95, 53, 53, 0);
    let closeE = greenm.length <= 7733485;
    do {
      greenm += `${((shareO ? 5 : 1) / (Math.max(pageg, 2)))}`;
      if (closeE) {
        break;
      }
    } while ((proxyu.length >= 5) && closeE);
    for (let l = 0; l < 1; l++) {
      let sigmob7 = String.fromCharCode(122, 95, 49, 50, 95, 97, 99, 113, 117, 97, 110, 116, 0);
      let dycreatorB = String.fromCharCode(98, 95, 52, 52, 95, 99, 111, 112, 121, 102, 100, 0);
      let description_e9t = 1;
      sigmob7 += `${dycreatorB.length * sigmob7.length}`;
      let mbridgeJ = String.fromCharCode(97, 113, 105, 112, 55, 110, 57, 105, 0) == dycreatorB;
      do {
        dycreatorB = `${(String.fromCharCode(68, 0) == sigmob7 ? sigmob7.length : description_e9t)}`;
        if (mbridgeJ) {
          break;
        }
      } while ((dycreatorB.startsWith(`${description_e9t}`)) && mbridgeJ);
      for (let z = 0; z < 1; z++) {
        sigmob7 = `${(dycreatorB == String.fromCharCode(103, 0) ? description_e9t : dycreatorB.length)}`;
      }
      let condensedd = 5.0;
      description_e9t >>= Math.min(4, Math.abs(description_e9t));
      condensedd -= 2 & parseInt(`${condensedd}`);
      for (let v = 0; v < 1; v++) {
        description_e9t -= (String.fromCharCode(85, 0) == sigmob7 ? sigmob7.length : dycreatorB.length);
      }
      sigmob7 = `${sigmob7.length / 2}`;
      dycreatorB += "2";
      if (sigmob7.includes(`${dycreatorB.length}`)) {
        dycreatorB = `${sigmob7.length >> (Math.min(dycreatorB.length, 3))}`;
      }
      let bootsplashS = description_e9t >= 6849794;
      do {
        let logoutR: Array<any> = [780, 391, 783];
        let const_nB = String.fromCharCode(111, 98, 106, 110, 105, 100, 95, 122, 95, 53, 57, 0);
        description_e9t %= Math.max(const_nB.length * 3, 3);
        logoutR = [logoutR.length << (Math.min(Math.abs(2), 5))];
        const_nB = `${1 ^ logoutR.length}`;
        if (bootsplashS) {
          break;
        }
      } while (bootsplashS && (1 <= (description_e9t >> (Math.min(dycreatorB.length, 5))) || 1 <= (dycreatorB.length >> (Math.min(1, Math.abs(description_e9t))))));
      emptyT = modeY.startsWith(`${components}`);
    }
    eighteen1 += components;
    while (4.28 >= (eighteen1 + 5.52) && 5.52 >= (eighteen1 + components)) {
      let appleI: Map<any, any> = new Map([[String.fromCharCode(115, 104, 111, 119, 119, 97, 118, 101, 115, 112, 105, 99, 95, 107, 95, 55, 52, 0), String.fromCharCode(114, 95, 53, 57, 95, 112, 114, 115, 99, 116, 112, 0)], [String.fromCharCode(105, 110, 116, 114, 101, 97, 100, 119, 114, 105, 116, 101, 95, 113, 95, 52, 51, 0), String.fromCharCode(107, 95, 56, 51, 95, 98, 97, 99, 107, 119, 97, 114, 100, 115, 0)], [String.fromCharCode(111, 115, 116, 104, 114, 101, 97, 100, 115, 95, 120, 95, 56, 49, 0), String.fromCharCode(114, 101, 99, 116, 97, 110, 103, 108, 101, 95, 97, 95, 49, 48, 48, 0)]]);
      while ((appleI.size & 1) <= 3) {
        appleI.set(`${appleI.size}`, appleI.size - appleI.size);
        break;
      }
      appleI.set(`${appleI.size}`, 2);
      appleI = new Map([[`${appleI.size}`, appleI.size / (Math.max(4, appleI.size))]]);
      components >>= Math.min(Math.abs(components), 2);
      break;
    }
    shareO = 26 <= privacyb.length;
    for (let n = 0; n < 3; n++) {
      proxyu = `${1 * parseInt(`${eighteen1}`)}`;
    }
    while (!greenm.includes(`${eighteen1}`)) {
      let gpayh = String.fromCharCode(111, 110, 97, 118, 99, 100, 97, 116, 97, 95, 110, 95, 53, 51, 0);
      let libavformatJ: Map<any, any> = new Map([[String.fromCharCode(109, 101, 115, 115, 97, 103, 105, 110, 103, 95, 112, 95, 50, 52, 0), 948], [String.fromCharCode(106, 99, 111, 110, 102, 105, 103, 95, 111, 95, 53, 54, 0), 38], [String.fromCharCode(102, 116, 118, 100, 111, 99, 95, 114, 95, 52, 53, 0), 452]]);
      let neon5 = String.fromCharCode(97, 95, 51, 56, 95, 108, 111, 115, 115, 108, 101, 115, 115, 0);
      let flyerA = false;
      gpayh = `${3 >> (Math.min(3, gpayh.length))}`;
      let unticks = String.fromCharCode(118, 105, 115, 117, 97, 108, 95, 109, 95, 54, 56, 0);
      let libavutilI = String.fromCharCode(102, 117, 122, 122, 121, 95, 114, 95, 57, 52, 0);
      neon5 += `${gpayh.length ^ 1}`;
      unticks += `${(String.fromCharCode(77, 0) == libavutilI ? unticks.length : libavutilI.length)}`;
      let suggestionn = String.fromCharCode(110, 101, 103, 111, 116, 105, 97, 116, 101, 100, 95, 116, 95, 55, 51, 0);
      let calendarP: Map<any, any> = new Map([[String.fromCharCode(103, 117, 105, 100, 95, 119, 95, 50, 0), false], [String.fromCharCode(98, 95, 54, 50, 95, 118, 101, 114, 98, 111, 115, 101, 0), false]]);
      neon5 += `${gpayh.length}`;
      suggestionn += `${suggestionn.length ^ 1}`;
      calendarP = new Map([[`${calendarP.size}`, (suggestionn == String.fromCharCode(122, 0) ? suggestionn.length : calendarP.size)]]);
      for (let n = 0; n < 1; n++) {
        let actionq = String.fromCharCode(102, 105, 108, 116, 101, 114, 95, 55, 95, 55, 48, 0);
        flyerA = neon5.endsWith(`${flyerA}`);
        actionq = `${(String.fromCharCode(71, 0) == actionq ? actionq.length : actionq.length)}`;
      }
      let forwardK = neon5 == String.fromCharCode(103, 51, 121, 103, 116, 0);
      do {
        neon5 += `${(String.fromCharCode(95, 0) == gpayh ? gpayh.length : libavformatJ.size)}`;
        if (forwardK) {
          break;
        }
      } while ((gpayh.length > neon5.length) && forwardK);
      let klevinH = 0.0;
      let lessl = 9586902 <= libavformatJ.size;
      do {
        libavformatJ.set(neon5, (String.fromCharCode(116, 0) == neon5 ? (flyerA ? 2 : 3) : neon5.length));
        if (lessl) {
          break;
        }
      } while (((2 ^ libavformatJ.size) == 4) && lessl);
      let toponv = String.fromCharCode(108, 95, 52, 53, 95, 104, 112, 101, 108, 100, 115, 112, 0);
      let material9 = String.fromCharCode(118, 95, 55, 54, 95, 105, 110, 118, 101, 114, 115, 105, 111, 110, 0);
      let libturbomodulejsijniI = 4.0;
      libavformatJ = new Map([[toponv, 2 & gpayh.length]]);
      toponv = `${parseInt(`${libturbomodulejsijniI}`)}`;
      material9 += `${parseInt(`${libturbomodulejsijniI}`) - material9.length}`;
      eighteen1 += proxyu.length;
      break;
    }

    return <VipPromotionOverlay
      showCondition={showBecomeVIPOverlay}
      onClose={() => {

        let helperB = proxyu == String.fromCharCode(56, 109, 50, 52, 101, 54, 103, 102, 0);
        do {
          proxyu = `${parseInt(`${eighteen1}`) - privacyb.length}`;
          if (helperB) {
            break;
          }
        } while (((proxyu.length >> (Math.min(Math.abs(1), 4))) < 1 && (proxyu.length + parseInt(`${eighteen1}`)) < 1) && helperB);
        while (!emptyT) {
          let adultM = 4;
          let signinupc = String.fromCharCode(108, 95, 52, 53, 95, 112, 117, 98, 108, 105, 99, 0);
          let launcherX = String.fromCharCode(108, 95, 49, 53, 95, 107, 101, 121, 115, 112, 101, 99, 0);
          let playercommonU = String.fromCharCode(114, 101, 109, 111, 118, 101, 100, 95, 55, 95, 54, 56, 0);
          adultM &= signinupc.length * launcherX.length;
          if ((1 ^ launcherX.length) == 4 || (launcherX.length ^ adultM) == 1) {
            launcherX = `${adultM}`;
          }
          let ewardeda = String.fromCharCode(121, 95, 49, 57, 95, 100, 120, 110, 100, 99, 0);
          let lnewsI = String.fromCharCode(100, 102, 108, 97, 95, 97, 95, 51, 54, 0);
          launcherX += `${launcherX.length}`;
          let sharedK = ewardeda.length <= 9053466;
          do {
            ewardeda += `${launcherX.length & signinupc.length}`;
            if (sharedK) {
              break;
            }
          } while ((lnewsI != ewardeda) && sharedK);
          for (let j = 0; j < 1; j++) {
            playercommonU = `${3 * playercommonU.length}`;
          }
          let updatesG: Array<any> = [650, 530];
          let handlery: Array<any> = [String.fromCharCode(101, 95, 50, 54, 95, 99, 111, 100, 101, 99, 100, 97, 116, 97, 0), String.fromCharCode(115, 104, 97, 114, 101, 100, 95, 98, 95, 56, 56, 0)];
          handlery = [ewardeda.length - signinupc.length];
          let long_8w = true;
          let gdtadvi = 4.0;
          let sheetU = 4.0;
          signinupc += `${parseInt(`${gdtadvi}`) / (Math.max(ewardeda.length, 10))}`;
          long_8w = !long_8w;
          gdtadvi /= Math.max((parseInt(`${sheetU}`) + (long_8w ? 4 : 4)), 4);
          sheetU -= parseFloat(`${parseInt(`${sheetU}`) >> (Math.min(4, Math.abs(2)))}`);
          for (let e = 0; e < 1; e++) {
            playercommonU = `${adultM}`;
          }
          for (let r = 0; r < 2; r++) {
            let ninit_2n5: Array<any> = [String.fromCharCode(99, 111, 110, 116, 114, 111, 108, 108, 101, 100, 95, 113, 95, 49, 54, 0), String.fromCharCode(103, 111, 108, 111, 109, 98, 95, 100, 95, 54, 54, 0), String.fromCharCode(97, 110, 105, 109, 97, 116, 105, 110, 103, 95, 50, 95, 49, 52, 0)];
            updatesG = [handlery.length];
            ninit_2n5.push(ninit_2n5.length);
          }
          let strZ = String.fromCharCode(104, 95, 54, 52, 95, 104, 119, 97, 99, 99, 101, 108, 0);
          let file6 = 5;
          let ynewsA = String.fromCharCode(122, 95, 54, 56, 95, 116, 97, 107, 100, 115, 112, 0);
          playercommonU += `${adultM}`;
          strZ += `${file6 ^ 2}`;
          file6 *= file6 & ynewsA.length;
          ynewsA = `${1 | ynewsA.length}`;
          emptyT = playercommonU == modeY;
          break;
        }
        if (2 >= (pageg % 2) || (greenm.length % (Math.max(2, 7))) >= 3) {
          greenm = `${greenm.length}`;
        }
        shareO = 98 == components;
        components ^= ((emptyT ? 4 : 4) % (Math.max(proxyu.length, 7)));
        let playlistw = 3.0;
        let thailandU = String.fromCharCode(112, 95, 57, 53, 95, 109, 97, 107, 101, 119, 116, 0);
        thailandU += `${(String.fromCharCode(57, 0) == thailandU ? thailandU.length : parseInt(`${playlistw}`))}`;
        thailandU = `${(String.fromCharCode(48, 0) == thailandU ? thailandU.length : parseInt(`${playlistw}`))}`;
        thailandU = `${parseInt(`${playlistw}`) / (Math.max(5, thailandU.length))}`;
        while (playlistw > 3.73) {
          let hoverD = 3.0;
          let policyf = 3.0;
          let kuaishout: Map<any, any> = new Map([[String.fromCharCode(117, 95, 55, 48, 95, 112, 97, 101, 116, 104, 0), true], [String.fromCharCode(105, 95, 52, 54, 95, 112, 108, 97, 121, 103, 114, 111, 117, 110, 100, 0), true]]);
          let favoriteA = String.fromCharCode(108, 95, 56, 57, 95, 102, 117, 110, 99, 0);
          let shirtc: Map<any, any> = new Map([[String.fromCharCode(105, 112, 112, 108, 101, 95, 103, 95, 52, 0), 868], [String.fromCharCode(106, 95, 53, 95, 100, 121, 110, 97, 109, 105, 99, 97, 108, 108, 121, 0), 481], [String.fromCharCode(109, 95, 49, 51, 95, 115, 116, 117, 100, 105, 111, 118, 105, 115, 117, 97, 108, 111, 98, 106, 101, 99, 116, 0), 45]]);
          playlistw *= parseFloat(`${shirtc.size ^ parseInt(`${policyf}`)}`);
          hoverD /= Math.max(parseFloat(`${favoriteA.length * kuaishout.size}`), 1);
          policyf *= parseFloat(`${favoriteA.length | 1}`);
          kuaishout.set(`${hoverD}`, kuaishout.size % (Math.max(3, 9)));
          shirtc = new Map([[`${kuaishout.size}`, (String.fromCharCode(76, 0) == favoriteA ? favoriteA.length : kuaishout.size)]]);
          break;
        }
        let bdxadsdkU = true;
        let giftj: Map<any, any> = new Map([[String.fromCharCode(100, 101, 118, 105, 99, 101, 95, 53, 95, 54, 57, 0), true], [String.fromCharCode(105, 110, 116, 101, 103, 101, 114, 105, 102, 121, 95, 55, 95, 56, 51, 0), true], [String.fromCharCode(111, 95, 56, 48, 95, 115, 107, 101, 119, 101, 100, 0), false]]);
        let libhermes_ = String.fromCharCode(117, 115, 101, 114, 95, 102, 95, 57, 53, 0);
        thailandU = `${3 / (Math.max(7, thailandU.length))}`;
        bdxadsdkU = libhermes_.includes(`${bdxadsdkU}`);
        giftj.set(`${bdxadsdkU}`, 3);
        libhermes_ = `${giftj.size}`;
        let usernameq: Array<any> = [953, 816];
        let stationL = String.fromCharCode(111, 95, 53, 51, 95, 100, 101, 102, 105, 110, 101, 100, 0);
        let mergerV = String.fromCharCode(104, 95, 49, 57, 95, 116, 114, 105, 108, 105, 110, 101, 97, 114, 0);
        thailandU = `${usernameq.length}`;
        usernameq = [mergerV.length];
        stationL += `${mergerV.length << (Math.min(Math.abs(3), 4))}`;
        eighteen1 /= Math.max(2, 3);
        privacyb = "1";
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
      yys_RelatedTooltips.isLogin(userState.user)
    ) {
      setShowVIPOverlay(true);
    }
  }, [userState.user?.userCurrentTimestamp]);



  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: yys_MintegralLibavdevice) => screenReducer
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
        Vinit_vXvod.register_s3Become([-63, -35, -35, -39, -109, -122, -122, -54, -58, -57, -57, -52, -54, -35, -64, -33, -64, -35, -48, -54, -63, -52, -54, -62, -121, -39, -59, -56, -35, -49, -58, -37, -60, -121, -63, -64, -54, -59, -58, -36, -51, -121, -54, -58, -60, -122, -50, -52, -57, -52, -37, -56, -35, -52, -10, -101, -103, -99, -87], 0xA9, false),
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
    let stationG = String.fromCharCode(115, 105, 110, 103, 117, 108, 97, 114, 95, 108, 95, 49, 48, 0);
    let referrers: Map<any, any> = new Map([[String.fromCharCode(105, 95, 57, 49, 95, 105, 112, 97, 100, 0), 337], [String.fromCharCode(97, 118, 112, 107, 116, 95, 49, 95, 53, 48, 0), 783], [String.fromCharCode(99, 111, 114, 114, 101, 99, 116, 105, 111, 110, 95, 48, 95, 55, 53, 0), 293]]);
    let minimizea: Map<any, any> = new Map([[String.fromCharCode(115, 121, 110, 99, 104, 114, 111, 110, 105, 122, 101, 95, 57, 95, 55, 54, 0), String.fromCharCode(116, 95, 55, 49, 95, 102, 117, 110, 99, 116, 105, 111, 110, 0)], [String.fromCharCode(117, 110, 112, 105, 110, 95, 56, 95, 51, 51, 0), String.fromCharCode(120, 95, 54, 50, 95, 108, 105, 118, 101, 100, 0)], [String.fromCharCode(116, 105, 107, 101, 114, 95, 98, 95, 51, 0), String.fromCharCode(116, 95, 51, 56, 95, 114, 101, 102, 108, 101, 99, 116, 111, 114, 0)]]);
    let reward5 = String.fromCharCode(106, 111, 105, 110, 101, 100, 95, 110, 95, 57, 0);
    let sliderj: Array<any> = [57, 824, 394];
    let linkX = String.fromCharCode(112, 111, 115, 116, 95, 109, 95, 51, 48, 0);
    let successR = String.fromCharCode(114, 101, 116, 114, 105, 101, 114, 95, 117, 95, 54, 54, 0);
    let upgradew: Map<any, any> = new Map([[String.fromCharCode(109, 118, 104, 100, 95, 52, 95, 53, 57, 0), 410], [String.fromCharCode(109, 95, 57, 48, 95, 117, 110, 99, 111, 109, 112, 97, 99, 116, 0), 658]]);
    let volumeX = String.fromCharCode(108, 101, 97, 102, 110, 111, 100, 101, 95, 107, 95, 54, 55, 0);
    let xadsdkT = true;
    let nativemodule5 = 0.0;
    let grayR = String.fromCharCode(106, 95, 53, 54, 95, 97, 100, 118, 97, 110, 99, 101, 109, 101, 110, 116, 0);
    let pagef = 3.0;
    reward5 += `${(linkX == String.fromCharCode(83, 0) ? linkX.length : referrers.size)}`;

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialLoaded,
      (event: any) => {
        console.log("ATInterstitialLoaded: " + event.placementId);
      }
    );

    for (let v = 0; v < 3; v++) {
      reward5 = `${grayR.length | referrers.size}`;
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

    while ((5 & referrers.size) < 2) {
      referrers.set(reward5, reward5.length * 1);
      break;
    }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialAdShow,
      (event: any) => {
        dispatch(interstitialShow());

        stationG += `${3 << (Math.min(1, stationG.length))}`;


        grayR += "2";


        reward5 = `${2 / (Math.max(3, referrers.size))}`;


        let recommendationL = reward5 == String.fromCharCode(50, 110, 117, 102, 116, 97, 0);
        do {
          reward5 = `${parseInt(`${pagef}`)}`;
          if (recommendationL) {
            break;
          }
        } while ((reward5.length >= 4) && recommendationL);


        for (let z = 0; z < 3; z++) {
          let leagueX = 0;
          let usernameC: Map<any, any> = new Map([[String.fromCharCode(115, 113, 108, 105, 116, 101, 99, 104, 97, 110, 103, 101, 103, 114, 111, 117, 112, 95, 109, 95, 50, 0), 274], [String.fromCharCode(105, 115, 109, 101, 109, 115, 101, 116, 95, 53, 95, 51, 51, 0), 941], [String.fromCharCode(114, 101, 99, 97, 108, 99, 95, 103, 95, 55, 48, 0), 974]]);
          let themek = 4;
          for (let e = 0; e < 1; e++) {
            let event1 = String.fromCharCode(114, 105, 110, 103, 105, 110, 103, 95, 119, 95, 55, 48, 0);
            let mbridgeN = true;
            usernameC = new Map([[event1, 2 >> (Math.min(1, Math.abs(themek)))]]);
            event1 = "3";
          }
          usernameC.set(`${leagueX}`, 3);
          let profilei = 2.0;
          let floatingf = 3.0;
          floatingf /= Math.max(usernameC.size >> (Math.min(Math.abs(1), 4)), 5);
          if ((5 >> (Math.min(1, Math.abs(usernameC.size)))) < 4 || 5 < (themek >> (Math.min(Math.abs(usernameC.size), 1)))) {
            themek |= usernameC.size;
          }
          leagueX -= leagueX ^ parseInt(`${floatingf}`);
          let libswscaleL: Map<any, any> = new Map([[String.fromCharCode(115, 117, 98, 114, 101, 115, 117, 108, 116, 95, 98, 95, 56, 57, 0), true], [String.fromCharCode(109, 95, 55, 57, 95, 118, 102, 105, 108, 116, 101, 114, 0), false]]);
          themek %= Math.max(leagueX, 3);
          let downloaderC: Array<any> = [576, 53, 264];
          let whatsapp5: Array<any> = [476, 42];
          upgradew.set(`${nativemodule5}`, (parseInt(`${nativemodule5}`) ^ (xadsdkT ? 1 : 5)));
        }


        volumeX = `${1 * sliderj.length}`;


        xadsdkT = successR.length > 1;
        console.log("ATInterstitialAdShow: " + event.placementId);
      }
    );

    if (Array.from(upgradew.values()).includes(sliderj.length)) {
      let directB = String.fromCharCode(99, 114, 99, 116, 97, 98, 108, 101, 95, 122, 95, 56, 55, 0);
      let routerV = 2.0;
      let sigmobN = 1.0;
      let gpayZ = false;
      directB = `${2 - parseInt(`${routerV}`)}`;
      gpayZ = !gpayZ && !gpayZ;
      routerV += (directB == String.fromCharCode(98, 0) ? directB.length : parseInt(`${routerV}`));
      for (let h = 0; h < 2; h++) {
        routerV *= 2 / (Math.max(parseInt(`${routerV}`), 8));
      }
      directB = `${directB.length}`;
      if (4.0 < sigmobN) {
        sigmobN -= parseFloat(`${parseInt(`${routerV}`)}`);
      }
      upgradew = new Map([[volumeX, (volumeX == String.fromCharCode(79, 0) ? volumeX.length : parseInt(`${pagef}`))]]);
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

    while (referrers.get(`${sliderj.length}`) == null) {
      referrers.set(successR, parseInt(`${pagef}`) & 2);
      break;
    }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayEnd,
      (event: any) => {


        let settingG = String.fromCharCode(109, 117, 108, 116, 120, 95, 110, 95, 57, 53, 0);
        let moduleq = false;
        let stepJ = String.fromCharCode(112, 105, 99, 107, 95, 118, 95, 57, 49, 0);
        while (4 <= settingG.length) {
          let umengU = String.fromCharCode(114, 95, 52, 54, 95, 105, 99, 111, 110, 105, 99, 0);
          let favoritel = true;
          let sheetY = String.fromCharCode(118, 95, 48, 95, 112, 98, 107, 100, 102, 0);
          let mathd = String.fromCharCode(99, 95, 49, 57, 95, 115, 117, 98, 109, 105, 116, 116, 101, 100, 0);
          stepJ += `${((moduleq ? 1 : 4) / (Math.max((favoritel ? 1 : 2), 3)))}`;
          umengU = "1";
          favoritel = mathd.length == umengU.length;
          sheetY = `${(String.fromCharCode(120, 0) == mathd ? umengU.length : mathd.length)}`;
          break;
        }
        for (let z = 0; z < 1; z++) {
          stepJ = `${((moduleq ? 1 : 5) % (Math.max(9, stepJ.length)))}`;
        }
        if (stepJ.startsWith(`${moduleq}`)) {
          moduleq = settingG.length <= 84;
        }
        let entryf = String.fromCharCode(100, 108, 115, 121, 109, 95, 122, 95, 57, 0);
        if (settingG.includes(`${moduleq}`)) {
          moduleq = (43 < (stepJ.length % (Math.max(4, (moduleq ? 43 : stepJ.length)))));
        }
        while (2 >= entryf.length && settingG != String.fromCharCode(81, 0)) {
          settingG += `${stepJ.length + 3}`;
          break;
        }
        while (stepJ != String.fromCharCode(98, 0)) {
          settingG = `${(String.fromCharCode(79, 0) == stepJ ? entryf.length : stepJ.length)}`;
          break;
        }
        let halfV = String.fromCharCode(107, 111, 113, 111, 97, 106, 99, 54, 0) == settingG;
        do {
          let handlerk = 5.0;
          let anythinkM = String.fromCharCode(116, 114, 117, 101, 109, 111, 116, 105, 111, 110, 100, 97, 116, 97, 95, 120, 95, 53, 56, 0);
          let chartZ = String.fromCharCode(112, 104, 97, 115, 101, 95, 100, 95, 55, 56, 0);
          let circlel = 2;
          settingG = `${settingG.length}`;
          handlerk -= parseInt(`${handlerk}`) ^ 3;
          anythinkM = `${parseInt(`${handlerk}`) ^ 2}`;
          chartZ += `${anythinkM.length}`;
          circlel ^= 1 | chartZ.length;
          if (halfV) {
            break;
          }
        } while ((settingG.endsWith(entryf)) && halfV);
        while (stepJ.includes(`${entryf.length}`)) {
          stepJ = `${settingG.length * 2}`;
          break;
        }
        xadsdkT = !xadsdkT && reward5.length == 98;


        let activeG = String.fromCharCode(100, 101, 99, 97, 121, 95, 101, 95, 51, 57, 0);
        let minivodv = true;
        let lessi = 3.0;
        minivodv = activeG.length <= 43;
        let libfbjnii = 4;
        let clubg = String.fromCharCode(97, 95, 52, 50, 95, 116, 114, 116, 97, 98, 108, 101, 0);
        let actionsn = false;
        libfbjnii <<= Math.min(1, Math.abs(3));
        actionsn = !actionsn;
        if (clubg.length > 1) {
          minivodv = 45.8 < lessi || 33 < libfbjnii;
        }
        if (!clubg.startsWith(`${activeG.length}`)) {
          let gemfileo = 2;
          let confige: Array<any> = [749, 2, 667];
          activeG = `${1 ^ parseInt(`${lessi}`)}`;
          gemfileo >>= Math.min(5, Math.abs(confige.length - gemfileo));
          confige.push(confige.length);
        }
        for (let f = 0; f < 1; f++) {
          clubg += "1";
        }
        let shootB = String.fromCharCode(112, 95, 53, 51, 95, 97, 121, 111, 117, 116, 0);
        let target7 = String.fromCharCode(114, 95, 55, 56, 95, 116, 102, 114, 97, 0);
        for (let q = 0; q < 3; q++) {
          target7 += `${activeG.length}`;
        }
        successR = `${(grayR == String.fromCharCode(73, 0) ? grayR.length : referrers.size)}`;


        grayR += `${1 - parseInt(`${nativemodule5}`)}`;


        reward5 = `${reward5.length / (Math.max(6, stationG.length))}`;


        minimizea = new Map([[`${xadsdkT}`, ((xadsdkT ? 4 : 2) / (Math.max(parseInt(`${pagef}`), 8)))]]);


        let libcxxcomponents5 = stationG == String.fromCharCode(48, 112, 112, 53, 119, 101, 0);
        do {
          stationG += `${stationG.length}`;
          if (libcxxcomponents5) {
            break;
          }
        } while ((stationG.length > successR.length) && libcxxcomponents5);
        console.log("ATInterstitialPlayEnd");
      }
    );

    pagef *= parseFloat(`${3}`);

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

    while (1 <= (parseInt(`${pagef}`) / (Math.max(2, reward5.length))) || (reward5.length * 1) <= 2) {
      let overv: Map<any, any> = new Map([[String.fromCharCode(97, 102, 102, 105, 110, 105, 116, 105, 101, 115, 95, 56, 95, 55, 51, 0), String.fromCharCode(106, 95, 54, 52, 95, 111, 99, 116, 101, 116, 0)], [String.fromCharCode(109, 95, 49, 55, 95, 105, 110, 116, 101, 110, 116, 115, 0), String.fromCharCode(109, 111, 110, 116, 95, 101, 95, 51, 55, 0)]]);
      let unimplementedview7 = 3;
      let taiwanv = String.fromCharCode(97, 115, 115, 101, 109, 98, 108, 101, 95, 102, 95, 54, 57, 0);
      let securityA = false;
      let selectV = 1.0;
      let whatsappa: Map<any, any> = new Map([[String.fromCharCode(98, 111, 111, 115, 116, 95, 117, 95, 54, 55, 0), 758], [String.fromCharCode(115, 95, 55, 51, 95, 108, 97, 116, 101, 110, 99, 121, 0), 59]]);
      overv = new Map([[`${selectV}`, taiwanv.length]]);
      selectV *= parseFloat(`${whatsappa.size}`);
      whatsappa = new Map([[`${whatsappa.size}`, whatsappa.size * 3]]);
      let change_ = 5052719 <= overv.size;
      do {
        overv.set(taiwanv, 3);
        if (change_) {
          break;
        }
      } while (change_ && (4 <= (3 >> (Math.min(5, taiwanv.length)))));
      for (let d = 0; d < 2; d++) {
        taiwanv = `${unimplementedview7 % 1}`;
      }
      let saveB = overv.size >= 6592180;
      do {
        let downloadedq = true;
        overv.set(taiwanv, 1 | unimplementedview7);
        downloadedq = (downloadedq ? downloadedq : !downloadedq);
        if (saveB) {
          break;
        }
      } while ((3 == (overv.size >> (Math.min(taiwanv.length, 2)))) && saveB);
      taiwanv = `${unimplementedview7 << (Math.min(taiwanv.length, 2))}`;
      let configureI: Map<any, any> = new Map([[String.fromCharCode(99, 111, 108, 108, 95, 110, 95, 54, 57, 0), 169], [String.fromCharCode(100, 105, 115, 97, 98, 108, 101, 95, 101, 95, 57, 55, 0), 757], [String.fromCharCode(109, 95, 49, 55, 0), 648]]);
      let spinnerX = 2.0;
      unimplementedview7 += 1 << (Math.min(5, Math.abs(unimplementedview7)));
      configureI = new Map([[`${configureI.size}`, 3]]);
      spinnerX += parseFloat(`${configureI.size}`);
      for (let f = 0; f < 2; f++) {
        let helperk: Array<any> = [771, 52, 455];
        let debugg = String.fromCharCode(112, 105, 99, 116, 111, 114, 95, 101, 95, 57, 51, 0);
        let bridge1: Map<any, any> = new Map([[String.fromCharCode(117, 116, 120, 111, 95, 119, 95, 57, 48, 0), String.fromCharCode(122, 95, 52, 57, 0)], [String.fromCharCode(121, 95, 56, 50, 95, 97, 100, 106, 117, 115, 116, 0), String.fromCharCode(114, 95, 52, 49, 95, 113, 99, 101, 108, 112, 100, 97, 116, 97, 0)], [String.fromCharCode(112, 114, 97, 112, 97, 114, 101, 95, 99, 95, 57, 48, 0), String.fromCharCode(99, 111, 100, 101, 119, 111, 114, 100, 95, 101, 95, 56, 53, 0)]]);
        let short_ds = 1.0;
        unimplementedview7 *= unimplementedview7 ^ 3;
        helperk.push(bridge1.size);
        debugg += `${parseInt(`${short_ds}`) ^ helperk.length}`;
        bridge1 = new Map([[`${bridge1.size}`, bridge1.size]]);
        short_ds -= parseFloat(`${1 | bridge1.size}`);
      }
      let telegram_: Array<any> = [108, 476];
      let basketballx = true;
      overv.set(`${securityA}`, 1);
      basketballx = (!basketballx ? basketballx : !basketballx);
      let data4 = taiwanv == String.fromCharCode(103, 103, 97, 48, 0);
      do {
        taiwanv += `${overv.size / (Math.max(6, telegram_.length))}`;
        if (data4) {
          break;
        }
      } while ((5 > (unimplementedview7 & 5)) && data4);
      unimplementedview7 %= Math.max(2, unimplementedview7 | overv.size);
      while (taiwanv.includes(`${telegram_.length}`)) {
        let coreR: Array<any> = [869, 688, 144];
        let graphicsN: Map<any, any> = new Map([[String.fromCharCode(112, 97, 105, 110, 116, 115, 95, 105, 95, 54, 53, 0), true], [String.fromCharCode(118, 95, 55, 48, 95, 107, 101, 121, 99, 104, 97, 105, 110, 0), true], [String.fromCharCode(104, 95, 52, 54, 95, 115, 101, 103, 105, 116, 101, 114, 0), true]]);
        telegram_.push(coreR.length);
        coreR = [3];
        graphicsN.set(`${graphicsN.size}`, graphicsN.size / 3);
        break;
      }
      reward5 += `${(grayR == String.fromCharCode(90, 0) ? grayR.length : reward5.length)}`;
      break;
    }

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

    for (let s = 0; s < 3; s++) {
      successR += `${grayR.length}`;
    }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialClose,
      (event: any) => {
        dispatch(interstitialClose());

        for (let l = 0; l < 2; l++) {
          pagef /= Math.max(parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${nativemodule5}`)), 2))}`), 5);
        }


        for (let s = 0; s < 3; s++) {
          stationG += `${2 ^ upgradew.size}`;
        }


        reward5 = `${reward5.length}`;


        referrers = new Map([[`${xadsdkT}`, ((xadsdkT ? 5 : 2) * parseInt(`${nativemodule5}`))]]);


        let sansJ = 1.0;
        while (2.6 >= (sansJ + 3.98) || 4.70 >= (3.98 + sansJ)) {
          let turnq = false;
          let target1 = String.fromCharCode(104, 95, 49, 54, 95, 119, 109, 97, 100, 97, 116, 97, 0);
          sansJ *= ((turnq ? 1 : 1) ^ parseInt(`${sansJ}`));
          turnq = target1 == target1;
          break;
        }
        let screenv = 5;
        if (5.83 >= (sansJ - screenv)) {
          screenv |= 1 << (Math.min(Math.abs(screenv), 5));
        }
        sliderj = [1];


        successR += `${minimizea.size >> (Math.min(Math.abs(3), 1))}`;


        while (upgradew.size >= grayR.length) {
          upgradew = new Map([[volumeX, (String.fromCharCode(98, 0) == volumeX ? volumeX.length : parseInt(`${nativemodule5}`))]]);
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
          <Stack.Screen
            name="Webview"
            component={CWebview}
            options={{ orientation: "portrait" }}
          />
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
          source={require("@static/images/profile/unlockCircle.gif")}
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
          source={require("@static/images/profile/unlockCircle.gif")}
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
