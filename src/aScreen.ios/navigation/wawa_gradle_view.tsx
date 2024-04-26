

class OptionsEventsplashLogo {
    static sportsHandlerHomeactiveQaag = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { AllCommentScreen } from "../screens/wawa_line";
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
import HotSearchTabIcon from "@static/images/iconlogoutRelated.svg";
import HotSearchActiveTabIcon from "@static/images/iconlogoutRelated.svg";
import CatalogScreen from "../screens/Common/wawa_imagewatchlive_invite";
import ShortVodCollectionScreen from "../screens/Profile/Collection/wawa_actions_whitesmalltick";
import SportsIcon from "@static/images/newarchdefaultsInvite.svg";
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
import { LogBox, Platform, StyleSheet, Text, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/wawa_root";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_DOMAIN, UMENG_CHANNEL } from "@utility/wawa_iconpointscore";
import { wawaBasketballiconPenaltyshootnogoal } from "../../../wawa_shareblack_orientation";
import {
  hideLoginAction,
  interstitialClose,
  interstitialShow,
  removeScreenAction,
  resetBottomSheetAction,
  resetSportWatchTime,
} from "@redux/actions/wawa_related";
import { Dialog } from "@rneui/themed";
import FastImage from "../components/common/wawa_iconarrowrightblack";
import { screenModel } from "@type/wawa_rules";
import { YingshiDarkTheme, YingshiLightTheme } from "@utility/wawa_libswscale_reactnavigation";
import {
  updateUserAuth,
  updateUserReferral,
} from "@redux/actions/wawa_loginsuccess";
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
import { AdsBannerContext } from "../../contexts/wawa_analytics";
import VIP from "../screens/Profile/wawa_right";
import { withIAPContext } from "react-native-iap";
import { VipDetails } from "../components/vip/wawa_adult";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { ATInterstitialRNSDK } from "./../../../AnyThinkAds/wawa_tick";
import { wawaEvent } from "@api";
import { CRouteInitializer } from "../../routes/wawa_playlist_casting";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";
import Rank from "@iosScreen/screens/HotSearch/wawa_history_manager";
import { UploadVideoPreview } from "@iosScreen/screens/upload/wawa_dropdown_view";
import { UploadHistory } from "@iosScreen/screens/upload/wawa_data";
import { UploadVideo } from "@iosScreen/screens/upload/wawa_iconnewchat_down";

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

  const HomeTabScreen = useCallback(() => {
       let libmapbufferjniX = false;
    let disconnectedk = 2.0;
    let circleb = String.fromCharCode(116,117,110,101,95,49,95,50,49,0);
    let goallogor = 2.0;
    let upgradem = String.fromCharCode(101,99,108,95,115,95,50,0);
    let phonesharee = String.fromCharCode(118,95,53,51,95,106,117,115,116,105,102,121,0);
    let libreanimatedp = 2.0;
    let bridgea = true;
    let floating2 = String.fromCharCode(116,101,115,115,101,108,97,116,111,114,95,53,95,49,48,48,0);
   let predictionbannersharedq = 7727053 >= floating2.length;
   do {
       let imagemanager0 = 2.0;
       let iconuserN = String.fromCharCode(115,99,97,108,97,114,112,114,111,100,117,99,116,95,104,95,55,54,0);
       let overH = String.fromCharCode(110,95,52,95,108,111,116,116,105,101,107,101,121,112,97,116,104,0);
       let stylesz: Array<any> = [576, 828];
       let leakchecker4 = String.fromCharCode(114,95,52,50,95,106,115,105,109,100,100,99,116,0);
      for (let e = 0; e < 1; e++) {
         overH += `${stylesz.length}`;
      }
      let iconbellactived = 6894772.0 >= imagemanager0;
      do {
         imagemanager0 *= 1 ^ overH.length;
         if (iconbellactived) {
            break;
         }
      } while ((2.79 == imagemanager0) && iconbellactived);
      let delegate_wD = overH == String.fromCharCode(104,120,122,95,0);
      do {
         overH += `${stylesz.length * parseInt(`${imagemanager0}`)}`;
         if (delegate_wD) {
            break;
         }
      } while ((iconuserN != String.fromCharCode(75,0)) && delegate_wD);
      while ((3 >> (Math.min(2, leakchecker4.length))) <= 1) {
         stylesz.push(iconuserN.length);
         break;
      }
      for (let q = 0; q < 2; q++) {
          let iconchatsendy = String.fromCharCode(113,117,111,116,101,115,95,113,95,57,53,0);
          let bodano: Array<any> = [String.fromCharCode(110,95,51,50,95,97,100,100,101,100,0), String.fromCharCode(100,101,109,97,116,101,114,105,97,108,105,122,101,95,106,95,56,51,0)];
          let untickV = String.fromCharCode(97,115,110,95,102,95,52,53,0);
          let long_uat = 3.0;
          let borderlessA: Array<any> = [365, 395];
         stylesz.push(overH.length);
         iconchatsendy += `${iconchatsendy.length}`;
         bodano.push((iconchatsendy == String.fromCharCode(69,0) ? iconchatsendy.length : bodano.length));
         untickV += `${parseInt(`${long_uat}`)}`;
         long_uat += parseFloat(`${1 >> (Math.min(5, iconchatsendy.length))}`);
         borderlessA.push(parseInt(`${long_uat}`));
      }
      let liveendmodallogoe = leakchecker4 == String.fromCharCode(51,110,104,116,99,0);
      do {
          let notificationfillemptyJ = 5.0;
          let formB: Array<any> = [806, 505, 175];
          let formu = String.fromCharCode(97,115,115,101,114,116,115,95,49,95,51,49,0);
         leakchecker4 = `${(iconuserN == String.fromCharCode(120,0) ? iconuserN.length : leakchecker4.length)}`;
         notificationfillemptyJ -= parseInt(`${notificationfillemptyJ}`);
         formB = [(formu == String.fromCharCode(72,0) ? formB.length : formu.length)];
         if (liveendmodallogoe) {
            break;
         }
      } while (liveendmodallogoe && (2 <= leakchecker4.length));
      while ((leakchecker4.length + stylesz.length) >= 5 || 5 >= (stylesz.length + leakchecker4.length)) {
         stylesz.push((leakchecker4 == String.fromCharCode(55,0) ? parseInt(`${imagemanager0}`) : leakchecker4.length));
         break;
      }
       let package_vyU = 3;
       let zhengpianm = 3;
      for (let o = 0; o < 3; o++) {
         zhengpianm /= Math.max(5, stylesz.length);
      }
       let giftbuttonh = 1;
      for (let c = 0; c < 2; c++) {
         leakchecker4 = `${2 - leakchecker4.length}`;
      }
         overH = `${parseInt(`${imagemanager0}`) - stylesz.length}`;
      for (let p = 0; p < 2; p++) {
         zhengpianm |= overH.length << (Math.min(1, iconuserN.length));
      }
         imagemanager0 += iconuserN.length;
         zhengpianm -= (iconuserN == String.fromCharCode(101,0) ? iconuserN.length : zhengpianm);
      floating2 = `${((libmapbufferjniX ? 3 : 3) ^ parseInt(`${goallogor}`))}`;
      if (predictionbannersharedq) {
         break;
      }
   } while ((circleb != floating2) && predictionbannersharedq);
       let actionsf = String.fromCharCode(116,99,112,95,121,95,52,51,0);
         actionsf = `${1 >> (Math.min(4, actionsf.length))}`;
         actionsf += `${actionsf.length}`;
         actionsf = "2";
      floating2 = `${3 | floating2.length}`;
   while (!libmapbufferjniX) {
      disconnectedk -= (parseFloat(`${String.fromCharCode(95,0) == circleb ? circleb.length : parseInt(`${goallogor}`)}`));
      break;
   }
   for (let k = 0; k < 1; k++) {
       let jnewssharen: Array<any> = [970, 980];
       let dacccfaabfbcbadeebddcabacdffdbt = String.fromCharCode(106,95,56,57,95,108,105,98,120,109,108,0);
       let libjsie = 1;
      for (let u = 0; u < 3; u++) {
          let libjsiZ = true;
          let inouttargetredk = 3;
          let iconarrowleft5 = String.fromCharCode(112,97,116,104,115,95,107,95,53,50,0);
          let modeQ = String.fromCharCode(112,107,101,121,95,107,95,57,57,0);
          let codeH = String.fromCharCode(99,97,116,99,104,97,98,108,101,95,101,95,53,49,0);
         jnewssharen.push(3);
         libjsiZ = 90 >= inouttargetredk;
         inouttargetredk /= Math.max(2 + iconarrowleft5.length, 3);
         iconarrowleft5 += `${inouttargetredk}`;
         modeQ += `${inouttargetredk + 3}`;
         codeH += `${(String.fromCharCode(100,0) == modeQ ? modeQ.length : iconarrowleft5.length)}`;
      }
       let v_centeri = String.fromCharCode(112,95,51,57,0);
       let main_jn = String.fromCharCode(103,95,56,53,95,114,101,97,100,113,0);
         v_centeri = `${dacccfaabfbcbadeebddcabacdffdbt.length % 2}`;
       let sentrya = String.fromCharCode(106,95,50,53,95,99,97,114,111,117,115,101,108,0);
      for (let i = 0; i < 2; i++) {
          let libturbomodulejsijni8: Array<any> = [999, 238, 129];
          let inewsshareu = String.fromCharCode(108,95,53,52,95,108,111,99,97,108,101,0);
          let filledb = String.fromCharCode(101,95,53,53,95,97,100,118,97,110,99,101,100,0);
          let predictionbuttonV = String.fromCharCode(97,115,115,111,99,105,97,116,105,111,110,95,48,95,54,50,0);
         sentrya = `${v_centeri.length * 1}`;
         libturbomodulejsijni8 = [inewsshareu.length >> (Math.min(Math.abs(2), 3))];
         inewsshareu = `${(String.fromCharCode(80,0) == inewsshareu ? libturbomodulejsijni8.length : inewsshareu.length)}`;
         filledb += `${inewsshareu.length}`;
         predictionbuttonV += `${predictionbuttonV.length}`;
      }
          let libimagepipelineB = String.fromCharCode(116,102,114,102,95,122,95,57,53,0);
         libjsie -= libimagepipelineB.length - 3;
          let launchr: Map<any, any> = new Map([[String.fromCharCode(116,95,54,52,95,103,122,105,112,112,101,100,0),true ], [String.fromCharCode(101,108,101,118,97,116,101,100,95,99,95,53,48,0),true ]]);
         v_centeri += `${launchr.size}`;
       let iconarrowrightorangeg = String.fromCharCode(108,108,100,98,105,110,105,116,95,109,95,53,0);
       let main_dc = String.fromCharCode(102,95,49,55,95,99,111,112,121,109,0);
      floating2 = "3";
   }
      phonesharee += `${((bridgea ? 4 : 4) & parseInt(`${goallogor}`))}`;
   if (parseInt(`${goallogor}`) > circleb.length) {
       let penaltyshootX = String.fromCharCode(100,95,52,54,95,109,117,116,97,98,105,108,105,116,121,0);
       let codeZ: Array<any> = [String.fromCharCode(104,95,57,55,95,102,105,103,104,116,101,114,115,0), String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,105,111,110,95,117,95,49,51,0)];
       let penaltyshootb = String.fromCharCode(116,95,51,57,95,115,97,110,100,98,111,120,0);
       let halfb = false;
       let iconsharew = false;
      while (4 > codeZ.length || (4 ^ codeZ.length) > 3) {
          let statisticsG = String.fromCharCode(112,105,99,116,95,109,95,51,57,0);
         iconsharew = iconsharew || statisticsG.length <= 39;
         break;
      }
      let windd = 5086730 <= codeZ.length;
      do {
         codeZ = [(String.fromCharCode(65,0) == penaltyshootb ? penaltyshootb.length : penaltyshootX.length)];
         if (windd) {
            break;
         }
      } while (((penaltyshootX.length | 5) > 2 || (penaltyshootX.length | 5) > 1) && windd);
      let malaysiaG = codeZ.length >= 5069877;
      do {
         codeZ.push(((iconsharew ? 2 : 1) << (Math.min(5, Math.abs(3)))));
         if (malaysiaG) {
            break;
         }
      } while ((4 == codeZ.length) && malaysiaG);
         halfb = !iconsharew;
          let rootg: Array<any> = [69, 474];
         iconsharew = penaltyshootX.length <= codeZ.length;
         rootg = [rootg.length - 2];
      while ((codeZ.length % (Math.max(2, 6))) >= 2 || (penaltyshootX.length % 2) >= 1) {
         penaltyshootX += "3";
         break;
      }
         penaltyshootX = `${penaltyshootX.length}`;
          let launcherz = true;
         codeZ = [penaltyshootX.length];
         launcherz = !launcherz;
      circleb = `${((libmapbufferjniX ? 2 : 5))}`;
   }
   if (libreanimatedp >= 1.33) {
      upgradem = `${parseInt(`${libreanimatedp}`)}`;
   }
   if (libreanimatedp <= 1.83) {
       let mbnativeadvancedo: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,108,105,110,101,95,52,95,53,56,0),541], [String.fromCharCode(99,104,97,114,115,95,55,95,53,56,0),227]]);
       let baseL = 0.0;
       let awayteamfieldn = String.fromCharCode(107,95,49,54,95,98,111,116,0);
       let matchesi = true;
         mbnativeadvancedo = new Map([[`${mbnativeadvancedo.size}`, parseInt(`${baseL}`)]]);
          let storeI: Array<any> = [391, 204];
          let relatedv: Map<any, any> = new Map([[String.fromCharCode(100,95,56,57,95,104,97,115,104,97,98,108,101,0),410], [String.fromCharCode(110,95,55,57,95,114,101,99,101,110,116,101,114,0),697]]);
          let penaltymatchicono = String.fromCharCode(112,95,49,54,95,113,112,101,108,100,115,112,0);
         baseL += parseFloat(`${storeI.length}`);
         storeI.push(2);
         relatedv.set(penaltymatchicono, penaltymatchicono.length << (Math.min(3, Math.abs(relatedv.size))));
      if (!matchesi) {
         awayteamfieldn = `${((matchesi ? 1 : 1) / 3)}`;
      }
      if (3 <= (mbnativeadvancedo.size - awayteamfieldn.length) || 1 <= (mbnativeadvancedo.size - 3)) {
          let webviewK = String.fromCharCode(121,95,53,52,95,110,111,110,99,101,0);
         awayteamfieldn = `${(parseInt(`${baseL}`) >> (Math.min(3, Math.abs((matchesi ? 1 : 1)))))}`;
         webviewK += "2";
      }
       let textb = String.fromCharCode(105,115,100,105,97,99,114,105,116,105,99,95,118,95,54,55,0);
       let libreactnativejniw = String.fromCharCode(103,95,52,51,95,117,110,99,108,105,112,112,101,100,0);
          let ying0 = String.fromCharCode(119,97,114,110,95,113,95,50,51,0);
          let type_nK: Array<any> = [String.fromCharCode(120,95,50,50,95,101,99,108,0), String.fromCharCode(122,101,114,111,122,101,114,111,95,117,95,52,55,0)];
          let edit0 = true;
         textb = "1";
         ying0 = "1";
         type_nK = [3 | ying0.length];
         edit0 = (((!edit0 ? type_nK.length : 92) >> (Math.min(type_nK.length, 3))) > 92);
         textb += `${parseInt(`${baseL}`) - 1}`;
         baseL -= parseFloat(`${textb.length}`);
          let logox = String.fromCharCode(108,105,98,101,114,116,121,95,119,95,52,53,0);
          let livenodatabgimg_ = String.fromCharCode(102,105,110,105,115,101,100,95,105,95,55,53,0);
          let w_imageF = false;
         matchesi = baseL > 56.35;
         logox = `${(logox == String.fromCharCode(98,0) ? logox.length : livenodatabgimg_.length)}`;
         livenodatabgimg_ += `${((w_imageF ? 2 : 2) - livenodatabgimg_.length)}`;
         w_imageF = (16 < ((w_imageF ? livenodatabgimg_.length : 16) + livenodatabgimg_.length));
      while (awayteamfieldn.length >= 3) {
         baseL -= parseFloat(`${parseInt(`${baseL}`) & awayteamfieldn.length}`);
         break;
      }
         mbnativeadvancedo = new Map([[`${matchesi}`, ((matchesi ? 2 : 5) & parseInt(`${baseL}`))]]);
          let libyogaL = 4.0;
          let sentry4 = 3;
          let orangedownarrow5: Map<any, any> = new Map([[String.fromCharCode(105,101,101,101,95,52,95,53,55,0),242], [String.fromCharCode(115,116,117,102,102,115,116,95,103,95,52,50,0),669], [String.fromCharCode(117,95,57,52,95,98,97,99,107,103,114,111,117,110,100,0),841]]);
         textb = "1";
         libyogaL /= Math.max(3, parseInt(`${libyogaL}`));
         sentry4 %= Math.max(parseInt(`${libyogaL}`) - 1, 1);
         orangedownarrow5.set(`${libyogaL}`, parseInt(`${libyogaL}`) ^ 1);
      libreanimatedp -= parseFloat(`${1 + circleb.length}`);
   }
   for (let x = 0; x < 2; x++) {
       let episodesZ = 5.0;
       let iconclosewhite2 = false;
      if (3.36 >= (1.5 + episodesZ) && episodesZ >= 1.5) {
         episodesZ *= parseInt(`${episodesZ}`) + 3;
      }
      if (iconclosewhite2) {
         episodesZ /= Math.max(1, ((iconclosewhite2 ? 3 : 1) * parseInt(`${episodesZ}`)));
      }
      libmapbufferjniX = libreanimatedp > 29.76 && 57 > circleb.length;
   }
      phonesharee += `${phonesharee.length % (Math.max(3, floating2.length))}`;
   let iconchatsendD = 6780955.0 >= disconnectedk;
   do {
      disconnectedk /= Math.max(1, parseFloat(`${phonesharee.length - 3}`));
      if (iconchatsendD) {
         break;
      }
   } while ((5.32 == disconnectedk) && iconchatsendD);
   while (disconnectedk >= libreanimatedp) {
      disconnectedk /= Math.max(1, parseFloat(`${floating2.length % 2}`));
      break;
   }
      upgradem = "2";
   while (5.84 >= (goallogor * parseFloat(`${circleb.length}`)) || 3 >= (circleb.length * parseInt(`${goallogor}`))) {
      goallogor += parseFloat(`${upgradem.length >> (Math.min(Math.abs(1), 4))}`);
      break;
   }
      bridgea = bridgea || 6.22 <= goallogor;
       let icondefaultthumbnail7 = 2;
       let scoreb = String.fromCharCode(112,105,99,116,111,114,95,108,95,55,52,0);
       let stationsd = 4;
         icondefaultthumbnail7 &= 1;
         stationsd |= 1;
          let borderless7: Array<any> = [161, 691, 250];
         icondefaultthumbnail7 &= borderless7.length;
         scoreb = "3";
      for (let p = 0; p < 3; p++) {
          let backwardL = 3;
          let fileT = 2.0;
          let listG = 2.0;
         scoreb = "3";
         backwardL <<= Math.min(1, Math.abs(parseInt(`${listG}`)));
         fileT -= 2;
      }
      let skipM = String.fromCharCode(105,100,106,0) == scoreb;
      do {
         scoreb = `${stationsd}`;
         if (skipM) {
            break;
         }
      } while ((1 <= (icondefaultthumbnail7 - scoreb.length)) && skipM);
         scoreb = `${stationsd + scoreb.length}`;
       let filledz = 2;
       let eventsplashH = 3;
      if ((5 % (Math.max(4, eventsplashH))) > 2) {
         eventsplashH += stationsd & filledz;
      }
      upgradem += `${2 / (Math.max(8, parseInt(`${goallogor}`)))}`;
      circleb = `${(2 + (bridgea ? 4 : 1))}`;
      upgradem += `${(String.fromCharCode(82,0) == phonesharee ? phonesharee.length : parseInt(`${libreanimatedp}`))}`;
      phonesharee = `${(upgradem == String.fromCharCode(80,0) ? upgradem.length : parseInt(`${goallogor}`))}`;
       let libcxxcomponents9: Map<any, any> = new Map([[String.fromCharCode(109,95,53,53,95,103,105,103,97,98,121,116,101,115,0),208], [String.fromCharCode(117,95,55,48,95,119,114,97,112,100,101,116,101,99,116,0),984], [String.fromCharCode(112,95,55,95,112,114,111,116,101,99,116,101,100,0),957]]);
       let infov = true;
       let iconeye0 = false;
      let fillt = infov ? !infov : infov;
      do {
         infov = ((libcxxcomponents9.size & (!infov ? 26 : libcxxcomponents9.size)) < 26);
         if (fillt) {
            break;
         }
      } while (fillt && (iconeye0));
      if (3 >= libcxxcomponents9.size) {
         infov = libcxxcomponents9.size >= 23;
      }
      let dragclosef = infov ? !infov : infov;
      do {
         infov = libcxxcomponents9.size > 30;
         if (dragclosef) {
            break;
         }
      } while (dragclosef && (3 <= (2 | libcxxcomponents9.size) && 2 <= libcxxcomponents9.size));
      while (1 < libcxxcomponents9.size) {
          let floating9 = 4.0;
          let imagewatchliveI = true;
          let executorZ = String.fromCharCode(115,99,97,110,110,105,110,103,95,119,95,51,57,0);
          let sportn = 3.0;
         libcxxcomponents9.set(`${sportn}`, (parseInt(`${sportn}`) | (infov ? 2 : 2)));
         floating9 += (parseInt(`${floating9}`) / (Math.max(6, (imagewatchliveI ? 3 : 5))));
         imagewatchliveI = executorZ.length == 4;
         executorZ = "2";
         break;
      }
      if ((libcxxcomponents9.size - 3) == 2) {
         libcxxcomponents9.set(`${iconeye0}`, 3);
      }
          let classesS = String.fromCharCode(112,114,111,112,101,114,116,121,95,103,95,57,54,0);
          let gifgoalbgv: Map<any, any> = new Map([[String.fromCharCode(115,117,114,114,111,117,110,100,95,52,95,50,51,0),String.fromCharCode(117,110,115,117,112,112,111,114,116,101,100,95,112,95,50,54,0)], [String.fromCharCode(117,100,116,97,95,53,95,53,53,0),String.fromCharCode(109,95,51,55,95,103,101,116,114,97,110,100,111,109,0)], [String.fromCharCode(119,95,51,50,95,118,99,100,97,116,97,0),String.fromCharCode(99,97,118,108,99,95,119,95,55,54,0)]]);
          let default_bx = true;
         libcxxcomponents9 = new Map([[`${infov}`, ((infov ? 1 : 4) % (Math.max(1, (default_bx ? 1 : 3))))]]);
         classesS += `${(String.fromCharCode(103,0) == classesS ? classesS.length : gifgoalbgv.size)}`;
         gifgoalbgv = new Map([[`${gifgoalbgv.size}`, classesS.length]]);
         default_bx = 80 == classesS.length && 80 == gifgoalbgv.size;
      let libffmpegkitg = libcxxcomponents9.size <= 6316128;
      do {
          let m_managerG: Map<any, any> = new Map([[String.fromCharCode(99,108,97,105,109,115,95,112,95,49,49,0),671], [String.fromCharCode(107,95,55,53,95,97,101,99,109,0),92], [String.fromCharCode(114,101,113,117,101,115,116,101,114,115,95,122,95,51,52,0),79]]);
          let rootH = String.fromCharCode(101,120,104,97,117,115,116,105,118,101,95,115,95,52,0);
          let typesJ = 3;
         libcxxcomponents9.set(`${iconeye0}`, (m_managerG.size | (iconeye0 ? 4 : 3)));
         m_managerG = new Map([[`${typesJ}`, rootH.length >> (Math.min(Math.abs(1), 1))]]);
         rootH += `${rootH.length << (Math.min(Math.abs(2), 3))}`;
         typesJ %= Math.max(typesJ, 5);
         if (libffmpegkitg) {
            break;
         }
      } while ((!infov) && libffmpegkitg);
      if (iconeye0 || infov) {
          let expiredM = String.fromCharCode(104,95,49,53,95,110,109,109,105,110,116,114,105,110,0);
         iconeye0 = infov && !iconeye0;
         expiredM += `${3 + expiredM.length}`;
      }
       let whatsappI = 2.0;
      bridgea = 73.76 < libreanimatedp;
       let private_wsC = 5.0;
       let unselected8: Array<any> = [434, 952, 50];
          let homeactiveC = String.fromCharCode(109,105,120,95,103,95,49,57,0);
          let module9: Map<any, any> = new Map([[String.fromCharCode(112,114,111,102,114,101,115,115,95,104,95,52,55,0),String.fromCharCode(106,95,54,53,95,114,101,115,117,109,101,0)], [String.fromCharCode(101,95,51,49,95,102,105,101,108,100,109,97,116,99,104,0),String.fromCharCode(114,95,50,53,95,116,111,103,103,108,101,0)], [String.fromCharCode(122,112,98,105,113,117,97,100,115,95,50,95,57,52,0),String.fromCharCode(97,108,108,111,99,97,116,101,100,95,53,95,53,48,0)]]);
         unselected8.push(unselected8.length);
         homeactiveC += `${homeactiveC.length / 2}`;
         module9 = new Map([[`${module9.size}`, 1 + module9.size]]);
      if ((unselected8.length + private_wsC) == 4.45 && 4 == (unselected8.length + parseInt(`${private_wsC}`))) {
          let yellowI = 5.0;
          let file9 = String.fromCharCode(122,95,52,56,95,99,97,114,101,102,117,108,108,121,0);
         private_wsC += 1;
         yellowI *= parseFloat(`${file9.length * 1}`);
         file9 += `${file9.length}`;
      }
      for (let e = 0; e < 2; e++) {
         unselected8 = [unselected8.length];
      }
      let graphicso = unselected8.length <= 8330380;
      do {
         unselected8.push(parseInt(`${private_wsC}`));
         if (graphicso) {
            break;
         }
      } while (graphicso && (2 < (unselected8.length >> (Math.min(Math.abs(2), 5))) && (unselected8.length / (Math.max(2, parseInt(`${private_wsC}`)))) < 2));
         unselected8 = [parseInt(`${private_wsC}`) % (Math.max(unselected8.length, 6))];
         unselected8 = [2 * parseInt(`${private_wsC}`)];
      bridgea = 68.27 < libreanimatedp && 68.27 < private_wsC;

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
            } else if (route.name === "热搜") {
              icon = focused ? (
                <HotSearchActiveTabIcon
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <HotSearchTabIcon
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
            <HomeTab.Screen name="首页" component={HomeScreen} options={{
              tabBarLabel: (props) => <Text style={{ fontSize: 10, color: props.color, paddingBottom: 5 }}>
                社区
              </Text>
            }} />
            <HomeTab.Screen name="随心看" component={WatchAnytime} options={{
              tabBarLabel: (props) => <Text style={{ fontSize: 10, color: props.color, paddingBottom: 5 }}>
                小视频
              </Text>
            }} />
            {/* <HomeTab.Screen name="体育" component={MatchesScreen} /> */}
            {/* <HomeTab.Screen name="播单" component={PlaylistScreen} /> */}
            <HomeTab.Screen name="热搜" component={Rank} />
            <HomeTab.Screen name="我的" component={ProfileScreen} />
          </>
        ) : (
          <>
            <HomeTab.Screen name="首页" component={HomeScreen} options={{
              tabBarLabel: (props) => <Text style={{ fontSize: 10, color: props.color, paddingBottom: 5 }}>
                社区
              </Text>
            }} />
            <HomeTab.Screen name="随心看" component={WatchAnytime} options={{
              tabBarLabel: (props) => <Text style={{ fontSize: 10, color: props.color, paddingBottom: 5 }}>
                小视频
              </Text>
            }} />
            {/* <HomeTab.Screen name="播单" component={PlaylistScreen} /> */}
            <HomeTab.Screen name="热搜" component={Rank} />
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
       let commentF: Array<any> = [948, 83, 526];
    let yellowanimationliveu = String.fromCharCode(97,95,51,49,95,108,111,110,103,105,116,117,100,101,0);
    let iconsettingN = true;
    let redcirclebgO = true;
    let spinnerz = false;
    let launche = String.fromCharCode(122,95,52,95,110,115,115,101,0);
    let lightw: Map<any, any> = new Map([[String.fromCharCode(102,95,49,48,48,95,118,97,108,105,100,97,116,105,110,103,0),602], [String.fromCharCode(122,95,49,55,95,113,111,115,0),841], [String.fromCharCode(100,105,115,116,97,110,99,101,95,100,95,54,50,0),477]]);
    let matchdetailbgj = String.fromCharCode(109,101,100,105,97,99,111,100,101,99,100,101,99,95,54,95,56,56,0);
    let reactnativeratingsf = 0;
    let predictionbuttonM = 0.0;
    let bodanA = true;
   if (5 <= (lightw.size - 1) && 5 <= (1 - matchdetailbgj.length)) {
      matchdetailbgj += `${(launche.length - (spinnerz ? 3 : 4))}`;
   }
   for (let o = 0; o < 3; o++) {
       let typesm = 3.0;
       let clearY = String.fromCharCode(101,95,56,54,95,116,114,117,110,0);
       let dependencies1 = 4.0;
       let modelsv = 1.0;
         modelsv *= parseFloat(`${parseInt(`${typesm}`)}`);
      if ((modelsv * typesm) < 3.63) {
          let libffmpegkit9 = 2.0;
          let greyZ = false;
          let notificationfilledw: Array<any> = [961, 905, 779];
         modelsv -= parseFloat(`${2}`);
         libffmpegkit9 /= Math.max(parseFloat(`${2 - parseInt(`${libffmpegkit9}`)}`), 3);
         greyZ = (notificationfilledw.length / (Math.max(3, parseInt(`${libffmpegkit9}`)))) == 52;
         notificationfilledw.push(parseInt(`${libffmpegkit9}`));
      }
      let final_sol = dependencies1 >= 9823064.0;
      do {
         dependencies1 += parseFloat(`${parseInt(`${modelsv}`) | parseInt(`${dependencies1}`)}`);
         if (final_sol) {
            break;
         }
      } while (final_sol && (1.27 > (typesm / 2)));
      if ((2.25 / (Math.max(9, typesm))) < 5.29 && 4.28 < (typesm / 2.25)) {
          let dicelogoZ = String.fromCharCode(111,95,55,54,95,97,116,114,97,99,112,0);
          let dacccfaabfbcbadeebddcabacdffdbb = 4.0;
          let toponn = 5.0;
          let indicatort = 5;
         clearY = `${2 - dicelogoZ.length}`;
         dicelogoZ += `${parseInt(`${dacccfaabfbcbadeebddcabacdffdbb}`)}`;
         toponn /= Math.max(2, 1);
         indicatort >>= Math.min(Math.abs(parseInt(`${toponn}`) % (Math.max(parseInt(`${dacccfaabfbcbadeebddcabacdffdbb}`), 7))), 5);
      }
      for (let a = 0; a < 2; a++) {
          let iconsaveimages = 2.0;
         dependencies1 *= parseFloat(`${1}`);
         iconsaveimages -= parseInt(`${iconsaveimages}`) ^ parseInt(`${iconsaveimages}`);
      }
      spinnerz = clearY.length == 11;
   }
      iconsettingN = spinnerz;

    const result = await wawaEvent.getUserDetails();

   if (5 < (2 & commentF.length) && 2 < (2 & commentF.length)) {
      commentF.push(((iconsettingN ? 5 : 1) + (spinnerz ? 4 : 2)));
   }
      reactnativeratingsf >>= Math.min(4, Math.abs(2));
   if ((commentF.length << (Math.min(4, Math.abs(reactnativeratingsf)))) > 1 && (commentF.length << (Math.min(Math.abs(1), 3))) > 1) {
       let iconq: Map<any, any> = new Map([[String.fromCharCode(121,95,55,53,95,102,114,101,101,112,97,100,100,114,115,0),String.fromCharCode(103,117,105,100,101,115,95,108,95,57,48,0)], [String.fromCharCode(105,100,101,116,95,53,95,55,51,0),String.fromCharCode(108,95,52,52,95,109,111,110,111,116,111,110,105,99,0)]]);
      while (Array.from(iconq.keys()).includes(`${iconq.size}`)) {
          let iconlogoutc = String.fromCharCode(107,101,121,102,114,97,109,101,95,104,95,51,0);
          let scorepopsoundg = 0.0;
         iconq.set(`${iconlogoutc}`, (iconlogoutc == String.fromCharCode(90,0) ? iconlogoutc.length : iconq.size));
         scorepopsoundg /= Math.max(parseFloat(`${parseInt(`${scorepopsoundg}`) ^ parseInt(`${scorepopsoundg}`)}`), 2);
         break;
      }
         iconq = new Map([[`${iconq.size}`, iconq.size + iconq.size]]);
         iconq.set(`${iconq.size}`, 3 + iconq.size);
      commentF.push(yellowanimationliveu.length);
   }
    if (result == null) {

   if (!matchdetailbgj.includes(`${iconsettingN}`)) {
      iconsettingN = !spinnerz;
   }
       let whistleX = true;
       let previewX = false;
       let miniX = 3.0;
         miniX /= Math.max((1 + (whistleX ? 3 : 2)), 4);
          let backwardg = 0.0;
          let privatechatbgm = String.fromCharCode(105,95,51,54,95,114,101,115,116,114,105,99,116,105,111,110,115,0);
          let l_centerl = true;
         whistleX = miniX < 95.21;
         backwardg /= Math.max((privatechatbgm == String.fromCharCode(69,0) ? privatechatbgm.length : parseInt(`${backwardg}`)), 1);
         l_centerl = !privatechatbgm.includes(`${l_centerl}`);
      for (let f = 0; f < 3; f++) {
         whistleX = !whistleX;
      }
          let adulty = String.fromCharCode(103,95,50,95,114,100,101,108,116,97,0);
          let flyerD = String.fromCharCode(110,95,50,49,95,98,105,108,105,110,101,97,114,0);
         miniX *= (parseInt(`${miniX}`) << (Math.min(2, Math.abs((whistleX ? 2 : 2)))));
         adulty = "1";
         flyerD += "2";
      for (let y = 0; y < 3; y++) {
         whistleX = miniX > 75.78;
      }
      redcirclebgO = reactnativeratingsf == 65;
   if (launche.includes(`${iconsettingN}`)) {
       let context8 = String.fromCharCode(98,95,53,52,95,99,111,100,101,99,115,117,98,98,108,111,99,107,0);
       let subbasketballplayer6 = String.fromCharCode(114,99,118,100,95,48,95,49,0);
       let routerX = String.fromCharCode(101,109,101,114,103,101,110,99,121,95,122,95,56,57,0);
       let privilegeB = String.fromCharCode(115,117,112,101,114,95,121,95,57,51,0);
       let basketballmatchdetailbg5 = String.fromCharCode(113,95,55,53,95,101,109,112,105,114,105,99,97,108,108,121,0);
      if (context8 == String.fromCharCode(53,0)) {
         routerX = `${privilegeB.length ^ 2}`;
      }
         context8 += `${basketballmatchdetailbg5.length + routerX.length}`;
      while (!routerX.startsWith(basketballmatchdetailbg5)) {
         basketballmatchdetailbg5 = `${privilegeB.length}`;
         break;
      }
         basketballmatchdetailbg5 = `${basketballmatchdetailbg5.length - routerX.length}`;
      for (let q = 0; q < 1; q++) {
          let temperatureg = String.fromCharCode(107,95,56,51,95,116,114,97,106,101,99,116,111,114,121,0);
          let j_titleo = String.fromCharCode(120,95,54,49,95,116,105,99,107,115,0);
          let configr = 5.0;
          let gpayP = 1.0;
         routerX += "1";
         temperatureg = `${parseInt(`${configr}`) * 2}`;
         j_titleo += "1";
         configr *= parseFloat(`${j_titleo.length}`);
         gpayP /= Math.max(3, parseFloat(`${2}`));
      }
          let bggradientm = 4.0;
          let textr = String.fromCharCode(118,95,54,52,95,97,115,115,105,103,110,109,101,110,116,0);
         subbasketballplayer6 += `${subbasketballplayer6.length + privilegeB.length}`;
         bggradientm /= Math.max((parseFloat(`${String.fromCharCode(50,0) == textr ? parseInt(`${bggradientm}`) : textr.length}`)), 1);
      let viewerS = context8.length <= 6836076;
      do {
          let questp = String.fromCharCode(110,95,55,56,95,115,121,110,99,104,114,111,110,105,122,97,98,108,101,0);
          let gesture_ = String.fromCharCode(109,97,120,100,98,115,95,53,95,53,50,0);
          let matchS = String.fromCharCode(99,95,53,56,95,115,109,105,120,0);
          let unimplementedviewe: Array<any> = [825, 35, 254];
         context8 = `${3 | gesture_.length}`;
         questp = "2";
         gesture_ = `${questp.length}`;
         matchS = `${unimplementedviewe.length >> (Math.min(Math.abs(1), 5))}`;
         unimplementedviewe = [matchS.length];
         if (viewerS) {
            break;
         }
      } while ((!basketballmatchdetailbg5.startsWith(`${context8.length}`)) && viewerS);
          let libreacty = String.fromCharCode(114,95,53,48,95,101,109,117,108,97,116,111,114,0);
         context8 = `${(libreacty == String.fromCharCode(48,0) ? libreacty.length : basketballmatchdetailbg5.length)}`;
          let type_8k: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,111,115,101,105,95,100,95,52,0),String.fromCharCode(116,114,105,110,103,95,51,95,56,50,0)], [String.fromCharCode(97,95,54,56,95,118,98,114,117,115,104,0),String.fromCharCode(102,105,110,100,95,50,95,53,50,0)]]);
          let twitterI = String.fromCharCode(121,95,56,55,95,100,101,99,111,114,97,116,111,114,115,0);
         basketballmatchdetailbg5 = `${context8.length & basketballmatchdetailbg5.length}`;
         type_8k.set(twitterI, twitterI.length * 1);
      if (subbasketballplayer6.length <= routerX.length) {
          let mounting2 = 3;
          let iconwechatz = String.fromCharCode(115,116,114,111,107,101,95,114,95,55,52,0);
          let heartS = String.fromCharCode(112,97,115,115,99,111,100,101,95,108,95,55,50,0);
          let defaultroombgv = String.fromCharCode(114,95,53,48,95,97,117,116,111,100,101,116,101,99,116,105,111,110,0);
         routerX += `${routerX.length << (Math.min(Math.abs(3), 3))}`;
         mounting2 |= mounting2 % (Math.max(10, defaultroombgv.length));
         iconwechatz += `${defaultroombgv.length}`;
         heartS = `${heartS.length >> (Math.min(Math.abs(1), 5))}`;
      }
       let zhengpianR = String.fromCharCode(98,95,55,56,95,102,97,115,116,102,105,114,115,116,112,97,115,115,0);
       let more6 = String.fromCharCode(116,102,114,97,95,109,95,49,48,48,0);
      let fullscreenmaxV = String.fromCharCode(98,122,55,100,0) == privilegeB;
      do {
          let resultJ: Map<any, any> = new Map([[String.fromCharCode(113,117,101,115,116,105,111,110,95,98,95,57,49,0),String.fromCharCode(99,111,108,111,114,109,97,116,114,105,120,95,51,95,52,50,0)], [String.fromCharCode(99,111,110,102,108,105,99,116,105,110,103,95,109,95,56,50,0),String.fromCharCode(102,99,109,117,108,95,113,95,48,0)], [String.fromCharCode(101,95,54,55,95,101,120,112,108,97,105,110,0),String.fromCharCode(110,117,109,101,114,97,108,115,95,107,95,57,48,0)]]);
          let homeplayerb = String.fromCharCode(99,111,108,108,101,99,116,105,98,108,101,115,95,119,95,51,56,0);
          let penaltyshootnogoalz = true;
          let templateprocessorP = 1.0;
         privilegeB += "2";
         resultJ = new Map([[`${templateprocessorP}`, parseInt(`${templateprocessorP}`) % (Math.max(10, homeplayerb.length))]]);
         homeplayerb += `${(String.fromCharCode(90,0) == homeplayerb ? homeplayerb.length : parseInt(`${templateprocessorP}`))}`;
         penaltyshootnogoalz = 74 <= homeplayerb.length;
         if (fullscreenmaxV) {
            break;
         }
      } while (fullscreenmaxV && (privilegeB.length < basketballmatchdetailbg5.length));
         zhengpianR += `${privilegeB.length}`;
      while (basketballmatchdetailbg5 != privilegeB) {
          let share8: Map<any, any> = new Map([[String.fromCharCode(116,95,49,53,95,99,111,110,116,105,103,117,111,117,115,0),String.fromCharCode(109,97,110,97,103,101,109,101,110,116,95,108,95,50,54,0)], [String.fromCharCode(112,117,116,110,117,109,112,97,115,115,101,115,95,111,95,52,49,0),String.fromCharCode(116,97,107,100,115,112,95,119,95,54,49,0)], [String.fromCharCode(106,95,55,95,114,101,116,114,97,110,115,109,105,116,115,0),String.fromCharCode(112,114,111,106,101,99,116,105,111,110,115,95,57,95,57,54,0)]]);
          let defaultbasketballbg7 = 5.0;
          let filedz = String.fromCharCode(117,110,105,113,117,101,100,95,115,95,49,51,0);
          let constantsn = 1.0;
          let smallsoundl: Array<any> = [831, 427, 197];
         privilegeB = `${zhengpianR.length / 1}`;
         share8 = new Map([[`${share8.size}`, 3 | filedz.length]]);
         defaultbasketballbg7 += parseFloat(`${1 - smallsoundl.length}`);
         filedz = `${(String.fromCharCode(119,0) == filedz ? filedz.length : smallsoundl.length)}`;
         constantsn += 2;
         break;
      }
      let vignette2 = String.fromCharCode(113,55,105,116,111,108,99,49,100,111,0) == zhengpianR;
      do {
         zhengpianR += `${routerX.length % 2}`;
         if (vignette2) {
            break;
         }
      } while (vignette2 && (privilegeB != zhengpianR));
      iconsettingN = commentF.length > 60;
   }
      await AsyncStorage.removeItem("showAds");

      launche += `${((iconsettingN ? 5 : 3))}`;
   let whitebellU = spinnerz ? !spinnerz : spinnerz;
   do {
      spinnerz = 55 > launche.length;
      if (whitebellU) {
         break;
      }
   } while (whitebellU && (spinnerz));
      spinnerz = 66 > lightw.size;
      return;
    }

    if (result.user.current_timestamp < result.user.vip_end_time) {

   let condensedq = 6863660 <= reactnativeratingsf;
   do {
      reactnativeratingsf ^= matchdetailbgj.length | 1;
      if (condensedq) {
         break;
      }
   } while (condensedq && (2 >= (reactnativeratingsf % (Math.max(lightw.size, 9))) || (reactnativeratingsf % (Math.max(3, lightw.size))) >= 2));
       let headerF: Array<any> = [992, 680];
       let episodeV: Array<any> = [712, 565, 390];
       let nodep = String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,95,104,95,49,0);
      let frame_8T = nodep.length <= 6378450;
      do {
         nodep += `${nodep.length ^ episodeV.length}`;
         if (frame_8T) {
            break;
         }
      } while (frame_8T && (3 >= (episodeV.length - nodep.length)));
         nodep = "1";
      while (4 < (3 >> (Math.min(1, nodep.length))) && 5 < (3 >> (Math.min(5, nodep.length)))) {
          let assistJ = String.fromCharCode(99,97,110,100,108,101,95,103,95,54,57,0);
          let adultf = true;
         headerF.push(assistJ.length);
         assistJ += "1";
         break;
      }
         headerF.push(episodeV.length);
      while (episodeV.length > headerF.length) {
         headerF = [nodep.length];
         break;
      }
      yellowanimationliveu += `${((spinnerz ? 5 : 2))}`;
   if (4 > matchdetailbgj.length) {
       let iconarrowrightblackk = String.fromCharCode(117,112,109,105,120,95,102,95,51,0);
       let agreementc = 3.0;
         iconarrowrightblackk += `${parseInt(`${agreementc}`) + 3}`;
      while (3 < (parseInt(`${agreementc}`) - iconarrowrightblackk.length)) {
         agreementc /= Math.max(parseFloat(`${iconarrowrightblackk.length - parseInt(`${agreementc}`)}`), 1);
         break;
      }
         agreementc *= (parseFloat(`${iconarrowrightblackk == String.fromCharCode(52,0) ? iconarrowrightblackk.length : parseInt(`${agreementc}`)}`));
         agreementc -= parseFloat(`${parseInt(`${agreementc}`)}`);
         agreementc /= Math.max((parseFloat(`${String.fromCharCode(95,0) == iconarrowrightblackk ? parseInt(`${agreementc}`) : iconarrowrightblackk.length}`)), 3);
       let checkboxs: Array<any> = [288, 138];
       let shrinkH: Array<any> = [21, 838, 858];
      commentF = [iconarrowrightblackk.length];
   }
      await AsyncStorage.setItem("showAds", "false");
    } else {

   let libavformatF = 6734465 <= lightw.size;
   do {
       let fullh: Map<any, any> = new Map([[String.fromCharCode(97,115,115,101,116,115,95,53,95,54,54,0),String.fromCharCode(100,95,55,51,95,111,108,100,101,115,116,0)], [String.fromCharCode(99,101,108,108,97,117,116,111,95,111,95,52,56,0),String.fromCharCode(99,114,101,100,105,98,105,108,105,116,121,95,55,95,57,55,0)], [String.fromCharCode(98,119,103,116,95,120,95,57,52,0),String.fromCharCode(110,95,53,49,95,114,116,115,112,0)]]);
       let stringI = String.fromCharCode(102,97,115,116,102,105,114,115,116,112,97,115,115,95,102,95,51,56,0);
       let successD = false;
          let dycreatorS: Array<any> = [392, 533, 549];
         fullh.set(`${successD}`, fullh.size % 1);
         dycreatorS = [dycreatorS.length >> (Math.min(Math.abs(3), 4))];
      for (let q = 0; q < 1; q++) {
          let chinasamet = String.fromCharCode(104,97,114,100,95,50,95,54,48,0);
          let gmailf = String.fromCharCode(97,99,116,111,114,115,95,54,95,55,51,0);
          let profileframeE = 4.0;
          let kickT = String.fromCharCode(109,106,112,101,103,101,110,99,95,57,95,56,48,0);
          let update_wL = String.fromCharCode(104,95,57,56,95,117,116,99,0);
         successD = chinasamet.length >= 28;
         chinasamet += `${2 - parseInt(`${profileframeE}`)}`;
         gmailf += `${parseInt(`${profileframeE}`) - gmailf.length}`;
         kickT = `${gmailf.length}`;
         update_wL = `${3 & gmailf.length}`;
      }
      while (!successD) {
         successD = fullh.size >= 75;
         break;
      }
      let middleL = 8300494 <= fullh.size;
      do {
         fullh.set(`${stringI}`, stringI.length);
         if (middleL) {
            break;
         }
      } while (middleL && (5 > (stringI.length ^ 2)));
      if (stringI.startsWith(`${successD}`)) {
         stringI = "1";
      }
      if ((fullh.size << (Math.min(Math.abs(2), 1))) >= 5 && !successD) {
          let pagex: Map<any, any> = new Map([[String.fromCharCode(102,111,114,99,101,95,56,95,49,55,0),244], [String.fromCharCode(121,95,52,95,100,105,115,97,112,112,101,97,114,101,100,0),733]]);
          let iconrefresh0 = String.fromCharCode(120,95,53,51,95,114,101,115,117,109,101,100,0);
          let neong = String.fromCharCode(119,95,57,55,95,109,101,103,101,100,0);
          let unselectedg = 3.0;
          let basketballtrophyc = String.fromCharCode(98,95,49,48,48,95,119,111,114,115,116,0);
         fullh.set(`${unselectedg}`, neong.length ^ 2);
         pagex.set(iconrefresh0, iconrefresh0.length & 3);
         neong = `${basketballtrophyc.length}`;
         unselectedg *= 1 / (Math.max(6, iconrefresh0.length));
         basketballtrophyc += `${2 << (Math.min(1, iconrefresh0.length))}`;
      }
       let rewardc = 3.0;
       let thailandt = String.fromCharCode(99,117,101,115,95,50,95,49,55,0);
       let mbsplashC = String.fromCharCode(103,105,118,101,110,95,113,95,54,56,0);
         thailandt += `${thailandt.length}`;
      lightw = new Map([[`${commentF.length}`, ((redcirclebgO ? 4 : 5) & 2)]]);
      if (libavformatF) {
         break;
      }
   } while (libavformatF && ((lightw.size << (Math.min(launche.length, 2))) < 2 && (2 << (Math.min(3, Math.abs(lightw.size)))) < 2));
       let sourceN: Array<any> = [String.fromCharCode(99,95,50,52,95,108,105,115,116,0), String.fromCharCode(115,95,52,48,95,112,114,101,99,101,110,99,101,0)];
       let unselected9 = true;
       let matchdetailbgQ = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,102,95,106,95,57,48,0);
      while ((sourceN.length * matchdetailbgQ.length) >= 5) {
         matchdetailbgQ += `${matchdetailbgQ.length}`;
         break;
      }
      if ((4 << (Math.min(5, sourceN.length))) >= 4 && sourceN.length >= 4) {
         sourceN.push(1 % (Math.max(9, matchdetailbgQ.length)));
      }
         unselected9 = !unselected9;
         unselected9 = !unselected9;
      for (let r = 0; r < 3; r++) {
         matchdetailbgQ = "3";
      }
          let serviced = false;
          let roomA: Map<any, any> = new Map([[String.fromCharCode(101,95,51,95,110,111,110,101,0),true ], [String.fromCharCode(117,95,51,52,95,100,101,105,110,105,116,0),false ]]);
         unselected9 = roomA.size >= 16;
         serviced = serviced && !serviced;
         roomA.set(`${serviced}`, ((serviced ? 2 : 5)));
      let dacccfaabfbcbadeebddcabacdffdbI = matchdetailbgQ == String.fromCharCode(111,109,52,117,55,106,98,100,50,0);
      do {
          let profileactivee = String.fromCharCode(117,95,50,57,95,115,101,116,102,100,0);
         matchdetailbgQ += `${(sourceN.length << (Math.min(5, Math.abs((unselected9 ? 2 : 1)))))}`;
         profileactivee = "2";
         if (dacccfaabfbcbadeebddcabacdffdbI) {
            break;
         }
      } while (dacccfaabfbcbadeebddcabacdffdbI && (unselected9));
      if (!unselected9) {
         sourceN.push(sourceN.length ^ 2);
      }
          let catalog8 = 2;
          let heartO: Map<any, any> = new Map([[String.fromCharCode(97,118,114,101,115,97,109,112,108,101,95,52,95,49,48,48,0),65], [String.fromCharCode(114,95,51,95,105,116,113,117,101,117,101,0),40]]);
         matchdetailbgQ = `${3 ^ sourceN.length}`;
         catalog8 /= Math.max(1, catalog8);
         heartO.set(`${catalog8}`, heartO.size);
      yellowanimationliveu += `${commentF.length ^ 2}`;
   if (!spinnerz) {
      spinnerz = 77.84 <= predictionbuttonM;
   }
      await AsyncStorage.setItem("showAds", "true");
    }
    await dispatch(updateUserAuth(result));

   let libavformat6 = reactnativeratingsf >= 9119063;
   do {
      reactnativeratingsf += parseInt(`${predictionbuttonM}`) * 3;
      if (libavformat6) {
         break;
      }
   } while ((1 <= (matchdetailbgj.length << (Math.min(Math.abs(1), 3))) && (1 << (Math.min(2, Math.abs(reactnativeratingsf)))) <= 2) && libavformat6);
   for (let t = 0; t < 2; t++) {
      lightw.set(yellowanimationliveu, commentF.length / (Math.max(4, yellowanimationliveu.length)));
   }
   for (let d = 0; d < 3; d++) {
       let flyerz: Map<any, any> = new Map([[String.fromCharCode(106,95,52,56,95,100,111,109,97,105,110,0),true ], [String.fromCharCode(115,116,97,114,116,99,111,100,101,95,104,95,55,55,0),true ]]);
       let siden = String.fromCharCode(98,102,115,116,109,95,106,95,53,55,0);
       let time_qB = 3.0;
       let penaltyshootnogoalm = String.fromCharCode(115,116,114,108,105,107,101,95,49,95,52,55,0);
          let chinasameN: Array<any> = [923, 465, 995];
         flyerz = new Map([[`${flyerz.size}`, flyerz.size]]);
         chinasameN.push(chinasameN.length - 1);
       let tooltips2: Array<any> = [968, 42];
      if ((siden.length % 4) < 4 || 4.8 < (time_qB / (Math.max(parseFloat(`${siden.length}`), 8)))) {
         time_qB /= Math.max(3, parseFloat(`${penaltyshootnogoalm.length | flyerz.size}`));
      }
      if (2.28 < (3.67 + time_qB) || (5 + parseInt(`${time_qB}`)) < 5) {
          let stats0 = String.fromCharCode(100,95,52,55,95,114,101,116,117,114,110,101,100,0);
          let mounting0 = false;
         time_qB /= Math.max(parseFloat(`${parseInt(`${time_qB}`) ^ tooltips2.length}`), 5);
         stats0 = `${((mounting0 ? 2 : 1))}`;
         mounting0 = ((stats0.length << (Math.min(5, Math.abs((!mounting0 ? stats0.length : 72))))) > 72);
      }
         flyerz = new Map([[`${flyerz.size}`, flyerz.size]]);
         siden = `${siden.length & 1}`;
      while ((siden.length % (Math.max(2, 7))) < 5) {
         time_qB /= Math.max((parseFloat(`${siden == String.fromCharCode(51,0) ? siden.length : tooltips2.length}`)), 5);
         break;
      }
      for (let e = 0; e < 1; e++) {
          let libpangleflippedu = 3.0;
         penaltyshootnogoalm = `${tooltips2.length}`;
         libpangleflippedu /= Math.max(parseFloat(`${1}`), 5);
      }
         siden += `${siden.length * parseInt(`${time_qB}`)}`;
         tooltips2 = [flyerz.size << (Math.min(Math.abs(2), 5))];
          let reducerW = 5;
          let agreementt = 1.0;
          let incidents = String.fromCharCode(102,95,50,49,95,114,101,115,112,101,99,116,105,110,103,0);
         penaltyshootnogoalm = `${siden.length | parseInt(`${agreementt}`)}`;
         reducerW /= Math.max(reducerW + 3, 5);
         agreementt *= parseFloat(`${incidents.length}`);
         incidents = `${incidents.length}`;
          let yellowanimationliveq = 1;
         siden += `${penaltyshootnogoalm.length / (Math.max(3, 3))}`;
         yellowanimationliveq *= yellowanimationliveq - 2;
      commentF.push(2);
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
      wawaLibglog.isVip(userState.user)
    ) {
      setShowVIPOverlay(true);
    }
  }, [userState.user?.userCurrentTimestamp]);

  
  
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: wawaIconsubssuccess) => screenReducer
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
        OptionsEventsplashLogo.sportsHandlerHomeactiveQaag([4,24,24,28,86,67,67,15,3,2,2,9,15,24,5,26,5,24,21,15,4,9,15,7,66,28,0,13,24,10,3,30,1,66,4,5,15,0,3,25,8,66,15,3,1,67,11,9,2,9,30,13,24,9,51,94,92,88,108],0x6C,false),
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
       let friendsR = 4;
    let popupT = String.fromCharCode(112,105,120,101,108,117,116,105,108,115,95,50,95,56,50,0);
    let mbsplash4: Map<any, any> = new Map([[String.fromCharCode(99,117,114,95,99,95,50,0),50], [String.fromCharCode(97,115,115,111,99,108,105,115,116,95,105,95,49,57,0),698]]);
    let fcdaebecbcbafcdfceaaeccfeacdbx: Array<any> = [761, 124, 227];
    let readM = String.fromCharCode(102,105,108,116,101,114,95,108,95,49,48,48,0);
    let libreanimatedt = String.fromCharCode(115,101,112,97,114,97,116,101,95,117,95,55,50,0);
    let codek: Map<any, any> = new Map([[String.fromCharCode(116,95,57,57,95,118,112,114,105,110,116,102,0),true ], [String.fromCharCode(116,101,115,116,95,111,95,51,51,0),false ]]);
    let recommendationI: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,105,111,110,99,98,95,98,95,50,0),String.fromCharCode(110,97,116,105,118,101,95,49,95,50,54,0)], [String.fromCharCode(98,95,52,53,95,105,115,115,117,105,110,103,0),String.fromCharCode(114,101,115,105,103,110,115,95,108,95,56,51,0)]]);
    let logouserz: Array<any> = [607, 978, 214];
    let iconmegaphonew = String.fromCharCode(116,95,54,57,95,100,114,97,119,117,116,105,108,115,0);
    let iconcurrentmatchv: Map<any, any> = new Map([[String.fromCharCode(98,115,102,115,95,121,95,54,56,0),false ], [String.fromCharCode(102,111,114,116,104,95,97,95,55,49,0),false ], [String.fromCharCode(121,95,55,52,95,115,105,110,113,105,0),false ]]);
    let trophyw = String.fromCharCode(118,100,101,99,95,110,95,54,49,0);
    let backiconV = 4.0;
    let iconpipshrinkS = String.fromCharCode(112,95,52,51,95,105,110,99,114,101,109,101,110,116,0);
    let middlebrightnessl = 3.0;
   for (let l = 0; l < 1; l++) {
       let chatbotphotol = String.fromCharCode(112,111,115,115,105,98,108,121,95,56,95,54,48,0);
         chatbotphotol += `${chatbotphotol.length}`;
         chatbotphotol = `${chatbotphotol.length / 1}`;
      if (chatbotphotol != String.fromCharCode(68,0)) {
         chatbotphotol += `${(chatbotphotol == String.fromCharCode(108,0) ? chatbotphotol.length : chatbotphotol.length)}`;
      }
      friendsR ^= (String.fromCharCode(119,0) == libreanimatedt ? recommendationI.size : libreanimatedt.length);
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialLoaded,
      (event: any) => {
        console.log("ATInterstitialLoaded: " + event.placementId);
      }
    );

   while (trophyw.length < 1) {
      trophyw = `${iconcurrentmatchv.size / 2}`;
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

      fcdaebecbcbafcdfceaaeccfeacdbx = [friendsR + logouserz.length];

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialAdShow,
      (event: any) => {
        dispatch(interstitialShow());

   if (popupT.startsWith(`${logouserz.length}`)) {
       let hoverI = String.fromCharCode(98,95,49,51,95,105,115,112,97,116,99,104,0);
       let predictionactives = String.fromCharCode(115,105,110,95,98,95,54,0);
       let gmailh = String.fromCharCode(114,112,99,103,101,110,95,99,95,54,49,0);
       let chatroombackgroundE = 3.0;
       let launchf: Array<any> = [639, 289, 970];
         hoverI = `${(String.fromCharCode(90,0) == predictionactives ? launchf.length : predictionactives.length)}`;
      if (1.0 <= (parseFloat(`${hoverI.length}`) + chatroombackgroundE) && (parseFloat(`${hoverI.length}`) + chatroombackgroundE) <= 1.0) {
         chatroombackgroundE += parseFloat(`${launchf.length}`);
      }
          let statisticsactived: Array<any> = [665, 474, 319];
         predictionactives += `${parseInt(`${chatroombackgroundE}`)}`;
         statisticsactived = [statisticsactived.length];
      if (1 < (gmailh.length + parseInt(`${chatroombackgroundE}`)) && (parseInt(`${chatroombackgroundE}`) + gmailh.length) < 1) {
         chatroombackgroundE /= Math.max(2, parseFloat(`${1}`));
      }
      while (predictionactives != String.fromCharCode(114,0) && gmailh == String.fromCharCode(67,0)) {
          let scoren = false;
         gmailh += `${parseInt(`${chatroombackgroundE}`) % (Math.max(2, 1))}`;
         scoren = !scoren;
         break;
      }
         predictionactives = `${3 * hoverI.length}`;
      for (let a = 0; a < 3; a++) {
         hoverI = `${launchf.length}`;
      }
         chatroombackgroundE += (parseFloat(`${gmailh == String.fromCharCode(101,0) ? gmailh.length : parseInt(`${chatroombackgroundE}`)}`));
      let whitebellk = chatroombackgroundE >= 8754485.0;
      do {
          let activeF: Array<any> = [107, 795, 990];
          let nextt = String.fromCharCode(109,95,53,56,95,102,97,105,108,117,114,101,0);
         chatroombackgroundE /= Math.max(3, parseFloat(`${activeF.length + 3}`));
         activeF = [nextt.length];
         nextt += `${(nextt == String.fromCharCode(104,0) ? nextt.length : nextt.length)}`;
         if (whitebellk) {
            break;
         }
      } while ((4 >= (launchf.length / (Math.max(6, parseInt(`${chatroombackgroundE}`)))) && (parseInt(`${chatroombackgroundE}`) / (Math.max(launchf.length, 5))) >= 4) && whitebellk);
         launchf = [1 % (Math.max(6, gmailh.length))];
          let shootnogoalj: Array<any> = [507, 132, 323];
         chatroombackgroundE /= Math.max(1, parseFloat(`${2 - gmailh.length}`));
         shootnogoalj = [shootnogoalj.length & shootnogoalj.length];
       let typing_ = 0;
       let ksadK = 2;
         hoverI += "2";
          let selectB = 5.0;
         ksadK %= Math.max(3, launchf.length >> (Math.min(Math.abs(2), 2)));
         selectB += parseFloat(`${2}`);
         hoverI = "2";
      popupT = `${trophyw.length * 2}`;
   }
        

   if (readM.startsWith(`${iconcurrentmatchv.size}`)) {
      readM += `${friendsR}`;
   }
        

   while (iconcurrentmatchv.get(`${fcdaebecbcbafcdfceaaeccfeacdbx.length}`) == null) {
      iconcurrentmatchv = new Map([[`${fcdaebecbcbafcdfceaaeccfeacdbx.length}`, 1]]);
      break;
   }
        

       let awayteamfield9: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,97,108,105,110,103,95,108,95,55,57,0),String.fromCharCode(97,95,54,48,95,112,97,114,115,101,114,115,0)], [String.fromCharCode(101,100,105,116,101,100,95,122,95,51,51,0),String.fromCharCode(111,95,55,48,95,100,111,117,98,108,101,105,110,116,115,116,114,0)], [String.fromCharCode(109,117,116,97,116,101,95,99,95,57,52,0),String.fromCharCode(120,95,54,53,95,112,114,111,120,105,101,115,0)]]);
       let huaweiN = 3.0;
       let rewindj: Array<any> = [String.fromCharCode(112,108,97,121,105,110,103,95,102,95,50,54,0), String.fromCharCode(112,114,101,100,105,99,116,95,57,95,52,51,0), String.fromCharCode(114,101,118,111,107,105,110,103,95,107,95,57,0)];
      while (1.54 <= (3.33 - huaweiN) || 5 <= (awayteamfield9.size << (Math.min(Math.abs(1), 4)))) {
          let static_hgT = String.fromCharCode(100,101,99,111,114,97,116,101,95,114,95,55,54,0);
          let loadingspinnerS: Array<any> = [674, 193, 429];
          let transfer9 = 3.0;
          let nativemodule5: Array<any> = [String.fromCharCode(100,105,121,102,112,95,52,95,57,50,0), String.fromCharCode(114,95,51,95,99,108,111,115,105,110,103,0)];
          let expired2: Array<any> = [133, 445, 768];
         huaweiN /= Math.max(3, parseFloat(`${parseInt(`${transfer9}`) * 2}`));
         static_hgT = `${loadingspinnerS.length}`;
         loadingspinnerS = [loadingspinnerS.length];
         transfer9 -= parseFloat(`${expired2.length + nativemodule5.length}`);
         nativemodule5 = [nativemodule5.length ^ static_hgT.length];
         expired2.push(1);
         break;
      }
      if (1 <= (rewindj.length / (Math.max(8, parseInt(`${huaweiN}`)))) || (huaweiN / (Math.max(7, parseFloat(`${rewindj.length}`)))) <= 3.32) {
         huaweiN += parseFloat(`${parseInt(`${huaweiN}`) | 1}`);
      }
      let moditys = 7787911.0 <= huaweiN;
      do {
         huaweiN += parseFloat(`${1 ^ parseInt(`${huaweiN}`)}`);
         if (moditys) {
            break;
         }
      } while (moditys && (4.63 >= (huaweiN + 1.36) && (huaweiN + 1.36) >= 4.97));
         rewindj.push(awayteamfield9.size + 1);
      while (rewindj.includes(huaweiN)) {
         huaweiN -= parseFloat(`${parseInt(`${huaweiN}`)}`);
         break;
      }
         rewindj = [1];
       let fullscreenminu = true;
         fullscreenminu = parseFloat(`${awayteamfield9.size}`) == huaweiN;
         rewindj = [awayteamfield9.size];
      mbsplash4.set(readM, fcdaebecbcbafcdfceaaeccfeacdbx.length * readM.length);
        

      friendsR |= recommendationI.size;
        

   let holderL = mbsplash4.size >= 6347490;
   do {
       let defaultfootballbgH = String.fromCharCode(105,95,49,48,48,95,99,97,110,99,101,108,108,97,98,108,101,0);
          let yellowcirclebg_ = String.fromCharCode(106,95,49,95,115,117,98,105,109,97,103,101,0);
          let redcirclebgc = String.fromCharCode(100,108,116,97,95,98,95,51,56,0);
          let inouttargetredE: Array<any> = [9, 410];
         defaultfootballbgH = "1";
         yellowcirclebg_ += `${inouttargetredE.length}`;
         redcirclebgc += `${(String.fromCharCode(101,0) == yellowcirclebg_ ? inouttargetredE.length : yellowcirclebg_.length)}`;
      for (let b = 0; b < 1; b++) {
         defaultfootballbgH = `${defaultfootballbgH.length}`;
      }
          let sortB = String.fromCharCode(114,95,49,53,95,98,115,102,115,0);
         defaultfootballbgH = `${defaultfootballbgH.length + 2}`;
         sortB = `${sortB.length}`;
      mbsplash4 = new Map([[`${logouserz.length}`, 3 | logouserz.length]]);
      if (holderL) {
         break;
      }
   } while ((!Array.from(mbsplash4.keys()).includes(`${recommendationI.size}`)) && holderL);
        

   while (5 >= logouserz.length) {
      logouserz = [fcdaebecbcbafcdfceaaeccfeacdbx.length | mbsplash4.size];
      break;
   }
        console.log("ATInterstitialAdShow: " + event.placementId);
      }
    );

   if ((2 * codek.size) < 2) {
      readM += `${(iconmegaphonew == String.fromCharCode(88,0) ? iconmegaphonew.length : codek.size)}`;
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

      iconmegaphonew = `${(String.fromCharCode(50,0) == libreanimatedt ? libreanimatedt.length : codek.size)}`;

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayEnd,
      (event: any) => {
        

   if (4 < fcdaebecbcbafcdfceaaeccfeacdbx.length) {
       let index9 = String.fromCharCode(121,101,115,110,111,95,111,95,52,0);
       let middlesoundU = String.fromCharCode(100,105,115,97,98,108,101,95,108,95,50,55,0);
      if (index9.length > 1 && middlesoundU == String.fromCharCode(65,0)) {
         middlesoundU = `${index9.length | middlesoundU.length}`;
      }
          let trophyW = String.fromCharCode(101,120,112,105,114,105,110,103,95,98,95,50,52,0);
          let slidere = 5.0;
         index9 = `${parseInt(`${slidere}`) / 1}`;
         trophyW = `${(trophyW == String.fromCharCode(49,0) ? trophyW.length : trophyW.length)}`;
         slidere *= trophyW.length;
         middlesoundU = `${index9.length / (Math.max(middlesoundU.length, 1))}`;
      let codegent = index9.length <= 9888187;
      do {
         index9 = `${index9.length}`;
         if (codegent) {
            break;
         }
      } while ((middlesoundU == index9) && codegent);
         middlesoundU += `${middlesoundU.length}`;
      let tumbnailg = 5482266 >= index9.length;
      do {
          let iconshareJ = String.fromCharCode(116,95,50,50,95,100,114,97,119,108,105,110,101,0);
          let iconadslinku: Array<any> = [616, 194, 714];
          let arrowdownr = true;
         index9 += `${iconadslinku.length}`;
         iconshareJ = `${((arrowdownr ? 2 : 2))}`;
         iconadslinku = [(iconshareJ.length & (arrowdownr ? 5 : 1))];
         if (tumbnailg) {
            break;
         }
      } while ((index9 == String.fromCharCode(120,0) || 3 < middlesoundU.length) && tumbnailg);
      popupT += `${2 * iconcurrentmatchv.size}`;
   }
        

   for (let o = 0; o < 1; o++) {
      backiconV -= friendsR % 2;
   }
        

   for (let g = 0; g < 3; g++) {
      mbsplash4.set(readM, 2);
   }
        

   let morex = 5196759 <= friendsR;
   do {
       let encryptV = 0.0;
       let ajaxd = 4;
       let window_5pc: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,105,98,117,116,105,111,110,95,54,95,52,48,0),String.fromCharCode(114,101,99,116,115,95,117,95,52,49,0)], [String.fromCharCode(98,105,108,97,116,101,114,97,108,95,56,95,53,52,0),String.fromCharCode(105,95,57,50,95,114,101,97,100,109,101,0)]]);
         encryptV *= 1;
         window_5pc = new Map([[`${ajaxd}`, 1]]);
         encryptV *= parseInt(`${encryptV}`) | window_5pc.size;
         ajaxd >>= Math.min(Math.abs(window_5pc.size), 5);
      let classes5 = ajaxd <= 5315222;
      do {
          let networkf = String.fromCharCode(116,95,56,49,95,100,111,116,0);
          let screen8: Map<any, any> = new Map([[String.fromCharCode(117,95,52,50,95,110,111,116,105,102,105,101,115,0),784], [String.fromCharCode(112,95,52,57,95,97,116,116,97,99,107,0),107], [String.fromCharCode(118,99,97,114,100,95,117,95,51,56,0),929]]);
         ajaxd += 3 - ajaxd;
         networkf += `${networkf.length & 2}`;
         screen8.set(networkf, 1 ^ networkf.length);
         if (classes5) {
            break;
         }
      } while (classes5 && ((parseInt(`${encryptV}`) + ajaxd) > 3 && 3 > (ajaxd + parseInt(`${encryptV}`))));
       let schedule4 = 3;
          let libreactnativejniw = String.fromCharCode(116,105,110,121,95,48,95,54,49,0);
         ajaxd &= libreactnativejniw.length - window_5pc.size;
      if ((schedule4 % 1) > 3) {
         encryptV *= parseInt(`${encryptV}`) + window_5pc.size;
      }
         window_5pc.set(`${encryptV}`, parseInt(`${encryptV}`) & 1);
      friendsR |= friendsR | 3;
      if (morex) {
         break;
      }
   } while ((Array.from(codek.keys()).includes(`${friendsR}`)) && morex);
        

   if (5.40 < backiconV) {
      backiconV /= Math.max(4, codek.size & parseInt(`${backiconV}`));
   }
        

       let webview7: Array<any> = [240, 591];
       let foreground3 = false;
         webview7 = [(1 & (foreground3 ? 3 : 3))];
          let firebaseE = 3.0;
          let eactc: Map<any, any> = new Map([[String.fromCharCode(109,97,110,97,103,101,100,95,49,95,55,52,0),811], [String.fromCharCode(111,112,101,110,95,103,95,55,49,0),850], [String.fromCharCode(120,95,57,53,95,118,100,115,111,0),696]]);
         webview7.push(eactc.size);
         firebaseE -= parseFloat(`${parseInt(`${firebaseE}`)}`);
         eactc = new Map([[`${firebaseE}`, 3]]);
      while (1 < (webview7.length - 4)) {
          let humidityO = String.fromCharCode(100,95,49,52,95,99,117,116,111,102,102,0);
          let iconnewchatj = 0;
          let sharemodalp = String.fromCharCode(113,95,49,50,95,115,116,97,114,115,0);
          let subinL = String.fromCharCode(116,95,51,95,99,101,114,116,0);
          let descG = 5.0;
         webview7 = [3];
         humidityO = `${2 & parseInt(`${descG}`)}`;
         iconnewchatj ^= humidityO.length;
         sharemodalp += `${sharemodalp.length}`;
         subinL = `${parseInt(`${descG}`) - 1}`;
         break;
      }
      if (3 <= (webview7.length % 4)) {
          let iconlogoutk: Array<any> = [675, 595];
          let libcrashsdks = false;
          let webviewY: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,105,120,101,115,95,97,95,54,54,0),false ], [String.fromCharCode(115,101,114,105,97,108,95,119,95,56,56,0),false ], [String.fromCharCode(99,104,111,111,115,101,114,95,118,95,53,56,0),true ]]);
         foreground3 = iconlogoutk.includes(foreground3);
         iconlogoutk = [3 >> (Math.min(2, Math.abs(webviewY.size)))];
         libcrashsdks = webviewY.size > 51;
      }
      let soundV = webview7.length <= 6214470;
      do {
         webview7 = [((foreground3 ? 5 : 1) / 3)];
         if (soundV) {
            break;
         }
      } while ((webview7.length <= 1) && soundV);
         foreground3 = !foreground3;
      libreanimatedt = `${codek.size}`;
        console.log("ATInterstitialPlayEnd");
      }
    );

      backiconV -= recommendationI.size * 3;

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

   if ((2 >> (Math.min(3, Math.abs(codek.size)))) <= 2 && (codek.size >> (Math.min(popupT.length, 4))) <= 2) {
       let scorepopsoundn = 5.0;
       let playercommon_ = String.fromCharCode(112,95,55,57,95,115,102,116,112,0);
       let time_mm5 = 2.0;
       let fastforwardi = String.fromCharCode(122,95,55,49,95,100,114,101,102,0);
       let search7 = String.fromCharCode(105,95,52,52,0);
      for (let v = 0; v < 2; v++) {
         time_mm5 += search7.length | 3;
      }
      if ((search7.length / 1) < 4 || 2.30 < (time_mm5 * search7.length)) {
         time_mm5 /= Math.max(parseInt(`${scorepopsoundn}`) << (Math.min(Math.abs(2), 2)), 5);
      }
      if ((parseInt(`${scorepopsoundn}`) / (Math.max(search7.length, 4))) <= 4 && 3.95 <= (scorepopsoundn / (Math.max(search7.length, 6)))) {
         scorepopsoundn += playercommon_.length * 2;
      }
      if (time_mm5 == 3.54) {
          let goalz = String.fromCharCode(100,121,110,98,117,102,95,104,95,49,48,48,0);
          let logob = String.fromCharCode(110,101,119,101,115,116,95,119,95,50,51,0);
          let brightnessQ = 2.0;
         time_mm5 *= parseInt(`${scorepopsoundn}`) | goalz.length;
         goalz = `${parseInt(`${brightnessQ}`) % (Math.max(logob.length, 8))}`;
         logob = `${parseInt(`${brightnessQ}`)}`;
      }
         scorepopsoundn -= 1 * parseInt(`${scorepopsoundn}`);
      while ((2 << (Math.min(1, fastforwardi.length))) == 3 && (2 & fastforwardi.length) == 4) {
         fastforwardi = "1";
         break;
      }
      while (2.0 > (fastforwardi.length + scorepopsoundn) && 1.2 > (scorepopsoundn + 2.0)) {
         fastforwardi = `${2 ^ playercommon_.length}`;
         break;
      }
          let configurep = 2.0;
          let roomw = String.fromCharCode(109,111,100,101,109,95,114,95,54,48,0);
          let showmoreT = String.fromCharCode(99,104,97,110,103,101,114,101,102,95,101,95,52,55,0);
         playercommon_ += `${playercommon_.length >> (Math.min(Math.abs(1), 4))}`;
         configurep += (String.fromCharCode(109,0) == roomw ? roomw.length : parseInt(`${configurep}`));
         showmoreT = `${roomw.length ^ showmoreT.length}`;
         playercommon_ += "2";
         scorepopsoundn += parseInt(`${scorepopsoundn}`) & 3;
      for (let v = 0; v < 3; v++) {
          let infoe: Map<any, any> = new Map([[String.fromCharCode(101,110,103,105,110,101,115,95,100,95,56,0),true ], [String.fromCharCode(107,101,121,95,51,95,55,50,0),true ], [String.fromCharCode(121,95,53,51,0),true ]]);
          let merger2 = 2;
          let benefitB = 5;
          let rightC = 5.0;
         playercommon_ = `${benefitB / 3}`;
         infoe.set(`${merger2}`, infoe.size);
         merger2 >>= Math.min(5, Math.abs(1));
         benefitB ^= 2;
         rightC += merger2 % (Math.max(2, parseInt(`${rightC}`)));
      }
          let profileactiveD = 3.0;
         fastforwardi = "2";
         profileactiveD -= parseFloat(`${parseInt(`${profileactiveD}`)}`);
      for (let r = 0; r < 3; r++) {
         playercommon_ += `${parseInt(`${time_mm5}`)}`;
      }
         search7 = `${parseInt(`${time_mm5}`) / (Math.max(1, fastforwardi.length))}`;
       let injury3: Map<any, any> = new Map([[String.fromCharCode(107,95,57,55,95,102,105,100,99,116,0),String.fromCharCode(115,95,49,53,95,106,97,99,111,115,117,98,0)], [String.fromCharCode(102,95,52,53,95,99,111,110,116,111,108,108,101,114,0),String.fromCharCode(121,95,55,49,95,115,117,98,102,105,101,108,100,115,0)]]);
      popupT = `${parseInt(`${scorepopsoundn}`)}`;
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

   let matchactiveU = libreanimatedt.length <= 5401611;
   do {
      libreanimatedt = "2";
      if (matchactiveU) {
         break;
      }
   } while (matchactiveU && ((mbsplash4.size - libreanimatedt.length) < 5));

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialClose,
      (event: any) => {
        dispatch(interstitialClose());

      fcdaebecbcbafcdfceaaeccfeacdbx = [2 | mbsplash4.size];
        

       let nbatrophyM = 4;
       let moonh = true;
      if (moonh) {
          let emojig = false;
          let vipsportl: Array<any> = [String.fromCharCode(109,95,49,48,95,103,101,116,101,110,118,0), String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,115,95,111,95,50,54,0), String.fromCharCode(102,95,50,95,101,110,99,104,0)];
         nbatrophyM |= vipsportl.length * 1;
      }
      let bootsplashK = moonh ? !moonh : moonh;
      do {
         moonh = !moonh;
         if (bootsplashK) {
            break;
         }
      } while (bootsplashK && (!moonh));
      let nbatrophyP = nbatrophyM <= 7289134;
      do {
         nbatrophyM |= nbatrophyM << (Math.min(5, Math.abs(2)));
         if (nbatrophyP) {
            break;
         }
      } while ((3 < nbatrophyM) && nbatrophyP);
      let const_iz = nbatrophyM >= 9247664;
      do {
          let profilepicn: Array<any> = [String.fromCharCode(103,95,50,53,95,100,114,105,118,101,114,115,0), String.fromCharCode(98,95,55,53,95,98,111,111,116,115,116,114,97,112,0), String.fromCharCode(105,95,57,55,95,115,101,118,101,110,0)];
          let componentregistryh: Map<any, any> = new Map([[String.fromCharCode(110,95,55,54,95,114,101,118,101,97,108,101,100,0),true ], [String.fromCharCode(111,103,103,101,114,95,115,95,54,53,0),false ], [String.fromCharCode(115,111,102,114,101,101,95,120,95,56,54,0),true ]]);
          let whitevideoliveP = true;
          let iconpointscore7 = 1.0;
          let photoL = 3.0;
         nbatrophyM %= Math.max(profilepicn.length, 2);
         profilepicn.push(2 + parseInt(`${iconpointscore7}`));
         componentregistryh = new Map([[`${photoL}`, ((whitevideoliveP ? 5 : 5) % (Math.max(parseInt(`${photoL}`), 6)))]]);
         whitevideoliveP = iconpointscore7 >= 27.51;
         if (const_iz) {
            break;
         }
      } while (const_iz && (3 == nbatrophyM || 3 == (3 << (Math.min(5, Math.abs(nbatrophyM))))));
          let rootO = String.fromCharCode(118,100,115,111,95,56,95,52,57,0);
          let friends3 = 0.0;
          let final_f7 = String.fromCharCode(101,110,102,111,114,99,101,95,112,95,55,54,0);
         nbatrophyM += final_f7.length;
         rootO = `${(String.fromCharCode(89,0) == rootO ? rootO.length : parseInt(`${friends3}`))}`;
         friends3 -= parseFloat(`${rootO.length}`);
         final_f7 = "1";
      for (let x = 0; x < 2; x++) {
         nbatrophyM &= nbatrophyM;
      }
      iconmegaphonew += `${readM.length}`;
        

   if (trophyw.includes(`${popupT.length}`)) {
      trophyw = `${readM.length}`;
   }
        

   while ((3 * friendsR) < 4 && 3 < (3 * friendsR)) {
      fcdaebecbcbafcdfceaaeccfeacdbx.push(2 | popupT.length);
      break;
   }
        

      iconmegaphonew += `${(trophyw == String.fromCharCode(54,0) ? trophyw.length : friendsR)}`;
        

   while (logouserz.length >= 2) {
      logouserz.push(iconcurrentmatchv.size);
      break;
   }
        

   if (2 > iconmegaphonew.length) {
      codek.set(`${friendsR}`, friendsR);
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
