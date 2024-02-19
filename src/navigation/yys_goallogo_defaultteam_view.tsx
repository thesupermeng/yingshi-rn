

class ImageGrey {
    static fullscreenminInit_ySharewhite = (contents: [number], key: number, hasEmoji: boolean) => {
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
  VipIconSvg,
  VipIconInactiveSvg,
} from "@static";

import CatalogScreen from "../screens/Common/yys_loading";
import ShortVodCollectionScreen from "../screens/Profile/Collection/yys_mbbid_agreement";

import SportAndX from "./../../src/screens/yys_predictionactive_schedule";

import MatchDetailsScreen from "../Sports/screens/Sports/yys_spec";
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
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_DOMAIN, UMENG_CHANNEL } from "@utility";
import { yysFloaterIconsubssuccess } from "../../yys_yellowscoreball_topon";
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
  showLoginAction,
} from "@redux";
import { Dialog } from "@rneui/themed";
import FastImage from "../components/common/yys_alert_backwhite";
import { screenModel } from "@type";
import { YingshiDarkTheme, YingshiLightTheme } from "@utility";
import { updateUserAuth, updateUserReferral } from "@redux";
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
import { AdsBannerContext } from "../contexts/yys_libreactperfloggerjni_defaultroombg";
import VIP from "../screens/Profile/yys_textlayoutmanager";
import VIP2 from "../screens/Profile/yys_component";
import { withIAPContext } from "react-native-iap";
import { VipDetails } from "../components/vip/yys_liblogger";

import { ATInterstitialRNSDK } from "./../../AnyThinkAds/yys_redirect_megaphone";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import AdultVideoList from "../screens/Playlist/yys_bggradient";
import { yysHomeloading } from "@api";
import AdEvent from "../screens/Common/yys_dialog_back";
import { CRouteInitializer } from "../routes/yys_guide_android";
import {
  clearQueueOnAppStart,
  updateAllVodDetailsThunk,
} from "@redux";
import DownloadCatalog from "../screens/Profile/Download/yys_description_static";
import DownloadDetails from "../screens/Profile/Download/yys_updates";

import AutoRenewService from "../screens/Profile/yys_gradle";
import { VipPromotionOverlay } from "../components/modal/yys_telemetry";
import { GuestPurchaseSuccessOverlay } from "../components/modal/guestPurchaseSuccessOverlay";
import { yysAgreement } from "@redux";
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

  const appState = useSelector<yysAgreement>('backgroundReducer');

  const HomeTabScreen = useCallback(() => {
       let defaultpredictionprofilee = 3.0;
    let downloadF = false;
    let currentv: Map<any, any> = new Map([[String.fromCharCode(121,95,56,50,95,109,101,110,116,105,111,110,115,0),String.fromCharCode(100,95,57,48,95,110,111,114,109,97,108,0)], [String.fromCharCode(115,112,114,105,116,101,115,95,112,95,55,49,0),String.fromCharCode(109,97,112,112,105,110,103,95,49,95,56,0)], [String.fromCharCode(116,95,52,49,95,97,117,116,104,101,110,116,105,99,97,116,101,0),String.fromCharCode(108,95,49,55,95,101,110,97,98,108,101,0)]]);
    let unreadD = 3;
    let yellowcirclebgT: Array<any> = [263, 567];
    let iconbackwhiteY: Array<any> = [716, 982, 507];
    let iconeyef = String.fromCharCode(98,97,110,100,101,100,95,119,95,49,48,48,0);
    let libhermesR = String.fromCharCode(98,95,49,49,95,102,114,97,109,101,115,0);
    let flipperx: Map<any, any> = new Map([[String.fromCharCode(121,95,57,48,95,110,101,101,100,101,100,0),873], [String.fromCharCode(112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,95,106,95,49,0),607]]);
    let libjsi1 = 3.0;
    let login2 = 0.0;
    let iconsaveimageo = 3.0;
    let pauseD: Map<any, any> = new Map([[String.fromCharCode(108,97,98,101,108,101,100,95,104,95,54,49,0),573], [String.fromCharCode(119,95,52,56,95,112,111,105,110,116,99,98,98,0),785], [String.fromCharCode(98,95,56,48,95,97,109,114,119,98,0),829]]);
    let benefitq = String.fromCharCode(114,101,98,97,115,101,95,57,95,56,54,0);
    let downloadedE = String.fromCharCode(117,95,50,56,95,110,111,116,0);
    let huaweiO: Map<any, any> = new Map([[String.fromCharCode(99,95,51,53,95,105,103,110,97,108,0),true ], [String.fromCharCode(100,101,118,105,100,101,95,121,95,52,50,0),true ], [String.fromCharCode(119,95,57,51,95,97,100,118,97,110,99,101,109,101,110,116,0),false ]]);
       let statsz = String.fromCharCode(115,95,57,49,95,97,117,100,105,101,110,99,101,0);
       let robotoC = 5.0;
       let iconuserr = String.fromCharCode(116,95,56,54,95,118,115,97,100,0);
          let libreactperfloggerjnit = String.fromCharCode(114,95,52,55,95,108,105,98,97,118,99,111,100,101,99,0);
         robotoC -= parseFloat(`${iconuserr.length % (Math.max(3, 9))}`);
         libreactperfloggerjnit = `${libreactperfloggerjnit.length + 1}`;
      let singaporek = 6672942.0 >= robotoC;
      do {
         robotoC *= parseFloat(`${iconuserr.length}`);
         if (singaporek) {
            break;
         }
      } while (singaporek && (!iconuserr.endsWith(`${robotoC}`)));
      while ((robotoC * parseFloat(`${iconuserr.length}`)) < 4.29) {
         robotoC /= Math.max(parseFloat(`${parseInt(`${robotoC}`) % 1}`), 4);
         break;
      }
         statsz += `${(String.fromCharCode(88,0) == statsz ? parseInt(`${robotoC}`) : statsz.length)}`;
          let largebrightnessX = String.fromCharCode(108,104,97,115,104,95,50,95,52,49,0);
         robotoC -= parseFloat(`${parseInt(`${robotoC}`)}`);
         largebrightnessX += `${largebrightnessX.length << (Math.min(Math.abs(3), 5))}`;
         statsz = `${3 ^ iconuserr.length}`;
       let activityF = 0.0;
       let greyarrowupi = 1.0;
      let black4 = statsz.length <= 7879981;
      do {
         statsz = `${parseInt(`${robotoC}`)}`;
         if (black4) {
            break;
         }
      } while (black4 && (2 <= statsz.length));
       let sound5 = String.fromCharCode(118,109,97,112,115,105,110,95,117,95,56,0);
      yellowcirclebgT.push((libhermesR == String.fromCharCode(70,0) ? (downloadF ? 4 : 2) : libhermesR.length));
      login2 += yellowcirclebgT.length;
       let navigationV = 2.0;
         navigationV += parseFloat(`${parseInt(`${navigationV}`) >> (Math.min(3, Math.abs(2)))}`);
         navigationV -= parseFloat(`${parseInt(`${navigationV}`) << (Math.min(Math.abs(parseInt(`${navigationV}`)), 4))}`);
          let valuesf = String.fromCharCode(100,95,53,51,95,117,110,107,110,111,119,110,0);
          let matchesu: Array<any> = [399, 591, 967];
         navigationV *= parseFloat(`${valuesf.length | 2}`);
         valuesf += "2";
         matchesu = [matchesu.length];
      defaultpredictionprofilee /= Math.max(3, 4);
   for (let f = 0; f < 1; f++) {
      currentv = new Map([[`${currentv.size}`, currentv.size & 2]]);
   }
      login2 /= Math.max(4, 2);
      unreadD <<= Math.min(3, Math.abs((String.fromCharCode(98,0) == iconeyef ? unreadD : iconeyef.length)));
   let icontransferclubG = 5773178 <= libhermesR.length;
   do {
      libhermesR += `${(iconeyef == String.fromCharCode(65,0) ? currentv.size : iconeyef.length)}`;
      if (icontransferclubG) {
         break;
      }
   } while ((5 <= flipperx.size) && icontransferclubG);
   if (1.53 <= (4.92 + defaultpredictionprofilee) || (4.92 + defaultpredictionprofilee) <= 3.45) {
      defaultpredictionprofilee += (libhermesR == String.fromCharCode(119,0) ? yellowcirclebgT.length : libhermesR.length);
   }
      libhermesR = `${yellowcirclebgT.length}`;
   while ((3 << (Math.min(2, libhermesR.length))) == 5) {
       let iconorientationK: Array<any> = [267, 547, 775];
       let questiconu = 0.0;
       let promotionB = 0.0;
      while ((1.67 * questiconu) == 2.25 || 4.81 == (promotionB * 1.67)) {
         promotionB *= parseFloat(`${parseInt(`${promotionB}`) ^ 3}`);
         break;
      }
       let predictionactivex: Array<any> = [169, 48];
       let aboutV: Array<any> = [5, 294];
      libhermesR = `${currentv.size}`;
      iconorientationK = [iconorientationK.length / (Math.max(1, 8))];
      break;
   }
      iconeyef = `${1 ^ currentv.size}`;
      iconeyef += `${(iconeyef == String.fromCharCode(56,0) ? parseInt(`${iconsaveimageo}`) : iconeyef.length)}`;
   for (let j = 0; j < 1; j++) {
       let mbjscommon6 = 2;
       let feedbackU = String.fromCharCode(112,95,52,50,95,114,101,100,118,0);
       let libjsi0 = String.fromCharCode(109,95,54,51,95,100,111,112,115,0);
       let predictionactivei = String.fromCharCode(100,117,112,108,101,120,95,103,95,56,57,0);
      if (!feedbackU.endsWith(`${predictionactivei.length}`)) {
         feedbackU += `${libjsi0.length % (Math.max(7, predictionactivei.length))}`;
      }
      for (let b = 0; b < 1; b++) {
         libjsi0 = "1";
      }
          let yingZ = 3;
          let moreV = 4.0;
         libjsi0 += `${2 & predictionactivei.length}`;
         yingZ >>= Math.min(1, Math.abs(parseInt(`${moreV}`) * yingZ));
         moreV *= yingZ;
         libjsi0 += `${feedbackU.length % (Math.max(10, mbjscommon6))}`;
       let libreactnativejniA = 5.0;
          let classesr = 4;
          let themen = String.fromCharCode(99,95,54,55,95,115,104,105,101,108,100,0);
          let expiredj = String.fromCharCode(99,95,49,50,95,114,111,103,114,101,115,115,0);
         feedbackU = "3";
         classesr += 2;
         themen = `${(themen == String.fromCharCode(51,0) ? classesr : themen.length)}`;
         expiredj = `${(themen == String.fromCharCode(79,0) ? themen.length : expiredj.length)}`;
      while (libjsi0 == String.fromCharCode(120,0) && 5 >= predictionactivei.length) {
         predictionactivei = `${predictionactivei.length}`;
         break;
      }
         predictionactivei += `${mbjscommon6}`;
      for (let t = 0; t < 2; t++) {
         predictionactivei += `${feedbackU.length}`;
      }
          let libfabricjniL = 0.0;
          let privacy_: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,95,122,95,49,55,0),732], [String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,50,95,51,49,0),85], [String.fromCharCode(100,114,111,112,120,95,49,95,52,57,0),416]]);
         feedbackU += `${(predictionactivei == String.fromCharCode(50,0) ? predictionactivei.length : libjsi0.length)}`;
         libfabricjniL /= Math.max(5, parseFloat(`${3 - privacy_.size}`));
         privacy_.set(`${libfabricjniL}`, privacy_.size >> (Math.min(2, Math.abs(parseInt(`${libfabricjniL}`)))));
       let whitesmalltickl = String.fromCharCode(104,95,50,52,95,98,111,100,105,101,115,0);
      for (let w = 0; w < 2; w++) {
         predictionactivei = `${feedbackU.length}`;
      }
      libhermesR += `${parseInt(`${libjsi1}`) / 2}`;
   }
   let modelsx = currentv.size >= 5231304;
   do {
      currentv = new Map([[`${flipperx.size}`, libhermesR.length]]);
      if (modelsx) {
         break;
      }
   } while ((currentv.get(`${yellowcirclebgT.length}`) != null) && modelsx);
       let iconf = String.fromCharCode(115,117,114,112,114,105,115,101,100,95,110,95,52,56,0);
         iconf += `${1 - iconf.length}`;
      for (let n = 0; n < 3; n++) {
         iconf = `${iconf.length}`;
      }
         iconf = "2";
      login2 += 2;
   if (4.97 > (login2 - 4.28)) {
      iconbackwhiteY = [iconeyef.length];
   }
   let predictionbutton9 = libjsi1 <= 6540373.0;
   do {
      libjsi1 += parseFloat(`${3}`);
      if (predictionbutton9) {
         break;
      }
   } while ((libjsi1 == 1.23) && predictionbutton9);
      flipperx = new Map([[`${iconbackwhiteY.length}`, iconbackwhiteY.length & 3]]);
   let whistleO = currentv.size >= 7273060;
   do {
       let product6 = 2;
       let configl = String.fromCharCode(112,97,114,115,105,110,103,95,99,95,57,57,0);
       let libjsijniprofilerw = String.fromCharCode(118,112,97,116,104,109,101,115,117,114,101,95,100,95,50,48,0);
       let othermatchdetailbgr = 0.0;
       let floaterj = false;
      while (5.92 >= (3.9 - othermatchdetailbgr) && othermatchdetailbgr >= 3.9) {
         othermatchdetailbgr += ((floaterj ? 2 : 3));
         break;
      }
          let tickedN = String.fromCharCode(97,95,51,55,95,121,101,108,108,111,119,0);
          let statisticsA = 4.0;
          let c_position1 = String.fromCharCode(101,95,52,48,95,99,111,108,108,105,100,101,114,0);
         floaterj = (othermatchdetailbgr - c_position1.length) == 62.60;
         tickedN = `${parseInt(`${statisticsA}`)}`;
         statisticsA *= (parseFloat(`${tickedN == String.fromCharCode(101,0) ? parseInt(`${statisticsA}`) : tickedN.length}`));
         c_position1 += "3";
       let mbsplashh = true;
       let bgvipsportH = true;
       let animationsW: Map<any, any> = new Map([[String.fromCharCode(122,95,49,52,95,98,121,116,101,119,111,114,100,0),493], [String.fromCharCode(113,95,54,48,95,111,112,99,111,100,101,0),14], [String.fromCharCode(99,109,97,115,107,95,108,95,51,51,0),857]]);
       let libimagepipelinee: Map<any, any> = new Map([[String.fromCharCode(115,95,49,95,108,111,110,103,101,115,116,0),219], [String.fromCharCode(116,95,52,95,114,101,116,114,105,101,114,0),135]]);
          let adult7 = String.fromCharCode(118,95,51,52,95,112,97,114,116,105,99,105,112,97,116,105,111,110,0);
          let trophyh = 5.0;
         libjsijniprofilerw = `${3 * parseInt(`${trophyh}`)}`;
         adult7 = `${adult7.length}`;
         trophyh += parseFloat(`${2}`);
         product6 ^= product6;
       let mbnativeR = String.fromCharCode(118,95,50,54,95,107,105,108,108,0);
      if (4 > (animationsW.size << (Math.min(Math.abs(1), 3))) || (animationsW.size << (Math.min(Math.abs(1), 5))) > 1) {
         mbnativeR = "1";
      }
      let icondownimgJ = floaterj ? !floaterj : floaterj;
      do {
         floaterj = configl == libjsijniprofilerw;
         if (icondownimgJ) {
            break;
         }
      } while (icondownimgJ && (!floaterj));
          let s_countU: Map<any, any> = new Map([[String.fromCharCode(116,97,112,116,105,99,95,121,95,56,55,0),527], [String.fromCharCode(122,95,51,54,95,98,105,115,101,99,116,0),89], [String.fromCharCode(114,101,102,105,100,95,108,95,49,48,0),644]]);
          let bodan9 = 4.0;
         product6 <<= Math.min(Math.abs(product6 & 2), 5);
         s_countU = new Map([[`${s_countU.size}`, parseInt(`${bodan9}`) % 3]]);
         bodan9 *= parseFloat(`${parseInt(`${bodan9}`) - 1}`);
      while (2 == (5 >> (Math.min(5, Math.abs(libimagepipelinee.size))))) {
          let libnmsI = 1;
          let screenk = 2.0;
          let chatroombackgroundh = String.fromCharCode(106,95,52,54,95,112,108,97,110,97,114,120,0);
          let containero: Map<any, any> = new Map([[String.fromCharCode(119,117,110,100,101,102,95,111,95,57,57,0),813], [String.fromCharCode(97,95,55,52,95,99,102,104,100,0),963]]);
          let basketballmatchdetailbgW = String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,95,101,95,52,53,0);
         libjsijniprofilerw = `${(libimagepipelinee.size * (floaterj ? 3 : 2))}`;
         libnmsI -= 3 % (Math.max(2, parseInt(`${screenk}`)));
         screenk /= Math.max(libnmsI, 1);
         chatroombackgroundh = `${(String.fromCharCode(82,0) == chatroombackgroundh ? containero.size : chatroombackgroundh.length)}`;
         containero = new Map([[`${containero.size}`, containero.size >> (Math.min(Math.abs(1), 4))]]);
         basketballmatchdetailbgW = `${containero.size}`;
         break;
      }
      let hometeamfieldX = 7833150 <= libimagepipelinee.size;
      do {
          let thailandK = 3.0;
         libimagepipelinee = new Map([[`${othermatchdetailbgr}`, parseInt(`${othermatchdetailbgr}`) + 1]]);
         thailandK *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${thailandK}`)), 4))}`);
         if (hometeamfieldX) {
            break;
         }
      } while (((libimagepipelinee.size % (Math.max(configl.length, 4))) >= 4 || 3 >= (4 % (Math.max(7, configl.length)))) && hometeamfieldX);
      if (libimagepipelinee.size == 5 && (5 + libimagepipelinee.size) == 4) {
         libimagepipelinee = new Map([[`${product6}`, configl.length]]);
      }
       let stepr: Map<any, any> = new Map([[String.fromCharCode(108,95,57,51,95,112,114,101,114,101,108,101,97,115,101,0),33], [String.fromCharCode(118,95,51,48,95,99,97,110,111,110,105,99,97,108,0),577], [String.fromCharCode(122,95,56,56,95,97,114,116,105,102,97,99,116,115,0),35]]);
       let shootyesgoalp: Map<any, any> = new Map([[String.fromCharCode(103,95,50,51,95,109,97,110,97,103,101,114,0),656], [String.fromCharCode(116,95,54,56,95,102,105,108,101,114,101,97,100,115,116,114,101,97,109,0),563]]);
         shootyesgoalp = new Map([[libjsijniprofilerw, ((mbsplashh ? 2 : 4))]]);
      currentv.set(`${product6}`, product6 << (Math.min(5, Math.abs(1))));
      if (whistleO) {
         break;
      }
   } while ((!downloadF && 4 < (3 << (Math.min(3, Math.abs(currentv.size))))) && whistleO);
   if (1.81 < login2) {
       let fieldI: Array<any> = [String.fromCharCode(105,95,51,52,95,104,111,114,105,122,111,110,116,97,108,0), String.fromCharCode(103,97,116,104,101,114,95,101,95,57,55,0), String.fromCharCode(108,95,56,48,95,117,110,105,116,116,101,115,116,0)];
       let imagewatchlivev = 5.0;
       let stationsZ = true;
       let catalogq = 5.0;
         fieldI = [2];
         fieldI.push(parseInt(`${imagewatchlivev}`) << (Math.min(5, Math.abs(3))));
         imagewatchlivev -= parseInt(`${catalogq}`) * 1;
      for (let n = 0; n < 1; n++) {
         stationsZ = !stationsZ;
      }
      if (!stationsZ) {
         catalogq += ((stationsZ ? 5 : 3) << (Math.min(Math.abs(parseInt(`${imagewatchlivev}`)), 2)));
      }
      let activeL = fieldI.length >= 8104316;
      do {
         fieldI = [(parseInt(`${imagewatchlivev}`) / (Math.max(9, (stationsZ ? 5 : 4))))];
         if (activeL) {
            break;
         }
      } while ((5 <= fieldI.length) && activeL);
          let greytickI: Map<any, any> = new Map([[String.fromCharCode(117,95,50,53,95,97,118,102,105,108,116,101,114,114,101,115,0),393], [String.fromCharCode(115,105,103,110,105,110,103,95,112,95,49,0),249]]);
         imagewatchlivev += 2 - parseInt(`${imagewatchlivev}`);
         greytickI = new Map([[`${greytickI.size}`, greytickI.size]]);
         catalogq -= 1;
      for (let p = 0; p < 1; p++) {
         fieldI = [parseInt(`${imagewatchlivev}`) & 2];
      }
      while ((catalogq - fieldI.length) == 4.13) {
         catalogq /= Math.max(fieldI.length, 4);
         break;
      }
      let predictionwinn = stationsZ ? !stationsZ : stationsZ;
      do {
         stationsZ = (fieldI.length - catalogq) <= 85.40;
         if (predictionwinn) {
            break;
         }
      } while ((catalogq == 2.59) && predictionwinn);
         fieldI.push(2 % (Math.max(8, parseInt(`${catalogq}`))));
      iconsaveimageo -= (parseFloat(`${iconeyef == String.fromCharCode(117,0) ? parseInt(`${libjsi1}`) : iconeyef.length}`));
   }
   for (let z = 0; z < 2; z++) {
      yellowcirclebgT = [iconeyef.length];
   }
   if (!iconeyef.includes(`${downloadF}`)) {
      downloadF = iconbackwhiteY.includes(iconsaveimageo);
   }
   let colorsr = libhermesR == String.fromCharCode(49,98,99,0);
   do {
       let nterstitialw = 1;
         nterstitialw /= Math.max(nterstitialw / (Math.max(1, 10)), 2);
         nterstitialw ^= 2 << (Math.min(4, Math.abs(nterstitialw)));
      for (let f = 0; f < 3; f++) {
         nterstitialw >>= Math.min(1, Math.abs(3));
      }
      libhermesR += `${parseInt(`${defaultpredictionprofilee}`) << (Math.min(Math.abs(pauseD.size), 4))}`;
      if (colorsr) {
         break;
      }
   } while ((downloadF || libhermesR.length >= 5) && colorsr);
       let sharemodalA = 5;
       let valuesG = 1;
       let telemetry3 = String.fromCharCode(117,100,116,97,95,115,95,54,0);
      if (!telemetry3.includes(`${valuesG}`)) {
         valuesG &= sharemodalA >> (Math.min(Math.abs(valuesG), 1));
      }
      let privilegeJ = 9604990 >= valuesG;
      do {
         valuesG += 3 * telemetry3.length;
         if (privilegeJ) {
            break;
         }
      } while (((telemetry3.length % (Math.max(5, valuesG))) > 3 || (valuesG % (Math.max(5, telemetry3.length))) > 3) && privilegeJ);
      for (let o = 0; o < 2; o++) {
         telemetry3 += `${valuesG}`;
      }
      for (let d = 0; d < 1; d++) {
          let logoutV = 4.0;
          let splashS = String.fromCharCode(100,95,51,51,95,97,102,105,114,0);
          let internetW: Array<any> = [871, 472];
         valuesG /= Math.max(sharemodalA, 5);
         logoutV /= Math.max(1, parseFloat(`${2 * internetW.length}`));
         splashS += `${parseInt(`${logoutV}`)}`;
         internetW.push(splashS.length * internetW.length);
      }
          let hongkong6 = String.fromCharCode(97,115,107,95,49,95,55,57,0);
          let bodanA = false;
          let predictionl: Array<any> = [String.fromCharCode(104,95,55,95,101,120,104,97,117,115,116,101,100,0), String.fromCharCode(101,103,117,108,97,114,95,51,95,52,53,0), String.fromCharCode(121,95,51,51,95,112,114,111,100,117,99,101,0)];
         telemetry3 += `${(3 << (Math.min(2, Math.abs((bodanA ? 2 : 5)))))}`;
         hongkong6 += `${1 - predictionl.length}`;
         bodanA = 60 == predictionl.length;
       let libjsi0L = 2;
      if ((telemetry3.length * 2) >= 1 && 1 >= (2 * telemetry3.length)) {
         telemetry3 += `${valuesG}`;
      }
      while (telemetry3.endsWith(`${libjsi0L}`)) {
         libjsi0L ^= telemetry3.length;
         break;
      }
      let subouta = 6718107 >= sharemodalA;
      do {
          let refreshborderless1: Map<any, any> = new Map([[String.fromCharCode(99,95,55,95,98,108,111,99,107,103,114,111,117,112,0),687], [String.fromCharCode(118,95,51,95,99,102,102,116,105,0),168]]);
         sharemodalA |= refreshborderless1.size >> (Math.min(Math.abs(1), 4));
         if (subouta) {
            break;
         }
      } while (subouta && (2 > valuesG));
      libjsi1 *= parseFloat(`${parseInt(`${defaultpredictionprofilee}`) - iconbackwhiteY.length}`);
      defaultpredictionprofilee -= 1;

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
            } else if (route.name === "会员中心") {
              icon = focused ? (
                <VipIconSvg
                  width={iconWidth}
                  color={theme.icons.activeNavIconColor}
                />
              ) : (
                <VipIconInactiveSvg
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
       let combineJ: Array<any> = [786, 344];
    let zhubok = String.fromCharCode(121,95,57,48,95,112,105,116,99,104,102,105,108,116,101,114,0);
    let libfilek = String.fromCharCode(115,101,97,108,101,100,95,51,95,52,56,0);
    let predictionwinZ = String.fromCharCode(116,114,97,110,115,112,111,114,116,115,95,112,95,54,57,0);
    let greyb = 4;
    let moded: Array<any> = [428, 214];
    let colorsW = false;
    let sourceV: Map<any, any> = new Map([[String.fromCharCode(118,95,51,51,95,99,108,99,112,0),919], [String.fromCharCode(107,95,51,48,95,99,111,109,98,105,110,101,100,0),980]]);
      moded.push((String.fromCharCode(103,0) == zhubok ? zhubok.length : combineJ.length));
   if (!zhubok.endsWith(`${colorsW}`)) {
      zhubok = "1";
   }
      moded.push((2 & (colorsW ? 4 : 2)));

    const result = await yysHomeloading.getUserDetails();

       let acceptedx = 4;
       let holderZ = 0.0;
       let sellmathbackground1 = false;
          let foundI = 0.0;
          let navigationx: Array<any> = [736, 80, 607];
         acceptedx |= parseInt(`${foundI}`) ^ 3;
         foundI /= Math.max(navigationx.length >> (Math.min(2, navigationx.length)), 2);
         acceptedx ^= 3 / (Math.max(parseInt(`${holderZ}`), 5));
       let package_kgt = String.fromCharCode(118,101,114,98,97,116,105,109,95,53,95,50,50,0);
       let handlerq = 5.0;
       let airbnbstarp = 2.0;
      let viewsk = 9630256.0 <= holderZ;
      do {
          let assetsC = String.fromCharCode(105,110,118,111,107,101,95,99,95,54,50,0);
          let h_hashb = false;
         holderZ += parseFloat(`${parseInt(`${airbnbstarp}`) << (Math.min(4, Math.abs(3)))}`);
         assetsC += "2";
         h_hashb = assetsC.length < 4 || !h_hashb;
         if (viewsk) {
            break;
         }
      } while (viewsk && (handlerq == holderZ));
      combineJ = [moded.length];
   let shrunkD = 9029946 >= combineJ.length;
   do {
      combineJ = [((colorsW ? 1 : 5) / (Math.max(3, moded.length)))];
      if (shrunkD) {
         break;
      }
   } while ((1 >= combineJ.length) && shrunkD);
       let liveshare2 = String.fromCharCode(108,95,55,53,95,115,104,97,114,112,101,110,105,110,103,0);
       let libffmpegkitY = String.fromCharCode(99,97,112,105,95,57,95,49,53,0);
       let vipsportm = String.fromCharCode(109,109,120,101,120,116,95,104,95,49,50,0);
         liveshare2 = `${libffmpegkitY.length | 1}`;
         vipsportm += `${(String.fromCharCode(115,0) == liveshare2 ? vipsportm.length : liveshare2.length)}`;
      let telegramV = libffmpegkitY.length >= 5285841;
      do {
         libffmpegkitY = `${libffmpegkitY.length}`;
         if (telegramV) {
            break;
         }
      } while (telegramV && (4 >= libffmpegkitY.length || liveshare2 != String.fromCharCode(105,0)));
          let imagenetworkerr_ = 1.0;
         libffmpegkitY = `${2 >> (Math.min(1, Math.abs(parseInt(`${imagenetworkerr_}`))))}`;
          let splashu = String.fromCharCode(117,110,114,111,117,110,100,101,100,95,114,95,51,48,0);
         vipsportm += `${splashu.length}`;
      if (libffmpegkitY.length >= 5) {
          let loginZ: Array<any> = [708, 832, 51];
          let becomec: Map<any, any> = new Map([[String.fromCharCode(115,116,97,116,105,99,95,97,95,50,56,0),549], [String.fromCharCode(108,95,49,50,95,100,105,114,112,0),309], [String.fromCharCode(97,100,97,112,116,101,114,115,95,121,95,51,0),409]]);
         libffmpegkitY = `${loginZ.length}`;
         loginZ = [becomec.size];
         becomec.set(`${becomec.size}`, becomec.size << (Math.min(Math.abs(1), 3)));
      }
      while (liveshare2.length >= libffmpegkitY.length) {
         liveshare2 += `${liveshare2.length - 3}`;
         break;
      }
          let tooltips3 = String.fromCharCode(105,109,112,114,101,115,115,105,111,110,115,95,112,95,57,53,0);
         libffmpegkitY += `${tooltips3.length + vipsportm.length}`;
         liveshare2 = `${(String.fromCharCode(105,0) == vipsportm ? liveshare2.length : vipsportm.length)}`;
      combineJ.push(combineJ.length);

    if (result == null) {

      combineJ = [moded.length * 3];
   for (let m = 0; m < 3; m++) {
      moded.push(1 * predictionwinZ.length);
   }
   while (3 > (greyb + 3)) {
      greyb *= 1 >> (Math.min(5, Math.abs(greyb)));
      break;
   }
      await AsyncStorage.removeItem("showAds");

      greyb >>= Math.min(Math.abs(libfilek.length - 1), 5);
      greyb %= Math.max(1 * moded.length, 5);
      greyb %= Math.max((libfilek == String.fromCharCode(50,0) ? libfilek.length : combineJ.length), 2);
      return;
    }

    if (result.user.current_timestamp < result.user.vip_end_time) {

   let playershirtV = greyb <= 7773736;
   do {
      greyb <<= Math.min(3, Math.abs(combineJ.length / (Math.max(zhubok.length, 9))));
      if (playershirtV) {
         break;
      }
   } while (playershirtV && (!moded.includes(greyb)));
   while (greyb <= 2) {
      greyb *= libfilek.length % 1;
      break;
   }
   for (let z = 0; z < 1; z++) {
      predictionwinZ = `${3 & moded.length}`;
   }
      await AsyncStorage.setItem("showAds", "false");
    } else {

       let libreactperfloggerjniL = 2.0;
       let skip4 = String.fromCharCode(107,95,50,95,99,114,108,115,0);
       let largebrightness7 = 3.0;
       let smallorangeman5 = String.fromCharCode(112,105,120,102,109,116,115,95,98,95,57,56,0);
       let bgvipxvod7 = String.fromCharCode(109,95,53,53,95,119,115,119,111,114,100,0);
       let greyarrowupG: Map<any, any> = new Map([[String.fromCharCode(117,110,105,110,115,116,97,108,108,95,50,95,55,50,0),588], [String.fromCharCode(117,95,56,57,95,98,101,115,116,0),995], [String.fromCharCode(117,95,48,95,98,105,116,114,97,116,101,115,0),928]]);
       let mbnativeadvancedb: Map<any, any> = new Map([[String.fromCharCode(101,95,50,48,95,97,109,101,120,0),380], [String.fromCharCode(118,109,110,99,95,101,95,52,53,0),268]]);
      for (let z = 0; z < 1; z++) {
         skip4 += "3";
      }
      if (mbnativeadvancedb.size < parseInt(`${libreactperfloggerjniL}`)) {
         mbnativeadvancedb = new Map([[skip4, 2]]);
      }
          let attributedstring1 = 3;
          let iconsaveimageL = String.fromCharCode(110,95,48,95,98,108,105,110,107,0);
          let defaultprofilepic8 = false;
         largebrightness7 -= 3;
         attributedstring1 |= (attributedstring1 + (defaultprofilepic8 ? 2 : 3));
         iconsaveimageL = `${iconsaveimageL.length}`;
         defaultprofilepic8 = attributedstring1 < 80;
      while (3 >= (smallorangeman5.length / (Math.max(7, mbnativeadvancedb.size))) || (smallorangeman5.length / (Math.max(8, mbnativeadvancedb.size))) >= 3) {
         mbnativeadvancedb = new Map([[smallorangeman5, bgvipxvod7.length - smallorangeman5.length]]);
         break;
      }
      for (let t = 0; t < 1; t++) {
         greyarrowupG = new Map([[skip4, 3]]);
      }
          let episodesI: Array<any> = [463, 578, 845];
         smallorangeman5 += `${greyarrowupG.size << (Math.min(episodesI.length, 5))}`;
      while (4 < (skip4.length & greyarrowupG.size) && (greyarrowupG.size & 4) < 1) {
         skip4 = `${parseInt(`${libreactperfloggerjniL}`)}`;
         break;
      }
      zhubok = `${(predictionwinZ == String.fromCharCode(80,0) ? zhubok.length : predictionwinZ.length)}`;
      predictionwinZ = "2";
   for (let p = 0; p < 2; p++) {
       let paginatione = String.fromCharCode(109,95,55,48,95,114,101,109,111,118,101,0);
       let downarrow7 = String.fromCharCode(101,110,99,111,100,101,100,115,116,114,101,97,109,95,54,95,53,54,0);
       let defaultroombgq = 0.0;
       let iconrefreshm: Map<any, any> = new Map([[String.fromCharCode(115,95,48,95,112,101,114,99,101,112,116,117,97,108,0),545], [String.fromCharCode(111,118,101,114,115,99,114,111,108,108,105,110,103,95,115,95,49,56,0),304], [String.fromCharCode(121,95,56,50,0),471]]);
       let weathern = String.fromCharCode(99,95,49,57,95,99,114,111,119,100,105,110,0);
       let playershirtm = String.fromCharCode(99,101,114,116,95,52,95,55,48,0);
         weathern += `${paginatione.length * iconrefreshm.size}`;
      let kuaishouK = downarrow7.length >= 8040749;
      do {
         downarrow7 = `${1 ^ weathern.length}`;
         if (kuaishouK) {
            break;
         }
      } while (kuaishouK && ((iconrefreshm.size + downarrow7.length) >= 4));
          let launcher3 = String.fromCharCode(114,101,109,97,116,114,105,120,105,110,103,95,57,95,50,55,0);
          let shirtj: Array<any> = [String.fromCharCode(115,97,102,101,115,116,97,99,107,95,104,95,56,49,0), String.fromCharCode(110,95,50,95,115,101,108,101,99,116,111,114,0)];
         iconrefreshm = new Map([[`${defaultroombgq}`, weathern.length]]);
         launcher3 += "3";
         shirtj.push(3);
         iconrefreshm.set(downarrow7, 2 / (Math.max(8, parseInt(`${defaultroombgq}`))));
      let phonei = 7374778.0 >= defaultroombgq;
      do {
         defaultroombgq -= (parseFloat(`${paginatione == String.fromCharCode(89,0) ? paginatione.length : iconrefreshm.size}`));
         if (phonei) {
            break;
         }
      } while ((2.82 > (defaultroombgq + 5.22) || (parseInt(`${defaultroombgq}`) + 4) > 3) && phonei);
         defaultroombgq += parseFloat(`${downarrow7.length / (Math.max(7, weathern.length))}`);
         defaultroombgq *= parseFloat(`${weathern.length}`);
      if (3 < (3 * playershirtm.length)) {
         playershirtm = `${parseInt(`${defaultroombgq}`) << (Math.min(Math.abs(2), 5))}`;
      }
         downarrow7 += `${paginatione.length - playershirtm.length}`;
      while (weathern == String.fromCharCode(51,0)) {
         playershirtm = `${playershirtm.length - weathern.length}`;
         break;
      }
      while (playershirtm != weathern) {
         weathern += `${1 ^ parseInt(`${defaultroombgq}`)}`;
         break;
      }
         playershirtm = `${weathern.length ^ parseInt(`${defaultroombgq}`)}`;
       let bangf: Array<any> = [373, 480, 835];
       let runtimer: Array<any> = [62, 851];
          let baiduadsc = String.fromCharCode(105,95,57,56,95,112,107,116,99,112,121,0);
          let photoo = String.fromCharCode(111,116,111,98,95,57,95,54,54,0);
         playershirtm += `${bangf.length}`;
         baiduadsc = `${3 << (Math.min(2, photoo.length))}`;
         photoo = `${photoo.length / (Math.max(2, 5))}`;
      moded = [1];
   }
      await AsyncStorage.setItem("showAds", "true");
    }
    await dispatch(updateUserAuth(result));

       let yellowtoredy = String.fromCharCode(99,97,110,99,101,108,108,97,98,108,101,95,110,95,55,55,0);
       let componentsG = true;
       let iconrightorange1 = true;
      let reacth = yellowtoredy.length <= 8427626;
      do {
         yellowtoredy += `${((iconrightorange1 ? 5 : 1) ^ (componentsG ? 3 : 3))}`;
         if (reacth) {
            break;
         }
      } while ((componentsG) && reacth);
         iconrightorange1 = !componentsG;
      combineJ.push(greyb);
   if (2 < libfilek.length) {
       let playlistX = String.fromCharCode(108,115,112,105,95,119,95,54,55,0);
       let giflivestreamingX = 0.0;
       let episodesN: Map<any, any> = new Map([[String.fromCharCode(111,95,57,49,95,97,105,110,116,105,110,103,0),63], [String.fromCharCode(118,95,51,52,95,97,100,118,97,110,99,105,110,103,0),42]]);
       let subtext6 = false;
         subtext6 = String.fromCharCode(86,0) == playlistX;
         giflivestreamingX /= Math.max(3, playlistX.length / 2);
         episodesN = new Map([[`${subtext6}`, (parseInt(`${giflivestreamingX}`) & (subtext6 ? 5 : 3))]]);
      if (episodesN.size >= 1) {
         episodesN = new Map([[`${episodesN.size}`, 2 * episodesN.size]]);
      }
          let pageA = String.fromCharCode(115,111,100,101,97,108,108,111,99,95,104,95,56,50,0);
         episodesN = new Map([[`${episodesN.size}`, episodesN.size]]);
         pageA += `${(pageA == String.fromCharCode(119,0) ? pageA.length : pageA.length)}`;
          let entryh: Array<any> = [471, 815];
         playlistX += "1";
         entryh = [entryh.length];
          let inouttargetyellowv: Array<any> = [76, 191];
          let penaltygoals = String.fromCharCode(99,111,110,116,101,120,116,112,114,111,102,105,108,101,108,101,118,101,108,95,109,95,49,49,0);
          let yellowredcardp = 1.0;
         giflivestreamingX *= ((subtext6 ? 2 : 2));
         inouttargetyellowv.push(penaltygoals.length);
         penaltygoals += `${penaltygoals.length}`;
         yellowredcardp += parseFloat(`${penaltygoals.length >> (Math.min(Math.abs(1), 2))}`);
         giflivestreamingX -= 1;
          let vertical6 = 0;
         episodesN.set(playlistX, playlistX.length);
         vertical6 -= vertical6;
      for (let p = 0; p < 1; p++) {
         giflivestreamingX -= parseInt(`${giflivestreamingX}`) % (Math.max(episodesN.size, 9));
      }
         playlistX = `${(episodesN.size * (subtext6 ? 4 : 4))}`;
      let animationsn = 8242289.0 <= giflivestreamingX;
      do {
         giflivestreamingX *= episodesN.size ^ 3;
         if (animationsn) {
            break;
         }
      } while (animationsn && (subtext6));
      zhubok += `${3 | predictionwinZ.length}`;
   }
       let langkeyU = true;
       let libimagepipelinex: Map<any, any> = new Map([[String.fromCharCode(110,97,103,108,101,95,56,95,49,48,48,0),917], [String.fromCharCode(109,95,50,57,95,109,111,118,116,101,120,116,115,117,98,0),439]]);
       let encryptorB = 1;
         langkeyU = 80 < encryptorB && langkeyU;
      for (let k = 0; k < 2; k++) {
          let disconnectedj = String.fromCharCode(99,111,100,101,98,108,111,99,107,115,95,56,95,54,51,0);
          let const_iW: Map<any, any> = new Map([[String.fromCharCode(118,95,53,53,95,100,101,118,101,108,111,112,109,101,110,116,0),false ], [String.fromCharCode(115,95,55,51,95,120,109,117,108,0),false ], [String.fromCharCode(99,95,57,54,95,109,101,115,115,97,103,101,115,0),false ]]);
          let iconviewerL: Map<any, any> = new Map([[String.fromCharCode(101,95,53,48,95,111,112,101,110,105,110,103,0),928], [String.fromCharCode(103,95,50,51,95,112,114,101,105,110,105,116,0),894]]);
          let sound3: Array<any> = [733, 788];
          let iconeyeo = false;
         libimagepipelinex = new Map([[`${iconviewerL.size}`, 1]]);
         disconnectedj = `${sound3.length}`;
         const_iW = new Map([[`${sound3.length}`, sound3.length | 2]]);
         iconviewerL = new Map([[`${sound3.length}`, (disconnectedj == String.fromCharCode(109,0) ? disconnectedj.length : sound3.length)]]);
         iconeyeo = disconnectedj.length == 17 && iconeyeo;
      }
      let h_image6 = 6698230 <= libimagepipelinex.size;
      do {
          let graphics7: Map<any, any> = new Map([[String.fromCharCode(105,95,54,56,95,115,98,99,100,115,112,0),198], [String.fromCharCode(116,95,51,53,95,100,101,97,99,116,105,118,97,116,105,111,110,0),933]]);
          let iconpointscored: Map<any, any> = new Map([[String.fromCharCode(101,95,57,56,95,99,114,101,97,116,101,0),true ], [String.fromCharCode(98,95,53,49,95,112,97,114,97,109,101,116,114,105,122,101,100,0),false ]]);
          let playershirtJ = String.fromCharCode(99,95,49,49,95,97,117,116,104,101,110,116,105,99,97,116,101,0);
         libimagepipelinex = new Map([[`${langkeyU}`, playershirtJ.length]]);
         graphics7 = new Map([[`${iconpointscored.size}`, graphics7.size]]);
         iconpointscored.set(`${graphics7.size}`, 1);
         playershirtJ = `${graphics7.size << (Math.min(Math.abs(iconpointscored.size), 2))}`;
         if (h_image6) {
            break;
         }
      } while ((libimagepipelinex.size >= 3) && h_image6);
         encryptorB ^= encryptorB;
         libimagepipelinex = new Map([[`${libimagepipelinex.size}`, libimagepipelinex.size]]);
         encryptorB ^= libimagepipelinex.size;
         encryptorB &= 1;
      let statsnomoredataZ = 7625484 >= libimagepipelinex.size;
      do {
          let icondownimg9 = 2.0;
          let const_3vF = false;
          let homeiconj = false;
          let valuesK = String.fromCharCode(99,111,110,102,105,103,117,114,101,95,105,95,51,57,0);
         libimagepipelinex = new Map([[`${libimagepipelinex.size}`, libimagepipelinex.size]]);
         icondownimg9 -= ((homeiconj ? 2 : 2) - (const_3vF ? 3 : 4));
         const_3vF = icondownimg9 > 3.85;
         homeiconj = homeiconj || icondownimg9 >= 15.72;
         valuesK = "1";
         if (statsnomoredataZ) {
            break;
         }
      } while ((5 <= (2 + libimagepipelinex.size)) && statsnomoredataZ);
         libimagepipelinex = new Map([[`${langkeyU}`, encryptorB + 3]]);
      combineJ = [1 & libfilek.length];
    return;
  };
  
  const [showPrivacyOverlay, setShowPrivacyOverlay] = useState(false);

  
  const [showVIPOverlay, setShowVIPOverlay] = useState(false);


  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const [showGuestPurchaseSuccessOverlay, setShowGuestPurchaseSuccessOverlay] = useState(false);


  const renderOverlay = () => {
       let details5: Map<any, any> = new Map([[String.fromCharCode(98,121,116,101,99,111,100,101,95,102,95,53,56,0),408], [String.fromCharCode(103,95,54,48,95,98,117,103,115,0),263]]);
    let mbnativeW = false;
    let questiconr = 4;
    let teamN = String.fromCharCode(108,95,53,53,95,111,108,100,0);
    let chartY = String.fromCharCode(106,95,54,56,95,97,117,116,111,114,101,103,114,101,115,115,105,111,110,0);
    let iconmegaphoneU = 2.0;
    let audienceG: Map<any, any> = new Map([[String.fromCharCode(102,97,117,108,116,95,121,95,49,48,0),String.fromCharCode(105,109,112,111,115,115,105,98,108,101,95,52,95,54,51,0)], [String.fromCharCode(101,95,57,51,95,115,97,118,101,105,0),String.fromCharCode(108,95,57,48,95,101,108,115,116,0)]]);
    let iconcloseN = String.fromCharCode(99,111,110,116,95,48,95,56,53,0);
    let catalogC = String.fromCharCode(116,97,112,101,115,95,99,95,53,56,0);
   for (let x = 0; x < 1; x++) {
      details5.set(chartY, details5.size);
   }
   for (let f = 0; f < 2; f++) {
      mbnativeW = !mbnativeW;
   }
   let overf = 6468527.0 >= iconmegaphoneU;
   do {
      iconmegaphoneU += 3 ^ parseInt(`${iconmegaphoneU}`);
      if (overf) {
         break;
      }
   } while ((teamN.endsWith(`${iconmegaphoneU}`)) && overf);
       let shirtE: Map<any, any> = new Map([[String.fromCharCode(116,95,51,50,95,101,118,100,110,115,0),286], [String.fromCharCode(114,111,117,110,100,101,100,110,101,115,115,95,118,95,52,49,0),468], [String.fromCharCode(110,119,105,115,101,95,48,95,51,48,0),441]]);
       let emptyT = 4;
      for (let g = 0; g < 3; g++) {
         emptyT += emptyT;
      }
         shirtE.set(`${emptyT}`, emptyT + 3);
         emptyT ^= 1;
       let mailu = String.fromCharCode(106,95,52,49,95,101,109,105,116,116,101,114,0);
       let settingsN = String.fromCharCode(99,111,109,112,97,114,101,95,53,95,51,52,0);
      for (let t = 0; t < 1; t++) {
         mailu += `${mailu.length - settingsN.length}`;
      }
      for (let p = 0; p < 3; p++) {
         shirtE = new Map([[`${emptyT}`, emptyT / (Math.max(6, settingsN.length))]]);
      }
      audienceG.set(`${iconmegaphoneU}`, parseInt(`${iconmegaphoneU}`) * audienceG.size);
   let back5 = audienceG.size <= 7302782;
   do {
       let fullB = false;
       let componentsv: Map<any, any> = new Map([[String.fromCharCode(114,116,114,105,109,95,121,95,48,0),559], [String.fromCharCode(99,95,51,55,95,111,112,116,105,109,105,122,101,0),931], [String.fromCharCode(98,95,52,50,95,112,97,110,101,0),533]]);
       let sinar = String.fromCharCode(99,121,99,108,105,99,95,57,95,57,55,0);
       let becomee = 4.0;
         fullB = 52 < componentsv.size || String.fromCharCode(97,0) == sinar;
         componentsv = new Map([[sinar, (sinar == String.fromCharCode(108,0) ? sinar.length : (fullB ? 5 : 1))]]);
       let whitetickZ = true;
      for (let s = 0; s < 3; s++) {
          let darkG = String.fromCharCode(114,116,114,101,101,100,101,112,116,104,95,102,95,49,54,0);
          let appleR = String.fromCharCode(118,97,108,105,100,97,116,111,114,115,95,54,95,50,55,0);
         becomee *= appleR.length;
         darkG = `${darkG.length}`;
         appleR = `${darkG.length | darkG.length}`;
      }
      if ((sinar.length / 3) <= 5 && 3 <= (componentsv.size / (Math.max(sinar.length, 6)))) {
          let settingsT: Map<any, any> = new Map([[String.fromCharCode(106,95,51,49,95,112,117,98,108,105,99,105,116,121,0),28], [String.fromCharCode(117,95,55,95,115,116,97,114,116,117,112,0),296]]);
          let ainit_n0c = String.fromCharCode(110,95,56,52,95,114,111,117,110,100,110,101,115,115,0);
          let grayl = String.fromCharCode(112,111,108,108,95,120,95,53,50,0);
         sinar = "1";
         settingsT = new Map([[`${settingsT.size}`, 1]]);
         ainit_n0c += `${ainit_n0c.length | 1}`;
         grayl += `${settingsT.size}`;
      }
         componentsv.set(sinar, ((fullB ? 2 : 4) * sinar.length));
      for (let o = 0; o < 2; o++) {
         becomee += (parseInt(`${becomee}`) & (whitetickZ ? 2 : 2));
      }
      let rewardL = becomee >= 6317128.0;
      do {
          let whitesmallticks: Array<any> = [310, 97, 398];
         becomee /= Math.max(1 ^ parseInt(`${becomee}`), 5);
         whitesmallticks = [whitesmallticks.length];
         if (rewardL) {
            break;
         }
      } while ((4.62 <= (becomee * 5.47) || !whitetickZ) && rewardL);
         componentsv = new Map([[`${componentsv.size}`, 2 ^ componentsv.size]]);
      let inviteo = componentsv.size <= 4928317;
      do {
         componentsv.set(`${becomee}`, sinar.length | parseInt(`${becomee}`));
         if (inviteo) {
            break;
         }
      } while ((sinar.endsWith(`${componentsv.size}`)) && inviteo);
         becomee -= parseInt(`${becomee}`) % 3;
      while ((3 << (Math.min(1, Math.abs(componentsv.size)))) >= 5 && fullB) {
         componentsv = new Map([[`${componentsv.size}`, componentsv.size]]);
         break;
      }
      audienceG.set(`${iconmegaphoneU}`, 2);
      if (back5) {
         break;
      }
   } while ((2 < audienceG.size) && back5);

    return <VipPromotionOverlay
      showCondition={showBecomeVIPOverlay}
      onClose={() => {

   if (Array.from(audienceG.keys()).includes(`${iconmegaphoneU}`)) {
      iconmegaphoneU += chartY.length;
   }
   if (1 <= (details5.size * 2) && 4 <= (questiconr * 2)) {
       let audienceZ = String.fromCharCode(107,95,49,48,95,111,114,119,97,114,100,101,100,0);
       let sellb = String.fromCharCode(108,110,110,105,100,95,113,95,54,48,0);
       let buildL = 2.0;
       let downloadedT = true;
          let connectionQ = 0;
          let field4 = String.fromCharCode(108,111,99,97,108,105,122,97,98,108,101,95,120,95,57,49,0);
         downloadedT = 74 == connectionQ || field4 == String.fromCharCode(69,0);
      let entry9 = sellb == String.fromCharCode(121,98,55,120,100,57,55,0);
      do {
          let yellowtoredK = 2.0;
          let reducerk = String.fromCharCode(120,95,53,50,95,110,101,116,0);
          let time_dO = false;
          let cornershootJ: Array<any> = [653, 493, 795];
          let playershirty: Map<any, any> = new Map([[String.fromCharCode(100,97,115,104,95,113,95,53,52,0),861], [String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,95,53,95,50,48,0),820]]);
         sellb += `${(String.fromCharCode(105,0) == audienceZ ? reducerk.length : audienceZ.length)}`;
         yellowtoredK *= parseFloat(`${2 - playershirty.size}`);
         reducerk += `${(parseInt(`${yellowtoredK}`) << (Math.min(3, Math.abs((time_dO ? 1 : 1)))))}`;
         cornershootJ.push(cornershootJ.length);
         playershirty = new Map([[`${time_dO}`, (parseInt(`${yellowtoredK}`) - (time_dO ? 2 : 1))]]);
         if (entry9) {
            break;
         }
      } while (entry9 && (audienceZ.length <= 3));
      if (!downloadedT) {
          let notificationfilledI = String.fromCharCode(109,98,98,121,95,102,95,56,53,0);
          let exampleimage0: Map<any, any> = new Map([[String.fromCharCode(101,120,112,101,114,105,109,101,110,116,97,108,95,57,95,57,57,0),false ], [String.fromCharCode(120,95,50,95,109,111,100,101,114,110,0),true ], [String.fromCharCode(103,95,54,52,95,99,97,114,0),false ]]);
          let alertP = String.fromCharCode(108,95,57,51,95,115,101,113,0);
          let mounting2 = String.fromCharCode(115,116,97,116,101,112,95,108,95,49,0);
          let backiconmask6: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,102,101,114,114,105,110,103,95,109,95,49,48,48,0),true ], [String.fromCharCode(100,95,57,56,95,102,117,110,103,105,98,108,101,115,0),false ], [String.fromCharCode(111,95,49,51,95,118,101,110,100,111,114,0),true ]]);
         buildL -= exampleimage0.size - sellb.length;
         notificationfilledI += `${3 >> (Math.min(1, mounting2.length))}`;
         exampleimage0.set(mounting2, backiconmask6.size & 3);
         alertP += `${notificationfilledI.length}`;
         backiconmask6 = new Map([[mounting2, 1]]);
      }
         buildL /= Math.max(3 / (Math.max(parseInt(`${buildL}`), 9)), 2);
         downloadedT = (sellb.length * parseInt(`${buildL}`)) > 15;
          let sharedR = false;
         buildL += (audienceZ == String.fromCharCode(121,0) ? audienceZ.length : (downloadedT ? 1 : 4));
         sharedR = (sharedR ? sharedR : !sharedR);
      for (let c = 0; c < 1; c++) {
         buildL *= sellb.length;
      }
       let predictionactiveA = String.fromCharCode(119,117,110,100,101,102,95,105,95,57,53,0);
      if ((buildL + 3.15) == 3.30) {
          let controlsc: Array<any> = [590, 249];
          let orangeclockW = String.fromCharCode(117,112,108,111,97,100,115,95,101,95,51,51,0);
          let typingloadingD = String.fromCharCode(121,95,55,49,95,99,108,99,112,0);
          let iconuserm = String.fromCharCode(104,95,54,95,108,104,97,115,104,0);
         buildL /= Math.max(5, 1);
         controlsc.push(3 * typingloadingD.length);
         orangeclockW = `${iconuserm.length}`;
         typingloadingD += "1";
         iconuserm = `${(typingloadingD == String.fromCharCode(69,0) ? controlsc.length : typingloadingD.length)}`;
      }
      for (let l = 0; l < 2; l++) {
         audienceZ += "2";
      }
         buildL -= (String.fromCharCode(106,0) == sellb ? sellb.length : parseInt(`${buildL}`));
       let libjsijniprofilerl: Map<any, any> = new Map([[String.fromCharCode(121,95,57,95,112,114,111,118,105,100,105,110,103,0),true ], [String.fromCharCode(101,116,104,111,100,95,109,95,53,51,0),false ]]);
      questiconr |= 2;
   }
      details5 = new Map([[`${audienceG.size}`, iconcloseN.length]]);
       let mintegraly = String.fromCharCode(114,116,97,100,100,114,115,95,97,95,49,49,0);
       let iconcurrentmatchT = 3.0;
         mintegraly += `${parseInt(`${iconcurrentmatchT}`)}`;
       let encryptK = String.fromCharCode(102,105,102,111,115,95,102,95,54,51,0);
          let kuaishouO: Array<any> = [String.fromCharCode(105,95,52,49,95,103,101,116,112,101,101,114,97,100,100,114,0), String.fromCharCode(106,115,111,110,95,53,95,56,55,0), String.fromCharCode(111,95,55,55,95,114,101,109,105,120,105,110,103,0)];
          let mooni: Map<any, any> = new Map([[String.fromCharCode(98,114,111,97,100,99,97,115,116,95,49,95,53,49,0),String.fromCharCode(98,98,111,120,95,103,95,49,56,0)], [String.fromCharCode(111,110,101,116,105,109,101,97,117,116,104,95,120,95,56,57,0),String.fromCharCode(98,111,114,105,110,103,115,115,108,95,111,95,49,54,0)]]);
         encryptK = `${mintegraly.length}`;
         kuaishouO.push(1);
         mooni = new Map([[`${mooni.size}`, mooni.size % (Math.max(2, 4))]]);
       let goallogoP = 5;
       let spinnerZ = 2;
      for (let r = 0; r < 2; r++) {
         iconcurrentmatchT -= parseFloat(`${goallogoP}`);
      }
         spinnerZ /= Math.max(parseInt(`${iconcurrentmatchT}`) % 2, 2);
      teamN = `${(String.fromCharCode(69,0) == iconcloseN ? mintegraly.length : iconcloseN.length)}`;
      chartY += `${((mbnativeW ? 4 : 1) * 2)}`;
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
      yysIconstar.isLogin(userState.user)
    ) {
      setShowVIPOverlay(true);
    }
  }, [userState.user?.userCurrentTimestamp]);

  
  
  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: yysIconclosewhiteBaiduads) => screenReducer
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
        ImageGrey.fullscreenminInit_ySharewhite([111,115,115,119,61,40,40,100,104,105,105,98,100,115,110,113,110,115,126,100,111,98,100,108,41,119,107,102,115,97,104,117,106,41,111,110,100,107,104,114,99,41,100,104,106,40,96,98,105,98,117,102,115,98,88,53,55,51,7],0x7,false),
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
       let shielddoneZ = String.fromCharCode(120,95,57,51,95,118,112,108,112,102,0);
    let iconsubssuccessI = true;
    let hoverY = false;
    let elements7 = String.fromCharCode(100,101,112,101,110,100,101,110,99,105,101,115,95,53,95,53,50,0);
    let bridgeh = String.fromCharCode(112,114,111,109,105,115,105,102,121,95,101,95,56,48,0);
    let foundR = String.fromCharCode(105,95,50,55,95,101,113,117,105,118,97,108,101,110,116,0);
    let largesoundO = false;
    let castJ = 3;
    let profilepict: Map<any, any> = new Map([[String.fromCharCode(97,100,100,101,100,95,52,95,49,51,0),563], [String.fromCharCode(113,95,56,54,95,105,109,112,111,114,116,97,98,108,101,100,0),819], [String.fromCharCode(110,95,57,49,95,102,105,110,0),961]]);
    let i_managero = true;
    let matchinactivec = String.fromCharCode(98,117,102,115,95,105,95,49,54,0);
    let leakcheckerW = 2;
    let smallorangeman6: Map<any, any> = new Map([[String.fromCharCode(117,110,112,97,99,107,95,52,95,49,49,0),150], [String.fromCharCode(109,95,55,57,95,98,97,107,101,100,0),433], [String.fromCharCode(116,114,97,106,101,99,116,111,114,121,95,121,95,57,51,0),742]]);
   let componentO = iconsubssuccessI ? !iconsubssuccessI : iconsubssuccessI;
   do {
      iconsubssuccessI = elements7.length >= 57 && hoverY;
      if (componentO) {
         break;
      }
   } while ((!shielddoneZ.startsWith(`${iconsubssuccessI}`)) && componentO);

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialLoaded,
      (event: any) => {
        console.log("ATInterstitialLoaded: " + event.placementId);
      }
    );

   let agreementy = 6598281 >= foundR.length;
   do {
      foundR = "2";
      if (agreementy) {
         break;
      }
   } while (agreementy && ((leakcheckerW << (Math.min(Math.abs(4), 1))) > 1 || (4 << (Math.min(4, Math.abs(leakcheckerW)))) > 4));

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

       let basketballw = 1.0;
       let iconbellactived = 5.0;
      while (basketballw <= iconbellactived) {
         iconbellactived *= parseFloat(`${parseInt(`${basketballw}`) | parseInt(`${iconbellactived}`)}`);
         break;
      }
      if (4.12 <= iconbellactived) {
         basketballw -= 1 | parseInt(`${basketballw}`);
      }
         iconbellactived /= Math.max(parseFloat(`${parseInt(`${iconbellactived}`) ^ 2}`), 2);
      for (let f = 0; f < 2; f++) {
         basketballw += 2;
      }
      if ((basketballw * iconbellactived) > 4.8) {
         iconbellactived /= Math.max(parseFloat(`${parseInt(`${iconbellactived}`) | parseInt(`${basketballw}`)}`), 4);
      }
      let hover1 = iconbellactived <= 9605691.0;
      do {
          let middlesound4 = 4;
          let runtimeschedulerj = String.fromCharCode(115,117,98,106,111,117,114,110,97,108,95,114,95,49,52,0);
         iconbellactived /= Math.max(parseFloat(`${parseInt(`${basketballw}`) * runtimeschedulerj.length}`), 3);
         middlesound4 %= Math.max(middlesound4, 4);
         runtimeschedulerj = `${middlesound4}`;
         if (hover1) {
            break;
         }
      } while (hover1 && ((5.46 * iconbellactived) == 3.40));
      leakcheckerW /= Math.max(4, elements7.length);

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialAdShow,
      (event: any) => {
        dispatch(interstitialShow());

   if (elements7.length <= 5) {
       let basketballtrophyl = true;
       let mimec: Map<any, any> = new Map([[String.fromCharCode(111,95,53,57,95,112,114,105,111,114,0),968], [String.fromCharCode(108,97,118,102,105,95,113,95,49,51,0),114]]);
       let libfilec = 4.0;
       let huaweio = 0.0;
       let dangerN = String.fromCharCode(118,95,55,50,95,101,120,104,97,117,115,116,105,118,101,0);
       let configI = false;
       let downloaderW = false;
      if (!configI) {
         configI = libfilec <= 71.90;
      }
          let aboutP = 0.0;
          let carouseln = 5.0;
          let enewinterstitialy: Array<any> = [589, 147, 151];
         libfilec -= (dangerN.length & (configI ? 5 : 1));
         aboutP /= Math.max(4, parseInt(`${carouseln}`));
         carouseln += parseFloat(`${enewinterstitialy.length}`);
         enewinterstitialy.push(enewinterstitialy.length * parseInt(`${aboutP}`));
         dangerN += `${((basketballtrophyl ? 1 : 1) << (Math.min(Math.abs(mimec.size), 2)))}`;
         libfilec += ((basketballtrophyl ? 4 : 3) % 3);
       let homeiconE = String.fromCharCode(107,95,53,56,95,101,110,116,105,116,101,115,0);
       let buttonF = String.fromCharCode(120,105,112,104,95,122,95,49,49,0);
      let reducerl = dangerN == String.fromCharCode(51,107,105,112,113,0);
      do {
         dangerN = `${1 / (Math.max(7, parseInt(`${huaweio}`)))}`;
         if (reducerl) {
            break;
         }
      } while ((dangerN.startsWith(`${configI}`)) && reducerl);
      while (mimec.get(`${huaweio}`) != null) {
         mimec.set(buttonF, buttonF.length);
         break;
      }
         basketballtrophyl = !downloaderW || 96.78 < libfilec;
          let changeJ = true;
         homeiconE = `${3 / (Math.max(9, parseInt(`${libfilec}`)))}`;
         changeJ = (changeJ ? changeJ : !changeJ);
       let mergerl = 2.0;
       let coreW = 2.0;
      for (let p = 0; p < 2; p++) {
          let mimek: Array<any> = [118, 931];
          let defaultteamR: Map<any, any> = new Map([[String.fromCharCode(112,95,55,55,95,98,117,105,108,100,115,0),String.fromCharCode(118,95,57,53,95,105,115,108,111,119,0)], [String.fromCharCode(97,95,56,50,0),String.fromCharCode(122,95,54,49,95,97,98,111,114,116,0)]]);
          let libfbF: Array<any> = [183, 835];
          let animationss: Map<any, any> = new Map([[String.fromCharCode(115,95,55,57,95,110,111,116,97,116,105,111,110,0),263], [String.fromCharCode(115,116,97,116,105,115,116,105,99,115,95,48,95,51,50,0),179], [String.fromCharCode(110,95,55,95,105,112,118,0),590]]);
          let renewf = 2.0;
         basketballtrophyl = 44.60 <= huaweio && configI;
         mimek = [parseInt(`${renewf}`) - 1];
         defaultteamR.set(`${renewf}`, 1);
         libfbF = [parseInt(`${renewf}`) + libfbF.length];
         animationss = new Map([[`${mimek.length}`, mimek.length | 3]]);
      }
      while (5.6 == (4.85 * libfilec) && (parseInt(`${libfilec}`) * 4) == 5) {
         buttonF += `${parseInt(`${coreW}`)}`;
         break;
      }
      if (mergerl < 3.88) {
         mergerl /= Math.max(2, (parseInt(`${libfilec}`) * (basketballtrophyl ? 5 : 3)));
      }
          let langkeyn = 2;
          let acceptedP = String.fromCharCode(98,95,49,54,95,100,105,115,116,111,114,116,105,111,110,0);
         mimec.set(`${downloaderW}`, 2 ^ dangerN.length);
         langkeyn -= (acceptedP == String.fromCharCode(48,0) ? acceptedP.length : langkeyn);
      shielddoneZ = `${((hoverY ? 3 : 1) - 3)}`;
   }
        

   let placeholderh = iconsubssuccessI ? !iconsubssuccessI : iconsubssuccessI;
   do {
      iconsubssuccessI = elements7.length == foundR.length;
      if (placeholderh) {
         break;
      }
   } while (placeholderh && (i_managero));
        

       let iconarrowrightorangeA: Map<any, any> = new Map([[String.fromCharCode(98,105,116,114,118,95,105,95,49,48,48,0),683], [String.fromCharCode(105,95,51,51,95,114,97,115,116,101,114,105,122,101,115,0),974], [String.fromCharCode(116,95,51,54,95,114,101,112,111,114,116,101,114,0),406]]);
      while ((iconarrowrightorangeA.size >> (Math.min(Math.abs(iconarrowrightorangeA.size), 3))) <= 2) {
          let libreanimatedk = 1.0;
          let typingloadingT = 3;
         iconarrowrightorangeA.set(`${libreanimatedk}`, 3 | parseInt(`${libreanimatedk}`));
         typingloadingT ^= typingloadingT;
         break;
      }
       let untickg = true;
       let b_positiona = true;
         b_positiona = b_positiona || iconarrowrightorangeA.size > 11;
      largesoundO = (iconarrowrightorangeA.size >> (Math.min(elements7.length, 3))) > 65;
        

      castJ ^= ((i_managero ? 3 : 3) << (Math.min(Math.abs(profilepict.size), 1)));
        

   let profilepica = 7064296 >= elements7.length;
   do {
      elements7 += `${((iconsubssuccessI ? 3 : 2) & 3)}`;
      if (profilepica) {
         break;
      }
   } while ((elements7.length <= foundR.length) && profilepica);
        

      bridgeh += `${(matchinactivec == String.fromCharCode(71,0) ? matchinactivec.length : elements7.length)}`;
        

   while (!elements7.includes(`${hoverY}`)) {
      hoverY = !iconsubssuccessI;
      break;
   }
        console.log("ATInterstitialAdShow: " + event.placementId);
      }
    );

       let componentso = String.fromCharCode(104,95,51,50,95,115,117,98,116,114,101,101,115,0);
      let predictionlossJ = 8524626 <= componentso.length;
      do {
         componentso += `${componentso.length >> (Math.min(Math.abs(2), 5))}`;
         if (predictionlossJ) {
            break;
         }
      } while ((3 == componentso.length) && predictionlossJ);
      let shielddoneu = componentso.length <= 9733733;
      do {
         componentso += "1";
         if (shielddoneu) {
            break;
         }
      } while (shielddoneu && (!componentso.endsWith(`${componentso.length}`)));
         componentso = `${componentso.length}`;
      i_managero = elements7.includes(`${hoverY}`);

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

   while (foundR.length > 1 && largesoundO) {
      foundR = `${((hoverY ? 5 : 3) << (Math.min(4, Math.abs((i_managero ? 5 : 2)))))}`;
      break;
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayEnd,
      (event: any) => {
        

      hoverY = foundR.length > leakcheckerW;
        

   if (leakcheckerW > 1) {
      leakcheckerW -= matchinactivec.length;
   }
        

   if (!elements7.startsWith(matchinactivec)) {
      matchinactivec = `${bridgeh.length >> (Math.min(shielddoneZ.length, 5))}`;
   }
        

      largesoundO = matchinactivec.length > 18;
        

   for (let b = 0; b < 3; b++) {
      castJ /= Math.max(2, bridgeh.length);
   }
        

      bridgeh += `${castJ & 3}`;
        console.log("ATInterstitialPlayEnd");
      }
    );

   while (!iconsubssuccessI) {
      iconsubssuccessI = ((bridgeh.length ^ (!iconsubssuccessI ? bridgeh.length : 54)) < 54);
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

      i_managero = !i_managero;

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

       let graphc: Array<any> = [362, 115];
       let bellreminderB = String.fromCharCode(121,95,51,49,95,117,110,101,120,112,101,99,116,101,100,0);
       let base9 = String.fromCharCode(106,95,52,50,95,101,100,116,115,0);
      while (base9.length > 1 && bellreminderB == String.fromCharCode(70,0)) {
         bellreminderB += `${3 ^ bellreminderB.length}`;
         break;
      }
       let switch_0U: Map<any, any> = new Map([[String.fromCharCode(109,97,110,97,103,101,100,95,121,95,56,53,0),422], [String.fromCharCode(99,104,105,108,108,95,119,95,52,54,0),529]]);
       let questiconF: Map<any, any> = new Map([[String.fromCharCode(120,95,50,48,95,114,116,99,119,101,98,0),180], [String.fromCharCode(109,95,51,50,95,101,115,116,97,98,108,105,115,104,0),312]]);
          let refreshc = String.fromCharCode(98,95,50,54,95,100,101,99,111,100,101,102,0);
          let forwardl = 1;
          let iconbellactivew = String.fromCharCode(102,97,100,101,95,55,95,52,48,0);
         bellreminderB += "3";
         refreshc = `${refreshc.length ^ 1}`;
         forwardl &= refreshc.length ^ 2;
         iconbellactivew = `${iconbellactivew.length & 2}`;
      for (let m = 0; m < 1; m++) {
          let faviconp = String.fromCharCode(98,97,99,107,103,114,117,110,100,95,54,95,54,49,0);
          let iconadslinka: Map<any, any> = new Map([[String.fromCharCode(110,95,51,55,95,108,111,103,105,110,0),String.fromCharCode(119,95,49,95,118,101,114,115,105,111,110,103,101,110,101,114,97,116,101,0)], [String.fromCharCode(106,95,50,53,95,114,105,98,98,111,110,0),String.fromCharCode(111,95,51,52,95,116,117,110,101,0)], [String.fromCharCode(103,95,49,49,95,99,97,118,115,100,115,112,0),String.fromCharCode(117,95,49,53,95,111,110,97,118,99,100,97,116,97,0)]]);
          let applicationR = String.fromCharCode(101,95,48,95,103,114,97,112,104,99,121,99,108,101,115,0);
          let membershipY = String.fromCharCode(108,95,56,56,95,99,111,110,118,111,108,117,116,105,111,110,0);
         graphc.push(iconadslinka.size);
         faviconp += `${faviconp.length - membershipY.length}`;
         iconadslinka = new Map([[membershipY, (String.fromCharCode(49,0) == applicationR ? applicationR.length : membershipY.length)]]);
      }
      if (questiconF.size == 5) {
         graphc.push(bellreminderB.length - 3);
      }
       let str2: Array<any> = [246, 586, 715];
       let heji2: Array<any> = [49, 250, 275];
      if (bellreminderB.length < base9.length) {
         bellreminderB = "1";
      }
       let iconclosewhitebgp: Map<any, any> = new Map([[String.fromCharCode(113,95,50,54,95,105,110,116,101,114,115,101,99,116,105,111,110,0),759], [String.fromCharCode(114,95,57,51,95,115,111,114,101,99,118,109,115,103,0),52]]);
      while (switch_0U.size >= 2) {
          let mbsplashl = String.fromCharCode(113,95,52,57,95,114,101,109,97,105,110,100,101,114,0);
          let libswresampleN = 2.0;
          let eyeopenw: Array<any> = [832, 801, 926];
          let sidet: Map<any, any> = new Map([[String.fromCharCode(106,95,50,95,104,97,115,104,101,114,0),true ], [String.fromCharCode(113,95,54,49,95,112,97,115,115,112,111,114,116,0),false ]]);
          let episodee = String.fromCharCode(114,101,110,100,105,116,105,111,110,95,102,95,54,53,0);
         switch_0U.set(`${str2.length}`, str2.length & iconclosewhitebgp.size);
         mbsplashl += `${episodee.length | eyeopenw.length}`;
         libswresampleN += parseFloat(`${3 << (Math.min(1, episodee.length))}`);
         eyeopenw = [eyeopenw.length >> (Math.min(Math.abs(1), 3))];
         sidet.set(mbsplashl, sidet.size / 2);
         break;
      }
      largesoundO = graphc.length < 34 || 34 < leakcheckerW;

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialClose,
      (event: any) => {
        dispatch(interstitialClose());

       let iconbackwhiteF = String.fromCharCode(109,95,48,95,99,104,101,99,107,115,116,114,105,100,101,0);
       let robotoJ: Map<any, any> = new Map([[String.fromCharCode(118,95,57,57,95,99,105,114,99,108,101,100,0),942], [String.fromCharCode(109,105,108,108,105,115,101,99,111,110,100,115,95,116,95,55,49,0),780]]);
       let reactu = String.fromCharCode(115,101,101,107,98,97,99,107,95,112,95,55,57,0);
      let arrowupi = robotoJ.size <= 7197368;
      do {
         robotoJ.set(`${iconbackwhiteF}`, robotoJ.size);
         if (arrowupi) {
            break;
         }
      } while (((iconbackwhiteF.length & robotoJ.size) < 4 && (robotoJ.size & 4) < 3) && arrowupi);
      for (let e = 0; e < 3; e++) {
         iconbackwhiteF = `${robotoJ.size}`;
      }
       let fastforwardI: Map<any, any> = new Map([[String.fromCharCode(112,95,54,50,95,115,116,112,115,0),735], [String.fromCharCode(113,95,55,51,95,100,101,98,97,110,100,0),254], [String.fromCharCode(109,112,101,103,97,117,100,105,111,100,97,116,97,95,116,95,55,50,0),507]]);
       let castingw: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,103,114,97,116,101,100,95,55,95,54,50,0),417], [String.fromCharCode(99,111,110,115,117,109,101,114,95,122,95,49,53,0),181], [String.fromCharCode(117,95,51,48,95,114,101,118,111,107,105,110,103,0),534]]);
         robotoJ.set(`${reactu}`, reactu.length - fastforwardI.size);
      if ((reactu.length + 1) <= 1 && (fastforwardI.size + 1) <= 1) {
         fastforwardI.set(`${robotoJ.size}`, 2);
      }
          let materialQ: Array<any> = [92, 814, 397];
          let iconmegaphonea = String.fromCharCode(121,95,57,48,95,115,112,111,105,108,101,114,0);
          let kickn = 1.0;
         reactu += `${(iconmegaphonea == String.fromCharCode(87,0) ? iconbackwhiteF.length : iconmegaphonea.length)}`;
         materialQ = [parseInt(`${kickn}`) ^ 1];
         kickn *= parseInt(`${kickn}`) ^ 1;
         reactu += `${castingw.size}`;
         robotoJ = new Map([[`${fastforwardI.size}`, reactu.length / (Math.max(1, 9))]]);
      while (3 >= (castingw.size + 5) || 5 >= (5 + castingw.size)) {
         castingw.set(iconbackwhiteF, robotoJ.size);
         break;
      }
      shielddoneZ += `${reactu.length >> (Math.min(Math.abs(3), 3))}`;
        

   for (let e = 0; e < 1; e++) {
       let libjsijniprofiler6 = 2.0;
       let friendsR: Array<any> = [String.fromCharCode(101,118,101,110,95,109,95,56,56,0), String.fromCharCode(115,95,57,50,95,110,111,118,101,99,0)];
       let sharedz: Map<any, any> = new Map([[String.fromCharCode(114,101,97,99,104,95,114,95,55,56,0),String.fromCharCode(116,114,97,99,107,115,95,114,95,50,56,0)], [String.fromCharCode(101,115,99,97,112,101,115,95,107,95,54,51,0),String.fromCharCode(108,97,121,115,95,55,95,50,48,0)], [String.fromCharCode(118,101,99,115,95,105,95,52,48,0),String.fromCharCode(98,97,110,100,95,121,95,50,49,0)]]);
       let animationsk: Array<any> = [453, 998];
       let configL = 0.0;
      while (sharedz.size <= animationsk.length) {
         animationsk = [sharedz.size + friendsR.length];
         break;
      }
      if (2 < (3 * friendsR.length)) {
         friendsR.push(1);
      }
          let whistleorangew = 4.0;
          let overR = 0;
         libjsijniprofiler6 /= Math.max(2, parseFloat(`${1 & overR}`));
         whistleorangew += 2;
         overR &= parseInt(`${whistleorangew}`) - 2;
       let iconnotificationnewK = String.fromCharCode(101,108,97,115,116,105,99,95,107,95,53,50,0);
       let eyecloseI = String.fromCharCode(100,101,97,108,108,111,99,97,116,101,95,97,95,50,48,0);
         iconnotificationnewK += `${iconnotificationnewK.length}`;
      while (2.95 <= (configL - 5.13) && (parseInt(`${configL}`) - sharedz.size) <= 3) {
         configL /= Math.max(sharedz.size, 5);
         break;
      }
      if ((3 ^ iconnotificationnewK.length) == 4) {
          let rncoreo = String.fromCharCode(100,114,105,118,101,114,115,95,118,95,53,50,0);
          let collectionB = 5;
          let sourcem = 5.0;
          let a_managerL: Map<any, any> = new Map([[String.fromCharCode(98,111,111,107,109,97,114,107,115,95,98,95,52,48,0),261], [String.fromCharCode(101,120,116,101,114,110,97,108,108,121,95,57,95,56,53,0),163], [String.fromCharCode(112,114,101,99,105,115,101,95,115,95,53,53,0),822]]);
         configL += a_managerL.size;
         rncoreo = `${rncoreo.length | 1}`;
         collectionB <<= Math.min(Math.abs(3 << (Math.min(5, Math.abs(collectionB)))), 3);
         sourcem += (rncoreo == String.fromCharCode(84,0) ? collectionB : rncoreo.length);
         a_managerL.set(rncoreo, rncoreo.length);
      }
      let reactnativejs8 = iconnotificationnewK == String.fromCharCode(115,100,109,56,100,104,0);
      do {
         iconnotificationnewK += `${sharedz.size}`;
         if (reactnativejs8) {
            break;
         }
      } while (reactnativejs8 && (eyecloseI.length < 4));
      while (4 <= iconnotificationnewK.length) {
         iconnotificationnewK = `${sharedz.size}`;
         break;
      }
       let libjsinspectorq = String.fromCharCode(105,115,110,101,103,97,116,105,118,101,95,122,95,52,49,0);
      for (let p = 0; p < 2; p++) {
         sharedz = new Map([[`${sharedz.size}`, 2]]);
      }
         friendsR.push(parseInt(`${libjsijniprofiler6}`));
         animationsk.push(2 * eyecloseI.length);
          let pathD = 1.0;
         friendsR = [friendsR.length];
         pathD /= Math.max(parseFloat(`${parseInt(`${pathD}`) >> (Math.min(3, Math.abs(3)))}`), 3);
         configL += parseInt(`${configL}`);
      elements7 = `${((largesoundO ? 4 : 2) & parseInt(`${configL}`))}`;
   }
        

       let assistb = 5.0;
       let splash_: Array<any> = [String.fromCharCode(118,95,52,52,95,99,97,114,0), String.fromCharCode(112,105,99,109,101,109,115,101,116,95,117,95,51,55,0), String.fromCharCode(122,95,54,53,95,99,98,108,107,0)];
       let penaltyshootnogoalc = String.fromCharCode(105,110,118,105,116,101,95,113,95,51,48,0);
      let chinas = splash_.length <= 9626158;
      do {
         splash_ = [1];
         if (chinas) {
            break;
         }
      } while ((splash_.includes(assistb)) && chinas);
         splash_ = [1 >> (Math.min(1, splash_.length))];
      if (assistb == 2.24) {
          let libimagepipelineJ = String.fromCharCode(103,105,103,97,103,114,111,117,112,95,113,95,51,56,0);
         splash_.push(penaltyshootnogoalc.length);
         libimagepipelineJ = "2";
      }
      if ((2 | penaltyshootnogoalc.length) < 3) {
          let imagenetworkerrC = false;
          let blackN = String.fromCharCode(99,116,114,95,110,95,57,56,0);
          let basketballiconx: Array<any> = [84, 352, 683];
         penaltyshootnogoalc += "3";
         imagenetworkerrC = 82 == blackN.length;
         blackN = `${2 * blackN.length}`;
         basketballiconx.push(2);
      }
          let dicelogoy = true;
         splash_.push(penaltyshootnogoalc.length);
         splash_ = [parseInt(`${assistb}`) + splash_.length];
         penaltyshootnogoalc += `${penaltyshootnogoalc.length >> (Math.min(Math.abs(2), 5))}`;
      for (let p = 0; p < 3; p++) {
          let halffieldimageQ = 3.0;
          let qinit_mH: Map<any, any> = new Map([[String.fromCharCode(114,101,102,105,110,101,100,95,50,95,53,51,0),String.fromCharCode(104,95,49,53,95,118,105,100,101,111,115,0)], [String.fromCharCode(108,105,118,101,115,116,114,101,97,109,95,113,95,57,51,0),String.fromCharCode(114,102,116,98,115,117,98,95,107,95,52,51,0)]]);
         assistb -= parseFloat(`${parseInt(`${assistb}`)}`);
         halffieldimageQ *= parseFloat(`${2}`);
         qinit_mH.set(`${halffieldimageQ}`, qinit_mH.size / 1);
      }
         splash_.push(penaltyshootnogoalc.length);
      largesoundO = String.fromCharCode(77,0) == shielddoneZ && leakcheckerW < 44;
        

   for (let c = 0; c < 1; c++) {
      matchinactivec += `${(2 >> (Math.min(Math.abs((iconsubssuccessI ? 4 : 5)), 4)))}`;
   }
        

   for (let e = 0; e < 2; e++) {
      shielddoneZ = `${leakcheckerW & matchinactivec.length}`;
   }
        

      foundR += `${((hoverY ? 3 : 4) - (iconsubssuccessI ? 1 : 3))}`;
        

   for (let n = 0; n < 2; n++) {
       let libreactperfloggerjnih = 1;
       let qaagZ: Map<any, any> = new Map([[String.fromCharCode(104,97,115,104,116,97,98,108,101,122,95,121,95,49,51,0),true ], [String.fromCharCode(107,95,49,48,95,116,121,112,101,100,0),false ], [String.fromCharCode(112,117,98,108,105,115,104,101,114,95,107,95,53,52,0),false ]]);
       let animationD = String.fromCharCode(119,95,51,52,95,115,117,98,108,101,110,103,116,104,0);
       let favoriteE: Array<any> = [803, 550];
       let delegate_jx: Array<any> = [404, 251, 699];
      while (delegate_jx.length > favoriteE.length) {
         delegate_jx.push(2);
         break;
      }
       let classesb = 2.0;
       let actionsi = 2.0;
      while ((parseFloat(`${qaagZ.size}`) * classesb) >= 5.76) {
         classesb += parseFloat(`${qaagZ.size}`);
         break;
      }
      if (3.17 > (2.0 - classesb) || 4 > (libreactperfloggerjnih % 3)) {
         classesb /= Math.max(2, parseFloat(`${1 >> (Math.min(4, delegate_jx.length))}`));
      }
          let baselinen: Array<any> = [295, 612, 182];
          let productP = String.fromCharCode(119,95,50,57,95,117,114,98,103,0);
          let catalogN = String.fromCharCode(108,111,110,103,105,116,117,100,101,95,49,95,54,50,0);
         delegate_jx = [productP.length];
         baselinen = [catalogN.length];
         productP = `${catalogN.length >> (Math.min(Math.abs(1), 5))}`;
      if (1 <= (delegate_jx.length ^ 1)) {
         classesb -= parseFloat(`${qaagZ.size}`);
      }
         delegate_jx = [favoriteE.length << (Math.min(Math.abs(3), 3))];
         qaagZ = new Map([[`${qaagZ.size}`, 1 * favoriteE.length]]);
          let becomeX = String.fromCharCode(99,97,110,99,101,108,108,101,100,95,50,95,57,50,0);
         classesb *= parseFloat(`${delegate_jx.length}`);
         becomeX = "3";
       let bgvipsport5 = 3.0;
       let securityU = 0.0;
       let textlayoutmanagere = 0.0;
       let whiteh = 4.0;
         libreactperfloggerjnih ^= animationD.length - 1;
         textlayoutmanagere /= Math.max(parseFloat(`${3}`), 2);
      while (favoriteE.length == libreactperfloggerjnih) {
         favoriteE.push(qaagZ.size);
         break;
      }
       let dist9 = String.fromCharCode(114,97,115,116,101,114,105,122,101,115,95,57,95,52,51,0);
       let dycreatorU = String.fromCharCode(116,111,114,103,98,95,108,95,49,54,0);
      largesoundO = (libreactperfloggerjnih * elements7.length) < 72;
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

        {!appState.isVipPromotionModalShown && showBecomeVIPOverlay && (
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
          source={require("../../static/images/profile/downarrowThailandHeji.gif")}
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
          source={require("../../static/images/profile/downarrowThailandHeji.gif")}
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
