import React, { useCallback, useEffect, useState, memo } from "react";
import {
   View,
   TouchableOpacity,
   Text,
   StyleSheet,
   Image,
   ScrollView,
   RefreshControl,
   Platform,
} from "react-native";
import { useTheme, useFocusEffect } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import ShowMoreButton from "../../components/button/yys_sound_button";

import CollectionIcon from "@static/images/langValuesConfigure.svg";
import HistoryIcon from "@static/images/toponCross.svg";
import FeedbackIcon from "@static/images/yys_statistics.svg";
import ReviewIcon from "@static/images/review.svg";
import SettingsIcon from "@static/images/gradleThailand.svg";
import InfoIcon from "@static/images/copy_uMacauFloater.svg";
import DownloadIcon from "@static/images/guideAdultTick.svg";
import { useNavigation } from "@react-navigation/native";

import Orientation from "react-native-orientation-locker";
import ProfileIcon from "@static/images/rewardUnimplementedviewRight.svg";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import MoreArrow from "@static/images/toponLang.svg";
import EditIcn from "@static/images/profile/managerPhotoMbnativeadvanced.svg";

import VipIcon from "@static/images/feedbackComment.svg";
import VipArrow from "@static/images/gmailActivity.svg";
import AddIcon from "@static/images/vip/langMovies.svg";
import { yys_MinivodPangle } from "../../../yys_mimo_vignette";

import {
   hideBottomSheetAction,
   removeScreenAction,
   setShowGuestPurchaseSuccess,
   showLoginAction,
} from "@redux/actions/yys_runtimescheduler";
import NotificationModal from "../../components/modal/yys_graph";
import { updateUserAuth, updateUserReferral } from "@redux/actions/yys_gesture";
import ExpiredOverlay from "../../components/modal/yys_proxy_singapore";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DOWNLOAD_FEATURE_ENABLED, SHOW_ZF_CONST, UMENG_CHANNEL } from "@utility/yys_ajax_switch";
import FastImage from "../../components/common/yys_vertical_collection";
import { yys_GesturesConst } from "@api";
import { yys_Build } from "../../Sports/global/yys_chart";
import { BannerContainer } from "../../components/container/yys_armva_streaming";
import { yys_Xadsdk } from "@type/yys_libzeus";
import { yys_StringsVignette } from "@utility/yys_ping";
import { yys_FavoriteCustom } from "../../constants/yys_libjsi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { yys_CurrentLang } from "../../api/yys_xadsdk_libcrashsdk";
import yys_event_common from "../../../Umeng/yys_event_common";
import DeviceInfo from "react-native-device-info";
import style from "../../Sports/components/matchDetails/liveChatPage/yys_gpay_roboto";
import { VipLoginAlertOverlay } from "../../components/modal/yys_copy";
import { yys_Chinasame } from "@redux/reducers/yys_animation_animations";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
import ReviewModal from "../../components/modal/reviewModal.tsx";
import InAppReview from 'react-native-in-app-review';

function Profile({ navigation, route }: BottomTabScreenProps<any>) {
   const navigator = useNavigation();
   const { colors, textVariants, icons, spacing } = useTheme();
   const dispatch = useAppDispatch();
   const [refreshing, setRefreshing] = useState(false);
   const [displayedDate, setDisplayedDate] = useState("");
   const [isShowReview, setShowReview] = useState(false);
   const isInAppReviewAvailable = InAppReview.isAvailable();
   const userState = useSelector<yys_HejiCricket>('userReducer');
   const appState = useSelector<yys_Chinasame>('backgroundReducer');

   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [bannerAd, setBannerAd] = useState<yys_Xadsdk[]>();

   const toggleOverlay = () => {
      let fillW = true;
      let final_ebu = String.fromCharCode(106, 95, 56, 52, 95, 115, 115, 114, 99, 115, 0);
      let executorT: Map<any, any> = new Map([[String.fromCharCode(114, 101, 100, 111, 95, 49, 95, 50, 0), 413], [String.fromCharCode(110, 112, 117, 116, 95, 117, 95, 51, 53, 0), 837]]);
      let binit_s_6 = String.fromCharCode(118, 97, 114, 105, 97, 100, 105, 99, 95, 52, 95, 53, 49, 0);
      let moonG = 2;
      let dialogT = String.fromCharCode(111, 95, 55, 57, 95, 108, 111, 111, 112, 102, 105, 108, 116, 101, 114, 0);
      let placementy = String.fromCharCode(110, 95, 51, 50, 95, 115, 104, 97, 107, 101, 0);
      let encryptF = String.fromCharCode(97, 115, 121, 109, 95, 102, 95, 54, 51, 0);
      let reducerg: Array<any> = [822, 944];
      let type_3wl: Map<any, any> = new Map([[String.fromCharCode(120, 95, 55, 57, 95, 104, 112, 97, 114, 97, 109, 115, 0), 811], [String.fromCharCode(110, 95, 53, 49, 95, 101, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 0), 74], [String.fromCharCode(104, 95, 56, 49, 95, 99, 111, 110, 115, 117, 109, 101, 114, 0), 124]]);
      let controlsy: Array<any> = [605, 790];
      let userD = type_3wl.size <= 5989605;
      do {
         let delegate_0M = 5;
         let hcopy_i3 = String.fromCharCode(111, 95, 56, 49, 95, 109, 101, 114, 103, 101, 97, 98, 108, 101, 0);
         let activityF = 5;
         type_3wl = new Map([[`${type_3wl.size}`, 2]]);
         delegate_0M &= 2 * activityF;
         hcopy_i3 = "1";
         activityF >>= Math.min(Math.abs(activityF), 1);
         if (userD) {
            break;
         }
      } while (userD && (Array.from(type_3wl.values()).includes(controlsy.length)));
      controlsy = [type_3wl.size];
      if ((type_3wl.size * 3) == 2) {
         controlsy.push(1);
      }
      let sport2 = type_3wl.size >= 9356838;
      do {
         let chatI = 2.0;
         let emojiF: Array<any> = [255, 191];
         let leakcheckeri = 1.0;
         type_3wl.set(`${leakcheckeri}`, 3);
         chatI /= Math.max(parseInt(`${chatI}`), 2);
         emojiF.push(emojiF.length);
         leakcheckeri += 3;
         if (sport2) {
            break;
         }
      } while (sport2 && (Array.from(type_3wl.values()).includes(controlsy.length)));
      let storew = 7570708 <= type_3wl.size;
      do {
         type_3wl.set(`${controlsy.length}`, type_3wl.size);
         if (storew) {
            break;
         }
      } while ((3 >= (controlsy.length - type_3wl.size)) && storew);
      controlsy.push(controlsy.length | type_3wl.size);
      encryptF = `${(String.fromCharCode(88, 0) == dialogT ? moonG : dialogT.length)}`;
      if (encryptF.length > 3 && final_ebu.length > 3) {
         let playlistq: Array<any> = [525, 506];
         let langkeyV = String.fromCharCode(115, 110, 105, 112, 112, 101, 116, 95, 112, 95, 55, 49, 0);
         let completeB = String.fromCharCode(108, 101, 114, 112, 114, 103, 98, 95, 111, 95, 54, 54, 0);
         langkeyV = `${2 >> (Math.min(4, completeB.length))}`;
         for (let y = 0; y < 2; y++) {
            langkeyV += `${langkeyV.length | completeB.length}`;
         }
         if (3 == completeB.length) {
            langkeyV = `${playlistq.length}`;
         }
         let tailV = String.fromCharCode(105, 102, 100, 112, 122, 56, 0) == langkeyV;
         do {
            let moont = 4.0;
            let mbjscommonq = String.fromCharCode(100, 101, 99, 105, 112, 104, 101, 114, 95, 97, 95, 51, 50, 0);
            langkeyV = `${(String.fromCharCode(81, 0) == completeB ? mbjscommonq.length : completeB.length)}`;
            moont /= Math.max(3, parseFloat(`${parseInt(`${moont}`)}`));
            mbjscommonq += `${parseInt(`${moont}`) | parseInt(`${moont}`)}`;
            if (tailV) {
               break;
            }
         } while ((completeB.length < langkeyV.length) && tailV);
         let sheet1 = 4.0;
         playlistq = [parseInt(`${sheet1}`) % (Math.max(playlistq.length, 1))];
         if (completeB.length < sheet1) {
            sheet1 -= playlistq.length;
         }
         while (langkeyV.includes(`${playlistq.length}`)) {
            langkeyV += "2";
            break;
         }
         while (completeB.length < langkeyV.length) {
            completeB += `${3 / (Math.max(parseInt(`${sheet1}`), 4))}`;
            break;
         }
         final_ebu = `${executorT.size * 2}`;
      }
      binit_s_6 = `${moonG}`;
      let runtimescheduler0 = 4992234 >= moonG;
      do {
         moonG ^= dialogT.length;
         if (runtimescheduler0) {
            break;
         }
      } while ((3 < (moonG / (Math.max(3, 3))) || (moonG / 3) < 4) && runtimescheduler0);
      executorT = new Map([[`${moonG}`, moonG % 1]]);
      executorT = new Map([[dialogT, encryptF.length]]);
      if (5 <= (dialogT.length ^ 1)) {
         dialogT += `${placementy.length | 3}`;
      }
      executorT = new Map([[`${executorT.size}`, 1 + executorT.size]]);
      moonG -= 1 * binit_s_6.length;
      binit_s_6 = `${executorT.size + reducerg.length}`;
      final_ebu += `${executorT.size}`;
      for (let a = 0; a < 1; a++) {
         fillW = binit_s_6.length > moonG;
      }
      let changeD = 0;
      let mbjscommonB = true;
      let actionW = false;
      if ((changeD * 3) == 4 || 3 == changeD) {
         changeD %= Math.max(((actionW ? 5 : 3) * (mbjscommonB ? 3 : 1)), 3);
      }
      let catagoryQ = String.fromCharCode(110, 95, 55, 95, 102, 111, 114, 99, 105, 110, 103, 0);
      changeD <<= Math.min(Math.abs(((actionW ? 2 : 5))), 5);
      catagoryQ += `${catagoryQ.length}`;
      let light1 = 3.0;
      let moreY = true;
      let reminderI: Map<any, any> = new Map([[String.fromCharCode(103, 95, 52, 52, 95, 97, 115, 121, 110, 99, 104, 114, 111, 110, 111, 117, 115, 0), 737], [String.fromCharCode(115, 116, 114, 116, 121, 112, 101, 95, 118, 95, 55, 0), 609], [String.fromCharCode(101, 95, 55, 48, 95, 105, 115, 119, 104, 105, 116, 101, 115, 112, 97, 99, 101, 0), 498]]);
      changeD *= changeD ^ 2;
      light1 *= (2 ^ (moreY ? 3 : 2));
      moreY = !moreY || 21.99 < light1;
      reminderI = new Map([[`${reminderI.size}`, 2 - reminderI.size]]);
      for (let s = 0; s < 1; s++) {
         let pingS = 4;
         let libreactperfloggerjnih = String.fromCharCode(115, 104, 97, 114, 101, 100, 100, 111, 119, 110, 108, 111, 97, 100, 95, 55, 95, 57, 51, 0);
         let inviteI: Array<any> = [453, 802];
         changeD >>= Math.min(1, Math.abs(pingS % 3));
         pingS <<= Math.min(Math.abs(2 | inviteI.length), 2);
         libreactperfloggerjnih = `${libreactperfloggerjnih.length}`;
         inviteI = [inviteI.length];
      }
      let rightt = mbjscommonB ? !mbjscommonB : mbjscommonB;
      do {
         mbjscommonB = mbjscommonB || !actionW;
         if (rightt) {
            break;
         }
      } while (rightt && (!mbjscommonB));
      mbjscommonB = actionW;
      let string0 = String.fromCharCode(114, 95, 54, 51, 95, 97, 100, 100, 105, 0);
      let catalogy: Array<any> = [String.fromCharCode(105, 95, 54, 56, 95, 109, 97, 112, 102, 105, 108, 101, 0), String.fromCharCode(101, 120, 116, 114, 97, 100, 97, 116, 97, 95, 102, 95, 49, 48, 48, 0), String.fromCharCode(98, 105, 116, 114, 118, 95, 99, 95, 49, 48, 48, 0)];
      let expiredc: Array<any> = [972, 963, 272];
      mbjscommonB = actionW;
      string0 += `${expiredc.length}`;
      catalogy.push(2);
      expiredc = [expiredc.length];
      if (!actionW) {
         let roundd: Array<any> = [628, 998, 816];
         changeD -= ((mbjscommonB ? 2 : 5));
         roundd = [roundd.length * roundd.length];
      }
      let material4: Array<any> = [911, 507];
      let smallS: Array<any> = [119, 563, 999];
      encryptF += `${placementy.length - 1}`;
      for (let i = 0; i < 3; i++) {
         placementy += `${moonG}`;
      }
      reducerg.push(final_ebu.length);
      dialogT += `${executorT.size ^ 2}`;
      for (let u = 0; u < 2; u++) {
         let valuesc = 5;
         let rightG = String.fromCharCode(120, 95, 54, 50, 95, 99, 105, 116, 121, 0);
         while (5 < valuesc) {
            let circleD = String.fromCharCode(105, 110, 116, 101, 110, 116, 115, 95, 97, 95, 52, 51, 0);
            let libreactnativejniD = String.fromCharCode(104, 95, 56, 49, 95, 112, 114, 122, 112, 0);
            let logo8 = String.fromCharCode(110, 117, 109, 115, 95, 54, 95, 52, 53, 0);
            let scheduleo = String.fromCharCode(102, 100, 101, 99, 95, 110, 95, 51, 49, 0);
            valuesc >>= Math.min(4, Math.abs(scheduleo.length - valuesc));
            circleD += `${(String.fromCharCode(57, 0) == libreactnativejniD ? libreactnativejniD.length : logo8.length)}`;
            logo8 += `${circleD.length}`;
            scheduleo = `${circleD.length}`;
            break;
         }
         rightG = `${rightG.length}`;
         encryptF = `${moonG}`;
      }
      final_ebu = `${2 ^ moonG}`;
      encryptF = `${dialogT.length + binit_s_6.length}`;

      setIsDialogOpen(!isDialogOpen);
   };

   const refreshUserState = async () => {
      let traminiR: Map<any, any> = new Map([[String.fromCharCode(119, 101, 98, 95, 110, 95, 52, 54, 0), 547], [String.fromCharCode(110, 95, 49, 53, 95, 105, 110, 108, 105, 110, 101, 0), 232], [String.fromCharCode(98, 102, 115, 116, 109, 95, 56, 95, 54, 56, 0), 819]]);
      let plashA: Array<any> = [String.fromCharCode(107, 95, 56, 57, 95, 111, 118, 102, 108, 0), String.fromCharCode(107, 95, 52, 56, 95, 119, 101, 101, 107, 100, 97, 121, 115, 0)];
      let rewindd = 1;
      let blackn = true;
      let modalb = true;
      let imagemanagerb = String.fromCharCode(105, 95, 54, 51, 95, 104, 97, 115, 104, 105, 110, 105, 116, 0);
      let configurej = 2.0;
      modalb = (37 > (traminiR.size >> (Math.min(3, Math.abs((blackn ? traminiR.size : 20))))));
      blackn = !modalb;
      let sportl = 4.0;
      let feedbackM = String.fromCharCode(116, 105, 108, 105, 110, 103, 95, 99, 95, 49, 55, 0);
      let l_lockF = 0;
      let chinasamen = String.fromCharCode(120, 95, 52, 50, 95, 115, 111, 117, 114, 99, 101, 105, 100, 0);
      let nativeexM = String.fromCharCode(101, 110, 99, 111, 100, 101, 109, 98, 95, 50, 95, 50, 48, 0);
      sportl -= feedbackM.length >> (Math.min(1, Math.abs(parseInt(`${sportl}`))));
      let hongkongf = 2.0;
      let balln = String.fromCharCode(105, 116, 101, 109, 95, 102, 95, 55, 50, 0);
      let productS = String.fromCharCode(102, 105, 108, 108, 112, 95, 50, 95, 51, 51, 0);
      nativeexM = `${productS.length}`;
      hongkongf /= Math.max(2, parseInt(`${hongkongf}`));
      balln += `${(balln == String.fromCharCode(75, 0) ? parseInt(`${hongkongf}`) : balln.length)}`;
      productS += `${(balln == String.fromCharCode(111, 0) ? balln.length : parseInt(`${hongkongf}`))}`;
      let libreanimatedP = 8703178.0 >= sportl;
      do {
         sportl *= chinasamen.length | l_lockF;
         if (libreanimatedP) {
            break;
         }
      } while (libreanimatedP && (chinasamen.endsWith(`${sportl}`)));
      feedbackM += `${(String.fromCharCode(103, 0) == feedbackM ? parseInt(`${sportl}`) : feedbackM.length)}`;
      chinasamen = `${2 - parseInt(`${sportl}`)}`;
      let mapbuffere: Array<any> = [String.fromCharCode(104, 95, 51, 49, 95, 105, 109, 103, 117, 116, 105, 108, 115, 0), String.fromCharCode(108, 95, 49, 57, 95, 99, 112, 120, 0), String.fromCharCode(113, 95, 51, 56, 95, 110, 111, 100, 101, 108, 97, 121, 0)];
      let sellv: Array<any> = [String.fromCharCode(105, 109, 112, 97, 99, 116, 95, 103, 95, 56, 48, 0), String.fromCharCode(122, 95, 54, 53, 95, 108, 97, 118, 102, 117, 116, 105, 108, 115, 0), String.fromCharCode(113, 95, 56, 50, 95, 112, 108, 97, 121, 112, 97, 117, 115, 101, 0)];
      let downloadedg = 2;
      let loading0 = 5;
      while ((chinasamen.length - 1) == 2) {
         loading0 %= Math.max(l_lockF, 2);
         break;
      }
      traminiR.set(`${l_lockF}`, l_lockF);
      let indexB = 0.0;
      indexB += parseFloat(`${parseInt(`${indexB}`) / 3}`);
      indexB += parseFloat(`${parseInt(`${indexB}`)}`);
      indexB /= Math.max(parseFloat(`${1}`), 5);
      configurej /= Math.max(2, (plashA.length - (modalb ? 3 : 2)));
      while (3 == traminiR.size) {
         traminiR = new Map([[`${modalb}`, parseInt(`${configurej}`) % 2]]);
         break;
      }

      const result = await yys_GesturesConst.getUserDetails();

      let gradle_ = false;
      let details5 = String.fromCharCode(97, 95, 57, 48, 95, 115, 104, 111, 114, 116, 101, 115, 116, 0);
      for (let p = 0; p < 3; p++) {
         let areaI = String.fromCharCode(101, 114, 115, 105, 111, 110, 95, 97, 95, 52, 55, 0);
         let matchh = String.fromCharCode(115, 95, 52, 52, 95, 114, 101, 108, 97, 121, 101, 100, 0);
         let projecti = true;
         gradle_ = projecti;
         areaI += `${matchh.length}`;
         matchh += "3";
      }
      let moonl = details5 == String.fromCharCode(57, 101, 105, 115, 105, 99, 110, 0);
      do {
         details5 += `${((gradle_ ? 3 : 3))}`;
         if (moonl) {
            break;
         }
      } while (moonl && (gradle_));
      while (3 >= details5.length && !gradle_) {
         details5 = `${(details5.length | (gradle_ ? 3 : 2))}`;
         break;
      }
      while (1 == details5.length) {
         let selectedK = String.fromCharCode(98, 95, 54, 95, 115, 117, 98, 116, 114, 97, 99, 116, 105, 111, 110, 0);
         let mbridgeZ = 3.0;
         let wnewss = String.fromCharCode(115, 95, 52, 54, 95, 119, 101, 108, 108, 0);
         let selecto = String.fromCharCode(104, 100, 108, 114, 95, 116, 95, 49, 55, 0);
         let pingY = String.fromCharCode(119, 115, 118, 113, 97, 95, 118, 95, 52, 53, 0);
         gradle_ = mbridgeZ == 50.31 && gradle_;
         selectedK = `${3 / (Math.max(8, pingY.length))}`;
         mbridgeZ *= 1 + pingY.length;
         wnewss += `${pingY.length}`;
         selecto = "1";
         break;
      }
      details5 = `${(details5.length | (gradle_ ? 5 : 1))}`;
      let other1 = 1.0;
      modalb = configurej > 18.65;
      if ((1 >> (Math.min(4, Math.abs(rewindd)))) > 3 || (rewindd >> (Math.min(Math.abs(1), 1))) > 4) {
         plashA = [traminiR.size ^ rewindd];
      }
      if (blackn) {
         let score_ = String.fromCharCode(97, 95, 50, 48, 95, 99, 111, 110, 102, 105, 103, 117, 114, 101, 0);
         let uimanager1: Map<any, any> = new Map([[String.fromCharCode(100, 99, 116, 99, 111, 101, 102, 95, 109, 95, 49, 52, 0), 770], [String.fromCharCode(117, 112, 103, 114, 97, 100, 101, 100, 95, 52, 95, 54, 51, 0), 212]]);
         score_ += `${uimanager1.size}`;
         while (3 == uimanager1.size) {
            uimanager1 = new Map([[`${uimanager1.size}`, uimanager1.size]]);
            break;
         }
         let logino = score_.length <= 6296176;
         do {
            let eighteenu: Map<any, any> = new Map([[String.fromCharCode(121, 117, 118, 112, 108, 95, 102, 95, 54, 0), 239], [String.fromCharCode(98, 95, 48, 95, 101, 120, 99, 108, 117, 100, 101, 0), 908], [String.fromCharCode(112, 97, 99, 107, 101, 116, 105, 122, 101, 114, 95, 122, 95, 52, 52, 0), 223]]);
            score_ = `${eighteenu.size / 2}`;
            if (logino) {
               break;
            }
         } while ((1 <= score_.length) && logino);
         score_ += `${2 << (Math.min(1, Math.abs(uimanager1.size)))}`;
         let field8 = uimanager1.size <= 5283757;
         do {
            uimanager1 = new Map([[`${uimanager1.size}`, 1]]);
            if (field8) {
               break;
            }
         } while (field8 && ((score_.length << (Math.min(Math.abs(3), 2))) <= 1 || (3 << (Math.min(2, Math.abs(uimanager1.size)))) <= 4));
         for (let i = 0; i < 1; i++) {
            let linkr = String.fromCharCode(102, 95, 54, 48, 95, 97, 107, 105, 100, 0);
            uimanager1 = new Map([[`${uimanager1.size}`, uimanager1.size]]);
            linkr = `${linkr.length << (Math.min(3, linkr.length))}`;
         }
         blackn = (traminiR.size / (Math.max(10, score_.length))) >= 74;
      }
      for (let o = 0; o < 3; o++) {
         plashA.push(((blackn ? 3 : 1) % 1));
      }
      let bellO = 5;
      let register_rrj = String.fromCharCode(106, 95, 57, 55, 95, 97, 98, 117, 115, 101, 0);
      let androidF: Map<any, any> = new Map([[String.fromCharCode(115, 117, 98, 112, 97, 114, 116, 95, 118, 95, 53, 56, 0), 743], [String.fromCharCode(109, 95, 53, 48, 95, 99, 111, 110, 118, 101, 114, 116, 105, 110, 103, 0), 221]]);
      let reward3 = register_rrj.length >= 6079914;
      do {
         register_rrj = `${bellO & 1}`;
         if (reward3) {
            break;
         }
      } while ((5 > (2 | register_rrj.length)) && reward3);
      for (let h = 0; h < 2; h++) {
         bellO <<= Math.min(Math.abs(2), 1);
      }
      let analyticsI = true;
      androidF = new Map([[`${androidF.size}`, 3]]);
      let video8 = 3;
      let analyticsE = String.fromCharCode(110, 101, 101, 100, 95, 121, 95, 54, 53, 0);
      bellO >>= Math.min(1, Math.abs(1));
      video8 *= 3;
      analyticsE = `${video8 % 1}`;
      let rootN = 7949092 >= register_rrj.length;
      do {
         let libavformatR = String.fromCharCode(108, 95, 51, 56, 95, 117, 112, 108, 111, 97, 100, 0);
         let mintegralb: Array<any> = [122, 918];
         let neonq = String.fromCharCode(116, 105, 109, 101, 119, 97, 105, 116, 95, 103, 95, 56, 54, 0);
         register_rrj += `${mintegralb.length}`;
         libavformatR += `${(neonq == String.fromCharCode(115, 0) ? libavformatR.length : neonq.length)}`;
         mintegralb.push((neonq == String.fromCharCode(111, 0) ? libavformatR.length : neonq.length));
         if (rootN) {
            break;
         }
      } while (rootN && (4 == (androidF.size / (Math.max(1, register_rrj.length))) || 3 == (register_rrj.length / (Math.max(4, 7)))));
      register_rrj += "3";
      register_rrj += `${register_rrj.length}`;
      for (let y = 0; y < 3; y++) {
         androidF.set(`${bellO}`, bellO);
      }
      let filterL = String.fromCharCode(107, 95, 56, 52, 0);
      traminiR = new Map([[`${modalb}`, register_rrj.length]]);
      if (result == null) {

         for (let p = 0; p < 3; p++) {
            blackn = plashA.includes(configurej);
         }
         let regengh = 1;
         let h_unlockd = 2.0;
         let attributedstringS = 3;
         let libturbomodulejsijniJ = true;
         h_unlockd += regengh - parseInt(`${h_unlockd}`);
         attributedstringS &= 2;
         libturbomodulejsijniJ = attributedstringS == 23;
         let rewardvideo7 = 9608803.0 <= h_unlockd;
         do {
            let footballU = String.fromCharCode(99, 111, 108, 111, 99, 97, 116, 101, 100, 95, 107, 95, 54, 57, 0);
            let libjsijniprofilerq: Array<any> = [273, 143];
            let clockM = String.fromCharCode(109, 95, 57, 54, 95, 112, 114, 111, 106, 101, 99, 116, 101, 100, 0);
            let othere = 2.0;
            let custom5 = String.fromCharCode(105, 95, 48, 95, 99, 114, 101, 97, 116, 101, 101, 120, 0);
            h_unlockd /= Math.max(3, (footballU == String.fromCharCode(119, 0) ? libjsijniprofilerq.length : footballU.length));
            libjsijniprofilerq.push(parseInt(`${othere}`) | 3);
            clockM = `${custom5.length / (Math.max(4, parseInt(`${othere}`)))}`;
            custom5 += `${parseInt(`${othere}`) % (Math.max(8, custom5.length))}`;
            if (rewardvideo7) {
               break;
            }
         } while ((regengh > h_unlockd) && rewardvideo7);
         regengh += 2 >> (Math.min(Math.abs(regengh), 3));
         let layout3 = String.fromCharCode(118, 95, 56, 57, 95, 117, 110, 105, 109, 112, 111, 114, 116, 97, 110, 116, 0);
         regengh -= regengh;
         layout3 = `${layout3.length}`;
         if (2 < (parseInt(`${h_unlockd}`) + regengh) && 5.0 < (h_unlockd + regengh)) {
            regengh >>= Math.min(Math.abs(regengh >> (Math.min(Math.abs(parseInt(`${h_unlockd}`)), 2))), 2);
         }
         h_unlockd /= Math.max(4, regengh);
         imagemanagerb += `${imagemanagerb.length & 2}`;
         let navigations = String.fromCharCode(115, 116, 114, 108, 99, 97, 116, 95, 118, 95, 57, 0);
         let orientationu = false;
         navigations = "1";
         orientationu = !orientationu;
         if (navigations.length <= 3 || !orientationu) {
            orientationu = (63 >= ((orientationu ? navigations.length : 63) | navigations.length));
         }
         for (let x = 0; x < 2; x++) {
            let tickeda = 1.0;
            let flyerH: Map<any, any> = new Map([[String.fromCharCode(118, 95, 53, 52, 95, 116, 101, 115, 115, 0), 811], [String.fromCharCode(100, 105, 102, 102, 95, 102, 95, 52, 57, 0), 5], [String.fromCharCode(119, 95, 57, 48, 95, 109, 97, 107, 101, 109, 97, 99, 112, 107, 103, 0), 689]]);
            let mathz: Array<any> = [String.fromCharCode(105, 99, 119, 114, 115, 105, 95, 106, 95, 51, 51, 0), String.fromCharCode(105, 110, 116, 101, 114, 108, 101, 97, 118, 105, 110, 103, 95, 56, 95, 49, 48, 0), String.fromCharCode(112, 107, 116, 104, 100, 114, 95, 118, 95, 56, 53, 0)];
            let sourcer: Map<any, any> = new Map([[String.fromCharCode(98, 95, 55, 57, 95, 111, 112, 101, 110, 115, 115, 108, 0), String.fromCharCode(114, 95, 50, 57, 95, 116, 114, 97, 110, 115, 105, 116, 105, 111, 110, 101, 100, 0)], [String.fromCharCode(102, 95, 49, 54, 95, 111, 99, 116, 112, 111, 105, 110, 116, 0), String.fromCharCode(119, 97, 116, 99, 104, 101, 100, 95, 111, 95, 55, 53, 0)], [String.fromCharCode(109, 99, 108, 109, 115, 95, 118, 95, 49, 53, 0), String.fromCharCode(109, 97, 120, 107, 101, 121, 115, 105, 122, 101, 95, 111, 95, 56, 49, 0)]]);
            let sentry8 = false;
            navigations += `${flyerH.size - 3}`;
            tickeda *= parseFloat(`${mathz.length}`);
            flyerH.set(`${mathz.length}`, 2);
            sourcer.set(`${tickeda}`, ((sentry8 ? 2 : 3) + parseInt(`${tickeda}`)));
            sentry8 = (mathz.length * sourcer.size) > 31;
         }
         let flyero = orientationu ? !orientationu : orientationu;
         do {
            let pangle1 = 3.0;
            orientationu = (82 > (navigations.length >> (Math.min(2, Math.abs((orientationu ? navigations.length : 82))))));
            pangle1 += parseFloat(`${parseInt(`${pangle1}`) - 1}`);
            if (flyero) {
               break;
            }
         } while (flyero && (navigations.includes(`${orientationu}`)));
         orientationu = navigations.length >= 97;
         modalb = 61 >= traminiR.size;
         imagemanagerb += `${((modalb ? 5 : 5) % (Math.max((blackn ? 3 : 5), 2)))}`;
         for (let p = 0; p < 2; p++) {
            plashA.push(traminiR.size % (Math.max(3, 5)));
         }
         return;
      }

      await dispatch(updateUserAuth(result));

      while (5 > rewindd || 3 > (rewindd >> (Math.min(Math.abs(5), 3)))) {
         let stationS = String.fromCharCode(104, 95, 53, 55, 95, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 98, 108, 101, 0);
         let moviesV = 4.0;
         let suggestionf = String.fromCharCode(55, 97, 56, 56, 106, 51, 55, 118, 106, 0) == stationS;
         do {
            stationS = `${parseInt(`${moviesV}`)}`;
            if (suggestionf) {
               break;
            }
         } while ((1 >= stationS.length) && suggestionf);
         if ((5.88 * moviesV) >= 4.12) {
            let successI = String.fromCharCode(119, 95, 52, 50, 95, 108, 105, 115, 116, 101, 100, 0);
            let rightU = String.fromCharCode(99, 111, 109, 98, 105, 95, 109, 95, 51, 53, 0);
            let manifestA: Map<any, any> = new Map([[String.fromCharCode(115, 117, 98, 115, 116, 114, 97, 99, 116, 101, 100, 95, 111, 95, 57, 53, 0), 368], [String.fromCharCode(121, 99, 111, 99, 103, 114, 103, 98, 97, 95, 114, 95, 56, 49, 0), 281], [String.fromCharCode(120, 95, 51, 54, 95, 102, 108, 97, 99, 0), 783]]);
            stationS = "2";
            successI = `${manifestA.size / 1}`;
            rightU += `${manifestA.size}`;
         }
         let changeh = String.fromCharCode(49, 97, 100, 55, 0) == stationS;
         do {
            let lista: Map<any, any> = new Map([[String.fromCharCode(108, 95, 52, 49, 95, 105, 110, 100, 101, 110, 116, 97, 116, 105, 111, 110, 0), 43], [String.fromCharCode(115, 95, 56, 55, 0), 950], [String.fromCharCode(111, 95, 50, 55, 95, 112, 114, 111, 100, 117, 99, 116, 105, 111, 110, 0), 494]]);
            let flipperp = String.fromCharCode(99, 111, 114, 112, 117, 115, 95, 114, 95, 49, 56, 0);
            let libfbjni_: Map<any, any> = new Map([[String.fromCharCode(112, 95, 53, 57, 95, 99, 111, 108, 108, 101, 99, 116, 105, 98, 108, 101, 115, 0), 684], [String.fromCharCode(115, 95, 49, 48, 48, 95, 116, 102, 114, 102, 0), 187]]);
            stationS = `${2 + lista.size}`;
            lista = new Map([[`${libfbjni_.size}`, (flipperp == String.fromCharCode(70, 0) ? libfbjni_.size : flipperp.length)]]);
            if (changeh) {
               break;
            }
         } while (changeh && (!stationS.includes(`${moviesV}`)));
         let pageT: Map<any, any> = new Map([[String.fromCharCode(103, 108, 111, 98, 97, 108, 116, 101, 109, 95, 106, 95, 50, 52, 0), 699], [String.fromCharCode(118, 95, 57, 51, 95, 99, 111, 109, 109, 105, 115, 115, 105, 111, 110, 0), 534]]);
         let selectY = String.fromCharCode(116, 119, 111, 102, 105, 115, 104, 95, 114, 95, 49, 56, 0);
         stationS += `${(stationS == String.fromCharCode(105, 0) ? parseInt(`${moviesV}`) : stationS.length)}`;
         pageT.set(`${selectY}`, 3 * pageT.size);
         selectY = `${3 ^ pageT.size}`;
         for (let x = 0; x < 1; x++) {
            moviesV /= Math.max(5, (parseFloat(`${stationS == String.fromCharCode(110, 0) ? parseInt(`${moviesV}`) : stationS.length}`)));
         }
         while ((stationS.length & 1) < 1) {
            moviesV += parseFloat(`${parseInt(`${moviesV}`) - 3}`);
            break;
         }
         blackn = 21.1 >= moviesV;
         break;
      }
      let with_i_ = blackn ? !blackn : blackn;
      do {
         let trashd = String.fromCharCode(121, 95, 53, 48, 95, 97, 117, 116, 104, 101, 110, 116, 104, 105, 99, 97, 116, 101, 0);
         let libfollyF = 2;
         let pageY = true;
         let actionsV = String.fromCharCode(114, 101, 110, 100, 101, 114, 98, 117, 102, 102, 101, 114, 95, 53, 95, 53, 54, 0);
         let anytimeo = String.fromCharCode(100, 117, 115, 116, 95, 48, 95, 56, 54, 0);
         let gdtadvq = 1.0;
         actionsV += `${(String.fromCharCode(69, 0) == trashd ? trashd.length : libfollyF)}`;
         anytimeo = `${parseInt(`${gdtadvq}`)}`;
         gdtadvq -= (anytimeo == String.fromCharCode(68, 0) ? parseInt(`${gdtadvq}`) : anytimeo.length);
         while (4 < (3 * trashd.length)) {
            libfollyF ^= ((pageY ? 2 : 1) ^ 3);
            break;
         }
         if (!actionsV.includes(trashd)) {
            actionsV = `${2 >> (Math.min(5, Math.abs(libfollyF)))}`;
         }
         let launcherm = 2.0;
         libfollyF ^= (String.fromCharCode(78, 0) == actionsV ? parseInt(`${launcherm}`) : actionsV.length);
         pageY = !pageY && launcherm > 23.97;
         for (let i = 0; i < 3; i++) {
            let gpay1 = 3;
            let animationJ = 3;
            actionsV += `${1 ^ animationJ}`;
            gpay1 ^= gpay1;
            animationJ &= 3 * gpay1;
         }
         for (let c = 0; c < 2; c++) {
            launcherm /= Math.max(4, parseInt(`${launcherm}`) >> (Math.min(3, Math.abs(libfollyF))));
         }
         let resendD = 3.0;
         launcherm *= trashd.length;
         resendD += parseFloat(`${parseInt(`${resendD}`)}`);
         let mode6 = 1.0;
         launcherm *= 2 & parseInt(`${launcherm}`);
         mode6 /= Math.max(2, parseFloat(`${parseInt(`${mode6}`) & parseInt(`${mode6}`)}`));
         libfollyF >>= Math.min(Math.abs(2), 2);
         let pauset: Array<any> = [361, 569];
         let textinputz: Array<any> = [835, 155];
         blackn = actionsV.includes(`${modalb}`);
         if (with_i_) {
            break;
         }
      } while ((blackn) && with_i_);
      for (let m = 0; m < 3; m++) {
         let backy: Array<any> = [483, 671];
         let zhengpian9 = 5.0;
         let huawei4: Array<any> = [610, 846, 223];
         let imagemanagerY: Map<any, any> = new Map([[String.fromCharCode(101, 100, 105, 116, 95, 102, 95, 53, 56, 0), 235], [String.fromCharCode(105, 95, 54, 55, 95, 105, 115, 111, 112, 101, 110, 113, 117, 111, 116, 101, 0), 708]]);
         if (!Array.from(imagemanagerY.keys()).includes(`${backy.length}`)) {
            let tempG: Map<any, any> = new Map([[String.fromCharCode(109, 95, 53, 56, 95, 100, 110, 120, 104, 100, 101, 110, 99, 0), 404], [String.fromCharCode(108, 105, 98, 118, 101, 114, 115, 105, 111, 110, 95, 108, 95, 51, 53, 0), 882]]);
            imagemanagerY = new Map([[`${tempG.size}`, 3]]);
         }
         let casting8 = String.fromCharCode(116, 95, 51, 0);
         while (huawei4.includes(zhengpian9)) {
            zhengpian9 += imagemanagerY.size % (Math.max(backy.length, 7));
            break;
         }
         let nativemoduleN = huawei4.length >= 9379488;
         do {
            let reactnativejsm = String.fromCharCode(102, 95, 55, 51, 95, 105, 122, 101, 114, 111, 0);
            let libsentryX = String.fromCharCode(106, 95, 52, 49, 95, 97, 100, 106, 117, 115, 116, 101, 114, 0);
            let nativey = 4.0;
            let interstitial2: Map<any, any> = new Map([[String.fromCharCode(110, 95, 54, 95, 109, 97, 120, 100, 98, 115, 0), 922], [String.fromCharCode(102, 95, 52, 51, 95, 100, 105, 118, 112, 111, 119, 109, 0), 808]]);
            huawei4 = [3 >> (Math.min(Math.abs(parseInt(`${zhengpian9}`)), 3))];
            reactnativejsm = `${reactnativejsm.length / (Math.max(6, libsentryX.length))}`;
            libsentryX = `${1 * libsentryX.length}`;
            nativey -= 3;
            interstitial2 = new Map([[`${interstitial2.size}`, 2]]);
            if (nativemoduleN) {
               break;
            }
         } while ((1 == (4 | huawei4.length)) && nativemoduleN);
         let libtanj = 1.0;
         let humiditys = 0.0;
         for (let i = 0; i < 1; i++) {
            huawei4.push(backy.length);
         }
         let b_lockC = 2.0;
         casting8 = `${3 << (Math.min(1, casting8.length))}`;
         humiditys -= imagemanagerY.size;
         let annerG: Array<any> = [587, 920, 661];
         let constantsj = 5.0;
         backy = [parseInt(`${zhengpian9}`) | 2];
         annerG.push(parseInt(`${constantsj}`));
         constantsj -= parseFloat(`${1}`);
         let phoneQ = 7281465.0 >= b_lockC;
         do {
            b_lockC /= Math.max(parseFloat(`${parseInt(`${zhengpian9}`) >> (Math.min(3, Math.abs(3)))}`), 4);
            if (phoneQ) {
               break;
            }
         } while (phoneQ && ((4.46 - b_lockC) > 3.37 || 4 > (3 + casting8.length)));
         if ((backy.length >> (Math.min(Math.abs(2), 3))) == 2 && 3.30 == (zhengpian9 + backy.length)) {
            backy.push(parseInt(`${b_lockC}`) ^ parseInt(`${humiditys}`));
         }
         traminiR = new Map([[`${huawei4.length}`, ((modalb ? 4 : 1) << (Math.min(Math.abs(1), 2)))]]);
      }
      if ((4 / (Math.max(9, traminiR.size))) > 4) {
         imagemanagerb += `${((modalb ? 3 : 5) + parseInt(`${configurej}`))}`;
      }
      rewindd &= plashA.length;
      return;
   };

   const handleRefresh = async () => {
      let sortg: Map<any, any> = new Map([[String.fromCharCode(105, 95, 52, 55, 95, 108, 111, 103, 103, 97, 98, 108, 101, 0), 869], [String.fromCharCode(114, 101, 110, 100, 101, 114, 101, 114, 115, 95, 56, 95, 50, 0), 760], [String.fromCharCode(111, 95, 57, 56, 95, 110, 117, 109, 98, 105, 116, 115, 0), 454]]);
      let leagueK: Array<any> = [973, 215];
      let dangerq = 2.0;
      let dialogv = 5.0;
      let resultT = 0.0;
      let playB = 0.0;
      let textlayoutmanagerH = String.fromCharCode(109, 98, 101, 100, 103, 101, 95, 105, 95, 53, 48, 0);
      let circleC: Array<any> = [315, 872, 160];
      let line8 = String.fromCharCode(100, 105, 115, 112, 111, 115, 97, 108, 95, 50, 95, 52, 56, 0);
      let androidj = false;
      let baset: Array<any> = [151, 469];
      let policyH = String.fromCharCode(101, 95, 54, 50, 95, 108, 111, 115, 116, 0);
      let champion1 = leagueK.length <= 7823996;
      do {
         leagueK = [parseInt(`${resultT}`)];
         if (champion1) {
            break;
         }
      } while (champion1 && ((leagueK.length * textlayoutmanagerH.length) <= 1));
      dialogv += 3;
      circleC.push(1 | textlayoutmanagerH.length);
      textlayoutmanagerH = `${parseInt(`${resultT}`) & parseInt(`${dangerq}`)}`;
      for (let h = 0; h < 1; h++) {
         let package_7_A = String.fromCharCode(120, 95, 49, 49, 95, 99, 118, 99, 0);
         let dangerO = String.fromCharCode(99, 97, 108, 108, 101, 100, 95, 111, 95, 55, 50, 0);
         let rncorep = 0.0;
         let langN = true;
         dangerO = `${(package_7_A == String.fromCharCode(103, 0) ? (langN ? 5 : 5) : package_7_A.length)}`;
         rncorep += parseFloat(`${2 % (Math.max(parseInt(`${rncorep}`), 9))}`);
         langN = 94.23 == rncorep;
         while (dangerO.includes(package_7_A)) {
            let whatsappK = false;
            let tick1 = 0;
            let moviesU = String.fromCharCode(105, 115, 116, 114, 101, 97, 109, 95, 51, 95, 55, 57, 0);
            let favoriteL: Array<any> = [String.fromCharCode(119, 95, 52, 56, 95, 108, 97, 115, 116, 110, 111, 100, 101, 0), String.fromCharCode(107, 95, 57, 52, 0), String.fromCharCode(119, 95, 55, 51, 95, 100, 105, 114, 110, 97, 109, 101, 0)];
            package_7_A = "3";
            whatsappK = 12 >= favoriteL.length;
            tick1 >>= Math.min(Math.abs(1), 2);
            moviesU = `${3 - favoriteL.length}`;
            break;
         }
         if (dangerO.length < 4) {
            dangerO = `${dangerO.length | package_7_A.length}`;
         }
         let memberz = String.fromCharCode(104, 95, 52, 54, 95, 114, 101, 99, 111, 118, 101, 114, 97, 98, 108, 101, 0);
         let backs = String.fromCharCode(115, 104, 97, 114, 101, 100, 100, 111, 119, 110, 108, 111, 97, 100, 95, 116, 95, 49, 48, 0);
         memberz = `${dangerO.length - 3}`;
         memberz += `${3 & package_7_A.length}`;
         leagueK = [3];
      }
      textlayoutmanagerH += `${circleC.length & textlayoutmanagerH.length}`;
      if (4.94 > (3.63 * dangerq) && 3.78 > (3.63 - dialogv)) {
         dangerq -= parseFloat(`${leagueK.length % (Math.max(3, 6))}`);
      }
      if ((dangerq + parseFloat(`${leagueK.length}`)) == 5.67 || (dangerq + parseFloat(`${leagueK.length}`)) == 5.67) {
         let libjsinspectore: Map<any, any> = new Map([[String.fromCharCode(97, 95, 56, 48, 95, 110, 115, 117, 105, 114, 103, 98, 97, 0), String.fromCharCode(109, 105, 112, 115, 95, 113, 95, 50, 54, 0)], [String.fromCharCode(97, 95, 50, 56, 95, 116, 114, 105, 103, 103, 101, 114, 0), String.fromCharCode(111, 95, 49, 52, 95, 116, 117, 114, 98, 117, 108, 101, 110, 99, 101, 0)]]);
         let downloaded8 = 5.0;
         libjsinspectore = new Map([[`${libjsinspectore.size}`, parseInt(`${downloaded8}`) ^ 2]]);
         if (Array.from(libjsinspectore.values()).includes(downloaded8)) {
            let binddatasS = String.fromCharCode(99, 111, 109, 109, 105, 115, 115, 105, 111, 110, 95, 56, 95, 55, 50, 0);
            let g_image9 = String.fromCharCode(103, 95, 51, 56, 95, 112, 108, 97, 99, 101, 104, 111, 108, 100, 101, 114, 115, 0);
            let philippinesr = 3.0;
            let leftv = String.fromCharCode(117, 95, 54, 52, 95, 117, 101, 117, 101, 0);
            let countryv = 4;
            downloaded8 -= parseFloat(`${libjsinspectore.size ^ 3}`);
            binddatasS = `${leftv.length}`;
            g_image9 = "1";
            philippinesr += parseFloat(`${g_image9.length}`);
            leftv = `${binddatasS.length & 3}`;
            countryv += g_image9.length - binddatasS.length;
         }
         let grayQ = String.fromCharCode(104, 119, 99, 111, 110, 116, 101, 120, 116, 95, 56, 95, 54, 52, 0);
         let bellI: Map<any, any> = new Map([[String.fromCharCode(100, 109, 105, 120, 95, 55, 95, 56, 51, 0), 657], [String.fromCharCode(108, 105, 98, 99, 111, 100, 101, 99, 95, 105, 95, 54, 0), 111]]);
         downloaded8 -= parseFloat(`${parseInt(`${downloaded8}`) / (Math.max(grayQ.length, 4))}`);
         grayQ += `${bellI.size}`;
         bellI.set(`${bellI.size}`, bellI.size);
         libjsinspectore.set(`${downloaded8}`, 3);
         let circlen = 6993690 >= libjsinspectore.size;
         do {
            libjsinspectore = new Map([[`${libjsinspectore.size}`, 2]]);
            if (circlen) {
               break;
            }
         } while (circlen && (libjsinspectore.size <= 4));
         let codegen1 = String.fromCharCode(114, 101, 109, 111, 118, 101, 103, 114, 97, 105, 110, 95, 101, 95, 52, 54, 0);
         let leakcheckerA = String.fromCharCode(110, 112, 112, 116, 114, 97, 110, 115, 112, 111, 115, 101, 95, 120, 95, 49, 51, 0);
         let heartb = false;
         downloaded8 *= parseFloat(`${libjsinspectore.size >> (Math.min(Math.abs(2), 5))}`);
         codegen1 += `${2 + codegen1.length}`;
         leakcheckerA += "1";
         dangerq -= parseFloat(`${3}`);
      }
      while (2 < textlayoutmanagerH.length) {
         textlayoutmanagerH = `${2 >> (Math.min(5, circleC.length))}`;
         break;
      }

      setRefreshing(true);

      dialogv *= line8.length | parseInt(`${playB}`);
      line8 = `${parseInt(`${dangerq}`)}`;
      circleC = [circleC.length & line8.length];
      for (let u = 0; u < 2; u++) {
         let casting2 = String.fromCharCode(105, 95, 53, 56, 95, 114, 101, 115, 101, 116, 0);
         let shared9 = 2;
         shared9 <<= Math.min(casting2.length, 3);
         for (let m = 0; m < 3; m++) {
            shared9 -= (String.fromCharCode(73, 0) == casting2 ? shared9 : casting2.length);
         }
         casting2 = `${casting2.length}`;
         let username0 = 7009529 <= casting2.length;
         do {
            casting2 = "1 ^ shared9";
            if (username0) {
               break;
            }
         } while (((casting2.length | shared9) == 5) && username0);
         while (5 == (2 + casting2.length)) {
            casting2 += `${casting2.length + 2}`;
            break;
         }
         for (let j = 0; j < 1; j++) {
            let text3 = 4;
            let filledf = String.fromCharCode(109, 101, 100, 105, 117, 109, 95, 121, 95, 52, 53, 0);
            let inviteN = 5.0;
            shared9 += text3 | 1;
            text3 ^= 3;
            filledf += `${parseInt(`${inviteN}`)}`;
            inviteN -= (filledf == String.fromCharCode(119, 0) ? parseInt(`${inviteN}`) : filledf.length);
         }
         resultT += 2 ^ shared9;
      }
      if (5 == (circleC.length / 3)) {
         let starI = 1.0;
         let humidityt = true;
         let liveS = false;
         let nativemoduleO = 4.0;
         let eighteens = 0;
         while (5.55 >= (nativemoduleO * 3.86)) {
            humidityt = eighteens > parseInt(`${starI}`);
            break;
         }
         if (5.67 <= (starI - 3.86)) {
            liveS = !liveS;
         }
         let rootH = humidityt ? !humidityt : humidityt;
         do {
            humidityt = (!humidityt ? !liveS : humidityt);
            if (rootH) {
               break;
            }
         } while (rootH && ((nativemoduleO * 5.27) < 4.9));
         if (liveS) {
            humidityt = !humidityt;
         }
         let relatedX: Map<any, any> = new Map([[String.fromCharCode(101, 95, 53, 53, 95, 110, 105, 100, 111, 98, 106, 0), 742], [String.fromCharCode(105, 110, 118, 116, 114, 97, 110, 115, 95, 113, 95, 51, 0), 283], [String.fromCharCode(118, 95, 49, 57, 95, 108, 97, 117, 110, 99, 104, 101, 115, 0), 397]]);
         let minivodD = 3;
         humidityt = !liveS;
         relatedX.set(`${minivodD}`, 3 + minivodD);
         liveS = !humidityt;
         while (5.65 < nativemoduleO) {
            let libfollyB = String.fromCharCode(111, 118, 101, 114, 104, 101, 97, 100, 95, 114, 95, 50, 52, 0);
            let hongkong3 = 0;
            let libreactperfloggerjniS = String.fromCharCode(108, 111, 99, 108, 95, 104, 95, 51, 53, 0);
            let philippines1 = 0.0;
            let ewardedf = String.fromCharCode(111, 98, 116, 97, 105, 110, 95, 101, 95, 57, 56, 0);
            liveS = (hongkong3 / (Math.max(starI, 1))) == 87;
            libfollyB = `${1 / (Math.max(1, libfollyB.length))}`;
            hongkong3 >>= Math.min(4, Math.abs(ewardedf.length % 2));
            libreactperfloggerjniS += "2";
            philippines1 -= 1 | ewardedf.length;
            break;
         }
         if (liveS) {
            eighteens += parseInt(`${starI}`);
         }
         starI *= parseFloat(`${1}`);
         while (!liveS) {
            nativemoduleO /= Math.max(((humidityt ? 5 : 1) | (liveS ? 2 : 3)), 1);
            break;
         }
         let circle2 = String.fromCharCode(101, 95, 56, 48, 95, 115, 116, 114, 115, 116, 97, 114, 116, 0);
         humidityt = 57 == (nativemoduleO + eighteens);
         circle2 = `${(circle2 == String.fromCharCode(103, 0) ? circle2.length : circle2.length)}`;
         let catagory7 = 2.0;
         let interstitialn = 4;
         nativemoduleO -= parseInt(`${catagory7}`) * parseInt(`${nativemoduleO}`);
         catagory7 *= interstitialn;
         let bodanP = String.fromCharCode(117, 95, 53, 52, 95, 112, 97, 114, 116, 105, 97, 108, 0);
         let securityF = 0;
         let logoutj: Array<any> = [String.fromCharCode(110, 95, 54, 50, 95, 115, 108, 111, 119, 100, 111, 119, 110, 0), String.fromCharCode(107, 101, 121, 101, 100, 95, 113, 95, 54, 52, 0)];
         nativemoduleO += logoutj.length;
         bodanP = `${bodanP.length}`;
         securityF >>= Math.min(bodanP.length, 4);
         logoutj.push(bodanP.length);
         let customi: Array<any> = [749, 843, 58];
         liveS = !liveS;
         circleC.push(3 >> (Math.min(4, leagueK.length)));
      }
      let sentryK = 8600238.0 <= playB;
      do {
         playB -= 3 % (Math.max(5, textlayoutmanagerH.length));
         if (sentryK) {
            break;
         }
      } while (sentryK && (4 > (1 >> (Math.min(2, Math.abs(sortg.size)))) && 3.10 > (playB - sortg.size)));
      sortg.set(`${resultT}`, 2);
      let tempS = 2;
      while ((tempS & tempS) < 1 && 1 < (1 & tempS)) {
         tempS /= Math.max(tempS + tempS, 2);
         break;
      }
      let inviteM = 2;
      tempS *= 1 - inviteM;
      let eact5: Array<any> = [856, 179, 985];
      let baiduO: Array<any> = [611, 597];
      leagueK.push(2 & circleC.length);
      for (let m = 0; m < 3; m++) {
         let overx: Map<any, any> = new Map([[String.fromCharCode(113, 101, 120, 112, 110, 101, 103, 95, 110, 95, 54, 57, 0), 816], [String.fromCharCode(117, 110, 115, 101, 110, 100, 95, 53, 95, 52, 48, 0), 157], [String.fromCharCode(100, 95, 52, 52, 95, 114, 101, 109, 111, 118, 97, 108, 115, 0), 116]]);
         for (let p = 0; p < 2; p++) {
            overx.set(`${overx.size}`, overx.size + 1);
         }
         overx.set(`${overx.size}`, overx.size);
         let tail_ = 1.0;
         let activity6 = 5.0;
         let k_titleK: Array<any> = [3, 97];
         overx.set(`${tail_}`, parseInt(`${activity6}`));
         tail_ *= parseFloat(`${3}`);
         dangerq /= Math.max(parseFloat(`${1}`), 5);
      }
      await refreshUserState();

      dialogv /= Math.max(1, 2 % (Math.max(1, sortg.size)));
      while ((playB - sortg.size) == 1.48 || (playB - sortg.size) == 1.48) {
         sortg = new Map([[`${circleC.length}`, 3]]);
         break;
      }
      line8 = "2";
      let whatsappF = 1;
      for (let u = 0; u < 2; u++) {
         whatsappF /= Math.max(1, whatsappF & whatsappF);
      }
      let promotionY: Array<any> = [143, 572, 730];
      let mbnativeW: Array<any> = [64, 611, 346];
      let playlistF = String.fromCharCode(102, 108, 117, 115, 104, 95, 99, 95, 57, 50, 0);
      let colors1 = String.fromCharCode(104, 100, 101, 99, 95, 107, 95, 56, 56, 0);
      line8 = `${parseInt(`${playB}`)}`;
      leagueK.push(2 * leagueK.length);
      for (let t = 0; t < 1; t++) {
         let controlN = 4.0;
         let gradleZ: Map<any, any> = new Map([[String.fromCharCode(112, 95, 50, 55, 95, 115, 101, 108, 101, 99, 116, 111, 114, 0), 840], [String.fromCharCode(106, 95, 51, 49, 95, 105, 115, 114, 101, 97, 100, 111, 110, 108, 121, 0), 442], [String.fromCharCode(114, 95, 57, 53, 95, 101, 120, 112, 101, 99, 116, 101, 100, 0), 553]]);
         let turnh = String.fromCharCode(115, 95, 57, 53, 95, 100, 101, 101, 112, 108, 105, 110, 107, 0);
         let modelsr: Map<any, any> = new Map([[String.fromCharCode(116, 114, 97, 99, 107, 101, 114, 95, 99, 95, 55, 50, 0), 59], [String.fromCharCode(111, 112, 97, 116, 111, 109, 95, 120, 95, 52, 51, 0), 322], [String.fromCharCode(103, 95, 49, 48, 48, 95, 115, 101, 97, 114, 99, 104, 0), 35]]);
         let libreactnativejni0: Array<any> = [608, 393];
         gradleZ = new Map([[`${modelsr.size}`, modelsr.size]]);
         modelsr = new Map([[`${modelsr.size}`, modelsr.size]]);
         for (let z = 0; z < 1; z++) {
            turnh = `${modelsr.size}`;
         }
         let middleq: Array<any> = [991, 191, 293];
         let reactw: Array<any> = [131, 496];
         gradleZ = new Map([[`${reactw.length}`, middleq.length / 2]]);
         modelsr = new Map([[`${gradleZ.size}`, libreactnativejni0.length << (Math.min(Math.abs(2), 5))]]);
         let encryptU = 6442803 <= gradleZ.size;
         do {
            let stationR: Map<any, any> = new Map([[String.fromCharCode(109, 95, 49, 95, 98, 114, 101, 97, 107, 111, 117, 116, 0), 575], [String.fromCharCode(110, 95, 51, 56, 95, 113, 108, 111, 103, 115, 0), 201]]);
            gradleZ = new Map([[`${reactw.length}`, reactw.length << (Math.min(Math.abs(1), 3))]]);
            stationR = new Map([[`${stationR.size}`, stationR.size]]);
            if (encryptU) {
               break;
            }
         } while (encryptU && ((libreactnativejni0.length >> (Math.min(Math.abs(2), 1))) == 4 || 2 == (gradleZ.size >> (Math.min(4, libreactnativejni0.length)))));
         let privacyt = false;
         let download8: Map<any, any> = new Map([[String.fromCharCode(115, 112, 108, 105, 99, 101, 95, 118, 95, 55, 56, 0), 130], [String.fromCharCode(109, 97, 99, 114, 111, 115, 95, 117, 95, 55, 0), 990]]);
         let delegate_fu = String.fromCharCode(110, 111, 116, 103, 101, 116, 95, 105, 95, 51, 50, 0);
         gradleZ.set(delegate_fu, 2);
         privacyt = null != download8.get(`${privacyt}`);
         download8.set(`${privacyt}`, download8.size);
         delegate_fu += `${download8.size}`;
         if (libreactnativejni0.length <= parseInt(`${controlN}`)) {
            controlN /= Math.max(3, parseFloat(`${libreactnativejni0.length}`));
         }
         for (let u = 0; u < 3; u++) {
            libreactnativejni0 = [(turnh == String.fromCharCode(76, 0) ? turnh.length : middleq.length)];
         }
         let filed6 = modelsr.size >= 6227161;
         do {
            modelsr.set(turnh, reactw.length - turnh.length);
            if (filed6) {
               break;
            }
         } while ((3 < (modelsr.size % 5)) && filed6);
         let policy2 = 5036958 >= modelsr.size;
         do {
            modelsr = new Map([[`${middleq.length}`, 2 / (Math.max(6, parseInt(`${controlN}`)))]]);
            if (policy2) {
               break;
            }
         } while (policy2 && (1 == (1 >> (Math.min(2, Math.abs(modelsr.size)))) && 2 == (libreactnativejni0.length >> (Math.min(Math.abs(1), 3)))));
         let bannerN = String.fromCharCode(112, 101, 114, 115, 112, 101, 99, 116, 105, 118, 101, 95, 56, 95, 50, 0);
         let pointR = String.fromCharCode(107, 95, 56, 52, 95, 115, 111, 99, 107, 0);
         let controlsT = 5;
         let libreactperfloggerjnie = String.fromCharCode(99, 108, 97, 109, 112, 101, 100, 95, 122, 95, 49, 54, 0);
         let runtimeB = String.fromCharCode(119, 114, 97, 112, 112, 101, 100, 95, 111, 95, 56, 52, 0);
         libreactnativejni0 = [(String.fromCharCode(98, 0) == pointR ? pointR.length : libreactnativejni0.length)];
         controlsT %= Math.max(4, 1 - libreactperfloggerjnie.length);
         libreactperfloggerjnie += `${3 * controlsT}`;
         runtimeB += `${libreactperfloggerjnie.length + 1}`;
         for (let u = 0; u < 3; u++) {
            pointR = `${reactw.length}`;
         }
         playB += textlayoutmanagerH.length;
      }
      let selectR = 5095832.0 >= resultT;
      do {
         resultT -= baset.length - sortg.size;
         if (selectR) {
            break;
         }
      } while (selectR && ((2 * leagueK.length) > 3 || (1.80 - resultT) > 4.21));
      while (!androidj) {
         let muted3: Array<any> = [String.fromCharCode(116, 95, 52, 50, 95, 104, 111, 108, 100, 101, 114, 115, 0), String.fromCharCode(100, 101, 109, 117, 120, 101, 114, 95, 108, 95, 51, 48, 0), String.fromCharCode(113, 95, 54, 55, 95, 98, 108, 97, 107, 101, 98, 0)];
         if (muted3.length >= 2) {
            muted3 = [muted3.length];
         }
         let upgradee = String.fromCharCode(103, 114, 97, 98, 98, 101, 114, 95, 101, 95, 49, 57, 0);
         let connectionq = 5507244 >= muted3.length;
         do {
            let placementL: Map<any, any> = new Map([[String.fromCharCode(115, 104, 97, 114, 101, 100, 100, 111, 119, 110, 108, 111, 97, 100, 95, 100, 95, 50, 48, 0), false], [String.fromCharCode(116, 97, 98, 108, 101, 103, 101, 110, 95, 53, 95, 53, 0), true]]);
            let icon9: Map<any, any> = new Map([[String.fromCharCode(102, 95, 50, 50, 95, 110, 105, 100, 99, 98, 98, 0), 981], [String.fromCharCode(110, 95, 50, 55, 95, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 0), 725]]);
            let pressurek = false;
            let diceD = false;
            muted3.push(3 >> (Math.min(5, muted3.length)));
            placementL = new Map([[`${placementL.size}`, 2]]);
            icon9 = new Map([[`${icon9.size}`, icon9.size]]);
            pressurek = icon9.size <= 97 && placementL.size <= 97;
            diceD = (icon9.size ^ placementL.size) < 94;
            if (connectionq) {
               break;
            }
         } while (connectionq && (2 < (upgradee.length % (Math.max(9, muted3.length))) || 3 < (upgradee.length % 2)));
         androidj = 49.88 == dangerq;
         break;
      }
      if (4 <= line8.length) {
         dialogv *= textlayoutmanagerH.length;
      }
      setRefreshing(false);
   };

   const insets = useSafeAreaInsets();

   useEffect(() => {
      const unsubscribe = navigation.addListener("blur", () => {

         dispatch(hideBottomSheetAction());
      });
      return unsubscribe;
   }, [navigator]);

   useFocusEffect(
      useCallback(() => {
         Orientation.lockToPortrait();
         return () => {

         };
      }, [])
   );





   const escapeRegExp = (string: string) => {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
   };
   const highlightText = (text: string, keyword: string) => {

      const escapedKeyword = escapeRegExp(keyword);
      const parts = text.split(new RegExp(`(${escapedKeyword})`, "gi"));
      return parts.map((part, index) =>
         part.toLowerCase() === keyword.toLowerCase() ? (
            <Text
               key={index}
               style={{ ...textVariants.body, color: colors.yellow, fontSize: 15 }}
            >
               {part}
            </Text>
         ) : (
            <Text
               key={index}
               style={{ ...textVariants.body, color: "#FFF0CA", fontSize: 15 }}
            >
               {part}
            </Text>
         )
      );
   };

   const fetchBannerAd = async () => {
      let mutedm = 5.0;
      let stylesX = String.fromCharCode(106, 115, 105, 109, 100, 100, 99, 116, 95, 118, 95, 55, 49, 0);
      let emojig = 2;
      let dark9 = String.fromCharCode(118, 95, 52, 56, 95, 109, 97, 100, 101, 0);
      let libmapbufferjnig = String.fromCharCode(104, 95, 53, 50, 95, 108, 111, 99, 97, 108, 104, 111, 115, 116, 0);
      let long_mw = String.fromCharCode(100, 112, 110, 97, 109, 101, 95, 106, 95, 57, 49, 0);
      let with_zW: Array<any> = [919, 318];
      let productW = 5.0;
      long_mw = `${dark9.length - 1}`;
      for (let x = 0; x < 2; x++) {
         mutedm += parseFloat(`${parseInt(`${mutedm}`) - 2}`);
      }
      if (1 < (emojig / 1) || 5.25 < (4.26 - mutedm)) {
         mutedm -= parseFloat(`${1 % (Math.max(6, parseInt(`${mutedm}`)))}`);
      }
      while (dark9 != String.fromCharCode(81, 0) || long_mw == String.fromCharCode(71, 0)) {
         let filledq = 1.0;
         let model1 = String.fromCharCode(102, 95, 51, 57, 95, 111, 112, 101, 110, 101, 114, 0);
         let directb = 1.0;
         let main_cI: Array<any> = [140, 658];
         let libreanimatedn = String.fromCharCode(108, 95, 51, 54, 95, 115, 117, 112, 112, 114, 101, 115, 115, 105, 110, 103, 0);
         while (3 < (2 | libreanimatedn.length) || (main_cI.length | 2) < 3) {
            libreanimatedn += `${parseInt(`${directb}`) / 1}`;
            break;
         }
         if (directb > filledq) {
            let appleA = String.fromCharCode(99, 108, 116, 111, 115, 116, 114, 95, 121, 95, 55, 0);
            filledq += parseFloat(`${appleA.length - 2}`);
         }
         for (let g = 0; g < 1; g++) {
            directb *= parseFloat(`${model1.length ^ libreanimatedn.length}`);
         }
         directb *= parseFloat(`${1 & model1.length}`);
         for (let i = 0; i < 1; i++) {
            filledq *= parseFloat(`${1 & parseInt(`${filledq}`)}`);
         }
         if (model1.startsWith(`${main_cI.length}`)) {
            let roundR: Map<any, any> = new Map([[String.fromCharCode(113, 95, 57, 56, 95, 114, 101, 115, 101, 110, 100, 0), String.fromCharCode(105, 95, 51, 54, 95, 115, 100, 116, 112, 0)], [String.fromCharCode(107, 101, 101, 112, 105, 110, 103, 95, 118, 95, 53, 55, 0), String.fromCharCode(100, 105, 114, 101, 99, 116, 111, 114, 121, 95, 118, 95, 53, 50, 0)]]);
            let hongkongj = String.fromCharCode(116, 95, 54, 54, 95, 114, 116, 99, 100, 0);
            let securityZ = String.fromCharCode(98, 109, 111, 100, 101, 95, 57, 95, 51, 56, 0);
            let bodanN = String.fromCharCode(121, 95, 55, 95, 117, 115, 101, 115, 0);
            let storeO = false;
            main_cI = [parseInt(`${filledq}`) + 3];
            roundR.set(securityZ, roundR.size >> (Math.min(Math.abs(1), 3)));
            hongkongj += `${(String.fromCharCode(111, 0) == hongkongj ? roundR.size : hongkongj.length)}`;
            securityZ = `${securityZ.length & 3}`;
            bodanN += `${securityZ.length}`;
         }
         while (3 >= (model1.length & 4) && 4 >= (4 * model1.length)) {
            let securityR: Map<any, any> = new Map([[String.fromCharCode(99, 98, 99, 114, 95, 118, 95, 54, 0), 428], [String.fromCharCode(115, 121, 109, 95, 52, 95, 57, 53, 0), 161]]);
            model1 = "3";
            securityR.set(`${securityR.size}`, securityR.size);
            break;
         }
         let sportsL = 4.0;
         let skipC = 4.0;
         directb *= parseFloat(`${parseInt(`${sportsL}`) & 2}`);
         let overlayX: Array<any> = [420, 450, 333];
         let editl: Array<any> = [41, 40, 71];
         overlayX = [(libreanimatedn == String.fromCharCode(57, 0) ? libreanimatedn.length : parseInt(`${sportsL}`))];
         editl.push(editl.length);
         overlayX = [2];
         let headerJ = sportsL <= 8484965.0;
         do {
            sportsL += parseInt(`${directb}`);
            if (headerJ) {
               break;
            }
         } while (headerJ && (skipC == 5.43));
         let xadsdk8 = 3;
         let play6 = 3.0;
         main_cI.push(parseInt(`${skipC}`));
         xadsdk8 += 2;
         play6 /= Math.max(parseFloat(`${xadsdk8}`), 2);
         if (4.80 >= (1.51 - directb)) {
            let nativeex1 = 1;
            let headerk: Map<any, any> = new Map([[String.fromCharCode(105, 100, 120, 95, 105, 95, 56, 48, 0), 476], [String.fromCharCode(100, 95, 56, 50, 95, 100, 101, 97, 108, 108, 111, 99, 97, 116, 105, 111, 110, 0), 694], [String.fromCharCode(98, 95, 57, 55, 95, 100, 101, 112, 114, 101, 99, 97, 116, 105, 111, 110, 115, 0), 642]]);
            directb *= parseFloat(`${main_cI.length & nativeex1}`);
            nativeex1 <<= Math.min(1, Math.abs(1));
            headerk.set(`${headerk.size}`, 1);
         }
         long_mw += "3";
         break;
      }
      while (emojig > stylesX.length) {
         let librrc8 = 2.0;
         let nextP: Array<any> = [String.fromCharCode(107, 101, 121, 118, 97, 108, 95, 53, 95, 57, 50, 0), String.fromCharCode(105, 110, 105, 116, 100, 101, 99, 95, 53, 95, 54, 56, 0)];
         let default_6ke = 2.0;
         let eactR = String.fromCharCode(114, 95, 56, 95, 122, 101, 114, 111, 98, 108, 111, 98, 0);
         let phoneZ = String.fromCharCode(108, 117, 116, 121, 117, 118, 95, 56, 95, 53, 49, 0);
         if (3 < (nextP.length ^ 1) && (default_6ke - 1.30) < 4.45) {
            default_6ke /= Math.max(5, 2);
         }
         if (3 == eactR.length) {
            eactR += `${1 / (Math.max(1, nextP.length))}`;
         }
         let texti = String.fromCharCode(112, 114, 111, 99, 101, 101, 100, 95, 56, 95, 49, 0);
         let chinab = String.fromCharCode(115, 105, 103, 110, 108, 101, 95, 57, 95, 53, 55, 0);
         let ball_: Array<any> = [String.fromCharCode(112, 114, 111, 114, 101, 115, 95, 117, 95, 49, 55, 0), String.fromCharCode(113, 95, 53, 50, 95, 97, 116, 101, 120, 105, 116, 0)];
         let questX = 1;
         librrc8 += texti.length | 3;
         ball_ = [2];
         questX %= Math.max(ball_.length ^ questX, 3);
         let appleu: Array<any> = [140, 753, 865];
         texti = `${phoneZ.length ^ 2}`;
         appleu = [appleu.length % 3];
         let upgraden = 8874240 <= chinab.length;
         do {
            chinab = `${(String.fromCharCode(111, 0) == eactR ? eactR.length : nextP.length)}`;
            if (upgraden) {
               break;
            }
         } while ((chinab.length > 4) && upgraden);
         if (texti.length >= 4) {
            let combinedB = String.fromCharCode(103, 105, 103, 97, 98, 121, 116, 101, 115, 95, 118, 95, 51, 0);
            let termsq = 5.0;
            let pnewsL = false;
            texti += `${(parseInt(`${termsq}`) + (pnewsL ? 5 : 1))}`;
            combinedB += `${combinedB.length}`;
            termsq += combinedB.length + 2;
         }
         for (let z = 0; z < 2; z++) {
            let subsN = String.fromCharCode(122, 95, 51, 54, 95, 114, 101, 99, 117, 114, 115, 105, 118, 101, 0);
            let interstitialF = 4;
            librrc8 *= (phoneZ == String.fromCharCode(100, 0) ? phoneZ.length : parseInt(`${librrc8}`));
            subsN += "3";
            interstitialF >>= Math.min(1, Math.abs(interstitialF << (Math.min(subsN.length, 3))));
         }
         emojig -= emojig / (Math.max(nextP.length, 7));
         break;
      }

      const banner = await yys_CurrentLang.getEventBanner();

      while (long_mw == String.fromCharCode(68, 0)) {
         let shareg: Map<any, any> = new Map([[String.fromCharCode(118, 95, 53, 52, 95, 121, 109, 105, 110, 112, 117, 116, 0), true], [String.fromCharCode(108, 97, 115, 116, 95, 108, 95, 52, 50, 0), true]]);
         let assistQ = 2.0;
         let fileg = String.fromCharCode(115, 116, 114, 105, 100, 101, 98, 95, 110, 95, 53, 55, 0);
         let videojsW = String.fromCharCode(104, 95, 56, 56, 95, 101, 110, 117, 109, 101, 114, 97, 116, 101, 0);
         let episoder = 3;
         for (let j = 0; j < 1; j++) {
            shareg = new Map([[`${assistQ}`, 3 | parseInt(`${assistQ}`)]]);
         }
         fileg = `${(fileg == String.fromCharCode(57, 0) ? fileg.length : parseInt(`${assistQ}`))}`;
         for (let f = 0; f < 3; f++) {
            let expiredm = true;
            let libfollyg = String.fromCharCode(110, 95, 57, 56, 0);
            fileg += `${fileg.length}`;
            expiredm = libfollyg.includes(`${expiredm}`);
            libfollyg += `${(String.fromCharCode(109, 0) == libfollyg ? (expiredm ? 3 : 3) : libfollyg.length)}`;
         }
         if (!fileg.startsWith(`${assistQ}`)) {
            fileg += `${(String.fromCharCode(84, 0) == fileg ? parseInt(`${assistQ}`) : fileg.length)}`;
         }
         let xvodm = true;
         let temperatureQ: Array<any> = [117, 119];
         let libturbomodulejsijniz = 0.0;
         episoder &= 1 + videojsW.length;
         xvodm = xvodm || 96.83 >= libturbomodulejsijniz;
         temperatureQ.push((parseInt(`${libturbomodulejsijniz}`) << (Math.min(3, Math.abs((xvodm ? 5 : 3))))));
         let filterW = String.fromCharCode(115, 107, 101, 119, 101, 100, 95, 48, 95, 57, 53, 0);
         let sinah = String.fromCharCode(98, 108, 111, 119, 102, 105, 115, 104, 95, 107, 95, 50, 54, 0);
         for (let x = 0; x < 2; x++) {
            let toponG: Map<any, any> = new Map([[String.fromCharCode(106, 95, 57, 48, 95, 115, 116, 100, 111, 117, 116, 0), 613], [String.fromCharCode(99, 111, 115, 105, 103, 110, 97, 116, 111, 114, 121, 95, 112, 95, 50, 57, 0), 233]]);
            let graphM: Map<any, any> = new Map([[String.fromCharCode(99, 95, 52, 55, 95, 121, 121, 121, 121, 0), 42], [String.fromCharCode(109, 97, 116, 101, 114, 105, 97, 108, 95, 111, 95, 57, 49, 0), 354], [String.fromCharCode(111, 108, 100, 101, 114, 95, 54, 95, 56, 51, 0), 400]]);
            let gesturesg = 0;
            let mintegralf = String.fromCharCode(100, 97, 105, 108, 121, 95, 101, 95, 52, 53, 0);
            episoder /= Math.max(2, parseInt(`${assistQ}`));
            toponG.set(`${gesturesg}`, mintegralf.length + 3);
            graphM.set(`${graphM.size}`, graphM.size);
            gesturesg %= Math.max(2, 2 << (Math.min(3, mintegralf.length)));
         }
         while (sinah.length < 4 || fileg.length < 4) {
            fileg = `${filterW.length}`;
            break;
         }
         if (5 >= (4 * sinah.length)) {
            sinah = `${parseInt(`${assistQ}`) << (Math.min(videojsW.length, 1))}`;
         }
         videojsW += "2";
         while (1 == filterW.length) {
            let cancelf = 1.0;
            let projectV = String.fromCharCode(105, 115, 100, 105, 97, 99, 114, 105, 116, 105, 99, 95, 55, 95, 52, 53, 0);
            let friendsm = String.fromCharCode(122, 95, 57, 57, 95, 116, 114, 97, 110, 115, 99, 101, 105, 118, 101, 114, 115, 0);
            let routers = String.fromCharCode(110, 95, 50, 53, 95, 110, 101, 97, 114, 115, 101, 116, 0);
            let loginq = true;
            assistQ *= 3 | filterW.length;
            cancelf *= friendsm.length << (Math.min(Math.abs(1), 2));
            projectV += `${((loginq ? 5 : 5) | 3)}`;
            friendsm = `${projectV.length << (Math.min(1, Math.abs(parseInt(`${cancelf}`))))}`;
            routers += `${routers.length % (Math.max(3, 5))}`;
            break;
         }
         assistQ *= 2 << (Math.min(5, Math.abs(shareg.size)));
         sinah += `${episoder | filterW.length}`;
         fileg = `${2 % (Math.max(5, sinah.length))}`;
         while (5 == filterW.length) {
            filterW += `${fileg.length ^ 2}`;
            break;
         }
         libmapbufferjnig += `${episoder ^ fileg.length}`;
         break;
      }
      dark9 = `${parseInt(`${mutedm}`) % (Math.max(10, libmapbufferjnig.length))}`;
      let current2 = 5787988.0 <= mutedm;
      do {
         mutedm -= parseFloat(`${dark9.length}`);
         if (current2) {
            break;
         }
      } while (((3 / (Math.max(2, with_zW.length))) == 2) && current2);
      mutedm /= Math.max(parseFloat(`${emojig}`), 2);
      long_mw = `${(String.fromCharCode(78, 0) == dark9 ? dark9.length : emojig)}`;

      if (banner) {

         let bridge1 = 2.0;
         let iconI = String.fromCharCode(119, 95, 57, 53, 95, 101, 110, 99, 111, 100, 101, 0);
         let description_24 = 3;
         let alert6: Map<any, any> = new Map([[String.fromCharCode(105, 95, 54, 56, 95, 99, 111, 114, 100, 0), 41], [String.fromCharCode(108, 95, 52, 56, 95, 101, 108, 108, 105, 111, 116, 116, 0), 155]]);
         bridge1 += iconI.length % 1;
         description_24 += 2;
         alert6.set(`${description_24}`, alert6.size);
         bridge1 -= 1;
         let assistj = String.fromCharCode(106, 95, 50, 55, 95, 112, 114, 111, 100, 117, 99, 101, 114, 0);
         let incidentF = String.fromCharCode(112, 114, 111, 98, 97, 98, 105, 108, 105, 116, 121, 95, 116, 95, 57, 48, 0);
         let injuryV = String.fromCharCode(120, 95, 53, 53, 95, 114, 101, 97, 100, 102, 114, 97, 109, 101, 0);
         while (incidentF == String.fromCharCode(68, 0)) {
            assistj += `${parseInt(`${bridge1}`) >> (Math.min(Math.abs(3), 5))}`;
            break;
         }
         let sliderV = String.fromCharCode(106, 95, 54, 54, 95, 99, 98, 99, 114, 0);
         let ying3 = 1.0;
         let iconU: Map<any, any> = new Map([[String.fromCharCode(108, 105, 98, 118, 101, 114, 115, 105, 111, 110, 95, 115, 95, 54, 49, 0), 949], [String.fromCharCode(111, 95, 57, 51, 95, 115, 117, 109, 102, 0), 39]]);
         assistj = `${parseInt(`${bridge1}`)}`;
         sliderV = `${sliderV.length >> (Math.min(1, Math.abs(parseInt(`${ying3}`))))}`;
         ying3 /= Math.max(5, 2 * parseInt(`${ying3}`));
         iconU.set(sliderV, sliderV.length + iconU.size);
         libmapbufferjnig += `${stylesX.length + parseInt(`${bridge1}`)}`;
         for (let f = 0; f < 2; f++) {
            let flyerZ = 0;
            let notifications = String.fromCharCode(103, 95, 49, 50, 95, 116, 111, 110, 101, 115, 0);
            let sounde = String.fromCharCode(119, 95, 52, 54, 95, 105, 110, 115, 117, 102, 102, 105, 99, 105, 101, 110, 116, 0);
            let philippinesz = String.fromCharCode(103, 95, 54, 52, 95, 115, 97, 118, 101, 105, 0);
            if (3 >= (notifications.length * flyerZ) && 3 >= (flyerZ * notifications.length)) {
               flyerZ |= notifications.length;
            }
            notifications += `${notifications.length}`;
            sounde = `${notifications.length}`;
            let debugm = String.fromCharCode(100, 105, 102, 102, 97, 98, 108, 101, 95, 51, 95, 55, 51, 0);
            let baset = String.fromCharCode(100, 114, 97, 103, 103, 105, 110, 103, 95, 49, 95, 49, 53, 0);
            let unselectedn = true;
            baset = `${(String.fromCharCode(111, 0) == sounde ? (unselectedn ? 4 : 3) : sounde.length)}`;
            debugm += `${1 - flyerZ}`;
            let chinasameW = String.fromCharCode(101, 95, 53, 54, 95, 115, 99, 116, 112, 99, 111, 110, 110, 0);
            baset += `${notifications.length}`;
            chinasameW += "1";
            if (1 == debugm.length) {
               debugm += `${notifications.length}`;
            }
            while (notifications.length <= baset.length) {
               let downloaderu = String.fromCharCode(97, 95, 55, 54, 95, 100, 98, 108, 105, 110, 116, 0);
               notifications += `${philippinesz.length}`;
               downloaderu += `${2 - downloaderu.length}`;
               break;
            }
            let mbridge5 = notifications == String.fromCharCode(112, 100, 101, 108, 57, 97, 49, 106, 48, 0);
            do {
               notifications = `${(sounde == String.fromCharCode(79, 0) ? sounde.length : flyerZ)}`;
               if (mbridge5) {
                  break;
               }
            } while ((2 <= (notifications.length - 4) || 4 <= (notifications.length - flyerZ)) && mbridge5);
            philippinesz = `${2 ^ notifications.length}`;
            let promotione = sounde.length >= 9304206;
            do {
               sounde += `${debugm.length}`;
               if (promotione) {
                  break;
               }
            } while ((philippinesz != String.fromCharCode(70, 0)) && promotione);
            long_mw = `${stylesX.length & 1}`;
         }
         emojig /= Math.max(dark9.length, 1);
         while (3 == (parseInt(`${mutedm}`) / (Math.max(4, 6))) && 1.98 == (mutedm / (Math.max(parseFloat(`${stylesX.length}`), 9)))) {
            stylesX += "1";
            break;
         }
         dark9 = `${libmapbufferjnig.length}`;
         setBannerAd(banner);
      } else {

         while ((stylesX.length | 3) <= 5 && (stylesX.length | with_zW.length) <= 3) {
            with_zW = [3 * libmapbufferjnig.length];
            break;
         }
         for (let l = 0; l < 1; l++) {
            let storeJ = String.fromCharCode(98, 119, 100, 105, 102, 95, 119, 95, 49, 0);
            let windq = false;
            let storeM: Map<any, any> = new Map([[String.fromCharCode(98, 95, 50, 52, 95, 99, 111, 117, 110, 116, 105, 110, 103, 0), String.fromCharCode(101, 95, 56, 50, 95, 104, 97, 100, 97, 109, 97, 114, 100, 0)], [String.fromCharCode(111, 95, 49, 55, 95, 108, 105, 107, 101, 0), String.fromCharCode(117, 110, 114, 101, 108, 105, 97, 98, 108, 101, 95, 100, 95, 54, 50, 0)], [String.fromCharCode(112, 111, 119, 95, 54, 95, 55, 54, 0), String.fromCharCode(97, 95, 56, 56, 0)]]);
            storeJ += `${storeJ.length}`;
            let headerR: Array<any> = [565, 438, 109];
            let commont: Array<any> = [853, 930];
            let catagoryl = String.fromCharCode(107, 95, 49, 49, 95, 111, 118, 101, 114, 97, 108, 108, 0);
            let movies9 = String.fromCharCode(98, 95, 56, 52, 95, 102, 114, 111, 109, 98, 121, 116, 101, 115, 0);
            let valuesO = windq ? !windq : windq;
            do {
               windq = 100 > headerR.length && String.fromCharCode(110, 0) == catagoryl;
               if (valuesO) {
                  break;
               }
            } while (valuesO && (!catagoryl.includes(`${windq}`)));
            let graphg = String.fromCharCode(117, 95, 55, 56, 95, 114, 101, 109, 105, 120, 0);
            let umengo = String.fromCharCode(118, 97, 114, 105, 97, 110, 116, 115, 95, 111, 95, 55, 51, 0);
            let j_unlockr = String.fromCharCode(103, 97, 116, 105, 110, 103, 95, 110, 95, 49, 57, 0);
            storeM = new Map([[`${headerR.length}`, headerR.length / (Math.max(3, graphg.length))]]);
            graphg += `${umengo.length}`;
            umengo += `${umengo.length}`;
            j_unlockr = "3";
            let gmailA = 7060685 >= movies9.length;
            do {
               let searchE = String.fromCharCode(105, 116, 111, 97, 95, 52, 95, 53, 48, 0);
               let materiale = String.fromCharCode(100, 111, 109, 97, 105, 110, 95, 57, 95, 53, 56, 0);
               movies9 = `${catagoryl.length}`;
               searchE += `${2 + materiale.length}`;
               materiale = `${searchE.length >> (Math.min(materiale.length, 5))}`;
               if (gmailA) {
                  break;
               }
            } while (gmailA && (!movies9.startsWith(`${headerR.length}`)));
            while (4 > (4 & commont.length)) {
               let tempW = 3.0;
               commont.push(storeM.size >> (Math.min(3, Math.abs(parseInt(`${tempW}`)))));
               break;
            }
            if (catagoryl.length == 5) {
               catagoryl = `${catagoryl.length}`;
            }
            let graphV = String.fromCharCode(106, 95, 51, 57, 95, 118, 100, 115, 111, 0);
            windq = !windq;
            graphV = `${graphV.length}`;
            mutedm /= Math.max(parseFloat(`${parseInt(`${mutedm}`) - 1}`), 4);
         }
         for (let s = 0; s < 1; s++) {
            mutedm -= (parseFloat(`${String.fromCharCode(89, 0) == libmapbufferjnig ? libmapbufferjnig.length : emojig}`));
         }
         let coreB = String.fromCharCode(107, 95, 55, 95, 102, 111, 114, 119, 97, 114, 100, 105, 110, 103, 0);
         let traminie = 5.0;
         let disconnected4 = 7811992 <= coreB.length;
         do {
            coreB += `${coreB.length >> (Math.min(Math.abs(1), 2))}`;
            if (disconnected4) {
               break;
            }
         } while (disconnected4 && (5 > (2 + coreB.length)));
         for (let p = 0; p < 3; p++) {
            coreB = `${coreB.length & 2}`;
         }
         let default_tye: Map<any, any> = new Map([[String.fromCharCode(111, 95, 53, 95, 98, 97, 100, 103, 101, 115, 0), String.fromCharCode(105, 110, 115, 117, 102, 102, 105, 99, 105, 101, 110, 116, 95, 107, 95, 56, 49, 0)], [String.fromCharCode(118, 95, 51, 95, 115, 119, 105, 102, 116, 0), String.fromCharCode(114, 101, 99, 117, 114, 115, 105, 111, 110, 95, 50, 95, 54, 0)], [String.fromCharCode(114, 101, 115, 105, 115, 116, 97, 110, 99, 101, 95, 109, 95, 51, 56, 0), String.fromCharCode(97, 95, 54, 51, 95, 100, 97, 116, 97, 116, 121, 112, 101, 115, 0)]]);
         let libsentryF = 0;
         let station6: Array<any> = [292, 385, 656];
         coreB += "1";
         default_tye = new Map([[`${default_tye.size}`, 3]]);
         libsentryF <<= Math.min(Math.abs(station6.length & default_tye.size), 1);
         station6 = [3 >> (Math.min(3, Math.abs(libsentryF)))];
         while (traminie == coreB.length) {
            coreB = `${parseInt(`${traminie}`)}`;
            break;
         }
         let graphF = traminie <= 7940754.0;
         do {
            traminie += 1;
            if (graphF) {
               break;
            }
         } while (((traminie + 1.31) == 2.79 && (coreB.length + parseInt(`${traminie}`)) == 2) && graphF);
         for (let s = 0; s < 2; s++) {
            coreB += `${parseInt(`${traminie}`)}`;
         }
         mutedm -= parseFloat(`${dark9.length}`);
         dark9 = `${long_mw.length >> (Math.min(Math.abs(1), 1))}`;
         setBannerAd(undefined);
      }
   };

   const shouldShowAds = async () => {
      let referrerF = String.fromCharCode(113, 95, 49, 57, 95, 98, 117, 116, 111, 110, 0);
      let runtimeschedulerO = true;
      let tumbnail8 = 2.0;
      let greyF = 1;
      let championa: Map<any, any> = new Map([[String.fromCharCode(97, 121, 117, 118, 108, 101, 95, 56, 95, 57, 54, 0), true], [String.fromCharCode(104, 95, 53, 52, 95, 107, 98, 112, 115, 0), true]]);
      let tickk = String.fromCharCode(110, 101, 105, 103, 104, 98, 111, 117, 114, 95, 113, 95, 55, 0);
      let arean = false;
      let eventZ: Array<any> = [576, 995];
      let sorto = String.fromCharCode(98, 105, 110, 100, 105, 110, 103, 115, 95, 52, 95, 54, 57, 0);
      let dragh = 4.0;
      let sortK = String.fromCharCode(111, 95, 55, 95, 117, 110, 98, 111, 110, 100, 0);
      let viewsi = String.fromCharCode(122, 95, 54, 54, 95, 116, 111, 98, 105, 116, 0);
      let helperZ = String.fromCharCode(115, 95, 57, 56, 95, 99, 104, 114, 111, 109, 97, 116, 105, 99, 0);
      let mbridgec = 2.0;
      championa = new Map([[`${eventZ.length}`, 3]]);
      referrerF = "1";
      let libsgcorer = referrerF == String.fromCharCode(98, 56, 50, 0);
      do {
         referrerF = `${championa.size}`;
         if (libsgcorer) {
            break;
         }
      } while (libsgcorer && (referrerF.length <= 4));
      let animationsZ = 3.0;
      let memberg: Array<any> = [String.fromCharCode(113, 95, 50, 57, 95, 110, 111, 110, 110, 117, 108, 108, 115, 115, 114, 99, 0), String.fromCharCode(121, 95, 53, 57, 95, 116, 121, 112, 101, 115, 0), String.fromCharCode(115, 95, 49, 56, 95, 100, 101, 114, 105, 118, 97, 116, 105, 111, 110, 0)];
      let favicony = String.fromCharCode(101, 95, 51, 57, 95, 112, 117, 98, 0);
      let moduleY = memberg.length <= 6631234;
      do {
         let orientationC: Map<any, any> = new Map([[String.fromCharCode(108, 105, 115, 116, 101, 110, 105, 110, 103, 95, 49, 95, 50, 56, 0), String.fromCharCode(105, 114, 114, 101, 108, 118, 97, 110, 116, 95, 115, 95, 53, 53, 0)], [String.fromCharCode(98, 95, 48, 95, 112, 101, 110, 99, 105, 108, 0), String.fromCharCode(119, 95, 52, 51, 95, 110, 111, 110, 110, 117, 108, 108, 98, 117, 102, 102, 101, 114, 0)]]);
         let thailandO = String.fromCharCode(117, 95, 56, 57, 95, 112, 97, 116, 104, 115, 0);
         memberg = [parseInt(`${animationsZ}`)];
         orientationC.set(thailandO, thailandO.length);
         if (moduleY) {
            break;
         }
      } while (moduleY && (memberg.includes(animationsZ)));
      let klevinf = memberg.length >= 6330499;
      do {
         memberg = [memberg.length * parseInt(`${animationsZ}`)];
         if (klevinf) {
            break;
         }
      } while ((4 <= (memberg.length - 5)) && klevinf);
      memberg = [favicony.length << (Math.min(Math.abs(1), 1))];
      for (let h = 0; h < 2; h++) {
         favicony += `${memberg.length * parseInt(`${animationsZ}`)}`;
      }
      let libhermesI = 5255542 >= favicony.length;
      do {
         favicony = `${parseInt(`${animationsZ}`) * memberg.length}`;
         if (libhermesI) {
            break;
         }
      } while ((2.93 < animationsZ) && libhermesI);
      sorto += `${memberg.length / (Math.max(eventZ.length, 6))}`;
      let vietnamP = 9785626 >= eventZ.length;
      do {
         let directR = 2.0;
         let singleK = false;
         let libjsi3: Map<any, any> = new Map([[String.fromCharCode(102, 95, 55, 49, 95, 117, 117, 105, 100, 0), String.fromCharCode(115, 104, 111, 119, 115, 112, 101, 99, 116, 114, 117, 109, 112, 105, 99, 95, 100, 95, 54, 51, 0)], [String.fromCharCode(97, 118, 102, 111, 117, 110, 100, 97, 116, 105, 111, 110, 95, 119, 95, 55, 49, 0), String.fromCharCode(112, 97, 114, 116, 105, 99, 108, 101, 95, 97, 95, 51, 49, 0)]]);
         let mbbid0 = 4.0;
         let scorec = String.fromCharCode(108, 97, 116, 109, 95, 57, 95, 53, 55, 0);
         let showf = mbbid0 <= 7025409.0;
         do {
            let pressureM = false;
            mbbid0 -= parseFloat(`${parseInt(`${mbbid0}`) >> (Math.min(scorec.length, 4))}`);
            pressureM = (!pressureM ? pressureM : !pressureM);
            if (showf) {
               break;
            }
         } while (showf && ((parseFloat(`${libjsi3.size}`) - mbbid0) == 3.52 || (libjsi3.size % 2) == 4));
         while ((libjsi3.size & 2) <= 5 || 4 <= (2 & libjsi3.size)) {
            scorec += `${libjsi3.size}`;
            break;
         }
         let backgroundy = 4.0;
         scorec = `${((singleK ? 2 : 4) << (Math.min(Math.abs(parseInt(`${backgroundy}`)), 5)))}`;
         let pressureO = 5.0;
         singleK = !singleK;
         pressureO -= 2 / (Math.max(2, parseInt(`${pressureO}`)));
         let whatsappi: Array<any> = [501, 215, 780];
         singleK = (mbbid0 / (Math.max(parseFloat(`${scorec.length}`), 1))) >= 10.56;
         singleK = !scorec.includes(`${directR}`);
         libjsi3.set(`${backgroundy}`, parseInt(`${backgroundy}`));
         whatsappi.push(whatsappi.length << (Math.min(Math.abs(2), 2)));
         whatsappi = [scorec.length % 2];
         while (2 > (3 - whatsappi.length) && 3 > (whatsappi.length - 3)) {
            whatsappi.push(1);
            break;
         }
         directR += parseFloat(`${parseInt(`${directR}`) << (Math.min(Math.abs(2), 2))}`);
         while (2.28 == directR) {
            mbbid0 /= Math.max(parseFloat(`${scorec.length}`), 5);
            break;
         }
         if ((backgroundy / (Math.max(6, mbbid0))) > 3.24 && (backgroundy / (Math.max(mbbid0, 4))) > 3.24) {
            mbbid0 += parseFloat(`${scorec.length}`);
         }
         eventZ.push(2);
         if (vietnamP) {
            break;
         }
      } while ((eventZ.length > 4) && vietnamP);
      runtimeschedulerO = arean;
      let videocommon9 = String.fromCharCode(101, 118, 97, 108, 117, 108, 97, 116, 101, 95, 51, 95, 49, 54, 0);
      let selectK = false;
      let current4 = 4;
      let turno = String.fromCharCode(102, 95, 48, 95, 100, 119, 111, 114, 100, 0);
      let fadfdeebbbfdabbbabdadfaaddaaa: Map<any, any> = new Map([[String.fromCharCode(110, 95, 55, 54, 95, 109, 101, 109, 120, 0), true], [String.fromCharCode(108, 95, 52, 53, 95, 97, 116, 101, 120, 105, 116, 0), true], [String.fromCharCode(112, 95, 56, 55, 95, 99, 97, 114, 114, 121, 111, 117, 116, 0), false]]);
      videocommon9 = "3";
      current4 *= (String.fromCharCode(99, 0) == turno ? fadfdeebbbfdabbbabdadfaaddaaa.size : turno.length);
      fadfdeebbbfdabbbabdadfaaddaaa = new Map([[`${fadfdeebbbfdabbbabdadfaaddaaa.size}`, 1 << (Math.min(1, Math.abs(fadfdeebbbfdabbbabdadfaaddaaa.size)))]]);
      videocommon9 += `${((selectK ? 4 : 2))}`;
      if (!selectK) {
         videocommon9 += `${((selectK ? 2 : 3) * videocommon9.length)}`;
      }
      for (let d = 0; d < 1; d++) {
         let mintegral4 = true;
         let androidb = 3.0;
         videocommon9 = `${(3 & (mintegral4 ? 4 : 2))}`;
         mintegral4 = 57.68 == androidb;
         androidb -= 2 % (Math.max(7, parseInt(`${androidb}`)));
      }
      selectK = !selectK;
      videocommon9 += "1";
      tickk = "2";
      for (let w = 0; w < 1; w++) {
         let rncores: Map<any, any> = new Map([[String.fromCharCode(99, 95, 52, 53, 95, 99, 108, 97, 117, 115, 101, 0), 100], [String.fromCharCode(108, 97, 98, 101, 108, 110, 115, 95, 113, 95, 50, 0), 72]]);
         let libfabricjnit = false;
         let usernamed: Array<any> = [127, 561, 97];
         let lineI = 1;
         let libmapbufferjniD: Array<any> = [301, 82, 84];
         let humidity0 = 0.0;
         let libflipperR = 2.0;
         while (Array.from(rncores.keys()).includes(`${humidity0}`)) {
            let blackR = String.fromCharCode(116, 105, 107, 101, 114, 95, 54, 95, 53, 52, 0);
            rncores.set(`${libfabricjnit}`, 3 & rncores.size);
            blackR += `${blackR.length | blackR.length}`;
            break;
         }
         libfabricjnit = 99 < lineI && 99 < usernamed.length;
         let nativemoduleu = 7014061 >= libmapbufferjniD.length;
         do {
            let termsP = 1;
            let libhermesR: Map<any, any> = new Map([[String.fromCharCode(116, 111, 112, 95, 118, 95, 53, 54, 0), 188], [String.fromCharCode(122, 95, 52, 49, 95, 101, 120, 115, 121, 0), 532], [String.fromCharCode(108, 105, 115, 116, 101, 110, 101, 114, 115, 95, 114, 95, 51, 48, 0), 462]]);
            let private_n1V = 2.0;
            libmapbufferjniD.push(parseInt(`${humidity0}`) - 1);
            termsP *= termsP;
            libhermesR = new Map([[`${termsP}`, 1 >> (Math.min(Math.abs(termsP), 4))]]);
            private_n1V -= libhermesR.size << (Math.min(Math.abs(3), 1));
            if (nativemoduleu) {
               break;
            }
         } while (((humidity0 + 4.92) > 4.98 && 4.92 > (libmapbufferjniD.length + humidity0)) && nativemoduleu);
         while (libfabricjnit && (libflipperR * 5.48) < 2.25) {
            libfabricjnit = (1 == ((libfabricjnit ? usernamed.length : 1) % (Math.max(usernamed.length, 8))));
            break;
         }
         humidity0 *= lineI;
         humidity0 *= 2 >> (Math.min(1, libmapbufferjniD.length));
         lineI &= rncores.size;
         libfabricjnit = humidity0 > 23.69;
         let match0 = true;
         let catalogJ = true;
         let profileP: Map<any, any> = new Map([[String.fromCharCode(97, 95, 53, 57, 95, 114, 97, 119, 100, 101, 99, 0), 613], [String.fromCharCode(101, 95, 55, 48, 95, 99, 114, 101, 97, 116, 101, 101, 120, 0), 89]]);
         let context5 = 5.0;
         let success5 = 5.0;
         let playercommonX = String.fromCharCode(115, 117, 114, 101, 95, 97, 95, 57, 55, 0);
         let selectedK: Array<any> = [459, 746];
         let anytime0 = 2.0;
         context5 += (libmapbufferjniD.length * (match0 ? 2 : 4));
         playercommonX = `${2 | playercommonX.length}`;
         selectedK = [parseInt(`${anytime0}`)];
         anytime0 *= 1;
         if (!libfabricjnit) {
            let injuryJ = 5.0;
            let chinah = String.fromCharCode(100, 95, 51, 48, 95, 100, 115, 116, 0);
            let roomO = String.fromCharCode(101, 110, 97, 98, 108, 101, 100, 95, 112, 95, 49, 55, 0);
            let xvodO = 4;
            let dice2 = 0.0;
            catalogJ = profileP.size < xvodO;
            injuryJ *= parseFloat(`${1}`);
            chinah = `${roomO.length}`;
            roomO += `${parseInt(`${injuryJ}`)}`;
            xvodO &= 1;
            dice2 += parseFloat(`${2 % (Math.max(parseInt(`${dice2}`), 2))}`);
         }
         while (libfabricjnit) {
            humidity0 += ((libfabricjnit ? 1 : 5));
            break;
         }
         championa.set(`${usernamed.length}`, championa.size / (Math.max(2, 2)));
      }
      let libreactperfloggerjniM = String.fromCharCode(99, 95, 50, 54, 95, 98, 101, 103, 97, 110, 0);
      let resend3 = 1.0;
      libreactperfloggerjniM = `${parseInt(`${resend3}`) / (Math.max(libreactperfloggerjniM.length, 6))}`;
      if (!libreactperfloggerjniM.endsWith(`${resend3}`)) {
         resend3 -= 3;
      }
      for (let f = 0; f < 2; f++) {
         resend3 *= libreactperfloggerjniM.length;
      }
      for (let k = 0; k < 3; k++) {
         resend3 *= (String.fromCharCode(115, 0) == libreactperfloggerjniM ? libreactperfloggerjniM.length : parseInt(`${resend3}`));
      }
      let catagoryL = 3;
      let videojsK = String.fromCharCode(112, 114, 101, 109, 117, 108, 116, 105, 112, 108, 105, 101, 100, 95, 114, 95, 55, 57, 0);
      let profilex: Array<any> = [488, 220, 383];
      resend3 *= 3 >> (Math.min(5, libreactperfloggerjniM.length));
      catagoryL += catagoryL - videojsK.length;
      videojsK += `${3 ^ videojsK.length}`;
      profilex.push(1);
      libreactperfloggerjniM = `${parseInt(`${resend3}`)}`;
      arean = sorto.includes(`${dragh}`);
      for (let e = 0; e < 2; e++) {
         arean = 25 <= greyF;
      }
      while (!Array.from(championa.keys()).includes(`${tumbnail8}`)) {
         championa = new Map([[`${greyF}`, greyF + tickk.length]]);
         break;
      }
      sorto += `${2 + parseInt(`${tumbnail8}`)}`;
      let confirmationJ = 2;
      let libfbM: Array<any> = [84, 232];
      let auto_pht: Map<any, any> = new Map([[String.fromCharCode(113, 95, 56, 50, 95, 115, 112, 114, 105, 116, 101, 115, 0), String.fromCharCode(97, 100, 115, 103, 97, 115, 95, 118, 95, 51, 57, 0)], [String.fromCharCode(105, 95, 49, 56, 95, 109, 118, 112, 114, 111, 98, 115, 0), String.fromCharCode(103, 114, 101, 103, 95, 110, 95, 50, 53, 0)]]);
      confirmationJ *= 1 >> (Math.min(5, Math.abs(auto_pht.size)));
      libfbM.push(libfbM.length + libfbM.length);
      auto_pht = new Map([[`${libfbM.length}`, libfbM.length]]);
      confirmationJ &= 3;
      confirmationJ >>= Math.min(Math.abs(confirmationJ + confirmationJ), 2);
      greyF %= Math.max(2, 3 << (Math.min(Math.abs(parseInt(`${dragh}`)), 3)));
      arean = referrerF.length > 7 && !arean;
      tickk = `${((arean ? 5 : 1) + parseInt(`${tumbnail8}`))}`;
      let subsp = runtimeschedulerO ? !runtimeschedulerO : runtimeschedulerO;
      do {
         runtimeschedulerO = arean;
         if (subsp) {
            break;
         }
      } while ((runtimeschedulerO) && subsp);
      if (tickk.includes(`${referrerF.length}`)) {
         let sportsH = 3.0;
         let selectedO = String.fromCharCode(112, 108, 97, 110, 97, 114, 120, 95, 99, 95, 53, 50, 0);
         let thumbnailF = String.fromCharCode(102, 114, 105, 99, 116, 105, 111, 110, 95, 48, 95, 50, 51, 0);
         let bdxadsdk5 = 4;
         while (thumbnailF != selectedO) {
            selectedO += "2";
            break;
         }
         selectedO += `${parseInt(`${sportsH}`) - selectedO.length}`;
         sportsH += parseFloat(`${thumbnailF.length}`);
         let libjsinspector5 = false;
         let layoutw = true;
         while (3 <= (1 / (Math.max(4, selectedO.length))) && 1 <= (selectedO.length * parseInt(`${sportsH}`))) {
            sportsH *= (parseFloat(`${(libjsinspector5 ? 2 : 3) - bdxadsdk5}`));
            break;
         }
         sportsH *= parseFloat(`${2}`);
         let executorU = layoutw ? !layoutw : layoutw;
         do {
            layoutw = (bdxadsdk5 >> (Math.min(thumbnailF.length, 2))) == 87;
            if (executorU) {
               break;
            }
         } while (executorU && (layoutw));
         selectedO = `${(parseInt(`${sportsH}`) >> (Math.min(4, Math.abs((libjsinspector5 ? 4 : 4)))))}`;
         for (let g = 0; g < 3; g++) {
            let recommendatione: Array<any> = [571, 201, 712];
            let indexW = 0;
            let telegram6 = String.fromCharCode(120, 95, 52, 55, 95, 109, 102, 104, 100, 0);
            libjsinspector5 = 67 == recommendatione.length && 67 == indexW;
            recommendatione.push(2 & telegram6.length);
            indexW &= 1 << (Math.min(3, telegram6.length));
         }
         for (let a = 0; a < 3; a++) {
            libjsinspector5 = libjsinspector5 || 51 > bdxadsdk5;
         }
         bdxadsdk5 %= Math.max(2 >> (Math.min(Math.abs(parseInt(`${sportsH}`)), 2)), 3);
         if (3 <= (bdxadsdk5 >> (Math.min(thumbnailF.length, 2))) || (bdxadsdk5 >> (Math.min(thumbnailF.length, 3))) <= 3) {
            let tickg = String.fromCharCode(105, 110, 115, 116, 97, 110, 99, 101, 95, 115, 95, 49, 0);
            let libfabricjniu = String.fromCharCode(102, 111, 114, 109, 95, 100, 95, 49, 50, 0);
            let uimanagerL = String.fromCharCode(102, 95, 56, 55, 95, 112, 114, 111, 109, 111, 0);
            thumbnailF += "3";
            tickg = `${libfabricjniu.length & tickg.length}`;
            libfabricjniu = `${uimanagerL.length | tickg.length}`;
            uimanagerL += `${libfabricjniu.length}`;
         }
         tickk = `${thumbnailF.length}`;
      }
      if (5 < (championa.size + tickk.length)) {
         tickk += `${2 - sorto.length}`;
      }
      let mbridgeP = 6320458 <= tickk.length;
      do {
         let mbnativeadvancedF = String.fromCharCode(98, 95, 54, 53, 95, 114, 101, 99, 111, 110, 102, 105, 103, 117, 114, 97, 116, 105, 111, 110, 0);
         let libcrashsdku: Map<any, any> = new Map([[String.fromCharCode(118, 95, 53, 51, 95, 99, 111, 110, 116, 97, 105, 110, 101, 114, 115, 0), 117], [String.fromCharCode(119, 95, 53, 53, 95, 114, 111, 116, 97, 116, 101, 100, 0), 761], [String.fromCharCode(115, 104, 111, 117, 108, 100, 95, 117, 95, 53, 52, 0), 758]]);
         let rounda: Array<any> = [716, 669];
         let changeK = 4.0;
         let searchbar9 = 4.0;
         let indicatorU = String.fromCharCode(104, 101, 97, 114, 116, 98, 101, 97, 116, 95, 113, 95, 49, 56, 0);
         rounda = [parseInt(`${changeK}`)];
         changeK -= 2;
         searchbar9 += (indicatorU == String.fromCharCode(54, 0) ? parseInt(`${searchbar9}`) : indicatorU.length);
         for (let v = 0; v < 1; v++) {
            let spinnerX = true;
            let bodann = true;
            let settingP: Array<any> = [449, 852, 358];
            rounda = [(1 & (bodann ? 3 : 1))];
            spinnerX = (74 < ((spinnerX ? settingP.length : 74) * settingP.length));
            bodann = ((settingP.length ^ (spinnerX ? 5 : settingP.length)) >= 5);
         }
         let context9 = rounda.length >= 7389577;
         do {
            let middlen = 3.0;
            let otheru = String.fromCharCode(104, 95, 57, 51, 95, 105, 110, 116, 114, 97, 120, 109, 98, 117, 118, 0);
            rounda = [1 << (Math.min(3, Math.abs(parseInt(`${middlen}`))))];
            middlen /= Math.max(3, otheru.length << (Math.min(Math.abs(3), 5)));
            otheru = "1";
            if (context9) {
               break;
            }
         } while ((2 > (libcrashsdku.size % (Math.max(4, rounda.length)))) && context9);
         while (!Array.from(libcrashsdku.values()).includes(rounda.length)) {
            libcrashsdku = new Map([[`${libcrashsdku.size}`, 2]]);
            break;
         }
         while (!mbnativeadvancedF.endsWith(`${rounda.length}`)) {
            let volumel = 4.0;
            let clockd: Array<any> = [955, 396];
            rounda.push(3 | mbnativeadvancedF.length);
            volumel *= clockd.length;
            clockd.push(1);
            break;
         }
         while (mbnativeadvancedF.endsWith(`${libcrashsdku.size}`)) {
            let typingc = String.fromCharCode(109, 101, 109, 111, 114, 121, 95, 54, 95, 51, 49, 0);
            let gradlewz = true;
            libcrashsdku.set(`${gradlewz}`, libcrashsdku.size);
            typingc = `${typingc.length / (Math.max(8, typingc.length))}`;
            break;
         }
         for (let r = 0; r < 3; r++) {
            rounda.push(3 + libcrashsdku.size);
         }
         let foundq = String.fromCharCode(117, 110, 101, 109, 98, 101, 100, 95, 104, 95, 54, 50, 0);
         let traminis = String.fromCharCode(106, 95, 57, 50, 95, 109, 111, 100, 117, 108, 101, 0);
         while (traminis.length <= 5 && mbnativeadvancedF == String.fromCharCode(77, 0)) {
            mbnativeadvancedF += `${mbnativeadvancedF.length}`;
            break;
         }
         tickk += `${libcrashsdku.size / 1}`;
         if (mbridgeP) {
            break;
         }
      } while (mbridgeP && (!tickk.includes(`${dragh}`)));
      dragh += (parseFloat(`${(arean ? 1 : 3) >> (Math.min(Math.abs(greyF), 1))}`));
      let leaguep = String.fromCharCode(109, 105, 108, 108, 105, 115, 95, 122, 95, 54, 48, 0);
      let layoutO = String.fromCharCode(104, 101, 108, 112, 101, 114, 95, 115, 95, 51, 0);
      let taiwanx = layoutO.length <= 8188701;
      do {
         layoutO = `${layoutO.length}`;
         if (taiwanx) {
            break;
         }
      } while (taiwanx && (layoutO.length <= 2));
      for (let r = 0; r < 2; r++) {
         let bingm = String.fromCharCode(114, 105, 110, 100, 101, 120, 95, 118, 95, 52, 48, 0);
         leaguep += `${layoutO.length}`;
         bingm = `${bingm.length}`;
      }
      let twitteru = 1.0;
      layoutO = `${parseInt(`${twitteru}`) / 3}`;
      while (twitteru == layoutO.length) {
         twitteru /= Math.max(3, 2 + layoutO.length);
         break;
      }
      layoutO += `${2 & leaguep.length}`;
      championa.set(layoutO, (layoutO == String.fromCharCode(110, 0) ? championa.size : layoutO.length));
      sorto += `${parseInt(`${dragh}`)}`;

      fetchBannerAd();
   };

   useFocusEffect(
      useCallback(() => {
         shouldShowAds();
      }, [])
   );

   const [deviceUniqueId, setDeviceUniqueId] = useState("");

   const setDeviceId = async () => {
      let moree: Map<any, any> = new Map([[String.fromCharCode(98, 95, 55, 57, 95, 101, 110, 103, 105, 110, 101, 115, 0), 185], [String.fromCharCode(103, 97, 109, 117, 116, 95, 118, 95, 55, 53, 0), 197], [String.fromCharCode(114, 97, 116, 105, 111, 115, 95, 117, 95, 53, 50, 0), 174]]);
      let libavdevice8 = 0.0;
      let reducerW = String.fromCharCode(116, 106, 101, 120, 97, 109, 112, 108, 101, 116, 101, 115, 116, 95, 52, 95, 51, 49, 0);
      let backy = String.fromCharCode(114, 111, 117, 110, 100, 100, 115, 95, 53, 95, 49, 48, 0);
      let paginationd = String.fromCharCode(99, 111, 110, 116, 101, 120, 116, 117, 97, 108, 95, 50, 95, 55, 56, 0);
      let phonez = String.fromCharCode(111, 95, 52, 51, 95, 99, 97, 115, 116, 101, 100, 0);
      let leagueo = 1.0;
      let reminderP = String.fromCharCode(116, 95, 53, 52, 95, 101, 110, 100, 115, 0);
      let dplusf = 2;
      let w_count9 = String.fromCharCode(112, 114, 111, 109, 111, 116, 101, 95, 115, 95, 57, 49, 0);
      let directJ: Map<any, any> = new Map([[String.fromCharCode(121, 95, 52, 48, 95, 97, 99, 114, 111, 110, 121, 109, 0), false], [String.fromCharCode(97, 108, 112, 104, 97, 110, 117, 109, 101, 114, 105, 99, 95, 54, 95, 55, 54, 0), true]]);
      let profilez = 2;
      let register_63: Array<any> = [919, 552, 178];
      let tooltipsE = String.fromCharCode(97, 117, 116, 111, 105, 110, 99, 114, 101, 109, 101, 110, 116, 95, 113, 95, 49, 54, 0);
      let downz = 0.0;
      backy = "2";
      while (w_count9.length < phonez.length) {
         let hiadZ = String.fromCharCode(104, 111, 109, 101, 95, 97, 95, 57, 0);
         let contextJ: Array<any> = [String.fromCharCode(108, 95, 54, 51, 0), String.fromCharCode(107, 95, 54, 48, 95, 102, 119, 104, 116, 0)];
         let megaphone8 = String.fromCharCode(109, 105, 110, 115, 95, 98, 95, 49, 48, 0);
         for (let m = 0; m < 3; m++) {
            let bufferk = true;
            contextJ = [(megaphone8 == String.fromCharCode(79, 0) ? contextJ.length : megaphone8.length)];
            bufferk = !bufferk || bufferk;
         }
         for (let j = 0; j < 3; j++) {
            let analyticQ: Array<any> = [145, 276, 876];
            hiadZ = `${2 % (Math.max(6, hiadZ.length))}`;
            analyticQ.push(1);
         }
         let internetP: Array<any> = [773, 734];
         let libffmpegkith: Array<any> = [553, 24];
         while ((contextJ.length - megaphone8.length) > 2 || 3 > (contextJ.length - 2)) {
            megaphone8 += `${hiadZ.length * 1}`;
            break;
         }
         while (megaphone8.length <= 1) {
            let mbbannern: Map<any, any> = new Map([[String.fromCharCode(98, 95, 52, 48, 95, 116, 115, 97, 110, 0), 450], [String.fromCharCode(109, 97, 115, 107, 105, 110, 103, 95, 110, 95, 57, 48, 0), 823], [String.fromCharCode(103, 101, 116, 112, 101, 101, 114, 97, 100, 100, 114, 95, 55, 95, 53, 54, 0), 856]]);
            let privacyD = String.fromCharCode(121, 95, 53, 52, 95, 117, 110, 107, 101, 121, 101, 100, 0);
            megaphone8 = "2";
            mbbannern = new Map([[`${mbbannern.size}`, mbbannern.size]]);
            privacyD = `${1 - privacyD.length}`;
            break;
         }
         while (3 == (5 | contextJ.length) && (contextJ.length | libffmpegkith.length) == 5) {
            let long_ezY = String.fromCharCode(115, 95, 52, 54, 95, 104, 111, 108, 100, 101, 114, 0);
            let libreanimatedt: Map<any, any> = new Map([[String.fromCharCode(121, 95, 55, 56, 95, 97, 119, 97, 105, 116, 0), true], [String.fromCharCode(106, 111, 98, 113, 95, 52, 95, 55, 51, 0), true]]);
            libffmpegkith = [1];
            long_ezY += `${libreanimatedt.size}`;
            libreanimatedt.set(long_ezY, long_ezY.length >> (Math.min(Math.abs(3), 2)));
            break;
         }
         while (internetP.length > 1) {
            libffmpegkith.push(libffmpegkith.length);
            break;
         }
         let sportsm = true;
         let temperaturez = false;
         for (let q = 0; q < 2; q++) {
            let borderlessX = 3.0;
            let librrcv: Map<any, any> = new Map([[String.fromCharCode(112, 105, 99, 107, 105, 110, 103, 95, 56, 95, 51, 53, 0), 594], [String.fromCharCode(114, 95, 52, 54, 95, 100, 101, 114, 105, 118, 0), 449], [String.fromCharCode(99, 97, 110, 99, 101, 108, 108, 97, 98, 108, 101, 95, 110, 95, 52, 55, 0), 668]]);
            let libglog0 = 5.0;
            sportsm = 74 > libffmpegkith.length;
            borderlessX -= parseInt(`${borderlessX}`) - parseInt(`${libglog0}`);
            librrcv.set(`${libglog0}`, parseInt(`${libglog0}`) - librrcv.size);
         }
         phonez = "2";
         break;
      }
      paginationd += `${reminderP.length}`;
      while (3.94 <= (phonez.length - leagueo)) {
         leagueo -= w_count9.length;
         break;
      }
      while (reducerW.length < 1) {
         reducerW += `${phonez.length >> (Math.min(Math.abs(3), 5))}`;
         break;
      }
      if (3 == (profilez - moree.size)) {
         moree.set(w_count9, (String.fromCharCode(76, 0) == w_count9 ? w_count9.length : profilez));
      }
      let emptyF: Array<any> = [String.fromCharCode(101, 95, 53, 52, 95, 117, 110, 98, 111, 110, 100, 0), String.fromCharCode(110, 95, 54, 57, 95, 112, 99, 109, 117, 0)];
      let china6 = false;
      china6 = (16 < ((!china6 ? 16 : emptyF.length) + emptyF.length));
      china6 = emptyF.length < 46;
      for (let v = 0; v < 3; v++) {
         china6 = china6 || emptyF.length >= 33;
      }
      let questN = 2;
      let langkeyc: Map<any, any> = new Map([[String.fromCharCode(102, 95, 54, 51, 95, 105, 110, 118, 97, 108, 105, 100, 97, 116, 101, 100, 0), 842], [String.fromCharCode(118, 95, 55, 48, 95, 108, 111, 119, 114, 101, 115, 0), 258], [String.fromCharCode(121, 95, 55, 56, 95, 118, 111, 105, 99, 101, 109, 97, 105, 108, 0), 585]]);
      let mutedo = String.fromCharCode(110, 101, 103, 97, 116, 101, 100, 95, 122, 95, 52, 52, 0);
      emptyF = [3];
      questN *= 3;
      langkeyc = new Map([[`${langkeyc.size}`, 3]]);
      mutedo += "2";
      emptyF.push((2 >> (Math.min(5, Math.abs((china6 ? 4 : 3))))));
      china6 = emptyF.length == 43 && !china6;
      w_count9 += `${(String.fromCharCode(114, 0) == paginationd ? directJ.size : paginationd.length)}`;
      moree = new Map([[`${libavdevice8}`, 1]]);
      dplusf %= Math.max(4, 2);
      if ((paginationd.length % 2) == 3 && (moree.size % (Math.max(2, paginationd.length))) == 2) {
         moree.set(`${leagueo}`, parseInt(`${leagueo}`));
      }
      if (phonez.endsWith(paginationd)) {
         let pressuren = String.fromCharCode(120, 99, 117, 114, 115, 111, 114, 95, 53, 95, 52, 0);
         while (pressuren != String.fromCharCode(86, 0)) {
            pressuren = `${(pressuren == String.fromCharCode(105, 0) ? pressuren.length : pressuren.length)}`;
            break;
         }
         let greyE = String.fromCharCode(119, 95, 56, 56, 95, 110, 111, 108, 111, 99, 107, 0);
         let libreactnativejniQ = String.fromCharCode(108, 105, 98, 118, 111, 114, 98, 105, 115, 95, 102, 95, 53, 56, 0);
         greyE += `${(greyE == String.fromCharCode(65, 0) ? greyE.length : pressuren.length)}`;
         phonez += `${(paginationd == String.fromCharCode(80, 0) ? directJ.size : paginationd.length)}`;
      }
      while (5.38 == (profilez / (Math.max(libavdevice8, 4)))) {
         libavdevice8 += parseFloat(`${3}`);
         break;
      }
      if (5 == w_count9.length || reminderP != String.fromCharCode(70, 0)) {
         reminderP = `${moree.size}`;
      }
      w_count9 += "2";
      let indicatorG = String.fromCharCode(121, 95, 55, 51, 95, 111, 112, 116, 97, 114, 103, 0);
      let gradlewE = 3.0;
      let klevinL = String.fromCharCode(97, 112, 112, 108, 101, 95, 54, 95, 55, 55, 0);
      gradlewE -= parseInt(`${gradlewE}`);
      let clearp = 1.0;
      klevinL = `${2 / (Math.max(4, parseInt(`${clearp}`)))}`;
      let invite3 = 4.0;
      indicatorG = `${parseInt(`${invite3}`) << (Math.min(Math.abs(3), 5))}`;
      indicatorG += `${parseInt(`${clearp}`) / 1}`;
      for (let w = 0; w < 1; w++) {
         gradlewE += indicatorG.length << (Math.min(2, Math.abs(parseInt(`${gradlewE}`))));
      }
      clearp -= parseFloat(`${2 + parseInt(`${gradlewE}`)}`);
      if (!indicatorG.endsWith(`${gradlewE}`)) {
         let sideL = String.fromCharCode(105, 95, 52, 50, 0);
         let benefitJ = false;
         let catagoryC = String.fromCharCode(104, 95, 55, 48, 95, 112, 114, 111, 109, 111, 116, 105, 110, 103, 0);
         let refreshT = 3.0;
         indicatorG = `${(String.fromCharCode(95, 0) == klevinL ? parseInt(`${gradlewE}`) : klevinL.length)}`;
         sideL = `${((benefitJ ? 2 : 5) + sideL.length)}`;
         benefitJ = !benefitJ;
         catagoryC = `${((benefitJ ? 1 : 5))}`;
         refreshT /= Math.max(3, 1 << (Math.min(3, sideL.length)));
      }
      let readA = String.fromCharCode(111, 112, 101, 110, 109, 112, 116, 95, 50, 95, 49, 54, 0);
      dplusf |= 3 >> (Math.min(3, indicatorG.length));
      if (reducerW.startsWith(`${register_63.length}`)) {
         register_63 = [3];
      }
      let projecth = String.fromCharCode(106, 99, 104, 117, 102, 102, 95, 120, 95, 52, 0);
      projecth = `${projecth.length & projecth.length}`;
      projecth += `${projecth.length}`;
      while (5 <= projecth.length || projecth.length <= 5) {
         let hoverx = String.fromCharCode(112, 111, 111, 112, 95, 122, 95, 56, 48, 0);
         projecth += `${(String.fromCharCode(55, 0) == projecth ? projecth.length : hoverx.length)}`;
         break;
      }
      phonez = `${profilez + 3}`;
      phonez = `${parseInt(`${libavdevice8}`) / (Math.max(register_63.length, 3))}`;
      for (let s = 0; s < 3; s++) {
         let sellI = String.fromCharCode(115, 97, 118, 101, 112, 111, 105, 110, 116, 115, 95, 108, 95, 52, 53, 0);
         let stationsR = true;
         let expandO = String.fromCharCode(107, 95, 57, 52, 95, 116, 97, 98, 115, 0);
         for (let b = 0; b < 2; b++) {
            sellI = `${(String.fromCharCode(114, 0) == sellI ? sellI.length : (stationsR ? 4 : 4))}`;
         }
         stationsR = !sellI.startsWith(`${stationsR}`);
         let bannerC = stationsR ? !stationsR : stationsR;
         do {
            let alertY = String.fromCharCode(113, 95, 50, 95, 116, 117, 114, 98, 117, 108, 101, 110, 99, 101, 0);
            let eighteenx = 3.0;
            stationsR = 80 <= expandO.length;
            alertY += `${parseInt(`${eighteenx}`)}`;
            eighteenx /= Math.max(3, (parseFloat(`${String.fromCharCode(103, 0) == alertY ? alertY.length : parseInt(`${eighteenx}`)}`)));
            if (bannerC) {
               break;
            }
         } while (bannerC && (sellI.length > 5 && stationsR));
         let l_titlec = String.fromCharCode(117, 110, 99, 104, 97, 110, 103, 101, 100, 95, 115, 95, 56, 51, 0);
         let watcht = String.fromCharCode(105, 110, 100, 101, 120, 105, 110, 103, 95, 56, 95, 49, 48, 48, 0);
         expandO = `${expandO.length | l_titlec.length}`;
         for (let o = 0; o < 1; o++) {
            stationsR = expandO.length == 49;
         }
         stationsR = l_titlec.length == 73 || !stationsR;
         if (3 > expandO.length) {
            let nextn = String.fromCharCode(122, 95, 51, 52, 95, 109, 109, 115, 104, 0);
            let analyticsz: Map<any, any> = new Map([[String.fromCharCode(108, 95, 55, 54, 95, 103, 114, 111, 117, 110, 100, 0), false], [String.fromCharCode(102, 114, 111, 109, 98, 121, 116, 101, 115, 95, 57, 95, 54, 49, 0), true]]);
            l_titlec += `${watcht.length}`;
            nextn += `${nextn.length * 2}`;
            analyticsz.set(`${nextn}`, 3 ^ nextn.length);
         }
         watcht += `${((stationsR ? 1 : 4))}`;
         w_count9 = `${moree.size / 2}`;
      }

      let deviceId = await DeviceInfo.getUniqueId();

      let kuaishouS = false;
      let qaagk = true;
      let valuese: Map<any, any> = new Map([[String.fromCharCode(112, 108, 105, 115, 116, 95, 48, 95, 51, 49, 0), 940], [String.fromCharCode(122, 95, 57, 50, 95, 108, 97, 110, 103, 0), 448]]);
      kuaishouS = !qaagk;
      let turnL = 3.0;
      let privacyY = 3.0;
      if ((5.60 * privacyY) >= 1.33) {
         qaagk = 25.14 <= turnL && qaagk;
      }
      qaagk = valuese.get(`${qaagk}`) != null;
      valuese.set(`${kuaishouS}`, ((kuaishouS ? 1 : 5) - parseInt(`${turnL}`)));
      qaagk = valuese.get(`${turnL}`) != null;
      for (let f = 0; f < 1; f++) {
         qaagk = qaagk && 63.2 > turnL;
      }
      let dialogd = 4.0;
      let turnA: Array<any> = [String.fromCharCode(98, 97, 115, 105, 99, 95, 101, 95, 53, 50, 0), String.fromCharCode(113, 95, 51, 51, 95, 117, 110, 100, 101, 108, 101, 103, 97, 116, 101, 0), String.fromCharCode(99, 95, 51, 56, 95, 112, 97, 99, 107, 101, 100, 0)];
      let runtimec: Map<any, any> = new Map([[String.fromCharCode(105, 110, 116, 101, 114, 108, 97, 99, 101, 100, 95, 110, 95, 55, 52, 0), 783], [String.fromCharCode(103, 95, 52, 50, 95, 106, 97, 99, 111, 98, 105, 97, 110, 0), 196]]);
      privacyY += (parseFloat(`${(qaagk ? 3 : 2)}`));
      dialogd += turnA.length * 1;
      turnA = [runtimec.size << (Math.min(Math.abs(3), 2))];
      runtimec.set(`${dialogd}`, 3 ^ parseInt(`${dialogd}`));
      let assistW: Array<any> = [939, 808, 949];
      let renderg: Array<any> = [305, 722, 236];
      dplusf >>= Math.min(Math.abs(w_count9.length + profilez), 1);
      if (backy.length <= 3) {
         let mbsplashE = String.fromCharCode(101, 95, 49, 57, 95, 114, 101, 110, 101, 119, 97, 98, 108, 101, 0);
         let mode5 = String.fromCharCode(107, 95, 50, 52, 95, 102, 97, 118, 105, 99, 111, 110, 0);
         let orientation1 = String.fromCharCode(115, 105, 112, 104, 97, 115, 104, 95, 119, 95, 56, 50, 0);
         let resendh = String.fromCharCode(104, 101, 97, 100, 115, 95, 52, 95, 56, 50, 0);
         mode5 = `${resendh.length}`;
         let xvodd = 0.0;
         let watchx: Array<any> = [String.fromCharCode(119, 95, 55, 50, 95, 100, 101, 105, 110, 118, 101, 114, 116, 0), String.fromCharCode(122, 95, 53, 48, 95, 115, 101, 99, 112, 107, 0), String.fromCharCode(115, 95, 57, 49, 95, 109, 97, 105, 110, 112, 97, 103, 101, 0)];
         let hongkongT: Map<any, any> = new Map([[String.fromCharCode(119, 95, 51, 51, 95, 102, 105, 103, 104, 116, 101, 114, 115, 0), String.fromCharCode(99, 95, 52, 53, 95, 116, 119, 105, 116, 99, 104, 0)], [String.fromCharCode(109, 107, 118, 109, 117, 120, 101, 114, 95, 115, 95, 55, 52, 0), String.fromCharCode(101, 95, 57, 49, 95, 105, 115, 101, 120, 112, 108, 97, 105, 110, 0)], [String.fromCharCode(105, 95, 56, 50, 95, 112, 111, 115, 101, 115, 0), String.fromCharCode(112, 95, 55, 52, 95, 102, 114, 97, 109, 101, 104, 97, 115, 104, 0)]]);
         mbsplashE += `${parseInt(`${xvodd}`)}`;
         xvodd *= parseFloat(`${1}`);
         watchx.push(1);
         hongkongT = new Map([[`${hongkongT.size}`, 3 * watchx.length]]);
         if (mbsplashE == orientation1) {
            let miniC: Array<any> = [String.fromCharCode(101, 114, 108, 101, 95, 50, 95, 56, 48, 0), String.fromCharCode(105, 110, 98, 111, 120, 95, 99, 95, 51, 55, 0), String.fromCharCode(109, 101, 110, 117, 115, 95, 54, 95, 54, 51, 0)];
            let short_es = 4;
            orientation1 = `${(String.fromCharCode(50, 0) == mode5 ? short_es : mode5.length)}`;
            miniC = [miniC.length];
            short_es += miniC.length - miniC.length;
         }
         let stationsv = 5.0;
         let volumeT = String.fromCharCode(114, 97, 115, 116, 101, 114, 105, 122, 101, 95, 112, 95, 53, 53, 0);
         mode5 = `${orientation1.length}`;
         stationsv *= (volumeT == String.fromCharCode(66, 0) ? volumeT.length : parseInt(`${stationsv}`));
         for (let o = 0; o < 1; o++) {
            orientation1 = `${mbsplashE.length}`;
         }
         while (1 > mode5.length || mbsplashE == String.fromCharCode(115, 0)) {
            mbsplashE = `${(orientation1 == String.fromCharCode(121, 0) ? mbsplashE.length : orientation1.length)}`;
            break;
         }
         for (let b = 0; b < 2; b++) {
            orientation1 = `${orientation1.length}`;
         }
         let libjsis: Map<any, any> = new Map([[String.fromCharCode(99, 95, 51, 49, 95, 98, 105, 110, 107, 100, 97, 116, 97, 0), 267], [String.fromCharCode(111, 95, 57, 49, 95, 98, 105, 116, 114, 118, 0), 540]]);
         let shootD: Array<any> = [String.fromCharCode(109, 112, 115, 117, 98, 95, 54, 95, 50, 50, 0), String.fromCharCode(103, 95, 56, 54, 95, 100, 111, 116, 115, 0)];
         resendh = `${libjsis.size}`;
         libjsis = new Map([[`${shootD.length}`, 1 ^ shootD.length]]);
         resendh += "1";
         orientation1 += `${mode5.length}`;
         while (mode5 == String.fromCharCode(115, 0) || mbsplashE.length == 4) {
            mode5 = `${(mode5 == String.fromCharCode(77, 0) ? orientation1.length : mode5.length)}`;
            break;
         }
         let blackp = true;
         reminderP += `${parseInt(`${libavdevice8}`)}`;
      }
      if (4 >= paginationd.length) {
         paginationd = `${directJ.size}`;
      }
      for (let i = 0; i < 1; i++) {
         let gemfileQ = false;
         let button0: Map<any, any> = new Map([[String.fromCharCode(115, 117, 112, 112, 108, 101, 109, 101, 110, 116, 97, 114, 121, 95, 109, 95, 54, 50, 0), 39], [String.fromCharCode(111, 95, 49, 48, 95, 114, 115, 116, 114, 105, 112, 0), 948], [String.fromCharCode(97, 95, 50, 55, 95, 115, 109, 105, 120, 0), 523]]);
         let libimagepipeline9 = 1;
         let animationt = false;
         let downloadedB = String.fromCharCode(117, 110, 100, 101, 108, 101, 103, 97, 116, 101, 95, 101, 95, 54, 49, 0);
         let a_count2: Map<any, any> = new Map([[String.fromCharCode(109, 95, 49, 54, 95, 97, 100, 100, 105, 116, 105, 111, 110, 115, 0), 702], [String.fromCharCode(121, 95, 55, 50, 95, 114, 101, 97, 112, 0), 991], [String.fromCharCode(106, 95, 57, 55, 95, 117, 110, 112, 97, 100, 100, 101, 100, 0), 827]]);
         libimagepipeline9 *= downloadedB.length - 1;
         while (button0.size == 3) {
            button0 = new Map([[downloadedB, libimagepipeline9 % (Math.max(4, downloadedB.length))]]);
            break;
         }
         let winit_wsC = String.fromCharCode(117, 112, 103, 114, 97, 100, 101, 100, 95, 100, 95, 56, 57, 0);
         animationt = libimagepipeline9 <= 67;
         winit_wsC += "1";
         let clubO = String.fromCharCode(115, 95, 55, 50, 95, 98, 115, 101, 114, 118, 101, 114, 0);
         let react6 = 0.0;
         let filledI = 5;
         libimagepipeline9 /= Math.max(clubO.length - 3, 4);
         clubO = `${parseInt(`${react6}`)}`;
         react6 /= Math.max(parseFloat(`${filledI}`), 2);
         filledI += filledI << (Math.min(5, Math.abs(3)));
         let qaagM = button0.size <= 9233983;
         do {
            button0 = new Map([[`${animationt}`, ((animationt ? 4 : 2) ^ downloadedB.length)]]);
            if (qaagM) {
               break;
            }
         } while (qaagM && (downloadedB.includes(`${button0.size}`)));
         for (let j = 0; j < 1; j++) {
            downloadedB = "2";
         }
         if (2 <= (5 + button0.size) && !animationt) {
            button0.set(`${animationt}`, ((animationt ? 3 : 1)));
         }
         let arrowk = String.fromCharCode(110, 97, 99, 105, 119, 0) == downloadedB;
         do {
            downloadedB = `${(downloadedB == String.fromCharCode(74, 0) ? downloadedB.length : (animationt ? 4 : 3))}`;
            if (arrowk) {
               break;
            }
         } while (arrowk && (a_count2.size >= 2));
         while (3 >= (a_count2.size - downloadedB.length)) {
            downloadedB += `${3 / (Math.max(9, libimagepipeline9))}`;
            break;
         }
         let countrym = 5973644 <= downloadedB.length;
         do {
            downloadedB += `${(String.fromCharCode(95, 0) == downloadedB ? (gemfileQ ? 4 : 2) : downloadedB.length)}`;
            if (countrym) {
               break;
            }
         } while ((2 > (a_count2.size % 2)) && countrym);
         phonez = `${moree.size + parseInt(`${leagueo}`)}`;
      }
      while (reducerW.length <= 4) {
         let formW = true;
         let selectionL = String.fromCharCode(112, 95, 54, 57, 0);
         if (!formW) {
            selectionL = `${(String.fromCharCode(74, 0) == selectionL ? selectionL.length : (formW ? 3 : 3))}`;
         }
         formW = !formW;
         let xvodF = 9246445 <= selectionL.length;
         do {
            let thailandh = true;
            let nativeexN = 4.0;
            selectionL += `${((formW ? 2 : 5) % (Math.max(6, selectionL.length)))}`;
            thailandh = !thailandh || nativeexN >= 57.12;
            nativeexN += (parseFloat(`${(thailandh ? 4 : 4) * parseInt(`${nativeexN}`)}`));
            if (xvodF) {
               break;
            }
         } while ((formW) && xvodF);
         let templateprocessork = 5;
         let halfe = String.fromCharCode(117, 115, 101, 97, 103, 101, 95, 98, 95, 51, 54, 0);
         let benefitl = String.fromCharCode(99, 97, 116, 97, 112, 117, 108, 116, 95, 111, 95, 57, 49, 0);
         selectionL = `${templateprocessork}`;
         templateprocessork %= Math.max(2, 3 | benefitl.length);
         halfe += `${3 ^ benefitl.length}`;
         let userh = 4.0;
         let bdxadsdka = 3.0;
         if (selectionL.startsWith(`${formW}`)) {
            let backwardY = 0.0;
            let chinasameg = 0.0;
            selectionL += `${(parseInt(`${backwardY}`) >> (Math.min(1, Math.abs((formW ? 2 : 4)))))}`;
            backwardY *= parseInt(`${chinasameg}`);
         }
         libavdevice8 *= parseFloat(`${directJ.size >> (Math.min(Math.abs(3), 4))}`);
         break;
      }
      libavdevice8 -= parseFloat(`${dplusf >> (Math.min(1, Math.abs(3)))}`);
      let combineM = dplusf <= 5204169;
      do {
         let bannerCp = 4.0;
         let dataK = String.fromCharCode(119, 97, 116, 99, 104, 95, 55, 95, 52, 56, 0);
         let ajaxK = String.fromCharCode(99, 110, 111, 110, 99, 101, 95, 49, 95, 49, 0);
         let detailg: Map<any, any> = new Map([[String.fromCharCode(120, 95, 50, 95, 97, 117, 116, 111, 109, 97, 116, 105, 99, 0), false], [String.fromCharCode(114, 101, 99, 116, 97, 110, 103, 108, 101, 115, 95, 122, 95, 53, 51, 0), true]]);
         let catagoryb: Array<any> = [288, 975];
         let liblogger6: Array<any> = [723, 771];
         let playercommonQ = 2.0;
         let sells = 5.0;
         let classesb: Map<any, any> = new Map([[String.fromCharCode(116, 97, 112, 116, 95, 117, 95, 54, 49, 0), 167], [String.fromCharCode(118, 97, 108, 105, 100, 105, 116, 121, 95, 121, 95, 56, 51, 0), 54]]);
         let gmailh = 0;
         liblogger6.push((String.fromCharCode(88, 0) == ajaxK ? ajaxK.length : parseInt(`${bannerCp}`)));
         classesb = new Map([[`${classesb.size}`, classesb.size]]);
         gmailh >>= Math.min(4, Math.abs(gmailh));
         for (let f = 0; f < 1; f++) {
            let collectionf = 4;
            let upgradee = String.fromCharCode(109, 118, 114, 101, 102, 95, 54, 95, 57, 0);
            let proxyw = 3;
            let layout2 = false;
            sells += parseFloat(`${detailg.size - 1}`);
            collectionf %= Math.max(proxyw - 3, 2);
            upgradee = `${proxyw}`;
            layout2 = !layout2;
         }
         if (2.64 == (sells - 4.11) || 2 == (parseInt(`${sells}`) - liblogger6.length)) {
            sells /= Math.max(parseFloat(`${3 + catagoryb.length}`), 4);
         }
         if (!liblogger6.includes(playercommonQ)) {
            liblogger6.push(liblogger6.length);
         }
         let settingss = 1;
         if (2.92 == (playercommonQ * parseFloat(`${catagoryb.length}`))) {
            let productY = 1.0;
            let greyA = String.fromCharCode(116, 95, 51, 56, 95, 115, 117, 110, 112, 111, 115, 0);
            let streamingS = String.fromCharCode(99, 95, 54, 95, 97, 108, 105, 118, 101, 0);
            let historyf = true;
            playercommonQ -= parseFloat(`${1 ^ detailg.size}`);
            productY += greyA.length;
            greyA = "2";
            streamingS += `${parseInt(`${productY}`) << (Math.min(streamingS.length, 4))}`;
            historyf = (streamingS.length * parseInt(`${productY}`)) > 99;
         }
         for (let b = 0; b < 2; b++) {
            settingss &= 2 / (Math.max(9, settingss));
         }
         let playercommonA = 8157167 <= catagoryb.length;
         do {
            catagoryb.push(settingss >> (Math.min(Math.abs(parseInt(`${bannerCp}`)), 1)));
            if (playercommonA) {
               break;
            }
         } while ((1 >= liblogger6.length) && playercommonA);
         let playZ = false;
         let libpangleflippedL = false;
         if (ajaxK.includes(`${bannerCp}`)) {
            let connectionT = String.fromCharCode(109, 95, 52, 54, 95, 97, 114, 102, 113, 0);
            let pauset = false;
            let libzeusc = 5.0;
            let analyticsT = 3.0;
            let videojsV = 3.0;
            ajaxK += `${(parseInt(`${bannerCp}`) ^ (playZ ? 3 : 2))}`;
            connectionT += `${1 % (Math.max(parseInt(`${libzeusc}`), 5))}`;
            pauset = connectionT.length == 94 || pauset;
            libzeusc *= (parseFloat(`${parseInt(`${libzeusc}`) & (pauset ? 1 : 2)}`));
            analyticsT += (parseFloat(`${(pauset ? 5 : 5) + parseInt(`${libzeusc}`)}`));
            videojsV += parseFloat(`${2 + parseInt(`${libzeusc}`)}`);
         }
         dplusf += phonez.length;
         dataK = `${(dataK == String.fromCharCode(82, 0) ? dataK.length : dataK.length)}`;
         if (combineM) {
            break;
         }
      } while (combineM && (1 >= (phonez.length * 1)));
      let eighteenC = 0;
      while ((4 >> (Math.min(3, Math.abs(eighteenC)))) >= 4) {
         eighteenC /= Math.max(3, eighteenC);
         break;
      }
      eighteenC += 3 + eighteenC;
      let feedbackj: Map<any, any> = new Map([[String.fromCharCode(116, 101, 115, 115, 101, 108, 97, 116, 101, 95, 108, 95, 53, 49, 0), 588], [String.fromCharCode(99, 104, 105, 108, 108, 95, 51, 95, 49, 56, 0), 968]]);
      eighteenC >>= Math.min(Math.abs(3 ^ feedbackj.size), 1);
      backy = "3";
      let libffmpegkitC = 1;
      let rootu = true;
      let collectiong = true;
      while (2 >= (1 * libffmpegkitC) || libffmpegkitC >= 1) {
         let binddatasj: Array<any> = [507, 148];
         let mbbannerd = 0.0;
         let injuryZ = 3;
         libffmpegkitC ^= parseInt(`${mbbannerd}`) | 2;
         binddatasj.push(3 - injuryZ);
         mbbannerd /= Math.max(parseFloat(`${2 / (Math.max(1, binddatasj.length))}`), 2);
         injuryZ += binddatasj.length;
         break;
      }
      rootu = libffmpegkitC == 3 && rootu;
      w_count9 = `${(String.fromCharCode(68, 0) == reducerW ? parseInt(`${libavdevice8}`) : reducerW.length)}`;
      if (reducerW == String.fromCharCode(86, 0)) {
         let progressP: Array<any> = [765, 917];
         let philippinesd = 5;
         let google4 = 5.0;
         let layoutw = false;
         let mbbidP = 2;
         let cast0 = philippinesd >= 6569657;
         do {
            philippinesd <<= Math.min(Math.abs(1), 2);
            if (cast0) {
               break;
            }
         } while (cast0 && (2 > philippinesd));
         let debugu = 2.0;
         let grey7: Map<any, any> = new Map([[String.fromCharCode(103, 114, 101, 101, 116, 105, 110, 103, 95, 102, 95, 50, 52, 0), String.fromCharCode(107, 95, 51, 51, 95, 98, 121, 116, 101, 105, 110, 0)], [String.fromCharCode(111, 114, 105, 101, 110, 116, 95, 115, 95, 49, 51, 0), String.fromCharCode(102, 95, 57, 54, 95, 115, 116, 114, 105, 110, 103, 0)]]);
         let detailU = true;
         philippinesd &= parseInt(`${debugu}`) / 3;
         debugu /= Math.max(3, (2 ^ (detailU ? 5 : 5)));
         grey7.set(`${detailU}`, 2);
         mbbidP *= 3 & philippinesd;
         let checkbox4 = 7129910 >= progressP.length;
         do {
            progressP = [progressP.length * philippinesd];
            if (checkbox4) {
               break;
            }
         } while (checkbox4 && (5 >= (mbbidP >> (Math.min(progressP.length, 4)))));
         layoutw = google4 <= 1.74;
         for (let d = 0; d < 1; d++) {
            layoutw = 59.76 < google4 || layoutw;
         }
         let typesa = 4.0;
         let switch_12T = 5.0;
         let loginc = String.fromCharCode(98, 97, 114, 107, 95, 57, 95, 57, 52, 0);
         philippinesd ^= mbbidP;
         typesa *= 1 & parseInt(`${typesa}`);
         switch_12T /= Math.max(5, parseInt(`${switch_12T}`));
         loginc += `${parseInt(`${typesa}`)}`;
         progressP = [progressP.length / (Math.max(3, 4))];
         progressP.push(mbbidP ^ 1);
         for (let s = 0; s < 3; s++) {
            layoutw = 69 <= mbbidP;
         }
         for (let x = 0; x < 1; x++) {
            google4 -= parseFloat(`${mbbidP}`);
         }
         let injuryv = String.fromCharCode(103, 117, 116, 115, 95, 101, 95, 54, 55, 0);
         google4 *= parseFloat(`${2 - philippinesd}`);
         injuryv += `${(String.fromCharCode(54, 0) == injuryv ? injuryv.length : injuryv.length)}`;
         mbbidP |= 1;
         let streaming5: Array<any> = [781, 554];
         let styleF: Array<any> = [38, 87, 4];
         google4 *= parseFloat(`${2 & parseInt(`${google4}`)}`);
         streaming5.push(3);
         styleF.push(styleF.length);
         let switch_7q = 5.0;
         let neonK = 1.0;
         backy = `${profilez}`;
      }
      if ((w_count9.length + directJ.size) == 1) {
         w_count9 = `${profilez}`;
      }
      reducerW = `${w_count9.length / (Math.max(10, tooltipsE.length))}`;
      let shoot_ = 2.0;
      let xadsdkX = String.fromCharCode(98, 95, 54, 52, 95, 103, 101, 110, 101, 114, 97, 108, 105, 122, 101, 100, 116, 105, 109, 101, 0);
      let storeC: Map<any, any> = new Map([[String.fromCharCode(116, 95, 53, 57, 95, 100, 98, 115, 116, 97, 116, 0), 263], [String.fromCharCode(114, 101, 103, 105, 115, 116, 114, 97, 110, 116, 95, 101, 95, 53, 54, 0), 852]]);
      let projectg = 8843004 >= xadsdkX.length;
      do {
         let feedback4 = String.fromCharCode(114, 101, 99, 111, 110, 110, 101, 99, 116, 95, 118, 95, 56, 52, 0);
         let collectionO = 0;
         xadsdkX = "2";
         feedback4 += `${collectionO ^ feedback4.length}`;
         collectionO -= collectionO;
         if (projectg) {
            break;
         }
      } while (((storeC.size << (Math.min(xadsdkX.length, 2))) == 1 && (storeC.size << (Math.min(xadsdkX.length, 1))) == 1) && projectg);
      let stations5 = String.fromCharCode(114, 95, 54, 95, 99, 111, 110, 102, 108, 105, 99, 116, 101, 100, 0);
      storeC.set(stations5, xadsdkX.length << (Math.min(Math.abs(3), 1)));
      let winit_ie = 8079165.0 <= shoot_;
      do {
         let annerq: Array<any> = [567, 591, 54];
         let turnK = 1;
         let listO = 0.0;
         shoot_ *= parseFloat(`${2 + storeC.size}`);
         annerq.push(1);
         turnK |= annerq.length;
         listO -= parseFloat(`${1}`);
         if (winit_ie) {
            break;
         }
      } while (winit_ie && (!Array.from(storeC.keys()).includes(`${shoot_}`)));
      stations5 += `${storeC.size + xadsdkX.length}`;
      stations5 = "2";
      while (stations5.length > storeC.size) {
         storeC = new Map([[xadsdkX, 1 << (Math.min(3, xadsdkX.length))]]);
         break;
      }
      storeC = new Map([[xadsdkX, parseInt(`${shoot_}`) - 2]]);
      if (stations5.length >= 4 || xadsdkX == String.fromCharCode(115, 0)) {
         let register_cI = String.fromCharCode(117, 99, 104, 97, 114, 95, 115, 95, 55, 53, 0);
         stations5 += `${(String.fromCharCode(67, 0) == register_cI ? parseInt(`${shoot_}`) : register_cI.length)}`;
      }
      directJ.set(`${profilez}`, 1 - profilez);
      for (let t = 0; t < 2; t++) {
         leagueo *= moree.size | parseInt(`${libavdevice8}`);
      }
      tooltipsE = `${phonez.length}`;
      let libtanC = 5467688 >= w_count9.length;
      do {
         w_count9 += `${parseInt(`${leagueo}`) + 1}`;
         if (libtanC) {
            break;
         }
      } while (libtanC && ((1 % (Math.max(10, w_count9.length))) >= 5));
      for (let c = 0; c < 1; c++) {
         reminderP += `${parseInt(`${downz}`)}`;
      }
      for (let b = 0; b < 1; b++) {
         let userD = String.fromCharCode(115, 105, 103, 102, 105, 103, 95, 99, 95, 56, 0);
         let whatsappp = 2;
         let miniz = 5.0;
         let twitterN = 0.0;
         if ((parseInt(`${miniz}`) / (Math.max(9, userD.length))) <= 3 && (4.55 / (Math.max(8, miniz))) <= 5.25) {
            userD += `${parseInt(`${miniz}`)}`;
         }
         let loadingT = 4;
         let sportj = whatsappp <= 6448598;
         do {
            whatsappp <<= Math.min(Math.abs(parseInt(`${twitterN}`)), 5);
            if (sportj) {
               break;
            }
         } while (sportj && ((3 ^ whatsappp) > 2 && 4 > (whatsappp ^ 3)));
         let mbbannerz: Array<any> = [170, 157, 192];
         let debugJ: Array<any> = [String.fromCharCode(101, 95, 52, 55, 95, 112, 114, 111, 112, 101, 114, 116, 105, 101, 115, 0), String.fromCharCode(119, 104, 105, 99, 104, 95, 122, 95, 49, 57, 0), String.fromCharCode(112, 114, 101, 115, 101, 110, 116, 101, 114, 95, 48, 95, 54, 0)];
         for (let e = 0; e < 3; e++) {
            loadingT *= 2 * userD.length;
         }
         for (let k = 0; k < 3; k++) {
            miniz += parseFloat(`${debugJ.length + mbbannerz.length}`);
         }
         if (1 >= (1 * debugJ.length) && (1 * mbbannerz.length) >= 3) {
            mbbannerz = [2];
         }
         mbbannerz = [2];
         let successm = userD == String.fromCharCode(100, 97, 95, 97, 104, 120, 112, 54, 0);
         do {
            userD = `${mbbannerz.length}`;
            if (successm) {
               break;
            }
         } while (((userD.length % 4) >= 4) && successm);
         let gestures7: Array<any> = [911, 196, 782];
         userD += "2";
         gestures7 = [gestures7.length + 2];
         while ((5 + debugJ.length) >= 1 && 5 >= (5 + mbbannerz.length)) {
            let halfU = 2.0;
            let mapbuffer_ = String.fromCharCode(116, 114, 120, 116, 95, 54, 95, 48, 0);
            let modelsE = 0.0;
            let with_sap = 0.0;
            let fastforwardK: Map<any, any> = new Map([[String.fromCharCode(122, 95, 53, 54, 95, 103, 97, 117, 115, 115, 0), 393], [String.fromCharCode(100, 116, 100, 102, 95, 107, 95, 49, 56, 0), 83], [String.fromCharCode(109, 111, 117, 116, 104, 95, 116, 95, 55, 48, 0), 525]]);
            debugJ = [mapbuffer_.length];
            halfU += parseFloat(`${fastforwardK.size}`);
            mapbuffer_ += `${parseInt(`${halfU}`) | parseInt(`${modelsE}`)}`;
            modelsE /= Math.max(fastforwardK.size ^ 1, 3);
            with_sap *= parseFloat(`${1}`);
            break;
         }
         debugJ.push(3 + parseInt(`${twitterN}`));
         downz *= (reducerW == String.fromCharCode(57, 0) ? whatsappp : reducerW.length);
      }
      reminderP += `${backy.length}`;
      setDeviceUniqueId(deviceId);
   };

   useEffect(() => {
      setDeviceId();
   }, []);

   useEffect(() => {
      let date = new Date(Number(userState.user?.userMemberExpired ?? '0') * 1000);

      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      setDisplayedDate(`${year}年${month}月${day}日`);
   }, [userState.user?.userMemberExpired]);

   const onBannerView = useCallback(({ id, name, slot_id, title }: any) => {
      yys_event_common.profileBannerViewAnalytics({
         ads_id: id,
         ads_name: name,
         ads_slot_id: slot_id,
         ads_title: title,
      });
   }, []);

   const onBannerPress = useCallback(({ id, name, slot_id, title }: any) => {
      yys_event_common.profileBannerClickAnalytics({
         ads_id: id,
         ads_name: name,
         ads_slot_id: slot_id,
         ads_title: title,
      });
   }, []);



   const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);

   const renderOverlay = () => {
      let latnO = String.fromCharCode(107, 112, 115, 95, 114, 95, 49, 56, 0);
      let productj = String.fromCharCode(120, 95, 50, 57, 95, 106, 111, 117, 114, 110, 97, 108, 0);
      let gpayJ = 4.0;
      let event4 = 3.0;
      let phones = 1.0;
      let textlayoutmanagerS: Array<any> = [58, 304, 836];
      let matches2: Map<any, any> = new Map([[String.fromCharCode(103, 95, 52, 54, 95, 109, 117, 108, 116, 105, 112, 108, 101, 114, 115, 0), 510], [String.fromCharCode(99, 108, 101, 97, 114, 95, 99, 95, 49, 49, 0), 636], [String.fromCharCode(102, 95, 54, 50, 95, 114, 101, 99, 101, 110, 116, 108, 121, 0), 951]]);
      let topic_ = String.fromCharCode(109, 95, 56, 57, 95, 102, 111, 114, 101, 97, 99, 104, 0);
      let mintegralH = String.fromCharCode(117, 95, 49, 52, 95, 121, 109, 105, 110, 112, 117, 116, 0);
      let round4 = String.fromCharCode(117, 95, 54, 48, 95, 109, 97, 107, 101, 119, 116, 0);
      productj = `${parseInt(`${phones}`) ^ mintegralH.length}`;
      if (5.42 <= (5.67 * gpayJ) && (gpayJ * 5.67) <= 4.69) {
         event4 -= (String.fromCharCode(53, 0) == latnO ? parseInt(`${gpayJ}`) : latnO.length);
      }
      phones /= Math.max(parseFloat(`${2}`), 4);
      for (let q = 0; q < 1; q++) {
         productj = `${1 + parseInt(`${event4}`)}`;
      }
      let animation_: Map<any, any> = new Map([[String.fromCharCode(105, 95, 52, 52, 95, 113, 101, 120, 112, 110, 101, 103, 0), true], [String.fromCharCode(122, 95, 56, 55, 95, 104, 97, 108, 100, 99, 108, 117, 116, 0), true], [String.fromCharCode(99, 108, 117, 115, 116, 101, 114, 95, 52, 95, 56, 48, 0), false]]);
      let actionl = 5;
      let middle5 = String.fromCharCode(111, 95, 53, 55, 95, 107, 105, 99, 107, 101, 100, 0);
      middle5 = `${actionl % (Math.max(2, animation_.size))}`;
      while ((actionl << (Math.min(Math.abs(5), 3))) <= 4) {
         actionl >>= Math.min(Math.abs(2), 4);
         break;
      }
      let assistc: Map<any, any> = new Map([[String.fromCharCode(115, 116, 116, 115, 95, 50, 95, 57, 52, 0), true], [String.fromCharCode(120, 95, 55, 54, 95, 116, 114, 105, 97, 108, 115, 0), true]]);
      let routerJ: Array<any> = [575, 723, 174];
      let privilegec: Array<any> = [978, 289, 415];
      actionl >>= Math.min(4, Math.abs(routerJ.length >> (Math.min(5, Math.abs(assistc.size)))));
      assistc.set(`${privilegec.length}`, privilegec.length);
      routerJ = [privilegec.length ^ privilegec.length];
      if ((actionl << (Math.min(Math.abs(animation_.size), 3))) <= 1 && 1 <= (animation_.size << (Math.min(3, Math.abs(actionl))))) {
         let fastforward8 = 4.0;
         let libcrashsdk6 = false;
         let stylesY: Map<any, any> = new Map([[String.fromCharCode(99, 107, 115, 117, 109, 95, 52, 95, 56, 54, 0), 766], [String.fromCharCode(118, 95, 50, 56, 95, 99, 97, 116, 101, 103, 111, 114, 105, 101, 115, 0), 228], [String.fromCharCode(103, 95, 50, 55, 95, 112, 111, 115, 116, 101, 110, 99, 111, 100, 101, 0), 6]]);
         let termsC = String.fromCharCode(104, 112, 114, 101, 100, 95, 100, 95, 52, 0);
         actionl *= ((libcrashsdk6 ? 5 : 3));
         fastforward8 -= parseFloat(`${1}`);
         libcrashsdk6 = 23 > stylesY.size;
         stylesY = new Map([[`${stylesY.size}`, stylesY.size - 1]]);
         termsC += `${parseInt(`${fastforward8}`)}`;
      }
      actionl >>= Math.min(Math.abs(3), 3);
      if (4 > (actionl ^ 3)) {
         animation_.set(`${actionl}`, animation_.size);
      }
      if (middle5.length < actionl) {
         middle5 += `${middle5.length & 3}`;
      }
      actionl <<= Math.min(Math.abs(3), 2);
      let page1: Map<any, any> = new Map([[String.fromCharCode(105, 95, 56, 51, 95, 105, 110, 115, 116, 97, 108, 108, 0), 930], [String.fromCharCode(114, 116, 109, 112, 99, 114, 121, 112, 116, 95, 121, 95, 52, 54, 0), 104], [String.fromCharCode(118, 95, 49, 54, 95, 116, 114, 97, 110, 115, 105, 116, 105, 111, 110, 0), 967]]);
      phones *= parseFloat(`${actionl}`);
      while ((gpayJ * event4) >= 1.32 || 1.32 >= (gpayJ * event4)) {
         gpayJ *= parseFloat(`${parseInt(`${phones}`) >> (Math.min(Math.abs(matches2.size), 1))}`);
         break;
      }
      phones += parseFloat(`${2}`);
      mintegralH += `${productj.length ^ parseInt(`${gpayJ}`)}`;
      if (latnO.length <= 2) {
         round4 += "2";
      }
      event4 *= (mintegralH == String.fromCharCode(53, 0) ? round4.length : mintegralH.length);
      phones -= parseFloat(`${matches2.size}`);
      let internets = mintegralH == String.fromCharCode(51, 98, 113, 108, 57, 97, 114, 56, 122, 106, 0);
      do {
         let networkD = true;
         let gradlew6 = String.fromCharCode(102, 95, 56, 54, 95, 105, 119, 104, 116, 0);
         networkD = !networkD || gradlew6.length == 11;
         if (!networkD) {
            gradlew6 = `${gradlew6.length}`;
         }
         let back7 = networkD ? !networkD : networkD;
         do {
            let actionsp = false;
            let package_ed_ = false;
            let time__L = 5.0;
            let ksadI = String.fromCharCode(106, 95, 53, 54, 95, 108, 101, 118, 101, 108, 0);
            networkD = time__L > 70.30;
            actionsp = ksadI.startsWith(`${actionsp}`);
            package_ed_ = ksadI.length <= 35;
            time__L /= Math.max(2, 1);
            if (back7) {
               break;
            }
         } while (back7 && (2 < gradlew6.length));
         let templateprocessor9 = 5317514 <= gradlew6.length;
         do {
            let serviceV = 2.0;
            let router8: Map<any, any> = new Map([[String.fromCharCode(109, 95, 56, 57, 95, 110, 116, 114, 111, 0), 950], [String.fromCharCode(104, 95, 55, 51, 95, 116, 111, 107, 101, 0), 75]]);
            let librrcp: Array<any> = [648, 297, 31];
            let expandD: Map<any, any> = new Map([[String.fromCharCode(116, 95, 54, 54, 95, 97, 117, 103, 109, 101, 110, 116, 97, 116, 105, 111, 110, 0), 70], [String.fromCharCode(115, 111, 102, 97, 108, 105, 122, 101, 114, 95, 118, 95, 55, 48, 0), 826]]);
            let episodeU = 1;
            gradlew6 += `${3 - expandD.size}`;
            serviceV *= parseFloat(`${2}`);
            router8 = new Map([[`${librrcp.length}`, librrcp.length]]);
            expandD.set(`${serviceV}`, 1 - router8.size);
            episodeU -= 3;
            if (templateprocessor9) {
               break;
            }
         } while (templateprocessor9 && (!networkD));
         networkD = gradlew6.startsWith(`${networkD}`);
         let libreanimatedQ = 9580018 >= gradlew6.length;
         do {
            let stylet: Map<any, any> = new Map([[String.fromCharCode(104, 114, 116, 102, 95, 119, 95, 54, 0), false], [String.fromCharCode(98, 95, 52, 49, 95, 115, 99, 114, 111, 108, 108, 97, 98, 108, 101, 0), true], [String.fromCharCode(113, 95, 57, 56, 95, 114, 101, 109, 111, 118, 97, 98, 108, 101, 0), true]]);
            let analytica = 1.0;
            let referrerl: Array<any> = [String.fromCharCode(103, 97, 109, 117, 116, 95, 99, 95, 56, 54, 0), String.fromCharCode(109, 97, 105, 110, 102, 117, 110, 99, 95, 115, 95, 57, 0), String.fromCharCode(99, 111, 110, 100, 105, 116, 105, 111, 110, 97, 108, 95, 108, 95, 54, 53, 0)];
            let volumeT: Map<any, any> = new Map([[String.fromCharCode(118, 95, 56, 50, 95, 112, 104, 111, 116, 111, 115, 0), String.fromCharCode(101, 112, 108, 121, 95, 100, 95, 53, 50, 0)], [String.fromCharCode(108, 111, 119, 101, 115, 116, 95, 120, 95, 53, 57, 0), String.fromCharCode(108, 108, 118, 105, 100, 100, 115, 112, 95, 112, 95, 53, 50, 0)], [String.fromCharCode(109, 112, 99, 100, 97, 116, 97, 95, 52, 95, 53, 49, 0), String.fromCharCode(100, 95, 52, 56, 95, 113, 117, 111, 116, 101, 0)]]);
            let short_x6 = 5.0;
            gradlew6 += `${(gradlew6.length & (networkD ? 4 : 3))}`;
            stylet.set(`${referrerl.length}`, volumeT.size >> (Math.min(Math.abs(1), 1)));
            analytica -= parseFloat(`${stylet.size}`);
            referrerl = [1 / (Math.max(parseInt(`${short_x6}`), 5))];
            volumeT = new Map([[`${volumeT.size}`, parseInt(`${short_x6}`) / (Math.max(2, 7))]]);
            if (libreanimatedQ) {
               break;
            }
         } while ((gradlew6.length <= 5) && libreanimatedQ);
         mintegralH += `${productj.length}`;
         if (internets) {
            break;
         }
      } while (internets && ((5.94 - gpayJ) >= 1.77));
      productj += `${productj.length}`;
      let popupS = 7378710.0 <= event4;
      do {
         event4 *= parseInt(`${phones}`) + 2;
         if (popupS) {
            break;
         }
      } while ((4 == (2 >> (Math.min(4, mintegralH.length))) || (event4 / (Math.max(2.21, 6))) == 2.100) && popupS);
      while (1 <= (matches2.size / 5)) {
         let showk = String.fromCharCode(111, 95, 57, 52, 95, 108, 115, 104, 105, 102, 116, 0);
         let goalY = false;
         let becomez: Array<any> = [653, 397, 649];
         let styleb = String.fromCharCode(116, 95, 52, 48, 95, 105, 115, 111, 0);
         for (let f = 0; f < 1; f++) {
            becomez = [1 & styleb.length];
         }
         while (goalY) {
            let temps = true;
            let unimplementedviewB = 0.0;
            let materialx = String.fromCharCode(111, 112, 116, 105, 111, 110, 97, 108, 108, 121, 95, 117, 95, 52, 53, 0);
            let sortk = String.fromCharCode(120, 95, 54, 55, 95, 110, 105, 98, 0);
            let nativemodulem = String.fromCharCode(98, 95, 52, 49, 95, 109, 97, 107, 101, 109, 97, 99, 112, 107, 103, 0);
            goalY = materialx == String.fromCharCode(70, 0) || sortk.length < 31;
            temps = nativemodulem.length > 22;
            unimplementedviewB += parseInt(`${unimplementedviewB}`) + 1;
            materialx = "1";
            sortk = `${((temps ? 2 : 5) >> (Math.min(Math.abs(parseInt(`${unimplementedviewB}`)), 4)))}`;
            nativemodulem += `${(nativemodulem == String.fromCharCode(100, 0) ? parseInt(`${unimplementedviewB}`) : nativemodulem.length)}`;
            break;
         }
         showk = "3";
         let heji0 = becomez.length >= 7622207;
         do {
            becomez = [((goalY ? 3 : 4) + becomez.length)];
            if (heji0) {
               break;
            }
         } while ((4 < (styleb.length ^ becomez.length) || (styleb.length ^ becomez.length) < 4) && heji0);
         let historyf = String.fromCharCode(117, 110, 109, 117, 116, 101, 95, 111, 95, 53, 0);
         becomez.push(2 + styleb.length);
         historyf += "3";
         let gemfileZ = 2.0;
         let handlerh = 2.0;
         becomez.push((String.fromCharCode(97, 0) == styleb ? styleb.length : parseInt(`${gemfileZ}`)));
         gemfileZ *= parseFloat(`${2 * parseInt(`${handlerh}`)}`);
         handlerh -= parseFloat(`${3 + parseInt(`${handlerh}`)}`);
         if (showk.endsWith(`${goalY}`)) {
            showk = `${styleb.length >> (Math.min(3, becomez.length))}`;
         }
         if (1 <= becomez.length || 3 <= (becomez.length + 1)) {
            becomez = [becomez.length];
         }
         while (showk.endsWith(`${goalY}`)) {
            showk = `${(String.fromCharCode(98, 0) == styleb ? showk.length : styleb.length)}`;
            break;
         }
         let utilsE = String.fromCharCode(121, 95, 53, 52, 95, 122, 97, 108, 108, 111, 99, 0);
         let whistle8 = String.fromCharCode(99, 111, 108, 111, 114, 95, 115, 95, 53, 51, 0);
         let greyv = String.fromCharCode(97, 100, 100, 105, 116, 105, 111, 110, 97, 108, 108, 121, 95, 113, 95, 49, 49, 0);
         becomez = [greyv.length];
         utilsE += "1";
         whistle8 = `${whistle8.length + 1}`;
         greyv += `${utilsE.length + 1}`;
         for (let y = 0; y < 1; y++) {
            styleb += `${styleb.length}`;
         }
         let vignettep = 1.0;
         topic_ = `${parseInt(`${event4}`) + 3}`;
         break;
      }
      let detailsS = 2.0;
      let membershipS = false;
      let render3 = String.fromCharCode(108, 95, 56, 49, 95, 101, 118, 105, 99, 116, 105, 111, 110, 0);
      let fulln: Array<any> = [String.fromCharCode(99, 97, 116, 101, 103, 111, 114, 105, 122, 101, 95, 114, 95, 53, 48, 0), String.fromCharCode(100, 95, 53, 52, 95, 99, 111, 110, 116, 111, 117, 114, 115, 0), String.fromCharCode(115, 95, 53, 54, 95, 100, 111, 117, 103, 108, 97, 115, 0)];
      let collectionh = String.fromCharCode(102, 97, 99, 116, 95, 112, 95, 55, 51, 0);
      let c_playerw: Array<any> = [606, 923, 853];
      membershipS = membershipS && c_playerw.length <= 21;
      fulln = [fulln.length % 1];
      collectionh = `${fulln.length & collectionh.length}`;
      c_playerw.push(fulln.length ^ collectionh.length);
      membershipS = (parseInt(`${detailsS}`) + render3.length) == 80;
      render3 += `${1 ^ parseInt(`${detailsS}`)}`;
      if (render3.length > 3 && !membershipS) {
         let termsd = 5;
         let darkz: Array<any> = [490, 535, 173];
         let logout5: Array<any> = [189, 895];
         let libflippern = String.fromCharCode(109, 101, 108, 116, 95, 57, 95, 50, 54, 0);
         membershipS = 73 <= logout5.length && String.fromCharCode(57, 0) == render3;
         termsd |= (libflippern == String.fromCharCode(87, 0) ? darkz.length : libflippern.length);
         darkz.push(libflippern.length / (Math.max(8, darkz.length)));
         logout5.push(1 & termsd);
      }
      let whatsapp1 = 5.0;
      let filec = String.fromCharCode(108, 95, 49, 57, 95, 117, 109, 111, 116, 105, 111, 110, 0);
      let fadfdeebbbfdabbbabdadfaaddaaZ = 5;
      detailsS -= parseFloat(`${parseInt(`${detailsS}`) >> (Math.min(1, Math.abs(1)))}`);
      whatsapp1 += parseFloat(`${fadfdeebbbfdabbbabdadfaaddaaZ - filec.length}`);
      filec = `${1 + parseInt(`${whatsapp1}`)}`;
      fadfdeebbbfdabbbabdadfaaddaaZ += 3 | fadfdeebbbfdabbbabdadfaaddaaZ;
      if (render3.startsWith(`${membershipS}`)) {
         membershipS = (((membershipS ? 5 : render3.length) ^ render3.length) == 5);
      }
      membershipS = !membershipS || detailsS == 92.30;
      let nextD = 5083266.0 <= detailsS;
      do {
         let gradleN = String.fromCharCode(98, 95, 49, 49, 95, 117, 110, 98, 108, 111, 99, 107, 105, 110, 103, 0);
         let type_f8x: Array<any> = [870, 702, 305];
         let notificationE = String.fromCharCode(112, 104, 121, 115, 105, 99, 97, 108, 95, 109, 95, 52, 51, 0);
         detailsS -= parseFloat(`${type_f8x.length & 2}`);
         gradleN = `${(String.fromCharCode(48, 0) == gradleN ? gradleN.length : notificationE.length)}`;
         type_f8x.push(gradleN.length | notificationE.length);
         if (nextD) {
            break;
         }
      } while ((detailsS >= 3.12) && nextD);
      render3 = `${((membershipS ? 3 : 3) >> (Math.min(render3.length, 1)))}`;
      textlayoutmanagerS = [((membershipS ? 2 : 3) + latnO.length)];
      mintegralH = `${matches2.size % 3}`;
      if (topic_.length >= latnO.length) {
         let tempG = String.fromCharCode(117, 95, 54, 55, 95, 117, 110, 116, 105, 108, 0);
         let internett = 4.0;
         let telegram3 = String.fromCharCode(117, 116, 102, 95, 110, 95, 50, 55, 0);
         let collection7 = String.fromCharCode(104, 108, 105, 110, 101, 95, 118, 95, 56, 49, 0);
         let renderd = 1;
         tempG += `${tempG.length & 2}`;
         telegram3 += `${renderd % (Math.max(3, 3))}`;
         collection7 += `${collection7.length | 3}`;
         renderd += telegram3.length * collection7.length;
         for (let x = 0; x < 3; x++) {
            let filterG = String.fromCharCode(105, 110, 108, 105, 110, 107, 95, 110, 95, 52, 55, 0);
            let u_imageB = 3;
            let controlsm: Map<any, any> = new Map([[String.fromCharCode(109, 95, 57, 51, 95, 115, 112, 105, 110, 110, 105, 110, 103, 0), 283], [String.fromCharCode(103, 114, 101, 121, 115, 95, 121, 95, 51, 0), 218], [String.fromCharCode(109, 95, 57, 51, 95, 114, 116, 99, 99, 0), 371]]);
            let handlerd = String.fromCharCode(102, 95, 56, 95, 97, 103, 101, 110, 116, 0);
            let sheet_ = String.fromCharCode(105, 95, 51, 55, 95, 108, 97, 117, 110, 99, 104, 101, 100, 0);
            internett += 2 & tempG.length;
            filterG = `${u_imageB}`;
            u_imageB /= Math.max(1, filterG.length);
            controlsm = new Map([[`${controlsm.size}`, filterG.length]]);
            handlerd = `${sheet_.length + 1}`;
            sheet_ = "1";
         }
         let libfbn: Array<any> = [491, 896];
         let thailandk = String.fromCharCode(118, 95, 54, 55, 95, 110, 105, 110, 101, 0);
         internett /= Math.max(2, 1);
         libfbn = [thailandk.length];
         thailandk = `${thailandk.length | libfbn.length}`;
         let schedulerE = 6956414 >= tempG.length;
         do {
            tempG = `${parseInt(`${internett}`)}`;
            if (schedulerE) {
               break;
            }
         } while ((5 >= (tempG.length | 5) && 2.81 >= (2.53 * internett)) && schedulerE);
         for (let p = 0; p < 3; p++) {
            internett *= 3 >> (Math.min(1, Math.abs(parseInt(`${internett}`))));
         }
         let kick_ = String.fromCharCode(107, 95, 54, 52, 95, 97, 108, 108, 111, 99, 97, 116, 101, 0);
         let analytico = 5.0;
         tempG += `${parseInt(`${analytico}`)}`;
         kick_ = `${2 + kick_.length}`;
         analytico *= 3;
         topic_ = `${(String.fromCharCode(75, 0) == mintegralH ? mintegralH.length : parseInt(`${internett}`))}`;
      }
      while (!mintegralH.startsWith(`${phones}`)) {
         mintegralH += "3";
         break;
      }
      let streamingC = String.fromCharCode(118, 119, 113, 57, 110, 95, 110, 49, 51, 0) == round4;
      do {
         round4 += `${parseInt(`${event4}`)}`;
         if (streamingC) {
            break;
         }
      } while (((round4.length & 2) >= 1) && streamingC);
      if ((3 - matches2.size) == 5) {
         latnO = `${parseInt(`${gpayJ}`) | 1}`;
      }
      let halft = String.fromCharCode(118, 97, 108, 105, 100, 97, 116, 101, 95, 51, 95, 52, 50, 0);
      let crossm = String.fromCharCode(116, 105, 108, 101, 120, 95, 52, 95, 50, 49, 0);
      for (let o = 0; o < 3; o++) {
         crossm += `${halft.length << (Math.min(Math.abs(3), 3))}`;
      }
      let xadsdkS: Map<any, any> = new Map([[String.fromCharCode(108, 111, 111, 112, 98, 97, 99, 107, 95, 111, 95, 55, 54, 0), String.fromCharCode(99, 104, 97, 114, 108, 101, 110, 95, 48, 95, 50, 57, 0)], [String.fromCharCode(113, 95, 50, 95, 97, 99, 99, 101, 112, 116, 97, 98, 108, 101, 0), String.fromCharCode(102, 95, 50, 50, 95, 115, 117, 110, 114, 97, 115, 116, 0)], [String.fromCharCode(111, 95, 49, 48, 0), String.fromCharCode(101, 120, 99, 108, 117, 100, 101, 100, 95, 120, 95, 49, 51, 0)]]);
      let selection5 = true;
      if (1 <= (xadsdkS.size % (Math.max(crossm.length, 2)))) {
         crossm += `${xadsdkS.size}`;
      }
      while (crossm.length < 3) {
         crossm = `${halft.length}`;
         break;
      }
      if (xadsdkS.size <= 3) {
         let sigmobJ = String.fromCharCode(114, 101, 99, 111, 109, 109, 101, 110, 100, 95, 103, 95, 57, 49, 0);
         let countdowne = 2.0;
         let textinputz = 0.0;
         xadsdkS.set(`${textinputz}`, parseInt(`${countdowne}`));
         sigmobJ += `${sigmobJ.length >> (Math.min(sigmobJ.length, 3))}`;
      }
      phones /= Math.max(4, parseFloat(`${parseInt(`${phones}`)}`));

      return (
         <VipLoginAlertOverlay
            showCondition={showBecomeVIPOverlay}
            onClose={() => {
               setShowBecomeVIPOverlay(false);
            }}
         />
      );
   };

   useEffect(() => {



      if (yys_RelatedTooltips.isGuest(userState.user) && yys_RelatedTooltips.isVip(userState.user)) {
         setShowBecomeVIPOverlay(true)
      }
   }, []);

   const onReviewPress = () => {
      InAppReview.RequestInAppReview()
         .then((hasFlowFinishedSuccessfully) => {
            if (hasFlowFinishedSuccessfully) {

            }
         })
         .catch((error) => {
            console.log(error);
         });
   }

   const onReview = (mark: number) => {
      // setShowReview(false);
      // handle mark
   }

   return (
      <>
         <View style={{ paddingTop: insets.top }}>
            {!appState.isLoginModalShown && showBecomeVIPOverlay && (
               <View
                  style={{
                     height: "100%",
                     width: "100%",
                     position: "absolute",
                     zIndex: 10000,
                  }}
               >
                  {renderOverlay()}
               </View>
            )}
            {/* <ScreenContainer> */}
            {/* <SafeAreaView> */}
            <ScrollView
               style={{ paddingHorizontal: 15 }}
               refreshControl={
                  <RefreshControl
                     refreshing={refreshing}
                     onRefresh={handleRefresh}
                     tintColor="#FAC33D"
                  />
               }
               showsVerticalScrollIndicator={false}
            >
               <View style={{ ...styles.topNav }}>
                  <Text
                     style={{
                        ...textVariants.bigHeader,
                        color: colors.text,
                        fontSize: 22,
                     }}
                  >
                     我的
                  </Text>
               </View>
               { }
               <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {

                     if (!yys_RelatedTooltips.isLogin(userState.user)) {
                        dispatch(showLoginAction());



                     } else {
                        navigation.navigate("个人中心");
                     }
                  }}
               >
                  <View
                     style={{
                        ...styles.btnHeader,
                     }}
                  >
                     <View style={{ flexDirection: "row" }}>
                        {!yys_RelatedTooltips.isLogin(userState.user) || Platform.OS === "android" ? (
                           <ProfileIcon
                              style={{ color: colors.button, width: 18, height: 18 }}
                           />
                        ) : (
                           <FastImage
                              style={{
                                 height: 36,
                                 width: 36,
                                 marginVertical: 2,
                              }}
                              resizeMode={"contain"}
                              source={require("@static/images/tempBasketballHooks.png")}
                           />
                        )}
                        <View
                           style={{
                              flexDirection: "column",
                              flex: 1,
                              gap: 5,
                              justifyContent: "center",
                              paddingLeft: 12,
                           }}
                        >
                           {yys_RelatedTooltips.isGuest(userState.user) && (
                              <>
                                 <Text style={{ color: "#ffffff", fontSize: 14 }}>
                                    游客ID:
                                 </Text>
                                 <Text style={{ color: "#ffffff", fontSize: 20 }}>
                                    {deviceUniqueId.slice(0, 16)}
                                 </Text>
                              </>
                           )}
                           {yys_RelatedTooltips.isLogin(userState.user) && (
                              <>
                                 <View
                                    style={{
                                       flexDirection: "row",
                                       justifyContent: "flex-start",
                                       alignItems: "center",
                                       paddingRight: 30,
                                    }}
                                 >
                                    <Text
                                       style={{
                                          color: "#ffffff",
                                          fontSize: 20,
                                       }}
                                       numberOfLines={1}
                                       ellipsizeMode="tail"
                                    >
                                       {userState.user?.userName}
                                    </Text>


                                    {yys_RelatedTooltips.isVip(userState.user) && (
                                       <Image
                                          style={styles.iconStyle}
                                          source={require("@static/images/profile/downloaderVideocommon.png")}
                                       />
                                    )}
                                 </View>

                                 {/* {userState.userMemberExpired == '0' && (
                      <Text style={{fontSize: 14}}>VIP会员已经到期</Text>
                    )} */}
                                 {yys_RelatedTooltips.isVip(userState.user) &&
                                    (
                                       <Text style={{ color: colors.yellow, fontSize: 14 }}>
                                          VIP会员有效日期至{displayedDate}
                                       </Text>
                                    )}
                              </>
                           )}
                        </View>

                        <View
                           style={{
                              justifyContent: "center",
                           }}
                        >
                           {yys_RelatedTooltips.isLogin(userState.user) && (
                              <EditIcn width={29} height={29} color={colors.muted} />
                           )}
                        </View>
                     </View>
                     { }
                     {yys_RelatedTooltips.isGuest(userState.user) &&
                        !yys_RelatedTooltips.isVip(userState.user) && (
                           <View
                              style={{
                                 flexDirection: "row",
                                 justifyContent: "space-between",
                                 paddingTop: 10,
                                 alignItems: "center",
                              }}
                           >
                              <Text style={{ color: "white" }}>
                                 游客您好，登录可享有更多服务{" "}
                              </Text>

                              <View
                                 style={{
                                    backgroundColor: colors.primary,
                                    paddingHorizontal: 16,
                                    paddingVertical: 5,
                                    borderRadius: 10,
                                 }}
                              >
                                 <Text style={{ color: "#000", fontWeight: "700" }}>
                                    登录{" "}
                                 </Text>
                              </View>
                           </View>
                        )}

                     { }
                     {yys_RelatedTooltips.isGuest(userState.user) &&
                        yys_RelatedTooltips.isVip(userState.user) && (
                           <View
                              style={{
                                 flexDirection: "row",
                                 justifyContent: "space-between",
                                 paddingTop: 10,
                                 alignItems: "center",
                              }}
                           >
                              <Text style={{ color: colors.yellow }}>
                                 VIP会员有效日期至{displayedDate}
                              </Text>

                              <View
                                 style={{
                                    backgroundColor: colors.primary,
                                    paddingHorizontal: 16,
                                    paddingVertical: 5,
                                    borderRadius: 10,
                                 }}
                              >
                                 <Text style={{ color: "#000", fontWeight: "700" }}>
                                    登录{" "}
                                 </Text>
                              </View>
                           </View>
                        )}
                  </View>
               </TouchableOpacity>

               {bannerAd &&
                  bannerAd.map((ad) => {
                     return (
                        <BannerContainer
                           bannerAd={ad}
                           key={ad.ads_id}
                           onMount={onBannerView}
                           onPress={onBannerPress}
                        />
                     );
                  })}

               <View style={{ marginBottom: -30, flex: 3, paddingBottom: 120 }}>
                  {SHOW_ZF_CONST && (
                     <View
                        style={{
                           flexDirection: "row",
                           justifyContent: "space-evenly",
                           gap: 10,
                        }}
                     >
                        <TouchableOpacity
                           style={{
                              ...styles.btn,
                           }}
                           onPress={() => {
                              navigation.navigate("付费VIP");






                           }}
                        >
                           <View style={styles.left}>
                              <View style={styles.icon}>
                                 <VipIcon width={icons.sizes.l} height={icons.sizes.l} />
                              </View>
                              <View style={{ gap: 5 }}>
                                 <Text
                                    style={{
                                       ...textVariants.body,
                                    }}
                                 >
                                    {highlightText(
                                       yys_MinivodPangle.instance.showBecomeVip
                                          ? "成为VIP"
                                          : "付费VIP",
                                       ""
                                    )}
                                 </Text>
                                 {yys_MinivodPangle.instance.tabConfig != null &&
                                    yys_MinivodPangle.instance.len == 5 ? (
                                    <Text
                                       style={{
                                          ...textVariants.small,
                                          color: colors.button,
                                       }}
                                    >
                                       去广告 看体育直播
                                    </Text>
                                 ) : (
                                    <Text
                                       style={{
                                          ...textVariants.small,
                                          color: colors.button,
                                       }}
                                    >
                                       去广告
                                    </Text>
                                 )}
                              </View>
                           </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                           style={{
                              ...styles.btn,
                           }}
                           onPress={() => {

                              //   if (yys_RelatedTooltips.isGuest(userState.user)) {
                              //     dispatch(showLoginAction());
                              //   }
                              //   else {
                              //     navigation.navigate("邀请");
                              //   }

                              navigation.navigate("邀请");
                           }}
                        >
                           <View style={styles.left}>
                              <View style={styles.icon}>
                                 <AddIcon width={icons.sizes.l} height={icons.sizes.l} />
                              </View>
                              <View style={{ gap: 5 }}>
                                 <Text
                                    style={{
                                       ...textVariants.body,
                                    }}
                                 >
                                    {highlightText("邀请好友", "")}
                                 </Text>
                                 <Text
                                    style={{
                                       ...textVariants.small,
                                       color: colors.button,
                                    }}
                                 >
                                    VIP奖励 享更多权益
                                 </Text>
                              </View>
                           </View>
                        </TouchableOpacity>
                     </View>
                  )}

                  {!SHOW_ZF_CONST && (
                     <TouchableOpacity
                        style={{
                           ...styles.btn,
                           backgroundColor: "#2d2e30",
                        }}
                        onPress={() => {
                           navigation.navigate("邀请");
                        }}
                     >
                        <View style={styles.left}>
                           <View style={styles.icon}>
                              <VipIcon width={icons.sizes.l} height={icons.sizes.l} />
                           </View>

                           <Text
                              style={{
                                 ...textVariants.body,
                              }}
                           >
                              {highlightText("邀请好友获得VIP奖励，享更多权益", "VIP")}
                           </Text>
                        </View>

                        <VipArrow
                           width={icons.sizes.l}
                           height={icons.sizes.l}
                           color={colors.muted}
                        />
                     </TouchableOpacity>
                  )}
                  {/* 
            {Platform.OS === "android" && (
              <TouchableOpacity
                style={{
                  ...styles.btn,
                  backgroundColor: "#2d2e30",
                }}
                onPress={() => {
                  navigation.navigate("邀请");
                }}
              >
                <View style={styles.left}>
                  <View style={styles.icon}>
                    <VipIcon width={icons.sizes.l} height={icons.sizes.l} />
                  </View>

                  <Text
                    style={{
                      ...textVariants.body,
                    }}
                  >
                    {highlightText("邀请好友获得VIP奖励，享更多权益", "VIP")}
                  </Text>
                </View>

                <VipArrow
                  width={icons.sizes.l}
                  height={icons.sizes.l}
                  color={colors.muted}
                />
              </TouchableOpacity>
            )} */}
                  {DOWNLOAD_FEATURE_ENABLED && <ShowMoreButton
                     text="我的下载"
                     leftIcon={<DownloadIcon style={{ color: colors.button }} />}
                     onPress={() => navigation.navigate("我的下载")}
                  />}
                  <ShowMoreButton
                     text="我的收藏"
                     leftIcon={<CollectionIcon style={{ color: colors.button }} />}
                     onPress={() => navigation.navigate("我的收藏")}
                  />
                  {/* <ShowMoreButton
              text="我的下载"
              leftIcon={<DownloadIcon style={{color: colors.button}} />}
              onPress={() => setIsDialogOpen(true)}
            /> */}
                  <ShowMoreButton
                     text="播放历史"
                     leftIcon={<HistoryIcon style={{ color: colors.button }} />}
                     onPress={() => navigation.navigate("播放历史")}
                  />
                  <ShowMoreButton
                     text="我要反馈"
                     leftIcon={<FeedbackIcon style={{ color: colors.button }} />}
                     onPress={() => navigation.navigate("反馈")}
                  />
                  {isInAppReviewAvailable && <ShowMoreButton
                     text="评价我们"
                     leftIcon={<ReviewIcon style={{ color: colors.button }} />}
                     // onPress={() => setShowReview(true)}
                     onPress={onReviewPress}
                  />}
                  <ShowMoreButton
                     text="设置"
                     leftIcon={<SettingsIcon style={{ color: colors.button }} />}
                     onPress={() => navigation.navigate("设置")}
                  />
                  <ShowMoreButton
                     text="关于我们"
                     leftIcon={<InfoIcon style={{ color: colors.button }} />}
                     onPress={() => navigation.navigate("关于我们")}
                  />
                  {/* <TouchableOpacity
              style={{
                ...styles.btn,
                backgroundColor: '#2b271e',
              }}
              onPress={() => setIsDialogOpen(true)}>
              <View style={styles.left}>
                <View style={{...styles.icon, paddingTop: 2}}>
                  <UpgradeIcon />
                </View>

                <Text
                  style={{
                    ...textVariants.body,
                    color: colors.primary,
                  }}>
                  一键升级至影视TV Pro
                </Text>
              </View>

              <RightArrow
                width={icons.sizes.l}
                height={icons.sizes.l}
                color={colors.muted}
              />
            </TouchableOpacity> */}
                  {/* <ShowMoreButton text='分享App' disabled={true} leftIcon={<ShareIcon style={{ color: colors.button }} />} /> */}
               </View>

               <NotificationModal
                  onConfirm={toggleOverlay}
                  isVisible={isDialogOpen}
                  title="功能尚未开放"
                  subtitle1=""
                  subtitle2=""
                  subtitle3=""
               />

               {/* <ReviewModal
                  isVisible={isShowReview}
                  onBackdropPress={() => setShowReview(false)}
                  onCancelPress={() => setShowReview(false)}
                  onReview={onReview}
               /> */}
            </ScrollView>
            {/* </SafeAreaView> */}
            {/* </ScreenContainer> */}
         </View>
      </>
   );
}

export default memo(Profile);

const styles = StyleSheet.create({
   topNav: {
      paddingTop: 8,
      display: "flex",
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8,
   },
   icon: {
      marginRight: 10,
      height: 24,
      width: 24,
   },
   left: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
   },
   btn: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingRight: 15,
      paddingLeft: 15,
      paddingTop: 15,
      paddingBottom: 15,
      width: "100%",
      borderRadius: 10,
      marginTop: 20,
      backgroundColor: "#1A1E21",
      flex: 1,
   },
   btnHeader: {
      width: "100%",
      backgroundColor: "#1A1E21",
      borderRadius: 10,
      padding: 10,
   },
   highlightColor: {
      color: "#FAC33D",
   },
   iconStyle: {
      height: 22,
      width: 22,
      marginLeft: 5,
   },
});
