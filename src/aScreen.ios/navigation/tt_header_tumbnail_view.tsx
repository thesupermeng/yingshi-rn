

class TwitterMbnativeStyleHeji {
    static scheduleEmpty = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { AllCommentScreen } from "../screens/tt_langkey";
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
import PlaylistTabIcon from "@static/images/typingHuaweiFile.svg";
import PlaylistActiveTabIcon from "@static/images/yingContextPlaylist.svg";
import ProfileTabIcon from "@static/images/dataTransferSearchbar.svg";
import ProfileActiveTabIcon from "@static/images/unselectedEmoji.svg";
import WatchAnytimeTabIcon from "@static/images/unselectedDangerUser.svg";
import WatchAnytimeActiveTabIcon from "@static/images/searchHeader.svg";
import UploadTabIcon from "@static/images/launchAppleLight.svg";
import UploadActiveTabIcon from "@static/images/matchesHolderShrink.svg";
import CatalogScreen from "../screens/Common/tt_score_policy";
import ShortVodCollectionScreen from "../screens/Profile/Collection/tt_list_lock";
import SportsIcon from "@static/images/thumbnailDropdown.svg";
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
import { LogBox, Platform, StyleSheet, Text, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/tt_spec_download";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_DOMAIN, UMENG_CHANNEL } from "@utility/tt_trophy_cross";
import { ttConfigRecommendation } from "../../../tt_copy_floater";
import {
  hideLoginAction,
  interstitialClose,
  interstitialShow,
  removeScreenAction,
  resetBottomSheetAction,
  resetSportWatchTime,
  showLoginAction,
} from "@redux/actions/tt_copy_heji";
import { Dialog } from "@rneui/themed";
import FastImage from "../components/common/tt_connection";
import { screenModel } from "@type/tt_twitter_data";
import { YingshiDarkTheme, YingshiLightTheme } from "@utility/tt_downloaded";


import {
  updateUserAuth,
  updateUserReferral,
} from "@redux/actions/tt_topon";
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
import { AdsBannerContext } from "../../contexts/tt_injury_reminder";
import VIP from "../screens/Profile/tt_white";
import { withIAPContext } from "react-native-iap";
import { VipDetails } from "../components/vip/tt_splash";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { ATInterstitialRNSDK } from "./../../../AnyThinkAds/tt_router";
import { ttTramini } from "@api";
import { CRouteInitializer } from "../../routes/tt_macau_read";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";
import { toggleDarkTheme, toggleLightTheme } from "@redux/actions/tt_cross";
import { UploadVideo } from "../screens/upload/tt_clear";
import { UploadVideoPreview } from "../screens/upload/tt_empty_view";
import { UploadHistory } from "../screens/upload/tt_overlay_result";
import { loginChecking } from "../../routes/tt_black";

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

  useLayoutEffect(() => {
    
    dispatch(toggleLightTheme());
  }, []);

  const HomeTabScreen = useCallback(() => {
       let redirect0: Map<any, any> = new Map([[String.fromCharCode(116,111,107,101,110,110,102,116,116,120,95,121,95,51,51,0),String.fromCharCode(116,95,49,0)], [String.fromCharCode(97,99,107,101,100,95,100,95,56,55,0),String.fromCharCode(109,95,50,48,95,118,112,109,116,0)]]);
    let recommendationW: Map<any, any> = new Map([[String.fromCharCode(115,113,114,116,110,101,103,95,112,95,54,50,0),true ], [String.fromCharCode(114,105,115,101,95,100,95,57,57,0),true ], [String.fromCharCode(112,114,101,118,111,117,115,95,50,95,56,55,0),true ]]);
    let overlayY = String.fromCharCode(115,104,97,114,101,103,114,111,117,112,95,48,95,55,52,0);
    let trophyW = String.fromCharCode(118,115,121,110,99,95,48,95,50,55,0);
    let zhengpianu = 4;
    let selectiond = String.fromCharCode(114,101,103,105,115,116,101,114,95,117,95,51,56,0);
    let flyero = String.fromCharCode(97,95,50,54,95,99,111,112,105,101,115,0);
    let downloadingv = String.fromCharCode(97,99,101,110,99,95,111,95,52,48,0);
    let trashC = String.fromCharCode(121,95,49,54,95,119,97,108,108,97,112,101,114,115,0);
    let utilsI = 4;
    let reactnativejsP = String.fromCharCode(116,104,111,117,115,97,110,100,115,95,119,95,49,50,0);
    let firebaseI = String.fromCharCode(105,95,53,95,103,101,116,120,118,97,114,0);
   if (flyero == String.fromCharCode(115,0)) {
      trophyW = `${flyero.length}`;
   }
   if (selectiond.length <= trashC.length) {
      selectiond = `${selectiond.length >> (Math.min(Math.abs(1), 5))}`;
   }
      redirect0 = new Map([[`${recommendationW.size}`, 3 | zhengpianu]]);
       let skipP = 5.0;
       let securityS = 5.0;
       let pause0: Map<any, any> = new Map([[String.fromCharCode(98,95,49,50,95,109,115,103,115,109,100,101,99,0),String.fromCharCode(114,101,113,117,101,115,116,95,104,95,52,55,0)], [String.fromCharCode(99,95,52,56,95,120,99,117,114,115,111,114,0),String.fromCharCode(98,95,53,49,95,100,101,116,97,99,104,0)], [String.fromCharCode(118,97,108,117,101,115,95,108,95,49,0),String.fromCharCode(112,117,116,105,110,116,95,51,95,54,50,0)]]);
         securityS /= Math.max(pause0.size, 2);
         securityS += pause0.size;
      while (1.57 >= skipP) {
         securityS += pause0.size % 3;
         break;
      }
      for (let p = 0; p < 3; p++) {
          let videojs1: Array<any> = [String.fromCharCode(121,95,52,55,95,99,100,102,116,0), String.fromCharCode(110,101,116,119,111,114,107,115,95,48,95,49,52,0)];
          let orientationp = true;
         skipP /= Math.max(4, (parseFloat(`${(orientationp ? 3 : 3) * 3}`)));
         videojs1 = [videojs1.length];
         orientationp = 17 <= videojs1.length || 17 <= videojs1.length;
      }
      for (let w = 0; w < 3; w++) {
         skipP *= parseFloat(`${parseInt(`${securityS}`) & pause0.size}`);
      }
         securityS += 1;
         securityS -= 1;
         securityS *= 3 / (Math.max(parseInt(`${skipP}`), 5));
          let holders = 3.0;
         pause0 = new Map([[`${pause0.size}`, pause0.size]]);
         holders += parseInt(`${holders}`);
      flyero += `${selectiond.length ^ 3}`;
   while (selectiond.length < trophyW.length) {
      trophyW = `${recommendationW.size}`;
      break;
   }
   if (downloadingv.includes(`${flyero.length}`)) {
      downloadingv = `${3 ^ selectiond.length}`;
   }
   let selected7 = selectiond == String.fromCharCode(121,106,109,53,108,51,102,118,120,121,0);
   do {
      selectiond = "1";
      if (selected7) {
         break;
      }
   } while ((downloadingv == selectiond) && selected7);
      flyero = `${trophyW.length}`;
      overlayY += `${(selectiond == String.fromCharCode(67,0) ? selectiond.length : overlayY.length)}`;
      downloadingv += `${redirect0.size << (Math.min(selectiond.length, 4))}`;
   let indexD = 8952735 >= zhengpianu;
   do {
      zhengpianu /= Math.max((String.fromCharCode(99,0) == downloadingv ? overlayY.length : downloadingv.length), 3);
      if (indexD) {
         break;
      }
   } while (indexD && ((zhengpianu * 2) >= 1));
   if (trophyW == String.fromCharCode(82,0)) {
      overlayY = `${(downloadingv == String.fromCharCode(51,0) ? redirect0.size : downloadingv.length)}`;
   }
       let favoriteM: Array<any> = [String.fromCharCode(110,99,104,117,110,107,95,108,95,56,49,0), String.fromCharCode(99,97,114,111,117,115,101,108,95,116,95,54,51,0)];
         favoriteM = [favoriteM.length | favoriteM.length];
      while ((1 - favoriteM.length) > 3 && 4 > (favoriteM.length - 1)) {
         favoriteM.push(1 << (Math.min(2, favoriteM.length)));
         break;
      }
         favoriteM = [2];
      utilsI >>= Math.min(Math.abs(recommendationW.size ^ 3), 4);
   if ((redirect0.size / (Math.max(5, 2))) > 3 || 2 > (redirect0.size / (Math.max(5, 1)))) {
      flyero = `${recommendationW.size & 3}`;
   }
   if (!trophyW.includes(`${recommendationW.size}`)) {
      trophyW = "2";
   }
   for (let v = 0; v < 3; v++) {
       let f_positionT = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,115,95,119,95,51,54,0);
      if (f_positionT.includes(`${f_positionT.length}`)) {
          let nativeexK = String.fromCharCode(103,95,56,95,110,111,105,115,101,0);
          let adultA = String.fromCharCode(102,116,118,112,108,97,115,116,110,111,100,101,95,116,95,52,52,0);
          let singaporeE = 1.0;
         f_positionT = `${adultA.length}`;
         nativeexK += `${parseInt(`${singaporeE}`) ^ 2}`;
         adultA = `${parseInt(`${singaporeE}`)}`;
      }
      let related5 = String.fromCharCode(57,57,118,119,118,0) == f_positionT;
      do {
         f_positionT += `${f_positionT.length}`;
         if (related5) {
            break;
         }
      } while (related5 && (f_positionT.length == 1));
       let lang1 = String.fromCharCode(111,95,52,55,95,98,114,97,99,107,101,116,0);
       let detailsW = String.fromCharCode(112,111,108,121,107,101,121,95,57,95,52,56,0);
      trashC += `${(overlayY == String.fromCharCode(69,0) ? zhengpianu : overlayY.length)}`;
   }
   for (let w = 0; w < 1; w++) {
      redirect0.set(flyero, redirect0.size);
   }
   while ((utilsI ^ 3) >= 4 || 3 >= (3 ^ flyero.length)) {
      utilsI |= (flyero == String.fromCharCode(79,0) ? selectiond.length : flyero.length);
      break;
   }
      recommendationW = new Map([[`${zhengpianu}`, 3]]);
   let short_byI = flyero.length <= 9000384;
   do {
       let ball7 = 1.0;
       let backwardJ: Array<any> = [944, 331, 892];
       let sourceA = String.fromCharCode(107,95,54,53,95,105,112,111,100,0);
         sourceA = `${parseInt(`${ball7}`)}`;
      let recommendationc = 9482324 >= backwardJ.length;
      do {
         backwardJ = [parseInt(`${ball7}`)];
         if (recommendationc) {
            break;
         }
      } while (recommendationc && (5 < sourceA.length));
      if ((sourceA.length + backwardJ.length) == 5 && (backwardJ.length + sourceA.length) == 5) {
          let context6 = String.fromCharCode(121,95,54,49,95,112,114,105,109,0);
          let modelsY = String.fromCharCode(112,95,50,52,95,115,111,114,116,101,100,0);
          let gemfileI = 3.0;
         backwardJ.push(parseInt(`${gemfileI}`) / 3);
         context6 = "2";
         modelsY = `${2 >> (Math.min(2, modelsY.length))}`;
         gemfileI += (parseFloat(`${String.fromCharCode(86,0) == context6 ? modelsY.length : context6.length}`));
      }
          let tickedx: Map<any, any> = new Map([[String.fromCharCode(114,97,116,101,95,111,95,49,49,0),String.fromCharCode(105,100,101,110,116,105,116,105,121,95,113,95,56,56,0)], [String.fromCharCode(102,95,55,55,95,120,99,111,100,101,0),String.fromCharCode(117,110,108,105,110,107,101,100,95,103,95,51,49,0)]]);
         backwardJ = [(String.fromCharCode(88,0) == sourceA ? sourceA.length : parseInt(`${ball7}`))];
         tickedx.set(`${tickedx.size}`, tickedx.size);
      for (let c = 0; c < 3; c++) {
         backwardJ.push(sourceA.length);
      }
       let accepted5: Array<any> = [String.fromCharCode(122,95,54,53,95,109,99,111,109,112,0), String.fromCharCode(99,111,100,101,95,108,95,50,51,0), String.fromCharCode(97,95,56,53,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,0)];
       let reactnativejsM: Array<any> = [616, 598];
       let stationsU = String.fromCharCode(101,95,55,50,95,119,101,98,112,97,103,101,0);
       let greyk = String.fromCharCode(121,95,51,53,95,97,112,115,0);
      while (4.51 >= (parseFloat(`${backwardJ.length}`) + ball7)) {
         ball7 += parseFloat(`${parseInt(`${ball7}`) ^ reactnativejsM.length}`);
         break;
      }
          let private_5P = true;
         sourceA += `${reactnativejsM.length}`;
         private_5P = !private_5P;
      flyero = `${recommendationW.size}`;
      if (short_byI) {
         break;
      }
   } while (short_byI && (flyero.length == downloadingv.length));

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
        {ttConfigRecommendation.instance.tabConfig != null && ttConfigRecommendation.instance.len == 5 ? (
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
       let coreV = 2.0;
    let reactb = 0.0;
    let progressG = true;
    let dplusU = 5.0;
    let chinau = 2;
    let analyticsy = String.fromCharCode(97,95,57,53,95,116,97,98,108,101,0);
    let typesE = 2.0;
    let stations6 = String.fromCharCode(112,95,51,54,95,97,116,116,114,105,98,115,0);
    let zhuboZ = String.fromCharCode(101,95,53,54,95,115,119,105,112,101,100,0);
    let sansa = 1.0;
    let desco = String.fromCharCode(100,95,52,53,95,112,114,101,100,105,99,97,116,101,0);
    let sourceF = String.fromCharCode(101,110,116,101,114,105,110,103,95,115,95,51,54,0);
    let ynewinterstitialO: Array<any> = [969, 6];
    let chartM = String.fromCharCode(118,101,114,98,97,116,105,109,95,97,95,53,57,0);
    let overlayW = 0;
    let questC: Array<any> = [506, 67];
      coreV -= 3 + analyticsy.length;
      chinau |= 3;
      reactb += parseFloat(`${2 ^ desco.length}`);
   for (let e = 0; e < 1; e++) {
      reactb /= Math.max(2, parseFloat(`${sourceF.length & 3}`));
   }

    const result = await ttTramini.getUserDetails();

   while (4.79 < (typesE - 1.71)) {
       let episodesR = false;
          let corei: Array<any> = [String.fromCharCode(115,116,114,116,111,105,110,116,95,109,95,55,48,0), String.fromCharCode(116,111,110,103,117,101,95,122,95,56,56,0), String.fromCharCode(121,95,50,55,95,105,115,109,101,109,115,101,116,0)];
          let twitterF: Array<any> = [String.fromCharCode(106,95,49,48,95,103,111,98,98,108,101,0), String.fromCharCode(103,95,52,55,95,102,108,116,112,0)];
          let gemfilec = 3.0;
         episodesR = (twitterF.length | corei.length) <= 100;
         corei = [parseInt(`${gemfilec}`)];
         twitterF.push(parseInt(`${gemfilec}`));
       let teamL = String.fromCharCode(103,95,54,57,95,118,115,97,100,0);
       let temperaturee = String.fromCharCode(114,111,112,115,116,101,110,95,100,95,52,51,0);
       let configureS = 3.0;
       let floatingU = 5.0;
      typesE *= parseFloat(`${stations6.length}`);
      break;
   }
   while (!desco.includes(`${sansa}`)) {
      desco += `${(String.fromCharCode(71,0) == analyticsy ? sourceF.length : analyticsy.length)}`;
      break;
   }
   if (progressG) {
       let macauf = String.fromCharCode(114,95,53,54,95,115,109,111,111,116,104,108,121,0);
       let mbnativej = 1;
       let rightz = true;
       let zhubog = 1.0;
       let package_xv: Array<any> = [132, 178];
          let becomeA: Array<any> = [955, 918];
          let umengn = false;
          let str2 = String.fromCharCode(101,99,109,117,108,116,95,99,95,50,52,0);
         mbnativej |= 3 | str2.length;
         becomeA = [(2 * (umengn ? 5 : 1))];
         umengn = (57 < ((umengn ? becomeA.length : 57) - becomeA.length));
         str2 = `${((umengn ? 3 : 3) / (Math.max(3, becomeA.length)))}`;
          let actionA = String.fromCharCode(97,114,105,98,95,57,95,57,0);
          let playercommon5: Map<any, any> = new Map([[String.fromCharCode(100,95,53,52,95,105,100,119,116,0),634], [String.fromCharCode(112,114,111,99,101,115,115,105,110,103,95,118,95,54,54,0),272], [String.fromCharCode(115,112,97,99,101,100,95,118,95,49,50,0),368]]);
          let sentryD = 3.0;
         package_xv.push(2);
         actionA += `${playercommon5.size ^ 2}`;
         playercommon5.set(`${sentryD}`, 2 / (Math.max(8, parseInt(`${sentryD}`))));
          let configA: Array<any> = [970, 567];
         rightz = package_xv.includes(mbnativej);
         configA = [configA.length];
      for (let d = 0; d < 2; d++) {
         zhubog += parseFloat(`${macauf.length % 1}`);
      }
         zhubog += (parseFloat(`${mbnativej / (Math.max(7, (rightz ? 5 : 2)))}`));
      let mintegralt = 7111528.0 >= zhubog;
      do {
          let benefitM = 3.0;
         zhubog -= parseFloat(`${parseInt(`${zhubog}`)}`);
         benefitM += parseFloat(`${parseInt(`${benefitM}`)}`);
         if (mintegralt) {
            break;
         }
      } while (mintegralt && (macauf.length < parseInt(`${zhubog}`)));
      let completeE = zhubog <= 9264958.0;
      do {
         zhubog /= Math.max(parseFloat(`${2}`), 4);
         if (completeE) {
            break;
         }
      } while (completeE && (mbnativej >= zhubog));
          let episodes_ = String.fromCharCode(107,95,55,56,95,115,111,102,97,0);
         macauf += `${(macauf == String.fromCharCode(57,0) ? macauf.length : package_xv.length)}`;
         episodes_ = "1";
      let signinupz = 8508808 <= mbnativej;
      do {
          let anytimeN: Array<any> = [834, 212];
          let eventc = 2;
          let auto_t70 = 4;
          let reminder0 = String.fromCharCode(115,118,101,99,116,111,114,95,122,95,50,57,0);
          let sliderU = String.fromCharCode(117,95,56,57,95,111,110,99,101,0);
         mbnativej /= Math.max(parseInt(`${zhubog}`) | 2, 4);
         anytimeN.push(anytimeN.length - 2);
         eventc |= sliderU.length;
         auto_t70 %= Math.max(2, anytimeN.length);
         reminder0 = `${auto_t70}`;
         sliderU = `${auto_t70 + anytimeN.length}`;
         if (signinupz) {
            break;
         }
      } while (((1.96 + zhubog) > 2.1 && (zhubog + 1.96) > 1.68) && signinupz);
      for (let u = 0; u < 1; u++) {
         zhubog += parseFloat(`${mbnativej}`);
      }
         package_xv = [package_xv.length];
         package_xv = [2];
          let otherx: Array<any> = [508, 372];
          let navigation_ = 0.0;
          let white4 = false;
         zhubog *= parseFloat(`${1}`);
         otherx = [parseInt(`${navigation_}`) << (Math.min(1, Math.abs(2)))];
         navigation_ *= parseFloat(`${2 / (Math.max(1, otherx.length))}`);
         white4 = 80 <= otherx.length;
      if (3 == mbnativej) {
         mbnativej /= Math.max(3, 2);
      }
       let views_ = 2.0;
      progressG = zhubog > 45.88;
   }
       let auto_a8_: Array<any> = [295, 236, 936];
      let editN = 7159907 <= auto_a8_.length;
      do {
         auto_a8_ = [1];
         if (editN) {
            break;
         }
      } while (editN && (auto_a8_.includes(auto_a8_.length)));
      let pageq = auto_a8_.length >= 9035511;
      do {
          let eighteenD = String.fromCharCode(97,95,56,50,95,100,98,104,97,110,100,108,101,0);
          let frame_l0P = String.fromCharCode(113,95,49,48,48,95,97,115,115,111,99,105,97,116,105,111,110,115,0);
          let filed4 = 0.0;
          let langkey6 = 4.0;
          let link0 = false;
         auto_a8_.push(2);
         eighteenD += `${parseInt(`${langkey6}`) >> (Math.min(3, Math.abs(parseInt(`${filed4}`))))}`;
         frame_l0P += "2";
         filed4 *= parseFloat(`${eighteenD.length}`);
         langkey6 *= 2;
         link0 = eighteenD == String.fromCharCode(97,0);
         if (pageq) {
            break;
         }
      } while ((4 < auto_a8_.length) && pageq);
      while (auto_a8_.includes(auto_a8_.length)) {
         auto_a8_.push(auto_a8_.length ^ auto_a8_.length);
         break;
      }
      chinau &= desco.length - parseInt(`${reactb}`);
    if (result == null) {

   if (!sourceF.startsWith(`${sansa}`)) {
      sourceF = `${parseInt(`${typesE}`)}`;
   }
      chinau |= parseInt(`${dplusU}`);
      reactb /= Math.max(parseFloat(`${parseInt(`${typesE}`) / 3}`), 2);
   for (let o = 0; o < 2; o++) {
       let grayI: Array<any> = [644, 278];
       let toponY = String.fromCharCode(108,101,118,101,108,115,95,102,95,54,51,0);
       let reactJ = 1.0;
       let currentG = String.fromCharCode(99,102,102,116,98,95,99,95,56,57,0);
       let weiboy = 3.0;
      if (5.82 == (4.24 * reactJ)) {
         reactJ -= parseFloat(`${3 - currentG.length}`);
      }
         toponY = `${grayI.length}`;
      for (let k = 0; k < 3; k++) {
          let orangez = String.fromCharCode(115,116,114,105,107,101,95,107,95,53,51,0);
          let combineu: Array<any> = [214, 945];
          let gpay5 = String.fromCharCode(115,99,97,108,101,114,95,49,95,54,50,0);
         reactJ += parseFloat(`${gpay5.length - parseInt(`${reactJ}`)}`);
         orangez += `${orangez.length}`;
         combineu = [3 ^ orangez.length];
         gpay5 += "3";
      }
         grayI = [3 + parseInt(`${reactJ}`)];
      for (let j = 0; j < 3; j++) {
         toponY = "1";
      }
      if (!toponY.endsWith(`${weiboy}`)) {
         weiboy *= (currentG == String.fromCharCode(51,0) ? currentG.length : parseInt(`${reactJ}`));
      }
       let entryT = 0.0;
       let xvodE = 5.0;
         currentG = `${parseInt(`${reactJ}`)}`;
      while ((4.54 / (Math.max(3, xvodE))) < 2.26 && (weiboy + xvodE) < 4.54) {
         xvodE -= (parseFloat(`${toponY == String.fromCharCode(114,0) ? toponY.length : grayI.length}`));
         break;
      }
         entryT /= Math.max(parseFloat(`${3}`), 1);
       let baiduD = 0;
       let downloading_ = 1;
      while (baiduD <= toponY.length) {
          let g_countK = String.fromCharCode(116,97,110,115,105,103,95,50,95,54,54,0);
          let privacyH = true;
          let progressv: Map<any, any> = new Map([[String.fromCharCode(118,95,49,95,103,101,116,112,116,114,0),124], [String.fromCharCode(99,104,114,111,109,105,110,97,110,99,101,95,106,95,49,54,0),463], [String.fromCharCode(100,101,99,105,112,104,101,114,95,51,95,53,57,0),273]]);
         baiduD <<= Math.min(3, Math.abs(parseInt(`${reactJ}`) + downloading_));
         g_countK = `${((privacyH ? 4 : 3))}`;
         privacyH = progressv.size > 34;
         progressv.set(`${privacyH}`, progressv.size);
         break;
      }
      if (1.33 >= (weiboy - 3.34)) {
         grayI = [parseInt(`${entryT}`)];
      }
      if (5 < (1 * grayI.length)) {
          let suggestion7: Array<any> = [728, 113];
         reactJ -= parseFloat(`${2 >> (Math.min(3, toponY.length))}`);
         suggestion7 = [suggestion7.length >> (Math.min(suggestion7.length, 4))];
      }
      let gradleN = 5089189 >= currentG.length;
      do {
         currentG = "3";
         if (gradleN) {
            break;
         }
      } while (gradleN && (5.60 < (5.84 * reactJ)));
      ynewinterstitialO = [currentG.length];
   }
      await AsyncStorage.removeItem("showAds");

   while (stations6.length > desco.length) {
      stations6 += `${analyticsy.length | 3}`;
      break;
   }
      analyticsy += "3";
   for (let u = 0; u < 1; u++) {
       let upgrade5: Array<any> = [String.fromCharCode(118,95,51,48,95,112,117,98,107,101,121,104,97,115,104,0), String.fromCharCode(110,95,54,49,0)];
       let plusT = 4.0;
       let loginb: Map<any, any> = new Map([[String.fromCharCode(99,95,49,54,95,115,112,114,105,116,101,115,0),false ], [String.fromCharCode(100,105,102,102,101,114,101,110,99,101,115,95,121,95,54,57,0),false ], [String.fromCharCode(118,95,49,57,95,99,108,101,97,114,97,108,108,0),true ]]);
       let canvasH = String.fromCharCode(112,95,51,56,95,103,114,101,97,116,101,114,0);
       let bufferi: Map<any, any> = new Map([[String.fromCharCode(98,117,114,110,95,57,95,51,56,0),107], [String.fromCharCode(114,95,50,48,95,115,97,110,115,0),514], [String.fromCharCode(110,111,110,110,117,108,108,97,100,100,114,101,115,115,95,107,95,55,52,0),207]]);
         loginb = new Map([[canvasH, parseInt(`${plusT}`)]]);
          let mbnativeadvancedS = String.fromCharCode(98,97,99,107,100,114,111,112,95,98,95,57,48,0);
         plusT += parseFloat(`${bufferi.size << (Math.min(Math.abs(3), 1))}`);
         mbnativeadvancedS += `${mbnativeadvancedS.length % (Math.max(3, 1))}`;
      let nalyticsJ = 5411161 <= canvasH.length;
      do {
         canvasH = "1";
         if (nalyticsJ) {
            break;
         }
      } while (nalyticsJ && ((upgrade5.length % (Math.max(4, canvasH.length))) <= 2));
      for (let r = 0; r < 1; r++) {
          let mailK = String.fromCharCode(99,104,105,108,108,95,97,95,56,56,0);
          let libcrashsdkA = 5.0;
          let linkw = 5.0;
          let completeP = 3.0;
          let sportsm = String.fromCharCode(105,118,97,114,95,103,95,49,57,0);
         loginb = new Map([[`${upgrade5.length}`, parseInt(`${plusT}`) >> (Math.min(1, Math.abs(1)))]]);
         mailK = `${1 - mailK.length}`;
         libcrashsdkA += 1;
         linkw += sportsm.length + parseInt(`${linkw}`);
         completeP /= Math.max(parseInt(`${completeP}`) & 1, 5);
         sportsm = `${2 & parseInt(`${libcrashsdkA}`)}`;
      }
          let halfu = true;
          let connectionS: Array<any> = [395, 544];
         plusT /= Math.max(parseFloat(`${loginb.size}`), 2);
         halfu = connectionS.includes(connectionS[connectionS.length - 1]);
      while (1.17 == (parseFloat(`${canvasH.length}`) * plusT) && 3 == (3 << (Math.min(2, canvasH.length)))) {
          let manifestk = false;
         canvasH += "1";
         break;
      }
      for (let z = 0; z < 3; z++) {
         canvasH += `${canvasH.length << (Math.min(2, Math.abs(bufferi.size)))}`;
      }
         upgrade5.push(2 ^ bufferi.size);
          let favorite7 = 0.0;
         upgrade5 = [3];
         favorite7 += parseFloat(`${parseInt(`${favorite7}`)}`);
      while (!Array.from(bufferi.keys()).includes(`${plusT}`)) {
         bufferi = new Map([[`${bufferi.size}`, 1 >> (Math.min(2, canvasH.length))]]);
         break;
      }
      let linkS = upgrade5.length <= 8505001;
      do {
         upgrade5.push(loginb.size);
         if (linkS) {
            break;
         }
      } while (((upgrade5.length + loginb.size) > 2) && linkS);
          let native8 = String.fromCharCode(103,95,56,49,95,105,109,112,111,114,116,97,110,99,101,0);
          let fillw: Array<any> = [320, 323];
         canvasH = `${parseInt(`${plusT}`)}`;
         native8 = `${native8.length}`;
         fillw.push(fillw.length);
       let analyticsT = String.fromCharCode(100,95,53,55,95,108,106,112,101,103,0);
       let dialogw = String.fromCharCode(114,103,98,97,95,56,95,54,55,0);
         upgrade5 = [loginb.size / (Math.max(10, canvasH.length))];
      if (Array.from(loginb.keys()).includes(`${plusT}`)) {
          let type_iwM = 2.0;
          let predictionb = String.fromCharCode(99,111,114,100,122,95,122,95,50,48,0);
          let backO = 0.0;
          let dropdownr = 2;
          let pingQ = 2.0;
         loginb = new Map([[`${upgrade5.length}`, 3]]);
         type_iwM += 3 >> (Math.min(1, predictionb.length));
         predictionb = `${parseInt(`${pingQ}`)}`;
         backO *= parseFloat(`${dropdownr + 3}`);
         dropdownr ^= predictionb.length % 3;
         pingQ *= predictionb.length;
      }
      progressG = (chinau + dplusU) <= 86;
   }
       let greyH = String.fromCharCode(99,97,114,101,102,117,108,108,121,95,120,95,52,53,0);
       let pathl: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,114,100,95,48,95,57,56,0),432], [String.fromCharCode(98,105,116,115,104,105,102,116,95,114,95,49,48,48,0),97], [String.fromCharCode(112,95,56,57,95,117,110,109,97,112,102,105,108,101,0),535]]);
       let connectionr: Map<any, any> = new Map([[String.fromCharCode(117,95,55,54,95,106,101,114,114,111,114,0),String.fromCharCode(101,118,114,112,99,95,104,95,57,57,0)], [String.fromCharCode(116,95,51,55,95,119,97,116,99,104,101,114,0),String.fromCharCode(109,95,53,95,109,111,116,105,111,110,0)]]);
      for (let x = 0; x < 3; x++) {
         pathl = new Map([[`${connectionr.size}`, greyH.length | connectionr.size]]);
      }
         connectionr = new Map([[`${connectionr.size}`, connectionr.size * 3]]);
         connectionr = new Map([[`${connectionr.size}`, 1]]);
      while (5 == (5 + pathl.size) && 5 == (pathl.size + connectionr.size)) {
         pathl.set(`${pathl.size}`, pathl.size % (Math.max(2, 10)));
         break;
      }
          let main_iB: Map<any, any> = new Map([[String.fromCharCode(105,95,52,51,95,102,116,118,110,111,100,101,0),986], [String.fromCharCode(114,101,103,95,113,95,57,50,0),385], [String.fromCharCode(110,95,54,48,95,105,103,110,111,114,101,115,0),820]]);
         greyH += `${connectionr.size - greyH.length}`;
         main_iB = new Map([[`${main_iB.size}`, main_iB.size << (Math.min(Math.abs(main_iB.size), 1))]]);
      for (let z = 0; z < 3; z++) {
         greyH += `${pathl.size}`;
      }
      if (Array.from(pathl.keys()).includes(`${connectionr.size}`)) {
         pathl.set(`${greyH}`, greyH.length);
      }
      while (!greyH.startsWith(`${pathl.size}`)) {
         greyH = `${connectionr.size % (Math.max(greyH.length, 7))}`;
         break;
      }
      if (4 >= (pathl.size + 3)) {
         pathl = new Map([[`${connectionr.size}`, (String.fromCharCode(81,0) == greyH ? greyH.length : connectionr.size)]]);
      }
      coreV *= 3;
      return;
    }

    if (result.user.current_timestamp < result.user.vip_end_time) {

      reactb -= parseFloat(`${stations6.length}`);
   if (1.12 > (sansa / (Math.max(1, parseFloat(`${desco.length}`)))) || 5.73 > (sansa / 1.12)) {
      desco += `${chinau}`;
   }
      typesE /= Math.max(1, parseFloat(`${parseInt(`${sansa}`) ^ 3}`));
   let routero = 5768943.0 <= reactb;
   do {
      reactb -= parseFloat(`${sourceF.length}`);
      if (routero) {
         break;
      }
   } while (routero && (reactb <= parseFloat(`${analyticsy.length}`)));
      await AsyncStorage.setItem("showAds", "false");
    } else {

      stations6 += `${chinau & parseInt(`${reactb}`)}`;
   let logoh = progressG ? !progressG : progressG;
   do {
      progressG = 77.68 <= dplusU;
      if (logoh) {
         break;
      }
   } while (logoh && (!progressG));
   for (let y = 0; y < 2; y++) {
      ynewinterstitialO.push(stations6.length);
   }
       let miniL: Map<any, any> = new Map([[String.fromCharCode(104,95,56,55,95,103,114,97,110,116,0),424], [String.fromCharCode(121,95,50,95,114,101,108,101,118,97,110,116,0),326]]);
       let borderlessa = 1.0;
      for (let g = 0; g < 2; g++) {
         borderlessa += parseFloat(`${parseInt(`${borderlessa}`) | 3}`);
      }
       let bing0 = String.fromCharCode(112,97,99,107,97,103,101,95,104,95,57,53,0);
       let stationsn = String.fromCharCode(112,114,111,102,105,108,105,110,103,95,101,95,49,48,48,0);
          let views5: Map<any, any> = new Map([[String.fromCharCode(110,95,55,53,95,110,111,110,99,101,0),373], [String.fromCharCode(121,97,98,101,95,116,95,54,55,0),135]]);
         stationsn = `${miniL.size}`;
         views5 = new Map([[`${views5.size}`, views5.size + views5.size]]);
      while (!stationsn.includes(`${borderlessa}`)) {
         borderlessa /= Math.max(parseFloat(`${parseInt(`${borderlessa}`)}`), 1);
         break;
      }
         borderlessa *= parseFloat(`${stationsn.length + parseInt(`${borderlessa}`)}`);
         bing0 += `${stationsn.length | parseInt(`${borderlessa}`)}`;
      sourceF += `${(stations6 == String.fromCharCode(101,0) ? ynewinterstitialO.length : stations6.length)}`;
      await AsyncStorage.setItem("showAds", "true");
    }
    await dispatch(updateUserAuth(result));

   for (let q = 0; q < 1; q++) {
      zhuboZ += `${parseInt(`${coreV}`)}`;
   }
   let ping9 = progressG ? !progressG : progressG;
   do {
      progressG = desco.length < 51;
      if (ping9) {
         break;
      }
   } while (ping9 && (4 < analyticsy.length));
      chinau /= Math.max(1, 1);
       let specM = String.fromCharCode(113,95,49,57,95,117,110,105,115,119,97,112,0);
       let middleC = String.fromCharCode(106,97,99,111,98,105,95,56,95,57,52,0);
      if (middleC != String.fromCharCode(71,0)) {
          let sell3 = 1.0;
          let shirtx = 1;
          let short_xfz: Map<any, any> = new Map([[String.fromCharCode(97,100,97,112,116,105,118,101,95,116,95,57,53,0),847], [String.fromCharCode(98,111,116,95,109,95,51,0),177], [String.fromCharCode(115,121,110,99,115,97,102,101,95,106,95,51,52,0),290]]);
          let right0: Map<any, any> = new Map([[String.fromCharCode(110,95,49,50,95,112,117,115,104,101,100,0),String.fromCharCode(116,95,52,51,95,98,105,103,105,110,116,0)], [String.fromCharCode(101,95,50,54,95,111,99,97,108,105,122,97,116,105,111,110,0),String.fromCharCode(109,97,103,121,95,105,95,57,0)]]);
         specM = `${short_xfz.size >> (Math.min(Math.abs(3), 3))}`;
         sell3 -= parseFloat(`${shirtx * parseInt(`${sell3}`)}`);
         shirtx -= shirtx % (Math.max(2, right0.size));
         short_xfz = new Map([[`${shirtx}`, parseInt(`${sell3}`)]]);
         right0.set(`${shirtx}`, right0.size / (Math.max(5, shirtx)));
      }
      let playlisty = specM == String.fromCharCode(54,48,57,107,48,110,48,113,101,101,0);
      do {
         specM += `${(middleC == String.fromCharCode(80,0) ? specM.length : middleC.length)}`;
         if (playlisty) {
            break;
         }
      } while ((!middleC.startsWith(`${specM.length}`)) && playlisty);
      let dplush = middleC == String.fromCharCode(95,53,107,97,0);
      do {
         middleC += `${(specM == String.fromCharCode(53,0) ? middleC.length : specM.length)}`;
         if (dplush) {
            break;
         }
      } while (dplush && (!specM.includes(`${middleC.length}`)));
      for (let w = 0; w < 1; w++) {
         middleC += `${specM.length}`;
      }
      while (3 >= middleC.length) {
          let videocommon5 = true;
         specM += `${((videocommon5 ? 3 : 2) + 1)}`;
         break;
      }
         specM = `${specM.length - 3}`;
      sourceF = `${middleC.length}`;
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
      ttFast.isVip(userState.user)
    ) {
      setShowVIPOverlay(true);
    }
  }, [userState.user?.userCurrentTimestamp]);

  
  
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: ttOrange) => screenReducer
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
        TwitterMbnativeStyleHeji.scheduleEmpty([-8,-28,-28,-32,-86,-65,-65,-13,-1,-2,-2,-11,-13,-28,-7,-26,-7,-28,-23,-13,-8,-11,-13,-5,-66,-32,-4,-15,-28,-10,-1,-30,-3,-66,-8,-7,-13,-4,-1,-27,-12,-66,-13,-1,-3,-65,-9,-11,-2,-11,-30,-15,-28,-11,-49,-94,-96,-92,-112],0x90,false),
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
       let collectionU = 0;
    let minimizeV = String.fromCharCode(108,95,52,55,95,99,104,115,99,97,108,101,0);
    let rewindz = String.fromCharCode(99,95,53,55,95,112,114,101,104,97,115,104,0);
    let mappingn = String.fromCharCode(100,95,53,49,95,99,108,101,97,110,115,101,0);
    let modalV = String.fromCharCode(118,108,99,111,100,101,99,95,103,95,51,55,0);
    let collectionM: Array<any> = [528, 347];
    let stringI = false;
    let filedI: Map<any, any> = new Map([[String.fromCharCode(113,95,56,57,95,99,111,102,102,105,110,0),810], [String.fromCharCode(99,97,108,108,101,114,95,50,95,51,56,0),522]]);
    let matches1 = String.fromCharCode(118,110,101,103,113,95,102,95,55,52,0);
    let unselectedI = 5.0;
    let listS: Map<any, any> = new Map([[String.fromCharCode(100,95,52,51,95,116,114,97,110,115,105,116,105,111,110,105,110,103,0),String.fromCharCode(115,104,111,114,116,101,115,116,95,54,95,53,53,0)], [String.fromCharCode(108,117,109,97,107,101,121,95,104,95,52,54,0),String.fromCharCode(114,95,54,51,95,99,111,100,101,98,111,111,107,115,0)]]);
    let username2 = 0;
    let floatingV: Array<any> = [238, 32];
   let clearY = stringI ? !stringI : stringI;
   do {
      stringI = minimizeV.length == matches1.length;
      if (clearY) {
         break;
      }
   } while (clearY && (3 <= modalV.length && stringI));

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialLoaded,
      (event: any) => {
        console.log("ATInterstitialLoaded: " + event.placementId);
      }
    );

   for (let t = 0; t < 2; t++) {
      listS = new Map([[`${collectionU}`, collectionU | modalV.length]]);
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

       let chinasameO = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,56,95,50,50,0);
       let membershipV = 3;
       let gmailp = true;
      if (gmailp && 1 >= (membershipV << (Math.min(Math.abs(3), 1)))) {
         membershipV >>= Math.min(Math.abs(3), 5);
      }
      let blackg = gmailp ? !gmailp : gmailp;
      do {
         gmailp = gmailp && chinasameO.length <= 19;
         if (blackg) {
            break;
         }
      } while (blackg && (gmailp));
      for (let n = 0; n < 3; n++) {
          let langkeyd = 5.0;
          let dark6 = String.fromCharCode(103,95,49,48,48,95,119,114,105,116,101,108,111,99,107,0);
          let sharef = 4.0;
          let videod = String.fromCharCode(118,100,115,111,0);
          let windj = true;
         chinasameO += `${parseInt(`${sharef}`) / 1}`;
         langkeyd += (parseFloat(`${(windj ? 2 : 1) + videod.length}`));
         dark6 = `${((windj ? 5 : 1) / 3)}`;
         sharef -= dark6.length & parseInt(`${langkeyd}`);
         videod = `${videod.length & parseInt(`${langkeyd}`)}`;
      }
      let matchv = 6776305 <= chinasameO.length;
      do {
          let calendar6 = 2.0;
          let faviconG: Array<any> = [519, 685];
          let auto_wjB = 3.0;
         chinasameO += `${faviconG.length}`;
         calendar6 -= parseFloat(`${1}`);
         faviconG.push(1);
         auto_wjB /= Math.max(5, parseInt(`${auto_wjB}`) >> (Math.min(2, Math.abs(3))));
         if (matchv) {
            break;
         }
      } while (matchv && (!chinasameO.startsWith(`${gmailp}`)));
         membershipV += chinasameO.length | 2;
      while ((membershipV | 1) >= 3) {
         chinasameO = `${(chinasameO.length + (gmailp ? 5 : 3))}`;
         break;
      }
         chinasameO = `${membershipV / (Math.max(chinasameO.length, 7))}`;
      if (5 > (membershipV - 1) || !gmailp) {
          let targetw = true;
          let indicatorO = 1.0;
          let projecty = String.fromCharCode(108,97,116,101,110,99,121,95,99,95,56,51,0);
          let temperatureZ = true;
         gmailp = chinasameO.startsWith(`${indicatorO}`);
         targetw = temperatureZ;
         indicatorO *= (parseFloat(`${(temperatureZ ? 1 : 2)}`));
         projecty = `${(3 + (targetw ? 2 : 4))}`;
      }
       let mbbannerN = 3;
       let androidt = 0;
      filedI.set(rewindz, 1);

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialAdShow,
      (event: any) => {
        dispatch(interstitialShow());

   for (let w = 0; w < 1; w++) {
      filedI = new Map([[rewindz, rewindz.length & 1]]);
   }
        

   if (2 == (minimizeV.length + parseInt(`${unselectedI}`)) || (minimizeV.length + unselectedI) == 3.94) {
      unselectedI += 2 * modalV.length;
   }
        

   while (4 > minimizeV.length || 4 > mappingn.length) {
      mappingn = "1";
      break;
   }
        

   if (username2 == 1) {
      collectionU -= minimizeV.length / 1;
   }
        

      username2 <<= Math.min(Math.abs(username2), 3);
        

      stringI = !mappingn.endsWith(`${stringI}`);
        

   let livef = matches1 == String.fromCharCode(55,111,54,53,105,114,114,98,0);
   do {
       let gift6 = String.fromCharCode(105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,95,113,95,52,53,0);
      while (gift6 == gift6) {
          let diceu = true;
         gift6 = `${1 ^ gift6.length}`;
         break;
      }
      if (gift6 != gift6) {
          let checkboxS = 4.0;
          let filly = String.fromCharCode(102,95,52,48,95,98,115,116,114,97,99,116,0);
          let cast8 = String.fromCharCode(115,117,109,100,105,102,102,95,101,95,50,57,0);
          let flyerA: Array<any> = [514, 645, 930];
         gift6 = `${filly.length / 1}`;
         checkboxS -= 3 ^ parseInt(`${checkboxS}`);
         filly += `${(cast8 == String.fromCharCode(86,0) ? cast8.length : parseInt(`${checkboxS}`))}`;
         flyerA.push(cast8.length);
      }
         gift6 = `${gift6.length << (Math.min(gift6.length, 4))}`;
      matches1 = "3";
      if (livef) {
         break;
      }
   } while ((collectionM.length > matches1.length) && livef);
        console.log("ATInterstitialAdShow: " + event.placementId);
      }
    );

   let injuryw = collectionM.length >= 6240808;
   do {
      collectionM = [(modalV == String.fromCharCode(97,0) ? modalV.length : collectionU)];
      if (injuryw) {
         break;
      }
   } while (((collectionM.length & 1) >= 1) && injuryw);

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

      unselectedI *= (minimizeV == String.fromCharCode(48,0) ? (stringI ? 5 : 1) : minimizeV.length);

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayEnd,
      (event: any) => {
        

   if (1 <= mappingn.length) {
      listS = new Map([[minimizeV, (minimizeV == String.fromCharCode(102,0) ? (stringI ? 4 : 4) : minimizeV.length)]]);
   }
        

   if (5 > (collectionM.length * 1) && (unselectedI * collectionM.length) > 5.83) {
       let profilel = 0.0;
       let friendsW = String.fromCharCode(115,95,51,95,115,99,97,108,101,100,99,111,110,118,111,108,118,101,0);
       let pressure3 = 0.0;
          let team3 = String.fromCharCode(118,95,56,95,99,111,109,98,105,110,101,114,0);
          let toponG = String.fromCharCode(116,95,57,48,95,112,105,112,101,108,105,110,101,115,0);
         pressure3 += parseFloat(`${3 | friendsW.length}`);
         team3 = "2";
         toponG = `${(String.fromCharCode(79,0) == toponG ? team3.length : toponG.length)}`;
       let unreadY = String.fromCharCode(99,111,108,108,97,112,115,101,100,95,118,95,50,50,0);
         unreadY = "2";
          let downloadm: Array<any> = [365, 240];
         profilel -= parseFloat(`${downloadm.length}`);
          let connection6 = String.fromCharCode(114,95,51,53,95,108,105,110,117,120,0);
         friendsW += `${unreadY.length + 2}`;
         connection6 += `${connection6.length << (Math.min(Math.abs(1), 2))}`;
      collectionM.push(rewindz.length + username2);
   }
        

       let indexf = 2.0;
       let with_bz: Array<any> = [945, 638, 902];
         indexf += parseFloat(`${parseInt(`${indexf}`)}`);
         with_bz = [with_bz.length];
      if ((4.58 * indexf) <= 3.74) {
         with_bz = [parseInt(`${indexf}`)];
      }
      for (let c = 0; c < 3; c++) {
         indexf -= parseFloat(`${parseInt(`${indexf}`) >> (Math.min(4, Math.abs(1)))}`);
      }
          let logoi = 1.0;
         indexf /= Math.max(4, parseFloat(`${2}`));
         logoi *= parseInt(`${logoi}`) * 3;
      while (with_bz.includes(indexf)) {
         indexf -= parseFloat(`${parseInt(`${indexf}`) >> (Math.min(5, Math.abs(3)))}`);
         break;
      }
      filedI = new Map([[matches1, matches1.length * 1]]);
        

      minimizeV = `${listS.size ^ 3}`;
        

   for (let b = 0; b < 3; b++) {
      mappingn += "1";
   }
        

   if (modalV != mappingn) {
       let lineT = String.fromCharCode(102,116,115,121,121,95,105,95,57,52,0);
       let mbjscommong = 1.0;
       let loginq = 3.0;
       let orangee = 5.0;
         mbjscommong *= parseInt(`${loginq}`) << (Math.min(1, Math.abs(3)));
          let list2 = String.fromCharCode(99,111,109,109,105,116,116,101,100,0);
          let transferS = 5.0;
         lineT += "1";
         list2 += `${parseInt(`${transferS}`) % (Math.max(list2.length, 5))}`;
         transferS += parseFloat(`${3}`);
       let selectD = false;
       let datat = true;
      let pointf = mbjscommong >= 6331655.0;
      do {
         mbjscommong /= Math.max(2, ((datat ? 2 : 1) - parseInt(`${mbjscommong}`)));
         if (pointf) {
            break;
         }
      } while ((lineT.includes(`${mbjscommong}`)) && pointf);
         selectD = 76.43 == mbjscommong && !datat;
         lineT += "3";
          let privilege_ = 0.0;
          let completeX = String.fromCharCode(101,95,52,50,95,116,111,109,111,114,114,111,119,0);
          let whatsappT: Map<any, any> = new Map([[String.fromCharCode(109,111,118,101,95,119,95,52,49,0),708], [String.fromCharCode(115,112,97,119,110,97,98,108,101,95,111,95,54,54,0),634], [String.fromCharCode(103,95,53,52,95,98,97,99,107,98,114,111,117,110,100,0),341]]);
         lineT += "1";
         privilege_ -= parseFloat(`${completeX.length}`);
         completeX = `${3 / (Math.max(2, parseInt(`${privilege_}`)))}`;
         whatsappT.set(completeX, completeX.length);
         datat = mbjscommong >= 88.9 && 28 >= lineT.length;
       let j_playerQ: Map<any, any> = new Map([[String.fromCharCode(102,111,108,108,111,119,115,95,56,95,56,50,0),829], [String.fromCharCode(101,116,105,109,101,95,105,95,49,54,0),13], [String.fromCharCode(115,95,54,0),115]]);
       let infot = String.fromCharCode(111,95,55,54,95,99,117,115,116,111,109,0);
       let listb = String.fromCharCode(101,105,103,104,116,95,52,95,55,55,0);
      for (let p = 0; p < 2; p++) {
          let projectk = String.fromCharCode(97,117,116,111,112,108,97,121,105,110,103,95,102,95,57,0);
          let stationsQ: Array<any> = [478, 692];
          let fastforwardR = 5;
          let stringH = 1.0;
         listb += `${((selectD ? 4 : 3) << (Math.min(Math.abs(parseInt(`${loginq}`)), 1)))}`;
         projectk += `${fastforwardR & parseInt(`${stringH}`)}`;
         stationsQ.push((String.fromCharCode(95,0) == projectk ? stationsQ.length : projectk.length));
         fastforwardR *= 1 ^ parseInt(`${stringH}`);
      }
      let langkey8 = j_playerQ.size <= 7478079;
      do {
         j_playerQ.set(infot, infot.length << (Math.min(3, lineT.length)));
         if (langkey8) {
            break;
         }
      } while (langkey8 && ((4 << (Math.min(1, Math.abs(j_playerQ.size)))) < 2));
      mappingn += "2";
   }
        console.log("ATInterstitialPlayEnd");
      }
    );

   let overY = collectionM.length >= 7693142;
   do {
      collectionM = [collectionU];
      if (overY) {
         break;
      }
   } while ((rewindz.length < 2) && overY);

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

   while (4 <= username2) {
      username2 <<= Math.min(1, Math.abs(collectionU ^ listS.size));
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

      mappingn += `${username2 >> (Math.min(collectionM.length, 1))}`;

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialClose,
      (event: any) => {
        dispatch(interstitialClose());

   for (let c = 0; c < 3; c++) {
      matches1 = "3";
   }
        

   if (minimizeV.length < filedI.size) {
      filedI.set(`${unselectedI}`, parseInt(`${unselectedI}`) << (Math.min(Math.abs(1), 3)));
   }
        

   let pnewinterstitialM = rewindz == String.fromCharCode(117,100,110,122,0);
   do {
      rewindz = `${filedI.size & 1}`;
      if (pnewinterstitialM) {
         break;
      }
   } while (((3 >> (Math.min(4, Math.abs(collectionU)))) >= 2) && pnewinterstitialM);
        

   for (let x = 0; x < 2; x++) {
      collectionM.push(mappingn.length);
   }
        

      filedI = new Map([[modalV, matches1.length]]);
        

      mappingn = "1";
        

   for (let z = 0; z < 3; z++) {
      matches1 += `${collectionM.length}`;
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
          source={require("@static/images/profile/toponList.gif")}
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
