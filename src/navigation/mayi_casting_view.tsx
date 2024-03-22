

class BannerDiceHumidity {
    static sportsCastingWindIconviewergif = (contents: [number], key: number, hasEmoji: boolean) => {
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
import CatalogScreen from "../screens/Common/mayi_heji";
import ShortVodCollectionScreen from "../screens/Profile/Collection/mayi_over_dependency";
import SportsIcon from "@static/images/actionHolderIconclosewhitewithbg.svg";

import VipActionIcon from "@static/images/episodeModuleEmbed.svg";
import VipIcon from "@static/images/libtobPrivatechatbg.svg";

import SportAndX from "./../../src/screens/mayi_recommendation";

import MatchDetailsScreen from "../Sports/screens/Sports/mayi_policy_target";
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
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/mayi_redirect";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_DOMAIN, UMENG_CHANNEL } from "@utility/mayi_middleware_apps";
import { mayi_Librrc } from "../../mayi_gift";
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
} from "@redux/actions/mayi_iconorientation_chatroombackground";
import { Dialog } from "@rneui/themed";
import FastImage from "../components/common/mayi_slider";
import { screenModel } from "@type/mayi_libfolly_inouttargetred";
import { YingshiDarkTheme, YingshiLightTheme } from "@utility/mayi_time_math";
import { updateUserAuth, updateUserReferral } from "@redux/actions/mayi_librrc";
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
import { AdsBannerContext } from "../contexts/mayi_star_sigmob";
import VIP from "../screens/Profile/mayi_nalytics_libjsi";
import VIP2 from "../screens/Profile/mayi_iconclosewhite";
import { withIAPContext } from "react-native-iap";
import { VipDetails } from "../components/vip/mayi_plus";

import { ATInterstitialRNSDK } from "./../../AnyThinkAds/mayi_referrer";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import AdultVideoList from "../screens/Playlist/mayi_news_sentry";
import { mayi_Injury } from "@api";
import AdEvent from "../screens/Common/mayi_statisticsinactive_libjsi";
import { CRouteInitializer } from "../routes/mayi_topon";
import {
  clearQueueOnAppStart,
  updateAllVodDetailsThunk,
} from "@redux/actions/mayi_become";
import DownloadCatalog from "../screens/Profile/Download/mayi_rewind_fast";
import DownloadDetails from "../screens/Profile/Download/mayi_iconshare_sentry";

import AutoRenewService from "../screens/Profile/mayi_unlock_placeholder";
import { VipPromotionOverlay } from "../components/modal/mayi_bootsplash";
import { GuestPurchaseSuccessOverlay } from "../components/modal/guestPurchaseSuccessOverlay";
import { mayi_CircleImage } from "@redux/reducers/mayi_imagenomoredata";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";
import { toggleDarkTheme } from "@redux/actions/mayi_comment_defaultprofilepic";

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

  const appState = useSelector<mayi_CircleImage>('backgroundReducer');

  useLayoutEffect(() => {
    dispatch(toggleDarkTheme());
  }, []);

  const HomeTabScreen = useCallback(() => {
       let sharedH = String.fromCharCode(119,104,105,108,101,95,51,95,55,48,0);
    let libjsinspector2 = 2.0;
    let countdownG: Map<any, any> = new Map([[String.fromCharCode(114,105,110,103,116,111,110,101,95,122,95,49,56,0),716], [String.fromCharCode(115,97,110,105,116,121,95,103,95,50,56,0),308], [String.fromCharCode(116,104,97,119,101,100,95,103,95,57,57,0),395]]);
    let utilso: Array<any> = [321, 54, 154];
    let gifgoalV = String.fromCharCode(107,95,57,51,95,104,119,117,112,108,111,97,100,0);
    let libavutile = String.fromCharCode(103,102,105,110,116,95,111,95,55,56,0);
    let imagemanager7 = String.fromCharCode(105,95,53,49,95,111,119,110,115,0);
    let reactnativeratingsb = 0.0;
    let arrowR = 4.0;
    let stylesz = false;
   for (let s = 0; s < 2; s++) {
       let libreactnativejnip = String.fromCharCode(106,95,50,55,95,109,111,100,101,115,0);
      while (libreactnativejnip != String.fromCharCode(70,0)) {
         libreactnativejnip = `${3 << (Math.min(1, libreactnativejnip.length))}`;
         break;
      }
      for (let e = 0; e < 2; e++) {
         libreactnativejnip += `${1 ^ libreactnativejnip.length}`;
      }
      while (libreactnativejnip.length <= 2 || libreactnativejnip == String.fromCharCode(70,0)) {
          let profilepicV = 4;
          let commonZ = String.fromCharCode(118,101,114,105,102,105,97,116,105,111,110,95,98,95,54,53,0);
          let largev = 4.0;
          let backicon4 = String.fromCharCode(102,95,50,51,95,97,100,100,114,115,0);
          let gpay7 = String.fromCharCode(97,95,57,52,95,101,108,105,115,105,111,110,0);
         libreactnativejnip = `${profilepicV}`;
         profilepicV &= gpay7.length | backicon4.length;
         commonZ += `${backicon4.length * 2}`;
         largev *= 1 & commonZ.length;
         gpay7 += `${(String.fromCharCode(112,0) == backicon4 ? backicon4.length : parseInt(`${largev}`))}`;
         break;
      }
      imagemanager7 = `${countdownG.size}`;
   }
      gifgoalV = `${countdownG.size * utilso.length}`;
   while ((4 & countdownG.size) >= 1 && 4 >= (4 - countdownG.size)) {
      libjsinspector2 /= Math.max(3, parseFloat(`${parseInt(`${reactnativeratingsb}`)}`));
      break;
   }
      utilso.push(countdownG.size << (Math.min(2, Math.abs(parseInt(`${arrowR}`)))));
   while (gifgoalV.includes(`${libjsinspector2}`)) {
      gifgoalV = `${(String.fromCharCode(76,0) == libavutile ? libavutile.length : countdownG.size)}`;
      break;
   }
       let liveshareB = false;
       let sharewhiteQ: Array<any> = [587, 342];
      let mimoe = 9096434 <= sharewhiteQ.length;
      do {
         sharewhiteQ.push(3);
         if (mimoe) {
            break;
         }
      } while ((2 < sharewhiteQ.length) && mimoe);
       let penalty9 = String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,95,117,95,56,55,0);
       let googleL = String.fromCharCode(108,108,118,105,100,100,115,112,95,106,95,53,48,0);
      if ((4 | sharewhiteQ.length) >= 3) {
         liveshareB = sharewhiteQ.length < 50;
      }
         penalty9 = `${(String.fromCharCode(77,0) == googleL ? googleL.length : penalty9.length)}`;
         sharewhiteQ = [((liveshareB ? 2 : 5) % (Math.max(3, 6)))];
      while (liveshareB) {
          let notificationB: Map<any, any> = new Map([[String.fromCharCode(121,117,118,121,97,95,116,95,54,49,0),false ], [String.fromCharCode(118,97,108,105,100,97,116,97,98,108,101,95,57,95,56,0),false ], [String.fromCharCode(117,110,115,104,97,114,112,95,106,95,56,50,0),true ]]);
          let stylesw = 5.0;
          let handlerj = String.fromCharCode(111,95,50,49,95,114,101,100,105,114,101,99,116,105,111,110,97,108,0);
         sharewhiteQ = [handlerj.length | 2];
         notificationB.set(`${stylesw}`, parseInt(`${stylesw}`));
         handlerj += `${parseInt(`${stylesw}`)}`;
         break;
      }
      libjsinspector2 += parseFloat(`${parseInt(`${reactnativeratingsb}`) * imagemanager7.length}`);
   for (let w = 0; w < 1; w++) {
      utilso = [(String.fromCharCode(77,0) == gifgoalV ? sharedH.length : gifgoalV.length)];
   }
       let brightness9 = String.fromCharCode(116,100,115,102,95,109,95,56,57,0);
          let panglel = String.fromCharCode(115,95,49,52,95,105,110,118,97,108,105,100,97,116,101,0);
          let mapping9 = String.fromCharCode(106,95,50,0);
         brightness9 = `${(String.fromCharCode(104,0) == brightness9 ? brightness9.length : panglel.length)}`;
         panglel += `${mapping9.length & mapping9.length}`;
       let rocketM = String.fromCharCode(121,112,114,101,100,105,99,116,105,111,110,95,110,95,51,53,0);
       let gradleO = String.fromCharCode(100,99,111,110,108,121,95,121,95,57,51,0);
      for (let t = 0; t < 3; t++) {
          let utilsg = 5.0;
          let lighte: Array<any> = [108, 249, 357];
          let redscoreballd: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,105,122,101,100,95,110,95,53,55,0),String.fromCharCode(118,95,51,95,118,102,114,101,101,0)], [String.fromCharCode(115,117,98,111,98,106,101,99,116,95,99,95,52,50,0),String.fromCharCode(116,95,49,48,95,114,101,97,108,109,0)]]);
          let material0: Map<any, any> = new Map([[String.fromCharCode(121,95,56,53,95,112,111,115,116,114,111,116,97,116,101,0),355], [String.fromCharCode(116,104,117,109,98,95,52,95,49,49,0),546]]);
          let connectione = 4.0;
         rocketM += `${brightness9.length}`;
         utilsg *= lighte.length % 1;
         lighte.push(parseInt(`${utilsg}`) << (Math.min(Math.abs(material0.size), 1)));
         redscoreballd.set(`${material0.size}`, redscoreballd.size);
         connectione /= Math.max(parseInt(`${utilsg}`), 4);
      }
      gifgoalV = "3";
   for (let x = 0; x < 1; x++) {
      libjsinspector2 -= parseFloat(`${2 >> (Math.min(2, libavutile.length))}`);
   }
   while (gifgoalV.endsWith(`${libjsinspector2}`)) {
       let mbbannerV = String.fromCharCode(97,95,50,95,115,112,105,108,108,0);
      if (mbbannerV.length > 5) {
          let snewsV = String.fromCharCode(102,114,97,99,116,105,111,110,95,117,95,51,56,0);
          let matchdetailbgy = true;
          let iconclosewhites = 3.0;
          let matchinactiveA = String.fromCharCode(106,95,57,48,95,97,112,112,101,110,100,0);
          let logog = String.fromCharCode(107,95,55,50,95,100,110,115,108,97,98,101,108,0);
         mbbannerV += `${((matchdetailbgy ? 3 : 5))}`;
         snewsV += `${(matchinactiveA == String.fromCharCode(111,0) ? matchinactiveA.length : parseInt(`${iconclosewhites}`))}`;
         matchdetailbgy = !matchinactiveA.includes(`${iconclosewhites}`);
         logog += `${2 + logog.length}`;
      }
          let animationr: Map<any, any> = new Map([[String.fromCharCode(110,95,53,57,95,117,115,101,100,0),String.fromCharCode(99,95,55,56,95,97,114,102,113,0)], [String.fromCharCode(101,95,55,56,95,117,110,114,101,115,101,114,118,101,100,0),String.fromCharCode(106,95,54,54,95,115,97,110,105,116,105,122,101,100,0)], [String.fromCharCode(120,103,101,116,98,118,95,51,95,52,50,0),String.fromCharCode(101,95,55,54,95,114,97,115,116,101,114,105,122,101,115,0)]]);
         mbbannerV = `${2 << (Math.min(4, Math.abs(animationr.size)))}`;
         mbbannerV = `${mbbannerV.length}`;
      gifgoalV += `${mbbannerV.length + parseInt(`${arrowR}`)}`;
      break;
   }
   let playlistq = gifgoalV.length <= 8060722;
   do {
      gifgoalV += `${countdownG.size}`;
      if (playlistq) {
         break;
      }
   } while (playlistq && (5.68 == (4.12 * reactnativeratingsb)));
      arrowR *= parseInt(`${libjsinspector2}`) / (Math.max(sharedH.length, 3));
      arrowR += 3;
      gifgoalV = `${sharedH.length | parseInt(`${libjsinspector2}`)}`;
      sharedH += `${3 % (Math.max(5, parseInt(`${reactnativeratingsb}`)))}`;
      sharedH = `${parseInt(`${reactnativeratingsb}`) & 1}`;
   if ((parseFloat(`${sharedH.length}`) - libjsinspector2) >= 2.57) {
      sharedH = `${gifgoalV.length * imagemanager7.length}`;
   }
   let playlistS = 7697249.0 <= libjsinspector2;
   do {
       let fastforwardD = true;
       let mimeJ = String.fromCharCode(109,117,115,120,95,97,95,53,57,0);
      let o_managerD = fastforwardD ? !fastforwardD : fastforwardD;
      do {
          let defaultprofilepicr: Map<any, any> = new Map([[String.fromCharCode(101,95,54,52,95,99,111,100,101,119,111,114,100,0),551], [String.fromCharCode(112,111,115,116,112,114,111,99,114,101,115,95,55,95,56,49,0),924], [String.fromCharCode(108,95,49,54,95,115,109,105,108,101,0),301]]);
          let megaphoneB: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,105,99,116,105,111,110,95,101,95,56,54,0),657], [String.fromCharCode(116,95,55,48,95,99,108,111,115,101,99,98,0),64], [String.fromCharCode(112,114,111,109,105,115,101,95,115,95,53,53,0),604]]);
         fastforwardD = megaphoneB.size == mimeJ.length;
         defaultprofilepicr = new Map([[`${defaultprofilepicr.size}`, defaultprofilepicr.size]]);
         megaphoneB = new Map([[`${defaultprofilepicr.size}`, defaultprofilepicr.size]]);
         if (o_managerD) {
            break;
         }
      } while ((!mimeJ.startsWith(`${fastforwardD}`)) && o_managerD);
         fastforwardD = mimeJ.length < 82;
          let neonP = String.fromCharCode(105,95,54,51,95,119,105,115,101,0);
          let humidityY = String.fromCharCode(109,95,57,54,95,105,110,116,101,114,102,97,99,101,115,0);
          let streamingW: Array<any> = [String.fromCharCode(111,95,51,49,95,109,117,108,116,105,112,108,121,0), String.fromCharCode(100,105,114,97,99,100,115,112,95,49,95,50,57,0), String.fromCharCode(109,111,100,117,108,117,115,95,97,95,57,53,0)];
         mimeJ = `${((fastforwardD ? 5 : 2) << (Math.min(Math.abs(2), 3)))}`;
         neonP = "2";
         humidityY += `${humidityY.length}`;
         streamingW = [neonP.length];
         mimeJ += "3";
          let vnewinterstitial3 = 2;
          let arrowa: Map<any, any> = new Map([[String.fromCharCode(105,95,50,51,95,105,110,116,101,103,114,97,116,101,0),356], [String.fromCharCode(119,104,105,116,101,115,95,107,95,50,50,0),689], [String.fromCharCode(112,101,101,108,95,108,95,53,50,0),490]]);
          let libfbX = 3.0;
         fastforwardD = !mimeJ.startsWith(`${fastforwardD}`);
         vnewinterstitial3 -= arrowa.size;
         arrowa = new Map([[`${arrowa.size}`, arrowa.size]]);
         libfbX += arrowa.size * vnewinterstitial3;
      while (1 < mimeJ.length) {
          let chinao = String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,115,95,110,95,52,54,0);
          let bridgeW = String.fromCharCode(105,110,117,115,101,95,117,95,53,0);
          let smallbrightnessU = false;
          let cornerW = String.fromCharCode(97,95,52,54,95,112,101,114,109,101,97,116,101,0);
          let encryptL = String.fromCharCode(107,95,56,57,95,114,105,110,102,0);
         mimeJ += `${((smallbrightnessU ? 5 : 5))}`;
         chinao += "2";
         bridgeW += `${encryptL.length}`;
         smallbrightnessU = chinao.length == encryptL.length;
         cornerW = `${bridgeW.length >> (Math.min(Math.abs(2), 2))}`;
         break;
      }
      libjsinspector2 += parseFloat(`${imagemanager7.length << (Math.min(4, Math.abs(parseInt(`${libjsinspector2}`))))}`);
      if (playlistS) {
         break;
      }
   } while (playlistS && (2.66 <= (libjsinspector2 / 4.60) && (libjsinspector2 / (Math.max(parseFloat(`${imagemanager7.length}`), 2))) <= 4.60));
   while (1.73 >= (reactnativeratingsb / (Math.max(arrowR, 7))) && (reactnativeratingsb / (Math.max(9, arrowR))) >= 1.73) {
      arrowR /= Math.max(2 << (Math.min(3, Math.abs(parseInt(`${libjsinspector2}`)))), 5);
      break;
   }
   let minivod2 = sharedH.length >= 6011008;
   do {
       let thumbnailo: Array<any> = [376, 99, 811];
       let spinnerl = String.fromCharCode(112,97,114,97,108,108,97,120,95,98,95,51,57,0);
       let rooti = String.fromCharCode(115,95,49,54,95,119,101,101,107,100,97,121,0);
      if (rooti.length > spinnerl.length) {
          let largec: Array<any> = [891, 155];
          let fastP = 2;
          let crown0 = String.fromCharCode(118,95,50,56,95,100,101,109,117,120,101,114,115,0);
          let classese: Map<any, any> = new Map([[String.fromCharCode(100,95,55,50,95,115,111,117,110,100,101,120,0),143], [String.fromCharCode(103,111,101,114,108,105,95,52,95,54,0),167], [String.fromCharCode(109,95,54,54,95,98,105,110,100,101,114,0),328]]);
          let mbbannerB = String.fromCharCode(100,101,108,101,116,105,110,103,95,105,95,55,51,0);
         spinnerl = `${thumbnailo.length ^ spinnerl.length}`;
         largec.push(fastP << (Math.min(4, Math.abs(2))));
         fastP /= Math.max(1, classese.size | 3);
         crown0 += `${crown0.length}`;
         classese = new Map([[`${largec.length}`, fastP]]);
         mbbannerB += `${3 >> (Math.min(1, mbbannerB.length))}`;
      }
       let vietnams: Array<any> = [String.fromCharCode(105,102,110,115,95,108,95,57,54,0), String.fromCharCode(115,116,97,98,108,101,95,50,95,55,50,0), String.fromCharCode(118,97,114,105,110,102,111,95,109,95,54,0)];
      if (spinnerl.length < 3) {
          let pause8 = String.fromCharCode(97,99,100,101,99,95,112,95,51,55,0);
          let blacklistR = 2;
          let carouselK: Map<any, any> = new Map([[String.fromCharCode(117,95,53,56,95,115,97,110,105,116,105,122,101,114,0),true ], [String.fromCharCode(119,95,50,53,95,117,112,115,104,105,102,116,0),false ]]);
          let projectI: Array<any> = [String.fromCharCode(99,95,51,54,95,110,111,110,98,0), String.fromCharCode(99,111,110,116,111,117,114,115,95,121,95,57,55,0), String.fromCharCode(97,117,116,111,100,101,108,101,116,101,95,122,95,50,0)];
          let nterstitialp: Map<any, any> = new Map([[String.fromCharCode(115,95,55,56,95,114,105,110,103,98,97,99,107,0),179], [String.fromCharCode(112,95,57,95,108,97,110,103,117,97,103,101,0),616]]);
         spinnerl += `${spinnerl.length}`;
         pause8 += "2";
         blacklistR >>= Math.min(Math.abs(3 * nterstitialp.size), 3);
         carouselK = new Map([[`${carouselK.size}`, 1 + carouselK.size]]);
         projectI = [3];
         nterstitialp.set(`${pause8}`, (pause8 == String.fromCharCode(106,0) ? pause8.length : nterstitialp.size));
      }
         spinnerl = `${2 << (Math.min(3, thumbnailo.length))}`;
      let libbufferC = spinnerl == String.fromCharCode(111,98,119,101,105,56,108,53,97,0);
      do {
         spinnerl = `${thumbnailo.length}`;
         if (libbufferC) {
            break;
         }
      } while ((5 > (spinnerl.length ^ 2) || 2 > (2 ^ thumbnailo.length)) && libbufferC);
         vietnams = [vietnams.length << (Math.min(rooti.length, 2))];
         spinnerl += `${rooti.length / (Math.max(2, 6))}`;
         spinnerl += `${(String.fromCharCode(108,0) == spinnerl ? spinnerl.length : vietnams.length)}`;
      for (let w = 0; w < 2; w++) {
         vietnams = [vietnams.length + 3];
      }
      sharedH = `${2 * parseInt(`${arrowR}`)}`;
      if (minivod2) {
         break;
      }
   } while (minivod2 && (!sharedH.includes(`${arrowR}`)));
   while (5.9 == (reactnativeratingsb * 4.44) && (arrowR * 4.44) == 5.16) {
       let bgvipsportL = 3.0;
       let nodee = String.fromCharCode(115,95,56,57,95,100,111,117,98,108,105,110,103,0);
         bgvipsportL /= Math.max(parseFloat(`${parseInt(`${bgvipsportL}`) % (Math.max(5, nodee.length))}`), 3);
      let basketballO = 6431692.0 >= bgvipsportL;
      do {
          let selectiong = String.fromCharCode(97,95,50,52,95,114,101,113,117,101,115,116,115,0);
          let crossU = String.fromCharCode(110,95,50,0);
          let iconclosewhitewithbgV = true;
          let predictionwini = String.fromCharCode(104,95,51,54,95,97,112,109,116,101,115,116,0);
          let inouttargetredS: Map<any, any> = new Map([[String.fromCharCode(108,95,57,56,95,115,117,98,116,114,97,99,116,101,100,0),String.fromCharCode(109,97,105,110,100,98,95,104,95,54,56,0)], [String.fromCharCode(120,95,50,50,95,116,114,97,110,115,99,101,105,118,101,114,115,0),String.fromCharCode(109,105,115,109,97,116,99,104,95,114,95,56,51,0)]]);
         bgvipsportL -= (parseFloat(`${selectiong.length | (iconclosewhitewithbgV ? 1 : 5)}`));
         selectiong = `${predictionwini.length ^ 1}`;
         crossU = `${predictionwini.length}`;
         iconclosewhitewithbgV = predictionwini == crossU;
         inouttargetredS.set(predictionwini, predictionwini.length ^ crossU.length);
         if (basketballO) {
            break;
         }
      } while (basketballO && (4 >= (nodee.length << (Math.min(Math.abs(1), 4))) || (bgvipsportL / (Math.max(1.26, 10))) >= 4.76));
      for (let b = 0; b < 3; b++) {
         nodee += `${parseInt(`${bgvipsportL}`)}`;
      }
         nodee += "1";
      for (let n = 0; n < 2; n++) {
         nodee = `${nodee.length + 2}`;
      }
      while ((nodee.length - parseInt(`${bgvipsportL}`)) > 3 || (4.26 - bgvipsportL) > 1.2) {
          let d_centerg: Array<any> = [String.fromCharCode(99,111,109,112,97,114,97,98,108,101,95,117,95,55,53,0), String.fromCharCode(117,95,53,55,95,100,105,99,101,0)];
          let cornershoote = String.fromCharCode(108,95,52,48,95,119,114,111,110,103,0);
         nodee = `${d_centerg.length - 3}`;
         d_centerg = [(String.fromCharCode(113,0) == cornershoote ? cornershoote.length : cornershoote.length)];
         break;
      }
      reactnativeratingsb += (parseFloat(`${libavutile == String.fromCharCode(75,0) ? parseInt(`${bgvipsportL}`) : libavutile.length}`));
      break;
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
        {mayi_Librrc.instance.tabConfig != null && mayi_Librrc.instance.len == 5 ? (
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
       let imagesK = 0;
    let volumeR = String.fromCharCode(100,95,57,55,95,110,111,111,112,0);
    let shootyesgoal7 = String.fromCharCode(97,95,52,53,95,112,114,111,112,111,114,116,105,111,110,0);
    let sentryL = 5;
    let mappingS: Map<any, any> = new Map([[String.fromCharCode(100,95,55,52,95,99,111,102,97,99,116,111,114,0),715], [String.fromCharCode(105,109,97,103,101,95,51,95,50,48,0),898]]);
    let sellmathbackgroundv = String.fromCharCode(104,101,105,99,95,117,95,55,48,0);
    let readG = String.fromCharCode(114,95,54,48,95,106,115,105,109,100,99,112,117,0);
    let penaltyshootnogoalq = 5.0;
    let videocommonT = String.fromCharCode(97,95,50,54,95,105,110,105,116,118,0);
    let hejiT: Map<any, any> = new Map([[String.fromCharCode(121,95,55,49,95,100,117,109,112,112,97,99,107,101,116,0),true ], [String.fromCharCode(115,99,97,108,101,95,50,95,51,55,0),false ], [String.fromCharCode(111,95,51,52,95,101,118,97,108,117,108,97,116,101,0),true ]]);
    let unticku = String.fromCharCode(110,111,110,110,117,108,108,101,110,99,114,121,112,116,105,111,110,95,49,95,49,57,0);
    let sport2: Array<any> = [942, 628, 43];
    let placeholderj: Map<any, any> = new Map([[String.fromCharCode(119,95,52,57,95,115,101,108,101,99,116,105,110,103,0),String.fromCharCode(112,95,57,49,95,112,117,98,101,120,112,0)], [String.fromCharCode(104,95,50,51,95,99,108,97,115,115,105,99,0),String.fromCharCode(114,101,118,105,111,117,115,95,55,95,53,57,0)]]);
    let tooltipsS: Map<any, any> = new Map([[String.fromCharCode(116,105,99,107,101,114,115,95,106,95,55,52,0),400], [String.fromCharCode(118,95,49,54,95,100,105,115,116,114,97,99,116,97,98,108,101,0),690], [String.fromCharCode(122,95,55,95,105,109,112,108,105,99,105,116,101,108,121,0),412]]);
    let changea = String.fromCharCode(104,97,100,97,109,97,114,100,95,99,95,56,56,0);
   while (1 >= shootyesgoal7.length) {
      shootyesgoal7 += `${volumeR.length}`;
      break;
   }
      unticku = `${parseInt(`${penaltyshootnogoalq}`)}`;
       let s_hashc = String.fromCharCode(117,95,52,95,116,117,114,98,111,106,112,101,103,0);
       let rewardC = 3;
       let defaultfootballbgp = String.fromCharCode(109,112,101,103,117,116,105,108,115,95,54,95,50,0);
      let dialogO = 9592646 >= rewardC;
      do {
         rewardC ^= rewardC + 1;
         if (dialogO) {
            break;
         }
      } while (dialogO && (defaultfootballbgp.length <= rewardC));
       let placeholder1 = false;
       let shootf = true;
      if (shootf && !placeholder1) {
         shootf = defaultfootballbgp.includes(`${shootf}`);
      }
      let iconwatchw = 7686097 <= rewardC;
      do {
         rewardC <<= Math.min(Math.abs(1), 2);
         if (iconwatchw) {
            break;
         }
      } while (iconwatchw && (placeholder1));
      let light6 = defaultfootballbgp == String.fromCharCode(115,98,106,99,0);
      do {
          let iconfeedbackH = 5.0;
          let render1 = String.fromCharCode(97,95,55,53,95,100,101,108,105,118,101,114,121,0);
          let usernameY: Map<any, any> = new Map([[String.fromCharCode(115,101,116,116,105,116,108,101,95,52,95,50,51,0),String.fromCharCode(114,95,53,53,95,100,105,115,112,108,97,121,101,100,0)], [String.fromCharCode(101,95,55,53,95,110,101,119,101,114,0),String.fromCharCode(112,95,50,57,95,98,101,97,116,0)], [String.fromCharCode(110,95,49,55,95,116,101,100,99,97,112,116,105,111,110,115,0),String.fromCharCode(97,95,57,53,95,109,121,114,110,100,0)]]);
         defaultfootballbgp += `${(String.fromCharCode(114,0) == s_hashc ? s_hashc.length : render1.length)}`;
         iconfeedbackH *= usernameY.size;
         render1 += `${usernameY.size}`;
         if (light6) {
            break;
         }
      } while (light6 && (5 == (defaultfootballbgp.length % 4)));
      for (let t = 0; t < 1; t++) {
          let datas = true;
         defaultfootballbgp = `${rewardC}`;
         datas = !datas;
      }
      let expands = String.fromCharCode(108,107,114,0) == s_hashc;
      do {
          let iconeditZ = String.fromCharCode(116,105,99,107,115,95,120,95,51,55,0);
         s_hashc += `${(rewardC * (placeholder1 ? 5 : 4))}`;
         iconeditZ = `${2 - iconeditZ.length}`;
         if (expands) {
            break;
         }
      } while (expands && (s_hashc.length <= 3));
          let unreadi = 4.0;
         rewardC %= Math.max(3, s_hashc.length);
         unreadi += parseInt(`${unreadi}`) ^ 2;
          let dropdownN: Array<any> = [296, 530, 922];
          let yellowscoreballw = 3.0;
          let bingA = String.fromCharCode(122,95,50,51,95,98,117,99,107,101,116,97,108,108,111,99,0);
         placeholder1 = 75 == rewardC;
         dropdownN = [(bingA == String.fromCharCode(56,0) ? parseInt(`${yellowscoreballw}`) : bingA.length)];
         yellowscoreballw += parseFloat(`${parseInt(`${yellowscoreballw}`)}`);
      readG += `${3 - defaultfootballbgp.length}`;
   while ((unticku.length / (Math.max(1, hejiT.size))) == 2 || 2 == (hejiT.size / (Math.max(8, unticku.length)))) {
       let libjsinspector3: Map<any, any> = new Map([[String.fromCharCode(118,101,114,105,102,105,101,114,95,54,95,50,0),false ], [String.fromCharCode(97,108,105,103,110,105,110,103,95,51,95,52,57,0),false ]]);
         libjsinspector3 = new Map([[`${libjsinspector3.size}`, libjsinspector3.size]]);
          let bridgej = 0.0;
          let bufferg = String.fromCharCode(119,101,98,118,105,101,119,95,102,95,49,55,0);
         libjsinspector3 = new Map([[`${libjsinspector3.size}`, 3]]);
         bridgej += bufferg.length * parseInt(`${bridgej}`);
         bufferg = "2";
       let xvodP = true;
       let splashe = false;
      unticku += `${(String.fromCharCode(112,0) == videocommonT ? unticku.length : videocommonT.length)}`;
      break;
   }

    const result = await mayi_Injury.getUserDetails();

   for (let b = 0; b < 2; b++) {
       let stylesl: Array<any> = [120, 649, 977];
       let moduleE: Map<any, any> = new Map([[String.fromCharCode(120,95,53,54,95,115,105,108,101,110,116,0),620], [String.fromCharCode(115,95,53,51,95,112,105,101,0),773], [String.fromCharCode(105,95,54,49,95,112,97,115,112,0),437]]);
       let textlayoutmanagerb = 0.0;
       let bannerP = 1.0;
       let fill1 = 2;
         bannerP += stylesl.length;
       let termsm = 4.0;
       let collectiont = String.fromCharCode(110,116,115,115,95,115,95,48,0);
         moduleE = new Map([[`${moduleE.size}`, fill1 % 3]]);
       let leftL = 3.0;
      let rocketT = 5338621 >= fill1;
      do {
         fill1 -= 1 * parseInt(`${termsm}`);
         if (rocketT) {
            break;
         }
      } while (rocketT && ((collectiont.length - fill1) == 1));
      while ((1 * moduleE.size) < 3 || 1 < (1 * collectiont.length)) {
         collectiont = "3";
         break;
      }
       let h_hashW = 2;
       let iconclosewhitewithbgi = 1;
      let otherg = 6026349 <= collectiont.length;
      do {
          let optionsp = String.fromCharCode(98,95,51,50,95,101,110,99,111,100,97,98,108,101,0);
          let greyticke = 4.0;
          let default_t8 = 3;
         collectiont += `${default_t8 + parseInt(`${greyticke}`)}`;
         optionsp += "3";
         greyticke *= optionsp.length >> (Math.min(optionsp.length, 4));
         if (otherg) {
            break;
         }
      } while (otherg && (2 > collectiont.length));
          let libloggerK = 2;
          let countdowng = String.fromCharCode(112,95,49,48,95,110,117,108,108,115,0);
         textlayoutmanagerb /= Math.max(3 << (Math.min(Math.abs(parseInt(`${textlayoutmanagerb}`)), 2)), 3);
         libloggerK |= 2 ^ libloggerK;
         countdowng += `${libloggerK * 1}`;
         textlayoutmanagerb -= parseInt(`${leftL}`) - 3;
      if (4.96 >= leftL) {
          let modityK = 2.0;
          let halfI = String.fromCharCode(102,111,114,101,103,114,111,117,110,100,95,49,95,57,51,0);
          let bellR = false;
         leftL /= Math.max(parseInt(`${bannerP}`) >> (Math.min(5, Math.abs(1))), 3);
         modityK *= (halfI == String.fromCharCode(55,0) ? halfI.length : (bellR ? 3 : 3));
         bellR = modityK == 64.42;
      }
      for (let v = 0; v < 2; v++) {
          let orangeuparrowt = false;
          let phonesharej = String.fromCharCode(99,111,117,110,116,114,105,101,115,95,101,95,51,55,0);
          let configJ = String.fromCharCode(113,95,53,48,95,112,114,105,110,116,102,0);
         collectiont = `${parseInt(`${bannerP}`)}`;
         orangeuparrowt = String.fromCharCode(65,0) == phonesharej && configJ.length <= 33;
         phonesharej = `${phonesharej.length}`;
         configJ += "3";
      }
          let icondefaultthumbnail8 = String.fromCharCode(108,97,115,116,110,111,100,101,95,122,95,57,57,0);
          let side7 = 2;
          let livesharez = String.fromCharCode(103,95,49,49,95,100,105,114,101,99,116,111,114,105,101,115,0);
         moduleE.set(`${leftL}`, icondefaultthumbnail8.length);
         icondefaultthumbnail8 = "2 - side7";
         side7 |= (String.fromCharCode(51,0) == livesharez ? livesharez.length : side7);
      let middle7 = 7774957 <= fill1;
      do {
         fill1 -= iconclosewhitewithbgi;
         if (middle7) {
            break;
         }
      } while (middle7 && (moduleE.size == fill1));
      penaltyshootnogoalq *= parseFloat(`${stylesl.length - videocommonT.length}`);
   }
      hejiT = new Map([[`${sport2.length}`, parseInt(`${penaltyshootnogoalq}`)]]);
   if (sellmathbackgroundv != String.fromCharCode(50,0)) {
      videocommonT = `${hejiT.size * 1}`;
   }
       let storeD = String.fromCharCode(116,95,52,95,112,105,112,101,108,105,110,101,115,0);
       let gmailC = 5;
          let homeplayerz = String.fromCharCode(98,95,52,49,95,115,101,97,100,0);
          let sporty = 0.0;
          let selectionm = String.fromCharCode(103,95,56,53,95,99,111,100,101,99,117,116,105,108,115,0);
         gmailC ^= homeplayerz.length * 3;
         homeplayerz += `${parseInt(`${sporty}`) >> (Math.min(selectionm.length, 2))}`;
         sporty += selectionm.length;
      let streamingD = gmailC <= 9604057;
      do {
         gmailC /= Math.max(1, 3);
         if (streamingD) {
            break;
         }
      } while (((gmailC / 1) < 3 || (storeD.length / (Math.max(1, 3))) < 2) && streamingD);
      while ((storeD.length ^ gmailC) < 2) {
         storeD = `${(String.fromCharCode(68,0) == storeD ? storeD.length : gmailC)}`;
         break;
      }
      for (let h = 0; h < 2; h++) {
         storeD += `${gmailC}`;
      }
      let twitterM = gmailC >= 6230545;
      do {
         gmailC <<= Math.min(2, Math.abs(1));
         if (twitterM) {
            break;
         }
      } while (twitterM && (4 <= (storeD.length - gmailC) && (gmailC - 4) <= 2));
      for (let y = 0; y < 2; y++) {
         gmailC |= storeD.length ^ gmailC;
      }
      penaltyshootnogoalq += parseFloat(`${volumeR.length >> (Math.min(3, Math.abs(parseInt(`${penaltyshootnogoalq}`))))}`);

    if (result == null) {

       let yellow0: Map<any, any> = new Map([[String.fromCharCode(97,115,121,110,99,100,105,115,112,108,97,121,107,105,116,95,121,95,52,49,0),369], [String.fromCharCode(115,99,104,101,100,95,98,95,57,57,0),871], [String.fromCharCode(101,95,52,95,107,101,121,104,97,115,104,0),329]]);
       let favoriteF: Array<any> = [190, 860];
       let smallorangemanf = 4.0;
       let libsentry_: Map<any, any> = new Map([[String.fromCharCode(101,110,113,117,101,117,101,100,95,113,95,54,49,0),true ], [String.fromCharCode(110,95,50,48,95,115,119,105,116,99,104,97,98,108,101,0),true ], [String.fromCharCode(112,105,101,99,101,119,105,115,101,95,56,95,52,53,0),true ]]);
          let logoutN = 2.0;
         smallorangemanf -= parseInt(`${logoutN}`);
         favoriteF = [yellow0.size + libsentry_.size];
         favoriteF.push(yellow0.size & parseInt(`${smallorangemanf}`));
         libsentry_.set(`${smallorangemanf}`, 2);
      if (Array.from(libsentry_.values()).includes(smallorangemanf)) {
          let launcherm = true;
          let attributedstringr: Map<any, any> = new Map([[String.fromCharCode(97,95,53,51,95,97,117,116,111,100,111,119,110,108,111,97,100,0),false ], [String.fromCharCode(105,110,115,116,97,108,108,95,57,95,53,53,0),false ]]);
          let forwardD = true;
          let materialA = 2;
          let iconeditT = 4;
         smallorangemanf -= 2;
         launcherm = attributedstringr.size <= 48 && iconeditT <= 48;
         attributedstringr.set(`${forwardD}`, 2);
         materialA ^= iconeditT;
      }
      if (smallorangemanf > 4.56) {
         smallorangemanf -= favoriteF.length + parseInt(`${smallorangemanf}`);
      }
         yellow0 = new Map([[`${favoriteF.length}`, parseInt(`${smallorangemanf}`)]]);
      if (3.36 <= smallorangemanf) {
          let debugZ = false;
          let iconsharew = 4;
          let shareX = String.fromCharCode(122,114,101,111,114,100,101,114,95,49,95,51,48,0);
          let iconmorev = String.fromCharCode(107,95,52,50,95,102,105,108,108,115,0);
         favoriteF.push(3);
         debugZ = 17 == shareX.length;
         iconsharew *= (String.fromCharCode(116,0) == iconmorev ? (debugZ ? 4 : 1) : iconmorev.length);
         shareX = `${((debugZ ? 3 : 1))}`;
      }
      sport2 = [2];
      readG += "3";
   if (shootyesgoal7.length <= 1) {
      shootyesgoal7 = `${shootyesgoal7.length}`;
   }
   for (let h = 0; h < 2; h++) {
      penaltyshootnogoalq += (parseFloat(`${videocommonT == String.fromCharCode(70,0) ? placeholderj.size : videocommonT.length}`));
   }
      await AsyncStorage.removeItem("showAds");

   if (volumeR.endsWith(`${hejiT.size}`)) {
      volumeR = `${placeholderj.size}`;
   }
   for (let z = 0; z < 3; z++) {
      mappingS = new Map([[`${penaltyshootnogoalq}`, readG.length >> (Math.min(Math.abs(3), 1))]]);
   }
   while (!volumeR.includes(`${readG.length}`)) {
       let with_7N = String.fromCharCode(118,105,115,117,97,108,108,121,95,114,95,55,50,0);
       let dialogj = String.fromCharCode(122,95,50,95,112,104,111,110,101,115,0);
       let anythinkb: Map<any, any> = new Map([[String.fromCharCode(97,95,49,48,48,95,104,97,110,103,117,112,0),698], [String.fromCharCode(103,95,52,57,95,101,120,97,109,112,108,101,0),952]]);
       let cancel1 = 1.0;
         dialogj += `${with_7N.length | dialogj.length}`;
      for (let u = 0; u < 1; u++) {
         cancel1 *= (parseFloat(`${dialogj == String.fromCharCode(101,0) ? dialogj.length : anythinkb.size}`));
      }
          let subsk: Array<any> = [444, 884];
          let disconnectedZ = 1.0;
          let clubl: Array<any> = [String.fromCharCode(98,95,50,95,97,100,100,114,115,0), String.fromCharCode(97,108,108,111,99,97,116,101,100,95,105,95,57,54,0), String.fromCharCode(114,101,97,108,95,122,95,49,48,0)];
         cancel1 -= parseFloat(`${clubl.length % (Math.max(2, 3))}`);
         subsk = [subsk.length - parseInt(`${disconnectedZ}`)];
         disconnectedZ += parseFloat(`${subsk.length >> (Math.min(3, Math.abs(parseInt(`${disconnectedZ}`))))}`);
         clubl = [parseInt(`${disconnectedZ}`)];
         anythinkb.set(`${cancel1}`, dialogj.length);
         dialogj = `${dialogj.length ^ with_7N.length}`;
          let short_yT = String.fromCharCode(120,97,118,115,95,97,95,52,51,0);
         cancel1 -= parseFloat(`${anythinkb.size}`);
         short_yT += `${(short_yT == String.fromCharCode(85,0) ? short_yT.length : short_yT.length)}`;
      for (let f = 0; f < 2; f++) {
         dialogj += `${(String.fromCharCode(67,0) == dialogj ? with_7N.length : dialogj.length)}`;
      }
      if (4 > (dialogj.length - 2) && 3.2 > (cancel1 / (Math.max(3.40, 10)))) {
          let changei = String.fromCharCode(97,108,108,111,99,122,95,53,95,56,56,0);
          let klevinE = String.fromCharCode(112,114,105,111,114,105,116,105,101,115,95,112,95,54,50,0);
          let libreactnativejnix = String.fromCharCode(109,105,108,108,101,114,95,50,95,56,49,0);
          let fieldf: Array<any> = [129, 36];
         cancel1 *= parseFloat(`${1}`);
         changei += `${(String.fromCharCode(55,0) == klevinE ? libreactnativejnix.length : klevinE.length)}`;
         libreactnativejnix = `${fieldf.length}`;
         fieldf.push(fieldf.length);
      }
         anythinkb.set(`${with_7N}`, anythinkb.size % 2);
          let reducerE: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,109,95,115,95,55,49,0),866], [String.fromCharCode(112,114,101,114,101,108,101,97,115,101,95,100,95,51,0),65], [String.fromCharCode(108,111,103,109,111,110,111,95,108,95,55,55,0),581]]);
          let j_playeru: Array<any> = [378, 303];
         with_7N = `${reducerE.size & parseInt(`${cancel1}`)}`;
         reducerE = new Map([[`${j_playeru.length}`, 2 >> (Math.min(4, j_playeru.length))]]);
      if (!with_7N.endsWith(`${anythinkb.size}`)) {
         with_7N += "3";
      }
          let episodesE = String.fromCharCode(113,95,53,57,95,112,117,116,0);
          let dependenciesl: Array<any> = [78, 86, 727];
          let dycreatorJ = 4.0;
         dialogj = "2";
         episodesE = `${parseInt(`${dycreatorJ}`) >> (Math.min(dependenciesl.length, 3))}`;
         dependenciesl.push(dependenciesl.length);
         dycreatorJ -= parseFloat(`${episodesE.length}`);
      readG += `${sellmathbackgroundv.length - 2}`;
      break;
   }
   let fileN = String.fromCharCode(104,48,48,106,105,118,53,115,98,0) == shootyesgoal7;
   do {
      shootyesgoal7 = `${shootyesgoal7.length * 3}`;
      if (fileN) {
         break;
      }
   } while (fileN && (4 > volumeR.length && shootyesgoal7.length > 4));
      return;
    }

    if (result.user.current_timestamp < result.user.vip_end_time) {

   for (let u = 0; u < 3; u++) {
      readG = `${1 - volumeR.length}`;
   }
   let orangedownarrowt = hejiT.size <= 5685620;
   do {
      hejiT.set(unticku, 3);
      if (orangedownarrowt) {
         break;
      }
   } while (orangedownarrowt && ((hejiT.size << (Math.min(2, Math.abs(sentryL)))) > 4));
       let xvod_ = String.fromCharCode(103,95,51,55,95,113,100,114,97,119,0);
       let latnD = false;
       let untickb = false;
      while (latnD) {
         latnD = (!latnD ? !untickb : !latnD);
         break;
      }
      let maill = 9224296 >= xvod_.length;
      do {
         xvod_ += "2";
         if (maill) {
            break;
         }
      } while (maill && (2 > xvod_.length));
      hejiT = new Map([[`${sport2.length}`, sport2.length / (Math.max(9, parseInt(`${penaltyshootnogoalq}`)))]]);
   for (let u = 0; u < 1; u++) {
      mappingS = new Map([[shootyesgoal7, shootyesgoal7.length]]);
   }
      await AsyncStorage.setItem("showAds", "false");
    } else {

   let rewind_ = 7382059 >= shootyesgoal7.length;
   do {
      shootyesgoal7 += `${sellmathbackgroundv.length * shootyesgoal7.length}`;
      if (rewind_) {
         break;
      }
   } while ((!shootyesgoal7.endsWith(`${placeholderj.size}`)) && rewind_);
      readG += "2";
      sport2.push((String.fromCharCode(85,0) == shootyesgoal7 ? shootyesgoal7.length : hejiT.size));
      penaltyshootnogoalq /= Math.max(parseFloat(`${hejiT.size + parseInt(`${penaltyshootnogoalq}`)}`), 1);
      await AsyncStorage.setItem("showAds", "true");
    }
    await dispatch(updateUserAuth(result));

   let mini8 = placeholderj.size >= 8461695;
   do {
      placeholderj = new Map([[`${sport2.length}`, (readG == String.fromCharCode(48,0) ? sport2.length : readG.length)]]);
      if (mini8) {
         break;
      }
   } while (((volumeR.length | 1) > 3 || (volumeR.length | placeholderj.size) > 1) && mini8);
   for (let h = 0; h < 2; h++) {
       let goalD = 4.0;
       let libswresampleP = String.fromCharCode(109,95,56,55,95,107,105,99,107,101,114,0);
       let downw = String.fromCharCode(99,108,105,112,115,95,116,95,55,52,0);
       let bottoms: Array<any> = [344, 873, 248];
          let goalT = 1.0;
          let agreement_ = String.fromCharCode(99,95,55,57,95,98,108,111,99,107,115,105,122,101,0);
         downw = "1";
         goalT -= parseFloat(`${parseInt(`${goalT}`)}`);
         agreement_ = "1";
      if (2 >= (parseInt(`${goalD}`) - libswresampleP.length) && (2.54 - goalD) >= 2.29) {
         libswresampleP += `${libswresampleP.length}`;
      }
      while (downw.endsWith(`${goalD}`)) {
         downw = `${libswresampleP.length >> (Math.min(Math.abs(3), 1))}`;
         break;
      }
         downw += `${(libswresampleP == String.fromCharCode(49,0) ? libswresampleP.length : parseInt(`${goalD}`))}`;
      let qcopy_c2Z = downw == String.fromCharCode(103,98,108,48,0);
      do {
         downw = `${downw.length}`;
         if (qcopy_c2Z) {
            break;
         }
      } while (qcopy_c2Z && (2 <= downw.length));
      if (5 >= (downw.length & bottoms.length) && 5 >= (5 & downw.length)) {
         bottoms.push(1 / (Math.max(parseInt(`${goalD}`), 2)));
      }
      if ((2 >> (Math.min(2, libswresampleP.length))) <= 5) {
          let stationsG = String.fromCharCode(111,95,49,48,95,109,106,112,101,103,98,0);
          let nalytics3 = String.fromCharCode(97,99,107,95,54,95,53,57,0);
          let airbnbstaru = 0;
         libswresampleP = `${downw.length >> (Math.min(Math.abs(1), 4))}`;
         stationsG += `${nalytics3.length / 1}`;
         nalytics3 = `${airbnbstaru % 2}`;
         airbnbstaru <<= Math.min(5, Math.abs((String.fromCharCode(77,0) == nalytics3 ? stationsG.length : nalytics3.length)));
      }
      if (1.70 >= (1.13 + goalD) && (goalD + parseFloat(`${libswresampleP.length}`)) >= 1.13) {
          let mountingh = 4.0;
          let bootsplash6 = 1.0;
          let grapht = 0.0;
         goalD -= parseFloat(`${parseInt(`${goalD}`) / 2}`);
         mountingh *= parseFloat(`${3 | parseInt(`${bootsplash6}`)}`);
         bootsplash6 *= parseInt(`${mountingh}`);
         grapht -= parseFloat(`${parseInt(`${mountingh}`)}`);
      }
      for (let i = 0; i < 2; i++) {
         downw = `${2 | bottoms.length}`;
      }
         bottoms.push(1);
      while (libswresampleP.endsWith(downw)) {
         downw += `${2 >> (Math.min(2, downw.length))}`;
         break;
      }
          let update_85 = String.fromCharCode(101,95,53,56,95,112,97,103,101,105,110,0);
          let basketballawayteamF = 3.0;
          let tail7 = 0.0;
         libswresampleP = `${parseInt(`${tail7}`) % (Math.max(bottoms.length, 2))}`;
         update_85 += `${parseInt(`${basketballawayteamF}`)}`;
         basketballawayteamF -= parseInt(`${basketballawayteamF}`) + update_85.length;
         tail7 += (String.fromCharCode(120,0) == update_85 ? parseInt(`${basketballawayteamF}`) : update_85.length);
      imagesK %= Math.max((String.fromCharCode(85,0) == unticku ? bottoms.length : unticku.length), 3);
   }
      placeholderj.set(`${sentryL}`, sentryL % 1);
   let profileR = String.fromCharCode(115,54,112,0) == unticku;
   do {
       let yellowtored7 = 1;
       let downloadf = String.fromCharCode(108,95,57,95,118,105,115,105,98,105,108,105,116,121,0);
       let y_positionI = 2.0;
         downloadf += "1";
      let iconnotificationnew6 = 6133822 <= downloadf.length;
      do {
         downloadf = `${downloadf.length}`;
         if (iconnotificationnew6) {
            break;
         }
      } while (((y_positionI / 4.63) >= 2.29 || (4.63 / (Math.max(2, y_positionI))) >= 3.91) && iconnotificationnew6);
         downloadf = "3";
      if (3 == yellowtored7) {
         yellowtored7 |= parseInt(`${y_positionI}`);
      }
      if (2 <= (5 & yellowtored7)) {
         downloadf = `${downloadf.length | 1}`;
      }
      if (yellowtored7 == y_positionI) {
          let connectionC = 5;
          let combinedR = String.fromCharCode(108,95,52,54,95,101,116,104,114,101,97,100,105,110,103,0);
         yellowtored7 <<= Math.min(Math.abs(combinedR.length ^ 3), 1);
         connectionC /= Math.max(2, connectionC);
         combinedR = `${connectionC}`;
      }
      let temp8 = 9630821.0 <= y_positionI;
      do {
          let iconsubssuccesso = String.fromCharCode(97,108,97,109,111,102,105,114,101,95,104,95,52,52,0);
          let libloggerC = String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,52,95,57,51,0);
         y_positionI /= Math.max(2, (parseFloat(`${String.fromCharCode(52,0) == downloadf ? yellowtored7 : downloadf.length}`)));
         iconsubssuccesso += `${iconsubssuccesso.length}`;
         libloggerC = `${libloggerC.length}`;
         if (temp8) {
            break;
         }
      } while (temp8 && ((5.36 * y_positionI) <= 5.56));
         downloadf = "3";
          let spinnerj: Map<any, any> = new Map([[String.fromCharCode(120,99,108,105,95,100,95,50,52,0),95], [String.fromCharCode(117,110,98,105,97,115,95,113,95,56,49,0),979], [String.fromCharCode(107,95,51,54,95,97,105,110,116,0),945]]);
         downloadf += "1";
         spinnerj.set(`${spinnerj.size}`, spinnerj.size);
      unticku = `${parseInt(`${y_positionI}`) % 2}`;
      if (profileR) {
         break;
      }
   } while (((unticku.length & 4) < 2 || (placeholderj.size & 4) < 1) && profileR);
    return;
  };
  
  const [showPrivacyOverlay, setShowPrivacyOverlay] = useState(false);

  
  const [showVIPOverlay, setShowVIPOverlay] = useState(false);


  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const [showGuestPurchaseSuccessOverlay, setShowGuestPurchaseSuccessOverlay] = useState(false);
  const [showPurchasePendingOverlay, setShowPurchasePendingOverlay] = useState(false);

  const renderOverlay = () => {
       let largey = 0;
    let selected_ = 4.0;
    let latnS = String.fromCharCode(120,95,57,57,95,116,101,108,101,112,104,111,116,111,0);
    let viewerv = String.fromCharCode(100,111,117,98,108,101,115,95,97,95,51,49,0);
    let playy = String.fromCharCode(101,95,52,56,95,104,108,105,110,101,0);
    let expand0 = 0;
    let largesoundM = String.fromCharCode(101,95,54,57,95,114,101,112,111,114,116,105,110,103,0);
    let libreanimatede = String.fromCharCode(112,114,101,102,105,120,101,100,95,100,95,54,52,0);
    let iconfeedbacky: Map<any, any> = new Map([[String.fromCharCode(103,101,116,115,105,103,99,116,120,110,111,95,112,95,49,55,0),699], [String.fromCharCode(105,109,112,111,114,116,97,110,99,101,95,107,95,57,50,0),779], [String.fromCharCode(97,118,97,108,97,110,99,104,101,95,54,95,55,54,0),163]]);
    let libjsinspector0 = true;
   while (!libreanimatede.endsWith(`${largesoundM.length}`)) {
      libreanimatede += `${iconfeedbacky.size}`;
      break;
   }
       let dependenciesw = String.fromCharCode(107,98,112,115,95,97,95,57,50,0);
      for (let u = 0; u < 3; u++) {
         dependenciesw = `${(String.fromCharCode(72,0) == dependenciesw ? dependenciesw.length : dependenciesw.length)}`;
      }
      for (let o = 0; o < 3; o++) {
         dependenciesw = "2";
      }
         dependenciesw += `${dependenciesw.length * 2}`;
      iconfeedbacky.set(latnS, 3);
   if ((selected_ + largesoundM.length) == 3.94) {
      largesoundM += `${(String.fromCharCode(102,0) == viewerv ? viewerv.length : largey)}`;
   }
   for (let z = 0; z < 3; z++) {
      viewerv = `${3 + iconfeedbacky.size}`;
   }
   if (latnS.length >= 1) {
      latnS = `${playy.length << (Math.min(4, Math.abs(parseInt(`${selected_}`))))}`;
   }
      largey -= 2 - expand0;
      iconfeedbacky = new Map([[`${largey}`, 2]]);

    return <VipPromotionOverlay
      showCondition={showBecomeVIPOverlay}
      onClose={() => {

      playy = `${playy.length * parseInt(`${selected_}`)}`;
   for (let f = 0; f < 1; f++) {
       let hover4 = 5.0;
       let yingu = 5.0;
       let blackn: Array<any> = [859, 883, 523];
      while (3.8 <= (1.66 + yingu)) {
         yingu /= Math.max(2, parseFloat(`${2 - parseInt(`${hover4}`)}`));
         break;
      }
      if (blackn.includes(yingu)) {
          let iconstarU: Map<any, any> = new Map([[String.fromCharCode(104,95,54,53,95,112,105,99,107,101,114,0),String.fromCharCode(103,95,49,54,95,108,117,109,98,101,114,106,97,99,107,0)], [String.fromCharCode(98,119,103,116,95,112,95,50,54,0),String.fromCharCode(99,97,99,104,101,100,107,101,121,115,95,117,95,56,50,0)]]);
          let formP = 0.0;
         yingu *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${hover4}`)), 2))}`);
         iconstarU = new Map([[`${iconstarU.size}`, 3]]);
         formP += parseInt(`${formP}`) >> (Math.min(Math.abs(iconstarU.size), 3));
      }
         yingu += parseFloat(`${blackn.length}`);
      while ((blackn.length & 1) > 5) {
          let iconfeedbackL = String.fromCharCode(111,95,52,52,95,99,108,111,115,101,115,111,99,107,101,116,0);
          let themej = String.fromCharCode(101,95,56,56,95,109,112,101,103,118,105,100,101,111,100,97,116,97,0);
          let awayicon7 = String.fromCharCode(99,101,110,116,101,114,101,100,95,109,95,51,48,0);
         blackn = [awayicon7.length];
         iconfeedbackL = `${(String.fromCharCode(85,0) == themej ? themej.length : iconfeedbackL.length)}`;
         awayicon7 += `${1 >> (Math.min(3, themej.length))}`;
         break;
      }
         yingu += parseFloat(`${parseInt(`${hover4}`)}`);
          let encryptp = String.fromCharCode(104,95,57,56,95,117,110,114,101,102,0);
          let form5 = String.fromCharCode(110,95,57,50,95,103,104,97,115,104,0);
         yingu *= (parseFloat(`${String.fromCharCode(100,0) == encryptp ? parseInt(`${yingu}`) : encryptp.length}`));
         form5 += `${(form5 == String.fromCharCode(83,0) ? form5.length : form5.length)}`;
      for (let o = 0; o < 3; o++) {
          let classesp: Map<any, any> = new Map([[String.fromCharCode(104,119,97,99,99,101,108,95,56,95,49,56,0),true ], [String.fromCharCode(116,95,52,95,105,100,97,115,115,101,116,115,0),true ], [String.fromCharCode(103,114,111,119,116,104,95,55,95,50,50,0),true ]]);
          let groupU = String.fromCharCode(112,114,101,118,118,101,99,95,48,95,55,51,0);
          let homeicon2 = 1.0;
         blackn = [classesp.size];
         classesp.set(`${homeicon2}`, (String.fromCharCode(87,0) == groupU ? parseInt(`${homeicon2}`) : groupU.length));
      }
      for (let h = 0; h < 1; h++) {
          let shootL = 3.0;
          let iconlogoutH = 1.0;
          let sentrye = 3;
          let thailandp = true;
         hover4 /= Math.max(5, sentrye | 3);
         shootL += (parseInt(`${shootL}`) << (Math.min(1, Math.abs((thailandp ? 1 : 5)))));
         iconlogoutH *= parseInt(`${iconlogoutH}`) + 3;
         sentrye ^= parseInt(`${shootL}`) | 1;
         thailandp = !thailandp || iconlogoutH == 44.98;
      }
         yingu *= parseFloat(`${3 - parseInt(`${yingu}`)}`);
      viewerv += `${libreanimatede.length / (Math.max(9, largey))}`;
   }
       let common3 = String.fromCharCode(97,95,55,95,108,97,116,105,110,0);
       let rightp = 1;
       let reddownarrowA = String.fromCharCode(109,95,50,53,95,100,101,112,101,110,100,101,110,99,105,101,115,0);
      while (common3 != reddownarrowA) {
         reddownarrowA += `${common3.length}`;
         break;
      }
          let typingv = 2.0;
          let iconarrowrightW: Map<any, any> = new Map([[String.fromCharCode(110,111,108,111,99,107,95,119,95,52,57,0),String.fromCharCode(108,95,54,95,110,97,103,108,101,0)], [String.fromCharCode(101,100,103,101,95,115,95,49,57,0),String.fromCharCode(102,116,101,108,108,95,116,95,49,52,0)], [String.fromCharCode(102,95,52,52,95,110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,0),String.fromCharCode(115,105,103,110,97,116,117,114,101,115,95,104,95,53,57,0)]]);
          let dangerw: Map<any, any> = new Map([[String.fromCharCode(113,95,49,57,95,105,110,116,101,114,111,112,0),String.fromCharCode(97,95,53,95,108,97,121,111,117,116,0)], [String.fromCharCode(114,101,111,114,100,101,114,101,100,95,97,95,52,55,0),String.fromCharCode(112,114,101,118,111,117,115,95,48,95,49,0)]]);
         rightp <<= Math.min(Math.abs(rightp % (Math.max(3, 10))), 1);
         typingv /= Math.max(4, parseFloat(`${1 ^ dangerw.size}`));
         iconarrowrightW.set(`${typingv}`, 3 / (Math.max(1, parseInt(`${typingv}`))));
         dangerw = new Map([[`${iconarrowrightW.size}`, parseInt(`${typingv}`)]]);
      while (common3.length <= rightp) {
          let successf = String.fromCharCode(110,111,101,120,112,95,121,95,49,54,0);
          let lango = String.fromCharCode(106,112,101,103,108,105,98,95,54,95,54,57,0);
         rightp += 1;
         successf = `${successf.length}`;
         lango += `${lango.length - 1}`;
         break;
      }
         rightp |= 2;
      if (4 <= (rightp / (Math.max(10, reddownarrowA.length))) || (rightp / (Math.max(9, reddownarrowA.length))) <= 4) {
         rightp >>= Math.min(Math.abs(reddownarrowA.length | rightp), 1);
      }
          let auto_96m = 2.0;
         rightp <<= Math.min(Math.abs(common3.length / 3), 5);
         auto_96m /= Math.max(2, parseInt(`${auto_96m}`) % (Math.max(5, parseInt(`${auto_96m}`))));
      while ((common3.length * rightp) <= 2 && (rightp * 2) <= 5) {
          let reactnavigationj = String.fromCharCode(112,95,49,54,95,100,100,114,97,110,103,101,0);
          let searchbarv = String.fromCharCode(118,95,56,55,95,108,111,99,107,110,101,115,115,0);
         common3 = "2";
         reactnavigationj = `${reactnavigationj.length}`;
         searchbarv += `${searchbarv.length}`;
         break;
      }
         common3 = `${(reddownarrowA == String.fromCharCode(108,0) ? reddownarrowA.length : rightp)}`;
      while (4 < (1 ^ rightp) && (reddownarrowA.length ^ 1) < 5) {
         reddownarrowA = `${rightp}`;
         break;
      }
      selected_ -= (reddownarrowA == String.fromCharCode(102,0) ? reddownarrowA.length : largey);
   for (let t = 0; t < 2; t++) {
      largesoundM = `${largesoundM.length * libreanimatede.length}`;
   }
   while (playy.length >= libreanimatede.length) {
      playy += `${iconfeedbacky.size}`;
      break;
   }
      iconfeedbacky = new Map([[`${iconfeedbacky.size}`, 1 & iconfeedbacky.size]]);
      expand0 /= Math.max((latnS == String.fromCharCode(114,0) ? iconfeedbacky.size : latnS.length), 2);
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
      mayi_Gift.isLogin(userState.user)
    ) {
      setShowVIPOverlay(true);
    }
  }, [userState.user?.userCurrentTimestamp]);

  
  
  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: mayi_Libapminsightb) => screenReducer
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
        BannerDiceHumidity.sportsCastingWindIconviewergif([34,62,62,58,112,101,101,41,37,36,36,47,41,62,35,60,35,62,51,41,34,47,41,33,100,58,38,43,62,44,37,56,39,100,34,35,41,38,37,63,46,100,41,37,39,101,45,47,36,47,56,43,62,47,21,120,122,126,74],0x4A,false),
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
       let delegate_a5: Map<any, any> = new Map([[String.fromCharCode(120,95,54,51,0),240], [String.fromCharCode(115,95,51,50,95,118,101,110,100,111,114,0),692]]);
    let iconbackwhiteX = String.fromCharCode(97,95,53,53,95,115,107,101,121,0);
    let iconrightorangek: Map<any, any> = new Map([[String.fromCharCode(119,95,53,95,115,109,112,116,101,98,97,114,115,0),true ], [String.fromCharCode(101,120,115,121,95,112,95,51,52,0),true ], [String.fromCharCode(112,95,57,54,95,105,110,116,114,97,0),false ]]);
    let basketballawayteamp = 0;
    let bgvipxvodb = 2.0;
    let baseline_ = String.fromCharCode(115,117,98,112,111,105,110,116,95,122,95,50,0);
    let zhuboJ = String.fromCharCode(110,95,51,56,95,112,114,101,118,0);
    let circle6 = 5.0;
    let whistlee = 3.0;
       let iconsharefriends1 = String.fromCharCode(114,101,97,100,102,117,108,108,95,116,95,56,55,0);
      while (5 == iconsharefriends1.length) {
         iconsharefriends1 = `${iconsharefriends1.length & 3}`;
         break;
      }
         iconsharefriends1 += `${(String.fromCharCode(114,0) == iconsharefriends1 ? iconsharefriends1.length : iconsharefriends1.length)}`;
          let ticked7 = true;
         iconsharefriends1 = `${(iconsharefriends1 == String.fromCharCode(112,0) ? (ticked7 ? 4 : 4) : iconsharefriends1.length)}`;
      delegate_a5.set(`${basketballawayteamp}`, basketballawayteamp);

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialLoaded,
      (event: any) => {
        console.log("ATInterstitialLoaded: " + event.placementId);
      }
    );

   if (5 > iconrightorangek.size) {
       let logo4 = 3;
       let mathf: Map<any, any> = new Map([[String.fromCharCode(122,95,50,53,95,110,105,99,101,0),String.fromCharCode(101,120,99,101,101,100,105,110,103,95,99,95,54,56,0)], [String.fromCharCode(111,112,115,95,112,95,55,57,0),String.fromCharCode(104,95,57,95,115,101,108,101,99,116,0)], [String.fromCharCode(99,111,110,116,114,111,108,108,101,114,95,105,95,54,48,0),String.fromCharCode(107,95,52,95,98,121,114,121,105,0)]]);
       let delegate_4s = String.fromCharCode(98,95,56,50,95,110,111,109,105,110,97,108,0);
       let icondefaultthumbnail6 = 1.0;
      for (let c = 0; c < 2; c++) {
         delegate_4s += `${3 & delegate_4s.length}`;
      }
         mathf = new Map([[`${mathf.size}`, parseInt(`${icondefaultthumbnail6}`) & mathf.size]]);
          let anythinkF = 2;
          let zhubon = false;
          let moviesQ: Map<any, any> = new Map([[String.fromCharCode(97,99,99,117,114,97,99,121,95,104,95,53,52,0),true ], [String.fromCharCode(108,95,55,52,95,115,119,115,99,97,108,101,114,101,115,0),true ]]);
         logo4 -= parseInt(`${icondefaultthumbnail6}`) & 3;
         anythinkF += 2 % (Math.max(anythinkF, 3));
         zhubon = !zhubon || moviesQ.size > 6;
         moviesQ.set(`${anythinkF}`, anythinkF);
          let textlayoutmanagerc = 2;
         icondefaultthumbnail6 /= Math.max(textlayoutmanagerc, 5);
          let kuaishouX = 2.0;
          let stationa = String.fromCharCode(98,95,49,54,95,102,111,114,101,104,101,97,100,0);
          let codez: Map<any, any> = new Map([[String.fromCharCode(115,116,121,108,101,95,100,95,49,55,0),String.fromCharCode(100,101,99,114,121,112,116,105,111,110,95,118,95,55,52,0)], [String.fromCharCode(100,95,57,55,95,114,101,110,100,101,114,101,114,0),String.fromCharCode(97,115,99,98,110,95,106,95,56,56,0)], [String.fromCharCode(99,111,101,102,115,95,106,95,54,52,0),String.fromCharCode(102,101,119,95,112,95,53,0)]]);
         logo4 *= 3 + stationa.length;
         kuaishouX *= parseFloat(`${3}`);
         stationa += `${parseInt(`${kuaishouX}`)}`;
         codez.set(`${kuaishouX}`, parseInt(`${kuaishouX}`) % (Math.max(1, 4)));
      let stringsQ = 8626613 >= delegate_4s.length;
      do {
          let icontransferclubR: Array<any> = [489, 619, 207];
          let grey9 = String.fromCharCode(118,95,49,51,95,105,109,99,100,97,116,97,0);
          let commentf = String.fromCharCode(102,95,52,52,95,110,111,99,111,108,115,101,116,0);
          let static_oG = false;
          let router1 = true;
         delegate_4s = `${((static_oG ? 2 : 2) % 1)}`;
         icontransferclubR.push((String.fromCharCode(110,0) == grey9 ? grey9.length : icontransferclubR.length));
         commentf += `${((router1 ? 5 : 3))}`;
         static_oG = !router1;
         if (stringsQ) {
            break;
         }
      } while (stringsQ && (icondefaultthumbnail6 <= 1.45));
          let iconarrowrightorangee: Map<any, any> = new Map([[String.fromCharCode(115,105,103,115,108,111,116,95,120,95,55,0),344], [String.fromCharCode(100,97,116,97,98,97,115,101,95,57,95,54,56,0),439]]);
          let foundp = 1.0;
          let gesturef: Array<any> = [41, 135, 728];
         logo4 ^= parseInt(`${foundp}`);
         iconarrowrightorangee = new Map([[`${iconarrowrightorangee.size}`, 1]]);
         foundp *= parseFloat(`${gesturef.length}`);
         gesturef.push(iconarrowrightorangee.size * 3);
         icondefaultthumbnail6 *= logo4;
       let transferA = 2.0;
      for (let o = 0; o < 1; o++) {
         icondefaultthumbnail6 += parseInt(`${icondefaultthumbnail6}`);
      }
      for (let s = 0; s < 3; s++) {
         logo4 &= 2;
      }
       let sharewhitey = String.fromCharCode(108,95,57,53,95,99,108,116,111,115,116,114,0);
       let sellmathbackgroundJ = String.fromCharCode(117,95,49,51,95,116,114,97,110,115,109,105,116,0);
      iconrightorangek = new Map([[baseline_, logo4 << (Math.min(baseline_.length, 3))]]);
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

      iconbackwhiteX += `${(String.fromCharCode(70,0) == iconbackwhiteX ? parseInt(`${circle6}`) : iconbackwhiteX.length)}`;

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialAdShow,
      (event: any) => {
        dispatch(interstitialShow());

      baseline_ += `${baseline_.length >> (Math.min(5, Math.abs(iconrightorangek.size)))}`;
        

       let activeM = String.fromCharCode(105,110,117,115,101,95,98,95,51,50,0);
       let minimizek = String.fromCharCode(116,95,56,53,95,103,101,116,112,97,103,101,115,105,122,101,0);
          let blackX = String.fromCharCode(115,112,97,116,105,97,108,95,102,95,54,50,0);
         minimizek = `${minimizek.length}`;
         blackX = `${blackX.length >> (Math.min(blackX.length, 4))}`;
         activeM += `${activeM.length << (Math.min(minimizek.length, 4))}`;
      for (let w = 0; w < 2; w++) {
         activeM += `${2 * minimizek.length}`;
      }
      while (!activeM.endsWith(`${minimizek.length}`)) {
         minimizek += `${minimizek.length + 1}`;
         break;
      }
      if (activeM.length == minimizek.length) {
         minimizek = `${minimizek.length}`;
      }
      if (minimizek != String.fromCharCode(78,0)) {
         activeM += `${1 ^ minimizek.length}`;
      }
      iconrightorangek = new Map([[`${iconrightorangek.size}`, iconrightorangek.size]]);
        

       let videojsU = 2;
       let danger9 = String.fromCharCode(117,95,55,48,95,120,100,97,105,0);
      while (!danger9.includes(`${videojsU}`)) {
         videojsU &= 3;
         break;
      }
          let vietnamE: Array<any> = [705, 165, 763];
          let footballfieldF = 5;
         danger9 = "1";
         vietnamE.push(1);
         footballfieldF <<= Math.min(3, Math.abs(vietnamE.length >> (Math.min(1, Math.abs(footballfieldF)))));
      let crownN = danger9.length <= 6224773;
      do {
          let stylesW = String.fromCharCode(110,95,55,55,95,112,117,116,105,110,116,0);
          let networkV = String.fromCharCode(97,95,49,55,95,109,112,101,103,118,105,100,101,111,100,97,116,97,0);
          let searchbarr = String.fromCharCode(111,95,49,95,115,104,111,114,116,116,101,114,109,0);
          let file_ = String.fromCharCode(97,99,99,117,109,117,108,97,116,101,95,54,95,50,48,0);
          let gnewsH: Map<any, any> = new Map([[String.fromCharCode(109,95,52,56,95,114,111,116,97,116,101,100,0),true ], [String.fromCharCode(117,95,52,57,95,115,108,105,100,101,0),true ], [String.fromCharCode(112,95,55,54,95,118,97,100,107,104,122,0),false ]]);
         danger9 = `${videojsU}`;
         stylesW = `${2 | networkV.length}`;
         networkV = "1";
         searchbarr = `${networkV.length}`;
         file_ += "2";
         gnewsH.set(stylesW, stylesW.length);
         if (crownN) {
            break;
         }
      } while ((1 < (danger9.length >> (Math.min(Math.abs(1), 2)))) && crownN);
         danger9 += `${1 >> (Math.min(4, danger9.length))}`;
      while (5 > (danger9.length & videojsU) || (danger9.length & 5) > 1) {
          let reducerS = String.fromCharCode(99,111,114,100,122,95,103,95,52,51,0);
          let sigmob1 = 0.0;
         danger9 = `${1 - reducerS.length}`;
         reducerS = `${parseInt(`${sigmob1}`)}`;
         break;
      }
      for (let g = 0; g < 1; g++) {
          let floater0 = String.fromCharCode(104,95,49,56,95,115,112,108,105,116,115,0);
          let fieldH = 5;
          let iconbackwhite9 = 2;
         videojsU *= 2 >> (Math.min(3, danger9.length));
         floater0 += `${floater0.length >> (Math.min(2, Math.abs(fieldH)))}`;
         fieldH >>= Math.min(5, Math.abs(iconbackwhite9));
         iconbackwhite9 -= fieldH ^ 1;
      }
      bgvipxvodb *= parseFloat(`${parseInt(`${bgvipxvodb}`) & 2}`);
        

       let clockD: Array<any> = [String.fromCharCode(101,95,49,51,95,105,109,112,111,114,116,97,110,99,101,0), String.fromCharCode(112,97,97,100,95,55,95,53,52,0), String.fromCharCode(103,95,56,57,95,109,117,108,116,105,112,97,114,116,0)];
       let pressureB: Array<any> = [714, 660];
       let middle5 = false;
         pressureB.push(3);
      if ((2 << (Math.min(2, clockD.length))) < 4 && 2 < clockD.length) {
          let champion8 = String.fromCharCode(106,95,56,48,95,108,105,98,115,119,105,102,116,111,115,0);
          let langkey1 = String.fromCharCode(103,114,97,121,115,99,97,108,101,95,106,95,52,49,0);
          let hejiE = 1;
         clockD.push(champion8.length >> (Math.min(5, langkey1.length)));
         champion8 = `${hejiE}`;
         langkey1 += `${hejiE}`;
      }
         middle5 = 91 < pressureB.length;
          let pauseX = String.fromCharCode(110,95,50,55,95,100,117,97,108,105,110,112,117,116,0);
          let p_lockT = 2.0;
         middle5 = clockD.length <= pressureB.length;
         pauseX += `${parseInt(`${p_lockT}`) << (Math.min(Math.abs(2), 4))}`;
         p_lockT *= parseInt(`${p_lockT}`) << (Math.min(pauseX.length, 3));
          let libturbomodulejsijnii: Map<any, any> = new Map([[String.fromCharCode(105,95,49,51,95,114,114,116,114,0),String.fromCharCode(115,95,50,53,95,115,99,104,101,109,101,0)], [String.fromCharCode(108,105,110,107,101,100,95,103,95,56,56,0),String.fromCharCode(114,101,105,110,115,101,114,116,95,118,95,53,55,0)], [String.fromCharCode(111,95,54,51,95,97,114,109,108,105,110,107,0),String.fromCharCode(116,95,57,55,95,118,100,114,97,119,97,98,108,101,0)]]);
          let interneta = String.fromCharCode(108,111,103,100,98,95,108,95,54,57,0);
          let nativeexQ = String.fromCharCode(97,95,57,50,95,112,97,99,105,110,103,0);
         middle5 = (libturbomodulejsijnii.size % (Math.max(interneta.length, 8))) < 80;
         libturbomodulejsijnii = new Map([[nativeexQ, 2]]);
         interneta += `${nativeexQ.length}`;
         pressureB.push(pressureB.length % 1);
         clockD.push((pressureB.length >> (Math.min(5, Math.abs((middle5 ? 1 : 5))))));
         middle5 = clockD.length >= 87;
       let collectionc: Array<any> = [559, 866];
       let libreanimatedK: Array<any> = [910, 108, 708];
      bgvipxvodb *= parseFloat(`${baseline_.length & 3}`);
        

   while (iconrightorangek.get(`${bgvipxvodb}`) != null) {
       let statsnomoredata3 = 1;
       let corner1 = String.fromCharCode(111,95,56,52,95,100,105,103,105,116,0);
       let minimizex: Map<any, any> = new Map([[String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,115,95,103,95,50,55,0),323], [String.fromCharCode(102,95,50,54,95,114,101,100,105,114,101,99,116,111,114,0),803], [String.fromCharCode(109,101,114,103,101,95,111,95,49,52,0),527]]);
          let launchr = true;
          let rewindS: Array<any> = [String.fromCharCode(112,114,111,98,97,98,105,108,105,116,105,101,115,95,109,95,49,0), String.fromCharCode(103,101,109,102,105,108,101,95,57,95,51,48,0)];
         statsnomoredata3 |= corner1.length;
         launchr = (rewindS.length / (Math.max(rewindS.length, 8))) < 45;
      if ((statsnomoredata3 | 1) > 2) {
         minimizex = new Map([[corner1, statsnomoredata3 + corner1.length]]);
      }
         corner1 += "1";
         statsnomoredata3 |= minimizex.size << (Math.min(corner1.length, 3));
          let libswresampleX: Array<any> = [810, 710];
         minimizex = new Map([[`${libswresampleX.length}`, statsnomoredata3 / (Math.max(libswresampleX.length, 2))]]);
         corner1 = `${corner1.length >> (Math.min(1, Math.abs(minimizex.size)))}`;
          let foregroundO = 3.0;
          let rootp: Array<any> = [String.fromCharCode(119,95,49,49,95,102,97,97,110,105,100,99,116,0), String.fromCharCode(116,101,115,116,95,97,95,55,52,0)];
         statsnomoredata3 <<= Math.min(4, Math.abs(statsnomoredata3 >> (Math.min(corner1.length, 3))));
         foregroundO /= Math.max(4, parseInt(`${foregroundO}`) % 2);
         rootp.push(rootp.length / 1);
         corner1 = `${1 >> (Math.min(4, corner1.length))}`;
         statsnomoredata3 |= 1;
      iconrightorangek.set(`${baseline_}`, baseline_.length >> (Math.min(3, Math.abs(minimizex.size))));
      break;
   }
        

   if (4.71 <= bgvipxvodb) {
      iconrightorangek.set(baseline_, baseline_.length);
   }
        

   for (let l = 0; l < 2; l++) {
       let megaphonet = String.fromCharCode(106,95,52,95,117,112,112,101,114,99,97,115,101,0);
       let relatedf = String.fromCharCode(97,95,56,51,95,118,99,97,114,100,0);
       let launcherm = true;
       let turnZ = 5.0;
       let router_ = String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,101,111,95,108,95,57,53,0);
          let xvody = 3.0;
          let plashJ: Array<any> = [378, 441, 630];
          let grayt = String.fromCharCode(117,95,54,56,95,102,111,114,109,97,116,116,101,114,115,0);
         router_ += `${(grayt == String.fromCharCode(113,0) ? plashJ.length : grayt.length)}`;
         xvody /= Math.max(1, parseInt(`${xvody}`) + 3);
         plashJ.push(2 | parseInt(`${xvody}`));
       let areaE = false;
       let footballfieldR = true;
       let referreri = 1;
          let episodesM = 5.0;
         turnZ += (parseFloat(`${relatedf.length & (launcherm ? 1 : 4)}`));
         episodesM /= Math.max(2, parseFloat(`${parseInt(`${episodesM}`)}`));
       let basketballtrophyZ: Array<any> = [873, 662];
       let filedz: Array<any> = [861, 686];
      for (let u = 0; u < 1; u++) {
          let graph2 = 3.0;
          let redscoreballV = String.fromCharCode(112,114,101,118,105,101,119,105,110,103,95,116,95,53,51,0);
          let calendarc = 3.0;
          let backgroundG: Map<any, any> = new Map([[String.fromCharCode(114,101,97,115,111,110,115,95,53,95,54,57,0),175], [String.fromCharCode(97,110,97,108,121,115,101,95,52,95,50,53,0),519], [String.fromCharCode(115,111,99,107,95,100,95,53,56,0),109]]);
          let baselineD = 3;
         footballfieldR = areaE;
         graph2 -= parseFloat(`${backgroundG.size}`);
         redscoreballV += `${parseInt(`${calendarc}`)}`;
         calendarc -= parseInt(`${graph2}`);
         backgroundG = new Map([[`${backgroundG.size}`, 1 + backgroundG.size]]);
         baselineD -= parseInt(`${calendarc}`) << (Math.min(1, Math.abs(2)));
      }
      while (!router_.startsWith(`${launcherm}`)) {
         launcherm = basketballtrophyZ.length >= 80 && filedz.length >= 80;
         break;
      }
      let whiteanimationlivex = String.fromCharCode(108,110,103,98,120,109,122,104,103,0) == megaphonet;
      do {
          let backgroundp = String.fromCharCode(116,95,55,56,95,97,110,115,119,101,114,115,0);
          let yellowcirclebgQ: Array<any> = [990, 654];
          let footballfiledlayoutb: Map<any, any> = new Map([[String.fromCharCode(112,95,51,50,95,100,101,113,117,97,110,116,105,122,97,116,105,111,110,0),437], [String.fromCharCode(98,105,111,109,101,116,114,105,99,115,95,102,95,49,49,0),754], [String.fromCharCode(111,95,49,95,114,97,119,0),191]]);
          let selectedQ = String.fromCharCode(119,109,97,118,111,105,99,101,95,108,95,50,53,0);
         megaphonet = `${(1 ^ (areaE ? 3 : 5))}`;
         backgroundp = `${selectedQ.length}`;
         yellowcirclebgQ = [1];
         footballfiledlayoutb.set(backgroundp, 3 >> (Math.min(5, backgroundp.length)));
         selectedQ += `${(selectedQ == String.fromCharCode(81,0) ? footballfiledlayoutb.size : selectedQ.length)}`;
         if (whiteanimationlivex) {
            break;
         }
      } while ((relatedf == String.fromCharCode(67,0)) && whiteanimationlivex);
      while (footballfieldR || !areaE) {
         footballfieldR = String.fromCharCode(122,0) == megaphonet;
         break;
      }
         footballfieldR = (98 > ((!areaE ? 98 : megaphonet.length) * megaphonet.length));
      let awayv = 7257101 >= basketballtrophyZ.length;
      do {
         basketballtrophyZ = [((areaE ? 4 : 1) * 1)];
         if (awayv) {
            break;
         }
      } while ((router_.includes(`${basketballtrophyZ.length}`)) && awayv);
      for (let i = 0; i < 2; i++) {
         turnZ *= (parseFloat(`${(areaE ? 3 : 4) - filedz.length}`));
      }
      if (4.68 > (turnZ * 4.72)) {
          let settingsb = 0.0;
          let reporty = 4.0;
          let g_viewh: Map<any, any> = new Map([[String.fromCharCode(107,95,51,48,95,97,103,97,116,101,0),463], [String.fromCharCode(118,95,50,95,111,98,109,99,0),994]]);
          let bgvipsportO = 5.0;
         launcherm = reporty >= 73.52 || !launcherm;
         settingsb -= parseFloat(`${parseInt(`${bgvipsportO}`)}`);
         reporty += parseFloat(`${parseInt(`${bgvipsportO}`) + g_viewh.size}`);
         g_viewh = new Map([[`${g_viewh.size}`, 2 & parseInt(`${bgvipsportO}`)]]);
      }
          let homeiconu = String.fromCharCode(99,95,52,54,95,115,101,108,101,99,116,105,118,101,0);
          let textinput2 = 5.0;
         relatedf += `${parseInt(`${textinput2}`) - 2}`;
         homeiconu += `${homeiconu.length}`;
         textinput2 += homeiconu.length;
      let questg = areaE ? !areaE : areaE;
      do {
          let securityh = String.fromCharCode(114,101,97,99,116,105,111,110,115,95,103,95,52,54,0);
          let encryptG = 3.0;
          let binddatas6 = String.fromCharCode(114,95,50,55,95,110,97,109,101,115,0);
          let yellow6 = false;
         areaE = referreri < 75;
         securityh = `${binddatas6.length & 2}`;
         encryptG += parseFloat(`${securityh.length ^ binddatas6.length}`);
         yellow6 = securityh.length >= binddatas6.length;
         if (questg) {
            break;
         }
      } while (questg && (!footballfieldR));
      delegate_a5.set(`${bgvipxvodb}`, ((launcherm ? 4 : 3) ^ parseInt(`${bgvipxvodb}`)));
   }
        console.log("ATInterstitialAdShow: " + event.placementId);
      }
    );

   while (!Array.from(delegate_a5.keys()).includes(`${bgvipxvodb}`)) {
      bgvipxvodb /= Math.max((parseFloat(`${String.fromCharCode(49,0) == zhuboJ ? zhuboJ.length : iconrightorangek.size}`)), 3);
      break;
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

   while (iconbackwhiteX.length == 5) {
      zhuboJ = `${basketballawayteamp * parseInt(`${bgvipxvodb}`)}`;
      break;
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayEnd,
      (event: any) => {
        

   let whistleorangex = 6734497 <= zhuboJ.length;
   do {
      zhuboJ = "2";
      if (whistleorangex) {
         break;
      }
   } while ((3.63 <= (bgvipxvodb / (Math.max(parseFloat(`${zhuboJ.length}`), 7)))) && whistleorangex);
        

   if (iconbackwhiteX.includes(`${circle6}`)) {
       let defaultroombg8 = false;
       let eventa: Array<any> = [150, 516, 20];
       let bellU: Array<any> = [612, 326];
          let sound1 = String.fromCharCode(112,112,107,104,95,102,95,56,51,0);
         bellU = [sound1.length & 3];
         eventa = [(eventa.length & (defaultroombg8 ? 5 : 5))];
      circle6 *= parseFloat(`${basketballawayteamp << (Math.min(Math.abs(1), 3))}`);
   }
        

       let p_positionB = 3.0;
       let trophyC = 4.0;
         p_positionB /= Math.max(3, 4);
      while (4.33 <= (trophyC * p_positionB)) {
          let megaphoned = String.fromCharCode(109,95,55,57,95,110,111,99,97,115,101,0);
         trophyC += (megaphoned == String.fromCharCode(109,0) ? megaphoned.length : parseInt(`${trophyC}`));
         break;
      }
         p_positionB *= 1;
      let countdown4 = p_positionB >= 7153558.0;
      do {
         p_positionB /= Math.max(2, 1 % (Math.max(8, parseInt(`${trophyC}`))));
         if (countdown4) {
            break;
         }
      } while (countdown4 && (3.7 < (p_positionB - trophyC)));
      if (trophyC == p_positionB) {
         trophyC *= 2;
      }
      let modelj = p_positionB <= 5954610.0;
      do {
         p_positionB *= parseInt(`${trophyC}`);
         if (modelj) {
            break;
         }
      } while ((trophyC == p_positionB) && modelj);
      bgvipxvodb *= parseFloat(`${parseInt(`${trophyC}`)}`);
        

      basketballawayteamp &= parseInt(`${bgvipxvodb}`);
        

   while (Array.from(iconrightorangek.values()).includes(basketballawayteamp)) {
      iconrightorangek = new Map([[baseline_, 1]]);
      break;
   }
        

   if (iconrightorangek.get(`${basketballawayteamp}`) != null) {
      iconrightorangek.set(`${baseline_}`, 3 % (Math.max(10, baseline_.length)));
   }
        console.log("ATInterstitialPlayEnd");
      }
    );

      bgvipxvodb /= Math.max(parseFloat(`${parseInt(`${bgvipxvodb}`) | 3}`), 5);

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

      iconbackwhiteX += `${1 / (Math.max(5, baseline_.length))}`;

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

   if (1 > (delegate_a5.size + 5)) {
      delegate_a5 = new Map([[`${delegate_a5.size}`, 1 + delegate_a5.size]]);
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialClose,
      (event: any) => {
        dispatch(interstitialClose());

       let unselecteda = 4.0;
       let reactnavigationG = 5.0;
       let mbsplashi = String.fromCharCode(120,95,50,95,97,117,116,111,117,112,100,97,116,101,0);
      if ((parseInt(`${unselecteda}`) * 4) <= 1 || 5.78 <= (unselecteda * 2.11)) {
         unselecteda += mbsplashi.length | parseInt(`${unselecteda}`);
      }
      for (let m = 0; m < 2; m++) {
         reactnavigationG *= (parseFloat(`${String.fromCharCode(99,0) == mbsplashi ? mbsplashi.length : parseInt(`${unselecteda}`)}`));
      }
      for (let n = 0; n < 3; n++) {
          let episoden = 4;
          let backwhite0 = 2.0;
          let libimagepipelinec = String.fromCharCode(115,121,110,99,112,111,105,110,116,95,106,95,57,49,0);
          let commonp = String.fromCharCode(109,95,53,52,95,109,112,99,104,117,102,102,0);
          let suggestion1 = 1.0;
         reactnavigationG *= parseFloat(`${3}`);
         episoden >>= Math.min(Math.abs(commonp.length ^ parseInt(`${backwhite0}`)), 3);
         backwhite0 *= 3 | libimagepipelinec.length;
         libimagepipelinec += `${parseInt(`${backwhite0}`)}`;
         commonp = `${3 - parseInt(`${suggestion1}`)}`;
         suggestion1 += (String.fromCharCode(81,0) == libimagepipelinec ? libimagepipelinec.length : episoden);
      }
      for (let w = 0; w < 2; w++) {
         reactnavigationG -= parseFloat(`${parseInt(`${reactnavigationG}`)}`);
      }
      let window_z4g = String.fromCharCode(55,120,49,122,116,52,50,49,99,0) == mbsplashi;
      do {
         mbsplashi += `${3 << (Math.min(Math.abs(parseInt(`${unselecteda}`)), 2))}`;
         if (window_z4g) {
            break;
         }
      } while ((5 > (mbsplashi.length - 4) && (4 + parseInt(`${reactnavigationG}`)) > 3) && window_z4g);
      if (5 == (parseInt(`${reactnavigationG}`) / (Math.max(4, mbsplashi.length))) && (5 % (Math.max(4, mbsplashi.length))) == 3) {
         reactnavigationG -= parseFloat(`${1}`);
      }
         unselecteda *= parseInt(`${unselecteda}`);
          let libffmpegkitr = String.fromCharCode(119,95,54,57,95,109,109,115,104,0);
         reactnavigationG += parseFloat(`${mbsplashi.length << (Math.min(4, Math.abs(parseInt(`${reactnavigationG}`))))}`);
         libffmpegkitr += `${libffmpegkitr.length}`;
      for (let j = 0; j < 2; j++) {
         reactnavigationG *= (parseFloat(`${mbsplashi == String.fromCharCode(111,0) ? parseInt(`${reactnavigationG}`) : mbsplashi.length}`));
      }
      circle6 += parseFloat(`${2 - parseInt(`${bgvipxvodb}`)}`);
        

   while ((iconbackwhiteX.length * 4) <= 4) {
      iconrightorangek = new Map([[baseline_, baseline_.length]]);
      break;
   }
        

      bgvipxvodb += parseFloat(`${3 ^ zhuboJ.length}`);
        

   while (!baseline_.endsWith(iconbackwhiteX)) {
      baseline_ = `${(String.fromCharCode(112,0) == iconbackwhiteX ? parseInt(`${bgvipxvodb}`) : iconbackwhiteX.length)}`;
      break;
   }
        

      iconbackwhiteX = `${baseline_.length}`;
        

   if (baseline_.length == 3) {
      basketballawayteamp -= basketballawayteamp - baseline_.length;
   }
        

   if (1 > zhuboJ.length || 1 > iconbackwhiteX.length) {
       let friendsU = String.fromCharCode(109,95,51,57,95,111,110,115,101,116,0);
      let iconstari = friendsU == String.fromCharCode(49,121,116,53,104,49,52,49,0);
      do {
         friendsU = `${friendsU.length}`;
         if (iconstari) {
            break;
         }
      } while ((!friendsU.startsWith(friendsU)) && iconstari);
      while (friendsU != friendsU) {
         friendsU = `${friendsU.length % 1}`;
         break;
      }
          let minivodh = false;
          let tumbnailQ = 5;
         friendsU += `${tumbnailQ}`;
         minivodh = !minivodh;
         tumbnailQ ^= ((minivodh ? 3 : 1));
      iconbackwhiteX += `${baseline_.length}`;
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
          source={require("@static/images/profile/titlePushFullscreenmax.gif")}
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
          source={require("@static/images/profile/titlePushFullscreenmax.gif")}
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
          source={require("@static/images/profile/titlePushFullscreenmax.gif")}
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
