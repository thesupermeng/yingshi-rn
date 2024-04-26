

class DefaultlogoFill {
    static middlebrightnessAssistIconLatn = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { AllCommentScreen } from "../screens/ww_iconbackwhite_sans";
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
import HotSearchTabIcon from "@static/images/stringPrivatechatbg.svg";
import HotSearchActiveTabIcon from "@static/images/stringPrivatechatbg.svg";
import CatalogScreen from "../screens/Common/ww_ping_iconsubssuccess";
import ShortVodCollectionScreen from "../screens/Profile/Collection/ww_megaphone_dycreator";
import SportsIcon from "@static/images/imagesVideo.svg";
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
import { LogBox, Platform, StyleSheet, Text, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/ww_catagory_neon";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_DOMAIN, UMENG_CHANNEL } from "@utility/ww_icon";
import { wwAbidetect } from "../../../ww_leakchecker";
import {
  hideLoginAction,
  interstitialClose,
  interstitialShow,
  removeScreenAction,
  resetBottomSheetAction,
  resetSportWatchTime,
} from "@redux/actions/ww_hash";
import { Dialog } from "@rneui/themed";
import FastImage from "../components/common/ww_result";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import { YingshiDarkTheme, YingshiLightTheme } from "@utility/ww_libtan_screen";
import {
  updateUserAuth,
  updateUserReferral,
} from "@redux/actions/ww_libreactperfloggerjni_small";
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
import { AdsBannerContext } from "../../contexts/ww_setting";
import VIP from "../screens/Profile/ww_delegate_network";
import { withIAPContext } from "react-native-iap";
import { VipDetails } from "../components/vip/ww_native_sort";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { ATInterstitialRNSDK } from "./../../../AnyThinkAds/ww_basketball";
import { wwIconscheduleColors } from "@api";
import { CRouteInitializer } from "../../routes/ww_with_gray";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";
import Rank from "@iosScreen/screens/HotSearch/ww_more_sell";
import { UploadVideoPreview } from "@iosScreen/screens/upload/ww_selection_view";
import { UploadHistory } from "@iosScreen/screens/upload/ww_reactnativeultimatelistview_libswscale";
import { UploadVideo } from "@iosScreen/screens/upload/ww_middle";

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

  const HomeTabScreen = useCallback(() => {
       let rewindu = true;
    let livenodatabgimgN = String.fromCharCode(117,110,109,97,114,107,95,54,95,55,0);
    let detailsM: Map<any, any> = new Map([[String.fromCharCode(112,97,105,114,119,105,115,101,95,98,95,53,57,0),909], [String.fromCharCode(115,97,102,101,116,121,95,53,95,50,57,0),538], [String.fromCharCode(119,111,114,107,97,114,111,117,110,100,95,50,95,52,0),599]]);
    let dangerG = 1.0;
    let bufferH = 0.0;
    let gifgoalbg6 = 2.0;
    let viewsp = String.fromCharCode(103,95,55,52,95,97,115,107,105,110,103,0);
    let shrinko: Array<any> = [String.fromCharCode(116,114,105,101,95,54,95,49,54,0), String.fromCharCode(117,114,97,110,100,111,109,95,117,95,49,54,0), String.fromCharCode(112,111,108,105,99,101,95,103,95,53,48,0)];
    let rules0 = 4.0;
    let arrowrighta = true;
    let bggradienta = String.fromCharCode(99,95,51,54,95,111,112,101,114,97,116,111,114,0);
    let privacyA: Map<any, any> = new Map([[String.fromCharCode(98,95,49,55,95,111,112,116,103,114,111,117,112,0),240], [String.fromCharCode(97,95,54,48,95,100,105,118,109,111,100,0),417]]);
       let customS = String.fromCharCode(101,95,49,51,95,109,102,113,101,0);
       let statisticsinactives = true;
      while (!customS.endsWith(`${statisticsinactives}`)) {
         customS = `${(1 | (statisticsinactives ? 4 : 4))}`;
         break;
      }
         customS = `${(customS.length ^ (statisticsinactives ? 4 : 3))}`;
         customS = `${((statisticsinactives ? 3 : 2) >> (Math.min(customS.length, 5)))}`;
      let yellowvideoliveF = statisticsinactives ? !statisticsinactives : statisticsinactives;
      do {
         statisticsinactives = customS.length > 57;
         if (yellowvideoliveF) {
            break;
         }
      } while ((statisticsinactives || 5 < customS.length) && yellowvideoliveF);
          let predictionP = String.fromCharCode(101,95,53,54,95,99,114,105,116,105,99,97,108,0);
          let orangeclockl = String.fromCharCode(119,105,100,116,104,115,95,97,95,57,48,0);
          let libglogR = String.fromCharCode(120,95,54,52,95,117,110,105,119,103,116,0);
         customS = `${(libglogR == String.fromCharCode(113,0) ? customS.length : libglogR.length)}`;
         predictionP += `${1 & predictionP.length}`;
         orangeclockl = `${(predictionP == String.fromCharCode(117,0) ? orangeclockl.length : predictionP.length)}`;
          let videop = 1.0;
         statisticsinactives = !customS.includes(`${statisticsinactives}`);
         videop += parseFloat(`${parseInt(`${videop}`)}`);
      arrowrighta = rewindu;
      livenodatabgimgN = `${parseInt(`${gifgoalbg6}`) * parseInt(`${rules0}`)}`;
   if ((rules0 - 3.58) == 5.14 || 5.64 == (3.58 - rules0)) {
      rules0 -= parseFloat(`${viewsp.length}`);
   }
   if (Array.from(detailsM.keys()).includes(`${dangerG}`)) {
       let yellowanimationlivej = String.fromCharCode(104,95,51,51,95,105,110,116,101,103,114,105,116,121,0);
       let componentsA = String.fromCharCode(99,95,53,48,95,105,114,99,97,109,0);
       let darkq = 4;
       let iconuserd = String.fromCharCode(104,95,54,57,95,110,116,101,114,110,97,108,0);
          let animationsz = String.fromCharCode(108,95,48,95,117,110,98,111,120,0);
         iconuserd += `${3 >> (Math.min(3, componentsA.length))}`;
         animationsz = `${animationsz.length % 2}`;
      for (let t = 0; t < 1; t++) {
         darkq >>= Math.min(Math.abs(componentsA.length << (Math.min(yellowanimationlivej.length, 4))), 2);
      }
         componentsA += "1";
          let miniZ = String.fromCharCode(116,101,97,114,100,111,119,110,95,99,95,51,51,0);
         componentsA = `${yellowanimationlivej.length ^ 1}`;
         miniZ += "2";
         componentsA += `${(String.fromCharCode(121,0) == componentsA ? componentsA.length : darkq)}`;
       let whitetickZ = String.fromCharCode(111,95,52,50,95,114,101,99,101,105,118,101,100,0);
       let checkboxe = String.fromCharCode(119,95,48,95,100,101,99,114,101,109,101,110,116,0);
      let progress8 = iconuserd.length <= 9560583;
      do {
         iconuserd = `${yellowanimationlivej.length | 2}`;
         if (progress8) {
            break;
         }
      } while ((4 >= (5 - darkq) && (5 - darkq) >= 5) && progress8);
          let miniL = String.fromCharCode(103,95,49,53,95,100,101,106,117,100,100,101,114,0);
          let tumbnailF = true;
          let yellowanimationlivet = 5.0;
         whitetickZ += `${1 - parseInt(`${yellowanimationlivet}`)}`;
         miniL = "1";
         tumbnailF = miniL.length >= 5;
         yellowanimationlivet += (parseFloat(`${(tumbnailF ? 4 : 3)}`));
      while (componentsA.length == checkboxe.length) {
          let orangeq = String.fromCharCode(102,95,52,55,95,116,104,117,109,98,115,117,112,0);
          let carouselu = false;
          let klevin1 = 3.0;
         checkboxe += `${componentsA.length}`;
         orangeq = `${parseInt(`${klevin1}`) - 2}`;
         carouselu = orangeq.length < 65 && !carouselu;
         klevin1 += parseFloat(`${parseInt(`${klevin1}`) >> (Math.min(2, Math.abs(1)))}`);
         break;
      }
       let filedQ = 5;
      for (let o = 0; o < 1; o++) {
          let renewg = true;
         darkq %= Math.max(1, yellowanimationlivej.length - componentsA.length);
         renewg = (renewg ? renewg : !renewg);
      }
      let dragn = String.fromCharCode(56,121,51,107,55,48,53,50,99,0) == checkboxe;
      do {
          let darkS = 0.0;
          let halffieldimageZ = 2.0;
          let libsgcorep: Map<any, any> = new Map([[String.fromCharCode(103,95,50,52,95,101,120,116,110,0),735], [String.fromCharCode(114,95,54,49,95,99,112,117,117,115,101,100,0),29], [String.fromCharCode(117,110,100,101,114,108,121,105,110,103,95,115,95,50,53,0),402]]);
          let langU = String.fromCharCode(101,118,101,110,95,97,95,50,48,0);
         checkboxe += `${langU.length << (Math.min(whitetickZ.length, 1))}`;
         darkS += parseFloat(`${libsgcorep.size * 2}`);
         halffieldimageZ -= 3;
         libsgcorep.set(`${darkS}`, 3);
         langU = `${parseInt(`${halffieldimageZ}`)}`;
         if (dragn) {
            break;
         }
      } while ((5 == whitetickZ.length) && dragn);
      detailsM.set(`${darkq}`, darkq);
   }
   for (let r = 0; r < 2; r++) {
      gifgoalbg6 *= parseFloat(`${parseInt(`${bufferH}`) - 2}`);
   }
       let questiconA = 2.0;
       let downloadedo = 4;
         questiconA += parseFloat(`${parseInt(`${questiconA}`) + downloadedo}`);
         questiconA *= parseFloat(`${downloadedo}`);
      detailsM = new Map([[`${bufferH}`, ((arrowrighta ? 2 : 2) + parseInt(`${bufferH}`))]]);
   while (gifgoalbg6 <= 2.71) {
       let greyarrowupk = 0.0;
         greyarrowupk /= Math.max(3, parseFloat(`${parseInt(`${greyarrowupk}`)}`));
       let eactS: Array<any> = [String.fromCharCode(115,95,51,95,101,110,102,111,114,99,101,0), String.fromCharCode(111,95,57,51,95,99,105,112,104,101,114,0), String.fromCharCode(105,95,51,55,95,101,102,102,101,99,116,105,118,101,0)];
       let linkh: Array<any> = [String.fromCharCode(104,95,55,57,95,115,107,101,119,101,100,0), String.fromCharCode(116,102,114,97,95,48,95,53,53,0), String.fromCharCode(112,114,101,108,105,109,105,110,97,114,121,95,119,95,57,51,0)];
         greyarrowupk *= parseFloat(`${parseInt(`${greyarrowupk}`)}`);
      gifgoalbg6 += parseFloat(`${parseInt(`${dangerG}`)}`);
      break;
   }
      dangerG -= (parseFloat(`${viewsp == String.fromCharCode(83,0) ? (rewindu ? 3 : 5) : viewsp.length}`));
      detailsM = new Map([[`${gifgoalbg6}`, (viewsp == String.fromCharCode(68,0) ? viewsp.length : parseInt(`${gifgoalbg6}`))]]);
      rules0 *= (parseFloat(`${(arrowrighta ? 5 : 4) << (Math.min(Math.abs(parseInt(`${bufferH}`)), 1))}`));
   if (2 <= viewsp.length) {
       let utilsT = String.fromCharCode(105,95,53,48,95,108,111,103,100,98,0);
       let inactived = String.fromCharCode(100,105,109,101,110,115,105,116,111,110,115,95,114,95,52,56,0);
       let stationsg: Array<any> = [719, 803, 801];
       let selectg = String.fromCharCode(104,95,51,55,95,115,116,115,100,0);
         inactived += "1";
         utilsT += "1";
      for (let g = 0; g < 3; g++) {
          let l_lock6 = String.fromCharCode(100,105,115,112,111,115,97,98,108,101,115,95,48,95,57,54,0);
          let confirmationq = 1;
          let baselinen: Array<any> = [871, 747];
          let webviewm = 0.0;
         selectg = `${l_lock6.length}`;
         l_lock6 += "1";
         confirmationq |= 3;
         baselinen = [confirmationq];
         webviewm += parseFloat(`${3 << (Math.min(1, baselinen.length))}`);
      }
      if (utilsT.startsWith(`${stationsg.length}`)) {
         stationsg.push(2);
      }
      if (!inactived.startsWith(`${stationsg.length}`)) {
          let checkboxS = String.fromCharCode(98,95,51,49,95,115,116,101,112,115,105,122,101,0);
          let paginationS = String.fromCharCode(111,110,118,101,114,115,97,116,105,111,110,95,109,95,56,53,0);
          let defaultprofilepicO = 1;
         stationsg = [utilsT.length];
         checkboxS += `${paginationS.length}`;
         paginationS = `${defaultprofilepicO}`;
         defaultprofilepicO /= Math.max(checkboxS.length ^ paginationS.length, 5);
      }
      let matchactive_ = selectg.length >= 7918752;
      do {
         selectg += `${stationsg.length}`;
         if (matchactive_) {
            break;
         }
      } while ((4 < (selectg.length - 1)) && matchactive_);
         inactived += `${inactived.length}`;
      for (let f = 0; f < 3; f++) {
         stationsg.push(inactived.length / 1);
      }
         inactived = `${(selectg == String.fromCharCode(121,0) ? stationsg.length : selectg.length)}`;
      for (let d = 0; d < 3; d++) {
          let injuryg = false;
          let dialogs = String.fromCharCode(97,100,118,97,110,99,105,110,103,95,122,95,49,48,0);
          let privacyl = true;
         inactived = `${2 & dialogs.length}`;
         injuryg = !injuryg || privacyl;
         dialogs = `${(3 % (Math.max((injuryg ? 1 : 2), 8)))}`;
      }
          let type_kd: Array<any> = [691, 609, 65];
          let episodesK = true;
          let containerR = false;
         stationsg = [2];
         type_kd.push(((episodesK ? 2 : 1) ^ 1));
         episodesK = (67 >= ((containerR ? type_kd.length : 67) % (Math.max(type_kd.length, 10))));
       let predictionactiveu: Array<any> = [337, 642];
       let stringD: Array<any> = [418, 445];
      bufferH *= selectg.length;
   }
   if ((livenodatabgimgN.length ^ 4) == 5 && 3 == (4 >> (Math.min(4, livenodatabgimgN.length)))) {
      bufferH += 2;
   }
      livenodatabgimgN += `${1 | parseInt(`${dangerG}`)}`;
   while (1.81 == (3.60 - bufferH) || 5.16 == (3.60 * dangerG)) {
      bufferH *= 2;
      break;
   }
   let loginsuccesst = 6001654 >= bggradienta.length;
   do {
      bggradienta += `${detailsM.size}`;
      if (loginsuccesst) {
         break;
      }
   } while (((bggradienta.length & 4) >= 1) && loginsuccesst);
      arrowrighta = bggradienta.length < shrinko.length;
      bggradienta += `${detailsM.size >> (Math.min(Math.abs(2), 2))}`;
      arrowrighta = !arrowrighta || bggradienta.length < 34;
   while (4.16 >= (3.83 + rules0)) {
      bggradienta = `${bggradienta.length ^ 3}`;
      break;
   }
      rewindu = viewsp == String.fromCharCode(68,0);
      bufferH += 1;
   for (let n = 0; n < 3; n++) {
      rules0 -= (parseFloat(`${(rewindu ? 4 : 2) ^ detailsM.size}`));
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
        {wwAbidetect.instance.tabConfig != null && wwAbidetect.instance.len == 5 ? (
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
       let sellp = String.fromCharCode(112,95,54,95,105,110,116,101,102,97,99,101,0);
    let v_playerw: Array<any> = [236, 383];
    let eactX = 1.0;
    let vipsportO = String.fromCharCode(106,95,55,56,95,105,109,112,117,108,115,101,0);
    let headerN: Map<any, any> = new Map([[String.fromCharCode(98,95,56,51,95,116,119,105,116,116,101,114,0),true ], [String.fromCharCode(113,117,97,100,95,55,95,52,0),true ]]);
    let booti = false;
    let calendar2 = String.fromCharCode(97,116,116,114,97,99,116,105,111,110,95,121,95,53,48,0);
    let subsS = 0;
    let reward4 = 4.0;
    let profileframeL: Map<any, any> = new Map([[String.fromCharCode(115,116,97,116,101,95,113,95,57,50,0),true ], [String.fromCharCode(102,111,114,119,97,114,100,115,95,109,95,57,51,0),true ]]);
    let libavcodecl = true;
    let roundT = 3.0;
    let libfbjniY: Array<any> = [287, 262];
    let yingW = String.fromCharCode(109,115,115,100,115,112,95,115,95,49,0);
    let leftX: Array<any> = [325, 917];
    let debugc = 2;
    let arrowright_ = String.fromCharCode(110,95,51,56,95,108,111,99,97,108,105,122,101,100,0);
      sellp = "3";
      roundT += parseFloat(`${v_playerw.length}`);
   let forwards = 7365015.0 >= eactX;
   do {
      eactX *= libfbjniY.length - 1;
      if (forwards) {
         break;
      }
   } while ((libavcodecl && 3.2 >= (eactX / 3.5)) && forwards);
   for (let s = 0; s < 3; s++) {
      eactX /= Math.max(5, (v_playerw.length * (libavcodecl ? 1 : 4)));
   }

    const result = await wwIconscheduleColors.getUserDetails();

       let viewsU = 5.0;
       let clear_: Array<any> = [989, 247, 71];
       let rankd = 5.0;
         rankd *= clear_.length;
      if (2 <= (clear_.length + 3)) {
          let iconwechaty = String.fromCharCode(110,95,54,51,95,105,115,112,97,116,99,104,0);
          let gesturel = String.fromCharCode(108,95,55,53,95,97,117,116,111,99,111,114,114,101,108,97,116,101,0);
         rankd /= Math.max(iconwechaty.length ^ 1, 1);
         iconwechaty += "1";
         gesturel += `${(gesturel == String.fromCharCode(85,0) ? gesturel.length : gesturel.length)}`;
      }
      if (rankd >= viewsU) {
          let textinput3 = String.fromCharCode(113,109,105,110,109,97,120,95,99,95,52,55,0);
         viewsU /= Math.max(1, parseFloat(`${textinput3.length << (Math.min(4, Math.abs(parseInt(`${viewsU}`))))}`));
      }
         viewsU -= parseFloat(`${clear_.length}`);
      for (let h = 0; h < 3; h++) {
         rankd -= parseInt(`${viewsU}`);
      }
      while ((clear_.length * parseInt(`${rankd}`)) < 1 || 4 < (clear_.length - 1)) {
         clear_ = [parseInt(`${rankd}`)];
         break;
      }
          let telegramw = String.fromCharCode(120,95,51,49,95,98,111,117,110,99,105,110,103,0);
          let moduleQ = 3;
          let rewardvideoh = 4.0;
         clear_.push(parseInt(`${rewardvideoh}`) >> (Math.min(Math.abs(1), 4)));
         telegramw = `${telegramw.length >> (Math.min(Math.abs(1), 5))}`;
         moduleQ /= Math.max(2, 5);
         rewardvideoh /= Math.max(2, 4);
      for (let f = 0; f < 2; f++) {
          let coreG = String.fromCharCode(97,112,112,95,56,95,52,55,0);
         rankd -= clear_.length;
         coreG += `${2 & coreG.length}`;
      }
      for (let h = 0; h < 2; h++) {
          let catalogN = String.fromCharCode(100,95,52,55,95,115,116,117,102,102,115,116,0);
          let dplusm = String.fromCharCode(111,95,57,95,116,97,114,103,97,0);
         clear_ = [dplusm.length | parseInt(`${viewsU}`)];
         catalogN += `${catalogN.length & catalogN.length}`;
         dplusm += `${3 / (Math.max(8, catalogN.length))}`;
      }
      headerN = new Map([[`${headerN.size}`, 2 & headerN.size]]);
      eactX *= v_playerw.length;
   for (let r = 0; r < 3; r++) {
       let f_imageX = false;
      if (!f_imageX) {
          let plusy = false;
         f_imageX = !plusy;
      }
         f_imageX = !f_imageX;
          let private_t61 = String.fromCharCode(117,95,49,48,95,115,105,102,116,0);
          let mergerv = false;
         f_imageX = mergerv;
         private_t61 += `${private_t61.length / (Math.max(6, private_t61.length))}`;
      subsS /= Math.max(2, parseInt(`${reward4}`) / 2);
   }
      headerN = new Map([[vipsportO, 3]]);
    if (result == null) {

       let whistle6 = String.fromCharCode(112,97,114,97,109,101,116,114,105,122,101,100,95,104,95,52,56,0);
       let loginsuccessN: Array<any> = [128, 208, 981];
       let description_yd: Array<any> = [553, 803];
          let runtimeK = String.fromCharCode(122,95,50,56,95,116,101,115,116,99,111,110,102,105,103,0);
          let whiteS = String.fromCharCode(117,95,54,52,95,111,112,116,103,114,111,117,112,0);
         description_yd.push(whiteS.length + loginsuccessN.length);
         runtimeK = `${(String.fromCharCode(90,0) == runtimeK ? runtimeK.length : runtimeK.length)}`;
         whiteS = `${runtimeK.length}`;
      let videovarT = whistle6 == String.fromCharCode(102,53,103,99,95,55,122,109,50,0);
      do {
         whistle6 = "2";
         if (videovarT) {
            break;
         }
      } while (videovarT && ((whistle6.length << (Math.min(Math.abs(3), 3))) > 1));
      sellp += `${v_playerw.length % 2}`;
   for (let f = 0; f < 3; f++) {
       let anythinkX = String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,95,122,95,56,51,0);
       let reactK = 4;
       let uimanagerJ = String.fromCharCode(119,101,108,115,95,120,95,57,56,0);
       let expandE: Map<any, any> = new Map([[String.fromCharCode(119,95,50,50,95,118,97,97,99,97,108,99,117,108,97,116,105,111,110,0),String.fromCharCode(101,95,50,51,95,112,101,114,105,111,100,0)], [String.fromCharCode(108,115,112,105,95,48,95,55,49,0),String.fromCharCode(99,111,117,110,116,101,114,115,95,102,95,54,54,0)], [String.fromCharCode(121,111,117,114,95,101,95,56,55,0),String.fromCharCode(101,95,55,51,95,100,105,118,105,100,101,114,0)]]);
          let libtanC: Map<any, any> = new Map([[String.fromCharCode(107,95,52,52,95,108,111,99,97,116,101,0),797], [String.fromCharCode(109,95,51,54,95,116,101,115,115,0),997]]);
          let libavcodecX = String.fromCharCode(112,114,101,100,105,99,116,120,95,115,95,51,53,0);
          let redgoall = 3.0;
         uimanagerJ += "3";
         libtanC = new Map([[`${libtanC.size}`, libavcodecX.length | libtanC.size]]);
         libavcodecX += `${libavcodecX.length % (Math.max(3, 4))}`;
         redgoall *= parseFloat(`${parseInt(`${redgoall}`) ^ 2}`);
         expandE = new Map([[`${expandE.size}`, 2 >> (Math.min(4, Math.abs(expandE.size)))]]);
      for (let m = 0; m < 2; m++) {
          let completeC = false;
          let reducerm = String.fromCharCode(99,104,101,99,107,98,111,120,95,50,95,56,53,0);
         anythinkX = `${(2 / (Math.max(9, (completeC ? 4 : 5))))}`;
         completeC = reducerm.length <= reducerm.length;
      }
         uimanagerJ = `${expandE.size}`;
          let mbnativeadvancedr = 3.0;
          let defaultroombgJ = String.fromCharCode(108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,95,121,95,51,50,0);
         reactK |= 1 + reactK;
         mbnativeadvancedr /= Math.max((parseFloat(`${defaultroombgJ == String.fromCharCode(95,0) ? defaultroombgJ.length : parseInt(`${mbnativeadvancedr}`)}`)), 3);
      for (let g = 0; g < 1; g++) {
         anythinkX = `${(uimanagerJ == String.fromCharCode(95,0) ? uimanagerJ.length : reactK)}`;
      }
          let imagesg = 5.0;
          let clear1 = 3.0;
         uimanagerJ += `${parseInt(`${clear1}`) << (Math.min(Math.abs(expandE.size), 1))}`;
         imagesg -= parseFloat(`${parseInt(`${imagesg}`) + 3}`);
         clear1 /= Math.max(parseInt(`${imagesg}`), 2);
      if (1 <= (expandE.size % (Math.max(uimanagerJ.length, 3))) || (uimanagerJ.length % (Math.max(7, expandE.size))) <= 1) {
          let videojsV = 5;
         uimanagerJ += `${expandE.size}`;
         videojsV ^= 1;
      }
      for (let w = 0; w < 2; w++) {
         expandE = new Map([[`${expandE.size}`, (uimanagerJ == String.fromCharCode(112,0) ? expandE.size : uimanagerJ.length)]]);
      }
      if (2 == uimanagerJ.length) {
          let progressz: Map<any, any> = new Map([[String.fromCharCode(106,95,55,57,95,114,110,103,115,0),String.fromCharCode(107,95,49,52,95,97,99,107,110,111,119,108,101,100,103,101,100,0)], [String.fromCharCode(100,95,50,51,95,116,114,97,110,115,112,111,115,101,100,0),String.fromCharCode(111,95,55,57,95,98,98,111,120,0)]]);
          let dialogU = String.fromCharCode(113,95,57,48,0);
          let dycreatorQ = String.fromCharCode(112,95,55,49,95,100,101,112,116,104,0);
         uimanagerJ += `${dialogU.length / 1}`;
         progressz.set(dycreatorQ, 3 + dycreatorQ.length);
         dialogU = `${1 - dycreatorQ.length}`;
      }
      let libsgcore1 = anythinkX.length <= 6530953;
      do {
         anythinkX = `${reactK - 3}`;
         if (libsgcore1) {
            break;
         }
      } while (libsgcore1 && ((reactK | 5) >= 3));
      while (4 >= (reactK << (Math.min(anythinkX.length, 3)))) {
         reactK ^= 1 * anythinkX.length;
         break;
      }
      libfbjniY.push(1 ^ anythinkX.length);
   }
      roundT /= Math.max((parseFloat(`${2 >> (Math.min(3, Math.abs((libavcodecl ? 5 : 1))))}`)), 5);
   for (let i = 0; i < 3; i++) {
       let chinaa = 2.0;
       let containerK = 3;
       let scheduleG = 0;
         chinaa -= parseFloat(`${1 / (Math.max(6, containerK))}`);
      for (let l = 0; l < 3; l++) {
         chinaa /= Math.max(parseFloat(`${1}`), 3);
      }
      if (chinaa >= containerK) {
         containerK <<= Math.min(Math.abs(3 | containerK), 5);
      }
      let activityb = scheduleG >= 9804743;
      do {
         scheduleG |= containerK;
         if (activityb) {
            break;
         }
      } while (((3 * containerK) >= 3 || 4 >= (3 * scheduleG)) && activityb);
         containerK -= 3;
         chinaa /= Math.max(2, parseFloat(`${scheduleG << (Math.min(Math.abs(2), 1))}`));
         chinaa -= parseFloat(`${parseInt(`${chinaa}`)}`);
      while ((2.36 + chinaa) <= 1.73) {
         scheduleG -= containerK % (Math.max(parseInt(`${chinaa}`), 10));
         break;
      }
      for (let l = 0; l < 1; l++) {
         containerK *= 3 & containerK;
      }
      v_playerw = [((libavcodecl ? 3 : 3) - parseInt(`${chinaa}`))];
   }
      await AsyncStorage.removeItem("showAds");

   for (let h = 0; h < 3; h++) {
      roundT /= Math.max(parseFloat(`${libfbjniY.length}`), 2);
   }
      headerN = new Map([[`${v_playerw.length}`, parseInt(`${roundT}`) & v_playerw.length]]);
      v_playerw.push(3);
       let customk: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,110,100,105,110,103,95,119,95,52,56,0),false ], [String.fromCharCode(110,111,110,110,117,108,108,95,104,95,52,49,0),true ], [String.fromCharCode(97,100,118,97,110,99,101,100,95,112,95,55,0),true ]]);
       let settingQ = String.fromCharCode(119,95,52,55,95,100,101,114,105,118,101,100,0);
          let defaultpredictionprofileh: Array<any> = [27, 374];
          let reactnavigationR = String.fromCharCode(100,111,110,116,95,101,95,55,56,0);
         settingQ = `${customk.size}`;
         defaultpredictionprofileh.push(reactnavigationR.length);
         reactnavigationR = `${defaultpredictionprofileh.length % (Math.max(reactnavigationR.length, 3))}`;
         customk = new Map([[`${customk.size}`, settingQ.length ^ customk.size]]);
      if ((2 << (Math.min(1, Math.abs(customk.size)))) > 3 && (customk.size << (Math.min(settingQ.length, 1))) > 2) {
          let static_5H = String.fromCharCode(120,95,51,48,95,115,108,105,99,101,115,0);
         settingQ = `${settingQ.length}`;
         static_5H += "3";
      }
      while (5 == (customk.size % 5)) {
          let borderlessg = 1.0;
          let statisticsv = String.fromCharCode(117,110,101,120,112,101,99,116,101,100,95,100,95,49,48,48,0);
          let stylesY: Array<any> = [613, 286];
          let libfollyy = 4;
         settingQ += `${2 & statisticsv.length}`;
         borderlessg -= libfollyy;
         statisticsv += `${parseInt(`${borderlessg}`)}`;
         stylesY.push(libfollyy);
         break;
      }
         customk = new Map([[`${customk.size}`, customk.size]]);
      while (5 < (customk.size | 3)) {
         customk.set(`${settingQ}`, 2);
         break;
      }
      headerN = new Map([[`${v_playerw.length}`, 2 ^ v_playerw.length]]);
      return;
    }

    if (result.user.current_timestamp < result.user.vip_end_time) {

       let collectiong: Array<any> = [925, 848, 905];
      let spinneru = 7066004 >= collectiong.length;
      do {
          let searchbara: Array<any> = [91, 396];
          let viewern: Map<any, any> = new Map([[String.fromCharCode(110,95,51,48,95,109,101,109,98,101,114,115,0),471], [String.fromCharCode(107,95,50,49,95,108,111,116,116,105,101,108,111,97,100,101,114,0),439]]);
          let librrci = 3;
          let tickedd = String.fromCharCode(107,95,52,50,95,114,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0);
          let subsa: Array<any> = [String.fromCharCode(103,95,52,51,95,110,111,110,102,97,116,97,108,0), String.fromCharCode(109,95,49,53,95,97,112,112,114,111,120,0)];
         collectiong = [viewern.size];
         searchbara = [tickedd.length & 1];
         viewern.set(tickedd, subsa.length * tickedd.length);
         librrci ^= librrci;
         subsa.push((tickedd == String.fromCharCode(100,0) ? subsa.length : tickedd.length));
         if (spinneru) {
            break;
         }
      } while (spinneru && (5 == (collectiong.length ^ 1)));
          let libjsis = String.fromCharCode(116,102,117,101,108,95,111,95,49,51,0);
          let pagination2 = String.fromCharCode(97,114,101,95,119,95,51,54,0);
         collectiong.push(pagination2.length - 1);
         libjsis = `${libjsis.length}`;
         pagination2 += `${libjsis.length % 1}`;
      let navigationN = 7774045 <= collectiong.length;
      do {
         collectiong.push(2);
         if (navigationN) {
            break;
         }
      } while (navigationN && (collectiong.includes(collectiong.length)));
      sellp = `${1 & vipsportO.length}`;
      v_playerw = [3 >> (Math.min(1, libfbjniY.length))];
   while (!booti) {
      booti = !libavcodecl;
      break;
   }
   while (libfbjniY.length > 1) {
      vipsportO = `${1 >> (Math.min(3, vipsportO.length))}`;
      break;
   }
      await AsyncStorage.setItem("showAds", "false");
    } else {

   for (let i = 0; i < 3; i++) {
      libavcodecl = !vipsportO.endsWith(`${roundT}`);
   }
       let vignetteT = true;
       let nalyticsb = String.fromCharCode(114,105,102,102,95,111,95,53,0);
      if (nalyticsb.length <= 2 && !vignetteT) {
         vignetteT = nalyticsb.length < 88 && !vignetteT;
      }
      let chartT = vignetteT ? !vignetteT : vignetteT;
      do {
         vignetteT = nalyticsb.length == 17;
         if (chartT) {
            break;
         }
      } while ((nalyticsb.length >= 5) && chartT);
       let libfba = String.fromCharCode(116,117,112,108,101,95,103,95,57,53,0);
       let anythinkb = String.fromCharCode(99,97,108,99,119,95,110,95,51,50,0);
      while (nalyticsb.startsWith(anythinkb)) {
          let dicep = 0.0;
          let gpayr = 4.0;
          let animationF = 5.0;
         anythinkb = `${parseInt(`${gpayr}`) * 3}`;
         dicep *= 3 | parseInt(`${dicep}`);
         gpayr /= Math.max(parseFloat(`${parseInt(`${dicep}`) % (Math.max(parseInt(`${animationF}`), 8))}`), 5);
         animationF += parseInt(`${dicep}`) ^ parseInt(`${animationF}`);
         break;
      }
      while (nalyticsb != String.fromCharCode(106,0)) {
         libfba = `${nalyticsb.length}`;
         break;
      }
      while (nalyticsb == String.fromCharCode(113,0) && anythinkb != String.fromCharCode(52,0)) {
         nalyticsb = `${(String.fromCharCode(107,0) == nalyticsb ? (vignetteT ? 2 : 5) : nalyticsb.length)}`;
         break;
      }
      eactX -= 3 ^ sellp.length;
       let anythinkT = 2;
       let show2: Array<any> = [214, 249];
         anythinkT /= Math.max(3 << (Math.min(4, show2.length)), 4);
      let telegramc = 8816531 >= anythinkT;
      do {
          let foundM: Array<any> = [737, 503];
          let logo0 = 4.0;
          let update_vI = String.fromCharCode(108,111,103,103,101,114,115,95,101,95,50,56,0);
          let rncorem = String.fromCharCode(108,95,49,52,95,108,97,121,101,114,0);
          let canvasH = String.fromCharCode(97,110,110,101,120,98,95,99,95,55,55,0);
         anythinkT >>= Math.min(show2.length, 2);
         foundM.push(1);
         logo0 -= parseFloat(`${2}`);
         update_vI += `${canvasH.length * 2}`;
         rncorem = "2";
         canvasH = `${foundM.length}`;
         if (telegramc) {
            break;
         }
      } while (telegramc && (5 >= (5 & show2.length) && 1 >= (5 & show2.length)));
          let liblogger3 = true;
          let plus6 = false;
         anythinkT |= show2.length;
         liblogger3 = plus6;
         show2.push(show2.length);
      while (!show2.includes(anythinkT)) {
         anythinkT >>= Math.min(5, Math.abs(show2.length % (Math.max(3, 10))));
         break;
      }
         anythinkT += anythinkT + 3;
      profileframeL.set(`${v_playerw.length}`, profileframeL.size);
   if ((1 + calendar2.length) == 5 || (calendar2.length + headerN.size) == 1) {
       let greyH = String.fromCharCode(102,111,114,101,104,101,97,100,95,103,95,53,56,0);
       let proxyw = String.fromCharCode(114,101,103,105,115,116,101,114,102,100,115,95,56,95,54,55,0);
       let eyeopenc = 4.0;
       let with_dy = false;
         eyeopenc /= Math.max((parseFloat(`${(with_dy ? 3 : 4)}`)), 3);
      let uimanager2 = eyeopenc >= 4937636.0;
      do {
         eyeopenc *= parseFloat(`${3 % (Math.max(1, parseInt(`${eyeopenc}`)))}`);
         if (uimanager2) {
            break;
         }
      } while (uimanager2 && ((5 | proxyw.length) == 2 && 4 == (proxyw.length % 5)));
         proxyw += "2";
         proxyw = `${proxyw.length}`;
         proxyw += "2";
          let classesj = String.fromCharCode(121,95,53,51,95,117,110,108,111,99,107,101,100,0);
          let main_hl = 3.0;
          let iconp = String.fromCharCode(100,111,116,116,101,100,95,122,95,57,0);
         proxyw = `${classesj.length}`;
         classesj = `${iconp.length}`;
         main_hl -= parseFloat(`${parseInt(`${main_hl}`)}`);
         iconp += `${(String.fromCharCode(105,0) == iconp ? parseInt(`${main_hl}`) : iconp.length)}`;
         proxyw += `${greyH.length / 2}`;
          let graphicsC = String.fromCharCode(97,99,99,101,115,115,111,114,95,107,95,56,50,0);
          let delegate_cbm = 4;
          let combineV = 2;
         proxyw = `${combineV}`;
         graphicsC += `${delegate_cbm}`;
         delegate_cbm &= graphicsC.length << (Math.min(2, Math.abs(delegate_cbm)));
         combineV <<= Math.min(3, Math.abs((graphicsC == String.fromCharCode(97,0) ? delegate_cbm : graphicsC.length)));
         with_dy = greyH.length >= 24;
          let launche = false;
          let constantsY = 5.0;
          let grayI = 4.0;
         proxyw = `${proxyw.length}`;
         launche = 55.36 > constantsY;
         constantsY += parseFloat(`${parseInt(`${grayI}`) - parseInt(`${constantsY}`)}`);
         grayI *= parseInt(`${constantsY}`) >> (Math.min(5, Math.abs(1)));
         eyeopenc += parseFloat(`${parseInt(`${eyeopenc}`) / (Math.max(2, 1))}`);
         greyH = `${2 ^ parseInt(`${eyeopenc}`)}`;
      headerN.set(greyH, proxyw.length);
   }
      await AsyncStorage.setItem("showAds", "true");
    }
    await dispatch(updateUserAuth(result));

      eactX += sellp.length | parseInt(`${reward4}`);
   while (4.66 > eactX) {
      eactX *= ((booti ? 5 : 1) % (Math.max(headerN.size, 1)));
      break;
   }
   if (libfbjniY.length == parseInt(`${eactX}`)) {
      libfbjniY = [parseInt(`${reward4}`)];
   }
       let recommendationz: Map<any, any> = new Map([[String.fromCharCode(104,95,50,95,112,97,114,116,0),String.fromCharCode(118,101,114,105,102,105,97,98,108,101,95,112,95,49,53,0)], [String.fromCharCode(104,100,110,111,100,101,95,115,95,54,50,0),String.fromCharCode(105,95,53,50,95,109,117,108,116,105,102,114,97,109,101,0)]]);
       let gradlewP = String.fromCharCode(115,95,50,55,95,112,111,108,121,108,105,110,101,0);
       let episodesr = 1.0;
          let filterH = true;
         episodesr /= Math.max(3, gradlewP.length + 3);
         filterH = !filterH;
       let statisticsinactiveg = 0;
       let iconsubssuccess2 = 2;
      for (let m = 0; m < 1; m++) {
         episodesr *= 3;
      }
      for (let i = 0; i < 3; i++) {
          let signinupJ: Map<any, any> = new Map([[String.fromCharCode(120,95,52,51,95,116,119,105,100,100,108,101,0),String.fromCharCode(112,108,105,115,116,95,56,95,55,56,0)], [String.fromCharCode(117,95,55,57,95,105,115,115,101,116,117,103,105,100,0),String.fromCharCode(100,101,99,111,114,114,95,121,95,49,48,0)], [String.fromCharCode(105,97,100,115,116,95,55,95,51,57,0),String.fromCharCode(99,111,109,112,114,101,115,115,105,111,110,95,107,95,51,49,0)]]);
          let adulty = String.fromCharCode(98,95,57,51,95,114,111,111,109,0);
         statisticsinactiveg ^= 1;
         signinupJ = new Map([[`${signinupJ.size}`, 1 - adulty.length]]);
         adulty += `${signinupJ.size}`;
      }
          let tempnodatagifg = 0;
          let scrollviewm = 3;
         gradlewP = `${statisticsinactiveg >> (Math.min(2, Math.abs(2)))}`;
         tempnodatagifg += tempnodatagifg >> (Math.min(Math.abs(1), 4));
         scrollviewm |= tempnodatagifg;
         statisticsinactiveg -= recommendationz.size;
      let storeS = recommendationz.size >= 8843996;
      do {
         recommendationz = new Map([[`${iconsubssuccess2}`, 2]]);
         if (storeS) {
            break;
         }
      } while (storeS && (gradlewP.length <= 5));
      while (recommendationz.size < iconsubssuccess2) {
         recommendationz = new Map([[`${statisticsinactiveg}`, iconsubssuccess2]]);
         break;
      }
       let appleS = 0;
       let darkK = 5;
      roundT *= parseFloat(`${gradlewP.length / (Math.max(1, 1))}`);
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
      wwBodan.isVip(userState.user)
    ) {
      setShowVIPOverlay(true);
    }
  }, [userState.user?.userCurrentTimestamp]);

  
  
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: wwEighteenShirt) => screenReducer
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
        DefaultlogoFill.middlebrightnessAssistIconLatn([-109,-113,-113,-117,-63,-44,-44,-104,-108,-107,-107,-98,-104,-113,-110,-115,-110,-113,-126,-104,-109,-98,-104,-112,-43,-117,-105,-102,-113,-99,-108,-119,-106,-43,-109,-110,-104,-105,-108,-114,-97,-43,-104,-108,-106,-44,-100,-98,-107,-98,-119,-102,-113,-98,-92,-55,-53,-49,-5],0xFB,false),
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
       let footballfiledlayoutN = 3.0;
    let becomeZ = 5.0;
    let scoreU = 4.0;
    let backu: Array<any> = [264, 976];
    let libsentryB = 2.0;
    let debugm = false;
    let yellowvideolive6 = String.fromCharCode(108,95,52,55,95,101,118,101,110,116,115,0);
   while (!backu.includes(becomeZ)) {
       let defaultroombgL = String.fromCharCode(108,95,52,49,95,121,111,117,114,0);
       let shooti: Map<any, any> = new Map([[String.fromCharCode(102,95,56,56,95,112,101,114,115,105,115,116,101,110,99,101,0),String.fromCharCode(112,114,111,103,114,101,115,115,95,115,95,54,52,0)], [String.fromCharCode(115,101,114,105,97,108,110,111,95,121,95,49,54,0),String.fromCharCode(118,95,49,48,95,98,101,101,110,0)], [String.fromCharCode(116,95,57,56,95,101,120,112,101,114,105,109,101,110,116,0),String.fromCharCode(120,95,53,53,95,121,111,117,0)]]);
       let graphicsn = String.fromCharCode(106,111,105,110,116,95,115,95,53,57,0);
       let forwarda: Map<any, any> = new Map([[String.fromCharCode(120,95,50,95,98,108,97,99,107,115,0),673], [String.fromCharCode(100,95,51,50,95,105,102,105,108,116,101,114,0),155]]);
      while (!graphicsn.endsWith(`${forwarda.size}`)) {
          let modulesc = 1;
          let thumbnaili = 5;
         graphicsn = `${3 | modulesc}`;
         modulesc >>= Math.min(2, Math.abs(thumbnaili / (Math.max(4, thumbnaili))));
         break;
      }
      if ((forwarda.size & 4) >= 2) {
         graphicsn = `${defaultroombgL.length - 3}`;
      }
      while (Array.from(forwarda.values()).includes(shooti.size)) {
         forwarda = new Map([[`${shooti.size}`, forwarda.size >> (Math.min(Math.abs(shooti.size), 1))]]);
         break;
      }
          let mbbidN = 3.0;
         forwarda = new Map([[`${forwarda.size}`, defaultroombgL.length]]);
         mbbidN -= parseInt(`${mbbidN}`);
      for (let r = 0; r < 1; r++) {
         defaultroombgL = `${1 & shooti.size}`;
      }
          let pressureo = true;
         graphicsn = `${(defaultroombgL == String.fromCharCode(106,0) ? (pressureo ? 1 : 4) : defaultroombgL.length)}`;
         shooti.set(defaultroombgL, defaultroombgL.length | forwarda.size);
         graphicsn = `${defaultroombgL.length}`;
      for (let b = 0; b < 1; b++) {
          let borderlessq = 0;
          let predictionactive3: Array<any> = [340, 483];
          let thumbnailr: Map<any, any> = new Map([[String.fromCharCode(110,105,99,101,95,53,95,54,57,0),846], [String.fromCharCode(114,101,115,105,103,110,105,110,103,95,112,95,54,48,0),807]]);
          let details7 = true;
          let iconbellactiveV: Array<any> = [10, 11, 943];
         graphicsn = `${predictionactive3.length - forwarda.size}`;
         borderlessq |= borderlessq * 1;
         predictionactive3 = [borderlessq & iconbellactiveV.length];
         thumbnailr.set(`${iconbellactiveV.length}`, thumbnailr.size);
         details7 = thumbnailr.size > 44;
      }
         graphicsn = `${defaultroombgL.length}`;
         defaultroombgL = `${forwarda.size}`;
      if (4 == (graphicsn.length - 2)) {
          let pauseW: Array<any> = [String.fromCharCode(121,95,50,50,95,119,97,107,101,0), String.fromCharCode(109,97,110,97,103,101,115,95,48,95,49,57,0), String.fromCharCode(118,95,55,51,95,97,114,103,0)];
          let iconA = String.fromCharCode(97,99,116,117,97,108,95,120,95,52,56,0);
          let foundP = String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,95,55,95,52,52,0);
          let gpayC = 1.0;
         graphicsn = `${parseInt(`${gpayC}`) ^ forwarda.size}`;
         pauseW.push(foundP.length);
         iconA += `${iconA.length}`;
         foundP += `${pauseW.length - foundP.length}`;
         gpayC -= parseFloat(`${pauseW.length << (Math.min(iconA.length, 3))}`);
      }
      backu = [graphicsn.length];
      break;
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialLoaded,
      (event: any) => {
        console.log("ATInterstitialLoaded: " + event.placementId);
      }
    );

      debugm = debugm || 2.5 > footballfiledlayoutN;

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

      scoreU *= (parseInt(`${becomeZ}`) - (debugm ? 5 : 3));

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialAdShow,
      (event: any) => {
        dispatch(interstitialShow());

      debugm = backu.length > 73;
        

   let castj = 7477424 <= backu.length;
   do {
      backu.push(backu.length);
      if (castj) {
         break;
      }
   } while ((!backu.includes(footballfiledlayoutN)) && castj);
        

       let flyerK: Map<any, any> = new Map([[String.fromCharCode(114,95,53,54,95,100,101,116,101,99,116,111,114,0),String.fromCharCode(120,95,49,48,95,115,117,98,109,118,0)], [String.fromCharCode(98,101,120,116,95,52,95,51,54,0),String.fromCharCode(105,95,55,54,95,112,117,108,108,0)], [String.fromCharCode(105,110,115,101,114,116,115,95,115,95,49,48,0),String.fromCharCode(113,115,118,100,101,105,110,116,95,111,95,50,53,0)]]);
      let mergery = 8243768 >= flyerK.size;
      do {
         flyerK = new Map([[`${flyerK.size}`, flyerK.size % 1]]);
         if (mergery) {
            break;
         }
      } while (((flyerK.size * 3) == 3 || (flyerK.size * flyerK.size) == 3) && mergery);
         flyerK = new Map([[`${flyerK.size}`, 1 ^ flyerK.size]]);
      if (3 <= (flyerK.size * flyerK.size) && 1 <= (3 * flyerK.size)) {
          let libfbj = true;
         flyerK = new Map([[`${flyerK.size}`, (1 - (libfbj ? 2 : 2))]]);
      }
      footballfiledlayoutN -= (parseFloat(`${String.fromCharCode(89,0) == yellowvideolive6 ? yellowvideolive6.length : parseInt(`${footballfiledlayoutN}`)}`));
        

      footballfiledlayoutN -= parseFloat(`${1 + parseInt(`${footballfiledlayoutN}`)}`);
        

      libsentryB += (parseFloat(`${parseInt(`${scoreU}`) ^ (debugm ? 5 : 3)}`));
        

   if (4 <= (yellowvideolive6.length / 1) && 5.1 <= (libsentryB - parseFloat(`${yellowvideolive6.length}`))) {
       let libjsinspectorM = 3;
       let rootW = String.fromCharCode(114,101,97,115,109,95,107,95,54,55,0);
       let corey = String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,98,108,101,95,100,95,54,48,0);
       let sheetf: Map<any, any> = new Map([[String.fromCharCode(119,95,56,51,95,99,104,97,112,0),false ], [String.fromCharCode(97,112,112,114,111,118,101,95,106,95,49,57,0),true ]]);
       let transfert = String.fromCharCode(115,116,111,114,97,98,108,101,95,105,95,49,54,0);
         rootW = `${1 * transfert.length}`;
      for (let n = 0; n < 2; n++) {
         libjsinspectorM *= sheetf.size * 3;
      }
          let albumv = String.fromCharCode(119,97,115,95,57,95,54,53,0);
          let kicku: Map<any, any> = new Map([[String.fromCharCode(114,101,97,108,109,95,111,95,54,55,0),920], [String.fromCharCode(114,105,110,103,98,117,102,102,101,114,95,110,95,55,57,0),898], [String.fromCharCode(99,95,54,48,95,115,116,114,111,107,101,114,0),349]]);
          let philippinesx = String.fromCharCode(115,116,105,99,107,101,114,115,101,116,95,52,95,55,51,0);
         transfert = `${sheetf.size}`;
         albumv += "3";
         kicku = new Map([[`${kicku.size}`, philippinesx.length]]);
         philippinesx = "3";
      if ((1 << (Math.min(3, rootW.length))) == 1 && 1 == (libjsinspectorM << (Math.min(Math.abs(1), 4)))) {
         libjsinspectorM ^= (rootW == String.fromCharCode(78,0) ? rootW.length : sheetf.size);
      }
      while (sheetf.get(`${libjsinspectorM}`) == null) {
          let pointw = 1;
          let chinaj: Array<any> = [359, 414, 663];
          let temperatureg: Array<any> = [116, 977, 190];
          let sendf = 3;
          let with_aqF: Array<any> = [String.fromCharCode(118,101,108,97,112,115,101,100,116,105,109,101,114,95,122,95,51,54,0), String.fromCharCode(100,95,49,57,95,115,115,105,109,118,0), String.fromCharCode(115,95,56,95,116,111,109,105,99,0)];
         libjsinspectorM &= with_aqF.length - sheetf.size;
         pointw %= Math.max(4, 2 << (Math.min(1, chinaj.length)));
         chinaj.push(pointw % 2);
         temperatureg = [sendf];
         sendf >>= Math.min(Math.abs(1 >> (Math.min(Math.abs(sendf), 2))), 4);
         with_aqF = [temperatureg.length << (Math.min(chinaj.length, 5))];
         break;
      }
       let canvasS = true;
         canvasS = transfert.length == 85;
      for (let y = 0; y < 2; y++) {
         transfert = `${transfert.length + libjsinspectorM}`;
      }
      for (let b = 0; b < 1; b++) {
         canvasS = ((rootW.length & (canvasS ? rootW.length : 24)) > 24);
      }
          let emptyo = String.fromCharCode(97,117,100,105,111,100,97,116,97,95,122,95,51,57,0);
          let filledw = String.fromCharCode(118,95,52,48,95,99,104,117,110,107,0);
         canvasS = (93 == ((canvasS ? rootW.length : 93) << (Math.min(rootW.length, 5))));
         emptyo += `${emptyo.length >> (Math.min(1, filledw.length))}`;
         filledw = `${1 | emptyo.length}`;
       let screenc: Map<any, any> = new Map([[String.fromCharCode(112,95,52,53,95,109,97,103,101,0),102], [String.fromCharCode(100,95,57,57,95,99,111,117,110,116,101,114,0),638]]);
       let phoneshareV: Map<any, any> = new Map([[String.fromCharCode(107,95,51,52,95,104,109,97,99,108,105,115,116,0),true ], [String.fromCharCode(116,95,54,53,95,112,114,101,99,0),false ]]);
         phoneshareV.set(corey, corey.length & 2);
      let flipperQ = String.fromCharCode(119,116,52,0) == corey;
      do {
         corey = `${corey.length & 2}`;
         if (flipperQ) {
            break;
         }
      } while (flipperQ && (corey.length == transfert.length));
      while (4 > (transfert.length | 5)) {
         phoneshareV.set(`${canvasS}`, (2 ^ (canvasS ? 5 : 3)));
         break;
      }
      while (screenc.size > 1) {
         screenc = new Map([[`${sheetf.size}`, 2 << (Math.min(3, Math.abs(libjsinspectorM)))]]);
         break;
      }
      libsentryB -= parseFloat(`${parseInt(`${becomeZ}`) << (Math.min(1, Math.abs(parseInt(`${scoreU}`))))}`);
   }
        

   let sigmobP = becomeZ >= 5584622.0;
   do {
       let megaphoneu = 4.0;
       let awayteamfieldo = String.fromCharCode(104,95,50,54,95,99,111,110,116,101,110,116,105,111,110,0);
       let overM = 4;
         megaphoneu -= (parseFloat(`${String.fromCharCode(108,0) == awayteamfieldo ? awayteamfieldo.length : parseInt(`${megaphoneu}`)}`));
         overM -= (awayteamfieldo == String.fromCharCode(117,0) ? parseInt(`${megaphoneu}`) : awayteamfieldo.length);
         awayteamfieldo = `${(String.fromCharCode(81,0) == awayteamfieldo ? awayteamfieldo.length : overM)}`;
      while ((awayteamfieldo.length * parseInt(`${megaphoneu}`)) == 3 || 1.31 == (5.18 * megaphoneu)) {
         megaphoneu /= Math.max(3, parseFloat(`${3}`));
         break;
      }
      if (megaphoneu == overM) {
         megaphoneu /= Math.max(parseFloat(`${awayteamfieldo.length << (Math.min(Math.abs(1), 1))}`), 1);
      }
      if (awayteamfieldo.length > parseInt(`${megaphoneu}`)) {
         awayteamfieldo = `${awayteamfieldo.length >> (Math.min(3, Math.abs(overM)))}`;
      }
       let castingg = true;
          let clearB = 3.0;
          let teamO = 4.0;
          let typese: Array<any> = [10, 399];
         megaphoneu += parseFloat(`${overM + typese.length}`);
         clearB -= parseInt(`${teamO}`);
         teamO += parseFloat(`${parseInt(`${clearB}`) & 1}`);
         typese = [3];
         overM -= (String.fromCharCode(51,0) == awayteamfieldo ? awayteamfieldo.length : parseInt(`${megaphoneu}`));
      becomeZ += awayteamfieldo.length << (Math.min(Math.abs(2), 5));
      if (sigmobP) {
         break;
      }
   } while (sigmobP && (footballfiledlayoutN < becomeZ));
        console.log("ATInterstitialAdShow: " + event.placementId);
      }
    );

       let actionI = String.fromCharCode(101,95,55,50,95,115,109,104,100,0);
         actionI = `${(String.fromCharCode(51,0) == actionI ? actionI.length : actionI.length)}`;
         actionI = `${actionI.length * actionI.length}`;
       let disconnectedlogop = 0;
       let dropdownR = 4;
      footballfiledlayoutN /= Math.max(parseFloat(`${2 | yellowvideolive6.length}`), 2);

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

   if (5.66 > (libsentryB / (Math.max(parseFloat(`${backu.length}`), 1)))) {
       let actionst = false;
       let frame__0k = String.fromCharCode(104,105,103,104,101,114,95,122,95,54,50,0);
       let reducers = true;
       let libjsijniprofilera = String.fromCharCode(99,118,116,121,117,118,116,111,95,99,95,51,53,0);
       let binddatasQ = 3;
       let sendG = String.fromCharCode(100,95,56,50,95,100,105,114,0);
      let filtert = binddatasQ <= 7257550;
      do {
         binddatasQ += (String.fromCharCode(55,0) == libjsijniprofilera ? libjsijniprofilera.length : frame__0k.length);
         if (filtert) {
            break;
         }
      } while (filtert && (binddatasQ > 5 || 2 > (binddatasQ / 5)));
      if (actionst) {
         actionst = binddatasQ == 20;
      }
      let chinas = reducers ? !reducers : reducers;
      do {
         reducers = (46 >= (frame__0k.length << (Math.min(3, Math.abs((!reducers ? frame__0k.length : 46))))));
         if (chinas) {
            break;
         }
      } while ((frame__0k.length > 2) && chinas);
         actionst = !reducers;
      let gradle1 = sendG.length <= 8815482;
      do {
         sendG = `${(String.fromCharCode(79,0) == sendG ? libjsijniprofilera.length : sendG.length)}`;
         if (gradle1) {
            break;
         }
      } while (((2 << (Math.min(3, sendG.length))) == 1 && 2 == (sendG.length << (Math.min(1, Math.abs(binddatasQ))))) && gradle1);
      while (!libjsijniprofilera.includes(frame__0k)) {
         frame__0k += `${3 % (Math.max(9, frame__0k.length))}`;
         break;
      }
      let values7 = reducers ? !reducers : reducers;
      do {
         reducers = String.fromCharCode(54,0) == sendG;
         if (values7) {
            break;
         }
      } while ((actionst) && values7);
      let backiconc = binddatasQ <= 7403918;
      do {
         binddatasQ <<= Math.min(libjsijniprofilera.length, 3);
         if (backiconc) {
            break;
         }
      } while ((3 <= (binddatasQ / 3)) && backiconc);
      while (sendG.endsWith(`${frame__0k.length}`)) {
         sendG = `${(binddatasQ / (Math.max(9, (actionst ? 4 : 5))))}`;
         break;
      }
         sendG += `${sendG.length}`;
      if (!reducers) {
         reducers = (sendG.length * libjsijniprofilera.length) < 46;
      }
      for (let n = 0; n < 1; n++) {
         actionst = sendG.length > 87;
      }
      while (!libjsijniprofilera.includes(`${actionst}`)) {
         actionst = ((libjsijniprofilera.length % (Math.max(8, (reducers ? 64 : libjsijniprofilera.length)))) >= 64);
         break;
      }
      let activity2 = frame__0k.length <= 8232315;
      do {
         frame__0k += `${(frame__0k == String.fromCharCode(107,0) ? frame__0k.length : (actionst ? 2 : 1))}`;
         if (activity2) {
            break;
         }
      } while ((reducers) && activity2);
      backu = [3 << (Math.min(2, yellowvideolive6.length))];
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialPlayEnd,
      (event: any) => {
        

   for (let m = 0; m < 2; m++) {
      becomeZ += 2;
   }
        

   let minimizeI = becomeZ <= 7211097.0;
   do {
      becomeZ *= parseInt(`${becomeZ}`) | parseInt(`${libsentryB}`);
      if (minimizeI) {
         break;
      }
   } while (minimizeI && (!debugm));
        

   if (yellowvideolive6.length <= 5) {
      yellowvideolive6 = `${parseInt(`${footballfiledlayoutN}`) % 3}`;
   }
        

   let homey = 5866351.0 <= libsentryB;
   do {
      libsentryB /= Math.max(parseFloat(`${parseInt(`${footballfiledlayoutN}`) | parseInt(`${becomeZ}`)}`), 2);
      if (homey) {
         break;
      }
   } while (homey && (libsentryB <= 2.38));
        

   let graphA = 5538393.0 >= scoreU;
   do {
       let greyarrowupd = String.fromCharCode(97,118,99,99,95,117,95,57,53,0);
       let benefitZ = String.fromCharCode(115,117,98,109,111,100,101,108,95,112,95,54,0);
       let backgroundI = true;
       let debugf = 2.0;
       let questv = String.fromCharCode(104,95,57,49,95,116,104,105,99,107,0);
       let detailA = 0.0;
       let googler = 4.0;
       let notification5: Map<any, any> = new Map([[String.fromCharCode(112,95,49,53,95,115,116,114,105,100,101,97,98,108,101,0),895], [String.fromCharCode(97,117,116,104,111,114,105,122,97,116,105,111,110,115,95,49,95,50,56,0),509], [String.fromCharCode(105,95,56,52,95,112,111,115,105,116,105,118,101,0),276]]);
       let chinasamez: Map<any, any> = new Map([[String.fromCharCode(120,95,51,48,95,114,101,119,97,114,100,115,0),914], [String.fromCharCode(117,115,117,98,95,57,95,57,50,0),126]]);
          let ying2 = String.fromCharCode(100,101,102,97,117,108,116,99,111,101,102,99,111,117,110,116,115,95,100,95,57,51,0);
          let aboutw = String.fromCharCode(115,95,53,54,95,117,97,110,0);
         benefitZ = `${parseInt(`${detailA}`)}`;
         ying2 += `${aboutw.length}`;
         aboutw = `${aboutw.length % (Math.max(1, 9))}`;
         detailA *= (benefitZ == String.fromCharCode(65,0) ? parseInt(`${googler}`) : benefitZ.length);
          let footballfiledlayoutb = String.fromCharCode(98,95,50,49,95,105,110,118,101,114,118,97,108,0);
         debugf -= parseFloat(`${notification5.size}`);
         footballfiledlayoutb += `${footballfiledlayoutb.length + 1}`;
      if (chinasamez.size <= 1) {
          let calendarL = String.fromCharCode(112,95,55,49,95,104,115,99,97,108,101,114,0);
          let u_position5 = false;
          let detailsO: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,115,116,97,109,112,115,95,56,95,55,0),552], [String.fromCharCode(114,95,57,57,0),902], [String.fromCharCode(111,108,100,108,105,115,116,95,49,95,57,55,0),846]]);
          let r_centero = String.fromCharCode(97,117,116,111,103,101,110,95,122,95,51,48,0);
         chinasamez = new Map([[`${detailsO.size}`, detailsO.size]]);
         calendarL += `${((u_position5 ? 1 : 5))}`;
         u_position5 = 42 < calendarL.length;
         r_centero = `${(String.fromCharCode(104,0) == calendarL ? (u_position5 ? 5 : 2) : calendarL.length)}`;
      }
         greyarrowupd = `${parseInt(`${googler}`) % 3}`;
      for (let p = 0; p < 1; p++) {
          let interstitialH = 4.0;
          let countdownh = String.fromCharCode(104,95,50,51,95,119,101,105,103,104,116,0);
          let sportr: Map<any, any> = new Map([[String.fromCharCode(97,99,99,114,117,101,100,95,111,95,50,48,0),445], [String.fromCharCode(119,95,50,54,95,112,97,99,107,101,100,0),978], [String.fromCharCode(116,95,52,56,95,111,117,116,112,117,116,113,0),628]]);
          let source0 = 0.0;
          let privilegeQ = String.fromCharCode(105,95,56,56,95,111,99,115,112,105,100,0);
         backgroundI = detailA == debugf;
         interstitialH /= Math.max(3, parseInt(`${interstitialH}`) | 3);
         countdownh = `${countdownh.length}`;
         sportr.set(countdownh, 1 >> (Math.min(1, countdownh.length)));
         source0 -= 3;
         privilegeQ = `${countdownh.length}`;
      }
      if (4.32 == (notification5.size - googler)) {
         notification5.set(`${detailA}`, parseInt(`${detailA}`) % 2);
      }
      let schedulerD = 9344606.0 <= debugf;
      do {
         debugf -= parseFloat(`${2 & greyarrowupd.length}`);
         if (schedulerD) {
            break;
         }
      } while (schedulerD && (!backgroundI));
      while (4.65 >= (5.27 - debugf)) {
         debugf += parseFloat(`${2}`);
         break;
      }
         chinasamez = new Map([[`${notification5.size}`, notification5.size]]);
         questv = `${parseInt(`${detailA}`) >> (Math.min(Math.abs(notification5.size), 3))}`;
      let alert8 = questv == String.fromCharCode(98,49,116,114,111,99,49,113,51,111,0);
      do {
          let privatechatbgT = String.fromCharCode(109,97,112,115,116,114,105,110,103,95,101,95,55,55,0);
         questv = `${((backgroundI ? 5 : 1) << (Math.min(Math.abs(parseInt(`${debugf}`)), 2)))}`;
         privatechatbgT = `${privatechatbgT.length}`;
         if (alert8) {
            break;
         }
      } while (alert8 && (benefitZ != questv));
         notification5.set(`${detailA}`, parseInt(`${detailA}`));
      scoreU += 3;
      if (graphA) {
         break;
      }
   } while ((yellowvideolive6.length == 2) && graphA);
        

      libsentryB += parseFloat(`${parseInt(`${footballfiledlayoutN}`)}`);
        console.log("ATInterstitialPlayEnd");
      }
    );

      footballfiledlayoutN -= parseFloat(`${2}`);

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

       let floatingB = String.fromCharCode(119,95,51,57,95,97,116,97,99,101,110,116,101,114,0);
       let reminderm = 5.0;
      while ((1 - floatingB.length) > 5) {
         reminderm /= Math.max(parseFloat(`${floatingB.length ^ parseInt(`${reminderm}`)}`), 3);
         break;
      }
      while (4 >= (floatingB.length / (Math.max(9, parseInt(`${reminderm}`))))) {
         floatingB = `${(floatingB == String.fromCharCode(99,0) ? parseInt(`${reminderm}`) : floatingB.length)}`;
         break;
      }
       let termsi: Map<any, any> = new Map([[String.fromCharCode(114,101,118,97,108,105,100,97,116,101,100,95,103,95,51,55,0),428], [String.fromCharCode(117,95,49,53,95,97,118,99,99,0),359], [String.fromCharCode(109,106,112,101,103,95,115,95,53,52,0),985]]);
       let whistlej: Map<any, any> = new Map([[String.fromCharCode(102,95,55,54,95,109,105,115,109,97,116,99,104,101,115,0),285], [String.fromCharCode(114,95,56,51,0),463], [String.fromCharCode(102,95,53,55,95,114,101,99,101,110,116,108,121,0),428]]);
      while (termsi.size == floatingB.length) {
         termsi = new Map([[`${reminderm}`, floatingB.length]]);
         break;
      }
         termsi.set(`${reminderm}`, 1);
         termsi.set(`${reminderm}`, whistlej.size / 3);
      yellowvideolive6 = `${((debugm ? 1 : 4) << (Math.min(Math.abs(parseInt(`${scoreU}`)), 5)))}`;

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

   while (4.61 <= (2.15 + becomeZ) || becomeZ <= 2.15) {
       let libjsiZ: Map<any, any> = new Map([[String.fromCharCode(117,115,101,114,115,95,107,95,56,52,0),671], [String.fromCharCode(121,95,49,55,95,114,101,115,99,97,108,101,0),325]]);
       let loadingZ: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,108,105,115,101,100,95,112,95,51,57,0),136], [String.fromCharCode(116,105,108,101,120,95,54,95,50,52,0),286]]);
       let headerR = 3.0;
         headerR += parseFloat(`${2}`);
         libjsiZ.set(`${headerR}`, parseInt(`${headerR}`) / (Math.max(7, libjsiZ.size)));
      if ((3 << (Math.min(5, Math.abs(libjsiZ.size)))) < 2 && 4 < (libjsiZ.size ^ 3)) {
         libjsiZ = new Map([[`${libjsiZ.size}`, libjsiZ.size]]);
      }
      while ((headerR * 2.17) > 1.0) {
          let defaultprofilepico = 2.0;
          let fieldq = String.fromCharCode(121,95,55,54,95,115,119,105,112,101,100,0);
          let reactnativejsv = 1.0;
          let baiduR = String.fromCharCode(103,95,50,55,95,119,105,116,104,111,117,116,0);
         headerR += (parseFloat(`${fieldq == String.fromCharCode(50,0) ? fieldq.length : parseInt(`${defaultprofilepico}`)}`));
         defaultprofilepico += parseFloat(`${parseInt(`${reactnativejsv}`) >> (Math.min(Math.abs(2), 2))}`);
         reactnativejsv /= Math.max(1, parseFloat(`${2}`));
         baiduR = `${1 - parseInt(`${reactnativejsv}`)}`;
         break;
      }
          let flyerx = String.fromCharCode(101,95,54,48,95,115,112,108,105,116,116,101,100,0);
          let turnz: Array<any> = [String.fromCharCode(105,95,50,51,95,105,112,97,100,105,102,102,0), String.fromCharCode(101,95,57,57,0), String.fromCharCode(113,95,53,50,95,110,111,100,101,108,97,121,0)];
         loadingZ.set(`${headerR}`, (flyerx == String.fromCharCode(70,0) ? parseInt(`${headerR}`) : flyerx.length));
         turnz = [turnz.length];
          let suggestiong = String.fromCharCode(101,95,53,55,95,115,116,97,114,114,101,100,0);
         headerR /= Math.max(4, (parseFloat(`${String.fromCharCode(117,0) == suggestiong ? loadingZ.size : suggestiong.length}`)));
         loadingZ.set(`${libjsiZ.size}`, 1);
      let iconedit_ = headerR >= 8910663.0;
      do {
         headerR *= parseFloat(`${parseInt(`${headerR}`) ^ 1}`);
         if (iconedit_) {
            break;
         }
      } while (iconedit_ && (headerR >= 2.58));
      for (let n = 0; n < 3; n++) {
          let componentregistryM: Map<any, any> = new Map([[String.fromCharCode(110,95,54,53,95,115,97,116,117,114,97,116,101,0),true ], [String.fromCharCode(114,95,54,48,95,119,105,112,101,0),true ]]);
          let mbsplashG = 5;
          let sigmobm = String.fromCharCode(109,116,105,109,101,95,108,95,55,56,0);
          let iconstarw = String.fromCharCode(120,95,51,52,95,97,118,111,112,116,105,111,110,115,0);
         libjsiZ.set(`${headerR}`, parseInt(`${headerR}`));
         componentregistryM.set(`${mbsplashG}`, mbsplashG % (Math.max(sigmobm.length, 2)));
         sigmobm += `${componentregistryM.size - mbsplashG}`;
         iconstarw += `${(sigmobm == String.fromCharCode(71,0) ? componentregistryM.size : sigmobm.length)}`;
      }
      debugm = headerR >= 20.29;
      break;
   }

    ATInterstitialRNSDK.setAdListener(
      ATInterstitialRNSDK.onInterstitialClose,
      (event: any) => {
        dispatch(interstitialClose());

      yellowvideolive6 = `${2 / (Math.max(parseInt(`${footballfiledlayoutN}`), 5))}`;
        

   for (let z = 0; z < 3; z++) {
      footballfiledlayoutN *= (parseFloat(`${(debugm ? 4 : 1) ^ parseInt(`${libsentryB}`)}`));
   }
        

   let assistT = 6705024.0 <= becomeZ;
   do {
       let liner = 2.0;
       let umengR = false;
       let checkboxz = 3.0;
       let libavcodecc = 1.0;
       let libswresampleN: Map<any, any> = new Map([[String.fromCharCode(101,95,57,56,95,112,114,111,114,101,115,100,97,116,97,0),393], [String.fromCharCode(109,95,55,55,95,100,105,115,116,114,105,98,117,116,105,111,110,0),861], [String.fromCharCode(101,95,51,54,95,100,101,115,99,114,105,98,101,0),588]]);
      let playO = libavcodecc <= 4932962.0;
      do {
         libavcodecc *= parseInt(`${liner}`);
         if (playO) {
            break;
         }
      } while (((liner + libavcodecc) > 5.23) && playO);
          let libfbjniS: Array<any> = [495, 331];
          let active3 = 1.0;
         libswresampleN.set(`${active3}`, parseInt(`${active3}`));
         libfbjniS.push(3);
      let moont = libavcodecc <= 8699157.0;
      do {
         libavcodecc *= 2 >> (Math.min(Math.abs(parseInt(`${liner}`)), 5));
         if (moont) {
            break;
         }
      } while ((umengR && 3.73 == (1.46 + libavcodecc)) && moont);
       let canvasW: Array<any> = [859, 25];
       let delegate_r0T = String.fromCharCode(98,95,53,56,95,112,114,111,116,111,99,111,108,0);
      if ((4.10 * checkboxz) <= 4.91 || 4 <= (canvasW.length - 1)) {
         checkboxz *= (parseInt(`${checkboxz}`) - (umengR ? 3 : 3));
      }
      while (checkboxz == 1.100 && (checkboxz + 1.100) == 4.25) {
         umengR = (libavcodecc - checkboxz) >= 81.3;
         break;
      }
      for (let a = 0; a < 1; a++) {
         delegate_r0T = `${parseInt(`${liner}`)}`;
      }
      for (let p = 0; p < 2; p++) {
         canvasW.push(parseInt(`${libavcodecc}`) - 1);
      }
          let darkQ = String.fromCharCode(104,95,53,48,95,101,121,101,0);
         canvasW = [parseInt(`${libavcodecc}`) << (Math.min(5, Math.abs(2)))];
         darkQ += `${(darkQ == String.fromCharCode(82,0) ? darkQ.length : darkQ.length)}`;
         libswresampleN.set(delegate_r0T, 3);
         umengR = (21 > (delegate_r0T.length >> (Math.min(4, Math.abs((!umengR ? 21 : delegate_r0T.length))))));
         delegate_r0T += `${canvasW.length}`;
      for (let e = 0; e < 1; e++) {
          let classesc = 1;
          let routerG = 3.0;
          let codegenx = 1.0;
          let debugy = true;
         umengR = classesc < 74;
         classesc <<= Math.min(Math.abs(3 | parseInt(`${routerG}`)), 2);
         routerG += (parseInt(`${codegenx}`) * (debugy ? 2 : 3));
         codegenx -= parseFloat(`${3}`);
         debugy = routerG < 27.26;
      }
      let statsv = delegate_r0T.length >= 8217565;
      do {
         delegate_r0T = `${libswresampleN.size * parseInt(`${libavcodecc}`)}`;
         if (statsv) {
            break;
         }
      } while ((umengR || 3 < delegate_r0T.length) && statsv);
      becomeZ -= parseInt(`${footballfiledlayoutN}`) | 2;
      if (assistT) {
         break;
      }
   } while ((3.63 >= footballfiledlayoutN) && assistT);
        

      backu.push(1 >> (Math.min(Math.abs(parseInt(`${scoreU}`)), 5)));
        

   let pathc = 8092169.0 >= libsentryB;
   do {
       let bootA: Map<any, any> = new Map([[String.fromCharCode(114,101,109,97,112,112,101,100,95,121,95,54,52,0),208], [String.fromCharCode(108,95,49,49,95,99,117,98,101,0),224], [String.fromCharCode(115,95,54,55,95,119,100,101,99,0),339]]);
       let internet5 = String.fromCharCode(97,114,99,104,105,118,101,114,95,116,95,51,57,0);
         bootA.set(internet5, (internet5 == String.fromCharCode(55,0) ? internet5.length : bootA.size));
         bootA.set(internet5, internet5.length % 1);
          let cornerkick_ = 5;
          let armvau = false;
          let acceptedP: Array<any> = [835, 466, 669];
         internet5 = `${acceptedP.length + 3}`;
         cornerkick_ -= cornerkick_;
         armvau = 17 == (cornerkick_ + cornerkick_);
         bootA.set(`${internet5}`, internet5.length ^ 1);
          let targetD = String.fromCharCode(100,105,103,105,116,115,95,49,95,51,51,0);
          let arrowupW = String.fromCharCode(109,97,100,101,95,121,95,50,52,0);
         bootA.set(`${targetD}`, 2 | targetD.length);
         arrowupW = `${arrowupW.length >> (Math.min(arrowupW.length, 2))}`;
         internet5 = `${internet5.length | bootA.size}`;
      libsentryB *= parseFloat(`${yellowvideolive6.length & 1}`);
      if (pathc) {
         break;
      }
   } while (pathc && (1.27 < (libsentryB * scoreU) || 2.46 < (scoreU * 1.27)));
        

      becomeZ /= Math.max(4, parseInt(`${scoreU}`) / 2);
        

      yellowvideolive6 = `${parseInt(`${becomeZ}`)}`;
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
