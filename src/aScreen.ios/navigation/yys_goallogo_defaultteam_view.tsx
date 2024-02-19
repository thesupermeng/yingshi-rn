

class SendArrowselectdownTempEntry {
    static mimeOrangeclockSendPolicy = (contents: [number], key: number, hasEmoji: boolean) => {
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

import HomeScreen from "../screens/yys_calendar";
import PlaylistScreen from "../screens/Playlist/yys_event_humidity";
import ProfileScreen from "../screens/Profile/yys_text_policy";
import WatchAnytime from "../screens/yys_vietnam_playlist";
import SearchScreen from "../screens/Common/yys_libavdevice_nterstitial";
import PlayScreen from "../screens/Common/yys_holder_iconuser";
import { AllCommentScreen } from "../screens/yys_singapore_predictionarrow";
import LiveStationPlayScreen from "../screens/Common/yys_shootyesgoal_const";
import FeedbackScreen from "../screens/Profile/yys_register";
import Invite from "../screens/Profile/yys_apple_dragclose";
import InviteDetails from "../screens/Profile/yys_iconclosewhitewithbg";
import UserCenter from "../screens/Profile/yys_matchinactive";
import MainCollectionScreen from "../screens/Profile/Collection/yys_rewind";
import PlaylistDetailsScreen from "../screens/Playlist/yys_downloading";
import HistoryScreen from "../screens/Profile/yys_yellowtored";
import LiveStationsScreen from "../screens/Common/yys_country_reactnativeultimatelistview";
import AboutUsScreen from "../screens/Profile/yys_iconclose";
import PrivacyScreen from "../screens/Profile/yys_latn_crown";
import UserAgreementScreen from "../screens/Profile/yys_china";
import ConfigureScreen from "../screens/Profile/yys_left_profile";
import OtpScreen from "../screens/Auth/yys_share";
import SetUsername from "../screens/Auth/yys_membership";
import {
  HomeTabSvg,
  HomeTabActiveSvg,
  PlaylistTabSvg,
  PlaylistTabActiveSvg,
  ProfileTabSvg,
  ProfileTabActiveSvg,
  VideoTabSvg,
  VideoTabActiveSvg,
  SportsSvg,
} from "@static";

import CatalogScreen from "../screens/Common/yys_loading";
import ShortVodCollectionScreen from "../screens/Profile/Collection/yys_mbbid_agreement";
import { useDispatch } from "react-redux";
import SigninupBottomSheet from "../components/auth/yys_feedback_terms";
import {
  yysMail,
  yysUnreadVolume,
  yysNbatrophyBootsplash,
  yysPredictionbanner,
  yysComponentComponentregistry,
} from "@type";
import RNBootSplash from "react-native-bootsplash";
import { yysIconclosewhiteBaiduads } from "@redux";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { LogBox, Platform, StyleSheet, Text, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_DOMAIN, UMENG_CHANNEL } from "@utility";
import { yysFloaterIconsubssuccess } from "../../../yys_yellowscoreball_topon";
import {
  hideLoginAction,
  interstitialClose,
  interstitialShow,
  removeScreenAction,
  resetBottomSheetAction,
  resetSportWatchTime,
} from "@redux";
import { Dialog } from "@rneui/themed";
import FastImage from "../components/common/yys_alert_backwhite";
import { screenModel } from "@type";
import { YingshiDarkTheme, YingshiLightTheme } from "@utility";
import {
  updateUserAuth,
  updateUserReferral,
} from "@redux";
import ExpiredOverlay from "../components/modal/yys_style";
import EventRules from "../screens/Profile/yys_watch";
import PrivacyPolicyOverlay from "../components/modal/yys_mintegral_configure";
import Orientation from "react-native-orientation-locker";
import {
  handleAppOrientation,
  handleDevicesOrientation,
  lockAppOrientation,
  updateNetworkInfo,
} from "@redux";
import { yysDownloadingCombined } from "@redux";
import { AdsBannerContext } from "../../contexts/yys_libreactperfloggerjni_defaultroombg";
import VIP from "../screens/Profile/yys_textlayoutmanager";
import { withIAPContext } from "react-native-iap";
import { VipDetails } from "../components/vip/yys_liblogger";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { ATInterstitialRNSDK } from "./../../../AnyThinkAds/yys_redirect_megaphone";
import { yysHomeloading } from "@api";
import { CRouteInitializer } from "../../routes/yys_guide_android";
import { yysIconplaySuggestion } from "@redux";
import { yysIconstar } from "@models";

export default () => {
  const Stack = createNativeStackNavigator<yysPredictionbanner>();
  const HomeTab = createBottomTabNavigator<yysMail>();
  const { colors, textVariants, spacing } = useTheme();
  const settingsReducer: yysDownloadingCombined = useAppSelector(
    ({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer
  );
  const themeReducer = useAppSelector(
    ({ themeReducer }: yysIconclosewhiteBaiduads) => themeReducer
  );
  const theme = themeReducer.theme ? YingshiDarkTheme : YingshiLightTheme;

  let hasNotch = DeviceInfo.hasNotch();

  let iconWidth = 22;
  if (hasNotch) {
    iconWidth = 25;
  }

  const userState = useSelector<yysIconplaySuggestion>('userReducer');

  const HomeTabScreen = useCallback(() => {
       let areaS = 4.0;
    let volumeL = 1.0;
    let floatingy: Array<any> = [867, 454, 860];
    let mintegralt: Map<any, any> = new Map([[String.fromCharCode(118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,0),793], [String.fromCharCode(114,103,98,97,108,101,0),137], [String.fromCharCode(111,102,102,115,0),845]]);
    let rewind3 = String.fromCharCode(108,105,110,101,115,105,122,101,0);
    let modalh = false;
    let informatione = 0;
    let suboutC = String.fromCharCode(115,105,122,101,115,0);
    let expiredf = 5.0;
    let sinak = 5.0;
   let profile3 = 7853668 >= informatione;
   do {
       let selectM = 3;
       let predictionbanners = String.fromCharCode(104,97,110,100,108,101,115,0);
      for (let s = 0; s < 2; s++) {
          let yellowanimationlivee: Map<any, any> = new Map([[String.fromCharCode(111,117,116,112,117,116,115,0),212], [String.fromCharCode(102,114,97,99,116,105,111,110,97,108,0),580]]);
          let lnewse = 3.0;
          let profileframeI = false;
          let penaltygoals = 3;
         selectM -= 1 | yellowanimationlivee.size;
         yellowanimationlivee.set(`${profileframeI}`, 3 - parseInt(`${lnewse}`));
         lnewse -= parseInt(`${lnewse}`) >> (Math.min(1, Math.abs(penaltygoals)));
         profileframeI = !profileframeI;
         penaltygoals >>= Math.min(parseInt(`${Math.abs(((profileframeI ? 3 : 3) / (Math.max(6, parseInt(`${lnewse}`)))))}`), 4);
      }
      for (let f = 0; f < 1; f++) {
         selectM <<= Math.min(2, Math.abs((predictionbanners == String.fromCharCode(120,0) ? selectM : predictionbanners.length)));
      }
         predictionbanners += "1";
          let airbnbstarB = String.fromCharCode(110,111,109,105,110,97,116,101,0);
          let paginationy = String.fromCharCode(116,105,109,115,116,97,109,112,0);
          let upgradeu: Array<any> = [890, 378, 291];
         selectM >>= Math.min(2, airbnbstarB.length);
         airbnbstarB += `${upgradeu.length}`;
         paginationy += `${upgradeu.length}`;
         selectM /= Math.max(3, 1);
          let currentU = 1.0;
          let videovarr: Array<any> = [777, 935];
          let basketballtrophyM = String.fromCharCode(97,116,116,105,98,117,116,101,0);
         selectM <<= Math.min(2, Math.abs(1));
         currentU += videovarr.length;
         videovarr.push(parseInt(`${currentU}`));
         basketballtrophyM += `${basketballtrophyM.length}`;
      informatione %= Math.max(parseInt(`${areaS}`), 3);
      if (profile3) {
         break;
      }
   } while ((4 >= (informatione / 3) || (parseInt(`${areaS}`) / (Math.max(8, informatione))) >= 3) && profile3);
       let libreactL: Map<any, any> = new Map([[String.fromCharCode(101,110,115,117,114,101,0),true ], [String.fromCharCode(112,114,111,120,105,109,105,116,121,0),false ]]);
       let control4 = String.fromCharCode(117,110,114,101,115,111,108,118,101,100,0);
       let defaultroombgU = 0.0;
          let tailt = String.fromCharCode(105,114,114,101,108,101,118,97,110,116,0);
         control4 += `${libreactL.size}`;
         tailt = "1";
          let nterstitialR = String.fromCharCode(102,116,115,97,117,120,0);
          let abouta = 1.0;
         libreactL = new Map([[nterstitialR, parseInt(`${abouta}`) >> (Math.min(nterstitialR.length, 1))]]);
         control4 += `${libreactL.size}`;
         control4 += `${control4.length}`;
      while ((parseInt(`${defaultroombgU}`) * control4.length) <= 5 || 1.77 <= (5.7 * defaultroombgU)) {
          let teamdetailsbg1: Map<any, any> = new Map([[String.fromCharCode(112,114,111,102,105,108,101,0),626], [String.fromCharCode(98,97,108,97,110,99,101,115,0),292]]);
          let specr = 5;
          let applicationf = String.fromCharCode(99,111,100,101,98,111,111,107,115,0);
          let subtext5 = String.fromCharCode(109,106,112,101,103,97,0);
          let dialogI = String.fromCharCode(115,110,97,112,115,104,111,116,0);
         defaultroombgU += parseFloat(`${subtext5.length}`);
         teamdetailsbg1.set(`${specr}`, specr);
         applicationf = "2";
         subtext5 = `${applicationf.length - specr}`;
         dialogI = `${2 % (Math.max(9, dialogI.length))}`;
         break;
      }
         control4 += "1";
       let d_unlockv: Map<any, any> = new Map([[String.fromCharCode(115,105,98,108,105,110,103,0),String.fromCharCode(97,102,116,101,114,0)], [String.fromCharCode(109,97,107,101,109,97,99,112,107,103,0),String.fromCharCode(105,115,109,108,0)]]);
       let castf: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,114,97,116,101,0),777], [String.fromCharCode(116,121,112,101,115,101,116,116,101,114,0),368]]);
      let penaltygoalM = castf.size >= 6904412;
      do {
         castf = new Map([[`${castf.size}`, parseInt(`${defaultroombgU}`) % 2]]);
         if (penaltygoalM) {
            break;
         }
      } while (penaltygoalM && ((castf.size * 2) <= 4 || 4 <= (castf.size * 2)));
      let thumbnailW = d_unlockv.size >= 9791391;
      do {
          let inouttargetredn: Array<any> = [147, 968, 873];
          let resultW = String.fromCharCode(105,114,99,97,109,0);
          let cornerkickR = String.fromCharCode(100,101,105,110,105,116,0);
          let teamE = String.fromCharCode(98,97,115,101,0);
         d_unlockv = new Map([[`${libreactL.size}`, 3]]);
         inouttargetredn = [1];
         resultW = `${inouttargetredn.length}`;
         cornerkickR = `${resultW.length}`;
         teamE += `${(String.fromCharCode(117,0) == cornerkickR ? inouttargetredn.length : cornerkickR.length)}`;
         if (thumbnailW) {
            break;
         }
      } while (((libreactL.size - 3) <= 2 && (libreactL.size - d_unlockv.size) <= 3) && thumbnailW);
      informatione ^= 3 * floatingy.length;
       let settinge: Array<any> = [280, 175, 947];
       let footballtrophyu = 1.0;
         footballtrophyu /= Math.max(3, parseFloat(`${1}`));
       let bellp = String.fromCharCode(114,101,113,115,116,97,116,101,0);
       let basketballiconw = String.fromCharCode(100,111,99,117,109,101,110,116,0);
      while (2.25 == (footballtrophyu / (Math.max(parseFloat(`${settinge.length}`), 8))) || (3 >> (Math.min(5, settinge.length))) == 1) {
          let yellowscoreballa = 1.0;
          let typingloadingJ = String.fromCharCode(115,111,99,107,101,116,118,97,114,0);
          let iconarrowrightW = false;
          let private_w2 = 4.0;
         settinge = [parseInt(`${private_w2}`)];
         yellowscoreballa *= ((iconarrowrightW ? 2 : 5));
         typingloadingJ = `${typingloadingJ.length}`;
         private_w2 /= Math.max(1, typingloadingJ.length);
         break;
      }
          let modalD = false;
         basketballiconw += `${1 >> (Math.min(2, settinge.length))}`;
         modalD = (!modalD ? modalD : !modalD);
          let resendM = false;
          let weatherE = 3.0;
          let k_imagev = String.fromCharCode(108,111,110,103,105,116,117,100,101,0);
         footballtrophyu /= Math.max(4, parseFloat(`${2}`));
         resendM = k_imagev.length <= 59;
         weatherE += 3 % (Math.max(2, parseInt(`${weatherE}`)));
         k_imagev += `${(k_imagev == String.fromCharCode(88,0) ? parseInt(`${weatherE}`) : k_imagev.length)}`;
      for (let g = 0; g < 1; g++) {
         bellp += `${basketballiconw.length % (Math.max(1, 1))}`;
      }
      areaS += (rewind3 == String.fromCharCode(102,0) ? settinge.length : rewind3.length);
   while (rewind3 != suboutC) {
      suboutC = `${floatingy.length >> (Math.min(Math.abs(1), 2))}`;
      break;
   }
      areaS += parseInt(`${volumeL}`);
   for (let b = 0; b < 3; b++) {
      rewind3 += "3";
   }
       let penaltygoalW = 0;
       let iconmoreM = String.fromCharCode(117,112,115,97,109,112,108,101,0);
      while (3 >= (4 + iconmoreM.length) && (iconmoreM.length + penaltygoalW) >= 4) {
          let calendarD = 2;
          let specd = String.fromCharCode(105,105,114,102,105,108,116,101,114,0);
          let fillN = String.fromCharCode(109,97,110,117,97,108,0);
          let schedulerb: Array<any> = [414, 589];
         penaltygoalW *= specd.length;
         calendarD &= 1 << (Math.min(Math.abs(calendarD), 4));
         specd = `${schedulerb.length}`;
         fillN += `${calendarD}`;
         schedulerb.push(2);
         break;
      }
      for (let f = 0; f < 3; f++) {
         penaltygoalW ^= penaltygoalW % (Math.max(5, iconmoreM.length));
      }
       let shrinkN = String.fromCharCode(101,115,99,97,112,101,0);
       let modulesu = String.fromCharCode(104,97,114,112,101,110,0);
       let holdera: Array<any> = [815, 880];
          let homeiconu = String.fromCharCode(99,108,105,112,112,101,100,0);
          let infoQ = 4.0;
          let encryptv = 2.0;
         modulesu = `${modulesu.length | holdera.length}`;
         homeiconu = "3";
         infoQ -= parseInt(`${infoQ}`) - parseInt(`${encryptv}`);
         encryptv /= Math.max(parseInt(`${infoQ}`), 3);
         iconmoreM = `${penaltygoalW}`;
      suboutC += "1";
   while (4 == (suboutC.length + 2)) {
       let foregroundQ = 5.0;
       let t_managerk = 0.0;
       let reactnativeratingsk = 4.0;
       let homeloadingN = String.fromCharCode(100,101,102,101,97,116,0);
       let loadingt = true;
      let dropdownW = String.fromCharCode(104,97,102,104,106,114,116,95,111,111,0) == homeloadingN;
      do {
         homeloadingN = `${2 << (Math.min(Math.abs(parseInt(`${reactnativeratingsk}`)), 1))}`;
         if (dropdownW) {
            break;
         }
      } while ((!loadingt && homeloadingN.length > 1) && dropdownW);
         t_managerk *= (parseFloat(`${String.fromCharCode(66,0) == homeloadingN ? homeloadingN.length : (loadingt ? 1 : 4)}`));
          let subbasketballplayer0 = String.fromCharCode(103,117,105,100,115,0);
          let iconuserF = String.fromCharCode(99,98,117,102,0);
          let sharemodalu = String.fromCharCode(118,97,114,105,110,102,111,0);
         t_managerk -= parseFloat(`${3}`);
         subbasketballplayer0 = "1";
         iconuserF += `${iconuserF.length | 1}`;
         sharemodalu = `${iconuserF.length & 1}`;
         reactnativeratingsk *= parseFloat(`${homeloadingN.length - parseInt(`${foregroundQ}`)}`);
      let mbbannerM = reactnativeratingsk >= 5898996.0;
      do {
          let feedbackG = String.fromCharCode(115,116,100,108,105,98,0);
          let benefitM: Map<any, any> = new Map([[String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,115,0),755], [String.fromCharCode(97,100,97,112,116,111,114,0),927]]);
         reactnativeratingsk /= Math.max(4, parseFloat(`${parseInt(`${foregroundQ}`)}`));
         feedbackG += "3";
         benefitM = new Map([[`${benefitM.size}`, (feedbackG == String.fromCharCode(114,0) ? benefitM.size : feedbackG.length)]]);
         if (mbbannerM) {
            break;
         }
      } while ((1.18 < (1.36 + reactnativeratingsk) || (reactnativeratingsk * 1.36) < 3.16) && mbbannerM);
          let borderlessq = true;
          let libbufferN = 1.0;
         loadingt = homeloadingN.length >= 94;
         borderlessq = !borderlessq;
         libbufferN *= 3 % (Math.max(5, parseInt(`${libbufferN}`)));
      if (4.42 == (5.7 / (Math.max(10, foregroundQ))) || !loadingt) {
          let pushz = 0.0;
          let nendQ = String.fromCharCode(100,109,117,108,0);
         loadingt = reactnativeratingsk > t_managerk;
         pushz -= 3 * parseInt(`${pushz}`);
         nendQ += "3";
      }
      let iconpipshrinko = 8669187.0 >= reactnativeratingsk;
      do {
         reactnativeratingsk -= parseFloat(`${parseInt(`${t_managerk}`)}`);
         if (iconpipshrinko) {
            break;
         }
      } while ((4.47 >= (t_managerk / 4)) && iconpipshrinko);
         loadingt = reactnativeratingsk >= 68.49;
         homeloadingN = `${(homeloadingN == String.fromCharCode(115,0) ? (loadingt ? 5 : 2) : homeloadingN.length)}`;
      let pointm = 8226421.0 <= foregroundQ;
      do {
         foregroundQ /= Math.max((parseFloat(`${(loadingt ? 2 : 1) + parseInt(`${reactnativeratingsk}`)}`)), 3);
         if (pointm) {
            break;
         }
      } while (pointm && (reactnativeratingsk < 3.5));
         loadingt = 12.32 == (foregroundQ - reactnativeratingsk);
      if (3.87 < (reactnativeratingsk * 1.14) && 1.14 < (reactnativeratingsk * t_managerk)) {
          let iconorientationn = 1;
          let textinputL = 1;
          let cricketd = false;
          let smallsoundR = false;
         reactnativeratingsk /= Math.max((parseFloat(`${(cricketd ? 5 : 1) + iconorientationn}`)), 2);
         iconorientationn |= textinputL + 3;
         textinputL += 3;
         cricketd = !smallsoundR;
      }
      if ((reactnativeratingsk - 2.92) < 3.73) {
          let runtimeq = 3;
          let emojihearth: Array<any> = [665, 983];
          let changeq = 3.0;
          let libavutilb: Array<any> = [141, 179, 384];
          let toponp = 4.0;
         reactnativeratingsk += parseFloat(`${runtimeq ^ 3}`);
         runtimeq &= parseInt(`${toponp}`);
         emojihearth.push(libavutilb.length);
         changeq *= parseInt(`${changeq}`) >> (Math.min(1, Math.abs(1)));
         libavutilb = [parseInt(`${toponp}`) << (Math.min(2, Math.abs(1)))];
      }
         t_managerk /= Math.max(3, (parseFloat(`${(loadingt ? 2 : 2) - parseInt(`${reactnativeratingsk}`)}`)));
      floatingy.push(parseInt(`${volumeL}`) % (Math.max(2, rewind3.length)));
      break;
   }
      mintegralt.set(`${volumeL}`, floatingy.length);
      areaS -= (rewind3 == String.fromCharCode(57,0) ? suboutC.length : rewind3.length);
      volumeL += (parseFloat(`${String.fromCharCode(104,0) == suboutC ? parseInt(`${expiredf}`) : suboutC.length}`));
       let whistleX = String.fromCharCode(109,105,109,105,99,0);
       let minimizeA: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,105,109,103,105,110,116,0),String.fromCharCode(105,110,111,117,116,115,0)], [String.fromCharCode(105,97,116,0),String.fromCharCode(116,97,110,0)], [String.fromCharCode(114,101,99,114,101,97,116,101,0),String.fromCharCode(99,111,112,121,100,97,116,97,0)]]);
       let c_lockG = false;
       let rootS = true;
         whistleX = `${((c_lockG ? 1 : 5) % (Math.max(minimizeA.size, 6)))}`;
         c_lockG = rootS;
       let baiduadsg = 1.0;
         minimizeA.set(`${baiduadsg}`, parseInt(`${baiduadsg}`) | 3);
      for (let b = 0; b < 3; b++) {
          let icondefaultthumbnailt = String.fromCharCode(104,101,97,114,116,0);
          let v_managerl = String.fromCharCode(99,111,110,110,105,110,112,117,116,0);
          let controls6 = 4.0;
         c_lockG = (v_managerl.length >> (Math.min(2, Math.abs(minimizeA.size)))) == 50;
         icondefaultthumbnailt += `${parseInt(`${controls6}`)}`;
         v_managerl = `${1 >> (Math.min(4, icondefaultthumbnailt.length))}`;
         controls6 += icondefaultthumbnailt.length;
      }
      suboutC += `${informatione}`;
   while ((informatione >> (Math.min(Math.abs(1), 1))) == 2 || (informatione >> (Math.min(suboutC.length, 5))) == 1) {
      informatione >>= Math.min(2, parseInt(`${Math.abs(((modalh ? 3 : 5) / (Math.max(2, 5))))}`));
      break;
   }
       let launcherf = 3.0;
       let mbsplashX = 2.0;
       let inouttargetredE = 0.0;
       let darkj = 1.0;
      if ((mbsplashX + 2) >= 5.41) {
          let loginsuccessU: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,0),427], [String.fromCharCode(119,97,118,112,97,99,107,101,110,99,0),762]]);
         inouttargetredE += parseFloat(`${3}`);
         loginsuccessU.set(`${loginsuccessU.size}`, loginsuccessU.size >> (Math.min(Math.abs(1), 1)));
      }
      while (darkj >= 5.100) {
         mbsplashX += parseFloat(`${parseInt(`${mbsplashX}`) / 1}`);
         break;
      }
      for (let h = 0; h < 2; h++) {
         darkj -= parseFloat(`${parseInt(`${mbsplashX}`) >> (Math.min(Math.abs(parseInt(`${launcherf}`)), 4))}`);
      }
      let thumbnailK = 7881684.0 >= darkj;
      do {
          let giflivestreamingi = 5.0;
         darkj += parseFloat(`${parseInt(`${mbsplashX}`) & parseInt(`${launcherf}`)}`);
         giflivestreamingi *= parseInt(`${giflivestreamingi}`) | 1;
         if (thumbnailK) {
            break;
         }
      } while (thumbnailK && ((darkj / 4.46) == 1.46 || 5.46 == (darkj + 4.46)));
         inouttargetredE += parseFloat(`${1 * parseInt(`${inouttargetredE}`)}`);
      floatingy.push(parseInt(`${expiredf}`) >> (Math.min(Math.abs(mintegralt.size), 3)));
   let statsJ = 6753236 >= informatione;
   do {
       let frame_82N: Array<any> = [191, 330];
       let diceZ = 2.0;
       let defaultlogoX: Map<any, any> = new Map([[String.fromCharCode(99,114,111,115,115,112,111,115,116,0),358], [String.fromCharCode(97,117,100,0),105]]);
       let bgvipxvodF = String.fromCharCode(101,110,108,97,114,103,101,0);
      while ((defaultlogoX.size >> (Math.min(4, frame_82N.length))) == 5 && (5 >> (Math.min(4, frame_82N.length))) == 4) {
         defaultlogoX = new Map([[`${frame_82N.length}`, parseInt(`${diceZ}`)]]);
         break;
      }
         frame_82N = [bgvipxvodF.length];
      while (defaultlogoX.size < bgvipxvodF.length) {
         bgvipxvodF += `${(bgvipxvodF == String.fromCharCode(68,0) ? parseInt(`${diceZ}`) : bgvipxvodF.length)}`;
         break;
      }
       let emojiu = String.fromCharCode(114,101,109,111,118,101,0);
       let matchf = String.fromCharCode(99,97,114,116,0);
      let hometeamfieldL = 8507444.0 <= diceZ;
      do {
          let backward_ = String.fromCharCode(100,101,98,117,103,103,105,110,103,0);
          let iconclosewhitebgH = String.fromCharCode(118,101,110,117,101,0);
          let exampleimage8 = 4.0;
         diceZ -= parseFloat(`${iconclosewhitebgH.length / (Math.max(1, 7))}`);
         backward_ += `${parseInt(`${exampleimage8}`) ^ 2}`;
         iconclosewhitebgH += `${backward_.length}`;
         exampleimage8 += parseFloat(`${backward_.length}`);
         if (hometeamfieldL) {
            break;
         }
      } while (hometeamfieldL && ((diceZ / (Math.max(5.98, 5))) == 3.3 || (parseFloat(`${defaultlogoX.size}`) / (Math.max(5, diceZ))) == 5.98));
          let greyarrowup2 = String.fromCharCode(111,110,101,108,105,110,101,0);
         frame_82N = [frame_82N.length << (Math.min(2, Math.abs(defaultlogoX.size)))];
         greyarrowup2 += "1";
      let pointN = 6714554 <= matchf.length;
      do {
         matchf += `${2 - defaultlogoX.size}`;
         if (pointN) {
            break;
         }
      } while (pointN && (matchf.length <= 4));
      while ((3.83 - diceZ) > 3.90 || 3.96 > (3.83 - diceZ)) {
         diceZ *= parseFloat(`${bgvipxvodF.length}`);
         break;
      }
      while ((parseInt(`${diceZ}`) * defaultlogoX.size) == 5) {
         diceZ += parseFloat(`${2 << (Math.min(3, bgvipxvodF.length))}`);
         break;
      }
       let servicen: Map<any, any> = new Map([[String.fromCharCode(112,111,119,101,114,0),445], [String.fromCharCode(118,105,115,105,98,108,105,116,121,0),499], [String.fromCharCode(97,112,112,97,114,101,110,116,0),60]]);
       let banneri: Map<any, any> = new Map([[String.fromCharCode(97,120,105,120,0),153], [String.fromCharCode(117,121,118,121,0),943], [String.fromCharCode(97,101,99,0),151]]);
         emojiu = "1";
      while ((emojiu.length - frame_82N.length) <= 2 && 2 <= (frame_82N.length - 2)) {
          let grayf: Array<any> = [928, 987];
          let defaultpredictionprofileT = String.fromCharCode(116,101,120,116,115,0);
          let dark2 = 0.0;
          let tempnodatap = 2;
          let chartg = 2.0;
         emojiu = `${parseInt(`${dark2}`) >> (Math.min(Math.abs(defaultlogoX.size), 3))}`;
         grayf = [parseInt(`${chartg}`) | 1];
         defaultpredictionprofileT += `${tempnodatap + 2}`;
         dark2 *= parseFloat(`${2}`);
         tempnodatap %= Math.max(2, defaultpredictionprofileT.length);
         chartg += parseFloat(`${3 & grayf.length}`);
         break;
      }
      informatione *= parseInt(`${expiredf}`) / (Math.max(defaultlogoX.size, 4));
      if (statsJ) {
         break;
      }
   } while (((rewind3.length / 5) < 2 && 5 < (informatione / (Math.max(4, rewind3.length)))) && statsJ);
      informatione %= Math.max(parseInt(`${expiredf}`) / 2, 4);
   for (let o = 0; o < 2; o++) {
      floatingy.push((String.fromCharCode(67,0) == suboutC ? suboutC.length : parseInt(`${expiredf}`)));
   }
      floatingy = [parseInt(`${volumeL}`) - 3];

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
                <HomeTabActiveSvg
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <HomeTabSvg
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            } else if (route.name === "播单") {
              icon = focused ? (
                <PlaylistTabActiveSvg
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <PlaylistTabSvg
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            } else if (route.name === "我的") {
              icon = focused ? (
                <ProfileTabActiveSvg
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <ProfileTabSvg
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            } else if (route.name === "随心看") {
              icon = focused ? (
                <VideoTabActiveSvg
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <VideoTabSvg
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            } else if (route.name === "体育") {
              icon = focused ? (
                <SportsSvg
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <SportsSvg
                  width={iconWidth}
                  color={theme.icons.inactiveNavIconColor}
                />
              );
            }
            return icon;
          },
        })}
      >
        {yysFloaterIconsubssuccess.instance.tabConfig != null && yysFloaterIconsubssuccess.instance.len == 5 ? (
          <>
            <HomeTab.Screen name="首页" component={HomeScreen} />
            {/* <HomeTab.Screen name="随心看" component={WatchAnytime} /> */}
            {/* <HomeTab.Screen name="体育" component={MatchesScreen} /> */}
            <HomeTab.Screen name="播单" component={PlaylistScreen} />
            <HomeTab.Screen name="我的" component={ProfileScreen} />
          </>
        ) : (
          <>
            <HomeTab.Screen name="首页" component={HomeScreen} />
            {/* <HomeTab.Screen name="随心看" component={WatchAnytime} /> */}
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
       let bellreminderQ = 3.0;
    let giftbuttono: Array<any> = [394, 20];
    let libjsinspectorB = 0;
    let launchO = String.fromCharCode(116,101,115,116,101,114,0);
    let arrowrighta = 5;
    let awayteamfieldt = 3.0;
    let langkeyI = String.fromCharCode(116,105,109,101,105,110,102,111,0);
    let tempa = String.fromCharCode(97,118,112,107,116,0);
    let calendaro = 5.0;
    let areaA = String.fromCharCode(98,105,116,97,108,108,111,99,0);
    let bannert = true;
       let signinupt = 0.0;
       let libturbomodulejsijniL = 0;
       let bridgeN = false;
      while ((3 ^ libturbomodulejsijniL) > 2) {
         bridgeN = 39 == libturbomodulejsijniL || bridgeN;
         break;
      }
         signinupt *= libturbomodulejsijniL;
      for (let t = 0; t < 2; t++) {
         libturbomodulejsijniL -= parseInt(`${signinupt}`);
      }
      if (libturbomodulejsijniL < 4) {
         signinupt *= libturbomodulejsijniL;
      }
      let disth = 6458636.0 <= signinupt;
      do {
         signinupt *= parseInt(`${signinupt}`);
         if (disth) {
            break;
         }
      } while (disth && (!bridgeN || 2.36 <= (3.28 * signinupt)));
         libturbomodulejsijniL %= Math.max(libturbomodulejsijniL, 5);
          let mutedf = String.fromCharCode(100,101,110,111,105,115,101,114,0);
         bridgeN = mutedf.includes(`${libturbomodulejsijniL}`);
      let whitesmalltickk = 9511152 <= libturbomodulejsijniL;
      do {
         libturbomodulejsijniL >>= Math.min(2, Math.abs(libturbomodulejsijniL + 3));
         if (whitesmalltickk) {
            break;
         }
      } while (whitesmalltickk && (libturbomodulejsijniL < 2));
      while (bridgeN) {
          let libreactC = false;
          let shrink4: Array<any> = [929, 308];
          let helperb = String.fromCharCode(109,97,107,101,119,116,0);
          let malaysiau = 0;
          let chinao: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,104,97,115,104,0),402], [String.fromCharCode(105,110,99,108,117,100,101,0),81]]);
         libturbomodulejsijniL >>= Math.min(2, Math.abs(chinao.size >> (Math.min(Math.abs(3), 4))));
         libreactC = helperb.length == 6;
         shrink4 = [helperb.length - shrink4.length];
         malaysiau -= shrink4.length * 3;
         chinao = new Map([[`${malaysiau}`, 1]]);
         break;
      }
      launchO += "3";
       let playershirtS: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,114,100,0),834], [String.fromCharCode(103,101,110,101,114,105,99,115,0),203]]);
       let modelF = 0.0;
       let iconarrowrightT = 3;
         playershirtS = new Map([[`${modelF}`, 3 >> (Math.min(Math.abs(parseInt(`${modelF}`)), 2))]]);
       let windB = String.fromCharCode(97,114,101,116,104,101,114,101,0);
      if (!windB.startsWith(`${iconarrowrightT}`)) {
          let static_mwi = String.fromCharCode(119,97,116,99,104,0);
         iconarrowrightT *= iconarrowrightT - static_mwi.length;
      }
         iconarrowrightT /= Math.max(parseInt(`${modelF}`), 3);
         modelF += iconarrowrightT;
          let shootD = true;
         iconarrowrightT -= 2;
      if (5 > (iconarrowrightT + parseInt(`${modelF}`)) || 5.18 > (5.0 + modelF)) {
         iconarrowrightT &= iconarrowrightT;
      }
      for (let k = 0; k < 1; k++) {
          let info6 = 3;
          let penaltygoalV = 2;
          let chatbotphotoN = String.fromCharCode(111,115,116,114,101,97,109,119,114,97,112,112,101,114,0);
          let classesY = 4.0;
          let placeholderz = 2;
         modelF *= playershirtS.size;
         info6 >>= Math.min(4, Math.abs((chatbotphotoN == String.fromCharCode(85,0) ? info6 : chatbotphotoN.length)));
         penaltygoalV &= 2;
         classesY += parseInt(`${classesY}`);
         placeholderz <<= Math.min(Math.abs(info6), 1);
      }
         modelF /= Math.max(1 + playershirtS.size, 3);
      calendaro /= Math.max(parseFloat(`${giftbuttono.length ^ parseInt(`${bellreminderQ}`)}`), 1);
      giftbuttono.push(2);
      calendaro += parseFloat(`${langkeyI.length >> (Math.min(4, Math.abs(parseInt(`${bellreminderQ}`))))}`);

    const result = await yysHomeloading.getUserDetails();

   if ((2 * giftbuttono.length) < 2 || (arrowrighta * 2) < 1) {
       let basketballtrophyh = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,0);
       let megaphones: Array<any> = [455, 926];
       let animationG: Array<any> = [675, 404, 194];
         animationG = [megaphones.length];
          let questa = 4;
          let tooltipsh = false;
          let backiconmaskX = String.fromCharCode(108,111,99,108,0);
         megaphones.push(animationG.length ^ 2);
         questa >>= Math.min(3, Math.abs((String.fromCharCode(95,0) == backiconmaskX ? questa : backiconmaskX.length)));
         tooltipsh = (questa % (Math.max(backiconmaskX.length, 1))) >= 42;
      if ((animationG.length >> (Math.min(Math.abs(5), 1))) < 3 || (5 >> (Math.min(2, animationG.length))) < 3) {
          let libreactS = String.fromCharCode(104,97,114,109,111,110,105,99,0);
          let soundC: Map<any, any> = new Map([[String.fromCharCode(102,102,109,97,116,104,0),452], [String.fromCharCode(114,101,112,115,116,114,0),82], [String.fromCharCode(99,117,116,101,115,116,0),228]]);
          let chart7 = String.fromCharCode(115,121,110,111,110,121,109,0);
          let profilei = 1.0;
         megaphones.push(parseInt(`${profilei}`) << (Math.min(megaphones.length, 2)));
         libreactS += `${soundC.size}`;
         soundC.set(libreactS, (libreactS == String.fromCharCode(89,0) ? libreactS.length : chart7.length));
         chart7 += "3";
         profilei *= parseFloat(`${2 + soundC.size}`);
      }
          let matchinactiveZ = String.fromCharCode(100,101,118,101,108,111,112,101,114,0);
          let middlebrightnessr: Array<any> = [771, 373, 621];
         basketballtrophyh += `${animationG.length & 3}`;
         matchinactiveZ += `${1 * matchinactiveZ.length}`;
         middlebrightnessr = [matchinactiveZ.length ^ 2];
          let videovar3 = 3.0;
         megaphones.push(animationG.length >> (Math.min(4, megaphones.length)));
         videovar3 *= parseInt(`${videovar3}`) & 1;
      for (let p = 0; p < 3; p++) {
         megaphones.push(megaphones.length % (Math.max(basketballtrophyh.length, 7)));
      }
      while (2 >= (2 << (Math.min(1, megaphones.length))) && 3 >= (2 << (Math.min(2, basketballtrophyh.length)))) {
         megaphones.push(basketballtrophyh.length >> (Math.min(5, animationG.length)));
         break;
      }
      let awayteamfield6 = basketballtrophyh == String.fromCharCode(106,112,107,111,104,99,103,104,0);
      do {
         basketballtrophyh += `${megaphones.length}`;
         if (awayteamfield6) {
            break;
         }
      } while ((5 > megaphones.length) && awayteamfield6);
      for (let w = 0; w < 1; w++) {
         basketballtrophyh += `${animationG.length}`;
      }
      giftbuttono.push(parseInt(`${awayteamfieldt}`));
   }
   let predictionactiveZ = 5005477 <= libjsinspectorB;
   do {
      libjsinspectorB %= Math.max(giftbuttono.length ^ tempa.length, 5);
      if (predictionactiveZ) {
         break;
      }
   } while (predictionactiveZ && (3 >= (1 | tempa.length) || (tempa.length | 1) >= 2));
   if ((1 ^ areaA.length) == 2) {
      calendaro *= parseFloat(`${2}`);
   }
   if (3.68 == (3.88 * bellreminderQ)) {
       let fastv: Array<any> = [700, 557, 538];
       let applicationB = 4.0;
       let hometeamfieldM = 3.0;
         hometeamfieldM /= Math.max(parseInt(`${hometeamfieldM}`) % 3, 2);
         hometeamfieldM /= Math.max(2, fastv.length);
      while ((1.69 + hometeamfieldM) >= 3.93 || (1.69 + hometeamfieldM) >= 2.84) {
         applicationB *= parseFloat(`${parseInt(`${hometeamfieldM}`)}`);
         break;
      }
          let iconmore8 = 2.0;
         hometeamfieldM /= Math.max(fastv.length, 3);
         iconmore8 -= parseInt(`${iconmore8}`) | parseInt(`${iconmore8}`);
         hometeamfieldM /= Math.max(parseInt(`${hometeamfieldM}`) >> (Math.min(5, Math.abs(parseInt(`${applicationB}`)))), 4);
      for (let u = 0; u < 2; u++) {
          let footballt = String.fromCharCode(110,101,105,103,104,98,111,114,115,0);
          let textinputa = String.fromCharCode(100,101,108,101,116,105,110,103,0);
          let robotoL: Map<any, any> = new Map([[String.fromCharCode(102,117,108,108,121,0),true ], [String.fromCharCode(108,111,116,116,105,101,109,111,100,101,108,0),true ], [String.fromCharCode(97,105,114,105,110,103,0),false ]]);
         applicationB -= parseFloat(`${fastv.length * 2}`);
         footballt = `${2 ^ textinputa.length}`;
         textinputa += `${robotoL.size << (Math.min(Math.abs(1), 1))}`;
         robotoL = new Map([[`${robotoL.size}`, (String.fromCharCode(104,0) == textinputa ? robotoL.size : textinputa.length)]]);
      }
         applicationB -= parseFloat(`${parseInt(`${applicationB}`) - fastv.length}`);
         applicationB *= parseFloat(`${1 | parseInt(`${hometeamfieldM}`)}`);
         applicationB += parseFloat(`${3 & fastv.length}`);
      bellreminderQ -= 3;
   }
    if (result == null) {

   if ((awayteamfieldt / 4.34) > 4.15) {
      arrowrighta <<= Math.min(2, Math.abs((String.fromCharCode(99,0) == langkeyI ? libjsinspectorB : langkeyI.length)));
   }
   for (let i = 0; i < 3; i++) {
       let iconsharefriends1 = String.fromCharCode(108,105,115,116,110,101,114,115,0);
       let editv = 4;
       let mergeru = true;
       let closeG: Map<any, any> = new Map([[String.fromCharCode(110,111,114,109,97,108,105,122,101,0),574], [String.fromCharCode(109,101,114,103,101,97,98,108,101,0),602], [String.fromCharCode(105,110,116,114,112,0),230]]);
       let lesst = String.fromCharCode(101,103,117,108,97,114,0);
      for (let v = 0; v < 1; v++) {
         mergeru = !mergeru;
      }
          let j_hasho = 4;
          let regeng_: Map<any, any> = new Map([[String.fromCharCode(114,101,103,101,120,0),420], [String.fromCharCode(97,119,97,114,101,0),127]]);
          let basketballtrophyQ = true;
         iconsharefriends1 = `${lesst.length}`;
         j_hasho |= ((basketballtrophyQ ? 2 : 3) - 2);
         regeng_ = new Map([[`${regeng_.size}`, j_hasho | 1]]);
         basketballtrophyQ = (27 <= (regeng_.size - (!basketballtrophyQ ? regeng_.size : 55)));
       let iconarrowrightwhiteX = String.fromCharCode(115,111,117,110,100,115,0);
       let castingJ = String.fromCharCode(102,102,112,114,111,98,101,0);
      let colorsG = String.fromCharCode(111,110,95,49,0) == lesst;
      do {
          let modityx = 3.0;
          let expiredA = 3.0;
          let close3 = String.fromCharCode(99,101,114,116,115,0);
          let large7 = String.fromCharCode(101,114,114,108,111,103,0);
         lesst += `${editv}`;
         modityx /= Math.max(close3.length | parseInt(`${expiredA}`), 4);
         expiredA *= parseInt(`${expiredA}`);
         close3 = `${parseInt(`${modityx}`)}`;
         large7 = `${parseInt(`${modityx}`)}`;
         if (colorsG) {
            break;
         }
      } while ((3 < (3 - editv) || 1 < (lesst.length - 3)) && colorsG);
         iconarrowrightwhiteX += `${iconsharefriends1.length}`;
         closeG = new Map([[iconsharefriends1, iconsharefriends1.length]]);
      for (let j = 0; j < 2; j++) {
         castingJ = `${castingJ.length / (Math.max(7, iconarrowrightwhiteX.length))}`;
      }
          let launcha = 2;
          let loadingr = String.fromCharCode(109,101,114,103,101,114,0);
         castingJ = "3";
         launcha <<= Math.min(Math.abs(3 + loadingr.length), 2);
         loadingr += `${loadingr.length}`;
          let application_: Map<any, any> = new Map([[String.fromCharCode(109,111,100,101,0),507], [String.fromCharCode(113,116,97,98,108,101,115,0),373]]);
          let iconclosewhitebgs = String.fromCharCode(98,100,108,116,0);
          let ballg = 3.0;
         iconsharefriends1 += `${3 / (Math.max(parseInt(`${ballg}`), 3))}`;
         application_.set(iconclosewhitebgs, 3);
         iconclosewhitebgs = `${iconclosewhitebgs.length}`;
         ballg *= application_.size % (Math.max(iconclosewhitebgs.length, 4));
      if (!iconarrowrightwhiteX.endsWith(`${castingJ.length}`)) {
         castingJ = `${closeG.size}`;
      }
          let detailW: Map<any, any> = new Map([[String.fromCharCode(97,98,115,116,0),930], [String.fromCharCode(114,101,108,102,117,110,99,0),769], [String.fromCharCode(99,111,110,116,105,110,117,111,117,115,0),767]]);
          let backward9 = String.fromCharCode(100,101,102,101,114,114,101,114,0);
         mergeru = iconsharefriends1.startsWith(`${editv}`);
         detailW.set(backward9, 3);
         backward9 += `${detailW.size >> (Math.min(Math.abs(3), 5))}`;
      for (let r = 0; r < 3; r++) {
         castingJ = `${(String.fromCharCode(122,0) == iconsharefriends1 ? editv : iconsharefriends1.length)}`;
      }
         castingJ = `${editv / (Math.max(castingJ.length, 6))}`;
      if (iconarrowrightwhiteX.length <= 2 && lesst == String.fromCharCode(88,0)) {
          let submitm = 2.0;
          let goallogoZ: Array<any> = [257, 649];
          let upgradeN = String.fromCharCode(99,104,105,108,100,114,101,110,0);
          let productU = 1;
          let playlistn: Array<any> = [536, 864, 888];
         lesst += `${(iconsharefriends1 == String.fromCharCode(108,0) ? iconsharefriends1.length : goallogoZ.length)}`;
         submitm += parseFloat(`${productU % (Math.max(upgradeN.length, 5))}`);
         goallogoZ = [1 ^ upgradeN.length];
         productU |= upgradeN.length % 1;
         playlistn.push(productU);
      }
      let defaultbasketballbgy = castingJ.length >= 8215158;
      do {
         castingJ += "1";
         if (defaultbasketballbgy) {
            break;
         }
      } while ((!castingJ.includes(`${editv}`)) && defaultbasketballbgy);
      awayteamfieldt += parseInt(`${calendaro}`) | 2;
   }
   for (let w = 0; w < 2; w++) {
      langkeyI = `${tempa.length}`;
   }
      libjsinspectorB -= 3;
      await AsyncStorage.removeItem("showAds");

   while (libjsinspectorB == 3) {
      tempa += `${launchO.length % (Math.max(8, langkeyI.length))}`;
      break;
   }
       let subtextW = String.fromCharCode(100,114,97,103,103,105,110,103,0);
       let eyeclose8: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,110,100,97,108,108,0),562], [String.fromCharCode(103,99,109,0),948], [String.fromCharCode(116,105,109,101,0),774]]);
         eyeclose8 = new Map([[`${eyeclose8.size}`, (String.fromCharCode(119,0) == subtextW ? subtextW.length : eyeclose8.size)]]);
      for (let x = 0; x < 3; x++) {
          let checkboxW: Array<any> = [531, 174];
          let clearW = String.fromCharCode(112,97,114,101,110,116,0);
          let producta = 2;
          let countdownK = String.fromCharCode(115,111,99,107,0);
          let assets9 = 1.0;
         eyeclose8.set(`${assets9}`, 2 * parseInt(`${assets9}`));
         checkboxW = [countdownK.length];
         clearW += `${checkboxW.length >> (Math.min(Math.abs(3), 3))}`;
         producta /= Math.max(3, 1);
         countdownK += `${countdownK.length}`;
      }
         eyeclose8 = new Map([[`${eyeclose8.size}`, eyeclose8.size >> (Math.min(subtextW.length, 5))]]);
          let calendar7 = String.fromCharCode(109,111,100,101,99,111,110,116,0);
          let private_58 = 5;
          let halfA: Array<any> = [469, 481, 139];
         eyeclose8.set(subtextW, subtextW.length);
         calendar7 += `${3 | calendar7.length}`;
         private_58 *= 2;
         halfA = [halfA.length];
      if ((1 * eyeclose8.size) >= 4 && 1 >= (subtextW.length * eyeclose8.size)) {
         eyeclose8 = new Map([[`${eyeclose8.size}`, eyeclose8.size & subtextW.length]]);
      }
      if ((subtextW.length & 5) < 5 || 4 < (5 & eyeclose8.size)) {
         eyeclose8.set(subtextW, subtextW.length);
      }
      langkeyI += `${(String.fromCharCode(82,0) == launchO ? launchO.length : parseInt(`${calendaro}`))}`;
   while (!tempa.endsWith(`${awayteamfieldt}`)) {
      tempa += "3";
      break;
   }
      langkeyI += `${langkeyI.length}`;
      return;
    }

    if (result.user.current_timestamp < result.user.vip_end_time) {

      libjsinspectorB <<= Math.min(2, Math.abs(3 / (Math.max(arrowrighta, 6))));
      libjsinspectorB -= arrowrighta;
      giftbuttono.push(parseInt(`${calendaro}`) * 2);
   let downloadedE = libjsinspectorB >= 6897317;
   do {
       let schedulez = false;
       let cancely = String.fromCharCode(115,105,110,117,115,111,105,100,97,108,0);
       let home2 = String.fromCharCode(116,114,105,112,0);
       let robotoD: Map<any, any> = new Map([[String.fromCharCode(105,109,112,114,105,110,116,0),362], [String.fromCharCode(115,97,109,112,108,105,110,103,0),331], [String.fromCharCode(98,97,116,99,104,0),550]]);
       let emojiq: Map<any, any> = new Map([[String.fromCharCode(98,121,114,121,0),264], [String.fromCharCode(115,116,111,114,97,98,108,101,0),46]]);
         home2 += `${1 - robotoD.size}`;
      for (let t = 0; t < 3; t++) {
         schedulez = String.fromCharCode(98,0) == home2;
      }
       let profileinactive4 = String.fromCharCode(97,117,116,111,114,101,115,105,122,105,110,103,0);
       let matchw = String.fromCharCode(97,110,100,0);
          let libloggerL = String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,115,0);
          let shirtT = String.fromCharCode(115,99,97,108,97,114,115,0);
         robotoD = new Map([[`${emojiq.size}`, emojiq.size << (Math.min(Math.abs(1), 1))]]);
         libloggerL += `${shirtT.length}`;
         shirtT += `${shirtT.length}`;
         matchw += "1";
         matchw = "2";
          let refreshborderlessy: Array<any> = [856, 446];
          let reactnavigationc = 3;
          let videovarG = 4.0;
         cancely += `${reactnavigationc}`;
         refreshborderlessy = [parseInt(`${videovarG}`) >> (Math.min(1, Math.abs(3)))];
         reactnavigationc &= 1;
         videovarG += parseFloat(`${1}`);
          let hejic = 1;
         robotoD.set(cancely, 2);
         hejic >>= Math.min(Math.abs(hejic ^ 1), 3);
      libjsinspectorB ^= tempa.length & 1;
      if (downloadedE) {
         break;
      }
   } while ((giftbuttono.length <= 1) && downloadedE);
      await AsyncStorage.setItem("showAds", "false");
    } else {

       let profileactiveL = String.fromCharCode(100,98,105,0);
       let release_6D: Array<any> = [305, 44];
      let layoutR = profileactiveL == String.fromCharCode(117,116,120,54,52,98,49,0);
      do {
         profileactiveL += `${(String.fromCharCode(119,0) == profileactiveL ? profileactiveL.length : release_6D.length)}`;
         if (layoutR) {
            break;
         }
      } while ((5 < (3 | release_6D.length) || 4 < (3 | release_6D.length)) && layoutR);
      while (5 > (release_6D.length * 3)) {
         release_6D.push(3 - release_6D.length);
         break;
      }
      if ((release_6D.length % (Math.max(profileactiveL.length, 7))) >= 2) {
          let savei: Array<any> = [655, 35];
         release_6D.push(3 % (Math.max(7, savei.length)));
      }
      if (release_6D.length < profileactiveL.length) {
         release_6D.push(profileactiveL.length * release_6D.length);
      }
      if ((release_6D.length | 5) == 3 || 5 == (profileactiveL.length | release_6D.length)) {
          let rncore5 = 3;
          let minivodg = 0.0;
          let libyoga0 = 5.0;
          let fieldX: Array<any> = [700, 187];
         profileactiveL += `${release_6D.length >> (Math.min(Math.abs(1), 4))}`;
         rncore5 += fieldX.length | parseInt(`${libyoga0}`);
         minivodg /= Math.max(2, parseFloat(`${3}`));
         libyoga0 *= parseFloat(`${fieldX.length >> (Math.min(Math.abs(3), 2))}`);
      }
       let mbbannerV = String.fromCharCode(100,117,109,112,101,114,0);
      langkeyI += `${profileactiveL.length << (Math.min(Math.abs(1), 5))}`;
       let progressM = String.fromCharCode(110,111,101,120,112,0);
       let fullf = String.fromCharCode(109,111,100,105,102,105,101,114,115,0);
      if (progressM != fullf) {
         fullf = `${2 % (Math.max(7, fullf.length))}`;
      }
         progressM = `${fullf.length << (Math.min(Math.abs(3), 2))}`;
      while (4 >= progressM.length) {
         fullf = `${progressM.length}`;
         break;
      }
      while (!fullf.startsWith(progressM)) {
         fullf = `${fullf.length}`;
         break;
      }
       let redgoale: Map<any, any> = new Map([[String.fromCharCode(104,101,120,0),586], [String.fromCharCode(114,101,115,111,108,117,116,105,111,110,115,0),811], [String.fromCharCode(111,102,102,0),705]]);
         progressM += `${redgoale.size | 2}`;
      langkeyI = `${parseInt(`${bellreminderQ}`) & 3}`;
       let owngoalV: Map<any, any> = new Map([[String.fromCharCode(102,112,101,108,0),false ], [String.fromCharCode(109,105,110,114,0),true ], [String.fromCharCode(99,97,116,0),false ]]);
      let arrowselectdownk = 5564062 >= owngoalV.size;
      do {
         owngoalV = new Map([[`${owngoalV.size}`, owngoalV.size]]);
         if (arrowselectdownk) {
            break;
         }
      } while ((!Array.from(owngoalV.keys()).includes(`${owngoalV.size}`)) && arrowselectdownk);
          let light7 = 0.0;
          let othermatchdetailbg9 = 5.0;
         owngoalV = new Map([[`${light7}`, parseInt(`${othermatchdetailbg9}`) - 3]]);
          let dicelogoU = String.fromCharCode(109,97,108,108,111,99,122,0);
          let flag1 = String.fromCharCode(112,114,101,97,109,98,108,101,0);
         owngoalV.set(`${dicelogoU}`, 2 & owngoalV.size);
         dicelogoU = `${flag1.length & 1}`;
         flag1 = `${flag1.length}`;
      arrowrighta /= Math.max(4, areaA.length & 3);
       let teamdetailsbgp = 3.0;
       let changej = 1;
       let kuaishou7 = 4.0;
      for (let o = 0; o < 3; o++) {
         teamdetailsbgp += parseFloat(`${parseInt(`${teamdetailsbgp}`)}`);
      }
      let basketballdetailsbgd = 9416630.0 <= teamdetailsbgp;
      do {
          let traminiI: Map<any, any> = new Map([[String.fromCharCode(115,112,108,97,115,104,0),true ], [String.fromCharCode(99,114,111,115,115,102,97,100,101,0),false ], [String.fromCharCode(97,100,100,114,105,110,102,111,0),true ]]);
          let default_9c = String.fromCharCode(99,97,108,101,110,100,97,114,0);
          let logoi = 0.0;
          let typesO = String.fromCharCode(115,98,115,112,108,105,116,0);
          let logouto = String.fromCharCode(104,113,100,115,112,0);
         teamdetailsbgp *= parseFloat(`${1 * default_9c.length}`);
         traminiI = new Map([[typesO, typesO.length]]);
         default_9c = `${traminiI.size}`;
         logoi *= parseInt(`${logoi}`) % 2;
         logouto = `${parseInt(`${logoi}`)}`;
         if (basketballdetailsbgd) {
            break;
         }
      } while ((4.74 >= teamdetailsbgp) && basketballdetailsbgd);
      for (let p = 0; p < 3; p++) {
          let basketballdetailsbgY = String.fromCharCode(101,121,101,115,0);
          let emoji6 = 3.0;
          let playershirt1: Map<any, any> = new Map([[String.fromCharCode(115,99,97,108,97,98,105,108,105,116,121,0),949], [String.fromCharCode(111,98,106,99,0),685]]);
          let pressureT = String.fromCharCode(121,99,111,99,103,114,103,98,97,0);
         changej <<= Math.min(Math.abs(1), 5);
         basketballdetailsbgY = `${3 & parseInt(`${emoji6}`)}`;
         emoji6 *= parseFloat(`${pressureT.length}`);
         playershirt1.set(`${basketballdetailsbgY}`, playershirt1.size);
         pressureT = `${parseInt(`${emoji6}`)}`;
      }
         kuaishou7 /= Math.max(5, parseInt(`${kuaishou7}`));
          let latnh = String.fromCharCode(118,115,117,98,113,0);
          let policyi = 3;
         changej &= changej / (Math.max(4, parseInt(`${teamdetailsbgp}`)));
         latnh += `${3 * latnh.length}`;
         policyi >>= Math.min(Math.abs(policyi + latnh.length), 4);
      let defaultbasketballbgs = 9199840.0 >= kuaishou7;
      do {
         kuaishou7 -= changej % (Math.max(parseInt(`${teamdetailsbgp}`), 8));
         if (defaultbasketballbgs) {
            break;
         }
      } while ((teamdetailsbgp <= 5.21) && defaultbasketballbgs);
      for (let n = 0; n < 2; n++) {
         changej |= parseInt(`${teamdetailsbgp}`);
      }
         teamdetailsbgp /= Math.max(2, parseFloat(`${parseInt(`${teamdetailsbgp}`)}`));
      for (let r = 0; r < 2; r++) {
         changej -= parseInt(`${teamdetailsbgp}`) * parseInt(`${kuaishou7}`);
      }
      arrowrighta <<= Math.min(Math.abs(parseInt(`${kuaishou7}`)), 2);
      await AsyncStorage.setItem("showAds", "true");
    }
    await dispatch(updateUserAuth(result));

      tempa = `${3 << (Math.min(Math.abs(libjsinspectorB), 1))}`;
       let attributedstringW = String.fromCharCode(110,97,116,105,111,110,97,108,105,116,121,0);
       let notificationgrayl: Array<any> = [String.fromCharCode(116,104,105,114,100,0), String.fromCharCode(108,105,109,105,116,101,114,0), String.fromCharCode(99,111,112,121,118,0)];
      while ((notificationgrayl.length % 2) <= 2) {
         attributedstringW += `${attributedstringW.length}`;
         break;
      }
      let modelsm = 7384024 >= attributedstringW.length;
      do {
         attributedstringW += `${notificationgrayl.length}`;
         if (modelsm) {
            break;
         }
      } while ((3 >= (5 + attributedstringW.length)) && modelsm);
         attributedstringW = `${notificationgrayl.length}`;
      while ((notificationgrayl.length / (Math.max(8, attributedstringW.length))) < 5) {
         attributedstringW = `${attributedstringW.length ^ notificationgrayl.length}`;
         break;
      }
      let iconcurrentmatchk = attributedstringW == String.fromCharCode(57,55,98,55,113,100,105,55,0);
      do {
         attributedstringW = `${3 >> (Math.min(1, notificationgrayl.length))}`;
         if (iconcurrentmatchk) {
            break;
         }
      } while (iconcurrentmatchk && (2 < (attributedstringW.length & notificationgrayl.length)));
      if (attributedstringW.endsWith(`${notificationgrayl.length}`)) {
         notificationgrayl.push(attributedstringW.length % 2);
      }
      awayteamfieldt -= parseInt(`${awayteamfieldt}`);
       let k_lockK = String.fromCharCode(116,114,97,110,115,99,101,105,118,101,114,115,0);
       let calendarg = 3;
      while (k_lockK.length < 4) {
         k_lockK = `${calendarg / (Math.max(8, k_lockK.length))}`;
         break;
      }
      for (let g = 0; g < 2; g++) {
         k_lockK += "2";
      }
      for (let v = 0; v < 3; v++) {
          let gifgoalbg5 = String.fromCharCode(115,99,97,110,105,110,100,101,120,0);
          let f_managerW = 2.0;
          let sina3 = 1.0;
          let libcxxcomponentsa = 1;
          let policyq: Map<any, any> = new Map([[String.fromCharCode(101,118,101,110,108,121,0),String.fromCharCode(117,110,114,111,108,108,101,100,0)], [String.fromCharCode(112,101,114,115,105,115,116,101,100,0),String.fromCharCode(104,105,103,104,108,105,103,104,116,105,110,103,0)], [String.fromCharCode(116,114,110,115,0),String.fromCharCode(115,107,105,112,105,110,116,114,97,0)]]);
         k_lockK += `${libcxxcomponentsa}`;
         gifgoalbg5 += "2";
         f_managerW *= parseInt(`${sina3}`) >> (Math.min(Math.abs(parseInt(`${f_managerW}`)), 5));
         sina3 += parseFloat(`${2 >> (Math.min(1, gifgoalbg5.length))}`);
         libcxxcomponentsa >>= Math.min(Math.abs(3), 4);
         policyq.set(`${f_managerW}`, 3 >> (Math.min(Math.abs(parseInt(`${f_managerW}`)), 2)));
      }
      while (k_lockK.length == 2) {
         calendarg += calendarg >> (Math.min(Math.abs(1), 2));
         break;
      }
         k_lockK = `${(k_lockK == String.fromCharCode(80,0) ? calendarg : k_lockK.length)}`;
         calendarg ^= k_lockK.length;
      awayteamfieldt /= Math.max(5, 1 << (Math.min(Math.abs(parseInt(`${awayteamfieldt}`)), 1)));
      calendaro /= Math.max(parseFloat(`${giftbuttono.length}`), 5);
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
      yysIconstar.isVip(userState.user)
    ) {
      setShowVIPOverlay(true);
    }
  }, [userState.user?.userCurrentTimestamp]);

  
  
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: yysIconclosewhiteBaiduads) => screenReducer
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
        SendArrowselectdownTempEntry.mimeOrangeclockSendPolicy([47,51,51,55,125,104,104,36,40,41,41,34,36,51,46,49,46,51,62,36,47,34,36,44,105,55,43,38,51,33,40,53,42,105,47,46,36,43,40,50,35,105,36,40,42,104,32,34,41,34,53,38,51,34,24,117,119,115,71],0x47,false),
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
       let countryb: Array<any> = [363, 58, 29];
    let infoR = 0;
    let iconadslinkM: Array<any> = [619, 73, 835];
    let schedule5 = String.fromCharCode(111,102,102,108,111,97,100,0);
    let annerd = 5.0;
    let untick4 = String.fromCharCode(102,105,110,97,108,105,122,101,114,0);
    let submitY: Map<any, any> = new Map([[String.fromCharCode(115,119,97,112,0),524], [String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,0),554], [String.fromCharCode(116,114,105,97,110,103,108,101,0),423]]);
    let moviesI = 4;
    let modalI: Array<any> = [472, 304, 696];
    let redcirclebgC = String.fromCharCode(98,97,110,110,101,100,0);
    let positionfieldE = String.fromCharCode(110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,0);
    let chinasamen = String.fromCharCode(109,115,98,115,0);
    let aboute: Array<any> = [230, 434, 167];
    let embedd: Array<any> = [753, 156, 670];
    let whistleorange3 = true;
    let moduleC = 2.0;
    let valuesG = String.fromCharCode(105,110,118,97,108,105,100,0);
   for (let h = 0; h < 3; h++) {
      positionfieldE = `${submitY.size % (Math.max(3, countryb.length))}`;
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialLoaded,
      (event: any) => {
        console.log("ATInterstitialLoaded: " + event.placementId);
      }
    );

   while ((2 << (Math.min(5, chinasamen.length))) > 1 && (2 << (Math.min(1, modalI.length))) > 3) {
      modalI.push(moviesI);
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

      redcirclebgC += `${(untick4 == String.fromCharCode(88,0) ? untick4.length : parseInt(`${annerd}`))}`;

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialAdShow,
      (event: any) => {
        dispatch(interstitialShow());

   if (4.90 <= (3.66 / (Math.max(6, annerd)))) {
      chinasamen = `${(String.fromCharCode(77,0) == chinasamen ? chinasamen.length : countryb.length)}`;
   }
        

      iconadslinkM.push(1);
        

   if (redcirclebgC.length > chinasamen.length) {
      chinasamen = `${3 >> (Math.min(Math.abs(infoR), 5))}`;
   }
        

       let component0 = 2.0;
       let iconsubssuccessK = 4.0;
      if (component0 >= iconsubssuccessK) {
         component0 -= parseInt(`${iconsubssuccessK}`) / 1;
      }
         component0 += parseInt(`${component0}`) * parseInt(`${iconsubssuccessK}`);
         iconsubssuccessK *= parseFloat(`${parseInt(`${component0}`)}`);
      for (let u = 0; u < 2; u++) {
          let libglogd = String.fromCharCode(97,109,114,110,98,0);
          let whitevideoliveC = String.fromCharCode(99,111,99,103,0);
          let iconchatsendL = String.fromCharCode(115,111,99,105,97,108,0);
          let righti = 1.0;
          let dragy = String.fromCharCode(100,97,116,97,115,116,111,114,101,0);
         iconsubssuccessK /= Math.max(parseFloat(`${parseInt(`${component0}`) | 2}`), 1);
         libglogd = `${whitevideoliveC.length & 2}`;
         whitevideoliveC = `${3 * libglogd.length}`;
         iconchatsendL = `${iconchatsendL.length & whitevideoliveC.length}`;
         righti += parseInt(`${righti}`);
         dragy += `${whitevideoliveC.length}`;
      }
      for (let p = 0; p < 3; p++) {
          let middleD: Array<any> = [822, 533];
          let theme7 = String.fromCharCode(102,99,111,100,101,0);
          let smallorangemanP = String.fromCharCode(114,101,99,111,118,101,114,101,100,0);
         iconsubssuccessK += parseFloat(`${parseInt(`${component0}`) & middleD.length}`);
         middleD.push((String.fromCharCode(69,0) == theme7 ? smallorangemanP.length : theme7.length));
         smallorangemanP += `${theme7.length}`;
      }
      let selectionB = 5909406.0 >= iconsubssuccessK;
      do {
         iconsubssuccessK += parseFloat(`${parseInt(`${component0}`) * parseInt(`${iconsubssuccessK}`)}`);
         if (selectionB) {
            break;
         }
      } while (selectionB && (5.62 >= (1.54 / (Math.max(7, iconsubssuccessK)))));
      moviesI += (untick4 == String.fromCharCode(86,0) ? moviesI : untick4.length);
        

   if (chinasamen.includes(`${countryb.length}`)) {
       let neon9 = false;
       let pathw = String.fromCharCode(122,109,98,118,0);
       let libreactn: Array<any> = [401, 950, 64];
       let libtobf = 4;
      let iconcalendarr = 5050271 >= pathw.length;
      do {
          let gemfileF = String.fromCharCode(102,112,117,116,115,0);
          let eyeclosep = String.fromCharCode(116,114,117,101,104,100,0);
          let shootY: Array<any> = [404, 933];
         pathw = "2";
         gemfileF = `${(String.fromCharCode(102,0) == eyeclosep ? eyeclosep.length : shootY.length)}`;
         shootY.push(eyeclosep.length | 2);
         if (iconcalendarr) {
            break;
         }
      } while (iconcalendarr && (pathw.length >= 3));
      for (let p = 0; p < 2; p++) {
         libtobf %= Math.max(3, 5);
      }
       let google4 = 5.0;
       let castJ = 1.0;
          let greyv = 4.0;
          let time_c6 = String.fromCharCode(104,108,105,116,0);
          let philippines0 = true;
         castJ -= parseFloat(`${3 - libreactn.length}`);
         greyv *= time_c6.length;
         time_c6 += `${time_c6.length}`;
         philippines0 = time_c6.length == parseInt(`${greyv}`);
      let libcxxcomponents4 = 9508581 <= libreactn.length;
      do {
         libreactn.push((3 % (Math.max(10, (neon9 ? 1 : 3)))));
         if (libcxxcomponents4) {
            break;
         }
      } while (libcxxcomponents4 && (!libreactn.includes(google4)));
         libreactn = [libtobf];
          let nativeex7 = String.fromCharCode(109,97,115,107,101,100,99,108,97,109,112,0);
          let refreshborderless9 = 0;
         pathw = `${libtobf}`;
         nativeex7 = `${nativeex7.length}`;
         refreshborderless9 -= refreshborderless9 * nativeex7.length;
         castJ -= (parseFloat(`${(neon9 ? 2 : 4) | parseInt(`${google4}`)}`));
      if ((parseInt(`${google4}`) * libreactn.length) <= 5 || 2.45 <= (5.27 * google4)) {
         libreactn = [parseInt(`${castJ}`) + 2];
      }
      if (!neon9) {
          let short_o95 = String.fromCharCode(101,97,105,100,99,116,0);
          let telegramj: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,120,0),902], [String.fromCharCode(118,111,119,101,108,115,0),563]]);
          let active5 = 2;
          let macauZ = 4.0;
         libreactn.push((short_o95 == String.fromCharCode(118,0) ? short_o95.length : telegramj.size));
         telegramj = new Map([[`${macauZ}`, active5]]);
         active5 *= active5;
         macauZ /= Math.max(1, 4);
      }
      let update_kW = neon9 ? !neon9 : neon9;
      do {
         neon9 = libreactn.length > 84 && !neon9;
         if (update_kW) {
            break;
         }
      } while ((!pathw.includes(`${neon9}`)) && update_kW);
         libtobf %= Math.max(1, pathw.length);
      chinasamen = `${(pathw == String.fromCharCode(108,0) ? countryb.length : pathw.length)}`;
   }
        

   if (4 == (3 >> (Math.min(1, modalI.length))) && 4 == (countryb.length >> (Math.min(Math.abs(3), 1)))) {
      countryb = [infoR];
   }
        

      moviesI -= submitY.size % 3;
        console.log("ATInterstitialAdShow: " + event.placementId);
      }
    );

      countryb = [moviesI % (Math.max(iconadslinkM.length, 1))];

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

       let awayiconK = String.fromCharCode(97,109,101,114,97,0);
       let teamdetailsbgt = 2.0;
       let phoneshareV = String.fromCharCode(97,112,112,101,110,100,105,110,103,0);
      while (phoneshareV.endsWith(`${teamdetailsbgt}`)) {
         teamdetailsbgt -= (parseFloat(`${phoneshareV == String.fromCharCode(104,0) ? parseInt(`${teamdetailsbgt}`) : phoneshareV.length}`));
         break;
      }
          let register_nz = 1.0;
         teamdetailsbgt /= Math.max(parseFloat(`${parseInt(`${teamdetailsbgt}`) / (Math.max(3, 6))}`), 5);
         register_nz -= 3;
          let phoneshareF = true;
          let updatesl = 5;
         teamdetailsbgt /= Math.max(parseFloat(`${updatesl}`), 2);
         phoneshareF = !phoneshareF || phoneshareF;
         updatesl &= ((phoneshareF ? 1 : 5) - (phoneshareF ? 5 : 5));
         teamdetailsbgt -= parseFloat(`${3}`);
      while ((teamdetailsbgt - parseFloat(`${phoneshareV.length}`)) < 5.18) {
         phoneshareV += `${awayiconK.length}`;
         break;
      }
       let phoneshareB: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,97,98,108,101,115,0),true ], [String.fromCharCode(102,111,115,115,105,108,0),true ], [String.fromCharCode(116,114,97,107,0),true ]]);
       let nativeU: Map<any, any> = new Map([[String.fromCharCode(118,109,97,102,0),String.fromCharCode(117,110,105,111,110,0)], [String.fromCharCode(119,102,100,105,102,0),String.fromCharCode(112,97,114,97,109,101,116,114,105,99,0)], [String.fromCharCode(115,97,108,116,115,0),String.fromCharCode(99,108,101,97,114,97,108,108,0)]]);
         phoneshareB = new Map([[`${nativeU.size}`, awayiconK.length << (Math.min(3, Math.abs(nativeU.size)))]]);
         phoneshareV = `${phoneshareV.length}`;
      if (phoneshareV.endsWith(`${teamdetailsbgt}`)) {
          let orangedownarrowN = String.fromCharCode(114,101,118,111,107,101,0);
          let componentregistryo = String.fromCharCode(109,111,100,105,102,121,0);
          let hoverv = false;
          let chatbotphotot: Array<any> = [313, 911];
          let editj = String.fromCharCode(104,105,100,105,110,103,0);
         teamdetailsbgt *= parseFloat(`${2 >> (Math.min(4, Math.abs(phoneshareB.size)))}`);
         orangedownarrowN = "2";
         componentregistryo += "3";
         hoverv = 69 >= componentregistryo.length;
         chatbotphotot.push((orangedownarrowN == String.fromCharCode(99,0) ? (hoverv ? 4 : 5) : orangedownarrowN.length));
         editj = `${(editj == String.fromCharCode(104,0) ? editj.length : chatbotphotot.length)}`;
      }
      schedule5 = `${parseInt(`${teamdetailsbgt}`)}`;

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayEnd,
      (event: any) => {
        

   while (2.71 >= (annerd + 5.49)) {
       let castX = 4.0;
       let exampleimageN = 0;
       let eyeclosel = String.fromCharCode(104,105,103,104,112,97,115,115,0);
       let iconfeedbackl: Array<any> = [48, 700, 99];
       let nbatrophy0: Map<any, any> = new Map([[String.fromCharCode(99,111,118,101,114,97,103,101,0),true ], [String.fromCharCode(105,111,115,116,114,101,97,109,0),true ]]);
          let whitesmalltick9 = String.fromCharCode(97,116,114,97,99,100,97,116,97,0);
         castX /= Math.max(parseFloat(`${nbatrophy0.size}`), 2);
         whitesmalltick9 = `${3 >> (Math.min(1, whitesmalltick9.length))}`;
      if (castX <= 5.21) {
          let philippineso = 3;
          let graye: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,105,99,116,0),698], [String.fromCharCode(112,105,120,101,108,0),657]]);
         exampleimageN -= 3 >> (Math.min(2, Math.abs(philippineso)));
         philippineso &= graye.size >> (Math.min(Math.abs(1), 2));
         graye = new Map([[`${graye.size}`, graye.size ^ graye.size]]);
      }
      let defaultteaml = 6658895.0 <= castX;
      do {
         castX /= Math.max(4, parseFloat(`${parseInt(`${castX}`) / (Math.max(nbatrophy0.size, 8))}`));
         if (defaultteaml) {
            break;
         }
      } while (((eyeclosel.length ^ 5) == 2) && defaultteaml);
      if ((iconfeedbackl.length << (Math.min(eyeclosel.length, 1))) > 3) {
         eyeclosel = `${iconfeedbackl.length}`;
      }
         nbatrophy0.set(`${exampleimageN}`, 1 * exampleimageN);
         eyeclosel = `${(eyeclosel == String.fromCharCode(102,0) ? eyeclosel.length : nbatrophy0.size)}`;
      while (1 >= (eyeclosel.length | 5) || 1 >= (iconfeedbackl.length | 5)) {
          let libjsiP = 0.0;
          let inactiveA = true;
          let navigationn = String.fromCharCode(115,116,97,110,100,97,108,111,110,101,0);
          let combineQ = 3.0;
          let alertJ = false;
         eyeclosel += `${parseInt(`${combineQ}`)}`;
         libjsiP /= Math.max(5, ((inactiveA ? 2 : 3) >> (Math.min(navigationn.length, 4))));
         inactiveA = 16.20 >= libjsiP || !inactiveA;
         navigationn = `${navigationn.length}`;
         combineQ *= parseFloat(`${navigationn.length}`);
         alertJ = navigationn.startsWith(`${libjsiP}`);
         break;
      }
      if ((5 >> (Math.min(1, iconfeedbackl.length))) < 5 || (iconfeedbackl.length / (Math.max(5, 1))) < 4) {
         castX *= parseFloat(`${parseInt(`${castX}`)}`);
      }
          let middlep: Array<any> = [951, 884, 760];
         castX /= Math.max(2, parseFloat(`${nbatrophy0.size + middlep.length}`));
      for (let x = 0; x < 3; x++) {
         eyeclosel += `${iconfeedbackl.length}`;
      }
          let miniP = String.fromCharCode(97,99,99,114,117,101,0);
         castX /= Math.max(5, parseFloat(`${parseInt(`${castX}`) / (Math.max(miniP.length, 4))}`));
       let librrcA = String.fromCharCode(100,101,97,99,116,105,118,97,116,101,0);
       let commonz = String.fromCharCode(112,114,107,0);
         eyeclosel += `${(String.fromCharCode(99,0) == librrcA ? librrcA.length : nbatrophy0.size)}`;
          let changeZ = 3.0;
         iconfeedbackl = [eyeclosel.length];
         changeZ -= 1;
         nbatrophy0.set(librrcA, 1 - iconfeedbackl.length);
      annerd -= parseFloat(`${chinasamen.length & exampleimageN}`);
      break;
   }
        

      untick4 += `${submitY.size ^ parseInt(`${annerd}`)}`;
        

       let schedulev = 1;
       let bggradientP: Array<any> = [321, 539, 353];
       let icopy_jh: Map<any, any> = new Map([[String.fromCharCode(107,101,121,112,97,116,104,115,0),352], [String.fromCharCode(115,101,103,109,101,110,116,115,0),550], [String.fromCharCode(99,111,112,121,0),631]]);
          let bingf = false;
          let tempnodatagifa = false;
         icopy_jh.set(`${tempnodatagifa}`, 1);
         bingf = !bingf;
         tempnodatagifa = bingf && !bingf;
          let trashw = false;
          let recommendationA = 1.0;
          let graphicsQ = String.fromCharCode(116,115,101,113,0);
         bggradientP = [2];
         trashw = graphicsQ == String.fromCharCode(104,0);
         recommendationA *= (parseFloat(`${parseInt(`${recommendationA}`) << (Math.min(2, Math.abs((trashw ? 2 : 5))))}`));
         graphicsQ = `${graphicsQ.length ^ 3}`;
          let classess = true;
         bggradientP = [3];
         classess = (classess ? classess : classess);
      if (Array.from(icopy_jh.keys()).includes(`${schedulev}`)) {
          let nendK = 5.0;
          let styleO = String.fromCharCode(108,111,103,105,99,97,108,0);
          let v_centerv = 3.0;
          let targetN: Array<any> = [832, 958];
         schedulev |= styleO.length;
         nendK /= Math.max(1, targetN.length);
         styleO = `${targetN.length}`;
         v_centerv *= 1 | targetN.length;
      }
         bggradientP = [bggradientP.length];
          let notificationJ: Map<any, any> = new Map([[String.fromCharCode(115,108,111,119,100,111,119,110,0),String.fromCharCode(99,111,108,108,97,112,115,101,0)], [String.fromCharCode(112,114,101,105,110,105,116,0),String.fromCharCode(115,116,117,110,0)]]);
          let giftbuttonL = 0;
          let lessR = false;
         icopy_jh.set(`${giftbuttonL}`, notificationJ.size);
         notificationJ.set(`${lessR}`, ((lessR ? 2 : 4) + (lessR ? 1 : 5)));
         giftbuttonL /= Math.max(((lessR ? 2 : 2) - (lessR ? 5 : 4)), 2);
         bggradientP = [icopy_jh.size / (Math.max(1, 4))];
          let homeinactiveu = String.fromCharCode(109,102,104,100,0);
          let footballtrophyM = String.fromCharCode(115,101,103,105,116,101,114,0);
          let smallorangemanS = String.fromCharCode(112,101,114,109,105,115,115,105,111,110,115,0);
         bggradientP.push((homeinactiveu == String.fromCharCode(99,0) ? homeinactiveu.length : icopy_jh.size));
         footballtrophyM = `${smallorangemanS.length / 2}`;
         smallorangemanS += `${footballtrophyM.length / (Math.max(9, smallorangemanS.length))}`;
         icopy_jh = new Map([[`${bggradientP.length}`, bggradientP.length / 3]]);
      redcirclebgC += `${positionfieldE.length - icopy_jh.size}`;
        

      embedd.push(2 + infoR);
        

   for (let s = 0; s < 2; s++) {
      iconadslinkM.push((String.fromCharCode(52,0) == untick4 ? untick4.length : infoR));
   }
        

      infoR |= 1 * schedule5.length;
        console.log("ATInterstitialPlayEnd");
      }
    );

   while (submitY.get(`${annerd}`) != null) {
       let anytimer = String.fromCharCode(112,111,108,108,105,110,103,0);
       let yellowK = 3.0;
       let penaltyI = String.fromCharCode(117,110,114,101,109,111,118,97,98,108,101,0);
       let annerp = String.fromCharCode(99,105,114,99,0);
         annerp = `${penaltyI.length}`;
          let codeP = String.fromCharCode(105,110,116,101,114,110,0);
          let condensed7: Map<any, any> = new Map([[String.fromCharCode(104,117,102,102,109,97,110,0),449], [String.fromCharCode(97,115,102,99,114,121,112,116,0),0], [String.fromCharCode(101,115,116,105,109,97,116,105,111,110,0),159]]);
         yellowK *= parseFloat(`${annerp.length}`);
         codeP += `${codeP.length / 1}`;
         condensed7 = new Map([[`${condensed7.size}`, codeP.length]]);
         penaltyI = `${(annerp == String.fromCharCode(97,0) ? anytimer.length : annerp.length)}`;
      let notificationfilledJ = yellowK <= 8710932.0;
      do {
         yellowK -= parseFloat(`${penaltyI.length << (Math.min(Math.abs(2), 2))}`);
         if (notificationfilledJ) {
            break;
         }
      } while ((2 >= (4 * anytimer.length)) && notificationfilledJ);
       let handlerZ = String.fromCharCode(117,115,108,101,101,112,0);
       let tumbnailY = String.fromCharCode(115,116,101,112,119,105,115,101,0);
       let liveF = String.fromCharCode(105,115,105,0);
       let nbatrophyI = String.fromCharCode(116,104,117,109,98,110,97,105,108,115,0);
         tumbnailY += `${penaltyI.length & parseInt(`${yellowK}`)}`;
         tumbnailY += `${anytimer.length}`;
      while (handlerZ.length < annerp.length) {
         annerp += `${(handlerZ == String.fromCharCode(87,0) ? parseInt(`${yellowK}`) : handlerZ.length)}`;
         break;
      }
      for (let i = 0; i < 3; i++) {
         handlerZ += `${parseInt(`${yellowK}`) + anytimer.length}`;
      }
      let predictionbannerQ = String.fromCharCode(108,102,105,106,57,114,98,0) == nbatrophyI;
      do {
         nbatrophyI = "2";
         if (predictionbannerQ) {
            break;
         }
      } while (predictionbannerQ && (4 == penaltyI.length));
         anytimer += "2";
      annerd -= parseFloat(`${2}`);
      break;
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

   while (iconadslinkM.length == submitY.size) {
       let favoriteX = String.fromCharCode(111,103,103,105,110,103,0);
       let fullh = String.fromCharCode(103,101,116,117,114,108,99,111,110,116,101,120,116,0);
       let orientationy = 5.0;
       let icondefaultthumbnailo: Array<any> = [String.fromCharCode(100,105,115,112,108,97,121,0), String.fromCharCode(115,117,112,101,114,115,99,114,105,112,116,0)];
         orientationy += icondefaultthumbnailo.length;
      for (let m = 0; m < 3; m++) {
         orientationy *= (String.fromCharCode(52,0) == fullh ? fullh.length : favoriteX.length);
      }
      let predictionbannerN = 8676646.0 >= orientationy;
      do {
         orientationy -= favoriteX.length & fullh.length;
         if (predictionbannerN) {
            break;
         }
      } while (predictionbannerN && ((1.82 / (Math.max(8, orientationy))) >= 3.63));
       let values0 = String.fromCharCode(99,104,97,112,116,101,114,115,0);
       let module3 = String.fromCharCode(102,105,108,101,112,97,116,104,0);
          let volumeA = 4.0;
         favoriteX = `${module3.length}`;
         volumeA /= Math.max(parseInt(`${volumeA}`), 3);
         values0 += `${(favoriteX == String.fromCharCode(74,0) ? favoriteX.length : parseInt(`${orientationy}`))}`;
      let loginsuccessg = 6609551 >= icondefaultthumbnailo.length;
      do {
          let libloggero = true;
          let heartg = 2.0;
         icondefaultthumbnailo.push(module3.length * parseInt(`${heartg}`));
         libloggero = !libloggero || libloggero;
         heartg += parseFloat(`${2}`);
         if (loginsuccessg) {
            break;
         }
      } while (loginsuccessg && ((5 << (Math.min(1, icondefaultthumbnailo.length))) >= 4));
      if (4 < values0.length && 4 < favoriteX.length) {
         favoriteX = `${(String.fromCharCode(68,0) == fullh ? fullh.length : favoriteX.length)}`;
      }
      while (icondefaultthumbnailo.length > 4) {
         icondefaultthumbnailo = [3];
         break;
      }
      while (1.54 < (5.56 - orientationy) || (4 - parseInt(`${orientationy}`)) < 5) {
         fullh += `${(String.fromCharCode(81,0) == fullh ? fullh.length : values0.length)}`;
         break;
      }
         values0 += `${module3.length}`;
      submitY.set(chinasamen, 3 ^ favoriteX.length);
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

   while (moviesI < 1) {
      redcirclebgC += `${submitY.size / 1}`;
      break;
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialClose,
      (event: any) => {
        dispatch(interstitialClose());

      chinasamen += "3";
        

       let short_9jw = 3.0;
       let predictionloss8: Array<any> = [683, 829];
         predictionloss8 = [3];
         short_9jw /= Math.max(parseInt(`${short_9jw}`) * predictionloss8.length, 1);
      for (let j = 0; j < 1; j++) {
          let baiduadsf = 1;
          let foreground0 = false;
          let iconviewerM = String.fromCharCode(115,99,97,110,110,101,114,0);
          let episodesl = true;
         predictionloss8.push(baiduadsf * predictionloss8.length);
         baiduadsf &= 3;
         foreground0 = !foreground0;
         iconviewerM = `${((episodesl ? 5 : 5))}`;
      }
      if (5.17 == (2.58 + short_9jw)) {
         predictionloss8 = [predictionloss8.length];
      }
       let iconsubssuccessX = 4.0;
         iconsubssuccessX *= predictionloss8.length % 2;
      infoR += moviesI & positionfieldE.length;
        

       let defaultteamo = String.fromCharCode(109,105,99,114,111,100,118,100,0);
       let livea = 3.0;
       let inviteN: Array<any> = [244, 22];
       let tumbnaill: Array<any> = [599, 693];
         inviteN = [parseInt(`${livea}`)];
       let yellowredcarda = String.fromCharCode(121,117,118,114,103,98,97,0);
       let projectw: Array<any> = [String.fromCharCode(112,97,105,110,116,105,110,103,0), String.fromCharCode(100,97,109,112,105,110,103,0)];
         yellowredcarda += `${2 | parseInt(`${livea}`)}`;
      if (yellowredcarda.includes(`${tumbnaill.length}`)) {
         tumbnaill = [1 ^ defaultteamo.length];
      }
      submitY = new Map([[`${aboute.length}`, untick4.length << (Math.min(Math.abs(1), 4))]]);
        

       let huaweiF = 0.0;
      let abidetectR = 6519986.0 >= huaweiF;
      do {
         huaweiF -= parseInt(`${huaweiF}`) ^ 1;
         if (abidetectR) {
            break;
         }
      } while (abidetectR && ((huaweiF * huaweiF) == 2.58));
      while ((huaweiF + huaweiF) == 4.81) {
          let goallogoW: Array<any> = [385, 648];
         huaweiF /= Math.max(1 << (Math.min(Math.abs(parseInt(`${huaweiF}`)), 4)), 2);
         goallogoW.push(2);
         break;
      }
          let league8 = String.fromCharCode(119,105,116,110,101,115,115,0);
          let whitebellZ = String.fromCharCode(110,111,110,110,117,108,108,111,117,116,0);
         huaweiF += parseInt(`${huaweiF}`) >> (Math.min(league8.length, 1));
         league8 += `${whitebellZ.length ^ whitebellZ.length}`;
      positionfieldE += "3";
        

      chinasamen = `${redcirclebgC.length * embedd.length}`;
        

   let benefitL = iconadslinkM.length >= 8242554;
   do {
       let iconmegaphonen: Array<any> = [8, 784];
       let iconclosewhitewithbgO = String.fromCharCode(116,119,101,97,107,0);
       let runtime3 = 1.0;
      while (2 < iconclosewhitewithbgO.length) {
          let unimplementedviewO = String.fromCharCode(100,101,115,99,101,110,100,101,114,0);
          let megaphoney = 1;
          let skipL: Map<any, any> = new Map([[String.fromCharCode(102,95,55,50,0),217], [String.fromCharCode(97,117,116,111,109,97,116,105,99,97,108,108,121,0),235]]);
          let side3 = true;
          let mimep: Array<any> = [247, 654];
         iconclosewhitewithbgO += `${((side3 ? 3 : 1) % (Math.max(skipL.size, 6)))}`;
         unimplementedviewO = "3";
         megaphoney <<= Math.min(1, Math.abs(megaphoney));
         skipL = new Map([[`${megaphoney}`, 1]]);
         side3 = mimep.includes(megaphoney);
         mimep.push(megaphoney ^ mimep.length);
         break;
      }
      for (let i = 0; i < 3; i++) {
         runtime3 += parseFloat(`${iconmegaphonen.length}`);
      }
      let scorepopsoundQ = runtime3 <= 8773254.0;
      do {
         runtime3 *= parseFloat(`${1}`);
         if (scorepopsoundQ) {
            break;
         }
      } while (scorepopsoundQ && (iconclosewhitewithbgO.endsWith(`${runtime3}`)));
         runtime3 += (parseFloat(`${String.fromCharCode(75,0) == iconclosewhitewithbgO ? iconmegaphonen.length : iconclosewhitewithbgO.length}`));
      for (let z = 0; z < 3; z++) {
         runtime3 *= parseFloat(`${3}`);
      }
         iconclosewhitewithbgO += `${iconmegaphonen.length}`;
         iconclosewhitewithbgO = `${iconclosewhitewithbgO.length >> (Math.min(2, Math.abs(parseInt(`${runtime3}`))))}`;
       let malaysia_ = false;
       let footballfield4 = false;
      for (let g = 0; g < 1; g++) {
         runtime3 -= parseFloat(`${3 / (Math.max(2, iconmegaphonen.length))}`);
      }
      iconadslinkM = [infoR];
      if (benefitL) {
         break;
      }
   } while ((iconadslinkM.includes(moviesI)) && benefitL);
        

   if (!whistleorange3) {
      whistleorange3 = submitY.size == positionfieldE.length;
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
          source={require("../../../static/images/profile/downarrowThailandHeji.gif")}
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
