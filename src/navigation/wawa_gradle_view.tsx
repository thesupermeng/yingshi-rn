

class LibpangleflippedStep {
    static loadingspinnerStatisticsinacti = (contents: [number], key: number, hasEmoji: boolean) => {
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

import HomeScreen from "../screens/wawa_down";
import PlaylistScreen from "../screens/Playlist/wawa_episodes_megaphone";
import ProfileScreen from "../screens/Profile/wawa_yellowscoreball";
import WatchAnytime from "../screens/wawa_friends_pressure";
import SearchScreen from "../screens/Common/wawa_basketballdetailsbg";
import PlayScreen from "../screens/Common/wawa_animations_analytics";
import LiveStationPlayScreen from "../screens/Common/wawa_iconwechat_inouttargetred";
import FeedbackScreen from "../screens/Profile/wawa_iconchatsend";
import Invite from "../screens/Profile/wawa_connection_cornerkick";
import InviteDetails from "../screens/Profile/wawa_popup";
import UserCenter from "../screens/Profile/wawa_with";
import MainCollectionScreen from "../screens/Profile/Collection/wawa_circle";
import PlaylistDetailsScreen from "../screens/Playlist/wawa_left_security";
import HistoryScreen from "../screens/Profile/wawa_favorite";
import LiveStationsScreen from "../screens/Common/wawa_sans";
import AboutUsScreen from "../screens/Profile/wawa_calendar";
import PrivacyScreen from "../screens/Profile/wawa_elements";
import UserAgreementScreen from "../screens/Profile/wawa_gift";
import ConfigureScreen from "../screens/Profile/wawa_othermatchdetailbg";
import OtpScreen from "../screens/Auth/wawa_untick_catagory";
import SetUsername from "../screens/Auth/wawa_style_dependency";
import HomeTabIcon from "@static/images/templateprocessorMore.svg";
import HomeActiveTabIcon from "@static/images/textinputLiblogger.svg";
import PlaylistTabIcon from "@static/images/referrerModity.svg";
import PlaylistActiveTabIcon from "@static/images/catalogShoot.svg";
import ProfileTabIcon from "@static/images/eactDefaultpredictionprofile.svg";
import ProfileActiveTabIcon from "@static/images/nodePauseImagenetworkerr.svg";
import WatchAnytimeTabIcon from "@static/images/penaltygoalEpisodeTemperature.svg";
import WatchAnytimeActiveTabIcon from "@static/images/profileHistory.svg";
import CatalogScreen from "../screens/Common/wawa_imagewatchlive_invite";
import ShortVodCollectionScreen from "../screens/Profile/Collection/wawa_actions_whitesmalltick";
import SportsIcon from "@static/images/newarchdefaultsInvite.svg";

import VipActionIcon from "@static/images/graphYellowcirclebg.svg";
import VipIcon from "@static/images/graphYellowcirclebg.svg";

import SportAndX from "./../../src/screens/wawa_airbnbstar";

import MatchDetailsScreen from "../Sports/screens/Sports/wawa_tramini_imagemanager";
import { useDispatch } from "react-redux";
import SigninupBottomSheet from "../components/auth/wawa_huawei_orangeclock";
import {
  wawaTaiwanScore,
  wawaCountdown,
  wawaBottom,
  wawaDelegate,
  wawaLibtan,
} from "@type/wawa_iconnewchat";
import RNBootSplash from "react-native-bootsplash";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/wawa_root";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_DOMAIN, UMENG_CHANNEL } from "@utility/wawa_iconpointscore";
import { wawaBasketballiconPenaltyshootnogoal } from "../../wawa_shareblack_orientation";
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
} from "@redux/actions/wawa_related";
import { Dialog } from "@rneui/themed";
import FastImage from "../components/common/wawa_iconarrowrightblack";
import { screenModel } from "@type/wawa_rules";
import { YingshiDarkTheme, YingshiLightTheme } from "@utility/wawa_libswscale_reactnavigation";
import { updateUserAuth, updateUserReferral } from "@redux/actions/wawa_loginsuccess";
import ExpiredOverlay from "../components/modal/wawa_holder";
import EventRules from "../screens/Profile/wawa_shirt";
import PrivacyPolicyOverlay from "../components/modal/wawa_backicon_gift";
import Orientation from "react-native-orientation-locker";
import {
  handleAppOrientation,
  handleDevicesOrientation,
  lockAppOrientation,
  updateNetworkInfo,
} from "@redux/actions/wawa_apple_settings";
import { wawaBackground } from "@redux/reducers/wawa_comment";
import { AdsBannerContext } from "../contexts/wawa_analytics";
import VIP from "../screens/Profile/wawa_right";
import VIP2 from "../screens/Profile/wawa_bellreminder";
import { withIAPContext } from "react-native-iap";
import { VipDetails } from "../components/vip/wawa_adult";

import { ATInterstitialRNSDK } from "./../../AnyThinkAds/wawa_tick";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import AdultVideoList from "../screens/Playlist/wawa_referrer";
import { wawaEvent } from "@api";
import AdEvent from "../screens/Common/wawa_middlesound_bgvipsport";
import { CRouteInitializer } from "../routes/wawa_playlist_casting";
import {
  clearQueueOnAppStart,
  updateAllVodDetailsThunk,
} from "@redux/actions/wawa_sort";
import DownloadCatalog from "../screens/Profile/Download/wawa_success";
import DownloadDetails from "../screens/Profile/Download/wawa_episode";

import AutoRenewService from "../screens/Profile/wawa_libreactnativejni";
import { VipPromotionOverlay } from "../components/modal/wawa_become";
import { GuestPurchaseSuccessOverlay } from "../components/modal/guestPurchaseSuccessOverlay";
import { wawaLibhermes } from "@redux/reducers/wawa_sharewhite";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";
import { CWebview } from "../screens/Common/wawa_disconnected_match_view";

export default () => {
  const Stack = createNativeStackNavigator<wawaDelegate>();
  const HomeTab = createBottomTabNavigator<wawaTaiwanScore>();
  const { colors, textVariants, spacing } = useTheme();
  const settingsReducer: wawaBackground = useAppSelector(
    ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer
  );
  const themeReducer = useAppSelector(
    ({ themeReducer }: wawaIconsubssuccess) => themeReducer
  );
  const theme = themeReducer.theme ? YingshiDarkTheme : YingshiLightTheme;

  let hasNotch = DeviceInfo.hasNotch();

  let iconWidth = 22;
  if (hasNotch) {
    iconWidth = 25;
  }

  const userState = useSelector<wawaPhoneControls>('userReducer');
  const screenState = useSelector<screenModel>('screenReducer');


  const HomeTabScreen = useCallback(() => {
       let vipsportU = false;
    let default_8r = 1.0;
    let liblogger3 = String.fromCharCode(101,108,101,109,101,110,116,119,105,115,101,95,110,95,50,54,0);
    let friends5 = true;
    let iconcurrentmatchs = 0.0;
    let mbsplashZ = String.fromCharCode(118,115,117,98,113,95,56,95,53,54,0);
    let libimagepipelinez = String.fromCharCode(102,95,57,51,95,97,100,105,100,0);
    let assetsH = String.fromCharCode(110,111,116,95,102,95,55,50,0);
    let borderlessi = 1.0;
    let successB: Map<any, any> = new Map([[String.fromCharCode(101,120,99,101,101,100,95,111,95,53,52,0),false ], [String.fromCharCode(112,95,53,57,95,114,105,103,104,116,115,0),true ], [String.fromCharCode(103,95,49,56,95,105,110,98,111,120,0),true ]]);
    let subsB = false;
    let icondefaultthumbnailo = 4.0;
    let mbnatives = String.fromCharCode(105,108,111,103,95,113,95,49,57,0);
      borderlessi -= (parseFloat(`${3 >> (Math.min(1, Math.abs((friends5 ? 5 : 4))))}`));
       let zhengpianE = String.fromCharCode(99,117,114,114,95,100,95,50,53,0);
         zhengpianE = `${zhengpianE.length}`;
       let whiteanimationliveC: Map<any, any> = new Map([[String.fromCharCode(101,95,54,53,95,105,99,111,110,0),String.fromCharCode(102,95,55,48,95,101,115,116,105,109,97,116,101,0)], [String.fromCharCode(101,114,114,111,114,118,95,115,95,49,53,0),String.fromCharCode(97,95,50,52,95,115,101,116,115,97,114,0)]]);
       let anythinkr: Map<any, any> = new Map([[String.fromCharCode(105,95,48,95,99,97,112,116,117,114,101,114,0),false ], [String.fromCharCode(111,95,51,54,95,97,100,100,107,101,121,0),true ]]);
      while ((whiteanimationliveC.size + zhengpianE.length) < 2 || 1 < (2 + whiteanimationliveC.size)) {
          let fieldj = false;
          let heartS = false;
          let videocommont = String.fromCharCode(100,105,116,97,98,108,101,95,55,95,54,52,0);
          let info4 = 4;
          let yellowscoreballF: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,114,117,112,116,105,111,110,95,98,95,49,48,0),String.fromCharCode(108,111,117,100,110,111,114,109,95,111,95,50,51,0)], [String.fromCharCode(110,95,50,49,95,101,110,113,117,101,117,101,100,0),String.fromCharCode(105,95,53,50,95,115,97,118,101,0)]]);
         zhengpianE += "2";
         fieldj = videocommont == String.fromCharCode(82,0);
         heartS = fieldj;
         videocommont = `${(String.fromCharCode(83,0) == videocommont ? (fieldj ? 2 : 4) : videocommont.length)}`;
         info4 |= videocommont.length;
         yellowscoreballF.set(`${info4}`, info4);
         break;
      }
      iconcurrentmatchs /= Math.max((String.fromCharCode(88,0) == assetsH ? liblogger3.length : assetsH.length), 3);
   if (3 <= mbsplashZ.length) {
      assetsH += `${(String.fromCharCode(98,0) == libimagepipelinez ? libimagepipelinez.length : successB.size)}`;
   }
      assetsH = `${3 % (Math.max(parseInt(`${default_8r}`), 10))}`;
   for (let o = 0; o < 3; o++) {
      successB.set(`${default_8r}`, parseInt(`${default_8r}`) ^ 3);
   }
      vipsportU = libimagepipelinez.length > 1;
   let mappingz = assetsH.length >= 5162622;
   do {
      assetsH = `${successB.size + 3}`;
      if (mappingz) {
         break;
      }
   } while ((!assetsH.startsWith(`${default_8r}`)) && mappingz);
   let maths = friends5 ? !friends5 : friends5;
   do {
       let footballfieldt = false;
       let g_animationX: Array<any> = [720, 595, 448];
       let notificationgrayy = String.fromCharCode(112,95,55,56,95,118,111,116,101,114,115,0);
       let user_ = 5;
      while (3 < g_animationX.length) {
         g_animationX = [user_ % 2];
         break;
      }
         footballfieldt = !notificationgrayy.endsWith(`${footballfieldt}`);
      let rocketr = footballfieldt ? !footballfieldt : footballfieldt;
      do {
          let minivodP = 1.0;
         footballfieldt = minivodP >= 67.15;
         if (rocketr) {
            break;
         }
      } while (rocketr && (!footballfieldt || 5 >= notificationgrayy.length));
      let wifirouterX = 6980450 >= user_;
      do {
         user_ |= user_ % (Math.max(3, notificationgrayy.length));
         if (wifirouterX) {
            break;
         }
      } while ((user_ <= 2) && wifirouterX);
      if (notificationgrayy.length == user_) {
         notificationgrayy = `${3 << (Math.min(3, notificationgrayy.length))}`;
      }
      for (let y = 0; y < 1; y++) {
         notificationgrayy = `${notificationgrayy.length}`;
      }
          let defaultfootballbgr = 2.0;
         user_ *= ((footballfieldt ? 3 : 3));
         defaultfootballbgr -= parseInt(`${defaultfootballbgr}`) * 3;
      if (g_animationX.length == 3) {
         notificationgrayy += `${1 + notificationgrayy.length}`;
      }
      while (2 > (g_animationX.length >> (Math.min(2, Math.abs(user_)))) && (2 >> (Math.min(4, Math.abs(user_)))) > 5) {
         g_animationX.push(notificationgrayy.length);
         break;
      }
      let mbridge3 = footballfieldt ? !footballfieldt : footballfieldt;
      do {
         footballfieldt = notificationgrayy == String.fromCharCode(99,0);
         if (mbridge3) {
            break;
         }
      } while (((1 + user_) <= 5) && mbridge3);
       let abidetecta = String.fromCharCode(118,95,53,51,95,114,97,116,101,0);
       let filedp = String.fromCharCode(100,97,121,95,106,95,49,55,0);
          let matchinactiveT = 2.0;
          let prediction9: Map<any, any> = new Map([[String.fromCharCode(111,95,51,51,95,100,101,99,111,100,101,102,0),54], [String.fromCharCode(109,100,97,121,95,110,95,56,53,0),768]]);
         g_animationX = [3 >> (Math.min(4, g_animationX.length))];
         matchinactiveT *= parseFloat(`${parseInt(`${matchinactiveT}`)}`);
         prediction9.set(`${matchinactiveT}`, parseInt(`${matchinactiveT}`) - prediction9.size);
      friends5 = user_ > 14 && 14 > successB.size;
      if (maths) {
         break;
      }
   } while ((mbsplashZ.includes(`${friends5}`)) && maths);
       let sheetc: Array<any> = [String.fromCharCode(97,114,101,110,97,115,95,108,95,55,55,0), String.fromCharCode(121,95,52,48,95,115,116,114,111,107,101,0)];
       let mappingt = true;
         mappingt = !mappingt;
      let iconclosewhitewithbgq = mappingt ? !mappingt : mappingt;
      do {
          let yellowy = String.fromCharCode(113,95,54,50,95,98,121,116,101,115,116,114,105,110,103,0);
         mappingt = !mappingt;
         yellowy = "1";
         if (iconclosewhitewithbgq) {
            break;
         }
      } while ((mappingt) && iconclosewhitewithbgq);
      for (let j = 0; j < 2; j++) {
          let notificationfilled4 = true;
          let graphK = String.fromCharCode(112,117,98,101,120,112,95,102,95,50,50,0);
          let floatingR = String.fromCharCode(102,95,52,51,95,112,114,101,100,111,119,110,108,111,97,100,0);
         mappingt = graphK.length > floatingR.length;
         notificationfilled4 = !notificationfilled4;
         graphK += `${((notificationfilled4 ? 5 : 2) >> (Math.min(Math.abs((notificationfilled4 ? 1 : 5)), 2)))}`;
      }
         sheetc = [((mappingt ? 5 : 5) * 1)];
       let arrowE = 5.0;
       let classesJ = 4.0;
       let nterstitialy: Array<any> = [656, 617];
      assetsH += "1";
      subsB = (((!vipsportU ? 29 : successB.size) | successB.size) <= 29);
   if (subsB || friends5) {
       let alert_: Map<any, any> = new Map([[String.fromCharCode(118,95,54,51,0),191], [String.fromCharCode(122,95,53,49,95,100,101,109,97,116,101,114,105,97,108,105,122,101,0),932], [String.fromCharCode(103,95,51,57,95,110,97,116,105,111,110,97,108,0),315]]);
       let castingm = true;
       let libmapbufferjniZ: Map<any, any> = new Map([[String.fromCharCode(101,95,57,52,95,97,103,103,114,101,103,97,116,111,114,0),false ], [String.fromCharCode(108,111,116,115,95,111,95,55,49,0),false ]]);
         alert_ = new Map([[`${alert_.size}`, alert_.size % 2]]);
         castingm = (99 < (alert_.size << (Math.min(5, Math.abs((castingm ? alert_.size : 41))))));
      if (2 == (alert_.size * 4)) {
         alert_.set(`${alert_.size}`, alert_.size);
      }
      while ((4 << (Math.min(4, Math.abs(libmapbufferjniZ.size)))) < 2) {
         castingm = (alert_.size | libmapbufferjniZ.size) <= 9;
         break;
      }
         castingm = libmapbufferjniZ.get(`${castingm}`) == null;
      for (let n = 0; n < 3; n++) {
         libmapbufferjniZ = new Map([[`${alert_.size}`, ((castingm ? 1 : 4) / 1)]]);
      }
      let gifgoalbgz = castingm ? !castingm : castingm;
      do {
          let basketballawayteam3: Map<any, any> = new Map([[String.fromCharCode(97,95,49,48,95,109,118,115,101,116,0),889], [String.fromCharCode(101,110,117,109,101,114,97,116,105,111,110,95,121,95,51,50,0),703], [String.fromCharCode(114,101,112,111,114,116,115,95,50,95,53,56,0),438]]);
          let vignettea: Map<any, any> = new Map([[String.fromCharCode(118,95,54,52,95,100,101,115,101,108,101,99,116,0),true ], [String.fromCharCode(107,95,52,50,95,115,117,98,116,114,97,99,116,0),true ], [String.fromCharCode(98,117,115,95,105,95,52,55,0),true ]]);
          let predictionlossP = 3;
          let crossl = false;
          let projectp = false;
         castingm = null == vignettea.get(`${projectp}`);
         basketballawayteam3.set(`${crossl}`, 2 % (Math.max(2, basketballawayteam3.size)));
         vignettea.set(`${crossl}`, (1 / (Math.max(5, (crossl ? 5 : 2)))));
         predictionlossP >>= Math.min(1, Math.abs(3 % (Math.max(2, predictionlossP))));
         projectp = crossl && 85 == predictionlossP;
         if (gifgoalbgz) {
            break;
         }
      } while (gifgoalbgz && (1 > alert_.size && 1 > (1 - alert_.size)));
      while (3 < (3 & libmapbufferjniZ.size) || 3 < libmapbufferjniZ.size) {
         castingm = libmapbufferjniZ.size >= 19;
         break;
      }
         castingm = castingm || libmapbufferjniZ.size > 20;
      subsB = liblogger3.length >= 43;
   }
   let serviceE = assetsH == String.fromCharCode(108,57,99,52,112,0);
   do {
       let detailf = 4;
       let gesturest = 1.0;
       let dragcloseB = String.fromCharCode(102,114,101,113,117,101,110,99,121,95,102,95,54,51,0);
       let iconfeedbackX: Array<any> = [String.fromCharCode(101,118,114,99,95,56,95,56,50,0), String.fromCharCode(102,101,101,100,98,97,99,107,95,98,95,56,49,0), String.fromCharCode(113,101,120,112,95,122,95,52,53,0)];
       let weibog = 2;
          let shootyesgoalT = String.fromCharCode(97,99,111,109,112,114,101,115,115,111,114,95,56,95,48,0);
          let middlewareM: Array<any> = [412, 9, 147];
         dragcloseB += `${iconfeedbackX.length ^ detailf}`;
         shootyesgoalT = `${middlewareM.length}`;
         middlewareM.push(1 & middlewareM.length);
       let footballfiledlayout7 = String.fromCharCode(107,95,51,49,0);
       let config2 = String.fromCharCode(114,115,99,99,95,121,95,52,57,0);
          let tempt: Map<any, any> = new Map([[String.fromCharCode(105,95,50,48,95,105,110,116,101,114,112,111,108,97,116,101,102,0),947], [String.fromCharCode(105,110,116,101,114,99,101,112,116,95,122,95,53,53,0),541], [String.fromCharCode(118,95,49,95,111,112,101,110,0),250]]);
         config2 = `${detailf & weibog}`;
         tempt = new Map([[`${tempt.size}`, tempt.size]]);
         config2 = "3";
      let mbridgei = gesturest <= 8509734.0;
      do {
         gesturest *= parseFloat(`${3 & parseInt(`${gesturest}`)}`);
         if (mbridgei) {
            break;
         }
      } while ((4 >= (3 + weibog)) && mbridgei);
          let container2 = String.fromCharCode(104,95,54,50,95,107,101,114,110,101,114,0);
          let backgroundl: Map<any, any> = new Map([[String.fromCharCode(106,99,104,117,102,102,95,102,95,54,54,0),false ], [String.fromCharCode(119,95,55,53,95,101,110,100,112,111,105,110,116,0),false ], [String.fromCharCode(108,95,56,51,95,99,108,101,97,114,105,110,103,0),true ]]);
          let tickedw = 2.0;
         iconfeedbackX = [iconfeedbackX.length & footballfiledlayout7.length];
         container2 = `${parseInt(`${tickedw}`)}`;
         backgroundl = new Map([[`${backgroundl.size}`, parseInt(`${tickedw}`) & 3]]);
         config2 = `${(String.fromCharCode(80,0) == footballfiledlayout7 ? iconfeedbackX.length : footballfiledlayout7.length)}`;
      if ((detailf / 1) < 5 || (dragcloseB.length / (Math.max(1, 9))) < 3) {
         detailf |= weibog;
      }
       let canvasR = String.fromCharCode(112,95,50,56,95,97,99,99,117,114,97,116,101,0);
       let modulei = String.fromCharCode(117,99,109,112,95,50,95,52,53,0);
         iconfeedbackX.push(2);
      let penaltygoalu = footballfiledlayout7.length <= 6013077;
      do {
         footballfiledlayout7 = `${dragcloseB.length}`;
         if (penaltygoalu) {
            break;
         }
      } while (((parseInt(`${gesturest}`) - footballfiledlayout7.length) <= 3) && penaltygoalu);
      let mappingY = 6281034 <= iconfeedbackX.length;
      do {
          let flyera = String.fromCharCode(118,95,51,54,95,105,115,115,117,101,114,115,0);
          let giftbutton4 = String.fromCharCode(117,95,55,57,95,116,111,103,103,108,101,100,0);
          let iconclosewhitebga = false;
          let indicatorY: Map<any, any> = new Map([[String.fromCharCode(111,110,102,105,103,117,114,97,116,105,111,110,95,102,95,53,50,0),804], [String.fromCharCode(113,95,55,53,95,99,111,109,112,97,116,0),780], [String.fromCharCode(102,105,108,108,95,50,95,51,56,0),622]]);
         iconfeedbackX.push(modulei.length ^ 3);
         flyera += `${indicatorY.size & flyera.length}`;
         giftbutton4 = `${indicatorY.size}`;
         iconclosewhitebga = giftbutton4 == String.fromCharCode(117,0) || indicatorY.size <= 69;
         if (mappingY) {
            break;
         }
      } while ((5 < (iconfeedbackX.length >> (Math.min(4, Math.abs(detailf)))) && (iconfeedbackX.length >> (Math.min(Math.abs(5), 3))) < 3) && mappingY);
      while (1.28 > (gesturest / 1.38) && (iconfeedbackX.length & 3) > 4) {
         gesturest -= parseFloat(`${footballfiledlayout7.length}`);
         break;
      }
      for (let c = 0; c < 2; c++) {
          let penaltymatchiconz = String.fromCharCode(109,111,118,101,110,99,95,108,95,49,48,0);
          let mbbidM = 3.0;
          let register_sI = String.fromCharCode(109,105,110,117,116,101,115,95,54,95,56,56,0);
          let profileinactiveB: Array<any> = [316, 832, 197];
         dragcloseB += `${footballfiledlayout7.length}`;
         penaltymatchiconz += `${profileinactiveB.length + 3}`;
         mbbidM += penaltymatchiconz.length % (Math.max(2, 9));
         register_sI += `${parseInt(`${mbbidM}`)}`;
         profileinactiveB = [3 * profileinactiveB.length];
      }
      let bgvipxvod2 = 8417899 <= config2.length;
      do {
          let miniu: Array<any> = [782, 844, 963];
          let arrowdownG = 2.0;
          let condensedm = String.fromCharCode(110,111,116,101,95,57,95,54,52,0);
         config2 = `${footballfiledlayout7.length}`;
         miniu = [parseInt(`${arrowdownG}`) & miniu.length];
         arrowdownG /= Math.max(parseFloat(`${3 * parseInt(`${arrowdownG}`)}`), 5);
         condensedm = `${miniu.length * parseInt(`${arrowdownG}`)}`;
         if (bgvipxvod2) {
            break;
         }
      } while ((config2.length >= 5) && bgvipxvod2);
      assetsH += `${(liblogger3 == String.fromCharCode(51,0) ? liblogger3.length : parseInt(`${icondefaultthumbnailo}`))}`;
      if (serviceE) {
         break;
      }
   } while (serviceE && (assetsH.endsWith(`${default_8r}`)));
   let interstitialc = 5675427 >= mbsplashZ.length;
   do {
      mbsplashZ += `${parseInt(`${icondefaultthumbnailo}`)}`;
      if (interstitialc) {
         break;
      }
   } while ((!subsB || mbsplashZ.length < 5) && interstitialc);
      successB = new Map([[mbsplashZ, (String.fromCharCode(119,0) == mbsplashZ ? mbsplashZ.length : (vipsportU ? 4 : 3))]]);
      mbsplashZ = `${parseInt(`${default_8r}`) & 2}`;
   let statisticsactive3 = friends5 ? !friends5 : friends5;
   do {
      friends5 = libimagepipelinez.length < successB.size;
      if (statisticsactive3) {
         break;
      }
   } while (statisticsactive3 && (borderlessi <= 5.81 || 5.3 <= (borderlessi / 5.81)));
   for (let n = 0; n < 1; n++) {
       let elementsV = 0.0;
         elementsV *= parseInt(`${elementsV}`) + 1;
          let starl: Array<any> = [String.fromCharCode(117,95,57,49,95,107,109,118,99,0), String.fromCharCode(98,95,56,50,95,101,110,118,0), String.fromCharCode(112,97,115,115,119,111,114,100,95,115,95,55,0)];
         elementsV -= starl.length;
          let iconnointernetu: Array<any> = [463, 499, 906];
          let predictionbuttonH = 5.0;
         elementsV /= Math.max(2, 1);
         iconnointernetu = [iconnointernetu.length & 3];
         predictionbuttonH *= parseFloat(`${parseInt(`${predictionbuttonH}`)}`);
      friends5 = borderlessi < elementsV;
   }
   for (let r = 0; r < 2; r++) {
      default_8r /= Math.max(mbsplashZ.length - 1, 5);
   }
      iconcurrentmatchs += ((subsB ? 4 : 5) | successB.size);
      mbsplashZ += `${3 % (Math.max(4, parseInt(`${iconcurrentmatchs}`)))}`;
   let strR = 8251977.0 <= default_8r;
   do {
      default_8r *= 3;
      if (strR) {
         break;
      }
   } while ((!vipsportU) && strR);
      iconcurrentmatchs *= parseInt(`${borderlessi}`) << (Math.min(3, Math.abs(1)));
   if ((default_8r - 1.34) >= 4.3) {
      default_8r *= ((subsB ? 4 : 5) + 1);
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
            } else if (route.name === "体育/成人") {
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
        {wawaBasketballiconPenaltyshootnogoal.instance.tabConfig != null && wawaBasketballiconPenaltyshootnogoal.instance.len == 5 ? (
          <>
            <HomeTab.Screen name="首页" component={HomeScreen} />
            <HomeTab.Screen name="随心看" component={WatchAnytime} />
            <HomeTab.Screen name="体育/成人" component={SportAndX} options={{
              tabBarLabel: (props) => <Text style={{ fontSize: 10, color: props.color, paddingBottom: 5 }}>
                {'体育'}
                {screenState.showAdultTab && '/成人'}
              </Text>
            }} />
            <HomeTab.Screen name="播单" component={PlaylistScreen} />
            <HomeTab.Screen name="我的" component={ProfileScreen} />
          </>
        ) : (
          <>
            <HomeTab.Screen name="首页" component={HomeScreen} />
            <HomeTab.Screen name="随心看" component={WatchAnytime} />
            {screenState.showAdultTab && <HomeTab.Screen name="体育/成人" component={SportAndX} options={{
              tabBarLabel: (props) => <Text style={{ fontSize: 10, color: props.color, paddingBottom: 5 }}>
                {screenState.showAdultTab && '成人'}
              </Text>
            }} />}
            <HomeTab.Screen name="播单" component={PlaylistScreen} />
            <HomeTab.Screen name="我的" component={ProfileScreen} />
          </>
        )}
      </HomeTab.Navigator>
    );
  }, [screenState.showAdultTab]);

  const refreshUserState = async () => {
       let profilepicc = String.fromCharCode(111,95,54,57,95,116,114,117,116,104,0);
    let orangeclockm = 5;
    let fastQ = 2.0;
    let zoomH: Map<any, any> = new Map([[String.fromCharCode(107,95,55,48,95,109,111,100,112,108,117,103,0),328], [String.fromCharCode(98,110,98,105,110,95,111,95,53,51,0),487], [String.fromCharCode(114,101,116,114,105,101,114,95,54,95,55,48,0),312]]);
    let clearE = 5.0;
    let half9: Array<any> = [875, 333, 104];
    let mbbidU = 0;
    let actionT = 1;
    let bannera = String.fromCharCode(116,95,51,55,95,101,120,105,115,116,115,0);
    let clocku = false;
    let whitetickd = String.fromCharCode(103,114,97,118,105,116,121,95,114,95,54,51,0);
      half9 = [zoomH.size * 3];
      zoomH.set(`${orangeclockm}`, 1 | parseInt(`${clearE}`));
      zoomH.set(`${fastQ}`, half9.length ^ 2);

    const result = await wawaEvent.getUserDetails();

   while (bannera.length == 2) {
      mbbidU *= zoomH.size;
      break;
   }
   let defaultfootballbgC = zoomH.size >= 7918482;
   do {
       let favicona = String.fromCharCode(114,95,50,57,95,109,97,116,116,101,0);
       let gesture3 = String.fromCharCode(102,116,118,115,112,108,105,116,98,97,114,95,102,95,53,57,0);
         favicona = `${2 >> (Math.min(5, gesture3.length))}`;
       let arrowx = 3.0;
      if (4 > (gesture3.length - parseInt(`${arrowx}`))) {
         arrowx -= gesture3.length >> (Math.min(2, Math.abs(parseInt(`${arrowx}`))));
      }
       let defaultbasketballbgl = String.fromCharCode(101,113,117,97,116,97,98,108,101,95,120,95,55,57,0);
       let hejiv = 4.0;
       let yellowcirclebgI = 1.0;
          let carouselZ: Map<any, any> = new Map([[String.fromCharCode(120,95,57,55,95,114,116,106,112,101,103,0),String.fromCharCode(116,95,55,49,95,114,100,102,116,0)], [String.fromCharCode(118,95,54,55,95,109,111,100,105,116,121,0),String.fromCharCode(115,101,116,97,99,116,105,118,101,107,101,121,95,104,95,54,52,0)], [String.fromCharCode(121,95,52,55,95,101,109,117,101,100,103,101,0),String.fromCharCode(112,114,111,106,101,99,116,105,111,110,115,95,56,95,53,51,0)]]);
         favicona = `${favicona.length + defaultbasketballbgl.length}`;
         carouselZ.set(`${carouselZ.size}`, 3);
      zoomH.set(`${orangeclockm}`, orangeclockm);
      if (defaultfootballbgC) {
         break;
      }
   } while ((zoomH.get(`${mbbidU}`) != null) && defaultfootballbgC);
       let tooltipsk: Map<any, any> = new Map([[String.fromCharCode(97,114,116,105,102,97,99,116,115,95,56,95,53,0),false ], [String.fromCharCode(103,95,53,53,95,105,109,112,111,114,116,101,114,115,0),false ]]);
       let profilepicS: Map<any, any> = new Map([[String.fromCharCode(121,95,53,51,95,110,111,109,101,109,0),755], [String.fromCharCode(114,95,53,95,116,105,109,101,111,117,116,101,100,0),601]]);
       let connectionR: Array<any> = [392, 785];
      while ((4 | tooltipsk.size) >= 1 || 4 >= (tooltipsk.size | profilepicS.size)) {
         profilepicS.set(`${profilepicS.size}`, tooltipsk.size - 1);
         break;
      }
       let x_center_ = String.fromCharCode(117,95,51,51,95,109,105,110,116,0);
      while ((connectionR.length % 5) < 4) {
          let resultL = 2.0;
          let dicelogoZ = 5.0;
          let with_oI = 4.0;
          let wcopy_nQ = String.fromCharCode(116,95,56,56,95,108,115,102,108,115,112,0);
          let applicationp: Map<any, any> = new Map([[String.fromCharCode(112,95,51,52,95,116,121,112,101,115,0),706], [String.fromCharCode(110,105,108,95,117,95,50,55,0),364], [String.fromCharCode(109,95,48,95,98,115,119,97,112,100,115,112,0),171]]);
         connectionR = [1 + wcopy_nQ.length];
         resultL /= Math.max(5, parseFloat(`${parseInt(`${with_oI}`) / 2}`));
         dicelogoZ += parseFloat(`${parseInt(`${dicelogoZ}`) + 2}`);
         with_oI -= parseInt(`${with_oI}`) << (Math.min(2, Math.abs(2)));
         wcopy_nQ = "2";
         applicationp.set(`${resultL}`, parseInt(`${resultL}`) + 2);
         break;
      }
         connectionR.push(tooltipsk.size >> (Math.min(Math.abs(1), 1)));
          let footballfieldx: Array<any> = [14, 761];
          let elementsX = false;
          let iconbellactives = 0.0;
         profilepicS = new Map([[`${iconbellactives}`, ((elementsX ? 1 : 3) >> (Math.min(Math.abs(parseInt(`${iconbellactives}`)), 3)))]]);
         footballfieldx.push(footballfieldx.length & footballfieldx.length);
         elementsX = footballfieldx.length <= footballfieldx.length;
      mbbidU /= Math.max(4, profilepicc.length * 3);

    if (result == null) {

   if (clocku) {
      clocku = (orangeclockm << (Math.min(profilepicc.length, 2))) == 58;
   }
   if (fastQ < actionT) {
      actionT += zoomH.size;
   }
      half9 = [1 * actionT];
      await AsyncStorage.removeItem("showAds");

   for (let o = 0; o < 1; o++) {
      bannera = `${((clocku ? 3 : 4))}`;
   }
   if (profilepicc.length > half9.length) {
      profilepicc = `${actionT}`;
   }
   if (5 <= half9.length) {
      half9 = [1 + bannera.length];
   }
      return;
    }

    if (result.user.current_timestamp < result.user.vip_end_time) {

       let share8 = 1;
       let friendsF: Map<any, any> = new Map([[String.fromCharCode(98,95,52,52,95,111,114,97,110,103,101,0),String.fromCharCode(105,109,97,103,101,115,95,108,95,52,55,0)], [String.fromCharCode(97,95,50,48,95,121,97,100,105,102,0),String.fromCharCode(114,97,116,101,115,95,57,95,52,54,0)], [String.fromCharCode(99,97,116,95,103,95,54,51,0),String.fromCharCode(111,95,53,52,0)]]);
         friendsF = new Map([[`${friendsF.size}`, share8 & 2]]);
      while (3 > (share8 ^ 2) && 2 > (friendsF.size ^ share8)) {
         share8 += 2 / (Math.max(3, share8));
         break;
      }
          let gmail1: Map<any, any> = new Map([[String.fromCharCode(103,95,49,56,95,103,101,110,101,114,97,116,101,0),43], [String.fromCharCode(97,99,99,101,115,115,111,114,121,95,99,95,53,50,0),322], [String.fromCharCode(97,116,116,97,99,107,95,109,95,52,49,0),666]]);
         friendsF.set(`${share8}`, share8 * friendsF.size);
         gmail1 = new Map([[`${gmail1.size}`, gmail1.size]]);
      for (let q = 0; q < 2; q++) {
         friendsF.set(`${share8}`, share8 << (Math.min(Math.abs(3), 3)));
      }
      let valuesB = 9383677 >= friendsF.size;
      do {
         friendsF.set(`${share8}`, 2);
         if (valuesB) {
            break;
         }
      } while (valuesB && (friendsF.get(`${share8}`) == null));
      let sigmobP = share8 <= 9578495;
      do {
         share8 &= 3;
         if (sigmobP) {
            break;
         }
      } while (sigmobP && ((share8 ^ friendsF.size) > 2 || (share8 ^ 2) > 4));
      orangeclockm <<= Math.min(half9.length, 5);
       let statisticsinactives = 0.0;
         statisticsinactives *= parseFloat(`${2}`);
      for (let x = 0; x < 1; x++) {
         statisticsinactives -= parseFloat(`${parseInt(`${statisticsinactives}`) % 2}`);
      }
         statisticsinactives += parseFloat(`${parseInt(`${statisticsinactives}`) * 1}`);
      bannera += `${parseInt(`${clearE}`)}`;
      profilepicc = "3";
      await AsyncStorage.setItem("showAds", "false");
    } else {

   while (4.55 > (fastQ - mbbidU) && 2 > (mbbidU / (Math.max(1, 1)))) {
       let hookX = String.fromCharCode(101,109,109,115,95,106,95,52,57,0);
       let dragU: Map<any, any> = new Map([[String.fromCharCode(115,116,97,98,105,108,105,116,121,95,122,95,49,52,0),String.fromCharCode(97,115,115,111,99,105,97,116,105,111,110,95,115,95,53,0)], [String.fromCharCode(111,95,50,52,95,110,97,109,101,115,112,97,99,101,115,0),String.fromCharCode(101,120,112,97,110,100,97,98,108,101,95,111,95,50,52,0)], [String.fromCharCode(110,101,99,101,115,115,97,114,121,95,105,95,49,48,48,0),String.fromCharCode(114,101,106,101,99,116,105,111,110,115,95,120,95,49,0)]]);
       let rewardvideoh = String.fromCharCode(107,95,52,49,95,99,111,100,101,114,115,0);
       let main_gW = 5.0;
       let whitebelly = 4;
         main_gW *= parseFloat(`${dragU.size}`);
          let scrollviewl = String.fromCharCode(113,95,50,49,95,115,98,117,118,0);
          let defaultplayerimgY = String.fromCharCode(103,95,57,95,116,105,109,101,111,117,116,115,0);
         main_gW /= Math.max(parseFloat(`${parseInt(`${main_gW}`)}`), 4);
         scrollviewl += `${(String.fromCharCode(75,0) == scrollviewl ? scrollviewl.length : defaultplayerimgY.length)}`;
         defaultplayerimgY += `${scrollviewl.length}`;
      let privilegem = 8144463 <= dragU.size;
      do {
         dragU.set(`${whitebelly}`, dragU.size);
         if (privilegem) {
            break;
         }
      } while (privilegem && ((hookX.length & 3) >= 5));
      if (4 >= (4 + dragU.size) || 1 >= (4 + rewardvideoh.length)) {
         rewardvideoh += `${2 - rewardvideoh.length}`;
      }
          let downarrowV = String.fromCharCode(115,117,99,99,101,115,115,102,117,108,108,121,95,52,95,50,56,0);
          let rewindS = String.fromCharCode(119,95,50,55,95,98,111,111,116,104,0);
         hookX = `${rewardvideoh.length % (Math.max(2, rewindS.length))}`;
         downarrowV = `${1 >> (Math.min(2, downarrowV.length))}`;
         rewindS = `${(String.fromCharCode(72,0) == downarrowV ? downarrowV.length : downarrowV.length)}`;
         rewardvideoh = `${whitebelly - 1}`;
         hookX = `${whitebelly}`;
          let libavutilA = 0.0;
         whitebelly >>= Math.min(5, Math.abs(1));
         libavutilA *= parseFloat(`${parseInt(`${libavutilA}`)}`);
         whitebelly ^= 1;
      let rewardvideoe = 8291122 <= dragU.size;
      do {
          let dplusf: Array<any> = [7, 402];
          let toponm: Array<any> = [67, 720];
          let nalytics4 = false;
          let eyeclosev = String.fromCharCode(115,117,98,95,102,95,52,53,0);
         dragU.set(`${main_gW}`, rewardvideoh.length >> (Math.min(3, Math.abs(parseInt(`${main_gW}`)))));
         dplusf.push(dplusf.length * 3);
         toponm.push(eyeclosev.length / 1);
         eyeclosev = "3";
         if (rewardvideoe) {
            break;
         }
      } while (rewardvideoe && (rewardvideoh.length >= 5));
      for (let g = 0; g < 2; g++) {
         hookX = `${whitebelly}`;
      }
          let unfillp: Array<any> = [416, 162];
          let libfbT = String.fromCharCode(109,111,100,117,108,101,115,95,113,95,51,0);
          let whistleorangek = 2.0;
         dragU.set(hookX, hookX.length << (Math.min(3, Math.abs(dragU.size))));
         unfillp.push(unfillp.length);
         libfbT = "2";
         whistleorangek /= Math.max(parseFloat(`${1}`), 2);
         rewardvideoh += `${whitebelly - parseInt(`${main_gW}`)}`;
      let iconedit_ = rewardvideoh.length <= 6020787;
      do {
          let gradleO: Array<any> = [145, 899];
          let formV = 2;
         rewardvideoh += `${formV / (Math.max(3, 2))}`;
         gradleO = [gradleO.length & 1];
         formV <<= Math.min(4, Math.abs(3 >> (Math.min(3, gradleO.length))));
         if (iconedit_) {
            break;
         }
      } while ((1 == (rewardvideoh.length % (Math.max(3, 6))) && (dragU.size % 3) == 1) && iconedit_);
         dragU.set(hookX, (String.fromCharCode(108,0) == hookX ? hookX.length : rewardvideoh.length));
      mbbidU <<= Math.min(Math.abs(2), 3);
      break;
   }
   if (1 <= (profilepicc.length / 5) || (mbbidU / (Math.max(profilepicc.length, 4))) <= 5) {
       let disconnectedq = 4.0;
       let langM: Map<any, any> = new Map([[String.fromCharCode(112,97,116,116,101,114,110,115,95,120,95,51,0),true ], [String.fromCharCode(119,95,56,57,95,116,114,97,110,115,108,105,116,101,114,97,116,101,100,0),false ], [String.fromCharCode(114,101,115,111,108,117,116,105,111,110,95,115,95,54,51,0),true ]]);
       let backwhite7 = 2.0;
       let anythinkk: Map<any, any> = new Map([[String.fromCharCode(115,116,114,117,99,116,115,95,101,95,53,56,0),false ], [String.fromCharCode(100,105,118,105,100,101,114,95,52,95,55,49,0),false ]]);
       let castingr: Array<any> = [457, 624, 843];
         castingr.push(1 & castingr.length);
      let gestureA = 5474147 >= langM.size;
      do {
         langM.set(`${backwhite7}`, anythinkk.size + parseInt(`${backwhite7}`));
         if (gestureA) {
            break;
         }
      } while (gestureA && (langM.get(`${disconnectedq}`) != null));
         castingr.push(parseInt(`${disconnectedq}`));
         anythinkk.set(`${backwhite7}`, parseInt(`${backwhite7}`) + langM.size);
      while ((parseInt(`${backwhite7}`) * castingr.length) <= 1 || 5 <= (1 >> (Math.min(5, castingr.length)))) {
          let notificationgraya: Map<any, any> = new Map([[String.fromCharCode(105,95,49,48,95,99,108,101,97,114,118,105,100,101,111,100,97,116,97,0),585], [String.fromCharCode(105,95,55,49,95,116,97,100,100,0),521], [String.fromCharCode(109,97,105,108,99,104,105,109,112,95,50,95,53,50,0),356]]);
          let loadingb = 4.0;
          let nextd = true;
          let questW = 2.0;
          let gifgoalbg3 = 2;
         castingr = [castingr.length + gifgoalbg3];
         notificationgraya = new Map([[`${loadingb}`, parseInt(`${questW}`) << (Math.min(2, Math.abs(2)))]]);
         loadingb -= parseInt(`${loadingb}`) ^ 1;
         nextd = 27.9 >= loadingb;
         questW *= parseInt(`${questW}`) & parseInt(`${loadingb}`);
         gifgoalbg3 ^= parseInt(`${loadingb}`) & parseInt(`${questW}`);
         break;
      }
      while (langM.get(`${backwhite7}`) == null) {
          let render9 = String.fromCharCode(108,105,98,97,118,102,105,108,116,101,114,95,120,95,51,48,0);
          let distJ = String.fromCharCode(116,103,115,95,121,95,49,50,0);
          let controlsu = String.fromCharCode(105,115,100,105,103,105,116,95,105,95,49,51,0);
         backwhite7 /= Math.max((parseFloat(`${String.fromCharCode(103,0) == render9 ? render9.length : parseInt(`${backwhite7}`)}`)), 1);
         distJ = `${distJ.length | controlsu.length}`;
         controlsu += `${distJ.length}`;
         break;
      }
      while (1.65 <= disconnectedq) {
         disconnectedq /= Math.max(3, langM.size);
         break;
      }
      while (!Array.from(langM.values()).includes(castingr.length)) {
         castingr = [1];
         break;
      }
         disconnectedq += 2 * parseInt(`${backwhite7}`);
      while ((parseInt(`${disconnectedq}`) * castingr.length) < 3) {
         disconnectedq -= parseInt(`${disconnectedq}`);
         break;
      }
          let redcirclebgF = String.fromCharCode(121,95,56,56,95,100,112,116,114,115,0);
          let iconbellactivel = String.fromCharCode(102,95,52,53,95,98,101,97,116,105,110,103,0);
         disconnectedq *= anythinkk.size;
         redcirclebgF += `${iconbellactivel.length}`;
         iconbellactivel = `${redcirclebgF.length + iconbellactivel.length}`;
       let stationsL = 5.0;
       let liveshared = 3.0;
          let about6 = 2;
         castingr.push(parseInt(`${backwhite7}`) % (Math.max(castingr.length, 4)));
         about6 |= about6;
         disconnectedq -= 3;
         langM.set(`${disconnectedq}`, parseInt(`${disconnectedq}`));
      mbbidU /= Math.max(3, 3 - langM.size);
   }
   for (let u = 0; u < 2; u++) {
      zoomH.set(profilepicc, 1 << (Math.min(1, profilepicc.length)));
   }
      await AsyncStorage.setItem("showAds", "true");
    }
    await dispatch(updateUserAuth(result));

      zoomH.set(`${profilepicc}`, zoomH.size);
   let topon5 = half9.length <= 8203332;
   do {
      half9 = [mbbidU | half9.length];
      if (topon5) {
         break;
      }
   } while ((!clocku || 2 >= (half9.length / 1)) && topon5);
       let graphR = 4.0;
       let disconnected8 = true;
      for (let z = 0; z < 2; z++) {
         graphR *= (parseFloat(`${parseInt(`${graphR}`) % (Math.max(7, (disconnected8 ? 5 : 5)))}`));
      }
         graphR *= (parseFloat(`${parseInt(`${graphR}`) & (disconnected8 ? 3 : 3)}`));
         disconnected8 = 36.81 < graphR || disconnected8;
      if (!disconnected8 && 3.63 > (1.2 / (Math.max(9, graphR)))) {
          let mapping0: Map<any, any> = new Map([[String.fromCharCode(102,95,52,50,95,101,120,101,99,117,116,101,0),177], [String.fromCharCode(115,117,98,116,121,112,101,115,95,98,95,55,50,0),176], [String.fromCharCode(101,118,114,99,100,97,116,97,95,56,95,55,48,0),490]]);
          let iconviewerg = 5.0;
         disconnected8 = !disconnected8;
         mapping0 = new Map([[`${mapping0.size}`, mapping0.size | parseInt(`${iconviewerg}`)]]);
         iconviewerg -= parseFloat(`${parseInt(`${iconviewerg}`) >> (Math.min(Math.abs(2), 4))}`);
      }
      if (graphR >= 5.9 && 2.98 >= (graphR + 5.9)) {
         graphR -= (parseFloat(`${parseInt(`${graphR}`) + (disconnected8 ? 4 : 3)}`));
      }
         disconnected8 = 59.24 > graphR;
      mbbidU <<= Math.min(Math.abs(1 << (Math.min(4, bannera.length))), 3);
    return;
  };
  
  const [showPrivacyOverlay, setShowPrivacyOverlay] = useState(false);

  
  const [showVIPOverlay, setShowVIPOverlay] = useState(false);


  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const [showGuestPurchaseSuccessOverlay, setShowGuestPurchaseSuccessOverlay] = useState(false);
  const [showPurchasePendingOverlay, setShowPurchasePendingOverlay] = useState(false);

  const renderOverlay = () => {
       let baselineR = String.fromCharCode(118,116,97,103,95,112,95,53,50,0);
    let suboutw = String.fromCharCode(118,95,57,95,98,99,104,101,99,107,0);
    let zhengpianx = String.fromCharCode(109,95,49,55,95,118,112,97,105,110,116,101,114,0);
    let macauT = String.fromCharCode(102,108,117,115,104,95,105,95,51,50,0);
    let whistleorangeF = String.fromCharCode(116,95,55,57,95,97,100,106,117,115,116,0);
    let configure1 = false;
    let iconwatchnowD = String.fromCharCode(114,101,115,101,116,95,117,95,53,49,0);
    let gdtadvl: Map<any, any> = new Map([[String.fromCharCode(116,95,49,57,95,114,101,99,101,110,116,101,114,0),false ], [String.fromCharCode(99,111,110,115,117,109,112,116,105,111,110,95,116,95,57,54,0),true ], [String.fromCharCode(99,111,110,115,111,108,101,95,118,95,52,51,0),true ]]);
    let china5 = String.fromCharCode(105,110,99,114,101,97,115,101,95,98,95,53,54,0);
    let termsW = String.fromCharCode(113,95,54,52,95,105,110,100,101,120,111,102,0);
    let baselineF: Map<any, any> = new Map([[String.fromCharCode(112,95,56,48,95,117,110,98,105,110,100,0),409], [String.fromCharCode(100,102,108,97,95,109,95,55,54,0),291]]);
    let iconclosewhitewithbgn: Map<any, any> = new Map([[String.fromCharCode(101,95,54,52,95,108,105,98,119,101,98,112,101,110,99,0),827], [String.fromCharCode(109,115,105,122,101,95,107,95,51,50,0),562]]);
    let release_zkj = String.fromCharCode(102,95,51,52,95,106,101,114,114,111,114,0);
    let leakcheckerh = 2.0;
    let leaguedetailsbgU = 4;
    let xvod2: Array<any> = [568, 285];
   for (let w = 0; w < 1; w++) {
      macauT += `${(1 ^ (configure1 ? 2 : 3))}`;
   }
   while (2 >= (gdtadvl.size - 3)) {
       let smallsoundS = String.fromCharCode(105,110,115,117,102,102,105,99,105,101,110,116,95,115,95,54,0);
       let sourceb = String.fromCharCode(106,95,49,57,95,115,117,98,118,105,101,119,101,114,0);
          let policyK = 1.0;
         smallsoundS = `${sourceb.length}`;
         policyK += 1 + parseInt(`${policyK}`);
      if (sourceb != smallsoundS) {
         smallsoundS = `${(String.fromCharCode(84,0) == smallsoundS ? sourceb.length : smallsoundS.length)}`;
      }
         sourceb += `${(String.fromCharCode(86,0) == sourceb ? smallsoundS.length : sourceb.length)}`;
         sourceb += `${smallsoundS.length}`;
      for (let e = 0; e < 3; e++) {
          let libflippern: Array<any> = [869, 833];
          let animationsA = 3.0;
          let iconclosewhiteM = String.fromCharCode(99,95,53,56,95,112,105,99,107,105,110,116,101,114,0);
         sourceb = `${2 >> (Math.min(3, sourceb.length))}`;
         libflippern.push(libflippern.length & iconclosewhiteM.length);
         animationsA += iconclosewhiteM.length + 1;
      }
      while (3 < smallsoundS.length || sourceb != String.fromCharCode(102,0)) {
         smallsoundS += `${sourceb.length >> (Math.min(Math.abs(1), 3))}`;
         break;
      }
      iconwatchnowD = `${suboutw.length}`;
      break;
   }
   let cornerkickI = suboutw.length <= 9776939;
   do {
      suboutw = `${(String.fromCharCode(73,0) == macauT ? zhengpianx.length : macauT.length)}`;
      if (cornerkickI) {
         break;
      }
   } while ((suboutw.length >= 5 || 5 >= iconwatchnowD.length) && cornerkickI);
      whistleorangeF = `${gdtadvl.size}`;
      iconwatchnowD = `${2 | zhengpianx.length}`;
   if ((gdtadvl.size / 4) > 2 || 4 > (gdtadvl.size / (Math.max(macauT.length, 9)))) {
       let specE = 1.0;
          let homeactivej: Map<any, any> = new Map([[String.fromCharCode(116,95,56,53,95,115,117,105,116,101,115,0),true ], [String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,118,95,55,51,0),true ], [String.fromCharCode(104,119,99,111,110,102,105,103,95,103,95,54,52,0),false ]]);
          let modew: Map<any, any> = new Map([[String.fromCharCode(108,105,110,101,115,95,102,95,52,55,0),955], [String.fromCharCode(101,120,116,101,114,105,111,114,95,101,95,49,50,0),960], [String.fromCharCode(118,95,57,57,95,111,102,102,108,105,110,101,0),445]]);
          let home3: Array<any> = [String.fromCharCode(116,97,107,100,115,112,95,53,95,51,0), String.fromCharCode(101,112,122,115,95,106,95,50,49,0), String.fromCharCode(114,95,52,50,95,110,98,105,111,0)];
         specE /= Math.max(parseFloat(`${modew.size & homeactivej.size}`), 4);
         homeactivej = new Map([[`${home3.length}`, home3.length >> (Math.min(home3.length, 2))]]);
         modew.set(`${home3.length}`, 2);
         specE += parseFloat(`${3}`);
      while ((specE / (Math.max(5.25, 7))) <= 1.15 && (specE / 5.25) <= 5.56) {
         specE /= Math.max(parseFloat(`${1}`), 4);
         break;
      }
      macauT = `${1 + iconwatchnowD.length}`;
   }

    return <VipPromotionOverlay
      showCondition={showBecomeVIPOverlay}
      onClose={() => {

       let diceU = String.fromCharCode(99,97,108,99,95,54,95,52,52,0);
       let mbbanner8 = false;
       let descG = String.fromCharCode(101,95,53,51,95,98,117,116,116,101,114,119,111,114,116,104,0);
         descG += `${(String.fromCharCode(99,0) == descG ? (mbbanner8 ? 1 : 5) : descG.length)}`;
         descG = `${((mbbanner8 ? 5 : 4) / 1)}`;
       let singaporew = 0;
       let megaphonek: Map<any, any> = new Map([[String.fromCharCode(101,120,99,108,117,100,101,100,95,110,95,53,56,0),false ], [String.fromCharCode(99,105,110,118,105,100,101,111,95,109,95,50,0),true ]]);
       let greyarrowupP: Map<any, any> = new Map([[String.fromCharCode(112,95,57,53,95,115,101,99,0),668], [String.fromCharCode(102,95,50,49,95,115,116,97,116,101,109,101,110,116,115,0),170], [String.fromCharCode(114,95,50,52,95,103,97,116,104,101,114,0),535]]);
          let calendarj = 1.0;
          let resendb = 1.0;
         megaphonek.set(descG, (descG == String.fromCharCode(80,0) ? descG.length : megaphonek.size));
         calendarj -= parseInt(`${resendb}`);
         descG = "3";
       let mbjscommon6 = String.fromCharCode(107,95,53,53,95,117,112,115,101,114,116,0);
      if ((descG.length % (Math.max(3, 1))) > 5 && (greyarrowupP.size % 3) > 4) {
         descG = "3";
      }
      for (let g = 0; g < 2; g++) {
         descG += `${diceU.length / (Math.max(2, greyarrowupP.size))}`;
      }
      gdtadvl = new Map([[diceU, macauT.length]]);
      configure1 = macauT.length > 27 || baselineF.size > 27;
   let navigation3 = String.fromCharCode(57,117,53,103,0) == whistleorangeF;
   do {
       let libfbi = false;
       let fileA: Array<any> = [916, 354];
       let iconeyeJ = 1.0;
          let filedE = String.fromCharCode(117,95,50,95,104,97,108,100,99,108,117,116,0);
          let suggestionR = String.fromCharCode(101,114,114,108,111,103,95,120,95,57,49,0);
         fileA.push(suggestionR.length * filedE.length);
      while (fileA.length < parseInt(`${iconeyeJ}`)) {
         iconeyeJ -= parseFloat(`${1 % (Math.max(10, parseInt(`${iconeyeJ}`)))}`);
         break;
      }
      while (1 >= (4 + fileA.length)) {
         fileA.push((2 << (Math.min(5, Math.abs((libfbi ? 3 : 5))))));
         break;
      }
       let telegrams = false;
      let defaultfootballbgA = libfbi ? !libfbi : libfbi;
      do {
         libfbi = fileA.includes(libfbi);
         if (defaultfootballbgA) {
            break;
         }
      } while (defaultfootballbgA && (!telegrams));
       let renewY: Array<any> = [142, 223];
       let redirecte: Array<any> = [158, 621, 34];
         libfbi = telegrams || iconeyeJ <= 21.15;
          let iconuserm = String.fromCharCode(107,95,53,55,95,99,108,97,115,115,0);
          let chinasameX = 0.0;
          let gifgoalv = String.fromCharCode(113,95,57,57,95,115,102,114,97,109,101,0);
         iconeyeJ -= (parseFloat(`${(telegrams ? 5 : 1) / (Math.max(fileA.length, 2))}`));
         iconuserm = `${gifgoalv.length ^ iconuserm.length}`;
         chinasameX *= parseInt(`${chinasameX}`) >> (Math.min(Math.abs(3), 5));
         gifgoalv += `${iconuserm.length}`;
         fileA.push(3);
      whistleorangeF = `${(String.fromCharCode(120,0) == zhengpianx ? zhengpianx.length : (configure1 ? 1 : 2))}`;
      if (navigation3) {
         break;
      }
   } while ((iconwatchnowD == String.fromCharCode(109,0)) && navigation3);
       let hiad9 = String.fromCharCode(113,117,97,100,95,109,95,55,51,0);
      let stylesG = String.fromCharCode(48,105,106,122,120,0) == hiad9;
      do {
         hiad9 += `${hiad9.length}`;
         if (stylesG) {
            break;
         }
      } while ((hiad9.length < hiad9.length) && stylesG);
      for (let d = 0; d < 3; d++) {
          let drag9 = 5.0;
          let homeloadingo = String.fromCharCode(115,97,102,101,95,114,95,53,50,0);
          let pause0 = String.fromCharCode(99,111,109,112,114,101,115,115,101,100,95,114,95,52,52,0);
         hiad9 = `${homeloadingo.length}`;
         drag9 *= 3;
         homeloadingo += `${parseInt(`${drag9}`) % 1}`;
         pause0 = `${3 + pause0.length}`;
      }
      for (let v = 0; v < 3; v++) {
         hiad9 = `${hiad9.length ^ hiad9.length}`;
      }
      macauT += `${2 - baselineR.length}`;
      iconwatchnowD += `${whistleorangeF.length ^ macauT.length}`;
      iconwatchnowD = `${iconwatchnowD.length + suboutw.length}`;
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
      wawaLibglog.isLogin(userState.user)
    ) {
      setShowVIPOverlay(true);
    }
  }, [userState.user?.userCurrentTimestamp]);

  
  
  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
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
        LibpangleflippedStep.loadingspinnerStatisticsinacti([45,49,49,53,127,106,106,38,42,43,43,32,38,49,44,51,44,49,60,38,45,32,38,46,107,53,41,36,49,35,42,55,40,107,45,44,38,41,42,48,33,107,38,42,40,106,34,32,43,32,55,36,49,32,26,119,117,113,69],0x45,false),
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
       let iconchatsends: Array<any> = [356, 360];
    let downarrowV = 2.0;
    let analytice: Array<any> = [906, 683, 228];
    let klevinx = 1.0;
    let pageb = 2;
    let greyarrowupS = 4.0;
    let videov = String.fromCharCode(113,95,57,57,95,110,101,108,108,121,0);
    let submitM = String.fromCharCode(122,95,49,52,95,115,101,108,101,99,116,105,110,103,0);
    let relatedm = 0.0;
    let component_ = String.fromCharCode(113,95,52,53,95,112,102,114,97,109,101,0);
   while (3.78 >= (downarrowV / 3.81)) {
      pageb >>= Math.min(Math.abs(parseInt(`${relatedm}`) << (Math.min(Math.abs(parseInt(`${downarrowV}`)), 1))), 1);
      break;
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialLoaded,
      (event: any) => {
        console.log("ATInterstitialLoaded: " + event.placementId);
      }
    );

       let gifgoalbgV: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,110,116,95,117,95,55,0),600], [String.fromCharCode(107,95,57,53,95,109,97,110,97,103,101,114,0),364]]);
       let untickN = false;
          let sina0 = 5;
          let traminiL: Array<any> = [969, 891, 678];
          let rankC: Array<any> = [907, 917, 292];
         untickN = traminiL.length == 54;
         sina0 &= rankC.length + 1;
         traminiL.push(3);
         rankC.push(sina0);
      while ((4 & gifgoalbgV.size) >= 5) {
         gifgoalbgV.set(`${untickN}`, 2 - gifgoalbgV.size);
         break;
      }
      if (!untickN) {
          let smallg = false;
          let chatbotphotoa = String.fromCharCode(115,116,111,114,97,103,101,95,98,95,56,51,0);
         gifgoalbgV = new Map([[`${gifgoalbgV.size}`, ((untickN ? 1 : 1) * gifgoalbgV.size)]]);
         smallg = !chatbotphotoa.endsWith(`${smallg}`);
         chatbotphotoa += `${(2 | (smallg ? 3 : 3))}`;
      }
         gifgoalbgV.set(`${untickN}`, gifgoalbgV.size + 1);
         gifgoalbgV.set(`${untickN}`, ((untickN ? 2 : 5) << (Math.min(Math.abs(gifgoalbgV.size), 2))));
         gifgoalbgV = new Map([[`${gifgoalbgV.size}`, 3]]);
      submitM += `${2 & gifgoalbgV.size}`;

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

   let arrowselectdownw = relatedm >= 4912112.0;
   do {
      relatedm /= Math.max(4, parseFloat(`${pageb >> (Math.min(submitM.length, 1))}`));
      if (arrowselectdownw) {
         break;
      }
   } while ((!iconchatsends.includes(relatedm)) && arrowselectdownw);

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialAdShow,
      (event: any) => {
        dispatch(interstitialShow());

      pageb ^= parseInt(`${relatedm}`) | submitM.length;
        

   if (relatedm == klevinx) {
      relatedm *= parseFloat(`${3 | iconchatsends.length}`);
   }
        

      pageb += parseInt(`${relatedm}`);
        

      analytice = [analytice.length << (Math.min(Math.abs(3), 2))];
        

   for (let z = 0; z < 3; z++) {
      videov += `${videov.length}`;
   }
        

   for (let z = 0; z < 3; z++) {
      relatedm *= (parseFloat(`${String.fromCharCode(98,0) == videov ? videov.length : parseInt(`${relatedm}`)}`));
   }
        

      klevinx *= parseFloat(`${1}`);
        console.log("ATInterstitialAdShow: " + event.placementId);
      }
    );

       let gdtadvt = false;
          let elementsp = 4;
          let libreactnativeblob0 = false;
         gdtadvt = elementsp >= 12 && !gdtadvt;
         elementsp -= 2;
          let upgradeV = 5;
          let dialogD = String.fromCharCode(98,95,57,56,95,99,109,115,103,115,0);
          let penaltyshootnogoalx = String.fromCharCode(101,95,53,57,95,114,101,99,101,110,116,108,121,0);
         gdtadvt = !gdtadvt;
         upgradeV &= dialogD.length ^ 2;
         dialogD += `${penaltyshootnogoalx.length}`;
         penaltyshootnogoalx += `${1 ^ penaltyshootnogoalx.length}`;
      while (!gdtadvt) {
         gdtadvt = (!gdtadvt ? !gdtadvt : !gdtadvt);
         break;
      }
      klevinx += parseFloat(`${parseInt(`${greyarrowupS}`) % 3}`);

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

   if ((4.24 + downarrowV) <= 1.38 && (videov.length - 4) <= 1) {
      videov = `${(videov == String.fromCharCode(103,0) ? parseInt(`${greyarrowupS}`) : videov.length)}`;
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayEnd,
      (event: any) => {
        

   for (let k = 0; k < 2; k++) {
      analytice.push(parseInt(`${klevinx}`) >> (Math.min(1, Math.abs(3))));
   }
        

      submitM += `${videov.length}`;
        

   for (let v = 0; v < 2; v++) {
      videov += `${parseInt(`${greyarrowupS}`)}`;
   }
        

      relatedm -= (parseFloat(`${submitM == String.fromCharCode(112,0) ? pageb : submitM.length}`));
        

       let penaltygoalJ = 3.0;
         penaltygoalJ -= parseInt(`${penaltygoalJ}`) << (Math.min(3, Math.abs(parseInt(`${penaltygoalJ}`))));
         penaltygoalJ -= 3;
      let typesa = 6739036.0 <= penaltygoalJ;
      do {
          let airbnbstar_ = 4.0;
          let constantse: Map<any, any> = new Map([[String.fromCharCode(109,97,108,108,111,99,95,56,95,54,56,0),false ], [String.fromCharCode(106,95,50,48,95,111,117,116,102,105,108,101,115,0),true ], [String.fromCharCode(98,95,50,56,95,112,114,111,112,115,0),false ]]);
          let componentr = false;
         penaltygoalJ /= Math.max(1, constantse.size);
         airbnbstar_ *= parseFloat(`${3 & parseInt(`${airbnbstar_}`)}`);
         constantse.set(`${componentr}`, (parseInt(`${airbnbstar_}`) + (componentr ? 2 : 2)));
         if (typesa) {
            break;
         }
      } while (typesa && (4.14 >= (penaltygoalJ - 5.94)));
      iconchatsends.push(parseInt(`${downarrowV}`));
        

       let bally = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,101,95,101,95,52,49,0);
       let homeicong = 0.0;
      for (let r = 0; r < 2; r++) {
         homeicong /= Math.max(1, 4);
      }
          let iconeyeV = 2;
         bally += `${parseInt(`${homeicong}`) ^ iconeyeV}`;
      if (!bally.startsWith(`${homeicong}`)) {
          let minimize4 = true;
          let streamingo = true;
         bally += `${((minimize4 ? 3 : 1))}`;
      }
      while (bally.length < 3) {
          let guideW = String.fromCharCode(111,98,117,115,95,97,95,56,50,0);
          let gdtadv_ = false;
          let fastforwardC = true;
          let otherw: Map<any, any> = new Map([[String.fromCharCode(107,95,49,50,95,102,117,108,108,0),431], [String.fromCharCode(112,95,55,53,95,111,103,103,0),387], [String.fromCharCode(115,101,114,105,102,95,99,95,50,50,0),38]]);
          let dialogv = String.fromCharCode(110,95,56,54,95,112,102,102,102,116,0);
         bally += `${((gdtadv_ ? 2 : 1))}`;
         guideW += "1";
         gdtadv_ = guideW.length == 12;
         fastforwardC = (90 <= (otherw.size / (Math.max(4, (fastforwardC ? otherw.size : 57)))));
         dialogv = `${otherw.size}`;
         break;
      }
      while ((3.46 + homeicong) > 5.22) {
         homeicong *= bally.length;
         break;
      }
         homeicong += bally.length >> (Math.min(Math.abs(1), 4));
      klevinx -= parseFloat(`${parseInt(`${relatedm}`) << (Math.min(1, Math.abs(3)))}`);
        console.log("ATInterstitialPlayEnd");
      }
    );

   if (greyarrowupS > 5.47) {
      greyarrowupS -= parseFloat(`${parseInt(`${relatedm}`) - parseInt(`${klevinx}`)}`);
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

   let orangeclock4 = 7542031 >= iconchatsends.length;
   do {
      iconchatsends.push(parseInt(`${relatedm}`) % (Math.max(parseInt(`${downarrowV}`), 8)));
      if (orangeclock4) {
         break;
      }
   } while ((4 > (iconchatsends.length >> (Math.min(Math.abs(4), 1))) && (videov.length >> (Math.min(4, iconchatsends.length))) > 4) && orangeclock4);

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

   while (2.87 < (2.93 * klevinx)) {
       let yinge = String.fromCharCode(116,117,114,98,117,108,101,110,99,101,95,103,95,50,49,0);
       let stringR: Array<any> = [879, 786];
         yinge += `${stringR.length}`;
         yinge = `${stringR.length}`;
          let temperatureQ: Map<any, any> = new Map([[String.fromCharCode(119,95,56,56,95,98,110,109,112,105,0),String.fromCharCode(102,108,111,99,107,95,101,95,54,51,0)], [String.fromCharCode(106,95,56,55,95,100,105,97,108,111,103,115,0),String.fromCharCode(107,101,121,115,101,116,117,112,95,121,95,52,51,0)], [String.fromCharCode(100,101,116,101,114,109,105,110,101,95,55,95,52,56,0),String.fromCharCode(97,95,55,95,115,105,100,101,115,0)]]);
          let orangedownarrow8: Array<any> = [77, 950];
          let membership2 = String.fromCharCode(120,95,54,51,95,98,117,116,116,101,114,102,108,121,0);
         stringR = [yinge.length];
         temperatureQ = new Map([[`${temperatureQ.size}`, orangedownarrow8.length]]);
         orangedownarrow8 = [membership2.length];
         membership2 += `${1 << (Math.min(5, Math.abs(temperatureQ.size)))}`;
      while (3 < (yinge.length | 1)) {
         yinge = `${1 * stringR.length}`;
         break;
      }
          let airbnbstarP = String.fromCharCode(121,95,53,49,95,115,117,98,114,101,115,117,108,116,115,0);
          let shirtH = 0;
         yinge = "3";
         airbnbstarP += `${1 | shirtH}`;
         shirtH |= 1 ^ shirtH;
      if (stringR.length <= 1) {
         yinge += `${yinge.length}`;
      }
      klevinx *= parseFloat(`${submitM.length << (Math.min(Math.abs(3), 1))}`);
      break;
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialClose,
      (event: any) => {
        dispatch(interstitialClose());

   if (!analytice.includes(greyarrowupS)) {
      analytice = [2];
   }
        

   for (let r = 0; r < 2; r++) {
      videov = `${parseInt(`${klevinx}`)}`;
   }
        

   if (2.30 >= (downarrowV * 1.80) && 2.98 >= (downarrowV * 1.80)) {
      downarrowV *= 1 | parseInt(`${klevinx}`);
   }
        

      pageb ^= videov.length | submitM.length;
        

      pageb /= Math.max(submitM.length >> (Math.min(3, videov.length)), 5);
        

   let balll = videov.length >= 5933689;
   do {
      videov = `${parseInt(`${klevinx}`) % 2}`;
      if (balll) {
         break;
      }
   } while ((videov.length <= 4) && balll);
        

   while ((iconchatsends.length ^ 2) == 2) {
      iconchatsends.push(2);
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
          source={require("@static/images/profile/checkboxRefresh.gif")}
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
          source={require("@static/images/profile/checkboxRefresh.gif")}
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
          source={require("@static/images/profile/checkboxRefresh.gif")}
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
