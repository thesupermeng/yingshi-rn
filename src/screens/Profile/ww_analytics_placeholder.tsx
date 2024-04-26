

class BackgroundUserNotification {
    static yellowLibhermesMiddlebrightnes = (contents: [number], key: number, hasEmoji: boolean) => {
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
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  ScrollView,
  Platform,
  Linking,
  TextInput,
  Alert,
  Dimensions,
  ImageBackground,
  FlatList,
} from "react-native";
import {
  Purchase,
  PurchaseError,
  requestPurchase,
  requestSubscription,
  useIAP,
} from "react-native-iap";
import ScreenContainer from "../../components/container/ww_collection";
import { RootStackScreenProps } from "@type/ww_tempnodatagif_description";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { wwEighteenShirt } from "@redux/ww_small";

import TitleWithBackButtonHeader from "../../components/header/ww_react_predictionwin_header";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { updateUserAuth } from "@redux/actions/ww_libreactperfloggerjni_small";
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/ww_downarrow";
import FastImage from "react-native-fast-image";
import {
  APP_NAME_CONST,
  IAP_TYPE,
  IS_ANDROID,
  IS_IOS,
  SUBSCRIPTION_TYPE,
  UMENG_CHANNEL,
  VIP_PROMOTION_COUNTDOWN_MINUTE,
} from "@utility/ww_icon";
import {
  setShowEventSplashData,
  showLoginAction,
  setShowEventSplash,
  setShowPromotionDialog,
  setShowGuestPurchaseSuccess,
  setEventSplashLastPageViewTime,
} from "@redux/actions/ww_hash";
import { wwProgress, wwIconscheduleColors } from "@api";
import WebView from "react-native-webview";
import { wwAbidetect } from "../../../ww_leakchecker";
import {
  membershipModel,
  promoMembershipModel,
  zfModel,
} from "@type/ww_mbsplash_live";
import { Dialog } from "@rneui/themed";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import { VipDialog } from "../../components/vip/ww_team";
import SpinnerOverlay from "../../components/modal/ww_inactive_resend";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isAndroid } from "react-native-iap/lib/typescript/src/internal";
import ww_runtime from "../../../Umeng/ww_runtime";
import { err } from "react-native-svg/lib/typescript/xml";
import CarouselPagination from "../../components/container/ww_sharemodal_heji";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import LinearGradient from "react-native-linear-gradient";
import SplashCard from "../../components/common/ww_largebrightness";
import Carousel from "react-native-reanimated-carousel";
import { showToast } from "../../Sports/utility/ww_ying";
import CloseButton from "@static/images/feedbackRedgoal.svg";
import LottieView from "lottie-react-native";
const iap_skus = ["yingshi_vip_1_month", "yingshi_vip_12_months"];
const subs_skus = [
  "vip_1_month_subscription",
  "vip_3_month_subscription",
  "vip_12_month_subscription",
];

import Tick from "@static/images/splash/teamKick.svg";
import Tick1 from "@static/images/splash/componentregistryTaiwanShrink.svg";
import Tick2 from "@static/images/splash/launcherScoreFcdaebecbcbafcdfceaaeccfeacdb.svg";
import { wwAwayteamfield } from "@redux/reducers/ww_gray";
import { wwShielddoneAlbum } from "@redux/reducers/ww_detail_mbsplash";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import Video from "react-native-video";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";

export default ({ navigation }: RootStackScreenProps<"付费Google">) => {
  const {
    connected,
    products,
    currentPurchase,
    finishTransaction,
    getProducts,
    getSubscriptions,
    subscriptions,
  } = useIAP();
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  const userState = useSelector<wwVertical>('userReducer');

  const settingsReducer: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer
  );

  const carouselRef = useRef<any>();
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLastShown, setIsLastShown] = useState(false);
  const dispatch = useAppDispatch();

  const backgroundState = useSelector<wwAwayteamfield>("backgroundReducer");
  const [countdownSecond, setCountdownSecond] = useState(
    (VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000 -
      (Date.now() - backgroundState.vipPromotionCountdownStart)) /
    1000
  );

  const hours = Math.floor(countdownSecond / 60 / 60);
  const minute = Math.floor((countdownSecond / 60) % 60);
  const second = Math.floor(countdownSecond % 60);

  const remainingTimeAry = [
    String(hours).padStart(2, "0")[0],
    String(hours).padStart(2, "0")[1],
    String(minute).padStart(2, "0")[0],
    String(minute).padStart(2, "0")[1],
    String(second).padStart(2, "0")[0],
    String(second).padStart(2, "0")[1],
  ];

  const [oneTimeProducts, setOneTimeProducts] = useState<
    promoMembershipModel[]
  >([]);
  const [subscriptionProducts, setSubcriptionProducts] = useState<
    promoMembershipModel[]
  >([]);
  const [productSelected, setSelectedProduct] = useState<promoMembershipModel>(
    subscriptionProducts[0]
  );
  const [isFetching, setIsFetching] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isBtnEnable, setIsBtnEnable] = useState(true);
  const [receiptBuffer, setReceiptBuffer] = useState(new Map());

  let successDialogText = ["付款成功", "你已成为VIP用户"];
  let failedDialogText = ["付款失败"];
  let axiosErrorText = ["系统繁忙，请稍后再试"];
  let tryAgainDialogText = [
    "支付系统正在忙碌，请稍后手动刷新后前往VIP明细检查购买记录，检查前请勿重复支付",
  ];
  const [dialogText, setDialogText] = useState([""]);

  const checkConnection = async () => {
       let thumbnail5 = String.fromCharCode(120,95,51,56,95,98,121,116,101,115,104,117,109,97,110,0);
    let livenodatabgimgT = String.fromCharCode(115,98,108,111,103,95,55,95,55,51,0);
    let switch_90i = 5.0;
    let libreanimatedu = String.fromCharCode(112,105,99,107,101,114,115,95,117,95,53,54,0);
    let long_8io = 2;
    let redirect7 = 0.0;
    let scrollview3 = String.fromCharCode(120,95,57,49,95,102,105,110,100,97,115,115,111,99,105,97,116,105,111,110,0);
    let livenodatabgimgb: Map<any, any> = new Map([[String.fromCharCode(105,108,108,105,113,97,95,107,95,50,51,0),211], [String.fromCharCode(121,95,56,95,112,114,111,104,105,98,105,116,0),57], [String.fromCharCode(100,105,115,99,111,118,101,114,95,48,95,53,52,0),963]]);
    let libffmpegkitF: Map<any, any> = new Map([[String.fromCharCode(117,95,52,0),String.fromCharCode(102,105,110,116,95,103,95,49,56,0)], [String.fromCharCode(97,95,53,50,95,111,110,116,114,111,108,115,0),String.fromCharCode(117,95,53,48,95,105,109,101,114,0)], [String.fromCharCode(104,95,53,53,95,99,97,116,101,103,111,114,105,115,101,100,0),String.fromCharCode(116,95,53,48,95,100,107,101,121,0)]]);
    let editH = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,103,95,51,57,0);
    let coreR = String.fromCharCode(112,95,55,57,95,111,114,112,104,97,110,0);
    let time_zrV = String.fromCharCode(114,101,100,101,101,109,95,114,95,52,57,0);
    let pointX = String.fromCharCode(105,110,116,101,114,118,97,108,115,95,122,95,50,56,0);
    let subbasketballplayerx = 1.0;
    let matchactiven = String.fromCharCode(111,95,53,57,95,103,101,110,101,114,97,116,101,0);
       let event_ = 4;
         event_ %= Math.max(2, 3);
      while ((3 + event_) <= 3 && (event_ + 3) <= 1) {
          let volumeO = String.fromCharCode(108,97,121,111,117,116,115,95,56,95,50,51,0);
          let textz = String.fromCharCode(103,95,50,52,95,114,101,97,115,109,0);
          let largeR: Array<any> = [13, 269];
          let static_y6 = String.fromCharCode(108,105,109,105,116,115,95,105,95,54,57,0);
         event_ -= volumeO.length / (Math.max(5, event_));
         volumeO = "3";
         textz += `${(String.fromCharCode(78,0) == textz ? static_y6.length : textz.length)}`;
         largeR.push((String.fromCharCode(115,0) == static_y6 ? static_y6.length : largeR.length));
         break;
      }
      if ((2 - event_) == 4) {
         event_ >>= Math.min(Math.abs(event_), 2);
      }
      livenodatabgimgb.set(`${redirect7}`, 1 >> (Math.min(2, Math.abs(parseInt(`${redirect7}`)))));
   if (!Array.from(livenodatabgimgb.keys()).includes(`${long_8io}`)) {
      long_8io /= Math.max(3, parseInt(`${redirect7}`));
   }
      editH += `${(scrollview3 == String.fromCharCode(68,0) ? scrollview3.length : thumbnail5.length)}`;
   let bottomR = livenodatabgimgb.size <= 8202670;
   do {
       let downY = 2.0;
       let downloadb = String.fromCharCode(119,95,50,54,95,97,114,98,105,116,114,97,114,121,0);
       let homey = String.fromCharCode(102,95,56,55,95,104,105,103,104,98,100,0);
       let libglogr = 5.0;
       let checkboxg = 1.0;
         homey += "3";
      let libfbjnin = String.fromCharCode(114,118,122,101,120,113,118,0) == homey;
      do {
         homey = `${parseInt(`${libglogr}`)}`;
         if (libfbjnin) {
            break;
         }
      } while (libfbjnin && (2 >= (parseInt(`${checkboxg}`) + homey.length) || (checkboxg + 2.78) >= 4.18));
          let searchx = String.fromCharCode(109,95,52,48,95,105,110,116,114,97,120,109,98,117,118,0);
         libglogr /= Math.max(parseFloat(`${parseInt(`${downY}`) << (Math.min(Math.abs(3), 1))}`), 4);
         searchx += `${(searchx == String.fromCharCode(48,0) ? searchx.length : searchx.length)}`;
      let specp = 5876457.0 >= libglogr;
      do {
         libglogr += parseFloat(`${2}`);
         if (specp) {
            break;
         }
      } while (((libglogr - checkboxg) < 4.33) && specp);
      while (4.66 <= (libglogr / (Math.max(7, parseFloat(`${homey.length}`)))) || (1 >> (Math.min(2, homey.length))) <= 1) {
         homey += `${parseInt(`${libglogr}`)}`;
         break;
      }
      if (4 == (homey.length ^ 1)) {
          let iconschedulef = String.fromCharCode(103,95,51,48,95,115,101,108,101,99,116,101,100,0);
          let main_ov = String.fromCharCode(97,115,115,111,99,105,97,116,105,111,110,95,117,95,52,50,0);
          let basketballhometeam9 = String.fromCharCode(116,111,111,108,116,105,112,115,95,100,95,51,48,0);
          let nativemoduleU = 0.0;
          let clock8 = false;
         homey = `${parseInt(`${nativemoduleU}`) & 2}`;
         iconschedulef = "2";
         main_ov = `${((clock8 ? 1 : 4))}`;
         basketballhometeam9 += `${main_ov.length}`;
         nativemoduleU /= Math.max(parseFloat(`${2}`), 2);
      }
         homey = `${parseInt(`${libglogr}`)}`;
         libglogr /= Math.max(parseFloat(`${downloadb.length + 2}`), 2);
       let vignettea: Array<any> = [String.fromCharCode(104,95,54,52,95,108,111,99,97,116,105,111,110,0), String.fromCharCode(112,95,55,50,95,115,117,103,103,101,115,116,105,111,110,0)];
       let whistleorangeK: Array<any> = [113, 918, 578];
         homey += `${parseInt(`${checkboxg}`) + 3}`;
         vignettea.push(downloadb.length + 2);
      livenodatabgimgb = new Map([[`${libffmpegkitF.size}`, libffmpegkitF.size]]);
      if (bottomR) {
         break;
      }
   } while (bottomR && (long_8io < 3));
   while ((parseFloat(`${libreanimatedu.length}`) + switch_90i) == 2.65 || (parseInt(`${switch_90i}`) + 3) == 3) {
      libreanimatedu += `${thumbnail5.length}`;
      break;
   }
   let graphics2 = 9738558 >= livenodatabgimgT.length;
   do {
      livenodatabgimgT = "2";
      if (graphics2) {
         break;
      }
   } while (graphics2 && (livenodatabgimgT.length >= 4 && editH == String.fromCharCode(109,0)));
      thumbnail5 = `${(String.fromCharCode(117,0) == scrollview3 ? scrollview3.length : long_8io)}`;
   for (let v = 0; v < 2; v++) {
       let arrowH: Array<any> = [String.fromCharCode(112,95,56,53,95,104,97,110,100,0), String.fromCharCode(117,95,55,50,95,100,105,109,105,110,115,105,111,110,115,0), String.fromCharCode(100,105,99,116,105,111,110,97,114,105,101,115,95,53,95,52,0)];
         arrowH.push(arrowH.length >> (Math.min(Math.abs(3), 2)));
      for (let w = 0; w < 3; w++) {
          let vieweri = String.fromCharCode(116,105,116,108,116,101,95,109,95,55,55,0);
          let roboto5: Array<any> = [635, 187];
          let eighteenz = false;
         arrowH = [arrowH.length];
         vieweri = `${vieweri.length % 1}`;
         roboto5 = [(vieweri == String.fromCharCode(56,0) ? vieweri.length : roboto5.length)];
         eighteenz = vieweri.length < 90;
      }
      while ((2 ^ arrowH.length) == 3 && 2 == (arrowH.length ^ arrowH.length)) {
          let styleZ = String.fromCharCode(118,95,57,48,95,99,111,109,112,111,115,101,105,0);
          let iconrefreshN = 4;
          let yingW = false;
          let mbnativeadvancedP: Array<any> = [713, 367, 419];
         arrowH = [mbnativeadvancedP.length];
         styleZ = `${styleZ.length}`;
         iconrefreshN ^= iconrefreshN;
         yingW = styleZ.length < 69 || 69 < iconrefreshN;
         mbnativeadvancedP.push(iconrefreshN);
         break;
      }
      coreR += `${editH.length ^ 2}`;
   }
   while (coreR.length >= thumbnail5.length) {
       let libavutilE: Map<any, any> = new Map([[String.fromCharCode(118,95,55,95,115,104,117,116,116,105,110,103,0),929], [String.fromCharCode(120,95,49,48,48,95,97,118,102,105,108,116,101,114,0),967], [String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,51,95,48,0),331]]);
       let iconsharen = String.fromCharCode(121,95,56,49,95,97,115,107,105,110,103,0);
       let loginsuccessh: Array<any> = [String.fromCharCode(118,95,50,57,95,99,104,97,114,97,99,116,101,114,0), String.fromCharCode(118,95,51,52,95,99,111,112,121,120,0)];
       let robotoD = String.fromCharCode(99,95,49,95,117,110,101,115,99,97,112,101,0);
          let viewerR = 1.0;
         libavutilE = new Map([[`${libavutilE.size}`, 2]]);
         viewerR /= Math.max(parseFloat(`${parseInt(`${viewerR}`) * parseInt(`${viewerR}`)}`), 2);
         loginsuccessh = [(iconsharen == String.fromCharCode(112,0) ? libavutilE.size : iconsharen.length)];
          let libffmpegkitX = String.fromCharCode(97,115,115,101,114,116,105,111,110,95,110,95,51,57,0);
          let photod = 1;
         loginsuccessh = [1];
         libffmpegkitX = `${photod}`;
         photod |= (libffmpegkitX == String.fromCharCode(104,0) ? libffmpegkitX.length : photod);
      if (loginsuccessh.length >= libavutilE.size) {
         libavutilE.set(iconsharen, 3 | iconsharen.length);
      }
      for (let e = 0; e < 2; e++) {
         iconsharen += `${(String.fromCharCode(80,0) == robotoD ? robotoD.length : loginsuccessh.length)}`;
      }
      if (loginsuccessh.length >= libavutilE.size) {
         loginsuccessh = [iconsharen.length];
      }
      while ((4 * loginsuccessh.length) <= 3 || 5 <= (iconsharen.length * 4)) {
         loginsuccessh.push((robotoD == String.fromCharCode(112,0) ? robotoD.length : iconsharen.length));
         break;
      }
      for (let g = 0; g < 1; g++) {
         iconsharen += `${iconsharen.length * libavutilE.size}`;
      }
         iconsharen += `${libavutilE.size + 1}`;
         robotoD = `${robotoD.length ^ iconsharen.length}`;
      for (let a = 0; a < 2; a++) {
         loginsuccessh = [loginsuccessh.length];
      }
       let release_mom: Array<any> = [754, 794];
       let liveendmodallogoS: Array<any> = [String.fromCharCode(111,110,108,121,95,56,95,50,57,0), String.fromCharCode(102,111,108,108,111,119,115,95,56,95,49,56,0)];
      thumbnail5 += "1";
      break;
   }

    const state = await NetInfo.fetch();

   if (3 == scrollview3.length) {
       let privacyu = false;
       let iconstarh = String.fromCharCode(120,95,57,50,95,111,98,106,101,99,116,105,118,101,0);
       let playr: Array<any> = [928, 69];
         iconstarh = `${playr.length}`;
      for (let j = 0; j < 1; j++) {
          let statisticsk = String.fromCharCode(120,95,57,55,95,115,101,97,108,0);
          let emptyH = String.fromCharCode(120,95,54,53,95,100,111,119,110,114,105,103,104,116,0);
         playr = [1 | playr.length];
         statisticsk += `${(emptyH == String.fromCharCode(68,0) ? emptyH.length : statisticsk.length)}`;
      }
         playr = [2];
         iconstarh = `${iconstarh.length}`;
      for (let j = 0; j < 1; j++) {
         iconstarh += `${((privacyu ? 4 : 2) * 1)}`;
      }
      if (iconstarh.includes(`${privacyu}`)) {
         iconstarh = `${playr.length}`;
      }
      for (let f = 0; f < 3; f++) {
          let downt = String.fromCharCode(109,95,53,50,95,116,105,109,101,115,116,97,109,112,101,100,0);
          let servicee = false;
          let upgradeG = 0.0;
          let plashF = String.fromCharCode(122,95,50,57,95,101,115,116,97,98,108,105,115,104,0);
          let proxyH: Array<any> = [102, 38];
         privacyu = playr.includes(proxyH[0]);
         downt = `${(plashF == String.fromCharCode(97,0) ? plashF.length : downt.length)}`;
         servicee = downt.endsWith(`${servicee}`);
         upgradeG -= parseFloat(`${3}`);
         proxyH.push((3 & (servicee ? 5 : 3)));
      }
       let chartM = String.fromCharCode(112,95,56,55,95,99,111,111,114,100,105,110,97,116,101,0);
       let libglogW = String.fromCharCode(101,97,114,108,105,101,115,116,95,51,95,57,53,0);
      while (2 < iconstarh.length || !privacyu) {
         iconstarh = `${2 & libglogW.length}`;
         break;
      }
      scrollview3 = `${libffmpegkitF.size & livenodatabgimgb.size}`;
   }
   let mbsplash_ = 8118929 >= long_8io;
   do {
      long_8io |= parseInt(`${switch_90i}`) >> (Math.min(Math.abs(3), 5));
      if (mbsplash_) {
         break;
      }
   } while (mbsplash_ && (!thumbnail5.startsWith(`${long_8io}`)));
   let soundO = 7537470 >= libreanimatedu.length;
   do {
      libreanimatedu += "3";
      if (soundO) {
         break;
      }
   } while (((libreanimatedu.length % 4) < 4 || 4 < (4 % (Math.max(6, long_8io)))) && soundO);
   if (3 == (1 * livenodatabgimgb.size)) {
       let chat3 = 1.0;
       let stylesJ = String.fromCharCode(120,104,116,109,108,95,114,95,50,52,0);
       let f_playerW = String.fromCharCode(116,95,54,53,95,116,121,112,101,115,0);
      let liblogger8 = 7572890 >= f_playerW.length;
      do {
         f_playerW += `${f_playerW.length & 3}`;
         if (liblogger8) {
            break;
         }
      } while (liblogger8 && (4 >= stylesJ.length));
      let matchesX = chat3 >= 9014452.0;
      do {
         chat3 -= (String.fromCharCode(87,0) == stylesJ ? stylesJ.length : f_playerW.length);
         if (matchesX) {
            break;
         }
      } while ((stylesJ.length < parseInt(`${chat3}`)) && matchesX);
         f_playerW += `${stylesJ.length}`;
          let footballfieldT = 0.0;
         f_playerW += `${(stylesJ == String.fromCharCode(122,0) ? parseInt(`${footballfieldT}`) : stylesJ.length)}`;
      while (chat3 < stylesJ.length) {
         chat3 /= Math.max(1, 3);
         break;
      }
      while (!stylesJ.includes(`${chat3}`)) {
         stylesJ = `${1 * f_playerW.length}`;
         break;
      }
      let tickd = chat3 <= 8658429.0;
      do {
         chat3 -= 1 >> (Math.min(3, f_playerW.length));
         if (tickd) {
            break;
         }
      } while ((4 > f_playerW.length) && tickd);
         chat3 *= (String.fromCharCode(122,0) == stylesJ ? parseInt(`${chat3}`) : stylesJ.length);
         f_playerW = `${stylesJ.length}`;
      scrollview3 = `${parseInt(`${chat3}`) >> (Math.min(time_zrV.length, 1))}`;
   }
       let change1: Map<any, any> = new Map([[String.fromCharCode(114,95,49,48,95,99,104,117,110,107,115,0),String.fromCharCode(113,95,51,56,95,105,110,118,111,107,101,114,0)], [String.fromCharCode(109,95,51,55,95,112,97,99,107,101,116,0),String.fromCharCode(97,110,99,104,111,114,115,95,118,95,56,52,0)]]);
      if (change1.get(`${change1.size}`) == null) {
          let textinputJ = String.fromCharCode(97,95,57,56,95,118,112,109,99,0);
          let hook3 = String.fromCharCode(105,102,102,116,95,106,95,56,52,0);
         change1.set(`${textinputJ}`, (String.fromCharCode(50,0) == textinputJ ? change1.size : textinputJ.length));
         hook3 += `${hook3.length >> (Math.min(4, hook3.length))}`;
      }
      if ((change1.size + change1.size) < 5 || (change1.size + 5) < 1) {
         change1 = new Map([[`${change1.size}`, change1.size * 3]]);
      }
         change1 = new Map([[`${change1.size}`, change1.size * 3]]);
      libreanimatedu = `${2 - long_8io}`;
       let libreactZ: Map<any, any> = new Map([[String.fromCharCode(100,95,55,53,95,115,116,97,99,107,101,100,0),false ], [String.fromCharCode(114,97,116,105,111,115,95,119,95,57,51,0),false ]]);
       let predictionactive2 = 0.0;
          let fastforwardU: Map<any, any> = new Map([[String.fromCharCode(103,95,56,52,95,105,110,115,116,97,108,108,101,100,0),601], [String.fromCharCode(108,111,99,107,115,99,114,101,101,110,95,50,95,52,51,0),207]]);
          let rncoree: Map<any, any> = new Map([[String.fromCharCode(109,109,97,112,95,108,95,49,49,0),String.fromCharCode(112,95,57,51,95,105,110,116,114,97,120,109,98,121,0)], [String.fromCharCode(109,98,117,118,101,114,114,111,114,95,111,95,51,53,0),String.fromCharCode(115,95,55,57,0)]]);
          let movies0 = 0;
         predictionactive2 *= 1 - fastforwardU.size;
         fastforwardU = new Map([[`${rncoree.size}`, movies0 / (Math.max(rncoree.size, 3))]]);
         movies0 -= movies0;
      let minivodn = libreactZ.size >= 7149170;
      do {
         libreactZ = new Map([[`${libreactZ.size}`, libreactZ.size % (Math.max(1, parseInt(`${predictionactive2}`)))]]);
         if (minivodn) {
            break;
         }
      } while (minivodn && (3.52 <= (libreactZ.size / (Math.max(10, predictionactive2)))));
      thumbnail5 = "3";
   while ((switch_90i / 4.97) >= 5.14 && 4.97 >= (switch_90i / (Math.max(parseFloat(`${thumbnail5.length}`), 7)))) {
      thumbnail5 += "3";
      break;
   }
   if (!scrollview3.includes(livenodatabgimgT)) {
       let downloadedW = String.fromCharCode(99,108,101,97,110,101,100,95,114,95,49,49,0);
       let penaltygoalb: Array<any> = [862, 404];
       let overO = 4;
       let floatingQ = 2.0;
      for (let f = 0; f < 3; f++) {
          let stringC = 1;
          let package_jW = String.fromCharCode(101,101,112,95,56,95,49,0);
          let transferu = 3;
          let heartJ: Map<any, any> = new Map([[String.fromCharCode(102,95,49,57,95,110,116,114,111,0),376], [String.fromCharCode(100,97,116,101,95,109,95,52,53,0),559], [String.fromCharCode(104,119,116,105,109,101,95,54,95,53,0),997]]);
          let vipsportM = String.fromCharCode(102,95,52,55,95,97,118,97,116,97,114,115,0);
         overO %= Math.max(4, downloadedW.length - 2);
         stringC /= Math.max(3, (package_jW == String.fromCharCode(114,0) ? stringC : package_jW.length));
         transferu &= 3;
         heartJ = new Map([[package_jW, package_jW.length + stringC]]);
         vipsportM = "2";
      }
       let shirtd = String.fromCharCode(116,97,115,107,95,52,95,55,55,0);
       let bingT = String.fromCharCode(99,97,108,108,101,114,95,57,95,56,51,0);
         bingT += `${(String.fromCharCode(120,0) == bingT ? parseInt(`${floatingQ}`) : bingT.length)}`;
       let bdxadsdkJ = 5.0;
       let uploadO = String.fromCharCode(112,111,119,101,114,102,117,108,95,103,95,49,54,0);
         penaltygoalb.push((uploadO == String.fromCharCode(87,0) ? bingT.length : uploadO.length));
       let telemetry6 = 2.0;
       let nalyticsb = String.fromCharCode(101,116,104,101,114,110,101,116,95,111,95,57,48,0);
      while (4 > (3 >> (Math.min(2, nalyticsb.length)))) {
          let redgoal_: Array<any> = [937, 503];
         nalyticsb += `${bingT.length + 2}`;
         redgoal_ = [2 & redgoal_.length];
         break;
      }
         overO *= (String.fromCharCode(75,0) == shirtd ? shirtd.length : overO);
      while (4 <= (downloadedW.length / (Math.max(2, penaltygoalb.length))) || (penaltygoalb.length / (Math.max(downloadedW.length, 8))) <= 4) {
         downloadedW = `${uploadO.length}`;
         break;
      }
      if (downloadedW.endsWith(`${bdxadsdkJ}`)) {
         bdxadsdkJ *= uploadO.length & parseInt(`${floatingQ}`);
      }
      scrollview3 = "1";
   }
      switch_90i *= parseFloat(`${libffmpegkitF.size}`);
    const offline = !(state.isConnected && state.isInternetReachable);

      livenodatabgimgb = new Map([[coreR, 1 >> (Math.min(3, editH.length))]]);
   for (let b = 0; b < 2; b++) {
      libreanimatedu = `${time_zrV.length}`;
   }
   let clockO = switch_90i <= 6629943.0;
   do {
      switch_90i += parseFloat(`${parseInt(`${switch_90i}`)}`);
      if (clockO) {
         break;
      }
   } while (clockO && (3 == (parseInt(`${switch_90i}`) / (Math.max(5, scrollview3.length)))));
   let backwardC = String.fromCharCode(115,51,120,121,54,0) == coreR;
   do {
       let notificationfillempty5 = 4.0;
       let friendsE = 1.0;
       let target_ = String.fromCharCode(114,101,99,97,108,99,117,108,97,116,101,95,110,95,50,56,0);
      let pathQ = notificationfillempty5 >= 6100880.0;
      do {
         notificationfillempty5 *= parseFloat(`${1}`);
         if (pathQ) {
            break;
         }
      } while (pathQ && (5.64 <= friendsE));
      if (notificationfillempty5 <= friendsE) {
         friendsE /= Math.max(2, parseInt(`${notificationfillempty5}`));
      }
         target_ = `${target_.length >> (Math.min(1, Math.abs(parseInt(`${notificationfillempty5}`))))}`;
      while ((4 - friendsE) <= 1.14) {
          let ksadm = 3.0;
          let modulew = 4.0;
         notificationfillempty5 -= parseFloat(`${parseInt(`${modulew}`) % 3}`);
         ksadm -= parseInt(`${ksadm}`);
         modulew /= Math.max(1, parseInt(`${ksadm}`));
         break;
      }
         target_ += `${target_.length}`;
      for (let u = 0; u < 2; u++) {
         notificationfillempty5 *= parseFloat(`${parseInt(`${friendsE}`)}`);
      }
      let rewind8 = String.fromCharCode(113,103,111,120,98,119,0) == target_;
      do {
          let q_hashv = 0.0;
          let refreshU = 1.0;
          let profileframeC = String.fromCharCode(115,99,116,112,117,116,105,108,95,120,95,50,50,0);
          let componentsx = String.fromCharCode(120,95,49,51,95,97,117,116,111,114,111,116,97,116,105,111,110,0);
          let mbbidV = 5.0;
         target_ = `${parseInt(`${mbbidV}`) & 2}`;
         q_hashv /= Math.max(5, parseFloat(`${1}`));
         refreshU += (componentsx == String.fromCharCode(115,0) ? componentsx.length : parseInt(`${q_hashv}`));
         profileframeC += "2";
         mbbidV *= parseFloat(`${parseInt(`${q_hashv}`) + profileframeC.length}`);
         if (rewind8) {
            break;
         }
      } while ((3.42 >= (notificationfillempty5 - 3.46)) && rewind8);
      let with_6P = target_.length <= 6938094;
      do {
          let lineR = String.fromCharCode(104,95,49,52,95,101,114,114,109,115,103,0);
          let checkboxe = String.fromCharCode(122,95,53,55,95,108,111,97,100,101,114,0);
         target_ += `${lineR.length}`;
         lineR = `${2 * checkboxe.length}`;
         checkboxe = `${(checkboxe == String.fromCharCode(73,0) ? checkboxe.length : checkboxe.length)}`;
         if (with_6P) {
            break;
         }
      } while (with_6P && (target_.length == friendsE));
         friendsE *= parseInt(`${notificationfillempty5}`);
      coreR += `${parseInt(`${redirect7}`)}`;
      if (backwardC) {
         break;
      }
   } while (backwardC && (coreR != String.fromCharCode(71,0) || libreanimatedu == String.fromCharCode(97,0)));
       let defaultpredictionprofileC = String.fromCharCode(120,95,53,55,95,99,111,109,112,97,116,105,98,108,101,0);
      if (defaultpredictionprofileC.length > 3) {
          let reactnativejsj = String.fromCharCode(99,111,111,114,100,105,110,97,116,105,111,110,95,56,95,51,51,0);
          let render6 = true;
          let unselectedW = 0.0;
          let defaultlogoy: Array<any> = [845, 799];
         defaultpredictionprofileC = `${parseInt(`${unselectedW}`) / 3}`;
         reactnativejsj += `${(reactnativejsj == String.fromCharCode(76,0) ? (render6 ? 3 : 1) : reactnativejsj.length)}`;
         render6 = defaultlogoy.length >= 39;
         unselectedW += parseFloat(`${reactnativejsj.length}`);
         defaultlogoy = [(String.fromCharCode(100,0) == reactnativejsj ? defaultlogoy.length : reactnativejsj.length)];
      }
      while (defaultpredictionprofileC != String.fromCharCode(77,0)) {
         defaultpredictionprofileC += `${defaultpredictionprofileC.length | defaultpredictionprofileC.length}`;
         break;
      }
      if (defaultpredictionprofileC == String.fromCharCode(99,0)) {
         defaultpredictionprofileC += `${defaultpredictionprofileC.length}`;
      }
      redirect7 /= Math.max(3, long_8io & parseInt(`${redirect7}`));
       let reducerZ = String.fromCharCode(99,111,110,118,101,114,115,105,111,110,115,95,54,95,56,56,0);
       let nbatrophyt = String.fromCharCode(100,95,55,53,95,109,118,99,111,117,110,116,0);
      let graphicsa = String.fromCharCode(114,102,111,107,57,117,0) == reducerZ;
      do {
         reducerZ = `${reducerZ.length}`;
         if (graphicsa) {
            break;
         }
      } while ((!nbatrophyt.startsWith(`${reducerZ.length}`)) && graphicsa);
          let corev = 5;
         reducerZ = `${reducerZ.length / (Math.max(9, corev))}`;
         nbatrophyt = "1";
      let phoneshareP = 8336556 >= nbatrophyt.length;
      do {
          let customv = false;
          let hookC = String.fromCharCode(121,95,56,57,95,100,111,119,110,108,111,97,100,0);
         nbatrophyt = "1";
         customv = (hookC.length * hookC.length) > 74;
         if (phoneshareP) {
            break;
         }
      } while ((reducerZ == nbatrophyt) && phoneshareP);
      while (nbatrophyt.length < 3) {
          let lnewsshare5 = 4.0;
          let iconnointernetE = String.fromCharCode(116,101,120,116,117,114,101,100,115,112,101,110,99,95,56,95,49,55,0);
          let dangerz: Array<any> = [884, 960, 436];
          let codegenN: Array<any> = [370, 998, 81];
          let reactnavigationg: Array<any> = [812, 869, 376];
         reducerZ += `${dangerz.length}`;
         lnewsshare5 += parseFloat(`${parseInt(`${lnewsshare5}`)}`);
         iconnointernetE += `${codegenN.length + parseInt(`${lnewsshare5}`)}`;
         dangerz.push(reactnavigationg.length);
         codegenN = [3];
         reactnavigationg = [parseInt(`${lnewsshare5}`)];
         break;
      }
         nbatrophyt += "2";
      redirect7 -= thumbnail5.length;
      libreanimatedu = `${(livenodatabgimgT == String.fromCharCode(69,0) ? livenodatabgimgT.length : parseInt(`${switch_90i}`))}`;
   let kickk = thumbnail5 == String.fromCharCode(113,105,106,121,111,110,104,95,111,0);
   do {
      thumbnail5 = `${editH.length >> (Math.min(2, Math.abs(parseInt(`${switch_90i}`))))}`;
      if (kickk) {
         break;
      }
   } while (kickk && (4 > (livenodatabgimgb.size + thumbnail5.length) || (thumbnail5.length + livenodatabgimgb.size) > 4));
   if (scrollview3.length >= 1) {
       let lightr = 2;
       let sinaz: Array<any> = [916, 814];
       let time_hyY = String.fromCharCode(109,95,51,54,95,97,108,108,112,97,115,115,0);
      if (lightr > 2) {
         lightr += 1 * time_hyY.length;
      }
         time_hyY = "1";
         time_hyY += `${1 % (Math.max(4, sinaz.length))}`;
         time_hyY = "1";
       let penaltygoalO = 3.0;
      while ((penaltygoalO - 3.66) < 4.82 || (penaltygoalO - 3.66) < 2.70) {
         lightr <<= Math.min(Math.abs(2 & parseInt(`${penaltygoalO}`)), 3);
         break;
      }
       let controlt = 3.0;
       let shoot8 = 5.0;
         shoot8 /= Math.max(parseFloat(`${time_hyY.length % (Math.max(1, 7))}`), 3);
         lightr |= 3;
      scrollview3 = `${editH.length << (Math.min(3, Math.abs(parseInt(`${redirect7}`))))}`;
   }
    setIsOffline(offline);

   while (5.90 <= (5.72 / (Math.max(3, redirect7))) && (redirect7 / (Math.max(5.72, 1))) <= 2.27) {
       let libsgcorex = false;
       let nativemoduleB = 4.0;
       let tempnodatagifA = 0.0;
       let invitel = String.fromCharCode(121,95,54,95,119,104,105,116,101,108,105,115,116,0);
       let reactnativeratingsF = true;
       let annerQ = true;
      if (libsgcorex) {
          let iconwechatZ = true;
          let skipY = 3;
         tempnodatagifA += parseFloat(`${parseInt(`${nativemoduleB}`)}`);
         iconwechatZ = skipY == 43;
         skipY += (skipY >> (Math.min(3, Math.abs((iconwechatZ ? 1 : 1)))));
      }
         libsgcorex = !annerQ;
         nativemoduleB -= (parseFloat(`${(annerQ ? 1 : 5) << (Math.min(Math.abs(parseInt(`${tempnodatagifA}`)), 1))}`));
         invitel += `${parseInt(`${nativemoduleB}`) % 2}`;
      if (invitel.endsWith(`${reactnativeratingsF}`)) {
          let descU: Array<any> = [578, 196, 510];
         invitel = `${descU.length}`;
      }
         libsgcorex = !libsgcorex && 43.0 < nativemoduleB;
      if (4 < (invitel.length >> (Math.min(Math.abs(3), 1))) || 2.48 < (1.60 * nativemoduleB)) {
         nativemoduleB *= parseFloat(`${parseInt(`${tempnodatagifA}`)}`);
      }
          let reactnativejs3 = String.fromCharCode(116,95,51,95,97,118,102,111,117,110,100,97,116,105,111,110,0);
          let alert2 = 0.0;
          let penaltygoal0 = 4.0;
         invitel += `${2 / (Math.max(10, parseInt(`${tempnodatagifA}`)))}`;
         reactnativejs3 += `${reactnativejs3.length << (Math.min(1, Math.abs(parseInt(`${penaltygoal0}`))))}`;
         alert2 += parseFloat(`${reactnativejs3.length}`);
         penaltygoal0 += reactnativejs3.length << (Math.min(Math.abs(2), 4));
      while ((tempnodatagifA * 4.34) <= 4.79) {
         tempnodatagifA *= parseFloat(`${parseInt(`${nativemoduleB}`) / 2}`);
         break;
      }
         libsgcorex = tempnodatagifA < 52.36 && libsgcorex;
         libsgcorex = tempnodatagifA < 2.48;
      livenodatabgimgb = new Map([[`${nativemoduleB}`, (editH == String.fromCharCode(108,0) ? parseInt(`${nativemoduleB}`) : editH.length)]]);
      break;
   }
      time_zrV += `${(coreR == String.fromCharCode(107,0) ? coreR.length : long_8io)}`;
      coreR = `${scrollview3.length & editH.length}`;
      libreanimatedu += `${(livenodatabgimgT == String.fromCharCode(50,0) ? livenodatabgimgT.length : scrollview3.length)}`;
   if ((4 >> (Math.min(5, scrollview3.length))) >= 1) {
      redirect7 *= long_8io;
   }
      coreR = `${(String.fromCharCode(95,0) == libreanimatedu ? parseInt(`${redirect7}`) : libreanimatedu.length)}`;
       let runtimescheduler6 = String.fromCharCode(103,108,98,108,95,52,95,49,55,0);
       let controlf = false;
       let arrowuph: Map<any, any> = new Map([[String.fromCharCode(101,95,54,95,116,104,117,109,98,110,97,105,108,0),996], [String.fromCharCode(115,95,51,95,115,117,112,101,114,115,101,116,0),417], [String.fromCharCode(115,95,50,95,100,99,98,108,111,99,107,0),458]]);
         runtimescheduler6 = "1";
         arrowuph = new Map([[`${arrowuph.size}`, arrowuph.size | 3]]);
      if (runtimescheduler6.length == 4) {
         runtimescheduler6 += `${runtimescheduler6.length}`;
      }
      if (2 <= (arrowuph.size | runtimescheduler6.length)) {
         runtimescheduler6 += `${runtimescheduler6.length & arrowuph.size}`;
      }
      while (3 <= runtimescheduler6.length) {
         controlf = runtimescheduler6.endsWith(`${controlf}`);
         break;
      }
          let coded = String.fromCharCode(101,95,49,53,95,102,105,108,101,104,101,97,100,101,114,0);
          let flyerg = false;
          let greyarrowupP = false;
         controlf = runtimescheduler6.length >= 8 && !controlf;
         coded += `${((flyerg ? 4 : 1))}`;
         flyerg = (!flyerg ? greyarrowupP : !flyerg);
         greyarrowupP = coded.startsWith(`${flyerg}`);
      while (4 > runtimescheduler6.length) {
         runtimescheduler6 = `${3 + runtimescheduler6.length}`;
         break;
      }
         controlf = !controlf;
          let full2 = false;
          let paginationo: Array<any> = [String.fromCharCode(107,95,50,53,95,116,111,109,105,99,0), String.fromCharCode(112,95,53,57,95,114,111,119,105,100,0)];
         arrowuph.set(`${full2}`, (arrowuph.size & (full2 ? 5 : 5)));
         paginationo.push(2 & paginationo.length);
      long_8io += (String.fromCharCode(104,0) == libreanimatedu ? libffmpegkitF.size : libreanimatedu.length);
   if ((4 ^ long_8io) < 5) {
       let reactnativeratingse = String.fromCharCode(100,95,55,50,95,97,103,103,105,110,102,111,0);
         reactnativeratingse += "1";
         reactnativeratingse = `${reactnativeratingse.length}`;
         reactnativeratingse += `${reactnativeratingse.length}`;
      time_zrV = "2";
   }
      livenodatabgimgT += "1";
    if (!offline) {

       let whiteE = String.fromCharCode(114,101,99,116,95,50,95,51,49,0);
          let refreshi = 0;
          let shielddonev = 5;
         whiteE += `${(String.fromCharCode(84,0) == whiteE ? whiteE.length : refreshi)}`;
         refreshi |= shielddonev;
      if (whiteE.endsWith(`${whiteE.length}`)) {
          let libavutilP = String.fromCharCode(121,95,53,57,95,120,114,101,115,0);
         whiteE += `${libavutilP.length & 3}`;
      }
      while (2 < whiteE.length && whiteE == String.fromCharCode(84,0)) {
         whiteE = `${whiteE.length}`;
         break;
      }
      livenodatabgimgb.set(pointX, 3);
   let graphicsn = livenodatabgimgb.size >= 9634137;
   do {
      livenodatabgimgb.set(pointX, pointX.length);
      if (graphicsn) {
         break;
      }
   } while (graphicsn && (5 < livenodatabgimgT.length));
   if ((2 ^ scrollview3.length) >= 4) {
      redirect7 -= livenodatabgimgT.length - pointX.length;
   }
      libreanimatedu += "2";
   if (livenodatabgimgT.includes(`${thumbnail5.length}`)) {
      thumbnail5 = `${libreanimatedu.length | 1}`;
   }
   if (thumbnail5.length >= 3) {
       let telegramy = String.fromCharCode(111,95,48,95,105,118,97,114,0);
       let goal_ = String.fromCharCode(101,118,97,108,117,97,116,111,114,95,104,95,55,48,0);
       let ewarded5 = 4.0;
       let greyarrowupf = 2;
      if ((ewarded5 * 1.69) == 4.2 || 1.69 == (ewarded5 * greyarrowupf)) {
          let submitR = true;
          let sourceD = String.fromCharCode(102,95,50,55,95,105,116,97,108,105,99,0);
          let weibo5 = String.fromCharCode(99,95,53,95,115,116,114,105,100,101,98,0);
          let debugk = 3.0;
         greyarrowupf += weibo5.length;
         submitR = sourceD.length >= 81;
         sourceD += `${sourceD.length % 1}`;
         weibo5 = `${sourceD.length >> (Math.min(3, Math.abs(parseInt(`${debugk}`))))}`;
         debugk /= Math.max(1, 2);
      }
         ewarded5 += 3;
      if (telegramy.length <= 4 && 4 <= goal_.length) {
          let selectZ = 3;
          let videojsJ = 5;
          let profileactiveQ = String.fromCharCode(121,95,54,54,95,111,112,116,115,0);
          let defaultfootballbg7 = String.fromCharCode(105,109,112,111,114,116,97,98,108,101,100,95,107,95,56,53,0);
          let iconsaveimage3 = String.fromCharCode(112,114,101,116,99,104,95,53,95,55,53,0);
         goal_ = `${profileactiveQ.length}`;
         selectZ %= Math.max(defaultfootballbg7.length << (Math.min(Math.abs(3), 1)), 2);
         videojsJ >>= Math.min(1, iconsaveimage3.length);
         profileactiveQ += `${3 & defaultfootballbg7.length}`;
         iconsaveimage3 = `${videojsJ}`;
      }
         goal_ += `${goal_.length}`;
         telegramy = `${(telegramy == String.fromCharCode(98,0) ? parseInt(`${ewarded5}`) : telegramy.length)}`;
       let animationsH = String.fromCharCode(112,97,114,115,101,95,100,95,53,52,0);
       let backiconY = 0.0;
      while (4 == (2 >> (Math.min(5, Math.abs(greyarrowupf))))) {
         animationsH = `${goal_.length % (Math.max(3, 6))}`;
         break;
      }
         greyarrowupf <<= Math.min(Math.abs(telegramy.length * goal_.length), 1);
         goal_ = `${parseInt(`${ewarded5}`)}`;
      let libturbomodulejsijniX = String.fromCharCode(118,106,120,53,0) == goal_;
      do {
         goal_ = `${parseInt(`${ewarded5}`) | telegramy.length}`;
         if (libturbomodulejsijniX) {
            break;
         }
      } while ((telegramy.includes(`${goal_.length}`)) && libturbomodulejsijniX);
       let arrowrightA = String.fromCharCode(117,95,55,56,95,98,105,116,114,101,100,117,99,116,105,111,110,0);
       let moviesN = String.fromCharCode(105,95,53,48,95,116,105,109,101,119,97,105,116,0);
      pointX += `${greyarrowupf}`;
   }
   for (let k = 0; k < 2; k++) {
      scrollview3 += `${scrollview3.length * 2}`;
   }
   let typingv = 8664125.0 >= redirect7;
   do {
      redirect7 *= libreanimatedu.length;
      if (typingv) {
         break;
      }
   } while (typingv && (1.1 >= (time_zrV.length / (Math.max(8, redirect7))) || (parseInt(`${redirect7}`) / 4) >= 2));
      libffmpegkitF = new Map([[`${switch_90i}`, long_8io - 2]]);
      handleRefresh();
    }
  };

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (
        !settingsReducer.isOffline &&
        settingsReducer.isOffline !== isOffline
      ) {
        setIsOffline(settingsReducer.isOffline);
        handleRefresh();
      } else if (settingsReducer.isOffline) {
        return () => {
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline])
  );

  const fetchData = async () => {
       let umeng_ = false;
    let transferX = String.fromCharCode(111,95,52,55,95,115,112,105,110,110,101,114,0);
    let turnJ = String.fromCharCode(97,118,101,114,97,103,101,115,95,102,95,52,51,0);
    let hook7 = String.fromCharCode(115,97,105,111,95,98,95,57,0);
    let codegent = 4;
    let basketballhometeamf = 4.0;
    let memberq = 4;
    let libavfiltere: Array<any> = [890, 250, 655];
    let fastforwardn: Array<any> = [94, 617];
   if (!turnJ.endsWith(`${libavfiltere.length}`)) {
      turnJ = `${((umeng_ ? 1 : 5) & libavfiltere.length)}`;
   }

    const data = await wwProgress.getNativeList();

   if (turnJ == String.fromCharCode(113,0) && hook7.length <= 3) {
      hook7 += `${1 * turnJ.length}`;
   }
    let oneTime: Array<promoMembershipModel>;
    let subscription: Array<promoMembershipModel>;

    if (data) {
      oneTime = data.one_time_items.map((product: any) => {
        return {
          productId: product.product_id,
          productSKU: product.product_ios_product_id,
          title: product.product_name,
          price: product.product_price,
          promoPrice: product.product_promo_price,
          promoPriceStr:
            product.currency.currency_symbol +
            " " +
            product.product_promo_price,
          localizedPrice:
            product.currency.currency_symbol + " " + product.product_price,
          description: product.product_desc,
          subscriptionDays: product.product_value,
          zfOptions: {
            payment_type_code: "GOOGLE_PAY",
            payment_type_name: "Google Pay",
            payment_type_icon: "benefitTopic.png",
          },
          productType: IAP_TYPE,
        };
      });

      subscription = data.subscription_items.map((product: any) => {
        return {
          productId: product.product_id,
          productSKU: product.product_ios_product_id,
          title: product.product_name,
          price: product.product_price,
          promoPrice: product.product_promo_price,
          promoPriceStr:
            product.currency.currency_symbol + product.product_promo_price,
          localizedPrice:
            product.currency.currency_symbol +
            (product.product_name === "1个月"
              ? product.product_price
              : product.product_fake_price),
          description: product.product_desc,
          subscriptionDays: product.product_value,
          zfOptions: {
            payment_type_code: "GOOGLE_PAY",
            payment_type_name: "Google Pay",
            payment_type_icon: "benefitTopic.png",
          },
          productType: SUBSCRIPTION_TYPE,
        };
      });

   let specQ = 7572383 <= transferX.length;
   do {
       let whiteu = String.fromCharCode(122,95,52,57,95,99,97,110,100,105,100,97,116,101,115,0);
      while (whiteu.length < whiteu.length) {
          let privilege9 = 4;
          let regengC = 1.0;
          let iconT: Map<any, any> = new Map([[String.fromCharCode(104,117,102,102,95,122,95,50,57,0),false ], [String.fromCharCode(101,95,54,53,95,97,99,99,101,115,115,105,98,105,108,105,116,121,0),false ], [String.fromCharCode(119,95,52,55,95,99,112,112,108,105,110,116,0),true ]]);
          let libsgcoreW = 2.0;
         whiteu += `${(String.fromCharCode(107,0) == whiteu ? whiteu.length : privilege9)}`;
         privilege9 &= 1 - parseInt(`${regengC}`);
         regengC *= iconT.size;
         iconT.set(`${libsgcoreW}`, iconT.size);
         libsgcoreW += 1;
         break;
      }
         whiteu += "3";
      if (!whiteu.startsWith(whiteu)) {
         whiteu = "1";
      }
      transferX = `${parseInt(`${basketballhometeamf}`)}`;
      if (specQ) {
         break;
      }
   } while ((hook7.length == 3 || transferX.length == 3) && specQ);

      

       let ewardedI = String.fromCharCode(104,95,53,56,95,115,99,111,112,101,115,0);
      while (2 >= ewardedI.length) {
         ewardedI += `${ewardedI.length << (Math.min(Math.abs(1), 2))}`;
         break;
      }
         ewardedI += "3";
       let tramini0 = String.fromCharCode(98,117,105,108,100,105,110,103,95,52,95,56,57,0);
       let middleR = String.fromCharCode(110,111,116,105,99,101,95,115,95,49,48,48,0);
      codegent *= (1 + (umeng_ ? 5 : 5));
      const index12Months = subscription.findIndex(
        (item) => item.title === "12个月"
      );

   if (turnJ.includes(`${codegent}`)) {
      turnJ += `${2 ^ transferX.length}`;
   }

      

       let producto = String.fromCharCode(108,95,49,50,95,116,97,98,108,101,105,110,105,116,0);
         producto += `${(String.fromCharCode(103,0) == producto ? producto.length : producto.length)}`;
      for (let t = 0; t < 3; t++) {
         producto = `${producto.length | producto.length}`;
      }
          let temperature_ = 4.0;
          let volumef = 2.0;
         producto += "3";
         temperature_ /= Math.max(parseInt(`${volumef}`), 2);
         volumef -= parseFloat(`${parseInt(`${volumef}`) + parseInt(`${temperature_}`)}`);
      turnJ = `${((umeng_ ? 3 : 1) >> (Math.min(Math.abs(parseInt(`${basketballhometeamf}`)), 2)))}`;
      if (index12Months !== -1) {

   for (let g = 0; g < 3; g++) {
      transferX = "3";
   }
        const item12Months = subscription.splice(index12Months, 1)[0];

   let animationsp = umeng_ ? !umeng_ : umeng_;
   do {
      umeng_ = String.fromCharCode(117,0) == turnJ;
      if (animationsp) {
         break;
      }
   } while ((!umeng_) && animationsp);
        subscription.splice(1, 0, item12Months);
      }

      console.log("subscription");

   if (3 > transferX.length || !umeng_) {
       let i_lockk = 3.0;
       let relatedY = 4.0;
       let iconwechatc = String.fromCharCode(121,95,50,53,95,103,111,108,100,0);
       let with_8_ = 5.0;
      let anytime2 = 6414097.0 >= relatedY;
      do {
         relatedY /= Math.max(parseFloat(`${1 >> (Math.min(4, Math.abs(parseInt(`${relatedY}`))))}`), 2);
         if (anytime2) {
            break;
         }
      } while (((relatedY - 2.57) < 4.60) && anytime2);
      if (4.37 >= (1 + with_8_)) {
         i_lockk /= Math.max(parseFloat(`${parseInt(`${with_8_}`) & 1}`), 4);
      }
      let iconnewsshare2 = 4935128.0 >= relatedY;
      do {
         relatedY /= Math.max(3, parseFloat(`${parseInt(`${with_8_}`) >> (Math.min(iconwechatc.length, 2))}`));
         if (iconnewsshare2) {
            break;
         }
      } while (((1.79 - relatedY) == 4.62) && iconnewsshare2);
      for (let m = 0; m < 3; m++) {
          let yellowanimationlivej = String.fromCharCode(101,95,49,55,95,116,115,101,113,0);
          let castA: Array<any> = [String.fromCharCode(119,95,49,95,97,115,102,99,114,121,112,116,0), String.fromCharCode(117,95,52,48,95,115,105,112,114,100,97,116,97,0), String.fromCharCode(108,97,122,105,108,121,95,116,95,51,48,0)];
          let muted7 = String.fromCharCode(106,95,57,56,95,118,105,100,101,111,101,110,99,100,115,112,0);
          let disconnectedlogo6 = 2;
         relatedY += parseFloat(`${parseInt(`${i_lockk}`)}`);
         yellowanimationlivej = "2";
         castA.push(castA.length ^ 1);
         muted7 = "2";
         disconnectedlogo6 -= yellowanimationlivej.length;
      }
      for (let s = 0; s < 2; s++) {
         with_8_ *= 3;
      }
      for (let o = 0; o < 1; o++) {
         with_8_ *= 1 << (Math.min(4, iconwechatc.length));
      }
      for (let z = 0; z < 3; z++) {
         relatedY -= parseFloat(`${parseInt(`${i_lockk}`)}`);
      }
         iconwechatc += `${iconwechatc.length >> (Math.min(Math.abs(2), 1))}`;
       let animationsM = String.fromCharCode(108,111,99,105,95,54,95,55,51,0);
      while ((with_8_ + i_lockk) > 2.75) {
         with_8_ *= 2;
         break;
      }
      let castn = 6595982.0 <= with_8_;
      do {
          let indicator5: Array<any> = [877, 596];
          let orientationa = 2;
          let setting2: Array<any> = [456, 874, 59];
          let detailZ = 0.0;
          let leftJ = String.fromCharCode(113,95,56,52,95,117,112,99,97,115,101,0);
         with_8_ /= Math.max(orientationa >> (Math.min(5, Math.abs(3))), 1);
         indicator5 = [3 ^ leftJ.length];
         orientationa %= Math.max(setting2.length + 3, 3);
         setting2 = [setting2.length];
         detailZ *= parseFloat(`${setting2.length}`);
         leftJ = `${3 >> (Math.min(5, leftJ.length))}`;
         if (castn) {
            break;
         }
      } while (((with_8_ / 1.42) <= 2.28) && castn);
      for (let o = 0; o < 3; o++) {
         iconwechatc = `${(String.fromCharCode(105,0) == animationsM ? animationsM.length : parseInt(`${with_8_}`))}`;
      }
      transferX += "2";
   }
      console.log(subscription);

       let notificationfillemptyw = String.fromCharCode(114,97,115,116,101,114,105,122,101,115,95,116,95,50,55,0);
          let statisticsL = String.fromCharCode(117,95,54,51,95,98,117,102,101,114,0);
          let fileV = String.fromCharCode(113,117,105,122,95,52,95,50,53,0);
         notificationfillemptyw = `${(fileV == String.fromCharCode(69,0) ? fileV.length : statisticsL.length)}`;
          let faviconT = String.fromCharCode(104,115,99,114,111,108,108,95,115,95,49,49,0);
          let largebrightness6: Map<any, any> = new Map([[String.fromCharCode(115,98,99,100,115,112,95,50,95,54,49,0),915], [String.fromCharCode(109,105,108,105,111,110,115,95,111,95,51,57,0),713], [String.fromCharCode(97,117,100,105,111,112,114,111,99,95,115,95,55,56,0),148]]);
         notificationfillemptyw = `${largebrightness6.size}`;
         faviconT = `${faviconT.length * 1}`;
         largebrightness6 = new Map([[faviconT, faviconT.length | faviconT.length]]);
         notificationfillemptyw = `${notificationfillemptyw.length | 2}`;
      codegent &= ((umeng_ ? 2 : 2) % (Math.max(9, parseInt(`${basketballhometeamf}`))));
      setOneTimeProducts(oneTime);

      umeng_ = (codegent << (Math.min(transferX.length, 2))) > 99;
      setSubcriptionProducts(subscription);

      transferX = `${libavfiltere.length - 3}`;
      setTimeout(() => {

   let floaterQ = transferX.length <= 9850123;
   do {
      transferX += `${hook7.length}`;
      if (floaterQ) {
         break;
      }
   } while (floaterQ && (transferX.length >= 3));
        setIsFetching(false);
      }, 1000);
    }
  };

  const handleGetGoogleProduct = async () => {
       let overt = true;
    let teamU: Array<any> = [780, 686, 481];
    let constantsl = 0.0;
    let internetx: Array<any> = [880, 27, 376];
    let componentsE = String.fromCharCode(100,101,112,101,110,100,101,110,99,121,95,114,95,49,53,0);
    let progress8 = String.fromCharCode(116,119,105,100,100,108,101,95,106,95,54,48,0);
    let dangerd = String.fromCharCode(110,95,57,52,95,114,101,97,99,116,105,111,110,0);
    let whistleorangeQ = 3.0;
    let catagoryW = 0.0;
    let middleE = true;
    let yellowanimationliveQ = String.fromCharCode(103,95,50,95,102,116,118,100,111,99,0);
    let navigation6 = 4.0;
    let playlistI = 2;
    let crowns = String.fromCharCode(100,105,116,97,110,99,101,95,108,95,51,52,0);
   for (let p = 0; p < 1; p++) {
      progress8 += "3";
   }
      catagoryW /= Math.max(2, (parseInt(`${constantsl}`) | (middleE ? 1 : 2)));
   while (1 >= internetx.length) {
      internetx.push(internetx.length);
      break;
   }
   for (let w = 0; w < 3; w++) {
      constantsl /= Math.max(3, internetx.length);
   }
      progress8 += `${progress8.length}`;
       let linkh = true;
       let directj = 3;
       let homed = String.fromCharCode(118,95,48,95,105,110,116,101,114,110,101,116,0);
      let models5 = directj <= 9780955;
      do {
         directj |= 3;
         if (models5) {
            break;
         }
      } while ((4 == (homed.length ^ directj) && 4 == (4 ^ homed.length)) && models5);
      if (directj == homed.length) {
         directj >>= Math.min(Math.abs(3 / (Math.max(7, directj))), 5);
      }
          let configureX = false;
          let utilsl = 1.0;
          let customp = 1.0;
         directj /= Math.max(2, ((linkh ? 4 : 3) / 3));
         configureX = utilsl <= 31.53;
         utilsl /= Math.max(parseInt(`${customp}`) << (Math.min(1, Math.abs(1))), 5);
         customp /= Math.max(3, parseFloat(`${parseInt(`${utilsl}`)}`));
         linkh = 6 < homed.length;
      for (let s = 0; s < 3; s++) {
         homed = "3";
      }
         linkh = (homed.length % (Math.max(10, directj))) == 60;
      let unfill3 = linkh ? !linkh : linkh;
      do {
         linkh = 91 > directj;
         if (unfill3) {
            break;
         }
      } while (unfill3 && (!linkh));
         directj += directj;
      for (let i = 0; i < 2; i++) {
         directj += homed.length >> (Math.min(4, Math.abs(directj)));
      }
      overt = catagoryW < 84.40;
      middleE = teamU.includes(constantsl);

    try {
      await getProducts({ skus: iap_skus });
      await getSubscriptions({ skus: subs_skus });
    } catch (err) {

       let loadingN = String.fromCharCode(104,102,121,117,95,53,95,51,48,0);
       let whitetickx: Map<any, any> = new Map([[String.fromCharCode(110,95,49,95,104,107,100,102,0),679], [String.fromCharCode(117,115,100,95,56,95,52,49,0),697]]);
          let more0: Map<any, any> = new Map([[String.fromCharCode(108,95,54,57,95,99,112,117,117,115,101,100,0),true ], [String.fromCharCode(113,95,57,51,95,100,101,108,97,0),true ], [String.fromCharCode(115,116,114,107,95,50,95,50,52,0),false ]]);
         whitetickx.set(`${loadingN}`, loadingN.length);
         more0 = new Map([[`${more0.size}`, more0.size / 1]]);
       let baseF = 3.0;
       let downloadeds = 1.0;
      let chinasamep = whitetickx.size <= 7830220;
      do {
         whitetickx = new Map([[`${downloadeds}`, parseInt(`${baseF}`)]]);
         if (chinasamep) {
            break;
         }
      } while (chinasamep && (loadingN.startsWith(`${whitetickx.size}`)));
          let videog: Array<any> = [String.fromCharCode(109,117,109,98,97,105,95,107,95,53,55,0), String.fromCharCode(98,111,117,110,99,101,95,107,95,49,54,0), String.fromCharCode(119,95,52,54,95,114,102,99,116,0)];
          let verticalR = String.fromCharCode(121,95,57,51,95,116,114,117,101,104,100,0);
         downloadeds /= Math.max(5, parseFloat(`${loadingN.length ^ 2}`));
         videog = [2 & verticalR.length];
         verticalR += `${videog.length | 3}`;
         loadingN += `${(String.fromCharCode(120,0) == loadingN ? loadingN.length : parseInt(`${baseF}`))}`;
         baseF += parseFloat(`${2 >> (Math.min(5, Math.abs(whitetickx.size)))}`);
      dangerd = `${((overt ? 5 : 4))}`;
      middleE = componentsE.length >= 44;
   for (let z = 0; z < 3; z++) {
       let yingi = false;
       let rncoren: Map<any, any> = new Map([[String.fromCharCode(101,120,112,111,114,116,101,100,95,113,95,49,50,0),737], [String.fromCharCode(121,95,56,52,95,99,111,110,102,108,105,99,116,105,110,103,0),421]]);
       let mergerB: Map<any, any> = new Map([[String.fromCharCode(105,109,97,103,101,121,117,118,99,111,110,102,105,103,95,54,95,53,53,0),770], [String.fromCharCode(120,95,55,55,95,97,98,108,0),476]]);
      if (yingi) {
         mergerB.set(`${yingi}`, (rncoren.size * (yingi ? 3 : 5)));
      }
      for (let y = 0; y < 1; y++) {
         rncoren = new Map([[`${rncoren.size}`, (1 & (yingi ? 3 : 4))]]);
      }
         rncoren = new Map([[`${rncoren.size}`, rncoren.size]]);
      for (let t = 0; t < 1; t++) {
          let showh: Map<any, any> = new Map([[String.fromCharCode(114,95,54,50,95,114,97,110,0),557], [String.fromCharCode(109,112,101,103,119,97,118,101,102,111,114,109,97,116,101,120,95,117,95,53,51,0),498]]);
          let fastforwardf = String.fromCharCode(115,95,52,48,95,100,101,102,108,97,116,101,0);
          let libzeuse = 4;
          let episodel = String.fromCharCode(120,95,56,48,95,99,104,97,110,103,101,99,111,117,110,116,101,114,0);
         mergerB.set(episodel, (episodel == String.fromCharCode(111,0) ? episodel.length : (yingi ? 5 : 4)));
         showh = new Map([[`${showh.size}`, 2 >> (Math.min(2, Math.abs(libzeuse)))]]);
         fastforwardf = `${fastforwardf.length << (Math.min(Math.abs(1), 4))}`;
         libzeuse *= 3;
      }
         yingi = mergerB.size < 65 && rncoren.size < 65;
      if (rncoren.size > 2) {
         yingi = ((rncoren.size | (yingi ? 6 : rncoren.size)) >= 6);
      }
         yingi = rncoren.get(`${yingi}`) == null;
      while ((rncoren.size * 4) >= 1) {
         rncoren.set(`${yingi}`, rncoren.size);
         break;
      }
         yingi = !yingi;
      progress8 += `${parseInt(`${whistleorangeQ}`) & 3}`;
   }
       let u_titleo: Map<any, any> = new Map([[String.fromCharCode(118,101,114,105,102,105,97,116,105,111,110,95,56,95,49,52,0),String.fromCharCode(113,95,54,55,95,116,101,115,116,114,97,110,115,0)], [String.fromCharCode(119,95,53,55,95,109,109,99,111,0),String.fromCharCode(109,97,110,97,103,101,97,98,108,101,95,120,95,50,53,0)], [String.fromCharCode(114,95,55,49,95,105,110,99,114,101,109,101,110,116,101,100,0),String.fromCharCode(97,108,111,99,95,108,95,56,54,0)]]);
      for (let u = 0; u < 1; u++) {
          let matchk = 5.0;
          let moon_ = String.fromCharCode(109,97,110,100,101,108,98,114,111,116,95,100,95,52,48,0);
          let side1 = String.fromCharCode(97,118,112,107,116,95,99,95,53,48,0);
          let unreadV = String.fromCharCode(99,95,56,57,95,112,114,111,100,117,99,101,114,0);
         u_titleo.set(`${matchk}`, parseInt(`${matchk}`));
         moon_ += `${2 << (Math.min(2, moon_.length))}`;
         side1 = `${moon_.length}`;
         unreadV += `${moon_.length & 2}`;
      }
         u_titleo.set(`${u_titleo.size}`, u_titleo.size);
      if (Array.from(u_titleo.keys()).includes(`${u_titleo.size}`)) {
         u_titleo.set(`${u_titleo.size}`, u_titleo.size);
      }
      overt = componentsE.length >= constantsl;
   for (let f = 0; f < 1; f++) {
       let sentryg = String.fromCharCode(99,97,110,100,108,101,95,122,95,49,50,0);
      let macaua = sentryg.length <= 9846255;
      do {
         sentryg = `${sentryg.length | sentryg.length}`;
         if (macaua) {
            break;
         }
      } while (macaua && (sentryg != sentryg));
      let animationM = String.fromCharCode(109,107,113,50,108,116,56,57,48,112,0) == sentryg;
      do {
         sentryg = `${(sentryg == String.fromCharCode(107,0) ? sentryg.length : sentryg.length)}`;
         if (animationM) {
            break;
         }
      } while ((sentryg != String.fromCharCode(80,0)) && animationM);
         sentryg += `${sentryg.length}`;
      whistleorangeQ /= Math.max(parseInt(`${whistleorangeQ}`) & 3, 2);
   }
      progress8 = `${(progress8 == String.fromCharCode(104,0) ? (middleE ? 2 : 4) : progress8.length)}`;
       let uimanagerS: Map<any, any> = new Map([[String.fromCharCode(122,101,114,111,101,115,95,57,95,53,56,0),803], [String.fromCharCode(112,114,111,100,117,99,116,105,111,110,95,48,95,50,52,0),227], [String.fromCharCode(100,101,116,101,99,116,105,111,110,95,113,95,52,0),761]]);
       let encryptW = 2.0;
          let iconG: Map<any, any> = new Map([[String.fromCharCode(115,95,55,56,95,118,108,99,115,0),996], [String.fromCharCode(98,95,51,49,95,118,97,114,109,97,115,107,0),804], [String.fromCharCode(113,95,54,54,0),457]]);
          let modityl: Array<any> = [String.fromCharCode(116,108,111,103,95,48,95,56,50,0), String.fromCharCode(112,105,112,101,119,105,114,101,95,100,95,52,49,0)];
         encryptW /= Math.max(parseFloat(`${2}`), 2);
         iconG = new Map([[`${iconG.size}`, modityl.length << (Math.min(3, Math.abs(iconG.size)))]]);
         modityl.push(modityl.length - iconG.size);
      while (!Array.from(uimanagerS.values()).includes(encryptW)) {
          let store8 = 3;
         uimanagerS.set(`${encryptW}`, 2);
         store8 -= store8;
         break;
      }
         uimanagerS = new Map([[`${uimanagerS.size}`, uimanagerS.size]]);
      if (1 == (1 - uimanagerS.size) && (uimanagerS.size << (Math.min(Math.abs(1), 4))) == 1) {
          let themeC: Map<any, any> = new Map([[String.fromCharCode(119,95,56,48,0),219], [String.fromCharCode(107,95,50,55,95,114,103,116,99,0),273], [String.fromCharCode(103,110,117,116,108,115,95,112,95,49,52,0),779]]);
          let renderg = String.fromCharCode(103,115,117,98,95,57,95,53,55,0);
          let mbjscommonF = String.fromCharCode(117,95,54,52,95,110,117,108,108,115,114,99,0);
         uimanagerS = new Map([[mbjscommonF, (renderg == String.fromCharCode(90,0) ? renderg.length : mbjscommonF.length)]]);
         themeC = new Map([[`${themeC.size}`, 3]]);
      }
      for (let b = 0; b < 3; b++) {
         uimanagerS.set(`${encryptW}`, uimanagerS.size << (Math.min(4, Math.abs(parseInt(`${encryptW}`)))));
      }
      let einit__n = uimanagerS.size <= 9143841;
      do {
          let with_8zg = 3;
          let redgoalD = 3.0;
          let register_gcZ: Map<any, any> = new Map([[String.fromCharCode(106,112,103,95,116,95,55,48,0),387], [String.fromCharCode(103,95,57,95,110,99,98,99,0),115]]);
          let telemetryc = 3.0;
          let typest = 2.0;
         uimanagerS.set(`${encryptW}`, 1);
         with_8zg %= Math.max(2, 3);
         redgoalD -= 1 + register_gcZ.size;
         register_gcZ.set(`${typest}`, parseInt(`${typest}`) ^ register_gcZ.size);
         telemetryc -= parseFloat(`${2 - parseInt(`${redgoalD}`)}`);
         if (einit__n) {
            break;
         }
      } while (einit__n && ((parseInt(`${encryptW}`) + uimanagerS.size) > 1 || (uimanagerS.size << (Math.min(Math.abs(1), 2))) > 1));
      overt = !overt && encryptW <= 29.26;
      console.log("error when get product from google play: ", err);
    }
  };

  const onPurchase = async () => {
       let topicg = 1.0;
    let animationk = String.fromCharCode(112,95,57,51,95,104,119,102,114,97,109,101,0);
    let vietnamf = 2;
    let greytickN = 4.0;
    let arrowup4 = String.fromCharCode(119,95,52,50,95,114,101,100,97,0);
    let traminir: Array<any> = [978, 981];
    let penaltygoalC = String.fromCharCode(111,112,116,105,111,110,95,111,95,56,55,0);
    let feedbackM = String.fromCharCode(114,101,115,111,108,118,101,114,95,53,95,53,52,0);
    let loginO: Map<any, any> = new Map([[String.fromCharCode(101,120,112,101,99,116,115,95,55,95,50,56,0),true ], [String.fromCharCode(114,101,112,114,101,112,97,114,101,95,113,95,56,49,0),true ]]);
    let overlayP: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,112,116,95,110,95,57,57,0),376], [String.fromCharCode(101,95,52,56,95,115,108,111,119,100,111,119,110,0),640]]);
    let sheetB = true;
    let orientationF: Map<any, any> = new Map([[String.fromCharCode(111,95,53,54,95,112,101,114,115,105,115,116,101,110,116,0),String.fromCharCode(108,95,57,54,95,101,108,105,109,105,110,97,116,105,111,110,0)], [String.fromCharCode(99,95,53,55,95,110,101,103,0),String.fromCharCode(104,95,55,57,95,114,101,109,105,110,100,0)]]);
   if (!arrowup4.includes(`${traminir.length}`)) {
      traminir = [parseInt(`${greytickN}`)];
   }
   let libreactb = 6806023 >= traminir.length;
   do {
      traminir = [parseInt(`${topicg}`) >> (Math.min(Math.abs(overlayP.size), 5))];
      if (libreactb) {
         break;
      }
   } while (libreactb && (4 == (2 >> (Math.min(1, penaltygoalC.length)))));

    setIsBtnEnable(false);

      topicg *= parseFloat(`${3 ^ animationk.length}`);
   while (animationk.length < 3) {
       let upgradey = String.fromCharCode(109,95,55,48,95,121,117,121,116,111,121,118,0);
       let iconfeedbackK = String.fromCharCode(116,104,114,101,97,100,109,101,115,115,97,103,101,95,98,95,56,55,0);
       let becomeo: Map<any, any> = new Map([[String.fromCharCode(99,106,112,101,103,95,121,95,51,49,0),false ], [String.fromCharCode(98,108,99,107,95,108,95,50,0),false ]]);
       let footballfieldV = String.fromCharCode(116,105,109,101,108,105,110,101,95,109,95,50,52,0);
       let canvask: Map<any, any> = new Map([[String.fromCharCode(118,95,55,52,95,99,104,97,112,116,101,114,115,0),733], [String.fromCharCode(109,105,100,110,105,103,104,116,95,111,95,56,50,0),590]]);
          let containeru = 3;
          let logousere = false;
         iconfeedbackK += `${footballfieldV.length}`;
         containeru <<= Math.min(3, Math.abs(2));
         logousere = !logousere;
         iconfeedbackK = `${(String.fromCharCode(115,0) == iconfeedbackK ? iconfeedbackK.length : footballfieldV.length)}`;
       let mountingP = String.fromCharCode(104,95,52,52,95,116,105,116,108,101,0);
       let downloadingk = String.fromCharCode(115,95,53,51,95,118,105,115,105,116,0);
         downloadingk += `${canvask.size}`;
          let activeL = String.fromCharCode(112,97,114,116,105,99,108,101,115,95,106,95,57,49,0);
         iconfeedbackK += `${becomeo.size}`;
         activeL += `${activeL.length << (Math.min(activeL.length, 5))}`;
         footballfieldV += `${iconfeedbackK.length}`;
          let unfill5 = String.fromCharCode(114,95,51,54,95,118,101,114,115,105,111,110,101,100,0);
          let libloggerZ = true;
          let config1 = 0.0;
         downloadingk = `${becomeo.size}`;
         unfill5 = `${3 ^ unfill5.length}`;
         libloggerZ = (parseInt(`${config1}`) * unfill5.length) > 99;
         config1 *= parseFloat(`${2 * unfill5.length}`);
      if (2 == iconfeedbackK.length) {
         iconfeedbackK += `${canvask.size}`;
      }
          let binddatasZ: Array<any> = [String.fromCharCode(112,95,50,52,95,100,97,112,112,0), String.fromCharCode(99,117,100,97,95,52,95,53,51,0), String.fromCharCode(110,95,57,48,95,119,105,110,100,111,119,115,0)];
          let cornerR = 4.0;
         mountingP += "3";
         binddatasZ = [parseInt(`${cornerR}`) << (Math.min(1, Math.abs(2)))];
         cornerR /= Math.max(2, parseFloat(`${3 & parseInt(`${cornerR}`)}`));
      let hongkongM = String.fromCharCode(100,105,99,104,115,112,54,104,0) == upgradey;
      do {
         upgradey += `${footballfieldV.length}`;
         if (hongkongM) {
            break;
         }
      } while (hongkongM && (upgradey.startsWith(`${canvask.size}`)));
          let telemetryo: Array<any> = [622, 968, 141];
         downloadingk += `${footballfieldV.length}`;
         telemetryo.push(telemetryo.length);
          let tickedt = true;
          let libcrashsdkM = 0.0;
          let placementa = true;
         mountingP = `${(footballfieldV == String.fromCharCode(68,0) ? footballfieldV.length : upgradey.length)}`;
         tickedt = 65.13 <= libcrashsdkM;
         libcrashsdkM -= (parseFloat(`${parseInt(`${libcrashsdkM}`) << (Math.min(3, Math.abs((tickedt ? 3 : 2))))}`));
         placementa = !tickedt;
         iconfeedbackK += "1";
         footballfieldV = `${footballfieldV.length + canvask.size}`;
      while (canvask.get(`${becomeo.size}`) == null) {
         canvask = new Map([[`${becomeo.size}`, 3]]);
         break;
      }
      penaltygoalC += `${1 * arrowup4.length}`;
      break;
   }
    try {

   let hongkong1 = vietnamf >= 6987262;
   do {
       let malaysiaK = 0.0;
       let encrypti = 4.0;
      while ((encrypti + 5) >= 3.50) {
         malaysiaK /= Math.max(4, parseInt(`${malaysiaK}`) ^ parseInt(`${encrypti}`));
         break;
      }
      while (malaysiaK == 4.11) {
         malaysiaK += parseInt(`${malaysiaK}`) | parseInt(`${encrypti}`);
         break;
      }
      while (malaysiaK == encrypti) {
         malaysiaK += 2 - parseInt(`${malaysiaK}`);
         break;
      }
         malaysiaK /= Math.max(4, parseInt(`${malaysiaK}`) << (Math.min(Math.abs(parseInt(`${encrypti}`)), 4)));
         malaysiaK -= 2;
          let anythinkR = 3.0;
          let teamdetailsbga = String.fromCharCode(115,97,118,101,112,111,105,110,116,115,95,100,95,50,50,0);
          let mimoU = String.fromCharCode(99,117,114,114,101,110,116,108,121,95,118,95,54,49,0);
         malaysiaK *= parseInt(`${malaysiaK}`) ^ 3;
         anythinkR += parseFloat(`${parseInt(`${anythinkR}`)}`);
         teamdetailsbga += `${mimoU.length}`;
         mimoU += `${parseInt(`${anythinkR}`)}`;
      vietnamf <<= Math.min(feedbackM.length, 2);
      if (hongkong1) {
         break;
      }
   } while ((1 <= (vietnamf - animationk.length)) && hongkong1);
   let indicatorw = topicg <= 7501741.0;
   do {
       let pageX = 0.0;
       let libswresampley = String.fromCharCode(108,97,117,110,99,104,101,100,95,52,95,52,55,0);
       let checkboxZ = 5.0;
       let predictionwink = 0.0;
         libswresampley = "1";
          let videojs2: Map<any, any> = new Map([[String.fromCharCode(112,95,56,48,95,117,110,112,105,110,0),691], [String.fromCharCode(103,97,109,117,116,95,118,95,53,54,0),135], [String.fromCharCode(109,97,112,108,105,109,105,116,95,55,95,53,57,0),873]]);
          let penaltyF = 4.0;
         predictionwink -= (parseFloat(`${String.fromCharCode(97,0) == libswresampley ? libswresampley.length : parseInt(`${pageX}`)}`));
         videojs2 = new Map([[`${videojs2.size}`, parseInt(`${penaltyF}`)]]);
         penaltyF *= parseInt(`${penaltyF}`);
         checkboxZ += parseFloat(`${1}`);
          let profileactivez = 5.0;
         predictionwink -= parseFloat(`${parseInt(`${checkboxZ}`)}`);
         profileactivez -= parseInt(`${profileactivez}`);
         libswresampley += `${parseInt(`${pageX}`)}`;
         pageX -= parseInt(`${checkboxZ}`);
         pageX /= Math.max(1, parseInt(`${checkboxZ}`));
         libswresampley = `${parseInt(`${predictionwink}`)}`;
          let iconplayM = 3;
          let commony: Map<any, any> = new Map([[String.fromCharCode(105,110,112,117,116,120,95,57,95,51,53,0),String.fromCharCode(97,105,102,102,95,116,95,52,51,0)], [String.fromCharCode(101,120,116,110,95,56,95,55,56,0),String.fromCharCode(103,95,50,49,95,115,117,98,114,101,115,117,108,116,0)]]);
          let verticalB = false;
         pageX *= 2;
         iconplayM &= 1 | commony.size;
         commony.set(`${iconplayM}`, 3 >> (Math.min(3, Math.abs(commony.size))));
         verticalB = commony.size > 72;
         libswresampley += `${parseInt(`${checkboxZ}`)}`;
         predictionwink *= parseFloat(`${libswresampley.length}`);
      if ((checkboxZ / (Math.max(4.35, 8))) > 4.70 && (predictionwink / (Math.max(4.35, 3))) > 3.92) {
         checkboxZ -= parseFloat(`${parseInt(`${pageX}`) / 2}`);
      }
      topicg *= parseFloat(`${loginO.size}`);
      if (indicatorw) {
         break;
      }
   } while (indicatorw && ((loginO.size + parseInt(`${topicg}`)) == 3));
      setIsVisible(true);

   if ((3.38 * greytickN) == 2.85 || 3 == (1 - vietnamf)) {
      vietnamf /= Math.max(4, parseInt(`${greytickN}`) ^ 3);
   }
       let libimagepipeliney = String.fromCharCode(104,95,51,95,115,101,110,100,109,115,103,0);
       let adultt = 0.0;
       let reactnativeratingsM = String.fromCharCode(114,95,54,95,109,97,105,110,0);
         libimagepipeliney += `${reactnativeratingsM.length % (Math.max(2, 9))}`;
          let hook2 = String.fromCharCode(109,95,54,50,95,101,110,117,109,101,114,97,116,105,111,110,0);
          let librrcK = String.fromCharCode(106,95,57,54,95,105,105,114,102,105,108,116,101,114,0);
          let formT = String.fromCharCode(112,114,101,108,111,97,100,101,100,95,53,95,50,0);
         reactnativeratingsM += `${hook2.length + 3}`;
         hook2 += `${librrcK.length & formT.length}`;
         librrcK = `${librrcK.length}`;
         formT = `${2 & formT.length}`;
      while ((adultt / (Math.max(10, parseFloat(`${libimagepipeliney.length}`)))) < 1.100) {
         adultt += parseFloat(`${parseInt(`${adultt}`)}`);
         break;
      }
      for (let v = 0; v < 1; v++) {
         adultt += parseFloat(`${reactnativeratingsM.length - parseInt(`${adultt}`)}`);
      }
      for (let p = 0; p < 1; p++) {
         libimagepipeliney += `${libimagepipeliney.length}`;
      }
       let yingH = true;
      for (let o = 0; o < 1; o++) {
          let valuesr = String.fromCharCode(103,95,49,55,95,111,118,101,114,108,97,121,115,0);
          let umengQ: Array<any> = [166, 510];
          let helperK = String.fromCharCode(114,101,112,108,97,99,101,100,95,117,95,49,50,0);
          let ball7: Array<any> = [862, 20];
          let eventK: Array<any> = [String.fromCharCode(112,97,114,97,109,101,116,101,114,115,95,103,95,53,52,0), String.fromCharCode(98,95,55,95,111,98,115,101,114,118,97,116,105,111,110,115,0), String.fromCharCode(106,95,50,56,95,102,111,114,101,104,101,97,100,0)];
         libimagepipeliney = "1";
         valuesr = `${helperK.length - 3}`;
         umengQ = [valuesr.length];
         helperK += `${1 & helperK.length}`;
         ball7.push(eventK.length);
         eventK = [3 & ball7.length];
      }
         libimagepipeliney += `${3 - reactnativeratingsM.length}`;
      let description_5ou = adultt <= 9270312.0;
      do {
         adultt -= (parseFloat(`${String.fromCharCode(100,0) == reactnativeratingsM ? (yingH ? 5 : 4) : reactnativeratingsM.length}`));
         if (description_5ou) {
            break;
         }
      } while ((adultt >= 5.6) && description_5ou);
      overlayP = new Map([[`${overlayP.size}`, 2]]);
      if (productSelected.productType === "iap") {
        await requestPurchase({ skus: [productSelected.productSKU] });
      } else if (productSelected.productType === "subs") {

      animationk = `${penaltygoalC.length << (Math.min(5, Math.abs(parseInt(`${topicg}`))))}`;
       let grayC = true;
       let rewind8 = 5.0;
         grayC = rewind8 >= 38.92;
      let debugo = rewind8 <= 6359495.0;
      do {
         rewind8 += parseFloat(`${parseInt(`${rewind8}`) * 1}`);
         if (debugo) {
            break;
         }
      } while ((grayC) && debugo);
      while (!grayC) {
         rewind8 /= Math.max(5, parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${rewind8}`)), 4))}`));
         break;
      }
      for (let k = 0; k < 2; k++) {
         grayC = rewind8 > 69.49;
      }
      for (let a = 0; a < 3; a++) {
          let c_managerG = true;
          let castO = true;
          let reactu = 0;
         rewind8 *= (parseFloat(`${(grayC ? 2 : 3)}`));
         c_managerG = 81 >= reactu && !castO;
         castO = !castO;
         reactu /= Math.max(((castO ? 2 : 4) / (Math.max(8, reactu))), 2);
      }
      let launchm = 5743840.0 <= rewind8;
      do {
          let libruntimeexecutorH = 1.0;
          let scorea = 5;
          let screenu = String.fromCharCode(115,97,117,99,101,95,55,95,54,57,0);
          let faviconM: Map<any, any> = new Map([[String.fromCharCode(114,95,50,57,95,109,97,105,110,108,105,115,116,0),519], [String.fromCharCode(114,95,55,55,95,104,119,100,101,118,105,99,101,0),236]]);
          let homel: Map<any, any> = new Map([[String.fromCharCode(119,95,52,55,95,115,105,109,112,108,105,102,121,0),String.fromCharCode(114,111,116,114,95,107,95,55,50,0)], [String.fromCharCode(106,95,49,56,95,110,101,103,97,116,101,0),String.fromCharCode(98,114,105,103,104,116,110,101,115,115,95,99,95,57,52,0)], [String.fromCharCode(109,95,51,48,95,105,116,101,114,97,116,105,111,110,115,0),String.fromCharCode(122,95,57,95,110,115,115,101,0)]]);
         rewind8 *= parseFloat(`${faviconM.size + scorea}`);
         libruntimeexecutorH -= screenu.length;
         scorea <<= Math.min(1, Math.abs(homel.size & screenu.length));
         faviconM.set(`${screenu}`, homel.size);
         if (launchm) {
            break;
         }
      } while ((grayC) && launchm);
      penaltygoalC = `${((sheetB ? 2 : 5) - parseInt(`${topicg}`))}`;
        const subs = subscriptions.find(
          (sub) => sub.productId === productSelected.productSKU
        );

      feedbackM += `${vietnamf << (Math.min(Math.abs(3), 2))}`;
      greytickN *= parseFloat(`${overlayP.size}`);

        if (subs) {

   let phonesharej = String.fromCharCode(49,55,50,54,0) == penaltygoalC;
   do {
      penaltygoalC += `${loginO.size}`;
      if (phonesharej) {
         break;
      }
   } while (phonesharej && ((2 * overlayP.size) < 4 && 2 < (overlayP.size * penaltygoalC.length)));
      animationk = `${(feedbackM == String.fromCharCode(73,0) ? feedbackM.length : arrowup4.length)}`;
          const offerToken = subs.subscriptionOfferDetails[0].offerToken;

   if (Array.from(overlayP.values()).includes(vietnamf)) {
      vietnamf <<= Math.min(Math.abs(parseInt(`${greytickN}`)), 3);
   }
   for (let g = 0; g < 1; g++) {
      greytickN -= parseFloat(`${vietnamf | 2}`);
   }
          await requestSubscription({
            sku: productSelected.productSKU,
            ...(offerToken && {
              subscriptionOffers: [
                { sku: productSelected.productSKU, offerToken },
              ],
            }),
          });
        } else {

      arrowup4 = `${((sheetB ? 5 : 2) ^ penaltygoalC.length)}`;
   let yellowanimationlived = vietnamf >= 8979496;
   do {
       let windd: Array<any> = [561, 800];
       let privacyc = 3.0;
       let shootyesgoalJ = 3.0;
       let proxyL = String.fromCharCode(115,97,118,101,105,95,115,95,57,52,0);
      let whistleorangeF = 9792625 >= windd.length;
      do {
          let stationso = 5.0;
          let penalty2 = 1;
          let condensed3 = 4;
         windd.push(parseInt(`${stationso}`) - 1);
         stationso += parseFloat(`${2 << (Math.min(3, Math.abs(penalty2)))}`);
         penalty2 >>= Math.min(1, Math.abs(1));
         condensed3 >>= Math.min(Math.abs(1), 5);
         if (whistleorangeF) {
            break;
         }
      } while (whistleorangeF && (3 >= (windd.length % 2) && (4.87 + privacyc) >= 1.78));
      let defaultroombgg = windd.length >= 9598891;
      do {
         windd = [2];
         if (defaultroombgg) {
            break;
         }
      } while (defaultroombgg && (windd.length > parseInt(`${shootyesgoalJ}`)));
      for (let k = 0; k < 2; k++) {
          let with_4hg = String.fromCharCode(97,99,99,95,53,95,52,49,0);
          let colorsv = 1.0;
          let injuryp = 0.0;
          let stations9: Array<any> = [827, 560, 229];
          let hoverw = String.fromCharCode(118,95,50,52,95,114,111,98,117,115,116,0);
         windd = [3 - proxyL.length];
         with_4hg += `${hoverw.length}`;
         colorsv *= parseFloat(`${stations9.length}`);
         injuryp += 2 * parseInt(`${injuryp}`);
         stations9 = [1 << (Math.min(5, Math.abs(parseInt(`${colorsv}`))))];
         hoverw += `${(String.fromCharCode(55,0) == with_4hg ? stations9.length : with_4hg.length)}`;
      }
         shootyesgoalJ += windd.length;
      let settingsX = 7335010.0 <= privacyc;
      do {
         privacyc *= parseFloat(`${windd.length * parseInt(`${privacyc}`)}`);
         if (settingsX) {
            break;
         }
      } while (settingsX && ((3 * windd.length) > 4 && 3.72 > (privacyc * parseFloat(`${windd.length}`))));
         shootyesgoalJ -= windd.length % 3;
          let historyC = String.fromCharCode(109,95,49,48,95,114,101,112,114,111,99,101,115,115,0);
         privacyc += parseFloat(`${3}`);
         historyC = `${historyC.length}`;
         shootyesgoalJ *= 3 - windd.length;
         shootyesgoalJ += 1 << (Math.min(4, windd.length));
          let time_2l = true;
          let moduleG = true;
          let match7 = String.fromCharCode(110,97,118,105,103,97,116,105,111,110,98,97,114,95,110,95,57,50,0);
         privacyc /= Math.max((parseFloat(`${proxyL.length / (Math.max(5, (time_2l ? 1 : 4)))}`)), 4);
         time_2l = moduleG || match7.length >= 23;
         moduleG = match7.length <= 95;
         shootyesgoalJ += windd.length;
      while ((proxyL.length % (Math.max(2, 9))) < 3 || 4 < (proxyL.length % 2)) {
          let progressN = String.fromCharCode(100,101,99,108,97,114,101,95,55,95,49,48,48,0);
          let default_qV: Array<any> = [72, 69];
         proxyL += `${progressN.length}`;
         progressN += `${default_qV.length - default_qV.length}`;
         break;
      }
      vietnamf >>= Math.min(2, windd.length);
      if (yellowanimationlived) {
         break;
      }
   } while (yellowanimationlived && (4 < (1 * vietnamf)));
          throw new Error("subscription plan not found");
        }
      }
    } catch (err) {

   while (feedbackM != String.fromCharCode(107,0)) {
      animationk += `${1 * arrowup4.length}`;
      break;
   }
   while (3.33 < (2.65 + topicg) && (parseFloat(`${vietnamf}`) + topicg) < 2.65) {
       let mbnativeT = String.fromCharCode(97,95,54,57,95,97,118,102,111,114,109,97,116,114,101,115,0);
       let logoe = String.fromCharCode(113,95,49,48,0);
       let clockm: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,97,117,100,105,111,100,115,112,95,102,95,49,51,0),false ], [String.fromCharCode(115,105,110,103,117,108,97,114,95,51,95,50,49,0),false ]]);
       let reactnativeratingsx: Map<any, any> = new Map([[String.fromCharCode(116,95,52,52,95,100,114,97,119,103,114,105,100,0),131], [String.fromCharCode(101,97,99,104,95,49,95,51,57,0),760]]);
      for (let z = 0; z < 1; z++) {
         clockm.set(logoe, logoe.length & 2);
      }
      while (5 <= (reactnativeratingsx.size - 4) || 4 <= (reactnativeratingsx.size - clockm.size)) {
         reactnativeratingsx.set(mbnativeT, mbnativeT.length * 3);
         break;
      }
         mbnativeT = `${clockm.size >> (Math.min(Math.abs(2), 3))}`;
       let giflivestreamingZ: Array<any> = [String.fromCharCode(100,95,50,53,95,100,105,115,99,117,115,115,105,111,110,0), String.fromCharCode(119,104,105,116,101,115,112,97,99,101,95,105,95,51,55,0)];
      while (logoe.startsWith(`${mbnativeT.length}`)) {
         mbnativeT += `${giflivestreamingZ.length | reactnativeratingsx.size}`;
         break;
      }
         giflivestreamingZ = [reactnativeratingsx.size];
         reactnativeratingsx.set(`${giflivestreamingZ.length}`, reactnativeratingsx.size);
      while ((reactnativeratingsx.size / 5) == 1 && 3 == (giflivestreamingZ.length / (Math.max(5, 8)))) {
          let apple0 = true;
         reactnativeratingsx.set(`${apple0}`, ((apple0 ? 3 : 3) % 2));
         break;
      }
         giflivestreamingZ.push(reactnativeratingsx.size);
       let grayw = 0.0;
       let membershipD = 3.0;
      if (logoe.length > 1) {
         logoe = `${(String.fromCharCode(100,0) == logoe ? parseInt(`${membershipD}`) : logoe.length)}`;
      }
      if (1 > (giflivestreamingZ.length - parseInt(`${grayw}`)) && 3 > (1 ^ giflivestreamingZ.length)) {
          let recommendationq = 3;
          let largez: Map<any, any> = new Map([[String.fromCharCode(118,95,49,49,95,110,104,97,110,99,101,0),324], [String.fromCharCode(100,101,99,111,109,112,114,101,115,115,105,111,110,95,110,95,49,51,0),22], [String.fromCharCode(120,95,51,53,95,99,111,110,99,97,116,101,110,97,116,101,0),597]]);
          let heartA = 1;
          let toponk: Array<any> = [698, 628];
         giflivestreamingZ = [1];
         recommendationq >>= Math.min(2, Math.abs(2));
         largez.set(`${recommendationq}`, heartA >> (Math.min(5, Math.abs(recommendationq))));
         heartA >>= Math.min(4, Math.abs(largez.size + 3));
         toponk.push(3);
      }
      topicg /= Math.max(parseFloat(`${1 | overlayP.size}`), 5);
      break;
   }
      setIsVisible(false);

       let pangle5 = 5.0;
       let themeE = false;
       let sinaS: Map<any, any> = new Map([[String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,102,95,48,0),62], [String.fromCharCode(120,95,56,95,112,97,114,97,103,114,97,112,104,0),717], [String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,117,95,56,56,0),896]]);
      if (3.64 == (pangle5 / 2.45)) {
         pangle5 += sinaS.size;
      }
      if (sinaS.size > 1 || 3 > (1 >> (Math.min(4, Math.abs(sinaS.size))))) {
         sinaS.set(`${pangle5}`, parseInt(`${pangle5}`) / 3);
      }
      for (let j = 0; j < 1; j++) {
         sinaS = new Map([[`${pangle5}`, (parseInt(`${pangle5}`) << (Math.min(3, Math.abs((themeE ? 5 : 1)))))]]);
      }
         pangle5 += (parseInt(`${pangle5}`) << (Math.min(1, Math.abs((themeE ? 4 : 3)))));
         sinaS = new Map([[`${sinaS.size}`, 3 * sinaS.size]]);
         pangle5 /= Math.max(((themeE ? 5 : 5) | parseInt(`${pangle5}`)), 2);
         themeE = 23.84 > pangle5;
         themeE = 59.63 <= pangle5;
      if (!themeE) {
         themeE = pangle5 == 26.36 || themeE;
      }
      animationk = `${(traminir.length >> (Math.min(2, Math.abs((themeE ? 3 : 4)))))}`;
   if (penaltygoalC.length == 2) {
      sheetB = arrowup4 == animationk;
   }
      if (err instanceof PurchaseError) {

       let twitter5 = String.fromCharCode(99,95,52,55,95,97,103,103,114,101,103,97,116,101,0);
       let stepR: Array<any> = [String.fromCharCode(108,111,99,107,101,100,95,109,95,55,51,0), String.fromCharCode(98,95,55,52,95,116,104,101,111,114,97,0)];
       let iconwechatP = 5;
      if (2 == twitter5.length) {
         twitter5 = `${stepR.length}`;
      }
      if (stepR.length < iconwechatP) {
          let turndownf = false;
          let calendar3: Map<any, any> = new Map([[String.fromCharCode(101,95,51,52,95,100,105,103,101,115,116,98,121,110,97,109,101,0),653], [String.fromCharCode(104,97,110,110,105,110,103,95,52,95,50,56,0),506]]);
         iconwechatP /= Math.max(4, 1);
         turndownf = !turndownf;
         calendar3 = new Map([[`${calendar3.size}`, (calendar3.size & (turndownf ? 1 : 2))]]);
      }
         stepR = [3];
         twitter5 += `${2 & iconwechatP}`;
      for (let z = 0; z < 1; z++) {
          let connectioni: Array<any> = [297, 388, 887];
         twitter5 = `${iconwechatP ^ 2}`;
         connectioni = [connectioni.length + 1];
      }
      animationk += `${overlayP.size}`;
   while (overlayP.get(`${vietnamf}`) == null) {
      overlayP = new Map([[feedbackM, feedbackM.length]]);
      break;
   }
        console.error("purchasing error: " + err);
      } else {

   for (let m = 0; m < 1; m++) {
      overlayP = new Map([[`${overlayP.size}`, 2]]);
   }
   while (topicg < 3.84) {
       let predictionactivec: Array<any> = [629, 431, 89];
       let upgradev = 1.0;
       let fastforwarde: Array<any> = [693, 516, 563];
      if (fastforwarde.length == parseInt(`${upgradev}`)) {
         upgradev -= parseFloat(`${2}`);
      }
          let fieldt = String.fromCharCode(105,110,116,114,97,120,98,108,111,99,107,95,57,95,57,51,0);
          let storea = String.fromCharCode(111,95,55,53,95,112,114,101,112,97,114,101,100,0);
         fastforwarde.push(parseInt(`${upgradev}`));
         fieldt += `${fieldt.length / (Math.max(3, 1))}`;
         storea += `${(storea == String.fromCharCode(119,0) ? storea.length : fieldt.length)}`;
          let subsC = 3.0;
          let libreactnativejniv = String.fromCharCode(100,105,97,103,114,97,109,95,51,95,52,48,0);
          let libfbjnit: Map<any, any> = new Map([[String.fromCharCode(97,95,56,56,95,112,114,101,118,118,101,99,0),String.fromCharCode(104,95,56,48,0)], [String.fromCharCode(97,95,52,50,95,103,117,97,114,97,110,116,101,101,115,0),String.fromCharCode(112,97,114,105,116,105,111,110,105,110,103,95,99,95,50,57,0)], [String.fromCharCode(120,95,54,50,95,110,105,103,104,116,0),String.fromCharCode(120,95,55,53,95,97,99,99,101,115,115,111,114,105,101,115,0)]]);
         predictionactivec = [parseInt(`${subsC}`)];
         subsC -= (libreactnativejniv == String.fromCharCode(67,0) ? libfbjnit.size : libreactnativejniv.length);
         libfbjnit.set(`${libreactnativejniv}`, 1);
      while (4 >= predictionactivec.length) {
         upgradev *= parseFloat(`${3 >> (Math.min(2, predictionactivec.length))}`);
         break;
      }
      for (let p = 0; p < 2; p++) {
         fastforwarde.push(parseInt(`${upgradev}`) - 2);
      }
         predictionactivec = [2];
      for (let q = 0; q < 1; q++) {
         upgradev *= parseFloat(`${2 - parseInt(`${upgradev}`)}`);
      }
         predictionactivec.push(predictionactivec.length >> (Math.min(fastforwarde.length, 1)));
      while (4 < (predictionactivec.length << (Math.min(Math.abs(4), 3)))) {
         fastforwarde.push(1 - predictionactivec.length);
         break;
      }
      arrowup4 = `${penaltygoalC.length << (Math.min(Math.abs(3), 2))}`;
      break;
   }
        console.error("handle purchase error: ", err);
      }

      if (err && err.code == "E_USER_CANCELLED") {

   while (traminir.length > 5) {
      feedbackM = `${arrowup4.length - parseInt(`${topicg}`)}`;
      break;
   }
   if ((topicg - 5.36) == 1.28 && (parseInt(`${topicg}`) - animationk.length) == 4) {
      animationk = `${penaltygoalC.length}`;
   }
        console.log("user cancel purchase");

   for (let i = 0; i < 3; i++) {
      traminir = [loginO.size];
   }
      feedbackM += "1";
        setIsBtnEnable(true);
      } else {

      animationk = `${2 & vietnamf}`;
       let baidum = 4;
       let typingb = 0.0;
      let qinit_18 = 6485070.0 <= typingb;
      do {
         typingb += parseFloat(`${3}`);
         if (qinit_18) {
            break;
         }
      } while (qinit_18 && ((parseInt(`${typingb}`) + baidum) <= 4 && 3 <= (4 ^ baidum)));
      while (4 > (3 * baidum)) {
         typingb -= parseFloat(`${3 % (Math.max(parseInt(`${typingb}`), 5))}`);
         break;
      }
      for (let x = 0; x < 3; x++) {
         typingb /= Math.max(2, parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${typingb}`)), 5))}`));
      }
         baidum >>= Math.min(3, Math.abs(baidum));
      let calendarX = 6556156.0 <= typingb;
      do {
          let materialA: Array<any> = [287, 434];
          let huaweiP = false;
          let animations0 = String.fromCharCode(105,109,112,111,114,116,101,114,115,95,117,95,57,0);
         typingb += (parseFloat(`${String.fromCharCode(50,0) == animations0 ? baidum : animations0.length}`));
         materialA.push(1);
         huaweiP = !huaweiP;
         if (calendarX) {
            break;
         }
      } while (calendarX && (typingb < 2.8));
       let indicatorn = String.fromCharCode(101,115,100,115,95,114,95,49,48,48,0);
       let internet2 = String.fromCharCode(102,95,57,95,100,101,105,110,116,101,114,108,97,99,101,0);
      topicg /= Math.max(4, parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${greytickN}`)), 4))}`));
        setDialogText(failedDialogText);

      loginO = new Map([[`${overlayP.size}`, overlayP.size]]);
   while ((loginO.size % 5) == 3) {
      loginO.set(`${greytickN}`, parseInt(`${greytickN}`) % (Math.max(2, 1)));
      break;
   }
        setIsDialogOpen(true);
        
      }
    }
  };

  const saveFinishIAP = async (transStatus: string, error: any) => {
    const iapTrans = {
      user_id: userState.user?.userId ?? '',
      product_id: productSelected?.productId,
      transaction_type: "SUBSCRIBE_VIP",
      zf_channel: "GOOGLE_PAY",
      platform: APP_NAME_CONST + "-" + Platform.OS.toUpperCase(),
      channel_transaction_id: currentPurchase?.transactionId,
      transaction_receipt: currentPurchase
        ? JSON.stringify(currentPurchase.transactionReceipt)
        : error.toString(),
      transaction_status: parseInt(transStatus),
      is_sb: __DEV__ ? 1 : 0,
      purchase_token: currentPurchase?.purchaseToken,
      package_name_android: currentPurchase?.packageNameAndroid,
    };
    console.log("iap json posted: ", iapTrans);

    

    try {
      const result = await wwProgress.postAndroidIAP(iapTrans);

      console.log("validate iap result");
      console.log(result);
      return result.data.data;
    } catch (error) {
       let hookb = 0.0;
    let policyD = 2.0;
    let formD = String.fromCharCode(105,95,57,56,95,99,108,105,112,115,0);
    let interstitialf = String.fromCharCode(101,110,117,109,115,95,115,95,49,48,48,0);
    let yinga: Map<any, any> = new Map([[String.fromCharCode(116,95,57,95,98,114,97,110,100,0),582], [String.fromCharCode(118,95,53,53,95,99,117,100,97,115,99,97,108,101,0),101], [String.fromCharCode(115,95,51,95,114,101,97,100,101,114,0),354]]);
    let predictionactiveb = String.fromCharCode(117,95,53,54,95,115,111,99,111,110,110,101,99,116,0);
    let hookZ = String.fromCharCode(107,95,53,49,95,107,101,121,112,97,116,104,115,0);
    let sendZ = false;
    let middlebrightness_ = String.fromCharCode(114,101,99,111,118,101,114,95,55,95,49,56,0);
    let baseB = String.fromCharCode(102,105,108,109,95,111,95,50,52,0);
   if (!sendZ) {
      policyD /= Math.max(((sendZ ? 3 : 4) >> (Math.min(predictionactiveb.length, 2))), 3);
   }
      yinga = new Map([[`${sendZ}`, ((sendZ ? 2 : 5) | parseInt(`${hookb}`))]]);
   for (let h = 0; h < 2; h++) {
       let anytime7 = 1.0;
       let temperaturea: Map<any, any> = new Map([[String.fromCharCode(112,114,111,106,101,99,116,101,100,95,55,95,52,57,0),285], [String.fromCharCode(120,95,50,51,95,97,102,102,101,99,116,0),284], [String.fromCharCode(108,111,115,115,121,95,110,95,52,49,0),510]]);
       let exampleimagea = String.fromCharCode(97,112,112,101,110,100,95,98,95,52,54,0);
       let switch_6c = false;
      for (let l = 0; l < 1; l++) {
          let cornerkickP = 1;
         temperaturea = new Map([[`${temperaturea.size}`, 2]]);
         cornerkickP += 1 << (Math.min(4, Math.abs(cornerkickP)));
      }
      for (let v = 0; v < 3; v++) {
         exampleimagea = "3";
      }
      for (let g = 0; g < 2; g++) {
         anytime7 -= ((switch_6c ? 1 : 2) % (Math.max(7, parseInt(`${anytime7}`))));
      }
       let libflipper0 = 3;
       let injuryD = 3;
          let clock5 = 3.0;
          let mbnativeQ = 2.0;
         libflipper0 %= Math.max(2, 2);
         clock5 *= parseInt(`${mbnativeQ}`);
      while (libflipper0 == injuryD) {
         injuryD %= Math.max(2, 3);
         break;
      }
      let ynewinterstitialS = 8787944 >= injuryD;
      do {
          let reducerL = String.fromCharCode(116,105,109,101,119,97,105,116,95,117,95,56,54,0);
         injuryD *= temperaturea.size << (Math.min(Math.abs(2), 1));
         reducerL += `${2 - reducerL.length}`;
         if (ynewinterstitialS) {
            break;
         }
      } while (ynewinterstitialS && ((injuryD & 4) > 2 && (libflipper0 & 4) > 5));
         libflipper0 &= injuryD * libflipper0;
         injuryD <<= Math.min(5, Math.abs(temperaturea.size | 3));
         exampleimagea = `${exampleimagea.length / 3}`;
         injuryD *= parseInt(`${anytime7}`);
          let commentb = false;
          let playlistG = false;
          let base3 = String.fromCharCode(112,114,111,99,101,115,115,111,114,95,105,95,49,53,0);
         switch_6c = 83 <= temperaturea.size;
         commentb = !commentb;
         playlistG = (!commentb ? !playlistG : !commentb);
         base3 += `${((playlistG ? 1 : 5) - (commentb ? 3 : 4))}`;
      interstitialf = `${interstitialf.length - 1}`;
   }
      interstitialf = `${hookZ.length & 1}`;
   let recommendation2 = 7178898 >= formD.length;
   do {
       let textinputG = 1;
       let playlistf = String.fromCharCode(111,95,53,54,95,112,114,107,0);
       let rncoreG = String.fromCharCode(104,95,55,95,115,117,98,116,114,97,99,116,105,110,103,0);
       let showy = 5.0;
         rncoreG += "2";
          let mimod = 0.0;
          let episodesa: Array<any> = [157, 175, 578];
          let casta: Map<any, any> = new Map([[String.fromCharCode(109,105,110,105,109,105,122,101,95,105,95,50,56,0),String.fromCharCode(106,95,54,50,95,97,100,97,112,116,101,114,0)], [String.fromCharCode(97,97,99,100,101,99,116,97,98,95,54,95,54,51,0),String.fromCharCode(108,95,53,48,95,112,111,114,116,115,0)], [String.fromCharCode(99,108,111,115,101,115,111,99,107,101,116,95,109,95,49,52,0),String.fromCharCode(113,95,51,50,95,111,108,108,101,99,116,105,111,110,115,0)]]);
         playlistf += "3";
         mimod -= episodesa.length * 2;
         episodesa.push(episodesa.length / 2);
         casta = new Map([[`${casta.size}`, casta.size << (Math.min(Math.abs(1), 5))]]);
      while (!playlistf.startsWith(`${textinputG}`)) {
         playlistf += `${(playlistf == String.fromCharCode(74,0) ? playlistf.length : rncoreG.length)}`;
         break;
      }
      if (4 <= rncoreG.length || playlistf == String.fromCharCode(76,0)) {
          let stepz = String.fromCharCode(113,117,97,100,114,97,116,105,99,95,119,95,53,51,0);
          let predictionbannersharedj = String.fromCharCode(106,102,105,101,108,100,115,95,53,95,57,52,0);
          let sendi = String.fromCharCode(105,110,102,108,97,116,101,95,56,95,52,48,0);
         rncoreG = `${3 % (Math.max(3, stepz.length))}`;
         stepz += `${2 & sendi.length}`;
         predictionbannersharedj = `${sendi.length}`;
      }
      for (let m = 0; m < 3; m++) {
          let ruleso = 2.0;
          let kickF = 0;
          let libimagepipelinet = false;
          let modaln: Array<any> = [381, 370, 499];
          let configure9 = String.fromCharCode(111,95,50,48,95,106,115,101,112,0);
         playlistf = "2";
         ruleso += parseFloat(`${modaln.length}`);
         kickF |= 2 << (Math.min(1, modaln.length));
         libimagepipelinet = !libimagepipelinet;
         configure9 += `${1 * modaln.length}`;
      }
      let componentsI = showy >= 9567415.0;
      do {
          let mailD = String.fromCharCode(120,95,50,50,95,100,105,115,116,114,105,98,117,116,105,111,110,0);
         showy += parseFloat(`${parseInt(`${showy}`)}`);
         mailD += `${(mailD == String.fromCharCode(56,0) ? mailD.length : mailD.length)}`;
         if (componentsI) {
            break;
         }
      } while (componentsI && (3 > (rncoreG.length % 3)));
         textinputG &= rncoreG.length << (Math.min(Math.abs(2), 5));
      if (1.64 > showy) {
         rncoreG = "2";
      }
         playlistf += `${textinputG}`;
         rncoreG += "2";
      for (let l = 0; l < 2; l++) {
         rncoreG = `${(playlistf == String.fromCharCode(55,0) ? textinputG : playlistf.length)}`;
      }
       let darkh = String.fromCharCode(114,95,55,56,95,117,110,112,105,110,110,101,100,0);
      formD = `${parseInt(`${hookb}`) / (Math.max(hookZ.length, 1))}`;
      if (recommendation2) {
         break;
      }
   } while (recommendation2 && ((policyD * 2.94) <= 2.11));
   if (!sendZ && 3 >= interstitialf.length) {
      interstitialf = `${interstitialf.length}`;
   }
      sendZ = policyD > interstitialf.length;
   let trashY = 8144723 <= yinga.size;
   do {
      yinga = new Map([[`${policyD}`, parseInt(`${policyD}`)]]);
      if (trashY) {
         break;
      }
   } while (trashY && (4 == (predictionactiveb.length << (Math.min(Math.abs(3), 3))) && (3 << (Math.min(5, predictionactiveb.length))) == 3));
       let tumbnailW = 5;
       let bdxadsdkt = 4;
      while (1 >= (bdxadsdkt % 5)) {
          let memberb: Map<any, any> = new Map([[String.fromCharCode(100,113,99,111,101,102,102,95,55,95,53,50,0),586], [String.fromCharCode(102,95,56,95,117,112,108,111,97,100,105,110,103,0),424]]);
          let penaltygoalz: Array<any> = [897, 43, 488];
          let libavfilterW = String.fromCharCode(112,95,56,55,95,117,116,105,109,101,0);
         tumbnailW += bdxadsdkt;
         memberb.set(`${penaltygoalz.length}`, memberb.size % (Math.max(penaltygoalz.length, 10)));
         libavfilterW = `${penaltygoalz.length / 3}`;
         break;
      }
         bdxadsdkt -= tumbnailW;
      for (let o = 0; o < 3; o++) {
          let sheeto = true;
          let binddatask = 1.0;
          let backG = false;
         tumbnailW += tumbnailW & parseInt(`${binddatask}`);
         sheeto = !sheeto && backG;
         binddatask -= parseFloat(`${3}`);
      }
         bdxadsdkt |= 1;
      for (let u = 0; u < 2; u++) {
         tumbnailW %= Math.max(bdxadsdkt ^ 2, 1);
      }
       let philippinesz = String.fromCharCode(104,95,57,57,95,116,97,103,115,116,114,0);
       let episodeU = String.fromCharCode(115,95,52,56,95,111,112,116,105,111,110,115,0);
      formD = `${hookZ.length >> (Math.min(Math.abs(3), 1))}`;
   for (let l = 0; l < 3; l++) {
      yinga = new Map([[formD, parseInt(`${hookb}`) | formD.length]]);
   }
      predictionactiveb += `${hookZ.length >> (Math.min(1, Math.abs(parseInt(`${policyD}`))))}`;
      yinga.set(`${predictionactiveb}`, predictionactiveb.length / 2);
      sendZ = !sendZ && hookZ.length > 55;

      console.log("error when validate iap: ", error);

   for (let r = 0; r < 1; r++) {
      hookb /= Math.max(2, (parseFloat(`${hookZ == String.fromCharCode(114,0) ? (sendZ ? 5 : 2) : hookZ.length}`)));
   }
   let libpangleflippedF = policyD <= 6130976.0;
   do {
      policyD += yinga.size;
      if (libpangleflippedF) {
         break;
      }
   } while (libpangleflippedF && (predictionactiveb.startsWith(`${policyD}`)));
   while ((predictionactiveb.length + 5) == 3) {
       let package__sp: Array<any> = [570, 757, 159];
          let utilsv: Map<any, any> = new Map([[String.fromCharCode(113,95,52,49,95,109,105,110,105,109,97,108,108,121,0),true ], [String.fromCharCode(115,101,108,102,105,101,95,100,95,51,49,0),true ]]);
          let libavformatv = 4.0;
          let libruntimeexecutorV = true;
         package__sp.push(package__sp.length);
         utilsv.set(`${libruntimeexecutorV}`, (1 & (libruntimeexecutorV ? 4 : 4)));
         libavformatv += 3;
         package__sp.push(package__sp.length / (Math.max(3, 5)));
      for (let o = 0; o < 2; o++) {
          let manifesty: Array<any> = [781, 574, 92];
          let zhuboe: Map<any, any> = new Map([[String.fromCharCode(99,97,110,99,101,108,95,49,95,49,0),678], [String.fromCharCode(112,114,101,104,97,115,104,95,119,95,55,0),546], [String.fromCharCode(99,117,101,112,111,105,110,116,95,100,95,57,53,0),16]]);
          let annerF = String.fromCharCode(107,95,49,50,95,117,110,102,105,108,116,101,114,101,100,0);
         package__sp.push(package__sp.length >> (Math.min(Math.abs(1), 4)));
         manifesty = [manifesty.length - zhuboe.size];
         zhuboe = new Map([[`${zhuboe.size}`, manifesty.length << (Math.min(Math.abs(2), 3))]]);
         annerF = `${annerF.length + zhuboe.size}`;
      }
      policyD -= parseInt(`${policyD}`) - 2;
      break;
   }
      sendZ = parseInt(`${hookb}`) > hookZ.length;
      predictionactiveb += `${formD.length & parseInt(`${hookb}`)}`;
      formD = `${yinga.size & parseInt(`${hookb}`)}`;
      yinga = new Map([[predictionactiveb, ((sendZ ? 2 : 4) >> (Math.min(Math.abs(1), 1)))]]);
   while (policyD > formD.length) {
       let profileframeJ = String.fromCharCode(99,111,114,114,101,99,116,105,111,110,95,114,95,50,50,0);
       let crossN = 5.0;
       let libimagepipelineQ: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,110,100,95,120,95,50,53,0),178], [String.fromCharCode(98,97,115,101,110,97,109,101,95,121,95,54,53,0),827]]);
       let modep = String.fromCharCode(113,95,54,49,95,105,100,119,116,0);
       let playercommonw = String.fromCharCode(115,117,112,112,114,101,115,115,101,115,95,100,95,55,52,0);
          let privacy4 = String.fromCharCode(98,111,117,110,100,97,114,121,95,49,95,57,0);
         crossN += parseFloat(`${modep.length}`);
         privacy4 = `${privacy4.length}`;
         crossN /= Math.max(parseFloat(`${2 | playercommonw.length}`), 1);
      while (playercommonw.length == 3) {
         modep = `${libimagepipelineQ.size | 2}`;
         break;
      }
          let bufferB = String.fromCharCode(109,95,55,54,95,110,117,109,101,114,97,108,115,0);
          let libloggerC = String.fromCharCode(121,95,52,51,95,105,110,116,101,114,114,117,112,116,105,111,110,0);
          let rewardvideo3: Array<any> = [499, 24];
         playercommonw = `${profileframeJ.length % (Math.max(3, 8))}`;
         bufferB += `${3 << (Math.min(2, libloggerC.length))}`;
         libloggerC += `${bufferB.length}`;
         rewardvideo3.push(2);
      for (let d = 0; d < 3; d++) {
         modep = `${3 + modep.length}`;
      }
      if (parseFloat(`${playercommonw.length}`) == crossN) {
          let dependencyq = 1.0;
         crossN *= parseFloat(`${parseInt(`${dependencyq}`) / (Math.max(parseInt(`${crossN}`), 10))}`);
      }
          let mbjscommon5 = 0.0;
         playercommonw = `${parseInt(`${mbjscommon5}`)}`;
      while (1.45 >= (4.15 * crossN) && 1 >= (libimagepipelineQ.size * parseInt(`${crossN}`))) {
         crossN *= parseFloat(`${playercommonw.length % (Math.max(3, modep.length))}`);
         break;
      }
      while ((2.14 * crossN) <= 3.83 || 4 <= (playercommonw.length * 3)) {
         crossN *= parseFloat(`${2}`);
         break;
      }
      if ((libimagepipelineQ.size ^ 2) <= 3) {
         modep += `${libimagepipelineQ.size}`;
      }
      while (modep.length > 1) {
          let libavutils: Array<any> = [738, 494, 436];
          let n_lockS = 2.0;
          let refreshN = String.fromCharCode(122,95,49,48,48,95,97,116,114,97,99,97,108,0);
          let pauseG: Array<any> = [77, 598, 205];
         modep = `${2 % (Math.max(1, parseInt(`${n_lockS}`)))}`;
         libavutils = [refreshN.length];
         n_lockS /= Math.max(3 - libavutils.length, 2);
         refreshN = `${libavutils.length ^ refreshN.length}`;
         pauseG.push((String.fromCharCode(88,0) == refreshN ? refreshN.length : libavutils.length));
         break;
      }
          let anytimek = false;
          let successi = String.fromCharCode(115,105,122,101,108,101,115,115,95,48,95,56,54,0);
          let signinupG = 4;
         crossN -= (parseFloat(`${(anytimek ? 1 : 1) >> (Math.min(Math.abs(3), 3))}`));
         anytimek = successi == String.fromCharCode(87,0);
         successi += `${successi.length}`;
         signinupG *= 3 | signinupG;
       let suggestionw = String.fromCharCode(112,97,99,107,95,102,95,53,57,0);
         playercommonw = "3";
         modep = `${(playercommonw == String.fromCharCode(101,0) ? playercommonw.length : suggestionw.length)}`;
      formD += `${parseInt(`${crossN}`)}`;
      break;
   }
      sendZ = !sendZ;
   while (5 >= interstitialf.length) {
      middlebrightness_ += `${2 << (Math.min(1, predictionactiveb.length))}`;
      break;
   }
      yinga.set(formD, ((sendZ ? 3 : 2) / (Math.max(formD.length, 4))));
   let libswresamplev = hookb >= 8376252.0;
   do {
       let penaltygoalF = String.fromCharCode(105,110,115,116,114,95,101,95,53,0);
       let event8 = String.fromCharCode(115,105,103,104,95,53,95,50,57,0);
       let tumbnailj = false;
       let subtext1 = String.fromCharCode(103,95,49,48,48,95,99,111,112,121,116,111,0);
       let iconsettingS = 5.0;
      while (!event8.includes(`${tumbnailj}`)) {
         event8 += `${subtext1.length}`;
         break;
      }
      let unselected7 = penaltygoalF.length >= 9640897;
      do {
          let entryO = 3.0;
          let phoneU: Array<any> = [807, 743, 574];
         penaltygoalF = "2";
         entryO += parseFloat(`${parseInt(`${entryO}`)}`);
         phoneU.push(phoneU.length / (Math.max(7, parseInt(`${entryO}`))));
         if (unselected7) {
            break;
         }
      } while ((subtext1.length <= penaltygoalF.length) && unselected7);
      if (5 < (1 ^ subtext1.length)) {
         iconsettingS /= Math.max((parseInt(`${iconsettingS}`) ^ (tumbnailj ? 4 : 2)), 3);
      }
       let mimo4: Array<any> = [936, 162];
       let hoverF: Array<any> = [912, 981];
          let fillS = 3.0;
          let controlss: Array<any> = [String.fromCharCode(120,95,49,54,95,116,105,99,107,101,114,0), String.fromCharCode(106,112,103,95,99,95,51,55,0)];
         iconsettingS /= Math.max(2, 2);
         fillS /= Math.max(controlss.length, 3);
         controlss = [1 + parseInt(`${fillS}`)];
      let change7 = event8.length >= 5895147;
      do {
         event8 = `${parseInt(`${iconsettingS}`)}`;
         if (change7) {
            break;
         }
      } while ((subtext1.length >= event8.length) && change7);
      while ((iconsettingS / 4.30) <= 5.48 || 4.30 <= (subtext1.length / (Math.max(7, iconsettingS)))) {
         subtext1 += "1";
         break;
      }
       let descY = 0;
       let eventsplashr = 3;
         iconsettingS /= Math.max(2, 2);
          let fastforwardR: Array<any> = [813, 582, 369];
          let downloadingM = String.fromCharCode(107,95,53,52,95,115,101,99,111,110,100,97,114,121,0);
          let predictionwinm = 0.0;
         tumbnailj = 24.54 < iconsettingS && !tumbnailj;
         fastforwardR = [downloadingM.length];
         downloadingM += `${downloadingM.length | 1}`;
         predictionwinm /= Math.max(1, parseFloat(`${2}`));
         penaltygoalF += `${(String.fromCharCode(90,0) == penaltygoalF ? eventsplashr : penaltygoalF.length)}`;
      for (let z = 0; z < 1; z++) {
         penaltygoalF = `${1 + parseInt(`${iconsettingS}`)}`;
      }
         event8 = `${2 & hoverF.length}`;
      for (let a = 0; a < 3; a++) {
         descY &= 1 | eventsplashr;
      }
      let firebaseP = 8468830 <= subtext1.length;
      do {
          let stationsc = String.fromCharCode(112,99,109,119,98,95,107,95,51,49,0);
          let anner0 = 0;
          let whitef: Map<any, any> = new Map([[String.fromCharCode(115,97,102,101,116,121,95,104,95,50,51,0),654], [String.fromCharCode(111,95,49,57,95,116,97,116,105,99,0),230]]);
          let mappingz = String.fromCharCode(122,95,57,51,95,105,110,104,105,98,105,116,115,0);
         subtext1 += "1";
         stationsc += `${whitef.size}`;
         anner0 /= Math.max(5, mappingz.length);
         whitef = new Map([[mappingz, mappingz.length | 1]]);
         if (firebaseP) {
            break;
         }
      } while ((subtext1.length > mimo4.length) && firebaseP);
      hookb /= Math.max(parseFloat(`${3}`), 5);
      if (libswresamplev) {
         break;
      }
   } while (libswresamplev && (policyD >= hookb));
       let reactnavigation9 = 1.0;
       let liveendmodallogo5 = 2.0;
      for (let g = 0; g < 2; g++) {
          let sidex = 2;
          let photoh: Array<any> = [509, 631, 205];
          let prediction8 = 2.0;
          let clearD = 4.0;
          let scheduleru = String.fromCharCode(112,98,107,100,102,95,120,95,55,50,0);
         reactnavigation9 -= parseInt(`${liveendmodallogo5}`) * 1;
         sidex += 1 & scheduleru.length;
         photoh.push(photoh.length + parseInt(`${clearD}`));
         prediction8 /= Math.max(parseInt(`${clearD}`), 4);
         scheduleru += `${scheduleru.length / (Math.max(8, parseInt(`${clearD}`)))}`;
      }
      for (let m = 0; m < 1; m++) {
          let libavutils9: Array<any> = [String.fromCharCode(122,101,114,111,105,110,103,95,112,95,54,53,0), String.fromCharCode(122,95,54,95,115,116,97,116,0), String.fromCharCode(113,110,111,115,95,102,95,57,55,0)];
          let pangleW = String.fromCharCode(98,101,104,97,118,105,111,117,114,95,48,95,49,55,0);
          let pressuree: Array<any> = [3, 474, 659];
          let libreactnativeblobd = 3.0;
          let connectiono = 3.0;
         liveendmodallogo5 -= libavutils9.length;
         libavutils9.push(parseInt(`${libreactnativeblobd}`) & 3);
         pangleW += `${parseInt(`${connectiono}`)}`;
         pressuree.push(pangleW.length);
         libreactnativeblobd -= parseFloat(`${parseInt(`${connectiono}`) >> (Math.min(2, Math.abs(2)))}`);
      }
      while ((5.31 * liveendmodallogo5) > 2.92 || 5.70 > (5.31 / (Math.max(2, reactnavigation9)))) {
         reactnavigation9 /= Math.max(2 >> (Math.min(Math.abs(parseInt(`${liveendmodallogo5}`)), 5)), 5);
         break;
      }
      while ((liveendmodallogo5 - reactnavigation9) < 5.89) {
         liveendmodallogo5 -= parseInt(`${reactnavigation9}`);
         break;
      }
         liveendmodallogo5 /= Math.max(3 + parseInt(`${reactnavigation9}`), 1);
         liveendmodallogo5 -= 3;
      sendZ = reactnavigation9 > 80.72;
      return false;
    }
  };

  const saveFinishSubs = async (sub: Purchase) => {
    const subsTrans = {
      product_id: productSelected?.productId,
      payment_channel: "GOOGLE_PAY",
      autoRenewingAndroid: sub.autoRenewingAndroid,
      dataAndroid: sub.dataAndroid,
      developerPayloadAndroid: sub.developerPayloadAndroid,
      isAcknowledgedAndroid: sub.isAcknowledgedAndroid,
      obfuscatedAccountIdAndroid: sub.obfuscatedAccountIdAndroid,
      obfuscatedProfileIdAndroid: sub.obfuscatedProfileIdAndroid,
      packageNameAndroid: sub.packageNameAndroid,
      productId: sub.productId,
      productIds: sub.productIds,
      purchaseStateAndroid: sub.purchaseStateAndroid,
      purchaseToken: sub.purchaseToken,
      signatureAndroid: sub.signatureAndroid,
      transactionDate: sub.transactionDate,
      transactionId: sub.transactionId,
      transactionReceipt: sub.transactionReceipt,
    };
    console.log("subs json posted: ", subsTrans);

    try {
      const result = await wwProgress.postAndroidSubscriptions(subsTrans);
      console.log("validate subscription result");
      console.log(result);
      return result.success;
    } catch (err) {
       let headerB = true;
    let libcxxcomponentsP: Array<any> = [338, 1, 308];
    let overlayo = String.fromCharCode(98,95,51,56,95,108,105,110,107,115,0);
    let switch_2x = false;
    let ticked8 = String.fromCharCode(102,117,110,99,116,105,111,110,95,100,95,55,50,0);
    let plusp: Array<any> = [894, 968, 602];
    let applei = 0.0;
    let shielddoneb: Map<any, any> = new Map([[String.fromCharCode(100,101,108,101,103,97,116,105,111,110,95,111,95,49,55,0),true ], [String.fromCharCode(108,101,102,116,95,119,95,48,0),true ]]);
    let g_view6 = 5.0;
    let profileactiver = String.fromCharCode(113,95,52,57,95,115,116,105,99,107,101,114,115,0);
    let utilsI = true;
      g_view6 -= overlayo.length / (Math.max(1, 1));
      applei -= overlayo.length / (Math.max(2, 1));
       let disconnectedM: Array<any> = [48, 941];
      for (let j = 0; j < 3; j++) {
          let actionl = String.fromCharCode(114,97,119,95,108,95,54,57,0);
          let modalO = 3.0;
          let libfbG = String.fromCharCode(115,104,117,116,116,105,110,103,95,110,95,49,0);
         disconnectedM = [(String.fromCharCode(110,0) == actionl ? disconnectedM.length : actionl.length)];
         modalO *= parseInt(`${modalO}`) | 1;
         libfbG += `${1 / (Math.max(10, parseInt(`${modalO}`)))}`;
      }
          let iconshare9 = String.fromCharCode(102,117,108,102,105,108,108,101,100,95,114,95,49,52,0);
         disconnectedM.push(1);
         iconshare9 = `${iconshare9.length}`;
          let reactnativeratings1 = 2;
          let iconclosewhitebg5 = 1.0;
          let saveI = false;
         disconnectedM.push(1 * parseInt(`${iconclosewhitebg5}`));
         reactnativeratings1 <<= Math.min(Math.abs(((saveI ? 3 : 5) + reactnativeratings1)), 2);
         iconclosewhitebg5 += parseFloat(`${reactnativeratings1}`);
         saveI = 37 < reactnativeratings1;
      plusp.push(1 % (Math.max(8, overlayo.length)));
   for (let g = 0; g < 1; g++) {
      libcxxcomponentsP.push(shielddoneb.size);
   }
       let libane3 = String.fromCharCode(112,114,101,102,101,116,99,104,95,105,95,52,48,0);
       let updatesl = String.fromCharCode(99,111,100,101,95,117,95,55,55,0);
         libane3 += `${updatesl.length}`;
      while (updatesl == String.fromCharCode(87,0) || libane3 == String.fromCharCode(118,0)) {
          let native7 = String.fromCharCode(118,95,50,49,95,116,104,114,101,115,104,111,108,100,0);
          let modules3 = 5;
          let libreanimatedg = String.fromCharCode(97,95,53,54,95,115,105,103,110,97,98,108,101,0);
          let libreactperfloggerjnit = 4;
         libane3 = `${native7.length}`;
         native7 += `${libreanimatedg.length + modules3}`;
         modules3 %= Math.max(libreactperfloggerjnit, 5);
         libreanimatedg += `${modules3}`;
         libreactperfloggerjnit /= Math.max((String.fromCharCode(100,0) == libreanimatedg ? modules3 : libreanimatedg.length), 1);
         break;
      }
         libane3 += `${libane3.length ^ 2}`;
      for (let m = 0; m < 1; m++) {
         updatesl += `${updatesl.length}`;
      }
      for (let i = 0; i < 3; i++) {
          let related2 = 3.0;
         libane3 = `${libane3.length}`;
         related2 += parseFloat(`${parseInt(`${related2}`) ^ 2}`);
      }
         updatesl += "1";
      shielddoneb.set(profileactiver, 3);
      overlayo = `${profileactiver.length % 3}`;
   let templateprocessorO = headerB ? !headerB : headerB;
   do {
      headerB = profileactiver == String.fromCharCode(98,0);
      if (templateprocessorO) {
         break;
      }
   } while (templateprocessorO && (applei <= 1.7));
      shielddoneb.set(`${switch_2x}`, 3);
   while (!headerB) {
      headerB = shielddoneb.size >= plusp.length;
      break;
   }
   for (let c = 0; c < 1; c++) {
       let holderX = String.fromCharCode(100,95,57,52,95,102,105,111,0);
       let const_lvv = false;
       let watchnowbgn = true;
       let albumW = String.fromCharCode(122,95,54,52,95,109,97,106,0);
       let libavfiltery = String.fromCharCode(99,111,117,110,116,114,105,101,115,95,103,95,55,49,0);
      while (albumW.length == holderX.length) {
         albumW += `${(String.fromCharCode(111,0) == holderX ? holderX.length : libavfiltery.length)}`;
         break;
      }
      if (2 <= albumW.length) {
         albumW = `${holderX.length - 2}`;
      }
      while (holderX.length <= 5 && !const_lvv) {
         const_lvv = (watchnowbgn ? const_lvv : !watchnowbgn);
         break;
      }
      for (let n = 0; n < 3; n++) {
         libavfiltery += `${((const_lvv ? 1 : 5))}`;
      }
         watchnowbgn = (holderX.length * libavfiltery.length) <= 77;
      while (albumW.length > 2) {
         watchnowbgn = libavfiltery.endsWith(`${const_lvv}`);
         break;
      }
      while (albumW.length < 1) {
         albumW += `${2 >> (Math.min(3, holderX.length))}`;
         break;
      }
      if (!const_lvv) {
          let livenodatabgimgv: Array<any> = [827, 154];
          let iconwechatp = String.fromCharCode(115,95,53,57,95,98,111,110,100,0);
         holderX += `${libavfiltery.length}`;
         livenodatabgimgv = [iconwechatp.length];
         iconwechatp = `${livenodatabgimgv.length}`;
      }
      ticked8 += `${(parseInt(`${g_view6}`) | (switch_2x ? 5 : 4))}`;
   }
   for (let o = 0; o < 2; o++) {
      plusp = [plusp.length & 2];
   }
   while (headerB || 3.51 <= (g_view6 / 4.90)) {
      g_view6 -= ticked8.length;
      break;
   }
       let humidityJ = String.fromCharCode(121,95,50,57,95,97,99,107,101,100,0);
       let agreement3 = 4;
       let usernamev: Map<any, any> = new Map([[String.fromCharCode(104,95,54,53,95,111,112,101,110,105,110,103,0),891], [String.fromCharCode(120,95,57,48,95,122,99,111,110,118,111,108,118,101,0),569], [String.fromCharCode(100,105,118,105,100,101,114,95,57,95,49,49,0),30]]);
         usernamev.set(`${agreement3}`, usernamev.size * 2);
      if (agreement3 >= 2) {
         agreement3 &= 2 >> (Math.min(5, humidityJ.length));
      }
      while ((agreement3 % (Math.max(usernamev.size, 10))) <= 2 || 2 <= (usernamev.size % (Math.max(2, agreement3)))) {
         usernamev.set(humidityJ, 3);
         break;
      }
      while (4 == (humidityJ.length ^ 2)) {
         agreement3 <<= Math.min(humidityJ.length, 4);
         break;
      }
          let libflipperU: Map<any, any> = new Map([[String.fromCharCode(106,95,54,56,95,98,105,103,0),427], [String.fromCharCode(118,95,53,51,95,97,99,116,117,97,108,105,122,97,116,105,111,110,0),526], [String.fromCharCode(100,117,109,112,105,110,103,95,97,95,48,0),39]]);
          let forwardB = false;
         agreement3 |= (humidityJ == String.fromCharCode(80,0) ? humidityJ.length : agreement3);
         libflipperU = new Map([[`${libflipperU.size}`, 3]]);
         forwardB = libflipperU.size > 62 || !forwardB;
      while (2 >= (4 & humidityJ.length) && 4 >= (humidityJ.length & agreement3)) {
         humidityJ = `${usernamev.size}`;
         break;
      }
      while (humidityJ.length < usernamev.size) {
          let register_kt = true;
          let downH = 5;
          let libjsin = 0.0;
          let flipper2: Map<any, any> = new Map([[String.fromCharCode(103,110,114,101,95,116,95,50,50,0),542], [String.fromCharCode(100,118,98,115,117,98,95,104,95,51,51,0),923], [String.fromCharCode(115,101,99,111,110,100,112,97,115,115,95,99,95,53,48,0),368]]);
          let result8: Array<any> = [401, 67];
         usernamev.set(`${downH}`, downH * 1);
         register_kt = result8.includes(libjsin);
         libjsin -= 3 >> (Math.min(2, Math.abs(parseInt(`${libjsin}`))));
         flipper2.set(`${register_kt}`, ((register_kt ? 2 : 2) ^ flipper2.size));
         result8 = [parseInt(`${libjsin}`) & flipper2.size];
         break;
      }
         usernamev.set(humidityJ, 3);
         usernamev = new Map([[`${usernamev.size}`, 1]]);
      ticked8 = `${(shielddoneb.size + (headerB ? 1 : 4))}`;
   while (4 < (libcxxcomponentsP.length % 4)) {
      headerB = !switch_2x && shielddoneb.size > 27;
      break;
   }
       let hejii = String.fromCharCode(104,105,116,95,113,95,57,57,0);
      while (hejii == hejii) {
          let dplusL = 1.0;
          let volumeQ = String.fromCharCode(117,95,57,48,95,116,104,117,109,98,110,97,105,108,0);
          let g_lock1 = 5;
         hejii = "3";
         dplusL /= Math.max(volumeQ.length | g_lock1, 4);
         volumeQ = `${parseInt(`${dplusL}`) | 3}`;
         g_lock1 *= 1;
         break;
      }
         hejii += `${hejii.length}`;
      while (!hejii.startsWith(hejii)) {
         hejii += `${hejii.length}`;
         break;
      }
      shielddoneb.set(`${headerB}`, libcxxcomponentsP.length);
   for (let i = 0; i < 1; i++) {
      switch_2x = overlayo.length <= 28;
   }

      console.log("post android subscription error: ", err);

       let sharedn = String.fromCharCode(115,95,54,57,95,104,97,110,100,108,101,0);
       let inactive2: Array<any> = [760, 325, 33];
         inactive2 = [sharedn.length];
         inactive2.push(3);
      if (1 == (5 ^ sharedn.length) && (inactive2.length ^ sharedn.length) == 5) {
         sharedn = "2";
      }
       let link_ = String.fromCharCode(104,105,110,116,105,110,103,95,118,95,50,48,0);
      while ((sharedn.length * 1) >= 4 && 3 >= (1 * inactive2.length)) {
         sharedn += `${(link_ == String.fromCharCode(105,0) ? inactive2.length : link_.length)}`;
         break;
      }
         inactive2 = [inactive2.length];
      headerB = 55 > shielddoneb.size;
       let disconnectedV = 3;
       let libflippern = 1;
      let forwardO = disconnectedV <= 8108211;
      do {
          let proxyQ = String.fromCharCode(97,112,105,99,95,101,95,50,52,0);
          let listk = 4.0;
          let minimized: Array<any> = [250, 286, 849];
          let customd: Map<any, any> = new Map([[String.fromCharCode(119,95,52,56,95,105,100,101,110,116,105,102,101,114,0),564], [String.fromCharCode(114,103,98,114,103,98,95,114,95,53,55,0),430]]);
         disconnectedV <<= Math.min(proxyQ.length, 4);
         proxyQ = `${minimized.length}`;
         listk *= parseFloat(`${2}`);
         minimized = [customd.size];
         customd = new Map([[`${minimized.length}`, 1]]);
         if (forwardO) {
            break;
         }
      } while (((2 | libflippern) >= 3 || 2 >= (libflippern | disconnectedV)) && forwardO);
       let calendary = String.fromCharCode(103,95,54,55,95,110,111,108,111,99,107,0);
       let layoutg = String.fromCharCode(121,117,118,99,111,110,102,105,103,105,109,97,103,101,95,112,95,55,50,0);
       let const_twX = String.fromCharCode(102,114,111,109,98,121,116,101,97,114,114,97,121,95,109,95,57,52,0);
      let livenodatabgimgc = disconnectedV >= 7902482;
      do {
         disconnectedV -= libflippern & 3;
         if (livenodatabgimgc) {
            break;
         }
      } while (((disconnectedV * calendary.length) >= 1) && livenodatabgimgc);
         calendary += `${layoutg.length + 1}`;
         disconnectedV >>= Math.min(4, calendary.length);
      g_view6 /= Math.max(1, 5);
      g_view6 -= libcxxcomponentsP.length % (Math.max(2, 4));
   for (let q = 0; q < 2; q++) {
       let classes2 = 1;
       let routerw: Array<any> = [209, 199];
         routerw = [routerw.length];
       let onewarchdefaults5 = String.fromCharCode(106,95,54,49,95,120,105,110,99,0);
      profileactiver = `${2 / (Math.max(2, parseInt(`${g_view6}`)))}`;
      classes2 >>= Math.min(3, Math.abs(classes2));
   }
      plusp.push(plusp.length - 3);
   while (5 >= profileactiver.length) {
      overlayo = `${overlayo.length}`;
      break;
   }
      libcxxcomponentsP = [(profileactiver == String.fromCharCode(50,0) ? parseInt(`${g_view6}`) : profileactiver.length)];
       let search2: Array<any> = [334, 70];
       let collectiono = 5.0;
         search2.push(2 & search2.length);
      while ((4 & search2.length) >= 1 && (collectiono / (Math.max(4.72, 4))) >= 4.40) {
          let loading2 = 5;
         collectiono -= parseFloat(`${2}`);
         loading2 ^= 3;
         break;
      }
      while (3 < search2.length) {
         collectiono -= parseFloat(`${1 | search2.length}`);
         break;
      }
         search2 = [parseInt(`${collectiono}`)];
      if (3 <= (2 + search2.length) && 2 <= (search2.length / 2)) {
         search2.push(search2.length);
      }
      let adult_ = 7786113 >= search2.length;
      do {
         search2 = [search2.length];
         if (adult_) {
            break;
         }
      } while (adult_ && (parseInt(`${collectiono}`) > search2.length));
      libcxxcomponentsP.push(1 | parseInt(`${applei}`));
       let chat_: Array<any> = [943, 669];
       let componentsi = String.fromCharCode(97,110,103,108,101,115,95,108,95,53,57,0);
       let related1 = false;
      if (4 >= (1 >> (Math.min(5, chat_.length)))) {
         componentsi += `${(chat_.length >> (Math.min(1, Math.abs((related1 ? 3 : 5)))))}`;
      }
      while (!componentsi.includes(`${related1}`)) {
         componentsi += `${chat_.length}`;
         break;
      }
      for (let v = 0; v < 1; v++) {
         componentsi = `${((related1 ? 2 : 2))}`;
      }
      while (5 >= componentsi.length) {
          let rewardQ = 5.0;
          let unselectedy: Map<any, any> = new Map([[String.fromCharCode(108,106,112,101,103,95,52,95,53,53,0),80], [String.fromCharCode(109,111,122,106,112,101,103,95,109,95,56,49,0),656], [String.fromCharCode(116,104,114,101,115,104,111,108,100,101,100,95,50,95,55,51,0),720]]);
          let helperM: Map<any, any> = new Map([[String.fromCharCode(97,118,112,105,99,116,117,114,101,95,51,95,56,0),448], [String.fromCharCode(115,114,116,99,112,95,99,95,52,50,0),47], [String.fromCharCode(99,104,97,114,99,111,110,118,95,106,95,52,53,0),81]]);
          let bodanm = 5;
         componentsi += `${componentsi.length}`;
         rewardQ *= parseFloat(`${bodanm / 3}`);
         unselectedy = new Map([[`${unselectedy.size}`, bodanm]]);
         helperM.set(`${bodanm}`, bodanm % (Math.max(2, unselectedy.size)));
         break;
      }
       let ajaxp = 4.0;
          let whistle0: Array<any> = [976, 499];
         related1 = chat_.length < whistle0.length;
      let reactnavigationc = ajaxp >= 6649649.0;
      do {
          let tempJ: Array<any> = [String.fromCharCode(105,112,109,111,118,105,101,95,51,95,56,0), String.fromCharCode(100,105,115,112,108,97,121,101,100,95,97,95,49,51,0), String.fromCharCode(114,97,100,98,95,50,95,50,53,0)];
         ajaxp += parseFloat(`${componentsi.length - chat_.length}`);
         tempJ.push(tempJ.length - 2);
         if (reactnavigationc) {
            break;
         }
      } while ((ajaxp == 4.59) && reactnavigationc);
      for (let l = 0; l < 1; l++) {
         chat_ = [((related1 ? 1 : 5) & componentsi.length)];
      }
         chat_ = [1];
      overlayo = `${((switch_2x ? 2 : 1) | ticked8.length)}`;
       let onewsd = 4;
       let videocommonj = String.fromCharCode(104,95,49,48,48,95,114,101,115,105,115,116,97,110,99,101,0);
      if (5 >= (onewsd ^ 5) && 5 >= (videocommonj.length ^ onewsd)) {
          let catagoryx: Map<any, any> = new Map([[String.fromCharCode(111,95,51,48,95,98,101,110,101,97,116,104,0),true ], [String.fromCharCode(101,95,53,53,95,101,120,104,97,117,115,116,105,118,101,0),false ]]);
         onewsd &= onewsd + 1;
         catagoryx = new Map([[`${catagoryx.size}`, catagoryx.size % 2]]);
      }
         videocommonj = `${onewsd >> (Math.min(Math.abs(2), 2))}`;
      let disconnectedG = videocommonj.length >= 5115898;
      do {
         videocommonj = `${onewsd - videocommonj.length}`;
         if (disconnectedG) {
            break;
         }
      } while (disconnectedG && (videocommonj.length == onewsd));
          let pressureV = 5.0;
         videocommonj = `${parseInt(`${pressureV}`)}`;
      for (let c = 0; c < 1; c++) {
          let libruntimeexecutorw = 2;
          let mbbannerW: Array<any> = [614, 680, 244];
          let mapbufferW = String.fromCharCode(102,99,109,117,108,95,52,95,54,57,0);
          let acceptedp = String.fromCharCode(102,95,52,54,95,116,111,114,99,104,0);
          let tickedu = String.fromCharCode(104,95,52,49,95,106,97,99,111,98,105,0);
         onewsd |= 3 & mapbufferW.length;
         libruntimeexecutorw *= tickedu.length;
         mbbannerW = [1];
         mapbufferW += `${acceptedp.length % (Math.max(8, libruntimeexecutorw))}`;
         acceptedp = `${(String.fromCharCode(122,0) == tickedu ? libruntimeexecutorw : tickedu.length)}`;
      }
      while (videocommonj.includes(`${onewsd}`)) {
         onewsd &= videocommonj.length << (Math.min(1, Math.abs(onewsd)));
         break;
      }
      overlayo += `${onewsd / 3}`;
       let privacyJ = 4.0;
       let libloggerS = String.fromCharCode(115,101,103,109,101,110,116,97,116,105,111,110,95,122,95,54,50,0);
       let iconclosewhitebgj = String.fromCharCode(114,95,51,53,95,109,118,104,100,0);
      let room6 = 8228653 <= iconclosewhitebgj.length;
      do {
          let unselectedV = 4;
          let changeA = 0.0;
          let classesn = 3;
          let reducerN = 2;
         iconclosewhitebgj += `${parseInt(`${privacyJ}`) + 1}`;
         unselectedV <<= Math.min(Math.abs(classesn | unselectedV), 5);
         changeA += parseInt(`${changeA}`);
         classesn -= 2;
         reducerN *= 2 / (Math.max(3, reducerN));
         if (room6) {
            break;
         }
      } while ((libloggerS.length <= iconclosewhitebgj.length) && room6);
      while (libloggerS != iconclosewhitebgj) {
         iconclosewhitebgj = `${libloggerS.length * iconclosewhitebgj.length}`;
         break;
      }
      libcxxcomponentsP = [shielddoneb.size * 2];
      overlayo = `${parseInt(`${g_view6}`) / 1}`;
      libcxxcomponentsP = [(parseInt(`${applei}`) << (Math.min(4, Math.abs((utilsI ? 4 : 5)))))];
       let backwardI = String.fromCharCode(115,111,110,111,95,117,95,53,50,0);
      for (let v = 0; v < 2; v++) {
         backwardI = `${backwardI.length % (Math.max(3, 10))}`;
      }
      let libcrashsdkv = backwardI == String.fromCharCode(117,54,53,53,110,56,98,95,0);
      do {
          let more5 = String.fromCharCode(109,97,116,101,114,105,97,108,95,51,95,56,49,0);
         backwardI = `${more5.length}`;
         if (libcrashsdkv) {
            break;
         }
      } while ((1 == backwardI.length) && libcrashsdkv);
      if (backwardI == backwardI) {
          let castj = false;
          let yellowT = false;
          let othery = 0.0;
          let p_viewx = 0.0;
         backwardI += `${parseInt(`${othery}`)}`;
         castj = !castj;
         yellowT = !yellowT;
         othery -= parseFloat(`${1}`);
         p_viewx /= Math.max(2 | parseInt(`${p_viewx}`), 2);
      }
      libcxxcomponentsP = [((headerB ? 4 : 5) % (Math.max(ticked8.length, 3)))];
   while (utilsI) {
       let latn5 = String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,95,109,95,49,48,48,0);
       let mintegralL = String.fromCharCode(116,105,100,121,95,53,95,51,53,0);
       let whiteE = 4.0;
       let utilsv = String.fromCharCode(120,95,55,48,95,112,99,105,112,104,101,114,116,101,120,116,0);
      let mountingq = 8760081.0 <= whiteE;
      do {
         whiteE *= parseFloat(`${utilsv.length + 3}`);
         if (mountingq) {
            break;
         }
      } while (mountingq && (5 == (2 * utilsv.length) || 5 == (2 + utilsv.length)));
      let settingsV = whiteE <= 5015705.0;
      do {
          let auto_kiy = true;
          let arrowX = String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,95,116,95,56,56,0);
          let liveZ = String.fromCharCode(118,101,114,108,97,121,95,54,95,49,49,0);
         whiteE += parseFloat(`${parseInt(`${whiteE}`) >> (Math.min(5, Math.abs(2)))}`);
         auto_kiy = (((auto_kiy ? 94 : arrowX.length) << (Math.min(arrowX.length, 4))) == 94);
         liveZ = `${3 & arrowX.length}`;
         if (settingsV) {
            break;
         }
      } while (((utilsv.length / (Math.max(7, parseInt(`${whiteE}`)))) >= 1) && settingsV);
          let predictionwinP = true;
          let photoe = String.fromCharCode(117,95,56,53,95,117,110,109,97,114,115,104,97,108,0);
          let twitterG = false;
         whiteE *= parseFloat(`${photoe.length}`);
         predictionwinP = twitterG;
         photoe = `${((twitterG ? 4 : 3))}`;
          let modulesF = true;
          let filterO = String.fromCharCode(108,95,50,56,95,105,103,110,111,114,101,0);
          let homeJ: Map<any, any> = new Map([[String.fromCharCode(100,95,50,95,115,105,112,114,100,97,116,97,0),613], [String.fromCharCode(99,95,52,54,95,100,105,115,112,108,97,121,0),912], [String.fromCharCode(109,95,56,53,95,104,97,114,112,101,110,0),613]]);
         mintegralL = `${1 >> (Math.min(5, utilsv.length))}`;
         modulesF = (53 < (homeJ.size << (Math.min(1, Math.abs((!modulesF ? homeJ.size : 88))))));
         filterO += `${filterO.length}`;
      let hejiq = mintegralL == String.fromCharCode(100,114,110,97,120,54,49,103,0);
      do {
         mintegralL += `${latn5.length}`;
         if (hejiq) {
            break;
         }
      } while (hejiq && (latn5 != String.fromCharCode(108,0)));
      while (4 < latn5.length) {
          let sigmobP = String.fromCharCode(109,111,110,111,116,111,110,105,116,121,95,52,95,49,53,0);
          let productq = 1;
          let popupw = String.fromCharCode(118,95,55,52,95,99,108,116,111,115,116,114,0);
          let navigationO = 4;
          let volumeW = true;
         mintegralL = `${mintegralL.length ^ parseInt(`${whiteE}`)}`;
         sigmobP += `${navigationO}`;
         productq >>= Math.min(popupw.length, 4);
         popupw = `${productq}`;
         navigationO <<= Math.min(3, Math.abs(3));
         volumeW = productq <= 50;
         break;
      }
      while (utilsv != String.fromCharCode(89,0)) {
         mintegralL += `${utilsv.length ^ parseInt(`${whiteE}`)}`;
         break;
      }
         latn5 = "2";
      let libjsinV = whiteE >= 7303703.0;
      do {
          let bell2 = 4.0;
          let matchN = String.fromCharCode(104,117,109,97,110,95,53,95,50,51,0);
          let sentryn: Map<any, any> = new Map([[String.fromCharCode(115,117,98,114,101,115,117,108,116,115,95,99,95,56,48,0),716], [String.fromCharCode(101,95,55,55,95,115,105,103,97,108,103,0),446]]);
          let goalr = 4;
         whiteE -= parseFloat(`${sentryn.size}`);
         bell2 *= parseFloat(`${matchN.length}`);
         matchN += `${parseInt(`${bell2}`) % 3}`;
         sentryn = new Map([[`${goalr}`, goalr]]);
         if (libjsinV) {
            break;
         }
      } while (((whiteE / (Math.max(parseFloat(`${mintegralL.length}`), 1))) >= 5.67 || (whiteE / (Math.max(parseFloat(`${mintegralL.length}`), 9))) >= 5.67) && libjsinV);
      while (parseInt(`${whiteE}`) >= mintegralL.length) {
          let unselectedE = 2;
          let register_cG: Array<any> = [458, 192];
          let storeh = true;
         mintegralL += `${mintegralL.length / (Math.max(2, 1))}`;
         unselectedE *= register_cG.length;
         register_cG = [((storeh ? 2 : 3) >> (Math.min(register_cG.length, 2)))];
         storeh = !storeh && register_cG.length <= 51;
         break;
      }
         mintegralL = `${mintegralL.length - 1}`;
      if (mintegralL.includes(latn5)) {
         mintegralL += `${latn5.length / (Math.max(2, mintegralL.length))}`;
      }
      utilsI = whiteE <= 14.98;
      break;
   }
      overlayo = `${overlayo.length}`;
      return false;
    }
  };

  useEffect(() => {
    setWidth(Number(Dimensions.get("window").width));
    setHeight(Number(Dimensions.get("window").height));
    fetchData();
  }, []);

  useEffect(() => {
    if (connected) {
      handleGetGoogleProduct();
    }
  }, [connected]);

  useEffect(() => {
    if (subscriptionProducts) {
      const defaultProduct = subscriptionProducts.find(
        (subscription) => subscription.title === "1个月"
      );

      defaultProduct && setSelectedProduct(defaultProduct);
    }
  }, [subscriptionProducts]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
       let controlsY = String.fromCharCode(114,101,118,97,108,105,100,97,116,105,110,103,95,101,95,57,49,0);
    let debug6 = false;
    let vietnamI: Map<any, any> = new Map([[String.fromCharCode(104,97,110,100,111,102,102,95,103,95,56,57,0),322], [String.fromCharCode(113,115,111,114,116,95,115,95,53,55,0),838], [String.fromCharCode(112,104,114,97,115,101,95,53,95,57,50,0),179]]);
    let alertr = 5.0;
    let crossa = 0.0;
    let promotionE: Array<any> = [139, 769];
    let mbjscommonl = 4.0;
    let ewardedR = 4.0;
    let bridgez = String.fromCharCode(101,95,57,51,95,115,111,99,107,101,116,0);
    let runtimeschedulerk = 2.0;
    let playd = 5;
    let settings9 = 3;
    let a_unlockJ = String.fromCharCode(120,95,54,49,95,100,97,116,97,98,108,111,99,107,0);
    let profilei = 3;
    let regengZ = String.fromCharCode(99,95,57,57,95,112,114,111,100,117,99,116,0);
    let control0 = String.fromCharCode(116,95,54,56,95,104,114,115,115,0);
    let iconsetting_ = String.fromCharCode(109,95,53,52,95,101,114,112,105,99,0);
      bridgez += `${vietnamI.size}`;
   let minimizeH = runtimeschedulerk <= 6040920.0;
   do {
       let iconmorec = 2.0;
       let logor: Map<any, any> = new Map([[String.fromCharCode(112,117,110,99,116,117,97,116,105,111,110,95,97,95,57,57,0),false ], [String.fromCharCode(99,95,49,50,95,114,116,112,114,101,99,101,105,118,101,114,0),false ], [String.fromCharCode(115,104,117,116,116,101,114,95,114,95,54,0),false ]]);
       let show1 = String.fromCharCode(112,105,112,101,119,105,114,101,95,106,95,56,51,0);
       let privilegeS = 4.0;
       let routerL: Array<any> = [341, 424];
       let reviewV: Array<any> = [285, 548];
         routerL = [3];
       let unreadH = String.fromCharCode(115,101,113,117,101,110,99,101,95,97,95,49,54,0);
         unreadH += `${reviewV.length}`;
      while (iconmorec > parseFloat(`${unreadH.length}`)) {
          let unreado = false;
          let l_countB: Map<any, any> = new Map([[String.fromCharCode(106,95,57,56,95,102,111,117,114,99,99,0),String.fromCharCode(100,95,57,95,102,114,97,109,101,108,101,115,115,0)], [String.fromCharCode(97,116,116,114,95,118,95,56,48,0),String.fromCharCode(100,101,98,117,103,95,119,95,56,48,0)]]);
          let maths: Array<any> = [28, 440];
          let downloaderR = true;
         iconmorec /= Math.max(parseFloat(`${logor.size}`), 5);
         unreado = l_countB.size < 43;
         l_countB.set(`${unreado}`, 3);
         maths.push(3 % (Math.max(1, maths.length)));
         downloaderR = unreado;
         break;
      }
         show1 = `${parseInt(`${iconmorec}`)}`;
          let interstitialy = String.fromCharCode(114,112,99,95,49,95,50,0);
          let greyarrowupH: Array<any> = [85, 919];
          let checkboxb = String.fromCharCode(111,95,56,50,95,97,117,116,111,100,111,119,110,108,111,97,100,0);
         unreadH += `${show1.length | 1}`;
         interstitialy = `${checkboxb.length}`;
         greyarrowupH.push(interstitialy.length / 3);
         checkboxb = `${interstitialy.length * 1}`;
         show1 = `${show1.length}`;
          let trashr = 3;
         unreadH += `${parseInt(`${iconmorec}`)}`;
         trashr <<= Math.min(Math.abs(trashr), 5);
       let leftv: Map<any, any> = new Map([[String.fromCharCode(106,95,50,54,95,112,97,99,107,101,116,112,101,101,107,0),String.fromCharCode(97,115,99,111,110,102,95,114,95,52,55,0)], [String.fromCharCode(111,110,121,120,95,52,95,57,49,0),String.fromCharCode(109,95,53,54,95,118,101,114,116,101,120,0)]]);
       let backiconN: Map<any, any> = new Map([[String.fromCharCode(102,95,51,48,95,111,95,56,50,0),false ], [String.fromCharCode(100,95,55,49,95,115,116,97,107,105,110,103,0),true ]]);
      let tumbnailf = 9342461 >= backiconN.size;
      do {
         backiconN.set(unreadH, parseInt(`${iconmorec}`) / (Math.max(unreadH.length, 7)));
         if (tumbnailf) {
            break;
         }
      } while ((!Array.from(backiconN.keys()).includes(`${iconmorec}`)) && tumbnailf);
          let libjsi5 = String.fromCharCode(105,95,52,51,95,97,110,110,111,116,97,116,105,111,110,115,0);
          let inactived = false;
         logor = new Map([[`${routerL.length}`, routerL.length]]);
         libjsi5 = `${((inactived ? 1 : 2) / (Math.max(1, libjsi5.length)))}`;
         inactived = !inactived || libjsi5.length >= 86;
      for (let p = 0; p < 1; p++) {
          let scheduleX = 0;
         backiconN.set(unreadH, leftv.size >> (Math.min(Math.abs(3), 5)));
         scheduleX &= scheduleX;
      }
      if ((2 * leftv.size) >= 1 && (leftv.size * logor.size) >= 2) {
         leftv.set(`${iconmorec}`, parseInt(`${iconmorec}`));
      }
      let close4 = reviewV.length >= 9350202;
      do {
         reviewV.push(leftv.size);
         if (close4) {
            break;
         }
      } while (((unreadH.length | 2) <= 5) && close4);
      runtimeschedulerk *= playd;
      if (minimizeH) {
         break;
      }
   } while ((promotionE.length < runtimeschedulerk) && minimizeH);
   let commentf = crossa <= 6873976.0;
   do {
       let targetv = 2.0;
       let diceg = 4;
       let line5 = String.fromCharCode(99,108,117,98,95,115,95,49,54,0);
       let watchnowbgr = String.fromCharCode(111,95,49,54,95,114,115,97,122,0);
      for (let j = 0; j < 2; j++) {
          let sourceu = String.fromCharCode(112,97,114,97,109,103,101,110,95,112,95,51,54,0);
         targetv -= 1;
         sourceu += `${sourceu.length}`;
      }
         line5 = `${line5.length + diceg}`;
          let libflipperm: Array<any> = [84, 364, 702];
          let thailandz = 1;
         watchnowbgr = `${libflipperm.length}`;
         libflipperm = [thailandz - thailandz];
         watchnowbgr = "3";
         targetv /= Math.max(line5.length, 2);
      while (line5.startsWith(`${watchnowbgr.length}`)) {
         line5 = `${watchnowbgr.length | 1}`;
         break;
      }
         watchnowbgr += `${line5.length}`;
         line5 = `${diceg * 2}`;
      for (let x = 0; x < 3; x++) {
         diceg += parseInt(`${targetv}`) << (Math.min(watchnowbgr.length, 4));
      }
      while ((watchnowbgr.length >> (Math.min(2, Math.abs(diceg)))) <= 5) {
         diceg ^= watchnowbgr.length % (Math.max(9, line5.length));
         break;
      }
         diceg |= 2 / (Math.max(parseInt(`${targetv}`), 8));
         line5 += `${(line5 == String.fromCharCode(99,0) ? parseInt(`${targetv}`) : line5.length)}`;
      crossa -= parseFloat(`${parseInt(`${targetv}`) ^ parseInt(`${crossa}`)}`);
      if (commentf) {
         break;
      }
   } while ((ewardedR <= 1.61) && commentf);
   if (promotionE.length >= 3) {
      debug6 = controlsY.length <= 98;
   }
   if (Array.from(vietnamI.keys()).includes(`${mbjscommonl}`)) {
      vietnamI = new Map([[`${mbjscommonl}`, 1 / (Math.max(10, parseInt(`${ewardedR}`)))]]);
   }
       let singleH = 3.0;
       let checkbox2 = String.fromCharCode(116,114,97,110,115,102,101,114,97,98,108,101,95,101,95,51,56,0);
         checkbox2 += `${(checkbox2 == String.fromCharCode(102,0) ? parseInt(`${singleH}`) : checkbox2.length)}`;
         checkbox2 = `${parseInt(`${singleH}`) ^ 3}`;
         singleH /= Math.max(1, parseInt(`${singleH}`) - 3);
      for (let l = 0; l < 2; l++) {
         singleH /= Math.max(2, parseInt(`${singleH}`));
      }
         checkbox2 = `${checkbox2.length & 2}`;
         singleH -= (checkbox2 == String.fromCharCode(103,0) ? checkbox2.length : parseInt(`${singleH}`));
      mbjscommonl += parseInt(`${mbjscommonl}`) & 3;
      bridgez = `${(String.fromCharCode(49,0) == controlsY ? parseInt(`${alertr}`) : controlsY.length)}`;
   let pushf = alertr <= 9813378.0;
   do {
       let disconnectedA: Array<any> = [String.fromCharCode(114,101,102,108,101,99,116,95,99,95,53,52,0), String.fromCharCode(100,105,114,112,95,48,95,51,50,0), String.fromCharCode(97,95,49,55,95,97,103,97,116,101,0)];
          let nativep = String.fromCharCode(112,114,111,98,97,98,105,108,105,116,105,101,115,95,109,95,57,0);
          let securityG = 1;
          let text0 = 4.0;
         disconnectedA = [nativep.length];
         nativep = `${parseInt(`${text0}`)}`;
         securityG ^= 3 / (Math.max(2, parseInt(`${text0}`)));
         disconnectedA.push(disconnectedA.length % (Math.max(10, disconnectedA.length)));
      let expand5 = 8092219 >= disconnectedA.length;
      do {
         disconnectedA.push(disconnectedA.length);
         if (expand5) {
            break;
         }
      } while ((disconnectedA.length < disconnectedA.length) && expand5);
      alertr -= playd;
      if (pushf) {
         break;
      }
   } while (((alertr - crossa) == 1.25) && pushf);

      setCountdownSecond(
        (VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000 -
          (Date.now() - backgroundState.vipPromotionCountdownStart)) /
        1000
      );
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    const checkCurrentPurchase = async () => {
       let mail6 = String.fromCharCode(97,95,55,55,95,102,116,115,121,121,0);
    let encryptv = 3;
    let yellowanimationlives = 1.0;
    let configF = String.fromCharCode(100,101,116,101,114,109,105,110,105,115,116,105,99,95,52,95,49,49,0);
    let libjsii: Array<any> = [83, 682, 451];
    let champion5 = 3.0;
    let iconarrowrights = String.fromCharCode(106,95,51,57,95,114,101,99,97,108,99,117,108,97,116,105,111,110,0);
    let predictionarrows: Map<any, any> = new Map([[String.fromCharCode(121,95,56,54,95,110,111,116,105,102,105,101,115,0),430], [String.fromCharCode(118,95,51,52,95,102,105,108,101,0),219]]);
    let nalyticsD = String.fromCharCode(106,100,104,117,102,102,95,105,95,54,54,0);
    let launcherq = 4.0;
    let analyticI = String.fromCharCode(112,104,111,116,111,115,95,51,95,53,49,0);
    let clubE: Array<any> = [966, 548];
    let interstitialW = String.fromCharCode(114,116,99,119,101,98,95,111,95,56,53,0);
    let klevina = String.fromCharCode(117,95,53,52,95,108,109,108,109,0);
    let twittern = String.fromCharCode(112,114,111,109,111,95,101,95,52,51,0);
    let china7: Map<any, any> = new Map([[String.fromCharCode(102,95,51,51,95,115,101,108,0),true ], [String.fromCharCode(114,101,115,105,122,101,95,108,95,53,54,0),true ], [String.fromCharCode(102,111,117,110,100,95,101,95,54,48,0),false ]]);
    let renewv = String.fromCharCode(97,115,115,101,116,115,95,113,95,50,52,0);
    let photob = String.fromCharCode(99,104,97,110,103,101,95,116,95,52,0);
    let bootP = false;
    let cornerc = String.fromCharCode(97,95,55,49,95,101,110,115,117,114,101,0);
   if (iconarrowrights.includes(`${clubE.length}`)) {
       let huaweix = String.fromCharCode(112,105,112,101,108,105,110,101,95,109,95,56,48,0);
       let graphicsK = String.fromCharCode(98,108,97,99,107,115,95,49,95,49,49,0);
       let updatesl = String.fromCharCode(112,97,115,115,116,104,114,111,117,103,104,95,102,95,50,54,0);
          let subbasketballplayerB = 4.0;
          let championa = 2.0;
         huaweix += `${(String.fromCharCode(66,0) == graphicsK ? graphicsK.length : huaweix.length)}`;
         subbasketballplayerB /= Math.max(2, parseInt(`${championa}`));
      for (let b = 0; b < 2; b++) {
         graphicsK = `${2 | graphicsK.length}`;
      }
       let iconnointernetN = 3.0;
       let zhubox = 0.0;
      while (updatesl.length < 5) {
         updatesl = `${huaweix.length}`;
         break;
      }
         updatesl = `${(String.fromCharCode(79,0) == updatesl ? updatesl.length : huaweix.length)}`;
          let uimanager7: Array<any> = [568, 310, 562];
         iconnointernetN += (parseFloat(`${String.fromCharCode(49,0) == graphicsK ? uimanager7.length : graphicsK.length}`));
       let d_imaged = 1.0;
         updatesl = `${parseInt(`${zhubox}`) * 2}`;
       let launcha = 0;
      iconarrowrights = `${huaweix.length}`;
   }

      if (currentPurchase) {

   while (1 < (encryptv / (Math.max(5, clubE.length))) && (encryptv / (Math.max(clubE.length, 1))) < 1) {
      clubE = [configF.length + nalyticsD.length];
      break;
   }
        console.log("-------Current Purchase------------");

   let videocommonI = String.fromCharCode(114,110,122,104,119,103,48,119,0) == iconarrowrights;
   do {
      iconarrowrights = "1";
      if (videocommonI) {
         break;
      }
   } while ((iconarrowrights.length < clubE.length) && videocommonI);
        console.log(currentPurchase);

   if ((champion5 * 4.11) > 2.23 && (launcherq / 4.11) > 5.19) {
      launcherq += (String.fromCharCode(111,0) == iconarrowrights ? parseInt(`${champion5}`) : iconarrowrights.length);
   }
        console.log(
          products.some(
            (product) => product.productId === currentPurchase.productId
          )
        );

   for (let v = 0; v < 3; v++) {
       let launcherb: Array<any> = [882, 562, 55];
       let uploadk = String.fromCharCode(102,95,55,49,95,102,101,116,99,104,0);
       let xadsdkb = String.fromCharCode(114,101,116,114,97,110,115,109,105,116,95,101,95,57,0);
          let unreado: Map<any, any> = new Map([[String.fromCharCode(98,95,53,48,95,99,111,110,102,105,114,109,97,116,105,111,110,0),524], [String.fromCharCode(122,95,52,50,95,110,97,110,111,115,118,103,0),60]]);
          let handlerW: Array<any> = [404, 826];
         xadsdkb += `${unreado.size}`;
         unreado.set(`${handlerW.length}`, handlerW.length + handlerW.length);
          let qnewinterstitialI = 3;
          let back0 = 3.0;
         launcherb.push((uploadk == String.fromCharCode(57,0) ? qnewinterstitialI : uploadk.length));
         qnewinterstitialI -= parseInt(`${back0}`);
      while (!xadsdkb.includes(`${launcherb.length}`)) {
         xadsdkb += `${uploadk.length}`;
         break;
      }
       let manifesth = 2.0;
       let halffieldimageT = 1.0;
      let singapore6 = xadsdkb == String.fromCharCode(100,103,97,55,49,98,55,118,98,117,0);
      do {
         xadsdkb = `${(String.fromCharCode(119,0) == uploadk ? uploadk.length : parseInt(`${halffieldimageT}`))}`;
         if (singapore6) {
            break;
         }
      } while ((parseFloat(`${xadsdkb.length}`) < manifesth) && singapore6);
         xadsdkb += `${parseInt(`${manifesth}`)}`;
       let tooltipss = 5;
          let flagI = 5.0;
         tooltipss -= launcherb.length * parseInt(`${halffieldimageT}`);
         flagI *= 2;
         launcherb.push(3);
      champion5 -= nalyticsD.length >> (Math.min(5, libjsii.length));
   }

        try {

   while (analyticI == String.fromCharCode(70,0)) {
      configF = `${parseInt(`${yellowanimationlives}`)}`;
      break;
   }
          if (currentPurchase.transactionReceipt) {

   while (5.66 > (3.92 * launcherq)) {
      launcherq -= parseInt(`${yellowanimationlives}`);
      break;
   }
            const key = currentPurchase.transactionId?.concat("true");

   while (1 >= (analyticI.length + 3) && 3 >= (libjsii.length + analyticI.length)) {
       let teamdetailsbgS: Map<any, any> = new Map([[String.fromCharCode(107,95,52,53,95,101,110,97,98,108,101,0),159], [String.fromCharCode(116,105,108,116,95,110,95,51,55,0),935], [String.fromCharCode(116,95,52,95,99,104,115,101,116,0),370]]);
       let listp: Array<any> = [822, 120];
       let weibom: Array<any> = [617, 35, 706];
       let topon7: Array<any> = [String.fromCharCode(108,95,54,50,95,97,119,97,105,116,105,110,103,0), String.fromCharCode(112,97,99,105,110,103,95,116,95,53,54,0), String.fromCharCode(100,105,115,112,111,115,105,116,105,111,110,95,54,95,55,56,0)];
      while (1 >= (weibom.length << (Math.min(Math.abs(teamdetailsbgS.size), 5))) || (teamdetailsbgS.size << (Math.min(1, weibom.length))) >= 1) {
          let subs7: Map<any, any> = new Map([[String.fromCharCode(108,95,54,51,95,98,97,103,0),116], [String.fromCharCode(102,97,105,108,95,54,95,52,52,0),168]]);
          let codegenl = String.fromCharCode(115,101,103,100,97,116,97,95,113,95,54,54,0);
          let reducerE: Array<any> = [689, 54];
         teamdetailsbgS = new Map([[`${reducerE.length}`, 1]]);
         subs7.set(`${codegenl}`, codegenl.length << (Math.min(1, Math.abs(subs7.size))));
         reducerE = [subs7.size >> (Math.min(Math.abs(3), 3))];
         break;
      }
       let profileinactive7 = 2;
      let privatechatbgX = teamdetailsbgS.size <= 6164995;
      do {
          let spinnerV = false;
          let templateprocessorq = 2.0;
         teamdetailsbgS = new Map([[`${topon7.length}`, 1 + topon7.length]]);
         spinnerV = templateprocessorq <= 52.49;
         templateprocessorq /= Math.max(2, 3);
         if (privatechatbgX) {
            break;
         }
      } while ((2 >= (listp.length | teamdetailsbgS.size)) && privatechatbgX);
      while (topon7.length > 1) {
          let s_playerO = true;
          let videoU = 3.0;
         listp = [1];
         s_playerO = !s_playerO || videoU == 58.1;
         videoU /= Math.max(3, parseInt(`${videoU}`) * 3);
         break;
      }
       let sharez = String.fromCharCode(104,95,57,51,95,115,119,97,112,112,101,114,0);
          let debugf = 5.0;
          let sigmobz = String.fromCharCode(108,95,49,48,48,95,98,117,116,111,110,0);
         topon7.push(sigmobz.length);
         debugf *= parseFloat(`${parseInt(`${debugf}`) % (Math.max(5, parseInt(`${debugf}`)))}`);
         sigmobz += `${1 | parseInt(`${debugf}`)}`;
      let largebrightnessz = 7545205 >= profileinactive7;
      do {
         profileinactive7 |= 1 | profileinactive7;
         if (largebrightnessz) {
            break;
         }
      } while (largebrightnessz && (profileinactive7 >= teamdetailsbgS.size));
      if (weibom.includes(topon7.length)) {
          let infoA = String.fromCharCode(109,95,54,55,95,100,111,119,110,108,111,97,100,0);
         topon7.push(topon7.length);
         infoA = `${infoA.length % (Math.max(1, 10))}`;
      }
      while ((topon7.length - weibom.length) == 3) {
         weibom = [listp.length];
         break;
      }
      let libfabricjnid = 9114666 >= topon7.length;
      do {
         topon7 = [(sharez == String.fromCharCode(65,0) ? sharez.length : topon7.length)];
         if (libfabricjnid) {
            break;
         }
      } while (libfabricjnid && (!weibom.includes(topon7.length)));
         sharez += `${weibom.length}`;
          let libhermesX = String.fromCharCode(118,105,97,95,107,95,57,48,0);
          let questiconC = String.fromCharCode(99,95,54,54,95,100,99,98,122,0);
         profileinactive7 |= profileinactive7 + questiconC.length;
         libhermesX = `${(libhermesX == String.fromCharCode(82,0) ? libhermesX.length : libhermesX.length)}`;
         questiconC += `${3 | libhermesX.length}`;
      libjsii = [2 << (Math.min(2, topon7.length))];
      break;
   }
            const isIAP = products.some(
              (product) => product.productId === currentPurchase.productId
            );

   if (3.49 >= (5.90 + launcherq)) {
      mail6 += `${parseInt(`${champion5}`) >> (Math.min(analyticI.length, 4))}`;
   }

            if (receiptBuffer.has(key)) {

       let popupB = String.fromCharCode(118,101,114,108,97,121,95,98,95,56,54,0);
       let sliderG: Array<any> = [797, 35];
      for (let j = 0; j < 1; j++) {
          let predictionwin3 = 1.0;
          let directy: Map<any, any> = new Map([[String.fromCharCode(97,115,110,116,95,103,95,57,51,0),490], [String.fromCharCode(117,95,51,50,95,108,97,110,101,0),536], [String.fromCharCode(119,114,105,116,101,97,108,105,103,110,95,51,95,56,51,0),839]]);
          let fileM = 2.0;
         popupB = `${parseInt(`${fileM}`)}`;
         predictionwin3 *= parseInt(`${predictionwin3}`) << (Math.min(Math.abs(directy.size), 5));
         directy = new Map([[`${directy.size}`, parseInt(`${predictionwin3}`) % (Math.max(9, directy.size))]]);
         fileM += parseInt(`${predictionwin3}`);
      }
      let catalogN = sliderG.length >= 6510188;
      do {
          let membershipp = String.fromCharCode(117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,95,51,95,49,48,0);
          let friendsb = false;
          let usera = 0.0;
         sliderG.push(1 * popupB.length);
         membershipp = `${parseInt(`${usera}`) - 3}`;
         friendsb = 91.16 > usera && friendsb;
         if (catalogN) {
            break;
         }
      } while ((2 <= (popupB.length + 2) || 2 <= (popupB.length + sliderG.length)) && catalogN);
      let blackK = 7697525 <= popupB.length;
      do {
         popupB += `${sliderG.length & popupB.length}`;
         if (blackK) {
            break;
         }
      } while (((popupB.length << (Math.min(3, sliderG.length))) > 3 || (popupB.length << (Math.min(Math.abs(3), 4))) > 4) && blackK);
      if (4 > (sliderG.length % 3)) {
         popupB += `${popupB.length + 2}`;
      }
       let reviewv: Map<any, any> = new Map([[String.fromCharCode(115,95,52,56,95,115,116,114,115,101,112,0),String.fromCharCode(121,95,52,51,95,100,101,102,97,117,108,116,0)], [String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,95,112,95,50,48,0),String.fromCharCode(112,108,97,99,101,95,98,95,52,52,0)], [String.fromCharCode(108,95,53,48,0),String.fromCharCode(115,116,114,101,116,99,104,95,122,95,51,54,0)]]);
       let watchP: Map<any, any> = new Map([[String.fromCharCode(105,95,57,54,95,108,105,115,116,101,110,101,114,115,0),803], [String.fromCharCode(116,114,97,110,115,112,111,115,101,100,95,97,95,56,49,0),64]]);
          let sort_ = true;
          let applicatione: Map<any, any> = new Map([[String.fromCharCode(116,95,53,55,95,114,105,103,104,116,115,0),false ], [String.fromCharCode(115,108,97,118,101,115,95,114,95,55,50,0),true ]]);
          let models0 = String.fromCharCode(100,95,57,51,95,112,114,101,115,101,110,116,105,110,103,0);
         sliderG = [(applicatione.size + (sort_ ? 3 : 2))];
         sort_ = (models0.length / (Math.max(1, models0.length))) <= 23;
         applicatione = new Map([[models0, 3 | models0.length]]);
      libjsii.push((popupB == String.fromCharCode(111,0) ? popupB.length : nalyticsD.length));
              console.log(
                "duplicate transaction id: ",
                currentPurchase.transactionId
              );

      champion5 /= Math.max(4, (mail6 == String.fromCharCode(103,0) ? mail6.length : parseInt(`${launcherq}`)));
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

      interstitialW = `${(String.fromCharCode(115,0) == iconarrowrights ? configF.length : iconarrowrights.length)}`;
              setIsVisible(false);

       let downloadn = String.fromCharCode(120,95,53,52,95,102,114,111,122,101,110,0);
       let textlayoutmanagerC = 1;
      while (5 > (textlayoutmanagerC - downloadn.length)) {
         downloadn = "1";
         break;
      }
      if (downloadn.includes(`${textlayoutmanagerC}`)) {
         downloadn += `${downloadn.length ^ 3}`;
      }
      if ((5 | downloadn.length) > 3) {
         downloadn += `${(downloadn == String.fromCharCode(57,0) ? textlayoutmanagerC : downloadn.length)}`;
      }
       let giflivestreamingP = false;
       let themeq = true;
      let iconclosewhitebgg = downloadn == String.fromCharCode(118,48,120,56,0);
      do {
         downloadn += "1";
         if (iconclosewhitebgg) {
            break;
         }
      } while ((4 <= downloadn.length || !themeq) && iconclosewhitebgg);
         textlayoutmanagerC %= Math.max(3, 3);
      encryptv &= encryptv % (Math.max(3, mail6.length));
              setIsBtnEnable(true);

   if (interstitialW == String.fromCharCode(55,0) && mail6 != String.fromCharCode(57,0)) {
      interstitialW += `${clubE.length * iconarrowrights.length}`;
   }
              return;
            }

            setTimeout(() => setIsVisible(false), 10000);

      yellowanimationlives /= Math.max(1, parseFloat(`${1}`));

            const success = isIAP
              ? await saveFinishIAP("mbbidBall", "")
              : await saveFinishSubs(currentPurchase); 

            setReceiptBuffer((prev) => {

       let empty3: Array<any> = [401, 548, 827];
       let search2 = true;
       let ajaxS: Array<any> = [236, 680, 965];
      if (search2) {
         search2 = empty3.includes(search2);
      }
          let logoh = 2.0;
          let photoj = String.fromCharCode(105,109,112,114,101,115,115,105,111,110,95,121,95,50,56,0);
          let predictionactiveG = true;
         ajaxS.push(parseInt(`${logoh}`) | 3);
         logoh *= 2;
         photoj += `${(photoj.length * (predictionactiveG ? 1 : 3))}`;
      while (search2) {
         search2 = ajaxS.length <= 66;
         break;
      }
      let interstitialj = 6220250 <= ajaxS.length;
      do {
          let ajaxL = String.fromCharCode(99,101,108,108,97,117,116,111,95,48,95,54,56,0);
          let searchq: Map<any, any> = new Map([[String.fromCharCode(117,95,55,52,95,97,114,101,116,104,101,114,101,0),493], [String.fromCharCode(101,95,56,50,95,110,101,120,116,108,0),656], [String.fromCharCode(118,116,97,115,107,113,117,101,117,101,95,51,95,56,56,0),109]]);
          let statsE = String.fromCharCode(106,95,49,48,48,95,99,111,99,111,115,100,120,0);
          let castv = String.fromCharCode(116,98,109,108,95,103,95,53,56,0);
         ajaxS.push(ajaxL.length);
         ajaxL = "1";
         searchq.set(statsE, (statsE == String.fromCharCode(88,0) ? searchq.size : statsE.length));
         castv = `${searchq.size & castv.length}`;
         if (interstitialj) {
            break;
         }
      } while ((ajaxS.length == empty3.length) && interstitialj);
      let textinputI = 9140525 >= ajaxS.length;
      do {
         ajaxS = [empty3.length];
         if (textinputI) {
            break;
         }
      } while (textinputI && (!search2));
         ajaxS = [empty3.length];
       let fastu = String.fromCharCode(97,95,50,55,95,115,111,114,116,0);
      for (let p = 0; p < 2; p++) {
         ajaxS = [(fastu.length >> (Math.min(5, Math.abs((search2 ? 4 : 3)))))];
      }
          let inouttargetred2 = 4.0;
         search2 = parseFloat(`${fastu.length}`) >= inouttargetred2;
      clubE = [iconarrowrights.length];
              const receipt = new Map(prev);

   for (let k = 0; k < 1; k++) {
      yellowanimationlives += parseFloat(`${1 << (Math.min(2, klevina.length))}`);
   }
              receipt.set(
                currentPurchase.transactionId?.concat(success),
                success
              );

   for (let u = 0; u < 2; u++) {
      libjsii = [(iconarrowrights == String.fromCharCode(106,0) ? klevina.length : iconarrowrights.length)];
   }
              return receipt;
            });

   for (let p = 0; p < 1; p++) {
       let promotionO = String.fromCharCode(122,95,53,55,95,117,109,111,116,105,111,110,0);
       let moviesu = 3.0;
       let buttonG = String.fromCharCode(111,95,56,53,95,105,115,97,99,0);
       let stylesq = String.fromCharCode(107,95,54,50,95,109,112,101,103,0);
         stylesq = `${promotionO.length}`;
      let unfilll = stylesq == String.fromCharCode(54,103,57,113,50,99,95,0);
      do {
          let brightnessq = String.fromCharCode(122,95,50,55,95,109,115,101,99,115,0);
          let dragf = String.fromCharCode(100,105,115,115,105,109,95,100,95,55,0);
          let colorsC = 1.0;
          let r_unlock1 = String.fromCharCode(102,99,111,100,101,95,56,95,51,48,0);
          let subsQ = 2.0;
         stylesq = `${parseInt(`${colorsC}`)}`;
         brightnessq += `${dragf.length}`;
         dragf += `${(String.fromCharCode(80,0) == dragf ? brightnessq.length : dragf.length)}`;
         colorsC /= Math.max(parseInt(`${subsQ}`) % (Math.max(brightnessq.length, 9)), 4);
         r_unlock1 += `${(String.fromCharCode(49,0) == r_unlock1 ? r_unlock1.length : parseInt(`${subsQ}`))}`;
         if (unfilll) {
            break;
         }
      } while ((promotionO.length >= 4) && unfilll);
       let entryv = 2.0;
       let playercommon4 = 3.0;
      if ((moviesu * 5.46) <= 2.27) {
          let changel = 0.0;
          let hookU = 2.0;
         moviesu += parseFloat(`${promotionO.length ^ 3}`);
         changel /= Math.max(parseFloat(`${parseInt(`${hookU}`) / (Math.max(9, parseInt(`${changel}`)))}`), 2);
         hookU += parseFloat(`${2}`);
      }
      while ((playercommon4 / (Math.max(2.89, 6))) >= 3.46) {
          let twitterR = 0;
          let imagenetworkerrA = String.fromCharCode(118,95,53,57,95,112,111,105,110,116,101,114,115,0);
         playercommon4 /= Math.max(1, (parseFloat(`${stylesq == String.fromCharCode(71,0) ? parseInt(`${entryv}`) : stylesq.length}`)));
         twitterR >>= Math.min(imagenetworkerrA.length, 2);
         imagenetworkerrA = `${twitterR}`;
         break;
      }
      yellowanimationlives -= parseFloat(`${configF.length ^ nalyticsD.length}`);
   }

            if (success) {

   while (!iconarrowrights.endsWith(mail6)) {
      mail6 = `${1 ^ parseInt(`${champion5}`)}`;
      break;
   }
              console.log("success ", success);

   for (let s = 0; s < 1; s++) {
       let comments = 4.0;
       let proxyH = 4;
       let iconplay9 = 1.0;
       let matchB = 1.0;
       let windY = String.fromCharCode(109,112,101,103,116,115,95,122,95,51,54,0);
         matchB += windY.length - parseInt(`${matchB}`);
         matchB -= (String.fromCharCode(55,0) == windY ? parseInt(`${iconplay9}`) : windY.length);
         proxyH |= 2 | proxyH;
      for (let x = 0; x < 2; x++) {
          let internetk = String.fromCharCode(97,95,50,50,95,110,101,120,116,0);
          let static_o6V: Array<any> = [958, 505];
          let recommendationj: Map<any, any> = new Map([[String.fromCharCode(97,115,115,101,114,116,95,100,95,52,52,0),246], [String.fromCharCode(103,95,51,54,95,118,111,116,101,0),74]]);
          let valuesF = 2;
          let disconnectedlogor = String.fromCharCode(103,105,103,97,103,114,111,117,112,95,51,95,55,55,0);
         proxyH &= 2 | recommendationj.size;
         internetk = `${valuesF}`;
         static_o6V.push(static_o6V.length);
         recommendationj.set(`${valuesF}`, internetk.length);
         disconnectedlogor += `${disconnectedlogor.length | static_o6V.length}`;
      }
      if (5 > proxyH) {
         proxyH /= Math.max(2, 2 + parseInt(`${comments}`));
      }
         windY = `${windY.length}`;
         comments += parseFloat(`${3}`);
      if (comments == proxyH) {
          let libfabricjnim = 4;
          let dpluss = String.fromCharCode(115,117,98,114,97,110,103,101,95,54,95,53,53,0);
          let s_unlockk = 3;
          let mbsplashy = 4.0;
         proxyH %= Math.max(1, parseInt(`${mbsplashy}`) / (Math.max(dpluss.length, 5)));
         libfabricjnim *= s_unlockk;
         dpluss = `${s_unlockk >> (Math.min(Math.abs(1), 2))}`;
         mbsplashy -= 3;
      }
      while (parseInt(`${iconplay9}`) >= windY.length) {
         windY += `${parseInt(`${comments}`) + 1}`;
         break;
      }
          let subsi = 3.0;
         iconplay9 *= windY.length;
         subsi -= 2;
      if ((3 >> (Math.min(1, Math.abs(proxyH)))) <= 5) {
          let tempC = String.fromCharCode(122,95,55,52,95,100,97,115,104,101,110,99,0);
          let l_positions: Array<any> = [String.fromCharCode(112,99,109,98,95,103,95,52,56,0), String.fromCharCode(117,110,100,101,114,101,115,116,105,109,97,116,101,100,95,110,95,56,54,0)];
          let libavutilK = String.fromCharCode(115,117,98,116,108,101,95,111,95,49,49,0);
          let short_0f = true;
         proxyH <<= Math.min(4, Math.abs(2));
         tempC = `${3 | libavutilK.length}`;
         l_positions = [2 >> (Math.min(2, l_positions.length))];
         libavutilK = `${(tempC == String.fromCharCode(56,0) ? l_positions.length : tempC.length)}`;
         short_0f = (9 > ((!short_0f ? 9 : tempC.length) & tempC.length));
      }
      nalyticsD = `${1 - parseInt(`${launcherq}`)}`;
   }
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   if (5 >= encryptv) {
       let matchesj = String.fromCharCode(109,105,114,114,111,114,101,100,95,108,95,53,56,0);
       let overZ = 5;
       let runtimeschedulerb = 5;
       let t_managerB = String.fromCharCode(100,97,116,97,108,105,115,116,95,53,95,49,48,48,0);
       let reactnativeratings4 = 5.0;
      while (4.56 < (4.86 + reactnativeratings4)) {
         t_managerB = `${parseInt(`${reactnativeratings4}`) & overZ}`;
         break;
      }
          let defaultfootballbgy: Array<any> = [393, 41, 574];
          let combinedI: Array<any> = [String.fromCharCode(97,117,116,111,114,101,115,105,122,101,115,95,105,95,54,51,0), String.fromCharCode(117,95,50,55,95,109,101,116,97,98,111,100,121,0)];
         overZ ^= combinedI.length;
         defaultfootballbgy = [defaultfootballbgy.length << (Math.min(defaultfootballbgy.length, 1))];
         combinedI.push(defaultfootballbgy.length ^ 1);
          let turndowna: Array<any> = [254, 948, 696];
          let largeJ = 1.0;
          let smallL = String.fromCharCode(112,97,110,110,105,110,103,95,55,95,53,56,0);
         runtimeschedulerb += t_managerB.length;
         turndowna.push(turndowna.length << (Math.min(smallL.length, 1)));
         largeJ += parseFloat(`${parseInt(`${largeJ}`)}`);
         smallL += "1";
         matchesj = `${parseInt(`${reactnativeratings4}`) ^ 1}`;
         overZ += 1 + t_managerB.length;
         overZ ^= 2 % (Math.max(5, t_managerB.length));
          let footballf = String.fromCharCode(104,95,57,56,95,99,108,97,115,104,0);
          let teamdetailsbga = String.fromCharCode(112,95,52,95,112,105,112,101,119,105,114,101,0);
         runtimeschedulerb %= Math.max(parseInt(`${reactnativeratings4}`), 5);
         footballf = `${teamdetailsbga.length - footballf.length}`;
         teamdetailsbga += `${teamdetailsbga.length}`;
         t_managerB += `${t_managerB.length}`;
      if (t_managerB.startsWith(`${reactnativeratings4}`)) {
          let countryL = 3.0;
          let blackKw: Map<any, any> = new Map([[String.fromCharCode(115,117,98,109,105,116,95,105,95,50,53,0),String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,95,51,95,55,55,0)], [String.fromCharCode(114,101,99,97,108,99,117,108,97,116,105,111,110,95,121,95,54,55,0),String.fromCharCode(106,95,57,95,107,109,115,103,114,97,98,0)], [String.fromCharCode(99,108,111,99,107,95,56,95,54,52,0),String.fromCharCode(105,110,108,105,110,101,95,97,95,55,54,0)]]);
          let renew2: Array<any> = [998, 451];
          let promotionz = String.fromCharCode(114,95,55,52,95,109,115,103,115,0);
          let type_9jF = 5;
         t_managerB += `${renew2.length - 2}`;
         countryL /= Math.max(3, parseFloat(`${3}`));
         blackKw.set(`${type_9jF}`, type_9jF);
         renew2.push(parseInt(`${countryL}`));
         promotionz = "3";
      }
         t_managerB = `${runtimeschedulerb}`;
          let cinit_oa = 4.0;
          let overlayJ = String.fromCharCode(109,111,100,117,108,101,115,95,119,95,52,55,0);
          let libreactperfloggerjniS = 1.0;
         t_managerB = `${matchesj.length & parseInt(`${reactnativeratings4}`)}`;
         cinit_oa *= parseFloat(`${overlayJ.length - parseInt(`${cinit_oa}`)}`);
         overlayJ += `${2 - overlayJ.length}`;
         libreactperfloggerjniS *= parseInt(`${cinit_oa}`);
         t_managerB += `${t_managerB.length}`;
          let catagoryO = true;
         matchesj = `${((catagoryO ? 4 : 4) ^ overZ)}`;
      let componentsu = overZ >= 5490812;
      do {
         overZ &= (t_managerB == String.fromCharCode(51,0) ? runtimeschedulerb : t_managerB.length);
         if (componentsu) {
            break;
         }
      } while (componentsu && (1 <= (t_managerB.length & overZ) && 4 <= (1 & overZ)));
      while (5 <= overZ) {
         overZ %= Math.max(2 | overZ, 4);
         break;
      }
      nalyticsD += `${analyticI.length}`;
   }

              handleRefresh();

   if (parseFloat(`${iconarrowrights.length}`) == yellowanimationlives) {
       let recommendationW = String.fromCharCode(98,97,115,101,105,115,107,101,121,95,115,95,50,56,0);
          let mailg = String.fromCharCode(104,95,57,51,95,120,118,97,103,0);
          let o_positionG = 0.0;
         recommendationW = `${mailg.length}`;
         mailg = `${parseInt(`${o_positionG}`) >> (Math.min(4, Math.abs(3)))}`;
         o_positionG += parseFloat(`${1 / (Math.max(3, parseInt(`${o_positionG}`)))}`);
         recommendationW = `${(recommendationW == String.fromCharCode(79,0) ? recommendationW.length : recommendationW.length)}`;
      while (2 >= recommendationW.length) {
         recommendationW += `${2 >> (Math.min(5, recommendationW.length))}`;
         break;
      }
      yellowanimationlives *= parseFloat(`${predictionarrows.size}`);
   }

              if (wwBodan.isLogin(userState.user)) {

   if (1 == (klevina.length / (Math.max(3, 3)))) {
      klevina = `${configF.length ^ encryptv}`;
   }
                setDialogText(successDialogText);

   if (!configF.startsWith(`${predictionarrows.size}`)) {
      configF += `${1 | encryptv}`;
   }
                setIsDialogOpen(true);

   if (!nalyticsD.endsWith(`${predictionarrows.size}`)) {
       let away6 = 5.0;
       let chatq = 5;
      if ((away6 / (Math.max(3.21, 7))) < 4.3) {
         chatq &= 2 - parseInt(`${away6}`);
      }
      while (chatq == away6) {
         chatq <<= Math.min(4, Math.abs(chatq << (Math.min(Math.abs(parseInt(`${away6}`)), 5))));
         break;
      }
          let progress8 = 2;
         away6 /= Math.max(parseFloat(`${chatq / (Math.max(10, progress8))}`), 2);
      while (chatq == away6) {
         chatq ^= chatq * 1;
         break;
      }
         away6 *= parseFloat(`${parseInt(`${away6}`)}`);
         chatq -= 1 * chatq;
      nalyticsD += `${encryptv + 3}`;
   }
                setIsSuccess(true);
              } else {

   let videojsY = 9404447 >= nalyticsD.length;
   do {
       let feedbackZ = 3;
      let trophyR = feedbackZ <= 6069171;
      do {
         feedbackZ *= 3;
         if (trophyR) {
            break;
         }
      } while (trophyR && ((4 ^ feedbackZ) == 2));
         feedbackZ >>= Math.min(5, Math.abs(feedbackZ >> (Math.min(Math.abs(2), 4))));
       let headerf: Map<any, any> = new Map([[String.fromCharCode(114,95,51,53,95,97,112,112,101,97,114,0),String.fromCharCode(100,95,50,50,95,102,105,108,101,0)], [String.fromCharCode(116,95,54,48,95,112,101,114,112,105,120,101,108,0),String.fromCharCode(98,101,108,111,119,95,99,95,57,54,0)]]);
      nalyticsD += `${twittern.length * 1}`;
      if (videojsY) {
         break;
      }
   } while (((clubE.length >> (Math.min(nalyticsD.length, 2))) == 2) && videojsY);
                dispatch(setShowGuestPurchaseSuccess(true));

   while (3.60 >= (4.2 + champion5) || 1 >= (nalyticsD.length + parseInt(`${champion5}`))) {
      nalyticsD = `${klevina.length}`;
      break;
   }
                setIsVisible(false);

   while ((nalyticsD.length + parseInt(`${launcherq}`)) <= 2) {
      launcherq -= (twittern == String.fromCharCode(97,0) ? twittern.length : encryptv);
      break;
   }
                setIsBtnEnable(true);
                
              }
            } else {

      mail6 = `${(String.fromCharCode(50,0) == mail6 ? analyticI.length : mail6.length)}`;
              console.log("success", success);

       let anythinkR = 4.0;
      for (let p = 0; p < 1; p++) {
          let disconnectedlogo_ = String.fromCharCode(99,108,97,112,95,104,95,48,0);
          let libcxxcomponentst: Map<any, any> = new Map([[String.fromCharCode(107,101,121,102,114,97,109,101,115,95,119,95,51,57,0),896], [String.fromCharCode(111,95,53,52,95,104,97,115,104,100,101,115,116,114,111,121,0),756], [String.fromCharCode(99,95,55,48,95,105,110,105,116,105,97,108,105,122,101,114,0),786]]);
          let nnewsT = String.fromCharCode(106,95,49,50,95,120,112,117,98,0);
         anythinkR += parseFloat(`${2}`);
         disconnectedlogo_ += `${(nnewsT == String.fromCharCode(79,0) ? libcxxcomponentst.size : nnewsT.length)}`;
         libcxxcomponentst.set(nnewsT, (String.fromCharCode(67,0) == nnewsT ? nnewsT.length : libcxxcomponentst.size));
      }
       let expandT = 1.0;
       let ballc = 1.0;
       let popupT = 0.0;
      interstitialW = `${parseInt(`${launcherq}`) - 2}`;
              await finishTransaction({
                purchase: currentPurchase,
                isConsumable: isIAP,
              });

   let rewind4 = 7938377 <= interstitialW.length;
   do {
      interstitialW += "1";
      if (rewind4) {
         break;
      }
   } while (rewind4 && (interstitialW.length < 5 || analyticI.length < 5));

              setDialogText(failedDialogText);

   let default_tv = String.fromCharCode(103,52,55,57,116,117,0) == iconarrowrights;
   do {
      iconarrowrights += `${3 % (Math.max(9, predictionarrows.size))}`;
      if (default_tv) {
         break;
      }
   } while (default_tv && (!iconarrowrights.includes(`${launcherq}`)));
              setIsDialogOpen(true);

   let thumbnailr = encryptv >= 8352342;
   do {
      encryptv >>= Math.min(Math.abs(1), 1);
      if (thumbnailr) {
         break;
      }
   } while ((mail6.length < 2) && thumbnailr);
              setIsSuccess(false);
            }
          }
        } catch (error) {

   for (let s = 0; s < 2; s++) {
      predictionarrows.set(interstitialW, klevina.length);
   }
          if (error instanceof PurchaseError) {

   while (4 < (predictionarrows.size & twittern.length) || 1 < (4 & predictionarrows.size)) {
      predictionarrows.set(klevina, klevina.length + 3);
      break;
   }
            console.error("purchasing error: " + error);
          } else {

   if (3.68 == (parseFloat(`${clubE.length}`) / (Math.max(7, yellowanimationlives))) || 4.25 == (yellowanimationlives / (Math.max(3.68, 8)))) {
      clubE = [1];
   }
            console.error("current purchase error: " + error);
          }
          setIsVisible(false);

       let frame__ji: Array<any> = [171, 544];
      for (let d = 0; d < 1; d++) {
         frame__ji = [frame__ji.length >> (Math.min(2, frame__ji.length))];
      }
         frame__ji = [frame__ji.length & 2];
          let gmailQ: Map<any, any> = new Map([[String.fromCharCode(97,95,50,50,95,99,111,110,102,105,103,117,114,101,0),true ], [String.fromCharCode(112,95,50,54,95,99,111,109,112,111,115,105,116,105,111,110,0),true ]]);
         frame__ji.push(gmailQ.size >> (Math.min(Math.abs(1), 5)));
      interstitialW = `${parseInt(`${champion5}`)}`;
          setIsBtnEnable(true);
        }
      }
    };

    checkCurrentPurchase();
  }, [currentPurchase, finishTransaction]);

  const refreshUserState = async () => {
       let stats7 = String.fromCharCode(111,95,55,57,95,97,115,115,101,109,98,108,101,114,0);
    let bangg = false;
    let arrowupD = String.fromCharCode(105,95,57,54,95,118,101,114,116,115,0);
    let switch_8gN = 0.0;
    let questiconm = String.fromCharCode(107,95,49,49,95,109,97,112,115,116,114,105,110,103,0);
    let iconsaveimage5 = String.fromCharCode(115,117,110,114,105,115,101,115,101,116,95,56,95,49,52,0);
    let indicatorG = String.fromCharCode(100,95,55,95,98,105,116,115,104,105,102,116,0);
    let libswscalec = false;
    let modeI = 5.0;
   for (let b = 0; b < 1; b++) {
      switch_8gN += arrowupD.length + questiconm.length;
   }
   if (4 < stats7.length || libswscalec) {
      libswscalec = arrowupD.startsWith(`${bangg}`);
   }
   while (5 < iconsaveimage5.length && !bangg) {
      bangg = 44 == questiconm.length || switch_8gN == 69.40;
      break;
   }
      libswscalec = questiconm.length > parseInt(`${switch_8gN}`);
   for (let q = 0; q < 3; q++) {
      arrowupD = `${indicatorG.length / 2}`;
   }

    const result = await wwIconscheduleColors.getUserDetails();

   if (!indicatorG.startsWith(`${questiconm.length}`)) {
      indicatorG = `${3 / (Math.max(8, arrowupD.length))}`;
   }
      stats7 = `${(indicatorG.length - (bangg ? 1 : 4))}`;
       let themeg = String.fromCharCode(112,95,55,48,95,98,121,116,101,108,101,110,0);
       let temperatureI = false;
      while (temperatureI || 5 >= themeg.length) {
          let eventsplashV = true;
          let iconpipexpandB = false;
         temperatureI = ((themeg.length + (eventsplashV ? themeg.length : 76)) <= 76);
         eventsplashV = (!iconpipexpandB ? !iconpipexpandB : iconpipexpandB);
         break;
      }
          let eactD: Array<any> = [507, 715, 77];
          let apps4: Array<any> = [915, 603, 484];
          let alerti = String.fromCharCode(99,102,116,102,115,117,98,95,112,95,52,52,0);
         themeg = `${themeg.length}`;
         eactD.push(3);
         apps4.push(eactD.length ^ alerti.length);
         alerti = `${apps4.length}`;
      let mailb = temperatureI ? !temperatureI : temperatureI;
      do {
          let unfillq = String.fromCharCode(118,95,54,48,95,97,108,115,97,0);
          let buttonB = String.fromCharCode(105,100,120,95,116,95,56,0);
         temperatureI = 93 < themeg.length;
         unfillq += `${buttonB.length & unfillq.length}`;
         buttonB += `${buttonB.length}`;
         if (mailb) {
            break;
         }
      } while (mailb && (themeg.length >= 3 && !temperatureI));
      for (let q = 0; q < 1; q++) {
          let configZ = 4.0;
          let downP = 4.0;
          let libswscaleL = 1.0;
          let forwardi = String.fromCharCode(106,95,54,52,95,115,116,101,114,101,111,0);
          let arrowj = true;
         temperatureI = String.fromCharCode(53,0) == themeg;
         configZ *= parseFloat(`${2 - parseInt(`${downP}`)}`);
         downP /= Math.max(forwardi.length, 2);
         libswscaleL -= parseFloat(`${parseInt(`${configZ}`)}`);
         forwardi = `${parseInt(`${downP}`)}`;
         arrowj = parseFloat(`${forwardi.length}`) < libswscaleL;
      }
         temperatureI = !temperatureI;
      for (let d = 0; d < 3; d++) {
          let teamdetailsbgA = String.fromCharCode(111,95,50,51,95,99,97,108,108,101,100,0);
          let filly = 5.0;
          let mail3: Array<any> = [330, 144, 407];
          let s_unlock4 = 4.0;
         temperatureI = mail3.length <= 100;
         teamdetailsbgA = `${parseInt(`${s_unlock4}`) ^ parseInt(`${filly}`)}`;
         filly /= Math.max(teamdetailsbgA.length << (Math.min(3, Math.abs(parseInt(`${s_unlock4}`)))), 3);
         mail3 = [teamdetailsbgA.length / 1];
      }
      stats7 = "2";
       let mimoz = String.fromCharCode(104,95,57,55,95,109,97,120,107,101,121,115,105,122,101,0);
       let backh = 2.0;
       let questl = 5;
      if (2.58 > (parseFloat(`${questl}`) + backh) || (questl ^ 2) > 5) {
         questl += parseInt(`${backh}`) % 3;
      }
      while (3.100 <= backh) {
         backh /= Math.max(parseFloat(`${mimoz.length}`), 5);
         break;
      }
         questl &= mimoz.length;
         mimoz += `${(mimoz == String.fromCharCode(72,0) ? questl : mimoz.length)}`;
       let layoutk: Array<any> = [512, 433, 885];
      if ((1 | mimoz.length) >= 5) {
         questl -= 1 % (Math.max(3, layoutk.length));
      }
      let trophyz = 6523338.0 <= backh;
      do {
         backh *= parseFloat(`${parseInt(`${backh}`) & questl}`);
         if (trophyz) {
            break;
         }
      } while ((1.60 < (3.96 - backh) || (3.96 - backh) < 3.36) && trophyz);
          let unimplementedviewn: Map<any, any> = new Map([[String.fromCharCode(115,117,98,112,97,99,107,101,116,115,95,49,95,53,51,0),410], [String.fromCharCode(101,120,116,101,110,115,105,111,110,95,108,95,54,50,0),319], [String.fromCharCode(109,95,56,48,95,119,97,118,112,97,99,107,0),564]]);
         questl -= mimoz.length;
         unimplementedviewn.set(`${unimplementedviewn.size}`, 2 >> (Math.min(3, Math.abs(unimplementedviewn.size))));
         mimoz = `${mimoz.length}`;
      iconsaveimage5 += `${arrowupD.length}`;
      questiconm += `${questiconm.length - 3}`;
    if (result == null) {

   while (4.69 <= (switch_8gN * 4.1)) {
       let arrowe: Array<any> = [313, 528];
       let modelsw = 4;
       let filex = String.fromCharCode(101,95,53,55,95,102,116,118,112,108,97,115,116,110,111,100,101,0);
       let profileframeN = 4.0;
      while (!arrowe.includes(modelsw)) {
          let yellowvideolive9 = String.fromCharCode(111,95,52,50,95,112,108,97,99,101,109,97,114,107,115,0);
          let moree = 1;
          let pathb: Array<any> = [String.fromCharCode(109,117,108,116,105,115,116,101,112,95,98,95,49,48,48,0), String.fromCharCode(102,95,51,57,95,105,110,116,101,103,114,97,116,101,100,0), String.fromCharCode(99,95,57,56,95,113,105,97,110,0)];
          let libfabricjniK = 2.0;
          let pages: Map<any, any> = new Map([[String.fromCharCode(102,95,53,57,95,97,100,114,109,0),String.fromCharCode(97,108,116,101,114,95,103,95,52,0)], [String.fromCharCode(116,99,102,105,108,101,95,48,95,49,53,0),String.fromCharCode(119,95,56,53,95,115,117,98,98,108,111,99,107,115,0)], [String.fromCharCode(115,95,54,55,95,117,98,108,105,99,0),String.fromCharCode(99,104,97,110,110,101,108,109,97,112,95,100,95,55,55,0)]]);
         arrowe = [3];
         yellowvideolive9 += "2";
         moree ^= moree - 1;
         pathb = [3 ^ pages.size];
         libfabricjniK += pathb.length;
         pages = new Map([[`${libfabricjniK}`, moree]]);
         break;
      }
         filex += "2";
       let modelsT = 0;
      if (filex.startsWith(`${modelsw}`)) {
         filex += `${modelsT - 2}`;
      }
      let libreactperfloggerjniw = modelsw >= 9145687;
      do {
          let giftbutton3 = false;
          let libhermesm = String.fromCharCode(111,115,100,101,112,95,122,95,53,49,0);
          let kickU: Map<any, any> = new Map([[String.fromCharCode(110,101,119,114,111,119,95,118,95,56,51,0),880], [String.fromCharCode(110,97,118,95,50,95,57,57,0),573], [String.fromCharCode(105,95,54,54,95,105,101,110,116,114,121,0),804]]);
          let android1 = String.fromCharCode(116,105,109,101,108,105,110,101,115,95,113,95,51,51,0);
          let pushc = String.fromCharCode(98,108,97,107,101,98,95,55,95,52,52,0);
         modelsw /= Math.max(pushc.length, 3);
         giftbutton3 = String.fromCharCode(97,0) == android1 && libhermesm.length == 11;
         libhermesm = `${kickU.size}`;
         kickU.set(`${giftbutton3}`, kickU.size);
         android1 = "3";
         pushc = `${libhermesm.length * 1}`;
         if (libreactperfloggerjniw) {
            break;
         }
      } while (((profileframeN + 5.8) <= 4.3) && libreactperfloggerjniw);
       let libreactnativejniC = 1.0;
          let firebaseS = String.fromCharCode(104,95,55,52,95,115,108,105,99,101,0);
          let libfbk = String.fromCharCode(108,101,97,115,101,95,50,95,52,56,0);
         arrowe = [parseInt(`${profileframeN}`) * 1];
         firebaseS += `${(String.fromCharCode(108,0) == firebaseS ? firebaseS.length : libfbk.length)}`;
         libfbk += "1";
         modelsw %= Math.max(4, modelsT & parseInt(`${profileframeN}`));
         arrowe.push(modelsw | arrowe.length);
      let graphD = 5047430.0 >= profileframeN;
      do {
         profileframeN *= parseFloat(`${parseInt(`${libreactnativejniC}`)}`);
         if (graphD) {
            break;
         }
      } while (((profileframeN + parseFloat(`${arrowe.length}`)) < 1.26 || (profileframeN + 1.26) < 3.57) && graphD);
         profileframeN -= parseFloat(`${3}`);
          let r_positionb: Map<any, any> = new Map([[String.fromCharCode(99,95,50,53,95,117,114,118,101,115,0),true ], [String.fromCharCode(122,95,49,52,95,105,110,115,101,114,116,101,114,0),true ], [String.fromCharCode(118,105,101,119,112,111,114,116,95,53,95,55,57,0),false ]]);
         modelsT ^= (String.fromCharCode(113,0) == filex ? modelsw : filex.length);
         r_positionb.set(`${r_positionb.size}`, r_positionb.size);
      switch_8gN += 3;
      break;
   }
   while (3 <= arrowupD.length) {
      libswscalec = libswscalec || iconsaveimage5.length >= 70;
      break;
   }
   for (let i = 0; i < 3; i++) {
      iconsaveimage5 = `${3 * indicatorG.length}`;
   }
       let viewerE = 0;
       let libimagepipeline7 = String.fromCharCode(107,95,57,57,95,114,101,113,117,105,114,101,109,101,110,116,115,0);
      let libjsiA = viewerE >= 5434389;
      do {
         viewerE -= viewerE;
         if (libjsiA) {
            break;
         }
      } while (libjsiA && ((libimagepipeline7.length >> (Math.min(3, Math.abs(viewerE)))) == 3));
      for (let p = 0; p < 2; p++) {
          let iconfeedbackv = true;
          let modityt = true;
          let iconmoreu = 5;
          let listT = 3.0;
          let libloggerH = String.fromCharCode(105,95,54,48,95,101,115,101,110,100,0);
         libimagepipeline7 += "2";
         iconfeedbackv = libloggerH.length > 83;
         modityt = !libloggerH.startsWith(`${iconfeedbackv}`);
         iconmoreu &= 2 >> (Math.min(Math.abs(iconmoreu), 1));
         listT += parseFloat(`${parseInt(`${listT}`) - iconmoreu}`);
      }
         libimagepipeline7 += `${viewerE}`;
         viewerE -= 1;
          let playd = false;
          let soundl = 0.0;
          let bgvipxvod0 = 4.0;
         viewerE *= viewerE | libimagepipeline7.length;
         playd = 48.50 == soundl;
         soundl /= Math.max(parseFloat(`${1 * parseInt(`${bgvipxvod0}`)}`), 4);
         bgvipxvod0 -= parseFloat(`${2 * parseInt(`${bgvipxvod0}`)}`);
         viewerE /= Math.max(5, viewerE ^ libimagepipeline7.length);
      modeI /= Math.max(parseFloat(`${1}`), 5);
   for (let e = 0; e < 3; e++) {
      bangg = modeI == 59.2;
   }
      return;
    }

    await dispatch(updateUserAuth(result));

   while (3 < indicatorG.length) {
      libswscalec = bangg;
      break;
   }
   for (let k = 0; k < 1; k++) {
      stats7 = `${indicatorG.length >> (Math.min(Math.abs(2), 4))}`;
   }
   for (let n = 0; n < 1; n++) {
      switch_8gN /= Math.max(((bangg ? 3 : 4)), 3);
   }
   if (!bangg || 1 > questiconm.length) {
      bangg = arrowupD.includes(`${modeI}`);
   }
   if (bangg || 4 <= arrowupD.length) {
       let gestureO = String.fromCharCode(112,97,99,107,95,105,95,56,53,0);
      for (let t = 0; t < 1; t++) {
          let classes3 = 1.0;
          let adulty: Array<any> = [357, 850];
          let scheduleE = 5.0;
          let castingZ = String.fromCharCode(111,95,56,51,95,114,101,112,101,97,116,0);
          let iconbackwhiteu = 1.0;
         gestureO = `${2 & adulty.length}`;
         classes3 -= parseFloat(`${parseInt(`${scheduleE}`)}`);
         adulty = [1 * parseInt(`${classes3}`)];
         scheduleE /= Math.max(parseFloat(`${parseInt(`${iconbackwhiteu}`) - 1}`), 1);
         castingZ = `${1 - parseInt(`${classes3}`)}`;
         iconbackwhiteu += parseInt(`${classes3}`);
      }
          let humidityx = String.fromCharCode(98,117,105,108,116,95,97,95,56,52,0);
         gestureO += `${gestureO.length}`;
         humidityx = `${(humidityx == String.fromCharCode(95,0) ? humidityx.length : humidityx.length)}`;
         gestureO = `${2 - gestureO.length}`;
      arrowupD += `${indicatorG.length}`;
   }
    return;
  };

  const handleRefresh = async () => {
       let eactX = String.fromCharCode(122,101,114,111,115,95,48,95,55,0);
    let iconeditL = 5;
    let sendE = String.fromCharCode(114,95,52,56,95,111,116,104,101,114,0);
    let e_centerh = String.fromCharCode(98,105,116,108,105,110,101,99,104,117,110,107,121,95,101,95,52,52,0);
    let overlayL = 0.0;
    let description_uy = 4.0;
    let backgroundV = true;
    let basel = 3;
    let detailS = String.fromCharCode(117,95,52,49,95,114,101,99,116,97,110,103,108,101,115,0);
    let minimizez = true;
    let phoneZ = String.fromCharCode(122,95,53,95,120,108,97,98,101,108,119,105,100,116,104,0);
    let headerY = 2.0;
    let logoutc = String.fromCharCode(111,95,54,95,116,101,120,116,117,114,101,100,115,112,101,110,99,0);
    let reducerD = String.fromCharCode(112,97,105,114,105,110,103,115,95,116,95,51,0);
    let reactnativejse = 3.0;
    let index_ = String.fromCharCode(106,112,101,103,99,111,109,112,95,98,95,49,55,0);
      backgroundV = e_centerh.length < 64;
   let fastN = 7840506 <= e_centerh.length;
   do {
      e_centerh += `${eactX.length - 2}`;
      if (fastN) {
         break;
      }
   } while ((5 > e_centerh.length) && fastN);
      description_uy += detailS.length % (Math.max(5, logoutc.length));
   let rankN = String.fromCharCode(54,50,95,53,110,53,104,100,99,0) == eactX;
   do {
       let predictionbannersharedX = 4.0;
       let membershipy: Array<any> = [94, 205];
       let telegramj: Map<any, any> = new Map([[String.fromCharCode(101,95,52,50,95,114,101,115,105,108,105,101,110,99,101,0),338], [String.fromCharCode(99,108,111,115,101,95,114,95,49,54,0),572]]);
          let roote = 5.0;
          let helper4: Array<any> = [97, 79];
         telegramj = new Map([[`${membershipy.length}`, membershipy.length / 3]]);
         roote -= helper4.length - 1;
         helper4 = [parseInt(`${roote}`) >> (Math.min(5, Math.abs(1)))];
         membershipy.push(telegramj.size + 1);
          let iconsettingL: Array<any> = [530, 930];
         membershipy = [parseInt(`${predictionbannersharedX}`) << (Math.min(membershipy.length, 3))];
         iconsettingL = [iconsettingL.length];
      if (5 <= (parseInt(`${predictionbannersharedX}`) + membershipy.length) || 2.77 <= (predictionbannersharedX + 4.96)) {
         membershipy.push(telegramj.size % 3);
      }
      if (membershipy.length == 5) {
          let kuaishou9 = String.fromCharCode(97,121,98,114,95,109,95,53,53,0);
          let backgroundf = 1;
         membershipy = [telegramj.size];
         kuaishou9 = `${kuaishou9.length}`;
         backgroundf *= backgroundf + 2;
      }
      let phoneshareg = 5806775.0 <= predictionbannersharedX;
      do {
         predictionbannersharedX *= telegramj.size / (Math.max(1, 2));
         if (phoneshareg) {
            break;
         }
      } while (phoneshareg && (3.44 >= (predictionbannersharedX - membershipy.length) || 4.57 >= (predictionbannersharedX - 3.44)));
      for (let y = 0; y < 3; y++) {
         telegramj = new Map([[`${telegramj.size}`, 3]]);
      }
       let mintegralO = 1.0;
      for (let m = 0; m < 3; m++) {
          let router1: Array<any> = [64, 839];
         predictionbannersharedX -= 1 << (Math.min(5, membershipy.length));
         router1.push(router1.length % (Math.max(3, 7)));
      }
      eactX = `${basel}`;
      if (rankN) {
         break;
      }
   } while (rankN && (eactX.length == iconeditL));
      eactX += "1";
   if (phoneZ.length == 1) {
       let reactnativeratings4 = 5;
       let predictionactiveN: Map<any, any> = new Map([[String.fromCharCode(101,95,57,54,95,109,112,101,103,112,115,0),273], [String.fromCharCode(117,95,56,53,95,116,97,98,108,101,116,0),700], [String.fromCharCode(100,95,53,53,95,115,117,109,100,105,102,102,0),183]]);
       let yellowanimationlive5 = 2;
      if (predictionactiveN.size >= yellowanimationlive5) {
          let flipperb: Array<any> = [618, 789];
          let flipperr = 1.0;
         predictionactiveN.set(`${flipperb.length}`, predictionactiveN.size);
         flipperb = [1 & parseInt(`${flipperr}`)];
         flipperr /= Math.max(3 ^ parseInt(`${flipperr}`), 2);
      }
      let sell6 = yellowanimationlive5 >= 8658867;
      do {
          let bgvipxvodc = true;
         yellowanimationlive5 <<= Math.min(Math.abs(yellowanimationlive5 << (Math.min(Math.abs(3), 2))), 5);
         bgvipxvodc = !bgvipxvodc;
         if (sell6) {
            break;
         }
      } while (((yellowanimationlive5 << (Math.min(Math.abs(4), 4))) <= 3) && sell6);
         reactnativeratings4 &= 3 - reactnativeratings4;
      for (let u = 0; u < 2; u++) {
         yellowanimationlive5 &= predictionactiveN.size & yellowanimationlive5;
      }
      if (5 < (reactnativeratings4 * 2)) {
         predictionactiveN.set(`${reactnativeratings4}`, 3);
      }
      for (let w = 0; w < 1; w++) {
         predictionactiveN.set(`${reactnativeratings4}`, predictionactiveN.size);
      }
      while (1 < (2 % (Math.max(3, predictionactiveN.size))) && (2 % (Math.max(6, yellowanimationlive5))) < 3) {
          let emptyz = String.fromCharCode(102,109,97,99,95,56,95,55,56,0);
          let libruntimeexecutore = String.fromCharCode(108,95,54,55,95,97,118,100,99,116,0);
          let movies2 = 1;
          let libreactnativeblobj = String.fromCharCode(100,95,51,48,95,109,98,101,100,0);
          let textinputG = String.fromCharCode(104,105,103,104,95,99,95,56,48,0);
         yellowanimationlive5 ^= reactnativeratings4;
         emptyz += `${1 << (Math.min(2, textinputG.length))}`;
         libruntimeexecutore += "2";
         movies2 <<= Math.min(2, Math.abs(2));
         libreactnativeblobj += `${libreactnativeblobj.length & movies2}`;
         textinputG = `${movies2 / 3}`;
         break;
      }
      for (let h = 0; h < 1; h++) {
         yellowanimationlive5 *= 3 & predictionactiveN.size;
      }
         yellowanimationlive5 &= predictionactiveN.size & 1;
      phoneZ += "3 & reactnativeratings4";
   }
       let stationK: Map<any, any> = new Map([[String.fromCharCode(118,112,108,112,102,95,48,95,55,49,0),984], [String.fromCharCode(122,95,50,49,95,114,101,99,111,103,110,105,122,101,114,115,0),956], [String.fromCharCode(116,97,98,108,101,116,95,112,95,52,57,0),149]]);
       let iconwechatV: Map<any, any> = new Map([[String.fromCharCode(121,95,53,95,104,97,115,104,116,97,103,0),String.fromCharCode(104,95,50,56,95,104,97,114,109,111,110,105,99,0)], [String.fromCharCode(111,95,53,50,95,102,97,115,116,115,115,105,109,0),String.fromCharCode(115,116,114,117,99,116,117,114,97,108,95,119,95,53,49,0)], [String.fromCharCode(107,95,51,57,95,112,114,101,98,117,102,0),String.fromCharCode(104,101,108,112,95,116,95,52,48,0)]]);
       let reactnativejsH = String.fromCharCode(101,120,116,114,99,95,57,95,49,51,0);
      for (let y = 0; y < 2; y++) {
         iconwechatV = new Map([[`${iconwechatV.size}`, iconwechatV.size]]);
      }
          let injuryq = String.fromCharCode(111,95,55,57,95,109,101,115,115,97,103,105,110,103,0);
          let schedulerw: Map<any, any> = new Map([[String.fromCharCode(98,95,57,50,95,115,101,110,116,0),703], [String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,95,113,95,53,56,0),3]]);
         iconwechatV = new Map([[`${schedulerw.size}`, (String.fromCharCode(101,0) == injuryq ? injuryq.length : schedulerw.size)]]);
          let checkboxt = 2.0;
         stationK = new Map([[`${iconwechatV.size}`, 3 + iconwechatV.size]]);
         checkboxt += 2 & parseInt(`${checkboxt}`);
       let z_managerg = 2.0;
       let customI = 0.0;
          let pressureE = String.fromCharCode(101,118,101,114,121,95,113,95,51,54,0);
          let orangeclocke: Array<any> = [316, 6];
         reactnativejsH = `${2 ^ orangeclocke.length}`;
         pressureE = `${pressureE.length / 2}`;
         orangeclocke = [3 * pressureE.length];
         z_managerg /= Math.max(1, 3);
      let iconbackwhitec = z_managerg <= 6682424.0;
      do {
         z_managerg *= iconwechatV.size | 3;
         if (iconbackwhitec) {
            break;
         }
      } while (iconbackwhitec && (5.8 > z_managerg));
          let memberA = 5.0;
          let viewsR: Array<any> = [477, 806];
         stationK.set(`${customI}`, parseInt(`${z_managerg}`));
         memberA -= parseFloat(`${2}`);
         viewsR.push(parseInt(`${memberA}`));
       let backiconZ = String.fromCharCode(105,95,52,54,95,112,101,110,99,105,108,0);
       let nativemodulem = String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,95,100,95,53,54,0);
      sendE = `${3 % (Math.max(2, stationK.size))}`;
   for (let m = 0; m < 2; m++) {
      headerY += parseFloat(`${detailS.length}`);
   }
   if (e_centerh.length == parseInt(`${overlayL}`)) {
      overlayL += iconeditL;
   }
      headerY /= Math.max(1, (parseFloat(`${(minimizez ? 1 : 2) % (Math.max(parseInt(`${headerY}`), 5))}`)));
   let tumbnails = eactX == String.fromCharCode(103,57,101,116,112,119,0);
   do {
      eactX = "1";
      if (tumbnails) {
         break;
      }
   } while ((eactX.includes(e_centerh)) && tumbnails);
   if (e_centerh == String.fromCharCode(84,0) && detailS.length > 4) {
      detailS = `${(parseInt(`${headerY}`) - (minimizez ? 3 : 3))}`;
   }

    setRefreshing(true);

   let blacka = description_uy <= 8237862.0;
   do {
      description_uy /= Math.max(logoutc.length + 1, 3);
      if (blacka) {
         break;
      }
   } while (blacka && (description_uy >= sendE.length));
      minimizez = detailS.includes(`${iconeditL}`);
   let klevinC = logoutc.length >= 5548913;
   do {
      logoutc = `${((minimizez ? 4 : 5) & parseInt(`${headerY}`))}`;
      if (klevinC) {
         break;
      }
   } while ((!e_centerh.endsWith(`${logoutc.length}`)) && klevinC);
       let become6 = String.fromCharCode(111,95,53,54,95,98,117,105,108,100,0);
       let nbatrophyF = false;
         nbatrophyF = become6.includes(`${nbatrophyF}`);
          let networkz: Array<any> = [411, 539, 588];
          let sharedf: Array<any> = [147, 201, 409];
         nbatrophyF = networkz.length > sharedf.length;
      for (let l = 0; l < 2; l++) {
          let basketballA: Array<any> = [String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,95,113,95,57,55,0), String.fromCharCode(98,97,115,105,99,95,57,95,48,0)];
          let redgoalJ = String.fromCharCode(99,95,55,51,95,115,117,98,115,101,113,117,101,110,99,101,0);
          let navigationP = 5.0;
          let greyarrowupH = String.fromCharCode(105,118,97,114,115,95,114,95,52,52,0);
          let static_0y6 = String.fromCharCode(115,116,121,112,95,101,95,56,53,0);
         become6 += `${((nbatrophyF ? 4 : 5) % 1)}`;
         basketballA = [redgoalJ.length + 1];
         redgoalJ = `${(String.fromCharCode(122,0) == static_0y6 ? parseInt(`${navigationP}`) : static_0y6.length)}`;
         navigationP *= 3;
         greyarrowupH = `${basketballA.length}`;
      }
         nbatrophyF = become6.length < 27 || !nbatrophyF;
         nbatrophyF = !nbatrophyF;
      if (5 < become6.length) {
         nbatrophyF = (43 >= (become6.length >> (Math.min(5, Math.abs((!nbatrophyF ? 43 : become6.length))))));
      }
      basel >>= Math.min(Math.abs(2 * iconeditL), 4);
   while (2.5 >= (reactnativejse / 3.17) || (reactnativejse / (Math.max(3.17, 9))) >= 5.61) {
      reactnativejse += e_centerh.length & parseInt(`${headerY}`);
      break;
   }
      reactnativejse -= 2;
       let filterE = 3.0;
      for (let s = 0; s < 3; s++) {
         filterE += parseFloat(`${parseInt(`${filterE}`) & 1}`);
      }
      let tempC = filterE <= 5510231.0;
      do {
         filterE += parseFloat(`${3 % (Math.max(parseInt(`${filterE}`), 3))}`);
         if (tempC) {
            break;
         }
      } while (tempC && ((filterE + 1.35) == 2.4 && (1.35 + filterE) == 1.46));
      for (let n = 0; n < 1; n++) {
         filterE /= Math.max(4, parseFloat(`${3}`));
      }
      minimizez = reactnativejse >= 14.88 && detailS == String.fromCharCode(82,0);
       let executorp = 1;
          let playlistI = 5;
         executorp -= executorp / (Math.max(3, 10));
         playlistI |= playlistI;
      while (5 < (executorp << (Math.min(2, Math.abs(executorp))))) {
         executorp &= executorp / (Math.max(executorp, 6));
         break;
      }
       let basketballR: Map<any, any> = new Map([[String.fromCharCode(119,105,110,101,114,114,110,111,95,49,95,53,54,0),426], [String.fromCharCode(97,109,111,117,110,116,115,95,113,95,50,0),221]]);
      logoutc = `${(String.fromCharCode(69,0) == reducerD ? executorp : reducerD.length)}`;
   let fileX = 8151606.0 >= description_uy;
   do {
       let whatsappw = String.fromCharCode(109,95,53,51,95,97,100,100,99,111,110,115,116,0);
       let profileV = true;
          let completen = String.fromCharCode(105,95,52,50,95,112,108,97,121,0);
          let mbridgek = false;
          let alertF = String.fromCharCode(103,95,51,55,95,110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,0);
         profileV = completen.length == 61;
         completen += `${alertF.length >> (Math.min(Math.abs(1), 2))}`;
         mbridgek = alertF.includes(`${mbridgek}`);
       let styles7: Array<any> = [756, 620, 810];
      while (styles7.length < 2) {
         profileV = !profileV;
         break;
      }
      for (let b = 0; b < 3; b++) {
          let transfera = 4.0;
         styles7 = [(parseInt(`${transfera}`) + (profileV ? 2 : 3))];
      }
      for (let g = 0; g < 2; g++) {
          let updatest = 3.0;
          let neonc = String.fromCharCode(101,121,99,104,97,105,110,95,103,95,53,55,0);
          let pagination1: Array<any> = [534, 866];
          let loginsuccess1 = 4.0;
          let modalV: Array<any> = [String.fromCharCode(106,95,55,55,95,112,97,114,109,115,0), String.fromCharCode(111,99,115,112,105,100,95,107,95,51,57,0)];
         whatsappw = `${parseInt(`${updatest}`) * 2}`;
         updatest *= modalV.length >> (Math.min(Math.abs(3), 4));
         neonc += `${modalV.length}`;
         pagination1 = [1 + neonc.length];
         loginsuccess1 -= parseFloat(`${neonc.length + pagination1.length}`);
      }
       let listU = 1.0;
       let skipm = 4.0;
      description_uy += parseInt(`${reactnativejse}`);
      if (fileX) {
         break;
      }
   } while ((1.37 <= (description_uy / 4.43) || (description_uy * 4.43) <= 2.28) && fileX);
      overlayL *= parseInt(`${headerY}`);
   let c_lockj = phoneZ == String.fromCharCode(56,109,102,0);
   do {
       let whitetickr: Map<any, any> = new Map([[String.fromCharCode(103,114,97,100,108,101,95,104,95,54,49,0),612], [String.fromCharCode(112,95,57,57,95,115,116,114,101,97,109,0),695]]);
       let popup1 = String.fromCharCode(97,116,116,101,109,112,116,95,51,95,57,50,0);
       let type_fd = String.fromCharCode(120,95,53,50,95,114,101,115,116,114,105,99,116,105,111,110,115,0);
         whitetickr.set(popup1, type_fd.length >> (Math.min(Math.abs(3), 4)));
      while (4 > (2 | type_fd.length) && 1 > (2 | type_fd.length)) {
          let libyogaw = String.fromCharCode(109,97,110,97,103,101,115,95,49,95,57,51,0);
          let yings = false;
          let bodanJ = String.fromCharCode(97,99,100,115,112,95,104,95,53,50,0);
          let spec0 = String.fromCharCode(119,95,54,53,95,109,115,101,112,115,110,114,0);
         type_fd = `${((yings ? 3 : 5) | 1)}`;
         libyogaw = `${(libyogaw == String.fromCharCode(81,0) ? libyogaw.length : bodanJ.length)}`;
         yings = bodanJ.length <= libyogaw.length;
         spec0 = `${bodanJ.length}`;
         break;
      }
      for (let z = 0; z < 1; z++) {
         type_fd += `${whitetickr.size}`;
      }
         type_fd += `${popup1.length >> (Math.min(Math.abs(2), 1))}`;
      for (let s = 0; s < 3; s++) {
          let iconbellactivef = 0;
          let mbnatives: Map<any, any> = new Map([[String.fromCharCode(115,101,114,118,101,114,95,56,95,49,54,0),69], [String.fromCharCode(99,108,99,112,95,114,95,54,53,0),282]]);
         popup1 = "2";
         iconbellactivef -= iconbellactivef % (Math.max(9, mbnatives.size));
         mbnatives = new Map([[`${mbnatives.size}`, 2]]);
      }
         type_fd = `${whitetickr.size}`;
       let analyticD: Array<any> = [43, 495];
      if (3 < (5 * whitetickr.size) || 5 < (whitetickr.size * popup1.length)) {
         whitetickr.set(type_fd, analyticD.length << (Math.min(type_fd.length, 3)));
      }
         whitetickr = new Map([[`${analyticD.length}`, popup1.length]]);
      phoneZ = `${2 | type_fd.length}`;
      if (c_lockj) {
         break;
      }
   } while ((1 <= phoneZ.length) && c_lockj);
   for (let q = 0; q < 3; q++) {
      sendE += `${parseInt(`${description_uy}`)}`;
   }
    await refreshUserState();

       let activeZ = 4.0;
       let episodesY = String.fromCharCode(115,95,50,54,95,115,105,109,112,108,101,119,114,105,116,101,0);
      while ((parseInt(`${activeZ}`) / 4) <= 5 || 4 <= (parseInt(`${activeZ}`) / (Math.max(8, episodesY.length)))) {
         episodesY = `${parseInt(`${activeZ}`) >> (Math.min(Math.abs(3), 5))}`;
         break;
      }
          let runtimeV = String.fromCharCode(112,95,54,57,95,97,112,112,101,110,100,101,100,0);
          let umengl: Array<any> = [844, 924];
          let descl: Array<any> = [718, 723];
         episodesY += `${umengl.length}`;
         runtimeV += `${2 / (Math.max(1, runtimeV.length))}`;
         umengl.push((runtimeV == String.fromCharCode(108,0) ? descl.length : runtimeV.length));
         descl.push(runtimeV.length);
       let searchc: Array<any> = [784, 527, 363];
       let schedulere: Array<any> = [874, 102, 628];
         schedulere = [parseInt(`${activeZ}`)];
      for (let z = 0; z < 1; z++) {
          let gpay3 = true;
          let libffmpegkitX = 3;
          let hookK = String.fromCharCode(104,95,51,55,95,104,97,110,100,111,102,102,0);
         schedulere.push(hookK.length / 2);
         gpay3 = libffmpegkitX > libffmpegkitX;
      }
         episodesY += `${episodesY.length - 3}`;
      reducerD += `${((backgroundV ? 4 : 5))}`;
   let confirmationO = 8315114 <= detailS.length;
   do {
      detailS += `${iconeditL / (Math.max(1, 2))}`;
      if (confirmationO) {
         break;
      }
   } while (confirmationO && (detailS.length >= logoutc.length));
   while (!index_.endsWith(`${minimizez}`)) {
      index_ += `${(String.fromCharCode(108,0) == phoneZ ? index_.length : phoneZ.length)}`;
      break;
   }
      reducerD += `${basel * parseInt(`${reactnativejse}`)}`;
   for (let p = 0; p < 2; p++) {
      headerY /= Math.max(1, parseFloat(`${parseInt(`${headerY}`)}`));
   }
   while (e_centerh.length < 5) {
      sendE = `${((minimizez ? 4 : 5) / (Math.max(4, parseInt(`${overlayL}`))))}`;
      break;
   }
      headerY += parseFloat(`${logoutc.length | parseInt(`${overlayL}`)}`);
   while ((basel ^ 1) <= 1) {
      minimizez = 23.85 <= overlayL;
      break;
   }
   while (reducerD.length >= 1) {
      sendE = `${3 >> (Math.min(Math.abs(parseInt(`${headerY}`)), 3))}`;
      break;
   }
      index_ += "2";
      phoneZ = `${e_centerh.length * parseInt(`${description_uy}`)}`;
      iconeditL <<= Math.min(4, Math.abs(3 * parseInt(`${reactnativejse}`)));
    setRefreshing(false);
    
  };

  const handleConfirm = () => {
       let predictionactivez = 5.0;
    let sideJ = String.fromCharCode(114,95,56,95,112,97,100,100,105,110,103,0);
    let fullK = false;
    let referrerF: Map<any, any> = new Map([[String.fromCharCode(100,95,55,55,95,105,110,115,117,102,102,105,99,105,101,110,116,0),true ], [String.fromCharCode(101,95,57,48,95,100,115,99,112,0),false ], [String.fromCharCode(109,95,48,95,98,117,116,116,101,114,0),false ]]);
    let malaysiaL: Array<any> = [3, 545, 578];
    let inviteQ = 4.0;
    let transferX: Map<any, any> = new Map([[String.fromCharCode(104,113,100,115,112,95,109,95,53,52,0),false ], [String.fromCharCode(99,111,108,111,114,101,100,95,109,95,56,57,0),false ]]);
    let templateprocessor4 = String.fromCharCode(99,111,109,109,105,116,116,101,100,95,99,95,50,50,0);
    let logop = String.fromCharCode(106,95,53,55,95,115,101,103,116,114,101,101,0);
    let package_g5: Array<any> = [583, 895];
    let bottomA = 0.0;
    let networkz = String.fromCharCode(114,101,110,111,114,109,101,95,50,95,55,51,0);
    let show6 = 0.0;
      transferX = new Map([[`${transferX.size}`, (logop == String.fromCharCode(100,0) ? logop.length : transferX.size)]]);
   while (networkz != String.fromCharCode(101,0) && logop == String.fromCharCode(90,0)) {
      networkz = `${logop.length}`;
      break;
   }
       let canvasp: Map<any, any> = new Map([[String.fromCharCode(117,95,50,57,95,100,101,116,101,99,116,99,108,111,115,101,0),913], [String.fromCharCode(117,116,102,95,109,95,56,56,0),841], [String.fromCharCode(111,95,56,48,95,120,120,104,97,115,104,0),77]]);
       let lineW = false;
         canvasp.set(`${lineW}`, canvasp.size % 2);
      for (let b = 0; b < 3; b++) {
         lineW = null == canvasp.get(`${lineW}`);
      }
         lineW = canvasp.size >= 59 || lineW;
      for (let g = 0; g < 1; g++) {
         canvasp.set(`${lineW}`, ((lineW ? 3 : 1) - 2));
      }
      if (lineW) {
         lineW = canvasp.size >= 9;
      }
      while (!lineW) {
          let orangem = String.fromCharCode(103,95,55,57,95,100,101,116,101,99,116,105,111,110,0);
          let libruntimeexecutorR: Array<any> = [204, 71];
          let heart7: Array<any> = [217, 347, 662];
          let libavutil5 = 0.0;
          let field6 = 0.0;
         lineW = 83 <= libruntimeexecutorR.length;
         orangem = `${parseInt(`${libavutil5}`)}`;
         libruntimeexecutorR.push(3);
         heart7 = [orangem.length];
         field6 /= Math.max(1, parseFloat(`${parseInt(`${libavutil5}`)}`));
         break;
      }
      transferX = new Map([[`${lineW}`, logop.length]]);
   let reducerU = package_g5.length <= 7750068;
   do {
      package_g5.push(referrerF.size % 3);
      if (reducerU) {
         break;
      }
   } while ((2.25 >= (bottomA / (Math.max(package_g5.length, 1))) || (bottomA / 2.25) >= 4.27) && reducerU);
   while ((transferX.size - 4) < 3 && (networkz.length - 4) < 5) {
       let rncoreC = String.fromCharCode(116,95,55,53,95,102,114,101,113,0);
      while (!rncoreC.startsWith(rncoreC)) {
         rncoreC += `${rncoreC.length % (Math.max(rncoreC.length, 1))}`;
         break;
      }
      for (let c = 0; c < 1; c++) {
          let listr: Array<any> = [String.fromCharCode(98,101,97,116,105,110,103,95,112,95,51,50,0), String.fromCharCode(99,97,116,101,103,111,114,105,101,115,95,122,95,50,50,0)];
          let hooksD = 5.0;
         rncoreC = `${rncoreC.length}`;
         listr.push(1 % (Math.max(1, listr.length)));
         hooksD += 3;
      }
      for (let x = 0; x < 1; x++) {
         rncoreC = `${3 + rncoreC.length}`;
      }
      networkz += `${parseInt(`${bottomA}`) >> (Math.min(Math.abs(3), 5))}`;
      break;
   }
   for (let h = 0; h < 2; h++) {
       let backiconr: Map<any, any> = new Map([[String.fromCharCode(97,95,54,53,95,117,115,108,116,0),738], [String.fromCharCode(111,110,121,120,95,102,95,52,0),186], [String.fromCharCode(104,95,50,52,95,116,105,109,101,119,97,105,116,0),295]]);
       let analyticH = 2.0;
         backiconr.set(`${analyticH}`, 2 << (Math.min(1, Math.abs(parseInt(`${analyticH}`)))));
          let customB = String.fromCharCode(107,108,97,121,116,110,95,113,95,49,49,0);
          let libflipperW: Map<any, any> = new Map([[String.fromCharCode(117,95,56,51,95,109,110,101,109,111,110,105,99,0),869], [String.fromCharCode(104,95,49,56,95,114,101,110,100,101,114,97,98,108,101,0),64]]);
          let analytics6 = String.fromCharCode(122,95,51,95,114,101,97,100,0);
         analyticH *= parseFloat(`${2 ^ backiconr.size}`);
         customB = `${libflipperW.size + customB.length}`;
         libflipperW = new Map([[`${libflipperW.size}`, libflipperW.size]]);
         analytics6 = `${libflipperW.size - customB.length}`;
         analyticH += parseFloat(`${backiconr.size}`);
      while (backiconr.size > 4) {
          let pushr = String.fromCharCode(114,101,109,97,105,110,95,112,95,51,54,0);
          let libturbomodulejsijniF = String.fromCharCode(101,95,57,95,112,117,114,112,111,115,101,0);
          let stringsv = 5;
          let fastforward_ = 0.0;
         backiconr.set(`${analyticH}`, parseInt(`${analyticH}`) << (Math.min(libturbomodulejsijniF.length, 1)));
         pushr = `${3 >> (Math.min(Math.abs(parseInt(`${fastforward_}`)), 1))}`;
         libturbomodulejsijniF = `${stringsv}`;
         stringsv <<= Math.min(4, Math.abs(parseInt(`${fastforward_}`) | 2));
         break;
      }
      for (let k = 0; k < 2; k++) {
         backiconr = new Map([[`${backiconr.size}`, backiconr.size]]);
      }
         analyticH += parseFloat(`${parseInt(`${analyticH}`)}`);
      inviteQ /= Math.max(4, logop.length);
   }
   for (let j = 0; j < 1; j++) {
       let heartX: Map<any, any> = new Map([[String.fromCharCode(120,95,56,49,95,117,100,105,111,0),730], [String.fromCharCode(120,95,52,52,95,120,112,114,118,0),403], [String.fromCharCode(112,95,53,95,97,97,99,99,111,100,101,114,0),684]]);
       let arrowrightW = String.fromCharCode(117,95,57,53,95,99,108,101,97,114,97,108,108,0);
       let history_: Array<any> = [314, 923];
          let libavutilo = 5.0;
          let graph2 = String.fromCharCode(113,95,50,50,95,99,104,101,99,107,109,109,0);
         heartX.set(`${libavutilo}`, graph2.length * 1);
      for (let u = 0; u < 1; u++) {
         arrowrightW = `${history_.length >> (Math.min(Math.abs(3), 1))}`;
      }
       let username8: Map<any, any> = new Map([[String.fromCharCode(101,120,112,101,99,116,95,113,95,55,53,0),false ], [String.fromCharCode(105,95,49,55,95,112,111,110,103,0),false ], [String.fromCharCode(100,105,103,101,115,116,95,106,95,57,56,0),false ]]);
       let gifgoalU = 2.0;
       let fillb = 2.0;
      let projectF = heartX.size <= 8250139;
      do {
         heartX.set(arrowrightW, arrowrightW.length);
         if (projectF) {
            break;
         }
      } while ((Array.from(heartX.keys()).includes(`${fillb}`)) && projectF);
      if (1 <= (1 << (Math.min(4, history_.length))) && 1 <= (arrowrightW.length << (Math.min(2, history_.length)))) {
         arrowrightW += `${history_.length | username8.size}`;
      }
          let reducerd = 3.0;
         gifgoalU /= Math.max(parseFloat(`${2}`), 4);
         reducerd *= 2;
      let dangerv = 5560166 <= history_.length;
      do {
         history_ = [2];
         if (dangerv) {
            break;
         }
      } while ((!Array.from(username8.keys()).includes(`${history_.length}`)) && dangerv);
         username8.set(`${username8.size}`, 2 >> (Math.min(5, Math.abs(username8.size))));
      malaysiaL.push(networkz.length % 1);
   }
   if ((sideJ.length % (Math.max(5, 8))) >= 3) {
      referrerF.set(`${referrerF.size}`, 3 >> (Math.min(4, Math.abs(transferX.size))));
   }
   for (let w = 0; w < 3; w++) {
      package_g5.push(2);
   }

    setIsDialogOpen(false);

      malaysiaL = [parseInt(`${bottomA}`) + referrerF.size];
       let graphH = 2.0;
       let icont: Map<any, any> = new Map([[String.fromCharCode(105,95,49,51,95,101,105,116,104,101,114,0),171], [String.fromCharCode(110,111,115,105,109,100,95,114,95,54,48,0),648]]);
      if (!Array.from(icont.keys()).includes(`${graphH}`)) {
          let tempU: Array<any> = [951, 722];
          let langk = String.fromCharCode(101,120,116,101,110,115,105,98,108,101,95,111,95,52,53,0);
          let mbbidq = String.fromCharCode(106,95,50,95,112,114,101,100,120,108,0);
          let projectm = 2;
         graphH += parseFloat(`${3}`);
         tempU = [langk.length];
         langk += "3";
         mbbidq += `${mbbidq.length | projectm}`;
         projectm <<= Math.min(Math.abs((langk == String.fromCharCode(108,0) ? projectm : langk.length)), 5);
      }
         graphH /= Math.max(3, parseFloat(`${parseInt(`${graphH}`) * 3}`));
      for (let d = 0; d < 3; d++) {
         icont = new Map([[`${icont.size}`, parseInt(`${graphH}`) * icont.size]]);
      }
         graphH *= parseFloat(`${parseInt(`${graphH}`) % (Math.max(1, 5))}`);
          let notificationfillemptyS: Array<any> = [481, 47];
          let wind_ = true;
         graphH -= parseFloat(`${parseInt(`${graphH}`)}`);
         notificationfillemptyS.push(1);
         wind_ = notificationfillemptyS.length < 86 || wind_;
          let helperC: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,105,95,57,0),482], [String.fromCharCode(114,101,99,111,110,105,110,116,114,97,120,95,97,95,55,51,0),269]]);
          let launcherV = String.fromCharCode(119,114,106,112,103,99,111,109,95,121,95,52,52,0);
          let libcxxcomponentsA = true;
         graphH -= parseFloat(`${icont.size ^ 3}`);
         helperC = new Map([[`${helperC.size}`, (1 - (libcxxcomponentsA ? 2 : 4))]]);
         launcherV += "3";
         libcxxcomponentsA = launcherV.length > 8 || libcxxcomponentsA;
      predictionactivez -= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${predictionactivez}`)), 5))}`);
       let textinputc = 4.0;
       let greenY: Map<any, any> = new Map([[String.fromCharCode(117,116,102,116,111,95,119,95,54,49,0),390], [String.fromCharCode(114,101,115,111,108,118,95,98,95,51,52,0),198], [String.fromCharCode(109,95,49,54,95,108,97,118,102,117,116,105,108,115,0),389]]);
       let fastforwardD: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,118,101,114,95,103,95,50,51,0),false ], [String.fromCharCode(114,95,53,50,95,102,114,97,109,101,104,97,115,104,0),true ], [String.fromCharCode(115,97,109,112,108,101,102,109,116,95,101,95,51,48,0),false ]]);
      let star4 = 6960861 >= greenY.size;
      do {
         greenY = new Map([[`${greenY.size}`, 3]]);
         if (star4) {
            break;
         }
      } while (((5.73 * textinputc) <= 4.36) && star4);
       let statistics0 = String.fromCharCode(122,95,54,55,95,118,101,114,115,105,111,110,0);
      let philippinest = textinputc >= 7435928.0;
      do {
         textinputc /= Math.max(2, parseFloat(`${parseInt(`${textinputc}`)}`));
         if (philippinest) {
            break;
         }
      } while (((textinputc - 2.71) == 5.38 && (parseFloat(`${greenY.size}`) - textinputc) == 2.71) && philippinest);
         fastforwardD.set(`${textinputc}`, statistics0.length & parseInt(`${textinputc}`));
          let heartV = 0;
          let whistleorange0 = String.fromCharCode(101,95,56,51,95,97,100,100,105,110,103,0);
         textinputc += parseFloat(`${whistleorange0.length << (Math.min(Math.abs(1), 3))}`);
         heartV &= heartV;
         whistleorange0 = `${heartV}`;
         fastforwardD = new Map([[`${fastforwardD.size}`, statistics0.length]]);
      if (5 == fastforwardD.size) {
         greenY = new Map([[statistics0, 2 | statistics0.length]]);
      }
         greenY.set(`${textinputc}`, parseInt(`${textinputc}`));
          let e_lockr = 5;
         textinputc /= Math.max(5, parseFloat(`${parseInt(`${textinputc}`) - fastforwardD.size}`));
         e_lockr ^= 3;
      logop = "1";
   while ((predictionactivez * 4.62) < 5.3) {
      predictionactivez += parseFloat(`${2 + templateprocessor4.length}`);
      break;
   }
   while (!fullK && 5 == (3 * malaysiaL.length)) {
      fullK = transferX.size == 66 || predictionactivez == 22.66;
      break;
   }
      logop = `${package_g5.length - malaysiaL.length}`;
      package_g5 = [1];
       let yingI = false;
      for (let s = 0; s < 3; s++) {
         yingI = !yingI;
      }
       let styles1: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,117,114,101,95,116,95,55,57,0),551], [String.fromCharCode(117,110,115,101,110,116,95,119,95,51,54,0),902], [String.fromCharCode(113,95,54,52,95,97,118,101,114,114,111,114,0),274]]);
         yingI = styles1.get(`${yingI}`) == null;
      inviteQ -= parseInt(`${bottomA}`) | 3;
      malaysiaL = [(3 ^ (fullK ? 2 : 1))];
    setIsVisible(false);

   let middlebrightnessD = malaysiaL.length <= 9552872;
   do {
      malaysiaL = [parseInt(`${inviteQ}`)];
      if (middlebrightnessD) {
         break;
      }
   } while ((1 == (sideJ.length ^ 2)) && middlebrightnessD);
      logop += `${(String.fromCharCode(80,0) == sideJ ? transferX.size : sideJ.length)}`;
   let temperaturev = 6733665 >= networkz.length;
   do {
      networkz += `${parseInt(`${bottomA}`)}`;
      if (temperaturev) {
         break;
      }
   } while (temperaturev && (logop == String.fromCharCode(86,0)));
   for (let v = 0; v < 3; v++) {
      templateprocessor4 = `${3 << (Math.min(5, malaysiaL.length))}`;
   }
      package_g5 = [1];
   if ((1 + networkz.length) == 1 || 4 == (networkz.length % 1)) {
       let tinit_wb9 = String.fromCharCode(116,105,108,101,115,95,49,95,52,0);
       let minimizeA = String.fromCharCode(98,95,50,56,95,116,111,110,103,117,101,0);
       let with_1_l = String.fromCharCode(114,100,102,116,95,112,95,53,53,0);
       let iconstarS: Map<any, any> = new Map([[String.fromCharCode(109,100,97,116,101,95,55,95,55,52,0),false ], [String.fromCharCode(98,95,55,53,95,114,101,118,105,101,119,115,0),false ], [String.fromCharCode(108,95,55,55,95,100,105,97,108,108,101,100,0),false ]]);
       let networkU = 4.0;
       let interstitialm = 1.0;
      if (4 < (iconstarS.size * with_1_l.length) && (with_1_l.length * iconstarS.size) < 4) {
          let heartT = 4.0;
          let librrcV = true;
          let dependencies4 = 2.0;
          let libsgcorej = String.fromCharCode(116,95,51,49,95,101,120,116,101,110,100,101,100,0);
         iconstarS = new Map([[`${interstitialm}`, 1 | libsgcorej.length]]);
         heartT /= Math.max(2, (parseFloat(`${(librrcV ? 3 : 4) % (Math.max(parseInt(`${dependencies4}`), 7))}`)));
         librrcV = librrcV && 56.88 >= heartT;
         dependencies4 += parseFloat(`${parseInt(`${heartT}`)}`);
         libsgcorej += `${(parseInt(`${dependencies4}`) | (librrcV ? 5 : 4))}`;
      }
         with_1_l = `${parseInt(`${interstitialm}`)}`;
      for (let u = 0; u < 3; u++) {
          let gmailc: Array<any> = [String.fromCharCode(116,108,111,103,95,119,95,54,55,0), String.fromCharCode(106,95,54,51,95,97,99,114,111,110,121,109,115,0), String.fromCharCode(115,95,53,49,95,112,101,110,100,105,110,103,0)];
         iconstarS = new Map([[tinit_wb9, (String.fromCharCode(107,0) == with_1_l ? tinit_wb9.length : with_1_l.length)]]);
         gmailc.push(1 << (Math.min(1, gmailc.length)));
      }
      let scrollviewj = 5333637 <= minimizeA.length;
      do {
         minimizeA += `${parseInt(`${interstitialm}`)}`;
         if (scrollviewj) {
            break;
         }
      } while ((with_1_l.length < 4) && scrollviewj);
      let libsgcoreF = 8503140 <= minimizeA.length;
      do {
         minimizeA = `${with_1_l.length}`;
         if (libsgcoreF) {
            break;
         }
      } while (libsgcoreF && (2 >= minimizeA.length));
      for (let n = 0; n < 1; n++) {
         with_1_l += `${parseInt(`${networkU}`)}`;
      }
      for (let f = 0; f < 2; f++) {
         iconstarS.set(`${tinit_wb9}`, (tinit_wb9 == String.fromCharCode(70,0) ? iconstarS.size : tinit_wb9.length));
      }
      if (2 == (1 >> (Math.min(1, with_1_l.length)))) {
          let review2: Map<any, any> = new Map([[String.fromCharCode(111,117,116,98,111,117,110,100,95,116,95,55,55,0),true ], [String.fromCharCode(104,105,103,104,108,105,103,104,116,115,95,48,95,51,55,0),false ]]);
          let libfollyz = false;
          let private_fI = false;
          let morek: Array<any> = [674, 891];
          let resultf = true;
         interstitialm += iconstarS.size;
         review2 = new Map([[`${review2.size}`, review2.size / 3]]);
         libfollyz = morek.length > 97 && !libfollyz;
         private_fI = review2.size == 2;
         morek = [2 / (Math.max(5, review2.size))];
         resultf = (libfollyz ? private_fI : !libfollyz);
      }
      if (interstitialm < with_1_l.length) {
         with_1_l = `${minimizeA.length}`;
      }
       let launcht = String.fromCharCode(102,95,51,56,95,99,97,116,97,112,117,108,116,0);
          let networkY = true;
          let downloaded2 = String.fromCharCode(112,95,52,48,95,106,99,111,110,102,105,103,105,110,116,0);
         tinit_wb9 = `${(minimizeA == String.fromCharCode(74,0) ? minimizeA.length : parseInt(`${interstitialm}`))}`;
         networkY = networkY && downloaded2.length < 12;
         downloaded2 += `${(downloaded2.length & (networkY ? 5 : 2))}`;
      networkz = "3";
   }
   while (malaysiaL.length < referrerF.size) {
      referrerF.set(templateprocessor4, (String.fromCharCode(55,0) == templateprocessor4 ? parseInt(`${bottomA}`) : templateprocessor4.length));
      break;
   }
   if (malaysiaL.includes(predictionactivez)) {
      malaysiaL = [parseInt(`${inviteQ}`) | 3];
   }
      sideJ += `${3 - malaysiaL.length}`;
    handleRefresh();

   let mathj = fullK ? !fullK : fullK;
   do {
      fullK = 53 < sideJ.length;
      if (mathj) {
         break;
      }
   } while ((!fullK) && mathj);
      predictionactivez *= parseFloat(`${referrerF.size - parseInt(`${predictionactivez}`)}`);
      fullK = ((sideJ.length - (fullK ? 29 : sideJ.length)) > 29);
   if (2.47 >= bottomA) {
       let selectS = String.fromCharCode(119,95,57,53,95,110,118,101,110,99,0);
       let uimanager0 = String.fromCharCode(122,95,52,49,95,107,101,121,115,112,101,99,0);
         selectS += `${uimanager0.length | selectS.length}`;
      if (uimanager0.length >= selectS.length) {
         uimanager0 += `${selectS.length % 1}`;
      }
          let jcopy_i2f = 5.0;
          let weatheru: Map<any, any> = new Map([[String.fromCharCode(109,95,52,48,95,102,101,97,116,117,114,101,100,0),553], [String.fromCharCode(111,95,49,50,95,105,110,118,111,107,101,0),230], [String.fromCharCode(101,120,112,105,114,101,100,95,50,95,53,54,0),714]]);
         uimanager0 = `${uimanager0.length % (Math.max(1, 4))}`;
         jcopy_i2f *= parseInt(`${jcopy_i2f}`) + 1;
         weatheru = new Map([[`${weatheru.size}`, parseInt(`${jcopy_i2f}`)]]);
         selectS += `${uimanager0.length ^ 2}`;
      let disconnectedF = uimanager0.length >= 9378603;
      do {
         uimanager0 = `${uimanager0.length & 2}`;
         if (disconnectedF) {
            break;
         }
      } while ((uimanager0.length <= 5) && disconnectedF);
      for (let f = 0; f < 3; f++) {
         uimanager0 += "3";
      }
      bottomA *= 2 >> (Math.min(5, selectS.length));
   }
       let mbbannerX = 5.0;
      while ((mbbannerX / (Math.max(2, mbbannerX))) >= 2.39 && (2.39 / (Math.max(6, mbbannerX))) >= 3.75) {
          let bellk = true;
          let watchr = 5.0;
          let renewu = String.fromCharCode(117,95,57,55,95,115,97,99,107,0);
          let backwardK = String.fromCharCode(105,95,50,54,95,105,110,105,116,105,97,108,105,122,101,114,0);
          let halffieldimagee = 2;
         mbbannerX /= Math.max(parseFloat(`${2 / (Math.max(10, renewu.length))}`), 5);
         bellk = watchr >= 61.78;
         watchr += parseFloat(`${halffieldimagee}`);
         renewu = `${parseInt(`${watchr}`) / 3}`;
         backwardK += "3";
         halffieldimagee += halffieldimagee;
         break;
      }
      for (let e = 0; e < 1; e++) {
         mbbannerX /= Math.max(parseFloat(`${1 - parseInt(`${mbbannerX}`)}`), 1);
      }
         mbbannerX -= parseFloat(`${parseInt(`${mbbannerX}`) / (Math.max(parseInt(`${mbbannerX}`), 8))}`);
      bottomA += templateprocessor4.length;
      templateprocessor4 += `${networkz.length % 1}`;
      fullK = 3 >= transferX.size;
      referrerF.set(`${predictionactivez}`, 3);
       let watchL = String.fromCharCode(104,101,97,100,112,104,111,110,101,95,54,95,55,51,0);
       let mbbidk: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,100,95,98,95,56,53,0),true ], [String.fromCharCode(115,116,121,108,101,100,95,109,95,49,54,0),true ], [String.fromCharCode(120,95,49,95,116,105,109,101,111,117,116,115,0),false ]]);
      if (2 == watchL.length) {
         mbbidk.set(watchL, mbbidk.size);
      }
      if (!watchL.startsWith(`${mbbidk.size}`)) {
         mbbidk = new Map([[`${mbbidk.size}`, (String.fromCharCode(53,0) == watchL ? watchL.length : mbbidk.size)]]);
      }
      for (let t = 0; t < 1; t++) {
         mbbidk.set(watchL, 3 + watchL.length);
      }
      if (3 <= (mbbidk.size >> (Math.min(Math.abs(1), 4))) || 4 <= (watchL.length >> (Math.min(Math.abs(1), 2)))) {
          let tumbnailU = 3.0;
          let optionso = String.fromCharCode(112,95,53,57,95,100,97,116,97,98,97,115,101,0);
          let libreactnativejniy = 3.0;
          let watchnowbgY = true;
          let nbatrophyO = true;
         mbbidk = new Map([[`${watchnowbgY}`, parseInt(`${libreactnativejniy}`) | 3]]);
         tumbnailU -= (parseFloat(`${(nbatrophyO ? 3 : 4) ^ 2}`));
         optionso += `${((nbatrophyO ? 5 : 2) - parseInt(`${tumbnailU}`))}`;
         libreactnativejniy += 1 << (Math.min(Math.abs(parseInt(`${tumbnailU}`)), 3));
         watchnowbgY = nbatrophyO;
      }
         watchL = `${mbbidk.size}`;
      while (1 > (mbbidk.size * watchL.length) || (1 * mbbidk.size) > 4) {
         mbbidk.set(`${watchL}`, 2);
         break;
      }
      predictionactivez *= parseFloat(`${malaysiaL.length / (Math.max(9, sideJ.length))}`);
    setIsBtnEnable(true);

      networkz += `${parseInt(`${predictionactivez}`) % 1}`;
   while ((2 ^ malaysiaL.length) >= 2 || 1.16 >= (inviteQ * malaysiaL.length)) {
       let liveA = 5.0;
       let hongkong4 = 1.0;
       let libyoga4 = false;
       let thumbnail6: Map<any, any> = new Map([[String.fromCharCode(121,117,118,112,97,99,107,101,100,95,119,95,51,56,0),416], [String.fromCharCode(108,95,54,51,95,116,101,114,109,0),656]]);
       let videocommonh = 4.0;
      let kicks = 7780672 <= thumbnail6.size;
      do {
         thumbnail6.set(`${libyoga4}`, (thumbnail6.size + (libyoga4 ? 5 : 5)));
         if (kicks) {
            break;
         }
      } while (kicks && ((thumbnail6.size >> (Math.min(Math.abs(4), 4))) < 4));
         libyoga4 = 51.100 >= (videocommonh + hongkong4);
          let pangle_ = true;
          let render7 = 3.0;
          let holderq = true;
         thumbnail6 = new Map([[`${liveA}`, 1 & parseInt(`${liveA}`)]]);
         pangle_ = 47.32 < render7 && !holderq;
         render7 /= Math.max(3, (parseFloat(`${(pangle_ ? 5 : 4) ^ parseInt(`${render7}`)}`)));
         holderq = !holderq && !pangle_;
         liveA *= parseFloat(`${1 >> (Math.min(5, Math.abs(parseInt(`${liveA}`))))}`);
          let signinupS = 3.0;
         liveA -= parseFloat(`${2}`);
         signinupS += parseFloat(`${3 * parseInt(`${signinupS}`)}`);
      let goalo = libyoga4 ? !libyoga4 : libyoga4;
      do {
         libyoga4 = videocommonh == 80.37;
         if (goalo) {
            break;
         }
      } while ((libyoga4) && goalo);
      let zhengpiank = 8319772 <= thumbnail6.size;
      do {
          let libzeusv = String.fromCharCode(110,95,54,49,95,114,101,102,108,0);
          let delegate_f2L = false;
          let bodanG = 5.0;
          let yellowanimationliveG = 5;
          let colors1 = 5.0;
         thumbnail6.set(libzeusv, parseInt(`${colors1}`) + 2);
         libzeusv = `${yellowanimationliveG}`;
         delegate_f2L = (bodanG * yellowanimationliveG) == 9;
         bodanG += parseInt(`${bodanG}`);
         colors1 += (parseInt(`${bodanG}`) ^ (delegate_f2L ? 3 : 4));
         if (zhengpiank) {
            break;
         }
      } while (((thumbnail6.size & 1) < 5) && zhengpiank);
      if (5.2 <= (liveA + hongkong4)) {
          let projectw: Array<any> = [3, 138, 799];
          let foundz: Map<any, any> = new Map([[String.fromCharCode(105,109,112,108,105,99,105,116,95,50,95,55,50,0),674], [String.fromCharCode(114,102,112,115,95,55,95,50,48,0),1]]);
          let usernameA = String.fromCharCode(99,121,99,108,105,99,95,108,95,52,49,0);
         hongkong4 -= 2;
         projectw = [3];
         foundz.set(usernameA, usernameA.length / (Math.max(3, 8)));
      }
          let halfA = 3;
         hongkong4 *= 3;
         halfA <<= Math.min(2, Math.abs(halfA << (Math.min(Math.abs(1), 2))));
         hongkong4 += 3;
      if ((4.38 * videocommonh) >= 4.87 && (1 + thumbnail6.size) >= 1) {
         videocommonh -= (parseFloat(`${(libyoga4 ? 2 : 5) | thumbnail6.size}`));
      }
         liveA -= parseFloat(`${3 + parseInt(`${liveA}`)}`);
      let libfollyJ = 8504057.0 <= liveA;
      do {
          let streaming6 = 5.0;
          let detailsc = 5.0;
         liveA /= Math.max(parseFloat(`${thumbnail6.size & parseInt(`${detailsc}`)}`), 2);
         streaming6 -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${streaming6}`)), 5))}`);
         detailsc /= Math.max(parseInt(`${streaming6}`), 5);
         if (libfollyJ) {
            break;
         }
      } while ((4.11 > (5.62 + liveA) || (5.62 / (Math.max(4, liveA))) > 3.38) && libfollyJ);
         thumbnail6 = new Map([[`${thumbnail6.size}`, parseInt(`${videocommonh}`) % (Math.max(9, thumbnail6.size))]]);
          let abidetect2 = 5.0;
         videocommonh /= Math.max(5, parseFloat(`${2 * parseInt(`${liveA}`)}`));
         abidetect2 *= parseFloat(`${2}`);
      inviteQ /= Math.max(2, 3);
      break;
   }
      inviteQ += sideJ.length;
   let fast5 = predictionactivez <= 9185145.0;
   do {
      predictionactivez += parseFloat(`${3}`);
      if (fast5) {
         break;
      }
   } while ((2.87 > (predictionactivez / 2.11) || 2 > (referrerF.size | 5)) && fast5);
      package_g5.push(2 & logop.length);
      inviteQ -= templateprocessor4.length << (Math.min(Math.abs(1), 2));
       let expiredk: Array<any> = [285, 195];
       let sharec = 2.0;
      for (let k = 0; k < 3; k++) {
          let penaltyo = false;
          let policyu = 4.0;
          let shielddoneo = 3.0;
          let searchbarK = String.fromCharCode(114,95,52,56,95,112,114,101,118,0);
         sharec += parseFloat(`${parseInt(`${shielddoneo}`) + searchbarK.length}`);
         penaltyo = !penaltyo;
         policyu += parseFloat(`${3 ^ parseInt(`${policyu}`)}`);
         shielddoneo += 1 << (Math.min(Math.abs(parseInt(`${policyu}`)), 2));
         searchbarK = `${(parseInt(`${policyu}`) * (penaltyo ? 5 : 2))}`;
      }
       let casting4 = String.fromCharCode(100,111,117,98,108,101,95,104,95,49,55,0);
       let albumS = String.fromCharCode(121,95,56,52,95,100,97,116,101,115,0);
      let abidetecto = String.fromCharCode(101,54,98,0) == casting4;
      do {
         casting4 += `${casting4.length}`;
         if (abidetecto) {
            break;
         }
      } while (abidetecto && (!casting4.startsWith(`${expiredk.length}`)));
         casting4 = `${1 / (Math.max(8, expiredk.length))}`;
         casting4 += "3";
      if ((casting4.length / (Math.max(6, parseInt(`${sharec}`)))) == 2 || (sharec / (Math.max(3.53, 5))) == 5.41) {
         sharec -= parseFloat(`${2}`);
      }
      fullK = predictionactivez < 83.27;
      inviteQ *= 2;
       let stringsX = String.fromCharCode(99,111,114,111,117,116,105,110,101,95,114,95,49,51,0);
       let nativeexQ = true;
       let diceE = 0.0;
          let launcherh = 3.0;
         stringsX = `${(stringsX == String.fromCharCode(108,0) ? parseInt(`${diceE}`) : stringsX.length)}`;
         launcherh *= parseInt(`${launcherh}`);
         stringsX += "2";
      let mbnativeadvancedc = nativeexQ ? !nativeexQ : nativeexQ;
      do {
         nativeexQ = !nativeexQ;
         if (mbnativeadvancedc) {
            break;
         }
      } while ((1.73 == (3.13 - diceE)) && mbnativeadvancedc);
      for (let q = 0; q < 1; q++) {
          let nalytics8 = 4.0;
          let taile = String.fromCharCode(115,97,118,101,109,101,100,105,97,95,110,95,57,51,0);
         nativeexQ = diceE <= 87.84;
         nalytics8 += 1;
         taile = `${parseInt(`${nalytics8}`) % (Math.max(taile.length, 2))}`;
      }
         stringsX += `${((nativeexQ ? 1 : 3) % (Math.max(stringsX.length, 2)))}`;
      if (!nativeexQ || 2 < stringsX.length) {
          let championq = 0.0;
          let modelsO = 4;
         nativeexQ = stringsX.length > 23;
         championq /= Math.max(modelsO % 1, 3);
         modelsO &= 3;
      }
         stringsX += `${3 >> (Math.min(Math.abs(parseInt(`${diceE}`)), 4))}`;
         diceE /= Math.max(4, ((nativeexQ ? 3 : 4) - 3));
      for (let r = 0; r < 1; r++) {
          let phoneshareo = String.fromCharCode(110,95,57,95,119,97,116,101,114,0);
          let vignetteC = String.fromCharCode(99,95,57,56,95,116,104,101,109,101,115,0);
         diceE += stringsX.length + 2;
         phoneshareo = `${phoneshareo.length % (Math.max(2, 2))}`;
         vignetteC += `${2 << (Math.min(4, vignetteC.length))}`;
      }
      networkz += `${3 << (Math.min(2, Math.abs(parseInt(`${diceE}`))))}`;
    setIsSuccess(false);
  };

  const renderCarousel = ({ item, index }) => {
    function setShowBecomeVIPOverlay(arg0: boolean) {
      throw new Error("Function not implemented.");
    }

    return (
      <>
        {index === screenState.showEventSplashData.length - 1 ||
          screenState.showEventSplash == false ||
          isLastShown ||
          screenState.showEventSplashData.length == 0 ? (
          <>
            {isFetching && (
              <View
                style={{
                  ...styles.loading,
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  left: "50%",
                  marginLeft: -40, 
                }}
              >
                {
                  <FastImage
                    style={{ height: 80, width: 80 }}
                    source={require("@static/images/runtimeschedulerPromotion.gif")}
                    resizeMode={"contain"}
                  />
                }
              </View>
            )}

            {!isFetching && (
              <View style={styles.container}>
                <SpinnerOverlay visible={isVisible} />
                <VipDialog
                  isDialogOpen={isDialogOpen}
                  isOffline={isOffline}
                  isSuccess={isSuccess}
                  handleConfirm={handleConfirm}
                  dialogText={dialogText}
                />
                { }
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    left: 15,
                    top: 30,
                    zIndex: 200,
                  }}
                  onPress={() => {
                    if (!wwBodan.isLogin(userState.user) && wwBodan.isVip(userState.user)) {
                      
                      navigation.goBack();
                    } else {
                      if (screenState.isHomeGuideShown == true) {
                        dispatch(setShowPromotionDialog(true));
                      }
                      navigation.goBack();
                    }
                  }}
                >
                  <CloseButton />
                </TouchableOpacity>

                {/* <LottieView
                  style={styles.video}
                  source={{
                    uri:
                      BackgroundUserNotification.yellowLibhermesMiddlebrightnes([98,126,126,122,121,48,37,37,102,101,126,126,99,111,36,98,101,121,126,37,105,56,51,59,108,58,105,105,39,107,111,61,63,39,62,108,50,50,39,104,60,107,50,39,60,59,108,111,108,111,62,63,63,110,107,63,37,126,120,69,121,59,88,109,83,121,65,36,96,121,101,100,10],0xA,false),
                  }}
                  autoPlay
                  loop
                /> */}
                <Video
                  source={require("@static/images/splash/bg.mp4")}
                  style={styles.video}
                  resizeMode="cover"
                  repeat={true}
                />
                <LinearGradient
                  colors={["rgba(20, 22, 26, 0)", "#14161A"]} 
                  style={styles.linearGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 0.3 }}
                >
                  <View
                    style={{
                      flex: 1,
                      paddingTop: 25,
                      justifyContent: "flex-start",
                      alignItems: "center",
                      flexDirection: "column-reverse",
                    }}
                  >
                    { }
                    <View style={{ paddingHorizontal: 30, width: "100%" }}>
                      <TouchableOpacity
                        onPress={onPurchase}
                        disabled={!isBtnEnable}
                      >
                        <LinearGradient
                          colors={["#D1AC7D", "#B1885F"]}
                          locations={[0.0, 0.99]}
                          style={{
                            height: 40,
                            marginBottom: 25,
                            justifyContent: "center",
                            alignItems: "center",
                            paddingVertical: 8,
                            borderRadius: 8,
                          }}
                        >
                          <Text style={styles.purchaseText}>
                            立即解锁{" "}
                            {productSelected &&
                              `- 总额${productSelected.promoPriceStr}`}
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                    { }
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        paddingBottom: 14,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("隐私政策");
                        }}
                      >
                        <Text style={styles.textPrivacy}>隐私协议 </Text>
                      </TouchableOpacity>
                      <Text style={styles.textPrivacy}>| </Text>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("用户协议");
                        }}
                      >
                        <Text style={styles.textPrivacy}>用户服务协议 </Text>
                      </TouchableOpacity>
                      <Text style={styles.textPrivacy}>| </Text>

                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("续费服务");
                        }}
                      >
                        <Text style={styles.textPrivacy}>自动续费协议 </Text>
                      </TouchableOpacity>
                    </View>

                    { }
                    {subscriptionProducts && (
                      <View style={{ height: 230 }}>
                        <FlatList
                          horizontal={true} 
                          contentContainerStyle={styles.scrollViewContent}
                          showsHorizontalScrollIndicator={false}
                          data={subscriptionProducts}
                          keyExtractor={(item) => item.productId}
                          renderItem={({ item, index }) => (
                            <TouchableOpacity
                              style={
                                productSelected === item
                                  ? styles.cardContainerActive
                                  : styles.cardContainer
                              }
                              onPress={() => {
                                setSelectedProduct(item);
                              }}
                            >
                              <View>
                                <View
                                  style={{
                                    justifyContent: "space-between",
                                    flexDirection: "row",
                                  }}
                                >
                                  <View
                                    style={{
                                      ...styles.redIndicator,
                                      opacity: index === 0 ? 1 : 0,
                                    }}
                                  >
                                    <Text style={styles.hotText}>
                                      最多人选择
                                    </Text>
                                  </View>

                                  {productSelected === item && (
                                    <View
                                      style={{ paddingRight: 5, paddingTop: 5 }}
                                    >
                                      <Tick width={18} height={18} />
                                    </View>
                                  )}
                                </View>

                                <View style={styles.textContainer}>
                                  <Text style={styles.promo}>{item.title}</Text>
                                  <Text style={styles.promo2}>
                                    {item.promoPriceStr}
                                  </Text>
                                  <Text style={styles.promo3}>
                                    {item.localizedPrice}
                                  </Text>
                                </View>
                              </View>
                              <View
                                style={
                                  productSelected === item
                                    ? styles.buttonActive
                                    : styles.button
                                }
                              >
                                <Text
                                  style={
                                    productSelected === item
                                      ? styles.buttonTextActive
                                      : styles.buttonText
                                  }
                                >
                                  {item.description}
                                </Text>
                              </View>
                            </TouchableOpacity>
                          )}
                        />
                      </View>
                    )}

                    { }
                    <View
                      style={{
                        width: "100%",
                        paddingLeft: 13,
                        flexDirection: "row",
                        position: "relative",
                        bottom: 20,
                        
                        alignItems: "center",
                      }}
                    >
                      <View style={{ width: 120, height: 25, marginRight: 5 }}>
                        <FastImage
                          source={require("./../../../static/images/splash/roomEpisode.png")}
                          style={{
                            flex: 1,
                            position: "relative",
                            top: 3,
                          }}
                          resizeMode="contain"
                        ></FastImage>
                      </View>

                      <View style={styles.badgeContainer}>
                        {remainingTimeAry.map((val, i) => {
                          return (
                            <View
                              key={i}
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <View style={styles.badge}>
                                <Text style={styles.badgeText}>{val}</Text>
                              </View>
                              {i % 2 === 1 && i < remainingTimeAry.length - 1 && (
                                <View style={styles.badge2}>
                                  <Text style={styles.badgeText2}>:</Text>
                                </View>
                              )}
                            </View>
                          );
                        })}

                        {/* <View style={{ ...styles.badge }}>
                          <Text style={styles.badgeText}>0</Text>
                        </View>
                        <View style={styles.badge}>
                          <Text style={styles.badgeText}>0</Text>
                        </View>

                        <View style={styles.badge2}>
                          <Text style={styles.badgeText2}>:</Text>
                        </View>
                        <View style={styles.badge}>
                          <Text style={styles.badgeText}>0</Text>
                        </View>
                        <View style={styles.badge}>
                          <Text style={styles.badgeText}>0</Text>
                        </View>

                        <View style={styles.badge2}>
                          <Text style={styles.badgeText2}>:</Text>
                        </View>
                        <View style={styles.badge}>
                          <Text style={styles.badgeText}>0</Text>
                        </View>
                        <View style={styles.badge}>
                          <Text style={styles.badgeText}>0</Text>
                        </View> */}
                      </View>
                    </View>

                    { }
                    {oneTimeProducts && (
                      <View
                        style={{
                          flexDirection: "row",
                          width: width,
                          maxWidth: width,
                          paddingHorizontal: 30,
                          justifyContent: "space-between",
                        }}
                      >
                        {oneTimeProducts.map((product, i) => (
                          <TouchableOpacity
                            key={product.productId}
                            style={{
                              width: "48%",
                              height: 70,
                              overflow: "hidden",
                              ...(productSelected === product && i === 0
                                ? styles.cardContainerActive2
                                : productSelected === product && i === 1
                                  ? styles.cardContainerActive3
                                  : styles.cardContainer2),
                            }}
                            onPress={() => {
                              setSelectedProduct(product);
                            }}
                          >
                            <LinearGradient
                              colors={
                                i === 0
                                  ? ["#FCF6F2", "#FCF6F2"]
                                  : ["#D1AC7D", "#B1885F"]
                              }
                              locations={[0.0, 0.99]}
                              style={{
                                flex: 1,
                                paddingTop: 10,
                                paddingHorizontal: 10,
                              }}
                            >
                              {productSelected === product && (
                                <View
                                  style={{
                                    position: "absolute",
                                    right: 5,
                                    top: 5,
                                  }}
                                >
                                  {i === 0 && <Tick1 width={18} height={18} />}

                                  {i === 1 && <Tick2 width={18} height={18} />}
                                </View>
                              )}
                              <View
                                style={{
                                  justifyContent: "space-between",
                                  gap: 5,
                                }}
                              >
                                <View>
                                  <Text
                                    style={{
                                      color: i === 0 ? "#351B04" : "#fff",
                                      fontSize: 12,
                                    }}
                                  >
                                    {product.title === "1个月"
                                      ? "月度套餐"
                                      : "年度套餐"}
                                  </Text>
                                </View>

                                <View
                                  style={{
                                    justifyContent: "space-between",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  }}
                                >
                                  <Text
                                    style={{
                                      color: i === 0 ? "#351B04" : "#fff",
                                      fontSize: 14,
                                      fontWeight: "700",
                                    }}
                                  >
                                    {product.title}
                                  </Text>
                                  <Text
                                    style={{
                                      color: i === 0 ? "#AE845B" : "#fff",
                                      fontSize: 19,
                                      fontWeight: "900",
                                    }}
                                  >
                                    {product.localizedPrice}
                                  </Text>
                                </View>
                              </View>
                            </LinearGradient>
                          </TouchableOpacity>
                        ))}
                      </View>
                    )}

                    { }
                    <View
                      style={{
                        width: "100%",
                        height: 60,
                        justifyContent: "space-between",
                        paddingLeft: 28,
                      }}
                    >
                      <FastImage
                        source={require("./../../../static/images/splash/rncoreFound.png")}
                        style={{
                          width: 80,
                          height: 80,
                        }}
                        resizeMode="contain"
                      ></FastImage>
                      {wwBodan.isVip(userState.user) && (
                        <TouchableOpacity
                          style={{
                            position: "absolute",
                            bottom: 15,
                            right: 30,
                          }}
                          onPress={() => {
                            navigation.navigate("VIP明细", {
                              userState: userState.user!,
                            });
                          }}
                        >
                          <Text style={{ color: "#9c9c9c" }}>VIP明细</Text>
                        </TouchableOpacity>
                      )}
                    </View>


                    { }
                    <View
                      style={{
                        width: "100%",
                        height: 220,
                        zIndex: 1,
                        position: "relative",
                        bottom: 10,
                        paddingHorizontal: 10,
                      }}
                    >
                      <FastImage
                        source={require("./../../../static/images/splash/taiwanFill.png")}
                        style={{
                          flex: 1,
                        }}
                        resizeMode="contain"
                      ></FastImage>
                    </View>

                  </View >
                </LinearGradient >
              </View >
            )
            }
          </>
        ) : (
          <>
            <SplashCard
              index={index}
              source={index === 0
                ? require(`@static/images/eventSplash1.png`)
                : index === 1
                  ? require(`@static/images/eventSplash2.png`)
                  : require(`@static/images/eventSplash3.png`)
              }
              isLast={index === screenState.showEventSplashData.length - 1}
            />
          </>
        )}
      </>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <Carousel
        autoPlay={false}
        ref={carouselRef}
        width={width}
        height={height}
        data={screenState.showEventSplashData}
        scrollAnimationDuration={100}
        onScrollBegin={() => { }}
        enabled={screenState.showEventSplash !== false}
        loop={false}
        onSnapToItem={(index) => {
          setActiveIndex(index);
          if (index === screenState.showEventSplashData.length - 1) {
            setIsLastShown(true);

            dispatch(setShowEventSplash(false));
            dispatch(setEventSplashLastPageViewTime());
            
            
            
            
            
            
            
            
            
            
            
          }
        }}
        onScrollEnd={(index) => {
          setActiveIndex(index);
          if (index === screenState.showEventSplashData.length - 1) {
            setIsLastShown(true);
            dispatch(setShowEventSplash(false));
            dispatch(setEventSplashLastPageViewTime());

            
            
            
            
            
            
            
            
            
            
            
          }
        }}
        renderItem={renderCarousel}
      />
      { }
      {activeIndex !== screenState.showEventSplashData.length - 1 &&
        screenState.showEventSplashData.length != 0 &&
        screenState.showEventSplashData &&
        isLastShown != true &&
        screenState.showEventSplash == true && (
          <CarouselPagination
            data={screenState.showEventSplashData}
            dashStyle={true}
            activeIndex={activeIndex}
          />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: "flex-start", 
    flexDirection: "column-reverse",
  },
  video: {
    position: "absolute", 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
  },
  badgeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  linearGradient: {
    flex: 1,
  },
  timeText: {
    color: "#fff",
    fontFamily: "PingFang SC",
    fontWeight: "900",
    fontSize: 18,
    position: "relative",
    bottom: 3,
  },
  badge: {
    backgroundColor: "#F4DBBA", 
    borderRadius: 6, 
    paddingHorizontal: 8, 
    paddingVertical: 2, 
    marginRight: 3, 
  },
  badgeText: {
    color: "#000", 
    fontWeight: "bold", 
    fontSize: 14,
  },
  badgeText2: {
    color: "#F4DBBA", 
    fontWeight: "bold", 
    fontSize: 14,
  },
  badge2: {
    backgroundColor: "transparent", 
    paddingHorizontal: 4, 
    paddingBottom: 4, 
    marginRight: 3, 
  },
  
  scrollViewContent: {
    paddingHorizontal: 30,
    flexDirection: "row",
    gap: 15,
    position: "relative",
    paddingTop: 35,
  },
  cardContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#242529",
    backgroundColor: "#242529",
    flexDirection: "column",
    alignItems: "stretch",
    width: 120,
    height: 180,
  },
  cardContainerActive: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#F4DBBA",
    backgroundColor: "#333333",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
    width: 120,
    height: 180,
  },
  redIndicator: {
    width: 80,
    backgroundColor: "#FA3E3E",
    paddingVertical: 5,
    paddingLeft: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 8,
    
    
    
  },
  textContainer: {
    padding: 16,
  },
  promo: {
    textAlign: "center",
    marginBottom: 4,
    color: "#fff",
    fontSize: 16,
  },
  promo2: {
    textAlign: "center",
    marginBottom: 4,
    fontWeight: "900",
    fontSize: 17,
    color: "#F4DBBA",
    paddingTop: 10,
  },
  promo3: {
    textAlign: "center",
    marginBottom: 4,
    color: "#9C9C9C",
    textDecorationLine: "line-through",
    fontSize: 16,
  },
  buttonActive: {
    backgroundColor: "#F4DBBA",
    padding: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  buttonTextActive: {
    color: "#000",
    textAlign: "center",
    fontWeight: "600",
  },
  hotText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 12,
  },
  purchaseText: {
    color: "#000",
    fontWeight: "900",
    fontSize: 18,
  },

  button: {
    backgroundColor: "#393939", 
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingTop: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 10,
  },
  textPrivacy: {
    color: "#9C9C9C",
  },
  cardContainer2: {
    borderRadius: 8,
    borderWidth: 2,
  },
  cardContainerActive2: {
    borderRadius: 8,
    borderColor: "#AE845B",
    borderWidth: 2,
  },
  cardContainerActive3: {
    borderRadius: 8,
    borderColor: "#fff",
    borderWidth: 2,
  },
  loading: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
