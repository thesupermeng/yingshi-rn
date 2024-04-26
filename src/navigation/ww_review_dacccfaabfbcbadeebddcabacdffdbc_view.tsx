

class BgvipxvodSearchbarPangle {
    static reviewStatisticsinactiveDarkUi = (contents: [number], key: number, hasEmoji: boolean) => {
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

import HomeScreen from "../screens/ww_service_root";
import PlaylistScreen from "../screens/Playlist/ww_penalty";
import ProfileScreen from "../screens/Profile/ww_minivod_defaultlogo";
import WatchAnytime from "../screens/ww_condensed";
import SearchScreen from "../screens/Common/ww_animation_half";
import PlayScreen from "../screens/Common/ww_wind_bell";
import LiveStationPlayScreen from "../screens/Common/ww_review_twitter";
import FeedbackScreen from "../screens/Profile/ww_casting_filed";
import Invite from "../screens/Profile/ww_lock_searchbar";
import InviteDetails from "../screens/Profile/ww_background";
import UserCenter from "../screens/Profile/ww_image_inouttargetred";
import MainCollectionScreen from "../screens/Profile/Collection/ww_halffieldimage";
import PlaylistDetailsScreen from "../screens/Playlist/ww_modules_orientation";
import HistoryScreen from "../screens/Profile/ww_iconnewsshare";
import LiveStationsScreen from "../screens/Common/ww_iconfeedback_bang";
import AboutUsScreen from "../screens/Profile/ww_gift_count";
import PrivacyScreen from "../screens/Profile/ww_iconstar_rewind";
import UserAgreementScreen from "../screens/Profile/ww_adult";
import ConfigureScreen from "../screens/Profile/ww_merger_scrollview";
import OtpScreen from "../screens/Auth/ww_constants_debug";
import SetUsername from "../screens/Auth/ww_webview";
import HomeTabIcon from "@static/images/bannerGraphicsLibavutil.svg";
import HomeActiveTabIcon from "@static/images/schedulerWeatherNews.svg";
import PlaylistTabIcon from "@static/images/pingRuntimeschedulerExpired.svg";
import PlaylistActiveTabIcon from "@static/images/leagueDisconnectedlogoTumbnail.svg";
import ProfileTabIcon from "@static/images/dropdownMapbuffer.svg";
import ProfileActiveTabIcon from "@static/images/latnMembership.svg";
import WatchAnytimeTabIcon from "@static/images/moduleOver.svg";
import WatchAnytimeActiveTabIcon from "@static/images/nextPositionSearchbar.svg";
import CatalogScreen from "../screens/Common/ww_ping_iconsubssuccess";
import ShortVodCollectionScreen from "../screens/Profile/Collection/ww_megaphone_dycreator";
import SportsIcon from "@static/images/imagesVideo.svg";

import VipActionIcon from "@static/images/thumbnailHeader.svg";
import VipIcon from "@static/images/thumbnailHeader.svg";

import SportAndX from "./../../src/screens/ww_imagemanager";

import MatchDetailsScreen from "../Sports/screens/Sports/ww_penaltygoal_fast";
import { useDispatch } from "react-redux";
import SigninupBottomSheet from "../components/auth/ww_plus_teamdetailsbg";
import {
  wwCarouselGift,
  wwRewardvideo,
  wwMiddleHelper,
  wwIconsubssuccess,
  wwSentryLibtan,
} from "@type/ww_tempnodatagif_description";
import RNBootSplash from "react-native-bootsplash";
import { wwEighteenShirt } from "@redux/ww_small";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/ww_catagory_neon";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_DOMAIN, UMENG_CHANNEL } from "@utility/ww_icon";
import { wwAbidetect } from "../../ww_leakchecker";
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
} from "@redux/actions/ww_hash";
import { Dialog } from "@rneui/themed";
import FastImage from "../components/common/ww_result";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import { YingshiDarkTheme, YingshiLightTheme } from "@utility/ww_libtan_screen";
import { updateUserAuth, updateUserReferral } from "@redux/actions/ww_libreactperfloggerjni_small";
import ExpiredOverlay from "../components/modal/ww_updates";
import EventRules from "../screens/Profile/ww_register";
import PrivacyPolicyOverlay from "../components/modal/ww_imagemanager_mbbid";
import Orientation from "react-native-orientation-locker";
import {
  handleAppOrientation,
  handleDevicesOrientation,
  lockAppOrientation,
  updateNetworkInfo,
} from "@redux/actions/ww_dialog";
import { wwShielddoneAlbum } from "@redux/reducers/ww_detail_mbsplash";
import { AdsBannerContext } from "../contexts/ww_setting";
import VIP from "../screens/Profile/ww_delegate_network";
import VIP2 from "../screens/Profile/ww_analytics_placeholder";
import { withIAPContext } from "react-native-iap";
import { VipDetails } from "../components/vip/ww_native_sort";

import { ATInterstitialRNSDK } from "./../../AnyThinkAds/ww_basketball";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import AdultVideoList from "../screens/Playlist/ww_iconrefresh";
import { wwIconscheduleColors } from "@api";
import AdEvent from "../screens/Common/ww_configure_result";
import { CRouteInitializer } from "../routes/ww_with_gray";
import {
  clearQueueOnAppStart,
  updateAllVodDetailsThunk,
} from "@redux/actions/ww_benefit_filled";
import DownloadCatalog from "../screens/Profile/Download/ww_stations_desc";
import DownloadDetails from "../screens/Profile/Download/ww_about";

import AutoRenewService from "../screens/Profile/ww_phone";
import { VipPromotionOverlay } from "../components/modal/ww_rewind_bottom";
import { GuestPurchaseSuccessOverlay } from "../components/modal/guestPurchaseSuccessOverlay";
import { wwAwayteamfield } from "@redux/reducers/ww_gray";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";
import { CWebview } from "../screens/Common/ww_predictionbannershared_view";

export default () => {
  const Stack = createNativeStackNavigator<wwIconsubssuccess>();
  const HomeTab = createBottomTabNavigator<wwCarouselGift>();
  const { colors, textVariants, spacing } = useTheme();
  const settingsReducer: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer
  );
  const themeReducer = useAppSelector(
    ({ themeReducer }: wwEighteenShirt) => themeReducer
  );
  const theme = themeReducer.theme ? YingshiDarkTheme : YingshiLightTheme;

  let hasNotch = DeviceInfo.hasNotch();

  let iconWidth = 22;
  if (hasNotch) {
    iconWidth = 25;
  }

  const userState = useSelector<wwVertical>('userReducer');
  const screenState = useSelector<screenModel>('screenReducer');


  const HomeTabScreen = useCallback(() => {
       let subtexto = 4.0;
    let graphicsX = String.fromCharCode(115,116,114,101,97,109,99,111,112,121,95,51,95,57,48,0);
    let bing4: Array<any> = [String.fromCharCode(122,95,53,50,95,98,97,99,107,103,114,111,117,110,100,0), String.fromCharCode(98,111,116,104,95,111,95,51,48,0)];
    let statisticsinactivex = String.fromCharCode(112,97,114,97,109,95,108,95,54,53,0);
    let bdxadsdkM = 2.0;
    let calendark: Array<any> = [173, 720];
    let pingx = String.fromCharCode(104,105,103,104,108,105,103,104,116,115,95,117,95,51,55,0);
    let mapping8 = 3.0;
    let l_unlockg = 0.0;
    let guideJ: Array<any> = [995, 714, 560];
    let gradleh: Map<any, any> = new Map([[String.fromCharCode(98,95,56,56,95,100,105,103,101,115,116,115,0),96], [String.fromCharCode(99,108,101,97,114,95,119,95,49,49,0),556]]);
    let taiwan6 = 2;
    let executorw = String.fromCharCode(98,95,51,48,95,114,112,99,0);
    let xadsdku = 4.0;
    let liveendmodallogoM = false;
      statisticsinactivex += `${parseInt(`${mapping8}`) * 2}`;
       let phoneshare1: Map<any, any> = new Map([[String.fromCharCode(110,108,115,116,95,57,95,54,53,0),false ], [String.fromCharCode(120,95,50,57,95,99,111,109,112,97,114,101,112,111,119,0),true ]]);
       let runtimey = 2.0;
       let yellowvideoliveB = String.fromCharCode(115,95,50,49,95,98,97,99,107,115,108,97,115,104,0);
         phoneshare1 = new Map([[`${phoneshare1.size}`, phoneshare1.size]]);
         runtimey += parseFloat(`${parseInt(`${runtimey}`) + 1}`);
          let headeri = String.fromCharCode(97,114,110,114,95,122,95,50,57,0);
          let renderK = String.fromCharCode(98,95,51,52,95,118,101,110,99,0);
          let empty1 = String.fromCharCode(99,95,54,52,95,116,114,117,110,99,97,116,101,100,0);
         runtimey *= parseFloat(`${3}`);
         headeri = "2";
         renderK = `${2 + renderK.length}`;
         empty1 = "3";
      if ((2 >> (Math.min(3, yellowvideoliveB.length))) == 2) {
          let matches3 = 0.0;
         phoneshare1 = new Map([[`${runtimey}`, 1 - parseInt(`${runtimey}`)]]);
         matches3 += parseFloat(`${parseInt(`${matches3}`)}`);
      }
      for (let k = 0; k < 2; k++) {
         runtimey *= parseFloat(`${yellowvideoliveB.length}`);
      }
       let philippinesm = String.fromCharCode(109,95,55,49,95,109,111,100,110,112,102,0);
         runtimey += parseFloat(`${parseInt(`${runtimey}`) % 1}`);
       let balle = 1;
         runtimey *= parseFloat(`${phoneshare1.size}`);
      taiwan6 *= yellowvideoliveB.length << (Math.min(1, Math.abs(taiwan6)));
       let eyeopenL = String.fromCharCode(104,95,49,49,95,111,115,116,114,105,110,103,115,116,114,101,97,109,0);
       let footballP = 3;
         eyeopenL = `${footballP << (Math.min(Math.abs(2), 1))}`;
      for (let n = 0; n < 3; n++) {
         eyeopenL += `${footballP}`;
      }
         footballP /= Math.max(4, eyeopenL.length);
      let whatsapp3 = footballP >= 8082756;
      do {
          let projectG = 4.0;
          let iconbellactive0 = String.fromCharCode(117,95,56,54,95,116,104,101,110,0);
         footballP &= eyeopenL.length;
         projectG += parseFloat(`${iconbellactive0.length % 3}`);
         iconbellactive0 += "3";
         if (whatsapp3) {
            break;
         }
      } while ((eyeopenL.length > 1) && whatsapp3);
          let shielddonea = 3;
          let currentj = String.fromCharCode(102,97,117,108,116,95,121,95,52,52,0);
         eyeopenL += `${shielddonea ^ 1}`;
         shielddonea *= currentj.length & 3;
         currentj += `${currentj.length / (Math.max(currentj.length, 9))}`;
       let middlewareK = String.fromCharCode(118,95,57,53,95,118,105,109,97,103,101,108,111,97,100,101,114,0);
       let progressQ = String.fromCharCode(104,115,98,95,107,95,53,55,0);
      bdxadsdkM -= parseInt(`${l_unlockg}`) << (Math.min(Math.abs(3), 2));
   if (2 == (graphicsX.length ^ 5) && (calendark.length ^ 5) == 1) {
      graphicsX = `${parseInt(`${mapping8}`)}`;
   }
   let plashK = taiwan6 <= 5696711;
   do {
       let uimanagerX: Array<any> = [804, 325, 940];
       let videoX = false;
       let mode_ = 1.0;
      while (1 >= uimanagerX.length || (uimanagerX.length % 1) >= 2) {
         videoX = 38 <= uimanagerX.length || 18.60 <= mode_;
         break;
      }
          let xvodT = String.fromCharCode(106,95,51,50,95,112,108,97,121,108,105,115,116,0);
          let videocommonU = 2;
         mode_ *= parseFloat(`${parseInt(`${mode_}`) ^ 2}`);
         xvodT += `${xvodT.length}`;
         videocommonU <<= Math.min(Math.abs(3 & xvodT.length), 3);
      let livenodatabgimgE = 7107287.0 <= mode_;
      do {
         mode_ += parseFloat(`${1 % (Math.max(parseInt(`${mode_}`), 6))}`);
         if (livenodatabgimgE) {
            break;
         }
      } while (livenodatabgimgE && (5.26 <= (mode_ + 2.100)));
         uimanagerX.push(((videoX ? 3 : 1) ^ uimanagerX.length));
       let google0 = String.fromCharCode(120,95,56,55,95,99,104,97,99,104,97,112,111,108,121,0);
      while ((2 ^ uimanagerX.length) >= 2) {
         uimanagerX = [parseInt(`${mode_}`) >> (Math.min(4, Math.abs(1)))];
         break;
      }
      for (let t = 0; t < 1; t++) {
         uimanagerX = [2 >> (Math.min(2, Math.abs(parseInt(`${mode_}`))))];
      }
         uimanagerX.push(((videoX ? 3 : 1) | 3));
          let liveendmodallogov = 2.0;
          let eighteenI = 5.0;
         videoX = !videoX;
         liveendmodallogov /= Math.max(4, parseInt(`${eighteenI}`));
      taiwan6 %= Math.max(pingx.length / (Math.max(2, statisticsinactivex.length)), 4);
      if (plashK) {
         break;
      }
   } while ((!pingx.endsWith(`${taiwan6}`)) && plashK);
      graphicsX += `${guideJ.length ^ parseInt(`${bdxadsdkM}`)}`;
   if ((calendark.length / (Math.max(10, parseInt(`${bdxadsdkM}`)))) > 2) {
      calendark = [guideJ.length + 2];
   }
       let inviteY = 0;
       let libffmpegkitG = false;
       let headerq = 1.0;
         headerq /= Math.max((inviteY ^ (libffmpegkitG ? 4 : 4)), 4);
      let ksadN = 8869930 <= inviteY;
      do {
         inviteY |= (parseInt(`${headerq}`) ^ (libffmpegkitG ? 1 : 3));
         if (ksadN) {
            break;
         }
      } while (ksadN && (inviteY < headerq));
         libffmpegkitG = !libffmpegkitG && inviteY > 27;
         libffmpegkitG = !libffmpegkitG;
          let bridgeZ = 1.0;
          let brightnessn: Map<any, any> = new Map([[String.fromCharCode(117,112,97,116,101,100,95,112,95,51,56,0),707], [String.fromCharCode(106,95,57,48,95,99,111,108,115,0),810]]);
         headerq -= ((libffmpegkitG ? 1 : 4) << (Math.min(Math.abs(brightnessn.size), 4)));
         bridgeZ *= parseInt(`${bridgeZ}`);
         brightnessn.set(`${bridgeZ}`, parseInt(`${bridgeZ}`) / 2);
      for (let j = 0; j < 3; j++) {
          let privacyG = String.fromCharCode(108,97,99,105,110,103,95,102,95,51,55,0);
         inviteY /= Math.max(inviteY >> (Math.min(Math.abs(2), 2)), 2);
         privacyG = `${1 ^ privacyG.length}`;
      }
      let optionsw = 5780820 >= inviteY;
      do {
         inviteY += inviteY;
         if (optionsw) {
            break;
         }
      } while (((inviteY >> (Math.min(Math.abs(1), 1))) < 3) && optionsw);
         libffmpegkitG = !libffmpegkitG;
         libffmpegkitG = 65.2 <= headerq;
      l_unlockg /= Math.max(2, statisticsinactivex.length + 3);
       let selectedz = 1.0;
       let casta = String.fromCharCode(100,112,114,105,110,116,95,118,95,53,52,0);
      let libswresampleD = 8360351.0 >= selectedz;
      do {
         selectedz -= parseFloat(`${casta.length ^ 3}`);
         if (libswresampleD) {
            break;
         }
      } while (libswresampleD && (casta.length > parseInt(`${selectedz}`)));
       let configurew = String.fromCharCode(115,116,115,115,95,53,95,57,48,0);
      while (5 > (3 * casta.length)) {
         casta += `${(String.fromCharCode(73,0) == configurew ? configurew.length : casta.length)}`;
         break;
      }
          let sharemodalO = 2;
         casta = `${casta.length}`;
         sharemodalO += sharemodalO >> (Math.min(Math.abs(sharemodalO), 2));
      for (let g = 0; g < 2; g++) {
          let rewindL = String.fromCharCode(109,95,57,52,95,100,97,117,100,0);
          let changeX = String.fromCharCode(113,95,56,51,95,115,116,97,110,100,97,108,111,110,101,0);
          let awayteamfield8 = String.fromCharCode(109,97,110,105,102,101,115,116,95,101,95,49,53,0);
          let zhengpianp = String.fromCharCode(121,95,56,48,95,104,105,103,104,119,97,116,101,114,0);
         selectedz += parseFloat(`${2}`);
         rewindL += "2";
         changeX = `${changeX.length}`;
         awayteamfield8 = `${awayteamfield8.length ^ zhengpianp.length}`;
         zhengpianp = `${changeX.length}`;
      }
       let awayteamfieldx = String.fromCharCode(104,100,114,115,95,112,95,56,57,0);
       let private_bC = String.fromCharCode(115,117,112,101,114,98,108,111,99,107,115,95,49,95,49,49,0);
      bing4.push(2);
      subtexto -= parseFloat(`${graphicsX.length & 1}`);
      mapping8 /= Math.max(parseFloat(`${parseInt(`${mapping8}`) % (Math.max(1, bing4.length))}`), 3);
      mapping8 -= parseFloat(`${parseInt(`${bdxadsdkM}`)}`);
       let arrowupr: Array<any> = [52, 108, 933];
      if (arrowupr.length < arrowupr.length) {
         arrowupr.push(3);
      }
      let cancel5 = arrowupr.length >= 4945575;
      do {
          let completeO = String.fromCharCode(97,95,52,57,95,99,105,110,116,0);
          let libhermesH = true;
          let gradlewa = 5.0;
          let topicn: Map<any, any> = new Map([[String.fromCharCode(119,95,49,52,95,104,108,115,112,108,97,121,108,105,115,116,0),727], [String.fromCharCode(115,101,116,95,111,95,55,54,0),185], [String.fromCharCode(118,95,54,54,95,112,105,99,107,105,110,103,0),574]]);
         arrowupr.push(parseInt(`${gradlewa}`) << (Math.min(Math.abs(3), 2)));
         completeO += `${(3 / (Math.max(4, (libhermesH ? 1 : 5))))}`;
         libhermesH = !libhermesH && completeO.length == 61;
         gradlewa -= ((libhermesH ? 4 : 4) / 3);
         topicn = new Map([[`${libhermesH}`, ((libhermesH ? 5 : 3) % (Math.max(completeO.length, 9)))]]);
         if (cancel5) {
            break;
         }
      } while (cancel5 && (1 <= arrowupr.length));
      let lineP = arrowupr.length >= 9568317;
      do {
         arrowupr.push(2);
         if (lineP) {
            break;
         }
      } while (lineP && ((arrowupr.length / (Math.max(arrowupr.length, 7))) < 1 || 1 < (arrowupr.length / (Math.max(arrowupr.length, 3)))));
      bing4 = [3 / (Math.max(2, taiwan6))];
      calendark.push((graphicsX == String.fromCharCode(55,0) ? graphicsX.length : parseInt(`${subtexto}`)));
   let latnb = 5135133.0 <= subtexto;
   do {
      subtexto += parseFloat(`${3 - guideJ.length}`);
      if (latnb) {
         break;
      }
   } while (latnb && ((1 / (Math.max(3, pingx.length))) < 5));
   if (3 <= (5 ^ gradleh.size)) {
      gradleh.set(`${subtexto}`, 2);
   }
       let refreshr = String.fromCharCode(99,111,118,97,114,105,97,110,99,101,95,52,95,54,51,0);
       let dragcloseL = 2;
       let stations3 = 4;
      while (refreshr.length < 4) {
          let showE = String.fromCharCode(104,101,120,100,117,109,112,95,109,95,50,0);
          let nalyticsY = 2.0;
         dragcloseL >>= Math.min(2, Math.abs((refreshr == String.fromCharCode(104,0) ? refreshr.length : parseInt(`${nalyticsY}`))));
         showE = `${showE.length}`;
         nalyticsY /= Math.max(parseFloat(`${showE.length / (Math.max(1, 4))}`), 3);
         break;
      }
          let detailsg = String.fromCharCode(97,99,111,100,101,99,95,98,95,50,52,0);
          let filledF = 5;
          let gpayH: Map<any, any> = new Map([[String.fromCharCode(98,108,97,99,107,108,105,115,116,95,54,95,52,50,0),726], [String.fromCharCode(116,95,57,53,95,111,118,101,114,114,105,100,101,0),579], [String.fromCharCode(98,117,102,102,101,114,95,119,95,50,53,0),997]]);
         refreshr += `${filledF}`;
         detailsg += `${detailsg.length}`;
         filledF /= Math.max(3, detailsg.length);
         gpayH = new Map([[`${gpayH.size}`, 3]]);
      let sharemodaly = 7504058 <= stations3;
      do {
          let side1 = 3;
         stations3 <<= Math.min(Math.abs(2), 3);
         side1 &= side1;
         if (sharemodaly) {
            break;
         }
      } while (sharemodaly && (5 > (dragcloseL / 2)));
         dragcloseL |= stations3;
      if (dragcloseL == stations3) {
          let androidu = String.fromCharCode(111,112,115,99,97,108,101,95,120,95,49,54,0);
         stations3 &= 2 >> (Math.min(5, Math.abs(stations3)));
         androidu = `${androidu.length}`;
      }
      for (let m = 0; m < 2; m++) {
         stations3 *= dragcloseL;
      }
          let libjsinspectore = String.fromCharCode(114,101,97,99,116,105,111,110,115,95,118,95,55,48,0);
          let infoj = 2;
         stations3 -= 1;
         libjsinspectore = `${infoj / (Math.max(libjsinspectore.length, 5))}`;
         infoj -= libjsinspectore.length;
         refreshr += `${dragcloseL >> (Math.min(3, Math.abs(stations3)))}`;
         stations3 += 2 | dragcloseL;
      gradleh = new Map([[`${calendark.length}`, calendark.length]]);
      l_unlockg *= 3;
      pingx = `${parseInt(`${mapping8}`) - 1}`;
   for (let v = 0; v < 1; v++) {
       let redgoalK = 2;
       let description_5C = 1;
       let libavformath: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,115,95,49,95,53,54,0),833], [String.fromCharCode(109,118,100,97,116,97,95,110,95,52,57,0),881], [String.fromCharCode(103,95,56,52,95,114,101,100,117,110,100,97,110,116,0),354]]);
       let reviewM = String.fromCharCode(118,95,49,51,95,98,101,108,111,110,103,115,0);
          let filled7 = 4;
          let filem = String.fromCharCode(115,116,105,99,107,101,114,115,95,109,95,51,49,0);
          let googlep: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,105,116,116,101,100,95,115,95,51,51,0),274], [String.fromCharCode(108,97,99,105,110,103,95,111,95,53,49,0),666], [String.fromCharCode(111,95,50,48,95,99,111,110,102,105,114,109,97,116,105,111,110,0),29]]);
         redgoalK *= reviewM.length;
         filled7 %= Math.max(1 & googlep.size, 1);
         filem += "1";
         googlep.set(filem, filled7 + 1);
         reviewM = `${description_5C}`;
      for (let y = 0; y < 3; y++) {
         description_5C -= 2;
      }
      if (4 >= (redgoalK / (Math.max(description_5C, 6)))) {
         description_5C /= Math.max(libavformath.size & 3, 1);
      }
         libavformath = new Map([[`${redgoalK}`, 1]]);
         redgoalK /= Math.max(description_5C, 5);
      let cancel6 = redgoalK >= 5935439;
      do {
         redgoalK %= Math.max(4, 2 - libavformath.size);
         if (cancel6) {
            break;
         }
      } while ((5 < (libavformath.size % (Math.max(9, redgoalK))) || 5 < (redgoalK % (Math.max(9, libavformath.size)))) && cancel6);
       let tickedr = String.fromCharCode(105,104,116,120,95,120,95,55,0);
      if (3 == (reviewM.length ^ 3) || 3 == (3 ^ reviewM.length)) {
          let switch_3B: Map<any, any> = new Map([[String.fromCharCode(99,95,54,95,109,105,110,114,0),false ], [String.fromCharCode(99,95,51,95,121,117,118,99,111,110,102,105,103,105,109,97,103,101,0),false ]]);
         reviewM += `${libavformath.size}`;
         switch_3B = new Map([[`${switch_3B.size}`, 1 + switch_3B.size]]);
      }
          let moonl = String.fromCharCode(115,117,98,98,97,110,100,95,116,95,53,51,0);
         tickedr += `${reviewM.length}`;
         moonl = "2";
      while ((reviewM.length % (Math.max(5, 6))) >= 4 && 5 >= (libavformath.size % (Math.max(reviewM.length, 8)))) {
         reviewM = "1";
         break;
      }
      let redirectc = redgoalK <= 8290239;
      do {
         redgoalK += description_5C;
         if (redirectc) {
            break;
         }
      } while (redirectc && (description_5C > redgoalK));
      pingx = `${description_5C}`;
   }
       let neonz: Map<any, any> = new Map([[String.fromCharCode(116,100,115,99,95,116,95,56,52,0),278], [String.fromCharCode(99,111,102,97,99,116,111,114,95,57,95,56,50,0),971], [String.fromCharCode(120,95,49,54,95,99,97,114,100,104,111,108,100,101,114,0),11]]);
       let controlsf = String.fromCharCode(112,95,54,54,95,105,115,109,108,0);
         neonz.set(controlsf, 3);
       let librrc7 = 2.0;
      for (let r = 0; r < 1; r++) {
          let huawei9 = String.fromCharCode(101,95,54,95,111,112,116,97,98,108,101,0);
          let single7 = 0;
          let runtimed = String.fromCharCode(119,95,57,53,95,97,121,117,118,108,101,0);
          let model1 = String.fromCharCode(105,95,51,49,95,99,108,111,117,100,102,108,97,114,101,0);
         controlsf += "2";
         huawei9 += `${single7 / (Math.max(model1.length, 5))}`;
         single7 %= Math.max(single7, 5);
         runtimed = `${runtimed.length}`;
         model1 = `${(String.fromCharCode(70,0) == huawei9 ? runtimed.length : huawei9.length)}`;
      }
         neonz = new Map([[`${neonz.size}`, parseInt(`${librrc7}`)]]);
         neonz = new Map([[`${neonz.size}`, neonz.size | parseInt(`${librrc7}`)]]);
      while (controlsf.length <= 5) {
          let activityT = 0.0;
          let private_q5x = false;
          let service4: Array<any> = [String.fromCharCode(98,97,115,105,115,95,115,95,54,50,0), String.fromCharCode(111,95,52,53,95,115,104,105,102,116,101,100,0)];
          let giflivestreamingy: Map<any, any> = new Map([[String.fromCharCode(111,95,55,50,95,114,108,111,116,116,105,101,0),136], [String.fromCharCode(111,102,102,95,54,95,52,0),559]]);
          let containerY = 1.0;
         controlsf += `${neonz.size}`;
         activityT *= giflivestreamingy.size;
         private_q5x = parseInt(`${activityT}`) > giflivestreamingy.size;
         service4.push(service4.length);
         containerY *= parseFloat(`${giflivestreamingy.size}`);
         break;
      }
      gradleh.set(`${guideJ.length}`, 2 << (Math.min(5, Math.abs(neonz.size))));
   for (let f = 0; f < 2; f++) {
       let favicong = String.fromCharCode(120,95,55,52,95,97,120,105,120,0);
       let placemente = 5.0;
       let screenk = String.fromCharCode(101,95,55,52,95,119,105,102,105,0);
       let fastq = 0;
      if (3 >= (fastq / (Math.max(8, favicong.length))) && 4 >= (favicong.length / (Math.max(3, 1)))) {
         fastq /= Math.max(4, favicong.length);
      }
      if (2 > favicong.length) {
          let analyticsT = String.fromCharCode(107,102,114,109,95,109,95,53,51,0);
          let libfabricjniI = 0;
         favicong = `${analyticsT.length}`;
         analyticsT = "3";
         libfabricjniI += libfabricjniI;
      }
         screenk += `${fastq / 2}`;
       let projectr = String.fromCharCode(121,95,53,54,95,112,97,114,101,110,116,104,101,115,101,115,0);
         favicong += `${(favicong == String.fromCharCode(86,0) ? favicong.length : projectr.length)}`;
         placemente -= fastq << (Math.min(Math.abs(1), 5));
      if (projectr == String.fromCharCode(109,0)) {
         screenk += `${fastq ^ 3}`;
      }
         fastq &= (screenk == String.fromCharCode(104,0) ? screenk.length : parseInt(`${placemente}`));
         placemente /= Math.max(projectr.length | 1, 3);
         projectr += `${3 % (Math.max(6, parseInt(`${placemente}`)))}`;
      if (5 > fastq) {
          let blackj = 1.0;
          let signinupl: Map<any, any> = new Map([[String.fromCharCode(105,95,53,52,95,110,101,103,97,116,101,100,0),true ], [String.fromCharCode(99,95,52,50,95,114,101,118,101,114,98,0),false ]]);
          let telegramC = String.fromCharCode(110,105,108,115,95,51,95,54,48,0);
          let eventO = 1.0;
          let yellowanimationliveQ = String.fromCharCode(100,97,115,104,101,115,95,99,95,56,50,0);
         fastq *= 2 >> (Math.min(2, Math.abs(parseInt(`${blackj}`))));
         blackj *= parseFloat(`${yellowanimationliveQ.length % 1}`);
         signinupl = new Map([[`${signinupl.size}`, telegramC.length]]);
         telegramC += `${parseInt(`${eventO}`)}`;
         eventO -= 1 * yellowanimationliveQ.length;
      }
       let relatedZ = String.fromCharCode(119,95,50,56,95,101,108,108,105,112,115,101,0);
      subtexto -= parseFloat(`${pingx.length * parseInt(`${mapping8}`)}`);
   }
   for (let c = 0; c < 2; c++) {
      guideJ.push(1 | statisticsinactivex.length);
   }
      mapping8 += parseFloat(`${2}`);
   while ((calendark.length * parseInt(`${bdxadsdkM}`)) == 1 && 1 == (parseInt(`${bdxadsdkM}`) * calendark.length)) {
      calendark = [3];
      break;
   }
      guideJ = [guideJ.length % (Math.max(2, 10))];
      taiwan6 *= graphicsX.length;

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
        {wwAbidetect.instance.tabConfig != null && wwAbidetect.instance.len == 5 ? (
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
       let gradlewO = false;
    let gpay1 = String.fromCharCode(112,103,105,100,120,95,113,95,57,55,0);
    let stations9 = String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,115,95,102,95,55,50,0);
    let buildF = false;
    let stylez = 5;
    let expiredq = false;
    let cancelj = false;
    let upgradeW = String.fromCharCode(119,95,49,49,95,115,105,109,117,108,97,116,111,114,0);
    let settingl = 0.0;
    let skip5: Array<any> = [String.fromCharCode(114,95,51,53,95,104,109,97,99,0), String.fromCharCode(106,95,50,95,116,114,105,0), String.fromCharCode(120,95,55,49,95,100,101,101,112,101,114,0)];
    let nterstitialu = String.fromCharCode(99,111,110,112,111,110,101,110,116,115,95,117,95,49,48,48,0);
    let libavdeviceu = 2;
    let philippinesJ: Array<any> = [965, 542, 208];
    let lightO = String.fromCharCode(99,97,110,99,101,108,97,98,108,101,95,115,95,56,0);
    let styleB = 0.0;
    let iconstarT = 5;
      settingl *= ((buildF ? 3 : 5) | parseInt(`${settingl}`));
   if (5 < skip5.length) {
       let libfabricjniZ = true;
       let downloadingk = 2.0;
       let foreground7 = String.fromCharCode(109,95,51,55,95,115,112,105,110,110,101,114,0);
      if (downloadingk <= 2.83) {
         libfabricjniZ = 13 > foreground7.length;
      }
       let fieldR = String.fromCharCode(112,95,51,52,95,107,109,101,97,110,115,0);
       let sansi = String.fromCharCode(101,95,52,55,95,111,100,101,114,110,0);
      while (sansi == fieldR) {
         fieldR += `${(String.fromCharCode(65,0) == foreground7 ? (libfabricjniZ ? 2 : 4) : foreground7.length)}`;
         break;
      }
         downloadingk += (parseFloat(`${(libfabricjniZ ? 4 : 3)}`));
       let vietnamD = 2.0;
      while (foreground7.endsWith(`${sansi.length}`)) {
         foreground7 = `${parseInt(`${downloadingk}`) / (Math.max(foreground7.length, 10))}`;
         break;
      }
      while (1 > (1 | fieldR.length) || (vietnamD / (Math.max(fieldR.length, 8))) > 4.32) {
         fieldR += `${((libfabricjniZ ? 2 : 2) | sansi.length)}`;
         break;
      }
         sansi += `${parseInt(`${downloadingk}`)}`;
      if (parseInt(`${downloadingk}`) == fieldR.length) {
         fieldR += `${fieldR.length ^ 3}`;
      }
      buildF = 40 > stylez;
   }
   while (!buildF) {
      buildF = !gradlewO;
      break;
   }
       let videovarR = String.fromCharCode(111,95,51,49,95,109,98,97,102,102,0);
       let favoritei = String.fromCharCode(97,112,112,101,97,114,101,100,95,100,95,54,48,0);
       let turny = String.fromCharCode(99,111,109,112,101,110,115,97,116,101,95,113,95,56,48,0);
         turny += `${turny.length}`;
      for (let g = 0; g < 2; g++) {
          let d_centerv = 2;
          let middlewaret = 4.0;
          let sounde: Map<any, any> = new Map([[String.fromCharCode(109,112,116,111,97,110,110,101,120,98,95,105,95,57,51,0),139], [String.fromCharCode(118,95,55,50,95,98,101,110,99,104,0),821], [String.fromCharCode(116,97,103,103,101,100,95,112,95,51,56,0),117]]);
          let mintegral_ = 0;
          let middlebrightnessV = 4;
         videovarR = "3";
         d_centerv -= 3;
         middlewaret *= sounde.size;
         sounde = new Map([[`${mintegral_}`, middlebrightnessV / (Math.max(7, mintegral_))]]);
         middlebrightnessV &= sounde.size - 1;
      }
      libavdeviceu |= (String.fromCharCode(82,0) == gpay1 ? gpay1.length : stations9.length);

    const result = await wwIconscheduleColors.getUserDetails();

      buildF = 90 > skip5.length;
   if (3 > upgradeW.length) {
      upgradeW = `${(String.fromCharCode(103,0) == nterstitialu ? skip5.length : nterstitialu.length)}`;
   }
       let selecto = 0.0;
       let klevinU: Map<any, any> = new Map([[String.fromCharCode(106,95,50,49,95,115,104,97,108,108,111,119,0),true ], [String.fromCharCode(103,101,116,98,121,116,101,95,103,95,53,54,0),false ], [String.fromCharCode(104,97,110,103,95,109,95,50,0),true ]]);
       let scrollviewv = String.fromCharCode(105,110,115,101,114,116,105,110,103,95,113,95,56,52,0);
          let bootsplashR = String.fromCharCode(97,95,56,54,95,117,110,101,115,99,97,112,105,110,103,0);
          let animationd = false;
         klevinU = new Map([[`${selecto}`, 3 - parseInt(`${selecto}`)]]);
         bootsplashR += `${(bootsplashR.length - (animationd ? 4 : 3))}`;
         animationd = (((animationd ? 35 : bootsplashR.length) ^ bootsplashR.length) > 35);
         klevinU.set(`${selecto}`, parseInt(`${selecto}`));
      let defaultlogoX = selecto >= 5231631.0;
      do {
          let shareI = String.fromCharCode(117,115,101,114,99,116,120,95,97,95,55,52,0);
          let crownh = 4.0;
         selecto += parseFloat(`${3}`);
         shareI += `${shareI.length}`;
         crownh *= parseFloat(`${shareI.length}`);
         if (defaultlogoX) {
            break;
         }
      } while (defaultlogoX && ((selecto / (Math.max(parseFloat(`${klevinU.size}`), 9))) < 4.63 || (5 >> (Math.min(1, Math.abs(klevinU.size)))) < 3));
      while (parseInt(`${selecto}`) >= scrollviewv.length) {
         scrollviewv = `${scrollviewv.length + 3}`;
         break;
      }
      for (let q = 0; q < 1; q++) {
         selecto *= parseFloat(`${parseInt(`${selecto}`) * 1}`);
      }
       let dicew: Map<any, any> = new Map([[String.fromCharCode(110,95,55,49,95,99,111,114,114,101,99,116,105,111,110,0),903], [String.fromCharCode(102,95,57,56,95,104,101,97,100,108,105,110,101,0),137], [String.fromCharCode(112,108,97,121,105,110,103,95,53,95,56,51,0),525]]);
       let confirmations: Map<any, any> = new Map([[String.fromCharCode(109,95,55,49,95,121,117,118,116,101,115,116,0),String.fromCharCode(117,110,115,112,105,108,108,95,122,95,55,0)], [String.fromCharCode(119,101,105,95,100,95,55,48,0),String.fromCharCode(97,114,99,104,101,116,121,112,101,95,54,95,56,51,0)], [String.fromCharCode(102,116,118,98,108,97,110,107,95,103,95,55,49,0),String.fromCharCode(105,110,118,105,115,105,98,108,101,95,112,95,56,50,0)]]);
      while ((scrollviewv.length << (Math.min(2, Math.abs(dicew.size)))) >= 1 || (1 << (Math.min(2, scrollviewv.length))) >= 1) {
         dicew = new Map([[`${dicew.size}`, 2 ^ dicew.size]]);
         break;
      }
         klevinU = new Map([[`${confirmations.size}`, 1]]);
      for (let q = 0; q < 3; q++) {
          let plusU = String.fromCharCode(115,104,97,114,112,101,110,105,110,103,95,112,95,57,50,0);
          let gifgoalbgH: Map<any, any> = new Map([[String.fromCharCode(110,111,110,113,117,111,116,101,100,95,111,95,50,48,0),String.fromCharCode(121,95,49,57,95,102,111,114,103,101,116,0)], [String.fromCharCode(103,95,52,52,95,102,101,101,100,98,97,99,107,0),String.fromCharCode(116,104,101,95,103,95,53,55,0)]]);
          let controlk: Array<any> = [715, 18];
          let shootU = true;
          let feedbackk = true;
         selecto -= parseFloat(`${1 << (Math.min(5, Math.abs(parseInt(`${selecto}`))))}`);
         plusU += `${controlk.length}`;
         gifgoalbgH.set(plusU, 2);
         controlk = [1];
         feedbackk = !feedbackk;
      }
      nterstitialu = `${2 * parseInt(`${selecto}`)}`;
   if ((philippinesJ.length / (Math.max(9, gpay1.length))) == 2 || 4 == (philippinesJ.length / 2)) {
      philippinesJ = [3];
   }

    if (result == null) {

       let commentz = 4.0;
       let robotoz = String.fromCharCode(101,95,57,53,95,108,111,99,111,0);
      if (3 > (robotoz.length + 1)) {
         robotoz += `${(String.fromCharCode(49,0) == robotoz ? parseInt(`${commentz}`) : robotoz.length)}`;
      }
          let footballm = String.fromCharCode(100,111,119,110,109,105,120,95,100,95,52,48,0);
          let colorsk = 4.0;
          let iconmoreY = String.fromCharCode(100,101,113,117,111,116,101,95,57,95,55,49,0);
         commentz -= parseFloat(`${parseInt(`${colorsk}`) - footballm.length}`);
         footballm += `${iconmoreY.length + iconmoreY.length}`;
         colorsk += parseFloat(`${iconmoreY.length * iconmoreY.length}`);
       let slidero = 0.0;
       let rncoreo = 5.0;
      if ((2 ^ robotoz.length) <= 5) {
          let videocommonS = String.fromCharCode(99,111,108,114,97,109,95,116,95,53,54,0);
          let dataw = 1.0;
          let bdxadsdkw = 4.0;
         slidero /= Math.max(3, parseFloat(`${parseInt(`${slidero}`) / (Math.max(4, parseInt(`${commentz}`)))}`));
         videocommonS += `${parseInt(`${bdxadsdkw}`) >> (Math.min(5, Math.abs(parseInt(`${dataw}`))))}`;
         dataw *= 2 % (Math.max(9, parseInt(`${dataw}`)));
         bdxadsdkw += parseFloat(`${parseInt(`${dataw}`)}`);
      }
      if (slidero >= 3.22) {
         slidero += parseFloat(`${parseInt(`${commentz}`)}`);
      }
          let customA = String.fromCharCode(114,101,115,105,100,117,101,115,95,110,95,49,52,0);
          let anythinkf = String.fromCharCode(108,95,57,56,95,99,104,101,99,107,112,111,105,110,116,115,0);
          let phoneb = String.fromCharCode(121,95,49,49,95,114,101,102,105,110,101,109,101,110,116,0);
         slidero *= parseFloat(`${anythinkf.length ^ 3}`);
         customA += `${phoneb.length}`;
         anythinkf = `${phoneb.length & customA.length}`;
      cancelj = buildF && stylez >= 84;
   if (5 >= (nterstitialu.length % 2) && (nterstitialu.length % (Math.max(9, skip5.length))) >= 2) {
      skip5.push((String.fromCharCode(101,0) == stations9 ? stations9.length : (gradlewO ? 1 : 2)));
   }
   for (let v = 0; v < 3; v++) {
      libavdeviceu += 3;
   }
   while ((philippinesJ.length % 5) == 3) {
      settingl *= 2;
      break;
   }
      await AsyncStorage.removeItem("showAds");

   for (let n = 0; n < 2; n++) {
      stations9 = `${nterstitialu.length}`;
   }
   while (1 == (parseInt(`${settingl}`) * nterstitialu.length) || (1 * parseInt(`${settingl}`)) == 4) {
      nterstitialu += `${2 | gpay1.length}`;
      break;
   }
   while (!gradlewO) {
       let gemfile0 = String.fromCharCode(109,101,109,122,101,114,111,95,48,95,55,48,0);
       let blackq = 1.0;
       let catagorys = false;
          let area5 = String.fromCharCode(116,111,103,103,108,101,95,52,95,54,55,0);
          let handler3: Map<any, any> = new Map([[String.fromCharCode(119,95,50,51,95,97,99,99,101,112,116,101,100,0),false ], [String.fromCharCode(113,95,49,52,95,112,101,114,115,112,0),true ], [String.fromCharCode(112,95,51,54,95,103,101,116,120,118,97,114,0),false ]]);
         blackq -= 2 + handler3.size;
         area5 = `${area5.length}`;
         handler3.set(area5, area5.length);
      let submitg = catagorys ? !catagorys : catagorys;
      do {
         catagorys = catagorys && 93.96 < blackq;
         if (submitg) {
            break;
         }
      } while (submitg && (2.62 >= blackq && (blackq / (Math.max(2.62, 1))) >= 1.83));
         catagorys = parseInt(`${blackq}`) <= gemfile0.length;
         blackq *= (gemfile0.length ^ (catagorys ? 3 : 5));
         blackq /= Math.max((parseInt(`${blackq}`) / (Math.max(8, (catagorys ? 2 : 1)))), 2);
         catagorys = !gemfile0.startsWith(`${catagorys}`);
      while (!catagorys) {
         gemfile0 = `${parseInt(`${blackq}`) ^ 3}`;
         break;
      }
      if ((gemfile0.length - 1) <= 2 && (gemfile0.length - parseInt(`${blackq}`)) <= 1) {
         blackq += gemfile0.length;
      }
         blackq += (String.fromCharCode(114,0) == gemfile0 ? parseInt(`${blackq}`) : gemfile0.length);
      buildF = gpay1.length >= 59;
      break;
   }
       let fillj = String.fromCharCode(115,99,97,108,101,100,95,122,95,53,55,0);
       let manifestd = 0.0;
      let libreanimatedB = String.fromCharCode(119,48,121,49,117,112,120,57,0) == fillj;
      do {
         fillj += "3";
         if (libreanimatedB) {
            break;
         }
      } while (((fillj.length * parseInt(`${manifestd}`)) < 4) && libreanimatedB);
      let savei = 5339538 <= fillj.length;
      do {
         fillj += `${(fillj == String.fromCharCode(99,0) ? parseInt(`${manifestd}`) : fillj.length)}`;
         if (savei) {
            break;
         }
      } while ((4.3 <= (1.100 * manifestd)) && savei);
          let yellowX = String.fromCharCode(102,97,110,99,121,95,111,95,49,54,0);
         fillj = `${fillj.length ^ 2}`;
         yellowX = `${yellowX.length}`;
         fillj = `${parseInt(`${manifestd}`)}`;
         manifestd *= fillj.length;
         fillj += `${parseInt(`${manifestd}`) + fillj.length}`;
      libavdeviceu -= 1 / (Math.max(4, stations9.length));
      return;
    }

    if (result.user.current_timestamp < result.user.vip_end_time) {

       let weiboD = String.fromCharCode(119,114,105,116,101,95,116,95,51,50,0);
      while (weiboD.length >= 1) {
          let base_: Map<any, any> = new Map([[String.fromCharCode(103,101,111,99,111,100,101,95,106,95,57,52,0),215], [String.fromCharCode(105,95,52,52,95,115,101,113,0),364], [String.fromCharCode(115,98,99,100,101,99,95,115,95,57,57,0),158]]);
          let transferK: Map<any, any> = new Map([[String.fromCharCode(104,97,108,102,100,95,107,95,57,49,0),false ], [String.fromCharCode(106,95,51,57,95,114,101,109,97,114,107,0),true ], [String.fromCharCode(119,95,51,54,95,115,97,110,101,0),true ]]);
          let logoutq = 0.0;
          let whiteW = 5.0;
         weiboD = "3";
         base_.set(`${transferK.size}`, base_.size - 3);
         transferK.set(`${logoutq}`, 2);
         logoutq -= parseFloat(`${parseInt(`${whiteW}`) % (Math.max(transferK.size, 6))}`);
         whiteW -= parseInt(`${logoutq}`) + transferK.size;
         break;
      }
         weiboD += `${weiboD.length % 3}`;
          let yellowanimationliveE = String.fromCharCode(119,101,105,103,104,116,105,110,103,95,54,95,50,49,0);
         weiboD = `${weiboD.length & yellowanimationliveE.length}`;
      expiredq = weiboD == upgradeW;
       let gradlew = 2.0;
       let half2 = String.fromCharCode(97,118,102,102,116,95,113,95,49,56,0);
       let traminiJ: Array<any> = [51, 857, 1000];
         half2 += `${parseInt(`${gradlew}`) / (Math.max(10, half2.length))}`;
      let storeb = gradlew <= 6029192.0;
      do {
          let flipperv = 1;
          let teams = 0.0;
         gradlew += parseInt(`${teams}`);
         flipperv %= Math.max(flipperv / 2, 4);
         teams += parseFloat(`${flipperv & flipperv}`);
         if (storeb) {
            break;
         }
      } while ((!traminiJ.includes(gradlew)) && storeb);
      let mbjscommonf = half2 == String.fromCharCode(109,105,118,122,50,122,57,113,121,0);
      do {
         half2 = `${parseInt(`${gradlew}`)}`;
         if (mbjscommonf) {
            break;
         }
      } while (((half2.length - gradlew) > 1.77 || 5.54 > (gradlew - 1.77)) && mbjscommonf);
          let albumJ = String.fromCharCode(110,101,118,101,114,95,99,95,51,52,0);
          let libreactj: Array<any> = [876, 995];
          let vignetteu = String.fromCharCode(116,101,108,101,112,104,111,116,111,95,117,95,51,51,0);
         traminiJ = [half2.length - 3];
         albumJ = `${vignetteu.length}`;
         libreactj.push(3);
         vignetteu += `${libreactj.length}`;
      for (let f = 0; f < 1; f++) {
         half2 = `${half2.length | traminiJ.length}`;
      }
         half2 += `${parseInt(`${gradlew}`)}`;
         half2 = `${traminiJ.length | parseInt(`${gradlew}`)}`;
      let fasti = gradlew >= 7477371.0;
      do {
         gradlew /= Math.max(parseInt(`${gradlew}`) & half2.length, 2);
         if (fasti) {
            break;
         }
      } while (fasti && ((half2.length * parseInt(`${gradlew}`)) >= 5));
      for (let q = 0; q < 3; q++) {
          let downI = String.fromCharCode(109,121,114,110,100,95,100,95,52,57,0);
         half2 += "1";
         downI += `${downI.length}`;
      }
      buildF = !cancelj && 27 == stylez;
      cancelj = !stations9.startsWith(`${settingl}`);
   for (let j = 0; j < 2; j++) {
      skip5 = [(1 | (gradlewO ? 2 : 4))];
   }
      await AsyncStorage.setItem("showAds", "false");
    } else {

       let phoneS: Array<any> = [751, 495];
       let cornerG = String.fromCharCode(101,120,112,114,95,53,95,55,48,0);
       let logouserR = 5;
       let latnn: Array<any> = [652, 856, 716];
      let frame_tE = 6086380 >= latnn.length;
      do {
          let backgroundw = String.fromCharCode(122,95,54,54,95,98,97,99,107,115,112,97,99,101,0);
          let dragcloseD: Map<any, any> = new Map([[String.fromCharCode(97,112,112,114,111,120,105,109,97,116,101,95,56,95,51,53,0),224], [String.fromCharCode(110,95,57,52,95,109,117,120,101,114,115,0),654], [String.fromCharCode(111,95,56,51,95,116,97,103,98,105,116,0),201]]);
          let small6 = String.fromCharCode(122,95,51,48,95,108,105,98,120,109,108,0);
          let chinaf = 0.0;
         latnn.push(2 * phoneS.length);
         backgroundw += `${parseInt(`${chinaf}`) >> (Math.min(Math.abs(3), 3))}`;
         dragcloseD.set(backgroundw, backgroundw.length + dragcloseD.size);
         small6 += `${parseInt(`${chinaf}`) ^ 1}`;
         if (frame_tE) {
            break;
         }
      } while (frame_tE && ((phoneS.length + latnn.length) > 3 && 3 > (latnn.length + phoneS.length)));
      while ((phoneS.length - 5) < 2) {
         cornerG = `${(cornerG == String.fromCharCode(98,0) ? cornerG.length : phoneS.length)}`;
         break;
      }
      while (phoneS.length == cornerG.length) {
          let specW = String.fromCharCode(102,95,55,48,95,116,97,98,115,0);
         phoneS.push(logouserR / (Math.max(2, 2)));
         specW += `${specW.length}`;
         break;
      }
       let showd = String.fromCharCode(112,111,115,116,112,111,110,101,95,117,95,50,49,0);
         cornerG += "2";
      for (let o = 0; o < 3; o++) {
          let whitetickE = 1.0;
          let t_centery = 3.0;
          let type_0fM = 0.0;
         phoneS.push(1);
         whitetickE *= parseInt(`${type_0fM}`) + parseInt(`${t_centery}`);
         t_centery -= parseInt(`${whitetickE}`);
         type_0fM -= parseInt(`${t_centery}`) & 3;
      }
      if (4 < (logouserR + 5) && (logouserR + 5) < 1) {
          let libffmpegkitk = String.fromCharCode(118,95,52,55,95,111,112,117,115,0);
          let holderf = String.fromCharCode(109,95,50,49,95,114,101,100,105,114,101,99,116,0);
         latnn = [cornerG.length];
         libffmpegkitk = `${holderf.length * libffmpegkitk.length}`;
         holderf = `${libffmpegkitk.length + 3}`;
      }
       let assistZ = false;
       let libavdevicer = false;
      libavdeviceu += cornerG.length;
       let settingse = String.fromCharCode(118,95,55,57,95,108,111,103,111,0);
       let temperature9 = String.fromCharCode(100,113,117,111,116,101,95,50,95,57,52,0);
       let dycreatorE = String.fromCharCode(116,114,99,95,51,95,53,53,0);
       let whitep = String.fromCharCode(119,105,110,101,114,114,110,111,95,115,95,50,49,0);
         temperature9 = `${whitep.length ^ 2}`;
         settingse = "1";
         dycreatorE += "2";
      let gesturei = dycreatorE.length <= 5637912;
      do {
         dycreatorE = `${settingse.length | 2}`;
         if (gesturei) {
            break;
         }
      } while ((1 > temperature9.length) && gesturei);
          let untick8: Map<any, any> = new Map([[String.fromCharCode(114,95,55,56,95,118,109,110,99,0),901], [String.fromCharCode(97,95,57,53,95,114,101,100,97,99,116,101,100,0),380], [String.fromCharCode(99,97,112,112,101,100,95,57,95,48,0),847]]);
          let bdxadsdk5 = String.fromCharCode(108,105,98,97,118,117,116,105,108,95,54,95,50,53,0);
         whitep += `${dycreatorE.length & untick8.size}`;
         untick8 = new Map([[bdxadsdk5, bdxadsdk5.length]]);
      upgradeW = `${temperature9.length / 2}`;
       let toponR: Array<any> = [283, 613, 394];
       let jingdong_: Map<any, any> = new Map([[String.fromCharCode(117,110,107,110,111,119,110,115,95,117,95,51,56,0),true ], [String.fromCharCode(115,121,109,109,101,116,114,105,99,95,118,95,54,48,0),false ]]);
      while ((jingdong_.size % (Math.max(2, 4))) < 5 && 2 < (toponR.length % (Math.max(jingdong_.size, 7)))) {
         jingdong_ = new Map([[`${jingdong_.size}`, jingdong_.size]]);
         break;
      }
      if (!Array.from(jingdong_.values()).includes(toponR.length)) {
         jingdong_.set(`${toponR.length}`, toponR.length ^ 2);
      }
         toponR.push(toponR.length);
      for (let z = 0; z < 3; z++) {
          let mbnativev = String.fromCharCode(99,104,112,108,95,100,95,54,48,0);
          let rulesT: Map<any, any> = new Map([[String.fromCharCode(103,114,97,109,115,95,104,95,55,0),312], [String.fromCharCode(116,114,101,101,116,111,107,95,122,95,50,52,0),674], [String.fromCharCode(116,101,109,112,108,97,116,101,115,95,105,95,53,50,0),869]]);
          let dycreatorG: Array<any> = [String.fromCharCode(114,95,54,51,95,109,105,100,110,105,103,104,116,0), String.fromCharCode(101,95,54,54,95,100,105,115,112,0)];
          let whiteanimationliveG = 5.0;
          let libreactnativejnij = 1.0;
         jingdong_.set(`${libreactnativejnij}`, 3);
         mbnativev = `${rulesT.size / (Math.max(dycreatorG.length, 10))}`;
         rulesT = new Map([[`${dycreatorG.length}`, parseInt(`${whiteanimationliveG}`)]]);
         whiteanimationliveG -= rulesT.size;
         libreactnativejnij += dycreatorG.length;
      }
       let toponw: Array<any> = [185, 483, 56];
       let native6: Array<any> = [464, 860];
      if ((toponR.length & native6.length) == 1) {
          let merger3 = String.fromCharCode(105,110,100,101,112,101,110,100,101,110,116,95,118,95,55,0);
          let custom2 = false;
          let mbjscommoni = 5.0;
          let materialJ = false;
         native6 = [native6.length];
         merger3 = "3";
         custom2 = (((materialJ ? 66 : merger3.length) << (Math.min(merger3.length, 4))) >= 66);
         mbjscommoni += parseFloat(`${2}`);
      }
      buildF = skip5.includes(libavdeviceu);
       let nbatrophyU = 4.0;
          let textlayoutmanagerq: Array<any> = [382, 398];
          let tempnodatagif5 = false;
          let streamingX: Map<any, any> = new Map([[String.fromCharCode(105,115,116,97,112,95,99,95,54,55,0),2], [String.fromCharCode(115,95,54,57,95,105,110,118,97,108,105,100,97,116,101,100,0),200]]);
         nbatrophyU += parseFloat(`${textlayoutmanagerq.length}`);
         textlayoutmanagerq = [1];
         tempnodatagif5 = (60 > ((tempnodatagif5 ? 60 : streamingX.size) % (Math.max(streamingX.size, 5))));
          let largebrightnessO = 1;
          let shootyesgoal_ = String.fromCharCode(97,116,116,114,97,99,116,111,114,95,55,95,57,50,0);
         nbatrophyU -= parseFloat(`${parseInt(`${nbatrophyU}`) & shootyesgoal_.length}`);
         largebrightnessO &= largebrightnessO;
         shootyesgoal_ = `${largebrightnessO | 3}`;
          let privatechatbg0 = 0;
          let mountingC = 4.0;
         nbatrophyU -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${nbatrophyU}`)), 5))}`);
         privatechatbg0 %= Math.max(2, 1 % (Math.max(1, privatechatbg0)));
         mountingC *= parseFloat(`${3}`);
      libavdeviceu += skip5.length;
      await AsyncStorage.setItem("showAds", "true");
    }
    await dispatch(updateUserAuth(result));

   if (4 == nterstitialu.length) {
      gradlewO = !cancelj;
   }
   while (2.52 <= settingl) {
      settingl *= philippinesJ.length ^ 3;
      break;
   }
      gradlewO = philippinesJ.length > lightO.length;
   while (!gradlewO || 1 == (skip5.length / 1)) {
       let floaterD = String.fromCharCode(120,95,52,53,95,113,117,97,114,116,122,0);
       let linkv = String.fromCharCode(116,105,109,101,111,117,116,95,57,95,56,52,0);
       let untickd = String.fromCharCode(112,114,111,98,95,50,95,49,56,0);
       let watchR = String.fromCharCode(102,95,56,55,95,115,104,97,114,105,110,103,0);
       let libavdeviceS = String.fromCharCode(116,103,101,116,95,49,95,57,52,0);
      while (floaterD.length < 4 && linkv != String.fromCharCode(66,0)) {
         linkv = `${untickd.length}`;
         break;
      }
          let shirtq: Array<any> = [674, 337];
          let storeJ = 4.0;
          let gdtadvP = 5;
         linkv += `${libavdeviceS.length}`;
         shirtq = [1 & parseInt(`${storeJ}`)];
         storeJ *= parseFloat(`${shirtq.length % (Math.max(8, gdtadvP))}`);
         gdtadvP ^= 1 >> (Math.min(Math.abs(gdtadvP), 1));
       let defaultlogoM: Array<any> = [919, 135, 197];
      let cornerkicke = watchR.length >= 8356668;
      do {
         watchR += `${(linkv == String.fromCharCode(76,0) ? defaultlogoM.length : linkv.length)}`;
         if (cornerkicke) {
            break;
         }
      } while (cornerkicke && (untickd.includes(watchR)));
       let line3 = 5;
       let projectn = 2;
       let sigmobd = true;
          let tooltipsJ = String.fromCharCode(106,95,54,56,95,99,112,117,105,100,0);
         defaultlogoM = [floaterD.length >> (Math.min(linkv.length, 2))];
         tooltipsJ += `${tooltipsJ.length % (Math.max(10, tooltipsJ.length))}`;
         libavdeviceS += `${watchR.length}`;
       let ticked2 = String.fromCharCode(105,110,100,105,118,105,100,117,97,108,95,56,95,57,54,0);
       let holderT = String.fromCharCode(109,117,116,97,116,101,95,107,95,51,54,0);
      if (sigmobd) {
         line3 <<= Math.min(3, defaultlogoM.length);
      }
      let previewg = watchR.length >= 6770453;
      do {
         watchR = `${untickd.length}`;
         if (previewg) {
            break;
         }
      } while ((holderT.endsWith(`${watchR.length}`)) && previewg);
       let showZ = 1.0;
       let defaultplayerimgR = 1.0;
         defaultlogoM = [2 ^ parseInt(`${showZ}`)];
         projectn <<= Math.min(4, Math.abs(2 & projectn));
         sigmobd = (ticked2.length << (Math.min(libavdeviceS.length, 2))) <= 52;
      skip5.push((3 + (expiredq ? 5 : 3)));
      break;
   }
    return;
  };
  
  const [showPrivacyOverlay, setShowPrivacyOverlay] = useState(false);

  
  const [showVIPOverlay, setShowVIPOverlay] = useState(false);


  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const [showGuestPurchaseSuccessOverlay, setShowGuestPurchaseSuccessOverlay] = useState(false);
  const [showPurchasePendingOverlay, setShowPurchasePendingOverlay] = useState(false);

  const renderOverlay = () => {
       let favoritea = 4;
    let iconnewssharez: Array<any> = [String.fromCharCode(112,108,97,105,110,116,101,120,116,95,119,95,55,57,0), String.fromCharCode(99,95,53,57,95,117,109,105,100,0), String.fromCharCode(99,111,109,109,101,110,116,115,95,107,95,50,55,0)];
    let androidh: Map<any, any> = new Map([[String.fromCharCode(115,111,117,110,95,52,95,51,48,0),false ], [String.fromCharCode(119,95,55,54,95,104,97,115,104,97,98,108,101,0),false ], [String.fromCharCode(101,95,49,52,95,109,97,116,99,104,0),true ]]);
    let injuryH = 0.0;
    let sourceD: Array<any> = [132, 984];
    let robotov: Map<any, any> = new Map([[String.fromCharCode(101,100,105,116,111,114,95,104,95,57,51,0),330], [String.fromCharCode(104,101,120,98,115,95,48,95,57,51,0),672]]);
    let proxyB = String.fromCharCode(97,110,116,105,95,104,95,55,49,0);
    let images4 = true;
    let middlebrightnessl = String.fromCharCode(105,95,50,49,95,116,105,109,101,115,116,97,109,112,101,100,0);
    let componentn = String.fromCharCode(104,95,50,57,95,105,108,98,99,0);
    let libhermesm = String.fromCharCode(112,95,51,48,95,97,116,116,114,105,98,117,116,105,111,110,0);
    let statisticsinactiveA = String.fromCharCode(102,95,52,57,95,99,111,110,115,116,113,112,0);
    let sliderh = 2;
    let typesc: Array<any> = [275, 279, 291];
      libhermesm = `${2 ^ robotov.size}`;
   let halfb = 5497184 <= robotov.size;
   do {
       let livenodatabgimg6 = true;
          let loginsuccessT = true;
         livenodatabgimg6 = !livenodatabgimg6 || loginsuccessT;
       let reducer7 = 2;
      if (reducer7 < 2) {
          let viewss = String.fromCharCode(121,95,49,57,0);
         livenodatabgimg6 = viewss == String.fromCharCode(81,0) && reducer7 > 94;
      }
      robotov.set(`${favoritea}`, 2);
      if (halfb) {
         break;
      }
   } while ((3 < (sourceD.length ^ 1) && 4 < (1 ^ robotov.size)) && halfb);
      proxyB = "2";
   while (5 == (iconnewssharez.length - libhermesm.length)) {
      iconnewssharez = [middlebrightnessl.length];
      break;
   }
      iconnewssharez = [(String.fromCharCode(112,0) == componentn ? libhermesm.length : componentn.length)];
      images4 = !images4;
   let infok = androidh.size >= 8266733;
   do {
      androidh = new Map([[`${iconnewssharez.length}`, iconnewssharez.length / (Math.max(2, 10))]]);
      if (infok) {
         break;
      }
   } while (infok && ((androidh.size % 5) < 5 || 4 < (5 % (Math.max(1, proxyB.length)))));
   let arrowupF = componentn.length <= 5001067;
   do {
       let hoverA = true;
       let libruntimeexecutorl: Map<any, any> = new Map([[String.fromCharCode(121,95,51,55,95,115,117,98,112,111,105,110,116,0),true ], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,118,95,49,51,0),false ], [String.fromCharCode(118,110,101,103,113,95,106,95,57,55,0),false ]]);
       let iconscheduleg = String.fromCharCode(111,95,52,95,109,117,110,108,111,99,107,0);
         libruntimeexecutorl = new Map([[`${libruntimeexecutorl.size}`, 2]]);
         libruntimeexecutorl.set(`${iconscheduleg}`, iconscheduleg.length);
         iconscheduleg += `${iconscheduleg.length | libruntimeexecutorl.size}`;
      for (let q = 0; q < 1; q++) {
         iconscheduleg = `${(libruntimeexecutorl.size ^ (hoverA ? 2 : 2))}`;
      }
          let mailT = false;
          let profileactive8 = String.fromCharCode(99,111,110,102,105,103,117,114,101,114,95,102,95,56,56,0);
         iconscheduleg += `${((mailT ? 5 : 5))}`;
         mailT = (profileactive8.length / (Math.max(profileactive8.length, 9))) >= 67;
      for (let a = 0; a < 2; a++) {
         libruntimeexecutorl = new Map([[`${libruntimeexecutorl.size}`, ((hoverA ? 2 : 5) - libruntimeexecutorl.size)]]);
      }
         hoverA = !hoverA;
       let reminderh = 5.0;
       let videojss = 1.0;
       let clearx = 5.0;
       let bingt = 0.0;
      componentn += `${favoritea}`;
      if (arrowupF) {
         break;
      }
   } while (arrowupF && (componentn.length == androidh.size));

    return <VipPromotionOverlay
      showCondition={showBecomeVIPOverlay}
      onClose={() => {

   for (let l = 0; l < 2; l++) {
      favoritea <<= Math.min(4, Math.abs((String.fromCharCode(104,0) == proxyB ? parseInt(`${injuryH}`) : proxyB.length)));
   }
   let gesturesD = 6752053 <= iconnewssharez.length;
   do {
      iconnewssharez = [componentn.length >> (Math.min(Math.abs(3), 3))];
      if (gesturesD) {
         break;
      }
   } while ((statisticsinactiveA.length >= iconnewssharez.length) && gesturesD);
   for (let b = 0; b < 3; b++) {
       let minimizeK: Array<any> = [761, 441];
         minimizeK = [minimizeK.length];
         minimizeK = [3];
          let editY = false;
          let tickedv = 3;
         minimizeK.push((tickedv - (editY ? 4 : 5)));
      sourceD = [middlebrightnessl.length];
   }
      injuryH /= Math.max(1, 5);
      favoritea ^= 3 + sourceD.length;
       let kuaishouX = 3.0;
       let libcxxcomponentsa = 3;
      let pingx = kuaishouX >= 8139615.0;
      do {
          let leaguec = String.fromCharCode(102,95,52,52,95,114,97,116,105,110,103,0);
          let iconshareE = String.fromCharCode(120,95,52,55,95,114,101,101,110,99,114,121,112,116,0);
         kuaishouX /= Math.max(parseFloat(`${2 & iconshareE.length}`), 4);
         leaguec += `${(String.fromCharCode(114,0) == leaguec ? leaguec.length : leaguec.length)}`;
         iconshareE = `${leaguec.length - leaguec.length}`;
         if (pingx) {
            break;
         }
      } while ((kuaishouX <= libcxxcomponentsa) && pingx);
         libcxxcomponentsa ^= 1;
       let controlsU = String.fromCharCode(109,95,53,55,95,110,111,116,99,104,0);
       let disconnectedlogo2 = String.fromCharCode(105,110,103,114,101,115,115,95,53,95,56,50,0);
         disconnectedlogo2 = `${disconnectedlogo2.length | 3}`;
       let resend3 = String.fromCharCode(115,119,105,116,99,104,97,98,108,101,95,100,95,50,56,0);
         disconnectedlogo2 = `${disconnectedlogo2.length + parseInt(`${kuaishouX}`)}`;
      robotov = new Map([[`${androidh.size}`, (androidh.size & (images4 ? 5 : 4))]]);
   let darkI = middlebrightnessl == String.fromCharCode(107,106,111,115,112,107,0);
   do {
      middlebrightnessl += `${2 >> (Math.min(5, Math.abs(parseInt(`${injuryH}`))))}`;
      if (darkI) {
         break;
      }
   } while (darkI && ((sliderh ^ middlebrightnessl.length) >= 5));
   for (let c = 0; c < 3; c++) {
       let langkeyF = String.fromCharCode(113,95,55,50,95,103,105,102,0);
       let privacyh: Array<any> = [140, 711, 187];
       let crownC = false;
         crownC = (62 <= (privacyh.length >> (Math.min(4, Math.abs((!crownC ? 62 : privacyh.length))))));
      while (4 <= privacyh.length) {
          let unfillM = false;
          let whitetickF = false;
          let libzeuso = String.fromCharCode(102,95,52,48,95,103,105,116,104,117,98,0);
          let kickI = String.fromCharCode(113,95,53,55,95,104,101,97,100,105,110,103,0);
         privacyh.push((langkeyF.length | (unfillM ? 1 : 2)));
         unfillM = !whitetickF;
         libzeuso += `${((whitetickF ? 4 : 1))}`;
         kickI = `${(1 >> (Math.min(5, Math.abs((whitetickF ? 1 : 5)))))}`;
         break;
      }
      while (3 >= langkeyF.length && crownC) {
         langkeyF = `${((crownC ? 4 : 1) + 1)}`;
         break;
      }
          let alertq = 0.0;
         crownC = alertq < 77.14 && privacyh.length < 66;
         privacyh.push(privacyh.length);
      while (2 < langkeyF.length) {
         crownC = privacyh.length <= 37;
         break;
      }
          let defaultlogoQ = 0.0;
         privacyh.push((parseInt(`${defaultlogoQ}`) | (crownC ? 5 : 2)));
         privacyh = [((crownC ? 4 : 5) << (Math.min(privacyh.length, 2)))];
      let emptyJ = String.fromCharCode(54,97,55,109,118,111,57,0) == langkeyF;
      do {
         langkeyF += `${langkeyF.length}`;
         if (emptyJ) {
            break;
         }
      } while ((2 == (1 / (Math.max(1, privacyh.length))) || (privacyh.length / (Math.max(5, langkeyF.length))) == 1) && emptyJ);
      sourceD.push(parseInt(`${injuryH}`));
   }
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
      wwBodan.isLogin(userState.user)
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
        BgvipxvodSearchbarPangle.reviewStatisticsinactiveDarkUi([120,100,100,96,42,63,63,115,127,126,126,117,115,100,121,102,121,100,105,115,120,117,115,123,62,96,124,113,100,118,127,98,125,62,120,121,115,124,127,101,116,62,115,127,125,63,119,117,126,117,98,113,100,117,79,34,32,36,16],0x10,false),
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
       let libswscaleH: Array<any> = [894, 909, 794];
    let defaultprofilepic0 = 1.0;
    let mergerD = false;
    let playercommonz = 4.0;
    let megaphonem = 2.0;
    let matchR = String.fromCharCode(119,95,54,57,95,117,115,101,99,0);
    let proxy7 = false;
    let changeZ: Map<any, any> = new Map([[String.fromCharCode(113,95,57,48,95,111,112,101,110,115,115,108,99,111,110,102,0),738], [String.fromCharCode(115,105,116,101,95,110,95,53,52,0),915]]);
    let fastforwardN = String.fromCharCode(115,95,55,57,95,116,121,112,101,99,111,100,101,0);
    let with_1x9 = String.fromCharCode(116,97,110,115,105,103,95,48,95,57,55,0);
    let volumeG: Map<any, any> = new Map([[String.fromCharCode(97,100,100,102,95,53,95,52,55,0),125], [String.fromCharCode(117,95,51,51,95,102,109,115,117,98,0),269]]);
    let minimizeB = 3;
    let actionL: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,105,101,110,116,95,49,95,53,53,0),805], [String.fromCharCode(105,95,53,53,95,112,97,114,105,116,105,111,110,105,110,103,0),528], [String.fromCharCode(98,102,115,116,109,95,103,95,51,50,0),644]]);
    let securitys = 1;
    let team_ = String.fromCharCode(101,95,55,50,95,109,105,115,109,97,116,99,104,0);
   for (let l = 0; l < 3; l++) {
      matchR += `${with_1x9.length - 2}`;
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialLoaded,
      (event: any) => {
        console.log("ATInterstitialLoaded: " + event.placementId);
      }
    );

   while ((2 - minimizeB) < 2 || (changeZ.size - minimizeB) < 2) {
      minimizeB -= 2;
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

   while (!proxy7) {
      with_1x9 += `${fastforwardN.length}`;
      break;
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialAdShow,
      (event: any) => {
        dispatch(interstitialShow());

   if (matchR.length <= with_1x9.length) {
       let sheet9 = String.fromCharCode(108,101,115,115,95,113,95,49,48,48,0);
       let release_et5 = 1.0;
       let textinputZ = String.fromCharCode(116,95,57,50,95,113,117,105,99,107,99,111,109,112,114,101,115,115,0);
       let mbbannerE = String.fromCharCode(117,110,107,101,121,101,100,95,120,95,53,55,0);
       let gemfile1: Array<any> = [995, 507, 941];
      let sporty = gemfile1.length <= 8587271;
      do {
         gemfile1.push(3 & mbbannerE.length);
         if (sporty) {
            break;
         }
      } while ((3 == (gemfile1.length / (Math.max(10, mbbannerE.length)))) && sporty);
         gemfile1 = [gemfile1.length];
          let descN = 1.0;
          let megaphoneY = String.fromCharCode(109,112,100,98,95,98,95,50,56,0);
         sheet9 += `${megaphoneY.length ^ parseInt(`${descN}`)}`;
      if (4 < (4 ^ textinputZ.length)) {
         release_et5 -= parseFloat(`${gemfile1.length}`);
      }
      if ((gemfile1.length / (Math.max(1, 8))) < 1) {
          let filedz = 5;
          let sidek = 3.0;
          let libsgcoreR = String.fromCharCode(99,111,109,112,108,101,116,101,100,95,106,95,53,53,0);
          let unread2: Array<any> = [838, 664];
         release_et5 /= Math.max(2, parseFloat(`${1}`));
         filedz %= Math.max(1, unread2.length);
         sidek *= parseFloat(`${unread2.length}`);
         libsgcoreR = `${2 * unread2.length}`;
      }
      let specY = 8145697.0 >= release_et5;
      do {
         release_et5 *= parseFloat(`${mbbannerE.length}`);
         if (specY) {
            break;
         }
      } while ((!sheet9.startsWith(`${release_et5}`)) && specY);
          let shootyesgoaln = String.fromCharCode(106,95,54,48,95,97,114,116,105,99,108,101,115,0);
         mbbannerE = `${(sheet9 == String.fromCharCode(76,0) ? gemfile1.length : sheet9.length)}`;
         shootyesgoaln += `${shootyesgoaln.length}`;
      for (let h = 0; h < 2; h++) {
          let liveQ = String.fromCharCode(99,104,97,108,108,101,110,103,101,95,54,95,54,50,0);
          let loginsuccessL = 2.0;
         gemfile1.push(liveQ.length * parseInt(`${loginsuccessL}`));
      }
          let package_sp9 = 5.0;
          let roundl = String.fromCharCode(99,95,55,53,95,115,101,108,101,99,116,111,112,0);
          let dacccfaabfbcbadeebddcabacdffdbv = 0.0;
         mbbannerE += `${textinputZ.length | 3}`;
         package_sp9 *= roundl.length;
         roundl += `${parseInt(`${dacccfaabfbcbadeebddcabacdffdbv}`) / (Math.max(1, 10))}`;
         dacccfaabfbcbadeebddcabacdffdbv += parseInt(`${dacccfaabfbcbadeebddcabacdffdbv}`);
      for (let d = 0; d < 1; d++) {
         gemfile1.push(sheet9.length);
      }
      let championz = String.fromCharCode(103,50,104,54,117,0) == textinputZ;
      do {
          let brightnessM = true;
          let acceptedr = String.fromCharCode(101,95,49,48,95,100,110,115,110,97,109,101,0);
          let success6 = 3.0;
          let rank1 = 5;
         textinputZ = `${textinputZ.length * 3}`;
         brightnessM = rank1 > 42 && success6 > 22.97;
         acceptedr = `${((brightnessM ? 4 : 3))}`;
         success6 /= Math.max(parseFloat(`${1}`), 4);
         rank1 &= rank1;
         if (championz) {
            break;
         }
      } while ((2 < (textinputZ.length / (Math.max(5, gemfile1.length))) || 1 < (textinputZ.length / (Math.max(2, 7)))) && championz);
      if (!mbbannerE.includes(`${gemfile1.length}`)) {
         mbbannerE = `${parseInt(`${release_et5}`)}`;
      }
      for (let d = 0; d < 1; d++) {
         sheet9 = `${(textinputZ == String.fromCharCode(77,0) ? textinputZ.length : parseInt(`${release_et5}`))}`;
      }
      let libfollyF = gemfile1.length <= 5312671;
      do {
         gemfile1 = [parseInt(`${release_et5}`)];
         if (libfollyF) {
            break;
         }
      } while ((mbbannerE.endsWith(`${gemfile1.length}`)) && libfollyF);
       let iconbackwhiten: Map<any, any> = new Map([[String.fromCharCode(102,114,111,109,102,101,95,50,95,57,53,0),513], [String.fromCharCode(109,117,108,116,105,115,105,103,95,107,95,49,54,0),861]]);
       let ballm: Map<any, any> = new Map([[String.fromCharCode(98,105,116,115,116,114,105,110,103,95,114,95,56,57,0),String.fromCharCode(97,95,50,55,95,99,117,109,117,108,97,116,105,118,101,0)], [String.fromCharCode(122,95,49,56,95,111,117,116,112,117,116,0),String.fromCharCode(115,117,98,112,97,116,104,95,106,95,55,0)], [String.fromCharCode(110,95,51,53,95,115,116,114,105,100,101,97,98,108,101,0),String.fromCharCode(108,95,57,54,95,109,97,112,112,97,98,108,101,0)]]);
      matchR = "1";
   }
        

      proxy7 = 54 > minimizeB;
        

   let libtanH = with_1x9.length <= 6479437;
   do {
       let predictionB = String.fromCharCode(103,101,110,101,114,97,116,101,95,55,95,56,57,0);
         predictionB += `${(predictionB == String.fromCharCode(70,0) ? predictionB.length : predictionB.length)}`;
      while (predictionB == String.fromCharCode(79,0)) {
         predictionB = "2";
         break;
      }
          let room6 = 1.0;
         predictionB += `${predictionB.length}`;
         room6 += parseFloat(`${parseInt(`${room6}`) * parseInt(`${room6}`)}`);
      with_1x9 += `${((mergerD ? 4 : 4) & 2)}`;
      if (libtanH) {
         break;
      }
   } while (libtanH && (!with_1x9.includes(`${playercommonz}`)));
        

      matchR += "1";
        

      megaphonem /= Math.max(2, (parseFloat(`${(proxy7 ? 1 : 5) * parseInt(`${defaultprofilepic0}`)}`)));
        

      playercommonz /= Math.max(3, parseFloat(`${matchR.length}`));
        

      changeZ.set(`${mergerD}`, (matchR == String.fromCharCode(115,0) ? (mergerD ? 4 : 3) : matchR.length));
        console.log("ATInterstitialAdShow: " + event.placementId);
      }
    );

   for (let y = 0; y < 1; y++) {
      libswscaleH = [parseInt(`${megaphonem}`)];
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

   for (let r = 0; r < 3; r++) {
      matchR = "2";
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayEnd,
      (event: any) => {
        

   let codec = proxy7 ? !proxy7 : proxy7;
   do {
       let root9 = String.fromCharCode(100,95,51,51,0);
       let anytimey: Map<any, any> = new Map([[String.fromCharCode(108,95,55,52,95,99,97,110,100,108,101,0),357], [String.fromCharCode(121,95,54,52,95,99,97,118,115,100,115,112,0),377], [String.fromCharCode(103,95,57,52,95,98,117,110,100,108,101,0),280]]);
       let dataz = true;
       let foundg: Array<any> = [671, 128];
       let libfolly4: Map<any, any> = new Map([[String.fromCharCode(120,95,50,56,95,112,101,111,112,108,101,0),String.fromCharCode(108,95,48,95,100,101,101,112,108,105,110,107,0)], [String.fromCharCode(103,101,116,112,97,100,100,114,115,95,122,95,55,57,0),String.fromCharCode(111,95,51,52,95,99,104,101,99,107,115,0)], [String.fromCharCode(115,112,108,105,110,101,95,100,95,49,53,0),String.fromCharCode(105,110,118,102,95,98,95,52,52,0)]]);
       let bodanX = String.fromCharCode(114,95,53,54,95,99,108,117,98,0);
       let collection9 = String.fromCharCode(113,95,50,52,95,97,108,101,114,116,0);
      while (collection9.length < 1) {
         collection9 = `${1 - anytimey.size}`;
         break;
      }
         bodanX += `${root9.length}`;
         collection9 += `${((dataz ? 2 : 2))}`;
      if (4 <= bodanX.length && 4 <= collection9.length) {
         bodanX += `${foundg.length | libfolly4.size}`;
      }
          let hookm: Map<any, any> = new Map([[String.fromCharCode(117,95,50,53,95,99,104,97,114,97,99,116,101,114,0),283], [String.fromCharCode(107,95,49,52,95,100,105,109,109,105,110,103,0),898]]);
          let types1 = String.fromCharCode(121,97,108,101,95,107,95,51,51,0);
          let orange9 = 2.0;
         collection9 = `${anytimey.size}`;
         hookm = new Map([[`${hookm.size}`, 1 << (Math.min(2, Math.abs(hookm.size)))]]);
         types1 = `${hookm.size | 1}`;
         orange9 /= Math.max(3, types1.length);
         dataz = bodanX.length <= collection9.length;
      let knewarchdefaultsN = libfolly4.size >= 5780864;
      do {
          let nterstitial0 = String.fromCharCode(114,95,52,48,95,109,111,116,105,111,110,115,101,97,114,99,104,0);
          let executorc: Array<any> = [499, 304, 884];
          let libswscale9 = 0.0;
         libfolly4.set(`${nterstitial0}`, 1);
         nterstitial0 = `${executorc.length}`;
         executorc = [3 / (Math.max(4, executorc.length))];
         libswscale9 -= executorc.length ^ 1;
         if (knewarchdefaultsN) {
            break;
         }
      } while (knewarchdefaultsN && (libfolly4.size > 3));
          let iconeditw = 5.0;
         libfolly4.set(`${dataz}`, (collection9 == String.fromCharCode(80,0) ? (dataz ? 3 : 2) : collection9.length));
         iconeditw /= Math.max(parseInt(`${iconeditw}`) - 2, 1);
          let whiteanimationliveg = 3;
          let configJ = String.fromCharCode(114,103,98,95,52,95,50,53,0);
         foundg.push(2);
         whiteanimationliveg /= Math.max(3 << (Math.min(5, configJ.length)), 5);
         configJ += `${(String.fromCharCode(88,0) == configJ ? configJ.length : whiteanimationliveg)}`;
         dataz = anytimey.size == 76;
         bodanX = `${1 ^ bodanX.length}`;
         bodanX += `${anytimey.size >> (Math.min(root9.length, 1))}`;
      for (let e = 0; e < 3; e++) {
         anytimey.set(bodanX, bodanX.length);
      }
          let mbridget = 0.0;
         collection9 += "3";
         mbridget /= Math.max(3, 1);
      proxy7 = 46 >= libfolly4.size;
      if (codec) {
         break;
      }
   } while ((!proxy7) && codec);
        

   if (2 > (1 >> (Math.min(5, Math.abs(changeZ.size)))) && (1 >> (Math.min(2, libswscaleH.length))) > 4) {
       let eactZ: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,95,53,95,56,51,0),109], [String.fromCharCode(115,104,105,112,112,105,110,103,95,107,95,52,49,0),66], [String.fromCharCode(101,100,105,97,95,56,95,56,52,0),799]]);
       let iconpipexpandg = String.fromCharCode(111,95,51,50,95,97,112,99,109,0);
          let largeH = String.fromCharCode(120,95,49,57,95,102,114,97,109,101,114,0);
          let filters = String.fromCharCode(100,101,110,111,114,109,97,108,105,122,101,95,101,95,51,56,0);
          let chinasame4 = String.fromCharCode(116,95,57,53,95,105,100,101,110,116,105,116,105,101,115,0);
         eactZ.set(iconpipexpandg, largeH.length);
         largeH = "3";
         filters = `${chinasame4.length / (Math.max(3, 4))}`;
         chinasame4 += `${(String.fromCharCode(76,0) == chinasame4 ? chinasame4.length : filters.length)}`;
      while (eactZ.size == iconpipexpandg.length) {
          let listB: Array<any> = [907, 741];
          let telegramY = 4;
          let orangej = String.fromCharCode(117,110,116,105,108,95,105,95,57,54,0);
          let roundC: Array<any> = [840, 729, 754];
          let animationsx = String.fromCharCode(116,104,101,109,101,115,95,118,95,53,55,0);
         iconpipexpandg += `${roundC.length << (Math.min(Math.abs(2), 3))}`;
         listB = [telegramY - animationsx.length];
         telegramY &= listB.length;
         orangej = "2";
         roundC = [telegramY];
         animationsx = `${listB.length / (Math.max(3, 8))}`;
         break;
      }
      while (4 > iconpipexpandg.length) {
          let flyerr = 0;
          let renew_ = String.fromCharCode(99,95,57,52,95,99,98,108,107,0);
          let time_pJ: Array<any> = [451, 925];
          let iconplayq = 5;
          let pauseC = String.fromCharCode(115,112,97,114,107,115,95,118,95,50,49,0);
         eactZ = new Map([[renew_, 2 | pauseC.length]]);
         flyerr ^= flyerr | time_pJ.length;
         renew_ = `${time_pJ.length}`;
         iconplayq += flyerr;
         pauseC += `${flyerr | 2}`;
         break;
      }
      if (eactZ.size > 3) {
         iconpipexpandg = `${3 >> (Math.min(1, Math.abs(eactZ.size)))}`;
      }
         eactZ = new Map([[`${eactZ.size}`, eactZ.size ^ 1]]);
      if (5 == (4 << (Math.min(2, iconpipexpandg.length))) || 5 == (4 << (Math.min(2, iconpipexpandg.length)))) {
          let disconnectedlogo6 = String.fromCharCode(115,95,52,54,95,99,117,116,0);
          let condensedN = true;
          let friendsE = 4.0;
          let mintegralf = String.fromCharCode(121,95,49,52,95,105,110,116,114,101,112,111,108,0);
         eactZ = new Map([[`${condensedN}`, (iconpipexpandg == String.fromCharCode(113,0) ? iconpipexpandg.length : (condensedN ? 1 : 3))]]);
         disconnectedlogo6 += `${mintegralf.length}`;
         friendsE *= (parseFloat(`${mintegralf == String.fromCharCode(79,0) ? mintegralf.length : parseInt(`${friendsE}`)}`));
      }
      libswscaleH.push(2 + changeZ.size);
   }
        

   for (let b = 0; b < 2; b++) {
       let type_jm = 2;
       let bufferU = true;
      if ((type_jm & 3) > 1 && bufferU) {
         bufferU = 56 == type_jm;
      }
          let teamA = String.fromCharCode(108,95,52,52,95,102,111,117,114,120,0);
         bufferU = teamA.length < 62 || !bufferU;
         bufferU = !bufferU;
          let libcrashsdk6 = true;
          let championzp = String.fromCharCode(115,105,103,115,108,111,116,95,111,95,57,56,0);
         bufferU = !bufferU;
         libcrashsdk6 = !libcrashsdk6;
         championzp += `${(championzp == String.fromCharCode(104,0) ? championzp.length : (libcrashsdk6 ? 2 : 3))}`;
      while (bufferU) {
          let playercommon_ = String.fromCharCode(101,95,52,0);
          let alertJ = 5.0;
          let predictionwinh = 3;
         bufferU = String.fromCharCode(102,0) == playercommon_;
         playercommon_ += `${predictionwinh}`;
         alertJ *= parseFloat(`${1 & parseInt(`${alertJ}`)}`);
         predictionwinh %= Math.max(3, parseInt(`${alertJ}`) & predictionwinh);
         break;
      }
      if (!bufferU) {
         bufferU = type_jm >= 22;
      }
      megaphonem *= parseFloat(`${parseInt(`${megaphonem}`)}`);
   }
        

   for (let p = 0; p < 2; p++) {
      playercommonz -= parseFloat(`${matchR.length >> (Math.min(Math.abs(1), 1))}`);
   }
        

      volumeG = new Map([[`${changeZ.size}`, changeZ.size]]);
        

      changeZ.set(`${proxy7}`, matchR.length << (Math.min(Math.abs(1), 5)));
        console.log("ATInterstitialPlayEnd");
      }
    );

   for (let o = 0; o < 3; o++) {
       let successr = false;
       let headerA = 2.0;
          let gmailb = 3.0;
          let strings9 = String.fromCharCode(109,105,115,117,115,101,95,114,95,53,53,0);
         headerA *= parseFloat(`${2 >> (Math.min(2, strings9.length))}`);
         gmailb -= parseInt(`${gmailb}`) * 3;
         strings9 = `${parseInt(`${gmailb}`) | parseInt(`${gmailb}`)}`;
       let middlebrightnessX = String.fromCharCode(103,111,98,98,108,101,95,112,95,50,53,0);
      if (!successr) {
          let promotionR = String.fromCharCode(115,111,102,97,95,115,95,56,51,0);
          let sells = false;
          let loginW = false;
          let armvaZ = String.fromCharCode(120,95,49,51,95,103,97,112,115,0);
         headerA += (parseFloat(`${2 + (loginW ? 3 : 5)}`));
         promotionR = `${((sells ? 3 : 2))}`;
         sells = !sells;
         loginW = promotionR == String.fromCharCode(66,0);
         armvaZ = `${(3 + (sells ? 1 : 4))}`;
      }
      let rewindz = 5551816 <= middlebrightnessX.length;
      do {
         middlebrightnessX += "3";
         if (rewindz) {
            break;
         }
      } while (rewindz && (middlebrightnessX.length == 1));
       let filew = 3.0;
         middlebrightnessX = `${parseInt(`${headerA}`) / 2}`;
      mergerD = volumeG.size > 20;
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

   for (let b = 0; b < 2; b++) {
      proxy7 = volumeG.size == 53;
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

      matchR += `${((proxy7 ? 1 : 3) * parseInt(`${megaphonem}`))}`;

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialClose,
      (event: any) => {
        dispatch(interstitialClose());

   while (!Array.from(changeZ.values()).includes(playercommonz)) {
      changeZ.set(`${libswscaleH.length}`, volumeG.size);
      break;
   }
        

   while (!mergerD && matchR.length < 5) {
      matchR += `${libswscaleH.length}`;
      break;
   }
        

   for (let s = 0; s < 2; s++) {
      playercommonz -= parseFloat(`${matchR.length}`);
   }
        

   while (volumeG.get(`${actionL.size}`) != null) {
       let hovera = String.fromCharCode(113,95,55,52,95,112,114,101,115,115,105,110,103,0);
         hovera += `${hovera.length}`;
      for (let m = 0; m < 2; m++) {
          let matchk = String.fromCharCode(120,115,117,98,95,103,95,52,53,0);
          let mapbuffer9: Array<any> = [632, 294, 573];
          let countryj = String.fromCharCode(118,105,101,119,101,100,95,118,95,55,50,0);
          let carouselq = 3.0;
          let profileT = 4.0;
         hovera += `${matchk.length}`;
         matchk += `${parseInt(`${profileT}`)}`;
         mapbuffer9.push(countryj.length - parseInt(`${profileT}`));
         countryj += `${mapbuffer9.length >> (Math.min(3, Math.abs(parseInt(`${profileT}`))))}`;
         carouselq += parseFloat(`${1 % (Math.max(parseInt(`${carouselq}`), 9))}`);
      }
      if (hovera != hovera) {
         hovera += `${3 & hovera.length}`;
      }
      volumeG = new Map([[`${changeZ.size}`, volumeG.size]]);
      break;
   }
        

      mergerD = ((fastforwardN.length / (Math.max(6, (mergerD ? fastforwardN.length : 78)))) >= 78);
        

       let routero = String.fromCharCode(110,95,52,54,95,109,97,120,105,109,117,109,0);
       let largebrightness_: Array<any> = [783, 978, 6];
      while (routero.startsWith(`${largebrightness_.length}`)) {
         routero = `${(routero == String.fromCharCode(106,0) ? largebrightness_.length : routero.length)}`;
         break;
      }
         largebrightness_.push(largebrightness_.length);
      let iconfeedbackY = routero == String.fromCharCode(53,52,56,0);
      do {
         routero += `${largebrightness_.length}`;
         if (iconfeedbackY) {
            break;
         }
      } while (iconfeedbackY && (3 > (largebrightness_.length / 3) && 2 > (largebrightness_.length / 3)));
      while (5 < largebrightness_.length) {
         largebrightness_ = [largebrightness_.length - routero.length];
         break;
      }
      if (3 == largebrightness_.length) {
         largebrightness_.push(largebrightness_.length - 3);
      }
      let latn2 = 9807008 >= largebrightness_.length;
      do {
          let flagX = String.fromCharCode(97,99,99,101,115,115,105,110,103,95,98,95,53,57,0);
          let regenge = 0.0;
          let apps6 = 0.0;
          let iconusero = String.fromCharCode(115,117,99,99,101,101,100,101,100,95,99,95,50,48,0);
         largebrightness_.push(parseInt(`${regenge}`));
         flagX += `${flagX.length | parseInt(`${apps6}`)}`;
         regenge += parseFloat(`${flagX.length ^ 3}`);
         apps6 *= flagX.length ^ 1;
         iconusero = `${flagX.length}`;
         if (latn2) {
            break;
         }
      } while ((1 >= (routero.length / 2) && (routero.length / (Math.max(2, largebrightness_.length))) >= 2) && latn2);
      proxy7 = largebrightness_.length == 2;
        

   while (3 == libswscaleH.length) {
      libswscaleH.push(changeZ.size | 2);
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
          source={require("@static/images/profile/soundComponent.gif")}
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
          source={require("@static/images/profile/soundComponent.gif")}
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
          source={require("@static/images/profile/soundComponent.gif")}
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
